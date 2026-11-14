# 📡 AI Ecosystem Digest — 2026-11-14

> Generated 2026-11-14 02:55 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 155,580 | 32 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 135,205 | 23 | 3 | 50 | 6 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,821 | 0 | 0 | 2 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,412 | 5 | 18 | 2 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 226,694 | 27 | 11 | 1 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,122 | 28 | 19 | 2 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,403 | 137 | 101 | 162 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 263,234 | 15 | 21 | 0 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,881 | 27 | 17 | 46 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,838 | 12 | 19 | 65 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 134,893 | 9 | 18 | 21 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,903 | 2 | 1 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,224 | 16 | 24 | 88 | 4 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,462 | 9 | 1 | 62 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,186 | 2 | 2 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,472 | 29 | 29 | 13 | 0 |

---

## ✨ Highlights

- **llama.cpp** released version [v1.0.0](https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0) today, marking a significant update.  
- **OpenAI Codex** had six releases, including [rust-v0.171.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.5).  
- **OpenClaw** merged multiple PRs, addressing performance enhancements such as [preserving catalog order across unchanged notifications](https://github.com/openclaw/openclaw/pull/198568).  
- **AIBrix** faced increased attention with the new issue [#3463](https://github.com/vllm-project/aibrix/issues/3463) related to Redis cost, garnering 12 comments.  
- **OpenCode** saw notable activity, including the hot issue [#63817](https://github.com/anomalyco/opencode/issues/63817) regarding zombie processes, which received four comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 155,580 · **Open issues:** 17,118 · **Last push:** <1h ago

On November 14, 2026, Claude Code released version 2.1.325, which addressed a security vulnerability in the decoding of zstd-compressed responses and introduced a spinner tip in VS Code for re-running notebook cells, as well as guidance for users when an organization's policy blocks a request. No pull requests were merged in the last 24 hours. However, the platform faced notable issues, including a critical bug (#109735) where a subagent's misconfiguration led to data loss by wiping the WSL root and mounted Windows drive, alongside a complaint (#109741) regarding Opus 5.5 continuing to suggest rejected phrases excessively in lengthy sessions.

#### 🚀 New Releases
- [v2.1.325](https://github.com/anthropics/claude-code/releases/tag/v2.1.325) v2.1.325

#### 🐛 New Issues
- [#109741](https://github.com/anthropics/claude-code/issues/109741) Opus 5.5 doesn't know how to read: you reject a phrase and it keeps suggesting it, 11 times in a 350k-token session `bug` `duplicate` `area:model` `area:cli` 💬3
- [#109738](https://github.com/anthropics/claude-code/issues/109738) [BUG] Fable 5.2 Max: 5-hour window now lasts ~10–15 min (was 2–3 hrs) `bug` `platform:linux` `area:cost` 💬1
- [#109758](https://github.com/anthropics/claude-code/issues/109758) [Feature Request] Programmatic lifecycle for cloud sessions: status, completion, and forced stop `enhancement` `platform:macos` `area:api` `area:claude-code-web` 💬1
- [#109735](https://github.com/anthropics/claude-code/issues/109735) [Data loss] Subagent ran `rsync -a --delete` with an empty destination variable via wsl.exe, wiping the WSL root and the mounted Windows drive; TaskStop did not stop the Linux process `bug` `platform:windows` `area:bash` `area:agents` 💬1
- [#109627](https://github.com/anthropics/claude-code/issues/109627) [Bug] Agent ran malformed pkill on macOS, SIGTERMing all Claude Code sessions and user processes `bug` `platform:macos` `area:model` `area:bash` 💬1
- [#109736](https://github.com/anthropics/claude-code/issues/109736) [Bug] Overeager multi-round review workflow for simple "write a brief email" request `bug` `platform:macos` `area:model` 💬1
- [#109764](https://github.com/anthropics/claude-code/issues/109764) F OARTE PROST!!!!!!!!!! `bug` `needs-info`
- [#109763](https://github.com/anthropics/claude-code/issues/109763) F OARTE PROST!!!!!!!!!! `bug`
- [#109762](https://github.com/anthropics/claude-code/issues/109762) [Bug] Bug Report: Insufficient details, request ID req_011Ch22nW8tXzD2hyLyLLFaa `bug` `platform:macos` `needs-info`
- [#109761](https://github.com/anthropics/claude-code/issues/109761) [Bug] Subagent ignores mid-run messages and loses all work when stopped `bug` `platform:macos` `area:agents`
- [#109760](https://github.com/anthropics/claude-code/issues/109760) [FEATURE] First-class `claude remote-control serve`: register machines as devices and start sessions from mobile (parity with Codex / Antigravity) `enhancement` `area:cli`
- [#109759](https://github.com/anthropics/claude-code/issues/109759) [Feature Request] Add name and defined species for Claude Code pet `enhancement` `platform:linux` `area:tui`
- [#109757](https://github.com/anthropics/claude-code/issues/109757) Desktop app auto-update ends a running Code session and its Remote Control link; remote shows "session archived" `bug` `platform:macos` `area:desktop`
- [#109756](https://github.com/anthropics/claude-code/issues/109756) [FEATURE] Desktop app: configurable hotkey to start dictation and send the prompt `enhancement` `platform:windows` `area:desktop`
- [#109755](https://github.com/anthropics/claude-code/issues/109755) [DOCS] Document what each Claude Code OAuth scope allows, and let a login ask for fewer `enhancement` `area:auth` `area:security` `area:docs`
- [#109754](https://github.com/anthropics/claude-code/issues/109754) Interactive sessions never stop Bash commands moved to the background on timeout by background subagents (leaked rg searches OOM-froze a Linux VM) `bug` `has repro` `platform:linux` `perf:memory`
- [#109753](https://github.com/anthropics/claude-code/issues/109753) Opus 5.5 does not understand what "read" means `bug` `area:model` `area:agents`
- [#109752](https://github.com/anthropics/claude-code/issues/109752) Opus 5.5 cannot read: says false text is correct `bug` `area:model`
- [#109751](https://github.com/anthropics/claude-code/issues/109751) [Windows] Updates are invisible: headless CLI silently runs Fable on an old build (200k window), and the desktop app gives no update notice or button `bug` `platform:windows` `area:installation` `area:cli`
- [#109750](https://github.com/anthropics/claude-code/issues/109750) autoCompactWindow is capped to 200k for models the build does not list (Fable 5.2, Muse Spark); need an override or auto-detect `enhancement` `platform:macos` `area:model` `area:core`
- [#109749](https://github.com/anthropics/claude-code/issues/109749) [Bug] Request incorrectly blocked `bug` `platform:windows` `platform:vscode` `needs-repro`
- [#109746](https://github.com/anthropics/claude-code/issues/109746) OPUS refuse to make a folder `bug` `area:model`
- [#109748](https://github.com/anthropics/claude-code/issues/109748) Opus 5.5 changes events when it writes issue reports `bug` `area:model`
- [#109747](https://github.com/anthropics/claude-code/issues/109747) OPUS refuse to make a folder `bug` `area:model`
- [#109745](https://github.com/anthropics/claude-code/issues/109745) sandbox: pass network.deniedResolvedAddresses through to sandbox-runtime `enhancement` `area:security` `area:networking` `area:sandbox`
- [#109744](https://github.com/anthropics/claude-code/issues/109744) [BUG] Desktop: a mod's backdrop scene never animates (still mode is on although Reduce motion is off) `bug` `platform:macos` `area:plugins` `area:desktop`
- [#109743](https://github.com/anthropics/claude-code/issues/109743) Compaction looks like a finished turn to hook-based status tools `enhancement` `platform:linux` `area:hooks`
- [#109742](https://github.com/anthropics/claude-code/issues/109742) Auto mode classifier refuses `git push` to the user's own new private repo as [Unsanctioned Communication] `bug` `area:permissions`
- [#109740](https://github.com/anthropics/claude-code/issues/109740) [Bug] Model ignores CLAUDE.md coding guidelines (DRY, YAGNI, KISS) `bug` `platform:macos` `area:model`
- [#109739](https://github.com/anthropics/claude-code/issues/109739) Mods: pass per-model weekly windows in session.measure / $.session.usage() `enhancement` `area:plugins`
- [#109737](https://github.com/anthropics/claude-code/issues/109737) [BUG] Automatic session recap is skipped whenever rate-limit status is not "allowed" (undocumented, no override) `bug` `has repro` `platform:linux` `area:core`
- [#109734](https://github.com/anthropics/claude-code/issues/109734) [BUG] Mic on Claude Desktop chat cannot be disabled when clicking on it `invalid`

#### 🔒 Closed Issues
- [#109738](https://github.com/anthropics/claude-code/issues/109738) [BUG] Fable 5.2 Max: 5-hour window now lasts ~10–15 min (was 2–3 hrs)

### OpenAI Codex (`openai/codex`)

**Stars:** 135,205 · **Open issues:** 27,575 · **Last push:** <1h ago

Today, Codex saw the release of rust-v0.169.0, introducing notable features such as an opt-in terminal workspace that supports multiple side-chat tabs and enhanced search functionality for older tasks. Additionally, rust-v0.168.0 was released, allowing users to browse model providers under Sessions and view a side conversation alongside the main chat. Among the merged pull requests, #61449 added an explicit cloud catalog refresh to improve performance, while #61446 introduced thread ID inclusion filters to enhance message management. Notably, a new issue (#61451) was reported regarding workspaceWrite thread rejections in the Windows App Server, indicating a potential challenge related to process creation.

#### 🚀 New Releases
- [rust-v0.169.0](https://github.com/openai/codex/releases/tag/rust-v0.169.0) 0.169.0
- [rust-v0.171.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.5) 0.171.0-alpha.5
- [rust-v0.171.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.4) 0.171.0-alpha.4
- [rust-v0.171.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.2) 0.171.0-alpha.2
- [rust-v0.168.0](https://github.com/openai/codex/releases/tag/rust-v0.168.0) 0.168.0
- [rust-v0.171.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.1) 0.171.0-alpha.1

#### ✅ Merged PRs
- [#61449](https://github.com/openai/codex/pull/61449) Add explicit cloud catalog refresh before turn admission
- [#61446](https://github.com/openai/codex/pull/61446) Add thread ID inclusion filters to `thread/list`
- [#61444](https://github.com/openai/codex/pull/61444) Add process-local launch directories for shared MCP servers
- [#61438](https://github.com/openai/codex/pull/61438) Use the provider default RPC in the TUI
- [#61437](https://github.com/openai/codex/pull/61437) Avoid starting dormant REPL servers for cleanup hooks
- [#61434](https://github.com/openai/codex/pull/61434) Close abandoned tool dispatch traces as aborted
- [#61430](https://github.com/openai/codex/pull/61430) Instrument MCP OAuth credential store locks
- [#61429](https://github.com/openai/codex/pull/61429) Refresh cloud plugin and skill catalogs during step preparation
- [#61428](https://github.com/openai/codex/pull/61428) Require OAuth CONNECT metadata for Portals TCP tunnels
- [#61426](https://github.com/openai/codex/pull/61426) Enable incremental tools by default for Amazon Bedrock
- [#61424](https://github.com/openai/codex/pull/61424) Refill the transcript viewport when collapsing tool groups
- [#61422](https://github.com/openai/codex/pull/61422) Add keyboard table selection to the transcript
- [#61421](https://github.com/openai/codex/pull/61421) Use thread-scoped model catalogs for model lookups
- [#61420](https://github.com/openai/codex/pull/61420) Clear the user endpoint override during GCP setup
- [#61419](https://github.com/openai/codex/pull/61419) Resolve pasted Windows paths with wslpath in WSL
- [#61418](https://github.com/openai/codex/pull/61418) Require a government workspace for the government backend
- [#61417](https://github.com/openai/codex/pull/61417) Expose Codex rate limits in statusline state
- [#61415](https://github.com/openai/codex/pull/61415) Expose the workspace headline in structured status-line state
- [#61411](https://github.com/openai/codex/pull/61411) Ignore stale workspace headline requests and archived messages
- [#61410](https://github.com/openai/codex/pull/61410) Expose thread costs in statusline state and reject stale usage reads
- [#61409](https://github.com/openai/codex/pull/61409) Expose context usage in statusline state
- [#61408](https://github.com/openai/codex/pull/61408) Expose token usage totals in statusline state
- [#61405](https://github.com/openai/codex/pull/61405) Show the primary executor's workspace in TUI status surfaces
- [#61403](https://github.com/openai/codex/pull/61403) Add a structured status-line snapshot for the displayed thread
- [#61402](https://github.com/openai/codex/pull/61402) Update Daybreak links in TUI cybersecurity notices
- [#61401](https://github.com/openai/codex/pull/61401) Release MCP OAuth read locks before keyring access
- [#61400](https://github.com/openai/codex/pull/61400) Retry incomplete cloud catalogs with exponential backoff
- [#61398](https://github.com/openai/codex/pull/61398) Restore shared connector metadata for Codex Apps tools
- [#61397](https://github.com/openai/codex/pull/61397) Add default model provider selection to the app server
- [#61395](https://github.com/openai/codex/pull/61395) Remove legacy sandbox-policy accessors from configuration
- [#61394](https://github.com/openai/codex/pull/61394) Add opt-in file-backed tool audio
- [#61393](https://github.com/openai/codex/pull/61393) Add optional release IDs to cloud plugin source locations
- [#61391](https://github.com/openai/codex/pull/61391) Normalize managed network requirements before merging
- [#61390](https://github.com/openai/codex/pull/61390) Preserve active additional context across compaction
- [#61389](https://github.com/openai/codex/pull/61389) Reduce session submission channel memory with boxed payloads
- [#61388](https://github.com/openai/codex/pull/61388) Include the Windows sandbox service in release builds
- [#61387](https://github.com/openai/codex/pull/61387) Refresh plugin recommendations when tooling state changes
- [#61386](https://github.com/openai/codex/pull/61386) Reuse cloud plugin catalogs across turns until invalidated
- [#61385](https://github.com/openai/codex/pull/61385) Add configurable idle heartbeats to Code Mode gRPC streams
- [#61384](https://github.com/openai/codex/pull/61384) Support Orbit originators in model catalog partitioning
- [#61383](https://github.com/openai/codex/pull/61383) Keep the composer responsive while opening new conversations
- [#61382](https://github.com/openai/codex/pull/61382) Make clock reads synchronous and remove client clock requests
- [#61381](https://github.com/openai/codex/pull/61381) Update the harness provenance comment in context history
- [#61380](https://github.com/openai/codex/pull/61380) Add cell-aware mouse selection to transcript tables
- [#61379](https://github.com/openai/codex/pull/61379) Remove unused workspace entries and simplify Rust code
- [#61374](https://github.com/openai/codex/pull/61374) Delegate installed plugin recommendation filtering to the endpoint
- [#61372](https://github.com/openai/codex/pull/61372) Add opt-in transparent TCP routing for Linux sandboxes
- [#61371](https://github.com/openai/codex/pull/61371) Add opt-in signer-service support for macOS releases
- [#61370](https://github.com/openai/codex/pull/61370) Remove BuildBuddy presets from the checked-in Bazel configuration
- [#61369](https://github.com/openai/codex/pull/61369) Use native permission profiles for diagnostics and sandbox checks

#### 🐛 New Issues
- [#61451](https://github.com/openai/codex/issues/61451) Windows App Server: workspaceWrite thread rejects Node test before process creation `bug` `windows-os` `sandbox` `CLI` 💬1
- [#61448](https://github.com/openai/codex/issues/61448) ChatGPT Remote: support private credential input on mobile `enhancement` `auth` `mcp` `app` 💬1
- [#61447](https://github.com/openai/codex/issues/61447) Desktop app (Windows Store) 26.1106.6628.0: startup policy read fails reason=protocol — app paused with '无法加载组织设置' (cannot load organization settings) `bug` `windows-os` `app` `connectivity` 💬1
- [#61450](https://github.com/openai/codex/issues/61450) macOS: internal service DNS and process inspection unavailable in Dot main chat `bug` `sandbox` `connectivity` `dots` 💬1
- [#61406](https://github.com/openai/codex/issues/61406) Show token usage for a whole sub-agent tree (parent + all `spawn_agent` children) `enhancement` `rate-limits` `subagent` `app-server` 💬1
- [#61262](https://github.com/openai/codex/issues/61262) [Windows / ChatGPT Work] Repeated Daybreak false positives block GPU-kernel verification research across project conversations `bug` `windows-os` `safety-check` 💬1
- [#61423](https://github.com/openai/codex/issues/61423) 2 times 5-hour usage consumes >31% of weekly usage `bug` `windows-os` `rate-limits` `app` 💬1
- [#61414](https://github.com/openai/codex/issues/61414) Codex repeatedly restarts during an active task `bug` `app` 💬1
- [#61445](https://github.com/openai/codex/issues/61445) Add background Computer Use on Windows without stealing focus `enhancement` `windows-os` `app` `computer-use`
- [#61443](https://github.com/openai/codex/issues/61443) Outlook Email connector: drafts returned by API are intermittently missing from Outlook's Drafts view `bug` `tool-calls`
- [#61442](https://github.com/openai/codex/issues/61442) ImageGen generate-batch aborts valid JSONL jobs containing a Unicode line separator in poster text `bug` `skills` `imagen`
- [#61441](https://github.com/openai/codex/issues/61441) gitDiffToRemote fails on an unpushed topic branch when the remote default branch contains a slash `bug` `CLI` `app-server`
- [#61440](https://github.com/openai/codex/issues/61440) Standalone installer creates .bash_profile on macOS and disables the user's existing .profile `bug` `CLI`
- [#61439](https://github.com/openai/codex/issues/61439) Standalone installer ignores ZDOTDIR and leaves codex off PATH in new Zsh sessions `bug` `CLI`
- [#61436](https://github.com/openai/codex/issues/61436) Default skill installation strips executable bits and breaks the curated Playwright launcher `bug` `CLI` `skills`
- [#61435](https://github.com/openai/codex/issues/61435) Importing an MCP server erases unrelated comments and disabled settings from the project config `bug` `mcp` `CLI` `config`
- [#61433](https://github.com/openai/codex/issues/61433) Skill installer cannot install a GitHub tree URL when the branch contains a slash `bug` `skills`
- [#61432](https://github.com/openai/codex/issues/61432) ImageGen soft matte erases opaque foreground pixels beyond --opaque-threshold `bug` `skills` `imagen`
- [#61431](https://github.com/openai/codex/issues/61431) apply_patch drops the executable bit when moving a script `bug` `CLI` `tool-calls`
- [#61425](https://github.com/openai/codex/issues/61425) Withdrawn by author — no maintainer action requested `bug` `tool-calls` `safety-check`
- [#61427](https://github.com/openai/codex/issues/61427) Cannot use codex to hack an old phone to install a better Operating system `bug` `app` `safety-check`
- [#61412](https://github.com/openai/codex/issues/61412) Desktop Issue `bug` `windows-os` `app` `app-server`
- [#61416](https://github.com/openai/codex/issues/61416) Expose feedback submission through Codex MCP tools `enhancement` `mcp` `app` `remote`

#### 🔒 Closed Issues
- [#44329](https://github.com/openai/codex/issues/44329) Codex CLI (and VSCode extension) sandbox unable to handle /proc mounting failures
- [#61447](https://github.com/openai/codex/issues/61447) Desktop app (Windows Store) 26.1106.6628.0: startup policy read fails reason=protocol — app paused with '无法加载组织设置' (cannot load organization settings)
- [#61425](https://github.com/openai/codex/issues/61425) Withdrawn by author — no maintainer action requested

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,821 · **Open issues:** 721 · **Last push:** 1h ago

On November 14, 2026, there were no new releases for Gemini CLI. However, significant progress was made with two merged pull requests: #30271 improves authentication capabilities by ensuring options are deduplicated when listing models, while #30266 refines the core and CLI functionality by confining the foreground retry status to the active main prompt and current model policy. There were no new issues reported in the last 24 hours, making today a day of routine maintenance with impactful enhancements to the CLI’s operation.

#### ✅ Merged PRs
- [#30271](https://github.com/google-gemini/gemini-cli/pull/30271) fix(cli): initialize auth capabilities and deduplicate options when listing models
- [#30266](https://github.com/google-gemini/gemini-cli/pull/30266) fix(core,cli): scope foreground retry status to active main prompt and current model policy

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,412 · **Open issues:** 2,205 · **Last push:** 2h ago

On November 13, 2026, GitHub Copilot CLI released versions 1.0.112 and 1.0.112-0, introducing several key updates including improved error messaging on failures, preserved prompt text during managed account policy loading, and enhanced startup for macOS Ventura users, along with refined context window usage for models. Version 1.0.111 also received updates, adding regular expression support for enterprise-managed shells and preventing duplicate OAuth reconnects. Merged pull requests included updates from Debian and Docker's login action. A notable new issue arose regarding paste functionality being blocked by the native broker window in MCP OAuth for Entra servers, potentially impacting user experience during authentication.

#### 🚀 New Releases
- [v1.0.112](https://github.com/github/copilot-cli/releases/tag/v1.0.112) 1.0.112
- [v1.0.112-0](https://github.com/github/copilot-cli/releases/tag/v1.0.112-0) 1.0.112-0
- [v1.0.111](https://github.com/github/copilot-cli/releases/tag/v1.0.111) 1.0.111

#### ✅ Merged PRs
- [#5454](https://github.com/github/copilot-cli/pull/5454) build(deps): bump debian from `f6b08b0` to `a72b443` in /container
- [#5453](https://github.com/github/copilot-cli/pull/5453) build(deps): bump docker/login-action from 4.7.0 to 4.8.0

#### 🐛 New Issues
- [#5451](https://github.com/github/copilot-cli/issues/5451) V `triage` `invalid` 💬1
- [#5455](https://github.com/github/copilot-cli/issues/5455) Version-matched request-construction source/provenance for Copilot CLI 1.0.110 `triage`
- [#5452](https://github.com/github/copilot-cli/issues/5452) MCP OAuth for Entra servers forces native broker window that blocks paste; no browser fallback (1.0.109) `triage`
- [#5449](https://github.com/github/copilot-cli/issues/5449) Paste body lost when Enter arrives during managed-account policy startup
- [#5450](https://github.com/github/copilot-cli/issues/5450) Context overhead regression: ~20K extra tokens after 1.0.106 (desktop app 1.4.0) `triage`

#### 🔒 Closed Issues
- [#4802](https://github.com/github/copilot-cli/issues/4802) PRU Quota Wiped Out, very likely related to enabling Assisted Permissions
- [#5236](https://github.com/github/copilot-cli/issues/5236) Windows: Entra broker token cache stays 0 bytes after MCP sign-in, so every new process re-prompts
- [#2374](https://github.com/github/copilot-cli/issues/2374) Autopilot enters an infinite loop
- [#4866](https://github.com/github/copilot-cli/issues/4866) Ctrl-D in ask_user /elicitation form fields triggers session shutdown and discards in-progress input
- [#3039](https://github.com/github/copilot-cli/issues/3039) MCP OAuth in headless session times out
- [#4783](https://github.com/github/copilot-cli/issues/4783) Enterprise policy to allow yolo in CLI sandbox
- [#5412](https://github.com/github/copilot-cli/issues/5412) Every extension slash command reports "No client found for command" even though its handler runs
- [#3266](https://github.com/github/copilot-cli/issues/3266) Background task agents silently substitute requested model without warning
- [#5451](https://github.com/github/copilot-cli/issues/5451) V
- [#4978](https://github.com/github/copilot-cli/issues/4978) extensions.discover() omits enabled marketplace-installed plugin extensions on Copilot CLI 1.0.88
- [#4852](https://github.com/github/copilot-cli/issues/4852) Issue with "unknown option '--no-warnings'" during operation
- [#4320](https://github.com/github/copilot-cli/issues/4320) Nested custom agent MCP tools depend on undocumented immediate-parent grants starting in CLI 1.0.74
- [#3732](https://github.com/github/copilot-cli/issues/3732) edit tool corrupts non-UTF-8 bytes
- [#3046](https://github.com/github/copilot-cli/issues/3046) [Bug] session-store.db not created on Windows WSL2 — no persistent session storage
- [#5258](https://github.com/github/copilot-cli/issues/5258) Copying in Copilot CLI 1.0.103 updates only tmux’s paste buffer on GNOME Terminal/X11; advertised OSC 52 support prevents working X11 fallback
- [#4881](https://github.com/github/copilot-cli/issues/4881) macOS local sandbox: expose an exact Mach/XPC lookup allowlist
- [#3461](https://github.com/github/copilot-cli/issues/3461) Mcp issue in copilot
- [#5449](https://github.com/github/copilot-cli/issues/5449) Paste body lost when Enter arrives during managed-account policy startup

### OpenCode (`anomalyco/opencode`)

**Stars:** 226,694 · **Open issues:** 3,995 · **Last push:** <1h ago

On November 14, 2026, OpenCode released version 2.3.0, introducing several key features, including background subagents by default, allowing subagents to run concurrently without blocking the parent session, and providing quieter transcripts that summarize tool call runs. In addition to the release, a performance improvement was merged with PR #63883, benchmarking against strobe 0.38.0. The development team is currently addressing several new issues, with the most pressing being #63817, which reports that shell commands leave zombie processes under the opencode-pty daemon on Linux, highlighting potential stability concerns in the latest version. Other notable issues include complaints about session management and unintended command resubmissions, indicating areas needing immediate attention.

#### 🚀 New Releases
- [v2.3.0](https://github.com/anomalyco/opencode/releases/tag/v2.3.0) v2.3.0

#### ✅ Merged PRs
- [#63883](https://github.com/anomalyco/opencode/pull/63883) chore(perf): bench with strobe 0.38.0

#### 🐛 New Issues
- [#63817](https://github.com/anomalyco/opencode/issues/63817) pty: shell commands leave zombies under opencode-pty daemon on Linux (2.3.0) `type/bug` `area/service` `version/v2` `platform/linux` 💬4
- [#63802](https://github.com/anomalyco/opencode/issues/63802) Upgrade to 2.3.0 re-ran old session! `pending close` `triaging` `type/bug` `area/sessions-storage` 💬4
- [#63847](https://github.com/anomalyco/opencode/issues/63847) mcp: config reload starts a new MCP process set without terminating the previous one `type/bug` `area/mcp` `version/v2` `platform/wsl` 💬3
- [#63845](https://github.com/anomalyco/opencode/issues/63845) Web UI (mobile): Home session Delete action does not open confirmation `type/bug` `area/web` `version/v2` 💬2
- [#63839](https://github.com/anomalyco/opencode/issues/63839) tui: --prompt is resubmitted when opening the first new tab after starting with --session `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬2
- [#63857](https://github.com/anomalyco/opencode/issues/63857) Bedrock `invalid encrypted view` on replayed reasoning fails the session and every retry `type/bug` `area/providers` `version/v2` `platform/macos` 💬2
- [#63887](https://github.com/anomalyco/opencode/issues/63887) [FEATURE]:Provide direct APK download for the official Android App (ai.opencode.mobilecode) `type/feature` `area/install-upgrade` 💬1
- [#63886](https://github.com/anomalyco/opencode/issues/63886) Session inbox rows survive an interrupt with resume: false, and plugins cannot clear them `type/feature` `area/plugins` `version/v2` 💬1
- [#63884](https://github.com/anomalyco/opencode/issues/63884) Parent timeline revert misses file edits from background subagents `type/bug` `status/repro-simulated` `area/sessions-storage` `version/v2` 💬1
- [#63882](https://github.com/anomalyco/opencode/issues/63882) provider: bare resume turn fails instantly with invalid parameters (Responses endpoint) `triaging` `type/bug` `area/providers` `inference/go` 💬1
- [#63880](https://github.com/anomalyco/opencode/issues/63880) tui: prompt footer stays stale when a command with agent: frontmatter switches to a hidden agent `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬1
- [#63879](https://github.com/anomalyco/opencode/issues/63879) A project's agent permissions override managed permission rules, contrary to the managed-settings docs `reproduced` `type/bug` `area/core` `version/v2` 💬1
- [#63878](https://github.com/anomalyco/opencode/issues/63878) useage counter `triaging` `type/feature` 💬1
- [#63877](https://github.com/anomalyco/opencode/issues/63877) me sale este mensaje varias veces y no se reinicia `type/bug` `area/tui` `inference/free-tier` 💬1
- [#63876](https://github.com/anomalyco/opencode/issues/63876) mcp: no-backoff resources/list retry storm wedges the service; new MCP connects stall `type/bug` `area/mcp` `version/v2` `platform/macos` 💬1
- [#63875](https://github.com/anomalyco/opencode/issues/63875) [FEATURE]: Session pause (soft / hard / kill) - a durable state that nothing can wake until resume `type/feature` `area/core` `version/v2` 💬1
- [#63874](https://github.com/anomalyco/opencode/issues/63874) subagents: follow-up by sessionID fails with "Subagent session not found: ses" `type/bug` `area/core` `version/v2` `platform/linux` 💬1
- [#63871](https://github.com/anomalyco/opencode/issues/63871) claude-agent: catch-up sends one block per part and misses the prompt cache `type/feature` `area/providers` `version/v2` `platform/linux` 💬1
- [#63869](https://github.com/anomalyco/opencode/issues/63869) TUI: markdown table grid lines use hardcoded #888888 fallback - not themeable `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬1
- [#63870](https://github.com/anomalyco/opencode/issues/63870) claude-agent: image budget cut rewrites the whole prompt cache `type/feature` `area/providers` `version/v2` `platform/linux` 💬1
- [#63868](https://github.com/anomalyco/opencode/issues/63868) opencode-go: renewal rollover rejects an active subscription for ~1 minute and kills in-flight sessions `type/bug` `area/auth` `inference/go` `version/v2` 💬1
- [#63867](https://github.com/anomalyco/opencode/issues/63867) [FEATURE]: Native secret references for provider and MCP credentials (OS credential store or secret manager) `type/feature` `area/auth` `version/v2` 💬1
- [#63864](https://github.com/anomalyco/opencode/issues/63864) cli: duplicate "session" key in cli.json makes settings dialog writes land in an ignored block `reproduced` `type/bug` `area/tui` `version/v2` 💬1
- [#63863](https://github.com/anomalyco/opencode/issues/63863) desktop: project created at "/" from service cwd, re-created every launch, one model-switched event per catalog model `reproduced` `type/bug` `area/desktop` `version/v2` 💬1
- [#63860](https://github.com/anomalyco/opencode/issues/63860) tui: model picker no longer shows context limit and model capabilities `type/feature` `area/tui` `version/v2` `platform/windows` 💬1
- [#63856](https://github.com/anomalyco/opencode/issues/63856) formatters: ruff built-in runs without the documented Ruff config/dependency requirement `type/bug` `area/core` `version/v2` `platform/macos` 💬1
- [#63855](https://github.com/anomalyco/opencode/issues/63855) ACP: auto-resumed parent turn after a background subagent has no start or end marker `type/feature` `area/ide-acp` `version/v2` `platform/linux` 💬1

#### 🔒 Closed Issues
- [#63216](https://github.com/anomalyco/opencode/issues/63216) Rogue actions
- [#63113](https://github.com/anomalyco/opencode/issues/63113) Compaction loop just tokens after another compaction
- [#63817](https://github.com/anomalyco/opencode/issues/63817) pty: shell commands leave zombies under opencode-pty daemon on Linux (2.3.0)
- [#63802](https://github.com/anomalyco/opencode/issues/63802) Upgrade to 2.3.0 re-ran old session!
- [#63847](https://github.com/anomalyco/opencode/issues/63847) mcp: config reload starts a new MCP process set without terminating the previous one
- [#63845](https://github.com/anomalyco/opencode/issues/63845) Web UI (mobile): Home session Delete action does not open confirmation
- [#63218](https://github.com/anomalyco/opencode/issues/63218) sessions: local database recreated empty after restart following model auth failure
- [#63201](https://github.com/anomalyco/opencode/issues/63201) agents: custom agents from .opencode/agents/ disappear after reload
- [#63877](https://github.com/anomalyco/opencode/issues/63877) me sale este mensaje varias veces y no se reinicia
- [#63874](https://github.com/anomalyco/opencode/issues/63874) subagents: follow-up by sessionID fails with "Subagent session not found: ses"
- [#63868](https://github.com/anomalyco/opencode/issues/63868) opencode-go: renewal rollover rejects an active subscription for ~1 minute and kills in-flight sessions

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,122 · **Open issues:** 2,254 · **Last push:** <1h ago

On November 14, 2026, there were no new releases for Qwen Code, but significant progress was made with the merging of two pull requests: #17181, which enhances the CLI by running each ACP round within a single runAgentLoop call, and #17194, aimed at improving test reliability for the managed runtime terminal replay test. The development team also addressed several issues, with notable new entries such as #17099 for tracking remaining npm security scan findings and staged dependency upgrades, and #17129 addressing a bug related to context pollution in user messages during rounds. This proactive management of ongoing issues reflects the team's commitment to enhancing reliability and security within the codebase. Overall, the day was largely routine but marked by important maintenance and testing improvements.

#### ✅ Merged PRs
- [#17181](https://github.com/QwenLM/qwen-code/pull/17181) feat(cli): run each ACP round in one runAgentLoop call
- [#17194](https://github.com/QwenLM/qwen-code/pull/17194) test(cli): deflake managed runtime terminal replay test (#17192)

#### 🐛 New Issues
- [#17099](https://github.com/QwenLM/qwen-code/issues/17099) Track remaining npm security scan findings and staged dependency upgrades `priority/P2` `type/bug` `category/security` `scope/mcp` 💬12
- [#17173](https://github.com/QwenLM/qwen-code/issues/17173) Managed DingTalk adapter: follow-up coverage/hygiene suggestions from #17136 review `priority/P3` `category/integration` `scope/testing` `type/enhancement` 💬3
- [#17192](https://github.com/QwenLM/qwen-code/issues/17192) deflake: packages/cli/src/serve/managed-runtime-terminal.test.ts › ManagedRuntimeTerminals > replays scrollback on reconnect of the same Session `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17203](https://github.com/QwenLM/qwen-code/issues/17203) deflake: chat-transcript-document.test.ts › ExportTranscriptDocument browser gate › opens, searches, copies, and prints the maximum document with its pinned npm runtime `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17195](https://github.com/QwenLM/qwen-code/issues/17195) deflake: packages/web-shell/client/e2e/web-shell.table-fullscreen.spec.ts › enhanced table fullscreen › @smoke compacts the mid-width toolbar only while cells are selected `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#17186](https://github.com/QwenLM/qwen-code/issues/17186) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement `type/bug` `scope/testing` `duplicate` `autofix/skip` 💬3
- [#17184](https://github.com/QwenLM/qwen-code/issues/17184) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke `type/bug` `scope/testing` `duplicate` `autofix/skip` 💬3
- [#17176](https://github.com/QwenLM/qwen-code/issues/17176) deflake: integrations/external-context/src/proxy.test.ts › installEnvironmentProxy > rejects a malformed proxy environment value via the real dispatcher `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17174](https://github.com/QwenLM/qwen-code/issues/17174) Centralize Java SDK exception unwrapping beside its wrapper producer `priority/P3` `status/blocked` `type/enhancement` `scope/sdk` 💬3
- [#17167](https://github.com/QwenLM/qwen-code/issues/17167) Review request: #15450 (QQ channel outbound media) is merge-ready but stalled 72 h on two approvals and a host-class CI re-run `status/in-review` `priority/P3` `category/integration` 💬3
- [#17159](https://github.com/QwenLM/qwen-code/issues/17159) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke `scope/testing` `duplicate` `autofix/skip` `scope/web-shell` 💬3
- [#17129](https://github.com/QwenLM/qwen-code/issues/17129) [Bug] 常驻约束被逐轮注入为独立 user 消息，模型逐轮重复同一段确认套话（上下文污染） `status/need-information` `priority/P2` `type/bug` `category/core` 💬3
- [#17102](https://github.com/QwenLM/qwen-code/issues/17102) deflake: integration-tests/interactive/tui-agent-loop-parity.test.ts › Ink TUI agent loop parity (experimental.unifiedAgentLoop) › a background shell whose result starts a notification turn `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#17158](https://github.com/QwenLM/qwen-code/issues/17158) deflake: integration-tests/chat-transcript-document.test.ts › ExportTranscriptDocument browser gate › opens, searches, copies, and prints the maximum document with its pinned npm runtime `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17156](https://github.com/QwenLM/qwen-code/issues/17156) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke `scope/testing` `duplicate` `autofix/skip` `scope/web-shell` 💬3
- [#17154](https://github.com/QwenLM/qwen-code/issues/17154) [Bug]: Already-migrated v4 folder-trust settings retain the unused featureEnabled key `priority/P2` `type/bug` `category/configuration` `scope/settings` 💬3
- [#17204](https://github.com/QwenLM/qwen-code/issues/17204) The model is busy and could not complete the request. Please try again later. `status/need-information` `priority/P2` `type/bug` `category/core` 💬2
- [#17201](https://github.com/QwenLM/qwen-code/issues/17201) Release Failed for v0.27.2-nightly.20261113.6f754be654 on 2026-11-13 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/in-progress` 💬2
- [#17200](https://github.com/QwenLM/qwen-code/issues/17200) Web Shell: make chat width configurable via user settings (settings.json) `priority/P3` `type/feature-request` `category/ui` `scope/settings` 💬2
- [#17188](https://github.com/QwenLM/qwen-code/issues/17188) DeepSeek V3.1 and V3.2 fall back to the generic DeepSeek output limit `priority/P2` `type/bug` `category/core` `scope/token-management` 💬2
- [#17189](https://github.com/QwenLM/qwen-code/issues/17189) Ollama llama4:scout and llama4:maverick lose image input `priority/P2` `type/bug` `category/core` 💬2
- [#17182](https://github.com/QwenLM/qwen-code/issues/17182) MCP streamable-HTTP: a non-JSON-RPC HTTP 200 response (Z.AI gateway auth rejection) fails the connection with an opaque Zod `invalid_union` dump `priority/P3` `type/bug` `category/tools` `scope/mcp` 💬2
- [#17175](https://github.com/QwenLM/qwen-code/issues/17175) Align review-run advisory with exported convergence budget and share reserve parsing `priority/P3` `status/blocked` `category/cli` `scope/commands` 💬2
- [#17170](https://github.com/QwenLM/qwen-code/issues/17170) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke `type/bug` `scope/testing` `duplicate` `autofix/skip` 💬2
- [#17169](https://github.com/QwenLM/qwen-code/issues/17169) Unicode Edit recovery can split additional multi-character escapes `priority/P2` `type/bug` `category/tools` `scope/file-operations` 💬2
- [#17157](https://github.com/QwenLM/qwen-code/issues/17157) Harden the loop-parity suites against PID-width-derived size counters (class-level follow-up to #17102) `priority/P3` `status/blocked` `type/bug` `category/development` 💬2
- [#17210](https://github.com/QwenLM/qwen-code/issues/17210) ACP mode: "A session ModelProvider is required for inference" ~1 hour after sign-in (subscription auth) 💬1
- [#17131](https://github.com/QwenLM/qwen-code/issues/17131) Main CI failed: E2E Tests — interactive/tui-agent-loop-parity.test.ts > … > 'two reads in one response' `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#16787](https://github.com/QwenLM/qwen-code/issues/16787) Main CI failed: E2E Tests — interactive/tui-agent-loop-parity.test.ts > … > 'an approved write, then a declined one'
- [#16505](https://github.com/QwenLM/qwen-code/issues/16505) Main CI failed: E2E Tests — interactive/ink-agent-loop-parity.test.ts > … > 'an approved write, then a declined one'
- [#16944](https://github.com/QwenLM/qwen-code/issues/16944) feat(core): programmatic tool calling — let the agent orchestrate tools as code in the sandbox and return only the result
- [#17192](https://github.com/QwenLM/qwen-code/issues/17192) deflake: packages/cli/src/serve/managed-runtime-terminal.test.ts › ManagedRuntimeTerminals > replays scrollback on reconnect of the same Session
- [#17203](https://github.com/QwenLM/qwen-code/issues/17203) deflake: chat-transcript-document.test.ts › ExportTranscriptDocument browser gate › opens, searches, copies, and prints the maximum document with its pinned npm runtime
- [#17186](https://github.com/QwenLM/qwen-code/issues/17186) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement
- [#17184](https://github.com/QwenLM/qwen-code/issues/17184) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke
- [#16778](https://github.com/QwenLM/qwen-code/issues/16778) feat(web-shell): improve session search experience
- [#17176](https://github.com/QwenLM/qwen-code/issues/17176) deflake: integrations/external-context/src/proxy.test.ts › installEnvironmentProxy > rejects a malformed proxy environment value via the real dispatcher
- [#16518](https://github.com/QwenLM/qwen-code/issues/16518) feat(core): continuable subagents — follow-up messages to sub-sessions and failed background agents
- [#17159](https://github.com/QwenLM/qwen-code/issues/17159) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke
- [#17102](https://github.com/QwenLM/qwen-code/issues/17102) deflake: integration-tests/interactive/tui-agent-loop-parity.test.ts › Ink TUI agent loop parity (experimental.unifiedAgentLoop) › a background shell whose result starts a notification turn
- [#17156](https://github.com/QwenLM/qwen-code/issues/17156) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke
- [#17018](https://github.com/QwenLM/qwen-code/issues/17018) Web Shell table toolbar overlaps after selecting a cell in a narrow window
- [#16997](https://github.com/QwenLM/qwen-code/issues/16997) feat(channels): add Feishu custom-bot webhook delivery and Web configuration
- [#17170](https://github.com/QwenLM/qwen-code/issues/17170) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke
- [#17131](https://github.com/QwenLM/qwen-code/issues/17131) Main CI failed: E2E Tests — interactive/tui-agent-loop-parity.test.ts > … > 'two reads in one response'
- [#16947](https://github.com/QwenLM/qwen-code/issues/16947) Main CI failed: E2E Tests — interactive/tui-agent-loop-parity.test.ts > … > 'a retry after a model error'
- [#16710](https://github.com/QwenLM/qwen-code/issues/16710) Main CI failed: E2E Tests — cli/agent-loop-parity.test.ts > … > parallel read-only batch: same requests and output

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

**Stars:** 394,403 · **Open issues:** 8,172 · **Last push:** <1h ago

On November 14, 2026, OpenClaw did not release any new versions; however, several significant Pull Requests were merged, including enhancements to session performance and user interface fixes. Notable improvements included the restoration of desktop standalone packaging, support for required manual-step handoffs in chat, and efforts to preserve catalog order during unchanged notifications. Additionally, multiple bugs were addressed, such as issues with progress-card updates, template handling in the Control UI, and the management of session caches. A particularly noteworthy new issue reported was the failure of the Control UI Template Add feature on a completed agent deletion tombstone, highlighting ongoing challenges with template management.

#### ✅ Merged PRs
- [#194519](https://github.com/openclaw/openclaw/pull/194519) perf(sessions): backfill historical transcript facts after readiness
- [#198568](https://github.com/openclaw/openclaw/pull/198568) perf(sessions): preserve catalog order across unchanged notifications
- [#198532](https://github.com/openclaw/openclaw/pull/198532) test(ui): use native picker shells in responsive fixtures
- [#198535](https://github.com/openclaw/openclaw/pull/198535) fix(ui): avoid renormalizing unchanged model names
- [#195493](https://github.com/openclaw/openclaw/pull/195493) fix: progress-card updates discard unrelated session caches
- [#198533](https://github.com/openclaw/openclaw/pull/198533) test(ui): follow the new-session context tray layout
- [#198577](https://github.com/openclaw/openclaw/pull/198577) fix(test): clean proxy CA fixtures after setup and teardown failures
- [#198578](https://github.com/openclaw/openclaw/pull/198578) fix(ci): remove unused node publication exports
- [#198269](https://github.com/openclaw/openclaw/pull/198269) fix(ui): match sidebar file search across NFC and NFD text forms
- [#198553](https://github.com/openclaw/openclaw/pull/198553) fix: expire a bound node with its owner device
- [#198574](https://github.com/openclaw/openclaw/pull/198574) fix: recover retained native updates after config edits
- [#198567](https://github.com/openclaw/openclaw/pull/198567) fix: restore desktop standalone packaging on current build output
- [#196951](https://github.com/openclaw/openclaw/pull/196951) feat(agents): support required manual-step handoffs in chat
- [#198566](https://github.com/openclaw/openclaw/pull/198566) improve(sessions): reuse list selections after usage updates
- [#197922](https://github.com/openclaw/openclaw/pull/197922) feat(update): new releases run their own pre-update rehearsal
- [#198564](https://github.com/openclaw/openclaw/pull/198564) perf(sessions): skip unused cached child clock views
- [#198481](https://github.com/openclaw/openclaw/pull/198481) fix: show plugin-delivered images in Control UI
- [#197633](https://github.com/openclaw/openclaw/pull/197633) fix(sessions): avoid transcript overreads when recovering nested tool activity
- [#198510](https://github.com/openclaw/openclaw/pull/198510) fix(ci): unused exports fail the dependency check
- [#198372](https://github.com/openclaw/openclaw/pull/198372) fix(google-meet): cancel interrupted status, transcript and doctor reads
- [#198544](https://github.com/openclaw/openclaw/pull/198544) fix(ci): keep the model picker target helper private
- [#198511](https://github.com/openclaw/openclaw/pull/198511) chore(postgres): qualify notice transcript crash recovery
- [#196644](https://github.com/openclaw/openclaw/pull/196644) fix(templates): publishing a Template from chat drops its CLAW.md description and rewrites its name
- [#198534](https://github.com/openclaw/openclaw/pull/198534) test(ui): wait for lazy model picker controls
- [#198539](https://github.com/openclaw/openclaw/pull/198539) fix(test): verify dispatch occurs inside the WSL family policy
- [#198527](https://github.com/openclaw/openclaw/pull/198527) fix(ci): explain rejected SDK declaration receipts
- [#198530](https://github.com/openclaw/openclaw/pull/198530) test(ui): observe relay grace in remote-access ceremony
- [#198316](https://github.com/openclaw/openclaw/pull/198316) improve(ui): add a model picker to Cmd+K Compose and regroup its settings
- [#198512](https://github.com/openclaw/openclaw/pull/198512) improve(sessions): reduce memory for lightweight transcript reads
- [#198348](https://github.com/openclaw/openclaw/pull/198348) feat: rank MCP tools in the usage-ranked tool index
- [#198459](https://github.com/openclaw/openclaw/pull/198459) fix(openclaw-id): script widgets render blank for members who open a claw through OpenClaw ID
- [#198513](https://github.com/openclaw/openclaw/pull/198513) fix: recover Gateways in delegated service cgroups
- [#198516](https://github.com/openclaw/openclaw/pull/198516) fix(test): restore account-aware draft title coverage
- [#198509](https://github.com/openclaw/openclaw/pull/198509) improve(ui): restore composer superellipse corners and tighten its controls
- [#198517](https://github.com/openclaw/openclaw/pull/198517) fix(ci): split oversized hosted main test groups
- [#198518](https://github.com/openclaw/openclaw/pull/198518) improve(ui): invite questions and tasks in the new-session prompt
- [#198493](https://github.com/openclaw/openclaw/pull/198493) fix(ui): match chat context entry search across NFC and NFD name forms
- [#198507](https://github.com/openclaw/openclaw/pull/198507) fix(ui): remove token counts beneath completed replies
- [#198505](https://github.com/openclaw/openclaw/pull/198505) fix(ci): vary scheduled CLI audit capture
- [#198306](https://github.com/openclaw/openclaw/pull/198306) fix(ci): keep the release waiver table private
- [#198502](https://github.com/openclaw/openclaw/pull/198502) fix(test): prove WebSocket connections use pinned proxy DNS
- [#198501](https://github.com/openclaw/openclaw/pull/198501) fix: adopt recovery controllers after native schema crossings
- [#180824](https://github.com/openclaw/openclaw/pull/180824) feat(ui): save per-agent model favorites in the chat picker
- [#198480](https://github.com/openclaw/openclaw/pull/198480) fix: keep restored chat model labels readable
- [#198490](https://github.com/openclaw/openclaw/pull/198490) test(ui): expect operator input when routing browser links
- [#192145](https://github.com/openclaw/openclaw/pull/192145) feat(ui): show model picker cooldown status
- [#197977](https://github.com/openclaw/openclaw/pull/197977) fix(macos): offer OpenClaw ID recovery after this Mac is removed
- [#193873](https://github.com/openclaw/openclaw/pull/193873) fix(github): recover saved repository publications
- [#198474](https://github.com/openclaw/openclaw/pull/198474) fix(ui): reconcile remote access setup's relay step and offer profile linking
- [#192142](https://github.com/openclaw/openclaw/pull/192142) feat(ui): refine model picker states and phone sheet
- [#198412](https://github.com/openclaw/openclaw/pull/198412) fix: discard pending node actions after ID access is removed
- [#198471](https://github.com/openclaw/openclaw/pull/198471) fix(cli): surface capability flag-guard remedies in --json failures
- [#197960](https://github.com/openclaw/openclaw/pull/197960) fix(agents): auth refresh fails after its plugin call ends
- [#198479](https://github.com/openclaw/openclaw/pull/198479) fix: templates add rejects publisher-qualified references for unscoped packages
- [#198429](https://github.com/openclaw/openclaw/pull/198429) fix(update): 2026.9.x updates report failure after installing the next release
- [#197609](https://github.com/openclaw/openclaw/pull/197609) chore: stabilize SQLite lifecycle verification during deletion
- [#197630](https://github.com/openclaw/openclaw/pull/197630) feat(macos): sign in with OpenClaw ID and approve this Mac as your device
- [#192137](https://github.com/openclaw/openclaw/pull/192137) feat(ui): group model picker runtime and account settings
- [#198478](https://github.com/openclaw/openclaw/pull/198478) fix(process): avoid Gateway fork stalls in detached commands
- [#198477](https://github.com/openclaw/openclaw/pull/198477) chore(i18n): refresh native locales
- [#198470](https://github.com/openclaw/openclaw/pull/198470) fix: Access page missing until restart after enabling OpenClaw ID
- [#198465](https://github.com/openclaw/openclaw/pull/198465) fix(anthropic): preserve canonical model family metadata
- [#197820](https://github.com/openclaw/openclaw/pull/197820) improve(ui): refine new-session context pickers
- [#198417](https://github.com/openclaw/openclaw/pull/198417) test(qa): two QA lab end-to-end tests fail on main
- [#198418](https://github.com/openclaw/openclaw/pull/198418) test(codex): worker command test fails on fork pull requests
- [#197573](https://github.com/openclaw/openclaw/pull/197573) feat(openclaw-id): approve an app's node together with its owner device
- [#197585](https://github.com/openclaw/openclaw/pull/197585) feat(macos): OpenClaw ID primary connection + dashboard proxy
- [#192135](https://github.com/openclaw/openclaw/pull/192135) feat: add a stable provider rail to the model picker
- [#198463](https://github.com/openclaw/openclaw/pull/198463) docs(macos): keep Gateway ownership separate from presentation
- [#198411](https://github.com/openclaw/openclaw/pull/198411) fix(ui): remove the No tools badge from the model picker
- [#198439](https://github.com/openclaw/openclaw/pull/198439) fix(oc-path): indented frontmatter scalars resolve as empty strings
- [#198441](https://github.com/openclaw/openclaw/pull/198441) fix: project memory misses its budget on large Knowledge vaults
- [#198283](https://github.com/openclaw/openclaw/pull/198283) improve(ui): trim redundant tooltips and show working shortcuts
- [#198342](https://github.com/openclaw/openclaw/pull/198342) fix(gateway): OpenClaw ID nodes re-prompt for approval right after enrollment
- [#197519](https://github.com/openclaw/openclaw/pull/197519) fix(telegram): pass the runtime session key to message_sending hooks
- [#187856](https://github.com/openclaw/openclaw/pull/187856) fix(codex): omit unavailable question-tool and redundant mode guidance
- [#198457](https://github.com/openclaw/openclaw/pull/198457) docs(browser): remove blanket manual-step stop guidance
- [#198431](https://github.com/openclaw/openclaw/pull/198431) fix(plugins): Doctor and Gateway startup fail when link() silently copies plugin files
- [#198442](https://github.com/openclaw/openclaw/pull/198442) fix(release): authorize beta.3 Kova performance waiver
- [#198434](https://github.com/openclaw/openclaw/pull/198434) fix: reduce repeated scans of long hydrated conversation history
- [#194990](https://github.com/openclaw/openclaw/pull/194990) docs: containerized gateway networking, host model servers, and rootless Podman troubleshooting
- [#198396](https://github.com/openclaw/openclaw/pull/198396) fix(agents): allow authorized non-disruptive component work
- [#198272](https://github.com/openclaw/openclaw/pull/198272) fix(ui): hide empty message box on missing session links
- [#197566](https://github.com/openclaw/openclaw/pull/197566) fix: remove Markdown table syntax from agent previews
- [#198331](https://github.com/openclaw/openclaw/pull/198331) fix(discord): presence greetings wake the agent for members outside the guild allowlist
- [#198430](https://github.com/openclaw/openclaw/pull/198430) chore(ui): refresh control ui locales
- [#198427](https://github.com/openclaw/openclaw/pull/198427) fix(auth): configured primary account blocks Claude CLI fallback
- [#198358](https://github.com/openclaw/openclaw/pull/198358) feat(workboard): let a board run more than one card per owner at once
- [#198344](https://github.com/openclaw/openclaw/pull/198344) fix(openclaw-id): Copy link uses the tailnet address when opened through OpenClaw ID
- [#192162](https://github.com/openclaw/openclaw/pull/192162) fix(telegram): forum approval drops the topic when the live turn omits it
- [#197928](https://github.com/openclaw/openclaw/pull/197928) feat(browser): let users take over the agent's browser from the Browser panel
- [#145741](https://github.com/openclaw/openclaw/pull/145741) fix(gateway): paired-node Claude continuations retain Gateway context
- [#195214](https://github.com/openclaw/openclaw/pull/195214) fix(telegram): keep cached context and cron notices in their owning topics
- [#198148](https://github.com/openclaw/openclaw/pull/198148) fix(update): avoid duplicate database copies while the Gateway is stopped
- [#197712](https://github.com/openclaw/openclaw/pull/197712) feat(gateway): role definitions no longer turn on named-role enforcement without a default
- [#198414](https://github.com/openclaw/openclaw/pull/198414) improve(worktrees): reduce recovery snapshot overhead
- [#198409](https://github.com/openclaw/openclaw/pull/198409) fix(macos): native approvals fail with an older external CLI
- [#198053](https://github.com/openclaw/openclaw/pull/198053) fix(ui): keep a Browser panel action's error visible through passive refreshes
- [#198379](https://github.com/openclaw/openclaw/pull/198379) fix(plugins): plugins update --all keeps installing plugins and hook packs after Ctrl+C
- [#197967](https://github.com/openclaw/openclaw/pull/197967) fix: dashboard stays on the shared token profile after Tailscale Serve recovers
- [#198398](https://github.com/openclaw/openclaw/pull/198398) fix: avoid repeated config copies after hot reload
- [#195830](https://github.com/openclaw/openclaw/pull/195830) fix(android): retire selected skill detail when switching gateways
- [#195683](https://github.com/openclaw/openclaw/pull/195683) fix(android): show errors when skill toggles fail in detail view
- [#195674](https://github.com/openclaw/openclaw/pull/195674) fix(android): update password semantics between provider sign-in steps
- [#196042](https://github.com/openclaw/openclaw/pull/196042) fix(android): wrap chat swarm header label and summary counts cleanly
- [#196040](https://github.com/openclaw/openclaw/pull/196040) fix(android): disclose automation name and ID in deletion confirmation dialog
- [#195999](https://github.com/openclaw/openclaw/pull/195999) fix(android): render full dream diary entry text in Dreaming settings
- [#198408](https://github.com/openclaw/openclaw/pull/198408) chore(ui): refresh control ui locales
- [#197853](https://github.com/openclaw/openclaw/pull/197853) fix(acp): relay exec approvals when Claude CLI and MCP tool call IDs differ
- [#198338](https://github.com/openclaw/openclaw/pull/198338) perf(gateway): share policy decisions across session lineage
- [#198380](https://github.com/openclaw/openclaw/pull/198380) fix(ui): Gateway event listener errors while chat Details updates are pending
- [#196839](https://github.com/openclaw/openclaw/pull/196839) fix: PR auto-fix stops following review and CI feedback
- [#198038](https://github.com/openclaw/openclaw/pull/198038) fix(telegram): keep DM topic approvals in their conversation
- [#197119](https://github.com/openclaw/openclaw/pull/197119) fix(gateway): cancel in-flight MCP listener work when shutdown starts (openclaw-jci6)
- [#198391](https://github.com/openclaw/openclaw/pull/198391) fix(ci): keep one Home browser test registration
- [#198349](https://github.com/openclaw/openclaw/pull/198349) feat(openclaw-id): admins turn on remote access over a verified personal sign-in
- [#198326](https://github.com/openclaw/openclaw/pull/198326) fix(ios): keep streaming replies in view and stop the jump when they finish
- [#198390](https://github.com/openclaw/openclaw/pull/198390) fix(ci): new PostgreSQL suites are omitted from conformance
- [#198397](https://github.com/openclaw/openclaw/pull/198397) fix(test): avoid false cron allowlist failures with code-mode models
- [#169444](https://github.com/openclaw/openclaw/pull/169444) fix(telegram): first DM message lands in root chat when the client creates the topic separately
- [#198288](https://github.com/openclaw/openclaw/pull/198288) fix: hide non-chat models from chat selection
- [#178124](https://github.com/openclaw/openclaw/pull/178124) fix(telegram): steered answers quote the wrong input
- [#198384](https://github.com/openclaw/openclaw/pull/198384) chore(ui): refresh control ui locales
- [#198293](https://github.com/openclaw/openclaw/pull/198293) chore(ios): measure chat scroll and streaming stability on the simulator
- [#198357](https://github.com/openclaw/openclaw/pull/198357) fix: recover OpenAI sessions after compaction item conflicts
- [#198132](https://github.com/openclaw/openclaw/pull/198132) fix(process): Doctor and spawn-broker cleanup fail when the host denies process-group signals
- [#198362](https://github.com/openclaw/openclaw/pull/198362) fix(worktrees): avoid redundant cleanup passes and manifest scans
- [#151923](https://github.com/openclaw/openclaw/pull/151923) fix(telegram): large media sends time out after 30 seconds
- [#197894](https://github.com/openclaw/openclaw/pull/197894) feat(ui): show and edit each agent's utility model on the Agents page
- [#198366](https://github.com/openclaw/openclaw/pull/198366) fix(test): expect retryable policy evaluation outages in identity scopes
- [#195672](https://github.com/openclaw/openclaw/pull/195672) fix(android): workspace previews stay unavailable after reconnect
- [#198369](https://github.com/openclaw/openclaw/pull/198369) fix(ui): wait for profile editor before testing avatar uploads
- [#195979](https://github.com/openclaw/openclaw/pull/195979) fix(android): preserve multiline system.notify body when expanded via BigTextStyle
- [#198330](https://github.com/openclaw/openclaw/pull/198330) improve(ci): capture bounded CLI outcomes for regression audits
- [#198337](https://github.com/openclaw/openclaw/pull/198337) fix(gateway): Control UI history drops Claude CLI tool activity when CLAUDE_CONFIG_DIR is set
- [#198359](https://github.com/openclaw/openclaw/pull/198359) chore(ui): refresh control ui locales
- [#198336](https://github.com/openclaw/openclaw/pull/198336) fix(test): align Goal pause note checks with cause-neutral interruptions
- [#198309](https://github.com/openclaw/openclaw/pull/198309) fix: binary attachments are pasted into the prompt as text
- [#198341](https://github.com/openclaw/openclaw/pull/198341) fix(ci): fresh-visit UI e2e times out when a PR changes widely imported source
- [#192779](https://github.com/openclaw/openclaw/pull/192779) fix(delivery): resend routed Telegram finals after an ambiguous network failure
- [#198263](https://github.com/openclaw/openclaw/pull/198263) fix(ui): match owner search across NFC and NFD name forms
- [#198335](https://github.com/openclaw/openclaw/pull/198335) perf(ci): reuse compiler during package boundary preparation
- [#198324](https://github.com/openclaw/openclaw/pull/198324) fix: show provider reset times for long rate limits
- [#198323](https://github.com/openclaw/openclaw/pull/198323) feat(openclaw-id): Link reuses a still-valid OpenClaw ID sign-in instead of a second device code
- [#198325](https://github.com/openclaw/openclaw/pull/198325) fix(ci): include Gateway ownership PostgreSQL conformance suites
- [#198319](https://github.com/openclaw/openclaw/pull/198319) fix(worktrees): finish retention of empty retired checkouts
- [#198254](https://github.com/openclaw/openclaw/pull/198254) fix(audit): stop interrupted audit reads when the CLI is cancelled
- [#198298](https://github.com/openclaw/openclaw/pull/198298) fix(cli): cancel interrupted skills status reports
- [#191687](https://github.com/openclaw/openclaw/pull/191687) fix(telegram): typing held back by a flood wait is logged as an error
- [#198318](https://github.com/openclaw/openclaw/pull/198318) fix(ci): clear unused OAuth store export after peer settlement move
- [#198286](https://github.com/openclaw/openclaw/pull/198286) fix(compaction): /compact fails for sandboxed Claude CLI sessions with a selected skill
- [#198245](https://github.com/openclaw/openclaw/pull/198245) fix: preserve operator access when policy evaluation fails
- [#194808](https://github.com/openclaw/openclaw/pull/194808) feat(backup): restore PostgreSQL stores into a staging database for restore drills
- [#196228](https://github.com/openclaw/openclaw/pull/196228) fix(android): refresh voice wake after microphone permission changes
- [#198234](https://github.com/openclaw/openclaw/pull/198234) fix(ui): keep the Default model under its configured runtime group while a session pins another runtime
- [#198300](https://github.com/openclaw/openclaw/pull/198300) fix(ui): allow owned-session appearance and retain linked accounts
- [#198308](https://github.com/openclaw/openclaw/pull/198308) fix(ui): move personal session references between sections
- [#196236](https://github.com/openclaw/openclaw/pull/196236) feat(database): keep PostgreSQL rollback captures in PostgreSQL
- [#198305](https://github.com/openclaw/openclaw/pull/198305) fix(test): verify FormData file contents survive conversion
- [#198303](https://github.com/openclaw/openclaw/pull/198303) fix: recover deployments with held agent databases
- [#195928](https://github.com/openclaw/openclaw/pull/195928) fix(android): avoid caching transient HTTP failures in gateway source favicon cache
- [#197627](https://github.com/openclaw/openclaw/pull/197627) fix(skills): reject missing values for telegram e2e runner options

#### 🐛 New Issues
- [#198475](https://github.com/openclaw/openclaw/issues/198475) [Bug]: Control UI Template Add fails on a completed agent deletion tombstone `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬6
- [#198188](https://github.com/openclaw/openclaw/issues/198188) [Feature Request]: Show linked Telegram group sessions to verified members in the Web UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬5
- [#198334](https://github.com/openclaw/openclaw/issues/198334) [Bug]: Update repair fails during Doctor finalization on 2026.11.1 `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬4
- [#198218](https://github.com/openclaw/openclaw/issues/198218) Doctor/update maintenance livelocks while the Gateway is stopped: update-run admission reader re-hashes the unchanged state DB forever (reproduced on 2026.10.6 and 2026.11.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#198158](https://github.com/openclaw/openclaw/issues/198158) TUI /models shows full provider catalog instead of filtering to available models `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#198482](https://github.com/openclaw/openclaw/issues/198482) [Bug]: Update stuck in 'validating' for hours: recovery-baseline walk inventories the whole agent workspace (millions of files) with per-directory ancestor probing, and reports no progress `P0` `impact:ux-release-blocker` 💬3
- [#198419](https://github.com/openclaw/openclaw/issues/198419) Gateway LaunchAgent uses a versioned `bun` path → macOS TCC (removable-volume access) must be re-granted after every update `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#198503](https://github.com/openclaw/openclaw/issues/198503) [Bug]: Codex plugin re-copies its ~461 MB package (codex.exe) into tmp/plugin-captures on every plugin registry load, blocking the Gateway event loop 20s-3min (Windows) `bug` `bug:crash` `P1` `impact:crash-loop` 💬3
- [#198393](https://github.com/openclaw/openclaw/issues/198393) [Bug]: Two agents bound to one ClickClack channel abort each other's turns with AgentSelectionRequiredError (session-observer read applies the caller's agentId to a sibling's session key) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬3
- [#198373](https://github.com/openclaw/openclaw/issues/198373) [Bug]: prompt-cache: history is rewritten between turns (assistant tool-call ids regenerated), cache read collapses to ~1% with OpenAI-compatible routes `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#198226](https://github.com/openclaw/openclaw/issues/198226) [Bug]: iOS Safari repeatedly prompts for HTTP Basic auth when reloading the Control UI `bug` `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬3
- [#198554](https://github.com/openclaw/openclaw/issues/198554) [Bug]: Invalid Template MCP declarations report only "Invalid input" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#198529](https://github.com/openclaw/openclaw/issues/198529) [Bug]: Windows 2026.10.7: every boot blocks the main thread ~100 s in main-session startup orphan marking, then ~190 s more in a second direct agent-DB reservation (both `outcome=error`) `P1` `impact:crash-loop` 💬2
- [#198488](https://github.com/openclaw/openclaw/issues/198488) [Bug]: sessions.usage returns modelProvider: null for sessions without a session-level model — Usage page shows provider "unknown" although usage.modelUsage[].provider is present `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#198402](https://github.com/openclaw/openclaw/issues/198402) Claude sessions reset when CLAUDE_CONFIG_DIR is set only for the Claude child process `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#198467](https://github.com/openclaw/openclaw/issues/198467) Docker/image upgrades: bundled channel plugins stay on the old version; plugins update refuses online and plugins install --force exits rc 1 although it saves `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#198407](https://github.com/openclaw/openclaw/issues/198407) [Bug]: Plugin admission fails with "Native plugin artifact changed during admission" on OrbStack bind mounts (link() into node_modules silently copies) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#198394](https://github.com/openclaw/openclaw/issues/198394) [Bug]: doctor --fix hangs indefinitely on a state directory held by another gateway - no lock-busy diagnostic, no timeout `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#198413](https://github.com/openclaw/openclaw/issues/198413) automations: result fails its own outputSchema on a read-only status call (2026.11.3, 847611d) - regression of the #196328 envelope class `P2` `impact:ux-friction` 💬2
- [#198312](https://github.com/openclaw/openclaw/issues/198312) Disable automatic CI for fork pull requests `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#198321](https://github.com/openclaw/openclaw/issues/198321) [Bug]: Fix for #161981 (PR #162398) is missing from stable 2026.11.3: a subagent slept 59 h on an exhausted auth profile while two other profiles were healthy `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#198307](https://github.com/openclaw/openclaw/issues/198307) Delegated child completion lacks delivery receipt and ACK correlation `bug` `regression` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#198287](https://github.com/openclaw/openclaw/issues/198287) [Bug]: Windows .vbs-as-Command Scheduled Task makes service-definition inspection print a bare, reasonless message (2026.11.3) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#198290](https://github.com/openclaw/openclaw/issues/198290) [Bug]: Configuration helper cannot start on claude-cli with lossless-claw `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#198259](https://github.com/openclaw/openclaw/issues/198259) commands.allowFrom silently denies ALL WebChat/Control UI slash commands on password-auth gateways (empty senderCandidates) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#198191](https://github.com/openclaw/openclaw/issues/198191) Control UI dictation: long recordings are silently lost because stop waits only 8 s for the final transcript `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#198108](https://github.com/openclaw/openclaw/issues/198108) [Bug]: Local `infer model run` refreshes a shared OAuth token under a running Gateway; Gateway turns then fail with "No credentials found for profile" until restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#198136](https://github.com/openclaw/openclaw/issues/198136) Update failure: candidate-doctor (2026.11.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#198134](https://github.com/openclaw/openclaw/issues/198134) [Bug]: Pre-prompt compact_only is admitted and sent, so a 1M model never compacts past contextTokens (2026.11.3) `P2` `impact:session-state` 💬2
- [#198072](https://github.com/openclaw/openclaw/issues/198072) Update failure: package-backup-retention (2026.11.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#198587](https://github.com/openclaw/openclaw/issues/198587) cron edit ignores --on-exit-cwd when patching stream metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198594](https://github.com/openclaw/openclaw/issues/198594) cron edit silently accepts an explicitly blank --stagger `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198584](https://github.com/openclaw/openclaw/issues/198584) [Bug]: Tool-free completion relay turns receive continuation instructions and report spurious task failures `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198581](https://github.com/openclaw/openclaw/issues/198581) LiteLLM proxy chat models are hidden from model lists and refused with "This model doesn't support chat" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198573](https://github.com/openclaw/openclaw/issues/198573) [Docs Bug]: claude-cli docs say skills load via a --plugin-dir plugin, but managed turns load no Claude skills `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198569](https://github.com/openclaw/openclaw/issues/198569) Desktop companions: open identity-only ClawHub catalog review links `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#198559](https://github.com/openclaw/openclaw/issues/198559) [Bug]: `templates validate` accepts a `BOOTSTRAP.md` that `templates build` rejects `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198558](https://github.com/openclaw/openclaw/issues/198558) [Bug]: No CLI way to continue a Template agent kept after a failed Gateway Add `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198556](https://github.com/openclaw/openclaw/issues/198556) [Bug]: `templates add @publisher/slug` hides why a downloaded Template manifest is invalid `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198363](https://github.com/openclaw/openclaw/issues/198363) CI: reduce repeated traversal in the database-worker ratchet `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198551](https://github.com/openclaw/openclaw/issues/198551) [Bug]: `templates add` prints "Added agent" when the Add failed and was rolled back `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198549](https://github.com/openclaw/openclaw/issues/198549) [Feature]: Make Usage JSON exports self-describing with report context `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198548](https://github.com/openclaw/openclaw/issues/198548) [Bug]: Template publish that fails before upload locks the review card as "Submission unconfirmed" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198541](https://github.com/openclaw/openclaw/issues/198541) [Bug]: Adding the same Template again reports `mcp_server_collision` once its MCP environment variable is set `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198542](https://github.com/openclaw/openclaw/issues/198542) Two CI jobs time out since Boat mode moved them to GitHub-hosted runners `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#198543](https://github.com/openclaw/openclaw/issues/198543) agents.delete waits for unrelated model-catalog work in every worker; hourly CI times out on it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198536](https://github.com/openclaw/openclaw/issues/198536) [Bug]: Template MCP `timeout` / `connectTimeout` pass validation but fail Add after the agent is created `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198515](https://github.com/openclaw/openclaw/issues/198515) [Bug]: Control UI Last updated sort leaves agent-main/Home-style sidebar roster in fixed order `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198524](https://github.com/openclaw/openclaw/issues/198524) Mocked Control UI E2E shards (checks-ui-e2e N/7) time out on slow hosted runners in hourly main CI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198523](https://github.com/openclaw/openclaw/issues/198523) Talk consult exclusion now fails the session prefix assertion: second native consult speaks the fallback (client-native-control.test.ts red on main) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#198514](https://github.com/openclaw/openclaw/issues/198514) update cleanup never retires pre-startup-migration backups on installs upgraded outside `openclaw update` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198506](https://github.com/openclaw/openclaw/issues/198506) [Bug]: Mac Control UI offers "Update now" for an app-managed Gateway; clicking it shows "Update error: Managed by OpenClaw.app" `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#198500](https://github.com/openclaw/openclaw/issues/198500) Control UI chat: the text being read jumps while scrolling up through tool calls `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#198498](https://github.com/openclaw/openclaw/issues/198498) [Bug]: Model fallback skipped when primary hits usage limit after progress messages were already delivered (claude-cli runner) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#198494](https://github.com/openclaw/openclaw/issues/198494) Devices page: gateway role badge uses theme accent color and reads as a red error dot `P2` `impact:ux-friction` 💬1
- [#198460](https://github.com/openclaw/openclaw/issues/198460) Design review: durable closed-session snapshot contract for opt-in external memory export `clawsweeper:intake:feature` 💬1
- [#198486](https://github.com/openclaw/openclaw/issues/198486) [Bug]: cron: automations created without `payload.model` get no inference binding when `agents.defaults.subagents.model` differs from the agent primary → "Automation has no recorded inference account" on first run `P1` `impact:auth-provider` 💬1
- [#198464](https://github.com/openclaw/openclaw/issues/198464) [Bug]: Remote-access setup retains Connecting warning after relay becomes online `bug` `clawsweeper:intake:bug` 💬1
- [#198484](https://github.com/openclaw/openclaw/issues/198484) [Bug]: System GitHub OAuth verifies, but exec rejects the credential on Windows `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#198483](https://github.com/openclaw/openclaw/issues/198483) claude-cli runtime: system prompt lists bare tool names ("call exact"), but only mcp__openclaw__<name> is callable `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198468](https://github.com/openclaw/openclaw/issues/198468) [Bug]: Enabling OpenClaw ID should enable its Access plugin and add it to an existing allowlist `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#198462](https://github.com/openclaw/openclaw/issues/198462) Browser pairing page shows `openclaw pair CODE` even when the issuing Gateway runs under a named profile `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198461](https://github.com/openclaw/openclaw/issues/198461) [Bug]: Managed GitHub worker identity overrides credential helpers for non-GitHub remotes `bug` `no-stale` `bug:behavior` `P1` 💬1
- [#198458](https://github.com/openclaw/openclaw/issues/198458) [Feature]: Let external memory providers check reset-generation eligibility for protected recall `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198451](https://github.com/openclaw/openclaw/issues/198451) Control UI: switching back from another app after a dropped connection waits up to 5 s for the reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198448](https://github.com/openclaw/openclaw/issues/198448) [Feature]: memory_search: name each corpus supplement instead of filing every one under "wiki" `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198445](https://github.com/openclaw/openclaw/issues/198445) [Feature]: Let an operator run a memory plugin beside the memory slot owner `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#198450](https://github.com/openclaw/openclaw/issues/198450) Workboard: a late completion from a retried card's first run settles the retry `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#198449](https://github.com/openclaw/openclaw/issues/198449) Browser: agent gets a "user used this browser" note without take-over `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#198447](https://github.com/openclaw/openclaw/issues/198447) [Feature]: Active Memory: include an approved memory sidecar's recall tools in the default tool list `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#198443](https://github.com/openclaw/openclaw/issues/198443) [Feature]: Offer LiteLLM-served Decision models in the Decision model picker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198440](https://github.com/openclaw/openclaw/issues/198440) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#198437](https://github.com/openclaw/openclaw/issues/198437) [Bug]: Active Memory logs "does not support protected private transcript recall" on every turn `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198433](https://github.com/openclaw/openclaw/issues/198433) Restricted agent-exec OAuth refresh hits live Gateway ownership; same-account relogin has ambiguous profile reuse `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#198354](https://github.com/openclaw/openclaw/issues/198354) [Feature]: Workboard: let a board run more than one card per owner at once `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#198432](https://github.com/openclaw/openclaw/issues/198432) [Bug]: A completion suspended as "expiry" re-queues a blocked-delivery notice into the requester on every lifecycle event (no dedupe, no retirement, no operator recovery) 💬1
- [#198425](https://github.com/openclaw/openclaw/issues/198425) [Feature]: Give task-scoped recurring automations an explicit lifecycle and prevent silent repurposing `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198423](https://github.com/openclaw/openclaw/issues/198423) [Bug]: Normal subagent completion dispatches subagent_ended through a closed plugin invocation scope `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198422](https://github.com/openclaw/openclaw/issues/198422) Stuck queued generated-media session delivery is re-deferred every second forever (no backoff/cap), rewriting its row and indexes ~60×/min `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198415](https://github.com/openclaw/openclaw/issues/198415) [Bug]: Telegram personal reminder creator cannot list, inspect or cancel an accepted same-topic job `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#198378](https://github.com/openclaw/openclaw/issues/198378) openclaw plugins update --all keeps installing plugins and hook packs after Ctrl+C `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198406](https://github.com/openclaw/openclaw/issues/198406) [Feature]: Android: start new chats in a selected project/workspace `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#198405](https://github.com/openclaw/openclaw/issues/198405) [Bug]: Settled-turn continuation tells the model tools are unavailable, so tool-dependent runs end with a fabricated completion `P1` `impact:session-state` 💬1
- [#198404](https://github.com/openclaw/openclaw/issues/198404) [Bug]: Backport #196693 to 2026.11.x: Fable 5 requests are capped at 32,000 output tokens, so long xhigh turns end with `stopReason=length` and no answer `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#198403](https://github.com/openclaw/openclaw/issues/198403) [Bug]: 2026.11.3 — memory_search in an existing session keeps a stale manager/config after memory.search hot reload ("Memory index manager is closed", then "index sources changed" after revert) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#198401](https://github.com/openclaw/openclaw/issues/198401) [Bug]: `update migrate` ignores database.postgres.recoveryCaptures "server" and exports every PostgreSQL store locally `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198400](https://github.com/openclaw/openclaw/issues/198400) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#198392](https://github.com/openclaw/openclaw/issues/198392) [Bug]: state-directory lock family never goes stale - dead sessions starve new launches for hours `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#198395](https://github.com/openclaw/openclaw/issues/198395) [Bug]: Crabbox setupSecrets requires a coordinator login for direct-provider profiles `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198388](https://github.com/openclaw/openclaw/issues/198388) [Bug]: WebChat progress message.send inherits composite Telegram DM-topic threadId and fails `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198386](https://github.com/openclaw/openclaw/issues/198386) [Bug]: Regression in 2026.11.3 — completion replies reject media again `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#198383](https://github.com/openclaw/openclaw/issues/198383) [Bug]: Nix-managed installs cannot migrate agent databases across a schema bump (doctor --fix refuses under OPENCLAW_NIX_MODE=1) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198385](https://github.com/openclaw/openclaw/issues/198385) [Bug]: memory reindex leaves the unlinked shadow database open in the gateway; retried failed rebuilds pinned 63 GB and filled the disk `impact:crash-loop` `P0` 💬1
- [#198377](https://github.com/openclaw/openclaw/issues/198377) iOS sidebar separates child sessions from their parent across groups `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#198381](https://github.com/openclaw/openclaw/issues/198381) memory status unconditionally requires exclusive offline state ownership, making it impossible to call from a Gateway-spawned automation `P2` `impact:other` 💬1
- [#198130](https://github.com/openclaw/openclaw/issues/198130) [Bug]: Doctor and spawn-broker cleanup fail when the host denies process-group signals (OpenShell sandbox) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198370](https://github.com/openclaw/openclaw/issues/198370) Proposal: read-only Workboard access for external plugin backends `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#198371](https://github.com/openclaw/openclaw/issues/198371) Control UI: make “Thinking default” editable per agent in Agents Overview `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198361](https://github.com/openclaw/openclaw/issues/198361) Bug: native portals break Vue/Vite previews by rewriting module query strings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198360](https://github.com/openclaw/openclaw/issues/198360) [Bug]: Same-session cron continuation is abandoned after authority loss without preserving the cause `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198352](https://github.com/openclaw/openclaw/issues/198352) Agent DB integrity gate: orphan rows in memory_index child tables silently block all session admission (gateway stays HTTP 200) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#198347](https://github.com/openclaw/openclaw/issues/198347) sessions_search reports indexing: true permanently on large or busy agents `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#198343](https://github.com/openclaw/openclaw/issues/198343) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#198289](https://github.com/openclaw/openclaw/issues/198289) [Bug]: Binary attachments (SQLite, ELF, PE, …) are classified as UTF-16 text and ~60k chars of garbage are inlined into the model prompt `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198340](https://github.com/openclaw/openclaw/issues/198340) [Bug]: Fallback attempts a model inside an active rate-limit cooldown, with no decision, when the run's auth store still has the older model-scoped row `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#198285](https://github.com/openclaw/openclaw/issues/198285) /compact fails on a sandboxed Claude CLI session that has a Skill Library skill selected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198317](https://github.com/openclaw/openclaw/issues/198317) Browser: delayed document navigation bypasses strict SSRF policy after the 250 ms action guard `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#198297](https://github.com/openclaw/openclaw/issues/198297) [Feature]: Control UI: stop voice input without cancelling accepted agent work `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#198301](https://github.com/openclaw/openclaw/issues/198301) [Feature]: Make the hard-coded 30-minute subagent-result turn cutoff and ~70-minute plugin delivery TTL configurable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198275](https://github.com/openclaw/openclaw/issues/198275) Update failure: reconcile:abandoned (2026.11.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#198273](https://github.com/openclaw/openclaw/issues/198273) Slack silently stops receiving messages after reconnect failure while status remains connected — 2026.11.3 `P1` `impact:message-loss` 💬1
- [#198266](https://github.com/openclaw/openclaw/issues/198266) [Feature]: Edit code blocks and drafted messages inline in Control UI webchat (like ChatGPT canvas) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198256](https://github.com/openclaw/openclaw/issues/198256) [Bug]: `openclaw backup create` replaces the Gateway state owner lock, restarting the Gateway and reporting a successful backup as interrupted `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#198067](https://github.com/openclaw/openclaw/issues/198067) [Bug]: Tall screenshots (>25 MP) are rejected instead of downscaled, killing the whole claude-cli turn ("failed to hydrate N structured image attachment(s) for CLI input") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198205](https://github.com/openclaw/openclaw/issues/198205) [Bug]: Mattermost shows the answer twice when a post lands below the streaming preview `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198231](https://github.com/openclaw/openclaw/issues/198231) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#198162](https://github.com/openclaw/openclaw/issues/198162) openclaw skills update --all keeps updating every remaining skill after Ctrl+C `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198228](https://github.com/openclaw/openclaw/issues/198228) [Feature]: Authenticate the Anthropic provider with Workload Identity Federation (no API key) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#198223](https://github.com/openclaw/openclaw/issues/198223) [Bug]: Gateway catalog/auth preparation appears in stall profiles; models.list takes 13–14 seconds on 2026.11.3 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#198193](https://github.com/openclaw/openclaw/issues/198193) Creative projects need reference-first design and reliable image revisions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#198189](https://github.com/openclaw/openclaw/issues/198189) [Bug]: Disallowed primary silently switches to expensive catalog model despite fallbacks: [] `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#198187](https://github.com/openclaw/openclaw/issues/198187) Code Mode workers exhaust 64 MiB heap on startup after ~1.5 days of Gateway uptime (cron trigger.script gates all fail until restart) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#198184](https://github.com/openclaw/openclaw/issues/198184) WebChat: first message after an idle/daily reset is rejected with "session changed before chat.send" (the rollover it triggered drops the turn) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#198178](https://github.com/openclaw/openclaw/issues/198178) vLLM and SGLang setup run again replaces the saved model output limit with 32768 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198172](https://github.com/openclaw/openclaw/issues/198172) openclaw nodes commands print literal \n in multi-line failures `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198160](https://github.com/openclaw/openclaw/issues/198160) [Bug]: last-known-good size-drop check counts whitespace; a re-indented config permanently blocks all later writes (no way to reset the baseline) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198152](https://github.com/openclaw/openclaw/issues/198152) [Bug]: Discord: parent’s reply after sessions_yield is generated but never posted to the channel (2026.9.36, Windows) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#198142](https://github.com/openclaw/openclaw/issues/198142) [Bug]: Plugins MCP switches show globally enabled servers as on despite per-agent namespace deny `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198129](https://github.com/openclaw/openclaw/issues/198129) Model catalog worker makes a full plugin capture for every agent `P2` `impact:other` 💬1
- [#198109](https://github.com/openclaw/openclaw/issues/198109) [Bug]: Code Mode and Tool Search wrap web_fetch fields twice ([[MARKER_SANITIZED]] noise, pages over the result budget) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#198097](https://github.com/openclaw/openclaw/issues/198097) Advisor corrections persist into session transcript instead of expiring after 24h, causing repeated context injection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#198086](https://github.com/openclaw/openclaw/issues/198086) Ctrl+C during the Doctor Gateway health check hangs, then reports "Gateway health check failed" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198081](https://github.com/openclaw/openclaw/issues/198081) Support portable lifecycle hooks from agent-plugins #89 `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#198068](https://github.com/openclaw/openclaw/issues/198068) [Feature]: browse an agent workspace from the CLI (read-only) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#198060](https://github.com/openclaw/openclaw/issues/198060) [Bug]: Usage totals render "unavailable" and hide token totals that are already computed `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#198061](https://github.com/openclaw/openclaw/issues/198061) Session diff fails with "Worktree owner or binding changed" when another worktree is created or removed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198066](https://github.com/openclaw/openclaw/issues/198066) macOS node exec rejects allowlisted Homebrew script through shell transport (gateway 2026.11.2 / node 2026.11.3) `P2` `impact:ux-friction` 💬1

#### 🔒 Closed Issues
- [#126950](https://github.com/openclaw/openclaw/issues/126950) Telegram: opaque callback payloads (tgcb1:) silently dropped for non-plugin callers
- [#142037](https://github.com/openclaw/openclaw/issues/142037) Embedded runtime records explicit-route message-tool replies as "mute": Slack top-level inbound synthesizes currentThreadTs, so topLevel sends resolve to thread mismatch and the #113554 rescue never fires (v2026.9.2)
- [#79223](https://github.com/openclaw/openclaw/issues/79223) Feature request: configurable Dream Diary language / prompt
- [#140244](https://github.com/openclaw/openclaw/issues/140244) Support file-backed prompts in `openclaw infer model run`
- [#150029](https://github.com/openclaw/openclaw/issues/150029) [Feature]: Make the automation announce Inspect link configurable (always | errors | never)
- [#155742](https://github.com/openclaw/openclaw/issues/155742) [Bug]: automations and skill_workshop schemas alternate between capability profiles across turns — automations.add silently disappears, and every flip voids the prompt cache
- [#154785](https://github.com/openclaw/openclaw/issues/154785) `subagent session-effects owner retired before session commit` makes session-entry patches fail and delivers `[truncated-by-retention: complete child answer unavailable]`
- [#140736](https://github.com/openclaw/openclaw/issues/140736) sessions_search silently returns 0 results for CJK queries — transcript FTS hardcodes unicode61 while memory search got trigram + CJK fallback
- [#158421](https://github.com/openclaw/openclaw/issues/158421) [Bug]: configured default model @profile is resolved as an explicit user pin, blocking cross-provider (claude-cli) fallback
- [#148480](https://github.com/openclaw/openclaw/issues/148480) [Enhancement]: Reuse restricted Codex completion context to avoid repeated cold history bootstraps
- [#156548](https://github.com/openclaw/openclaw/issues/156548) [Bug]: Plugin toolContext.delivery.send media does not appear in Control UI
- [#162972](https://github.com/openclaw/openclaw/issues/162972) Signal: support outbound native mentions in the message tool
- [#162181](https://github.com/openclaw/openclaw/issues/162181) health: legacy outbound delivery records use completionRetention "permanent", so the dead-letter warning can never clear (no supported prune path)
- [#158822](https://github.com/openclaw/openclaw/issues/158822) [Feature]: memory-lancedb should register a memory search runtime so the Control UI Memory page works
- [#153952](https://github.com/openclaw/openclaw/issues/153952) Symlinked state/repository roots break worktree cleanup and config atomic writes
- [#125166](https://github.com/openclaw/openclaw/issues/125166) [Bug]: Plugin Approval from a Telegram forum topic falls back to approver DM
- [#109436](https://github.com/openclaw/openclaw/issues/109436) Model fallback selection ignores candidate context windows, causing overflow/compaction storms on mid-turn failover
- [#165752](https://github.com/openclaw/openclaw/issues/165752) [Bug]: Embedded Browser panel types characters slower than operator input
- [#144398](https://github.com/openclaw/openclaw/issues/144398) [Bug]: Subsequent Codex sandbox turns fail against a retired exec-server URL
- [#143386](https://github.com/openclaw/openclaw/issues/143386) [Bug]: Codex background completion replaces normal thread binding, forcing cold reload on return
- [#193163](https://github.com/openclaw/openclaw/issues/193163) [Bug]: Git update swaps the live checkout of a serving Gateway before a fallible database backup, then rolls back (two unclean restarts)
- [#193659](https://github.com/openclaw/openclaw/issues/193659) [Bug]: Rabbit R1 photos are processed but missing from Control UI chat history
- [#182772](https://github.com/openclaw/openclaw/issues/182772) [Feature]: `backup restore` option to import PostgreSQL stores into a different connection (staging DB) than the archived config's
- [#187099](https://github.com/openclaw/openclaw/issues/187099) [Bug]: queued reply never reclaimed on a recovery-rollover lane — diagnostic declines with keep_lane/active_reply_work, dashboard main session unusable (2026.10.8)
- [#142086](https://github.com/openclaw/openclaw/issues/142086) [Bug]: attach spawns Claude Code but local MCP bridge (127.0.0.1:<port>) never starts — ConnectionRefused, zero scoped tools
- [#127774](https://github.com/openclaw/openclaw/issues/127774) System-agent turns lose agent-scoped wiki context
- [#145636](https://github.com/openclaw/openclaw/issues/145636) [Bug]: Paired-node Claude continuation reads an expired request context instead of the durable Gateway resolver
- [#122911](https://github.com/openclaw/openclaw/issues/122911) workboard: dead worker run's execution record permanently starves its agent's dispatch lane
- [#198482](https://github.com/openclaw/openclaw/issues/198482) [Bug]: Update stuck in 'validating' for hours: recovery-baseline walk inventories the whole agent workspace (millions of files) with per-directory ancestor probing, and reports no progress
- [#198419](https://github.com/openclaw/openclaw/issues/198419) Gateway LaunchAgent uses a versioned `bun` path → macOS TCC (removable-volume access) must be re-granted after every update
- [#198503](https://github.com/openclaw/openclaw/issues/198503) [Bug]: Codex plugin re-copies its ~461 MB package (codex.exe) into tmp/plugin-captures on every plugin registry load, blocking the Gateway event loop 20s-3min (Windows)
- [#157237](https://github.com/openclaw/openclaw/issues/157237) Update failure: doctor-failed (2026.9.3)
- [#156296](https://github.com/openclaw/openclaw/issues/156296) Move Claude usage fetching into the Anthropic plugin
- [#195431](https://github.com/openclaw/openclaw/issues/195431) [Bug]: claude-cli session stays broken until Gateway restart after a live session cleanup failure
- [#158241](https://github.com/openclaw/openclaw/issues/158241) 2026.9.6 regression: bootstrap-extra-files silently drops configured files (new basename allowlist + workspace-root guard, no warning)
- [#177078](https://github.com/openclaw/openclaw/issues/177078) [Bug]: Quoting a file message on DingTalk fails with "Transcript idempotency key ... conflicts with the admitted message"
- [#182723](https://github.com/openclaw/openclaw/issues/182723) iOS app: node auth fails while UI reports "Connected"; duplicate gateway entries; no legible connection state
- [#190773](https://github.com/openclaw/openclaw/issues/190773) [Bug]: Native iOS recurrent AUTH_RATE_LIMITED lockouts; separate captured missed-tick reconnect cancellation
- [#198529](https://github.com/openclaw/openclaw/issues/198529) [Bug]: Windows 2026.10.7: every boot blocks the main thread ~100 s in main-session startup orphan marking, then ~190 s more in a second direct agent-DB reservation (both `outcome=error`)
- [#197186](https://github.com/openclaw/openclaw/issues/197186) telegram: pass sessionKey to message_sending in deliverReplies
- [#198407](https://github.com/openclaw/openclaw/issues/198407) [Bug]: Plugin admission fails with "Native plugin artifact changed during admission" on OrbStack bind mounts (link() into node_modules silently copies)
- [#198413](https://github.com/openclaw/openclaw/issues/198413) automations: result fails its own outputSchema on a read-only status call (2026.11.3, 847611d) - regression of the #196328 envelope class
- [#197907](https://github.com/openclaw/openclaw/issues/197907) [Bug]: Approval leaves the current topic in a private Telegram chat
- [#198312](https://github.com/openclaw/openclaw/issues/198312) Disable automatic CI for fork pull requests
- [#194988](https://github.com/openclaw/openclaw/issues/194988) [Docs Bug]: Containerized gateway docs describe host-centric networking only — missing host-model-server reachability, bind-mode pitfalls, and rootless Podman troubleshooting
- [#196155](https://github.com/openclaw/openclaw/issues/196155) [Feature]: Keep PostgreSQL rollback and pre-migration captures in PostgreSQL instead of exporting them to SQLite
- [#169809](https://github.com/openclaw/openclaw/issues/169809) [Bug]: Failed gateway-restart emission retries indefinitely with no attempt cap, terminal state, or further logging
- [#171958](https://github.com/openclaw/openclaw/issues/171958) [Bug]: ACP startup identity reconcile abandons the scan on one list failure and the failed count is dropped by the checked===0 early return
- [#161245](https://github.com/openclaw/openclaw/issues/161245) Bug: documented core group:* allowlist entries falsely warned as plugin-only
- [#171033](https://github.com/openclaw/openclaw/issues/171033) [Bug]: Partial sandbox cleanup skips durable removal-intent persistence when container removal is unconfirmed
- [#198108](https://github.com/openclaw/openclaw/issues/198108) [Bug]: Local `infer model run` refreshes a shared OAuth token under a running Gateway; Gateway turns then fail with "No credentials found for profile" until restart
- [#197923](https://github.com/openclaw/openclaw/issues/197923) Telegram: support widgets in private-chat topics
- [#198134](https://github.com/openclaw/openclaw/issues/198134) [Bug]: Pre-prompt compact_only is admitted and sent, so a 1M model never compacts past contextTokens (2026.11.3)
- [#196643](https://github.com/openclaw/openclaw/issues/196643) [Bug]: Template review drops the CLAW.md description and rewrites the agent name when publishing from chat
- [#198363](https://github.com/openclaw/openclaw/issues/198363) CI: reduce repeated traversal in the database-worker ratchet
- [#198494](https://github.com/openclaw/openclaw/issues/198494) Devices page: gateway role badge uses theme accent color and reads as a red error dot
- [#198460](https://github.com/openclaw/openclaw/issues/198460) Design review: durable closed-session snapshot contract for opt-in external memory export
- [#198486](https://github.com/openclaw/openclaw/issues/198486) [Bug]: cron: automations created without `payload.model` get no inference binding when `agents.defaults.subagents.model` differs from the agent primary → "Automation has no recorded inference account" on first run
- [#198464](https://github.com/openclaw/openclaw/issues/198464) [Bug]: Remote-access setup retains Connecting warning after relay becomes online
- [#197669](https://github.com/openclaw/openclaw/issues/197669) [Bug]: Telegram message_sent plugin hooks receive no sessionKey
- [#187061](https://github.com/openclaw/openclaw/issues/187061) [Feature]: Make Codex collaboration instructions match available modes and question tools
- [#198354](https://github.com/openclaw/openclaw/issues/198354) [Feature]: Workboard: let a board run more than one card per owner at once
- [#198432](https://github.com/openclaw/openclaw/issues/198432) [Bug]: A completion suspended as "expiry" re-queues a blocked-delivery notice into the requester on every lifecycle event (no dedupe, no retirement, no operator recovery)
- [#197902](https://github.com/openclaw/openclaw/issues/197902) Browser panel: let the user take over the agent's browser for a moment, without stopping the agent
- [#198052](https://github.com/openclaw/openclaw/issues/198052) Browser panel: an action's error disappears while the page keeps streaming
- [#198378](https://github.com/openclaw/openclaw/issues/198378) openclaw plugins update --all keeps installing plugins and hook packs after Ctrl+C
- [#195825](https://github.com/openclaw/openclaw/issues/195825) android: Skills detail view stays open across gateway switches instead of retiring selection
- [#195630](https://github.com/openclaw/openclaw/issues/195630) Android: skill detail sheet hides enable/disable failure errors while open
- [#195631](https://github.com/openclaw/openclaw/issues/195631) Android: provider sign-in wizard reuses plain-text field state when step switches to secret input
- [#196021](https://github.com/openclaw/openclaw/issues/196021) Android: ChatSwarmProgressView starves or clips long swarm group labels and summary counts on compact widths
- [#196015](https://github.com/openclaw/openclaw/issues/196015) [Android] CronJobManagementPanel: deletion confirmation dialog omits automation name and ID
- [#195989](https://github.com/openclaw/openclaw/issues/195989) [Android] DreamingSettingsScreen: dream diary entries truncate at two lines with no detail view
- [#197829](https://github.com/openclaw/openclaw/issues/197829) // ... 122 more lines (total: 122)
- [#198405](https://github.com/openclaw/openclaw/issues/198405) [Bug]: Settled-turn continuation tells the model tools are unavailable, so tool-dependent runs end with a fabricated completion
- [#198385](https://github.com/openclaw/openclaw/issues/198385) [Bug]: memory reindex leaves the unlinked shadow database open in the gateway; retried failed rebuilds pinned 63 GB and filled the disk
- [#198381](https://github.com/openclaw/openclaw/issues/198381) memory status unconditionally requires exclusive offline state ownership, making it impossible to call from a Gateway-spawned automation
- [#198130](https://github.com/openclaw/openclaw/issues/198130) [Bug]: Doctor and spawn-broker cleanup fail when the host denies process-group signals (OpenShell sandbox)
- [#197866](https://github.com/openclaw/openclaw/issues/197866) Show and edit per-agent utility models in Agents → Overview
- [#195634](https://github.com/openclaw/openclaw/issues/195634) Android: workspace file preview stays stuck on error panel after same-gateway reconnect
- [#195964](https://github.com/openclaw/openclaw/issues/195964) fix(android): preserve multiline system.notify body when expanded via BigTextStyle
- [#198289](https://github.com/openclaw/openclaw/issues/198289) [Bug]: Binary attachments (SQLite, ELF, PE, …) are classified as UTF-16 text and ~60k chars of garbage are inlined into the model prompt
- [#191686](https://github.com/openclaw/openclaw/issues/191686) [Bug]: Telegram logs an ERROR for every typing action held back by a flood wait ("request not sent")
- [#198285](https://github.com/openclaw/openclaw/issues/198285) /compact fails on a sandboxed Claude CLI session that has a Skill Library skill selected
- [#195915](https://github.com/openclaw/openclaw/issues/195915) Android: GatewaySourcePreviews caches transient HTTP favicon failures as null for the connection lifetime
- [#198273](https://github.com/openclaw/openclaw/issues/198273) Slack silently stops receiving messages after reconnect failure while status remains connected — 2026.11.3
- [#186024](https://github.com/openclaw/openclaw/issues/186024) Separate command palette Search and Compose modes
- [#193947](https://github.com/openclaw/openclaw/issues/193947) Bug: Telegram media callback card disappears when replacement delivery fails
- [#191645](https://github.com/openclaw/openclaw/issues/191645) [Bug]: Telegram presentation buttons with `disabled: true` render as active and stay clickable
- [#198067](https://github.com/openclaw/openclaw/issues/198067) [Bug]: Tall screenshots (>25 MP) are rejected instead of downscaled, killing the whole claude-cli turn ("failed to hydrate N structured image attachment(s) for CLI input")
- [#181955](https://github.com/openclaw/openclaw/issues/181955) [Bug]: Telegram native commands answer senders that dmPolicy rejects ("You are not authorized to use this command.")
- [#198205](https://github.com/openclaw/openclaw/issues/198205) [Bug]: Mattermost shows the answer twice when a post lands below the streaming preview
- [#196195](https://github.com/openclaw/openclaw/issues/196195) Telegram: /commands sends nothing when the agent id is longer than 45 characters
- [#198162](https://github.com/openclaw/openclaw/issues/198162) openclaw skills update --all keeps updating every remaining skill after Ctrl+C
- [#195432](https://github.com/openclaw/openclaw/issues/195432) [Bug]: /openclaw doctor with warnings is retried as a failed Telegram update and blocks the chat for up to 24 hours
- [#197843](https://github.com/openclaw/openclaw/issues/197843) [Bug]: Control UI dictation silently discards the whole transcript on window blur / page hidden (e.g. screensaver after 5 min)
- [#198129](https://github.com/openclaw/openclaw/issues/198129) Model catalog worker makes a full plugin capture for every agent
- [#192061](https://github.com/openclaw/openclaw/issues/192061) [Bug]: Image size mismatches go unreported when using OpenAI subscription auth
- [#198021](https://github.com/openclaw/openclaw/issues/198021) OpenRouter STT ignores providerOptions, preventing Scribe audio-event tags from being disabled
- [#197313](https://github.com/openclaw/openclaw/issues/197313) [Feature]: chat.history on PostgreSQL opens up to seven read-only transactions for one history page
- [#198060](https://github.com/openclaw/openclaw/issues/198060) [Bug]: Usage totals render "unavailable" and hide token totals that are already computed
- [#198066](https://github.com/openclaw/openclaw/issues/198066) macOS node exec rejects allowlisted Homebrew script through shell transport (gateway 2026.11.2 / node 2026.11.3)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 263,234 · **Open issues:** 53,262 · **Last push:** <1h ago

On November 13, 2026, Hermes Agent released version v0.23.1+canary.20261113T064447Z, enhancing its deployment capabilities on macOS with Apple Silicon. The day's activity did not include any merged pull requests. However, several new issues have emerged, with the most significant being a bug report (#155310) regarding cron restart-safe adoption failing under load due to a locked database, which has sparked community discussion. Other notable issues include a bug related to config key management (#154951) and the A2A server accepting negative Content-Length values (#154944).

#### 🚀 New Releases
- [v0.23.1+canary.20261113T064447Z](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261113T064447Z) Hermes Agent canary v0.23.1+canary.20261113T064447Z

#### 🐛 New Issues
- [#155310](https://github.com/NousResearch/hermes-agent/issues/155310) [Bug]: cron restart-safe adoption fails with 'database is locked' under load; the tick is lost (exited before ownership acknowledgement, exit 1) `type/bug` `comp/cron` `P2` 💬2
- [#155365](https://github.com/NousResearch/hermes-agent/issues/155365) Catalogue entry secret-handoff omits the requires_hermes floor its pinned manifest declares - install is not gated on old hosts `type/bug` `comp/plugins` `P3` `area/install-update` 💬1
- [#154951](https://github.com/NousResearch/hermes-agent/issues/154951) [Bug]: config set/unset skip the managed-key check when the key is rewritten (platforms.* display keys, bare model) `type/security` `comp/cli` `area/config` `P3` 💬1
- [#154944](https://github.com/NousResearch/hermes-agent/issues/154944) [Bug]: A2A server accepts a negative Content-Length and reads past the 1 MiB body cap `type/security` `comp/plugins` `P3` 💬1
- [#155441](https://github.com/NousResearch/hermes-agent/issues/155441) [Bug]: Provider plugins cannot return derived pool credentials without overwriting the persisted grant `type/security` `comp/agent` `comp/plugins` `area/auth`
- [#155451](https://github.com/NousResearch/hermes-agent/issues/155451) webapp launch page conflates redeem-refused with ticket-expired (four dated witnesses)
- [#155436](https://github.com/NousResearch/hermes-agent/issues/155436) [Feature]: List cron delivery platforms without importing every platform adapter `type/feature` `comp/cron` `comp/plugins` `P3`
- [#155416](https://github.com/NousResearch/hermes-agent/issues/155416) [Bug] disk-cleanup plugin: concurrent post_tool_call hooks race on shared `.tmp` / `.bak` (no lock) `type/bug` `comp/plugins` `P2`
- [#155410](https://github.com/NousResearch/hermes-agent/issues/155410) [Bug]: Webapp read-aloud speaks operational interruption notices as assistant replies `type/bug` `comp/agent` `tool/tts` `P2`
- [#155409](https://github.com/NousResearch/hermes-agent/issues/155409) [Bug]: Android Webapp/PWA clipboard image paste does not attach an image `type/bug` `P2` `comp/desktop`
- [#155393](https://github.com/NousResearch/hermes-agent/issues/155393) [Bug]: scratch prune kills live read-only processes (e.g. 1Password op daemon): idleness is mtime-only and reap_processes_rooted_in ignores open files `type/bug` `P2`
- [#155384](https://github.com/NousResearch/hermes-agent/issues/155384) [Feature Request] Local model paths too long in model dropdown - add alias or smart truncation `type/feature` `area/config` `P3` `comp/desktop`
- [#155371](https://github.com/NousResearch/hermes-agent/issues/155371) [Bug]: hard restart mid-turn leaves a hosted-room admission stuck at status='unknown', permanently deadlocking that member's later turns `type/bug` `comp/gateway` `P2` `comp/tui-gateway`
- [#155366](https://github.com/NousResearch/hermes-agent/issues/155366) A failing approval transport loses the plugin reason: missing-config becomes "Selected approval transport failed (error)" and blocks every flagged command `type/bug` `comp/cli` `comp/tools` `tool/terminal`
- [#155367](https://github.com/NousResearch/hermes-agent/issues/155367) validate_plugin_catalog.py only warns on unknown top-level keys, so typos ship as dead metadata `type/bug` `comp/plugins` `tool/file` `P3`

#### 🔒 Closed Issues
- [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) Redaction gaps at the persistence boundary: tool output file dumps, compaction blocks, DB URIs (split from #43083)
- [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) background_review writes skills with no content scan (guard_agent_created defaults off); skills served into every session system prompt
- [#84536](https://github.com/NousResearch/hermes-agent/issues/84536) [Bug]: delegated task environment overrides can leak into parent session
- [#68040](https://github.com/NousResearch/hermes-agent/issues/68040) CLI echoes full secret values: `config set` (suffix-shaped keys) and `webhook subscribe`
- [#155310](https://github.com/NousResearch/hermes-agent/issues/155310) [Bug]: cron restart-safe adoption fails with 'database is locked' under load; the tick is lost (exited before ownership acknowledgement, exit 1)
- [#75461](https://github.com/NousResearch/hermes-agent/issues/75461) Secrets written unredacted to interrupt_debug.log (bypasses RedactingFormatter)
- [#79030](https://github.com/NousResearch/hermes-agent/issues/79030) [Bug] Guardrail bypass: sensitive config can be edited by shell when patch/write_file is blocked
- [#74130](https://github.com/NousResearch/hermes-agent/issues/74130) google-workspace: google_token.json is written world-readable (0644)
- [#25017](https://github.com/NousResearch/hermes-agent/issues/25017) lsp: INSTALL_RECIPES uses @latest for some servers (supply-chain hygiene)
- [#72910](https://github.com/NousResearch/hermes-agent/issues/72910) SSRF guard allows IPv6 special-use destinations
- [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) redact: complete CSI/SGR sequences defeat prefix masking (ESC-byte-only stripping leaves 'm'-glue)
- [#63594](https://github.com/NousResearch/hermes-agent/issues/63594) kanban worker logs bypass security.redact_secrets — secrets/PEM blocks persist in plaintext t_*.log files
- [#59726](https://github.com/NousResearch/hermes-agent/issues/59726) config.yaml can stay world-writable indefinitely through ~10 write paths that bypass save_config()'s final chmod
- [#51474](https://github.com/NousResearch/hermes-agent/issues/51474) Bug: credential-path deny heuristics are case-sensitive — bypassed on case-insensitive filesystems (macOS/APFS, Windows)
- [#55041](https://github.com/NousResearch/hermes-agent/issues/55041) Matrix inbound MXC media downloads can buffer oversized responses before cap enforcement
- [#65556](https://github.com/NousResearch/hermes-agent/issues/65556) tarfile.extractall fallback path at curator_backup.py:634 lacks member validation
- [#23631](https://github.com/NousResearch/hermes-agent/issues/23631) [SECURITY] VERCEL_DEPLOY_HOOK secret exposed in shell run: block (deploy-site.yml)
- [#81073](https://github.com/NousResearch/hermes-agent/issues/81073) [Bug]: gateway: _GATEWAY_SECRET_PATTERNS \b anchors miss CJK/Unicode-glued tokens on fallback path
- [#77467](https://github.com/NousResearch/hermes-agent/issues/77467) fix(security): vault CLI child gets the FULL os.environ — bws/op children and CLI probes receive every provider credential
- [#80755](https://github.com/NousResearch/hermes-agent/issues/80755) [Bug]: browser_cdp frame_id path returns unredacted secrets from OOPIF CDP results
- [#74261](https://github.com/NousResearch/hermes-agent/issues/74261) google-workspace: client secret and pending-auth files are also written world-readable (0644)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,881 · **Open issues:** 10,308 · **Last push:** <1h ago

On November 14, 2026, there were no new releases for vLLM. Among the notable merged pull requests, #66799 improved efficiency in Mixture of Experts by masking DP padding rows in grouped top-k routing, while #67568 cherry-picked Model adjustments for Mistral Large 4. Bug fixes included #67485, which addressed startup out-of-memory issues in KV cache sizing warmup, and #67411, which targeted silent incorrect results from the fused_add_rms_norm operation. Additionally, several new issues were raised, with #67389 highlighting a bug in fused_add_rms_norm that launches a zero-sized grid for zero-token input. Overall, today was routine maintenance with noteworthy enhancements to performance and bug resolution.

#### ✅ Merged PRs
- [#66799](https://github.com/vllm-project/vllm/pull/66799) [Perf][MoE] Mask DP padding rows in grouped top-k routing by default
- [#65336](https://github.com/vllm-project/vllm/pull/65336) [KV Connector][NIXL] Pull KV from pipeline-parallel prefill stages, with the hybrid KV cache manager
- [#64827](https://github.com/vllm-project/vllm/pull/64827) [DeepSeek-V4] Warm the DeepGEMM kernels DeepSeek-V4/V4.1 JIT-compile at runtime
- [#66473](https://github.com/vllm-project/vllm/pull/66473) [Bugfix][Multimodal] Domain-separate content digests and caller uuids in mm hashes
- [#67455](https://github.com/vllm-project/vllm/pull/67455) [Transformers backend] Default decoder pooling to LAST and honour `is_causal=False`
- [#67317](https://github.com/vllm-project/vllm/pull/67317) [ROCm][CI] Cover test_areas gaps on AMD mirrors
- [#66314](https://github.com/vllm-project/vllm/pull/66314) [ROCm][CI] Run the nightly Python 3.14 smoke test on AMD
- [#67321](https://github.com/vllm-project/vllm/pull/67321) [Bugfix][Test] Avoid capfd in test_pp_rejects_split_kv_sharing
- [#61395](https://github.com/vllm-project/vllm/pull/61395) [EPLB] Support heterogeneous DeepSeek V4/V4.1 DSpark draft experts
- [#62800](https://github.com/vllm-project/vllm/pull/62800) [Bugfix] Fix KV cache pages for hybrid models with draft layers
- [#67394](https://github.com/vllm-project/vllm/pull/67394) [ROCm][CI] Fix Sharded RDT bake test replay under persisted ROCm MoE padding
- [#65733](https://github.com/vllm-project/vllm/pull/65733) [CI] Make DSpark sharded-sampling test deterministic under torch.compile
- [#66051](https://github.com/vllm-project/vllm/pull/66051) [ROCm][Muse Spark] DSpark Markov sampling with one launch a round (--monokernel)
- [#64777](https://github.com/vllm-project/vllm/pull/64777) [Bugfix][Spec Decode] Use the target's kernel block sizes for EAGLE draft attention
- [#67568](https://github.com/vllm-project/vllm/pull/67568) [Cherry-pick][v0.34.0] [Model] Add Mistral Large 4 (#64534)
- [#67553](https://github.com/vllm-project/vllm/pull/67553) [CI] Split ReplaySSM E2E into 1-GPU, TP2 and nightly H100 steps
- [#67312](https://github.com/vllm-project/vllm/pull/67312) [Transformers backend] Support DeepStack vision features
- [#67533](https://github.com/vllm-project/vllm/pull/67533) [Chore] Remove deprecated `rope_scaling` usage and forbid it in pre-commit
- [#67485](https://github.com/vllm-project/vllm/pull/67485) [Bugfix] Fix startup OOM in KV cache sizing warmup by releasing kernel warmup's KV blocks
- [#67296](https://github.com/vllm-project/vllm/pull/67296) [Bugfix] Keep extensible KV cache headroom for measured allocator fragmentation
- [#67549](https://github.com/vllm-project/vllm/pull/67549) [CI/Build] Fix docstring Markdown style in test_quark.py
- [#67280](https://github.com/vllm-project/vllm/pull/67280) [Build] Bump vllm-flash-attn to 8dd9eaea (flash-attention#218, #208)
- [#67093](https://github.com/vllm-project/vllm/pull/67093) [PP] Require exact intermediate-tensor match on every PP transport
- [#63106](https://github.com/vllm-project/vllm/pull/63106) [Feature][DSv4.1] Support arbitrary pipeline stage partitions
- [#67304](https://github.com/vllm-project/vllm/pull/67304) Delete tools/flashinfer-build.sh
- [#67196](https://github.com/vllm-project/vllm/pull/67196) [XPU][Perf][Spec Decode] Enable triton greedy_argmax on XPU
- [#64086](https://github.com/vllm-project/vllm/pull/64086) [Bugfix][MoE] Preserve invalid expert IDs in NIXL round-robin mapping
- [#55719](https://github.com/vllm-project/vllm/pull/55719) [Bugfix] Allow query parameters in benchmark endpoint URLs
- [#65951](https://github.com/vllm-project/vllm/pull/65951) [Bugfix][Quantization] Handle dict-valued Quark `algo_config` in `maybe_update_config`
- [#55233](https://github.com/vllm-project/vllm/pull/55233) [Bugfix] Reject prompt embeddings for BERT/RoBERTa models
- [#64923](https://github.com/vllm-project/vllm/pull/64923) [Bugfix][V2 runner] Keep idle-DP dummy requests within max_model_len
- [#65965](https://github.com/vllm-project/vllm/pull/65965) [Bugfix] Apply `WeightsMapper` stacked rules last, and fix the `--mm-encoder-only` shared root check
- [#61669](https://github.com/vllm-project/vllm/pull/61669) [Bugfix][Model] DiffusionGemma: stop sampler recompiles during serving
- [#66267](https://github.com/vllm-project/vllm/pull/66267) [Test] Restore PaddleOCR-VL generation coverage on Transformers v5
- [#67344](https://github.com/vllm-project/vllm/pull/67344) [ROCm][gfx1151] ROCM_RDNA_ATTN: prefer 16-token KV blocks
- [#67516](https://github.com/vllm-project/vllm/pull/67516) [Bugfix][HiSparse] Fix GLM-5.3-Flash startup: derive resident/hot specs without grouping on workers
- [#67041](https://github.com/vllm-project/vllm/pull/67041) [HiSparse] Revert the FlashInfer all-reduce backend override (#65201, #65522)
- [#61815](https://github.com/vllm-project/vllm/pull/61815) [Quantization] Allow online per-channel fp8 quantization of an unquantized lm_head
- [#66803](https://github.com/vllm-project/vllm/pull/66803) [Quantization] Skip kernel dispatch for online requantization sources
- [#67466](https://github.com/vllm-project/vllm/pull/67466) [ROCm][DI-CI] Enable MiniMax-M3.1-Flash in AMD CI pipeline
- [#64156](https://github.com/vllm-project/vllm/pull/64156) [Spec Decode] Consistent drafted, verified and accepted token counts
- [#62515](https://github.com/vllm-project/vllm/pull/62515) [Spec Decode] Enable adaptive verification for `FlashInferMLASparseSM90Backend`
- [#64822](https://github.com/vllm-project/vllm/pull/64822) [Perf][Model] Muse vision encoders: no GPU<->CPU syncs, build Glimmer's vision prep once per call
- [#57985](https://github.com/vllm-project/vllm/pull/57985) [Model] Extend device-side mm normalization to DeepSeekV4 Vision / DeepSeekV41
- [#67369](https://github.com/vllm-project/vllm/pull/67369) [CI][Bugfix] Pin the GLM5-next shared-expert fusion test to the stock decode
- [#63097](https://github.com/vllm-project/vllm/pull/63097) [Model] Load q/k/v scales for the quantized Kimi-K2.6

#### 🐛 New Issues
- [#67389](https://github.com/vllm-project/vllm/issues/67389) [Bug]: fused_add_rms_norm launches a zero-sized grid on zero-token input `bug` 💬4
- [#67478](https://github.com/vllm-project/vllm/issues/67478) [Feature]: Bound the lifetime of per-name LoRA locks in serving `feature request` 💬2
- [#67411](https://github.com/vllm-project/vllm/issues/67411) [Bug]: fused_add_rms_norm silently produces incorrect results for non-unit innermost input strides `bug` 💬2
- [#67471](https://github.com/vllm-project/vllm/issues/67471) [Bug] glm47 tool parser converts a quoted tag in prose into a real tool call with empty arguments `tool-calling` 💬2
- [#67575](https://github.com/vllm-project/vllm/issues/67575) [Bug]: flashinfer_cutlass MoE hits cudaErrorIllegalAddress at startup with --data-parallel-size 2 (EP16); fine at dp=1 and fine with moe-backend auto `quantization` 💬1
- [#67558](https://github.com/vllm-project/vllm/issues/67558) [Bug]: video/jpeg frame lists share cache entries across different per-request image decode options 💬1
- [#67552](https://github.com/vllm-project/vllm/issues/67552) [Feature]: Carry repetition_detection and extra_args on vllm.Inference GenerateRequest 💬1
- [#67556](https://github.com/vllm-project/vllm/issues/67556) [Bug]: --api-key does not protect LoRA load/unload through the SageMaker /adapters routes 💬1
- [#67551](https://github.com/vllm-project/vllm/issues/67551) [Feature]: Enable libtorch-ABI-stable vLLM ROCm wheels `feature request` `rocm` 💬1
- [#67520](https://github.com/vllm-project/vllm/issues/67520) [Bug]: 15 tests in tests/parser/mistral fail on main since #65744 (tool_choice=None now normalized to "none") `bug` `tool-calling` `mistral` 💬1
- [#67513](https://github.com/vllm-project/vllm/issues/67513) [Bug]: When max_tokens cuts a tool call, non-streaming tool parsers disagree on content `tool-calling` 💬1
- [#67488](https://github.com/vllm-project/vllm/issues/67488) [Bug]: v0.33.0 illegal memory access (Xid 31) during CUDA graph capture, Qwen3.6-27B-FP8 + LoRA on RTX PRO 6000 Blackwell (SM120) under CUDA MPS `bug` 💬1
- [#67401](https://github.com/vllm-project/vllm/issues/67401) [Bug]: rotary_embedding silently miscomputes q/k with non-unit last-dimension stride `bug` 💬1
- [#67384](https://github.com/vllm-project/vllm/issues/67384) [ROCm][AMD] MiniMax-M3.1-Flash gfx950 / MI355X Performance Optimization (vLLM) `rocm` `minimax` 💬1
- [#67360](https://github.com/vllm-project/vllm/issues/67360) [Bug]: MiniCPM-V 4.7 canvas M-RoPE silently falls back to sequential positions when user text contains `</image>` (or `<image>`/`<slice>`/`</slice>`) before an image `rocm` 💬1
- [#67521](https://github.com/vllm-project/vllm/issues/67521) [Bug]: FlashInfer PCIe IPC all-reduce workspace is allocated after KV cache sizing
- [#67511](https://github.com/vllm-project/vllm/issues/67511) [Feature]: Support fastino/GLiNER2.5-Decide in vLLM's Decisions APIs `feature request`
- [#67483](https://github.com/vllm-project/vllm/issues/67483) [Bug]: rms_norm_static_fp8_quant and fused_add_rms_norm_static_fp8_quant mishandle inputs with a non-unit innermost stride (misaligned address / wrong FP8 output)
- [#67465](https://github.com/vllm-project/vllm/issues/67465) [Bug]: Request state and the DP routing entry leak when the send to the engine core fails
- [#67464](https://github.com/vllm-project/vllm/issues/67464) [Bug]: Non-streaming Responses API puts reasoning-token logprobs on output_text `tool-calling`
- [#67462](https://github.com/vllm-project/vllm/issues/67462) [Performance]: [V1] [Performance Benchmark] Find benchmark setups that can test the effectiveness of combining all different optimizations. `performance`
- [#67454](https://github.com/vllm-project/vllm/issues/67454) [Bug]: [InferHunt] Gemma4 offline parse_thinking_output returns an unfinished thought in the answer field `tool-calling`
- [#67430](https://github.com/vllm-project/vllm/issues/67430) [Feature]: vllm.Inference: metadata-only media items, render fingerprint check, and retryable KV and EC load errors
- [#67425](https://github.com/vllm-project/vllm/issues/67425) [Bug]: A request that declares no `tools` still runs the tool parser and loses the model text `tool-calling`
- [#67416](https://github.com/vllm-project/vllm/issues/67416) [Bug]: sharded_state reload fails for DeepSeek-V4.1-Flash (TP4): "size of tensor a (1792) must match the size of tensor b (5120) at non-singleton dimension 0" in ShardedStateLoader.load_weights `deepseek`
- [#67412](https://github.com/vllm-project/vllm/issues/67412) [Feature]: Add native support for ZAQERIS AXIOM (ZaqerisAxiomForCausalLM) `feature request` `quantization`
- [#67407](https://github.com/vllm-project/vllm/issues/67407) [Bug]: `/inference/v1/generate` ignores `sampling_params.bad_words` with a 200 on `--tokens-only` and `--skip-tokenizer-init` servers `bug`

#### 🔒 Closed Issues
- [#40854](https://github.com/vllm-project/vllm/issues/40854) [Bug]: Deepseek V4 vllm not response when using with claude code
- [#55005](https://github.com/vllm-project/vllm/issues/55005) [Bug][CPU][Spec Decode]: CPU expand_kernel shim discards its output — non-greedy spec decode consumes uninitialized memory as temperature/top_k/top_p
- [#47684](https://github.com/vllm-project/vllm/issues/47684) [RFC]: FlashInfer NVFP4 KV serving on pre-SM100 GPUs
- [#41893](https://github.com/vllm-project/vllm/issues/41893) [Frontend][RFC]: Add unified Pod Snapshot API to support automatic cloud provider checkpoints
- [#47089](https://github.com/vllm-project/vllm/issues/47089) [Performance]: Impact of Full Cuda Graph on different model sizes, batch size on B200
- [#64099](https://github.com/vllm-project/vllm/issues/64099) [RFC]: Consistent semantics for drafted, verified and accepted spec decode tokens
- [#54843](https://github.com/vllm-project/vllm/issues/54843) [Bug][CPU][Spec Decode]: --use-fp64-gumbel silently ignored in CPU recovered-token sampling (inv_q downcast to fp32); in-code comment claims otherwise
- [#40260](https://github.com/vllm-project/vllm/issues/40260) [Bug]: Incompatible dimension when using Mistral Small 4
- [#42019](https://github.com/vllm-project/vllm/issues/42019) [Bug]: `prompt_logprobs` depends on request order when prefix caching is enabled
- [#63751](https://github.com/vllm-project/vllm/issues/63751) [Bug]: IndexError in _create_chat_logprobs / _create_completion_logprobs (top_logprobs shorter than token_ids) causes 500s
- [#55050](https://github.com/vllm-project/vllm/issues/55050) [Bug]: encoder prompt embeddings trigger a compiled AttributeError
- [#42744](https://github.com/vllm-project/vllm/issues/42744) [Bug]: rejection sampler skips argmax-invariant procs — patching the min_p/logit_bias 400 alone is insufficient
- [#62687](https://github.com/vllm-project/vllm/issues/62687) [Bug]: CPU backend: a seeded request whose prompt is split by chunked prefill kills the engine ("CPU Generator does not use offset")
- [#64652](https://github.com/vllm-project/vllm/issues/64652) [Bug]: EAGLE3 draft acceptance collapses after the first position with --block-size > 128 (MiniMax-M3, GB200)
- [#66422](https://github.com/vllm-project/vllm/issues/66422) [Bug]: Cross-Request Multimodal Cache Poisoning via Untagged Identifiers in vLLM
- [#55718](https://github.com/vllm-project/vllm/issues/55718) [Bug]: Benchmark endpoint validation rejects URLs with query parameters
- [#66266](https://github.com/vllm-project/vllm/issues/66266) [Transformers v5] Restore PaddleOCR-VL generation tests with a native HF reference

### SGLang (`sgl-project/sglang`)

**Stars:** 38,838 · **Open issues:** 6,758 · **Last push:** <1h ago

Today in SGLang, there were no new releases, but several notable pull requests were merged. Key highlights include the introduction of opt-in aging to the shortest-prefill-first scheduling policy and a significant fix for the hicache, which now correctly locks buffers during staged load-backs. Additionally, a feature has been added for the Rust server that allows the abortion hook of model packages to specify which requests should be aborted. On the issues front, a particularly concerning bug was reported regarding the sgl-router, which returns a 400 error for requests containing inline role="system", drawing immediate attention from the community. Overall, it was a day focused on improvements and bug fixes rather than new features.

#### ✅ Merged PRs
- [#49964](https://github.com/sgl-project/sglang/pull/49964) [Fix] kimi_k25: Run the vision projection under the caller's grad mode
- [#50370](https://github.com/sgl-project/sglang/pull/50370) [Feat] kv-shard: Let an out-of-tree HiCache storage backend join logical-page KV sharding
- [#46409](https://github.com/sgl-project/sglang/pull/46409) [Refactor] multimodal: [MM refactor 3/9] Extract a shared multimodal processor mixin
- [#49992](https://github.com/sgl-project/sglang/pull/49992) [Feat] mem_cache: Joint Full/SWA eviction walk on the Rust tree core
- [#49721](https://github.com/sgl-project/sglang/pull/49721) [Fix] scheduler: Answer health probes that are waiting behind other requests
- [#49666](https://github.com/sgl-project/sglang/pull/49666) [Perf] hicache: Keep the buffer load-back ownership check from waiting on the GPU at admission
- [#49695](https://github.com/sgl-project/sglang/pull/49695) [Refactor] mem_cache: Tag full-only KV frees that release a tree node's value, and commit load-backs through one method
- [#49658](https://github.com/sgl-project/sglang/pull/49658) [Feat] scheduler: Add opt-in aging to the shortest-prefill-first policy
- [#49649](https://github.com/sgl-project/sglang/pull/49649) [Fix] scheduler: Observe finished storage prefetches before shortest-prefill-first ranks, and count staged prefixes as cached
- [#49644](https://github.com/sgl-project/sglang/pull/49644) [Perf] hicache: End each buffer-only backup chain where the insert walk's previous one ended
- [#49641](https://github.com/sgl-project/sglang/pull/49641) [Fix] radix-tree: Clamp SWA tombstone recovery to the protected prefix in the Rust tree core
- [#49630](https://github.com/sgl-project/sglang/pull/49630) [Fix] rust-server: Log the drain's scheduler kill at info and bound the reap
- [#50396](https://github.com/sgl-project/sglang/pull/50396) [Test] rust-server: Give each shutdown test its own parallel topology
- [#49634](https://github.com/sgl-project/sglang/pull/49634) [Chore] rust-server: Refresh the frontend config catalogue and drop its Rust lexer
- [#44613](https://github.com/sgl-project/sglang/pull/44613) [CI] tests: Give each NIXL storage test its own temp directory
- [#50373](https://github.com/sgl-project/sglang/pull/50373) [Test] server_args: Stop two PortArgs tests from probing fixed host ports
- [#50364](https://github.com/sgl-project/sglang/pull/50364) [Feat] quantization: Support dense SiLU+mul fusion for masked per_token_group_quant
- [#50363](https://github.com/sgl-project/sglang/pull/50363) [Perf] [AMD] hicache: Submit staged write-back copies with hipMemcpyBatchAsync on ROCm
- [#49917](https://github.com/sgl-project/sglang/pull/49917) [Fix] hicache: Lock the window a staged buffer-mode load-back keeps
- [#49636](https://github.com/sgl-project/sglang/pull/49636) [Feat] kv-shard: Let out-of-tree backends and pools join logical-page KV sharding
- [#47025](https://github.com/sgl-project/sglang/pull/47025) [Feat] disaggregation: Add opt-in Mooncake TENT transfer engine backend for PD
- [#50394](https://github.com/sgl-project/sglang/pull/50394) [Chore] flash-attn: Restore the kernels-hub FA3 loader and the kernel…
- [#50199](https://github.com/sgl-project/sglang/pull/50199) [Perf] rust-server: Keep a multimodal item's identity on the item so its feature is hashed once
- [#50190](https://github.com/sgl-project/sglang/pull/50190) [Feat] rust-server: Tell a model package's abort hook which requests an abort names
- [#50189](https://github.com/sgl-project/sglang/pull/50189) [Feat] rust-server: Honor --warmups and --gc-warning-threshold-secs
- [#49907](https://github.com/sgl-project/sglang/pull/49907) [Feat] rust-server: Let a multimodal processor fail a request once its result is processed
- [#49663](https://github.com/sgl-project/sglang/pull/49663) [Fix] rust-server: Name the type and retryability of streamed /generate errors
- [#49653](https://github.com/sgl-project/sglang/pull/49653) [Fix] rust-server: Answer and log request rejections as Python does, and refuse generate fields it would drop
- [#49650](https://github.com/sgl-project/sglang/pull/49650) [Feat] rust-server: Serve media the MM processor already holds without a fetch slot, and fail fetches at its deadline
- [#49640](https://github.com/sgl-project/sglang/pull/49640) [Fix] rust-server: Answer a full tokenizer queue with 503 instead of blocking intake, take extension metrics off the mutex, release the GIL in shutdown
- [#50204](https://github.com/sgl-project/sglang/pull/50204) [Perf] rust-server: Use the CPU's SHA-256 instructions on aarch64 Linux
- [#49635](https://github.com/sgl-project/sglang/pull/49635) [Fix] rust-server: Keep the /v1/loads snapshot lock wait off the async workers
- [#49633](https://github.com/sgl-project/sglang/pull/49633) [Perf] hicache: Stage kernel-backend host index uploads in pinned memory
- [#49631](https://github.com/sgl-project/sglang/pull/49631) [Perf] srt: Encode the load snapshot before taking the shared-memory file lock
- [#49686](https://github.com/sgl-project/sglang/pull/49686) [Feat] disaggregation: Make the PD top-logprobs metadata width configurable
- [#49906](https://github.com/sgl-project/sglang/pull/49906) [Fix] mem_cache: Keep freeing SWA slots for an unpublished prefill with a pending SWA branch
- [#50181](https://github.com/sgl-project/sglang/pull/50181) [Fix] hicache: Refuse a runtime write_back policy under buffer_only host memory
- [#49632](https://github.com/sgl-project/sglang/pull/49632) [Test] crash-dump: Pin the Python frontend in the tests that resolve --ssl-keyfile-password
- [#50369](https://github.com/sgl-project/sglang/pull/50369) [Chore] release: Bump sgl-kernel version to 0.4.11
- [#45905](https://github.com/sgl-project/sglang/pull/45905) [Refactor] moe: simplify FlashInfer MegaMoE autotune handoff
- [#50260](https://github.com/sgl-project/sglang/pull/50260) [Chore] fa3: Serve FA3 from the sgl-fa3 wheel and remove it from sglang-kernel
- [#49603](https://github.com/sgl-project/sglang/pull/49603) [Fix] [AMD] docker: Pin UCX and NIXL commits for ROCm PD disaggregation
- [#47645](https://github.com/sgl-project/sglang/pull/47645) [Fix] [AMD] aiter: Plan the DCP asm verify shard with the draft tokens under CUDA graph replay
- [#43136](https://github.com/sgl-project/sglang/pull/43136) [Perf] [AMD] DCP: Slice gathered MHA prefixes with host offsets to drop GPU syncs
- [#49382](https://github.com/sgl-project/sglang/pull/49382) [Refactor] custom-ar-v2: Share one symmetric workspace per group
- [#49477](https://github.com/sgl-project/sglang/pull/49477) [Perf] attention: Optimize FA3/FA4 tree attention
- [#49878](https://github.com/sgl-project/sglang/pull/49878) [Fix] disaggregation: Attribute decode HiCache hits to host and storage
- [#50033](https://github.com/sgl-project/sglang/pull/50033) [Doc] hybrid: Document sizing the state and KV pools for multi-turn reuse
- [#50231](https://github.com/sgl-project/sglang/pull/50231) [Doc] [NPU] docs: restructure the Ascend parameter tuning guide and align its dependents
- [#48629](https://github.com/sgl-project/sglang/pull/48629) [Perf] models: use fused apply_qk_norm in Exaone, HunYuan-V3, AfMoE, and BailingMoE
- [#46132](https://github.com/sgl-project/sglang/pull/46132) [Perf] cuda-graph: Raise the decode graph ceiling default to 128 for 35 to 60 GiB GPUs
- [#50039](https://github.com/sgl-project/sglang/pull/50039) [Fix] deepseek-v4.1: Preserve compact DSpark outputs with CP bounded replay
- [#50098](https://github.com/sgl-project/sglang/pull/50098) [Fix] diffusion: Align Wan2.2-TI2V-5B request sizes to its 32-pixel patch grid
- [#47842](https://github.com/sgl-project/sglang/pull/47842) [Fix] diffusion: Enable Cosmos 3 Edge and Nano fused QK-norm/RoPE on SM 121 (GB10)
- [#49338](https://github.com/sgl-project/sglang/pull/49338) [Fix] compressed-tensors: Reject WNA16 MoE TP shards that split a scale group
- [#49866](https://github.com/sgl-project/sglang/pull/49866) [Fix] sgl-kernel: Do not compile FA3 instantiation files twice
- [#50178](https://github.com/sgl-project/sglang/pull/50178) [Fix] DeepSeek-V4: Default input_embeds to None in DS4 forward
- [#50177](https://github.com/sgl-project/sglang/pull/50177) [Fix] DeepSeek-V4: Skip decode attention TP setup when it is off
- [#50237](https://github.com/sgl-project/sglang/pull/50237) [Fix] inkling: declare tools first and render tool_choice instructions
- [#49600](https://github.com/sgl-project/sglang/pull/49600) [Feat] function_call: Add granite_toolcall_parser for Granite 4.2
- [#46408](https://github.com/sgl-project/sglang/pull/46408) [Refactor] multimodal: [MM refactor 2/9] Initialize multimodal processors from a processor config
- [#50289](https://github.com/sgl-project/sglang/pull/50289) [Doc] cookbook: Refresh SemiAnalysis AgentX launches to InferenceX main 8f29d8dc
- [#49913](https://github.com/sgl-project/sglang/pull/49913) [Feat] kimi_k3: Serve Kimi-K3.1 on the unified memory pool
- [#49966](https://github.com/sgl-project/sglang/pull/49966) [Refactor] mem_cache: Compose same-lifetime parts into one unified sub-pool
- [#50096](https://github.com/sgl-project/sglang/pull/50096) [Feat] [NPU] attention: Support FP8 KV for DSA prefill context parallelism

#### 🐛 New Issues
- [#50348](https://github.com/sgl-project/sglang/issues/50348) [Bug] sgl-router: /v1/messages returns 400 for requests with inline role="system" 💬4
- [#50249](https://github.com/sgl-project/sglang/issues/50249) [Bug] [Intel] XPU: GDN chunk prefill 2.6x slower and wrong recompute_w_u output for K != V since #47944 💬2
- [#50405](https://github.com/sgl-project/sglang/issues/50405) [Feature] Receive requests during model forward to overlap DFS KV prefetch 💬1
- [#50351](https://github.com/sgl-project/sglang/issues/50351) [Bug] Download cache paths ignore TMPDIR 💬1
- [#50408](https://github.com/sgl-project/sglang/issues/50408) [Feature] glm-5.3: Encode message content as ordinary text in the built-in GLM-5.3 chat template
- [#50395](https://github.com/sgl-project/sglang/issues/50395) [Bug] NGRAM speculative decoding is not deterministic with --enable-deterministic-inference
- [#50386](https://github.com/sgl-project/sglang/issues/50386) [Bug] [AMD] INT8 W8A8 models fail on ROCm: `NameError: int8_scaled_mm` for compressed-tensors, `w8a8_int8` rejected at startup
- [#50377](https://github.com/sgl-project/sglang/issues/50377) [Bug] qwen3_coder / granite_toolcall_parser: NaN/Infinity in array and object parameters give non-JSON arguments, and a set literal raises in streaming
- [#50336](https://github.com/sgl-project/sglang/issues/50336) [RFC] Optimizing Large-Scale MoE Inference with Multi-GPU Partial Expert Offload
- [#50218](https://github.com/sgl-project/sglang/issues/50218) [CI] diffusion MiniMax-H3 tests fail on main: stale ComfyUI H3 SOURCE_SHA256 and B200 consistency mismatch
- [#50241](https://github.com/sgl-project/sglang/issues/50241) [Tracking] Deterministic inference on AMD Instinct MI350X / MI355X (gfx950)
- [#50221](https://github.com/sgl-project/sglang/issues/50221) [Bug] one_batch crashes with --enable-dp-attention: int object has no attribute startswith

#### 🔒 Closed Issues
- [#27286](https://github.com/sgl-project/sglang/issues/27286) Nemotron Perf Tracking
- [#34861](https://github.com/sgl-project/sglang/issues/34861) [Bug] [NPU] Router GEMM output should always be fp32
- [#39342](https://github.com/sgl-project/sglang/issues/39342) [Bug] --enable-mixed-chunk corrupts mamba radix cache checkpoints on hybrid GDN models (mixed batch skips extra_buffer write, slot still donated)
- [#39072](https://github.com/sgl-project/sglang/issues/39072) [Bug] GLM-5.3 crash on disagg decode + dp-attention + spec decode
- [#39453](https://github.com/sgl-project/sglang/issues/39453) [Bug] DSA KPool decode JIT specializes on exact block-table width
- [#49881](https://github.com/sgl-project/sglang/issues/49881) [Bug][GLM-5.3-Flash][EAGLE] NaN logits latched for all later requests after a decode step whose batch is padded to the next CUDA-graph size (9 running -> bs-10 graph)
- [#39429](https://github.com/sgl-project/sglang/issues/39429) [Perf] Fuse quantization and storage for existing fp4_mx_block16 KV cache
- [#47031](https://github.com/sgl-project/sglang/issues/47031) [RFC] Phased upstreaming of reliable Mooncake Direct L3 loading and promotion-based prefetch
- [#39455](https://github.com/sgl-project/sglang/issues/39455) [Bug] Marlin atomicAdd K-slice reduction is always on for n < 2048, k >= 2048 (dead `if not True:` guard) and is not disabled by --enable-deterministic-inference
- [#39442](https://github.com/sgl-project/sglang/issues/39442) [Bug] [ROCm] MEM profiling crashes TP server in _dump_snapshot with RuntimeError: stoi
- [#39428](https://github.com/sgl-project/sglang/issues/39428) [Bug] Unbounded memory growth via orphan bootstrap_room injection leads to OOM Kill
- [#39393](https://github.com/sgl-project/sglang/issues/39393) [Feature Request] Add pipeline-parallel support to Qwen4-Exp (`qwen4_exp.py`) — four gaps, working reference patches, and an undocumented mHC PP-boundary contract
- [#39343](https://github.com/sgl-project/sglang/issues/39343) 按照指导操作后，A5仍然无法拉起dsv4.1，报错如下：ValueError: The checkpoint you are trying to load has model type deepseek_v41 but Transformers does not recognize this architecture.
- [#47624](https://github.com/sgl-project/sglang/issues/47624) [RFC] NPU RL Test Consolidation: File Ownership, Coverage Docstrings, and CI Integration (Ascend)
- [#50377](https://github.com/sgl-project/sglang/issues/50377) [Bug] qwen3_coder / granite_toolcall_parser: NaN/Infinity in array and object parameters give non-JSON arguments, and a set literal raises in streaming
- [#49871](https://github.com/sgl-project/sglang/issues/49871) [Bug] Decode HiCache reports host and storage cache hits as device hits
- [#49865](https://github.com/sgl-project/sglang/issues/49865) [Bug] sgl-kernel: FA3 kernels are compiled and linked twice (hdimdiff sm90 and softcapall sm80 files)
- [#50218](https://github.com/sgl-project/sglang/issues/50218) [CI] diffusion MiniMax-H3 tests fail on main: stale ComfyUI H3 SOURCE_SHA256 and B200 consistency mismatch
- [#49334](https://github.com/sgl-project/sglang/issues/49334) [Bug] moe_route_warp crashes on CPU-offloaded correction_bias with --cpu-offload-gb (Tensor match failed ... device=cpu at route_warp.cuh:459)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 134,893 · **Open issues:** 2,597 · **Last push:** 3h ago

On November 14, 2026, llama.cpp released version 1.0.0, which removes the deprecated public API, promotes the NextN/speculative API to `llama.h`, and introduces OCP FP8 KV caches along with a host-memory MoE expert cache that allows for configurable CPU sharing. Significant merged features included the addition of SSM_SCAN support for Hexagon and improvements to buffer allocations and mappings, enhancing performance. Additionally, a notable fix rectified a destination offset overflow in the Metal implementation. Among the new issues, a bug was reported where settings regarding tool selections inside a chat were misleading, highlighting ongoing challenges in user interface consistency.

#### 🚀 New Releases
- [v1.0.0](https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0) v1.0.0
- [b12374](https://github.com/ggml-org/llama.cpp/releases/tag/b12374) b12374
- [b12373](https://github.com/ggml-org/llama.cpp/releases/tag/b12373) b12373
- [b12370](https://github.com/ggml-org/llama.cpp/releases/tag/b12370) b12370
- [b12368](https://github.com/ggml-org/llama.cpp/releases/tag/b12368) b12368
- [b12367](https://github.com/ggml-org/llama.cpp/releases/tag/b12367) b12367
- [b12366](https://github.com/ggml-org/llama.cpp/releases/tag/b12366) b12366
- [b12365](https://github.com/ggml-org/llama.cpp/releases/tag/b12365) b12365
- [b12364](https://github.com/ggml-org/llama.cpp/releases/tag/b12364) b12364
- [b12363](https://github.com/ggml-org/llama.cpp/releases/tag/b12363) b12363

#### ✅ Merged PRs
- [#32221](https://github.com/ggml-org/llama.cpp/pull/32221) ggml-metal: fix mul_mv destination offset overflow
- [#31921](https://github.com/ggml-org/llama.cpp/pull/31921) hexagon: add support for SSM_SCAN op
- [#32196](https://github.com/ggml-org/llama.cpp/pull/32196) ui: configure allow-remote=root in .npmrc for npm 12+ (#32158)
- [#32148](https://github.com/ggml-org/llama.cpp/pull/32148) ci: reduce qdc timeouts to avoid stalling pipelines and runners
- [#30021](https://github.com/ggml-org/llama.cpp/pull/30021) ggml-cuda: hip: tune GCN MMQ configs
- [#32199](https://github.com/ggml-org/llama.cpp/pull/32199) requirements, Fix CI: support Python 3.15
- [#32144](https://github.com/ggml-org/llama.cpp/pull/32144) hexagon: improve buffer allocations and mappings (mmap stacking)
- [#30099](https://github.com/ggml-org/llama.cpp/pull/30099) CUDA: add SM103 SASS to non-native builds
- [#31544](https://github.com/ggml-org/llama.cpp/pull/31544) vulkan: add TOP_K_MASK
- [#32190](https://github.com/ggml-org/llama.cpp/pull/32190) llama.cpp : bump version to 1.0.0
- [#32135](https://github.com/ggml-org/llama.cpp/pull/32135) ggml : add BF16 support to RMS_NORM (CPU, CUDA)
- [#31294](https://github.com/ggml-org/llama.cpp/pull/31294) spec : Warn when --spec-draft-p-min is used with probabilistic draft sampling
- [#29267](https://github.com/ggml-org/llama.cpp/pull/29267) ggml-vulkan: add optional device keepalive
- [#29557](https://github.com/ggml-org/llama.cpp/pull/29557) grammar : optimize matching with left factoring
- [#32157](https://github.com/ggml-org/llama.cpp/pull/32157) llama: move moe-cache code out of llama-graph
- [#32179](https://github.com/ggml-org/llama.cpp/pull/32179) CUDA, Fix CI: split the PAD_REFLECT_1D grid to stay within the HIP grid limit
- [#32191](https://github.com/ggml-org/llama.cpp/pull/32191) examples : remove explict version from test-cmake
- [#32189](https://github.com/ggml-org/llama.cpp/pull/32189) sync : ggml
- [#32184](https://github.com/ggml-org/llama.cpp/pull/32184) examples : clean-up old/obsolete stuff
- [#32185](https://github.com/ggml-org/llama.cpp/pull/32185) ci : set windows-cuda ccache size to 1G
- [#32183](https://github.com/ggml-org/llama.cpp/pull/32183) ci: fix HIP quality check by ignoring the FP8 vec FA kernel spill

#### 🐛 New Issues
- [#32214](https://github.com/ggml-org/llama.cpp/issues/32214) Misc. bug: Settings/Tools is lying about tool picks inside a chat `bug-unconfirmed` 💬1
- [#32233](https://github.com/ggml-org/llama.cpp/issues/32233) Misc. bug: llama update re-downloads latest version even when already on the latest version `bug-unconfirmed`
- [#32231](https://github.com/ggml-org/llama.cpp/issues/32231) Eval bug: Gemma4 fails to call tool after a thought session `bug-unconfirmed`
- [#32229](https://github.com/ggml-org/llama.cpp/issues/32229) Eval bug: CUDA mmvq fusion makes token generation 20-36% slower on Pascal (sm_61, MX230); GGML_CUDA_DISABLE_FUSION=1 is faster with identical output
- [#32216](https://github.com/ggml-org/llama.cpp/issues/32216) Misc. bug: Vulkan Flash Attention exceeds shared memory limit on NV GPU with fp16=0 `bug-unconfirmed`
- [#32198](https://github.com/ggml-org/llama.cpp/issues/32198) Eval bug: Hexagon MUL_MAT_ID returns inf or wrong values when activations or results exceed the fp16 range
- [#32197](https://github.com/ggml-org/llama.cpp/issues/32197) DeepSeek-V4.1-Flash (deepseek41): CPU/AMX scheduler aborts on non-contiguous attn_wo_a input
- [#32181](https://github.com/ggml-org/llama.cpp/issues/32181) Feature Request: restrict qwen4exp QSA to a sequence's own cells with a unified KV cache `enhancement`
- [#32178](https://github.com/ggml-org/llama.cpp/issues/32178) Misc. bug: HIP/gfx1200 FLASH_ATTN_EXT produces varying results and NaNs `bug-unconfirmed`

#### 🔒 Closed Issues
- [#28541](https://github.com/ggml-org/llama.cpp/issues/28541) RFC: image, video and audio generation from diffusion GGUFs (LTX-2)
- [#29623](https://github.com/ggml-org/llama.cpp/issues/29623) Vulkan ErrorDeviceLost (vk::Queue::submit) on AMD Radeon AI PRO R9700 when SAM/ReBAR enabled
- [#29255](https://github.com/ggml-org/llama.cpp/issues/29255) Eval bug: probabilistic CUDA error 'invalid argument' at kernel launch on 7x Volta (sm_70) layer-split, triggered by large prefill + partial prefix reuse
- [#29549](https://github.com/ggml-org/llama.cpp/issues/29549) Eval bug: -sm tensor make my machine reboot in the middle of generation
- [#29149](https://github.com/ggml-org/llama.cpp/issues/29149) Eval bug: qwen4exp (Qwen3.8-Flash-Next) livelocks during model load on HIP; identical config loads on Vulkan
- [#29172](https://github.com/ggml-org/llama.cpp/issues/29172) Eval bug: CUDA decode+prefill collapse at deep KV position on qwen35 hybrid (~5.5x tg, ~21x pp at d154855)
- [#29465](https://github.com/ggml-org/llama.cpp/issues/29465) Eval bug: Metal: per-file mmap mapping spans CPU-resident tensors, so a 27 GiB lazy-read table between GPU tensors counts against the GPU working set (Qwen3.8-Flash-Next OOM)
- [#29458](https://github.com/ggml-org/llama.cpp/issues/29458) Misc. bug: `/infill` does not validate prompt token ids, it accepts out-of-range ids that `/completion` rejects
- [#29501](https://github.com/ggml-org/llama.cpp/issues/29501) Eval bug: Gemma 4 assistant (draft-mtp) aborts with `--split-mode tensor` and an uneven `--tensor-split`
- [#29629](https://github.com/ggml-org/llama.cpp/issues/29629) Eval bug: mtmd CUDA flash attention gives wrong image embeddings on Qwen3.5 / Qwen3-VL
- [#29764](https://github.com/ggml-org/llama.cpp/issues/29764) Vulkan: ggml_vk_get_device publishes a device before building it, unlocked: concurrent first inits abort (vkCreateFence: Invalid device), and a failed build stays in the slot
- [#30563](https://github.com/ggml-org/llama.cpp/issues/30563) Misc. bug: Vulkan lavapipe coopmat multiplication missing row writes
- [#28783](https://github.com/ggml-org/llama.cpp/issues/28783) Misc. bug: internal MCP server does not handle non-text results
- [#29670](https://github.com/ggml-org/llama.cpp/issues/29670) Eval bug: ggml-cpu AMX mul_mat (since #19925) doesn't broadcast 2D weights over batched src1 and mis-scales byte offsets → garbage output with ≥2 parallel sequences and SIGSEGV in tileloadd (Qwen3.5/3.6, llama-server -np)
- [#29691](https://github.com/ggml-org/llama.cpp/issues/29691) Misc. Server backend and UI not syncing:
- [#29760](https://github.com/ggml-org/llama.cpp/issues/29760) Feature Request: Split --reranking into two flags for router/model
- [#30237](https://github.com/ggml-org/llama.cpp/issues/30237) Misc. bug: Metal mul_mv destination offsets overflow for large batched outputs
- [#32158](https://github.com/ggml-org/llama.cpp/issues/32158) Misc. bug: tools/ui npm ci fails on npm 12 with EALLOWREMOTE after #32112 (llama-brand tarball dependency)

### Ollama (`ollama/ollama`)

**Stars:** 186,903 · **Open issues:** 4,654 · **Last push:** 2h ago

On November 14, 2026, there were no new releases for Ollama; however, a significant change was merged in pull request #19686, which preserves unmodeled tool schema keywords in the API. Among the new issues reported, #19696 highlights a critical problem where the /api/chat intermittently returns a 500 error related to "chat prompt error," particularly affecting Windows users after around 19 seconds on long prompts. Additionally, issue #19694 points out that the qwen3.5 and qwen3-coder parsers are experiencing problems with corrupted tool-call arguments or lost calls depending on content and stream chunking.

#### ✅ Merged PRs
- [#19686](https://github.com/ollama/ollama/pull/19686) api: preserve unmodeled tool schema keywords

#### 🐛 New Issues
- [#19696](https://github.com/ollama/ollama/issues/19696) Windows: /api/chat intermittently returns 500 "chat prompt error" (wsarecv reset) after ~19 s on long prompts — runner client keep-alive disabled
- [#19694](https://github.com/ollama/ollama/issues/19694) qwen3.5 / qwen3-coder parsers: tool-call arguments corrupted or calls lost depending on content and stream chunking `bug`

#### 🔒 Closed Issues
- [#9247](https://github.com/ollama/ollama/issues/9247) Error: an error was encountered while running the model: CUDA error: unspecified launch failure

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,224 · **Open issues:** 5,196 · **Last push:** <1h ago

On November 14, 2026, LiteLLM released version v1.111.0-dev.2, which is now signed with the key introduced in a previous commit, and version v1.108.8, the latest Long-Term Support (LTS) version. Notable changes in merged pull requests included the addition of a contract for Rust callbacks in feature #51526 and bug fixes, such as ensuring that token counts from various inference outputs are accurate (#51079) and addressing streaming issues with TTS audio during chat completions (#51750). Additionally, a new bug regarding the misuse of the `/chat/completions` endpoint for OpenAI-like servers was reported under issue #51547, which has garnered significant attention.

#### 🚀 New Releases
- [v1.111.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-dev.2) v1.111.0-dev.2
- [v1.108.8](https://github.com/BerriAI/litellm/releases/tag/v1.108.8) 1.108.8 (LTS)
- [v1.106.10](https://github.com/BerriAI/litellm/releases/tag/v1.106.10) v1.106.10
- [v1.111.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-dev.1) v1.111.0-dev.1

#### ✅ Merged PRs
- [#51526](https://github.com/BerriAI/litellm/pull/51526) feat(custom-logger-v2): add the contract for rust callbacks and bind the proxy request scope
- [#51079](https://github.com/BerriAI/litellm/pull/51079) fix(proxy): count tokens with the thinking, effort, and tool_choice that inference sends
- [#51750](https://github.com/BerriAI/litellm/pull/51750) fix(gemini): stream TTS audio in delta.audio on chat completions
- [#51128](https://github.com/BerriAI/litellm/pull/51128) feat(model-catalog): read min_billed_input_tokens so cost map rows that set it pass the guard
- [#50516](https://github.com/BerriAI/litellm/pull/50516) fix(bedrock): answer 400 for service tiers Bedrock cannot serve, forward reserved
- [#51759](https://github.com/BerriAI/litellm/pull/51759) test(otel): keep proxy startup out of the per-test timeout in the excluded services matrix
- [#51143](https://github.com/BerriAI/litellm/pull/51143) fix(proxy): keep carried end-user spend when a budget reset is retried
- [#50973](https://github.com/BerriAI/litellm/pull/50973) fix(mcp): scope the gateway sign-in to the servers picked on the connect page
- [#50483](https://github.com/BerriAI/litellm/pull/50483) refactor(mcp): let the semantic filter take its MCP tool loader as a parameter
- [#51699](https://github.com/BerriAI/litellm/pull/51699) fix(logging): keep a content-block system prompt in logged messages
- [#51745](https://github.com/BerriAI/litellm/pull/51745) fix(proxy): preserve caller metadata on auth failures
- [#51702](https://github.com/BerriAI/litellm/pull/51702) fix: preserve routed prompt generation settings
- [#51744](https://github.com/BerriAI/litellm/pull/51744) test(s3_v2): give the slow-sink ramp test a callback limit that outlasts its burst
- [#51735](https://github.com/BerriAI/litellm/pull/51735) fix(model-prices): drop Flex prices from Vertex AI Gemini 4 Argon and Hydrogen
- [#51545](https://github.com/BerriAI/litellm/pull/51545) fix(cost-map): restore backward compatibility after the Rust loader move
- [#50760](https://github.com/BerriAI/litellm/pull/50760) fix(helm): route every gateway allowlist path to the gateway in the componentized ingress
- [#51709](https://github.com/BerriAI/litellm/pull/51709) fix(dynamic_rate_limiter_v3): publish a team's share gauges for requests served while the model is idle
- [#51736](https://github.com/BerriAI/litellm/pull/51736) chore(release): bump version to 1.106.10
- [#51731](https://github.com/BerriAI/litellm/pull/51731) fix(mcp): backport #41197 to stable/1.106.x
- [#51729](https://github.com/BerriAI/litellm/pull/51729) fix(spend-logs): make token redaction opt-in
- [#51694](https://github.com/BerriAI/litellm/pull/51694) fix(proxy): keep a customer budget reset from being undone by a stale hierarchy cache entry
- [#51641](https://github.com/BerriAI/litellm/pull/51641) feat(ui): let admins control Aria access for internal users
- [#51663](https://github.com/BerriAI/litellm/pull/51663) fix(auth): let dashboard sessions use the user's team models
- [#51214](https://github.com/BerriAI/litellm/pull/51214) feat(custom-logger-v2): add types, dispatcher and route callback call sites (step 0)
- [#51713](https://github.com/BerriAI/litellm/pull/51713) feat(ui): add overall customer usage and sortable budgets
- [#51716](https://github.com/BerriAI/litellm/pull/51716) chore(cost-map): move azure_ai claude-haiku-4-5 and claude-opus-4-5 retirement to 2027-03-16
- [#51714](https://github.com/BerriAI/litellm/pull/51714) test(integration): saturate the model before measuring dynamic limiter team share metrics
- [#51718](https://github.com/BerriAI/litellm/pull/51718) feat(callbacks): let a native callback await typed host calls served by the python caller
- [#51712](https://github.com/BerriAI/litellm/pull/51712) fix(deps): bump opentelemetry, dnspython and tornado past the Nov 13 advisories so osv-scan passes
- [#51701](https://github.com/BerriAI/litellm/pull/51701) fix(bedrock): log and bill Titan embedding replies on the invoke passthrough
- [#51697](https://github.com/BerriAI/litellm/pull/51697) chore(cost-map): add the 4K output rate to runwayml/seedance2_5
- [#51550](https://github.com/BerriAI/litellm/pull/51550) fix(docker): refresh Wolfi base to patched glibc
- [#51706](https://github.com/BerriAI/litellm/pull/51706) fix(proxy): retain unwritten rollups after database disconnects
- [#51707](https://github.com/BerriAI/litellm/pull/51707) test(streaming): make unbuffered Noma secret exposure deterministic
- [#51388](https://github.com/BerriAI/litellm/pull/51388) fix(cache-memory): rebuild the in-memory cache on an exact expiry index
- [#51703](https://github.com/BerriAI/litellm/pull/51703) fix(proxy): delete a customer team's override budget when the team has no overall budget
- [#51698](https://github.com/BerriAI/litellm/pull/51698) fix(customer-portal): keep existing memberships and scope free tier capacity locks
- [#51679](https://github.com/BerriAI/litellm/pull/51679) feat(fal_ai): bill fal video clips by duration and resolution
- [#51591](https://github.com/BerriAI/litellm/pull/51591) fix(types): build Usage schemas eagerly so parallel first requests cannot race
- [#51462](https://github.com/BerriAI/litellm/pull/51462) fix(mcp): route aggregate resources/read to the server that lists the URI
- [#51620](https://github.com/BerriAI/litellm/pull/51620) chore(cost-map): add Soniox v6 and date Soniox, Bedrock Claude and Azure Whisper retirements
- [#51696](https://github.com/BerriAI/litellm/pull/51696) chore(cost-map): add github_copilot/gemini-4-hydrogen from the Copilot changelog launch post
- [#51700](https://github.com/BerriAI/litellm/pull/51700) fix(ui): make customer org settings tab full width
- [#51661](https://github.com/BerriAI/litellm/pull/51661) feat(customer-portal): configure budget groups atomically
- [#51693](https://github.com/BerriAI/litellm/pull/51693) fix(mistral): declare low, medium and high reasoning effort for mistral-large-4
- [#51686](https://github.com/BerriAI/litellm/pull/51686) fix(vertex_ai): send document_ocr, audio_track_extraction and auto_truncate on Gemini embeddings
- [#51658](https://github.com/BerriAI/litellm/pull/51658) fix(customers): align budget displays with recorded reset windows
- [#51659](https://github.com/BerriAI/litellm/pull/51659) test(security): resolve budget request route identifiers from their own fixtures
- [#51685](https://github.com/BerriAI/litellm/pull/51685) fix(sdk): stop requiring redis to import the Messages streaming path
- [#51687](https://github.com/BerriAI/litellm/pull/51687) feat(customer-portal): add free tier limits with Enterprise upgrade path
- [#51683](https://github.com/BerriAI/litellm/pull/51683) fix(router): prevent Responses fallback from replaying delivered tool calls
- [#51689](https://github.com/BerriAI/litellm/pull/51689) fix(proxy): /customer/new budgets reset on the same schedule as other budgets
- [#51667](https://github.com/BerriAI/litellm/pull/51667) fix(proxy): drop a customer override expiry sent without an override
- [#51673](https://github.com/BerriAI/litellm/pull/51673) fix(vertex_ai): report PDF tokens and cost on Gemini embedContent responses
- [#51590](https://github.com/BerriAI/litellm/pull/51590) fix(tests): run the worker-replacement chaos test under strict supervision
- [#51592](https://github.com/BerriAI/litellm/pull/51592) test(observability): give K3 the calibrated proxy budget instead of a fixed 300s
- [#51684](https://github.com/BerriAI/litellm/pull/51684) ci(mcp-deps): build unoptimized in the MCP dependency resolution workflow
- [#51672](https://github.com/BerriAI/litellm/pull/51672) fix(budgets): reset 12months and other long unit spellings on their short form's schedule
- [#51674](https://github.com/BerriAI/litellm/pull/51674) fix(proxy): refuse a key pinned to another customer org before registering an unknown org alias
- [#51682](https://github.com/BerriAI/litellm/pull/51682) chore: bump litellm to 1.108.8 on lts/1.108.x
- [#51654](https://github.com/BerriAI/litellm/pull/51654) fix(budgets): invalidate customer hierarchy caches through stored team IDs
- [#51677](https://github.com/BerriAI/litellm/pull/51677) fix(ui): show member spend above top models on customer usage page
- [#51660](https://github.com/BerriAI/litellm/pull/51660) fix(proxy): register a customer member in a customer org with no default budget
- [#51657](https://github.com/BerriAI/litellm/pull/51657) fix(gemini): move the November 17 shutdown date on TTS and Live preview rows to the dates on the deprecations page
- [#51449](https://github.com/BerriAI/litellm/pull/51449) fix(huggingface): honor HUGGINGFACE_API_BASE and env endpoints for chat
- [#51647](https://github.com/BerriAI/litellm/pull/51647) fix(openai): add gpt-image-2.6 batch prices and drop gpt-5.5-pro long context batch prices
- [#51655](https://github.com/BerriAI/litellm/pull/51655) test(spend): synchronize concurrent member resets before validation completes
- [#51607](https://github.com/BerriAI/litellm/pull/51607) fix(proxy): upsert customer orgs and customer members safely
- [#51640](https://github.com/BerriAI/litellm/pull/51640) fix(mcp): backport #51578 to lts/1.108.x
- [#51645](https://github.com/BerriAI/litellm/pull/51645) fix: restore customer budget alerts after hierarchy schema changes
- [#51521](https://github.com/BerriAI/litellm/pull/51521) feat(customer-portal): complete hierarchy management
- [#51643](https://github.com/BerriAI/litellm/pull/51643) chore: bump litellm-enterprise 0.1.84 -> 0.1.85, litellm-proxy-extras 0.4.115 -> 0.4.116
- [#51451](https://github.com/BerriAI/litellm/pull/51451) fix(fireworks_ai): read fractional sizes like 1p5b in the size bucket fallback
- [#51596](https://github.com/BerriAI/litellm/pull/51596) fix(proxy): display customer identity in spend logs
- [#51581](https://github.com/BerriAI/litellm/pull/51581) feat(ui): show and pick vector stores for access groups
- [#51637](https://github.com/BerriAI/litellm/pull/51637) feat(proxy): register an unknown customer organization alias as a new organization charged for the request
- [#51579](https://github.com/BerriAI/litellm/pull/51579) fix(proxy): alert on customer org, customer team, and customer member budgets
- [#51636](https://github.com/BerriAI/litellm/pull/51636) feat(proxy): pick the customer organization's default budget template by name on create and by id on patch
- [#51548](https://github.com/BerriAI/litellm/pull/51548) feat(proxy): run requests with unknown customer ids untracked instead of refusing them
- [#51582](https://github.com/BerriAI/litellm/pull/51582) feat(proxy): customer budget rollup, reset on the budget row's window, named templates, team overrides, multi-window limits and pause_allow_increase
- [#51484](https://github.com/BerriAI/litellm/pull/51484) feat(access-groups): name group vector stores and list them on team info
- [#51578](https://github.com/BerriAI/litellm/pull/51578) fix(mcp): treat the mcp_all scope as a wildcard any grant covers
- [#51568](https://github.com/BerriAI/litellm/pull/51568) fix(proxy): enforce settled customer budgets across workers
- [#51612](https://github.com/BerriAI/litellm/pull/51612) fix(cost-map): mark together_ai/elorian-labs/glimpse-1.0 as supporting function calling and structured outputs
- [#51380](https://github.com/BerriAI/litellm/pull/51380) fix(proxy): preserve team aliases in Responses WebSockets
- [#51585](https://github.com/BerriAI/litellm/pull/51585) fix(deps): bump soupsieve past GHSA-4j63-6c4x-wfg4 and GHSA-mmhr-3c5m-f64f
- [#51593](https://github.com/BerriAI/litellm/pull/51593) fix(databricks): record the November 19 retirement and successor for databricks-gemini-3-6-flash
- [#51517](https://github.com/BerriAI/litellm/pull/51517) fix(interactions): bind Deep Research agents and record their costs

#### 🐛 New Issues
- [#51547](https://github.com/BerriAI/litellm/issues/51547) [Bug]: No way to force usage of `/chat/completions` endpoint for OpenAI-like servers `bug` `llm translation` 💬4
- [#51723](https://github.com/BerriAI/litellm/issues/51723) Feature request: model map cannot express a shared input and output context window `llm translation` 💬3
- [#51638](https://github.com/BerriAI/litellm/issues/51638) [Bug]: Complexity Router drops generation settings from selected prompts on Chat Completions `llm translation` 💬1
- [#51666](https://github.com/BerriAI/litellm/issues/51666) [Bug]: `opencode_go` streaming via `/v1/chat/completions` dies with `TypeError: 'NoneType' object is not an iterator` (APIConnectionError 500) for models whose Go endpoint is `/v1/messages` `bug` `llm translation` 💬1
- [#51626](https://github.com/BerriAI/litellm/issues/51626) [Bug]: use_in_pass_through does not stop pass-through forwarding — disabling the flag has no visible effect (it only controls credential injection, not routing) `bug` `llm translation` 💬1
- [#51609](https://github.com/BerriAI/litellm/issues/51609) [Bug]: 1.110.0rc2 router changes the upstream model name for wildcard deployments when the requested name contains `*`, a newline or a lone surrogate `llm translation` 💬1
- [#51765](https://github.com/BerriAI/litellm/issues/51765) [Feature]: Configurable request-body parameter denylist (general_settings.banned_request_body_params)
- [#51691](https://github.com/BerriAI/litellm/issues/51691) [Bug]: mistral/mistral-large-4 declares reasoning_effort_levels ["none", "high"], so low and medium are sent as high `llm translation` `claude code`
- [#51648](https://github.com/BerriAI/litellm/issues/51648) [Feature]: opt-in cap on images per request (Azure OpenAI rejects more than 50) `llm translation`
- [#51615](https://github.com/BerriAI/litellm/issues/51615) [Feature]: Helm chart - allow overriding gateway/backend/ui container command/args
- [#51627](https://github.com/BerriAI/litellm/issues/51627) [Bug]: deployment_key_to_vertex_credentials is never unregistered when use_in_pass_through is disabled — Vertex pass-through credentials persist until process restart `bug` `llm translation`
- [#51618](https://github.com/BerriAI/litellm/issues/51618) [Bug]: /v1/mcp/server hides mcp_info governance metadata and created_at from proxy_admin_viewer `bug`
- [#51613](https://github.com/BerriAI/litellm/issues/51613) [Bug]: Gemini non-streamed content_filter choices do not say why Google filtered them `llm translation`
- [#51601](https://github.com/BerriAI/litellm/issues/51601) [Bug]: OpenAIEncoding differs from tiktoken.Encoding in encode_with_unstable (lone surrogates) and is_special_token (ids outside u32) `llm translation`
- [#51597](https://github.com/BerriAI/litellm/issues/51597) [Bug]: Streaming chat completions with comma-separated models return 500 (AttributeError: 'list' object has no attribute '__aiter__') `llm translation`
- [#51556](https://github.com/BerriAI/litellm/issues/51556) [Bug]: Bedrock Invoke drops the BM25 tool search tool on /v1/chat/completions, so deferred tools are never found `llm translation`

#### 🔒 Closed Issues
- [#23345](https://github.com/BerriAI/litellm/issues/23345) [Bug]: Manually added field in `Model Info` is not persisted
- [#34906](https://github.com/BerriAI/litellm/issues/34906) [Bug]: resources/read fails with "Multiple MCP servers configured" as soon as an MCP-Apps UI server is aggregated with any other MCP server
- [#51547](https://github.com/BerriAI/litellm/issues/51547) [Bug]: No way to force usage of `/chat/completions` endpoint for OpenAI-like servers
- [#45379](https://github.com/BerriAI/litellm/issues/45379) [Bug]: Top-level `import soundfile` in the Transcribe pass-through handler breaks `/v1/messages` streaming without the `proxy` extra (since v1.103.0)
- [#36402](https://github.com/BerriAI/litellm/issues/36402) [Bug]: system field missing from logging payload
- [#51723](https://github.com/BerriAI/litellm/issues/51723) Feature request: model map cannot express a shared input and output context window
- [#36163](https://github.com/BerriAI/litellm/issues/36163) [Feature]: TealTiger as a Custom Guardrail Plugin
- [#32114](https://github.com/BerriAI/litellm/issues/32114) [Bug]: `_read_request_body` silently returns `{}` on body parse failure, causing `ProxyModelNotFoundError: model=None` on large embedding batches
- [#50898](https://github.com/BerriAI/litellm/issues/50898) A retried budget reset erases the carried spend of rollover-capped end users
- [#30472](https://github.com/BerriAI/litellm/issues/30472) Upstream MCP server URL exposed in public model hub modal
- [#36280](https://github.com/BerriAI/litellm/issues/36280) pass_through_endpoints: include_subpath routes are auth-classified as management routes, so virtual keys get 401
- [#43002](https://github.com/BerriAI/litellm/issues/43002) [Bug]: tool-usage flush and auto-router turn drain permanently drop data on a transient DB connection error
- [#50934](https://github.com/BerriAI/litellm/issues/50934) [Feature]: Add Soniox stt-async-v6 and stt-rt-v6 to the cost map
- [#37260](https://github.com/BerriAI/litellm/issues/37260) [Bug]: Auth-stage failure spend logs (budget_exceeded) drop x-litellm-spend-logs-metadata even though the header is present
- [#51638](https://github.com/BerriAI/litellm/issues/51638) [Bug]: Complexity Router drops generation settings from selected prompts on Chat Completions
- [#51455](https://github.com/BerriAI/litellm/issues/51455) [Bug]: Bedrock Titan embedding passthrough succeeds but fails success logging
- [#45380](https://github.com/BerriAI/litellm/issues/45380) [Bug]: `/v1/messages` streaming needs undeclared `redis` since v1.98.0, and Bedrock streams then skip success callbacks without an error
- [#51691](https://github.com/BerriAI/litellm/issues/51691) [Bug]: mistral/mistral-large-4 declares reasoning_effort_levels ["none", "high"], so low and medium are sent as high
- [#42955](https://github.com/BerriAI/litellm/issues/42955) [Bug]: Responses streaming fallback replays a delivered tool call
- [#51448](https://github.com/BerriAI/litellm/issues/51448) [Bug]: Hugging Face chat ignores HUGGINGFACE_API_BASE and fails on huggingface/tgi when the endpoint comes from the environment
- [#51450](https://github.com/BerriAI/litellm/issues/51450) [Bug]: Fireworks size-bucket pricing reads 1p5b as 5B, so small unmapped models are billed at the 4.1B-16B rate
- [#46881](https://github.com/BerriAI/litellm/issues/46881) [Feature]: Configurable deployment labels & annotations in componentized Helm
- [#51379](https://github.com/BerriAI/litellm/issues/51379) [Bug]: Responses WebSocket overwrites team model aliases before routing
- [#49767](https://github.com/BerriAI/litellm/issues/49767) [Bug]: Interactions API on vertex_ai deployments: by-id GET/DELETE/cancel hard-coded to gemini, Vertex cancel uses `:cancel`, Deep Research cost-map and poll-timeout gaps

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,462 · **Open issues:** 515 · **Last push:** <1h ago

On November 14, 2026, Unsloth did not release any new versions, but several important features and fixes were merged into the codebase. Key updates include the enhancement of the AMD NPU context management to optimize memory usage (#17511) and improvements in the Studio's handling of long GGUF chats, ensuring slot key-value pairs persist across reloads (#17121). Additionally, the Studio's model picker was updated, replacing the Thinking pill with a more intuitive option (#17517). Among the newly reported issues, the bug concerning the inability to select edit for image models raised user concern (#17716).

#### ✅ Merged PRs
- [#17678](https://github.com/unslothai/unsloth/pull/17678) Studio: keep <bos> in Gemma 4 chat training text
- [#17511](https://github.com/unslothai/unsloth/pull/17511) [Feature] AMD NPU: size the context to free RAM instead of a flat 8192 tokens
- [#15706](https://github.com/unslothai/unsloth/pull/15706) Studio: say a missing skill resource is not a chat attachment
- [#17121](https://github.com/unslothai/unsloth/pull/17121) Studio: keep a long GGUF chat's slot KV across a reload (#9037)
- [#17660](https://github.com/unslothai/unsloth/pull/17660) DeepSeek-V4.1: keep torch.compile on when unsloth_zoo makes the checkpoint recompute match
- [#17714](https://github.com/unslothai/unsloth/pull/17714) SFT: give MoE models the trainer's router_aux_loss_coef on TRL 1.18
- [#17703](https://github.com/unslothai/unsloth/pull/17703) Tests: stub the read-bytes probe in the load progress fraction tests
- [#17517](https://github.com/unslothai/unsloth/pull/17517) Studio: model picker in the composer, replacing the Thinking pill
- [#17688](https://github.com/unslothai/unsloth/pull/17688) Tests: pass registryRows into the provider backfill harness tail
- [#17687](https://github.com/unslothai/unsloth/pull/17687) CI: skip an experimental TRL trainer whose own module needs an optional extra
- [#17684](https://github.com/unslothai/unsloth/pull/17684) Tests: match the kernels upgrade warning text (Unsloth restarts)
- [#17624](https://github.com/unslothai/unsloth/pull/17624) Studio: ask before Python runs the shell commands Terminal asks about
- [#17686](https://github.com/unslothai/unsloth/pull/17686) Tests: answer the mlx.inference helpers zoo speculative decode imports since unsloth_zoo #2474
- [#17685](https://github.com/unslothai/unsloth/pull/17685) Tests: skip the VAE canvas cases that build the MiniMax-H3 VAE when diffusers is missing
- [#17679](https://github.com/unslothai/unsloth/pull/17679) Studio: tick newly offered connection models, show provider model names, API page labels
- [#17680](https://github.com/unslothai/unsloth/pull/17680) Studio int8 video DiTs: fused rotation + quant, native-epilogue GEMM and fused residual / GELU when compiled
- [#17683](https://github.com/unslothai/unsloth/pull/17683) Tests: account for transformers 5.23 activation_checkpointing_kwargs in the TRL defaults contract
- [#16928](https://github.com/unslothai/unsloth/pull/16928) Studio: ask for the final answer when repeats end the tool rounds
- [#17681](https://github.com/unslothai/unsloth/pull/17681) Studio diffusion: read ROCm through is_rocm_torch in the int8 GEMM and VAE canvas gates
- [#17667](https://github.com/unslothai/unsloth/pull/17667) Studio: low-RAM follow-ups: first-load video encoder pin, honour transformer_quant none
- [#17649](https://github.com/unslothai/unsloth/pull/17649) Studio: late pins for streamed denoisers on low-RAM hosts, and dense FLUX.3 on 12 GB hosts
- [#17644](https://github.com/unslothai/unsloth/pull/17644) Studio: pin a streamed image text encoder once the denoiser is placed (low-RAM hosts)
- [#17618](https://github.com/unslothai/unsloth/pull/17618) Studio H3 / H3-Image: bit-exact per-row AdaLN modulation, int8 GEMM on the streamed tier
- [#17658](https://github.com/unslothai/unsloth/pull/17658) Studio video: bit-identical int8 GEMM routes on streamed int8 denoisers
- [#17671](https://github.com/unslothai/unsloth/pull/17671) Studio: Auto takes INT8 first for FLUX.2 / FLUX.3 klein, Z-Image, MOSS-Image and Wan2.2 where it is faster
- [#17669](https://github.com/unslothai/unsloth/pull/17669) Studio: skip Triton's sm_8x prefetch pass for 8-bit dots and run the int8 GEMM on A100 / L4 again
- [#17662](https://github.com/unslothai/unsloth/pull/17662) Studio: load packed W6A8 / W4A8 grouped-scale diffusion checkpoints
- [#17653](https://github.com/unslothai/unsloth/pull/17653) Studio video: lend the VAE decode's share of the residency room to the streamed denoiser
- [#17637](https://github.com/unslothai/unsloth/pull/17637) Studio FLUX.3: build attention Q / K in one bit-exact kernel
- [#17628](https://github.com/unslothai/unsloth/pull/17628) Studio H3-Image: stream the text encoder from pinned memory on the L4 tier
- [#17615](https://github.com/unslothai/unsloth/pull/17615) Studio H3-Image: reuse the reference VAE posterior, trim after load, keep INT8 attention only where faster
- [#17613](https://github.com/unslothai/unsloth/pull/17613) Studio int8: keep torchao's transposed weight in the TN layout for _int_mm (fixes an illegal memory access on L4)
- [#17595](https://github.com/unslothai/unsloth/pull/17595) Studio: composited-canvas tiled VAE decode for MiniMax-H3 / H3-Image (batched tiles, tile CUDA graphs, fp16 decoder)
- [#17654](https://github.com/unslothai/unsloth/pull/17654) Studio MiniMax-H3-Image: auto precision takes int8, then fp8, then bf16 on every card
- [#17642](https://github.com/unslothai/unsloth/pull/17642) Studio FLUX.3: load float16 builds on 12 GB hosts by reading bf16 as stored
- [#17617](https://github.com/unslothai/unsloth/pull/17617) Studio: run the bit-identical int8 GEMM routes on uncompiled int8 denoisers
- [#17593](https://github.com/unslothai/unsloth/pull/17593) Studio H3 / H3-Image: bit-exact fused q/k RMSNorm + RoPE, on for every tier
- [#17639](https://github.com/unslothai/unsloth/pull/17639) Studio H3 / H3-Image: SageAttention inside the strided processor, no per-call device sync on sm89
- [#17589](https://github.com/unslothai/unsloth/pull/17589) Studio: default transformers 5.5.4, highest sidecar 5.13.1, and SageAttention on current torch
- [#17674](https://github.com/unslothai/unsloth/pull/17674) Tests: cover the served-window route in the account isolation matrix
- [#17657](https://github.com/unslothai/unsloth/pull/17657) Falcon H1: apply attention_in_multiplier in the layer forward
- [#17328](https://github.com/unslothai/unsloth/pull/17328) Studio: group composer settings under Chat
- [#17588](https://github.com/unslothai/unsloth/pull/17588) Studio: publish the thread rows' role before their first style read
- [#17632](https://github.com/unslothai/unsloth/pull/17632) Studio: keep a long chat cached when another request runs in between
- [#17635](https://github.com/unslothai/unsloth/pull/17635) Studio: find dictation models, the prompt upsampler and the mask segmenter after they are moved
- [#17641](https://github.com/unslothai/unsloth/pull/17641) Studio: choose the Engram table precision for Qwen3.8-Flash-Next and DeepSeek-V4.1 GGUFs
- [#17597](https://github.com/unslothai/unsloth/pull/17597) Studio: keep the thread window off a streaming reply's back, and compare long-chat cost with the base build in CI
- [#17623](https://github.com/unslothai/unsloth/pull/17623) Studio: refuse a message too long for the window Ollama loaded
- [#17631](https://github.com/unslothai/unsloth/pull/17631) Studio: read the remaining connection model lists from each provider
- [#17668](https://github.com/unslothai/unsloth/pull/17668) Tests: wait for the stored-chat lookup itself in browser-tab-session
- [#17622](https://github.com/unslothai/unsloth/pull/17622) Studio: give coding agents the window an Ollama connection serves
- [#17604](https://github.com/unslothai/unsloth/pull/17604) Refuse loraplus_lr_ratio together with q_galore_config
- [#17620](https://github.com/unslothai/unsloth/pull/17620) Studio: keep user messages as typed in HTML and PDF exports
- [#17630](https://github.com/unslothai/unsloth/pull/17630) Studio: load connection model lists from the models.dev catalog
- [#17619](https://github.com/unslothai/unsloth/pull/17619) Studio: read docs pages whose text starts late in the page
- [#17608](https://github.com/unslothai/unsloth/pull/17608) Docker: keep the AMD latest tag on the base image after a release
- [#17629](https://github.com/unslothai/unsloth/pull/17629) Studio: name a rejected chat template instead of blaming the GGUF file and memory
- [#17621](https://github.com/unslothai/unsloth/pull/17621) Studio: keep every column of wide tables in PDF chat exports
- [#17549](https://github.com/unslothai/unsloth/pull/17549) Ollama: keep the stop-token collapse to prefixes longer than half the token
- [#17650](https://github.com/unslothai/unsloth/pull/17650) Studio: stop empty browser tabs piling up across chats
- [#17596](https://github.com/unslothai/unsloth/pull/17596) Studio: keep browser tabs across a reload, make browser use approvals port-aware
- [#17594](https://github.com/unslothai/unsloth/pull/17594) Studio: tighten browser use gates and fix floating browser window state

#### 🐛 New Issues
- [#17664](https://github.com/unslothai/unsloth/issues/17664) Documentation missing for the project source screen in unsloth desktop `feature request` 💬2
- [#17665](https://github.com/unslothai/unsloth/issues/17665) [Feature] Search with "Owner/ModelName" `feature request` 💬1
- [#17722](https://github.com/unslothai/unsloth/issues/17722) Running Unsloth Desktop on LinuxMint with Intel B70 - 300% tok/s increase when the GUI is minimized. `feature request` `bug`
- [#17716](https://github.com/unslothai/unsloth/issues/17716) [Bug] Can't select edit for Image models even tho it's support and i did do image edit before `feature request` `bug`
- [#17689](https://github.com/unslothai/unsloth/issues/17689) [Unsloth Bug] Mobile (Cloudflare) chat updates not reconciled in Desktop embedded WebView
- [#17663](https://github.com/unslothai/unsloth/issues/17663) [UX] GPU idle after engine update - only “Restore installation” restored GPU inference
- [#17661](https://github.com/unslothai/unsloth/issues/17661) [Bug] `Show release notes` Button Always Fail, why then keep it? `feature request` `bug`
- [#17655](https://github.com/unslothai/unsloth/issues/17655) Studio: a Combined CSV export of several chats re-imports as one merged chat
- [#17651](https://github.com/unslothai/unsloth/issues/17651) [Studio] Projects page "Import chats" file picker hides Markdown exports in the web UI

#### 🔒 Closed Issues
- [#17470](https://github.com/unslothai/unsloth/issues/17470) [Bug] unsloth docker image tags are incorrect

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,186 · **Open issues:** 416 · **Last push:** 20h ago

On November 14, 2026, AIBrix did not release any new versions, but several important pull requests were merged. Notable fixes include #3438, which ensures that a ModelClaim engine is marked as failed when it dies during a wake, and #3454, which addresses a bug in counting each config profile's requestsPerSecond separately. The team also improved testing with #3447, which asserts the immutability message for the preemptionPolicy in the ModelClaim schema, and resolved an issue with gateway running counts in #3448. Among new issues, #3463 raises a request for comments on managing remaining Redis costs after the candidate stage, focusing on inflight filter ordering and per-request counters.

#### ✅ Merged PRs
- [#3438](https://github.com/vllm-project/aibrix/pull/3438) [Bug] Mark a ModelClaim engine failed when it dies during a wake
- [#3454](https://github.com/vllm-project/aibrix/pull/3454) [Bug] Count each config profile's requestsPerSecond separately
- [#3447](https://github.com/vllm-project/aibrix/pull/3447) [Misc] Assert the preemptionPolicy immutability message in the ModelClaim schema test
- [#3448](https://github.com/vllm-project/aibrix/pull/3448) [Bug] Judge the age of other gateways' running counts per snapshot

#### 🐛 New Issues
- [#3463](https://github.com/vllm-project/aibrix/issues/3463) [RFC]: Remaining Redis cost after the candidate stage: inflight filter ordering and per-request counters `area/gateway` `triage/accepted` `kind/feature` 💬12
- [#3468](https://github.com/vllm-project/aibrix/issues/3468) [Bug] binPack/leastAdapters schedulers return a zero Pod when no candidate is selectable `kind/bug` `area/orchestration` 💬2

#### 🔒 Closed Issues
- [#3414](https://github.com/vllm-project/aibrix/issues/3414) [Bug][ModelClaim] An engine whose EngineCore dies during a wake stays sleeping
- [#3441](https://github.com/vllm-project/aibrix/issues/3441) [Bug] Candidate stage keeps adding remote running counts that were last read long ago when snapshot reads keep failing

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,472 · **Open issues:** 599 · **Last push:** <1h ago

On November 14, 2026, there were no new releases for Semantic Router, but several important updates were merged into the codebase. Notable merges include the feature allowing the Router listener to specify which vSR plugins to activate (#6430) and improvements for handling null citations in Anthropic content blocks (#6421). Additionally, a bug fix was made to ensure expired cache entries can be reclaimed when the default TTL is disabled (#6423). Among the newly raised issues, the request to make Router Replay’s prompt capture an explicit mode with routing data only by default (#6415) is generating notable interest.

#### ✅ Merged PRs
- [#6423](https://github.com/vllm-project/semantic-router/pull/6423) [Bug] Reclaim expired cache entries when the default TTL is disabled
- [#6421](https://github.com/vllm-project/semantic-router/pull/6421) [Bug] Accept null citations in Anthropic content blocks
- [#6477](https://github.com/vllm-project/semantic-router/pull/6477) [CI/Build] Retry transient registry errors in image publication
- [#6469](https://github.com/vllm-project/semantic-router/pull/6469) Revert "[CI/Build] Run the CLI unit tests on every core (#6466)"
- [#6466](https://github.com/vllm-project/semantic-router/pull/6466) [CI/Build] Run the CLI unit tests on every core
- [#6444](https://github.com/vllm-project/semantic-router/pull/6444) [Feature] Let a provider backend take the client's own provider login
- [#6443](https://github.com/vllm-project/semantic-router/pull/6443) [Bug] Take a coding agent's long tool descriptions through the gateway
- [#6430](https://github.com/vllm-project/semantic-router/pull/6430) [Feature] Let a Router listener set what the vSR plugins turn on
- [#6428](https://github.com/vllm-project/semantic-router/pull/6428) [Feature] Read the context window from the config and set up vSR in vllm-sr connect
- [#6427](https://github.com/vllm-project/semantic-router/pull/6427) [Feature] Let vSR's router pick the model of your own turns
- [#6413](https://github.com/vllm-project/semantic-router/pull/6413) [Feature] Bring vSR's guard, redact and shield to Codex CLI
- [#6464](https://github.com/vllm-project/semantic-router/pull/6464) [CI/Build] Read the near-threshold re-read order test one window at a time
- [#6458](https://github.com/vllm-project/semantic-router/pull/6458) [Bug] Follow up the standalone drain: an explicit 0, a zero grace period, listeners that close first

#### 🐛 New Issues
- [#6415](https://github.com/vllm-project/semantic-router/issues/6415) [Feature] Make Router Replay's prompt capture an explicit mode, with routing data only by default `accepted` `wg/enterprise-environment` 💬3
- [#6465](https://github.com/vllm-project/semantic-router/issues/6465) [CI/Build] Run the CLI unit tests on every core of the runner `accepted` `wg/evaluation-quality` 💬2
- [#6407](https://github.com/vllm-project/semantic-router/issues/6407) [Bug] vSR finds no model in a Router listener's vllm-sr/5.0 listing `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#6474](https://github.com/vllm-project/semantic-router/issues/6474) [Bug] One registry 500 fails a Main image publication and splits vllm-sr from extproc `bug` `accepted` `wg/evaluation-quality` 💬1
- [#6472](https://github.com/vllm-project/semantic-router/issues/6472) [Bug] A caller backend receives a bearer that came in on another provider's API `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6473](https://github.com/vllm-project/semantic-router/issues/6473) [Feature] Let Codex use the gateway on its own ChatGPT login `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6471](https://github.com/vllm-project/semantic-router/issues/6471) [Docs] Say who a caller backend may serve under Anthropic's credential policy `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6426](https://github.com/vllm-project/semantic-router/issues/6426) [Feature] Let a Router listener set what the vSR agent plugins turn on `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6425](https://github.com/vllm-project/semantic-router/issues/6425) [Feature] vllm-sr connect: read the context window from the config, name what overrides it, try it without writing, and set up vSR `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6424](https://github.com/vllm-project/semantic-router/issues/6424) [Feature] Let vSR's router pick the model of the person's own turns in Claude Code `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6442](https://github.com/vllm-project/semantic-router/issues/6442) [Feature] Let Claude Code use the gateway on its own Claude subscription login `accepted` `wg/data-plane-networking` 💬1
- [#6441](https://github.com/vllm-project/semantic-router/issues/6441) [Bug] The gateway refuses Claude Code's interactive turns over its 16 KiB tool description limit `accepted` `wg/data-plane-networking` 💬1
- [#6462](https://github.com/vllm-project/semantic-router/issues/6462) [CI/Build] The guard's near-threshold re-read order test fails when windows sent together arrive out of order `accepted` `wg/router-models-inference-runtime` 💬1
- [#6461](https://github.com/vllm-project/semantic-router/issues/6461) [Bug] CLI Unit Tests fail on every PR: a Dashboard Dockerfile test still asserts the builder line #6438 changed `accepted` `wg/evaluation-quality` 💬1
- [#6455](https://github.com/vllm-project/semantic-router/issues/6455) [Feature] Bound the request trace a Router Replay record keeps by default `accepted` `wg/enterprise-environment` 💬1
- [#6454](https://github.com/vllm-project/semantic-router/issues/6454) [Feature] Make the standalone gateway's drain configurable, and drain h2c requests too `accepted` `wg/data-plane-networking` 💬1
- [#6450](https://github.com/vllm-project/semantic-router/issues/6450) [Feature] Bound the prompt a Router Replay record stores `accepted` `wg/enterprise-environment` 💬1
- [#6451](https://github.com/vllm-project/semantic-router/issues/6451) [Bug] A guard injection at the very end of a long input is read behind a whole window of earlier text, and can score just under the rule `accepted` `wg/router-models-inference-runtime` 💬1
- [#6417](https://github.com/vllm-project/semantic-router/issues/6417) [Bug] The nightly vela3 E2E profile asks for more CPU than a GitHub runner has `bug` `accepted` `wg/evaluation-quality` 💬1
- [#6416](https://github.com/vllm-project/semantic-router/issues/6416) [Bug] The Vela 2.0 System One parity test asks the runtime in vllm-sr/4.0 forms `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#6436](https://github.com/vllm-project/semantic-router/issues/6436) [Bug] The arm64 operator image ships an x86-64 manager binary `bug` `accepted` `wg/enterprise-environment` 💬1
- [#6435](https://github.com/vllm-project/semantic-router/issues/6435) [Bug] Nightly and image builds spend runner time that buys nothing `bug` `accepted` `wg/evaluation-quality` 💬1
- [#6410](https://github.com/vllm-project/semantic-router/issues/6410) [Bug] The routing log reports a reasoning effort for a model without a reasoning family `accepted` `in-progress` `wg/mom-routing` 💬1
- [#6409](https://github.com/vllm-project/semantic-router/issues/6409) [Bug] vSR redact does not tell Claude that its tags are not in the source `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#6448](https://github.com/vllm-project/semantic-router/issues/6448) [Bug] Project reasoning budget to vLLM native thinking field `needs-acceptance` `wg/router-models-inference-runtime`
- [#6447](https://github.com/vllm-project/semantic-router/issues/6447) [Bug] Reject empty final judge output from Fusion `needs-acceptance` `wg/mom-routing`
- [#6446](https://github.com/vllm-project/semantic-router/issues/6446) [Feature] Document which languages d3 has been evaluated in (Thai results attached) `needs-acceptance` `wg/router-models-inference-runtime`
- [#6445](https://github.com/vllm-project/semantic-router/issues/6445) [Feature] Support MPEG-TS (video/mp2t) inputs for Decision 3.0 video classification `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#6434](https://github.com/vllm-project/semantic-router/issues/6434) [Bug] Buffered OpenAI Responses replies with a summary-less reasoning item fail with empty_output_item (502) `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#5411](https://github.com/vllm-project/semantic-router/issues/5411) [Bug] Unexpected model scheduler worker failure leaves requests pending
- [#5536](https://github.com/vllm-project/semantic-router/issues/5536) [Feature] Translate Responses namespace tools so Codex CLI multi-agent and MCP tools pass the Router
- [#3516](https://github.com/vllm-project/semantic-router/issues/3516) [Feature] Qualify native macOS (Apple Silicon) support: darwin build and Metal device wiring
- [#6246](https://github.com/vllm-project/semantic-router/issues/6246) [Bug] Reclaim explicitly expiring entries when the default cache TTL is disabled
- [#5641](https://github.com/vllm-project/semantic-router/issues/5641) [Bug] Anthropic text blocks with "citations": null are rejected as unsupported citations
- [#6415](https://github.com/vllm-project/semantic-router/issues/6415) [Feature] Make Router Replay's prompt capture an explicit mode, with routing data only by default
- [#5052](https://github.com/vllm-project/semantic-router/issues/5052) [Docs] Verify paper-native evaluations listed on Papers with Code
- [#6465](https://github.com/vllm-project/semantic-router/issues/6465) [CI/Build] Run the CLI unit tests on every core of the runner
- [#6392](https://github.com/vllm-project/semantic-router/issues/6392) [CI] Local Stack E2E: vllm-sr serve fails at the Grafana admin password sync
- [#6474](https://github.com/vllm-project/semantic-router/issues/6474) [Bug] One registry 500 fails a Main image publication and splits vllm-sr from extproc
- [#6426](https://github.com/vllm-project/semantic-router/issues/6426) [Feature] Let a Router listener set what the vSR agent plugins turn on
- [#6425](https://github.com/vllm-project/semantic-router/issues/6425) [Feature] vllm-sr connect: read the context window from the config, name what overrides it, try it without writing, and set up vSR
- [#6424](https://github.com/vllm-project/semantic-router/issues/6424) [Feature] Let vSR's router pick the model of the person's own turns in Claude Code
- [#6442](https://github.com/vllm-project/semantic-router/issues/6442) [Feature] Let Claude Code use the gateway on its own Claude subscription login
- [#6441](https://github.com/vllm-project/semantic-router/issues/6441) [Bug] The gateway refuses Claude Code's interactive turns over its 16 KiB tool description limit
- [#6462](https://github.com/vllm-project/semantic-router/issues/6462) [CI/Build] The guard's near-threshold re-read order test fails when windows sent together arrive out of order
- [#6461](https://github.com/vllm-project/semantic-router/issues/6461) [Bug] CLI Unit Tests fail on every PR: a Dashboard Dockerfile test still asserts the builder line #6438 changed
- [#6455](https://github.com/vllm-project/semantic-router/issues/6455) [Feature] Bound the request trace a Router Replay record keeps by default
- [#6454](https://github.com/vllm-project/semantic-router/issues/6454) [Feature] Make the standalone gateway's drain configurable, and drain h2c requests too
- [#6450](https://github.com/vllm-project/semantic-router/issues/6450) [Feature] Bound the prompt a Router Replay record stores
- [#6451](https://github.com/vllm-project/semantic-router/issues/6451) [Bug] A guard injection at the very end of a long input is read behind a whole window of earlier text, and can score just under the rule
- [#6417](https://github.com/vllm-project/semantic-router/issues/6417) [Bug] The nightly vela3 E2E profile asks for more CPU than a GitHub runner has
- [#6416](https://github.com/vllm-project/semantic-router/issues/6416) [Bug] The Vela 2.0 System One parity test asks the runtime in vllm-sr/4.0 forms
- [#6436](https://github.com/vllm-project/semantic-router/issues/6436) [Bug] The arm64 operator image ships an x86-64 manager binary
- [#6435](https://github.com/vllm-project/semantic-router/issues/6435) [Bug] Nightly and image builds spend runner time that buys nothing
- [#6066](https://github.com/vllm-project/semantic-router/issues/6066) [Bug] previous_response_id history is silently truncated when an ancestor expired
- [#6359](https://github.com/vllm-project/semantic-router/issues/6359) [Test] Migrate engine-mode CLI E2E listener grants to apis
- [#6398](https://github.com/vllm-project/semantic-router/issues/6398) [Feature] Answer a retryable error, not a refusal, when a fail-closed guard signal cannot be read because the decision runtime is overloaded
- [#5424](https://github.com/vllm-project/semantic-router/issues/5424) [Bug] Router: startup status reports "initialized" before dependencies are initialized

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*