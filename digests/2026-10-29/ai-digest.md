# 📡 AI Ecosystem Digest — 2026-10-29

> Generated 2026-10-29 02:10 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 153,756 | 29 | 1 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 131,455 | 12 | 2 | 50 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,601 | 1 | 2 | 8 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,306 | 13 | 6 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 222,775 | 12 | 20 | 13 | 2 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,778 | 24 | 10 | 3 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,298 | 166 | 103 | 172 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 258,091 | 18 | 7 | 10 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 95,793 | 29 | 44 | 32 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,325 | 13 | 10 | 63 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,674 | 7 | 22 | 29 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 185,147 | 9 | 8 | 4 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,253 | 25 | 60 | 114 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,720 | 16 | 11 | 229 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,166 | 4 | 5 | 7 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,302 | 9 | 4 | 1 | 0 |

---

## ✨ Highlights

- **Ollama** released [v0.40.13](https://github.com/ollama/ollama/releases/tag/v0.40.13) with several updates.
- **Qwen Code** released multiple versions including [v0.26.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.3) and [SDK TypeScript v0.1.25](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.25).
- **OpenAI Codex** merged PR [#57876](https://github.com/openai/codex/pull/57876) to reuse the cached runtime keymap for default configuration.
- A new issue in **Ollama** has gained traction: [#19369](https://github.com/ollama/ollama/issues/19369) about lfm3 model requiring an unspecified MLX runtime, with 6 comments.
- **OpenClaw** reported a critical bug in issue [#186754](https://github.com/openclaw/openclaw/issues/186754): a managed update taking an excessive 33 minutes to activate, receiving 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 153,756 · **Open issues:** 15,942 · **Last push:** 1d ago

Today was relatively routine for Claude Code, with no releases or merged pull requests. However, several new issues were raised, including a notable bug report (#105607) regarding missing Effort and Ultracode controls for the `[1m]` model selections that began with version 2.1.311. Another critical issue (#105797) highlighted problems with auto mode refusing pre-approved landing scripts in project threads, creating confusion for users. Additionally, the community expressed dissatisfaction with the recent UI change, leading to a feature request (#105591) for the original design to be reinstated. These discussions reflect ongoing user engagement and feature requests as the platform evolves.

#### 🐛 New Issues
- [#105607](https://github.com/anthropics/claude-code/issues/105607) [BUG] VS Code extension: Effort and Ultracode controls missing for `[1m]` model selections (`opus[1m]` since 2.1.311) `bug` `platform:macos` `area:ide` `platform:vscode` 💬3
- [#105797](https://github.com/anthropics/claude-code/issues/105797) Auto mode refuses an allow-listed landing script ("Merge Without Review") in Claude project threads; no documented way to pre-approve it `bug` `platform:macos` `area:bash` `area:permissions` 💬2
- [#105829](https://github.com/anthropics/claude-code/issues/105829) [Bug] Channel notifications refused for individual Max account: "channels feature is not currently available" `bug` `platform:macos` `area:mcp` 💬1
- [#105825](https://github.com/anthropics/claude-code/issues/105825) [Bug] Inconsistent refusal behavior: model declined a request previously but complied with the same request later `bug` `platform:linux` `area:model` 💬1
- [#105591](https://github.com/anthropics/claude-code/issues/105591) [FEATURE] THE NEW UI IS UGLY PLEASE BRING BACK THE ORIGINAL DESIGN :'( `enhancement` `area:ui` 💬1
- [#105840](https://github.com/anthropics/claude-code/issues/105840) [FEATURE] Warn when claude.ai connectors load into a session (least-privilege agent setups) `enhancement` `area:mcp` `area:security`
- [#105839](https://github.com/anthropics/claude-code/issues/105839) [BUG] Chinese IME (Microsoft Bopomofo) input intermittently stops working until the current prompt is submitted (Windows Terminal) `bug` `platform:windows` `area:tui` `area:a11y`
- [#105838](https://github.com/anthropics/claude-code/issues/105838) [BUG] Windows: skill `effort:` frontmatter is ignored when SKILL.md has CRLF line endings `bug` `has repro` `platform:windows` `area:skills`
- [#105837](https://github.com/anthropics/claude-code/issues/105837) [Bug] Input prompt box expands to 2 rows, causing screen flicker while typing `bug` `platform:windows` `area:tui`
- [#105836](https://github.com/anthropics/claude-code/issues/105836) exodo-cap `invalid` `github-integration`
- [#105835](https://github.com/anthropics/claude-code/issues/105835) The thread we have in project doesn't read repo's installed skills/plugins. Cou… `enhancement` `area:claude-code-web` `area:skills` `area:plugins`
- [#105834](https://github.com/anthropics/claude-code/issues/105834) [BUG] Desktop (Windows): a message sent while Claude is working should be delivered into the running turn, not queued or turned into an interrupt `duplicate` `platform:windows` `area:desktop`
- [#105833](https://github.com/anthropics/claude-code/issues/105833) [Bug] Cyber Safeguard False Positive on HIL Test Automation (HID/Screenshot) `bug` `duplicate` `platform:linux` `area:security`
- [#105831](https://github.com/anthropics/claude-code/issues/105831) [FEATURE] Bring back per-agent model, tokens and tool calls in the Desktop app workflow panel `bug` `platform:macos` `area:desktop` `area:agent-view`
- [#105832](https://github.com/anthropics/claude-code/issues/105832) [BUG] For "test -f", Bash tool does not respect blockReadsOutsideWorkingDirectories `bug` `platform:windows` `area:bash` `area:permissions`
- [#105830](https://github.com/anthropics/claude-code/issues/105830) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#105828](https://github.com/anthropics/claude-code/issues/105828) [BUG] VS Code extension hides the Effort control when the model setting is `opus[1m]` `bug` `has repro` `area:ide` `platform:vscode`
- [#105827](https://github.com/anthropics/claude-code/issues/105827) Filed by mistake `invalid`
- [#105824](https://github.com/anthropics/claude-code/issues/105824) [BUG] macOS: auto-updater deletes a running session's binary; the TCC denial then blocks ~/Downloads for the whole terminal despite Full Disk Access `bug` `has repro` `platform:macos` `area:packaging`
- [#105823](https://github.com/anthropics/claude-code/issues/105823) [BUG] Enter to confirm Japanese IME conversion submits the prompt (regression in 2.1.311) `bug` `has repro` `platform:macos` `area:tui`
- [#105822](https://github.com/anthropics/claude-code/issues/105822) If Claude voice (multi-channel) could be added to Claude projects htat would be… `invalid`
- [#105821](https://github.com/anthropics/claude-code/issues/105821) [Bug] Mythos 5.1 cyber safeguards falsely flag legitimate CTF XSS/CSP challenge work `bug` `duplicate` `platform:windows` `area:model`
- [#105820](https://github.com/anthropics/claude-code/issues/105820) [Bug] Cyber Classifier False Positive Blocks Hardware-in-the-Loop Test Prompts `bug` `platform:linux` `area:model`
- [#105819](https://github.com/anthropics/claude-code/issues/105819) [Desktop] `permissions.ask` rules are skipped in sessions spawned by another session (`start_session`) running in auto mode `bug` `has repro` `platform:macos` `area:security`
- [#105818](https://github.com/anthropics/claude-code/issues/105818) [BUG] "Yes, allow reading from <dir> from this project" is not persisted `bug` `has repro` `platform:macos` `area:permissions`
- [#105817](https://github.com/anthropics/claude-code/issues/105817) Side chat in desktop app Code tab can't attach images (and has no dictation button) `enhancement` `area:desktop`
- [#105816](https://github.com/anthropics/claude-code/issues/105816) bro, i really hate the previoew of the artifacts in the threads list, now it us… `enhancement` `area:claude-code-web` `platform:web` `area:ui`
- [#105814](https://github.com/anthropics/claude-code/issues/105814) [GitHub integration] Not Possible In Team Seat But Is Possible In Pro Seat `bug` `area:cowork` `platform:web` `github-integration`
- [#105815](https://github.com/anthropics/claude-code/issues/105815) [Bug] Camera calibration reasoning output degenerates unexpectedly `bug` `platform:linux` `area:model` `needs-repro`

#### 🔒 Closed Issues
- [#105827](https://github.com/anthropics/claude-code/issues/105827) Filed by mistake

### OpenAI Codex (`openai/codex`)

**Stars:** 131,455 · **Open issues:** 25,311 · **Last push:** <1h ago

On October 29, 2026, OpenAI Codex released three new alpha versions: rust-v0.166.0-alpha.6, rust-v0.166.0-alpha.5.1, and rust-v0.166.0-alpha.5, part of ongoing improvements to the Rust platform. Key merged features included enhancements to server-side output truncation for Code Mode sessions (#57870) and support for retrying transient environment startup failures (#57866). Additionally, significant work was done to improve user experience with the TUI, such as loading plugin mentions from installed plugins (#57855) and enhancing reconnect recovery processes (#57820). A notably concerning new issue raised was #57847, highlighting potential cybersecurity risks within the platform.

#### 🚀 New Releases
- [rust-v0.166.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.6) 0.166.0-alpha.6
- [rust-v0.166.0-alpha.5.1](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5.1) 0.166.0-alpha.5.1
- [rust-v0.166.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5) 0.166.0-alpha.5

#### ✅ Merged PRs
- [#57876](https://github.com/openai/codex/pull/57876) Reuse the cached runtime keymap for default configuration
- [#57870](https://github.com/openai/codex/pull/57870) Enable server-side output truncation for Code Mode sessions
- [#57866](https://github.com/openai/codex/pull/57866) Retry transient environment startup failures on the next turn
- [#57864](https://github.com/openai/codex/pull/57864) Allow upstream interruption when canceling Responses Lite turns
- [#57862](https://github.com/openai/codex/pull/57862) Keep resume picker pagination moving across backends
- [#57861](https://github.com/openai/codex/pull/57861) Skip resource template discovery for hosted Apps
- [#57859](https://github.com/openai/codex/pull/57859) Extend the provider OAuth sign-in timeout to ten minutes
- [#57857](https://github.com/openai/codex/pull/57857) Add Google Cloud Vertex AI setup to TUI onboarding
- [#57855](https://github.com/openai/codex/pull/57855) Load TUI plugin mentions from installed plugins
- [#57850](https://github.com/openai/codex/pull/57850) Wire bounded output collection into the code mode runtime
- [#57848](https://github.com/openai/codex/pull/57848) Add bounded Code Mode output collection and rendering
- [#57841](https://github.com/openai/codex/pull/57841) Add optional process metrics sampling for code-mode hosts
- [#57840](https://github.com/openai/codex/pull/57840) Validate thread providers before resume and input
- [#57839](https://github.com/openai/codex/pull/57839) Preserve reasoning token accounting across resume and fork
- [#57837](https://github.com/openai/codex/pull/57837) Ship the standalone executor in release packages
- [#57836](https://github.com/openai/codex/pull/57836) Declare the image generation result type in code mode
- [#57835](https://github.com/openai/codex/pull/57835) Limit concurrent image availability checks to eight
- [#57834](https://github.com/openai/codex/pull/57834) Add isolated Guardian assessments for prepared actions
- [#57832](https://github.com/openai/codex/pull/57832) Build V8 from source by default in Bazel
- [#57825](https://github.com/openai/codex/pull/57825) Update CI setup to use `meta/install-dotslash`
- [#57824](https://github.com/openai/codex/pull/57824) Include directly attached threads in diagnostic uploads
- [#57820](https://github.com/openai/codex/pull/57820) Improve TUI reconnect recovery and offline exit handling
- [#57819](https://github.com/openai/codex/pull/57819) Load up to eight plugins concurrently
- [#57818](https://github.com/openai/codex/pull/57818) Reduce unnecessary work in configuration processing
- [#57817](https://github.com/openai/codex/pull/57817) Detach realtime sideband observers without ending the session
- [#57800](https://github.com/openai/codex/pull/57800) Backfill exec completion items through paginated history
- [#57796](https://github.com/openai/codex/pull/57796) Extend GitHub release read retries and add jitter
- [#57790](https://github.com/openai/codex/pull/57790) Centralize synchronous Guardian prompt preparation
- [#57789](https://github.com/openai/codex/pull/57789) Refresh the model catalog once when Guardian's default reviewer is missing
- [#57788](https://github.com/openai/codex/pull/57788) Release app-server thread runtimes after shutdown
- [#57787](https://github.com/openai/codex/pull/57787) Fix app-server thread listener startup and shutdown races
- [#57783](https://github.com/openai/codex/pull/57783) Exclude unrelated network shares from MXC default reads
- [#57782](https://github.com/openai/codex/pull/57782) Restrict code-mode host replacement to session admission
- [#57774](https://github.com/openai/codex/pull/57774) Skip non-regular files when detecting pasted image paths
- [#57770](https://github.com/openai/codex/pull/57770) Respect model catalog origins when selecting Guardian reviewers
- [#57758](https://github.com/openai/codex/pull/57758) Include terminal launch commands in Guardian stdin reviews
- [#57757](https://github.com/openai/codex/pull/57757) Expose Guardian assessments in response streams
- [#57743](https://github.com/openai/codex/pull/57743) Move Guardian MCP elicitation helpers into the reviewer crate
- [#57742](https://github.com/openai/codex/pull/57742) Avoid recompiling Bazel integration tests for runtime fixture changes
- [#57741](https://github.com/openai/codex/pull/57741) Separate test-only Rust sources from Bazel library and binary inputs
- [#57729](https://github.com/openai/codex/pull/57729) Remove `free_guardian` configuration from Guardian tests
- [#57723](https://github.com/openai/codex/pull/57723) Disable optimization for the on-demand Bazel schema generator
- [#57720](https://github.com/openai/codex/pull/57720) Move `ReviewAction` into the Guardian reviewer crate
- [#57710](https://github.com/openai/codex/pull/57710) Preserve parent routing affinity for Guardian reviews
- [#57702](https://github.com/openai/codex/pull/57702) Move Guardian review evidence into the reviewer extension
- [#57698](https://github.com/openai/codex/pull/57698) Move Guardian context policy and prompts into the reviewer extension
- [#57697](https://github.com/openai/codex/pull/57697) Move Guardian review state into the reviewer extension
- [#57692](https://github.com/openai/codex/pull/57692) Wait for turn profiles before asserting sampling counts in trace tests
- [#57667](https://github.com/openai/codex/pull/57667) Remove detached delivery from `review/start`
- [#57658](https://github.com/openai/codex/pull/57658) Support managed OpenTelemetry metadata and PEM client identities

#### 🐛 New Issues
- [#57847](https://github.com/openai/codex/issues/57847) Cybersecurity risks `bug` `model-behavior` `CLI` `safety-check` 💬2
- [#57838](https://github.com/openai/codex/issues/57838) Security block `bug` `app` `safety-check` 💬2
- [#57879](https://github.com/openai/codex/issues/57879) [Windows 10][Desktop 26.1023.6621.0] Browser Use denies an explicitly allowed origin with a saved-permission error `bug` `windows-os` `app` `browser` 💬1
- [#57878](https://github.com/openai/codex/issues/57878) macOS: ~1.2 GB existing chat becomes unusable; history read fails even for one turn `bug` `app` `session` `performance` 💬1
- [#57877](https://github.com/openai/codex/issues/57877) Allow permanently dismissing the Daybreak hardware security key setup reminder `bug` `enhancement` `windows-os` `TUI` 💬1
- [#57875](https://github.com/openai/codex/issues/57875) [Windows Desktop] PDF preview stays stale after clicking refresh on an overwritten file `bug` `windows-os` `app` 💬1
- [#57873](https://github.com/openai/codex/issues/57873) Work stuck after losing connection during Google Drive upload `bug` `windows-os` `app` `connectivity` 💬1
- [#57882](https://github.com/openai/codex/issues/57882) Windows Computer Use: Illustrator CEP content is visible but clicks are rejected as a different target `bug` `windows-os` `app` `computer-use`
- [#57881](https://github.com/openai/codex/issues/57881) [macOS][Computer Use] SkyComputerUseService accessibility queries repeatedly crash Wireshark (Qt/libqcocoa EXC_BAD_ACCESS) `bug` `app` `computer-use`
- [#57880](https://github.com/openai/codex/issues/57880) Local Codex Inherits ChatGPT-Connected GitHub Authority Without Per-Device Consent `bug` `auth` `CLI` `skills`
- [#57874](https://github.com/openai/codex/issues/57874) Repeated HTTP 400 Bad Request in one development project across multiple conversations `bug` `windows-os` `app` `connectivity`
- [#57872](https://github.com/openai/codex/issues/57872) Feature request: visual office workspace for real projects, chats, and agent handoffs `enhancement` `app` `subagent` `app-server`

#### 🔒 Closed Issues
- [#57877](https://github.com/openai/codex/issues/57877) Allow permanently dismissing the Daybreak hardware security key setup reminder
- [#57875](https://github.com/openai/codex/issues/57875) [Windows Desktop] PDF preview stays stale after clicking refresh on an overwritten file

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,601 · **Open issues:** 779 · **Last push:** 6h ago

On October 29, 2026, there were no new releases for Gemini CLI. Notable merged pull requests included the addition of an extension validation command and evaluation tests (PR #29980), and vital fixes such as normalizing leading slashes in file search queries (PR #29987) and ensuring that the `isWithinRoot` function is case-insensitive on Windows (PR #29999). Additionally, a significant fix was made to handle surrogate pairs correctly when truncating in the UI (PR #29993). A new issue was reported regarding cancellation behavior during model tool responses, where prompts and completed tool rounds are erased (issue #30016).

#### ✅ Merged PRs
- [#29987](https://github.com/google-gemini/gemini-cli/pull/29987) fix(core): normalize leading slashes in file search query for @ autocomplete
- [#29998](https://github.com/google-gemini/gemini-cli/pull/29998) fix(core): list Auto in /model when dynamicModelConfiguration is enabled and preview access is disabled
- [#29994](https://github.com/google-gemini/gemini-cli/pull/29994) fix(vscode-ide-companion): register all extension disposables in context.subscriptions
- [#29980](https://github.com/google-gemini/gemini-cli/pull/29980) feat(cli): add extension validation command and evaluation tests
- [#29982](https://github.com/google-gemini/gemini-cli/pull/29982) fix(core): recognize dotted Gemini 3 models in supportsMultimodalFunctionResponse
- [#29999](https://github.com/google-gemini/gemini-cli/pull/29999) fix(core): make isWithinRoot case-insensitive on Windows
- [#29993](https://github.com/google-gemini/gemini-cli/pull/29993) fix(ui): handle surrogate pairs when truncating in sanitizeForDisplay
- [#29904](https://github.com/google-gemini/gemini-cli/pull/29904) fix(cli): bound inline history re-render after terminal width changes

#### 🐛 New Issues
- [#30016](https://github.com/google-gemini/gemini-cli/issues/30016) Cancelling while the model answers tool results erases the prompt and the completed tool rounds from history, unlike cancelling during a tool `status/need-triage` `area/agent` 💬1

#### 🔒 Closed Issues
- [#29461](https://github.com/google-gemini/gemini-cli/issues/29461) Sandboxed Gemini CLI loses login and session information since v0.60.0
- [#28808](https://github.com/google-gemini/gemini-cli/issues/28808) Apple Developer App - App Store

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,306 · **Open issues:** 2,187 · **Last push:** 1d ago

On October 29, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. However, several new issues were raised, notably issue #5280, which highlights a problem with incorrect identification of GitHub Enterprise setups. Other noteworthy issues include #5281, relating to environment variable inheritance in the Shell command runner, and #5275, which calls for support for default-deny tool permissions with an explicit allowlist in non-interactive mode. The day was characterized by routine maintenance yet showcased the ongoing dialogue regarding user experience improvements and functionality enhancements within the CLI ecosystem.

#### 🐛 New Issues
- [#5280](https://github.com/github/copilot-cli/issues/5280) /login incorrectly identifies *.ghe.com as "GitHub Enterprise Cloud" when it's actually "GitHub Enterprise Cloud with data residency" 💬1
- [#5281](https://github.com/github/copilot-cli/issues/5281) Shell command runner does not inherit environment variables from PowerShell `triage` 💬1
- [#5275](https://github.com/github/copilot-cli/issues/5275) Support default-deny tool permissions with explicit allowlist in non-interactive mode `triage` 💬1
- [#5283](https://github.com/github/copilot-cli/issues/5283) Remote environment hosting blocked by remote-control policy on personal Copilot Free account `triage`
- [#5282](https://github.com/github/copilot-cli/issues/5282) SDK: unbounded concurrency in listSessions() exhausts file descriptors with a large session-state `triage`
- [#5279](https://github.com/github/copilot-cli/issues/5279) [Feature request] Authoritative foreground-session change hook for terminal integrations, including warm resume `triage`
- [#5278](https://github.com/github/copilot-cli/issues/5278) Windows/Edge: native Computer Use state lacks verified URL and web accessibility tree (fail-closed) `triage`
- [#5277](https://github.com/github/copilot-cli/issues/5277) BYOK Azure Foundry: no quota warning and /compact cannot recover a long session `triage`
- [#5276](https://github.com/github/copilot-cli/issues/5276) Autopilot overrides skills that require user decisions (ask_user auto-replies "work autonomously") `triage`
- [#5274](https://github.com/github/copilot-cli/issues/5274) Visually differentiate the built-in commands from skills `triage`
- [#5273](https://github.com/github/copilot-cli/issues/5273) copy paste out of gitlab copilot is not possible or easy `triage`
- [#5272](https://github.com/github/copilot-cli/issues/5272) black-on-white theme `triage`
- [#5271](https://github.com/github/copilot-cli/issues/5271) WSL: clipboard write via clip.exe fails (quoted path in cmd /c), mouse selection copies nothing `area:input-keyboard` `area:platform-windows`

#### 🔒 Closed Issues
- [#20](https://github.com/github/copilot-cli/issues/20) Codebase indexing should be supported as it is in the Vscode extension
- [#4836](https://github.com/github/copilot-cli/issues/4836) Grok 4.5: 351 tools fail with HTTP 400 instead of reporting the 350-tool limit
- [#5280](https://github.com/github/copilot-cli/issues/5280) /login incorrectly identifies *.ghe.com as "GitHub Enterprise Cloud" when it's actually "GitHub Enterprise Cloud with data residency"
- [#4864](https://github.com/github/copilot-cli/issues/4864) OTel execute_tool bash span does not expose nonzero process exit outcome
- [#5233](https://github.com/github/copilot-cli/issues/5233) Remote MCP (OAuth): active session keeps resending an expired access token instead of refreshing or prompting sign-in
- [#5038](https://github.com/github/copilot-cli/issues/5038) grep tool silently ignores `n`, so models that drop the dash from `-n` get no line numbers

### OpenCode (`anomalyco/opencode`)

**Stars:** 222,775 · **Open issues:** 3,910 · **Last push:** <1h ago

On October 29, 2026, OpenCode released v1.19.5, addressing a bug where failed TUI worker requests now return an error instead of hanging, thanks to community contributor @Nowaker. The process-daemon was also updated to version 0.3.2, which includes opencode-pty version 0.3.2 published on npm. Notable merged PRs include the addition of the new image_generate tool (#59939) and a fix to prevent shell text from showing through the copy button (#59901). Additionally, a significant issue was reported regarding the ambiguous user input handling in the agent (#60060), which has drawn attention due to its problematic response behavior.

#### 🚀 New Releases
- [v1.19.5](https://github.com/anomalyco/opencode/releases/tag/v1.19.5) v1.19.5
- [process-daemon-v0.3.2](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.3.2) process-daemon v0.3.2

#### ✅ Merged PRs
- [#57627](https://github.com/anomalyco/opencode/pull/57627) fix(core): tell Code Mode models built-in tools stay top-level
- [#60071](https://github.com/anomalyco/opencode/pull/60071) chore: add Hona as GUI plugin SDK codeowner
- [#59939](https://github.com/anomalyco/opencode/pull/59939) feat(core): add image_generate tool
- [#59901](https://github.com/anomalyco/opencode/pull/59901) fix(session-ui): stop shell text showing through the copy button
- [#60057](https://github.com/anomalyco/opencode/pull/60057) fix(core): stop merging credential metadata into model settings
- [#60036](https://github.com/anomalyco/opencode/pull/60036) chore(deps): bump @ai-sdk/provider-utils to 4.0.62
- [#60037](https://github.com/anomalyco/opencode/pull/60037) chore(deps): bump katex to 0.18.11
- [#59437](https://github.com/anomalyco/opencode/pull/59437) feat(core): add /goal with a client-side done check
- [#60016](https://github.com/anomalyco/opencode/pull/60016) fix(theme): give migrated V1 dialogs an opaque background
- [#60047](https://github.com/anomalyco/opencode/pull/60047) fix(app): always list OpenCode free models in the model picker
- [#60045](https://github.com/anomalyco/opencode/pull/60045) fix(core): tell agents they can message running subagents
- [#60043](https://github.com/anomalyco/opencode/pull/60043) docs(console): note that Go Teams starts with Extra Usage on
- [#59072](https://github.com/anomalyco/opencode/pull/59072) refactor(client): group experimental SDK methods under client.experimental

#### 🐛 New Issues
- [#60051](https://github.com/anomalyco/opencode/issues/60051) Visibly selected Build/Plan mode or Reasoning level is not always what seems to be actually selected 💬2
- [#59889](https://github.com/anomalyco/opencode/issues/59889) project: empty git repo resolves to drive root C:/ on Windows, sessions show under C: root `pending close` `triaging` 💬2
- [#59811](https://github.com/anomalyco/opencode/issues/59811) agent: turn interrupted before large write executes; retries restart from scratch and file is never created `triaging` 💬2
- [#60060](https://github.com/anomalyco/opencode/issues/60060) agent: ambiguous user input answered with immense prose and long redesigns instead of clarifying questions or a quick web query 💬2
- [#60076](https://github.com/anomalyco/opencode/issues/60076) [Zen/Go] `iceman-contributor-free`: any turn following a tool result fails with 422 "Endpoint is unavailable" `pending close` `triaging` 💬1
- [#60075](https://github.com/anomalyco/opencode/issues/60075) [FEATURE]: add .mcp.json in support 💬1
- [#60069](https://github.com/anomalyco/opencode/issues/60069) desktop(browser): tabs are never released, 138 open after 1.5 days with 96 duplicates `triaging` 💬1
- [#60072](https://github.com/anomalyco/opencode/issues/60072) Let agents ask another session a question 💬1
- [#60068](https://github.com/anomalyco/opencode/issues/60068) worktree: worktree_create can pick a different clone of the same remote `pending close` `triaging` 💬1
- [#60065](https://github.com/anomalyco/opencode/issues/60065) ACP: `session/prompt` never returns after the disk fills up during a turn `reproduced` 💬1
- [#60064](https://github.com/anomalyco/opencode/issues/60064) The 24-hour limit doesn't disappear even on v2.2.0! `pending close` `triaging` 💬1
- [#60062](https://github.com/anomalyco/opencode/issues/60062) [Bug] Free messages reset timer incorrectly adds 24 hours (+1 day) `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#52049](https://github.com/anomalyco/opencode/issues/52049) cli(win): 45s event-stream idle watchdog restarts the managed service, aborting all sessions/subagents
- [#53623](https://github.com/anomalyco/opencode/issues/53623) "Code Mode" instructions are confusing Gemma-4-31B
- [#52234](https://github.com/anomalyco/opencode/issues/52234) service: hardcoded default port 49374 with no fallback and a silent hang when it's unavailable
- [#52300](https://github.com/anomalyco/opencode/issues/52300) plugins: local plugin directory ignores package.json main and is silently skipped without a root entrypoint
- [#46527](https://github.com/anomalyco/opencode/issues/46527) [FEATURE]: Expose opt-in 1M context variants for GPT-5.6 OAuth
- [#52270](https://github.com/anomalyco/opencode/issues/52270) POST /sync/history full-scans the entire event table on every call — O(table) reads per sync poll
- [#52025](https://github.com/anomalyco/opencode/issues/52025) cli: Windows curl upgrade cannot replace the running opencode.exe (locked by the TUI and background service)
- [#52216](https://github.com/anomalyco/opencode/issues/52216) [FEATURE]: Support --auto when starting ACP
- [#59786](https://github.com/anomalyco/opencode/issues/59786) Intermittent EPROTO TLS handshake / ECONNRESET on provider streaming calls - suspected stale keep-alive reuse after idle (Windows, togetherai)
- [#52334](https://github.com/anomalyco/opencode/issues/52334) Desktop native locale detection falls back to English for pa-PK when ICU expands it to the Aran script
- [#52077](https://github.com/anomalyco/opencode/issues/52077) tui: /sessions omits and can't search a session with old created but recent activity time
- [#52052](https://github.com/anomalyco/opencode/issues/52052) SDK part input IDs lose the prt prefix in generated TypeScript types
- [#52250](https://github.com/anomalyco/opencode/issues/52250) bun install fails on Windows: tree-sitter-powershell builds a native addon nothing imports
- [#52278](https://github.com/anomalyco/opencode/issues/52278) tui: long user messages draw their border outside the scroll viewport with transparent themes
- [#52272](https://github.com/anomalyco/opencode/issues/52272) permissions: managed macOS temp directory prompts for /var path alias
- [#52284](https://github.com/anomalyco/opencode/issues/52284) ACP: agents/permissions/default_agent from OPENCODE_CONFIG_CONTENT silently ignored across v2 (2.0.3-2.2.0); file-based agent registration regressed after 2.0.3
- [#52276](https://github.com/anomalyco/opencode/issues/52276) tool.execute.after is not triggered for user shell commands (`!`)
- [#52290](https://github.com/anomalyco/opencode/issues/52290) Instruction initialization blocked by unavailable sources: core/instructions
- [#59780](https://github.com/anomalyco/opencode/issues/59780) No permite cambiar el método de pago de suscripción OpenCode Go
- [#60069](https://github.com/anomalyco/opencode/issues/60069) desktop(browser): tabs are never released, 138 open after 1.5 days with 96 duplicates

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,778 · **Open issues:** 2,060 · **Last push:** <1h ago

On October 29, 2026, the Qwen Code repository saw the release of version v0.26.3, introducing features such as generated UI cards that maintain input states across navigation and split views, alongside enhancements for clients capable of rendering MCP Apps. Additionally, a nightly release (v0.26.3-nightly.20261028.ca204559a7) included fixes for configuration reporting and documentation updates regarding shared-session queues. Significant merged pull requests featured the addition of independent worktrees for main sessions and support for unscoped npm installations and updates. Among the new issues, #15760 stands out, focusing on the implementation of plan-execution delta detection as a hook, inspired by a third-party report.

#### 🚀 New Releases
- [v0.26.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.3) Release v0.26.3
- [v0.26.3-nightly.20261028.ca204559a7](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.3-nightly.20261028.ca204559a7) Release v0.26.3-nightly.20261028.ca204559a7
- [sdk-typescript-v0.1.25](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.25) SDK TypeScript Release v0.1.25
- [desktop-v0.26.3](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.3) Qwen Code Desktop v0.26.3

#### ✅ Merged PRs
- [#15745](https://github.com/QwenLM/qwen-code/pull/15745) feat(managed): add independent worktrees for main sessions
- [#15319](https://github.com/QwenLM/qwen-code/pull/15319) feat(web-shell): move no-workspace sessions beside workspaces
- [#15781](https://github.com/QwenLM/qwen-code/pull/15781) feat(extensions): support unscoped npm installation and updates

#### 🐛 New Issues
- [#15760](https://github.com/QwenLM/qwen-code/issues/15760) Plan-execution delta detection as a qwen-code hook (motivated by a third-party reasoning/tool-call divergence report) `priority/P3` `type/feature-request` `category/security` `roadmap/hooks-events` 💬6
- [#15759](https://github.com/QwenLM/qwen-code/issues/15759) ci: verify font baseline provisioning across hz1–hz6 after hz4 smoke gate failure `priority/P3` `type/bug` `category/development` `scope/ci-cd` 💬5
- [#15795](https://github.com/QwenLM/qwen-code/issues/15795) managed-agent: in a Harness pool, a fire on a Session the draining Harness has released can answer 404 and retire the automation for good `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#15783](https://github.com/QwenLM/qwen-code/issues/15783) ci: move remaining routine macOS/Darwin validation to overnight runs, including Managed Agent `priority/P3` `type/feature-request` `category/development` `scope/github-actions` 💬3
- [#15822](https://github.com/QwenLM/qwen-code/issues/15822) VS Code companion: writeCodingPlanConfig / writeModelProvidersConfig replace the whole settings.model object, wiping sibling keys (baseUrl, reasoningEffort, …) `priority/P2` `type/bug` `category/configuration` `scope/settings` 💬2
- [#15819](https://github.com/QwenLM/qwen-code/issues/15819) Deferred review findings from PR #15807: fix(cli): prevent provider menu overlap in short terminals `priority/P2` `type/bug` `category/ui` `scope/rendering` 💬2
- [#15820](https://github.com/QwenLM/qwen-code/issues/15820) full tier is red on main itself: ManagedAgentPackagingIT roster contradiction and a plain-JdbcTemplate VARBINARY ClassCastException, both introduced by #15718 `priority/P1` `type/bug` `category/development` `scope/testing` 💬2
- [#15793](https://github.com/QwenLM/qwen-code/issues/15793) Provider selection text overlaps in short terminals `priority/P2` `type/bug` `category/ui` `scope/cli` 💬2
- [#15805](https://github.com/QwenLM/qwen-code/issues/15805) test(managed-agent): unqualified JdbcTemplate injection points left over from #15718 cause spurious H2 BadSqlGrammarException (VARBINARY vs VARCHAR) `priority/P2` `type/bug` `category/development` `scope/testing` 💬2
- [#15799](https://github.com/QwenLM/qwen-code/issues/15799) Completed tool calls are reported as "not recorded … Treat as failure and retry" after an abrupt session end (terminal closed during parallel calls, SIGHUP) `priority/P1` `type/bug` `category/core` `scope/non-interactive` 💬2
- [#15800](https://github.com/QwenLM/qwen-code/issues/15800) Background shell status file stays "running" forever after an abrupt session end, although the command finished `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#15796](https://github.com/QwenLM/qwen-code/issues/15796) SDK stream-json: initialize replies before the extension store is ready; the first prompt waits or fails with "Extension store is busy" `priority/P2` `type/bug` `category/cli` `scope/non-interactive` 💬2
- [#15785](https://github.com/QwenLM/qwen-code/issues/15785) Extension whose qwen-extension.json has a UTF-8 BOM is silently skipped `priority/P2` `type/bug` `category/configuration` `scope/extensions` 💬2
- [#15755](https://github.com/QwenLM/qwen-code/issues/15755) Flaky: worktree prune test classifies a dangling admin link as stale in the full suite `priority/P2` `type/bug` `category/development` `scope/testing` 💬2
- [#15768](https://github.com/QwenLM/qwen-code/issues/15768) feat(managed-agent): resolve model credentials per Session at request time `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#15765](https://github.com/QwenLM/qwen-code/issues/15765) perf(managed-agent): batch external Workspace capability discovery `priority/P3` `status/blocked` `category/performance` `scope/session-management` 💬2
- [#15766](https://github.com/QwenLM/qwen-code/issues/15766) fix(managed-agent): bound external ownership predicate lock waits `priority/P1` `type/bug` `category/core` `scope/session-management` 💬2
- [#15750](https://github.com/QwenLM/qwen-code/issues/15750) test(managed-agent): Stage F residual fault-gate cells carried over from FG6-FG13 `priority/P3` `type/feature-request` `category/integration` `scope/testing` 💬2
- [#15788](https://github.com/QwenLM/qwen-code/issues/15788) Main CI failed: Qwen Code CI — src/utils/git-worktrees.test.ts > … > counts any link in the admin directory against the prune `status/needs-triage` `type/bug` 💬1
- [#15814](https://github.com/QwenLM/qwen-code/issues/15814) Main CI failed: E2E Tests — interactive/tui-foreground-shell.test.ts > cancels a focused shell through the global first-Ctrl+C guard befo… `status/needs-triage` `type/bug`
- [#15812](https://github.com/QwenLM/qwen-code/issues/15812) Main CI failed: Managed Agent gate — WorkspaceCsiSqlWorkerMySqlIT.sqlGrantExecutesOriginalWorkerAndContinuesWithRetainedHistory `status/needs-triage` `type/bug`
- [#15811](https://github.com/QwenLM/qwen-code/issues/15811) Main CI failed: Managed Agent gate — ManagedSessionLifecycleTest.aFailedRenameLogsAndChainsTheRootCause (+1 more) `status/needs-triage` `type/bug`
- [#15804](https://github.com/QwenLM/qwen-code/issues/15804) VSCode IDE Companion Release Failed for 0.26.3 on 2026-10-28
- [#15752](https://github.com/QwenLM/qwen-code/issues/15752) bug(permissions): a malformed deny/ask rule is dropped with only a debug log, so the control silently does not exist (fail-open) `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#14054](https://github.com/QwenLM/qwen-code/issues/14054) test(managed-agent): Stage F fault gates FG8-FG10 for the capabilities enabled since FG7
- [#15593](https://github.com/QwenLM/qwen-code/issues/15593) test: two further flips from the 2026-10-25 loaded-host run (tool-turn checkpoint wait, cronScheduler gate clock)
- [#15759](https://github.com/QwenLM/qwen-code/issues/15759) ci: verify font baseline provisioning across hz1–hz6 after hz4 smoke gate failure
- [#12872](https://github.com/QwenLM/qwen-code/issues/12872) test(managed-agent): Stage F fault gates FG6 for the Hosted tool turn
- [#15309](https://github.com/QwenLM/qwen-code/issues/15309) Web Shell: clarify the name and peer placement of sessions without a workspace
- [#15737](https://github.com/QwenLM/qwen-code/issues/15737) Main CI failed: Qwen Code CI — src/commands/review/cleanup.test.ts > … > keeps the run alive when the post-kill UNLINK fails
- [#15549](https://github.com/QwenLM/qwen-code/issues/15549) Web Shell: move Archived out of the persistent sidebar — three interaction options
- [#15755](https://github.com/QwenLM/qwen-code/issues/15755) Flaky: worktree prune test classifies a dangling admin link as stale in the full suite
- [#15788](https://github.com/QwenLM/qwen-code/issues/15788) Main CI failed: Qwen Code CI — src/utils/git-worktrees.test.ts > … > counts any link in the admin directory against the prune
- [#15752](https://github.com/QwenLM/qwen-code/issues/15752) bug(permissions): a malformed deny/ask rule is dropped with only a debug log, so the control silently does not exist (fail-open)

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

**Stars:** 393,298 · **Open issues:** 7,760 · **Last push:** <1h ago

There were no releases in the last 24 hours for OpenClaw. Key developments included the merging of several important pull requests, such as fixes to restore the Files catalog post-preview retirement (#187121) and improvements to the New Session tooltip to prevent it from blocking sidebar controls (#187096). Notably, the performance was enhanced by a fix that stops CLI-backed replies from stalling while the model is still processing (#186446). The most pressing new issue reported is a bug where the managed update from version 2026.10.4 to 10.8 takes 33 minutes to activate but fails to stop the Gateway due to an offline-maintenance state (#186754).

#### ✅ Merged PRs
- [#187121](https://github.com/openclaw/openclaw/pull/187121) fix: restore Files catalog after preview retirement
- [#187096](https://github.com/openclaw/openclaw/pull/187096) fix: keep New Session tooltip from blocking sidebar controls
- [#187138](https://github.com/openclaw/openclaw/pull/187138) improve(ios): narrow release source checkout
- [#187144](https://github.com/openclaw/openclaw/pull/187144) fix: restore lint compliance in sessions-send admission tests
- [#187162](https://github.com/openclaw/openclaw/pull/187162) chore: restore measured test-code headroom
- [#187147](https://github.com/openclaw/openclaw/pull/187147) fix(ios): qualify keyboard layout with completed tool work
- [#184660](https://github.com/openclaw/openclaw/pull/184660) chore(deps): remove expired tsrs release-age exceptions
- [#186446](https://github.com/openclaw/openclaw/pull/186446) fix(agents): don't stop CLI-backed replies as stalled while the model is still thinking
- [#186485](https://github.com/openclaw/openclaw/pull/186485) fix(pr): unblock attributed artifact-build failures after primary CI passes
- [#186971](https://github.com/openclaw/openclaw/pull/186971) fix(update): stop a newer CLI from migrating state the Gateway service still runs
- [#186821](https://github.com/openclaw/openclaw/pull/186821) fix(pr): avoid piped-input stalls during baseline preparation
- [#186823](https://github.com/openclaw/openclaw/pull/186823) fix(perf): release Code Mode probe resources after failures
- [#187148](https://github.com/openclaw/openclaw/pull/187148) fix: accented names disappear from channel searches
- [#186956](https://github.com/openclaw/openclaw/pull/186956) fix: preserve literal spaces in Markdown document previews
- [#187098](https://github.com/openclaw/openclaw/pull/187098) fix(workboard): reject unsupported card metadata keys
- [#187146](https://github.com/openclaw/openclaw/pull/187146) refactor(memory-wiki): share guarded page test inputs
- [#187142](https://github.com/openclaw/openclaw/pull/187142) fix: recognize Reef measurement in unused-file checks
- [#186512](https://github.com/openclaw/openclaw/pull/186512) perf(control-ui): restore complete cached transcript rows
- [#187134](https://github.com/openclaw/openclaw/pull/187134) fix: repair shutdown CI regressions after restart redesign
- [#187036](https://github.com/openclaw/openclaw/pull/187036) fix(ui): match canonical NFC/NFD names in chat workspace search
- [#186986](https://github.com/openclaw/openclaw/pull/186986) fix(knowledge): shorten claim titles without splitting surrogate pairs
- [#187024](https://github.com/openclaw/openclaw/pull/187024) fix(cron): match canonically equivalent Unicode text in run search
- [#186794](https://github.com/openclaw/openclaw/pull/186794) fix(cron): normalize NFC in automation list search
- [#186642](https://github.com/openclaw/openclaw/pull/186642) fix: workspace Markdown evidence links open missing conversations
- [#186901](https://github.com/openclaw/openclaw/pull/186901) fix(plugins): keep scoped scaffold package names valid
- [#186886](https://github.com/openclaw/openclaw/pull/186886) fix(gateway): stop suspension retries when interrupted
- [#186905](https://github.com/openclaw/openclaw/pull/186905) fix(voice-call): stop continue polling when interrupted
- [#186906](https://github.com/openclaw/openclaw/pull/186906) fix(docs): cancel searches when interrupted
- [#186909](https://github.com/openclaw/openclaw/pull/186909) fix(wiki): preserve serialized ChatGPT transcript formatting
- [#187120](https://github.com/openclaw/openclaw/pull/187120) fix(cron): wait for rejected failure alert fallback in routing tests
- [#187106](https://github.com/openclaw/openclaw/pull/187106) fix: keep agent settings focused during identity refresh
- [#186856](https://github.com/openclaw/openclaw/pull/186856) fix: keep spawned helpers in the Draft audience
- [#185273](https://github.com/openclaw/openclaw/pull/185273) fix: goals fail to resume after stopping a run
- [#187065](https://github.com/openclaw/openclaw/pull/187065) fix(agents): keep top-level Slack requests' sessions_send completions top-level
- [#187130](https://github.com/openclaw/openclaw/pull/187130) chore(ui): refresh control ui locales
- [#187101](https://github.com/openclaw/openclaw/pull/187101) fix: unblock manual channel starts in minimal Gateways
- [#187126](https://github.com/openclaw/openclaw/pull/187126) revert: system-started turn principal authority (#187105)
- [#187110](https://github.com/openclaw/openclaw/pull/187110) fix(ui): plugin install says outcome unknown during an OpenClaw upgrade
- [#187105](https://github.com/openclaw/openclaw/pull/187105) fix: allow session tools in system continuations
- [#185730](https://github.com/openclaw/openclaw/pull/185730) refactor: resume running sessions after graceful restarts
- [#187046](https://github.com/openclaw/openclaw/pull/187046) perf(sessions): reuse archive carriers during maintenance
- [#187039](https://github.com/openclaw/openclaw/pull/187039) perf(plugins): omit delivery snapshots from Reef peer reads
- [#187111](https://github.com/openclaw/openclaw/pull/187111) perf(gateway): release obsolete catalog planning rosters
- [#187097](https://github.com/openclaw/openclaw/pull/187097) fix: restore sidebar rail alignment checks for fresh preferences
- [#186643](https://github.com/openclaw/openclaw/pull/186643) fix: restore extended-stable workflow pin tests
- [#187093](https://github.com/openclaw/openclaw/pull/187093) perf(state): skip redundant maintenance after acknowledged activity
- [#187094](https://github.com/openclaw/openclaw/pull/187094) improve: shorten Android store and internal release builds
- [#187089](https://github.com/openclaw/openclaw/pull/187089) refactor(sessions): share transcript target fixtures
- [#187102](https://github.com/openclaw/openclaw/pull/187102) chore(ui): refresh control ui locales
- [#187086](https://github.com/openclaw/openclaw/pull/187086) fix: keep agent close checkpoint publication internal
- [#187083](https://github.com/openclaw/openclaw/pull/187083) fix: queued messages stay pending after a Gateway crash
- [#187092](https://github.com/openclaw/openclaw/pull/187092) perf(gateway): skip unused skill discovery for draft titles
- [#186360](https://github.com/openclaw/openclaw/pull/186360) fix(ui): recognize annotated yield handoff receipts
- [#187084](https://github.com/openclaw/openclaw/pull/187084) fix: keep Doctor backup predicate private
- [#187090](https://github.com/openclaw/openclaw/pull/187090) fix: finish process-owned shutdown within its cleanup deadline
- [#187081](https://github.com/openclaw/openclaw/pull/187081) perf(gateway): reuse sidebar row UTF-8 sizes
- [#185309](https://github.com/openclaw/openclaw/pull/185309) fix: Windows installer setup does not start after the npm shim is installed
- [#187085](https://github.com/openclaw/openclaw/pull/187085) chore(ui): refresh control ui locales
- [#187072](https://github.com/openclaw/openclaw/pull/187072) fix(ui): prevent session owner avatar flicker on refresh
- [#187076](https://github.com/openclaw/openclaw/pull/187076) perf(workspace): trim redundant writer request payloads
- [#187074](https://github.com/openclaw/openclaw/pull/187074) perf(agents): reuse saved Code Mode JSON for worker replies
- [#187064](https://github.com/openclaw/openclaw/pull/187064) fix(update): treat PostgreSQL anchors as anchors through update Doctor, Gateway startup and repair
- [#187070](https://github.com/openclaw/openclaw/pull/187070) fix: restore sidebar alignment browser coverage
- [#187066](https://github.com/openclaw/openclaw/pull/187066) refactor(sessions): share retired-owner test setup
- [#187068](https://github.com/openclaw/openclaw/pull/187068) fix: keep goal placement resolver private
- [#187060](https://github.com/openclaw/openclaw/pull/187060) fix: Shift-selection skips pinned sessions across sections
- [#186564](https://github.com/openclaw/openclaw/pull/186564) fix(gateway): reject stale exact-run cancellation after session replacement
- [#187038](https://github.com/openclaw/openclaw/pull/187038) perf(gateway): trim placement retirement inventory replies
- [#187052](https://github.com/openclaw/openclaw/pull/187052) perf(agents): defer unused tool-schema canonical fingerprints
- [#185796](https://github.com/openclaw/openclaw/pull/185796) fix(agents): channel owner's subagent keeps native runtime access after the owner is removed
- [#187055](https://github.com/openclaw/openclaw/pull/187055) fix(knowledge): loading status no longer adds dividers or shifts views
- [#186938](https://github.com/openclaw/openclaw/pull/186938) fix: keep Draft selection when creation is disabled
- [#187057](https://github.com/openclaw/openclaw/pull/187057) perf(cron): skip redundant completion maintenance and publication scans
- [#187053](https://github.com/openclaw/openclaw/pull/187053) fix: keep workspace file-size error prefix private
- [#187059](https://github.com/openclaw/openclaw/pull/187059) chore(ui): refresh control ui locales
- [#187051](https://github.com/openclaw/openclaw/pull/187051) fix: Knowledge row type fails the unused-export check
- [#186670](https://github.com/openclaw/openclaw/pull/186670) fix: guide recovery for unsupported generated attachments
- [#186632](https://github.com/openclaw/openclaw/pull/186632) fix: follow destination changes for published PRs
- [#187030](https://github.com/openclaw/openclaw/pull/187030) chore: provide measured test-line headroom
- [#187040](https://github.com/openclaw/openclaw/pull/187040) test(perf): add real-Gateway flaky network proof for Control UI recovery
- [#187015](https://github.com/openclaw/openclaw/pull/187015) feat(control-ui): show where to edit read-only Gateway configuration
- [#187026](https://github.com/openclaw/openclaw/pull/187026) refactor(cron): reuse canonical lane wait state
- [#186941](https://github.com/openclaw/openclaw/pull/186941) fix: unblock scripts lint for cache lock deadlines
- [#187034](https://github.com/openclaw/openclaw/pull/187034) fix: recognize live PR cache imports in export checks
- [#187020](https://github.com/openclaw/openclaw/pull/187020) fix(update): give platform-correct stop guidance and do not block when the Gateway is verifiably stopped
- [#186993](https://github.com/openclaw/openclaw/pull/186993) perf(knowledge): Knowledge page header jumps and flickers on first load
- [#186994](https://github.com/openclaw/openclaw/pull/186994) fix(ui): plugin pages remount when they change their own params
- [#187001](https://github.com/openclaw/openclaw/pull/187001) perf(anthropic): avoid rescanning unchanged inline images
- [#167730](https://github.com/openclaw/openclaw/pull/167730) fix(ios): session drawer downloads the full session list on every session event
- [#187003](https://github.com/openclaw/openclaw/pull/187003) fix: settle idle imports before counting chat renders
- [#187019](https://github.com/openclaw/openclaw/pull/187019) refactor(infra): reuse Git diff diagnostic test collection
- [#187027](https://github.com/openclaw/openclaw/pull/187027) fix: recognize documented measurement commands in unused-file scans
- [#184508](https://github.com/openclaw/openclaw/pull/184508) fix(projects): filter session summaries by membership
- [#171753](https://github.com/openclaw/openclaw/pull/171753) fix: dashboard reports success when link preparation fails
- [#187002](https://github.com/openclaw/openclaw/pull/187002) perf(github): avoid full-tree buffering for publication filters
- [#187022](https://github.com/openclaw/openclaw/pull/187022) chore(ui): refresh control ui locales
- [#186857](https://github.com/openclaw/openclaw/pull/186857) fix(gateway): prevent health-monitor channel starts before startup is ready
- [#186959](https://github.com/openclaw/openclaw/pull/186959) fix(knowledge): scribes show "needs reauthorization" after a rename and Repair leaves them off
- [#187007](https://github.com/openclaw/openclaw/pull/187007) refactor: share managed restore test setup
- [#186229](https://github.com/openclaw/openclaw/pull/186229) improve(ui): personal sidebar sections with a two-step editor
- [#187008](https://github.com/openclaw/openclaw/pull/187008) fix: keep comment previews clear of their trigger
- [#187005](https://github.com/openclaw/openclaw/pull/187005) perf(infra): skip start-time probes for dead lock owners
- [#185750](https://github.com/openclaw/openclaw/pull/185750) fix(cron): preserve pinned continuations
- [#186983](https://github.com/openclaw/openclaw/pull/186983) fix: YAML path insertions create duplicate boolean and null keys
- [#180208](https://github.com/openclaw/openclaw/pull/180208) fix(goals): continue local Codex sessions
- [#186998](https://github.com/openclaw/openclaw/pull/186998) fix(doctor): skip config audit recovery when its sanitized companion is gone and nothing remains to import
- [#186944](https://github.com/openclaw/openclaw/pull/186944) fix(ui): hide Dismiss all when no retired messages are shown
- [#186980](https://github.com/openclaw/openclaw/pull/186980) fix: stop overestimating update space for large agent databases
- [#186557](https://github.com/openclaw/openclaw/pull/186557) fix: repair remounted updates with copied launchers
- [#178496](https://github.com/openclaw/openclaw/pull/178496) fix(memory-core): filter German pronoun "ich" from concept themes
- [#186964](https://github.com/openclaw/openclaw/pull/186964) fix(models): show standalone CLI providers
- [#186991](https://github.com/openclaw/openclaw/pull/186991) refactor(agents): share session-boundary pairing fixtures
- [#186937](https://github.com/openclaw/openclaw/pull/186937) fix(agents): Slack per-user DM history limit is ignored when keyed by the user ID
- [#185660](https://github.com/openclaw/openclaw/pull/185660) fix(cli): config unset cannot remove an agent when no Gateway is running
- [#186982](https://github.com/openclaw/openclaw/pull/186982) fix: align setup coverage with independent runtime defaults
- [#186031](https://github.com/openclaw/openclaw/pull/186031) fix(doctor): schema upgrades back up every database twice
- [#184506](https://github.com/openclaw/openclaw/pull/184506) fix(gateway): scope session resources to current membership
- [#186972](https://github.com/openclaw/openclaw/pull/186972) fix(update): admit PostgreSQL agent families instead of inspecting their SQLite anchors
- [#186872](https://github.com/openclaw/openclaw/pull/186872) perf(ai): reuse frozen Anthropic HTTP request bytes
- [#186899](https://github.com/openclaw/openclaw/pull/186899) fix: preserve agent creation drafts during avatar selection
- [#186880](https://github.com/openclaw/openclaw/pull/186880) perf(doctor): parse session migration manifests once per run
- [#184900](https://github.com/openclaw/openclaw/pull/184900) docs: add a complete split-storage setup example
- [#186969](https://github.com/openclaw/openclaw/pull/186969) refactor(qa): share redaction rejection fixtures
- [#186858](https://github.com/openclaw/openclaw/pull/186858) fix(agents): prevent uppercase session IDs from self-queuing
- [#186950](https://github.com/openclaw/openclaw/pull/186950) perf(codex): reuse catalog decoders across idle refreshes
- [#186943](https://github.com/openclaw/openclaw/pull/186943) improve(android): shorten release history retrieval
- [#186939](https://github.com/openclaw/openclaw/pull/186939) perf(gateway): share ancestor row preparation across recipients
- [#186948](https://github.com/openclaw/openclaw/pull/186948) fix: align profile dispatch CI with role grants
- [#186904](https://github.com/openclaw/openclaw/pull/186904) fix: keep native schema tests aligned with supported versions
- [#186933](https://github.com/openclaw/openclaw/pull/186933) fix: check every recovery state in narrow chat
- [#186952](https://github.com/openclaw/openclaw/pull/186952) refactor(gateway): share AWS profile config test fixtures
- [#186840](https://github.com/openclaw/openclaw/pull/186840) perf(gateway): reuse encoded sidebar row prefixes across pages
- [#186920](https://github.com/openclaw/openclaw/pull/186920) fix(gateway): survive transient database locks during sidecar startup
- [#184302](https://github.com/openclaw/openclaw/pull/184302) fix: refresh mobile Fastlane certificate roots
- [#186919](https://github.com/openclaw/openclaw/pull/186919) fix: keep narrow subagent reports inside the panel
- [#186934](https://github.com/openclaw/openclaw/pull/186934) refactor(memory): share promotion budget recall fixture
- [#186903](https://github.com/openclaw/openclaw/pull/186903) fix(cli): retain why interrupted commands stopped
- [#184950](https://github.com/openclaw/openclaw/pull/184950) fix(config): warn when backup rotation fails
- [#186648](https://github.com/openclaw/openclaw/pull/186648) fix(doctor): converge plugin data upgrades without stopping a sealed system service
- [#186935](https://github.com/openclaw/openclaw/pull/186935) perf(agents): avoid copying decoded tool-result arrays while freezing
- [#186243](https://github.com/openclaw/openclaw/pull/186243) fix(tlon): require request IDs for approval replies
- [#186931](https://github.com/openclaw/openclaw/pull/186931) perf(agents): stream complete tool outcome digests
- [#186932](https://github.com/openclaw/openclaw/pull/186932) fix(gateway): align queue-expiry test with monotonic deadlines
- [#186926](https://github.com/openclaw/openclaw/pull/186926) fix(doctor): lint the heartbeat files that block repair and update admission
- [#186923](https://github.com/openclaw/openclaw/pull/186923) fix(agents): align patch containment diagnostics with explicit policy
- [#186820](https://github.com/openclaw/openclaw/pull/186820) fix: preserve Draft audience when forking from a message
- [#186922](https://github.com/openclaw/openclaw/pull/186922) fix(tui): match canonically equivalent Unicode names
- [#186929](https://github.com/openclaw/openclaw/pull/186929) perf(update): defer native inspections until gateway readiness
- [#186806](https://github.com/openclaw/openclaw/pull/186806) fix: distinguish owned processes in native Windows task tests
- [#186930](https://github.com/openclaw/openclaw/pull/186930) perf(gateway): reuse budgeted JSON when encoding chat history
- [#186860](https://github.com/openclaw/openclaw/pull/186860) fix(native): retain messages refused during agent startup
- [#186547](https://github.com/openclaw/openclaw/pull/186547) fix: restart notices missing from conversation history
- [#186911](https://github.com/openclaw/openclaw/pull/186911) refactor(nextcloud-talk): share media diagnostic context
- [#186868](https://github.com/openclaw/openclaw/pull/186868) fix: avoid cold compilation timing out Windows lifecycle proof
- [#186750](https://github.com/openclaw/openclaw/pull/186750) fix(cron): stop waiting for run completion when interrupted
- [#186828](https://github.com/openclaw/openclaw/pull/186828) fix: preserve Draft when copying conversations
- [#186894](https://github.com/openclaw/openclaw/pull/186894) fix: unblock the mobile link-preview browser test
- [#186819](https://github.com/openclaw/openclaw/pull/186819) fix: recover accepted guest files after missing baseline metadata
- [#186900](https://github.com/openclaw/openclaw/pull/186900) perf(gateway): reuse full session row encoding across event recipients
- [#186810](https://github.com/openclaw/openclaw/pull/186810) fix(ui): keep startup-refused messages queued past the request deadline
- [#186780](https://github.com/openclaw/openclaw/pull/186780) test(doctor): restore fast e2e Doctor runs on Bun
- [#186567](https://github.com/openclaw/openclaw/pull/186567) fix(doctor): recover upgrades with unfinished shared-state columns
- [#186747](https://github.com/openclaw/openclaw/pull/186747) fix(qa): read evidence reports from source checkouts
- [#186865](https://github.com/openclaw/openclaw/pull/186865) docs(tools): use registered MCP tool names in the Tool Search examples
- [#185964](https://github.com/openclaw/openclaw/pull/185964) fix(scripts): preserve PR tooling across process handoffs
- [#186878](https://github.com/openclaw/openclaw/pull/186878) refactor(tests): share Doctor peer-link fixture
- [#186717](https://github.com/openclaw/openclaw/pull/186717) fix: recover interrupted updates after the original PR closes
- [#186853](https://github.com/openclaw/openclaw/pull/186853) fix(agents): allow bounded recovery after repeated identical tool errors
- [#186871](https://github.com/openclaw/openclaw/pull/186871) fix(update): finish updates when native process ancestry is unavailable
- [#186534](https://github.com/openclaw/openclaw/pull/186534) fix(team-reports): keep the deferred tick retry on the elapsed clock
- [#186876](https://github.com/openclaw/openclaw/pull/186876) fix(codex): unbindable command approvals are declined with no log or reason
- [#156508](https://github.com/openclaw/openclaw/pull/156508) improve(a2a): verify notification dispatch completion

#### 🐛 New Issues
- [#186754](https://github.com/openclaw/openclaw/issues/186754) [Bug]: 2026.10.4→10.8 managed update spends 33 min activating, then cannot stop Gateway due to offline-maintenance state `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬5
- [#186732](https://github.com/openclaw/openclaw/issues/186732) [Bug]: bug(debian-package): Installation fails on Debian due to strict GStreamer package naming mismatch `bug` `bug:behavior` `P2` `clawsweeper:needs-info` 💬5
- [#186973](https://github.com/openclaw/openclaw/issues/186973) [Bug]: Chat /clear state check keeps rendering a stale update-history banner (weeks-old run, retired codex warning) across gateway restart and full reboot; CLI doctor renders correctly `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#186825](https://github.com/openclaw/openclaw/issues/186825) [Bug]: Orphaned (unconfigured) agent dir blocks Gateway startup with 'Legacy session store requires migration'; doctor --fix cannot repair it `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#187145](https://github.com/openclaw/openclaw/issues/187145) [Bug]: macOS 2026.10.8 Doctor keeps Gateway offline for 53+ minutes with no progress after successful update repair `P1` `impact:crash-loop` `maturity:stable` 💬3
- [#186813](https://github.com/openclaw/openclaw/issues/186813) bug: In-chat managed update (`gateway.update.run`) hangs indefinitely in `epoll_wait` on SQLite transaction lock contention without timeout `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬3
- [#187021](https://github.com/openclaw/openclaw/issues/187021) Update failure: gateway-recovery-verification (2026.10.5) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#186995](https://github.com/openclaw/openclaw/issues/186995) Update failure: gateway-stop-unverified (2026.10.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬3
- [#186961](https://github.com/openclaw/openclaw/issues/186961) [Bug]: update admission on PostgreSQL families inspects the agents' SQLite anchors and refuses with "Agent database migration requires stopped-writer maintenance" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬3
- [#186612](https://github.com/openclaw/openclaw/issues/186612) Codex plugin "data/settings upgrade is unfinished" never applies and survives cold boot at version parity (2026.10.8, npm install, system-unit gateway); doctor --fix converges-without-writing and defers model retirement repair `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#186817](https://github.com/openclaw/openclaw/issues/186817) `openclaw update` rolls back schema-migration upgrades on hosts with glibc < 2.33 (proc-safe native identity unavailable) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#187171](https://github.com/openclaw/openclaw/issues/187171) Gateway: reserved readiness endpoints (/ready /readyz /startup) are unqueryable during the entire boot window — external watchers cannot distinguish starting from dead `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#187166](https://github.com/openclaw/openclaw/issues/187166) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬2
- [#186898](https://github.com/openclaw/openclaw/issues/186898) Version skew: `npm install -g` can target a different Node prefix than the running gateway, then migrate agent DBs past the running build `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#187149](https://github.com/openclaw/openclaw/issues/187149) [Feature]: PlanetScale Neki native agent storage via a pre-boot PostgreSQL lifecycle extension `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#186753](https://github.com/openclaw/openclaw/issues/186753) Bedrock tool-returned images fail on GPT-6/6.1 Sol and Kimi K3; workaround only covers GPT-5.6 Sol `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#187122](https://github.com/openclaw/openclaw/issues/187122) doctor: exits rc=0 without performing migrations (non-interactive invocation; invalid config) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#187099](https://github.com/openclaw/openclaw/issues/187099) [Bug]: queued reply never reclaimed on a recovery-rollover lane — diagnostic declines with keep_lane/active_reply_work, dashboard main session unusable (2026.10.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#187006](https://github.com/openclaw/openclaw/issues/187006) [Bug]: on PostgreSQL families the update's Doctor aborts on the state anchor ("migration source changed after update capture"), the new gateway refuses the agent anchors, and update repair refuses ("schema role missing") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬2
- [#187028](https://github.com/openclaw/openclaw/issues/187028) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#187041](https://github.com/openclaw/openclaw/issues/187041) Running the `openclaw` CLI inside the gateway container stalls the gateway main thread (about 160 s per invocation on a 4 vCPU host) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:linked-pr-open` 💬2
- [#187033](https://github.com/openclaw/openclaw/issues/187033) [Bug]: idle conversation render test counts startup work before the event `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#186981](https://github.com/openclaw/openclaw/issues/186981) memory-core-index stop exceeds the fixed 5 s plugin replacement deadline while an index sync is running; reloads fail for minutes after any replacement `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#187014](https://github.com/openclaw/openclaw/issues/187014) [Feature]: MiniMax M3.1 Flash native server-side web search on Anthropic Messages `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#186974](https://github.com/openclaw/openclaw/issues/186974) [Bug]: Legacy config-audit recovery refuses permanently when a raw-archive checkpoint exists but its sanitized companion is missing (blocks update finalization and later migrations) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#186875](https://github.com/openclaw/openclaw/issues/186875) startGatewaySidecars treats a transient database lock as fatal - Gateway startup fails and requires a manual restart, with no retry path `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#186862](https://github.com/openclaw/openclaw/issues/186862) [Bug]: `doctor --lint` misses a HEARTBEAT.md that blocks `doctor --fix` and updates while heartbeat settings remain `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#186907](https://github.com/openclaw/openclaw/issues/186907) Link-preview E2E hovers a covered link before dismissing its preview `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#186824](https://github.com/openclaw/openclaw/issues/186824) [Bug]: doctor --fix still reparses every migration manifest per source on 2026.10.8 (rebuildDeferredPluginSessionSourceIndex path; follow-up to #172809) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#186814](https://github.com/openclaw/openclaw/issues/186814) [Bug]: Debian npm update probes absent pacman five times and repeats ENOENT warning `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#186553](https://github.com/openclaw/openclaw/issues/186553) feat: allow role-granted cloud dispatch without administrator access `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#186684](https://github.com/openclaw/openclaw/issues/186684) claude-cli: tool-list change invalidates the native session and history reseed is refused (auth-unknown) - agent restarts with no history `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬2
- [#186799](https://github.com/openclaw/openclaw/issues/186799) Update failure: [redacted-command] (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#186752](https://github.com/openclaw/openclaw/issues/186752) Windows: fs-safe watchers rooted at user home (config + ~/.agents/skills fallback) saturate gateway main thread `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#186777](https://github.com/openclaw/openclaw/issues/186777) [Bug]: Standalone MCP Apps lose plugin ownership during session tool-policy checks `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#186775](https://github.com/openclaw/openclaw/issues/186775) [Bug]: Model-created MCP Apps drop toolMeta during session policy checks, rejecting allowed plugin tools `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#186767](https://github.com/openclaw/openclaw/issues/186767) [Bug]: Control UI automatic build fails when a packaged plugin UI generation is missing `P3` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` 💬2
- [#186700](https://github.com/openclaw/openclaw/issues/186700) Plugin inbound-message hooks never fire (outbound/tool hooks do) `P2` `impact:ux-friction` 💬2
- [#186726](https://github.com/openclaw/openclaw/issues/186726) Feature: escape single quotes in generated PowerShell completion path labels `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#187107](https://github.com/openclaw/openclaw/issues/187107) [Bug]: Files stays blank after preview retirement during task navigation `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#187088](https://github.com/openclaw/openclaw/issues/187088) [Bug]: New Session shortcut tooltip blocks adjacent sidebar header controls `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187172](https://github.com/openclaw/openclaw/issues/187172) [Bug]: Control UI memory search uses legacy RPC for provider-runtime engines `clawsweeper:intake:bug` 💬1
- [#187119](https://github.com/openclaw/openclaw/issues/187119) CI mock-export ratchet rejects Gateway lifecycle fixtures `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187163](https://github.com/openclaw/openclaw/issues/187163) [Feature]: independent reviewed test-line allocations `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#187155](https://github.com/openclaw/openclaw/issues/187155) [Bug]: update on PostgreSQL families reports original-state capture unavailable, "writer is unknown" and an unsealed capture after a successful update; SQLite on the same build seals it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#187153](https://github.com/openclaw/openclaw/issues/187153) [Bug]: Interrupting dashboard leaves Control UI document readiness running `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187154](https://github.com/openclaw/openclaw/issues/187154) [Bug]: Resume keeps its pre-TUI Gateway connection alive after interruption `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187151](https://github.com/openclaw/openclaw/issues/187151) [Bug]: update refuses PostgreSQL families with "cannot be captured by this updater" when the real cause is a failed family lookup (e.g. missing unaccent) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187150](https://github.com/openclaw/openclaw/issues/187150) [Bug]: backup create: SQLite header probe uses one 10 s budget for the whole state dir, so backups fail once it holds a few hundred thousand files `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#186954](https://github.com/openclaw/openclaw/issues/186954) Markdown document previews collapse consecutive spaces in inline code `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187079](https://github.com/openclaw/openclaw/issues/187079) workboard.cards.update silently drops patch.metadata (no way to persist a client id on a card) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187140](https://github.com/openclaw/openclaw/issues/187140) [Bug]: unused-file check rejects documented Reef measurement command `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187143](https://github.com/openclaw/openclaw/issues/187143) Gateway restart removes an unanswered prompt from active chat history `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#187123](https://github.com/openclaw/openclaw/issues/187123) [Bug]: An agent's edits to openclaw.json are not validated; one bad key stops the gateway at the next start, and restart recovery and heartbeats resume the agent, which breaks it again `P1` `impact:crash-loop` 💬1
- [#186640](https://github.com/openclaw/openclaw/issues/186640) [Bug]: Files Markdown evidence links open a missing conversation `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#187103](https://github.com/openclaw/openclaw/issues/187103) [Bug]: Agent settings lose keyboard focus during another agent identity refresh `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#186662](https://github.com/openclaw/openclaw/issues/186662) [Bug]: Draft conversations spawn Shared children `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#187073](https://github.com/openclaw/openclaw/issues/187073) fix: minimal test Gateways never start explicitly requested channel accounts `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187114](https://github.com/openclaw/openclaw/issues/187114) [Bug]: claude-cli conversations reset with reason=mcp after ToolSearch deferral (#186776) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187115](https://github.com/openclaw/openclaw/issues/187115) [Bug]: one failed Claude CLI launch makes every later turn in that conversation fail with the same error `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187018](https://github.com/openclaw/openclaw/issues/187018) [Bug]: Anthropic API setup omits workspace scope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187109](https://github.com/openclaw/openclaw/issues/187109) [Bug]: after #187064 the delegated update Doctor on PostgreSQL families fails with "PostgreSQL connections must run in a worker" (finalize worker has no database process role) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187112](https://github.com/openclaw/openclaw/issues/187112) Add Particle model provider support `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#187091](https://github.com/openclaw/openclaw/issues/187091) [Bug]: Sidebar rail alignment E2E waits for absent personal sections `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187080](https://github.com/openclaw/openclaw/issues/187080) [Bug]: Doctor backup predicate fails the production export audit `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187063](https://github.com/openclaw/openclaw/issues/187063) Bug: sidebar alignment browser tests wait for the removed Sections heading `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187067](https://github.com/openclaw/openclaw/issues/187067) [Bug]: Private goal placement export fails the export audit `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186918](https://github.com/openclaw/openclaw/issues/186918) [Bug]: Pending Draft selection becomes Shared after Draft creation is disabled `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#187061](https://github.com/openclaw/openclaw/issues/187061) [Feature]: Make Codex collaboration instructions match available modes and question tools `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#187056](https://github.com/openclaw/openclaw/issues/187056) Update failure: package-install-omit-optional (2026.10.4) `P0` `impact:ux-release-blocker` 💬1
- [#186633](https://github.com/openclaw/openclaw/issues/186633) [Bug]: WebChat suggests retrying an unsupported generated-file attachment `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#186611](https://github.com/openclaw/openclaw/issues/186611) Bug: original publication refresh keeps the old PR base after retargeting `bug` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#187031](https://github.com/openclaw/openclaw/issues/187031) fix: export audit misses live PR cache helper imports `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#187043](https://github.com/openclaw/openclaw/issues/187043) [Docs]: Docker Compose guidance should say the stop grace period must exceed the gateway shutdown budget (about 325 s) `no-stale` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#187042](https://github.com/openclaw/openclaw/issues/187042) [Docs]: `openclaw config validate` run without the plugins available passes configs that the live gateway rejects `no-stale` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#187037](https://github.com/openclaw/openclaw/issues/187037) [Feature]: Supported session-only control to restore Automatic account selection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#187035](https://github.com/openclaw/openclaw/issues/187035) [Bug]: Node compile cache grows ~570 files per CLI run — plugin-capture paths defeat the cache, and maintenance has no file-count cap (fills tmpfs inodes) `P2` `impact:other` 💬1
- [#187025](https://github.com/openclaw/openclaw/issues/187025) [Bug]: Unused-file scan rejects eight documented measurement commands `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187023](https://github.com/openclaw/openclaw/issues/187023) Bug: Codex reuses the failed client after a settled parent-local transport error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#187017](https://github.com/openclaw/openclaw/issues/187017) Withdrawn report `P1` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#186999](https://github.com/openclaw/openclaw/issues/186999) [Bug]: Sent comment previews flicker and reopen after Escape at narrow widths `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#187011](https://github.com/openclaw/openclaw/issues/187011) [Feature]: Fallback notice should name each failed model, not just the first `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#187010](https://github.com/openclaw/openclaw/issues/187010) [Feature]: Session-scoped agent cursor for integrated cua-computer desktop executions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186527](https://github.com/openclaw/openclaw/issues/186527) [macOS] update repair remount settlement fails with "Package settlement inode or device mapping changed" on a publication-complete journal (launcher bound to staged inode, not recorded publication) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186997](https://github.com/openclaw/openclaw/issues/186997) [Feature]: Omit repeated PR attribution instructions when the feature is disabled `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186962](https://github.com/openclaw/openclaw/issues/186962) [Bug]: Standalone CLI models hidden in setup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186990](https://github.com/openclaw/openclaw/issues/186990) [Bug]: failure alerts silently undeliverable without a configured channel; failing automations surface only as repeated in-conversation repair briefs `P2` `clawsweeper:needs-live-repro` `impact:message-loss` `issue-rating: 🐚 platinum hermit` 💬1
- [#186988](https://github.com/openclaw/openclaw/issues/186988) [Feature]: doctor should count and purge orphaned interrupted/cancelled pending-input rows (114 rows across 29 sessions on a long-lived install) `P2` `impact:session-state` 💬1
- [#186985](https://github.com/openclaw/openclaw/issues/186985) [Bug]: iOS send-shortcut setting does not enable Enter to send on iPad `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186979](https://github.com/openclaw/openclaw/issues/186979) [Bug]: update reports generation-changed when a final identity probe returns no boot id (same PID, no restart) `P2` `impact:ux-friction` 💬1
- [#186978](https://github.com/openclaw/openclaw/issues/186978) [Bug]: iOS native Talk splits ElevenLabs speech mid-sentence at a hardcoded 72-character soft boundary `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#186946](https://github.com/openclaw/openclaw/issues/186946) [Bug]: Explicit-profile dispatch CI still expects administrator scope `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#186967](https://github.com/openclaw/openclaw/issues/186967) claude-cli: 20,000-line per-turn budget still drops finished replies of long tool-heavy subagent turns (2026.10.6), no open tracker after #150132 `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#186965](https://github.com/openclaw/openclaw/issues/186965) Compaction flattens untrusted content into forgeable [User]: lines (context laundering) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#186936](https://github.com/openclaw/openclaw/issues/186936) [Bug]: Slack per-user DM history limit keyed by the Slack user ID never trims the model's transcript `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186957](https://github.com/openclaw/openclaw/issues/186957) Plugin scheduled command turns keep failing after the plugin is disabled or the conversation is reset, and block new schedules `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186951](https://github.com/openclaw/openclaw/issues/186951) [Feature]: Make the isolated cron setup watchdog (CRON_AGENT_SETUP_WATCHDOG_MS) configurable: a CPU-saturated Gateway fails every isolated cron run `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#186949](https://github.com/openclaw/openclaw/issues/186949) [Bug]: Nix-mode config rejection skips Gateway refresh after credentials are saved `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186945](https://github.com/openclaw/openclaw/issues/186945) [Feature]: Plugin-registered model providers should show their plugin icon in the model picker, provider cards and Connect a provider `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186773](https://github.com/openclaw/openclaw/issues/186773) Fork from here creates Shared conversations from Draft sources `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#186766](https://github.com/openclaw/openclaw/issues/186766) Native Scheduled Task test treats diagnostic context parents as owned processes `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#186928](https://github.com/openclaw/openclaw/issues/186928) [Bug]: Active Goal stays "Pursuing goal" with no continuation owner after an output-limit (length) turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#186908](https://github.com/openclaw/openclaw/issues/186908) [Bug]: QA evidence gallery trims literal filesystem paths `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186914](https://github.com/openclaw/openclaw/issues/186914) [Bug]: Slack delayed sessions_send completion creates a thread for a top-level request (2026.10.8) `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#186921](https://github.com/openclaw/openclaw/issues/186921) [Feature]: Show the CLI provider sign-in scope note only on multi-user Gateways `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186873](https://github.com/openclaw/openclaw/issues/186873) [Bug]: Agent creation accepts avatar input before its modal is ready `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186917](https://github.com/openclaw/openclaw/issues/186917) [Bug]: Codex finalization fallback precedes successful deferred sessions_send answer (2026.10.8) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#186915](https://github.com/openclaw/openclaw/issues/186915) Model fallback chain stops entirely on a single candidate's timeout instead of advancing to the next fallback `P2` `impact:auth-provider` 💬1
- [#186771](https://github.com/openclaw/openclaw/issues/186771) [Bug]: Whole-conversation forks turn Draft copies into Shared conversations `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#186795](https://github.com/openclaw/openclaw/issues/186795) [Bug]: Workspace baseline repair omits accepted guest-created paths `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#186864](https://github.com/openclaw/openclaw/issues/186864) [Docs Bug]: Tool Search MCP examples use advertised tool names instead of registered ones `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186897](https://github.com/openclaw/openclaw/issues/186897) backup git: `--push` to GitHub fails on any real agent DB (files >100 MB), and `--keep-*` is rejected in Git mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186895](https://github.com/openclaw/openclaw/issues/186895) [Bug]: Windows cold-start gateway slow/degraded: model-catalog stall, 'prepared model runtime publication was superseded', feishu drops (2026.10.8) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#186676](https://github.com/openclaw/openclaw/issues/186676) fix: interrupted PR update recovery can create a replacement after closure `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#186879](https://github.com/openclaw/openclaw/issues/186879) [Feature]: Change project folder for an existing idle Control UI chat `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186882](https://github.com/openclaw/openclaw/issues/186882) [Docs Bug]: Channel identity docs don't explain that a commands.ownerAllowFrom entry takes precedence over a linked administrator's operator authority `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186881](https://github.com/openclaw/openclaw/issues/186881) [Bug]: memory-wiki status and doctor perform synchronization before reporting, exceeding the CLI deadline `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186869](https://github.com/openclaw/openclaw/issues/186869) [Feature]: Recover session creation retries across Gateway restarts `enhancement` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#186859](https://github.com/openclaw/openclaw/issues/186859) [Bug]: 2026.10.8 claude-cli still turns exact NO_REPLY into "CLI backend returned an empty response" on mentioned Slack thread turns (fix #170534 not in release line) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:not-repro-on-main` 💬1
- [#186852](https://github.com/openclaw/openclaw/issues/186852) [Feature]: Support first and last keyframes for Runway Veo video generation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186796](https://github.com/openclaw/openclaw/issues/186796) fix: workspace baseline becomes unreadable after deleting a directory tree root `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#186704](https://github.com/openclaw/openclaw/issues/186704) CLI 'automations run' lacks --force (tool supports runMode force); hint references 'cron' `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186849](https://github.com/openclaw/openclaw/issues/186849) claude-cli: history boundary drops to unknown after the first turn because message-tool delivery mirrors are not owned appends (auth-unknown with a token profile) `P1` `impact:session-state` `impact:auth-provider` 💬1
- [#186847](https://github.com/openclaw/openclaw/issues/186847) [Bug]: New agent flow placed workspace under ~/.openclaw/openclaw/ instead of ~/.openclaw/ `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#186844](https://github.com/openclaw/openclaw/issues/186844) [Bug]: New Session projects disappear silently when projects.list repeatedly rejects a stale session projection `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#186843](https://github.com/openclaw/openclaw/issues/186843) [Bug]: `agent --local --session-id` with an uppercase letter deadlocks in session admission, exits 13 with no output, and poisons the lowercase id (main) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186842](https://github.com/openclaw/openclaw/issues/186842) [Bug]: Gemini 3 behind a LiteLLM `openai-completions` provider stops thinking after the first tool call (thought signature lost, LiteLLM substitutes a placeholder) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186836](https://github.com/openclaw/openclaw/issues/186836) [Bug]: Security audit warns about its own configured suppressions `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#186658](https://github.com/openclaw/openclaw/issues/186658) fix: sandbox-absolute chat file references fail to open saved files `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#186774](https://github.com/openclaw/openclaw/issues/186774) [Docs Bug]: "Running 24/7" on the macOS VMs page does not cover a MacBook host with the lid closed `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186832](https://github.com/openclaw/openclaw/issues/186832) [Bug]: Health monitor starts Slack accounts before channel startup on slow boots; auth.test then times out in the sidecar stall and is never retried `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186759](https://github.com/openclaw/openclaw/issues/186759) Raw config says secrets are visible while the text is still redacted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186741](https://github.com/openclaw/openclaw/issues/186741) Agent avatar overlaps the first column of leading wide Markdown tables `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186756](https://github.com/openclaw/openclaw/issues/186756) Slack Socket Mode or relay account that never reconnects is reported healthy and never restarted by the health monitor `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186808](https://github.com/openclaw/openclaw/issues/186808) Feature: precise duration formatter rounds inconsistently on .005 float noise `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186758](https://github.com/openclaw/openclaw/issues/186758) Skills page counts stay stale after toggling a skill until Refresh `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186733](https://github.com/openclaw/openclaw/issues/186733) [Bug]: Adding a chat comment shifts wide tables horizontally `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#186768](https://github.com/openclaw/openclaw/issues/186768) [Bug]: validator retention test fails on rejected invocations `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#186781](https://github.com/openclaw/openclaw/issues/186781) Feature: relative time labels overstate ages at day boundaries `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186778](https://github.com/openclaw/openclaw/issues/186778) Human message code blocks lose formatting and horizontal scrolling `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186736](https://github.com/openclaw/openclaw/issues/186736) [Bug]: People rows are vertically misaligned on mobile `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186764](https://github.com/openclaw/openclaw/issues/186764) [Feature]: Tell agents how chat file paths resolve in the Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186695](https://github.com/openclaw/openclaw/issues/186695) Annotation-only messages briefly collapse to Loading when revisited `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186720](https://github.com/openclaw/openclaw/issues/186720) Control UI: invalid cron expression or timezone shows a raw croner error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186744](https://github.com/openclaw/openclaw/issues/186744) Feature: relative time labels overstate ages at half-minute boundaries `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186739](https://github.com/openclaw/openclaw/issues/186739) [Bug]: 2026.10.2 cold start exhausts the V8 heap during deferred agent database preparation (JavaScript heap out of memory) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#186714](https://github.com/openclaw/openclaw/issues/186714) Control UI: show more sessions before paging the sidebar `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186550](https://github.com/openclaw/openclaw/issues/186550) Session files attachment icons expand and hide filenames `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#186722](https://github.com/openclaw/openclaw/issues/186722) Agent delete keeps the workspace on disk but the dialog says it moves to Trash `P2` `impact:ux-friction` 💬1
- [#186723](https://github.com/openclaw/openclaw/issues/186723) Control UI side-panel PDF preview renders blank in WebKit hosts (macOS app / Safari): blob: URL in iframe unsupported `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#186716](https://github.com/openclaw/openclaw/issues/186716) [Bug]: Tool Search `tools` mode answers a direct call to a deferred tool with a bare "Tool <name> not found" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186721](https://github.com/openclaw/openclaw/issues/186721) Control UI: Run history rows show a live Due or Next in label `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186719](https://github.com/openclaw/openclaw/issues/186719) Telegram resends a tool image already delivered by message() when the paths differ `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186699](https://github.com/openclaw/openclaw/issues/186699) docs(secrets): distinguish native macOS TLS trust from proxy grant authentication `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#186712](https://github.com/openclaw/openclaw/issues/186712) [Bug]: Re-running Bifrost setup for a new gateway URL fails on an invalid stored URL and keeps the old gateway's request settings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#186710](https://github.com/openclaw/openclaw/issues/186710) [Bug]: `openclaw onboard --non-interactive` key replacement without a model to test fails with an app-guided "starter model" error and no next step `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186701](https://github.com/openclaw/openclaw/issues/186701) voice-call: config hot-reload leaves telephony TTS uninitialised until full gateway restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#186708](https://github.com/openclaw/openclaw/issues/186708) [Bug]: Microsoft Teams accounts all fail to start when a named account uses /api/messages and the default account uses a custom path `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186705](https://github.com/openclaw/openclaw/issues/186705) launchd CLI runs always log 'current Node failed runtime admission' then retry `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186696](https://github.com/openclaw/openclaw/issues/186696) [Bug]: Channel owner turns on claude-cli runtime get no automation management grant over the MCP bridge (cron.update restricted) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#186702](https://github.com/openclaw/openclaw/issues/186702) sessions_send steer to own running sub-agent fails: guarded_injection_unsupported `P2` `impact:session-state` 💬1
- [#186692](https://github.com/openclaw/openclaw/issues/186692) Browser snapshots expose autofilled password field values in clear text `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#186680](https://github.com/openclaw/openclaw/issues/186680) Control UI: avatar disappears when a reasoning reply finishes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186688](https://github.com/openclaw/openclaw/issues/186688) [Bug]: Successful Discord message-tool finals are recorded as native interruptions without persisting the answer `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#186887](https://github.com/openclaw/openclaw/issues/186887) heartbeat: system heartbeat disable reports success without disabling the job
- [#186763](https://github.com/openclaw/openclaw/issues/186763) Update failure: package-install-omit-optional (2026.10.4) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro`

#### 🔒 Closed Issues
- [#183786](https://github.com/openclaw/openclaw/issues/183786) [Bug]: Windows beta upgrade repeatedly queries stopped foreground Gateway PID after successful npm staging
- [#127229](https://github.com/openclaw/openclaw/issues/127229) telegram: watchdog-released durable update is falsely tombstoned before transport tracker settles
- [#136386](https://github.com/openclaw/openclaw/issues/136386) [Bug]: Isolated cron agentTurn exec denied — allowlist miss persists despite confirmed allowlist entries, and no CLI path administers the consulted agent bucket
- [#125313](https://github.com/openclaw/openclaw/issues/125313) Control UI fans out per-session board.get and per-event cron refetches; needs batched metadata RPC and shared in-flight reads
- [#163042](https://github.com/openclaw/openclaw/issues/163042) [Bug]: WebChat drops assistant text emitted before a tool call (2026.9.7 regression) - text persisted in transcript but lost from UI
- [#150372](https://github.com/openclaw/openclaw/issues/150372) Failed turns lose their "ended before a reply" notice when another session's turn is active
- [#143419](https://github.com/openclaw/openclaw/issues/143419) [Bug]: Claude setup-token profile is not able to get usage info
- [#186732](https://github.com/openclaw/openclaw/issues/186732) [Bug]: bug(debian-package): Installation fails on Debian due to strict GStreamer package naming mismatch
- [#180705](https://github.com/openclaw/openclaw/issues/180705) openclaw update: schema migration fails because updater's own temporary gateway holds the state database lock
- [#127237](https://github.com/openclaw/openclaw/issues/127237) [Bug]: tui-pty-harness e2e tests flake under CPU load (2s OUTPUT_TIMEOUT_MS)
- [#167519](https://github.com/openclaw/openclaw/issues/167519) Session SQLite migration recovery report (session-sqlite-1791499327486-34195eab)
- [#172161](https://github.com/openclaw/openclaw/issues/172161) [Bug]: path find fails on a JSON mapping with a literal wildcard key
- [#159142](https://github.com/openclaw/openclaw/issues/159142) [Bug]: voice-call gateway commands can retire the live runtime during an active call
- [#187145](https://github.com/openclaw/openclaw/issues/187145) [Bug]: macOS 2026.10.8 Doctor keeps Gateway offline for 53+ minutes with no progress after successful update repair
- [#186961](https://github.com/openclaw/openclaw/issues/186961) [Bug]: update admission on PostgreSQL families inspects the agents' SQLite anchors and refuses with "Agent database migration requires stopped-writer maintenance"
- [#136333](https://github.com/openclaw/openclaw/issues/136333) Heartbeat runs record no wake source/reason: five unexplained 5-minute polls on a 4h cadence are unattributable from logs, `system heartbeat last`, or heartbeat_outcomes
- [#186612](https://github.com/openclaw/openclaw/issues/186612) Codex plugin "data/settings upgrade is unfinished" never applies and survives cold boot at version parity (2026.10.8, npm install, system-unit gateway); doctor --fix converges-without-writing and defers model retirement repair
- [#186817](https://github.com/openclaw/openclaw/issues/186817) `openclaw update` rolls back schema-migration upgrades on hosts with glibc < 2.33 (proc-safe native identity unavailable)
- [#180863](https://github.com/openclaw/openclaw/issues/180863) [Feature]: DotHoosh model provider (OpenAI, Responses and Anthropic routes behind one key)
- [#169614](https://github.com/openclaw/openclaw/issues/169614) [Bug]: Cron failure-repair brief asks for NO_REPLY but WebChat repair turn is reply-required → false empty-response error in owner chat
- [#187166](https://github.com/openclaw/openclaw/issues/187166) Update failure: package-install-omit-optional (2026.10.5)
- [#186898](https://github.com/openclaw/openclaw/issues/186898) Version skew: `npm install -g` can target a different Node prefix than the running gateway, then migrate agent DBs past the running build
- [#141454](https://github.com/openclaw/openclaw/issues/141454) [Bug]: Deferred systemEvent force-runs are shown as completed successfully
- [#141023](https://github.com/openclaw/openclaw/issues/141023) Skill Workshop: make the 10,000-character autonomous patch limit configurable
- [#187006](https://github.com/openclaw/openclaw/issues/187006) [Bug]: on PostgreSQL families the update's Doctor aborts on the state anchor ("migration source changed after update capture"), the new gateway refuses the agent anchors, and update repair refuses ("schema role missing")
- [#187028](https://github.com/openclaw/openclaw/issues/187028) Update failure: unexpected-error (2026.9.4)
- [#187033](https://github.com/openclaw/openclaw/issues/187033) [Bug]: idle conversation render test counts startup work before the event
- [#167729](https://github.com/openclaw/openclaw/issues/167729) [Bug]: iOS session drawer downloads the full session list on every session event
- [#185712](https://github.com/openclaw/openclaw/issues/185712) [Bug]: Immediate cron cleanup requests deletion of pinned exact-run continuations
- [#186974](https://github.com/openclaw/openclaw/issues/186974) [Bug]: Legacy config-audit recovery refuses permanently when a raw-archive checkpoint exists but its sanitized companion is missing (blocks update finalization and later migrations)
- [#186875](https://github.com/openclaw/openclaw/issues/186875) startGatewaySidecars treats a transient database lock as fatal - Gateway startup fails and requires a manual restart, with no retry path
- [#136552](https://github.com/openclaw/openclaw/issues/136552) [Bug]: Isolated test state databases leak lifecycle locks into shared /tmp
- [#186862](https://github.com/openclaw/openclaw/issues/186862) [Bug]: `doctor --lint` misses a HEARTBEAT.md that blocks `doctor --fix` and updates while heartbeat settings remain
- [#186907](https://github.com/openclaw/openclaw/issues/186907) Link-preview E2E hovers a covered link before dismissing its preview
- [#186824](https://github.com/openclaw/openclaw/issues/186824) [Bug]: doctor --fix still reparses every migration manifest per source on 2026.10.8 (rebuildDeferredPluginSessionSourceIndex path; follow-up to #172809)
- [#186814](https://github.com/openclaw/openclaw/issues/186814) [Bug]: Debian npm update probes absent pacman five times and repeats ENOENT warning
- [#186553](https://github.com/openclaw/openclaw/issues/186553) feat: allow role-granted cloud dispatch without administrator access
- [#186767](https://github.com/openclaw/openclaw/issues/186767) [Bug]: Control UI automatic build fails when a packaged plugin UI generation is missing
- [#186700](https://github.com/openclaw/openclaw/issues/186700) Plugin inbound-message hooks never fire (outbound/tool hooks do)
- [#186726](https://github.com/openclaw/openclaw/issues/186726) Feature: escape single quotes in generated PowerShell completion path labels
- [#187107](https://github.com/openclaw/openclaw/issues/187107) [Bug]: Files stays blank after preview retirement during task navigation
- [#187088](https://github.com/openclaw/openclaw/issues/187088) [Bug]: New Session shortcut tooltip blocks adjacent sidebar header controls
- [#187119](https://github.com/openclaw/openclaw/issues/187119) CI mock-export ratchet rejects Gateway lifecycle fixtures
- [#186954](https://github.com/openclaw/openclaw/issues/186954) Markdown document previews collapse consecutive spaces in inline code
- [#187079](https://github.com/openclaw/openclaw/issues/187079) workboard.cards.update silently drops patch.metadata (no way to persist a client id on a card)
- [#187140](https://github.com/openclaw/openclaw/issues/187140) [Bug]: unused-file check rejects documented Reef measurement command
- [#187123](https://github.com/openclaw/openclaw/issues/187123) [Bug]: An agent's edits to openclaw.json are not validated; one bad key stops the gateway at the next start, and restart recovery and heartbeats resume the agent, which breaks it again
- [#186640](https://github.com/openclaw/openclaw/issues/186640) [Bug]: Files Markdown evidence links open a missing conversation
- [#187103](https://github.com/openclaw/openclaw/issues/187103) [Bug]: Agent settings lose keyboard focus during another agent identity refresh
- [#186662](https://github.com/openclaw/openclaw/issues/186662) [Bug]: Draft conversations spawn Shared children
- [#187073](https://github.com/openclaw/openclaw/issues/187073) fix: minimal test Gateways never start explicitly requested channel accounts
- [#187018](https://github.com/openclaw/openclaw/issues/187018) [Bug]: Anthropic API setup omits workspace scope
- [#187091](https://github.com/openclaw/openclaw/issues/187091) [Bug]: Sidebar rail alignment E2E waits for absent personal sections
- [#187080](https://github.com/openclaw/openclaw/issues/187080) [Bug]: Doctor backup predicate fails the production export audit
- [#187063](https://github.com/openclaw/openclaw/issues/187063) Bug: sidebar alignment browser tests wait for the removed Sections heading
- [#187067](https://github.com/openclaw/openclaw/issues/187067) [Bug]: Private goal placement export fails the export audit
- [#186918](https://github.com/openclaw/openclaw/issues/186918) [Bug]: Pending Draft selection becomes Shared after Draft creation is disabled
- [#187056](https://github.com/openclaw/openclaw/issues/187056) Update failure: package-install-omit-optional (2026.10.4)
- [#186633](https://github.com/openclaw/openclaw/issues/186633) [Bug]: WebChat suggests retrying an unsupported generated-file attachment
- [#186611](https://github.com/openclaw/openclaw/issues/186611) Bug: original publication refresh keeps the old PR base after retargeting
- [#187031](https://github.com/openclaw/openclaw/issues/187031) fix: export audit misses live PR cache helper imports
- [#187035](https://github.com/openclaw/openclaw/issues/187035) [Bug]: Node compile cache grows ~570 files per CLI run — plugin-capture paths defeat the cache, and maintenance has no file-count cap (fills tmpfs inodes)
- [#187025](https://github.com/openclaw/openclaw/issues/187025) [Bug]: Unused-file scan rejects eight documented measurement commands
- [#187017](https://github.com/openclaw/openclaw/issues/187017) Withdrawn report
- [#186999](https://github.com/openclaw/openclaw/issues/186999) [Bug]: Sent comment previews flicker and reopen after Escape at narrow widths
- [#186527](https://github.com/openclaw/openclaw/issues/186527) [macOS] update repair remount settlement fails with "Package settlement inode or device mapping changed" on a publication-complete journal (launcher bound to staged inode, not recorded publication)
- [#178481](https://github.com/openclaw/openclaw/issues/178481) [Bug]: Dreaming REM repeatedly identifies German pronoun "ich" as a theme (25/27 reports)
- [#186962](https://github.com/openclaw/openclaw/issues/186962) [Bug]: Standalone CLI models hidden in setup
- [#185659](https://github.com/openclaw/openclaw/issues/185659) [Bug]: openclaw config unset agents.entries.<id> is refused when no Gateway is running
- [#186988](https://github.com/openclaw/openclaw/issues/186988) [Feature]: doctor should count and purge orphaned interrupted/cancelled pending-input rows (114 rows across 29 sessions on a long-lived install)
- [#186979](https://github.com/openclaw/openclaw/issues/186979) [Bug]: update reports generation-changed when a final identity probe returns no boot id (same PID, no restart)
- [#186946](https://github.com/openclaw/openclaw/issues/186946) [Bug]: Explicit-profile dispatch CI still expects administrator scope
- [#186936](https://github.com/openclaw/openclaw/issues/186936) [Bug]: Slack per-user DM history limit keyed by the Slack user ID never trims the model's transcript
- [#184891](https://github.com/openclaw/openclaw/issues/184891) [Bug]: .bak ring rotation failures are swallowed; config publish proceeds with no same-generation backup
- [#186773](https://github.com/openclaw/openclaw/issues/186773) Fork from here creates Shared conversations from Draft sources
- [#186766](https://github.com/openclaw/openclaw/issues/186766) Native Scheduled Task test treats diagnostic context parents as owned processes
- [#186873](https://github.com/openclaw/openclaw/issues/186873) [Bug]: Agent creation accepts avatar input before its modal is ready
- [#186915](https://github.com/openclaw/openclaw/issues/186915) Model fallback chain stops entirely on a single candidate's timeout instead of advancing to the next fallback
- [#186771](https://github.com/openclaw/openclaw/issues/186771) [Bug]: Whole-conversation forks turn Draft copies into Shared conversations
- [#186795](https://github.com/openclaw/openclaw/issues/186795) [Bug]: Workspace baseline repair omits accepted guest-created paths
- [#186864](https://github.com/openclaw/openclaw/issues/186864) [Docs Bug]: Tool Search MCP examples use advertised tool names instead of registered ones
- [#185962](https://github.com/openclaw/openclaw/issues/185962) PR tooling can retire live installs or lose its selected Git context
- [#186676](https://github.com/openclaw/openclaw/issues/186676) fix: interrupted PR update recovery can create a replacement after closure
- [#186796](https://github.com/openclaw/openclaw/issues/186796) fix: workspace baseline becomes unreadable after deleting a directory tree root
- [#186849](https://github.com/openclaw/openclaw/issues/186849) claude-cli: history boundary drops to unknown after the first turn because message-tool delivery mirrors are not owned appends (auth-unknown with a token profile)
- [#186658](https://github.com/openclaw/openclaw/issues/186658) fix: sandbox-absolute chat file references fail to open saved files
- [#186774](https://github.com/openclaw/openclaw/issues/186774) [Docs Bug]: "Running 24/7" on the macOS VMs page does not cover a MacBook host with the lid closed
- [#186759](https://github.com/openclaw/openclaw/issues/186759) Raw config says secrets are visible while the text is still redacted
- [#186741](https://github.com/openclaw/openclaw/issues/186741) Agent avatar overlaps the first column of leading wide Markdown tables
- [#186756](https://github.com/openclaw/openclaw/issues/186756) Slack Socket Mode or relay account that never reconnects is reported healthy and never restarted by the health monitor
- [#186758](https://github.com/openclaw/openclaw/issues/186758) Skills page counts stay stale after toggling a skill until Refresh
- [#186733](https://github.com/openclaw/openclaw/issues/186733) [Bug]: Adding a chat comment shifts wide tables horizontally
- [#186768](https://github.com/openclaw/openclaw/issues/186768) [Bug]: validator retention test fails on rejected invocations
- [#186736](https://github.com/openclaw/openclaw/issues/186736) [Bug]: People rows are vertically misaligned on mobile
- [#186695](https://github.com/openclaw/openclaw/issues/186695) Annotation-only messages briefly collapse to Loading when revisited
- [#186720](https://github.com/openclaw/openclaw/issues/186720) Control UI: invalid cron expression or timezone shows a raw croner error
- [#186714](https://github.com/openclaw/openclaw/issues/186714) Control UI: show more sessions before paging the sidebar
- [#186550](https://github.com/openclaw/openclaw/issues/186550) Session files attachment icons expand and hide filenames
- [#186722](https://github.com/openclaw/openclaw/issues/186722) Agent delete keeps the workspace on disk but the dialog says it moves to Trash
- [#186702](https://github.com/openclaw/openclaw/issues/186702) sessions_send steer to own running sub-agent fails: guarded_injection_unsupported
- [#186680](https://github.com/openclaw/openclaw/issues/186680) Control UI: avatar disappears when a reasoning reply finishes
- [#186887](https://github.com/openclaw/openclaw/issues/186887) heartbeat: system heartbeat disable reports success without disabling the job
- [#186763](https://github.com/openclaw/openclaw/issues/186763) Update failure: package-install-omit-optional (2026.10.4)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 258,091 · **Open issues:** 51,755 · **Last push:** <1h ago

On October 29, 2026, Hermes Agent saw no new releases but a series of important updates were merged. Significant changes included the fix for handling unbound profile tickets during launch sockets in PR #146117 and improvements in the webapp's billing reads to maintain profile secret scopes with multiplexed gateways in PR #146097. Additionally, PR #146240 enhanced password management by enabling saved passwords to fill on Camofox pages, while PR #146263 introduced a feature to publish a versioned gateway activity contract for external observers. A noteworthy new issue arose regarding `hermes update`, which was reported to wait indefinitely for the full drain budget when processes involved `hermes-gateway`. Overall, the day focused on refining existing functionalities and addressing user-reported concerns without any new releases.

#### ✅ Merged PRs
- [#146117](https://github.com/NousResearch/hermes-agent/pull/146117) fix(webapp): refuse unbound profile tickets and bind explicit profiles on launch sockets (stacked on #146097)
- [#146100](https://github.com/NousResearch/hermes-agent/pull/146100) docs(security): allow_private_urls guards cloud browsers and web tools, not the local sidecar (salvage #126299)
- [#146126](https://github.com/NousResearch/hermes-agent/pull/146126) fix(cli,tui): text + Enter in one write submits (tmux send-keys, process_manage submit), salvage #70099
- [#146240](https://github.com/NousResearch/hermes-agent/pull/146240) Saved passwords fill on Camofox pages (browser page backend seam for browser_vault)
- [#146097](https://github.com/NousResearch/hermes-agent/pull/146097) fix(webapp): Webapp socket and billing reads keep their profile's secret scope on a multiplexed gateway (salvage #137897)
- [#146110](https://github.com/NousResearch/hermes-agent/pull/146110) fix(desktop): a reply that finishes during a reconnect no longer stays stuck on its first words
- [#146195](https://github.com/NousResearch/hermes-agent/pull/146195) Docker tests: a stalled docker exec no longer fails the whole poll (arm64 dashboard flake)
- [#146079](https://github.com/NousResearch/hermes-agent/pull/146079) fix(search): search_files keeps results when a directory under the root is unreadable (salvage #114655)
- [#146214](https://github.com/NousResearch/hermes-agent/pull/146214) fix(update): a checkout-lock probe never reads another probe as a running update
- [#146290](https://github.com/NousResearch/hermes-agent/pull/146290) Camofox catalog pin: browser_vault fills saved passwords on the Camofox tab

#### 🐛 New Issues
- [#146044](https://github.com/NousResearch/hermes-agent/issues/146044) `hermes update` waits for the full drain budget on any process with `hermes-gateway` anywhere in its argv (e.g. `journalctl -u hermes-gateway -f`) `type/bug` `comp/gateway` `P2` `area/install-update` 💬2
- [#146237](https://github.com/NousResearch/hermes-agent/issues/146237) Desktop Kanban: reassigning a card to another profile fails with 403 profile_scope_mismatch `type/bug` `comp/cli` `comp/cron` `comp/plugins` 💬2
- [#146253](https://github.com/NousResearch/hermes-agent/issues/146253) [Bug]: Desktop model switch is blocked when the session's current route is a stopped managed local model — ValueError escapes _current_route's AuthError-only catch `type/bug` `comp/gateway` `P2` `area/sessions` 💬2
- [#146242](https://github.com/NousResearch/hermes-agent/issues/146242) Marking a listed session read returns 404 `not_found` although the session exists `type/bug` `comp/gateway` `P2` `area/sessions` 💬2
- [#146291](https://github.com/NousResearch/hermes-agent/issues/146291) [desktop] Mic start freezes the window for 1-7 s on Windows: recorder builds a new AudioContext on every take `type/perf` `P2` `comp/desktop` `desktop/chat` 💬1
- [#146244](https://github.com/NousResearch/hermes-agent/issues/146244) Hermes fails on networks with short TCP idle timeouts (<20s) `type/bug` `comp/agent` `tool/file` `area/config` 💬1
- [#146263](https://github.com/NousResearch/hermes-agent/issues/146263) [Feature]: Publish a versioned, authoritative gateway activity contract for external idle observers `type/feature` `comp/gateway` `P3` 💬1
- [#146280](https://github.com/NousResearch/hermes-agent/issues/146280) Anthropic usage: utilization <= 1% reported as 100% (fraction scaling on a percent field) `type/bug` `comp/agent` `provider/anthropic` `P2` 💬1
- [#146275](https://github.com/NousResearch/hermes-agent/issues/146275) [Bug]: [TUI] the model list is huge to select `type/bug` `comp/tui` `area/config` `P2` 💬1
- [#146278](https://github.com/NousResearch/hermes-agent/issues/146278) cron: agent jobs refused with 'Gateway draining: update_paused' while a PM sync (or a running cron worker) holds the update fence `type/bug` `comp/cli` `P2` 💬1
- [#146272](https://github.com/NousResearch/hermes-agent/issues/146272) user plugin's transform_tool_result hook registers but never dispatches in CLI/chat (v0.22.5) `type/bug` `comp/cli` `comp/plugins` `P2` 💬1
- [#146254](https://github.com/NousResearch/hermes-agent/issues/146254) bot_relay.deliver rejects Desktop's `id` param on legacy (SSH/dashboard) routes — cross-machine Bot DMs silently never arrive `type/bug` `comp/gateway` `P2` `comp/tui-gateway` 💬1
- [#146293](https://github.com/NousResearch/hermes-agent/issues/146293) Memory: claim_instance lets one provider instance be re-initialized for another profile when multiplexing is off (cross-profile memory reads/writes in multi-profile hosts) `type/security` `comp/agent` `tool/memory` `P3`
- [#146288](https://github.com/NousResearch/hermes-agent/issues/146288) [Bug]: claude-subscription-directsdk: PermissionError [WinError 32] on exit when cleaning up claude-directsdk-picker temp dir (Windows) `type/bug` `comp/plugins` `P3` `os/windows`
- [#146281](https://github.com/NousResearch/hermes-agent/issues/146281) [Bug]: matrix/python-olm build fails on gcc-only hosts — managed PBS sysconfig wants missing clang++/clang and a dead /tools/llvm/bin/llvm-ar; update still reports success and pm doctor passes `type/bug` `comp/cli` `platform/matrix` `P3`
- [#146265](https://github.com/NousResearch/hermes-agent/issues/146265) Surface routed + backend model in runtime footer and CLI status bar (combines #106973 + #49026) `type/feature` `comp/cli` `comp/gateway` `P3`
- [#146266](https://github.com/NousResearch/hermes-agent/issues/146266) Feature request: let Hermes Desktop set (and reset) the backend dashboard username/password, instead of only signing in to an existing one `type/feature` `area/auth` `area/config` `P3`
- [#146250](https://github.com/NousResearch/hermes-agent/issues/146250) probe: issue creation test `P3`

#### 🔒 Closed Issues
- [#126247](https://github.com/NousResearch/hermes-agent/issues/126247) [Feature]: Support password-blind Hermes Vault credential injection with CamoFox
- [#139611](https://github.com/NousResearch/hermes-agent/issues/139611) [Bug]: Telegram reply anchors crash on non-numeric ids since v0.22.1 — raw int() on wake-identity JSON kills every reply into affected sessions
- [#144835](https://github.com/NousResearch/hermes-agent/issues/144835) compaction: escape turn-label sequences in summary-transcript serialization (forged role labels launder through compaction)
- [#122561](https://github.com/NousResearch/hermes-agent/issues/122561) [Bug]: browser_vault_fill cannot discover login fields inside open Shadow DOM
- [#144750](https://github.com/NousResearch/hermes-agent/issues/144750) checkout_lock_held() probe is observable: parallel readers turn each other's probe into 'Gateway draining: update_paused'
- [#132686](https://github.com/NousResearch/hermes-agent/issues/132686) browser_vault_fill cannot see login fields inside open shadow roots ("No login form fields were found")
- [#146263](https://github.com/NousResearch/hermes-agent/issues/146263) [Feature]: Publish a versioned, authoritative gateway activity contract for external idle observers

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 95,793 · **Open issues:** 9,550 · **Last push:** <1h ago

There were no new releases for vLLM on October 29, 2026; however, several important updates were merged. Key changes include enabling ROCm AITER unified attention for MiMo-V2.6, fixing NaN logits issues in NVFP4, and enhancing fp8 KV and indexer caches for the AMD QSA path. Additionally, a significant bug was reported regarding the potential security risk of the `/invocations` endpoint, which is enabled by default and bypasses API key authentication. Other notable changes focused on improving adaptive verification and handling asynchronous KV loads, reflecting ongoing performance and reliability enhancements within the project.

#### ✅ Merged PRs
- [#64064](https://github.com/vllm-project/vllm/pull/64064) [ROCm][Model] Enable ROCm AITER unified attention for MiMo-V2.6
- [#63382](https://github.com/vllm-project/vllm/pull/63382) [Bugfix][NVFP4] Fix NaN logits and garbage output from uninitialized fused act+quant scales
- [#61529](https://github.com/vllm-project/vllm/pull/61529) [ROCm][Qwen4Exp] Enable fp8 KV and indexer caches on the AMD QSA path
- [#64013](https://github.com/vllm-project/vllm/pull/64013) [Bugfix] Parenthesize penalties Triton chained `or` for Ascend backends
- [#62990](https://github.com/vllm-project/vllm/pull/62990) [ROCm][Kimi-K3] Allow DSpark adaptive verification with DCP on ROCM_AITER_MLA
- [#64259](https://github.com/vllm-project/vllm/pull/64259) [CI][Bugfix] Fit the MLA backend bf16 atol to a bf16 SDPA reference
- [#64228](https://github.com/vllm-project/vllm/pull/64228) [XPU][UT] reuse test_phi3v.py::test_models_text on XPU
- [#63275](https://github.com/vllm-project/vllm/pull/63275) [Spec Decode] Support trace replay with speculative decoding
- [#64224](https://github.com/vllm-project/vllm/pull/64224) [KV Offload] Update KVCR to v0.2.0
- [#63489](https://github.com/vllm-project/vllm/pull/63489) [Bugfix][LoRA] Refuse adapters with LoRA on modules vLLM does not wrap
- [#63286](https://github.com/vllm-project/vllm/pull/63286) [Bugfix][LoRA] Load the head of SEQ_CLS adapters saved without modules_to_save
- [#64377](https://github.com/vllm-project/vllm/pull/64377) [CI][ROCm] Drop nvidia-cuda-cccl from the ROCm test lockfile again
- [#64387](https://github.com/vllm-project/vllm/pull/64387) [CI] Import the merge-base commit's image cache in PR builds
- [#63513](https://github.com/vllm-project/vllm/pull/63513) [KV Connector] Mooncake store: skip padding in stored KV blocks
- [#64318](https://github.com/vllm-project/vllm/pull/64318) [CI] Enroll Language Models (Standard) in automatic sharding
- [#64238](https://github.com/vllm-project/vllm/pull/64238) [Bugfix][HiSparse] Fix compact KV row regression tests
- [#64010](https://github.com/vllm-project/vllm/pull/64010) [CI] Re-enable disabled jobs whose installs are already locked
- [#62748](https://github.com/vllm-project/vllm/pull/62748) [Perf][MRV2] Skip idle sampler staged writes
- [#61270](https://github.com/vllm-project/vllm/pull/61270) [Model] Support MTP drafts in the Transformers modeling backend
- [#64349](https://github.com/vllm-project/vllm/pull/64349) [CI] Bump pre-commit hooks (except ruff)
- [#63827](https://github.com/vllm-project/vllm/pull/63827) [Bugfix][Core] Defer async KV loads on HiSparse decoders until in-flight steps finish
- [#61699](https://github.com/vllm-project/vllm/pull/61699) [Bugfix][Spec Decode] Honor standalone draft load config
- [#64348](https://github.com/vllm-project/vllm/pull/64348) [CI][Bugfix] Fix flaky port race in test_coordination_store_held_only_by_the_online_dp_master
- [#62407](https://github.com/vllm-project/vllm/pull/62407) [Quantization] Keep deleted and renamed params registered after process_weights_after_loading
- [#63637](https://github.com/vllm-project/vllm/pull/63637) [ROCm][MiniMax-M3.1] Fuse MXFP8 activation quant into the Gemma input_layernorm for qkv_proj
- [#61464](https://github.com/vllm-project/vllm/pull/61464) [MRV2][DBO] Support DBO with speculative decoding and DCP
- [#63042](https://github.com/vllm-project/vllm/pull/63042) [MyPy][8/N] Enable strict checking for model test subdirectories
- [#64316](https://github.com/vllm-project/vllm/pull/64316) [Doc] DeepSeek-V4-Pro: add B200 InferenceX AgentX presets
- [#64283](https://github.com/vllm-project/vllm/pull/64283) [Doc] MiniMax-M3.1-Flash: add the GB200 AgentX presets
- [#64284](https://github.com/vllm-project/vllm/pull/64284) [Doc] MiniMax-M3.1-Flash: add the GB300 AgentX presets
- [#64328](https://github.com/vllm-project/vllm/pull/64328) [CI] Bump GitHub Actions versions and replace node20 pre-commit/action
- [#62240](https://github.com/vllm-project/vllm/pull/62240) [Perf][DSA] Rank the prefill indexer logits with DeepSelect in BF16

#### 🐛 New Issues
- [#64327](https://github.com/vllm-project/vllm/issues/64327) [Bug][HiSparse] GLM-5.3 TP8 B200: unspecified launch failure with MNNVL all-reduce (#61989) once KV spills to host `bug` `glm` 💬4
- [#64226](https://github.com/vllm-project/vllm/issues/64226) [Bug]: Rust vllm-bench saves ramp-up runs as fixed-rate results `rust` 💬3
- [#64204](https://github.com/vllm-project/vllm/issues/64204) [Bug]: AOT compile cache never loads for Qwen3.5 models: "Kernel index 1 not found in id_to_kernel" `bug` 💬3
- [#64391](https://github.com/vllm-project/vllm/issues/64391) [Bug]: Security concern: `/invocations` endpoint is enabled by default and bypasses API key authentication `bug` 💬2
- [#64309](https://github.com/vllm-project/vllm/issues/64309) [Bug]: thinking_token_budget never triggers for Mistral models that use [THINK] tokens (tokenizer_mode=mistral) `tool-calling` `mistral` 💬2
- [#64249](https://github.com/vllm-project/vllm/issues/64249) [Feature]: Proactive pause/prepare path for FT recovery of externally-diagnosed rank failures `feature request` 💬2
- [#64275](https://github.com/vllm-project/vllm/issues/64275) [Bug]: Adaptive-verification cost profiling OOMs at startup after KV-cache allocation (DeepSeek-V4.1-Flash-1017, ROCm) `bug` `rocm` `deepseek` `DSv4.1` 💬2
- [#64326](https://github.com/vllm-project/vllm/issues/64326) [Bug]: DelegatingParser.parse ignores model_output_token_ids, so markers written as plain text become tool calls or end reasoning (non-streaming) `tool-calling` 💬1
- [#64354](https://github.com/vllm-project/vllm/issues/64354) [Feature]: Stage-local CUDA Graph DBO with pipeline parallelism in MRV2 💬1
- [#64353](https://github.com/vllm-project/vllm/issues/64353) [Feature]: [MRV2][DBO] Select bounded active microbatch counts within a fixed capacity 💬1
- [#64351](https://github.com/vllm-project/vllm/issues/64351) [Feature]: Compose PCP partitioning with DBO microbatches in MRV2 (eager PCP2 × DP2) 💬1
- [#64374](https://github.com/vllm-project/vllm/issues/64374) [RFC]: Bounded, retryable NCCL weight updates `rl` 💬1
- [#64295](https://github.com/vllm-project/vllm/issues/64295) [RFC]: Let replicas read each other's GPU KV cache (L1 sharing) `rocm` 💬1
- [#64239](https://github.com/vllm-project/vllm/issues/64239) [Bug]: Timed-out overflow dequeue returns the wrong message `bug` 💬1
- [#64237](https://github.com/vllm-project/vllm/issues/64237) [RFC]: KV tier on a distributed filesystem — multi-engine sharing with a cluster-wide quota and coherent eviction 💬1
- [#64392](https://github.com/vllm-project/vllm/issues/64392) [Bug]: TimeoutError: RPC call to sample_tokens timed out. `bug` `quantization`
- [#64334](https://github.com/vllm-project/vllm/issues/64334) [Feature]: Stage-local eager DBO with pipeline parallelism in MRV2
- [#64380](https://github.com/vllm-project/vllm/issues/64380) [RFC]: R3 delivery protocol: keys, sharing scope, write/read/release contract `RFC`
- [#64383](https://github.com/vllm-project/vllm/issues/64383) [RFC]: R3 as a KV cache layer: where routed-experts rows of prefix-cached blocks live `RFC`
- [#64341](https://github.com/vllm-project/vllm/issues/64341) [Doc]: Architecture Overview page under Developer Guide is outdated in certain parts and does not match the current V1 architecture `documentation`
- [#64267](https://github.com/vllm-project/vllm/issues/64267) [RFC]: Prefix caching of Decision 3.0 `prefix_bidir` state blocks (hit cap, in-block checkpoints, CPU offload) `kv-cache-manager`
- [#64333](https://github.com/vllm-project/vllm/issues/64333) [CI/Build] pre-commit failing repo-wide: node libatomic.so.1 missing on GitHub runners (since ~17:08 UTC Oct 28)
- [#64319](https://github.com/vllm-project/vllm/issues/64319) [Bug]: Rust vllm-bench accepts --max-concurrency 0 and hangs forever (Python rejects it since #54887) `bug` `rust`
- [#64307](https://github.com/vllm-project/vllm/issues/64307) Proposal: packed KV-cache block stride for unequal per-group page sizes (1.7366x planner, byte-identical tokens) `kimi`
- [#64291](https://github.com/vllm-project/vllm/issues/64291) [Bug]: logprobs/prompt_logprobs larger than vocab size pass request validation and crash the worker in torch.topk
- [#64268](https://github.com/vllm-project/vllm/issues/64268) [Feature]: Structured outputs ignore a continued final assistant message (`continue_final_message`) `structured-output`
- [#64262](https://github.com/vllm-project/vllm/issues/64262) [RFC] Signature-driven JIT warmup v2 for Triton kernels `RFC`
- [#64202](https://github.com/vllm-project/vllm/issues/64202) [Bug]: video/jpeg frames_indices rejected when more frames than num_frames are sent
- [#64192](https://github.com/vllm-project/vllm/issues/64192) [Feature]: Add an NVIDIA RTX PRO 6000 Blackwell deployment recipe for DeepSeek-V4.1-Flash `feature request` `deepseek` `nvidia` `DSv4.1`

#### 🔒 Closed Issues
- [#3192](https://github.com/vllm-project/vllm/issues/3192) [Feature request] Output attention scores in vLLM
- [#24430](https://github.com/vllm-project/vllm/issues/24430) [Bug]: torch.AcceleratorError: CUDA error: an illegal memory access was encountered
- [#38474](https://github.com/vllm-project/vllm/issues/38474) [RFC]: Add Mooncake Store Connector for Shared KV Cache Reuse
- [#30142](https://github.com/vllm-project/vllm/issues/30142) [Bug]: `assert request.num_output_placeholders >= 0` can fail in async scheduling
- [#33930](https://github.com/vllm-project/vllm/issues/33930) [Feature]: GPU Memory Snapshotting to reduce cold starts
- [#40124](https://github.com/vllm-project/vllm/issues/40124) [Bug/Feature] TurboQuant + Hybrid MoE (Qwen3.6-35B-A3B) broken on Ampere (SM 80-86) — 13 patches with fixes
- [#38486](https://github.com/vllm-project/vllm/issues/38486) [Bug]: cuda graph takes too much memory for qwen 3.5
- [#29945](https://github.com/vllm-project/vllm/issues/29945) [Bug]: Got different `max model len` using MTP with Qwen3 next
- [#36948](https://github.com/vllm-project/vllm/issues/36948) [RFC] [Feature]: PD Disaggregation with MooncakeConnector Roadmap
- [#35792](https://github.com/vllm-project/vllm/issues/35792) [Feature]: Support MLA attention + quant fusions
- [#36796](https://github.com/vllm-project/vllm/issues/36796) [Bug]: CPU offload errors on nightly with NVIDIA GH200 Unified Memory (UMA)
- [#31683](https://github.com/vllm-project/vllm/issues/31683) [Feature]: Error Logging Redesign
- [#34232](https://github.com/vllm-project/vllm/issues/34232) [Feature]: Qwen3 realtime asr
- [#39408](https://github.com/vllm-project/vllm/issues/39408) [Usage]: qwen3-asr-1.7b pre-allocated encoder cache size limit
- [#30055](https://github.com/vllm-project/vllm/issues/30055) [RFC]: Sharded Context Parallelism for Deepseek DSA
- [#28172](https://github.com/vllm-project/vllm/issues/28172) [Bug]: Sampling with max_tokens returns result sometimes off by 1 token
- [#27173](https://github.com/vllm-project/vllm/issues/27173) [Performance]: non-optimal performance of `linear` for small batches
- [#34012](https://github.com/vllm-project/vllm/issues/34012) [Feature]: MXFP8 GEMM / Grouped GEMM Kernels for AMD
- [#38869](https://github.com/vllm-project/vllm/issues/38869) [Doc]:vllm可以支持在5090上部署么？？大家用的都是什么cuda配置啊
- [#40350](https://github.com/vllm-project/vllm/issues/40350) [Bug]: Qwen3.5-397B-A17B-NVFP4 engine hangs (Running≥1, 0 tok/s) under high concurrency on Blackwell GPUs
- [#29295](https://github.com/vllm-project/vllm/issues/29295) [RFC]: Support Dynamic Context Parallelism
- [#29762](https://github.com/vllm-project/vllm/issues/29762) [Bug]: MemoryError throw by transformers_utils.utils module's parse_safetensors_file_metadata function when loading some gptq or awq quantization models since vllm 0.11.1
- [#35467](https://github.com/vllm-project/vllm/issues/35467) [Performance]: non-optimal performance of `linear` for medium batches
- [#35577](https://github.com/vllm-project/vllm/issues/35577) [Feature] TRITON_MLA: support FP8 KV cache (needed for SM12.0 / Blackwell)
- [#35712](https://github.com/vllm-project/vllm/issues/35712) [Feature] [ROCm]: Enable AITER `fused_allreduce_rmsnorm`
- [#41208](https://github.com/vllm-project/vllm/issues/41208) [Usage]: Is there someway to accelerate deepseek v4 flash/pro load ckpt time?
- [#36440](https://github.com/vllm-project/vllm/issues/36440) [Feature] Add energy consumption metrics to benchmark suite
- [#36729](https://github.com/vllm-project/vllm/issues/36729) [Feature]: Fast KV Compaction via Attention Matching (50x compression)
- [#36916](https://github.com/vllm-project/vllm/issues/36916) [Feature]: W6A16 Support
- [#39015](https://github.com/vllm-project/vllm/issues/39015) [Bug]: torch.distributed.DistNetworkError: The server socket has failed to listen on any local network address. port: 29500, useIpv6: false, code: -98, name: EADDRINUSE, message: address already in use
- [#39356](https://github.com/vllm-project/vllm/issues/39356) [torch.compile] Proper PassManager infrastructure
- [#41152](https://github.com/vllm-project/vllm/issues/41152) Backport CVE-2026-22807 (transformers-backend trust_remote_code) to releases/v0.10.2?
- [#41157](https://github.com/vllm-project/vllm/issues/41157) CVE-2026-22807 fix not on releases/v0.11.0 — try_get_class_from_dynamic_module unguarded
- [#63811](https://github.com/vllm-project/vllm/issues/63811) [Bug][HiSparse][P/D]: Long decode collapses into all-NaN logits (sampler emits token 1023 forever) on GLM-5.3 with HiSparse + NIXL
- [#41143](https://github.com/vllm-project/vllm/issues/41143) releases/v0.10.1: CVE-2026-22807 trust_remote_code gate missing in transformers backend
- [#64046](https://github.com/vllm-project/vllm/issues/64046) [Bug]: Ascend Triton: `_penalties_kernel` dies on chained `or` (first non-default penalty request kills TP/Engine)
- [#64075](https://github.com/vllm-project/vllm/issues/64075) [Bug]: DeepSeek-OCR/DeepSeek-OCR-2 crashes on a zero-sum tiled image
- [#61919](https://github.com/vllm-project/vllm/issues/61919) [Bug]: Server exits at startup for OLMo 3: Anthropic merge probe catches only jinja2.TemplateError (TypeError from undefined tools)
- [#63278](https://github.com/vllm-project/vllm/issues/63278) [Bug][LoRA] BERT sequence classification drops LoRA on bert.pooler.dense
- [#63285](https://github.com/vllm-project/vllm/issues/63285) [Bug][LoRA] SEQ_CLS adapters saved with modules_to_save=null crash on load
- [#64333](https://github.com/vllm-project/vllm/issues/64333) [CI/Build] pre-commit failing repo-wide: node libatomic.so.1 missing on GitHub runners (since ~17:08 UTC Oct 28)
- [#59157](https://github.com/vllm-project/vllm/issues/59157) [Bug]: v0.30.0-cu129 Docker image contains torch 2.14.0+cu130 and fails with torchvision::nms does not exist
- [#62793](https://github.com/vllm-project/vllm/issues/62793) [Bug]: MRV2 adaptive verification reduces Eagle3 acceptance due to mismatched draft-prefill CUDA graph padding
- [#62801](https://github.com/vllm-project/vllm/issues/62801) [Bug]: MoE LoRA accepts incompatible round-robin expert placement with EP

### SGLang (`sgl-project/sglang`)

**Stars:** 38,325 · **Open issues:** 6,260 · **Last push:** <1h ago

There were no new releases for SGLang today, however, several significant pull requests were merged, including fixes to the LoRA adapter-state and merge-transition (#45837), as well as performance optimizations for hybrid SWA models and diffusion processes. Documentation issues were addressed in PR #47041, and the performance of the NVIDIA runtime was enhanced with a master switch for megakernel runtime optimizations (#47105). Among new issues, a noteworthy bug was reported regarding the combination of Tools with JSON-schema format, affecting Kimi-K3 and other tools by returning errors and silently dropping tool calls (#47167). This highlights ongoing challenges in ensuring compatibility between tools and schema formats.

#### ✅ Merged PRs
- [#45837](https://github.com/sgl-project/sglang/pull/45837) [Fix] diffusion: LoRA adapter-state and merge-transition fixes
- [#45295](https://github.com/sgl-project/sglang/pull/45295) [Perf] hybrid-swa: Detect hybrid SWA models from layer_types
- [#47041](https://github.com/sgl-project/sglang/pull/47041) [Doc] docs: Fix documentation normative issues
- [#46832](https://github.com/sgl-project/sglang/pull/46832) [Perf] [AMD] qwen3: Use the fused QK-norm + RoPE + KV write in decode with an fp8 KV cache
- [#46731](https://github.com/sgl-project/sglang/pull/46731) [Perf] [AMD] moe: Add tuned Triton fused MoE config for gemma-4-26B-A4B on MI355X
- [#47166](https://github.com/sgl-project/sglang/pull/47166) [Perf] observability: Send scheduler timing to the tokenizer as typed reports
- [#46825](https://github.com/sgl-project/sglang/pull/46825) [Doc] [AMD] cookbook: Add GLM-5.3 MI355X AgentX recipe
- [#45996](https://github.com/sgl-project/sglang/pull/45996) [Fix] rust_server: Give each plain-DP replica its own listener port
- [#46882](https://github.com/sgl-project/sglang/pull/46882) [Feat] grpc: Advertise media inputs in GetServerInfo
- [#47151](https://github.com/sgl-project/sglang/pull/47151) [CI] [AMD] pr-test: Run stage-c-test-large-8-gpu-amd as one job
- [#46090](https://github.com/sgl-project/sglang/pull/46090) [Perf] moe: Fold the routed scaling factor into the mega MoE pre-dispatch
- [#46949](https://github.com/sgl-project/sglang/pull/46949) [Feat] rust-server: Carry customized_info through the native /generate frontend
- [#46743](https://github.com/sgl-project/sglang/pull/46743) [Perf] LoRA: bound csgmv CUDA-graph segment grids by token count
- [#34031](https://github.com/sgl-project/sglang/pull/34031) [Refactor] spec: Make ForwardBatch the single channel for the ragged-verify layout
- [#47114](https://github.com/sgl-project/sglang/pull/47114) [Fix] rust_server: Record startup-time metrics in Rust mode
- [#47148](https://github.com/sgl-project/sglang/pull/47148) [Perf] dsv41: Run MegaGate routing in prefill
- [#47146](https://github.com/sgl-project/sglang/pull/47146) [Fix] dsv4: Capture the replay tail thread-locally while serving
- [#47145](https://github.com/sgl-project/sglang/pull/47145) [Fix] docker: update NVIDIA megakernel pin to tested commit
- [#45580](https://github.com/sgl-project/sglang/pull/45580) [Fix] linker: Order loads behind the forward that may still use the pages
- [#46705](https://github.com/sgl-project/sglang/pull/46705) [Perf] diffusion/ming: Reuse ordered RMSNorm in the DiT
- [#47122](https://github.com/sgl-project/sglang/pull/47122) [CI] slash-command: Require explicit hardware for Extra CI
- [#47033](https://github.com/sgl-project/sglang/pull/47033) [Perf] dsv41: Read Engram rows in place by default for GPU tables over NVLink
- [#46955](https://github.com/sgl-project/sglang/pull/46955) [Perf] dsv41: Use the Engram all-to-all lookup for decode and CUDA graphs
- [#47008](https://github.com/sgl-project/sglang/pull/47008) [Perf] sglang-api-types: Decode flat id lists directly instead of buffering them as Values
- [#47105](https://github.com/sgl-project/sglang/pull/47105) [Feat] [NVIDIA] runtime: Add a master switch for megakernel runtime optimizations
- [#45503](https://github.com/sgl-project/sglang/pull/45503) [Fix] distributed: Prevent unavailable PyNccl enablement
- [#47109](https://github.com/sgl-project/sglang/pull/47109) [Fix] rust-server: Answer media the multimodal processor refuses with a 400
- [#47006](https://github.com/sgl-project/sglang/pull/47006) [Doc] [AMD] dsv4: Update amd cookbook 1028
- [#46703](https://github.com/sgl-project/sglang/pull/46703) [CI] [AMD] install: Cache the AOT kernel wheel and stop wiping venv bytecode
- [#46889](https://github.com/sgl-project/sglang/pull/46889) [Test] [AMD] diffusion: Compute the VAE blend test's fp16 reference in fp32 on ROCm
- [#44322](https://github.com/sgl-project/sglang/pull/44322) [Feat] [AMD] dsa: Enable DCP on the triton sparse-MLA backend
- [#46286](https://github.com/sgl-project/sglang/pull/46286) [Fix] comfyui: Reject conditioning kwargs the SGLD adapters silently drop
- [#43697](https://github.com/sgl-project/sglang/pull/43697) [Feat] comfyui: Add SGLDWorkerStatus diagnostics node
- [#47078](https://github.com/sgl-project/sglang/pull/47078) [Fix] ci: Repair main after the #39728/#46990 merge race and RUSTSEC-2026-0414
- [#46639](https://github.com/sgl-project/sglang/pull/46639) [Perf] speculative: Rotate multi-layer EAGLE prefill input_ids 4096 ids per trip, not 8
- [#47016](https://github.com/sgl-project/sglang/pull/47016) [Fix] rust-server: Read skip_special_tokens on the OpenAI routes and pin per-request detokenization
- [#46946](https://github.com/sgl-project/sglang/pull/46946) [Feat] rust-server: Let a multimodal processor observe the final result before scheduling
- [#47071](https://github.com/sgl-project/sglang/pull/47071) [Fix] mem_cache: support prefix commits in unified MHA views
- [#46789](https://github.com/sgl-project/sglang/pull/46789) [Test] KVShard: Extend HiCache E2E with GLM accuracy coverage
- [#46991](https://github.com/sgl-project/sglang/pull/46991) [Refactor] cache: Build prefix-tree components from storage slots
- [#46990](https://github.com/sgl-project/sglang/pull/46990) [Refactor] attention: Use typed KV views and shared layer routing
- [#46989](https://github.com/sgl-project/sglang/pull/46989) [Refactor] kv-cache: Share storage interfaces across runtime consumers
- [#46988](https://github.com/sgl-project/sglang/pull/46988) [Refactor] kv-cache: Centralize request rows and allocation lifecycle
- [#46987](https://github.com/sgl-project/sglang/pull/46987) [Refactor] kv-cache: Separate byte storage from allocation identities
- [#46986](https://github.com/sgl-project/sglang/pull/46986) [Refactor] mem-cache: Bind fused drafts to routed KV views
- [#46985](https://github.com/sgl-project/sglang/pull/46985) [Refactor] mem-cache: Track transfer pins at allocator boundaries
- [#46984](https://github.com/sgl-project/sglang/pull/46984) [Refactor] mem-cache: Replace unified pool variants with a routed cache
- [#46983](https://github.com/sgl-project/sglang/pull/46983) [Fix] [AMD] attention: Avoid fused writes to translated window storage
- [#46982](https://github.com/sgl-project/sglang/pull/46982) [Refactor] mem-cache: Build cache transfers from storage plans
- [#46981](https://github.com/sgl-project/sglang/pull/46981) [Fix] hicache: Build hybrid recurrent host pools consistently
- [#46980](https://github.com/sgl-project/sglang/pull/46980) [Refactor] mem-cache: Centralize recurrent state ownership and access
- [#46979](https://github.com/sgl-project/sglang/pull/46979) [Refactor] mem-cache: Route layer access through KV subpool views
- [#46978](https://github.com/sgl-project/sglang/pull/46978) [Refactor] mem-cache: Describe KV address translation with ID spaces
- [#46977](https://github.com/sgl-project/sglang/pull/46977) [Refactor] mem_cache: Centralize unified KV capacity pricing and admission
- [#46976](https://github.com/sgl-project/sglang/pull/46976) [Refactor] mem_cache: Use one allocator for unified KV sub-pools
- [#46975](https://github.com/sgl-project/sglang/pull/46975) [Fix] mem_cache: Forward HiCache completion events to recurrent state
- [#46974](https://github.com/sgl-project/sglang/pull/46974) [Refactor] mem_cache: Build unified KV pools from layer declarations
- [#46973](https://github.com/sgl-project/sglang/pull/46973) [Refactor] mem_cache: Separate unified KV layout specifications
- [#46181](https://github.com/sgl-project/sglang/pull/46181) [Feat] rust-server: Fan control requests out to every DP rank
- [#46972](https://github.com/sgl-project/sglang/pull/46972) [Fix] mem_cache: Reject unsupported int8 checkpoints with unified memory
- [#46971](https://github.com/sgl-project/sglang/pull/46971) [Fix] mem_cache: Preserve convolution slice axis in unified hybrid pools
- [#46970](https://github.com/sgl-project/sglang/pull/46970) [Test] mem_cache: Add unified KV layout and allocator regression coverage
- [#46805](https://github.com/sgl-project/sglang/pull/46805) [Perf] [NPU] dsv4: drop host-syncing ops from the decode scheduler chain (aclnnNonzeroV2 + D2H)

#### 🐛 New Issues
- [#47167](https://github.com/sgl-project/sglang/issues/47167) [Bug] Tools + JSON-schema format cannot be combined: Kimi-K3 returns 400, glm47 / DeepSeek silently drop tool calls and invent the answer (breaks Codex --output-schema) 💬2
- [#46952](https://github.com/sgl-project/sglang/issues/46952) [HiCache] write_back eviction blocks the scheduler for hundreds of ms per call under steady load, lowering the prefix-cache hit rate compared with write_through 💬1
- [#47170](https://github.com/sgl-project/sglang/issues/47170) RFC Model Independent Parallelism Layer Boundaries and Weight Loading
- [#47031](https://github.com/sgl-project/sglang/issues/47031) [RFC] Phased upstreaming of reliable Mooncake Direct L3 loading and promotion-based prefetch
- [#47153](https://github.com/sgl-project/sglang/issues/47153) [MiniMax-M3] GB300 cookbook recipe leaves ~11-15% median interactivity on the table: dev image predates in-tree trtllm_mha page-128 support, and the recipe never engages the faster decode backend
- [#47125](https://github.com/sgl-project/sglang/issues/47125) [Bug] tokenizer post-load fixes ignore `--revision` (`revision` passed, `tokenizer_revision` read)
- [#47076](https://github.com/sgl-project/sglang/issues/47076) [Bug] [InferHunt] OpenAI validation errors expose server source paths and endpoint locations
- [#47069](https://github.com/sgl-project/sglang/issues/47069) [Bug] dumper.step() is advanced per forward, so one EAGLE speculation round spans several dump steps
- [#47067](https://github.com/sgl-project/sglang/issues/47067) [Feature] diffusion: Add HTTP API key authentication aligned with SRT
- [#47039](https://github.com/sgl-project/sglang/issues/47039) [Bug] deepseekv4.1-flash-1017: The receiving length for data has decreased.
- [#47021](https://github.com/sgl-project/sglang/issues/47021) [RFC]: Quota and global-eviction contract for HiCache L3 when the backend is a shared filesystem
- [#47019](https://github.com/sgl-project/sglang/issues/47019) [RFC] Decouple Scheduler Control from Forward Submission
- [#46959](https://github.com/sgl-project/sglang/issues/46959) [Bug] bench_serving "Accept length" is the server's lifetime average, not this run's

#### 🔒 Closed Issues
- [#25790](https://github.com/sgl-project/sglang/issues/25790) [Bug] Logprob mismatch between Prefill and Decode (Exactly at Index 96) when using FP8 KV Cache on H100
- [#33714](https://github.com/sgl-project/sglang/issues/33714) unified_cache: back up long prompts past their first (chunked) extend — currently skipped when extend exceeds chunked_prefill_size
- [#36715](https://github.com/sgl-project/sglang/issues/36715) [Feature]: Entropy-Gated Dynamic Speculative Decoding (Dynamic k in {0, K}) via Real-Time Shannon Hysteresis
- [#36675](https://github.com/sgl-project/sglang/issues/36675) [Bug]
- [#36886](https://github.com/sgl-project/sglang/issues/36886) [Bug] DCP on GLM-5.3-Flash (norope MLA): virtual locs used raw against per-rank KV buffers — index-K OOB crash + state-dependent quality corruption past max_total_num_tokens
- [#37379](https://github.com/sgl-project/sglang/issues/37379) [Model] Qwen3.5-MoE: RuntimeError when using --quantization-param-path for FP8 KV cache
- [#45426](https://github.com/sgl-project/sglang/issues/45426) [Bug] FLA kernels fail to compile on nightly-cu134-20261020: Triton removed tl.make_block_ptr
- [#37059](https://github.com/sgl-project/sglang/issues/37059) [Bug] MiMo-V2.5: any request with audio hangs the whole server under --enable-dp-attention (audio encoder reduces over the wrong TP group)
- [#37022](https://github.com/sgl-project/sglang/issues/37022) [Bug] Prefill transfer failed with exception KVTransferError Decode instance could be dead, remote mooncake session ...:port is not alive
- [#45887](https://github.com/sgl-project/sglang/issues/45887) [Bug] FP8 fused MoE swap_ab fails to compile on Triton 3.9 with rank-0 scale indexing

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,674 · **Open issues:** 2,577 · **Last push:** <1h ago

The major highlight today in the llama.cpp ecosystem is the release of version 0.8.0, which introduces the LiquidAI LFM3 family supporting various modalities like text, vision, and audio, alongside an experimental streaming-audio API with new endpoints for real-time audio processing. Significant merged features include enhancements such as the addition of `conv2d` support for Hexagon, optimizations in `IM2COL` for block-based HVX parallelization, and the implementation of a new SVE 256-bit gemm kernel. However, the day was not without issues, as a notable new bug (#31319) has emerged concerning memory issues when updating to version 0.7.0. Additionally, there are several critical evaluation bugs reported that could affect model performance and output, underscoring the need for immediate attention from developers.

#### 🚀 New Releases
- [v0.8.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0) v0.8.0
- [b11972](https://github.com/ggml-org/llama.cpp/releases/tag/b11972) b11972
- [b11971](https://github.com/ggml-org/llama.cpp/releases/tag/b11971) b11971
- [b11970](https://github.com/ggml-org/llama.cpp/releases/tag/b11970) b11970
- [b11969](https://github.com/ggml-org/llama.cpp/releases/tag/b11969) b11969
- [b11968](https://github.com/ggml-org/llama.cpp/releases/tag/b11968) b11968
- [b11966](https://github.com/ggml-org/llama.cpp/releases/tag/b11966) b11966
- [b11963](https://github.com/ggml-org/llama.cpp/releases/tag/b11963) b11963
- [b11962](https://github.com/ggml-org/llama.cpp/releases/tag/b11962) b11962
- [b11960](https://github.com/ggml-org/llama.cpp/releases/tag/b11960) b11960

#### ✅ Merged PRs
- [#31050](https://github.com/ggml-org/llama.cpp/pull/31050) Hexagon: IM2COL improvement - block based HVX parallelization
- [#31330](https://github.com/ggml-org/llama.cpp/pull/31330) tests: fix CI flakes in server cancel and sleep tests
- [#31300](https://github.com/ggml-org/llama.cpp/pull/31300) llama : remove simple batch splitting for DSV4
- [#30585](https://github.com/ggml-org/llama.cpp/pull/30585) ggml-cpu: add SVE implementation of ggml_gemv_q8_0_4x8_q8_0
- [#31178](https://github.com/ggml-org/llama.cpp/pull/31178) docs : fix DSpark confidence threshold flag name (--spec-draft-p-min)
- [#31336](https://github.com/ggml-org/llama.cpp/pull/31336) common, mtmd: bound control vector layer indices and M-RoPE position loops
- [#30412](https://github.com/ggml-org/llama.cpp/pull/30412) opencl: add tiled q4_k GEMM for adreno
- [#30995](https://github.com/ggml-org/llama.cpp/pull/30995) hexagon: add conv2d support
- [#31201](https://github.com/ggml-org/llama.cpp/pull/31201) Speed up IQ4 quant creation with pre-computed halfway points
- [#27472](https://github.com/ggml-org/llama.cpp/pull/27472) SVE 256 bit implementation of gemm_q6_K_8x8_q8_K kernel
- [#28141](https://github.com/ggml-org/llama.cpp/pull/28141) SVE 256-bit Implementation of mxfp4 gemv kernel
- [#31317](https://github.com/ggml-org/llama.cpp/pull/31317) ci(s390x): switch to Ubuntu 26.04 runners
- [#31316](https://github.com/ggml-org/llama.cpp/pull/31316) codeowners : refresh teams and maintainer PRs link
- [#31110](https://github.com/ggml-org/llama.cpp/pull/31110) sycl: work-group argmax for short TOP_K rows
- [#31188](https://github.com/ggml-org/llama.cpp/pull/31188) CUDA: fuse MoE gate/up matmuls and GLU in MMQ
- [#31310](https://github.com/ggml-org/llama.cpp/pull/31310) gguf-py: fix np_roundf dropping the sign
- [#31309](https://github.com/ggml-org/llama.cpp/pull/31309) llama.cpp : bump version to 0.8.0
- [#31283](https://github.com/ggml-org/llama.cpp/pull/31283) mtmd: enable video input support for LFM3 model family
- [#31287](https://github.com/ggml-org/llama.cpp/pull/31287) server : support tool calls in /v1/realtime
- [#31308](https://github.com/ggml-org/llama.cpp/pull/31308) sync : ggml
- [#31273](https://github.com/ggml-org/llama.cpp/pull/31273) ui: build the reasoning menu from the template effort levels
- [#31254](https://github.com/ggml-org/llama.cpp/pull/31254) tests : adjust constants to reduce irrelevant warnings
- [#30283](https://github.com/ggml-org/llama.cpp/pull/30283) vulkan: clamp A prefetch to end_k in coopmat1 int8 matmul
- [#31288](https://github.com/ggml-org/llama.cpp/pull/31288) cuda : add top-k MoE fusion for 384 experts
- [#30557](https://github.com/ggml-org/llama.cpp/pull/30557) chat : stop qwen3-coder reasoning and content before template separators
- [#31248](https://github.com/ggml-org/llama.cpp/pull/31248) ui : show save and reset settings buttons only when relevant
- [#31237](https://github.com/ggml-org/llama.cpp/pull/31237) ui: Support OGG audio attachments by converting them to WAV
- [#31214](https://github.com/ggml-org/llama.cpp/pull/31214) ui: Fix draft for new message disappearing after using "Add System Message" action
- [#31173](https://github.com/ggml-org/llama.cpp/pull/31173) ui : Search dialog

#### 🐛 New Issues
- [#31319](https://github.com/ggml-org/llama.cpp/issues/31319) Misc. bug: Updating to V0.7.0 causes memory issue `bug-unconfirmed` 💬4
- [#31298](https://github.com/ggml-org/llama.cpp/issues/31298) Eval bug: glm-ocr GGUF (Ollama conversion) has no chat_template — default framing causes template-token repetition loops; pass-through template fixes it 💬1
- [#31342](https://github.com/ggml-org/llama.cpp/issues/31342) Misc. bug: `server: chat completions with tools + tool_choice=auto + response_format=json_object fail with 400 "Failed to initialize samplers: failed to parse grammar" (generated GBNF has an empty root rule) `bug-unconfirmed`
- [#31337](https://github.com/ggml-org/llama.cpp/issues/31337) Eval bug: Metal BF16 shader fails to compile on macOS 15.5: invalid constexpr `bug-unconfirmed`
- [#31328](https://github.com/ggml-org/llama.cpp/issues/31328) LFM3: any response_format (json_schema or json_object) fails with "Unexpected empty grammar stack after accepting piece: 6 (30)"
- [#31290](https://github.com/ggml-org/llama.cpp/issues/31290) Compile bug: error: call to undeclared function '_mm512_storeu_si512'; in ggml.c (icx/clang in MSVC compat mode) `bug-unconfirmed`
- [#31302](https://github.com/ggml-org/llama.cpp/issues/31302) Eval bug: draft-mtp context reallocates its graph on every draft cycle after an image (mtmd) request

#### 🔒 Closed Issues
- [#16393](https://github.com/ggml-org/llama.cpp/issues/16393) Feature Request: tool to list and delete cached models
- [#27455](https://github.com/ggml-org/llama.cpp/issues/27455) Feature Request: expose the reasoning effort levels server side and consume them in llama-ui
- [#27110](https://github.com/ggml-org/llama.cpp/issues/27110) Eval bug:reproduces with both internal AllReduce and NCCL
- [#27309](https://github.com/ggml-org/llama.cpp/issues/27309) Misc. bug: server reports "model loaded" and binds the port after a fatal Metal OOM during init; every request then 500s
- [#18988](https://github.com/ggml-org/llama.cpp/issues/18988) Misc. bug: Stack overflow in GBNF grammar via nested repetition
- [#31319](https://github.com/ggml-org/llama.cpp/issues/31319) Misc. bug: Updating to V0.7.0 causes memory issue
- [#24164](https://github.com/ggml-org/llama.cpp/issues/24164) Misc. bug: WEBUI does not uploads audio ogg files
- [#29326](https://github.com/ggml-org/llama.cpp/issues/29326) Misc. bug: Qwen4exp, top_k_radix_cuda not compiled/used in Qwen4exp
- [#28172](https://github.com/ggml-org/llama.cpp/issues/28172) Eval bug: `-fit` flag doesn't leave enought space in VRAM for MTP, causing a crash
- [#28650](https://github.com/ggml-org/llama.cpp/issues/28650) Misc. bug: `llama-batched-bench` ignores the `--cpu-mask` (`--cpu-strict` and related batch variants)
- [#28718](https://github.com/ggml-org/llama.cpp/issues/28718) Misc. bug: 10900 fails with ggml-0.23.0
- [#28829](https://github.com/ggml-org/llama.cpp/issues/28829) Misc. bug: router (--models-max 1) hard-deadlocks on a request for a non-resident preset - 500 "resource deadlock would occur" until restart
- [#30668](https://github.com/ggml-org/llama.cpp/issues/30668) Link failure in ggml-cpu on CI
- [#29830](https://github.com/ggml-org/llama.cpp/issues/29830) Eval bug: llama-server recurrent state not cleared when it holds NaN, garbling future requests
- [#28828](https://github.com/ggml-org/llama.cpp/issues/28828) Eval bug: [Perf][HIP/RDNA3] IQ4_XS prefill collapses at ~32K prompt length
- [#28838](https://github.com/ggml-org/llama.cpp/issues/28838) Compile bug:
- [#28844](https://github.com/ggml-org/llama.cpp/issues/28844) Compile bug: Bug regarding abnormal output of the dflash2 model
- [#28848](https://github.com/ggml-org/llama.cpp/issues/28848) Eval bug: Server accepts/queues a prompt far exceeding --ctx-size and hard-fails instead of truncating (783k > 262k tokens, likely reasoning-content re-injection)
- [#28862](https://github.com/ggml-org/llama.cpp/issues/28862) Eval bug: UGM tokenizer ignores byte_fallback and emits UNK
- [#29342](https://github.com/ggml-org/llama.cpp/issues/29342) Vulkan int8-coopmat matmul on RDNA3 (#27952): RX 7900 XTX 27B benchmark data + a small boundary-safety fix
- [#31118](https://github.com/ggml-org/llama.cpp/issues/31118) Misc. bug: docs mention --spec-draft-conf-min, but that flag doesn't exist
- [#24338](https://github.com/ggml-org/llama.cpp/issues/24338) Misc. bug: In new chat `/` route draft message is being deleted when adding a system prompt

### Ollama (`ollama/ollama`)

**Stars:** 185,147 · **Open issues:** 4,478 · **Last push:** 2h ago

On October 29, 2026, Ollama released v0.40.13, which includes LFM3 GGUF fixes and enhancements to the llama-server speech functionality, along with a version bump in llama.cpp to b11963. Significant merged pull requests addressed a Metal unary crash and updated build configurations to prevent deadlocks. The newly reported issues included a documentation gap regarding the MLX runtime for the lfm3 model, as well as an error related to large MoE models in the MXFP4 format.

#### 🚀 New Releases
- [v0.40.13-rc1](https://github.com/ollama/ollama/releases/tag/v0.40.13-rc1) v0.40.13

#### ✅ Merged PRs
- [#19373](https://github.com/ollama/ollama/pull/19373) ci: pin buildx to workaround deadlock
- [#19372](https://github.com/ollama/ollama/pull/19372) llama.cpp: workaround Metal unary crash
- [#19248](https://github.com/ollama/ollama/pull/19248) cmd: show help when running ollama without arguments
- [#19360](https://github.com/ollama/ollama/pull/19360) llama.cpp: version bump b11963

#### 🐛 New Issues
- [#19369](https://github.com/ollama/ollama/issues/19369) [Documentation] lfm3 model requires the MLX runtime, which is not specified 💬6
- [#19359](https://github.com/ollama/ollama/issues/19359) Claude Desktop Conversation: ~17K initial prefill, HTTP 500 retries, MLX cache loss (0.40.11–0.40.12) 💬5
- [#19353](https://github.com/ollama/ollama/issues/19353) `qwen3.8:27b-mlx` never emits `tool_calls` when the assistant produces free-text content first (only works when content is empty) 💬1
- [#19370](https://github.com/ollama/ollama/issues/19370) macOS 27: App window and menu bar icon never appear (CoreUI can't find bundle 'com.electron.ollama') server works 💬1
- [#19356](https://github.com/ollama/ollama/issues/19356) System prompt reinforcement `feature request` 💬1
- [#19355](https://github.com/ollama/ollama/issues/19355) Please make Ollama model library on ollama.com filterable for MLX yes/no `feature request` 💬1
- [#19350](https://github.com/ollama/ollama/issues/19350) [Bug Report] Qwen3.5 9B 在 Ollama 中关闭 Thinking 后，JSON Schema 约束疑似失效并产生异常续写 `bug` 💬1
- [#19375](https://github.com/ollama/ollama/issues/19375) Error reading GGUF metadata on large MoE model with MXFP4 format `bug`
- [#19357](https://github.com/ollama/ollama/issues/19357) Memory estimate for Gemma 4 E-series (gemma4:e4b) is 3-4x actual VRAM, causing needless evictions

#### 🔒 Closed Issues
- [#11243](https://github.com/ollama/ollama/issues/11243) Multi-Modal Support
- [#19343](https://github.com/ollama/ollama/issues/19343) ollama run lfm3-audio:latest pulling manifest Error: this model requires MLX support, but the MLX runtime is not available
- [#19369](https://github.com/ollama/ollama/issues/19369) [Documentation] lfm3 model requires the MLX runtime, which is not specified
- [#18685](https://github.com/ollama/ollama/issues/18685) 0.34.4: llama-server wedges on a full-cache-hit task; all later requests to that model hang until unload (CUDA, Linux)
- [#19021](https://github.com/ollama/ollama/issues/19021) Cloud: mistral-large-4 rejects developer-role messages with HTTP 400
- [#19370](https://github.com/ollama/ollama/issues/19370) macOS 27: App window and menu bar icon never appear (CoreUI can't find bundle 'com.electron.ollama') server works
- [#19355](https://github.com/ollama/ollama/issues/19355) Please make Ollama model library on ollama.com filterable for MLX yes/no
- [#19217](https://github.com/ollama/ollama/issues/19217) Bug Report: Gemma 4 thinking cannot be reliably disabled through OpenAI-compatible API

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,253 · **Open issues:** 5,641 · **Last push:** <1h ago

Today, LiteLLM released v1.109.0-dev.1, featuring significant updates with 704 pull requests processed, including 113 additions, 312 fixes, and various improvements and removals. Notable merged PRs include enhancements to the health check system for audio models, as well as a new durable event ledger writer in the accounting feature. A few major fixes were also addressed, like improvements in streaming and router functionalities. However, a notable new issue emerged, listed as #48773, which highlights a bug where responses bridge duplicates in tool-call arguments during streaming.

#### 🚀 New Releases
- [v1.109.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.109.0-dev.1) v1.109.0-dev.1
- [v1.106.6](https://github.com/BerriAI/litellm/releases/tag/v1.106.6) v1.106.6
- [v1.105.7](https://github.com/BerriAI/litellm/releases/tag/v1.105.7) v1.105.7

#### ✅ Merged PRs
- [#48966](https://github.com/BerriAI/litellm/pull/48966) fix(proxy): stop log lines from leaving terminal colors on
- [#47730](https://github.com/BerriAI/litellm/pull/47730) fix(health): ask OpenAI and Azure audio chat models for audio output in the health check probe
- [#48954](https://github.com/BerriAI/litellm/pull/48954) test(router): set string fallback targets after Router init in the sdk cooldown cases (LIT-10238)
- [#48853](https://github.com/BerriAI/litellm/pull/48853) refactor(model-catalog): parse, lower and validate the catalog into typed prices
- [#48814](https://github.com/BerriAI/litellm/pull/48814) fix(vertex_ai)!: send the caller's anthropic-version in the Vertex Claude /v1/messages body, not the header
- [#48902](https://github.com/BerriAI/litellm/pull/48902) test(responses): audit #47445
- [#48918](https://github.com/BerriAI/litellm/pull/48918) test(proxy): audit #46997
- [#48703](https://github.com/BerriAI/litellm/pull/48703) refactor(images): remove dall-e-2 and dall-e-3 code paths
- [#48947](https://github.com/BerriAI/litellm/pull/48947) ci: run zizmor with --no-ignores and move the spend logs and cost map guards to pull_request
- [#48898](https://github.com/BerriAI/litellm/pull/48898) test(extraction): audit #47473
- [#48839](https://github.com/BerriAI/litellm/pull/48839) refactor(router): fence the router surface and document the router-core boundary
- [#48755](https://github.com/BerriAI/litellm/pull/48755) fix(streaming): keep merged think tags balanced and split SSE lines only on CR/LF
- [#48945](https://github.com/BerriAI/litellm/pull/48945) fix(vertex-ai): add batch above 200k and image output batch prices for gemini models
- [#48943](https://github.com/BerriAI/litellm/pull/48943) fix(router): reject string fallback targets at Router init (LIT-10238)
- [#48861](https://github.com/BerriAI/litellm/pull/48861) test(gemini): cover every web source for a grounded passage
- [#48903](https://github.com/BerriAI/litellm/pull/48903) refactor(types): replace Any with proven types in 28 files
- [#48883](https://github.com/BerriAI/litellm/pull/48883) feat(accounting): add durable event ledger writer
- [#43458](https://github.com/BerriAI/litellm/pull/43458) fix(websearch): strip Claude Code instructional prefix in short-circuit search
- [#47618](https://github.com/BerriAI/litellm/pull/47618) feat(proxy): accept request priority from the x-litellm-priority header
- [#48919](https://github.com/BerriAI/litellm/pull/48919) test(spend): audit #47506
- [#48735](https://github.com/BerriAI/litellm/pull/48735) feat(tencent): add Seedream image generation and editing through TokenHub
- [#48875](https://github.com/BerriAI/litellm/pull/48875) feat(router): add deployment rpd and tpd daily limits to enforce_model_rate_limits
- [#48905](https://github.com/BerriAI/litellm/pull/48905) fix(ci): flag any schema.prisma change inside model LiteLLM_SpendLogs in the spend logs guard
- [#47731](https://github.com/BerriAI/litellm/pull/47731) feat(skills): add a litellm-setup agent skill
- [#48910](https://github.com/BerriAI/litellm/pull/48910) test(routing): audit #46601
- [#47722](https://github.com/BerriAI/litellm/pull/47722) feat(proxy)!: model family and access group entries in model_max_budget
- [#48745](https://github.com/BerriAI/litellm/pull/48745) fix(gemini): preserve every grounding web source
- [#48601](https://github.com/BerriAI/litellm/pull/48601) feat(ui): search and multi-select tools in the MCP toolset editor
- [#48702](https://github.com/BerriAI/litellm/pull/48702) feat(daily-activity): per-guardrail spend breakdown in user, team and organization daily activity
- [#48911](https://github.com/BerriAI/litellm/pull/48911) fix(migration_data_checks): size btree entries by the bytes Postgres stores (LIT-10244)
- [#48941](https://github.com/BerriAI/litellm/pull/48941) ci(spend-logs-guard): run only on pull_request_target, re-run by hand after approving
- [#48913](https://github.com/BerriAI/litellm/pull/48913) fix(router): cool down failing deployments when fallbacks use string targets (LIT-10238)
- [#48920](https://github.com/BerriAI/litellm/pull/48920) fix(aiohttp_transport): keep the owned session open while a response stream is still being read (LIT-10237)
- [#48923](https://github.com/BerriAI/litellm/pull/48923) fix(logging): bill each SDK call its own native Bedrock guardrail trace when calls share one metadata dict
- [#48901](https://github.com/BerriAI/litellm/pull/48901) fix(ci): keep the spend logs guard approval through a later COMMENTED review (LIT-10242)
- [#48891](https://github.com/BerriAI/litellm/pull/48891) fix(pricing): add databricks priority pay per token prices
- [#48689](https://github.com/BerriAI/litellm/pull/48689) fix(guardrails)!: make hide-secrets honor skip_tool_message_in_guardrail
- [#48904](https://github.com/BerriAI/litellm/pull/48904) fix(ci): spend logs guard requires the approval to cover the head's spend-log lines
- [#48862](https://github.com/BerriAI/litellm/pull/48862) feat(accounting): add accounting contracts, PricingSnapshot and ledger schema (LIT-10193)
- [#48807](https://github.com/BerriAI/litellm/pull/48807) fix(openai)!: send the whole reasoning_effort dict when chat is bridged to Responses
- [#48874](https://github.com/BerriAI/litellm/pull/48874) fix(anthropic): map model_context_window_exceeded stop reason to length
- [#47682](https://github.com/BerriAI/litellm/pull/47682) fix(files)!: scope provider and model file lists to the caller's managed files under require_managed_files
- [#47537](https://github.com/BerriAI/litellm/pull/47537) fix(responses)!: bill partial usage on mid-stream failures and report bridged /v1/messages failures to the proxy
- [#48890](https://github.com/BerriAI/litellm/pull/48890) fix(ui): bundle the Aria avatar so it loads in every deployment
- [#48328](https://github.com/BerriAI/litellm/pull/48328) fix(streaming): surface upstream abort as server errors (LIT-10159)
- [#48852](https://github.com/BerriAI/litellm/pull/48852) refactor(rust-bridge): require the native extension
- [#47263](https://github.com/BerriAI/litellm/pull/47263) fix(aiohttp_openai): forward service_tier in transform_response
- [#47712](https://github.com/BerriAI/litellm/pull/47712) fix(cli): let the proxy decide when a classic lite login token has expired
- [#48884](https://github.com/BerriAI/litellm/pull/48884) fix(pricing): sync databricks model prices
- [#48885](https://github.com/BerriAI/litellm/pull/48885) refactor(ui): use the shadcn Kbd primitive for keyboard hints
- [#48680](https://github.com/BerriAI/litellm/pull/48680) fix(proxy): backport #46712 gzip scoping and off-loop compression to stable/1.106.x for v1.106.6
- [#43874](https://github.com/BerriAI/litellm/pull/43874) feat(providers): add ZeroGPU as an OpenAI-compatible provider
- [#48865](https://github.com/BerriAI/litellm/pull/48865) fix(proxy): account for media in combined TPM reservations
- [#48750](https://github.com/BerriAI/litellm/pull/48750) fix(gemini)!: accept Google's current Managed Agents fields on create and interactions
- [#48879](https://github.com/BerriAI/litellm/pull/48879) fix(cost-map): add mistral/deepseek-v4-1-flash-1017
- [#48871](https://github.com/BerriAI/litellm/pull/48871) feat(decisions): support Ollama decision models
- [#48769](https://github.com/BerriAI/litellm/pull/48769) fix(azure): share one Entra token request per worker and audit #47348
- [#47971](https://github.com/BerriAI/litellm/pull/47971) fix(audio): reject unsupported transcription providers with 400
- [#48752](https://github.com/BerriAI/litellm/pull/48752) fix(batches): stop unbillable batches from blocking file deletes and new-batch polling
- [#48817](https://github.com/BerriAI/litellm/pull/48817) fix(router): pass lifecycle events through on background OpenAI responses streams that cannot fall back
- [#48873](https://github.com/BerriAI/litellm/pull/48873) fix(router): drop the deployment rpm filter from enable_pre_call_checks
- [#48872](https://github.com/BerriAI/litellm/pull/48872) fix(images): normalize absent images in async edits
- [#48798](https://github.com/BerriAI/litellm/pull/48798) fix(responses)!: answer 400 before counting a lone Responses built-in tool on Claude
- [#48805](https://github.com/BerriAI/litellm/pull/48805) fix(count_tokens)!: audit #47441 and keep the framed estimate for Bedrock count models from the cost map
- [#48691](https://github.com/BerriAI/litellm/pull/48691) fix: bring rc/1.108.0 to parity with the v1.106.x patch fixes
- [#48679](https://github.com/BerriAI/litellm/pull/48679) fix(proxy): backport #46712 gzip scoping and off-loop compression to stable/1.105.x for v1.105.7
- [#48778](https://github.com/BerriAI/litellm/pull/48778) fix(mistral): replay assistant reasoning as a Mistral thinking chunk
- [#48858](https://github.com/BerriAI/litellm/pull/48858) chore(cost-map): fill fireworks spot router capability fields from base models
- [#48717](https://github.com/BerriAI/litellm/pull/48717) fix(router)!: resolve trusted JEV connection environment references
- [#48849](https://github.com/BerriAI/litellm/pull/48849) fix(baseten): price the two decision models at their published input rates
- [#48720](https://github.com/BerriAI/litellm/pull/48720) fix(otel): suppress spans for excluded proxy requests
- [#47657](https://github.com/BerriAI/litellm/pull/47657) feat(proxy): log one line per token count call
- [#48594](https://github.com/BerriAI/litellm/pull/48594) fix(anthropic-messages): merge deployment and client anthropic-beta instead of overwriting
- [#48825](https://github.com/BerriAI/litellm/pull/48825) fix(cost-map)!: price Mistral Large 4 at its list price now that the launch sale ended
- [#42014](https://github.com/BerriAI/litellm/pull/42014) fix(chatgpt): derive the upstream session id from prompt_cache_key
- [#48463](https://github.com/BerriAI/litellm/pull/48463) fix(vertex-ai): preserve image size aspect ratios
- [#48675](https://github.com/BerriAI/litellm/pull/48675) fix(otel)!: label configured pass-through routes litellm.passthrough instead of chat
- [#48616](https://github.com/BerriAI/litellm/pull/48616) fix(azure): map context_length_exceeded error code to ContextWindowExceededError
- [#48705](https://github.com/BerriAI/litellm/pull/48705) fix(images): honor max_retries and prevent Router retry amplification
- [#48595](https://github.com/BerriAI/litellm/pull/48595) fix(proxy): store boolean settings as JSON booleans on /config/field/update
- [#48708](https://github.com/BerriAI/litellm/pull/48708) fix(responses): forward top-level moderation param to OpenAI
- [#48850](https://github.com/BerriAI/litellm/pull/48850) fix(ui): show reasoning in the Playground for /v1/responses
- [#48851](https://github.com/BerriAI/litellm/pull/48851) fix(ui): match simple auto router models to advanced setup
- [#48844](https://github.com/BerriAI/litellm/pull/48844) fix(refuseless): update GLM 5.3 and DeepSeek V4.1 Flash prices
- [#48701](https://github.com/BerriAI/litellm/pull/48701) fix(router)!: isolate child tier pins in user turn mode
- [#48707](https://github.com/BerriAI/litellm/pull/48707) fix(ollama): forward embedding credentials, headers and timeout
- [#48706](https://github.com/BerriAI/litellm/pull/48706) fix(huggingface): stop forcing truncate=false on TEI rerank and pass truncate params through
- [#47772](https://github.com/BerriAI/litellm/pull/47772) feat(rust): one typed decline from core up to each host
- [#48042](https://github.com/BerriAI/litellm/pull/48042) refactor(rust): adopt one error discipline across litellm-rust with source chains and Report
- [#48041](https://github.com/BerriAI/litellm/pull/48041) refactor(http): build outbound requests as reqwest::Request
- [#48704](https://github.com/BerriAI/litellm/pull/48704) fix(proxy/auth): apply max_end_user_budget_id to end users without a row on cached keys
- [#48188](https://github.com/BerriAI/litellm/pull/48188) fix(cost-map): rolling provider pricing, capability and retirement audit
- [#48753](https://github.com/BerriAI/litellm/pull/48753) fix(vertex_ai): send Vertex Claude labels as X-Vertex-AI-Labels header instead of the request body
- [#47968](https://github.com/BerriAI/litellm/pull/47968) fix(http): honor transport settings for Rust WebSockets
- [#48039](https://github.com/BerriAI/litellm/pull/48039) build(rust): upgrade reqwest to 0.13 and move MCP out of litellm-http
- [#48791](https://github.com/BerriAI/litellm/pull/48791) test(scim): audit #47544
- [#48821](https://github.com/BerriAI/litellm/pull/48821) test(mcp): audit #47422
- [#48804](https://github.com/BerriAI/litellm/pull/48804) test(proxy): audit #47352
- [#48784](https://github.com/BerriAI/litellm/pull/48784) test(proxy): audit #47358
- [#48741](https://github.com/BerriAI/litellm/pull/48741) feat(cli): keep the ChatGPT login with lite codex --subscription
- [#47693](https://github.com/BerriAI/litellm/pull/47693) feat(proxy): per-provider and per-model rpm/tpm requirements for enforce_project_model_quota
- [#48801](https://github.com/BerriAI/litellm/pull/48801) test(nvidia_riva): audit #41021
- [#47832](https://github.com/BerriAI/litellm/pull/47832) fix(streaming): exact-match the SSE [DONE] marker in BaseModelResponseIterator
- [#48737](https://github.com/BerriAI/litellm/pull/48737) refactor(fallback-generalizations)!: remove the legacy extends and mixed-rule shim
- [#48794](https://github.com/BerriAI/litellm/pull/48794) test(router): audit #41368
- [#48792](https://github.com/BerriAI/litellm/pull/48792) test(router): audit #47376
- [#48777](https://github.com/BerriAI/litellm/pull/48777) test(decisions): audit #47508
- [#48799](https://github.com/BerriAI/litellm/pull/48799) test(router): audit #47498
- [#47672](https://github.com/BerriAI/litellm/pull/47672) fix(router): continue Responses mid-stream fallbacks on models without assistant prefill
- [#48803](https://github.com/BerriAI/litellm/pull/48803) test(anthropic): audit #47478
- [#48800](https://github.com/BerriAI/litellm/pull/48800) test(token_counter): audit #47586
- [#48764](https://github.com/BerriAI/litellm/pull/48764) fix(anthropic): let drop_params drop speed on claude-opus-4-7 after Anthropic removed its fast mode
- [#48782](https://github.com/BerriAI/litellm/pull/48782) test(anthropic, bedrock): audit #47489
- [#48788](https://github.com/BerriAI/litellm/pull/48788) test(files): audit #40621

#### 🐛 New Issues
- [#48773](https://github.com/BerriAI/litellm/issues/48773) [Bug]: Responses bridge duplicates tool-call arguments in /v1/chat/completions streaming (azure/responses) `bug` `llm translation` 💬5
- [#48813](https://github.com/BerriAI/litellm/issues/48813) [Bug]: OCI Gemini ignores every system message except the last one `llm translation` 💬2
- [#48809](https://github.com/BerriAI/litellm/issues/48809) [Bug]: Team-member budget exhaustion still blocks model discovery and self-service info routes in 1.104.4 (follow-up to #27923) `llm translation`
- [#48743](https://github.com/BerriAI/litellm/issues/48743) [Bug]: Gemini grounding annotations drop additional sources for a passage `llm translation` 💬1
- [#48937](https://github.com/BerriAI/litellm/issues/48937) [Bug]: streamed chat completions logged at $0 when the upstream reports usage.cost: 0 (spend and budgets read 0 for all streaming traffic) `llm translation` 💬1
- [#48832](https://github.com/BerriAI/litellm/issues/48832) [Bug]: responses() sends a function_call_output of empty text parts to the provider as the JSON text of the list `llm translation` 💬1
- [#48760](https://github.com/BerriAI/litellm/issues/48760) key model allowlist is enforced per-route, so generateContent, streamGenerateContent and image routes still serve a denied model (gap left by #41852) `llm translation` 💬1
- [#48719](https://github.com/BerriAI/litellm/issues/48719) [Bug]: OpenTelemetry set_attributes still fails on responses without .get() (DecisionsResponse, MCP CallToolResult, list) 💬1
- [#48712](https://github.com/BerriAI/litellm/issues/48712) [Bug]: `parent_otel_span` goes into the response cache key, so the cache never hits with otel `bug` `llm translation` 💬1
- [#48887](https://github.com/BerriAI/litellm/issues/48887) [Bug]: Context window errors reported inside a stream skip fallbacks (Responses API response.failed) `llm translation`
- [#48808](https://github.com/BerriAI/litellm/issues/48808) [Feature]: Support Ollama decision models through the Decisions API `llm translation`
- [#48711](https://github.com/BerriAI/litellm/issues/48711) [Bug]: Playground never shows reasoning on /v1/responses (listens for the removed `response.reasoning.delta` event) `llm translation`
- [#48836](https://github.com/BerriAI/litellm/issues/48836) [Bug]: SGLang context overflow wording maps to plain BadRequestError `llm translation`
- [#48831](https://github.com/BerriAI/litellm/issues/48831) [Bug]: Gemini conversion drops a parallel tool call when two calls have the same name and arguments, leaving more functionResponse than functionCall parts `llm translation`
- [#48796](https://github.com/BerriAI/litellm/issues/48796) [Bug]: token_counter rejects assistant refusal content parts `llm translation`
- [#48770](https://github.com/BerriAI/litellm/issues/48770) [Feature]: Opt-in mapping of backend engine-busy 503s to 429 so callers rate-limit handling applies `llm translation`
- [#48765](https://github.com/BerriAI/litellm/issues/48765) [Feature]: Per-deployment OAuth M2M client id and secret for Databricks models `enhancement` `llm translation`
- [#48744](https://github.com/BerriAI/litellm/issues/48744) [Bug]: Responses bridge drops streamed citation events across annotation batches `llm translation`
- [#48721](https://github.com/BerriAI/litellm/issues/48721) [Bug]: finish reasons that mean failure or truncation are reported as "stop" `llm translation`
- [#48738](https://github.com/BerriAI/litellm/issues/48738) [Bug]: Gemini grounding conversion keeps only the first source for each passage `llm translation`
- [#48730](https://github.com/BerriAI/litellm/issues/48730) [Bug]: Responses streaming omits citation events present in the final response `llm translation`
- [#48731](https://github.com/BerriAI/litellm/issues/48731) [Bug]: o3, o4-mini and o3-mini silently rewrite the system prompt as a user message (OpenAI and Azure) `bug` `llm translation`
- [#48722](https://github.com/BerriAI/litellm/issues/48722) [Bug]: get_model_info and cost_per_token do not resolve the documented openai/responses/<model> syntax `llm translation`
- [#48716](https://github.com/BerriAI/litellm/issues/48716) [Bug]: OpenAI-compatible streaming keeps finish_reason "stop" when the response has tool calls, non-streaming reports "tool_calls" `llm translation`
- [#48715](https://github.com/BerriAI/litellm/issues/48715) [Bug]: Gemini streaming reports finish_reason "length" for a tool call that ends with MAX_TOKENS, non-streaming reports "tool_calls" `llm translation`

#### 🔒 Closed Issues
- [#34388](https://github.com/BerriAI/litellm/issues/34388) LiteLLM forwards unsupported strict tool fields to Bedrock Claude models, causing 400 errors and hanging requests
- [#47904](https://github.com/BerriAI/litellm/issues/47904) [Bug]: Backport eMudhra root CA fix (#47670) to stable/1.106.x — 1.106.x images still trust emSign ECC Root CA - G3
- [#48773](https://github.com/BerriAI/litellm/issues/48773) [Bug]: Responses bridge duplicates tool-call arguments in /v1/chat/completions streaming (azure/responses)
- [#34143](https://github.com/BerriAI/litellm/issues/34143) [Bug]:
- [#45546](https://github.com/BerriAI/litellm/issues/45546) [Bug]: Mistral: replayed `reasoning_content` is dropped instead of being sent as a `thinking` chunk; Mistral's docs say to always replay it
- [#36150](https://github.com/BerriAI/litellm/issues/36150) [Feature]: Add an official QwenCloud migration path for the existing DashScope provider
- [#47814](https://github.com/BerriAI/litellm/issues/47814) [Bug]: Responses TPM reservation counts base64 in custom_tool_call_output images as text and doubles the estimate
- [#34205](https://github.com/BerriAI/litellm/issues/34205) ai dumb
- [#43826](https://github.com/BerriAI/litellm/issues/43826) [Bug]: jev_classifier_config.api_key does not resolve os.environ/ references
- [#31562](https://github.com/BerriAI/litellm/issues/31562) [Bug]: BaseModelResponseIterator falsely terminates stream when tool-call arguments contain "[DONE]"
- [#34228](https://github.com/BerriAI/litellm/issues/34228) [Bug]:
- [#43012](https://github.com/BerriAI/litellm/issues/43012) [Bug]: Anthropic stop_reason model_context_window_exceeded is mapped to finish_reason "stop"
- [#47258](https://github.com/BerriAI/litellm/issues/47258) [Bug]: aiohttp_openai drops `service_tier` from chat completion responses
- [#34385](https://github.com/BerriAI/litellm/issues/34385) API error
- [#46835](https://github.com/BerriAI/litellm/issues/46835) [Bug]: aimage_edit() turns a missing image into [None] instead of [], crashing Black Forest Labs image edit with an uncaught ValueError
- [#47125](https://github.com/BerriAI/litellm/issues/47125) Complexity Router Tier Pin Flips Between Models Across Proxy Workers
- [#32308](https://github.com/BerriAI/litellm/issues/32308) [Bug]: enable_weighted_failover loses to a stale affinity pin and skips the healthy same-group deployment
- [#47952](https://github.com/BerriAI/litellm/issues/47952) [Bug]: /v1/messages/count_tokens returns 500 for a `search_result` block, and for any content block type the local counter does not list
- [#34096](https://github.com/BerriAI/litellm/issues/34096) [Bug]: "Models + Endpoints" page shows "No models found" even though the models work
- [#34111](https://github.com/BerriAI/litellm/issues/34111) [Bug]: Cohere models incompatible with 'num_generations'
- [#34243](https://github.com/BerriAI/litellm/issues/34243) [Bug]: /v1/messages/count_tokens returns 500 on provider-counter errors instead of falling back to local tokenizer
- [#34248](https://github.com/BerriAI/litellm/issues/34248) [BUG] AWS Bedrock Converse prompt caching 1h TTL fails with HTTP 400: "messages.0.content.0.text.cache_control.ephemeral.ttl: Extra inputs are not permitted"
- [#34297](https://github.com/BerriAI/litellm/issues/34297) UI: per-model rate limits (model_rpm_limit/model_tpm_limit) not settable on internal users
- [#34326](https://github.com/BerriAI/litellm/issues/34326) [Feature]: Partition DDL in SpendLogs cleanup causes service outage when it collides with routine PostgreSQL maintenance
- [#34351](https://github.com/BerriAI/litellm/issues/34351) Chat completions bridged to Responses drops usage on response.incomplete
- [#34360](https://github.com/BerriAI/litellm/issues/34360) v1.93.0 release image: cosign verify reports no signatures found
- [#34422](https://github.com/BerriAI/litellm/issues/34422) [Bug]: DELETE /openai/v1/responses/{id} returns 500 instead of 404 when response does not exist
- [#34367](https://github.com/BerriAI/litellm/issues/34367) [Feature]: Model Group Budget Limits for API Key Usage
- [#47828](https://github.com/BerriAI/litellm/issues/47828) [Bug]: Chat completions TPM reservation ignores image/audio content blocks (messages path counts text only)
- [#34895](https://github.com/BerriAI/litellm/issues/34895) NOT WORKING LITELLM
- [#34384](https://github.com/BerriAI/litellm/issues/34384) hello
- [#43541](https://github.com/BerriAI/litellm/issues/43541) [Bug]: OTel V2 still roots an 'auth <route>' trace for routes excluded via OTEL_PYTHON_FASTAPI_EXCLUDED_URLS
- [#47261](https://github.com/BerriAI/litellm/issues/47261) [Bug]: Ollama embeddings ignore api_key, extra headers and timeout
- [#43840](https://github.com/BerriAI/litellm/issues/43840) Add "kimi-k2.5" in "model_prices_and_context_window.json"
- [#42073](https://github.com/BerriAI/litellm/issues/42073) [Bug]: Proxy /v1/messages/count_tokens sends third-party api_key to api.anthropic.com when deployment uses custom api_base (anthropic/* model)
- [#31149](https://github.com/BerriAI/litellm/issues/31149) [Bug]: Anthropic `/v1/messages/count_tokens` ignores custom `api_base` despite repeated production reports
- [#34296](https://github.com/BerriAI/litellm/issues/34296) Access Groups do not enforce as an allow-list (additive grant only; name-in-models bricks the key)
- [#43456](https://github.com/BerriAI/litellm/issues/43456) [Bug]: websearch_interception short-circuit sends the whole user message as the search query (Claude Code's "Perform a web search for the query:" prefix included)
- [#48743](https://github.com/BerriAI/litellm/issues/48743) [Bug]: Gemini grounding annotations drop additional sources for a passage
- [#42185](https://github.com/BerriAI/litellm/issues/42185) [Bug]: /v1/images/edits with no `image` part returns 500 with a raw Python TypeError instead of 400
- [#48392](https://github.com/BerriAI/litellm/issues/48392) System.Threading.Tasks.Task
- [#39487](https://github.com/BerriAI/litellm/issues/39487) litellm._turn_on_debug()
- [#35454](https://github.com/BerriAI/litellm/issues/35454) d
- [#44495](https://github.com/BerriAI/litellm/issues/44495) [Feature]:
- [#46422](https://github.com/BerriAI/litellm/issues/46422) [Bug]: Discussion: Reliability of Jev-Based Decisions with External Context
- [#40678](https://github.com/BerriAI/litellm/issues/40678) sirf ek hi bar start hua he uske bad stat hi nhai h irha he or linits bhi de rha he linit less banao
- [#46285](https://github.com/BerriAI/litellm/issues/46285) [Bug]: max_end_user_budget_id is dropped for end users without a row when the virtual key is cached
- [#46182](https://github.com/BerriAI/litellm/issues/46182) [Bug]: router_settings allowed_fails: 3 never cools a deployment down, because 3 is the default
- [#43841](https://github.com/BerriAI/litellm/issues/43841) Add "qwen3.8-27b" in "model_prices_and_context_window.json"
- [#43842](https://github.com/BerriAI/litellm/issues/43842) Add "glm-5.3" in "model_prices_and_context_window.json"
- [#48695](https://github.com/BerriAI/litellm/issues/48695) [Bug]: GET /customer/list (and /end_user/list) loads every end-user row in one request
- [#47633](https://github.com/BerriAI/litellm/issues/47633) [Feature]: Opt-in session model repinning after a successful content-policy fallback
- [#48808](https://github.com/BerriAI/litellm/issues/48808) [Feature]: Support Ollama decision models through the Decisions API
- [#40688](https://github.com/BerriAI/litellm/issues/40688) [Feature]:
- [#47431](https://github.com/BerriAI/litellm/issues/47431) `image_generation`: `max_retries` is ignored for OpenAI-compatible providers (always 2 retries)
- [#46146](https://github.com/BerriAI/litellm/issues/46146) [Bug]: /v1/responses silently drops the top-level `moderation` param, so OpenAI moderation never runs
- [#48711](https://github.com/BerriAI/litellm/issues/48711) [Bug]: Playground never shows reasoning on /v1/responses (listens for the removed `response.reasoning.delta` event)
- [#46050](https://github.com/BerriAI/litellm/issues/46050) [Bug]: Reranker forcefully sets truncate to true for TEI
- [#48738](https://github.com/BerriAI/litellm/issues/48738) [Bug]: Gemini grounding conversion keeps only the first source for each passage
- [#48730](https://github.com/BerriAI/litellm/issues/48730) [Bug]: Responses streaming omits citation events present in the final response

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,720 · **Open issues:** 412 · **Last push:** <1h ago

On October 29, 2026, Unsloth released version v0.1.912-beta, introducing a fun "Trick or Treat" feature that presents users with eleven Halloween themes, along with performance optimizations for faster launching, Linux tool calls, and model loading. Among significant code changes, the merge of PR #15855 improved host sync efficiency, while PR #15797 enhanced the MiniMax-H3 context guard to maintain performance during denoising steps. Notably, new issues include a bug report (#15735) regarding missing Safetensors for the Qwen-Image-2.1-Turbo on-device feature, indicating a potential area for immediate attention and user concern.

#### 🚀 New Releases
- [v0.1.912-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.912-beta) Trick or Treat + Optimizations

#### ✅ Merged PRs
- [#15887](https://github.com/unslothai/unsloth/pull/15887) Studio: keep refusing a symlinked spill where there is no O_NOFOLLOW (Windows)
- [#15855](https://github.com/unslothai/unsloth/pull/15855) GRPO: take the per-step host syncs out of the loss path
- [#15862](https://github.com/unslothai/unsloth/pull/15862) Studio tests: skip rag_conn where this Python's sqlite3 cannot load extensions
- [#15546](https://github.com/unslothai/unsloth/pull/15546) Desktop: re-enable GPU compositing on NVIDIA X11 with driver 610 or newer
- [#15780](https://github.com/unslothai/unsloth/pull/15780) Fix OpenCode Go session headers in Studio
- [#15851](https://github.com/unslothai/unsloth/pull/15851) Backend CI: split the fsdp2 Repo tests shard in two
- [#15833](https://github.com/unslothai/unsloth/pull/15833) Studio: skip the Keep resident page-lock when the llama-server --help probe is inconclusive
- [#15838](https://github.com/unslothai/unsloth/pull/15838) Tests: FP8 routing tests pin the NVIDIA path so they pass on ROCm runners
- [#15777](https://github.com/unslothai/unsloth/pull/15777) Block CUDA graphs: only release the cudagraph pool for tree functions the block backend compiled
- [#15829](https://github.com/unslothai/unsloth/pull/15829) Studio diffusion: load the int8 GEMM operands through TMA descriptors on sm120
- [#15730](https://github.com/unslothai/unsloth/pull/15730) Mamba LoRA: apply a trained dt_proj / x_proj / out_proj adapter in eval and cached decode
- [#15828](https://github.com/unslothai/unsloth/pull/15828) Studio: emit no legacy load flag when the llama-server --help probe is inconclusive
- [#15830](https://github.com/unslothai/unsloth/pull/15830) Studio tests: drain the background sandbox mover between tests
- [#15815](https://github.com/unslothai/unsloth/pull/15815) CI: turn update checks off in every job that drives a browser
- [#15791](https://github.com/unslothai/unsloth/pull/15791) FP8 scaled_mm backend: send 17-64 rows to torch._scaled_mm when the 16-bit weight spills L2 (sm89)
- [#15779](https://github.com/unslothai/unsloth/pull/15779) checkpoint_skip_layers="auto": skip the planning collective under DDP.join()
- [#15776](https://github.com/unslothai/unsloth/pull/15776) Studio native cache write: recapture when an offload moves weights before the live-read swap
- [#15796](https://github.com/unslothai/unsloth/pull/15796) Studio: keep MiniMax-H3's streamed top-level group on the card between denoise steps
- [#15825](https://github.com/unslothai/unsloth/pull/15825) Studio: test that a batched fine-tune stays in its own account
- [#15822](https://github.com/unslothai/unsloth/pull/15822) Studio: raise the startup bundle budget by the Trick or treat row's growth
- [#15809](https://github.com/unslothai/unsloth/pull/15809) Studio: batch MoE fine-tuning jobs with per-job expert LoRA
- [#15768](https://github.com/unslothai/unsloth/pull/15768) Block CUDA graphs: turn on automatically for fixed-shape, launch-bound LoRA runs
- [#15693](https://github.com/unslothai/unsloth/pull/15693) Keep image and video models loaded beside chat models on Apple Silicon
- [#15797](https://github.com/unslothai/unsloth/pull/15797) Studio: size FLUX.1 Kontext guard, preview and compile shape from its ~1 MP render
- [#15584](https://github.com/unslothai/unsloth/pull/15584) FP8: skip the compiled wrapper for rowwise FP8 inference linears
- [#15505](https://github.com/unslothai/unsloth/pull/15505) MoE heuristic dW config: 128-wide N tile for gpt-oss K = 2880
- [#15525](https://github.com/unslothai/unsloth/pull/15525) SDPA decode: keep the caller's backend policy when avoiding cuDNN
- [#15529](https://github.com/unslothai/unsloth/pull/15529) Flex small-smem tiles: keep float32 Gemma 3 off flex on sm86 / sm89, tile forced no-grad calls
- [#15805](https://github.com/unslothai/unsloth/pull/15805) studiobench: seed the browser with update notifications off
- [#15803](https://github.com/unslothai/unsloth/pull/15803) Tests: allow the zoo's padded logits row stride in the fused linear adapter check
- [#15514](https://github.com/unslothai/unsloth/pull/15514) Run packed rows of head-dim-routed flex decoders through varlen SDPA
- [#15744](https://github.com/unslothai/unsloth/pull/15744) Cross entropy: 8192-wide chunks at 4 warps for the chunked forward on sm120
- [#15801](https://github.com/unslothai/unsloth/pull/15801) Frontend tests: follow the desktop quit hiding the window
- [#15742](https://github.com/unslothai/unsloth/pull/15742) Multi-LoRA: per-adapter LoRA on fused MoE experts
- [#15772](https://github.com/unslothai/unsloth/pull/15772) Studio: list a Qwen-Image-2.1-Turbo base pipeline cached in its FP8 mirror On Device
- [#15741](https://github.com/unslothai/unsloth/pull/15741) Studio: give each batched fine-tuning job its own fp16 loss scale
- [#15774](https://github.com/unslothai/unsloth/pull/15774) CI: hold the unpinned version-compat lanes below torch 2.15 until torchvision 0.30 is published
- [#15752](https://github.com/unslothai/unsloth/pull/15752) Tensor parallel: batch_rebalance and group_by_length samplers give tp peers the same rows
- [#15738](https://github.com/unslothai/unsloth/pull/15738) Studio video: read an LTX-2 checkpoint header once per file when probing for 2.3
- [#15737](https://github.com/unslothai/unsloth/pull/15737) Studio export: skip the GPU cache clear when nothing was loaded since the last one
- [#15789](https://github.com/unslothai/unsloth/pull/15789) Installer downloads: report progress on whole 1 MiB chunks again
- [#15756](https://github.com/unslothai/unsloth/pull/15756) FSDP2 block CUDA graphs: free the gathered weights of flex BlockMask blocks
- [#15750](https://github.com/unslothai/unsloth/pull/15750) Flash impl: warn about an explicit fa3 / fa4 fallback on the Trainer path too
- [#15748](https://github.com/unslothai/unsloth/pull/15748) Tensor parallel x FSDP2: average trainable TP parameters left out of FSDP2 over the data parallel ranks
- [#15785](https://github.com/unslothai/unsloth/pull/15785) Bump install.sh / install.ps1 pins to unsloth>=2026.10.10, unsloth-zoo>=2026.10.10
- [#15702](https://github.com/unslothai/unsloth/pull/15702) Import: check for a broken openai install on first use instead of at import unsloth
- [#15778](https://github.com/unslothai/unsloth/pull/15778) Tests: follow the thread-list guard flag and the RAG WAL keeper
- [#15761](https://github.com/unslothai/unsloth/pull/15761) Studio: install the released Diffusers 0.42.1 instead of the pinned main commit
- [#15766](https://github.com/unslothai/unsloth/pull/15766) Studio video gallery: clear() reads and unlinks sidecars in the folder it locked
- [#15749](https://github.com/unslothai/unsloth/pull/15749) Studio: hash the tokenizer fingerprint without touching the live tokenizer
- [#15754](https://github.com/unslothai/unsloth/pull/15754) Studio: skip the DFlash size request when no sidecar is eligible
- [#15753](https://github.com/unslothai/unsloth/pull/15753) Studio: decode each relayed SSE line once in the tool call stripper
- [#15751](https://github.com/unslothai/unsloth/pull/15751) Studio: load the attachment hasher before deleting a chat attachment
- [#15701](https://github.com/unslothai/unsloth/pull/15701) Studio: read the Int8Tensor constructor signature once per class in the native INT8 rebuild
- [#15763](https://github.com/unslothai/unsloth/pull/15763) Installer downloads: retry a body cut short or trickling instead of hashing it
- [#15771](https://github.com/unslothai/unsloth/pull/15771) Keep packed documents apart under flash attention when layers get mRoPE position ids
- [#15733](https://github.com/unslothai/unsloth/pull/15733) Studio: batch packed fine-tuning jobs, each job packing only its own documents
- [#15724](https://github.com/unslothai/unsloth/pull/15724) Clarify Deep Research handoff for research briefs
- [#15713](https://github.com/unslothai/unsloth/pull/15713) Studio: preview JSON Lines datasets with the stdlib, not pyarrow's JSON reader
- [#15698](https://github.com/unslothai/unsloth/pull/15698) Studio: cast-cache writer reads the host copy offload already keeps instead of waiting out an onload
- [#15770](https://github.com/unslothai/unsloth/pull/15770) Studio: spider or bats on a third of Halloween pages each
- [#15769](https://github.com/unslothai/unsloth/pull/15769) Studio: speedometer icon for generation speed on the API page
- [#15721](https://github.com/unslothai/unsloth/pull/15721) cuDNN SDPA grad layout fix: let compiled code modify the SDPA output in place
- [#15720](https://github.com/unslothai/unsloth/pull/15720) FSDP2 block CUDA graphs: free the gathered weights of MoE blocks
- [#15764](https://github.com/unslothai/unsloth/pull/15764) AppImage E2E: count the app shell as rendered when the splash is already gone
- [#15762](https://github.com/unslothai/unsloth/pull/15762) CI: record the lazy CLI command import in the risky-loader baseline
- [#15485](https://github.com/unslothai/unsloth/pull/15485) Studio: confirm Full Access directly from a chat tool approval
- [#15360](https://github.com/unslothai/unsloth/pull/15360) Bump the cargo-tauri group in /studio/src-tauri with 4 updates
- [#15637](https://github.com/unslothai/unsloth/pull/15637) Bump fast-uri from 3.1.8 to 3.1.9 in /docker/jupyter/unsloth_labext in the npm_and_yarn group across 1 directory
- [#15518](https://github.com/unslothai/unsloth/pull/15518) Bump the pip group across 1 directory with 2 updates
- [#15746](https://github.com/unslothai/unsloth/pull/15746) Studio frontend: bump zod to 4.6.7 (keep katex on 0.16)
- [#15725](https://github.com/unslothai/unsloth/pull/15725) Fix Gallery save toast to use the chosen filename
- [#15599](https://github.com/unslothai/unsloth/pull/15599) Studio: train ChatML datasets whose roles are capitalized
- [#15759](https://github.com/unslothai/unsloth/pull/15759) Studio login: say Unsloth and size the title with the UI font scale
- [#15729](https://github.com/unslothai/unsloth/pull/15729) Tests: the two gc-skip auto dist tests take their port from the shared helper
- [#15728](https://github.com/unslothai/unsloth/pull/15728) Studio llama-server args: a value-less ngram-mod flag keeps the next flag
- [#15727](https://github.com/unslothai/unsloth/pull/15727) Studio fine-tuning queue: run the batch model probe behind the account's path guard
- [#14664](https://github.com/unslothai/unsloth/pull/14664) Studio video: LTX-2.5 dense text-encoder fallback room check prices the load dtype
- [#14696](https://github.com/unslothai/unsloth/pull/14696) Studio FLUX.3 upsampler: pin the sidecar to the native sd.cpp image card
- [#14683](https://github.com/unslothai/unsloth/pull/14683) Studio diffusion: off-GIL CUDA prime does not latch before torch is imported
- [#14682](https://github.com/unslothai/unsloth/pull/14682) Studio diffusion: CUDA graph re-check fixes (eager OOM retry on originals, planned negative length records on the first render)
- [#15719](https://github.com/unslothai/unsloth/pull/15719) Keep RAG WAL sidecars between database operations
- [#15760](https://github.com/unslothai/unsloth/pull/15760) Studio desktop: trim the quit hide comments
- [#15634](https://github.com/unslothai/unsloth/pull/15634) Studio: drop three frontend dependencies nothing imports
- [#15566](https://github.com/unslothai/unsloth/pull/15566) Studio desktop: build release with fat LTO and one codegen unit
- [#15644](https://github.com/unslothai/unsloth/pull/15644) Studio: Search and Tools on by default for local models
- [#15696](https://github.com/unslothai/unsloth/pull/15696) Studio: remove private helpers and constants that nothing uses
- [#15680](https://github.com/unslothai/unsloth/pull/15680) feat(studio): idle auto-unload an MLX chat model
- [#15723](https://github.com/unslothai/unsloth/pull/15723) Studio desktop: hide the window as soon as a quit is committed, and exit the backend without finalization
- [#15732](https://github.com/unslothai/unsloth/pull/15732) Studio: start the torch warm-up stages after the first response is sent
- [#15758](https://github.com/unslothai/unsloth/pull/15758) Tests: follow the media picker's Chat-aligned height, start pwsh through run_pwsh
- [#15694](https://github.com/unslothai/unsloth/pull/15694) Saving: stop repeated gc.collect passes once a pass finds nothing
- [#15743](https://github.com/unslothai/unsloth/pull/15743) Update OpenEnv links to openenv/OpenEnv
- [#15755](https://github.com/unslothai/unsloth/pull/15755) Add AGPLv3 header to desktop release workflow
- [#15689](https://github.com/unslothai/unsloth/pull/15689) CLI: load command modules other than studio only when a command is dispatched
- [#15586](https://github.com/unslothai/unsloth/pull/15586) Studio: fewer GC passes while the backend imports, RSA key generated alongside startup
- [#15714](https://github.com/unslothai/unsloth/pull/15714) Packed attention: full finetuning rows reach varlen (fp32 Q / K under autocast)
- [#15688](https://github.com/unslothai/unsloth/pull/15688) Studio: read the VLM and audio detection sets from the transformers registry source instead of importing torch
- [#15678](https://github.com/unslothai/unsloth/pull/15678) Studio: Trick or treat sidebar row with Halloween themes and spooky greetings
- [#15734](https://github.com/unslothai/unsloth/pull/15734) Studio: keep a Windows console stderr writable while the worker mirror owns fd 2
- [#15686](https://github.com/unslothai/unsloth/pull/15686) Studio: web fetch tokenizes a page once and replays it to the later main-content passes
- [#15718](https://github.com/unslothai/unsloth/pull/15718) Studio: refresh cache sizes that are being re-measured instead of showing the old number
- [#15700](https://github.com/unslothai/unsloth/pull/15700) Studio: reuse VAE tile blend weights in tiled encode and LTX-2 tiled decode
- [#15682](https://github.com/unslothai/unsloth/pull/15682) Studio: let the router skip routes whose path prefix cannot match
- [#15697](https://github.com/unslothai/unsloth/pull/15697) Dependencies: drop four Python packages nothing imports (tyro, flatbuffers, pytorch_tokenizers, mammoth)
- [#15747](https://github.com/unslothai/unsloth/pull/15747) setup.sh: keep the replaced-script handoff directly behind the dependency pass
- [#15717](https://github.com/unslothai/unsloth/pull/15717) Studio: bound the passthrough healer gate to openers the parser would scan
- [#15620](https://github.com/unslothai/unsloth/pull/15620) Studio training: log the traceback when a model fails to load
- [#15613](https://github.com/unslothai/unsloth/pull/15613) Studio: queue /v1/videos while a video renders and batch waiting /v1/images/generations requests
- [#15745](https://github.com/unslothai/unsloth/pull/15745) Tests: bring three new tests in line with the port and encoding guards
- [#15488](https://github.com/unslothai/unsloth/pull/15488) Studio: show cache sizes and clear individual Hugging Face model copies
- [#15654](https://github.com/unslothai/unsloth/pull/15654) Studio diffusion: run the fused-dequant int8 GEMM on untuned sm80+ archs behind a probe and latency check
- [#15711](https://github.com/unslothai/unsloth/pull/15711) Keep an earlier model's smart offloading when a short sequence model loads
- [#15712](https://github.com/unslothai/unsloth/pull/15712) Run xformers attention on the tensors' device (device_map across GPUs gave NaN loss)
- [#15685](https://github.com/unslothai/unsloth/pull/15685) Studio: advertise the chat-title repair guards on the thread lists instead of fetching /openapi.json
- [#15646](https://github.com/unslothai/unsloth/pull/15646) Studio: precompile bytecode after setup so the first launch does not
- [#15692](https://github.com/unslothai/unsloth/pull/15692) Studio: compose the FP8 and NVFP4 compile cache tags in a fixed order
- [#15481](https://github.com/unslothai/unsloth/pull/15481) Studio: acquire decision datasets alongside model loading
- [#15480](https://github.com/unslothai/unsloth/pull/15480) Studio: report first-step training and gradient accumulation
- [#15683](https://github.com/unslothai/unsloth/pull/15683) Studio: answer keyless admission on the event loop when nothing needs reading
- [#15673](https://github.com/unslothai/unsloth/pull/15673) Studio desktop: leave the startup screen on server-port instead of at the next 500 ms poll
- [#15390](https://github.com/unslothai/unsloth/pull/15390) Studio: log a live generation rate while a reply is still streaming
- [#15560](https://github.com/unslothai/unsloth/pull/15560) Faster import unsloth and from_pretrained: fewer GC passes, skip regexes that cannot match
- [#15687](https://github.com/unslothai/unsloth/pull/15687) Studio: walk each GGUF tokenizer array once per process and seek past it on later reads
- [#15675](https://github.com/unslothai/unsloth/pull/15675) Studio desktop: share one loopback HTTP client per timeout
- [#15615](https://github.com/unslothai/unsloth/pull/15615) Studio: make Stop work while an MLX model is still reading the prompt
- [#15699](https://github.com/unslothai/unsloth/pull/15699) Studio: count sd-cli WebM frames from VP8 packet headers in inspect_video
- [#15726](https://github.com/unslothai/unsloth/pull/15726) Studio: visible light-mode borders, aligned media pickers, new image icons, modern login
- [#15731](https://github.com/unslothai/unsloth/pull/15731) Studio: calmer login and setup pages with an accent sign-in button
- [#15672](https://github.com/unslothai/unsloth/pull/15672) Studio desktop: run -h and desktop-capabilities at once on a capability cache miss
- [#15671](https://github.com/unslothai/unsloth/pull/15671) Studio desktop: start the launch preflight's CLI -h probe during setup
- [#15707](https://github.com/unslothai/unsloth/pull/15707) Studio: stop re-stripping an open tool call body on every streamed token
- [#15494](https://github.com/unslothai/unsloth/pull/15494) Studio: mention ARM64 in Windows sandbox architecture guidance
- [#15674](https://github.com/unslothai/unsloth/pull/15674) Studio: look up model picker rows by index map instead of a scan per row
- [#15661](https://github.com/unslothai/unsloth/pull/15661) Studio: delete a RAG document's index rows in one scan per table
- [#15690](https://github.com/unslothai/unsloth/pull/15690) Studio: read each dist-info METADATA once per install check
- [#15669](https://github.com/unslothai/unsloth/pull/15669) Studio: match /assets before the API routes
- [#15684](https://github.com/unslothai/unsloth/pull/15684) Studio: render /openapi.json once per schema, off the event loop
- [#15676](https://github.com/unslothai/unsloth/pull/15676) Studio: answer ASCII tool result budgets without a per-character scan
- [#15667](https://github.com/unslothai/unsloth/pull/15667) Studio: convert only the cached unstructured seed rows a caller reads
- [#15665](https://github.com/unslothai/unsloth/pull/15665) Studio: read each PDF page's words once when locating chunk regions
- [#15664](https://github.com/unslothai/unsloth/pull/15664) Studio: tokenize a repeated chunk text once in the sentence-transformers counter
- [#15491](https://github.com/unslothai/unsloth/pull/15491) Studio: match audio.cpp CUDA runtime to bundle architecture
- [#15660](https://github.com/unslothai/unsloth/pull/15660) Studio: copy SNAC codes to the host once per example in TTS preprocessing
- [#15663](https://github.com/unslothai/unsloth/pull/15663) Studio: reuse the size probe's repo listing for scoped download blob hashes
- [#15670](https://github.com/unslothai/unsloth/pull/15670) Studio desktop: give port validation probes the health watchdog's 10 s budget
- [#15666](https://github.com/unslothai/unsloth/pull/15666) Studio: copy generated SNAC codes to the host once per decode
- [#15483](https://github.com/unslothai/unsloth/pull/15483) Studio: overlap model checkpoint downloads with dataset preparation
- [#15662](https://github.com/unslothai/unsloth/pull/15662) Model loading: skip the root index probe when the repo listing shows no index
- [#15479](https://github.com/unslothai/unsloth/pull/15479) Studio: clarify LoRA and training hyperparameter labels
- [#15537](https://github.com/unslothai/unsloth/pull/15537) [bugfix] Snapshot in-memory DPO policies for the default reference
- [#15619](https://github.com/unslothai/unsloth/pull/15619) Unsloth Studio / Desktop: log out, show the owner's profile in Accounts, and let the owner sign in with a chosen name
- [#15710](https://github.com/unslothai/unsloth/pull/15710) UNSLOTH_PP_SIZE: install the Trainer wrapper at import, so encoders refuse instead of training as DDP
- [#15709](https://github.com/unslothai/unsloth/pull/15709) fast_inference under UNSLOTH_FSDP2=1 torchrun: keep vLLM instead of refusing it
- [#15708](https://github.com/unslothai/unsloth/pull/15708) Native FSDP2: clip gradients through Unsloth's clip, not the mixed mesh path
- [#15389](https://github.com/unslothai/unsloth/pull/15389) Studio: answer 422 to a timestamp or page cursor sqlite cannot store
- [#15428](https://github.com/unslothai/unsloth/pull/15428) Studio: reject tool calls from truncated local generations
- [#15430](https://github.com/unslothai/unsloth/pull/15430) [Bug] AMD: Unsloth Studio Images retries the ROCm sd.cpp build on hosts whose ROCm comes only from the torch wheel
- [#15715](https://github.com/unslothai/unsloth/pull/15715) Studio video: park MiniMax-H3's rotating VAEs by re-pointing at their pageable host copy when pinning is not allowed
- [#15600](https://github.com/unslothai/unsloth/pull/15600) Studio: only trust file search and dictation servers Studio started
- [#15704](https://github.com/unslothai/unsloth/pull/15704) Fix GRPO masking of short stop-string completions
- [#15598](https://github.com/unslothai/unsloth/pull/15598) Fix Online DPO crashing at start when use_vllm is on
- [#15652](https://github.com/unslothai/unsloth/pull/15652) Studio: keep Qwen-Image-2.1 prompt-length dims dynamic under group offload hooks
- [#15617](https://github.com/unslothai/unsloth/pull/15617) Studio: faster MLX chat for models loaded in 4-bit
- [#15572](https://github.com/unslothai/unsloth/pull/15572) Studio: keep ticked PDF form check boxes in knowledge bases
- [#15659](https://github.com/unslothai/unsloth/pull/15659) Studio: count ASCII in context estimates without a per-character loop
- [#15668](https://github.com/unslothai/unsloth/pull/15668) Studio: parse each seed glob and matched file once when applying loader skip rules
- [#15555](https://github.com/unslothai/unsloth/pull/15555) Studio: load local JSON datasets whose later rows add keys
- [#15625](https://github.com/unslothai/unsloth/pull/15625) Studio: launch sandboxed tool processes without a Python pre-exec on Linux
- [#15571](https://github.com/unslothai/unsloth/pull/15571) Studio: put downloaded GGUFs under the right On Device filter
- [#15618](https://github.com/unslothai/unsloth/pull/15618) Studio: skip the passthrough healer reparse while no held call can close
- [#15587](https://github.com/unslothai/unsloth/pull/15587) Studio: check local single-file checkpoints without importing the diffusion stack
- [#15589](https://github.com/unslothai/unsloth/pull/15589) Studio: decode and parse gpt-oss Harmony streams incrementally
- [#15590](https://github.com/unslothai/unsloth/pull/15590) Studio: step streaming generators on a dedicated thread instead of the pool
- [#15591](https://github.com/unslothai/unsloth/pull/15591) Studio: bound tool-call stream scans and decode passthrough lines once
- [#15585](https://github.com/unslothai/unsloth/pull/15585) CLI: defer YAML, asyncio, rich and the config schema build off import
- [#15595](https://github.com/unslothai/unsloth/pull/15595) Studio: launch full-access tool processes with start_new_session instead of a setsid pre-exec
- [#15628](https://github.com/unslothai/unsloth/pull/15628) Studio: clear only the compiled cache unsloth_zoo writes to
- [#15627](https://github.com/unslothai/unsloth/pull/15627) Studio: answer slow cache sizes at once and walk cache trees faster
- [#15577](https://github.com/unslothai/unsloth/pull/15577) Studio: hash tokenizers for dataset cache names without their init-only vocab copies
- [#15580](https://github.com/unslothai/unsloth/pull/15580) Studio: resolve the gallery folder once per image and video listing
- [#15593](https://github.com/unslothai/unsloth/pull/15593) Studio: walk GGUF tokenizer string arrays through one buffer
- [#15561](https://github.com/unslothai/unsloth/pull/15561) MLX: build trl.__all__ on first read instead of importing every TRL export at import
- [#15592](https://github.com/unslothai/unsloth/pull/15592) Studio: find the backend's child processes from /proc on Linux for /api/system
- [#15705](https://github.com/unslothai/unsloth/pull/15705) Studio: tidy the System page Live monitor and GPU devices
- [#15579](https://github.com/unslothai/unsloth/pull/15579) Studio: encode transient PNGs at zlib level 1
- [#15578](https://github.com/unslothai/unsloth/pull/15578) Studio: memoize per-repo lookups inside one model inventory scan
- [#15535](https://github.com/unslothai/unsloth/pull/15535) Clarify training setup feedback and the music entry flow
- [#15642](https://github.com/unslothai/unsloth/pull/15642) Studio diffusion: the pin budget credits clean mapped page cache inside a capped cgroup
- [#15568](https://github.com/unslothai/unsloth/pull/15568) Studio Desktop: remove the duplicate KDE Wayland title bar on Linux
- [#14725](https://github.com/unslothai/unsloth/pull/14725) Studio: bound expires_in_days when creating an API key
- [#15418](https://github.com/unslothai/unsloth/pull/15418) Studio: honour context_overflow on the /v1/messages passthrough
- [#15635](https://github.com/unslothai/unsloth/pull/15635) Studio: vendor shadcn's tailwind.css instead of installing the shadcn CLI
- [#15653](https://github.com/unslothai/unsloth/pull/15653) Studio: prompt-length dims stay dynamic for positional block inputs under group offload hooks
- [#15601](https://github.com/unslothai/unsloth/pull/15601) Studio: keep ticked check boxes when reading HTML files
- [#15352](https://github.com/unslothai/unsloth/pull/15352) Block CUDA graphs: decide before recording, release the pool, cap FSDP2 kept weights, drop unneeded copies
- [#15565](https://github.com/unslothai/unsloth/pull/15565) Studio: load mermaid, node-forge and js-yaml on first use, not at startup
- [#15567](https://github.com/unslothai/unsloth/pull/15567) Studio desktop: never let the login-shell PATH probe hold back launch
- [#15602](https://github.com/unslothai/unsloth/pull/15602) Studio: refuse Laya questions whose instructions would be cut
- [#15616](https://github.com/unslothai/unsloth/pull/15616) Studio: say a chat is too long on safetensors models
- [#15569](https://github.com/unslothai/unsloth/pull/15569) Keep a dataset's thinking text when training Gemma 4 E2B and E4B
- [#15557](https://github.com/unslothai/unsloth/pull/15557) install-kernels: install mamba_ssm on sm70 with Triton 3.4+, matching unsloth_zoo
- [#15594](https://github.com/unslothai/unsloth/pull/15594) Condense module docstrings, keeping the guarantees they state
- [#15650](https://github.com/unslothai/unsloth/pull/15650) Studio: expanded composer fills the chat area, net of attachments
- [#15466](https://github.com/unslothai/unsloth/pull/15466) Studio: count the cards a CUDA + Vulkan llama.cpp reaches only through Vulkan
- [#15679](https://github.com/unslothai/unsloth/pull/15679) Distributed tests: take every MASTER_PORT from the shared rendezvous helper
- [#15677](https://github.com/unslothai/unsloth/pull/15677) Fast decode: follow a model moved after loading (GRPO on a non-default GPU raised cuda:1 and cuda:0)
- [#15647](https://github.com/unslothai/unsloth/pull/15647) Studio: Scheduled task dialog padding, pill name field, dark New task button
- [#15648](https://github.com/unslothai/unsloth/pull/15648) Studio: restore the reload icons replaced in #15232
- [#15436](https://github.com/unslothai/unsloth/pull/15436) Studio: recheck that the user is still away before an automatic task swaps models
- [#15545](https://github.com/unslothai/unsloth/pull/15545) checkpoint_skip_layers="auto" under torchrun: every rank keeps the smallest planned count
- [#15658](https://github.com/unslothai/unsloth/pull/15658) Scan baseline: triton 3.9 compile warmup pool
- [#15559](https://github.com/unslothai/unsloth/pull/15559) Context parallel and async GRPO: recognise gated fast forwards
- [#15554](https://github.com/unslothai/unsloth/pull/15554) Flash impl: warn when an explicit fa3 / fa4 request falls back on the device or torch
- [#15553](https://github.com/unslothai/unsloth/pull/15553) Block CUDA graphs: run MoE layers and flex attention blocks compiled without graphs
- [#15551](https://github.com/unslothai/unsloth/pull/15551) Tensor parallel float16: unscale DTensor and plain grads apart in the native ShardedGradScaler
- [#14774](https://github.com/unslothai/unsloth/pull/14774) Fix the FSDP2 QLoRA non-float parameter guard on Python 3.9
- [#14773](https://github.com/unslothai/unsloth/pull/14773) Run each FlashAdamW update on its parameter's CUDA device
- [#15539](https://github.com/unslothai/unsloth/pull/15539) Keep LoRA adapters on Mamba x_proj / dt_proj / out_proj when the fused training kernel is available
- [#15649](https://github.com/unslothai/unsloth/pull/15649) Studio: rounded browser tabs and hovers, Recents above Suggested once visited
- [#15640](https://github.com/unslothai/unsloth/pull/15640) Studio: Export page in the Train style, Train polish, hide Q4NX without an AMD NPU
- [#15638](https://github.com/unslothai/unsloth/pull/15638) Tests: fail grouped tests by name when --dist loadgroup stops grouping (pytest 9.2)
- [#15651](https://github.com/unslothai/unsloth/pull/15651) Studio: audio field titles stop focusing their field, quieter Optional tags
- [#15643](https://github.com/unslothai/unsloth/pull/15643) Studio: Library cards stay apart at every zoom, one size, 5 per row
- [#15645](https://github.com/unslothai/unsloth/pull/15645) Studio: Qwen-Image-Edit streamed-tier activation seed keeps more of the DiT resident on tight cards
- [#15624](https://github.com/unslothai/unsloth/pull/15624) Backend CI: pin pytest below 9.2
- [#15421](https://github.com/unslothai/unsloth/pull/15421) fix(studio): reject standalone GGUF adapters before model teardown
- [#15622](https://github.com/unslothai/unsloth/pull/15622) Import hoist verifier: a local import re-pointed after its definition moved is not a clash
- [#15626](https://github.com/unslothai/unsloth/pull/15626) Tests: stop pytest 9.2 monkeypatch from deleting torch config entries, and name any test that still does

#### 🐛 New Issues
- [#15735](https://github.com/unslothai/unsloth/issues/15735) [Bug] Qwen-Image-2.1-Turbo Safetensors missing from "On Device" 💬5
- [#15681](https://github.com/unslothai/unsloth/issues/15681) [Bug] SIGSEGV in pyarrow JSON reader when previewing an 81.7 MB ChatML JSONL dataset (studio v0.1.910-beta, UI shows "Unsloth isn't running") `feature request` `bug` 💬3
- [#15767](https://github.com/unslothai/unsloth/issues/15767) [Bug] trouble using opencode models in unsloth desktop `feature request` `bug` 💬2
- [#15800](https://github.com/unslothai/unsloth/issues/15800) [Bug] Context does not compact when returning to long conversations, rendering them non-continuable `feature request` `bug` 💬2
- [#15840](https://github.com/unslothai/unsloth/issues/15840) [Feature] limited to a maximum of 200 MB. `feature request`
- [#15839](https://github.com/unslothai/unsloth/issues/15839) ### Feature Request: Model Archiving/Packing for Cold Storage `feature request`
- [#15832](https://github.com/unslothai/unsloth/issues/15832) [Bug] LFM3 MLX models don't get displayed with curl v1/models `feature request` `bug` 💬1
- [#15782](https://github.com/unslothai/unsloth/issues/15782) [Bug] Text CRUD in "Ask anything" (chat) input textarea [textarea name="input"] duplicates across open tabs even when tabs have different chats open `feature request` `bug` 💬1
- [#15784](https://github.com/unslothai/unsloth/issues/15784) [Feature] Allow dots (.) in usernames `feature request` 💬1
- [#15657](https://github.com/unslothai/unsloth/issues/15657) [Feature] Schedule training to start at a specific time `feature request`
- [#15866](https://github.com/unslothai/unsloth/issues/15866) [Bug] Unsloth failed to update. `feature request` `bug`
- [#15856](https://github.com/unslothai/unsloth/issues/15856) [Bug] Dragging an image from one position to another fails with Drop a JPEG, PNG, WebP or GIF image `feature request` `bug`
- [#15858](https://github.com/unslothai/unsloth/issues/15858) [Bug] Dolphin Venice Edition LLM via MLX engine not being rendered properly in UI while working well in other apps `feature request` `bug`
- [#15841](https://github.com/unslothai/unsloth/issues/15841) [Feature] Ability to frame and/or resize a seed picture and crop it to a trained size. `feature request`
- [#15837](https://github.com/unslothai/unsloth/issues/15837) [Feature] Keyboard navigation among images from the Gallery strip `feature request`
- [#15831](https://github.com/unslothai/unsloth/issues/15831) [Feature] Python 3.15 ROCm 10.0 `feature request`

#### 🔒 Closed Issues
- [#15583](https://github.com/unslothai/unsloth/issues/15583) [Bug] How to finetune llm with "Intel arc b580 gpu"
- [#15473](https://github.com/unslothai/unsloth/issues/15473) [Bug] Vision with Gemma 4 26B MLX model produce <unused6226>
- [#15735](https://github.com/unslothai/unsloth/issues/15735) [Bug] Qwen-Image-2.1-Turbo Safetensors missing from "On Device"
- [#15552](https://github.com/unslothai/unsloth/issues/15552) Studio on Windows floods the Recycle Bin with sqlite WAL/SHM temp files every second during training
- [#15444](https://github.com/unslothai/unsloth/issues/15444) [Bug] AMD GPUs do not show up on mixed Nvidia-AMD Linux systems and custom llama.cpp
- [#15681](https://github.com/unslothai/unsloth/issues/15681) [Bug] SIGSEGV in pyarrow JSON reader when previewing an 81.7 MB ChatML JSONL dataset (studio v0.1.910-beta, UI shows "Unsloth isn't running")
- [#3419](https://github.com/unslothai/unsloth/issues/3419) [Feature]
- [#15538](https://github.com/unslothai/unsloth/issues/15538) [Bug] studio stack trace when training
- [#15581](https://github.com/unslothai/unsloth/issues/15581) [Bug] Deep Research Failed to Call in Unsloth Desktop
- [#15621](https://github.com/unslothai/unsloth/issues/15621) [Bug] Images download toast shows original name after rename
- [#15417](https://github.com/unslothai/unsloth/issues/15417) [Bug]: Anthropic passthrough (/v1/messages) fails with context overflow instead of applying auto-compaction

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,166 · **Open issues:** 381 · **Last push:** 8h ago

On October 29, 2026, AIBrix did not release any new versions, but several important updates were merged, including PR #3330, which introduces an E+PD sample featuring three encode pods, and PR #3332, which fixes a bug in the TPOT histogram calculation by ensuring that the sum is divided by its count. Another notable improved merged PR, #3336, focuses on refining the AGENTS.md documentation for better contributor guidance. Among the new issues, PR #3333 highlights a bug where the conductor decode policy routes to the busiest decode pod, prompting concerns about system efficiency. Overall, the day was characterized by ongoing enhancements and documentation improvements in the project without any new releases.

#### ✅ Merged PRs
- [#3330](https://github.com/vllm-project/aibrix/pull/3330) [Docs] Add an E+PD sample with three encode pods
- [#3332](https://github.com/vllm-project/aibrix/pull/3332) [Bug] Divide the TPOT histogram's sum by its count in avg_tpot_pod_5m
- [#3299](https://github.com/vllm-project/aibrix/pull/3299) [Bug] Read leastThroughput's pod-scoped PromQL throughputs where the cache keeps them
- [#3336](https://github.com/vllm-project/aibrix/pull/3336) [Docs] Keep AGENTS.md concise and organize contributor guidance
- [#3329](https://github.com/vllm-project/aibrix/pull/3329) [Misc] Read running-request counts once per routing decision
- [#3324](https://github.com/vllm-project/aibrix/pull/3324) [Bug] Keep configured adapter storage during runtime injection
- [#3328](https://github.com/vllm-project/aibrix/pull/3328) Keep fractional pod-metric targets exact in the generated HPA

#### 🐛 New Issues
- [#3333](https://github.com/vllm-project/aibrix/issues/3333) [Bug] Conductor decode policy routes to the busiest decode pod `kind/bug` `area/gateway` `area/website` `area/batch` 💬5
- [#3337](https://github.com/vllm-project/aibrix/issues/3337) With several metrics, the pending-replica guard can scale below what another metric asks for `kind/bug` `triage/accepted` `area/website` `area/orchestration` 💬5
- [#3339](https://github.com/vllm-project/aibrix/issues/3339) [Bug] A NaN or infinite latency in a batch response breaks the adaptive concurrency controller `triage/accepted` `kind/misc` `area/orchestration` `area/batch` 💬2
- [#3340](https://github.com/vllm-project/aibrix/issues/3340) vtc-basic charges a user's tokens for a request the gateway then rejects with 429 `kind/bug` `area/gateway` 💬1

#### 🔒 Closed Issues
- [#2560](https://github.com/vllm-project/aibrix/issues/2560) Discussion: First-class image warmup workflow for AIBrix model workloads
- [#3151](https://github.com/vllm-project/aibrix/issues/3151) [CI] Add label-controlled CI for external contributors
- [#3317](https://github.com/vllm-project/aibrix/issues/3317) [Bug] HPA strategy rounds fractional pod-metric targets up, so gpu_cache_usage_perc 0.5 never scales up
- [#3318](https://github.com/vllm-project/aibrix/issues/3318) [Bug] Runtime sidecar injection replaces existing adapter PVCs with emptyDir
- [#3051](https://github.com/vllm-project/aibrix/issues/3051) [Feature] Add non-preemptive placement priority for ModelClaim

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,302 · **Open issues:** 849 · **Last push:** 1h ago

On October 29, 2026, there were no new releases for Semantic Router, but a significant development occurred with the merging of PR #5363, which added a feature to hold each subagent on its own model in Router Learning protection. Meanwhile, several new issues have been reported, with #5580 highlighting a bug in Vela 3 package verification that allows files missing from SHA256SUMS, and #5585 addressing a failure in package validation that does not reject duplicate router question IDs. Other notable bugs include #5577, where end-to-end profiles for vela-halu and hallucination are not meeting memory requirements, and #5592 concerning a legal-risk probe being incorrectly sent in the balance recipe.

#### ✅ Merged PRs
- [#5363](https://github.com/vllm-project/semantic-router/pull/5363) [Feature] Hold each subagent on its own model in Router Learning protection

#### 🐛 New Issues
- [#5580](https://github.com/vllm-project/semantic-router/issues/5580) [Bug] Vela 3 package verification accepts files missing from SHA256SUMS `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5585](https://github.com/vllm-project/semantic-router/issues/5585) [Bug] Vela 3 package validation does not reject duplicate router question IDs `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5577](https://github.com/vllm-project/semantic-router/issues/5577) [Bug] vela-halu and hallucination E2E profiles run below the memory vela3-fast needs `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5592](https://github.com/vllm-project/semantic-router/issues/5592) [Bug] The balance recipe sends a legal-risk probe to medium_explainer since vela3-fast answers the built-in signals `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5589](https://github.com/vllm-project/semantic-router/issues/5589) Bug: `id2label` accepts duplicate indices after integer normalization `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5586](https://github.com/vllm-project/semantic-router/issues/5586) [Bug] Two platform-batch tests fail on hosts that are not Linux/amd64 `needs-acceptance` `wg/evaluation-quality`
- [#5584](https://github.com/vllm-project/semantic-router/issues/5584) [Bug] OpenRouter error envelopes with metadata fail transport-error decoding `needs-acceptance` `wg/data-plane-networking`
- [#5582](https://github.com/vllm-project/semantic-router/issues/5582) [Bug] Responses are rejected with negative_usage when reasoning_tokens exceeds the output total `needs-acceptance` `wg/data-plane-networking`
- [#5581](https://github.com/vllm-project/semantic-router/issues/5581) [Bug] The merge queue waits for a fresh /ci run every time Mergify updates the pull request at its head `bug` `needs-acceptance` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#5508](https://github.com/vllm-project/semantic-router/issues/5508) [Bug] Dashboard answers 405 to HEAD on every GET-only route, including /healthz
- [#5323](https://github.com/vllm-project/semantic-router/issues/5323) [Bug] A /ci run rerun can record PR Gate's success on a superseded check, so branch protection still blocks the merge
- [#4718](https://github.com/vllm-project/semantic-router/issues/4718) [Bug] Model scores are accepted unvalidated and a NaN score freezes selection
- [#5501](https://github.com/vllm-project/semantic-router/issues/5501) [Docs] Point the Beyond Document Grounding paper entry at the ACL Anthology

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*