# 📡 AI Ecosystem Digest — 2026-09-22

> Generated 2026-09-22 01:28 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 147,473 | 21 | 10 | 1 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 125,766 | 21 | 0 | 50 | 7 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,123 | 0 | 0 | 2 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,194 | 9 | 29 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 209,159 | 23 | 7 | 5 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,048 | 24 | 10 | 4 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,224 | 69 | 45 | 167 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 247,786 | 36 | 4 | 0 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,367 | 38 | 15 | 45 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,276 | 9 | 10 | 62 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,104 | 16 | 11 | 30 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,408 | 5 | 7 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,347 | 15 | 19 | 144 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,546 | 13 | 13 | 76 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,104 | 3 | 3 | 7 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,890 | 10 | 4 | 9 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple versions: [rust-v0.157.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.2), [rust-v0.157.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.1), [rust-v0.156.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.17), and others.
- **Gemini CLI** released [v0.62.0-nightly.20260921.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260921.gcfbcaa8df).
- **OpenClaw** has a new issue [#154571](https://github.com/openclaw/openclaw/issues/154571) regarding significant capture directory leaks during external plugin loads, garnering 12 comments.
- **vLLM** reported a bug in new issue [#57944](https://github.com/vllm-project/vllm/issues/57944) regarding misclassification of successful transcriptions, which has received 5 comments.
- **Qwen Code** noted critical issues with the new release in [#12416](https://github.com/QwenLM/qwen-code/issues/12416) about Remote-SSH failures, which attracted 7 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 147,473 · **Open issues:** 12,171 · **Last push:** 3h ago

On September 22, 2026, there were no new releases for Claude Code. The most significant development was the merging of pull request #95932, which adds an issue template for GitHub connection problems specifically for claude.ai. Several notable new issues were reported, including a critical bug (#95950) related to consistent 500 and 529 server errors from the Anthropic API, and another (#95945) highlighting the model fabricating user turns within its responses. Other significant issues include unexpected model downgrades (#95946) and problems with NVDA not announcing new replies in the Code tab (#95937), indicating ongoing accessibility concerns.

#### ✅ Merged PRs
- [#95932](https://github.com/anthropics/claude-code/pull/95932) Add issue template for GitHub connection problems on claude.ai

#### 🐛 New Issues
- [#95950](https://github.com/anthropics/claude-code/issues/95950) [Bug] Anthropic API Error: Consistent 500 and 529 Server Errors `bug` `platform:macos` `external` `api:anthropic`
- [#95922](https://github.com/anthropics/claude-code/issues/95922) Claude Docs artifact: export fails on a personal Max plan ("Your organization doesn't allow PDF export here." / "Couldn't prepare the file.") `bug` `platform:macos` `area:desktop` 💬1
- [#95945](https://github.com/anthropics/claude-code/issues/95945) [BUG] Model fabricates user turns in its own response and acts on them (14x in one session) `bug` `duplicate` `has repro` `platform:windows` 💬1
- [#95937](https://github.com/anthropics/claude-code/issues/95937) [BUG][A11y] Desktop (Windows): new replies in the Code tab are not announced by NVDA `bug` `platform:windows` `area:a11y` `area:desktop` 💬1
- [#95953](https://github.com/anthropics/claude-code/issues/95953) Weekly usage cap met, no wind down in project whilst project running to create … `enhancement` `area:cost`
- [#95952](https://github.com/anthropics/claude-code/issues/95952) [Bug] Staged desktop update is invisible: no update-ready indicator, silently deferred for days, then quits mid-session without warning `bug` `platform:windows` `area:desktop`
- [#95951](https://github.com/anthropics/claude-code/issues/95951) [Feature Request] Support for MDM-managed Mac diagnostics script generation `enhancement` `platform:macos`
- [#95949](https://github.com/anthropics/claude-code/issues/95949) [BUG] Linux: sandboxed Bash permanently dies after EnterWorktree into .claude/worktrees/ (bwrap: Read-only file system) `bug` `has repro` `platform:linux` `area:sandbox`
- [#95948](https://github.com/anthropics/claude-code/issues/95948) [BUG] archaeologic mystery being blocked repeatedly for cyber? `bug` `area:model` `needs-info` `needs-repro`
- [#95947](https://github.com/anthropics/claude-code/issues/95947) [Bug] Rate limit or moderation block on historical research queries `bug` `platform:linux` `area:model` `needs-info`
- [#95946](https://github.com/anthropics/claude-code/issues/95946) [Bug] Unexpected model downgrade from Fable 5 to Opus 4.8 `bug` `platform:windows` `area:model`
- [#95942](https://github.com/anthropics/claude-code/issues/95942) [FEATURE] Weekday reset option `enhancement` `area:cost`
- [#95944](https://github.com/anthropics/claude-code/issues/95944) [BUG] Code toolbar disappears in Windows interface with no way to get it back `bug` `platform:windows` `area:ui`
- [#95943](https://github.com/anthropics/claude-code/issues/95943) Scheduled tasks: run history cannot be pruned — no delete, no retention policy, and runs aren't even enumerable `enhancement` `platform:web` `area:routines`
- [#95941](https://github.com/anthropics/claude-code/issues/95941) <ip_reminder> injected server-side into desktop sessions 44+ times in four hours; not a duplicate of #46465 `bug` `has repro` `platform:macos` `area:model`
- [#95940](https://github.com/anthropics/claude-code/issues/95940) [FEATURE] Claude code on desktop and Claude on web - Need toggle to switch behavior of Return and Shift + Return `enhancement` `area:tui` `keybindings`
- [#95939](https://github.com/anthropics/claude-code/issues/95939) [Bug] File content truncation prevents viewing complete file text `bug` `platform:macos` `area:tools` `needs-repro`
- [#95938](https://github.com/anthropics/claude-code/issues/95938) [FEATURE] Precise Session Reset Timer (hours & minutes) `enhancement` `area:cost` `platform:vscode`
- [#95936](https://github.com/anthropics/claude-code/issues/95936) [BUG] Worktree isolation guard blocks Edit/Write through a symlink the worktree setup itself created to share config with the main checkout `bug` `has repro` `platform:macos` `area:tools`
- [#95935](https://github.com/anthropics/claude-code/issues/95935) [BUG] [BUG] Message to continue an interrupted process sent as me with out authorization. `bug` `platform:windows` `area:ui` `area:desktop`
- [#95934](https://github.com/anthropics/claude-code/issues/95934) OTel: git_commit_id still silently dropped for `git -C <path> commit` and quiet/redirected commits (2.1.278) — recurrence of #77237 `bug` `has repro` `platform:macos` `area:tools`

#### 🔒 Closed Issues
- [#73468](https://github.com/anthropics/claude-code/issues/73468) macOS sandbox unusable: Seatbelt profile passed inline via 'sandbox-exec -p' exceeds ARG_MAX with many git worktrees
- [#66269](https://github.com/anthropics/claude-code/issues/66269) CJK text corrupted (mojibake) when copying terminal output — no-flicker/fullscreen renderer is the cause; tui: "default" fixes it [macOS + OrbStack]
- [#79174](https://github.com/anthropics/claude-code/issues/79174) MCP elicitation: capability is declared but requests are auto-declined ("print mode") in interactive VSCode sessions
- [#86279](https://github.com/anthropics/claude-code/issues/86279) send_message (cross-session) never delivers and leaves the target session hung on an empty turn
- [#77698](https://github.com/anthropics/claude-code/issues/77698) [BUG]
- [#87631](https://github.com/anthropics/claude-code/issues/87631) [BUG] A fast double-Esc destroys the entire prompt with no recovery, and cannot be disabled
- [#87790](https://github.com/anthropics/claude-code/issues/87790) [BUG] Agent response Markdown rendering in TUI mutates meaning of content (renumbers ordered lists)
- [#77237](https://github.com/anthropics/claude-code/issues/77237) OTel: git_commit_id is scraped from git-commit stdout — silently dropped by `| tail`/`-q`/redirection, or by the `git -C <path> commit` form
- [#87827](https://github.com/anthropics/claude-code/issues/87827) [BUG] VS Code extension: @-mention file picker only searches the first folder of a multi-root workspace
- [#87876](https://github.com/anthropics/claude-code/issues/87876) [BUG] Subscription features are withdrawn when `ANTHROPIC_BASE_URL` isn't the official string, even when the proxy terminates at Anthropic

### OpenAI Codex (`openai/codex`)

**Stars:** 125,766 · **Open issues:** 18,174 · **Last push:** <1h ago

On September 22, 2026, OpenAI Codex released several new versions, including rust-v0.157.0-alpha.2 and rust-v0.156.0-alpha.17, enhancing the stability and features of the platform. Significant merged pull requests included updates to honor system proxy settings for standalone web search and support for caller-provided MITM certificate authorities in the network proxy. Additionally, the upload timeout for OpenAI file blobs increased from 60 seconds to 5 minutes, improving user experience during file transfers. A notably hot issue reported that the selected model is currently at capacity, prompting users to try different models.

#### 🚀 New Releases
- [rust-v0.157.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.2) 0.157.0-alpha.2
- [rust-v0.157.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.1) 0.157.0-alpha.1
- [rust-v0.156.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.17) 0.156.0-alpha.17
- [rust-v0.156.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.16) 0.156.0-alpha.16
- [rust-v0.156.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.14) 0.156.0-alpha.14
- [rust-v0.156.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.13) 0.156.0-alpha.13
- [rust-v0.155.0-alpha.16.1](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.16.1) 0.155.0-alpha.16.1

#### ✅ Merged PRs
- [#47143](https://github.com/openai/codex/pull/47143) Extract exec-server CLI startup into a dedicated module
- [#47142](https://github.com/openai/codex/pull/47142) Honor system proxy settings for standalone web search
- [#47137](https://github.com/openai/codex/pull/47137) Prevent horizontal transcript selection from triggering autoscroll
- [#47132](https://github.com/openai/codex/pull/47132) Support caller-provided MITM CAs in the network proxy
- [#47130](https://github.com/openai/codex/pull/47130) Remove the `ultrafast` service tier from `gpt-5.6-sol`
- [#47129](https://github.com/openai/codex/pull/47129) Preserve foreign working directories in extension tool environments
- [#47125](https://github.com/openai/codex/pull/47125) Add extra policy configuration for Guardian reviews
- [#47122](https://github.com/openai/codex/pull/47122) Increase OpenAI file blob upload timeout from 60 seconds to 5 minutes
- [#47121](https://github.com/openai/codex/pull/47121) Pass thread IDs to attachment uploads
- [#47118](https://github.com/openai/codex/pull/47118) Support model-catalog overrides for Code Mode tool messages
- [#47116](https://github.com/openai/codex/pull/47116) Honor the configured product SKU in remote plugin requests
- [#47114](https://github.com/openai/codex/pull/47114) Preserve and expose thread item lifecycle timestamps
- [#47113](https://github.com/openai/codex/pull/47113) Persist thread creator identity in rollouts and SQLite
- [#47112](https://github.com/openai/codex/pull/47112) Lowercase the retry hint for conversations open in another app
- [#47108](https://github.com/openai/codex/pull/47108) Preserve required Windows runtime variables for filesystem helpers
- [#47106](https://github.com/openai/codex/pull/47106) Preserve originating turn metadata for yielded skill calls
- [#47101](https://github.com/openai/codex/pull/47101) Honor configured proxies for realtime WebSocket connections
- [#47100](https://github.com/openai/codex/pull/47100) Preserve assistant answers in bounded TUI task responses
- [#47096](https://github.com/openai/codex/pull/47096) Keep TUI hints immediately above the composer
- [#47095](https://github.com/openai/codex/pull/47095) Remove the `rust-release-prepare` workflow
- [#47094](https://github.com/openai/codex/pull/47094) Restrict Unix local MCP servers to stdio descriptors
- [#47089](https://github.com/openai/codex/pull/47089) Centralize JSON-RPC response serialization through payloads
- [#47088](https://github.com/openai/codex/pull/47088) Disable unused default dependency features
- [#47086](https://github.com/openai/codex/pull/47086) Format analytics credit usage with consistent decimal precision
- [#47085](https://github.com/openai/codex/pull/47085) Update model catalog descriptions and GPT-5.6-Sol priority
- [#47084](https://github.com/openai/codex/pull/47084) Avoid building a host SQLite driver for SQLx macros
- [#47083](https://github.com/openai/codex/pull/47083) Extract per-thread enrichment into a dedicated async helper
- [#47082](https://github.com/openai/codex/pull/47082) Show the voice toggle in the TUI shortcut overlay
- [#47081](https://github.com/openai/codex/pull/47081) Track cumulative MCP attribution across requests and thread history
- [#47079](https://github.com/openai/codex/pull/47079) Mask daemon socket paths exposed through ancestor bind mounts
- [#47077](https://github.com/openai/codex/pull/47077) Serialize environment updates and cancel removed pending attachments
- [#47075](https://github.com/openai/codex/pull/47075) Include attributed previews in agent message board notifications
- [#47074](https://github.com/openai/codex/pull/47074) Refresh host-supplied cloud skills at turn startup
- [#47073](https://github.com/openai/codex/pull/47073) Wait for thread idle in Guardian context budget tests
- [#47068](https://github.com/openai/codex/pull/47068) Highlight selected newlines in the transcript view
- [#47065](https://github.com/openai/codex/pull/47065) Deduplicate deprecation notices in the TUI transcript
- [#47064](https://github.com/openai/codex/pull/47064) Stop redundant message-board reads when limits reach one
- [#47063](https://github.com/openai/codex/pull/47063) Add a partial index for agent message board root posts
- [#47055](https://github.com/openai/codex/pull/47055) Fetch local message board thread summaries in one query
- [#47050](https://github.com/openai/codex/pull/47050) Batch message-board subscriber reads into one SQLite result
- [#47049](https://github.com/openai/codex/pull/47049) Share SQLite pools across local agent message-board handles
- [#47042](https://github.com/openai/codex/pull/47042) Recover corrupt message-board storage during thread deletion
- [#47039](https://github.com/openai/codex/pull/47039) Preserve delivered messages through post-tool hook failures
- [#47038](https://github.com/openai/codex/pull/47038) Cache OS discovery for user agents and telemetry
- [#47036](https://github.com/openai/codex/pull/47036) Share stored JSON payloads across code mode cells with `Arc`
- [#47035](https://github.com/openai/codex/pull/47035) Defer extension tool history materialization until first access
- [#47030](https://github.com/openai/codex/pull/47030) Preserve ordered assistant context in Guardian reviews
- [#47029](https://github.com/openai/codex/pull/47029) Delete persisted message boards with their root threads
- [#47028](https://github.com/openai/codex/pull/47028) Align message-board tools with the multi-agent namespace
- [#47026](https://github.com/openai/codex/pull/47026) Add diagnostics for rollout compression metadata failures

#### 🐛 New Issues
- [#47144](https://github.com/openai/codex/issues/47144) Selected model is at capacity. Please try a different model. `bug` `rate-limits` `app` 💬2
- [#47138](https://github.com/openai/codex/issues/47138) [Windows][26.915.4065.0] Desktop app cannot start: net::ERR_BLOCKED_BY_CLIENT during update check `bug` `windows-os` `app` `connectivity` 💬2
- [#47133](https://github.com/openai/codex/issues/47133) Codex selector not clickable in ChatGPT Windows app – area behaves as Windows title bar `bug` `windows-os` `app` 💬2
- [#47131](https://github.com/openai/codex/issues/47131) macOS built-in Browser blocks PropFinder despite explicit Browsing: Always allow `bug` `app` `browser` 💬2
- [#47146](https://github.com/openai/codex/issues/47146) ⚠ Selected model is at capacity. Please try a different model. `bug` `windows-os` `rate-limits` `CLI` 💬1
- [#47145](https://github.com/openai/codex/issues/47145) Windows: bundled Codex runtime causes workspace routing timeout and repeated login; using external CODEX_CLI_PATH fixes login persistence but ChatGPT Memory becomes unavailable `bug` `windows-os` `auth` `app` 💬1
- [#47135](https://github.com/openai/codex/issues/47135) Feedback report `bug` `app` `session` 💬1
- [#47134](https://github.com/openai/codex/issues/47134) Excessive approval prompts and slow time to first code change `enhancement` `sandbox` `performance` 💬1
- [#47123](https://github.com/openai/codex/issues/47123) [Windows][Desktop] Browser session discovery still fails with nodeRepl.fetch after clean IPC rebuild `bug` `windows-os` `app` `browser` 💬1
- [#47098](https://github.com/openai/codex/issues/47098) TUI renders nothing when the agent message is a bare ordered-list marker like `8.` `bug` `TUI` `CLI` 💬1
- [#47147](https://github.com/openai/codex/issues/47147) Reasoning effort changes from low to mid and causes unsupported none error `bug` `app` `config`
- [#47141](https://github.com/openai/codex/issues/47141) Automated boundary notice falsely attributes a flag to the user and repeatedly interrupts the task `bug` `model-behavior` `CLI`
- [#47140](https://github.com/openai/codex/issues/47140) Desktop Renderer sends local `name@marketplace` IDs through remote `plugin/read` lookup `bug` `app` `skills` `app-server`
- [#47139](https://github.com/openai/codex/issues/47139) Plus 5h limit during approval leaves thread dead: agent loop died unexpectedly + Failed to edit message `bug` `windows-os` `rate-limits` `app`
- [#47136](https://github.com/openai/codex/issues/47136) chat window stuck at top `bug` `app`
- [#47128](https://github.com/openai/codex/issues/47128) Windows: reproducible tokio-rt-worker stack exhaustion / C0000005 — ~136 KiB stack frame in codex.exe `bug` `windows-os` `exec` `CLI`
- [#47127](https://github.com/openai/codex/issues/47127) TUI: render Markdown task lists as semantic checkboxes `enhancement` `TUI` `CLI`
- [#47126](https://github.com/openai/codex/issues/47126) Invalid image / Image poisoning `bug` `CLI` `context` `tool-calls`
- [#47124](https://github.com/openai/codex/issues/47124) [Bug + Solution] Resuming a conversation can miss the final answer and report an interruption `bug` `CLI` `app-server`
- [#47120](https://github.com/openai/codex/issues/47120) [macOS Desktop] Orphaned pinned remote tasks cannot be unpinned after SSH project removal `bug` `app` `session` `remote`
- [#47119](https://github.com/openai/codex/issues/47119) [Windows] Work tasks created through create_thread disappear from Archived chats when preview is empty `bug` `windows-os` `app` `session`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,123 · **Open issues:** 834 · **Last push:** <1h ago

On September 22, 2026, Gemini CLI released the version v0.62.0-nightly.20260921.gcfbcaa8df, which includes notable updates from the previous nightly build. Among the key changes, two significant merged pull requests improved functionality: the first addresses an issue with emitting tool_call updates before request_permission in ACP mode, and the second normalizes the proxy-agent esbuild interop for better environment proxy resolution. Additionally, no new issues were reported in the last 24 hours, indicating a stable operational period for the project.

#### 🚀 New Releases
- [v0.62.0-nightly.20260921.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260921.gcfbcaa8df) Release v0.62.0-nightly.20260921.gcfbcaa8df

#### ✅ Merged PRs
- [#29439](https://github.com/google-gemini/gemini-cli/pull/29439) fix(cli): emit tool_call update prior to request_permission in ACP mode
- [#29401](https://github.com/google-gemini/gemini-cli/pull/29401) fix(core): normalize proxy-agent esbuild interop for environment proxy resolution

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,194 · **Open issues:** 2,311 · **Last push:** <1h ago

On September 22, 2026, GitHub Copilot CLI released version 1.0.88-1, which fixed issues related to session approvals and enhanced guidance for sandboxed network denials linked to proxy tunnel failures. Version 1.0.88-0 was also released, introducing optional OSC 777 terminal notifications, improved support for namespaced custom skills, and a more efficient way to manage large local session transcripts. Although there were no merged pull requests today, a noteworthy new issue was the failure of the Atlassian MCP OAuth due to a mismatch in the redirect_uri port, prompting further user discussions. Additionally, concerns were raised about custom agents missing in fresh worktree sessions and nested session accessibility for the ask_user tool.

#### 🚀 New Releases
- [v1.0.88-1](https://github.com/github/copilot-cli/releases/tag/v1.0.88-1) 1.0.88-1
- [v1.0.88-0](https://github.com/github/copilot-cli/releases/tag/v1.0.88-0) 1.0.88-0
- [v1.0.87](https://github.com/github/copilot-cli/releases/tag/v1.0.87) 1.0.87

#### 🐛 New Issues
- [#4926](https://github.com/github/copilot-cli/issues/4926) Atlassian MCP OAuth fails: redirect_uri port doesn't match declared client-metadata.json 💬1
- [#4924](https://github.com/github/copilot-cli/issues/4924) Desktop app: custom agents from .github/agents missing in fresh worktree sessions — config discovery runs before the deferred checkout populates the tree and agents are never re-scanned `triage` 💬1
- [#4921](https://github.com/github/copilot-cli/issues/4921) ask_user tool is not accessible in nested session `triage` 💬1
- [#4928](https://github.com/github/copilot-cli/issues/4928) Windows: multi-GiB native runtime memory bursts in desktop-hosted CLI 1.0.87-0, followed by same-process release `triage`
- [#4927](https://github.com/github/copilot-cli/issues/4927) GPT-6 Astra: long_context tier reports 872k prompt tokens while model capabilities report 1,050k `triage`
- [#4925](https://github.com/github/copilot-cli/issues/4925) Using playwright-cli tool classifies URLs as directories for permission prompting `triage`
- [#4923](https://github.com/github/copilot-cli/issues/4923) MCP OAuth: Figma token exchange fails with "Failed to parse server response" (distinct from #4870 / #4906) `triage`
- [#4922](https://github.com/github/copilot-cli/issues/4922) Feature request: Attach an existing chat or session to a Project `triage`
- [#4920](https://github.com/github/copilot-cli/issues/4920) Local stdio MCP server silently dropped during session-ID swap on startup (resume and /new ) `triage`

#### 🔒 Closed Issues
- [#3385](https://github.com/github/copilot-cli/issues/3385) [Bug] Can't running copilot cli 1.0.49 on wsl after upgrade copilot
- [#1313](https://github.com/github/copilot-cli/issues/1313) Session Branching
- [#3399](https://github.com/github/copilot-cli/issues/3399) Allow custom headers for BYOK
- [#3749](https://github.com/github/copilot-cli/issues/3749) [BUG]: Terminal streaming renderer corrupts output - characters doubled/truncated during streaming
- [#1663](https://github.com/github/copilot-cli/issues/1663) Bug: Agent implements changes during Plan Mode instead of only planning
- [#4211](https://github.com/github/copilot-cli/issues/4211) Copilot CLI couldn't handle BigInt in structured MCP response
- [#2223](https://github.com/github/copilot-cli/issues/2223) [CRITICAL BUG] CAPIError: 400 Invalid schema for function... for GPT models
- [#1859](https://github.com/github/copilot-cli/issues/1859) Support agent discovery from current working directory (nested .github/agents/)
- [#2629](https://github.com/github/copilot-cli/issues/2629) /instructions command does not show ~/.copilot/instructions/*.instructions.md user-level files
- [#2055](https://github.com/github/copilot-cli/issues/2055) Queued messages cannot be cleared without canceling running job
- [#1425](https://github.com/github/copilot-cli/issues/1425) update hook payload to send session id
- [#4253](https://github.com/github/copilot-cli/issues/4253) /ask frequently returns no result
- [#3315](https://github.com/github/copilot-cli/issues/3315) Research try to use not existing tool "create" for file save
- [#3119](https://github.com/github/copilot-cli/issues/3119) BYOK gpt-5.5 --effort xhigh falls back to medium for individual plan
- [#1971](https://github.com/github/copilot-cli/issues/1971) Feature Request: Granular organizational policies for Copilot CLI tools (e.g., bash, file access)
- [#2293](https://github.com/github/copilot-cli/issues/2293) copilot cli hooks not firing for background agent
- [#3469](https://github.com/github/copilot-cli/issues/3469) File @Mention is very slow for a large repository with ~150k files.
- [#2727](https://github.com/github/copilot-cli/issues/2727) Allow plugins to include instruction files
- [#25](https://github.com/github/copilot-cli/issues/25) Fields in /mcp add may not be visible when typing into them
- [#4926](https://github.com/github/copilot-cli/issues/4926) Atlassian MCP OAuth fails: redirect_uri port doesn't match declared client-metadata.json
- [#4853](https://github.com/github/copilot-cli/issues/4853) Linux sandbox hangs silently when the host denies namespace creation; the override env var is undocumented
- [#3875](https://github.com/github/copilot-cli/issues/3875) Unable to spawn subagents with `mai-code-1-flash-picker` when the main agent model is `gpt-5.4` or `gpt-5.5` with `deferTools: never` config
- [#2909](https://github.com/github/copilot-cli/issues/2909) Copilot CLI does not consistently apply path-scoped .instructions.md files when editing matching files
- [#2825](https://github.com/github/copilot-cli/issues/2825) CJK text wrapping error
- [#2517](https://github.com/github/copilot-cli/issues/2517) Sub-agent zoom (focus)
- [#2475](https://github.com/github/copilot-cli/issues/2475) [Bug]Custom agent appears duplicated in selection list and fails to load after restart
- [#2027](https://github.com/github/copilot-cli/issues/2027) /pr fix does not close feedback on the PR
- [#4281](https://github.com/github/copilot-cli/issues/4281) "Pending message" doesn't clear on correct timming
- [#1411](https://github.com/github/copilot-cli/issues/1411) Copilot CLI cannot see the commands you run via `!` prefix

### OpenCode (`anomalyco/opencode`)

**Stars:** 209,159 · **Open issues:** 6,052 · **Last push:** <1h ago

On September 22, 2026, OpenCode released version v1.18.32, which included critical bug fixes for Bedrock image attachments, ensuring compatibility with Claude, Nova, and Llama 4 models, and improved Together AI streaming usage reporting. Notable merged pull requests included the implementation of automatic tabs mode in the TUI, enhancements to Windows CI stability, and fixes addressing issues in the codemode and MCP sidebar state persistence. However, the day also saw several significant new issues, particularly #50452 regarding disappeared credits without logs or activity, which garnered considerable community attention with five comments. Overall, while today's updates were mostly routine maintenance, the issues raised highlighted ongoing concerns within the platform.

#### 🚀 New Releases
- [v1.18.32](https://github.com/anomalyco/opencode/releases/tag/v1.18.32) v1.18.32

#### ✅ Merged PRs
- [#50456](https://github.com/anomalyco/opencode/pull/50456) feat(tui): add automatic tabs mode
- [#50454](https://github.com/anomalyco/opencode/pull/50454) test: stabilize Windows CI without longer timeouts
- [#50455](https://github.com/anomalyco/opencode/pull/50455) feat(codemode): name the closest tool in unknown-tool errors
- [#50450](https://github.com/anomalyco/opencode/pull/50450) fix(codemode): live Map/Set forEach, generator prototypes, repeated function declarations, delete on non-references
- [#50447](https://github.com/anomalyco/opencode/pull/50447) fix(tui): persist MCP sidebar state

#### 🐛 New Issues
- [#50387](https://github.com/anomalyco/opencode/issues/50387) 糟糕的新界面布局 💬2
- [#50452](https://github.com/anomalyco/opencode/issues/50452) Credits dissapeared - no logs or activity 💬5
- [#50366](https://github.com/anomalyco/opencode/issues/50366) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode 💬4
- [#50465](https://github.com/anomalyco/opencode/issues/50465) After UI update, my account zeroed in WebUI 💬2
- [#50458](https://github.com/anomalyco/opencode/issues/50458) Bash tool stdout/stderr pipe corrupts multi-byte/long outputs (data integrity violation) 💬2
- [#50457](https://github.com/anomalyco/opencode/issues/50457) [Go] Weekly usage reaches 100% unexpectedly / unclear shared usage calculation 💬2
- [#50451](https://github.com/anomalyco/opencode/issues/50451) fix(opencode2): Zen free tier returns HTTP 426 for current 0.0.0 betas `2.0` 💬2
- [#50285](https://github.com/anomalyco/opencode/issues/50285) No streaming in v1.18.31: message.part.delta not published on /global/event (works in v1.18.4) 💬1
- [#50342](https://github.com/anomalyco/opencode/issues/50342) OpenCode Go Refund 💬1
- [#50467](https://github.com/anomalyco/opencode/issues/50467) Bad Request `needs:compliance` 💬1
- [#50420](https://github.com/anomalyco/opencode/issues/50420) Upstream request failed: An active OpenCode Go subscription is required to use Go models. 💬1
- [#50464](https://github.com/anomalyco/opencode/issues/50464) feat(cli): create-only --session-id flag for caller-chosen session IDs `needs:compliance` 💬1
- [#50424](https://github.com/anomalyco/opencode/issues/50424) Shell tool stays status=running after a fast-exiting command with no surviving descendant (1.18.30, server mode) 💬1
- [#50463](https://github.com/anomalyco/opencode/issues/50463) watcher: recursive watcher follows Windows directory junctions and hangs sessions in workspaces with junction-mirrored trees 💬1
- [#50398](https://github.com/anomalyco/opencode/issues/50398) Bug: New opencode.ai web UI deployment reset everything 💬1
- [#50446](https://github.com/anomalyco/opencode/issues/50446) provider: opencode-go gateway rejects ~148k input while catalog claims 1M context — 400 unrecoverable, body never surfaced 💬1
- [#50382](https://github.com/anomalyco/opencode/issues/50382) desktop(browser): embedded browser never persists cookies - logins (e.g. Google) lost on every app restart 💬1
- [#50461](https://github.com/anomalyco/opencode/issues/50461) Service startup discards failures from overlapping contenders
- [#50459](https://github.com/anomalyco/opencode/issues/50459) web: cannot add a project below 768px — "Add project" control absent from DOM in mobile layout
- [#50443](https://github.com/anomalyco/opencode/issues/50443) Persian context-tool count labels are translated as verbs
- [#50441](https://github.com/anomalyco/opencode/issues/50441) [FEATURE]: "GO" Badges for Request Log
- [#50434](https://github.com/anomalyco/opencode/issues/50434) plugins: local plugins cannot resolve "@opencode/plugin" import (2.0.12)
- [#50427](https://github.com/anomalyco/opencode/issues/50427) CLI/TUI cannot connect to a server URL with a path prefix (--server drops the base path)

#### 🔒 Closed Issues
- [#48811](https://github.com/anomalyco/opencode/issues/48811) macOS: every prompt fails with "undefined is not an object (evaluating 'a.name')"
- [#49158](https://github.com/anomalyco/opencode/issues/49158) TypeError: undefined is not an object (evaluating 'a.name')"
- [#48372](https://github.com/anomalyco/opencode/issues/48372) SystemPrompt.environment
- [#48645](https://github.com/anomalyco/opencode/issues/48645) Regression in 1.18.30: every prompt crashes with TypeError in SystemPrompt.environment ("a.name") — 1.18.18 works fine
- [#48803](https://github.com/anomalyco/opencode/issues/48803) v1.18.30: every prompt fails with TypeError (undefined layer node in Effect layer assembly during SystemPrompt.environment) — works on v1.18.20
- [#50452](https://github.com/anomalyco/opencode/issues/50452) Credits dissapeared - no logs or activity
- [#49685](https://github.com/anomalyco/opencode/issues/49685) Compiled builds crash on first prompt: undefined layer node from filesystem search import cycle

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,048 · **Open issues:** 1,502 · **Last push:** <1h ago

On September 22, 2026, Qwen Code released v0.24.3, which introduced structured shell results, trajectory metrics, and mobile navigation fixes in the Web Shell. Additionally, the nightly release v0.24.3-nightly.20260921.2800e9bb4f featured enhancements such as a monitor tool for system prompts and batched workspace session catalogs. Merged changes included improvements in notebook pagination handling, debug log cleanup, and recording review plans. A notable new issue emerged regarding Remote-SSH sessions failing with a `write EPIPE` error, highlighting ongoing challenges with the companion release v0.24.2.

#### 🚀 New Releases
- [v0.24.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.3) Release v0.24.3
- [v0.24.3-nightly.20260921.2800e9bb4f](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.3-nightly.20260921.2800e9bb4f) Release v0.24.3-nightly.20260921.2800e9bb4f
- [sdk-typescript-v0.1.14](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.14) SDK TypeScript Release v0.1.14
- [desktop-v0.24.3](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.3) Qwen Code Desktop v0.24.3

#### ✅ Merged PRs
- [#12421](https://github.com/QwenLM/qwen-code/pull/12421) fix(core): accept nullable pagination when reading notebooks
- [#12374](https://github.com/QwenLM/qwen-code/pull/12374) fix(cli): clean up stale session debug logs
- [#12369](https://github.com/QwenLM/qwen-code/pull/12369) feat(review): record what a plan was computed from, and report drift
- [#12370](https://github.com/QwenLM/qwen-code/pull/12370) fix(review): keep unplanned chunks out of coverage, and read the denominator from the plan

#### 🐛 New Issues
- [#12416](https://github.com/QwenLM/qwen-code/issues/12416) Remote-SSH: every POST /session fails with `write EPIPE` / `BridgeChannelClosedError` in companion 0.24.2, while the bundled CLI works standalone `priority/P1` `type/bug` `category/core` `scope/session-management` 💬7
- [#12414](https://github.com/QwenLM/qwen-code/issues/12414) ci(desktop-release): the Windows build runs a bash install step under pwsh, so v0.24.2 published no Windows artifact `priority/P1` `type/bug` `category/development` `scope/windows` 💬6
- [#12381](https://github.com/QwenLM/qwen-code/issues/12381) feat(daemon): recover the original session-create result after an HTTP gateway timeout `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬6
- [#12425](https://github.com/QwenLM/qwen-code/issues/12425) bug(core): the workflow keyword bridge sentence names tools CodeModeOnly hides and refuses `priority/P3` `type/bug` `category/core` `scope/cli` 💬5
- [#12417](https://github.com/QwenLM/qwen-code/issues/12417) tracking(cli): Follow up tool execution sandbox settings hardening `priority/P2` `type/bug` `category/security` `scope/settings` 💬5
- [#12380](https://github.com/QwenLM/qwen-code/issues/12380) proposal(serve): Define Managed Agent dual-path architecture and staged delivery `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬5
- [#12382](https://github.com/QwenLM/qwen-code/issues/12382) Release Failed for v0.24.2-nightly.20260921.5b60dd7000 on 2026-09-21 `type/bug` `status/ready-for-agent` `autofix/skip` 💬4
- [#12375](https://github.com/QwenLM/qwen-code/issues/12375) Windows daemon guard rejects benign explicit PowerShell invocations before execution `priority/P3` `category/security` `scope/shell` `scope/windows` 💬4
- [#12373](https://github.com/QwenLM/qwen-code/issues/12373) Session debug logs are not cleaned by background housekeeping `priority/P2` `type/bug` `category/performance` `scope/logging` 💬3
- [#12420](https://github.com/QwenLM/qwen-code/issues/12420) bug(core): Notebook reads reject null pagination and give conflicting recovery guidance `priority/P2` `type/bug` `category/tools` `scope/file-operations` 💬3
- [#12428](https://github.com/QwenLM/qwen-code/issues/12428) Ecosystem: ClawMetry — the Qwen Code reader is now free and open source (follow-up to #9294 / #9338) `priority/P3` `type/feature-request` `category/integration` `scope/documentation` 💬3
- [#12424](https://github.com/QwenLM/qwen-code/issues/12424) bug(core): the bundled-reference route cannot see a per-agent tool policy, so a skill-denied subagent gets a pointer it cannot follow `priority/P2` `type/bug` `category/core` `roadmap/subagents-tools` 💬3
- [#12413](https://github.com/QwenLM/qwen-code/issues/12413) Temp: Upload screenshots for PR #12412 💬3
- [#12401](https://github.com/QwenLM/qwen-code/issues/12401) Release Failed for v0.24.2-nightly.20260921.7f611d89fa on 2026-09-21 `type/bug` `status/ready-for-agent` `autofix/skip` 💬3
- [#12406](https://github.com/QwenLM/qwen-code/issues/12406) Desktop app: UI font is too small and there is no way to adjust it `priority/P2` `type/feature-request` `category/ui` `scope/keybindings` 💬3
- [#12405](https://github.com/QwenLM/qwen-code/issues/12405) perf(cli): one-shot headless follow-ups — startup latency and memory baseline `priority/P2` `category/performance` `scope/non-interactive` `scope/latency` 💬3
- [#12402](https://github.com/QwenLM/qwen-code/issues/12402) serve: no owner hint when the primary, or two workspaces, claim a user-scope startup channel `priority/P2` `type/bug` `category/cli` `scope/settings` 💬3
- [#12399](https://github.com/QwenLM/qwen-code/issues/12399) Standalone session turn-index returns 404 and degrades history navigation `status/in-review` `priority/P2` `type/bug` `category/cli` 💬3
- [#12394](https://github.com/QwenLM/qwen-code/issues/12394) Windows UIAccess worker exe is unsigned — `npm install @qwen-code/cua-sdk` postinstall fails `priority/P1` `type/bug` `category/platform` `scope/installation` 💬3
- [#12389](https://github.com/QwenLM/qwen-code/issues/12389) bug(acp-bridge): local published file:// artifacts persist as restorable and fail session restore `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#12376](https://github.com/QwenLM/qwen-code/issues/12376) Cant change model to Qwen code. Displays error : use /auth to re-authenticate.... `status/need-retesting` `priority/P3` `type/bug` `category/authentication` 💬3
- [#12427](https://github.com/QwenLM/qwen-code/issues/12427) Main CI failed: Qwen Code CI — src/ui/use-box-metrics-loop-guard.test.tsx > … > settles a cascade driven only by a hasMeasured transition (+2 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12426](https://github.com/QwenLM/qwen-code/issues/12426) Deferred review findings from PR #12404: fix(web-shell): preserve reference tags across reloads 💬2
- [#12411](https://github.com/QwenLM/qwen-code/issues/12411) Main CI failed: E2E Tests — sdk-typescript/mcp-server.test.ts > … > should use MCP add tool to add two numbers (+6 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2

#### 🔒 Closed Issues
- [#12414](https://github.com/QwenLM/qwen-code/issues/12414) ci(desktop-release): the Windows build runs a bash install step under pwsh, so v0.24.2 published no Windows artifact
- [#12373](https://github.com/QwenLM/qwen-code/issues/12373) Session debug logs are not cleaned by background housekeeping
- [#12420](https://github.com/QwenLM/qwen-code/issues/12420) bug(core): Notebook reads reject null pagination and give conflicting recovery guidance
- [#12249](https://github.com/QwenLM/qwen-code/issues/12249) feat(serve): list sessions across multiple workspaces in one catalog request
- [#12413](https://github.com/QwenLM/qwen-code/issues/12413) Temp: Upload screenshots for PR #12412
- [#12401](https://github.com/QwenLM/qwen-code/issues/12401) Release Failed for v0.24.2-nightly.20260921.7f611d89fa on 2026-09-21
- [#11873](https://github.com/QwenLM/qwen-code/issues/11873) # Fatal uncaught `Minified React error #185` from Ink layout-listener `setState` during commit
- [#12357](https://github.com/QwenLM/qwen-code/issues/12357) Main CI failed: E2E Tests — sdk-typescript/mcp-server.test.ts > … > should use MCP add tool to add two numbers (+6 more)
- [#11604](https://github.com/QwenLM/qwen-code/issues/11604) perf(web-shell): GET /workspace/providers is fetched twice on every page load
- [#11870](https://github.com/QwenLM/qwen-code/issues/11870) Release Failed for v0.23.4 on 2026-09-14

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 390,224 · **Open issues:** 8,325 · **Last push:** <1h ago

On September 22, 2026, OpenClaw released version 2026.7.35, an extended-stable gateway-only update that includes critical security updates, reliability and performance enhancements, and new model support, while the latest version remains 2026.9.5. Significant merged pull requests include a fix for control commands getting stuck behind active conversations and enhancements to speed up mock provider cursor retention tests. Among the various fixes, there was a correction to avoid duplicate runtime loading in Doctor tests and a clarification in update messages regarding in-progress updates. A notable new issue emerged concerning the leakage of temporary directories on every external plugin load, which accumulates substantial memory usage.

#### 🚀 New Releases
- [v2026.7.35](https://github.com/openclaw/openclaw/releases/tag/v2026.7.35) openclaw 2026.7.35

#### ✅ Merged PRs
- [#153829](https://github.com/openclaw/openclaw/pull/153829) fix(telegram): control commands get stuck behind active conversations
- [#155328](https://github.com/openclaw/openclaw/pull/155328) improve: speed up mock provider cursor retention tests
- [#155319](https://github.com/openclaw/openclaw/pull/155319) refactor: reuse HTTP completion gate test fixtures
- [#155291](https://github.com/openclaw/openclaw/pull/155291) refactor(sessions): share transcript worker request types
- [#155325](https://github.com/openclaw/openclaw/pull/155325) fix: avoid duplicate runtime loading in Doctor tests
- [#155304](https://github.com/openclaw/openclaw/pull/155304) fix(ci): run agents-support cleanup on the host thread
- [#155310](https://github.com/openclaw/openclaw/pull/155310) fix: preserve subagent results during graceful restart
- [#155312](https://github.com/openclaw/openclaw/pull/155312) fix(state): attribute database teardown failures to their test file
- [#155188](https://github.com/openclaw/openclaw/pull/155188) fix(update): clarify in-progress updates and snapshot warnings
- [#155210](https://github.com/openclaw/openclaw/pull/155210) fix(release): explain extended-stable release context
- [#155231](https://github.com/openclaw/openclaw/pull/155231) fix(ci): prevent false Security Review failures
- [#155124](https://github.com/openclaw/openclaw/pull/155124) fix(tests): isolate disk worker retirement assertions
- [#154711](https://github.com/openclaw/openclaw/pull/154711) fix(cloud): include SQLite authorization runtime in worker bundles
- [#155208](https://github.com/openclaw/openclaw/pull/155208) fix(scripts): remove runner latency from lifecycle termination checks
- [#155297](https://github.com/openclaw/openclaw/pull/155297) fix: batch adjacent SQLite cache exit cleanup
- [#155214](https://github.com/openclaw/openclaw/pull/155214) fix: review provider precautions before continuing chat
- [#154543](https://github.com/openclaw/openclaw/pull/154543) fix(update): record plugin Doctor failures as warnings after package installation
- [#125265](https://github.com/openclaw/openclaw/pull/125265) refactor(config): derive session visibility from protocol
- [#155307](https://github.com/openclaw/openclaw/pull/155307) fix(browser): preserve successor tabs during stale cleanup
- [#154828](https://github.com/openclaw/openclaw/pull/154828) fix: keep temporary filename overrides inside their directory
- [#152727](https://github.com/openclaw/openclaw/pull/152727) fix(update): bound interrupted-update settle probe and skip when service is unmanaged (#152542)
- [#154991](https://github.com/openclaw/openclaw/pull/154991) fix(gateway): keep session access and Stop bound to the original caller
- [#155311](https://github.com/openclaw/openclaw/pull/155311) fix: reduce QA bus media test overhead
- [#154932](https://github.com/openclaw/openclaw/pull/154932) fix(tasks): avoid false maintenance warnings during restart
- [#155217](https://github.com/openclaw/openclaw/pull/155217) refactor: consolidate nested Markdown list tests
- [#155114](https://github.com/openclaw/openclaw/pull/155114) fix(gateway): keep slow catalogs from blocking other session sources
- [#155098](https://github.com/openclaw/openclaw/pull/155098) refactor(gateway): remove node event test dependency registry
- [#155183](https://github.com/openclaw/openclaw/pull/155183) fix: Side chat blocks typing while answering
- [#155001](https://github.com/openclaw/openclaw/pull/155001) test(ci): split workflow coverage by responsibility
- [#155253](https://github.com/openclaw/openclaw/pull/155253) fix(agents): sessions_yield misreports no pending child when an earlier turn already waits on a running session
- [#153587](https://github.com/openclaw/openclaw/pull/153587) fix(agents): preserve indented code in streamed replies
- [#150911](https://github.com/openclaw/openclaw/pull/150911) fix(ui): preserve skill group expansion when filtering
- [#153576](https://github.com/openclaw/openclaw/pull/153576) fix(telegram): code blocks lose blank lines when replies are split
- [#155150](https://github.com/openclaw/openclaw/pull/155150) fix: keep mobile task progress collapsed by default
- [#155265](https://github.com/openclaw/openclaw/pull/155265) fix(daemon): preserve runtime paths during service reinstalls
- [#152574](https://github.com/openclaw/openclaw/pull/152574) fix(ui): remove empty space below roster agent headers
- [#155282](https://github.com/openclaw/openclaw/pull/155282) fix(plugins): skill previews wait for every supporting file
- [#155157](https://github.com/openclaw/openclaw/pull/155157) refactor(tasks): remove test runtime overrides
- [#155258](https://github.com/openclaw/openclaw/pull/155258) fix(protocol): expose suspension result validators to lifecycle clients
- [#155287](https://github.com/openclaw/openclaw/pull/155287) fix: allow pending answers during Gateway shutdown
- [#154522](https://github.com/openclaw/openclaw/pull/154522) feat: run Code Mode on Node or isolated QuickJS
- [#155071](https://github.com/openclaw/openclaw/pull/155071) fix(windows): restore Gateway model runs with worker metadata
- [#155052](https://github.com/openclaw/openclaw/pull/155052) fix(test): reuse caches across serial project runs
- [#153215](https://github.com/openclaw/openclaw/pull/153215) improve(ui): reuse incremental streaming Markdown normalization
- [#155268](https://github.com/openclaw/openclaw/pull/155268) fix(macos): backport native pipe drain ownership
- [#154305](https://github.com/openclaw/openclaw/pull/154305) fix: group chats stall when historyLimit is the JSON integer maximum
- [#155279](https://github.com/openclaw/openclaw/pull/155279) refactor: share dreaming wiki test snapshots
- [#154426](https://github.com/openclaw/openclaw/pull/154426) improve(ci): run embedded agent tests in parallel
- [#155252](https://github.com/openclaw/openclaw/pull/155252) chore(ui): refresh control ui locales
- [#142153](https://github.com/openclaw/openclaw/pull/142153) fix(cron): restored automation edits prompt for approval again
- [#154652](https://github.com/openclaw/openclaw/pull/154652) chore(deps): refresh dependencies with seven-day cutoff
- [#155278](https://github.com/openclaw/openclaw/pull/155278) fix(test): await the cron scheduler child's exit instead of a wall-clock kill
- [#155118](https://github.com/openclaw/openclaw/pull/155118) refactor: remove copied channel capability tests
- [#155274](https://github.com/openclaw/openclaw/pull/155274) fix(test): assert models.list cold-startup readiness on recorded facts
- [#147167](https://github.com/openclaw/openclaw/pull/147167) fix(tests): prevent session-send callbacks from outliving fixtures
- [#155266](https://github.com/openclaw/openclaw/pull/155266) fix(ci): identify changed PR fields in Security Review errors
- [#153212](https://github.com/openclaw/openclaw/pull/153212) improve(ui): cache repeated progress Markdown renders
- [#154872](https://github.com/openclaw/openclaw/pull/154872) fix: suppress false reply-failure warnings after stopping queued input
- [#155241](https://github.com/openclaw/openclaw/pull/155241) perf: reduce CPU for configured model listings
- [#155203](https://github.com/openclaw/openclaw/pull/155203) fix(release): accept queued producer identity
- [#154953](https://github.com/openclaw/openclaw/pull/154953) fix: avoid backup warnings for reclaimed scratch
- [#154088](https://github.com/openclaw/openclaw/pull/154088) fix(ci): run command tests across their allocated workers
- [#155249](https://github.com/openclaw/openclaw/pull/155249) fix(plugins): remove slot-switch notices after installation
- [#155234](https://github.com/openclaw/openclaw/pull/155234) fix(update): preserve validator causes in failure reports
- [#154804](https://github.com/openclaw/openclaw/pull/154804) perf(gateway): move worker inventory SQL off the main thread
- [#153307](https://github.com/openclaw/openclaw/pull/153307) fix(ui): polish command palette session settings
- [#155245](https://github.com/openclaw/openclaw/pull/155245) fix: use writer identity for PR merge recovery
- [#153683](https://github.com/openclaw/openclaw/pull/153683) refactor: compact agent storage and index full-text maintenance
- [#155239](https://github.com/openclaw/openclaw/pull/155239) fix(pr): resolve unsettled REST mergeability through GraphQL
- [#155153](https://github.com/openclaw/openclaw/pull/155153) fix(sessions): cancel pending archive work on retirement
- [#155250](https://github.com/openclaw/openclaw/pull/155250) fix(models): reduce repeated provider lookup overhead
- [#153314](https://github.com/openclaw/openclaw/pull/153314) fix(doctor): explain archived registry warnings after updates
- [#155254](https://github.com/openclaw/openclaw/pull/155254) perf(ci): avoid duplicate frozen Git object probes
- [#155207](https://github.com/openclaw/openclaw/pull/155207) fix(codex): reset native context after history cuts
- [#154920](https://github.com/openclaw/openclaw/pull/154920) fix(update): keep the failing step's cause in the failure summary
- [#155248](https://github.com/openclaw/openclaw/pull/155248) fix: Security Review fails after transient status publication errors
- [#155038](https://github.com/openclaw/openclaw/pull/155038) fix(android): keep gateway discovery current after service changes
- [#155092](https://github.com/openclaw/openclaw/pull/155092) test(update): prepare published survivor baselines by release train
- [#155138](https://github.com/openclaw/openclaw/pull/155138) fix(update): prevent database lock failures after validation
- [#155037](https://github.com/openclaw/openclaw/pull/155037) fix(android): restore video playback after switching media
- [#154492](https://github.com/openclaw/openclaw/pull/154492) fix(sqlite): keep local APFS databases writable after mount timeout
- [#155036](https://github.com/openclaw/openclaw/pull/155036) fix(android): unblock gateway switching after interrupted voice notes
- [#155035](https://github.com/openclaw/openclaw/pull/155035) fix(android): stop runs in explicitly owned sessions
- [#155177](https://github.com/openclaw/openclaw/pull/155177) fix(i18n): distinguish Thai question dismissal from cancellation
- [#154974](https://github.com/openclaw/openclaw/pull/154974) fix(scripts): verify batched PR wrapper reads
- [#147453](https://github.com/openclaw/openclaw/pull/147453) fix(doctor): preserve escaped references through config repair
- [#154613](https://github.com/openclaw/openclaw/pull/154613) chore(qa): cover CLI status and health snapshots
- [#154686](https://github.com/openclaw/openclaw/pull/154686) test(cli): restore skills process coverage
- [#154730](https://github.com/openclaw/openclaw/pull/154730) fix(ui): settle saved scroll positions once
- [#155181](https://github.com/openclaw/openclaw/pull/155181) fix(ui): keep typing responsive after mentioning a person
- [#153929](https://github.com/openclaw/openclaw/pull/153929) improve(test): reduce Doctor SQLite test time
- [#155112](https://github.com/openclaw/openclaw/pull/155112) fix(ci): stop inherited scheduled maintenance on forks
- [#148213](https://github.com/openclaw/openclaw/pull/148213) refactor(mcp): share scoped worker reads and batch requester status
- [#150234](https://github.com/openclaw/openclaw/pull/150234) fix(plugins): simplify installation and grouped settings
- [#155110](https://github.com/openclaw/openclaw/pull/155110) docs(pr): document and verify guarded Octopool landing
- [#154486](https://github.com/openclaw/openclaw/pull/154486) feat(ui): show optional-answer delivery and retry state
- [#155068](https://github.com/openclaw/openclaw/pull/155068) fix(feishu): preserve VC invitations after pre-adoption dispatch failures
- [#155170](https://github.com/openclaw/openclaw/pull/155170) fix(ci): skip superseded security review runs
- [#150903](https://github.com/openclaw/openclaw/pull/150903) fix(agents): emit plan events for CLI progress_card tool results
- [#154980](https://github.com/openclaw/openclaw/pull/154980) fix: personal USER context changes when another participant joins
- [#155129](https://github.com/openclaw/openclaw/pull/155129) fix(ci): recover security review from inconsistent file lists
- [#154321](https://github.com/openclaw/openclaw/pull/154321) fix(crabbox): skip unused startup and preserve provisioning waits
- [#155200](https://github.com/openclaw/openclaw/pull/155200) fix(ui): sidebar people view stays selected during owner refresh
- [#155216](https://github.com/openclaw/openclaw/pull/155216) fix(release): retain live provider drift detail
- [#137642](https://github.com/openclaw/openclaw/pull/137642) test(ui): reuse canonical agent deferred fixtures
- [#155240](https://github.com/openclaw/openclaw/pull/155240) test(e2e): observe runtime readiness before timeout policy
- [#155111](https://github.com/openclaw/openclaw/pull/155111) fix(test): await approval readiness and request cleanup
- [#154918](https://github.com/openclaw/openclaw/pull/154918) fix: model switches fail with an incompatible runtime pin
- [#152060](https://github.com/openclaw/openclaw/pull/152060) feat(crabbox): run native CUA in macOS and Windows cloud desktops
- [#155223](https://github.com/openclaw/openclaw/pull/155223) fix(ci): replay frozen Windows failures with exact test selection
- [#153962](https://github.com/openclaw/openclaw/pull/153962) ci: defer maintainer tooling on product-only PRs
- [#155233](https://github.com/openclaw/openclaw/pull/155233) fix(tasks): observe detached delivery failures
- [#155219](https://github.com/openclaw/openclaw/pull/155219) test: retain worker compiler context on transform failures
- [#155232](https://github.com/openclaw/openclaw/pull/155232) fix(ui): keep chat controls usable in narrow panes
- [#155228](https://github.com/openclaw/openclaw/pull/155228) fix(test): prevent port probes from colliding with fixture reservations
- [#154985](https://github.com/openclaw/openclaw/pull/154985) refactor(agents): keep announce overrides in test support
- [#154870](https://github.com/openclaw/openclaw/pull/154870) chore(ui): refresh control ui locales
- [#155215](https://github.com/openclaw/openclaw/pull/155215) fix(maintainer): recover Octopool 0.7.1 merge refusals
- [#155042](https://github.com/openclaw/openclaw/pull/155042) refactor(cron): reuse isolated-agent mock-call guards
- [#155169](https://github.com/openclaw/openclaw/pull/155169) fix(worktrees): preserve detached checkout state during retirement
- [#155220](https://github.com/openclaw/openclaw/pull/155220) fix(test): preserve survivor probe stderr after process exit
- [#155151](https://github.com/openclaw/openclaw/pull/155151) fix: delayed session replies stop after the caller finishes
- [#155221](https://github.com/openclaw/openclaw/pull/155221) test(ui): stabilize submenu pointer cleanup
- [#150313](https://github.com/openclaw/openclaw/pull/150313) refactor: move selected device identity lookups to the shared worker
- [#154917](https://github.com/openclaw/openclaw/pull/154917) fix(ui): reveal conversation markers after navigation and composer resize
- [#155213](https://github.com/openclaw/openclaw/pull/155213) fix(test): decide test-instance refusals on the child's exit fact
- [#152336](https://github.com/openclaw/openclaw/pull/152336) fix(qa-lab): keep mobile header and navigation usable
- [#154673](https://github.com/openclaw/openclaw/pull/154673) feat(gateway): download inline artifacts over HTTPS
- [#151815](https://github.com/openclaw/openclaw/pull/151815) refactor(tasks): move state notification acknowledgements off the Gateway thread
- [#155033](https://github.com/openclaw/openclaw/pull/155033) fix(workboard): find cards by their own IDs
- [#152397](https://github.com/openclaw/openclaw/pull/152397) fix(qa-lab): refresh Control UI links on URL updates
- [#145422](https://github.com/openclaw/openclaw/pull/145422) refactor(gateway): remove agent handler test dependency bag
- [#154988](https://github.com/openclaw/openclaw/pull/154988) fix(maintainer): recover locally refused auto-merge requests
- [#155075](https://github.com/openclaw/openclaw/pull/155075) fix(snapshot): preserve backups recovered during creation
- [#154930](https://github.com/openclaw/openclaw/pull/154930) fix(cron): silence missing-summary fallback for scheduled runs
- [#150235](https://github.com/openclaw/openclaw/pull/150235) feat(plugins): show installation progress and lifecycle spinners
- [#155009](https://github.com/openclaw/openclaw/pull/155009) fix(test): guard WAL recovery against the parent settlement barrier
- [#155127](https://github.com/openclaw/openclaw/pull/155127) fix(codex): retain recent answers after tool-heavy thread rotation
- [#147440](https://github.com/openclaw/openclaw/pull/147440) fix(config): preserve reference intent and file ownership during writes
- [#155197](https://github.com/openclaw/openclaw/pull/155197) fix(plugins): distinguish Voice with a microphone icon
- [#155087](https://github.com/openclaw/openclaw/pull/155087) fix: read PR mergeability as the authenticated writer
- [#155196](https://github.com/openclaw/openclaw/pull/155196) fix(ci): recover Security Review from HTTP 500 reads
- [#155180](https://github.com/openclaw/openclaw/pull/155180) fix(ui): find chat models by canonical ID
- [#154824](https://github.com/openclaw/openclaw/pull/154824) fix(release): extend npm readback window
- [#155104](https://github.com/openclaw/openclaw/pull/155104) fix(ui): stop Cmd+K results jittering while typing
- [#154484](https://github.com/openclaw/openclaw/pull/154484) fix: allow operator-scheduled automation updates
- [#155133](https://github.com/openclaw/openclaw/pull/155133) fix(update): fetch only the authoritative remote for dev-channel updates
- [#153761](https://github.com/openclaw/openclaw/pull/153761) fix(update): allow Git transfer packs larger than 256 MiB
- [#155187](https://github.com/openclaw/openclaw/pull/155187) fix(gateway): explain Goal runtime restrictions
- [#155093](https://github.com/openclaw/openclaw/pull/155093) test(update): preserve published plugin archives in survivor fixtures
- [#155032](https://github.com/openclaw/openclaw/pull/155032) fix(firecrawl): omit impossible publication dates from search results
- [#154792](https://github.com/openclaw/openclaw/pull/154792) fix(gateway): apply settings without unnecessary restarts
- [#155058](https://github.com/openclaw/openclaw/pull/155058) refactor: remove conversation test dependency overrides
- [#155069](https://github.com/openclaw/openclaw/pull/155069) perf(codex): discard unused tool-progress state
- [#154994](https://github.com/openclaw/openclaw/pull/154994) fix(memory): keep generated REM reflections out of promotion rankings
- [#154937](https://github.com/openclaw/openclaw/pull/154937) fix(sqlite): reclaim scratch files when storage is full
- [#154896](https://github.com/openclaw/openclaw/pull/154896) fix(update): report unavailable service inspection accurately
- [#154776](https://github.com/openclaw/openclaw/pull/154776) refactor(state): retire unused database mutation scopes
- [#155025](https://github.com/openclaw/openclaw/pull/155025) fix: recognize completed progress refresh retries
- [#155006](https://github.com/openclaw/openclaw/pull/155006) fix(test): prevent premature startup authentication test failures
- [#154162](https://github.com/openclaw/openclaw/pull/154162) ci: scope UI fallback to its consumers
- [#155185](https://github.com/openclaw/openclaw/pull/155185) fix(release): keep capped live smoke fallbacks
- [#155158](https://github.com/openclaw/openclaw/pull/155158) test(update): cover multi-provider published upgrade turns
- [#155174](https://github.com/openclaw/openclaw/pull/155174) fix(test): prevent premature media retention fixture expiry
- [#154332](https://github.com/openclaw/openclaw/pull/154332) chore: move Apple CI to Xcode 27
- [#155159](https://github.com/openclaw/openclaw/pull/155159) fix(plugins): retire model-catalog scratch captures with their run
- [#155029](https://github.com/openclaw/openclaw/pull/155029) fix(anthropic): retain replies when Claude fills its context window

#### 🐛 New Issues
- [#154571](https://github.com/openclaw/openclaw/issues/154571) 2026.9.5: /tmp/openclaw-plugin-build-* capture dirs leak on every external plugin load (~430 MB per agent turn, no reaper) `P1` `issue-rating: 🦪 silver shellfish` `impact:other` 💬12
- [#154381](https://github.com/openclaw/openclaw/issues/154381) [Bug]: 2026.9.4 updater cannot reach the 2026.9.5 timeout fix: candidate validation still capped at 300 seconds `bug` `bug:behavior` `clawsweeper:needs-live-repro` `P0` 💬6
- [#154572](https://github.com/openclaw/openclaw/issues/154572) 2026.9.5: sessions_spawn to a claude-cli-runtime child always fails with SessionTranscriptWriterClaimReboundError (~350 ms); CLI agent route works (related to #152659) `P1` `clawsweeper:needs-info` `impact:session-state` `impact:auth-provider` 💬5
- [#155290](https://github.com/openclaw/openclaw/issues/155290) Update failure: global-install-failed (2026.9.4) 💬4
- [#155243](https://github.com/openclaw/openclaw/issues/155243) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#155322](https://github.com/openclaw/openclaw/issues/155322) Live provider discovery mishandles wall-clock corrections during pagination `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#154423](https://github.com/openclaw/openclaw/issues/154423) Update failure: post-update-plugins (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#155314](https://github.com/openclaw/openclaw/issues/155314) [Feature]: Gate experimental Decision consumers behind Labs `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#155131](https://github.com/openclaw/openclaw/issues/155131) [Feature]: Decision-model feature work — umbrella `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬3
- [#155193](https://github.com/openclaw/openclaw/issues/155193) browser/service: 'deferred tracked browser tab ... browser-identity-lookup-failed' warns every 5 min for up to 24h after a managed profile is stopped `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#154973](https://github.com/openclaw/openclaw/issues/154973) 2026.9.5: prepared-model-catalog worker pool uses idleTimeoutMs: 0, so its temporaryDirectory (and every plugin capture nested inside it) is never reclaimed for the gateway's lifetime `impact:crash-loop` `P0` 💬3
- [#155155](https://github.com/openclaw/openclaw/issues/155155) [Feature]: Allow an explicitly opted-in non-loopback baseUrl for local System One decision providers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#155173](https://github.com/openclaw/openclaw/issues/155173) [Feature]: Core-owned protected references for browser authentication handoffs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#155179](https://github.com/openclaw/openclaw/issues/155179) [Bug]: Heartbeat reports success when HEARTBEAT.md work is skipped `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#155172](https://github.com/openclaw/openclaw/issues/155172) Update failure: doctor-failed (2026.9.4) 💬2
- [#155298](https://github.com/openclaw/openclaw/issues/155298) [Bug]: Matrix progress drafts fail with "Matrix runtime not initialized" during tool activity `bug` `regression` 💬2
- [#155309](https://github.com/openclaw/openclaw/issues/155309) [Feature]: Cover derived checkouts in the tooling tsx tsconfig pin and fail fast without one `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#155115](https://github.com/openclaw/openclaw/issues/155115) [Feature]: Provider-neutral decision_evaluate tool and capability discovery `enhancement` `maintainer` 💬2
- [#154416](https://github.com/openclaw/openclaw/issues/154416) [Bug]: Spurious "I couldn't confirm whether my previous reply reached this chat" notice when a message arrives while a queued reply is mid-send `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#155275](https://github.com/openclaw/openclaw/issues/155275) [Bug]: ClickClack reconnect does not recover after a server-pruned event cursor `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬2
- [#155267](https://github.com/openclaw/openclaw/issues/155267) workboard: cards created inside an agent session are bound to that session's lifecycle, so card status tracks an unrelated chat session (and can suppress dispatch) 💬2
- [#155123](https://github.com/openclaw/openclaw/issues/155123) [Feature]: Add first-class LocalAI provider with automatic model discovery `P3` `impact:auth-provider` 💬2
- [#155122](https://github.com/openclaw/openclaw/issues/155122) Update failure: finalize:doctor (2026.9.5) `clawsweeper:needs-info` `impact:session-state` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#155229](https://github.com/openclaw/openclaw/issues/155229) [Bug]: [Bug]: gateway auto-update writes malformed launchd plist, args shift by one, gateway dies exit 127 `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#155260](https://github.com/openclaw/openclaw/issues/155260) Session SQLite migration recovery report (clean-recovery) 💬2
- [#155116](https://github.com/openclaw/openclaw/issues/155116) Update failure: finalize:doctor (2026.9.5) 💬2
- [#155190](https://github.com/openclaw/openclaw/issues/155190) [Bug]: GPT-Live treats a non-fatal provider error before session.started as fatal, and a failed session leaves the phone call connected and silent `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#155113](https://github.com/openclaw/openclaw/issues/155113) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#155070](https://github.com/openclaw/openclaw/issues/155070) Dev update fails when an unrelated Git remote is unavailable `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#155189](https://github.com/openclaw/openclaw/issues/155189) [Bug]: iOS chat cannot open or download assistant document attachments that work on the web `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#155191](https://github.com/openclaw/openclaw/issues/155191) Native memory leak in 2026.9.5 — RSS grows ~1 GiB per 30 s while V8 heap stays stable `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬2
- [#154986](https://github.com/openclaw/openclaw/issues/154986) Manual CI preflight exceeds the job output limit with flat Node plans `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#155136](https://github.com/openclaw/openclaw/issues/155136) Session SQLite migration recovery report (session-sqlite-1790010900648-08d0ad97) `P3` 💬2
- [#155333](https://github.com/openclaw/openclaw/issues/155333) Cloud-worker dispatch aborts an active session before the replacement worker is ready 💬1
- [#155329](https://github.com/openclaw/openclaw/issues/155329) Terminated exec loses run correlation after cgroup SIGKILL; finalizer infers the wrong task from session context `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#155317](https://github.com/openclaw/openclaw/issues/155317) [Feature]: Enforce no-model baseline and fallback regressions for Decision consumers `enhancement` `maintainer` `P2` `impact:session-state` 💬1
- [#155316](https://github.com/openclaw/openclaw/issues/155316) [Feature]: Move Decision tool prefilter to core with harness capability gating `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#155302](https://github.com/openclaw/openclaw/issues/155302) [Bug]: GitHub publication can strand accepted PR receipts and local index transactions `maintainer` 💬1
- [#155222](https://github.com/openclaw/openclaw/issues/155222) Provider API key not picked up by view_image tool after config update, keychain update, auth profile deletion, and gateway restart 💬1
- [#155171](https://github.com/openclaw/openclaw/issues/155171) Session SQLite migration recovery report (session-sqlite-1790020639197-34b5ed7a) 💬1
- [#155303](https://github.com/openclaw/openclaw/issues/155303) Update failure: global-install-failed (2026.9.4) 💬1
- [#155163](https://github.com/openclaw/openclaw/issues/155163) 2026.9.5: orphaned subagent delivery pointers cannot be cleared once the task record is pruned (tasks dismiss: "Task not found"); context re-injects them for 30+ days 💬1
- [#155160](https://github.com/openclaw/openclaw/issues/155160) plugin-sdk: createOperatorApprovalsGatewayClient hardcodes scopes ["operator.approvals"] — allow callers to request the scopes their RPCs need `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#155224](https://github.com/openclaw/openclaw/issues/155224) Provider API key not picked up by view_image tool after config update, keychain update, auth profile deletion, and gateway restart `P2` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦐 gold shrimp` 💬1
- [#154370](https://github.com/openclaw/openclaw/issues/154370) Reuse released fs-safe for file writes, filenames, and hashes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#155257](https://github.com/openclaw/openclaw/issues/155257) Expose canonical suspension result validators for lifecycle clients `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#155119](https://github.com/openclaw/openclaw/issues/155119) Subagent completion: final answer lost (truncated-by-retention) + duplicate settle events + deliveryStatus stuck pending `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#155152](https://github.com/openclaw/openclaw/issues/155152) [Bug]: Windows: enabling Slack causes severe Gateway startup stalls on 2026.9.5 `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#154638](https://github.com/openclaw/openclaw/issues/154638) Refresh dependencies with a seven-day publication cutoff `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#155271](https://github.com/openclaw/openclaw/issues/155271) [Bug]: Voice Call hangs up before realtime farewell audio finishes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#155255](https://github.com/openclaw/openclaw/issues/155255) Allow users to edit their personal USER.md in Profile settings `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#155137](https://github.com/openclaw/openclaw/issues/155137) feat(perplexity): add optional Agent API research tool `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#155242](https://github.com/openclaw/openclaw/issues/155242) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#155148](https://github.com/openclaw/openclaw/issues/155148) [Feature]: Expose runTimeoutSeconds on the Plugin SDK's subagent.run() API `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#155041](https://github.com/openclaw/openclaw/issues/155041) Gateway crashes with uncaught_exception on provider HTTP 400 during model inference `clawsweeper:needs-info` `impact:session-state` `impact:crash-loop` `P0` 💬1
- [#155236](https://github.com/openclaw/openclaw/issues/155236) Add a purpose/description field to node pairing requests and nodes list `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#155227](https://github.com/openclaw/openclaw/issues/155227) [Feature]: Actionable plugin permission diagnostics and upgrade warnings (exploratory PRD) `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#155048](https://github.com/openclaw/openclaw/issues/155048) Managed detached worktrees cannot retire without losing exact staging state `maintainer` 💬1
- [#155205](https://github.com/openclaw/openclaw/issues/155205) openclaw agent CLI hangs after plugin init when a context-engine plugin is configured (gateway HTTP path unaffected) — v2026.4.9 `P2` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#155146](https://github.com/openclaw/openclaw/issues/155146) [Bug]: Native Codex plan/progress-card update can surface before the turn's first visible assistant text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#155202](https://github.com/openclaw/openclaw/issues/155202) [Bug]: openclaw-plugin-build-* temp dirs are never reclaimed on process exit (355 GiB accumulated on one host in ~3 days) `bug` `bug:behavior` `P1` `impact:other` 💬1
- [#155045](https://github.com/openclaw/openclaw/issues/155045) [Bug]: CI bounded session reclamation assertion observes zero freelist progress `bug` `maintainer` 💬1
- [#155039](https://github.com/openclaw/openclaw/issues/155039) [Feature]: Manual team-sidebar agent section order via synced display preferences 💬1
- [#154743](https://github.com/openclaw/openclaw/issues/154743) [Bug]: Session PR cache reuses results after the session is replaced `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#155162](https://github.com/openclaw/openclaw/issues/155162) [Bug]: Update reports failure after successful activation — read-only state snapshot never stabilizes while the restarted Gateway writes; `update repair` blocked identically `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#155156](https://github.com/openclaw/openclaw/issues/155156) [Bug]: Session SQLite migration blocked by retained_plugin_source_conflict after upgrading to 2026.9.5 `bug` `regression` `impact:session-state` `P0` 💬1
- [#155334](https://github.com/openclaw/openclaw/issues/155334) Self-heal AGENT DB size alert's suggested remedy (memory reset + VACUUM + reindex) doesn't durably reduce size; real consumer is legitimate session/memory embeddings
- [#154984](https://github.com/openclaw/openclaw/issues/154984) [Bug]: Workboard search does not match card IDs
- [#155198](https://github.com/openclaw/openclaw/issues/155198) Update failure: finalize:doctor (2026.9.5)

#### 🔒 Closed Issues
- [#154571](https://github.com/openclaw/openclaw/issues/154571) 2026.9.5: /tmp/openclaw-plugin-build-* capture dirs leak on every external plugin load (~430 MB per agent turn, no reaper)
- [#146637](https://github.com/openclaw/openclaw/issues/146637) [Bug]: 2026.9.3 → 2026.9.4 npm update fails at global install swap on Linux Mint; initiating error truncated
- [#90944](https://github.com/openclaw/openclaw/issues/90944) [Bug]: sessions_yield resume reply recorded but not delivered; auto-announce direct-text mirror delivered instead → user gets child raw summary, not parent reply
- [#41899](https://github.com/openclaw/openclaw/issues/41899) Feature Request: Plugin Circuit Breaker for graceful degradation
- [#145865](https://github.com/openclaw/openclaw/issues/145865) sessions_send A2A announce delivery dropped: agent tool caller authority is no longer active (deferred announce runs after caller run ends)
- [#67177](https://github.com/openclaw/openclaw/issues/67177) [msteams] Inbound file attachments silently fail in DMs — file.download.info downloadUrl not rewritten to Graph shares endpoint
- [#133174](https://github.com/openclaw/openclaw/issues/133174) Question: why does every inbound group message carry a replay of the last 50, when the whole thread is resent each turn?
- [#142393](https://github.com/openclaw/openclaw/issues/142393) [Bug]: Deep-dreaming promotes low-value, zero-recall snippets into MEMORY.md and grows it past the bootstrap char cap
- [#47811](https://github.com/openclaw/openclaw/issues/47811) Multi-profile profile targeting/config truth is ambiguous with ~/.openclaw-* homes on macOS
- [#153985](https://github.com/openclaw/openclaw/issues/153985) Update failure: doctor-failed (2026.9.4)
- [#154423](https://github.com/openclaw/openclaw/issues/154423) Update failure: post-update-plugins (2026.9.5)
- [#152542](https://github.com/openclaw/openclaw/issues/152542) update: an interrupted update run makes almost every CLI command block for over a minute on every invocation, permanently, until openclaw update repair
- [#29707](https://github.com/openclaw/openclaw/issues/29707) [Feature Request]: Native Prompt Caching Support for Amazon Nova (Bedrock)
- [#154973](https://github.com/openclaw/openclaw/issues/154973) 2026.9.5: prepared-model-catalog worker pool uses idleTimeoutMs: 0, so its temporaryDirectory (and every plugin capture nested inside it) is never reclaimed for the gateway's lifetime
- [#85687](https://github.com/openclaw/openclaw/issues/85687) Bug: heartbeat transcript repair artifacts can pollute later context
- [#153744](https://github.com/openclaw/openclaw/issues/153744) [Bug]: a corrupted xAI OAuth token response silently replaces the working refresh token and signs the operator out
- [#152541](https://github.com/openclaw/openclaw/issues/152541) [Bug]: Large gap below agent headers in the all-agents sidebar
- [#155123](https://github.com/openclaw/openclaw/issues/155123) [Feature]: Add first-class LocalAI provider with automatic model discovery
- [#155260](https://github.com/openclaw/openclaw/issues/155260) Session SQLite migration recovery report (clean-recovery)
- [#154195](https://github.com/openclaw/openclaw/issues/154195) [Bug]: Summarization request sends orphaned tool_choice without tools — 400 on strict OpenAI-compatible backends (vLLM), breaking compaction
- [#144371](https://github.com/openclaw/openclaw/issues/144371) Emit channel-visible notice when session model switches
- [#144370](https://github.com/openclaw/openclaw/issues/144370) Persist and retry pending channel deliveries across gateway restart drain
- [#155070](https://github.com/openclaw/openclaw/issues/155070) Dev update fails when an unrelated Git remote is unavailable
- [#56132](https://github.com/openclaw/openclaw/issues/56132) [Feature]:
- [#150805](https://github.com/openclaw/openclaw/issues/150805) [Bug]: claude-cli runtime: progress_card plan updates never reach channel progress drafts (Codex shows checklist)
- [#153970](https://github.com/openclaw/openclaw/issues/153970) backup create --verify fails with SQLite path aliases multiple core database owners in 2026.9.5
- [#154986](https://github.com/openclaw/openclaw/issues/154986) Manual CI preflight exceeds the job output limit with flat Node plans
- [#155136](https://github.com/openclaw/openclaw/issues/155136) Session SQLite migration recovery report (session-sqlite-1790010900648-08d0ad97)
- [#155257](https://github.com/openclaw/openclaw/issues/155257) Expose canonical suspension result validators for lifecycle clients
- [#154638](https://github.com/openclaw/openclaw/issues/154638) Refresh dependencies with a seven-day publication cutoff
- [#153254](https://github.com/openclaw/openclaw/issues/153254) [Bug]: Doctor error: archived registry identity changed
- [#155242](https://github.com/openclaw/openclaw/issues/155242) Update failure: plugin-target-unavailable (2026.9.4)
- [#155148](https://github.com/openclaw/openclaw/issues/155148) [Feature]: Expose runTimeoutSeconds on the Plugin SDK's subagent.run() API
- [#155048](https://github.com/openclaw/openclaw/issues/155048) Managed detached worktrees cannot retire without losing exact staging state
- [#144373](https://github.com/openclaw/openclaw/issues/144373) Add structured truncation flag to tool results
- [#144372](https://github.com/openclaw/openclaw/issues/144372) sessions_history: add server-side filtering, summary mode, and durable compaction archive
- [#144374](https://github.com/openclaw/openclaw/issues/144374) Add toolsAllow filter to sessions_spawn for scoped subagent tool access
- [#155146](https://github.com/openclaw/openclaw/issues/155146) [Bug]: Native Codex plan/progress-card update can surface before the turn's first visible assistant text
- [#144369](https://github.com/openclaw/openclaw/issues/144369) Session transcript: add per-turn origin attribution (main agent vs mirrored process, model ID)
- [#155202](https://github.com/openclaw/openclaw/issues/155202) [Bug]: openclaw-plugin-build-* temp dirs are never reclaimed on process exit (355 GiB accumulated on one host in ~3 days)
- [#154743](https://github.com/openclaw/openclaw/issues/154743) [Bug]: Session PR cache reuses results after the session is replaced
- [#155162](https://github.com/openclaw/openclaw/issues/155162) [Bug]: Update reports failure after successful activation — read-only state snapshot never stabilizes while the restarted Gateway writes; `update repair` blocked identically
- [#155156](https://github.com/openclaw/openclaw/issues/155156) [Bug]: Session SQLite migration blocked by retained_plugin_source_conflict after upgrading to 2026.9.5
- [#154984](https://github.com/openclaw/openclaw/issues/154984) [Bug]: Workboard search does not match card IDs
- [#155198](https://github.com/openclaw/openclaw/issues/155198) Update failure: finalize:doctor (2026.9.5)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 247,786 · **Open issues:** 43,516 · **Last push:** <1h ago

On September 21, 2026, Hermes Agent released v0.21.4, a patch version that consolidates approximately 1,800 pull requests merged since v0.21.3, ensuring stability for downstream consumers, while detailed release notes will be provided in v0.22.0. No new features were merged in the last 24 hours, but several critical issues were reported, including a bug (#118538) with the OMH pre_tool_call that vetoes all tools on the multiplex gateway and a significant issue (#118053) where image rejection leads to the permanent deletion of every image in the session state. Another notable issue involves the desktop settings where model writes incorrectly apply to all profiles after a host-backend collapse (#118431). Overall, the day was largely focused on addressing these emerging issues and ensuring the platform's reliability post-release.

#### 🚀 New Releases
- [v2026.9.21](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.9.21) Hermes Agent v0.21.4 (v2026.9.21)

#### 🐛 New Issues
- [#118538](https://github.com/NousResearch/hermes-agent/issues/118538) OMH pre_tool_call vetoes ALL tools on multiplex gateway (missing profile scope) `type/bug` `comp/gateway` `comp/tui` `comp/plugins` 💬3
- [#118643](https://github.com/NousResearch/hermes-agent/issues/118643) Desktop "Update Hermes" + --no-gateway-restart leaves --external-supervisor gateway on stale sys.modules (ImportError) `type/bug` `comp/gateway` `P2` `sweeper:risk-compatibility` 💬1
- [#118628](https://github.com/NousResearch/hermes-agent/issues/118628) Desktop: closing a session tile force-interrupts a mid-flight turn and the interrupted reply is never rendered (error_retained=False) `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop` 💬2
- [#118026](https://github.com/NousResearch/hermes-agent/issues/118026) [Bug][Windows] hermes_state_lockguard.py 未处理 fcntl.F_RDLCK 缺失，导致后端启动失败 `type/bug` `P0` `sweeper:risk-platform-windows` `comp/desktop` 💬2
- [#118431](https://github.com/NousResearch/hermes-agent/issues/118431) [Bug]: Desktop Settings → Models write applies to every profile after host-backend collapse (v0.21.3) `type/bug` `area/config` `P2` `sweeper:risk-compatibility` 💬1
- [#118658](https://github.com/NousResearch/hermes-agent/issues/118658) streaming_tts_consumer: 2 test failures + pending-task teardown warning on current main `type/bug` `comp/gateway` `tool/tts` `P3` 💬1
- [#118622](https://github.com/NousResearch/hermes-agent/issues/118622) [Bug]: claude-subscription-directsdk — cache-read frozen at a fixed prefix, transcript re-written every tool round (28.9× cache writes vs Claude Code) `type/perf` `comp/plugins` `provider/anthropic` `P3` 💬1
- [#118282](https://github.com/NousResearch/hermes-agent/issues/118282) [Bug]: /update fleet restart: first profile claims host lock, default Telegram exits 78 and the rest of the bots stay down `type/bug` `comp/gateway` `platform/telegram` `area/config` 💬1
- [#118053](https://github.com/NousResearch/hermes-agent/issues/118053) [Bug]: an image rejection permanently deletes every image in the session from state.db `type/bug` `comp/agent` `tool/vision` `P1` 💬1
- [#118618](https://github.com/NousResearch/hermes-agent/issues/118618) get_default_hermes_root lets Path.resolve OSError escape `type/bug` `area/config` `P2` 💬1
- [#118619](https://github.com/NousResearch/hermes-agent/issues/118619) [Bug]: camofox VNC live-view link is never discovered — reads vncPort from /health, which camofox-browser does not expose `type/bug` `tool/browser` `P3` 💬1
- [#118349](https://github.com/NousResearch/hermes-agent/issues/118349) [Bug]: Slack thread-parent message_changed (reply metadata update) is replayed as a new user turn after gateway restart `type/bug` `comp/plugins` `platform/slack` `P3` 💬1
- [#118589](https://github.com/NousResearch/hermes-agent/issues/118589) Voice mode (TUI gateway): reply is never spoken when a turn ends by iteration budget `type/bug` `comp/cli` `comp/tui` `tool/tts` 💬1
- [#118595](https://github.com/NousResearch/hermes-agent/issues/118595) fix(usage): auxiliary task kanban_decomposer produces no session_model_usage rows (cost unattributed) `type/bug` `comp/agent` `comp/cron` `P3` 💬1
- [#118594](https://github.com/NousResearch/hermes-agent/issues/118594) fix(pricing): user-defined provider (billing "custom") prices every row $0 — even for models with official pricing `type/bug` `comp/agent` `provider/deepseek` `P2` 💬1
- [#118566](https://github.com/NousResearch/hermes-agent/issues/118566) [Bug]: Bot Mode group chat renders shape/color glyphs instead of configured avatars for local bots `type/bug` `P3` `comp/desktop` `area/profiles` 💬1
- [#118580](https://github.com/NousResearch/hermes-agent/issues/118580) [Bug] Compression attempt telemetry never carries seeded fields (aux_prompt_tokens, middle_window_tokens always null) `type/bug` `comp/agent` `P3` `sweeper:risk-session-state` 💬1
- [#118388](https://github.com/NousResearch/hermes-agent/issues/118388) doctor/gateway status: no detection for a platform token duplicated across local profile homes (pre---clone-channels profiles collide silently) `type/feature` `comp/cli` `comp/gateway` `platform/telegram` 💬1
- [#118310](https://github.com/NousResearch/hermes-agent/issues/118310) [Bug]: isolated per-profile dashboard re-registers dashboard_auth from the default profile's config - correct password rejected, other profile's password accepted `type/bug` `duplicate` `area/auth` `P2` 💬1
- [#118662](https://github.com/NousResearch/hermes-agent/issues/118662) fix(agent): image_url format rejection permanently marks model as image-rejecting for the session `type/bug` `comp/agent` `tool/vision` `provider/openai`
- [#118664](https://github.com/NousResearch/hermes-agent/issues/118664) secrets: bitwarden sync --apply ignores override_existing and clobbers vars the dry-run skipped `type/bug` `comp/cli` `area/auth` `area/config`
- [#118653](https://github.com/NousResearch/hermes-agent/issues/118653) Dashboard: detached owner loses async delegation completion when another session drains queue `type/bug` `comp/tui` `tool/delegate` `P2`
- [#118654](https://github.com/NousResearch/hermes-agent/issues/118654) approval: WHERE in a comment, literal, or later statement clears the DELETE FROM rule `type/security` `tool/terminal` `P3`
- [#118659](https://github.com/NousResearch/hermes-agent/issues/118659) test_control_socket fleet test: expects status 'stale', fleet reports 'external' — fails on current main `type/bug` `comp/cli` `comp/gateway` `P3`
- [#118648](https://github.com/NousResearch/hermes-agent/issues/118648) anthropic pinned at 0.87.0 (58 releases behind): httpx→httpx2 swap blocks 1.x, fixable without version-gating `type/bug` `comp/agent` `provider/anthropic` `P3`
- [#118633](https://github.com/NousResearch/hermes-agent/issues/118633) Desktop toolset toggle writes to wrong profile on multiplex (cross-profile leak) `type/bug` `area/config` `P2` `sweeper:risk-compatibility`
- [#118635](https://github.com/NousResearch/hermes-agent/issues/118635) Bug: deliver_to_live_owner admits deliveries that can never be claimed by non-canonical owners (silent dead-drop) `type/bug` `comp/tools` `comp/tui` `P2`
- [#118630](https://github.com/NousResearch/hermes-agent/issues/118630) skills_sync replaces a symlinked skill entry with a real directory copy on update `type/bug` `comp/cli` `tool/skills` `P2`
- [#118627](https://github.com/NousResearch/hermes-agent/issues/118627) Aux title_generation 400s on custom endpoints that only accept reasoning_effort [low, high, max] — vocabulary rejection not classified `type/bug` `comp/agent` `provider/openai` `area/config`
- [#118621](https://github.com/NousResearch/hermes-agent/issues/118621) cron: a stale per-job provider pin shadows the still-valid global provider and hard-blocks the run `type/bug` `comp/cron` `area/config` `P2`
- [#118599](https://github.com/NousResearch/hermes-agent/issues/118599) [Feature]: Expose candidate-token probabilities (logprobs/top_logprobs) so a local llama.cpp model can serve bounded decisions `type/feature` `comp/agent` `P3` `needs-decision`
- [#118603](https://github.com/NousResearch/hermes-agent/issues/118603) fix(kanban): auto-decompose retries a failing triage card every dispatcher tick forever (no attempt cap/backoff, hidden at debug level) `type/bug` `comp/gateway` `comp/cron` `P3`
- [#118605](https://github.com/NousResearch/hermes-agent/issues/118605) hermes peer prints peer-controlled text to the terminal unsanitized (ANSI/OSC injection) `type/security` `comp/cli` `P3`
- [#118607](https://github.com/NousResearch/hermes-agent/issues/118607) kanban: LLM decompose response has no fan-out bound (500+ children in one transaction) `type/bug` `comp/cron` `P3`
- [#118570](https://github.com/NousResearch/hermes-agent/issues/118570) [Feature]: Native WhatsApp voice calls (Cloud API Calling) — inbound first, as a consumer of the realtime voice contract `type/feature` `comp/gateway` `platform/whatsapp` `P3`
- [#118572](https://github.com/NousResearch/hermes-agent/issues/118572) MCP server-controlled metadata bypasses unicode-tag sanitization (sampling, elicitation, result metadata) `type/security` `comp/tools` `tool/mcp` `P3`

#### 🔒 Closed Issues
- [#118026](https://github.com/NousResearch/hermes-agent/issues/118026) [Bug][Windows] hermes_state_lockguard.py 未处理 fcntl.F_RDLCK 缺失，导致后端启动失败
- [#118282](https://github.com/NousResearch/hermes-agent/issues/118282) [Bug]: /update fleet restart: first profile claims host lock, default Telegram exits 78 and the rest of the bots stay down
- [#118053](https://github.com/NousResearch/hermes-agent/issues/118053) [Bug]: an image rejection permanently deletes every image in the session from state.db
- [#102213](https://github.com/NousResearch/hermes-agent/issues/102213) [Bug]: /goal stalls after non-failed max_iterations_reached summary in Desktop

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,367 · **Open issues:** 8,279 · **Last push:** <1h ago

On September 22, 2026, there were no new releases for vLLM, but several important updates were merged, including crucial bug fixes and performance improvements. Notable changes include the bugfix for stateless first-chunk classification in PR #51565 and enhancements to the GLM sparse MLA preparation process in PR #57458, which reduces overhead. Additionally, PR #53423 introduced first-class KV hints request envelopes for more efficient KV management. Among the new issues, #57944 stands out, identifying a misclassification of successful diarized transcriptions as streaming, highlighting ongoing challenges with batch processing. Overall, the day was focused on making stability and performance improvements rather than introducing new features.

#### ✅ Merged PRs
- [#51565](https://github.com/vllm-project/vllm/pull/51565) [Bugfix][GDN] Fix stateless first-chunk classification
- [#55390](https://github.com/vllm-project/vllm/pull/55390) [Bugfix] Annotate MTP draft KV cache groups positionally on the hybrid grouping path
- [#57458](https://github.com/vllm-project/vllm/pull/57458) [Perf][Attention] Reduce GLM sparse MLA preparation overhead
- [#57951](https://github.com/vllm-project/vllm/pull/57951) [Scheduler] Soften Long Prefill Tokens Threshhold
- [#57965](https://github.com/vllm-project/vllm/pull/57965) [CI] Split (H200) LM Eval Large Models into per-model jobs
- [#57737](https://github.com/vllm-project/vllm/pull/57737) [Pooling] MRV2 pooling shutdown model ref
- [#51360](https://github.com/vllm-project/vllm/pull/51360) [Frontend] Add reusable TP1 initialized-engine snapshots
- [#57984](https://github.com/vllm-project/vllm/pull/57984) [Bugfix][Kernel] Skip the fused silu-mul block-quant fast path when a swiglu clamp is set
- [#57871](https://github.com/vllm-project/vllm/pull/57871) [CI][Build] Harden triton-cpu sleef submodule fetch in CPU image build
- [#50592](https://github.com/vllm-project/vllm/pull/50592) [Kimi-K3][AMD] Return KDA and MLA projection outputs directly
- [#55608](https://github.com/vllm-project/vllm/pull/55608) [Docker] Use zstd for CI images and offer a Docker Hub variant
- [#57866](https://github.com/vllm-project/vllm/pull/57866) [Bugfix][ROCm] Reject unsupported EP for monolithic AITER MXFP4 MoE
- [#57867](https://github.com/vllm-project/vllm/pull/57867) [Bugfix][MoE] Reject hash routing for unsupported monolithic backends
- [#57937](https://github.com/vllm-project/vllm/pull/57937) [Engram] Drop redundant VLLM_PLE_CPU_OFFLOAD env var
- [#54185](https://github.com/vllm-project/vllm/pull/54185) [ROCm][Perf] Route the fused shared-expert gate GEMM through the platform dispatcher
- [#57910](https://github.com/vllm-project/vllm/pull/57910) [Docs] Add an Engram feature page explaining Engram usage in vLLM
- [#53423](https://github.com/vllm-project/vllm/pull/53423) [Feature] Add first-class KV hints request envelope for programmatic KV management
- [#57931](https://github.com/vllm-project/vllm/pull/57931) [ROCm][CI] Use ROCm backend for DeepSeek V4.1 ViT test
- [#57967](https://github.com/vllm-project/vllm/pull/57967) [MM] Move get_dummy_processor_inputs into MM processor
- [#55767](https://github.com/vllm-project/vllm/pull/55767) [Bugfix] unskip InternViT test for transformers v5 compatibility
- [#55001](https://github.com/vllm-project/vllm/pull/55001) [ROCm] Refactor tuned gemms
- [#57869](https://github.com/vllm-project/vllm/pull/57869) [ROCm][Tests] Reduce host memory when downcasting FP32 HF references
- [#57876](https://github.com/vllm-project/vllm/pull/57876) [CI][ROCm] Add ten AMD parity groups
- [#57389](https://github.com/vllm-project/vllm/pull/57389) [Bugfix][NIXL] Fix DCP pulls across MLA cache regions
- [#57958](https://github.com/vllm-project/vllm/pull/57958) [docs] Fix legacy hf CLI references (vllm)
- [#53743](https://github.com/vllm-project/vllm/pull/53743) [Bugfix] Fix external LB DP rank handling when replicas share nodes
- [#52362](https://github.com/vllm-project/vllm/pull/52362) [ROCm][DSv4] Enable DSpark adaptive verification
- [#57498](https://github.com/vllm-project/vllm/pull/57498) [Pooling] Fix normalization of chunked long-text embeddings
- [#57948](https://github.com/vllm-project/vllm/pull/57948) [Bugfix][Frontend] Accept diarized transcription responses in run-batch
- [#57913](https://github.com/vllm-project/vllm/pull/57913) [MM] Move `supports_multimodal_inputs` and cache out of registry
- [#57922](https://github.com/vllm-project/vllm/pull/57922) [Frontend] Add streaming parity tests and docs for derender
- [#57234](https://github.com/vllm-project/vllm/pull/57234) [Bugfix][Multimodal] Tolerate malformed EXIF in Molmo 2 image preprocessing
- [#57889](https://github.com/vllm-project/vllm/pull/57889) [CI][XPU] Deselect Ray UT in XPU V1 test Job
- [#57833](https://github.com/vllm-project/vllm/pull/57833) [Security] Prefer fresh multimodal payloads over a stale receiver cache
- [#57545](https://github.com/vllm-project/vllm/pull/57545) [Test] Organize structured output utility tests
- [#57906](https://github.com/vllm-project/vllm/pull/57906) [Bugfix][ROCm][DSv4.1] Disable SWA bounded replay on ROCm
- [#45635](https://github.com/vllm-project/vllm/pull/45635) [AuxOutput] Add block-keyed storage for routed-expert outputs
- [#57903](https://github.com/vllm-project/vllm/pull/57903) [CI][ROCm] Increase timeout for MI300 Distributed DP Extended
- [#57870](https://github.com/vllm-project/vllm/pull/57870) [CI][ROCm] Make Python-only installation failures blocking
- [#57877](https://github.com/vllm-project/vllm/pull/57877) [CI][ROCm] Mirror remaining portable suites without duplicate coverage
- [#54535](https://github.com/vllm-project/vllm/pull/54535) [AMD][Minimax-M3][perf] Enable packed LBHNC AITER QK-norm fusion for MiniMax-M3 on ROCm
- [#57783](https://github.com/vllm-project/vllm/pull/57783) [Core][KDA] Generalize Mamba prefill checkpoint builder and exporter
- [#57651](https://github.com/vllm-project/vllm/pull/57651) [Model][Engram] Share host tables across co-located DP replicas by default
- [#57526](https://github.com/vllm-project/vllm/pull/57526) [Perf][ROCm] Add a ROCm path for Hy4 and compile the backbone
- [#57874](https://github.com/vllm-project/vllm/pull/57874) [Bugfix][DSV4.1] Restrict mHC overlap to full CUDA graphs

#### 🐛 New Issues
- [#57944](https://github.com/vllm-project/vllm/issues/57944) [Bug]: Batch runner misclassifies a successful diarized transcription as streaming `bug` 💬5
- [#57976](https://github.com/vllm-project/vllm/issues/57976) [ROCm][Perf][GLM-5.3-Flash]: Clean up KDA decode hot path `feature request` `rocm` `glm` 💬4
- [#57974](https://github.com/vllm-project/vllm/issues/57974) [Bug]: V1 `InputBatch` retains prompt-embedding tensors after requests finish `bug` 💬4
- [#57971](https://github.com/vllm-project/vllm/issues/57971) [Perf] SM8x sparse-MLA prefill fallback re-reads the shared MLA latent once per head (~64x redundant KV traffic) 💬4
- [#57956](https://github.com/vllm-project/vllm/issues/57956) [Bug]: AMD mirror declarations disagree with test-amd.yaml steps - declared MI355/MI250 groups carry the MI300 agent pool and gfx942 lanes `rocm` 💬4
- [#58035](https://github.com/vllm-project/vllm/issues/58035) [Bug]: DiffusionGemma: tensor shape mismatch in post_norm under concurrent decode (inputs_embeds vs silently-clamped sc_embeds) `quantization` 💬3
- [#57935](https://github.com/vllm-project/vllm/issues/57935) [Bug]: `/v1/chat/completions/batch` leaks hidden reasoning through logprobs and token IDs when `include_reasoning=false` `bug` `tool-calling` 💬3
- [#57999](https://github.com/vllm-project/vllm/issues/57999) [Bug]: cancelling a background `/v1/responses` that already finished is refused with "Cannot cancel a synchronous response." `bug` 💬3
- [#57950](https://github.com/vllm-project/vllm/issues/57950) [Bug]: FunctionGemma rejects hyphenated tool names only in non-streaming responses `bug` `tool-calling` 💬3
- [#57981](https://github.com/vllm-project/vllm/issues/57981) [Bug]: Humming linear backend breaks torch.compile — json.loads in humming_forward causes Dynamo graph break (W8A16-FP8 unusable) `torch.compile` 💬3
- [#57938](https://github.com/vllm-project/vllm/issues/57938) [Bug]: AssertionError in _update_from_kv_xfer_finished when LMCache KV load fails on heterogeneous attention models `bug` `rocm` `kv-connector` 💬3
- [#57890](https://github.com/vllm-project/vllm/issues/57890) [Bug]: HunYuan Dense V1 fails CUDA graph capture on v0.29 — HF dynamic RoPE does a host-side sync during capture `bug` 💬3
- [#57997](https://github.com/vllm-project/vllm/issues/57997) [Bug]: `/v1/messages` returns two different error envelopes. Request-validation errors come back in the OpenAI shape, with a Python repr inside the message `bug` 💬2
- [#57960](https://github.com/vllm-project/vllm/issues/57960) [Feature]: [ROCm][AITER][Hy4] Enable gfx950 MXFP8 MoE and dense linear backends `feature request` `rocm` 💬2
- [#57961](https://github.com/vllm-project/vllm/issues/57961) [RFC]: Add native AliceAI model support `RFC` `kimi` 💬2
- [#57941](https://github.com/vllm-project/vllm/issues/57941) [Bug]: Spec decode hits illegal memory access when the draft model's context is shorter than the target's `speculative-decoding` 💬2
- [#57927](https://github.com/vllm-project/vllm/issues/57927) [Bug]: Chunked embeddings break dot-product scoring with `use_activation=true `bug` 💬2
- [#57929](https://github.com/vllm-project/vllm/issues/57929) [Bug]: `/v1/completions/derender` drops requested `prompt_logprobs` `bug` 💬2
- [#58029](https://github.com/vllm-project/vllm/issues/58029) [Bug]: Whisper `verbose_json` silently drops the words after the last complete segment at every chunk cut (long audio); `json`/`text` keep them 💬1
- [#58034](https://github.com/vllm-project/vllm/issues/58034) [Bug]: Hybrid Mamba/GDN P/D disaggregation is unreachable on CPU — DS conv-layout assert vs the platform's forced SD `kv-connector` 💬1
- [#58017](https://github.com/vllm-project/vllm/issues/58017) [Feature]: ROCm MoRI elastic EP fault tolerance `feature request` `rocm` 💬1
- [#58009](https://github.com/vllm-project/vllm/issues/58009) [ROCm][Perf][GLM-5.3-Flash]: Implement fit_kpool_indices_to_aiter as a single triton kernel `feature request` `rocm` `glm` 💬1
- [#57986](https://github.com/vllm-project/vllm/issues/57986) [Bug]: `allowed_token_ids` + `bad_words` can emit tokens outside the allowlist `bug` 💬1
- [#57936](https://github.com/vllm-project/vllm/issues/57936) [Bug]: --kv-cache-memory suggestion double-counts CUDAGraph memory (regression of #37426, reintroduced by #49208) `bug` 💬1
- [#57894](https://github.com/vllm-project/vllm/issues/57894) [Bug]: deepep_low_latency buffer sizing ignores EPLB redundant experts — 32 GiB limit hit, documented 2048 threshold is stale 💬1
- [#57895](https://github.com/vllm-project/vllm/issues/57895) [RFC]: Stable runtime tensor lifecycle for sleep and live weight reload `RFC` `quantization` 💬1
- [#57883](https://github.com/vllm-project/vllm/issues/57883) [Bug]: Async EPLB silently stops making progress — rearrangement step counter runs away negative forever, no warning/error (EP16 cross-node, use_async=True, communicator=nixl) `rocm` `kv-connector` 💬1
- [#57878](https://github.com/vllm-project/vllm/issues/57878) [Bug]: fp8 FlashMLA sparse decode crashes at engine init with --enforce-eager on SM90 (dummy-run aten::new_empty dispatch failure, size-dependent) 💬1
- [#58039](https://github.com/vllm-project/vllm/issues/58039) [Bug]: keep-mode pause stops pending KV receive polling with HiSparse/NIXL `kv-connector`
- [#58033](https://github.com/vllm-project/vllm/issues/58033) [Bug]: NixlConnector CPU core reservation ignores the cgroup cpuset, killing the worker in containers
- [#58031](https://github.com/vllm-project/vllm/issues/58031) FlashInfer autotune for trtllm_fp4_block_scale_moe wedges forever on SM103 (GB300): trtllm_gemm cubin is sm_100a-only, no PTX, and the autotuner has no timeout
- [#58020](https://github.com/vllm-project/vllm/issues/58020) [Bug]: Engine-resolved prefix-cache match unit is not propagated to workers
- [#57998](https://github.com/vllm-project/vllm/issues/57998) [Bug]: `/v1/responses` output items are always `status: "completed"`, even inside an incomplete response `bug`
- [#57996](https://github.com/vllm-project/vllm/issues/57996) [Bug]: `echo: true` silently stops echoing when the unrelated `return_token_ids: true` is also set `bug`
- [#57955](https://github.com/vllm-project/vllm/issues/57955) [Bug]: decorate_logs corrupts JSON log output
- [#57932](https://github.com/vllm-project/vllm/issues/57932) [Bug]: SM120 / RTX PRO 6000 Blackwell: GLM-5.3-Flash fails with FlashInfer attention backend `bug` `glm`
- [#57853](https://github.com/vllm-project/vllm/issues/57853) [Bug]: A weight update issued while the engine is asleep segfaults the EngineCore instead of being rejected `rl`
- [#57847](https://github.com/vllm-project/vllm/issues/57847) [Bug]: DecodeBenchConnector repeats KV cache fills for shared state tensors at large batch sizes `bug`

#### 🔒 Closed Issues
- [#24885](https://github.com/vllm-project/vllm/issues/24885) [RFC] Clarifying vLLM Shutdown Semantics
- [#27828](https://github.com/vllm-project/vllm/issues/27828) [Performance][torch.compile]: Inductor partition performance issues
- [#11577](https://github.com/vllm-project/vllm/issues/11577) [Usage]: embeddings API when task is generate
- [#31124](https://github.com/vllm-project/vllm/issues/31124) [Bug]: vllm.entrypoints.openai.api_server started but can't be accessed in wsl
- [#44660](https://github.com/vllm-project/vllm/issues/44660) [Installation]: ROCm install silently falls back to CUDA abi3 wheel on Python < 3.12 (no ROCm abi3 / cp311 / cp313 wheels)
- [#34781](https://github.com/vllm-project/vllm/issues/34781) [Feature]: parity with cuda - ROCm Kimi K2.5 disagg PD +wideEP recipe
- [#57944](https://github.com/vllm-project/vllm/issues/57944) [Bug]: Batch runner misclassifies a successful diarized transcription as streaming
- [#5449](https://github.com/vllm-project/vllm/issues/5449) [Usage]: How to serve embedding model and LLM at the same time
- [#57971](https://github.com/vllm-project/vllm/issues/57971) [Perf] SM8x sparse-MLA prefill fallback re-reads the shared MLA latent once per head (~64x redundant KV traffic)
- [#51562](https://github.com/vllm-project/vllm/issues/51562) [Bug]: GatedDeltaNet metadata builder classifies a stateless first chunk as a decode (same root cause as #51483)
- [#57999](https://github.com/vllm-project/vllm/issues/57999) [Bug]: cancelling a background `/v1/responses` that already finished is refused with "Cannot cancel a synchronous response."
- [#51971](https://github.com/vllm-project/vllm/issues/51971) [Bug]: Qwen3 MoE GPTQ `qzeros` shape mismatch on ROCm gfx1201
- [#35987](https://github.com/vllm-project/vllm/issues/35987) [Performance]: Very slow GGUF quantized model
- [#56422](https://github.com/vllm-project/vllm/issues/56422) [Bug][XPU]: Kimi-K3 MLA fused ops not registered on XPU — Kimi-Linear-48B crashes on first attention forward
- [#58039](https://github.com/vllm-project/vllm/issues/58039) [Bug]: keep-mode pause stops pending KV receive polling with HiSparse/NIXL

### SGLang (`sgl-project/sglang`)

**Stars:** 36,276 · **Open issues:** 5,352 · **Last push:** <1h ago

On September 22, 2026, SGLang did not release any new versions, but a number of significant changes were merged into the codebase. Notably, PR #33520 enabled KV Canary on Intel XPU, and PR #40640 addressed a CUDA graph stream explosion issue, enhancing stability for Kimi K3. Improvements were also made for AMD hardware, with PRs #38875 and #39339 working on QSA MQA decode optimization and JIT kernel builds respectively. Additionally, new issues were raised, including bug #40623, which highlights an illegal memory access in the Triton fused-MoE kernel when using specific configurations, signaling a potential area for urgent attention.

#### ✅ Merged PRs
- [#33520](https://github.com/sgl-project/sglang/pull/33520) [Intel][XPU][KVCanary] Enable KV Canary on Intel XPU
- [#40540](https://github.com/sgl-project/sglang/pull/40540) [XPU][ci]: disable XPU NIXL disaggregation test
- [#40640](https://github.com/sgl-project/sglang/pull/40640) [Kimi K3] Fix CUDA graph stream explosion
- [#38875](https://github.com/sgl-project/sglang/pull/38875) [AMD] Pad QSA MQA decode Q-heads to 16 for ROCm MFMA
- [#40654](https://github.com/sgl-project/sglang/pull/40654) Fix lint failure from draft-decode window test location
- [#39338](https://github.com/sgl-project/sglang/pull/39338) [AMD] [GLM-5.3-Flash Day 0] Enable zero-RoPE MHA prefill on ROCm
- [#40646](https://github.com/sgl-project/sglang/pull/40646) [Fix] Keep diffusion encoder TP context bindings consistent
- [#40371](https://github.com/sgl-project/sglang/pull/40371) [NPU][BugFix] Avoid M-RoPE recompilation for variable sequence lengths
- [#32673](https://github.com/sgl-project/sglang/pull/32673) [Spec] Windowed draft-decode attention for built-in EAGLE / MTP drafts
- [#33778](https://github.com/sgl-project/sglang/pull/33778) Avoid materializing GDN QKV tensors during target verification
- [#37507](https://github.com/sgl-project/sglang/pull/37507) [unified-memory] Hierarchical cache for every unified pool shape
- [#40642](https://github.com/sgl-project/sglang/pull/40642) [Fix] Run KV canary hooks for context-parallel prefill
- [#40310](https://github.com/sgl-project/sglang/pull/40310) Support GLM-5.3-Flash hybrid attention CPU offload and PD index mapping
- [#40499](https://github.com/sgl-project/sglang/pull/40499) [Spec][PP] Launch extend microbatches before the spec output exchange
- [#39775](https://github.com/sgl-project/sglang/pull/39775) [ROCm] fix: remove extra bf16 -> fp32 cast in jit grouped topk kernel path
- [#40603](https://github.com/sgl-project/sglang/pull/40603) [sgl-router] Release cancelled circuit-breaker probes
- [#40527](https://github.com/sgl-project/sglang/pull/40527) [CI] Split the CI control labels into four axes and resolve them live
- [#40570](https://github.com/sgl-project/sglang/pull/40570) [AMD] Enable HiCache for GLM-5.2 MI355X throughput recipe
- [#39339](https://github.com/sgl-project/sglang/pull/39339) [AMD] [GLM-5.3-Flash Day 0] Build the fused DSA k-pool top-k JIT kernel on HIP
- [#40622](https://github.com/sgl-project/sglang/pull/40622) Add MiMo-V2.6 cookbook
- [#40632](https://github.com/sgl-project/sglang/pull/40632) [Refactor] Clean up parallel runtime comments
- [#40607](https://github.com/sgl-project/sglang/pull/40607) Fix GLM-5.3 forget-gate shape for nvCUTEDSL verify
- [#39987](https://github.com/sgl-project/sglang/pull/39987) [AMD] Tune Qwen3.5 TP4 GDN recurrent launch on gfx950
- [#40617](https://github.com/sgl-project/sglang/pull/40617) [Test] Anchor `basic_perf` thresholds to each metric's measured spread
- [#40620](https://github.com/sgl-project/sglang/pull/40620) [CI] Bump sgl-eval to 0.1.2
- [#39175](https://github.com/sgl-project/sglang/pull/39175) [Fix] Don't free the multi-CTAs KV counter the decode graphs captured
- [#40345](https://github.com/sgl-project/sglang/pull/40345) Bringing the parallel runtime up becomes a phase, not a side effect
- [#40618](https://github.com/sgl-project/sglang/pull/40618) Fix lint failure from MXFP8 reserved-slot test location
- [#40343](https://github.com/sgl-project/sglang/pull/40343) Retire the per-runner parallel record
- [#40344](https://github.com/sgl-project/sglang/pull/40344) Take the parallel getters off the package's public surface
- [#40342](https://github.com/sgl-project/sglang/pull/40342) Deprecate the parallel getters the context answers, and ratchet them shut
- [#40341](https://github.com/sgl-project/sglang/pull/40341) A runner and the objects it builds freeze the placement they describe
- [#40340](https://github.com/sgl-project/sglang/pull/40340) Check the topology identities where the layout is written, and build at the published widths
- [#40602](https://github.com/sgl-project/sglang/pull/40602) chore: add NIXL owners and CI access
- [#40339](https://github.com/sgl-project/sglang/pull/40339) State the draft's whole topology in its scope, and read the rest from the context
- [#39026](https://github.com/sgl-project/sglang/pull/39026) feat: use XGrammar V4.1 DSML parameter constraints
- [#40610](https://github.com/sgl-project/sglang/pull/40610) Update DeepSeek-V4 Pro for B200 FP4 agentic PD disaggregation
- [#39986](https://github.com/sgl-project/sglang/pull/39986) [AMD] Use Triton softmax routing for Qwen3.5 on gfx950
- [#40611](https://github.com/sgl-project/sglang/pull/40611) Revert "[Diffusion] migrate the whole _register_configs from registry.py to the model own config file"
- [#37762](https://github.com/sgl-project/sglang/pull/37762) [AMD] Fix DeepSeek-R1-MXFP4 accuracy with AITER FP8
- [#40475](https://github.com/sgl-project/sglang/pull/40475) [Diffusion] migrate the whole _register_configs from registry.py to the model own config file
- [#40256](https://github.com/sgl-project/sglang/pull/40256) Preallocate HiCache MHA staging before post-capture KV sizing
- [#40278](https://github.com/sgl-project/sglang/pull/40278) [HiCache] TMA-staged host<->device KV transfer kernel (sm_90+)
- [#40517](https://github.com/sgl-project/sglang/pull/40517) [KDA] Enable ReplaySSM for GLM-5.3 Flash
- [#37889](https://github.com/sgl-project/sglang/pull/37889) [AMD] Enable GLM DSA prefill top-k to the v2 kernel
- [#35351](https://github.com/sgl-project/sglang/pull/35351) [mxfp8-kv] Skip writes to the reserved CUDA-graph padding slot
- [#40391](https://github.com/sgl-project/sglang/pull/40391) [sgl-router] Bound streaming lifetimes and release guards on idle disconnect
- [#40505](https://github.com/sgl-project/sglang/pull/40505) [Test] Split the serving perf tests by topic into `basic_perf/` and route their thresholds through a kit
- [#39993](https://github.com/sgl-project/sglang/pull/39993) [Observability] Expose python/rust frontend identity in `/server_info`
- [#40573](https://github.com/sgl-project/sglang/pull/40573) [docs] Qwen-Image-2.1 cookbook: ComfyUI sections, trimmed examples, and the RTX 5090 DiT-resident recipe (1.42x)
- [#40577](https://github.com/sgl-project/sglang/pull/40577) [Docs][NPU] Add MiMo-V2.5-Pro FP4 DFlash best practice on Ascend NPU
- [#40575](https://github.com/sgl-project/sglang/pull/40575) [NPU] [DOC] Add kimi k3 cookbook for 950PR/DT Series
- [#40532](https://github.com/sgl-project/sglang/pull/40532) [sgl-router] Add SGLang-compatible DeepSeek V4.1 Flash rendering
- [#40530](https://github.com/sgl-project/sglang/pull/40530) [sgl-router] Match DeepSeek V4 rendering to SGLang
- [#40390](https://github.com/sgl-project/sglang/pull/40390) [sgl-router] Add Kimi-K3 rendering with SGLang parity
- [#40113](https://github.com/sgl-project/sglang/pull/40113) [AMD][DI][CI] Add a SPUR cluster profile to AMD DI CI
- [#40544](https://github.com/sgl-project/sglang/pull/40544) [NPU][Diffusion] Disable loading latency checks in Ascend fixtures
- [#40537](https://github.com/sgl-project/sglang/pull/40537) [sgl-router] Fix reorg admission proxy test build after BucketResolver::new
- [#40554](https://github.com/sgl-project/sglang/pull/40554) [Fix] Add gigachat35 to the tool-call and reasoning parser name lists
- [#40271](https://github.com/sgl-project/sglang/pull/40271) [sgl-router] refactor - generalized admission policy definitions
- [#40549](https://github.com/sgl-project/sglang/pull/40549) [NPU][CI] Fix paths-filter negation that makes every PR run the NPU tier
- [#39956](https://github.com/sgl-project/sglang/pull/39956) [ci][xpu] Record device time in the multimodal_gen perf lane

#### 🐛 New Issues
- [#40574](https://github.com/sgl-project/sglang/issues/40574) [Feature][DSv4.1] Tracking: every backend's two-level candidate indexer behind CandidateIndexer 💬2
- [#40623](https://github.com/sgl-project/sglang/issues/40623) [Bug] Illegal memory access in the Triton fused-MoE kernel when `flashinfer_megamoe` is combined with EAGLE speculative decoding (GLM-5.2-NVFP4, sm_107) 💬1
- [#40627](https://github.com/sgl-project/sglang/issues/40627) [Bug] launch_server hangs forever with no error when /tmp is noexec (NUMA wrapper script cannot be executed) 💬1
- [#40558](https://github.com/sgl-project/sglang/issues/40558) [Bug] sm_120 - tvm.error.InternalError: Error in function 'TllmGenFmhaRunner' at sglang/lib/python3.12/site-packages/flashinfer/data/include/flashinfer/trtllm/fmha/fmhaRunner.cuh:37: Unsupported architecture 💬1
- [#40522](https://github.com/sgl-project/sglang/issues/40522) [RFC] Decouple the SWA sidecar page size from the full-attention page size (DSv4, Hybrid Models)
- [#40624](https://github.com/sgl-project/sglang/issues/40624) [AMD][Feature] enable triton TLX
- [#40564](https://github.com/sgl-project/sglang/issues/40564) [Bug] MooncakeHostTensorAllocator wraps a null pointer from the host allocator instead of failing at the allocation site
- [#40562](https://github.com/sgl-project/sglang/issues/40562) [Bug][Diffusion] Warmup request finalization reloads offloaded components and triggers OOM on Wan2.2 A14B
- [#40529](https://github.com/sgl-project/sglang/issues/40529) [tracking] thinking models + stop_sequences: five related defects — content loss, misreported stop_reason, enable_thinking ignored (PRs #33151–#33155)

#### 🔒 Closed Issues
- [#16255](https://github.com/sgl-project/sglang/issues/16255) [Feature] deepseek_v2.py Refactor
- [#32143](https://github.com/sgl-project/sglang/issues/32143) [RFC][PD] Seamless P-to-D handoff via token replay
- [#32158](https://github.com/sgl-project/sglang/issues/32158) [Bug] /v1/loads undercounts running requests with pipeline parallelism
- [#39103](https://github.com/sgl-project/sglang/issues/39103) [Bug] doesnt support include_reasoning false still produces it in responses, chat completions, completions
- [#32101](https://github.com/sgl-project/sglang/issues/32101) [Feature][MLX] Gemma 4 text generation on Apple Silicon
- [#32204](https://github.com/sgl-project/sglang/issues/32204) [Bug] DFlash aux hidden state capture fails when target_layer_ids includes the last decoder layer (qwen3_5 IndexError)
- [#32264](https://github.com/sgl-project/sglang/issues/32264) [Feature][MLX] Gemma 4 MTP speculative decoding on Apple Silicon
- [#32250](https://github.com/sgl-project/sglang/issues/32250) [Bug] --quantization marlin is accepted by CLI but missing from the registry
- [#32202](https://github.com/sgl-project/sglang/issues/32202) [Bug] Speculative draft auto load format does not resolve object-storage paths
- [#32169](https://github.com/sgl-project/sglang/issues/32169) [Bug] InternVL2_5-2B fails to start: 'CLIPImageProcessor' object has no attribute 'tokenizer' in get_tokenizer_from_processor

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,104 · **Open issues:** 2,540 · **Last push:** <1h ago

On September 22, 2026, llama.cpp released several new versions, including b11094, which updated cpp-httplib to version 0.57.1, and b11093, which fixed mask bounds in the flash attention block pre-pass. Additionally, b11090 addressed a compilation error related to CUDA sm_70 tiles. Notable merged features included a new HMX-optimized GATED_DELTA_NET and improvements to environment variable configurations for model parameters. However, a significant new issue emerged today with the router mode failing to load models, despite standalone models functioning correctly, drawing attention from the community.

#### 🚀 New Releases
- [b11094](https://github.com/ggml-org/llama.cpp/releases/tag/b11094) b11094
- [b11093](https://github.com/ggml-org/llama.cpp/releases/tag/b11093) b11093
- [b11090](https://github.com/ggml-org/llama.cpp/releases/tag/b11090) b11090
- [b11081](https://github.com/ggml-org/llama.cpp/releases/tag/b11081) b11081
- [b11080](https://github.com/ggml-org/llama.cpp/releases/tag/b11080) b11080
- [b11078](https://github.com/ggml-org/llama.cpp/releases/tag/b11078) b11078
- [b11077](https://github.com/ggml-org/llama.cpp/releases/tag/b11077) b11077
- [b11076](https://github.com/ggml-org/llama.cpp/releases/tag/b11076) b11076
- [b11075](https://github.com/ggml-org/llama.cpp/releases/tag/b11075) b11075
- [b11074](https://github.com/ggml-org/llama.cpp/releases/tag/b11074) b11074

#### ✅ Merged PRs
- [#29199](https://github.com/ggml-org/llama.cpp/pull/29199) hexagon: new HMX-optimized GATED_DELTA_NET
- [#29239](https://github.com/ggml-org/llama.cpp/pull/29239) vendor : update cpp-httplib to 0.57.1
- [#28518](https://github.com/ggml-org/llama.cpp/pull/28518) json: Fixed json enum handling
- [#29220](https://github.com/ggml-org/llama.cpp/pull/29220) metal : fix mask bounds in flash attention block pre-pass
- [#29238](https://github.com/ggml-org/llama.cpp/pull/29238) test-save-load-state : compare logits with NMSE and feed expected tokens
- [#26625](https://github.com/ggml-org/llama.cpp/pull/26625) llama-context : report graph inputs and input tensors during sched reserve
- [#29224](https://github.com/ggml-org/llama.cpp/pull/29224) CUDA: fix sm_70 tile compilation error
- [#29155](https://github.com/ggml-org/llama.cpp/pull/29155) ggml-cuda : convert contiguous tensors four elements at a time
- [#29135](https://github.com/ggml-org/llama.cpp/pull/29135) cuda : accelerate conv2d with implicit GEMM
- [#28536](https://github.com/ggml-org/llama.cpp/pull/28536) CUDA: Follow up of #25635, refactoring FA shared smem swizzle
- [#29227](https://github.com/ggml-org/llama.cpp/pull/29227) ggml : fix dimension and stride truncation in ggml_permute
- [#29214](https://github.com/ggml-org/llama.cpp/pull/29214) vendor : update cpp-httplib to 0.57.0
- [#28895](https://github.com/ggml-org/llama.cpp/pull/28895) sycl : pinned memory uses right device context instead of 0
- [#28938](https://github.com/ggml-org/llama.cpp/pull/28938) server : do not forward --api-key-file to router-spawned child instances
- [#29140](https://github.com/ggml-org/llama.cpp/pull/29140) tests : remove stale comment
- [#29207](https://github.com/ggml-org/llama.cpp/pull/29207) docker : bump cuda to 13.4.1
- [#29132](https://github.com/ggml-org/llama.cpp/pull/29132) sycl : support gated DSV4_HC_PRE and optional HC_POST comb matrix
- [#29133](https://github.com/ggml-org/llama.cpp/pull/29133) test-llama-archs : make tensor data stdev configurable and improve help
- [#29204](https://github.com/ggml-org/llama.cpp/pull/29204) tests/test-backend-ops : allow regex entries in the -o filter
- [#28991](https://github.com/ggml-org/llama.cpp/pull/28991) ci : refactor build-self-hosted into backend-specific workflows
- [#27380](https://github.com/ggml-org/llama.cpp/pull/27380) common/args: add env vars for temperature, top-p, min-p and penalties
- [#29206](https://github.com/ggml-org/llama.cpp/pull/29206) ggml-metal : simplify fusion pattern op list declaration
- [#29203](https://github.com/ggml-org/llama.cpp/pull/29203) convert: enable --fuse-qkv for muse-glimmer
- [#28918](https://github.com/ggml-org/llama.cpp/pull/28918) sycl : coalesce MKL-FA softmax loads instead of one work-item per row
- [#23492](https://github.com/ggml-org/llama.cpp/pull/23492) ggml-cpu: ARM Repack kernels for Q1_0
- [#29202](https://github.com/ggml-org/llama.cpp/pull/29202) ci: Upgrade CUDA to 13.4 for Ubuntu CUDA Release Builds
- [#29197](https://github.com/ggml-org/llama.cpp/pull/29197) hexagon: overhaul of buffer and DMA handling to support 64bit mappings and general improvements
- [#28912](https://github.com/ggml-org/llama.cpp/pull/28912) tune MMVQ to MMQ crossover for SM70 (Volta)
- [#29136](https://github.com/ggml-org/llama.cpp/pull/29136) metal : fix deprecation warnings from macOS 27 SDK
- [#28976](https://github.com/ggml-org/llama.cpp/pull/28976) ggml-webgpu: add fused gated_delta_net + cpy

#### 🐛 New Issues
- [#29225](https://github.com/ggml-org/llama.cpp/issues/29225) Misc. bug: Router mode fails to load models but standalone models work `bug-unconfirmed` 💬5
- [#29222](https://github.com/ggml-org/llama.cpp/issues/29222) Compile bug: Build error with sm_70 on Windows 11 `bug-unconfirmed` 💬2
- [#29240](https://github.com/ggml-org/llama.cpp/issues/29240) Eval bug: Muse Glimmer unparsed peg-negative output `bug-unconfirmed` 💬2
- [#29241](https://github.com/ggml-org/llama.cpp/issues/29241) Eval bug: [SYCL][mtmd] llama-mtmd-cli aborts with 0xC0000409 after threadpool init on Intel Arc Pro B70 (Windows) — before image encode 💬2
- [#29252](https://github.com/ggml-org/llama.cpp/issues/29252) Misc. bug: CPU f32 GELU uses GGML_GELU_FP16, loses precision 💬1
- [#29223](https://github.com/ggml-org/llama.cpp/issues/29223) Compile bug: Cant build current git 6f41ac59e0a49a00483a316a22ada6b04edd2950 `bug-unconfirmed` 💬1
- [#29255](https://github.com/ggml-org/llama.cpp/issues/29255) Eval bug: probabilistic CUDA error 'invalid argument' at kernel launch on 7x Volta (sm_70) layer-split, triggered by large prefill + partial prefix reuse `bug-unconfirmed`
- [#29251](https://github.com/ggml-org/llama.cpp/issues/29251) Qwen3-VL: mtmd vision embeddings carry ~5× HF precision-floor noise → reproducible accuracy drop vs transformers (quant/backend/version-independent)
- [#29248](https://github.com/ggml-org/llama.cpp/issues/29248) Eval bug: Ministral-3 tool-calls during reasoning are not processed `bug-unconfirmed`
- [#29235](https://github.com/ggml-org/llama.cpp/issues/29235) Misc. bug: OpenVINO GPU code paths are silently disabled on GPU.N machines, causing wrong results and performance drops `bug-unconfirmed`
- [#29233](https://github.com/ggml-org/llama.cpp/issues/29233) Misc. bug: Jinja parser fails to parse unary minus before variables `bug-unconfirmed`
- [#29229](https://github.com/ggml-org/llama.cpp/issues/29229) ggml-sycl : remove the dpct (SYCLomatic) emulation layer, switch to out-of-order queues with native sycl::event dependencies
- [#29221](https://github.com/ggml-org/llama.cpp/issues/29221) Eval bug: Gemma 4 (26B-A4B MoE) crashes the server on the 2nd request with -np 4 on Vulkan (GGML_ASSERT "tensor not allocated"); -np 3 is fine, CPU backend is fine
- [#29216](https://github.com/ggml-org/llama.cpp/issues/29216) Qwen3-Embedding-8B-Q8_0 on Metal returns all-null embeddings for any `import { X } from "` input and poisons the slot afterwards
- [#29201](https://github.com/ggml-org/llama.cpp/issues/29201) Feature Request: export/import slots over http `enhancement`
- [#29194](https://github.com/ggml-org/llama.cpp/issues/29194) Feature Request: expose an OpenSearch description so browsers can add the llama.cpp WebUI as a search engine `enhancement`

#### 🔒 Closed Issues
- [#27888](https://github.com/ggml-org/llama.cpp/issues/27888) Eval bug: SYCL multi-GPU crash with Intel Arc Pro B50 + Arc A770
- [#29225](https://github.com/ggml-org/llama.cpp/issues/29225) Misc. bug: Router mode fails to load models but standalone models work
- [#26765](https://github.com/ggml-org/llama.cpp/issues/26765) qwen35: TENSOR_SKIP on MTP block triggers "unused tensor" warnings for regular attention/FFN weights
- [#26776](https://github.com/ggml-org/llama.cpp/issues/26776) Huge Q6_K Performance Boost on Non-AVX CPUs with SSE4.1
- [#29222](https://github.com/ggml-org/llama.cpp/issues/29222) Compile bug: Build error with sm_70 on Windows 11
- [#28820](https://github.com/ggml-org/llama.cpp/issues/28820) Misc. bug: server: (router) --api-key is not forwarded to child instances while --api-key-file is
- [#27419](https://github.com/ggml-org/llama.cpp/issues/27419) Eval bug: upper image content is lost while Vulkan/CPU are correct
- [#26759](https://github.com/ggml-org/llama.cpp/issues/26759) Misc. bug: (ggml-hexagon) FLASH_ATTN_EXT produces nondeterministic wrong results on the HMX path (v75/SM8650)
- [#26761](https://github.com/ggml-org/llama.cpp/issues/26761) Eval bug: DSpark/DFlash drafter with no_vocab tokenizer ignores tokenizer.ggml.mask_token_id → "invalid token = -1" / llama_decode fails
- [#29223](https://github.com/ggml-org/llama.cpp/issues/29223) Compile bug: Cant build current git 6f41ac59e0a49a00483a316a22ada6b04edd2950
- [#28765](https://github.com/ggml-org/llama.cpp/issues/28765) Eval bug: Multi-GPU SYCL decode crash with false OOM if output tensor is on device with non-zero index

### Ollama (`ollama/ollama`)

**Stars:** 181,408 · **Open issues:** 4,051 · **Last push:** 1h ago

On September 22, 2026, Ollama experienced a routine maintenance day with no new releases or merged pull requests. However, several new issues were reported, the most noteworthy being #18575, which involves the /v1/chat/completions endpoint ignoring the max_tokens parameter and overriding the Modelfile num_predict default, resulting in unbounded generation. Additionally, issue #18563 highlights a problem in the qwen3coder tool-call parser with strict XML rejection of long file-write tool calls, while #18574 points to a glitch in RagFlow Chat where replies inconsistently include the word 'assistant' or result in hangs.

#### 🐛 New Issues
- [#18563](https://github.com/ollama/ollama/issues/18563) qwen3coder tool-call parser: strict XML after a regex transform rejects long file-write tool calls ("element <parameter> closed by </function>"), deterministically, and the client gets the error as the answer 💬2
- [#18567](https://github.com/ollama/ollama/issues/18567) MLX engine: structured output (format/JSON schema) never terminates — model emits whitespace until num_predict is reached 💬1
- [#18574](https://github.com/ollama/ollama/issues/18574) RagFlow Chat replies with the word 'assistant' or hangs `bug` 💬1
- [#18575](https://github.com/ollama/ollama/issues/18575) /v1/chat/completions ignores max_tokens AND overrides the Modelfile num_predict default, leaving generation unbounded 💬1
- [#18568](https://github.com/ollama/ollama/issues/18568) [Bug]: unmatched wildcard in FROM path fails on Windows

#### 🔒 Closed Issues
- [#17961](https://github.com/ollama/ollama/issues/17961) Qwen3.8:27B on Ollama + Claude Code setup having incomplete responses
- [#18151](https://github.com/ollama/ollama/issues/18151) qwen3-vl and other video models can't be used with video
- [#17788](https://github.com/ollama/ollama/issues/17788) offload and layer split is weird
- [#18129](https://github.com/ollama/ollama/issues/18129) Scheduler restarts llama-server with default context (4096) immediately after a successful load, forcing a redundant reload on the next request
- [#18429](https://github.com/ollama/ollama/issues/18429) Hi Ollama
- [#18217](https://github.com/ollama/ollama/issues/18217) Support authenticating via API_KEY with the cli tool
- [#18106](https://github.com/ollama/ollama/issues/18106) llama-server runner leaks host memory linearly with request count (~5-12 MiB/req, invisible in RSS)

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,347 · **Open issues:** 5,207 · **Last push:** <1h ago

On September 22, 2026, there were no new releases for LiteLLM, but several important pull requests were merged. Highlights include the addition of per-user breakdowns in team usage exports and enhancements to the user interface for forecasting capabilities and FUSE v2 routing. Additionally, significant fixes were implemented, such as ensuring that native Redis semantics are preserved during cache operations and enhancing error handling for Azure deployments. A notable new issue has arisen regarding a 400 error related to non-GPT models in Databricks, specifically when "reasoning_effort" is incorrectly set as a non-string.

#### ✅ Merged PRs
- [#42386](https://github.com/BerriAI/litellm/pull/42386) fix(openrouter): remove the retired stealth/union-alpha model from the cost map
- [#39578](https://github.com/BerriAI/litellm/pull/39578) feat(jwt-key-mapping): accept token_id as an alternative to the plaintext key
- [#42367](https://github.com/BerriAI/litellm/pull/42367) feat(ui): add per-user breakdown to team usage export
- [#42379](https://github.com/BerriAI/litellm/pull/42379) fix(cache): keep native Redis semantic binding and Qdrant batch writes after merge
- [#42057](https://github.com/BerriAI/litellm/pull/42057) feat(ui): show Capability and FUSE v2 routing forecasts
- [#42377](https://github.com/BerriAI/litellm/pull/42377) chore(prices): sync OpenRouter prices: 4 models
- [#42324](https://github.com/BerriAI/litellm/pull/42324) feat(cache): serve QdrantSemanticCache natively from Rust
- [#42292](https://github.com/BerriAI/litellm/pull/42292) refactor(mcp): extract explicit operation context and dispatch
- [#41794](https://github.com/BerriAI/litellm/pull/41794) test(e2e): cover chat and responses registry gaps
- [#42295](https://github.com/BerriAI/litellm/pull/42295) fix(azure): propagate asyncio.CancelledError instead of raising a 500
- [#42354](https://github.com/BerriAI/litellm/pull/42354) fix(guardrails): run key-attached guardrails on /v1/videos
- [#41634](https://github.com/BerriAI/litellm/pull/41634) feat(agents): attach access groups to agents and enforce them for models, MCP servers and agent calls
- [#42371](https://github.com/BerriAI/litellm/pull/42371) chore(prices): sync OpenRouter prices: 4 models
- [#42356](https://github.com/BerriAI/litellm/pull/42356) fix(cli): preserve newer installed status lines during setup
- [#42319](https://github.com/BerriAI/litellm/pull/42319) feat(cache): serve Redis Semantic caches natively in Rust
- [#41872](https://github.com/BerriAI/litellm/pull/41872) fix(router): make context-window escalation opt-in
- [#41213](https://github.com/BerriAI/litellm/pull/41213) fix(proxy): record aborted outcome when spend-log cleanup is cancelled at shutdown
- [#41788](https://github.com/BerriAI/litellm/pull/41788) feat(proxy): report the source of alerting, UI and router settings on read
- [#41795](https://github.com/BerriAI/litellm/pull/41795) test(router): cover legacy lowest TPM selection
- [#41773](https://github.com/BerriAI/litellm/pull/41773) test(ui): cover dashboard form journeys
- [#42293](https://github.com/BerriAI/litellm/pull/42293) feat(ui): expose remaining complexity router advanced settings
- [#41769](https://github.com/BerriAI/litellm/pull/41769) test(model_management): cover actor edges and wildcard models
- [#42365](https://github.com/BerriAI/litellm/pull/42365) chore(prices): sync OpenRouter prices: 2 models
- [#42026](https://github.com/BerriAI/litellm/pull/42026) feat(ui): add internal-user savings and auto-router usage
- [#42364](https://github.com/BerriAI/litellm/pull/42364) fix(rust): declare _CacheTestHandle.valkey_semantic in native stub
- [#42346](https://github.com/BerriAI/litellm/pull/42346) fix(auth): let jwt team_allowed_routes paths grant auth=true passthrough
- [#42355](https://github.com/BerriAI/litellm/pull/42355) fix(logging_worker): make flush() survive an event loop change
- [#42363](https://github.com/BerriAI/litellm/pull/42363) fix(bedrock): add bare moonshotai.kimi-k3 cost map entry
- [#42316](https://github.com/BerriAI/litellm/pull/42316) feat(cache): add native Valkey semantic cache backend
- [#42362](https://github.com/BerriAI/litellm/pull/42362) feat(xiaomi_mimo): add mimo-v2.6-pro and mimo-v2.6-flash cost map rows with live e2e coverage
- [#42313](https://github.com/BerriAI/litellm/pull/42313) feat(rust): add native S3 cache backend
- [#42357](https://github.com/BerriAI/litellm/pull/42357) chore(prices): sync OpenRouter prices: 4 models, 3 deprecated
- [#41074](https://github.com/BerriAI/litellm/pull/41074) fix(mcp): keep server lists stable across refreshes
- [#42122](https://github.com/BerriAI/litellm/pull/42122) fix(proxy): apply DB-stored callback redaction settings before logger init
- [#42308](https://github.com/BerriAI/litellm/pull/42308) feat(rust): add HashiCorp Vault secret manager crate
- [#42325](https://github.com/BerriAI/litellm/pull/42325) feat(rust): add native GCS object-store cache backend
- [#42353](https://github.com/BerriAI/litellm/pull/42353) fix(xai): accept max_completion_tokens as a supported param
- [#42326](https://github.com/BerriAI/litellm/pull/42326) feat(docker): add a quickstart compose file served from the product repo
- [#42278](https://github.com/BerriAI/litellm/pull/42278) feat(auth): breached password detection, self-service change-password and forced password reset
- [#42311](https://github.com/BerriAI/litellm/pull/42311) feat(rust): add native disk cache backend
- [#41561](https://github.com/BerriAI/litellm/pull/41561) fix(responses): patch custom_tool_call_output in place on guardrail write-back
- [#42349](https://github.com/BerriAI/litellm/pull/42349) chore(prices): sync OpenRouter prices: 3 models
- [#42339](https://github.com/BerriAI/litellm/pull/42339) test: fix stale budget-status and bad-database-url assertions
- [#42283](https://github.com/BerriAI/litellm/pull/42283) fix(router): walk every entry of a fallback list after a mid-stream failure
- [#42323](https://github.com/BerriAI/litellm/pull/42323) fix(streaming): keep an explicit provider prompt_tokens=0 or completion_tokens=0 in streamed usage
- [#41560](https://github.com/BerriAI/litellm/pull/41560) fix(responses): stop agentic follow-up from passing request params twice
- [#40121](https://github.com/BerriAI/litellm/pull/40121) fix(responses): stream one lifecycle across MCP auto-execute rounds
- [#40251](https://github.com/BerriAI/litellm/pull/40251) refactor(types): remove 1,173 Any errors across 169 backend files
- [#42337](https://github.com/BerriAI/litellm/pull/42337) chore(prices): sync OpenRouter prices: 3 models
- [#42338](https://github.com/BerriAI/litellm/pull/42338) chore(prices): sync AWS Bedrock prices: 6 models [enrichment failed: AWS Bedrock, 4 held]
- [#42321](https://github.com/BerriAI/litellm/pull/42321) feat(rust): native Azure Blob response cache backend
- [#42309](https://github.com/BerriAI/litellm/pull/42309) feat(rust): add Azure Key Vault secret manager backend
- [#42294](https://github.com/BerriAI/litellm/pull/42294) test(migrations): cover the release-to-release upgrade path
- [#42036](https://github.com/BerriAI/litellm/pull/42036) fix(auth): fail closed when the team membership lookup hits a db outage
- [#42315](https://github.com/BerriAI/litellm/pull/42315) fix(proxy): evict the cached user row when SCIM or /user/delete removes a user
- [#42312](https://github.com/BerriAI/litellm/pull/42312) fix(bedrock): keep batch S3 credentials out of chat requests and debug logs
- [#42314](https://github.com/BerriAI/litellm/pull/42314) fix(alerting): deliver every distinct alert queued in one flush window
- [#42332](https://github.com/BerriAI/litellm/pull/42332) chore(release): backport #41870 to stable/1.101.x
- [#42300](https://github.com/BerriAI/litellm/pull/42300) fix(rust): preserve Python settings semantics at the native boundary
- [#42303](https://github.com/BerriAI/litellm/pull/42303) feat(rust): add CyberArk Conjur secret manager backend
- [#41505](https://github.com/BerriAI/litellm/pull/41505) fix(proxy): keep config-defined deployments when a config read returns no model_list
- [#42066](https://github.com/BerriAI/litellm/pull/42066) test(integration): batch and realtime cost cases
- [#42333](https://github.com/BerriAI/litellm/pull/42333) chore(prices): sync OpenRouter prices: 1 model
- [#42060](https://github.com/BerriAI/litellm/pull/42060) test(integration): proxy behaviour cost cases
- [#42267](https://github.com/BerriAI/litellm/pull/42267) fix(otel v2): map OCR page markdown onto the generation output
- [#39805](https://github.com/BerriAI/litellm/pull/39805) fix(mcp): keep oauth scopes in admin api credential redaction
- [#34358](https://github.com/BerriAI/litellm/pull/34358) test(e2e): replace custom endpoints_client with provider SDK clients
- [#42052](https://github.com/BerriAI/litellm/pull/42052) test(integration): provider wire cost cases
- [#42317](https://github.com/BerriAI/litellm/pull/42317) feat(rust-cache): serve RedisClusterCache natively as a Redis topology
- [#41101](https://github.com/BerriAI/litellm/pull/41101) feat(edenai): add Eden AI provider across chat, Responses, Messages, embeddings, audio, images and video
- [#42288](https://github.com/BerriAI/litellm/pull/42288) fix(anthropic): forward Claude Code safeguards and dangerous-tool-use beta to Bedrock Invoke and Vertex on /v1/messages
- [#42035](https://github.com/BerriAI/litellm/pull/42035) test(integration): pricing dimension and provider reported cost cases
- [#42320](https://github.com/BerriAI/litellm/pull/42320) chore(prices): sync OpenRouter prices: 1 model
- [#40322](https://github.com/BerriAI/litellm/pull/40322) fix(proxy): renew budget reservation counter TTL while the request is in flight
- [#42291](https://github.com/BerriAI/litellm/pull/42291) fix(proxy): detach stored credential when model editor selects None
- [#42028](https://github.com/BerriAI/litellm/pull/42028) test(integration): passthrough route cost cases
- [#42306](https://github.com/BerriAI/litellm/pull/42306) fix(fal_ai): surface fal errors in video status and content instead of completed and generic 500
- [#40429](https://github.com/BerriAI/litellm/pull/40429) feat(ui): add upgrade banner with latest release changelog stats
- [#42024](https://github.com/BerriAI/litellm/pull/42024) test(integration): audio, image and per-unit cost cases
- [#42305](https://github.com/BerriAI/litellm/pull/42305) chore(prices): sync OpenRouter prices: 4 models, 3 new
- [#42020](https://github.com/BerriAI/litellm/pull/42020) test(integration): embeddings, rerank, completions and moderations cost cases
- [#41999](https://github.com/BerriAI/litellm/pull/41999) test(integration): endpoint, breakdown component and failure support in the cost harness
- [#42284](https://github.com/BerriAI/litellm/pull/42284) fix: rename the mainland China brand to Qianwen AI Platform
- [#42296](https://github.com/BerriAI/litellm/pull/42296) fix(ci): let the install smoke test boot its key-less proxy config
- [#42286](https://github.com/BerriAI/litellm/pull/42286) feat(fal_ai): add MiniMax H3 text-to-video and reference-to-video
- [#42282](https://github.com/BerriAI/litellm/pull/42282) fix(fal_ai): price images from the dimensions fal returns
- [#42298](https://github.com/BerriAI/litellm/pull/42298) chore(prices): sync AWS Bedrock prices: 1 model [enrichment failed: AWS Bedrock, 16 held]
- [#42297](https://github.com/BerriAI/litellm/pull/42297) chore(prices): sync OpenRouter prices: 1 model
- [#42196](https://github.com/BerriAI/litellm/pull/42196) feat(rust): scaffold cache foundation for Python parity
- [#42262](https://github.com/BerriAI/litellm/pull/42262) fix(bedrock): send s3BucketOwner on batch input and output data config
- [#34919](https://github.com/BerriAI/litellm/pull/34919) fix(mcp): handle split UTF-8 routing previews
- [#42119](https://github.com/BerriAI/litellm/pull/42119) feat(policy_engine): add default fallback policy attachments
- [#42049](https://github.com/BerriAI/litellm/pull/42049) feat(bedrock_mantle): serve /v1/messages for Claude models on Mantle's native Anthropic Messages API
- [#42055](https://github.com/BerriAI/litellm/pull/42055) feat(ui): show prompt caching requests and net savings
- [#42080](https://github.com/BerriAI/litellm/pull/42080) fix(router): keep prompt caching affinity when the breakpoint moves
- [#42289](https://github.com/BerriAI/litellm/pull/42289) chore(prices): sync OpenRouter prices: 1 model
- [#42290](https://github.com/BerriAI/litellm/pull/42290) chore(prices): sync AWS Bedrock prices: 3 models [enrichment failed: AWS Bedrock, 18 held]
- [#39189](https://github.com/BerriAI/litellm/pull/39189) fix(mcp): paginate prompt and resource discovery
- [#42069](https://github.com/BerriAI/litellm/pull/42069) fix(token_counter): count replayed redacted_thinking blocks so prompt_caching keeps pinning
- [#41956](https://github.com/BerriAI/litellm/pull/41956) fix: apply configured cache_control_injection_points beside client cache_control marks
- [#42041](https://github.com/BerriAI/litellm/pull/42041) fix(azure_ai): bridge gpt-5.4+ function tools with reasoning to the Foundry Responses API
- [#42279](https://github.com/BerriAI/litellm/pull/42279) chore(prices): sync AWS Bedrock prices: 4 models [enrichment failed: AWS Bedrock, 26 held]
- [#42280](https://github.com/BerriAI/litellm/pull/42280) chore(prices): sync OpenRouter prices: 3 models
- [#42275](https://github.com/BerriAI/litellm/pull/42275) fix(bedrock): forward anthropic-beta headers verbatim on the Claude platform messages path
- [#42022](https://github.com/BerriAI/litellm/pull/42022) fix(proxy): park requeued spend logs in Redis so they survive a pod restart during a DB outage
- [#41886](https://github.com/BerriAI/litellm/pull/41886) feat(auto-router): add JEV classifier alongside LLM classifier
- [#42120](https://github.com/BerriAI/litellm/pull/42120) test(google): boot the unified Google proxy fixture with a real master key
- [#42271](https://github.com/BerriAI/litellm/pull/42271) feat(bedrock): add us.moonshotai.kimi-k3 pricing and fill the global Kimi K3 entry
- [#42095](https://github.com/BerriAI/litellm/pull/42095) feat(fal_ai): add gpt-image-2.5 flare/sunburst, flux/dev and image edits
- [#42270](https://github.com/BerriAI/litellm/pull/42270) chore(prices): sync OpenRouter prices: 6 models
- [#42269](https://github.com/BerriAI/litellm/pull/42269) chore(prices): sync AWS Bedrock prices: 3 models [enrichment failed: AWS Bedrock, 32 held]
- [#42143](https://github.com/BerriAI/litellm/pull/42143) ci(e2e): fix the stage-mirror batch reds and keep a redacted pytest log
- [#42265](https://github.com/BerriAI/litellm/pull/42265) chore(prices): sync OpenRouter prices: 4 models
- [#42264](https://github.com/BerriAI/litellm/pull/42264) feat(xai): add grok-4.7 to the cost map
- [#42220](https://github.com/BerriAI/litellm/pull/42220) refactor(types): replace Any with proven types in 32 files
- [#42121](https://github.com/BerriAI/litellm/pull/42121) feat(proxy): add GET /utils/model_info to look up cost map info for unregistered models
- [#42261](https://github.com/BerriAI/litellm/pull/42261) chore(prices): sync OpenRouter prices: 7 models
- [#42254](https://github.com/BerriAI/litellm/pull/42254) chore(prices): sync AWS Bedrock prices: 13 models, 1 new [1 with gaps, enrichment failed: AWS Bedrock, 38 held]
- [#41906](https://github.com/BerriAI/litellm/pull/41906) feat(team): show whether a member follows the team default budget and allow resetting to it
- [#41588](https://github.com/BerriAI/litellm/pull/41588) fix(key_generate): use the user's own budget as the ceiling for UI session personal keys
- [#42258](https://github.com/BerriAI/litellm/pull/42258) chore(prices): sync Together AI prices: 2 models
- [#42253](https://github.com/BerriAI/litellm/pull/42253) chore(prices): sync OpenRouter prices: 6 models, 1 new
- [#42252](https://github.com/BerriAI/litellm/pull/42252) feat(auto-router): configure heuristic v2 success threshold
- [#42105](https://github.com/BerriAI/litellm/pull/42105) feat(proxy): default to the v2 migration resolver
- [#42160](https://github.com/BerriAI/litellm/pull/42160) test(a2a): migrate a2a_protocol legacy tests to tests/unit (wave 3 phase 17)
- [#34941](https://github.com/BerriAI/litellm/pull/34941) fix(registry): add MAI-Image-2.5-Pro pricing, fix Fireworks/Together entries, absorb verified open registry PRs, add Groq deprecation and Bedrock regional Qwen3 Next pricing
- [#42250](https://github.com/BerriAI/litellm/pull/42250) chore(prices): sync AWS Bedrock prices: 25 models [enrichment failed: AWS Bedrock, 66 held]
- [#42249](https://github.com/BerriAI/litellm/pull/42249) chore(prices): sync Azure prices: 1 model, 1 deprecated
- [#42251](https://github.com/BerriAI/litellm/pull/42251) chore(prices): sync OpenRouter prices: 3 models
- [#42246](https://github.com/BerriAI/litellm/pull/42246) chore(prices): sync OpenRouter prices: 4 models
- [#42152](https://github.com/BerriAI/litellm/pull/42152) fix(anthropic): forward safeguards and anthropic-beta unchanged on native /v1/messages
- [#42239](https://github.com/BerriAI/litellm/pull/42239) fix(a2a): send message/stream for Bedrock AgentCore streaming requests
- [#42243](https://github.com/BerriAI/litellm/pull/42243) chore(prices): sync OpenRouter prices: 4 models
- [#42240](https://github.com/BerriAI/litellm/pull/42240) chore(prices): sync OpenRouter prices: 1 model
- [#42234](https://github.com/BerriAI/litellm/pull/42234) chore(prices): sync OpenRouter prices: 1 model
- [#42097](https://github.com/BerriAI/litellm/pull/42097) fix(proxy): return 422 instead of 429 for BudgetExceededError
- [#42207](https://github.com/BerriAI/litellm/pull/42207) fix(helm): render a fixed replicaCount on componentized deployments when HPA is disabled
- [#42227](https://github.com/BerriAI/litellm/pull/42227) chore(prices): sync OpenRouter prices: 2 models
- [#42193](https://github.com/BerriAI/litellm/pull/42193) fix(responses): forward safety_identifier through the chat completion bridge
- [#42192](https://github.com/BerriAI/litellm/pull/42192) chore(prices): sync OpenRouter prices: 2 models
- [#42187](https://github.com/BerriAI/litellm/pull/42187) chore(prices): sync OpenRouter prices: 2 models
- [#42184](https://github.com/BerriAI/litellm/pull/42184) chore(prices): sync OpenRouter prices: 2 models
- [#42173](https://github.com/BerriAI/litellm/pull/42173) feat(rust): add typed secret managers and shared auth adapters
- [#42182](https://github.com/BerriAI/litellm/pull/42182) chore(prices): sync OpenRouter prices: 1 model

#### 🐛 New Issues
- [#42347](https://github.com/BerriAI/litellm/issues/42347) [Bug]: Databricks non-GPT models 400 with reasoning_effort must be a string when reasoning.summary is set `llm translation` 💬2
- [#42247](https://github.com/BerriAI/litellm/issues/42247) [Bug]: Azure prompt content filter (code=content_filter) not mapped to ContentPolicyViolationError `llm translation` 💬2
- [#42200](https://github.com/BerriAI/litellm/issues/42200) [Feature]: Cost tracking for Jev when using OpenRouter 💬2
- [#42186](https://github.com/BerriAI/litellm/issues/42186) [Bug]: Moonshot: `400 Invalid request: text content is empty` when an assistant message has tool calls and empty text content `bug` `llm translation` 💬2
- [#42222](https://github.com/BerriAI/litellm/issues/42222) [Bug]: cancel_on_disconnect combined with the CancelledError->500 bug (#35329) cools down healthy Azure deployments router-wide `llm translation` 💬1
- [#42221](https://github.com/BerriAI/litellm/issues/42221) [Bug]: Claude Code identity sentence leaks to non-Claude models through the /v1/messages translation bridge `llm translation` `claude code` 💬1
- [#42224](https://github.com/BerriAI/litellm/issues/42224) max_request_size_mb (Enterprise) causes 401 on /v1/audio/transcriptions via RuntimeError: Stream consumed 💬1
- [#42223](https://github.com/BerriAI/litellm/issues/42223) [Bug]: Managed vector store indexes are unusable until proxy restart `llm translation` 💬1
- [#42195](https://github.com/BerriAI/litellm/issues/42195) [Bug]: Cache hit crashes with `ModuleNotFoundError: fastapi` on a plain `pip install litellm` — the SDK cache-hit path imports proxy-only modules `llm translation` 💬1
- [#42215](https://github.com/BerriAI/litellm/issues/42215) [Bug]: model_info.max_output_tokens leaks between aliases sharing one backend model string — modify_params clamps every alias to the last-registered value `llm translation` 💬1
- [#42211](https://github.com/BerriAI/litellm/issues/42211) [Bug]: runtime-injected Router deployments are silently deleted by the config reconcile when store_model_in_db is on `llm translation` 💬1
- [#42366](https://github.com/BerriAI/litellm/issues/42366) [Bug]: Proxy exits at startup on Windows when stdout is not UTF-8 — the "ASCII banner" is not ASCII `llm translation`
- [#42310](https://github.com/BerriAI/litellm/issues/42310) DeepSeek reasoning_content 400 in agentic loops: back-fill gated on thinking flag that OpenAI-compatible clients never send `llm translation`
- [#42201](https://github.com/BerriAI/litellm/issues/42201) [Bug]: Gemini /v1/responses previous_response_id replays malformed thought_signature and returns TYPE_BYTES Base64 400 without tools `bug` `llm translation`
- [#42185](https://github.com/BerriAI/litellm/issues/42185) [Bug]: /v1/images/edits with no `image` part returns 500 with a raw Python TypeError instead of 400 `llm translation`

#### 🔒 Closed Issues
- [#19105](https://github.com/BerriAI/litellm/issues/19105) Confused by the budgets
- [#42005](https://github.com/BerriAI/litellm/issues/42005) [Bug]: Responses-to-Chat bridge loses native tool calls on multi-turn replay and leaks reasoning as assistant text
- [#17993](https://github.com/BerriAI/litellm/issues/17993) [Bug]: Large duration values in seconds/minutes/hours fail to calculate correct reset times due to day rollover bug
- [#27849](https://github.com/BerriAI/litellm/issues/27849) [Bug]: sk- prefix missing
- [#28216](https://github.com/BerriAI/litellm/issues/28216) [Bug]: Router.aresponses streaming bypasses mid-stream fallback (MidStreamFallbackError not handled)
- [#29268](https://github.com/BerriAI/litellm/issues/29268) [Bug]: Docker image still bundles ddtrace 2.19.0 — breaks /embeddings on Python 3.13 with APM (v1.86.2)
- [#30539](https://github.com/BerriAI/litellm/issues/30539) [Bug]: Responses→Chat bridge forwards `tools: []` (vLLM 422s) when request has no tools
- [#42222](https://github.com/BerriAI/litellm/issues/42222) [Bug]: cancel_on_disconnect combined with the CancelledError->500 bug (#35329) cools down healthy Azure deployments router-wide
- [#35329](https://github.com/BerriAI/litellm/issues/35329) [Bug]: Azure async handler converts asyncio.CancelledError into AzureOpenAIError(500) — cancellation is swallowed and Router fallbacks run to completion
- [#30501](https://github.com/BerriAI/litellm/issues/30501) [Feature]: Support OpenAI `video_url` content for Gemini chat completions (Vertex AI / Google AI Studio)
- [#30520](https://github.com/BerriAI/litellm/issues/30520) completion() temperature default is inconsistent between Python docstring and documentation
- [#30560](https://github.com/BerriAI/litellm/issues/30560) OpenAPI-backed MCP server returns 401 when the spec URL is protected by the configured auth
- [#37009](https://github.com/BerriAI/litellm/issues/37009) [Bug]: SCIM PATCH/PUT/DELETE /Users/{id} leave the in-memory user cache stale
- [#40675](https://github.com/BerriAI/litellm/issues/40675) [Bug]: cache_control_injection_points silently dropped entirely when client marks cache_control on an unrelated message
- [#39730](https://github.com/BerriAI/litellm/issues/39730) [Bug] Cancelled spend-log cleanup runs have no outcome metric or failure log
- [#40118](https://github.com/BerriAI/litellm/issues/40118) [Bug]: Streaming /v1/responses with an auto-executed MCP tool emits two response lifecycles in one stream, OpenAI SDK responses.stream() raises AssertionError
- [#41502](https://github.com/BerriAI/litellm/issues/41502) ProxyConfig._delete_deployment permanently evicts config-file-defined models on a single transient/incomplete config read (no debounce, unlike the DB-fetch path)
- [#34917](https://github.com/BerriAI/litellm/issues/34917) [Bug]: StreamableHTTP MCP tool calls with large UTF-8 arguments fail around 4096 bytes with utf-8 decode error
- [#40385](https://github.com/BerriAI/litellm/issues/40385) [Bug]: Redis consumer queue backlog under 130M TPM and 1.2K RPM

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,546 · **Open issues:** 1,219 · **Last push:** <1h ago

On September 22, 2026, there were no new releases for Unsloth, but multiple key pull requests were merged to enhance functionality and performance. Notable changes included improvements to the Studio, such as refining GPU memory management with features like preserving standalone gguf settings in compare mode and introducing user-friendly notifications for runtime errors. Additionally, several bug fixes were implemented, including stopping the suggestion of incompatible models on Mac and addressing test failures across different environments. A significant new issue emerged regarding the Stability of Intel's dual Arc Pro B60 on Vulkan, which raises concerns about device reliability during operation.

#### ✅ Merged PRs
- [#11495](https://github.com/unslothai/unsloth/pull/11495) Studio: anchor the worker source read on the test file, not the working directory
- [#10849](https://github.com/unslothai/unsloth/pull/10849) fix(studio): bundle hf-xet for Desktop large Hub downloads
- [#11275](https://github.com/unslothai/unsloth/pull/11275) Studio: spell the owner's sidebar name Unsloth, not unsloth
- [#11364](https://github.com/unslothai/unsloth/pull/11364) Studio installers: add --no-rollback, and report a full disk as a full disk
- [#9560](https://github.com/unslothai/unsloth/pull/9560) Studio: give back the continuation lease when the user stops the preflight
- [#11493](https://github.com/unslothai/unsloth/pull/11493) Studio: read the 16-bit pixels the way the rest of that test file already does
- [#11472](https://github.com/unslothai/unsloth/pull/11472) Give the GPU summary probe test the AMD helpers its extracted block calls
- [#11492](https://github.com/unslothai/unsloth/pull/11492) Studio: pin the worker RSS in the two xet ledger tests that stand in for a worker
- [#11340](https://github.com/unslothai/unsloth/pull/11340) studio: copy full prompts from the api monitor
- [#11490](https://github.com/unslothai/unsloth/pull/11490) Studio: pin the hardware verdict in the two export capability tests that depend on it
- [#11488](https://github.com/unslothai/unsloth/pull/11488) Studio: keep the account confinement tests off the interpreter walk
- [#11457](https://github.com/unslothai/unsloth/pull/11457) Stop four POSIX-only test modules from failing to collect on Windows
- [#11471](https://github.com/unslothai/unsloth/pull/11471) Studio: isolate the sandbox traversal test from the real home directory
- [#11404](https://github.com/unslothai/unsloth/pull/11404) Read the sidebar and reasoning contracts as claims, not as literals
- [#9722](https://github.com/unslothai/unsloth/pull/9722) Studio: stop suggesting bnb-4bit models MLX cannot load on Mac
- [#11266](https://github.com/unslothai/unsloth/pull/11266) fix(sft): honor max_length below the model context limit
- [#11442](https://github.com/unslothai/unsloth/pull/11442) Studio: keep an AMD dGPU and a Vulkan choice through install and update
- [#11277](https://github.com/unslothai/unsloth/pull/11277) Apply the logit scale on the fused cross entropy path
- [#11436](https://github.com/unslothai/unsloth/pull/11436) Studio: let the owner allow managed accounts private provider base URLs
- [#11437](https://github.com/unslothai/unsloth/pull/11437) Studio: prefer the discrete AMD GPU when an iGPU enumerates first on Linux
- [#11286](https://github.com/unslothai/unsloth/pull/11286) Docker ROCm Studio image: ship JupyterLab with the notebooks, as the CUDA image does
- [#11455](https://github.com/unslothai/unsloth/pull/11455) Point the two compiler-cache fallback tests at a temporary root Windows accepts
- [#11440](https://github.com/unslothai/unsloth/pull/11440) Stop SFTTrainer downcasting configs that subclass SFTConfig
- [#11311](https://github.com/unslothai/unsloth/pull/11311) studio: preserve standalone gguf settings in compare mode
- [#11456](https://github.com/unslothai/unsloth/pull/11456) Repair four checks that are red on main itself
- [#11443](https://github.com/unslothai/unsloth/pull/11443) Studio: edit a project from the Projects page, and sort it from the Updated column
- [#11102](https://github.com/unslothai/unsloth/pull/11102) Offer FlexAttention when head_dim puts every flash kernel out of reach
- [#11238](https://github.com/unslothai/unsloth/pull/11238) [perf] Qwen3.5-9B LoRA SFT with unsloth-cli.py on a B200: 0.84 s to 0.77 s per step at 1 GPU, the model-independent half of #10744
- [#11414](https://github.com/unslothai/unsloth/pull/11414) Refuse a compiler cache path shlex cannot parse, not only one with a space
- [#11433](https://github.com/unslothai/unsloth/pull/11433) Studio: three-state Thinking and Tool calls visibility in Display
- [#11402](https://github.com/unslothai/unsloth/pull/11402) Studio: require a published digest on upstream llama.cpp prebuilts too
- [#11420](https://github.com/unslothai/unsloth/pull/11420) Studio: read the saved credential and its presence in one query
- [#11444](https://github.com/unslothai/unsloth/pull/11444) Studio: drop the "When context fills" setting and always use the server's policy
- [#11441](https://github.com/unslothai/unsloth/pull/11441) Studio: the drag-and-drop switches go, the gesture has one behaviour
- [#10435](https://github.com/unslothai/unsloth/pull/10435) A failed presence check in the indicator driver should say what the page looked like
- [#8548](https://github.com/unslothai/unsloth/pull/8548) Fail Source lint on a duplicate TypeScript import binding
- [#11373](https://github.com/unslothai/unsloth/pull/11373) Studio: drag sidebar rows into place, and make a project row do more
- [#11315](https://github.com/unslothai/unsloth/pull/11315) remove gguf shard controls introduced by #6107
- [#11375](https://github.com/unslothai/unsloth/pull/11375) fix(studio): widen the link reference probe to match the definition probe
- [#11398](https://github.com/unslothai/unsloth/pull/11398) Studio auth and bootstrap gates: throttle desktop-login, narrow the tunnel CORS origin, identify Colab's proxy
- [#11417](https://github.com/unslothai/unsloth/pull/11417) Studio: scope the GGUF converter pin to the conversion
- [#9025](https://github.com/unslothai/unsloth/pull/9025) Derive the chat UI wall-clock watchdog from the turn timeout
- [#9856](https://github.com/unslothai/unsloth/pull/9856) Reject a new studio union offender even when the recorded count is unchanged
- [#11431](https://github.com/unslothai/unsloth/pull/11431) Stop the barrel guard counting package imports as a way back in
- [#11426](https://github.com/unslothai/unsloth/pull/11426) Studio: call it Skills, and lowercase files in Chat with files
- [#11126](https://github.com/unslothai/unsloth/pull/11126) Make the GRPO canary run through Unsloth's own batch sampler
- [#11089](https://github.com/unslothai/unsloth/pull/11089) Read only the selector shapes the sheet test can prove, and refuse the rest
- [#11068](https://github.com/unslothai/unsloth/pull/11068) Studio: fall back to the Vulkan sd.cpp build when the ROCm one cannot run
- [#11429](https://github.com/unslothai/unsloth/pull/11429) Scale the settings hint icon with the UI font size
- [#11427](https://github.com/unslothai/unsloth/pull/11427) Studio: call the product Unsloth in the app's own copy
- [#11428](https://github.com/unslothai/unsloth/pull/11428) Use one speech bubble for a chat everywhere
- [#11425](https://github.com/unslothai/unsloth/pull/11425) Studio: icon-only Copy and Download in the transcript, with tooltips
- [#11408](https://github.com/unslothai/unsloth/pull/11408) Studio: put a working chat row's spinner back on the trailing column, and tighten the pin gap
- [#11415](https://github.com/unslothai/unsloth/pull/11415) Studio: say what auto-compaction actually does
- [#11419](https://github.com/unslothai/unsloth/pull/11419) Studio: use the scroll icon for Agent Skills everywhere
- [#11422](https://github.com/unslothai/unsloth/pull/11422) Studio: brighten tool rows on hover, like the Thinking trigger
- [#11421](https://github.com/unslothai/unsloth/pull/11421) Studio: one rounded outline on the guided tour card
- [#11424](https://github.com/unslothai/unsloth/pull/11424) Studio: make the rule closing a thinking trace readable
- [#11319](https://github.com/unslothai/unsloth/pull/11319) Windows installer: stop an unresolvable 8.3 alias aborting the rollback
- [#11401](https://github.com/unslothai/unsloth/pull/11401) Studio: bind the Data Recipe export link to the account that minted it
- [#11416](https://github.com/unslothai/unsloth/pull/11416) Repair the two frontend CI breaks main inherited from #11373
- [#11363](https://github.com/unslothai/unsloth/pull/11363) Studio: answer a recipe check the backend cannot read the seed for
- [#11407](https://github.com/unslothai/unsloth/pull/11407) Studio: rename the edit composer's Update button to Send, and resend an unchanged prompt
- [#11410](https://github.com/unslothai/unsloth/pull/11410) Studio: one white and one grey for dark mode thread text
- [#11409](https://github.com/unslothai/unsloth/pull/11409) Studio: round the right corners of scrollable tool result and thinking panes
- [#11411](https://github.com/unslothai/unsloth/pull/11411) Studio: use one expand icon and one download icon everywhere
- [#11406](https://github.com/unslothai/unsloth/pull/11406) Click the reasoning trigger by slot, not by its wording
- [#10474](https://github.com/unslothai/unsloth/pull/10474) Give a mixed NVIDIA plus AMD host a way to ask for the ROCm torch stack
- [#11242](https://github.com/unslothai/unsloth/pull/11242) fix(studio): run built-in text search as a tiered engine allowlist
- [#11026](https://github.com/unslothai/unsloth/pull/11026) Studio: read the local model cache locally, and keep host paths off the API
- [#11400](https://github.com/unslothai/unsloth/pull/11400) Drain worker threads without racing their start
- [#11369](https://github.com/unslothai/unsloth/pull/11369) Studio: treat bash `coproc` as a command boundary in the terminal safety scanners
- [#11395](https://github.com/unslothai/unsloth/pull/11395) Studio: use copy-01 for every copy button
- [#11366](https://github.com/unslothai/unsloth/pull/11366) Count a unified-memory APU's window as shared host memory, not dedicated VRAM
- [#11294](https://github.com/unslothai/unsloth/pull/11294) Studio: use only the chosen split and subset for Hugging Face recipe data
- [#11377](https://github.com/unslothai/unsloth/pull/11377) Studio: a setting that folds a turn's tool calls into its Thinking block

#### 🐛 New Issues
- [#11453](https://github.com/unslothai/unsloth/issues/11453) [Bug] Intel: dual Arc Pro B60 on Vulkan hits ErrorDeviceLost mid-generation, chat locks until eject and reload `feature request` `bug` 💬2
- [#11434](https://github.com/unslothai/unsloth/issues/11434) Muse-Glimmer vision fine-tuning fails to compile: data-dependent `if frames > 1` in generated `get_vision_pixel_shuffle_index` 💬1
- [#11496](https://github.com/unslothai/unsloth/issues/11496) [Unsloth Bug] Open chat does not reconcile externally updated saved assistant messages `feature request` `bug`
- [#11475](https://github.com/unslothai/unsloth/issues/11475) [Feature] Unsloth Studio / Desktop: show the per-GPU layer and KV split before loading, not after
- [#11474](https://github.com/unslothai/unsloth/issues/11474) [Feature] Unsloth Studio / Desktop: the GPUs picker orders devices but can't say how much each one gets
- [#11473](https://github.com/unslothai/unsloth/issues/11473) [Feature] Unsloth Studio / Desktop: the HTML preview swallows runtime errors and console output, and has no way to hand an error back to the model `feature request`
- [#11465](https://github.com/unslothai/unsloth/issues/11465) Studio: say why the training process died instead of "exited unexpectedly"
- [#11435](https://github.com/unslothai/unsloth/issues/11435) [Bug] Gemma 4 26B A4B QAT uses more than 15 GB RAM with llama.cpp-b11067 `feature request` `bug`
- [#11432](https://github.com/unslothai/unsloth/issues/11432) Studio: say antivirus when a runtime repair fails or the damage comes back, not only when repair cannot run
- [#11412](https://github.com/unslothai/unsloth/issues/11412) Sandbox network policy is enforced only by static analysis, with no runtime egress control
- [#11403](https://github.com/unslothai/unsloth/issues/11403) [Feature] Work From Remote workspaces `feature request`
- [#11396](https://github.com/unslothai/unsloth/issues/11396) [Bug]Asked to sample `fps` frames per second but no video metadata was provided which is required when sampling with `fps`. Defaulting to `fps=24`. Please provide `video_metadata` for more accurate results. `feature request` `bug`
- [#11397](https://github.com/unslothai/unsloth/issues/11397) [Blocked] Windows: antivirus or security software blocked the installer (install.ps1 one-liner update) `bug` `windows` `antivirus-false-positive`

#### 🔒 Closed Issues
- [#11143](https://github.com/unslothai/unsloth/issues/11143) [Bug] b10995-mix-3e83366: Qwen3.8-Flash-Next MTP aborts at load (nextn.hc_head_norm still [hc_dim] after rebase)
- [#11219](https://github.com/unslothai/unsloth/issues/11219) MTP drafter crashes with GGML_ASSERT(ggml_can_repeat(b, a)) during graph build (b11007-mix, RTX 5080)
- [#11393](https://github.com/unslothai/unsloth/issues/11393) [Bug] Unsloth STudio not returning all models when queried for models
- [#8814](https://github.com/unslothai/unsloth/issues/8814) [Bug] Minimax H3 won't run on AMD card using Linux
- [#11381](https://github.com/unslothai/unsloth/issues/11381) Sandbox host policy: three call spellings still resolve to no name
- [#11002](https://github.com/unslothai/unsloth/issues/11002) [Bug] Data Recipe worker nondeterministically receives SIGTERM during generation
- [#10840](https://github.com/unslothai/unsloth/issues/10840) [Bug] Unsloth Desktop Appimage is missing a package. Cannot download larger models as a result.
- [#11313](https://github.com/unslothai/unsloth/issues/11313) [Bug] Unsloth Studio / Desktop: a reinstall or repair with the uv cache on another drive doubles the install's disk use, and a full disk fails as "studio setup failed"
- [#11282](https://github.com/unslothai/unsloth/issues/11282) [Feature] Copy FULL prompt in the API monitor instead of the trimmed version
- [#11382](https://github.com/unslothai/unsloth/issues/11382) [Feature] Allow managed accounts to use private/local provider base URLs (or add an admin toggle)
- [#11235](https://github.com/unslothai/unsloth/issues/11235) [Feature] AMD: the ROCm Docker image has no JupyterLab, so the notebooks have no AMD on-ramp
- [#9278](https://github.com/unslothai/unsloth/issues/9278) MiniMax-H3 video generation fails on RX 9070 XT (gfx1201, Windows): hipblasSetStream returns CUBLAS_STATUS_INVALID_VALUE
- [#11290](https://github.com/unslothai/unsloth/issues/11290) [Unsloth Bug] PowerShell install script fails during rollback due to space in Windows username (HOMEPC~1 path not found)

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,104 · **Open issues:** 374 · **Last push:** 4h ago

On September 22, 2026, AIBrix did not release any new versions but made notable progress with six merged pull requests. Key features included enhancements to the API that allow for disabling gateway rate limiting while keeping Redis enabled (#2758) and the addition of an authoritative model routing policy (#2767). Several bug fixes were also implemented, such as addressing issues with LocalStorage rewriting newlines in stored text objects (#2757) and improving session-affinity Redis claims with SET NX (#2765). Additionally, a new issue has emerged regarding session-affinity load-gate reroutes failing to update the Redis pin (#2772), signaling a potential area of concern for users.

#### ✅ Merged PRs
- [#2758](https://github.com/vllm-project/aibrix/pull/2758) [API] Allow disabling gateway rate limiting while keeping Redis enabled
- [#2767](https://github.com/vllm-project/aibrix/pull/2767) [API] Add an authoritative model routing policy
- [#2757](https://github.com/vllm-project/aibrix/pull/2757) [Bug] Stop LocalStorage rewriting newlines in stored text objects
- [#2752](https://github.com/vllm-project/aibrix/pull/2752) [Misc] Add unit tests for the RoundRobin dispatch policy
- [#2764](https://github.com/vllm-project/aibrix/pull/2764) [CI] Add Gateway backend request E2E coverage
- [#2765](https://github.com/vllm-project/aibrix/pull/2765) [Bug] Use SET NX for the initial session-affinity Redis claim
- [#2763](https://github.com/vllm-project/aibrix/pull/2763) [Misc] Fix misleading SLOQueue fallback log message

#### 🐛 New Issues
- [#2772](https://github.com/vllm-project/aibrix/issues/2772) [Bug] Session-affinity load-gate reroutes do not update the Redis pin `kind/bug` `area/gateway` 💬1
- [#2766](https://github.com/vllm-project/aibrix/issues/2766) [Feature] Allow model operators to enforce an authoritative gateway routing policy `area/gateway` `kind/feature` 💬1
- [#2770](https://github.com/vllm-project/aibrix/issues/2770) [Bug][ModelClaim] An engine takes most of the card at startup, before any KV limit is in force `kind/bug` `area/runtime` `area/kv-cache` `area/orchestration` 💬1

#### 🔒 Closed Issues
- [#2423](https://github.com/vllm-project/aibrix/issues/2423) [Question] v0.7.0 Redis request count sync pattern — per-pod in-memory counting with periodic Redis sync vs. direct Redis operations — real-time accuracy concerns
- [#2766](https://github.com/vllm-project/aibrix/issues/2766) [Feature] Allow model operators to enforce an authoritative gateway routing policy
- [#2747](https://github.com/vllm-project/aibrix/issues/2747) [Feature] Allow disabling all gateway rate limiting while Redis remains configured

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,890 · **Open issues:** 495 · **Last push:** <1h ago

On September 22, 2026, there were no new releases for Semantic Router, but several significant updates were merged, including the addition of query-outcome snapshots and query-level splitting in PR #3999, and a new feature allowing the export of a shadow comparison dataset from replay records in PR #3998. Other notable merges included enhancements to report the source window of guard scores (#3945) and improvements to memory batch inserts to ensure atomic operations (#3990). Among the newly reported issues, bug #4010 stands out as it highlights a failure in `make harness-check` on clean checkouts due to a missing `.agent-harness` directory, indicating a potential setup problem for new users. Overall, the day focused on incremental but important improvements and bug fixes rather than major releases.

#### ✅ Merged PRs
- [#3510](https://github.com/vllm-project/semantic-router/pull/3510) [CI/Build] Verify published Dashboard multi-architecture images
- [#3999](https://github.com/vllm-project/semantic-router/pull/3999) feat(training): add query-outcome snapshots and query-level splitting
- [#3945](https://github.com/vllm-project/semantic-router/pull/3945) [Feature] Report which window a guard score came from
- [#3998](https://github.com/vllm-project/semantic-router/pull/3998) [Feature] Export a shadow comparison dataset from replay records
- [#3989](https://github.com/vllm-project/semantic-router/pull/3989) [Bug] keep missing BM25 scores at zero
- [#3990](https://github.com/vllm-project/semantic-router/pull/3990) [Bug] make memory batch inserts atomic
- [#3984](https://github.com/vllm-project/semantic-router/pull/3984) [Test] Probe the routes that collide inside one tier
- [#3978](https://github.com/vllm-project/semantic-router/pull/3978) [Feature] Adopt Vela Halu and Omni with owned model runtimes
- [#3976](https://github.com/vllm-project/semantic-router/pull/3976) [Bug] Keep startup readiness local to each Router replica

#### 🐛 New Issues
- [#4010](https://github.com/vllm-project/semantic-router/issues/4010) [Bug] `make harness-check` fails on a clean checkout because `.agent-harness` is never created `bug` `accepted` `wg/developer-experience-ecosystem` 💬3
- [#4003](https://github.com/vllm-project/semantic-router/issues/4003) [Bug] Vector store pagination is unstable when stores share the same creation timestamp `bug` `accepted` `wg/data-plane-networking` 💬3
- [#4015](https://github.com/vllm-project/semantic-router/issues/4015) [Bug] Shared Redis session state: Merge uses a different format than Save/Load, dropping stored facts and leaving the session unreadable `bug` `accepted` `wg/agentic-context` 💬2
- [#3995](https://github.com/vllm-project/semantic-router/issues/3995) [Bug] MemoryBackend batch inserts can partially write past the capacity limit `bug` `accepted` `wg/data-plane-networking` 💬2
- [#3994](https://github.com/vllm-project/semantic-router/issues/3994) [Bug] Weighted hybrid fusion penalizes candidates without BM25 matches `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4005](https://github.com/vllm-project/semantic-router/issues/4005) [Feature] model_eval evaluation quality checks, cost-aware config generation, reasoning-mode eval `enhancement` `accepted` `wg/evaluation-quality` 💬1
- [#4004](https://github.com/vllm-project/semantic-router/issues/4004) [Bug] The CUDA image does not ship a CUDA-capable Candle, so `--platform nvidia` cannot start `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3996](https://github.com/vllm-project/semantic-router/issues/3996) [Bug] MemoryBackend accepts embeddings with the wrong dimension `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4019](https://github.com/vllm-project/semantic-router/issues/4019) Strict upstream stream validation breaks aggregator-gateway backends (keepalive id, vendor fields, per-chunk usage, tool_calls index) `needs-acceptance`
- [#3988](https://github.com/vllm-project/semantic-router/issues/3988) [Feature] Calibrate one signal score family onto a declared comparable scale `enhancement` `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#3081](https://github.com/vllm-project/semantic-router/issues/3081) [Feature] Define explicit decision ranking semantics for tier, priority, and confidence
- [#3995](https://github.com/vllm-project/semantic-router/issues/3995) [Bug] MemoryBackend batch inserts can partially write past the capacity limit
- [#3994](https://github.com/vllm-project/semantic-router/issues/3994) [Bug] Weighted hybrid fusion penalizes candidates without BM25 matches
- [#3725](https://github.com/vllm-project/semantic-router/issues/3725) [Bug] Playground feedback should record for all signed-in users, appear on Insights, and not let shared read accounts change routing

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*