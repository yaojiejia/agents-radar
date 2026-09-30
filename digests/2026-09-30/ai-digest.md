# 📡 AI Ecosystem Digest — 2026-09-30

> Generated 2026-09-30 01:52 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 148,596 | 33 | 1 | 4 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 127,217 | 28 | 3 | 50 | 7 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,193 | 1 | 0 | 7 | 3 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,226 | 15 | 21 | 0 | 5 |
| [OpenCode](https://github.com/anomalyco/opencode) | 210,950 | 25 | 15 | 4 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,225 | 39 | 4 | 5 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,802 | 145 | 61 | 112 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 250,092 | 15 | 6 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,961 | 40 | 39 | 46 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,608 | 11 | 11 | 44 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,903 | 14 | 28 | 35 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,933 | 3 | 2 | 1 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,882 | 18 | 18 | 45 | 5 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,041 | 5 | 22 | 88 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,120 | 4 | 2 | 12 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,981 | 17 | 6 | 2 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple versions including [rust-v0.161.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.2).
- **Claude Code** merged a significant PR that addresses prompt handling, specifically [#98275](https://github.com/anthropics/claude-code/pull/98275) for debugging agent logs.
- **Qwen Code** introduced notable enhancements with the release of [v0.24.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7).
- **Ollama** saw a surge of interest regarding versioning clarity with the hot new issue [#18706](https://github.com/ollama/ollama/issues/18706) about pre-release confusion, accumulating 11 comments.
- **OpenClaw** recorded a critical new bug related to user authentication, detailed in issue [#161216](https://github.com/openclaw/openclaw/issues/161216), which has attracted 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 148,596 · **Open issues:** 13,720 · **Last push:** <1h ago

On September 30, 2026, Claude Code released version v2.1.285, introducing several key features including the `CLAUDE_CODE_DISABLE_WEB_FETCH` environment variable for disabling the WebFetch tool, and the new command `claude --desktop` for launching the desktop app with options for resuming sessions. Additionally, the update included `claude plugin configure <plugin>`, allowing users to view or save plugin options. Significant merged PRs addressed improved logging for loaded agents, continued system prompt sections past user tier, and adjustments to settings rules and managed options. Among the newly reported issues, a notable concern involves the desktop app's auto mode classifier blocking user-approved actions in Chrome, leading to frustration and a lack of manual retry options.

#### 🚀 New Releases
- [v2.1.285](https://github.com/anthropics/claude-code/releases/tag/v2.1.285) v2.1.285

#### ✅ Merged PRs
- [#98275](https://github.com/anthropics/claude-code/pull/98275) agents-md: send the AGENTS.md loaded line to the debug log
- [#97241](https://github.com/anthropics/claude-code/pull/97241) sec-default: the system prompt's sections continue past the user tier
- [#98080](https://github.com/anthropics/claude-code/pull/98080) sec-default: a settings deny rule holds over an allow or ask from a plugin the person installed
- [#98083](https://github.com/anthropics/claude-code/pull/98083) sec-default: a managed option, allowManagedModsOnly, keeps the mods a person installs from loading

#### 🐛 New Issues
- [#98145](https://github.com/anthropics/claude-code/issues/98145) 지정한 응답 언어(한국어)를 도구 호출 사이 중간 안내에서 반복적으로 지키지 않음 `duplicate` `area:model` `platform:vscode` 💬20
- [#98292](https://github.com/anthropics/claude-code/issues/98292) [GitHub integration] `invalid` `github-integration` 💬3
- [#98184](https://github.com/anthropics/claude-code/issues/98184) [BUG] After a Wi-Fi change, the next request hangs 184 s on a dead connection before retrying (Linux) `bug` `has repro` `platform:linux` `area:networking` 💬2
- [#98169](https://github.com/anthropics/claude-code/issues/98169) Desktop app: auto mode classifier keeps blocking user-approved Claude in Chrome actions after leaving auto mode; no manual-approval retry offered `bug` `platform:macos` `area:permissions` `area:desktop` 💬2
- [#98287](https://github.com/anthropics/claude-code/issues/98287) Cowork scheduled tasks: permission classifier refuses owner-authorized email sends ("Real-World Transactions"); same send succeeds in an attended session; no per-task allow `bug` `area:cowork` `platform:web` `area:permissions` 💬1
- [#98283](https://github.com/anthropics/claude-code/issues/98283) [FEATURE] Desktop: let Claude react automatically when a command finishes in the Terminal panel `enhancement` `platform:windows` `area:desktop` 💬1
- [#98277](https://github.com/anthropics/claude-code/issues/98277) [GitHub integration] Chat says "no GitHub connector available" even though account is connected and Claude GitHub App is installed `bug` `area:mcp` `github-integration` 💬1
- [#98211](https://github.com/anthropics/claude-code/issues/98211) [Bug] OpSec filter produces false positive for legitimate cybersecurity research `bug` `duplicate` `platform:macos` `area:model` 💬1
- [#98297](https://github.com/anthropics/claude-code/issues/98297) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#98296](https://github.com/anthropics/claude-code/issues/98296) [GitHub integration] `invalid` `github-integration`
- [#98295](https://github.com/anthropics/claude-code/issues/98295) Whenever a thread is open and resolved, the remote sessions remains and not ful… `bug` `needs-info`
- [#98294](https://github.com/anthropics/claude-code/issues/98294) aparecendo como bloqueado, já autorizei varias vezes.. e continua nome amarelo … `bug` `needs-info` `needs-repro`
- [#98293](https://github.com/anthropics/claude-code/issues/98293) Claude Desktop (Windows MSIX): app fails to launch after every in-app update until the machine is rebooted (0x80070020) `bug` `platform:windows` `area:installation` `area:desktop`
- [#98291](https://github.com/anthropics/claude-code/issues/98291) [BUG] linux-arm64: --version works, --help and agents hang with empty output (Orange Pi Zero 3) `bug` `has repro` `platform:linux` `area:core`
- [#98289](https://github.com/anthropics/claude-code/issues/98289) [Bug] Anthropic API Error: Request blocked by safety guidelines for legitimate antivirus development `bug` `platform:windows` `area:model`
- [#98290](https://github.com/anthropics/claude-code/issues/98290) [Bug] Unable to export conversation content `bug` `duplicate` `platform:windows` `area:tui`
- [#98288](https://github.com/anthropics/claude-code/issues/98288) [Desktop] Browser pane tools unavailable in SSH sessions (works in Local) `bug` `platform:macos` `area:desktop`
- [#98286](https://github.com/anthropics/claude-code/issues/98286) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#98285](https://github.com/anthropics/claude-code/issues/98285) [Desktop] `claude://code/new?folder=…&q=…` intermittently starts the session in a scratch workspace instead of the folder `bug` `has repro` `platform:linux` `area:desktop`
- [#98284](https://github.com/anthropics/claude-code/issues/98284) [Feature Request] Forked subagents should support independent model and effort level configuration `enhancement` `platform:macos` `area:agents`
- [#98282](https://github.com/anthropics/claude-code/issues/98282) [Bug] Feedback UI overlay missing dismissal keybinding and UI path instructions `bug` `platform:linux` `area:tui` `platform:wsl`
- [#98281](https://github.com/anthropics/claude-code/issues/98281) [GitHub integration] `bug` `platform:web` `github-integration`
- [#98280](https://github.com/anthropics/claude-code/issues/98280) [BUG] [Desktop] Windows: terminal pane on SSH session fails with tilde-expansion error for ~/.ssh/id_rsa `bug` `platform:windows` `area:desktop`
- [#98232](https://github.com/anthropics/claude-code/issues/98232) [BUG] /context output is appended to conversation history, consuming the context it measures `bug` `has repro` `platform:linux` `area:tui`
- [#98279](https://github.com/anthropics/claude-code/issues/98279) [BUG] Linux: JPEG clipboard image passes detection but saveImage only reads PNG/BMP, so Ctrl+V attaches nothing `bug` `has repro` `platform:linux` `area:tui`
- [#98278](https://github.com/anthropics/claude-code/issues/98278) [BUG] Built-in /security-review ends the turn when a skill invokes it mid-workflow, stalling the rest of the pipeline `bug` `platform:macos` `area:security` `area:skills`
- [#98276](https://github.com/anthropics/claude-code/issues/98276) [FEATURE] Let Claude Design write to GitHub and Azure DevOps repos `invalid`
- [#98274](https://github.com/anthropics/claude-code/issues/98274) [BUG] VS Code extension lists desktop-app local sessions but opens them as a read-only snapshot (no continue, no Remote Control) `bug` `platform:macos` `platform:vscode`
- [#98273](https://github.com/anthropics/claude-code/issues/98273) Background Bash tasks are killed at an undocumented time limit, interrupting long-running jobs `enhancement` `area:bash`
- [#98272](https://github.com/anthropics/claude-code/issues/98272) ExitWorktree(remove) leaves an empty directory and the branch when a background task started in the worktree is still running (Windows) `bug` `has repro` `platform:windows` `area:tools`
- [#98271](https://github.com/anthropics/claude-code/issues/98271) [Cowork web] "Temporarily unable to authenticate. Please retry. (×3)" banner while status page shows all systems operational `bug` `area:auth` `area:claude-code-web` `area:cowork`
- [#98218](https://github.com/anthropics/claude-code/issues/98218) [GitHub integration] Private personal repo visible in picker but inaccessible via connector `invalid` `github-integration`
- [#98270](https://github.com/anthropics/claude-code/issues/98270) [Bug] Instruction following inconsistency across modes - requires unsafe hooks workaround `bug` `platform:linux` `area:model` `platform:vscode`

#### 🔒 Closed Issues
- [#82044](https://github.com/anthropics/claude-code/issues/82044) [BUG] Uploading multiple zipped skills: replace-confirmation only applies to one file, rest of batch is rejected

### OpenAI Codex (`openai/codex`)

**Stars:** 127,217 · **Open issues:** 19,593 · **Last push:** <1h ago

On September 30, 2026, OpenAI Codex saw the release of several versions including rust-v0.160.0-alpha.6.1, which is the latest in the alpha series, and bug fix update rust-v0.159.2 that notably suppressed console windows flashing on Windows during the launch of background processes. The previous version, rust-v0.159.1, introduced GPT-6.1 Sol as the default model in bundled catalogs. Among the merged pull requests, significant changes included enabling analytics by default for daemon-launched app servers and pruning diagnostic logs by age and size. However, several notable issues emerged, including bug #49431, which reported multiple external command prompt windows popping up when running Codex CLI in PyCharm terminal on Windows.

#### 🚀 New Releases
- [rust-v0.160.0-alpha.6.1](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.6.1) 0.160.0-alpha.6.1
- [rust-v0.159.2](https://github.com/openai/codex/releases/tag/rust-v0.159.2) 0.159.2
- [rust-v0.159.1](https://github.com/openai/codex/releases/tag/rust-v0.159.1) 0.159.1
- [rust-v0.159.0](https://github.com/openai/codex/releases/tag/rust-v0.159.0) 0.159.0
- [rust-v0.161.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.2) 0.161.0-alpha.2
- [rust-v0.161.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.1) 0.161.0-alpha.1
- [rust-v0.160.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.6) 0.160.0-alpha.6

#### ✅ Merged PRs
- [#49432](https://github.com/openai/codex/pull/49432) Preserve bootstrap discovery across authentication changes
- [#49426](https://github.com/openai/codex/pull/49426) Enable analytics by default for daemon-launched app servers
- [#49425](https://github.com/openai/codex/pull/49425) Prune diagnostic logs periodically by age and database size
- [#49424](https://github.com/openai/codex/pull/49424) Infer Windows UNC paths with forward and mixed slashes
- [#49416](https://github.com/openai/codex/pull/49416) Omit payloads from multiline ANSI warnings
- [#49415](https://github.com/openai/codex/pull/49415) Truncate input text in protocol debug output
- [#49414](https://github.com/openai/codex/pull/49414) Filter graceful shutdown guard and trigger traces from SQLite logs
- [#49411](https://github.com/openai/codex/pull/49411) Bind the app-server time provider to a local variable
- [#49408](https://github.com/openai/codex/pull/49408) Compare tool call metadata in the recorder refresh test
- [#49407](https://github.com/openai/codex/pull/49407) Recover exec-server sessions after environment info timeouts
- [#49406](https://github.com/openai/codex/pull/49406) Support explicit cyber access programs with OpenAI API keys
- [#49403](https://github.com/openai/codex/pull/49403) Add an experimental flag for bundled tools in login shells
- [#49401](https://github.com/openai/codex/pull/49401) Preserve live tool-call metadata across request windows
- [#49395](https://github.com/openai/codex/pull/49395) Remove randomized greetings from TUI session headers
- [#49392](https://github.com/openai/codex/pull/49392) Add attributed MCP OAuth credential storage telemetry
- [#49389](https://github.com/openai/codex/pull/49389) Serialize tests that share Windows sandbox accounts
- [#49386](https://github.com/openai/codex/pull/49386) [0.160] Backport remaining Windows console fix to frozen alpha.6
- [#49388](https://github.com/openai/codex/pull/49388) Fix Windows path inference for opaque URIs with slash prefixes
- [#49385](https://github.com/openai/codex/pull/49385) [0.159] Backport Windows console suppression for 0.159.2
- [#49384](https://github.com/openai/codex/pull/49384) Track credential storage outcomes and redact sensitive errors
- [#49379](https://github.com/openai/codex/pull/49379) Compile hook matchers during discovery
- [#49369](https://github.com/openai/codex/pull/49369) Update Bedrock GPT-6 Sol catalog tests to expect multi-agent V2
- [#49361](https://github.com/openai/codex/pull/49361) Clarify credential storage wording across authentication UI and docs
- [#49360](https://github.com/openai/codex/pull/49360) Carry shell invocation metadata and report executor PATH directories
- [#49357](https://github.com/openai/codex/pull/49357) Continue Markdown blockquotes when pasting multiline text
- [#49353](https://github.com/openai/codex/pull/49353) Allow approved filesystem escalation while preserving denied reads
- [#49342](https://github.com/openai/codex/pull/49342) [0.159] Backport GPT-6.1 Sol Bedrock catalogs
- [#49345](https://github.com/openai/codex/pull/49345) Enable multi-agent V2 and Ultra reasoning on Amazon Bedrock
- [#49323](https://github.com/openai/codex/pull/49323) [0.159] Prepare 0.159.1 release backports
- [#49339](https://github.com/openai/codex/pull/49339) Add GPT-6.1 Sol to Bedrock catalogs and make it the default
- [#49332](https://github.com/openai/codex/pull/49332) Clean up canceled exec-server RPC requests immediately
- [#49330](https://github.com/openai/codex/pull/49330) Keep remote control reconnect backoff capped during sustained failures
- [#49325](https://github.com/openai/codex/pull/49325) Retry Windows sandbox runner logon once on error 1056
- [#49318](https://github.com/openai/codex/pull/49318) Add GPT-6.1 Sol as the default catalog model
- [#49316](https://github.com/openai/codex/pull/49316) Bump taiki-e/install-action to v2.87.21 in CI setup
- [#49312](https://github.com/openai/codex/pull/49312) Notify parent agents when Guardian stops a subagent
- [#49308](https://github.com/openai/codex/pull/49308) Run piped legacy Windows sandbox processes without a console
- [#49305](https://github.com/openai/codex/pull/49305) Batch metadata reads when resolving thread names
- [#49300](https://github.com/openai/codex/pull/49300) Compact the inline hidden tag buffer once per chunk
- [#49297](https://github.com/openai/codex/pull/49297) Scan the session index backwards for batch thread name lookups
- [#49295](https://github.com/openai/codex/pull/49295) Simplify configuration fingerprint canonicalization
- [#49294](https://github.com/openai/codex/pull/49294) Record Guardian context mode in review and classification telemetry
- [#49290](https://github.com/openai/codex/pull/49290) Add `/mcp login <name>` to the TUI
- [#49286](https://github.com/openai/codex/pull/49286) Model exec-server session attachment state as an enum
- [#49280](https://github.com/openai/codex/pull/49280) Restrict capability roots to captured turn environments
- [#49277](https://github.com/openai/codex/pull/49277) Avoid a turn teardown race in the Guardian agent message test
- [#49276](https://github.com/openai/codex/pull/49276) Enable enterprise MCP sign-in and account-scoped grant cleanup
- [#49275](https://github.com/openai/codex/pull/49275) Isolate realtime conversation tests from Responses prewarm connections
- [#49269](https://github.com/openai/codex/pull/49269) Preserve thread overrides and cloud policy validity during config reloads
- [#49267](https://github.com/openai/codex/pull/49267) Support remote agent message boards in multi-agent sessions

#### 🐛 New Issues
- [#49322](https://github.com/openai/codex/issues/49322) Codex Usage Reporting Metrics: Double Usage `bug` `codex-web` `rate-limits` 💬4
- [#49179](https://github.com/openai/codex/issues/49179) Android Codex Remote pairing loops back to login after "Authorize this phone" `bug` `windows-os` `auth` `remote` 💬2
- [#49326](https://github.com/openai/codex/issues/49326) Windows: managed app-server 0.159 persists after npm CLI downgrade and console popups continue `bug` `windows-os` `CLI` `app-server` 💬2
- [#49182](https://github.com/openai/codex/issues/49182) Infinite loading on launch with Windows 10 / OpenAI.Codex 26.924.2738.0 `bug` `windows-os` `app` 💬3
- [#49431](https://github.com/openai/codex/issues/49431) [Bug] Multiple external command prompt windows pop up when running Codex CLI in PyCharm terminal on Windows `bug` `windows-os` `CLI` 💬2
- [#49373](https://github.com/openai/codex/issues/49373) Windows: exec_command rejected with “blocked by policy” without an actionable explanation `bug` `windows-os` `sandbox` `tool-calls` 💬2
- [#49351](https://github.com/openai/codex/issues/49351) Voice dictation fails with 403 Forbidden in Codex VS Code extension `bug` `extension` `auth` 💬2
- [#49244](https://github.com/openai/codex/issues/49244) Windows ChatGPT desktop app spins indefinitely at startup on two PCs `bug` `windows-os` `app` 💬2
- [#49405](https://github.com/openai/codex/issues/49405) [macOS][Voice] Session stops after ~1 second with usage-limit warning despite reported 16% voice usage `bug` `rate-limits` `app` 💬2
- [#49363](https://github.com/openai/codex/issues/49363) Pro $500 weekly allowance at 86% after 1 hour 43 minutes of four High chats `bug` `rate-limits` `app` 💬2
- [#49393](https://github.com/openai/codex/issues/49393) Project folder section and Run action disappear from the summary panel in two existing chats `bug` `app` `session` 💬2
- [#49433](https://github.com/openai/codex/issues/49433) Windows sandbox setup refresh fails on inaccessible old cua_node runtime after update `bug` `windows-os` `sandbox` `app` 💬1
- [#49217](https://github.com/openai/codex/issues/49217) Inconsistent 5-hour usage reset times across Usage UI and /status `bug` `codex-web` `rate-limits` 💬1
- [#49430](https://github.com/openai/codex/issues/49430) Windows Desktop stuck indefinitely on OpenAI logo – app_start timeout, EPERM rename_staging – Windows 11 build 26200 `bug` `windows-os` `mcp` `app` 💬1
- [#49428](https://github.com/openai/codex/issues/49428) [Windows][Voice] Start Voice button missing in an existing conversation after voice ends and app restarts `bug` `windows-os` `app` `session` 💬1
- [#49420](https://github.com/openai/codex/issues/49420) Feature request: allow disabling right-click copy in the TUI `bug` `enhancement` `TUI` `CLI` 💬1
- [#49418](https://github.com/openai/codex/issues/49418) Automatically update managed app-server when Codex CLI is upgraded `enhancement` `windows-os` `CLI` `app-server` 💬1
- [#49320](https://github.com/openai/codex/issues/49320) Usage dropped too fast on sol 6.1 `bug` `codex-web` `rate-limits` 💬1
- [#49417](https://github.com/openai/codex/issues/49417) Voice request rejected as untrusted authorisation for dot Slack action `bug` `agent` 💬1
- [#49413](https://github.com/openai/codex/issues/49413) Add message filtering and keyboard navigation to Codex CLI history `enhancement` `TUI` `CLI`
- [#49409](https://github.com/openai/codex/issues/49409) [macOS][Voice] Usage-limit error on Pro while regular Codex allowance remains `bug` `rate-limits` `app` 💬1
- [#49434](https://github.com/openai/codex/issues/49434) [ChatGPT Chat][macOS/Web/Mobile] GPT-6 Pro gives generic error or unexplained limit message; VPN on/off unchanged `bug` `rate-limits` `app`
- [#49429](https://github.com/openai/codex/issues/49429) [Voice][iOS and Windows] Text steering during voice is very slow, fails to send, and can freeze the iOS app `bug` `windows-os` `iOS` `performance`
- [#49427](https://github.com/openai/codex/issues/49427) [Windows] In-app update check reports NoUpdates although Microsoft Store offers the newer package `bug` `windows-os` `app`
- [#49423](https://github.com/openai/codex/issues/49423) Windows desktop: dot fails to start local tasks with DesktopTaskWorkspaceUnavailableError `bug` `windows-os` `app` `app-server`
- [#49422](https://github.com/openai/codex/issues/49422) Unable to upload images without Access Denied error `bug` `windows-os` `tool-calls` `app`
- [#49421](https://github.com/openai/codex/issues/49421) CLI assistant misinterprets "four job boards" as Foorilla and gives web-only feedback instructions `bug` `model-behavior` `CLI`
- [#49419](https://github.com/openai/codex/issues/49419) [Linux][26.928.20755] Startup attachment cleanup sends fs/readFile without environmentId to cloud host `bug` `app` `app-server`

#### 🔒 Closed Issues
- [#25826](https://github.com/openai/codex/issues/25826) Windows Desktop: maximized window spills onto adjacent monitors in multi-monitor setup
- [#49217](https://github.com/openai/codex/issues/49217) Inconsistent 5-hour usage reset times across Usage UI and /status
- [#49320](https://github.com/openai/codex/issues/49320) Usage dropped too fast on sol 6.1

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,193 · **Open issues:** 805 · **Last push:** <1h ago

On September 30, 2026, Gemini CLI released version v0.64.0-nightly.20260930.g38700b4b3, which includes significant improvements such as enabling autonomous plan execution in non-interactive mode and fixing issues with output truncation. Additionally, the v0.63.0-preview.0 was released, featuring a retry progress indicator during connection recovery. Among the merged pull requests, the most notable fixes include the propagation of resolved folder trust state in headless mode and improvements in V1 to V2 settings migration logic. However, a new issue has emerged regarding a 400 Bad Request error related to reading image files, drawing attention from users.

#### 🚀 New Releases
- [v0.64.0-nightly.20260930.g38700b4b3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20260930.g38700b4b3) Release v0.64.0-nightly.20260930.g38700b4b3
- [v0.63.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-preview.0) Release v0.63.0-preview.0
- [v0.62.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0) Release v0.62.0

#### ✅ Merged PRs
- [#29567](https://github.com/google-gemini/gemini-cli/pull/29567) chore(release): bump version to 0.64.0-nightly.20260929.gd75234cae
- [#29528](https://github.com/google-gemini/gemini-cli/pull/29528) fix(cli): propagate resolved folder trust state in headless mode (#29031)
- [#29565](https://github.com/google-gemini/gemini-cli/pull/29565) Changelog for v0.63.0-preview.0
- [#29549](https://github.com/google-gemini/gemini-cli/pull/29549) fix(acp): bridge PromptResponse.usage and emit usage_update notifications (#29389)
- [#29450](https://github.com/google-gemini/gemini-cli/pull/29450) refactor(a2a-server): implement V1 to V2 settings migration logic
- [#29539](https://github.com/google-gemini/gemini-cli/pull/29539) fix(core): enable autonomous plan execution in non-interactive mode
- [#29542](https://github.com/google-gemini/gemini-cli/pull/29542) fix(core): disable truncation when maxChars <= 0 in formatTruncatedToolOutput

#### 🐛 New Issues
- [#29574](https://github.com/google-gemini/gemini-cli/issues/29574) bug(core): 400 Bad Request "Requests ending with a model turn are not supported" when reading image files via ReadFile tool `area/core` `status/bot-triaged` `effort/small` 💬1

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,226 · **Open issues:** 2,172 · **Last push:** 4h ago

On September 30, 2026, GitHub Copilot CLI released version 1.0.90-5, which notably fixed the issue where "No supported model available" appeared during launch, and ensured that MCP tool calls complete even with ongoing server progress updates. Additionally, version 1.0.90-4 resolved errors related to model provider attribution during sign-in. The most pressing new issue reported was #4995, which seeks to improve conversation scrollback by highlighting request and final-response turns and supporting the ability to collapse intermediate outputs. Other new issues included #4998, indicating the CLI becomes unusable after macOS updates due to persistent stale filesystem device IDs.

#### 🚀 New Releases
- [v1.0.90-5](https://github.com/github/copilot-cli/releases/tag/v1.0.90-5) 1.0.90-5
- [v1.0.90-4](https://github.com/github/copilot-cli/releases/tag/v1.0.90-4) 1.0.90-4
- [v1.0.90-3](https://github.com/github/copilot-cli/releases/tag/v1.0.90-3) 1.0.90-3
- [v1.0.90-2](https://github.com/github/copilot-cli/releases/tag/v1.0.90-2) 1.0.90-2
- [v1.0.90-1](https://github.com/github/copilot-cli/releases/tag/v1.0.90-1) 1.0.90-1

#### 🐛 New Issues
- [#4995](https://github.com/github/copilot-cli/issues/4995) Improve conversation scrollback: highlight request/final-response turns and support collapsing everything in between `triage` 💬1
- [#4992](https://github.com/github/copilot-cli/issues/4992) Copy (control c / right click) issue on devpods with last few updates `area:input-keyboard`
- [#5007](https://github.com/github/copilot-cli/issues/5007) Node/libuv terminal detection clears the native runtime’s SIGCHLD handler, delaying userPromptSubmitted hooks until their full timeout `triage`
- [#5006](https://github.com/github/copilot-cli/issues/5006) Resuming a session drops `reasoning_text` from all earlier assistant messages (kimi-k3) `area:sessions` `area:models`
- [#5005](https://github.com/github/copilot-cli/issues/5005) OTel metrics have no service.instance.id, so concurrent sessions write to the same metric streams
- [#5004](https://github.com/github/copilot-cli/issues/5004) Ctrl+G (edit in $EDITOR) breaks ask_user question mode (regression of #4230) `area:input-keyboard`
- [#5003](https://github.com/github/copilot-cli/issues/5003) Large tool output is spilled to an OS temp file without a stable session artifact or paging interface `area:tools`
- [#5002](https://github.com/github/copilot-cli/issues/5002) web_fetch treats authentication redirects as successful page content `area:tools`
- [#5001](https://github.com/github/copilot-cli/issues/5001) Runtime capability metadata claims Python and Go are available when they are not `area:platform-windows` `area:tools`
- [#4999](https://github.com/github/copilot-cli/issues/4999) Cannot search enterprise MCP registry, shows only public catalog results `area:enterprise` `area:mcp`
- [#4998](https://github.com/github/copilot-cli/issues/4998) Copilot CLI unusable after macOS update/reboot because `.mcp-writer.binding` persists stale filesystem device ID `area:mcp`
- [#4997](https://github.com/github/copilot-cli/issues/4997) Agent-created revert commits (git revert) are missing Co-authored-by / Copilot-Session trailers `area:tools`
- [#4996](https://github.com/github/copilot-cli/issues/4996) /exit command ending session rather than exiting the running CLI `area:sessions`
- [#4994](https://github.com/github/copilot-cli/issues/4994) Regression: MCP OAuth authorization page reopens on every ACP session for a server with a valid (non-refreshable) access token `area:non-interactive` `area:mcp`
- [#4993](https://github.com/github/copilot-cli/issues/4993) Scroll the copilot cli output by half pages `area:input-keyboard`

#### 🔒 Closed Issues
- [#2861](https://github.com/github/copilot-cli/issues/2861) Compaction failed: received empty response from model (3x retry, manual /compact on Opus 4.6)
- [#2245](https://github.com/github/copilot-cli/issues/2245) Support discovering custom agents from subdirectories in monorepos
- [#3281](https://github.com/github/copilot-cli/issues/3281) After upgrading GitHub Copilot CLI to `v1.0.46`, the CLI is no longer usable in my environment.
- [#2805](https://github.com/github/copilot-cli/issues/2805) Let users toggles MCPs as easily as it's with skills.
- [#3589](https://github.com/github/copilot-cli/issues/3589) When multiple `sessionStart`/`subagentStart` hooks output `additionalContext`, only the last one is injected into the context
- [#2581](https://github.com/github/copilot-cli/issues/2581) Title: MCP tools with dots in names cause 400 Bad Request — should match MCP spec
- [#3323](https://github.com/github/copilot-cli/issues/3323) Feature Request: ask_user enum/oneOf fields should always offer an 'Other / custom answer' escape hatch
- [#4919](https://github.com/github/copilot-cli/issues/4919) /ask does not work with auto models
- [#4611](https://github.com/github/copilot-cli/issues/4611) sea-loader.js: lexicographical localeCompare in fi() causes -9 to be selected over -10 / -11 in package cache
- [#3533](https://github.com/github/copilot-cli/issues/3533) cli 1.0.54 keyboard input not working on macos - prompting for username in background
- [#3393](https://github.com/github/copilot-cli/issues/3393) Can not authorize MCP server using Oauth
- [#4583](https://github.com/github/copilot-cli/issues/4583) Add PDF file upload support to GitHub Copilot CLI
- [#2497](https://github.com/github/copilot-cli/issues/2497) Github Agent "Continue in Copilot CLI" does not resume cloud session it opens an empty session instead
- [#4457](https://github.com/github/copilot-cli/issues/4457) Spurious "Unknown tool name" warning when a cross-family sub-agent inherits the parent tool list
- [#4037](https://github.com/github/copilot-cli/issues/4037) BYOK support for GitHub Copilot CLI in ACP server mode
- [#3365](https://github.com/github/copilot-cli/issues/3365) Session Auto-Rename does not work anymore
- [#3309](https://github.com/github/copilot-cli/issues/3309) 1.0.48-0: win32-arm64 prebuilds ships x64 runtime.node instead of ARM64
- [#2651](https://github.com/github/copilot-cli/issues/2651) [Bug] BYOK Anthropic provider does not emit turn lifecycle and reasoning events
- [#2483](https://github.com/github/copilot-cli/issues/2483) Not able to use session name to retrieve session in CLI
- [#2315](https://github.com/github/copilot-cli/issues/2315) I work in PST -- I am not going to bed [Driving Me Crazy]
- [#4877](https://github.com/github/copilot-cli/issues/4877) AHP 0.7: native resume uses a derived /chat URI instead of advertised defaultChat

### OpenCode (`anomalyco/opencode`)

**Stars:** 210,950 · **Open issues:** 6,279 · **Last push:** 1h ago

On September 30, 2026, OpenCode saw routine maintenance with no new releases, but several important updates were made through merged pull requests. Notable fixes include the implementation of prompt cache breakpoints on OpenRouter Anthropic and Qwen requests in PR #52110, and updates to the handling of Copilot Responses settings in PR #52182. Additionally, documentation regarding the pricing of GPT 6.1 Sol cache was corrected in PR #52176. Among the newly reported issues, the session provider image rejection causing a generic 400 error (#52042) and the TUI crash related to undefined properties (#52196) have garnered significant attention from the community, indicating areas that require urgent resolution.

#### ✅ Merged PRs
- [#52110](https://github.com/anomalyco/opencode/pull/52110) fix(ai): place prompt cache breakpoints on OpenRouter Anthropic and Qwen requests
- [#52182](https://github.com/anomalyco/opencode/pull/52182) fix(core): pass through Copilot Responses settings
- [#52176](https://github.com/anomalyco/opencode/pull/52176) docs(web): correct GPT 6.1 Sol cache pricing
- [#52012](https://github.com/anomalyco/opencode/pull/52012) fix(ci): run V2 Discord notification after skipped build jobs

#### 🐛 New Issues
- [#52042](https://github.com/anomalyco/opencode/issues/52042) session: provider image rejection bricks session — generic 400 error, no recovery path 💬8
- [#52196](https://github.com/anomalyco/opencode/issues/52196) TUI crash: undefined is not an object (evaluating 'i.message.location.directory') 💬3
- [#52178](https://github.com/anomalyco/opencode/issues/52178) Zen API: CORS headers only served on /zen/v1/models, all inference endpoints fail preflight (404) 💬3
- [#52167](https://github.com/anomalyco/opencode/issues/52167) Free usage exceeded 💬3
- [#52191](https://github.com/anomalyco/opencode/issues/52191) pay 💬2
- [#52175](https://github.com/anomalyco/opencode/issues/52175) no me deja escoger modelo 💬2
- [#52166](https://github.com/anomalyco/opencode/issues/52166) desktop: attachment picker always opens at session directory; no "remember last location" or configurable default 💬2
- [#52170](https://github.com/anomalyco/opencode/issues/52170) Invalid API key. 💬2
- [#52165](https://github.com/anomalyco/opencode/issues/52165) Fase 8: permissões condicionais, sandbox honesto e 8 proteções always-on 💬2
- [#52181](https://github.com/anomalyco/opencode/issues/52181) Clarify machine-marker handling for multi-part prompts `needs:compliance` 💬2
- [#52179](https://github.com/anomalyco/opencode/issues/52179) core: preserve the first assistant error when cleanup fails `needs:compliance` 💬2
- [#52174](https://github.com/anomalyco/opencode/issues/52174) bug: OpenCode Go deepseek-flash returns 400 `inference_failed` on oversized payloads with max reasoning effort 💬2
- [#52155](https://github.com/anomalyco/opencode/issues/52155) Installation via Bun requires Node 💬2
- [#52120](https://github.com/anomalyco/opencode/issues/52120) OpenCode's free tier can only be used from within OpenCode 💬2
- [#52117](https://github.com/anomalyco/opencode/issues/52117) desktop: context panel — sort source messages newest first 💬2
- [#52194](https://github.com/anomalyco/opencode/issues/52194) [BUG]: Go subscription orphaned – CLI works but dashboard shows no subscription, NO email reply for 5 days `needs:compliance` 💬1
- [#52192](https://github.com/anomalyco/opencode/issues/52192) can't run agent creation command with Go subscription 💬1
- [#52189](https://github.com/anomalyco/opencode/issues/52189) Kaspersky false positive (PDM:Trojan.Win32.Generic) during agent-run git commit/push; files quarantined 💬1
- [#52186](https://github.com/anomalyco/opencode/issues/52186) billing: paid invoice M0JLGLJC-0001 ($10.77) not credited — "Insufficient account funds" on every paid model 💬1
- [#52184](https://github.com/anomalyco/opencode/issues/52184) changelog: v2 releases have no published release notes `2.0` 💬1
- [#52180](https://github.com/anomalyco/opencode/issues/52180) Redirect-only bash statements bypass all permission rules ("> out.txt" runs under "bash": {"*": "deny"}) 💬1
- [#52177](https://github.com/anomalyco/opencode/issues/52177) docs: v2 MCP page contradicts config.json and runtime in 4 places 💬1
- [#52171](https://github.com/anomalyco/opencode/issues/52171) cli: unable to send message in a new workspace 💬1
- [#52151](https://github.com/anomalyco/opencode/issues/52151) `opencode session list` is scoped more narrowly than the CLI docs describe, and can return empty for a directory that has sessions `needs:compliance` 💬1
- [#52157](https://github.com/anomalyco/opencode/issues/52157) `opencode session list` returns empty output for a directory that has sessions 💬1

#### 🔒 Closed Issues
- [#39399](https://github.com/anomalyco/opencode/issues/39399) [FEATURE]: SIMPLE CHAT
- [#51850](https://github.com/anomalyco/opencode/issues/51850) GitHub Copilot GPT-6 models do not send selected reasoning effort
- [#51726](https://github.com/anomalyco/opencode/issues/51726) openrouter: Anthropic models still get no prompt caching by default in `opencode run` (#39009 not fully fixed)
- [#52167](https://github.com/anomalyco/opencode/issues/52167) Free usage exceeded
- [#51007](https://github.com/anomalyco/opencode/issues/51007) v2: session ID in the first instruction block defeats cross-session prompt caching
- [#52175](https://github.com/anomalyco/opencode/issues/52175) no me deja escoger modelo
- [#52166](https://github.com/anomalyco/opencode/issues/52166) desktop: attachment picker always opens at session directory; no "remember last location" or configurable default
- [#52170](https://github.com/anomalyco/opencode/issues/52170) Invalid API key.
- [#52165](https://github.com/anomalyco/opencode/issues/52165) Fase 8: permissões condicionais, sandbox honesto e 8 proteções always-on
- [#52181](https://github.com/anomalyco/opencode/issues/52181) Clarify machine-marker handling for multi-part prompts
- [#52179](https://github.com/anomalyco/opencode/issues/52179) core: preserve the first assistant error when cleanup fails
- [#52155](https://github.com/anomalyco/opencode/issues/52155) Installation via Bun requires Node
- [#52120](https://github.com/anomalyco/opencode/issues/52120) OpenCode's free tier can only be used from within OpenCode
- [#52117](https://github.com/anomalyco/opencode/issues/52117) desktop: context panel — sort source messages newest first
- [#52151](https://github.com/anomalyco/opencode/issues/52151) `opencode session list` is scoped more narrowly than the CLI docs describe, and can return empty for a directory that has sessions

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,225 · **Open issues:** 1,557 · **Last push:** <1h ago

On September 30, 2026, Qwen Code released several updates, including v0.24.7 and its nightly version v0.24.7-nightly. The key changes in v0.24.7 introduced features such as workspace-bound sessions for managed agents and the ability to run Managed Runtime tools within a session's workspace directory. Merged pull requests included important fixes, like honoring the NO_PROXY setting for usage-statistics uploads and improving test stability in managed agent recovery scenarios. Additionally, new issues emerged, notably the proposal for a read-only search tool in a new Hosted Workspace profile, highlighting ongoing development and community feedback.

#### 🚀 New Releases
- [v0.24.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7) Release v0.24.7
- [v0.24.7-nightly.20260929.b906f937ec](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20260929.b906f937ec) Release v0.24.7-nightly.20260929.b906f937ec
- [sdk-typescript-v0.1.17](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.17) SDK TypeScript Release v0.1.17
- [desktop-v0.24.7](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.7) Qwen Code Desktop v0.24.7

#### ✅ Merged PRs
- [#13023](https://github.com/QwenLM/qwen-code/pull/13023) fix(core): honor NO_PROXY for usage-statistics RUM uploads
- [#13032](https://github.com/QwenLM/qwen-code/pull/13032) test(managed-agent): stop racing the recovery scanner in turn-claim tests
- [#13061](https://github.com/QwenLM/qwen-code/pull/13061) test(managed-agent): gate provider retries and release ordering
- [#13036](https://github.com/QwenLM/qwen-code/pull/13036) fix(cli): Bound how long a relaunched child outlives its supervisor
- [#12995](https://github.com/QwenLM/qwen-code/pull/12995) test(managed-agent): Pin M4 close anchors and the published definition (M4 follow-up)

#### 🐛 New Issues
- [#13030](https://github.com/QwenLM/qwen-code/issues/13030) feat(managed-agent): Admit read-only search tools in a new Hosted Workspace profile `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬7
- [#13016](https://github.com/QwenLM/qwen-code/issues/13016) SDK abort or close leaves the relaunched CLI worker running `priority/P1` `type/bug` `category/cli` `scope/non-interactive` 💬5
- [#13004](https://github.com/QwenLM/qwen-code/issues/13004) perf(memory): add a bounded cooldown after no-op extraction `priority/P3` `category/core` `category/performance` `scope/token-management` 💬5
- [#13003](https://github.com/QwenLM/qwen-code/issues/13003) perf(memory): skip the selector after a delivered unique strong recall hit `priority/P3` `status/on-hold` `category/core` `category/performance` 💬5
- [#13068](https://github.com/QwenLM/qwen-code/issues/13068) Ctrl + a named key sends a raw C0 byte to the pty instead of the key's escape sequence `priority/P2` `type/bug` `category/ui` `scope/shell` 💬4
- [#13062](https://github.com/QwenLM/qwen-code/issues/13062) A speculative accept that fails to apply files emits no telemetry at all `priority/P3` `type/bug` `category/telemetry` `scope/analytics` 💬4
- [#13059](https://github.com/QwenLM/qwen-code/issues/13059) fix(runtime-broker): a provider start the worker refused answers `200 prepared`, and the provider client waits for ever `priority/P2` `type/bug` `category/core` `need-discussion` 💬4
- [#13042](https://github.com/QwenLM/qwen-code/issues/13042) fix(serve): bound the per-Session indexes that grow with every released provider Session `priority/P3` `type/bug` `category/performance` `scope/session-management` 💬4
- [#13017](https://github.com/QwenLM/qwen-code/issues/13017) Flaky SDK Java fault gate: LocalRebootFaultGateTest expects runtime_broker_runtime_lost, gets runtime_provision_fenced `priority/P2` `type/bug` `category/core` `scope/testing` 💬4
- [#13019](https://github.com/QwenLM/qwen-code/issues/13019) proposal(managed-agent): Recover expired tool publication candidates safely `priority/P2` `category/core` `scope/session-management` `scope/shell` 💬4
- [#12999](https://github.com/QwenLM/qwen-code/issues/12999) core: the deferred tool_call bridge enforces a declaration-schema layer that 8 tool families never enforce themselves `priority/P2` `type/bug` `category/tools` `status/ready-for-human` 💬4
- [#13031](https://github.com/QwenLM/qwen-code/issues/13031) test(sdk-java): ManagedAgentServerIntegrationTest turn-claim tests race the background recovery scanner `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#13073](https://github.com/QwenLM/qwen-code/issues/13073) Retry counter keys on exact validation message text; multi-call turns drop passing calls (#12970 follow-up) `priority/P2` `type/bug` `category/core` `category/tools` 💬3
- [#13070](https://github.com/QwenLM/qwen-code/issues/13070) tool_call bridge refuses intermittently: "params must NOT have additional properties" (v0.24.6) `status/need-information` `status/need-retesting` `priority/P3` `type/bug` 💬3
- [#13028](https://github.com/QwenLM/qwen-code/issues/13028) VSCode IDE Companion Release Failed for 0.24.7 on 2026-09-29 💬3
- [#13063](https://github.com/QwenLM/qwen-code/issues/13063) Event-driven memory recall during autonomous tool runs `priority/P3` `type/feature-request` `category/core` `scope/memory` 💬3
- [#13060](https://github.com/QwenLM/qwen-code/issues/13060) fix(runtime-broker): after a worker is lost the provider inspection throws `runtime_admission_closed` where it answered unknown `priority/P2` `type/bug` `category/core` `need-discussion` 💬3
- [#13038](https://github.com/QwenLM/qwen-code/issues/13038) fix(serve): fit provider confirmation answers to the response limit `priority/P2` `type/bug` `category/cli` `status/ready-for-human` 💬3
- [#13039](https://github.com/QwenLM/qwen-code/issues/13039) feat(serve): deliver media through the Managed Runtime provider worker `priority/P3` `type/feature-request` `category/tools` `scope/content-generation` 💬3
- [#13040](https://github.com/QwenLM/qwen-code/issues/13040) fix(runtime-broker): bound the repeated provider cancellation after a Broker replacement that cannot adopt `priority/P2` `type/bug` `category/core` `need-discussion` 💬3
- [#13041](https://github.com/QwenLM/qwen-code/issues/13041) fix(runtime-broker): align the provider validators' promptId bounds across TypeScript and Java `priority/P3` `type/bug` `category/core` `scope/testing` 💬3
- [#13043](https://github.com/QwenLM/qwen-code/issues/13043) test(core): pin the executionStatus of a cancelled Shell result that also carries an error `priority/P3` `category/development` `scope/testing` `type/enhancement` 💬3
- [#13044](https://github.com/QwenLM/qwen-code/issues/13044) docs(cli): correct Hosted Runtime Broker option help `priority/P3` `type/documentation` `category/cli` `scope/documentation` 💬3
- [#13045](https://github.com/QwenLM/qwen-code/issues/13045) test(managed-agent): isolate G0 Harness temporary directories `priority/P3` `category/development` `scope/testing` `scope/ci-cd` 💬3
- [#13046](https://github.com/QwenLM/qwen-code/issues/13046) test(managed-agent): cover G0 policy and mount-tenant admission guards `priority/P3` `category/integration` `scope/testing` `type/enhancement` 💬3
- [#13047](https://github.com/QwenLM/qwen-code/issues/13047) test(managed-agent): verify G0 deployment validation runs at Spring startup `priority/P2` `category/integration` `scope/testing` `type/enhancement` 💬3
- [#13048](https://github.com/QwenLM/qwen-code/issues/13048) test(managed-agent): pin the connector Workspace refusal contract `priority/P2` `category/integration` `scope/testing` `type/enhancement` 💬3
- [#13049](https://github.com/QwenLM/qwen-code/issues/13049) test(managed-agent): build G0 failure diagnostics only on failure `priority/P3` `category/integration` `scope/testing` `type/enhancement` 💬3
- [#13066](https://github.com/QwenLM/qwen-code/issues/13066) Release Failed for v0.24.8-preview.0 on 2026-09-29 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#13057](https://github.com/QwenLM/qwen-code/issues/13057) feat(managed-agent): Give Hosted model turns the remote Workspace's project context `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#13053](https://github.com/QwenLM/qwen-code/issues/13053) test(managed-agent): assert G0 Workspace admission error codes `priority/P3` `category/integration` `scope/testing` `type/enhancement` 💬2
- [#13055](https://github.com/QwenLM/qwen-code/issues/13055) test(managed-agent): clarify retryable Workspace refusal coverage `priority/P3` `category/integration` `scope/testing` `type/enhancement` 💬2
- [#13056](https://github.com/QwenLM/qwen-code/issues/13056) test(managed-agent): clarify the post-submission refusal regression witness `priority/P3` `category/integration` `scope/testing` `type/enhancement` 💬2
- [#13054](https://github.com/QwenLM/qwen-code/issues/13054) feat(managed-agent): define recovery visibility for post-submission Workspace refusal `priority/P2` `category/integration` `scope/session-management` `type/enhancement` 💬2
- [#13051](https://github.com/QwenLM/qwen-code/issues/13051) test(core): remove the redundant Skill registry override in the resume matrix `priority/P3` `category/core` `scope/testing` `type/enhancement` 💬2
- [#13050](https://github.com/QwenLM/qwen-code/issues/13050) docs(managed-agent): align G0 design scope with the merged change `priority/P3` `type/documentation` `category/integration` `scope/documentation` 💬2
- [#13052](https://github.com/QwenLM/qwen-code/issues/13052) docs(managed-agent): correct the real-model and failover script prerequisites `priority/P3` `type/documentation` `category/integration` `scope/documentation` 💬2
- [#13034](https://github.com/QwenLM/qwen-code/issues/13034) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > settles a turn after one managed-message failure `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13074](https://github.com/QwenLM/qwen-code/issues/13074) The /stats overlay is not scrollable and clips content on smaller terminals `status/needs-triage` `type/bug` 💬1

#### 🔒 Closed Issues
- [#13031](https://github.com/QwenLM/qwen-code/issues/13031) test(sdk-java): ManagedAgentServerIntegrationTest turn-claim tests race the background recovery scanner
- [#13028](https://github.com/QwenLM/qwen-code/issues/13028) VSCode IDE Companion Release Failed for 0.24.7 on 2026-09-29
- [#12765](https://github.com/QwenLM/qwen-code/issues/12765) Runtime Broker: HttpRuntimeTransport has no Session verbs, so no tool call can be dispatched through it
- [#12941](https://github.com/QwenLM/qwen-code/issues/12941) test(managed-agent): record the Hosted baseline latency measurements Stage A requires

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

**Stars:** 390,802 · **Open issues:** 9,077 · **Last push:** <1h ago

On September 30, 2026, OpenClaw released version 2026.8.33, a gateway-only `extended-stable` release that addresses critical security updates and enhances reliability and performance while introducing new model support. Significant merged changes include the addition of support for GPT-6.1 Sol and enhancements to the UI, such as displaying tool icons in sidebar progress previews. Noteworthy fixes addressed issues with session execution directories and improved suite of UI components to prevent stalls and improve functionality. Among the new issues raised, the bug related to the "Sign in with ChatGPT" (beta) consent page returning an invalid client error has garnered attention, indicating a potential vulnerability in user authentication processes.

#### 🚀 New Releases
- [v2026.8.33](https://github.com/openclaw/openclaw/releases/tag/v2026.8.33) openclaw 2026.8.33

#### ✅ Merged PRs
- [#161089](https://github.com/openclaw/openclaw/pull/161089) fix(logging): redaction stalls for seconds on long plus-joined text
- [#160995](https://github.com/openclaw/openclaw/pull/160995) feat(cron): let trigger and script automations call MCP servers named in toolsAllow
- [#159999](https://github.com/openclaw/openclaw/pull/159999) refactor(gateway): deslop gateway core files
- [#161041](https://github.com/openclaw/openclaw/pull/161041) test(state,ui,browser,agents): remove low-value tests (batch d095)
- [#161489](https://github.com/openclaw/openclaw/pull/161489) refactor(test): remove unused update CLI fixture helpers
- [#160066](https://github.com/openclaw/openclaw/pull/160066) improve(ui): show tool icons in sidebar progress previews
- [#161460](https://github.com/openclaw/openclaw/pull/161460) feat(ios): distribute daily TestFlight builds for external testing
- [#161312](https://github.com/openclaw/openclaw/pull/161312) fix(agentsapi): self-hosted attachment requests fail before executor input
- [#160820](https://github.com/openclaw/openclaw/pull/160820) fix(cloud-workers): first turn after a Gateway update fails with a missing worker bundle
- [#161400](https://github.com/openclaw/openclaw/pull/161400) feat(openai): support GPT-6.1 Sol
- [#161484](https://github.com/openclaw/openclaw/pull/161484) fix(ui): remove text beside the permission icon
- [#161469](https://github.com/openclaw/openclaw/pull/161469) refactor(agents): remove dead draining-message fallback from exec approval admission
- [#160876](https://github.com/openclaw/openclaw/pull/160876) perf(ui): memoize sidebar row projection at its owner
- [#161478](https://github.com/openclaw/openclaw/pull/161478) fix(ui): distinguish images from matching chat backgrounds
- [#160825](https://github.com/openclaw/openclaw/pull/160825) fix: deeply nested MCP tool results crash result projection
- [#161455](https://github.com/openclaw/openclaw/pull/161455) test(ci): await heartbeat completion and match candidate authority checks
- [#161463](https://github.com/openclaw/openclaw/pull/161463) fix(release): dependency advisories no longer fail or delay a release
- [#161435](https://github.com/openclaw/openclaw/pull/161435) fix(test): run Docker cleanup fixtures in ESM workspaces
- [#161437](https://github.com/openclaw/openclaw/pull/161437) fix(ui): enable Reset for sidebar Display settings
- [#161395](https://github.com/openclaw/openclaw/pull/161395) refactor(memory-core): run standing intents in the agent worker
- [#161434](https://github.com/openclaw/openclaw/pull/161434) improve(agents): avoid polling delays in async stream tests
- [#160799](https://github.com/openclaw/openclaw/pull/160799) improve(ui): stop comment pins from relaying out on every streaming frame
- [#161426](https://github.com/openclaw/openclaw/pull/161426) fix(update): failed headless updates wait for a Gateway
- [#161079](https://github.com/openclaw/openclaw/pull/161079) fix(e2e): published upgrade cell fails after update advisory rewording
- [#125663](https://github.com/openclaw/openclaw/pull/125663) fix(commands): preserve approval reviewer custody
- [#161453](https://github.com/openclaw/openclaw/pull/161453) fix(docs): restore Control UI feature anchor
- [#161411](https://github.com/openclaw/openclaw/pull/161411) fix(update): older updaters reject unchanged database backups
- [#160886](https://github.com/openclaw/openclaw/pull/160886) fix(macos): restored dashboards can stick on a failure page, and Dashboard tests flake on busy runners
- [#161384](https://github.com/openclaw/openclaw/pull/161384) fix: avoid slow sandbox database byte comparisons
- [#161275](https://github.com/openclaw/openclaw/pull/161275) refactor: record staged workspace results through placement worker
- [#161428](https://github.com/openclaw/openclaw/pull/161428) fix(test): include omitted agent tests in directory and glob runs
- [#161213](https://github.com/openclaw/openclaw/pull/161213) test(core,discord,ui): remove low-value tests (batch d100)
- [#161354](https://github.com/openclaw/openclaw/pull/161354) refactor(scripts): deslop tooling scripts third pass
- [#160702](https://github.com/openclaw/openclaw/pull/160702) fix: maintenance fails during transient SQLite contention
- [#161320](https://github.com/openclaw/openclaw/pull/161320) fix: keep source runner fixtures from probing host services
- [#161419](https://github.com/openclaw/openclaw/pull/161419) fix(codex): preserve native launch failures after process exit
- [#160934](https://github.com/openclaw/openclaw/pull/160934) fix: explain how to recover from oversized session context
- [#161387](https://github.com/openclaw/openclaw/pull/161387) fix(cron): keep scratch reads scoped to their current owner
- [#161418](https://github.com/openclaw/openclaw/pull/161418) fix(release): dependency gate blocks releases on undici GHSA-rfgv-xxqx-mfg5 in Vercel CLI tooling
- [#161284](https://github.com/openclaw/openclaw/pull/161284) refactor(gateway): deslop server methods and worker environments second pass
- [#161390](https://github.com/openclaw/openclaw/pull/161390) refactor(plugins): deslop long-tail extensions second pass
- [#159856](https://github.com/openclaw/openclaw/pull/159856) refactor(agents): deslop agents core fourth pass
- [#161414](https://github.com/openclaw/openclaw/pull/161414) refactor(test): deduplicate Docker runtime assertions
- [#161287](https://github.com/openclaw/openclaw/pull/161287) refactor(agents): deslop tools, auth profiles, sandbox and failover second pass
- [#161420](https://github.com/openclaw/openclaw/pull/161420) improve(agents): avoid polling delays in async scheduling tests
- [#160850](https://github.com/openclaw/openclaw/pull/160850) refactor(infra): deslop infra sixth pass
- [#161412](https://github.com/openclaw/openclaw/pull/161412) fix(test): reject missing Docker cache inputs
- [#161375](https://github.com/openclaw/openclaw/pull/161375) improve: collect quarantine health through SQLite workers
- [#161202](https://github.com/openclaw/openclaw/pull/161202) refactor(commands): deslop commands sixth pass
- [#161239](https://github.com/openclaw/openclaw/pull/161239) fix(update): refuse runtime repair while shared outputs are in use
- [#158916](https://github.com/openclaw/openclaw/pull/158916) refactor(runtime): deslop tasks, daemon, node-host and tui second pass
- [#161238](https://github.com/openclaw/openclaw/pull/161238) fix(update): keep native service identities during discovery
- [#161386](https://github.com/openclaw/openclaw/pull/161386) refactor(markdown): prune weak tests and guard list metadata
- [#161391](https://github.com/openclaw/openclaw/pull/161391) refactor(android): deslop Android app sixth pass
- [#161123](https://github.com/openclaw/openclaw/pull/161123) fix: retain reply ownership after channel formatting
- [#161401](https://github.com/openclaw/openclaw/pull/161401) refactor(test): remove obsolete poll coercion assertions
- [#161337](https://github.com/openclaw/openclaw/pull/161337) refactor(agents): deslop embedded agent runner fifth pass
- [#161074](https://github.com/openclaw/openclaw/pull/161074) improve(ui): avoid recording overhead in sidebar tests
- [#161407](https://github.com/openclaw/openclaw/pull/161407) refactor(test): trim redundant CLI failure assertions
- [#161314](https://github.com/openclaw/openclaw/pull/161314) test(core,plugins,ci): remove low-value tests (batch d102)
- [#161372](https://github.com/openclaw/openclaw/pull/161372) fix: preserve snapshot cleanup after parent token contention
- [#161377](https://github.com/openclaw/openclaw/pull/161377) refactor(ui): centralize model setup ownership checks
- [#161406](https://github.com/openclaw/openclaw/pull/161406) fix: restore archive retirement rejection coverage
- [#161294](https://github.com/openclaw/openclaw/pull/161294) fix(gateway): keep manual recovery when restart triage declines
- [#161374](https://github.com/openclaw/openclaw/pull/161374) fix(infra): keep cold broker recovery retryable
- [#161300](https://github.com/openclaw/openclaw/pull/161300) fix: preserve replacement snapshots during deferred cleanup
- [#161210](https://github.com/openclaw/openclaw/pull/161210) refactor(packages): deslop shared packages fifth pass
- [#161250](https://github.com/openclaw/openclaw/pull/161250) refactor(apple): deslop shared Swift and macOS fifth pass
- [#161299](https://github.com/openclaw/openclaw/pull/161299) refactor(memory): consolidate POST signal test coverage
- [#161054](https://github.com/openclaw/openclaw/pull/161054) refactor: deslop plugin SDK, secrets, and small core dirs
- [#161104](https://github.com/openclaw/openclaw/pull/161104) fix(update): settle candidate progress before cleanup
- [#161297](https://github.com/openclaw/openclaw/pull/161297) refactor(channels): deslop Telegram, Matrix and Feishu sixth pass
- [#161241](https://github.com/openclaw/openclaw/pull/161241) refactor(cron): move guarded job writes off the Gateway thread
- [#161150](https://github.com/openclaw/openclaw/pull/161150) fix(clickclack): discussion polling starts before the plugin service starts
- [#161331](https://github.com/openclaw/openclaw/pull/161331) refactor(tests): remove dead video live helpers
- [#159755](https://github.com/openclaw/openclaw/pull/159755) fix: allow custom strings alongside tool parameter presets
- [#160797](https://github.com/openclaw/openclaw/pull/160797) fix(cli): dns setup hides the timeout when brew hangs
- [#161365](https://github.com/openclaw/openclaw/pull/161365) refactor(ui): simplify pane command dispatch
- [#161334](https://github.com/openclaw/openclaw/pull/161334) refactor(cli): deslop CLI sixth pass
- [#161358](https://github.com/openclaw/openclaw/pull/161358) refactor(tests): remove duplicate browser reload case
- [#161351](https://github.com/openclaw/openclaw/pull/161351) fix(plugins): preserve capture storage and setup errors
- [#161313](https://github.com/openclaw/openclaw/pull/161313) test(ui,plugins): remove low-value tests (batch d103)
- [#161281](https://github.com/openclaw/openclaw/pull/161281) refactor(agent-core): tighten compaction and tool-policy tests
- [#161276](https://github.com/openclaw/openclaw/pull/161276) fix(ci): run Codex adoption recovery with the database broker
- [#161129](https://github.com/openclaw/openclaw/pull/161129) refactor(auto-reply): deslop auto-reply fifth pass
- [#161332](https://github.com/openclaw/openclaw/pull/161332) refactor(cron): keep scratch writes off the Gateway thread
- [#161270](https://github.com/openclaw/openclaw/pull/161270) fix(plugins): preserve CLI environment and worker test routing
- [#161348](https://github.com/openclaw/openclaw/pull/161348) test(agents): count only catalog workers in the captures integration test (2026.9.7)
- [#160960](https://github.com/openclaw/openclaw/pull/160960) chore: prepare extended-stable 2026.8.34
- [#161234](https://github.com/openclaw/openclaw/pull/161234) refactor(codex): deslop Codex plugin seventh pass
- [#161264](https://github.com/openclaw/openclaw/pull/161264) refactor(msteams): remove unused messenger fixture members
- [#161219](https://github.com/openclaw/openclaw/pull/161219) refactor(state): move Doctor MCP OAuth imports to the worker
- [#161273](https://github.com/openclaw/openclaw/pull/161273) refactor: await durable subagent announcement cleanup
- [#161283](https://github.com/openclaw/openclaw/pull/161283) perf(test): speed up admission database preservation checks
- [#161279](https://github.com/openclaw/openclaw/pull/161279) fix(agents): preserve follow-ups while completion stamps settle
- [#161044](https://github.com/openclaw/openclaw/pull/161044) fix(update): preserve original state before direct updates
- [#161292](https://github.com/openclaw/openclaw/pull/161292) fix(update): guide inspection of unresolved captures
- [#161262](https://github.com/openclaw/openclaw/pull/161262) refactor(ui): deslop UI pages fifth pass
- [#161233](https://github.com/openclaw/openclaw/pull/161233) fix(doctor): report missing transcript archive copies
- [#161298](https://github.com/openclaw/openclaw/pull/161298) refactor(qa-lab): deslop QA Lab seventh pass
- [#161271](https://github.com/openclaw/openclaw/pull/161271) fix(ci): repair snapshot ownership proof after native cutover
- [#161260](https://github.com/openclaw/openclaw/pull/161260) fix(anthropic): prevent stuck turns after background Bash completes
- [#161291](https://github.com/openclaw/openclaw/pull/161291) ci(release): drop the self-upgrade aggregate chunk from stable validation
- [#160977](https://github.com/openclaw/openclaw/pull/160977) fix(ui): disable chat composer when sending is not permitted
- [#161212](https://github.com/openclaw/openclaw/pull/161212) refactor(test): remove duplicate live Gateway fence cases
- [#161207](https://github.com/openclaw/openclaw/pull/161207) refactor(plugins): deslop browser and memory sixth pass
- [#161197](https://github.com/openclaw/openclaw/pull/161197) fix(agents): preserve requester yield after tool cleanup
- [#161122](https://github.com/openclaw/openclaw/pull/161122) refactor(agents): deslop tools, auth profiles, sandbox and failover
- [#160293](https://github.com/openclaw/openclaw/pull/160293) perf(ui): preload the chat route's boot chunks on cold loads
- [#161204](https://github.com/openclaw/openclaw/pull/161204) test(agents,commands,plugins,gateway): remove low-value tests (batch d099)
- [#161274](https://github.com/openclaw/openclaw/pull/161274) refactor(ui): consolidate pane closing cleanup
- [#161214](https://github.com/openclaw/openclaw/pull/161214) refactor(gateway): read shared publication receipts in workers

#### 🐛 New Issues
- [#161290](https://github.com/openclaw/openclaw/issues/161290) Session SQLite migration recovery report (session-sqlite-1790699443554-65eb4cec) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬9
- [#161216](https://github.com/openclaw/openclaw/issues/161216) [Bug]: "Sign in with ChatGPT" (beta) consent page returns invalid_client — app unavailable `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:auth-provider` 💬5
- [#161415](https://github.com/openclaw/openclaw/issues/161415) [Bug]: Control UI initial-connect E2E inherits the host locale `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#161131](https://github.com/openclaw/openclaw/issues/161131) [Bug]: 2026.9.6 prepared-model-catalog.worker.js grows to ~6 GB and stalls turns ~12 min; Opus latency is ~6 s, Gateway restart only resets the leak `impact:message-loss` `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` 💬4
- [#161075](https://github.com/openclaw/openclaw/issues/161075) [Bug]: Session execution directories are seeded with agent persona files `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#161467](https://github.com/openclaw/openclaw/issues/161467) [Bug]: Gmail watcher stays down after transient EADDRINUSE during Gateway restart `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#161349](https://github.com/openclaw/openclaw/issues/161349) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#161317](https://github.com/openclaw/openclaw/issues/161317) Install smoke non-root lane cannot pass a failed-jobs rerun (payload runAttempt mismatch) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#160959](https://github.com/openclaw/openclaw/issues/160959) [Bug]: Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:crash-loop` 💬3
- [#161208](https://github.com/openclaw/openclaw/issues/161208) [Bug]: Main-session heartbeats never reuse the Anthropic prompt cache (per-run time line sits on the only message cache marker) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#161227](https://github.com/openclaw/openclaw/issues/161227) Bug: Telegram /new <model alias> fails source-keyed admission and blocks its topic ingress lane on 2026.9.6 `P1` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬3
- [#161051](https://github.com/openclaw/openclaw/issues/161051) Subagent spawn rejected by native readiness (`registration_revoked`) after another agent's turn replaced the Codex app-server client `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#161100](https://github.com/openclaw/openclaw/issues/161100) [Bug]: Codex harness drops thinking level max (effort null) on reply-path turns (chat.send, channels, sessions.send) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#161022](https://github.com/openclaw/openclaw/issues/161022) tool_call on a model-visible direct-only tool fails with 'Unknown tool id… Use tool_search' (unrecoverable misdirection) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#161045](https://github.com/openclaw/openclaw/issues/161045) [Bug]: messages received during preflight wait until the turn ends `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#161487](https://github.com/openclaw/openclaw/issues/161487) Add CI popup controls for PR repair, merge, and archive `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#161441](https://github.com/openclaw/openclaw/issues/161441) Doctor keeps warning for legacy Workshop backup after history-only archive exists `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161409](https://github.com/openclaw/openclaw/issues/161409) [Bug]: sessions.create waits with no deadline on model catalog publication; Control UI New Session hangs 7-17 min, then FORBIDDEN after reconnect `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#161403](https://github.com/openclaw/openclaw/issues/161403) 2026.9.6: slow healthy agent database validation; supported release containing peer-worker integrity reuse fix? `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#161431](https://github.com/openclaw/openclaw/issues/161431) Bug: TTS summarization drops agent ownership in multi-agent setups, truncating voice replies `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161429](https://github.com/openclaw/openclaw/issues/161429) Gateway shutdown aborts when one plugin's cleanup fails, and the state-lifecycle contention message never names the holder `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#161416](https://github.com/openclaw/openclaw/issues/161416) [Bug]: Android: latest Google Play app 2026.7.4 has unusable chat input on Z Flip5 `bug` `bug:behavior` `P1` `maturity:stable` 💬2
- [#161378](https://github.com/openclaw/openclaw/issues/161378) Severe Gateway/SQLite regression across 2026.8→2026.9: after two months of freezes and lock failures we rolled back to 2026.7.35 LTS to get a working assistant `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `impact:crash-loop` 💬2
- [#161398](https://github.com/openclaw/openclaw/issues/161398) [Bug]: `bug` `regression` `P2` `impact:other` 💬2
- [#161361](https://github.com/openclaw/openclaw/issues/161361) Session menu: pressing Enter on "Assign to…" with the pointer resting on it assigns the session to yourself `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#160990](https://github.com/openclaw/openclaw/issues/160990) Keep live progress while delegated subagents run instead of the generic waiting message `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#161380](https://github.com/openclaw/openclaw/issues/161380) Plugin subagent model override policy is skipped for authenticated Gateway requests `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#161257](https://github.com/openclaw/openclaw/issues/161257) Package rollback verification times out after ~30 s under disk load during the install swap `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#161347](https://github.com/openclaw/openclaw/issues/161347) Catalog worker captures test fails when co-located with other catalog worker integration tests `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬2
- [#161229](https://github.com/openclaw/openclaw/issues/161229) [Bug]: acpx runtime creates `<agentId>/` subdirectory inside parent agent workspace on every ACP spawn — identity file pollution and git nesting `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#161252](https://github.com/openclaw/openclaw/issues/161252) [Bug]: Scheduler: every agentTurn automation fails instantly with DataCloneError (2026.9.6) `bug` `regression` `P1` `impact:other` 💬2
- [#161309](https://github.com/openclaw/openclaw/issues/161309) [Bug]: LLM Repeats Same Tool Call Indefinitely Without Processing Results `bug` `regression` `P1` `impact:other` 💬2
- [#161310](https://github.com/openclaw/openclaw/issues/161310) [Bug]: canceled replies remain pending during thinking-catalog waits `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161278](https://github.com/openclaw/openclaw/issues/161278) [Bug]: diagnostics-otel: cron turns split into two root traces — empty message.processed plus separate harness.run tree `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#161268](https://github.com/openclaw/openclaw/issues/161268) [Bug]: Dreaming contamination predicate over-matches Conversation Summary prefix `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161086](https://github.com/openclaw/openclaw/issues/161086) [Feature]: Pluggable gateway transports for the mobile apps, with an embedded Tailscale transport as the first implementation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#161245](https://github.com/openclaw/openclaw/issues/161245) Bug: documented core group:* allowlist entries falsely warned as plugin-only `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161259](https://github.com/openclaw/openclaw/issues/161259) [Bug]: Control UI chat composer sends the draft on IME conversion-confirm in Safari `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161211](https://github.com/openclaw/openclaw/issues/161211) Cloud-worker model fallback relaunches on the admission base and fails with `stale-base-leaf` `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161200](https://github.com/openclaw/openclaw/issues/161200) Cold model catalog preparation reads SQLite on the Gateway thread `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#161193](https://github.com/openclaw/openclaw/issues/161193) plugins reload fails with "no authoritative package-owner metadata" when doctor keeps a bundled plugin over a registry install `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161176](https://github.com/openclaw/openclaw/issues/161176) [Docs Bug]: Episodic tier says session transcripts are "Never" injected, but Active Memory injects transcript excerpts `bug` `docs` `no-stale` `P2` 💬2
- [#161152](https://github.com/openclaw/openclaw/issues/161152) [Bug]: Bedrock memory embeddings: each chunk builds a new BedrockRuntimeClient and credential chain, and embedBatch is unbounded, so IMDS throttling fails the whole index ("Could not load credentials from any providers") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161140](https://github.com/openclaw/openclaw/issues/161140) test(e2e): memory dreaming provenance waits forever for the managed researcher cron `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬2
- [#161141](https://github.com/openclaw/openclaw/issues/161141) Agent database registry changed during discovery fails reply adoption (possible registry race) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#161139](https://github.com/openclaw/openclaw/issues/161139) test(e2e): child completion times out during parent timeout recovery `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#161024](https://github.com/openclaw/openclaw/issues/161024) status waits out the full restart budget when a non-Gateway process holds the Gateway port `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161017](https://github.com/openclaw/openclaw/issues/161017) [Bug]: `/new` reset drops the sidebar `group`/`pinned` metadata — session falls out of its custom sidebar group `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161081](https://github.com/openclaw/openclaw/issues/161081) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#161028](https://github.com/openclaw/openclaw/issues/161028) [Bug]: macOS Gateway tries to create Linux node home during adopted Claude session continuation `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161058](https://github.com/openclaw/openclaw/issues/161058) Session SQLite migration recovery report (session-sqlite-1790570947235-6ec1eb26) `P2` `impact:session-state` 💬2
- [#161033](https://github.com/openclaw/openclaw/issues/161033) Telegram: message text also lost on plain (non-reply) messages in a direct chat — supplement to #158147 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#160999](https://github.com/openclaw/openclaw/issues/160999) Archive can leave attached automations enabled without showing the outcome `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#161397](https://github.com/openclaw/openclaw/issues/161397) [Feature]: Support GPT-6.1 Sol `P2` `impact:auth-provider` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#161481](https://github.com/openclaw/openclaw/issues/161481) Session SQLite migration recovery report (session-sqlite-1790727796813-13aba4f8) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#161468](https://github.com/openclaw/openclaw/issues/161468) [Bug]: Auth profile cooldown bookkeeping rebuilds every prepared model runtime and can starve catalog readers indefinitely `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#161477](https://github.com/openclaw/openclaw/issues/161477) [Bug]: MCP OAuth server logs "expired credentials" continuously (848x/day) while live connections authorize fine `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#161439](https://github.com/openclaw/openclaw/issues/161439) [Bug]: Shared-state SQLite writes hold the exclusive main-thread coordinator and stall the gateway `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#161458](https://github.com/openclaw/openclaw/issues/161458) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161452](https://github.com/openclaw/openclaw/issues/161452) Skill Workshop background review fails for sandboxed agents with per-agent binds (bind source refused under workshop-skills root) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬1
- [#161448](https://github.com/openclaw/openclaw/issues/161448) [Bug]: Teams cron announcements can emit pre-tool assistant text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161445](https://github.com/openclaw/openclaw/issues/161445) [Bug]: ask_user prompt fails to deliver on WhatsApp DM (ReplyDispatchDeliveryError: queued reply delivery failed) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#161443](https://github.com/openclaw/openclaw/issues/161443) [Feature]: Microsoft Teams ignores configured acknowledgement reactions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161436](https://github.com/openclaw/openclaw/issues/161436) Cloud-worker placement: box-local tool calls bypass before_tool_call (policy plugins can't guard cloud workers) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#161430](https://github.com/openclaw/openclaw/issues/161430) [Feature]: Show image snippets in queued chat messages `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#161432](https://github.com/openclaw/openclaw/issues/161432) Gateway RSS grows to 3.5-4 GB on Raspberry Pi 5 (8 GB); prepared-model-catalog worker exceeds declared heap limit, never recycled `impact:crash-loop` `P0` 💬1
- [#161424](https://github.com/openclaw/openclaw/issues/161424) [Docs]: Deleting an agent doesn't say its channel accounts stay, and messages to them go to the next agent bound there `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#161408](https://github.com/openclaw/openclaw/issues/161408) cron: a superseded prepared model-runtime generation fails every candidate and is reported as a model-candidate failure `P1` `impact:message-loss` `impact:auth-provider` 💬1
- [#161405](https://github.com/openclaw/openclaw/issues/161405) Update failure: requested (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#161399](https://github.com/openclaw/openclaw/issues/161399) [Bug]: In-flight ACP binding turn stays running but inert after Gateway restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161394](https://github.com/openclaw/openclaw/issues/161394) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161381](https://github.com/openclaw/openclaw/issues/161381) Update failure: runtime-verification-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161379](https://github.com/openclaw/openclaw/issues/161379) [Bug]: Gateway pins a CPU core forever: prepared model catalog refresh loop (OpenAI live catalog TTL 60s < per-agent refresh time) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#161376](https://github.com/openclaw/openclaw/issues/161376) feat(microsoft-foundry): support MAI-Image-2.6 image editing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#161370](https://github.com/openclaw/openclaw/issues/161370) [Bug]: Successful Discord message-tool reply followed by fallback auth error from same turn `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#161359](https://github.com/openclaw/openclaw/issues/161359) Update failure: post-update-verification (2026.9.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#161326](https://github.com/openclaw/openclaw/issues/161326) [Bug] `structured_output` keeps model-authored payloads in a process-global Map with no eviction, TTL, or size cap `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#161346](https://github.com/openclaw/openclaw/issues/161346) [Bug]: task_runs.detail_json is missing the usage field scoped in #106041 `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#161341](https://github.com/openclaw/openclaw/issues/161341) [Bug]: Codex auth import always fails on Windows ("The Codex credential reader could not stop") `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#161328](https://github.com/openclaw/openclaw/issues/161328) [Bug] `sessions_history` emits `pendingInputs` outside the tool's own hard byte cap, and the message budget is never clamped at zero `P2` `impact:session-state` `clawsweeper:bulk-filed` 💬1
- [#161329](https://github.com/openclaw/openclaw/issues/161329) [Bug] v13 migration drops `installed_plugin_index` without folding when its row fails JSON validation `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#161325](https://github.com/openclaw/openclaw/issues/161325) [Bug] `ask_user` reservation leak permanently disables the tool for a session — the guard throws outside every release path `P3` `clawsweeper:bulk-filed` 💬1
- [#161327](https://github.com/openclaw/openclaw/issues/161327) [Bug] `transcripts list` walks the entire capture store with no page ceiling when the caller is denied every row `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#161330](https://github.com/openclaw/openclaw/issues/161330) [Feature]: Heartbeat trace logs: per-cycle JSONL showing reads, decisions, and operations `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#161324](https://github.com/openclaw/openclaw/issues/161324) [Feature]: Inbound intent matching: pre-classify replies against pending prompts `enhancement` `P3` 💬1
- [#161323](https://github.com/openclaw/openclaw/issues/161323) [Feature]: Typed agent operations: declare state mutations once, call by name `enhancement` `P3` 💬1
- [#161318](https://github.com/openclaw/openclaw/issues/161318) Update failure: global-install-foreign-destination (2026.9.6) `P0` `impact:ux-release-blocker` 💬1
- [#161311](https://github.com/openclaw/openclaw/issues/161311) MCP stdio children never reaped on session end recurs in 2026.9.6 (regression of #125544/#74774) — OOM-kills and watchdog resets `impact:crash-loop` `P0` 💬1
- [#161308](https://github.com/openclaw/openclaw/issues/161308) [Bug]: iOS app sessions use gateway-owner identity instead of operator profile — invisible in macOS app sidebar `P2` `impact:ux-friction` 💬1
- [#161307](https://github.com/openclaw/openclaw/issues/161307) [Bug]: a cadence longer than a job's activeHours window can never fire, and a client cannot reset a system-owned monitor's phase `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161295](https://github.com/openclaw/openclaw/issues/161295) Update failure: gateway-recovery-verification (2026.9.6) `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#161288](https://github.com/openclaw/openclaw/issues/161288) Plugin "sms": data/settings upgrade stays unfinished; `openclaw doctor --fix` / `update repair` cannot complete it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#161282](https://github.com/openclaw/openclaw/issues/161282) [Bug]: channels login fails with AgentSelectionRequiredError on multi-agent installs — requires the legacy default:true marker that doctor itself removes `P1` `impact:auth-provider` `maturity:stable` 💬1
- [#161277](https://github.com/openclaw/openclaw/issues/161277) [Feature]: Drop per-turn requester_profile block + instruction for verified requesters (token overhead, no information) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#161226](https://github.com/openclaw/openclaw/issues/161226) Control UI model picker drops active context budget without session metadata (272k vs 872k) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#161280](https://github.com/openclaw/openclaw/issues/161280) [Performance]: prepared-model-catalog worker repeatedly copies and hashes the 354 MiB Codex native dependency tree 💬1
- [#161272](https://github.com/openclaw/openclaw/issues/161272) DataCloneError on all isolated session cron jobs + spawn sh ENOENT on command payloads (Windows v2026.9.6) `P1` `impact:message-loss` `impact:other` 💬1
- [#161269](https://github.com/openclaw/openclaw/issues/161269) Update failure: gateway-verification (2026.9.6) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161263](https://github.com/openclaw/openclaw/issues/161263) [Bug]: Source commits invalidate compatible retained Testboxes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#161249](https://github.com/openclaw/openclaw/issues/161249) [Feature]:Per-channel tool rights table (allow / ask / off), switchable from the chat – available as a plugin `enhancement` `P2` `impact:security` 💬1
- [#161254](https://github.com/openclaw/openclaw/issues/161254) [Bug]: Oversized OpenAI-compatible requests return one-token replies instead of context errors `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#161253](https://github.com/openclaw/openclaw/issues/161253) [Bug]: Pre-compaction memory flush writes into selected project directory `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#161251](https://github.com/openclaw/openclaw/issues/161251) Update failure: runtime-verification-failed (2026.9.5) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161247](https://github.com/openclaw/openclaw/issues/161247) Live plugin reload binds the plugin root to an ephemeral TMPDIR build dir; plugin breaks with ENOENT hours later when temp is reaped `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#161248](https://github.com/openclaw/openclaw/issues/161248) Update failure: managed-service-preflight (2026.9.5) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬1
- [#161244](https://github.com/openclaw/openclaw/issues/161244) Update failure: managed-service-preflight (2026.9.5) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161242](https://github.com/openclaw/openclaw/issues/161242) [Bug]: MiniMax 私有克隆音色 TTS 合成返回 2042 `bug` `regression` `P2` `impact:auth-provider` 💬1
- [#161222](https://github.com/openclaw/openclaw/issues/161222) [Bug] macOS/Windows updater endpoint is hardcoded to a `desktop-test` release channel, making `tauri.conf.json`'s endpoint dead config `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161223](https://github.com/openclaw/openclaw/issues/161223) [Bug] macOS/Windows keep the vendor version comparator, so `-N` correction releases are never offered `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#161220](https://github.com/openclaw/openclaw/issues/161220) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161221](https://github.com/openclaw/openclaw/issues/161221) RFC: keyless Copilot managed web-search provider (tools.web.search.provider: copilot) `P3` `impact:auth-provider` 💬1
- [#161218](https://github.com/openclaw/openclaw/issues/161218) [Feature]: IO Intelligence (io.net) provider plugin `P3` `impact:auth-provider` `impact:ux-friction` 💬1
- [#161215](https://github.com/openclaw/openclaw/issues/161215) Session SQLite migration recovery report (session-sqlite-1790689459369-18c8e7cb) `P2` `impact:session-state` 💬1
- [#161205](https://github.com/openclaw/openclaw/issues/161205) [Bug]: Claude Code version probe for OAuth identity runs once per gateway process — CLI update or failed first probe ignored until restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161199](https://github.com/openclaw/openclaw/issues/161199) Skill experience review live OpenAI eval fails intermittently in release validation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#161191](https://github.com/openclaw/openclaw/issues/161191) [Feature]: Workboard stats: split per-status counts by archive state (activeByStatus / archivedByStatus) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161190](https://github.com/openclaw/openclaw/issues/161190) [Bug]: Codex bridge truncates dynamic tool results before the app-server; large JSON results arrive invalid in Code Mode `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161189](https://github.com/openclaw/openclaw/issues/161189) [Bug]: A2A outbound send binds the sender's main session route to the peer (resolver ignores A2A peer scope; send prefers caller session key) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#161186](https://github.com/openclaw/openclaw/issues/161186) [Docs Bug]: gateway-lock.md omits that RestrictSUIDSGID=true breaks the state lock (openat2 ENOSYS) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#161182](https://github.com/openclaw/openclaw/issues/161182) [Feature]: Default sidebar group for new sessions by creator (operator vs agent) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161174](https://github.com/openclaw/openclaw/issues/161174) Red main: chat.reset visible-yield variants fail with expired-turn persistence error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#161171](https://github.com/openclaw/openclaw/issues/161171) Red main: session-accessor prepared-admission fails 5/30 since #160858 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#161172](https://github.com/openclaw/openclaw/issues/161172) Red main: setup-inference first-signin integration fails on Linux; artifact fence blocks macOS start `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#161168](https://github.com/openclaw/openclaw/issues/161168) [Feature]: Honor gateway.remote.edgeAuth (and --header overlay) on `mcp serve` connect `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161158](https://github.com/openclaw/openclaw/issues/161158) [Bug]: `gateway restart` reports failure and exits 0 on restarts that succeed — 60s readiness budget is hardcoded and not configurable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161153](https://github.com/openclaw/openclaw/issues/161153) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161151](https://github.com/openclaw/openclaw/issues/161151) [Bug]: Plugin services started by a runtime plugin enable keep the requester's authority; Workboard lifecycle sync fails every minute until restart ("agent tool caller authority is no longer active") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#161147](https://github.com/openclaw/openclaw/issues/161147) [Bug]: Idle main gateway retains repeated plugin captures and module wrappers `bug` `bug:behavior` `P2` `clawsweeper:needs-info` 💬1
- [#161138](https://github.com/openclaw/openclaw/issues/161138) Update failure: managed-service-preflight (2026.9.5) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161113](https://github.com/openclaw/openclaw/issues/161113) Anthropic transport sends thinking.type.disabled to Claude Sonnet 5.5, which rejects it: every thinking-off turn 400s and silently falls back `P1` `impact:auth-provider` 💬1
- [#161112](https://github.com/openclaw/openclaw/issues/161112) [Bug]: 2026.9.6 isolated cron setup timeout is spent in thinking-catalog hydration (loadNativeModelCatalog has no foreground race) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#161108](https://github.com/openclaw/openclaw/issues/161108) Gateway RSS grows unbounded on 2026.9.5 — MCP tool catalog rebuilt on every inbound message, plugin generation repeatedly superseded `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#161099](https://github.com/openclaw/openclaw/issues/161099) QA Live Matrix: possible product error ('Something went wrong') in generated-image delivery and tool-progress preview; room-event timeouts `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#161090](https://github.com/openclaw/openclaw/issues/161090) Update failure: reconcile:abandoned (2026.9.6) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬1
- [#161083](https://github.com/openclaw/openclaw/issues/161083) Live: progress refresh steer leaks a status recap into the final reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161084](https://github.com/openclaw/openclaw/issues/161084) Live: output-limit recovery routes through settled finalization; detached finalization lost the transcript `P1` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#161072](https://github.com/openclaw/openclaw/issues/161072) MiniMax-M3 intermittently misses the gateway tool-read probe under automatic Code Mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161050](https://github.com/openclaw/openclaw/issues/161050) [Feature]: memory-pressure-aware admission for sessions_spawn / isolated cron runs `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161049](https://github.com/openclaw/openclaw/issues/161049) [Feature]: cron supervision beyond failures: overdue, skipped, and dead-man alerts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161042](https://github.com/openclaw/openclaw/issues/161042) [Bug]: snapshots fail when progress output hits backpressure `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `P0` 💬1
- [#160947](https://github.com/openclaw/openclaw/issues/160947) Improve agent emoji selection and New Session visibility `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#160972](https://github.com/openclaw/openclaw/issues/160972) QA telemetry miscounts Code Mode tool successes and rejects valid task order `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#161016](https://github.com/openclaw/openclaw/issues/161016) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#160994](https://github.com/openclaw/openclaw/issues/160994) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#160991](https://github.com/openclaw/openclaw/issues/160991) Feature: validate emitted event assets before writing their manifest `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#157067](https://github.com/openclaw/openclaw/issues/157067) [Bug]: Windows isolated cron setup passes an uncloneable environment Proxy to session history worker
- [#157160](https://github.com/openclaw/openclaw/issues/157160) [Bug]: Gateway crash-loops on plugin-doctor-post-session-state even after fixing busyTimeoutMs=0 (related to #1365, #135133)
- [#161290](https://github.com/openclaw/openclaw/issues/161290) Session SQLite migration recovery report (session-sqlite-1790699443554-65eb4cec)
- [#156710](https://github.com/openclaw/openclaw/issues/156710) [Bug]: Native exec fails when AsyncLocalStorage.bind receives an object instead of a callback
- [#110735](https://github.com/openclaw/openclaw/issues/110735) Sandboxed exec processes orphan on timeout/abort/turn-end: killProcessTree is host-only and never signals into the container PID namespace
- [#161131](https://github.com/openclaw/openclaw/issues/161131) [Bug]: 2026.9.6 prepared-model-catalog.worker.js grows to ~6 GB and stalls turns ~12 min; Opus latency is ~6 s, Gateway restart only resets the leak
- [#161075](https://github.com/openclaw/openclaw/issues/161075) [Bug]: Session execution directories are seeded with agent persona files
- [#125079](https://github.com/openclaw/openclaw/issues/125079) [Bug]: WhatsApp inbound crashes with "Cannot read properties of undefined (reading 'catch')" on 2026.7.2-beta.7
- [#159941](https://github.com/openclaw/openclaw/issues/159941) [Bug]: 2026.9.6 second gateway instance fights the first over state-lifecycle — silent write loss, stale-data UI, no fail-closed
- [#159339](https://github.com/openclaw/openclaw/issues/159339) cron-setup DataCloneError blocks all 21 cron jobs after 9.6 upgrade (#156881 fix not in npm package)
- [#140757](https://github.com/openclaw/openclaw/issues/140757) [Bug]: skill_workshop apply overwrites SKILL.md frontmatter `description` with the 160-byte proposal label, silently disabling skill triggers
- [#161022](https://github.com/openclaw/openclaw/issues/161022) tool_call on a model-visible direct-only tool fails with 'Unknown tool id… Use tool_search' (unrecoverable misdirection)
- [#153971](https://github.com/openclaw/openclaw/issues/153971) Bedrock provider never picks up rotated AWS STS credentials without a gateway restart (duplicate @smithy/core module instances break cache invalidation)
- [#160875](https://github.com/openclaw/openclaw/issues/160875) [Bug]: readGatewayRestartIntentPayloadSync silently drops the restart intent on a state-DB read failure
- [#160063](https://github.com/openclaw/openclaw/issues/160063) Show tool icons only in sidebar progress previews
- [#161416](https://github.com/openclaw/openclaw/issues/161416) [Bug]: Android: latest Google Play app 2026.7.4 has unusable chat input on Z Flip5
- [#161398](https://github.com/openclaw/openclaw/issues/161398) [Bug]:
- [#161380](https://github.com/openclaw/openclaw/issues/161380) Plugin subagent model override policy is skipped for authenticated Gateway requests
- [#161347](https://github.com/openclaw/openclaw/issues/161347) Catalog worker captures test fails when co-located with other catalog worker integration tests
- [#161252](https://github.com/openclaw/openclaw/issues/161252) [Bug]: Scheduler: every agentTurn automation fails instantly with DataCloneError (2026.9.6)
- [#161309](https://github.com/openclaw/openclaw/issues/161309) [Bug]: LLM Repeats Same Tool Call Indefinitely Without Processing Results
- [#159539](https://github.com/openclaw/openclaw/issues/159539) [Bug]: After an in-process restart fails on a refused setting, automatic triage removes the setting but the Gateway is never started again and stays down
- [#161200](https://github.com/openclaw/openclaw/issues/161200) Cold model catalog preparation reads SQLite on the Gateway thread
- [#128041](https://github.com/openclaw/openclaw/issues/128041) [Bug]: Restart-recovered Control UI turn hides live progress after reconnect
- [#161176](https://github.com/openclaw/openclaw/issues/161176) [Docs Bug]: Episodic tier says session transcripts are "Never" injected, but Active Memory injects transcript excerpts
- [#161152](https://github.com/openclaw/openclaw/issues/161152) [Bug]: Bedrock memory embeddings: each chunk builds a new BedrockRuntimeClient and credential chain, and embedBatch is unbounded, so IMDS throttling fails the whole index ("Could not load credentials from any providers")
- [#161058](https://github.com/openclaw/openclaw/issues/161058) Session SQLite migration recovery report (session-sqlite-1790570947235-6ec1eb26)
- [#157645](https://github.com/openclaw/openclaw/issues/157645) Gateway shutdown session-store cleanup fails on retained directory of a deleted agent
- [#161397](https://github.com/openclaw/openclaw/issues/161397) [Feature]: Support GPT-6.1 Sol
- [#160418](https://github.com/openclaw/openclaw/issues/160418) [Bug]: Deeply nested MCP tool result crashes `stableStringify` with RangeError
- [#161432](https://github.com/openclaw/openclaw/issues/161432) Gateway RSS grows to 3.5-4 GB on Raspberry Pi 5 (8 GB); prepared-model-catalog worker exceeds declared heap limit, never recycled
- [#161408](https://github.com/openclaw/openclaw/issues/161408) cron: a superseded prepared model-runtime generation fails every candidate and is reported as a model-candidate failure
- [#127489](https://github.com/openclaw/openclaw/issues/127489) ClickClack discussion poller can reconcile persisted bindings before service start
- [#127479](https://github.com/openclaw/openclaw/issues/127479) DNS setup brew probe discards its structured timeout and signal identity
- [#161326](https://github.com/openclaw/openclaw/issues/161326) [Bug] `structured_output` keeps model-authored payloads in a process-global Map with no eviction, TTL, or size cap
- [#161328](https://github.com/openclaw/openclaw/issues/161328) [Bug] `sessions_history` emits `pendingInputs` outside the tool's own hard byte cap, and the message budget is never clamped at zero
- [#161325](https://github.com/openclaw/openclaw/issues/161325) [Bug] `ask_user` reservation leak permanently disables the tool for a session — the guard throws outside every release path
- [#161324](https://github.com/openclaw/openclaw/issues/161324) [Feature]: Inbound intent matching: pre-classify replies against pending prompts
- [#161323](https://github.com/openclaw/openclaw/issues/161323) [Feature]: Typed agent operations: declare state mutations once, call by name
- [#161318](https://github.com/openclaw/openclaw/issues/161318) Update failure: global-install-foreign-destination (2026.9.6)
- [#161311](https://github.com/openclaw/openclaw/issues/161311) MCP stdio children never reaped on session end recurs in 2026.9.6 (regression of #125544/#74774) — OOM-kills and watchdog resets
- [#161308](https://github.com/openclaw/openclaw/issues/161308) [Bug]: iOS app sessions use gateway-owner identity instead of operator profile — invisible in macOS app sidebar
- [#161282](https://github.com/openclaw/openclaw/issues/161282) [Bug]: channels login fails with AgentSelectionRequiredError on multi-agent installs — requires the legacy default:true marker that doctor itself removes
- [#161280](https://github.com/openclaw/openclaw/issues/161280) [Performance]: prepared-model-catalog worker repeatedly copies and hashes the 354 MiB Codex native dependency tree
- [#139629](https://github.com/openclaw/openclaw/issues/139629) [Bug]: Reused native Codex child follow-ups lack execution-scoped task and completion tracking
- [#161272](https://github.com/openclaw/openclaw/issues/161272) DataCloneError on all isolated session cron jobs + spawn sh ENOENT on command payloads (Windows v2026.9.6)
- [#161269](https://github.com/openclaw/openclaw/issues/161269) Update failure: gateway-verification (2026.9.6)
- [#159950](https://github.com/openclaw/openclaw/issues/159950) [Bug]: doctor --fix skips cleanup while an unrelated `bun run --silent` process is running
- [#161251](https://github.com/openclaw/openclaw/issues/161251) Update failure: runtime-verification-failed (2026.9.5)
- [#161244](https://github.com/openclaw/openclaw/issues/161244) Update failure: managed-service-preflight (2026.9.5)
- [#161242](https://github.com/openclaw/openclaw/issues/161242) [Bug]: MiniMax 私有克隆音色 TTS 合成返回 2042
- [#161220](https://github.com/openclaw/openclaw/issues/161220) Update failure: plugin-target-unavailable (2026.9.4)
- [#161221](https://github.com/openclaw/openclaw/issues/161221) RFC: keyless Copilot managed web-search provider (tools.web.search.provider: copilot)
- [#161218](https://github.com/openclaw/openclaw/issues/161218) [Feature]: IO Intelligence (io.net) provider plugin
- [#161215](https://github.com/openclaw/openclaw/issues/161215) Session SQLite migration recovery report (session-sqlite-1790689459369-18c8e7cb)
- [#161138](https://github.com/openclaw/openclaw/issues/161138) Update failure: managed-service-preflight (2026.9.5)
- [#161113](https://github.com/openclaw/openclaw/issues/161113) Anthropic transport sends thinking.type.disabled to Claude Sonnet 5.5, which rejects it: every thinking-off turn 400s and silently falls back
- [#160947](https://github.com/openclaw/openclaw/issues/160947) Improve agent emoji selection and New Session visibility
- [#160972](https://github.com/openclaw/openclaw/issues/160972) QA telemetry miscounts Code Mode tool successes and rejects valid task order
- [#160994](https://github.com/openclaw/openclaw/issues/160994) Update failure: plugin-target-unavailable (2026.9.3)
- [#160659](https://github.com/openclaw/openclaw/issues/160659) refactor(agents): simplify redundant subsystem code

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 250,092 · **Open issues:** 47,227 · **Last push:** <1h ago

On September 30, 2026, there were no new releases for Hermes Agent. However, two significant bug fixes were merged: PR #128009 addresses an issue where a reused tool call ID was overwriting a finished tool row, and PR #127030 now ensures that inline-preview widget intents are acknowledged rather than truncated or dropped. Among the newly reported issues, #128759 stands out as a critical bug where the command `hermes doctor --live` incorrectly fails the Browser when the agent-browser functions normally but lacks the Python Playwright extra, which could disrupt user operations. Other notable issues include concerns with desktop app response duplication and intermittent publication failures in plugins.

#### ✅ Merged PRs
- [#128009](https://github.com/NousResearch/hermes-agent/pull/128009) fix(desktop): a reused tool call id no longer overwrites a finished tool row
- [#127030](https://github.com/NousResearch/hermes-agent/pull/127030) fix(desktop): ack inline-preview widget intents instead of truncating or dropping them

#### 🐛 New Issues
- [#128759](https://github.com/NousResearch/hermes-agent/issues/128759) [Bug]: `hermes doctor --live` falsely fails Browser when agent-browser works but Python Playwright extra is absent `type/bug` `comp/cli` `tool/browser` `P2` 💬4
- [#127621](https://github.com/NousResearch/hermes-agent/issues/127621) Desktop app: assistant response occasionally renders duplicated (same text twice) `type/bug` `P2` `needs-repro` `sweeper:risk-session-state` 💬1
- [#128697](https://github.com/NousResearch/hermes-agent/issues/128697) [Bug] Plugin publication intermittently fails: 'Dependency inputs changed while preparing publication; retry.' `type/bug` `comp/plugins` `P3` 💬2
- [#127469](https://github.com/NousResearch/hermes-agent/issues/127469) [Bug]: Desktop approval card's dropdown trigger always reads "Always allow…", even when the menu has no Always option (Tirith-only findings) `type/bug` `P3` `comp/desktop` `area/sessions` 💬2
- [#128158](https://github.com/NousResearch/hermes-agent/issues/128158) [Bug]: Desktop renders the tail of a final reply again above the tool fold (one stored row, one completed turn) `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop` 💬1
- [#128751](https://github.com/NousResearch/hermes-agent/issues/128751) Kanban: a pinned task's runtime can silently fall back to a different model maker, unrecorded at sign-off `type/bug` `comp/cli` `comp/cron` `P3` 💬1
- [#128720](https://github.com/NousResearch/hermes-agent/issues/128720) [Bug]: Slack slash-command turns drop the channel prompt and source names, flipping the prompt pins `type/bug` `comp/plugins` `platform/slack` `P0` 💬1
- [#127824](https://github.com/NousResearch/hermes-agent/issues/127824) [Windows] Startup-launched gateway keeps running after the desktop app quits and spawns each stdio MCP server twice `type/bug` `comp/gateway` `tool/mcp` `P2` 💬1
- [#128713](https://github.com/NousResearch/hermes-agent/issues/128713) [Bug]: https://support.nousresearch.com/diagnostics/3b2e0bfd-4cbe-4748-9ff7-48b7f4d1ea53 `type/bug` `comp/cli` `P2` `needs-repro` 💬1
- [#128411](https://github.com/NousResearch/hermes-agent/issues/128411) Multiplex: outbound-only delivery grant so satellite profiles' cron failure alerts can use another profile's bot `type/feature` `comp/gateway` `comp/cron` `platform/discord` 💬1
- [#128758](https://github.com/NousResearch/hermes-agent/issues/128758) [Bug]: `hermes tools --summary` is blocked by the interactive-TTY guard `type/bug` `comp/cli` `P2`
- [#128766](https://github.com/NousResearch/hermes-agent/issues/128766) [Bug]: Slack slash commands in a group DM run as a channel: a separate session from the group DM's messages, and disable_dms does not apply `type/bug` `comp/plugins` `platform/slack` `P3`
- [#128769](https://github.com/NousResearch/hermes-agent/issues/128769) [Bug]: `hermes pm doctor` reports a declined/removed optional default as `outdated` `type/bug` `comp/cli` `P3` `area/install-update`
- [#128770](https://github.com/NousResearch/hermes-agent/issues/128770) Bug: desktop app spawns wsl.exe install prompt on WSL-less Windows when switching/creating sessions `type/bug` `P3` `sweeper:risk-platform-windows` `comp/desktop`
- [#128705](https://github.com/NousResearch/hermes-agent/issues/128705) [Bug]: delegate_task child stuck in stale-kill retries is invisible to the parent, and the heartbeat counts the retries as progress `type/bug` `comp/agent` `tool/delegate` `provider/xai`

#### 🔒 Closed Issues
- [#122416](https://github.com/NousResearch/hermes-agent/issues/122416) Desktop: a long quiet tool call is settled as "connection dropped" when the window is unfocused or on battery
- [#84599](https://github.com/NousResearch/hermes-agent/issues/84599) [Bug]: SSH backend silently falls back to local after idle-environment cleanup in desktop-remote sessions on non-default profiles
- [#84395](https://github.com/NousResearch/hermes-agent/issues/84395) Bug: approval requests never surface in Desktop remote mode — gate waits full timeout silently
- [#74998](https://github.com/NousResearch/hermes-agent/issues/74998) [Bug]: Desktop SSH remote — 'Resume failed: session not found' after idle period (no SSH keepalive on tunnel)
- [#83443](https://github.com/NousResearch/hermes-agent/issues/83443) [Bug]: Regression in v0.20.0 — remote Desktop terminal approvals time out with no visible prompt
- [#93940](https://github.com/NousResearch/hermes-agent/issues/93940) Concurrent `hermes desktop` builds race on node_modules (ENOTEMPTY / missing tsc)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,961 · **Open issues:** 8,406 · **Last push:** <1h ago

There were no new releases for vLLM on September 30, 2026, but several important pull requests were merged, notably including improvements to the Rust frontend and bug fixes related to the Responses API and LoRA adapters. Key enhancements involved combining per-engine utility results to align with the Rust client and expanding resource management for MI355 mirrors in ROCm's CI pipeline. A noteworthy new issue was reported regarding the KV-cache pool collapse in draft models, which presents significant challenges and potential mitigations for developers. Overall, today's developments reflect ongoing refinements and optimizations within the framework.

#### ✅ Merged PRs
- [#59148](https://github.com/vllm-project/vllm/pull/59148) [Rust Frontend] Use the MiMo structural-tag builder
- [#59286](https://github.com/vllm-project/vllm/pull/59286) [Bugfix][Frontend] Reject LoRA adapters named after a served model
- [#51899](https://github.com/vllm-project/vllm/pull/51899) [Core][BugFix] Tag prefix-cache extra keys by source
- [#59240](https://github.com/vllm-project/vllm/pull/59240) [Core] Combine per-engine utility results like the Rust client
- [#58307](https://github.com/vllm-project/vllm/pull/58307) [XPU][CI]Skip test_abort_timeout_on_prefiller in nightly
- [#59137](https://github.com/vllm-project/vllm/pull/59137) [ROCm][CI] Expand MI355 mirrors and route MIG-sized jobs to DPX
- [#59307](https://github.com/vllm-project/vllm/pull/59307) [Bugfix][Responses API] Build streamed final response from streamed items
- [#58495](https://github.com/vllm-project/vllm/pull/58495) [Kernel][Perf] Add TP=2/4/8 per-rank shapes to the sm_120 batch-invariant matmul table
- [#58021](https://github.com/vllm-project/vllm/pull/58021) [Bugfix] Reject a prefix_match_unit that a single KV cache group cannot honor
- [#59249](https://github.com/vllm-project/vllm/pull/59249) [Security] Bump nltk, aiohttp, pillow, and datamodel-code-generator
- [#55596](https://github.com/vllm-project/vllm/pull/55596) [Bugfix][Responses API] Preserve built-in tool output call IDs
- [#59298](https://github.com/vllm-project/vllm/pull/59298) [Bugfix][Frontend] Honor parallel_tool_calls=false in the Responses API
- [#55222](https://github.com/vllm-project/vllm/pull/55222) [Bugfix] GLM-5.3-Flash: fp8 plan dtype on SM90 sparse MLA, and right-size the indexer prefill workspace
- [#57991](https://github.com/vllm-project/vllm/pull/57991) [WideEP] Change DeepEPv2 to auto select hybrid mode by default
- [#51810](https://github.com/vllm-project/vllm/pull/51810) [Bugfix] Route Step3p5 forced tool choices through XML parser
- [#50502](https://github.com/vllm-project/vllm/pull/50502) [Bugfix][Frontend] Enforce parallel_tool_calls=false in the required-tool grammar
- [#58605](https://github.com/vllm-project/vllm/pull/58605) [Perf] Reduce redundant Triton sampler warmup specializations
- [#59146](https://github.com/vllm-project/vllm/pull/59146) [Bugfix][Mamba] Keep the prompt-end prefill checkpoint under sparse retention
- [#57952](https://github.com/vllm-project/vllm/pull/57952) [Perf][KV Connector][Mooncake] Pack hybrid/MLA KV into coalesced transfer regions
- [#59254](https://github.com/vllm-project/vllm/pull/59254) [Bugfix] Suppress HarmonyError Unexpected token while expecting start token 200006
- [#51043](https://github.com/vllm-project/vllm/pull/51043) [MyPy][2/N] Fix mypy errors in small tests/ dirs
- [#50584](https://github.com/vllm-project/vllm/pull/50584) [MRV2] Add DRY as a custom logits processor example
- [#47512](https://github.com/vllm-project/vllm/pull/47512) [Bugfix] Avoid JSON constraints for native tool parsers
- [#59262](https://github.com/vllm-project/vllm/pull/59262) [ROCm][CI] Run Basic Correctness Sleep Mode on MI300 for now
- [#57700](https://github.com/vllm-project/vllm/pull/57700) [KVConnector][MoRIIO] Support K3 DSpark hybrid READ
- [#59259](https://github.com/vllm-project/vllm/pull/59259) [CI] Mint the CRCR report's OIDC token after the wait, not before
- [#55029](https://github.com/vllm-project/vllm/pull/55029) [Frontend] Attach resolved logprobs to streaming derender chunks
- [#59227](https://github.com/vllm-project/vllm/pull/59227) [CI][ROCm] Increase timeouts for AMD MI300 jobs near their limits
- [#57648](https://github.com/vllm-project/vllm/pull/57648) [Bugfix][DP] add_dp_placement_groups does not require ray[default]
- [#58255](https://github.com/vllm-project/vllm/pull/58255) [Mypy] Fix mypy typing for Zamba2 models
- [#56073](https://github.com/vllm-project/vllm/pull/56073) [ROCm] Upgrade MoRI version on rocm dockers required for WideEP DP16 DI CI enablement and fixes for combine API
- [#59205](https://github.com/vllm-project/vllm/pull/59205) [Bugfix][Rust Frontend] Skip engine-derived metrics under `--disable-log-stats`
- [#57298](https://github.com/vllm-project/vllm/pull/57298) [Fast Start] Charge daemon-held weights against `gpu_memory_utilization`
- [#51289](https://github.com/vllm-project/vllm/pull/51289) [Model] Extend device-side mm normalization to Qwen3VL/Qwen3.5/Qwen4Next
- [#52142](https://github.com/vllm-project/vllm/pull/52142) [Bugfix] Fix standalone torch.compile cache loading after relocation
- [#59236](https://github.com/vllm-project/vllm/pull/59236) [Bugfix][Frontend] Return 400 for malformed RL dev route bodies
- [#58433](https://github.com/vllm-project/vllm/pull/58433) [ROCm][CI] Mirror generic GEMM-RS/AR on MI355
- [#58364](https://github.com/vllm-project/vllm/pull/58364) [Bugfix] Fix TorchCodec audio IO correctness
- [#59201](https://github.com/vllm-project/vllm/pull/59201) [CI][ROCm] Fix stale basic_correctness path in Model Runner V2 Distributed
- [#58254](https://github.com/vllm-project/vllm/pull/58254) [Mypy] Fix mypy typing for Whisper models
- [#58938](https://github.com/vllm-project/vllm/pull/58938) [Bugfix][MiMo] Declare embedding_fields so an EPD pair can serve images
- [#57163](https://github.com/vllm-project/vllm/pull/57163) [Bugfix][Quantization] Stop sleep(level=2) from zeroing compressed-tensors KV scales
- [#57898](https://github.com/vllm-project/vllm/pull/57898) [Bugfix] Profile maximum DeepSeek V4.1 vision features
- [#59202](https://github.com/vllm-project/vllm/pull/59202) [Bugfix][CI] Assert the logger call the Anthropic merge warning makes
- [#58182](https://github.com/vllm-project/vllm/pull/58182) [MM] Fix compiled ViT attention output layouts
- [#56994](https://github.com/vllm-project/vllm/pull/56994) [Bugfix][Frontend] Force reasoning mode for GLM-5.3 chat templates in the GLM MoE parser

#### 🐛 New Issues
- [#59117](https://github.com/vllm-project/vllm/issues/59117) [RFC]: [Spec decode] KV-cache pool collapse when a draft model introduces a new cache spec type (hybrid GDN + DFlash): diagnosis, mitigation dead-ends, and a working dedicated-draft-pool POC `RFC` `speculative-decoding` 💬4
- [#59122](https://github.com/vllm-project/vllm/issues/59122) [Bug] ExampleHiddenStatesConnector does not support Hybrid KV Cache Manager `bug` `kv-cache-manager` 💬3
- [#59272](https://github.com/vllm-project/vllm/issues/59272) [Bug]: ThinkingBudgetStateHolder maps every request to logits row 0 when spec decoding is on but a step has no drafts `bug` `mrv1-only` 💬3
- [#59154](https://github.com/vllm-project/vllm/issues/59154) [Bug]: rust vllm-bench result is quite different from vllm bench serve `bug` `rust` 💬3
- [#59306](https://github.com/vllm-project/vllm/issues/59306) [Bug]: GLM-5.3 NVFP4 with DCP and MTP does not start on Hopper on main (DSA MTP head, DCP a2a default) `glm` 💬2
- [#59273](https://github.com/vllm-project/vllm/issues/59273) [Bug]: ThinkingBudgetStateHolder.sync_batch leaks stale state on unidirectional moves `bug` `mrv1-only` 💬2
- [#59222](https://github.com/vllm-project/vllm/issues/59222) [Bug]: Mistral pre-v11 tool parser fails the whole request on valid but unexpected tool call JSON `tool-calling` `mistral` 💬2
- [#59212](https://github.com/vllm-project/vllm/issues/59212) [Bug]: Mistral tokenizer rejects or merges OpenAI-valid tool call IDs (truncate_tool_call_ids keeps the last 9 chars) `tool-calling` `mistral` 💬2
- [#59120](https://github.com/vllm-project/vllm/issues/59120) [Feature]: Add lifecycle management hooks for the worker extension class (--worker-extension-cls) `feature request` 💬2
- [#59152](https://github.com/vllm-project/vllm/issues/59152) [ROCm][Bug] mimo_audio.py imports CUDA-only vllm.vllm_flash_attn, killing the engine core on audio input `rocm` `multi-modality` 💬2
- [#59317](https://github.com/vllm-project/vllm/issues/59317) [Bug]: Sparse-indexer DCP top-k merge allocates (1 + 2 * dcp) * 8 * T * K bytes per step that the profile run never sees, OOM on the first long prefill 💬1
- [#59312](https://github.com/vllm-project/vllm/issues/59312) [Bug]: Gemma 4 26B AutoRound MoE scales fail loading with 11-vs-12 shape mismatch `quantization` 💬1
- [#59305](https://github.com/vllm-project/vllm/issues/59305) [Bug]: FlashMLA sparse decode allocates the split-KV workspace again on SM90 (regression of #53413) 💬1
- [#59250](https://github.com/vllm-project/vllm/issues/59250) [Bug]: Kimi-K3 warmup imports Kimi code for every model; startup crashes as non-root / read-only (numba "no locator available") `kimi` `k3` 💬1
- [#59241](https://github.com/vllm-project/vllm/issues/59241) [Bug]: /derender logprob token strings drop SentencePiece leading space `bug` 💬1
- [#59270](https://github.com/vllm-project/vllm/issues/59270) [Bug]: FilesystemResolver loads adapters outside VLLM_LORA_RESOLVER_CACHE_DIR (path traversal via LoRA name) `bug` 💬1
- [#59203](https://github.com/vllm-project/vllm/issues/59203) [Bug]: DeepSeek-V4.1-Flash cannot run on SM120 (RTX PRO 6000): compressed-layer page_block_size=32 has no FlashInfer sparse-MLA decode kernel instantiation (only pbs=64) `deepseek` `DSv4.1` 💬1
- [#59218](https://github.com/vllm-project/vllm/issues/59218) [Bug]: Engine-based parsers drop text after/between tool calls in non-streaming (streaming keeps it) `tool-calling` 💬1
- [#59219](https://github.com/vllm-project/vllm/issues/59219) [ROCm][Perf][Tracking Issue]: RedHatAI/gemma-4-31B-it-FP8-block `feature request` `rocm` 💬1
- [#59181](https://github.com/vllm-project/vllm/issues/59181) [Bug] VLLM_BATCH_INVARIANT=1 is not batch-invariant for a pooling (cross-encoder) model on sm_120 — GEMMs fall to the cuBLAS-workspace branch 💬1
- [#59176](https://github.com/vllm-project/vllm/issues/59176) [Bug]: GLM-5.3-Flash with HiSparse has no compatible KV cache layout (LBHNC vs BLHNC) `bug` `glm` 💬1
- [#59184](https://github.com/vllm-project/vllm/issues/59184) [Bug]: DFlash DCP slot mapping uses kernel block size for DCP ownership 💬1
- [#59155](https://github.com/vllm-project/vllm/issues/59155) [Feature]: [ROCm][AITER] Track relu2 (non-gated) MoE activation enablement (Tier 3, vLLM-side integration) `feature request` `rocm` 💬1
- [#59151](https://github.com/vllm-project/vllm/issues/59151) [ROCm] mxfp4 MoE: TRITON_UNFUSED is never auto-selected, leaving pre-CDNA3 (gfx90a) with no working backend `rocm` 💬1
- [#59141](https://github.com/vllm-project/vllm/issues/59141) [RFC][KV Connector] NIXL support for shared in-flight prefix loads `kv-connector` 💬1
- [#59318](https://github.com/vllm-project/vllm/issues/59318) [Bug]: CUDA graph memory estimate (#53306) reports 2.16 GiB against 1.19 GiB actually captured on GLM-5.3 TP4/DCP4: the profiling pass measures things the real capture does not, and the FULL extrapolation uses the second-largest graph as the per-graph cost `glm`
- [#59292](https://github.com/vllm-project/vllm/issues/59292) [Bug]: `draft_model` speculative decoding fails for Transformers-backend models: `ValueError: Duplicate layer name: 0.attn` `bug` `speculative-decoding`
- [#59271](https://github.com/vllm-project/vllm/issues/59271) [Bug]: DeepSeek-V4 VL dummy image is not the worst case for multimodal profiling `bug` `multi-modality` `deepseek` `DSv4`
- [#59269](https://github.com/vllm-project/vllm/issues/59269) [Bug]: vllm.utils.system_utils.suppress_stdout silently suppresses stderr when sys.stdout is bound to fd 2 `bug`
- [#59268](https://github.com/vllm-project/vllm/issues/59268) [Bug]: vllm.utils.system_utils.suppress_stdout crashes when sys.stdout has no file descriptor `bug`
- [#59267](https://github.com/vllm-project/vllm/issues/59267) [Bug]: AudioSpec(target_channels=1) does not produce 1D mono output for single-channel 2D audio `bug`
- [#59242](https://github.com/vllm-project/vllm/issues/59242) [Bug] DeepEP v2 IMA due to GDAKI context ABI mismatch when using the cu134-nightly image
- [#59248](https://github.com/vllm-project/vllm/issues/59248) [Bug]: Qwen3-Coder-Next AutoRound routed MoE gate ignores checkpoint quantization `quantization`
- [#59230](https://github.com/vllm-project/vllm/issues/59230) [Bug]: AOT compilation cache does not track quantization kernel selection — same-version kernel switch loads stale artifact and crashes `quantization`
- [#59169](https://github.com/vllm-project/vllm/issues/59169) [Feature]: Allow hardware plugins to opt into Engram configuration
- [#59210](https://github.com/vllm-project/vllm/issues/59210) [Feature]: Helm chart: add an optional ServiceMonitor with a configurable regex filter to reduce the number of exported metrics `feature request`
- [#59189](https://github.com/vllm-project/vllm/issues/59189) [Bug]: GB200 DP4+EP serving crashes in NCCL symmetric reduce-scatter after #48247 `quantization` `kimi`
- [#59185](https://github.com/vllm-project/vllm/issues/59185) [Bug]: B200 cross-node TP=4 startup hangs without MNNVL during communicator initialization
- [#59161](https://github.com/vllm-project/vllm/issues/59161) [Bug]: Model Runner V2 maps lm_head LoRA per request instead of per logits row under speculative decoding (adapter has no effect / leaks to neighbouring requests) `speculative-decoding`
- [#59157](https://github.com/vllm-project/vllm/issues/59157) [Bug]: v0.30.0-cu129 Docker image contains torch 2.14.0+cu130 and fails with torchvision::nms does not exist `bug`

#### 🔒 Closed Issues
- [#50269](https://github.com/vllm-project/vllm/issues/50269) [Bug]: Host memory is not reducing after the model is loaded into Intel XPU
- [#43828](https://github.com/vllm-project/vllm/issues/43828) [Bug]: failed with AssertionError when using mooncakeconnector
- [#50690](https://github.com/vllm-project/vllm/issues/50690) [Bug]: gpt-oss chat completions return 500 "Unexpected token 200002 while expecting start token 200006" when ignore_eos=true
- [#54808](https://github.com/vllm-project/vllm/issues/54808) [Bug]: qwen3_coder / qwen3_xml parser silently ignores tool_choice "required" and named function on /v1/chat/completions (0.28.0)
- [#59115](https://github.com/vllm-project/vllm/issues/59115) [Bug]: GLM-5.3-Flash illegal memory access on long-context chucked prefill still reproduces on v 0.30.0 (B200, TP4+EP, MTP)
- [#54701](https://github.com/vllm-project/vllm/issues/54701) [Bug] kimi_k2 streaming tool parser intermittently emits empty tool_calls deltas under concurrent load (finish_reason=tool_calls, no name/arguments)
- [#58864](https://github.com/vllm-project/vllm/issues/58864) [Bug]: GLM-5.3-MXFP4 DP8 without EP crashes during FlashInfer autotune with CUDA illegal memory access
- [#43771](https://github.com/vllm-project/vllm/issues/43771) [Bug]: Why does the video file uploaded to the LLM node parse out as files:[] during the data processing step?
- [#55221](https://github.com/vllm-project/vllm/issues/55221) [Bug]: GLM-5.3-Flash: fp8 KV cache rejected by SM90 sparse MLA plan(), and the indexer prefill workspace is sized in tokens
- [#59122](https://github.com/vllm-project/vllm/issues/59122) [Bug] ExampleHiddenStatesConnector does not support Hybrid KV Cache Manager
- [#45866](https://github.com/vllm-project/vllm/issues/45866) [Bug]: Kimi K2 - stream_interval 4 + kimi_k2_reasoning_parser
- [#59009](https://github.com/vllm-project/vllm/issues/59009) [Bug]: Rust frontend chat-template rendering fails with 500 "unknown function: raise_exception" for templates that legally use it (e.g. Qwen3 reasoning_effort validation)
- [#57588](https://github.com/vllm-project/vllm/issues/57588) [Feature][ROCm][Perf]: Add AITER gluon sparse MLA for rope-free BF16 (GLM-5.3-Flash, gfx950)
- [#58406](https://github.com/vllm-project/vllm/issues/58406) [Bug]: Inconsistent merge/resolution semantics for flat and scoped `mm_processor_kwargs`
- [#43842](https://github.com/vllm-project/vllm/issues/43842) [Bug]: `--num-gpu-blocks-override 0` silently accepted; engine init fails with bare `AssertionError` in `BlockPool.__init__`
- [#43918](https://github.com/vllm-project/vllm/issues/43918) [RFC]: Move trainer-side weight transfer logic out of `vllm`
- [#43939](https://github.com/vllm-project/vllm/issues/43939) [ROCm]: Docker/CMake build support for gfx1103 (Radeon 780M / RDNA3 APU)
- [#43996](https://github.com/vllm-project/vllm/issues/43996) [Bug]: [PD + SpecDec] Prefix-cache trimming drops wrong block when P has extra lookahead block
- [#54744](https://github.com/vllm-project/vllm/issues/54744) [Bug]: GLM-5.3 reasoning leaks into content when clients pass enable_thinking/thinking=false — parser gates on kwargs the GLM-5.3 template never reads
- [#57446](https://github.com/vllm-project/vllm/issues/57446) [Bug]: AriaForConditionalGeneration.load_weights discards loaded parameter set, making weight tracking ineffective
- [#43763](https://github.com/vllm-project/vllm/issues/43763) [RFC]: Does SimpleCPUOffloadConnector have plans to support disk/ssd？
- [#43811](https://github.com/vllm-project/vllm/issues/43811) [Bug]: Multinode no NVLink DEP8 server hangs in CUDA graph replay on MoE models during benchmarking
- [#43820](https://github.com/vllm-project/vllm/issues/43820) Spec decode with multimodal pruning gives Eagle drafter shifted embeddings but unshifted M-RoPE positions
- [#43858](https://github.com/vllm-project/vllm/issues/43858) [Feature]: DFlash Partial Multimodal Token Full Attention with Gemma MoE + Drafter
- [#43954](https://github.com/vllm-project/vllm/issues/43954) [Bug]: NVCC compilation error when launching DeepSeek-V4-Flash on H100
- [#43967](https://github.com/vllm-project/vllm/issues/43967) [Bug]: KeyError: 'layers.0.mlp.gate_up_proj.g_idx' of GLM-OCR GPTQ Int8 in v0.21.1rc1
- [#44701](https://github.com/vllm-project/vllm/issues/44701) [Bug]: V1 prefix-cache extra-key domain collision between LoRA name and cache_salt
- [#49661](https://github.com/vllm-project/vllm/issues/49661) [Feature]: Add a server-side tool strictness level for auto tool choice
- [#47504](https://github.com/vllm-project/vllm/issues/47504) [Bug]: GLM tool_call required + streaming causes JSON repetition
- [#54866](https://github.com/vllm-project/vllm/issues/54866) DP engine startup stuck >50 min in MoE triton JIT warmup (MoEPrepareAndFinalizeNaiveDPEPModular) vs ~3 min single-node
- [#59064](https://github.com/vllm-project/vllm/issues/59064) [Bug]: Kimi-K3 MXFP4: flashinfer_trtllm selects unsupported BF16/SiTU MoE backend
- [#58020](https://github.com/vllm-project/vllm/issues/58020) [Bug]: Engine-resolved prefix-cache match unit is not propagated to workers
- [#55592](https://github.com/vllm-project/vllm/issues/55592) [Bug]: Responses built-in tool outputs use unrelated call IDs
- [#51804](https://github.com/vllm-project/vllm/issues/51804) [Bug]: step3p5 parser bypasses XML parsing for named/required tool_choice
- [#52154](https://github.com/vllm-project/vllm/issues/52154) [Bug]: Standalone torch.compile cache uses stale artifact path after relocation
- [#58934](https://github.com/vllm-project/vllm/issues/58934) [Bug]: MiMo-V2.6 omni declares no embedding_fields, so an EPD encoder/consumer pair rejects every image with 400
- [#59169](https://github.com/vllm-project/vllm/issues/59169) [Feature]: Allow hardware plugins to opt into Engram configuration
- [#55644](https://github.com/vllm-project/vllm/issues/55644) [Bug]: GLM-5.3-Flash video input: placeholder count (GLM-4.6V timestamp path) disagrees with the pixel path's frame sampling, engine core dies in _merge_multimodal_embeddings
- [#56363](https://github.com/vllm-project/vllm/issues/56363) [Bug]: Qwen3-VL fails when using modality-scoped image/video size kwargs (`images_kwargs` / `videos_kwargs`)

### SGLang (`sgl-project/sglang`)

**Stars:** 36,608 · **Open issues:** 5,397 · **Last push:** <1h ago

On September 30, 2026, there were no new releases for SGLang, but several important pull requests were merged, including a fix for the loading and inference of MLA models with Quark PTPC FP8 attention on ROCm (#28734) and updates to restore deferred layer dumps along with pinning SentencePiece for InternVL (#41777). Additionally, the CI was enhanced to evaluate the maintenance gate using GitHub Script instead of jq (#41625) and the sgl-kernel version was bumped to 0.4.8 (#41784). New issues were reported, with the most notable being a critical bug related to the `/v1/messages` endpoint where a `stop_sequences` hit was incorrectly reported as `end_turn` (#41731).

#### ✅ Merged PRs
- [#41625](https://github.com/sgl-project/sglang/pull/41625) [CI] Evaluate the maintenance gate with github-script instead of jq
- [#28734](https://github.com/sgl-project/sglang/pull/28734) [AMD] Fix Load and Inference of MLA models with Quark PTPC FP8 attention on ROCm
- [#41759](https://github.com/sgl-project/sglang/pull/41759) [MoE] Keep the moe_align_block_size pad fill inside sorted_token_ids
- [#41788](https://github.com/sgl-project/sglang/pull/41788) [Cherry-pick to release/v0.5.21] [Fix] Restore deferred layer dumps and pin SentencePiece for InternVL (#41777)
- [#41777](https://github.com/sgl-project/sglang/pull/41777) [Fix] Restore deferred layer dumps and pin SentencePiece for InternVL
- [#41784](https://github.com/sgl-project/sglang/pull/41784) chore: bump sgl-kernel version to 0.4.8
- [#41749](https://github.com/sgl-project/sglang/pull/41749) [Fix] Release consumed residual contributions
- [#41336](https://github.com/sgl-project/sglang/pull/41336) [Kernel] Expose FlashMLA kv_format in sgl-kernel sparse decode
- [#41775](https://github.com/sgl-project/sglang/pull/41775) [CI] Grant CI permissions to four contributors
- [#40980](https://github.com/sgl-project/sglang/pull/40980) [Fix] MoE: require TopK layer_id to ensure routed expert captures
- [#40979](https://github.com/sgl-project/sglang/pull/40979) [Fix] Allocate SWA KV pools inside the memory-saver region
- [#41623](https://github.com/sgl-project/sglang/pull/41623) [Spec/Prefill Coordination] Dspark support
- [#41756](https://github.com/sgl-project/sglang/pull/41756) [Refactor] Share PD routing fields across request models
- [#41486](https://github.com/sgl-project/sglang/pull/41486) [Perf] Tune SM90 GDN recurrent verify launch for small batches
- [#41681](https://github.com/sgl-project/sglang/pull/41681) [Test] Demote PD test RDMA openability check to a warning
- [#40159](https://github.com/sgl-project/sglang/pull/40159) [Spec] Reuse K3 auxiliary outputs across decode CUDA graph sizes
- [#40977](https://github.com/sgl-project/sglang/pull/40977) [sglang-miles] Cherry-pick #40448, #40648, #40978, #40979, #40980 for MiMo-V2.6-Flash colocated RL
- [#41709](https://github.com/sgl-project/sglang/pull/41709) [Rust] Define semantic frontend contract
- [#39711](https://github.com/sgl-project/sglang/pull/39711) [PD] Preserve bootstrap metadata in native Messages requests
- [#39706](https://github.com/sgl-project/sglang/pull/39706) [Metrics] Fix PD latency histogram accounting
- [#41746](https://github.com/sgl-project/sglang/pull/41746) [Docs] Add IQuestLab card logo to cookbook landing page
- [#40275](https://github.com/sgl-project/sglang/pull/40275) [Metrics] Add request-level TPOT histogram (sglang:request_time_per_output_token_seconds)
- [#41728](https://github.com/sgl-project/sglang/pull/41728) chore: grant jain-ria CI permissions
- [#41703](https://github.com/sgl-project/sglang/pull/41703) Fix pip install: exclude multimodal_gen/.claude symlink from package data
- [#38600](https://github.com/sgl-project/sglang/pull/38600) [metrics] Fix non-streaming TTFT by flushing the first output through detokenization
- [#41720](https://github.com/sgl-project/sglang/pull/41720) [CI] Extend DeepGEMM GB300 validation timeout to three hours
- [#35330](https://github.com/sgl-project/sglang/pull/35330) [Kimi] Enable GB300 TP4 and GB200/GB300 TP16 SP collectives
- [#41444](https://github.com/sgl-project/sglang/pull/41444) [MUSA] Fix fused MoE GEMV registration and torchada pin
- [#39385](https://github.com/sgl-project/sglang/pull/39385) [Rust] Extract a transport-neutral frontend core
- [#41650](https://github.com/sgl-project/sglang/pull/41650) [XPU] publish nightly docker image with sgl-kernel-xpu built from main
- [#40693](https://github.com/sgl-project/sglang/pull/40693) [Router] Hold a booting rank's batches and graft a snapshot on the pump (7/13)
- [#40692](https://github.com/sgl-project/sglang/pull/40692) [Router] Vet a peer's snapshot before it may touch the tree (6/13)
- [#40691](https://github.com/sgl-project/sglang/pull/40691) [Router] Track a booting rank's bootstrap and fetch a peer's snapshot (5/13)
- [#40690](https://github.com/sgl-project/sglang/pull/40690) [Router] Watch EndpointSlices for sibling router replicas (4/13)
- [#41268](https://github.com/sgl-project/sglang/pull/41268) [sgl-router] Add --tokenizer-backend fast and --tokenizer-l1-cache-mb
- [#41602](https://github.com/sgl-project/sglang/pull/41602) [AMD] Add GLM-5.3 MI30x and MI35x nightly accuracy tests
- [#41065](https://github.com/sgl-project/sglang/pull/41065) Fix MUSA detection under torch.compile fullgraph
- [#39313](https://github.com/sgl-project/sglang/pull/39313) fuse shared experts with routed experts in MegaMoE's DeepGEMM
- [#40546](https://github.com/sgl-project/sglang/pull/40546) [AMD] fix kda decode flydsl import
- [#40515](https://github.com/sgl-project/sglang/pull/40515) chore: expose agent skills via `.agents` directories
- [#41464](https://github.com/sgl-project/sglang/pull/41464) [AMD] Fix GLM-5.3 quark MoE MI35x test runner config
- [#41059](https://github.com/sgl-project/sglang/pull/41059) [Fix] Add name mapping in load_weights of nvidia/LocateAnything-3B
- [#40470](https://github.com/sgl-project/sglang/pull/40470) [Diffusion] Add bounded exact conditioning cache across native models
- [#34528](https://github.com/sgl-project/sglang/pull/34528) [SM120] Add optional FlashInfer PCIe-IPC all-reduce for switch-free hosts

#### 🐛 New Issues
- [#41731](https://github.com/sgl-project/sglang/issues/41731) [Bug] `/v1/messages`: a `stop_sequences` hit is reported as `end_turn` with `stop_sequence: null` 💬1
- [#41617](https://github.com/sgl-project/sglang/issues/41617) [Bug] --strip-thinking-cache + retraction: release_kv_cache frees KV slots the radix tree still owns (double free) 💬1
- [#41654](https://github.com/sgl-project/sglang/issues/41654) [Bug][Simulator] --max-total-tokens on a hybrid mamba/GDN model crashes with TypeError: NoneType // int — the mamba sizing step is skipped on that branch 💬1
- [#41764](https://github.com/sgl-project/sglang/issues/41764) [Bug] Thor SM110 auto backend selection crashes FP8 and ModelOpt NVFP4 MoE startup
- [#41755](https://github.com/sgl-project/sglang/issues/41755) [Bug] `/abort_request`, requests with `n > 1` cannot be aborted and `abort_all` misses them while queued
- [#41748](https://github.com/sgl-project/sglang/issues/41748) [Bug] `/tokenize` reports `max_model_len` from the tokenizer config instead of the server's context length
- [#41747](https://github.com/sgl-project/sglang/issues/41747) [Bug] gpt-oss: `tool_choice: "required"` returns raw harmony control tokens as assistant content
- [#41743](https://github.com/sgl-project/sglang/issues/41743) [Bug] `--enable-return-routed-experts` returns all-zero routings on the triton-kernels / flashinfer top-k paths
- [#41705](https://github.com/sgl-project/sglang/issues/41705) [Bug] CFG normalization uses global (batch-flattened) norm instead of per-sample norm in multimodal_gen
- [#41653](https://github.com/sgl-project/sglang/issues/41653) [Bug][Simulator] SGLang Simulator cannot load hybrid GDN (qwen3_5) models: the CPU engine requires sgl_kernel CPU ops the CUDA wheel does not ship
- [#41648](https://github.com/sgl-project/sglang/issues/41648) [Feature] Attention–FFN disaggregation with pipelining and CUDA Graph support

#### 🔒 Closed Issues
- [#32605](https://github.com/sgl-project/sglang/issues/32605) [Bug] maybe hicache mix-up request in new version(0.5.15)
- [#38700](https://github.com/sgl-project/sglang/issues/38700) [Feature] Fuse shared to sparse experts in DSV4 DeepGEMM MegaMoE
- [#30015](https://github.com/sgl-project/sglang/issues/30015) [Bug] PP + TP: send_tensor_dict all-gather optimization silently corrupts non-TP-replicated tensors in PPProxyTensors
- [#33106](https://github.com/sgl-project/sglang/issues/33106) [Bug] Uninitialized rows reach the block-FP8 GEMMs with --moe-a2a-backend deepep (masked by DeepGEMM, NaN with flashinfer)
- [#31864](https://github.com/sgl-project/sglang/issues/31864) [Bug] GLM-5.2-NVFP4 disaggregated prefill crashes in FlashInfer TRTLLM MoE batched GEMM with sm100f kernel
- [#33035](https://github.com/sgl-project/sglang/issues/33035) [Feature] Add bounded pre-scheduler admission control for multimodal requests to prevent CPU OOM
- [#39054](https://github.com/sgl-project/sglang/issues/39054) is_musa() graph-breaks TorchDynamo (gb0069) on the traced prefill path since b6c31b155c, killing tc_piecewise prefill CUDA-graph capture
- [#33142](https://github.com/sgl-project/sglang/issues/33142) [Bug] ROCm diffusion fused-norm kernels depend on non-public FlyDSL APIs
- [#33088](https://github.com/sgl-project/sglang/issues/33088) [Bug][AMD] Qwen3.5-397B-A17B-FP8 disagg + dp-attention: decode DP ranks flood `/query_dp_ranks` bootstrap → `[Errno 99] Cannot assign requested address`, 0 successful requests
- [#33055](https://github.com/sgl-project/sglang/issues/33055) [Rust Server] Return kv_events from /server_info like Python
- [#33015](https://github.com/sgl-project/sglang/issues/33015) [Bug] Dockerised SGLang for ROCM with gfx1150 cannot load a quantised model: use of undeclared identifier '__cvta_generic_to_shared'

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,903 · **Open issues:** 2,546 · **Last push:** <1h ago

On September 30, 2026, llama.cpp saw the release of several key updates, including b11269, which introduced a ZDNN backend build in the CI pipeline, and b11268, which fixed a critical issue with the OpenCL `get_tensor` function for the q5_K kernel. Additionally, b11267 made performance enhancements for Intel through kernel tuning. Among the important merged pull requests was the fix to ensure input tensors are required to be GGML_OP_NONE, as well as optimizations in Vulkan for handling mat_mul_id tile selection and loading F32 A matrices efficiently. Notably, a new issue was raised regarding unstable tool calling for Gemma 4 models during multi-line streaming, highlighting ongoing challenges in model stability.

#### 🚀 New Releases
- [b11269](https://github.com/ggml-org/llama.cpp/releases/tag/b11269) b11269
- [b11268](https://github.com/ggml-org/llama.cpp/releases/tag/b11268) b11268
- [b11267](https://github.com/ggml-org/llama.cpp/releases/tag/b11267) b11267
- [b11266](https://github.com/ggml-org/llama.cpp/releases/tag/b11266) b11266
- [b11265](https://github.com/ggml-org/llama.cpp/releases/tag/b11265) b11265
- [b11264](https://github.com/ggml-org/llama.cpp/releases/tag/b11264) b11264
- [b11263](https://github.com/ggml-org/llama.cpp/releases/tag/b11263) b11263
- [b11262](https://github.com/ggml-org/llama.cpp/releases/tag/b11262) b11262
- [b11261](https://github.com/ggml-org/llama.cpp/releases/tag/b11261) b11261
- [b11260](https://github.com/ggml-org/llama.cpp/releases/tag/b11260) b11260

#### ✅ Merged PRs
- [#29209](https://github.com/ggml-org/llama.cpp/pull/29209) Hexagon f16 activation ops
- [#26979](https://github.com/ggml-org/llama.cpp/pull/26979) gguf : reject tensor size that wraps after padding
- [#29575](https://github.com/ggml-org/llama.cpp/pull/29575) ggml-cpu : check row bounds in get_rows_back
- [#29627](https://github.com/ggml-org/llama.cpp/pull/29627) model : support classifier_pooling for ModernBERT rerankers
- [#29673](https://github.com/ggml-org/llama.cpp/pull/29673) hexagon: optimize concat op
- [#29647](https://github.com/ggml-org/llama.cpp/pull/29647) ggml : require input tensors to be GGML_OP_NONE
- [#28957](https://github.com/ggml-org/llama.cpp/pull/28957) CUDA: bitonic argsort handles rows wider than one block
- [#29478](https://github.com/ggml-org/llama.cpp/pull/29478) ggml-cuda: HIP: optimize packed byte subtraction (`__vsubss4` -> `__vsub4`)
- [#29541](https://github.com/ggml-org/llama.cpp/pull/29541) ci: add zdnn backend build but not test
- [#29555](https://github.com/ggml-org/llama.cpp/pull/29555) opencl: fix `get_tensor` for q5_K adreno gemm_nonshuffle kernel
- [#29476](https://github.com/ggml-org/llama.cpp/pull/29476) vulkan: Tune GDN kernel, fix Intel performance
- [#29254](https://github.com/ggml-org/llama.cpp/pull/29254) [vulkan] Load F32 A matrix 2 at a time when its 2-aligned
- [#29182](https://github.com/ggml-org/llama.cpp/pull/29182) vulkan: MOE aware mul_mat_id tile selection
- [#29504](https://github.com/ggml-org/llama.cpp/pull/29504) Fix c++ odr by properly using GGML_COMMON_DECL_CPP
- [#29580](https://github.com/ggml-org/llama.cpp/pull/29580) vocab : keep </s> NORMAL in PLaMo-2 and PLaMo-3
- [#29545](https://github.com/ggml-org/llama.cpp/pull/29545) ggml : accumulate f16 dot products in f32 on AVX512-FP16
- [#29631](https://github.com/ggml-org/llama.cpp/pull/29631) hexagon: add FP32 GELU_ERF and GEGLU_ERF support
- [#29638](https://github.com/ggml-org/llama.cpp/pull/29638) common : stop accepting draft tokens at EOG
- [#29565](https://github.com/ggml-org/llama.cpp/pull/29565) server : remove the built-in UI's service worker when the UI is not served
- [#29649](https://github.com/ggml-org/llama.cpp/pull/29649) common : use fs::path for config dir
- [#29648](https://github.com/ggml-org/llama.cpp/pull/29648) tests : adjust server string regex to also match m2 utlra results
- [#29634](https://github.com/ggml-org/llama.cpp/pull/29634) ggml : collect all input tensors into graph_inputs
- [#29642](https://github.com/ggml-org/llama.cpp/pull/29642) common : add fs_write_atomic()
- [#28408](https://github.com/ggml-org/llama.cpp/pull/28408) ui : shared model display primitives
- [#29636](https://github.com/ggml-org/llama.cpp/pull/29636) ggml-zdnn: fix 0-row tensor crash
- [#29632](https://github.com/ggml-org/llama.cpp/pull/29632) llama : fix init in several tools/examples
- [#29624](https://github.com/ggml-org/llama.cpp/pull/29624) musa: build the docker image and CI container from the MUSA SDK images
- [#29598](https://github.com/ggml-org/llama.cpp/pull/29598) ggml : speed up model loading
- [#28940](https://github.com/ggml-org/llama.cpp/pull/28940) ci: remove gpu-rocm keyed directory logs
- [#29602](https://github.com/ggml-org/llama.cpp/pull/29602) metal: FWHT perf optimizations
- [#29280](https://github.com/ggml-org/llama.cpp/pull/29280) vulkan : reuse descriptor sets when bindings are constant
- [#29615](https://github.com/ggml-org/llama.cpp/pull/29615) chat : fix Muse Glimmer ignoring response_format json_schema with --jinja
- [#29595](https://github.com/ggml-org/llama.cpp/pull/29595) common : use fs::path for cache dirs
- [#29610](https://github.com/ggml-org/llama.cpp/pull/29610) tools/server/tests : skip pytest workers when PYTEST_WORKERS=1
- [#29273](https://github.com/ggml-org/llama.cpp/pull/29273) ci : update the oneAPI toolkit to 2026.1

#### 🐛 New Issues
- [#29655](https://github.com/ggml-org/llama.cpp/issues/29655) Eval bug: [BUG] Unstable Tool Calling for Gemma 4 Models during Multi-line Streaming and Partial Parsing `bug-unconfirmed` 💬4
- [#29623](https://github.com/ggml-org/llama.cpp/issues/29623) Vulkan ErrorDeviceLost (vk::Queue::submit) on AMD Radeon AI PRO R9700 when SAM/ReBAR enabled `bug-unconfirmed` 💬4
- [#29657](https://github.com/ggml-org/llama.cpp/issues/29657) Eval bug: Crash on startup with Pascal GPU on Windows after b11222 `bug-unconfirmed` 💬1
- [#29665](https://github.com/ggml-org/llama.cpp/issues/29665) Eval bug: GGUF reader loads an out-of-range gguf_type from an untrusted file before validating it (ggml/src/gguf.cpp:576) `bug-unconfirmed` 💬1
- [#29664](https://github.com/ggml-org/llama.cpp/issues/29664) Misc. bug: windows: when the simple input reader reads EOF on stdin, all processes in the console are sent ctrl+c `bug-unconfirmed` 💬1
- [#29629](https://github.com/ggml-org/llama.cpp/issues/29629) Eval bug: mtmd CUDA flash attention gives wrong image embeddings on Qwen3.5 / Qwen3-VL `bug-unconfirmed` 💬1
- [#29684](https://github.com/ggml-org/llama.cpp/issues/29684) Eval bug: Out-of-range token id passed to llama_vocab_get_attr() terminates the process (llama-vocab.cpp:3190) `bug-unconfirmed`
- [#29680](https://github.com/ggml-org/llama.cpp/issues/29680) server: streaming responses advertise Keep-Alive but the connection is closed after the stream, causing ReadError/RemoteProtocolError on pooled HTTP clients
- [#29678](https://github.com/ggml-org/llama.cpp/issues/29678) Feature Request: automatic slot save/restore by client session id `enhancement`
- [#29670](https://github.com/ggml-org/llama.cpp/issues/29670) Eval bug: ggml-cpu AMX mul_mat (since #19925) doesn't broadcast 2D weights over batched src1 and mis-scales byte offsets → garbage output with ≥2 parallel sequences and SIGSEGV in tileloadd (Qwen3.5/3.6, llama-server -np)
- [#29661](https://github.com/ggml-org/llama.cpp/issues/29661) Eval bug: Vocab load aborts on duplicated token text (GGML_ASSERT at llama-vocab.cpp:2519) `bug-unconfirmed`
- [#29658](https://github.com/ggml-org/llama.cpp/issues/29658) Feature Request: RDMA over infiband `enhancement`
- [#29654](https://github.com/ggml-org/llama.cpp/issues/29654) Eval bug: GPUs choking on PCIe (VK device lost) `bug-unconfirmed`
- [#29652](https://github.com/ggml-org/llama.cpp/issues/29652) Misc. bug: Ling 3.0 parser ignores response_format / json_schema `bug-unconfirmed`

#### 🔒 Closed Issues
- [#24519](https://github.com/ggml-org/llama.cpp/issues/24519) Eval bug: --no-kv-offload causes immediate EOS generation with Qwen3.6-27B on Vulkan (works without flag)
- [#29551](https://github.com/ggml-org/llama.cpp/issues/29551) Misc. bug: Builds b11222 and later crash unless "-dev" is specified in command line.
- [#25562](https://github.com/ggml-org/llama.cpp/issues/25562) Misc. bug: OpenVINO docker cannot use multiple GPUs
- [#26516](https://github.com/ggml-org/llama.cpp/issues/26516) Feature Request: server: expose speculative decoding counters in /metrics endpoint
- [#27171](https://github.com/ggml-org/llama.cpp/issues/27171) Eval bug: regression with Qwen3.6-35B-A3B-Q4_K_M and --fit-target
- [#25972](https://github.com/ggml-org/llama.cpp/issues/25972) Eval bug: OpenVINO backend crashes with MTP speculative decoding (--spec-type draft-mtp) - no working draft configuration
- [#27007](https://github.com/ggml-org/llama.cpp/issues/27007) Eval bug: Gemma 4 26B A4B (QAT) full-GPU offload corrupts output on Vulkan (Radeon 890M gfx1150) - isolated to fused MMVQ kernel path
- [#27094](https://github.com/ggml-org/llama.cpp/issues/27094) Misc. bug: llama-server cannot connect To RPC node even though llama-cli works
- [#27123](https://github.com/ggml-org/llama.cpp/issues/27123) Feature Request: WebUI - Permit sending different sampling params depending on reasoning state.
- [#27169](https://github.com/ggml-org/llama.cpp/issues/27169) Misc. bug: SIGFPE (integer divide-by-zero) in common_params_fit_impl with -ngl 0 on multi-GPU
- [#27170](https://github.com/ggml-org/llama.cpp/issues/27170) Feature Request: Can you disable kv cache?
- [#27181](https://github.com/ggml-org/llama.cpp/issues/27181) Feature Request: MMQ prefill speed on gfx1201 not proportional to quantization size Q2_K and Q6_K use unoptimized path
- [#25227](https://github.com/ggml-org/llama.cpp/issues/25227) webui: model selector — org-less models visually attach to the previous org group
- [#25285](https://github.com/ggml-org/llama.cpp/issues/25285) Eval bug: failed to tokenize error if contents of /props appears in prompt.
- [#27175](https://github.com/ggml-org/llama.cpp/issues/27175) Eval bug: GGML_ASSERT(ggml_can_mul_mat) in build_pooling when n_batch/n_ubatch not divisible by n_seq_max (MEAN pooling)
- [#29657](https://github.com/ggml-org/llama.cpp/issues/29657) Eval bug: Crash on startup with Pascal GPU on Windows after b11222
- [#27190](https://github.com/ggml-org/llama.cpp/issues/27190) Eval bug: SmolVLM-Instruct fails with `invalid token[?] = -1`
- [#27191](https://github.com/ggml-org/llama.cpp/issues/27191) Adreno/Turnip: GPU clock throttling between submissions hurts tg128 (KGSL power-constraint, likely affects any KGSL-kernel Snapdragon Linux, not just Android)
- [#27193](https://github.com/ggml-org/llama.cpp/issues/27193) Feature Request: vulkan: fuse GATED_DELTA_NET state write into recurrent cache (skip following CPY)
- [#27205](https://github.com/ggml-org/llama.cpp/issues/27205) ggml-openvino: RESHAPE result that crosses a graph-split boundary is bound with the source tensor's shape → GPU plugin rejects input ("tensor size is not equal to model") on hybrid MoE models (qwen35moe 35B)
- [#27206](https://github.com/ggml-org/llama.cpp/issues/27206) ggml-openvino: hybrid-attention MoE models (qwen35moe, e.g. Ornith 1.0 35B) fail to compute — three defects in split-boundary tensor handling (reshape view-src extra sharing, boundary view/reshape outputs never emitted, shape-blind compiled-model cache)
- [#28567](https://github.com/ggml-org/llama.cpp/issues/28567) Eval bug: When to support Qwen3.5 model for OpenVINO backend? (Intel NPU)
- [#27927](https://github.com/ggml-org/llama.cpp/issues/27927) ggml-openvino: AUTO/HETERO compound device fails with 'port_find.found()' on KV-cache tensors
- [#29577](https://github.com/ggml-org/llama.cpp/issues/29577) Misc. bug: PLaMo-2/3: </s> is treated as EOG instead of NORMAL
- [#28049](https://github.com/ggml-org/llama.cpp/issues/28049) server: speculative decoding keeps accepted tokens past the EOG, costing the whole previous answer on hybrid models
- [#29021](https://github.com/ggml-org/llama.cpp/issues/29021) Eval bug: Gemma 4 E4B hangs during model loading with Vulkan GPU offload
- [#29613](https://github.com/ggml-org/llama.cpp/issues/29613) Eval bug: Muse Glimmer ignores response_format json_schema with --jinja
- [#28376](https://github.com/ggml-org/llama.cpp/issues/28376) Misc. bug: MMID shared-memory read-after-write hazard

### Ollama (`ollama/ollama`)

**Stars:** 181,933 · **Open issues:** 4,120 · **Last push:** <1h ago

On September 30, 2026, Ollama released v0.35.1-rc0, which introduced the significant feature of allowing ten web searches per response, enhancing the model's retrieval capabilities. The update also included version bumps for both MLX and llama.cpp, along with support for explicit model capabilities. The most notable merged pull request was #18708, which supported these explicit capabilities in the creation process. Among new issues, #18706 raised questions about whether version 0.35.0 is a pre-release, indicating ongoing community engagement and curiosity about version classifications.

#### 🚀 New Releases
- [v0.35.1-rc0](https://github.com/ollama/ollama/releases/tag/v0.35.1-rc0) v0.35.1

#### ✅ Merged PRs
- [#18708](https://github.com/ollama/ollama/pull/18708) create: support explicit model capabilities

#### 🐛 New Issues
- [#18706](https://github.com/ollama/ollama/issues/18706) Is 0.35.0 a pre-release? `bug` 💬11
- [#18709](https://github.com/ollama/ollama/issues/18709) Chat History Column Not Resizable on macOS 0.34.4 `bug`
- [#18704](https://github.com/ollama/ollama/issues/18704) Windows CUDA: llama-server --list-devices intermittently returns empty stdout with exit code 0 while GPU discovery succeeds

#### 🔒 Closed Issues
- [#18706](https://github.com/ollama/ollama/issues/18706) Is 0.35.0 a pre-release?
- [#10491](https://github.com/ollama/ollama/issues/10491) Support TencentBAC Conan-embedding-v2

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,882 · **Open issues:** 5,435 · **Last push:** <1h ago

On September 30, 2026, LiteLLM released several new versions, including v1.104.0-rc.2, v1.103.1, v1.102.2, v1.101.3, and v1.100.4, all of which feature Docker images signed with cosign for enhanced security. Significant merged pull requests included the addition of identity storage and validation contracts in PR #43720 and key performance improvements to authentication management in PR #43776. Noteworthy fixes were implemented in PR #43782, which set the maximum output tokens for gpt-6.1-sol to 131072, and PR #43714, which addressed a bug that disabled the streaming fast path for certain guardrails. Additionally, the new issue #43756 has drawn attention due to an AttributeError raised in PromptTokensDetailsWrapper under specific conditions.

#### 🚀 New Releases
- [v1.104.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-rc.2) v1.104.0-rc.2
- [v1.103.1](https://github.com/BerriAI/litellm/releases/tag/v1.103.1) v1.103.1
- [v1.102.2](https://github.com/BerriAI/litellm/releases/tag/v1.102.2) v1.102.2
- [v1.101.3](https://github.com/BerriAI/litellm/releases/tag/v1.101.3) v1.101.3
- [v1.100.4](https://github.com/BerriAI/litellm/releases/tag/v1.100.4) v1.100.4

#### ✅ Merged PRs
- [#43790](https://github.com/BerriAI/litellm/pull/43790) fix(auth): give UI/CLI session tokens their own AES-GCM context and header-safe shape
- [#43789](https://github.com/BerriAI/litellm/pull/43789) chore: bump litellm-enterprise 0.1.71 -> 0.1.72, litellm-proxy-extras 0.4.102 -> 0.4.103, litellm 1.104.0 -> 1.105.0
- [#43720](https://github.com/BerriAI/litellm/pull/43720) feat(agents): add identity storage and validation contracts
- [#43776](https://github.com/BerriAI/litellm/pull/43776) perf(proxy): refresh auth management objects through the request Redis pipeline
- [#43782](https://github.com/BerriAI/litellm/pull/43782) fix(bedrock): set gpt-6.1-sol max output tokens to 131072
- [#43779](https://github.com/BerriAI/litellm/pull/43779) perf(proxy): one post-call Redis pipeline per backend for spend, rate-limit, routing and response-cache writes
- [#43608](https://github.com/BerriAI/litellm/pull/43608) fix(mcp): scope OpenAPI listings to the exact server prefix and drop upstream OAuth metadata when a server is saved
- [#43407](https://github.com/BerriAI/litellm/pull/43407) perf(proxy): one request-scoped Redis pipeline for auth, spend, rate-limit and routing reads
- [#43424](https://github.com/BerriAI/litellm/pull/43424) perf(proxy): one post-call Redis pipeline per backend for spend, rate-limit, routing and response-cache writes
- [#43759](https://github.com/BerriAI/litellm/pull/43759) chore(cost-map): take azure context limits from models-sold-directly
- [#43642](https://github.com/BerriAI/litellm/pull/43642) fix(proxy): recover session key owners from daily spend for usage attribution
- [#43763](https://github.com/BerriAI/litellm/pull/43763) feat(bedrock): add openai.gpt-6.1-sol us geo cris and Mantle rows
- [#43767](https://github.com/BerriAI/litellm/pull/43767) fix(router): bind Claude Code background sessions to their auto-router
- [#43769](https://github.com/BerriAI/litellm/pull/43769) perf(responses): run aresponses through the async wrapper so the cache is read once
- [#43369](https://github.com/BerriAI/litellm/pull/43369) perf(proxy): hold one spend counter batch across admission and across post-call accounting
- [#43320](https://github.com/BerriAI/litellm/pull/43320) perf(router): fetch cooldown state and usage counters in one Redis round trip
- [#42870](https://github.com/BerriAI/litellm/pull/42870) fix(streaming): keep the served service_tier on streamed chunks and spend rows
- [#43758](https://github.com/BerriAI/litellm/pull/43758) feat(bedrock): add openai gpt-6.1-sol global and base rows
- [#43719](https://github.com/BerriAI/litellm/pull/43719) refactor(rust): orchestrate Messages route execution
- [#43109](https://github.com/BerriAI/litellm/pull/43109) fix(guardrails): enable explicit PANW MCP output scanning
- [#43598](https://github.com/BerriAI/litellm/pull/43598) fix(model-prices): align Azure, Bedrock, Copilot, Gemini, Groq, OpenAI and OpenRouter entries with official docs
- [#43348](https://github.com/BerriAI/litellm/pull/43348) fix(autorouter): compare historical and new savings consistently
- [#43745](https://github.com/BerriAI/litellm/pull/43745) chore(cost-map): add openai gpt-6-astra ultrafast tier prices from the pricing page
- [#43614](https://github.com/BerriAI/litellm/pull/43614) fix(cost_calculator): bill chat per-second pricing once with a new cost_per_second field
- [#43740](https://github.com/BerriAI/litellm/pull/43740) fix(cost-map): lower fireworks up-to-4b size tier to the pricing page price
- [#43298](https://github.com/BerriAI/litellm/pull/43298) test(proxy): classify every credential-bearing param for the canary suite
- [#43744](https://github.com/BerriAI/litellm/pull/43744) chore(cost-map): add azure and openrouter gpt-6.1-sol rows
- [#43306](https://github.com/BerriAI/litellm/pull/43306) test(integration): sweep proxy logs, metrics, a Datadog intake and the Logs drawer for credential canaries
- [#43307](https://github.com/BerriAI/litellm/pull/43307) test(integration): request-path credential canary slots D1-D4
- [#43630](https://github.com/BerriAI/litellm/pull/43630) test(integration): callback credential canary slots C1-C3 and D5
- [#43738](https://github.com/BerriAI/litellm/pull/43738) chore(cost-map): add openai gpt-6.1-sol from the pricing page
- [#43678](https://github.com/BerriAI/litellm/pull/43678) feat(guardrails): send a configured gateway_name from noma_v2 to Noma
- [#43735](https://github.com/BerriAI/litellm/pull/43735) feat(cost-map): add baseten DeepSeek-V4.1-Flash-Fast
- [#43600](https://github.com/BerriAI/litellm/pull/43600) fix(router): stream /v1/messages lifecycle frames live when no fallback can take over
- [#43730](https://github.com/BerriAI/litellm/pull/43730) refactor(rust): add shared llms wire type derives
- [#43713](https://github.com/BerriAI/litellm/pull/43713) docs(security): point readers to the security announcements mailing list signup
- [#43704](https://github.com/BerriAI/litellm/pull/43704) refactor(types): replace Any with proven types in 7 files
- [#43674](https://github.com/BerriAI/litellm/pull/43674) refactor: clean up fresh tech debt from 2026-09-28
- [#43512](https://github.com/BerriAI/litellm/pull/43512) fix(proxy): resolve model_group_alias in the zero-cost budget predicate
- [#43588](https://github.com/BerriAI/litellm/pull/43588) fix(cost-map): add tool calling and reasoning flags, correct max output for nebius DeepSeek-V4.1-Flash
- [#43558](https://github.com/BerriAI/litellm/pull/43558) fix(vertex_ai): forward the per-turn-control beta for per-message output_config
- [#43553](https://github.com/BerriAI/litellm/pull/43553) fix(otel): send cache and reasoning tokens in langfuse usage_details
- [#43536](https://github.com/BerriAI/litellm/pull/43536) fix(google_genai): preserve proxy_server_request in completion adapter
- [#43649](https://github.com/BerriAI/litellm/pull/43649) feat: add model leaderboard page
- [#43641](https://github.com/BerriAI/litellm/pull/43641) feat(fireworks_ai): route and list the auto, auto-instant and firerouter routers

#### 🐛 New Issues
- [#43756](https://github.com/BerriAI/litellm/issues/43756) PromptTokensDetailsWrapper raises AttributeError on cache_creation_tokens/cache_write_tokens when both are unset (DashScope, first-turn requests) `llm translation` 💬3
- [#43737](https://github.com/BerriAI/litellm/issues/43737) Anthropic document content blocks silently dropped when routing to Bedrock Converse `llm translation` 💬2
- [#43685](https://github.com/BerriAI/litellm/issues/43685) [Bug]: Router can select an Anthropic upstream for OpenAI tool-calling requests in a mixed-protocol model group `bug` `llm translation` 💬2
- [#43658](https://github.com/BerriAI/litellm/issues/43658) [Bug]: `Auto-router baseline observation could not be initialized` warning logged on every /v1/messages request when no auto-router is involved `llm translation` `claude code` 💬2
- [#43732](https://github.com/BerriAI/litellm/issues/43732) [Bug]: Key over max_budget is admitted again after 60s idle, until the batch writer flushes spend `llm translation` 💬1
- [#43660](https://github.com/BerriAI/litellm/issues/43660) Add "deepseek-v3" in "model_prices_and_context_window.json" `llm translation` 💬1
- [#43736](https://github.com/BerriAI/litellm/issues/43736) [Bug]: native tag-based routing raises + logs an ERROR for every non-matching fallback leg, even when later legs in the same chain would satisfy the request `llm translation` 💬1
- [#43714](https://github.com/BerriAI/litellm/issues/43714) Streaming fast path is disabled for guardrails that don't act on the response (pre_call-only) 💬1
- [#43711](https://github.com/BerriAI/litellm/issues/43711) Non-object JSON request body (e.g. [], 123) returns 500 instead of 400 (AttributeError: 'list' object has no attribute 'get' in pre_db_read_auth_checks) 💬1
- [#43708](https://github.com/BerriAI/litellm/issues/43708) [Bug]: Function tools fail with reasoning_effort error for Databricks-hosted OpenAI gpt-5.6 family models (gpt-5.6-sol/luna/terra) on /chat/completions `bug` `llm translation` 💬1
- [#43694](https://github.com/BerriAI/litellm/issues/43694) [Feature]: Expose per-request phase latency telemetry keyed by x-litellm-call-id `enhancement` 💬1
- [#43677](https://github.com/BerriAI/litellm/issues/43677) [Feature]: Soniox real-time streaming STT (stt-rt-v5) through the proxy `enhancement`
- [#43670](https://github.com/BerriAI/litellm/issues/43670) [Feature]: --providers flag `enhancement` `llm translation`
- [#43794](https://github.com/BerriAI/litellm/issues/43794) [Bug]: `async_completion_with_fallbacks` ignores top-level `fallbacks` parameter `llm translation`
- [#43752](https://github.com/BerriAI/litellm/issues/43752) [Feature]: Preserve Anthropic-native refusal metadata (stop_reason, stop_details) through streaming aggregation `enhancement` `llm translation`
- [#43773](https://github.com/BerriAI/litellm/issues/43773) [Bug]: litellm_model mode enum rejects responses, realtime and other in-use modes `llm translation`
- [#43715](https://github.com/BerriAI/litellm/issues/43715) [Bug]: Built-in LLM Passthrough Routes Fail with SERVER_ROOT_PATH `bug`
- [#43690](https://github.com/BerriAI/litellm/issues/43690) [Bug]: Sync completion() runs an asyncio event loop on every call, even with no service callbacks `llm translation`

#### 🔒 Closed Issues
- [#13786](https://github.com/BerriAI/litellm/issues/13786) [Bug]: "The model is repeating the same chunk" may not terminate response processing
- [#30825](https://github.com/BerriAI/litellm/issues/30825) [Bug]: Multiple logging callbacks in key metadata - only last callback's credentials are used
- [#22762](https://github.com/BerriAI/litellm/issues/22762) Official Docker images missing opentelemetry-instrumentation - OTEL metrics and logs don't work
- [#30641](https://github.com/BerriAI/litellm/issues/30641) [Feature]: Surface Helm/env-configured SSO settings in the Admin UI (treat declarative config as a first-class citizen)
- [#25308](https://github.com/BerriAI/litellm/issues/25308) [Bug]: Haiku 4.5 not included in structured output allowlist, supports parallel tool calls
- [#31008](https://github.com/BerriAI/litellm/issues/31008) [Bug]: Background health checks fail for OpenRouter models with extra_body.tools (openrouter:web_search); real completions succeed
- [#43737](https://github.com/BerriAI/litellm/issues/43737) Anthropic document content blocks silently dropped when routing to Bedrock Converse
- [#39431](https://github.com/BerriAI/litellm/issues/39431) [Bug]: /v1/messages streaming delays message_start until the model's thinking pass finishes, even with no fallbacks configured
- [#31178](https://github.com/BerriAI/litellm/issues/31178) [Bug]: LiteLLM proxy fails for vLLM qwen3-vl-embedding-8b with image inputs
- [#31179](https://github.com/BerriAI/litellm/issues/31179) [Bug]: McpError, Error: Method not found
- [#31181](https://github.com/BerriAI/litellm/issues/31181) [Feature]: Enterprise metadata fields for virtual keys, users, teams, and usage reports
- [#31187](https://github.com/BerriAI/litellm/issues/31187) fix(azure_ai): strip output_config.effort for Azure AI Foundry Claude models that reject it (Haiku 4.5)
- [#31233](https://github.com/BerriAI/litellm/issues/31233) [Bug]: /v1/mcp/server/health returns opaque SHA-256 server_id hashes with no server_name
- [#31245](https://github.com/BerriAI/litellm/issues/31245) [Bug]: close_litellm_async_clients() never closes cached AsyncOpenAI clients (leaks "Unclosed client session")
- [#35369](https://github.com/BerriAI/litellm/issues/35369) [Bug]: Budget enforcement blocks all model group alias connections, independent of actual pricing information of the actual model
- [#43542](https://github.com/BerriAI/litellm/issues/43542) [Bug]: langfuse_otel (OTel V2) drops cache and reasoning tokens from usage_details that the V1 langfuse callback sends
- [#43557](https://github.com/BerriAI/litellm/issues/43557) [Bug]: Vertex AI drops the per-turn-control beta, so Claude Code's per-message output_config 400s
- [#43533](https://github.com/BerriAI/litellm/issues/43533) [Bug]: GenerateContentToCompletionHandler drops proxy_server_request, causing empty request body in spend logs and UI

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,041 · **Open issues:** 1,172 · **Last push:** <1h ago

On September 30, 2026, Unsloth did not release any new versions, but several notable pull requests were merged. Significant enhancements include the addition of the `unsloth eval` CLI command and improvements to the Studio interface, such as layout fixes for the Windows desktop app and the stabilization of the generalized compare mode. Additionally, the Studio now supports larger Laya requests and includes features for exposing prefill progress in the API monitor. Among the new issues reported, a particularly concerning bug (#12257) relates to the inability to load the Qwen 3.8 Flash Next model on the M5 Ultra.

#### ✅ Merged PRs
- [#12070](https://github.com/unslothai/unsloth/pull/12070) Studio: one top row and layout fixes for the Windows desktop app
- [#11161](https://github.com/unslothai/unsloth/pull/11161) Unsloth Studio / Desktop: expose prefill progress in API monitor
- [#4219](https://github.com/unslothai/unsloth/pull/4219) Reload LoRA adapters trained with added tokens
- [#6824](https://github.com/unslothai/unsloth/pull/6824) Add `unsloth eval` CLI command
- [#7407](https://github.com/unslothai/unsloth/pull/7407) Studio: stabilize generalized compare mode (clean replacement)
- [#12271](https://github.com/unslothai/unsloth/pull/12271) Studio: run large Laya requests in token-budgeted chunks
- [#12232](https://github.com/unslothai/unsloth/pull/12232) Studio: let the chat model use the Decision API through MCP
- [#4226](https://github.com/unslothai/unsloth/pull/4226) Support for Seq2Seq Models (T5, T5Gemma, etc.)
- [#11046](https://github.com/unslothai/unsloth/pull/11046) Studio: list large MCP tool schemas compactly and load the full schema on demand
- [#7539](https://github.com/unslothai/unsloth/pull/7539) feat(studio): Mac adapter-format option for LoRA export, with GGUF adapters on macOS
- [#8058](https://github.com/unslothai/unsloth/pull/8058) Preserve repo id case when resolving a model name
- [#12233](https://github.com/unslothai/unsloth/pull/12233) Let Gemma 4 31B train when it is split across GPUs
- [#12263](https://github.com/unslothai/unsloth/pull/12263) feat(studio): reuse MLX VLM prompt snapshots in the resident vision batch
- [#11929](https://github.com/unslothai/unsloth/pull/11929) Train gpt-oss MXFP4 LoRA through unsloth-zoo's packed experts when load_in_16bit is not set
- [#12281](https://github.com/unslothai/unsloth/pull/12281) Keep LoRA on dense Linears sharing a name with fused MoE experts in PEFT's v5 conversion
- [#10216](https://github.com/unslothai/unsloth/pull/10216) Studio: save a model's run settings without loading it
- [#12219](https://github.com/unslothai/unsloth/pull/12219) Let FastModel and FastLanguageModel load the same family in one process, in either order
- [#12275](https://github.com/unslothai/unsloth/pull/12275) Harden timing-dependent Studio backend tests (nvidia-smi cache, cold /api/health)
- [#11341](https://github.com/unslothai/unsloth/pull/11341) Unsloth Studio / Desktop: reload llama.cpp models on reconnect
- [#6846](https://github.com/unslothai/unsloth/pull/6846) Studio: command palette (Cmd/Ctrl+P)
- [#4232](https://github.com/unslothai/unsloth/pull/4232) Fix: Support past_key_values in model.generate for multi-turn conversations
- [#11137](https://github.com/unslothai/unsloth/pull/11137) Lift the TRL ceiling to 1.13.0 and gate the range that was already being tested
- [#11846](https://github.com/unslothai/unsloth/pull/11846) Unsloth Studio installer (AMD/Windows): install PyTorch for RX 5000 to 9000 cards from AMD's multi-arch index
- [#11054](https://github.com/unslothai/unsloth/pull/11054) Studio: show attachments when editing a message
- [#12292](https://github.com/unslothai/unsloth/pull/12292) Baseline the thirteen unsloth-zoo 2026.9.8 findings after review
- [#10550](https://github.com/unslothai/unsloth/pull/10550) Studio: keep unsloth start alive while a LoRA adapter's base model downloads
- [#12141](https://github.com/unslothai/unsloth/pull/12141) Keep a model's no-placement parameters on CPU (Qwen3.8-Flash-Next n-gram table)
- [#11724](https://github.com/unslothai/unsloth/pull/11724) Studio: Respect the thinking budget on /v1/messages
- [#11352](https://github.com/unslothai/unsloth/pull/11352) Unsloth Studio / Desktop: support custom vision projectors
- [#12251](https://github.com/unslothai/unsloth/pull/12251) Unsloth Studio / Desktop: show the GPU llama.cpp runs on when it is CUDA or ROCm and differs from training
- [#12288](https://github.com/unslothai/unsloth/pull/12288) Studio tests: forget the managed provider URL setting cache around each test
- [#10670](https://github.com/unslothai/unsloth/pull/10670) Studio: keep working when GitHub rate limits or is down
- [#12185](https://github.com/unslothai/unsloth/pull/12185) Train LoRA on NVFP4 compressed-tensors checkpoints with the weights kept packed (W4A16)
- [#12238](https://github.com/unslothai/unsloth/pull/12238) Studio: keep what you typed with a document when a long chat is compacted
- [#11594](https://github.com/unslothai/unsloth/pull/11594) Studio: stop the stall watchdog from killing Xet downloads that are still receiving data
- [#12213](https://github.com/unslothai/unsloth/pull/12213) Qwen3.5: skip compiled regions on eager decode steps, make CUDA graph decode opt-in
- [#12256](https://github.com/unslothai/unsloth/pull/12256) Unsloth Studio: run fp16 Laya checkpoints in fp16 on MLX
- [#11148](https://github.com/unslothai/unsloth/pull/11148) Raise the minimum typer version so the unsloth command starts
- [#9788](https://github.com/unslothai/unsloth/pull/9788) fix(prompt storage): follow up, restore prompt list bookmarking, the kind pill and drag autoscroll
- [#12261](https://github.com/unslothai/unsloth/pull/12261) Composer attachments: first page previews, Library icons, lighter cards
- [#11744](https://github.com/unslothai/unsloth/pull/11744) Unsloth Studio / Desktop: add Canvas's console errors, and offer them to the model
- [#11291](https://github.com/unslothai/unsloth/pull/11291) Studio: show download progress during desktop updates
- [#4240](https://github.com/unslothai/unsloth/pull/4240) Fix DDP "marked ready twice" for VLMs with CPU offload + TiledMLP
- [#11486](https://github.com/unslothai/unsloth/pull/11486) Studio: keep pop-up messages off the Run settings panel
- [#11755](https://github.com/unslothai/unsloth/pull/11755) Unsloth Studio (AMD RDNA 1, Windows): install ROCm torch for the RX 5700 XT from AMD's multi-arch index
- [#12240](https://github.com/unslothai/unsloth/pull/12240) Studio: save the chat template a base model was trained with
- [#7166](https://github.com/unslothai/unsloth/pull/7166) feat(mlx): support DDP in CLI training
- [#11721](https://github.com/unslothai/unsloth/pull/11721) Studio: allow long inputs for embedding models
- [#11132](https://github.com/unslothai/unsloth/pull/11132) Decline the fused LoRA kernels under FSDP, where the weights are shard views
- [#12235](https://github.com/unslothai/unsloth/pull/12235) Studio: read attached HTML files in the encoding they declare
- [#12237](https://github.com/unslothai/unsloth/pull/12237) Studio: say when an attached PDF has no readable text
- [#12278](https://github.com/unslothai/unsloth/pull/12278) Studio: reopen the artifact panel after it has been dragged shut
- [#12283](https://github.com/unslothai/unsloth/pull/12283) Studio desktop: let the sidebar shrink to 224px
- [#12249](https://github.com/unslothai/unsloth/pull/12249) Unsloth Studio / Desktop (AMD): explain why an NVIDIA+AMD host installed with `CUDA_VISIBLE_DEVICES=""` shows no GPU
- [#12250](https://github.com/unslothai/unsloth/pull/12250) Unsloth Studio / Desktop (AMD): "Automatic" llama.cpp follows the installed torch on a mixed NVIDIA+AMD host
- [#12279](https://github.com/unslothai/unsloth/pull/12279) Studio: hide the stray scrollbar under the composer at fractional zoom
- [#4233](https://github.com/unslothai/unsloth/pull/4233) fix: handle zero-strided tensors in fast_rope_embedding (#3781)
- [#4225](https://github.com/unslothai/unsloth/pull/4225) refactor(trainer): add warning for ignored eval_steps
- [#11413](https://github.com/unslothai/unsloth/pull/11413) Unsloth Studio / Desktop: allow text-encoder nvfp4 on pre-Blackwell GPUs and explain TE precision refusals
- [#11849](https://github.com/unslothai/unsloth/pull/11849) Studio: let the dataset check accept chat columns that training already supports
- [#5616](https://github.com/unslothai/unsloth/pull/5616) ci: enforce npm ci on Studio install paths (follow-up to #5604)
- [#12242](https://github.com/unslothai/unsloth/pull/12242) Studio: show an error when Gemini fails a reply partway through
- [#12231](https://github.com/unslothai/unsloth/pull/12231) Studio: fit the context again when MTP is forced on a reload
- [#6646](https://github.com/unslothai/unsloth/pull/6646) Improve empty text dataset validation
- [#7033](https://github.com/unslothai/unsloth/pull/7033) Fix packed and grouped Q2 GGUF variant detection
- [#9106](https://github.com/unslothai/unsloth/pull/9106) Studio: title a chat with the connection that answered it, not the local model
- [#9571](https://github.com/unslothai/unsloth/pull/9571) Unsloth Studio: explain why Model Memory skips the RAM lock when a model is fully on the GPU
- [#12276](https://github.com/unslothai/unsloth/pull/12276) Scale the attachment preview text with the UI font size
- [#12270](https://github.com/unslothai/unsloth/pull/12270) Wait for the model-config Load to finish before the test moves on
- [#8057](https://github.com/unslothai/unsloth/pull/8057) Studio: do not fail a cached dataset load on a bookkeeping write
- [#4221](https://github.com/unslothai/unsloth/pull/4221) Add Qwen2.5 Coder model support to registry and chat templates
- [#12193](https://github.com/unslothai/unsloth/pull/12193) Average GRPO gradients across DDP ranks, and keep MiniCPM3's pre-head scaling
- [#12273](https://github.com/unslothai/unsloth/pull/12273) Read the llama.cpp changelog after it settles, by content rather than innerText
- [#12212](https://github.com/unslothai/unsloth/pull/12212) Reuse the dY @ B.t() product in the fused LoRA backward
- [#7020](https://github.com/unslothai/unsloth/pull/7020) Fall back to PEFT's LoRA forward for float32 base weights
- [#12268](https://github.com/unslothai/unsloth/pull/12268) Keep import unsloth working when vLLM needs transformers 5
- [#12243](https://github.com/unslothai/unsloth/pull/12243) Studio: read a remote image URL on safetensors and MLX models instead of ignoring it
- [#12234](https://github.com/unslothai/unsloth/pull/12234) Studio: stop tool calls from getting stuck in Running forever
- [#12236](https://github.com/unslothai/unsloth/pull/12236) Studio: stop chats with images from blocking other chats on GGUF models
- [#12207](https://github.com/unslothai/unsloth/pull/12207) Fix NaN gradients from compiled flex attention on short static training batches
- [#6741](https://github.com/unslothai/unsloth/pull/6741) Studio: name the llama.cpp graph-scheduler abort and stop reloading into it
- [#12241](https://github.com/unslothai/unsloth/pull/12241) Studio: show the model a phone photo the right way up
- [#12244](https://github.com/unslothai/unsloth/pull/12244) Studio: keep earlier messages when you send audio
- [#12216](https://github.com/unslothai/unsloth/pull/12216) Fix sidebar More menu hover and collapsed border hover
- [#12239](https://github.com/unslothai/unsloth/pull/12239) Studio: push only the exported merged model to the Hub on a Mac
- [#8812](https://github.com/unslothai/unsloth/pull/8812) Studio: say when a model only partly fits on the GPU
- [#12255](https://github.com/unslothai/unsloth/pull/12255) Run the user message timestamp Playwright check in Frontend CI
- [#12221](https://github.com/unslothai/unsloth/pull/12221) Library: equal size chat cards and no loading placeholders

#### 🐛 New Issues
- [#12257](https://github.com/unslothai/unsloth/issues/12257) [Bug] Unable to load Qwen 3.8 Flash Next (Specifically MLX) on M5 Ultra `feature request` `bug` 💬2
- [#12303](https://github.com/unslothai/unsloth/issues/12303) [Feature] Auto read-aloud after response completes `feature request`
- [#12297](https://github.com/unslothai/unsloth/issues/12297) [Bug] Importing chats that have been exported as .md and general housekeeping of settings tab `feature request` `bug`
- [#12260](https://github.com/unslothai/unsloth/issues/12260) [Bug] Suddenly Getting "Error loading java.security file" When Model Tries Building Gradle Project `feature request` `bug`
- [#12262](https://github.com/unslothai/unsloth/issues/12262) [Feature] Make Unsloth Studio Web UI installable as a PWA `feature request`

#### 🔒 Closed Issues
- [#497](https://github.com/unslothai/unsloth/issues/497) Allow passing in custom `past_key_values`
- [#8600](https://github.com/unslothai/unsloth/issues/8600) [Bug] Small bug on desktop app when app is resized
- [#719](https://github.com/unslothai/unsloth/issues/719) please give t5 support.
- [#12084](https://github.com/unslothai/unsloth/issues/12084) [Bug] Terminal tool hard-freezes the app at dispatch when command text contains two self-referential assignments (`VAR=$VAR`) in one quoted string — unbounded recursion in pre-dispatch scan (tools.py:4012)
- [#11434](https://github.com/unslothai/unsloth/issues/11434) Muse-Glimmer vision fine-tuning fails to compile: data-dependent `if frames > 1` in generated `get_vision_pixel_shuffle_index`
- [#11092](https://github.com/unslothai/unsloth/issues/11092) [Feature] Auto reload models when llama.cpp first connect or reconnects
- [#10296](https://github.com/unslothai/unsloth/issues/10296) [Feature] Support for custom mmproj path (stop rejecting compatible mmproj files as "metadata mismatch")
- [#12257](https://github.com/unslothai/unsloth/issues/12257) [Bug] Unable to load Qwen 3.8 Flash Next (Specifically MLX) on M5 Ultra
- [#3177](https://github.com/unslothai/unsloth/issues/3177) [Feature] Warning if eval_steps is set, but eval_strategy!="steps"
- [#9549](https://github.com/unslothai/unsloth/issues/9549) [Bug] AMD: Unsloth Studio loads models into system RAM despite VRAM-only settings (W7900 + W7500, Strix Halo)
- [#12058](https://github.com/unslothai/unsloth/issues/12058) [Bug] Randomly Getting "Invalid base64 value" When Valid MCP Image Returns
- [#11141](https://github.com/unslothai/unsloth/issues/11141) Studio: expose prefill progress over the API so clients can show the wait before the first token
- [#11952](https://github.com/unslothai/unsloth/issues/11952) [Bug] Getting error "indices should be either on cpu or on the same device as the indexed tensor (cuda:0)" when trying to train Gemma 4 31b since upgrading to v0.1.806-beta
- [#10168](https://github.com/unslothai/unsloth/issues/10168) [Feature] Allow saving cutom settings without loading the model
- [#11473](https://github.com/unslothai/unsloth/issues/11473) [Feature] Unsloth Studio / Desktop: the HTML preview swallows runtime errors and console output, and has no way to hand an error back to the model
- [#9550](https://github.com/unslothai/unsloth/issues/9550) [Bug] AMD: Unsloth Studio drops MTP to fit context, and turning MTP back on doesn't re-fit (W7900 + W7500)
- [#9045](https://github.com/unslothai/unsloth/issues/9045) [Bug] title generation doesnt work
- [#11396](https://github.com/unslothai/unsloth/issues/11396) [Bug]Asked to sample `fps` frames per second but no video metadata was provided which is required when sampling with `fps`. Defaulting to `fps=24`. Please provide `video_metadata` for more accurate results.
- [#12248](https://github.com/unslothai/unsloth/issues/12248) [Feature] AMD: Unsloth Studio / Desktop: use an NVIDIA card and an AMD card at the same time for different jobs
- [#12247](https://github.com/unslothai/unsloth/issues/12247) [Bug] Unsloth Studio / Desktop: the System tab doesn't show the card llama.cpp runs on when it's CUDA or ROCm and different from training
- [#12246](https://github.com/unslothai/unsloth/issues/12246) [Bug] AMD: Unsloth Studio / Desktop "Automatic" llama.cpp backend picks CUDA on a mixed host where torch is ROCm and the AMD card is bigger
- [#12245](https://github.com/unslothai/unsloth/issues/12245) [Bug] AMD: Unsloth Studio / Desktop shows no GPU on a mixed NVIDIA+AMD host after `CUDA_VISIBLE_DEVICES=""`, because ROCm hides the AMD card too

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,120 · **Open issues:** 388 · **Last push:** <1h ago

On September 30, 2026, AIBrix had no new releases, reflecting a day focused on consolidating existing features and addressing bugs. Notable merged pull requests included the addition of external replica routing to the Gateway and key enhancements to the prefix hash index and throughput mapping by namespace/name, which should improve performance metrics significantly. Several critical bug fixes were implemented, such as enforcing the maxContexts cap for the SyncPrefixHashTable and ensuring the ModelClaim is rescheduled after terminal engine failures. The day also saw the emergence of several new issues, with the most concerning being the ModelRouter's failure to recreate a missing HTTPRoute under specific conditions. Overall, it was a day of meaningful improvements centered around system reliability and performance.

#### ✅ Merged PRs
- [#2855](https://github.com/vllm-project/aibrix/pull/2855) [Bug] Scrape static-discovery endpoints on their serving port
- [#2847](https://github.com/vllm-project/aibrix/pull/2847) [Misc] Remove FilterPodByName and match LPRadixCache pods by pod key
- [#2851](https://github.com/vllm-project/aibrix/pull/2851) [Bug] Detect the PD role from the role-name label when deriving token throughput
- [#2846](https://github.com/vllm-project/aibrix/pull/2846) [Bug] Enforce SyncPrefixHashTable's maxContexts cap and evict expired pods
- [#2841](https://github.com/vllm-project/aibrix/pull/2841) [Feat] Add external replica routing to Gateway
- [#2835](https://github.com/vllm-project/aibrix/pull/2835) [Bug] Key the prefix hash index by namespace/name
- [#2838](https://github.com/vllm-project/aibrix/pull/2838) [Bug] Key the Preble tree and throughput pick by namespace/name
- [#2837](https://github.com/vllm-project/aibrix/pull/2837) [Bug] Key PD per-request maps by namespace/name
- [#2836](https://github.com/vllm-project/aibrix/pull/2836) [Bug] Key per-pod ports by namespace/name
- [#2829](https://github.com/vllm-project/aibrix/pull/2829) [Bug] Reschedule ModelClaim after terminal engine failure
- [#2842](https://github.com/vllm-project/aibrix/pull/2842) [Feat] Add token_load decode score policy to the PD router
- [#2832](https://github.com/vllm-project/aibrix/pull/2832) [Bug] Key single-port pods as pod/port in the least-request DP path

#### 🐛 New Issues
- [#2848](https://github.com/vllm-project/aibrix/issues/2848) [Bug] ModelRouter never recreates a missing HTTPRoute (deleted route, or model label added later) `kind/bug` `area/gateway` 💬2
- [#2854](https://github.com/vllm-project/aibrix/issues/2854) [Bug] Static discovery endpoints are scraped for metrics on port 8000 regardless of their configured port `kind/bug` `area/gateway` 💬1
- [#2850](https://github.com/vllm-project/aibrix/issues/2850) [Bug] Gateway derives token throughput only for pods whose name contains the PD role `kind/bug` `area/gateway` 💬1
- [#2849](https://github.com/vllm-project/aibrix/issues/2849) [RFC]: Account for generated output in the token_load decode policy `area/gateway` `kind/feature` `area/website` `area/kv-cache` 💬1

#### 🔒 Closed Issues
- [#2800](https://github.com/vllm-project/aibrix/issues/2800) [Bug] Gateway per-pod state still keyed by bare pod name outside the PD trackers
- [#2840](https://github.com/vllm-project/aibrix/issues/2840) [RFC]: Token-weighted decode scoring for the PD router

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,981 · **Open issues:** 587 · **Last push:** <1h ago

On September 30, 2026, there were no new releases for Semantic Router. Significant merged pull requests included a fix to preserve tool-loop ownership across bypass routes (#4297) and a test ensuring rollback restores the exact pre-deploy configuration (#4046). The day also saw the emergence of important new issues, particularly #4375, which requests a simplification of the homepage hero by dropping the terrain canvas and centering the copy, as well as #4344, reporting a bug where the Kubernetes CLI incorrectly indicates deployment readiness after `kubectl wait` fails.

#### ✅ Merged PRs
- [#4297](https://github.com/vllm-project/semantic-router/pull/4297) [Bug] Preserve tool-loop ownership across bypass routes
- [#4046](https://github.com/vllm-project/semantic-router/pull/4046) [Test] Prove rollback restores the exact pre-deploy config

#### 🐛 New Issues
- [#4375](https://github.com/vllm-project/semantic-router/issues/4375) [Website] Simplify homepage hero: drop terrain canvas, center copy, soft CSS backdrop `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬5
- [#4344](https://github.com/vllm-project/semantic-router/issues/4344) [Bug] Kubernetes CLI reports deployment ready after kubectl wait fails `bug` `accepted` `wg/enterprise-environment` 💬4
- [#4363](https://github.com/vllm-project/semantic-router/issues/4363) [Bug] Propagate request cancellation through model-selection embeddings `bug` `accepted` `wg/mom-routing` 💬3
- [#4345](https://github.com/vllm-project/semantic-router/issues/4345) [Bug] MCP Auto Reconnect setting is dropped on save and never applied `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4364](https://github.com/vllm-project/semantic-router/issues/4364) [Feature] RFC: Distinguish routing-preview reproducibility modes `enhancement` `needs-acceptance` `wg/mom-routing` 💬1
- [#4378](https://github.com/vllm-project/semantic-router/issues/4378) [Bug] Harness docs allow Python 3.10, but tools/ci and src/training call hashlib.file_digest (3.11+) `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4377](https://github.com/vllm-project/semantic-router/issues/4377) [Bug] test_service_boundary.py still expects the ml-service sidecar that #4125 removed, and CI never runs it `bug` `accepted` `wg/evaluation-quality` 💬1
- [#4373](https://github.com/vllm-project/semantic-router/issues/4373) [Website] Play the intro film in the homepage hero `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4369](https://github.com/vllm-project/semantic-router/issues/4369) [Epic] Make RAG plugin configuration fail-closed and hybrid retrieval deterministic `needs-acceptance` `epic` 💬1
- [#4348](https://github.com/vllm-project/semantic-router/issues/4348) [Bug] Dashboard frontend lockfile pins 39 packages to a third-party npm registry, breaking npm ci `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4342](https://github.com/vllm-project/semantic-router/issues/4342) [Feature] helm chart for the operator `enhancement` `needs-acceptance` `wg/enterprise-environment` 💬1
- [#4383](https://github.com/vllm-project/semantic-router/issues/4383) [Bug] Chat response decoding drops vLLM's matched stop sequence, so Anthropic clients get end_turn `bug` `needs-acceptance` `wg/data-plane-networking`
- [#4382](https://github.com/vllm-project/semantic-router/issues/4382) [Feature] Identify Valkey connections via CLIENT SETINFO LIB-NAME for usage attribution `enhancement` `needs-acceptance`
- [#4381](https://github.com/vllm-project/semantic-router/issues/4381) feature: Log selection propensity in OfflineDatasetRecord for off-policy correction `needs-acceptance` `wg/router-models-inference-runtime`
- [#4367](https://github.com/vllm-project/semantic-router/issues/4367) [Bug] Kubernetes check suggests make targets that do not exist `bug` `accepted` `wg/developer-experience-ecosystem`
- [#4365](https://github.com/vllm-project/semantic-router/issues/4365) [Bug] NOT guards incorrectly disqualify scored decisions from confidence ranking `bug` `accepted` `wg/mom-routing`
- [#4366](https://github.com/vllm-project/semantic-router/issues/4366) [Bug] sr-bench preview requests ignore case deadlines and in-flight cancellation `bug` `accepted` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#2318](https://github.com/vllm-project/semantic-router/issues/2318) [Bug] Expose loaded multimodal embedding capabilities and readiness
- [#4375](https://github.com/vllm-project/semantic-router/issues/4375) [Website] Simplify homepage hero: drop terrain canvas, center copy, soft CSS backdrop
- [#4296](https://github.com/vllm-project/semantic-router/issues/4296) [Bug] Bypass dispatch leaves stale owner for active tool-loop continuation
- [#4282](https://github.com/vllm-project/semantic-router/issues/4282) [Bug] Non-streaming Anthropic Messages requests fail with 502 when the OpenAI backend omits usage
- [#4249](https://github.com/vllm-project/semantic-router/issues/4249) [Feature] Warn when a vLLM backend serves less context than its Model Card
- [#4373](https://github.com/vllm-project/semantic-router/issues/4373) [Website] Play the intro film in the homepage hero

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*