# 📡 AI Ecosystem Digest — 2026-10-27

> Generated 2026-10-27 01:51 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 153,482 | 18 | 0 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 131,033 | 11 | 1 | 50 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,554 | 1 | 0 | 4 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,297 | 1 | 2 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 221,985 | 18 | 16 | 13 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,738 | 31 | 2 | 5 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,161 | 164 | 92 | 286 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 257,425 | 31 | 2 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 95,633 | 32 | 12 | 54 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,221 | 17 | 21 | 47 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,470 | 8 | 15 | 24 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 184,904 | 10 | 1 | 4 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,092 | 33 | 72 | 70 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,604 | 11 | 8 | 110 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,162 | 6 | 0 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,269 | 14 | 2 | 0 | 0 |

---

## ✨ Highlights

- **Ollama** released v0.40.12-rc0, introducing new features and improvements.
- **Claude Code** announced v2.1.311, alongside several critical merged PRs addressing security and functionality enhancements.
- **OpenAI Codex** published multiple releases (rust-v0.166.0-alpha.1, rust-v0.165.0-alpha.3, rust-v0.165.0-alpha.1.1) while merging key PRs that enhance plugin support.
- **OpenClaw** faced notable issues with inconsistent operator scope semantics and device identity omissions, resulting in new bugs filed with significant comment activity: [#184315](https://github.com/openclaw/openclaw/issues/184315) (7 comments) and [#184318](https://github.com/openclaw/openclaw/issues/184318) (4 comments).
- **AIBrix** reported a critical scaling issue related to autoscaling, prompting user discussions in a new issue: [#3308](https://github.com/vllm-project/aibrix/issues/3308) (5 comments).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 153,482 · **Open issues:** 15,702 · **Last push:** 2h ago

On October 27, 2026, Claude Code released version 2.1.311, introducing the `--hold-idle-file` and `--max-hold-min` options for self-hosted runners, which allow for maintaining an idle session while processes are reported. This release also added a helpful tip for the Explanatory output style and addressed long startup freezes caused by extensive CLAUDE.md files, in addition to fixing an issue with interrupting Claude. Notably, a significant merged pull request included security guidance to streamline plugin installations. Among the new issues, a feature request (#105234) seeks to define the channel contract on the MCP protocol, aiming to enhance compatibility for servers built on the 2.x SDK.

#### 🚀 New Releases
- [v2.1.311](https://github.com/anthropics/claude-code/releases/tag/v2.1.311) v2.1.311

#### ✅ Merged PRs
- [#105270](https://github.com/anthropics/claude-code/pull/105270) security-guidance: remove the copy here; install it from claude-plugins-official

#### 🐛 New Issues
- [#105234](https://github.com/anthropics/claude-code/issues/105234) [FEATURE] Define the channel contract on MCP protocol revision 2026-07-28, so a channel server built on a 2.x SDK can register `enhancement` `area:mcp` 💬1
- [#105223](https://github.com/anthropics/claude-code/issues/105223) MCP tools with required `anyOf: [X, null]` params are unusable: JSON `null` is never sent (regression of #81911, auto-closed) `bug` `area:mcp` 💬1
- [#105322](https://github.com/anthropics/claude-code/issues/105322) [BUG] TUI spinner redraws 8–13x/s and forces full-screen compositor frames: 1.5–5 CPU cores of gnome-shell on a GPU-less GNOME Wayland + RDP session `bug` `has repro` `platform:linux` `area:tui`
- [#105321](https://github.com/anthropics/claude-code/issues/105321) Context7 HTTP MCP plugin fails with `InvalidHTTPResponse` during version negotiation and legacy retry (Windows, Claude Code 2.1.308); direct unauthenticated requests to the plugin's exact URL and to each step of its OAuth discovery chain receive well-formed HTTP `bug` `has repro` `platform:windows` `area:auth`
- [#105320](https://github.com/anthropics/claude-code/issues/105320) [Feature Request] Allow user-defined obfuscation algorithms without safety flagging `enhancement` `platform:windows` `area:model`
- [#105319](https://github.com/anthropics/claude-code/issues/105319) [FEATURE] Desktop Code tab: let show_widget's sendPrompt() submit the message, not only prefill the prompt box `enhancement` `area:plugins` `area:ui` `area:desktop`
- [#105318](https://github.com/anthropics/claude-code/issues/105318) [BUG] Windows Desktop 3.x: Electron main process (CrBrowserMain) crashes 0xc0000005 several times a day — V8 jumps to a tagged heap pointer (regression from 2.x) `bug` `has repro` `platform:windows` `area:desktop`
- [#105317](https://github.com/anthropics/claude-code/issues/105317) [BUG] `claude rm` prints "kept <id>" refusals to stdout and leaves stderr empty `bug` `area:cli` `area:agent-view`
- [#105316](https://github.com/anthropics/claude-code/issues/105316) [BUG] Desktop: sessions started from a pre-warmed spare process don't load the project's `.claude/settings.json` (`autoCompactWindow` ignored, context window stays 1M) `bug` `platform:windows` `regression` `area:desktop`
- [#105315](https://github.com/anthropics/claude-code/issues/105315) [FEATURE] Show which account each session runs under in the agent view and in `claude agents --json` `enhancement` `platform:macos` `area:agent-view`
- [#105314](https://github.com/anthropics/claude-code/issues/105314) [Bug] Cyber safeguard blocks legitimate headless tool connections `bug` `platform:windows` `area:model` `area:security`
- [#105313](https://github.com/anthropics/claude-code/issues/105313) [FEATURE] Sessions dispatched through the background supervisor should run under the account of the client that dispatched them `enhancement` `platform:macos` `area:auth` `area:agent-view`
- [#105312](https://github.com/anthropics/claude-code/issues/105312) [Bug] Opus 4.5 safety safeguards triggering excessively `bug` `platform:macos` `area:model` `needs-repro`
- [#105311](https://github.com/anthropics/claude-code/issues/105311) [BUG] Mods: "hook was skipped" notices are fed to the model in interactive and -p sessions too, not only background ones (contrary to the $.ui.log doc) `bug` `has repro` `platform:windows` `area:hooks`
- [#105310](https://github.com/anthropics/claude-code/issues/105310) [BUG] Desktop app: Code sessions always launch at effort max, whatever the effort picker says `bug` `platform:windows` `area:desktop`
- [#105309](https://github.com/anthropics/claude-code/issues/105309) Feature request: keep local sessions alive if the laptop goes away (continuous cloud backup + automatic handoff) `enhancement` `area:core` `area:desktop`
- [#105308](https://github.com/anthropics/claude-code/issues/105308) [FEATURE] VS Code extension: Enter-to-send toggle in the chat input toolbar `enhancement` `area:ide` `platform:vscode` `keybindings`
- [#105307](https://github.com/anthropics/claude-code/issues/105307) [FEATURE] /btw while viewing a subagent silently answers from the main conversation (no notice, unlike /model, /compact) `enhancement` `platform:macos` `area:tui` `area:agents`

### OpenAI Codex (`openai/codex`)

**Stars:** 131,033 · **Open issues:** 24,949 · **Last push:** <1h ago

On October 27, 2026, three new alpha versions of Rust were released: rust-v0.166.0-alpha.1, rust-v0.165.0-alpha.3, and rust-v0.165.0-alpha.1.1. Key merged features included the addition of model catalog fields for granular approval templates in PR #57325, a new plugin process host with IPC and lifecycle management in PR #57290, and the preservation of tool output versions in rollout traces via PR #57280. Additionally, significant fixes were made to prevent failed subagents from causing tasks to need attention (PR #57315) and to ensure OAuth delivery defaults to bearer tokens (PR #57313). A notably hot new issue reported was related to Codex Desktop on Windows 11, where users cannot load organization settings, indicating persistent challenges in this environment.

#### 🚀 New Releases
- [rust-v0.166.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.1) 0.166.0-alpha.1
- [rust-v0.165.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.3) 0.165.0-alpha.3
- [rust-v0.165.0-alpha.1.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1.1) 0.165.0-alpha.1.1

#### ✅ Merged PRs
- [#57325](https://github.com/openai/codex/pull/57325) Add model catalog fields for granular approval templates
- [#57317](https://github.com/openai/codex/pull/57317) Add opt-in concise hints for explicitly selected plugins
- [#57315](https://github.com/openai/codex/pull/57315) Keep failed subagents from marking tasks as needing attention
- [#57314](https://github.com/openai/codex/pull/57314) Format all Rust sources and clean up repository checks
- [#57313](https://github.com/openai/codex/pull/57313) Default gateway OAuth delivery to Authorization bearer tokens
- [#57312](https://github.com/openai/codex/pull/57312) Centralize Guardian root context preparation
- [#57311](https://github.com/openai/codex/pull/57311) Preserve tool output versions and history order in rollout traces
- [#57307](https://github.com/openai/codex/pull/57307) Bump `openai/fence` to `v0.12.2` in the blob size policy
- [#57304](https://github.com/openai/codex/pull/57304) Surface refresh-token rejection errors during workspace routing
- [#57295](https://github.com/openai/codex/pull/57295) Defer synchronous Guardian evidence limits to preparation
- [#57294](https://github.com/openai/codex/pull/57294) Extract plugin manager errors and box realtime handoff routing
- [#57293](https://github.com/openai/codex/pull/57293) Add GPT-6.1 Terra to model catalogs
- [#57292](https://github.com/openai/codex/pull/57292) Render async questions and replies with Markdown in the TUI
- [#57291](https://github.com/openai/codex/pull/57291) Represent user message presentation with an enum
- [#57290](https://github.com/openai/codex/pull/57290) Add a plugin process host with bounded IPC and lifecycle management
- [#57287](https://github.com/openai/codex/pull/57287) Preserve parent tool declarations in prediction forks
- [#57286](https://github.com/openai/codex/pull/57286) Support `network_proxy` in managed requirements
- [#57285](https://github.com/openai/codex/pull/57285) Let the terminal handle links in expanded questions
- [#57284](https://github.com/openai/codex/pull/57284) Express TUI mouse capture as an explicit policy
- [#57282](https://github.com/openai/codex/pull/57282) Promote rounded token counts to the next compact unit
- [#57281](https://github.com/openai/codex/pull/57281) Enable agents navigation for remote App Server sessions
- [#57280](https://github.com/openai/codex/pull/57280) Preserve full MCP results in rollout traces
- [#57279](https://github.com/openai/codex/pull/57279) Render untrusted additional context as named tool outputs
- [#57278](https://github.com/openai/codex/pull/57278) Refactor agent spawning, startup, and communication helpers
- [#57277](https://github.com/openai/codex/pull/57277) Use the crates.io release of `i18n-config`
- [#57276](https://github.com/openai/codex/pull/57276) Support window prefixes for extension world-state sections
- [#57275](https://github.com/openai/codex/pull/57275) Preserve image generation failure metadata for premium usage limits
- [#57274](https://github.com/openai/codex/pull/57274) Defer REPL evidence rendering to synchronous context preparation
- [#57273](https://github.com/openai/codex/pull/57273) Reject unsupported options for `codex queue`
- [#57272](https://github.com/openai/codex/pull/57272) Add code-mode output truncation protocol contracts
- [#57271](https://github.com/openai/codex/pull/57271) Enable text selection and mouse scrolling in the warning viewer
- [#57270](https://github.com/openai/codex/pull/57270) Load cloud config for sandbox and remote exec-server commands
- [#57269](https://github.com/openai/codex/pull/57269) Add native Windows MSVC V8 source archive builds
- [#57268](https://github.com/openai/codex/pull/57268) Record reasons for embedded TUI starts
- [#57267](https://github.com/openai/codex/pull/57267) Keep cloud conversation settings server-owned in the TUI
- [#57265](https://github.com/openai/codex/pull/57265) Show effective processing tiers in TUI status surfaces
- [#57263](https://github.com/openai/codex/pull/57263) Support model-catalog wording for permission path warnings
- [#57262](https://github.com/openai/codex/pull/57262) Add incremental skill catalogs behind `skill_catalog_deltas`
- [#57261](https://github.com/openai/codex/pull/57261) Separate `apply_patch` request preparation from execution
- [#57260](https://github.com/openai/codex/pull/57260) Centralize permission request preparation and approval actions
- [#57259](https://github.com/openai/codex/pull/57259) Render Markdown in TUI async question choices
- [#57258](https://github.com/openai/codex/pull/57258) Reduce remote plugin catalog cache probing overhead
- [#57257](https://github.com/openai/codex/pull/57257) Avoid unnecessary connector directory work for tool suggestions
- [#57256](https://github.com/openai/codex/pull/57256) Keep parent history out of attached thread views
- [#57255](https://github.com/openai/codex/pull/57255) Record reviewed exceptions for zstd security advisories
- [#57253](https://github.com/openai/codex/pull/57253) Allow slow daemon startup while detecting early process exits
- [#57251](https://github.com/openai/codex/pull/57251) Show native dollar thread usage for ENT26 plans
- [#57249](https://github.com/openai/codex/pull/57249) Allow disabling plugin discovery prefetch at app-server startup
- [#57248](https://github.com/openai/codex/pull/57248) Make login token-refresh tests wait for auth publication
- [#57247](https://github.com/openai/codex/pull/57247) Release the rollout maintenance lock when its guard is dropped

#### 🐛 New Issues
- [#57051](https://github.com/openai/codex/issues/57051) [Windows 11] Codex Desktop 26.1021.3705.0 cannot load organization settings; CLI works, bundled CLI CDN only reachable with explicit proxy `bug` `windows-os` `app` `connectivity` 💬4
- [#57005](https://github.com/openai/codex/issues/57005) [Windows] Codex cannot load organization settings (Unable to load organization settings): codex.exe deployment rename_staging / EPERM `bug` `windows-os` `app` `app-server` 💬3
- [#57322](https://github.com/openai/codex/issues/57322) Feature Request: Allow ChatGPT Plus Users to Combine 5-Hour Codex Limits into a Weekly Allowance `enhancement` `rate-limits` `app` 💬1
- [#57321](https://github.com/openai/codex/issues/57321) VS Code Chat History does not list a resumed legacy GPT-5.4 thread after model migration `bug` `extension` `session` 💬1
- [#57318](https://github.com/openai/codex/issues/57318) Windows Computer Use: screenshot timeouts and click failures across multiple applications `bug` `windows-os` `app` `computer-use` 💬1
- [#57324](https://github.com/openai/codex/issues/57324) [Windows][Browser Use] Page.enable took 179.6s with 10s timeout; later paused-document-response rejection `bug` `windows-os` `tool-calls` `app`
- [#57323](https://github.com/openai/codex/issues/57323) [Linux] Severe memory growth and system freezes when using annotations in live browser preview `bug` `app` `browser` `performance`
- [#57320](https://github.com/openai/codex/issues/57320) [Hooks] Support selecting hooks by active permission profile `enhancement` `hooks` `config`
- [#57319](https://github.com/openai/codex/issues/57319) GPT-6.1 Terra missing after update: traced to stale model_catalog_json override `enhancement` `app` `config`
- [#57316](https://github.com/openai/codex/issues/57316) Codex desktop: Slovak Plan mode is mislabeled “Tarifa” `bug` `app` `plan`
- [#57309](https://github.com/openai/codex/issues/57309) TUI: explicit local image links are not clickable with spaces or wrapped labels `bug` `TUI` `CLI`

#### 🔒 Closed Issues
- [#57319](https://github.com/openai/codex/issues/57319) GPT-6.1 Terra missing after update: traced to stale model_catalog_json override

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,554 · **Open issues:** 786 · **Last push:** <1h ago

On October 27, 2026, Gemini CLI released version v0.67.0-nightly.20261027.g363a13119, which includes important fixes such as classifying project spending cap errors as terminal quota errors, and enhancements to include MCP server and tool metadata in permission requests. Key merged pull requests featured updates to prevent parent command name insertion in the /chat list autocomplete and ensure finite numbers are validated in the numeric settings editor. Additionally, a new feature request was raised (#29970) for an in-process extension API for prompt input, reflecting growing interest in extensibility.

#### 🚀 New Releases
- [v0.67.0-nightly.20261027.g363a13119](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261027.g363a13119) Release v0.67.0-nightly.20261027.g363a13119

#### ✅ Merged PRs
- [#29967](https://github.com/google-gemini/gemini-cli/pull/29967) fix(cli): prevent parent command name insertion on /chat list autocomplete
- [#29968](https://github.com/google-gemini/gemini-cli/pull/29968) fix(cli): validate finite numbers in numeric settings editor
- [#29910](https://github.com/google-gemini/gemini-cli/pull/29910) fix(acp): include MCP server and tool metadata in permission requests
- [#29961](https://github.com/google-gemini/gemini-cli/pull/29961) fix(core): classify project spending cap errors as terminal quota errors

#### 🐛 New Issues
- [#29970](https://github.com/google-gemini/gemini-cli/issues/29970) Feature request: an in-process extension API for the prompt input (Claude Code Mods contract, as Qwen Code is adopting) `area/extensions` `status/bot-triaged` `effort/large` 💬1

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,297 · **Open issues:** 2,173 · **Last push:** 3h ago

On October 27, 2026, GitHub Copilot CLI released version 1.0.104-4, which includes various fixes and changes aimed at improving the user experience. There were no merged pull requests today, reflecting a day of routine updates rather than significant feature additions. However, a notable new issue was raised: feature request #5260 seeks to implement a monitoring tool that streams background process output lines as notifications, which could enhance notification management by eliminating the need for polling.

#### 🚀 New Releases
- [v1.0.104-4](https://github.com/github/copilot-cli/releases/tag/v1.0.104-4) 1.0.104-4

#### 🐛 New Issues
- [#5260](https://github.com/github/copilot-cli/issues/5260) Feature request: Monitor tool / stream background process output lines as notifications (avoid polling) `triage`

#### 🔒 Closed Issues
- [#3068](https://github.com/github/copilot-cli/issues/3068) Calling session.setModel() and session.rpc.model.switchTo() does not update the model in the footer
- [#4481](https://github.com/github/copilot-cli/issues/4481) Copilot App 1.1.8 still gated by org "Copilot CLI" policy despite "GitHub Copilot app" policy being Enabled

### OpenCode (`anomalyco/opencode`)

**Stars:** 221,985 · **Open issues:** 3,860 · **Last push:** <1h ago

On October 27, 2026, there were no new releases for OpenCode, but several notable updates were merged. The new feature included in PR #55246 adds OpenCode Desktop GUI plugins, while PR #59421 introduces `LLM.loop`, allowing models to run tools until completion. Additionally, various fixes were implemented, including addressing app issues like the breadcrumb paths and search in settings. Among new issues, the crash on startup reported in #59461 and ongoing problems with the free tier limits highlighted user frustrations.

#### ✅ Merged PRs
- [#55246](https://github.com/anomalyco/opencode/pull/55246) feat(plugin): add OpenCode Desktop GUI plugins
- [#59444](https://github.com/anomalyco/opencode/pull/59444) Revert "fix(server): honor OPENCODE_SERVER_USERNAME for serve and --server"
- [#59439](https://github.com/anomalyco/opencode/pull/59439) Revert "fix(tui): identify config-defined providers (#57007)"
- [#59438](https://github.com/anomalyco/opencode/pull/59438) fix(app): slash in the subagent breadcrumb and a quieter subagent bar
- [#59421](https://github.com/anomalyco/opencode/pull/59421) feat(ai): add LLM.loop to run tools until the model stops
- [#59046](https://github.com/anomalyco/opencode/pull/59046) ci: separate release builds from signing and publishing
- [#59408](https://github.com/anomalyco/opencode/pull/59408) ci: run check on PRs into beta
- [#59412](https://github.com/anomalyco/opencode/pull/59412) fix(app): build settings search on the shared typeahead (dev)
- [#59428](https://github.com/anomalyco/opencode/pull/59428) fix(release): push stable tags with the release deploy key
- [#59395](https://github.com/anomalyco/opencode/pull/59395) feat(app): feather the question dock's scroll edge
- [#59430](https://github.com/anomalyco/opencode/pull/59430) fix(app): keep todo rows from shrinking in the todo panel
- [#59383](https://github.com/anomalyco/opencode/pull/59383) fix(app): question dock review fixes
- [#59425](https://github.com/anomalyco/opencode/pull/59425) fix(app): keep the @ menu open while it searches

#### 🐛 New Issues
- [#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues: read this first, then post your report here `zen` 💬11
- [#59307](https://github.com/anomalyco/opencode/issues/59307) Problem with resetting free tokens `pending close` `triaging` 💬6
- [#59377](https://github.com/anomalyco/opencode/issues/59377) desktop: shell permission prompt has no description (missing settings.permissions.tool.shell i18n key) `reproduced` 💬3
- [#59461](https://github.com/anomalyco/opencode/issues/59461) Crash on startup (Error 134 / Missing SSE4.2) 💬2
- [#59450](https://github.com/anomalyco/opencode/issues/59450) The 24-hour limit doesn't disappear! `pending close` `triaging` 💬1
- [#59458](https://github.com/anomalyco/opencode/issues/59458) tui: plugin slot contents never re-render on reactive updates 💬2
- [#59449](https://github.com/anomalyco/opencode/issues/59449) Quota reset timer issue — daily quota not granted `pending close` `triaging` 💬2
- [#59453](https://github.com/anomalyco/opencode/issues/59453) free time useage jus insta gets used even when not using `pending close` `triaging` 💬2
- [#59436](https://github.com/anomalyco/opencode/issues/59436) [FEATURE]: `pending close` `triaging` 💬2
- [#59404](https://github.com/anomalyco/opencode/issues/59404) Responses image parts omit detail, 400 on strict upstreams `reproduced` 💬2
- [#59410](https://github.com/anomalyco/opencode/issues/59410) tools: model frequently invokes shell with empty arguments `pending close` `triaging` 💬2
- [#59378](https://github.com/anomalyco/opencode/issues/59378) This version of OpenCode Desktop no longer supports free models. `pending close` `triaging` 💬2
- [#59455](https://github.com/anomalyco/opencode/issues/59455) Free tier limit bug persists on v2: Exhausted after just 1 request `pending close` `triaging` 💬1
- [#59454](https://github.com/anomalyco/opencode/issues/59454) All the free models showed You've used today's free messages `pending close` `triaging` 💬1
- [#59451](https://github.com/anomalyco/opencode/issues/59451) Pago Cuenta `pending close` `triaging` 💬1
- [#59443](https://github.com/anomalyco/opencode/issues/59443) Hot plugin reload destroys the shared agent/skill registry for all locations (TypeError: o is not a function) `pending close` `triaging` 💬1
- [#59432](https://github.com/anomalyco/opencode/issues/59432) [FEATURE]: TUI plugin API: render synthetic messages with a plugin component 💬1
- [#59406](https://github.com/anomalyco/opencode/issues/59406) [FEATURE]: Expose subagent parentID in ACP session/list 💬1

#### 🔒 Closed Issues
- [#45856](https://github.com/anomalyco/opencode/issues/45856) v2 serve: configured Basic Auth credentials always return 401
- [#58570](https://github.com/anomalyco/opencode/issues/58570) [BUG] Assistant stops displaying text during a long tool-driven task, continues working silently, and provides no final report
- [#59111](https://github.com/anomalyco/opencode/issues/59111) Free usage exceeded en OpenCode Desktop desde hace varios días
- [#59123](https://github.com/anomalyco/opencode/issues/59123) 每日的免费额度没有更新
- [#59118](https://github.com/anomalyco/opencode/issues/59118) limits
- [#59116](https://github.com/anomalyco/opencode/issues/59116) limits
- [#50322](https://github.com/anomalyco/opencode/issues/50322) tui: /models picker hides provider names for config-declared providers
- [#59125](https://github.com/anomalyco/opencode/issues/59125) opencode log - error
- [#59124](https://github.com/anomalyco/opencode/issues/59124) Any prompt sent with a `format` (json_schema or text) makes GET /session/{id}/message return 400 permanently
- [#58571](https://github.com/anomalyco/opencode/issues/58571) install: @democratize-technology/desktop-commander-mcp returns 404
- [#59117](https://github.com/anomalyco/opencode/issues/59117) [Billing Issue] Mistakenly charged $50+Processing fee $2.61 - Refund Request for Organization ID
- [#55887](https://github.com/anomalyco/opencode/issues/55887) Open project dialog: expanding a preloaded folder throws "Path already exists"
- [#59112](https://github.com/anomalyco/opencode/issues/59112) Free tier limit hit immediately on Desktop App (works via CLI)
- [#59410](https://github.com/anomalyco/opencode/issues/59410) tools: model frequently invokes shell with empty arguments
- [#59068](https://github.com/anomalyco/opencode/issues/59068) Asunto: Cobro de $10 USD activo pero cuenta sigue en plan Free - Solicito aclaración y corrección
- [#49309](https://github.com/anomalyco/opencode/issues/49309) opencode: configured providers appear disconnected in model dialogs

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,738 · **Open issues:** 2,079 · **Last push:** <1h ago

Today, Qwen Code released v0.26.2-preview.0 and v0.26.1-nightly.20261026.34769f9d41, both introducing session permission rules and auto approval features, alongside enhancements to token resolution in the CLI. Among the merged pull requests, #15668 added the functionality to show and manage autofix-pr watches directly in the Web Shell, while #15614 implemented a local preflight and verdict check for pull requests. A noteworthy new issue raised is #15597, which highlights a problem with managed auto-memory not saving due to permission conflicts. Overall, the day was significant for the introduction of new features and resolution of ongoing issues.

#### 🚀 New Releases
- [v0.26.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.2-preview.0) Release v0.26.2-preview.0
- [v0.26.1-nightly.20261026.34769f9d41](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.1-nightly.20261026.34769f9d41) Release v0.26.1-nightly.20261026.34769f9d41
- [sdk-typescript-v0.1.23](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.23) SDK TypeScript Release v0.1.23

#### ✅ Merged PRs
- [#15668](https://github.com/QwenLM/qwen-code/pull/15668) feat(web-shell): show /autofix-pr watches and stop them from the Web Shell
- [#15544](https://github.com/QwenLM/qwen-code/pull/15544) test(cli): read xn-- hosts by the running URL parser in the Broker URL fixture
- [#15676](https://github.com/QwenLM/qwen-code/pull/15676) fix(ci): Isolate Managed runtime release test classes
- [#15570](https://github.com/QwenLM/qwen-code/pull/15570) ci: run every suite but CLI and core in the side test lane
- [#15614](https://github.com/QwenLM/qwen-code/pull/15614) feat(verify-pr): add a local preflight and a verdict check

#### 🐛 New Issues
- [#15597](https://github.com/QwenLM/qwen-code/issues/15597) Headless -p (default/Auto approval): managed auto-memory can never save, because the implicit edit/write_file deny overrides the memory agents' scoped allow `priority/P1` `type/bug` `category/core` `scope/non-interactive` 💬7
- [#15600](https://github.com/QwenLM/qwen-code/issues/15600) Headless -p refuses read-only shell commands that use 2>&1: fd duplication is parsed as a write to a file named "&1" `priority/P2` `type/bug` `category/security` `scope/non-interactive` 💬6
- [#15593](https://github.com/QwenLM/qwen-code/issues/15593) test: two further flips from the 2026-10-25 loaded-host run (tool-turn checkpoint wait, cronScheduler gate clock) `priority/P3` `type/bug` `category/development` `scope/testing` 💬5
- [#15628](https://github.com/QwenLM/qwen-code/issues/15628) Show the resolved global directory instead of ~/.qwen in setting descriptions and the permissions dialog `priority/P3` `type/bug` `category/ui` `scope/settings` 💬4
- [#15618](https://github.com/QwenLM/qwen-code/issues/15618) feat(channels): Microsoft Teams extension and hosted integration `priority/P3` `type/feature-request` `category/integration` `scope/extensions` 💬4
- [#15613](https://github.com/QwenLM/qwen-code/issues/15613) Interleaved reasoning is reordered in TUI and flattened in Chat Completions replay `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬4
- [#15686](https://github.com/QwenLM/qwen-code/issues/15686) Active Goal holds ordinary user input (Enter-steered and pasted messages) until the Goal leaves active state `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬3
- [#15677](https://github.com/QwenLM/qwen-code/issues/15677) ci(tui-parity): installed-distribution darwin-x64 leg fails 5 of 6 runs on GitHub-hosted macos-15-intel (30s ready-prompt budget) `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#15675](https://github.com/QwenLM/qwen-code/issues/15675) sed edit simulation: `.` does not match `\r` or a whole emoji, so results differ from real sed `priority/P1` `type/bug` `category/core` `scope/shell` 💬3
- [#15660](https://github.com/QwenLM/qwen-code/issues/15660) Subagents start with a huge amount of context and I don't know where it comes from `status/need-information` `priority/P2` `type/bug` `category/core` 💬3
- [#15631](https://github.com/QwenLM/qwen-code/issues/15631) feat(qqbot): define proactive loop delivery semantics and add loop coverage `status/need-information` `priority/P3` `type/feature-request` `category/integration` 💬3
- [#15629](https://github.com/QwenLM/qwen-code/issues/15629) Web Shell: inline rename should pre-select the existing session name `priority/P3` `type/feature-request` `category/ui` `scope/session-management` 💬3
- [#15683](https://github.com/QwenLM/qwen-code/issues/15683) Web Shell: keep the prompt of the turn being read pinned at the top of the transcript `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬2
- [#15682](https://github.com/QwenLM/qwen-code/issues/15682) Agent Collaboration: user-level agents and squads that are available in every workspace `priority/P2` `type/feature-request` `category/core` `roadmap/multi-agent` 💬2
- [#15678](https://github.com/QwenLM/qwen-code/issues/15678) Web Shell Split View: keep "+ Add session" clickable so the picker's refresh-on-open can pick up sessions created elsewhere `priority/P3` `type/feature-request` `category/ui` `scope/session-management` 💬2
- [#15679](https://github.com/QwenLM/qwen-code/issues/15679) An `@AGENTS.md` import in CLAUDE.md loads AGENTS.md twice when both names are in `context.fileName` `priority/P2` `type/bug` `category/core` `scope/memory` 💬2
- [#15674](https://github.com/QwenLM/qwen-code/issues/15674) Deferred review findings from PR #15441: fix(acp): carry rewind identity through daemon clients `priority/P3` `status/blocked` `category/performance` `scope/session-management` 💬2
- [#15672](https://github.com/QwenLM/qwen-code/issues/15672) Release Failed for v0.26.2-preview.0 on 2026-10-26 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#15666](https://github.com/QwenLM/qwen-code/issues/15666) managed-agent: in a Harness pool, the public automation routes answer self-healing refusals (`harness_owner_still_live`, `hosted_harness_quiescing`) as 409 `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#15667](https://github.com/QwenLM/qwen-code/issues/15667) managed-agent: since the row pool, fires on a Session shared by gated definitions can lose their answer by queueing in the Harness funnel `priority/P2` `type/bug` `roadmap/background-automation` `need-discussion` 💬2
- [#15664](https://github.com/QwenLM/qwen-code/issues/15664) verify-pr: compare the report head OID against the round's own snapshot `priority/P3` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#15652](https://github.com/QwenLM/qwen-code/issues/15652) feat(managed-agent): support embedding the control plane in existing Java applications `priority/P2` `type/feature-request` `category/platform` `scope/packaging` 💬2
- [#15653](https://github.com/QwenLM/qwen-code/issues/15653) OAuth: non-owner SharedTokenManager exit deletes active refresh lock `priority/P2` `type/bug` `category/authentication` `scope/oauth` 💬2
- [#15649](https://github.com/QwenLM/qwen-code/issues/15649) MCP OAuth: access token is pinned at connect time, so an HTTP MCP server drops (and the session loses its tools) once the token expires `priority/P2` `type/bug` `category/authentication` `scope/oauth` 💬2
- [#15647](https://github.com/QwenLM/qwen-code/issues/15647) feat(web-shell): add a configurable simple input mode `priority/P3` `type/feature-request` `category/ui` `scope/components` 💬2
- [#15646](https://github.com/QwenLM/qwen-code/issues/15646) bug(web-shell): Plugins has no visible way back to chat in compact/narrow layout `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#15645](https://github.com/QwenLM/qwen-code/issues/15645) bug(daemon): config skills catalog stays stale after an agent creates a project skill on disk `priority/P2` `type/bug` `category/cli` `scope/extensions` 💬2
- [#15630](https://github.com/QwenLM/qwen-code/issues/15630) feat(channels): deliver an injected user message into the running turn via a per-session mid-turn queue `priority/P3` `type/feature-request` `category/integration` `status/ready-for-human` 💬2
- [#15680](https://github.com/QwenLM/qwen-code/issues/15680) Main CI failed: SDK Java — ManagedExtensionCreationMySqlIT.pinsInitialPackagesInTheCreationReceiptAndOnlyPermitsTheirFirstBootstrap `status/needs-triage` `type/bug`
- [#15665](https://github.com/QwenLM/qwen-code/issues/15665) Main CI failed: E2E Tests — cli/edit.test.ts > … > should insert a multi-line block of text `status/needs-triage` `type/bug`
- [#15662](https://github.com/QwenLM/qwen-code/issues/15662) Main CI failed: Managed Agent gate — DurableRuntimeRecoveryTest.unknownObservationNeverCreatesOrReplacesAReadyResource `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#15613](https://github.com/QwenLM/qwen-code/issues/15613) Interleaved reasoning is reordered in TUI and flattened in Chat Completions replay
- [#15299](https://github.com/QwenLM/qwen-code/issues/15299) web_search: allow configuring extra trusted hosts for the DashScope-compatible search endpoint

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

**Stars:** 393,161 · **Open issues:** 7,945 · **Last push:** <1h ago

Today saw no new releases for OpenClaw, but several significant changes were merged, enhancing overall functionality and performance. Notable updates include the preservation of lazy Codex consumers in export scans (#185300) and improvements to the handling of prepared row facts across equivalent catalogs (#185307). Additionally, several crucial bug fixes were implemented, such as avoiding sign-in warnings for OAuth token expiry (#185263) and ensuring pasted chat images retain the correct aspect ratio after remounting (#185154). Among the newly reported issues, a critical bug was identified regarding inconsistent operator scope semantics, which affects clients with admin rights being rejected for missing read permissions (#184315).

#### ✅ Merged PRs
- [#185304](https://github.com/openclaw/openclaw/pull/185304) test(qa-lab,gateway): remove low-value tests (batch d648)
- [#185268](https://github.com/openclaw/openclaw/pull/185268) test(fixtures): remove low-value tests (batch d644)
- [#185307](https://github.com/openclaw/openclaw/pull/185307) perf(gateway): retain prepared row facts across equivalent catalogs
- [#185300](https://github.com/openclaw/openclaw/pull/185300) fix: preserve lazy Codex consumers in export scans
- [#185302](https://github.com/openclaw/openclaw/pull/185302) refactor(test): consolidate record coercion proof
- [#185193](https://github.com/openclaw/openclaw/pull/185193) fix(release): credit original PR authors instead of backporters
- [#185263](https://github.com/openclaw/openclaw/pull/185263) fix: avoid sign-in warnings for routine OAuth token expiry
- [#185292](https://github.com/openclaw/openclaw/pull/185292) fix(ui): saved Side chat comments cannot send without a second question
- [#185249](https://github.com/openclaw/openclaw/pull/185249) perf(infra): drop unused plugin root load tracking
- [#185287](https://github.com/openclaw/openclaw/pull/185287) perf(plugins): avoid prompt hook envelope entry tuples
- [#185264](https://github.com/openclaw/openclaw/pull/185264) fix: sidebar spinners stay left in ungrouped session lists
- [#185154](https://github.com/openclaw/openclaw/pull/185154) fix: pasted chat images keep the wrong aspect ratio until remount
- [#185281](https://github.com/openclaw/openclaw/pull/185281) perf(agents): reuse installed inventory fingerprints during catalog refresh
- [#185070](https://github.com/openclaw/openclaw/pull/185070) fix(cron): scheduled automations run on whatever runtime their session copies instead of the one they were bound for
- [#185271](https://github.com/openclaw/openclaw/pull/185271) test(agents, codex, update): remove low-value tests (batch d645)
- [#185282](https://github.com/openclaw/openclaw/pull/185282) perf(agents): share prepared search text across run catalogs
- [#185283](https://github.com/openclaw/openclaw/pull/185283) perf(infra): avoid duplicate stall attribution context copies
- [#185261](https://github.com/openclaw/openclaw/pull/185261) fix(ui): running tools show unknown after history refresh
- [#185204](https://github.com/openclaw/openclaw/pull/185204) test(qa): initialize converged state in unrelated e2e fixtures
- [#185128](https://github.com/openclaw/openclaw/pull/185128) perf(infra): bound Control UI asset reader nursery capacity
- [#185278](https://github.com/openclaw/openclaw/pull/185278) refactor(test): remove obsolete systemd callback fixtures
- [#185277](https://github.com/openclaw/openclaw/pull/185277) test(doctor): keep autostart policy independent of process state
- [#183964](https://github.com/openclaw/openclaw/pull/183964) fix(setup): model setup hangs when the Gateway does not apply its config
- [#185216](https://github.com/openclaw/openclaw/pull/185216) test(fixtures): remove low-value tests (batch d643)
- [#185269](https://github.com/openclaw/openclaw/pull/185269) refactor: tighten internal export surfaces
- [#185185](https://github.com/openclaw/openclaw/pull/185185) perf(agents): avoid repeated transcript source validation
- [#181747](https://github.com/openclaw/openclaw/pull/181747) feat(skills): review background learning as drafts with Skill Workshop propose mode
- [#185274](https://github.com/openclaw/openclaw/pull/185274) chore(ui): refresh control ui locales
- [#184241](https://github.com/openclaw/openclaw/pull/184241) fix(workboard): moving a claimed card to done or blocked leaves its owner unable to start new work
- [#185257](https://github.com/openclaw/openclaw/pull/185257) fix(plugins): release failed refresh build graphs
- [#185248](https://github.com/openclaw/openclaw/pull/185248) fix: retain chat prompts when read acknowledgments overlap startup
- [#185212](https://github.com/openclaw/openclaw/pull/185212) test(core,plugins,ui): remove low-value tests (batch d641)
- [#185260](https://github.com/openclaw/openclaw/pull/185260) refactor(test): consolidate image live-test helpers
- [#185224](https://github.com/openclaw/openclaw/pull/185224) perf(gateway): avoid redundant active-run projection scans
- [#185255](https://github.com/openclaw/openclaw/pull/185255) perf(agents): release settled context engine execution state
- [#185245](https://github.com/openclaw/openclaw/pull/185245) fix: session spinners start late when agent work begins
- [#185042](https://github.com/openclaw/openclaw/pull/185042) fix(clawrouter): keep routed replies from losing the selected model
- [#185252](https://github.com/openclaw/openclaw/pull/185252) fix: tool-result continuations fail after a Gateway restart
- [#185188](https://github.com/openclaw/openclaw/pull/185188) perf(gateway): keep channel secret metadata imports lightweight
- [#185227](https://github.com/openclaw/openclaw/pull/185227) improve(ui): show Sign in after installing plugins that need an account
- [#185246](https://github.com/openclaw/openclaw/pull/185246) ci: avoid duplicate Node priming in hourly cache warm
- [#185214](https://github.com/openclaw/openclaw/pull/185214) test(ai,gateway,infra,ui,agents): remove low-value tests (batch d642)
- [#185203](https://github.com/openclaw/openclaw/pull/185203) fix: valid session checkouts fail GitHub publication
- [#185232](https://github.com/openclaw/openclaw/pull/185232) fix(gateway): attribute pre-ACK input persistence waits
- [#185189](https://github.com/openclaw/openclaw/pull/185189) test(runtime): remove low-value tests (batch d640)
- [#185243](https://github.com/openclaw/openclaw/pull/185243) fix: keep performance tools in dead-code graph
- [#185060](https://github.com/openclaw/openclaw/pull/185060) fix(x): multi-image replies sent through shared delivery post one reply per image
- [#185239](https://github.com/openclaw/openclaw/pull/185239) perf(agents): retire surplus Code Mode workers during serial traffic
- [#185244](https://github.com/openclaw/openclaw/pull/185244) fix: align model catalog checks with standard Access defaults
- [#185251](https://github.com/openclaw/openclaw/pull/185251) fix: disambiguate Codex config loader
- [#185235](https://github.com/openclaw/openclaw/pull/185235) refactor(test): remove unused CI fixture controls
- [#185031](https://github.com/openclaw/openclaw/pull/185031) test(ui): share session setup and remove duplicate archive waits
- [#185172](https://github.com/openclaw/openclaw/pull/185172) feat: show third-party plugin logos in tool previews
- [#185221](https://github.com/openclaw/openclaw/pull/185221) fix: interrupted sessions stall after a Gateway restart
- [#181680](https://github.com/openclaw/openclaw/pull/181680) feat: add personal session groups
- [#185240](https://github.com/openclaw/openclaw/pull/185240) chore(ui): refresh control ui locales
- [#185202](https://github.com/openclaw/openclaw/pull/185202) perf(infra): avoid copying owned image worker buffers
- [#185171](https://github.com/openclaw/openclaw/pull/185171) fix: preserve candidate Doctor authority checks
- [#185222](https://github.com/openclaw/openclaw/pull/185222) perf(agents): reduce plain-text stream normalization overhead
- [#185218](https://github.com/openclaw/openclaw/pull/185218) perf(agents): avoid serializing subagent identities for liveness reads
- [#185205](https://github.com/openclaw/openclaw/pull/185205) fix(ui): remove ellipsis from queued-turn status
- [#185210](https://github.com/openclaw/openclaw/pull/185210) fix: sidebar browser tabs stay open after their page closes
- [#185217](https://github.com/openclaw/openclaw/pull/185217) perf(skills): reuse selected discovery arrays during snapshot hydration
- [#185211](https://github.com/openclaw/openclaw/pull/185211) fix: restore sandbox contract test coverage
- [#185209](https://github.com/openclaw/openclaw/pull/185209) refactor(test): remove unused release dispatch fixture controls
- [#184651](https://github.com/openclaw/openclaw/pull/184651) perf(test): narrow built CLI worker compilation
- [#185169](https://github.com/openclaw/openclaw/pull/185169) perf(infra): name Knowledge workers and trim storage imports
- [#185125](https://github.com/openclaw/openclaw/pull/185125) perf(infra): reduce small worker module retention
- [#185198](https://github.com/openclaw/openclaw/pull/185198) improve: move people actions into a context menu
- [#185197](https://github.com/openclaw/openclaw/pull/185197) perf(models): reuse prepared speed policy for model listings
- [#185195](https://github.com/openclaw/openclaw/pull/185195) fix(models): stop catalog refresh storms after tier downgrades
- [#180356](https://github.com/openclaw/openclaw/pull/180356) fix(update): enter maintenance before repairing source artifacts
- [#185177](https://github.com/openclaw/openclaw/pull/185177) perf(infra): skip cycle trackers for flat diagnostic leaves
- [#177636](https://github.com/openclaw/openclaw/pull/177636) feat(typesafe): judge V2 image state with hosted Jev
- [#185139](https://github.com/openclaw/openclaw/pull/185139) test(plugins,agents,acp): remove low-value tests (batch d637)
- [#185152](https://github.com/openclaw/openclaw/pull/185152) test(ui,plugins,core): remove low-value tests (batch d638)
- [#185166](https://github.com/openclaw/openclaw/pull/185166) test(core, chat): remove low-value tests (batch d639)
- [#185134](https://github.com/openclaw/openclaw/pull/185134) fix: allow session group drops when Person grouping falls back
- [#185187](https://github.com/openclaw/openclaw/pull/185187) perf(infra): avoid first-event timeout settlement promises
- [#185167](https://github.com/openclaw/openclaw/pull/185167) test(gateway): assert hidden goal continuation transcripts
- [#185046](https://github.com/openclaw/openclaw/pull/185046) fix(ui): keep internal declarations out of unused exports
- [#185019](https://github.com/openclaw/openclaw/pull/185019) perf(gateway): reuse unchanged GitHub polling responses
- [#185026](https://github.com/openclaw/openclaw/pull/185026) perf(cron): reuse search text within list snapshots
- [#185156](https://github.com/openclaw/openclaw/pull/185156) perf(agents): share resident transcript strings across reloads
- [#184995](https://github.com/openclaw/openclaw/pull/184995) test(multi): remove low-value tests (batch d628)
- [#184973](https://github.com/openclaw/openclaw/pull/184973) test(core,plugins): remove low-value tests (batch d625)
- [#185168](https://github.com/openclaw/openclaw/pull/185168) fix(chat): hide raw tool handoff resume rows after plugin reload or GitHub publish
- [#185183](https://github.com/openclaw/openclaw/pull/185183) perf(gateway): reuse broadcast WebSocket headers across peers
- [#185182](https://github.com/openclaw/openclaw/pull/185182) fix: remove excess spacing above session hovercard errors
- [#185179](https://github.com/openclaw/openclaw/pull/185179) perf(gateway): skip full-row sizing for small session deltas
- [#185175](https://github.com/openclaw/openclaw/pull/185175) refactor(test): remove unused shrinkwrap fixture generation
- [#185181](https://github.com/openclaw/openclaw/pull/185181) chore(test): lower test-lines ceiling to 6,280,000
- [#185176](https://github.com/openclaw/openclaw/pull/185176) perf(state): avoid discarded worker environments in warm cron preparation
- [#184772](https://github.com/openclaw/openclaw/pull/184772) fix(qa): initialize runtime fixtures without full repair
- [#185170](https://github.com/openclaw/openclaw/pull/185170) fix: preserve private tool parameters across hook rewrites
- [#185115](https://github.com/openclaw/openclaw/pull/185115) ci: retain transform caches across database test selection edits
- [#185165](https://github.com/openclaw/openclaw/pull/185165) perf(ui): reduce typing work in the composer
- [#185131](https://github.com/openclaw/openclaw/pull/185131) fix(chat): remove activity hover tooltip and dim live text
- [#185173](https://github.com/openclaw/openclaw/pull/185173) test(codex): preserve recovered-artifact finalizer isolation
- [#185159](https://github.com/openclaw/openclaw/pull/185159) perf(ai): reuse request schema depth admission
- [#185153](https://github.com/openclaw/openclaw/pull/185153) perf(ai): avoid per-frame SSE delimiter match allocations
- [#185150](https://github.com/openclaw/openclaw/pull/185150) perf(state): reduce archive-worker startup heap
- [#185120](https://github.com/openclaw/openclaw/pull/185120) fix: dashboard previews and focused views reject session-only guests
- [#185158](https://github.com/openclaw/openclaw/pull/185158) perf(gateway): skip PR refreshes for participant-only updates
- [#185105](https://github.com/openclaw/openclaw/pull/185105) test(providers,storage,ui): remove low-value tests (batch d635)
- [#185010](https://github.com/openclaw/openclaw/pull/185010) perf(gateway): reuse plugin access assertion callbacks
- [#185164](https://github.com/openclaw/openclaw/pull/185164) fix(control-ui): sign-in dialog shows a letter instead of the provider logo
- [#185108](https://github.com/openclaw/openclaw/pull/185108) fix(ui): stop showing public sessions as warnings
- [#185101](https://github.com/openclaw/openclaw/pull/185101) perf(infra): defer snapshot code in Git inspection workers
- [#184853](https://github.com/openclaw/openclaw/pull/184853) fix(clickclack): bot stops receiving messages after a silent network drop
- [#185122](https://github.com/openclaw/openclaw/pull/185122) fix(ui): remove the sidebar new-session hover background
- [#184855](https://github.com/openclaw/openclaw/pull/184855) perf(ui): load Channels only when a route needs it
- [#185063](https://github.com/openclaw/openclaw/pull/185063) perf(ui): retain Usage chart and filter presentation
- [#182039](https://github.com/openclaw/openclaw/pull/182039) fix: show recovery steps for oversized sandbox artifacts
- [#185135](https://github.com/openclaw/openclaw/pull/185135) refactor(test): remove unused native PR fixture options
- [#185136](https://github.com/openclaw/openclaw/pull/185136) perf(gateway): reuse session store identities per config generation
- [#185006](https://github.com/openclaw/openclaw/pull/185006) perf(sessions): share identical retained skill snapshots
- [#185119](https://github.com/openclaw/openclaw/pull/185119) chore: align service restore fixture with supported Bun
- [#185102](https://github.com/openclaw/openclaw/pull/185102) fix: retry transient mobile release-note failures
- [#185002](https://github.com/openclaw/openclaw/pull/185002) fix(update): repair cannot settle cancelled update custody on macOS, blocking every later update
- [#185117](https://github.com/openclaw/openclaw/pull/185117) fix(ios): show latest-reply jump after chat layout settles
- [#185132](https://github.com/openclaw/openclaw/pull/185132) perf(agents): avoid schema projection entry allocations
- [#185041](https://github.com/openclaw/openclaw/pull/185041) fix(agent): give agent exec sessions owner memory audience
- [#184124](https://github.com/openclaw/openclaw/pull/184124) docs(release): recommend shared hotfix ledger for backports
- [#185126](https://github.com/openclaw/openclaw/pull/185126) fix: native landings reject completed security review replays
- [#185112](https://github.com/openclaw/openclaw/pull/185112) perf(gateway): release evicted profile avatar bytes
- [#185133](https://github.com/openclaw/openclaw/pull/185133) perf(gateway): avoid splitting paths during workspace comparison
- [#185072](https://github.com/openclaw/openclaw/pull/185072) test(providers,ui,qa): remove low-value tests (batch d633)
- [#185124](https://github.com/openclaw/openclaw/pull/185124) perf(ai): eliminate intermediate Responses SSE messages
- [#185107](https://github.com/openclaw/openclaw/pull/185107) test: remove low-value tests (batch d636)
- [#185048](https://github.com/openclaw/openclaw/pull/185048) docs(nix): macOS Gateway service does not add Nix profiles to PATH
- [#183862](https://github.com/openclaw/openclaw/pull/183862) perf(control-ui): retain sidebar presentation through live handoff
- [#184959](https://github.com/openclaw/openclaw/pull/184959) fix(ui): align live typing caret with message text
- [#185113](https://github.com/openclaw/openclaw/pull/185113) perf(gateway): share presence watch selections by audience
- [#185109](https://github.com/openclaw/openclaw/pull/185109) fix(cli): let setup run while a Gateway owns state
- [#185071](https://github.com/openclaw/openclaw/pull/185071) test(runtime,ui): remove low-value tests (batch d634)
- [#184905](https://github.com/openclaw/openclaw/pull/184905) fix: update rehearsal preserves the original cron partition
- [#185103](https://github.com/openclaw/openclaw/pull/185103) fix: snapshot SQLite query metadata before statement disposal
- [#184996](https://github.com/openclaw/openclaw/pull/184996) fix: session observer rejects models with discovered chat support
- [#184945](https://github.com/openclaw/openclaw/pull/184945) test(runtime,plugins,ui): remove low-value tests (batch d624)
- [#184963](https://github.com/openclaw/openclaw/pull/184963) perf(infra): avoid copying warm worker task transfer lists
- [#184939](https://github.com/openclaw/openclaw/pull/184939) perf(agents): avoid copying history for turn taint scans
- [#185095](https://github.com/openclaw/openclaw/pull/185095) perf(agents): reuse frozen tool-result size estimates
- [#185114](https://github.com/openclaw/openclaw/pull/185114) fix(ui): align plugin controls with card titles
- [#184947](https://github.com/openclaw/openclaw/pull/184947) perf(control-ui): stop cron runtime inventory refetches
- [#185110](https://github.com/openclaw/openclaw/pull/185110) perf(agents): avoid redundant streamed event work
- [#185106](https://github.com/openclaw/openclaw/pull/185106) fix(agents): settle stale subagent runs from their own execution after Gateway restarts
- [#185104](https://github.com/openclaw/openclaw/pull/185104) perf(gateway): avoid native hashing for short row delta fields
- [#185099](https://github.com/openclaw/openclaw/pull/185099) perf(gateway): flatten catalog entries without temporary arrays
- [#185096](https://github.com/openclaw/openclaw/pull/185096) perf(state): remove redundant engine scope from SQLite dispatch
- [#185082](https://github.com/openclaw/openclaw/pull/185082) perf(sessions): skip empty reducer work on transcript appends
- [#185100](https://github.com/openclaw/openclaw/pull/185100) refactor(test): remove unused jsdom registry re-export
- [#185086](https://github.com/openclaw/openclaw/pull/185086) perf(agents): preserve unchanged request history identities
- [#185089](https://github.com/openclaw/openclaw/pull/185089) perf(state): avoid duplicate identity resolution in custody checks
- [#184915](https://github.com/openclaw/openclaw/pull/184915) fix(discord): stop outbound sends when the caller cancels
- [#185087](https://github.com/openclaw/openclaw/pull/185087) perf(sessions): avoid rescanning empty uncommitted checkouts
- [#185067](https://github.com/openclaw/openclaw/pull/185067) fix: hide stale personal pins after sharing changes
- [#185062](https://github.com/openclaw/openclaw/pull/185062) perf(ui): reuse sidebar snooze wake projections
- [#185093](https://github.com/openclaw/openclaw/pull/185093) perf(agents): reuse reconstructed text update envelopes
- [#185045](https://github.com/openclaw/openclaw/pull/185045) test(providers,gateway): remove low-value tests (batch d632)
- [#185043](https://github.com/openclaw/openclaw/pull/185043) test(ui,security,providers): remove low-value tests (batch d631)
- [#185057](https://github.com/openclaw/openclaw/pull/185057) perf(gateway): defer the Anthropic client SDK until first use
- [#185084](https://github.com/openclaw/openclaw/pull/185084) test(codex): expect apply_patch recovery guidance in containment response
- [#185083](https://github.com/openclaw/openclaw/pull/185083) perf(agents): coalesce plugin-backed stream transforms
- [#185069](https://github.com/openclaw/openclaw/pull/185069) chore(ui): refresh control ui locales
- [#185066](https://github.com/openclaw/openclaw/pull/185066) perf(gateway): coalesce agent-directory recovery checks
- [#185081](https://github.com/openclaw/openclaw/pull/185081) refactor(test): remove unused subagent fixture options
- [#185023](https://github.com/openclaw/openclaw/pull/185023) perf(gateway): avoid repeated workspace ownership checks
- [#185073](https://github.com/openclaw/openclaw/pull/185073) perf(gateway): reuse the prepared session snapshot envelope
- [#185074](https://github.com/openclaw/openclaw/pull/185074) perf(gateway): avoid renormalizing retained operator role grants
- [#185077](https://github.com/openclaw/openclaw/pull/185077) perf(process): reduce child memory parsing allocations
- [#182625](https://github.com/openclaw/openclaw/pull/182625) fix: personal dashboards fail for session-only guests
- [#185050](https://github.com/openclaw/openclaw/pull/185050) fix: source builds fail when declaring the shared stream observer
- [#185004](https://github.com/openclaw/openclaw/pull/185004) refactor: deslop agent tools, plugin internals and UI owners
- [#184966](https://github.com/openclaw/openclaw/pull/184966) fix(memory): keep embedding credentials with their destination
- [#185022](https://github.com/openclaw/openclaw/pull/185022) test(ui): consolidate palette and Workboard browser flows
- [#185015](https://github.com/openclaw/openclaw/pull/185015) perf(ai): reuse unchanged Responses image preparation
- [#184980](https://github.com/openclaw/openclaw/pull/184980) fix: personal instructions are blocked for session-only users
- [#184802](https://github.com/openclaw/openclaw/pull/184802) perf(ci): reuse UI build content in real-Gateway jobs
- [#185025](https://github.com/openclaw/openclaw/pull/185025) perf(ui): avoid rebuilding model selection metadata
- [#185065](https://github.com/openclaw/openclaw/pull/185065) fix(bench): keep quiet Talk profiles free of question retries
- [#185049](https://github.com/openclaw/openclaw/pull/185049) perf(gateway): reuse producer-owned session event envelopes
- [#185038](https://github.com/openclaw/openclaw/pull/185038) fix(browser): Chrome keeps an old relay after an in-place app update
- [#185055](https://github.com/openclaw/openclaw/pull/185055) perf(agents): reuse acknowledged catalog worker metadata
- [#185033](https://github.com/openclaw/openclaw/pull/185033) fix(plugins): share native module resolution hooks
- [#184972](https://github.com/openclaw/openclaw/pull/184972) fix(ui): qualify readiness benchmark evidence
- [#185039](https://github.com/openclaw/openclaw/pull/185039) fix(ui): preserve Daybreak choices across chats
- [#185047](https://github.com/openclaw/openclaw/pull/185047) test(android): await controller shutdown before closing Room
- [#185011](https://github.com/openclaw/openclaw/pull/185011) test(core,plugins): remove low-value tests (batch d629)
- [#185030](https://github.com/openclaw/openclaw/pull/185030) test(core,plugins): remove low-value tests (batch d630)
- [#185053](https://github.com/openclaw/openclaw/pull/185053) refactor(test): remove obsolete media fixture helpers
- [#184990](https://github.com/openclaw/openclaw/pull/184990) fix(agents): release completed run state from retained async contexts
- [#184705](https://github.com/openclaw/openclaw/pull/184705) perf(ci): avoid broad runtime imports in UI tests
- [#185051](https://github.com/openclaw/openclaw/pull/185051) fix(agents): keep settled subagent terminal replies resident
- [#185016](https://github.com/openclaw/openclaw/pull/185016) perf(state): decode hydrated session participants once
- [#184941](https://github.com/openclaw/openclaw/pull/184941) fix(muse): release native sessions when plugins reload
- [#184921](https://github.com/openclaw/openclaw/pull/184921) perf(plugins): keep cold catalog waits off plugins.list
- [#184896](https://github.com/openclaw/openclaw/pull/184896) perf(codex): skip unrelated rollout record parsing
- [#185052](https://github.com/openclaw/openclaw/pull/185052) docs: remove committed Talk lane report
- [#185009](https://github.com/openclaw/openclaw/pull/185009) perf(codex): reuse lazy modules across requests
- [#185014](https://github.com/openclaw/openclaw/pull/185014) perf(agents): reuse replay tool-result pairing facts
- [#184714](https://github.com/openclaw/openclaw/pull/184714) perf: reduce New Session startup CPU with saved pins
- [#179731](https://github.com/openclaw/openclaw/pull/179731) fix(subagents): avoid re-killing terminal runs during session reset
- [#185032](https://github.com/openclaw/openclaw/pull/185032) perf(infra): reduce model request watchdog allocations
- [#184743](https://github.com/openclaw/openclaw/pull/184743) fix(ui): keep unsaved Talk captions where they were spoken, not below later typed messages
- [#185035](https://github.com/openclaw/openclaw/pull/185035) fix(ui): guest person cards fail to load on mention chips
- [#180840](https://github.com/openclaw/openclaw/pull/180840) fix(sandbox): pin writable ancestors of nested protected skill mounts
- [#185037](https://github.com/openclaw/openclaw/pull/185037) test: align directive-tag and apply-patch expectations with current behaviour
- [#185034](https://github.com/openclaw/openclaw/pull/185034) test: make Docker build interruption readiness durable
- [#184978](https://github.com/openclaw/openclaw/pull/184978) docs: clarify plugin allowlist and default memory slot precedence
- [#185008](https://github.com/openclaw/openclaw/pull/185008) perf(state): trim retained read worker module graph
- [#183681](https://github.com/openclaw/openclaw/pull/183681) fix(talk): close the relay when startup is cancelled
- [#184964](https://github.com/openclaw/openclaw/pull/184964) fix(media): honor explicit read policies for reply attachments
- [#185029](https://github.com/openclaw/openclaw/pull/185029) perf(agents): reduce session stream dispatch allocation
- [#185027](https://github.com/openclaw/openclaw/pull/185027) perf(gateway): reuse unchanged prepared session run states
- [#185036](https://github.com/openclaw/openclaw/pull/185036) docs(ui): report Talk performance round two
- [#185020](https://github.com/openclaw/openclaw/pull/185020) fix(test): make media cleanup fixtures independent of elapsed time
- [#180608](https://github.com/openclaw/openclaw/pull/180608) fix(agents): subagent completions miss the prompt cache when owners are configured
- [#184988](https://github.com/openclaw/openclaw/pull/184988) fix(agents): keep interrupted children recoverable after restart
- [#184984](https://github.com/openclaw/openclaw/pull/184984) test(core,plugins,ui): remove low-value tests (batch d627)
- [#185013](https://github.com/openclaw/openclaw/pull/185013) perf(codex): reuse parsed config across request preparation
- [#184764](https://github.com/openclaw/openclaw/pull/184764) fix(ui): refine effort selection and speed controls
- [#184923](https://github.com/openclaw/openclaw/pull/184923) fix(codex): keep scheduled grants valid across runtime upgrades
- [#183728](https://github.com/openclaw/openclaw/pull/183728) fix(doctor): preserve allowed automatic child-session model selections
- [#185003](https://github.com/openclaw/openclaw/pull/185003) fix(knowledge): do not skip a maintenance day on spring-forward
- [#178692](https://github.com/openclaw/openclaw/pull/178692) fix: path set resets numbers to zero for blank values
- [#184839](https://github.com/openclaw/openclaw/pull/184839) fix(macos): Mac tab loses favicon after anchor click or failed navigation
- [#183309](https://github.com/openclaw/openclaw/pull/183309) fix(sessions): background turns reset a direct model pick that resembles the default route
- [#184985](https://github.com/openclaw/openclaw/pull/184985) perf(gateway): avoid preparing chat attachment workspaces twice
- [#178865](https://github.com/openclaw/openclaw/pull/178865) fix(sessions): let a coordinator steer its running Claude CLI child
- [#178581](https://github.com/openclaw/openclaw/pull/178581) fix(mattermost): deny instead of pairing when the pending queue is full
- [#184997](https://github.com/openclaw/openclaw/pull/184997) fix(ui): render large Markdown files in the chat sidebar
- [#184760](https://github.com/openclaw/openclaw/pull/184760) fix(ui): clarify effort and speed indicators
- [#184759](https://github.com/openclaw/openclaw/pull/184759) fix(ui): refine composer layout across screen sizes
- [#184977](https://github.com/openclaw/openclaw/pull/184977) test(core,plugins): remove low-value tests (batch d626)
- [#184993](https://github.com/openclaw/openclaw/pull/184993) perf(infra): reduce allocation during tool event delivery
- [#180918](https://github.com/openclaw/openclaw/pull/180918) fix(oc-path): preserve comments when filling empty frontmatter values
- [#184961](https://github.com/openclaw/openclaw/pull/184961) perf(ui): draw active Talk meters on one canvas
- [#185018](https://github.com/openclaw/openclaw/pull/185018) chore(ui): refresh control ui locales
- [#183719](https://github.com/openclaw/openclaw/pull/183719) fix: keep Profile name editing focused after a failed keyboard save
- [#179707](https://github.com/openclaw/openclaw/pull/179707) fix: queued messages wait when a run is blocked before starting
- [#184987](https://github.com/openclaw/openclaw/pull/184987) refactor: deslop commands, Gateway fixtures and runtime helpers
- [#178783](https://github.com/openclaw/openclaw/pull/178783) fix(agents): omit unconfigured Gateway computer target from surface
- [#184033](https://github.com/openclaw/openclaw/pull/184033) fix(discord): Gateway does not exit after a restart overtakes a slow Discord startup
- [#184974](https://github.com/openclaw/openclaw/pull/184974) fix: E2E watchdog runs commands through path aliases
- [#185001](https://github.com/openclaw/openclaw/pull/185001) refactor(test): consolidate remote filename parsing coverage
- [#181773](https://github.com/openclaw/openclaw/pull/181773) fix(sms): reject unsupported attachments with prototype-named media types
- [#184992](https://github.com/openclaw/openclaw/pull/184992) fix(codex): preserve steered turns after final replies
- [#180451](https://github.com/openclaw/openclaw/pull/180451) fix(subagents): keep native child replies consistent in parent completion
- [#179192](https://github.com/openclaw/openclaw/pull/179192) fix(agents): keep model aliases in prompt after snapshot retirement
- [#184954](https://github.com/openclaw/openclaw/pull/184954) perf(sandbox): inspect reused containers once during setup
- [#183067](https://github.com/openclaw/openclaw/pull/183067) fix(ui): keep the command palette stable while a shortcut key is held
- [#185000](https://github.com/openclaw/openclaw/pull/185000) chore(ui): refresh control ui locales
- [#183664](https://github.com/openclaw/openclaw/pull/183664) docs: correct WebChat attachment failure recovery guidance
- [#184998](https://github.com/openclaw/openclaw/pull/184998) fix: large-prompt work count survives shared test lifecycle
- [#184975](https://github.com/openclaw/openclaw/pull/184975) fix: keep maintained browser performance commands in dead-code graph
- [#184983](https://github.com/openclaw/openclaw/pull/184983) perf(gateway): avoid retaining unused sidebar row JSON
- [#178450](https://github.com/openclaw/openclaw/pull/178450) fix(release): allow metadata readback to converge on the GitHub CDN
- [#181831](https://github.com/openclaw/openclaw/pull/181831) fix: plugin artifact fixture fails on Windows absolute paths
- [#184981](https://github.com/openclaw/openclaw/pull/184981) perf(agents): stop dedupe entries retaining completed run contexts
- [#184767](https://github.com/openclaw/openclaw/pull/184767) fix(ui): refine composer context layout on mobile
- [#183712](https://github.com/openclaw/openclaw/pull/183712) fix(gateway): resume outbound recovery when active leases expire
- [#184979](https://github.com/openclaw/openclaw/pull/184979) refactor(test): consolidate media probe coverage
- [#184725](https://github.com/openclaw/openclaw/pull/184725) perf(test): share the media transcript Gateway fixture
- [#184777](https://github.com/openclaw/openclaw/pull/184777) fix(ui): clarify execution permission picker states
- [#184982](https://github.com/openclaw/openclaw/pull/184982) test(lmstudio): retain real transport routing proof (batch d624)
- [#184856](https://github.com/openclaw/openclaw/pull/184856) perf(ui): bound model picker work and isolate Cron input painting
- [#180395](https://github.com/openclaw/openclaw/pull/180395) fix: keep tool directory stable across external inventory
- [#184976](https://github.com/openclaw/openclaw/pull/184976) fix: stabilize merge fork checks on fast CI hosts
- [#181865](https://github.com/openclaw/openclaw/pull/181865) docs(postgres): document Unix-socket connections for a server on the Gateway host
- [#184569](https://github.com/openclaw/openclaw/pull/184569) test(ui): remove repeated browser and Gateway fixture work
- [#182144](https://github.com/openclaw/openclaw/pull/182144) fix(cron): follow-up wait drops subagent results or overruns when the wall clock jumps
- [#182941](https://github.com/openclaw/openclaw/pull/182941) fix(ui): recover when restricted members cannot open Home
- [#184707](https://github.com/openclaw/openclaw/pull/184707) fix(ui): quote multiword Usage filter values when selecting them
- [#184920](https://github.com/openclaw/openclaw/pull/184920) test(core,plugins,ui): remove low-value tests (batch d622)
- [#184780](https://github.com/openclaw/openclaw/pull/184780) fix(ui): refine composer media and capability menus
- [#178569](https://github.com/openclaw/openclaw/pull/178569) fix(web-readability): preserve block boundaries in text extraction
- [#184847](https://github.com/openclaw/openclaw/pull/184847) fix(beam): match canonically equivalent session titles
- [#184866](https://github.com/openclaw/openclaw/pull/184866) fix: path results report wrong lines after carriage returns
- [#184968](https://github.com/openclaw/openclaw/pull/184968) chore: remove unused private export edges
- [#183924](https://github.com/openclaw/openclaw/pull/183924) fix(google-meet): keep routing speaker output when one media element rejects setSinkId
- [#184899](https://github.com/openclaw/openclaw/pull/184899) perf(gateway): expose session partition reuse counters
- [#184531](https://github.com/openclaw/openclaw/pull/184531) fix: let local chats publish their task checkout
- [#184958](https://github.com/openclaw/openclaw/pull/184958) fix(update): updates fail at runtime retention on installs with very large dependency trees
- [#184702](https://github.com/openclaw/openclaw/pull/184702) fix(ui): show model changes only after sending a message
- [#182232](https://github.com/openclaw/openclaw/pull/182232) fix: duplicate plugin warnings omit the ignored source path

#### 🐛 New Issues
- [#184315](https://github.com/openclaw/openclaw/issues/184315) [Bug]: Operator scope semantics are inconsistent: a client holding operator.admin is rejected with missing scope: operator.read `bug` `bug:behavior` `P2` `clawsweeper:needs-info` 💬7
- [#184318](https://github.com/openclaw/openclaw/issues/184318) [Bug]: Local CLI omits device identity on loopback + shared token, so every operator.* command fails with a misleading missing scope error `bug` `bug:behavior` `P2` `impact:auth-provider` 💬4
- [#185272](https://github.com/openclaw/openclaw/issues/185272) [Bug]: TypeSafe transport normalizer redirects OpenRouter requests to api.typesafe.ai, causing 404 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬3
- [#184658](https://github.com/openclaw/openclaw/issues/184658) [Bug]: Windows npm update reports missing-module cleanup failures after successful package swap `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#184720](https://github.com/openclaw/openclaw/issues/184720) [Bug]: Windows interrupted update repair leaves empty Doctor custody receipts and no actionable settlement procedure `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#184807](https://github.com/openclaw/openclaw/issues/184807) docs(workboard): dependency promotion also moves backlog/triage children; document which statuses hold a dependent card `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#185207](https://github.com/openclaw/openclaw/issues/185207) skills.read() guest binding returns content as char-indexed object (context blowup) `P3` `impact:ux-friction` 💬2
- [#185225](https://github.com/openclaw/openclaw/issues/185225) [Bug]: Webchat authors missing from session participants when their turn is taken over by restart recovery or skipped at admission `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#185191](https://github.com/openclaw/openclaw/issues/185191) [Feature]: Let a shared agent workspace opt out of 0600 for new files `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#184889](https://github.com/openclaw/openclaw/issues/184889) [Bug]: Failed npm update rollback can leave the installed package root missing (install unbootable) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#184843](https://github.com/openclaw/openclaw/issues/184843) [Bug]: Gateway RSS grows ~1 GiB over 2-4 days, unit OOM-killed (22.9 GB cgroup peak); startup 56-125 s; memory-core-index stop timeout on plugins.reload (2026.10.6) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#184894](https://github.com/openclaw/openclaw/issues/184894) [Bug]: Lower-severity findings from a codebase audit (grouped; happy to split) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#184830](https://github.com/openclaw/openclaw/issues/184830) [Bug]: message_tool_only: isolated settled-turn finalization posts private text (and an empty-finalization notice) to Telegram groups `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#184718](https://github.com/openclaw/openclaw/issues/184718) Queued group followup ending in NO_REPLY is reported as empty_response `P2` `impact:ux-friction` 💬2
- [#184600](https://github.com/openclaw/openclaw/issues/184600) [Bug]: Skill Workshop has become a deadly plague — unreviewed auto-mutation of skills, agent-behavior contamination ordinary users cannot recover from `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#184733](https://github.com/openclaw/openclaw/issues/184733) [Bug]: accepted idle-session model switch interrupts first continuation with LiveSessionModelSwitchError `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#184710](https://github.com/openclaw/openclaw/issues/184710) mcp serve: permissions_list_open returns [] while `openclaw approvals pending` shows an open exec approval `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#184522](https://github.com/openclaw/openclaw/issues/184522) [Bug]: a streamed reply that quotes an empty command output blocks the Gateway for 13 s at 16 KB (4x per doubling) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#184516](https://github.com/openclaw/openclaw/issues/184516) [Bug]: 2026.10.7 update repair loses Gateway restoration after maintenance contention `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#184538](https://github.com/openclaw/openclaw/issues/184538) First thread turn fails with `SessionEntryChangedDuringReadError` when `resolveThreadSessionKeys` gets a case-preserving `normalizeThreadId` `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#184521](https://github.com/openclaw/openclaw/issues/184521) [Bug]: Telegram follow-up messages queued during long agent runs and delayed after timeout (2026.10.7) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#184380](https://github.com/openclaw/openclaw/issues/184380) fix: stopped native child startup leaves a committed provisional session `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬2
- [#184266](https://github.com/openclaw/openclaw/issues/184266) [Bug]: Worker-scoped store write downgrades `reentrant: true` writes and self-deadlocks on the same SQLite store path `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#185297](https://github.com/openclaw/openclaw/issues/185297) [Bug]: Reading client credentials on a freshly bootstrapped database now throws instead of returning no identity `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#185298](https://github.com/openclaw/openclaw/issues/185298) [Bug]: media-bearing Control UI live replies re-parse the whole reply per delta (12.4 s at 128 KB) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#185303](https://github.com/openclaw/openclaw/issues/185303) [Bug]: sessions_send from a claude-cli turn leaks its tool-call authority into the target run; configured MCP calls fail "Tool call authorization expired" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#185305](https://github.com/openclaw/openclaw/issues/185305) LINE shows the loading animation in a one-to-one chat even when session send policy denies replies `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#185289](https://github.com/openclaw/openclaw/issues/185289) [Bug]: a partial HTML/JSX tag at a streamed delta boundary re-projects the whole reply (1.0 s at 64 KB, 15.1 s at 256 KB) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#185286](https://github.com/openclaw/openclaw/issues/185286) [Bug]: Codex terminal reasoning reorders checkpointed work and blocks final-answer recovery `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#185275](https://github.com/openclaw/openclaw/issues/185275) [Bug]: A post-commit failure while adding a Claw MCP server reports failure without a ref, so rollback leaves the server live in the global config `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#185276](https://github.com/openclaw/openclaw/issues/185276) [Bug]: A lease or assertion failure during a later Claw MCP action discards the refs of servers created by earlier actions, so rollback leaves them behind `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#185254](https://github.com/openclaw/openclaw/issues/185254) Chat shows unknown outcomes for running tools after history refresh `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#185280](https://github.com/openclaw/openclaw/issues/185280) [Bug]: message read --channel discord still loads all plugins when Discord is an external plugin (Gateway-owned skip never applies) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#185266](https://github.com/openclaw/openclaw/issues/185266) Slack, Feishu and Zalo Personal join the lines of a multi-line /btw or /loop into one line `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#185121](https://github.com/openclaw/openclaw/issues/185121) [Bug]: Native Codex turns that finish after more than 6 minutes are stopped by the watchdog and fail with "session placement turn settlement is closed" `P1` `clawsweeper:source-repro` `impact:session-state` `impact:message-loss` 💬1
- [#185253](https://github.com/openclaw/openclaw/issues/185253) [Feature]: Byte-resumable artifact downloads for Git updates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#185059](https://github.com/openclaw/openclaw/issues/185059) [Bug]: X posts one reply per image when a multi-image reply goes through `openclaw agent --deliver` or Gateway `send` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#185228](https://github.com/openclaw/openclaw/issues/185228) [Bug]: 2026.10.7 starts one Codex app-server per configured agent after Gateway ready, with no Codex turns (follow-up to #163026) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#185226](https://github.com/openclaw/openclaw/issues/185226) Update failure: package-install-omit-optional (2026.10.4) `P0` `impact:ux-release-blocker` 💬1
- [#185208](https://github.com/openclaw/openclaw/issues/185208) test(e2e): published-driver lane fails supervisor teardown after successful update assertions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#185190](https://github.com/openclaw/openclaw/issues/185190) [Bug]: Adding GPT-6.1 Terra as agent fallback fails Unknown model validation with selected OAuth (2026.10.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#185127](https://github.com/openclaw/openclaw/issues/185127) Bug: before_tool_call rewrites drop private tool parameters and spawn replay identity `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#185174](https://github.com/openclaw/openclaw/issues/185174) [Bug]: Channel hot reload waits for all gateway active work (unrelated runs/exec/cron), not just the reloaded channel's work — up to 300 s delay `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184852](https://github.com/openclaw/openclaw/issues/184852) ClickClack bot stops receiving messages after a silent network drop while status still shows connected `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#185163](https://github.com/openclaw/openclaw/issues/185163) [Bug]: bundle-MCP runtimes tear down between attempts — every embedded run pays ~5.8s reconnecting all servers (median 93% of prep time) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#185161](https://github.com/openclaw/openclaw/issues/185161) [Feature]: Telegram channel: handle Telegram Stars payments (pre_checkout_query + successful_payment) to enable paid digital services in-bot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#185147](https://github.com/openclaw/openclaw/issues/185147) Update failure: pnpm-staging-preflight (2026.10.4) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#185145](https://github.com/openclaw/openclaw/issues/185145) [Bug]: update cleanup --yes invalidates its own destination check via -shm mtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#185129](https://github.com/openclaw/openclaw/issues/185129) Refresh dependencies with the October 26 seven-day cutoff `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#185116](https://github.com/openclaw/openclaw/issues/185116) Docs: add a hosting guide for Prized `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#185111](https://github.com/openclaw/openclaw/issues/185111) [Bug]: Large-session context reads scan full transcript before applying model-context limits `bug` `bug:behavior` `P2` `clawsweeper:source-repro` 💬1
- [#185098](https://github.com/openclaw/openclaw/issues/185098) [Bug]: iOS Watch message storage cannot recover without full onboarding reset `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#185092](https://github.com/openclaw/openclaw/issues/185092) Windows node paired but browser control fails with listener ownership/authentication error `P2` `impact:ux-friction` 💬1
- [#185088](https://github.com/openclaw/openclaw/issues/185088) Spawned subagents on CLI runtimes (claude-cli, google-gemini-cli) die before first turn with SessionTranscriptWriterClaimReboundError `P1` `impact:session-state` 💬1
- [#185090](https://github.com/openclaw/openclaw/issues/185090) main: update-command-candidate-authority process test fails (healthy, doctor-owner-replaced) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#185085](https://github.com/openclaw/openclaw/issues/185085) Exec completion wakes still lost with SESSION_DELIVERY_GENERATION_UNAVAILABLE on 2026.10.7 (fix #177063 not in stable), and the error is never retried `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#185079](https://github.com/openclaw/openclaw/issues/185079) [Bug]: Codex settled-turn projection rejects valid image-only Telegram history as invalid_content `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#185078](https://github.com/openclaw/openclaw/issues/185078) Update failure: package-swap (2026.9.8)Saved sanitized report: /root/.openclaw/update-reports/aa672647da29e76849e4faaf65f658e47a12d855b814ec383e477186a433b317.025df9413348bed1848dc1621e8ca2c4e35c73a997271adc531ad1cec5811b39.md `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#185075](https://github.com/openclaw/openclaw/issues/185075) [Feature]: Matrix configured ACP bindings should accept a thread target (room + thread root), like Discord threads and Telegram topics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#185064](https://github.com/openclaw/openclaw/issues/185064) [Bug]: GPT-6.1 Terra available in native Codex catalog but fails route/auth preparation while Astra works `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#185044](https://github.com/openclaw/openclaw/issues/185044) [Bug]: maxActiveTranscriptBytes counts per-tool-round persisted openclaw.system-update runtime-context entries the model never sees (Anthropic routes), forcing early bounded-context mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#184967](https://github.com/openclaw/openclaw/issues/184967) [Feature]: Codex final-image selection: avoid auto-publishing earlier candidates after the chosen image is sent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184580](https://github.com/openclaw/openclaw/issues/184580) [Feature] Keep model IDs containing spaces intact when selecting Usage filters `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184955](https://github.com/openclaw/openclaw/issues/184955) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#184953](https://github.com/openclaw/openclaw/issues/184953) [Feature]: Bound memory retained across unchanged external plugin reloads `P3` `impact:other` 💬1
- [#184948](https://github.com/openclaw/openclaw/issues/184948) [Feature]: Support optional GitHub Projects scopes in managed OAuth connections `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184937](https://github.com/openclaw/openclaw/issues/184937) Control UI: reaction palette opens far from its message in Safari/WebKit when the transcript block is translated `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#184924](https://github.com/openclaw/openclaw/issues/184924) image_generate completion delivery always fails on claude-cli runtime: restart-safe tools required but CLI rejects them `P2` `impact:message-loss` 💬1
- [#184918](https://github.com/openclaw/openclaw/issues/184918) [Feature]: Skill picker hides user-invocable skills that set disable-model-invocation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184909](https://github.com/openclaw/openclaw/issues/184909) [Bug]: Interactive same-model retry after in-flight input ends in SQLite transcript rewrite conflict `bug` `P1` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#184891](https://github.com/openclaw/openclaw/issues/184891) [Bug]: .bak ring rotation failures are swallowed; config publish proceeds with no same-generation backup `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184888](https://github.com/openclaw/openclaw/issues/184888) [Bug]: dns setup --apply rewrites an existing CoreDNS Corefile in place with no atomic write or backup `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184887](https://github.com/openclaw/openclaw/issues/184887) [Bug]: Failed Git-source update rollback runs git reset --hard + git clean -fd without re-checking for operator changes `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184654](https://github.com/openclaw/openclaw/issues/184654) matrix: profile set without --account ignores channels.matrix.defaultAccount (fails, or renames the wrong bot) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184870](https://github.com/openclaw/openclaw/issues/184870) [Feature]: Create recurring Discord scheduled events through the existing message action `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184872](https://github.com/openclaw/openclaw/issues/184872) [Feature]: Create native WhatsApp events in the current group conversation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184877](https://github.com/openclaw/openclaw/issues/184877) outbound-session: resolveAgentIdFromSessionKey called without configured default -> 'Session key does not contain an agent id' warning spam `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#184862](https://github.com/openclaw/openclaw/issues/184862) [Bug]: iMessage channel cannot start on PostgreSQL: recovery-cursor plugin-state key contains a NUL separator `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#184864](https://github.com/openclaw/openclaw/issues/184864) [Bug]: session-state-history prune fails on PostgreSQL every hour: watermark batch compares bigint with an untyped (text) parameter `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#184867](https://github.com/openclaw/openclaw/issues/184867) memory-core: DREAMS.md writes chmod the agent workspace to 0700, failing with EPERM when the gateway user doesn't own it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184272](https://github.com/openclaw/openclaw/issues/184272) bug: workspace preparation fails after 30 seconds of registered-source contention `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184854](https://github.com/openclaw/openclaw/issues/184854) [Feature]: Resume paused automations from the Control UI `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#184841](https://github.com/openclaw/openclaw/issues/184841) [Feature]: view_image can't read images a claude-cli agent saves in its own scratchpad `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#184840](https://github.com/openclaw/openclaw/issues/184840) [Feature]: let the Playwright CDP connect timeout be configured `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184833](https://github.com/openclaw/openclaw/issues/184833) [Bug]: Plugin source capture never reuses its own receipt on Windows - native re-admission every ~3 min + model-catalog re-captures the codex tree (429.7 MB), starving the SQLite worker lane (2026.9.34) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#184834](https://github.com/openclaw/openclaw/issues/184834) Update failure: package-install-omit-optional (2026.10.3) `P2` `impact:ux-friction` 💬1
- [#184828](https://github.com/openclaw/openclaw/issues/184828) [Bug]: Local/IP browser-tab previews return INVALID_REQUEST instead of graceful no-preview `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184822](https://github.com/openclaw/openclaw/issues/184822) Agent couldn't generate a response surfaced even though reply already delivered (fleet-wide, intermittent, self-heals on next message) `P2` `impact:ux-friction` 💬1
- [#184819](https://github.com/openclaw/openclaw/issues/184819) [Bug] Interactive reply file attachments >=5 MiB silently fail — core media store MAX_BYTES=5242880 caps channel delivery (channel/SDK never invoked) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#184812](https://github.com/openclaw/openclaw/issues/184812) [Bug] MCP Events Windows tests fail with EBUSY during SQLite temp cleanup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#184810](https://github.com/openclaw/openclaw/issues/184810) [Bug]: ClawRouter Anthropic routes record the bare upstream id as the effective model, so every compaction fails as compaction_model_unresolved and falls back to another provider `P1` `clawsweeper:source-repro` `impact:session-state` `impact:auth-provider` 💬1
- [#184803](https://github.com/openclaw/openclaw/issues/184803) [Feature]: Talk: an option to turn off or replace the spoken task receipt on agent-consult calls `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184798](https://github.com/openclaw/openclaw/issues/184798) [Bug]: notifications.changed enqueues every update of the same notification key without replace, filling the 20-entry system-event queue `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#184796](https://github.com/openclaw/openclaw/issues/184796) Codex paired-node remote-exec fails for spawned subagents with default tool denies `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#184790](https://github.com/openclaw/openclaw/issues/184790) Docs: explicit `browser.ssrfPolicy.dangerouslyAllowPrivateNetwork: false` enables strict hostname blocking, unlike leaving it unset `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184794](https://github.com/openclaw/openclaw/issues/184794) Session SQLite migration recovery report (session-sqlite-1793031076067-e8e3d4b2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#184787](https://github.com/openclaw/openclaw/issues/184787) Advisor: allow configuring the review model `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184111](https://github.com/openclaw/openclaw/issues/184111) [Bug]: worktree creation fails when another request cancels a shared default fetch `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#184774](https://github.com/openclaw/openclaw/issues/184774) [Bug]: Stalled-startup OAuth refresh leaves a terminal failed fence that destroys a still-valid refresh token (verified recoverable) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#184773](https://github.com/openclaw/openclaw/issues/184773) First install: leftover onboarding gateway holds the plugin-lifecycle lease, blocking the service gateway ~4.5 min (launcher gives up, app opens nothing) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬1
- [#184763](https://github.com/openclaw/openclaw/issues/184763) [Bug]: GitHub Copilot: thinking "off" is sent as reasoning effort "none", which gpt-6.1-sol rejects with HTTP 400 `P2` `impact:auth-provider` 💬1
- [#184748](https://github.com/openclaw/openclaw/issues/184748) [Bug]: zai provider: transient runtime-context carriers break Z.ai prompt cache between turns (should use appendOnlyRuntimeContext) `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#184738](https://github.com/openclaw/openclaw/issues/184738) [Bug]: State read consumption no longer re-asserts admission, so a reply can be handed back after the read scope was revoked `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#184735](https://github.com/openclaw/openclaw/issues/184735) [Bug]: Replacing an embedded run detaches the previous attachment before registration validation, so a failed attach hides a still-running run from Stop and drains `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#184737](https://github.com/openclaw/openclaw/issues/184737) [Bug]: Command queue still accepts taskTimeoutMs and related options but never enforces them, so a stuck lane task runs unbounded `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#184730](https://github.com/openclaw/openclaw/issues/184730) Telegram native followup drops authenticated raw chat identity in V2 plugin tool context `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184728](https://github.com/openclaw/openclaw/issues/184728) Telegram: partial stream preview retries forever under 429, blocking all bot sends for 37 min `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#184724](https://github.com/openclaw/openclaw/issues/184724) Skill picker titles skills from the first body heading, so skills embedding shared boilerplate render identically `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184727](https://github.com/openclaw/openclaw/issues/184727) Update failure: gateway-recovery-verification (2026.10.7) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#184709](https://github.com/openclaw/openclaw/issues/184709) [Feature]: Support keyterm prompting in ElevenLabs batch transcription `P3` `clawsweeper:bulk-filed` 💬1
- [#184700](https://github.com/openclaw/openclaw/issues/184700) [Bug]: CLI-backend provider with working synthetic auth shows "Not configured" in Model Providers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🦪 silver shellfish` 💬1
- [#184697](https://github.com/openclaw/openclaw/issues/184697) Optional version2 plugin tools absent from live session inventory; isolated construction succeeds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#184690](https://github.com/openclaw/openclaw/issues/184690) Update failure: package-install-omit-optional (2026.10.3) `P2` `impact:ux-friction` 💬1
- [#184684](https://github.com/openclaw/openclaw/issues/184684) [Feature]: mcp-events: replace callbackOrigin with a callback base URL that can include a path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#184501](https://github.com/openclaw/openclaw/issues/184501) [Bug]: Missing systemd unit is reported as an inspection failure on systemd 245 because busctl colors its error line `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#184674](https://github.com/openclaw/openclaw/issues/184674) [Bug]: Scheduled message actions fail with "Cron receipt authority is unavailable" whenever any cron authority mutation is in flight (readForPreparation throws instead of waiting) `P2` `impact:message-loss` 💬1
- [#184636](https://github.com/openclaw/openclaw/issues/184636) agents bind/unbind: mixed-case match.channel binding is invisible to the CLI (duplicate dead route on bind, Not found on unbind) `P2` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#184197](https://github.com/openclaw/openclaw/issues/184197) Git cancellation can hide uncertain native cleanup `P2` `clawsweeper:source-repro` `impact:data-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#184635](https://github.com/openclaw/openclaw/issues/184635) models: fallbacks add, image-fallbacks add and aliases add save an uncatalogued model id with no warning while models set warns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#184630](https://github.com/openclaw/openclaw/issues/184630) [Bug]: OpenAI context planner can clamp advertised 500k budget to bundled 272k cache metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#184629](https://github.com/openclaw/openclaw/issues/184629) [Bug]: Windows 2026.10.7: "Native plugin companion changed" still blocks WhatsApp at startup (ctime in stat identity, #179949 not in release) + slow gateway startup `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#184622](https://github.com/openclaw/openclaw/issues/184622) [Bug]: Telegram GroupRequestScheduler queues outbound requests without a size or byte limit `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#184620](https://github.com/openclaw/openclaw/issues/184620) [Bug]: Inbound debouncer buffers an unbounded number of messages per key `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#184329](https://github.com/openclaw/openclaw/issues/184329) Doctor runtime-repair authority tests fail under a group-writable umask `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#184327](https://github.com/openclaw/openclaw/issues/184327) [Bug]: snapshot progress coalescing fixture exits when its stderr pipe fills `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#184320](https://github.com/openclaw/openclaw/issues/184320) bug: Stop waits on busy source access during hidden worktree spawn `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184362](https://github.com/openclaw/openclaw/issues/184362) [Bug]: web_fetch text mode strips Markdown-looking inline code `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184592](https://github.com/openclaw/openclaw/issues/184592) [Feature]: Google Chat thread replies need referenced-message context, not only reply routing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#184585](https://github.com/openclaw/openclaw/issues/184585) [Bug]: Retained generated media shows only a file name, not the image `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184481](https://github.com/openclaw/openclaw/issues/184481) Allow Talk clients to speak a short result through their active call `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#184577](https://github.com/openclaw/openclaw/issues/184577) Windows: ~564 blocking realpath/lstat calls per second from fs-safe watch-hints; 54% of main-thread CPU `P1` `impact:crash-loop` 💬1
- [#184551](https://github.com/openclaw/openclaw/issues/184551) [Bug]: macOS npm update times out waiting for Gateway HTTP readiness after activation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#184535](https://github.com/openclaw/openclaw/issues/184535) Update failure: package-permissions (2026.9.8) `P2` `impact:ux-friction` 💬1
- [#184534](https://github.com/openclaw/openclaw/issues/184534) Scheduled reminder re-delivered 6x in 37 min while cron layer healthy (2026.10.7) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#184528](https://github.com/openclaw/openclaw/issues/184528) [Bug]: block-streaming replies post internal tool-call syntax and arguments as chat messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#184523](https://github.com/openclaw/openclaw/issues/184523) [Feature]: Diagnose embedding entitlement separately from working Codex OAuth inference `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184476](https://github.com/openclaw/openclaw/issues/184476) [Feature]: Add labeled stream markers through the Twitch message integration `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#184480](https://github.com/openclaw/openclaw/issues/184480) [Bug]: Windows: `openclaw update` freezes in `validating` (2026.10.5 → 2026.10.7) and leaves the run `running`, blocking later updates and `doctor --fix` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#184474](https://github.com/openclaw/openclaw/issues/184474) [Feature]: Create single-use Discord channel invites with the message tool `P3` `clawsweeper:bulk-filed` 💬1
- [#184473](https://github.com/openclaw/openclaw/issues/184473) [Bug]: a [[ in streamed prose makes the Control UI live-chat projection re-parse the whole reply per delta (2 s at 32 KB, 9 s at 64 KB of Gateway main-thread work) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184467](https://github.com/openclaw/openclaw/issues/184467) CI: qualify shared runtime preparation for worker E2E shards `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#184441](https://github.com/openclaw/openclaw/issues/184441) [Feature]: Stale-read guard for OpenClaw `write`/`edit`, now the only file tools on mediated claude-cli turns `enhancement` `P2` `impact:data-loss` 💬1
- [#184442](https://github.com/openclaw/openclaw/issues/184442) Git updates abandon repeated weak-network interruptions without transfer progress `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184429](https://github.com/openclaw/openclaw/issues/184429) [Bug]: Isolated cron setup watchdog counts session-preparation SQLite write time; a run whose setup completes just after the deadline is still recorded as failed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184237](https://github.com/openclaw/openclaw/issues/184237) [Bug]: Buffered command results omit native cleanup uncertainty `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#184409](https://github.com/openclaw/openclaw/issues/184409) [Feature]: Expose the resolved pairing locality and remoteAddress in the connect log record `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#184378](https://github.com/openclaw/openclaw/issues/184378) Update failure: package-doctor (2026.10.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#184358](https://github.com/openclaw/openclaw/issues/184358) [Bug]: Cron trigger condition times out on every tick when runtime preparation exceeds the 30 s trigger budget `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#184339](https://github.com/openclaw/openclaw/issues/184339) Codex first turn fails with 'thread binding changed while acquiring thread lifecycle ownership' (second failure mode of the #182549 race) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184135](https://github.com/openclaw/openclaw/issues/184135) [Bug]: Completion install hides the missing-cache recovery command `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184289](https://github.com/openclaw/openclaw/issues/184289) [Bug]: Codex invalid_content finalization failure plus queued inbound leaves session start permanently conflicted `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#184278](https://github.com/openclaw/openclaw/issues/184278) [Feature]: Create live Twitch clips through the Twitch message integration `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184263](https://github.com/openclaw/openclaw/issues/184263) [Bug]: Browser Talk consult omits spoken question from history and leaves final answer text-only `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#184260](https://github.com/openclaw/openclaw/issues/184260) [Bug]: Windows Talk stale-session recovery fails with DataCloneError on each call start `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#184254](https://github.com/openclaw/openclaw/issues/184254) Update failure: gateway-recovery-verification (2026.10.6) `P1` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#184242](https://github.com/openclaw/openclaw/issues/184242) [Bug]: ACP session/load replay omits ContentChunk.messageId, so consecutive user messages merge `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#184207](https://github.com/openclaw/openclaw/issues/184207) Bug: xAI Talk disconnects when a VAD successor arrives without the interrupted terminal `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#184199](https://github.com/openclaw/openclaw/issues/184199) Feature: opt-in post-authorization inbound-media staging hook `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184192](https://github.com/openclaw/openclaw/issues/184192) [Bug]: PostHog native MCP plugin sends literal header environment placeholders `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#184170](https://github.com/openclaw/openclaw/issues/184170) [Feature]: Home tab (main agent session): add the session context menu (preserving its current right-click) and message indicators (thinking, new message) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#184890](https://github.com/openclaw/openclaw/issues/184890) [Bug]: Config write stamping can persist env-resolved values over authored ${VAR} templates in agents.list `clawsweeper:intake:bug`
- [#184892](https://github.com/openclaw/openclaw/issues/184892) [Bug]: Migration deletes truncateAfterCompaction: true without materializing maxActiveTranscriptBytes `clawsweeper:intake:bug`
- [#184893](https://github.com/openclaw/openclaw/issues/184893) [Bug]: Crashed or release-blocked updater retains custody and refuses all future updates until repair succeeds `clawsweeper:intake:bug`
- [#184655](https://github.com/openclaw/openclaw/issues/184655) browser: default profile drops Basic auth, ?token= and path from an http(s) browser.cdpUrl

#### 🔒 Closed Issues
- [#143524](https://github.com/openclaw/openclaw/issues/143524) [Bug]: Agent SQLite WAL grows to 1.4–2.8 GB in days despite wal_autocheckpoint=1000; blocks gateway startup (Windows, 2026.9.2/9.3)
- [#172091](https://github.com/openclaw/openclaw/issues/172091) [Bug]: A worker SQLite transaction stays open forever behind an unanswered cross-thread admission wait, permanently blocking shared-state WAL checkpoints
- [#184315](https://github.com/openclaw/openclaw/issues/184315) [Bug]: Operator scope semantics are inconsistent: a client holding operator.admin is rejected with missing scope: operator.read
- [#154517](https://github.com/openclaw/openclaw/issues/154517) sessions delete/archive: not_found for keys returned by sessions list; delete does not shrink the agent SQLite store
- [#150696](https://github.com/openclaw/openclaw/issues/150696) feat: show Codex-native child activity after parent yield
- [#165119](https://github.com/openclaw/openclaw/issues/165119) Thinking profile: declared compat.supportedReasoningEfforts shadowed by live-catalog derivation — binary profile despite declared efforts (2026.9.8)
- [#172473](https://github.com/openclaw/openclaw/issues/172473) [Bug]: Claude/Codex sidebar reports failures during healthy catalog refresh
- [#154072](https://github.com/openclaw/openclaw/issues/154072) macOS app renders Dashboard Website widgets as blank
- [#161732](https://github.com/openclaw/openclaw/issues/161732) Discord: runtime-backed status checks for ongoing work in the current thread
- [#165689](https://github.com/openclaw/openclaw/issues/165689) [Feature]: Optional spoken checking acknowledgment for forced realtime Talk consults
- [#184318](https://github.com/openclaw/openclaw/issues/184318) [Bug]: Local CLI omits device identity on loopback + shared token, so every operator.* command fails with a misleading missing scope error
- [#158494](https://github.com/openclaw/openclaw/issues/158494) Codex async question visible in Control UI but not observed in originating Discord thread (single incident)
- [#151572](https://github.com/openclaw/openclaw/issues/151572) [Feature]: Resume quota-exhausted turns on a configured fallback without replaying completed tool actions
- [#152145](https://github.com/openclaw/openclaw/issues/152145) [Bug]: Control UI interleaves typed and realtime Talk messages out of chronological order
- [#182842](https://github.com/openclaw/openclaw/issues/182842) [Feature]: Nemotron embedding task prefixes (query:/passage:) and a config override for aliased embedding models
- [#165683](https://github.com/openclaw/openclaw/issues/165683) [Bug]: Realtime Talk forced consult fails during checking acknowledgment with persisted user turn replay-admission error (2026.9.8)
- [#183446](https://github.com/openclaw/openclaw/issues/183446) /new via WhatsApp fails instantly without reaching the agent (generic 'temporary model failure' reply)
- [#168030](https://github.com/openclaw/openclaw/issues/168030) Inworld: realtime voice provider (speech-to-speech) for Talk and Voice Call
- [#167950](https://github.com/openclaw/openclaw/issues/167950) feat(inworld): expose speakingRate and the TTS-2 deliveryMode preset in the Inworld speech provider
- [#184807](https://github.com/openclaw/openclaw/issues/184807) docs(workboard): dependency promotion also moves backlog/triage children; document which statuses hold a dependent card
- [#181385](https://github.com/openclaw/openclaw/issues/181385) [Bug]: Terminal dynamic-tool release cancels accepted, unconsumed Codex steering
- [#185207](https://github.com/openclaw/openclaw/issues/185207) skills.read() guest binding returns content as char-indexed object (context blowup)
- [#183709](https://github.com/openclaw/openclaw/issues/183709) [Bug]: Doctor treats allowed non-default child model overrides as stale routing
- [#176572](https://github.com/openclaw/openclaw/issues/176572) Linux companion publish: latest.json public readback convergence window too short for GitHub CDN
- [#178557](https://github.com/openclaw/openclaw/issues/178557) [Bug]: Codex harness drops currentChannelProvider, so plugin tools in internal chat.send turns with a channel reply route get a webchat delivery context
- [#184718](https://github.com/openclaw/openclaw/issues/184718) Queued group followup ending in NO_REPLY is reported as empty_response
- [#168683](https://github.com/openclaw/openclaw/issues/168683) Agent: messages an automation sends with the `message` tool are stored but not model-visible in the receiving chat
- [#144294](https://github.com/openclaw/openclaw/issues/144294) [Feature]: OTEL enhancements for skill and LLM evaluations
- [#184380](https://github.com/openclaw/openclaw/issues/184380) fix: stopped native child startup leaves a committed provisional session
- [#184266](https://github.com/openclaw/openclaw/issues/184266) [Bug]: Worker-scoped store write downgrades `reentrant: true` writes and self-deadlocks on the same SQLite store path
- [#177425](https://github.com/openclaw/openclaw/issues/177425) Dashboard/utility titles fail with 400: reasoning.effort=none rejected for opencode-go muse-spark
- [#185254](https://github.com/openclaw/openclaw/issues/185254) Chat shows unknown outcomes for running tools after history refresh
- [#185121](https://github.com/openclaw/openclaw/issues/185121) [Bug]: Native Codex turns that finish after more than 6 minutes are stopped by the watchdog and fail with "session placement turn settlement is closed"
- [#185059](https://github.com/openclaw/openclaw/issues/185059) [Bug]: X posts one reply per image when a multi-image reply goes through `openclaw agent --deliver` or Gateway `send`
- [#185226](https://github.com/openclaw/openclaw/issues/185226) Update failure: package-install-omit-optional (2026.10.4)
- [#180349](https://github.com/openclaw/openclaw/issues/180349) fix(update): repair publishes source artifacts before entering maintenance
- [#185127](https://github.com/openclaw/openclaw/issues/185127) Bug: before_tool_call rewrites drop private tool parameters and spawn replay identity
- [#184852](https://github.com/openclaw/openclaw/issues/184852) ClickClack bot stops receiving messages after a silent network drop while status still shows connected
- [#160553](https://github.com/openclaw/openclaw/issues/160553) docs(nix): macOS launchd service PATH doesn't include ~/.nix-profile/bin as documented
- [#185088](https://github.com/openclaw/openclaw/issues/185088) Spawned subagents on CLI runtimes (claude-cli, google-gemini-cli) die before first turn with SessionTranscriptWriterClaimReboundError
- [#180607](https://github.com/openclaw/openclaw/issues/180607) [Bug]: Subagent completion turns drop the Authorized Senders section and miss the prompt cache when owners are configured
- [#178822](https://github.com/openclaw/openclaw/issues/178822) [Bug]: Coordinator cannot steer its own running child: `sessions_send` returns "Active run has a different requester" (Claude CLI child)
- [#178507](https://github.com/openclaw/openclaw/issues/178507) mattermost: slash commands and model-picker buttons show an empty pairing code when the pending pairing queue is full
- [#183925](https://github.com/openclaw/openclaw/issues/183925) [Bug]: macOS Mac tab loses its favicon after an in-page anchor click or a failed navigation
- [#178604](https://github.com/openclaw/openclaw/issues/178604) computer tool: models pick `target: "gateway"` on hosts where only a paired node has a screen
- [#184032](https://github.com/openclaw/openclaw/issues/184032) [Bug]: Discord gateway socket remains open after a failed late startup
- [#149999](https://github.com/openclaw/openclaw/issues/149999) [Bug]: SMS plugin sends MMS to Twilio instead of rejecting media whose Content-Type is constructor or __proto__
- [#176028](https://github.com/openclaw/openclaw/issues/176028) [Bug]: Steering skips the message-tool answer on message-tool-only turns, so the earlier message never gets its reply
- [#181818](https://github.com/openclaw/openclaw/issues/181818) [Bug]: Windows plugin artifact test fixture fails before capture when joining absolute paths
- [#178499](https://github.com/openclaw/openclaw/issues/178499) web_fetch: extractMode text glues headings, paragraphs and list items together when Readability handles minified HTML
- [#183894](https://github.com/openclaw/openclaw/issues/183894) google-meet: one media element rejecting setSinkId aborts speaker routing for the whole call
- [#184580](https://github.com/openclaw/openclaw/issues/184580) [Feature] Keep model IDs containing spaces intact when selecting Usage filters
- [#184955](https://github.com/openclaw/openclaw/issues/184955) Update failure: package-install-omit-optional (2026.10.5)
- [#178413](https://github.com/openclaw/openclaw/issues/178413) [Bug]: Meeting transcripts stop saving captions once a CLI join returns: every periodic capture fails with "Gateway requester authority changed"
- [#184953](https://github.com/openclaw/openclaw/issues/184953) [Feature]: Bound memory retained across unchanged external plugin reloads
- [#135887](https://github.com/openclaw/openclaw/issues/135887) bug(testing): reject oversized ClawHub preflight timeouts
- [#184924](https://github.com/openclaw/openclaw/issues/184924) image_generate completion delivery always fails on claude-cli runtime: restart-safe tools required but CLI rejects them
- [#184654](https://github.com/openclaw/openclaw/issues/184654) matrix: profile set without --account ignores channels.matrix.defaultAccount (fails, or renames the wrong bot)
- [#184272](https://github.com/openclaw/openclaw/issues/184272) bug: workspace preparation fails after 30 seconds of registered-source contention
- [#176940](https://github.com/openclaw/openclaw/issues/176940) [Bug]: Double-tapping Send on iOS stops the message it just sent
- [#184834](https://github.com/openclaw/openclaw/issues/184834) Update failure: package-install-omit-optional (2026.10.3)
- [#184822](https://github.com/openclaw/openclaw/issues/184822) Agent couldn't generate a response surfaced even though reply already delivered (fleet-wide, intermittent, self-heals on next message)
- [#184111](https://github.com/openclaw/openclaw/issues/184111) [Bug]: worktree creation fails when another request cancels a shared default fetch
- [#159825](https://github.com/openclaw/openclaw/issues/159825) ai: Responses endpoint compaction makes accumulated run cost unavailable
- [#184763](https://github.com/openclaw/openclaw/issues/184763) [Bug]: GitHub Copilot: thinking "off" is sent as reasoning effort "none", which gpt-6.1-sol rejects with HTTP 400
- [#184748](https://github.com/openclaw/openclaw/issues/184748) [Bug]: zai provider: transient runtime-context carriers break Z.ai prompt cache between turns (should use appendOnlyRuntimeContext)
- [#168684](https://github.com/openclaw/openclaw/issues/168684) Cron: failure alerts and repair notices are sent but not written to the chat's transcript
- [#183411](https://github.com/openclaw/openclaw/issues/183411) Hybrid memory search repeats token comparisons after duplicate similarity saturates
- [#184690](https://github.com/openclaw/openclaw/issues/184690) Update failure: package-install-omit-optional (2026.10.3)
- [#184501](https://github.com/openclaw/openclaw/issues/184501) [Bug]: Missing systemd unit is reported as an inspection failure on systemd 245 because busctl colors its error line
- [#184674](https://github.com/openclaw/openclaw/issues/184674) [Bug]: Scheduled message actions fail with "Cron receipt authority is unavailable" whenever any cron authority mutation is in flight (readForPreparation throws instead of waiting)
- [#183207](https://github.com/openclaw/openclaw/issues/183207) [Bug]: Web Push error messages in Notification settings are not announced to screen readers
- [#184197](https://github.com/openclaw/openclaw/issues/184197) Git cancellation can hide uncertain native cleanup
- [#184329](https://github.com/openclaw/openclaw/issues/184329) Doctor runtime-repair authority tests fail under a group-writable umask
- [#184327](https://github.com/openclaw/openclaw/issues/184327) [Bug]: snapshot progress coalescing fixture exits when its stderr pipe fills
- [#184320](https://github.com/openclaw/openclaw/issues/184320) bug: Stop waits on busy source access during hidden worktree spawn
- [#184362](https://github.com/openclaw/openclaw/issues/184362) [Bug]: web_fetch text mode strips Markdown-looking inline code
- [#184481](https://github.com/openclaw/openclaw/issues/184481) Allow Talk clients to speak a short result through their active call
- [#184577](https://github.com/openclaw/openclaw/issues/184577) Windows: ~564 blocking realpath/lstat calls per second from fs-safe watch-hints; 54% of main-thread CPU
- [#172007](https://github.com/openclaw/openclaw/issues/172007) [Bug]: Image preview drifts offscreen during trackpad pinch zoom
- [#180943](https://github.com/openclaw/openclaw/issues/180943) Control UI image lightbox: zoom changes the label but not the image (Panzoom transform overwritten)
- [#184441](https://github.com/openclaw/openclaw/issues/184441) [Feature]: Stale-read guard for OpenClaw `write`/`edit`, now the only file tools on mediated claude-cli turns
- [#184237](https://github.com/openclaw/openclaw/issues/184237) [Bug]: Buffered command results omit native cleanup uncertainty
- [#184058](https://github.com/openclaw/openclaw/issues/184058) [Bug]: requester settle wake re-arms forever on a late-killed terminal subagent run (late kill marker can never be consumed)
- [#182728](https://github.com/openclaw/openclaw/issues/182728) [Bug]: Model refresh is reported as failed when an Anthropic model is configured but the Claude CLI is not installed
- [#184135](https://github.com/openclaw/openclaw/issues/184135) [Bug]: Completion install hides the missing-cache recovery command
- [#182637](https://github.com/openclaw/openclaw/issues/182637) [Bug]: `skills.allowBundled: []` allows every bundled skill, while the docs say only listed ones are eligible (follow-up to #21709)
- [#182562](https://github.com/openclaw/openclaw/issues/182562) [Bug]: JSON-like prose in streamed replies blocks the Gateway for seconds
- [#182519](https://github.com/openclaw/openclaw/issues/182519) [Bug]: provider-local-service discards service stderr after /health readiness, hiding llama.cpp router model-load failures
- [#182526](https://github.com/openclaw/openclaw/issues/182526) [Bug]: Markdown links and inline Context: in streamed replies re-scan inbound metadata on every delta (8.6-10.9 s at 256 KiB)
- [#182518](https://github.com/openclaw/openclaw/issues/182518) [Bug]: llama-cpp: `openclaw agent exec` temp state rewrites the shared managed preset, breaking Gateway local embeddings (HTTP 500 "failed to load")
- [#181672](https://github.com/openclaw/openclaw/issues/181672) [Bug]: The owner turn after a subagent completion misses the prompt cache because the completion's user message is never saved

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 257,425 · **Open issues:** 51,301 · **Last push:** <1h ago

There were no new releases for Hermes Agent on this day. However, two significant pull requests were merged: #145107 fixes the web application to report a browser-blocked pop-out quickly, while #145106 enhances functionality by addressing issues with plain-HTTP interactions, including sending and copying data, browser edit menus, and managing restart-wait prompts. Notably, a new issue was reported, #145261, concerning watch-pattern completion injections that are consistently refused due to admission conflicts, which has garnered attention with four comments. Overall, the day was primarily focused on addressing existing bugs and enhancing usability in the web application.

#### ✅ Merged PRs
- [#145107](https://github.com/NousResearch/hermes-agent/pull/145107) fix(webapp): report a browser-blocked pop-out within seconds
- [#145106](https://github.com/NousResearch/hermes-agent/pull/145106) fix(webapp): plain-HTTP sends and copies, browser edit menus, rebuild-safe chunks, image links and restart-wait prompts

#### 🐛 New Issues
- [#145261](https://github.com/NousResearch/hermes-agent/issues/145261) Watch-pattern completion injections always refused with admission_conflict (0.22.5, multiplex profiles, Discord group session) `type/bug` `comp/gateway` `platform/discord` `P2` 💬4
- [#145286](https://github.com/NousResearch/hermes-agent/issues/145286) [Bug]: canonical session.create refusals send data.fields, but the CLI copy reads data.field — a policy refusal renders as "couldn't start the model connection" `type/bug` `comp/cli` `P2` `area/sessions` 💬3
- [#145126](https://github.com/NousResearch/hermes-agent/issues/145126) [Webapp] Chat send, new session and copy buttons are dead on plain-HTTP origins — unguarded crypto.randomUUID / navigator.clipboard in apps/desktop (extends #138913) `type/bug` `P2` `comp/desktop` `area/sessions` 💬2
- [#145313](https://github.com/NousResearch/hermes-agent/issues/145313) Plugin catalog: supported way to reuse an existing Composio user credential `type/feature` `area/auth` `P3` `comp/portal` 💬2
- [#145063](https://github.com/NousResearch/hermes-agent/issues/145063) tool-call args drop fields / pick wrong action for tools whose params use anyOf branches or optional payload fields (observed on deepseek-v4.1-flash) `type/bug` `comp/tools` `tool/file` `tool/memory` 💬2
- [#145318](https://github.com/NousResearch/hermes-agent/issues/145318) WhatsApp adapter 缺 `CREATE_BREAKAWAY_FROM_JOB` retry fallback，致 gateway（Windows Task Scheduler 啟動）WhatsApp channel 永久 down `type/bug` `comp/plugins` `tool/file` `platform/whatsapp` 💬1
- [#145314](https://github.com/NousResearch/hermes-agent/issues/145314) [Bug]: quiet cron script leaves a permanent empty session every firing (non-no_agent path) `type/bug` `comp/cron` `P2` `area/sessions` 💬1
- [#145315](https://github.com/NousResearch/hermes-agent/issues/145315) [Bug]: Webhook `cron_job` fires deadlock the gateway once as many run at once as the default thread pool has threads `type/bug` `comp/gateway` `comp/cron` `platform/webhook` 💬1
- [#145306](https://github.com/NousResearch/hermes-agent/issues/145306) [Bug]: Bundled skill-authoring guidance targets installed copies and discards existing work `type/docs` `tool/file` `tool/skills` `P3` 💬1
- [#145304](https://github.com/NousResearch/hermes-agent/issues/145304) [Bug]: ascii-video edge mapping uses undefined colors/resize and divides by zero on flat frames `type/bug` `tool/file` `tool/skills` `tool/vision` 💬1
- [#145308](https://github.com/NousResearch/hermes-agent/issues/145308) clarify in a message_agent-started turn never renders but holds the session lease; restart --yes waits on it `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#145292](https://github.com/NousResearch/hermes-agent/issues/145292) MCP: a transport teardown that never finishes holds the server's run loop forever, so its tools never come back `type/bug` `comp/tools` `tool/mcp` `P2` 💬1
- [#145282](https://github.com/NousResearch/hermes-agent/issues/145282) [Bug]: GNOME screen lock/unlock permanently removes Desktop tray icon after StatusNotifierHostUnregistered `type/bug` `P3` `comp/desktop` `desktop/shell` 💬1
- [#145298](https://github.com/NousResearch/hermes-agent/issues/145298) Desktop file drop on messaging-platform sessions always fails with permission_denied (file.attach requires a LOCAL policy) `type/bug` `comp/gateway` `P2` 💬1
- [#145276](https://github.com/NousResearch/hermes-agent/issues/145276) [Bug]: manim-video references classify remote TTS as local and suggest deleting rendered media to clear cache `type/docs` `tool/file` `tool/skills` `tool/tts` 💬1
- [#145275](https://github.com/NousResearch/hermes-agent/issues/145275) [Bug]: key_cmd key for an anthropic_messages provider is always sent as Bearer, never x-api-key `type/bug` `comp/agent` `provider/anthropic` `area/auth` 💬1
- [#145280](https://github.com/NousResearch/hermes-agent/issues/145280) Skills: a skill pinned with skills.auto_load is sent a second time when the session views it `type/perf` `comp/agent` `comp/tools` `tool/file` 💬1
- [#145255](https://github.com/NousResearch/hermes-agent/issues/145255) hard_interrupt from pre_tool_call can still permit an already-authorized sibling tool to dispatch `type/bug` `comp/agent` `comp/tools` `tool/file` 💬1
- [#145285](https://github.com/NousResearch/hermes-agent/issues/145285) [Bug]: Ink TUI stdin recovery misses stopped TTY reads when readableLength is zero `type/bug` `comp/tui` `P2` 💬1
- [#145122](https://github.com/NousResearch/hermes-agent/issues/145122) [Bug]: API server SSE streams buffer per-request deltas in unbounded asyncio.Queue instances, allowing a slow authenticated client to retain unlimited events `type/perf` `comp/gateway` `provider/openai` `P2` 💬1
- [#145262](https://github.com/NousResearch/hermes-agent/issues/145262) [Bug]: Intermittent Nous TLS BAD_RECORD_MAC/connection resets on Windows; fallback skipped as credential pool in cooldown `type/bug` `comp/agent` `provider/nous` `P2` 💬1
- [#145329](https://github.com/NousResearch/hermes-agent/issues/145329) [Bug]: node-inspect-debugger selects an arbitrary existing TUI process instead of debugging its own launch `type/bug` `comp/cli` `tool/skills` `P2`
- [#145327](https://github.com/NousResearch/hermes-agent/issues/145327) [Bug]: Codex auxiliary adapter silently drops response_format (strict json_schema never sent as text.format)
- [#145297](https://github.com/NousResearch/hermes-agent/issues/145297) Desktop plugin toggle/uninstall still use the 30s default RPC deadline (measured 60-69s of backend work, no clone involved) `type/bug` `tool/file` `P2` `comp/desktop`
- [#145299](https://github.com/NousResearch/hermes-agent/issues/145299) [Bug]: Desktop new chats don't keep the reasoning effort I picked; viewing an older chat overwrites it `type/bug` `P2` `comp/desktop` `area/sessions`
- [#145296](https://github.com/NousResearch/hermes-agent/issues/145296) Dashboard chat: Android soft-keyboard input is dropped (xterm screenReaderMode ignores insertText) `type/bug` `tool/file` `P2` `comp/dashboard`
- [#145294](https://github.com/NousResearch/hermes-agent/issues/145294) kanban: classify known closed-unmerged contract PRs as terminal, not infra/retry `type/bug` `comp/cli` `comp/plugins` `P2`
- [#145289](https://github.com/NousResearch/hermes-agent/issues/145289) feat(kanban): auditable same-repository completion-contract rebind `type/feature` `comp/cron` `comp/plugins` `P3`
- [#145284](https://github.com/NousResearch/hermes-agent/issues/145284) Editing memory limits in config.yaml does not reach a live session: the cached-agent config signature omits the memory section `type/bug` `comp/gateway` `tool/memory` `area/config`
- [#145281](https://github.com/NousResearch/hermes-agent/issues/145281) [Bug]: max_tokens sent as context window (131072) exceeds native output limit (128000) → invalid_params on claude-sonnet-5 / gpt-5.4 `type/bug` `comp/agent` `tool/file` `provider/anthropic`
- [#145263](https://github.com/NousResearch/hermes-agent/issues/145263) kanban: dragging a card to Done silently does nothing when it has no summary `type/bug` `comp/cli` `comp/cron` `comp/plugins`

#### 🔒 Closed Issues
- [#145126](https://github.com/NousResearch/hermes-agent/issues/145126) [Webapp] Chat send, new session and copy buttons are dead on plain-HTTP origins — unguarded crypto.randomUUID / navigator.clipboard in apps/desktop (extends #138913)
- [#144673](https://github.com/NousResearch/hermes-agent/issues/144673) [Bug]: A browser-blocked Webapp pop-out shows no error behind the sign-in gate and a late one on a launch-link tab

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 95,633 · **Open issues:** 9,532 · **Last push:** <1h ago

On October 27, 2026, there were no new releases for vLLM. However, significant progress was made with multiple merged pull requests aimed at enhancing bug fixes and performance. Notable among these is pull request #63853, which applies a draft max model length limit before model config hooks, and #63541 which sizes the DeepGEMM MegaMoE symmetric buffer for improved efficiency. The merging of #63101 also optimizes activation quant for MXFP4, achieving a 3x kernel speedup and a 5% throughput improvement. New issues reported include a critical bug (#63751) that causes IndexErrors in creating chat log probabilities, highlighting ongoing challenges the developers face in maintaining stable performance across different configurations and setups.

#### ✅ Merged PRs
- [#63853](https://github.com/vllm-project/vllm/pull/63853) [Bugfix][Spec Decode] Apply the draft max_model_len limit before model config hooks
- [#63689](https://github.com/vllm-project/vllm/pull/63689) [Bugfix][ROCm][DSv4] Give zero and subnormal mono MXFP8 groups vLLM's scale code
- [#63154](https://github.com/vllm-project/vllm/pull/63154) [Bugfix][MRV2] Release the warmup memory cached on the capture streams
- [#63554](https://github.com/vllm-project/vllm/pull/63554) [Spec Decode][Sampling] Batch-sharded draft logits
- [#63852](https://github.com/vllm-project/vllm/pull/63852) [Doc] Kimi-K3: refresh the GB300 AgentX xPyD preset and add the 3P1D DEP16 preset
- [#63638](https://github.com/vllm-project/vllm/pull/63638) [Perf][Kimi K3] Opt-in KV-balanced FP8 MLA decode for agentic workloads
- [#63408](https://github.com/vllm-project/vllm/pull/63408) [CI] List one test path per line in Buildkite pytest commands to avoid merge conflicts
- [#63817](https://github.com/vllm-project/vllm/pull/63817) [NIXL] Bump NIXL version to 1.5.1
- [#63569](https://github.com/vllm-project/vllm/pull/63569) [Tool Calling] Migrate llama3_json parser to parser engine
- [#63828](https://github.com/vllm-project/vllm/pull/63828) [ROCm][CI] Release checkpoint page cache between language generation …
- [#63840](https://github.com/vllm-project/vllm/pull/63840) [CI][Frontend] Let the SSL refresher test's fake server accept peer_loads
- [#63541](https://github.com/vllm-project/vllm/pull/63541) [Perf][MoE] Size the DeepGEMM MegaMoE symmetric buffer for one sequence-parallel shard
- [#63422](https://github.com/vllm-project/vllm/pull/63422) [CI] Add missing `&&` in the Multi-Modal Models (Standard) 3 command
- [#61527](https://github.com/vllm-project/vllm/pull/61527) [Kimi-K3] Route the fp8 chunked-context K/V pack through FlashInfer where it has a fused kernel
- [#63421](https://github.com/vllm-project/vllm/pull/63421) [Spec Decode] Replace torch.compile'd AV draft-budget selection with a Triton kernel
- [#61038](https://github.com/vllm-project/vllm/pull/61038) [Bugfix] Keep legacy WNA16 MoE dispatch on Triton under batch invariance
- [#45188](https://github.com/vllm-project/vllm/pull/45188) [BugFix] [Build] Fix for where setup.py fails with MAX_JOBS invalid literal error
- [#55669](https://github.com/vllm-project/vllm/pull/55669) [Bugfix][Tool Parser] Anchor Jamba streamed tool arguments to what was sent
- [#63142](https://github.com/vllm-project/vllm/pull/63142) [KVConnector][Mooncake] Coalesce descending block ids to reduce descriptor number for Mooncake TE
- [#63436](https://github.com/vllm-project/vllm/pull/63436) [Bugfix][Spec Decode] DFlash: run the aux hidden state FC in the draft dtype
- [#51605](https://github.com/vllm-project/vllm/pull/51605) [XPU][MoE] Resize batched Triton MoE tiles and change grid order
- [#63101](https://github.com/vllm-project/vllm/pull/63101) [Perf][MXFP4] Optimize activation quant for mxfp4. 3x kernel speedup, 5% throughput improvement
- [#55699](https://github.com/vllm-project/vllm/pull/55699) [Bugfix][Frontend] Stop SSL certificate watchers when HTTP serving exits
- [#61263](https://github.com/vllm-project/vllm/pull/61263) [Perf][HiSparse] Reduce residency hash probes
- [#63475](https://github.com/vllm-project/vllm/pull/63475) [Bugfix][Kernel] persistent_topk: sync the CTA around radix barrier arrivals
- [#62525](https://github.com/vllm-project/vllm/pull/62525) [MoE][Model] Gemma 4: skip CUDA-graph padding rows in the routing kernel
- [#61362](https://github.com/vllm-project/vllm/pull/61362) [XPU][FP8] Use per-token dynamic FP8 activation quantization
- [#57646](https://github.com/vllm-project/vllm/pull/57646) [KV Offload] Expose the processed prefix at request finalization
- [#61994](https://github.com/vllm-project/vllm/pull/61994) [Spec Decode] Support PCP with DSpark for DeepSeek-V4.1
- [#63633](https://github.com/vllm-project/vllm/pull/63633) [Perf][MRV2] Stage buffer contents by reference and copy straight into UVA
- [#63781](https://github.com/vllm-project/vllm/pull/63781) [KV Offload][P2P] Fail faster: per-mode load timeout, shorter abort-ack and lookup timeouts
- [#61685](https://github.com/vllm-project/vllm/pull/61685) [MoE] Add locality-domain allocation for FlashInfer CuTeDSL NVFP4
- [#63431](https://github.com/vllm-project/vllm/pull/63431) [Bugfix][MRV2] Skip adaptive verification cost profiling in the CUDA graph memory-profiling pass
- [#58243](https://github.com/vllm-project/vllm/pull/58243) [Bugfix][MRV2] Reserve encoder graph memory without decoder graphs
- [#63453](https://github.com/vllm-project/vllm/pull/63453) [CI][ROCm] Take MoRIIO P/D test port blocks from below the ephemeral range
- [#63557](https://github.com/vllm-project/vllm/pull/63557) [CI][ROCm] Take NIXL PD accuracy side-channel ports from below the ephemeral range
- [#63559](https://github.com/vllm-project/vllm/pull/63559) [CI][ROCm] Skip the AITER MoE garbage-rows test for fp8 per-tensor until the AITER fix
- [#63558](https://github.com/vllm-project/vllm/pull/63558) [Bugfix][ROCm] Keep the AITER GDN decode fast path off for the DS conv-state layout
- [#63576](https://github.com/vllm-project/vllm/pull/63576) [Bugfix][ROCm][DSv4.1] Await krdy before K2's combine reads klen in index-source launches
- [#60968](https://github.com/vllm-project/vllm/pull/60968) [Bugfix][Tool Parser] Keep Step3 parameter values that contain '<'
- [#62301](https://github.com/vllm-project/vllm/pull/62301) [Bugfix][Spec Decode] Preserve DP replica index for standalone draft models
- [#61128](https://github.com/vllm-project/vllm/pull/61128) [Bugfix][Rust Frontend] Read the text config under `thinker_config`
- [#58885](https://github.com/vllm-project/vllm/pull/58885) [Bugfix][Rust Frontend] Use prefiller cache hits for P/D usage
- [#47840](https://github.com/vllm-project/vllm/pull/47840) [Rust Frontend] Make HTTP request body limit configurable via VLLM_HTTP_MAX_REQUEST_BODY_SIZE
- [#62219](https://github.com/vllm-project/vllm/pull/62219) [Kernel][Perf] Add H100 tuned configs for Llama-3.1-8B and Qwen3-8B to the batch-invariant matmul table
- [#62330](https://github.com/vllm-project/vllm/pull/62330) [Bugfix][DCP] Finalize the NIXL DCP interleave size before profiling
- [#62026](https://github.com/vllm-project/vllm/pull/62026) [Kernel] Allow registering OOT block-scaled FP8 linear kernels
- [#63698](https://github.com/vllm-project/vllm/pull/63698) [Bugfix] Initialize valid ModelOpt NVFP4 MoE dummy scales
- [#62936](https://github.com/vllm-project/vllm/pull/62936) [2/N][Bugfix] Make persistent TopK exact on candidate overflow
- [#59255](https://github.com/vllm-project/vllm/pull/59255) [ROCm] Enable expert parallelism for AITER Triton W4A16 MoE
- [#57926](https://github.com/vllm-project/vllm/pull/57926) [Bugfix][Core][MRV2] Profile the sampler with the params the warm-up actually uses
- [#63760](https://github.com/vllm-project/vllm/pull/63760) [ROCm][CI] Raise MI300 Core Operation Kernels timeout to 90 min
- [#63256](https://github.com/vllm-project/vllm/pull/63256) [RL] Declare weight ownership and layout on ParamMeta
- [#62763](https://github.com/vllm-project/vllm/pull/62763) [Perf][MoE] Add H200 FP8 fused MoE config for Beam-1.0 TP8

#### 🐛 New Issues
- [#63751](https://github.com/vllm-project/vllm/issues/63751) [Bug]: IndexError in _create_chat_logprobs / _create_completion_logprobs (top_logprobs shorter than token_ids) causes 500s `bug` 💬4
- [#63844](https://github.com/vllm-project/vllm/issues/63844) [Bug]: Hybrid Mamba/GDN target + shorter drafter fails config validation on the V2 model runner (--mamba-block-size can only be set with --enable-prefix-caching), regression from #63251 `bug` 💬3
- [#63811](https://github.com/vllm-project/vllm/issues/63811) [Bug][HiSparse][P/D]: Long decode collapses into all-NaN logits (sampler emits token 1023 forever) on GLM-5.3 with HiSparse + NIXL `bug` `kv-connector` `glm` 💬3
- [#63640](https://github.com/vllm-project/vllm/issues/63640) [RFC]: vLLM Attention Backend Test Suites `rocm` `RFC` 💬2
- [#63693](https://github.com/vllm-project/vllm/issues/63693) [Bug]: P/D disaggregation (NixlConnector): decode output differs from a non-disaggregated run whenever repetition_penalty != 1.0 `kv-connector` 💬3
- [#63662](https://github.com/vllm-project/vllm/issues/63662) [Bug]: MoE models crash at startup on torch 2.11.0 with default VLLM_USE_LAYERNAME=1 (inductor assert __obj_flatten__ on hoisted LayerName) 💬2
- [#63732](https://github.com/vllm-project/vllm/issues/63732) [Bug]: Gemma 4 + online --quantization fp8: image requests crash since v0.23.0 (FP8-cast pixel values reach quantized patch_embedder.input_proj); v0.22.0 works `quantization` 💬2
- [#63718](https://github.com/vllm-project/vllm/issues/63718) [Tracking] OffloadingConnector layout support `quantization` 💬2
- [#63712](https://github.com/vllm-project/vllm/issues/63712) [ROCm][MI350P] Muse Spark MonoKernel decode assumes 256 co-resident CTAs (MI355X); refused on 128-CU MI350P `rocm` 💬2
- [#63860](https://github.com/vllm-project/vllm/issues/63860) [Bug]: Redundant object-storage pull when model and tokenizer share the same RunAI URI 💬1
- [#63794](https://github.com/vllm-project/vllm/issues/63794) [Bug]: Persian half-spaces (U+200C) are removed from DeepSeek-V4.1-Flash-1017 responses when using tools `bug` `tool-calling` `deepseek` `DSv4.1` 💬1
- [#63813](https://github.com/vllm-project/vllm/issues/63813) [Bug]: [CPU][Arm] W4A16 inference fails with missing cpu_gemm_wna16 operator `bug` `cpu` `quantization` 💬1
- [#63757](https://github.com/vllm-project/vllm/issues/63757) [RFC]: Context-length-bounded FULL decode CUDA graphs in Model Runner V2 `rocm` `quantization` 💬1
- [#63650](https://github.com/vllm-project/vllm/issues/63650) [RFC] M-gated HPC-Ops dual-BF16 router GEMM for fp32 MoE router weights on SM90 `quantization` 💬1
- [#63740](https://github.com/vllm-project/vllm/issues/63740) [CI Failure]: V1 KV Offload - tests/v1/kv_offload/tiering/p2p/test_manager.py::TestBidirectionalManager::test_lookup_expiry_allows_zmq_reconnect `ci-failure` 💬1
- [#63734](https://github.com/vllm-project/vllm/issues/63734) [RFC]: Define a graceful-draining contract for external Kubernetes controllers
- [#63663](https://github.com/vllm-project/vllm/issues/63663) [Feature]: Support thinking_token_budget in the Responses API (/v1/responses) `tool-calling` 💬1
- [#63863](https://github.com/vllm-project/vllm/issues/63863) [Performance]: Redundant object-storage pull when model and tokenizer share the same RunAI URI
- [#63818](https://github.com/vllm-project/vllm/issues/63818) [RFC]: Pluggable pipeline-parallel transport, and a path to out-of-process (elastic) PP stages
- [#63793](https://github.com/vllm-project/vllm/issues/63793) [Bug]: DeepSeek-V4.1 with block FP8 MoE activations fails on Hopper at TP=4/8 (Humming partial input-scale group) `bug` `deepseek` `quantization` `DSv4.1`
- [#63654](https://github.com/vllm-project/vllm/issues/63654) [Bug]: KV offload OBJ tier keys ignore blocks_per_chunk, so runs with different chunk sizes share object keys
- [#63759](https://github.com/vllm-project/vllm/issues/63759) [Bug]: Qwen3.5: int32 token-offset overflows in three Triton kernels give wrong outputs or illegal memory access at large `--max-num-batched-tokens`
- [#63744](https://github.com/vllm-project/vllm/issues/63744) [Feature]: [RFC / Performance] How LLM Agent Context Compaction Collapses Automatic Prefix Caching (APC) `feature request` `kv-cache-manager`
- [#63743](https://github.com/vllm-project/vllm/issues/63743) [Feature]: [Case Study] Agent Context Compaction Breaks RadixAttention Prefix Caching (10.1% -> 99.6% Hit Rate) `feature request` `kv-cache-manager`
- [#63741](https://github.com/vllm-project/vllm/issues/63741) [RFC / Performance] How LLM Agent Context Compaction Collapses Automatic Prefix Caching (APC) `feature request` `kv-cache-manager`
- [#63653](https://github.com/vllm-project/vllm/issues/63653) [Bug]: OffloadingConnector loads never-written KV for sliding-window layers when offloaded chunks span several GPU blocks
- [#63705](https://github.com/vllm-project/vllm/issues/63705) [Performance]: MiniMax-M2.7 throughput regression on TP4+EP in vLLM 0.29 0.31 0.32 `performance` `minimax`
- [#63667](https://github.com/vllm-project/vllm/issues/63667) [Bug]: Incremental detokenization goes quadratic on malformed UTF-8 output, stalling the API server event loop (`/health` hangs)
- [#63666](https://github.com/vllm-project/vllm/issues/63666) [RFC]: Tiered MoE Expert Offload with Lookahead Expert Scheduling (LES) for single-GPU Intel XPU (dGPU: VRAM ↔ Host RAM, iGPU: Memory ↔ SSD) `intel-gpu` `quantization`
- [#63656](https://github.com/vllm-project/vllm/issues/63656) [Bug][Rust Frontend] Streaming chat chunks omit fields that Python emits as null, including finish_reason `rust`
- [#63646](https://github.com/vllm-project/vllm/issues/63646) [Bug]: Encountered an inference error when performing a single LLM API request with Qwen 3.6-27B on a server equipped with 8 A100 GPUs with latest vllm docker images `bug` `qwen`
- [#63635](https://github.com/vllm-project/vllm/issues/63635) [Bug]: Transformers backend: compile_mm_encoder fails for most HF vision encoders (3 separate blockers)

#### 🔒 Closed Issues
- [#51782](https://github.com/vllm-project/vllm/issues/51782) [Bug]: persistent_topk silently drops top-k candidates when many values share a coarse histogram bin
- [#59784](https://github.com/vllm-project/vllm/issues/59784) [Bug]: Qwen3-VL-Reranker fails to load because Qwen3VLTextConfig has no tie_word_embeddings
- [#63844](https://github.com/vllm-project/vllm/issues/63844) [Bug]: Hybrid Mamba/GDN target + shorter drafter fails config validation on the V2 model runner (--mamba-block-size can only be set with --enable-prefix-caching), regression from #63251
- [#63860](https://github.com/vllm-project/vllm/issues/63860) [Bug]: Redundant object-storage pull when model and tokenizer share the same RunAI URI
- [#51751](https://github.com/vllm-project/vllm/issues/51751) [RFC]: Pluggable KV Cache Data Types
- [#63650](https://github.com/vllm-project/vllm/issues/63650) [RFC] M-gated HPC-Ops dual-BF16 router GEMM for fp32 MoE router weights on SM90
- [#63052](https://github.com/vllm-project/vllm/issues/63052) [Bug]: Breakable PIECEWISE capture (model runner V2) leaves warmup activations cached on the discarded capture stream
- [#61635](https://github.com/vllm-project/vllm/issues/61635) [Bug]: 3D MoE LoRA gate_up is pinned twice, and EP warmup dummy LoRA is sized by local experts
- [#63654](https://github.com/vllm-project/vllm/issues/63654) [Bug]: KV offload OBJ tier keys ignore blocks_per_chunk, so runs with different chunk sizes share object keys
- [#59920](https://github.com/vllm-project/vllm/issues/59920) [Bug] Legacy fused_moe_lora kernel silently casts fp16 LoRA operands to bfloat16
- [#63499](https://github.com/vllm-project/vllm/issues/63499) [Bug]: P2P KV offload tier: a peer that stalls or is replaced does not recover over RDMA
- [#63653](https://github.com/vllm-project/vllm/issues/63653) [Bug]: OffloadingConnector loads never-written KV for sliding-window layers when offloaded chunks span several GPU blocks

### SGLang (`sgl-project/sglang`)

**Stars:** 38,221 · **Open issues:** 6,202 · **Last push:** <1h ago

On October 27, 2026, there were no new releases for SGLang, but several important changes were merged. Notable fixes included enhancements to the diffusion module, such as the implementation of caller-allocated buffers for DiT attention break outputs and MiniMax-H3, as well as optimizing memory handling in the CPU context and resolving issues with SageMaker's /ping endpoint to better reflect server readiness. Additionally, a critical bug was reported regarding the MiMoDetector that caused string "null" to convert to None and affected boolean values, while a notable request for comments was raised regarding the implementation of activation monitors in SGLang. Other merged features focused on performance improvements and refinements across various modules, indicating a robust ongoing development effort.

#### ✅ Merged PRs
- [#46659](https://github.com/sgl-project/sglang/pull/46659) [Refactor] diffusion: Write DiT attention break outputs into caller-allocated buffers
- [#46660](https://github.com/sgl-project/sglang/pull/46660) [Refactor] diffusion: Write MiniMax-H3 and Qwen-Image 2.1 break outputs into caller-allocated buffers
- [#45516](https://github.com/sgl-project/sglang/pull/45516) [Fix] [CPU] memory: budget overestimation caused by filtering empty NUMA nodes
- [#45445](https://github.com/sgl-project/sglang/pull/45445) [Fix] http_server: Make SageMaker /ping reflect server readiness
- [#46155](https://github.com/sgl-project/sglang/pull/46155) [Fix] diffusion/cli: Preserve explicit argv and registered aliases
- [#46252](https://github.com/sgl-project/sglang/pull/46252) [Fix] diffusion/realtime: Reserve generation slots after initialization
- [#46638](https://github.com/sgl-project/sglang/pull/46638) [Fix] multimodal: Clip pad spans to a truncated prompt
- [#46396](https://github.com/sgl-project/sglang/pull/46396) [CI] [AMD] diffusion: Skip the Wan CuTe DSL q/k norm RoPE imports on ROCm
- [#46453](https://github.com/sgl-project/sglang/pull/46453) [CI] [AMD] pr-test: list tags with ls-remote, 8 small shards
- [#46679](https://github.com/sgl-project/sglang/pull/46679) [Fix] diffusion: Resolve cached named weights without the Hub API
- [#46671](https://github.com/sgl-project/sglang/pull/46671) [Fix] dsv4.1: capture routed experts on the vision-aware routing path
- [#45231](https://github.com/sgl-project/sglang/pull/45231) [Feat] lora: serve DeepSeek-V4/V4.1 attention and shared-expert adapters
- [#43449](https://github.com/sgl-project/sglang/pull/43449) [Feat] spec: Capture aux hidden states on the target without a speculative draft
- [#46340](https://github.com/sgl-project/sglang/pull/46340) [Fix] [AMD] MiniMax-M3: default SGLANG_MINIMAX_M3_INDEX_TOPK_FREQ to 1
- [#42090](https://github.com/sgl-project/sglang/pull/42090) [Feat] [AMD] gpt-oss: Enable MXFP4 with Triton kernels on ROCm
- [#39622](https://github.com/sgl-project/sglang/pull/39622) [Perf] [AMD] dsv4: fp8 target lm_head GEMM for DSPARK verify logits
- [#46668](https://github.com/sgl-project/sglang/pull/46668) [Doc] sgl-router: Add GLM-5.3-Flash and DeepSeek-V4.1-Flash deployment examples
- [#45791](https://github.com/sgl-project/sglang/pull/45791) [Perf] QSA: Optimize prefill indexer in long cached prefixes
- [#45659](https://github.com/sgl-project/sglang/pull/45659) [Fix] rust-server: Match Python's chat layer on templates, streaming and lowered-chat errors
- [#46553](https://github.com/sgl-project/sglang/pull/46553) [Refactor] bcg: Write the debug-mode forward's output buffer inside its eager break
- [#46551](https://github.com/sgl-project/sglang/pull/46551) [Refactor] nemotron_h: Read the prefill shared expert's output from the caller's holder
- [#46535](https://github.com/sgl-project/sglang/pull/46535) [Refactor] attention: Write the eager break's LSE into a caller-allocated buffer
- [#46543](https://github.com/sgl-project/sglang/pull/46543) [Refactor] qwen4: Write QSA top-k and PLE batch breaks into caller-held outputs
- [#46640](https://github.com/sgl-project/sglang/pull/46640) [Fix] utils: Fix CPU engine detection under torch.compile fullgraph
- [#46288](https://github.com/sgl-project/sglang/pull/46288) [Fix] RL: Read output store parts straight into caller memory
- [#45254](https://github.com/sgl-project/sglang/pull/45254) [Feat] kernels: Beam model support
- [#46449](https://github.com/sgl-project/sglang/pull/46449) [CI] [AMD] diffusion: Skip the CUDA-only gpu-idle and Z-Image RoPE cache unit tests on ROCm
- [#45449](https://github.com/sgl-project/sglang/pull/45449) [Feat] rust-server: Render, tokenize and serve chat through sglang-processor
- [#45923](https://github.com/sgl-project/sglang/pull/45923) [Fix] scheduler: Make a Req's "__req__" self-reference weak
- [#45673](https://github.com/sgl-project/sglang/pull/45673) [Fix] hicache: Skip empty auxiliary transfers
- [#44160](https://github.com/sgl-project/sglang/pull/44160) [Fix] multimodal: Preserve caller hashes and offsets for precomputed inputs
- [#45830](https://github.com/sgl-project/sglang/pull/45830) [Fix] ci: Add executable entry point to Muse Spark router test
- [#46060](https://github.com/sgl-project/sglang/pull/46060) [Fix] diffusion/api: Publish image inputs atomically
- [#46193](https://github.com/sgl-project/sglang/pull/46193) [Fix] diffusion/disaggregation: Preserve GLM pixels for the head
- [#46057](https://github.com/sgl-project/sglang/pull/46057) [Fix] diffusion/server: Clean up rejected and cancelled video requests
- [#46227](https://github.com/sgl-project/sglang/pull/46227) [Perf] diffusion: Walk several row chunks per warp in the CuTe-DSL norm kernels
- [#46249](https://github.com/sgl-project/sglang/pull/46249) [Fix] diffusion: Route realtime cleanup to the session owner
- [#46254](https://github.com/sgl-project/sglang/pull/46254) [Test] diffusion/loader: Make restoration tests independent of execution order
- [#46308](https://github.com/sgl-project/sglang/pull/46308) [Perf] diffusion: Hide the pipelined Ulysses own-row copies behind the exchange
- [#45143](https://github.com/sgl-project/sglang/pull/45143) [Perf] function_call: stop rescanning unclosed GLM tool calls per chunk
- [#46432](https://github.com/sgl-project/sglang/pull/46432) [Chore] sgl-router: use `api.v1` typed generate response
- [#46393](https://github.com/sgl-project/sglang/pull/46393) [Fix] [Intel] diffusion/wan: Guard the CuTe DSL q/k norm RoPE imports on XPU
- [#46561](https://github.com/sgl-project/sglang/pull/46561) [CI] [NPU] registry: Downsize nightly test registrations to the cards each test actually uses
- [#33250](https://github.com/sgl-project/sglang/pull/33250) [Fix] deepseek-v4: Fix DeepSeek-V4 non-EP TBO for attention TP > 1
- [#46481](https://github.com/sgl-project/sglang/pull/46481) [Chore] ci: Update test est_time values
- [#46174](https://github.com/sgl-project/sglang/pull/46174) [Perf] diffusion: Build spatial-parallel causal conv inputs in one pass
- [#46240](https://github.com/sgl-project/sglang/pull/46240) [Perf] diffusion: Blend VAE tile seams in one pass

#### 🐛 New Issues
- [#46566](https://github.com/sgl-project/sglang/issues/46566) [Bug] MiMoDetector: string "null" becomes None, invalid booleans become false, and text around tool calls is dropped 💬2
- [#46487](https://github.com/sgl-project/sglang/issues/46487) [RoadMap] [NPU] NPU Backend Refactor Roadmap `npu` `roadmap`
- [#46615](https://github.com/sgl-project/sglang/issues/46615) [Bug] DeepSeek-V4.1: decoder SWA bounded replay cuts a mixed batch's decode rows to a one-token late-layer window (silent accuracy loss with --enable-mixed-chunk) 💬1
- [#46579](https://github.com/sgl-project/sglang/issues/46579) [Roadmap] Humming integration maintenance 💬1
- [#46572](https://github.com/sgl-project/sglang/issues/46572) [Bug] Inkling: fused attention prologue stores CUDA-graph padding rows into KV slot 0 → NaN logits (`probability tensor contains either inf, nan or element < 0` with `SGLANG_OPT_USE_GUMBEL_SAMPLE=0`) 💬1
- [#46588](https://github.com/sgl-project/sglang/issues/46588) [Roadmap] TDX/CC Prefill–Decode Disaggregation
- [#46678](https://github.com/sgl-project/sglang/issues/46678) [RFC] Activation monitors in SGLang
- [#46666](https://github.com/sgl-project/sglang/issues/46666) [Bug] DeepSeek-V4.1 DSpark with SGLANG_ENABLE_DP_SPEC_PREFILL_COORDINATION: decoder-tail run_idle cuts verify rows to 128 ("next_token_logits row count mismatch")
- [#46661](https://github.com/sgl-project/sglang/issues/46661) [Bug] InternlmDetector drops every streamed tool call after the first
- [#46628](https://github.com/sgl-project/sglang/issues/46628) [Bug] [AMD] Mixtral-8x7B FP8 static-scale checkpoint loses ~10 pt GSM8K on MI300X; crashes with SGLANG_USE_AITER=0
- [#46598](https://github.com/sgl-project/sglang/issues/46598) [Feature] Support reasoning and content continuation through model renderers/encoders
- [#46581](https://github.com/sgl-project/sglang/issues/46581) [Bug] [NPU] PP + NEXTN produces garbled output with NPU Graph enabled on GLM-5.2
- [#46550](https://github.com/sgl-project/sglang/issues/46550) [MUSA][help]
- [#46520](https://github.com/sgl-project/sglang/issues/46520) [RFC] [XPU] paged-experts: Intel XPU support with Lookahead Expert Scheduling (LES) and an SSD tier for iGPU, single-GPU MoE offload
- [#46517](https://github.com/sgl-project/sglang/issues/46517) [Bug] Disconnected OpenAI chat requests can continue decoding after client disconnect
- [#46508](https://github.com/sgl-project/sglang/issues/46508) [Bug][MUSA] fa3: scheduler metadata is computed from the draft backend under speculative decoding, hanging when the radix cache hits
- [#46495](https://github.com/sgl-project/sglang/issues/46495) [Bug] KV-full retraction can drop `new_token_ratio` below its floor and loosen admission

#### 🔒 Closed Issues
- [#32968](https://github.com/sgl-project/sglang/issues/32968) [Bug][kimi-k3] Long-context [PAD] (id 163839) storms + DSPARK inf/nan asserts — NaN-contaminated logits; released kimi-k3 image predates #32477; pad not stopped/filtered; allowed_special="all" makes [PAD] injectable
- [#35019](https://github.com/sgl-project/sglang/issues/35019) [Perf] No MMQ kernel for I-quant GGUF: 4-6x slower prefill than llama.cpp on the same weights (measured)
- [#36558](https://github.com/sgl-project/sglang/issues/36558) QSA decode has no working kernel path on SM121 (GB10 / DGX Spark); Qwen3.8-Flash-Next unservable
- [#35860](https://github.com/sgl-project/sglang/issues/35860) [Playground] Verified cell: Qwen3.8-27B / dgx-spark / nvfp4 / DFLASH2 / single
- [#35150](https://github.com/sgl-project/sglang/issues/35150) [Bug] Qwen3.8 DSpark forced-reject is not lossless: accumulated GDN state drift vs Base decode
- [#36548](https://github.com/sgl-project/sglang/issues/36548) [Bug] DFlash2 state corruption with concurrent requests
- [#36599](https://github.com/sgl-project/sglang/issues/36599) [Bug] deepseek_nextn hardcodes quant_config=None for modelopt_fp4 — breaks quantized NextN drafts (GLM-5.3-Flash NVFP4 speculative decoding)
- [#36390](https://github.com/sgl-project/sglang/issues/36390) [Bug] [ROCm] DeepSeek-V4-Flash FP8 on MI300X (gfx942): output degrades with context length — coherent <100 tokens, garbage by ~300, NIAH 0/3
- [#35783](https://github.com/sgl-project/sglang/issues/35783) [MoonEP] Kimi-K3 production integration roadmap
- [#36596](https://github.com/sgl-project/sglang/issues/36596) [Bug] ModelOpt FP4: is_layer_excluded misses fused module names and model.-prefixed names — mixed-precision NVFP4 checkpoints crash at load (GLM-5.3-Flash)
- [#29864](https://github.com/sgl-project/sglang/issues/29864) [AMD/ROCm] store_cache_4d Triton kernel fails to compile on ROCm 7.2.0 (TritonAMDGPUCanonicalizePointers)
- [#31084](https://github.com/sgl-project/sglang/issues/31084) [Bug] Dynamic LoRA loading is effectively unsupported with --tokenizer-worker-num > 1 (per-worker registry, no cross-worker sync)
- [#36616](https://github.com/sgl-project/sglang/issues/36616) [Bug] qwen3.8 flash next rocm bug
- [#36597](https://github.com/sgl-project/sglang/issues/36597) [Bug] NVFP4 MoE + EP>1: globally-loaded input scales not sliced to local experts in non-CuteDSL branch (_compute_gemm1_alphas shape mismatch)
- [#35797](https://github.com/sgl-project/sglang/issues/35797) [Bug] Qwen3.5 MTP weights silently dropped on compressed-tensors checkpoints (accept len pinned at 1.0)
- [#36600](https://github.com/sgl-project/sglang/issues/36600) [Bug] [CPU] topk_sigmoid_cpu reads past small expert buffers with correction_bias
- [#36698](https://github.com/sgl-project/sglang/issues/36698) [Bug] DeepSeek-V4-Flash-0731 fails to stop at stop sequence when preceded by Chinese text
- [#36690](https://github.com/sgl-project/sglang/issues/36690) [Bug] gemma-3n-E2B-it/E4B-it: degenerate output (fa3/flashinfer) or crash (triton) in multimodal serving, 0% vision accuracy
- [#36423](https://github.com/sgl-project/sglang/issues/36423) [Bug][NPU] ModelSlim W8A8 checkpoint of Qwen3.8-27B (GDN hybrid) loads with garbage weights: fused in_proj_qkvz scheme unresolved, vision encoder forced unquantized; NPU quant matmul crashes on 3-D vision input
- [#36663](https://github.com/sgl-project/sglang/issues/36663) [Bug] FlashInfer prefill treats AttentionType.DECODER_BIDIRECTIONAL as causal
- [#46615](https://github.com/sgl-project/sglang/issues/46615) [Bug] DeepSeek-V4.1: decoder SWA bounded replay cuts a mixed batch's decode rows to a one-token late-layer window (silent accuracy loss with --enable-mixed-chunk)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,470 · **Open issues:** 2,582 · **Last push:** 1h ago

On October 27, 2026, the release cycle for llama.cpp saw the deployment of versions b11913, b11912, b11910, b11909, and several others, with key enhancements including the addition of GGML_HEXAGON_VTCM_SIZE and optimizations for the MUL_MAT_ID row skipping in the hexagon framework. Notable merged pull requests included enabling MoE amax rescaling for laguna and a rewrite of the concat function into a single-row kernel for improved efficiency. Additionally, several new issues have surfaced, most notably #31189, which addresses an evaluation bug with qwen4exp, indicating ongoing challenges in model performance consistency.

#### 🚀 New Releases
- [b11913](https://github.com/ggml-org/llama.cpp/releases/tag/b11913) b11913
- [b11912](https://github.com/ggml-org/llama.cpp/releases/tag/b11912) b11912
- [b11910](https://github.com/ggml-org/llama.cpp/releases/tag/b11910) b11910
- [b11909](https://github.com/ggml-org/llama.cpp/releases/tag/b11909) b11909
- [b11908](https://github.com/ggml-org/llama.cpp/releases/tag/b11908) b11908
- [b11907](https://github.com/ggml-org/llama.cpp/releases/tag/b11907) b11907
- [b11906](https://github.com/ggml-org/llama.cpp/releases/tag/b11906) b11906
- [b11905](https://github.com/ggml-org/llama.cpp/releases/tag/b11905) b11905
- [b11904](https://github.com/ggml-org/llama.cpp/releases/tag/b11904) b11904
- [b11901](https://github.com/ggml-org/llama.cpp/releases/tag/b11901) b11901

#### ✅ Merged PRs
- [#31221](https://github.com/ggml-org/llama.cpp/pull/31221) hexagon: add GGML_HEXAGON_VTCM_SIZE
- [#31169](https://github.com/ggml-org/llama.cpp/pull/31169) hexagon: MUL_MAT_ID row skipping optimizations and improvements
- [#31147](https://github.com/ggml-org/llama.cpp/pull/31147) llama : enable moe amax rescaling for laguna
- [#31191](https://github.com/ggml-org/llama.cpp/pull/31191) ci : add windows behavior check
- [#30471](https://github.com/ggml-org/llama.cpp/pull/30471) opencl: write KV-cache views in set_tensor so a state restore is not dropped (bug fix)
- [#31141](https://github.com/ggml-org/llama.cpp/pull/31141) llama : move no_alloc out of llama_hparams
- [#31142](https://github.com/ggml-org/llama.cpp/pull/31142) models : replace ggml_tensor** out-params with output structs
- [#31179](https://github.com/ggml-org/llama.cpp/pull/31179) ggml-cpu : rewrite concat as one row kernel for all types
- [#29882](https://github.com/ggml-org/llama.cpp/pull/29882) vulkan: rms norm optimization using subgroup reductions
- [#31013](https://github.com/ggml-org/llama.cpp/pull/31013) sycl: template the plain MMVQ launch triples
- [#31008](https://github.com/ggml-org/llama.cpp/pull/31008) sycl: template the per-quant concat impls
- [#30358](https://github.com/ggml-org/llama.cpp/pull/30358) sycl: add set_tensor_2d for faster tensor-split loading
- [#31062](https://github.com/ggml-org/llama.cpp/pull/31062) sycl : bound reorder temp memory to 32 MiB
- [#30548](https://github.com/ggml-org/llama.cpp/pull/30548) common: pin model resolution on real HF repo layouts
- [#31162](https://github.com/ggml-org/llama.cpp/pull/31162) webgpu : fix race condition in memset
- [#31119](https://github.com/ggml-org/llama.cpp/pull/31119) ui: Sidebar resizing improvements
- [#31183](https://github.com/ggml-org/llama.cpp/pull/31183) mtmd: add mtmd_helper_get_capabilities
- [#31180](https://github.com/ggml-org/llama.cpp/pull/31180) ggml-cpu : fix unused variables in arm arch
- [#30880](https://github.com/ggml-org/llama.cpp/pull/30880) llama : add llama_arch_* query API and refactor test-llama-archs to use it
- [#30072](https://github.com/ggml-org/llama.cpp/pull/30072) metal : stop overflow from happening in large matrix output offsets
- [#31030](https://github.com/ggml-org/llama.cpp/pull/31030) ui: UX Imporovements for Chat Tabs and Scroll on Chat Conversation route load/refresh + transition/animation improvements
- [#31174](https://github.com/ggml-org/llama.cpp/pull/31174) ci : bump server timeout during startup
- [#31175](https://github.com/ggml-org/llama.cpp/pull/31175) ci : drop the `macos-latest-x64` job
- [#31137](https://github.com/ggml-org/llama.cpp/pull/31137) deepseekv4.1: follow-up review fixes

#### 🐛 New Issues
- [#31189](https://github.com/ggml-org/llama.cpp/issues/31189) Eval bug: qwen4exp assert with merged tensors from #31028 `bug-unconfirmed` 💬4
- [#31220](https://github.com/ggml-org/llama.cpp/issues/31220) Misc. bug: Speculative Decode Performance Drop `bug-unconfirmed`
- [#31219](https://github.com/ggml-org/llama.cpp/issues/31219) Eval bug: Segmentation fault during prefill with mixed ROCm/Vulkan `bug-unconfirmed`
- [#31213](https://github.com/ggml-org/llama.cpp/issues/31213) Feature Request: Add "q8_0-q4_0" to GGML_CUDA_FA_QUANTS `enhancement`
- [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) llama-server: /v1/completions logprobs nondeterministic across identical requests (SYCL iGPU, MoE); request seed does not pin the report
- [#31199](https://github.com/ggml-org/llama.cpp/issues/31199) Misc. bug: json-schema-to-grammar copies raw control characters (e.g. NUL from "\u0000") in "pattern" verbatim into GBNF → "failed to parse grammar"
- [#31195](https://github.com/ggml-org/llama.cpp/issues/31195) Feature Request: [SYCL][Xe2/Battlemage] Improve IQ quantization performance with optimized codebook decoding and XMX kernels `enhancement`
- [#31194](https://github.com/ggml-org/llama.cpp/issues/31194) Feature Request: modifying the data layout of its K-quants format to improve GPU memory access efficiency `enhancement`

#### 🔒 Closed Issues
- [#23704](https://github.com/ggml-org/llama.cpp/issues/23704) Feature Request: server in Router Mode: Multiple presets for the same model (loaded once)
- [#21723](https://github.com/ggml-org/llama.cpp/issues/21723) Refactor: Split up ggml-vulkan.cpp
- [#27987](https://github.com/ggml-org/llama.cpp/issues/27987) Feature Request: `--n-cpu-mode` FFN band selection for `--n-cpu-ffn`
- [#27931](https://github.com/ggml-org/llama.cpp/issues/27931) Eval bug: llama-server crashes (stack overflow / access violation) on hybrid recurrent models (qwen3_5_moe) with mmproj vision when alternating text and image turns
- [#31016](https://github.com/ggml-org/llama.cpp/issues/31016) Eval bug: Significant performance difference between llama-prism and main llama.cpp builds (same base version)
- [#27852](https://github.com/ggml-org/llama.cpp/issues/27852) Eval bug: ngram-cache speculative decoding keeps per-slot context cache across requests (begin() is a no-op) — acceptance 86% → 11%, slower than no speculation
- [#27276](https://github.com/ggml-org/llama.cpp/issues/27276) Feature Request: [CPU] ARM i8mm 8x8 blocked GEMM/GEMV paths for TQ1_0 and TQ2_0
- [#24902](https://github.com/ggml-org/llama.cpp/issues/24902) Feature Request: pre-select models in the webui using alias
- [#28425](https://github.com/ggml-org/llama.cpp/issues/28425) server: recurrent/hybrid seq_rm partial-rollback (n_rs_seq) unreachable outside speculative decoding — crash or unbounded memory growth
- [#27465](https://github.com/ggml-org/llama.cpp/issues/27465) Eval bug: error loading model: device CUDA0 does not support split buffers when using split-mode row or tensor
- [#28760](https://github.com/ggml-org/llama.cpp/issues/28760) [CUDA] sm_75 (Turing) uses the Ampere mmq config table — A/B results on the hot path, plus two crashing configs
- [#28733](https://github.com/ggml-org/llama.cpp/issues/28733) Feature Request: reduce memory requirements for llama-perplexity on large context sizes (from O(ctx*vocab) to O(vocab))
- [#28756](https://github.com/ggml-org/llama.cpp/issues/28756) Eval bug: Qwen-AgentWorld-35B-A3B (qwen35moe MoE) SIGILL on CPU inference (llama-cpp-python cu124 wheel, AMD Zen5, AMX_INT8=1 reported but unsupported)
- [#28788](https://github.com/ggml-org/llama.cpp/issues/28788) [MSVC] \uHHHH escapes in BPE pre-tokenizer patterns abort model load (regex_error)
- [#30490](https://github.com/ggml-org/llama.cpp/issues/30490) Eval bug: LFM2.5-24B-A2B emits Qwen3-Coder-style <tool_call> XML as content — calls silently lost (lfm2moe)

### Ollama (`ollama/ollama`)

**Stars:** 184,904 · **Open issues:** 4,445 · **Last push:** <1h ago

Ollama released version v0.40.12-rc0, which incorporates several significant enhancements including the preservation of small-image detail for compact Gemma 4 vision towers, a prompt speed-up for the Gemma, Flint, and Laguna models, and added support for DFlash2. Key merged pull requests included the llama.cpp version bump to b11901 and improvements to the kimi CLI tool. However, new issues have emerged, notably the failure of `ollama launch opencode` on OpenCode v2 due to an array returned by the debug config, alongside a proposal for Korean language support for the new TTS (phonon) model. These developments indicate a mix of feature enhancements and some early-stage bugs, shaping ongoing community discussions.

#### 🚀 New Releases
- [v0.40.12-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.12-rc0) v0.40.12

#### ✅ Merged PRs
- [#19312](https://github.com/ollama/ollama/pull/19312) Fix kimi cli tool-only assistant turns
- [#19311](https://github.com/ollama/ollama/pull/19311) llama.cpp: version bump b11901
- [#19149](https://github.com/ollama/ollama/pull/19149) mlx: add DFlash2 support
- [#19291](https://github.com/ollama/ollama/pull/19291) MLX, MLX-C: version bump - prompt speed up for gemma/flint/laguna

#### 🐛 New Issues
- [#19303](https://github.com/ollama/ollama/issues/19303) launch: `ollama launch opencode` fails on OpenCode v2 because `opencode debug config` returns an array 💬1
- [#19306](https://github.com/ollama/ollama/issues/19306) Expose renderer, parser, and template_source on ollama.com model library pages `feature request`
- [#19301](https://github.com/ollama/ollama/issues/19301) GPU acceleration detection and configuration in Ollama UI `feature request`
- [#19313](https://github.com/ollama/ollama/issues/19313) shieldgemma template asks about "an AI response" when classifying a user prompt
- [#19308](https://github.com/ollama/ollama/issues/19308) Interest in macOS 12/13 support for Intel Macs? I have a working build of v0.40.11
- [#19300](https://github.com/ollama/ollama/issues/19300) Gpt oss
- [#19296](https://github.com/ollama/ollama/issues/19296) launch: ollama launch opencode fails on OpenCode v2 with "Unrecognized flag: --model"
- [#19295](https://github.com/ollama/ollama/issues/19295) [Feature Request] Add Korean language support for the new TTS (phonon) model `feature request`
- [#19294](https://github.com/ollama/ollama/issues/19294) Proposal: native HarmonyOS PC support, starting with CPU inference `feature request`
- [#19293](https://github.com/ollama/ollama/issues/19293) /api/chat intermittently fails with 500 "llama-server apply-template error … write: broken pipe" right after a long reply (0.40.8 and 0.40.11, macOS)

#### 🔒 Closed Issues
- [#19300](https://github.com/ollama/ollama/issues/19300) Gpt oss

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,092 · **Open issues:** 5,673 · **Last push:** <1h ago

On October 27, 2026, there were no new releases for LiteLLM. However, several significant feature and fix merges were made, including the addition of Redis support in various capacities, such as connecting to Redis from config.yaml and enhancing the Rust implementation with new crates like the redis-client crate and circuit-breaker integration. Notably, the user interface saw improvements with features to persist model group alias ordering and a tooltip for budget periods on spending tiles. Among the newly reported issues, a critical one was identified concerning the admin UI, where the Router Settings fails to render input for certain fields, potentially impacting user configurations. This focus on Redis functionality and UI enhancements indicates ongoing efforts to improve system performance and user experience.

#### ✅ Merged PRs
- [#48456](https://github.com/BerriAI/litellm/pull/48456) fix(ui): persist model parameter deletions after refresh
- [#48505](https://github.com/BerriAI/litellm/pull/48505) fix(decisions): honor base_url for custom backends
- [#48284](https://github.com/BerriAI/litellm/pull/48284) feat(gateway): connect to Redis from config.yaml
- [#48277](https://github.com/BerriAI/litellm/pull/48277) feat(rust): add circuit-breaker crate and guard redis-client with it
- [#48273](https://github.com/BerriAI/litellm/pull/48273) feat(redis-client): run Lua scripts and pipelines with per-op errors
- [#48271](https://github.com/BerriAI/litellm/pull/48271) feat(redis-client): support Redis Cluster
- [#48269](https://github.com/BerriAI/litellm/pull/48269) feat(rust): add redis-client crate for standalone Redis
- [#48497](https://github.com/BerriAI/litellm/pull/48497) feat(refuseless): add provider and model pricing
- [#48498](https://github.com/BerriAI/litellm/pull/48498) feat(abliteration): add model pricing and capabilities
- [#48500](https://github.com/BerriAI/litellm/pull/48500) feat(ui): persist model group alias display ordering
- [#48504](https://github.com/BerriAI/litellm/pull/48504) fix(ui): show endpoint-qualified models in Decisions Playground
- [#46668](https://github.com/BerriAI/litellm/pull/46668) fix(prometheus): count provider-side 401s in LLM failure and deployment metrics
- [#48501](https://github.com/BerriAI/litellm/pull/48501) test(routing): a team's wildcard serves its keys before a proxy-wide wildcard of the same pattern
- [#48494](https://github.com/BerriAI/litellm/pull/48494) fix(mcp): reject revoked browser sessions during gateway authorization
- [#48488](https://github.com/BerriAI/litellm/pull/48488) fix(ui): show the budget period date range instead of "cycle" on team member spend
- [#48486](https://github.com/BerriAI/litellm/pull/48486) fix(router): keep DB-only deployments priced across price data reloads
- [#48495](https://github.com/BerriAI/litellm/pull/48495) fix(team): keep the team reset schedule when a temp budget increase is set on a member inheriting the team default
- [#48490](https://github.com/BerriAI/litellm/pull/48490) fix(router): serve a team's wildcard deployment before a proxy-wide wildcard
- [#48487](https://github.com/BerriAI/litellm/pull/48487) feat(ui): budget period tooltip on key, team, user and org spend tiles
- [#48237](https://github.com/BerriAI/litellm/pull/48237) feat(rust): add typed daily end-user spend upsert
- [#48236](https://github.com/BerriAI/litellm/pull/48236) feat(rust): add typed daily team spend upsert
- [#48235](https://github.com/BerriAI/litellm/pull/48235) feat(rust): add typed daily user spend upsert
- [#48234](https://github.com/BerriAI/litellm/pull/48234) feat(rust): add typed spend-log insert query
- [#48233](https://github.com/BerriAI/litellm/pull/48233) feat(rust): add typed team-member spend upsert
- [#48232](https://github.com/BerriAI/litellm/pull/48232) feat(rust): add transaction-scoped team lock query
- [#48231](https://github.com/BerriAI/litellm/pull/48231) feat(rust): add typed end-user spend query
- [#48230](https://github.com/BerriAI/litellm/pull/48230) feat(rust): add typed team spend query
- [#48476](https://github.com/BerriAI/litellm/pull/48476) docs: document incremental database access migration
- [#48229](https://github.com/BerriAI/litellm/pull/48229) feat(rust): add typed user spend query
- [#48217](https://github.com/BerriAI/litellm/pull/48217) feat(rust): add typed key spend query
- [#48214](https://github.com/BerriAI/litellm/pull/48214) feat(rust): add typed database query foundation
- [#48471](https://github.com/BerriAI/litellm/pull/48471) refactor(cost-map): drop the legacy max_tokens field in favor of max_input_tokens and max_output_tokens
- [#48485](https://github.com/BerriAI/litellm/pull/48485) fix(router): isolate forwarded Anthropic subscription cooldowns
- [#48245](https://github.com/BerriAI/litellm/pull/48245) chore(lint): add google-convention docstring rules to strict ruff gate
- [#47681](https://github.com/BerriAI/litellm/pull/47681) fix(proxy)!: gate key budget_duration and budget_id updates like max_budget
- [#48438](https://github.com/BerriAI/litellm/pull/48438) fix(proxy): validate JSON object bodies before request handling
- [#48250](https://github.com/BerriAI/litellm/pull/48250) fix(http_handler): name the timeout phase and limit that fired instead of "after None seconds"
- [#48475](https://github.com/BerriAI/litellm/pull/48475) fix(models): declare Azure audio snapshot capabilities
- [#47897](https://github.com/BerriAI/litellm/pull/47897) fix(mcp): send tool-call stream headers once the call is authorized
- [#41522](https://github.com/BerriAI/litellm/pull/41522) feat(chatgpt): forward client subscriptions through the gateway
- [#48478](https://github.com/BerriAI/litellm/pull/48478) fix(ui): show search tool errors instead of empty results
- [#47680](https://github.com/BerriAI/litellm/pull/47680) fix(router): stop concurrent deployment deletes from crashing deployment lookups
- [#48451](https://github.com/BerriAI/litellm/pull/48451) feat(ui): simplify auto router setup with deployed model defaults
- [#48461](https://github.com/BerriAI/litellm/pull/48461) build(deps): drop expired exclude-newer pins for certifi, mlflow and pypdf
- [#48474](https://github.com/BerriAI/litellm/pull/48474) fix(mcp): advertise valid OAuth resources for toolset URLs
- [#48473](https://github.com/BerriAI/litellm/pull/48473) ci: remove the Together AI and weekly cost map sync workflows
- [#48428](https://github.com/BerriAI/litellm/pull/48428) fix(gemini): restore image tool results for Gemini 2.5
- [#48464](https://github.com/BerriAI/litellm/pull/48464) fix(proxy): scope dashboard search grants and skip the sentinel team lookup
- [#48454](https://github.com/BerriAI/litellm/pull/48454) fix(ui): keep Aria accessible in the dashboard header
- [#48444](https://github.com/BerriAI/litellm/pull/48444) fix(proxy): reject negative RPM and TPM request limits
- [#48452](https://github.com/BerriAI/litellm/pull/48452) fix(proxy): preserve limiter state across SSE keepalive tasks
- [#48458](https://github.com/BerriAI/litellm/pull/48458) test(proxy): make tokenizer offload check deterministic
- [#48450](https://github.com/BerriAI/litellm/pull/48450) feat(pricing): add github_copilot/gpt-6.1-terra and raise gpt-6 max_input_tokens
- [#48455](https://github.com/BerriAI/litellm/pull/48455) fix(elevenlabs): map wav and pcm TTS formats to 24kHz output formats
- [#48453](https://github.com/BerriAI/litellm/pull/48453) feat(cost-map): add baseten elephant-1 and mammoth-1 decision models
- [#48447](https://github.com/BerriAI/litellm/pull/48447) chore(deps): remove expired boto3 botocore and grpcio overrides
- [#48430](https://github.com/BerriAI/litellm/pull/48430) fix(vertex_ai): reuse rerank credential cache
- [#48442](https://github.com/BerriAI/litellm/pull/48442) fix(vertex_ai): bound shared credential cache retention
- [#48441](https://github.com/BerriAI/litellm/pull/48441) feat(bedrock): add global. and us. openai.gpt-6.1-terra rows
- [#48433](https://github.com/BerriAI/litellm/pull/48433) chore(cost-map): add openai batch and ultrafast 12-hour cache write rates from the pricing page
- [#48434](https://github.com/BerriAI/litellm/pull/48434) fix(azure): set azure_ai/Microsoft-Decision-1 max_input_tokens to 32768
- [#48276](https://github.com/BerriAI/litellm/pull/48276) fix(guardrails): exclude litellm_metadata from pass-through guardrail scan text
- [#48431](https://github.com/BerriAI/litellm/pull/48431) fix(ui): render string inputs in general settings
- [#48424](https://github.com/BerriAI/litellm/pull/48424) fix(mcp): report oversized SSE catalog errors
- [#47468](https://github.com/BerriAI/litellm/pull/47468) fix(otel): decide per-team Arize sampling from the trace id so every pod agrees
- [#48429](https://github.com/BerriAI/litellm/pull/48429) chore(cost-map): add openai gpt-6.1-terra from the pricing page
- [#48425](https://github.com/BerriAI/litellm/pull/48425) fix(ui): restore clipboard copying in key and log details
- [#38753](https://github.com/BerriAI/litellm/pull/38753) test(streaming): pin that a stream stuck on one chunk closes its provider stream and logs one failure
- [#48301](https://github.com/BerriAI/litellm/pull/48301) build(deps): bump webpki-roots and webpki-root-certs to 1.0.11
- [#48359](https://github.com/BerriAI/litellm/pull/48359) fix: support Python 3.15

#### 🐛 New Issues
- [#48394](https://github.com/BerriAI/litellm/issues/48394) filelock<4.0 cap keeps downstreams on a version with three open CVEs
- [#48363](https://github.com/BerriAI/litellm/issues/48363) [Bug]: Admin UI Router Settings renders no input for String-typed general_settings fields (spend-log retention, cleanup run budget/timeout) `bug` 💬2
- [#48384](https://github.com/BerriAI/litellm/issues/48384) [Bug]: Anthropic server_tool_use (web search) is returned as a pending tool_call on /v1/chat/completions, so agent clients loop `llm translation` 💬2
- [#48398](https://github.com/BerriAI/litellm/issues/48398) Provider-reported usage.cost trusted as USD without validation → 1,000,000× cost overbilling `llm translation` 💬2
- [#48407](https://github.com/BerriAI/litellm/issues/48407) [Bug]: legacy POST /model/update drops stored litellm_params keys that are not declared on the request model (e.g. guardrails) 💬2
- [#48399](https://github.com/BerriAI/litellm/issues/48399) [Bug]: worker respawn storm and outage during DST clock change: APScheduler stagger time calculation bug `bug` 💬2
- [#48449](https://github.com/BerriAI/litellm/issues/48449) [Bug]: Decisions transformations materialize missing probabilities as 0.0 `bug` `llm translation` 💬1
- [#48362](https://github.com/BerriAI/litellm/issues/48362) [Bug]: hosted_vllm Responses API drops provider-specific params (chat_template_kwargs, top_k, ...) that chat completions forwards `llm translation` 💬1
- [#48377](https://github.com/BerriAI/litellm/issues/48377) [Bug]: Negative rpm_limit / tpm_limit is accepted on create and then 429s every request `bug` `llm translation` 💬1
- [#48418](https://github.com/BerriAI/litellm/issues/48418) [Bug]: Copy icon broken in admin UI `bug` 💬1
- [#48413](https://github.com/BerriAI/litellm/issues/48413) [Bug]: /v1/responses fails with `ValidationError ... ResponseFunctionWebSearch action Field required` when Codex replays a `web_search_call` input item without `action` `llm translation` 💬1
- [#48388](https://github.com/BerriAI/litellm/issues/48388) [Bug]: JSONDecodeError in litellm/llms/ollama/completion/handler.py - Langfuse and/or Sematic Processing of ollama embeddings Response Failure `bug` `llm translation` 💬1
- [#48364](https://github.com/BerriAI/litellm/issues/48364) [Bug]: Token spend/budget limit not enforced for keys created or used for Admin users level `bug` 💬1
- [#48481](https://github.com/BerriAI/litellm/issues/48481) [Bug]: /v1/messages Chat Completions adapter sends message_start with usage.input_tokens 0 `llm translation` `claude code`
- [#48480](https://github.com/BerriAI/litellm/issues/48480) [Bug]: Where is split for prompt+cache+output that was available in Usage in previous versions?? `bug`
- [#48469](https://github.com/BerriAI/litellm/issues/48469) [Feature]: MCP: support patterns (regex) in the allowed and disallowed tool lists
- [#48468](https://github.com/BerriAI/litellm/issues/48468) [Bug]: MCP OAuth token exchange with GitHub fails with 500 — aiohttp rejects 9 KB Content-Security-Policy header (LineTooLong, 8190 bytes) `bug`
- [#48467](https://github.com/BerriAI/litellm/issues/48467) [Feature]: MCP: take a server's URL from a request header (per-tenant endpoints)
- [#48459](https://github.com/BerriAI/litellm/issues/48459) [Feature]: Resume LiteLLM-run batches after a replica restart instead of failing with runner_lost `llm translation`
- [#48457](https://github.com/BerriAI/litellm/issues/48457) [Bug]: ollama_chat drops assistant tool call IDs and MiniMax cannot read results `llm translation`
- [#48446](https://github.com/BerriAI/litellm/issues/48446) [Feature]: Support LM Studio decision models through the Decisions API `llm translation`
- [#48422](https://github.com/BerriAI/litellm/issues/48422) token_counter charges 85 tokens for images priced with the default auto detail
- [#48401](https://github.com/BerriAI/litellm/issues/48401) [Bug]: Streaming drops OpenRouter reasoning_details-only chunks (Claude signatures, encrypted reasoning) `bug` `llm translation`
- [#48395](https://github.com/BerriAI/litellm/issues/48395) [Bug]: Databricks decisions route ignores OAuth M2M credentials and returns 401 "Missing API key" `bug`
- [#48392](https://github.com/BerriAI/litellm/issues/48392) System.Threading.Tasks.Task
- [#48390](https://github.com/BerriAI/litellm/issues/48390) model_prices: explicit 0.0 in cache_creation_input_token_cost (13 tencent/* rows) is a truthiness trap for or-fallback consumers `llm translation`
- [#48387](https://github.com/BerriAI/litellm/issues/48387) [Feature]: Azure Speech pass-through should price fast transcription by enhancedMode.model (MAI-Transcribe-2) `llm translation`
- [#48386](https://github.com/BerriAI/litellm/issues/48386) [Feature]: Azure OpenAI Entra ID (keyless) auth for /v1/decisions and /v1/systemone `llm translation`
- [#48382](https://github.com/BerriAI/litellm/issues/48382) [Bug]: content filter MASK streaming sends held-back text after the tool call chunk, agent clients drop it `llm translation`
- [#48376](https://github.com/BerriAI/litellm/issues/48376) [Bug]: Redis circuit breaker stays OPEN indefinitely on an idle instance — OPEN→HALF_OPEN only happens when a guarded call arrives `llm translation`
- [#48374](https://github.com/BerriAI/litellm/issues/48374) [Bug]: Responses stream returns dict part when logprobs is omitted, breaking event.part.text `llm translation`
- [#48366](https://github.com/BerriAI/litellm/issues/48366) [Bug]: Responses API chat completions bridge silently ignores a previous_response_id it cannot resolve
- [#48365](https://github.com/BerriAI/litellm/issues/48365) [Bug]: Azure OpenAI web_search fee billed at OpenAI's $0.01 per request, or $0 on some azure/* models, instead of the Grounding with Bing rate `llm translation`

#### 🔒 Closed Issues
- [#14635](https://github.com/BerriAI/litellm/issues/14635) [Bug]: "litellm.Timeout: Connection timed out after None seconds. "
- [#23998](https://github.com/BerriAI/litellm/issues/23998) [Bug]: Unable to re-edit Model LiteLLM Params on LiteLLM UI
- [#20962](https://github.com/BerriAI/litellm/issues/20962) [Bug]: Non-admin users cannot create API keys - UI requires team but API blocks team assignment
- [#22637](https://github.com/BerriAI/litellm/issues/22637) [Bug]: Bedrock Converse fails with parallel_tool_calls on Claude 4.5+
- [#17235](https://github.com/BerriAI/litellm/issues/17235) [Feature]: A flag to turn off healthcheck logs
- [#26214](https://github.com/BerriAI/litellm/issues/26214) [Bug]: Unable to use Azure models through LiteLLM in Claude Cowork
- [#26875](https://github.com/BerriAI/litellm/issues/26875) [Feature]: Helm chart better migration job annotations control
- [#38358](https://github.com/BerriAI/litellm/issues/38358) [Bug]: litellm_settings.request_timeout never fires when upstream is silent from the first byte
- [#25951](https://github.com/BerriAI/litellm/issues/25951) Race condition in /team/member_add — concurrent requests lose team members
- [#24734](https://github.com/BerriAI/litellm/issues/24734) [Bug]: False "guardrails feature unavailable" error when guardrails are not configured in LiteLLM 1.82.3
- [#24513](https://github.com/BerriAI/litellm/issues/24513) ## Bug: Usage AI Chat fails when selected LiteLLM model name is a proxy alias / model group
- [#38357](https://github.com/BerriAI/litellm/issues/38357) [Bug]: Bedrock Converse/InvokeModel handler never reads httpx.Response.headers — x-amzn-RequestId (and all provider headers) missing from _hidden_params.additional_headers
- [#46659](https://github.com/BerriAI/litellm/issues/46659) [Bug]: v1.105.0 GZipBufferedResponseMiddleware withholds response headers of streamed (SSE) responses until the first chunk; MCP tools/call streams start only at the 15s ping
- [#29286](https://github.com/BerriAI/litellm/issues/29286) [Bug]: `/v1/messages` streaming emits empty `input_json_delta` instead of `text_delta` when OpenAI-compatible vLLM stream returns `content` with empty `tool_calls: []`
- [#29005](https://github.com/BerriAI/litellm/issues/29005) [Bug]: streamGenerateContent returns 500 when model is missing, should return 404 model not found
- [#27046](https://github.com/BerriAI/litellm/issues/27046) UI Ask AI does not resolve proxy model aliases before calling litellm.acompletion
- [#26190](https://github.com/BerriAI/litellm/issues/26190) [Bug]: CVE in aiohttp version 3.13.3 used in 1.83.8 and above (older litellm version which uses aiohttp==3.13.5 has fixes)
- [#25402](https://github.com/BerriAI/litellm/issues/25402) [Bug]: /v1/responses/compact fails during router_settings.fallbacks failover — 'Unknown parameter: metadata' (hardcoded 'metadata' key in run_async_fallback)
- [#38511](https://github.com/BerriAI/litellm/issues/38511) [Bug]: Responses streaming error handler crashes with AttributeError on the completion-bridge iterator, masking the original error
- [#46469](https://github.com/BerriAI/litellm/issues/46469) [Bug]: complexity_router LLM classifier cost is not attributed to spend or budgets (only in routing_decision.classifier_cost)
- [#31055](https://github.com/BerriAI/litellm/issues/31055) [Bug]: Responses API resp_ ids (encrypted content affinity) are object-storage-unsafe and break LangFuse/S3 trace logging
- [#26765](https://github.com/BerriAI/litellm/issues/26765) Add "azure_ai/gpt-image-2" in "model_prices_and_context_window.json"
- [#26324](https://github.com/BerriAI/litellm/issues/26324) [Bug] acount_tokens: Anthropic count path skips chat-completions → native translation; standard chat-format payloads rejected with 400
- [#26257](https://github.com/BerriAI/litellm/issues/26257) [Bug]: Fireworks Kimi 2.6
- [#26179](https://github.com/BerriAI/litellm/issues/26179) chatgpt/gpt-5.4 returns empty output=[] with status='completed' via litellm.responses()
- [#45041](https://github.com/BerriAI/litellm/issues/45041) Add "glm-5.3" in "model_prices_and_context_window.json"
- [#38941](https://github.com/BerriAI/litellm/issues/38941) [Bug]: Background health check sends `supports_max_reasoning_effort` as a request field to Bedrock (400), for models without `supports_*_reasoning_effort` in the model map
- [#38628](https://github.com/BerriAI/litellm/issues/38628) [Bug]: SearXNG search adapter turns HTTP 429/503 into a successful empty result
- [#38674](https://github.com/BerriAI/litellm/issues/38674) [Bug]: Token usage logged as 0 for Responses API WebSocket mode (_aresponses_websocket), breaking cost tracking for Agent CLI traffic
- [#33824](https://github.com/BerriAI/litellm/issues/33824) [Bug]: In versions v1.92.0 and later, the /v1/message anthropic proxy is incompatible.
- [#34082](https://github.com/BerriAI/litellm/issues/34082) [Bug]: Headroom compression guide pins a stale, pre-fix version and the documented setup doesn't achieve real compression
- [#45312](https://github.com/BerriAI/litellm/issues/45312) [Bug]: With BYOK, one client's 429 cools the shared deployment for everyone for the provider's full retry-after, and the cooldown can't be cleared
- [#48304](https://github.com/BerriAI/litellm/issues/48304) auth failure handler 500s on any non-object JSON body (AttributeError: 'list' object has no attribute 'get')
- [#37170](https://github.com/BerriAI/litellm/issues/37170) Fix "azure/gpt-audio-mini-2025-10-06" entry in "model_prices_and_context_window.json"
- [#37169](https://github.com/BerriAI/litellm/issues/37169) Fix "azure/gpt-audio-1.5-2026-02-23" entry in "model_prices_and_context_window.json"
- [#47895](https://github.com/BerriAI/litellm/issues/47895) [Bug]: Tool results with images fail on Gemini 2.5 since v1.89.0 ("Multimodal function responses are not supported for this model")
- [#42819](https://github.com/BerriAI/litellm/issues/42819) [Bug]: sse_keepalive_ping_interval_seconds leaks a max_parallel_requests slot on every streamed request (keys 429 after N sequential calls)
- [#48360](https://github.com/BerriAI/litellm/issues/48360) MCP gateway silently drops an upstream whose tools/list exceeds a single 1 MiB SSE event; error reads 'SSE stream ended without a response'
- [#19428](https://github.com/BerriAI/litellm/issues/19428) [Bug]: When throwing `model is repeating the same chunk`, LiteLLM does not stop the process
- [#46576](https://github.com/BerriAI/litellm/issues/46576) [Feature]: Add pricing for gpt-5.5-cyber-preview
- [#48363](https://github.com/BerriAI/litellm/issues/48363) [Bug]: Admin UI Router Settings renders no input for String-typed general_settings fields (spend-log retention, cleanup run budget/timeout)
- [#43045](https://github.com/BerriAI/litellm/issues/43045) [Bug]: `encrypted_content_affinity` does not match an encryption-boundary peer when a deployment uses `litellm_credential_name`
- [#38507](https://github.com/BerriAI/litellm/issues/38507) OpenRouter Responses API (aresponses) never tracks cost — spend logged as $0 despite real usage
- [#38813](https://github.com/BerriAI/litellm/issues/38813) [Bug]: Derived auto-router baseline underprices models with missing cache rates
- [#38828](https://github.com/BerriAI/litellm/issues/38828) websearch_interception chat-completions agentic follow-up crashes: acompletion() got multiple values for keyword argument 'aws_region_name'
- [#38957](https://github.com/BerriAI/litellm/issues/38957) [Bug]: cached AsyncHTTPHandler finalizer closes the pooled httpx client under in-flight SSE streams (hourly batched stream deaths)
- [#38549](https://github.com/BerriAI/litellm/issues/38549) [Bug]: Bedrock bearer-token auth resolves and discards AWS credentials, costing a full IMDS timeout per request
- [#46295](https://github.com/BerriAI/litellm/issues/46295) [Bug]: Can't log in to MCP toolset URLs from Claude Code or Codex
- [#31075](https://github.com/BerriAI/litellm/issues/31075) Add zai/glm-5.2 pricing entry — GLM-5.2 missing from model cost map, causing downstream misattribution to GLM-5
- [#48399](https://github.com/BerriAI/litellm/issues/48399) [Bug]: worker respawn storm and outage during DST clock change: APScheduler stagger time calculation bug
- [#46216](https://github.com/BerriAI/litellm/issues/46216) [Bug]: Bedrock bare claude-3-5-sonnet ids list max_input_tokens 1000000 (regional siblings say 200000)
- [#45070](https://github.com/BerriAI/litellm/issues/45070) [Bug]: Add opt-in per-user ownership isolation for provider-native passthrough resources
- [#46116](https://github.com/BerriAI/litellm/issues/46116) [Feature]: Custom display ordering and sorting for Model Group Alias in Admin UI
- [#38247](https://github.com/BerriAI/litellm/issues/38247) [Bug]: streaming chunk_parser drops service_tier, breaking priority-tier billing verification (xAI/OpenAI)
- [#38450](https://github.com/BerriAI/litellm/issues/38450) giving random strings of symbols when asked for url in litellm
- [#46917](https://github.com/BerriAI/litellm/issues/46917) [Bug]: Gateway authorization accepts revoked UI session cookies
- [#38534](https://github.com/BerriAI/litellm/issues/38534) [Bug]: Playground (Chat & Compare) model dropdown is empty for internal_user, even though /v1/models and the Models+Endpoints page both list all models
- [#38679](https://github.com/BerriAI/litellm/issues/38679) cache_control breakpoint census ignores `tools` on the chat/completions path, so injection can exceed Anthropic's 4-block cap
- [#38709](https://github.com/BerriAI/litellm/issues/38709) numbers not showing
- [#34102](https://github.com/BerriAI/litellm/issues/34102) liteLLM
- [#34104](https://github.com/BerriAI/litellm/issues/34104) Taking too much time to run a command
- [#46229](https://github.com/BerriAI/litellm/issues/46229) [Bug]: Concurrent requests to the proxy /mcp endpoint cancel each other in flight (recurrence of #24522)
- [#46413](https://github.com/BerriAI/litellm/issues/46413) Lens worker claims job but never progresses, fails after ~15 min with "Worker disconnected repeatedly"
- [#46062](https://github.com/BerriAI/litellm/issues/46062) [Feature]: Per-user ChatGPT subscription passthrough for Codex-compatible clients
- [#45242](https://github.com/BerriAI/litellm/issues/45242) [Bug]: Concurrent deployment deletion can raise IndexError in team-model lookup
- [#47520](https://github.com/BerriAI/litellm/issues/47520) [Bug]: an inconvenient button in the interface
- [#48313](https://github.com/BerriAI/litellm/issues/48313) [Bug]: Dashboard search fails looking up the internal litellm-dashboard team
- [#48377](https://github.com/BerriAI/litellm/issues/48377) [Bug]: Negative rpm_limit / tpm_limit is accepted on create and then 429s every request
- [#47923](https://github.com/BerriAI/litellm/issues/47923) [Feature]: Support WAV format for Elevenlabs
- [#47932](https://github.com/BerriAI/litellm/issues/47932) [Bug]: Vertex AI rerank reloads Google credentials on every request
- [#48418](https://github.com/BerriAI/litellm/issues/48418) [Bug]: Copy icon broken in admin UI
- [#46916](https://github.com/BerriAI/litellm/issues/46916) [Bug]: Key budget duration and tier updates bypass budget authorization checks

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,604 · **Open issues:** 382 · **Last push:** <1h ago

On October 27, 2026, Unsloth released v0.1.911-beta, introducing scheduled tasks that allow prompts to run at specified intervals using either a local model or API, alongside enhancements to the MiniMax-M3.1-Flash with performance improvements for image processing and chat functions on Mac. Notable merged pull requests include advancements in tensor parallelism, notably fixing issues with fp16 gradients and enhancing the FSDP2's handling of optimizer memory. Additionally, a crucial bug was reported regarding AMD GPUs not appearing on mixed Nvidia-AMD Linux systems, highlighting ongoing compatibility challenges.

#### 🚀 New Releases
- [v0.1.911-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.911-beta) Scheduled + MiniMax-M3.1-Flash + Perf Gains

#### ✅ Merged PRs
- [#15406](https://github.com/unslothai/unsloth/pull/15406) Studio video: pre-seed the denoiser compile's float specialisations on a returning load
- [#15457](https://github.com/unslothai/unsloth/pull/15457) Studio tests: queue each FIFO admission waiter before starting the next
- [#15454](https://github.com/unslothai/unsloth/pull/15454) Tests: fix the two spoof-safety lint failures on main
- [#15410](https://github.com/unslothai/unsloth/pull/15410) Attention: packed fp32 rerouted to xformers keeps an fp32 output without autocast
- [#15416](https://github.com/unslothai/unsloth/pull/15416) Native FSDP2 fp16 scaler: agree on overflow over ranks without an explicit unscale_, and give fused optimizers one 0 / 1 flag over all devices
- [#15386](https://github.com/unslothai/unsloth/pull/15386) gpt-oss: read config.transformers_weights before the standard filenames when probing the expert layout
- [#15426](https://github.com/unslothai/unsloth/pull/15426) FSDP2: gather before clearing the post-forward mesh in native_fsdp2_unsharded
- [#15415](https://github.com/unslothai/unsloth/pull/15415) Tensor parallel: average fp16 dp gradients in fp32 so finite gradients cannot sum to inf
- [#15368](https://github.com/unslothai/unsloth/pull/15368) Tensor parallel: generate, adapter / tokenizer saves, merged and GGUF exports, and reload cells under UNSLOTH_TP_SIZE
- [#15384](https://github.com/unslothai/unsloth/pull/15384) FSDP2 bitsandbytes: no per-parameter device sync, bounded GPU memory in the optimizer save
- [#15364](https://github.com/unslothai/unsloth/pull/15364) loader: do not restore an fp8 quantization_config over dequantized weights
- [#15396](https://github.com/unslothai/unsloth/pull/15396) Keep SFT loss_type="dft" on the DFT objective when label smoothing is set
- [#15407](https://github.com/unslothai/unsloth/pull/15407) Studio backend tests: close a scoped MCP session a test leaves cached
- [#15373](https://github.com/unslothai/unsloth/pull/15373) FSDP2 / DDP: only keep torchao weights FSDP2 cannot shard out of fully_shard and the DDP broadcast
- [#15400](https://github.com/unslothai/unsloth/pull/15400) TP x FSDP2 parity test: per-arch step-norm tolerance for phi3's fused shards
- [#15394](https://github.com/unslothai/unsloth/pull/15394) Studio video: refuse a NaN render on the native MiniMax-H3 route
- [#15398](https://github.com/unslothai/unsloth/pull/15398) Multi-account Playwright: retry the login page once when the app's own logout redirect aborts it
- [#15397](https://github.com/unslothai/unsloth/pull/15397) TP Trainer parity tests: keep eps 1e-4 to the UNSLOTH_TP_SIZE runs, native Trainer runs back on the default
- [#15371](https://github.com/unslothai/unsloth/pull/15371) Studio sd.cpp: verify a new bundle starts before it replaces the installed one; Windows ROCm without the HIP SDK uses Vulkan
- [#15393](https://github.com/unslothai/unsloth/pull/15393) Studio diffusion: pre-seed the background compile's float specialisations on a returning load
- [#15383](https://github.com/unslothai/unsloth/pull/15383) Prompt queue: row button labels do not take the next row's clicks
- [#15374](https://github.com/unslothai/unsloth/pull/15374) Studio video: refuse NaN / inf decodes for every family before a PIL / uint8 cast or clamp hides them
- [#14465](https://github.com/unslothai/unsloth/pull/14465) Studio: price per-layer embedding and Engram lookup tables as host or disk memory, not VRAM
- [#15381](https://github.com/unslothai/unsloth/pull/15381) TP Trainer parity tests: run AdamW with eps 1e-4 so reduction-order noise is not amplified
- [#15380](https://github.com/unslothai/unsloth/pull/15380) Bump install.sh / install.ps1 pins to unsloth>=2026.10.9
- [#15365](https://github.com/unslothai/unsloth/pull/15365) Studio Images: no toast when the prompt upsampler is not available
- [#15379](https://github.com/unslothai/unsloth/pull/15379) Risky loader baseline: record the FSDP2 export's store handoff
- [#15375](https://github.com/unslothai/unsloth/pull/15375) Studio: prompt edit box, menu heading chips, hub Run, files panel, loaded row menu
- [#15370](https://github.com/unslothai/unsloth/pull/15370) Studio diffusion: fuse the int8 SwiGLU MLP on block-streamed Qwen-Image-2.1 denoisers
- [#15353](https://github.com/unslothai/unsloth/pull/15353) FSDP2: run GGUF, torchao, OpenVINO and GGML exports on rank 0 instead of refusing them
- [#15139](https://github.com/unslothai/unsloth/pull/15139) Studio: one request per chat model load, sent to both /validate and /load
- [#15339](https://github.com/unslothai/unsloth/pull/15339) Studio video: keep the untiled decode gate visible under the stream encoder, skip the fp32 VAE rerun on non-finite latents, refuse NaN clips clearly
- [#15138](https://github.com/unslothai/unsloth/pull/15138) Studio: one owner for every request to llama-server, so a crashed server recovers on every API route
- [#15349](https://github.com/unslothai/unsloth/pull/15349) Studio: keep a row's control by its title when a description sits under it
- [#14431](https://github.com/unslothai/unsloth/pull/14431) Studio: reserve the DSpark/DFlash sidecar in --fit-target and recover from a Metal out-of-memory
- [#15359](https://github.com/unslothai/unsloth/pull/15359) Block compile: keep each compiled block whole under DDP (DeepSeek-OCR torchrun)
- [#15357](https://github.com/unslothai/unsloth/pull/15357) Studio diffusion: cast-cache writes read block-streamed tensors from their host copy
- [#15348](https://github.com/unslothai/unsloth/pull/15348) Studio diffusion: the prompt encode streams only the free-memory shortfall
- [#15362](https://github.com/unslothai/unsloth/pull/15362) Bump step-security/harden-runner in /
- [#15366](https://github.com/unslothai/unsloth/pull/15366) Bump trufflesecurity/trufflehog in /
- [#15338](https://github.com/unslothai/unsloth/pull/15338) Studio: safer saved run settings, Always load, and API tab tidy-up
- [#15354](https://github.com/unslothai/unsloth/pull/15354) FP8 fp16 dequant: keep autograd for a trainable weight or scale
- [#15350](https://github.com/unslothai/unsloth/pull/15350) CI: rank apt mirrors by speed so a slow Azure mirror cannot time out apt steps
- [#15345](https://github.com/unslothai/unsloth/pull/15345) Studio: stop the macOS sandbox probe from leaking processes that spin forever
- [#15347](https://github.com/unslothai/unsloth/pull/15347) Do not serve inference_mode packed metadata to a training forward
- [#15336](https://github.com/unslothai/unsloth/pull/15336) Studio: exclude diffusion models from Chat's On Device list
- [#15337](https://github.com/unslothai/unsloth/pull/15337) Studio: show diffusion training preparation progress
- [#15335](https://github.com/unslothai/unsloth/pull/15335) Studio: identify models in download progress
- [#15355](https://github.com/unslothai/unsloth/pull/15355) Tests: follow TRL's renamed tiny Phi-3 and Qwen3.5 repos
- [#15326](https://github.com/unslothai/unsloth/pull/15326) Tensor parallel from UNSLOTH_TP_SIZE for unmodified training scripts, with Trainer checkpoints and 8-bit AdamW
- [#15341](https://github.com/unslothai/unsloth/pull/15341) fix(studio): distinguish media RAM offloading from insufficient memory
- [#15351](https://github.com/unslothai/unsloth/pull/15351) Tests: name the encoding in the gloo export guard, and treat a bare device index as CUDA in the YaRN load check
- [#15346](https://github.com/unslothai/unsloth/pull/15346) Import without Triton: define Unsloth's kernels against the zoo triton stub, visible to unsloth only
- [#15334](https://github.com/unslothai/unsloth/pull/15334) Studio: exclude NVIDIA NPU from GPU memory accounting
- [#12966](https://github.com/unslothai/unsloth/pull/12966) Trim comments in the Studio frontend and Tauri shell
- [#15340](https://github.com/unslothai/unsloth/pull/15340) Studio diffusion: pin FLUX.2-klein's reduction-config filter on every arch (same seed, same image across processes)
- [#15333](https://github.com/unslothai/unsloth/pull/15333) Trim comments in the installer entry scripts
- [#12969](https://github.com/unslothai/unsloth/pull/12969) Trim comments in the installers, scripts and CI config
- [#12967](https://github.com/unslothai/unsloth/pull/12967) Trim comments in the Studio backend
- [#15322](https://github.com/unslothai/unsloth/pull/15322) Intel XPU: fix 4bit dequantize and gemv on plain (not double-quantized) absmax
- [#15324](https://github.com/unslothai/unsloth/pull/15324) torchrun: plain Trainer DDP find_unused default, FSDP2-collective SentenceTransformer save
- [#15315](https://github.com/unslothai/unsloth/pull/15315) Studio Flows: Mayor mode, a Micropolis-lite city builder on the world map
- [#15329](https://github.com/unslothai/unsloth/pull/15329) Studio: warn when a custom Hub endpoint redirects downloads to huggingface.co
- [#15325](https://github.com/unslothai/unsloth/pull/15325) Compiled blocks: packed rows run the flash varlen kernel inside the graph
- [#15312](https://github.com/unslothai/unsloth/pull/15312) Studio Flows: Village Rivals, a turn-based 4X-lite world mode
- [#15313](https://github.com/unslothai/unsloth/pull/15313) Studio Flows: schema-first authoring, describe-a-place scene solver and a director that always returns a valid quest
- [#15309](https://github.com/unslothai/unsloth/pull/15309) Studio Flows: cut villager background calls with option plans, a plan cache and gated reflection
- [#15317](https://github.com/unslothai/unsloth/pull/15317) Studio Flows: hostile AI v2 for 3D shooter worlds
- [#15316](https://github.com/unslothai/unsloth/pull/15316) Studio Flows: action verbs for 3D worlds (doors, chests, levers, melee, dash, throw)
- [#15343](https://github.com/unslothai/unsloth/pull/15343) Fix TRL 0.27-0.28 GRPOTrainer import on transformers >= 5.3 (No module named 'weave')
- [#15306](https://github.com/unslothai/unsloth/pull/15306) Studio: keep Images, Video and Hub search typing responsive
- [#15225](https://github.com/unslothai/unsloth/pull/15225) Native FSDP2: memory-scalable 16-bit loading (each rank reads only its shard), and the fp16 start scale on sub-meshes
- [#15276](https://github.com/unslothai/unsloth/pull/15276) Studio: open the tile's own menu on a right-click in the Images strip
- [#15311](https://github.com/unslothai/unsloth/pull/15311) Native FSDP2: fix generate after QAT convert (mixed torch.Tensor and DTensor)
- [#15330](https://github.com/unslothai/unsloth/pull/15330) Studio diffusion: seed the small-host int8 placement from its measured peak (FLUX.2-klein on a 12.7 GB T4: 30.4 to 10.6 s per image)
- [#14554](https://github.com/unslothai/unsloth/pull/14554) Studio: Cosmos3-Nano and Cosmos3-Edge video families
- [#15331](https://github.com/unslothai/unsloth/pull/15331) Studio video: write the offloaded native int8 build to the prequant cache after the load (Wan2.2-A14B first clip 97 s sooner)
- [#15258](https://github.com/unslothai/unsloth/pull/15258) Studio: sample Vulkan drafts on the CPU when the vocab misaligns the logits rows
- [#15328](https://github.com/unslothai/unsloth/pull/15328) GKD: never pass a zero generated-token count
- [#15222](https://github.com/unslothai/unsloth/pull/15222) Fix GKD normalization after response generation
- [#15295](https://github.com/unslothai/unsloth/pull/15295) Align System header controls and avoid the close button
- [#15168](https://github.com/unslothai/unsloth/pull/15168) Fix MOSS-Image GGUF discovery in On Device
- [#15214](https://github.com/unslothai/unsloth/pull/15214) Honour YaRN passed as rope_parameters, and rope_scaling on FastModel
- [#15318](https://github.com/unslothai/unsloth/pull/15318) Studio diffusion: read hosted files we already ship (LTX-2 fp8 DiT, Qwen-Image-2.1 bf16 VAE), and name a missing int8 text encoder file
- [#14999](https://github.com/unslothai/unsloth/pull/14999) Studio: keep a system column when the advisor mapping carries metadata
- [#15304](https://github.com/unslothai/unsloth/pull/15304) Studio Flows: faster runs and player calls (batched run writes, keys minted ahead, faster memory retrieval)
- [#15176](https://github.com/unslothai/unsloth/pull/15176) Studio: reject a training random_seed outside the numpy range up front
- [#12968](https://github.com/unslothai/unsloth/pull/12968) Trim comments in unsloth, unsloth_cli and tests
- [#15230](https://github.com/unslothai/unsloth/pull/15230) TP / PP: every causal LM architecture trains like one process or is refused up front
- [#15321](https://github.com/unslothai/unsloth/pull/15321) Studio diffusion: cast cache for fp32-shard components at bf16 too, and on the image path (Z-Image-Turbo reads 11.5 GiB, not 22.9)
- [#15310](https://github.com/unslothai/unsloth/pull/15310) Studio Images: one denoiser stream-out per prompt encode, and the Z-Image CFG negative encoded once
- [#15294](https://github.com/unslothai/unsloth/pull/15294) Count prepared API prompts before GGUF admission
- [#15255](https://github.com/unslothai/unsloth/pull/15255) Studio: bring back the scheduled task model picker and model loading
- [#15307](https://github.com/unslothai/unsloth/pull/15307) GRPO kept-set refusals: stop saying UNSLOTH_GRPO_TRUNCATED_SUPPORT=1 was set
- [#14721](https://github.com/unslothai/unsloth/pull/14721) Studio: reject a NaN weight_decay in a training request
- [#15282](https://github.com/unslothai/unsloth/pull/15282) Studio: answer 400 to out-of-range sampling on /v1/messages with a Connection model
- [#15308](https://github.com/unslothai/unsloth/pull/15308) Keep Gemma embedding normalizer out of place for external inputs_embeds
- [#14380](https://github.com/unslothai/unsloth/pull/14380) Read CSV text cells larger than 128 KB in RawTextDataLoader
- [#15234](https://github.com/unslothai/unsloth/pull/15234) Fix gradients through external inputs_embeds when applying attention masks
- [#15319](https://github.com/unslothai/unsloth/pull/15319) Model picker contracts: read the multi-quant parent row's gutter through its aliases
- [#15235](https://github.com/unslothai/unsloth/pull/15235) Fix non-contiguous position indices in fused and unfused RoPE
- [#15089](https://github.com/unslothai/unsloth/pull/15089) Studio: show the browser in Project chats
- [#15299](https://github.com/unslothai/unsloth/pull/15299) Studio: one icon per job across the app
- [#15249](https://github.com/unslothai/unsloth/pull/15249) Studio: show settings and the row menu on the loaded model in Recommended
- [#15247](https://github.com/unslothai/unsloth/pull/15247) Studio: one run settings dropdown per model, and the last setting used is what loads
- [#15303](https://github.com/unslothai/unsloth/pull/15303) Studio: cache fp32-shard video components cast to float16 for later loads
- [#15233](https://github.com/unslothai/unsloth/pull/15233) Studio: show newly downloaded quants of a loaded GGUF in the model picker
- [#15232](https://github.com/unslothai/unsloth/pull/15232) Studio: control heights, composer fades, API page layout, settings polish
- [#15215](https://github.com/unslothai/unsloth/pull/15215) Native FSDP2: keep gathered weights allocated so block CUDA graphs replay
- [#15014](https://github.com/unslothai/unsloth/pull/15014) Studio GGUF: charge images in the fit and tool-result sizing counts (#14968)

#### 🐛 New Issues
- [#15444](https://github.com/unslothai/unsloth/issues/15444) [Bug] AMD GPUs do not show up on mixed Nvidia-AMD Linux systems and custom llama.cpp `feature request` `bug` 💬3
- [#15448](https://github.com/unslothai/unsloth/issues/15448) [Feature] Full-page screenshots for browser agents
- [#15412](https://github.com/unslothai/unsloth/issues/15412) [Bug] Unable to load *any* deepseek 4.1 1017 uncensored from the "model hub" `feature request` `bug` 💬1
- [#15409](https://github.com/unslothai/unsloth/issues/15409) [Bug] MiniMax-M3.1 GGUF on Apple Silicon: NVFP4 CPU fallback despite 61/61 layers offloaded to GPU 💬1
- [#15405](https://github.com/unslothai/unsloth/issues/15405) [Studio] Resume unavailable for Qwen3.5-2B: _MODEL_WEIGHT_RE misses model.safetensors-00001-of-00001.safetensors `feature request` `bug` 💬1
- [#15332](https://github.com/unslothai/unsloth/issues/15332) [Feature]Dataset preflight check before training `feature request`
- [#15305](https://github.com/unslothai/unsloth/issues/15305) [Bug] Desktop is a lie? `feature request` `bug` 💬1
- [#15447](https://github.com/unslothai/unsloth/issues/15447) [Feature] Allow agent access to manually opened browser tabs
- [#15417](https://github.com/unslothai/unsloth/issues/15417) [Bug]: Anthropic passthrough (/v1/messages) fails with context overflow instead of applying auto-compaction
- [#15356](https://github.com/unslothai/unsloth/issues/15356) [Feature] Add ACP Support `feature request`
- [#15314](https://github.com/unslothai/unsloth/issues/15314) [Feature] [Desktop] Image: Unify Edit and Reference `feature request`

#### 🔒 Closed Issues
- [#14987](https://github.com/unslothai/unsloth/issues/14987) [Bug] Text generation failure with MiniCPM-V-4.7-1B Vulkan backend
- [#15221](https://github.com/unslothai/unsloth/issues/15221) [Bug] Edit image: typing in the Instructions box is extremely slow during image generation
- [#15046](https://github.com/unslothai/unsloth/issues/15046) [Bug] Browser preview not available in Project
- [#15274](https://github.com/unslothai/unsloth/issues/15274) [Feature] Native HF-Mirror Support with Parallel Model Downloads
- [#15272](https://github.com/unslothai/unsloth/issues/15272) [Bug] "Open image in new window" and "Copy image" context menu items from the Edit gallery strip do nothing
- [#14968](https://github.com/unslothai/unsloth/issues/14968) [Bug] Auto-compact ignores image tokens on local GGUF chats, so tool loops with screenshots overflow the context window
- [#14012](https://github.com/unslothai/unsloth/issues/14012) [Feature Request] Offload context compaction and web search to a lightweight auxiliary model
- [#15305](https://github.com/unslothai/unsloth/issues/15305) [Bug] Desktop is a lie?

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,162 · **Open issues:** 381 · **Last push:** 3h ago

On October 27, 2026, there were no new releases for AIBrix, but a significant feature was merged with PR #3272, introducing a least_request policy for selecting encode pods. In terms of new issues, several bugs were reported, most notably issue #3308, which details a problem with the Pooled StormService autoscaling potentially skipping stabilization windows during scale-down. Additionally, there are concerns raised in issue #3315 regarding PD routing failures linked to NaN KV-cache metrics, showcasing critical areas needing attention. Overall, the day was marked by noteworthy developments despite the lack of new version updates.

#### ✅ Merged PRs
- [#3272](https://github.com/vllm-project/aibrix/pull/3272) [Feat] Add a least_request policy for picking encode pods

#### 🐛 New Issues
- [#3308](https://github.com/vllm-project/aibrix/issues/3308) [Bug] Pooled StormService autoscaling reads current replicas from status, so a scale-down can skip the stabilization window `kind/bug` `area/orchestration` 💬5
- [#3318](https://github.com/vllm-project/aibrix/issues/3318) [Bug] Runtime sidecar injection replaces existing adapter PVCs with emptyDir `kind/bug` `area/orchestration` 💬1
- [#3317](https://github.com/vllm-project/aibrix/issues/3317) [Bug] HPA strategy rounds fractional pod-metric targets up, so gpu_cache_usage_perc 0.5 never scales up `kind/bug` `area/website` `area/orchestration` 💬1
- [#3315](https://github.com/vllm-project/aibrix/issues/3315) PD routing fails for every request when one decode pod reports a NaN KV-cache usage or throughput `kind/bug` `area/gateway` `area/kv-cache` 💬1
- [#3312](https://github.com/vllm-project/aibrix/issues/3312) [Bug] avg_tpot_pod_5m divides the TPOT histogram's sum by itself, so it is always 1 `kind/bug` `area/gateway` 💬1
- [#3310](https://github.com/vllm-project/aibrix/issues/3310) Feature: Redis Sentinel discovery and automatic reconnection for the gateway `area/gateway` `kind/feature` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,269 · **Open issues:** 793 · **Last push:** <1h ago

On October 27, 2026, there were no new releases or merged pull requests for Semantic Router. However, several new issues were reported, highlighting ongoing development and troubleshooting needs. Notably, issue #5515 introduces a feature to serve Vela 3.0 d3 sizes in the model runtime, while issue #5511 seeks to make vela3-fast the default decision model. Additionally, a critical bug was identified in issue #5507, where OpenRouter's reasoning details experience strict decoding failures, indicating an area that requires immediate attention. Overall, the day was marked by significant activity in issue reporting rather than code deployments.

#### 🐛 New Issues
- [#5515](https://github.com/vllm-project/semantic-router/issues/5515) [Feature] Serve the Vela 3.0 d3 sizes (vela3-lite and up) in the model runtime `enhancement` `accepted` `wg/router-models-inference-runtime` 💬5
- [#5507](https://github.com/vllm-project/semantic-router/issues/5507) [Bug] OpenRouter reasoning_details on message and delta fail strict decoding `bug` `needs-acceptance` `wg/data-plane-networking` 💬2
- [#5511](https://github.com/vllm-project/semantic-router/issues/5511) [Feature] Serve vela3-fast in the model runtime as the default decision model `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#5494](https://github.com/vllm-project/semantic-router/issues/5494) [Feature] Load the Vela 3.0 packages in the model runtime `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#5506](https://github.com/vllm-project/semantic-router/issues/5506) [Bug] Perplexity Chat responses fail strict decoding on citations and search_results `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#5510](https://github.com/vllm-project/semantic-router/issues/5510) [Bug] Classify windows without room for content fail every input with 200 instead of the request with 400 `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5501](https://github.com/vllm-project/semantic-router/issues/5501) [Docs] Point the Beyond Document Grounding paper entry at the ACL Anthology `accepted` `wg/router-models-inference-runtime` `documentation` 💬1
- [#5493](https://github.com/vllm-project/semantic-router/issues/5493) [Blog] Vela 3.0: name it, Vela finds it `accepted` `wg/router-models-inference-runtime` `documentation` 💬1
- [#5496](https://github.com/vllm-project/semantic-router/issues/5496) [Bug] AutoMix cost-aware selection inverts preference and verification bonus on negative expected values 💬1
- [#5508](https://github.com/vllm-project/semantic-router/issues/5508) [Bug] Dashboard answers 405 to HEAD on every GET-only route, including /healthz `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5509](https://github.com/vllm-project/semantic-router/issues/5509) [Bug] PR Gate publisher has no retry: one transient API failure leaves the required check unreported until the next qualifying event `bug` `needs-acceptance` `wg/evaluation-quality`
- [#5503](https://github.com/vllm-project/semantic-router/issues/5503) [Perf] Make SSE framing linear for fragmented and coalesced events `needs-acceptance` `wg/data-plane-networking`
- [#5499](https://github.com/vllm-project/semantic-router/issues/5499) [Bug] Decision-drift reset zeroes prefix-cache and handoff pricing that drift does not invalidate `bug` `needs-acceptance` `wg/agentic-context`
- [#5497](https://github.com/vllm-project/semantic-router/issues/5497) [Feature] recipe-lab sub-issue 5: agent skill and harness-grade CLI for driving the improvement loop `enhancement` `needs-acceptance`

#### 🔒 Closed Issues
- [#4079](https://github.com/vllm-project/semantic-router/issues/4079) [Feature] Reduce provider-mocker publication latency after source changes
- [#5493](https://github.com/vllm-project/semantic-router/issues/5493) [Blog] Vela 3.0: name it, Vela finds it

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*