# 📡 AI Ecosystem Digest — 2026-10-01

> Generated 2026-10-01 01:49 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 148,735 | 32 | 5 | 4 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 127,431 | 27 | 3 | 49 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,199 | 0 | 0 | 2 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,230 | 18 | 13 | 0 | 4 |
| [OpenCode](https://github.com/anomalyco/opencode) | 211,181 | 33 | 7 | 8 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,247 | 21 | 14 | 2 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,993 | 202 | 113 | 166 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 250,363 | 23 | 7 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,010 | 29 | 28 | 56 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,678 | 18 | 8 | 72 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,999 | 38 | 47 | 35 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,979 | 6 | 8 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,949 | 27 | 13 | 69 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,098 | 7 | 6 | 74 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,120 | 3 | 4 | 7 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,991 | 19 | 9 | 3 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.286](https://github.com/anthropics/claude-code/releases/tag/v2.1.286) with several bug fixes and improvements.
- **OpenAI Codex** issued multiple releases including [rust-v0.161.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.5).
- **OpenClaw** launched release [v2026.9.7](https://github.com/openclaw/openclaw/releases/tag/v2026.9.7) alongside significant merged PRs addressing various UI issues.
- Unusually hot issue in **OpenClaw**: [WorkerTaskError 'unavailable'](https://github.com/openclaw/openclaw/issues/161654) reported with 9 comments.
- In **llama.cpp**, a feature request for improved security against prompt injection attacks sparked notable interest reflected in [6 comments](https://github.com/ggml-org/llama.cpp/issues/29758).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 148,735 · **Open issues:** 13,876 · **Last push:** 1h ago

On October 1, 2026, Claude Code released version v2.1.286, which introduced a new count display for stacked permission requests and mouse support for navigating "N more" rows in fullscreen mode, alongside several bug fixes related to the opening of login browsers during credential refreshes. Significant improvements in the merged pull requests include enhanced diff processing in the pane to streamline multi-file reads and better handling of rebases. A noteworthy new issue was raised concerning a false-positive response from the safety classifier that prevents benign replies, highlighting ongoing challenges in content moderation. Overall, today's updates reflect continued refinement in user experience and security measures within Claude Code.

#### 🚀 New Releases
- [v2.1.286](https://github.com/anthropics/claude-code/releases/tag/v2.1.286) v2.1.286

#### ✅ Merged PRs
- [#98357](https://github.com/anthropics/claude-code/pull/98357) diff: the pane notices a finished merge by itself, and stays quiet on an unusual branch name
- [#98445](https://github.com/anthropics/claude-code/pull/98445) diff: the pane reads every file's hunks with one git process, where it started one per file
- [#98374](https://github.com/anthropics/claude-code/pull/98374) diff: the pane reads the diff again after a rebase that finished
- [#97952](https://github.com/anthropics/claude-code/pull/97952) ci: security hardening for GitHub Actions workflows that call Claude

#### 🐛 New Issues
- [#98556](https://github.com/anthropics/claude-code/issues/98556) [Bug] Response-level safety classifier false-positive halts a completely benign reply (harness-generated session-confirmation turn) `bug` `duplicate` `platform:windows` `area:model` 💬2
- [#98557](https://github.com/anthropics/claude-code/issues/98557) [Bug] Prompt cache drops to 7,085-token system floor across runs of 43–58 calls `bug` `has repro` `platform:macos` `area:cost` 💬1
- [#98504](https://github.com/anthropics/claude-code/issues/98504) Bug: Remote Control doesn't survive app restarts or session eviction (Claude desktop, macOS) `bug` `platform:macos` `area:desktop` 💬1
- [#98562](https://github.com/anthropics/claude-code/issues/98562) [GitHub integration] `invalid` `github-integration` 💬1
- [#98575](https://github.com/anthropics/claude-code/issues/98575) history.jsonl grows unbounded in plaintext and is exempt from cleanupPeriodDays `enhancement` `platform:macos` `area:security` `area:cli`
- [#98574](https://github.com/anthropics/claude-code/issues/98574) [Bug] Prompt cache falls to 7,085-token system floor for 43–58 consecutive calls `duplicate`
- [#98573](https://github.com/anthropics/claude-code/issues/98573) [GitHub integration] `bug` `duplicate` `area:claude-code-web` `platform:web`
- [#98571](https://github.com/anthropics/claude-code/issues/98571) [GitHub integration] `bug` `duplicate` `github-integration`
- [#98572](https://github.com/anthropics/claude-code/issues/98572) [Bug] False Safeguard Flagging with Claude Opus 3.5 on Benign Input `bug` `duplicate` `platform:windows` `area:model`
- [#98569](https://github.com/anthropics/claude-code/issues/98569) [BUG] Auto mode denies 'Git Destructive' commands with no approval path; the non-auto prompt then recommends switching back to auto mode
- [#98570](https://github.com/anthropics/claude-code/issues/98570) [BUG] awsAuthRefresh does not display device verification code (re-filed from confirmed #82426) `bug` `api:bedrock` `platform:macos` `area:auth`
- [#98568](https://github.com/anthropics/claude-code/issues/98568) [BUG] Desktop app blocks sending message when a custom slash command is combined with a URL `bug` `has repro` `platform:macos` `area:desktop`
- [#98567](https://github.com/anthropics/claude-code/issues/98567) [GitHub integration] `invalid` `github-integration`
- [#98566](https://github.com/anthropics/claude-code/issues/98566) [FEATURE] Workflows: a deterministic shell/command step (no agent needed to run one command) `enhancement` `area:agents`
- [#98565](https://github.com/anthropics/claude-code/issues/98565) [FEATURE] Desktop sidebar: "last activity" filter / per-group limit should also work when grouped by folder `enhancement` `area:ui` `area:desktop`
- [#98532](https://github.com/anthropics/claude-code/issues/98532) [BUG] maisecrets@inline plugin blocks ALL tools - dispatch.py never created on Windows `invalid`
- [#98564](https://github.com/anthropics/claude-code/issues/98564) [BUG] VS Code plugin: mid-turn assistant text silently lost — renders as "Thought for Ns" and is missing from the session transcript `bug`
- [#98563](https://github.com/anthropics/claude-code/issues/98563) Desktop app: show each routine run's session title in the routine's History `enhancement` `platform:windows` `area:desktop` `area:routines`
- [#98561](https://github.com/anthropics/claude-code/issues/98561) [GitHub integration] `duplicate` `area:claude-code-web` `platform:web` `github-integration`
- [#98558](https://github.com/anthropics/claude-code/issues/98558) [Bug] Legitimate statusline modification incorrectly flagged as safeguard violation `bug` `platform:macos` `area:security` `area:statusline`
- [#98560](https://github.com/anthropics/claude-code/issues/98560) [FEATURE] Claude Desktop (Windows): document whether crash minidumps are uploaded (Crashpad minidumps on Windows include the process environment) and allow opting out on personal plans `invalid`
- [#98559](https://github.com/anthropics/claude-code/issues/98559) [Bug] Session incorrectly flagged as unsafe `bug` `platform:linux` `area:security` `platform:vscode`
- [#98540](https://github.com/anthropics/claude-code/issues/98540) --resume sessions: /model picker doesn't load the fetched /v1/models catalog (custom/proxied models missing) `bug` `platform:macos` `area:tui` `area:providers`
- [#98513](https://github.com/anthropics/claude-code/issues/98513) [BUG] Session-invariant context (skill/agent listings, deferred tools, CLAUDE.md) is sent after the first user prompt, so every new session and subagent rewrites it to the prompt cache `enhancement` `area:cost` `area:core`
- [#98498](https://github.com/anthropics/claude-code/issues/98498) [BUG] Windows MSIX: plugin stdio MCP servers fail — ${CLAUDE_PLUGIN_ROOT} resolves to un-virtualized %APPDATA% path, plugin files live under LocalCache `bug` `platform:windows` `area:mcp` `area:cowork`
- [#98554](https://github.com/anthropics/claude-code/issues/98554) [Bug] Account Safeguard Incorrectly Flagged Despite CVP Verification During CTF Activity `bug` `platform:macos` `area:security`
- [#98553](https://github.com/anthropics/claude-code/issues/98553) [BUG] Changed instruction files are re-appended in full with no size check, which can lock a live session `bug` `has repro` `api:bedrock` `platform:linux`
- [#98552](https://github.com/anthropics/claude-code/issues/98552) /skills omits synced skills when logged out, with no indication why `bug` `has repro` `platform:macos` `area:skills`
- [#98551](https://github.com/anthropics/claude-code/issues/98551) [FEATURE] Browser pane: let users trust local-dev domains that resolve to 127.0.0.1 (e.g. *.lndo.site, *.ddev.site) `enhancement` `platform:macos` `area:desktop` `area:sandbox`
- [#98446](https://github.com/anthropics/claude-code/issues/98446) Desktop (macOS): sessions-bridge dies at the 12-hour ingress-token refresh (code 4090), and Remote Control sessions stay offline until the app restarts `bug` `has repro` `platform:macos` `area:desktop`
- [#98495](https://github.com/anthropics/claude-code/issues/98495) [BUG] Remote HTTP MCP server's tools disappear after the access token expires and the client re-authorizes; only exiting and resuming restores them `bug` `has repro` `area:auth` `area:mcp`
- [#98550](https://github.com/anthropics/claude-code/issues/98550) [BUG] Agent Teams: an in-process teammate view never loads its transcript from disk, keeps only the last 50 messages, and is cut to one message when the teammate finishes `bug` `has repro` `platform:macos` `area:tui`

#### 🔒 Closed Issues
- [#94884](https://github.com/anthropics/claude-code/issues/94884) [BUG] Linux: login dead-ends at "Finish sign-in in the Claude app"
- [#98557](https://github.com/anthropics/claude-code/issues/98557) [Bug] Prompt cache drops to 7,085-token system floor across runs of 43–58 calls
- [#98574](https://github.com/anthropics/claude-code/issues/98574) [Bug] Prompt cache falls to 7,085-token system floor for 43–58 consecutive calls
- [#97205](https://github.com/anthropics/claude-code/issues/97205) [BUG] Sidebar empty after update to Opus 5.5 (Claude Code Desktop)
- [#98532](https://github.com/anthropics/claude-code/issues/98532) [BUG] maisecrets@inline plugin blocks ALL tools - dispatch.py never created on Windows

### OpenAI Codex (`openai/codex`)

**Stars:** 127,431 · **Open issues:** 19,861 · **Last push:** <1h ago

On October 1, 2026, OpenAI Codex released version rust-v0.159.3, which includes the new feature of optional reminders for account security setup in eligible local sessions signed in with ChatGPT. Additionally, several alpha releases were logged, specifically rust-v0.161.0-alpha.3, alpha.4, and alpha.5, alongside rust-v0.160.0-alpha.6.2. Key merged features include enhancements such as API-key model discovery enabled by default (#49807) and improvements to the exec-server protocols for handling streamed file writes (#49778). Notable new issues reported include #49497, where the Codex Web fails to determine the project root for tasks despite a runnable cloud environment, which has garnered significant attention from users.

#### 🚀 New Releases
- [rust-v0.159.3](https://github.com/openai/codex/releases/tag/rust-v0.159.3) 0.159.3
- [rust-v0.161.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.5) 0.161.0-alpha.5
- [rust-v0.161.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.4) 0.161.0-alpha.4
- [rust-v0.161.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.3) 0.161.0-alpha.3
- [rust-v0.160.0-alpha.6.2](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.6.2) 0.160.0-alpha.6.2

#### ✅ Merged PRs
- [#49811](https://github.com/openai/codex/pull/49811) Handle unsupported `fs/writeBlock` requests in exec-server
- [#49810](https://github.com/openai/codex/pull/49810) Flush expired paste bursts before handling Enter
- [#49809](https://github.com/openai/codex/pull/49809) Preserve local launch permissions across TUI sessions and reconnects
- [#49807](https://github.com/openai/codex/pull/49807) Enable API-key model discovery by default
- [#49806](https://github.com/openai/codex/pull/49806) Accept unknown Codex error variants in the app-server protocol
- [#49805](https://github.com/openai/codex/pull/49805) Add capability-gated writable file streams to the exec-server client
- [#49804](https://github.com/openai/codex/pull/49804) Use platform-specific modifier labels in TUI shortcut hints
- [#49801](https://github.com/openai/codex/pull/49801) Update the Rust toolchain action for argument-comment linting
- [#49800](https://github.com/openai/codex/pull/49800) Allow cleanup of replay-only side conversations with missing threads
- [#49799](https://github.com/openai/codex/pull/49799) Preserve server web-search settings in the TUI
- [#49798](https://github.com/openai/codex/pull/49798) Share cached exec-server environment info with Arc
- [#49796](https://github.com/openai/codex/pull/49796) Deduplicate Guardian retained-context omission notices
- [#49795](https://github.com/openai/codex/pull/49795) Avoid duplicate sync reviews in Guardian classifier continuations
- [#49793](https://github.com/openai/codex/pull/49793) Add conversation mode to Guardian v2 async classification
- [#49792](https://github.com/openai/codex/pull/49792) Add retained conversation support to Guardian async sampling
- [#49787](https://github.com/openai/codex/pull/49787) Remove `AGENTS.md` from Bazel core test data
- [#49786](https://github.com/openai/codex/pull/49786) Clarify V2 spawn model override guidance for context catalogs
- [#49785](https://github.com/openai/codex/pull/49785) Persist empty paginated threads when naming them
- [#49784](https://github.com/openai/codex/pull/49784) Add a requirements feature gate for the browser annotation API
- [#49783](https://github.com/openai/codex/pull/49783) Preserve background thread requests when forking in the TUI
- [#49782](https://github.com/openai/codex/pull/49782) Clean up process groups for failed shell snapshot captures
- [#49781](https://github.com/openai/codex/pull/49781) Include the environment's MXC backend in MCP sandbox metadata
- [#49778](https://github.com/openai/codex/pull/49778) Define exec-server protocol types for streamed file writes
- [#49763](https://github.com/openai/codex/pull/49763) [0.160] Backport maintenance-line catalog and security reminder updates
- [#49744](https://github.com/openai/codex/pull/49744) [0.159] Backport account security setup reminders for 0.159.3
- [#49715](https://github.com/openai/codex/pull/49715) Add account security setup reminders to the TUI
- [#49714](https://github.com/openai/codex/pull/49714) Decouple API-key cyber access programs from model discovery
- [#49713](https://github.com/openai/codex/pull/49713) Remove repository-local Codex guidance, skills, and environment config
- [#49712](https://github.com/openai/codex/pull/49712) Avoid full-string scans in token-budget truncation
- [#49710](https://github.com/openai/codex/pull/49710) Classify SQLite corruption using typed error codes
- [#49708](https://github.com/openai/codex/pull/49708) Move session index I/O off async runtime threads
- [#49706](https://github.com/openai/codex/pull/49706) Upgrade the argument comment lint toolchain and Dylint
- [#49704](https://github.com/openai/codex/pull/49704) Prevent npm alpha dist-tags from moving backward
- [#49702](https://github.com/openai/codex/pull/49702) Rename exec-server file handle management identifiers
- [#49701](https://github.com/openai/codex/pull/49701) Detect SQLite corruption during startup and preserve recovery backups
- [#49696](https://github.com/openai/codex/pull/49696) Make exec-server file reads cancellable between chunks
- [#49694](https://github.com/openai/codex/pull/49694) Batch rollout listing scans on cancellable blocking workers
- [#49693](https://github.com/openai/codex/pull/49693) Move thread history projection into one blocking task
- [#49692](https://github.com/openai/codex/pull/49692) Keep compressed rollout snippet searches on one blocking worker
- [#49690](https://github.com/openai/codex/pull/49690) Preserve PowerShell relative paths in the elevated Windows sandbox
- [#49689](https://github.com/openai/codex/pull/49689) Export skill invocation events through OpenTelemetry
- [#49686](https://github.com/openai/codex/pull/49686) Deliver remote message board notifications to active turns
- [#49683](https://github.com/openai/codex/pull/49683) Add a managed feature gate for in-app voice
- [#49678](https://github.com/openai/codex/pull/49678) Escape command drafts when recovering question answers
- [#49675](https://github.com/openai/codex/pull/49675) Serialize Responses routing fields before large inputs
- [#49642](https://github.com/openai/codex/pull/49642) Allow managed requirements to disable the Windows MXC sandbox
- [#49624](https://github.com/openai/codex/pull/49624) Use server authentication for explicit remote session commands
- [#49600](https://github.com/openai/codex/pull/49600) Reuse unchanged history snapshots when resuming threads
- [#49599](https://github.com/openai/codex/pull/49599) Return authoritative replay history when resuming a thread

#### 🐛 New Issues
- [#49497](https://github.com/openai/codex/issues/49497) Codex Web: first message fails with “Unable to determine project root for task” despite runnable cloud environment `bug` `codex-web` 💬4
- [#49458](https://github.com/openai/codex/issues/49458) [Windows] dot-started local tasks lack Computer Use tools while ordinary local Codex sessions work `bug` `windows-os` `app` `computer-use` 💬8
- [#49488](https://github.com/openai/codex/issues/49488) [Windows][dot/Work] Computer tasks lack browser/desktop tools: durable MCP startup failures and follow-up path error `bug` `windows-os` `mcp` `app` 💬4
- [#49547](https://github.com/openai/codex/issues/49547) macOS: Codex app repeatedly resets the UI while app processes remain running `bug` `app` 💬5
- [#49636](https://github.com/openai/codex/issues/49636) Windows: official Sites workflow starts a PTY but required write_stdin and Ctrl-C are rejected under granular policy `bug` `windows-os` `sandbox` `tool-calls` 💬3
- [#49677](https://github.com/openai/codex/issues/49677) sandbox problem `bug` `windows-os` `sandbox` `app` 💬3
- [#49780](https://github.com/openai/codex/issues/49780) Approval is never carried over for casks without an app, so every upgrade asks again for each command-line tool (macOS 27.0.1) `bug` `CLI` 💬2
- [#49731](https://github.com/openai/codex/issues/49731) Windows app with "Run agent in WSL": every command fails with "Failed to create unified exec process: No such file or directory" (arg0 helper dir deleted by Windows exec-server) `bug` `windows-os` `tool-calls` `app` 💬2
- [#49789](https://github.com/openai/codex/issues/49789) Windows app 26.928.21956: WSL sandbox fails with No such file or directory (os error 2) `bug` `windows-os` `sandbox` `app` 💬2
- [#49777](https://github.com/openai/codex/issues/49777) [Windows][WSL2] Desktop tools fail to spawn processes despite a working WSL environment and standalone Codex CLI `bug` `windows-os` `tool-calls` `app` 💬2
- [#49808](https://github.com/openai/codex/issues/49808) Native Locked use fails after display-dim lock during unattended local Goal, after earlier successful unlocks `bug` `app` `computer-use` 💬1
- [#49613](https://github.com/openai/codex/issues/49613) macOS: delegated local Work tasks omit Browser/Computer Use runtime tools while local Codex threads start node_repl `bug` `app` `subagent` `computer-use` 💬1
- [#49794](https://github.com/openai/codex/issues/49794) [macOS/Remote] Worktree chats created with create_thread missing from task list until pinned `bug` `app` `session` `remote` 💬1
- [#49790](https://github.com/openai/codex/issues/49790) clicking steer does nothing `bug` `app` 💬1
- [#49788](https://github.com/openai/codex/issues/49788) Desktop / Dot: native thread communication is asymmetric between local and cloud-backed conversations `enhancement` `app` `subagent` `app-server` 💬1
- [#49776](https://github.com/openai/codex/issues/49776) macOS: model switch silently downgrades Full Access to workspace-write while approval remains never `bug` `sandbox` `app` 💬1
- [#49775](https://github.com/openai/codex/issues/49775) TUI: add a configuration switch to disable Markdown serialization when copying selections `enhancement` `windows-os` `TUI` `CLI` 💬1
- [#49771](https://github.com/openai/codex/issues/49771) Voice chat couldn’t start `bug` `windows-os` `app` 💬1
- [#49803](https://github.com/openai/codex/issues/49803) [macOS] Sparkle auto-update never cleans up old app copy (~1.5 GB leaked per update) `bug` `app`
- [#49802](https://github.com/openai/codex/issues/49802) [macOS][Desktop][Dot] “Take over” does not provide cloud-computer control; web works `bug` `app` `computer-use`
- [#49797](https://github.com/openai/codex/issues/49797) [macOS][Desktop] ~/.codex/sessions grows excessively due to duplicated image data `bug` `app` `session` `imagen`
- [#49791](https://github.com/openai/codex/issues/49791) Windows elevated sandbox: a command whose workdir is a subfolder of the workspace root loses write access to existing subfolders (capability SID churn + non-propagating ACE) `bug` `windows-os` `sandbox` `CLI`
- [#49779](https://github.com/openai/codex/issues/49779) Homebrew cask ships bundled rg again (0.159.2): third regression of #28190 / openai/codex#32171 `bug` `CLI` `tool-calls`
- [#49774](https://github.com/openai/codex/issues/49774) Steer keyboard shortcut / send annotations `bug` `app`
- [#49773](https://github.com/openai/codex/issues/49773) "You've hit your usage limit" only when working on SSH remote connection `bug` `rate-limits` `app` `remote`
- [#49772](https://github.com/openai/codex/issues/49772) app-server: add a stable coarse category to TurnError so clients survive new CodexErrorInfo codes `enhancement` `app-server`
- [#49770](https://github.com/openai/codex/issues/49770) [Codex Desktop] Fresh user-created thread omits cross-thread read tools while local transcript fallback works `bug` `app` `session`

#### 🔒 Closed Issues
- [#44525](https://github.com/openai/codex/issues/44525) [Linux Desktop] Ambient suggestions/prewarm leak MCP and node_repl stacks every ~5 minutes
- [#49547](https://github.com/openai/codex/issues/49547) macOS: Codex app repeatedly resets the UI while app processes remain running
- [#49413](https://github.com/openai/codex/issues/49413) Add an Assistant Message Navigator to Codex CLI

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,199 · **Open issues:** 804 · **Last push:** <1h ago

On October 1, 2026, Gemini CLI released version v0.64.0-nightly.20261001.gc6bccb7ec, introducing critical fixes aimed at enhancing performance and reliability. Notably, the update resolves a CPU hang issue and prevents quote swallowing on the "@" character within code, as well as implementing serialization of file tool operations to ensure atomic writes. Two merge requests were prominent: PR #29499 addressed file operation serialization, while PR #29557 tackled the CPU hang issue. There were no new issues reported on this day, indicating a smooth transition following the updates.

#### 🚀 New Releases
- [v0.64.0-nightly.20261001.gc6bccb7ec](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261001.gc6bccb7ec) Release v0.64.0-nightly.20261001.gc6bccb7ec

#### ✅ Merged PRs
- [#29499](https://github.com/google-gemini/gemini-cli/pull/29499) fix(core): serialize file tool operations and make writes atomic (#29078)
- [#29557](https://github.com/google-gemini/gemini-cli/pull/29557) fix(cli): prevent CPU hang and quote swallowing on @ within code (#29434)

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,230 · **Open issues:** 2,177 · **Last push:** 2h ago

On October 1, 2026, GitHub Copilot CLI released version 1.0.91-0, introducing improvements for executing complete, statically analyzable read-only shell pipelines and a fix for Node/npm EACCES socket denials on Windows. This followed version 1.0.90, which added support for GPT-6.1 in model selection and refined various prompt behaviors. There were no merged PRs today, but multiple new issues emerged, with #5008 highlighting a startup error related to authentication, which has already attracted user feedback. Other notable new issues include #5020, calling for the recognition of planning intent before editing, and #5018 detailing a session interruption due to auto-cancelled permission prompts.

#### 🚀 New Releases
- [v1.0.91-0](https://github.com/github/copilot-cli/releases/tag/v1.0.91-0) 1.0.91-0
- [v1.0.90](https://github.com/github/copilot-cli/releases/tag/v1.0.90) 1.0.90
- [v1.0.90-7](https://github.com/github/copilot-cli/releases/tag/v1.0.90-7) 1.0.90-7
- [v1.0.90-6](https://github.com/github/copilot-cli/releases/tag/v1.0.90-6) 1.0.90-6

#### 🐛 New Issues
- [#5008](https://github.com/github/copilot-cli/issues/5008) Startup error "Failed to read model provider attribution: Error: Not authenticated" in 1.0.89 `area:authentication` `area:models` 💬5
- [#5015](https://github.com/github/copilot-cli/issues/5015) Keyboard-accessible pager mode for chat history, with Vim/less-style navigation `triage` 💬1
- [#5026](https://github.com/github/copilot-cli/issues/5026) Copilot CLI fails after macOS restart when persisted writer-lock device ID changes 💬1
- [#5025](https://github.com/github/copilot-cli/issues/5025) Figma remote MCP: Code Connect data always empty via Copilot CLI (get_code_connect_map returns {}), while another MCP client gets it for the same user/file/node `triage`
- [#5024](https://github.com/github/copilot-cli/issues/5024) Native Opus 5.5 tasks fail with 400 for fallback-credit-2026-07-01; fresh CLI controls pass `triage`
- [#5023](https://github.com/github/copilot-cli/issues/5023) Session resume fails when masked code-change metrics make session.shutdown counters strings `triage`
- [#5022](https://github.com/github/copilot-cli/issues/5022) Windows: VS Code agent host loads ~/.copilot/instructions twice (drive-letter case mismatch in dedup) `triage`
- [#5021](https://github.com/github/copilot-cli/issues/5021) Offer a clear next step when planning is complete `triage`
- [#5020](https://github.com/github/copilot-cli/issues/5020) Recognize planning intent and offer Plan mode before editing `triage`
- [#5019](https://github.com/github/copilot-cli/issues/5019) After a crash with an `ask_user` prompt on screen, resuming the session shows the same prompt but it can't be answered or dismissed; rewinding is the only way out `triage`
- [#5018](https://github.com/github/copilot-cli/issues/5018) Permission prompts auto-cancelled with "Session host did not acknowledge 'permission.requested' delivery within 5 seconds"; session gets stuck until exit and resume `triage`
- [#5017](https://github.com/github/copilot-cli/issues/5017) SCP-style remote retains leading slash in GitHub repository owner `triage`
- [#5016](https://github.com/github/copilot-cli/issues/5016) Final response is persisted but not displayed when idle reaper destroys detached session during completion `triage`
- [#5014](https://github.com/github/copilot-cli/issues/5014) MCP OAuth "Sign in" fails with "MCP server probe returned HTTP 400" for stateful servers (Atlassian /v2/mcp) when a valid token is already stored `triage`
- [#5013](https://github.com/github/copilot-cli/issues/5013) Serious discussion - I think github copilot cli has gone full sphagetti Code
- [#5011](https://github.com/github/copilot-cli/issues/5011) Load custom instructions from multiple repositories in one session (multi-repo / fullstack workflows `triage`
- [#5010](https://github.com/github/copilot-cli/issues/5010) HEIC attachments are not visible to the assistant while equivalent PNG works `triage`
- [#5009](https://github.com/github/copilot-cli/issues/5009) Empty assistant completions are rendered as "No response was returned" retry errors `triage`

#### 🔒 Closed Issues
- [#3282](https://github.com/github/copilot-cli/issues/3282) Add multiple BYOK model capability in copilot cli
- [#2736](https://github.com/github/copilot-cli/issues/2736) Fails with "posix_spawnp failed" and then misdiagnoses command as missing
- [#3688](https://github.com/github/copilot-cli/issues/3688) Repository-level custom agents resolved relative to git root, but skills and .mcp.json relative to cwd
- [#4556](https://github.com/github/copilot-cli/issues/4556) Server-managed extraKnownMarketplaces is fetched but never registers a marketplace (silent auth bail in plugin path)
- [#4542](https://github.com/github/copilot-cli/issues/4542) Workspace .mcp.json detected by 'mcp list'/'mcp get' but not connected in actual agent session (interactive/-i/-p)
- [#524](https://github.com/github/copilot-cli/issues/524) Usage data is incorrect when sessions are resumed
- [#4290](https://github.com/github/copilot-cli/issues/4290) #4163 is not fixed
- [#4164](https://github.com/github/copilot-cli/issues/4164) Large Image Attachment Warning Excess Bug
- [#5026](https://github.com/github/copilot-cli/issues/5026) Copilot CLI fails after macOS restart when persisted writer-lock device ID changes
- [#4304](https://github.com/github/copilot-cli/issues/4304) New session sidebar cannot be navigated with arrow keys
- [#3366](https://github.com/github/copilot-cli/issues/3366) Orphan tool_use in events.jsonl wedges sessions permanently (write-side + read-side)
- [#2554](https://github.com/github/copilot-cli/issues/2554) Cannot launch subagents using different models when BYOK
- [#5013](https://github.com/github/copilot-cli/issues/5013) Serious discussion - I think github copilot cli has gone full sphagetti Code

### OpenCode (`anomalyco/opencode`)

**Stars:** 211,181 · **Open issues:** 6,350 · **Last push:** 2h ago

On October 1, 2026, OpenCode released version v1.18.34, which includes critical bug fixes such as the addition of namespaced session and parent-session identity headers for model requests, ensuring enhanced reliability for locally compiled macOS binaries and CLI release binaries via a Developer ID. Significant merged pull requests improved AI response handling by stopping retries on Z.ai model and permission rejections, as well as ensuring forward-compatible model capability defaults. Noteworthy discussions have arisen around new issues, particularly #52371, where users reported rapid limit exhaustion while using the Muse Spark 1.3 Contributor. Additionally, several requests for feature enhancements have been made, including support for clickable hyperlinks in terminal output (#52404).

#### 🚀 New Releases
- [v1.18.34](https://github.com/anomalyco/opencode/releases/tag/v1.18.34) v1.18.34

#### ✅ Merged PRs
- [#52135](https://github.com/anomalyco/opencode/pull/52135) fix(ai): stop retrying Z.ai Responses model and permission rejections
- [#52389](https://github.com/anomalyco/opencode/pull/52389) fix(session-ui): increase markdown bold weight
- [#52387](https://github.com/anomalyco/opencode/pull/52387) feat(plugin): expose session removal
- [#52388](https://github.com/anomalyco/opencode/pull/52388) fix(ai): make model capability defaults forward-compatible
- [#52370](https://github.com/anomalyco/opencode/pull/52370) fix(opencode): add namespaced session identity headers
- [#52368](https://github.com/anomalyco/opencode/pull/52368) fix(core): add namespaced session identity headers
- [#52364](https://github.com/anomalyco/opencode/pull/52364) fix(core): avoid reinjecting ancestor instructions
- [#52222](https://github.com/anomalyco/opencode/pull/52222) fix(ai): route Cloudflare AI Gateway Claude and OpenAI through native passthroughs

#### 🐛 New Issues
- [#52371](https://github.com/anomalyco/opencode/issues/52371) I burned through my limits in two days using Muse Spark 1.3 Contributor. 💬3
- [#52404](https://github.com/anomalyco/opencode/issues/52404) [FEATURE]: tui: support clickable hyperlinks in terminal output 💬3
- [#52393](https://github.com/anomalyco/opencode/issues/52393) Zen free tier incorrectly requires 'OpenCode 1.18.0 or newer' on Desktop v1.18.33 (API key auth) 💬3
- [#52394](https://github.com/anomalyco/opencode/issues/52394) server: GET /api/location returns empty 500 for client-local directories, breaking opencode run --server 💬2
- [#52400](https://github.com/anomalyco/opencode/issues/52400) server: schema rejection kind=Payload on every turn whenever a plugin is loaded — non-load-bearing, unidentifiable without a path log 💬2
- [#52293](https://github.com/anomalyco/opencode/issues/52293) [BUG]: Go subscription orphaned – CLI works but dashboard shows no subscription, NO email reply for 5 days 💬2
- [#52403](https://github.com/anomalyco/opencode/issues/52403) [FEATURE]: Stable glm-flash-latest and deepseek-flash-latest routing aliases 💬2
- [#52267](https://github.com/anomalyco/opencode/issues/52267) Go plan: 403 "An active OpenCode Go subscription is required" on every Go model — reproduced via API today, Zen models also 403 💬2
- [#52215](https://github.com/anomalyco/opencode/issues/52215) Severe latency + aborted streams on opencode-go (Console Go) — streams hang for minutes and fail with "other side closed" / "Endpoint is unavailable" 💬2
- [#52380](https://github.com/anomalyco/opencode/issues/52380) I bought the opencode credits 💬2
- [#52381](https://github.com/anomalyco/opencode/issues/52381) new agent 💬2
- [#52383](https://github.com/anomalyco/opencode/issues/52383) GitHub agent posts a broken session link (opencode.ai/s/<id> returns 404) 💬2
- [#52392](https://github.com/anomalyco/opencode/issues/52392) Bug: "Service Unavailable" when using my OpenAI enterprise account 💬2
- [#52372](https://github.com/anomalyco/opencode/issues/52372) Agent loops indefinitely retrying a failing tool call (no circuit breaker) — e.g. read() on images that don't render 💬2
- [#52378](https://github.com/anomalyco/opencode/issues/52378) subagent: `finish:"error"` / `MALFORMED_FUNCTION_CALL` with empty content is reported to the parent as a successful completion 💬2
- [#52377](https://github.com/anomalyco/opencode/issues/52377) 「思考流式显示丢失」：长对话/切换模型后 reasoning 流式显示缺失——provider 流式能力无保证 + /event 无重放游标（ordinal 契约已核实对齐） 💬2
- [#52410](https://github.com/anomalyco/opencode/issues/52410) MCP child-process leak: server never reaps MCP children per (re)connection, leading to unbounded memory growth `needs:compliance` 💬1
- [#52409](https://github.com/anomalyco/opencode/issues/52409) Agent-driven compaction is impossible today: request session.compact() / session.getContextUsage() tool surface `needs:compliance` 💬1
- [#52408](https://github.com/anomalyco/opencode/issues/52408) quota to decrease rapidly `needs:compliance` 💬1
- [#52405](https://github.com/anomalyco/opencode/issues/52405) [BUG] GET /session/status intermittently omits a session that is actively generating 💬1
- [#52407](https://github.com/anomalyco/opencode/issues/52407) browser: screenshot returns stale frame after client-side navigation 💬1
- [#52406](https://github.com/anomalyco/opencode/issues/52406) Access to Muse models restricted: "Your access has been restricted due to repeated policy violations" 💬1
- [#52402](https://github.com/anomalyco/opencode/issues/52402) Probleme fonte forfait go , en un jour sans raison, logs normaux `needs:compliance` 💬1
- [#52401](https://github.com/anomalyco/opencode/issues/52401) console: usage limit bars read inverted — remaining (green fill) is mistaken for spend `needs:compliance` 💬1
- [#52399](https://github.com/anomalyco/opencode/issues/52399) tui: allow vertical tab sidebar on left or right side `needs:compliance` 💬1
- [#52396](https://github.com/anomalyco/opencode/issues/52396) [FEATURE]: add ZenBlue theme 💬1
- [#52397](https://github.com/anomalyco/opencode/issues/52397) server: SIGTERM exits immediately instead of draining in-flight sessions within the grace period `needs:compliance` 💬1
- [#52395](https://github.com/anomalyco/opencode/issues/52395) core: continuing a V1-created session fails with UNIQUE constraint on event seq `needs:compliance` 💬1
- [#52390](https://github.com/anomalyco/opencode/issues/52390) MCP local schema references produce stringified object arguments with Nemotron and Qwen 💬1
- [#52376](https://github.com/anomalyco/opencode/issues/52376) After updating to version 3.1.0 same problem 💬1
- [#52375](https://github.com/anomalyco/opencode/issues/52375) desktop: gpt-6.1-sol missing from ChatGPT OAuth models, shared session model forcibly switched 💬1
- [#52374](https://github.com/anomalyco/opencode/issues/52374) auth: opencode-go uses the Console credential instead of its own, causing spurious GoUsageLimitError 💬1
- [#52379](https://github.com/anomalyco/opencode/issues/52379) [FEATURE]: Add a config option to enforce foreground-only subagents

#### 🔒 Closed Issues
- [#52393](https://github.com/anomalyco/opencode/issues/52393) Zen free tier incorrectly requires 'OpenCode 1.18.0 or newer' on Desktop v1.18.33 (API key auth)
- [#52394](https://github.com/anomalyco/opencode/issues/52394) server: GET /api/location returns empty 500 for client-local directories, breaking opencode run --server
- [#52380](https://github.com/anomalyco/opencode/issues/52380) I bought the opencode credits
- [#52381](https://github.com/anomalyco/opencode/issues/52381) new agent
- [#52383](https://github.com/anomalyco/opencode/issues/52383) GitHub agent posts a broken session link (opencode.ai/s/<id> returns 404)
- [#52372](https://github.com/anomalyco/opencode/issues/52372) Agent loops indefinitely retrying a failing tool call (no circuit breaker) — e.g. read() on images that don't render
- [#52405](https://github.com/anomalyco/opencode/issues/52405) [BUG] GET /session/status intermittently omits a session that is actively generating

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,247 · **Open issues:** 1,569 · **Last push:** <1h ago

On October 1, 2026, Qwen Code released version v0.24.7-nightly.20260930.57e720bc97, which included crucial fixes such as aligning Code Mode text with lazy tool discovery and addressing issues with permissions for approved cross-directory tool calls. Significant merges included updates to the managed-agent involving pinning provider control refusal guards and recovering Hosted MCP release retries. Among the new issues raised, the most notable was the report of Qwen Code Desktop becoming unusable due to all workspaces being marked as untrusted. Other discussions included a follow-up on hosted file history and large JSON rendering in the web shell.

#### 🚀 New Releases
- [v0.24.7-nightly.20260930.57e720bc97](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20260930.57e720bc97) Release v0.24.7-nightly.20260930.57e720bc97

#### ✅ Merged PRs
- [#13118](https://github.com/QwenLM/qwen-code/pull/13118) test(managed-agent): Pin provider control refusal guards
- [#13109](https://github.com/QwenLM/qwen-code/pull/13109) fix(managed-agent): Recover Hosted MCP release retries

#### 🐛 New Issues
- [#13103](https://github.com/QwenLM/qwen-code/issues/13103) test(managed-agent): pin the sixteen lines of the Broker provider control that survive mutation `priority/P3` `category/integration` `scope/testing` `type/enhancement` 💬4
- [#13121](https://github.com/QwenLM/qwen-code/issues/13121) Third-party OpenAI-compatible endpoint example (DemonRoute)? `priority/P3` `type/documentation` `category/configuration` `scope/documentation` 💬4
- [#13106](https://github.com/QwenLM/qwen-code/issues/13106) fix(core): cd segments silently drop redirect targets from Write deny checks `priority/P1` `type/bug` `category/security` `scope/shell` 💬4
- [#13133](https://github.com/QwenLM/qwen-code/issues/13133) follow-up(managed-hooks): decide idle ownership and address deferred review diagnostics `priority/P3` `status/blocked` `category/core` `scope/session-management` 💬3
- [#13132](https://github.com/QwenLM/qwen-code/issues/13132) fix(managed-hooks): bound long-session Store work and cold restore latency `priority/P2` `type/bug` `category/performance` `scope/session-management` 💬3
- [#13124](https://github.com/QwenLM/qwen-code/issues/13124) Hosted file history: retention and recovery follow-ups / Hosted 文件历史：保留与恢复后续 `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13130](https://github.com/QwenLM/qwen-code/issues/13130) Qwen Code Desktop became unusable for me because every workspace suddenly turned untrusted `status/need-information` `priority/P2` `type/bug` `category/security` 💬3
- [#13096](https://github.com/QwenLM/qwen-code/issues/13096) bug(web-shell): large /context detail snapshots render as truncated JSON `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#13125](https://github.com/QwenLM/qwen-code/issues/13125) responses replay cleanup: tool-media guard provenance, contract docstring, signature NOTE (follow-up from #11684) `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬3
- [#13123](https://github.com/QwenLM/qwen-code/issues/13123) agent hosts: remote-connect allowHttp downgrades the leg that carries the enrollment token `priority/P3` `category/security` `scope/credential-security` `type/enhancement` 💬3
- [#13122](https://github.com/QwenLM/qwen-code/issues/13122) agent hosts: re-enrollment after a 401 leaves the stale host row with a still-valid credential `priority/P2` `type/bug` `category/security` `scope/credential-security` 💬3
- [#13076](https://github.com/QwenLM/qwen-code/issues/13076) bug(cli): Windows flash-exits with no output — launcher never surfaces spawnSync result.error `status/need-information` `status/needs-triage` `type/bug` 💬3
- [#13111](https://github.com/QwenLM/qwen-code/issues/13111) Android Phase 2 follow-up: regression coverage and export UX `priority/P3` `category/platform` `scope/testing` `type/enhancement` 💬3
- [#13113](https://github.com/QwenLM/qwen-code/issues/13113) Session becomes unopenable: "Transcript snapshot is too large to index" — file_history_snapshot grows quadratically and the 256 MiB index limit is hardcoded `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#13105](https://github.com/QwenLM/qwen-code/issues/13105) feat(managed-agent): Hosted file history settlement and undo / 文件历史结算与撤销 `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13102](https://github.com/QwenLM/qwen-code/issues/13102) fix(serve): the raw-path tool executor keeps every call, with its input and result, for the life of the worker `priority/P2` `type/bug` `category/performance` `scope/session-management` 💬3
- [#13089](https://github.com/QwenLM/qwen-code/issues/13089) Web Shell /stats model overlaps long headers and exposes truncated JSON `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#13100](https://github.com/QwenLM/qwen-code/issues/13100) fix(web-shell): memory panel User tab can silently replace the global QWEN.md `priority/P1` `type/bug` `category/ui` `scope/memory` 💬3
- [#13092](https://github.com/QwenLM/qwen-code/issues/13092) Add SerpApi to Web Search MCP services document `priority/P3` `type/documentation` `category/integration` `scope/mcp` 💬3
- [#13078](https://github.com/QwenLM/qwen-code/issues/13078) Daily dependency CVE audit failed `status/needs-triage` `scope/ci-cd` 💬2
- [#13085](https://github.com/QwenLM/qwen-code/issues/13085) Deferred review findings from PR #13013: test(integration): disable managed auto-memory by default in E2E harnesses (#130 💬1

#### 🔒 Closed Issues
- [#12976](https://github.com/QwenLM/qwen-code/issues/12976) feat(managed-agent): Declare the tenant filter's 403 on the remaining filtered routes
- [#12770](https://github.com/QwenLM/qwen-code/issues/12770) fix(core): extension lifecycle events ignore privacy.usageStatisticsEnabled and are uploaded to RUM
- [#13096](https://github.com/QwenLM/qwen-code/issues/13096) bug(web-shell): large /context detail snapshots render as truncated JSON
- [#13049](https://github.com/QwenLM/qwen-code/issues/13049) test(managed-agent): build G0 failure diagnostics only on failure
- [#13046](https://github.com/QwenLM/qwen-code/issues/13046) test(managed-agent): cover G0 policy and mount-tenant admission guards
- [#13045](https://github.com/QwenLM/qwen-code/issues/13045) test(managed-agent): isolate G0 Harness temporary directories
- [#13089](https://github.com/QwenLM/qwen-code/issues/13089) Web Shell /stats model overlaps long headers and exposes truncated JSON
- [#13050](https://github.com/QwenLM/qwen-code/issues/13050) docs(managed-agent): align G0 design scope with the merged change
- [#13053](https://github.com/QwenLM/qwen-code/issues/13053) test(managed-agent): assert G0 Workspace admission error codes
- [#13052](https://github.com/QwenLM/qwen-code/issues/13052) docs(managed-agent): correct the real-model and failover script prerequisites
- [#13056](https://github.com/QwenLM/qwen-code/issues/13056) test(managed-agent): clarify the post-submission refusal regression witness
- [#13055](https://github.com/QwenLM/qwen-code/issues/13055) test(managed-agent): clarify retryable Workspace refusal coverage
- [#13034](https://github.com/QwenLM/qwen-code/issues/13034) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > settles a turn after one managed-message failure
- [#9964](https://github.com/QwenLM/qwen-code/issues/9964) external-context: extend the interactive fake-Mem0 write harness with a mem0 OSS provider variant

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

**Stars:** 390,993 · **Open issues:** 9,180 · **Last push:** <1h ago

On October 1, 2026, OpenClaw released version 2026.9.7, which includes substantial changes and improvements documented in the release notes. Key merged features today include the retirement of the beta.5 whole-session-store bridge, fixes for session management on macOS, and a significant refactor of channel policies that promotes better draft rotation. Among the pressing new issues, notable concerns include a worker task error on Windows leading to session-history read failures, and a session creation issue that results in the publication owner being deemed no longer current. These developments reflect ongoing efforts to enhance stability and functionality across various platforms.

#### 🚀 New Releases
- [v2026.9.7](https://github.com/openclaw/openclaw/releases/tag/v2026.9.7) openclaw 2026.9.7

#### ✅ Merged PRs
- [#162250](https://github.com/openclaw/openclaw/pull/162250) fix(ui): Control UI e2e draft-editing and shortcut-tooltip tests fail on macOS hosts
- [#162265](https://github.com/openclaw/openclaw/pull/162265) chore(i18n): refresh native locales
- [#160167](https://github.com/openclaw/openclaw/pull/160167) fix(update): refuse automatic restore after unattributed Doctor-time database writes
- [#162212](https://github.com/openclaw/openclaw/pull/162212) fix(sessions): Gateway shutdown waits on throwaway session maintenance workers
- [#162233](https://github.com/openclaw/openclaw/pull/162233) fix(crabbox): macOS cloud workers reject their own live node on CPU-starved hosts
- [#162220](https://github.com/openclaw/openclaw/pull/162220) refactor(plugin-sdk)!: retire beta.5 whole-session-store bridge
- [#162249](https://github.com/openclaw/openclaw/pull/162249) fix(pr): stop expiring completed ClawSweeper reviews after twelve hours
- [#161709](https://github.com/openclaw/openclaw/pull/161709) feat(macos): host the Gateway on bundled Bun
- [#162219](https://github.com/openclaw/openclaw/pull/162219) refactor(channels): share draft rotation and retirement policies
- [#160599](https://github.com/openclaw/openclaw/pull/160599) docs: fix Bitwarden and password-store recipe links
- [#162244](https://github.com/openclaw/openclaw/pull/162244) fix(pr): register the maintenance-context module in the wrapper inventory
- [#161832](https://github.com/openclaw/openclaw/pull/161832) fix(telegram): prevent empty retired bindings from blocking updates
- [#160513](https://github.com/openclaw/openclaw/pull/160513) docs: install the checkout pnpm version when Corepack is unavailable
- [#162100](https://github.com/openclaw/openclaw/pull/162100) refactor(core): deslop state, skills, logging, ACP and session helpers fourth pass
- [#162070](https://github.com/openclaw/openclaw/pull/162070) refactor(agents): deslop agents core sixth pass
- [#162235](https://github.com/openclaw/openclaw/pull/162235) fix(android): allow internal releases to commit to Google Play
- [#160239](https://github.com/openclaw/openclaw/pull/160239) docs: macOS VM install step fails on a fresh VM without Node
- [#162179](https://github.com/openclaw/openclaw/pull/162179) fix(sessions): keep one agent's queue cleanup from cancelling another agent's work
- [#159796](https://github.com/openclaw/openclaw/pull/159796) docs: fix session tool gateway timeout link
- [#162208](https://github.com/openclaw/openclaw/pull/162208) fix(ui): archived sessions remain visible until reload
- [#162141](https://github.com/openclaw/openclaw/pull/162141) fix(code-mode): retire warm workers with their host
- [#146951](https://github.com/openclaw/openclaw/pull/146951) docs: explain skill readiness and visibility
- [#162148](https://github.com/openclaw/openclaw/pull/162148) docs: link contributor profiles in the 2026.9.3 release page
- [#162214](https://github.com/openclaw/openclaw/pull/162214) refactor(ollama): consolidate redundant test coverage
- [#161536](https://github.com/openclaw/openclaw/pull/161536) fix(test): memory flush suite teardown fails with ENOTEMPTY
- [#159240](https://github.com/openclaw/openclaw/pull/159240) docs: clarify Telegram Node runtime guidance
- [#162200](https://github.com/openclaw/openclaw/pull/162200) fix: avoid slow requester checks during Doctor repairs
- [#162137](https://github.com/openclaw/openclaw/pull/162137) fix: root Vitest runs use the matching browser provider
- [#160760](https://github.com/openclaw/openclaw/pull/160760) fix(gateway): restore CLI-backed exec with secret egress proxy
- [#161616](https://github.com/openclaw/openclaw/pull/161616) fix(macos): native tests flake on busy runners when fixed wait deadlines expire
- [#159205](https://github.com/openclaw/openclaw/pull/159205) docs: document image replay cost for vision models
- [#161637](https://github.com/openclaw/openclaw/pull/161637) fix(test): node worker tunnel lifecycle tests time out while worker subprocesses compile
- [#159062](https://github.com/openclaw/openclaw/pull/159062) docs: fix mapped hooks section link
- [#158229](https://github.com/openclaw/openclaw/pull/158229) docs: fix SDK migration section links
- [#157715](https://github.com/openclaw/openclaw/pull/157715) docs: show how Nextcloud Talk messages reach the agent
- [#162203](https://github.com/openclaw/openclaw/pull/162203) refactor(cli): centralize noninteractive Gateway option validation
- [#161509](https://github.com/openclaw/openclaw/pull/161509) fix(test): splash skeleton geometry check flakes when the viewport grows
- [#157441](https://github.com/openclaw/openclaw/pull/157441) docs: fix utility model migration links
- [#162191](https://github.com/openclaw/openclaw/pull/162191) refactor(cli): share Gateway configuration prompts and decisions
- [#161019](https://github.com/openclaw/openclaw/pull/161019) fix: hide agents excluded by operator roles from the picker
- [#157257](https://github.com/openclaw/openclaw/pull/157257) docs(firecrawl): link the Firecrawl site and where to get an API key
- [#155950](https://github.com/openclaw/openclaw/pull/155950) docs(tts): document that restricted tool profiles exclude the tts tool
- [#161393](https://github.com/openclaw/openclaw/pull/161393) fix(ui): Enter on a hovered "Assign to…" item assigns the session to yourself
- [#155449](https://github.com/openclaw/openclaw/pull/155449) docs: clarify session metadata and conversation history readers
- [#160128](https://github.com/openclaw/openclaw/pull/160128) fix: resume compacted turns after a Gateway restart
- [#162153](https://github.com/openclaw/openclaw/pull/162153) refactor(doctor): remove superseded CLI backend field migrations
- [#161451](https://github.com/openclaw/openclaw/pull/161451) fix(plugins): let session_end hooks read ended transcripts
- [#162152](https://github.com/openclaw/openclaw/pull/162152) fix(doctor): preserve prior cron run-log archives
- [#162202](https://github.com/openclaw/openclaw/pull/162202) test(core,plugins): remove low-value tests (batch d119)
- [#162112](https://github.com/openclaw/openclaw/pull/162112) chore(ui): make update triage test recordings opt-in
- [#162188](https://github.com/openclaw/openclaw/pull/162188) docs: publish release notes for v2026.9.7
- [#147599](https://github.com/openclaw/openclaw/pull/147599) docs(plugins): correct the rendered Control UI descriptor surfaces
- [#162150](https://github.com/openclaw/openclaw/pull/162150) fix(update): explain the bridge release for retired config
- [#147038](https://github.com/openclaw/openclaw/pull/147038) fix(docs): restore Gateway CLI option anchors
- [#162167](https://github.com/openclaw/openclaw/pull/162167) refactor(agents): share CLI candidate binding lifecycle
- [#162156](https://github.com/openclaw/openclaw/pull/162156) fix(codex): restore persona on remote app-server connections
- [#162174](https://github.com/openclaw/openclaw/pull/162174) refactor(channels): finish shared draft-stream ownership
- [#162187](https://github.com/openclaw/openclaw/pull/162187) docs: publish release notes for v2026.9.6
- [#161812](https://github.com/openclaw/openclaw/pull/161812) feat(android): add daily internal testing builds
- [#162190](https://github.com/openclaw/openclaw/pull/162190) docs: keep 2026.9.3 public credits to verified GitHub accounts
- [#162186](https://github.com/openclaw/openclaw/pull/162186) docs: publish release notes for v2026.9.5
- [#162116](https://github.com/openclaw/openclaw/pull/162116) refactor(agents): deslop subagents and harness third pass
- [#162094](https://github.com/openclaw/openclaw/pull/162094) refactor(gateway): reuse helpers and remove redundant state
- [#162178](https://github.com/openclaw/openclaw/pull/162178) refactor(agents): simplify candidate input normalization
- [#145034](https://github.com/openclaw/openclaw/pull/145034) docs(cli): list cron show and scratch commands
- [#160137](https://github.com/openclaw/openclaw/pull/160137) fix(telegram): preserve queued preview writer authority
- [#161881](https://github.com/openclaw/openclaw/pull/161881) chore(deps): update fs-safe to 0.21.3
- [#162185](https://github.com/openclaw/openclaw/pull/162185) chore(ui): refresh control ui locales
- [#162123](https://github.com/openclaw/openclaw/pull/162123) fix(build): avoid mixed transcript visibility imports
- [#160181](https://github.com/openclaw/openclaw/pull/160181) fix(cli): release plugin resources when help finishes
- [#162101](https://github.com/openclaw/openclaw/pull/162101) fix(test): survivor service stop leaves detached Gateway children
- [#162057](https://github.com/openclaw/openclaw/pull/162057) refactor(config): deslop config eighth pass
- [#162082](https://github.com/openclaw/openclaw/pull/162082) chore(ui): refresh control ui locales
- [#162111](https://github.com/openclaw/openclaw/pull/162111) refactor(agents): share candidate execution between command and channel runs
- [#162173](https://github.com/openclaw/openclaw/pull/162173) fix(ui): stop showing old publication failures as PR errors
- [#162145](https://github.com/openclaw/openclaw/pull/162145) refactor(cli): share Gateway configuration and service application
- [#162168](https://github.com/openclaw/openclaw/pull/162168) fix(test): avoid ancestor locks in oxlint fixtures
- [#162162](https://github.com/openclaw/openclaw/pull/162162) chore(tests): deduplicate baseline-independent survivor assertions
- [#162158](https://github.com/openclaw/openclaw/pull/162158) docs: clarify Agents API setup and hosted VM support
- [#162169](https://github.com/openclaw/openclaw/pull/162169) docs: publish release notes for v2026.9.5
- [#162133](https://github.com/openclaw/openclaw/pull/162133) fix: shutdown test fails before recap model starts
- [#162165](https://github.com/openclaw/openclaw/pull/162165) fix(github-copilot): stop revoked reconnects before discovery
- [#162163](https://github.com/openclaw/openclaw/pull/162163) docs: publish release notes for v2026.9.7
- [#160117](https://github.com/openclaw/openclaw/pull/160117) fix(ui): hide single-widget pill in split dashboards
- [#162161](https://github.com/openclaw/openclaw/pull/162161) docs: publish release notes for v2026.9.6
- [#162151](https://github.com/openclaw/openclaw/pull/162151) docs: fix contributor profile links in 2026.9.4 release notes
- [#162143](https://github.com/openclaw/openclaw/pull/162143) refactor(lmstudio): consolidate overlapping test coverage
- [#162157](https://github.com/openclaw/openclaw/pull/162157) chore(ui): refresh control ui locales
- [#162104](https://github.com/openclaw/openclaw/pull/162104) test(core,plugins): remove low-value tests (batch d117)
- [#162140](https://github.com/openclaw/openclaw/pull/162140) chore(ui): make login guidance test recordings opt-in
- [#161960](https://github.com/openclaw/openclaw/pull/161960) feat(sessions): snooze sessions from the sidebar menu
- [#162091](https://github.com/openclaw/openclaw/pull/162091) refactor(cron): await quarantine observations in Doctor
- [#162138](https://github.com/openclaw/openclaw/pull/162138) test(core,plugins): remove low-value tests (batch d118)
- [#162050](https://github.com/openclaw/openclaw/pull/162050) fix: restore Windows autostart after a cancelled disable failure
- [#162109](https://github.com/openclaw/openclaw/pull/162109) test(subagents): make publication and requester-wake fixtures deterministic
- [#161919](https://github.com/openclaw/openclaw/pull/161919) fix(update): reduce oversized sealed recovery packages
- [#161994](https://github.com/openclaw/openclaw/pull/161994) refactor(agents): deslop agent runtime
- [#162025](https://github.com/openclaw/openclaw/pull/162025) refactor(test): remove duplicate Discord encoded-video case
- [#162021](https://github.com/openclaw/openclaw/pull/162021) refactor(doctor): observe serving Gateway ownership off thread
- [#162065](https://github.com/openclaw/openclaw/pull/162065) fix(update): keep plugin Doctor warnings from blocking upgrades
- [#162118](https://github.com/openclaw/openclaw/pull/162118) fix(test): isolate local-check fixtures from ancestor locks
- [#162122](https://github.com/openclaw/openclaw/pull/162122) docs: publish release notes for v2026.9.7
- [#162102](https://github.com/openclaw/openclaw/pull/162102) refactor: reuse XML decoding in Apple localization tools
- [#162090](https://github.com/openclaw/openclaw/pull/162090) refactor(discord): trim unused voice test harness members
- [#162107](https://github.com/openclaw/openclaw/pull/162107) refactor(agents): simplify stream diagnostics helpers
- [#162084](https://github.com/openclaw/openclaw/pull/162084) test(agents): restore absent HOME in models fixtures
- [#162097](https://github.com/openclaw/openclaw/pull/162097) refactor(config): simplify remaining config helpers
- [#162103](https://github.com/openclaw/openclaw/pull/162103) refactor(android): simplify chat and SMS projections
- [#161958](https://github.com/openclaw/openclaw/pull/161958) feat(workboard): add utility-model categorized Sessions boards
- [#162081](https://github.com/openclaw/openclaw/pull/162081) refactor(android): simplify voice and Wear state handling
- [#162093](https://github.com/openclaw/openclaw/pull/162093) refactor(agents): simplify patch target deduplication
- [#162096](https://github.com/openclaw/openclaw/pull/162096) chore(ui): make media permission test recordings opt-in
- [#161969](https://github.com/openclaw/openclaw/pull/161969) refactor(agents): deslop tools, auth profiles, sandbox and failover second pass
- [#162045](https://github.com/openclaw/openclaw/pull/162045) refactor(memory): move Forget planning reads off the caller thread
- [#162092](https://github.com/openclaw/openclaw/pull/162092) perf(ui): stop re-normalizing session keys and rescanning history on every render
- [#160933](https://github.com/openclaw/openclaw/pull/160933) docs: draft v2026.9.7 release notes
- [#162002](https://github.com/openclaw/openclaw/pull/162002) refactor(android): deslop Android app seventh pass
- [#161971](https://github.com/openclaw/openclaw/pull/161971) refactor(test): remove orphaned Claw lifecycle fixtures
- [#162043](https://github.com/openclaw/openclaw/pull/162043) fix(macos): native chat settings changes can overwrite a newer session or permission state
- [#160580](https://github.com/openclaw/openclaw/pull/160580) improve: remove model age and tier audit warnings
- [#162015](https://github.com/openclaw/openclaw/pull/162015) perf(state): retire periodic runtime integrity scans
- [#162076](https://github.com/openclaw/openclaw/pull/162076) fix: keep update verification working after package replacement
- [#162024](https://github.com/openclaw/openclaw/pull/162024) fix: Daybreak hides supported xhigh and max reasoning
- [#162020](https://github.com/openclaw/openclaw/pull/162020) chore(auth): cover OAuth retries through real Gateway connections
- [#162068](https://github.com/openclaw/openclaw/pull/162068) chore(ui): make prepend regression recordings opt-in
- [#162013](https://github.com/openclaw/openclaw/pull/162013) perf(gateway): avoid display-row waits in message subscriptions
- [#162010](https://github.com/openclaw/openclaw/pull/162010) refactor(gateway): deslop gateway core files third pass
- [#160932](https://github.com/openclaw/openclaw/pull/160932) fix: restrict thread archiving to creators and admins
- [#161989](https://github.com/openclaw/openclaw/pull/161989) refactor: consolidate cross-directory duplicate code third pass
- [#161984](https://github.com/openclaw/openclaw/pull/161984) refactor(plugin-sdk): deslop plugin SDK internals second pass
- [#162060](https://github.com/openclaw/openclaw/pull/162060) chore(i18n): refresh native locales
- [#162042](https://github.com/openclaw/openclaw/pull/162042) refactor(test): remove unused Workshop fixture alias
- [#162009](https://github.com/openclaw/openclaw/pull/162009) fix(test): keep extension batches inside requested directories
- [#162051](https://github.com/openclaw/openclaw/pull/162051) fix(test): ClawHub alpha rejection fixture fails lint
- [#161990](https://github.com/openclaw/openclaw/pull/161990) fix(update): restore Windows task autostart after cancellation
- [#162032](https://github.com/openclaw/openclaw/pull/162032) fix(codex): preserve payload keys and current inventory diagnostics
- [#162000](https://github.com/openclaw/openclaw/pull/162000) refactor(ui): deslop chat pages fourth pass
- [#162040](https://github.com/openclaw/openclaw/pull/162040) fix(ui): show missing reply labels in user messages
- [#162019](https://github.com/openclaw/openclaw/pull/162019) test(core,plugins,ui): remove low-value tests (batch d116)
- [#162035](https://github.com/openclaw/openclaw/pull/162035) perf(ui): keep chat renders independent of history length
- [#161935](https://github.com/openclaw/openclaw/pull/161935) refactor(cron): keep receipt checks off the Gateway thread
- [#162022](https://github.com/openclaw/openclaw/pull/162022) feat(macos): show online people and session viewers in the native sidebar
- [#161614](https://github.com/openclaw/openclaw/pull/161614) improve(tests): replace Rust session fixture delays with signals
- [#161945](https://github.com/openclaw/openclaw/pull/161945) refactor(test): remove duplicate internal hook disable check
- [#162030](https://github.com/openclaw/openclaw/pull/162030) chore(i18n): refresh native locales
- [#161954](https://github.com/openclaw/openclaw/pull/161954) fix: plugin configuration rejects encoded schema reference separators
- [#162007](https://github.com/openclaw/openclaw/pull/162007) chore(ui): make durable chat scenario videos opt-in
- [#161007](https://github.com/openclaw/openclaw/pull/161007) feat(cron): let a failing automation's owner conversation repair it before alerting
- [#162014](https://github.com/openclaw/openclaw/pull/162014) refactor(test): remove duplicate browser timer cap case
- [#161586](https://github.com/openclaw/openclaw/pull/161586) fix(doctor): stop repeated warnings for archived Workshop backups
- [#161972](https://github.com/openclaw/openclaw/pull/161972) refactor(scripts): deslop tooling scripts fifth pass
- [#162012](https://github.com/openclaw/openclaw/pull/162012) fix(scripts): restore Codex protocol config-edit type probe
- [#161993](https://github.com/openclaw/openclaw/pull/161993) test(core,plugins,ui): remove low-value tests (batch d114)
- [#161959](https://github.com/openclaw/openclaw/pull/161959) refactor(memory): move Forget transactions off the host thread
- [#161973](https://github.com/openclaw/openclaw/pull/161973) feat(macos): align native sidebar rows with the web Control UI
- [#161988](https://github.com/openclaw/openclaw/pull/161988) refactor(policy): deslop policy
- [#161983](https://github.com/openclaw/openclaw/pull/161983) refactor(whatsapp): deslop whatsapp
- [#161967](https://github.com/openclaw/openclaw/pull/161967) refactor(imessage): deslop imessage
- [#161957](https://github.com/openclaw/openclaw/pull/161957) feat(control-ui): let plugins dock conversations
- [#162004](https://github.com/openclaw/openclaw/pull/162004) perf(ui): write chat snapshots with one serialization pass
- [#161884](https://github.com/openclaw/openclaw/pull/161884) improve(memory): keep cache pruning off the main thread
- [#161886](https://github.com/openclaw/openclaw/pull/161886) refactor(test): remove unused pruning fixture lifecycle
- [#161998](https://github.com/openclaw/openclaw/pull/161998) fix(test): artifact lock tests fail inside another checkout
- [#161974](https://github.com/openclaw/openclaw/pull/161974) test(ai,agents,slack): remove low-value tests (batch d115)
- [#161996](https://github.com/openclaw/openclaw/pull/161996) chore(ui): make incidental chat test videos opt-in
- [#161995](https://github.com/openclaw/openclaw/pull/161995) perf(ui): stop scanning the whole roster for every sidebar row's archive state

#### 🐛 New Issues
- [#161654](https://github.com/openclaw/openclaw/issues/161654) [Bug]: [Bug] WorkerTaskError 'unavailable' (DataCloneError) on Windows when session-history read carries the win32 process.env Proxy — cron/agent jobs fail `bug` `regression` `P1` `impact:message-loss` 💬9
- [#161734](https://github.com/openclaw/openclaw/issues/161734) [Bug]: Doctor archive migration repeats expensive admission checks in two transactions per unchanged archive `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬6
- [#161953](https://github.com/openclaw/openclaw/issues/161953) [Bug]: Windows: sessions.create always fails with "Session creation publication owner is no longer current" on 2026.9.7 (win32 \\?\ SQLite path leaks into the creation-publication guard) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬5
- [#161803](https://github.com/openclaw/openclaw/issues/161803) [CI] Two gateway compact-large shards flake across unrelated PRs: activity recap store assertion and shutdown defaultCompleteModel assertion `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬5
- [#161610](https://github.com/openclaw/openclaw/issues/161610) [Bug]: Codex diagnostic-log warnings replay across later chat turns `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬5
- [#162047](https://github.com/openclaw/openclaw/issues/162047) [Bug]: Windows 2026.9.7 upgrade spends over 35 minutes in Doctor with repeated hardlink namespace validation `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:crash-loop` 💬4
- [#161746](https://github.com/openclaw/openclaw/issues/161746) [Bug]: Gateway stuck in "Existing shared-state database generation changed" retry loop on 2026.9.7 (after upgrading past the plugin-doctor-post-session-state lease bug, #157160) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬4
- [#162054](https://github.com/openclaw/openclaw/issues/162054) [Bug]: hook failure reporter re-enters getRuntimeConfig() with no .catch(), so a persistent config failure exits the Gateway with 78 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#161770](https://github.com/openclaw/openclaw/issues/161770) [Bug]: `doctor --fix` keeps the managed Gateway stopped for ~3 s per retained transcript archive, even when no archive changes `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#161915](https://github.com/openclaw/openclaw/issues/161915) LLM idle watchdog never fires when an OpenAI-compatible stream sends content-free chunks; the turn hangs until the run timeout `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#162217](https://github.com/openclaw/openclaw/issues/162217) Codex harness: message(final: false) progress send drops the final answer in automatic source-reply delivery `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#161828](https://github.com/openclaw/openclaw/issues/161828) [Bug]: Windows chat.send/heartbeat turns still fail with DataCloneError via nested input.request.env Proxy (session-store-target path) — beyond the top-level readExactEntries fix in #161654 `impact:message-loss` `P0` `impact:ux-release-blocker` 💬3
- [#162031](https://github.com/openclaw/openclaw/issues/162031) [Bug]: 2026.9.7 gateway crash-loops with 'Unhandled promise rejection: undefined' during runtime tool assembly (repro: doctor --only core/doctor/runtime-tool-schemas, all plugins disabled) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` `impact:crash-loop` 💬3
- [#161728](https://github.com/openclaw/openclaw/issues/161728) Codex legacy native-task migration remains pending after connection identity changes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#161888](https://github.com/openclaw/openclaw/issues/161888) [Bug]: doctor --fix stops at "agent database schema migration pending; verifying integrity first" on 2026.9.7 (from 2026.9.5); Ctrl+C and SIGTERM ignored `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#162135](https://github.com/openclaw/openclaw/issues/162135) [Bug]: spawn broker output handoff overrides an explicit stdout.pause() `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#162119](https://github.com/openclaw/openclaw/issues/162119) Codex intermittently returns 403 owner-verification error after an in-place model switch `P1` `impact:security` `impact:message-loss` `impact:auth-provider` 💬3
- [#161829](https://github.com/openclaw/openclaw/issues/161829) [Bug]: WhatsApp: message silently lost when first received as CIPHERTEXT placeholder - durable ingress completes the empty stub, placeholder resend with the same key is dropped as duplicate `bug` `no-stale` `bug:behavior` `P1` 💬3
- [#161992](https://github.com/openclaw/openclaw/issues/161992) [Bug]: executeProviderOperationWithRetry always passes apiKeyIndex: 0 to shouldRetry, silently breaking key-rotation callbacks `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#161929](https://github.com/openclaw/openclaw/issues/161929) Proxyline local HTTP probe crashes with "defaultProtocol" when an external proxy is configured (breaks status/doctor/update) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#161961](https://github.com/openclaw/openclaw/issues/161961) Plugin hooks: expose the source message to tool hooks, and the resolving actor in approval decisions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#161914](https://github.com/openclaw/openclaw/issues/161914) TTS docs list ElevenLabs `model` but the provider only reads `modelId`, so `model` is silently ignored `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#161893](https://github.com/openclaw/openclaw/issues/161893) [Feature]: Skip the per-turn persisted context-engine quarantine clear when nothing is quarantined `enhancement` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#161836](https://github.com/openclaw/openclaw/issues/161836) [Bug]: Staged inbound images lose their Control UI history preview `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬3
- [#161823](https://github.com/openclaw/openclaw/issues/161823) [Bug]: memory status stays dirty for system-only cron-base sessions excluded by the indexer (2026.9.6) `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#161729](https://github.com/openclaw/openclaw/issues/161729) [Bug]: openai realtime transcription tests open a real api.openai.com socket and fail after #161352 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#161550](https://github.com/openclaw/openclaw/issues/161550) CI timing refresh aborts on checks-node-compat-node24 (no shard descriptor) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#162238](https://github.com/openclaw/openclaw/issues/162238) HEARTBEAT_OK silence convention in group chats produces visible "did not produce a visible reply" fallback spam `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#162267](https://github.com/openclaw/openclaw/issues/162267) Terminal sub-agent runs with suspended delivery keep ancestors counted as active for 7 days (maxChildrenPerAgent slot leak) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161795](https://github.com/openclaw/openclaw/issues/161795) [Bug]: Empty legacy Telegram bindings block 2026.9.6 -> 2026.9.7 activation and leave Gateway stopped `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#162205](https://github.com/openclaw/openclaw/issues/162205) [Bug]: Thinking Off (the default) still runs full reasoning on Ollama Cloud glm-5.3 and returns it as answer content `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#162058](https://github.com/openclaw/openclaw/issues/162058) Explicitly requested non-delivering channel is dropped silently, and the recipient is carried into the fallback channel `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#162027](https://github.com/openclaw/openclaw/issues/162027) Windows 2026.9.6 → 2026.9.7: managed update exits 13 during validation (unsettled top-level await), even with Gateway stopped `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#162201](https://github.com/openclaw/openclaw/issues/162201) [Bug]: [2026.9.7][Windows] DataCloneError and session creation failure after upgrade from 2026.9.3 `bug` `regression` `impact:session-state` `impact:message-loss` 💬2
- [#162130](https://github.com/openclaw/openclaw/issues/162130) [Bug]: 9.6 to 9.7 Windows update rolls back at Doctor; numeric/bigint lease-directory identities disagree `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#162193](https://github.com/openclaw/openclaw/issues/162193) [Bug]: doctor --fix truncates existing shared-state SQLite DB and then aborts with Existing shared-state database generation changed `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#162189](https://github.com/openclaw/openclaw/issues/162189) [Bug]: Discord accounts still wedge in READY-wait loop after DNS outage on 2026.9.4 (regression/incomplete fix of #125813) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162113](https://github.com/openclaw/openclaw/issues/162113) Red main: server.cron.test.ts 'returns already-running without starting background work' times out in changed-lane PR CI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬2
- [#162114](https://github.com/openclaw/openclaw/issues/162114) Red main: server-runtime-subscriptions.shutdown.test.ts 'cancels auxiliary model work before inherited connection drain' fails in changed-lane PR CI 💬2
- [#162136](https://github.com/openclaw/openclaw/issues/162136) [CI] gateway startup-health shard is killed by its 60s no-output deadline during a cold Vitest worker build (exit 143, no assertion) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#162074](https://github.com/openclaw/openclaw/issues/162074) [Bug]: OpenClaw 2026.7.35 (LTS) - a message typed during a running turn stays pinned as 'Queued (1)' while the gateway queue depth is 0; only a reload delivers it `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#162083](https://github.com/openclaw/openclaw/issues/162083) [Bug]: doctor's plugin session repair loses its own agent-database-maintenance lease (plugin-doctor-post-session-state step-refused) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:session-state` 💬2
- [#161869](https://github.com/openclaw/openclaw/issues/161869) doctor --fix: heap OOM in the runtime tool schema check on a 739-agent state (a plugin registry and config snapshot retained per agent workspace) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162099](https://github.com/openclaw/openclaw/issues/162099) [CI] src/infra/sqlite-snapshot-staging-owner.test.ts flakes on compact-large shards across unrelated PRs `P2` `clawsweeper:current-main-repro` `issue-rating: 🦀 challenger crab` `impact:other` 💬2
- [#161921](https://github.com/openclaw/openclaw/issues/161921) [Bug]: after state-migrated-no-rollback, doctor --fix and plugins update each require the other (plugins stuck on previous release) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬2
- [#161865](https://github.com/openclaw/openclaw/issues/161865) [Bug]: pnpm self-update launches SQLite worker from removed old generation after stopping Gateway `clawsweeper:needs-live-repro` `impact:crash-loop` `P0` `issue-rating: 🐚 platinum hermit` 💬2
- [#161949](https://github.com/openclaw/openclaw/issues/161949) [Bug]: 2026.9.7 managed update rolls back — candidate Doctor authority-check-failed: state "undergoing offline maintenance" (repair-requires-config-change) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬2
- [#162075](https://github.com/openclaw/openclaw/issues/162075) [Bug]: macOS hostname drift restart refusal omits supported safe RPC recovery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162039](https://github.com/openclaw/openclaw/issues/162039) [Bug]: Title: Voice bridge confirmation relay broken - spoken approvals never reach agent `bug` `regression` `P1` `impact:message-loss` 💬2
- [#161593](https://github.com/openclaw/openclaw/issues/161593) update.run reports success but spawns helper inside gateway process tree, making update impossible `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#161977](https://github.com/openclaw/openclaw/issues/161977) doctor/update status report standard systemd directives in drop-ins as "unrecognized setting", and the unit-PATH check contradicts itself `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#161892](https://github.com/openclaw/openclaw/issues/161892) [Feature]: Reuse the previous normalization when merging streamed reasoning progress deltas `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬2
- [#161930](https://github.com/openclaw/openclaw/issues/161930) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#161866](https://github.com/openclaw/openclaw/issues/161866) [Bug]: updater inherits TTY stdin but captures output, causing pnpm 12.1.0 terminal error `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161863](https://github.com/openclaw/openclaw/issues/161863) [Bug]: the self-update's completion notice is silently dropped — "update run notice append failed: Transcript idempotency key \"update-run-finished:<uuid>\" conflicts with the admitted message" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161816](https://github.com/openclaw/openclaw/issues/161816) Embedded run wedged after successful preflight compaction: run registry drops while owner promise stays pending (compaction death loop) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#161757](https://github.com/openclaw/openclaw/issues/161757) Update failure: runtime-verification-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#161760](https://github.com/openclaw/openclaw/issues/161760) [CI] gateway-server-chat: verboseLevel test times out on a 1s agent.wait budget (compact-large-40) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#161769](https://github.com/openclaw/openclaw/issues/161769) [Bug]: subagent completion announce into a restart-recovered requester fails SESSION_WORK_START_CHANGED until 30-min expiry (recovery-owner wait covers subagent_settle only) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#161732](https://github.com/openclaw/openclaw/issues/161732) Observability regression: removing `/tasks` leaves chat channels (Discord) with no way to see a session's background work `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161705](https://github.com/openclaw/openclaw/issues/161705) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#161697](https://github.com/openclaw/openclaw/issues/161697) Internal context (openclaw:ctx) repeatedly leaks full conversation history into user message channel `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬2
- [#161646](https://github.com/openclaw/openclaw/issues/161646) [Bug]: [Bug] cron-setup DataCloneError - agent-turn jobs fail in ~30-50 ms without executing (regression, spreading to previously healthy jobs ) `bug` `regression` `P1` `impact:message-loss` 💬2
- [#161590](https://github.com/openclaw/openclaw/issues/161590) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#161561](https://github.com/openclaw/openclaw/issues/161561) [Bug]: macOS app activation repeatedly steals focus to Chrome and prompts for remote debugging consent `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#161506](https://github.com/openclaw/openclaw/issues/161506) Session lane task stuck active (activeAhead=1 activeNow=0) starves queued turns; scheduled runs burn their wall clock with zero dispatch `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#161522](https://github.com/openclaw/openclaw/issues/161522) [Bug]: Bun WebSocket proxy path imports undeclared proxy-from-env dependency `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#161507](https://github.com/openclaw/openclaw/issues/161507) Update failure: not-git-install (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#161505](https://github.com/openclaw/openclaw/issues/161505) [Feature]: hold a media-only inbound message briefly so the text that follows joins the same turn (Element Web sends the attachment before the composer text) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#162259](https://github.com/openclaw/openclaw/issues/162259) [Bug]: 2026.9.7 Docker activation conflicts with OPENCLAW_CONFIG_READONLY `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#162243](https://github.com/openclaw/openclaw/issues/162243) [Bug]: `bug` `bug:behavior` `impact:message-loss` `P0` 💬1
- [#162252](https://github.com/openclaw/openclaw/issues/162252) [Bug]: Control UI images 401 in other tabs because device token rotates when auth path flips between shared token and Tailscale identity `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#162240](https://github.com/openclaw/openclaw/issues/162240) Android onboarding lacks a proxy sign-in path for a multiplayer Gateway using Caddy Basic Auth `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#162241](https://github.com/openclaw/openclaw/issues/162241) Restart silently deletes agent-owned one-shot cron job; ask_user-pending turn evicted by per-chat 300s cap fails with no diagnostics `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-info` 💬1
- [#162242](https://github.com/openclaw/openclaw/issues/162242) WebChat turns fail with WorkerTaskError: DataCloneError in worker task input (2026.9.7) `impact:message-loss` `P0` `impact:ux-release-blocker` 💬1
- [#162236](https://github.com/openclaw/openclaw/issues/162236) [Bug]: doctor --fix reports a failed gateway restoration after repairing state - its readiness wait is fixed and shorter than the host startup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#162218](https://github.com/openclaw/openclaw/issues/162218) I built a deterministic safety gate for OpenClaw agents, one file, zero deps, and it blocks destructive commands before they run `P2` `impact:security` 💬1
- [#162230](https://github.com/openclaw/openclaw/issues/162230) [Bug]: model-catalog worker rebuild loop — exact-match registry reuse discards incrementally-loaded plugins on scope growth `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:crash-loop` 💬1
- [#162228](https://github.com/openclaw/openclaw/issues/162228) [Bug]: an unreachable remote MCP server makes Doctor lint fail and blocks Doctor-gated Gateway startup `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#162223](https://github.com/openclaw/openclaw/issues/162223) [Bug]: progressCard.get rejects readable shared sessions for suggest-only viewers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#162221](https://github.com/openclaw/openclaw/issues/162221) Update failure: unexpected-error (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#162216](https://github.com/openclaw/openclaw/issues/162216) [Bug]: Auth-mode change may remove the documented local password fallback `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#162211](https://github.com/openclaw/openclaw/issues/162211) Startup blocks the Gateway event loop for 40–200s; health monitor misreads the stall as a disconnect and escalates into a restart loop `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#162209](https://github.com/openclaw/openclaw/issues/162209) Update failure: candidate-state-snapshot (2026.9.6) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#162196](https://github.com/openclaw/openclaw/issues/162196) Scheduled (cron) agent runs fail all exec calls: "Secret egress proxy requires an admitted agent run instance" `P1` `impact:security` `impact:other` 💬1
- [#162199](https://github.com/openclaw/openclaw/issues/162199) [Bug]: CLI-only modules are loaded eagerly (before the version fast path and for library imports); import-time side effects and stale deprecation deadline `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#162198](https://github.com/openclaw/openclaw/issues/162198) cron announce: outbound delivery failure leaves the run `status: ok` — no retry, no alert, scheduled message silently lost `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162194](https://github.com/openclaw/openclaw/issues/162194) Gateway shutdown hangs on plugin-runtime children (PluginRuntimeCloseRetainedError) — blocks Mac app updates `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#162182](https://github.com/openclaw/openclaw/issues/162182) [Bug]: invalid config crashes the Gateway with exit 78 on any hook delivery — failure reporter re-reads the config that just failed `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:crash-loop` 💬1
- [#162181](https://github.com/openclaw/openclaw/issues/162181) health: legacy outbound delivery records use completionRetention "permanent", so the dead-letter warning can never clear (no supported prune path) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162172](https://github.com/openclaw/openclaw/issues/162172) Separate scheduled heartbeat failures from useful updates using automation alert policy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162170](https://github.com/openclaw/openclaw/issues/162170) 9.x: startup maintenance always fails on kernels without statx — birthtimeNs is a ctime fallback, so the shared-state "generation" fence can never hold `impact:crash-loop` `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#162164](https://github.com/openclaw/openclaw/issues/162164) [Feature]: Opt-in personal identity in iOS/macOS while preserving Shared owner `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162159](https://github.com/openclaw/openclaw/issues/162159) GitHub Copilot: claude-sonnet-5.5 missing from model catalog despite GA on Copilot (2026.9.7) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#162147](https://github.com/openclaw/openclaw/issues/162147) [Bug]: Restored Cloudflare Gateway exits before listen; canonical-validation lock drops the SQLite code `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#162129](https://github.com/openclaw/openclaw/issues/162129) [Bug]: Capped update report drops Recovery and Verification lines when warnings fill the 1500-character budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#162131](https://github.com/openclaw/openclaw/issues/162131) 2026.9.7 update: candidate Gateway startup fails; real error hidden behind first canary progress line (likely inherited owner lease) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#162125](https://github.com/openclaw/openclaw/issues/162125) [CI] subagent orphan-recovery restart-integration flakes on compact-large shards: retry timer not yet scheduled `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#162115](https://github.com/openclaw/openclaw/issues/162115) plugins reload/install run from inside an agent turn waits on that turn's own prepared-runtime lease (60s timeout, misleading 'retained work' + --wait advice) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162106](https://github.com/openclaw/openclaw/issues/162106) [Feature]: Verify installed plugin payloads against pinned registry integrity at load time `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#162087](https://github.com/openclaw/openclaw/issues/162087) [Bug]: 9.7 — scheduled announce fails "Scheduled account X is unavailable" for pre-9.7 account-mode jobs owned by DM sessions (missing ownerOrigin + direct-key parse gap) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#162085](https://github.com/openclaw/openclaw/issues/162085) State DB read admission stays sealed forever after a failed resource drainage (STATE_DATABASE_READ_ADMISSION_INVALIDATED until restart) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#162077](https://github.com/openclaw/openclaw/issues/162077) [Bug]: System-agent inference probe ignores model.fallbacks — dead primary yields UNAVAILABLE despite healthy fallbacks `P1` `impact:auth-provider` 💬1
- [#162011](https://github.com/openclaw/openclaw/issues/162011) iOS 2026.9.60: Share Extension sends no Gateway credentials while main app is connected `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬1
- [#162072](https://github.com/openclaw/openclaw/issues/162072) [Bug]: ACP runtime sessions show no live streaming in webchat; "Terminal write owner changed before commit" logged on every ACP turn completion `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#162034](https://github.com/openclaw/openclaw/issues/162034) Design durable source authority for delayed cron completion delivery `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#162063](https://github.com/openclaw/openclaw/issues/162063) openclaw update aborts at "global install swap": "Package rollback verification failed: retained package tree changed" (npm global install, Linux) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#162062](https://github.com/openclaw/openclaw/issues/162062) [Feature]: Native nested sidebar navigation for feature plugins `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162059](https://github.com/openclaw/openclaw/issues/162059) Subagent completion delivery can be silently swallowed, and channel ingress dead-letters sometimes retain no payload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162055](https://github.com/openclaw/openclaw/issues/162055) [Bug]: 2026.9.7 update/repair stalls in Doctor with high CPU; state migrated, Gateway down `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#162023](https://github.com/openclaw/openclaw/issues/162023) [Bug]: Compaction marks completed failed checks as pending with Nemotron 3.5 Super `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#162046](https://github.com/openclaw/openclaw/issues/162046) Gateway stop-drain aborts an in-flight cron run without waiting for its settlement — the run's own output/report is lost, not just marked error `P2` `impact:data-loss` 💬1
- [#162044](https://github.com/openclaw/openclaw/issues/162044) Update failure: doctor-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#162041](https://github.com/openclaw/openclaw/issues/162041) blocked_tool_call wedges the session queue: recovery=none, new messages pile up, only an app restart unblocks `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#161951](https://github.com/openclaw/openclaw/issues/161951) [Bug]: Plugin schemas reject percent-encoded JSON Pointer separators `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#162029](https://github.com/openclaw/openclaw/issues/162029) Update failure: runtime-verification-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#162026](https://github.com/openclaw/openclaw/issues/162026) [Bug]: Selected tab sharing hangs in Dia when tab groups do not settle `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#162017](https://github.com/openclaw/openclaw/issues/162017) 2026.9.7 update: candidate state snapshot fails with "Cannot use 'import.meta' outside a module" (regression of #155371 class) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#162008](https://github.com/openclaw/openclaw/issues/162008) [Feature]: Show the agent's stated purpose (exec title) on exec approval prompts, on all surfaces `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162005](https://github.com/openclaw/openclaw/issues/162005) Update failure: unexpected-error (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#162001](https://github.com/openclaw/openclaw/issues/162001) Windows: injected runtime-facts context block breaks tool calling in local models `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#161999](https://github.com/openclaw/openclaw/issues/161999) [Feature]: Support structured input in Lobster workflows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#161991](https://github.com/openclaw/openclaw/issues/161991) [Bug]: Prompts delivered through Claude Code's native cross-session socket (not OpenClaw's own session-send path) can run outside an admitted OpenClaw turn, so every subsequent tool call is denied `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#161987](https://github.com/openclaw/openclaw/issues/161987) Gateway wedges: alive and LISTENing but never accepts; post-freeze channel restart defers forever on busy installs `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#161981](https://github.com/openclaw/openclaw/issues/161981) Rate-limit Retry-After cap (#148580) never rotates auth profiles when no model fallback is configured, so the run sleeps hours on an exhausted profile `P1` `clawsweeper:source-repro` `impact:message-loss` `impact:auth-provider` 💬1
- [#161978](https://github.com/openclaw/openclaw/issues/161978) doctor --fix "update gateway service config" writes gateway.auth.token into openclaw.json in PLAINTEXT, duplicating the secret-store entry `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#161979](https://github.com/openclaw/openclaw/issues/161979) 2026.9.7: session-repair overflows the stack (RangeError) on large-but-healthy agent DBs during update activation `clawsweeper:needs-live-repro` `impact:session-state` `impact:crash-loop` `P0` 💬1
- [#161976](https://github.com/openclaw/openclaw/issues/161976) [Bug]: WhatsApp DM replies repeatedly fail at durable registry handoff after restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#161970](https://github.com/openclaw/openclaw/issues/161970) Bug: concurrent Telegram inbounds on same sessionKey crash active turn (tool authority snapshot race) `P1` `impact:message-loss` 💬1
- [#161965](https://github.com/openclaw/openclaw/issues/161965) Gateway RSS grows in retained steps on Skill Workshop collection reviews, memory-core dreaming and the hosted model-catalog refresh (2026.9.5) — idle growth follows #54155 `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#161963](https://github.com/openclaw/openclaw/issues/161963) [Docs Bug]: Cron docs omit suppression of text ending in NO_REPLY `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#161650](https://github.com/openclaw/openclaw/issues/161650) [Feature]: Float task progress above the conversation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#161948](https://github.com/openclaw/openclaw/issues/161948) [Bug]: restart recovery loses claude-cli provider identity and rejects CLI alias as unavailable harness `P1` `impact:session-state` `impact:auth-provider` 💬1
- [#161942](https://github.com/openclaw/openclaw/issues/161942) [Bug]: WhatsApp app-silent watchdog reconnect (499) drops in-flight replies with PlatformMessageNotDispatchedError `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#161938](https://github.com/openclaw/openclaw/issues/161938) [Bug]: Subagents fail with "Session … was not found" when the requester's operator role has sessions.others: "none" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#161934](https://github.com/openclaw/openclaw/issues/161934) Update failure: validating (2026.9.6) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬1
- [#161932](https://github.com/openclaw/openclaw/issues/161932) Update failure: runtime-verification-failed (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161882](https://github.com/openclaw/openclaw/issues/161882) Update restart outcome fixture still stubs the synchronous ledger reader `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#161922](https://github.com/openclaw/openclaw/issues/161922) [Bug]: Retained package-backup symlink blocks npm updates during runtime inventory `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬1
- [#161928](https://github.com/openclaw/openclaw/issues/161928) [Bug]: claude-cli backend: explicit cron `toolsAllow` silently disables operator PreToolUse hooks (`disableAllHooks: true`) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161924](https://github.com/openclaw/openclaw/issues/161924) [Bug]: Update recovery says healthy serving Gateway did not pass verification `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#161912](https://github.com/openclaw/openclaw/issues/161912) RFC: keyless Copilot managed web-search provider (tools.web.search.provider: copilot) `P3` `impact:auth-provider` 💬1
- [#161898](https://github.com/openclaw/openclaw/issues/161898) Control UI unit tests fail on non-US-English host locales (currency and date formatting) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#161906](https://github.com/openclaw/openclaw/issues/161906) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161902](https://github.com/openclaw/openclaw/issues/161902) Cron restricted-run allowlist includes `remove`, but self-removing an in-flight job silently suppresses the run's own result delivery `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#161901](https://github.com/openclaw/openclaw/issues/161901) Make the Deep diversity-gate boundary observable: report recurrence without diversity `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#161894](https://github.com/openclaw/openclaw/issues/161894) Telegram: agent presentation callback buttons always get 'This action is no longer available' — opaque registry missing, docs promise text fallback `P1` `impact:message-loss` 💬1
- [#161891](https://github.com/openclaw/openclaw/issues/161891) [Bug]: 2026.9.7 debug log is ~98% "running event-loop-health" lines (~47 per second) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#161887](https://github.com/openclaw/openclaw/issues/161887) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161885](https://github.com/openclaw/openclaw/issues/161885) [Bug]: Talk realtime consults ignore per-model agentRuntime (claude-cli) and fallbacks, fail with 'No API key found for provider anthropic' `P1` `clawsweeper:needs-live-repro` `impact:message-loss` `impact:auth-provider` 💬1
- [#161883](https://github.com/openclaw/openclaw/issues/161883) subagent-registry: "subagent completion owner changed before settlement" retries every 60 s indefinitely; rejection cannot be persisted `P1` `impact:session-state` 💬1
- [#161875](https://github.com/openclaw/openclaw/issues/161875) memory-core: stale workspace lock is unreclaimable, permanently deadlocking memory search and reindexing `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#161872](https://github.com/openclaw/openclaw/issues/161872) Windows: WorkerTaskError DataCloneError #<Object> could not be cloned on every chat.send `impact:message-loss` `P0` `impact:ux-release-blocker` 💬1
- [#161873](https://github.com/openclaw/openclaw/issues/161873) WhatsApp inbound drops contextInfo.isForwarded/forwardingScore: forwarded messages are attributed to the forwarder (re-file of #10145/#69374) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161726](https://github.com/openclaw/openclaw/issues/161726) [Bug]: Codex app-server runtime never receives the session's sessionUrl (Runtime line missing from developer instructions) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#161867](https://github.com/openclaw/openclaw/issues/161867) [Bug]: update progress polling repeatedly creates synchronous full SQLite snapshots and blocks preparation `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#161856](https://github.com/openclaw/openclaw/issues/161856) Context precheck estimator overestimates prompt tokens (~2.3–2.6×), causing premature "prompt too large" refusals `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#161858](https://github.com/openclaw/openclaw/issues/161858) SessionTranscriptWriterClaimReboundError loses terminal transcript when a session dies from context overflow `P2` `impact:session-state` 💬1
- [#161859](https://github.com/openclaw/openclaw/issues/161859) truncate_tool_results_only route engages but truncates nothing (truncatedCount=0, "no oversized or aggregate...") 💬1
- [#161857](https://github.com/openclaw/openclaw/issues/161857) Context-overflow recovery limit (3) is session-wide and counts SUCCESSFUL compactions — session dies after 3 successful recoveries `P2` `impact:session-state` 💬1
- [#161852](https://github.com/openclaw/openclaw/issues/161852) [Bug]: Checkout commit discovery reads oversized Git HEAD files in full `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#161850](https://github.com/openclaw/openclaw/issues/161850) [Bug]: Slack message read is not scoped to the calling agent's bindings; an agent can read another agent's bound channel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161841](https://github.com/openclaw/openclaw/issues/161841) agents delete never erases data: moves workspace, auth profiles and transcripts to ~/.Trash with no purge option `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#161839](https://github.com/openclaw/openclaw/issues/161839) Bug: plugin source capture can consume the entire volume during plugin load churn (ENOSPC amplification loop) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#161833](https://github.com/openclaw/openclaw/issues/161833) 2026.9.7: managed npm plugin (codex) fails to load when the npm root is reached through a symlink: "Retained native directory does not resolve the selected OpenClaw host" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#161810](https://github.com/openclaw/openclaw/issues/161810) [Bug]: Cron fallback candidate receives the primary provider's auth pin ("is not configured for openai") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#161809](https://github.com/openclaw/openclaw/issues/161809) Slack channel hot reload never completes after channels.slack.streaming change; shutdown then waits full drain budget on retained Slack consumer (2026.9.6) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#161808](https://github.com/openclaw/openclaw/issues/161808) [Bug]: Stuck `dispatching` settle-wake re-injects completed subagent results every turn and no operator command can clear it (2026.9.6) `P1` `impact:session-state` `impact:ux-friction` 💬1
- [#161800](https://github.com/openclaw/openclaw/issues/161800) [Bug]: iOS embedded Dashboard creates a new browser device identity on every page load, looping pairing requests `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` `impact:security` 💬1
- [#161651](https://github.com/openclaw/openclaw/issues/161651) [Feature]: Compact expandable inter-session activity in Control UI `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#161798](https://github.com/openclaw/openclaw/issues/161798) test-audit: make completeness claims and quality gates fail closed `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#161794](https://github.com/openclaw/openclaw/issues/161794) Skill Workshop: add a supported way to deactivate or remove applied skills `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161781](https://github.com/openclaw/openclaw/issues/161781) [Feature]: Signal produces no quoted_bot implicit-mention fact, so quoting the bot in a group is silently ignored `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161782](https://github.com/openclaw/openclaw/issues/161782) [Feature]: memory-core dreaming admission cannot select sessions by session key `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#161775](https://github.com/openclaw/openclaw/issues/161775) [Feature]: Skill Workshop current-instructions view and clearer comparison labels `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161776](https://github.com/openclaw/openclaw/issues/161776) Group/topic sessions: generated replies silently dropped across auth-boundary supersession, and sessions can stall forever on a blocked tool call `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161761](https://github.com/openclaw/openclaw/issues/161761) Update failure: reconcile:abandoned (2026.9.6) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬1
- [#161681](https://github.com/openclaw/openclaw/issues/161681) iOS release qualification should use the published stable Gateway `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#161735](https://github.com/openclaw/openclaw/issues/161735) [Bug]: Isolated scheduled (cron) job with a bound delivery account fails instantly — "Scheduled account … is unavailable" and the run never starts `P1` `impact:security` `impact:message-loss` 💬1
- [#161739](https://github.com/openclaw/openclaw/issues/161739) [Bug]: On macOS, plugin source captures write full copies instead of APFS clones (COPYFILE_FICLONE does not clone on darwin) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#161738](https://github.com/openclaw/openclaw/issues/161738) [Bug]: Model-catalog worker failures are not logged or counted, so repeated worker replacement is invisible `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#161719](https://github.com/openclaw/openclaw/issues/161719) [Bug]: Gateway restart tombstones a whole main session when its interrupted turn came from another session (sessions_send / A2A) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#161720](https://github.com/openclaw/openclaw/issues/161720) Codex runtime artifact check rejects the Codex app's standalone install (in-package symlink), so the setup chat never starts `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#161721](https://github.com/openclaw/openclaw/issues/161721) Update failure: reconcile:abandoned (2026.9.7) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬1
- [#161717](https://github.com/openclaw/openclaw/issues/161717) Update failure: runtime-verification-failed (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161707](https://github.com/openclaw/openclaw/issues/161707) [Bug]: Codex: first-turn AGENTS.md snapshot reused by every new native thread of the session; edits never reach it, systemPromptReport shows the current file `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161698](https://github.com/openclaw/openclaw/issues/161698) [Bug]: Unattended-run preamble promises "the scheduler owns retries and failure alerts"; a failure reported as text is recorded ok, alerts nobody, and with delivery off is read by nobody `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161699](https://github.com/openclaw/openclaw/issues/161699) [Bug]: 2026.8.33 gateway/heartbeat run persistence fails with 'FOREIGN KEY constraint failed' (intermittent, OAuth/Codex) `P2` `impact:session-state` 💬1
- [#161673](https://github.com/openclaw/openclaw/issues/161673) [Feature]: DataCloneError occurs during the execution of a scheduled task, preventing the creation of an isolated session `enhancement` `P1` `impact:session-state` 💬1
- [#161660](https://github.com/openclaw/openclaw/issues/161660) test: subagent-requester-owner e2e fails deterministically on main (hidden from hourly CI) `bug` `P1` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#161652](https://github.com/openclaw/openclaw/issues/161652) [Bug]: [Bug] cron-setup `DataCloneError` — agent-turn jobs fail in ~30–50 ms without executing (regression, spreading to previously healthy jobs) `bug` `regression` `P1` `impact:message-loss` 💬1
- [#161626](https://github.com/openclaw/openclaw/issues/161626) [Bug]: iOS chat composer cannot paste an image from the clipboard `bug` `bug:behavior` `P2` `clawsweeper:source-repro` 💬1
- [#161622](https://github.com/openclaw/openclaw/issues/161622) Update failure: unexpected-error (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#161617](https://github.com/openclaw/openclaw/issues/161617) Mobile pairing setup codes omit the configured Control UI base path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#161613](https://github.com/openclaw/openclaw/issues/161613) [Feature]: browser-automation skill: guidance for forms inside open shadow DOM (LWC/web components) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#161601](https://github.com/openclaw/openclaw/issues/161601) Agent tool RPCs fail: 'Gateway client authority closed before dispatching <method>' - persists across restarts and credential rotation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#161584](https://github.com/openclaw/openclaw/issues/161584) Plugin SDK: authorize resolved nested operations at a pre-effect boundary `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#161581](https://github.com/openclaw/openclaw/issues/161581) sessions.create: define durable per-session system-context contract and authority `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#161576](https://github.com/openclaw/openclaw/issues/161576) [Bug]: Native one-shot success is rejected at cleanup; actual-route settlement remains unconfirmed `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#161531](https://github.com/openclaw/openclaw/issues/161531) macOS 13-agent install: Gateway RSS baseline jumped from ~1.1GB flat to oscillating 0.9-6.6GB right after 2026.8.2 -> 2026.9.6 upgrade (15-min sampled timeline inside) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#161527](https://github.com/openclaw/openclaw/issues/161527) [Bug]: OpenRouter requests fail with 401/403 despite a confirmed-valid API key (persists across 2026.9.4 → 2026.9.6) `bug` `bug:behavior` `impact:auth-provider` `P0` 💬1
- [#161528](https://github.com/openclaw/openclaw/issues/161528) feat(telegram): support live drafts (sendMessageDraft / sendRichMessageDraft) for reasoning streaming `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#161654](https://github.com/openclaw/openclaw/issues/161654) [Bug]: [Bug] WorkerTaskError 'unavailable' (DataCloneError) on Windows when session-history read carries the win32 process.env Proxy — cron/agent jobs fail
- [#121729](https://github.com/openclaw/openclaw/issues/121729) [Feature]: Friendly daily spending allowances for agents running in the background
- [#136175](https://github.com/openclaw/openclaw/issues/136175) [Bug]: 2026.8.2 full local memory reindex saturates CPU and blocks diagnostics
- [#134396](https://github.com/openclaw/openclaw/issues/134396) gateway: "OpenClaw does not know the command \"commitments\"" repeats every minute with two parallel strikes
- [#134317](https://github.com/openclaw/openclaw/issues/134317) First model request of every new agent run returns HTTP 401 "Token is invalid." (siliconflow) - recovered only by ~8s auth-profile re-warm; regression since 2026.8.1
- [#161803](https://github.com/openclaw/openclaw/issues/161803) [CI] Two gateway compact-large shards flake across unrelated PRs: activity recap store assertion and shutdown defaultCompleteModel assertion
- [#161415](https://github.com/openclaw/openclaw/issues/161415) [Bug]: Control UI initial-connect E2E inherits the host locale
- [#136471](https://github.com/openclaw/openclaw/issues/136471) Internal runtime context block leaking raw into visible Telegram messages; per-turn session IDs instead of persistent session
- [#135676](https://github.com/openclaw/openclaw/issues/135676) Metadata-only device refresh is serialized as an operator-scope grant
- [#134240](https://github.com/openclaw/openclaw/issues/134240) Internal runtime-context envelope leaks into Telegram channel messages (same class as documented ACP leak)
- [#162054](https://github.com/openclaw/openclaw/issues/162054) [Bug]: hook failure reporter re-enters getRuntimeConfig() with no .catch(), so a persistent config failure exits the Gateway with 78
- [#160353](https://github.com/openclaw/openclaw/issues/160353) [Bug]: IMAP plugin holds every unseen message in memory before processing (no batch limit)
- [#161051](https://github.com/openclaw/openclaw/issues/161051) Subagent spawn rejected by native readiness (`registration_revoked`) after another agent's turn replaced the Codex app-server client
- [#161259](https://github.com/openclaw/openclaw/issues/161259) [Bug]: Control UI chat composer sends the draft on IME conversion-confirm in Safari
- [#141012](https://github.com/openclaw/openclaw/issues/141012) Signal channel: internal runtime-context leak into visible chat regressed (post #135569/#136076 fix), now includes instructive 'do not reply' phrasing
- [#140959](https://github.com/openclaw/openclaw/issues/140959) Operator pastes in webchat are labelled Source: External, indistinguishable from fetched content
- [#140765](https://github.com/openclaw/openclaw/issues/140765) Feature: opt-in trusted Discord administrator role for Discord-first operations
- [#140576](https://github.com/openclaw/openclaw/issues/140576) Control UI: saved agent GitHub identity never updates the agent's credential/profileId
- [#136512](https://github.com/openclaw/openclaw/issues/136512) iOS native Talk Mode: directive line read aloud, duplicate reply bubbles, voice stuck until app relaunch
- [#136431](https://github.com/openclaw/openclaw/issues/136431) [Feature]: per-trigger overall turn timeout (agents.defaults.timeoutSecondsByTrigger) — interactive turns need faster failover than cron/heartbeat
- [#136210](https://github.com/openclaw/openclaw/issues/136210) Browser: intermittent selected-mode target closure during first navigation
- [#136048](https://github.com/openclaw/openclaw/issues/136048) [Feature]: Allow registering non-Git directories as projects
- [#135299](https://github.com/openclaw/openclaw/issues/135299) Upgrade to 2026.8.1 unusable for system-npm installs with external plugins and a non-root gateway user
- [#113270](https://github.com/openclaw/openclaw/issues/113270) [Feature]: Drag-to-resize the Control UI chat composer
- [#160523](https://github.com/openclaw/openclaw/issues/160523) Plugin mistral: data/settings upgrade stays unfinished; openclaw doctor --fix cannot complete it
- [#162217](https://github.com/openclaw/openclaw/issues/162217) Codex harness: message(final: false) progress send drops the final answer in automatic source-reply delivery
- [#161828](https://github.com/openclaw/openclaw/issues/161828) [Bug]: Windows chat.send/heartbeat turns still fail with DataCloneError via nested input.request.env Proxy (session-store-target path) — beyond the top-level readExactEntries fix in #161654
- [#79854](https://github.com/openclaw/openclaw/issues/79854) sessions.get returns wrapper-only transcript while chat.history returns full conversation; sessionFile field is misleading
- [#162135](https://github.com/openclaw/openclaw/issues/162135) [Bug]: spawn broker output handoff overrides an explicit stdout.pause()
- [#161992](https://github.com/openclaw/openclaw/issues/161992) [Bug]: executeProviderOperationWithRetry always passes apiKeyIndex: 0 to shouldRetry, silently breaking key-rotation callbacks
- [#161929](https://github.com/openclaw/openclaw/issues/161929) Proxyline local HTTP probe crashes with "defaultProtocol" when an external proxy is configured (breaks status/doctor/update)
- [#161893](https://github.com/openclaw/openclaw/issues/161893) [Feature]: Skip the per-turn persisted context-engine quarantine clear when nothing is quarantined
- [#139471](https://github.com/openclaw/openclaw/issues/139471) [Feature]: Recover and resume structured-input waits in managed Lobster flows
- [#161836](https://github.com/openclaw/openclaw/issues/161836) [Bug]: Staged inbound images lose their Control UI history preview
- [#161823](https://github.com/openclaw/openclaw/issues/161823) [Bug]: memory status stays dirty for system-only cron-base sessions excluded by the indexer (2026.9.6)
- [#161729](https://github.com/openclaw/openclaw/issues/161729) [Bug]: openai realtime transcription tests open a real api.openai.com socket and fail after #161352
- [#161017](https://github.com/openclaw/openclaw/issues/161017) [Bug]: `/new` reset drops the sidebar `group`/`pinned` metadata — session falls out of its custom sidebar group
- [#161268](https://github.com/openclaw/openclaw/issues/161268) [Bug]: Dreaming contamination predicate over-matches Conversation Summary prefix
- [#161550](https://github.com/openclaw/openclaw/issues/161550) CI timing refresh aborts on checks-node-compat-node24 (no shard descriptor)
- [#161431](https://github.com/openclaw/openclaw/issues/161431) Bug: TTS summarization drops agent ownership in multi-agent setups, truncating voice replies
- [#161310](https://github.com/openclaw/openclaw/issues/161310) [Bug]: canceled replies remain pending during thinking-catalog waits
- [#157499](https://github.com/openclaw/openclaw/issues/157499) [Bug]: memory-core dreaming cron job fails with DataCloneError: #<Object> could not be cloned
- [#161278](https://github.com/openclaw/openclaw/issues/161278) [Bug]: diagnostics-otel: cron turns split into two root traces — empty message.processed plus separate harness.run tree
- [#140421](https://github.com/openclaw/openclaw/issues/140421) feat(hooks): allow SecretRef on hooks.token (make doctor --fix rotation ref-aware instead of excluding the field)
- [#136489](https://github.com/openclaw/openclaw/issues/136489) [Bug]: Doctor reportedly repeats model configuration warnings many times in one invocation
- [#136029](https://github.com/openclaw/openclaw/issues/136029) ClickClack: deliver inbound message attachments to agents
- [#135416](https://github.com/openclaw/openclaw/issues/135416) Extensions cannot consume structured CLI-backend quota/subscription failures before auth-profile settlement
- [#135236](https://github.com/openclaw/openclaw/issues/135236) [Feature]: Add opt-in native WhatsApp contact-card sending to the message tool
- [#132742](https://github.com/openclaw/openclaw/issues/132742) [Feature]: Add an openclaw environments CLI for worker placement facts (CLI parity with Control UI)
- [#130176](https://github.com/openclaw/openclaw/issues/130176) [Feature]: Add a non-destructive clear-view command to the TUI
- [#128806](https://github.com/openclaw/openclaw/issues/128806) Feature: start the one-shot OTLP exporter for openclaw agent exec runs
- [#128388](https://github.com/openclaw/openclaw/issues/128388) Proposal: resource-aware admission for self-hosted model providers
- [#128120](https://github.com/openclaw/openclaw/issues/128120) [Windows] Align terminal panel interactions with Windows terminal conventions (right-click paste)
- [#113458](https://github.com/openclaw/openclaw/issues/113458) Control UI display bugs after 2026.7.2-beta.3 + font size customization request
- [#161467](https://github.com/openclaw/openclaw/issues/161467) [Bug]: Gmail watcher stays down after transient EADDRINUSE during Gateway restart
- [#160690](https://github.com/openclaw/openclaw/issues/160690) Update: bound the retained-runtime exit only after SQLite broker settlement
- [#161795](https://github.com/openclaw/openclaw/issues/161795) [Bug]: Empty legacy Telegram bindings block 2026.9.6 -> 2026.9.7 activation and leave Gateway stopped
- [#161361](https://github.com/openclaw/openclaw/issues/161361) Session menu: pressing Enter on "Assign to…" with the pointer resting on it assigns the session to yourself
- [#162201](https://github.com/openclaw/openclaw/issues/162201) [Bug]: [2026.9.7][Windows] DataCloneError and session creation failure after upgrade from 2026.9.3
- [#160922](https://github.com/openclaw/openclaw/issues/160922) Improve test execution speed without losing regression coverage
- [#158256](https://github.com/openclaw/openclaw/issues/158256) [Bug]: claude-cli: completed/failed tool rows in progress drafts lose their command text (native tools like Bash/Read)
- [#162114](https://github.com/openclaw/openclaw/issues/162114) Red main: server-runtime-subscriptions.shutdown.test.ts 'cancels auxiliary model work before inherited connection drain' fails in changed-lane PR CI
- [#161949](https://github.com/openclaw/openclaw/issues/161949) [Bug]: 2026.9.7 managed update rolls back — candidate Doctor authority-check-failed: state "undergoing offline maintenance" (repair-requires-config-change)
- [#162039](https://github.com/openclaw/openclaw/issues/162039) [Bug]: Title: Voice bridge confirmation relay broken - spoken approvals never reach agent
- [#161441](https://github.com/openclaw/openclaw/issues/161441) Doctor keeps warning for legacy Workshop backup after history-only archive exists
- [#161481](https://github.com/openclaw/openclaw/issues/161481) Session SQLite migration recovery report (session-sqlite-1790727796813-13aba4f8)
- [#161892](https://github.com/openclaw/openclaw/issues/161892) [Feature]: Reuse the previous normalization when merging streamed reasoning progress deltas
- [#161257](https://github.com/openclaw/openclaw/issues/161257) Package rollback verification times out after ~30 s under disk load during the install swap
- [#161760](https://github.com/openclaw/openclaw/issues/161760) [CI] gateway-server-chat: verboseLevel test times out on a 1s agent.wait budget (compact-large-40)
- [#155351](https://github.com/openclaw/openclaw/issues/155351) Quota-exhausted 模型应从 fallback 链中移除，而非冷却后持续探测
- [#161112](https://github.com/openclaw/openclaw/issues/161112) [Bug]: 2026.9.6 isolated cron setup timeout is spent in thinking-catalog hydration (loadNativeModelCatalog has no foreground race)
- [#161487](https://github.com/openclaw/openclaw/issues/161487) Add CI popup controls for PR repair, merge, and archive
- [#161705](https://github.com/openclaw/openclaw/issues/161705) Update failure: plugin-target-unavailable (2026.9.3)
- [#151749](https://github.com/openclaw/openclaw/issues/151749) [Bug]: Automation run-alias placement pins the alias key, so turns addressed by the job's stable session key are refused
- [#161646](https://github.com/openclaw/openclaw/issues/161646) [Bug]: [Bug] cron-setup DataCloneError - agent-turn jobs fail in ~30-50 ms without executing (regression, spreading to previously healthy jobs )
- [#159313](https://github.com/openclaw/openclaw/issues/159313) [Bug]: Bun/macOS plugin capture fails with EBADF for valid /dev/fd copies over 128 KiB
- [#161288](https://github.com/openclaw/openclaw/issues/161288) Plugin "sms": data/settings upgrade stays unfinished; `openclaw doctor --fix` / `update repair` cannot complete it
- [#161507](https://github.com/openclaw/openclaw/issues/161507) Update failure: not-git-install (2026.9.4)
- [#162242](https://github.com/openclaw/openclaw/issues/162242) WebChat turns fail with WorkerTaskError: DataCloneError in worker task input (2026.9.7)
- [#160511](https://github.com/openclaw/openclaw/issues/160511) Docs: source-install Corepack fallback installs an older pnpm than the checkout pin
- [#160256](https://github.com/openclaw/openclaw/issues/160256) docs: macOS VM guide runs npm install before Node is installed
- [#153506](https://github.com/openclaw/openclaw/issues/153506) [Docs]: Telegram troubleshooting references unsupported Node 22 behavior twice
- [#159202](https://github.com/openclaw/openclaw/issues/159202) Docs never explain image replay cost with native-vision models or the tools.media.models[] opt-out
- [#157637](https://github.com/openclaw/openclaw/issues/157637) Docs feedback: /channels/nextcloud-talk
- [#126688](https://github.com/openclaw/openclaw/issues/126688) tts tool is in no built-in tool profile, and this is undocumented
- [#155696](https://github.com/openclaw/openclaw/issues/155696) [Bug]: session_end hook payload carries no messages and sessionFile points to a non-existent JSONL for SQLite-backed sessions
- [#162170](https://github.com/openclaw/openclaw/issues/162170) 9.x: startup maintenance always fails on kernels without statx — birthtimeNs is a ctime fallback, so the shared-state "generation" fence can never hold
- [#162077](https://github.com/openclaw/openclaw/issues/162077) [Bug]: System-agent inference probe ignores model.fallbacks — dead primary yields UNAVAILABLE despite healthy fallbacks
- [#162046](https://github.com/openclaw/openclaw/issues/162046) Gateway stop-drain aborts an in-flight cron run without waiting for its settlement — the run's own output/report is lost, not just marked error
- [#161951](https://github.com/openclaw/openclaw/issues/161951) [Bug]: Plugin schemas reject percent-encoded JSON Pointer separators
- [#161329](https://github.com/openclaw/openclaw/issues/161329) [Bug] v13 migration drops `installed_plugin_index` without folding when its row fails JSON validation
- [#161970](https://github.com/openclaw/openclaw/issues/161970) Bug: concurrent Telegram inbounds on same sessionKey crash active turn (tool authority snapshot race)
- [#161948](https://github.com/openclaw/openclaw/issues/161948) [Bug]: restart recovery loses claude-cli provider identity and rejects CLI alias as unavailable harness
- [#161932](https://github.com/openclaw/openclaw/issues/161932) Update failure: runtime-verification-failed (2026.9.3)
- [#161882](https://github.com/openclaw/openclaw/issues/161882) Update restart outcome fixture still stubs the synchronous ledger reader
- [#160735](https://github.com/openclaw/openclaw/issues/160735) [Bug] Durable session RPC spins the event loop forever on a socket that is closing but not yet closed — a full node-host process hang
- [#161912](https://github.com/openclaw/openclaw/issues/161912) RFC: keyless Copilot managed web-search provider (tools.web.search.provider: copilot)
- [#161894](https://github.com/openclaw/openclaw/issues/161894) Telegram: agent presentation callback buttons always get 'This action is no longer available' — opaque registry missing, docs promise text fallback
- [#161883](https://github.com/openclaw/openclaw/issues/161883) subagent-registry: "subagent completion owner changed before settlement" retries every 60 s indefinitely; rejection cannot be persisted
- [#161263](https://github.com/openclaw/openclaw/issues/161263) [Bug]: Source commits invalidate compatible retained Testboxes
- [#161872](https://github.com/openclaw/openclaw/issues/161872) Windows: WorkerTaskError DataCloneError #<Object> could not be cloned on every chat.send
- [#161858](https://github.com/openclaw/openclaw/issues/161858) SessionTranscriptWriterClaimReboundError loses terminal transcript when a session dies from context overflow
- [#161857](https://github.com/openclaw/openclaw/issues/161857) Context-overflow recovery limit (3) is session-wide and counts SUCCESSFUL compactions — session dies after 3 successful recoveries
- [#161808](https://github.com/openclaw/openclaw/issues/161808) [Bug]: Stuck `dispatching` settle-wake re-injects completed subagent results every turn and no operator command can clear it (2026.9.6)
- [#159682](https://github.com/openclaw/openclaw/issues/159682) [Bug]: Memory Wiki search finds nothing for non-Latin queries and mismatches accented words
- [#161651](https://github.com/openclaw/openclaw/issues/161651) [Feature]: Compact expandable inter-session activity in Control UI
- [#160336](https://github.com/openclaw/openclaw/issues/160336) [Feature]: expose Ultrafast in the composer only for accounts with access
- [#161681](https://github.com/openclaw/openclaw/issues/161681) iOS release qualification should use the published stable Gateway
- [#161717](https://github.com/openclaw/openclaw/issues/161717) Update failure: runtime-verification-failed (2026.9.4)
- [#161699](https://github.com/openclaw/openclaw/issues/161699) [Bug]: 2026.8.33 gateway/heartbeat run persistence fails with 'FOREIGN KEY constraint failed' (intermittent, OAuth/Codex)
- [#161673](https://github.com/openclaw/openclaw/issues/161673) [Feature]: DataCloneError occurs during the execution of a scheduled task, preventing the creation of an isolated session
- [#161652](https://github.com/openclaw/openclaw/issues/161652) [Bug]: [Bug] cron-setup `DataCloneError` — agent-turn jobs fail in ~30–50 ms without executing (regression, spreading to previously healthy jobs)
- [#150486](https://github.com/openclaw/openclaw/issues/150486) Chat: reply attribution should name the user and quote the prompt being answered

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 250,363 · **Open issues:** 47,721 · **Last push:** <1h ago

On October 1, 2026, Hermes Agent had a routine day with no new releases but saw a notable merged pull request: #129322, which fixed an issue with global-flag regex backtracking in the lifecycle guard and approval rules. Among the new issues raised, #129281 highlights a critical catastrophic backtracking problem in the cron/lifecycle_guard, which freezes the entire gateway process and has already garnered considerable attention. Other significant issues include #129813, proposing a feature for user-configurable URL scheme allowlists for desktop links, and #129740, which reports a persistent problem with the desktop stale-send guard causing a loop under certain conditions.

#### ✅ Merged PRs
- [#129322](https://github.com/NousResearch/hermes-agent/pull/129322) fix: prevent global-flag regex backtracking in the lifecycle guard and approval rules

#### 🐛 New Issues
- [#129281](https://github.com/NousResearch/hermes-agent/issues/129281) cron/lifecycle_guard: catastrophic backtracking in _PROFILE_FLAG_LIFECYCLE_PATTERN freezes the entire gateway process `type/perf` `comp/cron` `tool/terminal` `P1` 💬3
- [#129813](https://github.com/NousResearch/hermes-agent/issues/129813) [Feature]: User-configurable URL scheme allowlist for desktop links (obsidian:// etc.) 💬3
- [#129819](https://github.com/NousResearch/hermes-agent/issues/129819) [Bug][Desktop]: wake word always starts voice in the leftmost/main chat, ignoring the selected tab `type/bug` `tool/tts` `P3` `comp/desktop` 💬1
- [#129757](https://github.com/NousResearch/hermes-agent/issues/129757) Desktop preview pane: desktop_preview.open(http URL) silently does nothing — pane stays on about:blank `type/bug` `P2` `comp/desktop` 💬2
- [#129731](https://github.com/NousResearch/hermes-agent/issues/129731) Desktop: final answer renders twice on narration → tool → answer turns (duplicate survives session close/reopen; DB holds one row) `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop` 💬2
- [#129585](https://github.com/NousResearch/hermes-agent/issues/129585) [bug] starting profile gateway fails for system-level profile units `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬1
- [#129858](https://github.com/NousResearch/hermes-agent/issues/129858) cron Bot Chat CLI fallback takes ownership of a resumed Desktop chat and blocks human prompts `type/bug` `comp/tui` `comp/cron` `P2` 💬1
- [#129254](https://github.com/NousResearch/hermes-agent/issues/129254) Cron agent-mode worker dies silently before agent starts (execution stuck, no error, no delivery) `type/bug` `comp/cron` `P1` `sweeper:risk-message-delivery` 💬1
- [#129751](https://github.com/NousResearch/hermes-agent/issues/129751) pm: runtime prep syncs app venv Python 3.11 against pm/uv.lock ==3.14.* — all pm tool updates blocked `type/bug` `comp/cli` `P2` `python:uv` 💬1
- [#129426](https://github.com/NousResearch/hermes-agent/issues/129426) security: npm audit field report 2026-09-30 — current remediation targets superseded (brace-expansion ≥5.0.12, undici ≥6.28.1/7.29.1, vitest ≥4.1.11, yaml ≥2.8.3) `type/security` `comp/tui` `tool/browser` `P3` 💬1
- [#129740](https://github.com/NousResearch/hermes-agent/issues/129740) Desktop stale-send guard refuses sends in a loop when multiple sessions are active; fork is the only escape `type/bug` `P1` `sweeper:risk-session-state` `comp/desktop` 💬1
- [#129715](https://github.com/NousResearch/hermes-agent/issues/129715) browser_vault_fill can select a hidden or unrelated tab in shared CDP Chrome `type/bug` `comp/tools` `tool/browser` `area/auth` 💬1
- [#129843](https://github.com/NousResearch/hermes-agent/issues/129843) [Bug][Desktop]: false barge-in on own speaker playback cuts the reply and never resumes it (empty/filler captures) `type/bug` `tool/tts` `P2` `comp/desktop`
- [#129827](https://github.com/NousResearch/hermes-agent/issues/129827) [Feature]: improve the format and info for the hermes profile list command `type/feature` `comp/cli` `P3` `area/profiles`
- [#129818](https://github.com/NousResearch/hermes-agent/issues/129818) Kanban dispatcher workers silently auto-approve dangerous commands (gate fails open, not closed) `type/bug` `comp/cli` `tool/terminal` `P2`
- [#129792](https://github.com/NousResearch/hermes-agent/issues/129792) checkpoint: every git call pays a ~0.45s pm.ensure("git") probe that always fails on Linux `type/perf` `comp/cli` `P2`
- [#129800](https://github.com/NousResearch/hermes-agent/issues/129800) BUG: Testing connection to local model after saving API key in Custom Endpoint leads to Failed Test `type/bug` `duplicate` `comp/cli` `area/config`
- [#129784](https://github.com/NousResearch/hermes-agent/issues/129784) [Bug]: Fallback chain is not connectivity-aware — cloud entries burn their full retry budget during an internet outage `type/bug` `comp/agent` `provider/ollama` `area/config`
- [#129785](https://github.com/NousResearch/hermes-agent/issues/129785) hermes pm update crashes: ValueError unpack in gh-tool fetch_url (pm/packages.py:715, 3-segment target) `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#129760](https://github.com/NousResearch/hermes-agent/issues/129760) Wave: stale duplicates + landed-but-open resolved by 2026-09-18→30 landings (15 rows) `type/refactor` `P3` `needs-decision` `sweeper:risk-automation`
- [#129761](https://github.com/NousResearch/hermes-agent/issues/129761) Close wave: Desktop PRs superseded by 2026-09-15→30 landings (20 rows) `type/refactor` `P3` `needs-decision` `sweeper:risk-automation`
- [#129744](https://github.com/NousResearch/hermes-agent/issues/129744) [bug] Windows: elevated start makes the browser backend fail silently; agent-browser leaks orphan Chrome `type/bug` `comp/tools` `tool/browser` `P2`
- [#129733](https://github.com/NousResearch/hermes-agent/issues/129733) [Bug]: macOS search_files with ripgrep still opens protected home folders (exclusion globs never match the folder itself) `type/bug` `tool/file` `P2`

#### 🔒 Closed Issues
- [#109552](https://github.com/NousResearch/hermes-agent/issues/109552) Label audit (unverified): open tickets tagged duplicate or invalid
- [#70732](https://github.com/NousResearch/hermes-agent/issues/70732) [i18n] Runtime i18n misses hardcoded platform-adapter strings and tips — Italian translations ready to contribute
- [#129281](https://github.com/NousResearch/hermes-agent/issues/129281) cron/lifecycle_guard: catastrophic backtracking in _PROFILE_FLAG_LIFECYCLE_PATTERN freezes the entire gateway process
- [#129813](https://github.com/NousResearch/hermes-agent/issues/129813) [Feature]: User-configurable URL scheme allowlist for desktop links (obsidian:// etc.)
- [#112956](https://github.com/NousResearch/hermes-agent/issues/112956) [Feature]: Edit-tool shape audit — benchmark Hermes file-edit tools against str_replace semantics (evals/edittool/)
- [#94978](https://github.com/NousResearch/hermes-agent/issues/94978) [Bug] HTTP 429 'model temporarily at capacity upstream' kills the turn — no auto-resume/backoff
- [#129254](https://github.com/NousResearch/hermes-agent/issues/129254) Cron agent-mode worker dies silently before agent starts (execution stuck, no error, no delivery)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,010 · **Open issues:** 8,412 · **Last push:** <1h ago

On October 1, 2026, vLLM did not release any new versions but saw significant development activity with the merging of 22 pull requests. Among these, notable changes include the addition of async scheduling accuracy tests in #55840 and enhancements to histogram metrics with custom buckets implemented in #48867. Bug fixes were made to the MiniMax-M3 auxiliary state relay, addressing issues related to performance and memory allocation, particularly in #58648 and #58725. In terms of new issues, a critical concern arose with GLM-5.3-Flash crashing on certain hardware configurations, documented in #59416, highlighting ongoing challenges with ROCm compatibility.

#### ✅ Merged PRs
- [#55840](https://github.com/vllm-project/vllm/pull/55840) [CI][Spec Decode] Add async scheduling accuracy tests
- [#48867](https://github.com/vllm-project/vllm/pull/48867) [Metrics] Add --custom-histogram-buckets to override histogram bucket families
- [#59361](https://github.com/vllm-project/vllm/pull/59361) [Doc] Score centering via top-k processed logprobs
- [#59335](https://github.com/vllm-project/vllm/pull/59335) [Core] Include the LoRA path in prefix-cache block hashes
- [#59508](https://github.com/vllm-project/vllm/pull/59508) [CI] Fix MiniMax-M3 PP aux-state test mock after #58648
- [#59507](https://github.com/vllm-project/vllm/pull/59507) [CI] Deflake the multi-API-server metrics test and Mooncake PD ports
- [#58125](https://github.com/vllm-project/vllm/pull/58125) [CI] Deflake shutdown wait-timeout test by synchronizing on request admission
- [#59499](https://github.com/vllm-project/vllm/pull/59499) [ROCm][CI] Sync two AMD test groups between test-amd.yaml and test_areas
- [#58648](https://github.com/vllm-project/vllm/pull/58648) [Bugfix][MiniMax M3] Share target embeddings with MTP under PP
- [#59495](https://github.com/vllm-project/vllm/pull/59495) [HiSparse] Switch to host reads once a request fills its admission window
- [#57084](https://github.com/vllm-project/vllm/pull/57084) [Docs] Add PR checklist skill for coding agents
- [#59373](https://github.com/vllm-project/vllm/pull/59373) [BugFix][Multimodal] Pick worst-case DeepSeek-V4 VL dummy image size (#59271)
- [#52928](https://github.com/vllm-project/vllm/pull/52928) [Mamba] Add FlashInfer ReplaySSM support for MTP
- [#59175](https://github.com/vllm-project/vllm/pull/59175) [Bugfix][Core] Fix mamba prefill checkpoint block reservation and prompt-end eviction in align mode
- [#59256](https://github.com/vllm-project/vllm/pull/59256) [ROCm][CI] Remove duplicate MI355 DPX jobs
- [#57197](https://github.com/vllm-project/vllm/pull/57197) [Bugfix][PP][Spec Decode] MiniMax-M3 EAGLE3 aux-state relay at PP > 1 and per-stage FlashInfer autotune
- [#59369](https://github.com/vllm-project/vllm/pull/59369) [Docs] Add @gau-nernst to CODEOWNERS and committers
- [#58725](https://github.com/vllm-project/vllm/pull/58725) [Bugfix][HiSparse] Stop the host pool feeding device KV cache residency metrics
- [#59127](https://github.com/vllm-project/vllm/pull/59127) [Docs] Clarify snapshot runtime image support
- [#59477](https://github.com/vllm-project/vllm/pull/59477) [ROCm][CI] Relax simple-nemotron-h-8b GSM8K threshold on ROCm
- [#59282](https://github.com/vllm-project/vllm/pull/59282) [Bugfix][HiSparse] Adopt GPU prefix copies after the hit's allocation
- [#56151](https://github.com/vllm-project/vllm/pull/56151) [Perf][MiniMax-M3] Triton indexer: decode grid retune + SM12.0 split-K
- [#59476](https://github.com/vllm-project/vllm/pull/59476) [CI] Add supports_multimodal_inputs to test_executor_replace's mock config
- [#59338](https://github.com/vllm-project/vllm/pull/59338) [XPU][CI] Skip test_core_engine_actor_manager.py on Intel CI
- [#59253](https://github.com/vllm-project/vllm/pull/59253) [ROCm]Transpose compressed-tensors MoE weights on device
- [#57640](https://github.com/vllm-project/vllm/pull/57640) [ROCm][Kimi-K3][Perf] Fuse MLA decode KV-cache write and Q-prep via AITER
- [#59456](https://github.com/vllm-project/vllm/pull/59456) [Docs] Add @wzhao18 to NVIDIA integration and kv offloading code owners
- [#59431](https://github.com/vllm-project/vllm/pull/59431) Add support for unquantized ngram in CT format
- [#59237](https://github.com/vllm-project/vllm/pull/59237) [CI][ROCm] Drop the duplicate OAI Triton MoE run from FP8 MoE Kernels
- [#59007](https://github.com/vllm-project/vllm/pull/59007) [Bugfix][HiSparse] Preserve host prefix publication after request completion
- [#58602](https://github.com/vllm-project/vllm/pull/58602) [Frontend] Port chat_parsing core from Transformers
- [#57652](https://github.com/vllm-project/vllm/pull/57652) [KV-Offloading][TP] : Expand replicated_layout detection to multi-group MLA
- [#56807](https://github.com/vllm-project/vllm/pull/56807) [watermarking] add context deduplication support to speculative decoding
- [#59287](https://github.com/vllm-project/vllm/pull/59287) [ROcm][BugFix][The Rock] Update The Rock dockerfile to most recent Triton 3.8
- [#59428](https://github.com/vllm-project/vllm/pull/59428) Disable mypy `arg-type` and `assignment` checks in tests
- [#55368](https://github.com/vllm-project/vllm/pull/55368) [ROCm][MoE] Pad the AITER MoE intermediate size at allocation time, and round the expert-group count to a kernel that exists
- [#59372](https://github.com/vllm-project/vllm/pull/59372) [ROCm][BugFix][The Rock] Fix mori build for the rock
- [#55781](https://github.com/vllm-project/vllm/pull/55781) [Frontend][RL] Track HTTP weight operation outcomes and concurrency
- [#58819](https://github.com/vllm-project/vllm/pull/58819) [ROCm][Perf] Add opt-in a4w4 (FP4 activation) MoE for DeepSeek V4.1 on AITER
- [#50300](https://github.com/vllm-project/vllm/pull/50300) [Security] Fix chat template resource-exhaustion DoS (GHSA-4hhp-h66f-…
- [#58008](https://github.com/vllm-project/vllm/pull/58008) [ROCm][Perf][GLM-5.3-Flash] "Fit kpool top-k indices to AITER" with a single Triton kernel
- [#59427](https://github.com/vllm-project/vllm/pull/59427) [Security] Bump pyjwt and rand for remaining GHSAs
- [#59379](https://github.com/vllm-project/vllm/pull/59379) [Test] Skip IPC weight-transfer test on XPU platforms
- [#59357](https://github.com/vllm-project/vllm/pull/59357) [Security] Authenticate shared-memory multimodal cache handles
- [#59200](https://github.com/vllm-project/vllm/pull/59200) [Refactor] Share workspace and model runner init between GPU and XPU workers
- [#59149](https://github.com/vllm-project/vllm/pull/59149) [Hardware][Power] Enable W4A16 (AWQ & GPTQ) quantization on POWER10 using VSX
- [#52864](https://github.com/vllm-project/vllm/pull/52864) [Frontend][RL] Align sleep-mode API responses and operation metrics
- [#59315](https://github.com/vllm-project/vllm/pull/59315) [Security] Bump remaining Dependabot packages (excl. ignored)
- [#59139](https://github.com/vllm-project/vllm/pull/59139) [Feat] Support PP with PCP in GPU Model Runner V2
- [#59029](https://github.com/vllm-project/vllm/pull/59029) [Bugfix][Core] Schedule encoder-only prompts larger than one step
- [#59426](https://github.com/vllm-project/vllm/pull/59426) [CI/Build] Fix pre-commit
- [#59411](https://github.com/vllm-project/vllm/pull/59411) [Docs] Reinstate docs build gate for PRs
- [#59316](https://github.com/vllm-project/vllm/pull/59316) [Feature][Rust Frontend] Add Shutdown control RPC
- [#57168](https://github.com/vllm-project/vllm/pull/57168) [MM][Mistral] Add compile support for Pixtral vision encoders
- [#54093](https://github.com/vllm-project/vllm/pull/54093) [CPU] Conv1d optimised kernel for aarch64
- [#57172](https://github.com/vllm-project/vllm/pull/57172) [XPU] Dispatch nn.LayerNorm to fused SYCL kernel via CustomOp

#### 🐛 New Issues
- [#59416](https://github.com/vllm-project/vllm/issues/59416) [Bug][ROCm]: GLM-5.3-Flash crashes on gfx942 at indexer logits `bug` `rocm` `glm` 💬5
- [#59440](https://github.com/vllm-project/vllm/issues/59440) [Bug][HiSparse] Engine crash: "Cannot get N free blocks" allocating the hot region at admission under GPU-pool pressure `bug` `quantization` 💬2
- [#59413](https://github.com/vllm-project/vllm/issues/59413) [Bug][ROCm]: GLM-5.3-Flash gibberish at low concurrency (gfx950) `bug` `rocm` `glm` 💬2
- [#59515](https://github.com/vllm-project/vllm/issues/59515) [Bug]: Stop strings match inside reasoning and end the request with content=null `tool-calling` `quantization` 💬1
- [#59513](https://github.com/vllm-project/vllm/issues/59513) [Bug]: top_logprobs cut differs across chat, completions, generate and derender when the sampled token is outside the top-k 💬1
- [#59423](https://github.com/vllm-project/vllm/issues/59423) [Bug]: Backend.NO_ATTENTION points at a module that does not exist 💬1
- [#59466](https://github.com/vllm-project/vllm/issues/59466) [Feature]: Support configuring Triton unified-attention launch parameters `feature request`
- [#59449](https://github.com/vllm-project/vllm/issues/59449) [Bug] `enable_return_routed_experts` returns stale routing after a layerwise weight reload when a monolithic MoE kernel (FLASHINFER_TRTLLM FP8) is in use `quantization` `kimi` 💬1
- [#59433](https://github.com/vllm-project/vllm/issues/59433) [Startup UX]: Serial per-process Python imports across the API server → EngineCore → worker tree add significant startup time 💬1
- [#59365](https://github.com/vllm-project/vllm/issues/59365) [RFC]: /v1/decisions: First-class Jev typed decision endpoint in the API server (with /v1/systemone compatibility) `RFC` 💬1
- [#59394](https://github.com/vllm-project/vllm/issues/59394) [Bug] DeepSeek-V4.1-Flash cannot use TP > 8: Engram hash-head sharding assertion rejects tp_size=16 across 2 nodes `deepseek` `DSv4.1` 💬1
- [#59404](https://github.com/vllm-project/vllm/issues/59404) [Bug] vendored flash_linear_attention chunk_o.py drops upstream mask before exp(), so boundary chunks can exponentiate unspecified lanes 💬1
- [#59520](https://github.com/vllm-project/vllm/issues/59520) [Performance]: Default CUDA GDN wrapper regresses non-spec Qwen3.5 throughput on H200
- [#59502](https://github.com/vllm-project/vllm/issues/59502) [RFC]: Modulewise weight reload `quantization` `kimi` `k3`
- [#59498](https://github.com/vllm-project/vllm/issues/59498) [Feature]: Route FlashInfer sparse-MLA decode autotune through the PP-aware tuning group and cache
- [#59471](https://github.com/vllm-project/vllm/issues/59471) [Bug]: CPU backend KV cache sizing error reports a negative size and recommends the wrong fix `cpu`
- [#59457](https://github.com/vllm-project/vllm/issues/59457) [Bug]: [gpt-oss-20b-bf16] W4A8 quantized model produces garbled output on ARM CPU `bug` `cpu` `gpt-oss` `quantization`
- [#59452](https://github.com/vllm-project/vllm/issues/59452) [Doc]: Enabling VLLM Whitespace on small models `documentation`
- [#59451](https://github.com/vllm-project/vllm/issues/59451) [Doc]: Enabling VLLM Whitespace on small models `documentation`
- [#59415](https://github.com/vllm-project/vllm/issues/59415) [Bug]: Qwen3.6-35B-A3B-FP8 model with TP 4 gives gibberish output !!!!!!!!!!!! on Intel B70 cards `bug` `intel-gpu`
- [#59409](https://github.com/vllm-project/vllm/issues/59409) [Bug]: V2 runner handles KV preemptions after request updates can overwrite pages
- [#59403](https://github.com/vllm-project/vllm/issues/59403) [Bug] Marlin int8-activation path reads negative group scales as unsigned, corrupting every such group `quantization`
- [#59382](https://github.com/vllm-project/vllm/issues/59382) [RFC]: MoRIIO WRITE failure handling and safe KV block reclamation `RFC`
- [#59381](https://github.com/vllm-project/vllm/issues/59381) [Bug]: Qwen3.5-35B-A3B merged SFT BF16 intermittently produces NaN logits and exclamation-only output on H20 (v0.19.1; HF control finite) `bug` `quantization`
- [#59375](https://github.com/vllm-project/vllm/issues/59375) [Bug]: SIGTERM during engine startup is swallowed by zmq_socket_ctx; API server hangs until VLLM_ENGINE_READY_TIMEOUT_S `intel-gpu`
- [#59362](https://github.com/vllm-project/vllm/issues/59362) [Bug]: FA4 ignores `num_splits` on SM90 in v0.30.0 causing upto 48% slower decode `bug` `quantization`
- [#59354](https://github.com/vllm-project/vllm/issues/59354) [Feature]: shechduling using predicted decode output length `feature request`
- [#59352](https://github.com/vllm-project/vllm/issues/59352) [Doc]: On Hopper NVSwitch nodes, TP runs can be non-reproducible even for a single request; NCCL_NVLS_ENABLE=0 alone fixes it at ~1% cost
- [#59345](https://github.com/vllm-project/vllm/issues/59345) [Bug]: Whisper verbose_json returns empty text when the decoder emits no timestamp token; json returns the full text

#### 🔒 Closed Issues
- [#56506](https://github.com/vllm-project/vllm/issues/56506) [RFC]: DeepSeek-V4.1-Flash performance on ROCm
- [#34370](https://github.com/vllm-project/vllm/issues/34370) [Feature]: Make Prometheus histogram buckets configurable
- [#43702](https://github.com/vllm-project/vllm/issues/43702) [RFC]: Non-blocking core model loop
- [#45133](https://github.com/vllm-project/vllm/issues/45133) [RFC]: Triton Kernel Dispatcher for Multi-Platform Support
- [#43564](https://github.com/vllm-project/vllm/issues/43564) [Bug] FP8 block-quant loader rejects artifacts using 'weight_scale' rather than 'weight_scale_inv' naming
- [#59154](https://github.com/vllm-project/vllm/issues/59154) [Bug]: rust vllm-bench result is quite different from vllm bench serve
- [#59416](https://github.com/vllm-project/vllm/issues/59416) [Bug][ROCm]: GLM-5.3-Flash crashes on gfx942 at indexer logits
- [#43593](https://github.com/vllm-project/vllm/issues/43593) [Bug]: AssertFail
- [#58922](https://github.com/vllm-project/vllm/issues/58922) [ROCm] rocm_unquantized_gemm crashes on CPU tensors (dispatch ignores tensor device)
- [#58267](https://github.com/vllm-project/vllm/issues/58267) [Bug]: CPU W4A16 Whisper fails: cpu_gemm_wna16 rejects 3-D encoder activations; packed k_proj bias is synthesized incorrectly
- [#43661](https://github.com/vllm-project/vllm/issues/43661) [Feature]: add object store e2e tests for kv caching
- [#43753](https://github.com/vllm-project/vllm/issues/43753) [Performance]: DeepSeek-V4-Pro 128K+ timeout on deepseekv4-cu130; nightly aa2b56f completes 1M real-prose checks on 8x B200
- [#44096](https://github.com/vllm-project/vllm/issues/44096) [Bug]: [LMCache] `update_state_after_alloc` passes wrong `cache_salt` to `free_lookup_locks`, leaking server read locks in multi-tenant deployments
- [#44100](https://github.com/vllm-project/vllm/issues/44100) [Bug]: [LMCache] `_cleanup_request_tracker` leaks lookup state and server read locks when request is aborted before allocation
- [#44162](https://github.com/vllm-project/vllm/issues/44162) [Feature Request] Memory Poisoning Protection for vLLM Serving via OWASP Agent Memory Guard
- [#44211](https://github.com/vllm-project/vllm/issues/44211) [RFC]: vLLM NaN Reporting
- [#59440](https://github.com/vllm-project/vllm/issues/59440) [Bug][HiSparse] Engine crash: "Cannot get N free blocks" allocating the hot region at admission under GPU-pool pressure
- [#43700](https://github.com/vllm-project/vllm/issues/43700) [Doc]: INT8 weight-only quantization causes 4x throughput regression at batch=1 on memory-bandwidth-bound GPUs
- [#43711](https://github.com/vllm-project/vllm/issues/43711) [RFC]: Debug observation for prefix-cache lookup boundary before request-level stats
- [#43716](https://github.com/vllm-project/vllm/issues/43716) [Bug][Spec Decode][Multimodal] EAGLE FULL prefill CUDA graph drops mm_inputs
- [#44079](https://github.com/vllm-project/vllm/issues/44079) [Performance]: FlashInfer AR+RMSNorm fusion cap is ~2x too high on multimem NVLink Hopper (TP8): it displaces the faster multimem all-reduce in the 256KB-512KB band
- [#44148](https://github.com/vllm-project/vllm/issues/44148) [Bug]: Kimi 2.5 response formatting error / corrupted JSON output with huge whitespaces under high concurrency (H20)
- [#44189](https://github.com/vllm-project/vllm/issues/44189) [Usage]: [Question] Inconsistent inference results (completely opposite outputs) across identical environments despite temperature=0
- [#44200](https://github.com/vllm-project/vllm/issues/44200) [Bug]: Qwen3-VL EVS video pruning crashes with CPU/CUDA device mismatch in _create_final_video_embeddings
- [#44204](https://github.com/vllm-project/vllm/issues/44204) [Bug]: EVS for qwen3-vl
- [#59515](https://github.com/vllm-project/vllm/issues/59515) [Bug]: Stop strings match inside reasoning and end the request with content=null
- [#59271](https://github.com/vllm-project/vllm/issues/59271) [Bug]: DeepSeek-V4 VL dummy image is not the worst case for multimodal profiling
- [#58009](https://github.com/vllm-project/vllm/issues/58009) [ROCm][Perf][GLM-5.3-Flash]: Implement fit_kpool_indices_to_aiter as a single triton kernel

### SGLang (`sgl-project/sglang`)

**Stars:** 36,678 · **Open issues:** 5,424 · **Last push:** <1h ago

On October 1, 2026, there were no new releases for SGLang, but several significant changes were merged. Notably, the Rust gRPC adapter for native generation (#41766) was implemented, and a robust fix for LoRA usage-counter accounting across request lifecycle paths (#31808) was also integrated. Additionally, the PR addressing the internal-state readback and updates for the Scheduler (#41950) signals improvements in system performance. Among new issues, #41923 highlights a bug where the --cuda-graph-max-bs-prefill parameter rounds down unexpectedly, potentially impairing post-capture KV sizing.

#### ✅ Merged PRs
- [#40698](https://github.com/sgl-project/sglang/pull/40698) [Router] k8s e2e for cache-aware peer bootstrap (12/13)
- [#31808](https://github.com/sgl-project/sglang/pull/31808) Fix LoRA usage-counter accounting across request lifecycle paths
- [#41936](https://github.com/sgl-project/sglang/pull/41936) [ci] fix renderer image publish
- [#41766](https://github.com/sgl-project/sglang/pull/41766) [Rust] Implement the Rust gRPC adapter for native generation
- [#40811](https://github.com/sgl-project/sglang/pull/40811) [AMD][Quark] Serve the Kimi-K3 MXFP4 checkpoint on ROCm
- [#41886](https://github.com/sgl-project/sglang/pull/41886) [Perf] Use FA4 by default for MiMo on SM100
- [#41451](https://github.com/sgl-project/sglang/pull/41451) [PD][Mamba] fix: free the COW mamba slot of decode requests dropped before preallocation
- [#41935](https://github.com/sgl-project/sglang/pull/41935) [ci] grant ci permissions to sagearc
- [#41950](https://github.com/sgl-project/sglang/pull/41950) [Scheduler] Move internal-state readback and updates into a collaborator
- [#41952](https://github.com/sgl-project/sglang/pull/41952) [Test] Prune redundant scheduler unit tests
- [#41667](https://github.com/sgl-project/sglang/pull/41667) [Fix] Keep MiMo-V2 processor available without TorchCodec
- [#40077](https://github.com/sgl-project/sglang/pull/40077) [Fix] Preserve inline instructions for Responses and Kimi K3 Messages
- [#41896](https://github.com/sgl-project/sglang/pull/41896) [rust-renderer] `sglang-processor` lib
- [#41726](https://github.com/sgl-project/sglang/pull/41726) [Rust] Extract shared runtime.v1 protobuf bindings
- [#41154](https://github.com/sgl-project/sglang/pull/41154) fix(spec): enable Qwen3.5 EAGLE3 capture and streaming overlap
- [#41818](https://github.com/sgl-project/sglang/pull/41818) [Feature] Add --attn-dp-size and deprecate --enable-dp-attention
- [#34201](https://github.com/sgl-project/sglang/pull/34201) [RL, Spec] Introduce top-p mask capture for spec and add DFlash/DSpark impl
- [#41817](https://github.com/sgl-project/sglang/pull/41817) [Refactor] Enter draft TP scopes by attention ownership and drop ModelRunner.tp_group
- [#41815](https://github.com/sgl-project/sglang/pull/41815) [Refactor] Stop passing models' layers the placement they already read
- [#41816](https://github.com/sgl-project/sglang/pull/41816) [Refactor] Add make_pp_layers so models stop handing their PP position down
- [#41814](https://github.com/sgl-project/sglang/pull/41814) [Refactor] Let FusedMoE's weight-loading helpers read the layer's MoE-TP rank
- [#41813](https://github.com/sgl-project/sglang/pull/41813) [Refactor] Keep only the TP and PP groups on the model runner
- [#41812](https://github.com/sgl-project/sglang/pull/41812) [Refactor] Drop model placement attributes and parameters nothing reads
- [#41811](https://github.com/sgl-project/sglang/pull/41811) [Refactor] Drop placement values nothing reads
- [#41810](https://github.com/sgl-project/sglang/pull/41810) [Fix] Make the Solar model constructible and runnable
- [#41808](https://github.com/sgl-project/sglang/pull/41808) [Fix] Pass the draft's attention ownership to DFLASH's eager LiLiCorr scope
- [#41809](https://github.com/sgl-project/sglang/pull/41809) [Fix] Size the prefill delayer's gather buffer to its TP group
- [#41805](https://github.com/sgl-project/sglang/pull/41805) [Fix] Read TensorCast's WORLD placement under its current names
- [#41807](https://github.com/sgl-project/sglang/pull/41807) [Fix] Shard MoE WNA16 and Quark INT4-FP8 weights by the MoE placement
- [#41806](https://github.com/sgl-project/sglang/pull/41806) [Fix] State the configured MoE-DP width in the weight-cache fingerprint
- [#40001](https://github.com/sgl-project/sglang/pull/40001) [Spec][PP] Fix hybrid recurrent-state commit and micro-batch pairing under PP x speculative decoding
- [#39012](https://github.com/sgl-project/sglang/pull/39012) [Deps] Bump transformers to 5.17.0
- [#41799](https://github.com/sgl-project/sglang/pull/41799) [Test] Lower the SM120 NVFP4 KV GSM8K threshold to 0.60
- [#40709](https://github.com/sgl-project/sglang/pull/40709) [Deps] Bump FlashInfer to 0.7.0.post1
- [#37984](https://github.com/sgl-project/sglang/pull/37984) [BugFix] Pass token-major Q/K tensors from Gemma-3 to RadixAttention
- [#41308](https://github.com/sgl-project/sglang/pull/41308) dsv4.1-amd: serve DeepSeek-V4.1 on gfx950
- [#41758](https://github.com/sgl-project/sglang/pull/41758) [HiCache] Attribute buffer-mode storage hits against the joint device match
- [#41851](https://github.com/sgl-project/sglang/pull/41851) docs: remove unreliable DeepWiki badge
- [#41380](https://github.com/sgl-project/sglang/pull/41380) [Fix] Stop PD-decode queue_time from counting decode time before a retraction
- [#41689](https://github.com/sgl-project/sglang/pull/41689) [diffusion] nightly: measure every framework with one client end-to-end methodology
- [#40697](https://github.com/sgl-project/sglang/pull/40697) [Router] Prove a bootstrapped replica answers like the one it copied (11/13)
- [#40696](https://github.com/sgl-project/sglang/pull/40696) [Router] Ask the fleet when a graft's splice goes unwitnessed (10/13)
- [#41838](https://github.com/sgl-project/sglang/pull/41838) [Fix] Stop the namespace census at the leaf a read names
- [#40695](https://github.com/sgl-project/sglang/pull/40695) [Router] Share one fleet-wide fetch across a discovery burst (9/13)
- [#41849](https://github.com/sgl-project/sglang/pull/41849) [Docs] Add MI355X FP8 agentic recipe to the Qwen3.5 cookbook
- [#41572](https://github.com/sgl-project/sglang/pull/41572) [KDA] Fix ptx_kda prefill NaN without a gate lower bound and workspace growth
- [#41445](https://github.com/sgl-project/sglang/pull/41445) [KDA] Enable the ptx_kda prefill backend on SM100 (B200 / GB200)
- [#41687](https://github.com/sgl-project/sglang/pull/41687) [ROCm] Select DSA indexer top-k wave size by arch (wave32 on gfx1250)
- [#40911](https://github.com/sgl-project/sglang/pull/40911) [AMD] Gate flashinfer and TRT-LLM DSA paths on CUDA
- [#40227](https://github.com/sgl-project/sglang/pull/40227) [Linear Attention] Expose GDN/KDA prefill hooks and auxiliary cache accounting
- [#41856](https://github.com/sgl-project/sglang/pull/41856) ci: temporarily disable A5 (950) nightly job during power maintenance
- [#41513](https://github.com/sgl-project/sglang/pull/41513) [AMD] Resolve QSA packed-varlen decode to aiter on HIP
- [#41717](https://github.com/sgl-project/sglang/pull/41717) [NPU] [DOC]: add Kimi-K3 NPU PD disaggregation recipes
- [#40694](https://github.com/sgl-project/sglang/pull/40694) [Router] Sweep the fleet for a peer snapshot and hand it to the pump (8/13)
- [#41825](https://github.com/sgl-project/sglang/pull/41825) [diffusion] H3: check the final MP4 in-process instead of spawning ffprobe
- [#34365](https://github.com/sgl-project/sglang/pull/34365) [Diffusion] support MiniMax H3 RL
- [#41678](https://github.com/sgl-project/sglang/pull/41678) chore: bump mooncake version to 0.3.13.post1
- [#36901](https://github.com/sgl-project/sglang/pull/36901) [AMD] Add Qwen3.8-Flash-Next-FP8 nightly validation
- [#41450](https://github.com/sgl-project/sglang/pull/41450) [HiCache][PD] fix: clamp the decode restore to the prefix promised to prefill
- [#37787](https://github.com/sgl-project/sglang/pull/37787) [NPU] Add decode context parallel support for dsa models
- [#41135](https://github.com/sgl-project/sglang/pull/41135) [AMD][DI][CI] Leave the GLM-5.2 MTP decode room to load its Triton kernels
- [#41238](https://github.com/sgl-project/sglang/pull/41238) [AMD][DI][CI] Give the dsv4pro-fp4 MTP decode more memory headroom
- [#41099](https://github.com/sgl-project/sglang/pull/41099) [AMD][DI][CI] Record the commit the MI355X nightly tested
- [#41025](https://github.com/sgl-project/sglang/pull/41025) [AMD][DI][CI] Fix four failures in the MI355X disaggregation nightly
- [#41787](https://github.com/sgl-project/sglang/pull/41787) Readme refresh
- [#37294](https://github.com/sgl-project/sglang/pull/37294) fix: initialize Inkling safely on ROCm
- [#41834](https://github.com/sgl-project/sglang/pull/41834) [diffusion] Wan: encode the MP4 while the VAE decodes
- [#39614](https://github.com/sgl-project/sglang/pull/39614) [Qwen4-Exp] Optional fp8 (e4m3) storage for the compressed QSA indexer cache
- [#40972](https://github.com/sgl-project/sglang/pull/40972) [qwen next] Fuse QSA KV preparation and sparse block expansion
- [#41173](https://github.com/sgl-project/sglang/pull/41173) [qwen 3.8 next] Fuse QSA graph replay metadata across draft steps
- [#38583](https://github.com/sgl-project/sglang/pull/38583) [ROCm] GLM-5.2: gfx950 four-kernel fused DSA indexer decode path
- [#41824](https://github.com/sgl-project/sglang/pull/41824) [NPU][CI] Fix stale multimodal-gen job name in fast-fail health check

#### 🐛 New Issues
- [#41923](https://github.com/sgl-project/sglang/issues/41923) [Bug] --cuda-graph-max-bs-prefill silently rounds down to the nearest capture bucket (decode does not), which can disable post-capture KV sizing 💬1
- [#41828](https://github.com/sgl-project/sglang/issues/41828) [Bug] PEFT adapters with bias="lora_only" or "all" crash or silently corrupt weights during normalize_qkv_proj 💬1
- [#41882](https://github.com/sgl-project/sglang/issues/41882) [Bug] MultimemAllGatherer in LogitsProcessor crashes with SIGFPE on platforms without CUDA multicast (WSL2), even with symm-mem flags off 💬1
- [#41836](https://github.com/sgl-project/sglang/issues/41836) [Bug] GLM-5.3-Flash: compressed-tensors ignore list names the forget gate self_attn.forget_gate.f_{a,b}_proj, so RedHatAI/GLM-5.3-Flash-NVFP4 fails at construction 💬1
- [#41937](https://github.com/sgl-project/sglang/issues/41937) [Cookbook Benchmark] Qwen3.8-Flash-Next NVFP4 on B300 (TP1)
- [#41938](https://github.com/sgl-project/sglang/issues/41938) [Cookbook Benchmark] Qwen3.8-27B FP8 on H200 with current speculative/tier overlays
- [#41946](https://github.com/sgl-project/sglang/issues/41946) [Cookbook Benchmark] DeepSeek-V4.1-Flash on B300 (TP4/EP4)
- [#41919](https://github.com/sgl-project/sglang/issues/41919) [Cookbook Benchmark] Qwen3.8-Flash-Next NVFP4 on B200 (TP1)
- [#41939](https://github.com/sgl-project/sglang/issues/41939) [Bug] GLM-5.3-Flash NVFP4 at TP4 loops in reasoning with no final answer on B200/B300
- [#41926](https://github.com/sgl-project/sglang/issues/41926) [Bug] DCP fails for GLM-5.3-NVFP4 on B300
- [#41852](https://github.com/sgl-project/sglang/issues/41852) [AMD][Diffusion] Add a reliable gfx1151 attention path without AOTriton
- [#41863](https://github.com/sgl-project/sglang/issues/41863) [Bug] [Diffusion] Hybrid SP+TP does not work correctly for the I2V models
- [#41892](https://github.com/sgl-project/sglang/issues/41892) [diffusion] LTX-2: overlap MP4 encode with VAE decode (follow-up to #41819) `diffusion`
- [#41866](https://github.com/sgl-project/sglang/issues/41866) [RFC][NPU] INT8 (C8) KV cache for DSA models (GLM-5.2) on Ascend A2/A3 (910B/910C)
- [#41853](https://github.com/sgl-project/sglang/issues/41853) [RFC] Gluon MegaMoE: EP8 MXFP4 and EP16 FP8 Support
- [#41841](https://github.com/sgl-project/sglang/issues/41841) [Bug] Scheduler stalls with no running requests because batch_is_full is not reset (v0.5.20)
- [#41835](https://github.com/sgl-project/sglang/issues/41835) [Bug] AutoRoundConfig ignores packed_modules_mapping and hf_to_sglang_mapper, breaking two AutoRound checkpoints
- [#41821](https://github.com/sgl-project/sglang/issues/41821) Apertus2509Detector (streaming) drops the second tool block and trailing text when they arrive in the same chunk`

#### 🔒 Closed Issues
- [#29630](https://github.com/sgl-project/sglang/issues/29630) [RFC] Introduce a unified sglang.kernels namespace for kernel organization and dispatch
- [#33181](https://github.com/sgl-project/sglang/issues/33181) [Bug] Inkling reasoning parser leaks the tool name into visible content when a turn opens with a tool call
- [#33199](https://github.com/sgl-project/sglang/issues/33199) [Bug] DeepSeek-V4 default prevents speculative decoding from resetting max-running-requests to 48
- [#33187](https://github.com/sgl-project/sglang/issues/33187) [Bug/Design] `SGLANG_SANITIZE_NAN_LOGITS`: a fully-NaN logits row becomes a uniform-random sample — garbage streamed to clients as normal output; proposal: opt-in per-request abort
- [#33186](https://github.com/sgl-project/sglang/issues/33186) [Bug] MiMo tool-call streaming: text after the last tool call is silently dropped; split bot-token flushes markup into content
- [#33180](https://github.com/sgl-project/sglang/issues/33180) @copilot resolve the merge conflicts on this branch.
- [#41568](https://github.com/sgl-project/sglang/issues/41568) [Bug] MiMo-V2 processor fails to register when optional TorchCodec is unavailable
- [#38971](https://github.com/sgl-project/sglang/issues/38971) [Bug][NPU] ForwardBatch use pin_mem cause dp-attn graph hang

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,999 · **Open issues:** 2,545 · **Last push:** <1h ago

On October 1, 2026, llama.cpp released several updates, including version b11309, which optimizes ALLREDUCE with support for a safe scatter mode. Additionally, version b11308 addressed a CLI download argument issue, while b11307 ensured the preservation of original batch order for speculative decoding layer inputs. Noteworthy merged features include enhancements in batch processing, proper KV handling during training, and the addition of support for dflash in conversion and feature extraction tasks. A significant new issue was reported, highlighting a feature request to improve security against prompt injection attacks, reflecting ongoing concerns in the AI ecosystem.

#### 🚀 New Releases
- [b11309](https://github.com/ggml-org/llama.cpp/releases/tag/b11309) b11309
- [b11308](https://github.com/ggml-org/llama.cpp/releases/tag/b11308) b11308
- [b11307](https://github.com/ggml-org/llama.cpp/releases/tag/b11307) b11307
- [b11306](https://github.com/ggml-org/llama.cpp/releases/tag/b11306) b11306
- [b11304](https://github.com/ggml-org/llama.cpp/releases/tag/b11304) b11304
- [b11303](https://github.com/ggml-org/llama.cpp/releases/tag/b11303) b11303
- [b11302](https://github.com/ggml-org/llama.cpp/releases/tag/b11302) b11302
- [b11301](https://github.com/ggml-org/llama.cpp/releases/tag/b11301) b11301
- [b11299](https://github.com/ggml-org/llama.cpp/releases/tag/b11299) b11299
- [b11298](https://github.com/ggml-org/llama.cpp/releases/tag/b11298) b11298

#### ✅ Merged PRs
- [#29765](https://github.com/ggml-org/llama.cpp/pull/29765) ggml-opencl : replace alloca() with std::vector
- [#29683](https://github.com/ggml-org/llama.cpp/pull/29683) cuda: guard the iq4_nl dequantize row kernel against short rows
- [#29757](https://github.com/ggml-org/llama.cpp/pull/29757) Hexagon: optimize ALLREDUCE with support for safe scatter mode
- [#28977](https://github.com/ggml-org/llama.cpp/pull/28977) args: fix cli download mmproj arg
- [#29019](https://github.com/ggml-org/llama.cpp/pull/29019) llama : preserve original batch order for speculative decoding layer inputs
- [#29724](https://github.com/ggml-org/llama.cpp/pull/29724) test-llama-archs : toggle causal_attn to catch graph shape changes
- [#28324](https://github.com/ggml-org/llama.cpp/pull/28324) convert: fix LoRA conversion crash for Qwen3.5 V-head reorder
- [#28520](https://github.com/ggml-org/llama.cpp/pull/28520) llama: properly handle KV on training
- [#29601](https://github.com/ggml-org/llama.cpp/pull/29601) batch: migrate the rest of examples to llama_batch_ext
- [#27773](https://github.com/ggml-org/llama.cpp/pull/27773) add GLM-5.3-Flash (GLM5-Next) support
- [#29745](https://github.com/ggml-org/llama.cpp/pull/29745) glm5-next: fix indexer scatter data race in the sparse mask
- [#29384](https://github.com/ggml-org/llama.cpp/pull/29384) Ggml integer overflow
- [#29747](https://github.com/ggml-org/llama.cpp/pull/29747) codeowners : remove former ZenDNN owner
- [#29722](https://github.com/ggml-org/llama.cpp/pull/29722) cli: exit on stdin EOF and drop the console wide Ctrl+C broadcast
- [#29604](https://github.com/ggml-org/llama.cpp/pull/29604) SYCL: reduce tensor allreduce sync with pinned host buffers
- [#29650](https://github.com/ggml-org/llama.cpp/pull/29650) mimo : support dflash (convert + feature extraction)
- [#29574](https://github.com/ggml-org/llama.cpp/pull/29574) jinja : support coerced array attributes
- [#29663](https://github.com/ggml-org/llama.cpp/pull/29663) ggml-et : remove useless alloca()
- [#29744](https://github.com/ggml-org/llama.cpp/pull/29744) ci: fix Models Backend by shortening the hrm_text fixture
- [#29599](https://github.com/ggml-org/llama.cpp/pull/29599) llama: llama_prefetch_rows
- [#29675](https://github.com/ggml-org/llama.cpp/pull/29675) ggml : add BF16 unary, GLU, binary and scale ops (CPU, CUDA)
- [#28937](https://github.com/ggml-org/llama.cpp/pull/28937) cpu: accept BF16 in src1 of mul_mat
- [#29558](https://github.com/ggml-org/llama.cpp/pull/29558) model-conversion : add --add-bos to run org model script
- [#29644](https://github.com/ggml-org/llama.cpp/pull/29644) ui : shared model display primitives
- [#27959](https://github.com/ggml-org/llama.cpp/pull/27959) ui : model download pipeline
- [#27957](https://github.com/ggml-org/llama.cpp/pull/27957) ui : model memory-fit estimation
- [#27947](https://github.com/ggml-org/llama.cpp/pull/27947) ui : Hugging Face Hub data layer
- [#27946](https://github.com/ggml-org/llama.cpp/pull/27946) ui : model id grammar for sidecars, quants and capability parsing
- [#29582](https://github.com/ggml-org/llama.cpp/pull/29582) ui : type-safe API types, fetch helpers and download-ready models store plumbing
- [#28381](https://github.com/ggml-org/llama.cpp/pull/28381) openvino: serve GET_ROWS on a weight view from the base Constant
- [#29712](https://github.com/ggml-org/llama.cpp/pull/29712) ci: fix Fusion / metal by adding glm5-next to MTL.csv
- [#29508](https://github.com/ggml-org/llama.cpp/pull/29508) musa: define __CUDA_ARCH__ and fix the q8_0 dequantization kernel
- [#29651](https://github.com/ggml-org/llama.cpp/pull/29651) ci : add models backend check
- [#29669](https://github.com/ggml-org/llama.cpp/pull/29669) vendor: update BoringSSL to 0.20260929.0
- [#29637](https://github.com/ggml-org/llama.cpp/pull/29637) ggml-zdnn: impl buffer reset, fix memory leaks

#### 🐛 New Issues
- [#29758](https://github.com/ggml-org/llama.cpp/issues/29758) Feature Request: Improve Security against Prompt Injection attacks `enhancement` 💬6
- [#29771](https://github.com/ggml-org/llama.cpp/issues/29771) Eval bug: Metal aborts during long generation in ggml_metal_buffer_get_tensor `bug-unconfirmed` 💬2
- [#29759](https://github.com/ggml-org/llama.cpp/issues/29759) Misc. bug: 76a5bc86d1bdfae96feccdc7a41fea535e792e6e breaks symlinked cache dirs for RPC `bug-unconfirmed` 💬2
- [#29764](https://github.com/ggml-org/llama.cpp/issues/29764) Vulkan: ggml_vk_get_device publishes a device before building it, unlocked: concurrent first inits abort (vkCreateFence: Invalid device), and a failed build stays in the slot 💬1
- [#29727](https://github.com/ggml-org/llama.cpp/issues/29727) Misc. bug: Receives tool list, but says zero tools `bug-unconfirmed` 💬1
- [#29735](https://github.com/ggml-org/llama.cpp/issues/29735) CLIP vision buffer is locked to the warmup size — larger images force a slow reallocation, aborting under GGML_SCHED_DEBUG_REALLOC=1 `bug-unconfirmed` 💬1
- [#29718](https://github.com/ggml-org/llama.cpp/issues/29718) Eval bug: llama_memory_seq_cp: cross-stream copy with a partial range hits GGML_ASSERT `bug-unconfirmed` 💬1
- [#29704](https://github.com/ggml-org/llama.cpp/issues/29704) Eval bug: llama-adapter: 5 of 6 accessors crash on a NULL adapter `bug-unconfirmed` 💬1
- [#29695](https://github.com/ggml-org/llama.cpp/issues/29695) Eval bug: Mirostat-1.0: int() conversion of a NaN k is undefined behaviour (llama-sampler.cpp:2481) `bug-unconfirmed` 💬1
- [#29774](https://github.com/ggml-org/llama.cpp/issues/29774) Eval bug: Flash attention on CPU (one-chunk) overflows to inf/NaN, has F16 accumulator instead of F32. `bug-unconfirmed`
- [#29760](https://github.com/ggml-org/llama.cpp/issues/29760) Feature Request: Split --reranking into two flags for router/model `enhancement`
- [#29694](https://github.com/ggml-org/llama.cpp/issues/29694) Misc. bug: /rerank: negative top_n returns HTTP 500 (vector::_M_default_append) `bug-unconfirmed`
- [#29690](https://github.com/ggml-org/llama.cpp/issues/29690) Eval bug: json-schema-to-grammar: unbounded schema nesting still crashes llama-server (CVE-2026-52130) at 19e28a277 `bug-unconfirmed`
- [#29686](https://github.com/ggml-org/llama.cpp/issues/29686) Eval bug: dist sampler aborts on a NaN logit (assert(found) at llama-sampler.cpp:1211) — still present at d1d3c3396 `bug-unconfirmed`
- [#29729](https://github.com/ggml-org/llama.cpp/issues/29729) Eval bug: llama_memory_seq_div: d=0 divides by zero in the base KV cache (SIGFPE) `bug-unconfirmed`
- [#29728](https://github.com/ggml-org/llama.cpp/issues/29728) Eval bug: peg-parser: nested JSON input overflows the parser stack during chat parsing `bug-unconfirmed`
- [#29726](https://github.com/ggml-org/llama.cpp/issues/29726) Eval bug: llama_state_save_file: aborts on a shared recurrent cell with different rollback indices `bug-unconfirmed`
- [#29725](https://github.com/ggml-org/llama.cpp/issues/29725) Misc. bug: llama-grammar: deeply nested parentheses in a GBNF grammar overflow the stack `bug-unconfirmed`
- [#29723](https://github.com/ggml-org/llama.cpp/issues/29723) Eval bug: llama_state_seq_load_file: crafted cell_count in a state blob aborts a recurrent model `bug-unconfirmed`
- [#29721](https://github.com/ggml-org/llama.cpp/issues/29721) Eval bug: llama_memory_seq_div: d=0 divides by zero on a recurrent model (SIGFPE) `bug-unconfirmed`
- [#29719](https://github.com/ggml-org/llama.cpp/issues/29719) Eval bug: llama_state_set_data: duplicate seq_id in a state blob hits the seq_add assert `bug-unconfirmed`
- [#29716](https://github.com/ggml-org/llama.cpp/issues/29716) Misc. bug: ggml_opt_fit: constant optimizer params callback reads 28 bytes from an 8-byte epoch slot `bug-unconfirmed`
- [#29715](https://github.com/ggml-org/llama.cpp/issues/29715) Eval bug: llama_sampler_accept: grammar sampler aborts on an inconsistent accept `bug-unconfirmed`
- [#29714](https://github.com/ggml-org/llama.cpp/issues/29714) Eval bug: llama-sampler: int() cast of a non-finite logit in partial_sort is UB (llama-sampler.cpp:155) `bug-unconfirmed`
- [#29713](https://github.com/ggml-org/llama.cpp/issues/29713) Eval bug: llama_tokenize: uncaught std::invalid_argument on malformed UTF-8 (terminate) `bug-unconfirmed`
- [#29711](https://github.com/ggml-org/llama.cpp/issues/29711) Eval bug: llama_model_n_head aborts on a vocab-only model (llama-hparams.cpp:55) `bug-unconfirmed`
- [#29710](https://github.com/ggml-org/llama.cpp/issues/29710) Eval bug: llama_vocab_is_control: out-of-bounds heap read on an out-of-range token id (llama-vocab.cpp:3164) `bug-unconfirmed`
- [#29709](https://github.com/ggml-org/llama.cpp/issues/29709) Eval bug: llama_set_state_data: heap-buffer-overflow read on a hostile state buffer (llama-io.cpp:16) `bug-unconfirmed`
- [#29708](https://github.com/ggml-org/llama.cpp/issues/29708) Eval bug: llama_state_get_data/set_data segfault on a NULL pointer (no check at the public entry) `bug-unconfirmed`
- [#29706](https://github.com/ggml-org/llama.cpp/issues/29706) Misc. bug: jinja: nested range(2) loops cause O(2^N) iterations with no cap (remote DoS) `bug-unconfirmed`
- [#29703](https://github.com/ggml-org/llama.cpp/issues/29703) Eval bug: llama-context: embeddings/logits accessors abort on "no data" in debug builds `bug-unconfirmed`
- [#29702](https://github.com/ggml-org/llama.cpp/issues/29702) Eval bug: llama_vocab_get_text/score/attr abort on an out-of-range token id (llama-vocab.cpp:4045) `bug-unconfirmed`
- [#29701](https://github.com/ggml-org/llama.cpp/issues/29701) Eval bug: llama_model_save_to_file crashes on CPU_REPACK tensors (NULL fn-ptr in ggml_backend_tensor_get) `bug-unconfirmed`
- [#29700](https://github.com/ggml-org/llama.cpp/issues/29700) Eval bug: llama_state_seq_load_file: out-of-range dest_seq_id aborts the process (llama-kv-cache.cpp:2143) `bug-unconfirmed`
- [#29697](https://github.com/ggml-org/llama.cpp/issues/29697) Eval bug: Mirostat-v2: discrete_distribution aborts on a NaN probability (llama-sampler.cpp:244) `bug-unconfirmed`
- [#29731](https://github.com/ggml-org/llama.cpp/issues/29731) Misc. bug: add_bos_token / add_eos_token is missing after converting PLaMo-3 models to GGUF `bug-unconfirmed`
- [#29691](https://github.com/ggml-org/llama.cpp/issues/29691) Misc. Server backend and UI not syncing: `bug-unconfirmed`
- [#29689](https://github.com/ggml-org/llama.cpp/issues/29689) Misc. bug: llama-server --sleep-idle-seconds: a request that arrives as the server falls asleep is never processed

#### 🔒 Closed Issues
- [#27046](https://github.com/ggml-org/llama.cpp/issues/27046) Eval bug: SIGSEGV (null-ptr jump) on GPU offload — resolve_fused_ops false-positives on Intel Lunar Lake iGPU (Arc 140V), reproduces on unrelated architectures (gemma4, qwen2)
- [#26987](https://github.com/ggml-org/llama.cpp/issues/26987) Qwen3-Coder parser: lazy tool-call trigger never fires when model skips both <tool_call> and <function=
- [#27174](https://github.com/ggml-org/llama.cpp/issues/27174) Completions endpoint: logprobs returned for generated tokens only — no prompt/echo logprobs, silently breaks all loglikelihood evals (lm-eval etc.)
- [#26963](https://github.com/ggml-org/llama.cpp/issues/26963) Misc. bug: Pre-built ROCm Windows binary crashes with "cudaMemGetInfo failed"
- [#29664](https://github.com/ggml-org/llama.cpp/issues/29664) Misc. bug: windows: when the simple input reader reads EOF on stdin, all processes in the console are sent ctrl+c
- [#29392](https://github.com/ggml-org/llama.cpp/issues/29392) Eval bug: Repeats the same token or generates garbage on any models.
- [#27098](https://github.com/ggml-org/llama.cpp/issues/27098) Feature Request:
- [#27211](https://github.com/ggml-org/llama.cpp/issues/27211) Opt-in codec for recurrent-state context checkpoints (2x less host RAM, off by default)
- [#27158](https://github.com/ggml-org/llama.cpp/issues/27158) support MiniMax-Music3
- [#27162](https://github.com/ggml-org/llama.cpp/issues/27162) Misc. bug: OOM being displayed as """layer 0 is assigned to device CPU but fused Gated Delta Net (chunked) is assigned to device CUDA0 (usually due to missing support)""" instead of correctly erroring out.
- [#27185](https://github.com/ggml-org/llama.cpp/issues/27185) Eval bug: HIP/ROCm slot admitted but never dispatched to a prefill batch (n_prompt_tokens_processed stuck at 0) while a concurrent slot processes normally
- [#27222](https://github.com/ggml-org/llama.cpp/issues/27222) [Bug]: Granite4 Vision mmproj with downsample_window_side=0 crashes at load (integer division by zero in warmup graph build)
- [#27259](https://github.com/ggml-org/llama.cpp/issues/27259) gguf : GGML_PAD difference underflows to ~SIZE_MAX for near-SIZE_MAX tensor sizes
- [#21125](https://github.com/ggml-org/llama.cpp/issues/21125) Compile bug: convert_lora_to_gguf.py fails for Qwen3.5 LoRA at _reorder_v_heads -> LoraTorchTensor.reshape() with NotImplementedError
- [#29383](https://github.com/ggml-org/llama.cpp/issues/29383) Misc. bug: uncaught integer overflows during model loading
- [#29665](https://github.com/ggml-org/llama.cpp/issues/29665) Eval bug: GGUF reader loads an out-of-range gguf_type from an untrusted file before validating it (ggml/src/gguf.cpp:576)
- [#29718](https://github.com/ggml-org/llama.cpp/issues/29718) Eval bug: llama_memory_seq_cp: cross-stream copy with a partial range hits GGML_ASSERT
- [#29704](https://github.com/ggml-org/llama.cpp/issues/29704) Eval bug: llama-adapter: 5 of 6 accessors crash on a NULL adapter
- [#29695](https://github.com/ggml-org/llama.cpp/issues/29695) Eval bug: Mirostat-1.0: int() conversion of a NaN k is undefined behaviour (llama-sampler.cpp:2481)
- [#27923](https://github.com/ggml-org/llama.cpp/issues/27923) Misc. bug: ggml_cuda_init at boot races nvidia-uvm readiness — silent CPU fallback for systemd services (no retry, /health stays OK, --ngl silently ignored)
- [#28950](https://github.com/ggml-org/llama.cpp/issues/28950) Misc. bug: llama download -hf repo:model does not download mmproject
- [#29694](https://github.com/ggml-org/llama.cpp/issues/29694) Misc. bug: /rerank: negative top_n returns HTTP 500 (vector::_M_default_append)
- [#29690](https://github.com/ggml-org/llama.cpp/issues/29690) Eval bug: json-schema-to-grammar: unbounded schema nesting still crashes llama-server (CVE-2026-52130) at 19e28a277
- [#29686](https://github.com/ggml-org/llama.cpp/issues/29686) Eval bug: dist sampler aborts on a NaN logit (assert(found) at llama-sampler.cpp:1211) — still present at d1d3c3396
- [#29684](https://github.com/ggml-org/llama.cpp/issues/29684) Eval bug: Out-of-range token id passed to llama_vocab_get_attr() terminates the process (llama-vocab.cpp:3190)
- [#29661](https://github.com/ggml-org/llama.cpp/issues/29661) Eval bug: Vocab load aborts on duplicated token text (GGML_ASSERT at llama-vocab.cpp:2519)
- [#29729](https://github.com/ggml-org/llama.cpp/issues/29729) Eval bug: llama_memory_seq_div: d=0 divides by zero in the base KV cache (SIGFPE)
- [#29728](https://github.com/ggml-org/llama.cpp/issues/29728) Eval bug: peg-parser: nested JSON input overflows the parser stack during chat parsing
- [#29726](https://github.com/ggml-org/llama.cpp/issues/29726) Eval bug: llama_state_save_file: aborts on a shared recurrent cell with different rollback indices
- [#29725](https://github.com/ggml-org/llama.cpp/issues/29725) Misc. bug: llama-grammar: deeply nested parentheses in a GBNF grammar overflow the stack
- [#29723](https://github.com/ggml-org/llama.cpp/issues/29723) Eval bug: llama_state_seq_load_file: crafted cell_count in a state blob aborts a recurrent model
- [#29721](https://github.com/ggml-org/llama.cpp/issues/29721) Eval bug: llama_memory_seq_div: d=0 divides by zero on a recurrent model (SIGFPE)
- [#29719](https://github.com/ggml-org/llama.cpp/issues/29719) Eval bug: llama_state_set_data: duplicate seq_id in a state blob hits the seq_add assert
- [#29716](https://github.com/ggml-org/llama.cpp/issues/29716) Misc. bug: ggml_opt_fit: constant optimizer params callback reads 28 bytes from an 8-byte epoch slot
- [#29715](https://github.com/ggml-org/llama.cpp/issues/29715) Eval bug: llama_sampler_accept: grammar sampler aborts on an inconsistent accept
- [#29714](https://github.com/ggml-org/llama.cpp/issues/29714) Eval bug: llama-sampler: int() cast of a non-finite logit in partial_sort is UB (llama-sampler.cpp:155)
- [#29713](https://github.com/ggml-org/llama.cpp/issues/29713) Eval bug: llama_tokenize: uncaught std::invalid_argument on malformed UTF-8 (terminate)
- [#29711](https://github.com/ggml-org/llama.cpp/issues/29711) Eval bug: llama_model_n_head aborts on a vocab-only model (llama-hparams.cpp:55)
- [#29710](https://github.com/ggml-org/llama.cpp/issues/29710) Eval bug: llama_vocab_is_control: out-of-bounds heap read on an out-of-range token id (llama-vocab.cpp:3164)
- [#29709](https://github.com/ggml-org/llama.cpp/issues/29709) Eval bug: llama_set_state_data: heap-buffer-overflow read on a hostile state buffer (llama-io.cpp:16)
- [#29708](https://github.com/ggml-org/llama.cpp/issues/29708) Eval bug: llama_state_get_data/set_data segfault on a NULL pointer (no check at the public entry)
- [#29706](https://github.com/ggml-org/llama.cpp/issues/29706) Misc. bug: jinja: nested range(2) loops cause O(2^N) iterations with no cap (remote DoS)
- [#29703](https://github.com/ggml-org/llama.cpp/issues/29703) Eval bug: llama-context: embeddings/logits accessors abort on "no data" in debug builds
- [#29702](https://github.com/ggml-org/llama.cpp/issues/29702) Eval bug: llama_vocab_get_text/score/attr abort on an out-of-range token id (llama-vocab.cpp:4045)
- [#29701](https://github.com/ggml-org/llama.cpp/issues/29701) Eval bug: llama_model_save_to_file crashes on CPU_REPACK tensors (NULL fn-ptr in ggml_backend_tensor_get)
- [#29700](https://github.com/ggml-org/llama.cpp/issues/29700) Eval bug: llama_state_seq_load_file: out-of-range dest_seq_id aborts the process (llama-kv-cache.cpp:2143)
- [#29697](https://github.com/ggml-org/llama.cpp/issues/29697) Eval bug: Mirostat-v2: discrete_distribution aborts on a NaN probability (llama-sampler.cpp:244)

### Ollama (`ollama/ollama`)

**Stars:** 181,979 · **Open issues:** 4,123 · **Last push:** 5h ago

On October 1, 2026, Ollama saw no new releases but made progress with the merging of a documentation update for the System One API, specifically PR #18702. Among newly reported issues, the most notable is #18716, which highlights an error when pulling models due to an unacceptable redirect target. Additional concerns include discrepancies in criteria descriptions with the System One API in issue #18718, and a regression in structured outputs affecting JSON schema property order noted in #18717. Also worth mentioning is the potential issue with Windows auto-update leaving a temporary CUDA DLL file, causing fallback problems, as detailed in issue #18712. Overall, it was a day of routine maintenance with a focus on improving documentation and addressing emerging bugs.

#### ✅ Merged PRs
- [#18702](https://github.com/ollama/ollama/pull/18702) docs: document System One API

#### 🐛 New Issues
- [#18716](https://github.com/ollama/ollama/issues/18716) Error pulling models: Error: redirect target not allowed `needs more info` 💬1
- [#18718](https://github.com/ollama/ollama/issues/18718) /v1/systemone rejects object-valued criteria descriptions accepted by the reference System One API
- [#18717](https://github.com/ollama/ollama/issues/18717) Structured outputs: JSON schema property order lost on the native llama-server chat path (regression of #7978)
- [#18714](https://github.com/ollama/ollama/issues/18714) Model support: Bongard (T5Gemma2) for /v1/systemone
- [#18715](https://github.com/ollama/ollama/issues/18715) deepseek-v4.1-flash:cloud: text right before a tool call sometimes loses a space ("harbor masterNPC.")
- [#18712](https://github.com/ollama/ollama/issues/18712) Windows auto-update can leave cuda_v12\ggml-cuda.dll as .tmp, causing 0 B VRAM / CPU fallback

#### 🔒 Closed Issues
- [#18527](https://github.com/ollama/ollama/issues/18527) [Cloud] deepseek-v4.1-flash silently discards all image input while advertising `vision` in capabilities
- [#18099](https://github.com/ollama/ollama/issues/18099) llama-server malloc heap grows with request volume on macOS/Metal: 6.5 GB paged to swap while KV cache stays resident (0.32.15, Apple Silicon)
- [#18559](https://github.com/ollama/ollama/issues/18559) Why does Ollama encounter the following error when using gemma4:31b-mlx for online searching?
- [#18595](https://github.com/ollama/ollama/issues/18595) macOS 0.33.0: no garbage collection for orphaned blobs — found a live 21GB orphan via manifest audit
- [#18370](https://github.com/ollama/ollama/issues/18370) Runner wedges in Vulkan ggml backend: one thread 100% CPU, GPU idle, generations never complete (0.24.0, AMD UMA APU)
- [#18361](https://github.com/ollama/ollama/issues/18361) install.sh should not use /usr/share/ollama as home directory for the new ollama user
- [#18474](https://github.com/ollama/ollama/issues/18474) Extremely slow response times when using Claude integration
- [#18412](https://github.com/ollama/ollama/issues/18412) Linux hybrid graphics (Intel Raptor Lake-S iGPU + NVIDIA RTX 4080): llama-server crashes with SIGABRT during backend/device loading

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,949 · **Open issues:** 5,480 · **Last push:** <1h ago

Today, LiteLLM released version v1.105.0-dev.1, with all Docker images signed using cosign for added security. Notable merged features included the addition of identity registration and dashboard controls for agents, and the implementation of a native ROI calculator for gateway spend. Additionally, there were several critical fixes, such as improvements to the Azure storage and transcription modules, and adjustments to ensure proper billing for custom-priced deployments. However, a significant new issue has emerged regarding access to Gemini models through the SDK, highlighting ongoing challenges within the platform.

#### 🚀 New Releases
- [v1.105.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-dev.1) v1.105.0-dev.1

#### ✅ Merged PRs
- [#43961](https://github.com/BerriAI/litellm/pull/43961) chore(deps): bump gitpython and tornado, extend diskcache osv ignore to Nov 1
- [#43956](https://github.com/BerriAI/litellm/pull/43956) fix(guardrails): treat an unknown straiker api_version as unset instead of skipping the guardrail
- [#43914](https://github.com/BerriAI/litellm/pull/43914) fix(azure_storage): name Data Lake objects without base64 padding or slashes
- [#43934](https://github.com/BerriAI/litellm/pull/43934) fix(anthropic): forward the dangerous-tool-use beta to Azure AI Foundry
- [#43950](https://github.com/BerriAI/litellm/pull/43950) chore(cost-map): sync openrouter prices from the models API
- [#43770](https://github.com/BerriAI/litellm/pull/43770) fix(grayswan): send request conversation and tool calls to post-call monitor
- [#43951](https://github.com/BerriAI/litellm/pull/43951) fix(wandb): set supports_vision true on GLM-5.3-Flash
- [#43952](https://github.com/BerriAI/litellm/pull/43952) test(proxy): scope user_api_key_auth overrides in proxy_server tests
- [#43662](https://github.com/BerriAI/litellm/pull/43662) fix(anthropic): backport #42152 and #42288 to stable/1.103.x
- [#43897](https://github.com/BerriAI/litellm/pull/43897) fix(proxy): backport #40541, #43642, and #43656 to stable/1.103.x for v1.103.2
- [#43938](https://github.com/BerriAI/litellm/pull/43938) test(ci): refresh qualified retired OpenAI fixtures
- [#43890](https://github.com/BerriAI/litellm/pull/43890) fix(router): bill service tiers at catalog rates for custom-priced deployments
- [#43889](https://github.com/BerriAI/litellm/pull/43889) feat(lens): analyze agent activity with a separate worker
- [#43903](https://github.com/BerriAI/litellm/pull/43903) fix(packaging): keep wheel paths under Windows MAX_PATH for Store Python
- [#43921](https://github.com/BerriAI/litellm/pull/43921) test(bedrock): restore the AWS env after a failed live call in the auth tests
- [#43364](https://github.com/BerriAI/litellm/pull/43364) refactor(proxy): answer every team access check with TeamAccess.allows
- [#43928](https://github.com/BerriAI/litellm/pull/43928) feat(tracing): store spend in ClickHouse automatically
- [#43723](https://github.com/BerriAI/litellm/pull/43723) feat(agents): add identity registration and dashboard controls
- [#43917](https://github.com/BerriAI/litellm/pull/43917) fix(transcription): honor base_url alias for Groq Whisper and report it as the api base
- [#43906](https://github.com/BerriAI/litellm/pull/43906) fix(proxy): register a UI-configured arize callback next to otel under OTel v2
- [#43896](https://github.com/BerriAI/litellm/pull/43896) fix(proxy): relay Azure passthrough body model groups through the router
- [#43913](https://github.com/BerriAI/litellm/pull/43913) feat(ui): adopt the new LiteLLM logo and monogram
- [#43080](https://github.com/BerriAI/litellm/pull/43080) test(s3_v2): pin async 5xx retry through the production AsyncHTTPHandler
- [#43902](https://github.com/BerriAI/litellm/pull/43902) test(e2e): repair completion, SAIL, and spend-log fixtures
- [#43669](https://github.com/BerriAI/litellm/pull/43669) feat(proxy): add native ROI calculator for gateway spend vs merged PRs
- [#43915](https://github.com/BerriAI/litellm/pull/43915) feat(tracing): port OTLP ingestion to current trace foundation
- [#42998](https://github.com/BerriAI/litellm/pull/42998) fix(proxy): delete large teams without per-member transaction fan-out
- [#43599](https://github.com/BerriAI/litellm/pull/43599) fix(hosted_vllm): keep reasoning_content on replayed assistant messages
- [#43722](https://github.com/BerriAI/litellm/pull/43722) feat(agents): authenticate Entra identities and delegated requests
- [#43829](https://github.com/BerriAI/litellm/pull/43829) fix(bedrock): keep applicable beta headers
- [#43901](https://github.com/BerriAI/litellm/pull/43901) fix(traces): correct ClickHouse rollup partitioning, dedupe keys, and retention changes
- [#43278](https://github.com/BerriAI/litellm/pull/43278) feat(otel v2): excluded_services opt-out for datastore spans on tenant destinations
- [#43891](https://github.com/BerriAI/litellm/pull/43891) feat(ui): agent traces tab on logs with timeline and otel setup guide
- [#43819](https://github.com/BerriAI/litellm/pull/43819) feat(traces): add Rust storage foundation
- [#43822](https://github.com/BerriAI/litellm/pull/43822) chore(release): sync stable/1.101.x to v1.101.3
- [#43629](https://github.com/BerriAI/litellm/pull/43629) fix(responses): scan and mask top-level instructions with guardrails
- [#41228](https://github.com/BerriAI/litellm/pull/41228) fix(ui): render access group MCP and agent selections as wrapping chips
- [#43855](https://github.com/BerriAI/litellm/pull/43855) fix(proxy): strip caller credentials from websocket passthrough
- [#43721](https://github.com/BerriAI/litellm/pull/43721) feat(agents): enforce authoritative agent permissions
- [#43824](https://github.com/BerriAI/litellm/pull/43824) chore(release): sync stable/1.103.x to v1.103.1
- [#43823](https://github.com/BerriAI/litellm/pull/43823) chore(release): sync stable/1.102.x to v1.102.2
- [#37889](https://github.com/BerriAI/litellm/pull/37889) fix(ui): right-align money and count columns across tables
- [#43821](https://github.com/BerriAI/litellm/pull/43821) chore(release): sync stable/1.100.x to v1.100.4
- [#43635](https://github.com/BerriAI/litellm/pull/43635) fix(proxy): keep request-body credentials out of stored spend-log requests
- [#43876](https://github.com/BerriAI/litellm/pull/43876) feat(pricing): add vertex_ai gemini-3.8 flash tts rows
- [#43637](https://github.com/BerriAI/litellm/pull/43637) fix(cost_calculator): stop copying optional_params into response hidden params
- [#43781](https://github.com/BerriAI/litellm/pull/43781) fix(router): strip encrypted reasoning the pinned deployment cannot decrypt
- [#43870](https://github.com/BerriAI/litellm/pull/43870) fix(proxy): attribute completed batch cost rows to /batches in daily activity
- [#43811](https://github.com/BerriAI/litellm/pull/43811) chore(cost-map): add fireworks priority prices for ember-1, nemotron and glm 5.3 us rows
- [#43869](https://github.com/BerriAI/litellm/pull/43869) chore(cost-map): add openai gpt-image-2.5 batch prices from the pricing page
- [#43871](https://github.com/BerriAI/litellm/pull/43871) refactor(rust): centralize Python bridge execution wrappers
- [#43816](https://github.com/BerriAI/litellm/pull/43816) feat: agent tracing - OTLP ingest, ClickHouse store, Logs trace view
- [#43764](https://github.com/BerriAI/litellm/pull/43764) fix(cost_calculator): bill ultrafast prompts above 272k at the ultrafast long-context rates
- [#43857](https://github.com/BerriAI/litellm/pull/43857) chore(model_prices): add Gemini Veo, Mistral and Azure Claude 4.5 deprecation dates
- [#43847](https://github.com/BerriAI/litellm/pull/43847) test(router): settle the shared logging worker before recording shadow callbacks
- [#43830](https://github.com/BerriAI/litellm/pull/43830) refactor: clean up fresh tech debt from 2026-09-29
- [#43778](https://github.com/BerriAI/litellm/pull/43778) fix(bedrock): add beta header for output config in message
- [#43814](https://github.com/BerriAI/litellm/pull/43814) fix(router): carry per-request routing reads on context variables instead of public method kwargs
- [#43815](https://github.com/BerriAI/litellm/pull/43815) perf(router): honour the cooldown read interval in the routing prefetch
- [#43825](https://github.com/BerriAI/litellm/pull/43825) chore(release): sync rc/1.104.0 to v1.104.0-rc.2
- [#43783](https://github.com/BerriAI/litellm/pull/43783) fix(params): categorize internal param appropriately to prevent leaking into request
- [#43785](https://github.com/BerriAI/litellm/pull/43785) test(bedrock): accept regional aliases that inherit Converse routing
- [#43788](https://github.com/BerriAI/litellm/pull/43788) test(ci): repair MCP Responses and budget fixtures
- [#43810](https://github.com/BerriAI/litellm/pull/43810) fix(ui): keep MCP permissions visible after key, team and MCP server saves
- [#43676](https://github.com/BerriAI/litellm/pull/43676) test(ci): refresh retired OpenAI tool-call models
- [#43809](https://github.com/BerriAI/litellm/pull/43809) fix(cost-map): add deprecation_date to two together_ai nvidia rows
- [#43656](https://github.com/BerriAI/litellm/pull/43656) fix(proxy): look up hashed key names with two spend log rows per key
- [#42436](https://github.com/BerriAI/litellm/pull/42436) fix(ui): surface x-litellm-call-id in Logs search, table and drawer
- [#43792](https://github.com/BerriAI/litellm/pull/43792) chore(deps): bump pyjwt, moment and brace-expansion to clear osv-scan

#### 🐛 New Issues
- [#43828](https://github.com/BerriAI/litellm/issues/43828) [Bug]: Gemini models can't be accessed through SDK `bug` `llm translation` 💬2
- [#43826](https://github.com/BerriAI/litellm/issues/43826) [Bug]: jev_classifier_config.api_key does not resolve os.environ/ references 💬2
- [#43868](https://github.com/BerriAI/litellm/issues/43868) [Bug]: Custom pricing silently bills ultrafast at standard rates despite published tier prices `llm translation` 💬1
- [#43910](https://github.com/BerriAI/litellm/issues/43910) [Bug]: GPT-6.1 Sol forwards unsupported none/minimal reasoning effort on Chat Completions and Responses `llm translation` 💬1
- [#43851](https://github.com/BerriAI/litellm/issues/43851) [Bug]: pip install litellm still exceeds Windows MAX_PATH under Microsoft Store Python 💬1
- [#43840](https://github.com/BerriAI/litellm/issues/43840) Add "kimi-k2.5" in "model_prices_and_context_window.json" 💬1
- [#43867](https://github.com/BerriAI/litellm/issues/43867) [Bug]: default response format breaks gpt-realtime and is not overwritable `bug` `llm translation` 💬1
- [#43858](https://github.com/BerriAI/litellm/issues/43858) Add "tinker" in "model_prices_and_context_window.json" 💬1
- [#43947](https://github.com/BerriAI/litellm/issues/43947) [Bug]: After a streaming fallback, every chunk's _hidden_params["response_cost"] is 0.0 `llm translation`
- [#43945](https://github.com/BerriAI/litellm/issues/43945) [Bug]: Sync Router streaming fallback re-runs the failing group instead of falling back `llm translation`
- [#43946](https://github.com/BerriAI/litellm/issues/43946) [Bug]: Streamed usage.cost is omitted when the computed cost is 0, while the non-streamed call reports 0.0
- [#43922](https://github.com/BerriAI/litellm/issues/43922) [Bug]: store_model_in_db credential sync is O(n²) and blocks the event loop for 10s+ per reload with thousands of credentials
- [#43925](https://github.com/BerriAI/litellm/issues/43925) [Feature]: Enable the new chatgpt subscription login `enhancement` `llm translation`
- [#43863](https://github.com/BerriAI/litellm/issues/43863) Vertex/Gemini `safetyRatings` empty by default; per-chunk streaming scores possible with explicit `safety_settings` `llm translation`
- [#43856](https://github.com/BerriAI/litellm/issues/43856) [Feature]: Add reranking capabilities for Scaleway `enhancement`
- [#43853](https://github.com/BerriAI/litellm/issues/43853) Question: roadmap for openai>=3.0.0 support (current pin is openai>=2.20.0,<3.0.0) `llm translation`
- [#43850](https://github.com/BerriAI/litellm/issues/43850) [Documentation-Update]: The `completion()` related parameters should list the `drop_params` in the LiteLLM specific section `bug`
- [#43848](https://github.com/BerriAI/litellm/issues/43848) Responses→Chat translation emits assistant messages with empty text content items, rejected by Z.ai (error 1210) — breaks session resume `llm translation`
- [#43845](https://github.com/BerriAI/litellm/issues/43845) [Bug]: `bug` `llm translation`
- [#43843](https://github.com/BerriAI/litellm/issues/43843) Add "glm-5.3" in "model_prices_and_context_window.json"
- [#43842](https://github.com/BerriAI/litellm/issues/43842) Add "glm-5.3" in "model_prices_and_context_window.json"
- [#43841](https://github.com/BerriAI/litellm/issues/43841) Add "qwen3.8-27b" in "model_prices_and_context_window.json"
- [#43834](https://github.com/BerriAI/litellm/issues/43834) [Bug]: Terraform litellm_key cannot set the proxy key rotation schedule
- [#43817](https://github.com/BerriAI/litellm/issues/43817) [Bug]: Responses bridge drops url_citation annotations when stream=True `bug` `llm translation`
- [#43805](https://github.com/BerriAI/litellm/issues/43805) [Bug]: `ValueError: not enough values to unpack` in `get_image_dimensions` on failed URL fetches and raw base64 strings `llm translation`
- [#43804](https://github.com/BerriAI/litellm/issues/43804) [Bug]: Bedrock Mantle web_search tool returns status=failed when using OIDC/web identity auth (session policy missing bedrock-websearch:* actions) `llm translation`
- [#43797](https://github.com/BerriAI/litellm/issues/43797) [Bug]: `TypeError: 'NoneType' object is not iterable` in `_redact_responses_api_output` and `_redact_responses_api_output_dict` when output is None

#### 🔒 Closed Issues
- [#13048](https://github.com/BerriAI/litellm/issues/13048) [Bug]: Cache of provider_specific_fields does not work
- [#31333](https://github.com/BerriAI/litellm/issues/31333) [Bug]: LiteLlm assumes Cerebras has complete OpenAI compatibility
- [#31050](https://github.com/BerriAI/litellm/issues/31050) [Bug]: MCP static_headers with os.environ/VAR are not resolved when saved via UI/DB
- [#31113](https://github.com/BerriAI/litellm/issues/31113) [Bug]: bedrock-mantle using IAM Role/Policy for proxy?
- [#41392](https://github.com/BerriAI/litellm/issues/41392) [Bug]: hosted_vllm drops reasoning_content from replayed assistant messages since 1.100.0
- [#31226](https://github.com/BerriAI/litellm/issues/31226) [Feature]: green-cost metrics with the Ecologits observabilty plugin for litellm proxy
- [#31320](https://github.com/BerriAI/litellm/issues/31320) [Feature]: Image editing support for VLLM
- [#31336](https://github.com/BerriAI/litellm/issues/31336) [Feature]: Add option to set priorityClassName to deployments from helm chart
- [#31337](https://github.com/BerriAI/litellm/issues/31337) llm_engineering
- [#31352](https://github.com/BerriAI/litellm/issues/31352) Enable Link-Time Optimization (LTO) and codegen-units = 1 for Release builds (and possibly other options)
- [#43868](https://github.com/BerriAI/litellm/issues/43868) [Bug]: Custom pricing silently bills ultrafast at standard rates despite published tier prices
- [#43851](https://github.com/BerriAI/litellm/issues/43851) [Bug]: pip install litellm still exceeds Windows MAX_PATH under Microsoft Store Python
- [#43858](https://github.com/BerriAI/litellm/issues/43858) Add "tinker" in "model_prices_and_context_window.json"

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,098 · **Open issues:** 1,152 · **Last push:** 1h ago

On October 1, 2026, there were no new releases for Unsloth, but several significant pull requests were merged. Notable updates include improvements to the Studio's handling of INT8 and MiniMax-H3 denoising processes during offloading, as well as enhancements to the model-config UI to avoid issues with unresponsive requests. There were also fixes for Qwen-Image-2.1 recompiles and the handling of frozen BatchNorm stats during LoRA training, addressing important stability concerns. Among the newly created issues, a severe regression was reported concerning studio pages generating from disk, leading to a significant drop in throughput since the latest update, highlighting the need for urgent attention.

#### ✅ Merged PRs
- [#12287](https://github.com/unslothai/unsloth/pull/12287) Studio: keep int8 / fp8 image transformers quantised when the load has to offload
- [#12368](https://github.com/unslothai/unsloth/pull/12368) Baseline the moved transformers 5.18.0 testing_utils polling-loop site after review
- [#12367](https://github.com/unslothai/unsloth/pull/12367) Studio frontend test: drain the previous runtime's writes before each reasoning-effort scenario
- [#12289](https://github.com/unslothai/unsloth/pull/12289) Studio: keep INT8 and compile on conventional video models when they have to offload
- [#12363](https://github.com/unslothai/unsloth/pull/12363) Model-config UI test: stop waiting on a request whose finish event never arrives
- [#12286](https://github.com/unslothai/unsloth/pull/12286) Studio: keep MiniMax-H3's int8 denoiser and compile when it has to offload
- [#12345](https://github.com/unslothai/unsloth/pull/12345) Studio video: keep an explicit fast LTX-2.3 single-file load resident when it fits
- [#12320](https://github.com/unslothai/unsloth/pull/12320) Build the marlin_gemm call from the op schema so packed INT4 inference works on vLLM 0.29
- [#12300](https://github.com/unslothai/unsloth/pull/12300) Studio: load downloaded tokenizers offline, size unsloth mirrors from the family table
- [#12214](https://github.com/unslothai/unsloth/pull/12214) fix(lora): preserve all active adapters with PEFT fallbacks
- [#12252](https://github.com/unslothai/unsloth/pull/12252) Unsloth Studio (AMD): run native image generation on an NVIDIA card next to ROCm torch
- [#12344](https://github.com/unslothai/unsloth/pull/12344) Keep masked head_dim 256 SDPA training off cuDNN attention on SM100 (torch 2.14 NaN grads)
- [#12310](https://github.com/unslothai/unsloth/pull/12310) Studio: let GGUF vision models see dark text in transparent images
- [#12357](https://github.com/unslothai/unsloth/pull/12357) scan_packages: refuse VCS, URL and local-path specs before pip download
- [#12299](https://github.com/unslothai/unsloth/pull/12299) Studio: load LTX-2 and LTX-2.3 on the pinned transformers 5.5
- [#12326](https://github.com/unslothai/unsloth/pull/12326) Fix MiniMax-H3 compiled render on torch 2.12, 2.13 and 2.14
- [#12311](https://github.com/unslothai/unsloth/pull/12311) Write the Ollama Modelfile from the trained chat template
- [#12317](https://github.com/unslothai/unsloth/pull/12317) Honour FP8Linear.block_size in the patched FP8 forward (32x32 block checkpoints)
- [#12334](https://github.com/unslothai/unsloth/pull/12334) Move the Unsloth Studio MLX pins to mlx 0.32.3 and mlx-vlm 0.7.4
- [#12285](https://github.com/unslothai/unsloth/pull/12285) Studio: fix the desktop island corner and border seam
- [#12350](https://github.com/unslothai/unsloth/pull/12350) Studio: fix Qwen-Image-2.1 recompiles and Ideogram 4 attention and device errors on torch 2.11 to 2.14
- [#12308](https://github.com/unslothai/unsloth/pull/12308) Studio: turn train on completions back on when leaving CPT
- [#11823](https://github.com/unslothai/unsloth/pull/11823) Widen the pinned child GPU mask when extra args name a companion device (#11810)
- [#12319](https://github.com/unslothai/unsloth/pull/12319) Keep frozen BatchNorm running stats fixed during LoRA training
- [#12293](https://github.com/unslothai/unsloth/pull/12293) Studio: catch the tensor split abort behind a gdb backtrace
- [#12336](https://github.com/unslothai/unsloth/pull/12336) Studio: count tokens for templates that refuse an empty chat
- [#12318](https://github.com/unslothai/unsloth/pull/12318) Force non-reentrant gradient checkpointing for DeepSeek-V4.1
- [#12264](https://github.com/unslothai/unsloth/pull/12264) Studio: prompt caching for OpenRouter
- [#12328](https://github.com/unslothai/unsloth/pull/12328) Studio: isolate the Windows Terminal on MXC's default tier
- [#12349](https://github.com/unslothai/unsloth/pull/12349) Keep packed INT4 layers off the fused inference kernel in train mode
- [#12301](https://github.com/unslothai/unsloth/pull/12301) Studio: report CUDA graphs as on once the deferred speed profile arms them
- [#12314](https://github.com/unslothai/unsloth/pull/12314) Fix the ShareGPT mapping for Llama 3.1, Qwen and Gemma chat templates
- [#12331](https://github.com/unslothai/unsloth/pull/12331) Studio: use Refresh01Icon and FileEmpty02Icon everywhere
- [#11940](https://github.com/unslothai/unsloth/pull/11940) fix(studio): record the bit widths of prequantized MLX models
- [#12348](https://github.com/unslothai/unsloth/pull/12348) Studio: keep menus and popovers below the desktop titlebar
- [#12316](https://github.com/unslothai/unsloth/pull/12316) Studio: let the Mac window be moved during an app update
- [#12333](https://github.com/unslothai/unsloth/pull/12333) Studio: load plain FP8 encoder safetensors without torchao
- [#12343](https://github.com/unslothai/unsloth/pull/12343) feat(studio): batch KV-quantized and TurboQuant MLX loads with prompt snapshot reuse
- [#12304](https://github.com/unslothai/unsloth/pull/12304) Studio: fix the faint seam beside the chat composer
- [#12277](https://github.com/unslothai/unsloth/pull/12277) Studio desktop: survive AppKit exceptions during event dispatch on macOS
- [#12335](https://github.com/unslothai/unsloth/pull/12335) Studio: chunk large Qwen-Image-2.1 attention queries on ROCm
- [#12356](https://github.com/unslothai/unsloth/pull/12356) Studio frontend test: find the More flyout by its props in any order
- [#12354](https://github.com/unslothai/unsloth/pull/12354) Fix three main CI failures from the Mac adapter export and seq2seq PRs
- [#11780](https://github.com/unslothai/unsloth/pull/11780) Validate unsloth train flags the way the config file is validated
- [#12313](https://github.com/unslothai/unsloth/pull/12313) Studio: ask before Update stops a training run in the desktop app
- [#12353](https://github.com/unslothai/unsloth/pull/12353) Parallel-isolation guard: exempt the nvidia-smi fake's poll deadline
- [#12267](https://github.com/unslothai/unsloth/pull/12267) Studio: accept multiple audio files per message
- [#12295](https://github.com/unslothai/unsloth/pull/12295) Audio: keep PyAV decoding working on PyAV 19, and stop the tests needing an AMR encoder
- [#12312](https://github.com/unslothai/unsloth/pull/12312) Studio: keep code indentation when an HTML file is attached to a chat
- [#11971](https://github.com/unslothai/unsloth/pull/11971) fix(studio): mark CSV exports as UTF-8 so Excel shows non-Latin text
- [#12269](https://github.com/unslothai/unsloth/pull/12269) Studio engines: keep the NVIDIA driver's library path so engines run on Colab
- [#12290](https://github.com/unslothai/unsloth/pull/12290) Move the attention mask to each layer's device in the fast decode loops
- [#12307](https://github.com/unslothai/unsloth/pull/12307) Studio: keep web search source links for unsloth start claude
- [#12259](https://github.com/unslothai/unsloth/pull/12259) Studio: flag responses that appear to stop while quoting a token
- [#12315](https://github.com/unslothai/unsloth/pull/12315) unsloth start pi and dsh: stop cutting every reply at 8,192 tokens
- [#12306](https://github.com/unslothai/unsloth/pull/12306) Studio: keep answer columns out of the system prompt
- [#12309](https://github.com/unslothai/unsloth/pull/12309) Studio: don't re-prompt a finished code answer on safetensors and MLX models
- [#12294](https://github.com/unslothai/unsloth/pull/12294) Studio: fix Java initialization and home in the Linux tool sandbox
- [#12305](https://github.com/unslothai/unsloth/pull/12305) Studio: stop normal chat from opening the API monitor
- [#12337](https://github.com/unslothai/unsloth/pull/12337) Studio: use the standard chevrons in place of Hugeicons' curved ones
- [#12339](https://github.com/unslothai/unsloth/pull/12339) Studio: open the sidebar More menu on hover again
- [#12338](https://github.com/unslothai/unsloth/pull/12338) Studio: more edge padding on the model picker dropdowns
- [#12341](https://github.com/unslothai/unsloth/pull/12341) Studio: lift Library grid icons to the card's middle
- [#12340](https://github.com/unslothai/unsloth/pull/12340) Studio: Doc01 icon for Word and Google Docs files
- [#12332](https://github.com/unslothai/unsloth/pull/12332) Studio: tidy the Skills dialog rows and fields
- [#12330](https://github.com/unslothai/unsloth/pull/12330) Studio: Library grid cards keep one icon position and use the full width
- [#12329](https://github.com/unslothai/unsloth/pull/12329) Tests: let the TiledMLP DDP workers import unsloth_zoo on a CPU runner
- [#12325](https://github.com/unslothai/unsloth/pull/12325) Studio tests: check the compare composer's paste path, not one spelling of it
- [#12296](https://github.com/unslothai/unsloth/pull/12296) Studio desktop tests: keep temp paths distinct when the clock repeats
- [#12323](https://github.com/unslothai/unsloth/pull/12323) Studio: stop polling focus while message menus are open
- [#12322](https://github.com/unslothai/unsloth/pull/12322) Studio: mark adjusted backup timestamps as estimated
- [#12324](https://github.com/unslothai/unsloth/pull/12324) Studio: use FileEmpty02Icon for generic file chips
- [#12321](https://github.com/unslothai/unsloth/pull/12321) Studio: use the Hugeicons internet icon for every globe
- [#12280](https://github.com/unslothai/unsloth/pull/12280) Studio desktop: Cmd/Ctrl + and - zoom with a zoom popup

#### 🐛 New Issues
- [#12372](https://github.com/unslothai/unsloth/issues/12372) [Unsloth Bug] Studio pages mmproj-F16.gguf from disk during generation — severe t/s regression since latest update; extra args shadow-stripped and --mlock rejected 💬2
- [#12369](https://github.com/unslothai/unsloth/issues/12369) [Feature Request] Auto-chunking or background processing for large text attachments `feature request`
- [#12366](https://github.com/unslothai/unsloth/issues/12366) Add capability to swap between multiple System Prompts `feature request`
- [#12365](https://github.com/unslothai/unsloth/issues/12365) When using multiple accounts to access the same local model it - current loaded model does not sync correctly `feature request` `bug`
- [#12364](https://github.com/unslothai/unsloth/issues/12364) [Studio] OpenAI-compatible API adds a fixed ~1.2 s per request — 3-5x slower than the bundled llama-server on short-text workloads
- [#12361](https://github.com/unslothai/unsloth/issues/12361) No idea how to remove date from the prompt.
- [#12327](https://github.com/unslothai/unsloth/issues/12327) [Bug] Model Randomly Outputting "The User's Message Is Empty" Thinking Blocks `feature request` `bug`

#### 🔒 Closed Issues
- [#11913](https://github.com/unslothai/unsloth/issues/11913) [Bug] Windows winget package installs ARM64 package despite user CPU.
- [#11810](https://github.com/unslothai/unsloth/issues/11810) [Bug] --mmproj-device / --spec-draft-device rejected as "invalid device" when Studio pins llama-server to a single GPU
- [#8134](https://github.com/unslothai/unsloth/issues/8134) Studio: prequantized MLX models that are not uniformly 4-bit cannot attest, so their runs are never resumable
- [#12327](https://github.com/unslothai/unsloth/issues/12327) [Bug] Model Randomly Outputting "The User's Message Is Empty" Thinking Blocks
- [#11948](https://github.com/unslothai/unsloth/issues/11948) CSV export issue & Potential solution
- [#12260](https://github.com/unslothai/unsloth/issues/12260) [Bug] Suddenly Getting "Error loading java.security file" When Model Tries Building Gradle Project

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,120 · **Open issues:** 387 · **Last push:** 1h ago

On October 1, 2026, there were no new releases for AIBrix, but several important pull requests were successfully merged. Notable among them was the fix for a race condition in bucket-serve metric capture with PR #2857, and PR #2862, which re-enabled the RayClusterFleet reconcile specification. Additional improvements included the re-enabling of various controller specs, contributing to enhanced stability and reliability. The most significant new issue reported was #2856, highlighting a race condition in bucket-serve metric capture that coincides with background metric emission, which may require immediate attention. Overall, the day focused mainly on routine maintenance and enhancements to existing features.

#### ✅ Merged PRs
- [#2866](https://github.com/vllm-project/aibrix/pull/2866) [Misc] Test that WorkerPool.Stop returns while Submit calls race it
- [#2865](https://github.com/vllm-project/aibrix/pull/2865) [Misc] Run the Redis rate limiter tests on miniredis
- [#2864](https://github.com/vllm-project/aibrix/pull/2864) [Misc] Re-enable the RoleSet and StormService controller specs
- [#2861](https://github.com/vllm-project/aibrix/pull/2861) [Misc] Re-enable the ModelAdapter controller specs
- [#2862](https://github.com/vllm-project/aibrix/pull/2862) [Misc] Re-enable RayClusterFleet reconcile spec
- [#2857](https://github.com/vllm-project/aibrix/pull/2857) Fix race in bucket-serve metric capture
- [#2853](https://github.com/vllm-project/aibrix/pull/2853) [Misc] Expand external router test coverage

#### 🐛 New Issues
- [#2856](https://github.com/vllm-project/aibrix/issues/2856) [Bug] BucketServe metric capture races with background metric emission `kind/bug` `good first issue` `help wanted` `area/gateway` 💬2
- [#2863](https://github.com/vllm-project/aibrix/issues/2863) Runtime and metadata-service nightly images are unexpectedly large (~970 MB) `kind/bug` `area/runtime` `area/cicd` 💬1
- [#2858](https://github.com/vllm-project/aibrix/issues/2858) [Feature][Gateway] Decode watchdog for SGLang PD requests whose decode pod stops responding `area/gateway` `kind/feature` 💬1

#### 🔒 Closed Issues
- [#2772](https://github.com/vllm-project/aibrix/issues/2772) [Bug] Session-affinity load-gate reroutes do not update the Redis pin
- [#2856](https://github.com/vllm-project/aibrix/issues/2856) [Bug] BucketServe metric capture races with background metric emission
- [#2854](https://github.com/vllm-project/aibrix/issues/2854) [Bug] Static discovery endpoints are scraped for metrics on port 8000 regardless of their configured port
- [#2850](https://github.com/vllm-project/aibrix/issues/2850) [Bug] Gateway derives token throughput only for pods whose name contains the PD role

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,991 · **Open issues:** 605 · **Last push:** 7h ago

On October 1, 2026, there were no new releases for Semantic Router, but several important updates were made through merged pull requests. Notable fixes included #4407, which preserved kb_metric projection inputs in the Dashboard, and #4047, which addressed the pinning of the streaming usage dispatch and settlement contract. Additionally, contributors resolved a bug in #4372 related to Kubernetes startup help targets. Among the new issues raised, #4400 highlighted concerns over the enforcement of security settings for the MCP server, marking it as a particularly urgent matter for future attention. Overall, the day focused on addressing critical bugs while lacking new releases.

#### ✅ Merged PRs
- [#4407](https://github.com/vllm-project/semantic-router/pull/4407) [Bug] Keep kb_metric projection inputs intact in the Dashboard
- [#4047](https://github.com/vllm-project/semantic-router/pull/4047) [Test] Pin the streaming usage dispatch and settlement contract
- [#4372](https://github.com/vllm-project/semantic-router/pull/4372) [Bug] Correct Kubernetes startup help targets

#### 🐛 New Issues
- [#4400](https://github.com/vllm-project/semantic-router/issues/4400) [Bug] MCP server security settings are stored but never enforced `bug` `accepted` `wg/enterprise-environment` 💬4
- [#4386](https://github.com/vllm-project/semantic-router/issues/4386) [Bug] Builder and DSL pages lose unsaved edits on refresh without a warning `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬4
- [#4396](https://github.com/vllm-project/semantic-router/issues/4396) [Bug] Dashboard overview hides failed config and status requests `bug` `needs-acceptance` `wg/developer-experience-ecosystem` 💬3
- [#4398](https://github.com/vllm-project/semantic-router/issues/4398) [Bug] Builder sidebar entries cannot be reached or selected with the keyboard `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4402](https://github.com/vllm-project/semantic-router/issues/4402) [Bug] Saving a Builder entity breaks the DSL when a string value contains quotes or backslashes `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4405](https://github.com/vllm-project/semantic-router/issues/4405) [Bug] Dashboard drops kb and metric from kb_metric projection inputs `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4395](https://github.com/vllm-project/semantic-router/issues/4395) [Feature] Refresh homepage intro film, hero and section order `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4423](https://github.com/vllm-project/semantic-router/issues/4423) [Bug] Responses encoder sends assistant history as input_text, so translated multi-turn requests are rejected `needs-acceptance` `wg/data-plane-networking`
- [#4415](https://github.com/vllm-project/semantic-router/issues/4415) [Bug] status.openShiftFeatures is never cleared when Routes are disabled `needs-acceptance` `wg/enterprise-environment`
- [#4414](https://github.com/vllm-project/semantic-router/issues/4414) [Bug] Omitting ingress servicePort builds an Ingress the API server rejects `needs-acceptance` `wg/enterprise-environment`
- [#4413](https://github.com/vllm-project/semantic-router/issues/4413) [Bug] Benchmark receipt mutates the shared streamed-body response on every chunk `needs-acceptance` `wg/data-plane-networking`
- [#4410](https://github.com/vllm-project/semantic-router/issues/4410) [Bug] Saving a Builder route drops route settings the route form does not show `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4408](https://github.com/vllm-project/semantic-router/issues/4408) [Bug] Knowledge Bases pages show raw Router connection errors with internal addresses `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4404](https://github.com/vllm-project/semantic-router/issues/4404) [Bug] Community member cards truncate bios `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4384](https://github.com/vllm-project/semantic-router/issues/4384) [Bug] Anthropic usage projections report partial counts as exact values `needs-acceptance` `wg/data-plane-networking`
- [#4393](https://github.com/vllm-project/semantic-router/issues/4393) [Feature] Document and verify per-backend Router Memory capability and lifecycle semantics `needs-acceptance` `wg/agentic-context`
- [#4392](https://github.com/vllm-project/semantic-router/issues/4392) [Bug] openai SSE streaming with agentgateway doesn't work well `bug` `needs-acceptance`
- [#4387](https://github.com/vllm-project/semantic-router/issues/4387) [Bug] An sr-bench version mismatch surfaces as a generic readiness timeout `needs-acceptance` `wg/evaluation-quality`
- [#4385](https://github.com/vllm-project/semantic-router/issues/4385) [Bug] VLLM_SR_PORT_OFFSET failures are undiagnosable: a raw traceback for bad values, a wrong port for negatives `needs-acceptance` `wg/developer-experience-ecosystem`

#### 🔒 Closed Issues
- [#4293](https://github.com/vllm-project/semantic-router/issues/4293) [Docs] x-vsr header contract states two headers as unconditional that are emitted conditionally
- [#4363](https://github.com/vllm-project/semantic-router/issues/4363) [Bug] Propagate request cancellation through model-selection embeddings
- [#3864](https://github.com/vllm-project/semantic-router/issues/3864) [Bug] LLM Classifier does not enforce a specific json_schema
- [#4316](https://github.com/vllm-project/semantic-router/issues/4316) [Bug] Context compression silently stops working once token calibration warms up
- [#4398](https://github.com/vllm-project/semantic-router/issues/4398) [Bug] Builder sidebar entries cannot be reached or selected with the keyboard
- [#4405](https://github.com/vllm-project/semantic-router/issues/4405) [Bug] Dashboard drops kb and metric from kb_metric projection inputs
- [#4367](https://github.com/vllm-project/semantic-router/issues/4367) [Bug] Kubernetes check suggests make targets that do not exist
- [#4395](https://github.com/vllm-project/semantic-router/issues/4395) [Feature] Refresh homepage intro film, hero and section order
- [#4348](https://github.com/vllm-project/semantic-router/issues/4348) [Bug] Dashboard frontend lockfile pins 39 packages to a third-party npm registry, breaking npm ci

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*