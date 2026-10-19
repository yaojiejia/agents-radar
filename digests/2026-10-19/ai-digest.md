# 📡 AI Ecosystem Digest — 2026-10-19

> Generated 2026-10-19 00:52 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 152,258 | 23 | 12 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 129,767 | 19 | 1 | 3 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,442 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,271 | 9 | 5 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 216,595 | 13 | 22 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,566 | 31 | 13 | 4 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,400 | 94 | 63 | 222 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 254,953 | 13 | 20 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 94,078 | 25 | 7 | 27 | 1 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,285 | 17 | 22 | 71 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 131,637 | 13 | 23 | 5 | 5 |
| [Ollama](https://github.com/ollama/ollama) | 183,749 | 11 | 9 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,509 | 9 | 16 | 26 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,230 | 7 | 20 | 63 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,149 | 5 | 37 | 11 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,209 | 14 | 13 | 12 | 0 |

---

## ✨ Highlights

- **Claude Code** released [v2.1.303](https://github.com/anthropics/claude-code/releases/tag/v2.1.303).
- **OpenClaw** released [v2026.10.5](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5).
- **vLLM** released [v0.32.0](https://github.com/vllm-project/vllm/releases/tag/v0.32.0).
- **Ollama** has a critical new issue regarding cloud response failures, cited as [#19111](https://github.com/ollama/ollama/issues/19111) with 5 comments.
- **Qwen Code** reported a significant problem in [#14596](https://github.com/QwenLM/qwen-code/issues/14596) regarding CI processes, attracting 4 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 152,258 · **Open issues:** 15,204 · **Last push:** 2h ago

On October 19, 2026, Claude Code released version 2.1.303, which included essential bug fixes and reliability improvements. There were no merged pull requests for the day, but several new issues were reported, drawing attention to a critical bug where Claude ignored instructions to share information with colleagues (#103311) and a failure in Windows Desktop Remote Control initialization (#103301). Additionally, users noted that prompt suggestions have not been generated since mid-August 2026, raising concerns about usability in the macOS app (#103259). Overall, the day was relatively routine, with a focus on addressing various ongoing bugs and improving user experience.

#### 🚀 New Releases
- [v2.1.303](https://github.com/anthropics/claude-code/releases/tag/v2.1.303) v2.1.303

#### 🐛 New Issues
- [#103311](https://github.com/anthropics/claude-code/issues/103311) [Bug] Claude ignores instruction to share information with colleague and withholds it `bug` `platform:macos` `area:model` 💬2
- [#103301](https://github.com/anthropics/claude-code/issues/103301) [BUG] Windows Desktop Remote Control initialization fails; standalone CLI works `bug` `platform:windows` `area:desktop` 💬2
- [#103259](https://github.com/anthropics/claude-code/issues/103259) Prompt suggestions no longer generated since mid-August 2026 (setting enabled, macOS app 2.42304.0) `bug` `has repro` `platform:macos` `regression` 💬1
- [#103315](https://github.com/anthropics/claude-code/issues/103315) [GitHub integration] `bug` `needs-info` `github-integration` 💬1
- [#103308](https://github.com/anthropics/claude-code/issues/103308) [BUG] memory: project subagent spawn creates empty .claude/agent-memory/<agent>/ under the parent session's cwd `bug` `has repro` `platform:macos` `area:agents` 💬1
- [#103309](https://github.com/anthropics/claude-code/issues/103309) [BUG] Max 20x: subagents waiting on long Bash commands lose their 5-minute prompt cache and re-write full context — 54% of weekly limit in <24 h, invisible to the user `bug` `has repro` `platform:macos` `area:cost` 💬1
- [#103310](https://github.com/anthropics/claude-code/issues/103310) [MODEL] Announced two questions per message, and bundled two decisions in one question, against its user's rule of one question at a time `bug` `area:model` 💬1
- [#103328](https://github.com/anthropics/claude-code/issues/103328) [Bug] Auto mode incorrectly flags benign /btw message describing planned features
- [#103327](https://github.com/anthropics/claude-code/issues/103327) [BUG] Windows 10: mouse wheel sends arrow keys in background/agent-view sessions — inbox ConPTY drops DECSET 1000/1006 (measured) `bug` `has repro` `platform:windows` `area:tui`
- [#103326](https://github.com/anthropics/claude-code/issues/103326) [BUG] Claude Code does not detect, warn about, or protect against external programs overwriting behavior settings and user hooks in settings.json `bug` `platform:macos` `area:security` `area:hooks`
- [#103325](https://github.com/anthropics/claude-code/issues/103325) OAuth refresh-token rotation race: two processes on one config dir renew at once, the loser gets `invalid_grant`, and Claude Code clears the login (re-report of #24317, #43392, #48786, #80585) `bug` `platform:windows` `area:auth`
- [#103324](https://github.com/anthropics/claude-code/issues/103324) `--remote-control` launched with a positional prompt: the prompt is sometimes not delivered, the session sits idle at the prompt bar `bug` `platform:windows` `area:cli`
- [#103323](https://github.com/anthropics/claude-code/issues/103323) ~45 session transcripts (newest 5 days old) deleted in one burst on 2.1.296 with no ctrl+x or purge; retention sweep ruled out `bug` `has repro` `area:core` `platform:wsl`
- [#103322](https://github.com/anthropics/claude-code/issues/103322) [BUG] 메모리 규칙 추가·수정 시 기존 규칙과의 정합성을 확인하지 않음 (Memory rules added without consistency check against existing rules) `enhancement` `platform:macos` `memory`
- [#103321](https://github.com/anthropics/claude-code/issues/103321) Bug Report: No actionable issue, only positive feedback `question`
- [#103320](https://github.com/anthropics/claude-code/issues/103320) [Bug] Unexpected Block on Automation Task in Test Environment `bug` `platform:macos` `needs-info`
- [#103319](https://github.com/anthropics/claude-code/issues/103319) [GitHub integration] `duplicate` `github-integration`
- [#103318](https://github.com/anthropics/claude-code/issues/103318) [GitHub integration] `bug` `needs-info` `github-integration`
- [#103316](https://github.com/anthropics/claude-code/issues/103316) [URGENT][BUG] Workflow 1,000 agent() cap: replayed calls count, one failure invalidates resume cache, bundled reference steers into it `bug` `has repro` `platform:macos` `area:agents`
- [#103317](https://github.com/anthropics/claude-code/issues/103317) [Bug] Fable 5 Safeguard False Positive: reasoning_extraction `bug` `duplicate` `platform:macos` `area:model`
- [#103314](https://github.com/anthropics/claude-code/issues/103314) Problemas críticos no Claude Projects orquestrado `bug` `area:cowork` `area:routines`
- [#103313](https://github.com/anthropics/claude-code/issues/103313) [BUG] Snapshot shell orphaned at PPID 1, burning a CPU core, when Claude Code exits within ~10 s of start; timeout kills only the shell, not its children (macOS, 2.1.303) `bug` `has repro` `platform:macos` `area:bash`
- [#103312](https://github.com/anthropics/claude-code/issues/103312) [Bug] Session appears in multiple VS Code windows and closing one ends it in all `bug` `platform:windows` `area:ide` `platform:vscode`

#### 🔒 Closed Issues
- [#99800](https://github.com/anthropics/claude-code/issues/99800) Responses drift into English mid-task despite `language: "japanese"` and CLAUDE.md language rules
- [#86171](https://github.com/anthropics/claude-code/issues/86171) [BUG] Monitor tool not available if DISABLE_TELEMETRY or CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC is set
- [#84681](https://github.com/anthropics/claude-code/issues/84681) [Bug] Sandbox re-expands permissions.deny globs on every Bash call causing 1.6s/glob overhead
- [#102242](https://github.com/anthropics/claude-code/issues/102242) Paid Max 20x reverted to Free mid-cycle — invoice Paid through Nov 4, status "canceled," nine support messages, no human response
- [#84662](https://github.com/anthropics/claude-code/issues/84662) [Bug] Git shows sandbox artifacts as untracked files, causing unnecessary Claude mentions during work
- [#88326](https://github.com/anthropics/claude-code/issues/88326) [Bug] Design canvas public share fails with "unscannable" content scan error
- [#89386](https://github.com/anthropics/claude-code/issues/89386) [BUG] DISABLE_TELEMETRY and CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC use bare truthiness, so =0 and =false silently enable them
- [#89383](https://github.com/anthropics/claude-code/issues/89383) [BUG] Claude execution interrupted
- [#89382](https://github.com/anthropics/claude-code/issues/89382) Pressing Esc to interrupt a running turn sometimes discards the prompt text instead of just cancelling the turn
- [#89379](https://github.com/anthropics/claude-code/issues/89379) HRS[Bug] Agent ignores scope restrictions and accesses unauthorized project directories
- [#89376](https://github.com/anthropics/claude-code/issues/89376) DA1 terminal query-reply leaks into the shell after subcommands exit
- [#89378](https://github.com/anthropics/claude-code/issues/89378) set_session_title with an unknown session_id silently renames the CURRENT session instead of erroring

### OpenAI Codex (`openai/codex`)

**Stars:** 129,767 · **Open issues:** 23,384 · **Last push:** <1h ago

Today saw no new releases in the OpenAI Codex ecosystem, but several noteworthy pull requests were merged. Key updates included the pruning of unused standalone releases after successful installations (#55149), the introduction of observation-only model request lifecycle hooks (#55144), and enabling agent messages to wake idle root sessions under a feature flag (#54961). On the issue front, a troubling report surfaced regarding Windows desktop crashes, with main processes experiencing fatal crashes six times in 20 hours on version 26.1013 (#55088), raising significant concerns among users. This day primarily served as routine maintenance, but the crash issues and subsequent user reports highlight ongoing stability challenges.

#### ✅ Merged PRs
- [#55149](https://github.com/openai/codex/pull/55149) Prune unused standalone releases after successful installation
- [#55144](https://github.com/openai/codex/pull/55144) Add observation-only model request lifecycle hooks
- [#54961](https://github.com/openai/codex/pull/54961) Allow agent messages to wake idle root sessions behind a feature flag

#### 🐛 New Issues
- [#55088](https://github.com/openai/codex/issues/55088) [Windows desktop] Main (browser) process fatal crashes 6x in 20h on 26.1013 (3656 & 4894): cascade kill, no WER, Crashpad sidecars without minidumps `bug` `windows-os` `app` `performance` 💬3
- [#55142](https://github.com/openai/codex/issues/55142) [macOS] Approval selector disabled and existing dot disappears after restart; Statsig bootstrap timeouts `bug` `sandbox` `app` `connectivity` 💬3
- [#55148](https://github.com/openai/codex/issues/55148) Repeated incorrect work and rework exhaust Codex usage allowance `bug` `model-behavior` `rate-limits` 💬2
- [#55145](https://github.com/openai/codex/issues/55145) Applied Reset didn't happen and it made the second reset clicked and lost one reset `bug` `windows-os` `rate-limits` `app` 💬2
- [#55143](https://github.com/openai/codex/issues/55143) Unexpected monthly usage depletion after Codex quota reset on ChatGPT Go `bug` `rate-limits` `CLI` 💬2
- [#55138](https://github.com/openai/codex/issues/55138) Sites creation and deployment tools unavailable in Windows desktop Work and Codex sessions `bug` `windows-os` `app` 💬2
- [#55132](https://github.com/openai/codex/issues/55132) [Windows] Five main-process crashes immediately after IAB tab close; also occurs unlocked `bug` `windows-os` `app` 💬2
- [#55141](https://github.com/openai/codex/issues/55141) macOS desktop: accumulating per-thread tool servers and rising memory pressure after restart `bug` `mcp` `app` `session` 💬2
- [#55140](https://github.com/openai/codex/issues/55140) macOS desktop 26.1013.40934: memory use overwhelms an 8 GB Mac and blocks work `bug` `app` `performance` 💬2
- [#55137](https://github.com/openai/codex/issues/55137) [Windows][ChatGPT Desktop] Projects vanish until restart, searchable chats missing from sidebar, moves fail, local folder access regressed `bug` `windows-os` `app` `session` 💬2
- [#55122](https://github.com/openai/codex/issues/55122) cli: detect yarn and fallback pnpm in package manager detection `bug` `CLI` 💬2
- [#55152](https://github.com/openai/codex/issues/55152) [macOS / dots] Cloud owner threads disappear from sidebar/Section and reappear when opened by direct link `bug` `app` `session` `dots` 💬1
- [#55151](https://github.com/openai/codex/issues/55151) [Windows] Retained chats/IAB state accumulates 42 renderers, saturates app-server queues, and hangs desktop `bug` `windows-os` `app` `app-server` 💬1
- [#55150](https://github.com/openai/codex/issues/55150) Local packaging blocked in ChatGPT Work due to unidentified telemetry — Windows `bug` `windows-os` `sandbox` 💬1
- [#55146](https://github.com/openai/codex/issues/55146) Android Remote and Windows desktop expose old imported history differently; investigate recency vs metadata-update ordering `bug` `windows-os` `app` `session` 💬1
- [#55139](https://github.com/openai/codex/issues/55139) [Windows desktop] Plugin directory fails with cloudflare_challenge and Report a bug cannot submit `bug` `windows-os` `auth` `app` 💬1
- [#55136](https://github.com/openai/codex/issues/55136) Agent behavior: document editing detours into unrequested Pandoc and toolchain setup `bug` `model-behavior` 💬1
- [#55153](https://github.com/openai/codex/issues/55153) Windows desktop — supported pre-receive reservation integration point (source, native ABI, or vendor build) `enhancement` `windows-os` `app`
- [#55147](https://github.com/openai/codex/issues/55147) Admin console: edit a workspace MCP plugin's description, icon and OAuth client secret in place `enhancement` `auth` `mcp` `skills`

#### 🔒 Closed Issues
- [#19397](https://github.com/openai/codex/issues/19397) Long Codex threads fail to hydrate after reload when compacted replacement_history records are large (UI shows empty, logs show missing handler)

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,442 · **Open issues:** 748 · **Last push:** <1h ago

On October 19, 2026, Gemini CLI released version v0.66.0-nightly.20261018.ged96faedf, which includes updates that can be reviewed in the full changelog linked on their GitHub page, though no specific features were detailed in the release announcement. There were no merged pull requests or new issues reported in the last 24 hours, highlighting a routine maintenance day for the project. Overall, the primary development was the nightly release, with no notable feature additions or fixes to report.

#### 🚀 New Releases
- [v0.66.0-nightly.20261018.ged96faedf](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261018.ged96faedf) Release v0.66.0-nightly.20261018.ged96faedf

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,271 · **Open issues:** 2,217 · **Last push:** 2d ago

On October 19, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI, indicating a day of routine maintenance. However, several new issues were reported, with a focus on the container-runtime bazel-cache; notably, issues #5181 and #5182 both detail instances of the copilot-runtime-bazel-cache container being OOM-killed across different clusters. Additionally, issues #5183 and #5184 address a crashloopbackoff problem with the same container in separate deployments. Issue #5180 highlights a reported problem where web_fetch rejects public domains that resolve to Surge Fake-IP addresses, while issue #5187 introduces a request to allow approvals with optional guidance for future actions.

#### 🐛 New Issues
- [#5181](https://github.com/github/copilot-cli/issues/5181) P3 - container-runtime/copilot-runtime-bazel-cache-container-oomkilled on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-2-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-bazel-ca... - 2026-10-18T11:08Z `source:datadog` `catalog_service:copilot-runtime-bazel-cache` `RECOVERED` 💬1
- [#5182](https://github.com/github/copilot-cli/issues/5182) P3 - container-runtime/copilot-runtime-bazel-cache-container-oomkilled on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-1-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-bazel-ca... - 2026-10-18T11:08Z `source:datadog` `catalog_service:copilot-runtime-bazel-cache` `RECOVERED` 💬1
- [#5183](https://github.com/github/copilot-cli/issues/5183) P3 - container-runtime/copilot-runtime-bazel-cache-container-crashloopbackoff on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-1-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-b... - 2026-10-18T11:12Z `source:datadog` `catalog_service:copilot-runtime-bazel-cache` `RECOVERED` 💬1
- [#5184](https://github.com/github/copilot-cli/issues/5184) P3 - container-runtime/copilot-runtime-bazel-cache-container-crashloopbackoff on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-2-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-b... - 2026-10-18T11:21Z `source:datadog` `catalog_service:copilot-runtime-bazel-cache` `RECOVERED` 💬1
- [#5180](https://github.com/github/copilot-cli/issues/5180) web_fetch rejects public domains resolved to Surge Fake-IP addresses on macOS (CLI 1.0.98) `triage` 💬1
- [#5179](https://github.com/github/copilot-cli/issues/5179) The `triage` `invalid` 💬1
- [#5187](https://github.com/github/copilot-cli/issues/5187) Allow approval with optional guidance for future actions `triage`
- [#5185](https://github.com/github/copilot-cli/issues/5185) P3 - container-runtime/copilot-runtime-bazel-cache-memory-usage-vs-limits-dotcom on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-3-gc-cus-02,kube_container_name:copilot-runtime-bazel-cache,kube_deployment:copilot-r... - 2026-10-18T14:11Z `source:datadog` `catalog_service:copilot-runtime-bazel-cache` `CRITICAL`
- [#5178](https://github.com/github/copilot-cli/issues/5178) --agent code-review fails before inference with "Selected custom agent system prompt callback is unavailable" `area:non-interactive` `area:agents`

#### 🔒 Closed Issues
- [#5181](https://github.com/github/copilot-cli/issues/5181) P3 - container-runtime/copilot-runtime-bazel-cache-container-oomkilled on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-2-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-bazel-ca... - 2026-10-18T11:08Z
- [#5182](https://github.com/github/copilot-cli/issues/5182) P3 - container-runtime/copilot-runtime-bazel-cache-container-oomkilled on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-1-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-bazel-ca... - 2026-10-18T11:08Z
- [#5183](https://github.com/github/copilot-cli/issues/5183) P3 - container-runtime/copilot-runtime-bazel-cache-container-crashloopbackoff on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-1-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-b... - 2026-10-18T11:12Z
- [#5184](https://github.com/github/copilot-cli/issues/5184) P3 - container-runtime/copilot-runtime-bazel-cache-container-crashloopbackoff on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-2-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-b... - 2026-10-18T11:21Z
- [#5179](https://github.com/github/copilot-cli/issues/5179) The

### OpenCode (`anomalyco/opencode`)

**Stars:** 216,595 · **Open issues:** 4,669 · **Last push:** <1h ago

On October 19, 2026, OpenCode had a routine maintenance day with no new releases. Key developments included the merging of several pull requests, notably #56898, which added a Focus and Pro interface picker to app preferences, and #56904, which fixed the installation of each Windows channel into its own directory. Additionally, the TUI integration dialog in the desktop beta was matched in pull request #56877. Among the newly reported issues, the most significant was #56878, which raised concerns about a security vulnerability that allowed arbitrary system-prompt injection and permission escalation, signaling an urgent need for attention.

#### ✅ Merged PRs
- [#56898](https://github.com/anomalyco/opencode/pull/56898) feat(app): add Focus and Pro interface picker to preferences
- [#56904](https://github.com/anomalyco/opencode/pull/56904) fix(desktop): install each Windows channel into its own directory
- [#56877](https://github.com/anomalyco/opencode/pull/56877) feat(app): match the TUI integration dialog in desktop (beta)

#### 🐛 New Issues
- [#56890](https://github.com/anomalyco/opencode/issues/56890) Using Home/End to move cursor to start or end of line breaks after submitting prompt `reproduced` 💬3
- [#56833](https://github.com/anomalyco/opencode/issues/56833) Go subscriber: key revoked with no expiry date set; no formal compensation policy published for the Console breach `pending close` `triaging` 💬2
- [#56891](https://github.com/anomalyco/opencode/issues/56891) Dropdown UI elements in settings not highlighted with keyboard navigation 💬2
- [#56704](https://github.com/anomalyco/opencode/issues/56704) Windows: first TUI launch flashes several console windows (detached service and updater probes spawn console children without a hidden window) 💬2
- [#56907](https://github.com/anomalyco/opencode/issues/56907) Permission prompt hangs when viewing a subagent `reproduced` 💬1
- [#56902](https://github.com/anomalyco/opencode/issues/56902) cli: models added to a provider's config are not listed by `opencode models` until the service is restarted 💬1
- [#56903](https://github.com/anomalyco/opencode/issues/56903) desktop: Open Project menu item is permanently disabled because project.open is never registered 💬1
- [#56899](https://github.com/anomalyco/opencode/issues/56899) [FEATURE]: Target one V2 terminal client when selecting a session 💬1
- [#56895](https://github.com/anomalyco/opencode/issues/56895) question tool: free-form answer cannot accept multi-line input (silent truncation since #54822) `reproduced` 💬1
- [#56894](https://github.com/anomalyco/opencode/issues/56894) acp: generated session titles are never pushed to clients (no session_info_update with title) 💬1
- [#56885](https://github.com/anomalyco/opencode/issues/56885) [Bug] TUI startup can hang ~6 min on "Loading plugins...": client-side plugin stage=setup stalls on an external connection; reconciliation frozen ~360 s 💬1
- [#56883](https://github.com/anomalyco/opencode/issues/56883) tui: durations between 59.95s and 60s render as "60.0s" `reproduced` 💬1
- [#56878](https://github.com/anomalyco/opencode/issues/56878) security: local API and session import allow arbitrary system-prompt injection and permission escalation 💬1

#### 🔒 Closed Issues
- [#56442](https://github.com/anomalyco/opencode/issues/56442) Unable to log into Opencode web console
- [#56598](https://github.com/anomalyco/opencode/issues/56598) Opencode desktop app tells me that free models only can be used in OpenCode. I am trying to use it in opencode
- [#56560](https://github.com/anomalyco/opencode/issues/56560) API Key Expired
- [#56556](https://github.com/anomalyco/opencode/issues/56556) The API keys disappear from the account, and the agent stops working, reporting: "This API key has expired..."
- [#54045](https://github.com/anomalyco/opencode/issues/54045) [Bug]: missing spacing in task prompts and copied multipart messages
- [#56573](https://github.com/anomalyco/opencode/issues/56573) OpenCode's free tier can only be used from within OpenCode. Download it at https://opencode.ai and keep building.
- [#56543](https://github.com/anomalyco/opencode/issues/56543) Free-tier models intermittently fail with "OpenCode's free tier can only be used from within OpenCode" when using the official desktop app
- [#56604](https://github.com/anomalyco/opencode/issues/56604) Open code solutio
- [#56453](https://github.com/anomalyco/opencode/issues/56453) docs: local providers disappear when a Console workspace enables "Managed providers only"
- [#56585](https://github.com/anomalyco/opencode/issues/56585) Free tier models (Big Pickle, Beam Free, Nemotron) fail with "free tier can only be used from within OpenCode" on official CLI and desktop app
- [#56561](https://github.com/anomalyco/opencode/issues/56561) Rate limit exceeded. Please try again later.
- [#55897](https://github.com/anomalyco/opencode/issues/55897) [Question] Trocar modelo dentro de sessão ativa perde contexto no V2 - É regrissão?
- [#56600](https://github.com/anomalyco/opencode/issues/56600) Opencode subscription
- [#56583](https://github.com/anomalyco/opencode/issues/56583) cli: npm CLI (1.19.3) crashes on shared opencode.db created by Desktop 2.0.32 — 'Database is not empty and has no session table'
- [#56580](https://github.com/anomalyco/opencode/issues/56580) Error
- [#55880](https://github.com/anomalyco/opencode/issues/55880) Sonnet 5.5: Invalid `signature` in `thinking` block
- [#56570](https://github.com/anomalyco/opencode/issues/56570) Free models rejected with "can only be used from within OpenCode" on residential ISP (AS7303, Argentina); work through Cloudflare WARP (v2.0.32, Windows 11)
- [#56552](https://github.com/anomalyco/opencode/issues/56552) For 3 hours now Rate limit exceeded. Please try again later.
- [#55856](https://github.com/anomalyco/opencode/issues/55856) Only free models work with GO
- [#56537](https://github.com/anomalyco/opencode/issues/56537) plugin: prepare-stage NpmInstallFailedError - embedded npm fails where system npm succeeds
- [#56528](https://github.com/anomalyco/opencode/issues/56528) Agent switch corrupts the session sequence counter → session permanently wedged (UNIQUE constraint on session_message.seq)
- [#56523](https://github.com/anomalyco/opencode/issues/56523) OpenCode Zen Free Models Rate Limit After Opening Multiple Sessions

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,566 · **Open issues:** 1,926 · **Last push:** <1h ago

On October 19, 2026, there were no new releases for Qwen Code, but several important pull requests were merged. Notably, PR #14618 improved the managed-agent by allowing the acceptance of MariaDB numeric booleans during CHECK validation, while PR #14614 added an explicit timeout for the Hosted MCP cancellation gates' waitFor functionality. Additionally, PR #14607 addressed checkstyle issues by reindenting the retired-holder close stage. Among the new issues opened, the most concerning is #14596, which highlights a failure in the documentation-only fast lane that skips crucial formatting checks, potentially leading to problematic merges.

#### ✅ Merged PRs
- [#14618](https://github.com/QwenLM/qwen-code/pull/14618) fix(managed-agent): accept MariaDB numeric booleans in CHECK validation and repair drain-chain indentation (#14615)
- [#14614](https://github.com/QwenLM/qwen-code/pull/14614) test(cli): give the Hosted MCP cancellation gates' waitFor an explicit timeout
- [#14593](https://github.com/QwenLM/qwen-code/pull/14593) test(e2e): mount the fixture root into the container sandbox for workflow ancestor discovery (#14589)
- [#14607](https://github.com/QwenLM/qwen-code/pull/14607) fix(managed-agent): reindent the retired-holder close stage for checkstyle

#### 🐛 New Issues
- [#14596](https://github.com/QwenLM/qwen-code/issues/14596) ci: the docs_only fast lane skips Run Prettier, so a docs-only PR merges green and reddens main `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬4
- [#14537](https://github.com/QwenLM/qwen-code/issues/14537) 你们现在也玩上供应链投毒了？v0.25.2客户端自带爬虫 爬git仓库？我环境里面刚好没有装rg所以就报错了 `priority/P2` `type/bug` `category/core` `scope/file-operations` 💬4
- [#14622](https://github.com/QwenLM/qwen-code/issues/14622) Deferred review finding from PR #14588: a maxed-out advertised session budget disables the spawn timer `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#14620](https://github.com/QwenLM/qwen-code/issues/14620) Web Shell: floating approval card shows two nested scrollbars on file diffs `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#14616](https://github.com/QwenLM/qwen-code/issues/14616) Native document generation and export `priority/P3` `type/feature-request` `category/tools` `scope/content-generation` 💬3
- [#14600](https://github.com/QwenLM/qwen-code/issues/14600) Desktop crash leaves a live backend holding the conversation; relaunch cannot reconnect or recover `priority/P2` `type/bug` `category/platform` `scope/session-management` 💬3
- [#14595](https://github.com/QwenLM/qwen-code/issues/14595) test(managed-agent): ManagedChannelServiceTest racing-bind case fails with BadSqlGrammar on one ECS host, so SDK Java (fast) flakes red on unrelated PRs `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#14594](https://github.com/QwenLM/qwen-code/issues/14594) Desktop: Web Preview "Saved version" renders blank — on_navigation allowlist blocks about:srcdoc iframes `priority/P2` `type/bug` `category/ui` `scope/macos` 💬3
- [#14591](https://github.com/QwenLM/qwen-code/issues/14591) managed-agent: the public automation routes answer a dead writer's lease as 409 managed_session_writer_conflict instead of a retryable 503 (found by FG11b) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#14538](https://github.com/QwenLM/qwen-code/issues/14538) managed-agent: a reconcile_run repair that overlaps a wake pump pass leaves the Session recovery-blocked until reload `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#14536](https://github.com/QwenLM/qwen-code/issues/14536) ci(java-report): replace paged PR lookup with commit-associated pulls endpoint `priority/P3` `status/blocked` `category/development` `scope/github-actions` 💬3
- [#14576](https://github.com/QwenLM/qwen-code/issues/14576) Split View: archived session leaves a permanently empty pane `priority/P2` `type/bug` `category/ui` `scope/session-management` 💬3
- [#14539](https://github.com/QwenLM/qwen-code/issues/14539) Provision Windows code-signing certificate for CUA releases (blocks #12394) `priority/P1` `type/feature-request` `category/platform` `scope/windows` 💬3
- [#14566](https://github.com/QwenLM/qwen-code/issues/14566) ci: sdk-java lanes repeatedly fail acquiring the self-hosted host lock within 40 minutes `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#14626](https://github.com/QwenLM/qwen-code/issues/14626) Main CI failed: E2E Tests — cli/workflow-ancestor-discovery.test.ts > … > 'reads a trusted repository ancestor' (+2 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14629](https://github.com/QwenLM/qwen-code/issues/14629) Telemetry: emit the OpenRouter routing provider (and generation id) as span attributes `priority/P3` `type/feature-request` `category/telemetry` `scope/analytics` 💬2
- [#14615](https://github.com/QwenLM/qwen-code/issues/14615) Main CI failed: SDK Java — JdbcRuntimeRetentionMySqlIT.placementKeepsExactIdentitiesWithoutDecryptingHistoricalRowsOnMySql (+766 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14625](https://github.com/QwenLM/qwen-code/issues/14625) test(cli): settle budget clamp can equal the per-test ceiling and ignores reachable sums `priority/P2` `type/bug` `category/development` `scope/testing` 💬2
- [#14627](https://github.com/QwenLM/qwen-code/issues/14627) test(cli): retry ENOTEMPTY in the three bare rm teardowns of hosted-harness-session.test.ts `priority/P3` `type/bug` `category/development` `scope/testing` 💬2
- [#14610](https://github.com/QwenLM/qwen-code/issues/14610) Main CI failed: Qwen Code CI — src/serve/hosted-mcp-session.test.ts > stops a refresh replacement cancelled during acquire and fences close … (+3 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14606](https://github.com/QwenLM/qwen-code/issues/14606) Main CI failed: Managed Agent gate on 6239c94ca08f `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14617](https://github.com/QwenLM/qwen-code/issues/14617) Release Failed for v0.25.2-nightly.20261018.97925919ac on 2026-10-18 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14612](https://github.com/QwenLM/qwen-code/issues/14612) Main CI failed: Managed Agent gate on 97925919acb9 `type/bug` `status/ready-for-agent` 💬2
- [#14608](https://github.com/QwenLM/qwen-code/issues/14608) Main CI failed: Managed Agent gate on b6debf84a3fd `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14605](https://github.com/QwenLM/qwen-code/issues/14605) Main CI failed: Managed Agent gate on d51f4a6bd2bd `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14581](https://github.com/QwenLM/qwen-code/issues/14581) Main CI failed: Qwen Code CI — src/serve/hosted-hook-session.test.ts > fences a hook-cancel that lands during module evaluation as outcome_u… (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#14584](https://github.com/QwenLM/qwen-code/issues/14584) Main CI failed: E2E Tests — cli/qwen-serve-channel-workers.test.ts > … > controls a real mock-plugin worker after a channel-less boot `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14586](https://github.com/QwenLM/qwen-code/issues/14586) Main CI failed: Qwen Code CI — src/email-channel.test.ts > … > admits control replies at capacity without executing excess tasks `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14579](https://github.com/QwenLM/qwen-code/issues/14579) Main CI failed: E2E Tests — sdk-typescript/session-id.test.ts > … > should generate different session IDs for different queries `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14589](https://github.com/QwenLM/qwen-code/issues/14589) Main CI failed: E2E Tests — cli/workflow-ancestor-discovery.test.ts > … > 'reads a trusted repository ancestor' (+2 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#14572](https://github.com/QwenLM/qwen-code/issues/14572) Main CI failed: Managed Agent gate on c7061b2c3a81 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1

#### 🔒 Closed Issues
- [#14135](https://github.com/QwenLM/qwen-code/issues/14135) [H4f follow-up] Hosted Harness event stream heartbeat: bound idle half-open reads
- [#14453](https://github.com/QwenLM/qwen-code/issues/14453) fix(managed-agent): native storage registration refuses a root whose marker lands in its creation clock tick
- [#14408](https://github.com/QwenLM/qwen-code/issues/14408) Deferred review findings from PR #14317: operator-recovery discards the bound key ring (R1-6); no way to detect a silently mis-bound ring (R1-7)
- [#12937](https://github.com/QwenLM/qwen-code/issues/12937) Managed Agent: worker release refusal strands Workspace storage ownership
- [#14460](https://github.com/QwenLM/qwen-code/issues/14460) feat(managed-agent): a per-run public cancel for automation_run, the last task kind with no stop path
- [#14538](https://github.com/QwenLM/qwen-code/issues/14538) managed-agent: a reconcile_run repair that overlaps a wake pump pass leaves the Session recovery-blocked until reload
- [#14615](https://github.com/QwenLM/qwen-code/issues/14615) Main CI failed: SDK Java — JdbcRuntimeRetentionMySqlIT.placementKeepsExactIdentitiesWithoutDecryptingHistoricalRowsOnMySql (+766 more)
- [#14610](https://github.com/QwenLM/qwen-code/issues/14610) Main CI failed: Qwen Code CI — src/serve/hosted-mcp-session.test.ts > stops a refresh replacement cancelled during acquire and fences close … (+3 more)
- [#14606](https://github.com/QwenLM/qwen-code/issues/14606) Main CI failed: Managed Agent gate on 6239c94ca08f
- [#14584](https://github.com/QwenLM/qwen-code/issues/14584) Main CI failed: E2E Tests — cli/qwen-serve-channel-workers.test.ts > … > controls a real mock-plugin worker after a channel-less boot
- [#1096](https://github.com/QwenLM/qwen-code/issues/1096) 使用docker作为沙箱时找不到java
- [#14589](https://github.com/QwenLM/qwen-code/issues/14589) Main CI failed: E2E Tests — cli/workflow-ancestor-discovery.test.ts > … > 'reads a trusted repository ancestor' (+2 more)
- [#13443](https://github.com/QwenLM/qwen-code/issues/13443) Deferred review findings from PR #13341: test(core): close #12693 post-merge review test and hygiene gaps

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

**Stars:** 392,400 · **Open issues:** 9,504 · **Last push:** <1h ago

Today, OpenClaw released version 2026.10.5, which includes significant improvements in the update process, allowing `openclaw update` to complete seamlessly across devices and handle stale handoff leases and package-activation journals. Among the merged pull requests, notable mentions include performance optimizations for the gateway, refinements to UI error handling, and fixes for issues causing Gateway freezes on macOS. One particularly concerning new issue reported is the Windows Gateway startup failure due to a DataCloneError related to schema-inspection worker IPC, which has garnered attention from the community. Overall, the team is making strides in enhancing stability and performance while addressing critical bugs as they arise.

#### 🚀 New Releases
- [v2026.10.5](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5) openclaw 2026.10.5

#### ✅ Merged PRs
- [#176670](https://github.com/openclaw/openclaw/pull/176670) refactor(ui): derive board action error lifetime
- [#176676](https://github.com/openclaw/openclaw/pull/176676) perf(gateway): break down worker recovery and admission timing
- [#176545](https://github.com/openclaw/openclaw/pull/176545) improve: reduce redundant SQLite startup work
- [#176666](https://github.com/openclaw/openclaw/pull/176666) refactor(ui): share chat header and attention lifetimes
- [#176517](https://github.com/openclaw/openclaw/pull/176517) refactor(state): reuse admitted preparation facts
- [#176599](https://github.com/openclaw/openclaw/pull/176599) refactor(ui): scope chat detail loading to Solid lifetimes
- [#176654](https://github.com/openclaw/openclaw/pull/176654) fix(browser): Gateway freezes while macOS gates Chrome profile reads
- [#176590](https://github.com/openclaw/openclaw/pull/176590) refactor(ui): own unsupported browser screen elements
- [#176681](https://github.com/openclaw/openclaw/pull/176681) fix(skills): ignored skills load when ignore-file reads fail
- [#176638](https://github.com/openclaw/openclaw/pull/176638) fix(cli): escape terminal controls in session and node reports
- [#176641](https://github.com/openclaw/openclaw/pull/176641) refactor(ui): drive chat cards and menus from native inputs
- [#175845](https://github.com/openclaw/openclaw/pull/175845) fix: resume queued user work after Gateway restart
- [#176408](https://github.com/openclaw/openclaw/pull/176408) refactor(browser): remove unselected private upload and screenshot options
- [#176578](https://github.com/openclaw/openclaw/pull/176578) fix: Gateways and Codex launchers leak as orphaned processes when their owner dies
- [#176615](https://github.com/openclaw/openclaw/pull/176615) refactor: bind Control UI browser chrome to static head elements
- [#176673](https://github.com/openclaw/openclaw/pull/176673) test(subagents): gate completion recovery on a durable predecessor
- [#176538](https://github.com/openclaw/openclaw/pull/176538) refactor(plugins): keep single-consumer registration with plugin owners
- [#175403](https://github.com/openclaw/openclaw/pull/175403) refactor(mcp): migrate session and node clients to SDK v2
- [#176532](https://github.com/openclaw/openclaw/pull/176532) fix(update): build adopted immutable releases without an isolated build account
- [#176619](https://github.com/openclaw/openclaw/pull/176619) refactor(ui): consume Skills owner receipts
- [#176606](https://github.com/openclaw/openclaw/pull/176606) fix(hooks): preserve reader status when delivery is canceled
- [#176665](https://github.com/openclaw/openclaw/pull/176665) fix(doctor): retain staging sessions across scoped inspections
- [#176402](https://github.com/openclaw/openclaw/pull/176402) ci: migrate supported macOS jobs to Xcode 27
- [#176613](https://github.com/openclaw/openclaw/pull/176613) refactor(ui): use owner-provided overlay geometry
- [#176603](https://github.com/openclaw/openclaw/pull/176603) fix(sessions): keep yielded-parent Stop alive while settling
- [#176633](https://github.com/openclaw/openclaw/pull/176633) refactor(ui): bind Settings work to owner receipts
- [#176644](https://github.com/openclaw/openclaw/pull/176644) refactor(ui): bind component feedback and visibility to owned DOM
- [#176506](https://github.com/openclaw/openclaw/pull/176506) perf(control-ui): reduce older-history paging stalls
- [#176658](https://github.com/openclaw/openclaw/pull/176658) fix: Code Mode leaves cancelled tools marked active
- [#176610](https://github.com/openclaw/openclaw/pull/176610) refactor(ui): share timeout and shadow-style lifetimes
- [#176529](https://github.com/openclaw/openclaw/pull/176529) refactor: give sidebar filter controls explicit ownership
- [#176639](https://github.com/openclaw/openclaw/pull/176639) refactor(test): remove prewarm mock-only retry assertion
- [#176636](https://github.com/openclaw/openclaw/pull/176636) refactor(ui): bind palette and onboarding request lifetimes
- [#176577](https://github.com/openclaw/openclaw/pull/176577) fix: restore CLI tools after tool catalog changes
- [#176543](https://github.com/openclaw/openclaw/pull/176543) perf: reduce transaction work during manual compaction
- [#174989](https://github.com/openclaw/openclaw/pull/174989) fix(cli): strip terminal controls from the inspected Claw agent name
- [#176593](https://github.com/openclaw/openclaw/pull/176593) perf(model-catalog): skip unused legacy refresh reads
- [#176632](https://github.com/openclaw/openclaw/pull/176632) refactor(ui): scope chat summary subscriptions to Solid lifetimes
- [#176556](https://github.com/openclaw/openclaw/pull/176556) perf: reduce personal account link queries
- [#176622](https://github.com/openclaw/openclaw/pull/176622) refactor(ui): bind retained canvas hosts through owned refs
- [#176624](https://github.com/openclaw/openclaw/pull/176624) test: isolate backup scratch roots between test files
- [#171794](https://github.com/openclaw/openclaw/pull/171794) feat(ui): show live change totals in chat details
- [#176609](https://github.com/openclaw/openclaw/pull/176609) refactor(ui): capture model account target receipts
- [#176645](https://github.com/openclaw/openclaw/pull/176645) chore(ui): remove unused type and constructor exports
- [#176602](https://github.com/openclaw/openclaw/pull/176602) fix(quota): preserve recovery across concurrent sessions
- [#176489](https://github.com/openclaw/openclaw/pull/176489) refactor(ui): register MCP app retirement hosts
- [#176541](https://github.com/openclaw/openclaw/pull/176541) refactor(ui): reuse registered hub tab focus targets
- [#176576](https://github.com/openclaw/openclaw/pull/176576) fix(codex): first Codex start after a Gateway crash fails on macOS
- [#176605](https://github.com/openclaw/openclaw/pull/176605) refactor(ui): reuse chat panel lifecycle primitives
- [#176589](https://github.com/openclaw/openclaw/pull/176589) perf(agents): reduce model request preparation allocations
- [#176429](https://github.com/openclaw/openclaw/pull/176429) refactor(sessions): skip redundant fresh-input identity reads
- [#176581](https://github.com/openclaw/openclaw/pull/176581) perf(sessions): batch remote session creation refreshes
- [#175219](https://github.com/openclaw/openclaw/pull/175219) fix: queued internal events fail after another session completion
- [#176405](https://github.com/openclaw/openclaw/pull/176405) refactor: give sidebar controls explicit ownership
- [#176598](https://github.com/openclaw/openclaw/pull/176598) test(gateway,plugins,infra): remove low-value tests (batch d257)
- [#176473](https://github.com/openclaw/openclaw/pull/176473) perf(sessions): reuse compaction admission and display facts
- [#176480](https://github.com/openclaw/openclaw/pull/176480) perf(control-ui): load older history in 2 MiB pages
- [#176470](https://github.com/openclaw/openclaw/pull/176470) fix(discord): hide tool activity in default progress messages
- [#176383](https://github.com/openclaw/openclaw/pull/176383) fix(ui): keep plugin settings views through reconnects
- [#176548](https://github.com/openclaw/openclaw/pull/176548) fix: wait for offline maintenance during Gateway startup
- [#176359](https://github.com/openclaw/openclaw/pull/176359) test(ui): tolerate WebKit subpixel drift in menu shortcut alignment
- [#176560](https://github.com/openclaw/openclaw/pull/176560) refactor(ui): dispose markdown tooltip and table listeners
- [#176475](https://github.com/openclaw/openclaw/pull/176475) refactor(ui): tie widget work to owner publication
- [#176597](https://github.com/openclaw/openclaw/pull/176597) refactor(ui): derive refresh and IP lookup state
- [#176617](https://github.com/openclaw/openclaw/pull/176617) refactor(test): remove obsolete compaction passthrough mock
- [#176439](https://github.com/openclaw/openclaw/pull/176439) refactor(cron): prepare mutations from resident jobs
- [#176620](https://github.com/openclaw/openclaw/pull/176620) fix: reuse the UI build cache without an explicit root
- [#176447](https://github.com/openclaw/openclaw/pull/176447) fix(ci): dependency checks fail on reply-admission leftovers
- [#176375](https://github.com/openclaw/openclaw/pull/176375) refactor(ui): bind chat recovery and icons to Solid owners
- [#176525](https://github.com/openclaw/openclaw/pull/176525) refactor(ui): keep board and desktop lifecycle with owners
- [#176596](https://github.com/openclaw/openclaw/pull/176596) perf(gateway): skip no-op startup config rereads
- [#176502](https://github.com/openclaw/openclaw/pull/176502) fix(cli): prevent launcher bundle qualification from exhausting worker memory
- [#176518](https://github.com/openclaw/openclaw/pull/176518) refactor(ui): scope chat media reads to keyed lifetimes
- [#176601](https://github.com/openclaw/openclaw/pull/176601) perf(sessions): bound cached rows and omit unused patch results
- [#176568](https://github.com/openclaw/openclaw/pull/176568) fix(runtime): accept Node 27 and its prereleases
- [#176562](https://github.com/openclaw/openclaw/pull/176562) fix(ci): dependency checks fail on four orphaned exports
- [#176588](https://github.com/openclaw/openclaw/pull/176588) refactor(ui): retire chat media inputs at the native boundary
- [#176547](https://github.com/openclaw/openclaw/pull/176547) refactor(ui): own dashboard sources and plugin focus targets
- [#176041](https://github.com/openclaw/openclaw/pull/176041) refactor(gateway): simplify startup plugin publication ownership
- [#176537](https://github.com/openclaw/openclaw/pull/176537) refactor(sqlite): trust schema and worker lifecycle owners
- [#176614](https://github.com/openclaw/openclaw/pull/176614) fix: reuse cached Vitest workers without native TypeScript
- [#176397](https://github.com/openclaw/openclaw/pull/176397) refactor(ui): align page resources with Solid lifetimes
- [#176569](https://github.com/openclaw/openclaw/pull/176569) test(core,plugins,ui): remove low-value tests (batch d256)
- [#176566](https://github.com/openclaw/openclaw/pull/176566) refactor(ui): bind browser dashboards to Solid lifetimes
- [#176549](https://github.com/openclaw/openclaw/pull/176549) perf(sessions): streamline transcript identity replacement
- [#176561](https://github.com/openclaw/openclaw/pull/176561) refactor(agents): simplify owned MCP and reaction state
- [#176595](https://github.com/openclaw/openclaw/pull/176595) build(docker): move images to Debian trixie
- [#175711](https://github.com/openclaw/openclaw/pull/175711) chore(tooling): type check with tsrs instead of tsgo
- [#176017](https://github.com/openclaw/openclaw/pull/176017) refactor(plugins): remove redundant type headings
- [#176464](https://github.com/openclaw/openclaw/pull/176464) perf(memory): reduce idle indexing database work
- [#176583](https://github.com/openclaw/openclaw/pull/176583) perf(gateway): encode session broadcast variants once
- [#176485](https://github.com/openclaw/openclaw/pull/176485) refactor(memory): trust the host cron service contract
- [#176436](https://github.com/openclaw/openclaw/pull/176436) refactor(copilot): trust admitted host tool structure
- [#176516](https://github.com/openclaw/openclaw/pull/176516) refactor(ui): share native overlay anchor wiring
- [#176544](https://github.com/openclaw/openclaw/pull/176544) refactor(ui): own link-reader publication lifecycle
- [#176460](https://github.com/openclaw/openclaw/pull/176460) refactor(ui): simplify settings and plugin lifecycles
- [#176500](https://github.com/openclaw/openclaw/pull/176500) refactor: remove redundant SQLite lease-release transactions
- [#176585](https://github.com/openclaw/openclaw/pull/176585) perf(diagnostics): reuse empty private payloads for OTel
- [#176573](https://github.com/openclaw/openclaw/pull/176573) perf(subagents): attribute registry activation startup time
- [#176542](https://github.com/openclaw/openclaw/pull/176542) refactor(gateway): remove repeated subscription preparation
- [#176521](https://github.com/openclaw/openclaw/pull/176521) refactor: trust validated workspace read replies
- [#176584](https://github.com/openclaw/openclaw/pull/176584) refactor(test): remove obsolete Discord and LINE config mocks
- [#176533](https://github.com/openclaw/openclaw/pull/176533) test: remove low-value tests (batch d255)
- [#176450](https://github.com/openclaw/openclaw/pull/176450) perf(subagents): skip unchanged durable registry writes
- [#176487](https://github.com/openclaw/openclaw/pull/176487) perf(sessions): reduce transcript append statements
- [#176580](https://github.com/openclaw/openclaw/pull/176580) fix(ui): give Details selection rows consistent padding
- [#176462](https://github.com/openclaw/openclaw/pull/176462) perf: reuse Gateway facts during first-session preparation
- [#176507](https://github.com/openclaw/openclaw/pull/176507) refactor: give mounted sidebar rows and Inbox controls explicit owners
- [#176559](https://github.com/openclaw/openclaw/pull/176559) refactor(ui): scope discussion loading to request lifetime
- [#176384](https://github.com/openclaw/openclaw/pull/176384) fix(opencode-go): refresh bundled Go catalog to OpenCode's current lineup
- [#176459](https://github.com/openclaw/openclaw/pull/176459) perf: avoid redundant SQLite transactions for trajectory appends
- [#176554](https://github.com/openclaw/openclaw/pull/176554) refactor(ui): bind CI panel work to native input changes
- [#176030](https://github.com/openclaw/openclaw/pull/176030) refactor: centralize migration source snapshot verification
- [#175685](https://github.com/openclaw/openclaw/pull/175685) fix(agents): return the full sessions_send reply past the terminal snapshot bound
- [#176404](https://github.com/openclaw/openclaw/pull/176404) fix(ui): Usage shows unknown totals and hides analytics when one response ends early
- [#176449](https://github.com/openclaw/openclaw/pull/176449) refactor(ui): own tooltip and lightbox interaction lifetimes
- [#175119](https://github.com/openclaw/openclaw/pull/175119) fix(status): one agent's deletion aborts the Gateway health refresh for every agent
- [#175642](https://github.com/openclaw/openclaw/pull/175642) fix(heartbeat): targeted system events stay unread during isolated heartbeats
- [#176106](https://github.com/openclaw/openclaw/pull/176106) fix(qa): subagent handoff could pass when no child was created
- [#176534](https://github.com/openclaw/openclaw/pull/176534) perf(sessions): reuse recovery transaction facts
- [#176433](https://github.com/openclaw/openclaw/pull/176433) perf(sessions): remove duplicate entry read validation
- [#176551](https://github.com/openclaw/openclaw/pull/176551) perf(ui): load context reports on expansion
- [#176539](https://github.com/openclaw/openclaw/pull/176539) refactor(ui): derive optional browser and HTML preview resources
- [#176496](https://github.com/openclaw/openclaw/pull/176496) fix(agents): preserve turn results when transport cleanup fails
- [#176410](https://github.com/openclaw/openclaw/pull/176410) fix: prevent transcript backlogs delaying session updates
- [#176570](https://github.com/openclaw/openclaw/pull/176570) test: stabilize FRV deadline fixture under Bun
- [#176555](https://github.com/openclaw/openclaw/pull/176555) refactor(matrix): remove unused verification config mocks
- [#176484](https://github.com/openclaw/openclaw/pull/176484) refactor(ui): move page work to owned publications
- [#176488](https://github.com/openclaw/openclaw/pull/176488) test(config,gateway): remove low-value tests (batch d254)
- [#176380](https://github.com/openclaw/openclaw/pull/176380) fix(agents): deliver child results during timeout recovery
- [#176461](https://github.com/openclaw/openclaw/pull/176461) chore(deps): update fs-safe to 0.26.8
- [#176482](https://github.com/openclaw/openclaw/pull/176482) refactor: own chat comment controls and scroll lifetimes
- [#176422](https://github.com/openclaw/openclaw/pull/176422) fix: scheduled follow-ups lose authorized task access
- [#176550](https://github.com/openclaw/openclaw/pull/176550) perf(subagents): avoid retained-run refreshes during restart
- [#176457](https://github.com/openclaw/openclaw/pull/176457) perf(gateway): omit session message bodies for roster-only web sockets
- [#176334](https://github.com/openclaw/openclaw/pull/176334) fix(doctor): avoid rereading live state for writable inspections
- [#176370](https://github.com/openclaw/openclaw/pull/176370) refactor(ui): derive chat panel state and own DOM references
- [#176413](https://github.com/openclaw/openclaw/pull/176413) fix(approvals): Allow Once exec commands are refused with "Exec approval policy is unavailable or changing before execution"
- [#176492](https://github.com/openclaw/openclaw/pull/176492) refactor(ui): bind page updates to owner receipts
- [#176420](https://github.com/openclaw/openclaw/pull/176420) refactor(ui): own app and plugin rendering lifetimes
- [#176421](https://github.com/openclaw/openclaw/pull/176421) refactor(ui): own chat sidebar panel and focus references
- [#176441](https://github.com/openclaw/openclaw/pull/176441) refactor(agents): trust validated shared-state replies
- [#176503](https://github.com/openclaw/openclaw/pull/176503) refactor(ui): keep assistant dock lifecycle with its owner
- [#176528](https://github.com/openclaw/openclaw/pull/176528) fix(gateway): stop bootstrap artifact checks from racing cleanup
- [#176465](https://github.com/openclaw/openclaw/pull/176465) test(discord,plugins,agents): remove low-value tests (batch d253)
- [#176426](https://github.com/openclaw/openclaw/pull/176426) fix(chat): retain source through media persistence
- [#176530](https://github.com/openclaw/openclaw/pull/176530) refactor(tests): remove obsolete Mattermost send fixtures
- [#176438](https://github.com/openclaw/openclaw/pull/176438) fix(subagents): preserve active work when cancelling queued followups
- [#176403](https://github.com/openclaw/openclaw/pull/176403) fix: prevent premature nested tool completion
- [#176512](https://github.com/openclaw/openclaw/pull/176512) perf(geolocation): release idle city database readers
- [#176444](https://github.com/openclaw/openclaw/pull/176444) improve: reuse SQLite capability checks during Gateway startup
- [#176510](https://github.com/openclaw/openclaw/pull/176510) fix(beam): pause mirrors with unavailable credentials
- [#176504](https://github.com/openclaw/openclaw/pull/176504) chore(doctor): schedule removal of restored pre-July state importers
- [#176509](https://github.com/openclaw/openclaw/pull/176509) perf(agents): release consumed activity transcript text
- [#176430](https://github.com/openclaw/openclaw/pull/176430) fix: Windows worker requests fail when they carry the environment
- [#176194](https://github.com/openclaw/openclaw/pull/176194) fix(state): restore Windows Gateway startup with Proxy environments
- [#176368](https://github.com/openclaw/openclaw/pull/176368) perf(dev): uncap formatting and add pinned Bun selectors
- [#176428](https://github.com/openclaw/openclaw/pull/176428) perf(sqlite): remove duplicate snapshot version verification
- [#176293](https://github.com/openclaw/openclaw/pull/176293) fix(auto-reply): preserve multiline /btw and /loop input
- [#174151](https://github.com/openclaw/openclaw/pull/174151) fix(process): use monotonic clock for process-tree kill grace deadline
- [#176481](https://github.com/openclaw/openclaw/pull/176481) refactor(ui): share owner-scoped pointer gestures
- [#176456](https://github.com/openclaw/openclaw/pull/176456) perf(gateway): measure wire bytes and compress frames from 1 KiB
- [#176501](https://github.com/openclaw/openclaw/pull/176501) fix(ui): keep chat startup within its byte budget
- [#176440](https://github.com/openclaw/openclaw/pull/176440) fix(talk): restore archived backing sessions before voice connects
- [#176435](https://github.com/openclaw/openclaw/pull/176435) fix(gateway): keep sidebar delta history as row identities
- [#176407](https://github.com/openclaw/openclaw/pull/176407) fix: preserve Code Mode recovery after wrapped tool output
- [#176474](https://github.com/openclaw/openclaw/pull/176474) refactor(tests): remove obsolete send config helpers
- [#176486](https://github.com/openclaw/openclaw/pull/176486) refactor(ui): reuse component scheduling lifetimes
- [#176471](https://github.com/openclaw/openclaw/pull/176471) fix: preserve tier-suffixed model reasoning in follow-up requests
- [#176399](https://github.com/openclaw/openclaw/pull/176399) test(gateway,plugins,cli,ui): remove low-value tests (batch d252)
- [#176476](https://github.com/openclaw/openclaw/pull/176476) refactor(ui): share owner-scoped document titles
- [#176483](https://github.com/openclaw/openclaw/pull/176483) fix(mac): package app with retained update rollback dependencies
- [#176145](https://github.com/openclaw/openclaw/pull/176145) fix(subagents): failed requester wake no longer strands an expired completion for 7 days
- [#176427](https://github.com/openclaw/openclaw/pull/176427) refactor(state): remove duplicate snapshot validation
- [#176469](https://github.com/openclaw/openclaw/pull/176469) fix(daemon): handle multiline commands in systemd discovery
- [#176061](https://github.com/openclaw/openclaw/pull/176061) docs: document password authentication for logs
- [#176373](https://github.com/openclaw/openclaw/pull/176373) test(gateway,channels,cli): remove low-value tests (batch d251)
- [#176218](https://github.com/openclaw/openclaw/pull/176218) fix(cron): prevent announce wakes from resetting CLI chats
- [#176458](https://github.com/openclaw/openclaw/pull/176458) fix(openshell): preserve data when filesystem inspection fails
- [#176393](https://github.com/openclaw/openclaw/pull/176393) refactor(ui): simplify reactive adapter tracking boundaries
- [#176310](https://github.com/openclaw/openclaw/pull/176310) fix(agents): keep failed BTW block sends from dropping later replies
- [#175927](https://github.com/openclaw/openclaw/pull/175927) test(core,channels): remove low-value tests (batch d244)
- [#176452](https://github.com/openclaw/openclaw/pull/176452) refactor: bind chat previews to keyed lifetimes
- [#175994](https://github.com/openclaw/openclaw/pull/175994) refactor(infra): remove redundant approval type heading
- [#176392](https://github.com/openclaw/openclaw/pull/176392) refactor(ui): centralize control lifetimes and register focus targets
- [#176003](https://github.com/openclaw/openclaw/pull/176003) refactor(plugins): call existing operation owners directly
- [#176455](https://github.com/openclaw/openclaw/pull/176455) perf(checks): skip plugin boundary declarations for UI oxlint
- [#176411](https://github.com/openclaw/openclaw/pull/176411) perf(sqlite): release discarded native query memory promptly
- [#176417](https://github.com/openclaw/openclaw/pull/176417) perf(chat): reduce redundant process and progress reads
- [#176448](https://github.com/openclaw/openclaw/pull/176448) fix: macOS live updates fail while packaging the app
- [#175107](https://github.com/openclaw/openclaw/pull/175107) fix: clean up Docker MCP containers after disconnects and crashes
- [#176415](https://github.com/openclaw/openclaw/pull/176415) refactor: derive chat pull request presentation
- [#176442](https://github.com/openclaw/openclaw/pull/176442) fix: restore live subagent previews and full-width titles
- [#174156](https://github.com/openclaw/openclaw/pull/174156) fix(gateway): unsupported thinking levels are saved for reasoning: false models when the run route switches
- [#173747](https://github.com/openclaw/openclaw/pull/173747) fix: resume saved updates after startup inspection
- [#176409](https://github.com/openclaw/openclaw/pull/176409) fix(chat): elapsed time shows thousands of days while a response starts
- [#176358](https://github.com/openclaw/openclaw/pull/176358) fix(ui): Usage page waits for provider plans before showing session totals
- [#176434](https://github.com/openclaw/openclaw/pull/176434) refactor(irc): consolidate outbound rendering tests
- [#176374](https://github.com/openclaw/openclaw/pull/176374) test(fixtures): remove low-value tests (batch d250)
- [#176381](https://github.com/openclaw/openclaw/pull/176381) improve(ui): group context sources and separate deferred tools
- [#176313](https://github.com/openclaw/openclaw/pull/176313) fix(plugins): keep Decision provider startup metadata scoped
- [#176377](https://github.com/openclaw/openclaw/pull/176377) refactor: simplify Solid widget lifecycles and DOM ownership
- [#176425](https://github.com/openclaw/openclaw/pull/176425) fix: recover blank New Session pages without reload loops
- [#176033](https://github.com/openclaw/openclaw/pull/176033) refactor(agents): use canonical sandbox contract owners
- [#176012](https://github.com/openclaw/openclaw/pull/176012) refactor(core): consolidate runtime discriminant facts
- [#174534](https://github.com/openclaw/openclaw/pull/174534) fix(cli): reject out-of-range attach grant expiry instead of crashing
- [#175368](https://github.com/openclaw/openclaw/pull/175368) refactor: share native macOS process census across runtimes
- [#176412](https://github.com/openclaw/openclaw/pull/176412) fix(ui): keep startup progress below the first message in new chats
- [#173904](https://github.com/openclaw/openclaw/pull/173904) fix(gateway): measure health-collection deadline on the monotonic clock
- [#176265](https://github.com/openclaw/openclaw/pull/176265) fix: restore OpenCode Go family routing after API migration
- [#175935](https://github.com/openclaw/openclaw/pull/175935) refactor(infra): share admission finish observation
- [#173310](https://github.com/openclaw/openclaw/pull/173310) fix: show compaction failures instead of stale overflow advice
- [#176186](https://github.com/openclaw/openclaw/pull/176186) fix(agents): fall back immediately on exhausted Anthropic usage caps
- [#176401](https://github.com/openclaw/openclaw/pull/176401) fix: keep unresolved session owners from blocking authorized work
- [#175975](https://github.com/openclaw/openclaw/pull/175975) test: remove low-value tests (batch d249)
- [#176394](https://github.com/openclaw/openclaw/pull/176394) fix: Community entry takes space from the session list
- [#175989](https://github.com/openclaw/openclaw/pull/175989) test: exercise core operation owners at module boundaries
- [#175957](https://github.com/openclaw/openclaw/pull/175957) test(gateway,browser,state): remove low-value tests (batch d247)
- [#175914](https://github.com/openclaw/openclaw/pull/175914) refactor(runtime): retire private execution and startup options
- [#176365](https://github.com/openclaw/openclaw/pull/176365) fix: live updates defer indefinitely during active conversations
- [#176371](https://github.com/openclaw/openclaw/pull/176371) refactor(chat): bind platform listeners to owner lifetimes
- [#176364](https://github.com/openclaw/openclaw/pull/176364) refactor(ui): share reactive browser resource lifetimes

#### 🐛 New Issues
- [#176111](https://github.com/openclaw/openclaw/issues/176111) [Bug]: Windows Gateway startup fails with DataCloneError - schema-inspection worker IPC sends the win32 env Proxy through advanced serialization (b1e6a6b, 2026.10.4) `clawsweeper:source-repro` `impact:crash-loop` `P0` `issue-rating: 🦞 diamond lobster` 💬3
- [#176183](https://github.com/openclaw/openclaw/issues/176183) Model fallback abandoned after first candidate in continuation sub-runs (lane FailoverError thrown before next_fallback step) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#176273](https://github.com/openclaw/openclaw/issues/176273) [Feature]: Native progress-card SDK and trusted-plugin admission for Claw Orchestrator `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬3
- [#176223](https://github.com/openclaw/openclaw/issues/176223) workboard: refreshDiagnostics bumps workboard_cards.updated_at for every scanned card, defeating staleness heuristics `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#176635](https://github.com/openclaw/openclaw/issues/176635) [Bug]: memory-wiki: CLI `wiki ingest` fails "vault changed while its compiled cache was being built" when a gateway wiki.bridge.import runs concurrently (in-process-only vault mutation lock) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬2
- [#176572](https://github.com/openclaw/openclaw/issues/176572) Linux companion publish: latest.json public readback convergence window too short for GitHub CDN `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#176269](https://github.com/openclaw/openclaw/issues/176269) [Bug]: Run transport release turns a successful turn into a failure when lease disposal rejects or hangs `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#176222](https://github.com/openclaw/openclaw/issues/176222) [Feature]: Supported operator inspection and recovery for unknown managed-execution effects `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#176300](https://github.com/openclaw/openclaw/issues/176300) gateway: mixed-version CLI/SDK writers during version churn can corrupt the state DB (torn WAL) — warn-and-continue should refuse or serialize `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:data-loss` 💬2
- [#176342](https://github.com/openclaw/openclaw/issues/176342) [state/agent-db] stale-lease integrity gates serialize agent startup after unclean shutdown — minutes-long agent unavailability `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#176353](https://github.com/openclaw/openclaw/issues/176353) exec: "Allow Once" is refused with "Exec approval policy is unavailable or changing before execution" because approval-store bookkeeping publishes exec-policy pending denials `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#176117](https://github.com/openclaw/openclaw/issues/176117) [Bug]: Suspended (expiry) subagent completion is stranded after its requester settle wake ends undelivered: wake cleared, no re-arm, discarded at 7 days `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#176301](https://github.com/openclaw/openclaw/issues/176301) [Bug]: memory.search.extraPaths files are indexed but never surface in content search (ranked at the bottom) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#176307](https://github.com/openclaw/openclaw/issues/176307) Update failure: gateway-recovery-verification (2026.10.4) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬2
- [#176080](https://github.com/openclaw/openclaw/issues/176080) sessions: archive/reconcile worker queues have no settlement timeout or admission bound — one native-stuck worker wedges lifecycle paths and accumulates external memory `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#176220](https://github.com/openclaw/openclaw/issues/176220) SQLite 3.54 (Node 26.12) quarantines agent DBs whose FTS5 tables contain U+FFFE; no data-preserving repair path `bug` `no-stale` `regression` `P1` 💬2
- [#176248](https://github.com/openclaw/openclaw/issues/176248) Session retirement: ended node placement cannot be deleted while its node is disconnected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#176237](https://github.com/openclaw/openclaw/issues/176237) docs(macos): no firewall guidance when LAN access to Node services stops after a Homebrew Node upgrade `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#176236](https://github.com/openclaw/openclaw/issues/176236) docs(browser): no recovery steps for "Chromium profile lock names another hostname" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#176229](https://github.com/openclaw/openclaw/issues/176229) [Bug]: storage encryption "none" is redacted and breaks Control UI config saves `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#176243](https://github.com/openclaw/openclaw/issues/176243) memory-core: memory forget hits worker OOM for retained history, including a single session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#176187](https://github.com/openclaw/openclaw/issues/176187) memory-core: sparse vec0 allocation amplifies KNN reads and exceeds memory_search deadline (2026.10.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#176663](https://github.com/openclaw/openclaw/issues/176663) [Bug]: Multiline /dashboard drops every requirement line after the first `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176669](https://github.com/openclaw/openclaw/issues/176669) [Bug]: 2026.10.4 -> 2026.10.5 update leaves held system-agent DB at schema 24 and Gateway crash-looping `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#176661](https://github.com/openclaw/openclaw/issues/176661) [Bug]: Auto-detected whisper.cpp ignores the configured audio language and transcribes as English `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176671](https://github.com/openclaw/openclaw/issues/176671) [Feature]: Expose the resolved completionMode on the subagent_spawned hook payload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#176659](https://github.com/openclaw/openclaw/issues/176659) [Bug]: Claude session catalog silently omits valid sessions after 64 MiB metadata discovery budget `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176651](https://github.com/openclaw/openclaw/issues/176651) Update failure: managed-service-preflight (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#176652](https://github.com/openclaw/openclaw/issues/176652) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#176649](https://github.com/openclaw/openclaw/issues/176649) [Docs Bug]: llama.cpp plugin docs not up to date `bug` `docs` `no-stale` `P2` 💬1
- [#176629](https://github.com/openclaw/openclaw/issues/176629) [Bug]: claude-cli + Telegram: earlier images (incl. outbound MEDIA) re-attached as 'Image turn' on every later text-only message `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#176628](https://github.com/openclaw/openclaw/issues/176628) [Bug]: skill-collection-review monitor has no stub-awareness — generates failing weekly review crons for every cross-machine stub agent (no per-agent opt-out) `P2` `impact:ux-friction` 💬1
- [#176625](https://github.com/openclaw/openclaw/issues/176625) [Bug]: audit.execution-decision.record holds the state-DB write lock ~1.1 s per insert (O(table) overflow prune), causing 'database is locked' across Workboard/cron `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#176098](https://github.com/openclaw/openclaw/issues/176098) QA subagent handoff can pass after a refused spawn with no child `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176553](https://github.com/openclaw/openclaw/issues/176553) [Feature]: Supported SQLite snapshot-helper lifecycle supervision for bounded macOS memory diagnostics `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#176216](https://github.com/openclaw/openclaw/issues/176216) [Bug]: cancelling a queued subagent follow-up aborts the active run of the same session (2026.10.4) `P1` `clawsweeper:source-repro` `impact:session-state` `impact:message-loss` 💬1
- [#176250](https://github.com/openclaw/openclaw/issues/176250) auto-reply: multi-line /btw, /side, and /loop arguments are cut to their first line before reaching the model `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176208](https://github.com/openclaw/openclaw/issues/176208) [Bug]: cron wake with announce delivery resets the chat's claude-cli session (reason=message-policy) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176270](https://github.com/openclaw/openclaw/issues/176270) [Bug]: /btw block streaming leaks unhandled rejections and drops later blocks when one block send fails `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#176479](https://github.com/openclaw/openclaw/issues/176479) gateway install persists caller process-owned secret-egress-proxy NODE_EXTRA_CA_CERTS into the service unit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#176472](https://github.com/openclaw/openclaw/issues/176472) [Bug]: Windows task script parser drops empty quoted arguments that quoteCmdScriptArg writes `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#176443](https://github.com/openclaw/openclaw/issues/176443) Update failure: finalize-doctor (2026.9.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#176432](https://github.com/openclaw/openclaw/issues/176432) Docs feedback: /channels/telegram 💬1
- [#176179](https://github.com/openclaw/openclaw/issues/176179) Anthropic spend-cap error ("specified API usage limits ... regain access on <date>") uses the 10-attempt rate-limit budget instead of going straight to fallback `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176396](https://github.com/openclaw/openclaw/issues/176396) [Bug]: Anthropic prompt cache never advances inside a tool loop: runtime-context carrier is moved to the tail after each new tool result (2026.9.2) `P2` `impact:other` 💬1
- [#176391](https://github.com/openclaw/openclaw/issues/176391) [Bug]: Native plugin admission copies the full plugin package on every admission (~1.8 GiB/day) instead of the content-addressed store the schema already anticipates `P2` `impact:other` 💬1
- [#176386](https://github.com/openclaw/openclaw/issues/176386) Linux node exec cannot use auto-review: node commands arrive wrapped in /bin/sh -lc `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#176372](https://github.com/openclaw/openclaw/issues/176372) Desktop view on phone browser stays on "connecting to desktop" for macOS Screen Sharing (ARD); password prompt never completes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#176348](https://github.com/openclaw/openclaw/issues/176348) Feature: DM-scoped tool-policy hook for channel plugins (per-sender tool gating on direct-message sessions) `P3` `impact:security` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#176355](https://github.com/openclaw/openclaw/issues/176355) [Bug]: unconfigured reserved system-agent DB (openclaw) refuses startup preparation on EVERY restart with deferred preparation (extends #164799) `P1` `impact:session-state` 💬1
- [#176148](https://github.com/openclaw/openclaw/issues/176148) [Bug]: openclaw tui re-reads the session with sessions.describe and sessions.list after every message during a run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176336](https://github.com/openclaw/openclaw/issues/176336) OpenRouter generation providers ignore request.allowPrivateNetwork (hardcoded false) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#176330](https://github.com/openclaw/openclaw/issues/176330) ActiveTurnClaimError surfaces as 'couldn't finish this request' instead of queueing (followup mode) when a cron wake or second surface hits a busy DM session `P2` `impact:message-loss` `clawsweeper:bulk-filed` 💬1
- [#176325](https://github.com/openclaw/openclaw/issues/176325) [Bug]: Android embedded Dashboard mic denied while mobile browser works (Galaxy A56) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#176318](https://github.com/openclaw/openclaw/issues/176318) [Bug]: `openclaw config get` on agents, channels and plugins paths builds the full config schema it never reads (~200 ms per call) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176317](https://github.com/openclaw/openclaw/issues/176317) Claws v1: migrate/update refuse agents that inherit common agents.defaults (models runtime policy, thinkingDefault, userTimezone, compaction, modelPolicy) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:not-repro-on-main` 💬1
- [#176315](https://github.com/openclaw/openclaw/issues/176315) [Bug]: Windows node exec stays pending in Code Mode while discovery and native session catalog work `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#176316](https://github.com/openclaw/openclaw/issues/176316) [Feature]: Approve existing desktop Claude Code permission requests from mobile Chat/Talk via an official relay `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#176298](https://github.com/openclaw/openclaw/issues/176298) channels: before_route_inbound_message preflight hook is contract-defined downstream but has no runtime implementation — inbound preflight events never emit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#176290](https://github.com/openclaw/openclaw/issues/176290) Field report: missing-config LaunchAgent crash loop (v2026.3.7) ran undetected for 2 months — suggest respawn budget + capped stderr log `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#176292](https://github.com/openclaw/openclaw/issues/176292) [Feature]: Incognito sessions on channel bindings (Discord) with idle expiry `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#176288](https://github.com/openclaw/openclaw/issues/176288) Discord voice: realtime speaker connections aren't told which Discord user they are hearing `P2` `impact:session-state` 💬1
- [#176240](https://github.com/openclaw/openclaw/issues/176240) [Bug]: Doctor's managed local embedding setup check copies every agent database even when the agent's memory provider is not local `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176283](https://github.com/openclaw/openclaw/issues/176283) [Feature]: 傻逼操你妈。我他妈的都用你这逼玩意了。我还在意token泄露？ `enhancement` 💬1
- [#176221](https://github.com/openclaw/openclaw/issues/176221) [Bug]: macOS app window can't be dragged while the Control UI web view is busy (drag starts via JS postMessage) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#176127](https://github.com/openclaw/openclaw/issues/176127) [Feature]: move WhatsApp Settings presentation into its plugin `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#176278](https://github.com/openclaw/openclaw/issues/176278) docs: offer Simplified Chinese README translation (README.zh-CN.md) `P3` 💬1
- [#176272](https://github.com/openclaw/openclaw/issues/176272) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#176268](https://github.com/openclaw/openclaw/issues/176268) [Bug]: `openclaw gateway stop` and `uninstall` failures print no next step, unlike start/restart/repair `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176261](https://github.com/openclaw/openclaw/issues/176261) fix(cli): openclaw logs --local-time is a dead option and conflicts silently with --utc `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176259](https://github.com/openclaw/openclaw/issues/176259) Update failure: managed-service-update-handoff (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#176260](https://github.com/openclaw/openclaw/issues/176260) [Bug]: Enabling context-mode de laysgateway startup by~170s on ARM64/PROot `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#176257](https://github.com/openclaw/openclaw/issues/176257) Harness runtimes (Codex) inject only AGENTS.md; SOUL/IDENTITY/USER/MEMORY never reach the model 💬1
- [#176255](https://github.com/openclaw/openclaw/issues/176255) [Bug]: completed-turn "Worked for" rollup hides the tool-call count when collapsed while still showing the failed count `P3` `impact:ux-friction` 💬1
- [#176256](https://github.com/openclaw/openclaw/issues/176256) [Bug]: Windows: cleanup task briefly opens/minimizes a PowerShell window every minute `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#176251](https://github.com/openclaw/openclaw/issues/176251) [Feature]: Secret egress proxy: escape substituted secret values for the body's content type (XML/JSON/form) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#176246](https://github.com/openclaw/openclaw/issues/176246) cli: infer audio transcribe and video describe ignore --model provider/model when media models are configured `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#176238](https://github.com/openclaw/openclaw/issues/176238) irc: SecretRef on password or nickserv.password fails config validation, and service-only nickserv accounts never resolve the inherited ref `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176244](https://github.com/openclaw/openclaw/issues/176244) web_fetch: markdown extraction merges table cells and flattens pre code indentation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176242](https://github.com/openclaw/openclaw/issues/176242) nextcloud-talk: senders listed by bare user ID in allowFrom/groupAllowFrom are dropped because the sender is compared as users/<id> `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176239](https://github.com/openclaw/openclaw/issues/176239) signal: streaming.chunkMode newline is ignored for formatted outbound text (message send, final replies) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176235](https://github.com/openclaw/openclaw/issues/176235) [Bug]: backgrounded exec finishing during an isolated cron run injects a user turn and kills the run (SqliteTranscriptMutationConflictError) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176227](https://github.com/openclaw/openclaw/issues/176227) [Bug]: tools.toolsBySender changes the tool list and system prompt on every sender change, so the prompt cache misses in group chats `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176224](https://github.com/openclaw/openclaw/issues/176224) Matrix: new thread sessions inherit the room conversation; no thread.inheritParent like Discord/Slack `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176226](https://github.com/openclaw/openclaw/issues/176226) [Bug]: Prepared-message idempotency recheck removed — a concurrent same-key write is reported as committed and the prepared message is silently dropped `bug` `bug:behavior` `clawsweeper:bulk-filed` 💬1
- [#176225](https://github.com/openclaw/openclaw/issues/176225) [Bug]: Aggregate follow-up delivery consumes queue sources before admission, losing the message when admission fails `bug` `bug:behavior` `clawsweeper:bulk-filed` 💬1
- [#176188](https://github.com/openclaw/openclaw/issues/176188) [Bug]: Local sandbox screenshot previews are unavailable in project chats `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#176217](https://github.com/openclaw/openclaw/issues/176217) [Bug]: Native subagent restart recovery lacks original operator source for newly admitted CLI tasks `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#176214](https://github.com/openclaw/openclaw/issues/176214) [Feature]: Let an agent propose an argument-scoped allowlist rule that the owner approves once on the native card `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#176209](https://github.com/openclaw/openclaw/issues/176209) [Bug]: SIWC token_expired mid-run is not recovered for bound cron jobs although the profile was already refreshed (2026.10.10-beta.1) `P2` `impact:auth-provider` 💬1
- [#176066](https://github.com/openclaw/openclaw/issues/176066) [Bug]: Schema-rejected tool calls are reported to users as "blocked" (policy vocabulary for a non-policy failure) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176200](https://github.com/openclaw/openclaw/issues/176200) [Bug]: openclaw approvals --gateway --node <node> silently ignores --node and operates on gateway policy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#176126](https://github.com/openclaw/openclaw/issues/176126) fix: support public Actions job logs in github_read `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#176176](https://github.com/openclaw/openclaw/issues/176176) Control UI hides explicit command failure behind Exit code 0 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1

#### 🔒 Closed Issues
- [#136183](https://github.com/openclaw/openclaw/issues/136183) [Bug]: Command executor hangs when spawning ssh — SIGTERM while waiting for server banner (regression in 2026.8.1, persists in 2026.8.2)
- [#175027](https://github.com/openclaw/openclaw/issues/175027) [Bug]: Android realtime Talk reuses archived backing session and rejects GPT-Live agent consults
- [#129455](https://github.com/openclaw/openclaw/issues/129455) [Bug]: Requester-settle finalizes a sequential workflow before the next subagent is spawned
- [#115662](https://github.com/openclaw/openclaw/issues/115662) [Feature]: claws add cannot adopt an existing workspace directory
- [#137266](https://github.com/openclaw/openclaw/issues/137266) Gateway exits for deferred config-reload restart in Windows service mode and never comes back (silent 'death' after channels.* config edit)
- [#136155](https://github.com/openclaw/openclaw/issues/136155) Skill collection review: locked model selection strips fallbacks, leaving subscription-seat hosts with no reachable capability path
- [#173172](https://github.com/openclaw/openclaw/issues/173172) [Bug]: Control UI "Gateway busy, retrying…" page polls /healthz forever after a WebSocket drop but never re-attempts the WS handshake — only a manual reload recovers
- [#169077](https://github.com/openclaw/openclaw/issues/169077) [Bug]: sessions tool stop on a yielded parent with running subagents times out (sessions.abort, 10 s) and the children keep running (2026.9.9)
- [#136429](https://github.com/openclaw/openclaw/issues/136429) [Compatibility/Accessibility] Please support a forward path for Node 27 HEAD users
- [#176111](https://github.com/openclaw/openclaw/issues/176111) [Bug]: Windows Gateway startup fails with DataCloneError - schema-inspection worker IPC sends the win32 env Proxy through advanced serialization (b1e6a6b, 2026.10.4)
- [#162492](https://github.com/openclaw/openclaw/issues/162492) [Bug]: Docker-wrapped stdio MCP servers still orphan containers on 2026.9.5 (follow-up to #75323 / #65694 / #86412)
- [#128509](https://github.com/openclaw/openclaw/issues/128509) [Bug]: beta.3 durable context-engine commit mixes full-transcript positions with closed-turn messages
- [#126648](https://github.com/openclaw/openclaw/issues/126648) observability.db agent_usage shows "unknown" for isolated cron sessions — cron-side job tagging needed
- [#135035](https://github.com/openclaw/openclaw/issues/135035) [Bug]: session_status shows stale context limit (131k = maxTokens) instead of configured contextWindow (1.0m) until gateway restart
- [#171930](https://github.com/openclaw/openclaw/issues/171930) Docker image: doctor's SQLite NOCOW repair is always skipped because bookworm's GNU mv lacks --exchange
- [#176269](https://github.com/openclaw/openclaw/issues/176269) [Bug]: Run transport release turns a successful turn into a failure when lease disposal rejects or hangs
- [#176353](https://github.com/openclaw/openclaw/issues/176353) exec: "Allow Once" is refused with "Exec approval policy is unavailable or changing before execution" because approval-store bookkeeping publishes exec-policy pending denials
- [#176117](https://github.com/openclaw/openclaw/issues/176117) [Bug]: Suspended (expiry) subagent completion is stranded after its requester settle wake ends undelivered: wake cleared, no re-arm, discarded at 7 days
- [#175100](https://github.com/openclaw/openclaw/issues/175100) [Bug]: Linux Gateway startup refuses stale state locks when the old PID is reused as an unrelated worker TID
- [#169184](https://github.com/openclaw/openclaw/issues/169184) [Bug]: Chat-header Delete for adopted paired-node Codex sessions fails with model-selection lock (2026.10.1)
- [#176220](https://github.com/openclaw/openclaw/issues/176220) SQLite 3.54 (Node 26.12) quarantines agent DBs whose FTS5 tables contain U+FFFE; no data-preserving repair path
- [#175670](https://github.com/openclaw/openclaw/issues/175670) [Bug]: claude-cli reuse-with-drift keeps a stale MCP tool catalog after gateway restart — session silently loses exec, spawned children inherit the loss
- [#176628](https://github.com/openclaw/openclaw/issues/176628) [Bug]: skill-collection-review monitor has no stub-awareness — generates failing weekly review crons for every cross-machine stub agent (no per-agent opt-out)
- [#175599](https://github.com/openclaw/openclaw/issues/175599) [Bug]: system event --session-key is never read when heartbeat.isolatedSession is true
- [#176098](https://github.com/openclaw/openclaw/issues/176098) QA subagent handoff can pass after a refused spawn with no child
- [#176216](https://github.com/openclaw/openclaw/issues/176216) [Bug]: cancelling a queued subagent follow-up aborts the active run of the same session (2026.10.4)
- [#176250](https://github.com/openclaw/openclaw/issues/176250) auto-reply: multi-line /btw, /side, and /loop arguments are cut to their first line before reaching the model
- [#176208](https://github.com/openclaw/openclaw/issues/176208) [Bug]: cron wake with announce delivery resets the chat's claude-cli session (reason=message-policy)
- [#176270](https://github.com/openclaw/openclaw/issues/176270) [Bug]: /btw block streaming leaks unhandled rejections and drops later blocks when one block send fails
- [#174155](https://github.com/openclaw/openclaw/issues/174155) [Bug]: sessions.patch stores an unsupported thinkingLevel for a reasoning: false model when its run route switches
- [#176432](https://github.com/openclaw/openclaw/issues/176432) Docs feedback: /channels/telegram
- [#174524](https://github.com/openclaw/openclaw/issues/174524) [Bug]: openclaw attach crashes with RangeError when attach.grant returns an out-of-range expiresAtMs
- [#176179](https://github.com/openclaw/openclaw/issues/176179) Anthropic spend-cap error ("specified API usage limits ... regain access on <date>") uses the 10-attempt rate-limit budget instead of going straight to fallback
- [#176396](https://github.com/openclaw/openclaw/issues/176396) [Bug]: Anthropic prompt cache never advances inside a tool loop: runtime-context carrier is moved to the tail after each new tool result (2026.9.2)
- [#176391](https://github.com/openclaw/openclaw/issues/176391) [Bug]: Native plugin admission copies the full plugin package on every admission (~1.8 GiB/day) instead of the content-addressed store the schema already anticipates
- [#174841](https://github.com/openclaw/openclaw/issues/174841) [Bug]: Telegram reply to an image sent as a document gives the agent a `document` attachment with no MIME type, not an image
- [#174680](https://github.com/openclaw/openclaw/issues/174680) triage diagnostics leaks phone-number map keys in config/sanitized.json
- [#174899](https://github.com/openclaw/openclaw/issues/174899) [Bug]: Workboard late worker completion overwrites an explicitly requeued blocked card
- [#176355](https://github.com/openclaw/openclaw/issues/176355) [Bug]: unconfigured reserved system-agent DB (openclaw) refuses startup preparation on EVERY restart with deferred preparation (extends #164799)
- [#176148](https://github.com/openclaw/openclaw/issues/176148) [Bug]: openclaw tui re-reads the session with sessions.describe and sessions.list after every message during a run
- [#176330](https://github.com/openclaw/openclaw/issues/176330) ActiveTurnClaimError surfaces as 'couldn't finish this request' instead of queueing (followup mode) when a cron wake or second surface hits a busy DM session
- [#169335](https://github.com/openclaw/openclaw/issues/169335) [Bug]: Documented completed-receipt recovery cannot run on released builds (helper identity check lacks the completed-receipt exception)
- [#176288](https://github.com/openclaw/openclaw/issues/176288) Discord voice: realtime speaker connections aren't told which Discord user they are hearing
- [#176240](https://github.com/openclaw/openclaw/issues/176240) [Bug]: Doctor's managed local embedding setup check copies every agent database even when the agent's memory provider is not local
- [#176283](https://github.com/openclaw/openclaw/issues/176283) [Feature]: 傻逼操你妈。我他妈的都用你这逼玩意了。我还在意token泄露？
- [#176221](https://github.com/openclaw/openclaw/issues/176221) [Bug]: macOS app window can't be dragged while the Control UI web view is busy (drag starts via JS postMessage)
- [#176127](https://github.com/openclaw/openclaw/issues/176127) [Feature]: move WhatsApp Settings presentation into its plugin
- [#176278](https://github.com/openclaw/openclaw/issues/176278) docs: offer Simplified Chinese README translation (README.zh-CN.md)
- [#175372](https://github.com/openclaw/openclaw/issues/175372) [Bug]: `/codex detach` (and re-running `/codex bind`) fails with "Telegram runtime not initialized" while `/session unbind` succeeds
- [#167934](https://github.com/openclaw/openclaw/issues/167934) [Bug]: SQLite backup listing misreads a Git repository as a snapshot repository
- [#176272](https://github.com/openclaw/openclaw/issues/176272) Update failure: plugin-target-unavailable (2026.9.4)
- [#176259](https://github.com/openclaw/openclaw/issues/176259) Update failure: managed-service-update-handoff (2026.9.9)
- [#176257](https://github.com/openclaw/openclaw/issues/176257) Harness runtimes (Codex) inject only AGENTS.md; SOUL/IDENTITY/USER/MEMORY never reach the model
- [#176255](https://github.com/openclaw/openclaw/issues/176255) [Bug]: completed-turn "Worked for" rollup hides the tool-call count when collapsed while still showing the failed count
- [#176256](https://github.com/openclaw/openclaw/issues/176256) [Bug]: Windows: cleanup task briefly opens/minimizes a PowerShell window every minute
- [#176226](https://github.com/openclaw/openclaw/issues/176226) [Bug]: Prepared-message idempotency recheck removed — a concurrent same-key write is reported as committed and the prepared message is silently dropped
- [#176225](https://github.com/openclaw/openclaw/issues/176225) [Bug]: Aggregate follow-up delivery consumes queue sources before admission, losing the message when admission fails
- [#176188](https://github.com/openclaw/openclaw/issues/176188) [Bug]: Local sandbox screenshot previews are unavailable in project chats
- [#164973](https://github.com/openclaw/openclaw/issues/164973) [Feature]: Control UI settings lack clear global vs. per-agent scope labeling
- [#176209](https://github.com/openclaw/openclaw/issues/176209) [Bug]: SIWC token_expired mid-run is not recovered for bound cron jobs although the profile was already refreshed (2026.10.10-beta.1)
- [#176066](https://github.com/openclaw/openclaw/issues/176066) [Bug]: Schema-rejected tool calls are reported to users as "blocked" (policy vocabulary for a non-policy failure)
- [#176126](https://github.com/openclaw/openclaw/issues/176126) fix: support public Actions job logs in github_read
- [#176176](https://github.com/openclaw/openclaw/issues/176176) Control UI hides explicit command failure behind Exit code 0

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 254,953 · **Open issues:** 49,963 · **Last push:** <1h ago

There were no new releases or merged pull requests for Hermes Agent in the last 24 hours, but several significant issues were reported. A key bug was raised regarding the Linux uninstall process, which fails to remove an existing dashboard systemd unit, leading to retries of a removed executable. Another notable issue involves the CLI voice mode, where TTS fails to respond with outputs from external process providers, and there is user concern over the utterances of loud static during interruptions in the Linux Voice TTS feature. Additionally, an issue highlighting incorrect warnings for environment variable configurations during import was reported, indicating a problem with how config.yaml is processed. These developments suggest ongoing challenges in ensuring smooth functionality across various user environments and setups.

#### 🐛 New Issues
- [#140890](https://github.com/NousResearch/hermes-agent/issues/140890) Repeat Ctrl+C during interactive shutdown raises KeyboardInterrupt and aborts session finalize `type/bug` `comp/cli` `P2` 💬4
- [#141320](https://github.com/NousResearch/hermes-agent/issues/141320) Voice (Linux): interrupting TTS plays seconds of loud static; barge-in thresholds not configurable 💬2
- [#141313](https://github.com/NousResearch/hermes-agent/issues/141313) CLI voice mode: TTS never speaks replies from external-process providers (e.g. claude-subscription-directsdk) `type/bug` `comp/cli` `tool/file` `tool/tts` 💬2
- [#141305](https://github.com/NousResearch/hermes-agent/issues/141305) [Bug]: Linux uninstall leaves existing dashboard systemd unit retrying a removed executable `type/bug` `comp/cli` `P2` `area/install-update` 💬2
- [#141265](https://github.com/NousResearch/hermes-agent/issues/141265) [Bug]: every ${env:VAR} config ref logs a false "is not set" warning — config.yaml is expanded at import time, before load_hermes_dotenv() `type/bug` `comp/cli` `area/config` `P2` 💬2
- [#140977](https://github.com/NousResearch/hermes-agent/issues/140977) [Bug] Canonical `profiles.list` never populates `worker_session` — roster consumers lost worker-activity after the unified-gateway-runtime move `type/bug` `comp/gateway` `P2` `area/sessions` 💬2
- [#141318](https://github.com/NousResearch/hermes-agent/issues/141318) Delegated subagents run background skill review (child AIAgent lacks skip_background_review) 💬1
- [#140964](https://github.com/NousResearch/hermes-agent/issues/140964) [Feature] cron: let a no_agent script report "ran OK, findings exist" without being marked failed `type/feature` `comp/cron` `P3` 💬1
- [#141300](https://github.com/NousResearch/hermes-agent/issues/141300) Duplicate of #96801 `type/bug` `comp/gateway` `comp/plugins` `platform/feishu` 💬1
- [#141321](https://github.com/NousResearch/hermes-agent/issues/141321) Gateway fixes (#134889), package 12: Ink and Desktop commands, estimates, decided gateway behaviour, ACP edit modes, custom providers, Telegram topics and remote Desktop `type/bug` `comp/cli` `comp/gateway` `comp/tui`
- [#141314](https://github.com/NousResearch/hermes-agent/issues/141314) Python 3.14 compatibility: Kanban dependency blocks web-perplexity enablement `type/bug` `comp/plugins` `P3` `area/install-update`
- [#141315](https://github.com/NousResearch/hermes-agent/issues/141315) delegation: ratio trigger override for delegation children (compression_threshold_ratio) `type/feature` `comp/tools` `tool/file` `tool/delegate`
- [#141301](https://github.com/NousResearch/hermes-agent/issues/141301) hermes update reports "Could not resolve the stable source channel" on machines whose git config is load-bearing (proxy / custom SSL backend) `type/bug` `comp/cli` `P3` `area/install-update`

#### 🔒 Closed Issues
- [#140719](https://github.com/NousResearch/hermes-agent/issues/140719) Gateway fixes (#134889), package 10: the gateway process, clients that fall behind, credentials and settings, Desktop session lists and history, and messaging order
- [#124102](https://github.com/NousResearch/hermes-agent/issues/124102) Proactive tool-result prune silently rewrites the whole transcript: every commit re-inserts every message (incl. user turns) as a new generation, blowing up state.db
- [#58274](https://github.com/NousResearch/hermes-agent/issues/58274) [Feature]: Full Profile Parity — Dashboard, Sessions, Cron, and Path Isolation
- [#140580](https://github.com/NousResearch/hermes-agent/issues/140580) [Bug]: macOS — managed worker reservation rejects every worker (permission_denied) after a clock correction: verify_worker_identity compares psutil create_time by exact equality
- [#140270](https://github.com/NousResearch/hermes-agent/issues/140270) Deleting a conversation started with --api-key breaks its branches (launch_credentials_unavailable)
- [#140499](https://github.com/NousResearch/hermes-agent/issues/140499) [Bug]: user dashboard plugins' _require_token endpoints always 401 under a secondary profile's plugin host (PLG-3 regression)
- [#140446](https://github.com/NousResearch/hermes-agent/issues/140446) Bot Chat: a reasoning change is acknowledged, then the next turn runs the profile's level
- [#140635](https://github.com/NousResearch/hermes-agent/issues/140635) [Bug]: a canonical rewind aimed at a row compaction archived empties the live transcript
- [#140642](https://github.com/NousResearch/hermes-agent/issues/140642) Desktop session marked ended by `ws_orphan_reap` mid-turn → #54878 recovery hits `admission_conflict` → route repointed to empty session → resume permanently fails
- [#140449](https://github.com/NousResearch/hermes-agent/issues/140449) Resuming a compressed conversation shows only the summary and the last exchange
- [#140417](https://github.com/NousResearch/hermes-agent/issues/140417) [Bug]: Desktop Bots tab shows only the default profile after hermes update (bot-roster answered=-)
- [#140385](https://github.com/NousResearch/hermes-agent/issues/140385) [Bug] Desktop on a gateway-owned Bot Chat: own turns refused SESSION_NOT_OWNED during a gateway turn; process notices retried in a no-backoff hot loop
- [#140398](https://github.com/NousResearch/hermes-agent/issues/140398) On a local session, /voice tts turns on speech nothing can play
- [#140412](https://github.com/NousResearch/hermes-agent/issues/140412) Classic CLI `/model --once` rewrites the shared session model, then writes it back
- [#140667](https://github.com/NousResearch/hermes-agent/issues/140667) [Bug]: Desktop: session.control.read times out at 30s - one slow read-only handler (session.context_breakdown) starves every queued RPC on the same WS
- [#140418](https://github.com/NousResearch/hermes-agent/issues/140418) [Bug]: runtime downgrade stop exits 0, but the shipped launchd plist parks exit 0 — a confirmed downgrade leaves the gateway down until someone notices
- [#140665](https://github.com/NousResearch/hermes-agent/issues/140665) Docker backend: one-shot hermes chat gets no workspace mount under per-session containers, so concurrent runs need one profile each
- [#141300](https://github.com/NousResearch/hermes-agent/issues/141300) Duplicate of #96801
- [#140073](https://github.com/NousResearch/hermes-agent/issues/140073) Desktop: concurrent embedded OAuth recovery opens competing same-gateway windows
- [#134481](https://github.com/NousResearch/hermes-agent/issues/134481) [Bug]: Desktop stacks one "Sign in to Hermes gateway" window per failed request after a gateway restart (no single-flight on silent re-login)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 94,078 · **Open issues:** 9,054 · **Last push:** <1h ago

The vLLM project released version v0.32.0, featuring 814 commits from 363 contributors, including a new `POST /v1/systemone` endpoint for answering structured decision questions, which is now served by default and integrates with several models like `Cloudflare/clef-omni` and `LiquidAI/d1-3B`. Significant merged contributions included bug fixes for various components, such as correcting Triton MLA decode issues and enhancing DeepEP's throughput across streams. Additionally, improvements were made to the Rust frontend to utilize xgrammar for structured outputs and to streamline inference documentation. Notably, a new RFC was introduced regarding a Single-Process In-Memory Engine Mode for low-tier sandbox environments, highlighting ongoing discussions around feature enhancements.

#### 🚀 New Releases
- [v0.32.0](https://github.com/vllm-project/vllm/releases/tag/v0.32.0) v0.32.0

#### ✅ Merged PRs
- [#61938](https://github.com/vllm-project/vllm/pull/61938) [Bugfix][Attention] Fix Triton MLA decode int32 overflow and logits workspace accounting
- [#62286](https://github.com/vllm-project/vllm/pull/62286) [ROCm][CI] Contain the MI355 DP + EP exit-time abort
- [#62280](https://github.com/vllm-project/vllm/pull/62280) [ROCm][CI] Pin Inductor pointwise configs in the MoRIIO dummy-weight P/D test
- [#62228](https://github.com/vllm-project/vllm/pull/62228) [Core] Remove the obsolete VLLM_USE_RAY_V2_EXECUTOR_BACKEND env var
- [#61002](https://github.com/vllm-project/vllm/pull/61002) [Bugfix][KV Connector] Pair non-divisible hybrid MLA block sizes in NixlConnector
- [#56549](https://github.com/vllm-project/vllm/pull/56549) [Build] Keep plain CUDA arch when its suffixed variant is also requested
- [#60735](https://github.com/vllm-project/vllm/pull/60735) [Bugfix][MoE] Keep DeepEP high-throughput buffers alive across DBO streams
- [#61892](https://github.com/vllm-project/vllm/pull/61892) [Bugfix][Rust Frontend] Use xgrammar for gRPC structured outputs
- [#62274](https://github.com/vllm-project/vllm/pull/62274) [Bugfix][ROCm] Only set inductor batch_invariant when torch has it
- [#52477](https://github.com/vllm-project/vllm/pull/52477) [Bugfix][Spec Decode][Structured Output] Drive grammar masks from GPU logit counts
- [#62072](https://github.com/vllm-project/vllm/pull/62072) [Bugfix][Frontend] Stop beam search on generation config EOS tokens
- [#62305](https://github.com/vllm-project/vllm/pull/62305) [Doc] Document /inference/v1/generate request/response fields and DP rank header
- [#61819](https://github.com/vllm-project/vllm/pull/61819) [ROCm][DSv4] Overlap the unfused shared expert with AITER MegaMoE
- [#60877](https://github.com/vllm-project/vllm/pull/60877) [Frontend] Score with the chat template declared by Sentence Transformers CrossEncoders
- [#62302](https://github.com/vllm-project/vllm/pull/62302) [Doc][RL] Document routed experts return for MoE routing replay (R3)
- [#61829](https://github.com/vllm-project/vllm/pull/61829) [CI/Build] Build DeepEP for SM103 (B300/GB300) in the Docker image
- [#61759](https://github.com/vllm-project/vllm/pull/61759) [Bugfix] Fix Opencv video backend frames count missing for WebM video inputs
- [#61454](https://github.com/vllm-project/vllm/pull/61454) [Qwen4Exp] Clean up HC and PLE implementations for Qwen3.8-Flash-Next
- [#62279](https://github.com/vllm-project/vllm/pull/62279) [CI] Per-test timeout for Language Models (Extended Pooling)
- [#62129](https://github.com/vllm-project/vllm/pull/62129) [Bugfix][MRV2] Fix speculative warmup deadlock with pipeline parallelism
- [#62267](https://github.com/vllm-project/vllm/pull/62267) [Doc][RL] Document the weight-transfer HTTP protocol for trainers without vLLM
- [#62245](https://github.com/vllm-project/vllm/pull/62245) [Doc][Recipe] Fix for redhat fp8 xeon support issue
- [#62221](https://github.com/vllm-project/vllm/pull/62221) [CI][Release] Fix release wheel builds: stop excluding tracked recipes/ from Docker context
- [#60896](https://github.com/vllm-project/vllm/pull/60896) [Bugfix][Build] Build fused GDN MTP decode for SM80-SM90 with CUDA < 13
- [#62161](https://github.com/vllm-project/vllm/pull/62161) [ROCm][CI] Give the MoE parallel-launch watchdog room for AITER JIT builds
- [#58761](https://github.com/vllm-project/vllm/pull/58761) [ROCm][CI] Make ROCm 10.0 the default image; keep ROCm 7.2 as -rocm72
- [#62213](https://github.com/vllm-project/vllm/pull/62213) [CI][ROCm] Fix order-dependent test_rocm_aiter_sampler_defers_import (CPU tensors hit Triton)

#### 🐛 New Issues
- [#62257](https://github.com/vllm-project/vllm/issues/62257) [RFC]: Add Single-Process In-Memory Engine Mode for Low-Tier Sandbox Environments (Colab T4 / Jupyter) `RFC` 💬2
- [#62356](https://github.com/vllm-project/vllm/issues/62356) [Bug]: Qwen3-Omni/ASR audio encoder skips quant_config, host-syncs chunk metadata, and replicates the tower when heads are not divisible by TP `rocm` `quantization` 💬1
- [#62243](https://github.com/vllm-project/vllm/issues/62243) [RFC]: Module layout for the Mooncake P2P KV connector 💬1
- [#62339](https://github.com/vllm-project/vllm/issues/62339) [Feature][ROCm] Fuse MLA attention with AITER static FP8 output quant `rocm` 💬1
- [#62321](https://github.com/vllm-project/vllm/issues/62321) [Bug][Rust Frontend] `/tokenize` returns 500 for invalid requests that the generation endpoints reject with 400 `rust` 💬1
- [#62285](https://github.com/vllm-project/vllm/issues/62285) [Bug]: Draft model construction resets data_parallel_index to 0 (load_draft_model / create_draft_parallel_config) — residual site not covered by #62062 `speculative-decoding` 💬1
- [#62260](https://github.com/vllm-project/vllm/issues/62260) [Bug]: Glm5NextVideoBackend raises ZeroDivisionError on videos with unknown source fps 💬1
- [#62252](https://github.com/vllm-project/vllm/issues/62252) [Bug]: Tool-call argument coercion turns string values such as "0017" into integers for ["string", "integer"] parameters `bug` `tool-calling` 💬1
- [#62355](https://github.com/vllm-project/vllm/issues/62355) [Performance]: Whisper log-mel runs on the renderer thread instead of the GPU worker
- [#62352](https://github.com/vllm-project/vllm/issues/62352) [Performance]: Batch Whisper's conv stem and CUDA-graph only the fixed full-chunk mel `kimi`
- [#62351](https://github.com/vllm-project/vllm/issues/62351) [Bug]: FunASR merges 80 adaptor frames where the prompt length is 10; Cohere, FireRed, and Granite still build full conformer scores
- [#62350](https://github.com/vllm-project/vllm/issues/62350) [Performance]: Qwen2-Audio and AudioFlamingo3 materialize a dense [B, 1, S, S] key-padding mask `quantization`
- [#62349](https://github.com/vllm-project/vllm/issues/62349) [Bug]: Ultravox syncs chunk lengths to the host, and the 3000-mel LoRA pad changes odd-length clips
- [#62347](https://github.com/vllm-project/vllm/issues/62347) [Bug]: Qwen3-ASR realtime flush emits the tail as a fresh ChatML prompt with no left audio
- [#62340](https://github.com/vllm-project/vllm/issues/62340) [Bug]: LoRA + Gemma4 MTP speculative decoding crashes at startup — draft pre_projection shape mismatch `speculative-decoding`
- [#62336](https://github.com/vllm-project/vllm/issues/62336) [Performance]:Skip gaps in sliding-window prefix-cache hit search `performance`
- [#62322](https://github.com/vllm-project/vllm/issues/62322) [Bug]: [CI] wheels released for CPU cannot be installed with `uv pip install` `bug`
- [#62320](https://github.com/vllm-project/vllm/issues/62320) [Bug]: --attention-backend b12x cannot serve hybrid attention/mamba models on v0.32.0 — hybrid page alignment inflates the block size to 2176, B12X only supports (64, 128) `quantization`
- [#62308](https://github.com/vllm-project/vllm/issues/62308) [Bug]: Qwen3.8-Flash-Next checkpoints with quantized q/k/v and an unquantized QSA indexer fail to load since #59533 (v0.32.0) `bug` `quantization`
- [#62307](https://github.com/vllm-project/vllm/issues/62307) [Bug]: kv_transfer_params.prompt_token_ids replaces the rendered chat prompt on servers with no KV connector
- [#62304](https://github.com/vllm-project/vllm/issues/62304) [Bug]: Hybrid GDN models (Qwen3.5) with n-gram speculative decoding: greedy outputs go wrong when drafts are partly accepted; the GDN state misses the last accepted token's update `speculative-decoding`
- [#62283](https://github.com/vllm-project/vllm/issues/62283) [Feature][KV Offload]: Require canonical_layout when a secondary tier shares KV across TP sizes (direct layout silently corrupts)
- [#62277](https://github.com/vllm-project/vllm/issues/62277) [Bug]: Cold-cache KV cache OOM with `--kv-cache-memory-bytes` and `--enable-sleep-mode` `bug`
- [#62264](https://github.com/vllm-project/vllm/issues/62264) [Bug]: --attention-backend b12x fails at startup without --block-size (impl checks block size before the platform applies the preferred one)
- [#62247](https://github.com/vllm-project/vllm/issues/62247) [Feature] Support box and ground decision primitives with GUI-Actor pointer-head models

#### 🔒 Closed Issues
- [#48809](https://github.com/vllm-project/vllm/issues/48809) [Bug]: The Deepseek v4 model compiles kenrel during the inference process
- [#60518](https://github.com/vllm-project/vllm/issues/60518) [Bug]: WebM/MKV written to a pipe and raw H.264 load as a single frame with a negative `total_num_frames` (OpenCV loader)
- [#60409](https://github.com/vllm-project/vllm/issues/60409) [Feature]: Load the score template declared by the checkpoint (follow-up to #31563)
- [#56548](https://github.com/vllm-project/vllm/issues/56548) [Bug]: cuda_archs_loose_intersection drops plain "10.0" when TORCH_CUDA_ARCH_LIST also has "10.0a", producing sm_100a-only kernels that fail on B300 (CC 10.3)
- [#62285](https://github.com/vllm-project/vllm/issues/62285) [Bug]: Draft model construction resets data_parallel_index to 0 (load_draft_model / create_draft_parallel_config) — residual site not covered by #62062
- [#62260](https://github.com/vllm-project/vllm/issues/62260) [Bug]: Glm5NextVideoBackend raises ZeroDivisionError on videos with unknown source fps
- [#62143](https://github.com/vllm-project/vllm/issues/62143) [Bug]: Model Runner V2 hangs during speculative decoding warmup with pipeline parallelism

### SGLang (`sgl-project/sglang`)

**Stars:** 37,285 · **Open issues:** 5,905 · **Last push:** <1h ago

There were no new releases for SGLang today, but a substantial number of merged pull requests focused on refactoring and performance improvements, particularly in the scheduler and memory management areas. Key changes included a fix to the prefill budget in the scheduler with PR #45047 and optimizations in various components like DeepSeek-V4 and attention mechanisms that aim to enhance efficiency and resource management. The day's most critical new issue reported is #45006, which highlights a control-plane authorization bypass due to an API key being accepted on mesh HA management routes, raising security concerns. Overall, it was a day of ongoing enhancements and maintenance in the repository.

#### ✅ Merged PRs
- [#45047](https://github.com/sgl-project/sglang/pull/45047) [Refactor] scheduler: Bill encoder replay rows in `_update_prefill_budget`
- [#45042](https://github.com/sgl-project/sglang/pull/45042) [Fix] scheduler: Clear stale `encoder_swa_reset` in `convert_decode_to_extend`
- [#45043](https://github.com/sgl-project/sglang/pull/45043) [Fix] spec: Remove `--speculative-skip-dp-mlp-sync`
- [#45046](https://github.com/sgl-project/sglang/pull/45046) DeepSeek-V4: skip the MHC prewarm when params are meta
- [#45041](https://github.com/sgl-project/sglang/pull/45041) [Fix] scheduler: Drop prefill embedding overrides in `prepare_for_decode`
- [#45040](https://github.com/sgl-project/sglang/pull/45040) [Fix] deepseek-v4.1: Leave room for encoder replay rows when sizing a prefill chunk
- [#44089](https://github.com/sgl-project/sglang/pull/44089) [Fix] [AMD] kda: Reject match_cutedsl_decode on ROCm and skip its parity tests
- [#45037](https://github.com/sgl-project/sglang/pull/45037) [Fix] deepseek-v4.1: Start the PD decode draft SWA window at the prefill draft valid-from
- [#45038](https://github.com/sgl-project/sglang/pull/45038) [Fix] engram: Clamp multimodal pad ids in host-built history rows
- [#45035](https://github.com/sgl-project/sglang/pull/45035) [Perf] deepseek-v4.1: Default decoder SWA bounded replay on for both PD roles on CUDA
- [#40917](https://github.com/sgl-project/sglang/pull/40917) [Refactor] memory-pool: Build KV host pools from buffer info
- [#44968](https://github.com/sgl-project/sglang/pull/44968) [Refactor] hicache: Route Mamba host transfers from pool info
- [#45004](https://github.com/sgl-project/sglang/pull/45004) [CI] radix-cache: Register the Inkling cache linker KL test to extra-b
- [#44601](https://github.com/sgl-project/sglang/pull/44601) [Perf] [AMD] monokernels: Let a plugin skip per-step attention metadata
- [#44973](https://github.com/sgl-project/sglang/pull/44973) [Perf] attention: Capture translated FA4 verify metadata for DSPARK
- [#43326](https://github.com/sgl-project/sglang/pull/43326) [Feat] unified-memory: Fuse drafts with sliding-window and recurrent-state layers
- [#43325](https://github.com/sgl-project/sglang/pull/43325) [Feat] unified-memory: Support asymmetric KV rows
- [#43171](https://github.com/sgl-project/sglang/pull/43171) [Perf] gdn: Select FlashInfer prefill for page-major pools
- [#43170](https://github.com/sgl-project/sglang/pull/43170) [Perf] unified-memory: Free SWA segments without a host sync
- [#43168](https://github.com/sgl-project/sglang/pull/43168) [Fix] swa: Retain a whole window behind insertion pages
- [#44972](https://github.com/sgl-project/sglang/pull/44972) [Perf] speculative: Fuse draft write-window gathering and KV translation
- [#44971](https://github.com/sgl-project/sglang/pull/44971) [Perf] mamba: Fuse strided state updates and replay index translation
- [#44970](https://github.com/sgl-project/sglang/pull/44970) [Perf] unified-memory: Reduce allocation and SWA retirement overhead
- [#44969](https://github.com/sgl-project/sglang/pull/44969) [Refactor] attention: Separate decode metadata from pool ownership
- [#44305](https://github.com/sgl-project/sglang/pull/44305) [Fix] sgl-router: Receive kv-indexer-bridge event batches outside tokio's coop budget
- [#44196](https://github.com/sgl-project/sglang/pull/44196) [Perf] diffusion: fused gate/up + SwiGLU MLP on comfy_kitchen INT8 for Qwen-Image 2.1
- [#44761](https://github.com/sgl-project/sglang/pull/44761) [Perf] [NVIDIA] diffusion/FLUX.3: Run dynamic LoRA through PrimsTS GEMMs
- [#44180](https://github.com/sgl-project/sglang/pull/44180) [Perf] MiniMax-H3: fused indexed modulation for FP32 AdaLN tables
- [#44892](https://github.com/sgl-project/sglang/pull/44892) [Fix] [H200] ci: Split GLM-5.3-Flash serving recipes into separate tests
- [#44938](https://github.com/sgl-project/sglang/pull/44938) [CI] radix-cache: Re-enable Inkling unified cache linker KL test
- [#44075](https://github.com/sgl-project/sglang/pull/44075) [Fix] sgl-router: Resend on a closed pooled connection; add --disable-circuit-breaker
- [#43043](https://github.com/sgl-project/sglang/pull/43043) [Fix] VLM: harden Kimi image cache identity across preprocessing and radix hashing
- [#43871](https://github.com/sgl-project/sglang/pull/43871) [Fix] glm4v: Clamp request video budgets to the deployment limit
- [#43559](https://github.com/sgl-project/sglang/pull/43559) [Fix] mamba: Release consumed lazy Mamba prefix locks before donation retry
- [#41907](https://github.com/sgl-project/sglang/pull/41907) [Fix] hicache: Key MLA Mamba state per TP rank in the file backend
- [#43816](https://github.com/sgl-project/sglang/pull/43816) [Fix] hicache: Key MLA Mamba state per TP rank in the SeaweedFS backend
- [#43333](https://github.com/sgl-project/sglang/pull/43333) [Fix] hicache: Keep unified memory off the direct page_first_direct copies
- [#44740](https://github.com/sgl-project/sglang/pull/44740) [Perf] NIXL: prepared dlists for hybrid-model state transfer
- [#44716](https://github.com/sgl-project/sglang/pull/44716) [Fix] Inkling: frame constrained output in native message tokens
- [#43760](https://github.com/sgl-project/sglang/pull/43760) [Fix] disaggregation: Reuse startup decode graphs across PD role switches
- [#44666](https://github.com/sgl-project/sglang/pull/44666) [Feat] srt: Add muse spark runtime, multimodal support and tests (3/5)
- [#44950](https://github.com/sgl-project/sglang/pull/44950) [Refactor] sgl-router: Rename --max-in-flight to --max-inflight-requests
- [#44963](https://github.com/sgl-project/sglang/pull/44963) [Perf] DSv4.1: Bound encoder BCG metadata memory
- [#44606](https://github.com/sgl-project/sglang/pull/44606) [Perf] diffusion: Defer full GC collections while importing the runtime
- [#44412](https://github.com/sgl-project/sglang/pull/44412) [Fix] [AMD] mori: Look up elided DSA state entries by the paired dst index
- [#44409](https://github.com/sgl-project/sglang/pull/44409) [CI] [AMD] ci/slurm: Add a Mooncake KV-transfer test to the MI355X disaggregation nightly
- [#44404](https://github.com/sgl-project/sglang/pull/44404) [Fix] [AMD] mooncake: Bump Mooncake to v0.3.14-rc1 for cross-node KV transfer
- [#43952](https://github.com/sgl-project/sglang/pull/43952) [Fix] [AMD] diffusion: Prevent ComponentResidencyError after compile warmup
- [#39264](https://github.com/sgl-project/sglang/pull/39264) [Perf] weight-sync: Allocate packed receive buffers from metadata
- [#44952](https://github.com/sgl-project/sglang/pull/44952) [Feat] deepseek-v4.1: Run encoder SWA bounded replay on PD prefill workers
- [#43991](https://github.com/sgl-project/sglang/pull/43991) [Fix] [AMD] kda: Match the fused verify Q/K norm to its reference kernel
- [#43967](https://github.com/sgl-project/sglang/pull/43967) [Feat] bench: report goodput and SLO attainment in bench_serving
- [#43592](https://github.com/sgl-project/sglang/pull/43592) [Doc] sgl-router: Rewrite README and add architecture guide
- [#44903](https://github.com/sgl-project/sglang/pull/44903) [Doc] [AMD] dsv41: Update amd cookbook 1016
- [#44951](https://github.com/sgl-project/sglang/pull/44951) [Fix] sgl-router: Fill the media fields when converting TextGenerate to Generate
- [#44948](https://github.com/sgl-project/sglang/pull/44948) [Fix] deepseek-v4.1: Exchange late-layer DP row counts before the forward
- [#44947](https://github.com/sgl-project/sglang/pull/44947) Revert "[Doc] cookbook: Add Muse Spark Open SWA ratio calculator"
- [#44946](https://github.com/sgl-project/sglang/pull/44946) [CI] deepseek-v4: Set the KV pool in the BCG replay contract test
- [#44478](https://github.com/sgl-project/sglang/pull/44478) [Perf] diffusion: Classify residual_gate_add operands once per call
- [#44930](https://github.com/sgl-project/sglang/pull/44930) [Perf] deepseek-v4.1: Run encoder SWA bounded replay in the breakable prefill graph
- [#44119](https://github.com/sgl-project/sglang/pull/44119) [Perf] DFLASH: build the draft num_token_non_padded scalar with torch.full
- [#42833](https://github.com/sgl-project/sglang/pull/42833) [Feat] runtime: Support tokenized multimodal generation
- [#40941](https://github.com/sgl-project/sglang/pull/40941) [Fix] dLLM: Size decode graphs to the default max running requests
- [#39475](https://github.com/sgl-project/sglang/pull/39475) [Feat] diffusion/model: support Cosmos Dreams and Cosmos Multiview (#39475)
- [#44937](https://github.com/sgl-project/sglang/pull/44937) [Doc] cookbook: Add DeepSeek V4.1 Flash 1017 variant
- [#44693](https://github.com/sgl-project/sglang/pull/44693) [Doc] popular-models: Replace Kimi-K3 with Muse Spark Open
- [#44158](https://github.com/sgl-project/sglang/pull/44158) [Perf] custom_op: Call register_custom_op ops directly in plain eager execution
- [#34385](https://github.com/sgl-project/sglang/pull/34385) [Feat] diffusion: selectable sequence-parallel strategies for LingBot causal attention
- [#44471](https://github.com/sgl-project/sglang/pull/44471) [Perf] diffusion: Replay Triton launches without the runner's per-launch hook metadata
- [#44643](https://github.com/sgl-project/sglang/pull/44643) [Perf] diffusion: Cache the fused linear-GELU verdict per linear
- [#44642](https://github.com/sgl-project/sglang/pull/44642) [Perf] distributed: Cache the eager launch of custom all-reduce v2 per size

#### 🐛 New Issues
- [#45006](https://github.com/sgl-project/sglang/issues/45006) [Bug] Data-plane API key accepted on mesh HA management routes in sgl-model-gateway (control-plane authorization bypass) 💬2
- [#44997](https://github.com/sgl-project/sglang/issues/44997) [Bug] NGRAM speculative decoding corrupts radix-cached KV with the overlap scheduler when requests end on a stop token (0.5.22) 💬1
- [#45000](https://github.com/sgl-project/sglang/issues/45000) [Bug] FP8 block-quantized checkpoint on SM86 (FP8 Marlin) intermittently gives wrong tokens with the overlap scheduler; exact without it 💬1
- [#45010](https://github.com/sgl-project/sglang/issues/45010) [CI] test_deepseek_v41_flash_gb300_dp4ep4 fails on main: engram history int32 overflow from wide MM pad values (#43043)
- [#45034](https://github.com/sgl-project/sglang/issues/45034) [Bug] [XPU] DSpark drafts all rejected under full decode graph with TP=2: TP ranks diverge on draft graph replay `bug`
- [#45032](https://github.com/sgl-project/sglang/issues/45032) [Bug] InternVL with a GPT-OSS backbone fails to load weights (UnboundLocalError: stacked_params_mapping)
- [#45030](https://github.com/sgl-project/sglang/issues/45030) [Feature] Streamed restore: chunked materialization for oversized storage hits in buffer_only HiCache mode
- [#45021](https://github.com/sgl-project/sglang/issues/45021) [Bug] [model-gateway] QueueProcessor leaks a rate-limit token when a queued client disconnects
- [#45014](https://github.com/sgl-project/sglang/issues/45014) [Bug] Unauthenticated Mooncake STAGING_RSP chunk index causes Prefill scheduler OOM
- [#45012](https://github.com/sgl-project/sglang/issues/45012) [Bug] Unauthenticated Mooncake Decode registrations can exhaust Prefill memory and cause inference denial of service
- [#45011](https://github.com/sgl-project/sglang/issues/45011) [Feature] Allow DWDP with pipeline parallelism (`--pp-size > 1`)
- [#45008](https://github.com/sgl-project/sglang/issues/45008) [Bug] Client-supplied bootstrap address in Decode worker requests enables SSRF and blocks shared request processing
- [#45002](https://github.com/sgl-project/sglang/issues/45002) [Bug] Client-controlled RID prefix allows cross-request abort through disconnect cleanup
- [#44999](https://github.com/sgl-project/sglang/issues/44999) [Bug] Marlin MoE (AWQ W4A16) on SM86 intermittently returns wrong expert outputs, even for a single request; the Triton WNA16 kernel is exact
- [#44998](https://github.com/sgl-project/sglang/issues/44998) [Bug] NVFP4 Marlin fallback (SM80-SM90) garbles every output when the block scales are small (vllm-project/vllm#34577 not ported)
- [#44959](https://github.com/sgl-project/sglang/issues/44959) [NPU] Please keep publishing Docker images for Ascend 910B
- [#44941](https://github.com/sgl-project/sglang/issues/44941) DeepSeek V3.2/V4/V4.1 streaming tool-call parser: pre-existing bugs found while fuzzing

#### 🔒 Closed Issues
- [#27194](https://github.com/sgl-project/sglang/issues/27194) moe_kernels.py, stage-2 reduce path: small SGLANG_MORI_NUM_MAX_DISPATCH_TOKENS_PER_RANK silently corrupts output (gsm8k=0) at low concurrency
- [#44479](https://github.com/sgl-project/sglang/issues/44479) [CI] Runner 5090-vast-no-0 is out of disk: every job fails in Install dependencies with 'No space left on device'
- [#43557](https://github.com/sgl-project/sglang/issues/43557) [PD] Runtime role switch: engine launched with --disaggregation-mode decode crashes with illegal memory access after decode -> prefill -> decode
- [#34786](https://github.com/sgl-project/sglang/issues/34786) [Bug] TypeError in set_mamba_track_indices_from_reqs during NEXTN TARGET_VERIFY — mamba_next_track_idx is None (hybrid-mamba + speculative decoding + lazy buffer mode)
- [#31310](https://github.com/sgl-project/sglang/issues/31310) [Bug] fa3 backend slow with mla page-size 64 for H20
- [#35476](https://github.com/sgl-project/sglang/issues/35476) [Playground] Verified cell: dgx-spark / default / nvfp4 / undefined / single
- [#35498](https://github.com/sgl-project/sglang/issues/35498) [Bug] TP>1 LoRA tensor hot-load reuses one-shot ForkingPickler FDs and crashes schedulers
- [#35484](https://github.com/sgl-project/sglang/issues/35484) [Bug] Ranks sharing one `ssd_offload_path` collide on Mooncake bucket files → L3 cache broken
- [#35437](https://github.com/sgl-project/sglang/issues/35437) [Bug] DFLASH + prefill CUDA graph: BCG capture assert at startup, full-backend IndexError on first request
- [#35565](https://github.com/sgl-project/sglang/issues/35565) [Bug] 13 tool-call parsers silently delete the message when generation stops at a tool-call open marker
- [#35518](https://github.com/sgl-project/sglang/issues/35518) [diffusion] MiniMax H3 full-loop denoise rejects ROCm
- [#35514](https://github.com/sgl-project/sglang/issues/35514) [Playground] Verified cell: rtx5090 / default / nvfp4 / undefined / single
- [#35495](https://github.com/sgl-project/sglang/issues/35495) [Feature] Add a tiered AdaLN cache manager for MiniMax-H3
- [#35482](https://github.com/sgl-project/sglang/issues/35482) [Bug] Session continuation crashes the engine on M-RoPE models: unguarded partial slice of the mm-input M-RoPE position table
- [#35464](https://github.com/sgl-project/sglang/issues/35464) [Playground] Verified cell: dgx-spark / default / nvfp4 / undefined / single
- [#35447](https://github.com/sgl-project/sglang/issues/35447) [Bug] Model generation returned no output. Error from scheduler: Error executing request bda883a6-0e33-42d6-afa2-b3038f37ba2e: Forward context is not set. Please use `set_forward_context` to set the forward context.
- [#35440](https://github.com/sgl-project/sglang/issues/35440) [Bug] `mm_input_embeds` is corrupted before the draft model reads it
- [#35420](https://github.com/sgl-project/sglang/issues/35420) [Feature] Add an opt-in SM80 fallback for DeepSeek Sparse Attention (DSA) on NVIDIA A100
- [#43263](https://github.com/sgl-project/sglang/issues/43263) [Playground] Verified cell: h100 / default / fp8 / low-latency / single
- [#45010](https://github.com/sgl-project/sglang/issues/45010) [CI] test_deepseek_v41_flash_gb300_dp4ep4 fails on main: engram history int32 overflow from wide MM pad values (#43043)
- [#38787](https://github.com/sgl-project/sglang/issues/38787) [Bug] DSA attention: `tl.constexpr` strides in `transform_index_page_table_{prefill,decode}_kernel` cause unbounded Triton recompiles and stall
- [#43705](https://github.com/sgl-project/sglang/issues/43705) [Bug] Request-controlled GLM-V video budgets can bypass deployment limits before decoding

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 131,637 · **Open issues:** 2,581 · **Last push:** 7h ago

Today saw the release of version b11721, which includes crucial optimizations such as the CUDA fusion of the SCALE -> SIGMOID -> SCALE -> hc_post chain, enhancing performance by streamlining processes into a single kernel. Version b11720 added support for non-contiguous SUM operations across CPU, CUDA, Vulkan, and WebGPU, broadening the framework's capabilities in handling various data formats. Additionally, several merged pull requests introduced improvements like the restoration of ESIMD kernels on the FFN path and added support for Hadamard matrix operations on Hexagon for Q1_0 and Q2_0 quantization. Notably, a new issue was raised regarding an eval bug where the Gemma 4 thinking control is malfunctioning via the OpenAI API, signaling a potential area for urgent attention.

#### 🚀 New Releases
- [b11721](https://github.com/ggml-org/llama.cpp/releases/tag/b11721) b11721
- [b11720](https://github.com/ggml-org/llama.cpp/releases/tag/b11720) b11720
- [b11719](https://github.com/ggml-org/llama.cpp/releases/tag/b11719) b11719
- [b11718](https://github.com/ggml-org/llama.cpp/releases/tag/b11718) b11718
- [b11717](https://github.com/ggml-org/llama.cpp/releases/tag/b11717) b11717

#### ✅ Merged PRs
- [#30602](https://github.com/ggml-org/llama.cpp/pull/30602) cuda : fuse qwen4exp's SCALE -> SIGMOID -> SCALE -> hc_post chain
- [#28851](https://github.com/ggml-org/llama.cpp/pull/28851) ggml: support non-contiguous SUM (CPU, CUDA, Vulkan, WebGPU)
- [#30572](https://github.com/ggml-org/llama.cpp/pull/30572) ggml-cuda: fattn do not check oob if k_VKQ_0 = (k_VKQ_max - nbatch_fa)
- [#30239](https://github.com/ggml-org/llama.cpp/pull/30239) Restore ESIMD kernels on FFN path
- [#30627](https://github.com/ggml-org/llama.cpp/pull/30627) hexagon: add support for hadamard MUL_MAT and GET_ROW for flat and tiled Q1_0 and Q2_0

#### 🐛 New Issues
- [#30759](https://github.com/ggml-org/llama.cpp/issues/30759) Eval bug: Gemma 4 thinking control not working via OpenAI API `bug-unconfirmed` 💬2
- [#30744](https://github.com/ggml-org/llama.cpp/issues/30744) Refactor: Remove extra ; as it give a warning when compling with CUDA 💬2
- [#30750](https://github.com/ggml-org/llama.cpp/issues/30750) json-schema-to-grammar: `enum`/`const` discard sibling constraints, so the grammar admits enum members the schema rejects 💬1
- [#30755](https://github.com/ggml-org/llama.cpp/issues/30755) Compile bug: rocm-6.3.4, no matching function for call to group_mask_warp_inplace `bug-unconfirmed` 💬1
- [#30783](https://github.com/ggml-org/llama.cpp/issues/30783) Misc. bug: /completion context checkpoints missing at the end of the system prompt `bug-unconfirmed`
- [#30782](https://github.com/ggml-org/llama.cpp/issues/30782) Updated to latest release this morning, now model doesnt appear to be working with MTP. `bug-unconfirmed`
- [#30781](https://github.com/ggml-org/llama.cpp/issues/30781) jinja: gpt-oss template 500s ('Function is not a bool value') on array tool params without items
- [#30773](https://github.com/ggml-org/llama.cpp/issues/30773) server: /v1/responses reports a truncated tool call as completed and never emits function_call_arguments.done
- [#30771](https://github.com/ggml-org/llama.cpp/issues/30771) Eval bug: sabafallah/DeepSeek-OCR-2-GGUF `bug-unconfirmed`
- [#30768](https://github.com/ggml-org/llama.cpp/issues/30768) Eval bug: slash (/) spam on IQ4_XS qwen4exp on Vulkan RADV with transfer queues `bug-unconfirmed`
- [#30757](https://github.com/ggml-org/llama.cpp/issues/30757) Misc. bug: SYCL FLASH_ATTN_EXT failures `bug-unconfirmed`
- [#30749](https://github.com/ggml-org/llama.cpp/issues/30749) json-schema-to-grammar: `minLength`/`maxLength` silently dropped when the string also has a `pattern`
- [#30747](https://github.com/ggml-org/llama.cpp/issues/30747) BPE ignores tokenizer.ggml.normalizer.nfc

#### 🔒 Closed Issues
- [#25207](https://github.com/ggml-org/llama.cpp/issues/25207) Eval bug: Unexpected massive performace drop with Vulkan Flash Attention
- [#28134](https://github.com/ggml-org/llama.cpp/issues/28134) Eval bug: SYCL backend aborts at model load on Lunar Lake iGPU (Arc 140V) — device memory query fails with both Level Zero and SYCL APIs
- [#29104](https://github.com/ggml-org/llama.cpp/issues/29104) Eval bug: server silently stops processing when /metrics endpoint is scraped by VictoriaMetrics
- [#26766](https://github.com/ggml-org/llama.cpp/issues/26766) Add support for Maple architecture (20B-A1B ternary MoE)
- [#27412](https://github.com/ggml-org/llama.cpp/issues/27412) Eval bug: SYCL run fails with The program was built for 1 devices (Iris(R) Xe Graphics)
- [#27079](https://github.com/ggml-org/llama.cpp/issues/27079) Eval bug: Server Error dry_penalty_last_n using Vulkan & ROCm images
- [#30552](https://github.com/ggml-org/llama.cpp/issues/30552) Misc. bug: generation started to crawl after update
- [#25953](https://github.com/ggml-org/llama.cpp/issues/25953) Eval bug: Very high memory leackage suspicion
- [#27966](https://github.com/ggml-org/llama.cpp/issues/27966) llama-server: streamed parallel tool calls can reuse the same tool-call ID
- [#28056](https://github.com/ggml-org/llama.cpp/issues/28056) Eval bug: Cross-request KV-cache contamination on integrated GPUs: missing sync in process_ubatch races zero-copy graph inputs against in-flight compute
- [#28132](https://github.com/ggml-org/llama.cpp/issues/28132) [Bug] DeepSeek-V4-Flash on sm_121 (GB10): deterministic character-level output corruption — quant/build-independent
- [#30204](https://github.com/ggml-org/llama.cpp/issues/30204) Eval bug: GLM-5.3-Flash + mmproj + --spec-type draft-mtp: every image request fails with "failed to process speculative batch" (Vulkan), no per-request opt-out
- [#28286](https://github.com/ggml-org/llama.cpp/issues/28286) Eval bug: draft-mtp + --parallel > 1 causes cross-slot content contamination (not HIP-graphs related)
- [#27166](https://github.com/ggml-org/llama.cpp/issues/27166) Misc. bug: stack buffer overflow in clip_encode MiniCPM-V position buckets via malicious mmproj (bucket_coords_h[1024] written for i < pos_h)
- [#29892](https://github.com/ggml-org/llama.cpp/issues/29892) Misc. bug: Vulkan ~12% prefill regression on RDNA4 (RX 9070 XT) since #29182 (MoE-aware mul_mat_id tile selection)
- [#30706](https://github.com/ggml-org/llama.cpp/issues/30706) Eval bug: When a model fails to load - the particular reason should be mentioned in the error message
- [#27604](https://github.com/ggml-org/llama.cpp/issues/27604) llama-server (Vulkan): server-wide hang after client aborts a streaming request while another request is in flight
- [#28057](https://github.com/ggml-org/llama.cpp/issues/28057) Eval bug: MTMD_BACKEND_DEVICE: invalid device: RPC0
- [#28107](https://github.com/ggml-org/llama.cpp/issues/28107) llama-bench default verbosity swallows GGML_LOG_ERROR (Metal OOM reported only as "res = -3")
- [#28193](https://github.com/ggml-org/llama.cpp/issues/28193) Misc. bug: test-backend-ops FLASH_ATTN_EXT fails on Intel Arc B70 (SYCL) for permuted q8_0 KV with nb > 1
- [#28218](https://github.com/ggml-org/llama.cpp/issues/28218) spec: ~20x slowdown of speculative decoding when tensor split is user-provided or built with MSVC (500 ms/token stepping)
- [#28255](https://github.com/ggml-org/llama.cpp/issues/28255) Eval bug: Missing documentation howto setup a draft model via ENVvar
- [#28264](https://github.com/ggml-org/llama.cpp/issues/28264) Kimi-K3 vision: support mmproj projector type kimik3 (MoonViT-3d)

### Ollama (`ollama/ollama`)

**Stars:** 183,749 · **Open issues:** 4,338 · **Last push:** 6h ago

Today, there were no new releases or merged pull requests for Ollama. However, the issue tracker saw a flurry of activity with several noteworthy new issues. Among them, #19111 highlights a critical problem where the /v1/chat/completions endpoint returns no HTTP response and leads to a 429 error after a five-minute wait. Additionally, #19113 addresses intermittent TCP connection resets during llama-server inference on Windows, a concern affecting user experience. The community is also discussing potential feature requests such as native support for Apple Foundation Models on macOS (issue #19116).

#### 🐛 New Issues
- [#19111](https://github.com/ollama/ollama/issues/19111) cloud: /v1/chat/completions returns no HTTP response at all, and queued requests wait 5 min then 429 (concurrent request slot) `cloud` 💬5
- [#19120](https://github.com/ollama/ollama/issues/19120) Health check for docker container `feature request` 💬1
- [#19113](https://github.com/ollama/ollama/issues/19113) [Windows] Intermittent TCP connection resets during llama-server inference, even when bypassing the Ollama API (v0.40.4) `bug` 💬1
- [#19109](https://github.com/ollama/ollama/issues/19109) /v1/messages streaming drops thinking that follows text or a tool call 💬1
- [#19107](https://github.com/ollama/ollama/issues/19107) qwen3 parser: thinking starts with the newline after an explicit <think> because the tag and the newline arrive in different chunks 💬1
- [#19105](https://github.com/ollama/ollama/issues/19105) /v1/responses streaming: created_at changes between response.created and response.completed 💬1
- [#19103](https://github.com/ollama/ollama/issues/19103) olmo3-think: content starts with the newlines after </think> because the tag and the whitespace arrive in different chunks 💬1
- [#19102](https://github.com/ollama/ollama/issues/19102) [ollama.com] MLX filter to Models list `feature request` `ollama.com`
- [#19116](https://github.com/ollama/ollama/issues/19116) Feature request: Native support for Apple Foundation Models (apple-foundationmodel) on macOS `feature request`
- [#19115](https://github.com/ollama/ollama/issues/19115) v0.40.5 on Jetson Orin Nano 8GB (JetPack 7 / CUDA 13): gemma4:e4b-it-qat fails at num_ctx 16384 (NvMap error 12), 2 tok/s at 8192; fine on v0.35.1
- [#19099](https://github.com/ollama/ollama/issues/19099) `ollama._types.ResponseError: Internal Server Error (ref: 67b2fc78-8624-472a-aa7d-0819f65649a3) (status code: 500)` `bug`

#### 🔒 Closed Issues
- [#13886](https://github.com/ollama/ollama/issues/13886) Ollama v0.15.0: glm-4.7-flash:q8_0 stay in a think loop
- [#18842](https://github.com/ollama/ollama/issues/18842) Can't pull/update models: Error: max retries exceeded
- [#18833](https://github.com/ollama/ollama/issues/18833) MLX: quantized decision models are slower than bf16 at prefill (M5 Pro)
- [#19120](https://github.com/ollama/ollama/issues/19120) Health check for docker container
- [#19109](https://github.com/ollama/ollama/issues/19109) /v1/messages streaming drops thinking that follows text or a tool call
- [#19107](https://github.com/ollama/ollama/issues/19107) qwen3 parser: thinking starts with the newline after an explicit <think> because the tag and the newline arrive in different chunks
- [#19105](https://github.com/ollama/ollama/issues/19105) /v1/responses streaming: created_at changes between response.created and response.completed
- [#19103](https://github.com/ollama/ollama/issues/19103) olmo3-think: content starts with the newlines after </think> because the tag and the whitespace arrive in different chunks
- [#13885](https://github.com/ollama/ollama/issues/13885) Ollama v0.15.0: corrupt manifests detected, skipping prune operation

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,509 · **Open issues:** 5,559 · **Last push:** 1h ago

On October 19, 2026, LiteLLM released version v1.107.0-rc.1 along with v1.106.0, both emphasizing the signing of Docker images with cosign for enhanced security. Significant merged updates included the backporting of important fixes to guardrails and the introduction of new context windows from the Bedrock model cards in pull requests #47234 and #47211. Additionally, the integration of context window data from the Qwen3 Coder 480B model in pull request #47283 marks an important enhancement. Notably, a new issue was reported regarding Ollama embeddings not properly handling the api_key and extra headers, which could impact user experience and usage.

#### 🚀 New Releases
- [v1.107.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.1) v1.107.0-rc.1
- [v1.106.0](https://github.com/BerriAI/litellm/releases/tag/v1.106.0) v1.106.0

#### ✅ Merged PRs
- [#47283](https://github.com/BerriAI/litellm/pull/47283) fix(bedrock): take the 256K context window from the Qwen3 Coder 480B model card
- [#47277](https://github.com/BerriAI/litellm/pull/47277) test(integration): wait for every worker in Scenario.model
- [#47192](https://github.com/BerriAI/litellm/pull/47192) fix(logging): deliver completed batch success callbacks consistently
- [#47198](https://github.com/BerriAI/litellm/pull/47198) fix(streaming)!: map stream read timeouts to litellm.Timeout on chat, messages, and responses
- [#47185](https://github.com/BerriAI/litellm/pull/47185) feat(vertex_ai): let operators drop chosen anthropic-beta values on the Vertex AI pass-through routes
- [#47255](https://github.com/BerriAI/litellm/pull/47255) test(integration): look up owned cache keys and clean up sweep models
- [#47256](https://github.com/BerriAI/litellm/pull/47256) test(integration): stop GET /__observations from draining the upstream log
- [#47254](https://github.com/BerriAI/litellm/pull/47254) feat(pricing): add missing github_copilot rows from models-and-pricing
- [#47253](https://github.com/BerriAI/litellm/pull/47253) chore(cost-map): add fireworks deepseek v4.1 flash 1017
- [#47252](https://github.com/BerriAI/litellm/pull/47252) feat(pricing): add baseten DeepSeek-V4.1-Flash-1017 models
- [#47067](https://github.com/BerriAI/litellm/pull/47067) fix(proxy): authorize the public name of a team-scoped model on batch retrieve/cancel
- [#47243](https://github.com/BerriAI/litellm/pull/47243) test(perf): align read queries with current dashboard calls
- [#47234](https://github.com/BerriAI/litellm/pull/47234) fix(guardrails)!: backport #45874 to rc/1.107.0
- [#45874](https://github.com/BerriAI/litellm/pull/45874) fix(guardrails)!: preserve Bedrock Converse redactions and honor tool-only scans
- [#47213](https://github.com/BerriAI/litellm/pull/47213) test(integration): give each owned proxy a private database and Redis by default
- [#47228](https://github.com/BerriAI/litellm/pull/47228) chore: bump litellm-enterprise 0.1.77 -> 0.1.78, litellm-proxy-extras 0.4.109 -> 0.4.110
- [#47232](https://github.com/BerriAI/litellm/pull/47232) chore: rebuild Admin UI bundle for rc/1.107.0
- [#47229](https://github.com/BerriAI/litellm/pull/47229) test(e2e): backport three stale e2e test fixes from main to rc/1.106.0
- [#47224](https://github.com/BerriAI/litellm/pull/47224) fix(ui): backport #47025 to rc/1.107.0
- [#47230](https://github.com/BerriAI/litellm/pull/47230) chore: bump litellm-enterprise 0.1.77 -> 0.1.78, litellm-proxy-extras 0.4.109 -> 0.4.110 on rc/1.107.0
- [#47226](https://github.com/BerriAI/litellm/pull/47226) fix(bedrock): take Grok 4.7 and Pegasus v1.5 context windows from the Bedrock model cards
- [#46091](https://github.com/BerriAI/litellm/pull/46091) fix(databricks): use the native Anthropic route for Claude /v1/messages
- [#46955](https://github.com/BerriAI/litellm/pull/46955) test(perf): measure SpendLog-backed UI query latency
- [#47211](https://github.com/BerriAI/litellm/pull/47211) fix(bedrock): take the 1,050,000 context window from the Daybreak Mantle model cards
- [#47209](https://github.com/BerriAI/litellm/pull/47209) feat(count_tokens)!: backport the count_tokens stack to rc/1.107.0 (#46839, #46843, #46583, #47057, #47064, #47163, #46777)
- [#46953](https://github.com/BerriAI/litellm/pull/46953) fix(proxy)!: end a chat completions stream with an error event when a guardrail blocks mid-stream

#### 🐛 New Issues
- [#47261](https://github.com/BerriAI/litellm/issues/47261) [Bug]: Ollama embeddings ignore api_key, extra headers and timeout `llm translation` 💬2
- [#47258](https://github.com/BerriAI/litellm/issues/47258) [Bug]: aiohttp_openai drops `service_tier` from chat completion responses `llm translation` 💬2
- [#47273](https://github.com/BerriAI/litellm/issues/47273) [Bug]: Proxy startup puts DATABASE_URL (with password) in process argv: `migrate diff --from-url` and bundled Prisma `migrate deploy` 💬1
- [#47238](https://github.com/BerriAI/litellm/issues/47238) Bug: Admin UI "Store Model in DB" toggle shows OFF while the feature is enabled via STORE_MODEL_IN_DB env (toggle reads only DB-stored general_settings) 💬1
- [#47208](https://github.com/BerriAI/litellm/issues/47208) [Bug]: litellm.aclient_session and client_session are ignored by every provider on the HTTP handler path (Anthropic, OpenRouter, Gemini, ...) `llm translation` 💬1
- [#47270](https://github.com/BerriAI/litellm/issues/47270) [Feature]: Let operators choose the virtual key prefix so issued keys aren't indistinguishable from provider keys `llm translation`
- [#47248](https://github.com/BerriAI/litellm/issues/47248) [Bug]: LiteLLM Content Filter permanently blocks subsequent requests after a jailbreak detection `bug`
- [#47247](https://github.com/BerriAI/litellm/issues/47247) probe-write-access
- [#47212](https://github.com/BerriAI/litellm/issues/47212) OpenAI Evals API shutdown (Nov 30): openai/evals/transformation.py calls /v1/evals `llm translation`

#### 🔒 Closed Issues
- [#33075](https://github.com/BerriAI/litellm/issues/33075) [Bug] Claude Code auto classifier fails for GPT 5.6 models: Anthropic /v1/messages does not translate stop_sequences -> stop for OpenAI-format providers (400 "Unknown parameter: 'stop_sequences'")
- [#46958](https://github.com/BerriAI/litellm/issues/46958) [Bug]: Batch retrieve returns 403 for team-scoped models since v1.103.0 (authorize_model_for_key checks internal model_name_{team_id}_{uuid} against team.models, which holds only public names)
- [#32235](https://github.com/BerriAI/litellm/issues/32235) [Feature]: Add per-MCP-server usage count metric (Prometheus)
- [#33072](https://github.com/BerriAI/litellm/issues/33072) MCP Gateway OAuth credentials are not refreshed, causing tools to disappear after token expiry
- [#33046](https://github.com/BerriAI/litellm/issues/33046) Unknown Error in LLM interaction: litellm.RateLimitError: RateLimitError: OpenrouterException - Your requests to gpt-5.4 for gpt-5.4 in eastus2 have exceeded rate limit.
- [#33058](https://github.com/BerriAI/litellm/issues/33058) Add "minimax/MiniMax-M2.7" in "model_prices_and_context_window.json"
- [#33062](https://github.com/BerriAI/litellm/issues/33062) [Bug]: GET /v1/agents always returns [] after restart unless store_model_in_db: true — agents registered via UI never loaded into memory
- [#33068](https://github.com/BerriAI/litellm/issues/33068) [Bug]: openrouter catalog missing current Claude models (sonnet-5, opus-4.8/-fast, opus-4.7-fast, fable-5) — no pricing/limits resolved
- [#33123](https://github.com/BerriAI/litellm/issues/33123) Make CORS expose_headers configurable (LITELLM_CORS_EXPOSE_HEADERS) so browser clients can read x-litellm-* response headers
- [#33030](https://github.com/BerriAI/litellm/issues/33030) [Bug]: Wildcard model access (bedrock/*) grants access to unrecognized provider prefixes (bedrockz/*)
- [#33034](https://github.com/BerriAI/litellm/issues/33034) [Bug]: stream_chunk_builder drops thinking_blocks reasoning text when no signature arrives
- [#33036](https://github.com/BerriAI/litellm/issues/33036) [Bug]: Fireworks content-embedded tool calls return finish_reason=stop instead of tool_calls
- [#33135](https://github.com/BerriAI/litellm/issues/33135) run_migration.py deletes root migrations/ folder (Dockerfile, run.py) via temp-dir path collision
- [#43518](https://github.com/BerriAI/litellm/issues/43518) [Bug]: Request Failed Error Code: 500 Message: litellm.APIConnectionError: APIConnectionError: Hosted_vllmException -
- [#45064](https://github.com/BerriAI/litellm/issues/45064) [Bug]: Managed batch cost reconciliation omits configured success callbacks
- [#47247](https://github.com/BerriAI/litellm/issues/47247) probe-write-access

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,230 · **Open issues:** 372 · **Last push:** <1h ago

Today, there were no new releases for Unsloth; however, a series of significant pull requests were successfully merged, enhancing the Studio's functionality. Notable improvements include the addition of image editing capabilities to the gallery menu (#14162), integration of clearer audio error messages and reproducible audio takes (#14075), and the introduction of LORA support for t2i models (#14114). Additionally, the recent changes saw the FLUX.3 Image Klein prompt upsampling (#14139) and various bug fixes addressing issues like overlapping UI elements on mobile (#14146). Some hot new issues have surfaced, particularly around the instability of model loading and a crash on the P100 following the latest update (#14109).

#### ✅ Merged PRs
- [#14123](https://github.com/unslothai/unsloth/pull/14123) GRPO: latch autocast under vLLM only, zero-variance exclusion on TRL before 1.6
- [#14162](https://github.com/unslothai/unsloth/pull/14162) Studio: add Edit image to the Images gallery item menu
- [#14166](https://github.com/unslothai/unsloth/pull/14166) Studio: drop an Images strip tile onto an image picker to use it
- [#14078](https://github.com/unslothai/unsloth/pull/14078) Studio: image and video generation follow each model's defaults and prompting tips, and /v1/videos takes Unsloth Studio controls
- [#14075](https://github.com/unslothai/unsloth/pull/14075) Studio: clearer audio.cpp errors, cleaner Speak/Clone, reproducible takes
- [#14077](https://github.com/unslothai/unsloth/pull/14077) Studio: one-command MCP setup, recipe prompts, a model catalog and tool annotations
- [#14072](https://github.com/unslothai/unsloth/pull/14072) Studio: audio.cpp models land on the right pages
- [#14163](https://github.com/unslothai/unsloth/pull/14163) Studio: keep the download button off the chat composer on phones
- [#14169](https://github.com/unslothai/unsloth/pull/14169) Tests: stop a GPU-selection route test leaking a CHAT owner into the upsampler tests
- [#14167](https://github.com/unslothai/unsloth/pull/14167) Log budget: measure the FLUX.3 prompt upsampler status poll
- [#14117](https://github.com/unslothai/unsloth/pull/14117) AMD install follow-ups: installable inferred target, gfx1153 lspci peer, override health hint
- [#14139](https://github.com/unslothai/unsloth/pull/14139) RMSNorm: keep the final norm's own dX buffer when hidden states are returned to the caller
- [#14003](https://github.com/unslothai/unsloth/pull/14003) Studio: fetch every video component from unsloth repos
- [#14009](https://github.com/unslothai/unsloth/pull/14009) Studio: image families default to a hosted quantized text encoder
- [#14008](https://github.com/unslothai/unsloth/pull/14008) Studio: fetch every image component from unsloth repos
- [#14137](https://github.com/unslothai/unsloth/pull/14137) Studio: FLUX.3 prompt upsampling (Enhance prompt) through a llama.cpp sidecar
- [#14000](https://github.com/unslothai/unsloth/pull/14000) Studio: video families default to a hosted quantized text encoder
- [#13786](https://github.com/unslothai/unsloth/pull/13786) Studio: reserve MiniMax-H3's pinned weights from sd.cpp's budget on integrated AMD GPUs
- [#13776](https://github.com/unslothai/unsloth/pull/13776) Studio (macOS): size image loads against the Metal working set, not RAM minus 20%
- [#14144](https://github.com/unslothai/unsloth/pull/14144) Studio: FLUX.3 Image Klein on the native sd.cpp engine
- [#14073](https://github.com/unslothai/unsloth/pull/14073) Studio: audio.cpp v0.9.2 support
- [#14046](https://github.com/unslothai/unsloth/pull/14046) Studio: keep Claude's web search to the sites it asks for
- [#14034](https://github.com/unslothai/unsloth/pull/14034) Studio: add Z.ai as an API provider
- [#14133](https://github.com/unslothai/unsloth/pull/14133) Studio: install from a package index that lags PyPI
- [#13933](https://github.com/unslothai/unsloth/pull/13933) Studio: FLUX.3 Image Klein (distilled and base), with INT8 / FP8 / GGUF support
- [#14011](https://github.com/unslothai/unsloth/pull/14011) Fix packed document boundaries in Qwen PLE
- [#14136](https://github.com/unslothai/unsloth/pull/14136) Load Ling 3.x low-rank queries on native bailing_hybrid and fix its exports
- [#14006](https://github.com/unslothai/unsloth/pull/14006) Fix LM-head weight fake quantization in fused CE
- [#14033](https://github.com/unslothai/unsloth/pull/14033) Studio: add QwenCloud as an API provider
- [#14060](https://github.com/unslothai/unsloth/pull/14060) Read the current FSDP2 output head when scoring GRPO log-probs
- [#13942](https://github.com/unslothai/unsloth/pull/13942) Studio: ask before ffmpeg or pandoc write outside the sandbox
- [#14071](https://github.com/unslothai/unsloth/pull/14071) Studio: wrap long commands and cap tall API examples in Settings
- [#14122](https://github.com/unslothai/unsloth/pull/14122) Kernel follow-ups: NVFP4 shape-aware fused gate, MoE fallback tiles, test fixes across torch 2.10 - 2.14
- [#14002](https://github.com/unslothai/unsloth/pull/14002) Fix Nemotron loss normalization across gradient accumulation
- [#13914](https://github.com/unslothai/unsloth/pull/13914) Studio: ask before risky calls when a chat folder is too large to check
- [#14126](https://github.com/unslothai/unsloth/pull/14126) Studio: name a closed AMD device node in the System tab GPU notice
- [#13599](https://github.com/unslothai/unsloth/pull/13599) Studio: default to the Vulkan llama.cpp bundle when a CPU-bound host has a Vulkan GPU
- [#14043](https://github.com/unslothai/unsloth/pull/14043) Studio: keep llama.cpp and vLLM connections' default system prompt
- [#13917](https://github.com/unslothai/unsloth/pull/13917) Studio: unload a local model without stopping external provider chats
- [#14134](https://github.com/unslothai/unsloth/pull/14134) Studio: keep GGUF variant listings off the default thread pool so a stalled Hub cannot block downloaded models
- [#14138](https://github.com/unslothai/unsloth/pull/14138) Model picker contract: follow the On Device filter onto Discover's capability picks
- [#14125](https://github.com/unslothai/unsloth/pull/14125) Studio: let the Project sources panel be hidden in a project chat
- [#14129](https://github.com/unslothai/unsloth/pull/14129) Studio: skip a Terminal PATH entry MXC cannot grant instead of failing every launch
- [#13941](https://github.com/unslothai/unsloth/pull/13941) Load six older models in 4bit instead of a missing repo
- [#14041](https://github.com/unslothai/unsloth/pull/14041) Unsloth Studio / Desktop (AMD, Windows): stop amd-smi from popping UAC/DiskPart prompts on the System page
- [#14131](https://github.com/unslothai/unsloth/pull/14131) Studio: let a finished reply be edited when its settle write was refused
- [#14127](https://github.com/unslothai/unsloth/pull/14127) Studio: let the browser panel and web fetch work behind fake-IP DNS proxies
- [#14124](https://github.com/unslothai/unsloth/pull/14124) Studio: name unknown GGUF quant types below the bundled type count
- [#14016](https://github.com/unslothai/unsloth/pull/14016) Studio: keep a dataset's thinking text when training Qwen models
- [#14047](https://github.com/unslothai/unsloth/pull/14047) Studio: push an export to the Hub with the Hugging Face CLI login
- [#14014](https://github.com/unslothai/unsloth/pull/14014) Studio: read uploaded CSV cells as written for embedding training
- [#14111](https://github.com/unslothai/unsloth/pull/14111) fix(studio): guard missing scrollbar-gutter on Mac desktop startup
- [#14044](https://github.com/unslothai/unsloth/pull/14044) Studio: keep a chat's files in the Library after it moves into a project
- [#14045](https://github.com/unslothai/unsloth/pull/14045) Studio: fit knowledge base chunks to the embedding model's input limit
- [#13912](https://github.com/unslothai/unsloth/pull/13912) Studio: keep skills created in Docker on the unsloth-studio volume
- [#13915](https://github.com/unslothai/unsloth/pull/13915) Create the branch before pushing a LoRA GGUF to a revision
- [#14015](https://github.com/unslothai/unsloth/pull/14015) Let the Gemma-4 chat template format tool-calling conversations
- [#14013](https://github.com/unslothai/unsloth/pull/14013) Studio: tell Gemma 4 with Think off and GLM today's date
- [#14118](https://github.com/unslothai/unsloth/pull/14118) Studio: automatic GPU placement caches failed probes, skips MIG winners, never blocks the event loop
- [#14116](https://github.com/unslothai/unsloth/pull/14116) Tests: make the --help, media scan, installer comparer and harness resolver checks hold on every host
- [#14092](https://github.com/unslothai/unsloth/pull/14092) CI: pin the Arrow and sqlite-vec tags the Windows ARM wheelhouse signs to commits
- [#14091](https://github.com/unslothai/unsloth/pull/14091) Studio: a managed account's Hub dataset card may not make the server dial an http(s) URL
- [#14029](https://github.com/unslothai/unsloth/pull/14029) Studio: browser panel follows the system proxy on macOS, Windows and Linux

#### 🐛 New Issues
- [#14099](https://github.com/unslothai/unsloth/issues/14099) [Feature] Make it easy to edit created images `feature request`
- [#14100](https://github.com/unslothai/unsloth/issues/14100) [Feature] add other inference engines in the same way it supports vllm `feature request` 💬1
- [#14154](https://github.com/unslothai/unsloth/issues/14154) [Bug] When multiple models are loaded if one goes rogue there is not way to unload it `feature request` `bug` 💬1
- [#14146](https://github.com/unslothai/unsloth/issues/14146) ​[Bug] UI: Download progress icon overlaps the action/send button on mobile browsers `feature request` `bug`
- [#14109](https://github.com/unslothai/unsloth/issues/14109) [Bug] P100 now crashing since last update `feature request` `bug`
- [#14120](https://github.com/unslothai/unsloth/issues/14120) [Bug] Studio: an alongside load that does not fit in memory takes down the host (macOS, M4 Max 64 GB)
- [#14114](https://github.com/unslothai/unsloth/issues/14114) LORA support for t2i models `feature request`

#### 🔒 Closed Issues
- [#13656](https://github.com/unslothai/unsloth/issues/13656) [Bug] Failure to enable Windows MXC Sandbox, unclear instructions
- [#14057](https://github.com/unslothai/unsloth/issues/14057) Every update broke pytorch link with GPU (AMD RDNA 2)
- [#6604](https://github.com/unslothai/unsloth/issues/6604) How do I change an user post in a chat without causing a regeneration of the AI post.
- [#14086](https://github.com/unslothai/unsloth/issues/14086) [Bug] Recommend downloaded Audio Models don't show up in inventory
- [#13985](https://github.com/unslothai/unsloth/issues/13985) [Bug] The desktop browser cannot access it
- [#13876](https://github.com/unslothai/unsloth/issues/13876) [Bug] Cannot close project sources banner when chatting within a project chat window (too much space taken)
- [#13938](https://github.com/unslothai/unsloth/issues/13938) [Bug] Assistant messages can not be edited.
- [#14055](https://github.com/unslothai/unsloth/issues/14055) [Bug] "undefined is not an object (evaluating 't.scrollbarGutter.includes')" on v0.1.908-beta MAC
- [#13604](https://github.com/unslothai/unsloth/issues/13604) [Bug] “Chat input worked before updating from v0.1.905-beta to v0.1.906-beta. After the update, it disappears following the first reply, even in a plain chat without a Project.”
- [#14099](https://github.com/unslothai/unsloth/issues/14099) [Feature] Make it easy to edit created images
- [#14100](https://github.com/unslothai/unsloth/issues/14100) [Feature] add other inference engines in the same way it supports vllm
- [#14031](https://github.com/unslothai/unsloth/issues/14031) [Bug] Studio fails to install OOB when package feeds limit versions
- [#13948](https://github.com/unslothai/unsloth/issues/13948) [Bug] Ling 3 tiny fine tune export fails
- [#14038](https://github.com/unslothai/unsloth/issues/14038) [Bug] unable to pick model when Hugging Face is not responding
- [#13908](https://github.com/unslothai/unsloth/issues/13908) [Bug] Kitten TTS 2 GGUF fails to load — unsupported tensor type 43
- [#13943](https://github.com/unslothai/unsloth/issues/13943) [Bug] Linux homebrew install doesn't provide CLI or desktop launcher
- [#14085](https://github.com/unslothai/unsloth/issues/14085) [Bug] Windows AMD gfx1201: ROCm launch failures after llama.cpp b11696 update, display flashing and hard lockup
- [#14032](https://github.com/unslothai/unsloth/issues/14032) [Bug] Unsloth reports no managed desktop backend, unclear how to grant
- [#14146](https://github.com/unslothai/unsloth/issues/14146) ​[Bug] UI: Download progress icon overlaps the action/send button on mobile browsers
- [#14067](https://github.com/unslothai/unsloth/issues/14067) ROCm PyTorch wasn't working out of the box

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,149 · **Open issues:** 364 · **Last push:** <1h ago

On October 19, 2026, there were no new releases in AIBrix, but several important pull requests were merged. Notably, features and bug fixes included the support for E+PD routing for encode pods (PR #3153), improvements to error handling by capping a ModelClaim's KV limit (PR #3111), and re-subscribing KV events upon changes in pod models (PR #3142). Documentation was also enhanced with updates on Pod admission failures (PR #3134). In terms of new issues, there was a significant bug reported (#3155) regarding SGLang DP-attention gauges that retain incorrect ranking values, which may impact model performance. Overall, the day was primarily focused on maintenance and bug fixes, highlighted by ongoing efforts to enhance the AIBrix system's stability and functionality.

#### ✅ Merged PRs
- [#3057](https://github.com/vllm-project/aibrix/pull/3057) [Bug] Use SGLang's priority="" queue totals instead of a per-priority series
- [#3134](https://github.com/vllm-project/aibrix/pull/3134) docs(modelwarmup): document Pod admission failures
- [#3142](https://github.com/vllm-project/aibrix/pull/3142) [Bug] Re-subscribe KV events when a pod model or lora changes
- [#3111](https://github.com/vllm-project/aibrix/pull/3111) [Bug] Cap a ModelClaim's KV limit at its engine's startup KV capacity
- [#3153](https://github.com/vllm-project/aibrix/pull/3153) [Feat] Support E+PD routing for encode pods
- [#3147](https://github.com/vllm-project/aibrix/pull/3147) [Bug] Serve the standardized aibrix counters from the runtime metrics endpoint
- [#3144](https://github.com/vllm-project/aibrix/pull/3144) [Bug] Stop probing a failed tokenizer endpoint on every request
- [#3141](https://github.com/vllm-project/aibrix/pull/3141) [Bug] Drop reverse index entries when a pod leaves the prefix cache
- [#3140](https://github.com/vllm-project/aibrix/pull/3140) [Bug] Drop duplicate KV event batches and recover from publisher restarts
- [#3145](https://github.com/vllm-project/aibrix/pull/3145) [Bug] Ignore implausibly large decode cost corrections
- [#3148](https://github.com/vllm-project/aibrix/pull/3148) [CI] Reduce AIBrix's use of the shared GitHub-hosted runners

#### 🐛 New Issues
- [#3155](https://github.com/vllm-project/aibrix/issues/3155) [Bug] SGLang DP-attention gauges retain one rank instead of pod-level values `kind/bug` `area/gateway` `area/kv-cache` 💬3
- [#3164](https://github.com/vllm-project/aibrix/issues/3164) flaky e2e test - TestModelClaimLifecycleAndRequestWake `help wanted` `area/testing` `kind/misc` `area/orchestration` 💬2
- [#3165](https://github.com/vllm-project/aibrix/issues/3165) [Bug] Runtime re-adoption can lose a known startup KV ceiling `kind/bug` `area/runtime` `area/orchestration` 💬1
- [#3160](https://github.com/vllm-project/aibrix/issues/3160) [Bug] A failed TPM increment replaces a completed response with a 500 `kind/bug` `area/gateway` 💬1
- [#3158](https://github.com/vllm-project/aibrix/issues/3158) [Bug] Routers credit a prefix or pin a session on a pod that then rejects the request with a 429 `kind/bug` `area/gateway` 💬1

#### 🔒 Closed Issues
- [#2289](https://github.com/vllm-project/aibrix/issues/2289) SGLang PD: prefill failure is silent and leaves the decode request hanging on bootstrap
- [#2287](https://github.com/vllm-project/aibrix/issues/2287) Prefix cache index not invalidated when a vLLM engine clears its prefix cache (reset/OOM/sleep)
- [#2457](https://github.com/vllm-project/aibrix/issues/2457) [ModelClaim] Add a Grafana dashboard for high-density runtime pools
- [#2744](https://github.com/vllm-project/aibrix/issues/2744) [Feature] Check free GPU memory before ModelClaim activation
- [#2286](https://github.com/vllm-project/aibrix/issues/2286) Map gateway SLO tiers to vLLM request priority
- [#2459](https://github.com/vllm-project/aibrix/issues/2459) [ModelClaim] Reschedule claims after terminal runtime failure
- [#2285](https://github.com/vllm-project/aibrix/issues/2285) KV event decoder drops group_idx/medium/lora_name, breaking prefix matching for hybrid and multi-tier models
- [#2425](https://github.com/vllm-project/aibrix/issues/2425) rayfleet scale down support ways to determine the scaling-down priority.
- [#2413](https://github.com/vllm-project/aibrix/issues/2413) [Feature] Support drain-aware RoleSet rollout and scale-in
- [#2994](https://github.com/vllm-project/aibrix/issues/2994) [Gateway] Add routing support for the /v1/audio/speech API
- [#2262](https://github.com/vllm-project/aibrix/issues/2262) KubernetesJob batch worker does not receive Redis password → fails on an authenticated metastore
- [#2359](https://github.com/vllm-project/aibrix/issues/2359) Add resource configuration fields for batch inference deployment in UI
- [#2421](https://github.com/vllm-project/aibrix/issues/2421) [Bug] Pod recreation causes runningRequests counter to drift negative, breaking least-request routing accuracy
- [#2494](https://github.com/vllm-project/aibrix/issues/2494) [Bug] Console-created deployments are not discoverable by the AIBrix data plane
- [#2819](https://github.com/vllm-project/aibrix/issues/2819) [Bug] Sync prefix indexer hashes every block of a BlockStored event against the first block's parent
- [#2546](https://github.com/vllm-project/aibrix/issues/2546) [Bug] Batch inference retries default to 120, letting a single request retry for ~70 minutes and outlive its request lock
- [#2879](https://github.com/vllm-project/aibrix/issues/2879) [Bug] KPA treats the per-pod mean as a total, so its replica count ignores the pod count
- [#2993](https://github.com/vllm-project/aibrix/issues/2993) [Gateway] Add routing support for the SGLang /v1/score API
- [#2990](https://github.com/vllm-project/aibrix/issues/2990) [Bug][Gateway] Add missing reserved routes for supported Messages and Audio APIs
- [#2263](https://github.com/vllm-project/aibrix/issues/2263) KubernetesJob batches finalize with wrong request_counts and missing usage (metadata doesn't reflect the worker's final state)
- [#2332](https://github.com/vllm-project/aibrix/issues/2332) local testing with Redis throw TTL not supported by local storage
- [#2326](https://github.com/vllm-project/aibrix/issues/2326) Batch Job Progress UI do not work
- [#2373](https://github.com/vllm-project/aibrix/issues/2373) Job stucking at the scheduling stage
- [#2455](https://github.com/vllm-project/aibrix/issues/2455) [ModelClaim] Add operational metrics for pooled runtimes and policy actions
- [#2863](https://github.com/vllm-project/aibrix/issues/2863) Runtime and metadata-service nightly images are unexpectedly large (~970 MB)
- [#2495](https://github.com/vllm-project/aibrix/issues/2495) [Bug] Deployment detail page uses hardcoded data and cannot open the real Playground
- [#2906](https://github.com/vllm-project/aibrix/issues/2906) [Bug] KV event replay never applies the replayed batches
- [#2942](https://github.com/vllm-project/aibrix/issues/2942) [Feat] Report how many prefix blocks are cached
- [#2940](https://github.com/vllm-project/aibrix/issues/2940) [Bug] A one-block prefix match scores 0 on a long prompt
- [#2876](https://github.com/vllm-project/aibrix/issues/2876) [Bug] Prefix cache delta sync drops blocks that change during a push
- [#2231](https://github.com/vllm-project/aibrix/issues/2231) [Bug] AIBrixOffloadingConnectorV1Type2: Two bugs causing EngineDeadError under concurrent load
- [#2310](https://github.com/vllm-project/aibrix/issues/2310) CN characters error in aibrix platform
- [#2396](https://github.com/vllm-project/aibrix/issues/2396) Helm chart: Redis password not set on Redis server when enabled
- [#2362](https://github.com/vllm-project/aibrix/issues/2362) Make batch job completion time configurable
- [#2482](https://github.com/vllm-project/aibrix/issues/2482) [Feature] Add session-aware Agent workload generation
- [#2451](https://github.com/vllm-project/aibrix/issues/2451) [Batch] The concurrency drop fast and recover slow
- [#2565](https://github.com/vllm-project/aibrix/issues/2565) [Bug] S3/TOS downloaders ignore the per-request force_download override

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,209 · **Open issues:** 622 · **Last push:** 2h ago

On October 19, 2026, the Semantic Router project did not release any new versions but saw several important changes merged. Notable bug fixes included #5229, which preserves invitation lookup storage failures, and #5209, which ensures a 400 response is returned when the native gateway cannot read a request body. Additionally, feature #5204 introduces a check for field names during the duplicate-key walk for requests and responses. Among the newly reported issues, #5228 stands out by indicating that invitation lookup is erroneously reporting storage failures as unavailable, highlighting a critical area needing attention. Overall, the day's activity focused on addressing bugs and improving system robustness.

#### ✅ Merged PRs
- [#5229](https://github.com/vllm-project/semantic-router/pull/5229) [Bug] Preserve invitation lookup storage failures
- [#5223](https://github.com/vllm-project/semantic-router/pull/5223) [CI/Build] Consolidate hosted CI and gate expensive qualification
- [#5209](https://github.com/vllm-project/semantic-router/pull/5209) [Bug] Return 400 when the native gateway cannot read a request body
- [#5164](https://github.com/vllm-project/semantic-router/pull/5164) [Bug] Keep model scheduler alive on mismatched result counts
- [#5206](https://github.com/vllm-project/semantic-router/pull/5206) [CI/Build] Upload the Dashboard test evidence on every run
- [#5213](https://github.com/vllm-project/semantic-router/pull/5213) [Bug] Stop returning raw auth store errors to dashboard clients
- [#5204](https://github.com/vllm-project/semantic-router/pull/5204) [Feature] Check field names during the duplicate-key walk for requests and responses
- [#5185](https://github.com/vllm-project/semantic-router/pull/5185) [Bug] Record d3's CPU answers for AVX-512 hosts with native BF16
- [#5184](https://github.com/vllm-project/semantic-router/pull/5184) [Bug] Stage a GPU model's checkpoint per tensor instead of a host copy
- [#5110](https://github.com/vllm-project/semantic-router/pull/5110) [Bug] Model runtime: count BF16-resident Linear weights in the placement estimate
- [#5074](https://github.com/vllm-project/semantic-router/pull/5074) [Bug] Accept LiteLLM provider_specific_fields on Chat response (#4936)
- [#5066](https://github.com/vllm-project/semantic-router/pull/5066) [Feature] Model runtime: load FP8 and int4 Decision 3.0 packages

#### 🐛 New Issues
- [#5228](https://github.com/vllm-project/semantic-router/issues/5228) [Bug] Invitation lookup reports storage failures as unavailable `bug` `accepted` `wg/enterprise-environment` 💬3
- [#5224](https://github.com/vllm-project/semantic-router/issues/5224) [Bug] stepfun/step-5-preview is still catalogued as proprietary after the weights opened `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬3
- [#5214](https://github.com/vllm-project/semantic-router/issues/5214) [Bug] Parallel step can hide caller cancellation or wait for non-cooperative branches `bug` `accepted` `wg/mom-routing` 💬2
- [#5216](https://github.com/vllm-project/semantic-router/issues/5216) [Bug] Dashboard config mutation endpoints lack bounded request bodies `bug` `accepted` `wg/enterprise-environment` 💬2
- [#5217](https://github.com/vllm-project/semantic-router/issues/5217) [Bug] Contrastive jailbreak scoring can be inflated when benign embeddings are missing `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#5232](https://github.com/vllm-project/semantic-router/issues/5232) [Feature] Model runtime: merge NVFP4 projections of one input into one product `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5222](https://github.com/vllm-project/semantic-router/issues/5222) [Bug] The production docs site still serves a pre-10-06 build `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#5215](https://github.com/vllm-project/semantic-router/issues/5215) [Bug] Disconnect handling can wait indefinitely for cancellation-suppressing work `bug` `needs-acceptance` `needs-info` `wg/router-models-inference-runtime` 💬1
- [#5219](https://github.com/vllm-project/semantic-router/issues/5219) [Bug] System One: the Engine-mode native gateway still answers a full worker pool as 503 systemone_unavailable `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5243](https://github.com/vllm-project/semantic-router/issues/5243) [Bug] Streamed request bodies are copied before the size guard rejects them `needs-acceptance` `wg/data-plane-networking`
- [#5241](https://github.com/vllm-project/semantic-router/issues/5241) [Bug] config validate accepts a model_runtime deployment of a Hub repository it cannot load `bug` `needs-acceptance`
- [#5238](https://github.com/vllm-project/semantic-router/issues/5238) [Bug] Contrastive Jailbreak Classifier Accepts Invalid Knowledge-Base Embeddings `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5236](https://github.com/vllm-project/semantic-router/issues/5236) [Bug] Model runtime docs: the attach example sets a served_name the runtime never serves `bug` `needs-acceptance`
- [#5234](https://github.com/vllm-project/semantic-router/issues/5234) [Bug] Protocol-neutral decoding rejects unknown OpenAI Chat fields before routing, with no opt-out `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#5105](https://github.com/vllm-project/semantic-router/issues/5105) [Feature] Validate wire JSON in one pass instead of re-reading each body three times
- [#4936](https://github.com/vllm-project/semantic-router/issues/4936) [Bug] LiteLLM proxy replies fail strict Chat decoding on provider_specific_fields
- [#5210](https://github.com/vllm-project/semantic-router/issues/5210) [Bug] Dashboard auth handlers return the auth store's raw error text to the client
- [#5065](https://github.com/vllm-project/semantic-router/issues/5065) [Feature] Model runtime: load FP8 and int4 Decision 3.0 packages
- [#5021](https://github.com/vllm-project/semantic-router/issues/5021) [Feature] Add a locked uv environment for the KV mapper
- [#5208](https://github.com/vllm-project/semantic-router/issues/5208) [Bug] Native gateway returns an empty 200 when request body reading fails
- [#5228](https://github.com/vllm-project/semantic-router/issues/5228) [Bug] Invitation lookup reports storage failures as unavailable
- [#5178](https://github.com/vllm-project/semantic-router/issues/5178) [Bug] Model runtime: a failed GPU load's cached memory makes every retry fail placement
- [#5198](https://github.com/vllm-project/semantic-router/issues/5198) [CI/Build] The Dashboard backend job never uploads its test evidence
- [#5163](https://github.com/vllm-project/semantic-router/issues/5163) [Bug] Model result count mismatch can terminate the scheduler worker
- [#5187](https://github.com/vllm-project/semantic-router/issues/5187) [Bug] Model runtime: packed Decision 3.0 forwards fail at --dtype float32 on GPUs
- [#5177](https://github.com/vllm-project/semantic-router/issues/5177) [Bug] Model runtime: SIGTERM leaves the media worker and its resource tracker behind
- [#5176](https://github.com/vllm-project/semantic-router/issues/5176) [Bug] Model runtime: d3 at --dtype float32 fails to load on gfx942 with pinned BF16 kernel choices

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*