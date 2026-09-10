# 📡 AI Ecosystem Digest — 2026-09-10

> Generated 2026-09-10 00:53 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,575 | 28 | 2 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 122,849 | 25 | 4 | 50 | 4 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,881 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,152 | 21 | 2 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 206,174 | 33 | 12 | 13 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,731 | 25 | 17 | 4 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,313 | 219 | 132 | 223 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 243,860 | 25 | 3 | 3 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,368 | 30 | 17 | 37 | 1 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,717 | 21 | 6 | 46 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 127,654 | 20 | 12 | 17 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 180,532 | 6 | 4 | 3 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,393 | 30 | 16 | 54 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,952 | 18 | 72 | 59 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,073 | 1 | 1 | 9 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,701 | 20 | 16 | 3 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple versions including [rust-v0.154.0](https://github.com/openai/codex/releases/tag/rust-v0.154.0) and [rust-v0.154.0-alpha.10.2](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.10.2).
- **Claude Code** merged [PR #93215](https://github.com/anthropics/claude-code/pull/93215) to add mods: sec-default, diff, and telemetry.
- **vLLM** released [v0.29.0](https://github.com/vllm-project/vllm/releases/tag/v0.29.0).
- **OpenClaw** faced a significant issue with [#143155](https://github.com/openclaw/openclaw/issues/143155) regarding system prompt execution bias, attracting 4 comments.
- **GitHub Copilot CLI** has a new critical issue with [#4780](https://github.com/github/copilot-cli/issues/4780), focusing on session compaction OOMs and leaving sessions unresumable, which currently has 0 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,575 · **Open issues:** 12,538 · **Last push:** 2h ago

On September 10, 2026, Claude Code released version 2.1.267, which introduced a new `maxEffortLevel` setting to limit the effort across various providers and added a `--system-prompt-snapshot off` option for fresh system prompts with each request. Additionally, a fix was implemented for the Cow tool. In terms of changes from merged pull requests, the addition of modules for sec-default, diff, and telemetry was notable. However, the day was marked by significant issues, particularly with numerous bugs affecting Plan9 share mounts on Windows following recent updates, with users experiencing failures and dead device_bash, making these problems the most pressing concern for developers.

#### 🚀 New Releases
- [v2.1.267](https://github.com/anthropics/claude-code/releases/tag/v2.1.267) v2.1.267

#### ✅ Merged PRs
- [#93215](https://github.com/anthropics/claude-code/pull/93215) Add mods: sec-default, diff and telemetry

#### 🐛 New Issues
- [#92984](https://github.com/anthropics/claude-code/issues/92984) [BUG] Cowork (Windows): all Plan9 shares fail with "Plan9 mount failed: invalid argument" after Windows update KB5124008 (26200.9445) — uninstalling the KB fixes it `bug` `has repro` `platform:windows` `area:cowork` 💬29
- [#92958](https://github.com/anthropics/claude-code/issues/92958) [BUG] Cowork Windows: September 2026 cumulative update breaks Plan9 share attach — device_bash dead on both ARM64 (KB5124012 / 28000.2954) and x64 (KB5124008 / 26200.9445); confirmed by rollback A/B on five machines `bug` `has repro` `platform:windows` `area:cowork` 💬38
- [#92977](https://github.com/anthropics/claude-code/issues/92977) [BUG] Cowork local sandbox not mounting after update in Claude Desktop 1.49585.0.0 (Windows) `bug` `platform:windows` `area:cowork` `regression` 💬8
- [#93071](https://github.com/anthropics/claude-code/issues/93071) [BUG] Cowork Windows 10 22H2 x64: `sandbox-helper: no Plan9 drive shares mounted` — device_bash dead since 2026-09-08, survives app restart and app update `platform:windows` `area:cowork` `area:sandbox` 💬2
- [#93219](https://github.com/anthropics/claude-code/issues/93219) [BUG] Desktop macOS 1.49585.0: effort slider is inert — all models stuck at Max, every session `bug` `has repro` `platform:macos` `area:ui` 💬2
- [#93100](https://github.com/anthropics/claude-code/issues/93100) You've hit your session limit · resets 11am (America/Denver) `duplicate` `platform:macos` `area:cost` 💬1
- [#93234](https://github.com/anthropics/claude-code/issues/93234) [Bug] Session-based usage limits not disclosed in service terms
- [#93233](https://github.com/anthropics/claude-code/issues/93233) [BUG] Cowork desktop: session panel's "Working folders" file tree replaced by unlabeled "Context" chips — connected .md files no longer openable in-app (1.49585.0, Windows) `bug` `platform:windows` `area:cowork` `regression`
- [#93232](https://github.com/anthropics/claude-code/issues/93232) [Feature Request] Add secret rotation management for exposed credentials `duplicate` `enhancement` `area:security`
- [#93231](https://github.com/anthropics/claude-code/issues/93231) Session exit on VS Code window close never releases its git worktree lock; `locked` keeps naming the dead PID and no later session reaps it `bug` `has repro` `platform:windows` `area:core`
- [#93230](https://github.com/anthropics/claude-code/issues/93230) /goal loop doesn't detect completion and stays hidden in scrollback `bug` `area:tui` `area:ui`
- [#93229](https://github.com/anthropics/claude-code/issues/93229) [Bug] Claude Code defaults to Opus 4.8 instead of respecting specified model preference Fable 5.1 `bug` `platform:windows` `area:model` `needs-repro`
- [#93228](https://github.com/anthropics/claude-code/issues/93228) Windows: main window left permanently always-on-top after the office-addin focus_desktop bridge runs `invalid`
- [#93134](https://github.com/anthropics/claude-code/issues/93134) [BUG] desktop-commander plugin fails to start on Windows — npm error Invalid Version: (empty version spec) `bug` `platform:windows` `area:mcp` `area:plugins`
- [#93227](https://github.com/anthropics/claude-code/issues/93227) [Feature Request] Increase token limits for scientific research use cases `bug` `duplicate` `platform:macos` `area:model`
- [#93226](https://github.com/anthropics/claude-code/issues/93226) Write tool result for new files renders without added-line (green) highlighting, unlike Edit `enhancement` `area:tui` `user-experience`
- [#93225](https://github.com/anthropics/claude-code/issues/93225) Feature Request: dynamic on/off, user-only, and name-only toggles for subagents in the TUI (parity with skills) `enhancement` `area:tui` `area:agents`
- [#93224](https://github.com/anthropics/claude-code/issues/93224) [BUG] CVP-approved org (Active): Fable 5.1 [cyber] refusal fallback to Opus 4.8 fires on defensive-security prose about my own SaaS (6 events after approval, request IDs included) `bug` `has repro` `platform:windows` `area:model`
- [#93218](https://github.com/anthropics/claude-code/issues/93218) Desktop app disables `SendMessage` via `--disallowedTools`, but `ListAgents` in the same session still lists peers and documents it as the address `bug` `has repro` `platform:windows` `area:tools`
- [#93223](https://github.com/anthropics/claude-code/issues/93223) [BUG] Cowork (macOS): connected folder still mounted read-only in sandbox despite #76344 being closed as completed `bug` `has repro` `platform:macos` `area:cowork`
- [#93222](https://github.com/anthropics/claude-code/issues/93222) [Bug] Goal loop not always triggered when setting goal from desktop/mobile `bug` `platform:macos` `needs-repro` `area:desktop`
- [#93220](https://github.com/anthropics/claude-code/issues/93220) [BUG] Windows Desktop update blocks relaunch with 0x80070020 while background project processes retain the old AppX container `duplicate` `has repro` `platform:windows` `area:desktop`
- [#93221](https://github.com/anthropics/claude-code/issues/93221) [BUG] Connected folders never mount inside VM — host reports Plan9 share added successfully, guest sees none `bug` `platform:windows` `area:cowork` `area:desktop`
- [#93216](https://github.com/anthropics/claude-code/issues/93216) [BUG] v2.1.267: OAuth login fails — redirect_uri /oauth/code/callback rejected by server `bug` `has repro` `platform:linux` `area:auth`
- [#93217](https://github.com/anthropics/claude-code/issues/93217) [BUG] `invalid`
- [#93214](https://github.com/anthropics/claude-code/issues/93214) [Bug] Repeated API errors require multiple correction attempts `bug` `platform:macos` `area:model` `needs-repro`
- [#93213](https://github.com/anthropics/claude-code/issues/93213) [Bug] Auto-approve not working reliably for bash file edits in automode `bug` `platform:windows` `area:bash` `regression`
- [#93212](https://github.com/anthropics/claude-code/issues/93212) [BUG] Permission prompt rule-pattern text invisible on dark terminal backgrounds `bug` `has repro` `platform:macos` `area:tui`

#### 🔒 Closed Issues
- [#91024](https://github.com/anthropics/claude-code/issues/91024) [BUG] Fullscreen sticky prompt bar (clickable scrolled-off prompt at top) stopped rendering in 2.1.247
- [#88328](https://github.com/anthropics/claude-code/issues/88328) PermissionRequest hooks never fire in --print mode on 2.1.237, while a PreToolUse control in the same settings file does

### OpenAI Codex (`openai/codex`)

**Stars:** 122,849 · **Open issues:** 16,305 · **Last push:** <1h ago

On September 10, 2026, the release of rust-v0.154.0 introduced several notable features, including the addition of GPT-6-Astra in the model picker and Amazon Bedrock catalogs, alongside experimental worktree support for creating isolated checkouts. Among the significant merged pull requests were enhancements to session management, such as distinguishing forked sessions in session-start hooks and the ability to bind remote-control sessions to their authentication owner. Additionally, users can now answer questions inline while Codex continues its tasks. A notably hot issue surfaced regarding the 'Remote Control' feature on macOS, where a successful pairing resulted in the host remaining offline due to a WebSocket handshake failure, indicating ongoing connectivity challenges.

#### 🚀 New Releases
- [rust-v0.154.0](https://github.com/openai/codex/releases/tag/rust-v0.154.0) 0.154.0
- [rust-v0.154.0-alpha.6.1](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6.1) 0.154.0-alpha.6.1
- [rust-v0.154.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.11) 0.154.0-alpha.11
- [rust-v0.154.0-alpha.10.2](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.10.2) 0.154.0-alpha.10.2

#### ✅ Merged PRs
- [#44352](https://github.com/openai/codex/pull/44352) Remove path-bearing fields from Guardian review analytics
- [#44350](https://github.com/openai/codex/pull/44350) Add thread attachment operations with coordinated deletion
- [#44349](https://github.com/openai/codex/pull/44349) Distinguish forked sessions in session-start hooks
- [#44346](https://github.com/openai/codex/pull/44346) Support native verification in MCP tool continuations
- [#44344](https://github.com/openai/codex/pull/44344) Open tasks with Right from the agents overview
- [#44341](https://github.com/openai/codex/pull/44341) Bind remote-control sessions to their authentication owner
- [#44337](https://github.com/openai/codex/pull/44337) Return to the agent command center after archiving on shared servers
- [#44336](https://github.com/openai/codex/pull/44336) Add bounded tool-result metadata support to executed tool calls
- [#44332](https://github.com/openai/codex/pull/44332) Persist disabled plugin IDs in thread settings
- [#44331](https://github.com/openai/codex/pull/44331) Expose voice conversations in experimental features
- [#44330](https://github.com/openai/codex/pull/44330) Add paginated thread attachment listing to the state runtime
- [#44328](https://github.com/openai/codex/pull/44328) Clear pending TUI questions when accepting a new prompt
- [#44327](https://github.com/openai/codex/pull/44327) Prevent filesystem-root read denies in the Windows sandbox
- [#44325](https://github.com/openai/codex/pull/44325) Return the prompt hash in upload responses
- [#44320](https://github.com/openai/codex/pull/44320) Block goals after three empty automatic continuation turns
- [#44318](https://github.com/openai/codex/pull/44318) Give hosted Codex Apps an independent MCP protocol opt-in
- [#44314](https://github.com/openai/codex/pull/44314) Restore saved threads when the managed daemon restarts
- [#44311](https://github.com/openai/codex/pull/44311) Honor shared Retry-After deadlines for remote control
- [#44307](https://github.com/openai/codex/pull/44307) Add opt-in provisioned macOS CLI release candidates
- [#44299](https://github.com/openai/codex/pull/44299) Record thread recovery candidates on managed daemon shutdown
- [#44298](https://github.com/openai/codex/pull/44298) Set turn triggers for guardian and memory requests
- [#44297](https://github.com/openai/codex/pull/44297) Isolate the hook pipe I/O timeout test from shell startup files
- [#44293](https://github.com/openai/codex/pull/44293) Enforce the async Guardian classifier's complete input budget
- [#44290](https://github.com/openai/codex/pull/44290) Allow user-requested goal pauses through `update_goal`
- [#44289](https://github.com/openai/codex/pull/44289) Expand MXC volume grants and resolve deny globs
- [#44288](https://github.com/openai/codex/pull/44288) Prevent command hooks from hanging on blocked stdin
- [#44286](https://github.com/openai/codex/pull/44286) Block WSL interop escapes from restricted filesystem sandboxes
- [#44285](https://github.com/openai/codex/pull/44285) Preserve prewarmed reasoning effort across replay and early rollback
- [#44284](https://github.com/openai/codex/pull/44284) Add telemetry for the Windows system config namespace
- [#44283](https://github.com/openai/codex/pull/44283) Persist loaded threads before managed daemon shutdown
- [#44281](https://github.com/openai/codex/pull/44281) Enforce complete request budgets for Guardian reviews
- [#44277](https://github.com/openai/codex/pull/44277) Surface environment startup failure reasons to the model
- [#44276](https://github.com/openai/codex/pull/44276) Avoid duplicate reasoning effort updates during turn recovery
- [#44273](https://github.com/openai/codex/pull/44273) Remove the unused legacy remote compaction implementation
- [#44259](https://github.com/openai/codex/pull/44259) Remove the Windows `/sandbox-add-read-dir` slash command
- [#44255](https://github.com/openai/codex/pull/44255) Always use streamed remote compaction for supported providers
- [#44252](https://github.com/openai/codex/pull/44252) Move synchronous Guardian orchestration into the reviewer extension
- [#44250](https://github.com/openai/codex/pull/44250) Remove retired model entries while preserving migration prompts
- [#44249](https://github.com/openai/codex/pull/44249) Normalize image detail for the receiving model
- [#44248](https://github.com/openai/codex/pull/44248) Preserve tool output truncation budgets across resume and fork
- [#44243](https://github.com/openai/codex/pull/44243) Use the originating model when recording conversation history
- [#44242](https://github.com/openai/codex/pull/44242) Use captured step settings for tool planning and execution
- [#44241](https://github.com/openai/codex/pull/44241) Handle credential provider source remapping across config layers
- [#44238](https://github.com/openai/codex/pull/44238) Fix MCP elicitation cancellation and reset state on reconnect
- [#44227](https://github.com/openai/codex/pull/44227) Extract Guardian review policy into a dedicated crate
- [#44226](https://github.com/openai/codex/pull/44226) Continue rollout searches when a compressed rollout cannot be searched
- [#44207](https://github.com/openai/codex/pull/44207) Measure total exec-server request duration including queueing
- [#44202](https://github.com/openai/codex/pull/44202) Use captured step model settings for extension context
- [#44200](https://github.com/openai/codex/pull/44200) Use captured step settings when building model context
- [#44198](https://github.com/openai/codex/pull/44198) Preserve voice indicator styles during composer sparkle effects

#### 🐛 New Issues
- [#44210](https://github.com/openai/codex/issues/44210) [Windows][Pro 20x] Weekly usage display jumped 60%→97% while reset timestamp changed `bug` `rate-limits` `app` 💬9
- [#44035](https://github.com/openai/codex/issues/44035) [Windows App 26.901.6511.0] Recent chat history disappears; read_thread stays stale while rollout retains newer messages `bug` `windows-os` `app` `app-server` 💬5
- [#44045](https://github.com/openai/codex/issues/44045) ChatGPT/Codex Desktop 26.901.15231 (6 Sep 2026) Composer becomes non-responsive. `bug` `windows-os` `app` 💬5
- [#44313](https://github.com/openai/codex/issues/44313) [Linux][Remote Control] WebSocket repeatedly returns HTTP 503 upstream connection termination `bug` `CLI` `connectivity` `app-server` 💬4
- [#44316](https://github.com/openai/codex/issues/44316) macOS Remote Control pairs successfully but host stays Offline — WebSocket handshake HTTP 503 (CLI 0.153.4) `bug` `app` `connectivity` `remote` 💬3
- [#44333](https://github.com/openai/codex/issues/44333) “Remote Control enrollment persists and its WebSocket connects, but remoteControl/pairing/start returns -32600: enrollment incomplete.” `bug` `windows-os` `app` `app-server` 💬3
- [#43979](https://github.com/openai/codex/issues/43979) [Windows] Remote Control cannot be enabled after restarting; device attestation unavailable `bug` `windows-os` `app` `remote` 💬3
- [#44236](https://github.com/openai/codex/issues/44236) GitHub @codex review rejects valid PR-head SHA as a missing git ref `bug` `code-review` `codex-web` 💬2
- [#44326](https://github.com/openai/codex/issues/44326) Remote Control fails to connect on macOS – pairing code unavailable `bug` `app` `connectivity` `remote` 💬2
- [#44339](https://github.com/openai/codex/issues/44339) Weekly limit dropped from 90% to 0% without any usage `bug` `rate-limits` `CLI` 💬2
- [#44184](https://github.com/openai/codex/issues/44184) CDXB-44184: Desktop restores invalid Astra reasoning effort `bug` `app` `config` 💬2
- [#44353](https://github.com/openai/codex/issues/44353) voice fails when clicked and shuts down thread `bug` `app` 💬1
- [#44351](https://github.com/openai/codex/issues/44351) Multi-agent v2: completed agent remains resident and prevents replacement spawn after follow-up turns `bug` `CLI` `subagent` 💬1
- [#44343](https://github.com/openai/codex/issues/44343) Deleted conversations remain in sidebar and cannot be removed or archived – HTTP 404 conversation_deleted `bug` `app` `session` 💬1
- [#44342](https://github.com/openai/codex/issues/44342) Windows desktop: existing-chat sends indefinitely blocked by loading-local-config / pending codex-home; main-window reload recovers, normal restart can recur `bug` `windows-os` `app` `app-server` 💬1
- [#44340](https://github.com/openai/codex/issues/44340) Windows desktop 26.903.8094.0: browser-process crash during remote work, shortly after IAB tab cleanup `bug` `windows-os` `app` `browser` 💬1
- [#44338](https://github.com/openai/codex/issues/44338) Bug Report: Chat messages intermittently fail to send because the in-app browser route is unavailable `bug` `windows-os` `app` `browser` 💬1
- [#44329](https://github.com/openai/codex/issues/44329) Codex CLI (and VSCode extension) sandbox unable to handle /proc mounting failures `bug` `sandbox` `CLI` 💬1
- [#44258](https://github.com/openai/codex/issues/44258) [macOS app][GPT-6 Astra Ultra] Severe speed regression despite Fast mode being enabled `bug` `app` `performance` 💬1
- [#44268](https://github.com/openai/codex/issues/44268) [URGENT][BUG] codex quota fully messed up `bug` `rate-limits` `CLI` 💬1
- [#44348](https://github.com/openai/codex/issues/44348) Prolonged execution and difficulty completing implementation `bug` `model-behavior` `CLI`
- [#44347](https://github.com/openai/codex/issues/44347) Integrated Browser Toolbar reset after every task `bug` `app` `browser`
- [#44345](https://github.com/openai/codex/issues/44345) [ChatGPT Projects] Add account-wide inventory, cross-Project search, and read-only assistant access `enhancement`
- [#44335](https://github.com/openai/codex/issues/44335) [Desktop] Can't steer a message and send it as an interrupt `enhancement` `app`
- [#44334](https://github.com/openai/codex/issues/44334) Project sessions should not clutter the global Recents list `enhancement` `app` `session`

#### 🔒 Closed Issues
- [#44045](https://github.com/openai/codex/issues/44045) ChatGPT/Codex Desktop 26.901.15231 (6 Sep 2026) Composer becomes non-responsive.
- [#42184](https://github.com/openai/codex/issues/42184) Windows elevated sandbox: :root = "deny" permission profile still allows reads outside explicitly reopened roots
- [#39951](https://github.com/openai/codex/issues/39951) SessionStart context is duplicated when editing a message or forking a thread
- [#44268](https://github.com/openai/codex/issues/44268) [URGENT][BUG] codex quota fully messed up

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,881 · **Open issues:** 825 · **Last push:** 23h ago

On September 10, 2026, Gemini CLI released version v0.61.0-nightly.20260909.ged2ac40df, which includes significant updates aimed at enhancing core functionalities and addressing security concerns. Key changes in this release involve a fix for mitigating NTFS 8.3 short name path issues and isolating the settings directory in sandbox containers. Additionally, enhanced enforcement of envelope metadata provenance for untrusted tool outputs was implemented to improve reliability. There were no new issues reported or merged pull requests, indicating a stable development period following this release.

#### 🚀 New Releases
- [v0.61.0-nightly.20260909.ged2ac40df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260909.ged2ac40df) Release v0.61.0-nightly.20260909.ged2ac40df

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,152 · **Open issues:** 2,338 · **Last push:** 23h ago

On September 10, 2026, GitHub Copilot CLI released version 1.0.84-3, fixing issues where the /copy command now includes task completion messages when available and ensuring reliable connections to OAuth-authenticated MCP servers during session startup. There were no merged pull requests in the last 24 hours, but several new issues were raised, with #4775 highlighting a 404 error for Mission Control dashboard links, indicating an incorrect path for session tasks. Additionally, issue #4780 addresses a significant concern with session compaction leading to out-of-memory errors that make sessions permanently unresumable. Other notable issues include OAuth callback URL mismatches in #4795 and problems with copying commands in the Windows sandbox environment.

#### 🚀 New Releases
- [v1.0.84-3](https://github.com/github/copilot-cli/releases/tag/v1.0.84-3) 1.0.84-3

#### 🐛 New Issues
- [#4775](https://github.com/github/copilot-cli/issues/4775) Mission Control dashboard links 404: /copilot/tasks/<uuid> path doesn't exist; sessions actually live at /agents/tasks/<uuid> `triage` 💬3
- [#4780](https://github.com/github/copilot-cli/issues/4780) Session compaction OOMs and never completes, leaving the session permanently unresumable (heap exhaustion at default ~4.3 GB cap) `triage`
- [#4782](https://github.com/github/copilot-cli/issues/4782) Desktop app: enterprise managed settings ignored for telemetry, and exported spans omit GitHub repo/org/branch attributes `triage`
- [#4795](https://github.com/github/copilot-cli/issues/4795) Atlassian MCP OAuth fails: callback URL mismatch (random port vs registered 33418) `triage`
- [#4794](https://github.com/github/copilot-cli/issues/4794) Show current command above input box for demo audience `triage`
- [#4793](https://github.com/github/copilot-cli/issues/4793) CIMD declares callback port 33418 but Copilot CLI uses an ephemeral port `triage`
- [#4792](https://github.com/github/copilot-cli/issues/4792) Steering during an in-flight skill-context turn can reuse turn_index and overwrite the persisted user message `triage`
- [#4791](https://github.com/github/copilot-cli/issues/4791) Switching user creates irrecoverable error `triage`
- [#4790](https://github.com/github/copilot-cli/issues/4790) Apple webkit administrative account on my device `triage`
- [#4789](https://github.com/github/copilot-cli/issues/4789) Ctrl+C while copying selected text cancels and declines confirmation dialog `triage`
- [#4788](https://github.com/github/copilot-cli/issues/4788) Windows sandbox: git status fails with working-directory permission denied despite allowed paths `triage`
- [#4787](https://github.com/github/copilot-cli/issues/4787) Dictation basically unusable - Deletes the text after I dictate periodically. `triage`
- [#4785](https://github.com/github/copilot-cli/issues/4785) sdk: "./sdk" export throws at import time — native module resolved outside its own security boundary `triage`
- [#4784](https://github.com/github/copilot-cli/issues/4784) [Bug] -i initial prompt can remain pending until a second user message on Windows `triage`
- [#4783](https://github.com/github/copilot-cli/issues/4783) Enterprise policy to allow yolo in CLI sandbox `triage`
- [#4781](https://github.com/github/copilot-cli/issues/4781) Github Copilot CLI frequently uses python scripts or cat >> to edit files instead of built in edit tool `triage`
- [#4779](https://github.com/github/copilot-cli/issues/4779) MCP discovery ISSUE `triage`
- [#4778](https://github.com/github/copilot-cli/issues/4778) Show a clear waiting-for-input state instead of continuing to animate the spinner `triage`
- [#4777](https://github.com/github/copilot-cli/issues/4777) `copilot plugin marketplace add` should silently succeed if marketplace is already registered `triage`
- [#4776](https://github.com/github/copilot-cli/issues/4776) Browser canvas WebView closes when loading a JavaScript-heavy localhost page `triage`
- [#4774](https://github.com/github/copilot-cli/issues/4774) Mission Control dashboard links 404: /copilot/tasks/<uuid> path doesn't exist; sessions actually live at /agents/tasks/<uuid>

#### 🔒 Closed Issues
- [#4757](https://github.com/github/copilot-cli/issues/4757) `--yolo` / `--allow-all` blocked for the whole session by a fail-closed bypass restriction applied on an account with NO managed policy
- [#4774](https://github.com/github/copilot-cli/issues/4774) Mission Control dashboard links 404: /copilot/tasks/<uuid> path doesn't exist; sessions actually live at /agents/tasks/<uuid>

### OpenCode (`anomalyco/opencode`)

**Stars:** 206,174 · **Open issues:** 5,734 · **Last push:** <1h ago

On September 10, 2026, OpenCode released version 1.18.30, introducing the Astra system prompt specifically for GPT-6 models, alongside crucial bug fixes that preserved Bedrock DeepSeek model IDs and updated the Azure and OpenAI provider SDKs for enhanced compatibility. Key merged features included a fix to retain streamed output for empty completion checkpoints and the addition of session message filtering by type, improving overall user interaction. Noteworthy bug fixes included optimizations to reduce session load work and clarifications regarding Go model usage. Among the new issues reported, there was significant concern regarding model-ID versioning, as the exclusion of dotless IDs caused the new gpt-6-astra model to be incorrectly categorized as older than gpt-5.5.

#### 🚀 New Releases
- [v1.18.30](https://github.com/anomalyco/opencode/releases/tag/v1.18.30) v1.18.30

#### ✅ Merged PRs
- [#48249](https://github.com/anomalyco/opencode/pull/48249) fix(ai): retain streamed output for empty completion checkpoints
- [#48228](https://github.com/anomalyco/opencode/pull/48228) feat(api): filter session messages by type
- [#48223](https://github.com/anomalyco/opencode/pull/48223) fix(app): reduce cold and warm session load work
- [#48243](https://github.com/anomalyco/opencode/pull/48243) fix(app): hide outgoing browser when switching sessions
- [#48192](https://github.com/anomalyco/opencode/pull/48192) feat(console): clarify Go model usage
- [#48150](https://github.com/anomalyco/opencode/pull/48150) feat(desktop): polish branch search and session spacing
- [#45366](https://github.com/anomalyco/opencode/pull/45366) fix(app): prevent settings project card clipping
- [#48152](https://github.com/anomalyco/opencode/pull/48152) feat(desktop): show compaction progress and outcomes
- [#48218](https://github.com/anomalyco/opencode/pull/48218) refactor(codemode): treat prototype-named keys as ordinary data
- [#47786](https://github.com/anomalyco/opencode/pull/47786) feat(desktop): use base menu selection styling
- [#48231](https://github.com/anomalyco/opencode/pull/48231) fix(core): make responses websockets opt-in
- [#47859](https://github.com/anomalyco/opencode/pull/47859) fix(session-ui): align retry icon with label
- [#48221](https://github.com/anomalyco/opencode/pull/48221) fix(ai): mark replayed assistant messages completed

#### 🐛 New Issues
- [#48237](https://github.com/anomalyco/opencode/issues/48237) fix(app): auto-accept toggle disabled when no session is open 💬4
- [#48239](https://github.com/anomalyco/opencode/issues/48239) Goal-mode round driver re-claims blindly after errors/cancel; quit leaves orphan rounds 💬3
- [#48214](https://github.com/anomalyco/opencode/issues/48214) Prompt tool list diverges from the runtime registry mid-session — no MCP mutation involved 💬3
- [#48252](https://github.com/anomalyco/opencode/issues/48252) [FEATURE]: Desktop Environment panel — skills, plugins, MCPs, loaded instructions + per-session context cost 💬2
- [#48247](https://github.com/anomalyco/opencode/issues/48247) Model-ID version gate excludes dotless IDs, so gpt-6-astra is treated as older than gpt-5.5 💬2
- [#48246](https://github.com/anomalyco/opencode/issues/48246) Explicit cache breakpoints are applied only to Anthropic-family models; every other family relies on implicit caching 💬2
- [#48240](https://github.com/anomalyco/opencode/issues/48240) [extend] Goal mode: same-session autonomous long-horizon loop `needs:compliance` 💬2
- [#48241](https://github.com/anomalyco/opencode/issues/48241) [fix] Every run re-persists the full worktree diff into message.summary + event log (GB-scale bloat) 💬2
- [#48238](https://github.com/anomalyco/opencode/issues/48238) fix(app): auto-accept toggle disabled when no session is open `needs:compliance` 💬2
- [#48215](https://github.com/anomalyco/opencode/issues/48215) Верните DeepSeekV4 💬2
- [#48206](https://github.com/anomalyco/opencode/issues/48206) new version is tyerrible 💬2
- [#48219](https://github.com/anomalyco/opencode/issues/48219) Skill discovery context-dependent: project-local skill shadow breaks global same-name skill load (1.18.29) 💬2
- [#48183](https://github.com/anomalyco/opencode/issues/48183) core: flatten reasoningEffort settings for custom OpenAI-compatible providers `2.0` 💬2
- [#48202](https://github.com/anomalyco/opencode/issues/48202) Terminal pane freezes in Desktop version 💬2
- [#48099](https://github.com/anomalyco/opencode/issues/48099) [FEATURE]: OpenCode desktop MSI installer 💬2
- [#48199](https://github.com/anomalyco/opencode/issues/48199) the stuck ui state files problem 💬2
- [#48203](https://github.com/anomalyco/opencode/issues/48203) [Bug] Desktop (Mac): sending a follow-up while a turn is running interrupts it, queued follow-ups are unreachable 💬2
- [#48168](https://github.com/anomalyco/opencode/issues/48168) responce didnot show 💬2
- [#48250](https://github.com/anomalyco/opencode/issues/48250) OpenCode Beta: Could not edit project name `2.0` 💬1
- [#48242](https://github.com/anomalyco/opencode/issues/48242) Permission ask/deny patterns not enforced in serve (`-s`) sessions, v1.18.30 💬1
- [#48226](https://github.com/anomalyco/opencode/issues/48226) TUI: prompt fails instantly with "UnknownError: UnknownError" on github-copilot/gpt-6-astra; same model works via `opencode run` 💬1
- [#48220](https://github.com/anomalyco/opencode/issues/48220) TUI crash: TypeError 'a[t]' in location-state refresh — race between location init and per-provider fetches (v1.18.30, also present in v1.18.29) 💬1
- [#48198](https://github.com/anomalyco/opencode/issues/48198) Web UI: markdown files open as raw source in the file viewer instead of rendered markdown 💬1
- [#48196](https://github.com/anomalyco/opencode/issues/48196) local MCP servers can silently fail to register tools with no error surfaced 💬1
- [#48193](https://github.com/anomalyco/opencode/issues/48193) Absolute-path permission rules never match (tool patterns are worktree-relative) 💬1
- [#48253](https://github.com/anomalyco/opencode/issues/48253) Filed in error — internal tooling configuration, not a product defect
- [#48234](https://github.com/anomalyco/opencode/issues/48234) [Bug]: Windows Desktop 1.18.30 renderer blocked by local proxy (AdGuard) - sidecar returns 500 Request Blocked, UI shows Could not reach Local Server
- [#48227](https://github.com/anomalyco/opencode/issues/48227) [V2] xAI: Responses WebSocket fails after tool calls `2.0`
- [#48232](https://github.com/anomalyco/opencode/issues/48232) ACP drops permission requests from Task subagent sessions
- [#48229](https://github.com/anomalyco/opencode/issues/48229) cross-spawn test: "captures stdout via .all when no stderr" asserts on shell-builtin echo, fails on Windows outside Git Bash
- [#48224](https://github.com/anomalyco/opencode/issues/48224) code mode: desktop-only browser tools exposed in web sessions `2.0`
- [#48207](https://github.com/anomalyco/opencode/issues/48207) Anthropic provider docs still advertise removed Claude Pro/Max auth methods
- [#48197](https://github.com/anomalyco/opencode/issues/48197) Web UI: file browser is hidden on narrow viewports (phone portrait) — only reachable in landscape

#### 🔒 Closed Issues
- [#48240](https://github.com/anomalyco/opencode/issues/48240) [extend] Goal mode: same-session autonomous long-horizon loop
- [#48241](https://github.com/anomalyco/opencode/issues/48241) [fix] Every run re-persists the full worktree diff into message.summary + event log (GB-scale bloat)
- [#48238](https://github.com/anomalyco/opencode/issues/48238) fix(app): auto-accept toggle disabled when no session is open
- [#48215](https://github.com/anomalyco/opencode/issues/48215) Верните DeepSeekV4
- [#48206](https://github.com/anomalyco/opencode/issues/48206) new version is tyerrible
- [#48202](https://github.com/anomalyco/opencode/issues/48202) Terminal pane freezes in Desktop version
- [#46596](https://github.com/anomalyco/opencode/issues/46596) Steps ending in content_filtered or output-less max_tokens settle as succeeded with empty output
- [#48199](https://github.com/anomalyco/opencode/issues/48199) the stuck ui state files problem
- [#48168](https://github.com/anomalyco/opencode/issues/48168) responce didnot show
- [#48226](https://github.com/anomalyco/opencode/issues/48226) TUI: prompt fails instantly with "UnknownError: UnknownError" on github-copilot/gpt-6-astra; same model works via `opencode run`
- [#48253](https://github.com/anomalyco/opencode/issues/48253) Filed in error — internal tooling configuration, not a product defect
- [#48227](https://github.com/anomalyco/opencode/issues/48227) [V2] xAI: Responses WebSocket fails after tool calls

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,731 · **Open issues:** 1,367 · **Last push:** <1h ago

On September 10, 2026, Qwen Code released version v0.23.2, which introduced features like improved split-view session navigation and enhanced budget figures in continuation prompts. Additionally, a nightly build (v0.23.2-nightly.20260909.2e212144d3) fixed an issue where checkpoints could overrun the claim budget and expanded reasoning presets for various models. Among the merged pull requests, the notable addition of the OpenAI Responses API content generator was implemented, along with fixes to avoid duplicate cold session restorations and reject pre-aborted queued tool requests. However, a significant new issue was raised regarding an extension update that dropped all conversation history during the transition from version 0.21.x to 0.23.x.

#### 🚀 New Releases
- [v0.23.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.2) Release v0.23.2
- [v0.23.2-nightly.20260909.2e212144d3](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.2-nightly.20260909.2e212144d3) Release v0.23.2-nightly.20260909.2e212144d3
- [sdk-typescript-v0.1.11](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.11) SDK TypeScript Release v0.1.11
- [cua-driver-rs-v0.20.5](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.5) cua-driver-rs v0.20.5

#### ✅ Merged PRs
- [#11449](https://github.com/QwenLM/qwen-code/pull/11449) feat(providers): show newest discovered models first
- [#11413](https://github.com/QwenLM/qwen-code/pull/11413) fix(web-shell): avoid duplicate cold session restoration
- [#11483](https://github.com/QwenLM/qwen-code/pull/11483) fix(core): reject pre-aborted queued tool requests
- [#8169](https://github.com/QwenLM/qwen-code/pull/8169) feat(core): add OpenAI Responses API content generator

#### 🐛 New Issues
- [#11489](https://github.com/QwenLM/qwen-code/issues/11489) Extension update drops all conversation history (v0.21.x → v0.23.x) `status/need-information` `priority/P1` `type/bug` `category/integration` 💬4
- [#11465](https://github.com/QwenLM/qwen-code/issues/11465) web-shell visuals: session-workflow-cockpit-light renders nondeterministically (1.31% diff on one run, 0% on a re-run of the same commit) `priority/P3` `type/bug` `category/development` `scope/testing` 💬4
- [#11500](https://github.com/QwenLM/qwen-code/issues/11500) TUI exits silently (uncaught React #185) when multiple background agents complete — Ink useBoxMetrics layout-listener setState loop `priority/P1` `type/bug` `category/ui` `scope/rendering` 💬3
- [#11503](https://github.com/QwenLM/qwen-code/issues/11503) Daemon guard denies the workspace's own repository when its metadata dir is a junction or symlink to another volume `priority/P2` `type/bug` `category/security` `scope/shell` 💬3
- [#11475](https://github.com/QwenLM/qwen-code/issues/11475) feat(serve): supported remote folders — connect clients to a remote daemon and manage its workspaces/sessions `priority/P3` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#11453](https://github.com/QwenLM/qwen-code/issues/11453) bug(web-shell): sidebar footer version label and action icons overlap at narrow sidebar widths `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#11433](https://github.com/QwenLM/qwen-code/issues/11433) Discussion: evaluate SQLite for Session/Prompt indexing and persistence at scale `priority/P3` `type/feature-request` `category/core` `category/performance` 💬3
- [#11494](https://github.com/QwenLM/qwen-code/issues/11494) Follow up on non-blocking Responses review findings from #8169 `priority/P3` `status/blocked` `type/bug` `category/core` 💬2
- [#11504](https://github.com/QwenLM/qwen-code/issues/11504) Proposal: replace the shell-command text guard with typed, sandbox-constrained repository/file tools (AgentBridge-style architecture) `priority/P3` `type/feature-request` `category/security` `scope/shell` 💬2
- [#11502](https://github.com/QwenLM/qwen-code/issues/11502) Could qwen-code support durable memory across sessions? `scope/memory` 💬2
- [#11499](https://github.com/QwenLM/qwen-code/issues/11499) ${VAR} placeholders in .mcp.json are not expanded, so headers are sent literally `priority/P2` `type/bug` `category/configuration` `scope/mcp` 💬2
- [#11493](https://github.com/QwenLM/qwen-code/issues/11493) perf(transcript): index cache admission cliff — hot sessions beyond the 64 MiB byte budget are never cached and rescan on every read `priority/P3` `category/performance` `scope/session-management` `scope/caching` 💬2
- [#11492](https://github.com/QwenLM/qwen-code/issues/11492) feat(gitlab-channel): opt-in bypass for self-authored todos (self-mention with own PAT) `priority/P3` `type/feature-request` `category/integration` `need-discussion` 💬2
- [#11484](https://github.com/QwenLM/qwen-code/issues/11484) feat(cli): allow explicit-version updates without npm registry discovery `priority/P3` `type/feature-request` `category/cli` `scope/commands` 💬2
- [#11478](https://github.com/QwenLM/qwen-code/issues/11478) perf(export): split the transcript renderer's embedded CSS into a separate versioned asset `priority/P3` `category/performance` `scope/packaging` `scope/build-system` 💬2
- [#11471](https://github.com/QwenLM/qwen-code/issues/11471) [Discussion] Auto-memory extract has no frequency gate — and a no-op run leaves the cursor in place, so it re-forks every turn `priority/P3` `type/feature-request` `category/core` `category/performance` 💬2
- [#11460](https://github.com/QwenLM/qwen-code/issues/11460) Qwen Desktop 1.0.3.0 MCP Filesystem Hangs After First Interaction `status/need-information` `type/bug` `category/integration` `scope/mcp` 💬2
- [#11442](https://github.com/QwenLM/qwen-code/issues/11442) web-shell: hover timestamp clips the first line of the message it belongs to `status/in-review` `priority/P3` `type/bug` `category/ui` 💬2
- [#11427](https://github.com/QwenLM/qwen-code/issues/11427) docs(daemon): integration guide — which daemon path to take, and what each one requires `priority/P3` `type/documentation` `category/integration` `scope/documentation` 💬2
- [#11505](https://github.com/QwenLM/qwen-code/issues/11505) Main CI failed: Qwen Code CI on 2e212144d3d8 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11508](https://github.com/QwenLM/qwen-code/issues/11508) Deferred review findings from PR #11455: fix(acp): Preserve submitted prompt provenance for auto recall
- [#11507](https://github.com/QwenLM/qwen-code/issues/11507) Deferred review findings from PR #11289: fix(web-shell): keep mid-turn messages the daemon rejects at idle
- [#11498](https://github.com/QwenLM/qwen-code/issues/11498) Deferred review findings from PR #11375: fix(ci): retry transient E2E build artifact upload failures once (#11364)
- [#11482](https://github.com/QwenLM/qwen-code/issues/11482) Deferred review findings from PR #11376: fix(cli): quiesce serve test leak and sync capability doc count (#11363)
- [#11481](https://github.com/QwenLM/qwen-code/issues/11481) Deferred review findings from PR #11417: fix(cli): quiesce the fire-and-forget serve handler across tests

#### 🔒 Closed Issues
- [#889](https://github.com/QwenLM/qwen-code/issues/889) Support openai Response API
- [#11146](https://github.com/QwenLM/qwen-code/issues/11146) fix(core): pre-aborted tool requests can wait behind an unrelated active batch
- [#8887](https://github.com/QwenLM/qwen-code/issues/8887) WebShell: planned SSE reconnect shows alarming "Connection lost / Reconnecting" banner
- [#9452](https://github.com/QwenLM/qwen-code/issues/9452) bug(core): switching Responses models or endpoints can make a saved session unusable
- [#11405](https://github.com/QwenLM/qwen-code/issues/11405) Denied tool with a pattern, forces model to not use the tool at all
- [#11453](https://github.com/QwenLM/qwen-code/issues/11453) bug(web-shell): sidebar footer version label and action icons overlap at narrow sidebar widths
- [#9187](https://github.com/QwenLM/qwen-code/issues/9187) Reuse WebShell transcript UI in the VS Code companion
- [#11385](https://github.com/QwenLM/qwen-code/issues/11385) Web shell: sidebar session spinner never shows during background-agent notification turns
- [#11502](https://github.com/QwenLM/qwen-code/issues/11502) Could qwen-code support durable memory across sessions?
- [#11317](https://github.com/QwenLM/qwen-code/issues/11317) Main CI failed: Qwen Code CI on f1ed3bc31a2b
- [#11414](https://github.com/QwenLM/qwen-code/issues/11414) Main CI failed: Qwen Code CI on 422929b3a7df
- [#11325](https://github.com/QwenLM/qwen-code/issues/11325) bug(goal): the checkpoint verifier schema permits more claim text than the checkpoint accepts
- [#11060](https://github.com/QwenLM/qwen-code/issues/11060) bug(daemon): active transcript omits the Daemon promptId needed to reconcile live replay / 活动轮转录缺少同轮身份
- [#11442](https://github.com/QwenLM/qwen-code/issues/11442) web-shell: hover timestamp clips the first line of the message it belongs to
- [#11402](https://github.com/QwenLM/qwen-code/issues/11402) SDK Release Failed for v0.1.10 on 2026-09-08
- [#11346](https://github.com/QwenLM/qwen-code/issues/11346) Main CI failed: Qwen Code CI on 0d1e0fbfa6f3
- [#11408](https://github.com/QwenLM/qwen-code/issues/11408) Deferred review findings from PR #9466: refactor: anchor rewind mapping to stable prompt identity

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

**Stars:** 389,313 · **Open issues:** 6,561 · **Last push:** <1h ago

On September 10, 2026, there were no new releases for OpenClaw. Significant progress was made with multiple merged pull requests, including a fix to preserve native menus for adopted sessions (#143342) and enhancements to the logging performance by avoiding unnecessary copying of owned diagnostic arrays (#143482). Additionally, the team worked on refining E2EE QA drivers (#143550) and addressing several critical bugs, such as addressing a conflict in system prompt execution (#143155). Notably, a new issue emerged regarding internal heartbeat output leaks to Telegram user chats (#143278), highlighting ongoing challenges with messaging reliability within the system.

#### ✅ Merged PRs
- [#143508](https://github.com/openclaw/openclaw/pull/143508) fix(release): support frozen Anthropic cache candidates
- [#143550](https://github.com/openclaw/openclaw/pull/143550) test(matrix): bootstrap isolated E2EE QA drivers
- [#143566](https://github.com/openclaw/openclaw/pull/143566) test(matrix): keep state_after fault injection in place
- [#143342](https://github.com/openclaw/openclaw/pull/143342) fix(ui): preserve native menus for adopted sessions
- [#143516](https://github.com/openclaw/openclaw/pull/143516) fix(plugins): preserve bundled trust for dev path installs
- [#143344](https://github.com/openclaw/openclaw/pull/143344) fix(runtime): keep diagnostics and update usable on an unsupported Node
- [#143544](https://github.com/openclaw/openclaw/pull/143544) refactor(tests): share empty metadata owner fixtures
- [#143193](https://github.com/openclaw/openclaw/pull/143193) fix(memory): bound pre-compaction flush context
- [#143485](https://github.com/openclaw/openclaw/pull/143485) fix(cli): allow short diagnostic flags on unsupported Node
- [#143537](https://github.com/openclaw/openclaw/pull/143537) refactor(tests): share Discord REST runtime spies
- [#142844](https://github.com/openclaw/openclaw/pull/142844) fix(skills): scope the Skill Workshop guardrail to Workshop-owned targets
- [#143532](https://github.com/openclaw/openclaw/pull/143532) refactor(signal): share native quote test inputs
- [#143482](https://github.com/openclaw/openclaw/pull/143482) perf(logging): avoid copying owned diagnostic arrays
- [#143455](https://github.com/openclaw/openclaw/pull/143455) fix(docs): detect overdue mirror changes during steady edits
- [#143227](https://github.com/openclaw/openclaw/pull/143227) feat(workers): reuse completed project setup across cloud sessions
- [#143434](https://github.com/openclaw/openclaw/pull/143434) fix(sessions): keep cold prepared updates responsive
- [#142741](https://github.com/openclaw/openclaw/pull/142741) fix(cron): prevent Gateway hangs on stalled reservations
- [#143529](https://github.com/openclaw/openclaw/pull/143529) refactor: simplify exec host approval test fixtures
- [#143493](https://github.com/openclaw/openclaw/pull/143493) fix: retain prepared speech overrides until host cleanup
- [#143522](https://github.com/openclaw/openclaw/pull/143522) docs: split gateway/sandboxing into a directory of child pages
- [#143527](https://github.com/openclaw/openclaw/pull/143527) test: reuse source transforms in proxy exit cases
- [#143520](https://github.com/openclaw/openclaw/pull/143520) docs: split gateway/secrets into five child pages
- [#143510](https://github.com/openclaw/openclaw/pull/143510) fix(release): qualify frozen Telegram failure recovery
- [#143507](https://github.com/openclaw/openclaw/pull/143507) refactor(doctor): share session migration validation
- [#143515](https://github.com/openclaw/openclaw/pull/143515) docs(gateway): split the RPC method reference into flat sibling pages
- [#143492](https://github.com/openclaw/openclaw/pull/143492) fix: retain model catalog resources through projections
- [#143514](https://github.com/openclaw/openclaw/pull/143514) improve(test): remove minute-long triage timeout wait
- [#143513](https://github.com/openclaw/openclaw/pull/143513) improve(ci): skip unnecessary SDK guard parsing
- [#139548](https://github.com/openclaw/openclaw/pull/139548) fix(process): clean up adopted zombies after command timeout
- [#143517](https://github.com/openclaw/openclaw/pull/143517) docs: split THREAT-MODEL-ATLAS threat catalog by ATLAS tactic
- [#143497](https://github.com/openclaw/openclaw/pull/143497) fix(docs): repair dead docs anchors emitted from source code
- [#143490](https://github.com/openclaw/openclaw/pull/143490) fix: keep run resources available through late cleanup
- [#143449](https://github.com/openclaw/openclaw/pull/143449) chore(ui): refresh control ui locales
- [#143481](https://github.com/openclaw/openclaw/pull/143481) perf(tests): overlap independent CLI cleanup processes
- [#143457](https://github.com/openclaw/openclaw/pull/143457) fix(usage): preserve the selected session owner in details
- [#143463](https://github.com/openclaw/openclaw/pull/143463) feat(crabbox): advertise macOS cloud workers
- [#143460](https://github.com/openclaw/openclaw/pull/143460) fix: retain PDF provider state through cancelled work
- [#143477](https://github.com/openclaw/openclaw/pull/143477) refactor(cli): narrow help context and remove unused fields
- [#143487](https://github.com/openclaw/openclaw/pull/143487) test: reuse TSX transforms across update output cases
- [#143470](https://github.com/openclaw/openclaw/pull/143470) refactor(channels): reuse normalized setup catalog metadata
- [#143446](https://github.com/openclaw/openclaw/pull/143446) fix(gateway): allow runtime-aware environment listing from CLI
- [#143426](https://github.com/openclaw/openclaw/pull/143426) fix: retain background compaction state through disposal
- [#141277](https://github.com/openclaw/openclaw/pull/141277) fix(computer): pre-resolve paired-node capabilities for tool schemas
- [#143414](https://github.com/openclaw/openclaw/pull/143414) fix: retain isolated completion state through cleanup
- [#143472](https://github.com/openclaw/openclaw/pull/143472) docs(gateway): lift non-family sections out of RPC method families
- [#143451](https://github.com/openclaw/openclaw/pull/143451) fix(sessions): identify slow SQLite writer operations
- [#143469](https://github.com/openclaw/openclaw/pull/143469) improve(test): reduce Gateway worktree fixture setup
- [#143392](https://github.com/openclaw/openclaw/pull/143392) test: avoid cold plugin setup in fallback attribution
- [#143462](https://github.com/openclaw/openclaw/pull/143462) fix(update): preserve unchanged already-current no-op
- [#143458](https://github.com/openclaw/openclaw/pull/143458) docs(plugins): split the Codex harness runtime page by reader job
- [#143453](https://github.com/openclaw/openclaw/pull/143453) perf: avoid repeated system-message trimming
- [#143450](https://github.com/openclaw/openclaw/pull/143450) test(plugins): accept MCP resolver diagnostic
- [#143360](https://github.com/openclaw/openclaw/pull/143360) refactor(synology): keep body failures with the response owner
- [#143452](https://github.com/openclaw/openclaw/pull/143452) fix(release): include default survivor companions
- [#143456](https://github.com/openclaw/openclaw/pull/143456) docs: split gateway configuration into an index plus four pages
- [#142802](https://github.com/openclaw/openclaw/pull/142802) fix(progress): stop command exits from crowding out active work
- [#141069](https://github.com/openclaw/openclaw/pull/141069) fix: node battery level reads as 1% at full charge because the 0.0-1.0 fraction is undocumented
- [#143459](https://github.com/openclaw/openclaw/pull/143459) docs(gateway): give each RPC method family its own heading
- [#143440](https://github.com/openclaw/openclaw/pull/143440) fix(cli): reject blank directory group IDs before setup
- [#140864](https://github.com/openclaw/openclaw/pull/140864) fix(skills): preserve Workshop routing descriptions
- [#143447](https://github.com/openclaw/openclaw/pull/143447) test(browser): allow tab index propagation
- [#143445](https://github.com/openclaw/openclaw/pull/143445) test(ui): wait for refreshed account catalog
- [#143444](https://github.com/openclaw/openclaw/pull/143444) test(plugins): complete bundled-dir mock
- [#143416](https://github.com/openclaw/openclaw/pull/143416) fix(channels): preserve labels for unloaded plugins
- [#143443](https://github.com/openclaw/openclaw/pull/143443) refactor(tests): share image resource acquisition setup
- [#143439](https://github.com/openclaw/openclaw/pull/143439) refactor(hooks): consolidate source precedence policy
- [#143427](https://github.com/openclaw/openclaw/pull/143427) test: reuse prepared entry for CLI JSON failure coverage
- [#143310](https://github.com/openclaw/openclaw/pull/143310) fix(auth): scope the legacy auth-profile migration refusal to affected providers
- [#142750](https://github.com/openclaw/openclaw/pull/142750) fix(matrix): backport safe E2EE client retirement
- [#143157](https://github.com/openclaw/openclaw/pull/143157) docs: fix one-way and absolute links across cli, tools, gateway, and channels
- [#143424](https://github.com/openclaw/openclaw/pull/143424) fix(ui): clarify global model defaults and agent scope
- [#143430](https://github.com/openclaw/openclaw/pull/143430) refactor(wizard): share navigation prompt arguments
- [#143436](https://github.com/openclaw/openclaw/pull/143436) fix(release): accept Bun built-in module specifiers
- [#143405](https://github.com/openclaw/openclaw/pull/143405) refactor(ui): keep one Cron editor job snapshot
- [#143425](https://github.com/openclaw/openclaw/pull/143425) fix(ui): align chat actions and keep copy confirmation green
- [#143407](https://github.com/openclaw/openclaw/pull/143407) fix(chat): keep submitted images visible during history handoff
- [#143415](https://github.com/openclaw/openclaw/pull/143415) test: avoid cold source SDK loading in MCP coverage
- [#143418](https://github.com/openclaw/openclaw/pull/143418) fix: close node pairing fixture databases before cleanup
- [#143421](https://github.com/openclaw/openclaw/pull/143421) fix(ci): reconcile omitted empty FRV inputs
- [#143408](https://github.com/openclaw/openclaw/pull/143408) fix(google-meet): clean up audio when Chrome startup fails
- [#142938](https://github.com/openclaw/openclaw/pull/142938) fix(ci): retain postpublish diagnostics when verification fails
- [#143412](https://github.com/openclaw/openclaw/pull/143412) refactor(signal): exercise real inbound orchestration in tests
- [#143404](https://github.com/openclaw/openclaw/pull/143404) fix(docs): report original MDX source lines
- [#143403](https://github.com/openclaw/openclaw/pull/143403) fix: retain image provider state through request cleanup
- [#143411](https://github.com/openclaw/openclaw/pull/143411) refactor: unify missing-command ownership resolution
- [#143081](https://github.com/openclaw/openclaw/pull/143081) fix(codex): recover final answers in long conversations
- [#143409](https://github.com/openclaw/openclaw/pull/143409) fix(test): close token store database before fixture removal
- [#143378](https://github.com/openclaw/openclaw/pull/143378) fix(skills): deliver contained file aliases to cloud workers
- [#141841](https://github.com/openclaw/openclaw/pull/141841) fix: clarify session delete memory cleanup
- [#142736](https://github.com/openclaw/openclaw/pull/142736) fix(talk): allow independent voice consults from locked requesters
- [#143400](https://github.com/openclaw/openclaw/pull/143400) fix(chat): clear previews from stopped typing connections
- [#143395](https://github.com/openclaw/openclaw/pull/143395) refactor(gateway): remove unused chat history config forwarding
- [#143402](https://github.com/openclaw/openclaw/pull/143402) refactor: remove duplicate annotation composition tests
- [#143397](https://github.com/openclaw/openclaw/pull/143397) chore(i18n): refresh native locales
- [#143394](https://github.com/openclaw/openclaw/pull/143394) fix(docs): preserve fenced examples during formatting
- [#143401](https://github.com/openclaw/openclaw/pull/143401) fix(tests): close pairing state before fixture cleanup
- [#143373](https://github.com/openclaw/openclaw/pull/143373) refactor(tests): remove unused channel catalog fixtures
- [#143398](https://github.com/openclaw/openclaw/pull/143398) fix(tests): close Control UI fixture databases before cleanup
- [#143393](https://github.com/openclaw/openclaw/pull/143393) perf: traverse shared SDK export graphs once
- [#143361](https://github.com/openclaw/openclaw/pull/143361) fix(doctor): avoid unnecessary database reopen work during updates
- [#143285](https://github.com/openclaw/openclaw/pull/143285) fix(sessions): prevent excess cleanup after disk pressure clears
- [#143384](https://github.com/openclaw/openclaw/pull/143384) fix(gateway): avoid repeated health refreshes on reconnect
- [#142743](https://github.com/openclaw/openclaw/pull/142743) fix(qa): backport Matrix live stability fixes
- [#140388](https://github.com/openclaw/openclaw/pull/140388) fix(telegram): replies are lost when the HTTP proxy refuses the tunnel
- [#143377](https://github.com/openclaw/openclaw/pull/143377) fix: retain Anthropic requests through cancellation cleanup
- [#143380](https://github.com/openclaw/openclaw/pull/143380) refactor(cli): share node command payload assembly
- [#143379](https://github.com/openclaw/openclaw/pull/143379) fix: prevent cold archive pruning from blocking the Gateway
- [#143366](https://github.com/openclaw/openclaw/pull/143366) fix: retain side-question resources through runtime cleanup
- [#133693](https://github.com/openclaw/openclaw/pull/133693) fix(cron): prevent isolated runs from failing during runtime refresh
- [#143369](https://github.com/openclaw/openclaw/pull/143369) fix: retain speech providers until stream cleanup finishes
- [#142915](https://github.com/openclaw/openclaw/pull/142915) fix(agents): retain Traditional Chinese policy digest markers
- [#143370](https://github.com/openclaw/openclaw/pull/143370) refactor: reuse Slack approval context fixtures
- [#143347](https://github.com/openclaw/openclaw/pull/143347) fix(doctor): preserve legacy Claude conversations during migration
- [#143146](https://github.com/openclaw/openclaw/pull/143146) fix(agents): avoid eager session imports in model discovery
- [#143312](https://github.com/openclaw/openclaw/pull/143312) fix(runtime): gate node:sqlite on a NUL round-trip capability probe
- [#143287](https://github.com/openclaw/openclaw/pull/143287) docs: refresh CI and plugin validation guidance
- [#143365](https://github.com/openclaw/openclaw/pull/143365) fix(browser): prevent premature existing-session timeouts
- [#143301](https://github.com/openclaw/openclaw/pull/143301) fix(ci): preserve prepared iOS Fastlane path
- [#143282](https://github.com/openclaw/openclaw/pull/143282) fix(cli): recognize managed portable Bash completion hooks without rewriting them
- [#143319](https://github.com/openclaw/openclaw/pull/143319) fix(routing): show implicit default bindings in health diagnostics
- [#143354](https://github.com/openclaw/openclaw/pull/143354) fix: support autoreview through managed secret egress
- [#143352](https://github.com/openclaw/openclaw/pull/143352) refactor(android): unify node capability approval state
- [#143362](https://github.com/openclaw/openclaw/pull/143362) refactor(tests): share Feishu fetched-message inputs
- [#143358](https://github.com/openclaw/openclaw/pull/143358) test(providers): reuse required thinking guards
- [#141600](https://github.com/openclaw/openclaw/pull/141600) fix: session titles fall back when labeling fails
- [#143333](https://github.com/openclaw/openclaw/pull/143333) test(ui): tolerate subpixel attachment geometry
- [#141984](https://github.com/openclaw/openclaw/pull/141984) fix(plugins): avoid collateral drop of non-restricted feishu tools
- [#140266](https://github.com/openclaw/openclaw/pull/140266) fix(telegram): honor bot ID mentions in text and photo captions
- [#143349](https://github.com/openclaw/openclaw/pull/143349) fix(crabbox): report completed source cleanup after capture cancellation
- [#143345](https://github.com/openclaw/openclaw/pull/143345) fix(workers): preserve useful cleanup failure diagnostics
- [#143270](https://github.com/openclaw/openclaw/pull/143270) fix(plugin-sdk): retain prepared models through host cleanup
- [#142699](https://github.com/openclaw/openclaw/pull/142699) chore(ui): refresh control ui locales
- [#143337](https://github.com/openclaw/openclaw/pull/143337) fix: keep multi-agent session lists working after model fallback
- [#143346](https://github.com/openclaw/openclaw/pull/143346) test(deepseek): reuse required-value assertions
- [#142810](https://github.com/openclaw/openclaw/pull/142810) fix(android): restore completed tool activity in chat
- [#143162](https://github.com/openclaw/openclaw/pull/143162) fix(android): wait for picked attachments before sending captions
- [#143268](https://github.com/openclaw/openclaw/pull/143268) fix(tooling): catch unused exports after script and test edits
- [#137255](https://github.com/openclaw/openclaw/pull/137255) fix(ui): keep dashboard progress tied to target runs
- [#143340](https://github.com/openclaw/openclaw/pull/143340) improve(team-reports): fill the report frame edge to edge
- [#143338](https://github.com/openclaw/openclaw/pull/143338) refactor: share Docker package-builder fixture text
- [#143339](https://github.com/openclaw/openclaw/pull/143339) test(infra): exercise real install workspaces
- [#143332](https://github.com/openclaw/openclaw/pull/143332) fix: prevent cold history planning from blocking the Gateway
- [#143305](https://github.com/openclaw/openclaw/pull/143305) fix(plugins): preserve tool identity during managed cancellation
- [#143266](https://github.com/openclaw/openclaw/pull/143266) fix(cli): treat agent selection refusals as expected CLI conditions
- [#143330](https://github.com/openclaw/openclaw/pull/143330) refactor(cli): remove obsolete node timeout overrides
- [#143325](https://github.com/openclaw/openclaw/pull/143325) fix(cron): retire legacy owned rows on read-only store loads
- [#143318](https://github.com/openclaw/openclaw/pull/143318) refactor(test): remove duplicate flat usage-cost case
- [#143336](https://github.com/openclaw/openclaw/pull/143336) refactor(tests): share Feishu reply account inputs
- [#143324](https://github.com/openclaw/openclaw/pull/143324) fix: preserve staged path replacements during worktree cleanup
- [#143326](https://github.com/openclaw/openclaw/pull/143326) improve(test): reduce media QA startup overhead
- [#143299](https://github.com/openclaw/openclaw/pull/143299) fix(docs): respect fenced-code closing suffixes
- [#143291](https://github.com/openclaw/openclaw/pull/143291) fix: sandboxed plugin agents can read listed skills
- [#143313](https://github.com/openclaw/openclaw/pull/143313) fix: retain buffered speech providers through synthesis cleanup
- [#142453](https://github.com/openclaw/openclaw/pull/142453) fix: avoid full-history reads for delivery mirrors
- [#143321](https://github.com/openclaw/openclaw/pull/143321) fix(update): stop timing out long Doctor finalization
- [#143175](https://github.com/openclaw/openclaw/pull/143175) fix: reduce memory spikes when checking long sessions
- [#143320](https://github.com/openclaw/openclaw/pull/143320) fix(ci): distinguish watcher progress from raw GitHub status
- [#141323](https://github.com/openclaw/openclaw/pull/141323) fix(ai): tool calls fail with "malformed JSON arguments" when streamed input has raw control characters or invalid escapes
- [#142176](https://github.com/openclaw/openclaw/pull/142176) fix(agents): retry silent malformed tool rejections
- [#143297](https://github.com/openclaw/openclaw/pull/143297) fix(ci): reject duplicate deferred locale chunks
- [#143316](https://github.com/openclaw/openclaw/pull/143316) refactor(testing): inspect authoritative handoff state
- [#143317](https://github.com/openclaw/openclaw/pull/143317) fix(tests): restore empty-transcript compaction hook coverage
- [#143260](https://github.com/openclaw/openclaw/pull/143260) fix: keep prepared video providers alive through background jobs
- [#141163](https://github.com/openclaw/openclaw/pull/141163) fix(cli): keep gateway alive after transient DNS failures
- [#143308](https://github.com/openclaw/openclaw/pull/143308) fix: retain exec review resources after timeout
- [#143309](https://github.com/openclaw/openclaw/pull/143309) refactor: share Docker harness timeout fixture text
- [#143269](https://github.com/openclaw/openclaw/pull/143269) refactor(restart): keep continuation policy with update payloads
- [#143189](https://github.com/openclaw/openclaw/pull/143189) refactor: share sandbox filesystem parameter contracts
- [#143238](https://github.com/openclaw/openclaw/pull/143238) fix(agents): drop the blanket credential prompt that blocked owner-authorized logins
- [#142935](https://github.com/openclaw/openclaw/pull/142935) fix(ci): isolate frozen consumer contracts
- [#143288](https://github.com/openclaw/openclaw/pull/143288) fix(crabbox): allow native snapshots to finish before enrollment
- [#143307](https://github.com/openclaw/openclaw/pull/143307) fix: retain approval classification resources through cleanup
- [#143190](https://github.com/openclaw/openclaw/pull/143190) fix(update): keep bundled plugin aliases bundled in candidate rehearsal
- [#143183](https://github.com/openclaw/openclaw/pull/143183) feat(ui): open plugin tabs at short slug URLs such as /reports
- [#143302](https://github.com/openclaw/openclaw/pull/143302) fix(cli): retain local model resources through completion cleanup
- [#143292](https://github.com/openclaw/openclaw/pull/143292) fix(update): honor the update budget when probing the Windows Scheduled Task
- [#143097](https://github.com/openclaw/openclaw/pull/143097) refactor: skip redundant CLI JSON-mode parsing
- [#143235](https://github.com/openclaw/openclaw/pull/143235) fix(doctor): migrate legacy Codex music model selectors
- [#143300](https://github.com/openclaw/openclaw/pull/143300) refactor(tests): share bound-turn client fixtures
- [#143271](https://github.com/openclaw/openclaw/pull/143271) improve(test): reduce worker preparation overhead
- [#140914](https://github.com/openclaw/openclaw/pull/140914) fix(gateway): prevent systemd restarts from hanging
- [#142742](https://github.com/openclaw/openclaw/pull/142742) feat: offer Node.js updates when the CLI runtime is incompatible
- [#143298](https://github.com/openclaw/openclaw/pull/143298) improve(test): reuse initial egress proxy certificates
- [#143273](https://github.com/openclaw/openclaw/pull/143273) feat(tui): answer agent questions in gateway and local modes
- [#143213](https://github.com/openclaw/openclaw/pull/143213) fix(test): keep Windows media file URL coverage isolated
- [#143198](https://github.com/openclaw/openclaw/pull/143198) fix: stop injecting Git co-author attribution into every turn
- [#142749](https://github.com/openclaw/openclaw/pull/142749) fix(git): use Git-openable null paths for GIT_CONFIG_GLOBAL/SYSTEM on Windows
- [#143174](https://github.com/openclaw/openclaw/pull/143174) fix(update): converge plugin cohort when core is already current
- [#142242](https://github.com/openclaw/openclaw/pull/142242) feat(cloud): compress workspace manifest transfers
- [#143281](https://github.com/openclaw/openclaw/pull/143281) fix: standalone session resets stall during thinking lookup
- [#140621](https://github.com/openclaw/openclaw/pull/140621) fix(anthropic): preserve cache reuse across transient runtime context
- [#143207](https://github.com/openclaw/openclaw/pull/143207) fix(ci): keep Android test and lint build timestamps consistent
- [#143272](https://github.com/openclaw/openclaw/pull/143272) refactor(tests): remove unused doctor catalog fixture
- [#142817](https://github.com/openclaw/openclaw/pull/142817) fix(gateway): preserve restored-version verification across update restart
- [#143065](https://github.com/openclaw/openclaw/pull/143065) fix(tts): release telephony provider resources after synthesis
- [#143243](https://github.com/openclaw/openclaw/pull/143243) fix(agents): render provider auth and model-not-found copy on transcript surfaces
- [#143141](https://github.com/openclaw/openclaw/pull/143141) fix(doctor): preserve ambiguous Workshop migrations for review
- [#143223](https://github.com/openclaw/openclaw/pull/143223) refactor(cli): share host desktop status formatting
- [#143254](https://github.com/openclaw/openclaw/pull/143254) fix(models): avoid provider loading during cold session resets
- [#143251](https://github.com/openclaw/openclaw/pull/143251) fix(test): subagent announce seam coverage runs on an isolated module graph
- [#143171](https://github.com/openclaw/openclaw/pull/143171) fix(ci): show publication observations in FRV status
- [#143237](https://github.com/openclaw/openclaw/pull/143237) refactor(test): reuse shared budget flag parsing
- [#142979](https://github.com/openclaw/openclaw/pull/142979) fix(ci): run Android emulator workflows on Ubuntu KVM
- [#142990](https://github.com/openclaw/openclaw/pull/142990) refactor(tests): remove duplicate model usage aggregation test
- [#143261](https://github.com/openclaw/openclaw/pull/143261) refactor(tests): share mutable ACP metadata upserts
- [#143253](https://github.com/openclaw/openclaw/pull/143253) improve(test): reuse prepared repo CLI in Telegram QA
- [#143153](https://github.com/openclaw/openclaw/pull/143153) fix(state): rebuild Skill Workshop reviews when the content marker outruns the table
- [#143031](https://github.com/openclaw/openclaw/pull/143031) fix(mcp): close plugin resources after accepted stdio work finishes
- [#143226](https://github.com/openclaw/openclaw/pull/143226) fix(sessions): move cold cleanup integrity checks off the main thread
- [#143195](https://github.com/openclaw/openclaw/pull/143195) fix(doctor): explain hard-linked session migration refusals
- [#143258](https://github.com/openclaw/openclaw/pull/143258) fix: Doctor source-isolation tests fail on tmpfs
- [#142221](https://github.com/openclaw/openclaw/pull/142221) fix(crabbox): clear snapshot captures rejected before submission
- [#143249](https://github.com/openclaw/openclaw/pull/143249) fix(matrix): steering coverage no longer races the cold first-turn dispatch
- [#142661](https://github.com/openclaw/openclaw/pull/142661) fix(gateway): preserve MCP App ticket authority
- [#143247](https://github.com/openclaw/openclaw/pull/143247) improve(test): reuse initial egress lifecycle certificates
- [#138819](https://github.com/openclaw/openclaw/pull/138819) fix(whatsapp): keep outbound response prefixes out of inbound messages
- [#143240](https://github.com/openclaw/openclaw/pull/143240) fix(process): prevent false cleanup failures after successful commands
- [#143107](https://github.com/openclaw/openclaw/pull/143107) fix(proxy-capture): preserve partial responses and shutdown diagnostics
- [#143205](https://github.com/openclaw/openclaw/pull/143205) fix: worktree option disappears in repositories with many branches
- [#143219](https://github.com/openclaw/openclaw/pull/143219) fix(ci): budget deferred locale catalogs separately
- [#143069](https://github.com/openclaw/openclaw/pull/143069) feat(fal): support GPT Image 2.5 variants
- [#142259](https://github.com/openclaw/openclaw/pull/142259) feat(dev-skills): add proof-video skill for captioned, zoomed PR recordings
- [#143138](https://github.com/openclaw/openclaw/pull/143138) fix(update): avoid false Memory Core migration refusals

#### 🐛 New Issues
- [#143278](https://github.com/openclaw/openclaw/issues/143278) Heartbeat internal output leaks to Telegram user chat (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬5
- [#143155](https://github.com/openclaw/openclaw/issues/143155) [Bug]: System prompt execution bias conflicts with mandatory multi-skill workflow gates `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#142737](https://github.com/openclaw/openclaw/issues/142737) Gateway hangs and retains cron ticks when reservations make no progress `maintainer` `clawsweeper:source-repro` `impact:crash-loop` `P0` 💬2
- [#143267](https://github.com/openclaw/openclaw/issues/143267) [Bug]: completion installer duplicates portable managed Bash source lines `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#143111](https://github.com/openclaw/openclaw/issues/143111) Installing a clawhub plugin: requires-capability-consent error sends users to an enable step that fails with 'Plugin not found' `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#143100](https://github.com/openclaw/openclaw/issues/143100) [Bug]: worker desktop observe and launch skip the stale-build admission that tunnels and attach enforce `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#142897](https://github.com/openclaw/openclaw/issues/142897) Slack: message text silently lost on duplicate/redelivered events (user_request arrives with empty text) `P1` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬3
- [#143385](https://github.com/openclaw/openclaw/issues/143385) [Bug]: Codex successful Telegram delivery skips history coverage, replaying bulk history `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#143461](https://github.com/openclaw/openclaw/issues/143461) [Bug]: message_sending hook cancellation surfaces as a generic UNAVAILABLE transport error, discarding cancelReason (agents retry a deliberate suppression as if the channel were down) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#143177](https://github.com/openclaw/openclaw/issues/143177) [Bug]: Deleting an adopted native Codex or Claude session only removes the OpenClaw wrapper `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142965](https://github.com/openclaw/openclaw/issues/142965) fix(subagents/mcp): per-session MCP child processes are not reaped after a session ends; process count grows unbounded until gateway restart `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#143523](https://github.com/openclaw/openclaw/issues/143523) [Bug]: 2026.9.3 re-adds `--task-supervisor < NUL` to generated gateway.cmd (regression of #137813 / #138844) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬2
- [#143389](https://github.com/openclaw/openclaw/issues/143389) [Bug]: WhatsApp /new stalls ~82s on retained subagent tree; per-node scope.refresh repeats full traversal `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#143454](https://github.com/openclaw/openclaw/issues/143454) [Bug]: Codex-native subagent completion handoff re-sends an already-delivered result (announce turn cannot be silent; empty-response retry forces a duplicate send) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#142949](https://github.com/openclaw/openclaw/issues/142949) [Feature]: Independent iPad conversation windows `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#143448](https://github.com/openclaw/openclaw/issues/143448) [Chore] Cleanup legacy Notion MCP definitions from openclaw.json and mcporter config `P3` `impact:security` 💬2
- [#143438](https://github.com/openclaw/openclaw/issues/143438) refactor(hooks): consolidate source precedence policy `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#143441](https://github.com/openclaw/openclaw/issues/143441) WebChat: raw DSML markup displayed instead of rendered tool call cards + content duplication `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#143428](https://github.com/openclaw/openclaw/issues/143428) refactor(wizard): share argument forwarding for navigation prompts `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#143413](https://github.com/openclaw/openclaw/issues/143413) [Feature]: Expose WebMCP tools through the existing Chrome DevTools MCP browser driver `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#143388](https://github.com/openclaw/openclaw/issues/143388) [Bug]: Google Meet audio survives failed Chrome provider startup `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#143396](https://github.com/openclaw/openclaw/issues/143396) Stuck-session recovery aborts healthy claude-cli turns: progress marker pins on one tool call while later tool calls keep completing (2026.9.2) `P1` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬2
- [#142848](https://github.com/openclaw/openclaw/issues/142848) [Bug]: AGENTS.md policy digest silently drops non-Latin policy lines — \b cannot match CJK `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#143334](https://github.com/openclaw/openclaw/issues/143334) [Bug]: Lost subagent completion delivery parks requester in settle-yield and starves queued user messages; restart recovery fails "gateway request timeout for agent" `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` `impact:message-loss` 💬2
- [#143294](https://github.com/openclaw/openclaw/issues/143294) Bug: Slack DM `allowFrom` incorrectly gates group chat triggers when `groupPolicy: "open"` `P2` `impact:ux-friction` 💬2
- [#143094](https://github.com/openclaw/openclaw/issues/143094) [Bug]: 2026.9.3 Upgrade - Skill Workshop legacy proposal migration hard-fails with "owning agent could not be inferred", blocking doctor / update `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#143279](https://github.com/openclaw/openclaw/issues/143279) Requester settle-wake give-up path cannot give up: failed subagent run warns every 60s forever `P2` `impact:session-state` 💬2
- [#143280](https://github.com/openclaw/openclaw/issues/143280) session-sqlite "SQLite session write failed" discards the error cause `P2` `impact:other` 💬2
- [#143001](https://github.com/openclaw/openclaw/issues/143001) [Bug]: update deferral fails on schema 15->16 - "no such column: owner_agent_id" while creating idx_skill_workshop_collection_reviews_owner_time before the column exists `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#143265](https://github.com/openclaw/openclaw/issues/143265) [Bug]: Discord ignores configured steer mode for ordinary corrections despite requireMention=false `P2` `impact:session-state` 💬2
- [#143236](https://github.com/openclaw/openclaw/issues/143236) anthropic catalog: sessions created by gateway SDK runtime (entrypoint sdk-ts) are invisible — long web sessions appear to 'lose' their thread `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#143169](https://github.com/openclaw/openclaw/issues/143169) memory_search aborts managed local embedding cold start before ready timeout `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#143199](https://github.com/openclaw/openclaw/issues/143199) [Bug]: Android Start Talk silently returns to idle after provider auth failure `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬2
- [#143211](https://github.com/openclaw/openclaw/issues/143211) [Bug]: Conversation-history context block rendered into visible inbound message body (Telegram) — 2026.9.1 regression `bug` `regression` `P2` `impact:session-state` 💬2
- [#143066](https://github.com/openclaw/openclaw/issues/143066) [Bug]: Read-only channel commands accept blank account selectors `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#143083](https://github.com/openclaw/openclaw/issues/143083) [Bug]: Message CLI treats blank account selectors as omission `P2` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬2
- [#143123](https://github.com/openclaw/openclaw/issues/143123) [Bug]: Bug: Agent avatar not reflected in Control UI after update (2026.9.3) — persists across browsers, OS, and restarts `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#142781](https://github.com/openclaw/openclaw/issues/142781) [Bug]: Auto-selected session account makes claude-cli models report missing-auth and locks the composer `clawsweeper:source-repro` `impact:auth-provider` `P0` `issue-rating: 🦞 diamond lobster` 💬2
- [#142878](https://github.com/openclaw/openclaw/issues/142878) [Bug]: Codex harness ignores configured project_doc_max_bytes above 128 KiB `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142832](https://github.com/openclaw/openclaw/issues/142832) [Bug]: Discord voice notes arrive without their words in ambient channels `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142972](https://github.com/openclaw/openclaw/issues/142972) [Feature]: Bot mode: hosted Gateway, local clients, and shared computer `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#142901](https://github.com/openclaw/openclaw/issues/142901) [Bug]: Docker image ships Workboard Control UI bundle as 0700, breaking arbitrary-UID runtimes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#143003](https://github.com/openclaw/openclaw/issues/143003) [Feature]: Allow admitted WhatsApp users to /new and /reset their own isolated DM sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#142966](https://github.com/openclaw/openclaw/issues/142966) [Feature]: Two-column model picker (providers left, models right) for large multi-provider setups `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#143018](https://github.com/openclaw/openclaw/issues/143018) [Bug]: active-memory recall fails on plugin-internal sessions - "Plugin session ownership target not found" for freshly created memory sub-agent sessions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#143017](https://github.com/openclaw/openclaw/issues/143017) Prompt-cache: five ways a persistent session rewrites its prefix (21.3M cache-write tokens measured) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#142874](https://github.com/openclaw/openclaw/issues/142874) Session stuck after companion-app blip: "Reply operation has no active tool authority snapshot" / ChatMetadataSnapshotUnavailableError (self-heal attempt failed) `clawsweeper:needs-info` `impact:session-state` `P0` `issue-rating: 🦐 gold shrimp` 💬2
- [#142794](https://github.com/openclaw/openclaw/issues/142794) [Bug]: visible sessions_spawn drops runTimeoutSeconds before runtime execution `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142820](https://github.com/openclaw/openclaw/issues/142820) [Bug]: claude-cli — Telegram inbound turns receive an API-key credential that identical RPC turns do not `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142847](https://github.com/openclaw/openclaw/issues/142847) [Bug]: Windows node host mangles quoted arguments in native exec — runCommand never sets windowsVerbatimArguments `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142783](https://github.com/openclaw/openclaw/issues/142783) [Bug]: Plugin typed hooks (before_prompt_build / agent_end) stop dispatching after multi-agent migration — memory plugins dead `bug` `regression` `P1` `impact:session-state` 💬2
- [#142753](https://github.com/openclaw/openclaw/issues/142753) [Bug] settled-finalization-fallback text leaks to user-facing delivery channels (e.g. qqbot) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬2
- [#142770](https://github.com/openclaw/openclaw/issues/142770) 2026.9.3: failed update can leave forward-migrated Workshop state on 9.2 rollback; WebChat ACP binding also lacks conversationId `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#143580](https://github.com/openclaw/openclaw/issues/143580) Heartbeat lane: post-tool continuation sent without transcript → confused non-silent reply delivered to channel (2026.9.3) 💬1
- [#143560](https://github.com/openclaw/openclaw/issues/143560) [Bug]: channels remove reports success for an account the channel does not have 💬1
- [#143556](https://github.com/openclaw/openclaw/issues/143556) [Bug]: agent state DB index-only corruption (database disk image is malformed) under concurrent transcript writes — 2026.9.1, macOS native, no Docker `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` `impact:data-loss` 💬1
- [#143188](https://github.com/openclaw/openclaw/issues/143188) [Bug]: Memory flush omits the resolved runtime context budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#143549](https://github.com/openclaw/openclaw/issues/143549) [Feature]: Scoped continuation authority for external finalization plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#143263](https://github.com/openclaw/openclaw/issues/143263) [Bug]: doctor recommends 'devices rotate --role node' for an operator-only-baseline device, but that rotation is always denied (scope-outside-approved-baseline) `P2` `clawsweeper:source-repro` `impact:security` `issue-rating: 🦞 diamond lobster` 💬1
- [#143545](https://github.com/openclaw/openclaw/issues/143545) [Bug]: check:changed fails on clean main since 2026-09-08 (overdue sdk compat record) `bug` `maintainer` `P2` `clawsweeper:not-repro-on-main` 💬1
- [#143543](https://github.com/openclaw/openclaw/issues/143543) [Bug]: gateway restart writes its intent through a state migration it cannot be allowed to run `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#143539](https://github.com/openclaw/openclaw/issues/143539) [Feature]: Reveal chat widget actions on hover and keyboard focus `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#143473](https://github.com/openclaw/openclaw/issues/143473) [Feature]: Show sender identity in shared chat rail previews `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#143526](https://github.com/openclaw/openclaw/issues/143526) Live tool result is emptied to content: "" when session tool-output total is at/over the 256k aggregate budget `P2` `impact:session-state` 💬1
- [#143524](https://github.com/openclaw/openclaw/issues/143524) [Bug]: Agent SQLite WAL grows to 1.4–2.8 GB in days despite wal_autocheckpoint=1000; blocks gateway startup (Windows, 2026.9.2/9.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬1
- [#142916](https://github.com/openclaw/openclaw/issues/142916) [Feature]: Phone-optional Apple Watch and Wear OS clients `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#143476](https://github.com/openclaw/openclaw/issues/143476) Improve session reference chips with chat icons and inline alignment `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#143479](https://github.com/openclaw/openclaw/issues/143479) [Bug]: release admission fixture loses race marker before assertion `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#143478](https://github.com/openclaw/openclaw/issues/143478) [Bug]: exact continuation candidate fails static formatting gate `P3` 💬1
- [#143480](https://github.com/openclaw/openclaw/issues/143480) [Bug]: delayed continuation delegate test intermittently exceeds 120-second timeout `P2` `impact:other` 💬1
- [#142950](https://github.com/openclaw/openclaw/issues/142950) [Feature]: Native session and run actions for iOS/macOS Shortcuts and macOS Spotlight `enhancement` `app: ios` `app: macos` `maintainer` 💬1
- [#143475](https://github.com/openclaw/openclaw/issues/143475) [Bug]: Flat dashboard tool schema can make first widget self-anchor `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#143471](https://github.com/openclaw/openclaw/issues/143471) [Feature]: Manage Fleet cells on explicit paired-node targets `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#143423](https://github.com/openclaw/openclaw/issues/143423) [Feature Request] Native Gmail MCP integration (replace mcporter usage) `P3` 💬1
- [#143442](https://github.com/openclaw/openclaw/issues/143442) Update failure: doctor-failed (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#143173](https://github.com/openclaw/openclaw/issues/143173) Legacy auth-profiles.json presence blocks ALL provider auth for an agent, not just the affected provider `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#143431](https://github.com/openclaw/openclaw/issues/143431) [Bug]: Discord shows “Progress updated” but provides no access to progress-card text `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#143422](https://github.com/openclaw/openclaw/issues/143422) [Feature]: Repository-scoped attached resources for Cloud sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143419](https://github.com/openclaw/openclaw/issues/143419) [Bug]: Claude setup-token profile is not able to get usage info `bug` `bug:behavior` `P2` `impact:auth-provider` 💬1
- [#143420](https://github.com/openclaw/openclaw/issues/143420) Forced drain timeout leaves background task records running; successor restart drains on them again `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143417](https://github.com/openclaw/openclaw/issues/143417) [Feature]: Authorize shared OAuth MCP servers from the Control UI `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#143077](https://github.com/openclaw/openclaw/issues/143077) Codex final-answer recovery fails in long-running conversations `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#143406](https://github.com/openclaw/openclaw/issues/143406) Byte-fuse thread rotation leaves stale activeWriterRunId; next turn's compaction is refused ("thread … already has an active writer") and surfaces "Context is too large" at 62% of budget `P1` `impact:session-state` `impact:message-loss` 💬1
- [#143387](https://github.com/openclaw/openclaw/issues/143387) Android notification QoL: session-aware alerts, source labels, and cross-device suppression `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143381](https://github.com/openclaw/openclaw/issues/143381) Heartbeat runs never retire their bundle MCP runtime (ephemeral runtimes treated as persistent) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#143390](https://github.com/openclaw/openclaw/issues/143390) [Bug]: manual /compact of a claude-cli session bills the stored model-provider API key instead of the CLI's native login `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#143386](https://github.com/openclaw/openclaw/issues/143386) [Bug]: Codex background completion replaces normal thread binding, forcing cold reload on return `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#143375](https://github.com/openclaw/openclaw/issues/143375) pdf tool is gated on a vision model before it opens the document, so a scanned PDF is unreachable with no model — the extraction plugin's own scan signal only runs after a model call `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143367](https://github.com/openclaw/openclaw/issues/143367) [Bug]: After a Agent answers the chat collapses automatically `bug` `regression` `P2` `clawsweeper:needs-live-repro` 💬1
- [#143363](https://github.com/openclaw/openclaw/issues/143363) [Bug]: Codex-mirrored webchat runs persist "Audio reply" placeholder instead of final answer text when auto-TTS is enabled `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#143364](https://github.com/openclaw/openclaw/issues/143364) Claude subscription rate-limit (429) never escalates to configured model fallback — misclassified as "short window", retried 9x on the same model instead `P1` `impact:auth-provider` 💬1
- [#143348](https://github.com/openclaw/openclaw/issues/143348) Android node approval has duplicate state representations `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#143353](https://github.com/openclaw/openclaw/issues/143353) [whatsapp] Runtime context header prepended to user message body `P2` `impact:security` 💬1
- [#143357](https://github.com/openclaw/openclaw/issues/143357) [Bug]: Codex native tools are disabled when sandbox policy allows them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#143356](https://github.com/openclaw/openclaw/issues/143356) [Bug]: Stop button remains after turn finishes; clicking it does nothing until page refresh `bug` `regression` `P2` `clawsweeper:needs-live-repro` 💬1
- [#143351](https://github.com/openclaw/openclaw/issues/143351) [Bug]: iMessage inbound photo ingest spins the Gateway event loop (~80% CPU, health dead) and re-wedges on every boot; includeAttachments=false does not prevent it `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` `impact:crash-loop` 💬1
- [#142805](https://github.com/openclaw/openclaw/issues/142805) [Bug]: Android chat leaves blank gaps where tool activity should appear `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#143335](https://github.com/openclaw/openclaw/issues/143335) [Bug]: session-sqlite "SQLite session write failed" bursts: "native prompt annotation would restore redacted evidence" + integrity check timeouts `P2` `clawsweeper:needs-live-repro` `impact:session-state` `impact:security` 💬1
- [#143328](https://github.com/openclaw/openclaw/issues/143328) Bug: session-memory hook saves unrelated old session on gateway startup `P2` `impact:session-state` 💬1
- [#143290](https://github.com/openclaw/openclaw/issues/143290) [Bug]: Chat position rail includes assistant replies and omits unloaded user turns `maintainer` 💬1
- [#143186](https://github.com/openclaw/openclaw/issues/143186) Consolidate duplicated sandbox filesystem parameter contracts `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#143210](https://github.com/openclaw/openclaw/issues/143210) [Windows] openclaw update aborts with managed-service-preflight because the Scheduled Task runtime probe exceeds its hard-coded 5s timeout `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬1
- [#143252](https://github.com/openclaw/openclaw/issues/143252) Standalone session resets wait for thinking catalog discovery `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#143204](https://github.com/openclaw/openclaw/issues/143204) Managed update restore: boot regrade overwrites verified versionMatch, report claims version mismatch on healthy restored Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#143176](https://github.com/openclaw/openclaw/issues/143176) [Bug]: Vertex AI gemini-2.5-flash tool-calling fails entirely when a declared tool has a Python-keyword parameter name `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#143284](https://github.com/openclaw/openclaw/issues/143284) [Feature]: agent-facing tool to send Feishu interactive cards with option buttons (clicks route back to the session) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143262](https://github.com/openclaw/openclaw/issues/143262) [Bug]: secrets apply writes auth-profile SecretRef to per-agent store and ignores auth.sharedStore=state-db ownership; plaintext key remains in shared store `P1` `impact:security` `impact:auth-provider` 💬1
- [#143277](https://github.com/openclaw/openclaw/issues/143277) Update failure: reconcile:abandoned (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#143274](https://github.com/openclaw/openclaw/issues/143274) maybeRetryTransient accepts full rate-limit Retry-After in 2026.9.3, disabling auth-profile rotation failover `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143246](https://github.com/openclaw/openclaw/issues/143246) Browser control blocked: "local listener owner could not be verified" (Windows, task-launched gateway) `P2` `impact:security` 💬1
- [#143245](https://github.com/openclaw/openclaw/issues/143245) "prepared model runtime plugin generation was superseded" after upgrade — doctor --fix does not clear `P1` `impact:other` 💬1
- [#143244](https://github.com/openclaw/openclaw/issues/143244) tasks.cancel aborts visible child but reports completed_during_cancel and completed task `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#143007](https://github.com/openclaw/openclaw/issues/143007) Feature: GPT Image 2.5 through OpenAI and fal `enhancement` `maintainer` `P2` `impact:auth-provider` 💬1
- [#143242](https://github.com/openclaw/openclaw/issues/143242) Runtime-only event turns append per-turn bytes into the submitted system prompt (prompt-cache churn) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#143241](https://github.com/openclaw/openclaw/issues/143241) [Feature]: Add bounded batch API-key import for auth profiles `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143225](https://github.com/openclaw/openclaw/issues/143225) compaction.midTurnPrecheck uses hardcoded 20k token budget, ignores configured contextWindow, can permanently block sessions `P2` `impact:session-state` `impact:message-loss` 💬1
- [#142821](https://github.com/openclaw/openclaw/issues/142821) [Bug]: Default-on model-visible transcript redaction poisons replayed agent context (masks propagate into commands, files, replies) `bug` `bug:behavior` `impact:session-state` `impact:data-loss` 💬1
- [#143233](https://github.com/openclaw/openclaw/issues/143233) Force gateway restart (SIGUSR1 / restartIntent.force) drains in-flight subagent runs at 0ms — kills healthy runs + orphans status=running records `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142841](https://github.com/openclaw/openclaw/issues/142841) Scheduled script exec succeeds but process.poll loses tool authority on 2026.9.3 `P1` `impact:security` 💬1
- [#143214](https://github.com/openclaw/openclaw/issues/143214) [Bug]: google-vertex provider can't serve both Gemini 2.5 (regional) and Gemini 3.x (global) models at once `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#143206](https://github.com/openclaw/openclaw/issues/143206) Bug: Dreaming run with failed and pending narratives is recorded as OK without retry `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143200](https://github.com/openclaw/openclaw/issues/143200) [Bug]: doctor --fix (via update repair) writes a RELATIVE path into the agent database registry; downstream tooling expecting absolute paths breaks `P3` 💬1
- [#143170](https://github.com/openclaw/openclaw/issues/143170) feat(ci): expose publication observations in FRV status `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#143187](https://github.com/openclaw/openclaw/issues/143187) [Bug]: Codex stale cleanup can clear a successor physical-client binding `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#143185](https://github.com/openclaw/openclaw/issues/143185) Control UI 2026.9.3: assistant reply rendered twice (streamed blocks + turnRecap) despite a single stored transcript record `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#143184](https://github.com/openclaw/openclaw/issues/143184) [discord plugin] Support ignoreBroadcastMentions option (@everyone / @here) `P3` `impact:other` 💬1
- [#143180](https://github.com/openclaw/openclaw/issues/143180) [Bug]: Tool Search Catalog silently strips tool-call arguments for local Ollama models (2026.9.3) `bug` `regression` `P1` `clawsweeper:needs-info` 💬1
- [#143165](https://github.com/openclaw/openclaw/issues/143165) Consolidate repeated agent-turn execution test defaults `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#143073](https://github.com/openclaw/openclaw/issues/143073) [Bug]: fleet stops and force-removes containers it did not verify `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#142868](https://github.com/openclaw/openclaw/issues/142868) Native Git attribution disappears from replayed user prompts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#143145](https://github.com/openclaw/openclaw/issues/143145) Update failure: post-update-plugins (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#143144](https://github.com/openclaw/openclaw/issues/143144) [9.3-rework] Claim-expiry fb3854a7 onto rewritten sqlite-store (eb0ce23a) 💬1
- [#143143](https://github.com/openclaw/openclaw/issues/143143) [9.3-rework] Split-and-retry oversized workboard comments (9cfd6ba9) 💬1
- [#143142](https://github.com/openclaw/openclaw/issues/143142) [9.3-rework] Comment cap 2000->4096 (read+write paths) 💬1
- [#143135](https://github.com/openclaw/openclaw/issues/143135) [Bug]: Telegram exec approval buttons are silently dropped under dmPolicy "disabled", and the discarded callback is recorded as completed `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#143131](https://github.com/openclaw/openclaw/issues/143131) [Bug]: Gateway boot deletes `gateway.auth` from openclaw.json without migrating the token, invalidating shared-gateway-issued operator tokens `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#143132](https://github.com/openclaw/openclaw/issues/143132) Public migration-only entrypoint for shared-state SQLite `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143118](https://github.com/openclaw/openclaw/issues/143118) Consolidate repeated status input fixtures `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#143126](https://github.com/openclaw/openclaw/issues/143126) [Bug]: Discord's five-minute ingress deadline repeatedly cancels Codex host-transcript compaction before the agent can reply `bug` `bug:behavior` `P1` `impact:message-loss` 💬1
- [#143121](https://github.com/openclaw/openclaw/issues/143121) [Bug] disabled_by_model_override 在自动降级后触发 `P2` `impact:session-state` `impact:auth-provider` 💬1
- [#143120](https://github.com/openclaw/openclaw/issues/143120) [Bug]: Codex compaction selects a different client and fails with an active-writer error `bug` `bug:behavior` `P1` `impact:session-state` 💬1
- [#143119](https://github.com/openclaw/openclaw/issues/143119) [Bug]: Successful nested sessions_yield immediately persists run_failed while child is still running `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#143114](https://github.com/openclaw/openclaw/issues/143114) [Bug]: Codex harness blocks native compaction for host-isolated sessions `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#143110](https://github.com/openclaw/openclaw/issues/143110) WSL2: gateway/user systemd instance restarts repeatedly under short-lived wsl.exe sessions — stable deployment guidance? `P2` `impact:crash-loop` 💬1
- [#143106](https://github.com/openclaw/openclaw/issues/143106) [Bug]: claude-cli backend writes each turn twice, streamed text parts plus a consolidated final record `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#142924](https://github.com/openclaw/openclaw/issues/142924) fix(ci): preserve root dispatch intent after lost responses `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#143101](https://github.com/openclaw/openclaw/issues/143101) Update failure: unexpected-error (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#143093](https://github.com/openclaw/openclaw/issues/143093) Update failure: unexpected-error (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#143078](https://github.com/openclaw/openclaw/issues/143078) Heartbeat turns repeatedly post duplicate/fallback messages every cycle since 9.x (regression from 8.1) `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#143070](https://github.com/openclaw/openclaw/issues/143070) Update failure: doctor-failed (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#143050](https://github.com/openclaw/openclaw/issues/143050) Chat-docked browser panel sends no Authorization header on device-token sessions (Screenshot fetch failed 401) `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#143011](https://github.com/openclaw/openclaw/issues/143011) refactor(qa-lab): consolidate YAML validation diagnostics `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#143044](https://github.com/openclaw/openclaw/issues/143044) [Feature]: Simplify Android chat composer and unify attachment picker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142747](https://github.com/openclaw/openclaw/issues/142747) Feature: standalone dictation add-on (universal OpenAI-compatible STT) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:auth-provider` 💬1
- [#143043](https://github.com/openclaw/openclaw/issues/143043) Regression in v2026.9.3: Workboard tab renders empty / broken because plugin adds `controlUi` block while main Control UI bundle still ships overlapping Workboard widgets `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#143028](https://github.com/openclaw/openclaw/issues/143028) [Regression]: Discord tool/status reaction chain becomes eyes-only after 2026.9.3 (request opt-in restoration) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143024](https://github.com/openclaw/openclaw/issues/143024) [Feature]: iOS native browser handoff flow `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#143023](https://github.com/openclaw/openclaw/issues/143023) [Feature]: Android native browser handoff flow `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#143008](https://github.com/openclaw/openclaw/issues/143008) Update failure: verifying (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#142998](https://github.com/openclaw/openclaw/issues/142998) Regression in v2026.9.3: `channels.<channel>.tts.auto` no longer triggers chat-reply TTS `P2` `impact:other` 💬1
- [#142987](https://github.com/openclaw/openclaw/issues/142987) [Bug]: Gateway is hard-killed when it spawns the llama.cpp local service (Windows) `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#142988](https://github.com/openclaw/openclaw/issues/142988) [Feature]: Support paste image from clipboard in desktop client `enhancement` `P3` `impact:ux-friction` 💬1
- [#142983](https://github.com/openclaw/openclaw/issues/142983) Failed deliveries are pruned on the retention policy written for successful ones `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142977](https://github.com/openclaw/openclaw/issues/142977) Telegram ingress: empty-body wrapper + duplicate delivery make agent announce stickers that were never sent `P2` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#142929](https://github.com/openclaw/openclaw/issues/142929) fix(ci): frozen source read failures silently select fallback contracts `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#142973](https://github.com/openclaw/openclaw/issues/142973) [Feature]: Bot mode: teach workflows by demonstration `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#142974](https://github.com/openclaw/openclaw/issues/142974) [Feature]: Bot mode: Claw discovery, distribution, and onboarding `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#142970](https://github.com/openclaw/openclaw/issues/142970) [Feature]: Bot mode: sidebar toggle and one Home conversation `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#142971](https://github.com/openclaw/openclaw/issues/142971) [Feature]: Bot mode: Reef-backed bot collaboration `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#142969](https://github.com/openclaw/openclaw/issues/142969) [Feature]: Bot mode: umbrella PRD `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#142883](https://github.com/openclaw/openclaw/issues/142883) [Bug]: Agents settings opens Files instead of Overview `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#142956](https://github.com/openclaw/openclaw/issues/142956) [Bug] WebChat freezes on send: "Cannot set properties of null (setting 'data')" in lit-runtime — assistant reply never renders until manual page refresh `P1` `impact:ux-friction` 💬1
- [#142952](https://github.com/openclaw/openclaw/issues/142952) [Feature]: Open New Session with a keyboard shortcut `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142923](https://github.com/openclaw/openclaw/issues/142923) [Bug]: Packaged QA scenario CLI commands ignore the selected candidate `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#142881](https://github.com/openclaw/openclaw/issues/142881) [Feature]: Keep the command palette background readable without blur `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#142921](https://github.com/openclaw/openclaw/issues/142921) fix(ci): frozen July bundle validation selects the wrong client `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#142940](https://github.com/openclaw/openclaw/issues/142940) [Bug]: openclaw gateway install` fails with `SERVICE_DEFINITION_UNKNOWN` on systemd 239 (busctl `--json=short` unsupported) `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#142942](https://github.com/openclaw/openclaw/issues/142942) Update failure: requested (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#142939](https://github.com/openclaw/openclaw/issues/142939) Assistant replies rendered twice: live-streamed text segments + duplicate concatenated rollup `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#142905](https://github.com/openclaw/openclaw/issues/142905) FRV transition rejection omits collector attempts and plan identity `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#142936](https://github.com/openclaw/openclaw/issues/142936) Feature request: automatic model fallback when a provider hits its rate limit `P3` `impact:auth-provider` 💬1
- [#142937](https://github.com/openclaw/openclaw/issues/142937) fix(ci): retain postpublish verification progress on failure `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#142922](https://github.com/openclaw/openclaw/issues/142922) Bug: system-agent delegation loses active run authority `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#142920](https://github.com/openclaw/openclaw/issues/142920) [Bug]: RSS memory-pressure thresholds are derived from the V8 heap limit and are not configurable — permanent critical on a healthy gateway `P2` `impact:other` 💬1
- [#142918](https://github.com/openclaw/openclaw/issues/142918) Feature: searxng plugin should support authenticated instances (apiKey / Bearer / custom headers) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142914](https://github.com/openclaw/openclaw/issues/142914) [Bug]: Default-mode session admits compact_only requests without observed compaction; context estimate diverges from provider usage (2026.9.3) `P2` `impact:session-state` 💬1
- [#142895](https://github.com/openclaw/openclaw/issues/142895) [Bug]: Feishu non-chat tools disappear because registrations inherit plugin-wide tool contracts `bug` `bug:behavior` `P1` `impact:other` 💬1
- [#142893](https://github.com/openclaw/openclaw/issues/142893) Update failure: managed-service-handoff-unavailable (2026.9.3) `P0` `impact:ux-release-blocker` 💬1
- [#142892](https://github.com/openclaw/openclaw/issues/142892) [Bug] skill_workshop update action: support_files[].content validator fails on long strings with CJK characters `P2` `impact:ux-friction` 💬1
- [#142890](https://github.com/openclaw/openclaw/issues/142890) [Bug] skill_workshop update action: support_files[].content validator fails on long strings with CJK characters `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#142879](https://github.com/openclaw/openclaw/issues/142879) [Feature]: Background file drops create prepared sessions for later `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#142880](https://github.com/openclaw/openclaw/issues/142880) [Feature]: Cmd/Ctrl+K captures prompts and files into background sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142872](https://github.com/openclaw/openclaw/issues/142872) [Bug] opencode-go GLM models (glm-5.1, glm-5.3-flash) silently dropped: Unknown model `P1` `impact:auth-provider` 💬1
- [#142870](https://github.com/openclaw/openclaw/issues/142870) Durable context-engine commits lose the resolved model window and budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#142867](https://github.com/openclaw/openclaw/issues/142867) [Bug]: secrets egress proxy does not set GIT_SSL_CAINFO, breaking HTTPS git operations `P2` `clawsweeper:source-repro` `impact:security` `issue-rating: 🦞 diamond lobster` 💬1
- [#142862](https://github.com/openclaw/openclaw/issues/142862) [Feature]: UI-complete installed plugin management (PRD) `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#142861](https://github.com/openclaw/openclaw/issues/142861) [Feature]: Separately opt in to runtime UTC-offset buckets `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#142854](https://github.com/openclaw/openclaw/issues/142854) Bug: sessions_history model binding requires mutually exclusive optional fields `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#142850](https://github.com/openclaw/openclaw/issues/142850) fix(subagents): revised completion serves stale terminalReply; updates carry no ordering so late refreshes regress newer results `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#142831](https://github.com/openclaw/openclaw/issues/142831) [Bug]: Discord ignores steer mode for unmentioned corrections during an active task `P2` `impact:session-state` 💬1
- [#142828](https://github.com/openclaw/openclaw/issues/142828) [Bug]: Slack native progress card stays stale after message_not_in_streaming_state `P2` `impact:ux-friction` 💬1
- [#142826](https://github.com/openclaw/openclaw/issues/142826) [Bug] openclaw mcp doctor --probe leaks stdio server child processes under a live gateway `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#142825](https://github.com/openclaw/openclaw/issues/142825) Fix Docker ACPX selected-plugin runtime dependencies `P3` 💬1
- [#142813](https://github.com/openclaw/openclaw/issues/142813) [Bug]: Inbound message arriving mid-turn silently drops the in-flight turn's reply and stalls the queue for minutes (WhatsApp, 2026.6.34) `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#142800](https://github.com/openclaw/openclaw/issues/142800) [Bug]: auth-profile failure state never recovers after one warm-worker timeout — stale failure persists past the fix until gateway restart `impact:auth-provider` `P0` `impact:ux-release-blocker` 💬1
- [#142793](https://github.com/openclaw/openclaw/issues/142793) opencode-go provider: `Unknown model` at runtime for models that list fine in `openclaw models list` `P1` `impact:auth-provider` 💬1
- [#142792](https://github.com/openclaw/openclaw/issues/142792) Update failure: plugin-target-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#142789](https://github.com/openclaw/openclaw/issues/142789) [Bug] Control UI "Toggle terminal" fails with "no explicit owner" in multi-agent fleets (ownership: explicit) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#142788](https://github.com/openclaw/openclaw/issues/142788) Session SQLite migration recovery report (session-sqlite-1788915325987-6485471a) `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#142772](https://github.com/openclaw/openclaw/issues/142772) [Bug]: Slack Agent View “is working” status can remain after a completed turn until the desktop client restarts `bug` `bug:behavior` `P2` `clawsweeper:needs-info` 💬1
- [#142769](https://github.com/openclaw/openclaw/issues/142769) [Feature]: Opencode difference between go and zen `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#142758](https://github.com/openclaw/openclaw/issues/142758) Feature request: make skill-collection review limit configurable (currently hardcoded 240 KB / 200 skills) `P2` `impact:other` 💬1
- [#142755](https://github.com/openclaw/openclaw/issues/142755) [Bug]: Feishu workspace tools absent even after removing feishu_chat from manifest AND persisted installed index (follow-up to #140971) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#142754](https://github.com/openclaw/openclaw/issues/142754) Runtime context delivered as raw <<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>> text in a synthetic user turn — visible to the agent instead of staying in the structured carrier `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#143581](https://github.com/openclaw/openclaw/issues/143581) Signal inbound message stuck in 'attempt disposed before transcript write' spool retry loop for ~23h — replies delayed hours until gateway restart (2026.9.3)
- [#143575](https://github.com/openclaw/openclaw/issues/143575) Control UI: dashboard side panel needs one-click expand and restore `maintainer`
- [#143569](https://github.com/openclaw/openclaw/issues/143569) [Bug]: Slack ingress lane is per-channel, so one un-adoptable thread session delays every other thread in the channel for up to 33 minutes `bug` `bug:crash`
- [#143224](https://github.com/openclaw/openclaw/issues/143224) Repair Codex auth-refresh fallback classification for configured provider failover
- [#142771](https://github.com/openclaw/openclaw/issues/142771) 2026.9.3: failed update can leave forward-migrated Workshop state on 9.2 rollback; WebChat ACP binding also lacks conversationId

#### 🔒 Closed Issues
- [#135111](https://github.com/openclaw/openclaw/issues/135111) [Bug]: Intermittent "Provider completed tool call with malformed JSON arguments" on v2026.8.1 (claude-sonnet-5), not tied to specific file/tool
- [#110872](https://github.com/openclaw/openclaw/issues/110872) Recipient-addressed outbound sends: resolve people through verified routes, not raw platform ids
- [#96475](https://github.com/openclaw/openclaw/issues/96475) Feature: tools.exec.strictShellMetachars knob to reject shell-chained commands by default
- [#133692](https://github.com/openclaw/openclaw/issues/133692) [Bug]: Isolated cron rejects a superseded prepared runtime generation before dispatch
- [#140971](https://github.com/openclaw/openclaw/issues/140971) [Bug]: All Feishu plugin tools are silently dropped in message-driven runs: `feishu_chat` host restriction blocks the entire plugin entry (regression between 2026.7.1-2 and 2026.8.1)
- [#128076](https://github.com/openclaw/openclaw/issues/128076) Credential-safety contract from #120728 cannot be overridden by the operator and has no opt-out
- [#141617](https://github.com/openclaw/openclaw/issues/141617) [Bug]: 2026.9.2 npm update remains stuck at requested/running after supported repair
- [#100537](https://github.com/openclaw/openclaw/issues/100537) [Bug]: active-memory embedded run cannot resolve Lossless Claw lcm_* tools despite runtime plugin inspect showing them registered
- [#124555](https://github.com/openclaw/openclaw/issues/124555) Sandboxed Codex agents get a skills catalog whose locations do not exist inside the container
- [#140821](https://github.com/openclaw/openclaw/issues/140821) [Bug]: Gateway restart hangs after updating to 2026.9.2
- [#135282](https://github.com/openclaw/openclaw/issues/135282) Isolated automation records success after sessions_yield, then requester can become killed
- [#142737](https://github.com/openclaw/openclaw/issues/142737) Gateway hangs and retains cron ticks when reservations make no progress
- [#143267](https://github.com/openclaw/openclaw/issues/143267) [Bug]: completion installer duplicates portable managed Bash source lines
- [#141123](https://github.com/openclaw/openclaw/issues/141123) Gateway exits (status=1) on a transient DNS failure: unhandled rejection, because the rejection handler is installed after the gateway fast path returns
- [#141279](https://github.com/openclaw/openclaw/issues/141279) [Bug]: Windows: os.devNull in GIT_CONFIG_GLOBAL/SYSTEM still breaks openclaw update and 5 other paths after #140803
- [#138779](https://github.com/openclaw/openclaw/issues/138779) [Bug]: WhatsApp prepends the raw responsePrefix template ({provider}/{model}) to inbound message bodies
- [#89474](https://github.com/openclaw/openclaw/issues/89474) Codex Runtime tool-loop usage appears undercounted: toolUse messages record usage=0 while only high-level run completions have nonzero usage
- [#75203](https://github.com/openclaw/openclaw/issues/75203) [Bug]: Control UI webchat routes user input into :heartbeat-suffixed session when main session is pruned
- [#143111](https://github.com/openclaw/openclaw/issues/143111) Installing a clawhub plugin: requires-capability-consent error sends users to an enable step that fails with 'Plugin not found'
- [#142489](https://github.com/openclaw/openclaw/issues/142489) [Bug]: Slack — `statusReactions.enabled: false` also suppresses `messages.ackReaction` when `groupChat.visibleReplies: "message_tool"`
- [#141787](https://github.com/openclaw/openclaw/issues/141787) [Bug]: Dreaming on an untouched workspace creates memory/ and marks it configured, so BOOTSTRAP.md is spent before the first conversation
- [#141054](https://github.com/openclaw/openclaw/issues/141054) Discord: presence cache is never seeded from GUILD_CREATE initial presences — member-info returns no status/activities until each user's first PRESENCE_UPDATE after (re)connect
- [#141042](https://github.com/openclaw/openclaw/issues/141042) [Bug]: backup create aborts whole archive on ENOENT lstat of transient sqlite -shm/-wal sidecar (third-party dbs under agent codex-home)
- [#143177](https://github.com/openclaw/openclaw/issues/143177) [Bug]: Deleting an adopted native Codex or Claude session only removes the OpenClaw wrapper
- [#140246](https://github.com/openclaw/openclaw/issues/140246) [Bug]: Skill Workshop guardrail incorrectly blocks editing repository-owned skill source
- [#141066](https://github.com/openclaw/openclaw/issues/141066) [Bug]: device.status battery 'level' is an undocumented 0.0–1.0 fraction — full charge reads as '1%'
- [#143448](https://github.com/openclaw/openclaw/issues/143448) [Chore] Cleanup legacy Notion MCP definitions from openclaw.json and mcporter config
- [#143438](https://github.com/openclaw/openclaw/issues/143438) refactor(hooks): consolidate source precedence policy
- [#143428](https://github.com/openclaw/openclaw/issues/143428) refactor(wizard): share argument forwarding for navigation prompts
- [#142429](https://github.com/openclaw/openclaw/issues/142429) [Bug]: Models settings shows global defaults beneath an agent selector, obscuring per-agent overrides
- [#143388](https://github.com/openclaw/openclaw/issues/143388) [Bug]: Google Meet audio survives failed Chrome provider startup
- [#142483](https://github.com/openclaw/openclaw/issues/142483) Voice agent consult fails when the requester session is model-selection-locked, even though it delegates to an independent agent
- [#141807](https://github.com/openclaw/openclaw/issues/141807) [Bug]: sessions delete leaves the archived transcript in the memory index until memory forget
- [#142848](https://github.com/openclaw/openclaw/issues/142848) [Bug]: AGENTS.md policy digest silently drops non-Latin policy lines — \b cannot match CJK
- [#142010](https://github.com/openclaw/openclaw/issues/142010) [Bug]: Codex runtime: secrets-store guidance makes the agent refuse the workspace's own credential files
- [#143294](https://github.com/openclaw/openclaw/issues/143294) Bug: Slack DM `allowFrom` incorrectly gates group chat triggers when `groupPolicy: "open"`
- [#140607](https://github.com/openclaw/openclaw/issues/140607) [Bug]: 2026.9.2 Anthropic cache_control can attach to relocating runtime-context carrier (opt-out removed in #136782)
- [#143094](https://github.com/openclaw/openclaw/issues/143094) [Bug]: 2026.9.3 Upgrade - Skill Workshop legacy proposal migration hard-fails with "owning agent could not be inferred", blocking doctor / update
- [#143279](https://github.com/openclaw/openclaw/issues/143279) Requester settle-wake give-up path cannot give up: failed subagent run warns every 60s forever
- [#143280](https://github.com/openclaw/openclaw/issues/143280) session-sqlite "SQLite session write failed" discards the error cause
- [#143001](https://github.com/openclaw/openclaw/issues/143001) [Bug]: update deferral fails on schema 15->16 - "no such column: owner_agent_id" while creating idx_skill_workshop_collection_reviews_owner_time before the column exists
- [#143265](https://github.com/openclaw/openclaw/issues/143265) [Bug]: Discord ignores configured steer mode for ordinary corrections despite requireMention=false
- [#143211](https://github.com/openclaw/openclaw/issues/143211) [Bug]: Conversation-history context block rendered into visible inbound message body (Telegram) — 2026.9.1 regression
- [#143066](https://github.com/openclaw/openclaw/issues/143066) [Bug]: Read-only channel commands accept blank account selectors
- [#143083](https://github.com/openclaw/openclaw/issues/143083) [Bug]: Message CLI treats blank account selectors as omission
- [#142878](https://github.com/openclaw/openclaw/issues/142878) [Bug]: Codex harness ignores configured project_doc_max_bytes above 128 KiB
- [#141701](https://github.com/openclaw/openclaw/issues/141701) [Bug]: Gateway crash-loops on bind=lan + --tailscale serve; shutdown hangs ignoring SIGTERM; "No serve config" from tailscale CLI misleads
- [#142832](https://github.com/openclaw/openclaw/issues/142832) [Bug]: Discord voice notes arrive without their words in ambient channels
- [#142901](https://github.com/openclaw/openclaw/issues/142901) [Bug]: Docker image ships Workboard Control UI bundle as 0700, breaking arbitrary-UID runtimes
- [#142208](https://github.com/openclaw/openclaw/issues/142208) [Bug]: Node preflight failure hint recommends versions that do not satisfy the printed engine range
- [#142794](https://github.com/openclaw/openclaw/issues/142794) [Bug]: visible sessions_spawn drops runTimeoutSeconds before runtime execution
- [#142524](https://github.com/openclaw/openclaw/issues/142524) [Bug]: Kimi Coding usage-limit 403 is reported as an auth failure ("Re-authenticate the provider") and latches the provider off
- [#142479](https://github.com/openclaw/openclaw/issues/142479) [Bug]: Active Memory skips model recall when optional trigger lookup times out
- [#143188](https://github.com/openclaw/openclaw/issues/143188) [Bug]: Memory flush omits the resolved runtime context budget
- [#143526](https://github.com/openclaw/openclaw/issues/143526) Live tool result is emptied to content: "" when session tool-output total is at/over the 256k aggregate budget
- [#143478](https://github.com/openclaw/openclaw/issues/143478) [Bug]: exact continuation candidate fails static formatting gate
- [#143480](https://github.com/openclaw/openclaw/issues/143480) [Bug]: delayed continuation delegate test intermittently exceeds 120-second timeout
- [#143423](https://github.com/openclaw/openclaw/issues/143423) [Feature Request] Native Gmail MCP integration (replace mcporter usage)
- [#143173](https://github.com/openclaw/openclaw/issues/143173) Legacy auth-profiles.json presence blocks ALL provider auth for an agent, not just the affected provider
- [#143077](https://github.com/openclaw/openclaw/issues/143077) Codex final-answer recovery fails in long-running conversations
- [#143406](https://github.com/openclaw/openclaw/issues/143406) Byte-fuse thread rotation leaves stale activeWriterRunId; next turn's compaction is refused ("thread … already has an active writer") and surfaces "Context is too large" at 62% of budget
- [#143364](https://github.com/openclaw/openclaw/issues/143364) Claude subscription rate-limit (429) never escalates to configured model fallback — misclassified as "short window", retried 9x on the same model instead
- [#143348](https://github.com/openclaw/openclaw/issues/143348) Android node approval has duplicate state representations
- [#140265](https://github.com/openclaw/openclaw/issues/140265) Telegram: bot text_mention (display-name tap) in groups is not treated as a mention
- [#142805](https://github.com/openclaw/openclaw/issues/142805) [Bug]: Android chat leaves blank gaps where tool activity should appear
- [#143328](https://github.com/openclaw/openclaw/issues/143328) Bug: session-memory hook saves unrelated old session on gateway startup
- [#143186](https://github.com/openclaw/openclaw/issues/143186) Consolidate duplicated sandbox filesystem parameter contracts
- [#143210](https://github.com/openclaw/openclaw/issues/143210) [Windows] openclaw update aborts with managed-service-preflight because the Scheduled Task runtime probe exceeds its hard-coded 5s timeout
- [#143252](https://github.com/openclaw/openclaw/issues/143252) Standalone session resets wait for thinking catalog discovery
- [#143204](https://github.com/openclaw/openclaw/issues/143204) Managed update restore: boot regrade overwrites verified versionMatch, report claims version mismatch on healthy restored Gateway
- [#142584](https://github.com/openclaw/openclaw/issues/142584) [Bug]: Session SQLite migration rejects hard-linked artifacts without identifying aliases or providing safe recovery guidance
- [#143245](https://github.com/openclaw/openclaw/issues/143245) "prepared model runtime plugin generation was superseded" after upgrade — doctor --fix does not clear
- [#143007](https://github.com/openclaw/openclaw/issues/143007) Feature: GPT Image 2.5 through OpenAI and fal
- [#142582](https://github.com/openclaw/openclaw/issues/142582) [Regression]: 2026.9.3 Doctor still cannot persist agents.ownership for a legacy multi-agent roster
- [#143225](https://github.com/openclaw/openclaw/issues/143225) compaction.midTurnPrecheck uses hardcoded 20k token budget, ignores configured contextWindow, can permanently block sessions
- [#137624](https://github.com/openclaw/openclaw/issues/137624) [Regression]: 2026.9.1 plugins update --all leaves official diagnostics plugin pinned to 2026.8.2
- [#143200](https://github.com/openclaw/openclaw/issues/143200) [Bug]: doctor --fix (via update repair) writes a RELATIVE path into the agent database registry; downstream tooling expecting absolute paths breaks
- [#143170](https://github.com/openclaw/openclaw/issues/143170) feat(ci): expose publication observations in FRV status
- [#143184](https://github.com/openclaw/openclaw/issues/143184) [discord plugin] Support ignoreBroadcastMentions option (@everyone / @here)
- [#143165](https://github.com/openclaw/openclaw/issues/143165) Consolidate repeated agent-turn execution test defaults
- [#142868](https://github.com/openclaw/openclaw/issues/142868) Native Git attribution disappears from replayed user prompts
- [#143145](https://github.com/openclaw/openclaw/issues/143145) Update failure: post-update-plugins (2026.9.3)
- [#143144](https://github.com/openclaw/openclaw/issues/143144) [9.3-rework] Claim-expiry fb3854a7 onto rewritten sqlite-store (eb0ce23a)
- [#143143](https://github.com/openclaw/openclaw/issues/143143) [9.3-rework] Split-and-retry oversized workboard comments (9cfd6ba9)
- [#143142](https://github.com/openclaw/openclaw/issues/143142) [9.3-rework] Comment cap 2000->4096 (read+write paths)
- [#143118](https://github.com/openclaw/openclaw/issues/143118) Consolidate repeated status input fixtures
- [#143126](https://github.com/openclaw/openclaw/issues/143126) [Bug]: Discord's five-minute ingress deadline repeatedly cancels Codex host-transcript compaction before the agent can reply
- [#143121](https://github.com/openclaw/openclaw/issues/143121) [Bug] disabled_by_model_override 在自动降级后触发
- [#143120](https://github.com/openclaw/openclaw/issues/143120) [Bug]: Codex compaction selects a different client and fails with an active-writer error
- [#143110](https://github.com/openclaw/openclaw/issues/143110) WSL2: gateway/user systemd instance restarts repeatedly under short-lived wsl.exe sessions — stable deployment guidance?
- [#143106](https://github.com/openclaw/openclaw/issues/143106) [Bug]: claude-cli backend writes each turn twice, streamed text parts plus a consolidated final record
- [#142924](https://github.com/openclaw/openclaw/issues/142924) fix(ci): preserve root dispatch intent after lost responses
- [#143101](https://github.com/openclaw/openclaw/issues/143101) Update failure: unexpected-error (2026.9.3)
- [#143093](https://github.com/openclaw/openclaw/issues/143093) Update failure: unexpected-error (2026.9.3)
- [#140918](https://github.com/openclaw/openclaw/issues/140918) OpenAI Responses proxy: missing session affinity header causes repeated prompt-cache misses
- [#143011](https://github.com/openclaw/openclaw/issues/143011) refactor(qa-lab): consolidate YAML validation diagnostics
- [#142998](https://github.com/openclaw/openclaw/issues/142998) Regression in v2026.9.3: `channels.<channel>.tts.auto` no longer triggers chat-reply TTS
- [#142988](https://github.com/openclaw/openclaw/issues/142988) [Feature]: Support paste image from clipboard in desktop client
- [#142929](https://github.com/openclaw/openclaw/issues/142929) fix(ci): frozen source read failures silently select fallback contracts
- [#142883](https://github.com/openclaw/openclaw/issues/142883) [Bug]: Agents settings opens Files instead of Overview
- [#142956](https://github.com/openclaw/openclaw/issues/142956) [Bug] WebChat freezes on send: "Cannot set properties of null (setting 'data')" in lit-runtime — assistant reply never renders until manual page refresh
- [#121934](https://github.com/openclaw/openclaw/issues/121934) [Bug]: Desktop updater results disappear after dashboard navigation
- [#142923](https://github.com/openclaw/openclaw/issues/142923) [Bug]: Packaged QA scenario CLI commands ignore the selected candidate
- [#142881](https://github.com/openclaw/openclaw/issues/142881) [Feature]: Keep the command palette background readable without blur
- [#142921](https://github.com/openclaw/openclaw/issues/142921) fix(ci): frozen July bundle validation selects the wrong client
- [#137539](https://github.com/openclaw/openclaw/issues/137539) Cloud follow-up is interrupted while workspace reconciliation is healthy
- [#142939](https://github.com/openclaw/openclaw/issues/142939) Assistant replies rendered twice: live-streamed text segments + duplicate concatenated rollup
- [#142905](https://github.com/openclaw/openclaw/issues/142905) FRV transition rejection omits collector attempts and plan identity
- [#142936](https://github.com/openclaw/openclaw/issues/142936) Feature request: automatic model fallback when a provider hits its rate limit
- [#142920](https://github.com/openclaw/openclaw/issues/142920) [Bug]: RSS memory-pressure thresholds are derived from the V8 heap limit and are not configurable — permanent critical on a healthy gateway
- [#142914](https://github.com/openclaw/openclaw/issues/142914) [Bug]: Default-mode session admits compact_only requests without observed compaction; context estimate diverges from provider usage (2026.9.3)
- [#142895](https://github.com/openclaw/openclaw/issues/142895) [Bug]: Feishu non-chat tools disappear because registrations inherit plugin-wide tool contracts
- [#142893](https://github.com/openclaw/openclaw/issues/142893) Update failure: managed-service-handoff-unavailable (2026.9.3)
- [#142892](https://github.com/openclaw/openclaw/issues/142892) [Bug] skill_workshop update action: support_files[].content validator fails on long strings with CJK characters
- [#142704](https://github.com/openclaw/openclaw/issues/142704) Control UI: consolidate private route bridge restoration
- [#142872](https://github.com/openclaw/openclaw/issues/142872) [Bug] opencode-go GLM models (glm-5.1, glm-5.3-flash) silently dropped: Unknown model
- [#142831](https://github.com/openclaw/openclaw/issues/142831) [Bug]: Discord ignores steer mode for unmentioned corrections during an active task
- [#142688](https://github.com/openclaw/openclaw/issues/142688) [Bug]: User avatar aligns with attachments instead of the text bubble
- [#142828](https://github.com/openclaw/openclaw/issues/142828) [Bug]: Slack native progress card stays stale after message_not_in_streaming_state
- [#142825](https://github.com/openclaw/openclaw/issues/142825) Fix Docker ACPX selected-plugin runtime dependencies
- [#131944](https://github.com/openclaw/openclaw/issues/131944) fix(cli): surface model auth refresh failures
- [#142662](https://github.com/openclaw/openclaw/issues/142662) User file attachments render inside the text bubble
- [#142593](https://github.com/openclaw/openclaw/issues/142593) fix: user video attachments appear as file cards inside chat bubbles
- [#142800](https://github.com/openclaw/openclaw/issues/142800) [Bug]: auth-profile failure state never recovers after one warm-worker timeout — stale failure persists past the fix until gateway restart
- [#142793](https://github.com/openclaw/openclaw/issues/142793) opencode-go provider: `Unknown model` at runtime for models that list fine in `openclaw models list`
- [#142792](https://github.com/openclaw/openclaw/issues/142792) Update failure: plugin-target-unavailable (2026.9.3)
- [#139781](https://github.com/openclaw/openclaw/issues/139781) Agent Automations panel has no link to edit a job
- [#138277](https://github.com/openclaw/openclaw/issues/138277) Chat transcript avatars use a colored border that competes with the content
- [#142758](https://github.com/openclaw/openclaw/issues/142758) Feature request: make skill-collection review limit configurable (currently hardcoded 240 KB / 200 skills)
- [#137190](https://github.com/openclaw/openclaw/issues/137190) [Bug]: Localize schema-derived Control UI field metadata
- [#143224](https://github.com/openclaw/openclaw/issues/143224) Repair Codex auth-refresh fallback classification for configured provider failover
- [#142771](https://github.com/openclaw/openclaw/issues/142771) 2026.9.3: failed update can leave forward-migrated Workshop state on 9.2 rollback; WebChat ACP binding also lacks conversationId

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 243,860 · **Open issues:** 41,277 · **Last push:** <1h ago

On September 10, 2026, there were no new releases for Hermes Agent. However, several significant issues were addressed through merged pull requests, including a fix to maintain opaque settings search under Glass and enhancements to session discovery that prevent the loss of queued prompts. Notably, composer status groups now collapse except for todos, improving UI clarity. Among the new issues, a critical bug regarding over-limit sessions becoming permanently uncompressible poses a potential risk, as it leads to discarded compression results when session rows are marked as ended, highlighting the need for a recovery path. Additionally, a bug affecting YouTube embeds with error 153 remains a top concern for users.

#### ✅ Merged PRs
- [#107004](https://github.com/NousResearch/hermes-agent/pull/107004) fix(desktop): keep settings search opaque under Glass
- [#106986](https://github.com/NousResearch/hermes-agent/pull/106986) fix(desktop): wait for session discovery without discarding queued prompts
- [#106992](https://github.com/NousResearch/hermes-agent/pull/106992) fix(desktop): collapse composer status groups except todos

#### 🐛 New Issues
- [#106459](https://github.com/NousResearch/hermes-agent/issues/106459) Pain cluster: over-limit sessions become permanently uncompressible — compression result is discarded when the session row is marked ended, /compress no-ops, no recovery path `type/bug` `comp/agent` `P1` `sweeper:risk-session-state` 💬4
- [#106596](https://github.com/NousResearch/hermes-agent/issues/106596) [Bug]: YouTube embeds fail with error 153 in desktop app (Referer fix wired to unused session partition) `type/bug` `P2` `comp/desktop` 💬4
- [#106192](https://github.com/NousResearch/hermes-agent/issues/106192) [Feature]: Gate new ty invalid-method-override diagnostics on PRs `type/feature` `P3` `sweeper:risk-automation` 💬3
- [#106935](https://github.com/NousResearch/hermes-agent/issues/106935) Desktop over SSH: the isolated backend's idle-exit (#101626) retires a sibling backend the app still owns, and the app answers by restarting everything, killing live turns `type/bug` `backend/ssh` `comp/cli` `P1` 💬2
- [#106968](https://github.com/NousResearch/hermes-agent/issues/106968) Show routed member alongside combo name in CLI + gateway footers `type/feature` `comp/agent` `comp/cli` `comp/gateway` 💬2
- [#106909](https://github.com/NousResearch/hermes-agent/issues/106909) Rootless Docker: iron-proxy binds to unreachable loopback on Linux `type/bug` `comp/cli` `backend/docker` `area/config` 💬2
- [#106994](https://github.com/NousResearch/hermes-agent/issues/106994) Worker-created children deadlock: recompute_ready promotes children only when all parents are done, but a parent that split work cannot complete until its children return `type/bug` `comp/cron` `P3` `sweeper:risk-automation` 💬1
- [#106972](https://github.com/NousResearch/hermes-agent/issues/106972) A2A: A2A_REPLY_TIMEOUT does not affect the orphan-task sweep (hardcoded 300s) — late replies get silently discarded `type/bug` `comp/plugins` `P3` 💬1
- [#106938](https://github.com/NousResearch/hermes-agent/issues/106938) kanban dispatch: a board pinned to another execution_host can only be dispatched by hand-editing shared profile config — no per-invocation or per-board override `type/feature` `comp/cron` `area/config` `P3` 💬1
- [#106919](https://github.com/NousResearch/hermes-agent/issues/106919) [Feature]: Discuss explicit opt-in for unattended memory consolidation `type/feature` `comp/agent` `tool/memory` `P3` 💬1
- [#106918](https://github.com/NousResearch/hermes-agent/issues/106918) [Feature]: Show the effective background memory approval policy in /memory `type/feature` `comp/cli` `comp/gateway` `tool/memory` 💬1
- [#106908](https://github.com/NousResearch/hermes-agent/issues/106908) Cron: support a future start_at for recurring jobs `duplicate` `type/feature` `comp/cron` `P3` 💬1
- [#106775](https://github.com/NousResearch/hermes-agent/issues/106775) Six high-severity dev-tree advisories now have fixes past the 14-day min-release-age gate `type/security` `P3` `dependencies` `comp/desktop` 💬1
- [#107000](https://github.com/NousResearch/hermes-agent/issues/107000) [Bug]: Windows desktop transcript flickers/re-renders on every keystroke — regression between v0.21.0 and v0.21.1 `type/bug` `P2` `comp/desktop` `platform/windows`
- [#107002](https://github.com/NousResearch/hermes-agent/issues/107002) Bug: Windows: hermes update completes successfully, but gateway relaunch verification fails (#48820) `type/bug` `comp/cli` `P2` `sweeper:risk-platform-windows`
- [#106993](https://github.com/NousResearch/hermes-agent/issues/106993) Kanban-dispatched workers inherit single_query_mode: deny, blocking execute_code on every dispatched card (no kanban-specific approval context) `type/bug` `comp/cron` `area/config` `P3`
- [#106983](https://github.com/NousResearch/hermes-agent/issues/106983) mcp_servers.<name>.allowed_tools is declared but never enforced `type/bug` `tool/mcp` `area/config` `P3`
- [#106984](https://github.com/NousResearch/hermes-agent/issues/106984) Stdio MCP subprocess environment drops http_proxy/https_proxy/no_proxy `type/bug` `tool/mcp` `area/config` `P3`
- [#106985](https://github.com/NousResearch/hermes-agent/issues/106985) Kanban dispatcher's auto_decompose tick blocks the entire dispatch cycle synchronously `type/bug` `comp/cron` `area/config` `P3`
- [#106987](https://github.com/NousResearch/hermes-agent/issues/106987) prompt.submit error 5072 leaves session running/inflight without an execution thread `type/bug` `comp/tui` `P2` `sweeper:risk-session-state`
- [#106974](https://github.com/NousResearch/hermes-agent/issues/106974) Profile delete still hits WinError 32 on state.db `type/bug` `comp/cli` `P2` `sweeper:risk-session-state`
- [#106960](https://github.com/NousResearch/hermes-agent/issues/106960) systemd dashboard is inventoried as a manual serve after hermes update `type/bug` `comp/cli` `P3` `comp/dashboard`
- [#106963](https://github.com/NousResearch/hermes-agent/issues/106963) gateway: evicting a reaped session does not interrupt the in-flight run (51 calls / 7.9M tokens after its result was dropped) `type/bug` `comp/gateway` `P1` `sweeper:risk-session-state`
- [#106930](https://github.com/NousResearch/hermes-agent/issues/106930) [Bug]: hermes doctor crashes with ValueError on unregistered browser.cloud_provider `type/bug` `comp/cli` `tool/browser` `P3`
- [#106932](https://github.com/NousResearch/hermes-agent/issues/106932) [Bug]: Windows gateway restart from non-interactive context hangs in input() then double-spawns two gateways `type/bug` `comp/cli` `comp/gateway` `P2`

#### 🔒 Closed Issues
- [#106184](https://github.com/NousResearch/hermes-agent/issues/106184) [Desktop UI Bug] Model provider list incomplete - only shows 5 of 10 providers
- [#106459](https://github.com/NousResearch/hermes-agent/issues/106459) Pain cluster: over-limit sessions become permanently uncompressible — compression result is discarded when the session row is marked ended, /compress no-ops, no recovery path
- [#98484](https://github.com/NousResearch/hermes-agent/issues/98484) [Bug]: Settings search bar is visually split when Glass translucency uses non-zero Tint

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,368 · **Open issues:** 7,787 · **Last push:** <1h ago

On September 10, 2026, vLLM released version 0.29.0, marking a significant milestone with 594 commits from 277 contributors, including 91 new contributors. This update makes Model Runner V2 the default across all models, introducing enhancements such as CUDA graph memory profiling for KV cache auto-sizing and batch-sharded sampling that significantly reduces per-step logits memory usage. Notable merged features included bug fixes for structured outputs and performance improvements linked to ROCm and LoRA adapters, showcasing ongoing commitment to refine model efficiency and user experience. However, the day also saw the emergence of several critical new issues, particularly a loading checkpoint error for GLM5.3-Flash in the latest release, which has garnered immediate attention from the community.

#### 🚀 New Releases
- [v0.29.0](https://github.com/vllm-project/vllm/releases/tag/v0.29.0) v0.29.0

#### ✅ Merged PRs
- [#56014](https://github.com/vllm-project/vllm/pull/56014) [XPU] update triton-xpu 3.8.0 shim layer
- [#54264](https://github.com/vllm-project/vllm/pull/54264) [Bugfix][Parser] Seed-OSS turn-boundary tokens + boundary-fallback tests
- [#56146](https://github.com/vllm-project/vllm/pull/56146) [Cohere] Bound remaining request priorities to the MessagePack int64 range
- [#52664](https://github.com/vllm-project/vllm/pull/52664) [Performance][ROCm] Integrate aiter indexer scoring and top-k kernels into MiniMax-M3 sparse attention path
- [#53602](https://github.com/vllm-project/vllm/pull/53602) [ROCm][CI] Split MI300 Distributed Compile by graph partition mode
- [#55887](https://github.com/vllm-project/vllm/pull/55887) [ROCm][Bugfix] Support shared KV prefill in AITER attention
- [#53174](https://github.com/vllm-project/vllm/pull/53174) [Bugfix] Fix Step-3.5 reasoning parser for structured outputs
- [#55499](https://github.com/vllm-project/vllm/pull/55499) [Perf] Fix TRTLLM ragged prefill perf regression
- [#53824](https://github.com/vllm-project/vllm/pull/53824) [Bugfix] Detect OpenAI content format when message.content is passed through macro parameters
- [#56130](https://github.com/vllm-project/vllm/pull/56130) [ROCm][CI] Use a platform-independent GEMM in the merged-column fuser test
- [#55745](https://github.com/vllm-project/vllm/pull/55745) [Bugfix][V2] record_stream idx_mapping in the PP draft broadcast
- [#56114](https://github.com/vllm-project/vllm/pull/56114) [CI][ROCm] Increase timeout for AMD MI355 Language Models (Standard)
- [#55965](https://github.com/vllm-project/vllm/pull/55965) [CI][IR] Speed up vLLM IR test group
- [#55370](https://github.com/vllm-project/vllm/pull/55370) [Bugfix] Make `mm_device_do_normalize` encoder-cudagraph safe
- [#56106](https://github.com/vllm-project/vllm/pull/56106) [ROCm][CI] Fix moe layer tests for fp8 dtype compatibility
- [#55310](https://github.com/vllm-project/vllm/pull/55310) [Bugfix][LoRA] Log when an adapter applies no weights
- [#54584](https://github.com/vllm-project/vllm/pull/54584) [Docs] Update README.md MkDocs to give option to run dev-server on different port.
- [#55713](https://github.com/vllm-project/vllm/pull/55713) [Spec Decode] Add NVFP4 DSpark gathered top-k projection
- [#56004](https://github.com/vllm-project/vllm/pull/56004) [Pooling] Report LoRA adapter names in responses
- [#53590](https://github.com/vllm-project/vllm/pull/53590) Fix ROCm AITER FP8 KV test tolerances.
- [#56112](https://github.com/vllm-project/vllm/pull/56112) [Docs] Fix griffe docstring indentation warning in `SupportsMRoPE`
- [#55968](https://github.com/vllm-project/vllm/pull/55968) [ROCm] Bump AITER to v0.1.21.post2
- [#52615](https://github.com/vllm-project/vllm/pull/52615) [Refactor][kv_offload]: rename `block`→`chunk`
- [#56078](https://github.com/vllm-project/vllm/pull/56078) [Core][Model] Unify XD-RoPE into M-RoPE and derive the channel count
- [#51450](https://github.com/vllm-project/vllm/pull/51450) [Structured Output] Keep invalid structured-output requests from stopping the engine
- [#55888](https://github.com/vllm-project/vllm/pull/55888) [Bugfix] Avoid FlexAttention recompiles when request counts change
- [#55899](https://github.com/vllm-project/vllm/pull/55899) [Perf] Improve BF16x3 router GEMM accuracy and make it default on sm100
- [#53664](https://github.com/vllm-project/vllm/pull/53664) [Rocm][Kimi-k3] Add pipeline_parallel support for the kimik3 model
- [#54973](https://github.com/vllm-project/vllm/pull/54973) [CI] Add e2e test for scale-out EC connector flow
- [#54371](https://github.com/vllm-project/vllm/pull/54371) [Qwen4Exp] Support UVA PLE-offload and Engram tensor parallelism
- [#56035](https://github.com/vllm-project/vllm/pull/56035) [Bugfix][ROCm][DSv4] Skip launch_pdl=True JIT warmup when PDL is unsupported
- [#55690](https://github.com/vllm-project/vllm/pull/55690) [Transformers backend] Enable QKV-Fuser for Gemma4
- [#45900](https://github.com/vllm-project/vllm/pull/45900) [ROCm][Perf] Fix Qwen3-vLLM audio encoder TP when heads are not divisible by TP size
- [#55893](https://github.com/vllm-project/vllm/pull/55893) [Bugfix] Fix unreachable None guard in Molmo2 get_candidate_target_fps
- [#55240](https://github.com/vllm-project/vllm/pull/55240) [Bugfix][Rust Frontend] Skip undefined token ids in decode and anchor them zero-width
- [#55163](https://github.com/vllm-project/vllm/pull/55163) [CI/Build] Upload CPU nightly image to Docker Hub
- [#55328](https://github.com/vllm-project/vllm/pull/55328) [Rust Frontend] Make --max-model-len optional for the render server

#### 🐛 New Issues
- [#56007](https://github.com/vllm-project/vllm/issues/56007) [Bug]: GLM5.3-Flash v0.29.0 loading checkpoints error `bug` 💬6
- [#56105](https://github.com/vllm-project/vllm/issues/56105) [Tracking]: Watermarking hardening - compatibility tests and quality/performance regression monitoring `feature request` `quantization` 💬5
- [#56144](https://github.com/vllm-project/vllm/issues/56144) [CI Failure]: (MI300) Entrypoints Integration (Speech to Text) failing because of PR#54917 `rocm` `ci-failure` 💬2
- [#56101](https://github.com/vllm-project/vllm/issues/56101) [Bug]: [Spec Decode Metrics] mean_acceptance_length overcounts tokens when EOS occurs inside the accepted draft prefix `bug` 💬2
- [#55994](https://github.com/vllm-project/vllm/issues/55994) [Bug][Rust Frontend] : /v1/chat/completions/render (and scale-out routes) return 404 `bug` `rust` 💬2
- [#56049](https://github.com/vllm-project/vllm/issues/56049) [Feature]: Fast Start For vLLM `feature request`
- [#56024](https://github.com/vllm-project/vllm/issues/56024) [Bug]: [ROCm] Whisper W8A8 fails because Triton scaled_mm receives a rank-3 activation `bug` `rocm` `quantization` 💬2
- [#56064](https://github.com/vllm-project/vllm/issues/56064) [SM121 / GB10 (DGX Spark)] `moe_wna16_marlin_gemm` no-split-K (data-parallel) path: CUDA illegal memory access at M=256 — clean for M≤128; default split-K path clean at M=256 💬1
- [#56081](https://github.com/vllm-project/vllm/issues/56081) Per-token-head inline KV scales break 128B alignment — 6.3× slowdown in gather-based attention kernels `quantization` 💬1
- [#56128](https://github.com/vllm-project/vllm/issues/56128) RFC: PCIe-native all-reduce for TP on peer-capable, NVLink-less multi-GPU nodes 💬1
- [#56127](https://github.com/vllm-project/vllm/issues/56127) RFC: per-M, per-shape kernel dispatch for blockwise-FP8 linear layers (W8A16 at decode, FP8xFP8 at prefill) 💬1
- [#56126](https://github.com/vllm-project/vllm/issues/56126) RFC: enable dual-batch overlap (DBO) for dense TP models at DP=1 💬1
- [#56125](https://github.com/vllm-project/vllm/issues/56125) Vendored flash-linear-attention: non-packed fused_recurrent_gated_delta_rule is ~3x slower than upstream 0.5.2 (bit-identical) 💬1
- [#56030](https://github.com/vllm-project/vllm/issues/56030) [Bug][ROCm][DSv4] JIT warmup compiles launch_pdl=True Triton kernels and fails with invalid griddepcontrol on AMD `rocm` `DSv4` 💬1
- [#56077](https://github.com/vllm-project/vllm/issues/56077) [Bug]: ngram speculative decoding corrupts qwen3_coder tool-call parser output (empty/mangled arguments) for Qwen3.x models `speculative-decoding` `tool-calling` `quantization` 💬1
- [#56068](https://github.com/vllm-project/vllm/issues/56068) [Bug]: --enable-lora + --enable-batch-sharded-sampling crashes at the first sampling step (no startup validation) `bug` 💬1
- [#56041](https://github.com/vllm-project/vllm/issues/56041) [Bug]: FixFunctionalizationPass crashes with "Tried to erase Node auto_functionalized but it still had N users" when the graph contains control_deps nodes `bug` 💬1
- [#56037](https://github.com/vllm-project/vllm/issues/56037) [Bug][ROCm/gfx942] GLM-5.3-Flash Memory access fault is three paths, not #54296 / 32-page: mixed-length MTP decode, prefill _kpool_tail_seed_kernel, equal-length short MTP `rocm` `glm` 💬1
- [#56021](https://github.com/vllm-project/vllm/issues/56021) [Bug]: On RDNA (gfx12), VLLM_ROCM_USE_AITER=1 force-selects ROCM_AITER_UNIFIED_ATTN at priority 0, ignoring VLLM_ROCM_USE_AITER_UNIFIED_ATTENTION (kernel exceeds RDNA's LDS limit) `rocm` `quantization` 💬1
- [#55986](https://github.com/vllm-project/vllm/issues/55986) [RFC] Multi-channel target audio ignores channel_reduction in normalize_audio 💬1
- [#56175](https://github.com/vllm-project/vllm/issues/56175) [Feature] Qwen3.8-Flash-Next NVFP4 on a 48 GB GPU: shared GPU expert pool with a device-side planner (PR to follow)
- [#56172](https://github.com/vllm-project/vllm/issues/56172) [Feature]: Lightweight vLLM Render API: Offload Heavy Multimodal Preprocessing from CPU Sidecars `feature request` `multi-modality`
- [#56140](https://github.com/vllm-project/vllm/issues/56140) Could vllm support durable memory across sessions?
- [#56133](https://github.com/vllm-project/vllm/issues/56133) [RFC]: Runtime prefill/decode role switching for EP groups
- [#56123](https://github.com/vllm-project/vllm/issues/56123) [RFC]: P/D transfer contract across different parallel layouts with cp interleave size `kv-connector` `quantization`
- [#56088](https://github.com/vllm-project/vllm/issues/56088) [Bug]: qwen4_exp (Qwen3.8-Flash-Next) cannot serve DeepSpec DFlash/DSpark drafters: five blockers, patches available
- [#56083](https://github.com/vllm-project/vllm/issues/56083) [Bug] cooperative_topk fails on SM110 (Jetson Thor): cluster launch misconfiguration; gate excludes family 120 but not 110
- [#56022](https://github.com/vllm-project/vllm/issues/56022) [Bug]: Assistant message contains both non-empty content and tool_calls in Agent loop, with persistent failure after first occurrence `bug` `tool-calling`
- [#56009](https://github.com/vllm-project/vllm/issues/56009) Possible response/request cross-talk: distinct non-overlapping requests return mismatched application binding values
- [#55982](https://github.com/vllm-project/vllm/issues/55982) [Bug]: PyTorch benchmark export fails with unset filenames and mislabels compilation mode

#### 🔒 Closed Issues
- [#32434](https://github.com/vllm-project/vllm/issues/32434) [Bug]: gpt-oss no output with TRITON_ATTN backend with spec decode on ROCm
- [#30394](https://github.com/vllm-project/vllm/issues/30394) [Feature]: Prometheus Metrics Abstraction
- [#44091](https://github.com/vllm-project/vllm/issues/44091) AMD Development Roadmap (2026 Q3)
- [#44092](https://github.com/vllm-project/vllm/issues/44092) Test issues
- [#43969](https://github.com/vllm-project/vllm/issues/43969) [Bug]: gpt-oss-120b MXFP4 MoE init OOM-killed on unified-memory ARM (DGX Spark / Jetson Thor)
- [#56007](https://github.com/vllm-project/vllm/issues/56007) [Bug]: GLM5.3-Flash v0.29.0 loading checkpoints error
- [#49002](https://github.com/vllm-project/vllm/issues/49002) [Bug]: Speculative Decoding + Structured Output（tool call）组合下，decode 阶段出现秒级卡顿
- [#55552](https://github.com/vllm-project/vllm/issues/55552) [Bug]: tool_choice="required" not enforced with Qwen3.8-Flash-Next when enable_thinking=false (streaming); xgrammar "Failed to advance FSM" / "matcher has terminated" with thinking on + MTP
- [#55193](https://github.com/vllm-project/vllm/issues/55193) [Bug]: LoRA adapter targeting no configured modules silently serves the base model
- [#53820](https://github.com/vllm-project/vllm/issues/53820) [Bug]: MiMo-V2.5 chat template is auto-detected as string, reordering multimodal content
- [#54900](https://github.com/vllm-project/vllm/issues/54900) [Bug]: GLM-5.3 Quark MXFP4 Loading Issue
- [#56128](https://github.com/vllm-project/vllm/issues/56128) RFC: PCIe-native all-reduce for TP on peer-capable, NVLink-less multi-GPU nodes
- [#56127](https://github.com/vllm-project/vllm/issues/56127) RFC: per-M, per-shape kernel dispatch for blockwise-FP8 linear layers (W8A16 at decode, FP8xFP8 at prefill)
- [#56126](https://github.com/vllm-project/vllm/issues/56126) RFC: enable dual-batch overlap (DBO) for dense TP models at DP=1
- [#56125](https://github.com/vllm-project/vllm/issues/56125) Vendored flash-linear-attention: non-packed fused_recurrent_gated_delta_rule is ~3x slower than upstream 0.5.2 (bit-identical)
- [#55140](https://github.com/vllm-project/vllm/issues/55140) [Bug] HunyuanOCR (Transformers backend) crashes on startup: "Expected 4 multimodal RoPE channels, got position_ids with shape (3, 1, N)"
- [#56030](https://github.com/vllm-project/vllm/issues/56030) [Bug][ROCm][DSv4] JIT warmup compiles launch_pdl=True Triton kernels and fails with invalid griddepcontrol on AMD

### SGLang (`sgl-project/sglang`)

**Stars:** 35,717 · **Open issues:** 5,237 · **Last push:** <1h ago

On September 10, 2026, there were no new releases for SGLang, but several noteworthy pull requests were merged, including the integration of TRT-LLM DSv4 Attention for SM100/103 and the addition of an opt-in feature for GLM-5.3 flash breakable prefill CUDA graphs. Additionally, advancements in logistics were made with the support for GLM-5.3 Flash NVFP4 loading and the optimization of Domino rollout for DFlash V2. A significant bug report captured the community's attention as the tiny_gemm regression was noted in DeepSeek-R1 NVFP4 decode, raising concerns about performance despite improvements in standalone kernel speed. Overall, the day focused on incremental yet impactful enhancements within the framework.

#### ✅ Merged PRs
- [#30805](https://github.com/sgl-project/sglang/pull/30805) [DSv4] Integrate TRT-LLM DSv4 Attention for SM100/103
- [#38522](https://github.com/sgl-project/sglang/pull/38522) Add Opt-In for GLM-5.3 Flash breakable prefill CUDA graphs
- [#38165](https://github.com/sgl-project/sglang/pull/38165) [LoRA] Publish fresh streamed versions alongside generation
- [#38688](https://github.com/sgl-project/sglang/pull/38688) [CI] Install helion 1.4.0 for the KDA Helion kernel tests
- [#37994](https://github.com/sgl-project/sglang/pull/37994) [Rust] Gate health on startup warmup completion
- [#36848](https://github.com/sgl-project/sglang/pull/36848) [HiCache] Replace skip_lock_node_ids with a segment lock protocol
- [#38718](https://github.com/sgl-project/sglang/pull/38718) [sglang-miles] Pass Nemotron-H layer ID to routing replay
- [#36899](https://github.com/sgl-project/sglang/pull/36899) feat: add optimized Domino rollout to DFlash V2
- [#38734](https://github.com/sgl-project/sglang/pull/38734) [CI] Add /run-full-ci and /run-extra-ci slash commands
- [#38621](https://github.com/sgl-project/sglang/pull/38621) [Model] Support GLM-5.3 Flash NVFP4 loading
- [#36713](https://github.com/sgl-project/sglang/pull/36713) fix(unified-memory): evict Full KV for Mamba byte shortfalls
- [#38041](https://github.com/sgl-project/sglang/pull/38041) Revert "[Spec] Publish the final multi-layer EAGLE shared-read event"
- [#38725](https://github.com/sgl-project/sglang/pull/38725) Relax GSM8K thresholds for the GLM-5.2 DSA-MTP variants
- [#37350](https://github.com/sgl-project/sglang/pull/37350) [Diffusion][RL] Reuse disk LoRA mapping and FFN swap on H3 IPC updates
- [#38722](https://github.com/sgl-project/sglang/pull/38722) Keep VMM capability votes on CPU
- [#34430](https://github.com/sgl-project/sglang/pull/34430) [rust-server] Use node-local HTTP ports for DP attention
- [#37933](https://github.com/sgl-project/sglang/pull/37933) [Bugfix] Keep a shared MAX_LEN prefill CUDA graph bucket when the graph captures a DP gather (MegaMoE sparse-DP hang)
- [#34722](https://github.com/sgl-project/sglang/pull/34722) [diffusion] [NPU] Optimize LTX-2/2.3 inference performance for NPU
- [#38667](https://github.com/sgl-project/sglang/pull/38667) [NPU] Set DEEPEP_HYBRID_DEPLOYMENT=1 for collocated DeepEP test cases
- [#36606](https://github.com/sgl-project/sglang/pull/36606) [Diffusion][SenseNova] support SenseNova-U1.5-8B-MoT
- [#38564](https://github.com/sgl-project/sglang/pull/38564) [Fix] Stamp sequence-parallel state on dummy forward batches
- [#37982](https://github.com/sgl-project/sglang/pull/37982) [Diffusion][MiniMax-H3] Add SM90 Sage compute for SubBlock sparse attention
- [#38437](https://github.com/sgl-project/sglang/pull/38437) [NPU] Bump memfabric and sgl-kernel-npu versions in docs and pyproject_npu.toml
- [#38659](https://github.com/sgl-project/sglang/pull/38659) [AMD][CI] Make ROCm 10 the Default for AMD PR and Nightly Tests
- [#38612](https://github.com/sgl-project/sglang/pull/38612) [Kimi-K3] Accept fp32 routing weights in the fused MoE finalize
- [#38617](https://github.com/sgl-project/sglang/pull/38617) docker(xpu): unblock nightly build (setvars.sh + sgl-kernel rename)
- [#38014](https://github.com/sgl-project/sglang/pull/38014) ci(xpu): merge stage-a+b into one job and trim main_package scope
- [#38590](https://github.com/sgl-project/sglang/pull/38590) [Attention] Size FlashInfer MLA indptr buffers to the padded max batch
- [#38638](https://github.com/sgl-project/sglang/pull/38638) use private --shm-size instead of --ipc=host to stop /dev/shm leak
- [#34820](https://github.com/sgl-project/sglang/pull/34820) Store mamba prefix-cache checkpoints at the configured SSM state dtype
- [#37303](https://github.com/sgl-project/sglang/pull/37303) [Rust TreeCore] Harden runtime and CI parity
- [#38462](https://github.com/sgl-project/sglang/pull/38462) [mem_cache] skip duplicates host evict via environ
- [#38591](https://github.com/sgl-project/sglang/pull/38591) [Diffusion] Enable lossless BCG for FLUX.1-dev
- [#38329](https://github.com/sgl-project/sglang/pull/38329) [AMD][Fix] Fix regression in jit build error with FLUX.2-dev on gfx1250
- [#38535](https://github.com/sgl-project/sglang/pull/38535) [diffusion] Add explicit snapshot-offload component residency
- [#38629](https://github.com/sgl-project/sglang/pull/38629) [diffusion] ci: don't fail the nightly when a perf dump is unreadable
- [#38571](https://github.com/sgl-project/sglang/pull/38571) [AMD][DSV4] Skip the paged SWA page return under the per-request ring
- [#38534](https://github.com/sgl-project/sglang/pull/38534) [Docs] Add measured JoyEcho H200 residency and BCG recipe
- [#38530](https://github.com/sgl-project/sglang/pull/38530) [Diffusion] Fuse LongCat Image normalization and modulation
- [#38588](https://github.com/sgl-project/sglang/pull/38588) Cast fp32 routing weights to bf16 in the Kimi-K3 fused finalize
- [#36230](https://github.com/sgl-project/sglang/pull/36230) [CP V1 Deprecation 5/5] Update prefill CP documentation
- [#38174](https://github.com/sgl-project/sglang/pull/38174) [NPU]support mf device urma and host rdma trans type
- [#38182](https://github.com/sgl-project/sglang/pull/38182) [Diffusion] Keep the Wan VAE decoder channels_last and add a Triton NHWC nearest upsample
- [#35492](https://github.com/sgl-project/sglang/pull/35492) [CPU] Support Qwen3.8 text+video: adding torchcodec, ffmpeg and removing pin_memory
- [#33366](https://github.com/sgl-project/sglang/pull/33366) [XPU][Diffusion] Enable MiniMax H3 on XPU platforms
- [#33089](https://github.com/sgl-project/sglang/pull/33089) [NPU] Add sparsity-driven KV offload for DeepSeek DSA on Ascend

#### 🐛 New Issues
- [#38628](https://github.com/sgl-project/sglang/issues/38628) [Performance] tiny_gemm regresses DeepSeek-R1 NVFP4 decode on Blackwell despite faster standalone kernel 💬5
- [#38695](https://github.com/sgl-project/sglang/issues/38695) [Feature] Unify the MoE router GEMM behind one gate layer `performance` `deterministic` `Refactor` 💬2
- [#38700](https://github.com/sgl-project/sglang/issues/38700) [Feature] Fuse shared to sparse experts in DSV4 MegaMoE `performance` `nvidia` 💬1
- [#38645](https://github.com/sgl-project/sglang/issues/38645) [Bug][DCP][PD Disagg] Decode retraction crashes in get_cpu_copy with CUDA device-side assert 💬1
- [#38589](https://github.com/sgl-project/sglang/issues/38589) Qwen4Exp (Qwen3.8-Flash-Next) cannot emit DFlash aux hidden states: DFlash/DSpark drafters cannot be served 💬1
- [#38622](https://github.com/sgl-project/sglang/issues/38622) [Bug] Triton causal_conv1d_update mishandles oversized and circular conv states 💬1
- [#38606](https://github.com/sgl-project/sglang/issues/38606) HYV4 (Hunyuan-V4) with an all-to-all MoE backend silently computes 1 token in attn_tp_size 💬1
- [#38745](https://github.com/sgl-project/sglang/issues/38745) `DUAL_STREAM_TOKEN_THRESHOLD` makes the DSA indexer's dual-stream gate unsatisfiable on ROCm — the leftover #14337's TODO named
- [#38731](https://github.com/sgl-project/sglang/issues/38731) Qwen3.8-Flash-Next Roadmap `roadmap`
- [#38710](https://github.com/sgl-project/sglang/issues/38710) [Bug] enable_aiter_allreduce_fusion auto-enable is commented out while the log still claims it was enabled
- [#38709](https://github.com/sgl-project/sglang/issues/38709) [Bug][ROCm] --dcp-size > 1 crashes every rank on the first forward: forward_absorb_rocm_core unpacks 2 values from a 1-value return
- [#38708](https://github.com/sgl-project/sglang/issues/38708) [Bug][ROCm] --cuda-graph-backend-decode breakable fails at startup on DSA models: 'NoneType' object has no attribute 'get_page_table_64'
- [#38707](https://github.com/sgl-project/sglang/issues/38707) [Bug][ROCm] PP + DSA: HIP fault on multi-chunk prefill; failure threshold tracks --cuda-graph-backend-decode
- [#38676](https://github.com/sgl-project/sglang/issues/38676) [Feature] Expose multimodal preprocessing latency metrics (media download / load / processor) in Prometheus
- [#38673](https://github.com/sgl-project/sglang/issues/38673) Title: [Bug] Gemma4UnifiedForConditionalGeneration crashes on CUDA graph capture: 'lm_head_is_tied' not set
- [#38669](https://github.com/sgl-project/sglang/issues/38669) [Bug] 主线版本ascend后端对swa模型的注意力计算有bug
- [#38651](https://github.com/sgl-project/sglang/issues/38651) [Feature] Allow caller-provided multimodal cache IDs to avoid repeated hashing and preprocessing
- [#38627](https://github.com/sgl-project/sglang/issues/38627) [Bug] Chunked prefill splits the encoder region of encoder-decoder models, corrupting `extend_num_tokens` and crashing the scheduler
- [#38620](https://github.com/sgl-project/sglang/issues/38620) [Probe] permission check
- [#38618](https://github.com/sgl-project/sglang/issues/38618) [Bug] GLM-5.3: checkpoints written by transformers load with MoE/mHC/KDA weights silently dropped
- [#38605](https://github.com/sgl-project/sglang/issues/38605) [Bug] MiniMax-H3 FL2VA generates visually corrupted video with layerwise offloading

#### 🔒 Closed Issues
- [#37561](https://github.com/sgl-project/sglang/issues/37561) [Bug] Kimi-K3 multi-node MegaMoE sparse-DP prefill CUDA graph deadlocks after PR #33871
- [#30884](https://github.com/sgl-project/sglang/issues/30884) [Feature] Support DeepSeek V4 in PDMux
- [#37268](https://github.com/sgl-project/sglang/issues/37268) [Bug] Shared experts fusion 3072 vs 6144 and Marlin+DeepEP NotImplementedError on GLM-5.3-NVFP4 (H100, v0.5.18)
- [#38586](https://github.com/sgl-project/sglang/issues/38586) [Bug] mock_model/test_e2e_pd.py TestPdTransferChecksumFullRealData: kv_canary SWEEP_K_FULL chain-hash violation (slot 1 all-zero after PD transfer) since main 2026-09-08
- [#37919](https://github.com/sgl-project/sglang/issues/37919) The initial CI workflows were stopped by the PR gate because the `run-ci` label is missing, so no tests were executed.
- [#38620](https://github.com/sgl-project/sglang/issues/38620) [Probe] permission check

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 127,654 · **Open issues:** 2,458 · **Last push:** 5h ago

On September 10, 2026, several significant updates were released for llama.cpp, including version b10883, which enhances Vulkan functionality by using spec constants for matrix multiplication and fixes various issues with shmem initialization. Version b10881 addresses workgroup distribution in Vulkan to avoid exceeding compute limits on Intel GPUs, while b10878 adjusts the return type for llama_sampler_chain_n to int32_t. Noteworthy changes merged today included the addition of IQ type handling for MoE in SYCL and improvements to tile size handling for CUDA on RDNA3. A crucial new issue reported involves Vulkan's vkCreateComputePipelines failing for specific operations on the Adreno 830, highlighting ongoing challenges with driver compatibility.

#### 🚀 New Releases
- [b10883](https://github.com/ggml-org/llama.cpp/releases/tag/b10883) b10883
- [b10881](https://github.com/ggml-org/llama.cpp/releases/tag/b10881) b10881
- [b10878](https://github.com/ggml-org/llama.cpp/releases/tag/b10878) b10878
- [b10877](https://github.com/ggml-org/llama.cpp/releases/tag/b10877) b10877
- [b10876](https://github.com/ggml-org/llama.cpp/releases/tag/b10876) b10876
- [b10875](https://github.com/ggml-org/llama.cpp/releases/tag/b10875) b10875
- [b10874](https://github.com/ggml-org/llama.cpp/releases/tag/b10874) b10874
- [b10873](https://github.com/ggml-org/llama.cpp/releases/tag/b10873) b10873
- [b10872](https://github.com/ggml-org/llama.cpp/releases/tag/b10872) b10872
- [b10871](https://github.com/ggml-org/llama.cpp/releases/tag/b10871) b10871

#### ✅ Merged PRs
- [#28583](https://github.com/ggml-org/llama.cpp/pull/28583) ci: sanitizer tests
- [#28079](https://github.com/ggml-org/llama.cpp/pull/28079) CUDA: replace GGML_FA_ALL_QUANTS with GGML_FA_QUANTS, more control over what is compiled
- [#25773](https://github.com/ggml-org/llama.cpp/pull/25773) vulkan: use spec constant for matrix matrix multiplication A-type
- [#28628](https://github.com/ggml-org/llama.cpp/pull/28628) hexagon: rope updates
- [#28592](https://github.com/ggml-org/llama.cpp/pull/28592) vulkan: Convert FILL to distribute workgroups in 2D to avoid exceeding maxComputeWorkGroupCount
- [#28476](https://github.com/ggml-org/llama.cpp/pull/28476) SYCL: Add IQ type handling for MoE
- [#28654](https://github.com/ggml-org/llama.cpp/pull/28654) py : lower numpy to 2.2.6
- [#28649](https://github.com/ggml-org/llama.cpp/pull/28649) py : bump numpy to 2.4.6
- [#28631](https://github.com/ggml-org/llama.cpp/pull/28631) llama : use int32_t for llama_sampler_chain_n return type
- [#28552](https://github.com/ggml-org/llama.cpp/pull/28552) CUDA: size routed MoE MMQ N-tiles from typical expert width on RDNA3 (recreated)
- [#28334](https://github.com/ggml-org/llama.cpp/pull/28334) args: remove mmap/mlock/dio flags from arg parser
- [#28632](https://github.com/ggml-org/llama.cpp/pull/28632) model: fix granite3 moe unknown parameter count
- [#28601](https://github.com/ggml-org/llama.cpp/pull/28601) mtmd: propagate video ID to bitmap
- [#28620](https://github.com/ggml-org/llama.cpp/pull/28620) jinja: treat a null left operand of in as a plain lookup
- [#28426](https://github.com/ggml-org/llama.cpp/pull/28426) vulkan: add dedicated iq4_xs mat-vec shader
- [#27471](https://github.com/ggml-org/llama.cpp/pull/27471) vulkan: add f16 B-type matmul pipelines and warp tile size tuning for Intel coopmat1
- [#28325](https://github.com/ggml-org/llama.cpp/pull/28325) tests : use 1 thread for data initialization

#### 🐛 New Issues
- [#28659](https://github.com/ggml-org/llama.cpp/issues/28659) Update vulkan CI runners to NVIDIA r615 driver `CI / packaging` 💬7
- [#28635](https://github.com/ggml-org/llama.cpp/issues/28635) Vulkan: vkCreateComputePipelines fails (VK_ERROR_UNKNOWN) for mul_mat_vec_q4_k_f32_f32 on Adreno 830 -- traced to shaderc/NDK version producing different SPIR-V from identical GLSL source 💬2
- [#28647](https://github.com/ggml-org/llama.cpp/issues/28647) Misc. bug: Intel AI Boost: Fail to run the supported model (Qwen3-1.7B) (NPU of Ultra 7 265) `bug-unconfirmed` 💬1
- [#28648](https://github.com/ggml-org/llama.cpp/issues/28648) Eval bug: Vulkan on Intel Arc 140V (Windows) outputs garbage with layers on GPU, depends on batch settings `bug-unconfirmed` 💬1
- [#28676](https://github.com/ggml-org/llama.cpp/issues/28676) Eval bug: HIP/ROCm multi-GPU on Windows 11 produces silently corrupted output (fluent gibberish) with gfx1100 + gfx1201 -- single-GPU HIP and dual-GPU Linux HIP are correct
- [#28675](https://github.com/ggml-org/llama.cpp/issues/28675) Eval bug: LFM2.5 1.2 Thinking - Think tags displayed in content `bug-unconfirmed`
- [#28674](https://github.com/ggml-org/llama.cpp/issues/28674) Misc. bug: server: --lora-init-without-apply leaves adapters at scale 1.0, and per-request "lora": [] does not zero unlisted adapters
- [#28672](https://github.com/ggml-org/llama.cpp/issues/28672) Eval bug: tool returning an image doesnt get shown to the model or UI `bug-unconfirmed`
- [#28665](https://github.com/ggml-org/llama.cpp/issues/28665) Misc. bug: `bug-unconfirmed`
- [#28661](https://github.com/ggml-org/llama.cpp/issues/28661) SM70 V100 Volta - Crashes using CUDA FA for Non-Standard Dimension Heads
- [#28660](https://github.com/ggml-org/llama.cpp/issues/28660) Eval bug: SYCL crash in ggml_sycl_pool_vmm::free - oneDNN scratchpad breaks LIFO pool order `bug-unconfirmed`
- [#28656](https://github.com/ggml-org/llama.cpp/issues/28656) server: multimodal /embeddings are not deterministic within a batch under the default unified KV cache (CUDA builds)
- [#28652](https://github.com/ggml-org/llama.cpp/issues/28652) Misc. bug: CUDA: alternating variants sharing one graph cache key cause warmup/replay interference `bug-unconfirmed`
- [#28650](https://github.com/ggml-org/llama.cpp/issues/28650) Misc. bug: `llama-batched-bench` ignores the `--cpu-mask` (`--cpu-strict` and related batch variants) `bug-unconfirmed`
- [#28637](https://github.com/ggml-org/llama.cpp/issues/28637) Vulkan: small matmul warptile mis-tiles at subgroup size 16, giving non-deterministic wrong results
- [#28633](https://github.com/ggml-org/llama.cpp/issues/28633) CUDA: make GGML_CUDA_FA_ALL_QUANTS=ON the default (silent CPU fallback for 4-bit KV)
- [#28627](https://github.com/ggml-org/llama.cpp/issues/28627) Misc. bug: [WebUI] Duplicate clear ("×") buttons shown in sidebar search input when typing text `bug-unconfirmed`
- [#28626](https://github.com/ggml-org/llama.cpp/issues/28626) Misc. bug: MTP draft context allocates KV for every layer (deepseek2 / glm4moe / cohere2moe) `bug-unconfirmed`
- [#28625](https://github.com/ggml-org/llama.cpp/issues/28625) Misc. bug: n_threads defaults to 4 on 20-core hybrid CPUs without SMT (Arrow Lake, Lunar Lake) `bug-unconfirmed`
- [#28624](https://github.com/ggml-org/llama.cpp/issues/28624) Eval bug: 4.20.760.357 E CUDA error: an illegal memory access was encountered t0 D:\a\llama.cpp\llama.cpp\ggml\src\ggml-cuda\ggml-cuda.cu:1e8: cuDA error `bug-unconfirmed`

#### 🔒 Closed Issues
- [#28247](https://github.com/ggml-org/llama.cpp/issues/28247) Eval bug: [Vulkan] GGML_ASSERT(wg0 <= ctx->device->properties.limits.maxComputeWorkGroupCount on Intel Arc A770 when running Qwen 3.8 flash next
- [#28522](https://github.com/ggml-org/llama.cpp/issues/28522) Eval bug: parallel tool_calls get mangled or hang, across multiple Qwen models, on a tool with ~48 optional params
- [#26285](https://github.com/ggml-org/llama.cpp/issues/26285) ggml-cuda: MMQ incorrectly disabled on RTX 3090 (shared memory check)
- [#24992](https://github.com/ggml-org/llama.cpp/issues/24992) Misc. bug: Tools doesn't work in WebUI when running in router mode
- [#25790](https://github.com/ggml-org/llama.cpp/issues/25790) Misc. bug: Instruction injection through the Query parameter (?q=) of the WebUI (security)
- [#28438](https://github.com/ggml-org/llama.cpp/issues/28438) Misc. bug: Data corruption for Q8_0 quantization for larger models under numpy 1.*
- [#28647](https://github.com/ggml-org/llama.cpp/issues/28647) Misc. bug: Intel AI Boost: Fail to run the supported model (Qwen3-1.7B) (NPU of Ultra 7 265)
- [#28580](https://github.com/ggml-org/llama.cpp/issues/28580) server: input_video reuses a previous request's decoded media when the prompt text repeats (video frames get no cache id)
- [#26127](https://github.com/ggml-org/llama.cpp/issues/26127) Windows HIP release omits gfx1152; Radeon 860M fails with invalid device function
- [#26139](https://github.com/ggml-org/llama.cpp/issues/26139) Feature Request: Gigatoken Tokenizer
- [#26142](https://github.com/ggml-org/llama.cpp/issues/26142) llama_get_embeddings_ith returns NaN/zeros for output slots 2+ with embd-batch decode on Qwen3-VL
- [#26148](https://github.com/ggml-org/llama.cpp/issues/26148) Eval bug: ROCm gfx1151, GGML_CUDA_ENABLE_UNIFIED_MEMORY=1 causes silent output corruption with Qwen3-Coder-Next

### Ollama (`ollama/ollama`)

**Stars:** 180,532 · **Open issues:** 3,948 · **Last push:** 1h ago

On September 10, 2026, there were no new releases for Ollama; however, several important pull requests were merged, including enhancements to the ChatGPT model selector's spacing and support for standalone named function outputs. Notably, the normalization of namespaced commands in Full Access was also addressed. Among the new issues, #18352 raised concerns about the inability to increase the context limit to 1 million characters from the existing 256,000, highlighting a significant user need for improved model capacity. Overall, the day reflected routine maintenance with a focus on refining existing features and addressing user-reported issues.

#### ✅ Merged PRs
- [#18347](https://github.com/ollama/ollama/pull/18347) app: fix ChatGPT model selector spacing
- [#18348](https://github.com/ollama/ollama/pull/18348) openai: support standalone named function outputs
- [#18331](https://github.com/ollama/ollama/pull/18331) proxy: normalize namespaced commands in Full Access

#### 🐛 New Issues
- [#18352](https://github.com/ollama/ollama/issues/18352) Can not inccrease Context to 1 M limited 256K `bug` 💬2
- [#18354](https://github.com/ollama/ollama/issues/18354) gemma4: string placeholder collision silently drops valid tool calls
- [#18349](https://github.com/ollama/ollama/issues/18349) Multi-GPU VRAM accounting uses discovery device names instead of child's log names `bug`
- [#18346](https://github.com/ollama/ollama/issues/18346) Anthropic /v1/messages compat: complex tool schemas cause model to emit tool call as literal text instead of a tool_use block
- [#18344](https://github.com/ollama/ollama/issues/18344) ollama serve leaks one file descriptor per successfully served /api/generate request
- [#18342](https://github.com/ollama/ollama/issues/18342) Command to dump the actual config use when running `ollama launch` `feature request`

#### 🔒 Closed Issues
- [#18272](https://github.com/ollama/ollama/issues/18272) Vulkan backend fails with 'Not enough memory for command submission' loading a 66 GB model on AMD iGPU (regression since v0.32.12)
- [#18286](https://github.com/ollama/ollama/issues/18286) /v1/responses` rejects `agent_message
- [#17618](https://github.com/ollama/ollama/issues/17618) ollama launch codex-app fails with Unsupported tool type: namespace when Codex App sends namespace tools
- [#18283](https://github.com/ollama/ollama/issues/18283) MLX compile-cache CHECK failed spams logs on non-MLX hardware (Windows, no CUDA/Apple Silicon)

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,393 · **Open issues:** 5,015 · **Last push:** <1h ago

Today marked the release of LiteLLM version v1.102.0-dev.1, which continues to enhance security by ensuring all Docker images are signed with cosign, following established cryptographic standards. Significant merged PRs included the introduction of percentile-based TTFT routing and support for image editing in hosted VLLM, reinforcing the platform's versatility. Among critical bug fixes, the resolution of cascading deletions for JWT key mappings and enhancements to the router's functionality stood out. Notably, the emergence of a new issue regarding failures in tests within the published litellm-database image highlights ongoing challenges in maintaining stable environments.

#### 🚀 New Releases
- [v1.102.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-dev.1) v1.102.0-dev.1

#### ✅ Merged PRs
- [#40494](https://github.com/BerriAI/litellm/pull/40494) fix(ui): preserve dotted MCP tool argument names
- [#40492](https://github.com/BerriAI/litellm/pull/40492) fix(databricks): route Unity model services through AI Gateway
- [#33703](https://github.com/BerriAI/litellm/pull/33703) fix(jwt): cascade-delete JWT key mappings when their virtual key is deleted
- [#40491](https://github.com/BerriAI/litellm/pull/40491) fix(router): resolve route candidate ids through the router's own resolver
- [#40294](https://github.com/BerriAI/litellm/pull/40294) fix(convert_dict_to_response): handle empty choices list without raising 500 APIError
- [#40280](https://github.com/BerriAI/litellm/pull/40280) fix(router): strip encrypted reasoning on an auto-router tier change instead of a 503
- [#40449](https://github.com/BerriAI/litellm/pull/40449) fix(databricks): keep top-level reasoning_content from OpenAI-compatible gateway models
- [#40177](https://github.com/BerriAI/litellm/pull/40177) fix(langfuse): give each call in a session header its own trace instead of upserting one trace per session
- [#40432](https://github.com/BerriAI/litellm/pull/40432) fix(router): resolve team-scoped auto-routers by their public name
- [#40458](https://github.com/BerriAI/litellm/pull/40458) fix(proxy): accept non-string callback vars in default_team_settings
- [#40271](https://github.com/BerriAI/litellm/pull/40271) feat(guardrails): deliver tool-call rewrites into buffered chat, Responses, and Messages streams
- [#37228](https://github.com/BerriAI/litellm/pull/37228) fix(rate_limiter): attach v3 priority rate limit headers on /v1/messages
- [#40379](https://github.com/BerriAI/litellm/pull/40379) fix(proxy): keep a body litellm_session_id in SpendLogs under missing_session_id omit
- [#40455](https://github.com/BerriAI/litellm/pull/40455) fix(router): backport #39491 to stable/1.100.x so retry breadcrumbs stop retaining every earlier request
- [#40329](https://github.com/BerriAI/litellm/pull/40329) feat(hosted_vllm): add image edit support
- [#40456](https://github.com/BerriAI/litellm/pull/40456) test(ui): derive reasoning-effort assertion from the anthropic preset
- [#40116](https://github.com/BerriAI/litellm/pull/40116) feat(auth): add disable_env_credential_login setting with admin ui warning
- [#40274](https://github.com/BerriAI/litellm/pull/40274) feat(guardrails): run post_call policy pipelines on background Responses retrieval
- [#40342](https://github.com/BerriAI/litellm/pull/40342) fix(anthropic): key the /v1/messages prompt cache on Claude Code's session_id only
- [#40444](https://github.com/BerriAI/litellm/pull/40444) chore(lint): bring ANN202 and BLE001 back under the strict-rule budget
- [#40372](https://github.com/BerriAI/litellm/pull/40372) fix(cli): skip remote model cost map fetch in lite CLI processes
- [#40428](https://github.com/BerriAI/litellm/pull/40428) fix(proxy): pin multi-root CA bundle to the server's root before handing it to Prisma
- [#40425](https://github.com/BerriAI/litellm/pull/40425) test: isolate bedrock aws tests from ambient SSL env vars
- [#40362](https://github.com/BerriAI/litellm/pull/40362) perf(proxy): collapse per-worker SGR upserts into one statement per flush
- [#40352](https://github.com/BerriAI/litellm/pull/40352) feat(router): support percentile-based TTFT routing
- [#40421](https://github.com/BerriAI/litellm/pull/40421) fix(proxy): ignore team_id="" on /key/update so team-less keys can be updated and imported
- [#40371](https://github.com/BerriAI/litellm/pull/40371) perf(proxy): pipeline spend counter increments into one Redis call per request
- [#40359](https://github.com/BerriAI/litellm/pull/40359) fix(mcp): surface connection failures across transports
- [#40174](https://github.com/BerriAI/litellm/pull/40174) feat(proxy): price cache and reasoning tokens in /cost/estimate
- [#40303](https://github.com/BerriAI/litellm/pull/40303) fix(ui): repair pass-through delete confirm dialog and disable delete for config endpoints
- [#40350](https://github.com/BerriAI/litellm/pull/40350) fix(cost-map): keep first fetch blocking, run retries in background
- [#40414](https://github.com/BerriAI/litellm/pull/40414) fix(integrations): pass original request object to post-call guardrail hooks
- [#39985](https://github.com/BerriAI/litellm/pull/39985) fix(proxy): apply team model aliases on the JWT auth path
- [#40383](https://github.com/BerriAI/litellm/pull/40383) revert(model-management): roll back #40047
- [#40327](https://github.com/BerriAI/litellm/pull/40327) feat(guardrails): map each guardrail scan id to its guardrail, stage and provider
- [#40047](https://github.com/BerriAI/litellm/pull/40047) fix(model-management): honor an explicit null as a clear on model update
- [#40161](https://github.com/BerriAI/litellm/pull/40161) fix(batches): clean up E2E resources across providers
- [#40022](https://github.com/BerriAI/litellm/pull/40022) fix(mcp): honor an explicit null on toolset update, cover MCP lifecycle e2e
- [#40027](https://github.com/BerriAI/litellm/pull/40027) test(e2e/ui): cover key budget window, non-admin model scope edit, and key blocking
- [#40039](https://github.com/BerriAI/litellm/pull/40039) test(e2e/ui): cover team-scoped model visibility, re-editing litellm params, and model health checks
- [#40189](https://github.com/BerriAI/litellm/pull/40189) fix(azure_ai): price seven Foundry catalog names and charge the model router fee once
- [#40351](https://github.com/BerriAI/litellm/pull/40351) fix(mcp): log proxy tool dispatch exceptions
- [#37781](https://github.com/BerriAI/litellm/pull/37781) fix(stream_chunk_builder): guard empty choices and missing role in build_base_response
- [#40307](https://github.com/BerriAI/litellm/pull/40307) chore(ci): promote internal staging to main
- [#40337](https://github.com/BerriAI/litellm/pull/40337) fix(mcp): preserve proxy logging and authorization coverage
- [#40275](https://github.com/BerriAI/litellm/pull/40275) fix(spend-tracking): recover key alias for session tokens from spend logs
- [#40334](https://github.com/BerriAI/litellm/pull/40334) chore: bump litellm-enterprise 0.1.65 -> 0.1.66
- [#40347](https://github.com/BerriAI/litellm/pull/40347) test(mcp): fix proxy fixture isolation after manager reload
- [#40179](https://github.com/BerriAI/litellm/pull/40179) feat(cost_map): report which revision of the price map the proxy is serving
- [#40346](https://github.com/BerriAI/litellm/pull/40346) fix(otel): backport auth spans and callback merge to rc/1.101.0 (#40335)
- [#40341](https://github.com/BerriAI/litellm/pull/40341) feat(auto-router): refresh family reasoning presets
- [#40336](https://github.com/BerriAI/litellm/pull/40336) chore(ci): extend diskcache scan exception to October 1
- [#40335](https://github.com/BerriAI/litellm/pull/40335) fix(otel v2): restore the Datadog auth span and the last-wins callback merge
- [#40333](https://github.com/BerriAI/litellm/pull/40333) test(proxy): fix Prisma timeout cleanup after subreaper tests

#### 🐛 New Issues
- [#40357](https://github.com/BerriAI/litellm/issues/40357) Nine tests in test_base_aws_llm.py fail inside the published litellm-database image (ambient SSL_CERT_FILE) `llm translation` 💬2
- [#40386](https://github.com/BerriAI/litellm/issues/40386) [Feature]: Filter Request Log and Usage by Project `enhancement` `ui-dashboard` 💬2
- [#40441](https://github.com/BerriAI/litellm/issues/40441) Could litellm support durable memory across sessions? 💬1
- [#40363](https://github.com/BerriAI/litellm/issues/40363) [Bug]: Vertex AI claude versioned ids get a silent 4096 max_tokens default, and vertex_ai/claude-haiku-4-5* map entries cap output at 8192 instead of 64000 `llm translation` 💬1
- [#40472](https://github.com/BerriAI/litellm/issues/40472) [Bug]: supports_none_reasoning_effort is never enforced, so gpt-5 / gpt-5-mini forward reasoning_effort=none into a predictable provider 400 `llm translation` `potential-duplicate` 💬1
- [#40388](https://github.com/BerriAI/litellm/issues/40388) [Bug]: MockValSer is not an instance of SchemaSerializer (SAP AI Core) `bug` `llm translation` `SDK` `claude code`
- [#40358](https://github.com/BerriAI/litellm/issues/40358) [Bug]: github_copilot rejects tool schemas whose `pattern` uses Unicode-property regex escapes (e.g. Claude Code's built-in Artifact tool) - 400 invalid_request_body `llm translation` `SDK` `claude code`
- [#40477](https://github.com/BerriAI/litellm/issues/40477) [Bug]: Gemini candidate with a finishReason but no content is dropped, so the reason never reaches the client `bug` `proxy` `llm translation`
- [#40490](https://github.com/BerriAI/litellm/issues/40490) [Bug]: OpenAI provider path leaks an aiohttp ClientSession on every client-cache eviction (no AsyncHTTPHandler, no transport __del__, weakly-held evicted client) `llm translation`
- [#40474](https://github.com/BerriAI/litellm/issues/40474) [Bug]: invalid reasoning_effort on Gemini/Vertex raises a bare ValueError and returns HTTP 500 instead of a 400 `llm translation`
- [#40473](https://github.com/BerriAI/litellm/issues/40473) [Bug]: model map marks supports_minimal_reasoning_effort true for gpt-5.1 and gpt-5.4, but OpenAI rejects minimal on both `llm translation`
- [#40471](https://github.com/BerriAI/litellm/issues/40471) [Bug]: reasoning_effort=xhigh is silently downgraded to baseline instead of refused when the model map lacks the capability `llm translation`
- [#40470](https://github.com/BerriAI/litellm/issues/40470) [Bug]: reasoning_effort silently dropped for gpt-4.1 / gpt-4o on openai and azure, hiding a provider 400 `llm translation`
- [#40445](https://github.com/BerriAI/litellm/issues/40445) [Feature]: Migrate Bedrock Realtime handler for aws-sdk-bedrock-runtime 0.10/0.11 compatibility `llm translation`
- [#40436](https://github.com/BerriAI/litellm/issues/40436) [Bug]: reasoning content blocks break token counting and prompt-cache eligibility checks `proxy` `llm translation`
- [#40408](https://github.com/BerriAI/litellm/issues/40408) [Feature]: Azure Responses API should support deployment-scoped URLs (/openai/deployments/{deployment}/responses) `llm translation`
- [#40406](https://github.com/BerriAI/litellm/issues/40406) [Design]: should a `content_policy_violation` 400 trigger the generic `fallbacks` list when `content_policy_fallbacks` is not set? `llm translation`
- [#40405](https://github.com/BerriAI/litellm/issues/40405) [Docs/Design]: with one deployment per model group + `fallbacks`, the primary is never cooled down — every request during an outage costs 3 failed attempts (5–6 s) before the fallback answers
- [#40404](https://github.com/BerriAI/litellm/issues/40404) [Bug]: Router / proxy never try the configured fallback when the upstream stream ends abnormally (cut, stalled, or malformed chunk) — fallback deployment gets zero requests `llm translation`
- [#40398](https://github.com/BerriAI/litellm/issues/40398) [Bug]: JWT auth mints a new "virtual key" per token, so Usage lists one nameless hashed-jwt-… row per refresh `proxy`
- [#40397](https://github.com/BerriAI/litellm/issues/40397) [Feature]: Get OpenID-Connect setting from well-known `enhancement` `ui-dashboard`
- [#40385](https://github.com/BerriAI/litellm/issues/40385) [Bug]: Redis consumer queue backlog under 130M TPM and 1.2K RPM `bug` `proxy` `llm translation`
- [#40380](https://github.com/BerriAI/litellm/issues/40380) [Bug]: Anthropic /v1/messages pre_call guardrails silently skip historical tool_use blocks (tool-call arguments never scanned once they're in prior turns) `llm translation` `claude code`
- [#40369](https://github.com/BerriAI/litellm/issues/40369) [Bug]: `serialize_tool_call_arguments` defaults to `""`, producing invalid-JSON tool call arguments `llm translation`
- [#40364](https://github.com/BerriAI/litellm/issues/40364) [Bug]: `encrypted_content_affinity` does not cover the Chat Completions → Responses bridge, so multi-turn requests carrying `reasoning_items` are routed to the wrong deployment (400 `invalid_encrypted_content`) `bug` `proxy` `llm translation`
- [#40361](https://github.com/BerriAI/litellm/issues/40361) docker/Dockerfile.database cannot be built: pinned wolfi-base digest has drifted from the apk packages installed into it
- [#40360](https://github.com/BerriAI/litellm/issues/40360) [Bug]: Bedrock CRIS claude-3-haiku-20240307 entries use 1.25x/0.1x ratios instead of Anthropic's published $0.30/$0.03 cache prices `llm translation`
- [#40345](https://github.com/BerriAI/litellm/issues/40345) [Bug]: Bridged /v1/messages streams append a 500 error after message_stop when deferred logging receives two arguments `proxy` `llm translation`
- [#40344](https://github.com/BerriAI/litellm/issues/40344) [Bug]: Tool array schema without items crashes token counting and skips context-window prechecks `proxy` `llm translation`
- [#40339](https://github.com/BerriAI/litellm/issues/40339) [Feature]: per-hook, per-callback request filters for guardrails and logging callbacks `proxy` `llm translation`

#### 🔒 Closed Issues
- [#16582](https://github.com/BerriAI/litellm/issues/16582) [Bug]: Spendlog Cleanup not working - "spend_log_cleanup.py:153 - Error during cleanup: "
- [#40237](https://github.com/BerriAI/litellm/issues/40237) [Bug]: Complexity auto-router moves encrypted content follow-ups across model groups
- [#39145](https://github.com/BerriAI/litellm/issues/39145) bug(llm_translation): prompt_cache_key derived from user_id never changes
- [#29491](https://github.com/BerriAI/litellm/issues/29491) [Bug]: Anthropic streaming format drops input_json_delta for tool_use via custom OpenAI-compatible provider
- [#33702](https://github.com/BerriAI/litellm/issues/33702) [Bug]: Admin UI cannot delete virtual keys referenced by JWT key mappings
- [#29649](https://github.com/BerriAI/litellm/issues/29649) [Bug]: Claude Code WebSearch with hosted_vllm short-circuits before model synthesis and can return text-only search results
- [#40279](https://github.com/BerriAI/litellm/issues/40279) [Bug]: gpt-6-astra rejects max_tokens (is_model_gpt_5_model / is_model_gpt_5_4_plus_model don't recognize gpt-6 family)
- [#40357](https://github.com/BerriAI/litellm/issues/40357) Nine tests in test_base_aws_llm.py fail inside the published litellm-database image (ambient SSL_CERT_FILE)
- [#31318](https://github.com/BerriAI/litellm/issues/31318) [Feature]: Improved MCP connection troubleshooting
- [#29657](https://github.com/BerriAI/litellm/issues/29657) [QUESTION] Team Member RPM Limit - what does it actually apply to?
- [#29675](https://github.com/BerriAI/litellm/issues/29675) [Bug]: not all models for github_copilot are listed
- [#40441](https://github.com/BerriAI/litellm/issues/40441) Could litellm support durable memory across sessions?
- [#40276](https://github.com/BerriAI/litellm/issues/40276) [Bug]: Empty choices list misreported as 500 no-choices error (Gemini safety-filtered responses)
- [#40272](https://github.com/BerriAI/litellm/issues/40272) [Bug]: v1.101.0-rc.1 migrations fail with P1011 using AWS RDS CA bundle after strict TLS translation
- [#40081](https://github.com/BerriAI/litellm/issues/40081) CACHING IS BROKEN - ATTENTION ATTENTION ATTENTION
- [#37780](https://github.com/BerriAI/litellm/issues/37780) [Bug]: stream_chunk_builder raises IndexError/KeyError in build_base_response, truncating client SSE stream and skipping SpendLogs

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,952 · **Open issues:** 1,315 · **Last push:** <1h ago

On September 10, 2026, Unsloth announced the release of v0.1.808-beta, which brings significant performance boosts and over 250 bug fixes, including up to 1.7x faster diffusion and major updates that enhance reliability, particularly for Windows users. Among the merged pull requests, notable enhancements include improved memory estimates in the studio, a fix for Deep Research JSON output for MLX and Transformers, and optimizations that prevent orphaning of servers during model loads. However, a reported bug (#10573) highlights issues with v0.1.807-beta on Windows, where users encounter unsupported settings while connecting to vLLM, underscoring ongoing challenges with compatibility in the platform.

#### 🚀 New Releases
- [v0.1.808-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.808-beta) Large Performance Gains + Fixes

#### ✅ Merged PRs
- [#10608](https://github.com/unslothai/unsloth/pull/10608) Studio: reuse the named CLI API key across studio run
- [#10499](https://github.com/unslothai/unsloth/pull/10499) Fold duplicated backend, hub and package tests into parametrized runs
- [#10611](https://github.com/unslothai/unsloth/pull/10611) Fix Deep Research JSON output on MLX and Transformers
- [#10501](https://github.com/unslothai/unsloth/pull/10501) Collapse repeated fixture construction in the studio install tests
- [#10500](https://github.com/unslothai/unsloth/pull/10500) Share the frontend source readers and the shell test harness
- [#10498](https://github.com/unslothai/unsloth/pull/10498) Share builders and setup helpers in the studio backend tests, part 2
- [#10497](https://github.com/unslothai/unsloth/pull/10497) Share builders and setup helpers in the studio backend tests, part 1
- [#10158](https://github.com/unslothai/unsloth/pull/10158) fix(studio): keep GGUF compaction for multimodal chats
- [#9690](https://github.com/unslothai/unsloth/pull/9690) Studio: correct the keyless tunnel copy, which promised more than the code does
- [#10471](https://github.com/unslothai/unsloth/pull/10471) Stop the uninstaller stranding old installs, and deleting directories that are not ours
- [#10640](https://github.com/unslothai/unsloth/pull/10640) Bump install.sh / install.ps1 pin to unsloth>=2026.9.4
- [#10627](https://github.com/unslothai/unsloth/pull/10627) Studio: account for resident memory during model reloads
- [#10591](https://github.com/unslothai/unsloth/pull/10591) Studio: improve memory estimate spacing, alignment, and guidance
- [#10629](https://github.com/unslothai/unsloth/pull/10629) fix(studio): restore eager Settings and keep startup splash until ready
- [#10592](https://github.com/unslothai/unsloth/pull/10592) Studio: stop a quit during a model load from orphaning llama-server
- [#10621](https://github.com/unslothai/unsloth/pull/10621) Windows installer: shorten the native-type comments
- [#10622](https://github.com/unslothai/unsloth/pull/10622) Studio: restore the CLI help text the comment passes had trimmed
- [#10624](https://github.com/unslothai/unsloth/pull/10624) Windows: run the native-type tests on Windows, and fix the two that could not
- [#10628](https://github.com/unslothai/unsloth/pull/10628) Studio: import readFileSync in the chat continuation test
- [#10612](https://github.com/unslothai/unsloth/pull/10612) Restore what actually fails when NPP is missing from the torchcodec install
- [#10606](https://github.com/unslothai/unsloth/pull/10606) Studio: cover the unsigned 64-bit edge of a linked-folder identity
- [#10540](https://github.com/unslothai/unsloth/pull/10540) Windows installer: emit the native path helper instead of compiling it
- [#10319](https://github.com/unslothai/unsloth/pull/10319) Studio: try every address a site resolves to when fetching a page
- [#10604](https://github.com/unslothai/unsloth/pull/10604) Studio: remove the background staged desktop update and return to the classic update
- [#10537](https://github.com/unslothai/unsloth/pull/10537) Studio: capture the diffusion denoiser step into a CUDA graph
- [#10553](https://github.com/unslothai/unsloth/pull/10553) Studio: apply EXIF orientation to uploaded images
- [#10572](https://github.com/unslothai/unsloth/pull/10572) Studio: give the conversation archive's order a final tiebreaker
- [#10548](https://github.com/unslothai/unsloth/pull/10548) [Fix] Studio: show "Using tool" for active tool calls
- [#10557](https://github.com/unslothai/unsloth/pull/10557) Studio: report a Claude reply cut off by the context window as truncated
- [#10587](https://github.com/unslothai/unsloth/pull/10587) Ask for the NPP runtime by the name that has wheels on CUDA 13
- [#10602](https://github.com/unslothai/unsloth/pull/10602) Apply the pinned formatter to test_hub_token_caller_identity.py
- [#10603](https://github.com/unslothai/unsloth/pull/10603) Guard main against drifting out of its own formatting hook
- [#10560](https://github.com/unslothai/unsloth/pull/10560) Studio: avoid hidden PowerShell arguments in CLI setup and updates
- [#10506](https://github.com/unslothai/unsloth/pull/10506) Studio: skip torchcodec for torch below the compatibility table
- [#10564](https://github.com/unslothai/unsloth/pull/10564) Studio: find the AMD Vulkan driver through the Windows device registrations
- [#5336](https://github.com/unslothai/unsloth/pull/5336) fix: improve NVIDIA GPU detection and VS toolchain handling on Windows
- [#10575](https://github.com/unslothai/unsloth/pull/10575) Studio: clamp an unavailable reasoning effort to the nearest rung, not the weakest
- [#10601](https://github.com/unslothai/unsloth/pull/10601) Re-run the pinned ruff formatter over two test files
- [#10552](https://github.com/unslothai/unsloth/pull/10552) Studio: run document uploads off the event loop
- [#10596](https://github.com/unslothai/unsloth/pull/10596) Trim the comments in scripts/uninstall.sh and scripts/uninstall.ps1
- [#10508](https://github.com/unslothai/unsloth/pull/10508) Bound the /validate calls one autoload cascade can send
- [#10509](https://github.com/unslothai/unsloth/pull/10509) Attach dispatch hooks on a num_labels load that asked for fast_inference
- [#10593](https://github.com/unslothai/unsloth/pull/10593) Never import sentencepiece on Windows
- [#10264](https://github.com/unslothai/unsloth/pull/10264) Studio: verify Hub credentials before cache-backed reads
- [#10525](https://github.com/unslothai/unsloth/pull/10525) Studio: keep torchao quantisation from mutating inductor config, and make its int8 GEMM capture-safe
- [#10569](https://github.com/unslothai/unsloth/pull/10569) Keep model.device on the decoder while the embedding is offloaded to RAM
- [#10427](https://github.com/unslothai/unsloth/pull/10427) Resize Studio images and share Model Hub provider logos
- [#10586](https://github.com/unslothai/unsloth/pull/10586) Studio: remove OS tabs from generated agent command
- [#10554](https://github.com/unslothai/unsloth/pull/10554) Studio: stop reading a success line like "Errors: 0" as a failed tool result
- [#10536](https://github.com/unslothai/unsloth/pull/10536) Studio: decode a Windows device id before comparing it
- [#10578](https://github.com/unslothai/unsloth/pull/10578) Make run_ruff_format.py reject arguments it cannot honour instead of silently dropping them
- [#10327](https://github.com/unslothai/unsloth/pull/10327) Studio: detect models downloaded by Hermes
- [#10571](https://github.com/unslothai/unsloth/pull/10571) Key the recreated-project delete tests to state, not to a call count
- [#10223](https://github.com/unslothai/unsloth/pull/10223) Studio: only treat a real link definition as one
- [#10541](https://github.com/unslothai/unsloth/pull/10541) Studio: record what was on screen when an upload simulation fails
- [#10561](https://github.com/unslothai/unsloth/pull/10561) Bound RAG scope retirement by folder identity, not by the clock
- [#10547](https://github.com/unslothai/unsloth/pull/10547) Studio: clear dumpability before every crash the RAG probe child takes
- [#10538](https://github.com/unslothai/unsloth/pull/10538) Unbreak main: catch the install.ps1 handoff harness up with the block it drives
- [#10486](https://github.com/unslothai/unsloth/pull/10486) Studio: advise raising the iGPU memory allocation when a model overflows it

#### 🐛 New Issues
- [#10573](https://github.com/unslothai/unsloth/issues/10573) [Bug] Unsloth Desktop 0.1.807-beta (Windows) has "min_p and logit_bias not supported" when connected to vLLM `feature request` `bug` 💬4
- [#10671](https://github.com/unslothai/unsloth/issues/10671) [Bug] Long GGUF chat waiting for tool approval blocks queued chats despite free slots 💬2
- [#10637](https://github.com/unslothai/unsloth/issues/10637) [Feature]Download Dataset Button In Data Recipes `feature request` 💬2
- [#10595](https://github.com/unslothai/unsloth/issues/10595) [Bug] Do not create new 'cli' API key on every unsloth studio run `feature request` `bug` 💬1
- [#10613](https://github.com/unslothai/unsloth/issues/10613) Studio sets `GGML_CUDA_P2P=1` on non-NVLink GPUs (RTX 6000 Ada), silently corrupting all model output 💬1
- [#10610](https://github.com/unslothai/unsloth/issues/10610) [Feature] Open WebUI compatibility: model residency and explicit load/unload 💬1
- [#10590](https://github.com/unslothai/unsloth/issues/10590) [Feature] Expose all image training parameters in GUI `feature request` 💬1
- [#10631](https://github.com/unslothai/unsloth/issues/10631) [Feature] Model hub should support persistent / truly default settings `feature request` 💬1
- [#10598](https://github.com/unslothai/unsloth/issues/10598) install.sh floors at torch 2.4, the torchcodec table floors at 2.5, and nothing records the difference 💬1
- [#10579](https://github.com/unslothai/unsloth/issues/10579) Why the update always take forever? It has to re-install all the already installed dependencies from scratch. 💬1
- [#10676](https://github.com/unslothai/unsloth/issues/10676) [Unsloth Bug] Deep Research "Review plan" is inert until the page is reloaded
- [#10661](https://github.com/unslothai/unsloth/issues/10661) [Bug] Massive Spam in console when reloading Unsloth Studio while having Tabs open in browsers `feature request` `bug`
- [#10656](https://github.com/unslothai/unsloth/issues/10656) [Bug] Latest Version with Strix Halo. Fast inference but very slow prefill `feature request` `bug`
- [#10657](https://github.com/unslothai/unsloth/issues/10657) [Bug] Unsloth installer does not recognize ROCm 7.14 and installs PyTorch 2.11 with ROCm 7.2. `feature request` `bug`
- [#10619](https://github.com/unslothai/unsloth/issues/10619) [Bug] Studio PDF uploads reject scans or silently omit image-only pages
- [#10605](https://github.com/unslothai/unsloth/issues/10605) [Bug] When local model is a link on linux settings per model are not saved `feature request` `bug`
- [#10599](https://github.com/unslothai/unsloth/issues/10599) [Bug] Unsloth Studio / Desktop: a model downloaded before its MTP head or mmproj existed never picks them up, only delete + redownload fixes it
- [#10580](https://github.com/unslothai/unsloth/issues/10580) [Feature] Add kanban and independent task execution. Self learning training features `feature request`

#### 🔒 Closed Issues
- [#4](https://github.com/unslothai/unsloth/issues/4) Apple Silicon Support
- [#3450](https://github.com/unslothai/unsloth/issues/3450) [Bug] NameError: name 'slice_indices' is not defined - qwen 2 kaggle.
- [#4040](https://github.com/unslothai/unsloth/issues/4040) Qwen3-Coder-Next-Base OOM on 2xA100 QLoRA
- [#3533](https://github.com/unslothai/unsloth/issues/3533) [Bug] Unsloth fails to import on Intel Arc B580
- [#5141](https://github.com/unslothai/unsloth/issues/5141) Docs: current Codex local llama.cpp guide does not work as written with Responses API
- [#3399](https://github.com/unslothai/unsloth/issues/3399) [Bug] Cannot work with prompt-completion datasets
- [#1707](https://github.com/unslothai/unsloth/issues/1707) fine-tuning with multiple GPUs
- [#3650](https://github.com/unslothai/unsloth/issues/3650) [Bug] Gemma 3n - maximum recursion depth exceeded
- [#6834](https://github.com/unslothai/unsloth/issues/6834) [Bug] AMD Strix Halo APU: model loading incorrectly restricted to system RAM (22 GB) instead of GPU memory (110 GB free)
- [#981](https://github.com/unslothai/unsloth/issues/981) ImportError: cannot import name 'OpenAI' from 'openai' (/usr/local/lib/python3.10/dist-packages/openai/__init__.py)
- [#2364](https://github.com/unslothai/unsloth/issues/2364) ZeroDivisionError: Unsloth: All labels in your dataset are -100. Training losses will be all 0 (Phi3.5-mini and Phi4-mini)
- [#963](https://github.com/unslothai/unsloth/issues/963) TypeError in `orpo_trainer.train()`: 'str' object is not callable
- [#8473](https://github.com/unslothai/unsloth/issues/8473) Studio: installer reports an AMD GPU while the backend runs CPU-only, with no reconciliation between them
- [#3086](https://github.com/unslothai/unsloth/issues/3086) [Bug] NameError: name 'fetch_video' is not defined
- [#1869](https://github.com/unslothai/unsloth/issues/1869) CPT - Padding Error -- HELP
- [#10004](https://github.com/unslothai/unsloth/issues/10004) Studio CI: multi-turn determinism smoke fails intermittently on the merge base, not just on PRs
- [#5807](https://github.com/unslothai/unsloth/issues/5807) Automatically picks CPU forever :(
- [#4845](https://github.com/unslothai/unsloth/issues/4845) [Bug] GGUF export failed: Unsloth [Unsloth Studio]
- [#2497](https://github.com/unslothai/unsloth/issues/2497) [Bug] _fast_inner_training_loop exception ZeroDivisionError: division by zero
- [#2284](https://github.com/unslothai/unsloth/issues/2284) Are there any notebooks available for fine-tuning Aya Vision?
- [#868](https://github.com/unslothai/unsloth/issues/868) KeyError: 'EOS_TOKEN' when exporting GGUF with certain templates
- [#546](https://github.com/unslothai/unsloth/issues/546) SimPO Trained Llama 3 Model support
- [#493](https://github.com/unslothai/unsloth/issues/493) Support for Octpus LLM
- [#4831](https://github.com/unslothai/unsloth/issues/4831) [Bug] Failed to load model: Non-relative patterns are unsupported
- [#3243](https://github.com/unslothai/unsloth/issues/3243) [Feature] Is there any plan to support ByteDance-Seed/Seed-OSS-36B-Instruct
- [#1752](https://github.com/unslothai/unsloth/issues/1752) [pip installation problem using the recommended `pip command`]
- [#1526](https://github.com/unslothai/unsloth/issues/1526) SyntaxWarning: invalid escape sequence '\s'
- [#1419](https://github.com/unslothai/unsloth/issues/1419) Is there any way to continue training from that last checkpoint or overload the content contained in the output?
- [#488](https://github.com/unslothai/unsloth/issues/488) [Question] Plans for Phi3-mini-128k-instruct?
- [#207](https://github.com/unslothai/unsloth/issues/207) [Feature Request] Mamba compatability
- [#10544](https://github.com/unslothai/unsloth/issues/10544) Windows: conversation recall order is not total when two turns land in one clock tick
- [#4193](https://github.com/unslothai/unsloth/issues/4193) [Bug] Unsloth does not trained MoE Layer on GPT OSS
- [#3158](https://github.com/unslothai/unsloth/issues/3158) [Bug] GPT OSS Finetuning failed with compute metrics enabled during evaluation step
- [#2896](https://github.com/unslothai/unsloth/issues/2896) [Bug] AttributeError in UnslothGRPOTrainer.compute_loss after upgrading to trl==0.20.0
- [#1854](https://github.com/unslothai/unsloth/issues/1854) rope_scaling's short_factor field must have length 64, got 48 when using max_seq_length=64 in Phi-4-mini-instruct-unsloth-bnb-4bi
- [#1517](https://github.com/unslothai/unsloth/issues/1517) Will unsloth resize my image?
- [#10470](https://github.com/unslothai/unsloth/issues/10470) [Feature] Small UI Change: "Used tool:" to "Using tool:" While Tool Call in Progress
- [#10460](https://github.com/unslothai/unsloth/issues/10460) parity (windows-latest): test_a_non_ascii_marker_survives_the_rollback fails on both shells
- [#10352](https://github.com/unslothai/unsloth/issues/10352) [Bug] `unsloth chat` can load the wrong GGUF when multiple unrelated GGUFs share a directory
- [#10024](https://github.com/unslothai/unsloth/issues/10024) [Unsloth Bug] MiniMax-H3-GGUF models fail to resume/restart download ("used a different transport")
- [#9758](https://github.com/unslothai/unsloth/issues/9758) [Bug][Studio/Windows] Missing unsloth.exe console-script launcher makes the repair/update flow hang silently
- [#9729](https://github.com/unslothai/unsloth/issues/9729) Linux: install.sh detects no AMD GPU under WSL2 unless HSA_ENABLE_DXG_DETECTION is already set
- [#9600](https://github.com/unslothai/unsloth/issues/9600) [UnknownError Unable to establish IDB database file UnknownError: Unable to establish IDB database file]
- [#8991](https://github.com/unslothai/unsloth/issues/8991) [Bug] Install failed to create directory `$HOME\AppData\Local\uv\cache`: Cannot create a file when that file already exists. (os error 183)
- [#8746](https://github.com/unslothai/unsloth/issues/8746) [Bug] Unsloth Desktop - video generation tracking loss while navigating across app
- [#8077](https://github.com/unslothai/unsloth/issues/8077) [Bug] Speculative Decoding model not detected next to model if models found in custom folder
- [#5723](https://github.com/unslothai/unsloth/issues/5723) 安装unsloth studio存在困难
- [#5140](https://github.com/unslothai/unsloth/issues/5140) fails to export gguf on Colab
- [#4661](https://github.com/unslothai/unsloth/issues/4661) cannot import name 'ConstantLengthDataset' from 'trl.trainer.utils' (/usr/local/lib/python3.11/dist-packages/trl/trainer/utils.py)
- [#4536](https://github.com/unslothai/unsloth/issues/4536) [Bug] An error occurred while initializing the CUDA installation using Conda on DGX Spark.
- [#4086](https://github.com/unslothai/unsloth/issues/4086) [Bug] Llama 3.2 11b vision -using unsloth.ipynb
- [#3442](https://github.com/unslothai/unsloth/issues/3442) [Bug] 微调qwe3-4B模型，内存占用将近60G，训练集只有7M，请教一下为什么？
- [#1934](https://github.com/unslothai/unsloth/issues/1934) `Failed to create dynamic compiled modules` && `RecursionError` && `has no attribute "get"` && `functools.partial has no attribute apply_chat_template` && `name 'bias' is not defined` && `addmm() missing 1 required`
- [#1923](https://github.com/unslothai/unsloth/issues/1923) RuntimeError RunPod Pytorch 2.4.0
- [#949](https://github.com/unslothai/unsloth/issues/949) Add nvidia/Minitron-8B-Base support
- [#944](https://github.com/unslothai/unsloth/issues/944) GPU = NVIDIA GeForce RTX 4060 Ti 16G , Finetunning unsloth/Meta-Llama-3.1-8B-bnb-4bit OOM
- [#10595](https://github.com/unslothai/unsloth/issues/10595) [Bug] Do not create new 'cli' API key on every unsloth studio run
- [#10539](https://github.com/unslothai/unsloth/issues/10539) [Bug] Inline Graphs and Python visuals fail to Display in Unsloth Desktop
- [#10493](https://github.com/unslothai/unsloth/issues/10493) Linux torch repair can change the accelerator family without re-pinning torchao
- [#10208](https://github.com/unslothai/unsloth/issues/10208) [Feature] support audio-cpp / music generation
- [#10177](https://github.com/unslothai/unsloth/issues/10177) C:/Program Files/Git/v1/responses reports a length-truncated answer as status completed
- [#10013](https://github.com/unslothai/unsloth/issues/10013) [Feature] Support for Video Analysis in Chat Window and API Calls
- [#9650](https://github.com/unslothai/unsloth/issues/9650) dgxspark image ships transformers 4.57.1 and cannot load any qwen3_5 model (Qwen3.8); pinned tag is ~7 months behind
- [#9196](https://github.com/unslothai/unsloth/issues/9196) [Minor Bug] llama.cpp update toast never completes and it stays pinned even after download is done
- [#9168](https://github.com/unslothai/unsloth/issues/9168) Studio: the sidebar menus users actually open are still on the body modal layer, 382.6ms against 38.6ms
- [#6053](https://github.com/unslothai/unsloth/issues/6053) [Bug] Too much download for a MINOR Unsloth Studio update -- llama.cpp installation fell back to source build
- [#5078](https://github.com/unslothai/unsloth/issues/5078) Unstructured multi-file upload quota can be bypassed by omitting existing_file_ids
- [#2898](https://github.com/unslothai/unsloth/issues/2898) unsloth 8bit qlora failure
- [#2319](https://github.com/unslothai/unsloth/issues/2319) Unsloth 2025.3.19 patched 28 layers with 0 QKV layers, 0 O layers and 0 MLP layers.
- [#10562](https://github.com/unslothai/unsloth/issues/10562) [Feature] add support for ifm k2 models
- [#10155](https://github.com/unslothai/unsloth/issues/10155) [Bug] Cannot attach image when historical token count exceeds limit, even though post-compaction context has room
- [#10433](https://github.com/unslothai/unsloth/issues/10433) Studio installer gives torch 2.3 and 2.4 the torch-2.10 torchcodec line

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,073 · **Open issues:** 378 · **Last push:** <1h ago

On September 10, 2026, there were no new releases for AIBrix, but several important merged pull requests were made. Notable changes include the resolution of several bugs in the batch processing system, such as the concurrent validation of scheduled jobs (#2646) and improvements in output persistence resilience during execution (#2659). Additionally, the documentation for the LoRA guide was updated to fix the API key sample path (#2693), and enhancements like HTTPX telemetry were added to batch instrumentation (#2684). A potentially significant issue was raised concerning the PD router, highlighting the impact of crypto/rand shuffles and log formatting on the selectMu critical section (#2690).

#### ✅ Merged PRs
- [#2693](https://github.com/vllm-project/aibrix/pull/2693) [Docs] Fix api-key sample path in the LoRA guide
- [#2646](https://github.com/vllm-project/aibrix/pull/2646) [Bug] Batch: validate scheduled jobs concurrently
- [#2633](https://github.com/vllm-project/aibrix/pull/2633) fix(batch): scale concurrency with live capacity
- [#2684](https://github.com/vllm-project/aibrix/pull/2684) [Misc] Batch: Add HTTPX telemetry and call-site instrumentation.
- [#2658](https://github.com/vllm-project/aibrix/pull/2658) [Misc] Batch: Extend batch session retry handling with capped backoff to support more retry times.
- [#2659](https://github.com/vllm-project/aibrix/pull/2659) [Misc] Batch: Improve batch output persistence resilience during execution and finalization
- [#2691](https://github.com/vllm-project/aibrix/pull/2691) [Gateway] Keep crypto randomness and log formatting out of the PD selection critical section
- [#2682](https://github.com/vllm-project/aibrix/pull/2682) [Gateway] Add hybrid_cache_load prefill policy and new-tokens charge to the PD router
- [#2681](https://github.com/vllm-project/aibrix/pull/2681) [Gateway] Add token_load prefill score policy to the PD router

#### 🐛 New Issues
- [#2690](https://github.com/vllm-project/aibrix/issues/2690) PD router: crypto/rand shuffles and discarded V(4) log formatting dominate the selectMu critical section

#### 🔒 Closed Issues
- [#2680](https://github.com/vllm-project/aibrix/issues/2680) [RFC]: Token-weighted prefill load policies for the PD router (token_load, hybrid_cache_load)

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,701 · **Open issues:** 532 · **Last push:** 5h ago

On September 10, 2026, there were no new releases for Semantic Router. Among the merged pull requests, notable updates include the addition of end-to-end coverage for the reask signal and a fix to ensure classification requests remain safe during dynamic reloads. In terms of new issues, a significant bug was reported regarding evaluation latency being incorrectly calculated by the number of columns instead of rows, which could impact performance metrics. Additionally, several feature requests were introduced, including enhancements to the DSL validation process and the development of a capability-driven Console Training Studio.

#### ✅ Merged PRs
- [#3653](https://github.com/vllm-project/semantic-router/pull/3653) [Test] Add E2E coverage for the reask signal
- [#3657](https://github.com/vllm-project/semantic-router/pull/3657) [Bug] Keep classification requests safe across a dynamic reload
- [#3648](https://github.com/vllm-project/semantic-router/pull/3648) [Community] Add daii-0818 and ankit373 to Workgroups

#### 🐛 New Issues
- [#3642](https://github.com/vllm-project/semantic-router/issues/3642) [Bug] Evaluation latency is divided by the number of columns instead of the number of rows `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#3645](https://github.com/vllm-project/semantic-router/issues/3645) [Bug] Reload retirement waits only on ext_proc refs, not on classification API borrowers `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3677](https://github.com/vllm-project/semantic-router/issues/3677) [Bug] onnx build is broken on main: candle_binding.TextWindows is undefined, blocking all E2E 💬1
- [#3671](https://github.com/vllm-project/semantic-router/issues/3671) [Feature] Complexity backend follow-ups deliberately left out of #3542 `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#3674](https://github.com/vllm-project/semantic-router/issues/3674) [Feature] Make dsl validate and compile honor constraint diagnostics `enhancement` `needs-acceptance` `wg/mom-routing` 💬1
- [#3672](https://github.com/vllm-project/semantic-router/issues/3672) [Bug] ONNX router build fails after RAG windowing adds TextWindows `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3675](https://github.com/vllm-project/semantic-router/issues/3675) [CI/Build] Simplify development checks and organize CI ownership `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3679](https://github.com/vllm-project/semantic-router/issues/3679) [Bug] Preserve mmBERT availability across embedding initialization order `needs-acceptance` `wg/router-models-inference-runtime`
- [#3658](https://github.com/vllm-project/semantic-router/issues/3658) [Feature] Report why a decision won, not just which one `enhancement` `needs-acceptance` `wg/mom-routing`
- [#3670](https://github.com/vllm-project/semantic-router/issues/3670) [Feature] Build the capability-driven Console Training Studio and vertical slices `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3669](https://github.com/vllm-project/semantic-router/issues/3669) [Feature] Add hardware-aware training workers, leases, and scheduling `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3668](https://github.com/vllm-project/semantic-router/issues/3668) [Feature] Add an ArchitectureDriver SDK and generic fine-tune executor `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3667](https://github.com/vllm-project/semantic-router/issues/3667) [Feature] Migrate MLP selector training with validation and runtime parity `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3666](https://github.com/vllm-project/semantic-router/issues/3666) [Feature] Replace approximate SVM export with a conformant unified trainer `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3665](https://github.com/vllm-project/semantic-router/issues/3665) [Feature] Migrate KMeans selector training to the unified contract `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3664](https://github.com/vllm-project/semantic-router/issues/3664) [Feature] Migrate KNN selector training to the unified contract `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3663](https://github.com/vllm-project/semantic-router/issues/3663) [Feature] Build selector data, objective, feature, evaluation, and parity foundations `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3662](https://github.com/vllm-project/semantic-router/issues/3662) [Feature] Plan trainer, architecture, hardware, and runtime capabilities `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3661](https://github.com/vllm-project/semantic-router/issues/3661) [Feature] Define canonical training resources, RunGraph, and API contracts `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3660](https://github.com/vllm-project/semantic-router/issues/3660) [Epic] Deliver a capability-driven Router Training Studio `enhancement` `roadmap` `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#2122](https://github.com/vllm-project/semantic-router/issues/2122) [Bug] Reject unsupported decision-rule operators during config validation
- [#2921](https://github.com/vllm-project/semantic-router/issues/2921) [Feature] Define the score.v1 contract for complexity backends
- [#3054](https://github.com/vllm-project/semantic-router/issues/3054) [Feature] Support open-ended context signal ranges and overflow-safe routing
- [#3407](https://github.com/vllm-project/semantic-router/issues/3407) [Bug] Qwen3 embedding advertises a 32768 sequence limit the attention path cannot allocate for
- [#3532](https://github.com/vllm-project/semantic-router/issues/3532) [Bug] Runtime model downloader fetches multi-GB ONNX exports the candle embedding runtime never loads
- [#3645](https://github.com/vllm-project/semantic-router/issues/3645) [Bug] Reload retirement waits only on ext_proc refs, not on classification API borrowers
- [#3385](https://github.com/vllm-project/semantic-router/issues/3385) [Bug] RAG retrieval embeds only the first 512 tokens of a query
- [#3535](https://github.com/vllm-project/semantic-router/issues/3535) [Bug] mmbert32k-feedback-detector-merged ships two label maps that disagree
- [#3382](https://github.com/vllm-project/semantic-router/issues/3382) [Feature] Migrate the remaining candle models to the shared chunked attention kernel
- [#3366](https://github.com/vllm-project/semantic-router/issues/3366) [Bug] Semantic cache collides on long prompts sharing a prefix
- [#3279](https://github.com/vllm-project/semantic-router/issues/3279) [Feature] Add bounded shadow model dispatch and replay capture
- [#3387](https://github.com/vllm-project/semantic-router/issues/3387) [Bug] ReMoM last_n_tokens compaction cuts mid-rune and misjudges CJK budget
- [#3558](https://github.com/vllm-project/semantic-router/issues/3558) [Bug] Intent classifier trains on the MMLU-Pro test split
- [#3641](https://github.com/vllm-project/semantic-router/issues/3641) [Bug] Hallucination detection skips the part of an answer past the 512-token window
- [#3677](https://github.com/vllm-project/semantic-router/issues/3677) [Bug] onnx build is broken on main: candle_binding.TextWindows is undefined, blocking all E2E
- [#3630](https://github.com/vllm-project/semantic-router/issues/3630) [Feature] Add full-screen benchmark dialogs to the Model Hub

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*