# 📡 AI Ecosystem Digest — 2026-09-01

> Generated 2026-09-01 01:41 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,588 | 16 | 23 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 120,466 | 16 | 0 | 49 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,753 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,131 | 7 | 1 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 202,857 | 27 | 14 | 14 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,534 | 24 | 25 | 8 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 388,310 | 249 | 179 | 226 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 239,031 | 28 | 8 | 4 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,631 | 38 | 19 | 46 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 32,999 | 9 | 13 | 60 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 126,547 | 20 | 8 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 179,851 | 3 | 3 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,704 | 18 | 32 | 42 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,368 | 11 | 6 | 48 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,046 | 3 | 2 | 10 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,457 | 5 | 3 | 5 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released `v0.59.0-nightly.20260901.g0bd1d4397`, marking significant updates to the tool.
- **OpenAI Codex** merged a significant PR [#41953](https://github.com/openai/codex/pull/41953) to enforce marketplace source policy for curated plugins.
- **OpenClaw** introduced a critical issue with the [Bug](https://github.com/openclaw/openclaw/issues/133813) regarding upgrade crash loops that received 7 comments.
- **vLLM** faced a major [Bug](https://github.com/vllm-project/vllm/issues/54521) related to non-deterministic decoding from persistent_topk, generating significant interest with 11 comments.
- **Ollama** experienced high-impact issues like the GPU driver crash on Windows, accumulating 3 comments ([#18152](https://github.com/ollama/ollama/issues/18152)).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,588 · **Open issues:** 15,315 · **Last push:** 5h ago

On September 1, 2026, Claude Code released version 2.1.252, which addressed several critical issues including fixing Bash commands that previously failed with "task output swap refused" on some Macs, ensuring that "always allow" settings save properly in projects without a specified `.claude/settings.local.json`, and resolving stalling during Remote Control sessions due to degraded connections to claude.ai. While there were no merged pull requests, the release also included notable bug fixes for various issues, such as the intermittent disconnection of cowork remote-devices on Windows 11 and the improper handling of user-defined rules after documentation reading. Additionally, a particularly concerning new issue was reported regarding subagent retry loops causing excessive context accumulation in ultracode mode, highlighting ongoing challenges in maintaining efficiency.

#### 🚀 New Releases
- [v2.1.252](https://github.com/anthropics/claude-code/releases/tag/v2.1.252) v2.1.252

#### 🐛 New Issues
- [#91110](https://github.com/anthropics/claude-code/issues/91110) [FEATURE] Expose the advisor tool's `caching` parameter in Claude Code `enhancement` `area:cost`
- [#91114](https://github.com/anthropics/claude-code/issues/91114) [Bug] MCP Supabase tool uses wrong project instead of configured .env.local credentials `bug` `platform:windows` `area:mcp`
- [#91113](https://github.com/anthropics/claude-code/issues/91113) Recovered API-error retries orphan the turn's persisted output: late-flushed api_error records take over the parentUuid chain, so --resume drops the content `bug` `has repro` `area:core` `data-loss`
- [#91112](https://github.com/anthropics/claude-code/issues/91112) [BUG] `bug` `platform:macos` `area:core` `area:providers`
- [#91111](https://github.com/anthropics/claude-code/issues/91111) [BUG] Cowork remote-devices bridge disconnects intermittently mid-session (Windows 11) `duplicate` `platform:windows` `area:cowork` `area:desktop`
- [#91109](https://github.com/anthropics/claude-code/issues/91109) [Bug] Claude ignores user-defined rules after reading documentation `bug` `platform:macos` `area:model` `needs-repro`
- [#91108](https://github.com/anthropics/claude-code/issues/91108) [Bug] Subprocess kill loop treats PID list as single string, fails to terminate processes `bug` `platform:macos` `area:bash`
- [#91107](https://github.com/anthropics/claude-code/issues/91107) [Bug] Subagent retry loop causes excessive context accumulation in ultracode mode `bug` `platform:linux` `area:agents` `needs-repro`
- [#91106](https://github.com/anthropics/claude-code/issues/91106) [Bug] Subagents in ultracode mode ignore window size limits `bug` `platform:linux` `area:agents` `needs-repro`
- [#91105](https://github.com/anthropics/claude-code/issues/91105) [BUG] Cross-session SendMessage returns {"success":true} for a ListAgents-supplied address that routes nowhere — silent drop, no error `bug` `has repro` `platform:macos` `area:agents`
- [#91104](https://github.com/anthropics/claude-code/issues/91104) [BUG] Suspeita de corrupção de disco `bug` `platform:linux` `needs-info`
- [#91031](https://github.com/anthropics/claude-code/issues/91031) claude.ai connectors silently stop being fetched in Code sessions until a manual /login `bug` `has repro` `platform:macos` `area:auth`
- [#91036](https://github.com/anthropics/claude-code/issues/91036) [BUG] Meta Ads MCP integration app blocked after switching to Live mode `bug` `platform:windows` `external` `area:mcp`
- [#91098](https://github.com/anthropics/claude-code/issues/91098) [BUG] VS Code config probe starts every MCP server (spawnConfigProbe never sets strictMcpConfig) `bug` `has repro` `area:mcp` `area:ide`
- [#91103](https://github.com/anthropics/claude-code/issues/91103) [BUG] Ctrl+Shift+Tab is partially intercepted by Claude Code and also triggers Shift+Tab mode switching `duplicate` `platform:windows` `area:ide` `platform:vscode`
- [#91102](https://github.com/anthropics/claude-code/issues/91102) [BUG] Fullscreen: scroll-back sticky "last prompt" banner never appears since 2.1.247 (scrollRef -> scrollViewport.handle refactor) `bug` `has repro` `platform:macos` `area:tui`

#### 🔒 Closed Issues
- [#75536](https://github.com/anthropics/claude-code/issues/75536) [Bug][cyber] Safety block halted legitimate firmware cryptographic analysis and reverse-engineering documentat (req_011CcosqUCuVXH5KoYwsevZw)
- [#75519](https://github.com/anthropics/claude-code/issues/75519) [Bug][cyber] Legitimate reverse engineering wrongly flagged as cybersecurity violation (req_011CcopGZJyKgAZef3GxbZ2h)
- [#75506](https://github.com/anthropics/claude-code/issues/75506) [Bug][cyber] False positive block on memory forensics documentation and tool extension work (req_011CcojpDuj1mLyZEwVFbbRn)
- [#75503](https://github.com/anthropics/claude-code/issues/75503) [Bug][cyber] Safety block halts authorized personal device reverse-engineering work (req_011CcoiyZVaaBP1v5ZwzW8sa)
- [#75504](https://github.com/anthropics/claude-code/issues/75504) [Bug][cyber] Safeguard blocks authorized reverse-engineering work on personal owned device (req_011Ccoj11scL1DMP9P47ECzi)
- [#75491](https://github.com/anthropics/claude-code/issues/75491) [Bug][cyber] Legitimate reverse-engineering analysis of drone app cert/command timing blocked as "cybersecurit (req_011CcofuSrGGij6dAoLz3vcb)
- [#75110](https://github.com/anthropics/claude-code/issues/75110) [Bug][cyber] Safety block fired on building an LSPosed root-level memory inspection/editing module for the use (req_011Ccn1mNShV32HmV78WN1pi)
- [#75108](https://github.com/anthropics/claude-code/issues/75108) [Bug][cyber] Session-halting block on rooted personal-device memory-debugging tool for own app, on own hardwar (req_011Ccn1ZX7Fx5BWeRxRi3i6a)
- [#75109](https://github.com/anthropics/claude-code/issues/75109) [Bug][cyber] Safeguard blocked building an LSPosed memory-inspection module for the user's own rooted dev phon (req_011Ccn1fXguVsjDFLYHjENd2)
- [#75076](https://github.com/anthropics/claude-code/issues/75076) [Bug][cyber] Safeguard blocked device-key/unlock-gate debugging for a personal drone flight-limit app (req_011CcmruGqXwqtJ5hpWX3d8W)
- [#75075](https://github.com/anthropics/claude-code/issues/75075) [Bug][cyber] Safety block fired on legitimate work: analyzing own drone firmware unlock-key scope and altitude (req_011Ccmrsrt6bVmGRn9oMS1s9)
- [#75068](https://github.com/anthropics/claude-code/issues/75068) [Bug][cyber] Safety block triggered when opening an empty, newly-created project directory with no code presen (req_011Ccmpwd4mefAyD5J6ajT1g)
- [#75015](https://github.com/anthropics/claude-code/issues/75015) [Bug][cyber] Safety block halted DUML 0x11/0x43 auth-frame signature RE on DJI GO 4 APK/native libs (req_011CcmcssiKsHScmziNmFeXd)
- [#75013](https://github.com/anthropics/claude-code/issues/75013) [Bug][cyber] False positive: safety block on routine cloud IAM policy review work (req_011Ccmch5wj1PZhgDLgPCZgE)
- [#74583](https://github.com/anthropics/claude-code/issues/74583) [Bug][aup] Fable 5 blocked standard HUD orientation display feature request (req_011CcjWGEVmxuVE7SJcS4xri)
- [#74577](https://github.com/anthropics/claude-code/issues/74577) [Bug][aup] Safeguards block request to verify paired left/right vision radar telemetry parsing for a HUD (req_011CcjW1rY37jYvP9E5fykVv)
- [#75493](https://github.com/anthropics/claude-code/issues/75493) [Bug][cyber] Safety block on request to analyze application certificate transmission timing (req_011CcofxC94dF7ENaGb4ptc8)
- [#75501](https://github.com/anthropics/claude-code/issues/75501) [Bug][cyber] Code review of runtime instrumentation hooks for security monitoring blocked (req_011CcoiwQkfJxWBSVBYp827H)
- [#75492](https://github.com/anthropics/claude-code/issues/75492) [Bug][cyber] ClAudit false-positive while: “just look at the memory dumps…” (req_011CcofvAUoQdBK4KRfQS44V)
- [#75489](https://github.com/anthropics/claude-code/issues/75489) [Bug][cyber] False positive blocks developer examining own GitHub repository directory structure (req_011Ccofr6iTx7QA6EsCw8vX2)
- [#75488](https://github.com/anthropics/claude-code/issues/75488) [Bug][cyber] Reverse engineering analysis of drone flight app protocol timing blocked as cybersecurity topic (req_011CcofqjARq3HDn1QDWZsLK)
- [#75074](https://github.com/anthropics/claude-code/issues/75074) [Bug][cyber] Safety block fired while reviewing routine frontend page code and disclosure text, no cyber conte (req_011CcmrvVov7e8qaijyzQ9bt)
- [#75061](https://github.com/anthropics/claude-code/issues/75061) [Bug][cyber] Safeguard blocked routine "examine project status" request after model switch, no cyber content p (req_011CcmpGkPDXsEihgJC3UXyt)

### OpenAI Codex (`openai/codex`)

**Stars:** 120,466 · **Open issues:** 14,664 · **Last push:** <1h ago

On September 1, 2026, OpenAI Codex saw the release of three versions: rust-v0.152.0-alpha.7.2, rust-v0.152.0-alpha.7, and rust-v0.152.0-alpha.6, each contributing advancements to the Rust ecosystem. Among the significant merged pull requests, notable features include the enforcement of a marketplace source policy for curated plugins and the addition of an app-server API for plugin reconciliation. The update also brought improvements in diagnostic reporting and expanded permission coverage, enhancing overall functionality. However, a critical new issue was raised regarding a significant regression in shell execution latency on Windows, which reportedly worsened from 1.7 seconds to 18.4 seconds, affecting user experience.

#### 🚀 New Releases
- [rust-v0.152.0-alpha.7.2](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7.2) 0.152.0-alpha.7.2
- [rust-v0.152.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7) 0.152.0-alpha.7
- [rust-v0.152.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6) 0.152.0-alpha.6

#### ✅ Merged PRs
- [#41953](https://github.com/openai/codex/pull/41953) Enforce marketplace source policy for curated plugins
- [#41950](https://github.com/openai/codex/pull/41950) Improve tracing for nested tool calls and exec processes
- [#41949](https://github.com/openai/codex/pull/41949) Add plugin reconciliation app-server API
- [#41946](https://github.com/openai/codex/pull/41946) Expand extension permission regression coverage
- [#41944](https://github.com/openai/codex/pull/41944) Emit turn cost telemetry for ChatGPT sessions
- [#41941](https://github.com/openai/codex/pull/41941) Add Vim undo to the TUI composer
- [#41940](https://github.com/openai/codex/pull/41940) Preserve transcript layout caches during backtrack selection
- [#41938](https://github.com/openai/codex/pull/41938) Clarify resume guidance in exit summaries
- [#41937](https://github.com/openai/codex/pull/41937) Limit background terminal input previews
- [#41936](https://github.com/openai/codex/pull/41936) Attach failed Guardian reviews to diagnostic reports
- [#41934](https://github.com/openai/codex/pull/41934) Omit undersized WAV output from Code Mode
- [#41933](https://github.com/openai/codex/pull/41933) Report configured sandbox policy consistently
- [#41931](https://github.com/openai/codex/pull/41931) Increase Guardian message transcript limits
- [#41929](https://github.com/openai/codex/pull/41929) Open the agents overview directly in the reconnect test
- [#41928](https://github.com/openai/codex/pull/41928) Use executor path context for permission preapproval
- [#41925](https://github.com/openai/codex/pull/41925) Test repository-wide Rust formatter discovery
- [#41924](https://github.com/openai/codex/pull/41924) Record realtime conversation history in Core
- [#41923](https://github.com/openai/codex/pull/41923) Allow per-call sideband endpoints for existing realtime calls
- [#41921](https://github.com/openai/codex/pull/41921) Start fresh Vim drafts in Insert mode
- [#41919](https://github.com/openai/codex/pull/41919) Source Guardian REPL policy from model metadata
- [#41918](https://github.com/openai/codex/pull/41918) Restore agent navigation after TUI reconnects
- [#41917](https://github.com/openai/codex/pull/41917) Open the agents overview from an empty composer
- [#41916](https://github.com/openai/codex/pull/41916) Reconnect TUI app-server sessions automatically
- [#41915](https://github.com/openai/codex/pull/41915) Move the config schema generator into a dedicated crate
- [#41913](https://github.com/openai/codex/pull/41913) Preserve TUI status timing when the status row is hidden
- [#41912](https://github.com/openai/codex/pull/41912) Persist response token usage in rollout history
- [#41911](https://github.com/openai/codex/pull/41911) Preserve TUI drafts after app-server disconnects
- [#41909](https://github.com/openai/codex/pull/41909) Make permission transforms aware of executor path context
- [#41908](https://github.com/openai/codex/pull/41908) Avoid scanning archived rollouts when archiving threads
- [#41906](https://github.com/openai/codex/pull/41906) Add a manager for MCP event streams
- [#41902](https://github.com/openai/codex/pull/41902) Add installed voice host lifecycle support
- [#41901](https://github.com/openai/codex/pull/41901) Load bounded context after empty wake turns
- [#41899](https://github.com/openai/codex/pull/41899) Keep MCP event subscriptions alive after task unloading
- [#41897](https://github.com/openai/codex/pull/41897) Add the voice helper lifecycle foundation
- [#41894](https://github.com/openai/codex/pull/41894) Fix Windows native voice dependency builds
- [#41893](https://github.com/openai/codex/pull/41893) Show successful TUI commands individually
- [#41892](https://github.com/openai/codex/pull/41892) Retain the MCP client for event streams
- [#41890](https://github.com/openai/codex/pull/41890) Add native voice dependency build recipe
- [#41884](https://github.com/openai/codex/pull/41884) Add pinned native voice source preparation
- [#41879](https://github.com/openai/codex/pull/41879) Preserve Guardian review evidence across compaction
- [#41870](https://github.com/openai/codex/pull/41870) Use shared transcript collection for Guardian reviews
- [#41861](https://github.com/openai/codex/pull/41861) Keep history extension tools out of Guardian reviews
- [#41858](https://github.com/openai/codex/pull/41858) Preserve user text when Guardian history drops oversized images
- [#41857](https://github.com/openai/codex/pull/41857) Preserve Guardian user answers from current history
- [#41853](https://github.com/openai/codex/pull/41853) Box the session startup future at its API boundary
- [#41852](https://github.com/openai/codex/pull/41852) Preserve Guardian user answers across compaction
- [#41846](https://github.com/openai/codex/pull/41846) Preserve Guardian review evidence across compaction
- [#41840](https://github.com/openai/codex/pull/41840) Use the async stack budget for approval reviews
- [#41803](https://github.com/openai/codex/pull/41803) Allow models to enable token budgeting by default

#### 🐛 New Issues
- [#41845](https://github.com/openai/codex/issues/41845) Windows — Codex unexpectedly closes at the end of a task, persists after update `bug` `windows-os` `app` `browser` 💬4
- [#41948](https://github.com/openai/codex/issues/41948) Final response is incorrectly placed inside the Thinking/“Worked for” section, leaving no visible output `bug` `app` 💬2
- [#41794](https://github.com/openai/codex/issues/41794) [macOS] 4 unattended Codex (Renderer) processes grew to ~5.6 GB each — jetsam storms, swap-filled disk, system freeze (26.820.60940) `bug` `app` `performance` 💬2
- [#41951](https://github.com/openai/codex/issues/41951) Failure report — voice call in Codex for Windows `bug` `windows-os` `app` 💬2
- [#41942](https://github.com/openai/codex/issues/41942) Shell execution latency regressed 8-11x between 0.146.0 and 0.151.0-alpha on Windows (1.7s to 18.4s median), measured across 10 months of rollouts `bug` `windows-os` `sandbox` `CLI` 💬2
- [#41920](https://github.com/openai/codex/issues/41920) Windows desktop pet overlay reacts to mouse but cannot be dragged `bug` `windows-os` `app` `pets` 💬2
- [#41935](https://github.com/openai/codex/issues/41935) Desktop app: subagent capabilities vary by task without selectable controls or clear UI distinctions `enhancement` `app` `subagent` 💬2
- [#41932](https://github.com/openai/codex/issues/41932) no-active-thread-01a05a1c-430a-7de1-b434-68bc706f305c `bug` `windows-os` `app` `session` 💬2
- [#41952](https://github.com/openai/codex/issues/41952) Codex CLI intermittently panics during tasks on Windows with RUST_BACKTRACE message `bug` `windows-os` `CLI` 💬1
- [#41939](https://github.com/openai/codex/issues/41939) cannot open chatgpt `bug` `windows-os` `app` 💬1
- [#41889](https://github.com/openai/codex/issues/41889) Windows elevated sandbox: native spellchecker creates garbled relative directories, then returns E_ACCESSDENIED `bug` `windows-os` `sandbox` `app` 💬1
- [#41930](https://github.com/openai/codex/issues/41930) Feature Request: Chinese UI support `enhancement` `windows-os` `app` 💬1
- [#41927](https://github.com/openai/codex/issues/41927) Open issue: no-active-thread-01a05a07-a62a-7e92-8145-06b98c9efc1f `bug` `app` `session` 💬1
- [#41947](https://github.com/openai/codex/issues/41947) Gmail send_email silently ignores from_address and sends from authenticated account `bug` `tool-calls` `app`
- [#41945](https://github.com/openai/codex/issues/41945) Bedrock: AWS credential provider invoked multiple times per session, causing significant latency with short-term credentials `bug` `auth` `CLI` `performance`
- [#41943](https://github.com/openai/codex/issues/41943) [Linux] Codex desktop updates repeatedly change the default text/html handler to chatgpt.desktop `bug` `app`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,753 · **Open issues:** 865 · **Last push:** <1h ago

On September 1, 2026, Gemini CLI released version v0.59.0-nightly.20260901.g0bd1d4397, which includes updates and bug fixes as detailed in the full changelog. There were no merged pull requests or new issues reported in the last 24 hours, indicating that the team is likely in a maintenance phase. Overall, the day was marked by the release of the new nightly version, setting the stage for further enhancements in upcoming updates.

#### 🚀 New Releases
- [v0.59.0-nightly.20260901.g0bd1d4397](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260901.g0bd1d4397) Release v0.59.0-nightly.20260901.g0bd1d4397

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,131 · **Open issues:** 2,256 · **Last push:** 10h ago

On September 1, 2026, GitHub Copilot CLI released version 1.0.83-0, introducing automatic HTTPS proxy mTLS client certificate support for model and web requests and improved detection of the herdr terminal multiplexer to enhance functionality in herdr panes. Additionally, the /sandbox policy saw enhancements by grouping path grants by source and better showcasing detected developer tools. Although there were no merged pull requests on this day, several new issues were reported, including a regression in version 1.0.82 related to an unknown command with BYOK (#4672) and a session restore issue that fails to recover the custom agent, identified as a regression of previous work (#4674).

#### 🚀 New Releases
- [v1.0.83-0](https://github.com/github/copilot-cli/releases/tag/v1.0.83-0) 1.0.83-0

#### 🐛 New Issues
- [#4672](https://github.com/github/copilot-cli/issues/4672) 1.0.82 Regression: Unknown command: /model with BYOK `triage` 💬1
- [#4678](https://github.com/github/copilot-cli/issues/4678) ACP: session/new blocks for 192s on a single unresponsive MCP server (no bounded MCP startup budget) `triage`
- [#4677](https://github.com/github/copilot-cli/issues/4677) CLI server emits `assistant.message_delta` with `streaming: false `triage`
- [#4676](https://github.com/github/copilot-cli/issues/4676) Sidebar flashes deleted session IDs `triage`
- [#4675](https://github.com/github/copilot-cli/issues/4675) TaskShellProgress.recentOutput is a required string, so the runtime substitutes the display literal (no output yet) when a shell task has produced nothing `triage`
- [#4674](https://github.com/github/copilot-cli/issues/4674) Resuming a session does not restore the custom agent (regression of #917) `triage`
- [#4673](https://github.com/github/copilot-cli/issues/4673) 1.0.81: session restore auto-continues work the user aborted, trapping loop-prone models `triage`

#### 🔒 Closed Issues
- [#3606](https://github.com/github/copilot-cli/issues/3606) Newly installed plugin skills aren't usable until `/skills reload`

### OpenCode (`anomalyco/opencode`)

**Stars:** 202,857 · **Open issues:** 5,625 · **Last push:** <1h ago

On September 1, 2026, there were no new releases for OpenCode. However, several significant pull requests were merged, including a fix for preserving continuation across chained moves and enhancements to the codemode for improved handling of unresolved intersections and input conflict detection. Notably, the shell was updated to preserve output from fast-exiting commands, and the app now raises the composer only in dark mode. Among the new issues reported, there is a critical bug (#46408) regarding local plugins failing to load on Windows due to a regression since the beta-18721 upgrade, which has garnered significant user attention.

#### ✅ Merged PRs
- [#46076](https://github.com/anomalyco/opencode/pull/46076) fix(codemode): reject Object.assign cycles
- [#46500](https://github.com/anomalyco/opencode/pull/46500) fix(session-ui): reduce inline code height
- [#46505](https://github.com/anomalyco/opencode/pull/46505) test(tui): capture flushed Mini scrollback output
- [#46441](https://github.com/anomalyco/opencode/pull/46441) fix(core): preserve continuation across chained moves
- [#46503](https://github.com/anomalyco/opencode/pull/46503) fix(app): raise composer only in dark mode
- [#46082](https://github.com/anomalyco/opencode/pull/46082) refactor(codemode): name only supported operations
- [#46463](https://github.com/anomalyco/opencode/pull/46463) fix(shell): preserve output from fast-exiting commands
- [#46479](https://github.com/anomalyco/opencode/pull/46479) test(tui): stop Windows image preview test crashes
- [#46064](https://github.com/anomalyco/opencode/pull/46064) fix(ai): preserve done-only response messages
- [#46465](https://github.com/anomalyco/opencode/pull/46465) refactor(codemode): simplify input conflict detection
- [#46468](https://github.com/anomalyco/opencode/pull/46468) refactor(codemode): reject unresolved intersections before rendering
- [#46466](https://github.com/anomalyco/opencode/pull/46466) refactor(util): slice the final filename segment
- [#46467](https://github.com/anomalyco/opencode/pull/46467) refactor(core): slice model references at the first slash
- [#46453](https://github.com/anomalyco/opencode/pull/46453) refactor(app): share mobile drawer primitive

#### 🐛 New Issues
- [#46498](https://github.com/anomalyco/opencode/issues/46498) OpenCode server URLs drop full path in v2 `2.0` 💬2
- [#46471](https://github.com/anomalyco/opencode/issues/46471) Cuelgue del modelo BigPickle 💬4
- [#46408](https://github.com/anomalyco/opencode/issues/46408) tui: local plugins silently fail to load on Windows since beta-18721 upgrade (cli.json migration regression) `2.0` 💬4
- [#46494](https://github.com/anomalyco/opencode/issues/46494) توقف الفتره المجانيه 💬3
- [#46511](https://github.com/anomalyco/opencode/issues/46511) 8月6订阅的，9月1就给判无效了！ `needs:compliance` 💬3
- [#46483](https://github.com/anomalyco/opencode/issues/46483) no me responde los mensajes la IA 💬3
- [#46488](https://github.com/anomalyco/opencode/issues/46488) I can type anything and it will immediately say thinking and not do anything. 💬2
- [#46490](https://github.com/anomalyco/opencode/issues/46490) просит 10 баксов, хотя везде пишут, что бесплатно 💬2
- [#46451](https://github.com/anomalyco/opencode/issues/46451) Subagent tasks run sequentially instead of concurrently when using GPT models 💬2
- [#46460](https://github.com/anomalyco/opencode/issues/46460) I got the message "Free usage exceeded, subscribe to Go" in the first message sent? 💬2
- [#46457](https://github.com/anomalyco/opencode/issues/46457) error 💬2
- [#46440](https://github.com/anomalyco/opencode/issues/46440) 微信支持群 💬2
- [#46448](https://github.com/anomalyco/opencode/issues/46448) تكرار الكتابة 💬2
- [#46374](https://github.com/anomalyco/opencode/issues/46374) OpenCode client appears to consume Go quota abnormally fast compared with third-party clients using the same API key/model 💬2
- [#46506](https://github.com/anomalyco/opencode/issues/46506) Ollama local model becomes ~7x slower through OpenCode than direct Ollama API 💬1
- [#46491](https://github.com/anomalyco/opencode/issues/46491) Independent Task subagents run sequentially with GPT-5.6-sol (OpenAI) 💬1
- [#46492](https://github.com/anomalyco/opencode/issues/46492) Agent enters an infinite "intent-narration" loop: announces tool calls but repeatedly fails to actually invoke them 💬1
- [#46481](https://github.com/anomalyco/opencode/issues/46481) Cloudflare Workers AI models fail on the first message 💬1
- [#46475](https://github.com/anomalyco/opencode/issues/46475) Markdown diff blocks render without colors in the TUI `2.0` 💬1
- [#46455](https://github.com/anomalyco/opencode/issues/46455) GitHub copilot shows no models 💬1
- [#46371](https://github.com/anomalyco/opencode/issues/46371) Hidden LLM calls (session title / message summaries) are billed by the provider but absent from session cost 💬1
- [#46444](https://github.com/anomalyco/opencode/issues/46444) Web Home hides global-project sessions (empty list for sessions created outside git repos) 💬1
- [#46514](https://github.com/anomalyco/opencode/issues/46514) Bug Report
- [#46493](https://github.com/anomalyco/opencode/issues/46493) Upgrade fails when opencode is installed via npm, and nodejs was installed via scoop
- [#46473](https://github.com/anomalyco/opencode/issues/46473) Unpackaged desktop app shares the installed Dev taskbar identity
- [#46472](https://github.com/anomalyco/opencode/issues/46472) V2: web review panel shows no changes for non-git VCS backends `2.0`
- [#46461](https://github.com/anomalyco/opencode/issues/46461) Feature: per-subagent timeout / tool-call budget — one stalled child hangs the parent indefinitely

#### 🔒 Closed Issues
- [#46471](https://github.com/anomalyco/opencode/issues/46471) Cuelgue del modelo BigPickle
- [#46494](https://github.com/anomalyco/opencode/issues/46494) توقف الفتره المجانيه
- [#46483](https://github.com/anomalyco/opencode/issues/46483) no me responde los mensajes la IA
- [#35797](https://github.com/anomalyco/opencode/issues/35797) LSP Support
- [#46488](https://github.com/anomalyco/opencode/issues/46488) I can type anything and it will immediately say thinking and not do anything.
- [#46490](https://github.com/anomalyco/opencode/issues/46490) просит 10 баксов, хотя везде пишут, что бесплатно
- [#44151](https://github.com/anomalyco/opencode/issues/44151) Add a worktree setup script
- [#46451](https://github.com/anomalyco/opencode/issues/46451) Subagent tasks run sequentially instead of concurrently when using GPT models
- [#46460](https://github.com/anomalyco/opencode/issues/46460) I got the message "Free usage exceeded, subscribe to Go" in the first message sent?
- [#44272](https://github.com/anomalyco/opencode/issues/44272) fix(server): avoid runtime loads for passive location reads
- [#46457](https://github.com/anomalyco/opencode/issues/46457) error
- [#46440](https://github.com/anomalyco/opencode/issues/46440) 微信支持群
- [#46448](https://github.com/anomalyco/opencode/issues/46448) تكرار الكتابة
- [#46514](https://github.com/anomalyco/opencode/issues/46514) Bug Report

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,534 · **Open issues:** 1,244 · **Last push:** <1h ago

On September 1, 2026, Qwen Code released version v0.22.3-nightly.20260831.3a0c4c6108, introducing significant enhancements such as Git state hints next to branch picker actions and the ability to emit Step 3A fan-out as a generated workflow script. Key merged pull requests included fixes to maintain image views for older sharp releases and improvements to session issue bindings. Merging also addressed four critical trust-boundary holes in hook execution, enhancing security within the codebase. Among the new issues, the unnecessary prompt for pressing Ctrl+S to show more lines (#10640) has attracted notable attention, sparking discussions on its user experience implications.

#### 🚀 New Releases
- [v0.22.3-nightly.20260831.3a0c4c6108](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.3-nightly.20260831.3a0c4c6108) Release v0.22.3-nightly.20260831.3a0c4c6108

#### ✅ Merged PRs
- [#10633](https://github.com/QwenLM/qwen-code/pull/10633) fix(core): keep image views working with sharp releases older than 0.34
- [#10425](https://github.com/QwenLM/qwen-code/pull/10425) feat(web-shell): derive session issue bindings from the closing references of bound PRs
- [#10427](https://github.com/QwenLM/qwen-code/pull/10427) fix(hooks): close four trust-boundary holes in hook execution
- [#10066](https://github.com/QwenLM/qwen-code/pull/10066) feat(serve): allow relocating session attachment storage via env var
- [#10404](https://github.com/QwenLM/qwen-code/pull/10404) fix(serve): classify channel initialization timeouts
- [#10655](https://github.com/QwenLM/qwen-code/pull/10655) fix(web-shell,core): clear leaked test-run async under the unhandled-error gate
- [#10587](https://github.com/QwenLM/qwen-code/pull/10587) fix(review): readable bilingual disclosures for lint deferrals and caller prose
- [#9492](https://github.com/QwenLM/qwen-code/pull/9492) fix(core): make loop detection result-aware for task_list polls

#### 🐛 New Issues
- [#10640](https://github.com/QwenLM/qwen-code/issues/10640) `Press ctrl+s to show more lines` shown unnecessarily. `priority/P3` `type/bug` `category/ui` `scope/rendering` 💬4
- [#10652](https://github.com/QwenLM/qwen-code/issues/10652) Follow-up to #10189: harden skill install-artifact handling (legacy names, rollback visibility, stale artifact sweep) `priority/P3` `type/feature-request` `category/integration` `scope/extensions` 💬3
- [#10642](https://github.com/QwenLM/qwen-code/issues/10642) Home / End key isn't working one scrolling content. `priority/P3` `status/waiting-for-feedback` `type/bug` `category/ui` 💬3
- [#10654](https://github.com/QwenLM/qwen-code/issues/10654) review run: the decided-stop fence's trust anchor lives inside the model session's write surface `priority/P2` `category/security` `scope/commands` `type/enhancement` 💬2
- [#10641](https://github.com/QwenLM/qwen-code/issues/10641) mechanism to auto clean up the `.qwen` folder? `priority/P3` `type/feature-request` `category/configuration` `scope/settings` 💬2
- [#10638](https://github.com/QwenLM/qwen-code/issues/10638) feat(web-shell): expose ready session artifact snapshots `priority/P2` `type/feature-request` `category/ui` `scope/web-shell` 💬2
- [#10620](https://github.com/QwenLM/qwen-code/issues/10620) docs(auth): document Token Plan setup (endpoint, regions, env key, settings.json example) `priority/P2` `type/documentation` `category/authentication` `scope/documentation` 💬2
- [#10616](https://github.com/QwenLM/qwen-code/issues/10616) Main CI failed: E2E Tests on 4123aa6fda91 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10618](https://github.com/QwenLM/qwen-code/issues/10618) Main CI failed: E2E Tests on be5f00eb807d `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10663](https://github.com/QwenLM/qwen-code/issues/10663) Main CI failed: Qwen Code CI on d9a120a105e4 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10656](https://github.com/QwenLM/qwen-code/issues/10656) Deferred review findings from PR #10610 💬1
- [#10635](https://github.com/QwenLM/qwen-code/issues/10635) Deferred review findings from PR #10611 💬1
- [#10658](https://github.com/QwenLM/qwen-code/issues/10658) Main CI failed: Qwen Code CI on f86098363d89 `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#10651](https://github.com/QwenLM/qwen-code/issues/10651) Main CI failed: Qwen Code CI on be585888f8cf `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10646](https://github.com/QwenLM/qwen-code/issues/10646) Release Failed for v0.22.3-nightly.20260831.3a0c4c6108 on 2026-08-31 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10637](https://github.com/QwenLM/qwen-code/issues/10637) Main CI failed: Qwen Code CI on 1e695c34ff00 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10622](https://github.com/QwenLM/qwen-code/issues/10622) Main CI failed: E2E Tests on d6878a84e829 `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#10632](https://github.com/QwenLM/qwen-code/issues/10632) Main CI failed: Qwen Code CI on 12343f259856 `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#10631](https://github.com/QwenLM/qwen-code/issues/10631) Main CI failed: E2E Tests on 12343f259856 `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#10662](https://github.com/QwenLM/qwen-code/issues/10662) Deferred review findings from PR #10171
- [#10661](https://github.com/QwenLM/qwen-code/issues/10661) Deferred review findings from PR #10659
- [#10660](https://github.com/QwenLM/qwen-code/issues/10660) Deferred review findings from PR #10489
- [#10625](https://github.com/QwenLM/qwen-code/issues/10625) Main CI failed: Qwen Code CI on 954f3a92ce7f `type/bug` `status/ready-for-agent` `autofix/approved`
- [#10623](https://github.com/QwenLM/qwen-code/issues/10623) Main CI failed: Qwen Code CI on 569756ee506d `type/bug` `status/ready-for-agent` `autofix/approved`

#### 🔒 Closed Issues
- [#9450](https://github.com/QwenLM/qwen-code/issues/9450) task_list can falsely trigger duplicate tool-call loop detection while team state changes
- [#9281](https://github.com/QwenLM/qwen-code/issues/9281) task_list treats blank optional filters as active filters
- [#10380](https://github.com/QwenLM/qwen-code/issues/10380) Auto-compaction does not recover when an OpenAI-compatible gateway returns HTTP 413
- [#9434](https://github.com/QwenLM/qwen-code/issues/9434) `ask` returns from an Edit/WriteFile PreToolUse hook do not display diffs.
- [#10392](https://github.com/QwenLM/qwen-code/issues/10392) fix(ci): extend protected qwen leftover sweep to the review-pr job's base checkout
- [#10642](https://github.com/QwenLM/qwen-code/issues/10642) Home / End key isn't working one scrolling content.
- [#10187](https://github.com/QwenLM/qwen-code/issues/10187) Managed Skill reinstall can delete the existing installation when the final rename fails
- [#10228](https://github.com/QwenLM/qwen-code/issues/10228) After starting `qwen serve --token xxx`, once MCP is loaded, it becomes impossible to have a conversation in Web UI page
- [#10234](https://github.com/QwenLM/qwen-code/issues/10234) feat(serve): allow user-level language sync before a session exists
- [#10447](https://github.com/QwenLM/qwen-code/issues/10447) Main CI failed: Qwen Code CI on c13aa351a0df
- [#10523](https://github.com/QwenLM/qwen-code/issues/10523) Main CI failed: Qwen Code CI on 265e7f1fbe67
- [#10529](https://github.com/QwenLM/qwen-code/issues/10529) Main CI failed: Qwen Code CI on 02f2101f4305
- [#10581](https://github.com/QwenLM/qwen-code/issues/10581) Main CI failed: Qwen Code CI on 40889bad7593
- [#10475](https://github.com/QwenLM/qwen-code/issues/10475) Main CI failed: E2E Tests on c3b093f26751
- [#10616](https://github.com/QwenLM/qwen-code/issues/10616) Main CI failed: E2E Tests on 4123aa6fda91
- [#10618](https://github.com/QwenLM/qwen-code/issues/10618) Main CI failed: E2E Tests on be5f00eb807d
- [#10481](https://github.com/QwenLM/qwen-code/issues/10481) Main CI failed: Qwen Code CI on 52e13e422490
- [#10488](https://github.com/QwenLM/qwen-code/issues/10488) Main CI failed: Qwen Code CI on 866b7fe9a63c
- [#10646](https://github.com/QwenLM/qwen-code/issues/10646) Release Failed for v0.22.3-nightly.20260831.3a0c4c6108 on 2026-08-31
- [#10637](https://github.com/QwenLM/qwen-code/issues/10637) Main CI failed: Qwen Code CI on 1e695c34ff00
- [#10622](https://github.com/QwenLM/qwen-code/issues/10622) Main CI failed: E2E Tests on d6878a84e829
- [#10632](https://github.com/QwenLM/qwen-code/issues/10632) Main CI failed: Qwen Code CI on 12343f259856
- [#10631](https://github.com/QwenLM/qwen-code/issues/10631) Main CI failed: E2E Tests on 12343f259856
- [#10625](https://github.com/QwenLM/qwen-code/issues/10625) Main CI failed: Qwen Code CI on 954f3a92ce7f
- [#10623](https://github.com/QwenLM/qwen-code/issues/10623) Main CI failed: Qwen Code CI on 569756ee506d

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

**Stars:** 388,310 · **Open issues:** 5,895 · **Last push:** <1h ago

On September 1, 2026, OpenClaw released version 2026.8.1, which includes updates like improved help for completing automatic updates and searching visible conversation threads. Key merged pull requests feature enhancements such as the addition of an external verification contract (PR #113517) and fixes for retaining selected completion transports (PR #134521) and reducing Gateway memory usage during session cleanup (PR #134554). However, a notably problematic issue has emerged regarding the upgrade to version 2026.8.1, where users report the Gateway entering crash loops and blocking migrations due to the ExecApprovalsMigrationRequiredError (issue #133813). This has raised concerns about the stability of the latest update and the migration process from legacy systems.

#### 🚀 New Releases
- [v2026.8.1](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1) OpenClaw 2026.8.1

#### ✅ Merged PRs
- [#134618](https://github.com/openclaw/openclaw/pull/134618) test(memory): remove retired inline deduplication copies
- [#134569](https://github.com/openclaw/openclaw/pull/134569) test(minimax): clear OAuth observation deadlines
- [#134521](https://github.com/openclaw/openclaw/pull/134521) fix: retain the selected simple-completion transport
- [#113517](https://github.com/openclaw/openclaw/pull/113517) feat(approvals): add external verification contract
- [#134420](https://github.com/openclaw/openclaw/pull/134420) fix(skills): keep release validation current and separate tooling failures
- [#133735](https://github.com/openclaw/openclaw/pull/133735) fix: cancel cloud provisioning when stopping a worker
- [#134464](https://github.com/openclaw/openclaw/pull/134464) fix: report settled heartbeat cron outcomes
- [#134474](https://github.com/openclaw/openclaw/pull/134474) docs(ci): recover original PR runs before full dispatch
- [#134414](https://github.com/openclaw/openclaw/pull/134414) perf(build): reuse staged SDK declarations across profiles
- [#134326](https://github.com/openclaw/openclaw/pull/134326) perf(cloud): reuse worker archives from project snapshots
- [#134609](https://github.com/openclaw/openclaw/pull/134609) test(media): reuse the stateless provider registry graph
- [#134571](https://github.com/openclaw/openclaw/pull/134571) test(firecrawl): check the complete count diagnostic
- [#133783](https://github.com/openclaw/openclaw/pull/133783) fix(tool-display): don't render shell redirects or `rg --files` as search targets
- [#134541](https://github.com/openclaw/openclaw/pull/134541) perf(doctor): avoid loading unused plugin runtimes
- [#134050](https://github.com/openclaw/openclaw/pull/134050) fix(gateway): keep plugin surfaces reachable over bracketed IPv6 hosts
- [#134606](https://github.com/openclaw/openclaw/pull/134606) test(msteams): combine parent-context cache lifecycle phases
- [#133358](https://github.com/openclaw/openclaw/pull/133358) fix(agents): retain grep matches with byte-form paths
- [#134602](https://github.com/openclaw/openclaw/pull/134602) test(azure-speech): clear the socket-close observation timer
- [#134236](https://github.com/openclaw/openclaw/pull/134236) fix(install): drop default npm --silent so EEXIST/ENOTEMPTY recovery sees the log (#134201)
- [#134554](https://github.com/openclaw/openclaw/pull/134554) fix: reduce Gateway memory during session lookup and cleanup
- [#134599](https://github.com/openclaw/openclaw/pull/134599) test(plugin-sdk): clear the completed cancellation deadline
- [#134553](https://github.com/openclaw/openclaw/pull/134553) test(providers): simplify model helper assertions
- [#133599](https://github.com/openclaw/openclaw/pull/133599) fix(line): answer the directory with the peers and groups the config names
- [#134145](https://github.com/openclaw/openclaw/pull/134145) fix: stop SMS work when credentials become unavailable
- [#134592](https://github.com/openclaw/openclaw/pull/134592) fix(release): validate frozen packages with bundled activation fixtures
- [#134596](https://github.com/openclaw/openclaw/pull/134596) improve(ui): simplify chat selection popup
- [#134534](https://github.com/openclaw/openclaw/pull/134534) fix(logs): JSON error summaries hide the actual failure reason
- [#134285](https://github.com/openclaw/openclaw/pull/134285) test(ios): remove duplicated Watch source guards
- [#133465](https://github.com/openclaw/openclaw/pull/133465) fix(ui): prevent typing lag in long chat transcripts
- [#134591](https://github.com/openclaw/openclaw/pull/134591) fix(ui): stop the Home work snapshot from titling the conversation
- [#134242](https://github.com/openclaw/openclaw/pull/134242) fix(slack): honor the configured image downscale limit on downloadFile
- [#134562](https://github.com/openclaw/openclaw/pull/134562) fix(memory): preserve abort errors with native response streams
- [#134580](https://github.com/openclaw/openclaw/pull/134580) test(gateway): prove live compaction pressure and replay contracts
- [#134583](https://github.com/openclaw/openclaw/pull/134583) test(process): reuse supervisor factories across fresh instances
- [#134380](https://github.com/openclaw/openclaw/pull/134380) fix(macos): let stalled provider sign-in exit
- [#134574](https://github.com/openclaw/openclaw/pull/134574) docs: clarify configured media fallback selection
- [#134106](https://github.com/openclaw/openclaw/pull/134106) fix(memory): preserve vector worker stderr
- [#134538](https://github.com/openclaw/openclaw/pull/134538) perf(build): keep boundary caches scoped to one checkout
- [#134564](https://github.com/openclaw/openclaw/pull/134564) fix: keep channel sends on the selected plugin
- [#134225](https://github.com/openclaw/openclaw/pull/134225) fix(ui): include job name in Cron row action aria-labels
- [#134578](https://github.com/openclaw/openclaw/pull/134578) test(flows): load provider flow owners once per suite
- [#134565](https://github.com/openclaw/openclaw/pull/134565) test: check changed-bench arguments through the parser owner
- [#134563](https://github.com/openclaw/openclaw/pull/134563) test(ci): validate timing fields through the schema owner
- [#134561](https://github.com/openclaw/openclaw/pull/134561) fix(export): honor hidden messages in HTML conversations
- [#134388](https://github.com/openclaw/openclaw/pull/134388) fix(install): keep dry runs from downloading gum
- [#134523](https://github.com/openclaw/openclaw/pull/134523) ci: reuse Watch build products and repair process cleanup
- [#132683](https://github.com/openclaw/openclaw/pull/132683) improve(ios): align composer controls with WebUI
- [#134567](https://github.com/openclaw/openclaw/pull/134567) chore(ui): refresh control ui locales
- [#133940](https://github.com/openclaw/openclaw/pull/133940) docs(cli): list fleet in CLI command index
- [#134556](https://github.com/openclaw/openclaw/pull/134556) test(ci): observe exact shard concurrency without timers
- [#134540](https://github.com/openclaw/openclaw/pull/134540) test(plugins): preserve agent identity in task cancellation
- [#134175](https://github.com/openclaw/openclaw/pull/134175) refactor(plugins): use canonical command registry projections
- [#134456](https://github.com/openclaw/openclaw/pull/134456) fix(ui): remove retained-message inventory banner
- [#134551](https://github.com/openclaw/openclaw/pull/134551) test(nostr): exercise the registered channel plugin
- [#134546](https://github.com/openclaw/openclaw/pull/134546) test(nostr): consolidate key validation under its owner
- [#134543](https://github.com/openclaw/openclaw/pull/134543) test: batch Swift cache fixture timestamp setup
- [#134528](https://github.com/openclaw/openclaw/pull/134528) perf(ci): shard UI checks and reuse SDK compiler inputs
- [#133772](https://github.com/openclaw/openclaw/pull/133772) chore(deps): refresh eligible seven-day npm dependencies
- [#134545](https://github.com/openclaw/openclaw/pull/134545) test(process): observe lane publication without timer flushing
- [#134535](https://github.com/openclaw/openclaw/pull/134535) refactor(gateway): share loopback URL policy
- [#133651](https://github.com/openclaw/openclaw/pull/133651) fix: reuse plugin metadata during prepared Gateway runs
- [#134526](https://github.com/openclaw/openclaw/pull/134526) fix(e2e): let frozen candidates create the agents-delete roster
- [#134539](https://github.com/openclaw/openclaw/pull/134539) test(outbound): reuse target normalization across registry lifecycles
- [#134074](https://github.com/openclaw/openclaw/pull/134074) fix: macOS app relaunches normally after installation
- [#134529](https://github.com/openclaw/openclaw/pull/134529) fix(build): bind declaration caches to plugin selection
- [#134451](https://github.com/openclaw/openclaw/pull/134451) fix(markdown): preserve trailing inline-code whitespace
- [#134513](https://github.com/openclaw/openclaw/pull/134513) test: cover media aliases at their shared owner
- [#134518](https://github.com/openclaw/openclaw/pull/134518) fix(release): recognize frozen subagent live-test opt-in
- [#134512](https://github.com/openclaw/openclaw/pull/134512) docs: clarify mistaken 2026.9.1 beta publication
- [#134486](https://github.com/openclaw/openclaw/pull/134486) perf: skip unused ordinary-table SQL normalization
- [#134520](https://github.com/openclaw/openclaw/pull/134520) test(live): retry GPT-5.6 nonce mismatches
- [#134488](https://github.com/openclaw/openclaw/pull/134488) perf(sessions): bound health and status session reads
- [#134511](https://github.com/openclaw/openclaw/pull/134511) refactor(infra): share filesystem case probes
- [#134505](https://github.com/openclaw/openclaw/pull/134505) perf(ci): avoid duplicate local release package validation
- [#134503](https://github.com/openclaw/openclaw/pull/134503) refactor(wizard): share migration path-entry check
- [#134504](https://github.com/openclaw/openclaw/pull/134504) fix(agents): keep model identity guidance conditional
- [#134501](https://github.com/openclaw/openclaw/pull/134501) perf(build): scope cache inventories to one checkout
- [#134493](https://github.com/openclaw/openclaw/pull/134493) fix(ci): reuse Swift build caches and balance slow test groups
- [#134489](https://github.com/openclaw/openclaw/pull/134489) refactor: streamline agent database read admission
- [#134038](https://github.com/openclaw/openclaw/pull/134038) perf(ci): remove repeated setup and balance complete test workloads
- [#134417](https://github.com/openclaw/openclaw/pull/134417) test: keep transient lifecycle markers out of Git fixtures
- [#134402](https://github.com/openclaw/openclaw/pull/134402) test(ui): retain manual agent-file capture artifacts
- [#134405](https://github.com/openclaw/openclaw/pull/134405) perf(ui): avoid unused Workboard lifecycle lookups
- [#134040](https://github.com/openclaw/openclaw/pull/134040) fix(gateway): reject blank probe --timeout instead of silent default
- [#134181](https://github.com/openclaw/openclaw/pull/134181) fix(cloud): settle project snapshots before enrollment
- [#134377](https://github.com/openclaw/openclaw/pull/134377) fix(xai): handle silent transcripts and order upload options
- [#134378](https://github.com/openclaw/openclaw/pull/134378) test(nostr): consolidate metrics coverage at its owner
- [#134492](https://github.com/openclaw/openclaw/pull/134492) chore(i18n): refresh native locales
- [#133699](https://github.com/openclaw/openclaw/pull/133699) fix(models): keep usage pricing on static model metadata
- [#134391](https://github.com/openclaw/openclaw/pull/134391) fix(plugins): preserve npm plugin files after uninstall
- [#134491](https://github.com/openclaw/openclaw/pull/134491) test(codex): cover forced launcher cleanup
- [#134481](https://github.com/openclaw/openclaw/pull/134481) fix(tooling): use the pinned anchor component inventory
- [#134440](https://github.com/openclaw/openclaw/pull/134440) fix(update): route stored dev package installs to git
- [#134485](https://github.com/openclaw/openclaw/pull/134485) test: exercise shared helper fixture contracts
- [#134484](https://github.com/openclaw/openclaw/pull/134484) fix(tooling): expose pako to linked worktrees
- [#134469](https://github.com/openclaw/openclaw/pull/134469) fix(ci): stabilize macOS Codex queue deadline test
- [#134314](https://github.com/openclaw/openclaw/pull/134314) fix(acp): keep the selected agent through global session operations
- [#134101](https://github.com/openclaw/openclaw/pull/134101) fix(setup): restore runtime capability review
- [#134059](https://github.com/openclaw/openclaw/pull/134059) fix(chat): prevent retired prompts from reappearing
- [#134135](https://github.com/openclaw/openclaw/pull/134135) test: tighten the default truncation boundary
- [#134442](https://github.com/openclaw/openclaw/pull/134442) test(e2e): preserve offline upgrade fixtures and restart proof
- [#134476](https://github.com/openclaw/openclaw/pull/134476) perf(ci): warm macOS dependencies and overlap signing fixtures
- [#134449](https://github.com/openclaw/openclaw/pull/134449) fix(ci): preserve oxlint shard success after graceful drain
- [#134475](https://github.com/openclaw/openclaw/pull/134475) fix(update): detect metadata-free npm installs
- [#134465](https://github.com/openclaw/openclaw/pull/134465) perf: reuse prepared transcript projection queries
- [#133894](https://github.com/openclaw/openclaw/pull/133894) test(tooling): assert benchmark arguments at worker launch
- [#134470](https://github.com/openclaw/openclaw/pull/134470) fix(doctor): preserve updater restart ownership
- [#134205](https://github.com/openclaw/openclaw/pull/134205) refactor: remove catalog test-only URL re-exports
- [#134090](https://github.com/openclaw/openclaw/pull/134090) fix(cli): avoid unnecessary migrations on pristine startup
- [#134422](https://github.com/openclaw/openclaw/pull/134422) fix: release session check expects the retired Doctor backup
- [#134410](https://github.com/openclaw/openclaw/pull/134410) test: initialize upgrade baseline before legacy fixtures
- [#134291](https://github.com/openclaw/openclaw/pull/134291) test: consolidate duplicate Windows runtime import coverage
- [#134241](https://github.com/openclaw/openclaw/pull/134241) fix(browser): partition relay pre-auth admission [AI]
- [#134428](https://github.com/openclaw/openclaw/pull/134428) fix(process): preserve safe mixed-stream command diagnostics
- [#134459](https://github.com/openclaw/openclaw/pull/134459) perf(ci): overlap owned fixtures and refresh UI shard timings
- [#133845](https://github.com/openclaw/openclaw/pull/133845) fix(infra): preserve npm failure identity when subprocess produces no output
- [#134397](https://github.com/openclaw/openclaw/pull/134397) fix(update): recover safely across channel and install switches
- [#134419](https://github.com/openclaw/openclaw/pull/134419) refactor: reuse plugin model policies during Gateway requests
- [#133728](https://github.com/openclaw/openclaw/pull/133728) fix: recover cloud sessions across restart and cancellation
- [#134448](https://github.com/openclaw/openclaw/pull/134448) fix(workers): avoid unrelated inspection and move cleanup during recovery
- [#134429](https://github.com/openclaw/openclaw/pull/134429) fix: release doctor database leases before gateway restart
- [#133925](https://github.com/openclaw/openclaw/pull/133925) fix(sessions): refresh planner stats after bulk cleanup
- [#134452](https://github.com/openclaw/openclaw/pull/134452) perf: skip discarded Readability HTML in text mode
- [#133596](https://github.com/openclaw/openclaw/pull/133596) fix(auth): classify managed SecretRef API keys as static
- [#134255](https://github.com/openclaw/openclaw/pull/134255) refactor: use the shared Tavily response reader directly
- [#132128](https://github.com/openclaw/openclaw/pull/132128) fix: stale cloud workers no longer strand session results
- [#133952](https://github.com/openclaw/openclaw/pull/133952) fix(doctor): identify malformed legacy exec approval fields
- [#134435](https://github.com/openclaw/openclaw/pull/134435) refactor(ui): finish the assistant dock rename and drop duplicate work
- [#134424](https://github.com/openclaw/openclaw/pull/134424) fix(test): avoid lingering CLI helper deadlines
- [#134433](https://github.com/openclaw/openclaw/pull/134433) perf: avoid unused system-event snapshots
- [#134437](https://github.com/openclaw/openclaw/pull/134437) fix(config): import shell keys from configured plugins
- [#134426](https://github.com/openclaw/openclaw/pull/134426) fix(migrate-hermes): preserve source settings and activation policies
- [#134432](https://github.com/openclaw/openclaw/pull/134432) fix(ui): center the sidebar account row in its footer band
- [#133340](https://github.com/openclaw/openclaw/pull/133340) fix(agents): reject bundle LSP calls after disposal
- [#134436](https://github.com/openclaw/openclaw/pull/134436) fix: CI watcher tests time out while loading fixture evidence
- [#133980](https://github.com/openclaw/openclaw/pull/133980) refactor: consolidate package inventory exclusions
- [#134415](https://github.com/openclaw/openclaw/pull/134415) refactor: consolidate upgrade recovery ownership
- [#134441](https://github.com/openclaw/openclaw/pull/134441) test: seed legacy cron jobs after baseline configuration
- [#134387](https://github.com/openclaw/openclaw/pull/134387) refactor: simplify terminal regression fixtures
- [#133996](https://github.com/openclaw/openclaw/pull/133996) fix(agents): expire poll vote echo at TTL
- [#134212](https://github.com/openclaw/openclaw/pull/134212) fix(cli): stop advertising the inert message read --include-thread flag
- [#134381](https://github.com/openclaw/openclaw/pull/134381) fix(gateway): stop outbound retry admission during shutdown
- [#134395](https://github.com/openclaw/openclaw/pull/134395) fix: reduce Gateway memory for session lists and cleanup
- [#134261](https://github.com/openclaw/openclaw/pull/134261) fix: keep retained inputs in transcript order
- [#134370](https://github.com/openclaw/openclaw/pull/134370) test: unmask native link routing and disposal assertions
- [#134418](https://github.com/openclaw/openclaw/pull/134418) fix: keep inactive channel credentials out of inspection
- [#134311](https://github.com/openclaw/openclaw/pull/134311) fix(models): refresh Chutes and Cerebras price estimates
- [#128050](https://github.com/openclaw/openclaw/pull/128050) feat(ui): send new-session drafts to background sessions [AI-assisted]
- [#134416](https://github.com/openclaw/openclaw/pull/134416) fix: report declared configuration accurately in triage
- [#134363](https://github.com/openclaw/openclaw/pull/134363) fix(release): scope frozen upgrade baselines
- [#134309](https://github.com/openclaw/openclaw/pull/134309) fix(release): support frozen Bun package artifacts
- [#133679](https://github.com/openclaw/openclaw/pull/133679) fix(line): keep the typing indicator on replies the gateway drives
- [#134286](https://github.com/openclaw/openclaw/pull/134286) test(ios): trim runtime localization source inventory
- [#134408](https://github.com/openclaw/openclaw/pull/134408) test(tooling): advance the realtime smoke verdict clock
- [#133926](https://github.com/openclaw/openclaw/pull/133926) fix(agents): clarify sessions_send delivery state
- [#134301](https://github.com/openclaw/openclaw/pull/134301) chore(ui): refresh control ui locales
- [#133577](https://github.com/openclaw/openclaw/pull/133577) fix(line): stay quiet while another channel holds the chat
- [#134366](https://github.com/openclaw/openclaw/pull/134366) fix(scripts): restore missing helpers in materialized PR anchors
- [#134026](https://github.com/openclaw/openclaw/pull/134026) perf(workers): reuse validated hashes during workspace activation
- [#134259](https://github.com/openclaw/openclaw/pull/134259) fix(codex): preserve summarized context when switching runtimes
- [#133154](https://github.com/openclaw/openclaw/pull/133154) fix(gateway): name root-request holders in active-work drain diagnostics
- [#134359](https://github.com/openclaw/openclaw/pull/134359) fix: publish Linux bundles from canonical release branches
- [#134247](https://github.com/openclaw/openclaw/pull/134247) fix(cli): omit hidden options from generated shell completions
- [#134356](https://github.com/openclaw/openclaw/pull/134356) refactor: simplify media-core test assertions
- [#134399](https://github.com/openclaw/openclaw/pull/134399) test(tooling): share immutable OpenGrep source fixtures
- [#134401](https://github.com/openclaw/openclaw/pull/134401) test(openai): reuse the terminal history frontier lifecycle
- [#134357](https://github.com/openclaw/openclaw/pull/134357) fix(text): keep astral letters separate when stripping model tokens
- [#134393](https://github.com/openclaw/openclaw/pull/134393) test(tlon): exercise the real channel authorization resolver
- [#134384](https://github.com/openclaw/openclaw/pull/134384) test(elevenlabs): observe realtime transcription completion
- [#130961](https://github.com/openclaw/openclaw/pull/130961) docs(gateway): define external supervisor acceptance rules
- [#134383](https://github.com/openclaw/openclaw/pull/134383) test(deepgram): observe realtime transcription completion
- [#130663](https://github.com/openclaw/openclaw/pull/130663) docs: document model-not-found fallback
- [#134328](https://github.com/openclaw/openclaw/pull/134328) fix(test): preserve Git update fixture identity through postinstall
- [#134369](https://github.com/openclaw/openclaw/pull/134369) perf: reduce repeated work in Control UI history
- [#134382](https://github.com/openclaw/openclaw/pull/134382) test(whatsapp): unify profile directory import lifecycles
- [#134300](https://github.com/openclaw/openclaw/pull/134300) refactor(test): reduce compiled-worker fixture scaffolding
- [#134371](https://github.com/openclaw/openclaw/pull/134371) test(agents): drive compaction fallback retry clocks
- [#134367](https://github.com/openclaw/openclaw/pull/134367) test(tooling): reuse mobile release ref lifecycle fixtures
- [#134345](https://github.com/openclaw/openclaw/pull/134345) test(tooling): cover profiler argument variants at the parser
- [#134372](https://github.com/openclaw/openclaw/pull/134372) fix(agents): stop payload redaction rewriting tool-search counter scopes
- [#134358](https://github.com/openclaw/openclaw/pull/134358) fix(test): align Doctor install-switch proof with maintenance ownership
- [#134184](https://github.com/openclaw/openclaw/pull/134184) refactor: remove synthetic chat callback recovery
- [#134310](https://github.com/openclaw/openclaw/pull/134310) fix(ui): keep images visible during hard refresh
- [#134136](https://github.com/openclaw/openclaw/pull/134136) fix(skills): detect skill roots created after startup
- [#134374](https://github.com/openclaw/openclaw/pull/134374) perf: score Tool Search queries through term postings
- [#134200](https://github.com/openclaw/openclaw/pull/134200) fix(worker): preserve cloud execution and recovery failures
- [#134223](https://github.com/openclaw/openclaw/pull/134223) fix(gateway): keep TLS diagnostics from generating certificates
- [#134111](https://github.com/openclaw/openclaw/pull/134111) fix(agents): single-source model fallback availability
- [#134193](https://github.com/openclaw/openclaw/pull/134193) fix(update): npm-hardened global updates no longer roll back
- [#134364](https://github.com/openclaw/openclaw/pull/134364) test(cli): scope module resets to mocked policy cases
- [#134095](https://github.com/openclaw/openclaw/pull/134095) test(plugins): simplify provider fixtures
- [#134269](https://github.com/openclaw/openclaw/pull/134269) fix(cli): honor usage options in full status reports
- [#134088](https://github.com/openclaw/openclaw/pull/134088) fix(workers): expire unused snapshots when projects are idle
- [#134355](https://github.com/openclaw/openclaw/pull/134355) test(process): observe capacity group admission directly
- [#134214](https://github.com/openclaw/openclaw/pull/134214) fix(xai): scope TTS network allowance to the configured origin on both paths
- [#134339](https://github.com/openclaw/openclaw/pull/134339) refactor(plugin-state): share store option policy
- [#134335](https://github.com/openclaw/openclaw/pull/134335) test(sessions): await the conversation owner deadline
- [#134166](https://github.com/openclaw/openclaw/pull/134166) fix(installer): preserve Fedora Node packages with unsafe SQLite
- [#133617](https://github.com/openclaw/openclaw/pull/133617) fix(plugins): stop suggesting unavailable drift updates
- [#134350](https://github.com/openclaw/openclaw/pull/134350) test(tooling): reuse Periphery workflow code fixtures
- [#134283](https://github.com/openclaw/openclaw/pull/134283) fix(ci): record complete native UI file timings
- [#134288](https://github.com/openclaw/openclaw/pull/134288) test(macos): remove app profile source invariants
- [#134322](https://github.com/openclaw/openclaw/pull/134322) test(lmstudio): reuse oversized response source chunks
- [#134319](https://github.com/openclaw/openclaw/pull/134319) test(infra): load execution policy modules once per suite
- [#134318](https://github.com/openclaw/openclaw/pull/134318) perf(ui): prepare usage query predicates once
- [#134290](https://github.com/openclaw/openclaw/pull/134290) refactor: reuse prepared plugin facts during Gateway turns
- [#133988](https://github.com/openclaw/openclaw/pull/133988) fix(gateway): release cached transcript backing storage
- [#119516](https://github.com/openclaw/openclaw/pull/119516) fix(update): recover the managed gateway after a failed CLI update
- [#134324](https://github.com/openclaw/openclaw/pull/134324) test(browser): remove duplicated profile allocation demonstrations
- [#134245](https://github.com/openclaw/openclaw/pull/134245) test(auto-reply): avoid catalog discovery in media fixtures
- [#134056](https://github.com/openclaw/openclaw/pull/134056) fix: preserve speech and process output through nested tools
- [#134238](https://github.com/openclaw/openclaw/pull/134238) fix(sessions): avoid excessive history copies and preserve fork provenance
- [#134043](https://github.com/openclaw/openclaw/pull/134043) perf(workers): streamline cloud startup and fix bootstrap archive races
- [#134014](https://github.com/openclaw/openclaw/pull/134014) fix(pr): prevent parallel main refreshes from colliding
- [#134246](https://github.com/openclaw/openclaw/pull/134246) refactor(agents): reduce per-turn policy and tool preparation
- [#134268](https://github.com/openclaw/openclaw/pull/134268) fix(macos): finish ChatGPT login after Gateway reconnect
- [#134045](https://github.com/openclaw/openclaw/pull/134045) fix: retain 2026.8.1 release fixes on main
- [#134277](https://github.com/openclaw/openclaw/pull/134277) test(tooling): configure fixture identity in the commit command
- [#134231](https://github.com/openclaw/openclaw/pull/134231) fix(docker): include shared lifecycle marker in install stages
- [#134189](https://github.com/openclaw/openclaw/pull/134189) fix(ui): recover suspended tabs after gateway updates
- [#134252](https://github.com/openclaw/openclaw/pull/134252) perf(sessions): reuse prepared transcript batch writers
- [#134294](https://github.com/openclaw/openclaw/pull/134294) perf(ci): use runtime-only builds for Node test prerequisites
- [#134315](https://github.com/openclaw/openclaw/pull/134315) test(xai): verify OAuth runtime imports stay lazy
- [#134296](https://github.com/openclaw/openclaw/pull/134296) test(tooling): batch startup benchmark state cases
- [#134244](https://github.com/openclaw/openclaw/pull/134244) fix(cli): keep embedded triage on the diagnosed installation
- [#134123](https://github.com/openclaw/openclaw/pull/134123) test(macos): remove duplicate shell smoke check

#### 🐛 New Issues
- [#133813](https://github.com/openclaw/openclaw/issues/133813) [Bug]: 2026.8.1 upgrade crash-loops the Gateway; doctor --fix is blocked by ExecApprovalsMigrationRequiredError `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬7
- [#133999](https://github.com/openclaw/openclaw/issues/133999) doctor --fix fails with a message advising to run doctor --fix (legacy exec approvals) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬7
- [#134307](https://github.com/openclaw/openclaw/issues/134307) [Bug]: `auth: "oauth"` MCP servers are absent from the tool catalog on `claude-cli` runtime turns (present on native runtime) 💬6
- [#133793](https://github.com/openclaw/openclaw/issues/133793) [Bug]: required Codex runtime dead-ends on capability consent `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬5
- [#133984](https://github.com/openclaw/openclaw/issues/133984) [Bug]: 2026.7.1-2 → 2026.8.1 leaves Gateway unstartable; startup and `doctor --fix` both skip config-key migrations non-interactively `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬5
- [#134445](https://github.com/openclaw/openclaw/issues/134445) [Bug]: doctor --fix never completes legacy workspace migration when a zero-byte attestation file exists ("invalid header"); agent channel hard-fails until file is removed manually `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#134243](https://github.com/openclaw/openclaw/issues/134243) Discord stt-tts: xAI transcription returns empty text (failed 0/1 missing text) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#134169](https://github.com/openclaw/openclaw/issues/134169) [Bug]: config migrations replace ALL inline secrets (discord token, provider apiKeys) with literal __OPENCLAW_REDACTED__ in runtime config — 2026.8.1 `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬4
- [#133992](https://github.com/openclaw/openclaw/issues/133992) 2026.8.1 stable: gateway cannot start on installs with a legacy session store, and doctor --fix does not migrate it — please consider pulling 2026.8.1 from latest and shipping a 7.1-3 stopgap `P1` `impact:crash-loop` `maturity:stable` 💬4
- [#134325](https://github.com/openclaw/openclaw/issues/134325) [Bug]: Gateway reports authenticated claude-cli models unavailable, so Control UI hard-disables working rows `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#134305](https://github.com/openclaw/openclaw/issues/134305) [Bug]: Model picker persists an OpenAI model without ensuring its required Codex harness can run `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#134055](https://github.com/openclaw/openclaw/issues/134055) [Bug]: Slack DM threads stopped getting thread-scoped sessions after 2026.7.1-2 `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬4
- [#134201](https://github.com/openclaw/openclaw/issues/134201) [Bug]: install.sh passes --silent, blanking the npm log and disabling its own EEXIST/ENOTEMPTY auto-recovery and all failure diagnostics `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#134304](https://github.com/openclaw/openclaw/issues/134304) [Bug]: Unregistered required agent harness leaves model-dependent turns failing while Gateway stays healthy `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#133855](https://github.com/openclaw/openclaw/issues/133855) [Bug]: Browser Talk agent-consult persists internal prompt as a user chat turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#134331](https://github.com/openclaw/openclaw/issues/134331) `openclaw doctor --fix` reports `legacy workspace setup conflicts with canonical SQLite state` on every run and never resolves it, silently dead-lettering every Discord message `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#134036](https://github.com/openclaw/openclaw/issues/134036) [Bug]: doctor --fix/--repair silently skip all 2026.8.1 doctor-owned state migrations without a TTY, while every error message says to run doctor --fix `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#134340](https://github.com/openclaw/openclaw/issues/134340) device pairing store migration failed: NOT NULL constraint failed: device_pairing_paired.created_at_ms — polluted paired.json mixes pending requests `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#133709](https://github.com/openclaw/openclaw/issues/133709) Surface permission requests from background ACP sessions (Claude Code adapter) as approvals `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#134182](https://github.com/openclaw/openclaw/issues/134182) [Bug]: macOS ChatGPT OAuth callback fails with generic Gateway transport error `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:auth-provider` 💬3
- [#134337](https://github.com/openclaw/openclaw/issues/134337) memory_search dirty maintenance repeatedly full-reindexes under concurrent writes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#133941](https://github.com/openclaw/openclaw/issues/133941) Session list title previews retain full prompt strings in Gateway memory `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#134077](https://github.com/openclaw/openclaw/issues/134077) Model Providers counts web-tool credentials and duplicate auth aliases as configured LLM providers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#134081](https://github.com/openclaw/openclaw/issues/134081) [Bug]: Browser Talk agent-consult inherits released gateway admission and rejects later turns `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#134276](https://github.com/openclaw/openclaw/issues/134276) WebChat renders assistant commentary text 3x on screen (not a copy artifact; persists with chatPersistCommentary off) `P2` `impact:ux-friction` 💬3
- [#134226](https://github.com/openclaw/openclaw/issues/134226) [BUG] Fallback chain fails with 'Cannot read properties of undefined (reading trim)' on 2026.8.1 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#134187](https://github.com/openclaw/openclaw/issues/134187) Model fallback misclassifies ActiveTurnClaimError as a model failure and pointlessly cycles the entire fallback chain `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#134179](https://github.com/openclaw/openclaw/issues/134179) Gateway fails to start after upgrading from a file-backed release: legacy exec-approvals.json is neither imported nor quarantined 💬3
- [#133981](https://github.com/openclaw/openclaw/issues/133981) [state-migrations] Empty legacy memory/<agent-id>.sqlite sidecar triggers "not a legacy memory index" warning for every agent on modern DB layout `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#133985](https://github.com/openclaw/openclaw/issues/133985) [Bug]: deps.refreshOpenAICodexToken is not a function — codex auth refresh fails, breaking app inventory and openai-curated plugins (google-calendar, gmail) `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#134000](https://github.com/openclaw/openclaw/issues/134000) Recovery-path dead ends: gateway install under sudo targets /root and fails; uninstall --all blocks all cleanup when the unit is missing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134153](https://github.com/openclaw/openclaw/issues/134153) Memory search falls back to full JSON embedding scan despite sqlite-vec KNN being ready (~10x regression, 338ms -> 3.4s) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#133956](https://github.com/openclaw/openclaw/issues/133956) session.members.add accepts channel-scoped actor ids that can never match a viewer `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#133946](https://github.com/openclaw/openclaw/issues/133946) [Bug]: Native SSH sandbox backend: exec abort wedges subsequent calls in same session (persists after #110704 / #102006 fix) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#133881](https://github.com/openclaw/openclaw/issues/133881) [Bug]: doctor --fix silently defers doctor-only state migrations (auth profiles, workspace setup state) while the Gateway is running; runtime errors point back at doctor --fix 💬3
- [#133933](https://github.com/openclaw/openclaw/issues/133933) Vietnamese diacritical marks incorrectly rendered - marks separated `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#133930](https://github.com/openclaw/openclaw/issues/133930) Control UI: Vietnamese (combining-mark) diacritics render decomposed/split — ship a Vietnamese webfont in the base build `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#133810](https://github.com/openclaw/openclaw/issues/133810) Externally-managed plugins remain pinned to pre-upgrade version and crash on load after npm install -g openclaw (2026.7.1 -> 2026.8.1) `P1` `impact:message-loss` `impact:auth-provider` 💬3
- [#133860](https://github.com/openclaw/openclaw/issues/133860) [Bug]: llama.cpp "Context size has been exceeded." not recognized as context overflow → compact-and-retry skipped `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#133786](https://github.com/openclaw/openclaw/issues/133786) Feature: allow parent-only Slack acknowledgment reactions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#134558](https://github.com/openclaw/openclaw/issues/134558) [Bug]:durable session progress card that renders above the composer clips markdown content. `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#134347](https://github.com/openclaw/openclaw/issues/134347) [Bug] macOS Codex OAuth failure dialog cannot be dismissed or restarted `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#134240](https://github.com/openclaw/openclaw/issues/134240) Internal runtime-context envelope leaks into Telegram channel messages (same class as documented ACP leak) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬2
- [#134509](https://github.com/openclaw/openclaw/issues/134509) Legacy identity/device-auth.json reappears within ~1 minute of a clean 'openclaw doctor --fix', breaking every fresh Gateway/MCP client connection again `P2` `impact:auth-provider` `maturity:stable` 💬2
- [#134500](https://github.com/openclaw/openclaw/issues/134500) One-shot main-session cron (at + now) still fails when heartbeat is 0m — skipped: disabled `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134471](https://github.com/openclaw/openclaw/issues/134471) Managed control fails owner validation on healthy Codex route after restart (v2026.8.1) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134502](https://github.com/openclaw/openclaw/issues/134502) [Bug]: Automations list reports caller-scoped totals without disclosing its restricted view `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134499](https://github.com/openclaw/openclaw/issues/134499) Subagent announce wake drops transcript-commit gate and can run on stale context `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134313](https://github.com/openclaw/openclaw/issues/134313) [Bug]: Host ACP sessions lose the selected owner for global and bare keys `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#134327](https://github.com/openclaw/openclaw/issues/134327) [Bug]: Heartbeat cron run is recorded succeeded before its cron-nested agent turn fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#134204](https://github.com/openclaw/openclaw/issues/134204) [Bug]: 8.1 llama.cpp upgrade leaves configured local memory without managed embedding setup `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#134467](https://github.com/openclaw/openclaw/issues/134467) [Bug]: Google-backed Cloudflare Access leaves authenticated profile permanently unavailable `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134458](https://github.com/openclaw/openclaw/issues/134458) 2026.8.1: "Cannot persist cron store with N invalid job(s)" blocks startup — invalid jobs never named, doctor --fix does not clear `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133749](https://github.com/openclaw/openclaw/issues/133749) telegram: tsgo:extensions is red on main — grammy 1.46 removed the rich-message members still referenced in body-helpers/allowed-updates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬2
- [#134453](https://github.com/openclaw/openclaw/issues/134453) [Bug]: Windows 2026.8.1 doctor --fix aborts with bare file not found while interactive openclaw doctor completes `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#134439](https://github.com/openclaw/openclaw/issues/134439) [Bug]: Official Docker image lacks libgomp1, so managed llama.cpp local embeddings can never start `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134430](https://github.com/openclaw/openclaw/issues/134430) [Bug]: macOS app crash-loops with Cookie sync enabled — MainActor isolation check traps in CookieSyncManager.installReadSources `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#133938](https://github.com/openclaw/openclaw/issues/133938) [Bug]: Pending internal-system input appears as a user message in Control UI `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#134248](https://github.com/openclaw/openclaw/issues/134248) [Bug]: Chutes hosted cache-read prices drift from the native catalog `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#134407](https://github.com/openclaw/openclaw/issues/134407) doctor --fix silently deletes authored plugins.entries.<id> for ids the registry cannot resolve — including enabled:false guards — while config set accepts and persists the same key `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:data-loss` 💬2
- [#134343](https://github.com/openclaw/openclaw/issues/134343) [config][plugins] plugins.entries.codex enabled:false but config present triggers warning, mutually exclusive with AgentSelectionRequiredError `P3` 💬2
- [#134341](https://github.com/openclaw/openclaw/issues/134341) Gateway/Doctor deadlock on core:agent-database-maintenance/global (5s wait) + 11× *.reindex-lock.sqlite 0-byte causes sqlite_compact_failed `P3` 💬2
- [#134344](https://github.com/openclaw/openclaw/issues/134344) [doctor/config] Catalog-known opencode/opencode-go compat 40+ preserved for review floods logs, provider-owned overrides not auto-cleaned `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#134342](https://github.com/openclaw/openclaw/issues/134342) [SECRETS_DEGRADED] cold route backupper/flash: empty retired auth-profiles.json misclassified as migration-required, redacted to "secret resolution failed" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#134256](https://github.com/openclaw/openclaw/issues/134256) [Bug]: doctor --fix deletes per-agent memorySearch (incl. extraPaths) instead of migrating to agents.entries.*.memory.search — 2026.8.1 `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#134306](https://github.com/openclaw/openclaw/issues/134306) [Feature]: Make the model picker write scope explicit (or default row clicks to session scope) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#134297](https://github.com/openclaw/openclaw/issues/134297) Gateway: only the first unattributable-proxy 403 per runtime is ever logged — createGatewayUnattributableProxyReporter latches a boolean for the process lifetime `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134348](https://github.com/openclaw/openclaw/issues/134348) Discord auto-presence reports runtime degraded with valid SQLite OAuth profile `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#134237](https://github.com/openclaw/openclaw/issues/134237) [Bug]: Control UI images briefly disappear during hard-refresh hydration `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#134330](https://github.com/openclaw/openclaw/issues/134330) `openclaw doctor --fix` enters a deadlock when two OpenClaw installs with mismatched versions coexist on PATH `P2` `maturity:stable` `impact:ux-friction` 💬2
- [#134206](https://github.com/openclaw/openclaw/issues/134206) Upgrade reports success while legacy session store still blocks Gateway startup `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#134224](https://github.com/openclaw/openclaw/issues/134224) [Bug]: Switching to Codex drops compacted conversation summaries `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#134254](https://github.com/openclaw/openclaw/issues/134254) [Bug]: 2026.8.1 rejects per-hook config keys on hooks.internal.entries ("unsupported loader keys ... will not load hook modules") with no migration path `P3` 💬2
- [#134222](https://github.com/openclaw/openclaw/issues/134222) [Bug]: TLS diagnostics generate missing Gateway certificate files `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#134227](https://github.com/openclaw/openclaw/issues/134227) [BUG] Webchat UI shows no progress indicator during long tool calls (2026.8.1) `P2` `impact:ux-friction` 💬2
- [#133797](https://github.com/openclaw/openclaw/issues/133797) Heartbeat (isolatedSession) continuation runs with empty transcript when transcript projection is rebuilding → confused visible replies announced to primary channel `P2` `impact:session-state` `impact:ux-friction` 💬2
- [#133805](https://github.com/openclaw/openclaw/issues/133805) [Feature]: Retire update recovery originals after verifying an upgrade `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#134156](https://github.com/openclaw/openclaw/issues/134156) `openclaw update` silently leaves external plugins on the previous version when capability consent gates the post-update sync, producing a host/plugin mismatch that looks completely healthy `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133929](https://github.com/openclaw/openclaw/issues/133929) [Bug]: Known native Codex sessions can time out before import in large homes `bug` `maintainer` `P1` `clawsweeper:needs-live-repro` 💬2
- [#134186](https://github.com/openclaw/openclaw/issues/134186) Subagent completion announce cannot reach a busy claude-cli session: wake path reports no_active_run mid-turn, then the fallback announce run collides with the turn claim `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#134134](https://github.com/openclaw/openclaw/issues/134134) [Bug]: Crash-loop breaker strips channel config, so channels.start skips configured accounts as unconfigured `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#134144](https://github.com/openclaw/openclaw/issues/134144) Two startup-blocking issues: chained legacy-migration failures with poor error visibility; plugin update can install unresolvable phantom dependency `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#133924](https://github.com/openclaw/openclaw/issues/133924) [Bug]: Missing SMS SecretRef crashes readiness evaluation and channel status `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬2
- [#133935](https://github.com/openclaw/openclaw/issues/133935) Stale path-install records are unclearable: uninstall, registry --refresh and doctor --fix all dead-end `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134037](https://github.com/openclaw/openclaw/issues/134037) [Bug]: openclaw update misdetects a pnpm-global install and installs the new version through npm into a second root `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134085](https://github.com/openclaw/openclaw/issues/134085) [Bug]: 2026.8.1 roster migration stamps agents.ownership: "explicit" without materializing an owner — Gateway boots healthy and silently drops every cron delivery and channel message `P1` `impact:message-loss` 💬2
- [#134076](https://github.com/openclaw/openclaw/issues/134076) plugins update --accept-capabilities does not persist consent for legacy records when capabilities are unchanged `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134004](https://github.com/openclaw/openclaw/issues/134004) [Bug]: Stored anthropic profile shadows claude-cli native auth after 2026.8.1 retires anthropic:claude-cli — 401 on every turn `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134015](https://github.com/openclaw/openclaw/issues/134015) [Bug]: Memory sync with Gemini embeddings aborts — inline batchEmbedContents exceeds Google's 100-request limit and is not classified as splittable `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133923](https://github.com/openclaw/openclaw/issues/133923) Workspace git-backup check misfires on multi-agent setups and can't be satisfied without breaking git `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133955](https://github.com/openclaw/openclaw/issues/133955) gateway.roles: verified-user rejection message overstates its scope, and rejected clients never pause reconnect `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133950](https://github.com/openclaw/openclaw/issues/133950) Internal runtime-context protection block (BEGIN_OPENCLAW_INTERNAL_CONTEXT) visible to the model, mistaken for prompt injection, persists across session reset `P3` 💬2
- [#133899](https://github.com/openclaw/openclaw/issues/133899) [Bug]: Doctor generic account promotion creates forbidden QQBot accounts.default config `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133900](https://github.com/openclaw/openclaw/issues/133900) [Bug]: backup includeWorkspace=false still archives workspaces nested under the state directory `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133719](https://github.com/openclaw/openclaw/issues/133719) [Bug]: Initial image prompt appears twice during worktree preparation `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#133825](https://github.com/openclaw/openclaw/issues/133825) [Bug]: scripts/pr waits for detached Git maintenance after success `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#133757](https://github.com/openclaw/openclaw/issues/133757) [Bug]: Feishu group route bindings remain stale after config reload until Gateway restart `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133738](https://github.com/openclaw/openclaw/issues/133738) [Bug]: Prompt preparation and experience reviews copy storage-only history payloads `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#133736](https://github.com/openclaw/openclaw/issues/133736) [Bug]: macOS logger ignores private interpolation annotations `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#133711](https://github.com/openclaw/openclaw/issues/133711) Control UI: submenu parent rows lose their highlight `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#134621](https://github.com/openclaw/openclaw/issues/134621) [Bug]: macOS computer input executes, then result validation rejects it 💬1
- [#134616](https://github.com/openclaw/openclaw/issues/134616) [Bug]: The upgrade of OpenClaw from 2026.7.1 to 2026.8.1 has been unsuccessful. `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134608](https://github.com/openclaw/openclaw/issues/134608) [Bug]: 2026.8.1 auth migration archives JSON and writes a success receipt without credentials, permanently blocking repair `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134619](https://github.com/openclaw/openclaw/issues/134619) [Bug]: Upgrade to 8.1 Completely Breaks Existing Installation and Major Features `bug` `regression` 💬1
- [#134610](https://github.com/openclaw/openclaw/issues/134610) Bundled Perplexity plugin blocks Gateway readiness without consent 💬1
- [#134612](https://github.com/openclaw/openclaw/issues/134612) [Bug]: live-state SQLite guard ignores the command's own `cd`, blocking databases outside OPENCLAW_STATE_DIR `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬1
- [#134605](https://github.com/openclaw/openclaw/issues/134605) doctor --lint falsely reports bundled Robinhood OAuth failure and can stall on SQLite `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#134604](https://github.com/openclaw/openclaw/issues/134604) [Bug]: memory search results are not monotonic in --max-results; top-1 is not the highest-scoring hit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134533](https://github.com/openclaw/openclaw/issues/134533) Logs JSON summaries misreport server and local failures as unreachable `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#134587](https://github.com/openclaw/openclaw/issues/134587) [Bug]: Self-healing recovery incorrectly detects active_reply_work on hung SSE stream, and sessions delete deadlocks on the same stuck turn claim `bug` `bug:behavior` 💬1
- [#134579](https://github.com/openclaw/openclaw/issues/134579) [Bug]: Active Memory before_prompt_build handler with requiresToolAuthority is never dispatched — automatic recall broken since 2026.8.1-beta.3, including 2026.8.1 stable `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134575](https://github.com/openclaw/openclaw/issues/134575) Memory vector replacement can block Gateway RPC on large indexes `bug` `maintainer` `P1` `clawsweeper:needs-live-repro` 💬1
- [#134576](https://github.com/openclaw/openclaw/issues/134576) Retained Codex command trees can starve the Gateway after runs stall `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134522](https://github.com/openclaw/openclaw/issues/134522) cron creation fails with authenticated configured Codex app-server `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#134573](https://github.com/openclaw/openclaw/issues/134573) macOS: show confirmed setup cancellation instead of a Gateway failure `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#134570](https://github.com/openclaw/openclaw/issues/134570) After upgrading to 2026.8.1: gateway crash-loop and silent dispatch failures caused by incomplete state migrations (7 distinct blockers, misleading error messages) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134557](https://github.com/openclaw/openclaw/issues/134557) Control UI approval of system-agent config proposals is silently dropped — approval consumed, config never applied, no error anywhere `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134552](https://github.com/openclaw/openclaw/issues/134552) Support native canonical-descendant forks in supervised Codex Chats `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#134544](https://github.com/openclaw/openclaw/issues/134544) [Bug]: models.list drops authenticated providers after hot reload until explicit refresh `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134455](https://github.com/openclaw/openclaw/issues/134455) Legacy session migration cannot converge on byte-identical duplicate leaf records `maintainer` `clawsweeper:source-repro` `impact:session-state` `P0` 💬1
- [#134542](https://github.com/openclaw/openclaw/issues/134542) doctor: exec-approvals migration check throws on any version:1 file (including freshly-generated ones) `P1` `maturity:stable` `impact:ux-friction` 💬1
- [#134516](https://github.com/openclaw/openclaw/issues/134516) [Bug]: /models hides externally authenticated OpenAI models that models.list reports available `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#134034](https://github.com/openclaw/openclaw/issues/134034) [Bug]: macOS app relaunches from AppTranslocation after Install and Relaunch `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#134530](https://github.com/openclaw/openclaw/issues/134530) feat: allow thinking overrides on visible sessions_spawn `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#134450](https://github.com/openclaw/openclaw/issues/134450) [Bug]: Terminal inline code loses literal trailing whitespace `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#134515](https://github.com/openclaw/openclaw/issues/134515) [Bug]: update_goal fails with "goal not found", causing a silent infinite retry loop `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134514](https://github.com/openclaw/openclaw/issues/134514) [Bug]: agents.defaults.heartbeat.isolatedSession is ignored by the native heartbeat-main cron job (2026.8.1) `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#134510](https://github.com/openclaw/openclaw/issues/134510) [Bug]: https://openclaw.ai/ has no linux app available even though it presumably exists `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#134508](https://github.com/openclaw/openclaw/issues/134508) backup create always fails on codex-runtime installs: absolute symlinks in codex scratch dirs (tmp/arg0/codex-arg0*/apply_patch) `P1` `impact:other` 💬1
- [#134507](https://github.com/openclaw/openclaw/issues/134507) backup git create fails with "Invalid string length" when a table is very large (memory_embedding_cache ~1.7GB) `P2` `impact:other` 💬1
- [#134506](https://github.com/openclaw/openclaw/issues/134506) [Bug]: Failed cloud sessions cannot be restarted from Control UI `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#134498](https://github.com/openclaw/openclaw/issues/134498) Delivered reply is lost from transcript when session key rebounds before mirror append `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#134495](https://github.com/openclaw/openclaw/issues/134495) [Bug]: Regression in v2026.8.1: `mcp.sessionIdleTtlMs` removed, breaks long-running background MCP servers `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#134497](https://github.com/openclaw/openclaw/issues/134497) [Bug]: Doctor fails to migrate legacy multi-agent config and Gateway rejects the config `bug` `regression` 💬1
- [#134487](https://github.com/openclaw/openclaw/issues/134487) [Bug]: Tool Search schema permits requests rejected at runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134479](https://github.com/openclaw/openclaw/issues/134479) [Bug]: Explicit Telegram forum-topic delivery can fall back to the inbound topic `P2` `impact:message-loss` 💬1
- [#134203](https://github.com/openclaw/openclaw/issues/134203) [Bug]: staged npm update leaves update status package manager unknown `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#134373](https://github.com/openclaw/openclaw/issues/134373) [Bug]: Completed isolated cron run can leave a listed but undeletable session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#134427](https://github.com/openclaw/openclaw/issues/134427) Failed worktree setup hides stdout recovery instructions when stderr has a warning `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#134462](https://github.com/openclaw/openclaw/issues/134462) [Bug]: doctor --fix never migrates legacy exec-approvals.json — execApprovals missing from autoMigrateLegacyState early-exit check `P1` `impact:other` `maturity:stable` 💬1
- [#134461](https://github.com/openclaw/openclaw/issues/134461) 2026.8.1: memory-core startup full reindex can block foreground agent replies until command-lane timeout `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#134460](https://github.com/openclaw/openclaw/issues/134460) [Bug]: Prepared catalog drops native Codex readiness across worker boundary `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#134446](https://github.com/openclaw/openclaw/issues/134446) secrets: exec SecretRef rejects root-owned commands, making /usr/bin/security (macOS keychain) unusable in 2026.8.1 `security` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#134447](https://github.com/openclaw/openclaw/issues/134447) [Bug]: macOS UI never appears; Intel app hangs in AppKit Writing Tools startup (v2026.8.1) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#134444](https://github.com/openclaw/openclaw/issues/134444) Browser extension installer rejects a trusted shared package owner `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134421](https://github.com/openclaw/openclaw/issues/134421) [Bug]: channels login/logout unreachable on explicit multi-agent fleets — channel plugin discovery resolves an ambient workspace via the deprecated resolveDefaultAgentId; hint names three remedies, none of which exists on this surface `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#134409](https://github.com/openclaw/openclaw/issues/134409) [Bug]: Default permission icon is invisible in the macOS composer `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#134398](https://github.com/openclaw/openclaw/issues/134398) gateway auth-mode=token: internal loopback clients receive "missing scope: operator.read" while Control UI succeeds `P2` `impact:auth-provider` `maturity:stable` 💬1
- [#134392](https://github.com/openclaw/openclaw/issues/134392) [Bug]: legacy cron jobs.json import quarantines every job as invalid-schedule, including schedules the same release accepts, and the only trace is a diagnostic_events row `P1` `impact:data-loss` `impact:message-loss` `clawsweeper:bulk-filed` 💬1
- [#134396](https://github.com/openclaw/openclaw/issues/134396) gateway: "OpenClaw does not know the command \"commitments\"" repeats every minute with two parallel strikes `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#134389](https://github.com/openclaw/openclaw/issues/134389) llama-cpp extension: ubatch-size silently dropped when user-configured embedding provider is not the default 💬1
- [#134354](https://github.com/openclaw/openclaw/issues/134354) [Bug]: node-host exec discards the node service PATH by running `/bin/sh -lc` on Linux; the documented remediation (systemd `Environment=PATH`) is a no-op `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134379](https://github.com/openclaw/openclaw/issues/134379) [Bug]: Model Setup persists legacy claude-cli/* key beside canonical Anthropic CLI route `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#134376](https://github.com/openclaw/openclaw/issues/134376) Cross-harness validation bug in managed-control verifier masks as 'inference owner changed' (2026.8.1) 💬1
- [#134267](https://github.com/openclaw/openclaw/issues/134267) [Bug]: Full status reports silently omit requested usage `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#134142](https://github.com/openclaw/openclaw/issues/134142) iOS app (2026.8.10) fails to pair → "Credentials save failed" `P1` `clawsweeper:needs-live-repro` `impact:auth-provider` `issue-rating: 🐚 platinum hermit` 💬1
- [#134353](https://github.com/openclaw/openclaw/issues/134353) [Bug]: Xiaomi provider left with an empty install payload after 2026.7.1-2 -> 2026.8.1 upgrade; Gateway refuses to start `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134352](https://github.com/openclaw/openclaw/issues/134352) Isolated automation returning the silent token NO_REPLY is counted as a delivery failure and trips cron.failureAlert `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#134349](https://github.com/openclaw/openclaw/issues/134349) [Bug]: Security audit suggests a plugins.allow snapshot that omits required on-demand harness plugins 💬1
- [#134143](https://github.com/openclaw/openclaw/issues/134143) Codex runtime drops all configured MCP servers whenever any tool policy is set `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#134329](https://github.com/openclaw/openclaw/issues/134329) [Bug]: Gateway fails to start on fresh linux fresh openclaw 2 `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134332](https://github.com/openclaw/openclaw/issues/134332) memory-core maintenance reindex can fail after a concurrent incremental write `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#134233](https://github.com/openclaw/openclaw/issues/134233) [Bug]: LINE renders buttons but the agent is told they are off, pointing at a config key LINE rejects `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134323](https://github.com/openclaw/openclaw/issues/134323) Managed GitHub local exec can select native authentication after profile loss `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#134320](https://github.com/openclaw/openclaw/issues/134320) State schema migration rebuilds cron_jobs by DROP+RENAME and records nothing — no receipt, no row counts, and the scheduler then boots empty without a log line, so total loss of user automations is unattributable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134321](https://github.com/openclaw/openclaw/issues/134321) A deleted path-source plugin leaves an orphan install record that hard-aborts plugins update --all AND plugins uninstall — the resolver gates the very command that would remove it, and registry --refresh cannot clear it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#134317](https://github.com/openclaw/openclaw/issues/134317) First model request of every new agent run returns HTTP 401 "Token is invalid." (siliconflow) - recovered only by ~8s auth-profile re-warm; regression since 2026.8.1 `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#134199](https://github.com/openclaw/openclaw/issues/134199) [Bug]: Cloud worker failures obscure approval and workspace recovery causes `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134163](https://github.com/openclaw/openclaw/issues/134163) openclaw doctor --fix cannot migrate an agent database from schema 17 to 19: the migration asserts the canonical schema before creating the objects it validates, so the prescribed repair is the command that fails `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#134264](https://github.com/openclaw/openclaw/issues/134264) Bug: `openclaw doctor --fix` cannot clear exec-approvals migration gate on fresh 2026.8.1 upgrade — chicken-and-egg ordering regression `P1` `impact:message-loss` `maturity:stable` `impact:ux-friction` 💬1
- [#133932](https://github.com/openclaw/openclaw/issues/133932) [Bug]: workspace-qualified allowFrom entries resolve to zero Slack approval approvers `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134239](https://github.com/openclaw/openclaw/issues/134239) [Bug]: the message tool's target description names seven channels and ignores the target hint every channel declares `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134257](https://github.com/openclaw/openclaw/issues/134257) [Bug]: doctor --fix ignores OPENCLAW_STATE_DIR isolation — mutates configured agent workspaces during rehearsal on copied state; no --dry-run for state migrations `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134229](https://github.com/openclaw/openclaw/issues/134229) [Bug]: #134165 leaves main red on check-lint-core and check-test-types-core, and because both run PR-only every open PR fails on files it does not touch `P1` `impact:other` 💬1
- [#134202](https://github.com/openclaw/openclaw/issues/134202) [Bug]: safe restart does not refresh managed systemd version metadata after --no-restart update `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#134177](https://github.com/openclaw/openclaw/issues/134177) [Bug]: updater rejects package-owned dist/openclaw-install-guard on npm-hardened installs `no-stale` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#134217](https://github.com/openclaw/openclaw/issues/134217) [Bug]: a LINE quote reaches the agent without the message it points at `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#134215](https://github.com/openclaw/openclaw/issues/134215) [Bug]: `openclaw backup create` (full archive) hangs / deadlocks while the Gateway is running on 2026.8.1 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#134197](https://github.com/openclaw/openclaw/issues/134197) [Bug]: removing a pairing-store allowlist entry by canonical id reports success and removes nothing `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬1
- [#134194](https://github.com/openclaw/openclaw/issues/134194) [Bug]: Discord inbound image attachment staged to a missing directory — turn fails with "Local media file not found" and posts nothing `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#133957](https://github.com/openclaw/openclaw/issues/133957) [Bug]: doctor --fix attempts exclusive SQLite migration before stopping the managed Gateway `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#134191](https://github.com/openclaw/openclaw/issues/134191) [Bug]: before_prompt_build cannot project mediated coding tools for claude-cli `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#134190](https://github.com/openclaw/openclaw/issues/134190) [Feature]: Publish verified npm package-lock sidecars for deterministic packagers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134180](https://github.com/openclaw/openclaw/issues/134180) Control UI webchat history does not render pre-tool text segments of assistant messages (v2026.8.1) `P2` `impact:ux-friction` 💬1
- [#134178](https://github.com/openclaw/openclaw/issues/134178) doctor --fix crashes on legacy exec-approvals.json, blocking all other repairs (incl. required session-store migration) `P1` `impact:session-state` `impact:crash-loop` `maturity:stable` 💬1
- [#134159](https://github.com/openclaw/openclaw/issues/134159) Workboard card deletion waits for Gateway acknowledgement before updating UI `bug` `maintainer` `no-stale` `P2` 💬1
- [#134158](https://github.com/openclaw/openclaw/issues/134158) Control UI unread badge waits for the acknowledgement round trip `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#134152](https://github.com/openclaw/openclaw/issues/134152) TUI startup lacks owner-level phase timing `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134155](https://github.com/openclaw/openclaw/issues/134155) [Bug]: Split-view transcript fade uses the normal chat surface color `bug` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#134154](https://github.com/openclaw/openclaw/issues/134154) [Bug]: TUI shows the default session while restoring the remembered session `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#134012](https://github.com/openclaw/openclaw/issues/134012) [Bug]: Error presentation drops prepared provider ownership and cold-loads plugins `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134141](https://github.com/openclaw/openclaw/issues/134141) 2026.9.1-beta.1 ships state schema 12 (older than stable 2026.8.1's 15), bricking latest→beta upgrades `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#134127](https://github.com/openclaw/openclaw/issues/134127) Compaction: Anthropic stop_reason=refusal (HTTP 200) is not retried through the model fallback chain — session wedges at context ceiling `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133889](https://github.com/openclaw/openclaw/issues/133889) fix(config): copied session-store owner survives changing stores `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133868](https://github.com/openclaw/openclaw/issues/133868) fix(config): legacy roster import conflicts with automatic explicit ownership `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133977](https://github.com/openclaw/openclaw/issues/133977) [Bug]: unavailable channel secret breaks global status snapshots `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#134113](https://github.com/openclaw/openclaw/issues/134113) [Feature]: Incremental transcript index reconcile for append-lagging sessions after imports `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134089](https://github.com/openclaw/openclaw/issues/134089) Control UI: local DOCX download links open binary contents in text sidebar `P2` `impact:ux-friction` 💬1
- [#134079](https://github.com/openclaw/openclaw/issues/134079) [Bug]: Missing vLLM option in interactive Model/auth provider menu during setup `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133901](https://github.com/openclaw/openclaw/issues/133901) [Bug]: plugin registry refresh cannot verify derived source and refuses migration checkpoint `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#134058](https://github.com/openclaw/openclaw/issues/134058) [Docs Bug]: Four merged @100yenadmin PRs lack explicit release credit `P3` 💬1
- [#134048](https://github.com/openclaw/openclaw/issues/134048) Reply silently lost when model-fallback succeeds after the lane task was already rejected `P1` `impact:message-loss` 💬1
- [#134046](https://github.com/openclaw/openclaw/issues/134046) Bug: `openclaw doctor --fix` circular deadlock — cannot resolve legacy exec-approvals when agents.ownership is unset `P1` `impact:other` `maturity:stable` 💬1
- [#134042](https://github.com/openclaw/openclaw/issues/134042) [Bug] 2026.8.1: official AgentMail channel blocked — openChannelIngressQueue only for trusted plugins; catalog trusted-keys list is empty in shipped build `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#133951](https://github.com/openclaw/openclaw/issues/133951) [Bug]: Doctor reports success while workspace migration leftovers still block agent turns `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#133939](https://github.com/openclaw/openclaw/issues/133939) Control UI retains evicted hydrated chat histories `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133959](https://github.com/openclaw/openclaw/issues/133959) [Bug]: Guided setup requires a default agent on explicit multi-agent configurations `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#134016](https://github.com/openclaw/openclaw/issues/134016) actions.sendMessage:false does not block auto-deliver-final-reply fallback on cross-context send denial `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133953](https://github.com/openclaw/openclaw/issues/133953) [Bug]: Dashboard readiness mistakes raw WebSocket closes for a reachable Gateway `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133960](https://github.com/openclaw/openclaw/issues/133960) [Bug]: Accepted channel turns can stop after an acknowledgement without a terminal reply `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#134001](https://github.com/openclaw/openclaw/issues/134001) gateway status --deep leads with plugin drift advisories while the gateway cannot start `P3` 💬1
- [#133998](https://github.com/openclaw/openclaw/issues/133998) [Bug]: openclaw qr --setup-code-only output contains literal ellipsis truncation in stdout bytes 💬1
- [#133997](https://github.com/openclaw/openclaw/issues/133997) doctor restores last-known-good over a config written by another version after validating it as invalid — consider a migration-first path `P1` `impact:data-loss` `maturity:stable` 💬1
- [#133995](https://github.com/openclaw/openclaw/issues/133995) Session elapsed timer resets on page reload; busy/idle state is hard to tell apart in Control UI `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#133844](https://github.com/openclaw/openclaw/issues/133844) [Feature]: Support Gateway-controlled native realtime for thin audio clients `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133987](https://github.com/openclaw/openclaw/issues/133987) [Bug]: GitHub Copilot models unavailable in v2026.8.1 — dynamic model discovery filters all models and requests fail `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#133827](https://github.com/openclaw/openclaw/issues/133827) [Bug]: Tailscale Serve setup failure becomes fatal to an otherwise-ready gateway after 2026.8.1 upgrade 💬1
- [#133954](https://github.com/openclaw/openclaw/issues/133954) [Bug]: channels.start omits the reason an account did not start `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133972](https://github.com/openclaw/openclaw/issues/133972) [Bug]: Discord lifecycle reactions briefly enter an empty state after completion `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬1
- [#133962](https://github.com/openclaw/openclaw/issues/133962) [Bug]: doctor --fix preflight detects doctor-only state migrations in doctor mode but builds the step list with hardcoded mode:"automatic", silently dropping them `P3` 💬1
- [#133776](https://github.com/openclaw/openclaw/issues/133776) [Bug]: Code Mode drops useful prefixes from large escaped output `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133928](https://github.com/openclaw/openclaw/issues/133928) [Feature]: Support outbound Matrix m.emote messages `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#133937](https://github.com/openclaw/openclaw/issues/133937) [Feature]: split the work, more agents, smaller context window `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133936](https://github.com/openclaw/openclaw/issues/133936) [Bug]: WhatsApp setup modal selector does not allow choosing an action `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#133922](https://github.com/openclaw/openclaw/issues/133922) [Bug]: Telegram DM - intermediate assistant text between tool calls delivered as visible messages (2026.8.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#133898](https://github.com/openclaw/openclaw/issues/133898) [Bug]: openclaw backup git create fails with "Invalid string length" on large agent DB (~1.9 GB) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#133906](https://github.com/openclaw/openclaw/issues/133906) slack: qualify sender ids by workspace/team id so a bare Slack user id is never globally unique `P3` 💬1
- [#133907](https://github.com/openclaw/openclaw/issues/133907) sessions: add a supported channel-identity to verified-profile resolution path for attribution and Involving me `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#133909](https://github.com/openclaw/openclaw/issues/133909) gateway: add an explicit admission policy for verified human identities / allowed email domains `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#133905](https://github.com/openclaw/openclaw/issues/133905) slack: preserve profile.email during ingest so senders can resolve to gateway profiles `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133902](https://github.com/openclaw/openclaw/issues/133902) [Bug]: 2026.8.1 keeps legacy memory provider openai but runtime only accepts openai-compatible `P2` `impact:session-state` 💬1
- [#133895](https://github.com/openclaw/openclaw/issues/133895) fix(config): empty legacy roster preview disagrees with the write `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133849](https://github.com/openclaw/openclaw/issues/133849) [Bug]: Control UI mobile pairing QR ignores connected public Gateway endpoint `P2` `impact:ux-friction` 💬1
- [#133850](https://github.com/openclaw/openclaw/issues/133850) [Docs Bug]: Cloudflare Access bypass guidance does not cover official iOS pairing WebSocket `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬1
- [#133836](https://github.com/openclaw/openclaw/issues/133836) [Bug]: Discord `discord:<id>` target is silently assumed to be a user, breaking thread delivery (defaultKind ignored) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133828](https://github.com/openclaw/openclaw/issues/133828) [Bug]: Discord retained plugin generation incompatible with 2026.8.1 core `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#133823](https://github.com/openclaw/openclaw/issues/133823) [Bug]: macOS LaunchAgent Umask is hardcoded to 077 and silently reverts operator changes on update or CLI restart `P3` 💬1
- [#133819](https://github.com/openclaw/openclaw/issues/133819) [Bug]: ACP dispatch silently hangs when wrapper dies/hangs — no timeout, no error propagation, no respawn; message lost after 300s eviction `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133820](https://github.com/openclaw/openclaw/issues/133820) [Bug]: Gateway restart-loop (27 unclean boots) trips breaker and takes down all channels; health-monitor misclassifies as expected stopped, preventing self-healing `P1` `impact:crash-loop` `maturity:stable` 💬1
- [#133785](https://github.com/openclaw/openclaw/issues/133785) [Bug]: New session reports a Gateway change after its first message was accepted `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#133784](https://github.com/openclaw/openclaw/issues/133784) [Bug]: stable 2026.8.1 cannot migrate beta.2 schema-17 DB missing canonical trigger `P1` `impact:other` `maturity:stable` 💬1
- [#133755](https://github.com/openclaw/openclaw/issues/133755) [Feature]: Show GLM Coding Plan team quota in the Usage view (bigmodel.cn org/project), like Copilot quota windows `P3` 💬1
- [#133743](https://github.com/openclaw/openclaw/issues/133743) [Bug]: Native cancellation errors remain active during retry grace `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133733](https://github.com/openclaw/openclaw/issues/133733) [Feature]: Support ambient room events (quiet group context) on Signal groups `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133731](https://github.com/openclaw/openclaw/issues/133731) Feishu DM replies in ACP persistent mode silently suppressed — session JSONL complete, no delivery, outcome=completed `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#133730](https://github.com/openclaw/openclaw/issues/133730) [Feature]: Support for Gemini interaction API endpoints `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#134559](https://github.com/openclaw/openclaw/issues/134559) [Bug]: Tool result "Malformed diagnostic JSON redacted" label hides contents and triggers agent retry loops (regression in 2026.8.1)
- [#134477](https://github.com/openclaw/openclaw/issues/134477) [Bug]: Secret prompt renders a checkbox-like marker and numeric shortcut beside its password field `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster`
- [#133721](https://github.com/openclaw/openclaw/issues/133721) Incorrectly filed by agent

#### 🔒 Closed Issues
- [#90916](https://github.com/openclaw/openclaw/issues/90916) [Feature]: Topic-session families for one assistant across multiple named context lanes
- [#97680](https://github.com/openclaw/openclaw/issues/97680) Beta-tagged update can leave official external plugins on latest instead of the requested beta tag
- [#133813](https://github.com/openclaw/openclaw/issues/133813) [Bug]: 2026.8.1 upgrade crash-loops the Gateway; doctor --fix is blocked by ExecApprovalsMigrationRequiredError
- [#107555](https://github.com/openclaw/openclaw/issues/107555) [Bug] QQ Bot: skill_workshop approval "Allow" button always recorded as rejected
- [#119884](https://github.com/openclaw/openclaw/issues/119884) Agent/session DB migration doesn't ANALYZE → stale planner stats → 15s session ops + 30-57s event-loop starvation on large stores
- [#133999](https://github.com/openclaw/openclaw/issues/133999) doctor --fix fails with a message advising to run doctor --fix (legacy exec approvals)
- [#133347](https://github.com/openclaw/openclaw/issues/133347) 2026.8.1 migration quarantines valid cron jobs as invalid-schedule and silently drops active inventory
- [#80219](https://github.com/openclaw/openclaw/issues/80219) [plugin sdk] Consolidate author surface, lifecycle semantics, and export sprawl
- [#52826](https://github.com/openclaw/openclaw/issues/52826) Add structured process events for sessions
- [#134307](https://github.com/openclaw/openclaw/issues/134307) [Bug]: `auth: "oauth"` MCP servers are absent from the tool catalog on `claude-cli` runtime turns (present on native runtime)
- [#133793](https://github.com/openclaw/openclaw/issues/133793) [Bug]: required Codex runtime dead-ends on capability consent
- [#133478](https://github.com/openclaw/openclaw/issues/133478) [Bug]: Automatic transcript migration lacks agent database maintenance authority
- [#105588](https://github.com/openclaw/openclaw/issues/105588) feat: add exact-turn capability projection reports
- [#134243](https://github.com/openclaw/openclaw/issues/134243) Discord stt-tts: xAI transcription returns empty text (failed 0/1 missing text)
- [#133992](https://github.com/openclaw/openclaw/issues/133992) 2026.8.1 stable: gateway cannot start on installs with a legacy session store, and doctor --fix does not migrate it — please consider pulling 2026.8.1 from latest and shipping a 7.1-3 stopgap
- [#90551](https://github.com/openclaw/openclaw/issues/90551) openclaw update silently restores stale last-known-good config via post-update doctor, discarding intentional changes
- [#130059](https://github.com/openclaw/openclaw/issues/130059) voice-call: final status callback creates a phantom zero-duration call record under the default agent (live record never persists providerCallId) (2026.7.1)
- [#118242](https://github.com/openclaw/openclaw/issues/118242) [Bug]: exec-approvals migration rejects null lastUsedAt/lastUsedCommand written by older versions and never names the offending entry
- [#119281](https://github.com/openclaw/openclaw/issues/119281) [Bug]: Update fails during doctor checks due to Node.js version requirements (Node v24.12.0)
- [#117378](https://github.com/openclaw/openclaw/issues/117378) [Feature]: Expose supported memory-event and memory-wiki maintenance seams for community plugins
- [#117111](https://github.com/openclaw/openclaw/issues/117111) Preserve host-authoritative trusted policy context through Codex dynamic tools
- [#98902](https://github.com/openclaw/openclaw/issues/98902) Feature: logging.redactToolSensitive config option for tool payload redaction
- [#92500](https://github.com/openclaw/openclaw/issues/92500) Add Telegram voice/STT handoff telemetry into agent context
- [#92353](https://github.com/openclaw/openclaw/issues/92353) [Feature]: Auto-load directory-relative AGENTS.md / CLAUDE.md from CWD up to project root (parity with Claude Code & Codex CLI)
- [#85672](https://github.com/openclaw/openclaw/issues/85672) Subagents need first-class dedicated agent-browser sessions (don’t silently miss the user’s logged-in browser)
- [#83994](https://github.com/openclaw/openclaw/issues/83994) cron isolated session: 6项热修复改进建议（路径解析/缓存/时序/投递/幂等）
- [#83276](https://github.com/openclaw/openclaw/issues/83276) feat: Generic tool-call interrupt primitive for HITL workflows
- [#134201](https://github.com/openclaw/openclaw/issues/134201) [Bug]: install.sh passes --silent, blanking the npm log and disabling its own EEXIST/ENOTEMPTY auto-recovery and all failure diagnostics
- [#133468](https://github.com/openclaw/openclaw/issues/133468) [Bug]: iMessage loses the canonical current-conversation route when service is unset
- [#134036](https://github.com/openclaw/openclaw/issues/134036) [Bug]: doctor --fix/--repair silently skip all 2026.8.1 doctor-owned state migrations without a TTY, while every error message says to run doctor --fix
- [#96020](https://github.com/openclaw/openclaw/issues/96020) sessions_send delivery.status stays "pending" even after inter-session message is delivered
- [#134182](https://github.com/openclaw/openclaw/issues/134182) [Bug]: macOS ChatGPT OAuth callback fails with generic Gateway transport error
- [#133941](https://github.com/openclaw/openclaw/issues/133941) Session list title previews retain full prompt strings in Gateway memory
- [#134081](https://github.com/openclaw/openclaw/issues/134081) [Bug]: Browser Talk agent-consult inherits released gateway admission and rejects later turns
- [#134276](https://github.com/openclaw/openclaw/issues/134276) WebChat renders assistant commentary text 3x on screen (not a copy artifact; persists with chatPersistCommentary off)
- [#132736](https://github.com/openclaw/openclaw/issues/132736) Auto-TTS supplement messages on Signal deliver as broken attachment (send hangs in signal-cli daemon)
- [#134179](https://github.com/openclaw/openclaw/issues/134179) Gateway fails to start after upgrading from a file-backed release: legacy exec-approvals.json is neither imported nor quarantined
- [#133981](https://github.com/openclaw/openclaw/issues/133981) [state-migrations] Empty legacy memory/<agent-id>.sqlite sidecar triggers "not a legacy memory index" warning for every agent on modern DB layout
- [#134000](https://github.com/openclaw/openclaw/issues/134000) Recovery-path dead ends: gateway install under sudo targets /root and fails; uninstall --all blocks all cleanup when the unit is missing
- [#129116](https://github.com/openclaw/openclaw/issues/129116) [Bug]: per-tool report digest cache can never hit — its key is an object rebuilt on every attempt
- [#128782](https://github.com/openclaw/openclaw/issues/128782) npm install of 2026.8.1-beta.3 silently one-way-migrates ~/.openclaw state DB (v5→v9) without running the binary; older gateway crash-loops on next restart
- [#133881](https://github.com/openclaw/openclaw/issues/133881) [Bug]: doctor --fix silently defers doctor-only state migrations (auth profiles, workspace setup state) while the Gateway is running; runtime errors point back at doctor --fix
- [#133933](https://github.com/openclaw/openclaw/issues/133933) Vietnamese diacritical marks incorrectly rendered - marks separated
- [#133810](https://github.com/openclaw/openclaw/issues/133810) Externally-managed plugins remain pinned to pre-upgrade version and crash on load after npm install -g openclaw (2026.7.1 -> 2026.8.1)
- [#123305](https://github.com/openclaw/openclaw/issues/123305) [Bug]: Audio language autodetect forwards English default prompt that can leak into transcript
- [#120771](https://github.com/openclaw/openclaw/issues/120771) tools.exec.mode: ask with askFallback: deny does not prompt or deny on allowlist misses for gateway-direct exec (Windows)
- [#70634](https://github.com/openclaw/openclaw/issues/70634) [Bug]: Human messages get starved in agent lane queues when agents communicate in loops
- [#133597](https://github.com/openclaw/openclaw/issues/133597) [Bug]: LINE directory reports no peers or groups on a config that has both
- [#134347](https://github.com/openclaw/openclaw/issues/134347) [Bug] macOS Codex OAuth failure dialog cannot be dismissed or restarted
- [#134509](https://github.com/openclaw/openclaw/issues/134509) Legacy identity/device-auth.json reappears within ~1 minute of a clean 'openclaw doctor --fix', breaking every fresh Gateway/MCP client connection again
- [#134313](https://github.com/openclaw/openclaw/issues/134313) [Bug]: Host ACP sessions lose the selected owner for global and bare keys
- [#134327](https://github.com/openclaw/openclaw/issues/134327) [Bug]: Heartbeat cron run is recorded succeeded before its cron-nested agent turn fails
- [#127448](https://github.com/openclaw/openclaw/issues/127448) npm plugin metadata and pack failures discard timeout or signal termination identity
- [#133749](https://github.com/openclaw/openclaw/issues/133749) telegram: tsgo:extensions is red on main — grammy 1.46 removed the rich-message members still referenced in body-helpers/allowed-updates
- [#131713](https://github.com/openclaw/openclaw/issues/131713) [Bug]: Cloud workspace results remain stuck after Gateway restart
- [#134248](https://github.com/openclaw/openclaw/issues/134248) [Bug]: Chutes hosted cache-read prices drift from the native catalog
- [#133677](https://github.com/openclaw/openclaw/issues/133677) [Bug]: LINE shows no typing indicator for replies the Gateway drives
- [#133576](https://github.com/openclaw/openclaw/issues/133576) [Bug]: LINE answers webhook events marked standby, talking over the channel that holds chat control
- [#130888](https://github.com/openclaw/openclaw/issues/130888) Document cold-start and fail-fast requirements for external restart-handoff supervisors
- [#130256](https://github.com/openclaw/openclaw/issues/130256) docs: model-failover trigger list omits HTTP 404 / model_not_found, which does advance fallback
- [#134343](https://github.com/openclaw/openclaw/issues/134343) [config][plugins] plugins.entries.codex enabled:false but config present triggers warning, mutually exclusive with AgentSelectionRequiredError
- [#134341](https://github.com/openclaw/openclaw/issues/134341) Gateway/Doctor deadlock on core:agent-database-maintenance/global (5s wait) + 11× *.reindex-lock.sqlite 0-byte causes sqlite_compact_failed
- [#132828](https://github.com/openclaw/openclaw/issues/132828) [Bug]: `curl -fsSL https://openclaw.ai/install.sh | bash` fails to install, on `fedora:44`.
- [#134237](https://github.com/openclaw/openclaw/issues/134237) [Bug]: Control UI images briefly disappear during hard-refresh hydration
- [#134330](https://github.com/openclaw/openclaw/issues/134330) `openclaw doctor --fix` enters a deadlock when two OpenClaw installs with mismatched versions coexist on PATH
- [#134206](https://github.com/openclaw/openclaw/issues/134206) Upgrade reports success while legacy session store still blocks Gateway startup
- [#134224](https://github.com/openclaw/openclaw/issues/134224) [Bug]: Switching to Codex drops compacted conversation summaries
- [#134254](https://github.com/openclaw/openclaw/issues/134254) [Bug]: 2026.8.1 rejects per-hook config keys on hooks.internal.entries ("unsupported loader keys ... will not load hook modules") with no migration path
- [#134222](https://github.com/openclaw/openclaw/issues/134222) [Bug]: TLS diagnostics generate missing Gateway certificate files
- [#134227](https://github.com/openclaw/openclaw/issues/134227) [BUG] Webchat UI shows no progress indicator during long tool calls (2026.8.1)
- [#133797](https://github.com/openclaw/openclaw/issues/133797) Heartbeat (isolatedSession) continuation runs with empty transcript when transcript projection is rebuilding → confused visible replies announced to primary channel
- [#133805](https://github.com/openclaw/openclaw/issues/133805) [Feature]: Retire update recovery originals after verifying an upgrade
- [#134156](https://github.com/openclaw/openclaw/issues/134156) `openclaw update` silently leaves external plugins on the previous version when capability consent gates the post-update sync, producing a host/plugin mismatch that looks completely healthy
- [#133929](https://github.com/openclaw/openclaw/issues/133929) [Bug]: Known native Codex sessions can time out before import in large homes
- [#134134](https://github.com/openclaw/openclaw/issues/134134) [Bug]: Crash-loop breaker strips channel config, so channels.start skips configured accounts as unconfigured
- [#134144](https://github.com/openclaw/openclaw/issues/134144) Two startup-blocking issues: chained legacy-migration failures with poor error visibility; plugin update can install unresolvable phantom dependency
- [#133924](https://github.com/openclaw/openclaw/issues/133924) [Bug]: Missing SMS SecretRef crashes readiness evaluation and channel status
- [#133935](https://github.com/openclaw/openclaw/issues/133935) Stale path-install records are unclearable: uninstall, registry --refresh and doctor --fix all dead-end
- [#134037](https://github.com/openclaw/openclaw/issues/134037) [Bug]: openclaw update misdetects a pnpm-global install and installs the new version through npm into a second root
- [#134085](https://github.com/openclaw/openclaw/issues/134085) [Bug]: 2026.8.1 roster migration stamps agents.ownership: "explicit" without materializing an owner — Gateway boots healthy and silently drops every cron delivery and channel message
- [#127596](https://github.com/openclaw/openclaw/issues/127596) Voice Call legacy streaming migration overwrites explicit canonical provider config
- [#134004](https://github.com/openclaw/openclaw/issues/134004) [Bug]: Stored anthropic profile shadows claude-cli native auth after 2026.8.1 retires anthropic:claude-cli — 401 on every turn
- [#133923](https://github.com/openclaw/openclaw/issues/133923) Workspace git-backup check misfires on multi-agent setups and can't be satisfied without breaking git
- [#127418](https://github.com/openclaw/openclaw/issues/127418) Stability retention can delete the just-published bundle and report success
- [#133950](https://github.com/openclaw/openclaw/issues/133950) Internal runtime-context protection block (BEGIN_OPENCLAW_INTERNAL_CONTEXT) visible to the model, mistaken for prompt injection, persists across session reset
- [#133899](https://github.com/openclaw/openclaw/issues/133899) [Bug]: Doctor generic account promotion creates forbidden QQBot accounts.default config
- [#133719](https://github.com/openclaw/openclaw/issues/133719) [Bug]: Initial image prompt appears twice during worktree preparation
- [#133306](https://github.com/openclaw/openclaw/issues/133306) [Bug]: Windows native module require fails on file:// URLs
- [#131201](https://github.com/openclaw/openclaw/issues/131201) [Bug]: Control UI sets user-select: none on body, so automation ids, session keys, and log text cannot be copied
- [#133825](https://github.com/openclaw/openclaw/issues/133825) [Bug]: scripts/pr waits for detached Git maintenance after success
- [#133700](https://github.com/openclaw/openclaw/issues/133700) Session-group defaults trust unusable agent workspace Git metadata
- [#83636](https://github.com/openclaw/openclaw/issues/83636) [Bug]: Dynamic TTS auto-delivery is suppressed in message-tool-only channel contexts
- [#133738](https://github.com/openclaw/openclaw/issues/133738) [Bug]: Prompt preparation and experience reviews copy storage-only history payloads
- [#133603](https://github.com/openclaw/openclaw/issues/133603) [Bug]: Canceling a queued edit after reconnect leaves messages parked
- [#133555](https://github.com/openclaw/openclaw/issues/133555) [Bug]: Offline split-pane drafts can remain only in tab storage after queue activity
- [#133736](https://github.com/openclaw/openclaw/issues/133736) [Bug]: macOS logger ignores private interpolation annotations
- [#123668](https://github.com/openclaw/openclaw/issues/123668) [Bug]: Mid-turn compaction can revive a superseded task after requester settlement
- [#133704](https://github.com/openclaw/openclaw/issues/133704) [Bug]: Native JSON numbers become booleans during response serialization
- [#133685](https://github.com/openclaw/openclaw/issues/133685) [Bug]: dependency audits miss published upstream advisory sources
- [#133711](https://github.com/openclaw/openclaw/issues/133711) Control UI: submenu parent rows lose their highlight
- [#133681](https://github.com/openclaw/openclaw/issues/133681) Session cleanup undercounts successful zero-byte artifact deletions
- [#133475](https://github.com/openclaw/openclaw/issues/133475) Hot-reloading agents.list/agents.defaults mid-resume causes silent zero-output CLI exit that skips the retry path
- [#134610](https://github.com/openclaw/openclaw/issues/134610) Bundled Perplexity plugin blocks Gateway readiness without consent
- [#134533](https://github.com/openclaw/openclaw/issues/134533) Logs JSON summaries misreport server and local failures as unreachable
- [#134587](https://github.com/openclaw/openclaw/issues/134587) [Bug]: Self-healing recovery incorrectly detects active_reply_work on hung SSE stream, and sessions delete deadlocks on the same stuck turn claim
- [#127330](https://github.com/openclaw/openclaw/issues/127330) [Bug]: Cron inventory has invalid pseudo-table semantics
- [#134542](https://github.com/openclaw/openclaw/issues/134542) doctor: exec-approvals migration check throws on any version:1 file (including freshly-generated ones)
- [#134034](https://github.com/openclaw/openclaw/issues/134034) [Bug]: macOS app relaunches from AppTranslocation after Install and Relaunch
- [#134450](https://github.com/openclaw/openclaw/issues/134450) [Bug]: Terminal inline code loses literal trailing whitespace
- [#134514](https://github.com/openclaw/openclaw/issues/134514) [Bug]: agents.defaults.heartbeat.isolatedSession is ignored by the native heartbeat-main cron job (2026.8.1)
- [#134510](https://github.com/openclaw/openclaw/issues/134510) [Bug]: https://openclaw.ai/ has no linux app available even though it presumably exists
- [#134508](https://github.com/openclaw/openclaw/issues/134508) backup create always fails on codex-runtime installs: absolute symlinks in codex scratch dirs (tmp/arg0/codex-arg0*/apply_patch)
- [#134507](https://github.com/openclaw/openclaw/issues/134507) backup git create fails with "Invalid string length" when a table is very large (memory_embedding_cache ~1.7GB)
- [#134497](https://github.com/openclaw/openclaw/issues/134497) [Bug]: Doctor fails to migrate legacy multi-agent config and Gateway rejects the config
- [#134479](https://github.com/openclaw/openclaw/issues/134479) [Bug]: Explicit Telegram forum-topic delivery can fall back to the inbound topic
- [#134203](https://github.com/openclaw/openclaw/issues/134203) [Bug]: staged npm update leaves update status package manager unknown
- [#134373](https://github.com/openclaw/openclaw/issues/134373) [Bug]: Completed isolated cron run can leave a listed but undeletable session
- [#134427](https://github.com/openclaw/openclaw/issues/134427) Failed worktree setup hides stdout recovery instructions when stderr has a warning
- [#134462](https://github.com/openclaw/openclaw/issues/134462) [Bug]: doctor --fix never migrates legacy exec-approvals.json — execApprovals missing from autoMigrateLegacyState early-exit check
- [#127260](https://github.com/openclaw/openclaw/issues/127260) [Bug]: outbound retry scans can block Gateway stop until hard timeout
- [#128037](https://github.com/openclaw/openclaw/issues/128037) [Feature]: Control UI background session send with completion toasts
- [#134398](https://github.com/openclaw/openclaw/issues/134398) gateway auth-mode=token: internal loopback clients receive "missing scope: operator.read" while Control UI succeeds
- [#134392](https://github.com/openclaw/openclaw/issues/134392) [Bug]: legacy cron jobs.json import quarantines every job as invalid-schedule, including schedules the same release accepts, and the only trace is a diagnostic_events row
- [#134389](https://github.com/openclaw/openclaw/issues/134389) llama-cpp extension: ubatch-size silently dropped when user-configured embedding provider is not the default
- [#134376](https://github.com/openclaw/openclaw/issues/134376) Cross-harness validation bug in managed-control verifier masks as 'inference owner changed' (2026.8.1)
- [#134267](https://github.com/openclaw/openclaw/issues/134267) [Bug]: Full status reports silently omit requested usage
- [#134349](https://github.com/openclaw/openclaw/issues/134349) [Bug]: Security audit suggests a plugins.allow snapshot that omits required on-demand harness plugins
- [#134199](https://github.com/openclaw/openclaw/issues/134199) [Bug]: Cloud worker failures obscure approval and workspace recovery causes
- [#133632](https://github.com/openclaw/openclaw/issues/133632) Feature: keep the Home agent available in an app-level dock
- [#134163](https://github.com/openclaw/openclaw/issues/134163) openclaw doctor --fix cannot migrate an agent database from schema 17 to 19: the migration asserts the canonical schema before creating the objects it validates, so the prescribed repair is the command that fails
- [#134264](https://github.com/openclaw/openclaw/issues/134264) Bug: `openclaw doctor --fix` cannot clear exec-approvals migration gate on fresh 2026.8.1 upgrade — chicken-and-egg ordering regression
- [#133932](https://github.com/openclaw/openclaw/issues/133932) [Bug]: workspace-qualified allowFrom entries resolve to zero Slack approval approvers
- [#134229](https://github.com/openclaw/openclaw/issues/134229) [Bug]: #134165 leaves main red on check-lint-core and check-test-types-core, and because both run PR-only every open PR fails on files it does not touch
- [#134177](https://github.com/openclaw/openclaw/issues/134177) [Bug]: updater rejects package-owned dist/openclaw-install-guard on npm-hardened installs
- [#133957](https://github.com/openclaw/openclaw/issues/133957) [Bug]: doctor --fix attempts exclusive SQLite migration before stopping the managed Gateway
- [#134180](https://github.com/openclaw/openclaw/issues/134180) Control UI webchat history does not render pre-tool text segments of assistant messages (v2026.8.1)
- [#134178](https://github.com/openclaw/openclaw/issues/134178) doctor --fix crashes on legacy exec-approvals.json, blocking all other repairs (incl. required session-store migration)
- [#134012](https://github.com/openclaw/openclaw/issues/134012) [Bug]: Error presentation drops prepared provider ownership and cold-loads plugins
- [#133889](https://github.com/openclaw/openclaw/issues/133889) fix(config): copied session-store owner survives changing stores
- [#133868](https://github.com/openclaw/openclaw/issues/133868) fix(config): legacy roster import conflicts with automatic explicit ownership
- [#133977](https://github.com/openclaw/openclaw/issues/133977) [Bug]: unavailable channel secret breaks global status snapshots
- [#134089](https://github.com/openclaw/openclaw/issues/134089) Control UI: local DOCX download links open binary contents in text sidebar
- [#133901](https://github.com/openclaw/openclaw/issues/133901) [Bug]: plugin registry refresh cannot verify derived source and refuses migration checkpoint
- [#134058](https://github.com/openclaw/openclaw/issues/134058) [Docs Bug]: Four merged @100yenadmin PRs lack explicit release credit
- [#134048](https://github.com/openclaw/openclaw/issues/134048) Reply silently lost when model-fallback succeeds after the lane task was already rejected
- [#134046](https://github.com/openclaw/openclaw/issues/134046) Bug: `openclaw doctor --fix` circular deadlock — cannot resolve legacy exec-approvals when agents.ownership is unset
- [#133389](https://github.com/openclaw/openclaw/issues/133389) [Bug]: heartbeat scratch migration targets a disabled shared-workspace agent
- [#133951](https://github.com/openclaw/openclaw/issues/133951) [Bug]: Doctor reports success while workspace migration leftovers still block agent turns
- [#133939](https://github.com/openclaw/openclaw/issues/133939) Control UI retains evicted hydrated chat histories
- [#133959](https://github.com/openclaw/openclaw/issues/133959) [Bug]: Guided setup requires a default agent on explicit multi-agent configurations
- [#133953](https://github.com/openclaw/openclaw/issues/133953) [Bug]: Dashboard readiness mistakes raw WebSocket closes for a reachable Gateway
- [#133960](https://github.com/openclaw/openclaw/issues/133960) [Bug]: Accepted channel turns can stop after an acknowledgement without a terminal reply
- [#123616](https://github.com/openclaw/openclaw/issues/123616) [Bug]: doctor --fix overwrites explicit pinned Codex install spec with floating catalog spec
- [#134001](https://github.com/openclaw/openclaw/issues/134001) gateway status --deep leads with plugin drift advisories while the gateway cannot start
- [#133998](https://github.com/openclaw/openclaw/issues/133998) [Bug]: openclaw qr --setup-code-only output contains literal ellipsis truncation in stdout bytes
- [#133997](https://github.com/openclaw/openclaw/issues/133997) doctor restores last-known-good over a config written by another version after validating it as invalid — consider a migration-first path
- [#133995](https://github.com/openclaw/openclaw/issues/133995) Session elapsed timer resets on page reload; busy/idle state is hard to tell apart in Control UI
- [#133827](https://github.com/openclaw/openclaw/issues/133827) [Bug]: Tailscale Serve setup failure becomes fatal to an otherwise-ready gateway after 2026.8.1 upgrade
- [#133954](https://github.com/openclaw/openclaw/issues/133954) [Bug]: channels.start omits the reason an account did not start
- [#133388](https://github.com/openclaw/openclaw/issues/133388) [Bug]: plugins doctor reports unhealthy state with exit status 0
- [#119609](https://github.com/openclaw/openclaw/issues/119609) Docs feedback: /platforms/android
- [#133962](https://github.com/openclaw/openclaw/issues/133962) [Bug]: doctor --fix preflight detects doctor-only state migrations in doctor mode but builds the step list with hardcoded mode:"automatic", silently dropping them
- [#133776](https://github.com/openclaw/openclaw/issues/133776) [Bug]: Code Mode drops useful prefixes from large escaped output
- [#133618](https://github.com/openclaw/openclaw/issues/133618) [Bug]: implicitMentions.quotedBot has no effect on LINE, so a quote always bypasses a group's mention requirement
- [#133906](https://github.com/openclaw/openclaw/issues/133906) slack: qualify sender ids by workspace/team id so a bare Slack user id is never globally unique
- [#133902](https://github.com/openclaw/openclaw/issues/133902) [Bug]: 2026.8.1 keeps legacy memory provider openai but runtime only accepts openai-compatible
- [#133849](https://github.com/openclaw/openclaw/issues/133849) [Bug]: Control UI mobile pairing QR ignores connected public Gateway endpoint
- [#133823](https://github.com/openclaw/openclaw/issues/133823) [Bug]: macOS LaunchAgent Umask is hardcoded to 077 and silently reverts operator changes on update or CLI restart
- [#133820](https://github.com/openclaw/openclaw/issues/133820) [Bug]: Gateway restart-loop (27 unclean boots) trips breaker and takes down all channels; health-monitor misclassifies as expected stopped, preventing self-healing
- [#133303](https://github.com/openclaw/openclaw/issues/133303) [Bug]: plugin authoring commands (build/validate/init) abort on an invalid host config they never read
- [#132082](https://github.com/openclaw/openclaw/issues/132082) Inbound LINE emoji reach the agent as bare `()` parentheses, and the message text is corrupted with them
- [#131661](https://github.com/openclaw/openclaw/issues/131661) [Bug]: Worker session tools bypass Gateway before_tool_call policy
- [#133784](https://github.com/openclaw/openclaw/issues/133784) [Bug]: stable 2026.8.1 cannot migrate beta.2 schema-17 DB missing canonical trigger
- [#123297](https://github.com/openclaw/openclaw/issues/123297) [Bug]: plugins.allow + bundledDiscovery:"compat" disables all bundled plugins on 2026.6.34 (compat does not bypass)
- [#133755](https://github.com/openclaw/openclaw/issues/133755) [Feature]: Show GLM Coding Plan team quota in the Usage view (bigmodel.cn org/project), like Copilot quota windows
- [#133561](https://github.com/openclaw/openclaw/issues/133561) onepassword: Windows-only passEnv entries emit security warnings on non-Windows hosts
- [#132783](https://github.com/openclaw/openclaw/issues/132783) [Bug]: New Session drops typing when composer is unfocused
- [#134559](https://github.com/openclaw/openclaw/issues/134559) [Bug]: Tool result "Malformed diagnostic JSON redacted" label hides contents and triggers agent retry loops (regression in 2026.8.1)
- [#133721](https://github.com/openclaw/openclaw/issues/133721) Incorrectly filed by agent

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 239,031 · **Open issues:** 38,130 · **Last push:** <1h ago

On August 31, 2026, Hermes Agent released v0.21.0, dubbed "The Pantheon Release," featuring built-in Bot Mode and significant enhancements following approximately 5,800 commits and 2,100 issues closed since the previous version. Key merged fixes addressed various desktop issues, including stopping hidden session panes from affecting visible chats and preventing dead runtimes from stealing focus in the composer. Notably, a critical new issue was identified where the command "/btw" in Hermes Desktop fails to provide an answer after printing a side-question notice, accentuating ongoing challenges in user experience. Other emerging bugs include problems with home directory management during hermes import and a stale model pin in desktop composer affecting session visibility.

#### 🚀 New Releases
- [v2026.8.31](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.8.31) Hermes Agent v0.21.0 (v2026.8.31)

#### ✅ Merged PRs
- [#99881](https://github.com/NousResearch/hermes-agent/pull/99881) fix(desktop): stop hidden session panes from yanking the visible chat (supersedes #81829)
- [#99891](https://github.com/NousResearch/hermes-agent/pull/99891) fix(desktop): stop dead runtimes from stealing composer focus (supersedes #97874)
- [#99885](https://github.com/NousResearch/hermes-agent/pull/99885) fix(desktop): keep remote profiles on their own models (supersedes #96714)
- [#99892](https://github.com/NousResearch/hermes-agent/pull/99892) fix(desktop): stop a stale composer model pinning every new chat (supersedes #91482)

#### 🐛 New Issues
- [#99065](https://github.com/NousResearch/hermes-agent/issues/99065) [Bug]: /btw in Hermes Desktop prints the side-question notice but the answer never appears `type/bug` `P3` `comp/desktop` 💬3
- [#99839](https://github.com/NousResearch/hermes-agent/issues/99839) [Bug]: hermes import can overwrite default home while displaying alternate HERMES_HOME and starting a second gateway `type/bug` `comp/cli` `comp/gateway` `P1` 💬3
- [#99886](https://github.com/NousResearch/hermes-agent/issues/99886) Unofficial Grok Bot provider (Cursor sand ConnectRPC) `type/feature` `comp/agent` `comp/cli` `area/auth` 💬2
- [#99864](https://github.com/NousResearch/hermes-agent/issues/99864) [Bug][Desktop]: composer shows paid model while session silently serves free variant (stale per-session model pin) `type/bug` `provider/openrouter` `area/config` `P2` 💬2
- [#99861](https://github.com/NousResearch/hermes-agent/issues/99861) Desktop file browser hides nested git repositories matched by the parent's .gitignore `type/bug` `P3` `comp/desktop` 💬2
- [#99760](https://github.com/NousResearch/hermes-agent/issues/99760) [Bug]: Dashboard shows phantom 'retrying' state for a channel that was never configured (stale gateway_state.json platform entry survives restarts) `type/bug` `comp/gateway` `area/config` `P2` 💬2
- [#99877](https://github.com/NousResearch/hermes-agent/issues/99877) [Bug]: requires_toolsets gate has no alias normalization — a skill declaring 'files' is silently gated out forever `type/bug` `comp/agent` `tool/skills` `P2` 💬1
- [#99895](https://github.com/NousResearch/hermes-agent/issues/99895) [Bug]: Windows: AttributeError: module 'asyncio' has no attribute 'start_unix_server' in shutdown_watchdog (v0.21.0) `type/bug` `duplicate` `comp/gateway` `P2` 💬1
- [#99882](https://github.com/NousResearch/hermes-agent/issues/99882) [Bug]: Queued follow-ups (demoted to queue during context compression) are silently orphaned — messages lost, no log `type/bug` `comp/gateway` `P1` `sweeper:risk-session-state` 💬1
- [#99808](https://github.com/NousResearch/hermes-agent/issues/99808) Discord gpt-5.6-sol-900k: compression times out/deferred with no summary output and /compress cannot recover `type/bug` `comp/agent` `platform/discord` `provider/openai` 💬1
- [#99666](https://github.com/NousResearch/hermes-agent/issues/99666) Desktop SSH: Terminal remains unavailable after remote backend reports ready `type/bug` `backend/ssh` `P2` `sweeper:risk-session-state` 💬1
- [#99867](https://github.com/NousResearch/hermes-agent/issues/99867) [Bug]: Windows app's session scroll control overlaps right sidebar resize control `type/bug` `P3` `sweeper:risk-platform-windows` `comp/desktop` 💬1
- [#99857](https://github.com/NousResearch/hermes-agent/issues/99857) [Desktop][macOS] Titlebar chrome spacing is off-convention: excess left margin before traffic lights and excess right margin after toolbar icons `type/bug` `P3` `comp/desktop` 💬1
- [#99854](https://github.com/NousResearch/hermes-agent/issues/99854) [Bug]: second Slack message in a different thread silently dropped while gateway is busy on a long tool-call chain `type/bug` `comp/gateway` `platform/slack` `P2` 💬1
- [#99859](https://github.com/NousResearch/hermes-agent/issues/99859) [Bug]: Desktop app: stale gateway/isolated-backend processes serve invalid model IDs after config/checkout update, causing agent_init_failed `type/bug` `comp/gateway` `backend/local` `P2` 💬1
- [#99838](https://github.com/NousResearch/hermes-agent/issues/99838) [Bug]: Support Resource protocol, for context management for MCP tools such as github mcp, and tool call get_file_contents `type/bug` `duplicate` `tool/mcp` `P2` 💬1
- [#99832](https://github.com/NousResearch/hermes-agent/issues/99832) Bundle skew warning false-positives on docs-only and test-only commits under apps/desktop `type/bug` `P3` `sweeper:risk-compatibility` `comp/desktop` 💬1
- [#99338](https://github.com/NousResearch/hermes-agent/issues/99338) Desktop thread force-scrolls to bottom on a same-session refresh (scrolled-up reader gets yanked) `type/bug` `P3` `comp/desktop`
- [#99889](https://github.com/NousResearch/hermes-agent/issues/99889) [Bug]: Desktop (Windows): interaction freezes dominated by style recalculation — 48% of renderer main-thread time, single recalcs up to 1.4 s over ~6k nodes (invalidation-tracking traces included) `type/perf` `P2` `sweeper:risk-platform-windows` `comp/desktop`
- [#99897](https://github.com/NousResearch/hermes-agent/issues/99897) Output-cap retry clamp is computed but not applied to the retried request (spins until max compression attempts) `type/bug` `comp/agent` `provider/qwen` `P2`
- [#99873](https://github.com/NousResearch/hermes-agent/issues/99873) Output-cap retry clamp is computed but not applied to the retried request (spins until max compression attempts) `type/bug` `comp/agent` `provider/qwen` `P2`
- [#99869](https://github.com/NousResearch/hermes-agent/issues/99869) Long-running agent sessions: no checkpoint/rollback for partial file mutations on terminate `type/feature` `comp/agent` `tool/file` `P3`
- [#99875](https://github.com/NousResearch/hermes-agent/issues/99875) meta/muse-spark-1.2-contributor catalog-listed on api.meta.ai but POST /v1/responses|/v1/chat/completions 404 via Hermes (Muse TUI same key 200) `type/bug` `comp/plugins` `P3` `needs-repro`
- [#99876](https://github.com/NousResearch/hermes-agent/issues/99876) [Feature]: Email platform - add read-only / no-auto-reply mode `type/feature` `comp/plugins` `platform/email` `area/config`
- [#99879](https://github.com/NousResearch/hermes-agent/issues/99879) Routines run late after gateway downtime with no missed-run status `type/bug` `comp/gateway` `comp/cron` `P1`
- [#99846](https://github.com/NousResearch/hermes-agent/issues/99846) [Bug]: recovered delivery obligations can mark MEDIA finals delivered without uploading the attachment `type/bug` `comp/gateway` `P2` `sweeper:risk-session-state`
- [#99843](https://github.com/NousResearch/hermes-agent/issues/99843) [Bug]: Desktop Settings → Models stays desynced after remote /api/model/options code-skew error is fixed `type/bug` `area/config` `P3` `sweeper:risk-compatibility`
- [#99827](https://github.com/NousResearch/hermes-agent/issues/99827) feat(openai-codex): support native Programmatic Tool Calling `type/feature` `comp/agent` `tool/code-exec` `provider/openai`

#### 🔒 Closed Issues
- [#92343](https://github.com/NousResearch/hermes-agent/issues/92343) Classic CLI: Shift+letter still leaks literal CSI text after #87511 — ANSI_SEQUENCES mapping is defeated by self-insert pasting KeyPress.data
- [#97764](https://github.com/NousResearch/hermes-agent/issues/97764) [Bug] Desktop renderer never resumes stored session after mid-turn ws drop — chat frozen with 'session-scoped RPC rejected ... not in memory' until full app restart
- [#96699](https://github.com/NousResearch/hermes-agent/issues/96699) [Bug][Desktop]: Remote multi-profile — Settings Model catalog is launch-home; sticky composer provider breaks new chats (browser Dashboard OK)
- [#99065](https://github.com/NousResearch/hermes-agent/issues/99065) [Bug]: /btw in Hermes Desktop prints the side-question notice but the answer never appears
- [#98680](https://github.com/NousResearch/hermes-agent/issues/98680) Desktop: keep-alive transcript ticks flash the composer and steal focus (~30s)
- [#92875](https://github.com/NousResearch/hermes-agent/issues/92875) [Bug][Windows] Desktop startup stalls ~18s on 'connecting' — orphan backend ownership entries probed via serial cold PowerShell calls
- [#99338](https://github.com/NousResearch/hermes-agent/issues/99338) Desktop thread force-scrolls to bottom on a same-session refresh (scrolled-up reader gets yanked)
- [#99873](https://github.com/NousResearch/hermes-agent/issues/99873) Output-cap retry clamp is computed but not applied to the retried request (spins until max compression attempts)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,631 · **Open issues:** 7,284 · **Last push:** <1h ago

On September 1, 2026, there were no new releases for vLLM; however, several significant pull requests were merged. Notable updates included improvements in performance through the Rust frontend with a fix for adjacent DeepSeek V4 user content rendering (#53281) and enhancements for XPU routing of activation CustomOps to SYCL kernels (#53734). Additionally, a bugfix ensuring that no decoding requests are dropped during sampled-token broadcasting was implemented (#54436). Among the new issues, a particularly concerning bug was reported regarding non-deterministic greedy decoding behavior with the Qwen3.8-Flash-Next model when prompt lengths approach the indexer budget (#54521).

#### ✅ Merged PRs
- [#54449](https://github.com/vllm-project/vllm/pull/54449) [Perf][Rust Frontend] Count the tokenizer vocabulary once at construction
- [#54194](https://github.com/vllm-project/vllm/pull/54194) [Kernel] Make prefix-prefill tiling independent of the KV page size
- [#53734](https://github.com/vllm-project/vllm/pull/53734) [XPU] Route activation CustomOps to SYCL kernels
- [#48750](https://github.com/vllm-project/vllm/pull/48750) [CI] Build CPU image against torch nightly for TORCH_NIGHTLY runs
- [#54515](https://github.com/vllm-project/vllm/pull/54515) [XPU] bump up auto-round-lib to 0.15.0
- [#53281](https://github.com/vllm-project/vllm/pull/53281) [Bugfix][Rust Frontend] Fix adjacent DeepSeek V4 user content rendering
- [#51705](https://github.com/vllm-project/vllm/pull/51705) [ROCm][MLA][DCP] Support causal multi-token verification
- [#54645](https://github.com/vllm-project/vllm/pull/54645) [CI] Broaden structured-output issue auto-labeling
- [#54436](https://github.com/vllm-project/vllm/pull/54436) [Bugfix][PP] Never drop a decoding request from the sampled-token broadcast
- [#53669](https://github.com/vllm-project/vllm/pull/53669) [XPU] [CI] Add retry for v1/sample in Intel GPU CI
- [#54634](https://github.com/vllm-project/vllm/pull/54634) [K3 Bug] Fix Kimi-K3 RecoverSSM startup failure `'MambaAttentionBackendEnum.GDN_ATTN declares 4 states, but provides 2 state copy funcs'`
- [#54636](https://github.com/vllm-project/vllm/pull/54636) [Kimi Bug] Fix gdn build_attn_metadata `'KimiK3KDAMetadataBuilder' object has no attribute 'layer_names'`
- [#54261](https://github.com/vllm-project/vllm/pull/54261) [Kimi-K3][Perf] Make native CUDA AttnRes the SM100 default
- [#53147](https://github.com/vllm-project/vllm/pull/53147) [Kernel][Gemma4] Prune Triton sliding-window tiles for multimodal prefixes
- [#54373](https://github.com/vllm-project/vllm/pull/54373) [Bugfix][Spec Decode] Take the DFlash draft's RoPE layout from its own config
- [#54549](https://github.com/vllm-project/vllm/pull/54549) [CI] Mark 1-GPU L4 test steps with device: l4 for EKS migration
- [#53896](https://github.com/vllm-project/vllm/pull/53896) [Model] Support Qwen3.8-Flash-Next
- [#53382](https://github.com/vllm-project/vllm/pull/53382) [Perf][Kernel] Tune cooperative topk for medium batch-sizes
- [#53790](https://github.com/vllm-project/vllm/pull/53790) [Bugfix] NemotronHMTP: add hf_to_vllm_mapper so quant exclusions reach the MTP draft
- [#53433](https://github.com/vllm-project/vllm/pull/53433) [Bugfix] Reject empty bad-word tokenizations
- [#54481](https://github.com/vllm-project/vllm/pull/54481) [Rust Frontend][CI] Remove TCP port races from mock-engine tests
- [#53976](https://github.com/vllm-project/vllm/pull/53976) [Bugfix][Test] Fix off-by-one error in sampled token rank causing flaky logprobs test
- [#52961](https://github.com/vllm-project/vllm/pull/52961) Add Laguna-XS-2.1-INT4 to nightly CI
- [#53598](https://github.com/vllm-project/vllm/pull/53598) [ROCm][DSpark][DCP] Serve prefix cache hits under DCP for Kimi-K3
- [#54218](https://github.com/vllm-project/vllm/pull/54218) [Structured Output] Let terminal grammars stop under min_tokens (II)
- [#54365](https://github.com/vllm-project/vllm/pull/54365) [CI] Exclude kv_transfer changes from broad spec-decode/kernels/multimodal triggers
- [#49925](https://github.com/vllm-project/vllm/pull/49925) [ROCm] Add TheRock preview docker updates, Keep Python 3.12 and Ubuntu 22.04
- [#54172](https://github.com/vllm-project/vllm/pull/54172) [Tests][XPU] Limit Qwen2-VL generation length to avoid flaky numerical divergence
- [#47434](https://github.com/vllm-project/vllm/pull/47434) [AutoRound] Support AutoRound Format Block-Wise FP8 in vLLM
- [#49445](https://github.com/vllm-project/vllm/pull/49445) [Core] Add `max_num_queued_reqs` and `max_num_queued_tokens` for queue size management
- [#53821](https://github.com/vllm-project/vllm/pull/53821) [Bugfix][ROCm] Preserve AITER unified-attention metadata during graph replay
- [#51689](https://github.com/vllm-project/vllm/pull/51689) [KV Connector][Offloading] Certify attention-only hybrids in the canonical portability gate
- [#52596](https://github.com/vllm-project/vllm/pull/52596) [Bugfix][KV Offload] Unlink /dev/shm region after all workers map it (barrier variant of #51317)
- [#52571](https://github.com/vllm-project/vllm/pull/52571) [Bugfix][KV Offload][P2P] Preserve aborted loads until abort completion
- [#53677](https://github.com/vllm-project/vllm/pull/53677) [kernel] Fused embedding kernel
- [#50696](https://github.com/vllm-project/vllm/pull/50696) [KV offload] Order CPU->GPU loads against the compute stream
- [#54537](https://github.com/vllm-project/vllm/pull/54537) [Frontend][Performance] Resolve async media across modalities concurrently
- [#53529](https://github.com/vllm-project/vllm/pull/53529) [Test][Qwen3-VL] Cover compiled DeepStack input contract
- [#52068](https://github.com/vllm-project/vllm/pull/52068) [KV Offload] Preserve KV event metadata until final residency removal
- [#54492](https://github.com/vllm-project/vllm/pull/54492) [Frontend] Move engine/protocol.py out openai folder
- [#52912](https://github.com/vllm-project/vllm/pull/52912) [Bugfix][KVOffload] P2P tier declares REQUEST_LEVEL on the producer leg
- [#53574](https://github.com/vllm-project/vllm/pull/53574) [Bugfix][SM120] DSv4: pass contiguous C128A decode topk indices on SM120
- [#54509](https://github.com/vllm-project/vllm/pull/54509) [Bugfix][Frontend] Truncate prompt_is_token_ids with the prompt
- [#54501](https://github.com/vllm-project/vllm/pull/54501) [Bugfix][MM] Fix MiniCPM-o image processor reuse on Transformers v5
- [#52124](https://github.com/vllm-project/vllm/pull/52124) [Renderer] Shutdown the renderer properly.
- [#51248](https://github.com/vllm-project/vllm/pull/51248) [Quantization][Autoround][XPU] Support AutoRound MXFP8 MoE models

#### 🐛 New Issues
- [#54521](https://github.com/vllm-project/vllm/issues/54521) [Bug]: Qwen3.8-Flash-Next: greedy decoding is non-deterministic from persistent_topk in prefill when prompt length nears indexer_budget (sm121/GB10) `quantization` 💬11
- [#54607](https://github.com/vllm-project/vllm/issues/54607) [Doc]: --prefix-match-unit and the default match granularity are undocumented `kv-cache-manager` 💬6
- [#54526](https://github.com/vllm-project/vllm/issues/54526) [Bug]: Cannot load an Eagle3 model, trained with Speculators `bug` 💬3
- [#54629](https://github.com/vllm-project/vllm/issues/54629) [Bug] Qwen3.8-Flash-Next: repeated >100k-token prefills hang a worker GPU stream on GB10 (sm121) at TP4+EP 💬2
- [#54506](https://github.com/vllm-project/vllm/issues/54506) [RFC]: Batch invariance for speculative decoding needs to cover the forward pass (M=1 vs M=k+1) `speculative-decoding` `quantization` 💬2
- [#54593](https://github.com/vllm-project/vllm/issues/54593) [Bug]: `--cpu-offload-gb` evicts in declaration order, which for MoE offloads the hottest weights first 💬2
- [#54595](https://github.com/vllm-project/vllm/issues/54595) [Bug]: Qwen4Exp is gated off on XPU, but most of what the gate hides is not XPU-specific `intel-gpu` 💬2
- [#54547](https://github.com/vllm-project/vllm/issues/54547) [Bug][Quantization] Quark MXFP4 checkpoints are unloadable for multimodal models: exclude list is in checkpoint naming while vLLM matches module naming (plus 4 related name-granularity mismatches) `rocm` `multi-modality` `quantization` 💬2
- [#54498](https://github.com/vllm-project/vllm/issues/54498) [Bug]: V1 EAGLE/MTP drafter mis-addresses KV slots on M-RoPE models `bug` `speculative-decoding` 💬2
- [#54649](https://github.com/vllm-project/vllm/issues/54649) [Bug]: Kimi-K3 DSpark/DCP illegal memory access `bug` `kimi` `k3` 💬1
- [#54616](https://github.com/vllm-project/vllm/issues/54616) [Bug]: reasoning_effort not forwarded to chat_template_kwargs in ChatCompletionRequest `bug` `tool-calling` 💬1
- [#54615](https://github.com/vllm-project/vllm/issues/54615) [Feature]: Switch Python Harmony dependency to oss-harmony `feature request` `tool-calling` `gpt-oss` 💬1
- [#54497](https://github.com/vllm-project/vllm/issues/54497) [Feature]: Upgrade XGrammar to >=0.2.4 and expose max_whitespace_cnt `structured-output`
- [#54641](https://github.com/vllm-project/vllm/issues/54641) [Bug]: Identity entry in packed_modules_mapping silently disables layer_quant_config (Quark) `rocm` `quantization` 💬1
- [#54486](https://github.com/vllm-project/vllm/issues/54486) [Bug]: openai chat-template content format breaks structured request contracts `bug` 💬1
- [#54555](https://github.com/vllm-project/vllm/issues/54555) [Bug]: V1 spec-decode proposer never constructs the positions buffer a both-XD-RoPE drafter seeds from 💬1
- [#54596](https://github.com/vllm-project/vllm/issues/54596) [Bug]: XPU sets `use_static_cuda_launcher`, but Inductor reads `use_static_triton_launcher` 💬1
- [#54591](https://github.com/vllm-project/vllm/issues/54591) [Bug][Core] --enable-dbo forces the V1 model runner, making dual batch overlap unreachable for every DEFAULT_V2_MODEL_RUNNER_ARCHITECTURES model (and killing startup for GLM-5.3-Flash) `rocm` `quantization` `glm` 💬1
- [#54493](https://github.com/vllm-project/vllm/issues/54493) [Bug]: --enable-dbo reaches an assertion-backed all2all backend validation failure `bug` 💬1
- [#54491](https://github.com/vllm-project/vllm/issues/54491) [Bug]: Qwen2.5 tool parser plus openai content format fails chat requests `bug` `tool-calling` 💬1
- [#54657](https://github.com/vllm-project/vllm/issues/54657) [Bug]: --tensor-parallel-size 0 reaches an uncaught ZeroDivisionError `bug`
- [#54658](https://github.com/vllm-project/vllm/issues/54658) [Feature]: Expose multimodal metadata from Render for disaggregated prefill `multi-modality` `kv-connector`
- [#54653](https://github.com/vllm-project/vllm/issues/54653) [RFC] Organize the Python package by architectural domain
- [#54652](https://github.com/vllm-project/vllm/issues/54652) WSL2: GPUModelRunnerV2 hard-requires UVA at init_device, so default-config GPU serving fails at startup (RuntimeError: UVA is not available)
- [#54644](https://github.com/vllm-project/vllm/issues/54644) [RFC]: Preemption victim-selection extension point (least-computed-first as the first built-in)
- [#54626](https://github.com/vllm-project/vllm/issues/54626) [Bug]: NCCL symmetric memory registers comm windows during CUDA graph capture; VLLM_USE_NCCL_SYMM_MEM=1 fails at engine init
- [#54623](https://github.com/vllm-project/vllm/issues/54623) [Bug]: Qwen3.5 family never loads checkpoint KV-cache scales — fp8 KV silently runs at scale 1.0 even for calibrated checkpoints
- [#54552](https://github.com/vllm-project/vllm/issues/54552) Qwen4Exp: QSA ring assert makes num_speculative_tokens 5..8 unreachable on all block sizes
- [#54569](https://github.com/vllm-project/vllm/issues/54569) [Bug]: FunASR get error result with fp16 dtype `bug`
- [#54567](https://github.com/vllm-project/vllm/issues/54567) [Bug]: Prefix caching never hits for DeepSeek-V4-Flash on Jetson Thor (SM110) — every request cold-prefills, TTFT scales linearly with context `deepseek` `DSv4` `kv-cache-manager`
- [#54561](https://github.com/vllm-project/vllm/issues/54561) [Feature]: DeepSeek-V4-Flash-Vision-Exp (multimodal) — implementation ready, two design questions `multi-modality` `deepseek` `DSv4`
- [#54559](https://github.com/vllm-project/vllm/issues/54559) [Bug]: qwen3.8-flash-next-fp8: No available shared memory broadcast block found in 60 seconds. `bug` `quantization`
- [#54550](https://github.com/vllm-project/vllm/issues/54550) [Doc]: license `documentation`
- [#54528](https://github.com/vllm-project/vllm/issues/54528) [Feature]: Migrate MuseGlimmer reasoning/tool parsers to the Streaming Parser Engine `feature request` `tool-calling`
- [#54536](https://github.com/vllm-project/vllm/issues/54536) [Feature][KV-offloading]: Host-staged RDMA for MooncakeStoreConnector requester-only ranks
- [#54504](https://github.com/vllm-project/vllm/issues/54504) [Bug]: Prefix caching is a no-op for nemotron_h hybrids on GPU builds; mamba-cache-mode all crashes on the CPU backend `cpu` `kv-cache-manager`
- [#54490](https://github.com/vllm-project/vllm/issues/54490) [Bug]: enabling prefix caching changes deterministic repeated output `bug` `kv-cache-manager`
- [#54487](https://github.com/vllm-project/vllm/issues/54487) [Bug]: prefix-caching hash configuration changes deterministic repeated output `bug`

#### 🔒 Closed Issues
- [#37979](https://github.com/vllm-project/vllm/issues/37979) [RFC]: Intel Quantization Support Roadmap (H1 2026)
- [#54607](https://github.com/vllm-project/vllm/issues/54607) [Doc]: --prefix-match-unit and the default match granularity are undocumented
- [#48089](https://github.com/vllm-project/vllm/issues/48089) [Bug]: DeepSeek V4 reasoning/tool parsers produce unbalanced tags under concurrent load
- [#46107](https://github.com/vllm-project/vllm/issues/46107) [RFC]: Heterogeneous TP<->DP parallelism across the P/D disaggregation boundary (MoRIIO)
- [#52732](https://github.com/vllm-project/vllm/issues/52732) [Bug] DeepseekV4 cannot start on sm_121 (GB10): DeepGEMM assumed available, with no working fallback path
- [#50095](https://github.com/vllm-project/vllm/issues/50095) [Bug][DCP] NVIDIA DeepSeek-V3.2 / GLM-5.2 fused attention bypasses DCP handling
- [#53973](https://github.com/vllm-project/vllm/issues/53973) [Bug]: PyAV video backend deadlocks under serving concurrency — unbounded SLICE threading in decode_frames
- [#41296](https://github.com/vllm-project/vllm/issues/41296) [RFC]: Custom graph dumping for vLLM-compile and depyf deprecation
- [#53888](https://github.com/vllm-project/vllm/issues/53888) Sleep level=1 wake silently corrupts LoRA state (NemotronH NVFP4/Marlin, TP=2, WSL2): fixed-seed generation diverges after wake, adapter stops applying, no error raised
- [#54227](https://github.com/vllm-project/vllm/issues/54227) vllm bench serve with a fixed --seed against a default server can end up benchmarking the prefix cache (measured: TPOT -34%, TTFT 49x, throughput 2.32x on one cell)
- [#41360](https://github.com/vllm-project/vllm/issues/41360) [Bug]: Qwen3-30B-A3B on B200 (TP=8) — K must be divisible by blockK in flashinfer convert_to_block_layout (unquantized MoE oracle path)
- [#41369](https://github.com/vllm-project/vllm/issues/41369) [Bug]: Gemma4 Fast Prefill Optimization degrades p95 inter-token latency significantly
- [#41475](https://github.com/vllm-project/vllm/issues/41475) [Bug]: model with GGUF quant type failed to run
- [#53516](https://github.com/vllm-project/vllm/issues/53516) [Bug]: Qwen3-VL — #43617's removal of the `num_tokens == 0` early return costs 27 points of people detection under torch.compile (human-verified)
- [#52808](https://github.com/vllm-project/vllm/issues/52808) [Bug]: PD Multi Tier supplies nothing when the producer already holds the blocks
- [#41364](https://github.com/vllm-project/vllm/issues/41364) [Feature]: Add cap to --max-model-len auto (auto-fit with upper bound)
- [#47163](https://github.com/vllm-project/vllm/issues/47163) [Bug]: Image URL errors return HTTP 500 instead of 422 for unprocessable content
- [#51579](https://github.com/vllm-project/vllm/issues/51579) [Bug]: OffloadingConnector CPU tier leaks its /dev/shm mmap file on any unclean exit (including SIGKILL)
- [#52834](https://github.com/vllm-project/vllm/issues/52834) [Bug]: --mm-processor-kwargs cannot scope an override to one modality: videos_kwargs is ignored by profiling while a flat "size" leaks into the image budget (Qwen3-VL)

### SGLang (`sgl-project/sglang`)

**Stars:** 32,999 · **Open issues:** 4,977 · **Last push:** <1h ago

There were no new releases for SGLang today, but several significant changes were merged, including the update of sgl-deep-gemm to version 0.1.7 and enhancements to the Diffusion framework, such as fusing Qwen-Image residual norms with NVFP4 quantization and enabling DSpark on the DeepSeek-V4 low-latency recipes. Important fixes were made to retain pre-engine resolution declarations and resolve GLM-5.3 rebase regressions. Among the newly reported issues, the one involving a failure in remote instance weight loading with --pp-size 2 caught attention, as it highlights potential challenges in deployment configurations.

#### ✅ Merged PRs
- [#37129](https://github.com/sgl-project/sglang/pull/37129) [Diffusion] Fuse Qwen-Image residual norm and NVFP4 quantization
- [#37112](https://github.com/sgl-project/sglang/pull/37112) [Diffusion] Fuse FLUX.2 gated residual normalization on Blackwell
- [#37123](https://github.com/sgl-project/sglang/pull/37123) [Diffusion] Fuse Qwen-Image FP8 QKV projection and Blackwell epilogue
- [#37279](https://github.com/sgl-project/sglang/pull/37279) Bump sgl-deep-gemm to 0.1.7
- [#37301](https://github.com/sgl-project/sglang/pull/37301) [Cookbook] Enable DSpark on the DeepSeek-V4 Flash Vision low-latency recipes
- [#35177](https://github.com/sgl-project/sglang/pull/35177) feat(unified-memory): three sub-pools for mamba + hybrid-SWA models
- [#35158](https://github.com/sgl-project/sglang/pull/35158) feat(unified-memory): byte-budget sizing, feasibility floor, and a conservation verifier
- [#35154](https://github.com/sgl-project/sglang/pull/35154) fix(unified-memory): four boot/correctness fixes on the hybrid model paths
- [#37293](https://github.com/sgl-project/sglang/pull/37293) [Cookbook] Add DeepSeek-V4-Flash-Vision-Exp to the DeepSeek-V4 page
- [#37243](https://github.com/sgl-project/sglang/pull/37243) fix: resolve remaining GLM-5.3 rebase regressions
- [#37201](https://github.com/sgl-project/sglang/pull/37201) Fix Mooncake serving benchmark trace rows
- [#37167](https://github.com/sgl-project/sglang/pull/37167) [mem_cache] Make release, row-reuse asserts, and presence checks read the KV record
- [#34074](https://github.com/sgl-project/sglang/pull/34074) [CI] Move tests onto the right CI stages
- [#37226](https://github.com/sgl-project/sglang/pull/37226) [Rust] Simplify request defaults and document batch header ABI
- [#37222](https://github.com/sgl-project/sglang/pull/37222) [Rust] Keep sampling and scheduler wire schemas in sync
- [#37221](https://github.com/sgl-project/sglang/pull/37221) [Rust] Derive server address and accept signed env values
- [#37220](https://github.com/sgl-project/sglang/pull/37220) [Rust] Split and rename embedded server components
- [#37195](https://github.com/sgl-project/sglang/pull/37195) fix(config): retain pre-engine resolution declarations
- [#36561](https://github.com/sgl-project/sglang/pull/36561) Release the weight-checker snapshot once compare passes
- [#36562](https://github.com/sgl-project/sglang/pull/36562) state_capturer: pin the exact host-cache size via mmap + cudaHostRegister
- [#37249](https://github.com/sgl-project/sglang/pull/37249) fix(gateway): bump wfaas to 1.0.2 so ContinueNextStep unblocks dependents
- [#37250](https://github.com/sgl-project/sglang/pull/37250) fix(kda): preserve split-grid program ids
- [#36933](https://github.com/sgl-project/sglang/pull/36933) [2/N][Mixed] Mixed chunk prefill with spec enabled
- [#32710](https://github.com/sgl-project/sglang/pull/32710) [Radix Cache] Add Rust TreeCore backend with shared parity tests
- [#37141](https://github.com/sgl-project/sglang/pull/37141) [Diffusion] Fuse FLUX.2 token concatenation and NVFP4 quantization
- [#37159](https://github.com/sgl-project/sglang/pull/37159) [Kernel] Add GB300 Triton MoE configs for GLM-4.5 FP8
- [#33722](https://github.com/sgl-project/sglang/pull/33722) [KDA] Fused-accept state advance for FlashInfer KDA MTP verify
- [#36871](https://github.com/sgl-project/sglang/pull/36871) [AMD] support gfx1250 on ROCM 10
- [#37235](https://github.com/sgl-project/sglang/pull/37235) fix: resolve GLM-5.3-flash post-rebase CI regressions
- [#37144](https://github.com/sgl-project/sglang/pull/37144) [Diffusion] Fuse Qwen-Image final adaptive LayerNorm
- [#37156](https://github.com/sgl-project/sglang/pull/37156) [Diffusion] Fuse Qwen-Image FP8 norm and activation quantization
- [#37214](https://github.com/sgl-project/sglang/pull/37214) test: re-enable DSV4-Flash W8A8 8p nightly perf cases
- [#36459](https://github.com/sgl-project/sglang/pull/36459) [NPU] Fix evalscope accuracy parsing and add glm5_1 aime26 request timeout
- [#37219](https://github.com/sgl-project/sglang/pull/37219) fix(ci): update attention backend test fixtures
- [#37225](https://github.com/sgl-project/sglang/pull/37225) [AMD] build gfx1250 release image from main
- [#36101](https://github.com/sgl-project/sglang/pull/36101) weight cache: key daemon paths by GPU UUID
- [#37170](https://github.com/sgl-project/sglang/pull/37170) [unified-memory] Drop the vacated 'dense' qualifier and the restating comments
- [#34613](https://github.com/sgl-project/sglang/pull/34613) feat(unified-memory): read unified pool from attention backends fa3/flashinfer/trtllm_mha/flashmla
- [#35245](https://github.com/sgl-project/sglang/pull/35245) refactor(unified-memory): translate the KV write location once, at ForwardBatch construction
- [#36985](https://github.com/sgl-project/sglang/pull/36985) test: re-enable FlashInfer per-token NVFP4 coverage
- [#36897](https://github.com/sgl-project/sglang/pull/36897) Decouple speculative draft capacity from runtime state
- [#36875](https://github.com/sgl-project/sglang/pull/36875) [diffusion] Preserve exact component identity during loading
- [#37203](https://github.com/sgl-project/sglang/pull/37203) [CI] Speed up lint: cache pre-commit envs + mint, drop redundant work
- [#36248](https://github.com/sgl-project/sglang/pull/36248) [PP] Support prefill CUDA graph proxy tensors
- [#37151](https://github.com/sgl-project/sglang/pull/37151) [Unified Cache Linker][3/N]: Add backend-independent linker core
- [#36814](https://github.com/sgl-project/sglang/pull/36814) xpu: move prefill-only model tests to the nightly-xpu-1-gpu grid
- [#36907](https://github.com/sgl-project/sglang/pull/36907) [Diffusion] Enforce component attention backend application
- [#36422](https://github.com/sgl-project/sglang/pull/36422) add suffix for xpu kernel upload space
- [#36916](https://github.com/sgl-project/sglang/pull/36916) [Diffusion] Detect quantized transformer replacements
- [#37194](https://github.com/sgl-project/sglang/pull/37194) [Fix] Shut hicache test servers down gracefully before SIGKILL
- [#37164](https://github.com/sgl-project/sglang/pull/37164) [mem_cache] Move mamba state and `retraction_backup` into `ReqKvInfo`
- [#35588](https://github.com/sgl-project/sglang/pull/35588) [Bugfix] Fix full prefill CUDA graph padding and EAGLE capture
- [#37166](https://github.com/sgl-project/sglang/pull/37166) fix(staging): make empty staging rings reusable
- [#37132](https://github.com/sgl-project/sglang/pull/37132) [AMD] Fix the QuickReduce bf16 cast failing to build for CDNA
- [#37182](https://github.com/sgl-project/sglang/pull/37182) [CI] Fix unreachable FakeReq field initialization
- [#36991](https://github.com/sgl-project/sglang/pull/36991) [Diffusion] Add exact component precision overrides
- [#35244](https://github.com/sgl-project/sglang/pull/35244) [Fix] Transformers-fallback (GPT-NeoX) + KV pool config (DeepSeek-VL2)
- [#31041](https://github.com/sgl-project/sglang/pull/31041) [Spec] Add LFM2 and LFM2-MoE DSpark speculative decoding support
- [#35281](https://github.com/sgl-project/sglang/pull/35281) [PD] Align defensive protocol behavior across Mooncake, NIXL, and Mori
- [#35877](https://github.com/sgl-project/sglang/pull/35877) [Intel GPU] Add rust support to XPU docker images

#### 🐛 New Issues
- [#37216](https://github.com/sgl-project/sglang/issues/37216) [Bug] remote_instance weight loading fails with --pp-size 2 — TransferEngine info keyed by tp_rank 💬2
- [#37183](https://github.com/sgl-project/sglang/issues/37183) AMD MI308X SGLang GLM-5.3-Flash ValueError: The checkpoint you are trying to load has model type `glm5_next` but Transformers does not recognize this architecture. 💬2
- [#37263](https://github.com/sgl-project/sglang/issues/37263) [Bug] /v1/responses silently drops prompt_cache_key instead of applying it to radix-cache identity 💬1
- [#37268](https://github.com/sgl-project/sglang/issues/37268) [Bug] Shared experts fusion 3072 vs 6144 and Marlin+DeepEP NotImplementedError on GLM-5.3-NVFP4 (H100, v0.5.18)
- [#37283](https://github.com/sgl-project/sglang/issues/37283) [Bug] A non-object entry in a tool-call array discards the valid calls beside it
- [#37238](https://github.com/sgl-project/sglang/issues/37238) Does SGLang have a demo for running the VBench dataset accuracy evaluation on Wan2.2?
- [#37215](https://github.com/sgl-project/sglang/issues/37215) [Bug] --dp 8 intermittently fails with TCPStore EADDRINUSE on single-node 8×H800
- [#37187](https://github.com/sgl-project/sglang/issues/37187) [Bug] GPT-OSS with DP attention enabled produces garbage output (GSM8K 0/128 vs 124/128)
- [#37186](https://github.com/sgl-project/sglang/issues/37186) [Bug] Qwen3.5 visual encoder weights dropped by PP layer-range filter in load_weights

#### 🔒 Closed Issues
- [#29512](https://github.com/sgl-project/sglang/issues/29512) [Bug] glm-5.2-w4afp8 with sglang 0.5.13.post1 llm repeat and repeat
- [#24321](https://github.com/sgl-project/sglang/issues/24321) [Bug]: MiMo-V2.5 NVFP4 produces garbage tokens on consumer Blackwell (SM12.0a / RTX PRO 6000) across all MoE backends
- [#34629](https://github.com/sgl-project/sglang/issues/34629) [Regression][SM100/SM103] FlashInfer TRTLLM NVFP4 MoE tile-192 path produces NaNs
- [#21584](https://github.com/sgl-project/sglang/issues/21584) [RFC][NPU] Ascend NPU A5 Support for MXFP8/MXFP4 Quantization
- [#29008](https://github.com/sgl-project/sglang/issues/29008) [Bug] FlashInfer MLA chunked-prefix ragged prefill off-by-one with multimodal: q.shape[0] != qo_indptr[-1]
- [#36877](https://github.com/sgl-project/sglang/issues/36877) [Bug] Anthropic /v1/messages: rolling cache_control breakpoints (Claude Code default behavior) invalidate prefix cache every few turns
- [#29157](https://github.com/sgl-project/sglang/issues/29157) [Bug] CUDA graph causes garbled outputs with concurrent multi-LoRA decoding on GLM-5.1-FP8
- [#29709](https://github.com/sgl-project/sglang/issues/29709) [RFC]: KV Cache Events for HiCache L3 Storage Backends
- [#29958](https://github.com/sgl-project/sglang/issues/29958) [Bug] PDMux missing prefill_stream -> decode_stream dependency after split-prefill merge causes IndexKernel assert
- [#29914](https://github.com/sgl-project/sglang/issues/29914) [Bug] [GLM5.2] When the tools are set to required mode, the output becomes repetitive and garbled.
- [#29891](https://github.com/sgl-project/sglang/issues/29891) [Bug] MLA model branches missing scaling derivation crash FlashInferMLA backend at startup (Kimi-VL, MiniCPM3, DeepSeek-VL2)
- [#29889](https://github.com/sgl-project/sglang/issues/29889) [Bug] deepseek-vl2-tiny crashes at warmup: v_head_dim=0 from the MLA-disabled checkpoint sizes a zero-width MHA V cache
- [#32356](https://github.com/sgl-project/sglang/issues/32356) [Bug] DeepSeek-V4 DSpark TP=8 can permanently stall under HiCache long-prefix load

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 126,547 · **Open issues:** 2,339 · **Last push:** <1h ago

On September 1, 2026, llama.cpp released versions b10729, b10728, and b10727, with b10729 introducing fa-vec tunings specifically for the M1 Ultra, enhancing performance on Apple silicon. Significant merged features include CUDA enhancements for XOR swizzle flash attention and optimizations in the kv-cache for efficient state restoration. Additionally, a new issue (#28093) emerged regarding massive system RAM reservations caused by AMD iGPUs, highlighting the ongoing challenges with Vulkan support on different hardware configurations. The day showcased notable advancements in optimizing library performance while also bringing attention to hardware-specific bugs that require resolution.

#### 🚀 New Releases
- [b10729](https://github.com/ggml-org/llama.cpp/releases/tag/b10729) b10729
- [b10728](https://github.com/ggml-org/llama.cpp/releases/tag/b10728) b10728
- [b10727](https://github.com/ggml-org/llama.cpp/releases/tag/b10727) b10727
- [b10726](https://github.com/ggml-org/llama.cpp/releases/tag/b10726) b10726
- [b10724](https://github.com/ggml-org/llama.cpp/releases/tag/b10724) b10724
- [b10723](https://github.com/ggml-org/llama.cpp/releases/tag/b10723) b10723
- [b10721](https://github.com/ggml-org/llama.cpp/releases/tag/b10721) b10721
- [b10720](https://github.com/ggml-org/llama.cpp/releases/tag/b10720) b10720
- [b10719](https://github.com/ggml-org/llama.cpp/releases/tag/b10719) b10719
- [b10718](https://github.com/ggml-org/llama.cpp/releases/tag/b10718) b10718

#### ✅ Merged PRs
- [#28088](https://github.com/ggml-org/llama.cpp/pull/28088) metal : add fa-vec tunings for M1 Ultra
- [#27909](https://github.com/ggml-org/llama.cpp/pull/27909) vulkan: tune mat-vec rows for batched inference on Strix Halo
- [#25635](https://github.com/ggml-org/llama.cpp/pull/25635) CUDA: XOR swizzle flash attn K,V smem fp16 tiles
- [#28116](https://github.com/ggml-org/llama.cpp/pull/28116) metal : add concat support for quantized types
- [#27402](https://github.com/ggml-org/llama.cpp/pull/27402) AVX2: Speed up large batch size prompt processing of IQ models
- [#28073](https://github.com/ggml-org/llama.cpp/pull/28073) metal : add top-k radix implementation
- [#27991](https://github.com/ggml-org/llama.cpp/pull/27991) kv cache : optimize restoring non-contiguous cells
- [#26438](https://github.com/ggml-org/llama.cpp/pull/26438) opencl: tune the quant paths for Intel Xe-LP GPUs to improve its TG and PP performance
- [#27832](https://github.com/ggml-org/llama.cpp/pull/27832) ui: copy the displayed text of grouped agentic responses
- [#27310](https://github.com/ggml-org/llama.cpp/pull/27310) spec : fuse the encoder into the KV injection decode
- [#28045](https://github.com/ggml-org/llama.cpp/pull/28045) webgpu : avoid crash when offset is not multiple of 4 in WebGPU ggml_backend_tensor_get() implementation
- [#27466](https://github.com/ggml-org/llama.cpp/pull/27466) ROCm: add radix TOP_K for long rows
- [#28078](https://github.com/ggml-org/llama.cpp/pull/28078) metal : add fa-vec tunings for M1
- [#27621](https://github.com/ggml-org/llama.cpp/pull/27621) CUDA: extend MOE fusion to specdec, earlier MOE glu fusion and topk-router fusion were restricted to 1 token
- [#27968](https://github.com/ggml-org/llama.cpp/pull/27968) [SYCL] Enhance to get the free memory of Intel GPU
- [#28082](https://github.com/ggml-org/llama.cpp/pull/28082) ci : add check for unzip
- [#28071](https://github.com/ggml-org/llama.cpp/pull/28071) ggml : add MUL_MAT to the list of ops that may need additional memory (for WebGPU)
- [#28032](https://github.com/ggml-org/llama.cpp/pull/28032) vulkan: top_k radix select for k >= 1024 for Qwen 3.8 Flash Next

#### 🐛 New Issues
- [#28093](https://github.com/ggml-org/llama.cpp/issues/28093) Misc. bug: Vulkan: AMD iGPU causes massive system RAM reservation with discrete R9700; disabling iGPU fixes it. `bug-unconfirmed` 💬3
- [#28087](https://github.com/ggml-org/llama.cpp/issues/28087) Feature Request: publish prebuilt ROCm/HIP llama-server (and ghcr rocm container tag) so AMD users get new features like --cache-ram without building the whole ROCm toolchain 💬2
- [#28081](https://github.com/ggml-org/llama.cpp/issues/28081) Eval bug: [server] Fall back gracefully instead of throwing fatal exception when lazy tool grammar fails to parse `bug-unconfirmed` 💬1
- [#28113](https://github.com/ggml-org/llama.cpp/issues/28113) Eval bug: CUDA/HIP: MoE models produce garbage output on RDNA3.5 (gfx1151) since #27621 `bug-unconfirmed` 💬1
- [#28077](https://github.com/ggml-org/llama.cpp/issues/28077) WebUI: router ui_settings skipped when default_generation_settings is absent, MCP chats send tools=0 💬1
- [#28132](https://github.com/ggml-org/llama.cpp/issues/28132) [Bug] DeepSeek-V4-Flash on sm_121 (GB10): deterministic character-level output corruption — quant/build-independent
- [#28126](https://github.com/ggml-org/llama.cpp/issues/28126) Misc. bug: Kimi-K3 over RPC crashes the worker on Apple Silicon `bug-unconfirmed`
- [#28124](https://github.com/ggml-org/llama.cpp/issues/28124) Eval bug: Vulkan flash attention silently ignores GGML_PREC_F32 on fp16-capable GPUs, causing long-context corruption for MLA models
- [#28115](https://github.com/ggml-org/llama.cpp/issues/28115) Misc. bug: When KV is in RAM the MTP draft KV cache is also in RAM `bug-unconfirmed`
- [#28114](https://github.com/ggml-org/llama.cpp/issues/28114) Compile bug: tools/tuning hardcodes ${CMAKE_SOURCE_DIR}, breaks FetchContent consumers (ggml-metal-tuning.h not found)
- [#28112](https://github.com/ggml-org/llama.cpp/issues/28112) Misc. bug: Intermittent (~30%) CUDA "shared object initialization failed" at cudaFuncSetAttribute in fattn-mma-f16 on GB10/sm_121 (Windows arm64)
- [#28111](https://github.com/ggml-org/llama.cpp/issues/28111) CUDA: mul_mat is not batch-invariant for IQ quants at n=5 and n=8 on SM120
- [#28107](https://github.com/ggml-org/llama.cpp/issues/28107) llama-bench default verbosity swallows GGML_LOG_ERROR (Metal OOM reported only as "res = -3")
- [#28106](https://github.com/ggml-org/llama.cpp/issues/28106) glm5next: resolve_fused_ops validates device placement but not tensor types; no escape hatch for GDN/HC fusion
- [#28100](https://github.com/ggml-org/llama.cpp/issues/28100) Eval bug: qwen 3.8 flash next tensor parallel on sycl `bug-unconfirmed`
- [#28095](https://github.com/ggml-org/llama.cpp/issues/28095) Misc. bug: Media loading failed and exit code 0 in llama-cli. `bug-unconfirmed`
- [#28090](https://github.com/ggml-org/llama.cpp/issues/28090) Feature Request: Add an sm_86 entry to the MMVQ cutoff table (Q4_0 crosses at 7 on A10, worth 9.1%) `enhancement`
- [#28076](https://github.com/ggml-org/llama.cpp/issues/28076) Misc. bug: Web UI silently drops .webm video file attachments `bug-unconfirmed`
- [#28072](https://github.com/ggml-org/llama.cpp/issues/28072) Eval bug: context type MTP requested but model doesn't contain MTP layers `bug-unconfirmed`
- [#28060](https://github.com/ggml-org/llama.cpp/issues/28060) server: Vulkan speculative decoding can livelock on checkpoint-restore replay (no tokens emitted, GPU pegged)

#### 🔒 Closed Issues
- [#26746](https://github.com/ggml-org/llama.cpp/issues/26746) Eval bug: ROCm gfx1151 RPC worker crashes in GGML_OP_TOP_K during DeepSeek V4 prefill after 4096 tokens
- [#26462](https://github.com/ggml-org/llama.cpp/issues/26462) Eval bug: SIGSEGV running DS4F on Intel B70 (Missing SYCL f16 Conversion)
- [#27831](https://github.com/ggml-org/llama.cpp/issues/27831) Misc. bug: [WEBUI]: Copy to clipboard fails to copy anything
- [#28087](https://github.com/ggml-org/llama.cpp/issues/28087) Feature Request: publish prebuilt ROCm/HIP llama-server (and ghcr rocm container tag) so AMD users get new features like --cache-ram without building the whole ROCm toolchain
- [#28050](https://github.com/ggml-org/llama.cpp/issues/28050) Eval bug: MiniMax-H3-GGUF fails to load up
- [#27939](https://github.com/ggml-org/llama.cpp/issues/27939) Eval bug: qwen4exp (Qwen3.8-Flash-Next) RPC crash while generating output, ggml-vulkan.cpp:8250: GGML_ASSERT
- [#28077](https://github.com/ggml-org/llama.cpp/issues/28077) WebUI: router ui_settings skipped when default_generation_settings is absent, MCP chats send tools=0
- [#28012](https://github.com/ggml-org/llama.cpp/issues/28012) Eval bug: [Draft issue] qwen4exp: decode cost grows ~linearly with context — QSA top-k applied as a dense mask, indexer re-pools the whole cache every step

### Ollama (`ollama/ollama`)

**Stars:** 179,851 · **Open issues:** 3,860 · **Last push:** 1h ago

On September 1, 2026, Ollama saw no new releases but experienced notable activity in merged pull requests, including a deduplication of dependency files in PR #18159 and a documentation fix in PR #17579 that corrected typos identified during code review. However, several new issues have emerged, with the most significant being issue #18152, which reports a GPU driver crash on Windows with NVIDIA during the transition from single-turn to multi-turn requests, marking a regression between versions 0.32.15 and 0.33.0. Additionally, users are facing challenges with issue #18151, where the qwen3-vl model and other video models cannot be utilized for video tasks, and issue #18162 highlights a crash in MoE models across mixed AMD GPU architectures.

#### ✅ Merged PRs
- [#18159](https://github.com/ollama/ollama/pull/18159) mlx: dedup dependency files
- [#17579](https://github.com/ollama/ollama/pull/17579) fix(docs): correct typos found during code review

#### 🐛 New Issues
- [#18152](https://github.com/ollama/ollama/issues/18152) GPU driver crash (VIDEO_TDR_TIMEOUT_DETECTED / VIDEO_ENGINE_TIMEOUT_DETECTED) on Windows + NVIDIA when transitioning from single-turn to multi-turn requests — regression between 0.32.15 and 0.33.0 `bug` 💬3
- [#18151](https://github.com/ollama/ollama/issues/18151) qwen3-vl and other video models can't be used with video `feature request` 💬3
- [#18162](https://github.com/ollama/ollama/issues/18162) MoE models crash with "ROCm error: no kernel image is available" when split across mixed AMD GPU architectures (gfx1200 + gfx1201) `bug`

#### 🔒 Closed Issues
- [#17741](https://github.com/ollama/ollama/issues/17741) GLM 5.3
- [#17587](https://github.com/ollama/ollama/issues/17587) Qwen2.5-3B GGUF outputs garbage ASCII tokens ("@@@@@", "!!!!") for Chinese input on Windows — tokenizer mis-detects on CPU
- [#18127](https://github.com/ollama/ollama/issues/18127) maybe rethink your building of the docker image layers

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,704 · **Open issues:** 4,867 · **Last push:** <1h ago

Today saw no new releases for LiteLLM. However, several important pull requests were merged, including a fix to ensure that the `litellm_credential_name` is retained in the Params JSON when no credential is selected, addressing issue #39005. Additionally, a new feature for shadow evaluation was introduced, targeting teams and users to streamline JWT-auth traffic evaluation (#39015). Significant bug reports emerged today, with one of the most concerning being #39011, which notes that the `/customer/block` endpoint incorrectly returns a 500 error despite the block being successfully applied.

#### ✅ Merged PRs
- [#38838](https://github.com/BerriAI/litellm/pull/38838) fix(auth): quiet malformed virtual key rejections to stdout
- [#39048](https://github.com/BerriAI/litellm/pull/39048) fix(docker): pin apk python to 3.13 on rc/1.99.0 (cherry-pick #38917)
- [#39046](https://github.com/BerriAI/litellm/pull/39046) Revert "fix(ui): keep litellm_credential_name from LiteLLM Params JSON when no credential is selected"
- [#39005](https://github.com/BerriAI/litellm/pull/39005) fix(ui): keep litellm_credential_name from LiteLLM Params JSON when no credential is selected
- [#39020](https://github.com/BerriAI/litellm/pull/39020) build(rust): configure native extension profiles
- [#39016](https://github.com/BerriAI/litellm/pull/39016) test(e2e): assert user-observable behavior instead of DOM structure
- [#38994](https://github.com/BerriAI/litellm/pull/38994) fix(proxy): ship psycopg so partitioned SpendLogs detection actually runs
- [#38851](https://github.com/BerriAI/litellm/pull/38851) refactor(proxy): bound the budget window seed by time instead of request ids
- [#36008](https://github.com/BerriAI/litellm/pull/36008) fix(anthropic_messages): drain upstream in a detached pump so client …
- [#39015](https://github.com/BerriAI/litellm/pull/39015) feat(shadow_eval): target teams and users so JWT-auth traffic can be evaluated
- [#38857](https://github.com/BerriAI/litellm/pull/38857) chore(newrelic): cover static default_team_settings per-team routing
- [#38844](https://github.com/BerriAI/litellm/pull/38844) feat(complexity_router): escalate oversized prompts to a tier that fits before dispatch
- [#38873](https://github.com/BerriAI/litellm/pull/38873) fix(proxy): return 200 from /model/block and /model/unblock instead of 500
- [#38819](https://github.com/BerriAI/litellm/pull/38819) fix(speech): stop forwarding response_format as a chat param for Gemini TTS
- [#38878](https://github.com/BerriAI/litellm/pull/38878) fix(proxy): preserve model table columns on master key rotation
- [#38861](https://github.com/BerriAI/litellm/pull/38861) feat(complexity-router): add classification_mode to skip classifier on continuation turns
- [#25886](https://github.com/BerriAI/litellm/pull/25886) feat(gigachat): add passthrough gigachat route
- [#38913](https://github.com/BerriAI/litellm/pull/38913) feat(gigachat): add native API passthrough routes with spend logging
- [#39027](https://github.com/BerriAI/litellm/pull/39027) test(e2e): cover SCIM token creation and SCIM API auth in the Admin UI suite
- [#38479](https://github.com/BerriAI/litellm/pull/38479) fix(router): apply model renames to the in-memory deployment list
- [#38881](https://github.com/BerriAI/litellm/pull/38881) feat(friendli): add zai-org/GLM-5.3 model pricing
- [#38597](https://github.com/BerriAI/litellm/pull/38597) fix(bedrock): surface Nova Sonic user transcripts, speech events, and usage in realtime API
- [#38940](https://github.com/BerriAI/litellm/pull/38940) fix(guardrails): carry Anthropic url image sources through to guardrails
- [#38884](https://github.com/BerriAI/litellm/pull/38884) chore(techdebt): clear fresh debt from the 2026-08-29 and 2026-08-30 windows
- [#38880](https://github.com/BerriAI/litellm/pull/38880) feat(friendli): add zai-org/GLM-5.3-Flash model pricing
- [#38973](https://github.com/BerriAI/litellm/pull/38973) fix(docker): bump wolfi-base for glibc 2.44 and pin apk python to 3.13 in migrations image
- [#38917](https://github.com/BerriAI/litellm/pull/38917) fix(docker): bump wolfi-base for glibc 2.44 and pin apk python to 3.13
- [#38997](https://github.com/BerriAI/litellm/pull/38997) feat(proxy): add /v1/responses/input_tokens token counting endpoint
- [#38716](https://github.com/BerriAI/litellm/pull/38716) fix(otel): emit cache token counts on OTel v2 LLM spans
- [#38995](https://github.com/BerriAI/litellm/pull/38995) feat(openai): support workload identity federation (OIDC token exchange)
- [#34696](https://github.com/BerriAI/litellm/pull/34696) fix(proxy): allow unblocking customers via /customer/update
- [#38986](https://github.com/BerriAI/litellm/pull/38986) fix(vertex_ai): graft default vertex path when api_base has a version-only path
- [#39001](https://github.com/BerriAI/litellm/pull/39001) feat(spend_tracking): persist router metadata in spend logs for internal router models
- [#29210](https://github.com/BerriAI/litellm/pull/29210) fix(guardrails): exclude images from HiddenLayer v1 scans
- [#38993](https://github.com/BerriAI/litellm/pull/38993) fix(bedrock): stop duplicating Converse config blocks inside inferenceConfig
- [#38083](https://github.com/BerriAI/litellm/pull/38083) fix(guardrails): configure Prompt Security file timeout policy
- [#38883](https://github.com/BerriAI/litellm/pull/38883) docs(proxy): clarify spend semantics on /v2/user/info and /user/daily/activity
- [#38381](https://github.com/BerriAI/litellm/pull/38381) feat(ci): close duplicate issues after a 3-day grace period
- [#38801](https://github.com/BerriAI/litellm/pull/38801) fix: update stale source URLs and deprecation dates in model cost map
- [#38772](https://github.com/BerriAI/litellm/pull/38772) docs(claude.md): require tests to check behavior, not code structure
- [#38441](https://github.com/BerriAI/litellm/pull/38441) fix(proxy): deliver budget alerts on webhook-only alerting and accept ALERTING_WEBHOOK_URL
- [#38942](https://github.com/BerriAI/litellm/pull/38942) feat(cli): set ENABLE_TOOL_SEARCH=true for lite claude

#### 🐛 New Issues
- [#39011](https://github.com/BerriAI/litellm/issues/39011) [Bug]: /customer/block returns 500 even though the block is applied `bug` `proxy` `llm translation` 💬1
- [#38996](https://github.com/BerriAI/litellm/issues/38996) [Bug]: POST /v1/chat/completions with model a2a/{agent} bypasses object_permission.agents scope checks `llm translation` 💬1
- [#38980](https://github.com/BerriAI/litellm/issues/38980) Infinite loop in RecursiveCharacterTextSplitter._force_split() when chunk_overlap >= chunk_size 💬1
- [#38963](https://github.com/BerriAI/litellm/issues/38963) [Bug]: gemini-3.5-transcribe-preview on Vertex AI silently fails on .webm audio (mislabeled as video/webm) `bug` `llm translation` `SDK` 💬1
- [#38941](https://github.com/BerriAI/litellm/issues/38941) [Bug]: Background health check sends `supports_max_reasoning_effort` as a request field to Bedrock (400), for models without `supports_*_reasoning_effort` in the model map `llm translation` 💬1
- [#38949](https://github.com/BerriAI/litellm/issues/38949) [Bug]: Disabled public models with no team assignment appear attached to specific teams in UI `bug` `ui-dashboard` `potential-duplicate` 💬1
- [#38953](https://github.com/BerriAI/litellm/issues/38953) [Bug]: /v1/messages streaming guardrail block sends malformed SSE (no event: framing) `llm translation`
- [#38989](https://github.com/BerriAI/litellm/issues/38989) [Bug]: Sentinel test connection bypasses Sentinel and redis-py 8.x compatibility is not enforced `proxy`
- [#38988](https://github.com/BerriAI/litellm/issues/38988) [Bug]: Database coordination Redis can diverge from the Router Redis cache `proxy`
- [#38987](https://github.com/BerriAI/litellm/issues/38987) [Bug]: Redis-backed model rate counters can become permanent after increment/expiry is interrupted `proxy`
- [#38982](https://github.com/BerriAI/litellm/issues/38982) [Bug]: Router ignores Anthropic web_search_* and web_fetch_* capabilities in mixed-provider model groups `proxy` `llm translation` `claude code`
- [#38978](https://github.com/BerriAI/litellm/issues/38978) [Bug]: DB-less proxy returns generic 500 (not 401) for requests with no API key — unguarded import prisma in exception_handler.py `llm translation`
- [#38968](https://github.com/BerriAI/litellm/issues/38968) [Bug]: Order-based fallback reselects the failed primary when higher-order deployments are filtered out `proxy` `llm translation`
- [#38967](https://github.com/BerriAI/litellm/issues/38967) [Bug]: Provider-specific usage fields leak into the response body, so response shape depends on which deployment served the request `llm translation`
- [#38965](https://github.com/BerriAI/litellm/issues/38965) Homebrew setup not complete
- [#38957](https://github.com/BerriAI/litellm/issues/38957) [Bug]: cached AsyncHTTPHandler finalizer closes the pooled httpx client under in-flight SSE streams (hourly batched stream deaths) `proxy` `llm translation` `claude code`
- [#38951](https://github.com/BerriAI/litellm/issues/38951) [Bug]: OpenAPI MCP cannot read YAML specs `bug` `proxy`
- [#38947](https://github.com/BerriAI/litellm/issues/38947) [Bug]: Disabled public models with no team assignment appear attached to specific teams in UI `bug` `ui-dashboard`

#### 🔒 Closed Issues
- [#26312](https://github.com/BerriAI/litellm/issues/26312) Model alias for team can not be viewed via the UI or the API after creation.
- [#31649](https://github.com/BerriAI/litellm/issues/31649) [Feature]: Support OpenAI Workload Identity Federation (OIDC token exchange)
- [#25229](https://github.com/BerriAI/litellm/issues/25229) Integration: WhichModel MCP for real-time pricing data in model routing
- [#25950](https://github.com/BerriAI/litellm/issues/25950) [Bug]: Fireworks AI - cache_read_input_token_cost configured but not used in cost calculation
- [#27582](https://github.com/BerriAI/litellm/issues/27582) [Feature]: Support Command Code API provider (api.commandcode.ai)
- [#28499](https://github.com/BerriAI/litellm/issues/28499) [Bug]: websearch interception fails if model name consists of more than one "/"
- [#28735](https://github.com/BerriAI/litellm/issues/28735) [Bug]: Synthetic include_usage chunk violates OpenAI spec — usage event has non-empty choices instead of choices: []`
- [#23993](https://github.com/BerriAI/litellm/issues/23993) [Bug]: Intermittent LiteLLM UI Load Failure After Some Days
- [#28568](https://github.com/BerriAI/litellm/issues/28568) [Bug]: [Bug] Anthropic Messages Adapter: response.id doesn't match spend logs request_id for non-Anthropic backends
- [#28902](https://github.com/BerriAI/litellm/issues/28902) [Bug]: Search-tool edits overwrite real API keys with masked display values
- [#28409](https://github.com/BerriAI/litellm/issues/28409) [Bug]: Trim Messages function does not support "File" content type.
- [#22966](https://github.com/BerriAI/litellm/issues/22966) [Feature]: Key-level tag routing enforcement (allowed_tags or enforced_tags on virtual keys)
- [#24089](https://github.com/BerriAI/litellm/issues/24089) MCP: tool_name_to_mcp_server_name_mapping emptied by cancelled list_tools → 404 on tool calls
- [#24928](https://github.com/BerriAI/litellm/issues/24928) store_prompts_in_spend_logs: false still stores full embedding response vectors in SpendLogs
- [#27453](https://github.com/BerriAI/litellm/issues/27453) When reasoning_effort is set to none, thinking should be automatically disabled(for deepseek-v4)
- [#28811](https://github.com/BerriAI/litellm/issues/28811) Conflict with **K8s Gateway API Inference Extension**
- [#38360](https://github.com/BerriAI/litellm/issues/38360) [Bug]: Model Settings update failed
- [#38558](https://github.com/BerriAI/litellm/issues/38558) [Bug]: CCR Loop Does not work for CLI Agents
- [#26806](https://github.com/BerriAI/litellm/issues/26806) [Bug]: PR #25888 fallback path reads input/output cost from db model_info but skips cache_read_input_token_cost / cache_creation_input_token_cost
- [#28854](https://github.com/BerriAI/litellm/issues/28854) [Bug]: `input_cost_per_token_cache_hit` is a dead pricing field — silently under-bills cache hits
- [#28870](https://github.com/BerriAI/litellm/issues/28870) [Feature]: hide team service-account keys from regular members on /key/list
- [#28900](https://github.com/BerriAI/litellm/issues/28900) [Bug]: MCP tool call response not captured in standard_logging_object — call_mcp_tool success records have no response field
- [#28901](https://github.com/BerriAI/litellm/issues/28901) [Bug]: SSO partial update clears omitted SSO secrets
- [#28904](https://github.com/BerriAI/litellm/issues/28904) [Bug]: Specific policy attachments with no selectors become effective global attachments
- [#28905](https://github.com/BerriAI/litellm/issues/28905) [Bug]: Selected S3 vector-store embedding model is not used for ingestion
- [#35958](https://github.com/BerriAI/litellm/issues/35958) [Bug]: Regression on interrupted streaming /v1/messages getting logged
- [#35597](https://github.com/BerriAI/litellm/issues/35597) [Bug]: /model/block and /model/unblock return HTTP 500 after applying the database update
- [#38346](https://github.com/BerriAI/litellm/issues/38346) [Bug]: Bedrock Nova Sonic realtime discards USER-role ASR transcripts, speech start/stop events, and usage events
- [#34379](https://github.com/BerriAI/litellm/issues/34379) [Bug]: The blocked field cannot be set to false on customers.
- [#38061](https://github.com/BerriAI/litellm/issues/38061) [Feature]: Model configs like reasoning level in Auto Router
- [#37188](https://github.com/BerriAI/litellm/issues/37188) [Bug]: POST /reload/model_cost_map is not reliably propagated to all proxy replicas
- [#38947](https://github.com/BerriAI/litellm/issues/38947) [Bug]: Disabled public models with no team assignment appear attached to specific teams in UI

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,368 · **Open issues:** 1,401 · **Last push:** <1h ago

On September 1, 2026, Unsloth did not release any new versions, but several significant pull requests were merged, including enhancements such as showing the confirmation card with argument text during tool execution and improvements to the Accelerator's distributed type handling. Notable fixes involved resolving issues with the Studio settings scrollbar on Windows and addressing a problem with the GLM-5.3 chats breaking post-tool execution. Additionally, a new issue was raised regarding the website's claim that Desktop code execution operates within a "secure sandbox," as the current implementation runs tools with user permissions, prompting discussions on security features.

#### ✅ Merged PRs
- [#10023](https://github.com/unslothai/unsloth/pull/10023) fix(studio): show the confirmation card the argument text the tool is run with
- [#10099](https://github.com/unslothai/unsloth/pull/10099) Stop the torchao ROCm test from depending on the host's GPU
- [#10106](https://github.com/unslothai/unsloth/pull/10106) Run the llama.cpp keep-install back-compat tests on Windows
- [#10105](https://github.com/unslothai/unsloth/pull/10105) Scope the llama.cpp update test's Popen patch to the installer
- [#10110](https://github.com/unslothai/unsloth/pull/10110) Use the public fastmcp call_tool so the MCP guard test survives fastmcp 4
- [#4882](https://github.com/unslothai/unsloth/pull/4882) Add GGUF fit-target control and wire to llama-server --fit-target
- [#10082](https://github.com/unslothai/unsloth/pull/10082) Add configurable LAN access port
- [#10087](https://github.com/unslothai/unsloth/pull/10087) Wrap Accelerator.distributed_type patch in property() (Closes #10016)
- [#10072](https://github.com/unslothai/unsloth/pull/10072) Fix Accelerator.distributed_type bound-method bug on single-GPU patch
- [#10100](https://github.com/unslothai/unsloth/pull/10100) Move the studiobench attribution config in with the harness
- [#10059](https://github.com/unslothai/unsloth/pull/10059) Studio: split parallel tool-call arguments at JSON object boundaries
- [#10079](https://github.com/unslothai/unsloth/pull/10079) Stop two installer tests answering about the runner instead of the code
- [#10070](https://github.com/unslothai/unsloth/pull/10070) Stop charging a chat the whole cache because Max Tokens says "Max"
- [#10028](https://github.com/unslothai/unsloth/pull/10028) Patch Accelerator.distributed_type as a property, not a bare function
- [#9922](https://github.com/unslothai/unsloth/pull/9922) Fix Hub On Device Selection Across Refresh and Download Changes
- [#9303](https://github.com/unslothai/unsloth/pull/9303) Show activity on a 0-byte Xet download and keep finished cards visible longer
- [#10081](https://github.com/unslothai/unsloth/pull/10081) Studio: show progress during audio generation
- [#6753](https://github.com/unslothai/unsloth/pull/6753) Bump dompurify from 3.4.2 to 3.4.14 in /studio/frontend in the npm-frontend-security group across 1 directory
- [#10074](https://github.com/unslothai/unsloth/pull/10074) Studio: fix clipped settings scrollbar on Windows WebView2
- [#9938](https://github.com/unslothai/unsloth/pull/9938) Fix GLM-5.3 chats breaking after a tool runs
- [#10045](https://github.com/unslothai/unsloth/pull/10045) Studio: resume HTTP after Xet stall without a transport-conflict banner
- [#9979](https://github.com/unslothai/unsloth/pull/9979) CI: fix llama.cpp seed caching, Diffusers wheel installs, and isolated test coverage
- [#10056](https://github.com/unslothai/unsloth/pull/10056) Say why Studio could not enumerate a GPU, instead of just logging []
- [#10053](https://github.com/unslothai/unsloth/pull/10053) Studio: notice a quarantined payload before trusting the update fast path
- [#10019](https://github.com/unslothai/unsloth/pull/10019) fix(studio): read tool-call arguments as the types their schema declares
- [#8422](https://github.com/unslothai/unsloth/pull/8422) fix(studio): normalize Muse Glimmer's recipient-addressed protocol
- [#9829](https://github.com/unslothai/unsloth/pull/9829) Studio: install torch from an index that has kernels for the user's AMD GPU
- [#9844](https://github.com/unslothai/unsloth/pull/9844) Read the chat storage keys on call, not at module scope
- [#9857](https://github.com/unslothai/unsloth/pull/9857) Studio: keep a Windows update from leaving a CPU-only PyTorch
- [#10060](https://github.com/unslothai/unsloth/pull/10060) Stop shipping test suites in the wheel and the sdist
- [#9945](https://github.com/unslothai/unsloth/pull/9945) Fix excessive studio.db writes during chat inference
- [#10046](https://github.com/unslothai/unsloth/pull/10046) Let tool chats decode in parallel instead of one at a time
- [#10042](https://github.com/unslothai/unsloth/pull/10042) Use the head-aware planner for Studio's multi-GPU device map
- [#10063](https://github.com/unslothai/unsloth/pull/10063) Wait for the idle batch flush instead of racing a fixed sleep
- [#9884](https://github.com/unslothai/unsloth/pull/9884) Studio: set `GGML_CUDA_ENABLE_UNIFIED_MEMORY` only where it gains memory
- [#6107](https://github.com/unslothai/unsloth/pull/6107) feat(export): GGUF shard size control, save directory override, fix private Hub push
- [#10040](https://github.com/unslothai/unsloth/pull/10040) Stop the GGUF header and the chat detail polls from filling the log
- [#9988](https://github.com/unslothai/unsloth/pull/9988) Tag the compat endpoint's Ollama rows with their real source
- [#10055](https://github.com/unslothai/unsloth/pull/10055) Use the plain download icon in the Hub On Device views
- [#9939](https://github.com/unslothai/unsloth/pull/9939) Stop the subagent tool pre-approval swallowing the forwarded prompt
- [#10049](https://github.com/unslothai/unsloth/pull/10049) Stop the llama-server probe deny-list answering 405
- [#10029](https://github.com/unslothai/unsloth/pull/10029) Ask one formula whether a GGUF fits
- [#10037](https://github.com/unslothai/unsloth/pull/10037) Answer llama-server discovery probes instead of serving them the app shell
- [#10039](https://github.com/unslothai/unsloth/pull/10039) Name the encoding when the offload test reads llama.py
- [#9995](https://github.com/unslothai/unsloth/pull/9995) Train a model the planner split across cards, instead of dying in index_select
- [#10034](https://github.com/unslothai/unsloth/pull/10034) Keep a modules_to_save copy on the card it was loaded onto
- [#10032](https://github.com/unslothai/unsloth/pull/10032) Let the AppImage E2E use the Retry the failed quant row offers
- [#10035](https://github.com/unslothai/unsloth/pull/10035) Stop three Backend CI tests measuring the runner instead of the code

#### 🐛 New Issues
- [#10083](https://github.com/unslothai/unsloth/issues/10083) Website says Desktop code execution is in a “secure sandbox”, but current main runs tools as the user
- [#10067](https://github.com/unslothai/unsloth/issues/10067) [Feature] Markdown rendering + formatting toolbar for user messages in Studio Chat `feature request`
- [#10057](https://github.com/unslothai/unsloth/issues/10057) [Feature] Allow models to actually read images returned in MCP responses. `feature request`
- [#10036](https://github.com/unslothai/unsloth/issues/10036) [Feature] Search Within Current Chat `feature request` 💬1
- [#10047](https://github.com/unslothai/unsloth/issues/10047) Issue with running Deepseek model causing another download `feature request` `bug` 💬1
- [#10109](https://github.com/unslothai/unsloth/issues/10109) [Bug] Deepresearch is hardcoded to run 127.0.0.1. `feature request` `bug`
- [#10103](https://github.com/unslothai/unsloth/issues/10103) [Feature] Chat Saving Format and Location `feature request`
- [#10068](https://github.com/unslothai/unsloth/issues/10068) [Feature] Subtle fade-in animation for new assistant messages in Studio Chat `feature request`
- [#10066](https://github.com/unslothai/unsloth/issues/10066) [Studio Bug] MCP images render in chat but are not sent to vision models
- [#10052](https://github.com/unslothai/unsloth/issues/10052) [Feature] Better support for VS Code integration "Discover Models" and "Load Models" `feature request`
- [#10051](https://github.com/unslothai/unsloth/issues/10051) Proposal: one Ollama scanner for both inventory stacks

#### 🔒 Closed Issues
- [#9807](https://github.com/unslothai/unsloth/issues/9807) [Bug] Studio concatenates parallel tool-call arguments into malformed function.arguments, then replays it and the thread 400s
- [#9934](https://github.com/unslothai/unsloth/issues/9934) a lot of writes to studio.db
- [#10036](https://github.com/unslothai/unsloth/issues/10036) [Feature] Search Within Current Chat
- [#10016](https://github.com/unslothai/unsloth/issues/10016) Bug: Accelerator.distributed_type monkey-patch with a bare lambda becomes a bound method, falsely triggering distributed-mode guards
- [#10066](https://github.com/unslothai/unsloth/issues/10066) [Studio Bug] MCP images render in chat but are not sent to vision models
- [#6083](https://github.com/unslothai/unsloth/issues/6083) [Feature] Please add an option to Unsloth Export that disables slicing or defines shard sizes

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,046 · **Open issues:** 377 · **Last push:** <1h ago

On September 1, 2026, AIBrix did not release any new versions but saw several important developments in merged pull requests. Notably, the introduction of version 1.4.0 for BrixBench brings enhancements in performance and usability. Additionally, the bug fix in PR #2618 now derives cache service identity from an explicit flag instead of the previous reliance on EnableKVSync, improving the overall stability of the system. Other significant updates include the addition of a load-balance router in PR #2365 and documentation enhancements for multi-node inference orchestration paths. A key issue raised today highlights a malformed JSON error occurring when invoking the model, indicating an immediate need for further investigation into API error handling.

#### ✅ Merged PRs
- [#2622](https://github.com/vllm-project/aibrix/pull/2622) [Docs] Add architecture, configuration and usage content to feature pages
- [#2644](https://github.com/vllm-project/aibrix/pull/2644) Feat/brixbench dynamo v1.3.1 v1.4.0
- [#2625](https://github.com/vllm-project/aibrix/pull/2625) fix(modeladapter): surface missing backend scheduling reasons
- [#2618](https://github.com/vllm-project/aibrix/pull/2618) [Bug] Derive cache service identity from an explicit flag, not EnableKVSync
- [#2643](https://github.com/vllm-project/aibrix/pull/2643) docs: document both multi-node inference orchestration paths
- [#2639](https://github.com/vllm-project/aibrix/pull/2639) [Misc] Test controller registration error paths
- [#2365](https://github.com/vllm-project/aibrix/pull/2365) feat(gateway): add load-balance router and centralize the load-imbalance gate
- [#2628](https://github.com/vllm-project/aibrix/pull/2628) [API]: Add historical node replacement scheduling for RoleSet
- [#2632](https://github.com/vllm-project/aibrix/pull/2632) Surface Volcano gang scheduling status
- [#2635](https://github.com/vllm-project/aibrix/pull/2635) [Cache] Back off pod metrics fetch failures

#### 🐛 New Issues
- [#2637](https://github.com/vllm-project/aibrix/issues/2637) Add missing integration/e2e test coverage for controllers and routing paths `good first issue` `help wanted` `area/testing` 💬6
- [#2636](https://github.com/vllm-project/aibrix/issues/2636) Document PodAutoscaler support for Kubernetes external metrics adapters `help wanted` `area/autoscaling` `kind/feature` 💬1
- [#2638](https://github.com/vllm-project/aibrix/issues/2638) An error occurs when aibrix calls the model, gateway_rsp_body.go: "{\\\"error\\\":{\\\"code\\\":null,\\\"message\\\":\\\"malformed JSON in SSE stream\\\",\\\"param\\\":null,\\\"type\\\":\\\"api_error\\\"}}\"}" 💬1

#### 🔒 Closed Issues
- [#2619](https://github.com/vllm-project/aibrix/issues/2619) Improve StormService Volcano gang usability with validation and schedulerName injection
- [#2631](https://github.com/vllm-project/aibrix/issues/2631) Improve StormService Volcano gang scheduling integration

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,457 · **Open issues:** 382 · **Last push:** 1h ago

On September 1, 2026, there were no new releases for Semantic Router. However, several important developments were made with merged pull requests, including the addition of Metal (Apple Silicon) support to the candle-binding and enhancements to the configurable classifier for unknown outcomes. The built-in MoM routing boundaries were also strengthened, contributing to improved system reliability. Notably, a new issue (#3212) was raised to finalize the replay as failed on fail_request and pin the 503 path, indicating ongoing attention to error handling and system response. Other reported bugs, such as the disagreement between the security classification API and the routing signal on long prompts, highlight areas under scrutiny for future improvements.

#### ✅ Merged PRs
- [#3165](https://github.com/vllm-project/semantic-router/pull/3165) [Feature] Add Metal (Apple Silicon) support to candle-binding
- [#2213](https://github.com/vllm-project/semantic-router/pull/2213) [Bindings] expose SupportsBatchedEmbedding in candle-binding FFI (#2194)
- [#3155](https://github.com/vllm-project/semantic-router/pull/3155) [Feature] Support configurable classifier unknown outcomes
- [#3185](https://github.com/vllm-project/semantic-router/pull/3185) [Bug] Remove unused homepage and animation components
- [#3101](https://github.com/vllm-project/semantic-router/pull/3101) [Feature] Harden built-in MoM routing boundaries

#### 🐛 New Issues
- [#3212](https://github.com/vllm-project/semantic-router/issues/3212) [Feature] Finalize replay as failed on fail_request and pin the 503 path `enhancement` `needs-acceptance` `wg/data-plane-networking` 💬2
- [#3160](https://github.com/vllm-project/semantic-router/issues/3160) [Feature] Add Metal (Apple Silicon) support to candle-binding `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3204](https://github.com/vllm-project/semantic-router/issues/3204) [Bug] The security classification API and the routing signal disagree on long prompts `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3203](https://github.com/vllm-project/semantic-router/issues/3203) [Bug] Jailbreak signal rules are not validated `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3246](https://github.com/vllm-project/semantic-router/issues/3246) [Bug] Complexity signal examples use an ineffective threshold of 0.70–0.75 `bug` `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#3106](https://github.com/vllm-project/semantic-router/issues/3106) [Feature] Define unknown-result policy for classifier observations in decision trees
- [#2194](https://github.com/vllm-project/semantic-router/issues/2194) [Feature] Expose capability check `SupportsBatched` for embedding models in `candle_binding` FFI
- [#3160](https://github.com/vllm-project/semantic-router/issues/3160) [Feature] Add Metal (Apple Silicon) support to candle-binding

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*