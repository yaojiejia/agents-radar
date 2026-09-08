# 📡 AI Ecosystem Digest — 2026-09-08

> Generated 2026-09-08 00:57 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,364 | 15 | 19 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 122,246 | 18 | 0 | 50 | 1 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,854 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,141 | 13 | 3 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 205,696 | 25 | 8 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,702 | 16 | 12 | 1 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,147 | 267 | 172 | 180 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 243,048 | 32 | 4 | 0 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,191 | 38 | 26 | 41 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,603 | 9 | 7 | 64 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 127,412 | 18 | 13 | 22 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 180,417 | 8 | 13 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,232 | 29 | 7 | 53 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,781 | 14 | 7 | 30 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,066 | 2 | 0 | 2 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,649 | 12 | 5 | 2 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released version [rust-v0.154.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6) with new features and fixes.  
- **Gemini CLI** announced the release of [v0.60.0-nightly.20260907.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260907.g85aca163f).  
- **Qwen Code** made multiple releases, including [v0.23.1-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.2).  
- **OpenCode** merged [PR #47851](https://github.com/anomalyco/opencode/pull/47851) adding the Moonshot provider as a notable feature.  
- **OpenClaw** encountered a highly discussed issue with [#140908](https://github.com/openclaw/openclaw/issues/140908) due to post-upgrade migration failures that generated 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,364 · **Open issues:** 12,847 · **Last push:** 1d ago

On September 8, 2026, there were no new releases or merged pull requests for Claude Code, indicating a routine maintenance day. However, the team opened several new issues, with notable mentions including the bug report (#92734) regarding the teleport feature that drops prompt history during web-to-local handoffs and another critical issue (#92749) reporting a segmentation fault at startup on Linux from version 2.1.251 onward. Additionally, users raised concerns about the spend meter's rate model not accurately expressing real prices (#92751) and intermittent freezing issues with scheduled-task sessions (#92753). These new discussions highlight ongoing challenges and features that may require further attention in upcoming updates.

#### 🐛 New Issues
- [#92734](https://github.com/anthropics/claude-code/issues/92734) teleport: web→local handoff drops prompt history, and memory resolves to a different project key than transcripts `bug` `has repro` `platform:macos` `area:core` 💬1
- [#92742](https://github.com/anthropics/claude-code/issues/92742) [FEEDBACK] Claude is dumb AF sometimes. [BUG] Ratelimit interuppts feeback `bug` `platform:linux` `area:core` `memory` 💬1
- [#92754](https://github.com/anthropics/claude-code/issues/92754) I need more information to generate an appropriate GitHub issue title. Please provide the bug report details, such as: - What error message did you encounter? - What were you trying to do? - What was the unexpected behavior? - What system/environment are `bug` `platform:windows` `needs-info`
- [#92753](https://github.com/anthropics/claude-code/issues/92753) Scheduled-task sessions intermittently freeze permanently on first/second tool call, never releasing their concurrency slot `bug` `platform:macos` `area:core` `area:permissions`
- [#92752](https://github.com/anthropics/claude-code/issues/92752) [BUG] Project knowledge index serves stale file state after update/delete/re-upload, and diverges from the interface file list `invalid`
- [#92751](https://github.com/anthropics/claude-code/issues/92751) [BUG] Spend meter's rate model can't express real prices: pricing.multiplier is global and capped at 1, and inference_geo is ignored `bug` `area:cost`
- [#92750](https://github.com/anthropics/claude-code/issues/92750) Sub-agents receive the auto-memory index and skill listing, contrary to the docs — custom agent definitions included `bug` `has repro` `platform:macos` `area:agents`
- [#92749](https://github.com/anthropics/claude-code/issues/92749) [BUG] Segfault at startup on Linux from 2.1.251 onward (bundled Bun 1.4.1); 2.1.243 with Bun 1.4.0 works `bug` `has repro` `platform:linux` `area:packaging`
- [#92748](https://github.com/anthropics/claude-code/issues/92748) Feature request: store MCP OAuth tokens separately from the Claude account credential (multi-account machines) `enhancement` `area:auth` `area:mcp`
- [#92747](https://github.com/anthropics/claude-code/issues/92747) [Bug] Agent thrashing and failing to focus on user issue `bug` `platform:macos` `area:model` `needs-repro`
- [#92729](https://github.com/anthropics/claude-code/issues/92729) MCP: server advertising `resources` capability is treated as having none `bug` `has repro` `platform:macos` `area:mcp`
- [#92746](https://github.com/anthropics/claude-code/issues/92746) [BUG] RemoteTrigger action=list returns has_more/next_cursor but ignores the cursor argument, so routine lists beyond 20 cannot be paged `bug` `has repro` `platform:wsl` `area:routines`
- [#92745](https://github.com/anthropics/claude-code/issues/92745) [Feature Request] Fast mode in the desktop app (Code tab): meter it against plan usage at a multiplier, like Codex, instead of a separate usage-credits wallet `duplicate` `area:cost` `area:desktop`
- [#92744](https://github.com/anthropics/claude-code/issues/92744) [Bug] Anthropic API Error: Content flagged by safety filters - unable to process request `duplicate` `platform:windows` `area:model`
- [#92743](https://github.com/anthropics/claude-code/issues/92743) [Feature Request] Add confirmation step before invoking agentic loops to prevent excessive API credit consumption `enhancement` `area:cost` `area:agents`

#### 🔒 Closed Issues
- [#67051](https://github.com/anthropics/claude-code/issues/67051) Assistant text before/between tool calls is not rendered in the CLI, while hooks and the transcript still see it
- [#17822](https://github.com/anthropics/claude-code/issues/17822) [BUG] VSCode Extension fails to load with ServiceWorker error when ~/.claude/projects folder doesn't exist
- [#84802](https://github.com/anthropics/claude-code/issues/84802) [Bug] Claude Code corrupts source artifacts during file operations and validation **DISOBEDIENT CUNT**
- [#76382](https://github.com/anthropics/claude-code/issues/76382) [Bug] SendMessage(to: "main") from background subagent silently dropped instead of reaching spawner
- [#83723](https://github.com/anthropics/claude-code/issues/83723) [BUG] Apps gateway desktop overlay has no `chatTabEnabled` key, so bootstrap-configured Claude Desktop permanently loses the Chat tab (rejected at boot through 2.1.221)
- [#77973](https://github.com/anthropics/claude-code/issues/77973) [Bug] Background worker cannot read Keychain credentials after foreground→background handoff in 2.1.211
- [#84313](https://github.com/anthropics/claude-code/issues/84313) Safeguard false-positive on legal research prompts; /feedback returns 403
- [#74295](https://github.com/anthropics/claude-code/issues/74295) [Bug] Anthropic API Error: Context accumulation triggers false positive safety filters across multi-file sessions
- [#79511](https://github.com/anthropics/claude-code/issues/79511) [Bug] `claude agents` command fails when logged out with no re-authentication flow
- [#79036](https://github.com/anthropics/claude-code/issues/79036) [BUG] Agent View background-session input: Ctrl+b does nothing on 1st press, moves cursor back 2 characters on 2nd press
- [#84821](https://github.com/anthropics/claude-code/issues/84821) [BUG] Cyber-safeguard feedback loop: discussing a previous false positive is itself the strongest trigger for new flags, locking the user out of the session
- [#84842](https://github.com/anthropics/claude-code/issues/84842) [Bug] Claude model performance degradation: Ignoring user corrections and persisting with incorrect solutions across multiple turns
- [#80244](https://github.com/anthropics/claude-code/issues/80244) [Bug] Agent view misclassifies incomplete conversations as completed, blocking retrieval
- [#77678](https://github.com/anthropics/claude-code/issues/77678) [BUG] SSH fails with "No user exists for uid 501" in background/agent-view mode, but works fine in standalone CLI
- [#84852](https://github.com/anthropics/claude-code/issues/84852) [BUG] VS Code extension should support local API without login prompt
- [#84853](https://github.com/anthropics/claude-code/issues/84853) [BUG]
- [#84846](https://github.com/anthropics/claude-code/issues/84846) [Bug] Incorrect model switch from Fable to Opus on MCU security implementation
- [#84845](https://github.com/anthropics/claude-code/issues/84845) [Bug] Claude Code generating non-American English spellings in code output
- [#84825](https://github.com/anthropics/claude-code/issues/84825) I appreciate you sharing this reflection, but this appears to be a personal project retrospective rather than a bug report for Claude Code. This doesn't describe a technical issue with Claude Code itself that would warrant a GitHub issue. Instead, it docu

### OpenAI Codex (`openai/codex`)

**Stars:** 122,246 · **Open issues:** 15,844 · **Last push:** <1h ago

On September 8, 2026, OpenAI Codex released version rust-v0.154.0-alpha.6, which includes various enhancements focused on improving user experience and functionality. Notable merged pull requests included the addition of macOS user verification with Secure Enclave signing, new capabilities for live WebRTC voice conversations in the TUI, and the introduction of a stable app-server version comparison helper. There were also several significant optimizations related to Guardian context management and TUI performance. Among the new issues, the report of a Windows desktop app crash when closing the last in-app Browser Use tab garnered particular attention, highlighting potential stability concerns.

#### 🚀 New Releases
- [rust-v0.154.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6) 0.154.0-alpha.6

#### ✅ Merged PRs
- [#43624](https://github.com/openai/codex/pull/43624) Add macOS user verification with Secure Enclave signing
- [#43622](https://github.com/openai/codex/pull/43622) Warn when the connected Codex service is older than the CLI
- [#43621](https://github.com/openai/codex/pull/43621) Add worktree classification to thread telemetry
- [#43619](https://github.com/openai/codex/pull/43619) Add a stable TUI/app-server version comparison helper
- [#43604](https://github.com/openai/codex/pull/43604) Exclude base instructions from the bundled model catalog
- [#43603](https://github.com/openai/codex/pull/43603) Recover missed tmux resize notifications in the TUI
- [#43602](https://github.com/openai/codex/pull/43602) Move Guardian REPL evidence rendering into the shared context registry
- [#43601](https://github.com/openai/codex/pull/43601) Move Guardian image selection into shared context sections
- [#43599](https://github.com/openai/codex/pull/43599) Move trusted skill evidence into the Guardian context registry
- [#43597](https://github.com/openai/codex/pull/43597) Move trusted tool metadata into shared Guardian context
- [#43595](https://github.com/openai/codex/pull/43595) Centralize bounded Guardian review evidence in guardian-context
- [#43584](https://github.com/openai/codex/pull/43584) Remove a stale transcript field assignment from the TUI
- [#43581](https://github.com/openai/codex/pull/43581) Add live WebRTC voice conversations to the TUI
- [#43576](https://github.com/openai/codex/pull/43576) Group adjacent computer actions in the TUI
- [#43572](https://github.com/openai/codex/pull/43572) Make the managed app-server shutdown grace period configurable
- [#43570](https://github.com/openai/codex/pull/43570) Manage synchronous Guardian reviewers through the thread manager
- [#43568](https://github.com/openai/codex/pull/43568) Wire app-server user verification RPCs to the native provider
- [#43562](https://github.com/openai/codex/pull/43562) Add an explicit app-server daemon update command
- [#43558](https://github.com/openai/codex/pull/43558) Show completion timestamps after successful TUI turns
- [#43552](https://github.com/openai/codex/pull/43552) Record the launched app-server executable identity in PID files
- [#43547](https://github.com/openai/codex/pull/43547) Add user-verification provider abstractions and RPC adapters
- [#43545](https://github.com/openai/codex/pull/43545) Preserve fork runtime versions without loading full model context
- [#43542](https://github.com/openai/codex/pull/43542) Make app-server daemon automatic updates configurable
- [#43540](https://github.com/openai/codex/pull/43540) Preserve the multi-agent version when forking at a turn cutoff
- [#43538](https://github.com/openai/codex/pull/43538) Move Guardian permission context into the shared section registry
- [#43534](https://github.com/openai/codex/pull/43534) Preserve Guardian context sections and share planned-action rendering
- [#43533](https://github.com/openai/codex/pull/43533) Fix jemalloc tools and compiler flags for Bazel musl builds
- [#43529](https://github.com/openai/codex/pull/43529) Ensure the standalone updater runs on managed daemon starts
- [#43527](https://github.com/openai/codex/pull/43527) Discount an approval's own code-mode wrapper from Guardian score lag
- [#43524](https://github.com/openai/codex/pull/43524) Restrict MCP user verification and add workspace-scoped identity
- [#43521](https://github.com/openai/codex/pull/43521) Preserve standalone release pins during daemon updates
- [#43519](https://github.com/openai/codex/pull/43519) Set `recursion_limit` to 256 for app-server, exec, and TUI
- [#43513](https://github.com/openai/codex/pull/43513) Expose a stable executor build identity in environment metadata
- [#43504](https://github.com/openai/codex/pull/43504) Treat zombie processes as inactive in the Unix PID backend
- [#43495](https://github.com/openai/codex/pull/43495) Allow internal sessions to fork from selected history
- [#43494](https://github.com/openai/codex/pull/43494) Limit archive rollout reads to requested threads
- [#43491](https://github.com/openai/codex/pull/43491) Include unloaded children in multi-agent v2 environment context
- [#43490](https://github.com/openai/codex/pull/43490) Expose shared Guardian reviewer helpers through `guardian_review`
- [#43478](https://github.com/openai/codex/pull/43478) Retain inherited Guardian instructions in standalone forks
- [#43472](https://github.com/openai/codex/pull/43472) Recover missing Guardian root instructions in acceptance order
- [#43462](https://github.com/openai/codex/pull/43462) Remove legacy Guardian approval review paths
- [#43458](https://github.com/openai/codex/pull/43458) Centralize Guardian context mode and checkpoint policy
- [#43456](https://github.com/openai/codex/pull/43456) Wait for thread idle before rollback in model-switching tests
- [#43454](https://github.com/openai/codex/pull/43454) Add diagnostic labels to shell snapshot capture metrics
- [#43447](https://github.com/openai/codex/pull/43447) Route MCP elicitations through the shared approval decision path
- [#43444](https://github.com/openai/codex/pull/43444) Pin V8 release manifests and prevent published release replacement
- [#43442](https://github.com/openai/codex/pull/43442) Keep Guardian review evidence consistent and reject stale approvals
- [#43432](https://github.com/openai/codex/pull/43432) Route approvals through the extension decision API
- [#43428](https://github.com/openai/codex/pull/43428) Notify opted-in stdio MCP servers of auth changes
- [#43426](https://github.com/openai/codex/pull/43426) Handle Luna HTTP requests in guardian history tests

#### 🐛 New Issues
- [#43368](https://github.com/openai/codex/issues/43368) Selected model is at capacity. Please try a different model. `bug` `app` `connectivity` 💬3
- [#43347](https://github.com/openai/codex/issues/43347) [Windows][26.901.5280/6511] Closing the last in-app Browser Use tab crashes the desktop app `bug` `windows-os` `app` `browser` 💬4
- [#43536](https://github.com/openai/codex/issues/43536) [iOS Remote] Host connects and lists tasks, but messages fail to load and new local tasks fail (1.2026.237) `bug` `iOS` `app-server` `remote` 💬2
- [#43632](https://github.com/openai/codex/issues/43632) Windows Desktop: scheduled heartbeat answers an older request in a long thread; user also reports UI lag `bug` `model-behavior` `windows-os` `app` 💬1
- [#43629](https://github.com/openai/codex/issues/43629) Windows Agent Build Blocked by Unidentified Policy `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#43628](https://github.com/openai/codex/issues/43628) Codex Windows fails to add a WSL project with “Failed to create project” `bug` `windows-os` `app` `app-server` 💬1
- [#43627](https://github.com/openai/codex/issues/43627) Mobile client lists VS Code task but cannot retrieve its messages `bug` `iOS` `session` 💬1
- [#43625](https://github.com/openai/codex/issues/43625) Failed to spawn managed Computer Use service `bug` `app` `computer-use` 💬1
- [#43608](https://github.com/openai/codex/issues/43608) macOS: locale-dependent PID start-time comparison deletes live app-server daemon tracking record `bug` `CLI` `app-server` 💬1
- [#43620](https://github.com/openai/codex/issues/43620) [Bug] Active Desktop task updates without rendering progress in main chat `bug` `app` 💬1
- [#43631](https://github.com/openai/codex/issues/43631) [VS Code][Windows] Browser Use tools not exposed despite IAB session route; auth requests return 401/403 `bug` `windows-os` `extension` `auth`
- [#43630](https://github.com/openai/codex/issues/43630) Deep Research repeatedly fails mid-report with “Resume stream unavailable” and cannot recover final output `bug` `connectivity`
- [#43626](https://github.com/openai/codex/issues/43626) [Codex App][Linux] Environment capture corrupts multiline exported Bash functions `bug` `app` `app-server`
- [#43615](https://github.com/openai/codex/issues/43615) Feature request: show latest prompt-cache hit rate in the CLI status line `enhancement` `TUI` `rate-limits` `CLI`
- [#43623](https://github.com/openai/codex/issues/43623) session renamed bug `bug` `CLI` `session`
- [#43618](https://github.com/openai/codex/issues/43618) [Desktop][Linux] Completed-turn collapse hides assistant replies — root cause and minimal patch `bug` `app`
- [#43617](https://github.com/openai/codex/issues/43617) Codex popout window bug `bug` `app`
- [#43616](https://github.com/openai/codex/issues/43616) Windows: native TLS fallback misses SEC_E_ILLEGAL_MESSAGE (0x80090326), failing five HTTP-client tests `bug` `windows-os` `connectivity`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,854 · **Open issues:** 842 · **Last push:** 23h ago

On September 8, 2026, Gemini CLI announced the release of version v0.60.0-nightly.20260907.g85aca163f, which introduced updates detailed in a full changelog. There were no merged pull requests or new issues reported in the last 24 hours, indicating a routine maintenance day. The release continues to refine functionality, but specific new features were not highlighted.

#### 🚀 New Releases
- [v0.60.0-nightly.20260907.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260907.g85aca163f) Release v0.60.0-nightly.20260907.g85aca163f

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,141 · **Open issues:** 2,311 · **Last push:** 3d ago

On September 8, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. However, the day saw several new issues reported, with notable concerns including the #4756 issue regarding the Windows app's requirement to archive idle project sessions before creating new local sessions and the #4757 concern about the `--yolo` / `--allow-all` flags being blocked due to a fail-closed bypass restriction for certain accounts. Additionally, users reported #4753, highlighting a regression in session resume functionality with decreased timeout durations in version 1.0.83. Overall, the day consisted mostly of routine monitoring and issue reporting without significant changes to the codebase.

#### 🐛 New Issues
- [#4756](https://github.com/github/copilot-cli/issues/4756) Windows app requires archiving every idle project session before creating a new Local session `triage` 💬2
- [#4757](https://github.com/github/copilot-cli/issues/4757) `--yolo` / `--allow-all` blocked for the whole session by a fail-closed bypass restriction applied on an account with NO managed policy `triage` 💬3
- [#4753](https://github.com/github/copilot-cli/issues/4753) v1.0.83: session resume cancels in-flight stdio MCP server connections (~1s timeout, was ~16s in v1.0.82) `triage` 💬2
- [#4759](https://github.com/github/copilot-cli/issues/4759) Copilot CLI should send MCP cancellation requests `triage` 💬1
- [#4758](https://github.com/github/copilot-cli/issues/4758) luciomorenocarre@gmail.com `triage` `invalid` 💬1
- [#4755](https://github.com/github/copilot-cli/issues/4755) Session wedges permanently when a queued-lane message lands at turn end (idle finalization suppressed, queue never drains) `triage` 💬1
- [#4745](https://github.com/github/copilot-cli/issues/4745) sandbox:///mnt/agents/output/member_one_fcu_banking.zipv `invalid` 💬1
- [#4760](https://github.com/github/copilot-cli/issues/4760) Background subagent start events deferred until parent task completes (1.0.83) `triage`
- [#4754](https://github.com/github/copilot-cli/issues/4754) Deleting an evicted session silently no-ops: session reappears after restart, and ON DELETE CASCADE never fires `triage`
- [#4752](https://github.com/github/copilot-cli/issues/4752) --agent <name> doesn't recognize custom agents loaded via --add-dir `triage`
- [#4750](https://github.com/github/copilot-cli/issues/4750) Copilot TUI hogs CPU `triage`
- [#4749](https://github.com/github/copilot-cli/issues/4749) Azure MCP learn=true calls time out after 180s in Copilot CLI 1.0.83-5 `triage`
- [#4747](https://github.com/github/copilot-cli/issues/4747) /refine failures `triage`

#### 🔒 Closed Issues
- [#1999](https://github.com/github/copilot-cli/issues/1999) Cannot enter @ on German keyboard (Alt-Gr + q)
- [#4758](https://github.com/github/copilot-cli/issues/4758) luciomorenocarre@gmail.com
- [#4745](https://github.com/github/copilot-cli/issues/4745) sandbox:///mnt/agents/output/member_one_fcu_banking.zipv

### OpenCode (`anomalyco/opencode`)

**Stars:** 205,696 · **Open issues:** 5,718 · **Last push:** <1h ago

On September 8, 2026, OpenCode had no new releases, but several important developments occurred with merged pull requests. Significant updates include the addition of the Moonshot provider (#47851) and the new serving path for updates under opencode.ai/update (#47858). A fix was implemented to ensure tab progress remains visible on hover (#47835). Among the newly reported issues, #47842 stands out, highlighting a functional problem with OpenCode in Cursor, which has garnered significant attention from users.

#### ✅ Merged PRs
- [#47851](https://github.com/anomalyco/opencode/pull/47851) feat(ai): add Moonshot provider
- [#47835](https://github.com/anomalyco/opencode/pull/47835) fix(app): keep tab progress visible on hover
- [#47858](https://github.com/anomalyco/opencode/pull/47858) feat(updates): serve updates under opencode.ai/update

#### 🐛 New Issues
- [#47842](https://github.com/anomalyco/opencode/issues/47842) When using OpenCode in Cursor doesn't work 💬7
- [#47794](https://github.com/anomalyco/opencode/issues/47794) [FEATURE]: Improve Auto Router Error Messaging and Model Status Indicators 💬4
- [#47820](https://github.com/anomalyco/opencode/issues/47820) Tencent WorkBuddy (CodeBuddy) custom model rejected 💬3
- [#47801](https://github.com/anomalyco/opencode/issues/47801) ошибка Forbidden: {"model":""} при использования любой нейросети 💬3
- [#47850](https://github.com/anomalyco/opencode/issues/47850) Opencode desktop update doesn't wait for prompt to finish 💬2
- [#47836](https://github.com/anomalyco/opencode/issues/47836) tui: bindable "set as default model for this agent" action in model dialog `2.0` 💬2
- [#47824](https://github.com/anomalyco/opencode/issues/47824) subagent触发越权操作导致的长时无人监管任务的阻塞 💬2
- [#47834](https://github.com/anomalyco/opencode/issues/47834) Mobile <Client> no muestra sesiones aunque la API sí las devuelve (283 sesiones) 💬2
- [#47831](https://github.com/anomalyco/opencode/issues/47831) Invalid tool-call repair drops the required `tool` field for unnamed calls 💬2
- [#47807](https://github.com/anomalyco/opencode/issues/47807) [FEATURE]: Option to start for Desktop App 💬2
- [#47862](https://github.com/anomalyco/opencode/issues/47862) [FEATURE]: Option to disable “Allow always” confirmation 💬1
- [#47860](https://github.com/anomalyco/opencode/issues/47860) The OpenCode Desktop Application keeps giving a "Continuous Use Error". `needs:compliance` 💬1
- [#47854](https://github.com/anomalyco/opencode/issues/47854) EventV2 cold history duplicates large snapshot payloads and amplifies SQLite storage/reads 💬1
- [#47840](https://github.com/anomalyco/opencode/issues/47840) [FEATURE]:Appimage for desktop app 💬1
- [#47815](https://github.com/anomalyco/opencode/issues/47815) Setting provider.<id>.options.baseURL changes which model opencode picks by default 💬1
- [#47830](https://github.com/anomalyco/opencode/issues/47830) Invalid tool-call repair drops required tool field for unnamed calls 💬1
- [#47788](https://github.com/anomalyco/opencode/issues/47788) DeepSeek BYOK: local cost meter under-reports API spend — models.dev static prices don't reflect peak/off-peak pricing 💬1
- [#47825](https://github.com/anomalyco/opencode/issues/47825) fix(core): a session-wide "always" approval overrides a subagent's explicit deny (findLast ordering) 💬1
- [#47822](https://github.com/anomalyco/opencode/issues/47822) [FEATURE]: task tool results should carry child-session duration and token metrics 💬1
- [#47863](https://github.com/anomalyco/opencode/issues/47863) fix(vertex): @ai-sdk/google-vertex serializer emits empty model parts: [] on empty reasoning turns (missed by #30463)
- [#47849](https://github.com/anomalyco/opencode/issues/47849) Clearing time.archived silently fails, so archived sessions cannot be restored
- [#47839](https://github.com/anomalyco/opencode/issues/47839) server: case-sensitive duplicate locations on Windows break instruction init (core/instructions) `2.0`
- [#47819](https://github.com/anomalyco/opencode/issues/47819) fix(core): custom agent frontmatter permission adds to defaults instead of replacing them
- [#47817](https://github.com/anomalyco/opencode/issues/47817) TUI auto-approve mode approves permission requests from other clients attached to the same server
- [#47791](https://github.com/anomalyco/opencode/issues/47791) [FEATURE]: Bump gitlab-ai-provider to 6.15.0 (adds GPT-6 Astra)

#### 🔒 Closed Issues
- [#47842](https://github.com/anomalyco/opencode/issues/47842) When using OpenCode in Cursor doesn't work
- [#47794](https://github.com/anomalyco/opencode/issues/47794) [FEATURE]: Improve Auto Router Error Messaging and Model Status Indicators
- [#47801](https://github.com/anomalyco/opencode/issues/47801) ошибка Forbidden: {"model":""} при использования любой нейросети
- [#47824](https://github.com/anomalyco/opencode/issues/47824) subagent触发越权操作导致的长时无人监管任务的阻塞
- [#47834](https://github.com/anomalyco/opencode/issues/47834) Mobile <Client> no muestra sesiones aunque la API sí las devuelve (283 sesiones)
- [#40663](https://github.com/anomalyco/opencode/issues/40663) provider: amazon-bedrock models not listed with AWS credential/profile auth (next channel)
- [#47840](https://github.com/anomalyco/opencode/issues/47840) [FEATURE]:Appimage for desktop app
- [#47791](https://github.com/anomalyco/opencode/issues/47791) [FEATURE]: Bump gitlab-ai-provider to 6.15.0 (adds GPT-6 Astra)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,702 · **Open issues:** 1,339 · **Last push:** <1h ago

On September 8, 2026, Qwen Code released v0.23.1-preview.2, enhancing the web shell to visualize and manage dynamic workflow runs while optimizing session workflow projection. Additionally, v0.23.0-nightly.20260907.f1ed3bc31a introduced similar features, reinforcing the project's ongoing improvements. Among merged pull requests, PR #11308 successfully restored worktree-task routes, addressing a critical routing issue. The day also saw the emergence of a notable issue, #11303, which reported a significant memory leak in the Windows version of the qwen-cli, with approximately 347 processes consuming around 2.8 GB after 12 hours of uptime.

#### 🚀 New Releases
- [v0.23.1-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.2) Release v0.23.1-preview.2
- [v0.23.0-nightly.20260907.f1ed3bc31a](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260907.f1ed3bc31a) Release v0.23.0-nightly.20260907.f1ed3bc31a
- [cua-driver-rs-v0.20.4](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.4) cua-driver-rs v0.20.4

#### ✅ Merged PRs
- [#11308](https://github.com/QwenLM/qwen-code/pull/11308) fix(channels): restore worktree-task routes through the managed load path

#### 🐛 New Issues
- [#11303](https://github.com/QwenLM/qwen-code/issues/11303) [Windows] qwen-cli (VS Code Companion) leaks headless conhost.exe ConPTY processes - 347 processes / ~2.8 GB after ~12h uptime `priority/P1` `type/bug` `category/performance` `scope/shell` 💬6
- [#11272](https://github.com/QwenLM/qwen-code/issues/11272) bug(mcp): cancelling a long-running stdio tool call kills the MCP server, and it never comes back (unrecoverable in Channel mode) `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬3
- [#11307](https://github.com/QwenLM/qwen-code/issues/11307) Main CI failed: E2E Tests on f071516e18ad `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11249](https://github.com/QwenLM/qwen-code/issues/11249) Main CI failed: Qwen Code CI on 421393d51df6 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11231](https://github.com/QwenLM/qwen-code/issues/11231) Main CI failed: Qwen Code CI on 62588d28920e `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#11301](https://github.com/QwenLM/qwen-code/issues/11301) fix(build): remove heavy build/bundle from prepare hook `priority/P3` `category/development` `scope/build-system` `scope/ci-cd` 💬2
- [#11274](https://github.com/QwenLM/qwen-code/issues/11274) tracking(daemon): Decouple Skill management from child and refresh explicit sessions in PRs under 1000 lines `priority/P3` `type/feature-request` `category/cli` `scope/session-management` 💬2
- [#11253](https://github.com/QwenLM/qwen-code/issues/11253) Branch creation rollback can discard commits made by a failing post-checkout hook `priority/P2` `type/bug` `category/core` `scope/git` 💬2
- [#11243](https://github.com/QwenLM/qwen-code/issues/11243) feat(daemon): expose update status in WebShell and auto-follow nightly releases `priority/P2` `type/feature-request` `category/platform` `scope/installation` 💬2
- [#11317](https://github.com/QwenLM/qwen-code/issues/11317) Main CI failed: Qwen Code CI on f1ed3bc31a2b `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11310](https://github.com/QwenLM/qwen-code/issues/11310) Deferred review findings from PR #11286: test(e2e): isolate protocol checks from model service 💬1
- [#11292](https://github.com/QwenLM/qwen-code/issues/11292) Main CI failed: E2E Tests on 56da7ac4d71d `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11271](https://github.com/QwenLM/qwen-code/issues/11271) Main CI failed: E2E Tests on 36f2c14f0ed4 `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#11268](https://github.com/QwenLM/qwen-code/issues/11268) Main CI failed: E2E Tests on fb12a6e7fe05 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11319](https://github.com/QwenLM/qwen-code/issues/11319) Deferred review findings from PR #11305: feat(goal): size the checkpoint verifier timeout for a full claim list, and let
- [#11316](https://github.com/QwenLM/qwen-code/issues/11316) Deferred review findings from PR #11281: feat(daemon): enumerate installed extension skills locally

#### 🔒 Closed Issues
- [#10750](https://github.com/QwenLM/qwen-code/issues/10750) feat(web-shell): add session-wide turn navigation
- [#11118](https://github.com/QwenLM/qwen-code/issues/11118) fix(serve): a session doing cron, goal, monitor or history-mutation work can never be reclaimed
- [#11040](https://github.com/QwenLM/qwen-code/issues/11040) Main CI failed: Qwen Code CI on 419e8d57b2a9
- [#11249](https://github.com/QwenLM/qwen-code/issues/11249) Main CI failed: Qwen Code CI on 421393d51df6
- [#11231](https://github.com/QwenLM/qwen-code/issues/11231) Main CI failed: Qwen Code CI on 62588d28920e
- [#11219](https://github.com/QwenLM/qwen-code/issues/11219) Main CI failed: E2E Tests on 4dbfc0c1c1a4
- [#11210](https://github.com/QwenLM/qwen-code/issues/11210) Main CI failed: E2E Tests on 42481176c5e3
- [#11203](https://github.com/QwenLM/qwen-code/issues/11203) Main CI failed: E2E Tests on 9c1c41a98983
- [#11197](https://github.com/QwenLM/qwen-code/issues/11197) Main CI failed: E2E Tests on 1a86cd6c5940
- [#11183](https://github.com/QwenLM/qwen-code/issues/11183) Main CI failed: E2E Tests on 62d22cd48a70
- [#11149](https://github.com/QwenLM/qwen-code/issues/11149) feat(update): support configurable download base URL / 支持配置独立版更新下载地址
- [#9651](https://github.com/QwenLM/qwen-code/issues/9651) Deferred review findings from PR #9631

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

**Stars:** 389,147 · **Open issues:** 6,323 · **Last push:** <1h ago

There were no releases for OpenClaw on September 8, 2026. Key developments included several important bug fixes and improvements, such as the fix for a gateway startup failure caused by protected provider credentials (#141586) and the enhancement to display compaction progress in the Telegram partial and block previews (#141199). A significant bug was reported related to the in-place upgrade from version 2026.7.1-2 to 2026.9.2, where session-transcript reconciliation stalled after importing a fraction of sessions (#140620), highlighting ongoing issues with upgrades. Other notable fixes included improvements to the UI agent picker, which experienced workspace-relative avatar errors (#140879) and a fix for gateway restarts hanging after the recent update (#140821).

#### ✅ Merged PRs
- [#141692](https://github.com/openclaw/openclaw/pull/141692) fix(doctor): release plugin resources after inspection
- [#141693](https://github.com/openclaw/openclaw/pull/141693) test: avoid duplicate waits in Kova auth fixtures
- [#141199](https://github.com/openclaw/openclaw/pull/141199) fix(telegram): show compaction progress in partial and block previews
- [#141544](https://github.com/openclaw/openclaw/pull/141544) fix: hide internal context in streamed reasoning previews
- [#141688](https://github.com/openclaw/openclaw/pull/141688) refactor(cron): separate script result parsing
- [#141586](https://github.com/openclaw/openclaw/pull/141586) fix(setup): New Agent fails with protected provider credentials
- [#141660](https://github.com/openclaw/openclaw/pull/141660) refactor(sdk): reuse UTF-8 report truncation
- [#141663](https://github.com/openclaw/openclaw/pull/141663) test(release): require completed managed survivor evidence
- [#141451](https://github.com/openclaw/openclaw/pull/141451) fix: preserve state when gateway startup is refused
- [#141673](https://github.com/openclaw/openclaw/pull/141673) fix: prevent multi-select tests leaking their resize observer
- [#141620](https://github.com/openclaw/openclaw/pull/141620) fix(btw): report usage for direct-provider answers
- [#141674](https://github.com/openclaw/openclaw/pull/141674) fix(media): avoid false empty-body download diagnostics
- [#141672](https://github.com/openclaw/openclaw/pull/141672) fix(tests): set explicit Doctor authority fixture permissions
- [#141682](https://github.com/openclaw/openclaw/pull/141682) test: reuse provider registries in catalog auth fixtures
- [#141683](https://github.com/openclaw/openclaw/pull/141683) perf(talk): skip unused trailing wake-name distance
- [#141681](https://github.com/openclaw/openclaw/pull/141681) fix: synchronize containment fixtures with real process stops
- [#141671](https://github.com/openclaw/openclaw/pull/141671) refactor(update): simplify constant downgrade confirmation text
- [#141654](https://github.com/openclaw/openclaw/pull/141654) fix: preserve native CLI auth status in model lists
- [#141662](https://github.com/openclaw/openclaw/pull/141662) refactor(tasks): require atomic store writes
- [#141646](https://github.com/openclaw/openclaw/pull/141646) refactor(skills): share readiness formatting
- [#141659](https://github.com/openclaw/openclaw/pull/141659) refactor: remove unused prompt action discovery
- [#141629](https://github.com/openclaw/openclaw/pull/141629) improve: reduce session recovery import overhead
- [#141635](https://github.com/openclaw/openclaw/pull/141635) fix(android): stabilize wake-word save tests
- [#141610](https://github.com/openclaw/openclaw/pull/141610) fix(update): allow artifact updates with matching configured plugins
- [#141543](https://github.com/openclaw/openclaw/pull/141543) chore(i18n): refresh native locales
- [#141649](https://github.com/openclaw/openclaw/pull/141649) fix(devices): use operator labels in node approval notices
- [#141650](https://github.com/openclaw/openclaw/pull/141650) refactor(tests): remove duplicate memory resolver cases
- [#141645](https://github.com/openclaw/openclaw/pull/141645) fix(test): keep denied Linux port probes in the safe pool
- [#141632](https://github.com/openclaw/openclaw/pull/141632) fix(ui): refresh selected usage details
- [#140579](https://github.com/openclaw/openclaw/pull/140579) fix(config): preserve authored settings through updates and setup
- [#141636](https://github.com/openclaw/openclaw/pull/141636) refactor(tests): simplify dispatch policy fixtures
- [#141634](https://github.com/openclaw/openclaw/pull/141634) fix: keep containment test inspection scoped to requested processes
- [#141631](https://github.com/openclaw/openclaw/pull/141631) refactor(tests): consolidate shared wake scheduler coverage
- [#141588](https://github.com/openclaw/openclaw/pull/141588) fix(gateway): classify background exec task blockers
- [#141562](https://github.com/openclaw/openclaw/pull/141562) fix(update): recover stale runs without stopping healthy gateways
- [#141609](https://github.com/openclaw/openclaw/pull/141609) perf(gateway): speed up suggestion delivery in large stores
- [#141627](https://github.com/openclaw/openclaw/pull/141627) fix: avoid Linux Gateway test port collisions
- [#141630](https://github.com/openclaw/openclaw/pull/141630) refactor: remove duplicate collapsed chat activity test
- [#141612](https://github.com/openclaw/openclaw/pull/141612) refactor(chat): share model provider grouping
- [#141583](https://github.com/openclaw/openclaw/pull/141583) fix(deps): backport Undici security update for 2026.6.35
- [#141619](https://github.com/openclaw/openclaw/pull/141619) fix(state): distinguish slow database validation stages
- [#141623](https://github.com/openclaw/openclaw/pull/141623) refactor: simplify provider HTTP error normalization
- [#141601](https://github.com/openclaw/openclaw/pull/141601) fix(telegram): keep successful album recovery quiet
- [#141624](https://github.com/openclaw/openclaw/pull/141624) test(release): preserve unavailable and corrupt plugin update coverage
- [#141311](https://github.com/openclaw/openclaw/pull/141311) fix(ui): avoid broken characters in download filenames
- [#141622](https://github.com/openclaw/openclaw/pull/141622) refactor(tests): reuse Discord allowlist fixtures
- [#137587](https://github.com/openclaw/openclaw/pull/137587) test(macos): isolate log locator directory
- [#141618](https://github.com/openclaw/openclaw/pull/141618) fix(status): report missing skill requirements
- [#141611](https://github.com/openclaw/openclaw/pull/141611) fix(ci): bound frozen fs-safe contract resolution
- [#141613](https://github.com/openclaw/openclaw/pull/141613) fix(memory): keep workspace state updates responsive
- [#140907](https://github.com/openclaw/openclaw/pull/140907) fix(cli): reject blank numeric options in status and logs
- [#140988](https://github.com/openclaw/openclaw/pull/140988) feat(macos): open links as native Mac tabs in the Browser panel
- [#141500](https://github.com/openclaw/openclaw/pull/141500) docs(packages): remove repetitive module captions
- [#141444](https://github.com/openclaw/openclaw/pull/141444) fix(agents): stop replaying obsolete replies after tool continuations
- [#141607](https://github.com/openclaw/openclaw/pull/141607) refactor(test): simplify queued steering message fixtures
- [#141571](https://github.com/openclaw/openclaw/pull/141571) fix(ci): hydrate frozen release ancestry through branch ref
- [#141597](https://github.com/openclaw/openclaw/pull/141597) fix(release): preserve candidate channel and config ownership in QA
- [#137347](https://github.com/openclaw/openclaw/pull/137347) docs: correct doctor's bootstrap file list
- [#141589](https://github.com/openclaw/openclaw/pull/141589) refactor(ui): reuse Gateway wire result types
- [#141579](https://github.com/openclaw/openclaw/pull/141579) improve(tests): make native Codex checks cancellation-safe
- [#128189](https://github.com/openclaw/openclaw/pull/128189) perf(logging): avoid rebuilding unchanged redaction chunks
- [#140893](https://github.com/openclaw/openclaw/pull/140893) fix(ui): preserve newer copies and restore browser URL copying
- [#141595](https://github.com/openclaw/openclaw/pull/141595) refactor(tts): retire copied OpenAI test provider
- [#141567](https://github.com/openclaw/openclaw/pull/141567) fix(ui): keep Review on the latest selection
- [#137577](https://github.com/openclaw/openclaw/pull/137577) fix(docker): package 7.33 workspace templates
- [#137588](https://github.com/openclaw/openclaw/pull/137588) test(extensions): freeze Sonnet 5 pricing clock
- [#137604](https://github.com/openclaw/openclaw/pull/137604) test(searxng): exercise helpers through public boundary
- [#141598](https://github.com/openclaw/openclaw/pull/141598) chore(ui): refresh control ui locales
- [#137592](https://github.com/openclaw/openclaw/pull/137592) fix(build): sanitize direct tsdown declarations
- [#139624](https://github.com/openclaw/openclaw/pull/139624) refactor: share heartbeat and cron execution with reply runtime
- [#141594](https://github.com/openclaw/openclaw/pull/141594) improve: avoid repeated snapshot compilation in handoff tests
- [#141557](https://github.com/openclaw/openclaw/pull/141557) refactor(plugins): share root-relative MCP assembly
- [#141591](https://github.com/openclaw/openclaw/pull/141591) fix: preserve plugin test process limits with release flags
- [#141593](https://github.com/openclaw/openclaw/pull/141593) refactor(tests): simplify boundary user message fixtures
- [#141580](https://github.com/openclaw/openclaw/pull/141580) improve(tests): cover Gateway fixture edits without duplicate setup
- [#125900](https://github.com/openclaw/openclaw/pull/125900) fix(ui): avoid duplicate model auth reads on chat load
- [#141412](https://github.com/openclaw/openclaw/pull/141412) fix(doctor): admit maintenance before database inspection
- [#137661](https://github.com/openclaw/openclaw/pull/137661) refactor(browser): type route registrar seam
- [#141572](https://github.com/openclaw/openclaw/pull/141572) fix(daemon): preserve service inspection identity and deadlines
- [#141574](https://github.com/openclaw/openclaw/pull/141574) fix(ui): code block copy fails for HTML comments and closing tags
- [#141584](https://github.com/openclaw/openclaw/pull/141584) fix: prevent published SDK compatibility verification timeouts
- [#141587](https://github.com/openclaw/openclaw/pull/141587) fix(tests): report worker failures and verify immediate quota failover
- [#141553](https://github.com/openclaw/openclaw/pull/141553) fix(worker): keep cloud bootstrap build closure self-contained
- [#141560](https://github.com/openclaw/openclaw/pull/141560) fix(health): report disabled channel accounts as off
- [#138666](https://github.com/openclaw/openclaw/pull/138666) fix(control-ui): measure context usage against the effective token budget
- [#137585](https://github.com/openclaw/openclaw/pull/137585) fix(release): recognize 2026.7.33 plugin security layout
- [#134047](https://github.com/openclaw/openclaw/pull/134047) fix(docker): copy pnpm lockfile into runtime image
- [#141554](https://github.com/openclaw/openclaw/pull/141554) refactor: prepare model table formatting once
- [#141578](https://github.com/openclaw/openclaw/pull/141578) fix(plugins): keep published runtimes out of root bundle
- [#141566](https://github.com/openclaw/openclaw/pull/141566) refactor: share Anthropic guest tool test fixtures
- [#141551](https://github.com/openclaw/openclaw/pull/141551) fix(msteams): preserve every progress reply
- [#137603](https://github.com/openclaw/openclaw/pull/137603) test(firecrawl): consolidate parser coverage
- [#141552](https://github.com/openclaw/openclaw/pull/141552) fix(baseten): keep generated models out of ordinary setup config
- [#141534](https://github.com/openclaw/openclaw/pull/141534) fix(docker): resolve fs-safe manifest through public export
- [#141565](https://github.com/openclaw/openclaw/pull/141565) fix(release): verify current package scan and installer outcomes
- [#137601](https://github.com/openclaw/openclaw/pull/137601) test(active-memory): remove private helper assertions
- [#137631](https://github.com/openclaw/openclaw/pull/137631) test(brave): exercise helpers through public boundary
- [#120340](https://github.com/openclaw/openclaw/pull/120340) perf(hooks): reduce native relay startup memory and latency
- [#141549](https://github.com/openclaw/openclaw/pull/141549) improve: reduce Doctor process test startup time
- [#134390](https://github.com/openclaw/openclaw/pull/134390) fix(e2e): route installer agent turns through gateway
- [#137586](https://github.com/openclaw/openclaw/pull/137586) fix(ci): support frozen validation contracts
- [#141537](https://github.com/openclaw/openclaw/pull/141537) fix: surface subagent worktree setup failures and stop per-blob fetches during worktree sizing
- [#141555](https://github.com/openclaw/openclaw/pull/141555) fix(qa): restore Gateway credential scenario selection
- [#134454](https://github.com/openclaw/openclaw/pull/134454) fix(e2e): accept image tool compatibility alias
- [#141546](https://github.com/openclaw/openclaw/pull/141546) chore(ui): refresh control ui locales
- [#141529](https://github.com/openclaw/openclaw/pull/141529) refactor(tests): consolidate WebSocket ping fixtures
- [#141531](https://github.com/openclaw/openclaw/pull/141531) fix(setup): retain consent choices through roster reconciliation
- [#141533](https://github.com/openclaw/openclaw/pull/141533) test(ui): wait for the lazy native menu before asserting its trigger
- [#141532](https://github.com/openclaw/openclaw/pull/141532) fix(docker): avoid hanging on resource-limit diagnostics
- [#141521](https://github.com/openclaw/openclaw/pull/141521) fix(memory-lancedb): recall against the current prompt
- [#141530](https://github.com/openclaw/openclaw/pull/141530) refactor: reduce duplicate queue work in error handling
- [#141104](https://github.com/openclaw/openclaw/pull/141104) fix(memory): use fallback search when SQLite extensions are unavailable
- [#141509](https://github.com/openclaw/openclaw/pull/141509) refactor(cli): share local provider inventory setup
- [#141423](https://github.com/openclaw/openclaw/pull/141423) improve(tests): reject failed native CLI fixture runs
- [#141525](https://github.com/openclaw/openclaw/pull/141525) perf(cli): avoid diagnostic imports in successful respawns
- [#141518](https://github.com/openclaw/openclaw/pull/141518) fix(android): keep a stale operator hello from overwriting the handoff-issued device token
- [#141492](https://github.com/openclaw/openclaw/pull/141492) fix(memory): keep cleared plugin registries absent during lookup
- [#141514](https://github.com/openclaw/openclaw/pull/141514) improve(control-ui): one Gateway secret field instead of token or password
- [#141516](https://github.com/openclaw/openclaw/pull/141516) improve(test): reduce reporter contract test overhead
- [#141517](https://github.com/openclaw/openclaw/pull/141517) refactor(reply): narrow pending dispatcher registration
- [#141467](https://github.com/openclaw/openclaw/pull/141467) feat(beam): delete beamed sessions from the sidebar row menu
- [#141519](https://github.com/openclaw/openclaw/pull/141519) test(ui): remove duplicate streaming Markdown coverage
- [#141189](https://github.com/openclaw/openclaw/pull/141189) docs: fix the Fetch MCP server setup example
- [#141506](https://github.com/openclaw/openclaw/pull/141506) refactor(ui): share worktree action completion
- [#136761](https://github.com/openclaw/openclaw/pull/136761) fix(release): consolidate frozen target harness contracts
- [#136903](https://github.com/openclaw/openclaw/pull/136903) fix(plugins): allow intentional uninstall size drops
- [#136924](https://github.com/openclaw/openclaw/pull/136924) fix(mcp): require owner for Claude permission replies
- [#136935](https://github.com/openclaw/openclaw/pull/136935) fix(agents): neutralize Anthropic refusal marker replacement
- [#141465](https://github.com/openclaw/openclaw/pull/141465) fix(plugins): use declared WebSocket runtimes for Discord and Mattermost
- [#141524](https://github.com/openclaw/openclaw/pull/141524) feat(models): report nonfatal catalog attempt failures
- [#141494](https://github.com/openclaw/openclaw/pull/141494) test(ui): move code-block rendering tests beside their clipboard suite
- [#141491](https://github.com/openclaw/openclaw/pull/141491) fix(codex): preserve turn context on reused sessions
- [#141511](https://github.com/openclaw/openclaw/pull/141511) improve(onboard): generate the Gateway secret without asking token or password
- [#141469](https://github.com/openclaw/openclaw/pull/141469) fix(ui): read text attachments directly in Files
- [#141434](https://github.com/openclaw/openclaw/pull/141434) fix(sessions): keep edits responsive during cleanup validation
- [#141522](https://github.com/openclaw/openclaw/pull/141522) refactor(copilot): forward the prepared spawn workspace
- [#141507](https://github.com/openclaw/openclaw/pull/141507) fix(sessions): retain SQLite write failure details in logs
- [#141493](https://github.com/openclaw/openclaw/pull/141493) fix(scripts): preserve multibyte command output
- [#141478](https://github.com/openclaw/openclaw/pull/141478) fix(update): restore missing official plugins at the selected release
- [#141503](https://github.com/openclaw/openclaw/pull/141503) refactor(meeting): remove redundant fingerprint retry
- [#141512](https://github.com/openclaw/openclaw/pull/141512) refactor(tests): isolate repair effects from Slack activation
- [#141462](https://github.com/openclaw/openclaw/pull/141462) refactor(feishu): use the attachment saving owner directly
- [#141490](https://github.com/openclaw/openclaw/pull/141490) feat(macos): bundle openclaw-mac and add app gateway control CLI
- [#141515](https://github.com/openclaw/openclaw/pull/141515) fix(update): validate workspace plugins against the staged host
- [#140392](https://github.com/openclaw/openclaw/pull/140392) fix(system-agent): show inference verification failure causes
- [#141513](https://github.com/openclaw/openclaw/pull/141513) fix(lmstudio): prevent embedding truncation through smaller instances
- [#141488](https://github.com/openclaw/openclaw/pull/141488) improve: reduce cold SDK loading for model fetches
- [#141384](https://github.com/openclaw/openclaw/pull/141384) feat(team-reports): match the maintainer report site layout
- [#141484](https://github.com/openclaw/openclaw/pull/141484) fix(secrets): keep protected HTTPS working beyond one day
- [#141461](https://github.com/openclaw/openclaw/pull/141461) fix(memory): show llama.cpp diagnostics with status --index
- [#141416](https://github.com/openclaw/openclaw/pull/141416) fix(gateway): stop restart loops for required maintenance
- [#141471](https://github.com/openclaw/openclaw/pull/141471) fix(agents): honor exec allowlists for Claude native Bash
- [#141446](https://github.com/openclaw/openclaw/pull/141446) fix(ui): show backtick-quoted GitHub links as chips with hover cards
- [#141499](https://github.com/openclaw/openclaw/pull/141499) fix(sessions): open spawned persistent sessions as editable sessions, not subagents
- [#141497](https://github.com/openclaw/openclaw/pull/141497) test(ui): split markdown render-cache tests out of markdown.test.ts
- [#138984](https://github.com/openclaw/openclaw/pull/138984) fix(sessions): publish complete rewrites without reset amplification
- [#141479](https://github.com/openclaw/openclaw/pull/141479) chore(ui): refresh control ui locales
- [#141495](https://github.com/openclaw/openclaw/pull/141495) refactor: remove duplicate QA request retention run
- [#141487](https://github.com/openclaw/openclaw/pull/141487) refactor(tests): share complete CI scope expectations
- [#141485](https://github.com/openclaw/openclaw/pull/141485) test(ui): split streaming markdown tests to restore the core lint lane
- [#138451](https://github.com/openclaw/openclaw/pull/138451) refactor: unify wake scheduling and background session ownership
- [#141359](https://github.com/openclaw/openclaw/pull/141359) fix: reduce single-session update overhead in large stores
- [#141334](https://github.com/openclaw/openclaw/pull/141334) fix(ios): retain intent metadata during dead-code scans
- [#141327](https://github.com/openclaw/openclaw/pull/141327) feat(team-reports): adopt Carapace visual contract and GitHub avatars
- [#141130](https://github.com/openclaw/openclaw/pull/141130) fix(ui): retain loaded dashboards across navigation
- [#141105](https://github.com/openclaw/openclaw/pull/141105) fix(tooling): omit ClawSweeper machine squash credit
- [#141466](https://github.com/openclaw/openclaw/pull/141466) perf(plugins): reduce bundled activation imports
- [#131014](https://github.com/openclaw/openclaw/pull/131014) feat(cli): limit docs search results
- [#141124](https://github.com/openclaw/openclaw/pull/141124) fix(clickclack): use the declared WebSocket runtime under Bun
- [#141421](https://github.com/openclaw/openclaw/pull/141421) fix(mcp): fetched prompts lose image content
- [#141330](https://github.com/openclaw/openclaw/pull/141330) feat: choose agent fallback models from a searchable dropdown
- [#141460](https://github.com/openclaw/openclaw/pull/141460) perf(shared): reuse edit-distance row storage
- [#141399](https://github.com/openclaw/openclaw/pull/141399) fix(gateway): keep SSH error filenames intact across pipe reads
- [#141455](https://github.com/openclaw/openclaw/pull/141455) refactor(skills): share catalog construction
- [#141344](https://github.com/openclaw/openclaw/pull/141344) fix(android): stop precise location sharing when disabled
- [#141428](https://github.com/openclaw/openclaw/pull/141428) fix(ui): keep sidebar child rows visible during roster refreshes
- [#137975](https://github.com/openclaw/openclaw/pull/137975) fix(gateway): preserve task pages during session metadata edits
- [#141459](https://github.com/openclaw/openclaw/pull/141459) fix(ui): open Activity when clicking an online person
- [#141427](https://github.com/openclaw/openclaw/pull/141427) improve(control-ui): fold Gateway settings into one connection section and explain Gateway switches
- [#141397](https://github.com/openclaw/openclaw/pull/141397) fix(update): keep non-ASCII canary diagnostics intact

#### 🐛 New Issues
- [#140908](https://github.com/openclaw/openclaw/issues/140908) doctor --fix / gateway status --deep fail with EACCES on systemctl --user is-enabled under systemd --user service account (sudo -u), blocking all post-upgrade migrations `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬5
- [#141472](https://github.com/openclaw/openclaw/issues/141472) [Feature]: Make Workboard card notes and comments clickable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#140620](https://github.com/openclaw/openclaw/issues/140620) [Bug] In-place upgrade 2026.7.1-2 -> 2026.9.2: session-transcript reconciliation imports 27/~1500 sessions then stalls; pre-upgrade sessions unfindable via sessions_search `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` `P0` 💬4
- [#140971](https://github.com/openclaw/openclaw/issues/140971) [Bug]: All Feishu plugin tools are silently dropped in message-driven runs: `feishu_chat` host restriction blocks the entire plugin entry (regression between 2026.7.1-2 and 2026.8.1) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬4
- [#140879](https://github.com/openclaw/openclaw/issues/140879) Control UI agent picker: workspace-relative avatars 401 on 2026.9.2 — agents.list hands <img> an authenticated /avatar/<id> path `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#140821](https://github.com/openclaw/openclaw/issues/140821) [Bug]: Gateway restart hangs after updating to 2026.9.2 `bug` `no-stale` `regression` `P1` 💬4
- [#140770](https://github.com/openclaw/openclaw/issues/140770) [Bug]: context-overflow precheck ignores tool schemas, so max_tokens silently clamps to 1 and replies truncate `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#141617](https://github.com/openclaw/openclaw/issues/141617) [Bug]: 2026.9.2 npm update remains stuck at requested/running after supported repair `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#141604](https://github.com/openclaw/openclaw/issues/141604) [Bug]: model fallback chain aborts on a non-final hop and logs nothing, skipping remaining candidates `P2` `clawsweeper:source-repro` `impact:message-loss` `impact:auth-provider` 💬3
- [#141252](https://github.com/openclaw/openclaw/issues/141252) 2026.9.2 regression: reply runs fail with "Reply operation has no active tool authority snapshot" (busy-session/queued replies); user gets generic error, fallback chain misfires `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#141474](https://github.com/openclaw/openclaw/issues/141474) [Bug]: Collector child calling sessions_yield strands agents_wait forever while status surfaces report done; outputSchema silently inert on claude-cli backends `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#141409](https://github.com/openclaw/openclaw/issues/141409) [Bug]: Openclaw Update In Progress Message Issue `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#140932](https://github.com/openclaw/openclaw/issues/140932) [Bug]: local embedding provider omits EmbeddingGemma task prefixes (recall@1 16/25 -> 23/25 with prefixes) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#141279](https://github.com/openclaw/openclaw/issues/141279) [Bug]: Windows: os.devNull in GIT_CONFIG_GLOBAL/SYSTEM still breaks openclaw update and 5 other paths after #140803 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#141033](https://github.com/openclaw/openclaw/issues/141033) [Bug] `openclaw infer model run` local execution fails with "secret reference was not materialized by the active runtime" for account-owned provider secrets — same call with `--gateway` succeeds `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#141197](https://github.com/openclaw/openclaw/issues/141197) claude-cli backend: when no auth profile resolves, clearEnv is skipped and Claude Code falls back to its own login `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬3
- [#141254](https://github.com/openclaw/openclaw/issues/141254) [Bug]: 2026.9.2 New Chat fails: archived "New chat" labels stay unique (Android 2026.7.4 still sends the constant) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#140723](https://github.com/openclaw/openclaw/issues/140723) [Bug]: WebChat renders assistant text duplicated ×2–×3 — reasoning-only retries re-stream already-emitted text; aborted runs leave zero committed copies `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#141122](https://github.com/openclaw/openclaw/issues/141122) Gateway heap leak: a per-run AsyncLocalStorage is never .disable()d, so storageList grows without bound and taxes every async resource `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#141042](https://github.com/openclaw/openclaw/issues/141042) [Bug]: backup create aborts whole archive on ENOENT lstat of transient sqlite -shm/-wal sidecar (third-party dbs under agent codex-home) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#141123](https://github.com/openclaw/openclaw/issues/141123) Gateway exits (status=1) on a transient DNS failure: unhandled rejection, because the rejection handler is installed after the gateway fast path returns `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#141054](https://github.com/openclaw/openclaw/issues/141054) Discord: presence cache is never seeded from GUILD_CREATE initial presences — member-info returns no status/activities until each user's first PRESENCE_UPDATE after (re)connect `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#140736](https://github.com/openclaw/openclaw/issues/140736) sessions_search silently returns 0 results for CJK queries — transcript FTS hardcodes unicode61 while memory search got trigram + CJK fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#140889](https://github.com/openclaw/openclaw/issues/140889) Heartbeat/cron elevated-exec authorization still has no non-sender provenance path (re-file of #41484, verified on 2026.9.2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#141715](https://github.com/openclaw/openclaw/issues/141715) Flaky: chat-flow.image-handoff e2e detaches the submitted image at canonical handoff `maintainer` `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#141701](https://github.com/openclaw/openclaw/issues/141701) [Bug]: Gateway crash-loops on bind=lan + --tailscale serve; shutdown hangs ignoring SIGTERM; "No serve config" from tailscale CLI misleads `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#141694](https://github.com/openclaw/openclaw/issues/141694) [Bug]: Silent-fallback reply hardcodes "I couldn't reach the configured model backend" regardless of failure reason, naming a provider that returned HTTP 200 to every request `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141633](https://github.com/openclaw/openclaw/issues/141633) [Bug]: heartbeat/wake scheduler silently stops after 2026.9.2 Gateway restart; 31/33 automations stop executing `bug` `bug:behavior` `P1` `issue-rating: 🦪 silver shellfish` 💬2
- [#141684](https://github.com/openclaw/openclaw/issues/141684) [Bug]: 2026.9.2 delivered WhatsApp cron output is replayed by owner heartbeat into another DM `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#141670](https://github.com/openclaw/openclaw/issues/141670) Companion App: Chat bubble text truncation — lines cut off mid-display `P2` `impact:ux-friction` 💬2
- [#141668](https://github.com/openclaw/openclaw/issues/141668) [Bug]: WhatsApp group context replay breaks append-only session context for local models `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#141581](https://github.com/openclaw/openclaw/issues/141581) llm_output.usage is undefined for google/gemini models, while openai populates it on the same gateway `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#141661](https://github.com/openclaw/openclaw/issues/141661) Retire task-store snapshot write fallbacks `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#141657](https://github.com/openclaw/openclaw/issues/141657) System prompt instructs gateway-capable agents to use `gateway update.run`, which the update runtime refuses — and forbids the path it recommends `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#141625](https://github.com/openclaw/openclaw/issues/141625) Google Chat: Markdown reaches conversational replies as raw text — reply-delivery path bypasses the working converter (see #49350) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141540](https://github.com/openclaw/openclaw/issues/141540) Changing agents.defaults.model should propagate to existing unpinned sessions `P2` `impact:session-state` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬2
- [#141273](https://github.com/openclaw/openclaw/issues/141273) [Bug]: openclaw update leaves stale run stuck at phase=requested after gateway restart; blocks update repair/doctor with 'update parent owns Gateway activation' `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬2
- [#141616](https://github.com/openclaw/openclaw/issues/141616) [Bug]: Known Responses DNS failures show a generic network connection error `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141615](https://github.com/openclaw/openclaw/issues/141615) 2026.9.2 webchat: stuck 'Authenticated profile verification is unavailable' wedges all session/task RPCs until gateway restart `impact:auth-provider` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#141614](https://github.com/openclaw/openclaw/issues/141614) 2026.9.2: intermittent SIGTERM kills of exec-spawned ssh children, no approval/log trace `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#141556](https://github.com/openclaw/openclaw/issues/141556) NO_REPLY on a mentioned or thread turn is retried as an empty answer and posted as "Agent couldn't generate a response" (2026.9.2) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140607](https://github.com/openclaw/openclaw/issues/140607) [Bug]: 2026.9.2 Anthropic cache_control can attach to relocating runtime-context carrier (opt-out removed in #136782) `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#141191](https://github.com/openclaw/openclaw/issues/141191) System-expert inference probe rejects documented store SecretRef on `models.providers.*.apiKey` — "Couldn't sign in to zai / No API key found" while normal sessions work `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:auth-provider` `P0` 💬2
- [#141564](https://github.com/openclaw/openclaw/issues/141564) [Bug]: Browser panel stays stale after screencast socket disconnects `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141563](https://github.com/openclaw/openclaw/issues/141563) [Bug] MCP tools with parameter-free schema (properties: {}) silently drop tool result in agent layer `P2` `impact:other` `clawsweeper:bulk-filed` 💬2
- [#141558](https://github.com/openclaw/openclaw/issues/141558) [Bug]: Heartbeat polls occurring even though totally disabled `bug` `regression` `P2` `issue-rating: 🦪 silver shellfish` 💬2
- [#141545](https://github.com/openclaw/openclaw/issues/141545) QA credential scenario no longer selects its unified-secret browser test `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#141547](https://github.com/openclaw/openclaw/issues/141547) [Bug] xAI plugin catalog missing grok-imagine-image-2.0; video 1.5 T2V skipped; unknown image slugs silently fall back to 1.0 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#141510](https://github.com/openclaw/openclaw/issues/141510) LM Studio embeddings silently truncate through a smaller loaded instance `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#141180](https://github.com/openclaw/openclaw/issues/141180) Bug: MCP server-fetch package 404 on startup (v2026.9.2) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141520](https://github.com/openclaw/openclaw/issues/141520) [Bug]: Control UI Pair setup code is pasteable into Gateway Token and fails as token_mismatch `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#141473](https://github.com/openclaw/openclaw/issues/141473) Feature request: read-frequency-based MEMORY.md lifecycle (tracking + LRU/LFU eviction + archive) `P3` `impact:session-state` 💬2
- [#141361](https://github.com/openclaw/openclaw/issues/141361) [Bug]: Astra async tool loop reports false blockers and delivers obsolete replies despite completed tool results `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#141129](https://github.com/openclaw/openclaw/issues/141129) [Bug]: SSH sessions SIGTSTP/SIGTERM on long-running commands since 8.x — regression from 7.1-2 `P1` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦐 gold shrimp` 💬2
- [#141382](https://github.com/openclaw/openclaw/issues/141382) [Bug]: Windows — claude-cli backend fails with `write EPIPE` on every turn in 2026.9.2 (regression from 2026.9.1) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#140681](https://github.com/openclaw/openclaw/issues/140681) [Bug]: memory-core: since 2026.8.1, memory.search spends ~2.3 s per query booting a throwaway KNN child process — KNN itself is ~70 ms (was in-process in 2026.7.1) `bug` `no-stale` `regression` `P2` 💬2
- [#141413](https://github.com/openclaw/openclaw/issues/141413) [Bug]: macOS app omits token for local Gateway using SecretRef `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#140737](https://github.com/openclaw/openclaw/issues/140737) fix(file-transfer): preserve actual archive member identities in directory policy `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬2
- [#140738](https://github.com/openclaw/openclaw/issues/140738) [Bug]: Talk confirmations repeatedly superseded; confirmed cross-session actions never execute `P1` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#141318](https://github.com/openclaw/openclaw/issues/141318) [Bug]: Telegram /models times out to overlay snapshot and lists xai and x-ai as two providers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#141249](https://github.com/openclaw/openclaw/issues/141249) [Bug]: 2026.9.2 regresses Skill Workshop Experience Review foreground prompt-cache reuse from #130013 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#141260](https://github.com/openclaw/openclaw/issues/141260) [Bug]: failover rate-limit copy drops the provider reset hint - aggregate "All models failed" string exceeds the 300-char guard `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140999](https://github.com/openclaw/openclaw/issues/140999) Consolidate duplicated channel DM policy validation `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#141295](https://github.com/openclaw/openclaw/issues/141295) TTL or manual clear for interrupted/cancelled pending inputs — prevents model confusion (ref #140243) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#141233](https://github.com/openclaw/openclaw/issues/141233) [Bug]: Codex transcript mirror duplicates unkeyed user inputs from Chat Completions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141242](https://github.com/openclaw/openclaw/issues/141242) [Bug]: yielded running main session is treated as terminal and rotated during sibling completion `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140959](https://github.com/openclaw/openclaw/issues/140959) Operator pastes in webchat are labelled Source: External, indistinguishable from fetched content `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬2
- [#141196](https://github.com/openclaw/openclaw/issues/141196) claude-cli backend: credential passed via CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR is ignored by Claude Code 2.1.251 `P2` `impact:auth-provider` 💬2
- [#140978](https://github.com/openclaw/openclaw/issues/140978) Discord message tool: channel-edit blocked by trust guard, pin/delete/read blocked by delegation guard (external plugin), even in the exact current conversation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬2
- [#140943](https://github.com/openclaw/openclaw/issues/140943) [Bug]: Completed Swarm cards waste composer space on mobile `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#141245](https://github.com/openclaw/openclaw/issues/141245) [Bug]: Plugin-update failure silently disables ALL plugins in config (defensive enabled:false write) `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#141202](https://github.com/openclaw/openclaw/issues/141202) [Bug]: regression race after #120575: terminal process.poll can still trigger duplicate notifyOnExit wake `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140576](https://github.com/openclaw/openclaw/issues/140576) Control UI: saved agent GitHub identity never updates the agent's credential/profileId `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬2
- [#141176](https://github.com/openclaw/openclaw/issues/141176) [Bug]: Slack-bound agent repeats configured-model-unavailable warning when default model alias is stale `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#140765](https://github.com/openclaw/openclaw/issues/140765) Feature: opt-in trusted Discord administrator role for Discord-first operations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#141115](https://github.com/openclaw/openclaw/issues/141115) 429 from primary model terminates session instead of consulting fallback chain `P1` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬2
- [#141032](https://github.com/openclaw/openclaw/issues/141032) Scheduled run aborted by model stall watchdog reports completionStatus=succeeded and announces fallback text (2026.8.2) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141066](https://github.com/openclaw/openclaw/issues/141066) [Bug]: device.status battery 'level' is an undocumented 0.0–1.0 fraction — full charge reads as '1%' `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#141000](https://github.com/openclaw/openclaw/issues/141000) [Bug]: Clock corrections distort bounded Codex turn timeouts `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#140998](https://github.com/openclaw/openclaw/issues/140998) [Feature]: Start iOS live voice with a native Shortcut `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#141002](https://github.com/openclaw/openclaw/issues/141002) [Bug]: Failed Windows launcher rewrite truncates the existing script `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141028](https://github.com/openclaw/openclaw/issues/141028) [Bug]: ACP spawn cleanup stops waiting after the 10 s non-cancelling sessions.delete deadline; child session row outlives spawn return (flaky acp-spawn.authority runtime / abort) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#140950](https://github.com/openclaw/openclaw/issues/140950) Plugin info and inspect label metadata-only plugins as loaded `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#140819](https://github.com/openclaw/openclaw/issues/140819) Queued preflight compaction repeats when its accounting is refused after the compactor releases the session lane ("Session changed before compaction maintenance could be recorded") `P1` `clawsweeper:source-repro` `impact:session-state` `impact:message-loss` 💬2
- [#140900](https://github.com/openclaw/openclaw/issues/140900) oops `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#140785](https://github.com/openclaw/openclaw/issues/140785) HTML session exports display list Markdown literally `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#140757](https://github.com/openclaw/openclaw/issues/140757) [Bug]: skill_workshop apply overwrites SKILL.md frontmatter `description` with the 160-byte proposal label, silently disabling skill triggers `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#140843](https://github.com/openclaw/openclaw/issues/140843) before_tool_call { block: false } is documented as no decision but records an enforced allow receipt `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#140687](https://github.com/openclaw/openclaw/issues/140687) [Bug]: Workshop 700-line/390px E2E blank-row height assertion fails on CI `bug` `maintainer` `P2` `issue-rating: 🦪 silver shellfish` 💬2
- [#140632](https://github.com/openclaw/openclaw/issues/140632) [Bug]: Concurrent SQLite and Discord built proofs can collide on a gateway port `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#140591](https://github.com/openclaw/openclaw/issues/140591) Consolidate duplicated diagnostic, embedding and schema orchestration `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#140671](https://github.com/openclaw/openclaw/issues/140671) [Bug]: stuck-session watchdog aborts long-running silent MCP tool calls at 360s — no exemption for active tool execution, threshold not configurable `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#141710](https://github.com/openclaw/openclaw/issues/141710) Agents list reports wildcard-bound channel accounts as unknown `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#141709](https://github.com/openclaw/openclaw/issues/141709) Consolidate web_fetch HTML tag scanning without changing extraction `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#141708](https://github.com/openclaw/openclaw/issues/141708) buzz: DM channels can never satisfy the Bot-role gate (relay forbids role changes in DMs), so a configured DM disconnects the account `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141703](https://github.com/openclaw/openclaw/issues/141703) [Bug]: Embedded ChatGPT Responses turn abandoned when stream terminates mid-request (in-flight gap after #130721) `P1` `impact:session-state` 💬1
- [#141707](https://github.com/openclaw/openclaw/issues/141707) Telegram: add is_compact field to table block (Bot API 10.3 support) `P3` 💬1
- [#141702](https://github.com/openclaw/openclaw/issues/141702) [Bug]: ask_user never renders in Windows Companion webchat — tool hangs in Running, session stuck `impact:session-state` `P0` `impact:ux-release-blocker` 💬1
- [#141699](https://github.com/openclaw/openclaw/issues/141699) [Bug]: Join codes are consumed by first GET /j/<code> with no warning — operator verification kills the code; also wiped on gateway restart `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#141700](https://github.com/openclaw/openclaw/issues/141700) [Docs]: OpenClaw-Android.apk absent from latest release — docs point to "supported GitHub Releases", latest (2026.9.2) has none `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#141698](https://github.com/openclaw/openclaw/issues/141698) [Docs/UX]: Android "setup code" is a different artifact from the gateway join URL — `openclaw qr` is undiscoverable `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#141691](https://github.com/openclaw/openclaw/issues/141691) Telegram table block falls back to plain text despite sendRichMessage (deliveryKind=text) `P2` `impact:ux-friction` 💬1
- [#141690](https://github.com/openclaw/openclaw/issues/141690) Control UI: scope cached transcript snapshots by Gateway `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#141667](https://github.com/openclaw/openclaw/issues/141667) Failed media downloads falsely report an empty response body `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#141685](https://github.com/openclaw/openclaw/issues/141685) [Bug]: GLM-5.3-Flash-EXL3 + OpenClaw agentic tool-calling: 3 compatibility bugs found & fixed `bug` `bug:crash` `P2` `impact:auth-provider` 💬1
- [#141666](https://github.com/openclaw/openclaw/issues/141666) [Feature]: Opt out of compaction-triggered auth-profile rotation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141656](https://github.com/openclaw/openclaw/issues/141656) [Bug]: "No reply was generated" notice delivered 1-2s after agent.run.finished status=succeeded (Telegram DM, 4/4 turns) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#141655](https://github.com/openclaw/openclaw/issues/141655) Inter-session deliveries to idle ephemeral voice sessions auto-spawn acknowledgement turns (reply flood on connected surfaces) `P2` `impact:session-state` `impact:message-loss` 💬1
- [#141644](https://github.com/openclaw/openclaw/issues/141644) Node approval notices ignore renamed device labels `bug` `maintainer` 💬1
- [#141606](https://github.com/openclaw/openclaw/issues/141606) status --all reports no missing skill requirements when prerequisites fail `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#141605](https://github.com/openclaw/openclaw/issues/141605) [Bug]: 2026.9.2 Skill Workshop hard-coded 120s timeout gives ineffective configuration advice (fixed on main by #140315) `P2` `impact:ux-friction` 💬1
- [#141599](https://github.com/openclaw/openclaw/issues/141599) [Bug]: `bug` `regression` 💬1
- [#141590](https://github.com/openclaw/openclaw/issues/141590) [Feature]: retain TOOLS.md as an optional first-class workspace file `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141550](https://github.com/openclaw/openclaw/issues/141550) [Bug]: Disabled channel accounts show configured/OK in health output `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#141582](https://github.com/openclaw/openclaw/issues/141582) Every request to an Anthropic model fails with "provider rejected the request schema or tool payload" on 2026.8.2 `P1` `impact:auth-provider` 💬1
- [#141523](https://github.com/openclaw/openclaw/issues/141523) Security scout: local tracking ref far behind origin/main; plugin-safety coverage unverified `security` `P3` `impact:security` 💬1
- [#141568](https://github.com/openclaw/openclaw/issues/141568) opencode-go: bundled plugin sends no x-opencode-session — OpenCode Go rejects headerless requests since Sep 6 (400 MissingSessionID) `impact:auth-provider` `P0` `impact:ux-release-blocker` 💬1
- [#141573](https://github.com/openclaw/openclaw/issues/141573) [Feature]: Clarify Windows PowerShell 5.1 vs PowerShell 7 support and expose the effective exec shell `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141559](https://github.com/openclaw/openclaw/issues/141559) [Bug]: Unbindable-shape exec denial returns three conflicting error classes with no approval request and no remedy, so agents report false loss of exec access `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#141561](https://github.com/openclaw/openclaw/issues/141561) [Regression] Bundled EmbeddingGemma runs at llama.cpp default 512 ubatch (c97c5b65 -> 2026.9.2), HTTP 500 on chunks >= 513 tokens 💬1
- [#141539](https://github.com/openclaw/openclaw/issues/141539) Issue on docs `P3` 💬1
- [#141538](https://github.com/openclaw/openclaw/issues/141538) [Feature]: per-reason heartbeat failure-notice visibility — showAlerts gates agent-runner-failure and agent-tool-failure together, so provider/runner failures repeat in chat every interval `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141536](https://github.com/openclaw/openclaw/issues/141536) Add URL and URLSearchParams to Code Mode guests `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#141508](https://github.com/openclaw/openclaw/issues/141508) Inference provider inventories duplicate command setup and output handling `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#141505](https://github.com/openclaw/openclaw/issues/141505) Worktrees actions repeat the same completion lifecycle `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#141528](https://github.com/openclaw/openclaw/issues/141528) [Bug]: Telegram partial streaming hits editMessageText 429 after 2026.8.1 upgrade; persists in 2026.9.2 `P1` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#141502](https://github.com/openclaw/openclaw/issues/141502) Loopback fingerprint selection repeats an exhausted candidate `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#141498](https://github.com/openclaw/openclaw/issues/141498) Package source captions repeat filenames without documenting contracts `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#141349](https://github.com/openclaw/openclaw/issues/141349) [Bug]: memory status --index omits available llama.cpp diagnostics `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#141483](https://github.com/openclaw/openclaw/issues/141483) [Feature]: Side chat should reuse the session's CLI runtime instead of requiring a direct provider API key `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#141482](https://github.com/openclaw/openclaw/issues/141482) Custom dashboards and plugin UI unavailable over remote plain HTTP `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#141430](https://github.com/openclaw/openclaw/issues/141430) LM Studio embeddings fail after model eviction with JIT disabled `maintainer` `P2` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#141454](https://github.com/openclaw/openclaw/issues/141454) [Bug]: Deferred systemEvent force-runs are shown as completed successfully `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141448](https://github.com/openclaw/openclaw/issues/141448) [Bug]: Chrome plugin fails in Codex: privileged native pipe bridge unavailable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#141261](https://github.com/openclaw/openclaw/issues/141261) Improve Code Mode continuation and typed tool composition `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#141443](https://github.com/openclaw/openclaw/issues/141443) [Bug]: Linux AppImage 2026.8.2 shows blank/black window on CachyOS Wayland `bug` `regression` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#141424](https://github.com/openclaw/openclaw/issues/141424) Ollama onboarding accepts embedding-only models as chat defaults `maintainer` `P2` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#141435](https://github.com/openclaw/openclaw/issues/141435) TUI footer keeps the previous model after an accepted fallback event `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141438](https://github.com/openclaw/openclaw/issues/141438) claude-cli backend: ctx.requesterSenderId is undefined in plugin MCP tool context (sender identity not propagated) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#141426](https://github.com/openclaw/openclaw/issues/141426) Secret egress proxy does not substitute sentinels on POST requests with a body (GET works) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#140928](https://github.com/openclaw/openclaw/issues/140928) [Feature] doctor: migrate shared auth-profile plaintext to SecretRef `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#141415](https://github.com/openclaw/openclaw/issues/141415) [Bug]: Zalo outbound photo appears black on device — hosted media URL is deleted after first GET, breaking multi-fetch clients `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141400](https://github.com/openclaw/openclaw/issues/141400) Shared CLI progress spinner floods narrow terminals with wrapped labels `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141357](https://github.com/openclaw/openclaw/issues/141357) LM Studio inference can select a smaller loaded instance than its context budget `maintainer` `P2` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#141356](https://github.com/openclaw/openclaw/issues/141356) Ollama tool follow-ups discard retained assistant reasoning `maintainer` 💬1
- [#141387](https://github.com/openclaw/openclaw/issues/141387) [Bug]: Duplicate persisted Codex prompt identity blocks settled-turn finalization recovery `P2` `impact:session-state` 💬1
- [#141374](https://github.com/openclaw/openclaw/issues/141374) Chat Completions drops explicitly reported top-level cache-write usage `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141380](https://github.com/openclaw/openclaw/issues/141380) [Bug]: Group silent-reply prompt lost the "never announce silence" guard in #140901 simplification `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141367](https://github.com/openclaw/openclaw/issues/141367) Code Mode truncates structured results to make room for JSON indentation `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#141366](https://github.com/openclaw/openclaw/issues/141366) [Feature]: Surface bundled plugin destinations (e.g. Workboard) in Hub navigation `enhancement` `P2` `impact:ux-friction` 💬1
- [#141347](https://github.com/openclaw/openclaw/issues/141347) Telegram: table block missing is_compact support (Bot API 10.3) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141355](https://github.com/openclaw/openclaw/issues/141355) agent exec loses cached-only models when isolating state `maintainer` `P2` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#141351](https://github.com/openclaw/openclaw/issues/141351) WebChat Control UI renders each assistant paragraph twice via openclawStreamFallback segment double-render on stalled streams `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#141099](https://github.com/openclaw/openclaw/issues/141099) [Bug]: Reef recovery cursor skips parked entries across live frames `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#141346](https://github.com/openclaw/openclaw/issues/141346) [Feature]: [Feature request] Third-party channel outbound replies (WeCom agent) bypass conversation_deliveries durable delivery lifecycle `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#141340](https://github.com/openclaw/openclaw/issues/141340) [Bug]: Server compaction understates context with sizeable tool definitions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141331](https://github.com/openclaw/openclaw/issues/141331) Telegram command help exposes truncated tokens for hyphenated plugin names `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141035](https://github.com/openclaw/openclaw/issues/141035) Control UI notifications miss attention and open unrelated conversations `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#141300](https://github.com/openclaw/openclaw/issues/141300) [Bug]: Exec allowlist/ask policy is not enforced for isolated cron-triggered sessions — fails open, not closed `bug` `bug:behavior` `P2` `impact:security` 💬1
- [#141263](https://github.com/openclaw/openclaw/issues/141263) [Bug]: Cold agents list omits configured channel account names `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#141313](https://github.com/openclaw/openclaw/issues/141313) QA broker: update persistent Telegram fixture references without replacing credentials `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#141306](https://github.com/openclaw/openclaw/issues/141306) [Bug]: Deeply nested external tool schema crashes normalization with RangeError (no depth budget) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#141291](https://github.com/openclaw/openclaw/issues/141291) Telegram images sent as documents are omitted from automatic vision input `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141290](https://github.com/openclaw/openclaw/issues/141290) [Bug]: mainm不能流式输出 `bug` `regression` `P3` 💬1
- [#141272](https://github.com/openclaw/openclaw/issues/141272) [Feature]: Add Frontière AI (getfrontiereai.eu) as an official AI provider `enhancement` `P3` `impact:auth-provider` 💬1
- [#141275](https://github.com/openclaw/openclaw/issues/141275) Internal runtime-context block leaks into visible conversation as a separate turn `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#141269](https://github.com/openclaw/openclaw/issues/141269) [Bug]: 2026.9.2 Control UI Cron/Agents/Sessions list pages blank — SPA list RPCs rejected with "invalid *.list params: must be object" `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#141264](https://github.com/openclaw/openclaw/issues/141264) Chat Completions reports stop when a partial answer hits its output budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141259](https://github.com/openclaw/openclaw/issues/141259) TEST-PERMISSION-PROBE `P3` 💬1
- [#141257](https://github.com/openclaw/openclaw/issues/141257) [Bug]: second model-scoped cooldown widens shared auth profile and skips healthy third fallback `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#141255](https://github.com/openclaw/openclaw/issues/141255) [Bug]: second model-scoped cooldown widens shared auth profile and skips healthy third fallback 💬1
- [#141133](https://github.com/openclaw/openclaw/issues/141133) openclaw gateway installs no unhandledRejection/uncaughtException handler: the fast path returns before installUnhandledRejectionHandler() 💬1
- [#141132](https://github.com/openclaw/openclaw/issues/141132) Per-attempt AsyncLocalStorage is never disabled, leaking instances and degrading every await process-wide 💬1
- [#141248](https://github.com/openclaw/openclaw/issues/141248) [Bug]: 2026.9.2 Skill Workshop Experience Review loses foreground prompt-cache prefix `P2` `impact:other` 💬1
- [#141222](https://github.com/openclaw/openclaw/issues/141222) [Bug]: configured aliases disappear from missing model rows `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#141243](https://github.com/openclaw/openclaw/issues/141243) [Bug]: SecretRef resolution broken across multiple config paths (channels + plugins) in 2026.9.2 `P2` `impact:auth-provider` `impact:ux-friction` 💬1
- [#141198](https://github.com/openclaw/openclaw/issues/141198) CI prerequisite planning repeatedly recompiles large glob inventories `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#141228](https://github.com/openclaw/openclaw/issues/141228) Update-run tracking record stuck at phase 'requested' forever, even after successful doctor --fix restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141184](https://github.com/openclaw/openclaw/issues/141184) [Feature]: iOS compact floating chat composer and native navigation polish `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#141211](https://github.com/openclaw/openclaw/issues/141211) Safeguard compaction on 2026.8.2: qualityGuard.maxRetries not visible in compaction-diag (attempt=1 maxAttempts=1) and post-audit truncation still yields latest_user_ask_not_reflected failures `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#141231](https://github.com/openclaw/openclaw/issues/141231) Skill Workshop: agent tool cannot list/inspect/patch cross-workspace proposals or skills (tool layer is caller-scoped; Gateway API and CLI already support --agent targeting) 💬1
- [#141230](https://github.com/openclaw/openclaw/issues/141230) Workboard: expired claims still block all non-owner mutations (verified on main); expired-claim sweep in dispatch not in stable release; token-less owner release undocumented 💬1
- [#141226](https://github.com/openclaw/openclaw/issues/141226) [Bug]: Android app composer input collapses to ~4 characters wide on new chat `P2` `maturity:stable` `impact:ux-friction` 💬1
- [#141213](https://github.com/openclaw/openclaw/issues/141213) Internal runtime-context envelope leaks into visible Telegram turns on 2026.9.1 (sibling of #137927 — source-level repro) `P1` `impact:session-state` `impact:security` 💬1
- [#141187](https://github.com/openclaw/openclaw/issues/141187) [Bug]: delivery-mirror messages from "message send" command are persisted and searchable but never included in model context (live or rebuilt) `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#141201](https://github.com/openclaw/openclaw/issues/141201) [Feature]: Owner-confirmed project automation management from Telegram forum topics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#141182](https://github.com/openclaw/openclaw/issues/141182) Bug: @tencent-weixin/openclaw-weixin plugin blocks 'openclaw tools' command `P2` `impact:ux-friction` 💬1
- [#141111](https://github.com/openclaw/openclaw/issues/141111) TUI gateway status omits channel diagnostics `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#141172](https://github.com/openclaw/openclaw/issues/141172) [Bug]: a run that dies before its first session commit leaks its agent.run.started forever — trajectory flush FK-fails and appendTranscriptEventSync throws session-entry-missing, and no agent.run.finished is ever recorded `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#141157](https://github.com/openclaw/openclaw/issues/141157) Skill Workshop: agent tool cannot list/inspect/patch cross-workspace proposals or skills (tool layer is caller-scoped; Gateway API and CLI already support --agent targeting) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#141156](https://github.com/openclaw/openclaw/issues/141156) Workboard: expired claims still block all non-owner mutations (verified on main); expired-claim sweep in dispatch not in stable release; token-less owner release undocumented `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140968](https://github.com/openclaw/openclaw/issues/140968) [Bug]: Docker setup includes same-filesystem workspace files in ownership repair `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#140817](https://github.com/openclaw/openclaw/issues/140817) [Bug]: doctor reports the selected context engine as "not registered" when its plugin registered in discovery mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141117](https://github.com/openclaw/openclaw/issues/141117) [Bug]: macOS native app fails to load workboard plugin stylesheet (WKWebView) — blank Control UI panel `P2` `impact:ux-friction` 💬1
- [#141088](https://github.com/openclaw/openclaw/issues/141088) [Bug]: /models exposes claude-cli provider despite modelPolicy.allow[] excluding it (CLI runtime providers bypass visibility policy) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#141102](https://github.com/openclaw/openclaw/issues/141102) [Bug]: Collection-review jobs can remain enabled when rooted execution is deterministically rejected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141068](https://github.com/openclaw/openclaw/issues/141068) fix: CI growth test falsely reports moved non-tooling jobs after tooling split `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#141064](https://github.com/openclaw/openclaw/issues/141064) [Feature]: Allow agents to wake up their own sessions in other Matrix rooms `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#141083](https://github.com/openclaw/openclaw/issues/141083) [Bug]: intermittent Linux CLI hang after malformed --container diagnostic `bug` `maintainer` `P2` `issue-rating: 🦪 silver shellfish` 💬1
- [#141091](https://github.com/openclaw/openclaw/issues/141091) [Bug]: Side-chat input sends on Shift+Enter and does not wrap long questions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141036](https://github.com/openclaw/openclaw/issues/141036) [Bug]: Doctor recommends automatic retirement for preserved Workshop backups `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#141078](https://github.com/openclaw/openclaw/issues/141078) Telegram status reactions keep stall timers after pre-dispatch cancellation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141012](https://github.com/openclaw/openclaw/issues/141012) Signal channel: internal runtime-context leak into visible chat regressed (post #135569/#136076 fix), now includes instructive 'do not reply' phrasing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#140703](https://github.com/openclaw/openclaw/issues/140703) OpenShell mirror failures omit published shadow recovery paths `maintainer` `P2` `clawsweeper:needs-live-repro` `impact:data-loss` 💬1
- [#141038](https://github.com/openclaw/openclaw/issues/141038) [Bug]: Windows cron command jobs are persisted with hardcoded ["sh", "-lc", ...] and fail with permanent ENOENT at every run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141025](https://github.com/openclaw/openclaw/issues/141025) [Bug]: Extension tab creation fails on Vivaldi: transient tabs.create shape (url:"" + pendingUrl) rejected by tabEligibility `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#141023](https://github.com/openclaw/openclaw/issues/141023) Skill Workshop: make the 10,000-character autonomous patch limit configurable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141017](https://github.com/openclaw/openclaw/issues/141017) sessions_spawn dashboard-channel subagent inherits parent's tool-authority binding, fails every time with "embedded tool authority registration does not match its attempt" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#140940](https://github.com/openclaw/openclaw/issues/140940) [Bug]: isolated cron runs fail with "plugin generation was superseded" when a fallback provider's plugin is disabled (2026.9.x regression) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#141005](https://github.com/openclaw/openclaw/issues/141005) [Feature]: Use low reasoning for weekly Skill Workshop reviews `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140987](https://github.com/openclaw/openclaw/issues/140987) [Bug]: 5xx-wrapped request-validation errors are retried as timeouts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#140966](https://github.com/openclaw/openclaw/issues/140966) [Bug]: Packaged CLI fails to load compiled plugins with import-only ESM deps (memory-core → execa → npm-run-path → unicorn-magic) on 2026.9.2 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#140918](https://github.com/openclaw/openclaw/issues/140918) OpenAI Responses proxy: missing session affinity header causes repeated prompt-cache misses `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#140948](https://github.com/openclaw/openclaw/issues/140948) [Bug]: `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#140944](https://github.com/openclaw/openclaw/issues/140944) [Bug]: Reclamation regression tests use a 500 ms wall-clock ceiling that misses on-thread reclamation and fails correct code in CI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#140911](https://github.com/openclaw/openclaw/issues/140911) Recovered subagent completion can fail to reach a recovering parent `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#140881](https://github.com/openclaw/openclaw/issues/140881) Browser node responses allocate a second string only to count encoded bytes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140838](https://github.com/openclaw/openclaw/issues/140838) Playback transcoding duplicates the complete source during input staging `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#140865](https://github.com/openclaw/openclaw/issues/140865) Tool Search repeats full JSON copies after IPC normalization `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#140931](https://github.com/openclaw/openclaw/issues/140931) [Bug]: Codex completed-child followup times out waiting for PreToolUse admission on 2026.9.2 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#140867](https://github.com/openclaw/openclaw/issues/140867) Copilot transcript preparation clones an already-private replay projection `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#140708](https://github.com/openclaw/openclaw/issues/140708) [Feature]: Adaptive native mobile layouts for folding and resizable windows `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#140836](https://github.com/openclaw/openclaw/issues/140836) Slack structured replies repeat authored rendering within one delivery attempt `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140921](https://github.com/openclaw/openclaw/issues/140921) Exec allowlist patterns never match uutils coreutils symlinks on Ubuntu 26.04 `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#140917](https://github.com/openclaw/openclaw/issues/140917) [Bug]: Plugin dependency health treats an empty required package directory as installed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#140915](https://github.com/openclaw/openclaw/issues/140915) [Bug]: `tailscale serve status` hides foreground claims, and the exit-78 error message recommends a command that cannot clear them `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#140828](https://github.com/openclaw/openclaw/issues/140828) Share bounded edit-distance calculation used by model suggestions `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#140826](https://github.com/openclaw/openclaw/issues/140826) Paired-node transfers redundantly serialize and parse each outbound frame `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140877](https://github.com/openclaw/openclaw/issues/140877) [Bug]: Unhandled rejection in inbound-debounce runFlush exits the gateway when onFlush returns a handle without .admission `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:message-loss` 💬1
- [#140800](https://github.com/openclaw/openclaw/issues/140800) Meeting shutdown leaves consults active and accepts late speech settlement `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140666](https://github.com/openclaw/openclaw/issues/140666) Cloud worker prompt assembly bypasses the projection owner (runtime-context hardening follow-up) `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#140795](https://github.com/openclaw/openclaw/issues/140795) Windows worker repository preparation fails on Git null-device config `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140786](https://github.com/openclaw/openclaw/issues/140786) Raw Slack and Teams uploads retain avoidable BufferSource copies `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#140772](https://github.com/openclaw/openclaw/issues/140772) Terminal wrapping retains eager grapheme arrays during sequential iteration `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140791](https://github.com/openclaw/openclaw/issues/140791) [Bug]: exec host=node fails on every call from a chat session — gateway attaches channel-context env that hardened node clients reject `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#140691](https://github.com/openclaw/openclaw/issues/140691) Refresh newly cooled npm dependencies for September 7 `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#140745](https://github.com/openclaw/openclaw/issues/140745) [Bug]: iOS screenshot CI rebuilds the same Watch app `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#140749](https://github.com/openclaw/openclaw/issues/140749) Meeting loopback verifier retains completed correlation scratch `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140731](https://github.com/openclaw/openclaw/issues/140731) Usage session cards repeatedly aggregate selected-day metrics during rendering `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#140715](https://github.com/openclaw/openclaw/issues/140715) Fragmented OpenRouter music events repeatedly rescan unfinished SSE lines `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#140709](https://github.com/openclaw/openclaw/issues/140709) Large file reads allocate complete line selections before bounded paging `maintainer` 💬1
- [#140700](https://github.com/openclaw/openclaw/issues/140700) Workshop document E2E compares fractional row geometry as exact height `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140721](https://github.com/openclaw/openclaw/issues/140721) Prepare CLI route arguments and startup facts once `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#140686](https://github.com/openclaw/openclaw/issues/140686) Claw removal tests bypass the canonical config cleanup owner `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140706](https://github.com/openclaw/openclaw/issues/140706) [Feature]: Generic read-only config mode for externally managed installs `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#140692](https://github.com/openclaw/openclaw/issues/140692) Unify repeated OpenAI strict-schema diagnostics `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140649](https://github.com/openclaw/openclaw/issues/140649) CI: reserve macOS release work and Android packaging for full validation `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#140668](https://github.com/openclaw/openclaw/issues/140668) Memory-flush preparation duplicates an already-owned bounded snapshot `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140623](https://github.com/openclaw/openclaw/issues/140623) [Bug]: QA confidence impact annotations shift report columns `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#140647](https://github.com/openclaw/openclaw/issues/140647) Wake-triggered agent turn: assistant reply not delivered to the turn's sourceChannel; OpenAI-compat completion returns empty / "No response from OpenClaw" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140646](https://github.com/openclaw/openclaw/issues/140646) Gateway hook to register a ledger row when any sub-agent primitive starts (incl. native Task/Agent CLI sidechains) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#140631](https://github.com/openclaw/openclaw/issues/140631) PowerShell exec host: CLIXML errors with stderr merged into Select-Object on fresh runspaces `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#140601](https://github.com/openclaw/openclaw/issues/140601) Telegram: consolidate delivery and polling ownership `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#140577](https://github.com/openclaw/openclaw/issues/140577) CI: reserve full iOS qualification for release validation `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#140606](https://github.com/openclaw/openclaw/issues/140606) Unix port diagnostics repeat process metadata queries for shared PIDs `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140611](https://github.com/openclaw/openclaw/issues/140611) Retire the unused route-only CLI plugin preload policy `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#140582](https://github.com/openclaw/openclaw/issues/140582) [Bug]: Telegram reply to a General-topic inbound lands in the session's previous topic (resolveSessionDeliveryTarget inherits out-of-band threadId) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#140627](https://github.com/openclaw/openclaw/issues/140627) Trusted official external channels lose gateway binding for delegated session control `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#140590](https://github.com/openclaw/openclaw/issues/140590) Consolidate duplicate Responses function-tool assembly `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#140605](https://github.com/openclaw/openclaw/issues/140605) OpenClaw 2026.9.2 still leaks inbound metadata on Feishu DM (follow-up to #93966) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:session-state` 💬1
- [#140595](https://github.com/openclaw/openclaw/issues/140595) Bundled catalog lookups rebuild collections and import hosted download services `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140574](https://github.com/openclaw/openclaw/issues/140574) improve(ci): keep Linux app pull requests focused on native smoke tests `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#140584](https://github.com/openclaw/openclaw/issues/140584) Usage page retains completed exports and discarded detail payloads `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#140560](https://github.com/openclaw/openclaw/issues/140560) Large document batches retain completed source buffers during extraction `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#140587](https://github.com/openclaw/openclaw/issues/140587) Skill Workshop apply fails: 'path is not a regular file under root' + EPERM for extraDir skills `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#140567](https://github.com/openclaw/openclaw/issues/140567) Usage JSON exports can mix context from a replacement session `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#141445](https://github.com/openclaw/openclaw/issues/141445) [Bug]: Memory sync repeatedly fails when OpenAI embeddings are unavailable

#### 🔒 Closed Issues
- [#79077](https://github.com/openclaw/openclaw/issues/79077) Support for Telegram bot-to-bot and guest-bot modes (Telegram May-7 2026 release)
- [#133984](https://github.com/openclaw/openclaw/issues/133984) [Bug]: 2026.7.1-2 → 2026.8.1 leaves Gateway unstartable; startup and `doctor --fix` both skip config-key migrations non-interactively
- [#137927](https://github.com/openclaw/openclaw/issues/137927) Internal context block (<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>) leaks into visible Telegram message text
- [#78963](https://github.com/openclaw/openclaw/issues/78963) WhatsApp: add listen-only / hooks-only mode for inbound messages without agent runs
- [#68264](https://github.com/openclaw/openclaw/issues/68264) [Bug] Canvas/Browser UI Visualization Fails to Render in Chat Environment
- [#140535](https://github.com/openclaw/openclaw/issues/140535) Discord /new returns “No reply was generated” and does not reset the channel session
- [#134896](https://github.com/openclaw/openclaw/issues/134896) [Bug] 2026.8.1 update: 5-blocker gateway restart cascade + doctor --fix self-referential failure on legacy workspace state
- [#124393](https://github.com/openclaw/openclaw/issues/124393) sessions: sync transcript rewrite deletes concurrently committed transcript rows and reports success
- [#140497](https://github.com/openclaw/openclaw/issues/140497) [Bug]: Discord setup accepts application ID as bot token, marks channel configured, never starts (lastError=null)
- [#138965](https://github.com/openclaw/openclaw/issues/138965) [Bug]: Interrupted transcript rewrite makes stale history the active conversation
- [#76759](https://github.com/openclaw/openclaw/issues/76759) [Feature]: export StatusSummary and ModelCatalogEntry types from plugin-sdk public surface
- [#136200](https://github.com/openclaw/openclaw/issues/136200) [Bug]: Feishu quoted merged-forward messages expose only placeholder text
- [#119583](https://github.com/openclaw/openclaw/issues/119583) CLI one-shot read commands open state/openclaw.sqlite read-write and auto-migrate, contending with the live gateway
- [#123872](https://github.com/openclaw/openclaw/issues/123872) Restart drain waits 300s by default while the packaged systemd unit stops at 30s — every stall ends in SIGKILL instead of a bounded abort
- [#97601](https://github.com/openclaw/openclaw/issues/97601) Add config toggle to suppress chat-visible fast auto-mode status updates
- [#140550](https://github.com/openclaw/openclaw/issues/140550) [Bug]: Discord guild allowlist writes do not apply while Control UI turns defer channel reload; stop/start keeps stale runtime config
- [#91556](https://github.com/openclaw/openclaw/issues/91556) Support MCP `notifications/tools/list_changed` in the client + add an HTTP reload endpoint for `mcp.servers.*`
- [#140466](https://github.com/openclaw/openclaw/issues/140466) [Bug]: xAI OAuth auto alias resolves to its canonical model, then fails runtime auth rematerialization
- [#135038](https://github.com/openclaw/openclaw/issues/135038) 2026.8.1 upgrade: gateway unstartable (session-store + exec-approvals gates don't self-heal), false agents.ownership UI error, no agent search
- [#139284](https://github.com/openclaw/openclaw/issues/139284) [Bug]: Track update-run terminalization and late progress recovery
- [#138590](https://github.com/openclaw/openclaw/issues/138590) [Bug]: Context usage meter measures against native contextWindow instead of effective budget
- [#139201](https://github.com/openclaw/openclaw/issues/139201) [Bug]: Reset normalization turns a successful transcript rewrite into active-suffix duplication
- [#127869](https://github.com/openclaw/openclaw/issues/127869) [Bug]: update --channel can unload macOS Gateway service on failed update
- [#138684](https://github.com/openclaw/openclaw/issues/138684) [Bug]: self-update leaves gateway stopped when workboard plugin's build-hash manifest fails the clean-checkout safety check
- [#140465](https://github.com/openclaw/openclaw/issues/140465) Node 22.23.2 is within engines, but four session tests fail on embedded-NUL SQLite reads
- [#141197](https://github.com/openclaw/openclaw/issues/141197) claude-cli backend: when no auth profile resolves, clearEnv is skipped and Claude Code falls back to its own login
- [#133757](https://github.com/openclaw/openclaw/issues/133757) [Bug]: Feishu group route bindings remain stale after config reload until Gateway restart
- [#140373](https://github.com/openclaw/openclaw/issues/140373) `skillCollectionReview` job fails with ProviderAuthError when the agent's model uses the `claude-cli` agentRuntime — same class as #95693, which was closed as fixed but did not cover this path
- [#116554](https://github.com/openclaw/openclaw/issues/116554) ask_user questions are never delivered to the channel for claude-cli-backed agents (created + blocked, never presented)
- [#140393](https://github.com/openclaw/openclaw/issues/140393) [Bug]: 2026.9.2 onboarding installs Codex but first dashboard chat fails with missing prepared runtime
- [#137690](https://github.com/openclaw/openclaw/issues/137690) [Bug]: sessions_spawn fails with "unknown parent session" for Telegram-originated sessions on 2026.8.2
- [#140214](https://github.com/openclaw/openclaw/issues/140214) [Bug]: memory.search.extraPaths silently omits a configured symlink root
- [#140482](https://github.com/openclaw/openclaw/issues/140482) [Bug]: xAI OAuth login overwrites the Grok OAuth catalog with the API catalog
- [#140416](https://github.com/openclaw/openclaw/issues/140416) CLI: bare '--import tsx' in resolveRuntimeWorkerArgv breaks every worker spawn outside a package-root cwd
- [#138892](https://github.com/openclaw/openclaw/issues/138892) doctor --fix --non-interactive applies a varying subset of repairs per run; some startup-blocking migrations have no working non-interactive path
- [#141670](https://github.com/openclaw/openclaw/issues/141670) Companion App: Chat bubble text truncation — lines cut off mid-display
- [#141661](https://github.com/openclaw/openclaw/issues/141661) Retire task-store snapshot write fallbacks
- [#141273](https://github.com/openclaw/openclaw/issues/141273) [Bug]: openclaw update leaves stale run stuck at phase=requested after gateway restart; blocks update repair/doctor with 'update parent owns Gateway activation'
- [#141563](https://github.com/openclaw/openclaw/issues/141563) [Bug] MCP tools with parameter-free schema (properties: {}) silently drop tool result in agent layer
- [#141545](https://github.com/openclaw/openclaw/issues/141545) QA credential scenario no longer selects its unified-secret browser test
- [#141510](https://github.com/openclaw/openclaw/issues/141510) LM Studio embeddings silently truncate through a smaller loaded instance
- [#141180](https://github.com/openclaw/openclaw/issues/141180) Bug: MCP server-fetch package 404 on startup (v2026.9.2)
- [#135002](https://github.com/openclaw/openclaw/issues/135002) [Bug]: 2026.7.1-2 → 2026.8.1 leaves configured DuckDuckGo plugin missing after upgrade
- [#136813](https://github.com/openclaw/openclaw/issues/136813) [Bug]: Secret egress proxy CA expires after 24h and is never renewed, silently breaking long-running Gateways
- [#140473](https://github.com/openclaw/openclaw/issues/140473) [Bug]: exec tool not exposed via bundleMcp bridge to claude-cli backend (2026.8.1)
- [#141473](https://github.com/openclaw/openclaw/issues/141473) Feature request: read-frequency-based MEMORY.md lifecycle (tracking + LRU/LFU eviction + archive)
- [#141361](https://github.com/openclaw/openclaw/issues/141361) [Bug]: Astra async tool loop reports false blockers and delivers obsolete replies despite completed tool results
- [#140681](https://github.com/openclaw/openclaw/issues/140681) [Bug]: memory-core: since 2026.8.1, memory.search spends ~2.3 s per query booting a throwaway KNN child process — KNN itself is ~70 ms (was in-process in 2026.7.1)
- [#127364](https://github.com/openclaw/openclaw/issues/127364) Nonzero post-core child exit strands the updater-stopped Gateway without failure finalization
- [#140737](https://github.com/openclaw/openclaw/issues/140737) fix(file-transfer): preserve actual archive member identities in directory policy
- [#138589](https://github.com/openclaw/openclaw/issues/138589) [Bug]: LM Studio discovery caps detected context at 64000, ignoring larger loaded instance context
- [#140999](https://github.com/openclaw/openclaw/issues/140999) Consolidate duplicated channel DM policy validation
- [#140447](https://github.com/openclaw/openclaw/issues/140447) [Bug]: Regression in v2026.8.1: mcp.sessionIdleTtlMs removed, breaks long-running background MCP servers
- [#126108](https://github.com/openclaw/openclaw/issues/126108) fix(models): recover after prepared catalog worker generation mismatch
- [#139946](https://github.com/openclaw/openclaw/issues/139946) [Bug]: Control UI agent-switcher action label overflows for long agent names
- [#141196](https://github.com/openclaw/openclaw/issues/141196) claude-cli backend: credential passed via CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR is ignored by Claude Code 2.1.251
- [#140943](https://github.com/openclaw/openclaw/issues/140943) [Bug]: Completed Swarm cards waste composer space on mobile
- [#131970](https://github.com/openclaw/openclaw/issues/131970) [Bug]: Concurrent node results collide on shared Git ref deletion
- [#131932](https://github.com/openclaw/openclaw/issues/131932) fix(linux): authorize tray gateway stop
- [#141176](https://github.com/openclaw/openclaw/issues/141176) [Bug]: Slack-bound agent repeats configured-model-unavailable warning when default model alias is stale
- [#140998](https://github.com/openclaw/openclaw/issues/140998) [Feature]: Start iOS live voice with a native Shortcut
- [#140404](https://github.com/openclaw/openclaw/issues/140404) Runtime context delivered in the `user` role, and inbound delimiters not escaped (2026.8.2)
- [#140950](https://github.com/openclaw/openclaw/issues/140950) Plugin info and inspect label metadata-only plugins as loaded
- [#140900](https://github.com/openclaw/openclaw/issues/140900) oops
- [#140785](https://github.com/openclaw/openclaw/issues/140785) HTML session exports display list Markdown literally
- [#140405](https://github.com/openclaw/openclaw/issues/140405) [Bug]: Cron-spawned orchestrator stalls after sessions_yield — level-2 completions never reach the level-1 sub-agent (works from normal sessions)
- [#139963](https://github.com/openclaw/openclaw/issues/139963) [Bug]: nested subagent requester's yield-batch wake is armed but never dispatched, then cleared
- [#140204](https://github.com/openclaw/openclaw/issues/140204) Worktree session creation reports "not a git checkout" when the repo has no commits
- [#140687](https://github.com/openclaw/openclaw/issues/140687) [Bug]: Workshop 700-line/390px E2E blank-row height assertion fails on CI
- [#116107](https://github.com/openclaw/openclaw/issues/116107) [Bug]: Config writes are not routed into a nested $include file, so changes under it cannot be saved
- [#140591](https://github.com/openclaw/openclaw/issues/140591) Consolidate duplicated diagnostic, embedding and schema orchestration
- [#140356](https://github.com/openclaw/openclaw/issues/140356) [Bug]: Successful /reset retains the previous task’s durable progress card
- [#141703](https://github.com/openclaw/openclaw/issues/141703) [Bug]: Embedded ChatGPT Responses turn abandoned when stream terminates mid-request (in-flight gap after #130721)
- [#141707](https://github.com/openclaw/openclaw/issues/141707) Telegram: add is_compact field to table block (Bot API 10.3 support)
- [#141702](https://github.com/openclaw/openclaw/issues/141702) [Bug]: ask_user never renders in Windows Companion webchat — tool hangs in Running, session stuck
- [#141691](https://github.com/openclaw/openclaw/issues/141691) Telegram table block falls back to plain text despite sendRichMessage (deliveryKind=text)
- [#141667](https://github.com/openclaw/openclaw/issues/141667) Failed media downloads falsely report an empty response body
- [#141685](https://github.com/openclaw/openclaw/issues/141685) [Bug]: GLM-5.3-Flash-EXL3 + OpenClaw agentic tool-calling: 3 compatibility bugs found & fixed
- [#141655](https://github.com/openclaw/openclaw/issues/141655) Inter-session deliveries to idle ephemeral voice sessions auto-spawn acknowledgement turns (reply flood on connected surfaces)
- [#141644](https://github.com/openclaw/openclaw/issues/141644) Node approval notices ignore renamed device labels
- [#141606](https://github.com/openclaw/openclaw/issues/141606) status --all reports no missing skill requirements when prerequisites fail
- [#141605](https://github.com/openclaw/openclaw/issues/141605) [Bug]: 2026.9.2 Skill Workshop hard-coded 120s timeout gives ineffective configuration advice (fixed on main by #140315)
- [#141599](https://github.com/openclaw/openclaw/issues/141599) [Bug]:
- [#141550](https://github.com/openclaw/openclaw/issues/141550) [Bug]: Disabled channel accounts show configured/OK in health output
- [#141582](https://github.com/openclaw/openclaw/issues/141582) Every request to an Anthropic model fails with "provider rejected the request schema or tool payload" on 2026.8.2
- [#141523](https://github.com/openclaw/openclaw/issues/141523) Security scout: local tracking ref far behind origin/main; plugin-safety coverage unverified
- [#141568](https://github.com/openclaw/openclaw/issues/141568) opencode-go: bundled plugin sends no x-opencode-session — OpenCode Go rejects headerless requests since Sep 6 (400 MissingSessionID)
- [#141561](https://github.com/openclaw/openclaw/issues/141561) [Regression] Bundled EmbeddingGemma runs at llama.cpp default 512 ubatch (c97c5b65 -> 2026.9.2), HTTP 500 on chunks >= 513 tokens
- [#141539](https://github.com/openclaw/openclaw/issues/141539) Issue on docs
- [#141508](https://github.com/openclaw/openclaw/issues/141508) Inference provider inventories duplicate command setup and output handling
- [#141505](https://github.com/openclaw/openclaw/issues/141505) Worktrees actions repeat the same completion lifecycle
- [#141502](https://github.com/openclaw/openclaw/issues/141502) Loopback fingerprint selection repeats an exhausted candidate
- [#141498](https://github.com/openclaw/openclaw/issues/141498) Package source captions repeat filenames without documenting contracts
- [#141349](https://github.com/openclaw/openclaw/issues/141349) [Bug]: memory status --index omits available llama.cpp diagnostics
- [#137410](https://github.com/openclaw/openclaw/issues/137410) [Feature]: Model selection dropdown for fallback.
- [#141430](https://github.com/openclaw/openclaw/issues/141430) LM Studio embeddings fail after model eviction with JIT disabled
- [#141261](https://github.com/openclaw/openclaw/issues/141261) Improve Code Mode continuation and typed tool composition
- [#141424](https://github.com/openclaw/openclaw/issues/141424) Ollama onboarding accepts embedding-only models as chat defaults
- [#141357](https://github.com/openclaw/openclaw/issues/141357) LM Studio inference can select a smaller loaded instance than its context budget
- [#141356](https://github.com/openclaw/openclaw/issues/141356) Ollama tool follow-ups discard retained assistant reasoning
- [#141387](https://github.com/openclaw/openclaw/issues/141387) [Bug]: Duplicate persisted Codex prompt identity blocks settled-turn finalization recovery
- [#133122](https://github.com/openclaw/openclaw/issues/133122) [Feature]: Let the system agent list installed plugins
- [#141366](https://github.com/openclaw/openclaw/issues/141366) [Feature]: Surface bundled plugin destinations (e.g. Workboard) in Hub navigation
- [#141351](https://github.com/openclaw/openclaw/issues/141351) WebChat Control UI renders each assistant paragraph twice via openclawStreamFallback segment double-render on stalled streams
- [#141099](https://github.com/openclaw/openclaw/issues/141099) [Bug]: Reef recovery cursor skips parked entries across live frames
- [#141035](https://github.com/openclaw/openclaw/issues/141035) Control UI notifications miss attention and open unrelated conversations
- [#141263](https://github.com/openclaw/openclaw/issues/141263) [Bug]: Cold agents list omits configured channel account names
- [#141290](https://github.com/openclaw/openclaw/issues/141290) [Bug]: mainm不能流式输出
- [#141272](https://github.com/openclaw/openclaw/issues/141272) [Feature]: Add Frontière AI (getfrontiereai.eu) as an official AI provider
- [#141275](https://github.com/openclaw/openclaw/issues/141275) Internal runtime-context block leaks into visible conversation as a separate turn
- [#141259](https://github.com/openclaw/openclaw/issues/141259) TEST-PERMISSION-PROBE
- [#141255](https://github.com/openclaw/openclaw/issues/141255) [Bug]: second model-scoped cooldown widens shared auth profile and skips healthy third fallback
- [#141133](https://github.com/openclaw/openclaw/issues/141133) openclaw gateway installs no unhandledRejection/uncaughtException handler: the fast path returns before installUnhandledRejectionHandler()
- [#141132](https://github.com/openclaw/openclaw/issues/141132) Per-attempt AsyncLocalStorage is never disabled, leaking instances and degrading every await process-wide
- [#141248](https://github.com/openclaw/openclaw/issues/141248) [Bug]: 2026.9.2 Skill Workshop Experience Review loses foreground prompt-cache prefix
- [#141222](https://github.com/openclaw/openclaw/issues/141222) [Bug]: configured aliases disappear from missing model rows
- [#141243](https://github.com/openclaw/openclaw/issues/141243) [Bug]: SecretRef resolution broken across multiple config paths (channels + plugins) in 2026.9.2
- [#141198](https://github.com/openclaw/openclaw/issues/141198) CI prerequisite planning repeatedly recompiles large glob inventories
- [#141231](https://github.com/openclaw/openclaw/issues/141231) Skill Workshop: agent tool cannot list/inspect/patch cross-workspace proposals or skills (tool layer is caller-scoped; Gateway API and CLI already support --agent targeting)
- [#141230](https://github.com/openclaw/openclaw/issues/141230) Workboard: expired claims still block all non-owner mutations (verified on main); expired-claim sweep in dispatch not in stable release; token-less owner release undocumented
- [#141226](https://github.com/openclaw/openclaw/issues/141226) [Bug]: Android app composer input collapses to ~4 characters wide on new chat
- [#141187](https://github.com/openclaw/openclaw/issues/141187) [Bug]: delivery-mirror messages from "message send" command are persisted and searchable but never included in model context (live or rebuilt)
- [#131004](https://github.com/openclaw/openclaw/issues/131004) [Bug]: WhatsApp approval reactions are silently dropped on transient Gateway failures
- [#137116](https://github.com/openclaw/openclaw/issues/137116) [Bug]: Terminal upload batches have no aggregate staging bound
- [#141182](https://github.com/openclaw/openclaw/issues/141182) Bug: @tencent-weixin/openclaw-weixin plugin blocks 'openclaw tools' command
- [#141111](https://github.com/openclaw/openclaw/issues/141111) TUI gateway status omits channel diagnostics
- [#140968](https://github.com/openclaw/openclaw/issues/140968) [Bug]: Docker setup includes same-filesystem workspace files in ownership repair
- [#140817](https://github.com/openclaw/openclaw/issues/140817) [Bug]: doctor reports the selected context engine as "not registered" when its plugin registered in discovery mode
- [#141117](https://github.com/openclaw/openclaw/issues/141117) [Bug]: macOS native app fails to load workboard plugin stylesheet (WKWebView) — blank Control UI panel
- [#141068](https://github.com/openclaw/openclaw/issues/141068) fix: CI growth test falsely reports moved non-tooling jobs after tooling split
- [#141036](https://github.com/openclaw/openclaw/issues/141036) [Bug]: Doctor recommends automatic retirement for preserved Workshop backups
- [#140703](https://github.com/openclaw/openclaw/issues/140703) OpenShell mirror failures omit published shadow recovery paths
- [#140911](https://github.com/openclaw/openclaw/issues/140911) Recovered subagent completion can fail to reach a recovering parent
- [#140881](https://github.com/openclaw/openclaw/issues/140881) Browser node responses allocate a second string only to count encoded bytes
- [#140838](https://github.com/openclaw/openclaw/issues/140838) Playback transcoding duplicates the complete source during input staging
- [#140865](https://github.com/openclaw/openclaw/issues/140865) Tool Search repeats full JSON copies after IPC normalization
- [#140867](https://github.com/openclaw/openclaw/issues/140867) Copilot transcript preparation clones an already-private replay projection
- [#140836](https://github.com/openclaw/openclaw/issues/140836) Slack structured replies repeat authored rendering within one delivery attempt
- [#140915](https://github.com/openclaw/openclaw/issues/140915) [Bug]: `tailscale serve status` hides foreground claims, and the exit-78 error message recommends a command that cannot clear them
- [#140828](https://github.com/openclaw/openclaw/issues/140828) Share bounded edit-distance calculation used by model suggestions
- [#140826](https://github.com/openclaw/openclaw/issues/140826) Paired-node transfers redundantly serialize and parse each outbound frame
- [#140800](https://github.com/openclaw/openclaw/issues/140800) Meeting shutdown leaves consults active and accepts late speech settlement
- [#140795](https://github.com/openclaw/openclaw/issues/140795) Windows worker repository preparation fails on Git null-device config
- [#140786](https://github.com/openclaw/openclaw/issues/140786) Raw Slack and Teams uploads retain avoidable BufferSource copies
- [#140772](https://github.com/openclaw/openclaw/issues/140772) Terminal wrapping retains eager grapheme arrays during sequential iteration
- [#135471](https://github.com/openclaw/openclaw/issues/135471) [Bug]: gateway status --require-rpc rejects an auth-none service as an explicit URL override
- [#140351](https://github.com/openclaw/openclaw/issues/140351) runtime.gateway.request refusal names neither the plugin nor the cause
- [#140691](https://github.com/openclaw/openclaw/issues/140691) Refresh newly cooled npm dependencies for September 7
- [#140745](https://github.com/openclaw/openclaw/issues/140745) [Bug]: iOS screenshot CI rebuilds the same Watch app
- [#140749](https://github.com/openclaw/openclaw/issues/140749) Meeting loopback verifier retains completed correlation scratch
- [#140731](https://github.com/openclaw/openclaw/issues/140731) Usage session cards repeatedly aggregate selected-day metrics during rendering
- [#140715](https://github.com/openclaw/openclaw/issues/140715) Fragmented OpenRouter music events repeatedly rescan unfinished SSE lines
- [#140709](https://github.com/openclaw/openclaw/issues/140709) Large file reads allocate complete line selections before bounded paging
- [#140700](https://github.com/openclaw/openclaw/issues/140700) Workshop document E2E compares fractional row geometry as exact height
- [#140721](https://github.com/openclaw/openclaw/issues/140721) Prepare CLI route arguments and startup facts once
- [#140686](https://github.com/openclaw/openclaw/issues/140686) Claw removal tests bypass the canonical config cleanup owner
- [#138815](https://github.com/openclaw/openclaw/issues/138815) [Bug]: expired npm install rollback removes a newer installation
- [#140692](https://github.com/openclaw/openclaw/issues/140692) Unify repeated OpenAI strict-schema diagnostics
- [#140649](https://github.com/openclaw/openclaw/issues/140649) CI: reserve macOS release work and Android packaging for full validation
- [#140668](https://github.com/openclaw/openclaw/issues/140668) Memory-flush preparation duplicates an already-owned bounded snapshot
- [#140623](https://github.com/openclaw/openclaw/issues/140623) [Bug]: QA confidence impact annotations shift report columns
- [#140601](https://github.com/openclaw/openclaw/issues/140601) Telegram: consolidate delivery and polling ownership
- [#140577](https://github.com/openclaw/openclaw/issues/140577) CI: reserve full iOS qualification for release validation
- [#140606](https://github.com/openclaw/openclaw/issues/140606) Unix port diagnostics repeat process metadata queries for shared PIDs
- [#140611](https://github.com/openclaw/openclaw/issues/140611) Retire the unused route-only CLI plugin preload policy
- [#140590](https://github.com/openclaw/openclaw/issues/140590) Consolidate duplicate Responses function-tool assembly
- [#140595](https://github.com/openclaw/openclaw/issues/140595) Bundled catalog lookups rebuild collections and import hosted download services
- [#140574](https://github.com/openclaw/openclaw/issues/140574) improve(ci): keep Linux app pull requests focused on native smoke tests
- [#140584](https://github.com/openclaw/openclaw/issues/140584) Usage page retains completed exports and discarded detail payloads
- [#140560](https://github.com/openclaw/openclaw/issues/140560) Large document batches retain completed source buffers during extraction
- [#140567](https://github.com/openclaw/openclaw/issues/140567) Usage JSON exports can mix context from a replacement session
- [#141445](https://github.com/openclaw/openclaw/issues/141445) [Bug]: Memory sync repeatedly fails when OpenAI embeddings are unavailable

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 243,048 · **Open issues:** 40,582 · **Last push:** <1h ago

On September 7, 2026, Hermes Agent released version v0.21.1 (v2026.9.7), a patch that incorporates a substantial 5,139 non-merge commits, providing updates and fixes since v0.21.0. There were no merged pull requests in the last 24 hours, indicating a period of consolidation rather than feature addition. However, significant issues were reported, including #105235, which addresses the need to tune the first sentence in the streaming TTS independently of steady-state batching, and #105145, which details a recurring problem with the `hermes update` process on Windows desktop systems. Other notable new issues include #105383 regarding a missing ACP model picker in Zed 1.18+ and #105465, which highlights a problem with the Desktop UI language resetting after updates.

#### 🚀 New Releases
- [v2026.9.7](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.9.7) Hermes Agent v0.21.1 (v2026.9.7)

#### 🐛 New Issues
- [#105235](https://github.com/NousResearch/hermes-agent/issues/105235) Streaming TTS: tune the first sentence independently of steady-state batching `duplicate` `type/feature` `comp/gateway` `tool/tts` 💬4
- [#105145](https://github.com/NousResearch/hermes-agent/issues/105145) Windows desktop-driven `hermes update` always reports FAILED (exit 8) after a successful update - post-update verification resolves wrong working directory `type/bug` `comp/cli` `P1` `sweeper:risk-platform-windows` 💬3
- [#105383](https://github.com/NousResearch/hermes-agent/issues/105383) [Bug]: ACP model picker missing in Zed 1.18+ — adapter still on legacy session-models API (ACP v1.3.0 moved to configOptions) `type/bug` `comp/acp` `P3` 💬3
- [#105465](https://github.com/NousResearch/hermes-agent/issues/105465) Desktop UI language resets to English after every `hermes update` relaunch even though `display.language` stays persisted in config.yaml `type/bug` `duplicate` `area/config` `P3` 💬2
- [#105427](https://github.com/NousResearch/hermes-agent/issues/105427) Gateway lifecycle scanner rejects Python directory literals and absolute interpreter binaries `type/bug` `comp/cron` `P2` 💬2
- [#105399](https://github.com/NousResearch/hermes-agent/issues/105399) [Bug]: /skills diff <id> returns empty batch context for pending create operations `type/bug` `comp/cli` `tool/skills` `P2` 💬2
- [#105433](https://github.com/NousResearch/hermes-agent/issues/105433) [Bug]: /v1/runs status records are in-memory with a hardcoded 1h TTL — pollers hit permanent 404 run_not_found `type/feature` `comp/gateway` `area/config` `P3` 💬1
- [#105422](https://github.com/NousResearch/hermes-agent/issues/105422) PDF skill: add professional document-generation defaults and reusable design guidance `duplicate` `type/feature` `tool/skills` `P3` 💬1
- [#105420](https://github.com/NousResearch/hermes-agent/issues/105420) macOS: improve local terminal shell consistency and enforce tool calls with chat_completions `duplicate` `type/feature` `comp/agent` `tool/terminal` 💬1
- [#105412](https://github.com/NousResearch/hermes-agent/issues/105412) Codex app-server still double-counts cached input on v0.21.1 (tracked by #63654) `type/bug` `comp/agent` `provider/openai` `P3` 💬1
- [#105404](https://github.com/NousResearch/hermes-agent/issues/105404) Tool-loop halt response refers messaging users to invisible tool results `type/bug` `comp/agent` `P3` 💬1
- [#105405](https://github.com/NousResearch/hermes-agent/issues/105405) Lock-order deadlock: load_hermes_dotenv() inside _CONFIG_LOCK vs _SECRET_SOURCE_CACHE_LOCK freezes the gateway event loop (watchdog exit 75) `type/bug` `comp/cli` `comp/gateway` `area/config` 💬1
- [#105408](https://github.com/NousResearch/hermes-agent/issues/105408) Kanban orchestrators lack a native audited dependency-unlink tool `type/feature` `comp/cron` `P3` 💬1
- [#105396](https://github.com/NousResearch/hermes-agent/issues/105396) [Bug]: Multiplexed gateway starves non-default profiles of MCP servers — scope-tagging tied to name-keyed discovery, every /reload-mcp on a non-default profile reports 'No MCP servers connected' `type/bug` `comp/agent` `comp/gateway` `tool/mcp` 💬1
- [#105398](https://github.com/NousResearch/hermes-agent/issues/105398) image_gen/openai-codex: hardcoded gpt-5.5 host model permanently breaks image generation on accounts that lost gpt-5.5 `type/bug` `comp/plugins` `tool/vision` `provider/openai` 💬1
- [#105469](https://github.com/NousResearch/hermes-agent/issues/105469) [Bug]: Desktop — approval.respond fails closed on multi-profile installs because blocking-input events carry the ephemeral ui_session handle
- [#105460](https://github.com/NousResearch/hermes-agent/issues/105460) fix(bot-mode): bot DM delivery resolves to the default profile's session, not the target bot's `type/bug` `comp/cli` `comp/tools` `P2`
- [#105461](https://github.com/NousResearch/hermes-agent/issues/105461) fix(session): resuming a high-pinned session re-seeds the composer draft, overriding the config default `type/bug` `provider/deepseek` `area/config` `P2`
- [#105462](https://github.com/NousResearch/hermes-agent/issues/105462) fix(whatsapp): self-chat stays bound to the previous number's LID after a number change `type/bug` `comp/gateway` `platform/whatsapp` `P2`
- [#105457](https://github.com/NousResearch/hermes-agent/issues/105457) [Feature]: Import local Claude Cowork and label ChatGPT Work sessions `type/feature` `P3` `comp/desktop`
- [#105443](https://github.com/NousResearch/hermes-agent/issues/105443) [Bug]: Codex -900k alias exceeds live max_context_window=872000 and ignores catalog max `type/bug` `comp/agent` `provider/openai` `P3`
- [#105421](https://github.com/NousResearch/hermes-agent/issues/105421) PDF: add professional HTML/CSS + Chrome headless rendering workflow `type/feature` `tool/skills` `P3`
- [#105418](https://github.com/NousResearch/hermes-agent/issues/105418) macOS: improve local terminal shell consistency and enforce tool calls with chat_completions `type/feature` `comp/agent` `tool/terminal` `backend/local`
- [#105426](https://github.com/NousResearch/hermes-agent/issues/105426) Turkish language support: improve prompts, skills, and tool-facing UX `type/feature` `comp/agent` `P3` `area/i18n`
- [#105411](https://github.com/NousResearch/hermes-agent/issues/105411) Expose delegation reasoning in the existing auxiliary-model setup flow `type/feature` `comp/cli` `tool/delegate` `area/config`
- [#105413](https://github.com/NousResearch/hermes-agent/issues/105413) Add noninteractive, provider-scoped JSON model discovery `type/feature` `comp/cli` `P3`
- [#105414](https://github.com/NousResearch/hermes-agent/issues/105414) [Bug]: Singularity terminal backend crashes with `_build_sandbox_env() got multiple values for argument 'env_type'` `type/bug` `backend/daytona` `comp/tools` `tool/terminal`
- [#105401](https://github.com/NousResearch/hermes-agent/issues/105401) Auxiliary Codex Responses drops tool strictness and diverges from the direct route `type/bug` `comp/agent` `provider/openai` `P3`
- [#105391](https://github.com/NousResearch/hermes-agent/issues/105391) Plugin API request: portable signed proof for Guardian LLM approval verdicts `type/feature` `comp/tools` `comp/plugins` `P3`
- [#105397](https://github.com/NousResearch/hermes-agent/issues/105397) Bind native reviews to immutable candidates and enforce inspection-only tools `type/feature` `comp/agent` `tool/delegate` `P3`
- [#105400](https://github.com/NousResearch/hermes-agent/issues/105400) Proposal: define a testable side-effect boundary for updater operations `type/refactor` `comp/cli` `P3` `area/install-update`
- [#105381](https://github.com/NousResearch/hermes-agent/issues/105381) [Bug]: Hosted Hermes Cloud browser_exec fails despite Browser Use via Nous Portal `type/bug` `tool/browser` `P2` `comp/portal`

#### 🔒 Closed Issues
- [#99956](https://github.com/NousResearch/hermes-agent/issues/99956) fix(cron): bot-chat delivery fails when target profile has active session lock
- [#101060](https://github.com/NousResearch/hermes-agent/issues/101060) message_agent reports status=sent on dispatch, then fails to deliver into desktop-owned Bot Chat sessions (single-surface lock) — DMs silently lost between local profiles
- [#102644](https://github.com/NousResearch/hermes-agent/issues/102644) Compressor lazy path ignores providers.<name>.models.<id>.context_length (/usage shows catalog window)
- [#103030](https://github.com/NousResearch/hermes-agent/issues/103030) target_busy delivery refused by background-tab lease: ownership tracks open chat, not viewed tab (follow-up to #99956)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,191 · **Open issues:** 7,729 · **Last push:** <1h ago

On September 8, 2026, there were no new releases for vLLM, but several significant merged pull requests were completed. Notably, the addition of attention-sink support for ROCm AITER sparse MLA in PR #54404 and support for the new Cohere Compass model in PR #54774 were among the highlighted features. Bug fixes included restoring response validation error boundaries in PR #55761 and addressing several CUDA-related issues impacting performance. Additionally, a new RFC issue (#55697) was raised regarding Application-Directed Prefix Checkpoints for Mamba, indicating ongoing discussions about future enhancements. Overall, it was a routine day focused on stability and incremental improvements within the project.

#### ✅ Merged PRs
- [#54404](https://github.com/vllm-project/vllm/pull/54404) [ROCm][CI] Add attention-sink support to ROCm AITER sparse MLA
- [#53052](https://github.com/vllm-project/vllm/pull/53052) [Feature] Support EAGLE3 for Sarvam
- [#55665](https://github.com/vllm-project/vllm/pull/55665) [Pooling] Honor request_id from request bodies
- [#55761](https://github.com/vllm-project/vllm/pull/55761) [Bugfix] Restore Responses validation error boundary
- [#55604](https://github.com/vllm-project/vllm/pull/55604) [CI] Synchronize shared offload unlink test before observing pathname
- [#55454](https://github.com/vllm-project/vllm/pull/55454) [CI] Recover empty multi-node Docker networks and finish partial cleanup
- [#55588](https://github.com/vllm-project/vllm/pull/55588) [CI/Build] Unskip ColQwen3 multimodal pooling tests on Transformers v5
- [#55731](https://github.com/vllm-project/vllm/pull/55731) [CI] reduce npu CI use time and add timeout
- [#54774](https://github.com/vllm-project/vllm/pull/54774) [Model] Add Cohere Compass model
- [#55728](https://github.com/vllm-project/vllm/pull/55728) [Tests] Update SarvamMLA transformers v5 compatibility reason to hf
- [#55124](https://github.com/vllm-project/vllm/pull/55124) [Docs] Clarify admission control limits apply server-wide, not per DP rank
- [#54917](https://github.com/vllm-project/vllm/pull/54917) [Bugfix][Gemma] Conditionally create KV projections/norms on KV-shared layers
- [#55551](https://github.com/vllm-project/vllm/pull/55551) [Pooling] Honor max_embed_len for chunked embeddings
- [#53565](https://github.com/vllm-project/vllm/pull/53565) [3/N][warmup][DSv4] Migrate FA4 MLA and shared CuTeDSL kernels
- [#53564](https://github.com/vllm-project/vllm/pull/53564) [2/N][warmup][DSv4] Migrate sequence and DCP kernels
- [#55701](https://github.com/vllm-project/vllm/pull/55701) [Frontend] Migrate Responses harmony input validation to VLLMValidationError
- [#55369](https://github.com/vllm-project/vllm/pull/55369) [Bugfix][Spec Decode] Resolve n_predict from text_config for Qwen3.5 multimodal MTP
- [#50195](https://github.com/vllm-project/vllm/pull/50195) [Frontend] Add stateless /v1/responses/render endpoint
- [#52651](https://github.com/vllm-project/vllm/pull/52651) [Bugfix][Quantization][XPU] Fix moe_wna16 linear weight loading
- [#52771](https://github.com/vllm-project/vllm/pull/52771) [Bugfix] OffloadingConnector: stop zeroing offload hits under MTP/EAGLE spec decode
- [#54890](https://github.com/vllm-project/vllm/pull/54890) [Qwen3.8-Flash-Next] Support FP8 indexer cache for QSA
- [#55237](https://github.com/vllm-project/vllm/pull/55237) [Bugfix] Fix cuda profiler missing bug
- [#55691](https://github.com/vllm-project/vllm/pull/55691) [Docs] Add OLMo 2 to batch-invariance tested models
- [#53689](https://github.com/vllm-project/vllm/pull/53689) [XPU][LoRA] Support LoRA for DeepSeek V4 on XPU
- [#53580](https://github.com/vllm-project/vllm/pull/53580) [XPU] Route grouped_topk to the fused _moe_C kernel on XPU
- [#50257](https://github.com/vllm-project/vllm/pull/50257) [Frontend] Migrate Responses API validation errors to VLLMValidationError
- [#55660](https://github.com/vllm-project/vllm/pull/55660) [CI] [Test] skip test_wna16_cuda_high_bit_skips_humming on non-CUDA platforms
- [#55272](https://github.com/vllm-project/vllm/pull/55272) [Qwen3.8-Flash-Next] Remove torch.compile for NVIDIA implementation
- [#47505](https://github.com/vllm-project/vllm/pull/47505) [KVConnector] Guard lmcache_mp_connector state transition with num_external_tokens
- [#53586](https://github.com/vllm-project/vllm/pull/53586) [Bugfix] DSv4 MXFP4 selector: stop narrowing explicit aliases to their BF16 variant
- [#54643](https://github.com/vllm-project/vllm/pull/54643) [Bugfix][MooncakeStore] Fix finish-time save crash on hybrid models
- [#55653](https://github.com/vllm-project/vllm/pull/55653) [CI][ROCm] Temporarily skip unsupported HY-V4 initialization
- [#41567](https://github.com/vllm-project/vllm/pull/41567) [EPD] Add ECMooncakeConnector for encoder cache over Mooncake TransferEngine
- [#55642](https://github.com/vllm-project/vllm/pull/55642) [Bugfix][Audio] Restore soundfile-first automatic decoding
- [#52945](https://github.com/vllm-project/vllm/pull/52945) [XPU] Use fused_input_norm kernel in FusedInputNorm
- [#54022](https://github.com/vllm-project/vllm/pull/54022) [Bugfix] Gracefully handle unsupported reasoning_effort in chat templates
- [#55630](https://github.com/vllm-project/vllm/pull/55630) [CI] fix pre-commit
- [#54797](https://github.com/vllm-project/vllm/pull/54797) [Perf] Extend Qwen Triton warmup to avoid first-request latency spikes
- [#55407](https://github.com/vllm-project/vllm/pull/55407) [Bugfix] Fix Kimi K3 NVFP4 MoE weight conversion OOM
- [#54975](https://github.com/vllm-project/vllm/pull/54975) [Bugfix][Offloader] Preserve prefetch static-buffer slot ownership
- [#53161](https://github.com/vllm-project/vllm/pull/53161) [ROCm][Perf][DeepSeek V4] Fuse native FP8 shared expert with MXFP4 routed experts

#### 🐛 New Issues
- [#55697](https://github.com/vllm-project/vllm/issues/55697) [RFC]: Application-Directed Prefix Checkpoints for Mamba / Hybrid Prefix Caching `kv-cache-manager` 💬2
- [#55635](https://github.com/vllm-project/vllm/issues/55635) [Feature]: EFA vLLM image should work out of the box on AWS NVIDIA GPUs `feature request` `nvidia` 💬3
- [#55687](https://github.com/vllm-project/vllm/issues/55687) [Bug][ROCm] rope_kvcache / qk_norm_rope_kvcache fusions make GLM-5.3 8x slower on gfx950 (partitioning alone is fine) `rocm` `glm` 💬3
- [#55634](https://github.com/vllm-project/vllm/issues/55634) [Usage]: aborted requests are counted in prompt_tokens_total but absent from every per-request metric 💬2
- [#55679](https://github.com/vllm-project/vllm/issues/55679) [Feature]: KV cache events — bind-time ephemeral port allocation and a discovery API `feature request` 💬2
- [#55722](https://github.com/vllm-project/vllm/issues/55722) [Bug]: `fuse_attn_quant` without `use_inductor_graph_partition` drops all piecewise cudagraphs on backends that cannot do FULL (-38 % on ROCm sparse MLA) `rocm` 💬2
- [#55720](https://github.com/vllm-project/vllm/issues/55720) [Bug]: `fuse_rope_kvcache` / `fuse_qk_norm_rope_kvcache` silently register zero patterns on MLA-only models, but their side effects are still paid `rocm` 💬2
- [#55626](https://github.com/vllm-project/vllm/issues/55626) [Bug]: GLM-5.3-Flash: CUDA illegal memory access in FlashInfer SM90 sparse MLA backend under TP+EP and MTP decoding on H20 (vLLM nightly 260904) `bug` `rocm` `glm` 💬2
- [#55636](https://github.com/vllm-project/vllm/issues/55636) [Bug] DeepSeek V4 sparse MLA can index a nonexistent block-table row during CUDA-graph warmup `deepseek` 💬2
- [#55632](https://github.com/vllm-project/vllm/issues/55632) [Bug][ROCm] 15s EngineCore cleanup grace is defeated by MultiprocExecutor's 9s worker-kill budget; workers SIGKILLed mid-teardown `rocm` 💬2
- [#55683](https://github.com/vllm-project/vllm/issues/55683) [Feature]: LoRA support for deepseek v4 flash vision `feature request` `deepseek` 💬1
- [#55689](https://github.com/vllm-project/vllm/issues/55689) [Bug]: GLM-5.3-Flash produces repetitive / off‑topic outputs in PD‑disaggregated deployment `bug` `kv-connector` `glm` 💬1
- [#55639](https://github.com/vllm-project/vllm/issues/55639) [RFC][EPD] Avoid redundant encoder work when Prefill can reuse KV or embeddings `multi-modality` 💬1
- [#55633](https://github.com/vllm-project/vllm/issues/55633) [Bug]: legacy qwen3_xml streaming parser emits whitespace-only content before the first tool call `bug` `tool-calling` 💬1
- [#55637](https://github.com/vllm-project/vllm/issues/55637) [Bug] DeepSeek-V4 sparse MLA can index past block-table rows during CUDA-graph warmup `deepseek` `DSv4` 💬1
- [#55775](https://github.com/vllm-project/vllm/issues/55775) [Bug]: MTP + FlashInfer long-context CUDA IMA / Xid 31 still on v0.27.1 (Qwen3.8-27B-NVFP4, RTX 5090, max-num-seqs=1)
- [#55773](https://github.com/vllm-project/vllm/issues/55773) glm5_next (GLM-5.3-Flash): fp8_ds_mla cache path asserts pe_dim==64 but the model has qk_rope_head_dim=0 (NoPE MLA) — engine init fails on SM120 `quantization` `glm`
- [#55770](https://github.com/vllm-project/vllm/issues/55770) [Feature]: Accept a pre-tokenized prompt on /v1/chat/completions
- [#55766](https://github.com/vllm-project/vllm/issues/55766) [Bug] Qwen3.5/3.8 hybrid GDN: NaN logits after a prefix-cache hit when the previous prefill ended 4-10 tokens past a block boundary (v0.28.0, mamba cache mode align)
- [#55757](https://github.com/vllm-project/vllm/issues/55757) [Bug]: sparse-MLA (DSA) models unservable on SM120 in v0.28.0 — two faults in the MHA prefill path
- [#55754](https://github.com/vllm-project/vllm/issues/55754) [Bug]: Configured tool parser is ignored for forced calls unless auto tool choice is enabled `tool-calling`
- [#55750](https://github.com/vllm-project/vllm/issues/55750) [Bug]: Routed-expert metadata request crashes EngineCore and breaks subsequent requests `bug`
- [#55746](https://github.com/vllm-project/vllm/issues/55746) [Bug]: bench serve drops custom headers when stopping the profiler
- [#55729](https://github.com/vllm-project/vllm/issues/55729) [Bug][MooncakeConnector] Bootstrap registration timeout is fatal during slow rank-0 initialization `quantization`
- [#55739](https://github.com/vllm-project/vllm/issues/55739) [Bug]: workload sweep bounds can disagree with the benchmark prompt count
- [#55725](https://github.com/vllm-project/vllm/issues/55725) [Bug]: Weight loading error on GLM-5.3-Flash (`KeyError: 'layers.11.shared_transformer.self_attn.qkv_proj.weight'`) in 2-node setup `bug` `glm`
- [#55733](https://github.com/vllm-project/vllm/issues/55733) [Bug]: Encoder-decoder encoder-cache budget (num_free_slots) inflates on every decode step, making admission control unsound `bug`
- [#55726](https://github.com/vllm-project/vllm/issues/55726) [Bug]: Glm5NextVideoBackend does not cap request-controlled fps/max_frames, unlike GLMGA after #54935
- [#55718](https://github.com/vllm-project/vllm/issues/55718) [Bug]: Benchmark endpoint validation rejects URLs with query parameters
- [#55714](https://github.com/vllm-project/vllm/issues/55714) [Bug]: Sweep readiness uses the wrong address for equals options, repeated ports and IPv6
- [#55709](https://github.com/vllm-project/vllm/issues/55709) [Bug]: CLI drops explicit empty prompts and zero token limits
- [#55694](https://github.com/vllm-project/vllm/issues/55694) [Bug]: Sweep plots omit unset parameter values
- [#55673](https://github.com/vllm-project/vllm/issues/55673) [Bug]: FlashInfer TensorRT-LLM NVFP4 KV cache produces invalid Qwen3.5-397B output on Blackwell `bug` `quantization`
- [#55663](https://github.com/vllm-project/vllm/issues/55663) [Bug]: Sweep plots drop queued figures and hide worker failures
- [#55659](https://github.com/vllm-project/vllm/issues/55659) [Bug]: /v1/responses crashes on persisted additional_tools input items
- [#55644](https://github.com/vllm-project/vllm/issues/55644) [Bug]: GLM-5.3-Flash video input: placeholder count (GLM-4.6V timestamp path) disagrees with the pixel path's frame sampling, engine core dies in _merge_multimodal_embeddings `quantization` `glm`
- [#55649](https://github.com/vllm-project/vllm/issues/55649) [Bug]: NVFP4 gated-MoE end-padding silently corrupts Gemma-4-26B at TP2 on B200 (SM100)
- [#55625](https://github.com/vllm-project/vllm/issues/55625) [Bug]: incoai glm-5.3-nvfp4+ 5.3 dflash unknown code if sq>=80 `bug` `glm`

#### 🔒 Closed Issues
- [#52735](https://github.com/vllm-project/vllm/issues/52735) [Bug]: OffloadingConnector stores but never serves when MTP/EAGLE speculative decoding is enabled (hybrid GDN model, XPU)
- [#41865](https://github.com/vllm-project/vllm/issues/41865) [Bug]: FlashInfer GDN JIT Compilation Causes Multi-Worker Deadlock
- [#41821](https://github.com/vllm-project/vllm/issues/41821) [RFC]: Adaptive throughput/latency profile for RL rollout long-tail
- [#41843](https://github.com/vllm-project/vllm/issues/41843) [RFC]: Add DeepStream as a video loader backend for GPU-accelerated Video decode
- [#45592](https://github.com/vllm-project/vllm/issues/45592) [Bug]: JSON Schema pattern on string items causes maxLength to be ignored in structured outputs
- [#41823](https://github.com/vllm-project/vllm/issues/41823) [Feature]: Support Dynamic Pruning for Speculative Decoding Draft Trees in EAGLE-3
- [#40554](https://github.com/vllm-project/vllm/issues/40554) [AMD][CI Failure][Tracker] Static dashboard tracker for current CI failures
- [#55687](https://github.com/vllm-project/vllm/issues/55687) [Bug][ROCm] rope_kvcache / qk_norm_rope_kvcache fusions make GLM-5.3 8x slower on gfx950 (partitioning alone is fine)
- [#54017](https://github.com/vllm-project/vllm/issues/54017) [Bug]: Unsupported `reasoning_effort` value causes 500 error when chat template rejects it
- [#41860](https://github.com/vllm-project/vllm/issues/41860) [Bug]: NIXL Disagg Does Not Support GDN Attention (Qwen3.5 Hybrid)
- [#41864](https://github.com/vllm-project/vllm/issues/41864) [Bug]: Pipeline Parallelism Blocked on V1 Engine (Multi-Node PP)
- [#41906](https://github.com/vllm-project/vllm/issues/41906) [Bug]: `collect_env.py` crashes on non-Linux platforms (macOS/Windows) due to unconditional assert in `get_pkg_version`
- [#54688](https://github.com/vllm-project/vllm/issues/54688) [RFC] Remove torch.compile dependency from Qwen3.8-Flash-Next NVIDIA path
- [#41848](https://github.com/vllm-project/vllm/issues/41848) [Bug]: ValueError when CUDA_VISIBLE_DEVICES is a MIG device UUID
- [#41855](https://github.com/vllm-project/vllm/issues/41855) [Bug]: vLLM+UCCL-EP: DeepGemm CUDA Illegal Address at EP=64
- [#41858](https://github.com/vllm-project/vllm/issues/41858) [Bug]: agrs Workspace Buffer Sizing Overflow at Large EP
- [#41874](https://github.com/vllm-project/vllm/issues/41874) [Bug]: AttributeError when loading Mamba2ForCausalLM with BitsAndBytes quantization
- [#41884](https://github.com/vllm-project/vllm/issues/41884) [Bug][V1][Hybrid] IndexError in get_temporal_copy_spec during DFlash speculative decoding + prefix caching
- [#41920](https://github.com/vllm-project/vllm/issues/41920) [Bug]: get_expert_mapping is inconsistent with load_weights for EPLB in DeepseekV2 and AXK1
- [#41927](https://github.com/vllm-project/vllm/issues/41927) [Performance]: Inspired by nano-vllm, as vLLM-Omni is also complex, I tried building a nano-vLLM-Omni (~1k LOC)
- [#41933](https://github.com/vllm-project/vllm/issues/41933) [Bug]: Wrongful detection of WSL
- [#41951](https://github.com/vllm-project/vllm/issues/41951) [Bug]: v1 Scheduler: preempted requests lose re-admission priority in PriorityRequestQueue, causing redundant recompute
- [#41955](https://github.com/vllm-project/vllm/issues/41955) [Bug]: Mixed INT4/INT8 GPTQ MoE models crash on initialization (AssertionError in fused_marlin_moe)
- [#55637](https://github.com/vllm-project/vllm/issues/55637) [Bug] DeepSeek-V4 sparse MLA can index past block-table rows during CUDA-graph warmup
- [#55322](https://github.com/vllm-project/vllm/issues/55322) [Bug]: Qwen3.5/3.6 MTP resolves n_predict=None for multimodal-wrapper checkpoints (mtp_num_hidden_layers is read from the wrapper, not text_config)
- [#50256](https://github.com/vllm-project/vllm/issues/50256) [Bug]: Responses API validation errors bypass VLLMValidationError — 4 sites in harmony_utils.py and responses/utils.py

### SGLang (`sgl-project/sglang`)

**Stars:** 35,603 · **Open issues:** 5,141 · **Last push:** <1h ago

On September 8, 2026, there were no new releases for SGLang. However, significant activity included the merging of several pull requests, notably the deprecation of HIP/NPU/MUSA prefill CP as part of #38293 and the addition of Qwen3.8-Flash-Next NVFP4 recipes in #37995. Several bug fixes were also implemented, such as restoring SWA reprefill-tail on UnifiedRadixCache in #32759 and addressing an EAGLE crash issue in #38318. Among the new issues, #38300 raised concerns about the TP2 hang related to HiCache and CUDA graph prefill, which could impact performance consistency. Overall, the day focused on refining existing functionality and addressing ongoing bugs, maintaining routine operational flow.

#### ✅ Merged PRs
- [#38381](https://github.com/sgl-project/sglang/pull/38381) Revert "[kernel] add fused silu mul quant fp8"
- [#33624](https://github.com/sgl-project/sglang/pull/33624) Add zianglih as online NVFP4 and DSA Top-K code owner
- [#38293](https://github.com/sgl-project/sglang/pull/38293) [CP V1 Deprecation 3.5/5] Deprecate HIP/NPU/MUSA prefill CP and remove legacy implementation
- [#37995](https://github.com/sgl-project/sglang/pull/37995) docs(cookbook): Qwen3.8-Flash-Next NVFP4 recipes for DGX Spark (1x, 2x) and RTX PRO 6000
- [#38288](https://github.com/sgl-project/sglang/pull/38288) [AMD][CI] Remove obsolete split-dim check from Kimi-K3 prefill test
- [#32759](https://github.com/sgl-project/sglang/pull/32759) [AMD] Restore SWA reprefill-tail on UnifiedRadixCache when HiCache is off
- [#38372](https://github.com/sgl-project/sglang/pull/38372) [Test] Remove obsolete CP mocks from NextN MM embedding tests
- [#38192](https://github.com/sgl-project/sglang/pull/38192) [AMD][DSV4] Reland unified-KV pool sizing and SWA ring accounting, fully gated
- [#38318](https://github.com/sgl-project/sglang/pull/38318) [AMD] Fix EAGLE crash when no kv_index_translator is bound on the DSA fp8 read door
- [#38124](https://github.com/sgl-project/sglang/pull/38124) [Kernel] Drop the vendored dense BF16 GEMM port in favor of FlashInfer 0.6.18
- [#31415](https://github.com/sgl-project/sglang/pull/31415) [ray] Support Ray metric backend for engine metrics
- [#37165](https://github.com/sgl-project/sglang/pull/37165) [Bugfix][Mamba] Clear deferred init metadata before speculative decode
- [#38116](https://github.com/sgl-project/sglang/pull/38116) [Kernel] Add fused MoE Triton configs for Qwen3.8-Flash-Next FP8 on NVIDIA H200 NVL (TP2+EP2)
- [#33591](https://github.com/sgl-project/sglang/pull/33591) Drop the routing bias casts in flashinfer trtllm MoE
- [#38342](https://github.com/sgl-project/sglang/pull/38342) [CI] Fix request receiver EP scale joiner test patch
- [#38335](https://github.com/sgl-project/sglang/pull/38335) [diffusion] CI: baseline the e2e of ten unguarded perf cases
- [#37743](https://github.com/sgl-project/sglang/pull/37743) [Kimi-K3] Recover the reply when the model skips the think channel
- [#38295](https://github.com/sgl-project/sglang/pull/38295) Add MiniCPM5-2B cookbook
- [#37373](https://github.com/sgl-project/sglang/pull/37373) [NPU] Add NPU arch35 support and enhance DSV4 processing in DeepSeek-V4
- [#38195](https://github.com/sgl-project/sglang/pull/38195) fix: keep queued Mooncake linker loads after abort
- [#38315](https://github.com/sgl-project/sglang/pull/38315) [CI] Fix stale ServerArgs fake in chunked-SGMV LoRA test
- [#38314](https://github.com/sgl-project/sglang/pull/38314) [CI] Fix the DSpark dp-tier unit test fixture after #34919
- [#38290](https://github.com/sgl-project/sglang/pull/38290) [Kernel] Wait for the PDL dependency before loading the router bias (Triton + radix)
- [#38308](https://github.com/sgl-project/sglang/pull/38308) [qwen4-main-squashed] Cherry-pick #36811: avoid zero-bias allocation in fused softmax routing (fixes GB10 NEXTN collapse)
- [#36143](https://github.com/sgl-project/sglang/pull/36143) Use fp32 in TRTLLM all reduce buffers
- [#34919](https://github.com/sgl-project/sglang/pull/34919) Fix DSpark CUDA graph replay with MegaMoE TP attention
- [#38296](https://github.com/sgl-project/sglang/pull/38296) [Diffusion] Document verified GB300 and derived GB200 H3 recipes
- [#36298](https://github.com/sgl-project/sglang/pull/36298) Fix/whisper xpu varlen encoder decoder
- [#37926](https://github.com/sgl-project/sglang/pull/37926) [Perf] Unified memory: close the DCP decode gap on Blackwell
- [#38227](https://github.com/sgl-project/sglang/pull/38227) [AMD][gfx95] DSV4 wo_b (dp-attention): route to tuned bpreshuffle GEMM instead of triton
- [#37691](https://github.com/sgl-project/sglang/pull/37691) [AMD] Support aiter fa mha chunked kv for Kimi-K3
- [#37436](https://github.com/sgl-project/sglang/pull/37436) [Test] Consolidate test cleanup and CI taxonomy (net -11.4K lines)
- [#38244](https://github.com/sgl-project/sglang/pull/38244) [CPU] use CustomTestCase for registered CPU tests
- [#38279](https://github.com/sgl-project/sglang/pull/38279) [Sampling] Allow sampling-mask replay with DisallowedTokensLogitsProcessor
- [#38185](https://github.com/sgl-project/sglang/pull/38185) [diffusion] test: validate every repeated server request
- [#38280](https://github.com/sgl-project/sglang/pull/38280) [CI] Fix stale CP-v1 mock patches in NextN mm-embed test
- [#36654](https://github.com/sgl-project/sglang/pull/36654) [XPU] Re-add intel xpu on triton paths in diffusion platforms
- [#38278](https://github.com/sgl-project/sglang/pull/38278) Tiny Update CI Permission
- [#37886](https://github.com/sgl-project/sglang/pull/37886) Remove obsolete CUDA graph buffer population methods
- [#36228](https://github.com/sgl-project/sglang/pull/36228) [CP V1 Deprecation 3/5] Remove generic prefill CP v1 runtime
- [#38113](https://github.com/sgl-project/sglang/pull/38113) [Config] Round 6.5: a namespace declares what it derives, next to what it derives it from
- [#38049](https://github.com/sgl-project/sglang/pull/38049) [Config] Round 6.4: the runtime reads the bags, not the record
- [#38048](https://github.com/sgl-project/sglang/pull/38048) [Config] Round 6.3: the record remembers how it was asked for, and is sealed while resolution runs
- [#38047](https://github.com/sgl-project/sglang/pull/38047) [Config] Round 6.2: the field declarations move to their namespaces, and the record is assembled from them
- [#38046](https://github.com/sgl-project/sglang/pull/38046) [Config] Round 6.1: "unset" gets its own spelling, and the declaration says what it means
- [#37601](https://github.com/sgl-project/sglang/pull/37601) [AMD] support qlen>1 for aiter gluon path for Kimi K3
- [#38259](https://github.com/sgl-project/sglang/pull/38259) Drop stale test_mla_gluon_h12_fp8.py broken by aiter gluon rewrite
- [#37376](https://github.com/sgl-project/sglang/pull/37376) [kernel] add fused silu mul quant fp8
- [#38256](https://github.com/sgl-project/sglang/pull/38256) [AMD] Cherry-pick aiter commit for dsv4 a8w8 bpreshuffle gemm config
- [#38204](https://github.com/sgl-project/sglang/pull/38204) fix: collect prefix hash values iteratively
- [#38138](https://github.com/sgl-project/sglang/pull/38138) fix: preserve SWA host lock on node split
- [#31113](https://github.com/sgl-project/sglang/pull/31113) [Intel][XPU] Add NUMA node binding support for Intel XPU
- [#37179](https://github.com/sgl-project/sglang/pull/37179) [CPU] Fix shm allreduce collision and sglang-router import
- [#30430](https://github.com/sgl-project/sglang/pull/30430) Fuse Nemotron latent MoE projection and shared add
- [#37784](https://github.com/sgl-project/sglang/pull/37784) [AMD] Update ROCm AITER pin to 4ad9983
- [#38226](https://github.com/sgl-project/sglang/pull/38226) [diffusion] fix: quiet internal warmup frame searches
- [#38239](https://github.com/sgl-project/sglang/pull/38239) [diffusion] CI: rebalance 2-gpu shards and cut the job timeout to 45m
- [#38225](https://github.com/sgl-project/sglang/pull/38225) [diffusion] fix: stabilize H3 reference audio across repeated requests
- [#37800](https://github.com/sgl-project/sglang/pull/37800) [XPU][CI] Fix empty nightly dashboard
- [#38221](https://github.com/sgl-project/sglang/pull/38221) test(xpu): pin --mem-fraction-static=0.7 for DeepSeek-OCR test
- [#24959](https://github.com/sgl-project/sglang/pull/24959) XPU: Enable GLM5.1 (GlmMoeDsaForCausalLM) DSA Attention
- [#36709](https://github.com/sgl-project/sglang/pull/36709) [MUSA] Add installation guide and Dockerfile
- [#35604](https://github.com/sgl-project/sglang/pull/35604) [CPU] Add native CPU kernel for MurmurHash32
- [#35629](https://github.com/sgl-project/sglang/pull/35629) [NPU] Adapt DFlash2 speculative decoding to Ascend NPUs

#### 🐛 New Issues
- [#38300](https://github.com/sgl-project/sglang/issues/38300) TP2 hang with HiCache, breakable prefill CUDA graphs, and FlashInfer MNNVL on B300 💬3
- [#38291](https://github.com/sgl-project/sglang/issues/38291) [Bug] `fp8e4nv` not supported on A100 (SM80) when serving Qwen3.8-Flash-Next-FP8 💬1
- [#38360](https://github.com/sgl-project/sglang/issues/38360) [Bug] /v1/score returns validation error for single-label cross-encoder rerankers (e.g. bge-reranker-v2-m3)
- [#38357](https://github.com/sgl-project/sglang/issues/38357) [RFC / Feature]: Zero-Copy In-Place KV-Cache Compactor via In-Situ Cycle Permutations (1.65x Speedup, 0 Bytes Aux VRAM)
- [#38341](https://github.com/sgl-project/sglang/issues/38341) [decode] Spec-decode with large draft-token counts OOMs mid-traffic on the decode instance - no upfront capacity check (verify workspace vs KV pool is zero-sum)
- [#38334](https://github.com/sgl-project/sglang/issues/38334) [RFC] Gluon MegaMoE: SGLang Integration and Multi-Node Support
- [#38319](https://github.com/sgl-project/sglang/issues/38319) [Bug] Chunked Prefill + Radix Insert race corrupts KV pages (QSA, Qwen3.8-Flash-Next)
- [#38312](https://github.com/sgl-project/sglang/issues/38312) [Playground] Verified cell: h100 / flash-official / fp4 / high-throughput / single
- [#38253](https://github.com/sgl-project/sglang/issues/38253) [Bug] glm5_next qkvbfg fusion disabled on FP8 GLM-5.3-Flash: gate checks global quant_config, not per-layer

#### 🔒 Closed Issues
- [#29366](https://github.com/sgl-project/sglang/issues/29366) [Bug] Detokenizer worker load is severely imbalanced — one process saturates while others sit idle
- [#30245](https://github.com/sgl-project/sglang/issues/30245) ROCm consumer GPU (gfx1100/RDNA3): fused-MoE blocked by upstream triton AMD backend bug — request configs, allowlist fix, and mitigation
- [#26596](https://github.com/sgl-project/sglang/issues/26596) [Roadmap] Gemma4
- [#34603](https://github.com/sgl-project/sglang/issues/34603) [Feature] Should the trtllm allreduce fusion accumulate in fp32, like the mnnvl backends do?
- [#30598](https://github.com/sgl-project/sglang/issues/30598) [Bug] on-the-fly FP8 quantization (--quantization fp8) FP8-quantizes GDN gate projections (in_proj_qkvz/in_proj_ba) that official static-FP8 checkpoints exclude
- [#30632](https://github.com/sgl-project/sglang/issues/30632) [Bug] accuracy degraded affected by transformers upgrade from 5.8 to 5.12.1
- [#30596](https://github.com/sgl-project/sglang/issues/30596) [Bug] Transient overload causes sustained 33-41% embedding throughput loss via ~400ms gen2 GC pauses; /freeze_gc recovers instantly

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 127,412 · **Open issues:** 2,463 · **Last push:** <1h ago

On September 8, 2026, llama.cpp released several new versions including b10852, which introduced RELU and LEAKY_RELU operations for the hexagon backend, and b10844, adding DeepSeek-V4 hyper-connection fused operations to Vulkan. Notable merged features include a batched L2_NORM kernel for SYCL and fixes for the LRU hang on multiple requests with the same model. The development also addressed various CUDA and Vulkan enhancements, such as branchless computation for Q4_K and Q5_K to improve performance. However, a significant new issue was raised regarding an evaluation bug affecting IQ3_S on the RTX 5060TI, which could lead to erroneous output.

#### 🚀 New Releases
- [b10852](https://github.com/ggml-org/llama.cpp/releases/tag/b10852) b10852
- [b10850](https://github.com/ggml-org/llama.cpp/releases/tag/b10850) b10850
- [b10844](https://github.com/ggml-org/llama.cpp/releases/tag/b10844) b10844
- [b10842](https://github.com/ggml-org/llama.cpp/releases/tag/b10842) b10842
- [b10840](https://github.com/ggml-org/llama.cpp/releases/tag/b10840) b10840
- [b10839](https://github.com/ggml-org/llama.cpp/releases/tag/b10839) b10839
- [b10837](https://github.com/ggml-org/llama.cpp/releases/tag/b10837) b10837
- [b10835](https://github.com/ggml-org/llama.cpp/releases/tag/b10835) b10835
- [b10834](https://github.com/ggml-org/llama.cpp/releases/tag/b10834) b10834
- [b10833](https://github.com/ggml-org/llama.cpp/releases/tag/b10833) b10833

#### ✅ Merged PRs
- [#28585](https://github.com/ggml-org/llama.cpp/pull/28585) hexagon: add RELU and LEAKY_RELU ops
- [#28222](https://github.com/ggml-org/llama.cpp/pull/28222) sycl: add a batched L2_NORM kernel
- [#28548](https://github.com/ggml-org/llama.cpp/pull/28548) ci : bump ty to 0.0.78
- [#28553](https://github.com/ggml-org/llama.cpp/pull/28553) tests: initialize the L2_NORM batch array
- [#28551](https://github.com/ggml-org/llama.cpp/pull/28551) Revert "CUDA: size routed MoE MMQ N-tiles from typical expert width on RDNA3 (#24546)"
- [#24546](https://github.com/ggml-org/llama.cpp/pull/24546) CUDA: size routed MoE MMQ N-tiles from typical expert width on RDNA3
- [#28145](https://github.com/ggml-org/llama.cpp/pull/28145) Uppdated flake.nix
- [#28542](https://github.com/ggml-org/llama.cpp/pull/28542) webgpu: fix CI (format the GET_ROWS case block)
- [#28539](https://github.com/ggml-org/llama.cpp/pull/28539) server: fix LRU hang on multiple requests same model
- [#26578](https://github.com/ggml-org/llama.cpp/pull/26578) vulkan: add DeepSeek-V4 hyper-connection fused ops (DSV4_HC_COMB/PRE/POST)
- [#26454](https://github.com/ggml-org/llama.cpp/pull/26454) ggml: add gfx90c HIP support
- [#28451](https://github.com/ggml-org/llama.cpp/pull/28451) convert : refactor Hy4-preview conversion - move HC tensor mapping to the global map
- [#26705](https://github.com/ggml-org/llama.cpp/pull/26705) CUDA: branchless Q4_K/Q5_K unpack to speed up mmvq, L2 prefetch on DGX Spark
- [#28253](https://github.com/ggml-org/llama.cpp/pull/28253) vulkan: support type-aligned GET_ROWS
- [#28538](https://github.com/ggml-org/llama.cpp/pull/28538) examples : print ggml_version and ggml_commit in test-cmake [no ci]
- [#28511](https://github.com/ggml-org/llama.cpp/pull/28511) caps : recheck typed content if template checks for string
- [#28208](https://github.com/ggml-org/llama.cpp/pull/28208) convert : write explicit recurrent_layers for Qwen3-Next / Qwen3.5
- [#27870](https://github.com/ggml-org/llama.cpp/pull/27870) ggml-cuda: fix divergent barrier in f16 flash attention
- [#28387](https://github.com/ggml-org/llama.cpp/pull/28387) ggml: allow backend inputs to not create another split
- [#28024](https://github.com/ggml-org/llama.cpp/pull/28024) vulkan: rms_norm fusion opportunities
- [#28394](https://github.com/ggml-org/llama.cpp/pull/28394) ci : add container image checking and tagging
- [#27765](https://github.com/ggml-org/llama.cpp/pull/27765) vulkan: add TQ1_0 support (mm, mat-vec, mat-vec-id, dequant, get_rows)

#### 🐛 New Issues
- [#28541](https://github.com/ggml-org/llama.cpp/issues/28541) RFC: image, video and audio generation from diffusion GGUFs (LTX-2) `enhancement` 💬5
- [#28581](https://github.com/ggml-org/llama.cpp/issues/28581) Eval bug: IQ3_S produce garbage on RTX 5060TI 15gb (Blackwell GPU) `bug-unconfirmed` 💬1
- [#28562](https://github.com/ggml-org/llama.cpp/issues/28562) Compile bug: error: use of undeclared identifier 'EXIT_FAILURE' `bug-unconfirmed` 💬1
- [#28564](https://github.com/ggml-org/llama.cpp/issues/28564) Compile bug: error: use of undeclared identifier 'rand'/'RAND_MAX' `bug-unconfirmed` 💬1
- [#28561](https://github.com/ggml-org/llama.cpp/issues/28561) Compile bug: error: use of undeclared identifier 'strtol' `bug-unconfirmed` 💬1
- [#28560](https://github.com/ggml-org/llama.cpp/issues/28560) Compile bug: error: use of undeclared identifier 'posix_memalign'/'free' `bug-unconfirmed` 💬1
- [#28559](https://github.com/ggml-org/llama.cpp/issues/28559) Compile bug: error: use of undeclared identifier 'getenv'/'atoi' `bug-unconfirmed` 💬1
- [#28557](https://github.com/ggml-org/llama.cpp/issues/28557) Compile bug: error: use of undeclared identifier 'errno' `bug-unconfirmed` 💬1
- [#28537](https://github.com/ggml-org/llama.cpp/issues/28537) Eval bug: on HIP, a sequence whose prompt shares a llama_decode() batch with another sequence's decode row gets corrupted logits, and every call reports success 💬1
- [#28524](https://github.com/ggml-org/llama.cpp/issues/28524) Eval bug: Quantized V cache terminates llama-server when Flash Attention is disabled `bug-unconfirmed` 💬1
- [#28582](https://github.com/ggml-org/llama.cpp/issues/28582) Eval bug: mixed tensor & layer split with ROCM `bug-unconfirmed`
- [#28580](https://github.com/ggml-org/llama.cpp/issues/28580) server: input_video reuses a previous request's decoded media when the prompt text repeats (video frames get no cache id)
- [#28567](https://github.com/ggml-org/llama.cpp/issues/28567) Eval bug: When to support Qwen3.5 model for OpenVINO backend? (Intel NPU) `bug-unconfirmed`
- [#28565](https://github.com/ggml-org/llama.cpp/issues/28565) Feature Request: Metal backend: use multiple physical GPUs (eGPU + dGPU) on Intel Macs `enhancement`
- [#28546](https://github.com/ggml-org/llama.cpp/issues/28546) Feature Request: llama-bench --override-kv (model metadata overrides), as in llama-server / llama-cli
- [#28527](https://github.com/ggml-org/llama.cpp/issues/28527) Eval bug: Quantized K cache makes deterministic prefix-cache repeats produce different output `bug-unconfirmed`
- [#28526](https://github.com/ggml-org/llama.cpp/issues/28526) Eval bug: --cache-reuse 1 returns HTTP 200 with an empty completion `bug-unconfirmed`
- [#28525](https://github.com/ggml-org/llama.cpp/issues/28525) Eval bug: --batch-size 0 reaches an uncaught GGML assertion `bug-unconfirmed`

#### 🔒 Closed Issues
- [#20029](https://github.com/ggml-org/llama.cpp/issues/20029) Misc. bug: b8143 produces garbage Mac x86 Vulkan with AMD GPU
- [#25808](https://github.com/ggml-org/llama.cpp/issues/25808) Compile bug: GGML_SYCL_DEVICE_ARCH=xe2 gives segfault
- [#26845](https://github.com/ggml-org/llama.cpp/issues/26845) Eval bug: SYCL garbage on the second prompt.
- [#25884](https://github.com/ggml-org/llama.cpp/issues/25884) Misc. bug: On windows/vulkan, split-mode row no longer works on hybrid AMD/Intel GPU config since commit 74976e1
- [#27856](https://github.com/ggml-org/llama.cpp/issues/27856) qwen4exp (Qwen3.8-Flash-Next): severe decode slowdown beyond ~1K context on HIP / gfx1151 (Strix Halo)
- [#25985](https://github.com/ggml-org/llama.cpp/issues/25985) Compile bug: Build failure: CoopMat2 shaders fail with glslc -O / SPIR-V capability 5432
- [#25767](https://github.com/ggml-org/llama.cpp/issues/25767) Misc. bug: Flaky Vulkan unit test results on some Intel Battlemage Linux systems
- [#26087](https://github.com/ggml-org/llama.cpp/issues/26087) Eval bug: Qwen 3.5 122B hangs and spins at 100% cpu usage using Vulkan on AI Max during model loading
- [#26060](https://github.com/ggml-org/llama.cpp/issues/26060) Documented Linux HIP Compile Command Fails with pip-installed ROCm
- [#26084](https://github.com/ggml-org/llama.cpp/issues/26084) Eval bug: Content chat have many '/'
- [#28443](https://github.com/ggml-org/llama.cpp/issues/28443) Eval bug: Scheduling multiple requests for multiple different models simultaneously -> one model idling, other never gets loaded
- [#28509](https://github.com/ggml-org/llama.cpp/issues/28509) Eval bug: Gemma 4 26B-A4B Template Misclassified as `supports_typed_content = false`
- [#28207](https://github.com/ggml-org/llama.cpp/issues/28207) Misc. bug: Qwen3.5 layer_types ignored, non-uniform layouts load mis-typed

### Ollama (`ollama/ollama`)

**Stars:** 180,417 · **Open issues:** 3,925 · **Last push:** 5h ago

On September 8, 2026, Ollama experienced a routine maintenance day with no new releases or merged pull requests. Among the newly raised issues, #18286 highlights concerns regarding the rejection of `agent_message` in the `/v1/responses` endpoint, while #18287 introduces discussions on the Hy4 Model. Notably, issue #18290 requests the implementation of the Spark-X2.5 model, aimed at enabling a 1M-context model family for on-device applications. Additionally, #18282 addresses improvements to the scheduler's error handling, suggesting a fail-fast approach for models that cannot fit even after evicting all runners.

#### 🐛 New Issues
- [#18286](https://github.com/ollama/ollama/issues/18286) /v1/responses` rejects `agent_message `bug` 💬1
- [#18287](https://github.com/ollama/ollama/issues/18287) Hy4 Model `model` 💬1
- [#18290](https://github.com/ollama/ollama/issues/18290) Model request: Spark-X2.5 (4B / 1.7B) — SparkLLM on-device 1M-context model family 💬1
- [#18282](https://github.com/ollama/ollama/issues/18282) scheduler: fail fast instead of eviction loop when a model can't fit even after evicting all runners 💬1
- [#18297](https://github.com/ollama/ollama/issues/18297) Does Ollama support IQ3_S quantization for Qwen3.8-27B-GSQ-RCO-GGUF? Returns empty content `bug`
- [#18293](https://github.com/ollama/ollama/issues/18293) Frequent model unavailable errors `bug` `cloud`
- [#18284](https://github.com/ollama/ollama/issues/18284) Codex CLI multi-agent is unusable against Ollama `bug`
- [#18283](https://github.com/ollama/ollama/issues/18283) MLX compile-cache CHECK failed spams logs on non-MLX hardware (Windows, no CUDA/Apple Silicon)

#### 🔒 Closed Issues
- [#17835](https://github.com/ollama/ollama/issues/17835) Codex should not be restricted to the local machine
- [#17841](https://github.com/ollama/ollama/issues/17841) [Bug]: Ollama 0.32.14 silently falls back to CPU on sm_86 GPUs (RTX 30 / A40 / A6000) - CUDA 13 archs omit 8.6 and CUDA 12 fallback is broken
- [#18186](https://github.com/ollama/ollama/issues/18186) QWEN3.8 27b plus MTP settings cause offloading to CPU
- [#17971](https://github.com/ollama/ollama/issues/17971) Partial GPU memory utilization
- [#17910](https://github.com/ollama/ollama/issues/17910) Regression 0.32.11–0.32.15: long completions never stop (generation runs past any natural end until killed; 0.32.9 unaffected)
- [#18210](https://github.com/ollama/ollama/issues/18210) [Security] OLLAMA_DEBUG_LOG_REQUESTS persists full prompts without retention or redaction controls
- [#18209](https://github.com/ollama/ollama/issues/18209) Enable to show thinking blocks in the TUI
- [#17870](https://github.com/ollama/ollama/issues/17870) Vulkan on gfx1151 (Strix Halo): amdgpu compute-ring timeout / ErrorDeviceLost on long-prompt prefill; num_batch=128 works around it
- [#17860](https://github.com/ollama/ollama/issues/17860) install.sh fails silently on fresh Ubuntu 26.04 when zstd CLI is not preinstalled
- [#17832](https://github.com/ollama/ollama/issues/17832) Proper use of CUDA_VISIBLE_DEVICES
- [#18290](https://github.com/ollama/ollama/issues/18290) Model request: Spark-X2.5 (4B / 1.7B) — SparkLLM on-device 1M-context model family
- [#18282](https://github.com/ollama/ollama/issues/18282) scheduler: fail fast instead of eviction loop when a model can't fit even after evicting all runners
- [#18284](https://github.com/ollama/ollama/issues/18284) Codex CLI multi-agent is unusable against Ollama

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,232 · **Open issues:** 4,940 · **Last push:** <1h ago

On September 8, 2026, LiteLLM saw the release of version 1.100.1, which included backported changes from earlier pull requests focusing on stability and performance improvements. Significant merged features included the addition of a native Responses API configuration in fireworks_ai and enhancements to the user interface for managing auto-router classifications and subscriptions in ChatGPT. Among the critical fixes, the proper registration of SkillsInjectionHook at proxy startup and the resolution of several bugs, such as the caching behavior of user API keys, stand out. Notably, new issues were raised, including a reported bug about the `openrouter/openai/gpt-5.6-sol` model being absent from the model prices and context window file, indicating ongoing challenges in model management.

#### ✅ Merged PRs
- [#40176](https://github.com/BerriAI/litellm/pull/40176) chore(release): backport #39568 and #39572 to stable/1.100.x and cut 1.100.1
- [#40089](https://github.com/BerriAI/litellm/pull/40089) fix(bedrock): keep x-amzn-RequestId on chat error responses
- [#40168](https://github.com/BerriAI/litellm/pull/40168) feat(ui): itemize auto-router classification spend
- [#39826](https://github.com/BerriAI/litellm/pull/39826) feat(fireworks_ai): add native Responses API config
- [#40164](https://github.com/BerriAI/litellm/pull/40164) fix(mcp): encrypt stored static headers and stdio environment
- [#40162](https://github.com/BerriAI/litellm/pull/40162) ci: follow the default branch in development tooling
- [#40041](https://github.com/BerriAI/litellm/pull/40041) test(e2e/ui): automate the RC checklist's Presidio guardrail walk
- [#40038](https://github.com/BerriAI/litellm/pull/40038) test(guardrails): pin the presidio spend-log record and the UI's masked-entity persistence
- [#40170](https://github.com/BerriAI/litellm/pull/40170) feat(ui): list the ChatGPT subscription provider in the Add Model form
- [#38914](https://github.com/BerriAI/litellm/pull/38914) fix(proxy): register SkillsInjectionHook at proxy startup instead of import time
- [#38806](https://github.com/BerriAI/litellm/pull/38806) fix(mcp): forward staged credentials on /mcp-rest/test/connection like /test/tools/list
- [#38869](https://github.com/BerriAI/litellm/pull/38869) fix(guardrails): resolve generateContent routes and async-first passthrough call types
- [#38842](https://github.com/BerriAI/litellm/pull/38842) fix(responses): drop unsupported reasoning param for openai non-reasoning models
- [#40160](https://github.com/BerriAI/litellm/pull/40160) fix(spend): price caching savings on the billed request basis
- [#40155](https://github.com/BerriAI/litellm/pull/40155) fix(guardrails): accept on_violation block and alert for mcp_security
- [#40157](https://github.com/BerriAI/litellm/pull/40157) fix(docs): fix stale file paths in ARCHITECTURE.md
- [#40150](https://github.com/BerriAI/litellm/pull/40150) fix(proxy): let authorized internal users open vector store details
- [#40146](https://github.com/BerriAI/litellm/pull/40146) feat(ui): make automatic auto-router setup discoverable and show what it configured
- [#40149](https://github.com/BerriAI/litellm/pull/40149) ci: prepare workflows for main default branch
- [#40091](https://github.com/BerriAI/litellm/pull/40091) fix(router): keep provider response headers on streaming chat completions
- [#38204](https://github.com/BerriAI/litellm/pull/38204) fix(guardrails): block Prompt Security file modifications
- [#39002](https://github.com/BerriAI/litellm/pull/39002) feat(keys): allow editing soft budget on existing keys
- [#40036](https://github.com/BerriAI/litellm/pull/40036) fix(ui): show inherited MCP servers on the internal user editor and flag access groups with no members
- [#39401](https://github.com/BerriAI/litellm/pull/39401) feat(skills): semantic search over the LiteLLM-hosted skill registry
- [#40144](https://github.com/BerriAI/litellm/pull/40144) fix(ui): send empty vector_stores when the last team vector store is removed
- [#40148](https://github.com/BerriAI/litellm/pull/40148) fix(ui): hide the Create Vector Store flow from non proxy admins
- [#39999](https://github.com/BerriAI/litellm/pull/39999) feat(ui): add key-scoped auto-router usage tab
- [#39835](https://github.com/BerriAI/litellm/pull/39835) feat(ci): add the cost map guard check
- [#39660](https://github.com/BerriAI/litellm/pull/39660) fix(proxy): enforce key and team model access on Bedrock passthrough routes (internal copy of #34244)
- [#40007](https://github.com/BerriAI/litellm/pull/40007) fix(router): preserve heuristic defaults across releases
- [#35935](https://github.com/BerriAI/litellm/pull/35935) feat(proxy): resolve root_path per request from a configured prefix list (SERVER_ROOT_PATHS)
- [#40098](https://github.com/BerriAI/litellm/pull/40098) fix(spend_logs): keep partition DDL transactions alive for their statement timeout
- [#40023](https://github.com/BerriAI/litellm/pull/40023) test(e2e): prove the virtual key lifecycle on every gateway replica
- [#40061](https://github.com/BerriAI/litellm/pull/40061) test(ocr): add SDK callback E2E parity
- [#40042](https://github.com/BerriAI/litellm/pull/40042) test(e2e/ui): cover member role and budget edits, member permission delegation, and team guardrail removal
- [#40026](https://github.com/BerriAI/litellm/pull/40026) test(ui): make navigation smoke resilient to router refactors
- [#40045](https://github.com/BerriAI/litellm/pull/40045) fix: capture provider request id in failure logging payloads
- [#40015](https://github.com/BerriAI/litellm/pull/40015) fix(ci): stop the auto-close duplicates job colliding with the required test check
- [#39870](https://github.com/BerriAI/litellm/pull/39870) fix(make check): lint the test tree on tests-only changes like CI does
- [#39981](https://github.com/BerriAI/litellm/pull/39981) fix: keep provider id and metadata on Responses API bridged chat completions
- [#39850](https://github.com/BerriAI/litellm/pull/39850) fix(cost): bill realtime reasoning tokens nested in text_tokens once
- [#39530](https://github.com/BerriAI/litellm/pull/39530) fix(ai-gateway): dial upstream WebSockets over an explicit rustls provider
- [#39839](https://github.com/BerriAI/litellm/pull/39839) fix(async): move remote image fetches off the event loop for Snowflake, Bedrock invoke Claude, Mantle and Gemini
- [#39965](https://github.com/BerriAI/litellm/pull/39965) fix(oci): stream Cohere tool-calling answers once
- [#39800](https://github.com/BerriAI/litellm/pull/39800) docs(claude): have runs embed their own QA screenshots on visual changes
- [#40140](https://github.com/BerriAI/litellm/pull/40140) fix(router): serialize heuristic tuning quota filters for Prisma
- [#40063](https://github.com/BerriAI/litellm/pull/40063) test(ocr): trace callback lifecycle parity
- [#39928](https://github.com/BerriAI/litellm/pull/39928) refactor(rust): remove per-request enablement arguments
- [#40019](https://github.com/BerriAI/litellm/pull/40019) test(ui): pin wire contracts for key, model and MCP server forms
- [#39629](https://github.com/BerriAI/litellm/pull/39629) fix(mcp): apply key and team guardrails to MCP tool calls
- [#38755](https://github.com/BerriAI/litellm/pull/38755) feat(mistral): add text-to-speech support for /v1/audio/speech
- [#40014](https://github.com/BerriAI/litellm/pull/40014) fix(router): skip the refusing deployment when retrying a non-transient error
- [#39975](https://github.com/BerriAI/litellm/pull/39975) ci: simplify Rust checks and remove wheel PR comments

#### 🐛 New Issues
- [#40102](https://github.com/BerriAI/litellm/issues/40102) [Bug]: `openrouter/openai/gpt-5.6-sol` is missing from `model_prices_and_context_window.json` `bug` `llm translation` 💬2
- [#40095](https://github.com/BerriAI/litellm/issues/40095) [Bug]: Concurrent first requests for an unknown end user bypass the default budget `bug` `proxy` `llm translation` 💬2
- [#40079](https://github.com/BerriAI/litellm/issues/40079) [Bug]: MCP server with openapi spec, heathy check report "unhealthy" `bug` `SDK` 💬2
- [#40123](https://github.com/BerriAI/litellm/issues/40123) [Bug]: gpt-6-astra registered as mode: "chat" — tool calls over /v1/chat/completions are rejected by OpenAI and the Responses bridge never engages `bug` `llm translation` 💬1
- [#40153](https://github.com/BerriAI/litellm/issues/40153) [Bug]: Per-model drop_params leaks into /v1/images/edits multipart request `proxy` `llm translation` 💬1
- [#40135](https://github.com/BerriAI/litellm/issues/40135) [Bug]: All five `/v1/files` routes ship `type` and `param` as the literal string `"None"`, so every error body is unclassifiable `proxy` `llm translation` 💬1
- [#40117](https://github.com/BerriAI/litellm/issues/40117) [Bug]: cannot parse chunks to standard response object in pass_through endpoints `bug` `proxy` `llm translation` 💬1
- [#40131](https://github.com/BerriAI/litellm/issues/40131) [Bug]: Bedrock passthrough returns HTTP 200 with empty body — non-streaming /converse only; /converse-stream works `bug` `proxy` `llm translation` 💬1
- [#40120](https://github.com/BerriAI/litellm/issues/40120) [Bug]: HiddenParamsAsyncIteratorWrapper hides completed_response → container ownership skipped on streaming /v1/responses 💬1
- [#40166](https://github.com/BerriAI/litellm/issues/40166) [Bug]: A missing or unreadable vertex_credentials file reports itself as invalid JSON, pointing debugging at the wrong cause `proxy` `llm translation`
- [#40165](https://github.com/BerriAI/litellm/issues/40165) [Bug]: Bedrock request signing resolves AWS credentials synchronously, blocking the event loop for every concurrent request on that worker `proxy` `llm translation`
- [#40130](https://github.com/BerriAI/litellm/issues/40130) [Bug]: Re-cooling a deployment keeps the first, shorter cooldown deadline `llm translation` `SDK`
- [#40129](https://github.com/BerriAI/litellm/issues/40129) [Bug]: in-memory cache max_size_per_item never rejects an oversized response `llm translation` `SDK`
- [#40128](https://github.com/BerriAI/litellm/issues/40128) [Bug]: Cache key varies with request-body key order, so identical requests miss `proxy`
- [#40124](https://github.com/BerriAI/litellm/issues/40124) [Bug] Cached UserAPIKeyAuth leaks parent_otel_span across concurrent requests and models
- [#40119](https://github.com/BerriAI/litellm/issues/40119) [Bug]: LiteLLM_SpendLogs partitioned table breaks on every Prisma migration that touches PK — schema.prisma and partition_spend_logs.sql are incompatible `bug` `proxy`
- [#40118](https://github.com/BerriAI/litellm/issues/40118) [Bug]: Streaming /v1/responses with an auto-executed MCP tool emits two response lifecycles in one stream, OpenAI SDK responses.stream() raises AssertionError `proxy` `llm translation`
- [#40115](https://github.com/BerriAI/litellm/issues/40115) exceeded retry limit, last status: 429 Too Many Requests `llm translation`
- [#40112](https://github.com/BerriAI/litellm/issues/40112) [Feature]: Add IONOS AI Model Hub Provider Support `enhancement` `proxy` `llm translation`
- [#40104](https://github.com/BerriAI/litellm/issues/40104) [Bug]: sensitive_data_masker never masks plural secret/password/certificate field names `llm translation` `SDK`
- [#40100](https://github.com/BerriAI/litellm/issues/40100) [Bug]: Streamed azure_ai calls log spend = 0 in SpendLogs while cost_breakdown holds the real cost `bug` `proxy` `llm translation`
- [#40099](https://github.com/BerriAI/litellm/issues/40099) [Bug] `true_passthrough` pre-session probe cannot authenticate against servers whose identity travels in a configured extra header
- [#40096](https://github.com/BerriAI/litellm/issues/40096) [Feature]: Unified start_date/end_date parameters for /search endpoint
- [#40094](https://github.com/BerriAI/litellm/issues/40094) [Bug]: Malformed row in Vertex AI batch input file returns 500 with unusable line number, not 400 `llm translation`
- [#40093](https://github.com/BerriAI/litellm/issues/40093) application-inference-profile ARN: capability lookup empty → adaptive thinking downgraded + diagnostics/context_management leak to Bedrock (400 on Claude 5 groups) `llm translation` `claude code`
- [#40090](https://github.com/BerriAI/litellm/issues/40090) [DashScope/Qwen] Explicit (cache_control-based) and implicit (automatic) context-cache hits are merged, causing incorrect cost calculation `llm translation`
- [#40081](https://github.com/BerriAI/litellm/issues/40081) CACHING IS BROKEN - ATTENTION ATTENTION ATTENTION
- [#40080](https://github.com/BerriAI/litellm/issues/40080) [Bug]: GPT-5.6 cross-region inference profiles on Bedrock fail with image input (routed through Converse instead of OpenAI endpoint) `llm translation`
- [#40076](https://github.com/BerriAI/litellm/issues/40076) [Feature]: Allow per-deployment client header forwarding

#### 🔒 Closed Issues
- [#28005](https://github.com/BerriAI/litellm/issues/28005) [Bug]: Dashboard Logs Not Visible
- [#29452](https://github.com/BerriAI/litellm/issues/29452) First-class auth surfaces for LLM secrets storage
- [#29539](https://github.com/BerriAI/litellm/issues/29539) [Bug]:
- [#30953](https://github.com/BerriAI/litellm/issues/30953) [Bug]: impossible to create the mcp-block guardrail from policie template
- [#24450](https://github.com/BerriAI/litellm/issues/24450) [Feature]: mcp passthrough or standard mcp /health endpoint
- [#29505](https://github.com/BerriAI/litellm/issues/29505) [Bug]: Test Connection Fails for internal users when trying to add a model in a team
- [#40100](https://github.com/BerriAI/litellm/issues/40100) [Bug]: Streamed azure_ai calls log spend = 0 in SpendLogs while cost_breakdown holds the real cost

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,781 · **Open issues:** 1,360 · **Last push:** <1h ago

On September 8, 2026, Unsloth did not release any new versions, but a series of key changes were merged into the project, including significant updates to the Studio interface and functionality. Notably, PR #10423 introduced a bearer token mechanism that allows keyless API access, while #10230 improved efficiency by sharing model_info reads across model-config probes. Additionally, PR #10369 fixed a crash issue during model loading when the server shuts down unexpectedly, and PR #10094 enhanced image handling by converting pasted images when tools are enabled. Among new issues, #10449 raised concerns about the `unsloth studio update` hitting the GitHub API too hard, indicating a potential performance bottleneck that may need addressing in future updates.

#### ✅ Merged PRs
- [#10259](https://github.com/unslothai/unsloth/pull/10259) Studio: use the eval dataset for TTS and codec audio training
- [#10255](https://github.com/unslothai/unsloth/pull/10255) Studio: accept the standard input_audio message part
- [#10210](https://github.com/unslothai/unsloth/pull/10210) Fix GGUF catalog snapshot selection
- [#10094](https://github.com/unslothai/unsloth/pull/10094) Studio: convert pasted images when tools are turned on
- [#10423](https://github.com/unslothai/unsloth/pull/10423) Studio: admit a bearer that carries no token under keyless API access
- [#10140](https://github.com/unslothai/unsloth/pull/10140) Studio: dial the bound address for in-process API calls, not a loopback literal
- [#10421](https://github.com/unslothai/unsloth/pull/10421) Studio: stop rejecting provider API keys longer than 190 bytes
- [#10217](https://github.com/unslothai/unsloth/pull/10217) Studio: load the speech model an audio API request asks for
- [#10263](https://github.com/unslothai/unsloth/pull/10263) Keep the LoRA GGUF and compressed-tensors converters off the operator's Hugging Face token
- [#10239](https://github.com/unslothai/unsloth/pull/10239) Studio: reuse MLX vision-language prompt prefixes between turns
- [#10230](https://github.com/unslothai/unsloth/pull/10230) Studio: share one Hub model_info read across the model-config probes
- [#10238](https://github.com/unslothai/unsloth/pull/10238) Studio: give a local GGUF one variant identity, so an API load applies its saved settings
- [#10369](https://github.com/unslothai/unsloth/pull/10369) Studio: do not crash a model load when shutdown tears the server down under it
- [#10381](https://github.com/unslothai/unsloth/pull/10381) Studio: route AMD integrated GPUs to the Vulkan llama.cpp prebuilt
- [#10228](https://github.com/unslothai/unsloth/pull/10228) Studio: optimize video galleries by removing per-card media pipelines
- [#10426](https://github.com/unslothai/unsloth/pull/10426) Stop shipping the frontend source tree and desktop crate in the wheel
- [#10384](https://github.com/unslothai/unsloth/pull/10384) Studio: report a throughput the engine could have produced
- [#10429](https://github.com/unslothai/unsloth/pull/10429) Publish Docker on the daily schedule, and move layer cache off the Actions quota
- [#10371](https://github.com/unslothai/unsloth/pull/10371) Studio: retry as one sequence when llama.cpp refuses a unified KV cache
- [#10382](https://github.com/unslothai/unsloth/pull/10382) Studio: keep the llama-server prompt cache on a shared-memory GPU
- [#10383](https://github.com/unslothai/unsloth/pull/10383) Studio: four load and update messages that told the user the wrong thing
- [#8412](https://github.com/unslothai/unsloth/pull/8412) Studio installer: torch 2.11 on Linux CPU, Vulkan for AMD without ROCm, gfx1033 gate, and three install fixes
- [#10386](https://github.com/unslothai/unsloth/pull/10386) Give `unsloth studio update` the same uv cache the backend already uses
- [#10420](https://github.com/unslothai/unsloth/pull/10420) Studio smoke: report a transport failure instead of crashing on one
- [#10413](https://github.com/unslothai/unsloth/pull/10413) Studio: unbreak the frontend suite and the icon alignment check
- [#10262](https://github.com/unslothai/unsloth/pull/10262) Studio: make the chat and sidebar menus open without freezing the page
- [#10410](https://github.com/unslothai/unsloth/pull/10410) Record which uv cache the install used, instead of inferring it later
- [#10183](https://github.com/unslothai/unsloth/pull/10183) Kaggle CI: dispatch the kernel and collect it later, instead of holding a runner
- [#10304](https://github.com/unslothai/unsloth/pull/10304) Give push_to_ollama the arguments create_ollama_modelfile takes
- [#10407](https://github.com/unslothai/unsloth/pull/10407) Fix composer send and stop icon centering across display scales

#### 🐛 New Issues
- [#10449](https://github.com/unslothai/unsloth/issues/10449) [Bug] `unsloth studio update` hits the github api too hard `feature request` `bug` 💬2
- [#10425](https://github.com/unslothai/unsloth/issues/10425) [Bug] Files created by the Code tool are hidden inside the collapsed tool card, no preview for sandbox .html `feature request` `bug` 💬1
- [#10428](https://github.com/unslothai/unsloth/issues/10428) [Bug] Prompt queue gets cleared each time generation is stopped `feature request` `bug` 💬1
- [#10436](https://github.com/unslothai/unsloth/issues/10436) [Bug] Studio "Tell the model today's date" overrides SYSTEM prompt in remote Ollama models `feature request` `bug` 💬1
- [#10415](https://github.com/unslothai/unsloth/issues/10415) [Bug] [AMD/ROCm] Wan2.2 TI2V video generation OOM due to missing fused attention kernel / SDPA math fallback `feature request` `bug` 💬1
- [#10465](https://github.com/unslothai/unsloth/issues/10465) [Bug] Please fill in your issue title here. `feature request` `bug`
- [#10464](https://github.com/unslothai/unsloth/issues/10464) [Feature Request] Add "Regenerate Title" option to update chat titles as conversations evolve `feature request`
- [#10460](https://github.com/unslothai/unsloth/issues/10460) parity (windows-latest): test_a_non_ascii_marker_survives_the_rollback fails on both shells
- [#10459](https://github.com/unslothai/unsloth/issues/10459) [Feature] Qwen 3 AVL 2B Support `feature request`
- [#10450](https://github.com/unslothai/unsloth/issues/10450) [Feature] AMD: Unsloth Studio / Desktop installs CUDA torch on a mixed NVIDIA+AMD host and has no way to train on the AMD card
- [#10437](https://github.com/unslothai/unsloth/issues/10437) [Studio Bug] GGUF quantizations disappear after switching the model download folder `bug`
- [#10411](https://github.com/unslothai/unsloth/issues/10411) [Bug] "RSAES-OAEP: input message length is too long" on long API key (238 chars) `feature request` `bug`
- [#10434](https://github.com/unslothai/unsloth/issues/10434) torchcodec ABI-stable exemption ignores index availability: cu128 has no 0.12+
- [#10433](https://github.com/unslothai/unsloth/issues/10433) Studio installer gives torch 2.3 and 2.4 the torch-2.10 torchcodec line

#### 🔒 Closed Issues
- [#10227](https://github.com/unslothai/unsloth/issues/10227) [Bug] Custom model settings (context length, KV cache quantization) get ignored on model auto-load via api
- [#10400](https://github.com/unslothai/unsloth/issues/10400) [Bug] Keyless auth fails for harnesses that send an empty bearer
- [#10109](https://github.com/unslothai/unsloth/issues/10109) [Bug] Deepresearch is hardcoded to run 127.0.0.1.
- [#10207](https://github.com/unslothai/unsloth/issues/10207) [Feature] auto-load audio models on request as well
- [#10465](https://github.com/unslothai/unsloth/issues/10465) [Bug] Please fill in your issue title here.
- [#10411](https://github.com/unslothai/unsloth/issues/10411) [Bug] "RSAES-OAEP: input message length is too long" on long API key (238 chars)
- [#10299](https://github.com/unslothai/unsloth/issues/10299) [Issue] I only display Create under Images

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,066 · **Open issues:** 376 · **Last push:** 1h ago

On September 8, 2026, AIBrix did not release any new versions, but there were two significant merged pull requests. First, PR #2676 restructured the end-to-end (E2E) test suites, likely improving the testing framework’s efficiency and reliability. Additionally, PR #2649 introduced a user interface for the aiconfigurator tool, enhancing user interaction with the configuration process. Among new issues, #2674 proposes a generalized asynchronous inference job lifecycle and routing, indicating ongoing development in optimizing inference processes. Overall, it was a routine maintenance day with meaningful progress in testing and user interface features.

#### ✅ Merged PRs
- [#2676](https://github.com/vllm-project/aibrix/pull/2676) [Gateway] Restructure E2E test suites
- [#2649](https://github.com/vllm-project/aibrix/pull/2649) [UI] Add UI for aiconfigurator tool

#### 🐛 New Issues
- [#2674](https://github.com/vllm-project/aibrix/issues/2674) [RFC]: Generalized Asynchronous Inference Job Lifecycle and Routing 💬3
- [#2675](https://github.com/vllm-project/aibrix/issues/2675) [TEST] Restructure E2E tests and add PD protocol contract coverage `area/gateway` `area/testing` `area/disaggregated` `area/kv-cache`

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,649 · **Open issues:** 492 · **Last push:** <1h ago

On September 8, 2026, there were no new releases for Semantic Router; however, notable progress included the merging of pull request #3394, which exposes applied on_unknown policies to users, enhancing feature transparency. Additionally, merged pull request #3546 improved user experience by adding project status and community badges to the README file. Among newly reported issues, a particularly concerning bug (#3548) was identified, revealing that dashboard config backups are world-readable and could potentially expose API keys, raising security implications that need urgent attention. Other bugs reported include issues with assistant reasoning content being stripped during forwarding (#3547) and developer instructions failing for requests routed to an Anthropic backend (#3551).

#### ✅ Merged PRs
- [#3394](https://github.com/vllm-project/semantic-router/pull/3394) [Feature] Expose applied on_unknown policies to users
- [#3546](https://github.com/vllm-project/semantic-router/pull/3546) [Docs] Add project status and community badges to README

#### 🐛 New Issues
- [#3540](https://github.com/vllm-project/semantic-router/issues/3540) [Feature] Add project status and community badges to README `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬3
- [#3547](https://github.com/vllm-project/semantic-router/issues/3547) [Bug] Assistant reasoning_content stripped on forwarding -> 400 (DeepSeek V4 thinking mode) `bug` `needs-acceptance` `wg/data-plane-networking` 💬2
- [#3551](https://github.com/vllm-project/semantic-router/issues/3551) [Bug] Developer instructions fail every request routed to an Anthropic backend `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#3548](https://github.com/vllm-project/semantic-router/issues/3548) [Bug] Dashboard config backups are world-readable and can contain API keys `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#3543](https://github.com/vllm-project/semantic-router/issues/3543) [Bug] The category-remote-backend E2E profile 404s and has never passed `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3537](https://github.com/vllm-project/semantic-router/issues/3537) [CI/Build] Simplify the agent harness and CI routing `enhancement` `accepted` `owner/maintainers` 💬2
- [#3560](https://github.com/vllm-project/semantic-router/issues/3560) [Feature] Route safely on PII detected in tool results `enhancement` `accepted` `wg/data-plane-networking` 💬1
- [#3558](https://github.com/vllm-project/semantic-router/issues/3558) [Bug] Intent classifier trains on the MMLU-Pro test split `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3557](https://github.com/vllm-project/semantic-router/issues/3557) [Bug] Evaluation registry label order does not match the intent artifact `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3555](https://github.com/vllm-project/semantic-router/issues/3555) [Bug] Model Hub filters and detail drawer don’t match the rest of the site `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3536](https://github.com/vllm-project/semantic-router/issues/3536) [Research] Evaluate response-length prediction as a downstream admission hint `needs-acceptance` `research` `wg/data-plane-networking` 💬1
- [#3554](https://github.com/vllm-project/semantic-router/issues/3554) [CI] Add retry and flaky-test handling for network-bound jobs `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`

#### 🔒 Closed Issues
- [#3540](https://github.com/vllm-project/semantic-router/issues/3540) [Feature] Add project status and community badges to README
- [#2338](https://github.com/vllm-project/semantic-router/issues/2338) [Benchmark] Validate safe exploration and protection policies for agent routing
- [#3237](https://github.com/vllm-project/semantic-router/issues/3237) [CI] Migrate required checks to one PR Gate without coverage loss
- [#3469](https://github.com/vllm-project/semantic-router/issues/3469) [Bug] Dashboard Recipe service drops the management credential store
- [#3537](https://github.com/vllm-project/semantic-router/issues/3537) [CI/Build] Simplify the agent harness and CI routing

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*