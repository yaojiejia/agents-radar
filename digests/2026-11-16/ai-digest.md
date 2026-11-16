# 📡 AI Ecosystem Digest — 2026-11-16

> Generated 2026-11-16 02:36 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 155,797 | 29 | 1 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 135,421 | 17 | 6 | 17 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,851 | 0 | 0 | 0 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,418 | 7 | 5 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 227,068 | 34 | 17 | 5 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,550 | 29 | 10 | 6 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,536 | 112 | 74 | 178 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 263,655 | 21 | 5 | 1 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,985 | 14 | 5 | 28 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,917 | 8 | 19 | 72 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 135,217 | 25 | 27 | 20 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 187,117 | 4 | 2 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,316 | 14 | 12 | 44 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,577 | 11 | 7 | 77 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,187 | 3 | 2 | 2 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,480 | 43 | 34 | 10 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released versions [rust-v0.171.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.7) and [rust-v0.171.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.6).
- **Qwen Code** introduced multiple releases including [v0.27.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.4) and [sdk-typescript-v0.1.34](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.34).
- **OpenClaw** faced notable user-reported issues with [Plugins Advanced hanging mobile Chrome](https://github.com/openclaw/openclaw/issues/199713) and [macOS uninstall cleanup stalling](https://github.com/openclaw/openclaw/issues/199697), both garnering significant user attention.
- **vLLM** is dealing with a reported bug where [Tekken Mistral tokenizers garble emoji and other multi-byte characters](https://github.com/vllm-project/vllm/issues/67755) during processing, which has received multiple comments.
- **AIBrix** is addressing a reported issue on [model claims sharing an engine](https://github.com/vllm-project/aibrix/issues/3475) that has drawn user interest with four comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 155,797 · **Open issues:** 16,945 · **Last push:** 3h ago

On November 16, 2026, there were no new releases or merged pull requests for Claude Code, indicating a routine maintenance day. Among the newly opened issues, a notable bug report highlighted that Claude Code defaults to querying OpenStreetMap via the public Overpass API server, which is overwhelming for human mappers. Additionally, a privacy-related bug was raised regarding local scripts being incorrectly blocked due to inbound email header names. Feature requests included a proposal for storing project-local settings centrally rather than in project directories, which may improve usability. These discussions reflect ongoing concerns about resource management and user experience within the Claude Code ecosystem.

#### 🐛 New Issues
- [#110292](https://github.com/anthropics/claude-code/issues/110292) [BUG] Claude Code defaults to querying OpenStreetMap via the public Overpass API server, which overwhelms the available resources used for human mappers `bug` `platform:linux` `area:model`
- [#110184](https://github.com/anthropics/claude-code/issues/110184) [BUG] Privacy mod falsely blocks local scripts containing inbound email header names `bug` `platform:macos` `area:bash` `area:plugins` 💬3
- [#110307](https://github.com/anthropics/claude-code/issues/110307) [FEATURE] Store project-local settings centrally instead of writing .claude/ into project directories `enhancement` `area:core` `area:permissions` 💬1
- [#110302](https://github.com/anthropics/claude-code/issues/110302) [BUG] Windows computer use: an unanswered access card returns user_denied, and asking for "Claude" picks a stale MSIX install `bug` `platform:windows` `area:permissions` `area:desktop` 💬1
- [#110137](https://github.com/anthropics/claude-code/issues/110137) [BUG] PluginValidateReport types require fields omitted by older CLI JSON `bug` `platform:macos` `area:plugins` 💬1
- [#110291](https://github.com/anthropics/claude-code/issues/110291) [BUG] Mods: a '.ts' import that the engine loads and tests pass fails claude plugin validate's type-check (TS5097) `bug` `has repro` `platform:windows` `area:plugins` 💬1
- [#110296](https://github.com/anthropics/claude-code/issues/110296) [GitHub integration] [BUG] Cloud session linked to a Project with a synced GitHub repo starts without repo access ("access to this repository is not enabled for this session") `bug` `area:claude-code-web` `platform:web` `github-integration` 💬1
- [#110189](https://github.com/anthropics/claude-code/issues/110189) VS Code extension: MCP tool labels lowercase the server name — use `serverInfo.title`, or keep the configured casing `enhancement` `platform:macos` `area:mcp` `platform:vscode` 💬1
- [#110314](https://github.com/anthropics/claude-code/issues/110314) [BUG] hookify: block rules never tell the model why (PreToolUse deny has no permissionDecisionReason)
- [#110313](https://github.com/anthropics/claude-code/issues/110313) [BUG] Desktop: get_usage tool reports plan "Pro" to agents while the UI shows Max `bug` `platform:linux` `area:desktop`
- [#110312](https://github.com/anthropics/claude-code/issues/110312) [FEATURE] Claude Projects (coordinator + threads) in the VS Code extension `enhancement` `area:ide` `platform:vscode`
- [#110308](https://github.com/anthropics/claude-code/issues/110308) [BUG] Bash tool on Windows (Git Bash): every `\\` in the command text reaches bash as `\` — MSYS re-parses the quoted `-c` argument `bug` `platform:windows` `area:bash`
- [#110310](https://github.com/anthropics/claude-code/issues/110310) [BUG] VS Code: running background tasks are not counted in the prompt-bar agents badge ("0 agents") `bug` `has repro` `platform:macos` `area:ide`
- [#110309](https://github.com/anthropics/claude-code/issues/110309) [FEATURE] Channels: no way to enable a channel in VS Code extension sessions; notifications/claude/channel is dropped `enhancement` `platform:macos` `area:mcp` `area:ide`
- [#110311](https://github.com/anthropics/claude-code/issues/110311) [DOCS] Permissions page should say next to allow rules that an allow rule also approves the unsandboxed retry `documentation` `enhancement` `platform:macos` `platform:vscode`
- [#110306](https://github.com/anthropics/claude-code/issues/110306) [FEATURE] Desktop Code tab: let Claude see which file is open in the Files pane `enhancement` `area:desktop`
- [#110305](https://github.com/anthropics/claude-code/issues/110305) [FEATURE] Auto-close or provide dismiss tool for idle agent panes after they finish reporting `enhancement` `area:tui` `area:agents`
- [#110304](https://github.com/anthropics/claude-code/issues/110304) [BUG] Desktop (Windows) 5.22750: mod themes never draw — app draws "Theme" but its pinned Claude Code 2.1.321 only accepts "Backdrop" `bug` `has repro` `platform:windows` `area:plugins`
- [#110303](https://github.com/anthropics/claude-code/issues/110303) [BUG] Desktop 5.11492.5 forces gateway Code sessions to 200K via --settings, overriding configured 1M `bug` `has repro` `platform:windows` `regression`
- [#110301](https://github.com/anthropics/claude-code/issues/110301) [Bug] Safeguard interrupts dialog and breaks conversation flow `bug` `platform:windows` `area:model` `needs-repro`
- [#110300](https://github.com/anthropics/claude-code/issues/110300) [Bug] API Error on all requests `bug` `platform:macos` `area:api` `needs-info`
- [#110299](https://github.com/anthropics/claude-code/issues/110299) [BUG] VS Code panel: a ui.render rewrite of AssistantMessage turns path links into plain text (only https links survive) `bug` `has repro` `platform:linux` `platform:vscode`
- [#110298](https://github.com/anthropics/claude-code/issues/110298) [MODEL] Cowork: model states machine state it never read ("rolled back", "already fixed"), against written rules — plus field notes on verifying text against a fixed corpus, and a plan we would like feedback on `bug` `platform:windows` `area:model` `model`
- [#110297](https://github.com/anthropics/claude-code/issues/110297) [GitHub integration] `bug` `area:claude-code-web` `github-integration`
- [#110295](https://github.com/anthropics/claude-code/issues/110295) [BUG] `OTEL_METRICS_INCLUDE_REPOSITORY`: scp-style SSH remotes with non-git usernames omit `vcs.*` attributes `bug` `has repro` `platform:windows` `area:core`
- [#110294](https://github.com/anthropics/claude-code/issues/110294) [FEATURE] Desktop Code sidebar: resizable sections (drag handles between sections) `enhancement` `area:desktop`
- [#110293](https://github.com/anthropics/claude-code/issues/110293) [Web/Desktop FEATURE] Pinned chats within Projects should be pinned only for the project's page `invalid`
- [#110290](https://github.com/anthropics/claude-code/issues/110290) Safety classifier stops a response while analysing network traffic of my own boiler's official app (likely false positive) `bug` `platform:windows` `area:model` `area:desktop`
- [#110289](https://github.com/anthropics/claude-code/issues/110289) [FEATURE] Desktop: option to keep dictation on after sending a message `enhancement` `platform:linux` `area:desktop`

#### 🔒 Closed Issues
- [#110308](https://github.com/anthropics/claude-code/issues/110308) [BUG] Bash tool on Windows (Git Bash): every `\\` in the command text reaches bash as `\` — MSYS re-parses the quoted `-c` argument

### OpenAI Codex (`openai/codex`)

**Stars:** 135,421 · **Open issues:** 27,597 · **Last push:** 2h ago

On November 16, 2026, OpenAI Codex saw the release of rust-v0.171.0-alpha.7, along with an earlier version, rust-v0.171.0-alpha.6. Significant merges included the restoration of raw mode after returning from external editors and the addition of support for remote app servers in the `codex exec` command. Noteworthy fixes addressed issues like the terminal's alternate-scroll mode and status detail truncation for wide Unicode characters. However, a hot new issue has emerged where Codex fails to start the shell in specific VS Code workspaces on Windows, causing frustration among users.

#### 🚀 New Releases
- [rust-v0.171.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.7) 0.171.0-alpha.7
- [rust-v0.171.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.6) 0.171.0-alpha.6

#### ✅ Merged PRs
- [#61713](https://github.com/openai/codex/pull/61713) Restore raw mode after returning from external editors
- [#61711](https://github.com/openai/codex/pull/61711) Open Windows desktop sessions through the registered URL handler
- [#61710](https://github.com/openai/codex/pull/61710) Enable slash-command completion for unavailable threads
- [#61709](https://github.com/openai/codex/pull/61709) Avoid legacy transcript reads in the agents overview
- [#61707](https://github.com/openai/codex/pull/61707) Support remote app servers in `codex exec`
- [#61706](https://github.com/openai/codex/pull/61706) Refactor exec to use the shared app-server client
- [#61697](https://github.com/openai/codex/pull/61697) Restore the terminal's original alternate-scroll mode
- [#61694](https://github.com/openai/codex/pull/61694) Discard unsaved experimental feature edits on cancel
- [#61692](https://github.com/openai/codex/pull/61692) Fix status detail truncation for wide Unicode characters
- [#61690](https://github.com/openai/codex/pull/61690) Keep pasted text inline in TUI goals
- [#61688](https://github.com/openai/codex/pull/61688) Add TUI review ownership and risk guidance
- [#61686](https://github.com/openai/codex/pull/61686) Defer plugin manifest loading until marketplace entries are selected
- [#61663](https://github.com/openai/codex/pull/61663) Fix config reads with relative working directories
- [#61622](https://github.com/openai/codex/pull/61622) Clarify window ID discovery in history tool guidance
- [#61619](https://github.com/openai/codex/pull/61619) Return to the command center while archiving a task
- [#61600](https://github.com/openai/codex/pull/61600) Enable automatic titles for Cloud conversations
- [#61599](https://github.com/openai/codex/pull/61599) Report Cloud stream recovery failures and cancel abandoned reads

#### 🐛 New Issues
- [#61665](https://github.com/openai/codex/issues/61665) Codex fails to start shell in specific VS Code workspace on Windows `bug` `windows-os` `extension` `sandbox` 💬4
- [#61703](https://github.com/openai/codex/issues/61703) [ChatGPT Memory] Relational context loss during retrieval causes confident false-memory reconstruction `bug` `model-behavior` `app` `memory` 💬3
- [#61605](https://github.com/openai/codex/issues/61605) Ghostty: exiting Codex disables alternate scroll, breaking mouse/trackpad scrolling in less `bug` `TUI` `CLI` 💬3
- [#61720](https://github.com/openai/codex/issues/61720) Windows elevated sandbox: command keeps running after `turn/interrupt` `bug` `windows-os` `sandbox` `CLI` 💬2
- [#61680](https://github.com/openai/codex/issues/61680) Codex is effectively unusable on Windows: existing chats inaccessible, new chats fail, and sandbox commands cannot start `bug` `windows-os` `sandbox` `app` 💬2
- [#61723](https://github.com/openai/codex/issues/61723) Codex Desktop connects to remote OAuth MCP servers but their tools never reach threads `bug` `mcp` `app` 💬1
- [#61722](https://github.com/openai/codex/issues/61722) Windows app: possible safety false positive blocks authorized review; Daybreak access link returns 404 `bug` `windows-os` `app` `safety-check` 💬1
- [#61715](https://github.com/openai/codex/issues/61715) Hooks: expose the effective approval reviewer/posture in PreToolUse input `enhancement` `windows-os` `sandbox` `CLI` 💬1
- [#61719](https://github.com/openai/codex/issues/61719) “Messages are not available for this account” appears when selecting Dot `bug` `windows-os` `app` `dots` 💬1
- [#61718](https://github.com/openai/codex/issues/61718) macOS: IAB intermittently unavailable to unattended scheduled tasks, including when screen is locked `bug` `app` `browser` `automations` 💬1
- [#61695](https://github.com/openai/codex/issues/61695) Windows App Server does not run trusted hooks when the thread cwd is on a mapped network drive `bug` `windows-os` `CLI` `app` 💬1
- [#61716](https://github.com/openai/codex/issues/61716) Safety check `bug` `app` `safety-check` 💬1
- [#61721](https://github.com/openai/codex/issues/61721) Show specific live activity in CLI-only conversations without requiring prior Desktop use `bug` `TUI` `CLI`
- [#61717](https://github.com/openai/codex/issues/61717) CLI: add visible Copy controls beside fenced code blocks `enhancement` `TUI` `CLI`
- [#61714](https://github.com/openai/codex/issues/61714) Windows unelevated sandbox refuses workspace-write with "split writable root sets" when cwd differs only in letter case `bug` `windows-os` `sandbox` `CLI`
- [#61712](https://github.com/openai/codex/issues/61712) Withdrawn `bug` `model-behavior` `app` `computer-use`
- [#61708](https://github.com/openai/codex/issues/61708) codex fails to stay consistent `bug` `model-behavior` `CLI`

#### 🔒 Closed Issues
- [#24552](https://github.com/openai/codex/issues/24552) Can't enter alternate screen buffer
- [#10777](https://github.com/openai/codex/issues/10777) Hebrew text showing up in reverse in reasoning traces
- [#61605](https://github.com/openai/codex/issues/61605) Ghostty: exiting Codex disables alternate scroll, breaking mouse/trackpad scrolling in less
- [#47561](https://github.com/openai/codex/issues/47561) Support mouse selection and copy in warnings panel in fullscreen mode
- [#49947](https://github.com/openai/codex/issues/49947) Reasoning effort shortcut hint is easy to misinterpret
- [#61712](https://github.com/openai/codex/issues/61712) Withdrawn

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,418 · **Open issues:** 2,205 · **Last push:** 2d ago

On November 16, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI, indicating a routine maintenance day. However, several new issues were reported, highlighting user feedback and potential improvements. Notably, issue #5469 requests the addition of a setting to hide the "Discover Copilot Fusion" promotional prompt, indicating user interest in customizing their experience. In addition, issue #5465 suggests the introduction of more themes for the CLI, reflecting a desire for enhanced personalization. Other issues focus on various technical challenges, such as connection errors and session management, underscoring ongoing development needs.

#### 🐛 New Issues
- [#5469](https://github.com/github/copilot-cli/issues/5469) Add a setting to hide the "Discover Copilot Fusion" promotional prompt `triage`
- [#5468](https://github.com/github/copilot-cli/issues/5468) Remote control fails on GitHub Mobile and github.com: relay connect failed — "sealed value must bind this connection's challenge" `triage`
- [#5466](https://github.com/github/copilot-cli/issues/5466) ACP: include model context window limits and per-tier token pricing in model configOptions _meta `triage`
- [#5465](https://github.com/github/copilot-cli/issues/5465) Add more themes in Github Copilot CLI `triage`
- [#5464](https://github.com/github/copilot-cli/issues/5464) Stdio MCP server fails to connect when `server/discover` times out: legacy `initialize` fallback on the same connection is rejected with -32022 `triage`
- [#5463](https://github.com/github/copilot-cli/issues/5463) Sessions sidebar: show active sessions from all folders, and add sorting/grouping by folder `triage`
- [#5462](https://github.com/github/copilot-cli/issues/5462) Agent overrides approved implementation language; add instruction-adherence credit/refund review `triage`

#### 🔒 Closed Issues
- [#2068](https://github.com/github/copilot-cli/issues/2068) Background compaction consumes 1 premium request (VS Code does not)
- [#2474](https://github.com/github/copilot-cli/issues/2474) Command /model shows context window sizes per model
- [#2782](https://github.com/github/copilot-cli/issues/2782) ACP session.create rejects claude-opus-4.7 despite interactive path supporting it
- [#4868](https://github.com/github/copilot-cli/issues/4868) Execution failed: 421 Misdirected Request listing models
- [#5218](https://github.com/github/copilot-cli/issues/5218) Strange "Somebody else is owning the clipboard" message, reopen #3172

### OpenCode (`anomalyco/opencode`)

**Stars:** 227,068 · **Open issues:** 4,022 · **Last push:** <1h ago

On November 16, 2026, there were no new releases for OpenCode. However, several significant pull requests were merged, including the addition of Qwen4 Max to the documentation (#64144) and a new feature that allows users to name a paired server from its QR code (#64139). Additionally, improvements were made to the application with fixes for displaying spinners on subagent rows (#64132) and adjustments to the hex installation checks on the desktop (#64131). Among the new issues logged, #64085 reported a malfunctioning m.2 drive, highlighting ongoing hardware compatibility concerns within the ecosystem.

#### ✅ Merged PRs
- [#64144](https://github.com/anomalyco/opencode/pull/64144) docs(go): add Qwen4 Max
- [#64139](https://github.com/anomalyco/opencode/pull/64139) feat(app): name a paired server from its QR code
- [#64132](https://github.com/anomalyco/opencode/pull/64132) fix(app): no spinner on subagent rows in the new timeline
- [#64131](https://github.com/anomalyco/opencode/pull/64131) fix(desktop): match rune hex installation checks
- [#64130](https://github.com/anomalyco/opencode/pull/64130) feat(app): hide the hex tip when hex is installed

#### 🐛 New Issues
- [#64085](https://github.com/anomalyco/opencode/issues/64085) Накопитель m.2 выходит из строя `triaging` `type/bug` `version/v2` `platform/windows` 💬8
- [#64084](https://github.com/anomalyco/opencode/issues/64084) [FEATURE]: OpenCode Benchmark Results: Strengths, Weaknesses & Recommendations `type/feature` `area/core` `version/v2` 💬7
- [#64094](https://github.com/anomalyco/opencode/issues/64094) When using the PowerShell version of OpenCode together with Ollama, commands fail to execute. `type/bug` `area/providers` `version/v2` `platform/windows` 💬5
- [#64064](https://github.com/anomalyco/opencode/issues/64064) Scroll bar too thin `pending close` `triaging` `type/feature` 💬4
- [#64121](https://github.com/anomalyco/opencode/issues/64121) Security/Agent: Model bypasses Plan mode file-write restrictions using shell heredocs `pending close` `triaging` `type/bug` `area/core` 💬3
- [#64112](https://github.com/anomalyco/opencode/issues/64112) OpenCode issues when running inside a smolvm / smolmachine `type/feature` `area/service` `version/v2` `platform/linux` 💬3
- [#64040](https://github.com/anomalyco/opencode/issues/64040) Observed assistant response `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬2
- [#64143](https://github.com/anomalyco/opencode/issues/64143) [FEATURE]: sticky prompt at the top `type/feature` 💬2
- [#64119](https://github.com/anomalyco/opencode/issues/64119) ACP: parent's auto-resumed turn after background shell completion emits zero session/update `type/bug` `status/repro-simulated` `area/ide-acp` `version/v2` 💬2
- [#64117](https://github.com/anomalyco/opencode/issues/64117) ## `notifications/tools/list_changed` does not surface newly-enabled tools to the model `type/bug` `status/repro-simulated` `area/mcp` `version/v2` 💬2
- [#64125](https://github.com/anomalyco/opencode/issues/64125) cli: run and mini use stale $PWD instead of actual cwd for session location `type/bug` `area/cli` `version/v2` `platform/macos` 💬2
- [#64092](https://github.com/anomalyco/opencode/issues/64092) Stuck in "Working" After a prompt. `triaging` `type/bug` `area/desktop` `version/v2` 💬2
- [#64072](https://github.com/anomalyco/opencode/issues/64072) app not responding `triaging` `type/bug` 💬2
- [#64065](https://github.com/anomalyco/opencode/issues/64065) shell: background command dies silently without completion notification `triaging` `type/bug` `area/core` `version/v2` 💬2
- [#64110](https://github.com/anomalyco/opencode/issues/64110) [FEATURE]: Explicit session titles and a default naming template `type/feature` `area/tui` `version/v2` 💬1
- [#64151](https://github.com/anomalyco/opencode/issues/64151) Bug: Previous submenus not dismissed when switching top-level menu items `type/bug` `area/desktop` `version/v2` 💬1
- [#64150](https://github.com/anomalyco/opencode/issues/64150) llm: chat adapter fails replaying hosted web_search history after Responses → Chat model switch `type/bug` `area/providers` `inference/go` `version/v2` 💬1
- [#64149](https://github.com/anomalyco/opencode/issues/64149) TUI hangs silently at startup when inotify instances are exhausted (still in 2.3.0, no .git needed) `type/bug` `area/service` `version/v2` `platform/linux` 💬1
- [#64148](https://github.com/anomalyco/opencode/issues/64148) The following errors frequently occur. `triaging` `type/bug` 💬1
- [#64146](https://github.com/anomalyco/opencode/issues/64146) FreeUsageLimitError despite $0 workspace usage `type/support` `area/auth` `inference/free-tier` `version/v2` 💬1
- [#64145](https://github.com/anomalyco/opencode/issues/64145) tui: cpp code blocks lose most highlighting because the tree-sitter cpp query inherits c `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬1
- [#64142](https://github.com/anomalyco/opencode/issues/64142) UI menu Issue `type/bug` `area/desktop` 💬1
- [#64141](https://github.com/anomalyco/opencode/issues/64141) Expose the resolved interpreter/shell on the pre-execution tool hook (V1 tool.execute.before, V2 execute.before) `type/feature` `area/plugins` `version/v2` 💬1
- [#64138](https://github.com/anomalyco/opencode/issues/64138) server: background service exits silently while skills directory is rapidly modified (Windows v2.3.0) `type/bug` `area/service` `version/v2` `platform/windows` 💬1
- [#64136](https://github.com/anomalyco/opencode/issues/64136) `tools.opencode.worktree_remove` ignores permission settings `type/feature` `area/core` `version/v2` `platform/windows` 💬1
- [#64135](https://github.com/anomalyco/opencode/issues/64135) desktop: new session + slash command runs on the newest catalog model instead of the selected model `type/bug` `area/desktop` `inference/go` `version/v2` 💬1
- [#64129](https://github.com/anomalyco/opencode/issues/64129) tui: no way to cut text in the prompt (no prompt.cut command or keypad mirror) `type/feature` `area/tui` `version/v2` `platform/windows` 💬1
- [#64127](https://github.com/anomalyco/opencode/issues/64127) desktop: session list and scoped search stop at 64 sessions per project `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#64091](https://github.com/anomalyco/opencode/issues/64091) Diff viewer prevents copying text `type/bug` `area/desktop` `version/v2` `platform/macos` 💬1
- [#64124](https://github.com/anomalyco/opencode/issues/64124) config: file watcher fails with "Not a directory" when ~/.config/opencode is a symlink `type/bug` `area/core` `version/v2` `platform/linux` 💬1
- [#64123](https://github.com/anomalyco/opencode/issues/64123) [FEATURE]: Fallback model `type/feature` `area/providers` `inference/free-tier` `version/v2` 💬1
- [#64120](https://github.com/anomalyco/opencode/issues/64120) mobile: remote tunnel serves one request after service restart, then stops responding `type/bug` `area/service` `version/v2` `platform/windows` 💬1
- [#64118](https://github.com/anomalyco/opencode/issues/64118) [FEATURE]: Add BFDI,Numberblocks and Inanimate Insanity Themes to OpenCode `type/feature` `area/tui` 💬1
- [#64114](https://github.com/anomalyco/opencode/issues/64114) tui: --standalone never restarts its server after it exits (stuck on "Connection lost… Reconnecting") `reproduced` `type/bug` `area/service` `version/v2` 💬1

#### 🔒 Closed Issues
- [#64094](https://github.com/anomalyco/opencode/issues/64094) When using the PowerShell version of OpenCode together with Ollama, commands fail to execute.
- [#64064](https://github.com/anomalyco/opencode/issues/64064) Scroll bar too thin
- [#50631](https://github.com/anomalyco/opencode/issues/50631) Shell aliases do not work with ! commands in OpenCode V2
- [#64143](https://github.com/anomalyco/opencode/issues/64143) [FEATURE]: sticky prompt at the top
- [#64125](https://github.com/anomalyco/opencode/issues/64125) cli: run and mini use stale $PWD instead of actual cwd for session location
- [#64092](https://github.com/anomalyco/opencode/issues/64092) Stuck in "Working" After a prompt.
- [#64072](https://github.com/anomalyco/opencode/issues/64072) app not responding
- [#64065](https://github.com/anomalyco/opencode/issues/64065) shell: background command dies silently without completion notification
- [#64151](https://github.com/anomalyco/opencode/issues/64151) Bug: Previous submenus not dismissed when switching top-level menu items
- [#64150](https://github.com/anomalyco/opencode/issues/64150) llm: chat adapter fails replaying hosted web_search history after Responses → Chat model switch
- [#64149](https://github.com/anomalyco/opencode/issues/64149) TUI hangs silently at startup when inotify instances are exhausted (still in 2.3.0, no .git needed)
- [#64146](https://github.com/anomalyco/opencode/issues/64146) FreeUsageLimitError despite $0 workspace usage
- [#64142](https://github.com/anomalyco/opencode/issues/64142) UI menu Issue
- [#64138](https://github.com/anomalyco/opencode/issues/64138) server: background service exits silently while skills directory is rapidly modified (Windows v2.3.0)
- [#64136](https://github.com/anomalyco/opencode/issues/64136) `tools.opencode.worktree_remove` ignores permission settings
- [#64124](https://github.com/anomalyco/opencode/issues/64124) config: file watcher fails with "Not a directory" when ~/.config/opencode is a symlink
- [#64123](https://github.com/anomalyco/opencode/issues/64123) [FEATURE]: Fallback model

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,550 · **Open issues:** 2,321 · **Last push:** <1h ago

On November 16, 2026, Qwen Code released version v0.27.4, which introduced features allowing Managed Agent sessions to access local directories and interact via a Managed Web Terminal without storing credentials. This update also added output delivery capabilities to Feishu and WeCom webhooks. Additionally, version v0.27.3-nightly was released, incorporating a sidebar workspace filter for the web-shell and a DingTalk adapter for managed channels. Merged pull requests included significant fixes and improvements, notably preserving full commands in CLI executions and finalizing voice dictation in the web-shell. Among the newly reported issues, #17386 highlights a concern with the parallel-agent display, indicating that while it sanitizes activity text, it fails to do so for the agent name.

#### 🚀 New Releases
- [v0.27.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.4) Release v0.27.4
- [v0.27.3-nightly.20261115.6e3b2dcc19](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.3-nightly.20261115.6e3b2dcc19) Release v0.27.3-nightly.20261115.6e3b2dcc19
- [sdk-typescript-v0.1.34](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.34) SDK TypeScript Release v0.1.34
- [desktop-v0.27.4](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.27.4) Qwen Code Desktop v0.27.4

#### ✅ Merged PRs
- [#17340](https://github.com/QwenLM/qwen-code/pull/17340) chore(release): v0.27.4
- [#17361](https://github.com/QwenLM/qwen-code/pull/17361) fix(cli): preserve full commands in execution confirmations
- [#16862](https://github.com/QwenLM/qwen-code/pull/16862) ci(release): retry the Docker integration test suites once
- [#17324](https://github.com/QwenLM/qwen-code/pull/17324) docs(design): record speculation PR 6b decision to keep its own tool step
- [#17352](https://github.com/QwenLM/qwen-code/pull/17352) feat(serve): localize the daemon PR-watch prompt and pin the recorded follow-ups
- [#17331](https://github.com/QwenLM/qwen-code/pull/17331) fix(web-shell): finalize voice dictation before sending a message

#### 🐛 New Issues
- [#17386](https://github.com/QwenLM/qwen-code/issues/17386) cli: parallel-agent display sanitizes activity text but not the agent name with the weaker ANSI-only filter `priority/P2` `type/bug` `category/security` `scope/components` 💬3
- [#17381](https://github.com/QwenLM/qwen-code/issues/17381) Managed hooks reject supported description and statusMessage metadata during extension installation `priority/P2` `type/bug` `category/cli` `scope/extensions` 💬3
- [#17380](https://github.com/QwenLM/qwen-code/issues/17380) managed-agent: pre-admission Turn fails with hosted_harness_unavailable while Workspace runtime is still provisioning `priority/P2` `type/bug` `area: managed` `managed-agent-server` 💬3
- [#17371](https://github.com/QwenLM/qwen-code/issues/17371) verify-pr: track residual risks accepted by PR #17185's land-with-residual-risk decision `priority/P1` `type/bug` `category/security` `scope/ci-cd` 💬3
- [#17363](https://github.com/QwenLM/qwen-code/issues/17363) deflake: integration-tests/cli/acp-agent-loop-parity.test.ts › ACP agent loop parity (experimental.unifiedAgentLoop) › two prompts in one session: same requests, updates and stop reasons `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17368](https://github.com/QwenLM/qwen-code/issues/17368) Windows: four gitPull tests in git-branches.test.ts fail when the host git enables autocrlf `priority/P3` `type/bug` `category/core` `scope/git` 💬3
- [#17366](https://github.com/QwenLM/qwen-code/issues/17366) deflake: packages/web-shell/client/e2e/web-shell.files.spec.ts › @smoke keeps large source files readable without tokenizing the entire text `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17344](https://github.com/QwenLM/qwen-code/issues/17344) deflake: packages/core/src/code-mode/code-mode.test.ts › isolated code mode host > does not keep exec alive for an unawaited timer `priority/P2` `type/bug` `category/core` `scope/testing` 💬3
- [#17360](https://github.com/QwenLM/qwen-code/issues/17360) deflake: integration-tests/interactive/mods-tool-middleware.test.ts › Mods model tools (ink) > 'cancel' (headless=true) preserves native facts and one final result `priority/P2` `type/bug` `category/core` `scope/non-interactive` 💬3
- [#17348](https://github.com/QwenLM/qwen-code/issues/17348) deflake: packages/web-shell/daemon/session/DaemonSessionProvider.test.tsx › DaemonSessionProvider > Workflow mode synchronization > settles a policy config read after newer recovery on rejected `priority/P2` `type/bug` `scope/testing` `need-discussion` 💬3
- [#17339](https://github.com/QwenLM/qwen-code/issues/17339) deflake: integrations/external-context-mem0/src/delete.integration.test.ts › packaged deletion MCP through real HTTP > bounds the entire operation without replay: cumulative-deadline `priority/P2` `type/bug` `category/integration` `scope/testing` 💬3
- [#17332](https://github.com/QwenLM/qwen-code/issues/17332) Auto mode: subagent batch with multiple approval requests renders only one dialog — the rest orphan and freeze the batch `priority/P1` `type/bug` `category/core` `scope/interactive` 💬3
- [#17391](https://github.com/QwenLM/qwen-code/issues/17391) Loop detection reports repetitive_thoughts on healthy token-by-token reasoning streams `priority/P2` `type/bug` `category/core` `scope/core` 💬2
- [#17390](https://github.com/QwenLM/qwen-code/issues/17390) Claude hooks imported from a file retain temporary plugin paths after installation `priority/P2` `type/bug` `category/core` `scope/extensions` 💬2
- [#17389](https://github.com/QwenLM/qwen-code/issues/17389) cli: terminal-control-sequence sanitization is per field, not per class, across confirmation and banner dialogs `priority/P2` `type/bug` `category/security` `scope/components` 💬2
- [#17383](https://github.com/QwenLM/qwen-code/issues/17383) Managed Runtime Broker: session stuck in RECOVERY_BLOCKED after create timeout, no user recovery path `status/need-information` `priority/P2` `type/bug` `managed-agent-server` 💬2
- [#17382](https://github.com/QwenLM/qwen-code/issues/17382) Web Shell / Desktop: Russian UI localization is a stub (~75 of ~4000 keys); menus stay English even with language=ru (0.27.3) `status/need-retesting` `priority/P3` `type/bug` `category/ui` 💬2
- [#17384](https://github.com/QwenLM/qwen-code/issues/17384) /copy N counts tool-call-only model turns, so /copy 2 misses the previous reply `priority/P2` `type/bug` `category/cli` `scope/commands` 💬2
- [#17379](https://github.com/QwenLM/qwen-code/issues/17379) Автоматическая подгрузка файлов по имени из буфера обмена `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬2
- [#17374](https://github.com/QwenLM/qwen-code/issues/17374) feat(channels): add a generic outbound webhook destination `priority/P3` `type/feature-request` `category/integration` `roadmap/background-automation` 💬2
- [#17369](https://github.com/QwenLM/qwen-code/issues/17369) Windows: four gitPull tests in git-branches.test.ts fail when the host git enables autocrlf `status/in-review` `priority/P3` `type/bug` `category/development` 💬2
- [#17359](https://github.com/QwenLM/qwen-code/issues/17359) Height gate: prose and completed tables are under-charged by the row estimator `priority/P2` `type/bug` `category/ui` `scope/rendering` 💬2
- [#17350](https://github.com/QwenLM/qwen-code/issues/17350) Windows: run_shell_command results are padded with trailing spaces to the terminal width — 26–34% of shell output sent to the model is whitespace (regression in v0.24.0) `priority/P2` `type/bug` `category/tools` `scope/shell` 💬2
- [#17338](https://github.com/QwenLM/qwen-code/issues/17338) Comprehensive feedback on Qwen4-Max-Preview: latency, missing visual feedback loop, long-horizon project failures, and preview transparency gaps `status/need-information` `priority/P3` `type/feature-request` `roadmap/model-inference` 💬2
- [#17337](https://github.com/QwenLM/qwen-code/issues/17337) fix(core): key persisted-output stub detection on ToolOutputRecovery.persistedOutputFiles `priority/P2` `type/bug` `category/core` `scope/memory` 💬2
- [#17335](https://github.com/QwenLM/qwen-code/issues/17335) cli: shell command confirmation renders unsanitized text that the result-display path already sanitizes `priority/P2` `type/bug` `category/security` `scope/components` 💬2
- [#17328](https://github.com/QwenLM/qwen-code/issues/17328) docs(providers): document HopBase under OpenAI-compatible providers `priority/P3` `type/documentation` `category/integration` `scope/documentation` 💬2
- [#17387](https://github.com/QwenLM/qwen-code/issues/17387) Main CI failed: tui-parity — installed/npm-distribution.test.ts > global-ignore-scripts native uses actual installed entry and exits natur… `status/needs-triage` `type/bug`
- [#17356](https://github.com/QwenLM/qwen-code/issues/17356) Main CI failed: E2E Tests — interactive/tui-memory-manager.test.ts > Memory A: all four toggles including confirmation, hot/cold Workspac… `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#17045](https://github.com/QwenLM/qwen-code/issues/17045) tracking(core): land the 1.0 Preview loop kernel on main, one surface at a time
- [#10850](https://github.com/QwenLM/qwen-code/issues/10850) ci: Dependency CVE audit fails repo-wide on new fast-uri/qs/uuid advisories (main lockfile)
- [#14256](https://github.com/QwenLM/qwen-code/issues/14256) bug(hosted-harness): a crash-settled Turn loses its user prompt but keeps its tool calls in later model context
- [#17363](https://github.com/QwenLM/qwen-code/issues/17363) deflake: integration-tests/cli/acp-agent-loop-parity.test.ts › ACP agent loop parity (experimental.unifiedAgentLoop) › two prompts in one session: same requests, updates and stop reasons
- [#17368](https://github.com/QwenLM/qwen-code/issues/17368) Windows: four gitPull tests in git-branches.test.ts fail when the host git enables autocrlf
- [#17344](https://github.com/QwenLM/qwen-code/issues/17344) deflake: packages/core/src/code-mode/code-mode.test.ts › isolated code mode host > does not keep exec alive for an unawaited timer
- [#17348](https://github.com/QwenLM/qwen-code/issues/17348) deflake: packages/web-shell/daemon/session/DaemonSessionProvider.test.tsx › DaemonSessionProvider > Workflow mode synchronization > settles a policy config read after newer recovery on rejected
- [#17252](https://github.com/QwenLM/qwen-code/issues/17252) deflake: packages/web-shell/client/e2e/web-shell.turn-navigation-scroll-follow.spec.ts › global turn navigation follows transcript scrolling @smoke
- [#17053](https://github.com/QwenLM/qwen-code/issues/17053) TypeScript SDK: transport negotiation can hang while reading the capabilities response body
- [#17260](https://github.com/QwenLM/qwen-code/issues/17260) [managed-agent] Stale public-child CANCELLING turn loops forever in recovery after shell→external-files topology migration

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1245](https://github.com/anthropics/skills/pull/1245) Add notion-spec-to-implementation and quantitative-resume-auditor skills
- [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: avoid shell=True in with_server.py
- [#1792](https://github.com/anthropics/skills/pull/1792) fix(docx): report LibreOffice timeout as an error and verify the output

_Quiet today: Gemini CLI_

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 394,536 · **Open issues:** 8,503 · **Last push:** <1h ago

On November 16, 2026, there were no new releases for OpenClaw, but several important features and fixes were merged. Notably, PR #198070 introduced enhancements to the Control UI by enabling the opening of chat and agent creation without a preset plan. Several critical bug fixes were also implemented, including #199869, which improved CLI error reporting for backup restoration, and #199642, which ensured that Gmail setup remedies were maintained in JSON error outputs. Among the new issues, #199713 drew attention as it reported that the Advanced plugins feature hangs in mobile Chrome, which may impact many users. Overall, the day focused on refining features and addressing pressing bugs in the system.

#### ✅ Merged PRs
- [#199872](https://github.com/openclaw/openclaw/pull/199872) fix(ui): Usage filters change when Enter confirms IME input
- [#198278](https://github.com/openclaw/openclaw/pull/198278) refactor(ci): centralize independent Node/Bun runtime planning
- [#198070](https://github.com/openclaw/openclaw/pull/198070) feat(templates): open Control UI chat and create the agent without a plan
- [#199869](https://github.com/openclaw/openclaw/pull/199869) fix(cli): surface backup restore guard remedies in --json failures
- [#198302](https://github.com/openclaw/openclaw/pull/198302) fix(plugins): keep Gateway responsive during initial plugin loading
- [#199626](https://github.com/openclaw/openclaw/pull/199626) fix(memory-wiki): keep imported Markdown links pointing to generated pages
- [#199639](https://github.com/openclaw/openclaw/pull/199639) fix(cli): show actionable inference preflight errors with JSON
- [#199642](https://github.com/openclaw/openclaw/pull/199642) fix(cli): preserve Gmail setup remedies in JSON failures
- [#199650](https://github.com/openclaw/openclaw/pull/199650) fix(cli): show actionable QR pairing failures alongside JSON
- [#199215](https://github.com/openclaw/openclaw/pull/199215) fix(ui): publication status checks look idle while pending
- [#199219](https://github.com/openclaw/openclaw/pull/199219) fix(ui): saving feedback fades like an unavailable control
- [#199873](https://github.com/openclaw/openclaw/pull/199873) fix(sessions): transcript facts backfill replays every covered session after a restart
- [#199882](https://github.com/openclaw/openclaw/pull/199882) fix(a2a): inbound correlation test fails intermittently on unrelated PRs
- [#199218](https://github.com/openclaw/openclaw/pull/199218) fix(ui): embedded settings show oversized loading indicators
- [#199217](https://github.com/openclaw/openclaw/pull/199217) fix(ui): mobile publication repeats the selected account
- [#199246](https://github.com/openclaw/openclaw/pull/199246) fix(templates): Template Add says a plugin is disabled when it is only missing from plugins.allow
- [#199850](https://github.com/openclaw/openclaw/pull/199850) fix(cli): keep backup git scope guard remedies in --json error output
- [#199863](https://github.com/openclaw/openclaw/pull/199863) fix: honor ID agent limits in message action sends without a role default
- [#199105](https://github.com/openclaw/openclaw/pull/199105) fix(mcp-events): reject impossible event and subscription dates
- [#199871](https://github.com/openclaw/openclaw/pull/199871) fix(ci): invalid benchmark options reach setup
- [#199406](https://github.com/openclaw/openclaw/pull/199406) fix(templates): inline review and publish fail when ClawHub handle has uppercase letters
- [#199865](https://github.com/openclaw/openclaw/pull/199865) fix(gateway): private-home CI checks time out on cold imports
- [#199795](https://github.com/openclaw/openclaw/pull/199795) chore(ui): refresh control ui locales
- [#199786](https://github.com/openclaw/openclaw/pull/199786) refactor: simplify release waiver tests and documentation
- [#199856](https://github.com/openclaw/openclaw/pull/199856) fix: avoid worktree preparation waits behind shared ref writes
- [#198727](https://github.com/openclaw/openclaw/pull/198727) fix(templates): CLI cannot resume an agent kept by a failed Add
- [#199862](https://github.com/openclaw/openclaw/pull/199862) fix(gateway): allow first database creation during session discovery
- [#198605](https://github.com/openclaw/openclaw/pull/198605) fix(templates): second Template Add blocked once its MCP env var is set
- [#199864](https://github.com/openclaw/openclaw/pull/199864) fix(ci): align interrupted PR import pause expectation
- [#198821](https://github.com/openclaw/openclaw/pull/198821) fix(templates): bundled dependency errors omit the entry and the reason
- [#198816](https://github.com/openclaw/openclaw/pull/198816) fix(templates): missing Template or version reported as a ClawHub outage
- [#198813](https://github.com/openclaw/openclaw/pull/198813) fix(templates): Template avatar path validates but does not resolve
- [#199861](https://github.com/openclaw/openclaw/pull/199861) fix(test): retain MCP fixtures after cleanup failure
- [#185851](https://github.com/openclaw/openclaw/pull/185851) perf(ci): reuse Knip analysis across reports
- [#199859](https://github.com/openclaw/openclaw/pull/199859) fix(knowledge): shorten write locks during large vault scans
- [#199464](https://github.com/openclaw/openclaw/pull/199464) fix(ui): Secrets feedback confuses save counts and name rules
- [#199483](https://github.com/openclaw/openclaw/pull/199483) fix(ui): expired approvals claim an execution outcome
- [#198914](https://github.com/openclaw/openclaw/pull/198914) fix(k8s): show deployment help without cluster access
- [#199860](https://github.com/openclaw/openclaw/pull/199860) fix(ci): chat usage test races lazy quota metrics
- [#199429](https://github.com/openclaw/openclaw/pull/199429) fix(ui): settings point to Raw on pages without a Raw tab
- [#199857](https://github.com/openclaw/openclaw/pull/199857) fix(diagnostics): account for large authority receipt payloads
- [#199441](https://github.com/openclaw/openclaw/pull/199441) fix(ui): Security overstates command permission guarantees
- [#199372](https://github.com/openclaw/openclaw/pull/199372) fix(ui): notification test hides its Gateway-wide audience
- [#198983](https://github.com/openclaw/openclaw/pull/198983) fix(k8s): fail initialization when config seeding fails
- [#198875](https://github.com/openclaw/openclaw/pull/198875) fix(templates): oversized or non-UTF-8 HEARTBEAT.md fails only at Add
- [#198831](https://github.com/openclaw/openclaw/pull/198831) fix(templates): catalog preview fails for a publisher-qualified link
- [#199695](https://github.com/openclaw/openclaw/pull/199695) fix: report subagent requester waiting and consumption truthfully
- [#199847](https://github.com/openclaw/openclaw/pull/199847) fix(state): restore dependency checks for upgrade internals
- [#199376](https://github.com/openclaw/openclaw/pull/199376) fix(ui): config warning dismissal promises permanent silence
- [#198906](https://github.com/openclaw/openclaw/pull/198906) fix(ssh): preserve whitespace inside resolved identity filenames
- [#199368](https://github.com/openclaw/openclaw/pull/199368) fix(ui): GitHub help misstates agent accounts and cloud publishing
- [#199363](https://github.com/openclaw/openclaw/pull/199363) fix(ui): Profile recovery points to unavailable actions
- [#199840](https://github.com/openclaw/openclaw/pull/199840) fix: avoid repeated transcript copies during manual compaction
- [#199853](https://github.com/openclaw/openclaw/pull/199853) fix: unblock carrier-backed releases within a 12k request budget
- [#199334](https://github.com/openclaw/openclaw/pull/199334) fix(workboard): report planning state and worker-start failures
- [#199846](https://github.com/openclaw/openclaw/pull/199846) fix(test): auto-reply suite fails on main after the item-conflict recovery message changed
- [#199845](https://github.com/openclaw/openclaw/pull/199845) fix(ui): Template detail page is missing the plugin page's security and version rail
- [#198823](https://github.com/openclaw/openclaw/pull/198823) fix(templates): catalog shows image files in a Template as garbled text
- [#199064](https://github.com/openclaw/openclaw/pull/199064) fix: setup helper cannot install ClawHub Templates
- [#199777](https://github.com/openclaw/openclaw/pull/199777) fix: reduce clean worktree removal stalls
- [#199836](https://github.com/openclaw/openclaw/pull/199836) perf(ci): overlap independent npm source checks
- [#199347](https://github.com/openclaw/openclaw/pull/199347) fix(ui): Debug replies show the next method instead of the one called
- [#199785](https://github.com/openclaw/openclaw/pull/199785) improve(ci): overlap release evidence lookup with source readiness
- [#199780](https://github.com/openclaw/openclaw/pull/199780) improve(ci): shorten release candidate evidence binding
- [#198812](https://github.com/openclaw/openclaw/pull/198812) fix(templates): duplicate bundled plugin id passes preview, fails Add
- [#198876](https://github.com/openclaw/openclaw/pull/198876) docs(templates): nested CLAW.md fails validate and build as documented
- [#199804](https://github.com/openclaw/openclaw/pull/199804) fix: reuse compacted tool catalogs between agent runs
- [#199321](https://github.com/openclaw/openclaw/pull/199321) fix: Scribe setup assumes a new conversation and default model
- [#199082](https://github.com/openclaw/openclaw/pull/199082) fix(templates): agent kept by a failed offline Add has no AGENTS.md
- [#198332](https://github.com/openclaw/openclaw/pull/198332) fix(agents): agent denies finished setup after BOOTSTRAP.md is removed
- [#199308](https://github.com/openclaw/openclaw/pull/199308) fix: Knowledge reader labels misstate evidence and file outcomes
- [#199839](https://github.com/openclaw/openclaw/pull/199839) fix: qualify the current installed daemon probe
- [#196262](https://github.com/openclaw/openclaw/pull/196262) fix(browser): keep authenticated CDP URLs out of tool results
- [#199042](https://github.com/openclaw/openclaw/pull/199042) fix(plugins): Gateway heap grows with every plugin rebuild
- [#199794](https://github.com/openclaw/openclaw/pull/199794) perf(sandbox): compress oversized reconcile checkpoints
- [#198583](https://github.com/openclaw/openclaw/pull/198583) fix(templates): ClawHub Template Add says the manifest is invalid without saying why
- [#198563](https://github.com/openclaw/openclaw/pull/198563) fix(templates): Template Add fails on MCP servers that declare a timeout
- [#199298](https://github.com/openclaw/openclaw/pull/199298) fix: Scribes report failed history reads as empty history
- [#199565](https://github.com/openclaw/openclaw/pull/199565) fix(gateway): first chats fail during cold storage startup
- [#199748](https://github.com/openclaw/openclaw/pull/199748) perf(sessions): charge shared actor entry fields once in the replica pool
- [#199789](https://github.com/openclaw/openclaw/pull/199789) fix(ci): keep member welcome internals private
- [#198268](https://github.com/openclaw/openclaw/pull/198268) perf(update): replace the candidate canary with a runtime contract check
- [#199788](https://github.com/openclaw/openclaw/pull/199788) improve(ui): show the Blobster for Templates without artwork
- [#199282](https://github.com/openclaw/openclaw/pull/199282) fix: Knowledge claims interrupted settings changes did not apply
- [#199294](https://github.com/openclaw/openclaw/pull/199294) fix: Knowledge mistakes empty filters for an empty store
- [#198571](https://github.com/openclaw/openclaw/pull/198571) feat: open ClawHub catalog reviews in desktop apps
- [#199247](https://github.com/openclaw/openclaw/pull/199247) fix(agents): Template greeting logs every tools.allow entry as an unavailable core tool
- [#199768](https://github.com/openclaw/openclaw/pull/199768) fix(tests): stop fault scenarios racing the auth deadline
- [#199266](https://github.com/openclaw/openclaw/pull/199266) fix: invitation limits suggest removing people or devices
- [#199781](https://github.com/openclaw/openclaw/pull/199781) fix(cli): show backup namespace remedy in JSON errors
- [#199787](https://github.com/openclaw/openclaw/pull/199787) fix(ci): select the current Chat plugin surface label
- [#199779](https://github.com/openclaw/openclaw/pull/199779) chore(ui): refresh control ui locales
- [#198521](https://github.com/openclaw/openclaw/pull/198521) fix(templates): failed Template Add preview warns the Add may be partial
- [#199258](https://github.com/openclaw/openclaw/pull/199258) fix: Memory reports an unavailable provider as awake
- [#198818](https://github.com/openclaw/openclaw/pull/198818) fix(templates): validate and build reject bundled folder inspect accepts
- [#199763](https://github.com/openclaw/openclaw/pull/199763) fix(cli): keep backup create --to guard remedy in --json error output
- [#199767](https://github.com/openclaw/openclaw/pull/199767) feat(diagnostics): attribute session actor authority payload bytes
- [#199746](https://github.com/openclaw/openclaw/pull/199746) fix(ui): keep the conversation start visible as rows measure
- [#196140](https://github.com/openclaw/openclaw/pull/196140) fix(ci): template-only PRs skip the runtime tests that own the templates
- [#199760](https://github.com/openclaw/openclaw/pull/199760) fix(cli): keep backup sqlite snapshot source remedies on JSON failures
- [#199757](https://github.com/openclaw/openclaw/pull/199757) fix(agents): recover sessions after Responses item conflicts
- [#199255](https://github.com/openclaw/openclaw/pull/199255) fix: channel settings offer edits that read-only viewers cannot save
- [#198520](https://github.com/openclaw/openclaw/pull/198520) fix(templates): Template Add fails when the state dir path contains a symlink
- [#199776](https://github.com/openclaw/openclaw/pull/199776) fix(release): honor exact-candidate 2026.11.4 failure grants
- [#199775](https://github.com/openclaw/openclaw/pull/199775) fix: scheduled-command CI rejects valid conversation resets
- [#199248](https://github.com/openclaw/openclaw/pull/199248) fix: Connected apps suggests pairing without permission
- [#198240](https://github.com/openclaw/openclaw/pull/198240) fix: allow retrying refused native worker cleanup
- [#199239](https://github.com/openclaw/openclaw/pull/199239) fix: Nostr profile guidance points to an unavailable edit action
- [#198243](https://github.com/openclaw/openclaw/pull/198243) fix(cron): preserve transient continuation error classification
- [#198444](https://github.com/openclaw/openclaw/pull/198444) fix: repository refresh failures hide Git diagnostics
- [#199232](https://github.com/openclaw/openclaw/pull/199232) fix: backfill preview misstates one-sided date ranges
- [#199210](https://github.com/openclaw/openclaw/pull/199210) fix: prediction settings incorrectly promise no model fallback
- [#199774](https://github.com/openclaw/openclaw/pull/199774) chore(ui): refresh control ui locales
- [#199646](https://github.com/openclaw/openclaw/pull/199646) fix(gateway): large BOOT.md stalls boot runs and makes boot message sends fail
- [#199203](https://github.com/openclaw/openclaw/pull/199203) fix: Devices misstates remote host scope and token reconnection
- [#199200](https://github.com/openclaw/openclaw/pull/199200) fix: app messages misstate availability and resource failures
- [#199769](https://github.com/openclaw/openclaw/pull/199769) chore(ui): refresh control ui locales
- [#199761](https://github.com/openclaw/openclaw/pull/199761) perf(memory): release diagnostic state on session retirement
- [#197538](https://github.com/openclaw/openclaw/pull/197538) feat(openclaw-id): carry the Discovery origin in node join links
- [#199193](https://github.com/openclaw/openclaw/pull/199193) fix: Portal mistakes status failures for device startup failures
- [#199187](https://github.com/openclaw/openclaw/pull/199187) fix: About copy labels promise unavailable build information
- [#199183](https://github.com/openclaw/openclaw/pull/199183) fix(ui): give remote Gateway users accurate login recovery steps
- [#199720](https://github.com/openclaw/openclaw/pull/199720) fix: model favorites are hidden until hover
- [#198654](https://github.com/openclaw/openclaw/pull/198654) improve: reduce session selection refresh work
- [#199764](https://github.com/openclaw/openclaw/pull/199764) chore(ui): refresh control ui locales
- [#198925](https://github.com/openclaw/openclaw/pull/198925) fix(ci): prioritize long first-hop and legacy-state Docker jobs
- [#199745](https://github.com/openclaw/openclaw/pull/199745) fix: keep resumed replies active through session presentation refreshes
- [#199561](https://github.com/openclaw/openclaw/pull/199561) fix: undo cold-session compaction CPU and latency regressions
- [#198241](https://github.com/openclaw/openclaw/pull/198241) fix(release): validate preflight IDs before binding
- [#198233](https://github.com/openclaw/openclaw/pull/198233) fix: find SHA-linked backport companions across paths
- [#199172](https://github.com/openclaw/openclaw/pull/199172) fix(ui): show when an optional question was left blank
- [#198232](https://github.com/openclaw/openclaw/pull/198232) fix(release): preserve concurrent release-note edits
- [#199759](https://github.com/openclaw/openclaw/pull/199759) test(cron): expect execution failures in lastError, not lastDeliveryError
- [#199159](https://github.com/openclaw/openclaw/pull/199159) fix(ui): memory conflicts are labeled as already imported
- [#199747](https://github.com/openclaw/openclaw/pull/199747) fix(ui): preserve the reading position when transcript ranges shrink
- [#198499](https://github.com/openclaw/openclaw/pull/198499) feat(macos): join an OpenClaw ID claw as a member, by invite or from your other devices
- [#199009](https://github.com/openclaw/openclaw/pull/199009) perf(qa): reuse automatic startup for current-runtime fixtures
- [#192232](https://github.com/openclaw/openclaw/pull/192232) fix(ios): stops chat from going blank after sending a message or a reply arrives
- [#199739](https://github.com/openclaw/openclaw/pull/199739) fix(oc-path): multiline frontmatter collections are truncated
- [#198389](https://github.com/openclaw/openclaw/pull/198389) feat(state): upgrade state by copy and swap at Gateway startup
- [#197748](https://github.com/openclaw/openclaw/pull/197748) feat(openclaw-id): guest member role with sandboxed session tools
- [#199736](https://github.com/openclaw/openclaw/pull/199736) test(memory): track shadow descriptors opened by async admission
- [#199717](https://github.com/openclaw/openclaw/pull/199717) fix: shorten sandbox freezes during workspace base refresh
- [#199738](https://github.com/openclaw/openclaw/pull/199738) chore(ui): refresh control ui locales
- [#199719](https://github.com/openclaw/openclaw/pull/199719) feat(ui): tell owners when a member or node is waiting for approval
- [#199734](https://github.com/openclaw/openclaw/pull/199734) chore(ui): refresh control ui locales
- [#199724](https://github.com/openclaw/openclaw/pull/199724) chore(i18n): refresh native locales
- [#195092](https://github.com/openclaw/openclaw/pull/195092) fix(knowledge): match canonically equivalent NFC/NFD keywords
- [#199638](https://github.com/openclaw/openclaw/pull/199638) fix(ui): keep Custodian drafts when Enter confirms IME input
- [#198491](https://github.com/openclaw/openclaw/pull/198491) feat(openclaw-id): name invited members from their email and ask who they are on first visit
- [#195360](https://github.com/openclaw/openclaw/pull/195360) fix(worktrees): preserve whitespace in Git metadata paths
- [#199694](https://github.com/openclaw/openclaw/pull/199694) improve: use chat wording across app interfaces
- [#197589](https://github.com/openclaw/openclaw/pull/197589) fix: uploaded videos open outside chat instead of playing inline
- [#199687](https://github.com/openclaw/openclaw/pull/199687) fix: avoid rehashing unchanged workspaces on first sandbox reuse
- [#199670](https://github.com/openclaw/openclaw/pull/199670) fix(cli): show system event remedies alongside JSON
- [#199686](https://github.com/openclaw/openclaw/pull/199686) perf(memory): avoid detaching short transcript strings
- [#195342](https://github.com/openclaw/openclaw/pull/195342) fix(skills): Ctrl-C leaves verification requests running
- [#199080](https://github.com/openclaw/openclaw/pull/199080) fix(ui): keep the chat reader's text still while scrolling and while content renders late
- [#199658](https://github.com/openclaw/openclaw/pull/199658) fix(channels): keep dead-letter selector remedies in --json errors
- [#199683](https://github.com/openclaw/openclaw/pull/199683) perf(sandbox): reuse saved workspace fingerprints during acceptance
- [#199676](https://github.com/openclaw/openclaw/pull/199676) feat(advisor): review subagent runs too
- [#199673](https://github.com/openclaw/openclaw/pull/199673) perf(sessions): compact append receipts after replica eviction
- [#199679](https://github.com/openclaw/openclaw/pull/199679) fix(ci): restore unused-export checks for QA cron fixtures
- [#199641](https://github.com/openclaw/openclaw/pull/199641) fix(cli): keep agent selector guard remedies on JSON failures
- [#199662](https://github.com/openclaw/openclaw/pull/199662) fix(ci): retained tooling subsets exceed hosted push capacity
- [#199592](https://github.com/openclaw/openclaw/pull/199592) fix(ci): bind adaptive test volumes to scheduled profiles
- [#199654](https://github.com/openclaw/openclaw/pull/199654) fix(doctor): capture declared SQLite sidecar roots through their database
- [#199622](https://github.com/openclaw/openclaw/pull/199622) fix(ui): label a yielded child with a running background job as working
- [#199664](https://github.com/openclaw/openclaw/pull/199664) improve(ci): avoid redundant destructured member symbol queries
- [#199636](https://github.com/openclaw/openclaw/pull/199636) fix(agents): stop divergent mid-turn overflow recovery
- [#199657](https://github.com/openclaw/openclaw/pull/199657) fix(ci): remove unused fs-safe facade exports
- [#199661](https://github.com/openclaw/openclaw/pull/199661) fix(nodes): stop interrupted camera and location reads during lookup
- [#199656](https://github.com/openclaw/openclaw/pull/199656) fix(test): clean up FIFO fixtures when setup fails
- [#199585](https://github.com/openclaw/openclaw/pull/199585) fix(cron): ended cron runs admit late turns from background work
- [#199653](https://github.com/openclaw/openclaw/pull/199653) fix(update): bridge 2026.11.5-beta.3 updaters
- [#198350](https://github.com/openclaw/openclaw/pull/198350) fix(update): plugin failures never fail an update or Gateway health
- [#198355](https://github.com/openclaw/openclaw/pull/198355) fix(update): refuse missing host prerequisites in one line and record a cause per attempt
- [#199616](https://github.com/openclaw/openclaw/pull/199616) fix(cli): show directory failure remedies alongside JSON

#### 🐛 New Issues
- [#199713](https://github.com/openclaw/openclaw/issues/199713) [Bug]: Plugins Advanced hangs mobile Chrome; unresponsive debug target and saturated renderer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬7
- [#199697](https://github.com/openclaw/openclaw/issues/199697) [Bug]: macOS uninstall cleanup stalls with 800k+ items in ~/.openclaw (user report) `P2` `impact:ux-friction` 💬6
- [#199617](https://github.com/openclaw/openclaw/issues/199617) [Bug]: Windows update to 2026.11.5-beta.3 twice fails to verify Scheduled Task during validation `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬6
- [#199437](https://github.com/openclaw/openclaw/issues/199437) [Bug]: BOOT.md echo guard materializes every 80/81-character window and throws above ~8 MiB `bug` `no-stale` `bug:behavior` `P2` 💬5
- [#199621](https://github.com/openclaw/openclaw/issues/199621) [Bug]: Switching to All owners silently restores the sidebar agent filter `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#199513](https://github.com/openclaw/openclaw/issues/199513) Telegram inbound dispatch fails with "Agent database execution reference is released" after an in-process plugin replacement during an active turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#199593](https://github.com/openclaw/openclaw/issues/199593) [Bug]: backup git verify/restore fails on rows containing U+2028/U+2029 — Node readline splits JSONL records `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:other` 💬3
- [#199415](https://github.com/openclaw/openclaw/issues/199415) [Bug]: Control UI Chat intermittently freezes on load with REACTIVITY_HALTED / undefined attention.kind (2026.11.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#199559](https://github.com/openclaw/openclaw/issues/199559) Update failure: doctor-failed (2026.11.5-beta.3): snapshot preflight passes, then read-only worker ENOSPC on tmpfs TMPDIR `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬3
- [#199463](https://github.com/openclaw/openclaw/issues/199463) CLI loopback toolsAllow is applied after full Gateway tool construction, causing avoidable memory spikes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#199886](https://github.com/openclaw/openclaw/issues/199886) [Bug]: Inbound Twilio call is accepted but returns only a silent 30-second pause `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#199885](https://github.com/openclaw/openclaw/issues/199885) Docs: make inbound Twilio setup explicit in Voice Call quick start `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#199722](https://github.com/openclaw/openclaw/issues/199722) llm-task Codex completion fails with native ESM workspace-owner error on OpenClaw 2026.11.3 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#199721](https://github.com/openclaw/openclaw/issues/199721) [Bug]: Agent plugin tool cannot update an existing ClawHub install; no update/force option `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#199723](https://github.com/openclaw/openclaw/issues/199723) [Bug]: Agent overflow menu collapses to one visible row near the bottom of the window `P2` `impact:ux-friction` 💬2
- [#199580](https://github.com/openclaw/openclaw/issues/199580) Doctor --fix fails recovery capture: Update recovery manifest is missing a root entry (2026.11.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#199582](https://github.com/openclaw/openclaw/issues/199582) Update failure: post-update-verification (2026.11.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#199607](https://github.com/openclaw/openclaw/issues/199607) [Bug]: Codex warning-only native assignment migration remains pending `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#199583](https://github.com/openclaw/openclaw/issues/199583) [Bug]: Talk agent-consult context overflow surfaces as "There is no active OpenClaw run to steer" and overflow compaction aborts `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#199505](https://github.com/openclaw/openclaw/issues/199505) Update failure: candidate-doctor (2026.11.5-beta.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#199478](https://github.com/openclaw/openclaw/issues/199478) [Bug]: Existing script automation misses a newly enabled plugin tool `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#199893](https://github.com/openclaw/openclaw/issues/199893) Anthropic setup-token is unavailable in personal Connected accounts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#199888](https://github.com/openclaw/openclaw/issues/199888) Gateway memory import writes its pre-import backup to the Gateway's working directory `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199875](https://github.com/openclaw/openclaw/issues/199875) Control UI: a connection that died while you were in another app is not replaced for 40 s or more `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199883](https://github.com/openclaw/openclaw/issues/199883) OpenRouter image provider drops aspectRatio/resolution for non-Gemini models (e.g. Seedream 5.5 always square) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199614](https://github.com/openclaw/openclaw/issues/199614) perf(sessions): transcript facts backfill restarts from zero and starves gateway RPC on large databases `P1` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#199880](https://github.com/openclaw/openclaw/issues/199880) Qualify watched-session prompts with PostgreSQL Gateway admission `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#199876](https://github.com/openclaw/openclaw/issues/199876) [Bug]: MS Teams and Zalo (zalouser) still split fenced code blocks mid-fence — fix prepared, needs tenant-backed delivery proof `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#199877](https://github.com/openclaw/openclaw/issues/199877) [Bug]: Supabase execute_sql returns "user rejected MCP tool call" without a visible approval prompt `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#199405](https://github.com/openclaw/openclaw/issues/199405) [Bug]: Inline Template review and publish reject mixed-case ClawHub personal handles `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199870](https://github.com/openclaw/openclaw/issues/199870) [Bug]: 2026.10.3 candidate snapshot queue failure blocks upgrade with large histories `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#199684](https://github.com/openclaw/openclaw/issues/199684) [Feature]: Use a saved Deepgram, ElevenLabs or Mistral API key for live transcription `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199854](https://github.com/openclaw/openclaw/issues/199854) test(gateway): await real maintenance before pending-install reload assertion `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199848](https://github.com/openclaw/openclaw/issues/199848) [Bug]: Codex 0.169 model-catalog refresh is sent to the inference relay and 502s five times per turn (relay only allows POST /responses) `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#199843](https://github.com/openclaw/openclaw/issues/199843) [Bug]: Fullscreen MCP Apps are clipped to a 150 px iframe in the Control UI conversation `P2` `impact:ux-friction` 💬1
- [#199791](https://github.com/openclaw/openclaw/issues/199791) [Feature]: Define a supported lifecycle contract for accepted work spanning root Agent runs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#199837](https://github.com/openclaw/openclaw/issues/199837) [Feature]: defer OpenClaw tool schemas on claude-cli turns (Tool Search or native ToolSearch) `P2` `impact:other` 💬1
- [#199792](https://github.com/openclaw/openclaw/issues/199792) Feature request: personal drag-and-drop agent ordering for frequently used agents `P2` `impact:ux-friction` 💬1
- [#199782](https://github.com/openclaw/openclaw/issues/199782) skills_read cuts the middle out of a large skill companion file, with no way to read the rest `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199778](https://github.com/openclaw/openclaw/issues/199778) Subagent terminal signal owner changed before commit logged at error on every superseded sub-agent run `P2` `impact:session-state` 💬1
- [#199772](https://github.com/openclaw/openclaw/issues/199772) kimi-coding: K3.1 Pro rows on main are missing from the 2026.11.x releases `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#199773](https://github.com/openclaw/openclaw/issues/199773) doctor installs the moonshot plugin when only KIMI_API_KEY (a Kimi Code key) is set `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199771](https://github.com/openclaw/openclaw/issues/199771) `secrets apply` cannot write auth profiles to the shared auth store `P2` `impact:auth-provider` 💬1
- [#199765](https://github.com/openclaw/openclaw/issues/199765) [Bug]: MCP App view reports "Session … was not found" while a session metadata publication is pending `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199762](https://github.com/openclaw/openclaw/issues/199762) childRuntime reports available:true after a package upgrade breaks the running Node's shared libraries; children fail with 'cleanup identity lost: lifecycle channels were not created' `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199756](https://github.com/openclaw/openclaw/issues/199756) Native approval routing: request announced without an owner decision surface `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#199735](https://github.com/openclaw/openclaw/issues/199735) [Feature]: Localize model-failure notices in English and German, including WhatsApp `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#199742](https://github.com/openclaw/openclaw/issues/199742) [Bug]: cron run receipt sessionKey (:run:<sessionId>) not resolvable by sessions_history `P2` `impact:session-state` 💬1
- [#199737](https://github.com/openclaw/openclaw/issues/199737) [Bug]: Android reads full chat.history twice in parallel after every turn (no cursor, server-default 512 KiB) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#199714](https://github.com/openclaw/openclaw/issues/199714) [Bug]: Claude CLI runtime: sessions_history results over 50,000 characters are saved to a file instead of returned `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199725](https://github.com/openclaw/openclaw/issues/199725) [Bug]: Dreaming rank/apply eligibility mismatch persists in 2026.11.3 after administrative closure of #121232 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#199727](https://github.com/openclaw/openclaw/issues/199727) [Bug]: Windows native gateway fails at startup - Shared-state discovery snapshot cleanup failed (EBUSY) on Node 26.13.0 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#199731](https://github.com/openclaw/openclaw/issues/199731) [Bug]: sessions_yield drops explicit waiting acknowledgments for already-pending children `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199728](https://github.com/openclaw/openclaw/issues/199728) [Bug]: WhatsApp voice-note preparation blocks later direct-chat text messages `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199710](https://github.com/openclaw/openclaw/issues/199710) [Bug]: Usage summary shows $0.00 for fully unpriced usage `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199708](https://github.com/openclaw/openclaw/issues/199708) [Feature]: Version management for the shared skills directory (workshop has versions, the shared directory has none) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#199704](https://github.com/openclaw/openclaw/issues/199704) [Bug]: Active Memory allowedChatIds/deniedChatIds do not match Telegram forum topics by group chat id (2026.11.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#199702](https://github.com/openclaw/openclaw/issues/199702) [Feature]: Matrix — optionally treat replies to the bot as mentions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199701](https://github.com/openclaw/openclaw/issues/199701) Human corrections cannot steer background-completion work; assistant continues without updated instructions `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#199696](https://github.com/openclaw/openclaw/issues/199696) Update failure: update-executor-settlement (2026.9.9) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#199692](https://github.com/openclaw/openclaw/issues/199692) CLI and TUI always request `operator.read`, so a device paired with only `operator.sessions.write` can't read sessions and files a scope-upgrade request on every attempt `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199690](https://github.com/openclaw/openclaw/issues/199690) TUI: scroll position jumps to top when a reply finishes (content redraw clears scrollback) — working patch for pi-tui 1.0.3 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#199691](https://github.com/openclaw/openclaw/issues/199691) CLI and TUI won't connect through `gateway.remote.edgeAuth` without a Gateway token, so a Cloudflare Access user can't send the first pairing request `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199682](https://github.com/openclaw/openclaw/issues/199682) QA: classify Telegram upstream send timeout separately from policy reload defects `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#199680](https://github.com/openclaw/openclaw/issues/199680) Update failure: plugin-target-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#199671](https://github.com/openclaw/openclaw/issues/199671) [Feature]: Host-owned source evidence for scheduled script runs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199655](https://github.com/openclaw/openclaw/issues/199655) [Bug]: Expanded dashboard shows the chat position rail's marks over the widget's left edge `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199652](https://github.com/openclaw/openclaw/issues/199652) [Feature]: Let a direct-chat turn end silently (opt-in): NO_REPLY / reaction-only after "ok", "thanks" `enhancement` `P2` `impact:ux-friction` 💬1
- [#199649](https://github.com/openclaw/openclaw/issues/199649) [Bug]: Notifications fire for every agent message instead of once when work completes `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#199578](https://github.com/openclaw/openclaw/issues/199578) Feishu uploads Ogg Vorbis audio as file_type opus and sends it as a voice message `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199648](https://github.com/openclaw/openclaw/issues/199648) Restart catch-up records a transient agent startup-admission refusal as skipped, and skipped counts as covering the missed slot `P1` `impact:other` 💬1
- [#199643](https://github.com/openclaw/openclaw/issues/199643) [Bug]: DeepSeek usage loses valid balances when a sibling row is malformed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199439](https://github.com/openclaw/openclaw/issues/199439) [Bug]: `sanitizeForPlainText` is quadratic on nested non-convertible HTML and blocks outbound delivery `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#199566](https://github.com/openclaw/openclaw/issues/199566) [Bug]: sessions_list silently treats archived: "true" (string) as false and returns active sessions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199633](https://github.com/openclaw/openclaw/issues/199633) [Bug]: Claude CLI completion turn cannot read a child result above ~7,000 characters: hook context is capped at 10,000 characters and the message-only turn has no tool to open the spilled file `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199630](https://github.com/openclaw/openclaw/issues/199630) Update failure: package-update (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#199625](https://github.com/openclaw/openclaw/issues/199625) [Bug]: Gateway restart loop: task registry restore runs out of worker heap when task_runs holds a week of large CLI messages `impact:crash-loop` 💬1
- [#199619](https://github.com/openclaw/openclaw/issues/199619) macOS app: dashboard stuck on public "Conversation unavailable" page after gateway restart / app relaunch (native auth not treated as client credential) `bug` `bug:behavior` `P2` `clawsweeper:source-repro` 💬1
- [#199620](https://github.com/openclaw/openclaw/issues/199620) [Bug]: Template catalog omits automations converted from heartbeat inputs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199613](https://github.com/openclaw/openclaw/issues/199613) [Bug]: Child cleanup reports EINVAL after shell execution on Linux 4.4 (waitid __WALL unsupported) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199611](https://github.com/openclaw/openclaw/issues/199611) [Feature]: matrix: auto-join invites by inviter (allowFrom-driven autoJoin mode) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199612](https://github.com/openclaw/openclaw/issues/199612) [Bug]: Telegram plugin slash commands answer "no longer available after the plugin registry changed" after a config hot reload `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199610](https://github.com/openclaw/openclaw/issues/199610) [Feature]: channel pairing: Gateway methods to list approved senders and revoke an approval `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199606](https://github.com/openclaw/openclaw/issues/199606) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#199588](https://github.com/openclaw/openclaw/issues/199588) [Feature]: Per-job delivery prefix for cron announce, so a scheduled message carries its origin without relying on the model `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199581](https://github.com/openclaw/openclaw/issues/199581) [Bug]: Codex harness recreates the native thread when the per-run automations tool schema changes (cron management grant on/off) `P2` `impact:session-state` 💬1
- [#199576](https://github.com/openclaw/openclaw/issues/199576) [Bug]: Active Memory CJK trigger fix (#193156) shipped in no published release — 2026.11.3 and 2026.11.5-beta.3 still miss unspaced Chinese/Japanese triggers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#199569](https://github.com/openclaw/openclaw/issues/199569) Telegram poller never starts after boot while channels status reports connected (offset queued, never committed) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#199547](https://github.com/openclaw/openclaw/issues/199547) [Bug]: before_prompt_build lacks memoryAudience and hookInvocation (and still currentUserMessage) on the embedded and CLI runtimes (2026.11.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199548](https://github.com/openclaw/openclaw/issues/199548) [Bug]: plugins enable sets plugins.slots.contextEngine to a context-engine plugin without being asked (2026.11.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199549](https://github.com/openclaw/openclaw/issues/199549) [Bug]: npm update reports missing module cleanup failures after package swap (macOS, 2026.11.3) `P2` `impact:ux-friction` 💬1
- [#199537](https://github.com/openclaw/openclaw/issues/199537) [Bug]: Malformed tool call is not continued when the previous tool ran and returned an error (executionStarted: true) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#199533](https://github.com/openclaw/openclaw/issues/199533) Update failure: gateway-stop-unverified (2026.11.3) `P2` `impact:ux-friction` 💬1
- [#199521](https://github.com/openclaw/openclaw/issues/199521) Pending model-catalog discovery can defer plugin configuration indefinitely with unknown-owner leases `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#199522](https://github.com/openclaw/openclaw/issues/199522) [Bug]: A failed worker desktop cleanup is latched into the next acquire and is never retried `bug` `bug:behavior` 💬1
- [#199518](https://github.com/openclaw/openclaw/issues/199518) status --deep (text mode) fails with `Gateway check budget exhausted before health check.` while --json succeeds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199515](https://github.com/openclaw/openclaw/issues/199515) Usage refresh holds the agent database writer for seconds while pruning deleted sessions after a small cache grows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199472](https://github.com/openclaw/openclaw/issues/199472) Cron session notice says "Context overflow" after recovery compaction fails, while the cron run names the recovery failure `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199506](https://github.com/openclaw/openclaw/issues/199506) Investigate intermittent catalog config.changed timeouts in real-Gateway UI tests `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#199504](https://github.com/openclaw/openclaw/issues/199504) Feishu: restart continuation routes internal UUID as open_message_id → permanent dead letter `P2` `impact:other` 💬1
- [#199503](https://github.com/openclaw/openclaw/issues/199503) [Feature]: iOS Talk - switch between speaker and earpiece from the live Talk screen `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#199501](https://github.com/openclaw/openclaw/issues/199501) [Bug]: Windows: `gateway install --force` cannot replace an uninspectable legacy Scheduled Task launcher; update stays blocked (2026.10.7 -> 2026.11.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬1
- [#199466](https://github.com/openclaw/openclaw/issues/199466) [Feature]: add Santa Claws to the Lobsterdex `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#199454](https://github.com/openclaw/openclaw/issues/199454) [Feature]: Add a Colombian lobster, the Clawlombian, to the Lobsterdex `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199442](https://github.com/openclaw/openclaw/issues/199442) [Feature]: add the Clawnadian to the Lobsterdex `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#199440](https://github.com/openclaw/openclaw/issues/199440) [Bug]: Outbound chunking re-segments the entire remaining text per chunk (quadratic CPU and multi-GB RSS) `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#199435](https://github.com/openclaw/openclaw/issues/199435) [Bug]: Gateway discards a failed desktop teardown and the next pairing reuses the stale rejected cleanup promise `bug` `bug:behavior` 💬1
- [#199428](https://github.com/openclaw/openclaw/issues/199428) GPT-Live client-owned calls omit the rule against invented progress `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199417](https://github.com/openclaw/openclaw/issues/199417) Talk dictation stops working when the voice-note model's provider has no key, even with a working streaming provider `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199412](https://github.com/openclaw/openclaw/issues/199412) [Bug]: Gateway enters permanent draining state after restart on 2026.11.1/2026.11.3 (delayed ~40 min onset); all channel runs rejected with GatewayDrainingError; downgrade to 2026.10.10 resolves `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#199411](https://github.com/openclaw/openclaw/issues/199411) [Bug]: Direct chat gets "OpenClaw couldn't finish this request" seconds after a completed turn whose message-tool reply was delivered; no cause is logged `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#199401](https://github.com/openclaw/openclaw/issues/199401) Control UI: dashboards are hard to read and scroll on a phone `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1

#### 🔒 Closed Issues
- [#140631](https://github.com/openclaw/openclaw/issues/140631) PowerShell exec host: CLIXML errors with stderr merged into Select-Object on fresh runspaces
- [#150081](https://github.com/openclaw/openclaw/issues/150081) [Bug]: Possible prompt-cache regression on sessions_yield/announce: Ollama cached prefix drops from ~25.4k to ~14.3k tokens
- [#156774](https://github.com/openclaw/openclaw/issues/156774) [Feature]: Admit an opt-in model + reasoning-effort choice per turn
- [#150060](https://github.com/openclaw/openclaw/issues/150060) Server-side Anthropic context clearing has no bootstrap protection and no re-injection after a clearing event
- [#148603](https://github.com/openclaw/openclaw/issues/148603) [Bug]: claude-cli turns persist only the last model call's usage (stream-start output tokens) — usage.cost and Usage undercount
- [#143580](https://github.com/openclaw/openclaw/issues/143580) Heartbeat lane: post-tool continuation sent without transcript → confused non-silent reply delivered to channel (2026.9.3)
- [#175826](https://github.com/openclaw/openclaw/issues/175826) [Feature]: Android: match browser in-chat optional questions and native approval requests
- [#159057](https://github.com/openclaw/openclaw/issues/159057) ACP: task-maintenance cleanup re-ensures a completed oneshot, creating a duplicate no-prompt runtime session
- [#158431](https://github.com/openclaw/openclaw/issues/158431) message_sending hook context for cron announce deliveries carries no cron identity (jobId/runId/trigger)
- [#153955](https://github.com/openclaw/openclaw/issues/153955) [Bug]: 2026.9.5 — severe chat/composer lag and frequent timeouts across iOS app and WebUI
- [#145296](https://github.com/openclaw/openclaw/issues/145296) Is the unwired AuthStorage.login() intentional for Anthropic?
- [#130471](https://github.com/openclaw/openclaw/issues/130471) before_tool_call plugin hooks never run for a harness-vetoed critical-tier loop block -- getGlobalHookRunner() is unreachable past the early return
- [#199437](https://github.com/openclaw/openclaw/issues/199437) [Bug]: BOOT.md echo guard materializes every 80/81-character window and throws above ~8 MiB
- [#176659](https://github.com/openclaw/openclaw/issues/176659) [Bug]: Claude session catalog silently omits valid sessions after 64 MiB metadata discovery budget
- [#190855](https://github.com/openclaw/openclaw/issues/190855) release/2026.11.1: pnpm lint fails session-manager max-lines (701/705 vs 700)
- [#199593](https://github.com/openclaw/openclaw/issues/199593) [Bug]: backup git verify/restore fails on rows containing U+2028/U+2029 — Node readline splits JSONL records
- [#188437](https://github.com/openclaw/openclaw/issues/188437) [Bug]: Post-turn compaction fails with "agent tool caller authority is no longer active" on 2026.10.x releases; #159353 is on main only, and its coverage of other tool-started turns is unconfirmed
- [#186882](https://github.com/openclaw/openclaw/issues/186882) [Docs Bug]: Channel identity docs don't explain that a commands.ownerAllowFrom entry takes precedence over a linked administrator's operator authority
- [#178514](https://github.com/openclaw/openclaw/issues/178514) hooks: /hooks/wake and /hooks/agent silently turn unknown or misspelled wake modes into an immediate wake
- [#194330](https://github.com/openclaw/openclaw/issues/194330) [Bug]: Android partial model catalog refresh warning lacks failing-provider diagnostics
- [#183590](https://github.com/openclaw/openclaw/issues/183590) Talk / gpt-live-1-codex: are private model-authored observations supported in delegation input_text?
- [#198848](https://github.com/openclaw/openclaw/issues/198848) [Bug]: HEARTBEAT.md over 256 KiB or not UTF-8 passes templates validate, inspect and build, then Add planning fails with a generic CLI error
- [#191900](https://github.com/openclaw/openclaw/issues/191900) Control UI: channel setup text field loses keyboard focus after the Gateway rejects a reply
- [#195734](https://github.com/openclaw/openclaw/issues/195734) [Bug]: Template-only PRs skip their runtime test owners
- [#199723](https://github.com/openclaw/openclaw/issues/199723) [Bug]: Agent overflow menu collapses to one visible row near the bottom of the window
- [#167457](https://github.com/openclaw/openclaw/issues/167457) [Feature]: Android approval notifications with unlock-gated actions
- [#195031](https://github.com/openclaw/openclaw/issues/195031) [Bug]: Knowledge keyword search distinguishes canonically equivalent Greek spellings
- [#196112](https://github.com/openclaw/openclaw/issues/196112) 🦞 Lobby: a home for interactive tools created with your agent
- [#192203](https://github.com/openclaw/openclaw/issues/192203) [Feature]: iOS: make the main session discoverable in the session lists
- [#193278](https://github.com/openclaw/openclaw/issues/193278) [Bug]: iOS Files keeps a stale error after Load More succeeds
- [#190074](https://github.com/openclaw/openclaw/issues/190074) [Bug]: CLI KEY=VALUE flags silently drop a __proto__ key instead of rejecting it
- [#197109](https://github.com/openclaw/openclaw/issues/197109) Update failure: gateway-recovery-verification (2026.11.5-beta.1)
- [#194801](https://github.com/openclaw/openclaw/issues/194801) [Bug]: Gateway leaks one rolling-log file descriptor each time a short-lived SQLite Worker is terminated (~200/day, deleted logs stay open) on 2026.10.4
- [#199505](https://github.com/openclaw/openclaw/issues/199505) Update failure: candidate-doctor (2026.11.5-beta.1)
- [#188629](https://github.com/openclaw/openclaw/issues/188629) Control UI: a browser reload or tab close silently discards unsaved Raw config edits
- [#187850](https://github.com/openclaw/openclaw/issues/187850) [Bug]: Blockquote ">" marker leaks into plain-text previews without a following space
- [#199614](https://github.com/openclaw/openclaw/issues/199614) perf(sessions): transcript facts backfill restarts from zero and starves gateway RPC on large databases
- [#199101](https://github.com/openclaw/openclaw/issues/199101) [Bug]: MCP Events accepts impossible calendar dates in callbacks and subscription expiry
- [#199405](https://github.com/openclaw/openclaw/issues/199405) [Bug]: Inline Template review and publish reject mixed-case ClawHub personal handles
- [#198558](https://github.com/openclaw/openclaw/issues/198558) [Bug]: No CLI way to continue a Template agent kept after a failed Gateway Add
- [#198541](https://github.com/openclaw/openclaw/issues/198541) [Bug]: Adding the same Template again reports `mcp_server_collision` once its MCP environment variable is set
- [#198753](https://github.com/openclaw/openclaw/issues/198753) [Bug]: Bundled Template dependency errors do not say which entry is wrong or why
- [#198747](https://github.com/openclaw/openclaw/issues/198747) [Bug]: Template `agent.identity.avatar` validates against a case- and slash-folded path but is stored verbatim, so the avatar does not resolve
- [#198913](https://github.com/openclaw/openclaw/issues/198913) [Bug]: Kubernetes deployment help fails without a configured cluster
- [#198981](https://github.com/openclaw/openclaw/issues/198981) [Bug]: Kubernetes init-config reports success after configuration seeding fails
- [#198892](https://github.com/openclaw/openclaw/issues/198892) [Bug]: SSH config resolution changes identity filenames containing repeated whitespace
- [#198767](https://github.com/openclaw/openclaw/issues/198767) [Bug]: Binary workspace files in a Template are decoded as text in the catalog detail and preview
- [#198750](https://github.com/openclaw/openclaw/issues/198750) [Bug]: Two bundled plugin folders with the same plugin id pass validate and the Add preview, then fail after the agent is created
- [#198847](https://github.com/openclaw/openclaw/issues/198847) [Bug]: templates validate, build and dev reject a project whose manifest is at nested/CLAW.md, which the docs allow
- [#196403](https://github.com/openclaw/openclaw/issues/196403) Agent denies completing bootstrap on the next turn after BOOTSTRAP.md is removed
- [#199843](https://github.com/openclaw/openclaw/issues/199843) [Bug]: Fullscreen MCP Apps are clipped to a 150 px iframe in the Control UI conversation
- [#198536](https://github.com/openclaw/openclaw/issues/198536) [Bug]: Template MCP `timeout` / `connectTimeout` pass validation but fail Add after the agent is created
- [#199837](https://github.com/openclaw/openclaw/issues/199837) [Feature]: defer OpenClaw tool schemas on claude-cli turns (Tool Search or native ToolSearch)
- [#198569](https://github.com/openclaw/openclaw/issues/198569) Desktop companions: open identity-only ClawHub catalog review links
- [#199792](https://github.com/openclaw/openclaw/issues/199792) Feature request: personal drag-and-drop agent ordering for frequently used agents
- [#198755](https://github.com/openclaw/openclaw/issues/198755) [Bug]: `templates validate` and `build` reject a bundled folder near the documented 4,096-file limit that `inspect` and Add accept
- [#199778](https://github.com/openclaw/openclaw/issues/199778) Subagent terminal signal owner changed before commit logged at error on every superseded sub-agent run
- [#199771](https://github.com/openclaw/openclaw/issues/199771) `secrets apply` cannot write auth profiles to the shared auth store
- [#199742](https://github.com/openclaw/openclaw/issues/199742) [Bug]: cron run receipt sessionKey (:run:<sessionId>) not resolvable by sessions_history
- [#198500](https://github.com/openclaw/openclaw/issues/198500) Control UI chat: the text being read jumps while scrolling up through tool calls
- [#199680](https://github.com/openclaw/openclaw/issues/199680) Update failure: plugin-target-unavailable (2026.9.4)
- [#199652](https://github.com/openclaw/openclaw/issues/199652) [Feature]: Let a direct-chat turn end silently (opt-in): NO_REPLY / reaction-only after "ok", "thanks"
- [#198850](https://github.com/openclaw/openclaw/issues/198850) [Bug]: Scripts in a Template's bundled skill lose their executable bit, so the added agent cannot run them
- [#199578](https://github.com/openclaw/openclaw/issues/199578) Feishu uploads Ogg Vorbis audio as file_type opus and sends it as a voice message
- [#199648](https://github.com/openclaw/openclaw/issues/199648) Restart catch-up records a transient agent startup-admission refusal as skipped, and skipped counts as covering the missed slot
- [#199625](https://github.com/openclaw/openclaw/issues/199625) [Bug]: Gateway restart loop: task registry restore runs out of worker heap when task_runs holds a week of large CLI messages
- [#199581](https://github.com/openclaw/openclaw/issues/199581) [Bug]: Codex harness recreates the native thread when the per-run automations tool schema changes (cron management grant on/off)
- [#199549](https://github.com/openclaw/openclaw/issues/199549) [Bug]: npm update reports missing module cleanup failures after package swap (macOS, 2026.11.3)
- [#199533](https://github.com/openclaw/openclaw/issues/199533) Update failure: gateway-stop-unverified (2026.11.3)
- [#199522](https://github.com/openclaw/openclaw/issues/199522) [Bug]: A failed worker desktop cleanup is latched into the next acquire and is never retried
- [#199472](https://github.com/openclaw/openclaw/issues/199472) Cron session notice says "Context overflow" after recovery compaction fails, while the cron run names the recovery failure
- [#199504](https://github.com/openclaw/openclaw/issues/199504) Feishu: restart continuation routes internal UUID as open_message_id → permanent dead letter
- [#199435](https://github.com/openclaw/openclaw/issues/199435) [Bug]: Gateway discards a failed desktop teardown and the next pairing reuses the stale rejected cleanup promise
- [#198317](https://github.com/openclaw/openclaw/issues/198317) Browser: delayed document navigation bypasses strict SSRF policy after the 250 ms action guard

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 263,655 · **Open issues:** 53,356 · **Last push:** <1h ago

On November 15, 2026, Hermes Agent released canary version v0.23.1+canary.20261115T064406Z, which includes a new DMG download for macOS Apple Silicon users. A notable merged pull request addressed command functionality, implementing fixes for heredoc-aware command floors and enhancing usage with flags for same-string fetch-then-run and group/interpreter pipe sinks. Among the newly reported issues, the most significant is bug #155955, where a direct message to a pre-gateway bot chat results in unexpected behavior, freezing the user's window. Other critical bugs reported include issues with session movement between profiles and image saving in the Desktop application.

#### 🚀 New Releases
- [v0.23.1+canary.20261115T064406Z](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261115T064406Z) Hermes Agent canary v0.23.1+canary.20261115T064406Z

#### ✅ Merged PRs
- [#155467](https://github.com/NousResearch/hermes-agent/pull/155467) fix(approval): heredoc-aware command floors; flag same-string fetch-then-run, group/interpreter pipe sinks, brace command words

#### 🐛 New Issues
- [#155955](https://github.com/NousResearch/hermes-agent/issues/155955) [Bug][Bot Mode] First DM into a pre-gateway Bot Chat silently forks the chat: old row renamed, replacement minted hidden, user's window freezes `type/bug` `comp/gateway` `P2` `area/sessions` 💬5
- [#156267](https://github.com/NousResearch/hermes-agent/issues/156267) website_blocklist pinned in the managed scope is not enforced by the web tools `type/security` `comp/tools` `tool/web` `area/config` 💬2
- [#156000](https://github.com/NousResearch/hermes-agent/issues/156000) [Bug]: moving a session between profiles leaves it permanently un-resumable — receipts are not moved, and a routed row without a receipt is a dead end `type/bug` `comp/cli` `P2` `area/sessions` 💬2
- [#156032](https://github.com/NousResearch/hermes-agent/issues/156032) [Bug]: Desktop "Save Image" always fails for a pasted or dropped image — blob: source hits ERR_INVALID_PROTOCOL `type/bug` `tool/file` `P2` `comp/desktop` 💬2
- [#156262](https://github.com/NousResearch/hermes-agent/issues/156262) [Bug]: MCP: a parked HTTP server vanishes silently from tool_search, the gateway reconcile never wakes it, and a standalone dashboard never learns mcp_servers changes `type/bug` `comp/tools` `tool/mcp` `P2` 💬1
- [#156323](https://github.com/NousResearch/hermes-agent/issues/156323) fix(cron): a sync canonical fire inside a running loop books asyncio's own refusal as a job failure (gateway draining) `type/bug` `comp/cron` `P2` 💬1
- [#156324](https://github.com/NousResearch/hermes-agent/issues/156324) [Bug]: iOS upward swipes activate bottom-bar menus in the browser-hosted Desktop `type/bug` `P2` `comp/desktop` 💬1
- [#156311](https://github.com/NousResearch/hermes-agent/issues/156311) check_runtime warns 'install out of sync' on a sealed Docker image: pnpm is never present, and the venv stamp ignores plugin members that runtime discovery adds `type/bug` `comp/cli` `P2` `area/install-update` 💬1
- [#156255](https://github.com/NousResearch/hermes-agent/issues/156255) [Bug]: chat -q/-Q/--oneshot: a notify process that finishes mid-turn starts a second model turn that runs after the client has exited `type/bug` `comp/gateway` `tool/terminal` `backend/local` 💬1
- [#156254](https://github.com/NousResearch/hermes-agent/issues/156254) [Bug]: Desktop drops post-turn review.summary because it inherits the completed execution stamp `type/bug` `comp/gateway` `tool/memory` `P2` 💬1
- [#156256](https://github.com/NousResearch/hermes-agent/issues/156256) [Bug]: Desktop spoken-reply toggle is hard to discover; active voice conversation appears silently broken `type/bug` `tool/tts` `P2` `comp/desktop` 💬1
- [#156339](https://github.com/NousResearch/hermes-agent/issues/156339) [Bug]: Gateway burns ~0.5–1.2 cores at idle with multiple profile homes `type/perf` `comp/gateway` `P2` `area/profiles`
- [#156335](https://github.com/NousResearch/hermes-agent/issues/156335) Kanban: board removal must not orphan in-flight writers `type/bug` `comp/cli` `comp/plugins` `P2`
- [#156334](https://github.com/NousResearch/hermes-agent/issues/156334) [Bug]: legacy custom_providers entry drops key_cmd for auxiliary tasks (vision, titles, compression send no-key-required → 401) `type/bug` `comp/cli` `area/auth` `area/config`
- [#156320](https://github.com/NousResearch/hermes-agent/issues/156320) Kanban: chat-only board toolset, or keep kanban_* tools direct for dispatched workers under tool_search defer `type/feature` `comp/tools` `P3`
- [#156318](https://github.com/NousResearch/hermes-agent/issues/156318) Signed-in / session-expiry signal for saved vault logins (so the agent can say a site needs signing in again before a task fails) `type/feature` `tool/browser` `area/auth` `P2`
- [#156315](https://github.com/NousResearch/hermes-agent/issues/156315) Feature: emit OSC 7501 state sequences when running inside a Herdr pane (HC_TERMINAL_ID) `type/feature` `comp/tui` `P3`
- [#156316](https://github.com/NousResearch/hermes-agent/issues/156316) hermes vault import: bring existing logins in from a password-manager export (1Password, Bitwarden, Chrome) `type/feature` `area/auth` `P2` `comp/desktop`
- [#156303](https://github.com/NousResearch/hermes-agent/issues/156303) Kanban dispatcher: derive the worker run budget from the card's max_runtime_seconds `type/feature` `backend/modal` `comp/cron` `P3`
- [#156302](https://github.com/NousResearch/hermes-agent/issues/156302) kanban_create: accept max_retries in the tool schema `type/feature` `comp/tools` `comp/cron` `comp/plugins`
- [#156301](https://github.com/NousResearch/hermes-agent/issues/156301) Supported fresh-task vault bootstrap without browser_exec? `type/feature` `comp/cli` `tool/browser` `P3`

#### 🔒 Closed Issues
- [#84411](https://github.com/NousResearch/hermes-agent/issues/84411) [Bug]: Desktop hides background_review model pin and “Reset all to main” leaves it active
- [#140704](https://github.com/NousResearch/hermes-agent/issues/140704) [Bug]: command floors read heredoc bodies as shell: a quote in the body hides the next command from hardline and approvals.deny (rm -rf / approved under yolo)
- [#76883](https://github.com/NousResearch/hermes-agent/issues/76883) feat(memory): make memory mutations reversible — local archive for remove/replace (skill/memory delete asymmetry)
- [#142354](https://github.com/NousResearch/hermes-agent/issues/142354) [Bug][Desktop] Read-aloud cuts the first sentence of a short post-thinking reply and stamps a false user-interrupt
- [#136227](https://github.com/NousResearch/hermes-agent/issues/136227) [Bug]: copilot-acp returns 10 consecutive empty completions (finish=stop, no chunks); shim swallows chunk shapes and zeros usage

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,985 · **Open issues:** 10,435 · **Last push:** <1h ago

On November 16, 2026, vLLM did not release any new versions but saw significant activity in merged pull requests, including notable enhancements such as the support for routed experts with precision/disaggregation (PR #62056) and unquantized MoE LoRA support (PR #62807). Important bug fixes included addressing issues with caching behaviors and dynamic per-tensor FP8 processing. Among the new issues, a notable bug (#67755) was reported regarding the Tekken Mistral tokenizers mismanaging emojis and multi-byte characters, highlighting the need for attention to character encoding in tokenization processes. Overall, the day was marked by routine maintenance and refinements to existing features, rather than new releases.

#### ✅ Merged PRs
- [#65985](https://github.com/vllm-project/vllm/pull/65985) [ROCm][Muse Spark] DSpark draft layers as one persistent FlyDSL launch (--monokernel)
- [#62056](https://github.com/vllm-project/vllm/pull/62056) [Feature][AuxOutput] Support routed experts with P/D disaggregation
- [#64363](https://github.com/vllm-project/vllm/pull/64363) [Mooncake] Route KV transfers through a backend interface
- [#67817](https://github.com/vllm-project/vllm/pull/67817) [Recipe] Kimi-K3.1-Pro: MI355X kimi-k31-5c14fe8 image and SP prefill, align with InferenceX#5089
- [#67805](https://github.com/vllm-project/vllm/pull/67805) [ROCm][Perf][DSv4.1] Sort Engram host lookups by table offset on MI355X
- [#62807](https://github.com/vllm-project/vllm/pull/62807) [XPU][LoRA] Support unquantized MoE LoRA
- [#67717](https://github.com/vllm-project/vllm/pull/67717) [Bugfix][Mamba] Don't cache a block that a mid-block prefill resume ran past
- [#65974](https://github.com/vllm-project/vllm/pull/65974) [MoE][NVIDIA] Support SM107 in flashinfer_moe_ep_cutedsl for NVFP4 experts for FI 0.7.3
- [#67469](https://github.com/vllm-project/vllm/pull/67469) [Bugfix] Cap warmup and CUDA graph sizes to max_num_seqs * max_model_len
- [#66842](https://github.com/vllm-project/vllm/pull/66842) [ROCm][DeepSeek-V4.1] Enable eager prefill context parallel for DeepSeek-V4.1-Flash
- [#67691](https://github.com/vllm-project/vllm/pull/67691) [Bugfix][Muse Spark] Load the model classes lazily so importing the package doesn't initialize CUDA
- [#63976](https://github.com/vllm-project/vllm/pull/63976) [Fast Start] Support compressed-tensors CUTLASS block FP8 cache restarts
- [#67752](https://github.com/vllm-project/vllm/pull/67752) [CI][Test] Patch the platform class, not the instance, in the humming quantization tests
- [#65926](https://github.com/vllm-project/vllm/pull/65926) [Bugfix][DSv4.1] Use int64 row offsets in the K-cache gather kernels
- [#65992](https://github.com/vllm-project/vllm/pull/65992) [ROCm][DSv4.1][Perf] Run the fused mHC seams as AITER's single-launch HIP Mega-MHC
- [#67592](https://github.com/vllm-project/vllm/pull/67592) [Perf] Allow DeepGEMM/Triton block-FP8 MoE with FlashInfer NVLink all2all
- [#65534](https://github.com/vllm-project/vllm/pull/65534) [Core][MM] Make the multimodal encoder cache size configurable
- [#67753](https://github.com/vllm-project/vllm/pull/67753) [CI][Test] Keep dummy FP8 weights within +-1 in the HiSparse e2e tests
- [#67607](https://github.com/vllm-project/vllm/pull/67607) [KV Offload][Bugfix] Hold P2P e2e test ports until the tiers bind them
- [#67742](https://github.com/vllm-project/vllm/pull/67742) [CI] Require batch invariance for derender parity tests
- [#65658](https://github.com/vllm-project/vllm/pull/65658) [ROCm][PP] Stage hand-off on SDMA copy engines (--pp-sdma-handoff)
- [#67574](https://github.com/vllm-project/vllm/pull/67574) [CI] Fix NIXL EP import test
- [#63524](https://github.com/vllm-project/vllm/pull/63524) [Bugfix][KV Offload] Report only written blocks from fs tier store jobs
- [#66878](https://github.com/vllm-project/vllm/pull/66878) [Rust Frontend] Support n > 1 on /inference/v1/generate
- [#66494](https://github.com/vllm-project/vllm/pull/66494) [XPU] Flatten N-D input in XPU MXFP8 linear kernel
- [#67716](https://github.com/vllm-project/vllm/pull/67716) [CI] Load gte-Qwen2 without remote code in test_non_causal_models
- [#67611](https://github.com/vllm-project/vllm/pull/67611) [Bugfix][Audio] Treat zero decode limits as disabled
- [#67670](https://github.com/vllm-project/vllm/pull/67670) [Rust Frontend] Bump llm-multimodal version

#### 🐛 New Issues
- [#67755](https://github.com/vllm-project/vllm/issues/67755) [Bug]: Tekken Mistral tokenizers garble emoji and other multi-byte characters when special tokens are kept `bug` `mistral` 💬2
- [#67801](https://github.com/vllm-project/vllm/issues/67801) [Feature]: Support /v1/responses in vllm run-batch `feature request` 💬1
- [#67802](https://github.com/vllm-project/vllm/issues/67802) [Bug]: Dynamic Per-Tensor FP8 Amax Includes Stale Token IDs from CUDA-Graph Padding `bug` `quantization` 💬1
- [#67810](https://github.com/vllm-project/vllm/issues/67810) [Bug]: MTP speculative config checks num_speculative_tokens before it is resolved, against the wrong bound `bug`
- [#67790](https://github.com/vllm-project/vllm/issues/67790) [Bug]: /pooling always returns 400 on embedding servers with enable_chunked_processing `pooling`
- [#67786](https://github.com/vllm-project/vllm/issues/67786) [Bug]: LoRA adapter not applied in batches mixed with base requests under specialize_active_lora and CUDA graphs
- [#67781](https://github.com/vllm-project/vllm/issues/67781) [Feature]: One "no runtime host compilation" mode instead of discovering each nvcc-dependent kernel at engine init
- [#67779](https://github.com/vllm-project/vllm/issues/67779) [Bug]: Concurrent public-asset cache hits can return incomplete downloads `bug`
- [#67774](https://github.com/vllm-project/vllm/issues/67774) [Bug]: LoRA adapter with rank > max_lora_rank kills the engine (EngineDeadError) instead of failing the request `bug`
- [#67772](https://github.com/vllm-project/vllm/issues/67772) [Bug]: ALiBi models silently lose ALiBi on FlashInfer with --kv-cache-dtype fp8
- [#67769](https://github.com/vllm-project/vllm/issues/67769) [RFC]: MLP-only pruning of unconsumed rows in the final dense Llama layer `llama` `quantization`
- [#67763](https://github.com/vllm-project/vllm/issues/67763) Deadlock: workers that disagree on enable_extensible_kv_cache hang in initialize_from_config `kimi`
- [#67743](https://github.com/vllm-project/vllm/issues/67743) [Bug]: LLaVA-OneVision crashes when videos in one request have different frame counts `bug`
- [#67731](https://github.com/vllm-project/vllm/issues/67731) [Bug]: Synchronous asset downloads buffer the full response before writing

#### 🔒 Closed Issues
- [#66244](https://github.com/vllm-project/vllm/issues/66244) [Bug]: Qwen2.5-0.5B crashes with CUDA illegal memory access during initialization warmup
- [#67664](https://github.com/vllm-project/vllm/issues/67664) [CI Failure]: Quantization Shard 4/4 - quantization/test_modelopt.py::test_modelopt_(nested_mixed|mixed_dspark)_checkpoint
- [#65925](https://github.com/vllm-project/vllm/issues/65925) [Bug]: DeepSeek-V4.1 with DSpark adaptive verification crashes at startup on MI355X (TP8) with a GPU memory access fault
- [#64383](https://github.com/vllm-project/vllm/issues/64383) [RFC]: R3 as a KV cache layer: where routed-experts rows of prefix-cached blocks live
- [#67810](https://github.com/vllm-project/vllm/issues/67810) [Bug]: MTP speculative config checks num_speculative_tokens before it is resolved, against the wrong bound

### SGLang (`sgl-project/sglang`)

**Stars:** 38,917 · **Open issues:** 6,744 · **Last push:** <1h ago

On November 16, 2026, SGLang did not see any new releases, but several important pull requests were merged. Notable updates included a fix for the custom-ar-v2 to finalize symmetric workspaces in registration order (#50572) and the introduction of the `--language-model-only` support for gemma4 (#49511). Performance enhancements were made with optimizations for hybrid GDN and QSA models on NVIDIA (#50156), as well as substantial improvements to memory handling in DFlash auxiliary CUDA graphs addressing GPU memory growth issues (#50577). Additionally, new issues arose, including a bug related to long chat prompts returning HTTP 500 errors, highlighting ongoing challenges in stability and performance tuning.

#### ✅ Merged PRs
- [#50572](https://github.com/sgl-project/sglang/pull/50572) [Fix] custom-ar-v2: Finalize symmetric workspaces in registration order
- [#49511](https://github.com/sgl-project/sglang/pull/49511) [Feat] gemma4: Support --language-model-only
- [#45655](https://github.com/sgl-project/sglang/pull/45655) [Doc] [NPU] cookbook: add A3 deployment scenarios to GLM-5.1
- [#50659](https://github.com/sgl-project/sglang/pull/50659) [CI] rust: Cache the Rust Ext cargo target dir and narrow the sgl-router cache key
- [#50156](https://github.com/sgl-project/sglang/pull/50156) [Perf] [NVIDIA] runtime: Blackwell/Rubin serving optimizations for hybrid GDN + QSA + MoE models
- [#50027](https://github.com/sgl-project/sglang/pull/50027) [CI] NPU: Align precision baseline OBS paths
- [#50157](https://github.com/sgl-project/sglang/pull/50157) [Feat] [NVIDIA] megakernel-binding: state, pool, prefill-graph and draft-step views for hybrid models
- [#50641](https://github.com/sgl-project/sglang/pull/50641) [CI] megakernel: Select sgl-nvidia-mega's e2e tests from its per-model list
- [#50662](https://github.com/sgl-project/sglang/pull/50662) [Doc] diffusion: Center the logo wall and update MOSS branding
- [#50254](https://github.com/sgl-project/sglang/pull/50254) [Doc] diffusion: Document Z-Image output size alignment
- [#49870](https://github.com/sgl-project/sglang/pull/49870) [Perf] [AMD] dsa: Split the prefill indexer for short extends and use FlyDSL logits
- [#50556](https://github.com/sgl-project/sglang/pull/50556) [Doc] diffusion: Add adoption and integrations logo wall
- [#49407](https://github.com/sgl-project/sglang/pull/49407) [Perf] [AMD] dsa: Balance the indexer over long rows under DCP
- [#50653](https://github.com/sgl-project/sglang/pull/50653) [Fix] inkling2: Ignore the Hub ModelOpt quantization_config stub
- [#33506](https://github.com/sgl-project/sglang/pull/33506) [Fix] [AMD] dsa: Fix Triton cache flooding in aiter backend
- [#50147](https://github.com/sgl-project/sglang/pull/50147) [Fix] dp-attention: Deliver an abort behind its request on every DP rank
- [#50655](https://github.com/sgl-project/sglang/pull/50655) [Chore] pre-commit: Skip sglang-server in the clippy hook on macOS
- [#50604](https://github.com/sgl-project/sglang/pull/50604) [CI] amd: Build sgl-router in the ROCm image and launch it in the MI355X PD nightly
- [#49759](https://github.com/sgl-project/sglang/pull/49759) [Fix] tokenizer_manager: Validate token_indices_to_pool at request entry
- [#50606](https://github.com/sgl-project/sglang/pull/50606) [CI] rust: Build the CI Rust extensions with a thin-LTO `ci` profile
- [#50603](https://github.com/sgl-project/sglang/pull/50603) [CI] rerun-test: Keep the job token away from fork code, mark NPU runs running, and take --hw in /rerun-group
- [#49955](https://github.com/sgl-project/sglang/pull/49955) [Feat] [AMD] custom-all-reduce: Add a ring all-reduce and an unrolled 2shot_push on gfx1250
- [#50374](https://github.com/sgl-project/sglang/pull/50374) [Feat] jit: In-kernel event tracing for debugging (IKET and %clock backends)
- [#43048](https://github.com/sgl-project/sglang/pull/43048) [Feat] qwen4-exp: Support GR and PLE sequence parallelism
- [#50358](https://github.com/sgl-project/sglang/pull/50358) [Fix] diffusion/qwen-image-2.1: Size edit outputs and references as Diffusers does
- [#49328](https://github.com/sgl-project/sglang/pull/49328) [Fix] hicache: Report L3 prefetch tokens already cached during the read
- [#50311](https://github.com/sgl-project/sglang/pull/50311) [Perf] mem_cache: Cut unified-memory admission host work
- [#50310](https://github.com/sgl-project/sglang/pull/50310) [Perf] mem_cache: Batch unified-memory slot and page hand-outs
- [#50309](https://github.com/sgl-project/sglang/pull/50309) [Perf] mem_cache: Relieve unified memory without host reads
- [#50308](https://github.com/sgl-project/sglang/pull/50308) [Perf] mem_cache: Clear and copy unified-memory state entries word-wide
- [#50307](https://github.com/sgl-project/sglang/pull/50307) [Perf] gdn: Run GDN prefill in place on a unified-memory state pool
- [#50306](https://github.com/sgl-project/sglang/pull/50306) [Perf] gdn: Remove host stalls from GDN prefill
- [#46412](https://github.com/sgl-project/sglang/pull/46412) [Refactor] multimodal: [MM refactor 6/9] Serve token-space processors behind --enable-token-space-processor
- [#50435](https://github.com/sgl-project/sglang/pull/50435) [Fix] sgl-router: Handle inline system messages on /v1/messages the way the engine does
- [#50592](https://github.com/sgl-project/sglang/pull/50592) [CI] [NPU] tests: Read test files from the checkout, not runner caches or the CI workspace path
- [#50593](https://github.com/sgl-project/sglang/pull/50593) [CI] rerun-test: Read registrations with one parser and share the rerun loop
- [#50584](https://github.com/sgl-project/sglang/pull/50584) [CI] npu: Launch sgl-router in the NPU multi-node tests and ship it in the NPU image
- [#38751](https://github.com/sgl-project/sglang/pull/38751) [Feat] kernels: Add out-of-tree dispatch for causal Conv1D
- [#50481](https://github.com/sgl-project/sglang/pull/50481) [Perf] pp: Bound the PD poll and grammar PP-sync sends by the pipeline depth, not one round
- [#50530](https://github.com/sgl-project/sglang/pull/50530) [Fix] diffusion: Request PDL in the HunyuanVideo QK RMSNorm site only on SM90+
- [#50357](https://github.com/sgl-project/sglang/pull/50357) [Fix] diffusion: Align Wan text-to-video request sizes to the 16-pixel patch grid
- [#50184](https://github.com/sgl-project/sglang/pull/50184) [Fix] diffusion: Honor the channel_dim override in LTX-2 PerChannelRMSNorm
- [#50182](https://github.com/sgl-project/sglang/pull/50182) [Fix] diffusion: Answer 400 for invalid mesh sampling parameters
- [#44861](https://github.com/sgl-project/sglang/pull/44861) [Fix] [NVIDIA] modelopt: Keep SM12x FP8 batch-invariant in deterministic mode
- [#50122](https://github.com/sgl-project/sglang/pull/50122) [Feat] mem_cache: Add an opt-in state-only, cost-based eviction order for Mamba states (--radix-eviction-policy state_cost)
- [#49717](https://github.com/sgl-project/sglang/pull/49717) [Feat] kv-cache: Let platform plugins register KV cache dtypes
- [#46392](https://github.com/sgl-project/sglang/pull/46392) [Fix] Kimi-K3: Reject flashinfer_mxfp4 SiTU experts on SM90/SM120
- [#50550](https://github.com/sgl-project/sglang/pull/50550) [CI] [AMD] disaggregation: Disable UCX ROCm dmabuf registration for the NIXL e2e test
- [#50389](https://github.com/sgl-project/sglang/pull/50389) [Perf] [NVIDIA] diffusion: Read both TP ranks' partial sums in the epilogue kernel (Z-Image, Qwen-Image-2.1)
- [#47126](https://github.com/sgl-project/sglang/pull/47126) [Perf] hicache: Reuse the host eviction heap across one write_back eviction walk
- [#50590](https://github.com/sgl-project/sglang/pull/50590) [Fix] inkling: Render prompts through the tml-renderers OpenAI Chat entry point
- [#50183](https://github.com/sgl-project/sglang/pull/50183) [Doc] diffusion: Update the CausalWanSelfAttention Args block after #44753
- [#40893](https://github.com/sgl-project/sglang/pull/40893) [Fix] spec: Support a reduced draft vocabulary in rejection sampling
- [#47802](https://github.com/sgl-project/sglang/pull/47802) [Fix] attention: Triton decode reads wrong KV head for GQA groups > 16 not divisible by 16 (GLM-4-32B breaks)
- [#50441](https://github.com/sgl-project/sglang/pull/50441) [Fix] diffusion: Build an offloaded text encoder's RoPE table on the GPU so offload gives the resident output
- [#45898](https://github.com/sgl-project/sglang/pull/45898) [Fix] granitemoe: Declare packed_modules_mapping so per-projection quant targets match qkv_proj
- [#49089](https://github.com/sgl-project/sglang/pull/49089) [Feat] glm5.3flash: Allow PD prefill CP with native MTP or without speculative decoding
- [#50580](https://github.com/sgl-project/sglang/pull/50580) [CI] rerun-test: Run AMD test files with --hw amd, through a shared AMD setup action
- [#50586](https://github.com/sgl-project/sglang/pull/50586) [Fix] auth: Key-check wrong methods by route and allowlist `/internal/peer` messages
- [#47060](https://github.com/sgl-project/sglang/pull/47060) [Fix] observability: Snapshot STANDALONE metrics before settlement
- [#50044](https://github.com/sgl-project/sglang/pull/50044) [Feat] grpc: Advertise api.v1 owning-runtime instance identity
- [#50562](https://github.com/sgl-project/sglang/pull/50562) [CI] rerun-test: Run NPU single-node test files, with --hw to pick the backend
- [#50559](https://github.com/sgl-project/sglang/pull/50559) [Refactor] auth: Declare every HTTP route's auth level in one table that the Python and Rust servers both read
- [#50560](https://github.com/sgl-project/sglang/pull/50560) [CI] npu: Run the checked-out sglang in the NPU nightly and honor job_filter
- [#50387](https://github.com/sgl-project/sglang/pull/50387) [Perf] diffusion: Write varlen SDPA segments in place when the backend can
- [#50391](https://github.com/sgl-project/sglang/pull/50391) [Perf] minimax-h3: Fuse the attention gated residual with the norm2 modulation
- [#50558](https://github.com/sgl-project/sglang/pull/50558) [Test] test_utils: Add ADMIN_LAUNCH_ARGS_FOR_TEST and admin_post for tests that call admin endpoints
- [#50234](https://github.com/sgl-project/sglang/pull/50234) [Fix] weights: Reject mismatched manifests before distributed broadcasts
- [#50197](https://github.com/sgl-project/sglang/pull/50197) [Perf] attention: Avoid host synchronization in GDN MIS state resets
- [#49803](https://github.com/sgl-project/sglang/pull/49803) [Fix] attention: Widen GDN chunk-state offsets to int64 before multiplying
- [#49170](https://github.com/sgl-project/sglang/pull/49170) [Fix] deepseek-v4.1: Keep active DP decode ranks out of idle tail replay
- [#50002](https://github.com/sgl-project/sglang/pull/50002) [Perf] [NVIDIA] gemma4: write o_proj/down_proj partials straight into the AR-fusion symmetric buffer

#### 🐛 New Issues
- [#50672](https://github.com/sgl-project/sglang/issues/50672) [NPU] GLM-5.2 W4A8 single-node 128K deployment and tuning report 💬1
- [#50577](https://github.com/sgl-project/sglang/issues/50577) [Bug] DFlash auxiliary CUDA graphs retain per-batch-size buffers, causing excessive GPU memory growth 💬1
- [#50646](https://github.com/sgl-project/sglang/issues/50646) [Bug] `--tokenizer-backend fastokens`: long chat prompts return HTTP 500 from parallel prompt encode
- [#50644](https://github.com/sgl-project/sglang/issues/50644) [Bug] Stale Tokens Corrupt LongCat N-Gram Embeddings on Slot Reuse
- [#50596](https://github.com/sgl-project/sglang/issues/50596) [Bug] Silent score corruption for Sliding-Window Attention models under --enable-mis (FlashInfer forces window_left=-1)
- [#50583](https://github.com/sgl-project/sglang/issues/50583) [Bug] inkling2: Generic ModelOpt metadata overrides checkpoint precision config
- [#50568](https://github.com/sgl-project/sglang/issues/50568) [Bug] After enable_batch_invariant_mode(), x.mean() over all elements of a CUDA tensor returns the sum
- [#50574](https://github.com/sgl-project/sglang/issues/50574) [Bug] MLA + DCP: attn_dcp_metadata is None on an extend with a prefix-cache hit

#### 🔒 Closed Issues
- [#22511](https://github.com/sgl-project/sglang/issues/22511) [Bug] sglang v0.5.10 2 * H100 deploy glm5 report health check failed. server could not get a response from detokenizer for last 20 seconds
- [#30209](https://github.com/sgl-project/sglang/issues/30209) [Bug] GlmMoeDsa (GLM-5.2) FP4 + EAGLE: illegal memory access in flashinfer_trtllm bf16 batched-GEMM (nextn draft MoE); triton nextn default is HIP-gated after #30137
- [#50348](https://github.com/sgl-project/sglang/issues/50348) [Bug] sgl-router: /v1/messages returns 400 for requests with inline role="system"
- [#45755](https://github.com/sgl-project/sglang/issues/45755) [Bug] Kimi-K3 on SM90: `flashinfer_mxfp4` silently computes GPT-OSS SwiGLU instead of SiTU
- [#36859](https://github.com/sgl-project/sglang/issues/36859) [Bug] Kimi-K3 output abnormal when high pressure
- [#39400](https://github.com/sgl-project/sglang/issues/39400) [Bug]Unauthenticated PUT /route on Bootstrap HTTP allows route poisoning and metadata redirection
- [#38854](https://github.com/sgl-project/sglang/issues/38854) [Bug] Qwen3.5 hybrid (GDN) GPTQ checkpoint: `linear_attn.in_proj_ba` built as quantized although the checkpoint stores `in_proj_a/b` as bf16 → 96× "not found in params_dict", then `gptq_marlin_repack` fails (size_n=96)
- [#34676](https://github.com/sgl-project/sglang/issues/34676) [Bug] Hybrid Mamba prefill allocation failure kills scheduler instead of returning request to waiting queue
- [#39444](https://github.com/sgl-project/sglang/issues/39444) [Bug] HiCache write_through does not fully persist first-seen prefixes before eviction
- [#39838](https://github.com/sgl-project/sglang/issues/39838) Session traffic (streaming/tree sessions + aborts + close_session) trips 'pool memory leak detected' (session_held) on dev head 741f05e6, lease pool OFF
- [#39599](https://github.com/sgl-project/sglang/issues/39599) [Bug] Match OpenAI tool schema field order and omission semantics for `strict` and `defer_loading`
- [#39846](https://github.com/sgl-project/sglang/issues/39846) [Bug] [PD][NIXL] Receiver declares multi-component state transfer complete after first component
- [#39842](https://github.com/sgl-project/sglang/issues/39842) [Bug] Python OpenAI Chat loses logprob candidates and streaming token records
- [#39764](https://github.com/sgl-project/sglang/issues/39764) [Bug] Unbounded chunk_idx in PD disaggregation staging path causes Decode scheduler OOM
- [#39708](https://github.com/sgl-project/sglang/issues/39708) [Bug] Janus-Pro CLIPVisionTower image normalization cannot run: Normalize is shadowed, and the transform calls torch.nn.functional.normalize
- [#39689](https://github.com/sgl-project/sglang/issues/39689) [Bug] Cold TokenizerWorker can hang on pause/continue because its receive loop is not initialized
- [#39685](https://github.com/sgl-project/sglang/issues/39685) Regression on main — DFLASH speculative decoding with Qwen4-Exp crashes in decode CUDA-graph capture; the fix is the Qwen4-Exp capture guard in #38642
- [#39681](https://github.com/sgl-project/sglang/issues/39681) [Bug] GitHub: Standard users do not have permission to reopen issues.
- [#50137](https://github.com/sgl-project/sglang/issues/50137) [Bug] DP attention: an abort of a running request can be lost and the request runs to max_new_tokens

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 135,217 · **Open issues:** 2,618 · **Last push:** 1h ago

On November 16, 2026, the latest updates to llama.cpp saw the release of several new versions, including b12428 and b12429, which introduced additional features for the jinja framework and improved support for the higgs v3 STT and vibevoice-ASR in the mtmd module. Notably, b12420 provided model support for MiniMax-M3.1, while b12424 added the zonos3-mini TTS model, enhancing text-to-speech capabilities. Significant contributions merged today included a fix for ripple dflash2 NoPE metadata and an update to server configurations to improve model performance. Additionally, a new issue emerged regarding control vectors and their inconsistent behavior in multi-turn chats, spotlighting potential concerns with KV cache interactions.

#### 🚀 New Releases
- [b12428](https://github.com/ggml-org/llama.cpp/releases/tag/b12428) b12428
- [b12427](https://github.com/ggml-org/llama.cpp/releases/tag/b12427) b12427
- [b12426](https://github.com/ggml-org/llama.cpp/releases/tag/b12426) b12426
- [b12425](https://github.com/ggml-org/llama.cpp/releases/tag/b12425) b12425
- [b12424](https://github.com/ggml-org/llama.cpp/releases/tag/b12424) b12424
- [b12423](https://github.com/ggml-org/llama.cpp/releases/tag/b12423) b12423
- [b12422](https://github.com/ggml-org/llama.cpp/releases/tag/b12422) b12422
- [b12421](https://github.com/ggml-org/llama.cpp/releases/tag/b12421) b12421
- [b12420](https://github.com/ggml-org/llama.cpp/releases/tag/b12420) b12420
- [b12419](https://github.com/ggml-org/llama.cpp/releases/tag/b12419) b12419

#### ✅ Merged PRs
- [#32363](https://github.com/ggml-org/llama.cpp/pull/32363) convert: fix ripple dflash2 NoPE metadata
- [#32352](https://github.com/ggml-org/llama.cpp/pull/32352) jinja: add 4 missing features
- [#32359](https://github.com/ggml-org/llama.cpp/pull/32359) server : skip MCP discovery for router children
- [#26348](https://github.com/ggml-org/llama.cpp/pull/26348) ggml-cpu: add x86 VNNI Q2_0 dot product -- 3x speed improvement for VNNI-compatible CPUs
- [#32329](https://github.com/ggml-org/llama.cpp/pull/32329) mtmd: support higgs v3 STT and vibevoice-ASR
- [#32349](https://github.com/ggml-org/llama.cpp/pull/32349) model : read qwen3vl output head size from the tensor
- [#32020](https://github.com/ggml-org/llama.cpp/pull/32020) mtmd: add zonos3-mini TTS model
- [#32304](https://github.com/ggml-org/llama.cpp/pull/32304) docs: move per-model TTS to /docs, refer it from other pages
- [#32301](https://github.com/ggml-org/llama.cpp/pull/32301) model: support MiniMax-M3.1
- [#32093](https://github.com/ggml-org/llama.cpp/pull/32093) server : ignore empty stop strings
- [#32331](https://github.com/ggml-org/llama.cpp/pull/32331) CI/HIP: update fattn symbol names in hip-quality-check
- [#31904](https://github.com/ggml-org/llama.cpp/pull/31904) Support DFLASH2 for Recursive Ripple-65B-Preview
- [#32321](https://github.com/ggml-org/llama.cpp/pull/32321) server : fix output_config.effort being dropped in /v1/messages
- [#31617](https://github.com/ggml-org/llama.cpp/pull/31617) CUDA/HIP: Refactor the use of _sync warp primitives
- [#32294](https://github.com/ggml-org/llama.cpp/pull/32294) chat: fix inkling 2 begin/end of image tokens placement
- [#32305](https://github.com/ggml-org/llama.cpp/pull/32305) vendor: sync stb_image
- [#32154](https://github.com/ggml-org/llama.cpp/pull/32154) server: refactor, add server_slot_sched, prompt running hash
- [#30279](https://github.com/ggml-org/llama.cpp/pull/30279) Fail `test-backend-ops` and exit with error status 1 when missing and/or unsupported types and/or unsupported backends are provided in the command line
- [#30367](https://github.com/ggml-org/llama.cpp/pull/30367) server : clear slot cache when the global lora config changes
- [#30949](https://github.com/ggml-org/llama.cpp/pull/30949) opencl: add bin kernel `kernel_gemm_noshuffle_q6_k_f32_32b_trans_ila_a7_bin`

#### 🐛 New Issues
- [#32341](https://github.com/ggml-org/llama.cpp/issues/32341) Misc. bug: Control vectors behave fundamentally differently from LoRAs in multi-turn chats because steering is written into and re-read from KV cache `bug-unconfirmed` 💬2
- [#32353](https://github.com/ggml-org/llama.cpp/issues/32353) Eval bug: Vulkan FA prefill crashes in amdvlk64.dll on RDNA3/Windows (flip-direct path from #31323) 💬1
- [#32316](https://github.com/ggml-org/llama.cpp/issues/32316) Server bug: cache reuse disabled for IMROPE models (Qwen3.5), full re-prefill on every follow-up `bug-unconfirmed` 💬1
- [#32326](https://github.com/ggml-org/llama.cpp/issues/32326) SYCL: intermittent FLASH_ATTN_EXT hang on Arc A770 (DG2) — timing-sensitive, not reproducible after stderr probe 💬1
- [#32325](https://github.com/ggml-org/llama.cpp/issues/32325) Perf: Gemma4 SWA mask rebuild is only ~3% of decode time on A770 — long-context overhead is GPU-side 💬1
- [#32324](https://github.com/ggml-org/llama.cpp/issues/32324) Perf: MTP speculative decoding is a net loss on Arc A770 SYCL (40.1% acceptance, 9.05 vs 10.4 t/s) 💬1
- [#32323](https://github.com/ggml-org/llama.cpp/issues/32323) Perf: generic IQ3_S SoA reorder is 8× slower on SYCL MoE — needs fg_soa<block_iq3_s> specialization 💬1
- [#32322](https://github.com/ggml-org/llama.cpp/issues/32322) Perf: SYCL MoE decode is host/launch-bound on Arc A770 — 90 MUL_MAT_ID/token, graph replay only +9.7% 💬1
- [#32370](https://github.com/ggml-org/llama.cpp/issues/32370) Eval bug: Vulkan on Intel Meteor Lake (UMA): two CPU/GPU sync races corrupt multi-ubatch prompt processing `bug-unconfirmed`
- [#32367](https://github.com/ggml-org/llama.cpp/issues/32367) Eval bug: DeepSeek-V4.1 UD-IQ1_M emits garbage with op offload enabled (CUDA, sm_120); correct with --no-op-offload
- [#32362](https://github.com/ggml-org/llama.cpp/issues/32362) Misc. bug: Gemma 4 tools use (again) `bug-unconfirmed`
- [#32361](https://github.com/ggml-org/llama.cpp/issues/32361) Misc. bug: Web UI becomes unresponsive (Svelte effect_update_depth_exceeded) when Chrome default font size is set to 24 or more `bug-unconfirmed`
- [#32360](https://github.com/ggml-org/llama.cpp/issues/32360) server: /v1/responses rejects spec-shaped reasoning input items (no non-empty content array), breaking thinking models on the second turn
- [#32350](https://github.com/ggml-org/llama.cpp/issues/32350) Eval bug: HIP: VMM memory pool cannot grow on gfx1200 (cuMemSetAccess returns hipErrorInvalidValue) `bug-unconfirmed`
- [#32348](https://github.com/ggml-org/llama.cpp/issues/32348) Eval bug: Title: Qwen3.5-9B: tool_choice=required fails to reach tool call with prompt-cache reuse (controlled 11-request replay) `bug-unconfirmed`
- [#32347](https://github.com/ggml-org/llama.cpp/issues/32347) Eval bug: with -fa on, RPC backend aborts or hangs at the ubatch crossing 16384 tokens (Metal, 4-node pipeline, gpt-oss-120b)
- [#32340](https://github.com/ggml-org/llama.cpp/issues/32340) Eval bug: CUDA error at ggml-cuda.cu:113 / :110 on Quadro RTX 6000 (Turing sm_75) during model load; same build works on RTX A6000 `bug-unconfirmed`
- [#32339](https://github.com/ggml-org/llama.cpp/issues/32339) Eval bug: LFM3 does not restore context checkpoints within 256 of the prompt end `bug-unconfirmed`
- [#32338](https://github.com/ggml-org/llama.cpp/issues/32338) docs: --cache-ram help text uses 0 for two meanings and does not say what 'decision models' are
- [#32336](https://github.com/ggml-org/llama.cpp/issues/32336) server: timings.cache_n reveals how much of another client's prompt matches on a shared slot
- [#32335](https://github.com/ggml-org/llama.cpp/issues/32335) server: a malformed JSON body echoes part of the request into the 400 response and the default log
- [#32334](https://github.com/ggml-org/llama.cpp/issues/32334) Advisory GHSA-96jg-mvhq-q7q7 (CVE-2026-33298): vulnerable range < b7437 and patched b7824 leave b7437 to b7823 unclassified
- [#32333](https://github.com/ggml-org/llama.cpp/issues/32333) Docker: server images bake LLAMA_ARG_HOST and LLAMA_ARG_PORT into ENV, so a deployment cannot run with an empty environment
- [#32315](https://github.com/ggml-org/llama.cpp/issues/32315) Misc. bug: FP8 KV cache (-ctk/-ctv f8_e4m3) aborts at load on Vulkan: cache_k view in Vulkan0 cannot run SET_ROWS
- [#32314](https://github.com/ggml-org/llama.cpp/issues/32314) Misc. bug: llama-server prompt cache (default --cache-ram) downloads the slot KV from RPC devices on every new request

#### 🔒 Closed Issues
- [#27198](https://github.com/ggml-org/llama.cpp/issues/27198) Eval bug: [SYCL] --split-mode tensor crashes in dev2dev_memcpy (DEVICE_LOST) on dual Arc Pro B70, despite working P2P
- [#27306](https://github.com/ggml-org/llama.cpp/issues/27306) Eval bug: draft-mtp DeviceLost during *prompt* on AMD RADV — `common_speculative_process` runs `llama_decode(ctx_dft)` after every prefill ubatch
- [#28902](https://github.com/ggml-org/llama.cpp/issues/28902) Misc. bug: M-RoPE embedding batches read batch.pos past the end of the documented n_tokens array
- [#26409](https://github.com/ggml-org/llama.cpp/issues/26409) Eval bug: SYCL `--split-mode tensor` is 3x slower than a single GPU, and hangs with a quantized KV cache
- [#27792](https://github.com/ggml-org/llama.cpp/issues/27792) CUDA MMQ mul_mat_id: src1_q8_1 tail padding computed from ne11 (== 1 for MoE) -> out-of-bounds read, illegal memory access for some ubatch sizes
- [#29521](https://github.com/ggml-org/llama.cpp/issues/29521) [Bug] macOS Metal OOM & Compute error (-3) on Gemma 4 31B after update: Insufficient Memory with large default n_ctx
- [#29175](https://github.com/ggml-org/llama.cpp/issues/29175) llama-server: one prefill chunk blocks decode for all sequences — co-tenant stalls = ceil(prompt/n_batch), so `-b = n_parallel x -ub` maximises them
- [#26143](https://github.com/ggml-org/llama.cpp/issues/26143) Eval bug: RPC Node Cache Grows without Bound?
- [#29174](https://github.com/ggml-org/llama.cpp/issues/29174) Eval bug: Qwen3.8-Flash-Next MTP draft GGUFs fail to load on b11058 (tensor not found) — no MTP path on Pascal
- [#29201](https://github.com/ggml-org/llama.cpp/issues/29201) Feature Request: export/import slot state over http
- [#29341](https://github.com/ggml-org/llama.cpp/issues/29341) Performance regression between b10655 and b11140 on CUDA (arm64, Blackwell)
- [#29829](https://github.com/ggml-org/llama.cpp/issues/29829) Feature Request: pipeline parallel encoding on single GPU
- [#29780](https://github.com/ggml-org/llama.cpp/issues/29780) [Bug]: Granite4 Vision mmproj with downsample_window_side=0 crashes at load (integer division by zero in warmup graph build) [refile of #27222]
- [#29658](https://github.com/ggml-org/llama.cpp/issues/29658) Feature Request: RDMA over infiband
- [#29782](https://github.com/ggml-org/llama.cpp/issues/29782) Misc. bug: CPU thread default undercounts cores on Apple chips with Super + Performance clusters
- [#29845](https://github.com/ggml-org/llama.cpp/issues/29845) Fix size-suffix threshold so exact 1M/1B/1T counts use the larger unit
- [#29865](https://github.com/ggml-org/llama.cpp/issues/29865) Misc. bug: infinite loop in server_tokens::push_back(server_tokens&) when the appended tokens contain media
- [#29884](https://github.com/ggml-org/llama.cpp/issues/29884) [Android/aarch64] Backend score prefers the SVE2 variant, which is 2x slower than the non-SVE variant on 128-bit VL mobile cores
- [#30564](https://github.com/ggml-org/llama.cpp/issues/30564) Misc. bug: Anthropic /v1/messages drops output_config.effort
- [#30366](https://github.com/ggml-org/llama.cpp/issues/30366) Misc. bug: server: slot KV is reused after the global lora config changes
- [#27904](https://github.com/ggml-org/llama.cpp/issues/27904) Make test-backend-ops perf --output csv usefull
- [#29815](https://github.com/ggml-org/llama.cpp/issues/29815) Misc. bug: TOCTOU race in router mode worker port selection
- [#29820](https://github.com/ggml-org/llama.cpp/issues/29820) Feature Request: ROCm/HIP patch yields up to +44% t/s for Radeon AI PRO R9700 (gfx1201)
- [#27499](https://github.com/ggml-org/llama.cpp/issues/27499) Research: Parent conditioned drafting trees (PCTree) for DSpark
- [#32127](https://github.com/ggml-org/llama.cpp/issues/32127) Feature Request: Support Qwen3-ForcedAligner-0.6B
- [#32092](https://github.com/ggml-org/llama.cpp/issues/32092) Misc. bug: llama-server stops after first token when a stop string is empty
- [#30281](https://github.com/ggml-org/llama.cpp/issues/30281) Feature Request: Fail `test-backend-ops` and exit with error status 1 when missing and/or unsupported types and/or unsupported backends are provided in the command line

### Ollama (`ollama/ollama`)

**Stars:** 187,117 · **Open issues:** 4,661 · **Last push:** 7h ago

On November 16, 2026, Ollama did not release any new versions, but the team merged a significant pull request (#19636) aimed at improving memory management by ensuring that weights remain outside of pinned host memory on Windows iGPUs. Several new issues were reported, with the most notable being a bug related to the mimo-v2.6:9b version that saw tool_calls arriving with empty arguments (#19711), and a build failure issue linked to GCC 15 due to a missing #include statement in llama-mmap.h (#19714). Additionally, another issue (#19712) reported a binding error on TCP that suggests a network address conflict. Overall, today was characterized by maintenance-related activities and the identification of key bugs needing attention.

#### ✅ Merged PRs
- [#19636](https://github.com/ollama/ollama/pull/19636) llm: keep weights out of pinned host memory on Windows iGPUs

#### 🐛 New Issues
- [#19711](https://github.com/ollama/ollama/issues/19711) mimo-v2.6:9b tool_calls arrive with empty arguments (mimo_v2 renderer/parser drops function.arguments) 💬1
- [#19714](https://github.com/ollama/ollama/issues/19714) Build failure with GCC 15: missing #include <cstdint> in llama-mmap.h leading to uint32_t errors `bug`
- [#19713](https://github.com/ollama/ollama/issues/19713) bug `bug`
- [#19712](https://github.com/ollama/ollama/issues/19712) Error: listen tcp 127.0.0.1:11434: bind: Une seule utilisation de chaque adresse de socket (protocole/adresse réseau/port) est habituellement autorisée. `bug`

#### 🔒 Closed Issues
- [#19711](https://github.com/ollama/ollama/issues/19711) mimo-v2.6:9b tool_calls arrive with empty arguments (mimo_v2 renderer/parser drops function.arguments)
- [#19701](https://github.com/ollama/ollama/issues/19701) 你好, 请问这个是什么问题导致的

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,316 · **Open issues:** 5,195 · **Last push:** <1h ago

On November 16, 2026, LiteLLM released version v1.111.0-dev.4, which introduced a significant change by moving to keyless signing with Sigstore keyless signing (GitHub OIDC), marking a shift from the previous `cosign.pub` key, while version v1.111.0-dev.3 was flagged as only partially published and should not be used. Key merged features included enhancements to the dynamic rate limiter and budgets, such as charging idle tokens against a team's class share and replacing the Python budget engine with a Rust counterpart. The fixed issues addressed multiple bugs across the system, including a notable one regarding response cache keys that led to performance degradation for large image requests. Among the new issues, a bug was reported that affects the response cache by double-counting provider prompt-cache tokens in Prometheus, drawing attention as a potential area for further investigation.

#### 🚀 New Releases
- [v1.111.0-dev.4](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-dev.4) v1.111.0-dev.4
- [v1.111.0-dev.3](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-dev.3) v1.111.0-dev.3

#### ✅ Merged PRs
- [#51330](https://github.com/BerriAI/litellm/pull/51330) feat(messages): serve bedrock invoke messages on rust only
- [#51952](https://github.com/BerriAI/litellm/pull/51952) fix(dynamic_rate_limiter): charge tokens used while the model was idle against a team's class share
- [#51535](https://github.com/BerriAI/litellm/pull/51535) feat(budgets): replace the python budget hold and settle engine with a rust engine admitted at auth
- [#51969](https://github.com/BerriAI/litellm/pull/51969) fix(customers): cascade delete large organizations within the transaction timeout
- [#51960](https://github.com/BerriAI/litellm/pull/51960) fix(proxy): reset members given default team member models on the team's budget window
- [#51912](https://github.com/BerriAI/litellm/pull/51912) perf(auth): reuse validated models on UserApiKeyCache memory hits
- [#51963](https://github.com/BerriAI/litellm/pull/51963) fix(router): free a failed rust router call's request without waiting for a full gc
- [#51966](https://github.com/BerriAI/litellm/pull/51966) refactor(vertex_ai): remove unreachable VertexAIFilesHandler.afile_content
- [#51964](https://github.com/BerriAI/litellm/pull/51964) chore(lint): flag conditionals with more than 3 boolean clauses via ruff PLR0916
- [#51924](https://github.com/BerriAI/litellm/pull/51924) feat(customers): sort organizations, teams and members by budget limit
- [#51961](https://github.com/BerriAI/litellm/pull/51961) perf(customers): index member team, budget and override lookups
- [#51953](https://github.com/BerriAI/litellm/pull/51953) fix(responses): retry a stream that breaks before output in its own model group
- [#51318](https://github.com/BerriAI/litellm/pull/51318) fix(proxy): hold the logging object weakly in the detached stream failure hook
- [#51959](https://github.com/BerriAI/litellm/pull/51959) fix(admin-mcp): restore the budget route operation ids the connector pins
- [#51957](https://github.com/BerriAI/litellm/pull/51957) fix(count_tokens): return 400 for malformed Anthropic server-tool blocks
- [#51705](https://github.com/BerriAI/litellm/pull/51705) feat(dynamic_rate_limiter): customer organizations and keys borrow idle model capacity and split class shares
- [#51688](https://github.com/BerriAI/litellm/pull/51688) fix(cost): keep a deployment's per-second video price over the catalog row's flat price
- [#51923](https://github.com/BerriAI/litellm/pull/51923) fix(ui): default customer usage range to month to date
- [#51921](https://github.com/BerriAI/litellm/pull/51921) fix(budgets): match window starts to stored millisecond precision
- [#51918](https://github.com/BerriAI/litellm/pull/51918) fix(customers): keep uncapped customer spend across scheduled budget resets
- [#51888](https://github.com/BerriAI/litellm/pull/51888) fix(router): stop the rust router keeping every finished request in memory until a full gc
- [#51665](https://github.com/BerriAI/litellm/pull/51665) fix(fal_ai): bill a video request without a resolution at the row's default rate
- [#51676](https://github.com/BerriAI/litellm/pull/51676) fix(bedrock): put extra_body fields inside modelInput for async-invoke embeddings
- [#51662](https://github.com/BerriAI/litellm/pull/51662) fix(vertex_ai): send extra_body fields as predict parameters for BGE embedding models
- [#51669](https://github.com/BerriAI/litellm/pull/51669) fix(perplexity): bill cached prompt tokens at the cache read rate when the response has no cost
- [#51670](https://github.com/BerriAI/litellm/pull/51670) fix(replicate): answer malformed video seconds with a 400 and drop non-decimal size digits instead of a 500
- [#51668](https://github.com/BerriAI/litellm/pull/51668) fix(fal_ai): send versioned seedream and flux-pro image models to the endpoint they name
- [#51671](https://github.com/BerriAI/litellm/pull/51671) fix(proxy): run the /fal_ai passthrough price gate on the path sent upstream
- [#51675](https://github.com/BerriAI/litellm/pull/51675) fix(proxy): let an exhausted key keep listing models and counting tokens
- [#51728](https://github.com/BerriAI/litellm/pull/51728) fix(proxy): join default teams on the team member budget when the team has one
- [#51895](https://github.com/BerriAI/litellm/pull/51895) refactor(s3-log): move python-compatible helpers into python-compat
- [#51901](https://github.com/BerriAI/litellm/pull/51901) perf(auth): read token model fields from the class instead of deprecated __fields__
- [#51902](https://github.com/BerriAI/litellm/pull/51902) perf(caching): format dual cache debug logs lazily
- [#51903](https://github.com/BerriAI/litellm/pull/51903) perf(streaming): extract usage once per chunk when assembling stream usage
- [#51906](https://github.com/BerriAI/litellm/pull/51906) perf(host-python): settle ready async values inline instead of spawning on tokio
- [#51893](https://github.com/BerriAI/litellm/pull/51893) refactor(s3-log): move the rust-backed s3 logger from s3_v3 to s3_v2
- [#51922](https://github.com/BerriAI/litellm/pull/51922) test(integration): record a stack when an owned proxy crashes
- [#51882](https://github.com/BerriAI/litellm/pull/51882) test(e2e): drop two batch waits that never finish in time
- [#51896](https://github.com/BerriAI/litellm/pull/51896) feat(customers): search customer members by ID or alias in the Members tab
- [#51913](https://github.com/BerriAI/litellm/pull/51913) feat(customers): move existing members between teams
- [#51724](https://github.com/BerriAI/litellm/pull/51724) feat(ui): reuse usage spend design for customer teams and members
- [#51911](https://github.com/BerriAI/litellm/pull/51911) test(database): expect no native pool in proxy lifespan cleanup
- [#51894](https://github.com/BerriAI/litellm/pull/51894) fix(spend): backport PostgreSQL 12 delivery migration compatibility
- [#51899](https://github.com/BerriAI/litellm/pull/51899) fix(ui): clarify customer usage periods and preserve date ranges

#### 🐛 New Issues
- [#51935](https://github.com/BerriAI/litellm/issues/51935) [Bug]: Response cache key is built from the stringified full request, computed twice per request; 200+ MB image requests spend seconds on the event loop `llm translation` `claude code` 💬2
- [#51954](https://github.com/BerriAI/litellm/issues/51954) [Bug]: Anthropic translation rejects concatenated JSON tool call arguments that Bedrock already splits `llm translation` 💬2
- [#51900](https://github.com/BerriAI/litellm/issues/51900) [Bug]: Semantic cache (all-MiniLM-L6-v2 / bge-small) returns cross-request tool_calls arguments on dynamic IDs (0.9749 cosine similarity) `bug` `llm translation` 💬2
- [#51970](https://github.com/BerriAI/litellm/issues/51970) [Bug]: dynamic_rate_limiter_v3 counts cache-read tokens that parallel_request_limiter_v3 leaves out `llm translation` 💬1
- [#51931](https://github.com/BerriAI/litellm/issues/51931) [Bug]: Follow-up to #47607: a mid-stream rate limit on a streamed /v1/responses request is never retried in the same model group (Azure) `bug` `llm translation` 💬1
- [#51930](https://github.com/BerriAI/litellm/issues/51930) [Bug]: encrypted_content_affinity: after a cross-region overflow, the next turn pins to the oldest marker and strips all reasoning but keeps item ids (Azure 400 "provided without its required 'reasoning' item") `bug` `llm translation` 💬1
- [#51909](https://github.com/BerriAI/litellm/issues/51909) [Bug] Response-cache hits double-count provider prompt-cache tokens in Prometheus `llm translation` 💬1
- [#51910](https://github.com/BerriAI/litellm/issues/51910) [Bug] Azure Cohere Parse uses the resource-style path for dedicated endpoints `llm translation` 💬1
- [#51908](https://github.com/BerriAI/litellm/issues/51908) [Bug] Failed config resync callbacks are discarded instead of retried 💬1
- [#51976](https://github.com/BerriAI/litellm/issues/51976) [Bug]: /v1/audio/transcriptions 5xx error response is missing x-litellm-model-id header (present on /v1/chat/completions) `llm translation`
- [#51955](https://github.com/BerriAI/litellm/issues/51955) [Bug]: credit card and IBAN guardrail redacts random numbers that just look like card numbers `bug` `llm translation`
- [#51936](https://github.com/BerriAI/litellm/issues/51936) [Bug]: Streamed chat completions stay in memory until a full GC: Router defines a FallbackStreamWrapper class per call `llm translation` `claude code`
- [#51933](https://github.com/BerriAI/litellm/issues/51933) [Bug]: `bug` `llm translation`
- [#51907](https://github.com/BerriAI/litellm/issues/51907) [Bug] Token-priced rerank calls calculate zero cost despite reported input tokens `llm translation`

#### 🔒 Closed Issues
- [#36114](https://github.com/BerriAI/litellm/issues/36114) [Bug]: Streaming usage severely undercounted (provider-independent) despite correct non-streaming usage and already-fixed chunk_parser() — root cause in stream aggregation layer, not provider transformation
- [#35775](https://github.com/BerriAI/litellm/issues/35775) [Bug]: LiteLLM is not compatible with VSCode native Model-Provider
- [#34328](https://github.com/BerriAI/litellm/issues/34328) [Bug]: unpack_defs still hangs (unbounded) on recursive tool schemas — Bedrock & Vertex callers pass no byte budget
- [#47862](https://github.com/BerriAI/litellm/issues/47862) [Bug]: TypeError in litellm/proxy/utils.py
- [#28903](https://github.com/BerriAI/litellm/issues/28903) [Bug]: Editing stdio MCP servers erases stored environment variables
- [#36309](https://github.com/BerriAI/litellm/issues/36309) [Bug]: Router(cache_responses=True, cache_kwargs={'type': 'disk'}) silently creates in-memory cache (cache_kwargs ignored without Redis)
- [#36391](https://github.com/BerriAI/litellm/issues/36391) Enable context_management for Azure Responses API
- [#36393](https://github.com/BerriAI/litellm/issues/36393) Add request tag attribution to direct MCP gateway operations
- [#36425](https://github.com/BerriAI/litellm/issues/36425) [Feature]: litellm-helm JSON logging
- [#36564](https://github.com/BerriAI/litellm/issues/36564) [Feature]: Toggle for proxy config source of truth. Config file vs DB table
- [#51931](https://github.com/BerriAI/litellm/issues/51931) [Bug]: Follow-up to #47607: a mid-stream rate limit on a streamed /v1/responses request is never retried in the same model group (Azure)
- [#51277](https://github.com/BerriAI/litellm/issues/51277) [Bug]: Every streamed /v1/messages request stays in memory until a full GC, because the detached failure hook forms a reference cycle

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,577 · **Open issues:** 457 · **Last push:** <1h ago

Today, there were no new releases for Unsloth. Significant updates include the merging of several pull requests, notably #17862 which enhances tokenizer saving under DDP/FSDP2, and #17875 that initializes the root unit before running gathered generate blocks. Other highlights include #17868's improvement to DDP by restricting uploads to the Hub from rank 0 only, and #17829's enhancements for block compilation on transformers 5.23. In terms of new issues, #17837 addresses a bug where certain default settings are ignored, causing repeated prompts, indicating potential user experience concerns.

#### ✅ Merged PRs
- [#17862](https://github.com/unslothai/unsloth/pull/17862) Tokenizer save under DDP / FSDP2: private copy per rank, then move into place
- [#17875](https://github.com/unslothai/unsloth/pull/17875) FSDP2: initialize the root unit before a gathered generate runs the blocks
- [#17876](https://github.com/unslothai/unsloth/pull/17876) GKD: keep a frozen teacher off the training GPU
- [#17873](https://github.com/unslothai/unsloth/pull/17873) MoE router aux loss keeps its gradient under unsloth gradient checkpointing
- [#17868](https://github.com/unslothai/unsloth/pull/17868) DDP: upload to the Hub from rank 0 only
- [#17827](https://github.com/unslothai/unsloth/pull/17827) Qwen3.8-Flash-Next: pack text SFT, no KV cache on packed rows, fla 0.6 GDN op returns, offload_layers refusals
- [#17867](https://github.com/unslothai/unsloth/pull/17867) DDP: VLM tower sync, Gemma 4 tower LoRA and DPO ref adapter default to find_unused False, bind cuda:LOCAL_RANK at import
- [#17872](https://github.com/unslothai/unsloth/pull/17872) Block compile: keep the non-reentrant trial forward out of transformers output capture
- [#17870](https://github.com/unslothai/unsloth/pull/17870) Tests: tensor parallel parity for gated-query attention (Qwen3.5); skip missing model types before the ranks start
- [#17869](https://github.com/unslothai/unsloth/pull/17869) FSDP2 save: ignore unsloth_zoo's bitsandbytes stub in the Linear4bit checks
- [#17866](https://github.com/unslothai/unsloth/pull/17866) SFTTrainer: say why an explicit padding_free = True was turned off
- [#17865](https://github.com/unslothai/unsloth/pull/17865) DeepSeek-V4.1 engram hash: build the host tables at bind time, not in forward
- [#17871](https://github.com/unslothai/unsloth/pull/17871) Decode CUDA graphs for Whisper, CSM and shared-KV Gemma 3n
- [#17864](https://github.com/unslothai/unsloth/pull/17864) Block compile: no seq_len % 8 recompile from the SDPA stride alignment check
- [#17850](https://github.com/unslothai/unsloth/pull/17850) Vision training: Mllama LoRA under block CUDA graphs, chunked DPO head for VLM batches
- [#17859](https://github.com/unslothai/unsloth/pull/17859) FastSentenceTransformer: background collation, lean LoRA, decoder packing, ModernBERT FA2
- [#17858](https://github.com/unslothai/unsloth/pull/17858) Honour tensor logits_to_keep like transformers' slice_logits_to_keep
- [#17828](https://github.com/unslothai/unsloth/pull/17828) Keep decode CUDA graphs across optimizer steps in RL loops
- [#17848](https://github.com/unslothai/unsloth/pull/17848) Load compressed-tensors NVFP4 / MXFP8 and ModelOpt NVFP4 MoE experts correctly on transformers 5, packed for LoRA
- [#17785](https://github.com/unslothai/unsloth/pull/17785) FSDP2, TP and PP for Qwen3.8-Flash-Next and DeepSeek-V4.1, with frozen engram / n-gram tables never sharded
- [#17829](https://github.com/unslothai/unsloth/pull/17829) Block compile on transformers 5.23: router logit hooks, GDN op with grouped value heads, int4 LoRA without graph breaks
- [#17861](https://github.com/unslothai/unsloth/pull/17861) DDP: find_unused_parameters defaults to False for a LoRA sequence classifier
- [#17860](https://github.com/unslothai/unsloth/pull/17860) head_dim 512 attention: per-GPU tiles, split dK / dV passes, TMA on sm12x
- [#17857](https://github.com/unslothai/unsloth/pull/17857) Block compile: keep a failed compile attempt out of a non-reentrant checkpoint
- [#17855](https://github.com/unslothai/unsloth/pull/17855) Studio INT8 attention (Triton): direct launches after the first call, sizes out of the attention kernel's compile key
- [#17854](https://github.com/unslothai/unsloth/pull/17854) Tests: Unsloth flex mask_mods under fullgraph compile (torch 2.15)
- [#17836](https://github.com/unslothai/unsloth/pull/17836) Studio MiniMax-H3-Image: render on fp16 cards (T4) with the hosted int8 weights
- [#17666](https://github.com/unslothai/unsloth/pull/17666) Studio: computer use for local and connected models
- [#17853](https://github.com/unslothai/unsloth/pull/17853) Prefix grouper test: give extracted llama.py functions a package for relative imports
- [#17851](https://github.com/unslothai/unsloth/pull/17851) Large head attention tests: skip the kernel tests on ROCm, where the router never engages
- [#17826](https://github.com/unslothai/unsloth/pull/17826) FSDP2: name the torch version when a sharded optimizer checkpoint is too new to read
- [#17830](https://github.com/unslothai/unsloth/pull/17830) FastLanguageModel: keep layer gradient checkpointing on transformers 5.23+
- [#17835](https://github.com/unslothai/unsloth/pull/17835) Studio MiniMax-H3: run the Qwen3-VL vision tower in float32 as the reference does
- [#17789](https://github.com/unslothai/unsloth/pull/17789) Studio INT8 attention (Triton): two quantiser launches and a launch plan per call, same output bits
- [#17838](https://github.com/unslothai/unsloth/pull/17838) Block compile: import large_head_attention by its written-out name (Source lint red on main)
- [#17832](https://github.com/unslothai/unsloth/pull/17832) Studio: let scheduled tasks use web search
- [#17802](https://github.com/unslothai/unsloth/pull/17802) Studio MiniMax-H3 video: ship the reference implementation's defaults
- [#17817](https://github.com/unslothai/unsloth/pull/17817) Gemma-4 attention kernels inside compiled blocks: 1.4-2.6x faster gemma-4-12b training
- [#17825](https://github.com/unslothai/unsloth/pull/17825) Accept a torchvision whose declared torch range contains the installed torch (torch 2.15)
- [#17818](https://github.com/unslothai/unsloth/pull/17818) Gemma 4: tensor parallel per-layer head counts and k_eq_v, DDP find_unused_parameters default
- [#17778](https://github.com/unslothai/unsloth/pull/17778) Native DeepSeek-V4.1: modeling ported from the deepseek-ai reference, sparse attention, engram tables, fp8 / MXFP4 release loading
- [#17799](https://github.com/unslothai/unsloth/pull/17799) Studio MiniMax-H3-Image: follow the reference implementation's sampling, sizes and edit preprocessing
- [#17824](https://github.com/unslothai/unsloth/pull/17824) Studio: pin the sd.cpp prebuilt with the MiniMax-H3 reference defaults
- [#17801](https://github.com/unslothai/unsloth/pull/17801) Studio: save Full access granted to a chat with that chat
- [#17806](https://github.com/unslothai/unsloth/pull/17806) Block compile: keep gradient checkpointing on transformers 5.23+
- [#16717](https://github.com/unslothai/unsloth/pull/16717) Studio: add /skills to open the Skills dialog (CS 146S)
- [#17788](https://github.com/unslothai/unsloth/pull/17788) Studio: MiniMax-H3-Image GGUFs on stable-diffusion.cpp, sd.cpp prebuilt bump, H3 tiled VAE overlap
- [#16576](https://github.com/unslothai/unsloth/pull/16576) Fold 16-bit LoRA into the base weights for long generate calls
- [#17796](https://github.com/unslothai/unsloth/pull/17796) Studio INT8 attention: verify the long-sequence kernel at install, fall back to the short one
- [#17807](https://github.com/unslothai/unsloth/pull/17807) Cast a downcast attention output back for an fp32 o_proj outside autocast
- [#17812](https://github.com/unslothai/unsloth/pull/17812) Tests: share one fp8 to NF4 load of the dense checkpoint
- [#17816](https://github.com/unslothai/unsloth/pull/17816) Auto-load harness: inline isOtherCacheSnapshot from source so the scenarios run on main again
- [#17673](https://github.com/unslothai/unsloth/pull/17673) Show loadable Hugging Face snapshots from custom folders in Select Model
- [#17805](https://github.com/unslothai/unsloth/pull/17805) Cheaper QAT detection in cached decode, plus tests
- [#17776](https://github.com/unslothai/unsloth/pull/17776) fix(studio): add iOS home screen icon
- [#17725](https://github.com/unslothai/unsloth/pull/17725) Studio: keep stream deltas that contain U+2028, U+2029 or U+0085
- [#13929](https://github.com/unslothai/unsloth/pull/13929) Studio: add /context to show what fills the context window
- [#17690](https://github.com/unslothai/unsloth/pull/17690) Hide the chat header fades until the thread scrolls under them
- [#17808](https://github.com/unslothai/unsloth/pull/17808) FP8 ragged block test: unwrap unsloth-zoo partial-block patch for the stock baseline
- [#17746](https://github.com/unslothai/unsloth/pull/17746) Fix QAT bypass in cached decode and single-sample lm_head
- [#17761](https://github.com/unslothai/unsloth/pull/17761) fix(dataprep): drop ruby readings from ebook text
- [#17783](https://github.com/unslothai/unsloth/pull/17783) Decision and SentenceTransformer pushes: refuse private=True into an existing public repo
- [#17774](https://github.com/unslothai/unsloth/pull/17774) TextPreprocessor.add_structure_tokens: tag fences whose language has non-word characters
- [#17781](https://github.com/unslothai/unsloth/pull/17781) Gemma-4 templates: render a list-of-parts system message's text, not its repr
- [#17798](https://github.com/unslothai/unsloth/pull/17798) Studio INT8 attention: keep the native fallback in the op's declared layout
- [#17791](https://github.com/unslothai/unsloth/pull/17791) Studio INT8 attention: compile the kernel once per machine and cut the per-call CPU cost, same output bits
- [#17793](https://github.com/unslothai/unsloth/pull/17793) Studio: key Triton and Inductor caches on the 8-bit prefetch fix state (sm_8x)
- [#17804](https://github.com/unslothai/unsloth/pull/17804) Add regression test for pre-shifted context-parallel labels
- [#17750](https://github.com/unslothai/unsloth/pull/17750) Fix Mistral context-parallel targets by honoring shift_labels
- [#17797](https://github.com/unslothai/unsloth/pull/17797) Studio: accept root OAuth issuers with or without a trailing slash
- [#17672](https://github.com/unslothai/unsloth/pull/17672) Recover healthy cached models when a Hugging Face revision ref cannot be decoded
- [#17775](https://github.com/unslothai/unsloth/pull/17775) Formats: keep unquantized tensors loading under NVFP4 / MXFP4 compressed-tensors checkpoints, keep grouped Linears out of QAT
- [#17792](https://github.com/unslothai/unsloth/pull/17792) Studio: MiniMax-H3-Image prompt enhancer following the reference workflow (Qwen3.5-9B, on by default)
- [#17795](https://github.com/unslothai/unsloth/pull/17795) Studio MiniMax-H3: launch row-mod kernels on the operand's card, trace them as stock math under compile
- [#17794](https://github.com/unslothai/unsloth/pull/17794) Studio int8 folds: do not fold an add with a non-unit alpha
- [#17790](https://github.com/unslothai/unsloth/pull/17790) Studio multi-GPU: layer split fit retry, per-card graph probes, INT8 checks on every card, per-card cast-cache streams
- [#17786](https://github.com/unslothai/unsloth/pull/17786) Refer to the app as Unsloth instead of Studio in UI copy

#### 🐛 New Issues
- [#17837](https://github.com/unslothai/unsloth/issues/17837) [Bug] "Open links in: Default browser" is ignored and "Run scripts" re-prompts despite "Always allow" `feature request` `bug` 💬2
- [#17821](https://github.com/unslothai/unsloth/issues/17821) [Reddit issue] Web search in scheduled tasks 💬1
- [#17823](https://github.com/unslothai/unsloth/issues/17823) [Reddit issue] Unsloth MCP 💬2
- [#17815](https://github.com/unslothai/unsloth/issues/17815) Built-in tools and MCP are injected into the DiffusionGemma prompt, but the execution loop is disabled – tool call appears as raw text with "Worked for 0s" `feature request` `bug` 💬1
- [#17878](https://github.com/unslothai/unsloth/issues/17878) [Feature] Add a Centralized Loaded Models / Runtime Manager to Unsloth Desktop `feature request`
- [#17877](https://github.com/unslothai/unsloth/issues/17877) [Feature] Studio: optional launchd agent to keep Studio running on macOS CLI installs
- [#17874](https://github.com/unslothai/unsloth/issues/17874) No AMD GPU Detected
- [#17847](https://github.com/unslothai/unsloth/issues/17847) [Feature] Bump the upper version bound of transformers to 5.18 `feature request`
- [#17822](https://github.com/unslothai/unsloth/issues/17822) [Reddit issue] Multi-speaker TTS and Live turn-based conversation
- [#17820](https://github.com/unslothai/unsloth/issues/17820) [Reddit issue] Same model with different exposed configuration in api
- [#17819](https://github.com/unslothai/unsloth/issues/17819) [Reddit issue] Remote access to the back-end API calls

#### 🔒 Closed Issues
- [#17821](https://github.com/unslothai/unsloth/issues/17821) [Reddit issue] Web search in scheduled tasks
- [#17297](https://github.com/unslothai/unsloth/issues/17297) [Feature] Studio: persist "Full access" permission mode (session-only today)
- [#13921](https://github.com/unslothai/unsloth/issues/13921) Studio: /context command to show what fills the context window
- [#17815](https://github.com/unslothai/unsloth/issues/17815) Built-in tools and MCP are injected into the DiffusionGemma prompt, but the execution loop is disabled – tool call appears as raw text with "Worked for 0s"
- [#17734](https://github.com/unslothai/unsloth/issues/17734) [Bug][ROCm] GDN causal conv1d falls back to MIOpen on gfx1151 - the HIP gate costs 3.1x step time, the Triton kernel is correct
- [#17773](https://github.com/unslothai/unsloth/issues/17773) [Bug] iOS "Add to Home Screen" shows a text-letter icon instead of the logo (no apple-touch-icon)
- [#16716](https://github.com/unslothai/unsloth/issues/16716) Studio: /skills command to open the Skills dialog

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,187 · **Open issues:** 419 · **Last push:** 19h ago

On November 16, 2026, there were no new releases in AIBrix, but several important changes were merged, including the addition of feature #3465, which allows reading other gateways' running counts from aibrix:rrq behind a switch, and the minor adjustment in #3466 that pins the Redis command count for one routing decision. Notably, three new issues were raised, with #3475 highlighting a bug where two claims with the same modelName share a single engine, and #3474 proposing support for multiple ModelClaim replicas across distinct warm-pool Pods. Additionally, #3476 reports a flaky test issue concerning the sharing of base model Pods in TestModelAdapterConcurrentAdaptersShareBaseModelPods, encountering HTTP 500 errors.

#### ✅ Merged PRs
- [#3465](https://github.com/vllm-project/aibrix/pull/3465) [Feat] Read other gateways' running counts from aibrix:rrq behind a switch
- [#3466](https://github.com/vllm-project/aibrix/pull/3466) [Misc] Pin the Redis command count of one routing decision

#### 🐛 New Issues
- [#3475](https://github.com/vllm-project/aibrix/issues/3475) [Bug][ModelClaim] Two claims with the same modelName share one engine `kind/bug` `triage/accepted` `area/orchestration` 💬4
- [#3474](https://github.com/vllm-project/aibrix/issues/3474) [Feature] Support multiple ModelClaim replicas across distinct warm-pool Pods `kind/feature` `area/orchestration` 💬4
- [#3476](https://github.com/vllm-project/aibrix/issues/3476) flaky test: TestModelAdapterConcurrentAdaptersShareBaseModelPods returns HTTP 500 `help wanted` `area/gateway` `triage/accepted` `area/testing` 💬3

#### 🔒 Closed Issues
- [#3392](https://github.com/vllm-project/aibrix/issues/3392) [Bug] ModelClaim remains Activating after EngineCore OOM during sleep
- [#3426](https://github.com/vllm-project/aibrix/issues/3426) [Bug] ModelClaim engine stays Sleeping after EngineCore crashes during wake

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,480 · **Open issues:** 643 · **Last push:** <1h ago

On November 16, 2026, there were no new releases for the Semantic Router, but several important PRs were merged. Key changes included the ability to let the CLI commands complete the installer setup wait, and enhancements such as launching a harness in a new worktree and listing its sessions, along with preserving generated images in stored responses for better history replay. Additionally, a feature was added to escalate when an agent's tool calls consistently fail, contributing to improved error handling. Notably, a new issue was raised regarding the cataloging and validation of the vLLM Semantic Router skill suite, indicating ongoing efforts to enhance skill management within the ecosystem.

#### ✅ Merged PRs
- [#5338](https://github.com/vllm-project/semantic-router/pull/5338) [Bug] Let CLI commands end the installer setup wait
- [#6608](https://github.com/vllm-project/semantic-router/pull/6608) [Bug] Preserve generated images in stored Responses and history replay
- [#6647](https://github.com/vllm-project/semantic-router/pull/6647) [Docs] Catalog and validate vLLM Semantic Router skills
- [#6683](https://github.com/vllm-project/semantic-router/pull/6683) [Feature] Let Pi route through the gateway on its own login
- [#6682](https://github.com/vllm-project/semantic-router/pull/6682) [Feature] Launch a harness in a new worktree and list its sessions
- [#6681](https://github.com/vllm-project/semantic-router/pull/6681) [Feature] Identify harness sessions and subagents by default
- [#6680](https://github.com/vllm-project/semantic-router/pull/6680) [Feature] Escalate when an agent's tool calls keep failing
- [#6679](https://github.com/vllm-project/semantic-router/pull/6679) [Bug] Keep saved provider keys out of the config file
- [#6678](https://github.com/vllm-project/semantic-router/pull/6678) [Feature] Price login and keyed models from the catalog
- [#6677](https://github.com/vllm-project/semantic-router/pull/6677) [Feature] Net the Router's own calls out of the reported savings

#### 🐛 New Issues
- [#6645](https://github.com/vllm-project/semantic-router/issues/6645) [Feature] Catalog and validate the vLLM Semantic Router skill suite `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#6610](https://github.com/vllm-project/semantic-router/issues/6610) [Bug] h2c Upgrade buffers bodies before gateway limits and authentication `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#6607](https://github.com/vllm-project/semantic-router/issues/6607) [Bug] Stored generated-image Responses lose result and fail history replay `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6669](https://github.com/vllm-project/semantic-router/issues/6669) [Feature] Let Pi route through the gateway on its own login `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6668](https://github.com/vllm-project/semantic-router/issues/6668) [Feature] Launch a harness in a new worktree and list its sessions `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6667](https://github.com/vllm-project/semantic-router/issues/6667) [Feature] Identify harness sessions and subagents by default `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6666](https://github.com/vllm-project/semantic-router/issues/6666) [Feature] Escalate when an agent's tool calls keep failing `accepted` `wg/mom-routing` 💬1
- [#6665](https://github.com/vllm-project/semantic-router/issues/6665) [Bug] Dashboard saves write provider keys into config.yaml `accepted` `wg/enterprise-environment` 💬1
- [#6664](https://github.com/vllm-project/semantic-router/issues/6664) [Feature] Price login and keyed models from the catalog `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6663](https://github.com/vllm-project/semantic-router/issues/6663) [Feature] Net the Router's own calls out of the reported savings `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6662](https://github.com/vllm-project/semantic-router/issues/6662) [Feature] Keep a routing record by default `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6661](https://github.com/vllm-project/semantic-router/issues/6661) [Bug] Envoy refuses the rendered config of a listener serving every model API `accepted` `wg/data-plane-networking` 💬1
- [#6660](https://github.com/vllm-project/semantic-router/issues/6660) [Bug] Replay records refused and upstream failed requests as client aborts `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6659](https://github.com/vllm-project/semantic-router/issues/6659) [Bug] A call after about 4.9 s idle gets a 503 from a 5 s keep-alive backend `accepted` `wg/data-plane-networking` 💬1
- [#6658](https://github.com/vllm-project/semantic-router/issues/6658) [Bug] connect codex --check, the --app preview and probe errors say the wrong thing `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6656](https://github.com/vllm-project/semantic-router/issues/6656) [Bug] connect reads every model instead of the chosen entrypoint's `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6657](https://github.com/vllm-project/semantic-router/issues/6657) [Bug] A decision that turns reasoning off refuses Claude Code's thinking display `accepted` `wg/mom-routing` 💬1
- [#6627](https://github.com/vllm-project/semantic-router/issues/6627) [Feature] Add a VS Code extension that serves the gateway's models `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6626](https://github.com/vllm-project/semantic-router/issues/6626) [Feature] Count the Router's own model calls in a request's cost `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6625](https://github.com/vllm-project/semantic-router/issues/6625) [Feature] Make Insights costs and savings say what they cover `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6624](https://github.com/vllm-project/semantic-router/issues/6624) [Feature] Route Codex memory calls through the gateway `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6623](https://github.com/vllm-project/semantic-router/issues/6623) [Feature] Connect Pi and the Codex app to the gateway `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6622](https://github.com/vllm-project/semantic-router/issues/6622) [Feature] Launch a harness in a worktree and fetch its key by command `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6621](https://github.com/vllm-project/semantic-router/issues/6621) [Feature] Check a connected harness end to end and show its status `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6620](https://github.com/vllm-project/semantic-router/issues/6620) [Feature] Let a caller login share a pool with keyed and local models `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6619](https://github.com/vllm-project/semantic-router/issues/6619) [Feature] Show which models served each Codex turn `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6618](https://github.com/vllm-project/semantic-router/issues/6618) [Feature] Record Codex approval reviews and show them in Insights `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6617](https://github.com/vllm-project/semantic-router/issues/6617) [Feature] Send Codex Approve for me reviews to a reviewer through the gateway `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6616](https://github.com/vllm-project/semantic-router/issues/6616) [Feature] Keep masking placeholders across requests, sessions and restarts `accepted` `wg/mom-routing` 💬1
- [#6615](https://github.com/vllm-project/semantic-router/issues/6615) [Bug] Masking accepts templates whose {index} is not closed on both sides `accepted` `wg/mom-routing` 💬1
- [#6614](https://github.com/vllm-project/semantic-router/issues/6614) [Bug] connect replaces a working key with a placeholder and rewrites unchanged files `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6613](https://github.com/vllm-project/semantic-router/issues/6613) [Bug] connect --launch leaves the gateway key on disk when its terminal closes `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6612](https://github.com/vllm-project/semantic-router/issues/6612) [Bug] The CLI and the Dashboard editor drop auth.credential: caller `accepted` `wg/data-plane-networking` 💬1
- [#6604](https://github.com/vllm-project/semantic-router/issues/6604) [Bug] Masking can issue the same placeholder for two different values `bug` `accepted` `in-progress` `wg/mom-routing` 💬1
- [#6655](https://github.com/vllm-project/semantic-router/issues/6655) [Docs] Validate the skill suite and publish a measured technical walkthrough `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6654](https://github.com/vllm-project/semantic-router/issues/6654) [Feature] Connect skill-based recipe tuning to calibration and recipe-lab `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6653](https://github.com/vllm-project/semantic-router/issues/6653) [Feature] Compare Router configurations with paired benchmark evidence `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6652](https://github.com/vllm-project/semantic-router/issues/6652) [Feature] Ship a reproducible sr-bench run skill `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6651](https://github.com/vllm-project/semantic-router/issues/6651) [Feature] Ship a routing diagnosis skill based on Router evidence `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6650](https://github.com/vllm-project/semantic-router/issues/6650) [Feature] Guide workload-to-recipe configuration with an agent skill `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6649](https://github.com/vllm-project/semantic-router/issues/6649) [Feature] Ship a decision-model operations skill `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6648](https://github.com/vllm-project/semantic-router/issues/6648) [Feature] Ship a guided vllm-sr serve skill `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6639](https://github.com/vllm-project/semantic-router/issues/6639) [Bug] Operator drops startupProbe.initialDelaySeconds `needs-acceptance` `wg/enterprise-environment`

#### 🔒 Closed Issues
- [#5318](https://github.com/vllm-project/semantic-router/issues/5318) [Bug] The installer's first run leaves a background serve that blocks vllm-sr serve and vllm-sr stop
- [#6293](https://github.com/vllm-project/semantic-router/issues/6293) [Bug] Literal keyword rules do not match Thai, Lao, Khmer or Myanmar words inside running text
- [#6645](https://github.com/vllm-project/semantic-router/issues/6645) [Feature] Catalog and validate the vLLM Semantic Router skill suite
- [#6607](https://github.com/vllm-project/semantic-router/issues/6607) [Bug] Stored generated-image Responses lose result and fail history replay
- [#6669](https://github.com/vllm-project/semantic-router/issues/6669) [Feature] Let Pi route through the gateway on its own login
- [#6668](https://github.com/vllm-project/semantic-router/issues/6668) [Feature] Launch a harness in a new worktree and list its sessions
- [#6667](https://github.com/vllm-project/semantic-router/issues/6667) [Feature] Identify harness sessions and subagents by default
- [#6666](https://github.com/vllm-project/semantic-router/issues/6666) [Feature] Escalate when an agent's tool calls keep failing
- [#6665](https://github.com/vllm-project/semantic-router/issues/6665) [Bug] Dashboard saves write provider keys into config.yaml
- [#6664](https://github.com/vllm-project/semantic-router/issues/6664) [Feature] Price login and keyed models from the catalog
- [#6663](https://github.com/vllm-project/semantic-router/issues/6663) [Feature] Net the Router's own calls out of the reported savings
- [#6662](https://github.com/vllm-project/semantic-router/issues/6662) [Feature] Keep a routing record by default
- [#6661](https://github.com/vllm-project/semantic-router/issues/6661) [Bug] Envoy refuses the rendered config of a listener serving every model API
- [#6660](https://github.com/vllm-project/semantic-router/issues/6660) [Bug] Replay records refused and upstream failed requests as client aborts
- [#6659](https://github.com/vllm-project/semantic-router/issues/6659) [Bug] A call after about 4.9 s idle gets a 503 from a 5 s keep-alive backend
- [#6658](https://github.com/vllm-project/semantic-router/issues/6658) [Bug] connect codex --check, the --app preview and probe errors say the wrong thing
- [#6656](https://github.com/vllm-project/semantic-router/issues/6656) [Bug] connect reads every model instead of the chosen entrypoint's
- [#6657](https://github.com/vllm-project/semantic-router/issues/6657) [Bug] A decision that turns reasoning off refuses Claude Code's thinking display
- [#6627](https://github.com/vllm-project/semantic-router/issues/6627) [Feature] Add a VS Code extension that serves the gateway's models
- [#6626](https://github.com/vllm-project/semantic-router/issues/6626) [Feature] Count the Router's own model calls in a request's cost
- [#6625](https://github.com/vllm-project/semantic-router/issues/6625) [Feature] Make Insights costs and savings say what they cover
- [#6624](https://github.com/vllm-project/semantic-router/issues/6624) [Feature] Route Codex memory calls through the gateway
- [#6623](https://github.com/vllm-project/semantic-router/issues/6623) [Feature] Connect Pi and the Codex app to the gateway
- [#6622](https://github.com/vllm-project/semantic-router/issues/6622) [Feature] Launch a harness in a worktree and fetch its key by command
- [#6621](https://github.com/vllm-project/semantic-router/issues/6621) [Feature] Check a connected harness end to end and show its status
- [#6620](https://github.com/vllm-project/semantic-router/issues/6620) [Feature] Let a caller login share a pool with keyed and local models
- [#6619](https://github.com/vllm-project/semantic-router/issues/6619) [Feature] Show which models served each Codex turn
- [#6618](https://github.com/vllm-project/semantic-router/issues/6618) [Feature] Record Codex approval reviews and show them in Insights
- [#6617](https://github.com/vllm-project/semantic-router/issues/6617) [Feature] Send Codex Approve for me reviews to a reviewer through the gateway
- [#6616](https://github.com/vllm-project/semantic-router/issues/6616) [Feature] Keep masking placeholders across requests, sessions and restarts
- [#6615](https://github.com/vllm-project/semantic-router/issues/6615) [Bug] Masking accepts templates whose {index} is not closed on both sides
- [#6614](https://github.com/vllm-project/semantic-router/issues/6614) [Bug] connect replaces a working key with a placeholder and rewrites unchanged files
- [#6613](https://github.com/vllm-project/semantic-router/issues/6613) [Bug] connect --launch leaves the gateway key on disk when its terminal closes
- [#6612](https://github.com/vllm-project/semantic-router/issues/6612) [Bug] The CLI and the Dashboard editor drop auth.credential: caller

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*