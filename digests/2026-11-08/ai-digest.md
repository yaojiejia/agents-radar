# 📡 AI Ecosystem Digest — 2026-11-08

> Generated 2026-11-08 02:05 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 154,914 | 25 | 3 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 133,591 | 19 | 3 | 32 | 1 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,770 | 1 | 14 | 0 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,376 | 5 | 14 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 225,309 | 28 | 11 | 9 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29,078 | 11 | 19 | 7 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,148 | 95 | 76 | 147 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 261,524 | 11 | 34 | 30 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,530 | 27 | 11 | 28 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,562 | 4 | 29 | 85 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,666 | 5 | 9 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,290 | 4 | 3 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,883 | 15 | 26 | 43 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,166 | 9 | 7 | 83 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,182 | 0 | 0 | 2 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,415 | 3 | 39 | 3 | 0 |

---

## ✨ Highlights

- **GitHub Copilot CLI** released version [v1.0.108-1](https://github.com/github/copilot-cli/releases/tag/v1.0.108-1).
- **Qwen Code** released multiple versions including [v0.27.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.0) and [desktop-v0.27.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.27.0).
- **OpenAI Codex** merged [#60188](https://github.com/openai/codex/pull/60188), introducing model overrides for incremental Code Mode tool messages.
- **OpenClaw** saw a hot new issue with [#194662](https://github.com/openclaw/openclaw/issues/194662) regarding a bug that invents a sender and keeps the session alive, generating 9 comments.
- **OpenCode** reported a significant issue [#62675](https://github.com/anomalyco/opencode/issues/62675) related to loss of select ability in VSCode, accumulating 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 154,914 · **Open issues:** 16,799 · **Last push:** 1d ago

On November 8, 2026, there were no new releases or merged pull requests for Claude Code, indicating a day of routine development maintenance. However, several new issues were reported, including a bug in the macOS desktop version where MCP Apps from local stdio servers fail to render in Chat, and a significant typing lag issue in the desktop app causing high CPU usage. Other notable problems include accessibility issues with Claude Docs generated from the Docs connector, and a bug on Linux regarding suspend detection not triggering correctly. Additionally, there were feature requests for configurable silence timeout for voice dictation and a new Claude Code-style agent for iPhone, emphasizing ongoing user interest in expanding the platform’s capabilities.

#### 🐛 New Issues
- [#108122](https://github.com/anthropics/claude-code/issues/108122) [BUG] Desktop 4.23118.0 (macOS): MCP Apps from local stdio servers no longer render in Chat — ui:// resource never read `bug` `has repro` `platform:macos` `area:mcp` 💬5
- [#108216](https://github.com/anthropics/claude-code/issues/108216) [Desktop] Typing lag in Claude desktop app: renderer 45% / main process 58-98% CPU while typing `bug` `platform:macos` `area:mcp` `perf:cpu` 💬4
- [#108161](https://github.com/anthropics/claude-code/issues/108161) [BUG] Claude Docs created via the Docs connector from Claude Code are unreachable to the session: read denied, Artifact lookup 404, @Claude comments never delivered `bug` `has repro` `platform:linux` `area:mcp` 💬1
- [#108244](https://github.com/anthropics/claude-code/issues/108244) claude est très perfommant en terme de génération de manuels ou livres, j'ai ré… `invalid`
- [#108243](https://github.com/anthropics/claude-code/issues/108243) [BUG] Linux: mid-stream suspend detection never fires, so a stream cut by a suspend waits out the full idle timeout after resume `bug` `platform:linux` `area:core` `area:networking`
- [#108242](https://github.com/anthropics/claude-code/issues/108242) [Desktop] Blue dot on Scheduled tasks rows never clears and is undocumented `bug` `platform:windows` `area:desktop`
- [#108241](https://github.com/anthropics/claude-code/issues/108241) [Feature Request] Configurable silence timeout and max duration for tap-mode voice dictation `enhancement` `platform:macos` `area:tui`
- [#108240](https://github.com/anthropics/claude-code/issues/108240) [FEATURE] A deterministic session "trust floor": provenance that travels with the turn, parks by effect, and learns from the user's rejections `enhancement` `area:security` `area:permissions`
- [#108239](https://github.com/anthropics/claude-code/issues/108239) [GitHub integration] `bug` `platform:web` `github-integration`
- [#108238](https://github.com/anthropics/claude-code/issues/108238) [BUG] Desktop: nested side sessions + automatic parent wakes + per-session MCP servers → weekly limit gone in ~1 day and a macOS watchdog kernel panic (regression after side sessions shipped) `bug` `platform:macos` `area:cost` `area:mcp`
- [#108237](https://github.com/anthropics/claude-code/issues/108237) [BUG] Desktop: account shows weekly usage with zero requests after account switch; resumed session's cron fires on new account `bug` `platform:windows` `area:auth` `area:desktop`
- [#108236](https://github.com/anthropics/claude-code/issues/108236) Auto mode classifier blocks writing a systemd .service/.timer to /etc/systemd/system on a user-owned server, label [Unauthorized Persistence], with no approval path `bug` `platform:linux` `area:permissions`
- [#108235](https://github.com/anthropics/claude-code/issues/108235) [FEATURE] Add a option to add a skill directly from github, without have to download, on the desktop app `enhancement` `area:skills` `area:desktop`
- [#108234](https://github.com/anthropics/claude-code/issues/108234) [Bug] User incorrectly flagged for cyber misuse with no apparent cause `bug` `platform:macos` `area:model`
- [#108233](https://github.com/anthropics/claude-code/issues/108233) [FEATURE] Claude Code-style agent on iPhone that works on the phone itself, not only on a computer `enhancement` `platform:ios`
- [#108232](https://github.com/anthropics/claude-code/issues/108232) [GitHub integration] `invalid` `github-integration`
- [#108231](https://github.com/anthropics/claude-code/issues/108231) [Bug] Claude Code Overengineers Solutions `bug` `platform:macos` `area:model`
- [#108230](https://github.com/anthropics/claude-code/issues/108230) [Feature Request] Allow demo/testnet exchange orders in Claude in Chrome `enhancement` `platform:linux` `area:chrome`
- [#108229](https://github.com/anthropics/claude-code/issues/108229) Claude in Chrome: show the JavaScript code in the "running page script" permission prompt `enhancement` `area:security` `area:permissions` `area:chrome`
- [#108228](https://github.com/anthropics/claude-code/issues/108228) [Bug] Computer Use reports missing screen recording and accessibility permissions despite being granted/ `bug` `platform:macos` `area:permissions`
- [#108227](https://github.com/anthropics/claude-code/issues/108227) Claude Code repeatedly hands screen-visibility work back to the user on GNOME Wayland instead of using the screenshot portal `bug` `platform:linux` `area:model`
- [#108226](https://github.com/anthropics/claude-code/issues/108226) [Bug] Claude Code Guesses Instead of Asking for Clarification `bug` `platform:linux` `area:model`
- [#108225](https://github.com/anthropics/claude-code/issues/108225) [Bug] Background-task expiry notifications drive an unattended restart loop that consumes the user's usage limit `bug` `platform:windows` `area:cost` `area:bash`
- [#108224](https://github.com/anthropics/claude-code/issues/108224) [MODEL] Report unexpected Claude model behavior, incorrect actions, or permission violations. `bug` `platform:macos` `area:model` `model`
- [#108223](https://github.com/anthropics/claude-code/issues/108223) [Bug] Unable to Complete Custom Firmware Request: Unclear Cyber Task Refusal `bug` `platform:linux` `area:model` `needs-info`

#### 🔒 Closed Issues
- [#108216](https://github.com/anthropics/claude-code/issues/108216) [Desktop] Typing lag in Claude desktop app: renderer 45% / main process 58-98% CPU while typing
- [#106604](https://github.com/anthropics/claude-code/issues/106604) Coordinator-started device threads always get the rule ‘single blessed folder, …
- [#108076](https://github.com/anthropics/claude-code/issues/108076) .

### OpenAI Codex (`openai/codex`)

**Stars:** 133,591 · **Open issues:** 26,872 · **Last push:** <1h ago

On November 8, 2026, the rust-v0.169.0-alpha.3 version was released, marking an incremental update with various enhancements. Significant merged pull requests included the introduction of keyboard and mouse navigation for sidebar tabs in #60181, provisions for custom providers during sign-in via #60186, and the addition of incremental code mode tool definitions in #60157. Notably, there's a growing issue with macOS users experiencing doubled or tripled physical typing in Chrome and Safari, documented in #60147, which may impact user experience significantly. Overall, this day focused on improving user interface navigation and addressing authentication challenges, alongside addressing various new issues raised by the community.

#### 🚀 New Releases
- [rust-v0.169.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3) 0.169.0-alpha.3

#### ✅ Merged PRs
- [#60188](https://github.com/openai/codex/pull/60188) Allow model overrides for incremental Code Mode tool messages
- [#60186](https://github.com/openai/codex/pull/60186) Allow creating custom providers during sign-in
- [#60181](https://github.com/openai/codex/pull/60181) Add keyboard and mouse navigation for sidebar tabs
- [#60180](https://github.com/openai/codex/pull/60180) Attach typed punctuation to completed skill mentions
- [#60177](https://github.com/openai/codex/pull/60177) Add metrics for incremental exec catalog updates
- [#60173](https://github.com/openai/codex/pull/60173) Test exec catalog preservation across session and compaction changes
- [#60172](https://github.com/openai/codex/pull/60172) Preserve display instructions in answer moderation
- [#60163](https://github.com/openai/codex/pull/60163) Wire incremental exec tool updates into Code Mode sessions
- [#60157](https://github.com/openai/codex/pull/60157) Add support for incremental code mode tool definitions
- [#60152](https://github.com/openai/codex/pull/60152) Persist local workspace side chats and add tab close controls
- [#60122](https://github.com/openai/codex/pull/60122) Preserve code mode dispatch errors in rollout traces
- [#60118](https://github.com/openai/codex/pull/60118) Buffer payload JSON reads during rollout trace replay
- [#60101](https://github.com/openai/codex/pull/60101) Use runtime authentication for Analytics requests
- [#60096](https://github.com/openai/codex/pull/60096) Stop retrying terminal runtime authentication denials
- [#60082](https://github.com/openai/codex/pull/60082) Fetch account security reminders through app-server
- [#60080](https://github.com/openai/codex/pull/60080) Allow asynchronous model request budget checks
- [#60075](https://github.com/openai/codex/pull/60075) Support asynchronous host service-tier reads and acceptance
- [#60073](https://github.com/openai/codex/pull/60073) Use runtime authentication for remote-control requests
- [#60067](https://github.com/openai/codex/pull/60067) Ensure side-chat policy reaches the first model request
- [#60064](https://github.com/openai/codex/pull/60064) Use thread runtime auth for Guardian Decisions and memory quota checks
- [#60061](https://github.com/openai/codex/pull/60061) Support Cloud image messages and editable draft handoffs
- [#60055](https://github.com/openai/codex/pull/60055) Reauthenticate runtime requests before reusing WebSocket access
- [#60049](https://github.com/openai/codex/pull/60049) Preserve model catalogs when starting child agents
- [#60048](https://github.com/openai/codex/pull/60048) Allow plugin starter prompts up to 512 characters
- [#60046](https://github.com/openai/codex/pull/60046) Derive MCP network policy and preserve saved denials
- [#60042](https://github.com/openai/codex/pull/60042) Centralize Windows sandbox filesystem override resolution
- [#60041](https://github.com/openai/codex/pull/60041) Require explicit project trust in non-interactive runs
- [#60040](https://github.com/openai/codex/pull/60040) Restrict legacy incremental tools to Amazon Bedrock providers
- [#60039](https://github.com/openai/codex/pull/60039) Add opt-in lazy startup for cached stdio MCP servers
- [#60038](https://github.com/openai/codex/pull/60038) Surface MCP server startup errors when preparing cached tool calls
- [#60037](https://github.com/openai/codex/pull/60037) Preserve MCP sharing discovery when deferring cached stdio startup
- [#60035](https://github.com/openai/codex/pull/60035) Fix authentication for git-attribution settings requests

#### 🐛 New Issues
- [#60147](https://github.com/openai/codex/issues/60147) macOS Computer Use: physical typing doubles/triples in Chrome and Safari while purple control indicator is active (one agent sufficient) `bug` `app` `computer-use` 💬3
- [#60149](https://github.com/openai/codex/issues/60149) Windows ChatGPT: Browser interaction cannot be initiated even though the Browser tool tag is selected `bug` `windows-os` `app` `browser` 💬3
- [#60166](https://github.com/openai/codex/issues/60166) I wish the common (shared) memory between iOS app (or web version chatgpt) and codex cli as Claude-code with Claude.ai does `bug` `enhancement` `CLI` `memory` 💬2
- [#60158](https://github.com/openai/codex/issues/60158) MCP form elicitations are auto-declined in 0.167.0 (CLI and desktop app), even with approval_policy = "on-request" `bug` `mcp` `CLI` 💬2
- [#60174](https://github.com/openai/codex/issues/60174) Support shortening completed tool results at turn boundaries in the Codex CLI `enhancement` `CLI` `context` `hooks` 💬2
- [#60167](https://github.com/openai/codex/issues/60167) Fail-closed hook to screen a subagent's result before the parent agent sees it `enhancement` `CLI` `hooks` `subagent` 💬1
- [#60155](https://github.com/openai/codex/issues/60155) Smart Delegation — Automatic Hierarchical Model Delegation in Codex `enhancement` `subagent` 💬1
- [#60187](https://github.com/openai/codex/issues/60187) [macOS][25241] Slow foreground chat navigation with measured renderer stalls and a large desktop process tree `bug` `app` `performance` 💬1
- [#60184](https://github.com/openai/codex/issues/60184) Agent stalls in "Thinking" state after several agentic steps; no response for 10+ minutes `bug` `app` `performance` 💬1
- [#60183](https://github.com/openai/codex/issues/60183) TUI: attaching to an already-started thread leaves MCP startup unsettled, so the TUI stays busy after every turn (Esc backtrack and Ctrl+C quit blocked) `bug` `mcp` `TUI` `CLI` 💬1
- [#60176](https://github.com/openai/codex/issues/60176) macOS: Computer Use helper interferes with manual Logic Pro dragging; helper restart with History stopped clears it `bug` `app` `computer-use` 💬1
- [#60175](https://github.com/openai/codex/issues/60175) Computer Use on Windows cannot verify the URL of an open Chrome window `bug` `windows-os` `computer-use` 💬1
- [#60113](https://github.com/openai/codex/issues/60113) Codex App - High CPU Usage `bug` `app` `performance` 💬1
- [#60103](https://github.com/openai/codex/issues/60103) fix(schema): allow $schema keyword at root of hooks.json `bug` `hooks` `config` 💬1
- [#60123](https://github.com/openai/codex/issues/60123) [ChatGPT Work][iOS] The same Markdown table wraps into more lines and shows fewer rows than Android `bug` `iOS`
- [#60189](https://github.com/openai/codex/issues/60189) Agent runs `find ..` to look for AGENTS.md, searching sibling directories outside the workspace `bug` `model-behavior` `sandbox` `CLI`
- [#60182](https://github.com/openai/codex/issues/60182) Clarify PreToolUse coverage for trusted hooks on cua_repl in Codex desktop `bug` `windows-os` `mcp` `app`
- [#60179](https://github.com/openai/codex/issues/60179) CLI: opt-in project workspace lifecycle with automatic naming, one-off storage, and global resume `enhancement` `CLI` `session`
- [#60178](https://github.com/openai/codex/issues/60178) [Dots cloud computer] Nov 7 incident: browser runtime unavailable and desktop Offline despite connected status `bug` `computer-use` `browser` `performance`

#### 🔒 Closed Issues
- [#51687](https://github.com/openai/codex/issues/51687) False Positive Cybersecurity Warning Porting Android To Galaxy Tab S3
- [#45477](https://github.com/openai/codex/issues/45477) Windows: Cannot start a new regular ChatGPT chat directly inside a Project
- [#34627](https://github.com/openai/codex/issues/34627) Severe multi-minute tool latency and inconsistent writable-root permissions in Codex Desktop on Windows

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,770 · **Open issues:** 753 · **Last push:** <1h ago

On November 8, 2026, there were no new releases or merged pull requests for Gemini CLI. The most notable development was the creation of issue #30202, concerning a failed nightly release for version v0.69.0-nightly.20261108. This issue is currently open and has attracted attention, though no additional comments have been added yet. Overall, the day was routine in terms of updates and activity.

#### 🐛 New Issues
- [#30202](https://github.com/google-gemini/gemini-cli/issues/30202) Nightly Release Failed for v0.69.0-nightly.20261108.g62bab5b23 on 2026-11-08 `priority/p0` `release-failure`

#### 🔒 Closed Issues
- [#28683](https://github.com/google-gemini/gemini-cli/issues/28683) Missing usageMetadata is recorded as all-zero, indistinguishable from a real zero-token response
- [#29053](https://github.com/google-gemini/gemini-cli/issues/29053) bug: commandRegex policy patterns are unanchored and can match across JSON properties
- [#29056](https://github.com/google-gemini/gemini-cli/issues/29056) bug: background-process history evicts still-running entries (insertion-order FIFO ignores status)
- [#29055](https://github.com/google-gemini/gemini-cli/issues/29055) bug: file-search result cache reuses prefix matches across different matcher semantics, dropping results
- [#29039](https://github.com/google-gemini/gemini-cli/issues/29039) bug: web-fetch grounding citation markers inserted at wrong positions (UTF-16 splice of UTF-8 byte offsets)
- [#29040](https://github.com/google-gemini/gemini-cli/issues/29040) bug: glob tool returns 'No files found' for matches under symlinked workspace subdirectories
- [#29038](https://github.com/google-gemini/gemini-cli/issues/29038) bug: extension trust gate evaluates process.cwd() but prompts/writes trust for workspaceDir
- [#29027](https://github.com/google-gemini/gemini-cli/issues/29027) bug: mid-stream retry backoff is not abort-aware and retries content errors after cancellation
- [#29028](https://github.com/google-gemini/gemini-cli/issues/29028) bug: abort-time history rollback becomes a silent no-op after mid-prompt CONTENT_TRUNCATED compression
- [#29026](https://github.com/google-gemini/gemini-cli/issues/29026) bug: context-management history dedupe silently drops consecutive identical turns (dangling functionCall -> API 400)
- [#29014](https://github.com/google-gemini/gemini-cli/issues/29014) CI: six workflows have no explicit permissions block
- [#29010](https://github.com/google-gemini/gemini-cli/issues/29010) Docs: CLI reference lists a removed --experimental-zed-integration flag and omits --acp
- [#29002](https://github.com/google-gemini/gemini-cli/issues/29002) bug(a2a-server): /executeCommand streaming error path writes a JSON 500 into an already-started SSE response (ERR_HTTP_HEADERS_SENT)
- [#28996](https://github.com/google-gemini/gemini-cli/issues/28996) [Bug] Esc key fails to cancel retryWithBackoff deadlock during WebSearch tool 429 quota error

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,376 · **Open issues:** 2,190 · **Last push:** 23h ago

On November 8, 2026, GitHub Copilot CLI released version 1.0.108-1, which addressed issues with PDF attachments in Grok 4.6 and 4.7 by falling back to file references instead of failing the turn, and also improved the functionality of the local MCP server to restart correctly after a `/cd` command, aligning with new directory permissions. There were no merged pull requests today, but several new issues were logged, highlighting concerns such as the disappearance of skills registered through extensions after a `new_context` (#5382) and a permission request that hangs indefinitely in prompt mode (#5381). Additionally, the necessity for full-script review in the PowerShell approval parser for basic Git commands in version 1.0.107 (#5379) stood out, along with requests for better keyboard navigation within the chat interface (#5378).

#### 🚀 New Releases
- [v1.0.108-1](https://github.com/github/copilot-cli/releases/tag/v1.0.108-1) 1.0.108-1

#### 🐛 New Issues
- [#5382](https://github.com/github/copilot-cli/issues/5382) Skills registered through an extension's `skillDirectories` disappear after `new_context`, and restored sessions don't see them `triage`
- [#5381](https://github.com/github/copilot-cli/issues/5381) In prompt mode, an extension tool's permission request waits forever instead of being denied, and `--allow-tool` can't name an extension tool `triage`
- [#5380](https://github.com/github/copilot-cli/issues/5380) Extensions don't start for sessions created with `create_session` until the user switches to them `triage`
- [#5379](https://github.com/github/copilot-cli/issues/5379) PowerShell approval parser requires full-script review for simple Git commands in 1.0.107 `triage`
- [#5378](https://github.com/github/copilot-cli/issues/5378) Add keyboard navigation throughout the chat interface `area:input-keyboard`

#### 🔒 Closed Issues
- [#5112](https://github.com/github/copilot-cli/issues/5112) Support OSC 7501 program status in the interactive CLI
- [#3012](https://github.com/github/copilot-cli/issues/3012) Allow to set a token limit for a task
- [#4977](https://github.com/github/copilot-cli/issues/4977) Bundled ripgrep aborts with jemalloc 'Unsupported system page size' on 16KB-page ARM64 kernels (Asahi Linux)
- [#5023](https://github.com/github/copilot-cli/issues/5023) Session resume fails when masked code-change metrics make session.shutdown counters strings
- [#4909](https://github.com/github/copilot-cli/issues/4909) /ide finds no workspaces under the CLI sandbox: kill(pid,0) EPERM misread as a dead process
- [#1528](https://github.com/github/copilot-cli/issues/1528) Custom agents with builtin agent names are silently ignored
- [#5168](https://github.com/github/copilot-cli/issues/5168) Markdown line breaks in table cells stripped from output
- [#4426](https://github.com/github/copilot-cli/issues/4426) /cwd does not strip surrounding quotes from pasted Windows paths (Explorer "Copy as path")
- [#1486](https://github.com/github/copilot-cli/issues/1486) Endpoint args like /user/... for gh api appear to be misclassified as filesystem absolute paths
- [#3884](https://github.com/github/copilot-cli/issues/3884) [Doc] No document related to enterprise policy enforcement for local sandbox
- [#5372](https://github.com/github/copilot-cli/issues/5372) /rubber-duck command disappeared from copilot-cli
- [#4918](https://github.com/github/copilot-cli/issues/4918) Built-in ARM64 ripgrep crashes on Linux systems with 64 KiB pages due to jemalloc
- [#4962](https://github.com/github/copilot-cli/issues/4962) `plugin install` fails on repos that use Git LFS: the whole repo's LFS content is downloaded, and one missing object aborts the install
- [#5004](https://github.com/github/copilot-cli/issues/5004) Ctrl+G (edit in $EDITOR) breaks ask_user question mode (regression of #4230)

### OpenCode (`anomalyco/opencode`)

**Stars:** 225,309 · **Open issues:** 4,157 · **Last push:** <1h ago

On November 8, 2026, there were no new releases for OpenCode, but several important pull requests were merged. Notably, the fixes include stopping server functions from failing behind a proxy (#62677), preventing page dimming when a product card opens (#62622), and ensuring the product chevron matches the documentation chevron (#62665). Key features introduced include shared product and logo menus across navigation (#62654) and the enhancement of Console event watches to wake sessions (#62662). Among the new issues, the most significant concerns the loss of select ability for copy/paste in VSCode (#62675), highlighting an ongoing user experience challenge.

#### ✅ Merged PRs
- [#62677](https://github.com/anomalyco/opencode/pull/62677) fix(site): stop server functions failing on the dev server behind a proxy
- [#62661](https://github.com/anomalyco/opencode/pull/62661) docs: antivirus HTTPS scanning and W-9 tax form
- [#62672](https://github.com/anomalyco/opencode/pull/62672) perf(core): fetch Console instructions and skills concurrently
- [#62622](https://github.com/anomalyco/opencode/pull/62622) fix(site): stop the page dimming when a product card opens
- [#62665](https://github.com/anomalyco/opencode/pull/62665) fix(site): match the product chevron to the docs chevron
- [#62654](https://github.com/anomalyco/opencode/pull/62654) feat(site): add the shared product and logo menus to every nav
- [#62662](https://github.com/anomalyco/opencode/pull/62662) feat(core): wake sessions on Console event watches
- [#62660](https://github.com/anomalyco/opencode/pull/62660) fix(data): keep native light-dark() so the shared nav menus get their colours
- [#62623](https://github.com/anomalyco/opencode/pull/62623) feat(data): switch the mono font to OpenTUI Mono

#### 🐛 New Issues
- [#62675](https://github.com/anomalyco/opencode/issues/62675) Loss of select ability (copy/paste) shortly after it was working - VSCode `pending close` `triaging` 💬5
- [#62666](https://github.com/anomalyco/opencode/issues/62666) TUI plugin from an npm package: solid-js signal updates do not re-render slots `pending close` `triaging` 💬5
- [#62634](https://github.com/anomalyco/opencode/issues/62634) TUI: plugins from scoped npm packages crash with "Invalid storage segment" when using storage `reproduced` 💬4
- [#62668](https://github.com/anomalyco/opencode/issues/62668) tui: tab loading indicator disappears while background tasks are still running `pending close` `triaging` 💬3
- [#62655](https://github.com/anomalyco/opencode/issues/62655) [FEATURE]: Add last chat message timestamp to GET /api/session 💬3
- [#62647](https://github.com/anomalyco/opencode/issues/62647) Feedback on the desktop versions ui (windows) 💬3
- [#62639](https://github.com/anomalyco/opencode/issues/62639) [FEATURE]: Add PayPal support for Console billing and Go subscriptions 💬1
- [#62601](https://github.com/anomalyco/opencode/issues/62601) Desktop: Archive session shortcut does nothing 💬2
- [#62683](https://github.com/anomalyco/opencode/issues/62683) Shell exits 64 when the Windows pwsh path contains a space `pending close` `triaging` 💬1
- [#62681](https://github.com/anomalyco/opencode/issues/62681) cli: run hangs before creating a session when the initial SSE event is buffered `reproduced` 💬1
- [#62682](https://github.com/anomalyco/opencode/issues/62682) cli: models and session listing hang instead of erroring when the cwd does not exist on the server 💬1
- [#62621](https://github.com/anomalyco/opencode/issues/62621) connecting your GitHub account timingdirector to ChatGPT. `triaging` 💬1
- [#62680](https://github.com/anomalyco/opencode/issues/62680) [FEATURE]: release MiMo V2.6 Flash Free already 💬1
- [#62678](https://github.com/anomalyco/opencode/issues/62678) shell: Windows Search content-indexes per-call spool files in ~/.local/share/opencode/shell 💬1
- [#62663](https://github.com/anomalyco/opencode/issues/62663) [FEATURE]: agent-initiated top-level session in current TUI 💬1
- [#62659](https://github.com/anomalyco/opencode/issues/62659) data: all sessions lost — data dir recreated from scratch at service bootstrap (2.2.5→2.2.6) `2.0` `triaging` 💬1
- [#62658](https://github.com/anomalyco/opencode/issues/62658) Вечно исчерпанный лимит `pending close` `triaging` 💬1
- [#62651](https://github.com/anomalyco/opencode/issues/62651) core: reconcile re-admits an already-persisted user message on repeated POST with same messageID -> repeated steering delivery 💬1
- [#62650](https://github.com/anomalyco/opencode/issues/62650) tui: which-key panel is documented but does nothing (ctrl+alt+k) `pending close` `triaging` 💬1
- [#62648](https://github.com/anomalyco/opencode/issues/62648) claude-agent: claude process keeps running after session is deleted `reproduced` 💬1
- [#62644](https://github.com/anomalyco/opencode/issues/62644) Edit tool consistently failing with unexpected reason `triaging` 💬1
- [#62646](https://github.com/anomalyco/opencode/issues/62646) tui: allow reordering session tabs `pending close` `triaging` 💬1
- [#62645](https://github.com/anomalyco/opencode/issues/62645) [FEATURE]: TUI: open background task output from completion notifications 💬1
- [#62641](https://github.com/anomalyco/opencode/issues/62641) Step limit ends a run with an assistant-role prompt, which models without prefill reject `reproduced` 💬1
- [#62640](https://github.com/anomalyco/opencode/issues/62640) Provide model discovery without authentication refresh or credential resolution 💬1
- [#62636](https://github.com/anomalyco/opencode/issues/62636) cli: opencode run hangs if a child session is busy when the root finishes `reproduced` 💬1
- [#62635](https://github.com/anomalyco/opencode/issues/62635) Fails to open project folder `triaging` 💬1
- [#62653](https://github.com/anomalyco/opencode/issues/62653) [FEATURE]:

#### 🔒 Closed Issues
- [#62666](https://github.com/anomalyco/opencode/issues/62666) TUI plugin from an npm package: solid-js signal updates do not re-render slots
- [#62668](https://github.com/anomalyco/opencode/issues/62668) tui: tab loading indicator disappears while background tasks are still running
- [#62452](https://github.com/anomalyco/opencode/issues/62452) limit message
- [#62456](https://github.com/anomalyco/opencode/issues/62456) why my usage never reset???
- [#62454](https://github.com/anomalyco/opencode/issues/62454) [FEATURE]: Tell ACP clients when a session's MCP tools are ready (first prompt misses them)
- [#62436](https://github.com/anomalyco/opencode/issues/62436) [desktop] Group the Home session list by project instead of by date
- [#62435](https://github.com/anomalyco/opencode/issues/62435) CLI: opencode doctor faalt met ENOENT en opencode auth status is geen geldige subcommand
- [#61791](https://github.com/anomalyco/opencode/issues/61791) TUI crash: ot_text_buffer_set_text failed: OutOfMemory
- [#62417](https://github.com/anomalyco/opencode/issues/62417) Model prefix prevents session export through integration launchers
- [#62621](https://github.com/anomalyco/opencode/issues/62621) connecting your GitHub account timingdirector to ChatGPT.
- [#62653](https://github.com/anomalyco/opencode/issues/62653) [FEATURE]:

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 29,078 · **Open issues:** 2,106 · **Last push:** <1h ago

On November 8, 2026, Qwen Code released several notable updates, including v0.27.0, which introduced managed-agent sessions capable of handling multiple child questions simultaneously and a new task Q&A heatmap feature in the Web Shell. Additionally, the SDK TypeScript saw an update with version 0.1.30, accompanied by CLI version 0.27.0. Among the key merged PRs was a fix to ensure that live calls do not stop after failure and an improvement to the web terminal's handling of backpressure based on user input. A significant new issue raised today focused on a bug related to quantized AWQ, GPTQ, and FP8 builds receiving a larger context window than their base model.

#### 🚀 New Releases
- [v0.26.9-nightly.20261107.65e1f1aeaa](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.9-nightly.20261107.65e1f1aeaa) Release v0.26.9-nightly.20261107.65e1f1aeaa
- [sdk-typescript-v0.1.30](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.30) SDK TypeScript Release v0.1.30
- [v0.27.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.0) Release v0.27.0
- [desktop-v0.27.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.27.0) Qwen Code Desktop v0.27.0

#### ✅ Merged PRs
- [#16462](https://github.com/QwenLM/qwen-code/pull/16462) fix(ci): run the failure patrol on ECS and time its sandbox image pull separately
- [#12613](https://github.com/QwenLM/qwen-code/pull/12613) fix(cli): remove dead REPLACE mergeStrategy declarations for modelProviders and providerProtocol
- [#13835](https://github.com/QwenLM/qwen-code/pull/13835) fix(cli): settle Live call stops after failure
- [#16575](https://github.com/QwenLM/qwen-code/pull/16575) chore(release): sdk-typescript v0.1.30
- [#14117](https://github.com/QwenLM/qwen-code/pull/14117) fix(lsp): Attribute diagnostics to explicit extension owners
- [#13885](https://github.com/QwenLM/qwen-code/pull/13885) fix(cli): emit headless results before draining memory
- [#14313](https://github.com/QwenLM/qwen-code/pull/14313) fix(core): base web terminal backpressure on pending input

#### 🐛 New Issues
- [#16514](https://github.com/QwenLM/qwen-code/issues/16514) Isolate external PR CI with disposable runners `status/in-progress` `priority/P1` `type/feature-request` `category/security` 💬11
- [#16569](https://github.com/QwenLM/qwen-code/issues/16569) feat(web-shell): add scroll-to-bottom button to Split View panes `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬3
- [#16562](https://github.com/QwenLM/qwen-code/issues/16562) feat(web-shell): render model provider prefixes as badges in model dropdown `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬3
- [#16563](https://github.com/QwenLM/qwen-code/issues/16563) feat(web-shell): render model provider prefixes as badges in model dropdown `priority/P3` `type/feature-request` `category/ui` `scope/components` 💬2
- [#16557](https://github.com/QwenLM/qwen-code/issues/16557) bug(core): quantized AWQ, GPTQ and FP8 builds get a larger context window than their base model `priority/P2` `type/bug` `category/core` `scope/token-management` 💬2
- [#16558](https://github.com/QwenLM/qwen-code/issues/16558) bug(core): DeepSeek-VL2, Kimi-VL and MiniMax-VL-01 are treated as text-only `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#16549](https://github.com/QwenLM/qwen-code/issues/16549) fix(cli): OpenTUI one-line fields paint blank for a pasted value ending in a newline (Auth API-key, extension Sources) `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬2
- [#16546](https://github.com/QwenLM/qwen-code/issues/16546) feat(managed-agent): expose sidebar panel capabilities in WebShell for managed sessions `priority/P2` `type/feature-request` `category/integration` `need-discussion` 💬2
- [#16526](https://github.com/QwenLM/qwen-code/issues/16526) Parallel sub-agents can oversubscribe a local model: the global limit misses foreground launches `priority/P3` `type/feature-request` `category/core` `scope/settings` 💬2
- [#16552](https://github.com/QwenLM/qwen-code/issues/16552) Main CI failed: Qwen Code CI — src/serve/hosted-user-question.test.ts > handles the original question ('yolo', 'hosted-workspace-shell/1', r… `status/needs-triage` `type/bug`
- [#16531](https://github.com/QwenLM/qwen-code/issues/16531) Main CI failed: tui-parity — installed/npm-distribution.test.ts > npx-ignore-scripts no-relaunch-fallback uses actual installed entry and … `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#16353](https://github.com/QwenLM/qwen-code/issues/16353) Review request: PR #15904 (qqbot forwardBotMessages) is mergeable and needs two approvals
- [#13820](https://github.com/QwenLM/qwen-code/issues/13820) Live Voice stranded in "stopping" forever after hang-up with a pending transcript — daemon restart is the only recovery
- [#12040](https://github.com/QwenLM/qwen-code/issues/12040) web-shell: a rejected `?daemon=` override files the URL fragment credential under the page origin's key
- [#14548](https://github.com/QwenLM/qwen-code/issues/14548) managed-agent: an automation on a Session that never ran a Turn is refused managed_session_not_found (found by the FG11a fixture)
- [#14312](https://github.com/QwenLM/qwen-code/issues/14312) Web terminal can remain input-blocked after a large paste is silently consumed
- [#13465](https://github.com/QwenLM/qwen-code/issues/13465) Background memory agents surface the raw terminate-mode token as the error message ("Failed to process /dream: MAX_TURNS")
- [#14594](https://github.com/QwenLM/qwen-code/issues/14594) Desktop: Web Preview "Saved version" renders blank — on_navigation allowlist blocks about:srcdoc iframes
- [#15197](https://github.com/QwenLM/qwen-code/issues/15197) bug(core): qualified same-route compaction selectors skip cache sharing
- [#16562](https://github.com/QwenLM/qwen-code/issues/16562) feat(web-shell): render model provider prefixes as badges in model dropdown
- [#15414](https://github.com/QwenLM/qwen-code/issues/15414) OpenAI usage drops cache-write token counts from GenAI telemetry
- [#15280](https://github.com/QwenLM/qwen-code/issues/15280) feat(web-shell): show full tool arguments and result when an MCP tool card is expanded
- [#10984](https://github.com/QwenLM/qwen-code/issues/10984) feat(cli): support per-process user configuration directories
- [#15445](https://github.com/QwenLM/qwen-code/issues/15445) Web Shell fails to load in non-English browsers: desktopRelay i18n lookup has no fallback (TypeError reading 'desktopRelay.trigger')
- [#15973](https://github.com/QwenLM/qwen-code/issues/15973) test(ci): harden the TUI parity workspace reconciliation (deferred from #15937)
- [#15304](https://github.com/QwenLM/qwen-code/issues/15304) bug(web-shell): new standalone session appears in sidebar only after its first turn completes
- [#16272](https://github.com/QwenLM/qwen-code/issues/16272) ci: main-ci-failure-issue.yml ignores cancelled runs — timed-out main CI never alerts (how #16214 hid)
- [#15903](https://github.com/QwenLM/qwen-code/issues/15903) [Channels] QQ Bot silently drops bot-authored messages, so bot-to-bot group conversation cannot be enabled
- [#15840](https://github.com/QwenLM/qwen-code/issues/15840) release: VSCode/Chrome release notifiers file issues on cancellation and never close them after a passing re-run
- [#16466](https://github.com/QwenLM/qwen-code/issues/16466) Release Failed for N/A on 2026-11-06

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

**Stars:** 394,148 · **Open issues:** 7,756 · **Last push:** <1h ago

On November 8, 2026, there were no new releases for OpenClaw, but several important pull requests were merged, including a fix for plugin state migrations (#194897) and enhancements to maintain active tool sessions during various operations (#194885). Additionally, significant improvements were made to the user interface, such as addressing issues with session management and updating (#194856, #194839). There was also a notable new issue reported regarding a gateway restart loop caused by agent DB schema mismatches (#194580). Overall, it was a day focused on refining the platform's stability and usability.

#### ✅ Merged PRs
- [#194897](https://github.com/openclaw/openclaw/pull/194897) fix(doctor): settle state migrations for plugins with disabled channels
- [#194885](https://github.com/openclaw/openclaw/pull/194885) fix: keep sandboxes running during file and media reads
- [#194925](https://github.com/openclaw/openclaw/pull/194925) fix(ci): include auto-reply in release live test coverage
- [#194882](https://github.com/openclaw/openclaw/pull/194882) fix(hooks): reuse live gateway plugins for queued turns
- [#194908](https://github.com/openclaw/openclaw/pull/194908) refactor(oc-path): remove redundant JSONL assertions
- [#194898](https://github.com/openclaw/openclaw/pull/194898) fix(tokenjuice): preserve Code Mode tool results
- [#194910](https://github.com/openclaw/openclaw/pull/194910) fix(ci): keep command help tests independent of copy
- [#194856](https://github.com/openclaw/openclaw/pull/194856) fix(ui): renaming, pinning or changing settings moves sessions to the top of Last updated
- [#194907](https://github.com/openclaw/openclaw/pull/194907) fix: active tool sessions report idle after steering
- [#194899](https://github.com/openclaw/openclaw/pull/194899) fix(release): validate credits in selected publication notes
- [#194880](https://github.com/openclaw/openclaw/pull/194880) perf(gateway): preserve nested row identities across publications
- [#194605](https://github.com/openclaw/openclaw/pull/194605) fix: unblock retained repair after a reviewed config change
- [#194839](https://github.com/openclaw/openclaw/pull/194839) fix(gateway): keep Last updated position when marking a session unread
- [#194830](https://github.com/openclaw/openclaw/pull/194830) fix(gateway): limit restricted roles to public repositories
- [#194900](https://github.com/openclaw/openclaw/pull/194900) test(ui): select the Profile attribution refresh request
- [#194212](https://github.com/openclaw/openclaw/pull/194212) test(ui): observe actual session-read requests
- [#194871](https://github.com/openclaw/openclaw/pull/194871) fix(logbook): show historical timelines before capture status
- [#194546](https://github.com/openclaw/openclaw/pull/194546) feat(pr): release dependency cache holds left behind by dead wrappers
- [#194889](https://github.com/openclaw/openclaw/pull/194889) fix(ci): share private QA setup within existing test limits
- [#194879](https://github.com/openclaw/openclaw/pull/194879) fix(android): prevent premature expiry in Wear cancellation test
- [#194716](https://github.com/openclaw/openclaw/pull/194716) fix(ui): drop generic "Loading…" label above the chat composer
- [#194869](https://github.com/openclaw/openclaw/pull/194869) fix(skills): show discovery before installed status
- [#194866](https://github.com/openclaw/openclaw/pull/194866) fix(ui): provider setup fails when advancing to endpoint compatibility
- [#194834](https://github.com/openclaw/openclaw/pull/194834) test(perf): separate warm reload timing from visual proofs
- [#194722](https://github.com/openclaw/openclaw/pull/194722) fix(agents): prevent false stall aborts after history compaction
- [#194707](https://github.com/openclaw/openclaw/pull/194707) fix: interrupted tasks stop at an incomplete recovery summary
- [#194724](https://github.com/openclaw/openclaw/pull/194724) fix(goals): continue local Codex goals without operator roles
- [#194681](https://github.com/openclaw/openclaw/pull/194681) fix(crabbox): require the published 0.82.0 distribution
- [#194796](https://github.com/openclaw/openclaw/pull/194796) improve(knowledge): reduce redundant work during cold loading
- [#194883](https://github.com/openclaw/openclaw/pull/194883) chore(ui): refresh control ui locales
- [#194780](https://github.com/openclaw/openclaw/pull/194780) fix(research): keep deep research in the side panel and return findings
- [#194699](https://github.com/openclaw/openclaw/pull/194699) fix(ui): show free-form slash command argument hints
- [#194721](https://github.com/openclaw/openclaw/pull/194721) feat(ui): ask about a selection in a new session
- [#194849](https://github.com/openclaw/openclaw/pull/194849) improve: measure interrupted Control UI navigation
- [#194855](https://github.com/openclaw/openclaw/pull/194855) fix(build): validate Control UI import-map targets
- [#194872](https://github.com/openclaw/openclaw/pull/194872) fix(knowledge): avoid gateway stalls when opening large vaults
- [#194698](https://github.com/openclaw/openclaw/pull/194698) fix(control-ui): clarify slash-command descriptions
- [#194870](https://github.com/openclaw/openclaw/pull/194870) perf(gateway): reduce broadcast compression allocations
- [#194833](https://github.com/openclaw/openclaw/pull/194833) perf(ui): restore profile display independently of config
- [#194696](https://github.com/openclaw/openclaw/pull/194696) fix(ui): follow visual order in the composer slash menu
- [#194852](https://github.com/openclaw/openclaw/pull/194852) perf(ui): show model providers before catalog discovery settles
- [#194815](https://github.com/openclaw/openclaw/pull/194815) perf(ui): split cold Chat construction across paint frames
- [#194772](https://github.com/openclaw/openclaw/pull/194772) fix: keep ignored build outputs out of worker results
- [#194739](https://github.com/openclaw/openclaw/pull/194739) fix: keep repository mentions out of file links
- [#194858](https://github.com/openclaw/openclaw/pull/194858) chore(ui): refresh control ui locales
- [#194851](https://github.com/openclaw/openclaw/pull/194851) test(perf): cover mobile viewports in rich boot comparisons
- [#194817](https://github.com/openclaw/openclaw/pull/194817) improve(gateway): avoid archived scans in active session lists
- [#194321](https://github.com/openclaw/openclaw/pull/194321) fix: Android chat inputs do not capitalize sentence starts
- [#194812](https://github.com/openclaw/openclaw/pull/194812) fix(plugins): follow the stable channel for official plugin selectors
- [#194828](https://github.com/openclaw/openclaw/pull/194828) fix(test): remove pipe-order race from exec output quota check
- [#194789](https://github.com/openclaw/openclaw/pull/194789) fix(ui): show PR opened/merged time in link hovercards
- [#190646](https://github.com/openclaw/openclaw/pull/190646) fix(macos): keep process-stop confirmation visible after refresh
- [#194741](https://github.com/openclaw/openclaw/pull/194741) fix: show concise startup errors in desktop chat
- [#194838](https://github.com/openclaw/openclaw/pull/194838) fix: include session Details in window-resize benchmarks
- [#193860](https://github.com/openclaw/openclaw/pull/193860) fix(ios): preserve indentation and blank lines in shared text drafts
- [#185978](https://github.com/openclaw/openclaw/pull/185978) fix(android): hide misleading empty message below sidebar sessions
- [#194835](https://github.com/openclaw/openclaw/pull/194835) test(ui): preload lazy session background before fade timing assertion
- [#194740](https://github.com/openclaw/openclaw/pull/194740) perf(ui): bound chunk hash cascades after updates
- [#194807](https://github.com/openclaw/openclaw/pull/194807) perf(ui): show Systems inventory before telemetry settles
- [#194799](https://github.com/openclaw/openclaw/pull/194799) test(perf): measure warm reload from the real old page
- [#194694](https://github.com/openclaw/openclaw/pull/194694) fix(ui): Undo after archiving a session restores it instantly
- [#194754](https://github.com/openclaw/openclaw/pull/194754) fix(ci): stabilize tooling duration regression across inventory changes
- [#194816](https://github.com/openclaw/openclaw/pull/194816) fix: reduce plugin preparation overhead in agent runs with fallbacks
- [#194792](https://github.com/openclaw/openclaw/pull/194792) improve(knowledge): open Browse without scanning unrelated stores
- [#194745](https://github.com/openclaw/openclaw/pull/194745) fix(ui): reduce shared control requests on first page visits
- [#194795](https://github.com/openclaw/openclaw/pull/194795) perf(ui): show Devices before configuration refresh settles
- [#192212](https://github.com/openclaw/openclaw/pull/192212) fix(ui): People and session hovercards switch to other rows while moving to them
- [#194786](https://github.com/openclaw/openclaw/pull/194786) fix(ui): confirm restored sessions before changing chat URLs
- [#194806](https://github.com/openclaw/openclaw/pull/194806) fix: reuse restored Anthropic history across tool turns
- [#194674](https://github.com/openclaw/openclaw/pull/194674) fix: Doctor and plugin discovery fail with cold setup modules
- [#194800](https://github.com/openclaw/openclaw/pull/194800) fix: restore main dead-export checks
- [#194788](https://github.com/openclaw/openclaw/pull/194788) fix(ui): hide speed controls for standard-only models
- [#194787](https://github.com/openclaw/openclaw/pull/194787) fix(tooling): attribute Control UI coverage at its capture cutoff
- [#194791](https://github.com/openclaw/openclaw/pull/194791) improve(gateway): reduce unnecessary session visibility work
- [#194793](https://github.com/openclaw/openclaw/pull/194793) fix(ui): keep Worked timing on earlier completed turns
- [#194790](https://github.com/openclaw/openclaw/pull/194790) fix(agents): reduce stalls from failed file tool calls
- [#194736](https://github.com/openclaw/openclaw/pull/194736) test(ui): add per-method RPC hostage census
- [#194563](https://github.com/openclaw/openclaw/pull/194563) fix(perf): retry stress setup while Gateway sidecars start
- [#194743](https://github.com/openclaw/openclaw/pull/194743) fix(test): expect interrupted update canary progress
- [#194774](https://github.com/openclaw/openclaw/pull/194774) fix(ui): use the existing spinner for running CI checks
- [#194769](https://github.com/openclaw/openclaw/pull/194769) fix(agents): avoid repeated Code Mode serialization in long sessions
- [#193783](https://github.com/openclaw/openclaw/pull/193783) fix(android): clear folder errors after pagination recovers
- [#194691](https://github.com/openclaw/openclaw/pull/194691) test(ui): measure active accessibility in the engine harness
- [#194756](https://github.com/openclaw/openclaw/pull/194756) fix(test): ClawRouter decision fixture exhausts its deadline on cold imports
- [#194744](https://github.com/openclaw/openclaw/pull/194744) fix(cli): distinguish recovered Doctor reservations from unsettled custody
- [#194752](https://github.com/openclaw/openclaw/pull/194752) improve: reduce hidden chat rendering during streamed replies
- [#194765](https://github.com/openclaw/openclaw/pull/194765) fix(release): backport historical inventory evidence capture
- [#188522](https://github.com/openclaw/openclaw/pull/188522) fix: restore Git backups containing Unicode line separators
- [#194758](https://github.com/openclaw/openclaw/pull/194758) fix(release): qualify inventories with retained waiver evidence
- [#194685](https://github.com/openclaw/openclaw/pull/194685) fix(doctor): repair retained ISO session end timestamps
- [#194735](https://github.com/openclaw/openclaw/pull/194735) fix: honor the approved 2026.9.37 performance exemption
- [#194733](https://github.com/openclaw/openclaw/pull/194733) fix(test): unblock Outputs loading after cached Details prewarm
- [#194581](https://github.com/openclaw/openclaw/pull/194581) fix(test): measure running-session idle in mobile drawers
- [#194718](https://github.com/openclaw/openclaw/pull/194718) fix(ui): reuse unchanged public assets after updates
- [#194704](https://github.com/openclaw/openclaw/pull/194704) fix(cron): retain rearmed exits until prior receipts settle
- [#194675](https://github.com/openclaw/openclaw/pull/194675) perf(chat): reduce retained heap after long session switching
- [#194727](https://github.com/openclaw/openclaw/pull/194727) fix: honor approved no-rerun performance qualification
- [#191135](https://github.com/openclaw/openclaw/pull/191135) improve(worktrees): skip the default-branch fetch when origin has not moved
- [#194708](https://github.com/openclaw/openclaw/pull/194708) fix(worktrees): stop waiting for stale template deletion
- [#194676](https://github.com/openclaw/openclaw/pull/194676) test(ui): measure continuous gesture frame costs
- [#194245](https://github.com/openclaw/openclaw/pull/194245) fix(update): a killed Doctor's command reservation fences update repair forever
- [#194684](https://github.com/openclaw/openclaw/pull/194684) fix: avoid rebuilding pages when opening retired Settings links
- [#194712](https://github.com/openclaw/openclaw/pull/194712) improve(worktrees): reduce hydration overhead in large partial clones
- [#194648](https://github.com/openclaw/openclaw/pull/194648) fix(config): keep Workboard PostgreSQL upgrades readable
- [#194683](https://github.com/openclaw/openclaw/pull/194683) fix(agents): avoid catalog rebuilds for unknown credential providers
- [#194659](https://github.com/openclaw/openclaw/pull/194659) fix(update): interrupted updates report requester-revoked or unexpected-error
- [#194644](https://github.com/openclaw/openclaw/pull/194644) perf(ui): speed up large Skill Settings inventories
- [#194631](https://github.com/openclaw/openclaw/pull/194631) chore: reduce repeated UI CI lifecycle work
- [#194692](https://github.com/openclaw/openclaw/pull/194692) fix(ui): discard composer draft when a session is archived
- [#194693](https://github.com/openclaw/openclaw/pull/194693) fix(gateway): avoid unused workspace fingerprint reads
- [#194242](https://github.com/openclaw/openclaw/pull/194242) fix(update): update summary drops warnings and understates total time on long runs
- [#194639](https://github.com/openclaw/openclaw/pull/194639) fix(control-ui): reveal cached Details with the first chat frame
- [#194686](https://github.com/openclaw/openclaw/pull/194686) improve(ci): cut Node overhead in wrapper fault tests
- [#194687](https://github.com/openclaw/openclaw/pull/194687) fix(llama-cpp): keep concurrent chats alive when recovery is canceled
- [#194677](https://github.com/openclaw/openclaw/pull/194677) test(update): accept ClawHub install records in the legacy operator verifier
- [#194679](https://github.com/openclaw/openclaw/pull/194679) test(ui): sample shared mobile settings insets
- [#194680](https://github.com/openclaw/openclaw/pull/194680) fix(build): avoid compiler setup when copying plugin assets
- [#194653](https://github.com/openclaw/openclaw/pull/194653) fix(skills): accept inline frontmatter comments without PyYAML
- [#194660](https://github.com/openclaw/openclaw/pull/194660) fix(doctor): retained updater runtimes are never reclaimed
- [#194482](https://github.com/openclaw/openclaw/pull/194482) improve(ci): cover Gateway cron completion on PostgreSQL 16
- [#194388](https://github.com/openclaw/openclaw/pull/194388) fix(ci): recognize the Mantis subprocess test fixture
- [#194668](https://github.com/openclaw/openclaw/pull/194668) perf(ui): retain device warnings across inventory refreshes
- [#194646](https://github.com/openclaw/openclaw/pull/194646) fix(knowledge): make manifest hashes independent of locale
- [#194640](https://github.com/openclaw/openclaw/pull/194640) fix(knowledge): include headers in transcript byte limits
- [#194658](https://github.com/openclaw/openclaw/pull/194658) perf(ui): reuse syntax highlighting when heavy transcript rows return
- [#194652](https://github.com/openclaw/openclaw/pull/194652) fix(ui): preserve New Session during model setup redirects
- [#194623](https://github.com/openclaw/openclaw/pull/194623) perf(ui): separate picker and sidebar benchmark phases
- [#194371](https://github.com/openclaw/openclaw/pull/194371) fix(control-ui): prevent Subagents collapse during chat reload
- [#194661](https://github.com/openclaw/openclaw/pull/194661) fix: prevent Usage detail benchmark timeouts
- [#194656](https://github.com/openclaw/openclaw/pull/194656) perf(ui): finish Advanced settings sooner
- [#194317](https://github.com/openclaw/openclaw/pull/194317) fix(test): stabilize context prewarm responsiveness checks
- [#194636](https://github.com/openclaw/openclaw/pull/194636) fix(doctor): rewrite failure-report paths once per target
- [#194624](https://github.com/openclaw/openclaw/pull/194624) fix(ui): avoid the extra remount when opening General settings
- [#194643](https://github.com/openclaw/openclaw/pull/194643) perf(ui): reuse prepared Search field hints
- [#194642](https://github.com/openclaw/openclaw/pull/194642) fix(worktrees): stop repeated cleanup of oversized results
- [#194633](https://github.com/openclaw/openclaw/pull/194633) fix(ui): measure complete Search advanced settings
- [#194615](https://github.com/openclaw/openclaw/pull/194615) fix(knowledge): clean scratch databases after gzip input errors
- [#193151](https://github.com/openclaw/openclaw/pull/193151) fix(codex): count Codex base instructions and confirm native AGENTS.md in the context report
- [#194616](https://github.com/openclaw/openclaw/pull/194616) improve: trim duplicated UI CI checks
- [#193621](https://github.com/openclaw/openclaw/pull/193621) fix(ui): keep composer visible with round corners
- [#194619](https://github.com/openclaw/openclaw/pull/194619) fix(macos): await readiness in gateway command routing test
- [#194618](https://github.com/openclaw/openclaw/pull/194618) test(ui): add retained heap ownership census
- [#194514](https://github.com/openclaw/openclaw/pull/194514) fix(agents): gate cron panel empty state on a settled jobs read
- [#194599](https://github.com/openclaw/openclaw/pull/194599) fix(gateway): park the service on older agent database schemas
- [#194609](https://github.com/openclaw/openclaw/pull/194609) fix(skills): avoid packaging a skill without its linked entry
- [#194611](https://github.com/openclaw/openclaw/pull/194611) fix(skills): validate folded descriptions without PyYAML
- [#194598](https://github.com/openclaw/openclaw/pull/194598) fix(ui): keep Settings navigation responsive and stable

#### 🐛 New Issues
- [#194662](https://github.com/openclaw/openclaw/issues/194662) [Bug]: Notification-driven wake invents a sender, and the main session keeps the invented thread alive `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬9
- [#194580](https://github.com/openclaw/openclaw/issues/194580) [Bug]: 2026.11.1 gateway restart loop with agent DB schema 25; offline repair required (macOS) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬6
- [#194803](https://github.com/openclaw/openclaw/issues/194803) [Bug]: Compaction summary-error wrapping loses HTTP 429 classification and skips configured fallback `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#194451](https://github.com/openclaw/openclaw/issues/194451) [Bug]: /think (and other directives) sent during an agent turn still kill the turn with SqliteTranscriptMutationConflictError — #192585 only covered /status `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#194590](https://github.com/openclaw/openclaw/issues/194590) Update failure: gateway-recovery-verification (2026.9.7) `P1` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#194875](https://github.com/openclaw/openclaw/issues/194875) [Bug]: Doctor cannot settle disabled iMessage state migration after successful repair `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194886](https://github.com/openclaw/openclaw/issues/194886) [Docs Bug]: Muse README incorrectly says automatic selection never chooses Muse `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194818](https://github.com/openclaw/openclaw/issues/194818) Update failure: gateway-recovery-verification (2026.11.1) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#194804](https://github.com/openclaw/openclaw/issues/194804) [Bug]: Switching update.channel to stable leaves official plugins pinned to @beta installSpecs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#194768](https://github.com/openclaw/openclaw/issues/194768) [Bug] Control UI: selecting a session from another agent silently reverts to the previously active session; chats don't load (2026.11.1) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#194809](https://github.com/openclaw/openclaw/issues/194809) [Bug]: OpenCode api_key_expired recovery says sign in again despite explicit key-replacement instruction `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194738](https://github.com/openclaw/openclaw/issues/194738) [Bug]: CLI full model inventory omits manual-selection permission for available but policy-blocked models `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194689](https://github.com/openclaw/openclaw/issues/194689) [Bug] Compaction never falls back when the compaction model's auth is unavailable (turns do) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194737](https://github.com/openclaw/openclaw/issues/194737) [Bug]: main-chat task progress card drops elapsed times for running subagents `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#194626](https://github.com/openclaw/openclaw/issues/194626) [Bug]: Workboard ported to PostgreSQL on 2026.11.1 makes the config unreadable after upgrading to 2026.11.5-beta.1 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194654](https://github.com/openclaw/openclaw/issues/194654) Candidate Doctor refuses ISO-8601 string `endedAt` in session entries with no automatic repair (`SessionStoreMigrationRequiredError`) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#194655](https://github.com/openclaw/openclaw/issues/194655) Update ends in `state-migrated-no-rollback` with Gateway stopped when a bundled plugin's DB migration is deferred past the activation Doctor (workboard: expected schema 38, found 0) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#194667](https://github.com/openclaw/openclaw/issues/194667) [Bug]: Browser tool reports a crashed tab as a generic 20 s timeout and tells the agent the browser is unavailable `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194664](https://github.com/openclaw/openclaw/issues/194664) [Bug]: Codex protected continuation blocks all follow-ups while session Stop reports no active run (2026.11.1) `impact:session-state` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#194621](https://github.com/openclaw/openclaw/issues/194621) `openclaw doctor --session-sqlite recover` hangs for 2.5h+ in failure-report sanitization (u1: 103,317 `historical_transcript_deferred` issues) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194641](https://github.com/openclaw/openclaw/issues/194641) [Bug]: Codex macOS signing fix absent from inspected stable candidate; track release inclusion/backport `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#194627](https://github.com/openclaw/openclaw/issues/194627) [Bug]: 2026.11.1 macOS app: minimal functions.exec fails; Codex host has hardened runtime but no entitlements `P1` `impact:crash-loop` 💬2
- [#194493](https://github.com/openclaw/openclaw/issues/194493) update repair reports success but never releases a dead triage/repair lease (Linux/npm/systemd-user, 2026.11.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#194569](https://github.com/openclaw/openclaw/issues/194569) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#194528](https://github.com/openclaw/openclaw/issues/194528) Update failure: update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#194731](https://github.com/openclaw/openclaw/issues/194731) Does the small-model web tool fix (PR #169556) cover omlx/MLX providers? `P3` 💬1
- [#194941](https://github.com/openclaw/openclaw/issues/194941) [Bug]: 2026.11.1 stable still returns outputSchema mismatch ("must not have additional properties: gated") instead of the owner-gated refusal — follow-up to #189488 `clawsweeper:intake:bug` 💬1
- [#194929](https://github.com/openclaw/openclaw/issues/194929) test: retain actionable boundary diagnostics for intermittent node-exec live non-start `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#194705](https://github.com/openclaw/openclaw/issues/194705) [Feature]: List NagaAI in the provider catalog `enhancement` `P3` `impact:ux-friction` 💬1
- [#194928](https://github.com/openclaw/openclaw/issues/194928) test(ios): make managed-document session setup deterministic across relaunch `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#194922](https://github.com/openclaw/openclaw/issues/194922) [Bug]: Canceling a shared Muse catalog read returns EOF instead of its cancellation reason `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194926](https://github.com/openclaw/openclaw/issues/194926) test: avoid rebinding a released ephemeral port in Gateway startup recovery proof `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194918](https://github.com/openclaw/openclaw/issues/194918) [Feature]: WhatsApp outbound messages should follow the chat's disappearing-messages timer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#194915](https://github.com/openclaw/openclaw/issues/194915) [Bug]: Compaction summarizes a complete turn as a split-turn prefix when a bootstrap marker precedes the kept user message `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194911](https://github.com/openclaw/openclaw/issues/194911) [Bug]: One agent's config change refreshes every agent's provider catalog (refreshCommittedProviderCatalogs walks all owners) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194893](https://github.com/openclaw/openclaw/issues/194893) plugin approvals: let a plugin redact or withhold its approval payload from MCP-server clients, and opt out of MCP-initiated approval `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#194891](https://github.com/openclaw/openclaw/issues/194891) Displayed reasoning prevents a final answer after tool calls finish `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194715](https://github.com/openclaw/openclaw/issues/194715) [Bug]: History-seed compaction retires the foreground watchdog, causing false stalls during active native work `bug` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#194878](https://github.com/openclaw/openclaw/issues/194878) before_prompt_build cannot observe a claude-cli session reset in the same turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194873](https://github.com/openclaw/openclaw/issues/194873) [Bug]: Startup recovery inventory hits worker capacity; overload warning omits exhausted limit `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194854](https://github.com/openclaw/openclaw/issues/194854) [Feature]: Opt-in gzip request-body compression for OpenAI-compatible providers (413 on large requests) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194865](https://github.com/openclaw/openclaw/issues/194865) [Bug]: Code Mode suggests string booleans `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194862](https://github.com/openclaw/openclaw/issues/194862) doctor --fix deadlocks after removing one invalid Memory Core host event (legacy source already renamed .migrated, receipt never written) `P2` `impact:session-state` 💬1
- [#194861](https://github.com/openclaw/openclaw/issues/194861) Device-folder sessions: every turn fails with "Session capability metadata requires worker preparation" (2026.11.5-beta.1) `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#194859](https://github.com/openclaw/openclaw/issues/194859) [Bug]: Control UI chat returns 404 for unknown query parameters, breaking an iPhone Home Screen shortcut `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#194857](https://github.com/openclaw/openclaw/issues/194857) [Feature]: Tool Search: make the 20,000-character limit on dispatch_action results configurable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194850](https://github.com/openclaw/openclaw/issues/194850) backup create fails on large state trees: SQLite header probe hard 10s timeout cannot handle ~250k paths `P2` `impact:other` 💬1
- [#194848](https://github.com/openclaw/openclaw/issues/194848) [Bug]: Deep Research adds duplicate idle conversation header controls `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#194842](https://github.com/openclaw/openclaw/issues/194842) [Bug]: swabble serve overwrites an unreadable config with defaults `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:data-loss` 💬1
- [#194844](https://github.com/openclaw/openclaw/issues/194844) [Bug]: Exa web_search year freshness skips Feb 28 when run on Feb 29 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194843](https://github.com/openclaw/openclaw/issues/194843) [Bug]: swabble ignores transcripts.maxEntries `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194836](https://github.com/openclaw/openclaw/issues/194836) [Feature]: Memory Core scheduled light/REM reflection without durable promotion `P3` `impact:session-state` 💬1
- [#194829](https://github.com/openclaw/openclaw/issues/194829) [Bug]: Telegram transcript echoes are delivered but fail conversation recording on explicit multi-agent gateways `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194826](https://github.com/openclaw/openclaw/issues/194826) [Bug]: Skill Workshop update replaces the whole SKILL.md with a change-note proposal; approval prompt can't show the loss `impact:data-loss` 💬1
- [#194825](https://github.com/openclaw/openclaw/issues/194825) [Bug]: Codex harness merges same-name bundle and configured MCP servers → "url is not supported for stdio" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194819](https://github.com/openclaw/openclaw/issues/194819) [Bug]: DeepSeek recommendedModels still contains a removed id and omits the working default `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#194801](https://github.com/openclaw/openclaw/issues/194801) [Bug]: Gateway leaks one rolling-log file descriptor each time a short-lived SQLite Worker is terminated (~200/day, deleted logs stay open) on 2026.10.4 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#194797](https://github.com/openclaw/openclaw/issues/194797) sessions_spawn child cannot use node-routed browser: missing scope operator.admin (still on 2026.11.1; #158055 closed stale) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#194785](https://github.com/openclaw/openclaw/issues/194785) [Bug]: realtime talk.session.create fails with "PostgreSQL connections must run in a worker" when the agent family is on PostgreSQL `P2` `impact:other` 💬1
- [#194783](https://github.com/openclaw/openclaw/issues/194783) [Bug]: Telegram durable final delivery skips the `channel-final` transcript mirror (preview path writes it) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194784](https://github.com/openclaw/openclaw/issues/194784) [Feature]: Let a `reply_payload_sending` hook keep live preview on channels/cases it does not touch `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#194781](https://github.com/openclaw/openclaw/issues/194781) [Bug]: Android keeps reconnecting to an abandoned Gateway address after a failed first connection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194776](https://github.com/openclaw/openclaw/issues/194776) [Bug]: iOS Talk: system-voice fallback keeps speaking after realtime reconnects (two voices at once) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#194777](https://github.com/openclaw/openclaw/issues/194777) [Feature]: Optional greeting when realtime Talk connects `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194770](https://github.com/openclaw/openclaw/issues/194770) Investigate intermittent qualification failures from 2026.11.5-beta.2 `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#194762](https://github.com/openclaw/openclaw/issues/194762) [Bug]: sidebar child-count badge is anchored to the wrong row and expands to an empty list `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#194759](https://github.com/openclaw/openclaw/issues/194759) [Bug]: classifyCompactionReason labels a provider 429 on the summarizer as guard_blocked (the safeguard prefix contains "guard"), so compaction-diag and lifecycle events blame the quality guard `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194730](https://github.com/openclaw/openclaw/issues/194730) [Bug]: Control UI update hides the unsaved-config reload explanation when the toast chunk is retired `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#194714](https://github.com/openclaw/openclaw/issues/194714) [Bug]: [Bug]: Local agents fail with Auth profile read owner was revoked on macOS 2026.10.9 `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#194711](https://github.com/openclaw/openclaw/issues/194711) Update failure: gateway-stop-unverified (2026.10.7) `P0` `impact:ux-release-blocker` 💬1
- [#194709](https://github.com/openclaw/openclaw/issues/194709) Docs: explain Phone Harness setup and consent boundaries `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#194479](https://github.com/openclaw/openclaw/issues/194479) Cover PostgreSQL 16 retained cron one-shots in PR CI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#194673](https://github.com/openclaw/openclaw/issues/194673) memory-core: pass senderIsOwner to memory tools and memory corpus supplements `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#194666](https://github.com/openclaw/openclaw/issues/194666) [Feature]: Discord autoThread that opens the thread with the first message `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194665](https://github.com/openclaw/openclaw/issues/194665) [Feature]: Plan usage windows in the usage footer template `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194663](https://github.com/openclaw/openclaw/issues/194663) [Bug]: Isolated settled-turn finalization bypasses the context engine and overflows the model window on long sessions (2026.9.33) 💬1
- [#194657](https://github.com/openclaw/openclaw/issues/194657) [Bug] followup queue drain spins at ~2 errors/sec for 3.5 days after Feishu restart-recovery admission mismatch (no backoff, ~294k log lines) `P1` `impact:message-loss` 💬1
- [#194650](https://github.com/openclaw/openclaw/issues/194650) [Feature]: Extend managed llama.cpp local OCR and vision to Apple Silicon Macs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194649](https://github.com/openclaw/openclaw/issues/194649) [Bug] Control UI: session Details rail re-opens on every page load and window refocus (2026.11.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#194634](https://github.com/openclaw/openclaw/issues/194634) Upgrade managed local memory embeddings to EmbeddingGemma 2 `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#194629](https://github.com/openclaw/openclaw/issues/194629) [Bug]: After a failed close (stop_close_failed) on a plain SIGTERM stop, the Gateway disarms its force-exit timer and hard-exit watchdog and stays alive until systemd SIGKILL `P1` `impact:crash-loop` 💬1
- [#194628](https://github.com/openclaw/openclaw/issues/194628) [Feature]: Optional generative UI cards for chat agents `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194625](https://github.com/openclaw/openclaw/issues/194625) [Bug]: github_publish read succeeds in WebChat but rejects the same linked Telegram administrator as missing GitHub identity `P2` `impact:security` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#194608](https://github.com/openclaw/openclaw/issues/194608) [Bug]: Linked Telegram administrator configured as command owner cannot create sessions; owner-equivalent access unclear `P2` `impact:ux-friction` 💬1
- [#194587](https://github.com/openclaw/openclaw/issues/194587) [Bug]: restartRecoveryTerminalRunIds is never pruned and blocks steering on long-lived sessions (unknown-source-with-terminal-history) `P2` `impact:session-state` 💬1
- [#194578](https://github.com/openclaw/openclaw/issues/194578) [Bug]: Read-only CLI gateway calls never clear a stale stored operator device token (device_token_mismatch loop) `P2` `impact:auth-provider` `maturity:stable` `impact:ux-friction` 💬1
- [#194511](https://github.com/openclaw/openclaw/issues/194511) Bug: fallback runtime context loses its carrier on proxy routes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194508](https://github.com/openclaw/openclaw/issues/194508) Model-default updates can be lost after the selecting command finishes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194548](https://github.com/openclaw/openclaw/issues/194548) [Bug]: resetting a session drops its sidebar color while preserving the icon `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194562](https://github.com/openclaw/openclaw/issues/194562) [Feature]: Slack plugin reviewers: let `approvals.plugin.slack` take `agentFilter` / `sessionFilter`, so a reviewer list can cover some sessions and not others `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#194552](https://github.com/openclaw/openclaw/issues/194552) iOS sidebar rebuilds unchanged rows on unrelated session refreshes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#194555](https://github.com/openclaw/openclaw/issues/194555) DeepSeek V4.1 Flash (`deepseek-flash`) missing from reasoning_content replay id list → 400 on tool continuation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#194551](https://github.com/openclaw/openclaw/issues/194551) [Bug]: Replayed thinking is dropped (prefix_binding_mismatch) whenever a run's tool roster or system prompt differs from the session's normal runs (inter-session runs, isolated finalization) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#194547](https://github.com/openclaw/openclaw/issues/194547) [Bug]: Codex 2026.11.1 still rejects current-turn tool output above 64 KiB (fresh #164191 repro) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#194453](https://github.com/openclaw/openclaw/issues/194453) [Bug]: Plugin hooks on CLI-backed turns (claude-cli) get no memory audience `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1

#### 🔒 Closed Issues
- [#143278](https://github.com/openclaw/openclaw/issues/143278) Heartbeat internal output leaks to Telegram user chat (2026.9.3)
- [#143454](https://github.com/openclaw/openclaw/issues/143454) [Bug]: Codex-native subagent completion handoff re-sends an already-delivered result (announce turn cannot be silent; empty-response retry forces a duplicate send)
- [#167791](https://github.com/openclaw/openclaw/issues/167791) [Bug]: Android/Termux: Gateway and Doctor fail with EACCES creating SQLite read-only snapshot (hard links denied)
- [#149672](https://github.com/openclaw/openclaw/issues/149672) [Bug]: Control UI channel setup for SMS keeps asking to install @openclaw/sms (already installed and loaded); each click reinstalls, changes installPath, restarts the gateway under the page
- [#144006](https://github.com/openclaw/openclaw/issues/144006) [Bug]: explicit tts tool causes double delivery on Telegram
- [#143694](https://github.com/openclaw/openclaw/issues/143694) [Bug]: acpx sessions_send rewrites valid ACP session as implicit native and returns ACP_SESSION_INIT_FAILED
- [#142663](https://github.com/openclaw/openclaw/issues/142663) [Bug]: Automations tool advertises `add` but runtime validator rejects action in 2026.9.2
- [#142283](https://github.com/openclaw/openclaw/issues/142283) [Bug]: Discord DM messages arrive with empty content in context, but bot still executes commands
- [#194580](https://github.com/openclaw/openclaw/issues/194580) [Bug]: 2026.11.1 gateway restart loop with agent DB schema 25; offline repair required (macOS)
- [#192981](https://github.com/openclaw/openclaw/issues/192981) Empty (0-byte) lock file is never considered stale: WhatsApp channel stays down with `file_lock_timeout` after a hard reset
- [#141826](https://github.com/openclaw/openclaw/issues/141826) [Bug]: Task briefs lost in agent-to-agent handoff; no verification or notification when a scheduled task never starts
- [#141809](https://github.com/openclaw/openclaw/issues/141809) [Bug]: Control UI OpenAI sign-in auto-enables the Codex plugin without installing its managed runtime; observer logs "Managed Codex app-server binary was not found"
- [#139045](https://github.com/openclaw/openclaw/issues/139045) [Bug]:
- [#138773](https://github.com/openclaw/openclaw/issues/138773) [Bug]: Image attachment could not be analyzed
- [#135308](https://github.com/openclaw/openclaw/issues/135308) [Bug]: [Feishu] callback buttons don't render in card JSON 2.0 — but do in JSON 1.0 (same tenant, same client, same App config)
- [#131842](https://github.com/openclaw/openclaw/issues/131842) [Bug]: Runtime-context carrier delivers fabricated/misattributed content (fake IDs, invented tool output, replayed past turns) into a live turn
- [#130748](https://github.com/openclaw/openclaw/issues/130748) [Bug]: Codex native hook events are absent despite an active per-thread relay binding
- [#129209](https://github.com/openclaw/openclaw/issues/129209) [Bug]: unhandled native stack overflow when parsing deeply-nested JSON
- [#168306](https://github.com/openclaw/openclaw/issues/168306) [Bug]: Group prompt tells the agent to stay silent, but the default silence policy rejects NO_REPLY (claude-cli posts an error in the channel)
- [#167921](https://github.com/openclaw/openclaw/issues/167921) [Docs Bug]: Clarify supported pre-inference verification of the Codex tool surface
- [#153440](https://github.com/openclaw/openclaw/issues/153440) [Bug]: Plugin tool resolves standalone but is unavailable to live agent on 2026.9.5
- [#149305](https://github.com/openclaw/openclaw/issues/149305) [Bug]: Terminal outcome classification depends on observation order between provider failure and queue timeout
- [#149303](https://github.com/openclaw/openclaw/issues/149303) [Bug]: MSTeams inbound debounce merges replies across distinct channel thread roots
- [#149115](https://github.com/openclaw/openclaw/issues/149115) [Bug]:Non-main agents can't handle framework control commands via qqbot channel
- [#144974](https://github.com/openclaw/openclaw/issues/144974) [Bug]: the agent's built-in `openclaw` helper tool reports WhatsApp "not linked" while the gateway reports it linked, running and connected
- [#144917](https://github.com/openclaw/openclaw/issues/144917) [Bug]: Codex-backed dashboard sessions appear to start new threads instead of resuming
- [#144057](https://github.com/openclaw/openclaw/issues/144057) [Bug]: Control UI shows "Control UI did not start" twice on the first open after an image upgrade, on a browser that had the previous build; Try again renders it
- [#168468](https://github.com/openclaw/openclaw/issues/168468) Gateway 2026.9.9 (Windows): startup single-core grind for hours, event loop stalls refuse connections — JS profile attributes ~66% CPU to sync SQLite integrity_check; new 9.9 trigger paths re-fire it after convergence
- [#130038](https://github.com/openclaw/openclaw/issues/130038) [Bug]: MSTeams ingress dedupe aliases route-distinct activities with the same activity id
- [#193850](https://github.com/openclaw/openclaw/issues/193850) [Bug]: Control UI reload applies the same accent palette three times and forces extra style recalculation
- [#158375](https://github.com/openclaw/openclaw/issues/158375) [Bug] followup queue drain loops for 5+ hours on stale plugin instance after Gateway restart (36k errors, ends in self-restart)
- [#191763](https://github.com/openclaw/openclaw/issues/191763) [Bug]: remote iMessage outbound attachments lose non-ASCII filenames — sanitizeTempFileName collapses CJK to stubs (中文.txt arrives as _-.txt)
- [#168945](https://github.com/openclaw/openclaw/issues/168945) [Bug]: Windows changelog checker rejects docs mirrors and skips frozen records
- [#167868](https://github.com/openclaw/openclaw/issues/167868) Session SQLite migration recovery report (session-sqlite-1790840736442-c2a5252c)
- [#167838](https://github.com/openclaw/openclaw/issues/167838) 2026.9.9 release still ships unbounded memory-session queries after #164336
- [#194875](https://github.com/openclaw/openclaw/issues/194875) [Bug]: Doctor cannot settle disabled iMessage state migration after successful repair
- [#194320](https://github.com/openclaw/openclaw/issues/194320) Android app: chat composer ignores Gboard sentence auto-capitalization
- [#194804](https://github.com/openclaw/openclaw/issues/194804) [Bug]: Switching update.channel to stable leaves official plugins pinned to @beta installSpecs
- [#194626](https://github.com/openclaw/openclaw/issues/194626) [Bug]: Workboard ported to PostgreSQL on 2026.11.1 makes the config unreadable after upgrading to 2026.11.5-beta.1
- [#194654](https://github.com/openclaw/openclaw/issues/194654) Candidate Doctor refuses ISO-8601 string `endedAt` in session entries with no automatic repair (`SessionStoreMigrationRequiredError`)
- [#194621](https://github.com/openclaw/openclaw/issues/194621) `openclaw doctor --session-sqlite recover` hangs for 2.5h+ in failure-report sanitization (u1: 103,317 `historical_transcript_deferred` issues)
- [#194627](https://github.com/openclaw/openclaw/issues/194627) [Bug]: 2026.11.1 macOS app: minimal functions.exec fails; Codex host has hardened runtime but no entitlements
- [#194493](https://github.com/openclaw/openclaw/issues/194493) update repair reports success but never releases a dead triage/repair lease (Linux/npm/systemd-user, 2026.11.1)
- [#168936](https://github.com/openclaw/openclaw/issues/168936) [Bug]: Restart recovery fails to mark startup-orphaned subagent sessions on every start (SQLite session entry changed before replacement)
- [#167466](https://github.com/openclaw/openclaw/issues/167466) [Bug]: Gateway startup hangs for 15+ minutes with sustained single-core CPU and filesystem activity
- [#186832](https://github.com/openclaw/openclaw/issues/186832) [Bug]: Health monitor starts Slack accounts before channel startup on slow boots; auth.test then times out in the sidecar stall and is never retried
- [#167981](https://github.com/openclaw/openclaw/issues/167981) [Feature]: Telegram Mini App: build launch URLs from gateway.publicOrigin when Tailscale is not the published ingress
- [#168935](https://github.com/openclaw/openclaw/issues/168935) [Bug]: SQLite worker ratchet reports growth on an unchanged Windows checkout
- [#168665](https://github.com/openclaw/openclaw/issues/168665) OpenAI image provider sends sizes gpt-image-1.5 rejects (e.g. 16:9 → 2048x1152) with a custom baseUrl
- [#167688](https://github.com/openclaw/openclaw/issues/167688) [Bug]: Workboard lifecycle sync fails every minute with UNIQUE constraint on workboard_card_attempts.id when two cards fall back to the same session key
- [#194715](https://github.com/openclaw/openclaw/issues/194715) [Bug]: History-seed compaction retires the foreground watchdog, causing false stalls during active native work
- [#194862](https://github.com/openclaw/openclaw/issues/194862) doctor --fix deadlocks after removing one invalid Memory Core host event (legacy source already renamed .migrated, receipt never written)
- [#194850](https://github.com/openclaw/openclaw/issues/194850) backup create fails on large state trees: SQLite header probe hard 10s timeout cannot handle ~250k paths
- [#190155](https://github.com/openclaw/openclaw/issues/190155) [Bug]: macOS Debug settings: "Sent kill to N." confirmation never displays
- [#193821](https://github.com/openclaw/openclaw/issues/193821) [Bug]: iOS Share removes indentation and blank lines from imported text
- [#185678](https://github.com/openclaw/openclaw/issues/185678) [Bug]: Android sidebar keeps showing "No sessions" below populated pinned sessions
- [#194836](https://github.com/openclaw/openclaw/issues/194836) [Feature]: Memory Core scheduled light/REM reflection without durable promotion
- [#194826](https://github.com/openclaw/openclaw/issues/194826) [Bug]: Skill Workshop update replaces the whole SKILL.md with a change-note proposal; approval prompt can't show the loss
- [#194785](https://github.com/openclaw/openclaw/issues/194785) [Bug]: realtime talk.session.create fails with "PostgreSQL connections must run in a worker" when the agent family is on PostgreSQL
- [#188519](https://github.com/openclaw/openclaw/issues/188519) [Bug]: Git backups containing Unicode separators fail to restore
- [#194711](https://github.com/openclaw/openclaw/issues/194711) Update failure: gateway-stop-unverified (2026.10.7)
- [#194479](https://github.com/openclaw/openclaw/issues/194479) Cover PostgreSQL 16 retained cron one-shots in PR CI
- [#194663](https://github.com/openclaw/openclaw/issues/194663) [Bug]: Isolated settled-turn finalization bypasses the context engine and overflows the model window on long sessions (2026.9.33)
- [#194657](https://github.com/openclaw/openclaw/issues/194657) [Bug] followup queue drain spins at ~2 errors/sec for 3.5 days after Feishu restart-recovery admission mismatch (no backoff, ~294k log lines)
- [#194629](https://github.com/openclaw/openclaw/issues/194629) [Bug]: After a failed close (stop_close_failed) on a plain SIGTERM stop, the Gateway disarms its force-exit timer and hard-exit watchdog and stays alive until systemd SIGKILL
- [#193111](https://github.com/openclaw/openclaw/issues/193111) Context breakdown shows "—" for Codex sessions: AGENTS.md is never confirmed and Codex's base instructions are not counted
- [#192744](https://github.com/openclaw/openclaw/issues/192744) `gateway run` reports "Missing config" instead of the invalid-flag error
- [#194608](https://github.com/openclaw/openclaw/issues/194608) [Bug]: Linked Telegram administrator configured as command owner cannot create sessions; owner-equivalent access unclear
- [#194587](https://github.com/openclaw/openclaw/issues/194587) [Bug]: restartRecoveryTerminalRunIds is never pruned and blocks steering on long-lived sessions (unknown-source-with-terminal-history)
- [#194578](https://github.com/openclaw/openclaw/issues/194578) [Bug]: Read-only CLI gateway calls never clear a stale stored operator device token (device_token_mismatch loop)
- [#194511](https://github.com/openclaw/openclaw/issues/194511) Bug: fallback runtime context loses its carrier on proxy routes
- [#194508](https://github.com/openclaw/openclaw/issues/194508) Model-default updates can be lost after the selecting command finishes
- [#194548](https://github.com/openclaw/openclaw/issues/194548) [Bug]: resetting a session drops its sidebar color while preserving the icon
- [#167980](https://github.com/openclaw/openclaw/issues/167980) [Bug]: Control UI stays blank in Chromium 114 WebViews (Telegram Android Mini App): Promise.withResolvers and other post-114 APIs used without fallback
- [#168866](https://github.com/openclaw/openclaw/issues/168866) [Docs Bug]: Bonjour guide conflates LAN and wide-area TXT hints
- [#168742](https://github.com/openclaw/openclaw/issues/168742) [Feature]: Log "node command surface withheld" once per node and withheld set instead of on every reconnect

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 261,524 · **Open issues:** 53,614 · **Last push:** <1h ago

On November 8, 2026, there were no new releases for Hermes Agent, but a significant set of features and enhancements were merged into the plugin catalog, including the addition of the Crux decision atlas plugin and improvements with the new umami-digest and vibeleak-atlas plugins. Notably, the catalog also saw version bumps for key components such as traceverse_hermes_otel to 2.0.1 and lineage to v0.1.5. Among the new issues reported, the bug concerning the Nix pnpm-deps hash mismatch on macOS garnered attention, highlighting concerns around an empty clone-probe directory being archived. Overall, the day was primarily focused on enhancements and new features while addressing ongoing issues within the platform.

#### ✅ Merged PRs
- [#149918](https://github.com/NousResearch/hermes-agent/pull/149918) feat(plugin-catalog): quotum 0.3.1, payg project keys
- [#149901](https://github.com/NousResearch/hermes-agent/pull/149901) Add Penguin distributed-team time planner to catalog
- [#149882](https://github.com/NousResearch/hermes-agent/pull/149882) chore(plugin-catalog): re-pin gadget to v0.5.0 (7e18943)
- [#149871](https://github.com/NousResearch/hermes-agent/pull/149871) feat(catalog): add Crux decision atlas plugin
- [#149858](https://github.com/NousResearch/hermes-agent/pull/149858) plugin-catalog: bump traceverse_hermes_otel to 2.0.1
- [#149848](https://github.com/NousResearch/hermes-agent/pull/149848) chore(plugin-catalog): onda 1.0.1 — banner and clearer description
- [#149819](https://github.com/NousResearch/hermes-agent/pull/149819) feat(plugin-catalog): add umami-digest
- [#149797](https://github.com/NousResearch/hermes-agent/pull/149797) plugin-catalog: add bench-rewind (undo history for a physical teardown)
- [#149796](https://github.com/NousResearch/hermes-agent/pull/149796) plugin-catalog: usage-guard 0.5.0 (Plugin Hackathon entry)
- [#149795](https://github.com/NousResearch/hermes-agent/pull/149795) plugin-catalog: git-review 0.3.0 (Plugin Hackathon entry)
- [#149766](https://github.com/NousResearch/hermes-agent/pull/149766) feat(plugin-catalog): bump lineage to v0.1.5
- [#149761](https://github.com/NousResearch/hermes-agent/pull/149761) fix(plugin-catalog): update jp-charts to 8eff93d
- [#149755](https://github.com/NousResearch/hermes-agent/pull/149755) feat(plugin-catalog): add vibeleak-atlas plugin
- [#149742](https://github.com/NousResearch/hermes-agent/pull/149742) feat(plugin-catalog): bump tool-call-salvage to 0.2.0
- [#149724](https://github.com/NousResearch/hermes-agent/pull/149724) plugin-catalog: add receipts
- [#149705](https://github.com/NousResearch/hermes-agent/pull/149705) feat(plugin-catalog): add grounder plugin
- [#149704](https://github.com/NousResearch/hermes-agent/pull/149704) feat(plugin-catalog): bump ascii-worlds to 1.2.0 (twenty habitats)
- [#149703](https://github.com/NousResearch/hermes-agent/pull/149703) fix(plugin-catalog): update author-feed to d3c9497
- [#149697](https://github.com/NousResearch/hermes-agent/pull/149697) feat(plugin-catalog): bump provider-status to 1.6.9
- [#149689](https://github.com/NousResearch/hermes-agent/pull/149689) plugin-catalog: bump hermes-lang-it-full to f41e253
- [#149663](https://github.com/NousResearch/hermes-agent/pull/149663) plugins: pin Inline 1.0.1, which Hermes 0.22.6+ admits
- [#149242](https://github.com/NousResearch/hermes-agent/pull/149242) feat(plugin-catalog): add agent-si plugin
- [#148709](https://github.com/NousResearch/hermes-agent/pull/148709) chore(plugin-catalog): bump kiwi to v1.2.6 (kiwi@0.12.24)
- [#149239](https://github.com/NousResearch/hermes-agent/pull/149239) plugin-catalog: add Hermes Receipts
- [#149220](https://github.com/NousResearch/hermes-agent/pull/149220) feat(plugin-catalog): add hermes-notify
- [#149072](https://github.com/NousResearch/hermes-agent/pull/149072) catalog: add voice-gate 1.4.4
- [#148914](https://github.com/NousResearch/hermes-agent/pull/148914) catalog: add handydandy — threshold-triggered structured gateway carryover
- [#148521](https://github.com/NousResearch/hermes-agent/pull/148521) catalog: add hermes-consult website voice consultation plugin
- [#148343](https://github.com/NousResearch/hermes-agent/pull/148343) Add Hermes Flow to the plugin catalog
- [#121930](https://github.com/NousResearch/hermes-agent/pull/121930) plugin-catalog: add return-line (community, memory)

#### 🐛 New Issues
- [#150713](https://github.com/NousResearch/hermes-agent/issues/150713) [Bug]: Nix pnpm-deps hash mismatch on macOS: empty clone-probe directory is archived 💬1
- [#150896](https://github.com/NousResearch/hermes-agent/issues/150896) Desktop v0.23.0 Hearth: remote boot succeeds but session list skeletons forever 💬2
- [#150962](https://github.com/NousResearch/hermes-agent/issues/150962) Windows: update spawns tasklist.exe on every stale-lock sweep -> 0xc0000142 error dialogs 💬1
- [#150611](https://github.com/NousResearch/hermes-agent/issues/150611) Foreign-input Telegram mirror never fires: _submit checks isinstance(row, dict) against an AdmissionReceipt dataclass 💬1
- [#150986](https://github.com/NousResearch/hermes-agent/issues/150986) [Bug]: `hermes cron create/edit --repeat forever` fails with argparse "invalid int value" although the cronjob tool and normalize_repeat_value accept it
- [#150981](https://github.com/NousResearch/hermes-agent/issues/150981) `--safe-mode` / `--ignore-user-config` sessions always get the `local` terminal: managed `terminal:` scope is ignored
- [#150975](https://github.com/NousResearch/hermes-agent/issues/150975) Plugin API: expose the skill frontmatter parser and the skills_guard scan (read-only)
- [#150973](https://github.com/NousResearch/hermes-agent/issues/150973) [Bug]: `hermes cron create` prints a misleading "Failed to create job" when the job IS saved (raw exception used instead of user_message)
- [#150971](https://github.com/NousResearch/hermes-agent/issues/150971) probe
- [#150969](https://github.com/NousResearch/hermes-agent/issues/150969) [Bug]: Plugin hub reparses the catalog for unrelated installs (93s list / 30s RPC timeout)
- [#150960](https://github.com/NousResearch/hermes-agent/issues/150960) Plugin surface for consented, read-only access to the user's own logged-in browser profile (a browser-session seam for bookmark-harvester plugins)

#### 🔒 Closed Issues
- [#143605](https://github.com/NousResearch/hermes-agent/issues/143605) Telegram: album containing a document is refused with `invalid_params (media_text_inlined_length)`
- [#72668](https://github.com/NousResearch/hermes-agent/issues/72668) [Bug]: Telegram adapter — `_redact_telegram_error_text(error)` pasted into two logger format strings, leaving the error logged unredacted
- [#61993](https://github.com/NousResearch/hermes-agent/issues/61993) Gateway resurrects ended session from stale sessions.json routing key — session reset silently undone
- [#39694](https://github.com/NousResearch/hermes-agent/issues/39694) Telegram clarify prompts show busy-session controls and must keep accepting replies
- [#68794](https://github.com/NousResearch/hermes-agent/issues/68794) fix(telegram): auth prefilter treats GATEWAY_ALLOW_ALL_USERS=false as configured, blocking DM pairing
- [#87598](https://github.com/NousResearch/hermes-agent/issues/87598) [Bug] Telegram: gateway cold-start during lazy-install strands the executing module entity with `HTTPXRequest = Any`; reconnect watcher never self-heals (hours of blind retries — only a full gateway restart recovers)
- [#78742](https://github.com/NousResearch/hermes-agent/issues/78742) docs(telegram): document media-routing env vars and extension/MIME tables
- [#78739](https://github.com/NousResearch/hermes-agent/issues/78739) fix(telegram): sendAudio drops performer/title/thumbnail and caption parse_mode
- [#33079](https://github.com/NousResearch/hermes-agent/issues/33079) Telegram gateway tests: sys.modules ParseMode mock poisoning causes order-dependent false failures
- [#56771](https://github.com/NousResearch/hermes-agent/issues/56771) [Bug]: `execute_code` blocked in interactive Telegram gateway session because `HERMES_CRON_SESSION` env var leaks from cron scheduler into user's shell
- [#68539](https://github.com/NousResearch/hermes-agent/issues/68539) Gateway session recovery resurrects ancient never-ended sessions after session_reset — nightly reset silently undone, stale context resurfaces
- [#67781](https://github.com/NousResearch/hermes-agent/issues/67781) Bug: Daily 4AM session_reset resurrected by stale-route recovery — session ran 23h, ~2 cost from context that should have been cleared
- [#8045](https://github.com/NousResearch/hermes-agent/issues/8045) [Bug]: Telegram session summarization always falls back to summarization unavailable even when jsonl is complete
- [#6212](https://github.com/NousResearch/hermes-agent/issues/6212) [Bug]: Telegram fresh hello can dump prior [CONTEXT COMPACTION] handoff instead of greeting normally
- [#3953](https://github.com/NousResearch/hermes-agent/issues/3953) [Bug]: The context pressure monitor works correctly in the terminal but is completely missing in Telegram
- [#78703](https://github.com/NousResearch/hermes-agent/issues/78703) fix(telegram): inbound GIF/animation dropped — no filters.ANIMATION, no MessageType
- [#47779](https://github.com/NousResearch/hermes-agent/issues/47779) \boxed{} command not rendered in Telegram rich messages (LaTeX)
- [#120380](https://github.com/NousResearch/hermes-agent/issues/120380) [Bug] Multiple concurrent gateway sessions stall for 10+ min; provider completes in seconds but Hermes never reads the socket (Recv-Q up to 881KB)
- [#147564](https://github.com/NousResearch/hermes-agent/issues/147564) [Bug] Hermes Cloud instance: all outbound TCP refused (Errno 111) — dashboard login 503 'Auth provider nous unreachable', survives upgrade/reset/restart
- [#142024](https://github.com/NousResearch/hermes-agent/issues/142024) [Bug]: Telegram free_response groups cannot stay silent - bare [SILENT] is replaced by a visible silence-marker warning
- [#145161](https://github.com/NousResearch/hermes-agent/issues/145161) [Bug]: `/steer` sent while a clarify is in "Other (type answer)" mode can never be delivered — the session stalls for the full clarify_timeout
- [#84608](https://github.com/NousResearch/hermes-agent/issues/84608) [Bug]: Prose reply to a multi-choice clarify is demoted to a steer, so the clarify blocks for its full timeout
- [#61569](https://github.com/NousResearch/hermes-agent/issues/61569) Telegram videos can render as black cards without sendVideo metadata
- [#49667](https://github.com/NousResearch/hermes-agent/issues/49667) [Bug]: Desktop pinned section does not render Telegram (non-local-source) sessions
- [#150896](https://github.com/NousResearch/hermes-agent/issues/150896) Desktop v0.23.0 Hearth: remote boot succeeds but session list skeletons forever
- [#146779](https://github.com/NousResearch/hermes-agent/issues/146779) [Bug]: Gateway with streaming off delivers only the continuation tail after a mid-stream stall
- [#23696](https://github.com/NousResearch/hermes-agent/issues/23696) Agent: missing newline before continuation when output is truncated
- [#107082](https://github.com/NousResearch/hermes-agent/issues/107082) Telegram: /cmd@botname mention-strip eats the arg separator, breaking slash commands in groups
- [#88623](https://github.com/NousResearch/hermes-agent/issues/88623) Discord platform hint lacks Markdown formatting guidance (unlike Telegram/Signal/WhatsApp)
- [#55439](https://github.com/NousResearch/hermes-agent/issues/55439) Telegram mention/command detection mis-slices when emoji precede the mention (UTF-16 entity offsets used as code-point indices)
- [#150611](https://github.com/NousResearch/hermes-agent/issues/150611) Foreign-input Telegram mirror never fires: _submit checks isinstance(row, dict) against an AdmissionReceipt dataclass
- [#92584](https://github.com/NousResearch/hermes-agent/issues/92584) feat(heartbeat): restore persisted gateway watches after restart and add admin session registration
- [#77424](https://github.com/NousResearch/hermes-agent/issues/77424) [Security] Telegram gateway DMs are open to anyone by default (fail-open): unauthenticated remote agent control — real-world incident 2026-08-03
- [#150971](https://github.com/NousResearch/hermes-agent/issues/150971) probe

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,530 · **Open issues:** 10,023 · **Last push:** <1h ago

On November 8, 2026, there were no new releases for vLLM, but several important pull requests were merged, including a bugfix to maintain the Attention module's FA sliding window under batch invariance and adjustments to the ROCm CI pipeline for enhanced performance. Significant refactoring included the removal of Model Runner V1 and the relocation of CPU operation wrappers to a dedicated file. Additionally, the team made improvements to various bug fixes related to performance and model loading, particularly addressing issues with the Qwen2.5 model and errors arising from improper handling of structured outputs. Among the newly reported issues, a critical bug was identified where Qwen2.5 experienced crashes due to CUDA illegal memory access during initialization warmup, which is likely to be a priority for resolution.

#### ✅ Merged PRs
- [#65627](https://github.com/vllm-project/vllm/pull/65627) [Bugfix][Attention] Keep FA sliding window active under batch invariance
- [#66329](https://github.com/vllm-project/vllm/pull/66329) [CI][ROCm][UMBP] Run the load setup store outside the 200 ms runtime
- [#66328](https://github.com/vllm-project/vllm/pull/66328) [CI][ROCm] Force fork in test_preprocess_error_handling
- [#63373](https://github.com/vllm-project/vllm/pull/63373) [Core] Remove Model Runner V1
- [#63166](https://github.com/vllm-project/vllm/pull/63166) [ROCm][CI] Fix the test_qwen.py failure when AITER is on
- [#66000](https://github.com/vllm-project/vllm/pull/66000) [Bugfix][Step5][Spec Decode] Skip VllmConfig re-validation for the MTP draft config
- [#65957](https://github.com/vllm-project/vllm/pull/65957) [ROCm][CI] Cache only a ROCm stack the PR's CI pushed itself
- [#66297](https://github.com/vllm-project/vllm/pull/66297) [ROCm][CI] Make Zen5 CPU tests optional
- [#61813](https://github.com/vllm-project/vllm/pull/61813) [Chore] Use upstream Transformers MiniMaxM3VLConfig
- [#65275](https://github.com/vllm-project/vllm/pull/65275) [Bugfix][MRV2] Use promised max_query_len for encoder-only FULL CUDA graphs
- [#66228](https://github.com/vllm-project/vllm/pull/66228) [Build][MiniMax-M3] Bump fmha_sm100 to 51f4f5c
- [#66100](https://github.com/vllm-project/vllm/pull/66100) [CPU][Refactor] Move CPU ops wrappers to vllm/_cpu_ops.py
- [#63540](https://github.com/vllm-project/vllm/pull/63540) [Perf][DSv4] Process 4 heads per program in fused_inv_rope_fp8_quant
- [#65743](https://github.com/vllm-project/vllm/pull/65743) [Refactor] Remove dead code kernels
- [#65589](https://github.com/vllm-project/vllm/pull/65589) [Perf][Startup] Don't import vllm.parser from vllm.v1.structured_output
- [#49459](https://github.com/vllm-project/vllm/pull/49459) [Model Loader] Remove per-load completeness checks
- [#64528](https://github.com/vllm-project/vllm/pull/64528) [Misc] Bump ruff to v0.17.2 and enable UP032, UP042, B007, F403 and F405
- [#66165](https://github.com/vllm-project/vllm/pull/66165) [Sleep] Warn when level-2 sleep discards draft weights
- [#66273](https://github.com/vllm-project/vllm/pull/66273) [Kimi-K3] Keep the latent-MoE tail fusion under sleep mode
- [#64994](https://github.com/vllm-project/vllm/pull/64994) [Perf][DCP] Up-project the MLA decode output before the A2A merge
- [#65508](https://github.com/vllm-project/vllm/pull/65508) [ROCm][Perf][MiniMax-M3.1] Emit the o_proj MXFP8 input from the NVFP4 sparse decode kernel
- [#59767](https://github.com/vllm-project/vllm/pull/59767) [Model] Migrate Aria to the Transformers modeling backend
- [#66015](https://github.com/vllm-project/vllm/pull/66015) [Bugfix][MoE] Stop DeepGEMM's MLOPart helper once MegaMoE caches its SM map
- [#66021](https://github.com/vllm-project/vllm/pull/66021) [Perf][RL] Validate sparse weight patches in one pass
- [#66080](https://github.com/vllm-project/vllm/pull/66080) [Bugfix][DeepGEMM] Match relax warmup M values to the vendored SM100 heuristic
- [#64476](https://github.com/vllm-project/vllm/pull/64476) [Spec Decode][DSpark] Fuse the Markov bias and block combine into Gumbel sampling
- [#66227](https://github.com/vllm-project/vllm/pull/66227) [Perf][MiniMax-M3] Warm up DeepGEMM NVFP4 MegaMoE kernels before serving
- [#60130](https://github.com/vllm-project/vllm/pull/60130) [KV Offload] SimpleCPUOffload: one host buffer per rank, opt-in HugeTLB pages

#### 🐛 New Issues
- [#66231](https://github.com/vllm-project/vllm/issues/66231) [RFC]: P/D disaggregation for continuous RL rollouts (S1): order-free, seconds-long weight-update pauses `kv-connector` 💬2
- [#66244](https://github.com/vllm-project/vllm/issues/66244) [Bug]: Qwen2.5-0.5B crashes with CUDA illegal memory access during initialization warmup `bug` 💬2
- [#66242](https://github.com/vllm-project/vllm/issues/66242) [Bug]: Phi-2 crashes with CUDA illegal memory access during compile/warmup at size 32 `bug` 💬1
- [#66332](https://github.com/vllm-project/vllm/issues/66332) [Bug]: /v1/audio/transcriptions and /translations reject stream_include_usage=false (form strings checked before bool coercion) 💬1
- [#66293](https://github.com/vllm-project/vllm/issues/66293) [Bug]: vllm/vllm-openai:muse-spark-open needs to be rebuilt with the issue fixed in #62374 `bug` 💬1
- [#66311](https://github.com/vllm-project/vllm/issues/66311) [Feature]: EAGLE-3 / DSpark support (aux hidden states) for Lfm3ForCausalLM `feature request` `speculative-decoding` 💬1
- [#66302](https://github.com/vllm-project/vllm/issues/66302) [Bug]: llama4_pythonic chat template quotes every tool call argument, losing argument types and breaking on strings containing a quote `tool-calling` 💬1
- [#66248](https://github.com/vllm-project/vllm/issues/66248) [Bug]: Invalid `SamplingParams.structured_outputs` type raises `AttributeError` during request validation `bug` `structured-output` 💬1
- [#66246](https://github.com/vllm-project/vllm/issues/66246) [Bug]: Single-token benchmark probes inherit generation-length overrides from the main workload 💬1
- [#66243](https://github.com/vllm-project/vllm/issues/66243) [Bug][Model] dots.ocr/dots.mocr: vision tower host syncs make the model untestable under VLLM_GPU_SYNC_CHECK `rocm` 💬1
- [#66241](https://github.com/vllm-project/vllm/issues/66241) [Bug]: `compilation_config.backend` accepts arbitrary strings and dies with a bare `AttributeError: module '__main__' has no attribute 'backend'` inside `resolve_obj_by_qualname` — no validation, misleading error `bug` 💬1
- [#66211](https://github.com/vllm-project/vllm/issues/66211) [Bug]: Compressed-tensors NVFP4/MXFP4 row-parallel layers load with other groups' block scales when the TP split cuts a scale group (Gemma-4-26B-A4B NVFP4 at TP=8: GSM8K 24% -> 1.4%) `quantization` 💬1
- [#66303](https://github.com/vllm-project/vllm/issues/66303) [Bug]: NCCL symmetric all-reduce uses the wrong group when TP and ETP differ
- [#66301](https://github.com/vllm-project/vllm/issues/66301) [Feature]: Deploying vLLM with Ray on SLURM-based university HPC clusters `feature request`
- [#66300](https://github.com/vllm-project/vllm/issues/66300) [Bug]: llama3.2_pythonic and toolace chat templates render string arguments unquoted, so the pythonic parser drops the call `tool-calling`
- [#66298](https://github.com/vllm-project/vllm/issues/66298) [Bug]: gemma3_pythonic chat template renders tool call arguments with no separator, so the pythonic parser rejects the whole call `tool-calling`
- [#66290](https://github.com/vllm-project/vllm/issues/66290) [RFC]: Pipeline-parallel equivalence tests for every model that declares `SupportsPP` `RFC` `kimi`
- [#66288](https://github.com/vllm-project/vllm/issues/66288) [Bug]: Qwen3.5 RMSNorm JIT-compiles FlashInfer kernels on sm75 (T4)
- [#66284](https://github.com/vllm-project/vllm/issues/66284) [Performance]: ~1.4 s gpt-oss serving stalls from per-batch-size recompiles of the bundled triton_kernels v3.5.1 routing kernels `gpt-oss`
- [#66266](https://github.com/vllm-project/vllm/issues/66266) [Transformers v5] Restore PaddleOCR-VL generation tests with a native HF reference
- [#66264](https://github.com/vllm-project/vllm/issues/66264) [Bug]: UVA CPU offload silently undone when replace_parameter rebinds .data (marker survives, re-offload skipped) `quantization`
- [#66255](https://github.com/vllm-project/vllm/issues/66255) [Bug]: MoE oracle picks LoRA-aware experts from the global lora_config, ignoring the per-layer target_modules filter `bug`
- [#66258](https://github.com/vllm-project/vllm/issues/66258) [Performance]: Whisper encoder runs eagerly; compiling it gives ~+10% transcription throughput
- [#66250](https://github.com/vllm-project/vllm/issues/66250) [Bug]: phi-2 crashes with CUDA illegal memory access during compile/warmup at size 32 `bug`
- [#66239](https://github.com/vllm-project/vllm/issues/66239) [Bug][KV Offload] FS tier reports EIO instead of ENOSPC when the disk fills `bug`
- [#66232](https://github.com/vllm-project/vllm/issues/66232) [Bug][Perf]: W4A16 HummingLinearKernel is non-deterministic across processes and faster than the default Machete on H100 (sm_90) `quantization` `batch-invariance`
- [#66218](https://github.com/vllm-project/vllm/issues/66218) GLM-5.3-Flash FP4-Local in production on 2x RTX PRO 6000 (SM120): what's missing for a full community-main base? `glm`

#### 🔒 Closed Issues
- [#47802](https://github.com/vllm-project/vllm/issues/47802) [Feature]: Priority scheduling is not reflected in KV/prefix cache retention under cache pressure
- [#48148](https://github.com/vllm-project/vllm/issues/48148) [RFC]: Remove Group Activation Ordering (actorder=group) Support from vLLM and Compression Libraries
- [#48106](https://github.com/vllm-project/vllm/issues/48106) [Feature]: PrefillDelayer for performant DPA
- [#48077](https://github.com/vllm-project/vllm/issues/48077) [Usage]: Does it support the deployment of P node TEP and D node DEP modes
- [#48147](https://github.com/vllm-project/vllm/issues/48147) [RFC]: Optimizing Asynchronous Stream Serialization in OpenAI API Entrypoint
- [#48172](https://github.com/vllm-project/vllm/issues/48172) [Feature]: Prefix LM kernel on ROCm_ATTN
- [#48191](https://github.com/vllm-project/vllm/issues/48191) [Feature]: [Parity with AMD SGLang] MoRI UMBP Offloading support
- [#50788](https://github.com/vllm-project/vllm/issues/50788) [Feature][Gemma4]: Allow configuring max_soft_tokens for video frames
- [#48080](https://github.com/vllm-project/vllm/issues/48080) [RFC]: Confident Decoding — entropy-guided intermediate-layer logits selection
- [#55518](https://github.com/vllm-project/vllm/issues/55518) [Bug]: kv_cache_utils warns that prefix-cache reuse is disabled even when disable_eagle_block_drop keeps it working
- [#65587](https://github.com/vllm-project/vllm/issues/65587) [Bug]: VLLM_BATCH_INVARIANT=1 is not batch-invariant for Gemma-2-9B on H100 (FlashAttention sliding-window path under CUDA graphs)

### SGLang (`sgl-project/sglang`)

**Stars:** 38,562 · **Open issues:** 6,502 · **Last push:** <1h ago

On November 8, 2026, there were no new releases for SGLang; however, several significant pull requests were merged, enhancing performance and fixing bugs across various components. Notable improvements included the implementation of a packed prefill top-k operation for CUDA, the fused DCP8 indexer for decoding in NVIDIA's DSA, and multiple performance optimizations for AMD's aiter and diffusion modules. Fixes were also made to ensure consistency in quantization and cache management, particularly addressing issues in the ernie55 and kv-canary modules. A new issue was reported regarding a potential deadlock in the Rust extension loader, which highlights ongoing challenges in maintaining smooth functionality.

#### ✅ Merged PRs
- [#45891](https://github.com/sgl-project/sglang/pull/45891) [Perf] dsa: Run the packed prefill top-k on CUDA
- [#48895](https://github.com/sgl-project/sglang/pull/48895) [Perf] [NVIDIA] dsa/dcp: Fused DCP8 indexer top-k for decode
- [#47908](https://github.com/sgl-project/sglang/pull/47908) [Fix] [AMD] quark: Match aiter's column-major scale layout in the MXFP4 quant fake
- [#48043](https://github.com/sgl-project/sglang/pull/48043) [Perf] [AMD] qwen3: Fuse the 1x128 FP8 input quant into RMSNorm and SiLU-and-mul for block-FP8 linears on gfx950
- [#46430](https://github.com/sgl-project/sglang/pull/46430) [Fix] diffusion/flux3: Make TP and SP ranks agree on sequential CFG
- [#45807](https://github.com/sgl-project/sglang/pull/45807) [Perf] [NVIDIA] deepseek-v4.1: Fuse BF16 prefill indexer score epilogue
- [#48434](https://github.com/sgl-project/sglang/pull/48434) [Fix] [AMD] aiter: Quantize q with its own scale in the fp8 prefills over a gathered cache
- [#48952](https://github.com/sgl-project/sglang/pull/48952) [CI] ep: Port the FlashInfer dispatcher test to flashinfer.moe_ep and run it in CI
- [#46929](https://github.com/sgl-project/sglang/pull/46929) [Fix] mnnvl: Match FlashInfer's arch-specific CuTe DSL AR profiles
- [#48122](https://github.com/sgl-project/sglang/pull/48122) [Perf] diffusion: Cache MiniMax-H3 reference and keyframe rows per image
- [#46425](https://github.com/sgl-project/sglang/pull/46425) [Refactor] diffusion: Move the Nomas segment KV cache under layers/kvcache
- [#48218](https://github.com/sgl-project/sglang/pull/48218) [Perf] diffusion: Enable image-prefix sequence parallelism for ERNIE-Image
- [#48442](https://github.com/sgl-project/sglang/pull/48442) [Perf] diffusion: Accelerate exact SANA-Video RoPE on SM103
- [#48394](https://github.com/sgl-project/sglang/pull/48394) [Perf] diffusion: Fuse Anima gated residuals during BCG capture
- [#47862](https://github.com/sgl-project/sglang/pull/47862) [Feat] [AMD] aiter: One folder of in-tree aiter tuned rows for every model
- [#49093](https://github.com/sgl-project/sglang/pull/49093) [Fix] ernie55: Import layer helpers from their current modules
- [#49092](https://github.com/sgl-project/sglang/pull/49092) [Fix] kv-canary: Pass token-oracle request ids into the warmup dummy forward
- [#49001](https://github.com/sgl-project/sglang/pull/49001) [Feat] [AMD] custom-all-reduce: Run carv2 on MI450 with FABRIC handles and a gfx1250 table
- [#49030](https://github.com/sgl-project/sglang/pull/49030) [Feat] rust-server: Report cached prompt tokens under --enable-cache-report on the OpenAI routes
- [#49016](https://github.com/sgl-project/sglang/pull/49016) [Test] unit: Pin the Python frontend in tests of Python-frontend-only behaviour
- [#49023](https://github.com/sgl-project/sglang/pull/49023) [Feat] rust-server: Log requests as JSON lines and to log directories, and log OpenAI requests as received
- [#47129](https://github.com/sgl-project/sglang/pull/47129) [Perf] [NVIDIA] muse-spark: Bound B200 projection dispatch and allocator compilation
- [#49087](https://github.com/sgl-project/sglang/pull/49087) [Doc] [AMD] cookbook: Update Muse Spark Open MI355X AgentX recipe to the 1106 image
- [#49006](https://github.com/sgl-project/sglang/pull/49006) [Feat] rust-server: Pass the image item detail hint to multimodal processors
- [#43886](https://github.com/sgl-project/sglang/pull/43886) [Fix] multimodal: Preserve empty media in parallel sampling
- [#47247](https://github.com/sgl-project/sglang/pull/47247) [Perf] deepseek-v4.1: Use reduce-scatter for CP MoE output
- [#47828](https://github.com/sgl-project/sglang/pull/47828) [Fix] simulator: Lazily import optional AIConfigurator dependency
- [#48903](https://github.com/sgl-project/sglang/pull/48903) [Test] kandinsky6-sr: Check spatial-shard decode exactly in fp32 and with a calibrated bf16 outlier budget
- [#47538](https://github.com/sgl-project/sglang/pull/47538) [Feat] http_server: Dispatch SageMaker /invocations to completions and embeddings by request body
- [#48375](https://github.com/sgl-project/sglang/pull/48375) [Feat] PD: Publish spec_kv_layout so DSpark/DFlash prefill and decode must match
- [#49032](https://github.com/sgl-project/sglang/pull/49032) [Fix] scheduler: Relay multimodal requests to later PP stages without raw features
- [#48572](https://github.com/sgl-project/sglang/pull/48572) [Feat] rust-server: Report the serving DP rank in /generate meta_info
- [#48815](https://github.com/sgl-project/sglang/pull/48815) [Fix] rust-server: Keep the DP control fan-out off an inherited HTTP proxy
- [#48818](https://github.com/sgl-project/sglang/pull/48818) [Feat] rust-server: Let an embedding package register scheduler state fields for /server_info
- [#48798](https://github.com/sgl-project/sglang/pull/48798) [Feat] rust-server: Let the launching process list the ports its node's Rust listeners bind
- [#48797](https://github.com/sgl-project/sglang/pull/48797) [Test] server-info: Pin the Python frontend in two /server_info unit tests
- [#48753](https://github.com/sgl-project/sglang/pull/48753) [Feat] rust-server: Refuse more ignored settings, add a launch-time GenerateValidator, and catalogue the Python frontend's config reads
- [#48523](https://github.com/sgl-project/sglang/pull/48523) [Feat] rust-server: Decompress x-body-compressed request bodies
- [#48518](https://github.com/sgl-project/sglang/pull/48518) [Fix] server-args: Redact the access keys from /server_info, logs, launch_command and crash dumps
- [#48515](https://github.com/sgl-project/sglang/pull/48515) [Fix] rust-server: Freeze the scheduler's garbage collector after the startup warmup
- [#48512](https://github.com/sgl-project/sglang/pull/48512) [Feat] rust-server: Refuse ignored flags, enforce API keys, exit on a failed warmup, declare the SSE charset
- [#48457](https://github.com/sgl-project/sglang/pull/48457) [Feat] rust-server: Write --crash-dump-folder dumps from the Rust frontend
- [#48455](https://github.com/sgl-project/sglang/pull/48455) [Feat] rust-server: Log requests like the Python server
- [#48992](https://github.com/sgl-project/sglang/pull/48992) [Fix] scheduler: Honor pause_generation under PP and release aborted PD rooms and rejected sessions
- [#48438](https://github.com/sgl-project/sglang/pull/48438) [Test] [AMD] aiter: Run the HD128 ASM prefill test on gfx950 with a routed pool
- [#48966](https://github.com/sgl-project/sglang/pull/48966) [CI] [AMD] hc_mix: Skip the FlyDSL hc_mix dispatch tests when AITER lacks the kernel
- [#48896](https://github.com/sgl-project/sglang/pull/48896) [Doc] blogs: Sync LMSYS SGLang blog cards
- [#45534](https://github.com/sgl-project/sglang/pull/45534) [Fix] [NVIDIA] DeepSeek-v4.1: scatter the replay tail before the prefill CP gather with DSpark
- [#48128](https://github.com/sgl-project/sglang/pull/48128) [Fix] quantization: Load Muse-Glimmer-NVFP4's MXFP8 lm_head, and run its MXFP8 dense layers as block-FP8 off Blackwell
- [#48946](https://github.com/sgl-project/sglang/pull/48946) [Refactor] moe: Remove the bailing_moe_topk and JIT moe_topk_sigmoid routers
- [#48830](https://github.com/sgl-project/sglang/pull/48830) [CI] [AMD] spur: Run 1-, 2- and 4-GPU suites on part of a node
- [#48978](https://github.com/sgl-project/sglang/pull/48978) [CI] [AMD] jit: Use the platform full warp mask in the DSA indexer RoPE helpers
- [#48638](https://github.com/sgl-project/sglang/pull/48638) [Perf] [NVIDIA] moe: Add an opt-in persistent MXFP4 decode MoE kernel for Kimi-K3.1
- [#49037](https://github.com/sgl-project/sglang/pull/49037) [Test] [NVIDIA] megakernel: Stub the DCP push-combine warmup hook in the runtime test
- [#45497](https://github.com/sgl-project/sglang/pull/45497) [Perf] attention: avoid concatenating MLA queries for zigzag CP
- [#48563](https://github.com/sgl-project/sglang/pull/48563) [Perf] [NVIDIA] gemma4: fuse the TP all-reduce with the layer epilogue and FP8 quant on NVLink multicast
- [#47893](https://github.com/sgl-project/sglang/pull/47893) [Perf] [NVIDIA] glm5_next: Run the fused KDA decode kernel at 8 and 16 heads per rank
- [#48044](https://github.com/sgl-project/sglang/pull/48044) [Perf] [AMD] qwen3-next: Fuse the full-attention Q/K GemmaRMSNorm and partial RoPE into one Triton kernel on gfx950
- [#38749](https://github.com/sgl-project/sglang/pull/38749) [Feat] kernels: Add out-of-tree dispatch for gated RMSNorm
- [#48666](https://github.com/sgl-project/sglang/pull/48666) [Fix] tbo: Capture routed experts at each child's parent rows
- [#44486](https://github.com/sgl-project/sglang/pull/44486) [Perf] quantization: Add the bias in the cuBLASLt epilogue for per-tensor FP8 linears
- [#48689](https://github.com/sgl-project/sglang/pull/48689) [Feat] qwen4-exp: accept HMM devices for the file-backed PLE table
- [#48404](https://github.com/sgl-project/sglang/pull/48404) [Fix] eplb: reject incompatible recorder modes
- [#49034](https://github.com/sgl-project/sglang/pull/49034) [Fix] hicache: Return int page slots from `_storage_page_index` without DCP
- [#43703](https://github.com/sgl-project/sglang/pull/43703) [Perf] [NVIDIA] unquant: Autotune low-M BF16 GEMMs via FlashInfer mm_bf16
- [#49022](https://github.com/sgl-project/sglang/pull/49022) [Doc] [AMD] cookbook: Match the Kimi-K3.1-Pro MI35x single-node cells to the current recipe
- [#48988](https://github.com/sgl-project/sglang/pull/48988) [Fix] radix-cache: Use Rust TreeCore with PyTorch 2.15 in the cu134 image instead of slow python backend
- [#48877](https://github.com/sgl-project/sglang/pull/48877) [Feat] kimi-k3.1: HiCache under decode context parallelism
- [#48393](https://github.com/sgl-project/sglang/pull/48393) [Fix] kimi-k3: Cap cached_tokens at prompt_tokens in the Rust processor
- [#48995](https://github.com/sgl-project/sglang/pull/48995) [CI] labeler: Label Reflection Beam PRs and issues
- [#48511](https://github.com/sgl-project/sglang/pull/48511) [Test] rust-server: Cover the embedded Rust frontend in a two-node TP engine
- [#48453](https://github.com/sgl-project/sglang/pull/48453) [Test] load-snapshot: Pin the Python server mode in TestZmqReaderOwner
- [#48449](https://github.com/sgl-project/sglang/pull/48449) [Refactor] scheduler: Run a prefill batch's KV calls from one overridable _flush_prefill
- [#48446](https://github.com/sgl-project/sglang/pull/48446) [Fix] io_struct: Give each request its own sampling_params dict during normalization
- [#49008](https://github.com/sgl-project/sglang/pull/49008) [Feat] rust-server: Serve a generation on the DP rank its routed_dp_rank names
- [#47984](https://github.com/sgl-project/sglang/pull/47984) [Fix] mem_cache: Chunk MambaPool temporal state copy to avoid OOM spike
- [#48492](https://github.com/sgl-project/sglang/pull/48492) [Fix] rust-server: Let DP rank 0's drain wait for every attention-DP listener
- [#48740](https://github.com/sgl-project/sglang/pull/48740) [Perf] kimi-k3.1: Faster DCP decode reduce (push-combine, V pre-projection, direct exchange)
- [#48739](https://github.com/sgl-project/sglang/pull/48739) [Feat] kimi-k3.1: DSPARK and DFLASH under decode context parallelism
- [#48531](https://github.com/sgl-project/sglang/pull/48531) [Perf] [NVIDIA] fp8: Let the Hopper block GEMV take K=6144 for MiniMax M3.1
- [#48833](https://github.com/sgl-project/sglang/pull/48833) [Perf] dspark: Build the compact verify window and stage its padded layout in one launch each
- [#49017](https://github.com/sgl-project/sglang/pull/49017) [Fix] moe: Match the Triton renormalize sum order in the warp MoE router
- [#48997](https://github.com/sgl-project/sglang/pull/48997) [Feat] scheduler: Run the state checks in the PD and PP loops and after a flush
- [#48470](https://github.com/sgl-project/sglang/pull/48470) [Perf] diffusion: Tune LingBot MoE TMA for B300 SXM6 AC
- [#48801](https://github.com/sgl-project/sglang/pull/48801) [Feat] sgl-router: Log per-request image, video and audio counts in the access log

#### 🐛 New Issues
- [#49108](https://github.com/sgl-project/sglang/issues/49108) [Bug] Rust extension loader: cargo --version probe can deadlock in launcher spawn context (defensive timeout suggestion)
- [#49065](https://github.com/sgl-project/sglang/issues/49065) [Bug] ComfyUI SGLD loader: Fun ControlNet on Qwen-Image 2.1 fails with AttributeError
- [#49061](https://github.com/sgl-project/sglang/issues/49061) [Bug] Gemma 3 and Mistral 3 build ignored vision layers quantized: the quantization ignore list is not renamed like the weights
- [#49055](https://github.com/sgl-project/sglang/issues/49055) [Performance][Non-blocking] Rust server stack #48815 follow-ups `performance`

#### 🔒 Closed Issues
- [#22084](https://github.com/sgl-project/sglang/issues/22084) [Feature] Distributed Weight Data Parallelism (DWDP) for Sparse MoE Models
- [#38031](https://github.com/sgl-project/sglang/issues/38031) [Bug] GLM-5.3-Flash (DSA): HiCache host-tier load-back corrupts generation even without speculative decoding — dropped tool calls, degenerate repetition loops (8×H100, TP8)
- [#33483](https://github.com/sgl-project/sglang/issues/33483) [Bug] `max_running_requests` (4096) and `cuda_graph_max_bs` (32) defaults are derived independently; crossing the graph ceiling is an absorbing state
- [#45367](https://github.com/sgl-project/sglang/issues/45367) [Bug] Kimi-K3 DCP a2a produces garbled decode output on 2-node GB300; NCCL_GRAPH_REGISTER=0 restores smoke-test output
- [#38004](https://github.com/sgl-project/sglang/issues/38004) [RFC] Quantization module layout: Config, Scheme, backend kernels
- [#38450](https://github.com/sgl-project/sglang/issues/38450) [Bug] DeepSeek-V4-Flash-Vision preview image: multi-turn tool calls come back wrapped in {"arguments": {...}}
- [#37983](https://github.com/sgl-project/sglang/issues/37983) [Bug] VisionTritonAttention drops MiMo-style window attention and sinks
- [#34857](https://github.com/sgl-project/sglang/issues/34857) [Bug] [ROCm] Router GEMM output should always be fp32, and the expert correction bias should not be cast to bf16
- [#48892](https://github.com/sgl-project/sglang/issues/48892) [CI] multimodal-gen-test-2-gpu (test_kandinsky6_sr_decode_parallel spatial-2) fails on main: Tensor-likes are not close
- [#47916](https://github.com/sgl-project/sglang/issues/47916) [Bug] [mamba/hybrid] MambaPool.copy_from gathers all source temporal states into one temporary (n x state_size) - CUDA OOM under parallel admission bursts
- [#46429](https://github.com/sgl-project/sglang/issues/46429) [Bug] FLUX.3 Image: TP/SP ranks pick packed or sequential CFG independently and can hang
- [#38573](https://github.com/sgl-project/sglang/issues/38573) [Bug] compressed-tensors W4AFP8 MoE: cutlass_w4a8_moe passes a literal chunk_size=128, so a group_size≠128 checkpoint loads clean and serves silently wrong output
- [#38557](https://github.com/sgl-project/sglang/issues/38557) [Playground] Verified cell: h100 / flash-vision / fp4 / balanced / single
- [#38552](https://github.com/sgl-project/sglang/issues/38552) Error deploy GPT OSS-120B with heterogeneous TP in a P/D
- [#26890](https://github.com/sgl-project/sglang/issues/26890) [AITER-Upgrade] AITER Scout Status
- [#38514](https://github.com/sgl-project/sglang/issues/38514) Docs: official BFL FLUX.2-klein FP8 is Comfy split-QKV, not a packed SGLang --transformer-weights-path drop-in
- [#38485](https://github.com/sgl-project/sglang/issues/38485) [Bug] ReplaySSM CPU backup/restore loses pending accepted updates
- [#38478](https://github.com/sgl-project/sglang/issues/38478) [Feature] Scheduler: opt-in NO_TOKEN admission lookahead with head-prefix pinning (head-of-line relief for prefill)
- [#38470](https://github.com/sgl-project/sglang/issues/38470) [Feature] HiCache: run the host->device load-back enqueue on a loader thread so it can overlap the forward
- [#37585](https://github.com/sgl-project/sglang/issues/37585) [Bug] Eager hybrid target verify fails when TP padding breaks fixed-width request groups
- [#38448](https://github.com/sgl-project/sglang/issues/38448) [Bug] HiCache: prefill forward stalls behind the entire host-to-device load burst because round-head H2D copies are issued after the burst hand-over
- [#38428](https://github.com/sgl-project/sglang/issues/38428) [Bug] HiCache backup thread dies on any storage backend exception; queued backups and their host memory are never released
- [#35223](https://github.com/sgl-project/sglang/issues/35223) [Tracking] Host allocator: page-aligned allocation with host-side bookkeeping
- [#38424](https://github.com/sgl-project/sglang/issues/38424) [First-time contributor] Looking for beginner-friendly issues to contribute
- [#46301](https://github.com/sgl-project/sglang/issues/46301) [Perf] diffusion quantization layer: fix 6 real perf/overhead bugs
- [#48506](https://github.com/sgl-project/sglang/issues/48506) [Bug] [NVIDIA] test/manual/ep/test_flashinfer_dispatcher.py: Every test errors on main, and the test needs a rewrite for FlashInfer 0.7.3's moe_ep API
- [#47827](https://github.com/sgl-project/sglang/issues/47827) [Bug] Simulator Replay startup eagerly imports optional AIConfigurator dependency
- [#48127](https://github.com/sgl-project/sglang/issues/48127) [Bug] RadixArk/Muse-Glimmer-NVFP4 fails at load since #45632 (MXFP8 lm_head), and on Hopper also at DeepGEMM warmup
- [#48403](https://github.com/sgl-project/sglang/issues/48403) [Bug] EPLB crashes with per_pass/per_token recorder modes

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,666 · **Open issues:** 2,581 · **Last push:** <1h ago

Today, llama.cpp released several new versions, including b12197, which introduces automatic loading of libhtp on hexagon platforms, and b12196, which enhances SYCL with exact rounding for various data types. Noteworthy merged features include cleanup for the n_hvx and n_threads in hexagon (PR #31857), and implementation of a group norm kernel for WebGPU (PR #31490). Additionally, a new issue (#31848) was raised concerning a failure in clover quantization due to missing metadata in models, indicating potential challenges that users may face with model loading. Overall, the day showcased significant improvements to performance and compatibility while highlighting ongoing user support issues.

#### 🚀 New Releases
- [b12197](https://github.com/ggml-org/llama.cpp/releases/tag/b12197) b12197
- [b12196](https://github.com/ggml-org/llama.cpp/releases/tag/b12196) b12196
- [b12195](https://github.com/ggml-org/llama.cpp/releases/tag/b12195) b12195
- [b12194](https://github.com/ggml-org/llama.cpp/releases/tag/b12194) b12194
- [b12193](https://github.com/ggml-org/llama.cpp/releases/tag/b12193) b12193
- [b12192](https://github.com/ggml-org/llama.cpp/releases/tag/b12192) b12192
- [b12191](https://github.com/ggml-org/llama.cpp/releases/tag/b12191) b12191
- [b12189](https://github.com/ggml-org/llama.cpp/releases/tag/b12189) b12189
- [b12188](https://github.com/ggml-org/llama.cpp/releases/tag/b12188) b12188
- [b12187](https://github.com/ggml-org/llama.cpp/releases/tag/b12187) b12187

#### ✅ Merged PRs
- [#31859](https://github.com/ggml-org/llama.cpp/pull/31859) server : downgrade per-request proxy logs to trace
- [#31781](https://github.com/ggml-org/llama.cpp/pull/31781) hexagon: support for automatic loading of libhtp without legacy env vars
- [#31465](https://github.com/ggml-org/llama.cpp/pull/31465) sycl: exact rounding in CPY to Q4_1, Q5_1 and Q8_0
- [#31285](https://github.com/ggml-org/llama.cpp/pull/31285) sycl: refuse device buffers that would exceed VRAM
- [#31857](https://github.com/ggml-org/llama.cpp/pull/31857) hexagon: n_hvx and n_threads cleanup
- [#31808](https://github.com/ggml-org/llama.cpp/pull/31808) mtmd: move log-mel computation to cgraph
- [#30857](https://github.com/ggml-org/llama.cpp/pull/30857) sycl: add f16 support for SWIGLU_OAI
- [#31819](https://github.com/ggml-org/llama.cpp/pull/31819) mtmd: support MageVL-Cowork model
- [#30966](https://github.com/ggml-org/llama.cpp/pull/30966) llama_moe_cache: run missed experts on CPU, add tuning script
- [#31853](https://github.com/ggml-org/llama.cpp/pull/31853) moe-cache : pick CPU misses by CRF instead of random
- [#31852](https://github.com/ggml-org/llama.cpp/pull/31852) metal : fix GROUP_NORM for ne03 > 1 and non-contiguous inputs
- [#30779](https://github.com/ggml-org/llama.cpp/pull/30779) server: visit parent slots before child slots
- [#31490](https://github.com/ggml-org/llama.cpp/pull/31490) [WebGPU] Implement group norm kernel
- [#31833](https://github.com/ggml-org/llama.cpp/pull/31833) vulkan: Add 'readonly' to decodeBuf declarations.
- [#31803](https://github.com/ggml-org/llama.cpp/pull/31803) CUDA: fix shared memory bank conflicts in the lightning indexer
- [#31785](https://github.com/ggml-org/llama.cpp/pull/31785) llama : add missing link to pthread
- [#31829](https://github.com/ggml-org/llama.cpp/pull/31829) opencl: add arange
- [#31447](https://github.com/ggml-org/llama.cpp/pull/31447) meta : raise the compute view limit for buffers with few tensors

#### 🐛 New Issues
- [#31848](https://github.com/ggml-org/llama.cpp/issues/31848) Feature Request: clover quantization fails with Failed to load model: This GGUF is missing the metadata key 'clover_moe.expert_shared_count' `enhancement` 💬1
- [#31847](https://github.com/ggml-org/llama.cpp/issues/31847) Eval bug: llama-server hangs indefinitely when loading a ~19 GB model split across TWO RPC backends (single-backend loads work) `bug-unconfirmed` 💬1
- [#31863](https://github.com/ggml-org/llama.cpp/issues/31863) llama-server closes the connection after every streaming (SSE) response while the response advertises "Keep-Alive: timeout=5, max=100" and no "Connection: close" — a client that reuses the connection sometimes fails with "the response ended prematurely" (b11977 and b12182, macOS arm64)
- [#31842](https://github.com/ggml-org/llama.cpp/issues/31842) Misc. bug: Redundant casts in ggml_vec_dot_bf16 cause precision loss and performance drop `bug-unconfirmed`
- [#31840](https://github.com/ggml-org/llama.cpp/issues/31840) Misc. bug: backend sampling repeatedly reallocates pinned host compute buffers as requests finish

#### 🔒 Closed Issues
- [#25904](https://github.com/ggml-org/llama.cpp/issues/25904) Misc. bug: OpenVINO NPU: SIGSEGV/WeightlessCacheAttribute on Intel Core Ultra 7 255H (Linux)
- [#30805](https://github.com/ggml-org/llama.cpp/issues/30805) Eval bug: DIMWIT llamacpp + CRIMINAL huggingface international hijackers break model when people update their models in HF.
- [#27734](https://github.com/ggml-org/llama.cpp/issues/27734) Vulkan: ~78% decode throughput cliff at 131072 context — suballocation fragmentation; fixed via GGML_VK_SUBALLOCATION_BLOCK_SIZE=4 GiB
- [#31140](https://github.com/ggml-org/llama.cpp/issues/31140) Misc. bug: [SYCL] CPY to q4_1/q5_1/q8_0 doesn't match CPU reference
- [#28484](https://github.com/ggml-org/llama.cpp/issues/28484) Misc. bug: Regression- draft-MTP over RPC split generation is 25-30% slower - drafter acceptance unchanged, dense decode unchanged
- [#29295](https://github.com/ggml-org/llama.cpp/issues/29295) tool_choice "required" is advisory, not grammar-enforced (Qwen3, --jinja); a warm KV-cache prefix reliably flips the same near-tie
- [#29313](https://github.com/ggml-org/llama.cpp/issues/29313) Eval bug: stale ggml_gallocr plan reused after OUTPUT flags change, corrupting EAGLE-3 draft candidates
- [#29323](https://github.com/ggml-org/llama.cpp/issues/29323) Misc. bug: CSS loading animation reduces local CUDA throughput on Windows (minimal reproduction)
- [#30855](https://github.com/ggml-org/llama.cpp/issues/30855) Misc. bug: SYCL: SWIGLU_OAI aborts on f16 tensors

### Ollama (`ollama/ollama`)

**Stars:** 186,290 · **Open issues:** 4,608 · **Last push:** 1h ago

On November 8, 2026, Ollama saw no new releases but made notable progress with the merging of two pull requests: #19592 introduced ripple preview support to the MLX runner, while #19587 addressed issues in the launch process by fixing Claude Code routing and correcting retired model errors. Among the new issues reported, #19596 identified a typo in the gemma4:12b-it-qat metadata, specifically an incorrect setting for 'toos' instead of 'tools'. Additionally, issue #19597 raised concerns about the undocumented payload limit for the /api/chat endpoint, which returned a 400 error for requests around 32 MiB in size. Overall, it was a routine day with minor updates and a focus on resolving ongoing concerns.

#### ✅ Merged PRs
- [#19592](https://github.com/ollama/ollama/pull/19592) Add ripple preview support to the MLX runner
- [#19587](https://github.com/ollama/ollama/pull/19587) launch: fix Claude Code routing and retired model errors

#### 🐛 New Issues
- [#19596](https://github.com/ollama/ollama/issues/19596) Typo in gemma4:12b-it-qat metadata / Modelfile (incorrectly set to 'toos' instead of 'tools') `bug` 💬3
- [#19598](https://github.com/ollama/ollama/issues/19598) video ai `feature request`
- [#19597](https://github.com/ollama/ollama/issues/19597) Cloud /api/chat returns 400 "failed to read request body" at ~32 MiB payload (limit undocumented for /api/chat) `cloud`
- [#19595](https://github.com/ollama/ollama/issues/19595) Add the ability to add an API to Ollama if you expose to LAN or for programs such as cloudflare `feature request`

#### 🔒 Closed Issues
- [#18825](https://github.com/ollama/ollama/issues/18825) Failed to pull `embeddinggemma-2:740m` on linux
- [#19598](https://github.com/ollama/ollama/issues/19598) video ai
- [#19595](https://github.com/ollama/ollama/issues/19595) Add the ability to add an API to Ollama if you expose to LAN or for programs such as cloudflare

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,883 · **Open issues:** 5,715 · **Last push:** <1h ago

Today, LiteLLM released version v1.110.0-dev.1, which includes a signed Docker image that can be verified using a specific commit hash for enhanced security. The latest Long-Term Support (LTS) version, v1.108.3, was also made available, with a recommendation to pull the `lts` tag for updates. Among the noteworthy merged pull requests, the addition of per-request header options in the proxy stream and enhancements to the cost map for moonshot/kimi-k3.1-pro-highspeed pricing stand out. Additionally, several bugs were addressed, including the fix for mid-stream upstream errors in responses and issues with Google OIDC token refresh. A notable new issue reported was the missing entry for moonshot/kimi-k3.1-pro-highspeed in the cost map, suggesting ongoing refinements in pricing features.

#### 🚀 New Releases
- [v1.110.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-dev.1) v1.110.0-dev.1
- [v1.108.3](https://github.com/BerriAI/litellm/releases/tag/v1.108.3) 1.108.3 (LTS)

#### ✅ Merged PRs
- [#50578](https://github.com/BerriAI/litellm/pull/50578) fix(completion): accept a tool_choice that forces an OpenAI hosted tool
- [#50574](https://github.com/BerriAI/litellm/pull/50574) feat(proxy): per-request header opts a stream into usage.cost without the global include_cost_in_streaming_usage flag
- [#50486](https://github.com/BerriAI/litellm/pull/50486) fix(router): a cancelled or retried attempt releases its io-token reservation and least-busy count
- [#50550](https://github.com/BerriAI/litellm/pull/50550) test(proxy): delete 28 dead skipped tests in test_key_generate_prisma.py
- [#50583](https://github.com/BerriAI/litellm/pull/50583) fix(anthropic): exchange Google identity tokens again on refresh and read oidc/ references out of ANTHROPIC_IDENTITY_TOKEN
- [#50575](https://github.com/BerriAI/litellm/pull/50575) refactor(ui): clear hardcoded English from dashboard JSX
- [#50538](https://github.com/BerriAI/litellm/pull/50538) feat(cost-map): add moonshot/kimi-k3.1-pro-highspeed pricing (#50521)
- [#50576](https://github.com/BerriAI/litellm/pull/50576) test(translation): expect redacted thinking blocks on Azure and Bedrock Mantle messages after #49076
- [#50570](https://github.com/BerriAI/litellm/pull/50570) fix(anthropic): refresh the WIF bearer token on the connection error retry
- [#50551](https://github.com/BerriAI/litellm/pull/50551) fix(proxy): hold DB_RECONCILE_LOCK around credential create, update and delete
- [#50498](https://github.com/BerriAI/litellm/pull/50498) fix(otel): name the routed model on auto-router LLM spans
- [#49761](https://github.com/BerriAI/litellm/pull/49761) test(integration): budget proxy restart tests from calibrated boot time
- [#50569](https://github.com/BerriAI/litellm/pull/50569) test(integration): give each kill-burst its own prompts so cached control replies cannot stand in for late traffic
- [#50466](https://github.com/BerriAI/litellm/pull/50466) fix(responses): surface mid-stream upstream errors that arrive without an event type
- [#50032](https://github.com/BerriAI/litellm/pull/50032) fix(mcp): derive MCP bridge and session keys with the FIPS provider's KBKDF
- [#50552](https://github.com/BerriAI/litellm/pull/50552) feat(ui): set deployment weights in key and team router settings
- [#50494](https://github.com/BerriAI/litellm/pull/50494) test(e2e): add a Codex row where a sub-agent must read the task its parent hands it
- [#50541](https://github.com/BerriAI/litellm/pull/50541) fix(anthropic): reasoning_effort "none" disables thinking on Claude models that think by default
- [#50268](https://github.com/BerriAI/litellm/pull/50268) feat(guardrails): add prebuilt credential patterns for OpenAI, Anthropic, and Gemini
- [#50548](https://github.com/BerriAI/litellm/pull/50548) fix(cost-map): update Together Qwen3.7-Max pricing and add Rnj-1 Instruct
- [#50491](https://github.com/BerriAI/litellm/pull/50491) feat(cost-map): move -latest model aliases into the cost map
- [#49076](https://github.com/BerriAI/litellm/pull/49076) fix(chatgpt): round-trip encrypted reasoning through /v1/messages
- [#50545](https://github.com/BerriAI/litellm/pull/50545) chore: bump litellm to 1.108.3 on lts/1.108.x
- [#50543](https://github.com/BerriAI/litellm/pull/50543) refactor: read lazy attributes with getattr instead of a TypedDict wrapper
- [#50512](https://github.com/BerriAI/litellm/pull/50512) feat(cost-map): read alias_of pointer rows in the catalog and the loader
- [#50542](https://github.com/BerriAI/litellm/pull/50542) fix(utils): drop Anthropic-only output_config under drop_params on providers that do not read it
- [#50529](https://github.com/BerriAI/litellm/pull/50529) fix(cost-map): sync OpenAI fine-tune and Codestral 2405 shutdown dates
- [#50523](https://github.com/BerriAI/litellm/pull/50523) refactor: declare each lazy litellm attribute once and resolve them through one function
- [#50244](https://github.com/BerriAI/litellm/pull/50244) fix(vertex_ai): return 400 instead of 500 when Gemini image edit has no image
- [#50470](https://github.com/BerriAI/litellm/pull/50470) fix(anthropic): preserve streamed tool argument fragments verbatim
- [#50519](https://github.com/BerriAI/litellm/pull/50519) fix(azure): add data zone rows for gpt-realtime-2.1, gpt-realtime-2.1-mini and gpt-realtime-1.5
- [#50473](https://github.com/BerriAI/litellm/pull/50473) fix(redis): share one native circuit breaker between RedisCache and the Rust stores
- [#48942](https://github.com/BerriAI/litellm/pull/48942) fix(vertex_ai): authenticate Vertex AI pass-through requests once
- [#50509](https://github.com/BerriAI/litellm/pull/50509) fix(azure): align chat-latest retirement metadata with its documented alias
- [#50480](https://github.com/BerriAI/litellm/pull/50480) fix(gemini): add Gemini 2.5 Pro flex cache price above 200k tokens
- [#50057](https://github.com/BerriAI/litellm/pull/50057) fix(caching): don't cache or replay a reply that has no output
- [#50499](https://github.com/BerriAI/litellm/pull/50499) feat(azure_ai): add cohere-rerank-v5-pro and -fast from the Azure retail price feed
- [#47980](https://github.com/BerriAI/litellm/pull/47980) fix(proxy)!: preserve Responses SSE event framing
- [#50135](https://github.com/BerriAI/litellm/pull/50135) feat(spend-logs): turn off prompt storage per key or team
- [#50445](https://github.com/BerriAI/litellm/pull/50445) fix(router): record retries and fallback hops past a request's first logged failure
- [#50487](https://github.com/BerriAI/litellm/pull/50487) test(e2e): backport the e2e speedup and main's CI cleanups to lts/1.108.x
- [#50484](https://github.com/BerriAI/litellm/pull/50484) fix(mcp): backport #47034 to lts/1.108.x
- [#50490](https://github.com/BerriAI/litellm/pull/50490) fix(xai): honor deployment input_cost_per_pixel for xAI image costs

#### 🐛 New Issues
- [#50521](https://github.com/BerriAI/litellm/issues/50521) [Bug]: moonshot/kimi-k3.1-pro-highspeed missing from cost map `llm translation` 💬2
- [#50514](https://github.com/BerriAI/litellm/issues/50514) [Bug]: Bedrock Invoke /v1/messages stream keeps generating after the detached-drain abort - httpx response is never closed `llm translation` 💬2
- [#50598](https://github.com/BerriAI/litellm/issues/50598) [Bug]: Raw-JWT MCP tool discovery depends on database team membership order `bug` 💬1
- [#50596](https://github.com/BerriAI/litellm/issues/50596) [Bug]: JWT model discovery depends on team membership order while inference authorization works correctly `bug` `llm translation` 💬1
- [#50530](https://github.com/BerriAI/litellm/issues/50530) [Bug]: Responses-to-Chat streaming ends with finish_reason "stop" after a streamed tool call when response.completed has empty output `llm translation` 💬1
- [#50566](https://github.com/BerriAI/litellm/issues/50566) [Bug]: litellm.completion rejects a tool_choice forcing a hosted tool, such as {"type": "web_search"}, which the Responses API accepts `llm translation`
- [#50553](https://github.com/BerriAI/litellm/issues/50553) [Bug]: Google OIDC references do not refresh Anthropic WIF reliably `llm translation`
- [#50588](https://github.com/BerriAI/litellm/issues/50588) [Bug]: a guardrail block on /v1/responses is not marked as content_filter
- [#50586](https://github.com/BerriAI/litellm/issues/50586) [Bug]: unified guardrails make the spend log lose session_id and spend_logs_metadata on /v1/chat/completions
- [#50584](https://github.com/BerriAI/litellm/issues/50584) [Feature]: let a guardrail ignore key/team opt-outs (allow_opt_out: false)
- [#50554](https://github.com/BerriAI/litellm/issues/50554) [Bug]: Anthropic WIF requests can retry with an expired Authorization header `llm translation`
- [#50535](https://github.com/BerriAI/litellm/issues/50535) [Bug]: SAP provider cannot send images in tool-result messages `llm translation` `claude code`
- [#50528](https://github.com/BerriAI/litellm/issues/50528) [Bug]: Responses client disconnect leaves full budget reservation after HTTP 499
- [#50505](https://github.com/BerriAI/litellm/issues/50505) [Bug]: Streaming chat completions with n>1 report the wrong finish_reason per choice `llm translation` `claude code`
- [#50503](https://github.com/BerriAI/litellm/issues/50503) [Bug]: Vertex Gemini Pro cache writes above 200k tokens are billed at 0.25 USD/M, so a bigger prompt costs less `llm translation` `claude code`

#### 🔒 Closed Issues
- [#47924](https://github.com/BerriAI/litellm/issues/47924) [Bug]: reasoning_effort="none" omits thinking instead of disabling it on default-on Claude models
- [#49046](https://github.com/BerriAI/litellm/issues/49046) [Bug]: `chatgpt/` provider drops encrypted reasoning on `/v1/messages`, so it is never replayed between tool calls
- [#35589](https://github.com/BerriAI/litellm/issues/35589) [Bug]: amazon_nova streaming fails 100% - httpx zstd decoder reuses a finished decompressobj on Nova's multi-frame SSE
- [#46465](https://github.com/BerriAI/litellm/issues/46465) [Bug]: GoogleAIStudioTokenCounter.count_tokens passes contents=None for /v1/messages/count_tokens (missed in #36981)
- [#50173](https://github.com/BerriAI/litellm/issues/50173) [Bug]: /v1/images/edits on vertex_ai Gemini with no image returns 500 (ValueError not mapped to 400)
- [#49998](https://github.com/BerriAI/litellm/issues/49998) [Bug]: /v1/messages answers 503 "authentication database is temporarily unreachable" when the upstream call fails
- [#35177](https://github.com/BerriAI/litellm/issues/35177) [Bug]: `user_url_allowed_hosts` works under `general_settings` but not under `litellm_settings`
- [#45515](https://github.com/BerriAI/litellm/issues/45515) [Feature]: Support OpenAI Decisions API as an auto-router classifier backend
- [#45575](https://github.com/BerriAI/litellm/issues/45575) [Bug]: stream_chunk_builder drops Bedrock thinking_blocks that carry a signature but no text (Claude Sonnet 5, display omitted)
- [#12118](https://github.com/BerriAI/litellm/issues/12118) [Bug]: Callbacks added through the UI overwrite callbacks set in config
- [#28242](https://github.com/BerriAI/litellm/issues/28242) [Bug]: vectorStores.retrieve/delete fail with model=None while vectorStores.create/files.* work
- [#34698](https://github.com/BerriAI/litellm/issues/34698) Bug issue
- [#35403](https://github.com/BerriAI/litellm/issues/35403) Per-request x-mcp-{server_alias}-authorization header not applied to MCP server auth resolution (resolves as no-auth)
- [#35578](https://github.com/BerriAI/litellm/issues/35578) [Bug]: Mid-stream fallback resolves `fallbacks` by the selected deployment instead of the requested model_group, discarding the entire chain
- [#49931](https://github.com/BerriAI/litellm/issues/49931) [Bug]: anthropic.messages.acreate(stream=True) caches an empty reply from a non-Anthropic model and replays it on every repeat
- [#50521](https://github.com/BerriAI/litellm/issues/50521) [Bug]: moonshot/kimi-k3.1-pro-highspeed missing from cost map
- [#35342](https://github.com/BerriAI/litellm/issues/35342) [Bug]: MCP Toolset Compatibility Issues
- [#35583](https://github.com/BerriAI/litellm/issues/35583) [Bug]: MCP Servers documentation uses PROXY_BASE_URL instead of LITELLM_UI_API_DOC_BASE_URL
- [#35595](https://github.com/BerriAI/litellm/issues/35595) [Bug]: NotConnectedError on startup under systemd, all versions from 1.87.0 onward (1.86.0 works) — uv/venv install, Debian 13
- [#35605](https://github.com/BerriAI/litellm/issues/35605) [Bug]: make test-unit fails at collection on a fresh clone due to duplicate test basenames
- [#50266](https://github.com/BerriAI/litellm/issues/50266) [Feature]: Inbuilt credential masking guardrails for OpenAI, Anthropic, and Gemini API keys
- [#50566](https://github.com/BerriAI/litellm/issues/50566) [Bug]: litellm.completion rejects a tool_choice forcing a hosted tool, such as {"type": "web_search"}, which the Responses API accepts
- [#50553](https://github.com/BerriAI/litellm/issues/50553) [Bug]: Google OIDC references do not refresh Anthropic WIF reliably
- [#50554](https://github.com/BerriAI/litellm/issues/50554) [Bug]: Anthropic WIF requests can retry with an expired Authorization header
- [#50273](https://github.com/BerriAI/litellm/issues/50273) [Bug]: Credential create/update/delete can be undone in memory by a concurrent reload (credential endpoints don't take MODEL_RECONCILE_LOCK)
- [#47944](https://github.com/BerriAI/litellm/issues/47944) [Bug]: Streamed /v1/responses through the proxy has no SSE `event:` lines and ends with `data: [DONE]`

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,166 · **Open issues:** 470 · **Last push:** <1h ago

On November 8, 2026, there were no new releases for Unsloth, but several significant pull requests were merged. Notably, enhancements to the Studio diffusion model included the decoding of image VAEs into a single expandable allocator segment, which improves VRAM efficiency by 1.15 GiB. Other key developments included upgrades to the Unsloth Studio for smoother spoken replies using the LFM3 model and improvements in tensor parallel loading and gradient handling. A particularly pressing new issue was reported regarding repeated full prompt processing across turns with the Qwen hybrid model after tool use, highlighting potential user experience concerns that may need attention.

#### ✅ Merged PRs
- [#17043](https://github.com/unslothai/unsloth/pull/17043) PPO / RLOO fused log-probs: fall back under torch global module hooks
- [#17038](https://github.com/unslothai/unsloth/pull/17038) FSDP2 sharded loading: allow orthogonal LoRA init
- [#17045](https://github.com/unslothai/unsloth/pull/17045) Studio diffusion: decode image VAEs into one expandable allocator segment (SDXL holds 1.15 GiB less VRAM)
- [#15259](https://github.com/unslothai/unsloth/pull/15259) ORPO / CPO / DPO / KTO chunked head: fall back under torch's global module hooks
- [#15218](https://github.com/unslothai/unsloth/pull/15218) Tensor parallel sharded loading: allow init_lora_weights = "orthogonal"
- [#15257](https://github.com/unslothai/unsloth/pull/15257) TP x FSDP2 save: one writer when only tp-mesh DTensors remain
- [#17055](https://github.com/unslothai/unsloth/pull/17055) Studio tests: drain deferred work before the auth refresh fixture restores window
- [#16972](https://github.com/unslothai/unsloth/pull/16972) Unsloth Studio: LFM3 spoken replies and read aloud on the transformers backend
- [#16973](https://github.com/unslothai/unsloth/pull/16973) Unsloth Studio: train and export LFM3-Audio-2B (LoRA, merged 16-bit, GGUF)
- [#16893](https://github.com/unslothai/unsloth/pull/16893) Context parallel: Unsloth's fast Mistral, Granite and Cohere attention, and DPO / GRPO on fast Qwen3
- [#16881](https://github.com/unslothai/unsloth/pull/16881) Refuse fp8 training layers under tensor parallel instead of silently training in 16 bit
- [#17044](https://github.com/unslothai/unsloth/pull/17044) Studio int8 GEMM: read and write the tile race cache as UTF-8
- [#17013](https://github.com/unslothai/unsloth/pull/17013) Studio: auto runs compiled int8 W8A8 for Qwen-Image families on RDNA
- [#17036](https://github.com/unslothai/unsloth/pull/17036) Studio int8 GEMM: keep sm8x GPUs on cuBLAS under Triton 3.8+, where every shipped tile spills
- [#15630](https://github.com/unslothai/unsloth/pull/15630) Studio: Live monitor with CPU, memory and per-GPU rows, Unsloth's share by model, and a refresh rate
- [#15169](https://github.com/unslothai/unsloth/pull/15169) Unsloth Studio / Desktop: the Images page Compare grid, for API callers (server-rendered X/Y grid, no UI change)
- [#17037](https://github.com/unslothai/unsloth/pull/17037) Tests: let the RAG re-embed and embedder alias tests run on macOS and Windows
- [#17041](https://github.com/unslothai/unsloth/pull/17041) Studio: name the Cosmos guardrail module outright so the risky-loader lint passes on main
- [#17026](https://github.com/unslothai/unsloth/pull/17026) Studio diffusion: race the unlisted-arch int8 GEMM tiles held under load (RTX 3090 class: Qwen-Image-2.1 -10%, MiniMax-H3 -9%)
- [#17040](https://github.com/unslothai/unsloth/pull/17040) Tests: update two contract tests that #16953 and #16927 left red on main
- [#16744](https://github.com/unslothai/unsloth/pull/16744) Unsloth Studio: show why a video generation failed instead of only "Video generation failed."
- [#17000](https://github.com/unslothai/unsloth/pull/17000) Studio: stream the LTX-2.5 text encode on the card under a VRAM budget, no per-prompt encoder copy back
- [#16742](https://github.com/unslothai/unsloth/pull/16742) Unsloth Studio: Cosmos3 guardrail refusal names the gated nvidia/Cosmos-1.0-Guardrail repo
- [#17021](https://github.com/unslothai/unsloth/pull/17021) Studio: hide the Model hub list under an open model page
- [#17005](https://github.com/unslothai/unsloth/pull/17005) Studio: answer shortcut availability checks from registered surfaces, not the whole document
- [#16857](https://github.com/unslothai/unsloth/pull/16857) Studio: memory-map an oversized load on an integrated GPU and read its lookup tables from disk
- [#15633](https://github.com/unslothai/unsloth/pull/15633) Block Swap blocker: offload_layers never engages on Qwen3.8-Flash-Next, the CPU-kept n-gram table makes the map look like two devices
- [#16513](https://github.com/unslothai/unsloth/pull/16513) Unsloth Studio (AMD): retry an unpinned llama-server arch crash on the cards the build has kernels for
- [#16824](https://github.com/unslothai/unsloth/pull/16824) fix(studio): heal tool calls in the model's own format on the in-process route
- [#16974](https://github.com/unslothai/unsloth/pull/16974) Unsloth Studio: AMD: skip LFM3's Triton conv and flex attention on ROCm cards Triton cannot build for
- [#16955](https://github.com/unslothai/unsloth/pull/16955) Unsloth Studio: read aloud starts speaking after the first sentence instead of after the whole reply
- [#16977](https://github.com/unslothai/unsloth/pull/16977) Studio: switch light and dark without starting a transition on every element under Reduce motion
- [#17024](https://github.com/unslothai/unsloth/pull/17024) Studio: refuse sandbox connects to cloud metadata addresses at runtime
- [#16966](https://github.com/unslothai/unsloth/pull/16966) Unsloth Studio: shorter new-architecture dialog, one Update button, custom code under Other
- [#16958](https://github.com/unslothai/unsloth/pull/16958) Studio: keep chat, time format and spell check settings per account
- [#16755](https://github.com/unslothai/unsloth/pull/16755) Unsloth Studio: keep tabs signed in on plain-HTTP origins when two refresh at once
- [#16936](https://github.com/unslothai/unsloth/pull/16936) Studio: keep the first in-loop cut for later tool rounds in chats without a saved thread
- [#16989](https://github.com/unslothai/unsloth/pull/16989) Studio: keep search icons sharp under the Glass theme on non-chat pages
- [#17022](https://github.com/unslothai/unsloth/pull/17022) Tests: let the install damage and reinstall hint tests run on Windows
- [#16811](https://github.com/unslothai/unsloth/pull/16811) Run Claude Code and Codex on MLX models
- [#16964](https://github.com/unslothai/unsloth/pull/16964) Studio: pick which LoRA to add from a searchable list instead of cycling through them
- [#17014](https://github.com/unslothai/unsloth/pull/17014) Studio: report the LTX-2.5 encoder worker host memory on macOS and Windows too
- [#16949](https://github.com/unslothai/unsloth/pull/16949) Studio: keep Hermes MCP servers in unsloth start hermes
- [#16929](https://github.com/unslothai/unsloth/pull/16929) Studio: accept zstd-compressed requests from the TypeSafe SDK
- [#16835](https://github.com/unslothai/unsloth/pull/16835) Studio: keep same-second fine-tuning jobs in submission order across restarts
- [#17006](https://github.com/unslothai/unsloth/pull/17006) Studio: key the modal pointer-lock rules off attributes that never sit above the thread
- [#16951](https://github.com/unslothai/unsloth/pull/16951) Studio: keep the base URL query string on connection requests
- [#16927](https://github.com/unslothai/unsloth/pull/16927) Studio: reload an idle-unloaded GGUF with its original launch settings
- [#17009](https://github.com/unslothai/unsloth/pull/17009) CI: key the Playwright browser caches on the OS release, and move the WebKit jobs back to ubuntu-latest
- [#16947](https://github.com/unslothai/unsloth/pull/16947) Studio: keep Codex AGENTS.md, skills and rules in unsloth start codex
- [#16953](https://github.com/unslothai/unsloth/pull/16953) Studio: stop cutting Claude answers at 1,024 tokens without a limit
- [#16865](https://github.com/unslothai/unsloth/pull/16865) Studio: cap chat code blocks at a scrollable height and keep them coloured while scrolling
- [#16950](https://github.com/unslothai/unsloth/pull/16950) Studio: show an error when ChatGPT sign-in is denied
- [#16948](https://github.com/unslothai/unsloth/pull/16948) Studio: auto-start the server from the same install as unsloth start
- [#17012](https://github.com/unslothai/unsloth/pull/17012) Studio CI: guard the long-chat gate Glass ceilings against runner noise
- [#16930](https://github.com/unslothai/unsloth/pull/16930) Studio: stop Export all chats from saving an empty or stale backup
- [#16952](https://github.com/unslothai/unsloth/pull/16952) Studio: Agents tab says unsloth start claude needs a GGUF model
- [#16946](https://github.com/unslothai/unsloth/pull/16946) Studio: offer ChatGPT Reconnect for reused or revoked refresh tokens
- [#16937](https://github.com/unslothai/unsloth/pull/16937) Studio: block more metadata host spellings for approved Python
- [#16984](https://github.com/unslothai/unsloth/pull/16984) Studio: size the popular audio.cpp TTS and music models from measured peaks on each runtime backend
- [#16926](https://github.com/unslothai/unsloth/pull/16926) Studio: keep messages from another window when deleting in a stale one
- [#16945](https://github.com/unslothai/unsloth/pull/16945) Studio: stop OpenAI chats failing on earlier replies sent as parts
- [#16954](https://github.com/unslothai/unsloth/pull/16954) Studio: show DeepSeek Harness as installed on Windows
- [#16944](https://github.com/unslothai/unsloth/pull/16944) Studio: let unsloth start attach to a loaded Ollama model
- [#17001](https://github.com/unslothai/unsloth/pull/17001) Studio: start a first video load's cache writes after its first render
- [#17002](https://github.com/unslothai/unsloth/pull/17002) Studio: quantise the hosted int8 leftovers on the GPU on offloaded loads
- [#17003](https://github.com/unslothai/unsloth/pull/17003) Studio CI: long-chat gate Glass ceilings back to 10x (areas) and 18x (Settings scroll)
- [#16853](https://github.com/unslothai/unsloth/pull/16853) Studio images: render on the NVIDIA card when torch drives no GPU
- [#16727](https://github.com/unslothai/unsloth/pull/16727) Studio RAG: embed the documents of one ingest together instead of one call per document
- [#16888](https://github.com/unslothai/unsloth/pull/16888) Studio: realtime option for speed and context stats, shorter Chat defaults
- [#16718](https://github.com/unslothai/unsloth/pull/16718) Studio: keep compacted turns searchable when the archive embedder fails
- [#16876](https://github.com/unslothai/unsloth/pull/16876) Studio: show long thinking in a capped box that scrolls on its own instead of Expand thinking
- [#16815](https://github.com/unslothai/unsloth/pull/16815) Studio sd.cpp: image render failures carry sd-server's own output
- [#16993](https://github.com/unslothai/unsloth/pull/16993) Diffusion route tests: pin a compiling host for the tests that expect fp8 to be admitted
- [#16923](https://github.com/unslothai/unsloth/pull/16923) Inline images: give a slow sandbox image load a bounded grace and say why it timed out
- [#16981](https://github.com/unslothai/unsloth/pull/16981) Studio diffusion: faster returning first render and first clip (reuse tuned reductions, warm video compile keys)
- [#16939](https://github.com/unslothai/unsloth/pull/16939) Studio: ship built-in float specialisations so a fresh install's first compiled render traces once
- [#16987](https://github.com/unslothai/unsloth/pull/16987) CI: run the Playwright WebKit jobs on ubuntu-24.04 while ubuntu-latest is 26.04
- [#16922](https://github.com/unslothai/unsloth/pull/16922) Scan baseline: re-review the seven unsloth-zoo sites 2026.11.3 moved
- [#16934](https://github.com/unslothai/unsloth/pull/16934) Studio diffusion: return the heap a finished image load freed to the OS
- [#16986](https://github.com/unslothai/unsloth/pull/16986) Studio: skip layout of distant messages so the browser pane opens fast on long chats
- [#16983](https://github.com/unslothai/unsloth/pull/16983) Studio: stop dialog open and close from rescanning a long chat for every shortcut
- [#16985](https://github.com/unslothai/unsloth/pull/16985) Studio CI: long-chat gate measures the dialog lock again before failing

#### 🐛 New Issues
- [#17015](https://github.com/unslothai/unsloth/issues/17015) Studio: repeated full prompt processing across turns with Qwen hybrid model after tool use 💬3
- [#17004](https://github.com/unslothai/unsloth/issues/17004) [Bug] Model Hub UI rendering issues — overlapping content and misplaced images `feature request` `bug` 💬2
- [#17054](https://github.com/unslothai/unsloth/issues/17054) Pipeline parallel on the CPU backend: MoE router aux loss diverges from one process at gradient accumulation > 1 💬1
- [#17048](https://github.com/unslothai/unsloth/issues/17048) [Feature] Allow sourcing /opt/intel/oneapi/setvars.sh before running llama-server to enable SYCL `feature request` 💬1
- [#17017](https://github.com/unslothai/unsloth/issues/17017) [Bug] LAN addresses do not allow bind to network bridge with IP address (bug since it is a LAN Address) `feature request` `bug` 💬1
- [#17062](https://github.com/unslothai/unsloth/issues/17062) [Feature] Upload video limited at 64MB, make it bigger please `feature request`
- [#17016](https://github.com/unslothai/unsloth/issues/17016) [Feature] Add a fullscreen mode on the desktop software. `feature request`
- [#16992](https://github.com/unslothai/unsloth/issues/16992) [Feature] Project indexing should have a pause button or dynamic ressource management `feature request`
- [#16991](https://github.com/unslothai/unsloth/issues/16991) [Bug] Please stop adding nul files to the working directory `feature request` `bug`

#### 🔒 Closed Issues
- [#16706](https://github.com/unslothai/unsloth/issues/16706) [Bug] `search_conversation` tool totally disappeared (3rd time)
- [#16962](https://github.com/unslothai/unsloth/issues/16962) [Bug] Search icon blurred in model hub
- [#17004](https://github.com/unslothai/unsloth/issues/17004) [Bug] Model Hub UI rendering issues — overlapping content and misplaced images
- [#16803](https://github.com/unslothai/unsloth/issues/16803) [Bug]: Image generation falls back to CPU/RAM on Windows 11 with RTX 3060 while text generation correctly uses GPU
- [#16715](https://github.com/unslothai/unsloth/issues/16715) RAG ingest embeds one document at a time: ~99 ms/chunk on the batch-of-1 path vs 2.07 ms batched
- [#16982](https://github.com/unslothai/unsloth/issues/16982) [Bug] studio does not allow searching for models that do not "fit" on system
- [#16900](https://github.com/unslothai/unsloth/issues/16900) [Feature Request] Allow selecting a specific LoRA when clicking "Add LoRA"

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,182 · **Open issues:** 400 · **Last push:** 19h ago

On November 8, 2026, AIBrix experienced a routine maintenance day with no new releases or issues reported. Notable developments included the merging of pull request #3375, which addresses a bug to ensure that the session-key Redis read honors its 500 ms budget, enhancing performance reliability. Additionally, pull request #3394 was merged to clarify how new claims are accommodated in the ModelClaim guide, providing clearer documentation for users. Overall, the updates focused on bug fixes and documentation improvements without introducing new features.

#### ✅ Merged PRs
- [#3375](https://github.com/vllm-project/aibrix/pull/3375) [Bug] Make the session-key Redis read honor its 500 ms budget
- [#3394](https://github.com/vllm-project/aibrix/pull/3394) [Docs] Clarify how new claims get room in the ModelClaim guide

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,415 · **Open issues:** 628 · **Last push:** 5h ago

On November 8, 2026, there were no new releases for Semantic Router, but several notable pull requests were merged. Key updates included the addition of tests for retained bench checks and owners in PR #5433, as well as validation of the Codex CLI subagent identity within Router Learning protection in PR #5902. Additionally, PR #5883 provided documentation on integrating Runkite with vLLM Semantic Router for managing multiple models in a single conversation. New issues surfaced, with the most pressing being bug reports for a streamed tool call that results in an API error when cut by the output limit in issue #5971, and a problem with the [DONE] sentinel causing a completed chat stream to generate a server error in issue #5965.

#### ✅ Merged PRs
- [#5433](https://github.com/vllm-project/semantic-router/pull/5433) [Test] Register retained bench checks and owners
- [#5902](https://github.com/vllm-project/semantic-router/pull/5902) [Test] Validate Codex CLI subagent identity in Router Learning protection
- [#5883](https://github.com/vllm-project/semantic-router/pull/5883) [Docs] One Conversation, Multiple Models: Runkite and vLLM Semantic Router

#### 🐛 New Issues
- [#5956](https://github.com/vllm-project/semantic-router/issues/5956) [CI/Build] Keep PR Gate state aligned with the tested PR revision `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#5971](https://github.com/vllm-project/semantic-router/issues/5971) [Bug] A streamed tool call cut by the output limit ends in an API error `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#5965](https://github.com/vllm-project/semantic-router/issues/5965) [Bug] A repeated [DONE] sentinel turns a completed Chat stream into a server_error frame `needs-acceptance` `wg/data-plane-networking` 💬1

#### 🔒 Closed Issues
- [#3970](https://github.com/vllm-project/semantic-router/issues/3970) [Research] Evaluate Jev as an optional remote classifier backend
- [#3613](https://github.com/vllm-project/semantic-router/issues/3613) [Feature] Add initial Groq production model mappings
- [#3831](https://github.com/vllm-project/semantic-router/issues/3831) [Bug] Vela Guard misclassifies fixed benign and attack inputs on CPU and AMD
- [#3671](https://github.com/vllm-project/semantic-router/issues/3671) [Feature] Complexity backend follow-ups deliberately left out of #3542
- [#3602](https://github.com/vllm-project/semantic-router/issues/3602) [Feature] Admit Perplexity / Sonar to the built-in Model Card catalog
- [#3664](https://github.com/vllm-project/semantic-router/issues/3664) [Feature] Migrate KNN selector training to the unified contract
- [#3726](https://github.com/vllm-project/semantic-router/issues/3726) [Feature] Add per-backend circuit breaker for remote classifiers
- [#3665](https://github.com/vllm-project/semantic-router/issues/3665) [Feature] Migrate KMeans selector training to the unified contract
- [#3608](https://github.com/vllm-project/semantic-router/issues/3608) [Feature] Add Snowflake Cortex AI as a built-in serving provider
- [#3988](https://github.com/vllm-project/semantic-router/issues/3988) [Feature] Calibrate one signal score family onto a declared comparable scale
- [#4484](https://github.com/vllm-project/semantic-router/issues/4484) [Bug] Contributor leaderboard refresh cannot open its PR; snapshot stale for 17 days
- [#5391](https://github.com/vllm-project/semantic-router/issues/5391) [Test] Validate Codex CLI subagent identity in Router Learning protection
- [#3663](https://github.com/vllm-project/semantic-router/issues/3663) [Feature] Build selector data, objective, feature, evaluation, and parity foundations
- [#3661](https://github.com/vllm-project/semantic-router/issues/3661) [Feature] Define canonical training resources, RunGraph, and API contracts
- [#3578](https://github.com/vllm-project/semantic-router/issues/3578) [Feature] Expand AI21 Labs Model Cards and reproduced v1 benchmark coverage
- [#4073](https://github.com/vllm-project/semantic-router/issues/4073) [Feature] Filter OMP tools while keeping provider configuration in OMP
- [#3459](https://github.com/vllm-project/semantic-router/issues/3459) [Feature] Add HierShrink: training-free model selector for sparse observations
- [#3410](https://github.com/vllm-project/semantic-router/issues/3410) [Test] Local smoke check that real clients work against the router
- [#3536](https://github.com/vllm-project/semantic-router/issues/3536) [Research] Evaluate response-length prediction as a downstream admission hint
- [#4647](https://github.com/vllm-project/semantic-router/issues/4647) [Feature] Router: author custom request graphs in the routing configuration
- [#4381](https://github.com/vllm-project/semantic-router/issues/4381) [Feature] Log selection propensity in OfflineDatasetRecord for off-policy correction
- [#4369](https://github.com/vllm-project/semantic-router/issues/4369) [Epic] Make RAG plugin configuration fail-closed and hybrid retrieval deterministic
- [#3687](https://github.com/vllm-project/semantic-router/issues/3687) [Feature] RFC: Define and protect the production routing core
- [#3660](https://github.com/vllm-project/semantic-router/issues/3660) [Epic] Deliver a capability-driven Router Training Studio
- [#5421](https://github.com/vllm-project/semantic-router/issues/5421) [Bug] `/ci run` is rejected when main advances after the PR's merge revision was computed
- [#5879](https://github.com/vllm-project/semantic-router/issues/5879) [Docs] Run multi-model AI SDK agents with Runkite and vLLM Semantic Router
- [#4673](https://github.com/vllm-project/semantic-router/issues/4673) [Research] Decision-accuracy vs. latency frontier for mitigation candidates
- [#4672](https://github.com/vllm-project/semantic-router/issues/4672) [Research] Heterogeneous-backbone comparison arm (mmBERT-32K subset)
- [#4521](https://github.com/vllm-project/semantic-router/issues/4521) [Feature] Qualify sticky tool selection with provider-prefix E2E and operational telemetry (#3347 Phase 5)
- [#4520](https://github.com/vllm-project/semantic-router/issues/4520) [Feature] Add Redis storage and bounded recovery for sticky tool sets (#3347 Phase 4)
- [#3921](https://github.com/vllm-project/semantic-router/issues/3921) [Feature] Move DeepSeek and OpenRouter request dialects into bounded protocol codec adapters
- [#3961](https://github.com/vllm-project/semantic-router/issues/3961) [Feature] Audit and strengthen generated API contract coverage
- [#3920](https://github.com/vllm-project/semantic-router/issues/3920) [Feature] Define and verify the media path under full-duplex-streamed request bodies
- [#3669](https://github.com/vllm-project/semantic-router/issues/3669) [Feature] Add hardware-aware training workers, leases, and scheduling
- [#3670](https://github.com/vllm-project/semantic-router/issues/3670) [Feature] Build the capability-driven Console Training Studio and vertical slices
- [#3668](https://github.com/vllm-project/semantic-router/issues/3668) [Feature] Add an ArchitectureDriver SDK and generic fine-tune executor
- [#3667](https://github.com/vllm-project/semantic-router/issues/3667) [Feature] Migrate MLP selector training with validation and runtime parity
- [#3666](https://github.com/vllm-project/semantic-router/issues/3666) [Feature] Replace approximate SVM export with a conformant unified trainer
- [#5742](https://github.com/vllm-project/semantic-router/issues/5742) [Docs] The listener timeout is described as an idle timeout but bounds the whole call

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*