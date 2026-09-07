# 📡 AI Ecosystem Digest — 2026-09-07

> Generated 2026-09-07 00:44 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,272 | 15 | 5 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 121,963 | 21 | 1 | 17 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,838 | 1 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,137 | 8 | 2 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 205,257 | 29 | 11 | 8 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,687 | 29 | 15 | 2 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,055 | 150 | 115 | 171 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 242,545 | 30 | 3 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,099 | 35 | 12 | 15 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,535 | 9 | 15 | 22 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 127,279 | 19 | 19 | 10 | 9 |
| [Ollama](https://github.com/ollama/ollama) | 180,309 | 5 | 0 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,169 | 11 | 16 | 22 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,733 | 7 | 105 | 24 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,062 | 0 | 1 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,623 | 7 | 3 | 2 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.263](https://github.com/anthropics/claude-code/releases/tag/v2.1.263), addressing various issues and improvements.
- **Qwen Code** made several releases including [v0.23.1-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.1) and [v0.23.0-nightly.20260906.92a8a8d179](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260906.92a8a8d179) for enhanced features.
- **OpenClaw** merged multiple PRs, including [#140532](https://github.com/openclaw/openclaw/pull/140532) which refactors the use of canonical Gateway node inventory.
- An issue in **OpenClaw** concerning a never-finalizing update after a core update, [#139714](https://github.com/openclaw/openclaw/issues/139714), attracted significant attention with 7 comments.
- **vLLM** faced a noteworthy issue, [#55571](https://github.com/vllm-project/vllm/issues/55571), reporting a critical memory access error under sustained load that garnered 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,272 · **Open issues:** 13,142 · **Last push:** 21h ago

On September 7, 2026, Claude Code released version 2.1.263, which includes crucial bug fixes and reliability improvements. There were no merged pull requests during this period, but several noteworthy issues were raised, including a critical bug (#92568) concerning Anthropic API errors that are preventing legitimate code reviews, and a significant issue (#92448) where background tasks are being killed for "low memory" despite having 26 GB free on WSL2. Additionally, users reported several other bugs affecting the desktop version and notifications, underlining ongoing reliability challenges within the platform.

#### 🚀 New Releases
- [v2.1.263](https://github.com/anthropics/claude-code/releases/tag/v2.1.263) v2.1.263

#### 🐛 New Issues
- [#92448](https://github.com/anthropics/claude-code/issues/92448) Background tasks killed for "low memory" with 26 GB free on WSL2 `bug` `area:bash` `platform:wsl` 💬1
- [#92565](https://github.com/anthropics/claude-code/issues/92565) [Bug] Anthropic API Error: Sonnet 5 Cyber Safeguards Blocking Legitimate Code Analysis `bug` `duplicate` `platform:windows` `area:model` 💬2
- [#92572](https://github.com/anthropics/claude-code/issues/92572) [BUG] Connection drops and recent messages lost after re-logging in `bug` `platform:windows` `area:core` `data-loss`
- [#92571](https://github.com/anthropics/claude-code/issues/92571) Claude in Chrome: site-approval prompt never fires for Claude Code MCP channel — every site permanently blocked (side-panel approvals don't propagate) `bug` `platform:linux` `area:mcp` `area:chrome`
- [#92570](https://github.com/anthropics/claude-code/issues/92570) Clicking context ring should show context breakdown, not trigger /compact `enhancement` `area:tui` `user-experience`
- [#92569](https://github.com/anthropics/claude-code/issues/92569) Claude Desktop segfaults on launch on Ubuntu 26.04.1 (glib 2.88 / GDBus regression, introduced between 1.34493.1 and 1.37937.0) `invalid`
- [#92568](https://github.com/anthropics/claude-code/issues/92568) [Bug] Anthropic API Error: Sonnet 5 Cyber Safeguards Blocking Legitimate Code Review `bug` `duplicate` `platform:windows` `area:model`
- [#92567](https://github.com/anthropics/claude-code/issues/92567) claude-fable-5: repeatedly delivers incomplete structured work despite specs being available in-context `bug` `platform:linux` `area:model`
- [#92566](https://github.com/anthropics/claude-code/issues/92566) claude-fable-5: repeatedly delivers incomplete structured work despite specs being available in-context `bug` `area:model`
- [#92564](https://github.com/anthropics/claude-code/issues/92564) [BUG] Desktop preview reports 'Couldn't find this file' for a file the agent just wrote (exists on disk) `invalid`
- [#92563](https://github.com/anthropics/claude-code/issues/92563) Completed background-task notification is appended to the session but never triggers an assistant turn; session idles until user input `bug` `has repro` `area:core` `area:agents`
- [#92562](https://github.com/anthropics/claude-code/issues/92562) [BUG] Large Bash tool-call payloads are not shown in the UI, so quota is consumed with no visible cause `bug` `platform:windows` `area:cost` `user-experience`
- [#92561](https://github.com/anthropics/claude-code/issues/92561) [Feature Request] Reconsider flagging and disabling Claude models during debugging work `enhancement` `external` `area:api`
- [#92560](https://github.com/anthropics/claude-code/issues/92560) [FEATURE] Let an existing Cowork session be assigned/moved to a project (API silently ignores chat_project_id on PUT) `enhancement` `area:api` `area:cowork`
- [#92559](https://github.com/anthropics/claude-code/issues/92559) [MODEL] Model defends an insecure HKDF pattern with a real-but-inapplicable RFC citation, and does not correct it when challenged `bug` `platform:linux` `area:model` `area:security`

#### 🔒 Closed Issues
- [#81675](https://github.com/anthropics/claude-code/issues/81675) [BUG] Scheduled routines silently no-op when the target repo checkout is missing — no dry-run/precondition check
- [#83692](https://github.com/anthropics/claude-code/issues/83692) [Bug] Anthropic API Error: Missing Tool Result Block for toolu_01Y6n6RrPTBmcQSeecDkaEqd
- [#83752](https://github.com/anthropics/claude-code/issues/83752) [Feature Request] Support frontmatter overrides for skill model and effort parameters
- [#83750](https://github.com/anthropics/claude-code/issues/83750) I appreciate you reaching out, but I need to clarify my role: I'm Claude Code's issue title generator for GitHub issues related to the Claude Code CLI tool. Your message appears to be in Korean and discusses a toxicity evaluation simulator, which isn't re
- [#83751](https://github.com/anthropics/claude-code/issues/83751) [BUG] New session on claude.ai/code environment silently falls back to submitting the prompt into the most recent existing session

### OpenAI Codex (`openai/codex`)

**Stars:** 121,963 · **Open issues:** 15,616 · **Last push:** <1h ago

On September 7, 2026, there were no new releases, but several important features were merged into the OpenAI Codex codebase. Notable changes included the addition of a managed worktree browser to the TUI and the implementation of capability-gated user verification handling. The development team also improved the Bazel build process by isolating commit metadata from Rust compilation inputs and making binary stamping opt-in. Among the newly reported issues, a bug (#43291) has been raised concerning repeated security verification requests on Windows, which disrupts user workflow. Additionally, a potential regression in native Windows sandboxing was identified, posing concerns for users on the latest version.

#### ✅ Merged PRs
- [#43308](https://github.com/openai/codex/pull/43308) Replace Windows app-server shutdown files with socket requests
- [#43304](https://github.com/openai/codex/pull/43304) Isolate Bazel build commit metadata from Rust compilation inputs
- [#43298](https://github.com/openai/codex/pull/43298) Defer managed worktree transitions to fresh TUI loop iterations
- [#43289](https://github.com/openai/codex/pull/43289) Add capability-gated MCP user-verification handling
- [#43286](https://github.com/openai/codex/pull/43286) Add a managed worktree browser to the TUI
- [#43282](https://github.com/openai/codex/pull/43282) Make Bazel binary stamping opt-in
- [#43281](https://github.com/openai/codex/pull/43281) Move npm package staging into a separate release workflow job
- [#43279](https://github.com/openai/codex/pull/43279) Include linked worktrees in TUI session discovery
- [#43265](https://github.com/openai/codex/pull/43265) Add experimental user verification API contracts
- [#43261](https://github.com/openai/codex/pull/43261) Use server defaults when starting TUI background tasks
- [#43253](https://github.com/openai/codex/pull/43253) Show read-only conversations when resume encounters an active writer
- [#43248](https://github.com/openai/codex/pull/43248) Connect voice-host RTP audio to speaker playback
- [#43244](https://github.com/openai/codex/pull/43244) Add bounded GStreamer playback components to the voice host
- [#43178](https://github.com/openai/codex/pull/43178) Allow guarded legacy resume with background migration enabled
- [#43177](https://github.com/openai/codex/pull/43177) Use server model defaults for fresh TUI startup
- [#43147](https://github.com/openai/codex/pull/43147) Gate experimental context by model capability at session startup
- [#43144](https://github.com/openai/codex/pull/43144) Add Windows MSVC Bazel targets for native voice libraries

#### 🐛 New Issues
- [#43295](https://github.com/openai/codex/issues/43295) BUG: Reloading changed AGENTS.md can overflow the context window and lock an existing session `enhancement` `CLI` `context` `session` 💬2
- [#43291](https://github.com/openai/codex/issues/43291) Codex repeatedly requests security verification after authorization, interrupting work on Windows `bug` `windows-os` `app` `safety-check` 💬2
- [#43297](https://github.com/openai/codex/issues/43297) Bug: GitHub connector rejects organization Projects V2 API endpoints `bug` `tool-calls` 💬1
- [#43312](https://github.com/openai/codex/issues/43312) Repeated false-positive cybersecurity safety checks can escalate into near-every-turn checks across ChatGPT and Codex `bug` `safety-check` 💬1
- [#43311](https://github.com/openai/codex/issues/43311) Control+Space still toggles Pet and conflicts with macOS input-source switching `bug` `app` `pets` 💬1
- [#43303](https://github.com/openai/codex/issues/43303) Error creating chat MessaagePort connection `bug` `app` `connectivity` `session` 💬1
- [#43300](https://github.com/openai/codex/issues/43300) [Windows Desktop 26.901.6511.0] Active Codex task temporarily disappears from sidebar while remaining active `bug` `windows-os` `app` `session` 💬1
- [#43299](https://github.com/openai/codex/issues/43299) GPT-5.6: high peak capability, but lower autonomous completion and higher supervision burden `bug` `model-behavior` `app` 💬1
- [#43254](https://github.com/openai/codex/issues/43254) Expose a fail-closed pre-delivery hook that can hold normal Codex responses before rendering `enhancement` `app` `hooks` 💬1
- [#43296](https://github.com/openai/codex/issues/43296) Invalid Value: 'input.call\_id'. Function call output requires call\_id. `bug` `tool-calls` `app` 💬1
- [#43259](https://github.com/openai/codex/issues/43259) Computer Use on Windows Fails. `bug` `windows-os` `app` `computer-use` 💬1
- [#43293](https://github.com/openai/codex/issues/43293) 26.901.22334 Extension Crashing. Command 'chatgpt.openSidebar' not found. Unsupported using syntax(NodeJs) `bug` `extension` `remote` 💬1
- [#43313](https://github.com/openai/codex/issues/43313) Possible Windows native sandbox regression: CreateProcessAsUserW failed: 2 on 0.153.4, works on 0.132.0 `bug` `windows-os` `sandbox` `CLI`
- [#43310](https://github.com/openai/codex/issues/43310) Allow periods in --profile names for versioned model profiles `enhancement` `CLI` `config`
- [#43309](https://github.com/openai/codex/issues/43309) Allow configurable AGENTS.md reload policies, including freeze `enhancement` `CLI` `session` `config`
- [#43307](https://github.com/openai/codex/issues/43307) Windows: CreateProcessAsUserW fails with error 5 before a read-only command starts `bug` `windows-os` `sandbox` `tool-calls`
- [#43306](https://github.com/openai/codex/issues/43306) chrome:control-chrome skill conflicts with other dev tools `bug` `mcp` `CLI` `skills`
- [#43305](https://github.com/openai/codex/issues/43305) Plugin installation copies source `.git` metadata into the installed cache `bug` `CLI` `skills`
- [#43302](https://github.com/openai/codex/issues/43302) thread ID 01a073bb-07f8-7bd1-a37f-5028daefdad1 `bug` `CLI` `safety-check`
- [#43301](https://github.com/openai/codex/issues/43301) Task registration loss: create_thread returns a client ID that never resolves in list_threads `bug` `windows-os` `app` `app-server`
- [#43294](https://github.com/openai/codex/issues/43294) [Windows][Desktop] Fork can start near context limit, then stall during notes/new-context handoff `bug` `model-behavior` `windows-os` `context`

#### 🔒 Closed Issues
- [#41764](https://github.com/openai/codex/issues/41764) Regression : Codex desktop in-app Browser agent control fails after app update

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,838 · **Open issues:** 846 · **Last push:** <1h ago

On September 7, 2026, Gemini CLI released v0.60.0-nightly.20260906.g85aca163f, which includes updates reflecting the latest changes since the previous nightly version. There were no merged pull requests, indicating a day focused on preparation for future features rather than immediate updates. However, a new issue, #29232, titled "Google is a GREAT company but Gemini-cli is NOT," has been raised, signaling some user dissatisfaction that could warrant attention from the development team. Overall, it was a relatively routine day for Gemini CLI, but the emerging user feedback may influence future priorities.

#### 🚀 New Releases
- [v0.60.0-nightly.20260906.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260906.g85aca163f) Release v0.60.0-nightly.20260906.g85aca163f

#### 🐛 New Issues
- [#29232](https://github.com/google-gemini/gemini-cli/issues/29232) Google is a GREAT company but Gemini-cli is NOT `status/need-triage` `area/enterprise`

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,137 · **Open issues:** 2,301 · **Last push:** 2d ago

On September 7, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. However, several new issues were reported, with the most notable being issue #4742, which highlights a problem in the desktop app 1.1.15 where users cannot create a second Local session while another is running, resulting in a message indicating an active Local workspace. Additionally, issue #4744 points to a significant slowdown in session creation, taking approximately 30 seconds instead of the previous 0.6-0.9 seconds. Other issues raised today include challenges with the Astra plan implementation process, a deadlock in the voice server, and a problem with the ask_user form where premature Enter presses lead to unintentional submission of incomplete answers. Overall, the day reflected routine maintenance with some pressing concerns that require attention.

#### 🐛 New Issues
- [#4742](https://github.com/github/copilot-cli/issues/4742) Desktop app 1.1.15: cannot create a second Local (branch) session while one is running — "This project already has an active Local workspace" `triage` 💬1
- [#4741](https://github.com/github/copilot-cli/issues/4741) HydraFusion: accepting an Astra plan can stall without starting implementation 💬1
- [#4744](https://github.com/github/copilot-cli/issues/4744) Desktop app 1.1.15: every session creation blocks ~30s inside `session.create` (was 0.6-0.9s) `triage`
- [#4743](https://github.com/github/copilot-cli/issues/4743) ACP: end_turn precedes background-shell completion and autonomous follow-up tool calls; no observable session-idle signal `triage`
- [#4740](https://github.com/github/copilot-cli/issues/4740) Voice server permanent deadlock when pid file is deleted while server process survives (bind-loser exits before writing pid) `triage`
- [#4738](https://github.com/github/copilot-cli/issues/4738) ask_user form: pressing Enter early submits/cancels and permanently discards the in-progress typed answer `triage`
- [#4737](https://github.com/github/copilot-cli/issues/4737) thx copilot `triage`
- [#4736](https://github.com/github/copilot-cli/issues/4736) Make Ctrl+E accept inline autocomplete suggestions `area:input-keyboard`

#### 🔒 Closed Issues
- [#4527](https://github.com/github/copilot-cli/issues/4527) `copilot -p` fails with 401 on GHEC data residency since 1.0.81-1 — prompt mode model-catalog fetch hits `api.githubcopilot.com` instead of the tenant endpoint
- [#4741](https://github.com/github/copilot-cli/issues/4741) HydraFusion: accepting an Astra plan can stall without starting implementation

### OpenCode (`anomalyco/opencode`)

**Stars:** 205,257 · **Open issues:** 5,729 · **Last push:** <1h ago

On September 7, 2026, there were no new releases for OpenCode; however, several notable merges were completed, including the fix to stop relying on tree-sitter install scripts (#47696) and enhancements to handle oversized logs and session management under specific conditions. The changes also included improvements in error reporting for AI processes and the regeneration of OpenAPI documents, ensuring better compliance and documentation for developers. Among the new issues, the persistent HTTP 429 error reported in Go subscriptions (#47613) is drawing particular attention, as it has limited functionality despite low usage. This blend of maintenance and critical fixes underscores a steady focus on improving system reliability and user experience within the OpenCode ecosystem.

#### ✅ Merged PRs
- [#47696](https://github.com/anomalyco/opencode/pull/47696) chore: stop trusting tree-sitter install scripts
- [#47694](https://github.com/anomalyco/opencode/pull/47694) fix(app): give worktree creation a setup-length request deadline
- [#47693](https://github.com/anomalyco/opencode/pull/47693) fix(www): regenerate OpenAPI documents
- [#47676](https://github.com/anomalyco/opencode/pull/47676) fix(util): bound opencode.log by trimming its head in place
- [#47691](https://github.com/anomalyco/opencode/pull/47691) fix(desktop): emit preload as .cjs so it loads under --no-sandbox
- [#47688](https://github.com/anomalyco/opencode/pull/47688) fix(ai): raise typed errors for failed finishes
- [#47672](https://github.com/anomalyco/opencode/pull/47672) fix(desktop): export tail of oversized logs in debug bundle
- [#47638](https://github.com/anomalyco/opencode/pull/47638) docs(www): add Console documentation

#### 🐛 New Issues
- [#47613](https://github.com/anomalyco/opencode/issues/47613) Go subscription: persistent HTTP 429 (12h retry-after) despite low usage — limited for ~3 days 💬7
- [#47643](https://github.com/anomalyco/opencode/issues/47643) probe 💬3
- [#47606](https://github.com/anomalyco/opencode/issues/47606) App nolonger working sudenly 💬3
- [#47627](https://github.com/anomalyco/opencode/issues/47627) 希望任务结束后，仍一直重复一个问题消耗词元的bug 💬3
- [#47609](https://github.com/anomalyco/opencode/issues/47609) залупа 💬3
- [#47650](https://github.com/anomalyco/opencode/issues/47650) Opt-in discovery of Claude Code agents/commands from .claude/ dirs 💬2
- [#47652](https://github.com/anomalyco/opencode/issues/47652) Sessions disappear from the /sessions list after a local .git repo in the session's working directory is removed 💬2
- [#47584](https://github.com/anomalyco/opencode/issues/47584) MCP server request timeout in Opencode Desktop 💬2
- [#47646](https://github.com/anomalyco/opencode/issues/47646) openai: ChatGPT OAuth reports 400k context for long-context models `2.0` 💬2
- [#47647](https://github.com/anomalyco/opencode/issues/47647) Blockers seem to terminate session forever `needs:compliance` 💬2
- [#47634](https://github.com/anomalyco/opencode/issues/47634) provider (Console Go): constant rate_limit_exceeded despite usage far below quota `2.0` 💬2
- [#47698](https://github.com/anomalyco/opencode/issues/47698) [FEATURE]: Add opencode-twg to the OpenCode Ecosystem 💬1
- [#47697](https://github.com/anomalyco/opencode/issues/47697) cli(v2): node build lists no models `2.0` 💬1
- [#47692](https://github.com/anomalyco/opencode/issues/47692) [FEATURE]: OpenCode Remote Control 💬1
- [#47690](https://github.com/anomalyco/opencode/issues/47690) Desktop app double-prefixes OpenRouter model IDs when loading from workspace file 💬1
- [#47683](https://github.com/anomalyco/opencode/issues/47683) References to a deleted session outlive it: address bar, recent-tab pointer and persisted handoff 💬1
- [#47674](https://github.com/anomalyco/opencode/issues/47674) permission.ask plugin hook is never triggered 💬1
- [#47654](https://github.com/anomalyco/opencode/issues/47654) Plugin hook "permission.ask" is dead code — declared (and still taught by the bundled customize-opencode skill) but never invoked since v1.3.0 💬1
- [#47653](https://github.com/anomalyco/opencode/issues/47653) [opencode2 serve] Critical error in the Basic Auth process `2.0` 💬1
- [#47649](https://github.com/anomalyco/opencode/issues/47649) install: documented env vars are ignored by script, flags are undocumented, PATH modification is forced 💬1
- [#47687](https://github.com/anomalyco/opencode/issues/47687) Text renderables pass control characters and ANSI escape sequences from content to the terminal verbatim `2.0`
- [#47685](https://github.com/anomalyco/opencode/issues/47685) Exhausted provider budgets are retried: 402 and structured quota codes are classified from message text only
- [#47681](https://github.com/anomalyco/opencode/issues/47681) Bootstrap queries are refetched immediately: no staleTime, and Windows directories produce two cache entries
- [#47679](https://github.com/anomalyco/opencode/issues/47679) [FEATURE]: Desktop client: intercept built-in slash commands (/new, /clear) in the input
- [#47677](https://github.com/anomalyco/opencode/issues/47677) App bootstrap fetches the whole models.dev catalog from /provider on every start, once per project
- [#47665](https://github.com/anomalyco/opencode/issues/47665) cli(v2): positional directory resolved locally even with --server, fails on remote-only paths `2.0`
- [#47667](https://github.com/anomalyco/opencode/issues/47667) [FEATURE]: Add opencode-kevin to the OpenCode Ecosystem
- [#47645](https://github.com/anomalyco/opencode/issues/47645) web: file attachments silently dropped on HTTP remote host — crypto.subtle undefined
- [#47644](https://github.com/anomalyco/opencode/issues/47644) MCP: every tool-list failure collapses to "Failed to get tools" — the underlying error is discarded

#### 🔒 Closed Issues
- [#47643](https://github.com/anomalyco/opencode/issues/47643) probe
- [#47606](https://github.com/anomalyco/opencode/issues/47606) App nolonger working sudenly
- [#47627](https://github.com/anomalyco/opencode/issues/47627) 希望任务结束后，仍一直重复一个问题消耗词元的bug
- [#47609](https://github.com/anomalyco/opencode/issues/47609) залупа
- [#42481](https://github.com/anomalyco/opencode/issues/42481) [BUG]: Local TUI plugins fail to load in the node build (opencode2-node)
- [#47650](https://github.com/anomalyco/opencode/issues/47650) Opt-in discovery of Claude Code agents/commands from .claude/ dirs
- [#46691](https://github.com/anomalyco/opencode/issues/46691) Windows 11: OpenCode Desktop crashes on launch with repeated GPU process failures (0x80000003)
- [#47647](https://github.com/anomalyco/opencode/issues/47647) Blockers seem to terminate session forever
- [#47654](https://github.com/anomalyco/opencode/issues/47654) Plugin hook "permission.ask" is dead code — declared (and still taught by the bundled customize-opencode skill) but never invoked since v1.3.0
- [#47653](https://github.com/anomalyco/opencode/issues/47653) [opencode2 serve] Critical error in the Basic Auth process
- [#47506](https://github.com/anomalyco/opencode/issues/47506) GPT-6 Astra Priority tier is stripped by the bundled OpenAI SDK

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,687 · **Open issues:** 1,313 · **Last push:** <1h ago

Today, Qwen Code released two new versions: v0.23.1-preview.1 and v0.23.0-nightly.20260906.92a8a8d179, both featuring enhancements that allow for better visualization and management of dynamic workflow runs developed by @qqqys, and performance improvements in session workflow projection by @yiliang114. In addition, merged pull requests addressed a fix for the CI pipeline to align E2E Smoke with timeout allowances and removed a redundant project verification step. Among the new issues, the bug report regarding the channel ownership model failing to account for user-scope settings in home-directory workspaces (#11186) is gaining traction, indicating potential challenges in user management within the application.

#### 🚀 New Releases
- [v0.23.1-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.1) Release v0.23.1-preview.1
- [v0.23.0-nightly.20260906.92a8a8d179](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260906.92a8a8d179) Release v0.23.0-nightly.20260906.92a8a8d179
- [v0.23.0-nightly.20260905.0c945a6136](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260905.0c945a6136) Release v0.23.0-nightly.20260905.0c945a6136

#### ✅ Merged PRs
- [#11212](https://github.com/QwenLM/qwen-code/pull/11212) fix(ci): give web-shell E2E Smoke the ECS timeout allowance its siblings have
- [#11195](https://github.com/QwenLM/qwen-code/pull/11195) ci(release): drop the redundant Format Project step that verifies nothing (#11109)

#### 🐛 New Issues
- [#11146](https://github.com/QwenLM/qwen-code/issues/11146) fix(core): pre-aborted tool requests can wait behind an unrelated active batch `priority/P2` `status/waiting-for-feedback` `type/bug` `category/tools` 💬4
- [#11186](https://github.com/QwenLM/qwen-code/issues/11186) bug(serve): channel ownership model does not cover a home-directory workspace reading user-scope settings `priority/P2` `type/bug` `category/core` `scope/settings` 💬3
- [#11162](https://github.com/QwenLM/qwen-code/issues/11162) fix(cli): normal queued tool cancellation skips completion cleanup `priority/P2` `type/bug` `category/tools` `scope/interactive` 💬3
- [#11178](https://github.com/QwenLM/qwen-code/issues/11178) bug(sdk): preserve user resource_link attachments during transcript normalization and replay `priority/P2` `type/bug` `category/ui` `daemon` 💬3
- [#11180](https://github.com/QwenLM/qwen-code/issues/11180) bug(skills): a skill's `PreToolUse` hook stops enforcing after `--continue`, while its instructions stay in context `priority/P1` `type/bug` `category/security` `scope/session-management` 💬3
- [#11228](https://github.com/QwenLM/qwen-code/issues/11228) An open right-click context menu does not consume keys: composer and tool-approval dialog act on the same keystroke `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬2
- [#11209](https://github.com/QwenLM/qwen-code/issues/11209) ci: web-shell E2E Smoke is the only job on the ECS pool still using a flat timeout, so contention kills it at 20 minutes `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#11227](https://github.com/QwenLM/qwen-code/issues/11227) /effort is not propagated to generic OpenAI-compatible backends `priority/P2` `category/core` `scope/commands` `scope/content-generation` 💬2
- [#11217](https://github.com/QwenLM/qwen-code/issues/11217) bug(cli): Anthropic SSE failures report successful headless JSON results `priority/P2` `type/bug` `category/cli` `scope/non-interactive` 💬2
- [#11215](https://github.com/QwenLM/qwen-code/issues/11215) bug(core): statusless SSE throttling errors skip rate-limit retry `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#11214](https://github.com/QwenLM/qwen-code/issues/11214) ci(qwen-autofix): prefilter issues.assigned so a create-time assignee does not start a doomed route job `priority/P2` `status/waiting-for-feedback` `type/bug` `category/development` 💬2
- [#11205](https://github.com/QwenLM/qwen-code/issues/11205) review: the filter screen on main lost six hardenings — read order, EACCES, U+FFFD, spawn timeouts, candidate cap, retention `priority/P2` `type/bug` `category/security` `scope/git` 💬2
- [#11198](https://github.com/QwenLM/qwen-code/issues/11198) Usage-statistics telemetry uploads raw tool-error text (including shell command lines) to RUM without redaction `priority/P1` `type/bug` `category/security` `scope/shell` 💬2
- [#11185](https://github.com/QwenLM/qwen-code/issues/11185) Release Failed for v0.23.1-preview.1 on 2026-09-06 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11193](https://github.com/QwenLM/qwen-code/issues/11193) cli: bootstrap help/version intercepts silently swallow a subcommand's free-text argument and exit 0 `priority/P2` `type/bug` `category/cli` `scope/commands` 💬2
- [#11166](https://github.com/QwenLM/qwen-code/issues/11166) Release Failed for v0.23.1-preview.1 on 2026-09-06 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11179](https://github.com/QwenLM/qwen-code/issues/11179) Release Failed for v0.23.1-preview.1 on 2026-09-06 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11173](https://github.com/QwenLM/qwen-code/issues/11173) Release Failed for v0.23.1-preview.1 on 2026-09-06 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11170](https://github.com/QwenLM/qwen-code/issues/11170) Release Failed for v0.23.1-preview.1 on 2026-09-06 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11226](https://github.com/QwenLM/qwen-code/issues/11226) Main CI failed: Qwen Code CI on 92a8a8d17957 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11219](https://github.com/QwenLM/qwen-code/issues/11219) Main CI failed: E2E Tests on 4dbfc0c1c1a4 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11210](https://github.com/QwenLM/qwen-code/issues/11210) Main CI failed: E2E Tests on 42481176c5e3 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#11191](https://github.com/QwenLM/qwen-code/issues/11191) Main CI failed: E2E Tests on 00fe690482a5 `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#11203](https://github.com/QwenLM/qwen-code/issues/11203) Main CI failed: E2E Tests on 9c1c41a98983 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11197](https://github.com/QwenLM/qwen-code/issues/11197) Main CI failed: E2E Tests on 1a86cd6c5940 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11183](https://github.com/QwenLM/qwen-code/issues/11183) Main CI failed: E2E Tests on 62d22cd48a70 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11176](https://github.com/QwenLM/qwen-code/issues/11176) Main CI failed: Qwen Code CI on 101b003f936c `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11182](https://github.com/QwenLM/qwen-code/issues/11182) Main CI failed: Qwen Code CI on 49e3ef626901 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11213](https://github.com/QwenLM/qwen-code/issues/11213) Deferred review findings from PR #11094

#### 🔒 Closed Issues
- [#11091](https://github.com/QwenLM/qwen-code/issues/11091) fix(export): mermaid (~6 MB) is still flattened into the exported transcript renderer
- [#11031](https://github.com/QwenLM/qwen-code/issues/11031) fix(export): stop embedding the Web Shell runtime in every HTML file
- [#11067](https://github.com/QwenLM/qwen-code/issues/11067) bug(skills): a skill's `PreToolUse` hook does not run when the skill is started with `/<skill-name>`
- [#10989](https://github.com/QwenLM/qwen-code/issues/10989) web-shell: the daemon prompt authority is only polled where the sidebar is mounted, so the #9487 indicator fix is inert in the VS Code companion
- [#11209](https://github.com/QwenLM/qwen-code/issues/11209) ci: web-shell E2E Smoke is the only job on the ECS pool still using a flat timeout, so contention kills it at 20 minutes
- [#11185](https://github.com/QwenLM/qwen-code/issues/11185) Release Failed for v0.23.1-preview.1 on 2026-09-06
- [#10757](https://github.com/QwenLM/qwen-code/issues/10757) Release Failed for v0.22.4-preview.0 on 2026-09-02
- [#10853](https://github.com/QwenLM/qwen-code/issues/10853) Release Failed for v0.23.0 on 2026-09-02
- [#11166](https://github.com/QwenLM/qwen-code/issues/11166) Release Failed for v0.23.1-preview.1 on 2026-09-06
- [#11179](https://github.com/QwenLM/qwen-code/issues/11179) Release Failed for v0.23.1-preview.1 on 2026-09-06
- [#11173](https://github.com/QwenLM/qwen-code/issues/11173) Release Failed for v0.23.1-preview.1 on 2026-09-06
- [#11170](https://github.com/QwenLM/qwen-code/issues/11170) Release Failed for v0.23.1-preview.1 on 2026-09-06
- [#11092](https://github.com/QwenLM/qwen-code/issues/11092) chore(deps): two majors of react-markdown are installed in one tree
- [#11191](https://github.com/QwenLM/qwen-code/issues/11191) Main CI failed: E2E Tests on 00fe690482a5
- [#10250](https://github.com/QwenLM/qwen-code/issues/10250) Deferred review findings from PR #10230

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): run_eval.py always reports 0% recall — install the eval artifact as a real skill; fix Windows stream reading, trigger detection, and parallel workers
- [#514](https://github.com/anthropics/skills/pull/514) Add document-typography skill: typographic quality control for generated documents
- [#1615](https://github.com/anthropics/skills/pull/1615) Add scnet-hpc skill
- [#538](https://github.com/anthropics/skills/pull/538) fix(pdf): correct case-sensitive file references in SKILL.md
- [#486](https://github.com/anthropics/skills/pull/486) Add ODT skill — OpenDocument text creation and template filling and parse ODT to HTML

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 389,055 · **Open issues:** 6,216 · **Last push:** <1h ago

On September 7, 2026, there were no new releases for OpenClaw, but significant progress was made with multiple merged pull requests focusing on performance enhancements and bug fixes. Notable improvements include the fix for isolating unreadable tool factory errors (#140534), optimization in session validation (#137976), and the closure of startup trace issues in the gateway (#122595). Additionally, a critical new issue emerged regarding a post-core update that causes child admits to remain indefinitely in progress (#139714), which could greatly affect user experience and system reliability. Overall, the day was marked by essential refinements alongside the identification of persistent issues needing further attention.

#### ✅ Merged PRs
- [#140526](https://github.com/openclaw/openclaw/pull/140526) fix(ui): align mobile chat messages with the composer
- [#140536](https://github.com/openclaw/openclaw/pull/140536) refactor(update): remove the package executor wrapper
- [#140532](https://github.com/openclaw/openclaw/pull/140532) refactor(agents): use canonical Gateway node inventory
- [#140534](https://github.com/openclaw/openclaw/pull/140534) fix(plugins): isolate unreadable tool factory errors
- [#118466](https://github.com/openclaw/openclaw/pull/118466) perf(agents): reuse stable route-model resolution across turns
- [#122595](https://github.com/openclaw/openclaw/pull/122595) fix(gateway): close startup trace on terminal failure
- [#140533](https://github.com/openclaw/openclaw/pull/140533) refactor(tests): share explicit model fallback configs
- [#140530](https://github.com/openclaw/openclaw/pull/140530) refactor(ui): share people card dismissal handling
- [#140529](https://github.com/openclaw/openclaw/pull/140529) fix(gateway): avoid false 304 responses for quoted ETags
- [#140524](https://github.com/openclaw/openclaw/pull/140524) refactor(googlechat): avoid unused text buffers
- [#140527](https://github.com/openclaw/openclaw/pull/140527) refactor(qa): reuse canonical process-counter parsers
- [#140523](https://github.com/openclaw/openclaw/pull/140523) fix(android): keep completed runs settled after delayed history
- [#140493](https://github.com/openclaw/openclaw/pull/140493) fix(update): report same-version channel switches as successful
- [#137976](https://github.com/openclaw/openclaw/pull/137976) perf(sessions): compile stored participant identity validation once
- [#140525](https://github.com/openclaw/openclaw/pull/140525) refactor(tests): share exact agent-turn failure fixtures
- [#140522](https://github.com/openclaw/openclaw/pull/140522) refactor(daemon): simplify LaunchAgent policy branches
- [#140517](https://github.com/openclaw/openclaw/pull/140517) refactor(update): reuse sealed SQLite admission helpers
- [#140521](https://github.com/openclaw/openclaw/pull/140521) refactor(tests): reuse Doctor command fixtures
- [#140477](https://github.com/openclaw/openclaw/pull/140477) fix(android): show full settings metrics and copy instance IDs
- [#140520](https://github.com/openclaw/openclaw/pull/140520) refactor(channels): reuse normalized allowlist results
- [#140516](https://github.com/openclaw/openclaw/pull/140516) refactor(plugin-sdk): consolidate provider preset construction
- [#140456](https://github.com/openclaw/openclaw/pull/140456) refactor(tests): remove unused parent context cache reset
- [#140414](https://github.com/openclaw/openclaw/pull/140414) fix(gateway): reduce repeated model work when listing sessions
- [#140515](https://github.com/openclaw/openclaw/pull/140515) refactor(config): remove inert defaults and duplicate Talk predicates
- [#140519](https://github.com/openclaw/openclaw/pull/140519) docs(triage): clarify owned PTY fallback
- [#140518](https://github.com/openclaw/openclaw/pull/140518) refactor: simplify Doctor migration test fixtures
- [#140480](https://github.com/openclaw/openclaw/pull/140480) refactor(cli): consolidate command startup ownership
- [#140513](https://github.com/openclaw/openclaw/pull/140513) improve(tests): batch ancestry fixture commits with fast-import
- [#140514](https://github.com/openclaw/openclaw/pull/140514) refactor(core): reuse grouped phone metadata
- [#140488](https://github.com/openclaw/openclaw/pull/140488) fix(codex): carry selected models into prompt hooks
- [#140481](https://github.com/openclaw/openclaw/pull/140481) fix(parallels): detect host networking before VMs start
- [#140506](https://github.com/openclaw/openclaw/pull/140506) fix(models): keep status plugin metadata isolated
- [#140512](https://github.com/openclaw/openclaw/pull/140512) fix(ci): keep compact GitHub plans within the job cap
- [#140510](https://github.com/openclaw/openclaw/pull/140510) refactor(channels): simplify config write target checks
- [#140509](https://github.com/openclaw/openclaw/pull/140509) refactor(tests): reuse deferred gates in reload handlers
- [#140511](https://github.com/openclaw/openclaw/pull/140511) chore(ui): refresh control ui locales
- [#135868](https://github.com/openclaw/openclaw/pull/135868) feat(triage): start installation-owned recovery after update and startup failures
- [#140478](https://github.com/openclaw/openclaw/pull/140478) fix: attribute slow session edits to internal waits
- [#140498](https://github.com/openclaw/openclaw/pull/140498) fix: distinguish sync and async admission in slow database warnings
- [#140489](https://github.com/openclaw/openclaw/pull/140489) refactor(plugin-sdk): simplify facade contracts and private relays
- [#140486](https://github.com/openclaw/openclaw/pull/140486) fix(ci): keep FRV on the selected GitHub transport
- [#140099](https://github.com/openclaw/openclaw/pull/140099) fix(models): prevent case-distinct status routes from mixing
- [#140502](https://github.com/openclaw/openclaw/pull/140502) refactor(tests): reuse deferred gates in post-attach tests
- [#140500](https://github.com/openclaw/openclaw/pull/140500) refactor(plugin-sdk): reuse canonical model normalizers
- [#140484](https://github.com/openclaw/openclaw/pull/140484) fix(ui): recover tabs after missed Gateway update notifications
- [#140496](https://github.com/openclaw/openclaw/pull/140496) fix(matrix): run fixture loaders natively under Bun
- [#140346](https://github.com/openclaw/openclaw/pull/140346) refactor(ai): remove unused retry sleep helper
- [#140472](https://github.com/openclaw/openclaw/pull/140472) docs: correct three factual errors in gateway and secrets pages
- [#140495](https://github.com/openclaw/openclaw/pull/140495) fix(ui): restore file editor focus after preview
- [#140491](https://github.com/openclaw/openclaw/pull/140491) fix(matrix): isolate CLI tests across runtimes
- [#140490](https://github.com/openclaw/openclaw/pull/140490) fix: use the installed WebSocket transport for node streams
- [#140485](https://github.com/openclaw/openclaw/pull/140485) fix(sdk): release buffered events when iterators close
- [#140483](https://github.com/openclaw/openclaw/pull/140483) refactor(tools): remove unreachable allowlist diagnostic state
- [#140403](https://github.com/openclaw/openclaw/pull/140403) test(gateway): table-drive device token lifecycle checks
- [#140386](https://github.com/openclaw/openclaw/pull/140386) refactor(delivery): reuse the canonical rendered batch plan type
- [#140385](https://github.com/openclaw/openclaw/pull/140385) test(exec): inline one-shot cleanup fixture
- [#136293](https://github.com/openclaw/openclaw/pull/136293) perf: bound code-point prefix allocations
- [#137235](https://github.com/openclaw/openclaw/pull/137235) fix: allow queued resets after restart recovery tombstones a chat
- [#139647](https://github.com/openclaw/openclaw/pull/139647) fix(matrix): accept the opt-in Bun runtime
- [#140476](https://github.com/openclaw/openclaw/pull/140476) improve: avoid repeated validation when loading cron jobs
- [#140469](https://github.com/openclaw/openclaw/pull/140469) perf: reduce duplicate session reads during worker cleanup
- [#140474](https://github.com/openclaw/openclaw/pull/140474) refactor(sandbox): share configured tool-list selection
- [#140475](https://github.com/openclaw/openclaw/pull/140475) refactor(tests): reuse deferred gates in config reload tests
- [#140471](https://github.com/openclaw/openclaw/pull/140471) fix(memory): preserve indentation in cited search snippets
- [#140426](https://github.com/openclaw/openclaw/pull/140426) fix: clear stale diagnostics after Gateway changes
- [#140462](https://github.com/openclaw/openclaw/pull/140462) refactor(tui): prepare session picker rows once per overlay
- [#140441](https://github.com/openclaw/openclaw/pull/140441) fix: keep plugin catalogs intact after discovery timeouts
- [#140460](https://github.com/openclaw/openclaw/pull/140460) refactor(config): reuse environment substitution for write-back
- [#140463](https://github.com/openclaw/openclaw/pull/140463) refactor(discord): remove retired auto-presence templates
- [#140459](https://github.com/openclaw/openclaw/pull/140459) fix(ui): finish roster refreshes during session activity
- [#140461](https://github.com/openclaw/openclaw/pull/140461) fix(setup): match prepared credentials to the model provider
- [#140438](https://github.com/openclaw/openclaw/pull/140438) fix: keep MiniMax discovery on the selected credential
- [#139231](https://github.com/openclaw/openclaw/pull/139231) fix(media): keep deferred audio and extraction providers discoverable
- [#140434](https://github.com/openclaw/openclaw/pull/140434) fix: avoid repeated xAI OAuth refresh during discovery
- [#140451](https://github.com/openclaw/openclaw/pull/140451) refactor(codex): remove redundant app-server forwarding
- [#140442](https://github.com/openclaw/openclaw/pull/140442) feat(crabbox): report cloud bootstrap phase timings
- [#140454](https://github.com/openclaw/openclaw/pull/140454) refactor(routing): reuse prepared event session targets
- [#140119](https://github.com/openclaw/openclaw/pull/140119) fix(test): avoid false native polling timeouts
- [#140453](https://github.com/openclaw/openclaw/pull/140453) test(gateway): retain saved source in reload fixtures
- [#136382](https://github.com/openclaw/openclaw/pull/136382) fix(feishu): fall back to post mode over table limit
- [#140411](https://github.com/openclaw/openclaw/pull/140411) fix: use the bundle-compatible Proxyline runtime under Bun
- [#140369](https://github.com/openclaw/openclaw/pull/140369) refactor: simplify diagnostic, backup, and runtime ownership
- [#139822](https://github.com/openclaw/openclaw/pull/139822) fix(agents): fit compacted context and prioritize foreground replies
- [#140345](https://github.com/openclaw/openclaw/pull/140345) test(process): share relay startup fixtures
- [#140444](https://github.com/openclaw/openclaw/pull/140444) refactor(trace): reuse the canonical usage counter type
- [#140446](https://github.com/openclaw/openclaw/pull/140446) refactor(node-host): share execution policy result fields
- [#140440](https://github.com/openclaw/openclaw/pull/140440) docs(gateway): split the configuration reference by domain
- [#140450](https://github.com/openclaw/openclaw/pull/140450) docs: drop /en/ prefix from 12 redirect destinations
- [#140448](https://github.com/openclaw/openclaw/pull/140448) refactor(agent-core): repair Unicode tails in one pass
- [#140399](https://github.com/openclaw/openclaw/pull/140399) fix(agents): retain final replies for nested tool runs
- [#140445](https://github.com/openclaw/openclaw/pull/140445) refactor(tests): remove unused Docker heartbeat fixtures
- [#140437](https://github.com/openclaw/openclaw/pull/140437) docs(web): split the Control UI page into task pages
- [#140310](https://github.com/openclaw/openclaw/pull/140310) fix: tool_search rejects calls that send both query and queries
- [#140419](https://github.com/openclaw/openclaw/pull/140419) fix(update): preserve rollback and truthful serving reports
- [#140294](https://github.com/openclaw/openclaw/pull/140294) fix: restore context when CLI recovery starts a fresh session
- [#140430](https://github.com/openclaw/openclaw/pull/140430) refactor(tests): retain transport-driven auth dismissal coverage
- [#140417](https://github.com/openclaw/openclaw/pull/140417) fix: stop unfinished subagents before resetting a conversation
- [#140436](https://github.com/openclaw/openclaw/pull/140436) fix(models): cap configured output at the final context window
- [#140439](https://github.com/openclaw/openclaw/pull/140439) refactor(mcp): reuse transport config normalization
- [#140433](https://github.com/openclaw/openclaw/pull/140433) test(gateway): preserve saved config in auth reload fixture
- [#140435](https://github.com/openclaw/openclaw/pull/140435) fix(plugins): inherit active config for embedded agent runs
- [#140432](https://github.com/openclaw/openclaw/pull/140432) refactor(tui): remove test-only shutdown timer hooks
- [#140330](https://github.com/openclaw/openclaw/pull/140330) refactor(doctor): share compaction config traversal
- [#138345](https://github.com/openclaw/openclaw/pull/138345) fix(agents): preserve channel silent-reply guidance
- [#136045](https://github.com/openclaw/openclaw/pull/136045) fix(doctor): restore LINE and Mattermost account promotion
- [#140410](https://github.com/openclaw/openclaw/pull/140410) fix(tasks): cancel resumed yielded subagent tasks
- [#140427](https://github.com/openclaw/openclaw/pull/140427) docs: remove the empty release-sections nav group
- [#140420](https://github.com/openclaw/openclaw/pull/140420) fix(tooling): omit Codex machine squash credit
- [#140384](https://github.com/openclaw/openclaw/pull/140384) chore(ui): refresh control ui locales
- [#140415](https://github.com/openclaw/openclaw/pull/140415) refactor(plugin-sdk): reuse native approval input contracts
- [#138985](https://github.com/openclaw/openclaw/pull/138985) fix: recover final answers after WebSocket disconnects
- [#140335](https://github.com/openclaw/openclaw/pull/140335) fix: silent model WebSocket streams hang past the idle timeout
- [#140409](https://github.com/openclaw/openclaw/pull/140409) perf(ai): skip discarded text assembly for image tool results
- [#140333](https://github.com/openclaw/openclaw/pull/140333) fix(ui): distinguish failed GitHub status checks from disconnected accounts
- [#140408](https://github.com/openclaw/openclaw/pull/140408) refactor(cron): share runtime feedback schema fields
- [#140377](https://github.com/openclaw/openclaw/pull/140377) fix: avoid duplicate cloud worker teardown during recovery
- [#138386](https://github.com/openclaw/openclaw/pull/138386) fix(cli): show allowlist grant scope in approvals get
- [#140407](https://github.com/openclaw/openclaw/pull/140407) refactor(ui): reuse shared requirement records
- [#140311](https://github.com/openclaw/openclaw/pull/140311) refactor: simplify queue state and infrastructure dispatch
- [#140325](https://github.com/openclaw/openclaw/pull/140325) refactor(gateway): share empty workspace directory cleanup
- [#140323](https://github.com/openclaw/openclaw/pull/140323) refactor(update): simplify transaction candidate bookkeeping
- [#140289](https://github.com/openclaw/openclaw/pull/140289) fix(tts): preserve channel delivery decisions
- [#140379](https://github.com/openclaw/openclaw/pull/140379) fix(chat): fence delayed history at terminal retirement
- [#140402](https://github.com/openclaw/openclaw/pull/140402) chore(tests): speed up large upload byte checks
- [#140390](https://github.com/openclaw/openclaw/pull/140390) docs(start): repair the first-run path from landing page to first channel
- [#140391](https://github.com/openclaw/openclaw/pull/140391) docs: split oversized navigation groups and sort service lists
- [#140400](https://github.com/openclaw/openclaw/pull/140400) refactor(workers): share current access eligibility checks
- [#140395](https://github.com/openclaw/openclaw/pull/140395) refactor(feishu): drop inert comment upload policy
- [#140394](https://github.com/openclaw/openclaw/pull/140394) refactor(gateway): reuse protocol handshake credential types
- [#140372](https://github.com/openclaw/openclaw/pull/140372) perf(plugins): reuse metadata owners during SDK imports
- [#140324](https://github.com/openclaw/openclaw/pull/140324) refactor(plugins): use canonical runtime type contracts
- [#140367](https://github.com/openclaw/openclaw/pull/140367) fix: truncated OpenCode Go completions stream after tools reports a generic agent failure
- [#140389](https://github.com/openclaw/openclaw/pull/140389) perf(agents): reduce work in verbose tool descriptions
- [#140362](https://github.com/openclaw/openclaw/pull/140362) fix(errors): preserve diagnostics and successful tool results
- [#137330](https://github.com/openclaw/openclaw/pull/137330) fix(auto-reply): record pre-run directive rejections as skipped dispatch turns
- [#140267](https://github.com/openclaw/openclaw/pull/140267) chore(i18n): refresh native locales
- [#138275](https://github.com/openclaw/openclaw/pull/138275) fix(gateway): preserve document context in active-run steering
- [#140371](https://github.com/openclaw/openclaw/pull/140371) refactor(ai): share initial assistant message construction
- [#140382](https://github.com/openclaw/openclaw/pull/140382) perf(matrix): avoid account loading for empty Doctor scans
- [#140374](https://github.com/openclaw/openclaw/pull/140374) test(ui): consolidate ClawHub trust-error cases
- [#140254](https://github.com/openclaw/openclaw/pull/140254) docs(plugins): mark generated reference pages and fix their shared template
- [#140315](https://github.com/openclaw/openclaw/pull/140315) fix: let background learning maintain complete Workshop skills
- [#140157](https://github.com/openclaw/openclaw/pull/140157) fix: preserve emoji in remote desktop text input
- [#140336](https://github.com/openclaw/openclaw/pull/140336) feat(onboarding): require explicit AI choice in desktop and Control UI
- [#140370](https://github.com/openclaw/openclaw/pull/140370) refactor(doctor): remove redundant config writebacks
- [#140364](https://github.com/openclaw/openclaw/pull/140364) perf(cli): deduplicate diagnostic issues by exact key
- [#139943](https://github.com/openclaw/openclaw/pull/139943) refactor(tests): table Ollama endpoint alias cases
- [#140182](https://github.com/openclaw/openclaw/pull/140182) fix(android): keep voice and connection controls readable
- [#140361](https://github.com/openclaw/openclaw/pull/140361) refactor(ai): share native OpenAI client construction
- [#140368](https://github.com/openclaw/openclaw/pull/140368) fix: avoid loading saved prompts for session sharing
- [#139990](https://github.com/openclaw/openclaw/pull/139990) fix(tui): show canonical provider after local model changes
- [#140365](https://github.com/openclaw/openclaw/pull/140365) refactor(ui): reuse Workshop protocol types
- [#140360](https://github.com/openclaw/openclaw/pull/140360) perf(tui): skip hidden thinking presentation work
- [#140259](https://github.com/openclaw/openclaw/pull/140259) refactor(update): simplify verification typing
- [#140247](https://github.com/openclaw/openclaw/pull/140247) test(android): use inbox snapshot for approval readiness
- [#138322](https://github.com/openclaw/openclaw/pull/138322) fix(cron): clean up placed sessions when jobs are removed
- [#140233](https://github.com/openclaw/openclaw/pull/140233) refactor(channels): inline one-use discovery selectors
- [#140111](https://github.com/openclaw/openclaw/pull/140111) fix(android): retire resolved approval cards with their result
- [#139727](https://github.com/openclaw/openclaw/pull/139727) fix(nostr): accept successful publishes regardless of relay reason
- [#140202](https://github.com/openclaw/openclaw/pull/140202) fix(transcripts): settle duplicate auto-start retries
- [#140008](https://github.com/openclaw/openclaw/pull/140008) fix(agents): preserve bounded search values in Code Mode
- [#140191](https://github.com/openclaw/openclaw/pull/140191) perf(gateway): avoid repeated ancestry reads for merged PR heads
- [#140181](https://github.com/openclaw/openclaw/pull/140181) refactor(native): share device service adapters
- [#123624](https://github.com/openclaw/openclaw/pull/123624) fix(agents): stabilize delivery-mode prompt caching
- [#137978](https://github.com/openclaw/openclaw/pull/137978) fix: ask_user suggests tapping options without buttons
- [#137351](https://github.com/openclaw/openclaw/pull/137351) fix(doctor): count selected bootstrap hook files
- [#139972](https://github.com/openclaw/openclaw/pull/139972) fix(ui): keep waiting time owned by the active turn
- [#140173](https://github.com/openclaw/openclaw/pull/140173) fix(gateway): honor HTTP dates when revalidating assets and media
- [#140189](https://github.com/openclaw/openclaw/pull/140189) refactor(daemon): simplify status collection
- [#122373](https://github.com/openclaw/openclaw/pull/122373) fix(cli): ignore quoted JSON examples in mixed output
- [#140329](https://github.com/openclaw/openclaw/pull/140329) perf(cli): streamline telemetry exporter summaries

#### 🐛 New Issues
- [#139714](https://github.com/openclaw/openclaw/issues/139714) [Bug]: post-core update resume child admits an update_runs row it can never finalize — `openclaw status` reports "update in progress" forever `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬7
- [#139578](https://github.com/openclaw/openclaw/issues/139578) [Bug]: llama.cpp managed EmbeddingGemma runs at server-default ubatch 512 in 2026.9.2 (regression from #134389 / c97c5b65e08d) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `impact:session-state` 💬6
- [#140535](https://github.com/openclaw/openclaw/issues/140535) Discord /new returns “No reply was generated” and does not reset the channel session `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬5
- [#139847](https://github.com/openclaw/openclaw/issues/139847) [Bug]: message sent while a reply run is active is dropped — "Reply operation has no active tool authority snapshot" (regression in 2026.9.2) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#140129](https://github.com/openclaw/openclaw/issues/140129) [Bug] 2026.9.2 Anthropic cache stuck at ~46k tools+system prefix on long sessions — session:sanitized rewrites history fingerprints `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬4
- [#140010](https://github.com/openclaw/openclaw/issues/140010) Sleep/resume on Windows: after wake, UI/WebSocket reconnects can fail for 30-60s+ (thaw recovery defers behind busy gateway + event-loop stalls) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬4
- [#139994](https://github.com/openclaw/openclaw/issues/139994) [Bug] Control UI chat on Android: large asymmetric left margin on message text since 2026.9.2 (1:1 session renders as non-direct) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#140466](https://github.com/openclaw/openclaw/issues/140466) [Bug]: xAI OAuth auto alias resolves to its canonical model, then fails runtime auth rematerialization `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#139710](https://github.com/openclaw/openclaw/issues/139710) [Bug]: mid-turn plugin-generation supersede kills system-agent turn and its planner fallback, reported as unreachable inference with an `openclaw onboard` remedy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬3
- [#140214](https://github.com/openclaw/openclaw/issues/140214) [Bug]: memory.search.extraPaths silently omits a configured symlink root `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#140161](https://github.com/openclaw/openclaw/issues/140161) Windows: gateway cold boot in scheduled-task mode (--task-supervisor, hidden vbs launcher) hangs 5-7+ min or silently exits code 0; foreground mode boots in 7-12s `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬3
- [#139809](https://github.com/openclaw/openclaw/issues/139809) [Bug]: Telegram does not receive protected secrets prompt from Codex `bug` `no-stale` `bug:behavior` `P1` 💬3
- [#140052](https://github.com/openclaw/openclaw/issues/140052) Visible-answer retry overrides heartbeat NO_REPLY — unsolicited channel message delivered `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#140497](https://github.com/openclaw/openclaw/issues/140497) [Bug]: Discord setup accepts application ID as bot token, marks channel configured, never starts (lastError=null) `clawsweeper:needs-live-repro` `P0` `issue-rating: 🐚 platinum hermit` `maturity:stable` 💬2
- [#139672](https://github.com/openclaw/openclaw/issues/139672) claude-cli agentRuntime: subagent spawn fails with "embedded tool authority registration does not match its attempt" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬2
- [#140482](https://github.com/openclaw/openclaw/issues/140482) [Bug]: xAI OAuth login overwrites the Grok OAuth catalog with the API catalog `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#140492](https://github.com/openclaw/openclaw/issues/140492) [Bug]: File preview Edit returns focus to Preview instead of the editor `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#140359](https://github.com/openclaw/openclaw/issues/140359) ChatGPT/Codex model discovery times out at 5s fetchWithSsrFGuard cap; gpt-6-astra subscription route never registers (direct fetch to same endpoint: ~250ms) `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬2
- [#140455](https://github.com/openclaw/openclaw/issues/140455) google-meet 2026.9.2: agent voice broken on current Meet — circular-JSON in-call crash + audio-routing verification `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140464](https://github.com/openclaw/openclaw/issues/140464) [Bug]: Usage tab counts cron prompt twice `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#140416](https://github.com/openclaw/openclaw/issues/140416) CLI: bare '--import tsx' in resolveRuntimeWorkerArgv breaks every worker spawn outside a package-root cwd `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140354](https://github.com/openclaw/openclaw/issues/140354) [Bug]: Resumed subagent tasks cannot be cancelled because stable task IDs are compared with execution IDs `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#140053](https://github.com/openclaw/openclaw/issues/140053) session.reset daily mode: freshness check skipped on several post-boundary messages, reset fires mid-conversation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#139960](https://github.com/openclaw/openclaw/issues/139960) [Bug]: Session reset racing a live turn flush persists a row the canonical validator treats as terminal corruption, bricking the agent on all surfaces `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#140376](https://github.com/openclaw/openclaw/issues/140376) Make agent deny-list configurable and fix local automations CLI auth `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#140373](https://github.com/openclaw/openclaw/issues/140373) `skillCollectionReview` job fails with ProviderAuthError when the agent's model uses the `claude-cli` agentRuntime — same class as #95693, which was closed as fixed but did not cover this path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#140179](https://github.com/openclaw/openclaw/issues/140179) Android Settings truncates voice readiness and connection labels at large text sizes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#140295](https://github.com/openclaw/openclaw/issues/140295) [Bug]: Codex image transport returns 941x1672/medium despite 2160x3840/high request `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140288](https://github.com/openclaw/openclaw/issues/140288) Control UI browser panel: screenshot fetch returns 401 for remote (Tailscale) clients `P2` `impact:ux-friction` 💬2
- [#140292](https://github.com/openclaw/openclaw/issues/140292) OC transport: ZDR orgs reject `previous_response_id` — multi-turn/tool turns fail for Responses-only models (gpt-6-astra) `P1` `impact:auth-provider` 💬2
- [#140279](https://github.com/openclaw/openclaw/issues/140279) [Bug]: Isolated group heartbeat reports incomplete MCP from a generic policy warning `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140246](https://github.com/openclaw/openclaw/issues/140246) [Bug]: Skill Workshop guardrail incorrectly blocks editing repository-owned skill source `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140193](https://github.com/openclaw/openclaw/issues/140193) [Bug]: backup SQLite discovery treats macOS AppleDouble `._*.sqlite` files as databases `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140204](https://github.com/openclaw/openclaw/issues/140204) Worktree session creation reports "not a git checkout" when the repo has no commits `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139950](https://github.com/openclaw/openclaw/issues/139950) [Bug]: Control UI waiting timer carries over between turns `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139867](https://github.com/openclaw/openclaw/issues/139867) [Bug]: Cold prepared-runtime registration stalls Gateway requests for minutes `bug` `maintainer` `P1` `clawsweeper:needs-live-repro` 💬2
- [#139813](https://github.com/openclaw/openclaw/issues/139813) [Bug]: macOS LaunchDaemon ownership scan aborts on a third-party plist that is readable via fs but denied to plutil by endpoint-security software, blocking all gateway service activation `security` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#139838](https://github.com/openclaw/openclaw/issues/139838) [Bug]: Codex settled-turn recovery swallows history projection errors as context_unavailable `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140128](https://github.com/openclaw/openclaw/issues/140128) [Bug]: macOS managed CLI inspection replaces an existing CLI selection `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140100](https://github.com/openclaw/openclaw/issues/140100) [Bug]: doctor --session-sqlite import drops every assistant message with provider "codex" (2026.9.2, legacy JSONL → SQLite) `impact:session-state` `impact:data-loss` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#139996](https://github.com/openclaw/openclaw/issues/139996) [Bug]: openai-completions merges `delta.reasoning` into the answer (OpenRouter-style sibling of #95280, not covered by #95283) `bug` `bug:behavior` `P2` `impact:session-state` 💬2
- [#139768](https://github.com/openclaw/openclaw/issues/139768) Reduce repeated query compilation in transcript rewrites and ACP replay `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬2
- [#139963](https://github.com/openclaw/openclaw/issues/139963) [Bug]: nested subagent requester's yield-batch wake is armed but never dispatched, then cleared `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139751](https://github.com/openclaw/openclaw/issues/139751) [Bug]: Security audit isGpt5OrHigher incorrectly flags GPT-6 model IDs as below GPT-5 `security` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#139946](https://github.com/openclaw/openclaw/issues/139946) [Bug]: Control UI agent-switcher action label overflows for long agent names `P3` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#139909](https://github.com/openclaw/openclaw/issues/139909) [Bug]: Phone composer narrows to ~5-6 chars per line; long drafts unreadable while typing `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#139594](https://github.com/openclaw/openclaw/issues/139594) [Bug]: Agent avatar no longer rendered on assistant messages in Control UI chat (regression in 2026.9.2) `bug` `regression` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#139903](https://github.com/openclaw/openclaw/issues/139903) [Feature]: Dashboard filter to hide personal channel chats while keeping one shared agent `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#139671](https://github.com/openclaw/openclaw/issues/139671) Sessions tail decodes unrelated saved prompts in large session stores `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139853](https://github.com/openclaw/openclaw/issues/139853) Bare mcp__openclaw__* allowedTools wildcard shadows canUseTool (CLAUDE_SDK_CAN_USE_TOOL_SHADOWED) `P3` `impact:ux-friction` 💬2
- [#139583](https://github.com/openclaw/openclaw/issues/139583) 2026.9.2: gateway startup fails with "prepared model runtime publication timed out" on a 632-agent config; process idle for the final 120s (2026.9.1 published the same runtime in 94.5s) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#139830](https://github.com/openclaw/openclaw/issues/139830) Cron: isolated runs fail with 'prepared model runtime plugin generation was superseded' on 2026.9.2 `P1` `impact:other` 💬2
- [#140528](https://github.com/openclaw/openclaw/issues/140528) Quoted ETags containing commas can return false 304 responses `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140479](https://github.com/openclaw/openclaw/issues/140479) [Bug]: 2026.9.2 Gateway restart drain still aborts in-flight Codex stdio turns `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#140470](https://github.com/openclaw/openclaw/issues/140470) [Bug]: Adding memory citations removes snippet indentation `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140473](https://github.com/openclaw/openclaw/issues/140473) [Bug]: exec tool not exposed via bundleMcp bridge to claude-cli backend (2026.8.1) `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#140468](https://github.com/openclaw/openclaw/issues/140468) [Feature]: Named profile-owned message bookmarks in Control UI `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#140467](https://github.com/openclaw/openclaw/issues/140467) 2026.9.1 restart recovery can wedge main sessions; cleanup verifier is invalidated by read-only session watchers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#140457](https://github.com/openclaw/openclaw/issues/140457) [Bug]: continuation of llama-cpp plugin is unable to connect to unsloth hosted on the same machine `bug` `regression` 💬1
- [#140465](https://github.com/openclaw/openclaw/issues/140465) Node 22.23.2 is within engines, but four session tests fail on embedded-NUL SQLite reads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140447](https://github.com/openclaw/openclaw/issues/140447) [Bug]: Regression in v2026.8.1: mcp.sessionIdleTtlMs removed, breaks long-running background MCP servers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140398](https://github.com/openclaw/openclaw/issues/140398) [Bug]: Nested tool runs lose final replies after the launching turn closes `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#140443](https://github.com/openclaw/openclaw/issues/140443) Gateway RSS growth/OOM-restart cycle recurs on 2026.9.2 (macOS, non-cgroup) despite #74182/#136275 fixes `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#140355](https://github.com/openclaw/openclaw/issues/140355) [Bug]: Chat /reset acknowledges success without cleaning up unfinished subagent tasks `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#140405](https://github.com/openclaw/openclaw/issues/140405) [Bug]: Cron-spawned orchestrator stalls after sessions_yield — level-2 completions never reach the level-1 sub-agent (works from normal sessions) `P1` `clawsweeper:source-repro` `impact:session-state` `impact:message-loss` 💬1
- [#140425](https://github.com/openclaw/openclaw/issues/140425) Slow first session start on persistent nodes after Gateway updates `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#140421](https://github.com/openclaw/openclaw/issues/140421) feat(hooks): allow SecretRef on hooks.token (make doctor --fix rotation ref-aware instead of excluding the field) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#140406](https://github.com/openclaw/openclaw/issues/140406) [Bug]: claude-cli backend returns a clean-exit-but-empty completion on session resume, surfaced as a generic error card `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#140348](https://github.com/openclaw/openclaw/issues/140348) [Feature]: # OpenCode Go provider: add per-conversation `x-opencode-session` and a real `User-Agent` `enhancement` 💬1
- [#140287](https://github.com/openclaw/openclaw/issues/140287) [Bug]: one-off TTS requests override the non-voice delivery decision `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140404](https://github.com/openclaw/openclaw/issues/140404) Runtime context delivered in the `user` role, and inbound delimiters not escaped (2026.8.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#140401](https://github.com/openclaw/openclaw/issues/140401) Stuck-session watchdog aborts healthy long single-message replies at 6 min; threshold no longer configurable (2026.8.2, claude-cli backend) `P1` `impact:message-loss` 💬1
- [#140393](https://github.com/openclaw/openclaw/issues/140393) [Bug]: 2026.9.2 onboarding installs Codex but first dashboard chat fails with missing prepared runtime `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` `P0` 💬1
- [#140387](https://github.com/openclaw/openclaw/issues/140387) Cron: agentTurn jobs report lastRunStatus ok when the payload never ran ("false green") — proposal: artifact-freshness criterion + job preflight `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140383](https://github.com/openclaw/openclaw/issues/140383) [Bug]: macOS app crashes in SwiftUI toolbar update: unregistered displayMode observer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#140375](https://github.com/openclaw/openclaw/issues/140375) [Bug]: Gateway profile verification fails permanently when the Cloudflare Access identity is not GitHub-backed `bug` `regression` `impact:auth-provider` `P0` 💬1
- [#140351](https://github.com/openclaw/openclaw/issues/140351) runtime.gateway.request refusal names neither the plugin nor the cause `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#140363](https://github.com/openclaw/openclaw/issues/140363) Browser download action: unhandled rejection "Timeout waiting for download" crashes the entire gateway process `P1` `impact:crash-loop` 💬1
- [#140349](https://github.com/openclaw/openclaw/issues/140349) Memories hides stale-index warning and rebuild guidance `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140356](https://github.com/openclaw/openclaw/issues/140356) [Bug]: Successful /reset retains the previous task’s durable progress card `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#140340](https://github.com/openclaw/openclaw/issues/140340) [Bug]: Image avatars overlap chat text on small mobile screens `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140314](https://github.com/openclaw/openclaw/issues/140314) test: preserve safe subprocess diagnostics in agent exec live proof `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#140308](https://github.com/openclaw/openclaw/issues/140308) [Feature]: Fallback model pin is "sticky" — sessions never return to primary model after provider recovers `enhancement` `P2` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#140273](https://github.com/openclaw/openclaw/issues/140273) [Bug]: claude-cli-backed turns are tool-use-invisible in the OpenClaw transcript — cliSessionBindings doesn't reliably point at the CLI session that served the turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140265](https://github.com/openclaw/openclaw/issues/140265) Telegram: bot text_mention (display-name tap) in groups is not treated as a mention `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#140268](https://github.com/openclaw/openclaw/issues/140268) Opened in error 💬1
- [#140252](https://github.com/openclaw/openclaw/issues/140252) [Bug]: session last-used model is not cleared when agents.defaults.model.primary changes `P2` `impact:session-state` `impact:auth-provider` 💬1
- [#140261](https://github.com/openclaw/openclaw/issues/140261) [Bug]: sessions tail crashes (TypeError: reading 'trim') for any agent with a sessionId-less store entry — poisons unrelated --session-key requests too `P2` `impact:crash-loop` 💬1
- [#140258](https://github.com/openclaw/openclaw/issues/140258) [Bug]: detached subagent completion lacks Gateway scope and stale settle wake retries forever `P1` `impact:session-state` `impact:message-loss` 💬1
- [#140184](https://github.com/openclaw/openclaw/issues/140184) [Bug]: memory search --json emits no JSON when memory search is disabled `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#140253](https://github.com/openclaw/openclaw/issues/140253) [Bug]: sessions.patch cannot clear delivery.thread / threadId `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140244](https://github.com/openclaw/openclaw/issues/140244) Support file-backed prompts in `openclaw infer model run` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140243](https://github.com/openclaw/openclaw/issues/140243) [Bug] 2026.8.1 Retained pending inputs (interrupted/cancelled) cannot be dismissed in the main session — no UI, RPC, or CLI path `P2` `impact:ux-friction` 💬1
- [#140230](https://github.com/openclaw/openclaw/issues/140230) [Bug]: 2026.9.2 failed update leaves managed gateway stopped because recovery restart uses the older in-process binary `impact:crash-loop` `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#140109](https://github.com/openclaw/openclaw/issues/140109) Android approvals can show a denied result beside an actionable card `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140216](https://github.com/openclaw/openclaw/issues/140216) Ask OpenClaw (Custodian) worker can't resolve provider auth: neither SecretRef apiKey nor agent auth-store profiles `impact:auth-provider` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#140203](https://github.com/openclaw/openclaw/issues/140203) [Feature]: agentId alias map so sessions_send accepts human-facing seat names, not just config id `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140213](https://github.com/openclaw/openclaw/issues/140213) [Feature]: Allow multiple policy aliases to resolve to one configured model `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140153](https://github.com/openclaw/openclaw/issues/140153) [Bug]: Static HTTP date validators depend on the Gateway timezone `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#140050](https://github.com/openclaw/openclaw/issues/140050) Codex managed resume can forward the previous model into turn/start despite an explicit model selection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#140192](https://github.com/openclaw/openclaw/issues/140192) Agent execution rhythm: long idle waits between tool calls; how to enable continuous autonomous progression? `P2` `impact:ux-friction` 💬1
- [#140172](https://github.com/openclaw/openclaw/issues/140172) Control UI Talk: hardcoded client-side barge-in VAD (no headphones = assistant cut off after ~2 audio frames) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140005](https://github.com/openclaw/openclaw/issues/140005) Allow Claw removal to drain its verified config-owned monitors `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#140168](https://github.com/openclaw/openclaw/issues/140168) Memory search background maintenance repeatedly loses full-reindex publication races `P2` `impact:session-state` 💬1
- [#140162](https://github.com/openclaw/openclaw/issues/140162) Windows: gateway restart kills ready/slow-booting gateway as "stale process" after 181s timeout, and never finds manually-started foreground gateways `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#140159](https://github.com/openclaw/openclaw/issues/140159) Feature request: expose semantic_vad/eagerness for OpenAI Realtime Talk (currently hardcoded to server_vad) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140155](https://github.com/openclaw/openclaw/issues/140155) Discord shows transient rate-limit error even when configured model fallback later succeeds `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#140141](https://github.com/openclaw/openclaw/issues/140141) [Feature]: Preview available commits before confirming an update `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140121](https://github.com/openclaw/openclaw/issues/140121) [Bug]: dynamic per-turn tool catalog changes invalidate local LLM KV cache `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140103](https://github.com/openclaw/openclaw/issues/140103) [Bug]: Project sessions drop valid keyword memory matches `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#140101](https://github.com/openclaw/openclaw/issues/140101) [Bug]: Windows: embedded ACPX backend cannot launch any agent `bug` `regression` `P1` `impact:other` 💬1
- [#140080](https://github.com/openclaw/openclaw/issues/140080) Gateway restart runs paced cron jobs before their accepted next-check deadline `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#140085](https://github.com/openclaw/openclaw/issues/140085) ask_user tool never delivers to Telegram and session hangs indefinitely instead of self-recovering `impact:session-state` `impact:message-loss` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#140075](https://github.com/openclaw/openclaw/issues/140075) [Bug]: Reported token usage is off (openclaw vs openai dashboard) `bug` `bug:behavior` `P2` `clawsweeper:needs-info` 💬1
- [#140063](https://github.com/openclaw/openclaw/issues/140063) Plugin uninstall leaves dangling symlink load paths in configuration `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#140037](https://github.com/openclaw/openclaw/issues/140037) [Bug]: Telegram progress mode exposes failed tool rows when toolProgress is false `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140055](https://github.com/openclaw/openclaw/issues/140055) claude-cli: config hot reload rotates loopback MCP grants but keeps the resumed CLI session → 401 on the openclaw MCP server for every later turn `P1` `impact:session-state` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#139971](https://github.com/openclaw/openclaw/issues/139971) Side chat survives deletion and reappears in a recreated conversation `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#139989](https://github.com/openclaw/openclaw/issues/139989) [Bug]: background exec completion uses isolated heartbeat session, evicting local LLM KV cache `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139981](https://github.com/openclaw/openclaw/issues/139981) [Feature]: Make `reasoningDefault: "stream"` apply to allowlisted/paired senders on plain messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#139983](https://github.com/openclaw/openclaw/issues/139983) Investigate cron shell process-group timeout test stall in CI `maintainer` `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#139978](https://github.com/openclaw/openclaw/issues/139978) Stale transcript replay policy served after in-process plugin package swap `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#140007](https://github.com/openclaw/openclaw/issues/140007) Code Mode erases find/grep/bash results over half the output budget: details duplicate truncated content twice `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#139954](https://github.com/openclaw/openclaw/issues/139954) Reduce repeated keyed-state reads during plugin restores `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#139975](https://github.com/openclaw/openclaw/issues/139975) Empty client tool results are dropped or rejected by the HTTP compatibility endpoints `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#140003](https://github.com/openclaw/openclaw/issues/140003) Dispose scoped plugin resources after their last user finishes `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#139945](https://github.com/openclaw/openclaw/issues/139945) Manually forcing a disabled one-shot reminder re-enables its schedule `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#139964](https://github.com/openclaw/openclaw/issues/139964) [Bug]: kill reconciliation window: precise-cancel entries don't suppress completion delivery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139962](https://github.com/openclaw/openclaw/issues/139962) [Bug]: A single transient pre-stream HTTP 5xx from a provider transport kills an embedded agent run — no transport-level retry on the shared guarded fetch `P1` `impact:auth-provider` 💬1
- [#139961](https://github.com/openclaw/openclaw/issues/139961) [Bug]: Context-overflow precheck is skipped when a context engine owns compaction, so a prompt already over the attempt budget is shipped and billed before failing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139939](https://github.com/openclaw/openclaw/issues/139939) Control UI loses failed steer and redirect drafts after terminal acknowledgments `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#139926](https://github.com/openclaw/openclaw/issues/139926) [Bug]: Control UI does not distinguish maintenance from model waiting during long pre-response delays `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139857](https://github.com/openclaw/openclaw/issues/139857) Required Git reads accept truncated stdout as complete data `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#139917](https://github.com/openclaw/openclaw/issues/139917) [Bug]: allow-always persists reusable patterns for shell-carrier commands on Windows (sh -c / npm x / pnpm exec) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#139889](https://github.com/openclaw/openclaw/issues/139889) device.pair.approve rotation drops the shared-gateway-auth issuer, stranding browser device tokens `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬1
- [#139887](https://github.com/openclaw/openclaw/issues/139887) Bug: macOS supervisor cleanup rejects successful commands with EPERM `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#139883](https://github.com/openclaw/openclaw/issues/139883) [Bug]: `openclaw backup create` writes two near-identical archives ~100 ms apart instead of one (2026.8.2) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#139774](https://github.com/openclaw/openclaw/issues/139774) HTTP input URL downloads continue after client disconnect `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#139870](https://github.com/openclaw/openclaw/issues/139870) [Feature]: Gateway database schema preflight remains wall-clock serial across registered agent databases `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#139833](https://github.com/openclaw/openclaw/issues/139833) system-owned heartbeat jobs cannot be disabled — no UI or CLI option `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#139708](https://github.com/openclaw/openclaw/issues/139708) [Bug]: Workboard stylesheet fails in macOS app over loopback HTTP `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#139781](https://github.com/openclaw/openclaw/issues/139781) Agent Automations panel has no link to edit a job `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#139802](https://github.com/openclaw/openclaw/issues/139802) [Bug]: llama-cpp router discovery marks non-active models supportsTools:false even though the server reports true `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139756](https://github.com/openclaw/openclaw/issues/139756) feat: read/write/edit tools 支持指定文件编码 (encoding parameter) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139711](https://github.com/openclaw/openclaw/issues/139711) [Bug]: workboard_promote force:true does not persist — dependency pass reverts the card to its held status seconds later `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139723](https://github.com/openclaw/openclaw/issues/139723) [Bug]: Skill collection review fails with "different collection-review identities" error `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#139718](https://github.com/openclaw/openclaw/issues/139718) [Bug]: pinned ClawHub plugin installs get no stale-pin warning and doctor prescribes a no-op `plugins update` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#139707](https://github.com/openclaw/openclaw/issues/139707) [Bug]: update 2026.9.1→2026.9.2 fails restart with ENOENT — post-swap path lazily imports hashed chunks the update just deleted `impact:crash-loop` `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#139706](https://github.com/openclaw/openclaw/issues/139706) [Bug]: macOS companion exec host drops the request timeout and caps every system.run at 20s, then reports COMPANION_APP_UNAVAILABLE `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#139977](https://github.com/openclaw/openclaw/issues/139977) [Feature]: 让 reasoningDefault 对白名单/已配对发送者直接生效，去掉强制 "off" 的授权 gate

#### 🔒 Closed Issues
- [#124991](https://github.com/openclaw/openclaw/issues/124991) [Bug]: CLI session reseed is inert on SQLite session stores — loadCliSessionEntries reads the legacy per-session JSONL
- [#137056](https://github.com/openclaw/openclaw/issues/137056) memory-core: move maintenance off search/watch hot paths and keep invalidation per-file
- [#43690](https://github.com/openclaw/openclaw/issues/43690) Feishu: card fails with 'table number over limit' — should fallback or render tables as images
- [#139383](https://github.com/openclaw/openclaw/issues/139383) [Bug]: macOS npm upgrade from 2026.9.1 to 2026.9.2 leaves Gateway stopped and UI stuck updating
- [#139207](https://github.com/openclaw/openclaw/issues/139207) [Bug]: doctor false-positives 'unknown-model' for every google/* reference (manifest omits static catalog)
- [#139994](https://github.com/openclaw/openclaw/issues/139994) [Bug] Control UI chat on Android: large asymmetric left margin on message text since 2026.9.2 (1:1 session renders as non-direct)
- [#139249](https://github.com/openclaw/openclaw/issues/139249) [Bug]: Pending preview prevents complete Codex answer from surviving settlement
- [#137214](https://github.com/openclaw/openclaw/issues/137214) [Bug]: Restart-recovery tombstone blocks its own remedy — /new is stuck behind the failing message in the ordered ingress lane
- [#134495](https://github.com/openclaw/openclaw/issues/134495) [Bug]: Regression in v2026.8.1: `mcp.sessionIdleTtlMs` removed, breaks long-running background MCP servers
- [#138959](https://github.com/openclaw/openclaw/issues/138959) [Bug]: WebSocket error classification prevents final-answer recovery after tools settle
- [#137165](https://github.com/openclaw/openclaw/issues/137165) opencode-go: send required x-opencode-session header (vendor enforcing from 2026-09-06)
- [#127809](https://github.com/openclaw/openclaw/issues/127809) Bug: `/tasks` can report “All clear” while an owner-bound managed TaskFlow is still open
- [#137217](https://github.com/openclaw/openclaw/issues/137217) [Bug]: openclaw status reports 'no token' and 'waiting for delivery route' for a working store-backed SecretRef, while --deep reports OK
- [#138672](https://github.com/openclaw/openclaw/issues/138672) [Bug]: llama-cpp managed setup fails on macOS 26 arm64 — 15s --version timeout vs ~37s unsigned-binary security scan
- [#136966](https://github.com/openclaw/openclaw/issues/136966) [Bug]: Memory watcher falls back to per-file chokidar on EMFILE (one error per file, no polling degrade)
- [#78091](https://github.com/openclaw/openclaw/issues/78091) [Bug]: Open-WebUI creates new session per message instead of reusing persistent session
- [#138620](https://github.com/openclaw/openclaw/issues/138620) 2026.9.1: update repair loses external service policy in fresh Doctor child and cannot converge
- [#138724](https://github.com/openclaw/openclaw/issues/138724) Cloud sessions should start without a Gateway checkout
- [#104855](https://github.com/openclaw/openclaw/issues/104855) [Feature]: Feature Request: Pre-send Message Validation for Feishu Group Chat
- [#86417](https://github.com/openclaw/openclaw/issues/86417) macOS launchd Gateway still restarts via gateway-update/update.run; document and honor auto-update kill-switch
- [#137773](https://github.com/openclaw/openclaw/issues/137773) [Bug]: Docker: OPENCLAW_INSTALL_BROWSER=1 creates root-owned /home/node/.cache, breaking Gateway startup (SQLite temp dir)
- [#139341](https://github.com/openclaw/openclaw/issues/139341) [Bug]: watchdog-released ingress retry is rejected as skipped:duplicate by the committed inbound dedupe and recorded as completed — queued message silently destroyed
- [#139109](https://github.com/openclaw/openclaw/issues/139109) [Bug]: openclaw doctor --fix rejects boolean launchctl print-disabled output on macOS 12
- [#139527](https://github.com/openclaw/openclaw/issues/139527) [Bug]: 2026.9.2 gateway loops on stale codex@beta; recovery requires explicit npm source in affected image
- [#134685](https://github.com/openclaw/openclaw/issues/134685) Connect failed updates and Gateway startup to existing triage
- [#140492](https://github.com/openclaw/openclaw/issues/140492) [Bug]: File preview Edit returns focus to Preview instead of the editor
- [#127677](https://github.com/openclaw/openclaw/issues/127677) Compacted reseed path returns the post-compaction tail verbatim without consulting the raw-transcript reseed allowlist — intended?
- [#140354](https://github.com/openclaw/openclaw/issues/140354) [Bug]: Resumed subagent tasks cannot be cancelled because stable task IDs are compared with execution IDs
- [#140376](https://github.com/openclaw/openclaw/issues/140376) Make agent deny-list configurable and fix local automations CLI auth
- [#137198](https://github.com/openclaw/openclaw/issues/137198) [Bug]: pre-run directive rejection leaves no useful diagnostic trace for the rejected inbound message
- [#138225](https://github.com/openclaw/openclaw/issues/138225) [Bug]: Document attachments on an active-run steer never reach the model — file extraction is skipped on the steer path
- [#140179](https://github.com/openclaw/openclaw/issues/140179) Android Settings truncates voice readiness and connection labels at large text sizes
- [#140288](https://github.com/openclaw/openclaw/issues/140288) Control UI browser panel: screenshot fetch returns 401 for remote (Tailscale) clients
- [#140292](https://github.com/openclaw/openclaw/issues/140292) OC transport: ZDR orgs reject `previous_response_id` — multi-turn/tool turns fail for Responses-only models (gpt-6-astra)
- [#138299](https://github.com/openclaw/openclaw/issues/138299) [Bug]: `cron rm` / `automations action:"remove"` leaves orphan `agent:<agentId>:cron:` sessions and cloud worker placement records that block subsequent `sessions delete` / `archive`
- [#135354](https://github.com/openclaw/openclaw/issues/135354) ask_user prompts say "Tap an option" on channels that render no tappable control
- [#137308](https://github.com/openclaw/openclaw/issues/137308) openclaw doctor bootstrap budget excludes hook-injected files, under-reporting the total that silently drops files
- [#139950](https://github.com/openclaw/openclaw/issues/139950) [Bug]: Control UI waiting timer carries over between turns
- [#139867](https://github.com/openclaw/openclaw/issues/139867) [Bug]: Cold prepared-runtime registration stalls Gateway requests for minutes
- [#139838](https://github.com/openclaw/openclaw/issues/139838) [Bug]: Codex settled-turn recovery swallows history projection errors as context_unavailable
- [#138382](https://github.com/openclaw/openclaw/issues/138382) `file_fetch` discards the canonical path it already validated when calling `saveMediaBuffer` — every fetched file is saved and forwarded as a bare UUID
- [#137864](https://github.com/openclaw/openclaw/issues/137864) [Bug] memory-core embeddings fail against endpoints with per-request row caps (e.g. DashScope: "batch size ... larger than 10")
- [#131374](https://github.com/openclaw/openclaw/issues/131374) [Bug]: Silent cron heartbeat fails when its transient base session has no durable node
- [#127128](https://github.com/openclaw/openclaw/issues/127128) [Bug]: ACPX cleanup failure retains a closed managed delegate
- [#139185](https://github.com/openclaw/openclaw/issues/139185) Windows double-drive-letter path bug (C:\c\Users\...) via MSYS2 git output in worktrees.branches and backup repository check [2026.9.1]
- [#139768](https://github.com/openclaw/openclaw/issues/139768) Reduce repeated query compilation in transcript rewrites and ACP replay
- [#138706](https://github.com/openclaw/openclaw/issues/138706) [Bug]: Windows Job anchor reintroduces a visible Gateway console despite the hidden VBS launcher
- [#139499](https://github.com/openclaw/openclaw/issues/139499) [Bug]: Telegram /models hides anthropic/* models bound to claude-cli (auth checker skips applyCliRuntimeModelAuthAvailability)
- [#139498](https://github.com/openclaw/openclaw/issues/139498) [Bug]: models.list/TUI picker stays on the static startup catalog after a Gateway restart until a refresh:true call
- [#139494](https://github.com/openclaw/openclaw/issues/139494) [Bug]: gateway.auth.token literal "undefined" is accepted silently; doctor and security audit do not flag it
- [#139594](https://github.com/openclaw/openclaw/issues/139594) [Bug]: Agent avatar no longer rendered on assistant messages in Control UI chat (regression in 2026.9.2)
- [#139671](https://github.com/openclaw/openclaw/issues/139671) Sessions tail decodes unrelated saved prompts in large session stores
- [#139853](https://github.com/openclaw/openclaw/issues/139853) Bare mcp__openclaw__* allowedTools wildcard shadows canUseTool (CLAUDE_SDK_CAN_USE_TOOL_SHADOWED)
- [#127199](https://github.com/openclaw/openclaw/issues/127199) [Bug]: sessions limit applies after full-store cloning and enrichment
- [#136246](https://github.com/openclaw/openclaw/issues/136246) [Bug]: Custom ACP agents are impossible to configure on Windows - schema rejects argv while the acpx runtime rejects command strings
- [#139583](https://github.com/openclaw/openclaw/issues/139583) 2026.9.2: gateway startup fails with "prepared model runtime publication timed out" on a 632-agent config; process idle for the final 120s (2026.9.1 published the same runtime in 94.5s)
- [#139830](https://github.com/openclaw/openclaw/issues/139830) Cron: isolated runs fail with 'prepared model runtime plugin generation was superseded' on 2026.9.2
- [#133898](https://github.com/openclaw/openclaw/issues/133898) [Bug]: openclaw backup git create fails with "Invalid string length" on large agent DB (~1.9 GB)
- [#140528](https://github.com/openclaw/openclaw/issues/140528) Quoted ETags containing commas can return false 304 responses
- [#140470](https://github.com/openclaw/openclaw/issues/140470) [Bug]: Adding memory citations removes snippet indentation
- [#137108](https://github.com/openclaw/openclaw/issues/137108) [Bug]: Debug event log retains events from the previous Gateway after switching connections
- [#140398](https://github.com/openclaw/openclaw/issues/140398) [Bug]: Nested tool runs lose final replies after the launching turn closes
- [#140355](https://github.com/openclaw/openclaw/issues/140355) [Bug]: Chat /reset acknowledges success without cleaning up unfinished subagent tasks
- [#136854](https://github.com/openclaw/openclaw/issues/136854) [Bug]: line and mattermost setup adapters lack singleAccountKeysToMove declarations
- [#137452](https://github.com/openclaw/openclaw/issues/137452) `openclaw approvals get` drops `source` and `argPattern` from the Allowlist table, so an argv- and cwd-bound `allow-always` grant renders identically to a broad path grant
- [#140348](https://github.com/openclaw/openclaw/issues/140348) [Feature]: # OpenCode Go provider: add per-conversation `x-opencode-session` and a real `User-Agent`
- [#140287](https://github.com/openclaw/openclaw/issues/140287) [Bug]: one-off TTS requests override the non-voice delivery decision
- [#140401](https://github.com/openclaw/openclaw/issues/140401) Stuck-session watchdog aborts healthy long single-message replies at 6 min; threshold no longer configurable (2026.8.2, claude-cli backend)
- [#140375](https://github.com/openclaw/openclaw/issues/140375) [Bug]: Gateway profile verification fails permanently when the Cloudflare Access identity is not GitHub-backed
- [#140363](https://github.com/openclaw/openclaw/issues/140363) Browser download action: unhandled rejection "Timeout waiting for download" crashes the entire gateway process
- [#140349](https://github.com/openclaw/openclaw/issues/140349) Memories hides stale-index warning and rebuild guidance
- [#124396](https://github.com/openclaw/openclaw/issues/124396) [Feature]: Make `openclaw update` one transaction: prove candidate before activation, verified state checkpoint, whole-product rollback, no crash-loop on migration warnings
- [#140340](https://github.com/openclaw/openclaw/issues/140340) [Bug]: Image avatars overlap chat text on small mobile screens
- [#140268](https://github.com/openclaw/openclaw/issues/140268) Opened in error
- [#140252](https://github.com/openclaw/openclaw/issues/140252) [Bug]: session last-used model is not cleared when agents.defaults.model.primary changes
- [#140261](https://github.com/openclaw/openclaw/issues/140261) [Bug]: sessions tail crashes (TypeError: reading 'trim') for any agent with a sessionId-less store entry — poisons unrelated --session-key requests too
- [#140258](https://github.com/openclaw/openclaw/issues/140258) [Bug]: detached subagent completion lacks Gateway scope and stale settle wake retries forever
- [#140184](https://github.com/openclaw/openclaw/issues/140184) [Bug]: memory search --json emits no JSON when memory search is disabled
- [#140243](https://github.com/openclaw/openclaw/issues/140243) [Bug] 2026.8.1 Retained pending inputs (interrupted/cancelled) cannot be dismissed in the main session — no UI, RPC, or CLI path
- [#132829](https://github.com/openclaw/openclaw/issues/132829) [Bug]: Paired node capability approval disappears after five minutes
- [#140230](https://github.com/openclaw/openclaw/issues/140230) [Bug]: 2026.9.2 failed update leaves managed gateway stopped because recovery restart uses the older in-process binary
- [#137151](https://github.com/openclaw/openclaw/issues/137151) [Bug]: Fleet cells can crash-loop when the runtime UID cannot write the image HOME cache and temp paths
- [#140109](https://github.com/openclaw/openclaw/issues/140109) Android approvals can show a denied result beside an actionable card
- [#140153](https://github.com/openclaw/openclaw/issues/140153) [Bug]: Static HTTP date validators depend on the Gateway timezone
- [#140050](https://github.com/openclaw/openclaw/issues/140050) Codex managed resume can forward the previous model into turn/start despite an explicit model selection
- [#140192](https://github.com/openclaw/openclaw/issues/140192) Agent execution rhythm: long idle waits between tool calls; how to enable continuous autonomous progression?
- [#140005](https://github.com/openclaw/openclaw/issues/140005) Allow Claw removal to drain its verified config-owned monitors
- [#140168](https://github.com/openclaw/openclaw/issues/140168) Memory search background maintenance repeatedly loses full-reindex publication races
- [#138613](https://github.com/openclaw/openclaw/issues/138613) [Bug]: blank --port is treated as omitted by the shared Gateway CLI parser
- [#140103](https://github.com/openclaw/openclaw/issues/140103) [Bug]: Project sessions drop valid keyword memory matches
- [#140101](https://github.com/openclaw/openclaw/issues/140101) [Bug]: Windows: embedded ACPX backend cannot launch any agent
- [#140080](https://github.com/openclaw/openclaw/issues/140080) Gateway restart runs paced cron jobs before their accepted next-check deadline
- [#139253](https://github.com/openclaw/openclaw/issues/139253) [Bug]: Failed cron command followed by NO_REPLY announces a fallback and records succeeded on 2026.9.1
- [#140063](https://github.com/openclaw/openclaw/issues/140063) Plugin uninstall leaves dangling symlink load paths in configuration
- [#127196](https://github.com/openclaw/openclaw/issues/127196) [Bug]: Microsoft Foundry retains expired Entra tokens for historical accounts
- [#139971](https://github.com/openclaw/openclaw/issues/139971) Side chat survives deletion and reappears in a recreated conversation
- [#127095](https://github.com/openclaw/openclaw/issues/127095) [Bug]: Node host duplicates concurrent skill-bin refreshes
- [#139954](https://github.com/openclaw/openclaw/issues/139954) Reduce repeated keyed-state reads during plugin restores
- [#139975](https://github.com/openclaw/openclaw/issues/139975) Empty client tool results are dropped or rejected by the HTTP compatibility endpoints
- [#139945](https://github.com/openclaw/openclaw/issues/139945) Manually forcing a disabled one-shot reminder re-enables its schedule
- [#139962](https://github.com/openclaw/openclaw/issues/139962) [Bug]: A single transient pre-stream HTTP 5xx from a provider transport kills an embedded agent run — no transport-level retry on the shared guarded fetch
- [#139303](https://github.com/openclaw/openclaw/issues/139303) Parallels macOS smoke intermittently loses guest exec
- [#139939](https://github.com/openclaw/openclaw/issues/139939) Control UI loses failed steer and redirect drafts after terminal acknowledgments
- [#137125](https://github.com/openclaw/openclaw/issues/137125) [Bug]: Session reset silently suppresses new critical-attention notices
- [#139857](https://github.com/openclaw/openclaw/issues/139857) Required Git reads accept truncated stdout as complete data
- [#112689](https://github.com/openclaw/openclaw/issues/112689) Add config to suppress or customize rate-limit error replies to end users
- [#127641](https://github.com/openclaw/openclaw/issues/127641) Nodes UI visually falls back after a configured exec node loses capability while runtime stays pinned
- [#139774](https://github.com/openclaw/openclaw/issues/139774) HTTP input URL downloads continue after client disconnect
- [#136997](https://github.com/openclaw/openclaw/issues/136997) [Bug]: no-op openclaw update SIGTERMs managed gateway when already on target version
- [#139833](https://github.com/openclaw/openclaw/issues/139833) system-owned heartbeat jobs cannot be disabled — no UI or CLI option
- [#137033](https://github.com/openclaw/openclaw/issues/137033) [Bug]: OpenAI model discovery ignores configured auth profile order
- [#137712](https://github.com/openclaw/openclaw/issues/137712) Prefix recovery can truncate `openclaw.json` if the write fails
- [#139723](https://github.com/openclaw/openclaw/issues/139723) [Bug]: Skill collection review fails with "different collection-review identities" error
- [#139707](https://github.com/openclaw/openclaw/issues/139707) [Bug]: update 2026.9.1→2026.9.2 fails restart with ENOENT — post-swap path lazily imports hashed chunks the update just deleted
- [#139977](https://github.com/openclaw/openclaw/issues/139977) [Feature]: 让 reasoningDefault 对白名单/已配对发送者直接生效，去掉强制 "off" 的授权 gate

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 242,545 · **Open issues:** 40,369 · **Last push:** <1h ago

On September 7, 2026, there were no new releases for Hermes Agent, and no pull requests were merged in the last 24 hours. However, several new issues have been reported, including a significant bug (#104442) where mid-turn /steer text fails to persist, resulting in a 75-85% prompt-cache miss and loss of user instructions. Another notable bug (#104176) highlights that inherited ContextCompressor summary overrides break with the bypass_cooldown feature. Additionally, a new feature request (#104572) aims to support atomic disabled job creation, which could enhance job management within the system. Overall, while there were no noteworthy updates or fixes today, the newly reported issues suggest areas for immediate attention in upcoming development cycles.

#### 🐛 New Issues
- [#104169](https://github.com/NousResearch/hermes-agent/issues/104169) refresh_agent_mcp_tools() re-derives the tool array and silently drops per-session assembly context `type/refactor` `comp/agent` `comp/tools` `tool/mcp` 💬3
- [#104357](https://github.com/NousResearch/hermes-agent/issues/104357) [Bug]: Discord cron attachments to discord:<guild>:<channel> targets 404 (Unknown Channel) while text delivers fine `type/bug` `comp/gateway` `comp/cron` `platform/discord` 💬2
- [#104176](https://github.com/NousResearch/hermes-agent/issues/104176) [Bug]: inherited ContextCompressor summary overrides break on bypass_cooldown `type/bug` `comp/agent` `comp/plugins` `P2` 💬2
- [#104572](https://github.com/NousResearch/hermes-agent/issues/104572) feat(cron): support atomic disabled job creation `type/feature` `comp/cli` `comp/cron` `P3` 💬2
- [#104442](https://github.com/NousResearch/hermes-agent/issues/104442) [Bug]: mid-turn /steer text never persists — replayed history diverges (75-85% prompt-cache miss) and user instructions are lost `type/bug` `duplicate` `comp/agent` `P1` 💬2
- [#104653](https://github.com/NousResearch/hermes-agent/issues/104653) [Bug]: inbound user turns are persisted twice (gateway + agent flush); platform_message_id is set on one row and NULL on the other 💬1
- [#104652](https://github.com/NousResearch/hermes-agent/issues/104652) [Bug]: reply-context anchor carries no age — a two-hour-old reply is indistinguishable from the previous line 💬1
- [#104638](https://github.com/NousResearch/hermes-agent/issues/104638) [Feature]: hermes auth add --priority and hermes auth priority to place a credential in the fill_first order `type/feature` `comp/cli` `area/auth` `P3` 💬1
- [#104640](https://github.com/NousResearch/hermes-agent/issues/104640) Load AGENTS.md from the profile home, not only from the working directory's chain `type/feature` `comp/agent` `P3` `area/profiles` 💬1
- [#104637](https://github.com/NousResearch/hermes-agent/issues/104637) [Bug]: credential pool request_count only increments under the least_used strategy `type/bug` `comp/agent` `area/auth` `P3` 💬1
- [#104591](https://github.com/NousResearch/hermes-agent/issues/104591) Startup update check spawns interactive ssh host-key prompt that hijacks CLI input (insteadOf + GIT_CONFIG_GLOBAL=/dev/null mismatch) `type/bug` `comp/cli` `P2` `needs-repro` 💬1
- [#104636](https://github.com/NousResearch/hermes-agent/issues/104636) [Feature]: hermes auth list should show each credential's entry id and priority `type/feature` `comp/cli` `area/auth` `P3` 💬1
- [#104622](https://github.com/NousResearch/hermes-agent/issues/104622) [Bug]: resolve_anthropic_token() borrows the Claude Code login before the Hermes credential pool, logging Claude Code out on every refresh `type/bug` `comp/agent` `provider/anthropic` `area/auth` 💬1
- [#104603](https://github.com/NousResearch/hermes-agent/issues/104603) [Feature]: Tool use for local models `type/bug` `P3` `needs-repro` `comp/desktop` 💬1
- [#104609](https://github.com/NousResearch/hermes-agent/issues/104609) False positive: translate_execute blocks an ordinary role description in the context scope `type/bug` `comp/agent` `tool/skills` `P2` 💬1
- [#104596](https://github.com/NousResearch/hermes-agent/issues/104596) state.db WAL split-brain inside a SINGLE process: apply_wal_with_fallback runs the set-pragma when the journal-mode probe fails (unlinks sibling connections -wal/-shm) `type/bug` `comp/agent` `comp/gateway` `P1` 💬1
- [#104582](https://github.com/NousResearch/hermes-agent/issues/104582) Async delegation completion never delivered to sessions created via the API server (session_key prefix api-) `type/bug` `comp/gateway` `tool/delegate` `P2` 💬1
- [#104365](https://github.com/NousResearch/hermes-agent/issues/104365) [Feature]: Codex's Experimental Context Management/Compaction `type/feature` `comp/agent` `P3` `area/compression` 💬1
- [#104099](https://github.com/NousResearch/hermes-agent/issues/104099) feat(compression): persist compaction as durable session events (audit log with start/summary/end brackets) `type/feature` `comp/agent` `P3` `sweeper:risk-session-state` 💬1
- [#104462](https://github.com/NousResearch/hermes-agent/issues/104462) Token accounting: every compaction/overflow decision uses the provider's real usage, never the bytes/4 estimate `type/refactor` `comp/agent` `P2` `area/compression` 💬1
- [#104641](https://github.com/NousResearch/hermes-agent/issues/104641) [Bug]: hermes-talk fails to accept OpenAI API key with 2x wrong error messages. `invalid` `comp/plugins` `P3`
- [#104635](https://github.com/NousResearch/hermes-agent/issues/104635) [Feature]: hermes auth refresh to force one pooled OAuth credential to refresh and clear its cooldown `type/feature` `comp/cli` `area/auth` `P3`
- [#104634](https://github.com/NousResearch/hermes-agent/issues/104634) [Feature]: hermes auth reset should accept a single credential target `type/feature` `comp/cli` `area/auth` `P3`
- [#104614](https://github.com/NousResearch/hermes-agent/issues/104614) [Bug]: Desktop Messaging page shows platform as "Disabled" when enabled via .env (profile=default scoped path skips load_gateway_config) `type/bug` `P3` `comp/desktop` `comp/dashboard`
- [#104618](https://github.com/NousResearch/hermes-agent/issues/104618) tests: capture intermittent replay-export continuation subprocess stall `type/test` `comp/cli` `P3` `needs-repro`
- [#104610](https://github.com/NousResearch/hermes-agent/issues/104610) Prompt cache: the cwd line in the stable tier and context files behind the workspace snapshot miss the prefix cache once per worktree session `type/bug` `comp/agent` `P0` `sweeper:risk-caching`
- [#104595](https://github.com/NousResearch/hermes-agent/issues/104595) [Bug]: Kanban PR workers can become done before exact-head CI is green `type/feature` `comp/cron` `P3` `sweeper:risk-automation`
- [#104583](https://github.com/NousResearch/hermes-agent/issues/104583) fallback_providers: "google" entry bypasses GeminiNativeClient, 400s with "Unknown name 'thinking_config'" `type/bug` `comp/agent` `provider/gemini` `area/config`
- [#104565](https://github.com/NousResearch/hermes-agent/issues/104565) Feature: project identity from a marker file inside the folder (survive rename/move) `type/feature` `comp/cli` `P3` `comp/desktop`
- [#104563](https://github.com/NousResearch/hermes-agent/issues/104563) [Bug] Opt-in JSON session snapshots stay stale after in-place compaction `type/bug` `comp/agent` `P3` `sweeper:risk-session-state`

#### 🔒 Closed Issues
- [#99398](https://github.com/NousResearch/hermes-agent/issues/99398) [Bug]: preflight estimator double-charges `reasoning` (wire-dead field), inflating context ~42% and causing a compaction loop
- [#70328](https://github.com/NousResearch/hermes-agent/issues/70328) Compression trigger prices every image at a flat 1500 tokens — vision-heavy sessions on a 64K local model hit provider 400s before compaction can fire
- [#103391](https://github.com/NousResearch/hermes-agent/issues/103391) [Bug]: Edit-resend/rewind triggers spurious compression — anchor invalidated by truncation, defer baseline recorded on mismatched (real) scale

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,099 · **Open issues:** 7,674 · **Last push:** <1h ago

There were no new releases for vLLM on September 7, 2026. Significant developments included the merging of several impactful pull requests, such as the bugfix for KV offload that stops offloading the final sampled token’s KV slot (#54288) and enhancements to the kernel with the addition of a fused MoE tuned config for NVIDIA A100 (#55511). A critical new issue surfaced, identified as #55571, which involves a CUDA illegal memory access on the RTX PRO 5000 under sustained load, raising concerns over stability in specific configurations. Overall, it seems to be a routine maintenance day, but the reported issues indicate ongoing challenges in performance and compatibility.

#### ✅ Merged PRs
- [#55180](https://github.com/vllm-project/vllm/pull/55180) [Kernel] SM 12.x blockwise FP8: swizzle the CTA raster when the weight exceeds the L2
- [#55455](https://github.com/vllm-project/vllm/pull/55455) [Bugfix] Defer adaptive verification until after kernel warmup
- [#55457](https://github.com/vllm-project/vllm/pull/55457) [CI] Align extraction test with canonical auxiliary layer order
- [#54659](https://github.com/vllm-project/vllm/pull/54659) [Frontend] Expose multimodal metadata for disaggregated prefill
- [#55529](https://github.com/vllm-project/vllm/pull/55529) [Governance] Add aoshen02 as code owner for RL components
- [#54288](https://github.com/vllm-project/vllm/pull/54288) [Bugfix][KV Offload] Stop offloading the final sampled token's KV slot
- [#54362](https://github.com/vllm-project/vllm/pull/54362) [Bugfix][KV Offload] Fix SWA store reachability during chunked prefill
- [#55461](https://github.com/vllm-project/vllm/pull/55461) [Bugfix] Fall back to T1 when ARC cannot reclaim enough entries from T2
- [#55075](https://github.com/vllm-project/vllm/pull/55075) [Bugfix][KV Offload] Skip cleaned-up async lookup batches
- [#55285](https://github.com/vllm-project/vllm/pull/55285) [Perf] Use SDPA for BLIP-2 Q-Former attention
- [#53614](https://github.com/vllm-project/vllm/pull/53614) [Kimi K3] Support internal prefix checkpoints with partial prefix caching and spec-decoding
- [#51898](https://github.com/vllm-project/vllm/pull/51898) Validate scale-out multimodal data before engine handoff
- [#55511](https://github.com/vllm-project/vllm/pull/55511) [Kernel] Add fused MoE tuned config for E=256,N=512 on NVIDIA A100 80GB PCIe
- [#49410](https://github.com/vllm-project/vllm/pull/49410) [CPU] [Feat] Add native AMX-FP8 attention impl for Diamond Rapids
- [#52957](https://github.com/vllm-project/vllm/pull/52957) [Core] Sync DP state on the first step of a wave

#### 🐛 New Issues
- [#55571](https://github.com/vllm-project/vllm/issues/55571) [Bug]: Xid 13 "Out Of Range Address" / CUDA illegal memory access on RTX PRO 5000 (SM120) with FP8 model under sustained load — gone with VLLM_DISABLED_KERNELS=FlashInferFP8ScaledMMLinearKernel or --enforce-eager `bug` `quantization` 💬5
- [#55533](https://github.com/vllm-project/vllm/issues/55533) [Bug][Spec Decode] Hybrid GDN (Qwen3.5/Qwen3.8 27B-class) + MTP: scheduler runs only ~3 concurrent sequences at batch >= 4 — acceptance/throughput collapse `scheduler` 💬2
- [#55517](https://github.com/vllm-project/vllm/issues/55517) [Bug]: qwen3.8-flash-next: assert numerator % denominator == 0, "{} is not divisible by {}".format `bug` 💬2
- [#55530](https://github.com/vllm-project/vllm/issues/55530) [Bug]: Responses API automatic tool JSON retry crashes in ParsableContext `tool-calling` 💬2
- [#55555](https://github.com/vllm-project/vllm/issues/55555) [Bug]: multimodal LoRA/tower connector with float16 dtype reaches torch.empty(None) `bug` `multi-modality` 💬1
- [#55615](https://github.com/vllm-project/vllm/issues/55615) [ROCm] Sparse-MLA decode top-k falls back to the vLLM kernel above 64k because of an aiter 0.1.19 limitation `rocm` 💬1
- [#55609](https://github.com/vllm-project/vllm/issues/55609) [ROCm] test_mla_backends surfaces two MLA decode-path issues: ROCM_AITER_MLA no query_len>4 kernel on gfx942 + bf16 chunked-context tolerance `rocm` 💬1
- [#55580](https://github.com/vllm-project/vllm/issues/55580) [Performance]: GDN hybrid (Qwen3.8-27B, fp8 KV, TP2): c32 aggregate throughput steps -24% when the profiled KV pool is below ~190k tokens (<=116 blocks); c8 and single-stream unaffected 💬1
- [#55568](https://github.com/vllm-project/vllm/issues/55568) [Bug]: [Portability][MSVC] Preprocessor directives inside BOOL_SWITCH macro arguments fail to compile `bug` 💬1
- [#55605](https://github.com/vllm-project/vllm/issues/55605) [Bug][Spec Decode] GLM-5.3 (non-Flash) MTP: draft acceptance ~1-2% pos-0 even on repetitive text — draft head effectively emits noise (2 nightlies, 2 backends, graphs+eager) `glm` 💬1
- [#55581](https://github.com/vllm-project/vllm/issues/55581) [Bug]: FlashInfer get_cudagraph_support() divides the *target* model's head count by the *draft* group's num_kv_heads, so spec-decode loses all CUDA graphs when the two models' head ratios differ (while the builder picks XQA and runs) 💬1
- [#55554](https://github.com/vllm-project/vllm/issues/55554) [Bug]: Mistral pooling runner reaches a weight-key KeyError `bug` `mistral` 💬1
- [#55614](https://github.com/vllm-project/vllm/issues/55614) [CPU] Several log lines and opt-in Prometheus metric names hardcode "GPU" on non-GPU backends
- [#55613](https://github.com/vllm-project/vllm/issues/55613) [CPU] AWQ (and GPTQ) WNA16 int4 GEMM silently unavailable on AVX2-only CPUs (no AVX-512 fallback) `quantization`
- [#55610](https://github.com/vllm-project/vllm/issues/55610) [Perf]: turboquant_k8v4 decode penalty scales with context length (-2.8% at 3k, -31% at 55k) on Ampere SM86, no speculative decoding `speculative-decoding` `quantization`
- [#55600](https://github.com/vllm-project/vllm/issues/55600) [Bug] Hybrid mamba prefix-cache hit reads out of bounds: add_request seeds the state index with cache_config.block_size after it was lowered below mamba_block_size (Xid 31 / illegal memory access)
- [#55599](https://github.com/vllm-project/vllm/issues/55599) [RFC]: [Tracking] Piecewise KV loading across multiple connectors
- [#55598](https://github.com/vllm-project/vllm/issues/55598) [RFC]: [Tracking] Heterogeneous-TP KV sharing in Mooncake Store Connector
- [#55592](https://github.com/vllm-project/vllm/issues/55592) [Bug]: Responses built-in tool outputs use unrelated call IDs `tool-calling`
- [#55584](https://github.com/vllm-project/vllm/issues/55584) [RFC]: R3 support for prefill/decode disaggregation `RFC` `kv-connector`
- [#55578](https://github.com/vllm-project/vllm/issues/55578) [Feature]: [vllm_gguf_plugin] Add --gguf-dequant-on-load option to unlock cuBLAS tensor cores for prefill-heavy workloads` `feature request` `quantization`
- [#55577](https://github.com/vllm-project/vllm/issues/55577) [Performance]: 100x speedup in v1 prompt_logprobs: Triton _topk_log_softmax_kernel vs native PyTorch topk/logsumexp on long contexts `performance`
- [#55560](https://github.com/vllm-project/vllm/issues/55560) [Bug]: CPU MoE kernel produces NaN logits under torch.compile for Qwen3_5MoeForConditionalGeneration — reproduces with AND without GPTQ-Int4 quantization, fixed by --enforce-eager `torch.compile` `quantization`
- [#55569](https://github.com/vllm-project/vllm/issues/55569) [Bug]: GLM-5.3-Flash (glm5next) on DGX Spark / GB10: a ~230K-token prefill exhausts unified memory and kills the engine (sparse indexer logits churn); 64 MiB logits budget or expandable_segments fixes it `glm`
- [#55561](https://github.com/vllm-project/vllm/issues/55561) [Bug]: Sweep Pareto plots include dominated throughput ties
- [#55534](https://github.com/vllm-project/vllm/issues/55534) [Bug]: CUTLASS 3.x scaled_mm ignores leading strides of sliced tensors `bug` `nvidia` `quantization`
- [#55556](https://github.com/vllm-project/vllm/issues/55556) [Bug]: Phi-4 explicit openai content format fails after healthy startup `bug`
- [#55552](https://github.com/vllm-project/vllm/issues/55552) [Bug]: tool_choice="required" not enforced with Qwen3.8-Flash-Next when enable_thinking=false (streaming); xgrammar "Failed to advance FSM" / "matcher has terminated" with thinking on + MTP `bug` `structured-output` `tool-calling`
- [#55546](https://github.com/vllm-project/vllm/issues/55546) [Bug]: One bad multimodal item (feature/placeholder mismatch) kills the entire V1 engine tree instead of failing that request `multi-modality`
- [#55547](https://github.com/vllm-project/vllm/issues/55547) [Bug]: Client-supplied mm uuid is the sole cache key with no content binding - stale serving or fatal engine crash on collision
- [#55545](https://github.com/vllm-project/vllm/issues/55545) [Bug]: rsLoRA scaling factor ignored for MoE expert LoRA adapters (pack_moe / pack_moe_stacked recompute alpha/rank) `bug`
- [#55541](https://github.com/vllm-project/vllm/issues/55541) [Bug]: GLM-5.3-Flash with forced tool_choice (named function) fails to converge — runs to max_tokens and returns ▎ truncated tool_call.arguments `bug` `tool-calling` `quantization` `glm`
- [#55526](https://github.com/vllm-project/vllm/issues/55526) [Bug]: DeepSeek-V4-Flash TP=16 on SM120 (RTX 5090 x16, ray multi-node) fails: DSV4 sparse MLA decode specialization error for (num_q_heads=8, top_k=128) despite FlashInfer dispatch table containing that config `deepseek` `DSv4`
- [#55524](https://github.com/vllm-project/vllm/issues/55524) [RFC] Mamba2: exact-replay decode so that prefill, chunked prefill and decode produce identical bits
- [#55518](https://github.com/vllm-project/vllm/issues/55518) [Bug]: kv_cache_utils warns that prefix-cache reuse is disabled even when disable_eagle_block_drop keeps it working

#### 🔒 Closed Issues
- [#25874](https://github.com/vllm-project/vllm/issues/25874) [Feature]: Enable Automatic Prefix Caching for Qwen3-Next (hybrid attention)
- [#31823](https://github.com/vllm-project/vllm/issues/31823) [Feature]: Use kernel abstraction for fp4 scaled mm
- [#32676](https://github.com/vllm-project/vllm/issues/32676) [Tracker]: Apply PluggableLayer and vLLM IR to replace current CustomOp
- [#33314](https://github.com/vllm-project/vllm/issues/33314) [RFC] [Feature]: Apply RFC #8913 to Quantized Linear Methods (Decouple Kernels from Checkpoint Layout)
- [#34698](https://github.com/vllm-project/vllm/issues/34698) [Feature]: Atomic Rewind & Correct (ARC) via KV-Cache Rollback for Logical Grounding
- [#33625](https://github.com/vllm-project/vllm/issues/33625) [Feature]: improve sleep mode to not break torch.cuda memory counters
- [#33311](https://github.com/vllm-project/vllm/issues/33311) [Feature]: support pixel_values_videos input for VLM
- [#33770](https://github.com/vllm-project/vllm/issues/33770) [Bug]: Loading Deepseek models is very slow
- [#35919](https://github.com/vllm-project/vllm/issues/35919) [Feature]: FA4 MLA decode
- [#55512](https://github.com/vllm-project/vllm/issues/55512) [New Model]: K2-Horizon-MoVA (MoVA attention) — single-GPU Int4 via out-of-tree plugin; native support?
- [#54193](https://github.com/vllm-project/vllm/issues/54193) [Bug]: KV offloading connector: finished-request store watermark includes a KV slot never written by any forward pass (silent cross-request poisoning with offload_prompt_only=False)
- [#54658](https://github.com/vllm-project/vllm/issues/54658) [Feature]: Expose multimodal metadata from Render for disaggregated prefill

### SGLang (`sgl-project/sglang`)

**Stars:** 35,535 · **Open issues:** 5,128 · **Last push:** <1h ago

On September 7, 2026, there were no new releases for SGLang, but a number of significant PRs were merged. Key updates included #38112, which improved execution efficiency for NPU test cases, and #38171, which restored non-layer placeholders to prevent host copy release issues. The documentation was also enhanced with #38148, adding a per-model tuning decision table to the performance guide. Notably, a hot new issue was reported in #38207 concerning crashes with GLM-5.3 DPC, indicating potential instability that may require urgent attention.

#### ✅ Merged PRs
- [#37124](https://github.com/sgl-project/sglang/pull/37124) [ROCm] Take the fused DSA metadata kernels and drop redundant work from the absorb path
- [#33608](https://github.com/sgl-project/sglang/pull/33608) [Deepseek V4] Keep fp32 routing weights in the mxfp4 trtllm MoE
- [#34142](https://github.com/sgl-project/sglang/pull/34142) Fix inflated row pitch when a CP round-robin shard has a single row
- [#37720](https://github.com/sgl-project/sglang/pull/37720) [ROCm] Stage large pageable H2D copies instead of pinning them in place
- [#38112](https://github.com/sgl-project/sglang/pull/38112) [NPU] Fix failed test cases in pr‑test‑npu and improve execution efficiency
- [#37199](https://github.com/sgl-project/sglang/pull/37199) fix(gpt-oss): avoid duplicate MoE reduction with DP attention
- [#37591](https://github.com/sgl-project/sglang/pull/37591) [ROCm] Make DSA indexer top-k exact with cooperative selection
- [#35674](https://github.com/sgl-project/sglang/pull/35674) [diffusion] docs+skill: which components to stream under layerwise offload
- [#37456](https://github.com/sgl-project/sglang/pull/37456) [diffusion] docs: verify the DGX Spark H3 recipe
- [#38117](https://github.com/sgl-project/sglang/pull/38117) perf: use Gumbel-max trick in the main sampler to cut decode CPU dispatch
- [#38108](https://github.com/sgl-project/sglang/pull/38108) [Router] Add bucket-aware policy domains and native cache indexing
- [#37916](https://github.com/sgl-project/sglang/pull/37916) [diffusion] Measure warmup memory and layer usage per phase for residency calibration (1/4)
- [#36507](https://github.com/sgl-project/sglang/pull/36507) GLM-5.3-Flash support
- [#38127](https://github.com/sgl-project/sglang/pull/38127) [diffusion] loader: reuse plain state-dict loading without per-model classes
- [#38201](https://github.com/sgl-project/sglang/pull/38201) [Test] Mock health callback in prefill abort cleanup fixture
- [#38172](https://github.com/sgl-project/sglang/pull/38172) [diffusion] CI: guard the allocated VRAM peak, report the reserved one
- [#36944](https://github.com/sgl-project/sglang/pull/36944) fix(vlm): contain EPD request lifecycle failures
- [#38148](https://github.com/sgl-project/sglang/pull/38148) docs(diffusion): add per-model tuning decision table to performance guide
- [#38139](https://github.com/sgl-project/sglang/pull/38139) [Router] Publish cache-aware load state
- [#38128](https://github.com/sgl-project/sglang/pull/38128) [Diffusion] Consolidate plain state-dict component loaders
- [#38171](https://github.com/sgl-project/sglang/pull/38171) Fix #38166: Restore non-layer placeholders before releasing host copies
- [#36988](https://github.com/sgl-project/sglang/pull/36988) [VLM] Retire aborted disaggregated prefill results

#### 🐛 New Issues
- [#38207](https://github.com/sgl-project/sglang/issues/38207) [Bug] GLM-5.3 DPC crashes 💬1
- [#38236](https://github.com/sgl-project/sglang/issues/38236) [Bug] DeepseekV4ForCausalLM hook rejects `--speculative-algorithm NEXTN` because the NEXTN->EAGLE alias is resolved after model-specific hooks
- [#38210](https://github.com/sgl-project/sglang/issues/38210) [Bug] OTel tracing loses Scheduler spans when using --tokenizer-worker-num>1
- [#38202](https://github.com/sgl-project/sglang/issues/38202) [Bug] DFLASH/DSPARK draft KV pool budget uses `tp_size` instead of `attn_tp_size`, causing OOM under DP attention in Kimi-K3
- [#38206](https://github.com/sgl-project/sglang/issues/38206) [Performance][PP/PD] Bootstrap admission waits ~7.8s for consensus under PP16 concurrent prefill
- [#38196](https://github.com/sgl-project/sglang/issues/38196) [Bug] [NPU] ascend attention backend silently corrupts output with page_size 16 (128 OK, 1 rejected per #25169)
- [#38166](https://github.com/sgl-project/sglang/issues/38166) [Bug][Diffusion] MiniMax-H3: second request's VAE decode crashes with "weight should have at least three dimensions" under --performance-mode memory
- [#38183](https://github.com/sgl-project/sglang/issues/38183) [Bug] transformers pin (5.12.1) incompatible with main: import sglang fails on both sides of the version line
- [#38167](https://github.com/sgl-project/sglang/issues/38167) [Bug][Diffusion] MiniMax-H3: 1344x768 fails deterministically with "CUDA driver error: device not ready" on 12GB, and the failed request poisons the server

#### 🔒 Closed Issues
- [#24945](https://github.com/sgl-project/sglang/issues/24945) [RFC] SGLang EPD Performance / Architecture / Observability Enhancements
- [#28484](https://github.com/sgl-project/sglang/issues/28484) [Bug] Spec v2 + Mamba extra_buffer crash on v0.5.13: NoneType in set_mamba_track_indices_from_reqs (H100, TP=1, EAGLE)
- [#30224](https://github.com/sgl-project/sglang/issues/30224) [Feature] Support LongCat2.0 for Ascend NPU
- [#30442](https://github.com/sgl-project/sglang/issues/30442) Rename _biased_grouped_topk_postprocess to reflect its generic role
- [#30480](https://github.com/sgl-project/sglang/issues/30480) [Bug] Non-streaming leaks raw <tool_call> markup into content when a tool call is truncated by max_tokens (hermes, qwen25)
- [#24922](https://github.com/sgl-project/sglang/issues/24922) [Roadmap] Intel XPU Roadmap (2026Q2)
- [#30556](https://github.com/sgl-project/sglang/issues/30556) [Bug] N Options broken
- [#30555](https://github.com/sgl-project/sglang/issues/30555) DSPARK: draft worker inherits speculative_num_draft_tokens (gamma+1) into its attention backend while the proposer emits gamma rows — OOB KV reads with the triton draft backend
- [#30549](https://github.com/sgl-project/sglang/issues/30549) [Bug] --speculative-adaptive crashes at startup: shared logits buffer sized for active draft_tokens, not max adaptive candidate
- [#30526](https://github.com/sgl-project/sglang/issues/30526) [Discussion] Interested in contributing an interactive/causal video world model to the realtime subsystem — seeking early feedback
- [#30505](https://github.com/sgl-project/sglang/issues/30505) [Bug] DSA + fp8 KV (flashmla_kv): unbudgeted ~1GiB prefill transients OOM-crash the whole server on 80GB GPUs (GLM-5.2-W4AFP8, 8xH100)
- [#30459](https://github.com/sgl-project/sglang/issues/30459) [Bug] Qwen3-VL-30B-A3B gpqa_d score lower than official score
- [#30455](https://github.com/sgl-project/sglang/issues/30455) [Feature] Boogu-Image
- [#37187](https://github.com/sgl-project/sglang/issues/37187) [Bug] GPT-OSS with DP attention enabled produces garbage output (GSM8K 0/128 vs 124/128)
- [#38166](https://github.com/sgl-project/sglang/issues/38166) [Bug][Diffusion] MiniMax-H3: second request's VAE decode crashes with "weight should have at least three dimensions" under --performance-mode memory

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 127,279 · **Open issues:** 2,450 · **Last push:** 1h ago

On September 7, 2026, llama.cpp released several new versions, including b10830, which introduced the `--fuse-qkv` flag for fusing Q/K/V during the HF-to-GGUF conversion. Additionally, b10829 fixed GDN normalization from `max` to `rsqrt`, and b10828 added support for the Spark2_5ForCausalLM implementation. Significant merged features included optimizations for UI performance and the inclusion of `--log-jsonl` for improved logging. However, a notable new issue was raised regarding an eval bug that dropped processing efficiency by 42-54% with specific settings, highlighting challenges in managing memory and performance across GPUs.

#### 🚀 New Releases
- [b10830](https://github.com/ggml-org/llama.cpp/releases/tag/b10830) b10830
- [b10829](https://github.com/ggml-org/llama.cpp/releases/tag/b10829) b10829
- [b10828](https://github.com/ggml-org/llama.cpp/releases/tag/b10828) b10828
- [b10827](https://github.com/ggml-org/llama.cpp/releases/tag/b10827) b10827
- [b10826](https://github.com/ggml-org/llama.cpp/releases/tag/b10826) b10826
- [b10825](https://github.com/ggml-org/llama.cpp/releases/tag/b10825) b10825
- [b10823](https://github.com/ggml-org/llama.cpp/releases/tag/b10823) b10823
- [b10822](https://github.com/ggml-org/llama.cpp/releases/tag/b10822) b10822
- [b10821](https://github.com/ggml-org/llama.cpp/releases/tag/b10821) b10821

#### ✅ Merged PRs
- [#27868](https://github.com/ggml-org/llama.cpp/pull/27868) [Model] Support for Spark2_5ForCausalLM implementation
- [#22780](https://github.com/ggml-org/llama.cpp/pull/22780) convert : add `--fuse-qkv` flag to fuse Q/K/V into QKV during HF-to-GGUF conversion
- [#28068](https://github.com/ggml-org/llama.cpp/pull/28068) models: fix GDN normalization from `max` to `rsqrt`
- [#28402](https://github.com/ggml-org/llama.cpp/pull/28402) opencl: properly choose weights pack for q4_K, q5_K mul_mat
- [#28475](https://github.com/ggml-org/llama.cpp/pull/28475) cuda: fixes races in mmid and mmf
- [#28469](https://github.com/ggml-org/llama.cpp/pull/28469) grammar : fix max repetition threshold
- [#28460](https://github.com/ggml-org/llama.cpp/pull/28460) ui: Improve Chat Messages rendering performance
- [#28445](https://github.com/ggml-org/llama.cpp/pull/28445) ui : embed assets directly with CMake
- [#28437](https://github.com/ggml-org/llama.cpp/pull/28437) common: add --log-jsonl
- [#28458](https://github.com/ggml-org/llama.cpp/pull/28458) metal : add remaining fa-vec tunings for M2 Max

#### 🐛 New Issues
- [#28495](https://github.com/ggml-org/llama.cpp/issues/28495) Eval bug: with -np 2 and --kv-unified, prompt processing drops 42-54% from the second long request onward (single GPU, sequential requests, no spill, no speculation) 💬6
- [#28497](https://github.com/ggml-org/llama.cpp/issues/28497) Eval bug: qwen4exp QSA indexer top-k selects a different cell set each run on CUDA (CUB DeviceTopK over tied block scores) `bug-unconfirmed` 💬2
- [#28515](https://github.com/ggml-org/llama.cpp/issues/28515) Compile bug: ggml_backend_sycl_device_get_memory aborts with "failed to get device memory size" on Intel Arc Pro B60 (Battlemage) `bug-unconfirmed` 💬1
- [#28484](https://github.com/ggml-org/llama.cpp/issues/28484) Misc. bug: Regression- draft-MTP over RPC split generation is 25-30% slower - drafter acceptance unchanged, dense decode unchanged `bug-unconfirmed` 💬1
- [#28471](https://github.com/ggml-org/llama.cpp/issues/28471) Eval bug: llama-server unable to acquire memory size through SYCL with custom model setup `bug-unconfirmed` 💬1
- [#28522](https://github.com/ggml-org/llama.cpp/issues/28522) Eval bug: parallel tool_calls get mangled or hang, across multiple Qwen models, on a tool with ~48 optional params
- [#28519](https://github.com/ggml-org/llama.cpp/issues/28519) Eval bug: SYCL backend core dumps with A770 - "failed to get device memory size" `bug-unconfirmed`
- [#28513](https://github.com/ggml-org/llama.cpp/issues/28513) Misc. bug: backend sampler probe hardcodes a 1M-row width, turning ARGSORT's fallback check into a hard gate
- [#28509](https://github.com/ggml-org/llama.cpp/issues/28509) Eval bug: Gemma 4 26B-A4B Template Misclassified as `supports_typed_content = false` `bug-unconfirmed`
- [#28506](https://github.com/ggml-org/llama.cpp/issues/28506) Misc. bug: tensor split drifts from requested -ts ratio and results in OOM `bug-unconfirmed`
- [#28505](https://github.com/ggml-org/llama.cpp/issues/28505) The problem of work director bothered me, which causes gpu is not used `bug-unconfirmed`
- [#28502](https://github.com/ggml-org/llama.cpp/issues/28502) Eval bug: Vulkan produces garbled output (not a crash) on Imagination PowerVR DXT-48-1536 / Tensor G5 `bug-unconfirmed`
- [#28491](https://github.com/ggml-org/llama.cpp/issues/28491) Compile bug: `bug-unconfirmed`
- [#28487](https://github.com/ggml-org/llama.cpp/issues/28487) Eval bug: llama.cpp RPC deadlocks with 3+ endpoints; 2 works reliably `bug-unconfirmed`
- [#28486](https://github.com/ggml-org/llama.cpp/issues/28486) ARM: optimize ggml_vec_dot_bf16 with native BF16/SVE BF16 dot product `enhancement`
- [#28478](https://github.com/ggml-org/llama.cpp/issues/28478) Misc. bug: Streaming requests with tools reject logprobs but accept n_probs `bug-unconfirmed`
- [#28470](https://github.com/ggml-org/llama.cpp/issues/28470) Feature Request: BPOSIT8 tensor type for exact, order-independent accumulation `enhancement`
- [#28467](https://github.com/ggml-org/llama.cpp/issues/28467) mtmd warmup: "WARNING: the CLIP graph uses unsupported operators by the backend" IM2COL: type = f32, ne = [9216 16 16 1] `bug-unconfirmed`
- [#28461](https://github.com/ggml-org/llama.cpp/issues/28461) model: support bounded recurrent-state rollback for Kimi-K3 `enhancement`

#### 🔒 Closed Issues
- [#22178](https://github.com/ggml-org/llama.cpp/issues/22178) Feature Request: Dynamic WebUI System Prompt Content (ex: ability to add dynamic date)
- [#24015](https://github.com/ggml-org/llama.cpp/issues/24015) Eval bug: ggml-backend-meta.cpp:541: GGML_ASSERT(src_ss[0].axis != GGML_BACKEND_SPLIT_AXIS_0) failed
- [#25746](https://github.com/ggml-org/llama.cpp/issues/25746) Misc. bug: json-schema-to-grammar — nested string maxLength >= 2000 emits un-parseable GBNF (tool-call grammar, b10034)
- [#24684](https://github.com/ggml-org/llama.cpp/issues/24684) Misc. bug: [Fix provided] --fit on + --sleep-idle-seconds: failed to fit params to free device memory: model_params::tensor_buft_overrides already set by user, abort
- [#25986](https://github.com/ggml-org/llama.cpp/issues/25986) Eval bug: gemma4 peg template intermittently unparseable with long multi-line tool-call string arguments
- [#27316](https://github.com/ggml-org/llama.cpp/issues/27316) CI: clean up release.yml webui build logic and remove HF bucket UI hosting
- [#28300](https://github.com/ggml-org/llama.cpp/issues/28300) support Spark-X2.5-4B-GGUF
- [#27859](https://github.com/ggml-org/llama.cpp/issues/27859) Eval bug: grammar parse fail on array length test on exactly 2000 chars
- [#24309](https://github.com/ggml-org/llama.cpp/issues/24309) [bug] --split-mode tensor crashes on GLM-4.5 Air MoE nextn draft head tensors (GGML_ASSERT tensor_axis_0 != nullptr)
- [#25939](https://github.com/ggml-org/llama.cpp/issues/25939) Misc. bug: Vulkan: GPU memory never returns to idle after long generations (VRAM ~90C, fan pinned); short generations release normally (Radeon AI PRO R9700 / RADV GFX1201)
- [#28454](https://github.com/ggml-org/llama.cpp/issues/28454) CUDA: sparse-fa (DSV4/GLM) has no quantized-KV path — q8_0 KV cache causes ~2.8x decode slowdown
- [#28455](https://github.com/ggml-org/llama.cpp/issues/28455) Misc. bug: quantized KV cache (q5_x, q4_x) with -fa on silently fallback CPU attn
- [#24836](https://github.com/ggml-org/llama.cpp/issues/24836) Misc bug: CUDA/HIP: llama.cpp will have to find a different way on HIP target to calculate free VRAM
- [#26017](https://github.com/ggml-org/llama.cpp/issues/26017) Eval bug: When I run Gemma 4e4b with MTP, it doesn't work and crashes to cmd
- [#28471](https://github.com/ggml-org/llama.cpp/issues/28471) Eval bug: llama-server unable to acquire memory size through SYCL with custom model setup
- [#26019](https://github.com/ggml-org/llama.cpp/issues/26019) Feature Request: Add ubuntu CUDA 13 release binaries (x64/arm64)
- [#26020](https://github.com/ggml-org/llama.cpp/issues/26020) Feature Request: Next generation samplers that should be able to beat top-n sigma and other SOTA samplers
- [#26043](https://github.com/ggml-org/llama.cpp/issues/26043) Server always reports `chat format: peg-native` at runtime
- [#26047](https://github.com/ggml-org/llama.cpp/issues/26047) mtmd: `*_init` allocators can throw std::bad_alloc across the extern "C" boundary (unlike their siblings)

### Ollama (`ollama/ollama`)

**Stars:** 180,309 · **Open issues:** 3,915 · **Last push:** 1d ago

On September 7, 2026, there were no new releases or merged pull requests for Ollama, indicating a day of routine maintenance. However, several notable new issues were reported, including a frustrating regression in the Vulkan backend that fails to load a 66 GB model on AMD iGPU due to insufficient memory for command submission, specifically since version 0.32.12. Additionally, users reported crashes related to the auto-enabled flash attention feature when using qwen3moe with Blackwell and issues with the gemma4 tool call parser returning unparseable content. Another issue highlighted that model name validation length is too short, and there were reports of the muse-glimmer:30b-mlx model getting stuck in a “Stopping...” state.

#### 🐛 New Issues
- [#18272](https://github.com/ollama/ollama/issues/18272) Vulkan backend fails with 'Not enough memory for command submission' loading a 66 GB model on AMD iGPU (regression since v0.32.12) 💬1
- [#18276](https://github.com/ollama/ollama/issues/18276) qwen3moe + Blackwell (sm_120): auto-enabled flash attention crashes llama-server at warmup after a successful memory fit `bug`
- [#18275](https://github.com/ollama/ollama/issues/18275) gemma4 tool call parser: BEGIN_ARG/END_ARG syntax unparseable, followed by degenerate <|channel>thought loop to token cap, returns HTTP 200 with no usable content `bug`
- [#18274](https://github.com/ollama/ollama/issues/18274) [BUG] model name validation length is too short `bug`
- [#18269](https://github.com/ollama/ollama/issues/18269) [BUG] muse-glimmer:30b-mlx repeatedly stuck in "Stopping..." state via ollama ps; one occurrence coincided with a full macOS restart `bug`

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,169 · **Open issues:** 4,912 · **Last push:** <1h ago

On September 7, 2026, LiteLLM released version v1.101.0-rc.1, alongside version v1.100.0, with both versions signed using cosign for enhanced security. Significant merged features included the addition of Azure AI/GPT-6-Astra Foundry pricing in PR #39983 and support for Lyria model in PR #30856. Notable fixes addressed issues such as improper treatment of routing entry latency in PR #39970 and a double billing bug related to custom cost per token, which was reported as a new issue in #40006. The day's ongoing focus appears to be on improving system reliability and feature implementation.

#### 🚀 New Releases
- [v1.101.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-rc.1) v1.101.0-rc.1
- [v1.100.0](https://github.com/BerriAI/litellm/releases/tag/v1.100.0) v1.100.0

#### ✅ Merged PRs
- [#39937](https://github.com/BerriAI/litellm/pull/39937) chore(lint): stop ratcheting *-budget.json on PR branches
- [#39782](https://github.com/BerriAI/litellm/pull/39782) refactor(auth): add shared SDK authentication foundation
- [#39987](https://github.com/BerriAI/litellm/pull/39987) refactor(native): establish send-once authorization boundary
- [#39646](https://github.com/BerriAI/litellm/pull/39646) refactor(rust): drop the ai-gateway dependency from python-bridge
- [#39983](https://github.com/BerriAI/litellm/pull/39983) feat(cost-map): add azure_ai/gpt-6-astra Foundry pricing
- [#39980](https://github.com/BerriAI/litellm/pull/39980) fix(batches): account a batch's cost once, from the first retrieve that sees it final
- [#39723](https://github.com/BerriAI/litellm/pull/39723) fix(anthropic_responses): preserve Responses refusal blocks in Anthropic messages translation
- [#39989](https://github.com/BerriAI/litellm/pull/39989) ci: run unit tests on Python 3.12
- [#30856](https://github.com/BerriAI/litellm/pull/30856) feat(vertex): add Lyria model support
- [#39416](https://github.com/BerriAI/litellm/pull/39416) ci(e2e): run a PR's changed e2e tests three times behind a human-approved environment
- [#39970](https://github.com/BerriAI/litellm/pull/39970) fix(router): treat a routing entry with no latency samples as zero latency
- [#39995](https://github.com/BerriAI/litellm/pull/39995) fix(docker): ship pymongo in the proxy images for the MongoDB vector store
- [#39952](https://github.com/BerriAI/litellm/pull/39952) feat(router): gate heuristic v1 tuning
- [#39992](https://github.com/BerriAI/litellm/pull/39992) fix(docker): bump wolfi-base for glibc 2.44 and pin apk python to 3.13 on rc/1.100.0 (cherry-pick #38917, #38973)
- [#39994](https://github.com/BerriAI/litellm/pull/39994) fix(docker): ship pymongo in the proxy images for the MongoDB vector store
- [#39991](https://github.com/BerriAI/litellm/pull/39991) refactor(ui): render the Virtual Keys page without the legacy user dashboard
- [#39936](https://github.com/BerriAI/litellm/pull/39936) feat(mcp): add opt-in per-server oauth relay discovery
- [#39955](https://github.com/BerriAI/litellm/pull/39955) fix(adaptive_router): add the persisted delta to the cold-start prior on load
- [#39957](https://github.com/BerriAI/litellm/pull/39957) fix(adaptive_router): fall back to model_info for cost-weighted scoring
- [#39954](https://github.com/BerriAI/litellm/pull/39954) fix(auto_router): build the semantic route layer off the event loop
- [#39974](https://github.com/BerriAI/litellm/pull/39974) fix(headroom): inject headroom_retrieve only for service-declared ccr_hashes and keep assistant content blocks intact
- [#39967](https://github.com/BerriAI/litellm/pull/39967) fix(anthropic): keep provider_specific_fields off the native /v1/messages wire

#### 🐛 New Issues
- [#40006](https://github.com/BerriAI/litellm/issues/40006) [Bug]: custom_cost_per_token bills Anthropic cache-read tokens twice `llm translation` `SDK` 💬2
- [#40050](https://github.com/BerriAI/litellm/issues/40050) Bug: False Budget has been exceeded on /v1/messages (Claude Code) - enforced cost far exceeds real recorded spend `llm translation` `claude code` 💬1
- [#40051](https://github.com/BerriAI/litellm/issues/40051) [Feature]: publish a signature for the remote model cost map so installs can verify what they fetched `SDK` 💬1
- [#40020](https://github.com/BerriAI/litellm/issues/40020) [Bug]: litellm_settings.max_budget also arms a process-local _current_cost cap that never resets 💬1
- [#40072](https://github.com/BerriAI/litellm/issues/40072) [Bug]: Responses-to-Bedrock bridge forwards internal litellm_params to Converse `llm translation`
- [#40069](https://github.com/BerriAI/litellm/issues/40069) [Bug]: Chat provider bridge raises ValueError on empty function_call_arguments.delta (should be no-op) `llm translation`
- [#40068](https://github.com/BerriAI/litellm/issues/40068) [Bug]: Headroom CCR streaming conversion leaves `stream_options` in the upstream request after setting `stream=false` (DeepSeek 400) `bug` `proxy` `llm translation`
- [#40064](https://github.com/BerriAI/litellm/issues/40064) [Bug] Bedrock Converse: raw `stopReason` is unrecoverable after `map_finish_reason` folds `stop_sequence` into `stop` `llm translation`
- [#40046](https://github.com/BerriAI/litellm/issues/40046) [Bug]: Five tests fail on Windows: symlink privilege, hardcoded POSIX quoting, and a POSIX-only file mode `bug` `SDK`
- [#40044](https://github.com/BerriAI/litellm/issues/40044) /health rewrites the deployment model string, so health-check spend logs price at $0 for sub-routed bedrock models `llm translation`
- [#40003](https://github.com/BerriAI/litellm/issues/40003) [Bug]: _fix_enum_empty_strings skips anyOf: nullable enums keep empty string `llm translation` `SDK`

#### 🔒 Closed Issues
- [#29261](https://github.com/BerriAI/litellm/issues/29261) [Bug]: Interactive OAuth2 MCP server returns 500 instead of 401+WWW-Authenticate when x-litellm-api-key is present but no Google OAuth token exists yet
- [#29397](https://github.com/BerriAI/litellm/issues/29397) [Bug] AdaptiveRouter reload crashes with "gammavariate: alpha and beta must be > 0.0" after restart
- [#35590](https://github.com/BerriAI/litellm/issues/35590) adaptive_router: one persisted alpha/beta=0 cell bricks the whole router with 500 gammavariate: alpha and beta must be > 0.0
- [#29416](https://github.com/BerriAI/litellm/issues/29416) [Bug]: Guardrail policies are not being saved to the db from config
- [#39665](https://github.com/BerriAI/litellm/issues/39665) [Bug]: Breaking change in LiteLLM 1.96+: managed MCP OAuth2 flow opens LiteLLM UI instead of the vendor authorization page
- [#28515](https://github.com/BerriAI/litellm/issues/28515) Gemini hallucinates tool argument names when input_schema is in claude-agent-sdk's 'bare field' shape
- [#29408](https://github.com/BerriAI/litellm/issues/29408) MCP Server DB API: credentials.auth_value not persisted on POST /v1/mcp/server
- [#39721](https://github.com/BerriAI/litellm/issues/39721) [Bug]: Anthropic /v1/messages erases OpenAI Responses refusal blocks into empty content array
- [#29406](https://github.com/BerriAI/litellm/issues/29406) [Bug]: Actual Routed Model Name Not Returned for OpenRouter Auto
- [#29430](https://github.com/BerriAI/litellm/issues/29430) Unable to get message content using liteLLM for anthropic Claude, but works perfectly for OpenAI
- [#29431](https://github.com/BerriAI/litellm/issues/29431) [Bug]: stream_options sent in non-streaming requests causes 400 from vLLM
- [#29435](https://github.com/BerriAI/litellm/issues/29435) [Bug]: BasicAuth, when user logs in with invitation email it has role admin during that first login even though configured as internal_user
- [#29436](https://github.com/BerriAI/litellm/issues/29436) CustomCodeExecutionError from guardrail block surfaces as HTTP 500 instead of 400
- [#40051](https://github.com/BerriAI/litellm/issues/40051) [Feature]: publish a signature for the remote model cost map so installs can verify what they fetched
- [#31481](https://github.com/BerriAI/litellm/issues/31481) [Bug]: adaptive_router reads model cost from litellm_params.input_cost_per_token, not model_info — silently zeroes out cost-weighted routing
- [#33204](https://github.com/BerriAI/litellm/issues/33204) [Bug]: Auto-router async_pre_routing_hook runs semantic-router synchronously on the event loop — blocks the proxy under concurrency

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,733 · **Open issues:** 1,350 · **Last push:** <1h ago

On September 7, 2026, there were no new releases for Unsloth, but several important pull requests were merged, enhancing the functionality of the platform. Notable changes included improvements to the Studio's error handling when sending tools to incompatible models, enhancements to the Docker toolkit for improved setup, and an addition to the chat function that now renders on-disk sandbox images in markdown. Additionally, a new bug was reported regarding the orcarouter with the Qwen3.8-27B-Uncensored-MLX tokenizer, indicating ongoing challenges in the system's tokenizer compatibility. Overall, it was a day centered on refining existing features and addressing emerging issues, rather than introducing new releases.

#### ✅ Merged PRs
- [#10402](https://github.com/unslothai/unsloth/pull/10402) Docker toolkit installer: stop pipefail turning a grep match into a miss
- [#10399](https://github.com/unslothai/unsloth/pull/10399) Local Agent Guides CI: judge a finished turn the CLI would not exit from
- [#10376](https://github.com/unslothai/unsloth/pull/10376) notebook_validator: read shell prefixes, backticks and case arms the way bash does
- [#10314](https://github.com/unslothai/unsloth/pull/10314) Studio: return an error when tools are sent to a model that cannot use them
- [#10317](https://github.com/unslothai/unsloth/pull/10317) Studio: stop converting the model twice when exporting GGUF to the Hub
- [#10315](https://github.com/unslothai/unsloth/pull/10315) Studio: serve /v1/embeddings from the configured embedding model when the loaded GGUF cannot
- [#10320](https://github.com/unslothai/unsloth/pull/10320) Point unsloth start openclaw memory search at the Unsloth embeddings API
- [#10361](https://github.com/unslothai/unsloth/pull/10361) feat(chat): render on-disk sandbox images in chat markdown
- [#10204](https://github.com/unslothai/unsloth/pull/10204) Use hybrid uv cache migration for Studio installs
- [#10142](https://github.com/unslothai/unsloth/pull/10142) Studio: keep an API key from borrowing the operator's Hugging Face token (#10126)
- [#10377](https://github.com/unslothai/unsloth/pull/10377) Kaggle T4: describe the batched-generation expectation as a precision property, not a pending fix
- [#10366](https://github.com/unslothai/unsloth/pull/10366) Docker: one command sets up the NVIDIA Container Toolkit on the host
- [#10367](https://github.com/unslothai/unsloth/pull/10367) Kaggle T4: fail a batched row that generates nothing while its single does not
- [#10372](https://github.com/unslothai/unsloth/pull/10372) Studio: keep the overlay rail honest about what it reserves
- [#10357](https://github.com/unslothai/unsloth/pull/10357) Studio: unsloth chat loads the model you picked, not another GGUF in the same folder
- [#10200](https://github.com/unslothai/unsloth/pull/10200) studio: stop find in page matching part way through a grapheme
- [#10138](https://github.com/unslothai/unsloth/pull/10138) deps: bump setuptools build pins and raise the ip-address override to 10.3.1
- [#10275](https://github.com/unslothai/unsloth/pull/10275) Chat: keep the payload when a provider streams arguments as a decoded object
- [#10194](https://github.com/unslothai/unsloth/pull/10194) Bump the npm-frontend-security group across 1 directory with 5 updates
- [#10318](https://github.com/unslothai/unsloth/pull/10318) Studio: measure the real size of attached documents instead of guessing
- [#10342](https://github.com/unslothai/unsloth/pull/10342) Studio: prefer the self-contained MTP head so llama-server's --fit can measure it
- [#10351](https://github.com/unslothai/unsloth/pull/10351) Studio: take GGML_CUDA_ENABLE_UNIFIED_MEMORY only when the weights outgrow the APU carve-out
- [#10364](https://github.com/unslothai/unsloth/pull/10364) Docker publish: keep the tag list to core, latest, studio, releases and dated nightly pins
- [#10363](https://github.com/unslothai/unsloth/pull/10363) Docker: retry the deadsnakes PPA add so a Launchpad 504 does not fail the build

#### 🐛 New Issues
- [#10385](https://github.com/unslothai/unsloth/issues/10385) [Bug] orcarouter/Qwen3.8-27B-Uncensored-MLX tokenizer_utils.py:229-237 `feature request` `bug` 💬2
- [#10389](https://github.com/unslothai/unsloth/issues/10389) qwen3.6 35B A3B​ MLX API issue 💬1
- [#10401](https://github.com/unslothai/unsloth/issues/10401) [Feature] Measure speculative-decoding acceptance rate for a target/draft pair
- [#10400](https://github.com/unslothai/unsloth/issues/10400) [Bug] Keyless auth fails for harnesses that send an empty bearer `feature request` `bug`
- [#10397](https://github.com/unslothai/unsloth/issues/10397) Make SSH restrictions consistent and allow approved deployments
- [#10390](https://github.com/unslothai/unsloth/issues/10390) Constant CPU usage `feature request` `bug`
- [#10379](https://github.com/unslothai/unsloth/issues/10379) [Feature] Add Option to Disable the Deduplication of Tool Calls `feature request`

#### 🔒 Closed Issues
- [#4396](https://github.com/unslothai/unsloth/issues/4396) Docker instructions: correct volumes
- [#3553](https://github.com/unslothai/unsloth/issues/3553) [Bug] No GPU detected when following DGX Spark Manual
- [#7999](https://github.com/unslothai/unsloth/issues/7999) Build new Docker Hub Image
- [#4137](https://github.com/unslothai/unsloth/issues/4137) ValueError: Pointer argument (at 4) cannot be accessed from Triton (cpu tensor?)
- [#3996](https://github.com/unslothai/unsloth/issues/3996) [Bug] Gemma3 fine-tuning: ConstantVariable(str: 'Missing required positional argument: x') [And more!]
- [#3124](https://github.com/unslothai/unsloth/issues/3124) [Bug] Failed to load gpt-oss-20b GGUF model - Invalid tensor type across multiple quantizations
- [#2274](https://github.com/unslothai/unsloth/issues/2274) 4bit with VLLM: ValueError: There is no module or parameter named 'language_model' in Gemma3ForCausalLM
- [#6180](https://github.com/unslothai/unsloth/issues/6180) Unsloth studio docker version is not the latest.
- [#4673](https://github.com/unslothai/unsloth/issues/4673) [Feature] Add the option in Unsloth Studio AI Chat to load only language model without vision mmproj file (e.g Qwen3.5-27b to fit on 16GB VRAM)
- [#4160](https://github.com/unslothai/unsloth/issues/4160) [Bug] Qwen3.5 Packing leads to unstable grads
- [#3762](https://github.com/unslothai/unsloth/issues/3762) Does unsloth have llama-cpp-python support ?
- [#1616](https://github.com/unslothai/unsloth/issues/1616) ModuleNotFoundError: No module named 'torch' - it's realy, module is installed
- [#876](https://github.com/unslothai/unsloth/issues/876) Request: Flux (Diffusion transformer)
- [#4963](https://github.com/unslothai/unsloth/issues/4963) [Feature / Product Request] Unsloth Studio Native Edition - Electron/Tauri Llama.cpp wrapper
- [#2503](https://github.com/unslothai/unsloth/issues/2503) [Bug] Llama-3.1-8B Not Supported in Unsloth 2024.09.post2
- [#725](https://github.com/unslothai/unsloth/issues/725) Does it support rloo_trainer of trl?
- [#8497](https://github.com/unslothai/unsloth/issues/8497) [Feature] Allow context offloading to RAM instead of automatically reducing context length
- [#6022](https://github.com/unslothai/unsloth/issues/6022) [Bug] Loading gemma-4-12b-it-GGUF UD-Q4_K_XL throws "Failed to load model: llama-server failed to start. Check that the GGUF file is valid and you have enough memory.
- [#2230](https://github.com/unslothai/unsloth/issues/2230) BackendCompilerFailed: backend='inductor' raised: SystemError: PY_SSIZE_T_CLEAN macro must be defined for '#' formats
- [#2124](https://github.com/unslothai/unsloth/issues/2124) How to generate different outputs with same model?
- [#1578](https://github.com/unslothai/unsloth/issues/1578) Continual Pretraining: Unexpected Trainable Parameters in PEFT Model
- [#9482](https://github.com/unslothai/unsloth/issues/9482) The latest update could not load model on 16GB RAM integrated GPU - Warning set UNSLOTH_ALLOW_HOST_OFFLOAD=1 to load it anyway.
- [#3729](https://github.com/unslothai/unsloth/issues/3729) [Bug] AttributeError: 'GptOssTopKRouter' object has no attribute 'weight'
- [#2261](https://github.com/unslothai/unsloth/issues/2261) [BUG] unsloth/Inference with Mistral Small 3.1
- [#1546](https://github.com/unslothai/unsloth/issues/1546) Feature request: export to GGUF LoRA (not merging)
- [#5008](https://github.com/unslothai/unsloth/issues/5008) Windows installer setup fails on CPU-only machines (both with and without --no-torch)
- [#4198](https://github.com/unslothai/unsloth/issues/4198) [Feature] add aarch64 container images
- [#3670](https://github.com/unslothai/unsloth/issues/3670) [Bug] Cannot load local model DeepSeek-OCR
- [#2707](https://github.com/unslothai/unsloth/issues/2707) [Feature] Diffusion Model Fine tuning
- [#2395](https://github.com/unslothai/unsloth/issues/2395) Comprehensive Report: 3-Day Installation Struggle on Windows 10/WSL Following All Official Methods
- [#1941](https://github.com/unslothai/unsloth/issues/1941) trying to run GKD with unsloth
- [#1210](https://github.com/unslothai/unsloth/issues/1210) Continued Pre-Training Notebook not working with unsloth/Llama-3.2-1B-bnb-4bit
- [#9986](https://github.com/unslothai/unsloth/issues/9986) [Bug] Ollama integration in Studio: models get a wrong "source", crash the schema, and are almost always withheld from the inventory
- [#3854](https://github.com/unslothai/unsloth/issues/3854) Trouble fine-tuning Nemotron 3 Nano, failure when merging Lora
- [#3771](https://github.com/unslothai/unsloth/issues/3771) For GRPO training in Unsloth, which uses less VRAM—FP8 or 4-bit?
- [#3336](https://github.com/unslothai/unsloth/issues/3336) [Bug] microsoft/deberta-v3-xsmall error
- [#1202](https://github.com/unslothai/unsloth/issues/1202) Question: How to fine tune an already finetuned model like NuExtract as a fine tune of Phi-3.5
- [#254](https://github.com/unslothai/unsloth/issues/254) Add support for MPT architecture
- [#9108](https://github.com/unslothai/unsloth/issues/9108) [Bug] Unsloth Studio cannot run two consecutive web searches
- [#5206](https://github.com/unslothai/unsloth/issues/5206) [Bug] POST request to `/load` in Unsloth Studio does not respond until the model is fully loaded, causing proxies like Cloudflare to time out
- [#4668](https://github.com/unslothai/unsloth/issues/4668) First experience of using Unsloth Studio - Feedback
- [#4066](https://github.com/unslothai/unsloth/issues/4066) [Bug] QWEN3 VL 30B Multi GPU Train
- [#3429](https://github.com/unslothai/unsloth/issues/3429) [Feature] Need docker image for aarch64 platform
- [#2340](https://github.com/unslothai/unsloth/issues/2340) [Question] AttributeError: 'NoneType' object has no attribute 'cdequantize_blockwise_fp32' && ion of bitsandbytes, in that case it was same, i changed triton version from 3.2.0 to 3.1.0, in that case i got error of 'No module name triton.ops'
- [#2163](https://github.com/unslothai/unsloth/issues/2163) question about speed for A100 vs rtx4090 speed
- [#1870](https://github.com/unslothai/unsloth/issues/1870) Windows Direct Install issue
- [#954](https://github.com/unslothai/unsloth/issues/954) Able to finetune `homebrewltd/llama3.1-s-instruct-v0.2` (Input=Text & Audio, Output=Text)
- [#933](https://github.com/unslothai/unsloth/issues/933) FlashAttention only support fp16 and bf16 data type
- [#867](https://github.com/unslothai/unsloth/issues/867) On train_on_responses_only
- [#850](https://github.com/unslothai/unsloth/issues/850) llama3.1-8b Guff Conversion Failure
- [#775](https://github.com/unslothai/unsloth/issues/775) Is fast rope exactly equivalent to llama's apply_rotary_pos_emb?
- [#1423](https://github.com/unslothai/unsloth/issues/1423) vllm is not supported on 4 bit quantized gemma2 9b model i tried to work on it but it gave me this error
- [#9838](https://github.com/unslothai/unsloth/issues/9838) [Feature] Why are model configuration parameters not the API page? We gotta start a new chat everytime we want to edit model param/config?
- [#6603](https://github.com/unslothai/unsloth/issues/6603) [Feature]能不能出一个windows安装版本
- [#6081](https://github.com/unslothai/unsloth/issues/6081) [Feature] I need voice input and output in my language
- [#5276](https://github.com/unslothai/unsloth/issues/5276) RuntimeError: Triton >= 3.4.0 on Hopper GPUs
- [#5138](https://github.com/unslothai/unsloth/issues/5138) [Feature]I’m really looking forward to unsloth releasing modules for SFT and RLHF training on the Apple MLX platform!
- [#4821](https://github.com/unslothai/unsloth/issues/4821) Feedback & Bug Report: Unsloth Studio on Windows – KV Cache, UI & Performance issues
- [#4420](https://github.com/unslothai/unsloth/issues/4420) [Bug] Cannot install via docker on macos
- [#3772](https://github.com/unslothai/unsloth/issues/3772) How to Ensure Loss Is Computed Only on Assistant Responses During VLM SFT
- [#3730](https://github.com/unslothai/unsloth/issues/3730) Remove new token support from the wiki
- [#3248](https://github.com/unslothai/unsloth/issues/3248) [Bug] Multi-gpu finetuning in Unsloth
- [#2708](https://github.com/unslothai/unsloth/issues/2708) Can you make a training script on Cloab for OuteAI/OuteTTS-1.0-0.6B
- [#2391](https://github.com/unslothai/unsloth/issues/2391) [Question] Unexpectable warnings during unsloth setup
- [#2137](https://github.com/unslothai/unsloth/issues/2137) Phi-4-mini-instruct vllm loading problem
- [#1953](https://github.com/unslothai/unsloth/issues/1953) Unsloth: Not an error, but MistralForCausalLM does not accept `num_items_in_batch`.
- [#1826](https://github.com/unslothai/unsloth/issues/1826) Unsloth SFTTrainer Assertion Failed on AGX Orin 64Go
- [#420](https://github.com/unslothai/unsloth/issues/420) Does unsloth/Phi-3-mini-128k-instruct model exist?
- [#10322](https://github.com/unslothai/unsloth/issues/10322) [Bug] MTP fails to load with Qwen3.8-Flash-Next-GGUF
- [#10356](https://github.com/unslothai/unsloth/issues/10356) [Feature] How to install Unsloth Desktop in completely offline environment?
- [#7092](https://github.com/unslothai/unsloth/issues/7092) [Feature] Implement Multi-Tiered "Deep Research" Agent Capabilities in Unsloth Studio
- [#10011](https://github.com/unslothai/unsloth/issues/10011) [Bug] How to use moss-tts-nano-100m in studio for inference and training?
- [#9456](https://github.com/unslothai/unsloth/issues/9456) Model hub Discover feed empty for new models: 'id: t._id' breaks owner/repo parsing → likes>=30 filter removes everything
- [#8915](https://github.com/unslothai/unsloth/issues/8915) [Feature] Filesystem tool for Desktop
- [#8878](https://github.com/unslothai/unsloth/issues/8878) [Bug] AMD VULKAN, ROCm unknown VRAM and my vram not use on VULKAN!
- [#8871](https://github.com/unslothai/unsloth/issues/8871) Custom Search API Keys - Custom Tools Support?
- [#8826](https://github.com/unslothai/unsloth/issues/8826) [Bug] Unsloth Desktop: Muse Glimmer on MLX outputs control tokens
- [#5562](https://github.com/unslothai/unsloth/issues/5562) studio: agentic loop dead-ends with context-overflow error when many tool calls accumulate
- [#4898](https://github.com/unslothai/unsloth/issues/4898) Environments are too strict
- [#4295](https://github.com/unslothai/unsloth/issues/4295) [Bug] Ministral 3 3B/8B fails with Unsupported functorch tracing attempt during training.
- [#3558](https://github.com/unslothai/unsloth/issues/3558) [Bug] Cannot save IBM Hybrid models in 4-bit safetensors format
- [#3286](https://github.com/unslothai/unsloth/issues/3286) [Feature] Question: Fine-tuning Qwen2.5-VL with custom loss
- [#3256](https://github.com/unslothai/unsloth/issues/3256) Fnetuning of nuextract2.0
- [#2915](https://github.com/unslothai/unsloth/issues/2915) [Issue] How to train 671B version deepseek-R1-0528?
- [#2863](https://github.com/unslothai/unsloth/issues/2863) [Bug] RuntimeError: CUDA error: invalid argument with Unsloth Blackwell Compatibility installation
- [#2136](https://github.com/unslothai/unsloth/issues/2136) requests.exceptions.ReadTimeout
- [#2085](https://github.com/unslothai/unsloth/issues/2085) do not need ref model anymore ,but the gpu usage still went up a little bit ,why?
- [#2043](https://github.com/unslothai/unsloth/issues/2043) run_time_error about tensorflow
- [#1715](https://github.com/unslothai/unsloth/issues/1715) GPRO training alpha
- [#10193](https://github.com/unslothai/unsloth/issues/10193) [Studio] Keep install-time uv cache inside the Studio root
- [#10126](https://github.com/unslothai/unsloth/issues/10126) Studio: Hub write paths still lend the backend's HF_TOKEN to API-key callers
- [#10330](https://github.com/unslothai/unsloth/issues/10330) [Bug] First time user Qwen3.8-UD-IQ4_XS outputs only gibberish
- [#9984](https://github.com/unslothai/unsloth/issues/9984) [Bug] Unsloth Studio duplicates the preceding user message (and its attachments) every time a response is regenerated, inflating context and token count
- [#9955](https://github.com/unslothai/unsloth/issues/9955) [Bug] The concurrent issue is that only one concurrent process is always being executed
- [#9676](https://github.com/unslothai/unsloth/issues/9676) [Feature] Official Docker image with prebuilt frontend for airgapped/OpenShift environments
- [#9632](https://github.com/unslothai/unsloth/issues/9632) RAG attachments are silently ignored in auto mode by a 12B local model
- [#9583](https://github.com/unslothai/unsloth/issues/9583) [Bug] Llamacpp too old in docker.io/unsloth/unsloth:latest - 4 months later still using May 26, 2026 release.
- [#9483](https://github.com/unslothai/unsloth/issues/9483) model not loading, that update is a noice downgrade
- [#9450](https://github.com/unslothai/unsloth/issues/9450) T2I/Mockups directly in chat/project
- [#8830](https://github.com/unslothai/unsloth/issues/8830) Desktop - embedder and reranker timeline + roadmap visibility
- [#7724](https://github.com/unslothai/unsloth/issues/7724) Chat async
- [#4843](https://github.com/unslothai/unsloth/issues/4843) [Bug/Issue] Unable to make it work with Pascal architecture cards.
- [#3078](https://github.com/unslothai/unsloth/issues/3078) [Issue] ❌ Unable to Run Sample Code on Windows 11 – Incomplete Environment Setup Instructions
- [#2920](https://github.com/unslothai/unsloth/issues/2920) Gemma3n - Multimodal Tuning for Medical VQA
- [#10353](https://github.com/unslothai/unsloth/issues/10353) [Feature]

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,062 · **Open issues:** 375 · **Last push:** 6h ago

On September 7, 2026, there were no new releases for AIBrix, indicating a day of routine maintenance. Significant progress was made with the merging of several pull requests, including the addition of a StormService gang scheduling guide in PR #2672, which enhances documentation for users. PR #2673 addressed a bug that caused TestSonicSerializationWithRawMessage to fail outside of Sonic's supported range, while PR #2671 introduced a pending replica guard for the pod autoscaler to improve stability. Additionally, PR #2668 added unit tests for the Kubernetes Pod Autoscaler (KPA) panic mode and the Horizontal Pod Autoscaler (HPA) algorithm, enhancing the robustness of the testing framework. No new issues were reported during this period.

#### ✅ Merged PRs
- [#2672](https://github.com/vllm-project/aibrix/pull/2672) docs: add StormService gang scheduling guide
- [#2673](https://github.com/vllm-project/aibrix/pull/2673) [Bug] Fix TestSonicSerializationWithRawMessage failing outside sonic's supported range
- [#2671](https://github.com/vllm-project/aibrix/pull/2671) Add pending replica guard for pod autoscaler
- [#2668](https://github.com/vllm-project/aibrix/pull/2668) [Misc] Add unit tests for KPA panic mode and HPA algorithm

#### 🔒 Closed Issues
- [#2620](https://github.com/vllm-project/aibrix/issues/2620) Document StormService Volcano gang scheduling with minMember and minTaskMember

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,623 · **Open issues:** 481 · **Last push:** <1h ago

On September 7, 2026, there were no new releases for Semantic Router. Significant merged pull requests included #3488, which addresses a bug by removing remaining unread configuration fields across the router and operator, and #3522, which enhances the dashboard by making collapsible headers operable via keyboard, improving accessibility. New issues arose, notably #3530, which proposes adding fix hints for recipe and entrypoint validation errors, potentially increasing user efficiency in debugging. Other reported bugs include #3534, concerning a feedback detector that reports low confidence incorrectly, and #3532, related to a runtime model downloader that fails to load large ONNX exports. Overall, the day was predominantly focused on bug fixes and feature enhancements.

#### ✅ Merged PRs
- [#3488](https://github.com/vllm-project/semantic-router/pull/3488) [Bug] Drop remaining unread config fields across router and operator
- [#3522](https://github.com/vllm-project/semantic-router/pull/3522) [Dashboard] Make collapsible headers keyboard operable

#### 🐛 New Issues
- [#3530](https://github.com/vllm-project/semantic-router/issues/3530) [Feature] Add fix hints for recipe and entrypoint validation errors `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem` 💬4
- [#3534](https://github.com/vllm-project/semantic-router/issues/3534) [Bug] Feedback detector reports a fabricated confidence below its threshold `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3535](https://github.com/vllm-project/semantic-router/issues/3535) [Bug] mmbert32k-feedback-detector-merged ships two label maps that disagree `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3532](https://github.com/vllm-project/semantic-router/issues/3532) [Bug] Runtime model downloader fetches multi-GB ONNX exports the candle embedding runtime never loads `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3526](https://github.com/vllm-project/semantic-router/issues/3526) [Bug] dashboard/backend go.sum is not tidy and fails every PR's Dashboard and Pre-commit checks `bug` `wg/developer-experience-ecosystem` 💬1
- [#3528](https://github.com/vllm-project/semantic-router/issues/3528) [Bug] CUDA and ROCm image builds fail fetching libssl1.1 from Debian security mirror `bug` `wg/developer-experience-ecosystem` 💬1
- [#3524](https://github.com/vllm-project/semantic-router/issues/3524) [Bug] Traced Looper responses fail strict protocol translation and return 502 `bug` `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#3513](https://github.com/vllm-project/semantic-router/issues/3513) [Bug] PyPI sim publish workflow can cancel itself mid-release
- [#3526](https://github.com/vllm-project/semantic-router/issues/3526) [Bug] dashboard/backend go.sum is not tidy and fails every PR's Dashboard and Pre-commit checks
- [#3528](https://github.com/vllm-project/semantic-router/issues/3528) [Bug] CUDA and ROCm image builds fail fetching libssl1.1 from Debian security mirror

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*