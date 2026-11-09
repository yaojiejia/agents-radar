# 📡 AI Ecosystem Digest — 2026-11-09

> Generated 2026-11-09 02:25 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 155,015 | 27 | 1 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 133,867 | 7 | 14 | 9 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,787 | 0 | 0 | 0 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,382 | 3 | 0 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 225,545 | 18 | 14 | 10 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29,110 | 17 | 4 | 5 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,214 | 153 | 111 | 113 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 261,793 | 20 | 12 | 7 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,564 | 25 | 16 | 23 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,590 | 17 | 18 | 45 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,773 | 15 | 14 | 13 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,386 | 6 | 3 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,926 | 9 | 16 | 10 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,215 | 10 | 0 | 96 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,182 | 2 | 0 | 7 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,424 | 11 | 19 | 4 | 0 |

---

## ✨ Highlights

- **Qwen Code** released [sdk-typescript-v0.1.29](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.29).
- **OpenClaw** released [v2026.11.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.2).
- **Claude Code** has a new issue [#108494](https://github.com/anthropics/claude-code/issues/108494) regarding a bug where the Greek lowercase ω renders as uppercase Ω, receiving 2 comments.
- **OpenAI Codex** is addressing a new issue [#60193](https://github.com/openai/codex/issues/60193) about control tools disappearing between sessions, which has garnered 6 comments.
- **OpenCode** reported an important issue [#62797](https://github.com/anomalyco/opencode/issues/62797) regarding a reminder persisting after agent switching, attracting 9 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 155,015 · **Open issues:** 16,877 · **Last push:** 2d ago

On November 9, 2026, there were no new releases or merged pull requests for Claude Code, indicating a day of routine maintenance. Among the newly reported issues, a notable bug (#108494) has been identified where the Greek lowercase letter ω renders incorrectly as uppercase Ω in both the prompt input and responses on the Windows desktop version. Additionally, users reported a bug (#108496) concerning the computer use screenshot returning incorrect size and content for displays with HDR enabled. Other issues include a feature request for a model roadmap notification (#108498) and a bug about the handling of subagent definitions mid-session (#108487).

#### 🐛 New Issues
- [#108494](https://github.com/anthropics/claude-code/issues/108494) [BUG] Claude Desktop (Windows) Code tab: Greek lowercase ω (U+03C9) renders as uppercase Ω in the prompt input and in responses `bug` `platform:windows` `area:ui` `area:desktop` 💬2
- [#108472](https://github.com/anthropics/claude-code/issues/108472) Finished foreground Bash command stays under "Running" in Background tasks `duplicate` `platform:macos` `area:tools` 💬1
- [#108496](https://github.com/anthropics/claude-code/issues/108496) [Bug] Computer use screenshot returns wrong size/content for a display with HDR enabled (Windows 11, multi-monitor) `bug` `platform:windows` `area:tools` `area:desktop`
- [#108498](https://github.com/anthropics/claude-code/issues/108498) Feature request: Publish a rough model roadmap and notify before alias changes `enhancement` `area:model`
- [#108497](https://github.com/anthropics/claude-code/issues/108497) [Bug] Opus 5.5 safeguards incorrectly flag non-cybersecurity session with [cyber] error `bug` `duplicate` `platform:windows` `area:model`
- [#108495](https://github.com/anthropics/claude-code/issues/108495) Peer messaging (ListAgents/SendMessage) assumes a shared PID namespace and `/tmp`, so it fails between PID-namespaced sessions `bug` `platform:linux` `area:agents` `area:sandbox`
- [#108493](https://github.com/anthropics/claude-code/issues/108493) Session declared work 'verified and double checked' with 7 of 9 acceptance tasks unverified, denied lying when asked, and kept launching work after 'stop' `bug` `area:model` `area:hooks` `model`
- [#108492](https://github.com/anthropics/claude-code/issues/108492) Replay recording writes parallel tool results again as `api-request-blob` (incl. base64 images) when transcript rows are interleaved `bug` `platform:linux` `area:core` `perf:memory`
- [#108490](https://github.com/anthropics/claude-code/issues/108490) [Bug] Report missing description; only request and message IDs provided `bug` `platform:macos` `needs-info`
- [#108491](https://github.com/anthropics/claude-code/issues/108491) [BUG] fix(mcp): stdio servers receive signals before stdin closes on normal exit `bug` `has repro` `platform:macos` `area:mcp`
- [#108489](https://github.com/anthropics/claude-code/issues/108489) [BUG] I'm experiencing a significant increase in Claude Code usage consumption `bug` `area:cost` `regression`
- [#108488](https://github.com/anthropics/claude-code/issues/108488) [FEATURE] Show usage/reset time/task duration snapshot in conversation `enhancement` `area:cost` `area:tui`
- [#108487](https://github.com/anthropics/claude-code/issues/108487) [BUG] Subagent definitions added to an existing `.claude/agents/` mid-session are never picked up (docs say they are detected within seconds) — Windows, 2.1.319, CLI and VS Code `bug` `has repro` `platform:windows` `area:agents`
- [#108486](https://github.com/anthropics/claude-code/issues/108486) [GitHub integration] `bug` `needs-info` `github-integration`
- [#108483](https://github.com/anthropics/claude-code/issues/108483) Claude in Chrome still drives a browser on a different machine after the local Chrome reconnects (follow-up to #25551) `bug` `platform:windows` `area:chrome`
- [#108485](https://github.com/anthropics/claude-code/issues/108485) [GitHub integration] `bug` `platform:web` `github-integration`
- [#108484](https://github.com/anthropics/claude-code/issues/108484) ANTHROPIC_API_KEY in env breaks `claude rc`; `env -u ANTHROPIC_API_KEY claude rc` works `bug` `platform:macos` `area:auth`
- [#108482](https://github.com/anthropics/claude-code/issues/108482) Bug Report: Issue filed in error, user developing personal finance app `question` `platform:macos`
- [#108481](https://github.com/anthropics/claude-code/issues/108481) [BUG] Desktop: keyboard navigation in branch list opens a hover popup that only Escape dismisses `bug` `has repro` `platform:macos` `area:a11y`
- [#108480](https://github.com/anthropics/claude-code/issues/108480) Desktop app: a permission prompt sometimes takes no click until the window loses focus `bug` `platform:windows` `area:permissions` `area:desktop`
- [#108479](https://github.com/anthropics/claude-code/issues/108479) 体裁が崩れることが多い `bug` `needs-info`
- [#108478](https://github.com/anthropics/claude-code/issues/108478) [Bug] False Positive Refusal on Cybersecurity Education Content `bug` `platform:linux` `area:model`
- [#108477](https://github.com/anthropics/claude-code/issues/108477) [GitHub integration] `bug` `needs-info` `github-integration`
- [#108475](https://github.com/anthropics/claude-code/issues/108475) [Bug] Unable to install kernel via fastboot/adb shell due to safeguard issue `bug` `platform:windows` `needs-info` `area:permissions`
- [#108476](https://github.com/anthropics/claude-code/issues/108476) [BUG] auto-close-duplicates.ts does not paginate issue comments or reactions `bug`
- [#108474](https://github.com/anthropics/claude-code/issues/108474) Desktop app sidebar: custom groups and folders look identical `enhancement` `platform:windows` `area:desktop`
- [#108473](https://github.com/anthropics/claude-code/issues/108473) [GitHub integration] `bug` `needs-info` `github-integration`

#### 🔒 Closed Issues
- [#91874](https://github.com/anthropics/claude-code/issues/91874) [FEATURE] Plugins installed via claude.ai propegate to the Claude Code CLI

### OpenAI Codex (`openai/codex`)

**Stars:** 133,867 · **Open issues:** 26,915 · **Last push:** <1h ago

There were no new releases in the last 24 hours for OpenAI Codex. Significant merged pull requests included enhancements such as #60320, which integrates older itemless Cloud failures into full transcripts, and #60319, which improves side-chat discovery and navigation in the TUI. Other notable fixes involved increasing the Bazel core unit test shards from 8 to 16 (#60206) and ensuring the agents overview remains open in the absence of a chat to return to (#60271). Among new issues, #60193 highlights a problem where browser/computer control tools disappear between sessions, impacting user workflow and task completion.

#### ✅ Merged PRs
- [#60320](https://github.com/openai/codex/pull/60320) Include older itemless Cloud failures in full transcripts
- [#60319](https://github.com/openai/codex/pull/60319) Improve side-chat discovery and navigation in the TUI
- [#60309](https://github.com/openai/codex/pull/60309) Defer executor readiness when prewarming a selected project
- [#60286](https://github.com/openai/codex/pull/60286) Search task history from the command center
- [#60280](https://github.com/openai/codex/pull/60280) Fix MCP startup tracking when attaching to shared app servers
- [#60271](https://github.com/openai/codex/pull/60271) Keep the agents overview open when there is no chat to return to
- [#60270](https://github.com/openai/codex/pull/60270) Warn when a CLI model is absent from the ChatGPT model list
- [#60206](https://github.com/openai/codex/pull/60206) Increase Bazel core unit test shards from 8 to 16
- [#60190](https://github.com/openai/codex/pull/60190) Expose agent tree IDs and environment removal

#### 🐛 New Issues
- [#60193](https://github.com/openai/codex/issues/60193) Browser/computer control tools disappear between sessions despite authorization; retries burn usage with no task completion `bug` `model-behavior` `computer-use` `browser` 💬6
- [#60314](https://github.com/openai/codex/issues/60314) content blocked `bug` `model-behavior` 💬1
- [#60324](https://github.com/openai/codex/issues/60324) Windows: cloud project chat fails to resume; local dot controls missing `bug` `windows-os` `app` `session` 💬1
- [#60274](https://github.com/openai/codex/issues/60274) Codex Desktop: repeated regressions and incomplete execution of agreed repair plans in a long-running Windows task `bug` `model-behavior` `windows-os` `app` 💬1
- [#60325](https://github.com/openai/codex/issues/60325) TUI stays busy (spinner + OSC 7501 "working") forever after parent turn completes, because stalled spawned subagents are never completed or closed `bug` `TUI` `CLI` `subagent`
- [#60323](https://github.com/openai/codex/issues/60323) something for my mental state `enhancement` `rate-limits` `app`
- [#60322](https://github.com/openai/codex/issues/60322) [Dots][macOS] Clarify Add → Plugins discovery versus local tools and built-in skills `enhancement` `skills` `dots`

#### 🔒 Closed Issues
- [#21331](https://github.com/openai/codex/issues/21331) After opening a new terminal in VS Code and launching Codex, Command + V does not work; it simply inputs the letter 'v'.
- [#38317](https://github.com/openai/codex/issues/38317) Failed to use /btw
- [#38923](https://github.com/openai/codex/issues/38923) Windows Terminal Preview duplicates non-ASCII input in Codex TUI under WSL
- [#27150](https://github.com/openai/codex/issues/27150) Codex CLI 0.138.0 with Amazon Bedrock Mantle: Japanese streaming output is repeatedly appended, while English output works correctly
- [#51057](https://github.com/openai/codex/issues/51057) TUI /feedback upload fails with VPN enabled and disabled
- [#43856](https://github.com/openai/codex/issues/43856) [TUI][tmux] Shift+mouse-wheel silently changes reasoning effort while attempting to scroll
- [#41390](https://github.com/openai/codex/issues/41390) Rosalind Workbench MCP fails to start in TUI
- [#31981](https://github.com/openai/codex/issues/31981) VS Code Insiders terminal trash-can button becomes unresponsive while Codex CLI is processing
- [#53399](https://github.com/openai/codex/issues/53399) Windows: copy/paste regression with Cyrillic keyboard layouts in Fullscreen TUI and Scrollback mode
- [#57574](https://github.com/openai/codex/issues/57574) CLI /feedback upload fails while reporting a suspected cybersecurity false positive
- [#39522](https://github.com/openai/codex/issues/39522) Voice transcription (hold-Space) types literal spaces instead of recording on macOS (arm64, multiple terminals)
- [#60314](https://github.com/openai/codex/issues/60314) content blocked
- [#14953](https://github.com/openai/codex/issues/14953) codex CLI crashes in xterm
- [#39265](https://github.com/openai/codex/issues/39265) Terminal.app intermittently crashes during Codex CLI sessions over SSH

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,382 · **Open issues:** 2,194 · **Last push:** 1d ago

On November 9, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. However, three new issues were reported, with the most notable being issue #5386, which highlights a problem where sessions created with `create_session` cannot be resumed after being closed if the user has switched to that session. Additionally, issue #5384 raises concerns about session-state artifact storage, indicating that project deliverables are being stranded outside the active Git repository. Overall, the day was routine maintenance, but these new issues point to areas that may need attention in future updates.

#### 🐛 New Issues
- [#5385](https://github.com/github/copilot-cli/issues/5385) New issue `triage`
- [#5386](https://github.com/github/copilot-cli/issues/5386) A session created with `create_session` can't be resumed after `close_session` if the user had switched to it `triage`
- [#5384](https://github.com/github/copilot-cli/issues/5384) Session-state artifact storage (~/.copilot/session-state/<id>/files/) strands project deliverables outside the active Git repository `area:sessions` `area:tools`

### OpenCode (`anomalyco/opencode`)

**Stars:** 225,545 · **Open issues:** 4,153 · **Last push:** <1h ago

On November 9, 2026, there were no new releases for OpenCode; however, several important pull requests were merged, including enhancements like the new feature in core that specifies which credential changed during updates and a fix that addresses tail reads from the end of a file. Notable updates were made to strobe, including its documentation relocation to the Anomaly GitHub page. Among the newly reported issues, a critical bug was raised concerning the automatic compaction process during an active turn that can lead to a failure and abort the entire operation, highlighting ongoing challenges in functionality and performance.

#### ✅ Merged PRs
- [#62804](https://github.com/anomalyco/opencode/pull/62804) chore: let bun resolve strobe's Windows on Arm package
- [#62799](https://github.com/anomalyco/opencode/pull/62799) chore(perf): bench with strobe 0.23.0
- [#62762](https://github.com/anomalyco/opencode/pull/62762) feat(core): say which credential changed in credential.updated
- [#62706](https://github.com/anomalyco/opencode/pull/62706) docs: strobe moved to github.com/anomalyco/strobe
- [#62147](https://github.com/anomalyco/opencode/pull/62147) fix(core): tail reads from the end of a file and suggest close file names
- [#62790](https://github.com/anomalyco/opencode/pull/62790) fix(site): point the legal history's hosted agents entry at dev's commit
- [#62789](https://github.com/anomalyco/opencode/pull/62789) docs(legal): cover hosted agent sessions and their retention
- [#62567](https://github.com/anomalyco/opencode/pull/62567) fix(desktop): restore the review shortcut
- [#62780](https://github.com/anomalyco/opencode/pull/62780) Remove Frantic Ferret Free from docs
- [#62774](https://github.com/anomalyco/opencode/pull/62774) feat(core): frame Console channel follow-up wakes as maybe unrelated, and let watch take minutes

#### 🐛 New Issues
- [#62797](https://github.com/anomalyco/opencode/issues/62797) tui: Plan mode reminder persists after switching agents 💬9
- [#62800](https://github.com/anomalyco/opencode/issues/62800) desktop: fatal 'Expected a user-message timeline row' when a virtualized row changes type `reproduced` 💬3
- [#62765](https://github.com/anomalyco/opencode/issues/62765) no available models to use locally (all broken) `triaging` 💬3
- [#62803](https://github.com/anomalyco/opencode/issues/62803) Usage limit used in 2 minutes `pending close` `triaging` 💬2
- [#62792](https://github.com/anomalyco/opencode/issues/62792) V2 restart recovery drops the completion notice of an already-active subagent child `reproduced` 💬2
- [#62793](https://github.com/anomalyco/opencode/issues/62793) [FEATURE]: Make a subagent follow-up that leaves out sessionID fail instead of silently starting a new sub-agent 💬2
- [#62778](https://github.com/anomalyco/opencode/issues/62778) [Bug] Automatic compaction during an active turn can fail with 'Nothing to compact yet' and abort the whole turn (local providers) 💬2
- [#62772](https://github.com/anomalyco/opencode/issues/62772) [FEATURE]: Pin sessions in experimental Inbox `pending close` `triaging` 💬1
- [#62795](https://github.com/anomalyco/opencode/issues/62795) [BUG] Permission prompt does not clearly say it will launch a subagent 💬1
- [#62794](https://github.com/anomalyco/opencode/issues/62794) feat(experimental.generate): embeddings support for plugins 💬1
- [#62787](https://github.com/anomalyco/opencode/issues/62787) Subagent tool’s model-parameter instruction conflicts with model routing defined in AGENTS.md 💬1
- [#62783](https://github.com/anomalyco/opencode/issues/62783) time free plan `pending close` `triaging` 💬1
- [#62782](https://github.com/anomalyco/opencode/issues/62782) [FEATURE]: Redact secrets in "Export session" JSON by default 💬1
- [#62779](https://github.com/anomalyco/opencode/issues/62779) session: a suspended session never gets time_idle and stays 'running' in the sidebar forever `reproduced` 💬1
- [#62781](https://github.com/anomalyco/opencode/issues/62781) OpenCode Desktop 2.2.6 — No models available `pending close` `triaging` 💬1
- [#62777](https://github.com/anomalyco/opencode/issues/62777) plugins: experimental.session.compacting hook never fires 💬1
- [#62776](https://github.com/anomalyco/opencode/issues/62776) web: adding a new project for a dashed folder name falls back to "/" project 💬1
- [#62768](https://github.com/anomalyco/opencode/issues/62768) [FEATURE]:Request to localize the console page into Chinese. `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#62675](https://github.com/anomalyco/opencode/issues/62675) Loss of select ability (copy/paste) shortly after it was working - VSCode
- [#62213](https://github.com/anomalyco/opencode/issues/62213) Subagent writes denied: built-in tester policy 'edit * deny' is appended after agent rules, overriding agent allows (last-match-wins)
- [#47722](https://github.com/anomalyco/opencode/issues/47722) Desktop silently ignores failures when opening the default file manager
- [#62765](https://github.com/anomalyco/opencode/issues/62765) no available models to use locally (all broken)
- [#62683](https://github.com/anomalyco/opencode/issues/62683) Shell exits 64 when the Windows pwsh path contains a space
- [#62658](https://github.com/anomalyco/opencode/issues/62658) Вечно исчерпанный лимит
- [#62650](https://github.com/anomalyco/opencode/issues/62650) tui: which-key panel is documented but does nothing (ctrl+alt+k)
- [#62646](https://github.com/anomalyco/opencode/issues/62646) tui: allow reordering session tabs
- [#62632](https://github.com/anomalyco/opencode/issues/62632) TUI crash: undefined is not an object (evaluating 'e.length')
- [#62631](https://github.com/anomalyco/opencode/issues/62631) Error 400 when connecting OpenAI
- [#62626](https://github.com/anomalyco/opencode/issues/62626) opencode run "/command" ignores the command's agent: frontmatter
- [#62627](https://github.com/anomalyco/opencode/issues/62627) One malformed model entry makes every model in that provider unavailable to -m, with only a log warning
- [#62772](https://github.com/anomalyco/opencode/issues/62772) [FEATURE]: Pin sessions in experimental Inbox
- [#56056](https://github.com/anomalyco/opencode/issues/56056) desktop: review.toggle keybind Ctrl+Shift+R is intercepted by window reload

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 29,110 · **Open issues:** 2,135 · **Last push:** <1h ago

Today, Qwen Code released SDK TypeScript version 0.1.29 to address issues from the previous release process, bundling CLI version 0.26.9 and 0.26.8. Significant merged pull requests include improvements to the CI workflow, such as #16617, which routes web-shell visuals capture for fork PRs and #16643, which ensures a clean worktree checkout after multiple resets. Noteworthy new issues include #16672, which highlights a failure in the Main CI related to the Managed Agent gate, indicating ongoing challenges in maintaining CI stability. Additionally, the problem of Qwen Code desktop version 0.27 failing on Intel x64 Macs in issue #16683 is drawing attention.

#### 🚀 New Releases
- [sdk-typescript-v0.1.29](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.29) SDK TypeScript Release v0.1.29

#### ✅ Merged PRs
- [#16617](https://github.com/QwenLM/qwen-code/pull/16617) ci: route the web-shell visuals capture for fork PRs to the disposable pool
- [#16666](https://github.com/QwenLM/qwen-code/pull/16666) ci: drop the hz-5 leg that no runner can pick up
- [#16561](https://github.com/QwenLM/qwen-code/pull/16561) test(ci): keep the visuals publisher and the failure reporter off the pool
- [#16643](https://github.com/QwenLM/qwen-code/pull/16643) fix(serve): clean a worktree checkout after more than one reset
- [#16645](https://github.com/QwenLM/qwen-code/pull/16645) fix(web-shell): keep Open for managed artifacts the default panel cannot preview

#### 🐛 New Issues
- [#16672](https://github.com/QwenLM/qwen-code/issues/16672) Main CI failed: Managed Agent gate — HostedExtensionsIT.publishedExtensionsSurviveHarnessReplacementCancellationAndCloseOnMySql (+11 more) `status/needs-triage` `type/bug` 💬7
- [#16673](https://github.com/QwenLM/qwen-code/issues/16673) Main CI failed: Managed Agent gate — SurfaceAdmissionAcceptanceTest.belowReadAndBelowFamilyProbesFollowTheRuleClass(SurfaceRegistry)[2] (+1 more) `status/needs-triage` `type/bug` 💬3
- [#16675](https://github.com/QwenLM/qwen-code/issues/16675) Render Exec (code mode) tool calls as JavaScript instead of JSON `priority/P3` `type/feature-request` `category/ui` `scope/rendering` 💬3
- [#16692](https://github.com/QwenLM/qwen-code/issues/16692) GitHub channel: batch PR state watch through GraphQL `priority/P2` `type/feature-request` `category/performance` `need-discussion` 💬2
- [#16691](https://github.com/QwenLM/qwen-code/issues/16691) GitHub channel: use conditional requests for PR state watch polling `priority/P2` `type/feature-request` `category/performance` `need-discussion` 💬2
- [#16690](https://github.com/QwenLM/qwen-code/issues/16690) GitHub channel: surface API budget and protect the mention lane from watch spend `priority/P2` `type/feature-request` `category/integration` `need-discussion` 💬2
- [#16689](https://github.com/QwenLM/qwen-code/issues/16689) Web Shell clears the visible transcript while recovering the same session `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#16637](https://github.com/QwenLM/qwen-code/issues/16637) Web Shell: managed-storage artifact cards promise Preview but the default panel only shows metadata `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#16683](https://github.com/QwenLM/qwen-code/issues/16683) Qwen code desktop 0.27 fails on intel x64 Mac `status/need-information` `priority/P1` `type/bug` `category/platform` 💬2
- [#16634](https://github.com/QwenLM/qwen-code/issues/16634) ci: PRs targeting a non-main/release base run no Java test gate at all — green checks on stacked PRs are not health evidence `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬2
- [#16696](https://github.com/QwenLM/qwen-code/issues/16696) ci: self-hosted runner capacity shortfall driving flaky CI (hz2/hk4 overload measured) 💬1
- [#16680](https://github.com/QwenLM/qwen-code/issues/16680) Release Failed for v0.27.0-nightly.20261108.6c3d5355de on 2026-11-08 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#16670](https://github.com/QwenLM/qwen-code/issues/16670) Main CI failed: Managed Agent gate — ManagedSessionLifecycleTest.allowsOneLifecycleChangeAtATime `status/needs-triage` `type/bug` 💬1
- [#16678](https://github.com/QwenLM/qwen-code/issues/16678) Main CI failed: SDK Java — SurfaceAdmissionAcceptanceTest.belowReadAndBelowFamilyProbesFollowTheRuleClass(SurfaceRegistry)[2] (+13 more) `status/needs-triage` `type/bug`
- [#16671](https://github.com/QwenLM/qwen-code/issues/16671) Main CI failed: Managed Agent gate — LocalProcessExecutorTest.readerRejectionSpawnsNothingAndCapacityRecovers `status/needs-triage` `type/bug`
- [#16668](https://github.com/QwenLM/qwen-code/issues/16668) Main CI failed: Qwen Code CI — src/hooks/file-changed-watcher.test.ts > … > preserves dynamic temporary-file registrations and similarly nam… `status/needs-triage` `type/bug`
- [#16626](https://github.com/QwenLM/qwen-code/issues/16626) Main CI failed: Qwen Code CI — src/hooks/file-changed-watcher.test.ts > … > preserves static temporary-file registrations and similarly name… `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#16637](https://github.com/QwenLM/qwen-code/issues/16637) Web Shell: managed-storage artifact cards promise Preview but the default panel only shows metadata
- [#16031](https://github.com/QwenLM/qwen-code/issues/16031) Release Failed for v0.26.4-nightly.20261031.06c1f98971 on 2026-11-01
- [#16490](https://github.com/QwenLM/qwen-code/issues/16490) SDK Release Failed for v0.1.29 on 2026-11-06
- [#16397](https://github.com/QwenLM/qwen-code/issues/16397) Release Failed for v0.26.8 on 2026-11-05

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1245](https://github.com/anthropics/skills/pull/1245) Add notion-spec-to-implementation and quantitative-resume-auditor skills
- [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: avoid shell=True in with_server.py
- [#1792](https://github.com/anthropics/skills/pull/1792) fix(docx): report LibreOffice timeout as an error and verify the output

_Quiet today: Gemini CLI_

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 394,214 · **Open issues:** 7,846 · **Last push:** <1h ago

On November 9, 2026, OpenClaw released version 2026.11.2, emphasizing enhanced privacy measures by ensuring that configuration secrets, conversation content, and other sensitive data are excluded from diagnostic logs. Significant merged pull requests included fixes for workspace limit failures in desktop chat, issues with automatic node pairing in openclaw-id, and measures to avoid update failures during header snapshot cleanup. A notable new bug was reported regarding the UI chat composer not appearing in Safari 27.3, marking a critical compatibility issue that could affect user experience. Overall, the day was productive with important enhancements and fixes aimed at improving system stability and user privacy.

#### 🚀 New Releases
- [v2026.11.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.2) openclaw 2026.11.2

#### ✅ Merged PRs
- [#195507](https://github.com/openclaw/openclaw/pull/195507) fix(openclaw-id): allow one automatic node pairing per approved listing
- [#195516](https://github.com/openclaw/openclaw/pull/195516) fix: avoid full-history downloads when agents fetch fork PRs
- [#195403](https://github.com/openclaw/openclaw/pull/195403) fix: explain workspace limit failures in desktop chat
- [#195487](https://github.com/openclaw/openclaw/pull/195487) fix: avoid update failures when header snapshot cleanup is denied
- [#195483](https://github.com/openclaw/openclaw/pull/195483) fix(ui): keep plugin credential drafts out of IME commits
- [#195506](https://github.com/openclaw/openclaw/pull/195506) fix(ui): make Details motion proof independent of frame cadence
- [#195444](https://github.com/openclaw/openclaw/pull/195444) fix(ui): keep IME composition Enter from connecting from the login form
- [#195450](https://github.com/openclaw/openclaw/pull/195450) fix(github): expire cached detail reads on elapsed time
- [#195472](https://github.com/openclaw/openclaw/pull/195472) fix(active-memory): expire recall circuit breaker on elapsed time
- [#195176](https://github.com/openclaw/openclaw/pull/195176) fix: show compaction notices during native history preparation
- [#195458](https://github.com/openclaw/openclaw/pull/195458) fix(worktrees): stop retrying oversized archived workspace results
- [#195498](https://github.com/openclaw/openclaw/pull/195498) fix: avoid history downloads during agent Git probes
- [#195481](https://github.com/openclaw/openclaw/pull/195481) fix(browser): release console and predicate wait handles
- [#194288](https://github.com/openclaw/openclaw/pull/194288) docs: add 2026.11.2 PATCH release notes, mirror and navigation
- [#195460](https://github.com/openclaw/openclaw/pull/195460) docs(slash-commands): qualify /update notices to owner destinations
- [#195480](https://github.com/openclaw/openclaw/pull/195480) fix(ci): leave PostgreSQL shard 1 headroom for PG16 smoke
- [#195488](https://github.com/openclaw/openclaw/pull/195488) fix: reduce GitHub publication delays in fragmented clones
- [#195409](https://github.com/openclaw/openclaw/pull/195409) fix: avoid Doctor and Gateway failures during NFS snapshot cleanup
- [#195455](https://github.com/openclaw/openclaw/pull/195455) fix(channels): channels remove asks to disable an unknown channel before reporting it does not exist
- [#195459](https://github.com/openclaw/openclaw/pull/195459) fix(doctor): stop large transcript repairs exhausting the heap
- [#195447](https://github.com/openclaw/openclaw/pull/195447) fix(worktrees): worktrees remove and restore print only "The CLI command failed." for an unknown id
- [#195417](https://github.com/openclaw/openclaw/pull/195417) fix(scripts): allow tooling imports on stock Bun
- [#195418](https://github.com/openclaw/openclaw/pull/195418) fix(skills): reduce memory held by live search catalogs
- [#194902](https://github.com/openclaw/openclaw/pull/194902) fix: avoid slow follow-ups from native rollout size rotation
- [#195416](https://github.com/openclaw/openclaw/pull/195416) fix: recover releases from authenticated original receipts
- [#195433](https://github.com/openclaw/openclaw/pull/195433) fix(sandbox): prevent full-blob history downloads during commit fetches
- [#195441](https://github.com/openclaw/openclaw/pull/195441) fix(ui): stop incoming replies from overriding PageUp
- [#195430](https://github.com/openclaw/openclaw/pull/195430) fix(models): models list --provider prints only "The CLI command failed." for an unknown provider when the Gateway is down
- [#195437](https://github.com/openclaw/openclaw/pull/195437) fix(gateway): keep readiness green during bounded channel reconnects
- [#195443](https://github.com/openclaw/openclaw/pull/195443) fix(sandbox): avoid full template checkouts on source changes
- [#195405](https://github.com/openclaw/openclaw/pull/195405) test: make unspawned child fixtures portable across runtimes
- [#195424](https://github.com/openclaw/openclaw/pull/195424) fix(logging): retain kernel stall reports without CPU profiles
- [#195395](https://github.com/openclaw/openclaw/pull/195395) fix: avoid oversized cache restores for Apple assets
- [#195392](https://github.com/openclaw/openclaw/pull/195392) fix(ci): avoid SDK fanout for Windows test lists
- [#195434](https://github.com/openclaw/openclaw/pull/195434) test(ui): capture log deferral count atomically
- [#195382](https://github.com/openclaw/openclaw/pull/195382) fix(install): publish git checkouts without Node before it is provisioned
- [#195427](https://github.com/openclaw/openclaw/pull/195427) improve(ci): trim worker builds for PR smoke tests
- [#195419](https://github.com/openclaw/openclaw/pull/195419) improve(ci): speed up native plugin fixture assertions
- [#195406](https://github.com/openclaw/openclaw/pull/195406) fix(update): restore LaunchAgent registration after repair contention
- [#195413](https://github.com/openclaw/openclaw/pull/195413) fix: speed up GitHub publication in repositories with many sessions
- [#195412](https://github.com/openclaw/openclaw/pull/195412) improve(ci): trim worker builds for agentic tests
- [#191653](https://github.com/openclaw/openclaw/pull/191653) fix(gateway): give each utility fallback its own observer deadline
- [#195398](https://github.com/openclaw/openclaw/pull/195398) fix: startup waits for transient shared-state schema admission
- [#188553](https://github.com/openclaw/openclaw/pull/188553) fix(sessions): failed runs hide the provider safety-precaution explanation
- [#187769](https://github.com/openclaw/openclaw/pull/187769) fix(agents): llmman turn ends with no answer after a tool call
- [#190257](https://github.com/openclaw/openclaw/pull/190257) fix(cli): stop status/channels list/doctor emitting Matrix SDK deprecation warnings
- [#190282](https://github.com/openclaw/openclaw/pull/190282) fix(infra): name the lock path in gateway lock errors (companion to #159614)
- [#195380](https://github.com/openclaw/openclaw/pull/195380) fix: PowerShell completion fails with text after the cursor
- [#190299](https://github.com/openclaw/openclaw/pull/190299) fix(cli): explain unknown ids in devices reject and remove
- [#195383](https://github.com/openclaw/openclaw/pull/195383) fix(ci): keep OpenClaw ID node dialog body private
- [#195385](https://github.com/openclaw/openclaw/pull/195385) fix(test): wait for guest dictation catalog publication
- [#194896](https://github.com/openclaw/openclaw/pull/194896) fix: missing final answer after tool calls when reasoning is visible
- [#195356](https://github.com/openclaw/openclaw/pull/195356) fix(ui): prevent skill editor saves during IME composition
- [#195393](https://github.com/openclaw/openclaw/pull/195393) improve: reduce Responses replay bookkeeping allocations
- [#193685](https://github.com/openclaw/openclaw/pull/193685) fix(update): name and retry busy files during backup capture
- [#140424](https://github.com/openclaw/openclaw/pull/140424) fix(ios): refresh location status after authorization changes
- [#195308](https://github.com/openclaw/openclaw/pull/195308) fix(signal): give media sends time to finish uploading
- [#195387](https://github.com/openclaw/openclaw/pull/195387) fix: close abandoned subagent waits and preserve live waits on restart
- [#195381](https://github.com/openclaw/openclaw/pull/195381) chore(i18n): refresh native locales
- [#192339](https://github.com/openclaw/openclaw/pull/192339) fix(ios): highlight active sessions, gateway, and settings in sidebar
- [#195367](https://github.com/openclaw/openclaw/pull/195367) fix(test): prepare Skills dialog before selection checks
- [#195377](https://github.com/openclaw/openclaw/pull/195377) improve(ci): trim worker setup for selected tooling tests
- [#193956](https://github.com/openclaw/openclaw/pull/193956) fix(markdown): NaN chunk limit silently drops the whole outbound message
- [#195371](https://github.com/openclaw/openclaw/pull/195371) test(ui): fix warm reload history fixture ordering
- [#195355](https://github.com/openclaw/openclaw/pull/195355) fix: make comment and attachment cards easier to distinguish
- [#195348](https://github.com/openclaw/openclaw/pull/195348) fix(ui): preserve selected agent when opening new tabs
- [#195354](https://github.com/openclaw/openclaw/pull/195354) fix: keep ordinary subsessions out of Details
- [#195357](https://github.com/openclaw/openclaw/pull/195357) fix: stop retrying unavailable sandbox images during replay
- [#195331](https://github.com/openclaw/openclaw/pull/195331) fix(browser): prevent inherited jemalloc startup crashes
- [#195329](https://github.com/openclaw/openclaw/pull/195329) fix(agents): markdown chunkers silently drop messages for NaN limit
- [#195353](https://github.com/openclaw/openclaw/pull/195353) improve(ci): trim worker setup for selected Codex tests
- [#194775](https://github.com/openclaw/openclaw/pull/194775) fix(oc-path): preserve code examples when editing Markdown fields
- [#137462](https://github.com/openclaw/openclaw/pull/137462) perf(ios): skip unchanged completed chat bubbles
- [#195350](https://github.com/openclaw/openclaw/pull/195350) fix(release): defer ClawHub on authenticated core recovery
- [#195340](https://github.com/openclaw/openclaw/pull/195340) fix(test): avoid borrower errors in archive teardown
- [#195338](https://github.com/openclaw/openclaw/pull/195338) fix(ci): remove unused OpenClaw ID node exports
- [#195345](https://github.com/openclaw/openclaw/pull/195345) improve(ci): reduce worker setup for selected tests
- [#195335](https://github.com/openclaw/openclaw/pull/195335) fix(memory-wiki): generated links interpret titles as markup
- [#195326](https://github.com/openclaw/openclaw/pull/195326) fix(browser): snapshot queries miss equivalent Unicode text
- [#195341](https://github.com/openclaw/openclaw/pull/195341) fix: verify plugin releases from their qualified producer
- [#195339](https://github.com/openclaw/openclaw/pull/195339) perf(ci): avoid repeated repository scans in workflow tests
- [#181439](https://github.com/openclaw/openclaw/pull/181439) Refuse a Cloudflare Access client id typed as an iOS header name
- [#195337](https://github.com/openclaw/openclaw/pull/195337) chore(i18n): refresh native locales
- [#195333](https://github.com/openclaw/openclaw/pull/195333) fix: conversation disappears after refreshing a tool-heavy session
- [#195297](https://github.com/openclaw/openclaw/pull/195297) fix(agents): release completed capability read state
- [#195307](https://github.com/openclaw/openclaw/pull/195307) fix(agents): Gateway-method turns compact large-window sessions at the 200k default
- [#195334](https://github.com/openclaw/openclaw/pull/195334) fix(ci): restore qualified native Bun execution
- [#195322](https://github.com/openclaw/openclaw/pull/195322) fix(gateway): release stale configs from session projections
- [#195244](https://github.com/openclaw/openclaw/pull/195244) fix: Knowledge downloads fail for nested annotation citations
- [#195216](https://github.com/openclaw/openclaw/pull/195216) fix: keep agents usable after concurrent startup preparation
- [#195327](https://github.com/openclaw/openclaw/pull/195327) fix(ci): share setup for short Bun boundary runs
- [#195283](https://github.com/openclaw/openclaw/pull/195283) fix(process): trust redacted Darwin argv only for entitled system images
- [#195325](https://github.com/openclaw/openclaw/pull/195325) fix(ci): avoid legacy scans in current routing fixtures
- [#194007](https://github.com/openclaw/openclaw/pull/194007) feat: approve OpenClaw ID nodes from Access
- [#195290](https://github.com/openclaw/openclaw/pull/195290) fix(memory): adding one agent sweeps every agent database at once
- [#195317](https://github.com/openclaw/openclaw/pull/195317) fix(ci): avoid legacy scans in current completion fixtures
- [#195313](https://github.com/openclaw/openclaw/pull/195313) fix(ci): recognize the hook retention subprocess in Knip
- [#193982](https://github.com/openclaw/openclaw/pull/193982) feat(node-host): connect nodes over the OpenClaw ID tunnel
- [#194001](https://github.com/openclaw/openclaw/pull/194001) feat(openclaw-id): admit nodes over the tunnel with owner-approved pairing
- [#195314](https://github.com/openclaw/openclaw/pull/195314) fix(ios): reload composer capabilities when chat health recovers
- [#195291](https://github.com/openclaw/openclaw/pull/195291) fix(gateway): restarts defer every agent when unsealed databases are first in startup order
- [#192876](https://github.com/openclaw/openclaw/pull/192876) fix(ios): Talk start uses stale provider, transport or voice after Talk settings change
- [#191525](https://github.com/openclaw/openclaw/pull/191525) fix(ios): share to gateways using approved TLS pins and service headers
- [#194397](https://github.com/openclaw/openclaw/pull/194397) fix(ui): size and center OpenClaw ID sign-in popup
- [#195303](https://github.com/openclaw/openclaw/pull/195303) fix(sandbox): retain spawn broker in detached housekeeping
- [#193980](https://github.com/openclaw/openclaw/pull/193980) feat(openclaw-id): define accountless node enrollment
- [#195302](https://github.com/openclaw/openclaw/pull/195302) fix(ci): avoid legacy inventory in current recovery tests
- [#195240](https://github.com/openclaw/openclaw/pull/195240) chore(release): update appcast for 2026.11.2
- [#194927](https://github.com/openclaw/openclaw/pull/194927) fix(ui): keep reload explanation when toast assets retire
- [#195288](https://github.com/openclaw/openclaw/pull/195288) fix(ci): avoid a redundant runtime build in repair tests
- [#187610](https://github.com/openclaw/openclaw/pull/187610) fix(ios): chat stalls while typing and receiving background events
- [#195293](https://github.com/openclaw/openclaw/pull/195293) fix(worktrees): preserve warm checkouts across session modes
- [#195286](https://github.com/openclaw/openclaw/pull/195286) fix(hooks): prevent memory growth on unchanged transform reloads

#### 🐛 New Issues
- [#195192](https://github.com/openclaw/openclaw/issues/195192) [Bug]: Control UI chat composer missing in Safari 27.3 on every session (Chrome OK) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#195159](https://github.com/openclaw/openclaw/issues/195159) [Bug]: openclaw update retains runtimes on "Could not classify PID: working directory is unavailable" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:linked-pr-open` 💬4
- [#195362](https://github.com/openclaw/openclaw/issues/195362) Update failure: candidate-state-snapshot (2026.10.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#195172](https://github.com/openclaw/openclaw/issues/195172) Spend only on paths the user chose: one owner for who pays, with visibility and caps `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#195198](https://github.com/openclaw/openclaw/issues/195198) test: plugin-source-capture-directory caller-retention check fails on main (Node 24.22.1) `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬3
- [#195208](https://github.com/openclaw/openclaw/issues/195208) [Bug]: 2026.11.2: when two agents need startup inspection, the first one admitted fails with "prepared model runtime owner is stale after config publication" (every boot; doctor --fix doesn't help) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬3
- [#195116](https://github.com/openclaw/openclaw/issues/195116) Muse sessions show no token usage or context occupancy although MSP reports both `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#195202](https://github.com/openclaw/openclaw/issues/195202) [Android bug]: session long-press enters reorder mode; Archive is unavailable `P2` `impact:ux-friction` 💬3
- [#195187](https://github.com/openclaw/openclaw/issues/195187) [Feature]: Traverse eligible profiles after definitive subscription exhaustion before model fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#195177](https://github.com/openclaw/openclaw/issues/195177) [Feature]: Archive sessions from the mobile app `P3` `impact:ux-friction` 💬3
- [#195203](https://github.com/openclaw/openclaw/issues/195203) [Bug]: `config set agents.entries.<id>.model` still logs "codex failed during register: Runtime config is not prepared" (defaults path fixed by #177680) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#195316](https://github.com/openclaw/openclaw/issues/195316) Cold boot fails on 16-agent fleet: 'worker task capacity reached' during agent admission — tasks rejected instead of queued (2026.11.1) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#195482](https://github.com/openclaw/openclaw/issues/195482) Exec completion events are dropped when the session's own turn holds a plugin awaiting replacement `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#195396](https://github.com/openclaw/openclaw/issues/195396) [Bug]: 2026.11.x can't run with the state directory on NFS — Doctor and Gateway fail on SQLite snapshot cleanup (rmdir ENOTEMPTY) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#194978](https://github.com/openclaw/openclaw/issues/194978) Telegram package QA loses setup-stage diagnostics on transport timeout `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬2
- [#195133](https://github.com/openclaw/openclaw/issues/195133) Profile-free native Codex login does not supply its auth mode to model resolution `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬2
- [#195379](https://github.com/openclaw/openclaw/issues/195379) [Bug]: update repair stops managed LaunchAgent gateway, a detached gateway respawns and holds the state lease (GatewayStateOwnerContentionError, LaunchAgent left unloaded) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#195384](https://github.com/openclaw/openclaw/issues/195384) [Feature]: Opt-in for trusted hook mappings to carry the agent's normal automations authority 💬2
- [#195222](https://github.com/openclaw/openclaw/issues/195222) Gateway aborts (exit 134) on a zstd "close before init" assertion when a compressed transcript archive read fails early `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#195364](https://github.com/openclaw/openclaw/issues/195364) Gateway main heap grows with session length: prompt-cache `trackers` keep a fingerprint of every message for up to 512 sessions `bug` `bug:behavior` `P2` `impact:other` 💬2
- [#195361](https://github.com/openclaw/openclaw/issues/195361) Compaction parses a session's entire transcript onto the main thread, so a long-lived session lifts the gateway heap by about 1 GB on every compaction `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#195336](https://github.com/openclaw/openclaw/issues/195336) Provider requests fail with UND_ERR_CONNECT_TIMEOUT on hosts without IPv6 when the event loop stalls past the 300 ms Happy Eyeballs timer `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#195328](https://github.com/openclaw/openclaw/issues/195328) Subagent announce/settle runs drop skill_library from the deferred tool directory, breaking the parent's prompt cache `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#195306](https://github.com/openclaw/openclaw/issues/195306) Parallel source checkouts on one profile block each other's rebuilds on the Gateway service lifecycle lock `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#195311](https://github.com/openclaw/openclaw/issues/195311) [Bug]: Generated-media completion retries terminal results beyond dedupe-cache lifetime `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#195272](https://github.com/openclaw/openclaw/issues/195272) [Bug]: memory-core: adding one agent restarts standing-intent maintenance, which sweeps every agent database at once `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#195269](https://github.com/openclaw/openclaw/issues/195269) [Bug]: Gateway startup defers every agent when the first agent databases in target order have no clean-close seal `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#195265](https://github.com/openclaw/openclaw/issues/195265) [Bug]: First config reload after a gateway start marks every agent's model runtime stale (auth snapshot captured in two shapes) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#195128](https://github.com/openclaw/openclaw/issues/195128) [Bug]: codex capture build fails with EEXIST on dangling platform-package junction (`@openai/codex-win32-x64`, package-2 -> package-1) - existsSync-guarded symlink site `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#195279](https://github.com/openclaw/openclaw/issues/195279) Background exec completion wake fails with "operator execution authority is no longer active" after a sessions_send-started turn ends `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬2
- [#195281](https://github.com/openclaw/openclaw/issues/195281) Update failure: package-update (2026.10.10) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#195253](https://github.com/openclaw/openclaw/issues/195253) Update failure: package-update (2026.10.10) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#195207](https://github.com/openclaw/openclaw/issues/195207) Signal message received just before a channel-restarting config reload is silently dropped (reply_operation_aborted) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#195071](https://github.com/openclaw/openclaw/issues/195071) [Feature]: Target-bound least-privilege backup outcome reporting `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#195188](https://github.com/openclaw/openclaw/issues/195188) [Feature]: Opt-in proactive quota-aware rotation between authorized subscription profiles `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:auth-provider` 💬2
- [#195072](https://github.com/openclaw/openclaw/issues/195072) Muse quota failures drop MSP's typed quota signal, so the user gets no reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#195127](https://github.com/openclaw/openclaw/issues/195127) [Bug]: fs-safe 'copy path changed during operation' - nondeterministic plugin doctor-contract load failure during gateway transitions (Windows user path with 8.3 shortname; trigger isolated: 8.3-alias TEMP/TMP spelling) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#195059](https://github.com/openclaw/openclaw/issues/195059) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#195031](https://github.com/openclaw/openclaw/issues/195031) [Bug]: Knowledge keyword search distinguishes canonically equivalent Greek spellings `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#195017](https://github.com/openclaw/openclaw/issues/195017) [Feature]: Routed Discord and Signal reaction conversations with durable reply receipts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#195517](https://github.com/openclaw/openclaw/issues/195517) Agents: a shared OAuth account's token rotation fails other in-flight runs with 401 `no-stale` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#195521](https://github.com/openclaw/openclaw/issues/195521) Muse: slow Muse starts are reported as a missing install `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195536](https://github.com/openclaw/openclaw/issues/195536) Workers: sessions hosted on a node silently lose exec when the exec host is node 💬1
- [#195520](https://github.com/openclaw/openclaw/issues/195520) ACPX: the stalled-run watchdog stops long ACP turns after about six minutes `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195534](https://github.com/openclaw/openclaw/issues/195534) Agents: host seeds are not bounded by the model window when no budget is set `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195532](https://github.com/openclaw/openclaw/issues/195532) Agents: small-context models get tool results sized for a 200k window when no context budget is set `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195535](https://github.com/openclaw/openclaw/issues/195535) Node host: a node command cancelled during reconnect cleanup still runs `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195531](https://github.com/openclaw/openclaw/issues/195531) Discord: a changed command is not recreated when PATCH finds it already gone `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195530](https://github.com/openclaw/openclaw/issues/195530) Discord: the gateway reconnects a healthy socket when Discord requests a heartbeat near the interval `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195527](https://github.com/openclaw/openclaw/issues/195527) Agents: native-owned harness models always get the 200k default context window `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195529](https://github.com/openclaw/openclaw/issues/195529) Discord: interaction callbacks are held behind a global rate-limit pause `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195528](https://github.com/openclaw/openclaw/issues/195528) Sessions: another agent's config change refuses unscheduled session events `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195526](https://github.com/openclaw/openclaw/issues/195526) Muse: Muse sessions are sized at 200k instead of the native 1M window `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195289](https://github.com/openclaw/openclaw/issues/195289) [Bug]: Italian companion agent drafts messages after explicit intent clarification (Ollama qwen2.5:7b) `P3` `impact:ux-friction` 💬1
- [#195144](https://github.com/openclaw/openclaw/issues/195144) [Feature]: Standard Compute provider docs page (OpenAI-compatible gateway) `P3` `impact:ux-friction` 💬1
- [#195525](https://github.com/openclaw/openclaw/issues/195525) Muse: Muse follow-up runs are killed 5 minutes after the last OpenClaw turn `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195524](https://github.com/openclaw/openclaw/issues/195524) Muse: one stuck Muse turn fails every session on the same agent `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#195523](https://github.com/openclaw/openclaw/issues/195523) [Bug]: an agent removed from config keeps its database open, agents.delete then refuses it, and removing its dir SIGKILLs the Gateway `clawsweeper:intake:bug` 💬1
- [#195519](https://github.com/openclaw/openclaw/issues/195519) Skill Workshop: agents configured with no skills still pay for background experience reviews `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195518](https://github.com/openclaw/openclaw/issues/195518) Muse: the stalled-run watchdog stops long Muse turns after about six minutes `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195511](https://github.com/openclaw/openclaw/issues/195511) [Docs Bug]: Spawned child session key is unclear `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195509](https://github.com/openclaw/openclaw/issues/195509) [Bug]: Talk realtime consults over the prompt budget are windowed but never compacted, so every consult misses the prompt cache `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195502](https://github.com/openclaw/openclaw/issues/195502) [Bug]: Doctor's cron inference-account check copies the agent database about three times per automation, so updates time out on large state `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195501](https://github.com/openclaw/openclaw/issues/195501) Gateway: a fractional idle time in presence stops macOS and iOS apps from connecting `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195494](https://github.com/openclaw/openclaw/issues/195494) [Bug]: Control UI chat drops the backslash from Windows paths before punctuation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195497](https://github.com/openclaw/openclaw/issues/195497) Memory growth to ~3G in 17h on gateway process (v2026.11.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#195449](https://github.com/openclaw/openclaw/issues/195449) [Docs Bug]: Slash-command reference promises same-chat update notices for ineligible destinations `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195492](https://github.com/openclaw/openclaw/issues/195492) Windows: successful empty listener census can be mistaken for a free port `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195491](https://github.com/openclaw/openclaw/issues/195491) [Bug]: infer model run (local transport) republishes workspace plugins on every call; slow and times out (2026.11.1, macOS) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#195477](https://github.com/openclaw/openclaw/issues/195477) [Bug]: Provider discovery skipped when SDK module is not fully loaded `P2` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#195478](https://github.com/openclaw/openclaw/issues/195478) Running turns pin every plugin in their generation, so config writes wait behind turns that never use the replaced plugin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195462](https://github.com/openclaw/openclaw/issues/195462) [Bug]: Feishu streaming cards downgraded to 'upgrade client' placeholder on latest iOS 8.5.13 - replies invisible `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` `P0` 💬1
- [#195461](https://github.com/openclaw/openclaw/issues/195461) [Bug]: Android chat keeps answered question cards pinned at the bottom, so they pile up above the composer `P2` `maturity:stable` `impact:ux-friction` 💬1
- [#195456](https://github.com/openclaw/openclaw/issues/195456) [Bug]: Android composer chip shows the raw model id when the catalog is cleared `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195436](https://github.com/openclaw/openclaw/issues/195436) [Bug]: Native completion retirement emits 11 undelivered notices after successful parent final (2026.11.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#195431](https://github.com/openclaw/openclaw/issues/195431) [Bug]: claude-cli session stays broken until Gateway restart after a live session cleanup failure `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#195432](https://github.com/openclaw/openclaw/issues/195432) [Bug]: /openclaw doctor with warnings is retried as a failed Telegram update and blocks the chat for up to 24 hours `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195366](https://github.com/openclaw/openclaw/issues/195366) [Bug]: install.sh --install-method git fails on hosts without Node: clone publish step runs `node` before ensure_node `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195425](https://github.com/openclaw/openclaw/issues/195425) [Bug]: Codex credential reader cleanup times out on busy Linux hosts (2 s containment budget) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#195259](https://github.com/openclaw/openclaw/issues/195259) [Bug]: OpenRouter BYOK responses record usage.cost.total = 0 while component costs are priced correctly `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#195414](https://github.com/openclaw/openclaw/issues/195414) [Bug]: Memory format-upgrade rebuild never completes after 2026.11.2 — `worker task capacity reached` (Gateway and offline CLI) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#195401](https://github.com/openclaw/openclaw/issues/195401) [Bug]: `browser open` fails with "Session not found: openclaw-child-N" when a page's iframe or worker detaches during navigation (extension relay) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#195113](https://github.com/openclaw/openclaw/issues/195113) [Feature]: Beam support for Grok Bot conversations `P3` 💬1
- [#195399](https://github.com/openclaw/openclaw/issues/195399) Update failure: plugin-target-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#195397](https://github.com/openclaw/openclaw/issues/195397) Gateway-started runs cannot declare a reply optional; an explicit NO_REPLY after tool calls is replaced by the settled-turn fallback text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195394](https://github.com/openclaw/openclaw/issues/195394) [Feature]: Signal link previews from caller-supplied per-message metadata `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195284](https://github.com/openclaw/openclaw/issues/195284) Signal: large media sends are reported as failed after 10 s but still delivered `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195391](https://github.com/openclaw/openclaw/issues/195391) [Bug]: git install on a 4 GB host fails late at "Building OpenClaw" (needs ~4.7 GB); no memory preflight or documented requirement `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195386](https://github.com/openclaw/openclaw/issues/195386) [Bug]: Tables overflow chat bubbles `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#195388](https://github.com/openclaw/openclaw/issues/195388) [Feature]: Opt-in for trusted hook mappings to carry the agent's normal automations authority `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#195375](https://github.com/openclaw/openclaw/issues/195375) [Bug]: [Bug]: Script-only cron MCP writer initialization fails with ECONNRESET while interactive MCP works `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#195294](https://github.com/openclaw/openclaw/issues/195294) chunkMarkdownText/chunkByNewline: NaN chunk limit silently drops the whole outbound message `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195346](https://github.com/openclaw/openclaw/issues/195346) [Bug]: Completed subagent results re-inject every requester turn — hasOutstandingCompletion wake check short-circuits before delivery-status `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#195349](https://github.com/openclaw/openclaw/issues/195349) [Bug]: Apple Watch Talk to Claw has no English dictation; keyboard space key shows "espacio" with English selected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#195330](https://github.com/openclaw/openclaw/issues/195330) Silent-reply handling: backticked NO_REPLY leaks as text; silent reply on claude-cli 'required' runs triggers empty_response failover `P2` `impact:ux-friction` 💬1
- [#195052](https://github.com/openclaw/openclaw/issues/195052) [Bug]: Knowledge nested annotation evidence is readable but original download is rejected `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195324](https://github.com/openclaw/openclaw/issues/195324) Proposal: report outbound delivery and read receipts (Signal receiptMessage is currently dropped) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195323](https://github.com/openclaw/openclaw/issues/195323) [Bug]: Secondary agent DB re-degrades after every gateway restart: 'prepared model runtime publication was superseded for agents/main/agent' `P1` `impact:session-state` 💬1
- [#195321](https://github.com/openclaw/openclaw/issues/195321) bug(webchat): detached Skill Workshop notice (💾 Learned) overwrites foreground assistant reply in Control UI WebChat `P2` `impact:ux-friction` 💬1
- [#195318](https://github.com/openclaw/openclaw/issues/195318) [2026.9.8] Preserved legacy Codex ownership mismatch keeps readiness pending; repair record stranded at completionCache after service restoration `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#195309](https://github.com/openclaw/openclaw/issues/195309) `openclaw memory status` refusal tells operators to "fix authentication" although the Gateway is healthy and owns the state (by design) `P3` `impact:ux-friction` 💬1
- [#195300](https://github.com/openclaw/openclaw/issues/195300) Native-owned harness models always get the 200k default context window `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#195054](https://github.com/openclaw/openclaw/issues/195054) fix(agents): process log action falsely reports no output for negative limit `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195280](https://github.com/openclaw/openclaw/issues/195280) Signal: rate-limit and captcha send failures lose the retry time and challenge token `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195276](https://github.com/openclaw/openclaw/issues/195276) [Feature]: Addressable Control UI announcement inboxes for automation and agent run results `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#195274](https://github.com/openclaw/openclaw/issues/195274) [Feature]: Config-enforced per-agent browser profile binding `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#195266](https://github.com/openclaw/openclaw/issues/195266) Sub-agent spawn on a Codex-harness agent always fails: "Session capability metadata requires worker preparation" (2026.11.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#195263](https://github.com/openclaw/openclaw/issues/195263) Signal: an edited message runs a second agent turn instead of being treated as an edit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195270](https://github.com/openclaw/openclaw/issues/195270) [Bug]: Usage cost projection refreshes every agent at once; at a few hundred agents it overflows the refresh lane and starves agent admission `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195267](https://github.com/openclaw/openclaw/issues/195267) [Bug]: iOS oversized video rejection is easy to miss, so Send unexpectedly sends text only `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#195256](https://github.com/openclaw/openclaw/issues/195256) [Bug]: Usage footer sent as a standalone message when the final reply is deduped against a message-tool send `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195260](https://github.com/openclaw/openclaw/issues/195260) [Bug]: every config reload keeps the replaced config alive on stable 2026.11.x; request #189513 backport to 2026.11.5 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#195257](https://github.com/openclaw/openclaw/issues/195257) claude-cli: managed turns disable Claude Code hooks since 2026.10.7, and authorized before_prompt_build phase never runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#195247](https://github.com/openclaw/openclaw/issues/195247) [Bug]: Ollama models show "0 of 4 available" despite provider being ready and successful inference `bug` `no-stale` `regression` `P2` 💬1
- [#195121](https://github.com/openclaw/openclaw/issues/195121) Gateway drops a queued run's lifecycle start, then reports a false agent "seq gap" ("Event stream interrupted" on Android) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195080](https://github.com/openclaw/openclaw/issues/195080) Muse turns hang until timeout when Muse asks a request_user_input question `no-stale` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#195223](https://github.com/openclaw/openclaw/issues/195223) Android: a file over 8 MiB fails with a generic "Could not stage an attachment" notice that doesn't mention the size limit `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195209](https://github.com/openclaw/openclaw/issues/195209) upload rejects files in subdirectories of media/inbound `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195190](https://github.com/openclaw/openclaw/issues/195190) 2026.10.7: restart-safe refusal on claude-cli silently fails over to a metered API-key fallback (follow-up to #184924) `P2` `impact:auth-provider` 💬1
- [#195184](https://github.com/openclaw/openclaw/issues/195184) Native harness rate-limit errors cannot carry a reset time to the user `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195181](https://github.com/openclaw/openclaw/issues/195181) Delivery mirror warning drops err.cause, so writer-claim refusals (session-rebound / entry-missing / fence mismatch) are indistinguishable in logs 💬1
- [#194974](https://github.com/openclaw/openclaw/issues/194974) [Docs Bug]: Clarify Knowledge temporal kind versus search record kind `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195149](https://github.com/openclaw/openclaw/issues/195149) [Bug]: Talk settings retain an unsupported transport after provider change `P2` `impact:ux-friction` 💬1
- [#195170](https://github.com/openclaw/openclaw/issues/195170) [Bug]: cancelling a subagent run leaves its background exec commands running (cascadeKilled: 0) `P2` `impact:other` 💬1
- [#195157](https://github.com/openclaw/openclaw/issues/195157) [Bug]: sessions_send reports a delivery failure for a delivery that succeeded (terminal reply timeout) 💬1
- [#195151](https://github.com/openclaw/openclaw/issues/195151) [Bug]: boot-md startup task fails on every PC boot `bug` `regression` `P2` `impact:other` 💬1
- [#195125](https://github.com/openclaw/openclaw/issues/195125) Stream final assistant text for model-only (modelRun: true) agent turns to session subscribers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195101](https://github.com/openclaw/openclaw/issues/195101) Test maintenance: consolidate Gateway terminal-result cases `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#195109](https://github.com/openclaw/openclaw/issues/195109) [Bug]: doctor prints three core-originated DEP_PLUGIN_SDK warnings (approval capability, auth profile store, coding tools) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195103](https://github.com/openclaw/openclaw/issues/195103) Consolidate updater diagnostic line buffering `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#195100](https://github.com/openclaw/openclaw/issues/195100) Muse delivers a cut-off partial reply as a complete answer `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195074](https://github.com/openclaw/openclaw/issues/195074) [Bug]: Signal quotes lose native mention recipients in agent context `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195066](https://github.com/openclaw/openclaw/issues/195066) [Bug]: ordinary message tool drops accepted message IDs from partial-delivery errors `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195060](https://github.com/openclaw/openclaw/issues/195060) [Bug]: Knowledge records returns a continuation offset rejected by its own input schema `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195053](https://github.com/openclaw/openclaw/issues/195053) [Bug]: acpx plugin rejects argv while acpx CLI requires it on Windows — custom ACP agents unusable `P2` `impact:other` 💬1
- [#195036](https://github.com/openclaw/openclaw/issues/195036) [Bug]: Signal quoted UUID authors are displayed as fabricated phone numbers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195035](https://github.com/openclaw/openclaw/issues/195035) [Bug]: Signal quote context drops the original message ID `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195030](https://github.com/openclaw/openclaw/issues/195030) [Bug]: claude-cli conversation wedged after in-process Gateway restart: turns hang until full process restart (stuck recovery released=0) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#195013](https://github.com/openclaw/openclaw/issues/195013) [Bug]: Knowledge counts inert image-alt wikilinks as navigation edges `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195007](https://github.com/openclaw/openclaw/issues/195007) Matrix: commands.ownerAllowFrom in the documented "matrix:user:@user:server" form matches nobody and silently blocks /acp for everyone `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#194988](https://github.com/openclaw/openclaw/issues/194988) [Docs Bug]: Containerized gateway docs describe host-centric networking only — missing host-model-server reachability, bind-mode pitfalls, and rootless Podman troubleshooting `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#194980](https://github.com/openclaw/openclaw/issues/194980) Native Codex oauth/token without a host profile does not forward unlisted models `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195550](https://github.com/openclaw/openclaw/issues/195550) Signal: inbound text styles are lost before the agent sees the message
- [#195549](https://github.com/openclaw/openclaw/issues/195549) Signal: the long-text attachment is treated as media
- [#195547](https://github.com/openclaw/openclaw/issues/195547) Signal: let the agent edit its earlier messages in place
- [#195545](https://github.com/openclaw/openclaw/issues/195545) macOS: a malformed app-control frame waits 15 s instead of failing fast
- [#195544](https://github.com/openclaw/openclaw/issues/195544) macOS: wide-area discovery corrupts TXT values with quotes or backslashes
- [#195543](https://github.com/openclaw/openclaw/issues/195543) Apple apps: AnyCodable throws when encoding native UInt, Int32 or Float
- [#195541](https://github.com/openclaw/openclaw/issues/195541) Apple apps: stopping gateway discovery shows Searching and repopulates the list
- [#195540](https://github.com/openclaw/openclaw/issues/195540) Apple apps: Bonjour names with non-ASCII characters are garbled
- [#195539](https://github.com/openclaw/openclaw/issues/195539) Nodes: system.which returns directories and misses Windows names with an extension
- [#195538](https://github.com/openclaw/openclaw/issues/195538) Gateway client: a backward clock step keeps dead node connections open
- [#195537](https://github.com/openclaw/openclaw/issues/195537) Nodes: exec on a node host loses the end of long command output

#### 🔒 Closed Issues
- [#67413](https://github.com/openclaw/openclaw/issues/67413) Feature Request: Per-agent dreaming configuration
- [#53408](https://github.com/openclaw/openclaw/issues/53408) [Bug]: Write/exec tool parameters silently dropped after long conversations (content/command missing)
- [#165421](https://github.com/openclaw/openclaw/issues/165421) [Bug]: Control UI context window widget renders stale maxTokens (128k) after model switch / restart
- [#55372](https://github.com/openclaw/openclaw/issues/55372) Feature request: config option to disable restart sentinel notification
- [#131150](https://github.com/openclaw/openclaw/issues/131150) Slack DMs silently dropped for all accounts after gateway restart: prepareSlackMessage returns null pre-gate; degraded installation identity (multi-account socket mode)
- [#137188](https://github.com/openclaw/openclaw/issues/137188) [Bug]: Stale session progress card renders with a live spinner during subsequent runs — board widget never derives run activity
- [#126727](https://github.com/openclaw/openclaw/issues/126727) [Feature]: Provider-aware concurrency/backpressure for native subagents
- [#139361](https://github.com/openclaw/openclaw/issues/139361) gateway/slack: healthState removal silently broke external health monitors; incident exposed missing ingress backpressure visibility and mid-turn kill replay
- [#163544](https://github.com/openclaw/openclaw/issues/163544) [Bug]: Web Push notifications are silent on macOS because service worker omits silent: false
- [#143685](https://github.com/openclaw/openclaw/issues/143685) [Bug]: Failed isolated sandbox runs leave created containers running until prune
- [#166486](https://github.com/openclaw/openclaw/issues/166486) [Bug]: decision_evaluate rejects `score` questions — `criteria` array fails local schema validation
- [#155953](https://github.com/openclaw/openclaw/issues/155953) [Bug]: [UX] Sidebar information architecture: "Home" labeling, and "Groups" backed by three unrelated mechanisms
- [#140053](https://github.com/openclaw/openclaw/issues/140053) session.reset daily mode: freshness check skipped on several post-boundary messages, reset fires mid-conversation
- [#134498](https://github.com/openclaw/openclaw/issues/134498) Delivered reply is lost from transcript when session key rebounds before mirror append
- [#133065](https://github.com/openclaw/openclaw/issues/133065) [Feature]: Show active subscription blocks in models auth list
- [#130479](https://github.com/openclaw/openclaw/issues/130479) [Bug]: Telegram DM replies delivered twice — single model.completed, but two session message nodes (second has UUID id vs runtime's normal short-hex ids)
- [#128932](https://github.com/openclaw/openclaw/issues/128932) [Bug]: Anthropic AskUserQuestion answers collapse when two questions share identical text
- [#168744](https://github.com/openclaw/openclaw/issues/168744) agent exec with local Ollama times out after tool catalog; direct/gateway inference succeeds (2026.9.5)
- [#168572](https://github.com/openclaw/openclaw/issues/168572) [bug] WhatsApp: native image loader rejects staged inbound media — 'Local media path is not under an allowed directory' (path-not-allowed), 6 failed retries
- [#168523](https://github.com/openclaw/openclaw/issues/168523) Approval requests from headless/nested agent exec runs never render; empty self-reply user_request events
- [#166909](https://github.com/openclaw/openclaw/issues/166909) Control UI: channel-origin messages from the owner render as a separate person; voice messages render as an empty bubble
- [#166681](https://github.com/openclaw/openclaw/issues/166681) [Feature]: Group disposable workers by allocation-owned execution host (design request)
- [#156229](https://github.com/openclaw/openclaw/issues/156229) [Bug]: A 124-second preparation pause coincides with heartbeat overrun and channel reconnect
- [#156228](https://github.com/openclaw/openclaw/issues/156228) [Bug]: Two requests show 66 to 151 seconds in aggregate system-prompt preparation
- [#168352](https://github.com/openclaw/openclaw/issues/168352) Regression: stdio MCP servers orphaned (reparented to PID 1) on reconnect since 2026.9.6 (spawn-broker/service-child-relay)
- [#167927](https://github.com/openclaw/openclaw/issues/167927) [Bug]: TUI client never receives approval cards that Control UI webapp and Telegram correctly receive for the same session
- [#167834](https://github.com/openclaw/openclaw/issues/167834) [Feature]: User-editable per-channel delivery-format template (override/extend built-in inboundFormattingHints)
- [#194170](https://github.com/openclaw/openclaw/issues/194170) [Bug]: Windows plugin captures duplicate ~380,000 host-package files per Gateway restart
- [#167786](https://github.com/openclaw/openclaw/issues/167786) [Feature]: Cache-TTL soft-trim notice should say it is context pruning and that the result can be re-fetched
- [#165234](https://github.com/openclaw/openclaw/issues/165234) [Feature]: Stop committing Control UI translation memory (*.tm.jsonl) to main history
- [#195159](https://github.com/openclaw/openclaw/issues/195159) [Bug]: openclaw update retains runtimes on "Could not classify PID: working directory is unavailable"
- [#195208](https://github.com/openclaw/openclaw/issues/195208) [Bug]: 2026.11.2: when two agents need startup inspection, the first one admitted fails with "prepared model runtime owner is stale after config publication" (every boot; doctor --fix doesn't help)
- [#168645](https://github.com/openclaw/openclaw/issues/168645) sessions_spawn runtime="acp" via an agents.entries.*.runtime.type="acp" entry fails dispatch: child key minted from harness id, not the config agent id
- [#168628](https://github.com/openclaw/openclaw/issues/168628) backup create: let operators (or plugins) mark folders inside agent workspaces as regenerable, such as node_modules
- [#168542](https://github.com/openclaw/openclaw/issues/168542) [Feature]: refine compact iOS sidebar presentation
- [#168541](https://github.com/openclaw/openclaw/issues/168541) [Feature]: Recoverable operation receipts for destructive transcript mutations
- [#168407](https://github.com/openclaw/openclaw/issues/168407) [Bug]: Isolated cron jobs with delivery "none" lose subagent completions (no owner; deleteAfterRun aborts the fallback turn)
- [#168386](https://github.com/openclaw/openclaw/issues/168386) [Feature]: Sidebar footer user button looks like a static label; add a dropdown affordance
- [#168357](https://github.com/openclaw/openclaw/issues/168357) Docs: document AtMem managed memory setup
- [#168339](https://github.com/openclaw/openclaw/issues/168339) [Bug]: Blocked subagent-completion notices run as their own requester turns since #167113 and stay queued after the settle wake delivers
- [#168334](https://github.com/openclaw/openclaw/issues/168334) [Bug]: recurring --trigger-once jobs are never deleted with --delete-after-run
- [#168332](https://github.com/openclaw/openclaw/issues/168332) [Bug]: claude-cli runs never produce browser tab cards, so the Browser panel cannot show the agent's tab
- [#168323](https://github.com/openclaw/openclaw/issues/168323) Supported plugin contract for recoverable isolated agent calls and result acknowledgment
- [#168046](https://github.com/openclaw/openclaw/issues/168046) Memory dreaming promotion runs nightly and writes a stub for all three phases
- [#167967](https://github.com/openclaw/openclaw/issues/167967) [Bug]: Workboard keyed create silently reuses divergent payload, lacks created discriminator and durable cross-writer uniqueness contract (2026.9.9)
- [#167956](https://github.com/openclaw/openclaw/issues/167956) [Feature]: Talk to Claw on Apple Watch should use an installed Enhanced/Premium system voice instead of the default
- [#167920](https://github.com/openclaw/openclaw/issues/167920) [Bug]: model.usage silently fails to fire for continuation steps within multi-step tool-use turns — correlates with messages.groupChat.visibleReplies mode
- [#167831](https://github.com/openclaw/openclaw/issues/167831) iOS sidebar lacks session and navigation actions available in the Control UI
- [#167787](https://github.com/openclaw/openclaw/issues/167787) [Feature]: One long model request should not make cache-TTL pruning trim the running turn's tool results
- [#167777](https://github.com/openclaw/openclaw/issues/167777) `gateway restart` returns "safe restart requested; will restart momentarily (async)" with no status, so tooling cannot tell when the restart actually completes
- [#167772](https://github.com/openclaw/openclaw/issues/167772) before_agent_finalize: honour `eligibleTriggers`, and only hold a run's replies when an eligible handler can revise it
- [#195177](https://github.com/openclaw/openclaw/issues/195177) [Feature]: Archive sessions from the mobile app
- [#195396](https://github.com/openclaw/openclaw/issues/195396) [Bug]: 2026.11.x can't run with the state directory on NFS — Doctor and Gateway fail on SQLite snapshot cleanup (rmdir ENOTEMPTY)
- [#195379](https://github.com/openclaw/openclaw/issues/195379) [Bug]: update repair stops managed LaunchAgent gateway, a detached gateway respawns and holds the state lease (GatewayStateOwnerContentionError, LaunchAgent left unloaded)
- [#195384](https://github.com/openclaw/openclaw/issues/195384) [Feature]: Opt-in for trusted hook mappings to carry the agent's normal automations authority
- [#192255](https://github.com/openclaw/openclaw/issues/192255) [Bug]: iOS sidebar does not highlight active All Sessions, Gateway, or Settings destinations
- [#193928](https://github.com/openclaw/openclaw/issues/193928) chunkText/chunkTextRanges: NaN chunk limit silently drops the whole outbound message
- [#195364](https://github.com/openclaw/openclaw/issues/195364) Gateway main heap grows with session length: prompt-cache `trackers` keep a fingerprint of every message for up to 512 sessions
- [#181418](https://github.com/openclaw/openclaw/issues/181418) [Feature]: iOS custom headers should guide Cloudflare Access service tokens and refuse a Client ID typed as a header name
- [#194705](https://github.com/openclaw/openclaw/issues/194705) [Feature]: List NagaAI in the provider catalog
- [#195128](https://github.com/openclaw/openclaw/issues/195128) [Bug]: codex capture build fails with EEXIST on dangling platform-package junction (`@openai/codex-win32-x64`, package-2 -> package-1) - existsSync-guarded symlink site
- [#194082](https://github.com/openclaw/openclaw/issues/194082) [Bug]: macOS gateway stop refuses when successful launchctl output omits coalition despite valid native membership
- [#193789](https://github.com/openclaw/openclaw/issues/193789) [Bug]: iOS Sessions presents an incomplete list as complete after a later-page failure
- [#186001](https://github.com/openclaw/openclaw/issues/186001) [Bug]: iOS photos.latest silently drops photos beyond a 340 KiB reply budget (limit: 2 returns 1)
- [#195072](https://github.com/openclaw/openclaw/issues/195072) Muse quota failures drop MSP's typed quota signal, so the user gets no reply
- [#195127](https://github.com/openclaw/openclaw/issues/195127) [Bug]: fs-safe 'copy path changed during operation' - nondeterministic plugin doctor-contract load failure during gateway transitions (Windows user path with 8.3 shortname; trigger isolated: 8.3-alias TEMP/TMP spelling)
- [#162784](https://github.com/openclaw/openclaw/issues/162784) [Bug]: iOS Talk hard-codes a 30s run timeout (runTimeoutMs: 30000) that kills normal agent turns and every fallback
- [#194737](https://github.com/openclaw/openclaw/issues/194737) [Bug]: main-chat task progress card drops elapsed times for running subagents
- [#195449](https://github.com/openclaw/openclaw/issues/195449) [Docs Bug]: Slash-command reference promises same-chat update notices for ineligible destinations
- [#195461](https://github.com/openclaw/openclaw/issues/195461) [Bug]: Android chat keeps answered question cards pinned at the bottom, so they pile up above the composer
- [#195366](https://github.com/openclaw/openclaw/issues/195366) [Bug]: install.sh --install-method git fails on hosts without Node: clone publish step runs `node` before ensure_node
- [#191600](https://github.com/openclaw/openclaw/issues/191600) [Bug]: Session observer's 30 s deadline covers the utility fallback chain, so configured fallbacks get no time
- [#189398](https://github.com/openclaw/openclaw/issues/189398) [Bug]: Failed runs on legacy sessions hide the provider safety-precaution notice
- [#190243](https://github.com/openclaw/openclaw/issues/190243) status / channels list / doctor print Matrix DEP_PLUGIN_SDK warnings on installs without Matrix (core calls sync presence probe from async paths)
- [#190293](https://github.com/openclaw/openclaw/issues/190293) [Bug]: `devices reject` / `devices remove` with an unknown id print only 'The CLI command failed.' and hide the unknown requestId/deviceId reason
- [#195399](https://github.com/openclaw/openclaw/issues/195399) Update failure: plugin-target-unavailable (2026.9.4)
- [#194891](https://github.com/openclaw/openclaw/issues/194891) Displayed reasoning prevents a final answer after tool calls finish
- [#195284](https://github.com/openclaw/openclaw/issues/195284) Signal: large media sends are reported as failed after 10 s but still delivered
- [#195294](https://github.com/openclaw/openclaw/issues/195294) chunkMarkdownText/chunkByNewline: NaN chunk limit silently drops the whole outbound message
- [#195330](https://github.com/openclaw/openclaw/issues/195330) Silent-reply handling: backticked NO_REPLY leaks as text; silent reply on claude-cli 'required' runs triggers empty_response failover
- [#195052](https://github.com/openclaw/openclaw/issues/195052) [Bug]: Knowledge nested annotation evidence is readable but original download is rejected
- [#195323](https://github.com/openclaw/openclaw/issues/195323) [Bug]: Secondary agent DB re-degrades after every gateway restart: 'prepared model runtime publication was superseded for agents/main/agent'
- [#195321](https://github.com/openclaw/openclaw/issues/195321) bug(webchat): detached Skill Workshop notice (💾 Learned) overwrites foreground assistant reply in Control UI WebChat
- [#192873](https://github.com/openclaw/openclaw/issues/192873) iOS Talk start uses stale talk.config (realtime route, provider and voice from the previous fetch)
- [#195309](https://github.com/openclaw/openclaw/issues/195309) `openclaw memory status` refusal tells operators to "fix authentication" although the Gateway is healthy and owns the state (by design)
- [#194730](https://github.com/openclaw/openclaw/issues/194730) [Bug]: Control UI update hides the unsaved-config reload explanation when the toast chunk is retired
- [#195054](https://github.com/openclaw/openclaw/issues/195054) fix(agents): process log action falsely reports no output for negative limit
- [#195121](https://github.com/openclaw/openclaw/issues/195121) Gateway drops a queued run's lifecycle start, then reports a false agent "seq gap" ("Event stream interrupted" on Android)
- [#195080](https://github.com/openclaw/openclaw/issues/195080) Muse turns hang until timeout when Muse asks a request_user_input question
- [#194915](https://github.com/openclaw/openclaw/issues/194915) [Bug]: Compaction summarizes a complete turn as a split-turn prefix when a bootstrap marker precedes the kept user message
- [#193334](https://github.com/openclaw/openclaw/issues/193334) [Bug]: iOS All Sessions hides loaded conversations after a rejected Pin
- [#143390](https://github.com/openclaw/openclaw/issues/143390) [Bug]: manual /compact of a claude-cli session bills the stored model-provider API key instead of the CLI's native login
- [#191339](https://github.com/openclaw/openclaw/issues/191339) Android New chat is refused while the open conversation is still responding
- [#193490](https://github.com/openclaw/openclaw/issues/193490) [Bug]: iOS Custom Headers accepts an invalid name then silently discards it
- [#190301](https://github.com/openclaw/openclaw/issues/190301) [Bug]: iOS chat: write-scoped operators cannot change Thinking or Fast mode
- [#194922](https://github.com/openclaw/openclaw/issues/194922) [Bug]: Canceling a shared Muse catalog read returns EOF instead of its cancellation reason
- [#194322](https://github.com/openclaw/openclaw/issues/194322) iOS sidebar rows jump when sessions arrive above the viewport
- [#194552](https://github.com/openclaw/openclaw/issues/194552) iOS sidebar rebuilds unchanged rows on unrelated session refreshes
- [#174955](https://github.com/openclaw/openclaw/issues/174955) [Bug]: iOS Settings Dashboard shows the Gateway's raw error text and a false "update the Gateway" banner, with no Reload
- [#193500](https://github.com/openclaw/openclaw/issues/193500) [Bug]: iOS Files repeats the final page after an insertion shifts pagination
- [#195190](https://github.com/openclaw/openclaw/issues/195190) 2026.10.7: restart-safe refusal on claude-cli silently fails over to a metered API-key fallback (follow-up to #184924)
- [#195181](https://github.com/openclaw/openclaw/issues/195181) Delivery mirror warning drops err.cause, so writer-claim refusals (session-rebound / entry-missing / fence mismatch) are indistinguishable in logs
- [#194974](https://github.com/openclaw/openclaw/issues/194974) [Docs Bug]: Clarify Knowledge temporal kind versus search record kind
- [#195149](https://github.com/openclaw/openclaw/issues/195149) [Bug]: Talk settings retain an unsupported transport after provider change
- [#195170](https://github.com/openclaw/openclaw/issues/195170) [Bug]: cancelling a subagent run leaves its background exec commands running (cascadeKilled: 0)
- [#195157](https://github.com/openclaw/openclaw/issues/195157) [Bug]: sessions_send reports a delivery failure for a delivery that succeeded (terminal reply timeout)
- [#195151](https://github.com/openclaw/openclaw/issues/195151) [Bug]: boot-md startup task fails on every PC boot
- [#195101](https://github.com/openclaw/openclaw/issues/195101) Test maintenance: consolidate Gateway terminal-result cases
- [#195053](https://github.com/openclaw/openclaw/issues/195053) [Bug]: acpx plugin rejects argv while acpx CLI requires it on Windows — custom ACP agents unusable
- [#194406](https://github.com/openclaw/openclaw/issues/194406) [Bug]: A local media path whose directory doesn't exist is reported as "not under an allowed directory"
- [#190145](https://github.com/openclaw/openclaw/issues/190145) [Bug]: macOS/iOS: a rejected stored device token is never cleared and the channel reconnects forever with the wrong problem text

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 261,793 · **Open issues:** 53,859 · **Last push:** <1h ago

Today saw no new releases for Hermes Agent. However, several important fixes were merged, including updates to the gateway that ensure unserved Telegram updates are managed correctly (#151077) and enhancements that allow handled edit conflicts to queue edits rather than responding with an admission conflict (#151007). Additionally, the documentation was updated to clarify that the streaming transport default is now set to auto for native drafts in DMs (#151087). A notable new issue was reported regarding plugin `ctx.llm.complete()`, which drops a named custom provider's `extra_body`, highlighting potential problems in plugin handling (#151595). Overall, it was a day of routine maintenance with significant focus on refining the existing functionality and addressing reported bugs.

#### ✅ Merged PRs
- [#151066](https://github.com/NousResearch/hermes-agent/pull/151066) fix(gateway): a Telegram topic bound to a deleted session no longer resurrects its old transcript (#139283, salvage #139295)
- [#151034](https://github.com/NousResearch/hermes-agent/pull/151034) fix(gateway): every exec-approval card leaves a delivery receipt (chat, thread, message id) and a settle line (#138133 diagnostics, salvage #138144)
- [#151007](https://github.com/NousResearch/hermes-agent/pull/151007) fix(gateway): editing a busy /q queues the edit instead of replying admission_conflict (#149947)
- [#151077](https://github.com/NousResearch/hermes-agent/pull/151077) fix(telegram): unserved updates are not receipted silently; shutdown waits for claim releases (#141570, #146716)
- [#151068](https://github.com/NousResearch/hermes-agent/pull/151068) fix(gateway): an idle /restart acknowledges before the gateway starts stopping (#65057)
- [#151062](https://github.com/NousResearch/hermes-agent/pull/151062) fix(telegram): intake admits every documented allowlist grant, not only the first list (#55462, #68716)
- [#151087](https://github.com/NousResearch/hermes-agent/pull/151087) docs(telegram): streaming transport default is auto (native drafts in DMs), not edit (#54817)

#### 🐛 New Issues
- [#151595](https://github.com/NousResearch/hermes-agent/issues/151595) [Bug]: plugin `ctx.llm.complete()` drops a named custom provider's `extra_body` 💬1
- [#151542](https://github.com/NousResearch/hermes-agent/issues/151542) [Bug]: Dangerous-command approval: a relative-path `rm` is never flagged, so the same deletion needs approval or not depending on how it is spelled 💬1
- [#151401](https://github.com/NousResearch/hermes-agent/issues/151401) [Bug]: A repetition loop inside streamed tool-call arguments never ends on an uncapped endpoint (no RunawayStreamWatch on `tool_calls` deltas) `type/bug` `comp/agent` `tool/memory` `P3` 💬1
- [#151485](https://github.com/NousResearch/hermes-agent/issues/151485) [Bug]: Dashboard burns >1 CPU core: /api/profiles re-parses the gateway inline bootstrap argv for every profile on every call (v0.23.0) 💬1
- [#151269](https://github.com/NousResearch/hermes-agent/issues/151269) [Bug]: Enter then immediately switching chats silently drops submitted prompts (tested fix attached) `type/bug` `P2` `comp/desktop` `area/sessions` 💬1
- [#151274](https://github.com/NousResearch/hermes-agent/issues/151274) Windows/MSIX: `hermes pm repair` fails on bundled config-resolution fixtures, so plugin `python_dependencies` are silently never installed `type/bug` `comp/cli` `P3` `area/install-update` 💬1
- [#151613](https://github.com/NousResearch/hermes-agent/issues/151613) [Feature]: Desktop — reveal collapsed left sidebar on edge hover (wide windows)
- [#151609](https://github.com/NousResearch/hermes-agent/issues/151609) Gemini can't call tools that have a parameter named "in" (MALFORMED_FUNCTION_CALL on every route) `needs-decision`
- [#151608](https://github.com/NousResearch/hermes-agent/issues/151608) Kanban: "gave up" wake text says "retries exhausted" for non-retryable failures and omits the reason
- [#151606](https://github.com/NousResearch/hermes-agent/issues/151606) Multiplexed gateway: a reconnecting profile's Telegram bot sends its messages through the default bot
- [#151605](https://github.com/NousResearch/hermes-agent/issues/151605) Desktop SDK: profile-bound provider settings and optional plugin secret writes
- [#151600](https://github.com/NousResearch/hermes-agent/issues/151600) Windows installer fails with "pinned git extracted without git-remote-https" when user profile path contains non-ASCII characters
- [#151586](https://github.com/NousResearch/hermes-agent/issues/151586) [Bug]: an unverified-admission pause is never lifted when the firer books its own terminal outcome - the job stays paused forever
- [#151585](https://github.com/NousResearch/hermes-agent/issues/151585) cron: canonical-dispatch path (scheduler_authority.run_canonical_job) never gets the unreachable-model retry ladder
- [#151584](https://github.com/NousResearch/hermes-agent/issues/151584) [Bug]: Classic CLI /resume, /sessions and -c/--resume latest hide Desktop (gui) sessions — no all-sources view
- [#151582](https://github.com/NousResearch/hermes-agent/issues/151582) [Bug]: Session delete/rename permanently 409 revision_conflict — /api/sessions serves in-memory revision while the fence validates the DB column (two counters desync in both directions)
- [#151581](https://github.com/NousResearch/hermes-agent/issues/151581) [Bug]: Windows install fails at "System prerequisites" with "pinned git extracted without git-remote-https" when the profile path has non-ASCII characters
- [#151560](https://github.com/NousResearch/hermes-agent/issues/151560) [Feature]: ACP: serve `_session/steering` so editors can steer a running turn
- [#151556](https://github.com/NousResearch/hermes-agent/issues/151556) [Bug][Webapp]: iPhone Safari rich-text paste (ChatGPT iOS Copy) is a silent no-op — all clipboard flavors read empty and the composer cancels the native insertion
- [#151547](https://github.com/NousResearch/hermes-agent/issues/151547) [Feature/Bug]: Desktop group chat – every new message force-scrolls to the latest, even when scrolled up

#### 🔒 Closed Issues
- [#68716](https://github.com/NousResearch/hermes-agent/issues/68716) [Bug] Telegram adapter allow_from short-circuits group-scoped authorization
- [#55462](https://github.com/NousResearch/hermes-agent/issues/55462) [Bug]: TELEGRAM_ALLOWED_USERS and TELEGRAM_GROUP_ALLOWED_USERS not authorizing additional users in supergroups (even after disabling Privacy Mode)
- [#65225](https://github.com/NousResearch/hermes-agent/issues/65225) KeyError: 'HERMES_KANBAN_BOARD' — kanban dispatcher mutates os.environ, racing dotenv's env.update(os.environ)
- [#65057](https://github.com/NousResearch/hermes-agent/issues/65057) Telegram: /restart command sends no user feedback before gateway shutdown
- [#54817](https://github.com/NousResearch/hermes-agent/issues/54817) Regression: Telegram draft streaming is auto-selected again and causes bubble collapse/flicker
- [#141570](https://github.com/NousResearch/hermes-agent/issues/141570) telegram: updates no core handler serves are still receipted (group-99 observer completes the claim): silent loss, redelivery suppressed, no log
- [#151595](https://github.com/NousResearch/hermes-agent/issues/151595) [Bug]: plugin `ctx.llm.complete()` drops a named custom provider's `extra_body`
- [#124406](https://github.com/NousResearch/hermes-agent/issues/124406) [Bug]: Telegram auto-TTS drops the voice bubble (and duplicates the text) when an emoji-heavy reply exceeds 1024 UTF-16 units
- [#89385](https://github.com/NousResearch/hermes-agent/issues/89385) Add session-start hook so memory providers can auto-resume (Memory Lane is a working consumer)
- [#139283](https://github.com/NousResearch/hermes-agent/issues/139283) [Bug]: Topic heal trusts a rowless session id and re-attaches its old transcript
- [#149947](https://github.com/NousResearch/hermes-agent/issues/149947) [Bug]: Telegram edits are re-dispatched as new messages; editing a /q message mid-turn fails with admission_conflict
- [#146716](https://github.com/NousResearch/hermes-agent/issues/146716) [Bug]: Telegram shutdown can return before admission claims release; queued cancellation leaks handler coroutine

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,564 · **Open issues:** 10,051 · **Last push:** <1h ago

On November 9, 2026, vLLM did not release any new versions but saw several important developments through merged pull requests. Key changes included a bugfix in the FP8 MoE oracle for ROCm, which now allows fallback when the global AITER flag cannot serve the layer, and the addition of a pluggable shared store for daemon warmup caches to improve performance. Other notable fixes addressed streaming issues that led to dropped log probabilities and identified problems with cross-request multimodal cache poisoning. Among newly raised issues, a significant concern was raised regarding the unconditional dependency on `llguidance`, which blocks installation on systems with glibc versions lower than 2.31.

#### ✅ Merged PRs
- [#66441](https://github.com/vllm-project/vllm/pull/66441) [CI] Fix docstring style in benchmark_batched_moe.py
- [#66350](https://github.com/vllm-project/vllm/pull/66350) [Bugfix][ROCm] Let the FP8 MoE oracle fall back when the global AITER flag can't serve the layer
- [#66287](https://github.com/vllm-project/vllm/pull/66287) [Sleep Mode] Remove level-2 workarounds that #66010 makes unnecessary
- [#66206](https://github.com/vllm-project/vllm/pull/66206) [ROCm][Test] Cover the MXFP4 W4A16 intermediate pad that reaches AITER
- [#46871](https://github.com/vllm-project/vllm/pull/46871) [XPU] All-to-all Expert-Parallellism backend for batched MoE
- [#63401](https://github.com/vllm-project/vllm/pull/63401) [Bugfix][ROCm] Size the extensible KV cache from exact VRAM use, not 2 MB-rounded free memory
- [#66315](https://github.com/vllm-project/vllm/pull/66315) [Bugfix][Mamba] Validate CLI stochastic rounding against the platform
- [#66313](https://github.com/vllm-project/vllm/pull/66313) [Deps] Bump tensorizer to 2.12.1 for Python 3.14
- [#65766](https://github.com/vllm-project/vllm/pull/65766) [DeepSeek-V4] Support sequence parallelism with pipeline parallelism for MegaMoE
- [#65158](https://github.com/vllm-project/vllm/pull/65158) [CI] Add check-docstring-style pre-commit hook and use single backticks in docstrings
- [#65137](https://github.com/vllm-project/vllm/pull/65137) [Bugfix][KV Connector] Keep same-host NIXL on NVLink with the extensible KV cache
- [#66393](https://github.com/vllm-project/vllm/pull/66393) [Transformers backend] Migrate Gemma and StableLM
- [#66263](https://github.com/vllm-project/vllm/pull/66263) [Bugfix] Do not initialize CUDA when importing vendored FLA
- [#66334](https://github.com/vllm-project/vllm/pull/66334) [Model] Muse Spark Open Cleanup
- [#59994](https://github.com/vllm-project/vllm/pull/59994) [Bugfix] Offload model runner construction buffers on sleep
- [#65866](https://github.com/vllm-project/vllm/pull/65866) [Bugfix] Move model inspection RPC out of LLM.__repr__
- [#65351](https://github.com/vllm-project/vllm/pull/65351) [Multimodal][Bugfix] Fix Step3-VL encoder output aliasing and guard shared CUDA graph capture buffers
- [#62675](https://github.com/vllm-project/vllm/pull/62675) [Bugfix][ROCm] Pad Qwen4Exp PLE n-gram inputs for piecewise CUDA graph replays
- [#66388](https://github.com/vllm-project/vllm/pull/66388) [Model] Use the upstream config for MOSS-Transcribe-Diarize
- [#65323](https://github.com/vllm-project/vllm/pull/65323) [XPU][UT] Preserve RoPE buffer dtype for HF reference in the privacy-filter model test on XPU
- [#65227](https://github.com/vllm-project/vllm/pull/65227) [Perf][Multimodal] Encoder CUDA graphs: one replay per batch, finer grid up to one max budget
- [#65168](https://github.com/vllm-project/vllm/pull/65168) [Fast start] Pluggable shared stores for daemon warmup caches
- [#65939](https://github.com/vllm-project/vllm/pull/65939) [Bugfix][Mooncake] Bound store prefix lookups with a circuit breaker

#### 🐛 New Issues
- [#66345](https://github.com/vllm-project/vllm/issues/66345) `llguidance` is an unconditional dependency and is loaded by `from vllm import LLM`; it blocks install and import on glibc < 2.31 `structured-output` 💬4
- [#66411](https://github.com/vllm-project/vllm/issues/66411) [RFC]: Breakdown PR time to signal from ~73 to ~30 minutes `rocm` 💬3
- [#66436](https://github.com/vllm-project/vllm/issues/66436) [Bug]: Streaming /v1/responses drops logprobs for tokens with empty text deltas `bug` 💬1
- [#66430](https://github.com/vllm-project/vllm/issues/66430) [Bug]: Gemma 4 tool chat template: with enable_thinking=false, no empty thought channel after a tool response `tool-calling` 💬1
- [#66422](https://github.com/vllm-project/vllm/issues/66422) [Bug]: Cross-Request Multimodal Cache Poisoning via Untagged Identifiers in vLLM `bug` `multi-modality` 💬1
- [#66418](https://github.com/vllm-project/vllm/issues/66418) [RFC]: DBO support for the DeepEP v2 backend in Model Runner V2 💬1
- [#66402](https://github.com/vllm-project/vllm/issues/66402) [Bug]: prompt_text is null when return_prompt_text is used with reused kv_transfer_params.prompt_token_ids `bug` 💬1
- [#66392](https://github.com/vllm-project/vllm/issues/66392) [Bug]: /v1/systemone caps Clef-Flash choice questions at 26 options, though the joint-schema read uses no labels `bug` 💬1
- [#66377](https://github.com/vllm-project/vllm/issues/66377) [Bug]: Async EPLB worker asserts `device_index is not None` on Ascend NPU 💬1
- [#66435](https://github.com/vllm-project/vllm/issues/66435) [Bug][Spec Decode][LoRA] DFlash drafter reuses target-side LoRA metadata → CUDA illegal memory access in `lora_expand` with mixed multi-LoRA batches
- [#66437](https://github.com/vllm-project/vllm/issues/66437) [Bug]: HummingLinearKernel (W4A16) computes wrong output for group sizes that don't tile its K-blocks; can_implement has no group-size check `quantization`
- [#66427](https://github.com/vllm-project/vllm/issues/66427) [Feature]: Support output_mode: derender, parse_context, and decoded logprobs in vllm.Inference
- [#66426](https://github.com/vllm-project/vllm/issues/66426) [Feature]: Support mm_processor_kwargs and media_io_kwargs in vllm.Inference
- [#66423](https://github.com/vllm-project/vllm/issues/66423) [Bug]: Segfault during engine init with any --reasoning-parser on SM120 + NVFP4 W4A4 (flashinfer_cutlass MoE) `tool-calling` `quantization`
- [#66406](https://github.com/vllm-project/vllm/issues/66406) [Performance]: Block FP8 MoE on SM120 with expert parallel: Triton decodes 10–20% faster than the auto-selected DeepGEMM (Qwen3.8-Flash-Next-FP8)
- [#66404](https://github.com/vllm-project/vllm/issues/66404) [Bug]: BatchedTritonExperts silently ignores expert projection biases
- [#66387](https://github.com/vllm-project/vllm/issues/66387) [Bug]: DFlash acceptance collapses at tensor parallel > 1 (MiMo-V2.6-Flash-MOPD, TP1 fine)
- [#66368](https://github.com/vllm-project/vllm/issues/66368) [Feature][XPU][Offload]: Spend `--cpu-offload-gb` per routed expert, by routing rank, instead of whole layers in module order `intel-gpu`
- [#66366](https://github.com/vllm-project/vllm/issues/66366) [Bug]: FlashAttention cache write fails with an explicit `"kv_cache_dtype": "bfloat16"` (e.g. a BF16 draft over an FP8 target) `intel-gpu` `quantization`
- [#66364](https://github.com/vllm-project/vllm/issues/66364) [Bug][XPU]: UVA expert offload of an int4 MoE loses the device (UR_RESULT_ERROR_DEVICE_LOST) in the first decode step `intel-gpu`
- [#66362](https://github.com/vllm-project/vllm/issues/66362) [Bug][XPU]: Expert weights transposed twice with vllm_xpu_kernels 0.1.17 `intel-gpu`
- [#66359](https://github.com/vllm-project/vllm/issues/66359) [Bug]: Rust vllm-bench random dataset sends prompts shorter than --random-input-len `rust`
- [#66344](https://github.com/vllm-project/vllm/issues/66344) [RFC]: Word-level timestamps for speech models from per-request encoder outputs
- [#66351](https://github.com/vllm-project/vllm/issues/66351) [Bug]: Background /v1/responses requests that fail during generation stay "queued" forever (streaming case not covered by open PRs) `bug`
- [#66349](https://github.com/vllm-project/vllm/issues/66349) [Bug]: granite_20b_fc chat template fails to render any conversation with a system message

#### 🔒 Closed Issues
- [#32588](https://github.com/vllm-project/vllm/issues/32588) [Bug]: Wrong timestamps if audio > 30s
- [#58485](https://github.com/vllm-project/vllm/issues/58485) [Bug]: V1 thinking budget corrupts a multi-token reasoning_end_str under speculative decoding
- [#64874](https://github.com/vllm-project/vllm/issues/64874) [Bug]: [ROCm][GLM-5.3-Flash]: "Workspace is locked" AssertionError in rocm_fp8_paged_mqa_logits under high decode concurrency (glm5next AMD indexer reserves decode logits via torch.empty, not the workspace)
- [#48082](https://github.com/vllm-project/vllm/issues/48082) [Bug]: Gemma-4 MTP crashes on B200 after FlashInfer selects a missing head_dim=512 TRTLLM-Gen cubin
- [#48238](https://github.com/vllm-project/vllm/issues/48238) [Bug]: Gemma4 dense NVFP4 (nvidia/Gemma-4-31B-IT-NVFP4) fails on v0.24.0 with NotImplementedError in quant_method.tie_weights (lm_head/embed_tokens weight tying)
- [#61486](https://github.com/vllm-project/vllm/issues/61486) [Bug]: [ROCm] Qwen4Exp (AMD path): PLE n-gram IDs read a stale query_start_loc tail during PIECEWISE CUDA-graph replay
- [#48224](https://github.com/vllm-project/vllm/issues/48224) [Bug]: KV connector "Throughput (MB/s)" sums overlapping transfer durations; propose reporting avg per-transfer throughput instead
- [#48231](https://github.com/vllm-project/vllm/issues/48231) [Bug]: Gemma4 Unified image requests produce all-NaN logits after BF16-to-FP16 fallback
- [#48236](https://github.com/vllm-project/vllm/issues/48236) LMCache + vLLM: pipeline parallelism now works with MLA models (Kimi K2, GLM-4.6)
- [#48242](https://github.com/vllm-project/vllm/issues/48242) [Feature]: Operator opt-out for the expandable_segments KV-connector rejection (copy-based connectors have no viable config on unified memory)
- [#48274](https://github.com/vllm-project/vllm/issues/48274) [Bug][Responses API] Zero-delta streaming items skip added/in_progress lifecycle events
- [#48277](https://github.com/vllm-project/vllm/issues/48277) Platform plugin registration failures are silently swallowed, causing undiagnosed CPU fallback
- [#51441](https://github.com/vllm-project/vllm/issues/51441) [Bug]: Hybrid sparse attention + Eagle results in full cache miss for certain prompt lengths
- [#56507](https://github.com/vllm-project/vllm/issues/56507) [Doc]: ec_cpu_connector.md refers to a no-NIXL import test that doesn't exist
- [#64541](https://github.com/vllm-project/vllm/issues/64541) [Bug]: dots.ocr produces identical "blurry image" output for every region with tensor-parallel size 2
- [#66351](https://github.com/vllm-project/vllm/issues/66351) [Bug]: Background /v1/responses requests that fail during generation stay "queued" forever (streaming case not covered by open PRs)

### SGLang (`sgl-project/sglang`)

**Stars:** 38,590 · **Open issues:** 6,492 · **Last push:** <1h ago

There were no new releases for SGLang today; however, several notable merged pull requests included the consolidation of simple XPU enablements (#47956), which simplifies configuration, and a crucial fix for the openai tool that prevents rendering null tool-level defer loading (#48211). Significant improvements were made, such as the termination of an AR fusion test deadlock (#49160) and the enforcement of session management standards by deferring session closure until media processing is complete (#49207). Among new issues, a bug concerning short prefills in CUDA graph impacting log probabilities was raised (#49133), highlighting ongoing concerns with performance on specific architectures. Overall, the day involved routine maintenance with a few key enhancements.

#### ✅ Merged PRs
- [#47956](https://github.com/sgl-project/sglang/pull/47956) [Feat] xpu: Consolidate simple XPU enablements
- [#48211](https://github.com/sgl-project/sglang/pull/48211) [Fix] openai: do not render a null tool-level defer_loading
- [#49160](https://github.com/sgl-project/sglang/pull/49160) [Test] gemma4: Stop the AR fusion test from deadlocking on a tolerance miss
- [#48207](https://github.com/sgl-project/sglang/pull/48207) [Fix] routed-experts: reset routed_experts_start_len when a request is rejected at intake
- [#49207](https://github.com/sgl-project/sglang/pull/49207) [Fix] session: Defer a session close while an unfinished turn still reads its media
- [#48882](https://github.com/sgl-project/sglang/pull/48882) [Fix] [NPU] dsa: Allow DSA DCP with PD disaggregation
- [#49159](https://github.com/sgl-project/sglang/pull/49159) [Test] kv_canary: Compare median decode time in the self-bench speed test
- [#49204](https://github.com/sgl-project/sglang/pull/49204) [Refactor] session: Remove the replace session parameter and the turn tree it pruned
- [#49156](https://github.com/sgl-project/sglang/pull/49156) [Fix] disagg: Fail startup when Mooncake rejects KV buffer registration
- [#49153](https://github.com/sgl-project/sglang/pull/49153) [Test] scheduler: Record embedding sends and check at idle that every taken request sent its final output
- [#49149](https://github.com/sgl-project/sglang/pull/49149) [CI] diffusion: Run diffusion lanes through a shared stage and runner configs
- [#49151](https://github.com/sgl-project/sglang/pull/49151) [Fix] scheduler: Finish rejected requests and offloaded releases through the request retirer
- [#49105](https://github.com/sgl-project/sglang/pull/49105) [Feat] kimi-k3.1: HiCache with DFLASH under decode context parallelism
- [#48741](https://github.com/sgl-project/sglang/pull/48741) [Feat] kimi-k3.1: PD disaggregation under decode context parallelism
- [#49201](https://github.com/sgl-project/sglang/pull/49201) [Fix] ci: Update the rerun-test reply status when a run is rerun
- [#48974](https://github.com/sgl-project/sglang/pull/48974) [Fix] dspark: [sglang-miles] Target verify passes the forward's routed-experts, indexer top-k and KV-version captures on
- [#49152](https://github.com/sgl-project/sglang/pull/49152) [AMD] Kimi-K3: pass gate_mode INTERLEAVE for GU-interleaved SiTU w13
- [#48800](https://github.com/sgl-project/sglang/pull/48800) [Feat] request_logger: Summarize media inputs per modality in request logs
- [#43739](https://github.com/sgl-project/sglang/pull/43739) [Feat] [Ascend] quantization: :sparkles: Support online W4A8 MoE
- [#48008](https://github.com/sgl-project/sglang/pull/48008) [Refactor] mem_cache: Gate unified page reuse and moves on one per-band page ledger
- [#48007](https://github.com/sgl-project/sglang/pull/48007) [Refactor] mem_cache: Address prefix-tree window slots, cursors and evictions by sub-pool name
- [#48006](https://github.com/sgl-project/sglang/pull/48006) [Refactor] mem_cache: Name each unified window sub-pool by its own window length
- [#48852](https://github.com/sgl-project/sglang/pull/48852) [Perf] mem_cache: Defer reuse of freed unified pages instead of waiting on every free
- [#49091](https://github.com/sgl-project/sglang/pull/49091) [Perf] [NVIDIA] moe: Generalize the MXFP4 decode MoE kernel to covered shapes and DeepSeek-V4
- [#46483](https://github.com/sgl-project/sglang/pull/46483) [Perf] [NPU] attention: Avoid CPU sequence length synchronization for Kimi K3
- [#44955](https://github.com/sgl-project/sglang/pull/44955) [Feat] diffusion: Support multiple dynamic LoRA adapters
- [#48370](https://github.com/sgl-project/sglang/pull/48370) [Perf] gemma3: Fuse q_norm and k_norm into gemma_rmsnorm for rank above 2
- [#48642](https://github.com/sgl-project/sglang/pull/48642) [Feat] paged-experts: keep experts on disk so later starts skip loading them
- [#49154](https://github.com/sgl-project/sglang/pull/49154) [CI] xeon: Prune dangling docker images and check free disk before the build
- [#49144](https://github.com/sgl-project/sglang/pull/49144) [Refactor] scheduler: Move the pause state into PauseState
- [#49106](https://github.com/sgl-project/sglang/pull/49106) [Feat] kimi-k3.1: trtllm DSA backend under decode context parallelism
- [#49018](https://github.com/sgl-project/sglang/pull/49018) [Test] scheduler: Check that a request exits and sends its final output at most once
- [#48953](https://github.com/sgl-project/sglang/pull/48953) [Feat] multimodal: [sglang-miles] Let a token-space strategy load its own media and choose its image decoder and RGB conversion
- [#46694](https://github.com/sgl-project/sglang/pull/46694) [Perf] [AMD] minimax: decode indexer CP for DSpark verify on the NVFP4 index cache
- [#44813](https://github.com/sgl-project/sglang/pull/44813) [Fix] deepseek_v4: route unquantized BF16/F16/F32 checkpoints off the MXFP4 expert path
- [#49019](https://github.com/sgl-project/sglang/pull/49019) [Refactor] scheduler: Commit a step's result only on the rows of requests still in the batch
- [#49128](https://github.com/sgl-project/sglang/pull/49128) [Fix] test: Keep a passed precision baseline row pointing at its own tensors
- [#49028](https://github.com/sgl-project/sglang/pull/49028) [Test] kv_canary: Ignore EOS in the PD fixture for the SWA model
- [#46693](https://github.com/sgl-project/sglang/pull/46693) [Feat] [AMD] minimax: Support MiniMax-M3.1-Flash on MI350X / MI355X (gfx950)
- [#49118](https://github.com/sgl-project/sglang/pull/49118) Revert "[Perf] [NVIDIA] unquant: Autotune low-M BF16 GEMMs via FlashInfer mm_bf16 (#43703)"
- [#49097](https://github.com/sgl-project/sglang/pull/49097) [Test] kv-canary: Serve the EAGLE canary fixture in bf16 to avoid an fp16 overflow
- [#49096](https://github.com/sgl-project/sglang/pull/49096) [Fix] megamoe: Accept FlashInfer 0.7.3 knob cache and enum config fields in startup autotune
- [#47696](https://github.com/sgl-project/sglang/pull/47696) [Perf] diffusion: Run a single packed FA3 sequence through the batch kernel
- [#48688](https://github.com/sgl-project/sglang/pull/48688) [Perf] longcat-image: Reuse timestep conditioning for serial CFG
- [#47090](https://github.com/sgl-project/sglang/pull/47090) [Perf] qwen-image21: Pack BF16 gate/up projections on SM120

#### 🐛 New Issues
- [#49133](https://github.com/sgl-project/sglang/issues/49133) [Bug] Breakable prefill CUDA graph: short prefills padded to a capture bucket give different logprobs than eager (Qwen3.8-27B-NVFP4, hybrid GDN, v0.5.23) 💬4
- [#49185](https://github.com/sgl-project/sglang/issues/49185) [Bug] Qwen3-MoE: a router stored quantized (compressed-tensors) is never loaded, and the server answers garbage without an error 💬2
- [#49173](https://github.com/sgl-project/sglang/issues/49173) [Bug] #48399 drops SM120/SM121 from the DSV4.1 DeepGEMM indexer gates — 8x prefill regression on GB10 (torch fallback calls tolist() per layer) 💬2
- [#49123](https://github.com/sgl-project/sglang/issues/49123) [Feature] moe: FlashInfer cuTile NVFP4 MoE as the default runner on SM12x 💬2
- [#49198](https://github.com/sgl-project/sglang/issues/49198) [Bug] Mixtral, Llama 4 and FP8 Qwen3-MoE: a router stored in FP8 is loaded without its scale, with no error 💬1
- [#49209](https://github.com/sgl-project/sglang/issues/49209) [Bug] sm_120 (RTX 50-series consumer Blackwell) cannot run any model out-of-the-box with CUDA 13 wheel install
- [#49206](https://github.com/sgl-project/sglang/issues/49206) [Bug] SGLANG_ENABLE_NV_MEGA_RUNTIME_OPTIMIZATION: post-verify CUDA graph capture crashes on first sampled request (torch.compile JIT inside capture via flashinfer top_k)
- [#49202](https://github.com/sgl-project/sglang/issues/49202) [Bug] TorchNativeLlamaForCausalLM / TorchNativePhi3ForCausalLM build plain torch.nn.Linear layers, so a quantized checkpoint's weights load without their scales
- [#49199](https://github.com/sgl-project/sglang/issues/49199) [Bug] DFlash and EAGLE-3 drafts build their layers without layer names, so a draft's quantization exclusions never match
- [#49190](https://github.com/sgl-project/sglang/issues/49190) [Rust server] Tokenization runs on a single thread by default and becomes the tail-latency bottleneck for long prompts
- [#49186](https://github.com/sgl-project/sglang/issues/49186) [Bug] Whisper: fc1/fc2 are built without the quantization config, so a quantized checkpoint transcribes nothing
- [#49175](https://github.com/sgl-project/sglang/issues/49175) [Bug] Non-positive n (n=0 or negative) crashes batch /generate with IndexError instead of a 400
- [#49174](https://github.com/sgl-project/sglang/issues/49174) Post-hoc Req.finished_len mutation desyncs pool accounting — invariant checker fires with negative residue (undocumented contract)
- [#49145](https://github.com/sgl-project/sglang/issues/49145) [Bug] d3 decision checkpoints: the readout load erases the embedding matrix
- [#49132](https://github.com/sgl-project/sglang/issues/49132) [Bug] Qwen3-VL vision encoder: full-size transient tensors (pos-embed blend `[4, patches, 1152]`, MLP `[patches, 4304]`) OOM memory-tight GPUs on large images; both can be computed in row chunks
- [#49129](https://github.com/sgl-project/sglang/issues/49129) [Bug] macOS: /v1/loads returns no ranks because load snapshots use /dev/shm
- [#49115](https://github.com/sgl-project/sglang/issues/49115) [Bug] Kimi-K3.1-Pro: PP output relay stalls while pickling nested tensor metadata

#### 🔒 Closed Issues
- [#33549](https://github.com/sgl-project/sglang/issues/33549) [Bug] DeepSeek-V4 (dsv4 backend + DSPARK) TP=8 on 8×H20: decode forward hangs indefinitely at ~245K context — all GPUs spin at 100% util / low power, watchdog kills server
- [#38069](https://github.com/sgl-project/sglang/issues/38069) [Feature] Per-request opt-out from prefix cache insertion (skip_cache_insert)
- [#37430](https://github.com/sgl-project/sglang/issues/37430) [Bug] Kimi-K3 tool_choice=required requests hang until ReadTimeout in 2P2D TP8/DCP8 deployment
- [#30122](https://github.com/sgl-project/sglang/issues/30122) Bug Report: SGLang 0.5.14 Multi-Node GGUF MoE Deployment — 9 Bugs Fixed by a Finance Guy with an AI Agent
- [#34772](https://github.com/sgl-project/sglang/issues/34772) [Bug][Diffusion] Native-fallback component loading drops all CPU-offload decisions (should_offload called without model_config) → fatal OOM on 8GB GPUs
- [#38580](https://github.com/sgl-project/sglang/issues/38580) [Feature] Enforce attention metadata consistency after post-plan padding
- [#36741](https://github.com/sgl-project/sglang/issues/36741) [Bug] Anthropic endpoint: output_config.effort forwarded unvalidated -> 500, and xhigh is made unreachable
- [#38513](https://github.com/sgl-project/sglang/issues/38513) supports_fp8() always True; _apply_fallback_scaled_mm still calls torch._scaled_mm (no escape on SM<89)
- [#38589](https://github.com/sgl-project/sglang/issues/38589) Qwen4Exp (Qwen3.8-Flash-Next) cannot emit DFlash aux hidden states: DFlash/DSpark drafters cannot be served
- [#37609](https://github.com/sgl-project/sglang/issues/37609) [Bug] Spark2.5 MLP uses tanh-approximate GELU instead of reference GELU
- [#38622](https://github.com/sgl-project/sglang/issues/38622) [Bug] Triton causal_conv1d_update mishandles oversized and circular conv states
- [#38606](https://github.com/sgl-project/sglang/issues/38606) HYV4 (Hunyuan-V4) with an all-to-all MoE backend silently computes 1 token in attn_tp_size
- [#44810](https://github.com/sgl-project/sglang/issues/44810) [Bug] DeepSeek-V4 BF16 checkpoint is routed to the MXFP4 expert path and fails in fused MoE
- [#38745](https://github.com/sgl-project/sglang/issues/38745) `DUAL_STREAM_TOKEN_THRESHOLD` makes the DSA indexer's dual-stream gate unsatisfiable on ROCm — the leftover #14337's TODO named
- [#38708](https://github.com/sgl-project/sglang/issues/38708) [Bug][ROCm] --cuda-graph-backend-decode breakable fails at startup on DSA models: 'NoneType' object has no attribute 'get_page_table_64'
- [#38676](https://github.com/sgl-project/sglang/issues/38676) [Feature] Expose multimodal preprocessing latency metrics (media download / load / processor) in Prometheus
- [#38669](https://github.com/sgl-project/sglang/issues/38669) [Bug] 主线版本ascend后端对swa模型的注意力计算有bug
- [#38651](https://github.com/sgl-project/sglang/issues/38651) [Feature] Allow caller-provided multimodal cache IDs to avoid repeated hashing and preprocessing

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,773 · **Open issues:** 2,595 · **Last push:** 6h ago

Today saw the release of several new versions of llama.cpp, including b12211, which featured a refactoring to consolidate code in mtmd, and b12210, which enabled IME2 acceleration for the SpacemiT CPU backend. Notable merged features included updates to CUDA/Metal for more deterministic Top-K selections and the addition of BF16 and Q8_0 VXE support. The most significant new issue opened was #31911, highlighting a problem where the device_room() function under-reports free VRAM when a draft model is loaded. Overall, this update cycle brought important optimizations and fixes to enhance performance and usability within the AI ecosystem.

#### 🚀 New Releases
- [b12211](https://github.com/ggml-org/llama.cpp/releases/tag/b12211) b12211
- [b12210](https://github.com/ggml-org/llama.cpp/releases/tag/b12210) b12210
- [b12209](https://github.com/ggml-org/llama.cpp/releases/tag/b12209) b12209
- [b12208](https://github.com/ggml-org/llama.cpp/releases/tag/b12208) b12208
- [b12207](https://github.com/ggml-org/llama.cpp/releases/tag/b12207) b12207
- [b12206](https://github.com/ggml-org/llama.cpp/releases/tag/b12206) b12206
- [b12202](https://github.com/ggml-org/llama.cpp/releases/tag/b12202) b12202
- [b12201](https://github.com/ggml-org/llama.cpp/releases/tag/b12201) b12201
- [b12200](https://github.com/ggml-org/llama.cpp/releases/tag/b12200) b12200
- [b12199](https://github.com/ggml-org/llama.cpp/releases/tag/b12199) b12199

#### ✅ Merged PRs
- [#31084](https://github.com/ggml-org/llama.cpp/pull/31084) ggml : update CUDA/Metal radix Top-K to make tied selections deterministic
- [#31865](https://github.com/ggml-org/llama.cpp/pull/31865) mtmd: refactoring: remove clip.h, consolidate code into mtmd
- [#31776](https://github.com/ggml-org/llama.cpp/pull/31776) ggml : enable MXFP4 dense repack and IME2 acceleration for SpacemiT CPU backend
- [#31866](https://github.com/ggml-org/llama.cpp/pull/31866) llamafile: add BF16 and Q8_0 VXE support
- [#31818](https://github.com/ggml-org/llama.cpp/pull/31818) ggml-cuda : add d_state=64 fast path to SSM_SCAN kernel
- [#31888](https://github.com/ggml-org/llama.cpp/pull/31888) moe-cache : ensure CPU part does not wait for the cached experts
- [#31854](https://github.com/ggml-org/llama.cpp/pull/31854) ggml : switch to F32 src1 in the CPU backend
- [#31578](https://github.com/ggml-org/llama.cpp/pull/31578) webgpu : add COUNT_EQUAL support
- [#31529](https://github.com/ggml-org/llama.cpp/pull/31529) ci: move runners to Ubuntu 26.04
- [#31851](https://github.com/ggml-org/llama.cpp/pull/31851) llama, mtmd: follow the reference precision of ggml_prec_set_acc calls
- [#31497](https://github.com/ggml-org/llama.cpp/pull/31497) speculative : do not apply the MoE cache to the draft model
- [#31831](https://github.com/ggml-org/llama.cpp/pull/31831) opencl: improve q8_0 and MoE small-n verification for spec
- [#31861](https://github.com/ggml-org/llama.cpp/pull/31861) common : sanitize invalid UTF-8 in PEG tool call arguments

#### 🐛 New Issues
- [#31911](https://github.com/ggml-org/llama.cpp/issues/31911) scripts/moe-cache-tune.py: device_room() under-reports free VRAM when a draft model is loaded 💬1
- [#31914](https://github.com/ggml-org/llama.cpp/issues/31914) qwen4exp: llama-server asserts in llama_kv_cache::set_input_k_idxs (kpool) when loading with --spec-type draft-mtp 💬1
- [#31875](https://github.com/ggml-org/llama.cpp/issues/31875) Eval (or rather model) bug: Please implement a workaround for GLM-5.3-Flash reasoning degrading into a stream of hmm hmm hmm `bug-unconfirmed` 💬1
- [#31920](https://github.com/ggml-org/llama.cpp/issues/31920) CUDA: dedicated mul_mat_id path for F32 activations with strided experts
- [#31918](https://github.com/ggml-org/llama.cpp/issues/31918) CUDA: dedicated mul_mat_id path for F32 activations with strided experts
- [#31908](https://github.com/ggml-org/llama.cpp/issues/31908) Eval bug: gguf_init_from_reader: tensor name 0 is too long: 76 >= 64 `bug-unconfirmed`
- [#31906](https://github.com/ggml-org/llama.cpp/issues/31906) Eval bug: llama-server not run QuantStack / Qwen-Image-GGUF `bug-unconfirmed`
- [#31892](https://github.com/ggml-org/llama.cpp/issues/31892) Misc. bug: test-backend-ops sentinel mismatch errors on MoltenVK `bug-unconfirmed`
- [#31901](https://github.com/ggml-org/llama.cpp/issues/31901) Eval bug: llama.cpp auto-picks the wrong EOT token for Llama 3 GGUFs without `eot_token_id`, causing generation to never stop `bug-unconfirmed`
- [#31900](https://github.com/ggml-org/llama.cpp/issues/31900) Misc. bug: Vulkan, Intel Arc 140T iGPU (Windows): device→host read-back ~10x slower than host→device (prompt_save and context checkpoints) `bug-unconfirmed`
- [#31889](https://github.com/ggml-org/llama.cpp/issues/31889) Eval bug: Hexagon (HTP v73, Snapdragon 8s Gen 3) produces empty / garbage output for PLaMo 3 (plamo3) Q4_0, CPU is correct
- [#31883](https://github.com/ggml-org/llama.cpp/issues/31883) Feature Request: Clover model still unsupported. `enhancement`
- [#31881](https://github.com/ggml-org/llama.cpp/issues/31881) Discussion: physics/bounds sanity checks for tool-call argument generation
- [#31879](https://github.com/ggml-org/llama.cpp/issues/31879) Misc. bug: convert_lora_to_gguf.py ignores use_rslora, so rsLoRA adapters run sqrt(r) times too weak
- [#31870](https://github.com/ggml-org/llama.cpp/issues/31870) Feature Request: SYCL support for OCP FP8 e4m3 `enhancement`

#### 🔒 Closed Issues
- [#24375](https://github.com/ggml-org/llama.cpp/issues/24375) Feature Request: Show microphone button when current model does not support audio but another loaded model does
- [#26257](https://github.com/ggml-org/llama.cpp/issues/26257) Eval bug: Qwen3.6-27B garbled output on dual-GPU CUDA (RTX 5060 Ti + RTX 3060), single GPU works
- [#26549](https://github.com/ggml-org/llama.cpp/issues/26549) Misc. bug: Missing Lightning Indexer and HC Fused Ops with DS4F on Intel B70 (SYCL)
- [#28805](https://github.com/ggml-org/llama.cpp/issues/28805) Eval bug: qwen4exp (Qwen3.8-Flash-Next) on Metal: decode emits 1 token then EOS at long context — silent empty output, stochastic at threshold, threshold moves with model quant / KV quant / n_ctx
- [#28444](https://github.com/ggml-org/llama.cpp/issues/28444) Misc. bug: Llama.cpp localhost shows the ui even when llama.cpp isnt running.
- [#28448](https://github.com/ggml-org/llama.cpp/issues/28448) ggml_gallocr silently reuses stale allocation plan on identity change at fixed position (sparse MoE corruption)
- [#26994](https://github.com/ggml-org/llama.cpp/issues/26994) Eval bug: Image prompt cache never hits for hybrid SSM models (Qwen3.6) when only the text suffix changes
- [#29378](https://github.com/ggml-org/llama.cpp/issues/29378) Feature Request: CPU Flash Attention does not use the selected KleidiAI SME2 kernel
- [#29349](https://github.com/ggml-org/llama.cpp/issues/29349) Feature Request: Vulkan dmmv workgroup-size on Intel Xe2.
- [#29352](https://github.com/ggml-org/llama.cpp/issues/29352) Eval bug: Vulkan/MoltenVK + AMD discrete GPU: ErrorDeviceLost with the default 4 server slots and prompts above ~70 tokens; --parallel 1 fixes it
- [#29361](https://github.com/ggml-org/llama.cpp/issues/29361) Feature Request: expose last-token hidden state during normal inference
- [#29398](https://github.com/ggml-org/llama.cpp/issues/29398) Feature Request: SYCL per-instance queue, device-side events, async copy
- [#31914](https://github.com/ggml-org/llama.cpp/issues/31914) qwen4exp: llama-server asserts in llama_kv_cache::set_input_k_idxs (kpool) when loading with --spec-type draft-mtp
- [#31863](https://github.com/ggml-org/llama.cpp/issues/31863) llama-server closes the connection after every streaming (SSE) response while the response advertises "Keep-Alive: timeout=5, max=100" and no "Connection: close" — a client that reuses the connection sometimes fails with "the response ended prematurely" (b11977 and b12182, macOS arm64)

### Ollama (`ollama/ollama`)

**Stars:** 186,386 · **Open issues:** 4,619 · **Last push:** 1d ago

On November 9, 2026, there were no new releases or merged pull requests for Ollama, indicating a day of routine maintenance. Among the new issues, #19604 highlights a 403 Forbidden error encountered by users trying to pull images behind a corporate proxy despite successful curl commands. Additionally, #19616 raises concerns about the OLLAMA_LOAD_TIMEOUT value, suggesting that the current limit of 300 seconds is insufficient for some operations. Other notable issues include a feature request for native architecture support (#19611) and a report of unexpected warning text in version output (#19613), reflecting ongoing user engagement and feedback.

#### 🐛 New Issues
- [#19604](https://github.com/ollama/ollama/issues/19604) 403 Forbidden on ollama pull behind corporate proxy even though curl works `bug` 💬4
- [#19616](https://github.com/ollama/ollama/issues/19616) OLLAMA_LOAD_TIMEOUT of 300 seconds (5 minutes) is too damn short `feature request` 💬2
- [#19611](https://github.com/ollama/ollama/issues/19611) [Feature Request] Native Architecture Support: OSADIA Axiom 5-Pillar Architecture (Next GenAi Mexico) 💬2
- [#19613](https://github.com/ollama/ollama/issues/19613) -v, --version showing unexpected "warning" text `bug` 💬1
- [#19615](https://github.com/ollama/ollama/issues/19615) Error: image generation models are not currently supported `bug`
- [#19606](https://github.com/ollama/ollama/issues/19606) Idea: optional physics/bounds validation for tool-call arguments (offline agent safety)

#### 🔒 Closed Issues
- [#19596](https://github.com/ollama/ollama/issues/19596) Typo in gemma4:12b-it-qat metadata / Modelfile (incorrectly set to 'toos' instead of 'tools')
- [#19277](https://github.com/ollama/ollama/issues/19277) HuggingFace to Ollama
- [#19615](https://github.com/ollama/ollama/issues/19615) Error: image generation models are not currently supported

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,926 · **Open issues:** 5,692 · **Last push:** <1h ago

On November 9, 2026, LiteLLM released version v1.110.0-dev.2, with all Docker images now signed using cosign for enhanced security. Significant fixes included a resolution for the web identity session policy per AWS caller (#50592), improvements to the Admin UI with UTC labeling for budget resets (#50591), and modifications to the proxy to properly price expanded wildcard model calls (#49128). Additionally, a notable new issue was raised concerning the proxy parent span duplicating LLM attributes and incorrectly pricing calls twice (#50649). This release continues to strengthen reliability and performance across the platform.

#### 🚀 New Releases
- [v1.110.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-dev.2) v1.110.0-dev.2

#### ✅ Merged PRs
- [#50641](https://github.com/BerriAI/litellm/pull/50641) perf(router): skip unused deployment reads in the callback filter step and cache anthropic capability probes
- [#50592](https://github.com/BerriAI/litellm/pull/50592) fix(bedrock): derive the web identity session policy per AWS caller
- [#49128](https://github.com/BerriAI/litellm/pull/49128) fix(proxy)!: price expanded wildcard /model/info rows as the model their calls route to
- [#50591](https://github.com/BerriAI/litellm/pull/50591) fix(ui): label every budget reset time in the Admin UI with UTC
- [#50098](https://github.com/BerriAI/litellm/pull/50098) fix(cli): end the local login when lite logout cannot check the OS keychain
- [#50496](https://github.com/BerriAI/litellm/pull/50496) feat(proxy): total_timeout bounds a whole non-streaming request
- [#50600](https://github.com/BerriAI/litellm/pull/50600) fix(proxy): align ownership and scope handling
- [#50612](https://github.com/BerriAI/litellm/pull/50612) test(observability): match the full card number instead of a 4111 substring that timestamps can contain
- [#50607](https://github.com/BerriAI/litellm/pull/50607) fix(gemini): add the Flex above-200k cache read price to gemini-3.1-pro-preview rows
- [#43577](https://github.com/BerriAI/litellm/pull/43577) fix(key/info): return 400 instead of 500 when no key is provided

#### 🐛 New Issues
- [#50649](https://github.com/BerriAI/litellm/issues/50649) arize_phoenix: proxy parent span litellm_proxy_request duplicates LLM attributes, Phoenix prices every call twice 💬2
- [#50639](https://github.com/BerriAI/litellm/issues/50639) [Bug]: trim_messages does not trim when the model name has a provider prefix such as openai/ or anthropic/ `llm translation` 💬1
- [#50652](https://github.com/BerriAI/litellm/issues/50652) [Feature]: Support native upstream token counting for Mistral models via Mistral's official responses token count endpoint. `enhancement` `llm translation`
- [#50644](https://github.com/BerriAI/litellm/issues/50644) [Bug]: trim_messages and shorten_message_to_fit_limit fail on multimodal lists, None content, and prefixed models `llm translation`
- [#50636](https://github.com/BerriAI/litellm/issues/50636) [Feature]: Support Vercel AI Gateway decision models on /v1/decisions `llm translation`
- [#50627](https://github.com/BerriAI/litellm/issues/50627) ID-JAG assertion with an empty scope claim mints a full proxy credential
- [#50621](https://github.com/BerriAI/litellm/issues/50621) Open-source MCP runtime behavior security tools available
- [#50620](https://github.com/BerriAI/litellm/issues/50620) test-probe
- [#50614](https://github.com/BerriAI/litellm/issues/50614) Guardrail contribution offer: deterministic physics/bounds checks (no-LLM, recomputable)

#### 🔒 Closed Issues
- [#24549](https://github.com/BerriAI/litellm/issues/24549) [Bug]: Xiaomi MiMo models: 'output_config' parameter causes AsyncCompletions.create() to fail with Claude Code
- [#28168](https://github.com/BerriAI/litellm/issues/28168) [Feature]: Export UI-managed proxy state to a declarative file
- [#25757](https://github.com/BerriAI/litellm/issues/25757) [Bug] Model-based file routing encoded file_id exceeds Azure OpenAI 64-char limit in Responses API
- [#35645](https://github.com/BerriAI/litellm/issues/35645) [Bug]: /v1/messages for DeepSeek maps output_config.effort and adaptive thinking to budget_tokens, which DeepSeek ignores
- [#35683](https://github.com/BerriAI/litellm/issues/35683) [Bug]: v1.94.1 image on GHCR has no matching git tag or GitHub Release
- [#35684](https://github.com/BerriAI/litellm/issues/35684) [Bug]: v1.95.0 image on GHCR has no matching git tag or GitHub Release
- [#35632](https://github.com/BerriAI/litellm/issues/35632) [Bug]: /cursor/chat/completions returns 500 on every streaming request — cursor_data_generator() got an unexpected keyword argument 'request'
- [#49751](https://github.com/BerriAI/litellm/issues/49751) [Bug]: Router retries and Retry-After sleeps ignore the caller's request timeout (x-litellm-timeout / x-stainless-timeout)
- [#34843](https://github.com/BerriAI/litellm/issues/34843) Classify guardrail blocks via an explicit block marker instead of HTTP status inference (follow-up to #33821)
- [#35594](https://github.com/BerriAI/litellm/issues/35594) [Bug]: DB-backed skills fail on /v1/chat/completions with Missing required parameter: 'tools[0].type'
- [#35623](https://github.com/BerriAI/litellm/issues/35623) [Bug]: model_info JSON missing created_at/created_by/updated_at causes UI to show "Unknown" despite correct values in DB columns
- [#35642](https://github.com/BerriAI/litellm/issues/35642) execute litellm.acompletion(...) raise exception:
- [#35666](https://github.com/BerriAI/litellm/issues/35666) [Bug]: Unmatched request paths are emitted as raw Prometheus route labels, causing unbounded cardinality
- [#35673](https://github.com/BerriAI/litellm/issues/35673) [Bug]: no model works
- [#43571](https://github.com/BerriAI/litellm/issues/43571) [Bug]: GET /key/info returns 500 MissingRequiredValueError (`where.token`) when the authenticated principal has no virtual key (api_key=None) instead of a clean 4xx
- [#50620](https://github.com/BerriAI/litellm/issues/50620) test-probe

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,215 · **Open issues:** 486 · **Last push:** <1h ago

On November 9, 2026, there were no new releases for Unsloth, but several significant updates were merged, enhancing functionality across various components. Key additions include the installation of FlashInfer's prebuilt kernels into the vLLM engine environment, the introduction of Ulysses for Gemma 4 text models, and improvements to the int8 GEMM and GEMV functionalities, which optimize performance on shared memory. Notably, changes to the Studio's upscaler ensure seams are normalized and final results are processed as uint8 on the host. However, the day also saw the emergence of several bugs, particularly issues with managed accounts failing to utilize a valid HF token and image generation models not loading on Intel Arc 140V, which may require urgent attention.

#### ✅ Merged PRs
- [#17063](https://github.com/unslothai/unsloth/pull/17063) Studio: install FlashInfer's prebuilt kernels into the vLLM engine env
- [#15883](https://github.com/unslothai/unsloth/pull/15883) Context parallel: Ulysses for Gemma 4 text models
- [#17166](https://github.com/unslothai/unsloth/pull/17166) Studio: fp8 denoisers on sm_89 no longer hang on the first render (CUDA graph replay under torch < 2.12)
- [#17101](https://github.com/unslothai/unsloth/pull/17101) Studio Wan fused blocks: one Triton binary per kernel for every sequence length
- [#17118](https://github.com/unslothai/unsloth/pull/17118) Studio Qwen-Image-2.1: encode prompts without the text encoder's unused K/V cache
- [#17167](https://github.com/unslothai/unsloth/pull/17167) Studio: run INT8 on T4 and other Turing GPUs instead of refusing it
- [#17158](https://github.com/unslothai/unsloth/pull/17158) FSDP2 save: compose the writer across equal meshes, not only identical ones
- [#17173](https://github.com/unslothai/unsloth/pull/17173) Studio FLUX.3: keep bf16 weights as stored on fp16-only GPUs and compute in float32 per layer
- [#17084](https://github.com/unslothai/unsloth/pull/17084) Studio int8 GEMM: the unlisted-card race switch acts between loads
- [#17106](https://github.com/unslothai/unsloth/pull/17106) Studio int8 GEMV: wide scale groups tile inside shared memory, a grouped miss no longer demotes per-row Linears
- [#17100](https://github.com/unslothai/unsloth/pull/17100) Studio Sol-H3 VAE: decide window masks from the geometry, build each RoPE table once per decode
- [#17097](https://github.com/unslothai/unsloth/pull/17097) Studio MiniMax-H3 VAE: stitch batched decoder tiles into the frame as they arrive
- [#17080](https://github.com/unslothai/unsloth/pull/17080) Studio GGUF: cast K-quant and legacy weights to bf16 in their own buffer
- [#17083](https://github.com/unslothai/unsloth/pull/17083) Studio upscaler: normalise seams and finalise uint8 in place on the host result
- [#17081](https://github.com/unslothai/unsloth/pull/17081) Studio NVFP4: the protected branch compiles once from a cold decode table and accepts fp16 inputs
- [#17099](https://github.com/unslothai/unsloth/pull/17099) Studio diffusion: launch the VAE and MOSS Triton kernels on the input's own card
- [#17091](https://github.com/unslothai/unsloth/pull/17091) Studio image postprocess: convert to uint8 in row strips with one float32 copy each
- [#17112](https://github.com/unslothai/unsloth/pull/17112) Studio: the load prefetch skips chunks already in the page cache and budgets its read buffers
- [#17114](https://github.com/unslothai/unsloth/pull/17114) Studio int8: fused MLPs and v2 Linears quantize their input with the probed one-pass kernel
- [#17111](https://github.com/unslothai/unsloth/pull/17111) Studio diffusion: pair Qwen-Image-2.1's guidance branches per streamed block
- [#15631](https://github.com/unslothai/unsloth/pull/15631) Studio: let chat call Unsloth's own MCP tools
- [#17078](https://github.com/unslothai/unsloth/pull/17078) Studio: judge the compiled ROCm W8A8 linear per card, not once per process
- [#17108](https://github.com/unslothai/unsloth/pull/17108) Studio: queued image generations wait on their own pool, not the default executor
- [#17075](https://github.com/unslothai/unsloth/pull/17075) Studio video: fall back to the tiled VAE decode when the Linux / macOS CPU allocator refuses
- [#17086](https://github.com/unslothai/unsloth/pull/17086) Studio: keep the LoRA fuse host backup off integrated GPU pins and inside the host RAM reserve
- [#17095](https://github.com/unslothai/unsloth/pull/17095) Studio MiniMax-H3: keep only the conditioner hidden state H3 reads (about 2 GiB less at 4096 tokens)
- [#17133](https://github.com/unslothai/unsloth/pull/17133) Studio: run the int8 / fp8 Triton widen on the operand's GPU
- [#17105](https://github.com/unslothai/unsloth/pull/17105) Studio: a denoiser-only LoRA change keeps the cached text embeddings
- [#17079](https://github.com/unslothai/unsloth/pull/17079) Studio diffusion: keep single-file int8 weights as int8 on T4 / pre-Ampere NVIDIA and Intel XPU under offload
- [#15629](https://github.com/unslothai/unsloth/pull/15629) Studio: per-tool MCP switches at the end of Settings > Agents
- [#15882](https://github.com/unslothai/unsloth/pull/15882) Context parallel: Ulysses for DeepSeek (V2 / V3 MLA, V3.2 indexer, V4 sink attention)
- [#17103](https://github.com/unslothai/unsloth/pull/17103) Studio text encoders: keep the fp8 storage across a layerwise-cast forward instead of re-casting it
- [#17060](https://github.com/unslothai/unsloth/pull/17060) Studio LTX VAE: keep only the open tile band on the card during tiled decode
- [#17059](https://github.com/unslothai/unsloth/pull/17059) Studio diffusion: FLUX.3 modulation heads project once per sample; offloaded Base edits reuse the conditioning streams
- [#17138](https://github.com/unslothai/unsloth/pull/17138) Studio LTX-2.5: keep a fixed negative prompt in the encoder cache (refresh entries on a hit)
- [#17096](https://github.com/unslothai/unsloth/pull/17096) Studio MiniMax-H3: normalise a reference video one VAE chunk at a time
- [#17102](https://github.com/unslothai/unsloth/pull/17102) Studio: re-merge only the layers of the LoRA adapters whose weight changed
- [#17071](https://github.com/unslothai/unsloth/pull/17071) Studio GGUF: load IQ1_S / IQ1_M / IQ2_XXS / IQ2_XS / IQ2_S / IQ3_XXS / IQ3_S on the diffusers path
- [#17076](https://github.com/unslothai/unsloth/pull/17076) Studio diffusion: expandable VAE decode keeps a runtime allocator opt-in and restores the exact settings
- [#17082](https://github.com/unslothai/unsloth/pull/17082) Studio MLX convert: pack 3 / 5 / 6-bit codes from Fortran-order or strided arrays
- [#17087](https://github.com/unslothai/unsloth/pull/17087) Studio: let peft 0.19 attach a LoRA to torchao int8 / fp8 weights of quantised single files
- [#17109](https://github.com/unslothai/unsloth/pull/17109) RoPE: rotate Q and K in one launch each way under torch.compile
- [#17129](https://github.com/unslothai/unsloth/pull/17129) Studio CLI tests: keep the --secure re-exec tests off the cloudflared download
- [#17136](https://github.com/unslothai/unsloth/pull/17136) Studio: bit-identical one-kernel RoPE for FLUX.3 eager attention (L4: -12% s/step)
- [#17124](https://github.com/unslothai/unsloth/pull/17124) Studio: run FLUX.3 in float32 on fp16-only GPUs (T4 renders were black)
- [#17131](https://github.com/unslothai/unsloth/pull/17131) Studio: packed nvfp4 / mxfp8 layers follow a module dtype cast
- [#17032](https://github.com/unslothai/unsloth/pull/17032) Studio RAG: clip re-embedded chunks and embeddings API inputs with batched token counts
- [#17110](https://github.com/unslothai/unsloth/pull/17110) Studio: each model's compile bundle holds only its own artifacts
- [#16745](https://github.com/unslothai/unsloth/pull/16745) Unsloth Studio: refuse Cosmos3 on diffusers 0.39 and 0.40 instead of failing at load or generate
- [#15005](https://github.com/unslothai/unsloth/pull/15005) Unsloth Studio / Desktop: queue image generations from the Images page and the API
- [#17031](https://github.com/unslothai/unsloth/pull/17031) Studio llama.cpp: remember the positive reasoning budget probe per binary
- [#16998](https://github.com/unslothai/unsloth/pull/16998) Studio tool output: strip ANSI in plain runs and find the tail without splitting the whole text
- [#16995](https://github.com/unslothai/unsloth/pull/16995) Studio chat: skip the transcript read when no message recorded a context fit
- [#17028](https://github.com/unslothai/unsloth/pull/17028) Studio downloads: skip the GGUF requirement lookup on scoped progress polls
- [#17030](https://github.com/unslothai/unsloth/pull/17030) Studio /v1/embeddings: count tokens in one batch and serialize float rows with tolist
- [#16999](https://github.com/unslothai/unsloth/pull/16999) Studio: load the chat runtime on use instead of in the startup bundle
- [#17033](https://github.com/unslothai/unsloth/pull/17033) Studio diffusion runs: keep a passing full-load verdict per unchanged bundle for the run listing
- [#16997](https://github.com/unslothai/unsloth/pull/16997) Deep Research: keep a clean attachment inventory clean when inserting the terminal fallback
- [#17029](https://github.com/unslothai/unsloth/pull/17029) Studio VLM conversion: fetch repo image files on a pool, settle rows in order
- [#17034](https://github.com/unslothai/unsloth/pull/17034) Studio cached models: keep parsed README front matter per unchanged file
- [#16994](https://github.com/unslothai/unsloth/pull/16994) unsloth chat: parse the streamed Markdown when a frame is drawn, not on every chunk
- [#16996](https://github.com/unslothai/unsloth/pull/16996) Studio SSM kernels: read the loaded torch build instead of a torch-import child per load
- [#17123](https://github.com/unslothai/unsloth/pull/17123) Studio LTX-2.5: one denoiser lease per CFG request, upload the next streamed encoder layer while this one runs
- [#17142](https://github.com/unslothai/unsloth/pull/17142) Studio: keep fp32 timestep and RoPE tables in fp32 on single-file loads
- [#17152](https://github.com/unslothai/unsloth/pull/17152) Studio: no strip behind Back to Hub over a background image
- [#17092](https://github.com/unslothai/unsloth/pull/17092) Studio Qwen-Image-2.1: reuse an unchanged condition image's VAE latents across renders
- [#17151](https://github.com/unslothai/unsloth/pull/17151) MoE DDP negative control: accept the idle rank's missing gradient, whichever rank fails first
- [#17141](https://github.com/unslothai/unsloth/pull/17141) Studio: streamed torchao weights no longer crash after a compile (Cannot swap t1 ... weakref)
- [#17132](https://github.com/unslothai/unsloth/pull/17132) Studio: skip QKV fusion when projections are kept packed
- [#17058](https://github.com/unslothai/unsloth/pull/17058) GRPO PrefixGrouper: engage only when the model's forward applies prefix_seg_info
- [#16965](https://github.com/unslothai/unsloth/pull/16965) Unsloth Studio: train video-capable VLMs on a dataset's video instead of dropping it
- [#17088](https://github.com/unslothai/unsloth/pull/17088) Studio: keep the lora_adapter_metadata strength of a rewritten LoRA file
- [#17027](https://github.com/unslothai/unsloth/pull/17027) Studio desktop: steady floating browser window on drag, resize and float
- [#17094](https://github.com/unslothai/unsloth/pull/17094) Studio MiniMax-H3: reuse the conditioner output when only the seed of a reference / keyframe render changes
- [#17066](https://github.com/unslothai/unsloth/pull/17066) Studio video: spool encoded stream chunks instead of holding a second raw clip
- [#17120](https://github.com/unslothai/unsloth/pull/17120) Studio: read GPU metadata from the CUDA driver API, not torch.cuda.get_device_properties
- [#17127](https://github.com/unslothai/unsloth/pull/17127) Studio: run single-file fp8 on torchao under group offload, and keep Qwen-Image-2.1's timestep table in fp32
- [#17139](https://github.com/unslothai/unsloth/pull/17139) Studio tests: import the new test helpers top-level when a sibling imports the module that way
- [#17135](https://github.com/unslothai/unsloth/pull/17135) Studio diffusion tests: plan as Linux does whatever the host can compile
- [#17119](https://github.com/unslothai/unsloth/pull/17119) Studio tests: keep the multi-GB fake checkpoints sparse on Windows
- [#17130](https://github.com/unslothai/unsloth/pull/17130) Backend CI: retry the ruff-unsloth wheel install on a release-asset 504
- [#17098](https://github.com/unslothai/unsloth/pull/17098) Studio sd.cpp: pick the Q8_0 BF16 cuBLAS route from the diffusion GGUF, not its companions (1.57x on A100)
- [#15881](https://github.com/unslothai/unsloth/pull/15881) Context parallel: Ulysses for MiniMax (M1 Lightning hybrid, M2)
- [#17104](https://github.com/unslothai/unsloth/pull/17104) Studio: AUTO W8A8 on ROCm RDNA keeps bf16 when the int8 plan still offloads
- [#17089](https://github.com/unslothai/unsloth/pull/17089) Studio sd.cpp: pass the Windows core count to MiniMax-H3 when sd.cpp would halve it
- [#17067](https://github.com/unslothai/unsloth/pull/17067) Studio: keep nvfp4 / mxfp8 layers packed when no native runtime runs them
- [#17068](https://github.com/unslothai/unsloth/pull/17068) Studio: widen stored fp8 / int8 weights without full float32 temporaries
- [#17064](https://github.com/unslothai/unsloth/pull/17064) Studio MiniMax-H3: run int8 / fp8 denoisers where torchao's runtime does not (Ampere fp8, ROCm, MPS)
- [#17117](https://github.com/unslothai/unsloth/pull/17117) Studio tests: skip pre-quant tests without torchao and pin the Mac memory reading
- [#17107](https://github.com/unslothai/unsloth/pull/17107) Studio tests: keep two Linux-host assumptions off the Windows and macOS legs
- [#17065](https://github.com/unslothai/unsloth/pull/17065) Studio: offloaded native int8 denoisers release their safetensors file once pinned (LTX-2.5 holds ~23 GiB less host mapping)
- [#17039](https://github.com/unslothai/unsloth/pull/17039) Context parallel: register the Qwen3.5 hybrid cp x native FSDP2 cell, add coverage tests
- [#17057](https://github.com/unslothai/unsloth/pull/17057) Studio diffusion: Automatic CFG-parallel no longer refuses an idle card over its own CUDA context
- [#17073](https://github.com/unslothai/unsloth/pull/17073) Tests: skip the compiled half of the fp8 codes layer test on Windows without MSVC
- [#17050](https://github.com/unslothai/unsloth/pull/17050) GRPO: score a hooked output head through its own forward
- [#15880](https://github.com/unslothai/unsloth/pull/15880) Context parallel: Ulysses for Kimi-Linear (KDA + MLA), and fix Kimi-Linear MoE gate backward

#### 🐛 New Issues
- [#17156](https://github.com/unslothai/unsloth/issues/17156) [Bug] Managed account doesn't use a valid HF token `feature request` `bug`
- [#17169](https://github.com/unslothai/unsloth/issues/17169) Appearance: the glass and background option pickers close on every pick
- [#17163](https://github.com/unslothai/unsloth/issues/17163) Settings: composer settings are split across the Appearance and Chat tabs, with no single owner
- [#17162](https://github.com/unslothai/unsloth/issues/17162) Appearance: the glass material setting is exposed twice in the same tab, with two names and two option sets
- [#17161](https://github.com/unslothai/unsloth/issues/17161) Appearance: the palette menu closes after every pick, so you cannot browse
- [#17147](https://github.com/unslothai/unsloth/issues/17147) [Bug] unsloth-rocm Docker: gfx1031 (RX 6700 XT) passes the startup check as "RDNA 2", then PyTorch segfaults on the first GPU op
- [#17140](https://github.com/unslothai/unsloth/issues/17140) [Bug] Please fill in your issue title here. `feature request` `bug`
- [#17137](https://github.com/unslothai/unsloth/issues/17137) [Bug] Image generation models fail to load on Intel Arc 140V `feature request` `bug`
- [#17126](https://github.com/unslothai/unsloth/issues/17126) [Feature] be able to edit images with connected models `feature request`
- [#17074](https://github.com/unslothai/unsloth/issues/17074) [Bug] Model size mismatch between Model Hub and Model Picker dropdown `feature request` `bug`

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,182 · **Open issues:** 402 · **Last push:** 1h ago

On November 9, 2026, there were no new releases for AIBrix. However, several significant updates were merged, including feature additions like the pre/post processor extension in #3425 and enhancements to the audio generation route in #3419, which now includes omni samples. Key bug fixes were also addressed, such as skipping unscored candidate pods in the leastLatency scheduler (#3406) and resolving an issue where a ModelClaim engine remains unready after being previously ready (#3396). Additionally, two notable new issues emerged: a bug regarding the ModelClaim engine staying in a Sleeping state following an EngineCore crash (#3426) and a flaky test concerning SleepLowerPriority preemption (#3420).

#### ✅ Merged PRs
- [#3425](https://github.com/vllm-project/aibrix/pull/3425) feat(openai-frontend): add pre/post processor extension
- [#3423](https://github.com/vllm-project/aibrix/pull/3423) [Docs] Complete the KV connector and prefill policy options in ENV_VARS.md
- [#3419](https://github.com/vllm-project/aibrix/pull/3419) feat: Route POST /v1/audio/generate through the gateway and add omni samples
- [#3406](https://github.com/vllm-project/aibrix/pull/3406) [Bug] Skip unscored candidate pods in leastLatency scheduler (#3405)
- [#3415](https://github.com/vllm-project/aibrix/pull/3415) [Feat] Respect priority when making room for a new ModelClaim
- [#3417](https://github.com/vllm-project/aibrix/pull/3417) feat(openai-frontend): expose Responses and engine-native endpoints
- [#3396](https://github.com/vllm-project/aibrix/pull/3396) [Bug] Restart a ModelClaim engine that stays unready after it was ready

#### 🐛 New Issues
- [#3426](https://github.com/vllm-project/aibrix/issues/3426) [Bug] ModelClaim engine stays Sleeping after EngineCore crashes during wake `kind/bug` `area/gateway` `area/runtime` `area/kv-cache` 💬2
- [#3420](https://github.com/vllm-project/aibrix/issues/3420) flaky test SleepLowerPriority preemption `triage/accepted` `kind/misc` `area/runtime` `area/orchestration` 💬2

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,424 · **Open issues:** 622 · **Last push:** <1h ago

On November 9, 2026, Semantic Router saw no new releases, but several important bug fixes were merged, including #5693, which enables adaptive thinking on Responses backends, and #5505, which ensures that contrastive jailbreak embeddings are properly validated. Additionally, #5995 addressed an issue where header mutations would overwrite values instead of appending. Among the new issues, #5993 stands out, reporting that the Responses stream:true returns a stream_incomplete error when the upstream provides a complete JSON body. Overall, today was characterized by routine maintenance but highlighted key improvements in system reliability and error handling.

#### ✅ Merged PRs
- [#5693](https://github.com/vllm-project/semantic-router/pull/5693) [Bug] Let the decision set adaptive thinking on Responses backends too
- [#5505](https://github.com/vllm-project/semantic-router/pull/5505) [Bug] Validate contrastive jailbreak embeddings
- [#5657](https://github.com/vllm-project/semantic-router/pull/5657) [CI/Build] Retry transient 5xx reads in the Community Label Sync
- [#5995](https://github.com/vllm-project/semantic-router/pull/5995) [Bug] Make header_mutation add append instead of overwrite

#### 🐛 New Issues
- [#5993](https://github.com/vllm-project/semantic-router/issues/5993) [Bug] Responses stream:true returns stream_incomplete when the upstream answers a complete JSON body `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬3
- [#5994](https://github.com/vllm-project/semantic-router/issues/5994) [Bug] header_mutation add overwrites instead of appending: ext_proc reads the deprecated append flag `bug` `accepted` `wg/data-plane-networking` 💬2
- [#6006](https://github.com/vllm-project/semantic-router/issues/6006) [Bug] setup-kind hides a failed Kind download as Exec format error `accepted` `wg/enterprise-environment` 💬2
- [#5989](https://github.com/vllm-project/semantic-router/issues/5989) [Bug] Dashboard router contract allows POST /api/v1/diagnostics/nli, which the router no longer serves `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#5991](https://github.com/vllm-project/semantic-router/issues/5991) [Bug] Operator reads any failed route.openshift.io List as OpenShift and caches it for the process lifetime `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#5996](https://github.com/vllm-project/semantic-router/issues/5996) [Bug] vllm-sr config migrate drops providers.models[].deployment `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#5998](https://github.com/vllm-project/semantic-router/issues/5998) [Bug] K8s reconcile still resets explicit 0 to defaults for response_api, memory and flow state `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#6012](https://github.com/vllm-project/semantic-router/issues/6012) [Bug] Stored response input_items regenerate instruction item IDs on every read `bug` `needs-acceptance` `wg/agentic-context` 💬1
- [#6003](https://github.com/vllm-project/semantic-router/issues/6003) [Docs] Track the four Maintainer nominations and roster update `community` `accepted` `owner/maintainers` 💬1
- [#6011](https://github.com/vllm-project/semantic-router/issues/6011) [Bug] Operator retains an outdated Progressing condition after readiness drops to zero `bug` `needs-acceptance` `wg/enterprise-environment`
- [#6008](https://github.com/vllm-project/semantic-router/issues/6008) [Bug] vela3 Generic Span routing fails when PII buckets are missing `bug` `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#2782](https://github.com/vllm-project/semantic-router/issues/2782) [Epic] Establish typed Router Model deployment, lifecycle, and compatibility contracts
- [#5238](https://github.com/vllm-project/semantic-router/issues/5238) [Bug] Contrastive Jailbreak Classifier Accepts Invalid Knowledge-Base Embeddings
- [#2337](https://github.com/vllm-project/semantic-router/issues/2337) [Research] Explore additional Looper-family routing algorithms
- [#2476](https://github.com/vllm-project/semantic-router/issues/2476) [Feature] Add reproducible dependency and toolchain vulnerability gates
- [#5130](https://github.com/vllm-project/semantic-router/issues/5130) [Test] Lock NormalizeCandidateScores' boundary behavior
- [#5496](https://github.com/vllm-project/semantic-router/issues/5496) [Bug] AutoMix cost-aware selection inverts preference and verification bonus on negative expected values
- [#5609](https://github.com/vllm-project/semantic-router/issues/5609) [Bug] Session memory sweeps every stored session under a global lock on each routed request
- [#3195](https://github.com/vllm-project/semantic-router/issues/3195) [Feature] Define typed Router Model manifests, deployments, capabilities, and resolved bindings
- [#5774](https://github.com/vllm-project/semantic-router/issues/5774) [Bug] Long coding-agent requests are refused on a context estimate they fit under
- [#5429](https://github.com/vllm-project/semantic-router/issues/5429) [Bug] RouterDC initialization holds readers across external embedding calls
- [#5161](https://github.com/vllm-project/semantic-router/issues/5161) [discussion] Replace classifier-driven routing with Decision models
- [#5683](https://github.com/vllm-project/semantic-router/issues/5683) [Bug] The same agent request gets different reasoning on Chat, Messages and Responses backends
- [#5680](https://github.com/vllm-project/semantic-router/issues/5680) [Bug] The Router doesn't log why it refused a request
- [#5743](https://github.com/vllm-project/semantic-router/issues/5743) [Bug] A PDF in a tool result ends an agent session on a model without file input
- [#5603](https://github.com/vllm-project/semantic-router/issues/5603) [Bug] vela3-fast cuts truncating evidence span questions at 8,192 tokens
- [#5744](https://github.com/vllm-project/semantic-router/issues/5744) [Docs] Codex through its built-in provider spends six seconds per run on a WebSocket the Router does not serve
- [#5994](https://github.com/vllm-project/semantic-router/issues/5994) [Bug] header_mutation add overwrites instead of appending: ext_proc reads the deprecated append flag
- [#5765](https://github.com/vllm-project/semantic-router/issues/5765) [Bug] HTTP domain classifier skips its label mapping when it has no local model id
- [#5623](https://github.com/vllm-project/semantic-router/issues/5623) [Bug] Community Label Sync stops the whole sweep on the first transient 5xx

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*