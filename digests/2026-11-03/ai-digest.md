# 📡 AI Ecosystem Digest — 2026-11-03

> Generated 2026-11-03 03:51 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 154,320 | 16 | 22 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 132,910 | 22 | 8 | 50 | 1 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,686 | 0 | 0 | 1 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,330 | 17 | 12 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 224,148 | 21 | 19 | 0 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,906 | 22 | 14 | 10 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,759 | 145 | 163 | 129 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 259,918 | 27 | 5 | 3 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,173 | 48 | 29 | 32 | 1 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,384 | 7 | 21 | 31 | 1 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,212 | 14 | 22 | 30 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 185,731 | 10 | 4 | 2 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,590 | 33 | 29 | 27 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,984 | 8 | 22 | 61 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,176 | 4 | 9 | 2 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,385 | 8 | 24 | 6 | 0 |

---

## ✨ Highlights

- **Claude Code** released [v2.1.317](https://github.com/anthropics/claude-code/releases/tag/v2.1.317), featuring enhancements and bug fixes.
- **OpenAI Codex** launched [rust-v0.167.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4) with significant improvements in transcript handling.
- **OpenClaw** introduced [v2026.10.10](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10), adding new features for iOS provisioning and browser debugging.
- A notable new issue in **vLLM** regarding "[ROCm][Bug] Muse Spark long-context c40 on MI350X" gained traction with [8 comments](https://github.com/vllm-project/vllm/issues/65190).
- **OpenCode** reported a critical issue where "[Bug]: OPENBOTJR CLOSES ISSUES THAT HAVE RESPONSES WITH 'HAVEN'T HEARD BACK'](https://github.com/anomalyco/opencode/issues/61304) garnered [5 comments](https://github.com/anomalyco/opencode/issues/61304) due to user response frustrations.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 154,320 · **Open issues:** 16,225 · **Last push:** 2h ago

On November 3, 2026, Claude Code released version 2.1.317, which introduced several important updates, including a warning for the `/schedule` command when new cloud scheduled tasks include unrequested connectors, and a precautionary check before web or shell tool calls that involve sending the account email address to the network. Enhancements to the Agent SDK were also made with the addition of the `onFailure: "block"` option for hook callbacks. In terms of merged contributions, issue triage and deduplication workflows were successfully migrated to Claude Sonnet 5.5. Notably, new issues include a bug report (#106743) where the tengu_clever_orbit experiment replaced WebFetch without user consent, leading to significant session delays.

#### 🚀 New Releases
- [v2.1.317](https://github.com/anthropics/claude-code/releases/tag/v2.1.317) v2.1.317

#### ✅ Merged PRs
- [#106583](https://github.com/anthropics/claude-code/pull/106583) Move issue triage and dedupe workflows to Claude Sonnet 5.5

#### 🐛 New Issues
- [#106743](https://github.com/anthropics/claude-code/issues/106743) [BUG] tengu_clever_orbit experiment replaced WebFetch without consent and leaves sessions waiting for minutes `bug` `platform:macos` `area:tools` `regression` 💬1
- [#106746](https://github.com/anthropics/claude-code/issues/106746) [BUG] Claude Desktop (Windows): clicks and scrolling blocked system-wide in a screen region; foreground drops to NULL until Claude Desktop is restarted `bug` `platform:windows` `area:desktop` 💬1
- [#106864](https://github.com/anthropics/claude-code/issues/106864) [Bug] UI becomes unresponsive after input containing Hindi characters in markdown file `bug` `platform:macos` `area:tui` 💬1
- [#106867](https://github.com/anthropics/claude-code/issues/106867) [Bug] /insights command returns unexpected response
- [#106866](https://github.com/anthropics/claude-code/issues/106866) reasults are good but use to many tokns `enhancement` `area:cost`
- [#106865](https://github.com/anthropics/claude-code/issues/106865) [GitHub integration] Cowork cloud sessions get 403 "Use add_repo" but no add_repo tool exists – settings all green (personal account) `duplicate` `platform:windows` `area:cowork` `github-integration`
- [#106863](https://github.com/anthropics/claude-code/issues/106863) Background subagent progress summary misses prompt cache, rewriting full context about every 35s `bug` `has repro` `platform:macos` `area:cost`
- [#106862](https://github.com/anthropics/claude-code/issues/106862) [Bug] /chrome prints nothing and native messaging host file is never created on macOS `bug` `platform:macos` `area:chrome`
- [#106861](https://github.com/anthropics/claude-code/issues/106861) Support a local terminal client for a Claude Code session running on another machine `enhancement` `area:tui` `area:plugins`
- [#106860](https://github.com/anthropics/claude-code/issues/106860) Standing user rules are not applied at the moment of action; the model repeats the same violation after the user corrects it and after saving the rule to memory `bug` `area:model` `area:core`
- [#106859](https://github.com/anthropics/claude-code/issues/106859) [GitHub integration] `bug` `area:claude-code-web` `platform:web` `github-integration`
- [#106858](https://github.com/anthropics/claude-code/issues/106858) [BUG] Windows: 2.1.317 sessions exit after ~5 min; Remote Control won't reconnect after --resume (2.1.316 and 2.1.317) `bug` `has repro` `platform:windows` `regression`
- [#106855](https://github.com/anthropics/claude-code/issues/106855) Bug Report: Insulting message with no actionable issue details `bug` `platform:macos`
- [#106857](https://github.com/anthropics/claude-code/issues/106857) [BUG] Desktop Code tab: Browser pane exposes only preview_list/preview_logs/preview_stop on one org, full tool set on another (same machine) `bug` `platform:windows` `area:tools` `regression`
- [#106856](https://github.com/anthropics/claude-code/issues/106856) threads can run commands for you autonomously projects have many problems `bug` `needs-info`
- [#106854](https://github.com/anthropics/claude-code/issues/106854) [BUG] [Windows] Claude in Chrome: extension signed in, but list_connected_browsers stays [] (persists after quitting Claude Desktop, removing its native host, and /mcp reconnect) `bug` `platform:windows` `regression` `area:chrome`

#### 🔒 Closed Issues
- [#90854](https://github.com/anthropics/claude-code/issues/90854) [Bug][cyber] False positive during cloud storage cleanup of processed audio files (req_011CeSgnZfpGSUXLNLRx7yVZ)
- [#90846](https://github.com/anthropics/claude-code/issues/90846) [Bug][cyber] False positive when generating documentation for cloud message deletion API (req_011CeSgMcfhX5W33ef7mQHyy)
- [#90832](https://github.com/anthropics/claude-code/issues/90832) [Bug][cyber] Safeguard blocks system UI accent color customization (req_011CePE6NCbVFMAXMXzjKWu8)
- [#90839](https://github.com/anthropics/claude-code/issues/90839) [Bug][cyber] Safeguard blocked locating and retrieving a desktop app from a remote session (req_011CePztWUagyeLs5Xq4e3cq)
- [#90835](https://github.com/anthropics/claude-code/issues/90835) [Bug][cyber] Safeguard triggers false positive during input sanitization refactoring (req_011CePEDvo6m4M6YiwTG3UJY)
- [#90833](https://github.com/anthropics/claude-code/issues/90833) [Bug][cyber] False positive halts routine unit test refactoring after user venting exclamation (req_011CePE8sJ87bZxriPxDC1xb)
- [#90831](https://github.com/anthropics/claude-code/issues/90831) [Bug][cyber] Safeguard false positive blocks routine input validation code edits (req_011CePE3EQCtA6n5B9tguam7)
- [#90830](https://github.com/anthropics/claude-code/issues/90830) [Bug][cyber] Safeguard false positive during custom ROM UI dynamic theme accent color work (req_011CePE2x8QpvJVz8WamVkvn)
- [#90829](https://github.com/anthropics/claude-code/issues/90829) [Bug][cyber] False positive on mobile OS user interface accent styling and media app setup (req_011CePDzJWvK6BMQwNSrpzuY)
- [#88682](https://github.com/anthropics/claude-code/issues/88682) [Bug][cyber] False positive during application binary build and staging deployment (req_011CeGPdaQwyBwTQQ5sWBBVQ)
- [#90855](https://github.com/anthropics/claude-code/issues/90855) [Bug][cyber] Safeguard flags inspecting local storage files during desktop app token configuration (req_011CeSnpQkJ3Bcj21xBQzcFu)
- [#90847](https://github.com/anthropics/claude-code/issues/90847) [Bug][cyber] Blocked request for developer documentation on cloud email deletion API (req_011CeSgRoxxq21mtU5n2ZPC9)
- [#90845](https://github.com/anthropics/claude-code/issues/90845) [Bug][cyber] False positive on Android audio log containing missing su binary exception (req_011CeQZpRm3fzJTBggVEjqAW)
- [#90843](https://github.com/anthropics/claude-code/issues/90843) [Bug][cyber] Safeguards block fixing honeypot database persistence and server config (req_011CeQ7J6qQ1ixkpcuY1yuP8)
- [#90842](https://github.com/anthropics/claude-code/issues/90842) [Bug][cyber] False positive while extracting service endpoints from desktop application config (req_011CeQ1JyPzpFqFBB7QQfVjU)
- [#90841](https://github.com/anthropics/claude-code/issues/90841) [Bug][cyber] False positive during static analysis of installer package to extract API endpoints (req_011CeQ1D6zEr4CSEp6ZNcPdn)
- [#90840](https://github.com/anthropics/claude-code/issues/90840) [Bug][cyber] Safeguard blocks retrieving desktop application installer from remote session (req_011CePzuRJJyQJ95rihuHoTJ)
- [#90838](https://github.com/anthropics/claude-code/issues/90838) [Bug][cyber] False positive while building and staging a Go web dashboard binary (req_011CePtnnCWtpz42JyQuq9BK)
- [#90837](https://github.com/anthropics/claude-code/issues/90837) [Bug][cyber] Broad safeguard blocks finding public contact details and drafting outreach email (req_011CePtYNRPRKCKGneBxkNfd)
- [#90836](https://github.com/anthropics/claude-code/issues/90836) [Bug][cyber] Safeguard false positive during routine input validation code refactoring (req_011CePHPwAZ86JRZRz1zTRv3)
- [#90834](https://github.com/anthropics/claude-code/issues/90834) [Bug][cyber] False positive on mobile OS UI accent color customization (req_011CePE9PBxXYjVbncTF9YUr)
- [#90827](https://github.com/anthropics/claude-code/issues/90827) [Bug][cyber] Safeguard blocks repository search for hardcoded backend placeholder data (req_011CePCSbaat7V2XqD2Todqh)

### OpenAI Codex (`openai/codex`)

**Stars:** 132,910 · **Open issues:** 26,149 · **Last push:** 1h ago

On November 3, 2026, OpenAI Codex released version rust-v0.167.0-alpha.4, introducing enhancements and bug fixes. Key merged pull requests include the inclusion of environment selection lifetimes for executor attachments and the addition of assistant content token counts in completion notifications, alongside improvements to the model search discovery to MCP bindings and the handling of HTTP fallback scenarios during active sessions. Notably, several new issues have emerged, with a particularly concerning one (#58858) reporting that the Codex CLI is returning a "Selected model is at capacity" message across all models despite users having sufficient Plus allowances.

#### 🚀 New Releases
- [rust-v0.167.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4) 0.167.0-alpha.4

#### ✅ Merged PRs
- [#59047](https://github.com/openai/codex/pull/59047) Decode live transcript updates in the cloud client
- [#59043](https://github.com/openai/codex/pull/59043) Tie executor attachments to environment selection lifetimes
- [#59041](https://github.com/openai/codex/pull/59041) Expose assistant content token counts in completion notifications
- [#59036](https://github.com/openai/codex/pull/59036) Resolve model-selected search providers with policy-aware fallback
- [#59034](https://github.com/openai/codex/pull/59034) Add model Search discovery to MCP bindings
- [#59033](https://github.com/openai/codex/pull/59033) Add web search provider metadata and configuration
- [#59028](https://github.com/openai/codex/pull/59028) Use prepared MCP owner permissions in Guardian reviews
- [#59025](https://github.com/openai/codex/pull/59025) Remove strict third-party tool deferral in Code Mode Only
- [#59021](https://github.com/openai/codex/pull/59021) Allow concurrent readers of the installation ID
- [#59020](https://github.com/openai/codex/pull/59020) Preserve sandbox context in prepared MCP calls
- [#59018](https://github.com/openai/codex/pull/59018) Add WebSocket connection metrics with reauthentication labels
- [#59016](https://github.com/openai/codex/pull/59016) Make observed thread metadata writes atomic and retryable
- [#59015](https://github.com/openai/codex/pull/59015) Make SQLite schema migrations safe for concurrent startup
- [#59011](https://github.com/openai/codex/pull/59011) Add optional total token limits to elastic section configuration
- [#59009](https://github.com/openai/codex/pull/59009) Centralize filesystem permission resolution for sandbox enforcement
- [#59007](https://github.com/openai/codex/pull/59007) Add host cycling and saved defaults for new TUI conversations
- [#59003](https://github.com/openai/codex/pull/59003) Preserve Guardian review framing under elastic context limits
- [#59001](https://github.com/openai/codex/pull/59001) Test connection events against active environment selections
- [#59000](https://github.com/openai/codex/pull/59000) Allow hosted child threads to inherit a root session ID
- [#58998](https://github.com/openai/codex/pull/58998) Preserve steering when returning to a long-running turn
- [#58996](https://github.com/openai/codex/pull/58996) Deliver environment hook decisions while output reads are queued
- [#58992](https://github.com/openai/codex/pull/58992) Add opt-in side conversation panes to the TUI
- [#58990](https://github.com/openai/codex/pull/58990) Preserve modified Ctrl+C keys in active TUI views
- [#58989](https://github.com/openai/codex/pull/58989) Keep HTTP fallback active for the rest of the session
- [#58988](https://github.com/openai/codex/pull/58988) Respect delivery boundaries for injected agent messages
- [#58986](https://github.com/openai/codex/pull/58986) Move agent message-board backend construction into the extension
- [#58984](https://github.com/openai/codex/pull/58984) Allow hosts to restrict a thread's root-only capabilities
- [#58983](https://github.com/openai/codex/pull/58983) Extend and bound exec-server session recovery
- [#58980](https://github.com/openai/codex/pull/58980) Record turn critical path metrics and trace fields
- [#58978](https://github.com/openai/codex/pull/58978) Enable the segment heap on Windows CI runners
- [#58975](https://github.com/openai/codex/pull/58975) Add usage accounting for host-owned agent runtimes
- [#58974](https://github.com/openai/codex/pull/58974) Bind final-message output before running sandboxed tools
- [#58973](https://github.com/openai/codex/pull/58973) Add opt-in MCP discovery for in-memory agent message boards
- [#58971](https://github.com/openai/codex/pull/58971) Fix Escape handling in memory reset confirmation
- [#58970](https://github.com/openai/codex/pull/58970) Keep automatic thread title saves off the TUI event loop
- [#58969](https://github.com/openai/codex/pull/58969) Avoid unnecessary rendering during TUI history loading and insertion
- [#58966](https://github.com/openai/codex/pull/58966) Move protocol permissions tests into a separate file
- [#58964](https://github.com/openai/codex/pull/58964) Stabilize and enable client tool output retention by default
- [#58963](https://github.com/openai/codex/pull/58963) Add host-owned turn admission to the agent runtime
- [#58962](https://github.com/openai/codex/pull/58962) Preserve Guardian budget policy through review recovery
- [#58960](https://github.com/openai/codex/pull/58960) Prefer indexed rollout paths when resolving ancestors
- [#58959](https://github.com/openai/codex/pull/58959) Recover inherited history from alternate rollout copies
- [#58957](https://github.com/openai/codex/pull/58957) Cache marketplace name mismatches during automatic upgrades
- [#58956](https://github.com/openai/codex/pull/58956) Allow volatile World State sections to refresh after compaction
- [#58955](https://github.com/openai/codex/pull/58955) Delete Guardian evidence boards when permanently deleting threads
- [#58954](https://github.com/openai/codex/pull/58954) Add a thread-store builder with host cleanup support
- [#58953](https://github.com/openai/codex/pull/58953) Support caller-owned sideband channels for realtime attachments
- [#58950](https://github.com/openai/codex/pull/58950) Recover WebSocket transport after transient HTTP fallback
- [#58946](https://github.com/openai/codex/pull/58946) Preserve Guardian sender context for cloud deliveries with orbit IDs
- [#58945](https://github.com/openai/codex/pull/58945) Fix model selection after provider setup

#### 🐛 New Issues
- [#58888](https://github.com/openai/codex/issues/58888) CLI polls usage every 5s in idle sessions when included quota is exhausted despite paid credits; concurrent inference 429s `bug` `TUI` `rate-limits` `CLI` 💬3
- [#58858](https://github.com/openai/codex/issues/58858) Codex returns "Selected model is at capacity" across models despite sufficient Plus allowance `bug` `windows-os` `rate-limits` `CLI` 💬3
- [#58878](https://github.com/openai/codex/issues/58878) CLI uses “permissions” inconsistently between /permissions and the status line `bug` `sandbox` `TUI` `CLI` 💬2
- [#58867](https://github.com/openai/codex/issues/58867) /permissions: “Ask for approval” still allows workspace edits without approval `bug` `sandbox` `TUI` `CLI` 💬2
- [#58852](https://github.com/openai/codex/issues/58852) Codex CLI captures terminal mouse events and clipboard paste fails `bug` `TUI` `CLI` 💬2
- [#59013](https://github.com/openai/codex/issues/59013) [Windows 11] Codex CLI 0.166.0 TUI does not accept any keyboard input from startup `bug` `windows-os` `TUI` `CLI` 💬1
- [#58965](https://github.com/openai/codex/issues/58965) Add queue-aware foreground yield at native wait boundaries, distinct from user Esc `enhancement` `TUI` `CLI` 💬1
- [#58881](https://github.com/openai/codex/issues/58881) “Workspace · Ask for approval” conceals that workspace files can be edited without approval `bug` `sandbox` `TUI` `CLI` 💬1
- [#59050](https://github.com/openai/codex/issues/59050) [macOS Desktop] Reused subagent loses IAB access after normal completion; fresh subagent succeeds `bug` `app` `subagent` `browser` 💬1
- [#59049](https://github.com/openai/codex/issues/59049) [CLI/TUI] 0.166.0: opt-in automatic display of async question choices in Default mode `enhancement` `TUI` `CLI` 💬1
- [#59046](https://github.com/openai/codex/issues/59046) # Codex VS Code Extension — Unable to Verify Feedback Permissions `bug` `windows-os` `extension` `safety-check` 💬1
- [#59045](https://github.com/openai/codex/issues/59045) codex Selected Model is at Capacity Overspamming error `bug` `rate-limits` `app` 💬1
- [#59044](https://github.com/openai/codex/issues/59044) Windows: Sending a message with an Excel attachment fails and returns to the composer `bug` `windows-os` `app` 💬1
- [#59042](https://github.com/openai/codex/issues/59042) Feature request: configurable wait budget gate for exec_command yield_time_ms and write_stdin polling `enhancement` `CLI` `tool-calls` `hooks` 💬1
- [#59031](https://github.com/openai/codex/issues/59031) ChatGPT Work conversation froze while reviewing a GitHub pull request - 0f5dc0aa-7b86-4a09-aae8-7397a34a3a44 `bug` `auth` `app` `session` 💬1
- [#59052](https://github.com/openai/codex/issues/59052) [macOS desktop] Legacy local chat cannot load after upgrade: thread/items/list is not supported yet `bug` `app` `app-server`
- [#59051](https://github.com/openai/codex/issues/59051) macOS: pet initialization can throw during local app-server reconnection and trigger a full-window error page `bug` `app` `app-server` `pets`
- [#59048](https://github.com/openai/codex/issues/59048) Daybreak Blue older task reports missing hardware-key authentication after successful reauth; fresh tasks work `bug` `auth` `app` `safety-check`
- [#59039](https://github.com/openai/codex/issues/59039) Windows packaged LocalSystem sandbox service: supported two-user topology, owner admission and update/rollback contract `documentation` `windows-os` `sandbox` `app`
- [#59038](https://github.com/openai/codex/issues/59038) Windows sandbox initialization fails: SYSTEM denied WRITE_DAC on .sandbox-bin `bug` `windows-os` `sandbox` `app`
- [#59035](https://github.com/openai/codex/issues/59035) Windows Codex child: GetFinalPathNameByHandleW returns ERROR_ACCESS_DENIED after successful CreateFileW `bug` `windows-os` `sandbox`
- [#59037](https://github.com/openai/codex/issues/59037) Pre-turn compaction failures append incoming prompts to active history, amplifying later compaction requests `bug` `CLI` `context` `session`

#### 🔒 Closed Issues
- [#58888](https://github.com/openai/codex/issues/58888) CLI polls usage every 5s in idle sessions when included quota is exhausted despite paid credits; concurrent inference 429s
- [#58878](https://github.com/openai/codex/issues/58878) CLI uses “permissions” inconsistently between /permissions and the status line
- [#58867](https://github.com/openai/codex/issues/58867) /permissions: “Ask for approval” still allows workspace edits without approval
- [#58965](https://github.com/openai/codex/issues/58965) Add queue-aware foreground yield at native wait boundaries, distinct from user Esc
- [#58881](https://github.com/openai/codex/issues/58881) “Workspace · Ask for approval” conceals that workspace files can be edited without approval
- [#59050](https://github.com/openai/codex/issues/59050) [macOS Desktop] Reused subagent loses IAB access after normal completion; fresh subagent succeeds
- [#49148](https://github.com/openai/codex/issues/49148) It is not possible to ask ChatGPT within a conversation to archive chats in bulk.
- [#49155](https://github.com/openai/codex/issues/49155) The remaining usage quota should be displayed in gray in the macOS client

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,686 · **Open issues:** 775 · **Last push:** 2h ago

On November 3, 2026, the Gemini CLI released version v0.67.0-nightly.20261103.g0ac57c029, which includes a critical fix that prevents interrupted downloads of the Whisper model from being incorrectly marked as installed, thanks to a contribution from @tadipavan. This change addresses a potential issue that could impact user experience and model accessibility. Additionally, there were no new issues reported in the last 24 hours, indicating a stable environment following this update. Overall, the day was primarily focused on improving the reliability of model downloads without the introduction of further complications.

#### 🚀 New Releases
- [v0.67.0-nightly.20261103.g0ac57c029](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261103.g0ac57c029) Release v0.67.0-nightly.20261103.g0ac57c029

#### ✅ Merged PRs
- [#30058](https://github.com/google-gemini/gemini-cli/pull/30058) fix(core): prevent interrupted Whisper model downloads from being treated as installed

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,330 · **Open issues:** 2,188 · **Last push:** 2h ago

On November 3, 2026, GitHub Copilot CLI released version 1.0.106-5, which fixed the adherence to the `includeCoAuthoredBy: false` setting in ACP mode, ensuring that ACP clients do not add a Co-authored-by trailer to commits. Additionally, this version improved the visibility of targeted settings and preserved telemetry-disabled warnings in session history. Other recent updates include version 1.0.106-4, which addressed issues related to session visibility and improved file attachment mentions. Among the new issues reported today, #5335 highlights a significant problem where repeated HTTP 422 cybersecurity-risk flags are blocking legitimate local flaky-test debugging efforts.

#### 🚀 New Releases
- [v1.0.106-5](https://github.com/github/copilot-cli/releases/tag/v1.0.106-5) 1.0.106-5
- [v1.0.106-4](https://github.com/github/copilot-cli/releases/tag/v1.0.106-4) 1.0.106-4
- [v1.0.106-3](https://github.com/github/copilot-cli/releases/tag/v1.0.106-3) 1.0.106-3

#### 🐛 New Issues
- [#5335](https://github.com/github/copilot-cli/issues/5335) Repeated HTTP 422 cybersecurity-risk flags block legitimate local flaky-test debugging `triage` 💬1
- [#5334](https://github.com/github/copilot-cli/issues/5334) Image paste (Ctrl+V/Meta+V) doesn't work in VS Code devcontainer terminal `triage`
- [#5320](https://github.com/github/copilot-cli/issues/5320) Support OSC 7501 agent-status reporting for herdr-app/herdr-core `triage`
- [#5337](https://github.com/github/copilot-cli/issues/5337) MCP OAuth: authorize request sends resource with a trailing slash that differs from the resource
- [#5338](https://github.com/github/copilot-cli/issues/5338) Extension API to read and restore the composer draft (unsent input) `triage`
- [#5336](https://github.com/github/copilot-cli/issues/5336) Add a per-run switch that disables every user MCP server, including under --acp `triage`
- [#5333](https://github.com/github/copilot-cli/issues/5333) Copilot cloud agent: final assistant message disappears from task page after completion when the session used subagents
- [#5332](https://github.com/github/copilot-cli/issues/5332) Copilot cloud agent: final assistant message disappears from task page after completion when the session used subagents `triage`
- [#5331](https://github.com/github/copilot-cli/issues/5331) Ctrl+K prompt deletion has no discoverable undo; Ctrl+Y opens plan instead of restoring text `triage`
- [#5329](https://github.com/github/copilot-cli/issues/5329) Plugin agents not registered in interactive sessions when plugin is enabled via repo enabledPlugins `triage`
- [#5328](https://github.com/github/copilot-cli/issues/5328) Enterprise models omitted from headless model catalogs; switching fails with "Provider model is not registered" `triage`
- [#5327](https://github.com/github/copilot-cli/issues/5327) A setting to customize the color or highlight of user-entered prompts in the timeline `triage`
- [#5326](https://github.com/github/copilot-cli/issues/5326) Denied by preToolUse hook from ".github/hooks/rtk-rewrite.json" (hook errored) `triage`
- [#5325](https://github.com/github/copilot-cli/issues/5325) session.metadata.getContextAttribution / getContextHeaviestMessages fail with "unknown variant memory" when memories are loaded `triage`
- [#5324](https://github.com/github/copilot-cli/issues/5324) /model auto intelligence **long_context** `triage`
- [#5323](https://github.com/github/copilot-cli/issues/5323) [Feature request] Add setting to disable agent checkpoint refs (refs/agents/*) `triage`
- [#5322](https://github.com/github/copilot-cli/issues/5322) Prerelease version 1.0.106-2 is broken `triage`

#### 🔒 Closed Issues
- [#3497](https://github.com/github/copilot-cli/issues/3497) Terminal output is clipped after resize/reflow and hidden text is not reachable via scrollbar
- [#5133](https://github.com/github/copilot-cli/issues/5133) includeCoAuthoredBy: false is ignored in ACP mode (copilot --acp)
- [#4789](https://github.com/github/copilot-cli/issues/4789) Ctrl+C while copying selected text cancels and declines confirmation dialog
- [#5268](https://github.com/github/copilot-cli/issues/5268) ACP: /session delete, cleanup and prune fail with "sessionsApi ... is unavailable for this session"
- [#5269](https://github.com/github/copilot-cli/issues/5269) ACP: plugin skills aren't available in ACP sessions, though the plugin's agents are
- [#4700](https://github.com/github/copilot-cli/issues/4700) `skillDirectories` setting from `settings.json` is not honored in ACP mode (`copilot --acp`)
- [#4106](https://github.com/github/copilot-cli/issues/4106) ACP drops subagent source identity and flattens parallel output into the parent stream
- [#3245](https://github.com/github/copilot-cli/issues/3245) Clarify the usage of `Ctrl+G` shortcut
- [#5166](https://github.com/github/copilot-cli/issues/5166) CLI 1.0.97 starts a model outside the exact repository allowlist during a prompt-mode turn
- [#5337](https://github.com/github/copilot-cli/issues/5337) MCP OAuth: authorize request sends resource with a trailing slash that differs from the resource
- [#4675](https://github.com/github/copilot-cli/issues/4675) TaskShellProgress.recentOutput is a required string, so the runtime substitutes the display literal (no output yet) when a shell task has produced nothing
- [#5333](https://github.com/github/copilot-cli/issues/5333) Copilot cloud agent: final assistant message disappears from task page after completion when the session used subagents

### OpenCode (`anomalyco/opencode`)

**Stars:** 224,148 · **Open issues:** 3,750 · **Last push:** <1h ago

Today was a routine day for OpenCode, with no new releases or merged pull requests. Among the newly opened issues, #61304 stands out as it addresses the problem of OPENBOTJR closing issues that have responses labeled "Haven't heard back," which has garnered some community attention. Additionally, #61276 raises concerns about cache invalidation occurring almost every turn through Go, indicating a potential performance issue. Other notable issues include bugs related to session management and model handling, highlighting ongoing challenges in the platform's functionality.

#### 🐛 New Issues
- [#61304](https://github.com/anomalyco/opencode/issues/61304) OPENBOTJR CLOSES ISSUES THAT HAVE RESPONSES WITH "HAVEN'T HEARD BACK", PLEASE SOLVE `pending close` `triaging` 💬5
- [#61303](https://github.com/anomalyco/opencode/issues/61303) projects: new project in folder without git repo resolves to C:\ root 💬4
- [#61276](https://github.com/anomalyco/opencode/issues/61276) Cache invalidation occurs after almost every turn through Go over OpenCode 💬3
- [#61302](https://github.com/anomalyco/opencode/issues/61302) ACP: session/set_config_option reply can describe the previously selected model `pending close` `triaging` 💬3
- [#61320](https://github.com/anomalyco/opencode/issues/61320) Token issue `pending close` `triaging` 💬2
- [#61323](https://github.com/anomalyco/opencode/issues/61323) 工作区一直创建失败 `triaging` 💬2
- [#61318](https://github.com/anomalyco/opencode/issues/61318) Main agent and subagents running the same model evicting each other's cache when running parallely 💬2
- [#61261](https://github.com/anomalyco/opencode/issues/61261) gateway: free model requests fail 400 with provider.only restricted to anthropic `triaging` 💬2
- [#61313](https://github.com/anomalyco/opencode/issues/61313) tui: transcript memory scales with the full session log, not the compaction window 💬2
- [#61310](https://github.com/anomalyco/opencode/issues/61310) My Requests are dobbled `triaging` 💬2
- [#61305](https://github.com/anomalyco/opencode/issues/61305) core: MCP tools and instructions disappear briefly after moving a session (V2) `pending close` `triaging` 💬2
- [#61327](https://github.com/anomalyco/opencode/issues/61327) [Bug] GLM-5.3-Flash Free Tier Reset Time Dynamically Rolls Forward on First Message `pending close` `triaging` 💬1
- [#61326](https://github.com/anomalyco/opencode/issues/61326) [FEATURE]: session browser tabs should be visible from non-desktop clients (web/iOS) 💬1
- [#61322](https://github.com/anomalyco/opencode/issues/61322) problemas al retomar una tarea `pending close` `triaging` 💬1
- [#61321](https://github.com/anomalyco/opencode/issues/61321) [FEATURE]: Stateless streaming inference with external history and tool declarations 💬1
- [#61319](https://github.com/anomalyco/opencode/issues/61319) mcp: {env:VAR} in remote headers resolves empty while the service has the variable 💬1
- [#61316](https://github.com/anomalyco/opencode/issues/61316) Free tier quota resets incorrectly despite no usage `pending close` `triaging` 💬1
- [#61309](https://github.com/anomalyco/opencode/issues/61309) console: allow DNS / dynamic DNS hostname in service account IP Restrictions 💬1
- [#61308](https://github.com/anomalyco/opencode/issues/61308) Session Bug `triaging` 💬1
- [#61307](https://github.com/anomalyco/opencode/issues/61307) buildloglog `triaging` 💬1
- [#61301](https://github.com/anomalyco/opencode/issues/61301) Uncaught Exception: Error: ENOSPC: no space left on device, o `reproduced` 💬1

#### 🔒 Closed Issues
- [#44160](https://github.com/anomalyco/opencode/issues/44160) Desktop deep link to create a session does not work
- [#60742](https://github.com/anomalyco/opencode/issues/60742) bug
- [#60765](https://github.com/anomalyco/opencode/issues/60765) AI refuses to execute terminal commands it previously could run
- [#61077](https://github.com/anomalyco/opencode/issues/61077) [FEATURE]: Serve DeepSeek V4.1 Flash / V4 Pro on OpenCode Go from US/EU hosting instead of requiring the Global region opt-in
- [#60753](https://github.com/anomalyco/opencode/issues/60753) provider: opencode-go gateway returns invalid-JSON upstream response, bricking sessions until rewind
- [#60739](https://github.com/anomalyco/opencode/issues/60739) Not usable
- [#61157](https://github.com/anomalyco/opencode/issues/61157) [FEATURE]:Thread for updates that anxious users can subscribe to
- [#61152](https://github.com/anomalyco/opencode/issues/61152) Free tier returns 429 on every request since Oct 24 (DeepSeek V4.1 Flash Free) – even a single "hello" in a fresh session
- [#61146](https://github.com/anomalyco/opencode/issues/61146) error message undefined is not an object (evaluating 'ae.time.released')
- [#61276](https://github.com/anomalyco/opencode/issues/61276) Cache invalidation occurs after almost every turn through Go over OpenCode
- [#60769](https://github.com/anomalyco/opencode/issues/60769) model refuses to accept that he can see images even though model supports images
- [#61127](https://github.com/anomalyco/opencode/issues/61127) Что делать
- [#61302](https://github.com/anomalyco/opencode/issues/61302) ACP: session/set_config_option reply can describe the previously selected model
- [#61183](https://github.com/anomalyco/opencode/issues/61183) [FEATURE]:Per-Session OAuth Account Isolation for OpenAI Codex
- [#61161](https://github.com/anomalyco/opencode/issues/61161) mcp: remote server that allows anonymous tool listing never enters needs_auth; OAuth sign-in is never offered
- [#60763](https://github.com/anomalyco/opencode/issues/60763) 我在Debianxfce安装opencode（ARM64）后无法打开
- [#61126](https://github.com/anomalyco/opencode/issues/61126) Обманывает
- [#61305](https://github.com/anomalyco/opencode/issues/61305) core: MCP tools and instructions disappear briefly after moving a session (V2)
- [#61321](https://github.com/anomalyco/opencode/issues/61321) [FEATURE]: Stateless streaming inference with external history and tool declarations

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,906 · **Open issues:** 2,101 · **Last push:** <1h ago

On November 3, 2026, Qwen Code released version v0.26.6, introducing a Web Shell sidebar activity view for managing workspace conversations, including functionalities for viewing approval states, error tracking, and bulk controls. Additionally, the nightly release v0.26.5 featured updates in the changelog, and the TypeScript SDK was updated to version v0.1.27, bundling the latest CLI version. Among the noteworthy merged pull requests, feature #16066 added a switch for refreshing the operator model catalog, while multiple fixes improved config synchronization and addressed issues in the CI environment. A significant new issue reported was #16169, highlighting that messages queued during tool runs could be lost when the interactive session encounters a SIGHUP.

#### 🚀 New Releases
- [v0.26.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.6) Release v0.26.6
- [v0.26.5-nightly.20261102.0441faff21](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.5-nightly.20261102.0441faff21) Release v0.26.5-nightly.20261102.0441faff21
- [sdk-typescript-v0.1.27](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.27) SDK TypeScript Release v0.1.27

#### ✅ Merged PRs
- [#11785](https://github.com/QwenLM/qwen-code/pull/11785) test(core): pin hook error-text redaction with value-level assertions
- [#13818](https://github.com/QwenLM/qwen-code/pull/13818) test(permissions): cover persistent rule removal
- [#16121](https://github.com/QwenLM/qwen-code/pull/16121) refactor(managed-agent): narrow the four deferred store consumers to their role interfaces
- [#16066](https://github.com/QwenLM/qwen-code/pull/16066) feat(config): add operator model catalog refresh switch
- [#16139](https://github.com/QwenLM/qwen-code/pull/16139) refactor(managed-agent): simplify row locking and runtime verification
- [#16170](https://github.com/QwenLM/qwen-code/pull/16170) fix(web-shell): bind config sync to the attachment, not the SSE stream
- [#16148](https://github.com/QwenLM/qwen-code/pull/16148) fix(serve): keep record_artifact guidance out of Managed Runtime worker results
- [#16151](https://github.com/QwenLM/qwen-code/pull/16151) fix(ci): interleave PR review endpoint cohorts and report final routes
- [#16172](https://github.com/QwenLM/qwen-code/pull/16172) fix(acp-bridge): compact live tool-result displays for session replay
- [#16154](https://github.com/QwenLM/qwen-code/pull/16154) fix(ci): repair desktop RPM dependency and teardown checks

#### 🐛 New Issues
- [#16169](https://github.com/QwenLM/qwen-code/issues/16169) Messages queued while tools run are silently lost when the interactive session gets SIGHUP `priority/P2` `type/bug` `category/cli` `scope/interactive` 💬5
- [#16119](https://github.com/QwenLM/qwen-code/issues/16119) Web Shell: a background shell's result waits for the turn to end instead of arriving mid-turn (shell notifications carry no `sourceTurnId`) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬4
- [#16147](https://github.com/QwenLM/qwen-code/issues/16147) Managed Runtime worker runs the Shell record_artifact check: ~166 MiB more per sandbox and a reminder for an undeclared tool `priority/P2` `type/bug` `category/performance` `scope/shell` 💬4
- [#16171](https://github.com/QwenLM/qwen-code/issues/16171) Web Shell session open is very slow: live replay retains full file contents from edit tool results `priority/P1` `type/bug` `category/performance` `scope/session-management` 💬4
- [#16144](https://github.com/QwenLM/qwen-code/issues/16144) GitHub and GitLab channels created from the Web Shell start open to anyone, while the docs say group access is disabled by default `priority/P1` `type/bug` `category/security` `scope/settings` 💬4
- [#16173](https://github.com/QwenLM/qwen-code/issues/16173) Suggestion: allow models to refer to slices of files or tool outputs arbitrarely `priority/P3` `type/feature-request` `category/tools` `scope/token-management` 💬3
- [#16159](https://github.com/QwenLM/qwen-code/issues/16159) bug(core): Ollama Hugging Face model ids with a quantization tag fall back to the default context window `priority/P2` `type/bug` `category/core` `scope/token-management` 💬3
- [#16158](https://github.com/QwenLM/qwen-code/issues/16158) bug(core): OpenRouter `:exacto` model ids fall back to the default context window `priority/P3` `type/bug` `category/core` `scope/token-management` 💬3
- [#16157](https://github.com/QwenLM/qwen-code/issues/16157) bug(core): Bedrock model ids lose their context and output limits `priority/P2` `status/needs-triage` `type/bug` `category/core` 💬3
- [#16127](https://github.com/QwenLM/qwen-code/issues/16127) [Bug][Linux] VS Code Companion 0.26.5 SIGSEGV when decoding images with Sharp under Electron-as-Node `priority/P1` `type/bug` `category/platform` `scope/vscode` 💬3
- [#16136](https://github.com/QwenLM/qwen-code/issues/16136) proper-lockfile users: five locks give up before a crashed holder's lock goes stale `priority/P3` `type/bug` `category/core` `scope/file-operations` 💬3
- [#16178](https://github.com/QwenLM/qwen-code/issues/16178) Image-input refusal doesn't say the setting was already correct, or that it needs a restart `priority/P3` `category/core` `scope/content-generation` `scope/settings` 💬2
- [#16167](https://github.com/QwenLM/qwen-code/issues/16167) toda mensagem que envio aparece erro. `status/need-information` `priority/P3` `type/bug` 💬2
- [#16160](https://github.com/QwenLM/qwen-code/issues/16160) bug(core): Ollama Hugging Face model ids with a quantization tag fall back to the default context window `priority/P2` `type/bug` `category/core` `scope/token-management` 💬2
- [#16155](https://github.com/QwenLM/qwen-code/issues/16155) UI/UX Enhancement: Improve Composer Action Menu `priority/P3` `type/feature-request` `category/ui` `scope/components` 💬2
- [#16145](https://github.com/QwenLM/qwen-code/issues/16145) Retry model-output format errors automatically instead of waiting for Ctrl+Y `priority/P2` `type/feature-request` `category/core` `scope/non-interactive` 💬2
- [#16140](https://github.com/QwenLM/qwen-code/issues/16140) bug(core): shell redirect extractor still drops N> (fd>=3), >|, and no-space cd>file forms; spaced > /dev/null over-reports `priority/P1` `type/bug` `category/security` `scope/shell` 💬2
- [#16137](https://github.com/QwenLM/qwen-code/issues/16137) Oops! There was an issue connecting to Qwen3-Coder. Internal Error `status/need-information` `priority/P3` `type/bug` `scope/windows` 💬2
- [#16152](https://github.com/QwenLM/qwen-code/issues/16152) Main CI failed: Desktop Checks — Desktop Checks > … > Install rpm build-root dependencies (+1 more) `status/needs-triage` `type/bug`
- [#16168](https://github.com/QwenLM/qwen-code/issues/16168) Sandbox image for 0.26.5-nightly.20261102.0441faff21 not published: release build job failed `type/bug` `scope/ci-cd`
- [#16166](https://github.com/QwenLM/qwen-code/issues/16166) Main CI failed: tui-parity — installed/npm-distribution.test.ts > global-lifecycle-enabled native uses actual installed entry and exits na… `status/needs-triage` `type/bug`
- [#16162](https://github.com/QwenLM/qwen-code/issues/16162) Sandbox image for 0.26.6 not published: release build job failed `type/bug` `scope/ci-cd`

#### 🔒 Closed Issues
- [#6721](https://github.com/QwenLM/qwen-code/issues/6721) Keep deferred tool discovery from invalidating prompt cache prefixes
- [#8092](https://github.com/QwenLM/qwen-code/issues/8092) Build a lower-maintenance desktop app around Web Shell
- [#16006](https://github.com/QwenLM/qwen-code/issues/16006) feat(core): let managed installs disable the models.dev catalog refresh from settings (and honor the privacy opt-out)
- [#16065](https://github.com/QwenLM/qwen-code/issues/16065) ci(smoke): web-shell E2E Smoke lane — settings-exclusions and lazy-session-preview @smoke tests fail under suite load, PR-independent
- [#16119](https://github.com/QwenLM/qwen-code/issues/16119) Web Shell: a background shell's result waits for the turn to end instead of arriving mid-turn (shell notifications carry no `sourceTurnId`)
- [#16147](https://github.com/QwenLM/qwen-code/issues/16147) Managed Runtime worker runs the Shell record_artifact check: ~166 MiB more per sandbox and a reminder for an undeclared tool
- [#16171](https://github.com/QwenLM/qwen-code/issues/16171) Web Shell session open is very slow: live replay retains full file contents from edit tool results
- [#13106](https://github.com/QwenLM/qwen-code/issues/13106) fix(core): cd segments silently drop redirect targets from Write deny checks
- [#15933](https://github.com/QwenLM/qwen-code/issues/15933) Desktop update from a build released before the runtime-stop fix still fails on Windows
- [#16034](https://github.com/QwenLM/qwen-code/issues/16034) Desktop release set ships no rpm: Fedora and RHEL get only an AppImage that cannot install
- [#16160](https://github.com/QwenLM/qwen-code/issues/16160) bug(core): Ollama Hugging Face model ids with a quantization tag fall back to the default context window
- [#16086](https://github.com/QwenLM/qwen-code/issues/16086) Shared Channel sessions prevent request owners from approving their own tool calls
- [#16092](https://github.com/QwenLM/qwen-code/issues/16092) Main CI failed: SDK Java — HostedWorkspaceToolTurnIT.cancellationRequiresPhysicalSettlementOnMySql
- [#16152](https://github.com/QwenLM/qwen-code/issues/16152) Main CI failed: Desktop Checks — Desktop Checks > … > Install rpm build-root dependencies (+1 more)

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1245](https://github.com/anthropics/skills/pull/1245) Add notion-spec-to-implementation and quantitative-resume-auditor skills
- [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: avoid shell=True in with_server.py
- [#1792](https://github.com/anthropics/skills/pull/1792) fix(docx): report LibreOffice timeout as an error and verify the output

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 393,759 · **Open issues:** 7,730 · **Last push:** <1h ago

On November 3, 2026, OpenClaw released version 2026.10.10, which introduced enhanced backup safety features for secret-redacted Git backups, now covering PostgreSQL exports while protecting sensitive plugin credentials. The update also upgraded the managed native CLI to version 0.164.0, ensuring compatibility with the latest platform packages. Significant merged features included the addition of custom SVG icons for plugin side-chat panels and preparations for secure ESP device provisioning on iOS. Noteworthy bug fixes addressed issues such as stalling shared server I/O in sessions and markdown table rendering problems in iOS chat. A particularly hot new issue reported the claude-cli requester failing to manage subagent completions while busy, leading to dropped context and user messaging without records.

#### 🚀 New Releases
- [v2026.10.10](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10) openclaw 2026.10.10

#### ✅ Merged PRs
- [#191573](https://github.com/openclaw/openclaw/pull/191573) feat: custom SVG icons for plugin side-chat panels
- [#191625](https://github.com/openclaw/openclaw/pull/191625) feat(ios): prepare secure ESP device provisioning
- [#191614](https://github.com/openclaw/openclaw/pull/191614) fix(browser): status attaches the Chrome debugger while idle
- [#191436](https://github.com/openclaw/openclaw/pull/191436) fix(macos): prevent first-launch Gateway failures after upgrades
- [#191332](https://github.com/openclaw/openclaw/pull/191332) fix(update): avoid snapshot failures in live recovery checks
- [#191632](https://github.com/openclaw/openclaw/pull/191632) fix(exec): sessions remain running after the root command exits
- [#186593](https://github.com/openclaw/openclaw/pull/186593) feat(plugins): add manifest-backed recommended prompts
- [#190991](https://github.com/openclaw/openclaw/pull/190991) fix(update): keep metadata inventory deadline in the monotonic clock domain
- [#191609](https://github.com/openclaw/openclaw/pull/191609) fix(models): Gateway model picker keeps retired Qwen Token Plan models after discovery succeeds
- [#191619](https://github.com/openclaw/openclaw/pull/191619) fix(oc-path): decode inline comments in frontmatter strings
- [#191624](https://github.com/openclaw/openclaw/pull/191624) test(agents): exercise own prototype override key
- [#191101](https://github.com/openclaw/openclaw/pull/191101) fix(gateway): public sessions resend unchanged bodies for matching validators
- [#191094](https://github.com/openclaw/openclaw/pull/191094) fix(memory-wiki): bracket and backslash titles break generated links
- [#191598](https://github.com/openclaw/openclaw/pull/191598) refactor(media): separate input limit policy from extraction
- [#191626](https://github.com/openclaw/openclaw/pull/191626) fix(gateway): reduce background worker placement overhead
- [#156642](https://github.com/openclaw/openclaw/pull/156642) refactor(config): strengthen precedence and audit assertions
- [#191572](https://github.com/openclaw/openclaw/pull/191572) test(discord): remove implied guarded-fetch count
- [#191567](https://github.com/openclaw/openclaw/pull/191567) fix: hide redundant working labels in subagent details
- [#191621](https://github.com/openclaw/openclaw/pull/191621) fix(gateway): chat sends stall or lose retained session authority
- [#191236](https://github.com/openclaw/openclaw/pull/191236) fix: prevent one session from stalling shared server I/O
- [#191229](https://github.com/openclaw/openclaw/pull/191229) feat(ci): estimate test selection savings and model costs
- [#191568](https://github.com/openclaw/openclaw/pull/191568) fix(update): avoid redundant offline Doctor inspections
- [#189827](https://github.com/openclaw/openclaw/pull/189827) fix: parent sessions miss child approvals with a custom session store
- [#191613](https://github.com/openclaw/openclaw/pull/191613) refactor(perf): reuse project-memory heap sampling helpers
- [#191228](https://github.com/openclaw/openclaw/pull/191228) feat(ci): compare adaptive test plans without skipping tests
- [#189425](https://github.com/openclaw/openclaw/pull/189425) fix(firecrawl): report the resolved URL after redirects
- [#191592](https://github.com/openclaw/openclaw/pull/191592) fix: degraded-summary warning never appears when context overflow triggers compaction
- [#191046](https://github.com/openclaw/openclaw/pull/191046) fix(ui): memory settings expose a translation key for custom models
- [#191155](https://github.com/openclaw/openclaw/pull/191155) fix(sessions): tags hide committed changes from checkout diffs
- [#191170](https://github.com/openclaw/openclaw/pull/191170) fix(projects): recent worktree folders lose the selected subdirectory
- [#191172](https://github.com/openclaw/openclaw/pull/191172) fix(ui): autosave blocks open meeting source edits
- [#191028](https://github.com/openclaw/openclaw/pull/191028) fix(memory): custom recall tools are shadowed by dreaming sidecars
- [#191611](https://github.com/openclaw/openclaw/pull/191611) test(codex): prove argv fingerprint sensitivity
- [#191606](https://github.com/openclaw/openclaw/pull/191606) fix(cache): keep private cache TTLs on elapsed time
- [#191618](https://github.com/openclaw/openclaw/pull/191618) docs(release): backport hotfix ledger routing to 2026.11.1
- [#191333](https://github.com/openclaw/openclaw/pull/191333) fix(update): preserve run identity when admission fails
- [#191226](https://github.com/openclaw/openclaw/pull/191226) feat(ci): collect test observations for adaptive CI experiments
- [#191607](https://github.com/openclaw/openclaw/pull/191607) refactor(test): share Windows executable lookup fixtures
- [#191545](https://github.com/openclaw/openclaw/pull/191545) docs(macos): explain Gateway Local Network recovery
- [#191526](https://github.com/openclaw/openclaw/pull/191526) fix(auth): show effective order after clearing agent override
- [#156741](https://github.com/openclaw/openclaw/pull/156741) refactor(anthropic): strengthen CLI argument assertions
- [#191536](https://github.com/openclaw/openclaw/pull/191536) fix(plugins): recover reply publication after failed replacement
- [#191594](https://github.com/openclaw/openclaw/pull/191594) refactor(discord): reuse blocked attachment test setup
- [#191587](https://github.com/openclaw/openclaw/pull/191587) fix(auth): cron fallback fails with another provider’s session pin
- [#191602](https://github.com/openclaw/openclaw/pull/191602) fix(voice-call): keep late caller transcripts ahead of replies
- [#191585](https://github.com/openclaw/openclaw/pull/191585) fix(feishu): deliver captioned media with block streaming disabled
- [#191595](https://github.com/openclaw/openclaw/pull/191595) test(discord): assert exact approval truncation boundary
- [#191599](https://github.com/openclaw/openclaw/pull/191599) feat(plugins): agent_end hooks receive the completed turn to fork
- [#191586](https://github.com/openclaw/openclaw/pull/191586) perf(memory): attribute project recall preparation stages
- [#191574](https://github.com/openclaw/openclaw/pull/191574) fix(sandbox): avoid Podman discovery before every command
- [#191583](https://github.com/openclaw/openclaw/pull/191583) chore(worktrees): attribute ignored-file provisioning time
- [#191582](https://github.com/openclaw/openclaw/pull/191582) fix: reduce memory pressure during GitHub publication
- [#191547](https://github.com/openclaw/openclaw/pull/191547) fix(update): select PostgreSQL in migrated finalizer
- [#191584](https://github.com/openclaw/openclaw/pull/191584) fix(voice-call): keep opening greetings audible during caller interruptions
- [#191506](https://github.com/openclaw/openclaw/pull/191506) test(ui): verify exact browser history restoration
- [#191522](https://github.com/openclaw/openclaw/pull/191522) fix(codex): name incompatible settings in thread rotation refusals
- [#191518](https://github.com/openclaw/openclaw/pull/191518) fix(ci): keep credential recovery type internal
- [#191480](https://github.com/openclaw/openclaw/pull/191480) test(discord): prove presence scope clearing
- [#191541](https://github.com/openclaw/openclaw/pull/191541) refactor(models): retire catalog lookup forwards
- [#191397](https://github.com/openclaw/openclaw/pull/191397) fix: queue Slack DMs behind shared-session heartbeats
- [#191561](https://github.com/openclaw/openclaw/pull/191561) fix(google): restore tool calls with Python keyword parameters
- [#191558](https://github.com/openclaw/openclaw/pull/191558) test(agents): remove implied exec ANSI assertion
- [#191555](https://github.com/openclaw/openclaw/pull/191555) fix(sandbox): remove containers when backend preparation fails
- [#191556](https://github.com/openclaw/openclaw/pull/191556) fix(memory): recover indexing after embedding request timeouts
- [#172367](https://github.com/openclaw/openclaw/pull/172367) docs(workboard): document card field limits
- [#191544](https://github.com/openclaw/openclaw/pull/191544) refactor(media): reuse retained-text test expectations
- [#191056](https://github.com/openclaw/openclaw/pull/191056) fix(update): tolerate ENOTDIR when resolving plugin links
- [#191197](https://github.com/openclaw/openclaw/pull/191197) fix: stop completed session writes retaining request data
- [#191532](https://github.com/openclaw/openclaw/pull/191532) fix(talk): voice-only relay Talk sessions stay untitled after the user speaks
- [#191516](https://github.com/openclaw/openclaw/pull/191516) fix(telegram): compaction notices never reach the chat in progress streaming mode
- [#191523](https://github.com/openclaw/openclaw/pull/191523) fix(doctor): require repair consent for unattended plugin downloads
- [#191559](https://github.com/openclaw/openclaw/pull/191559) chore(ui): refresh control ui locales
- [#191543](https://github.com/openclaw/openclaw/pull/191543) fix(ios): keep resource diagnostics sampling after stalled probes
- [#191534](https://github.com/openclaw/openclaw/pull/191534) test(agents): remove unused TTS result fixture field
- [#191530](https://github.com/openclaw/openclaw/pull/191530) fix(sandbox): avoid slow builder removal during turn setup
- [#190859](https://github.com/openclaw/openclaw/pull/190859) feat: support attended-session permission defaults
- [#191537](https://github.com/openclaw/openclaw/pull/191537) fix(voice-call): ignore echoed caller transcripts during playback
- [#191528](https://github.com/openclaw/openclaw/pull/191528) test(gateway): await incognito seed publication before final append
- [#191519](https://github.com/openclaw/openclaw/pull/191519) refactor(perf): reuse sampled heap byte reduction
- [#191495](https://github.com/openclaw/openclaw/pull/191495) fix(update): preserve recovery errors and async triage callbacks
- [#191512](https://github.com/openclaw/openclaw/pull/191512) improve: scope iOS screenshot dependency setup
- [#189727](https://github.com/openclaw/openclaw/pull/189727) fix(memory): report curated memory files excluded by provenance
- [#191477](https://github.com/openclaw/openclaw/pull/191477) fix: visitor limit updates stall active Gateway runs
- [#191520](https://github.com/openclaw/openclaw/pull/191520) docs: make Gateway handshake reference easier to scan
- [#191415](https://github.com/openclaw/openclaw/pull/191415) fix(install): installer gives wrong PATH advice when Homebrew's Node is too old
- [#190862](https://github.com/openclaw/openclaw/pull/190862) fix(sessions): replay creation requests across Gateway restarts
- [#180520](https://github.com/openclaw/openclaw/pull/180520) fix(canvas): let document clients honor the Gateway embed policy
- [#191466](https://github.com/openclaw/openclaw/pull/191466) fix(sessions): find CJK text inside transcript words
- [#166127](https://github.com/openclaw/openclaw/pull/166127) fix(agents): keep Claude CLI replies after many large tool results
- [#186896](https://github.com/openclaw/openclaw/pull/186896) fix(gateway): preserve concurrent empty session group creation
- [#191448](https://github.com/openclaw/openclaw/pull/191448) test(agents): exercise authored context preservation during compaction
- [#180651](https://github.com/openclaw/openclaw/pull/180651) feat(gateway): advertise chat input custody contract
- [#191493](https://github.com/openclaw/openclaw/pull/191493) test(ui): remove unused workboard seed fields
- [#191498](https://github.com/openclaw/openclaw/pull/191498) fix(deepgram): answer calls when noise prevents endpointing
- [#191501](https://github.com/openclaw/openclaw/pull/191501) fix: skip discarded plugin setup captures during startup
- [#180214](https://github.com/openclaw/openclaw/pull/180214) fix(compaction): preserve active request provenance
- [#191491](https://github.com/openclaw/openclaw/pull/191491) refactor(perf): reuse plugin cache heap sampling startup
- [#187875](https://github.com/openclaw/openclaw/pull/187875) fix(anthropic): prevent setup-token failures
- [#191487](https://github.com/openclaw/openclaw/pull/191487) fix(sandbox): expose dependency cleanup in slow preparation
- [#191452](https://github.com/openclaw/openclaw/pull/191452) refactor(agents): separate tool execution error ownership
- [#191431](https://github.com/openclaw/openclaw/pull/191431) test(telegram): require the pending poll vote before ordering
- [#191492](https://github.com/openclaw/openclaw/pull/191492) fix(ui): preserve chat setting clicks during history refreshes
- [#187823](https://github.com/openclaw/openclaw/pull/187823) feat: let operators dismiss the read-only Gateway banner
- [#191481](https://github.com/openclaw/openclaw/pull/191481) refactor(perf): reuse collected heap sampling startup
- [#180247](https://github.com/openclaw/openclaw/pull/180247) fix(agents): preserve tool timeout outcomes
- [#191465](https://github.com/openclaw/openclaw/pull/191465) fix(ios): avoid slow keyboard dismissal during screenshots
- [#190875](https://github.com/openclaw/openclaw/pull/190875) fix: await Doctor shared-state repair preparation
- [#191479](https://github.com/openclaw/openclaw/pull/191479) fix(ollama): embeddings fail for configured local hostnames
- [#191468](https://github.com/openclaw/openclaw/pull/191468) fix(macos): connect with configured credentials despite stale app environment
- [#191472](https://github.com/openclaw/openclaw/pull/191472) test: bound declarations in stale worker source fixture
- [#191377](https://github.com/openclaw/openclaw/pull/191377) refactor(plugins): reuse cohort marker absence handling
- [#191458](https://github.com/openclaw/openclaw/pull/191458) fix(discord): keep browser private-network access out of CDN downloads
- [#191460](https://github.com/openclaw/openclaw/pull/191460) test(discord): trim implied custom ID assertions
- [#191232](https://github.com/openclaw/openclaw/pull/191232) fix(ios): tool steps show usage and model footers before the final reply
- [#191277](https://github.com/openclaw/openclaw/pull/191277) improve(ui): reduce chat update style work
- [#191285](https://github.com/openclaw/openclaw/pull/191285) fix(control-ui): show ClawHub install result in the skill dialog
- [#191464](https://github.com/openclaw/openclaw/pull/191464) fix(xai): stop OAuth refreshes from retaining a stale expiry
- [#191447](https://github.com/openclaw/openclaw/pull/191447) fix: preserve compiler policy in scoped SQLite snapshots
- [#191451](https://github.com/openclaw/openclaw/pull/191451) fix(ui): settle data URL attachment preview aborts
- [#191421](https://github.com/openclaw/openclaw/pull/191421) fix(oc-path): unsupported frontmatter keys report successful writes
- [#191378](https://github.com/openclaw/openclaw/pull/191378) fix: avoid rescanning old output during long tool turns
- [#191379](https://github.com/openclaw/openclaw/pull/191379) test(ui): freeze connect clock before page boot
- [#191442](https://github.com/openclaw/openclaw/pull/191442) fix(doctor): explain workspace imports blocked by earlier refusals
- [#191422](https://github.com/openclaw/openclaw/pull/191422) fix(cron): scheduler fails to start after a long-running job is interrupted
- [#191161](https://github.com/openclaw/openclaw/pull/191161) fix: X activity stream memory grows without bound when mentions are slow
- [#189828](https://github.com/openclaw/openclaw/pull/189828) fix(ui): keep PDF readers open when file metadata refreshes
- [#191404](https://github.com/openclaw/openclaw/pull/191404) fix(agents): Gateway freezes for seconds when an ingress agent run loads plugins
- [#191437](https://github.com/openclaw/openclaw/pull/191437) improve: reduce repeated tool preparation and expose prompt timings
- [#191439](https://github.com/openclaw/openclaw/pull/191439) fix(codex): inherited workspace edits stay stale across turns

#### 🐛 New Issues
- [#191427](https://github.com/openclaw/openclaw/issues/191427) [Bug]: claude-cli requester: subagent completion while the requester is busy always falls back to a context-less relay that messages the user and leaves no record for the requester (2026.10.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬5
- [#191076](https://github.com/openclaw/openclaw/issues/191076) [Bug]: iOS chat: markdown tables clip the last column with no wrapping or scroll cue, and render smaller than body text `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#191309](https://github.com/openclaw/openclaw/issues/191309) Control UI sidebar drops the device link after a node session is auto-titled `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#191131](https://github.com/openclaw/openclaw/issues/191131) [Bug]: Partial native capture loss persists through reload/registry refresh; same-version reinstall recovers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#191496](https://github.com/openclaw/openclaw/issues/191496) [Bug]: Telegram bot continues sending repeated task messages after user requests stop `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#191149](https://github.com/openclaw/openclaw/issues/191149) [Bug]: Doctor moves claude-cli model refs onto the API route when the matching anthropic model is pinned to another runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬3
- [#191360](https://github.com/openclaw/openclaw/issues/191360) [Bug]: Gateway pickers keep listing retired qwen-token-plan models after successful account discovery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#191542](https://github.com/openclaw/openclaw/issues/191542) [Bug]: On PostgreSQL families, a Git update that migrates state exits with update-recovery-pending because the migrated finalize worker reads the SQLite state anchor ("schema role missing") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#191412](https://github.com/openclaw/openclaw/issues/191412) [Bug]: install.sh gives PATH advice when Homebrew's Node is too old `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#191566](https://github.com/openclaw/openclaw/issues/191566) [Bug]: inbound turns to plugin-bound conversations refused by SessionCanonicalKeyMigrationRequiredError; doctor --fix does not repair plugin-binding:* keys `P2` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬2
- [#191420](https://github.com/openclaw/openclaw/issues/191420) `doctor --non-interactive` installs plugin packages without `--fix` (Voice Call's `TELNYX_API_KEY` selects `@telnyx/openclaw-provider`) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#191475](https://github.com/openclaw/openclaw/issues/191475) Realtime Talk: idle timeout for realtime relay sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#191429](https://github.com/openclaw/openclaw/issues/191429) macOS: LaunchAgent Gateway silently fails LAN connections (EHOSTUNREACH) until its node binary has Local Network permission; doctor and docs never say so `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#191193](https://github.com/openclaw/openclaw/issues/191193) Update failure: gateway-recovery-verification (2026.10.1-beta.1) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#190966](https://github.com/openclaw/openclaw/issues/190966) Update failure: runtime-artifact-publication (2026.10.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#191373](https://github.com/openclaw/openclaw/issues/191373) Update failure: gateway-recovery-verification (2026.10.7) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#191497](https://github.com/openclaw/openclaw/issues/191497) iPhone HEIC converted via the ffmpeg fallback becomes the first 640×896 grid tile, stretched (model sees a tiny corner of the photo) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#191478](https://github.com/openclaw/openclaw/issues/191478) [Bug]: iOS chat transcript goes blank on session switch or incoming reply until swiping `bug` `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#191476](https://github.com/openclaw/openclaw/issues/191476) [Bug]: Matrix room stuck on "Plugin matrix consumer is closed" after image_generate completion run races a new inbound message `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#191449](https://github.com/openclaw/openclaw/issues/191449) [Bug]: iOS app is frozen while stuck on "Connecting" to a gateway that doesn't answer `bug` `no-stale` `bug:crash` `clawsweeper:fix-shape-clear` 💬2
- [#191335](https://github.com/openclaw/openclaw/issues/191335) [Bug]: remote iMessage voice notes never transcribed — imsg literal "unknown" mime defeats media sniffing; plugin ignores imsg converted_path/convert_attachments `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190979](https://github.com/openclaw/openclaw/issues/190979) [Bug]: Android app rejects .json (and any text/plain, YAML, XML, ZIP) attachments: hardcoded document MIME allowlist `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#191119](https://github.com/openclaw/openclaw/issues/191119) [Bug] 2026.10.10-beta.5: gateway logs "shutdown completed cleanly" but the process does not exit; systemd SIGKILLs it at TimeoutStopSec `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#191128](https://github.com/openclaw/openclaw/issues/191128) [Bug]: exec-completion wake always runs in minimal prompt mode, so every wake rewrites the prompt cache `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#191103](https://github.com/openclaw/openclaw/issues/191103) [Bug]: Published Slack plugins import retired heartbeat-runtime SDK on newer main-derived core 💬2
- [#191077](https://github.com/openclaw/openclaw/issues/191077) [Bug]: iOS chat: card + block padding leaves little width for replies on small iPhones `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#190978](https://github.com/openclaw/openclaw/issues/190978) [Feature]: Make delegated work easier to follow in the Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#190895](https://github.com/openclaw/openclaw/issues/190895) [Bug]: Windows Microsoft account authentication fails after reboot with Anthropic plugin enabled (S4U Gateway, DeepSeek-only) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#190881](https://github.com/openclaw/openclaw/issues/190881) Prepared entry-currentness sources retain synchronous path polling through host assertion `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190855](https://github.com/openclaw/openclaw/issues/190855) release/2026.11.1: pnpm lint fails session-manager max-lines (701/705 vs 700) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#191648](https://github.com/openclaw/openclaw/issues/191648) [Bug]: Prompt-cache drop warnings blame max_completion_tokens when only the re-clamped output cap changed `clawsweeper:intake:bug` 💬1
- [#191645](https://github.com/openclaw/openclaw/issues/191645) [Bug]: Telegram presentation buttons with `disabled: true` render as active and stay clickable `clawsweeper:intake:bug` 💬1
- [#191644](https://github.com/openclaw/openclaw/issues/191644) [Bug]: Telegram message sends silently drop effectId (no message_effect_id reaches the Bot API) `clawsweeper:intake:bug` 💬1
- [#191008](https://github.com/openclaw/openclaw/issues/191008) ClawHub skill offer: Company Research Job, a paid research job for when the free search tier runs dry `P3` 💬1
- [#191331](https://github.com/openclaw/openclaw/issues/191331) Live update recovery metadata inspection can fail during SQLite checkpoints `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#190914](https://github.com/openclaw/openclaw/issues/190914) Sharing one GPU between a local MoE engine and media renders (mmap experts + VRAM lending) — prior art? `P3` 💬1
- [#191631](https://github.com/openclaw/openclaw/issues/191631) [Bug]: voice-call responseModel doesn't resolve model aliases `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191629](https://github.com/openclaw/openclaw/issues/191629) [Bug]: Finalized Talk speech can hide an expired idle reset before the consult `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#191299](https://github.com/openclaw/openclaw/issues/191299) [Feature]: Name the model in the connection-failure reply `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#191627](https://github.com/openclaw/openclaw/issues/191627) Discord GPT-Live authentication failure on 2026.10.9; previously worked on 2026.9.9 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191191](https://github.com/openclaw/openclaw/issues/191191) CI: measure adaptive test selection and its net compute cost `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#191622](https://github.com/openclaw/openclaw/issues/191622) [Bug]: Publishing a PR from an agent main session moves it into a managed worktree with no way back `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#191590](https://github.com/openclaw/openclaw/issues/191590) [Bug]: Overflow recovery compaction hides the degraded-summary warning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191612](https://github.com/openclaw/openclaw/issues/191612) [Bug]: Skills watch-target refresh re-enters continuously; ~1 core pegged with 19 agents (2026.10.7) `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#191330](https://github.com/openclaw/openclaw/issues/191330) Update admission failure can lose the adopted run ID and leave its history running `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#190941](https://github.com/openclaw/openclaw/issues/190941) Replace Blacksmith CI and remote proof with Boat `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#191605](https://github.com/openclaw/openclaw/issues/191605) [Feature]: Android Gateway-owned pending inputs and receipt-aware send recovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191600](https://github.com/openclaw/openclaw/issues/191600) [Bug]: Session observer's 30 s deadline covers the utility fallback chain, so configured fallbacks get no time `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191601](https://github.com/openclaw/openclaw/issues/191601) [Bug]: Linux 2026.10.9 standalone doctor --fix silent for ~79 min (0% CPU) after "Stopped the managed Gateway", then completes; Gateway down the whole time `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#191593](https://github.com/openclaw/openclaw/issues/191593) New-session view gets stuck on "Restoring your last session setup…" after archiving the active conversation `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#191596](https://github.com/openclaw/openclaw/issues/191596) [Feature]: Android cursor-aware history and stable reading position `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#191579](https://github.com/openclaw/openclaw/issues/191579) Isolated automation runs abort with "Session transcript keyed user is outside the current turn" (55 occurrences in 14 days) `bug` `bug:behavior` `P1` `impact:session-state` 💬1
- [#191564](https://github.com/openclaw/openclaw/issues/191564) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#191531](https://github.com/openclaw/openclaw/issues/191531) Voice-only Talk sessions over the Gateway relay never get an automatic title `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191515](https://github.com/openclaw/openclaw/issues/191515) [Bug]: Telegram progress mode drops compaction notices, including the degraded-summary warning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191557](https://github.com/openclaw/openclaw/issues/191557) Telegram outbound session route ignores the account binding: cron delivery mirror lands in an account-scoped DM session while replies use `per-channel-peer` `P2` `impact:session-state` 💬1
- [#191549](https://github.com/openclaw/openclaw/issues/191549) [Bug]: Quick start is no longer offered after Ctrl-C during a first run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191551](https://github.com/openclaw/openclaw/issues/191551) [Bug]: `openclaw gateway install` returns before the Gateway is ready `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#191553](https://github.com/openclaw/openclaw/issues/191553) [Bug]: Codex login says "Manual OAuth entry required" while browser sign-in still works `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191546](https://github.com/openclaw/openclaw/issues/191546) [Bug]: `npx openclaw` exits 1 with no message on an unsupported Node `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` `P0` 💬1
- [#191539](https://github.com/openclaw/openclaw/issues/191539) [Bug]: Native iOS agent pictures show initials instead of desktop images `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191510](https://github.com/openclaw/openclaw/issues/191510) [Feature]: Cost-control incident: approx. US$400 reported during development; request shared enforceable spend limits `enhancement` `P2` `impact:other` 💬1
- [#191511](https://github.com/openclaw/openclaw/issues/191511) Pair a browser with a short code approved on the host `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#191507](https://github.com/openclaw/openclaw/issues/191507) [Bug]: Sign in with ChatGPT fails or stalls when port 8080 is in use `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191502](https://github.com/openclaw/openclaw/issues/191502) [Bug]: sessions cleanup --fix-missing OOM on stable 2026.10.9; request narrow #177937 backport `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#191499](https://github.com/openclaw/openclaw/issues/191499) [Bug]: Model absent from bundled catalog (gpt-6.1-terra) loses its subscription route after a hosted catalog apply; OAuth turns fail with "Explicit auth order for openai has no usable profiles" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191494](https://github.com/openclaw/openclaw/issues/191494) test(live): responses output-limit recovery test depends on model echoing the receipt `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#191489](https://github.com/openclaw/openclaw/issues/191489) [Feature]: iOS app icon unread badge for new agent messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191485](https://github.com/openclaw/openclaw/issues/191485) [Feature]: Keep absolute workspace paths out of the cached system-prompt prefix so agents with the same instructions can share a prompt cache `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191473](https://github.com/openclaw/openclaw/issues/191473) Local Codex owner-verification 403 (`model_permission_denied`) is classified as `auth` and puts the shared OAuth profile into cooldown `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191208](https://github.com/openclaw/openclaw/issues/191208) iOS chat: tool steps show a usage footer that belongs under the final reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191268](https://github.com/openclaw/openclaw/issues/191268) Control UI: ClawHub install dialog never shows that the skill was installed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191457](https://github.com/openclaw/openclaw/issues/191457) [Bug]: iMessage pairing-store read failure still looks like an empty allowlist `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191455](https://github.com/openclaw/openclaw/issues/191455) [Feature]: Owner-supported reversible model and thinking selection with native CAS `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#191453](https://github.com/openclaw/openclaw/issues/191453) [Bug]: Quick start stops the Gateway when the onboarding terminal closes `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191116](https://github.com/openclaw/openclaw/issues/191116) [Bug]: X activity stream keeps an unbounded in-memory batch backlog when the consumer is slower than the stream `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#191414](https://github.com/openclaw/openclaw/issues/191414) [Bug]: Onboarding says no AI access was detected and recommends Ollama while Ollama is running with no model loaded `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191413](https://github.com/openclaw/openclaw/issues/191413) [Docs]: CLI onboarding says Quick start detects installed local models, but it needs loaded ones `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191401](https://github.com/openclaw/openclaw/issues/191401) [Bug]: Signal teardown waits forever when a receive never finishes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191386](https://github.com/openclaw/openclaw/issues/191386) [Bug]: OpenClaw Companion 2026.9.8-1 installs Node 24.19.0 but OpenClaw CLI requires >=24.22.1, causing installation failure `bug` `bug:behavior` `P0` `impact:ux-release-blocker` 💬1
- [#191342](https://github.com/openclaw/openclaw/issues/191342) Feature: adjust answer length and wording in Control UI without changing history `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191339](https://github.com/openclaw/openclaw/issues/191339) Android New chat is refused while the open conversation is still responding `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191338](https://github.com/openclaw/openclaw/issues/191338) [Feature]: Subagents window should identify the running subagent (agent, model, run) — header shows only the task label `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191323](https://github.com/openclaw/openclaw/issues/191323) [Feature]: sessions_spawn receipts should name the child's runtime and credential `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#191325](https://github.com/openclaw/openclaw/issues/191325) [Bug]: config writes that move models from Claude CLI to API-key billing report no billing-route change `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#191327](https://github.com/openclaw/openclaw/issues/191327) [Feature]: Use OpenClaw’s base prompt for Codex-engine threads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191322](https://github.com/openclaw/openclaw/issues/191322) [Bug]: Doctor reports historical_transcript_deferred for a superseded migration receipt when two runs archive the same source `P2` `impact:ux-friction` 💬1
- [#191273](https://github.com/openclaw/openclaw/issues/191273) [Bug]: beta.5 SQLite worker OOM during session actor reads; bounded hydration fix absent from release `P1` `clawsweeper:needs-live-repro` `impact:message-loss` `impact:crash-loop` 💬1
- [#191133](https://github.com/openclaw/openclaw/issues/191133) [Bug]: an oversized previous turn makes the next turn start with no history (turn-anchored cut lands on the current prompt) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191242](https://github.com/openclaw/openclaw/issues/191242) [Bug]: Slow SQLite commits block interactive startup history reads until reply watchdog aborts `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#191211](https://github.com/openclaw/openclaw/issues/191211) iOS chat shows raw MCP bridge names instead of tool labels `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191215](https://github.com/openclaw/openclaw/issues/191215) [Bug]: Runtime-injected model params (anthropic cacheRetention) read as legacy model allowlist on unmarked configs, so spawns fail 'model not allowed' `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191214](https://github.com/openclaw/openclaw/issues/191214) [Bug]: Twilio notify calls restart playback and hang up after three seconds `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191209](https://github.com/openclaw/openclaw/issues/191209) iOS chat: Tool details label is oversized and accent-colored between tool rows `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191203](https://github.com/openclaw/openclaw/issues/191203) [Feature]: Contextual reaction feedback for agents, not emoji commands (RFC) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191195](https://github.com/openclaw/openclaw/issues/191195) [Feature]: Persist unsent chat drafts and attachments across app relaunch on iOS and Android `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191179](https://github.com/openclaw/openclaw/issues/191179) anthropic, anthropic-vertex: configured params.topP / top_p is never sent (bedrock too) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#191177](https://github.com/openclaw/openclaw/issues/191177) [Bug]: iOS app: embedded Dashboard, Terminal and Desktop pages show Not Found when the Gateway sets a Control UI base path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191168](https://github.com/openclaw/openclaw/issues/191168) [Bug]: bundle-mcp: live runtime slots are never released for ended sessions → limit (256) reached in normal use `bug` `bug:crash` `P2` `impact:other` 💬1
- [#191163](https://github.com/openclaw/openclaw/issues/191163) [Feature]: Add Fortytwo to the external provider catalog `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#191110](https://github.com/openclaw/openclaw/issues/191110) [Bug]: Missing selected account is reported as failed Claude CLI login `bug` `P2` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#191145](https://github.com/openclaw/openclaw/issues/191145) [Feature]: user-configurable session attachment file-type allowlist `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#191147](https://github.com/openclaw/openclaw/issues/191147) [Bug]: Claude CLI models are never listed when no Anthropic model is pinned to Claude CLI, although Claude Code is signed in `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#191142](https://github.com/openclaw/openclaw/issues/191142) fix: Stop leaves guest PR base acquisition running until timeout `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#191104](https://github.com/openclaw/openclaw/issues/191104) [Bug]: Prolonged event-loop starvation during multi-agent model publication despite progressing admission `P2` `impact:crash-loop` 💬1
- [#191123](https://github.com/openclaw/openclaw/issues/191123) [Bug]: Retained plugin cleanup inherits a closed caller scope `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#191134](https://github.com/openclaw/openclaw/issues/191134) Update failure: package-install-omit-optional (2026.9.8) `P2` `impact:ux-friction` 💬1
- [#190951](https://github.com/openclaw/openclaw/issues/190951) Bug: hook runs can ignore selected accounts without a credential store `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#191115](https://github.com/openclaw/openclaw/issues/191115) [Bug]: Combined MCP runtime lease release stops after the first failing part and cannot retry `bug` `bug:behavior` 💬1
- [#191086](https://github.com/openclaw/openclaw/issues/191086) [Feature]: nodes status/list: add --platform filter alongside --connected `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#191108](https://github.com/openclaw/openclaw/issues/191108) [Bug]: Talk on gateway-relay: the Android app also runs the voice model's tool call, so a consult can run twice `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#191109](https://github.com/openclaw/openclaw/issues/191109) [Feature]: Realtime voice: let config pass transcription hints (Gemini customVocabulary, OpenAI transcription prompt) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191087](https://github.com/openclaw/openclaw/issues/191087) [Feature]: openclaw logs: add --level minimum-severity filter for tail output `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191085](https://github.com/openclaw/openclaw/issues/191085) [Feature]: cron runs: expose --agent and --view (gateway already supports both) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191093](https://github.com/openclaw/openclaw/issues/191093) Cron trigger evaluation intermittently fails: "Direct shared-state reader requires current integrity admission" `P2` `impact:other` 💬1
- [#191082](https://github.com/openclaw/openclaw/issues/191082) PostgreSQL conformance: measure unnecessary migration fixture work `P3` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#191074](https://github.com/openclaw/openclaw/issues/191074) A per-turn way to remove a tool: `before_prompt_build` can only allow `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191048](https://github.com/openclaw/openclaw/issues/191048) `accessGroup:` entries do not admit a direct message on Slack or Matrix, though Slack is listed as supported `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191049](https://github.com/openclaw/openclaw/issues/191049) A way to allow a sender some chat commands: today it is all of them or `/new` and `/reset` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#191040](https://github.com/openclaw/openclaw/issues/191040) [Feature]: Honor configured default agent and delivery binding in /tools/invoke `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191043](https://github.com/openclaw/openclaw/issues/191043) [Bug]: Plugin registry resource release drops failed disposers and caches the rejected cleanup promise `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#190981](https://github.com/openclaw/openclaw/issues/190981) Avoid waiting for failure reporting after healthy PR checks `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191010](https://github.com/openclaw/openclaw/issues/191010) Recovery blocked by malformed shared SQLite state database and retained session archives `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:session-state` 💬1
- [#191004](https://github.com/openclaw/openclaw/issues/191004) [Feature]: Android node: calendar.update and calendar.delete commands `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191003](https://github.com/openclaw/openclaw/issues/191003) acp-pi provider reports 'unavailable' — new sessions fail with 'Unknown model: acp-pi/swe-2-high' `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#190993](https://github.com/openclaw/openclaw/issues/190993) Update failure: package-install-omit-optional (2026.9.9) `P0` `impact:ux-release-blocker` 💬1
- [#190990](https://github.com/openclaw/openclaw/issues/190990) [Bug]: State-lease heartbeat caches a rejected stop() promise; one cleanup failure permanently breaks file exclusion and skips lease/lock release `bug` `bug:behavior` 💬1
- [#190989](https://github.com/openclaw/openclaw/issues/190989) [Bug]: LSP runtime caches a rejected disposal promise and reports successful cleanup after process extinction cannot be confirmed `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#190980](https://github.com/openclaw/openclaw/issues/190980) [Bug]: Resumed reply after a plugin reload from Control UI is sent to the session's last external chat `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#190965](https://github.com/openclaw/openclaw/issues/190965) [Feature]: Let cron CLI express no-output timeout disabling (explicit 0 or a disable option) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#190963](https://github.com/openclaw/openclaw/issues/190963) [Bug]: 2026.10.9 claude-cli: every turn in a large main session fails with "worker task timed out"; /new and sessions.reset reset in place and don't help `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#190959](https://github.com/openclaw/openclaw/issues/190959) [Bug]: read tool truncation notice misreports the binding budget (says 50KB byte cap when the weighted model budget truncated) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190960](https://github.com/openclaw/openclaw/issues/190960) [Bug]: Deterministic qa suite failures invisible to CI — default-suite scenarios outside the smoke-ci profile fail on main unnoticed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#190947](https://github.com/openclaw/openclaw/issues/190947) [Bug]: MCP cleanup failure leaks a live runtime slot and blocks new MCP runtimes after 256 retirements `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#190920](https://github.com/openclaw/openclaw/issues/190920) Thinking reset before the first session row retains the created choice `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190932](https://github.com/openclaw/openclaw/issues/190932) [Bug]: Codex first dashboard reply still hits claimed-work guard in installed 2026.10.9 (follow-up to #182598) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#190926](https://github.com/openclaw/openclaw/issues/190926) CLI 'message send' takes 52–180s per call (even --dry-run): plugin generation source capture rebuilt every process; gateway 'send' RPC takes 2s `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#190902](https://github.com/openclaw/openclaw/issues/190902) fix(automations): explicit native CLI account selection cannot replace a stored account `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190909](https://github.com/openclaw/openclaw/issues/190909) [Feature]: Let the agent read skill availability status (skills_status) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#190886](https://github.com/openclaw/openclaw/issues/190886) Thinking choice clears when an overlapping title snapshot is rejected `bug` `clawsweeper:intake:bug` 💬1
- [#190900](https://github.com/openclaw/openclaw/issues/190900) [Bug]: Slack exec approvals with target "channel" fall back to approver DM for top-level channel messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190887](https://github.com/openclaw/openclaw/issues/190887) Reduce database-worker CI check overhead without changing safety checks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🦪 silver shellfish` 💬1
- [#190889](https://github.com/openclaw/openclaw/issues/190889) [Bug]: Every Telegram polling worker loads the debug proxy capture store while capture is off `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190865](https://github.com/openclaw/openclaw/issues/190865) [Bug]: qa:e2e self-check reads the operator's real ~/.openclaw state and dies on schema mismatch `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190851](https://github.com/openclaw/openclaw/issues/190851) An inter-session send delivers a second message carrying only the requester's runtime context `P2` `impact:session-state` 💬1

#### 🔒 Closed Issues
- [#157812](https://github.com/openclaw/openclaw/issues/157812) Windows: auto-update fails repeatedly — managed-service-preflight inside gateway tree, snapshot path with unexpanded `$OPENCLAW_STATE_DIR`, `reconcile:abandoned` after restart
- [#156864](https://github.com/openclaw/openclaw/issues/156864) Per-agent tools.alsoAllow does not grant the browser plugin tool to the agent runtime
- [#169423](https://github.com/openclaw/openclaw/issues/169423) codex plugin migration stays 'unfinished' after 10.1: completed native Codex children with missing requester session cannot be retired
- [#150598](https://github.com/openclaw/openclaw/issues/150598) Proposal: completion-wake delivery semantics (terminal-only, new-turn, coalesced, failure-as-triage) — field data from heavy multi-session use
- [#169154](https://github.com/openclaw/openclaw/issues/169154) [Bug]: a channel message containing `Authorization: Bearer <token>` fails its turn with "Transcript idempotency key ... conflicts with the admitted message"
- [#89210](https://github.com/openclaw/openclaw/issues/89210) Expose WhatsApp watchdog tuning (messageTimeoutMs/transportTimeoutMs/watchdogCheckMs) in gateway config — currently the 30-min app-silent threshold is hardcoded
- [#156491](https://github.com/openclaw/openclaw/issues/156491) [Bug]: Codex-native GPT-6 models can fail on a cold first turn despite account support
- [#154529](https://github.com/openclaw/openclaw/issues/154529) [Bug]: OpenRouter model-capabilities fetch aborts at 10s inside gateway while succeeding in ~360ms outside; cache never populates, warn loop every ~70-90s (2026.9.5)
- [#154124](https://github.com/openclaw/openclaw/issues/154124) Gateway: catalog-published invalidates every session row and Control UI falls back to a 30s sessions.catalog.list poll
- [#151769](https://github.com/openclaw/openclaw/issues/151769) [Bug]: Completed subagent results recur after closed delivery; fallback send of child results is not at-most-once
- [#150940](https://github.com/openclaw/openclaw/issues/150940) Codex app-server stores (codex-home) grow unbounded — no retention, 97% image payloads
- [#150231](https://github.com/openclaw/openclaw/issues/150231) e2e iteration speed: source-mode fixtures transpile every bundled plugin via Jiti (~340s/case)
- [#156448](https://github.com/openclaw/openclaw/issues/156448) [Feature]: Reduce empty Gateway startup memory (~560 MiB footprint with plugins disabled, 2026.9.5)
- [#156155](https://github.com/openclaw/openclaw/issues/156155) doctor --fix retires openai/gpt-5.4 to an id that is not in the catalog, writing an unusable model into modelPolicy.allow and a live fallback chain (2026.9.5)
- [#155622](https://github.com/openclaw/openclaw/issues/155622) [Feature]: Provision sandbox browser containers on first browser-tool use
- [#153861](https://github.com/openclaw/openclaw/issues/153861) Model fallback: no user-visible notice and no mid-turn primary re-probe in a synchronous Telegram session
- [#153677](https://github.com/openclaw/openclaw/issues/153677) Telegram: use native message drafts (sendMessageDraft) for streaming replies
- [#152695](https://github.com/openclaw/openclaw/issues/152695) macOS app: onboarding/welcome wizard reopens on every launch after in-place manual update over an old version
- [#152204](https://github.com/openclaw/openclaw/issues/152204) Background exec completion starves when its requester session stays busy
- [#151437](https://github.com/openclaw/openclaw/issues/151437) Discord /model interactive picker fails with PreparedModelCatalogConfigReplacedError while direct arguments work (2026.9.4)
- [#150810](https://github.com/openclaw/openclaw/issues/150810) [Bug]: isolated finalization produced a reply but the turn was dispatched with "no queued reply payloads" and the user got the placeholder (Telegram, 2026.9.4)
- [#150253](https://github.com/openclaw/openclaw/issues/150253) Plugin control-ui panels unavailable behind a reverse proxy (render fine over a direct loopback connection)
- [#141806](https://github.com/openclaw/openclaw/issues/141806) Unselected memory-core shadows custom memory plugins recall tools
- [#158287](https://github.com/openclaw/openclaw/issues/158287) Update failure: gateway-recovery-verification (2026.9.6)
- [#157781](https://github.com/openclaw/openclaw/issues/157781) @openclaw/kimi-provider: kimi-for-coding thinking profile stuck at off/on — K2.8 Preview supports low/high/max
- [#156439](https://github.com/openclaw/openclaw/issues/156439) [zh-CN] UI 把 LLM 用量的 tokens 译为「词元」，建议改为 token
- [#155815](https://github.com/openclaw/openclaw/issues/155815) Interrupted inputs are never replayed and strand silently in `pendingInputs` after gateway restart / preflight compaction failure — request replay option, queue visibility, and sender notification
- [#155334](https://github.com/openclaw/openclaw/issues/155334) Self-heal AGENT DB size alert's suggested remedy (memory reset + VACUUM + reindex) doesn't durably reduce size; real consumer is legitimate session/memory embeddings
- [#155267](https://github.com/openclaw/openclaw/issues/155267) workboard: cards created inside an agent session are bound to that session's lifecycle, so card status tracks an unrelated chat session (and can suppress dispatch)
- [#155205](https://github.com/openclaw/openclaw/issues/155205) openclaw agent CLI hangs after plugin init when a context-engine plugin is configured (gateway HTTP path unaffected) — v2026.4.9
- [#155190](https://github.com/openclaw/openclaw/issues/155190) [Bug]: GPT-Live treats a non-fatal provider error before session.started as fatal, and a failed session leaves the phone call connected and silent
- [#153867](https://github.com/openclaw/openclaw/issues/153867) [Bug][Android] location.get returns LOCATION_BACKGROUND_UNAVAILABLE while Play app is foreground
- [#153671](https://github.com/openclaw/openclaw/issues/153671) Control UI webchat: final assistant reply rendered twice while transcript stores exactly one copy (zhipu openai-completions segment fallback)
- [#153554](https://github.com/openclaw/openclaw/issues/153554) Official kimi provider plugin not published for 2026.9.5 — standing version-drift warning, update no-ops
- [#151094](https://github.com/openclaw/openclaw/issues/151094) [Bug]: iOS Voice Wake stays Listening and never triggers in foreground
- [#150664](https://github.com/openclaw/openclaw/issues/150664) [Bug]: Control UI stutters while scrolling or hovering when reduced motion is on
- [#150138](https://github.com/openclaw/openclaw/issues/150138) Gateway startup spends ~1.4 s (of ~3.8 s) spawning four node children for read-only state-DB snapshots
- [#149947](https://github.com/openclaw/openclaw/issues/149947) [Feature]: Managed multi-repository tasks with unified review, recovery, and linked PRs
- [#149943](https://github.com/openclaw/openclaw/issues/149943) [Bug]: answering a pending ask_user question from a channel still fails CLI-runner-hosted waiting runs
- [#149935](https://github.com/openclaw/openclaw/issues/149935) 主会话重启恢复逐 store 同步读，导致开机冻结 63.6s
- [#183005](https://github.com/openclaw/openclaw/issues/183005) [Bug]: Failover classifier defaults a 400 with a redaction-destroyed body to format, forcing a model-swap recovery instead of overflow recovery
- [#189579](https://github.com/openclaw/openclaw/issues/189579) [Bug]: Failed plugin replacement leaves reply dispatch runtime unpublished — Telegram updates dead-lettered, Talk Mode dead until restart
- [#158011](https://github.com/openclaw/openclaw/issues/158011) Windows node host: screen.snapshot captures only the top-left region when display scaling is above 100%
- [#157925](https://github.com/openclaw/openclaw/issues/157925) [Bug]: Skill Workshop groups yesterday's proposals as Earlier across DST transitions
- [#157510](https://github.com/openclaw/openclaw/issues/157510) [Feature]: Make remote session hosting optional while retaining local sessions and browser nodes
- [#157509](https://github.com/openclaw/openclaw/issues/157509) [Feature]: Make the complete native GitHub integration independently optional
- [#157211](https://github.com/openclaw/openclaw/issues/157211) [Bug]: Codex harness omits image_generate while Gateway tools.invoke succeeds (2026.9.5)
- [#157149](https://github.com/openclaw/openclaw/issues/157149) [Feature]: Android dictation fallback to standard SpeechRecognizer when on-device ASR is unavailable
- [#156808](https://github.com/openclaw/openclaw/issues/156808) Feature request: per-provider-attempt hooks with resolved auth profile and guaranteed cleanup
- [#156806](https://github.com/openclaw/openclaw/issues/156806) Sessionful 'openclaw agent' command lacks ordered --fallback support (unlike 'agent exec')
- [#156770](https://github.com/openclaw/openclaw/issues/156770) [Feature]: describe inbound video through the OpenRouter provider
- [#156694](https://github.com/openclaw/openclaw/issues/156694) agents.defaults.timeoutSeconds is overloaded across 3 unrelated timeout subsystems (CLI wait, run-abort, model-idle) with 3 different defaults
- [#156469](https://github.com/openclaw/openclaw/issues/156469) [Bug]: Typographic characters in dist chunks make V8 store ~13 MiB of loaded source as two-byte strings
- [#156349](https://github.com/openclaw/openclaw/issues/156349) [Bug]: Mattermost inbound reaction mixes the payload channel with the post's thread root
- [#156213](https://github.com/openclaw/openclaw/issues/156213) [Feature]: memory-wiki: generated pages carry no `type`, so a vault is not OKF-conformant and cannot round-trip
- [#156193](https://github.com/openclaw/openclaw/issues/156193) [Bug]: Authoring models.providers.openai disables implicit Codex harness for all OpenAI models; agentRuntime codex ignored
- [#155916](https://github.com/openclaw/openclaw/issues/155916) [Feature]: Float Android Jump to latest above the composer
- [#155884](https://github.com/openclaw/openclaw/issues/155884) [Bug]: macOS app does not activate Workboard while browser does
- [#155828](https://github.com/openclaw/openclaw/issues/155828) [Feature]: WhatsApp: ingest the history WhatsApp shares with a newly added group member (messaging-history.set / stale append) and expose it to message_received
- [#155802](https://github.com/openclaw/openclaw/issues/155802) [Bug]: A LINE bot's webhook URL must be pasted into the Console by hand, and a tunnel restart silently kills the channel
- [#155668](https://github.com/openclaw/openclaw/issues/155668) [Feature]: Clarify acceptance criteria for new bundled web search providers (extensions/ vs ClawHub)
- [#155642](https://github.com/openclaw/openclaw/issues/155642) [Regression] 2026.9.5 plugin loader uses moduleCache:false in 7 files (re-introduces #85057)
- [#155582](https://github.com/openclaw/openclaw/issues/155582) [Feature]: opt in custom OpenAI-compatible Responses models to Fast service-tier support
- [#155463](https://github.com/openclaw/openclaw/issues/155463) Health report "backups push failing" label sticks long after actual push succeeds
- [#155462](https://github.com/openclaw/openclaw/issues/155462) Dashboard "备用模型" picker lists models not in fallback chain, creates orphan cron sessions on selection
- [#155381](https://github.com/openclaw/openclaw/issues/155381) agent exec: expose supported fallback attempt/tool provenance
- [#155179](https://github.com/openclaw/openclaw/issues/155179) [Bug]: Heartbeat reports success when HEARTBEAT.md work is skipped
- [#178771](https://github.com/openclaw/openclaw/issues/178771) memory_search loses scoped ownership when run session key is global
- [#147796](https://github.com/openclaw/openclaw/issues/147796) zh-CN locale: untranslated strings in Settings → Automation (command toggle labels/descriptions)
- [#155083](https://github.com/openclaw/openclaw/issues/155083) [Feature]: Machine-readable list of operator-facing surface changes per release
- [#155077](https://github.com/openclaw/openclaw/issues/155077) [Bug]: cron.sessionRetention is configured but never prunes — sessions ended 35+ days ago persist (2026.9.5)
- [#154530](https://github.com/openclaw/openclaw/issues/154530) [Feature]: allow macOS Gateway/Node scratch root on a separate volume
- [#154512](https://github.com/openclaw/openclaw/issues/154512) No plugin-SDK export for the browser tool factory (createBrowserTool) — forces a hand-built path into dist/ (2026.9.5)
- [#154264](https://github.com/openclaw/openclaw/issues/154264) [Bug]: Config write serialization crashes with RangeError on deeply nested documents
- [#154031](https://github.com/openclaw/openclaw/issues/154031) [Regression] Browser Talk still speaks replies in transcription mode — 2026.9.5
- [#153903](https://github.com/openclaw/openclaw/issues/153903) [Bug]: iOS background location.get over Tailscale reconnects then fails; foreground succeeds
- [#153864](https://github.com/openclaw/openclaw/issues/153864) [Bug]: Stale per-session contextTokens self-perpetuate via implicit 128k contextWindow cap; sessions.patch blocks correction
- [#153714](https://github.com/openclaw/openclaw/issues/153714) [Bug]: `--to` cannot derive an existing Telegram session route; `--session-key` to the same session works
- [#153522](https://github.com/openclaw/openclaw/issues/153522) Internal steering skip note ('Skipped to process an incoming message.') leaks as final channel reply
- [#153035](https://github.com/openclaw/openclaw/issues/153035) Feature request: per-session / per-session-type compaction override
- [#152959](https://github.com/openclaw/openclaw/issues/152959) Feature: Support Windows meeting talk-back audio on paired Chrome nodes
- [#152905](https://github.com/openclaw/openclaw/issues/152905) Control UI: root URL lands on the Ask OpenClaw/Home conversation on every open; no default-landing setting or durable dismiss
- [#152865](https://github.com/openclaw/openclaw/issues/152865) [Feature]: Reuse verified node-hosted skills for bound workers
- [#152737](https://github.com/openclaw/openclaw/issues/152737) [Feature]: Opt-in per-job cron policy to skip stale work before execution
- [#152658](https://github.com/openclaw/openclaw/issues/152658) [Feature]: Filter sidebar sessions by workspace type
- [#151793](https://github.com/openclaw/openclaw/issues/151793) [Qwen provider] Token Plan: model catalog lags the endpoint, reasoning-replay compat missing, and provider-level failure handling is misleading
- [#151348](https://github.com/openclaw/openclaw/issues/151348) [Bug]: Control UI double-renders assistant text when one message spans multiple records (distinct from #149221)
- [#151347](https://github.com/openclaw/openclaw/issues/151347) [Bug]: Failed/aborted model calls are billed upstream but leave no local usage trace (ledger undercounts ~50%)
- [#151308](https://github.com/openclaw/openclaw/issues/151308) Control UI WebChat: transcript scrolls back to top after long tool-using replies complete
- [#151007](https://github.com/openclaw/openclaw/issues/151007) [Feature]: In-app completion toasts for unattended sessions regardless of launch method
- [#150949](https://github.com/openclaw/openclaw/issues/150949) `computer` launch_app always rejected with COMPUTER_STALE_OBSERVATION on macOS (app-provided embedded CUA driver, 2026.9.4)
- [#150943](https://github.com/openclaw/openclaw/issues/150943) [Bug]: WhatsApp outbound 'composing' presence silences phone notifications after the agent replies (selfChatMode 'unavailable' is only sent on connect)
- [#150180](https://github.com/openclaw/openclaw/issues/150180) [Feature]: Expose the mid-turn prompt-size estimate to plugin tool hooks
- [#180969](https://github.com/openclaw/openclaw/issues/180969) [Bug]: Windows built-plugin singleton smoke fails cleanup after successful assertions
- [#191149](https://github.com/openclaw/openclaw/issues/191149) [Bug]: Doctor moves claude-cli model refs onto the API route when the matching anthropic model is pinned to another runtime
- [#158667](https://github.com/openclaw/openclaw/issues/158667) Feature request: operator-supplied pre-update check hook for /update, update.run, and Control UI updates
- [#158528](https://github.com/openclaw/openclaw/issues/158528) No migration-free offline snapshot path for the one-way 19→23 / 17→18 door; `sqlite3 -readonly` fails on the quiescent agent DBs a clean stop leaves behind
- [#158370](https://github.com/openclaw/openclaw/issues/158370) [Feature]: Collapsible sections for plugin pages in the Control UI sidebar
- [#158170](https://github.com/openclaw/openclaw/issues/158170) Desktop client: duplicate toolbar/titlebar renders stacked on top of each other
- [#157817](https://github.com/openclaw/openclaw/issues/157817) [Windows] `exec` spawns visible PowerShell console windows (flashing) — add a hidden-window option
- [#156426](https://github.com/openclaw/openclaw/issues/156426) GitHub managed OAuth stays unavailable after slow agent DB startup
- [#156313](https://github.com/openclaw/openclaw/issues/156313) Browser extension: relay drops entirely in Selected-tabs access mode (Windows)
- [#155382](https://github.com/openclaw/openclaw/issues/155382) agent exec: add supported per-run provider retry budget
- [#158468](https://github.com/openclaw/openclaw/issues/158468) Control UI: the main session cannot be moved into a custom group (category assignment silently has no effect)
- [#155080](https://github.com/openclaw/openclaw/issues/155080) [Bug]: `plugins inspect --runtime` reports "loaded" for a plugin the running gateway never loaded
- [#156209](https://github.com/openclaw/openclaw/issues/156209) [Bug]: memory-wiki OKF import does not preserve the required top-level `type` field, making imported pages fail OKF conformance on re-import
- [#155367](https://github.com/openclaw/openclaw/issues/155367) workboard_release clears claim metadata but leaves card status at "running" instead of a released state
- [#187772](https://github.com/openclaw/openclaw/issues/187772) Discord realtime voice fails on 2026.10.8: GPT-Live OAuth refresh hits DataCloneError on Proxy-wrapped config (reported as 'authentication failed')
- [#191360](https://github.com/openclaw/openclaw/issues/191360) [Bug]: Gateway pickers keep listing retired qwen-token-plan models after successful account discovery
- [#191542](https://github.com/openclaw/openclaw/issues/191542) [Bug]: On PostgreSQL families, a Git update that migrates state exits with update-recovery-pending because the migrated finalize worker reads the SQLite state anchor ("schema role missing")
- [#191412](https://github.com/openclaw/openclaw/issues/191412) [Bug]: install.sh gives PATH advice when Homebrew's Node is too old
- [#191420](https://github.com/openclaw/openclaw/issues/191420) `doctor --non-interactive` installs plugin packages without `--fix` (Voice Call's `TELNYX_API_KEY` selects `@telnyx/openclaw-provider`)
- [#171975](https://github.com/openclaw/openclaw/issues/171975) [Bug]: iOS parallel tool calls show no result after their outputs arrive
- [#157676](https://github.com/openclaw/openclaw/issues/157676) [Bug]: MSTeams native approval cards in 1:1 chats are never finalized after a decision
- [#191119](https://github.com/openclaw/openclaw/issues/191119) [Bug] 2026.10.10-beta.5: gateway logs "shutdown completed cleanly" but the process does not exit; systemd SIGKILLs it at TimeoutStopSec
- [#155362](https://github.com/openclaw/openclaw/issues/155362) Slack plugin rejects JSON-escaped string params (after/before) — double-encoded tool args throw instead of being unescaped
- [#191103](https://github.com/openclaw/openclaw/issues/191103) [Bug]: Published Slack plugins import retired heartbeat-runtime SDK on newer main-derived core
- [#130569](https://github.com/openclaw/openclaw/issues/130569) [Bug]: skills: browse commands fail on unrelated invalid config key
- [#191331](https://github.com/openclaw/openclaw/issues/191331) Live update recovery metadata inspection can fail during SQLite checkpoints
- [#191191](https://github.com/openclaw/openclaw/issues/191191) CI: measure adaptive test selection and its net compute cost
- [#189823](https://github.com/openclaw/openclaw/issues/189823) [Bug]: Parent sessions miss child approvals when session.store is customized
- [#191590](https://github.com/openclaw/openclaw/issues/191590) [Bug]: Overflow recovery compaction hides the degraded-summary warning
- [#191612](https://github.com/openclaw/openclaw/issues/191612) [Bug]: Skills watch-target refresh re-enters continuously; ~1 core pegged with 19 agents (2026.10.7)
- [#191330](https://github.com/openclaw/openclaw/issues/191330) Update admission failure can lose the adopted run ID and leave its history running
- [#161810](https://github.com/openclaw/openclaw/issues/161810) [Bug]: Cron fallback candidate receives the primary provider's auth pin ("is not configured for openai")
- [#191579](https://github.com/openclaw/openclaw/issues/191579) Isolated automation runs abort with "Session transcript keyed user is outside the current turn" (55 occurrences in 14 days)
- [#191564](https://github.com/openclaw/openclaw/issues/191564) Update failure: package-install-omit-optional (2026.10.5)
- [#191531](https://github.com/openclaw/openclaw/issues/191531) Voice-only Talk sessions over the Gateway relay never get an automatic title
- [#191515](https://github.com/openclaw/openclaw/issues/191515) [Bug]: Telegram progress mode drops compaction notices, including the degraded-summary warning
- [#191557](https://github.com/openclaw/openclaw/issues/191557) Telegram outbound session route ignores the account binding: cron delivery mirror lands in an account-scoped DM session while replies use `per-channel-peer`
- [#191510](https://github.com/openclaw/openclaw/issues/191510) [Feature]: Cost-control incident: approx. US$400 reported during development; request shared enforceable spend limits
- [#187868](https://github.com/openclaw/openclaw/issues/187868) [Bug]: setup-token login saves an unusable profile
- [#191208](https://github.com/openclaw/openclaw/issues/191208) iOS chat: tool steps show a usage footer that belongs under the final reply
- [#191268](https://github.com/openclaw/openclaw/issues/191268) Control UI: ClawHub install dialog never shows that the skill was installed
- [#191116](https://github.com/openclaw/openclaw/issues/191116) [Bug]: X activity stream keeps an unbounded in-memory batch backlog when the consumer is slower than the stream
- [#178719](https://github.com/openclaw/openclaw/issues/178719) [Bug]: 2026.10.4 app-managed Gateway moved to per-build bun path; macOS Automation grant lost, iMessage sends fail with AppleScript -1712
- [#191386](https://github.com/openclaw/openclaw/issues/191386) [Bug]: OpenClaw Companion 2026.9.8-1 installs Node 24.19.0 but OpenClaw CLI requires >=24.22.1, causing installation failure
- [#191322](https://github.com/openclaw/openclaw/issues/191322) [Bug]: Doctor reports historical_transcript_deferred for a superseded migration receipt when two runs archive the same source
- [#191133](https://github.com/openclaw/openclaw/issues/191133) [Bug]: an oversized previous turn makes the next turn start with no history (turn-anchored cut lands on the current prompt)
- [#191168](https://github.com/openclaw/openclaw/issues/191168) [Bug]: bundle-mcp: live runtime slots are never released for ended sessions → limit (256) reached in normal use
- [#191110](https://github.com/openclaw/openclaw/issues/191110) [Bug]: Missing selected account is reported as failed Claude CLI login
- [#191123](https://github.com/openclaw/openclaw/issues/191123) [Bug]: Retained plugin cleanup inherits a closed caller scope
- [#191134](https://github.com/openclaw/openclaw/issues/191134) Update failure: package-install-omit-optional (2026.9.8)
- [#190951](https://github.com/openclaw/openclaw/issues/190951) Bug: hook runs can ignore selected accounts without a credential store
- [#189012](https://github.com/openclaw/openclaw/issues/189012) [Bug]: GPT-Live phone replies retain startup audio delay
- [#191115](https://github.com/openclaw/openclaw/issues/191115) [Bug]: Combined MCP runtime lease release stops after the first failing part and cannot retry
- [#191093](https://github.com/openclaw/openclaw/issues/191093) Cron trigger evaluation intermittently fails: "Direct shared-state reader requires current integrity admission"
- [#190981](https://github.com/openclaw/openclaw/issues/190981) Avoid waiting for failure reporting after healthy PR checks
- [#162730](https://github.com/openclaw/openclaw/issues/162730) [Docs Bug]: docs: macOS VM guide never explains how to open the dashboard from the host Mac
- [#122598](https://github.com/openclaw/openclaw/issues/122598) [Docs Bug]: clarify that MiniMax M2.x ignores disabled thinking
- [#190993](https://github.com/openclaw/openclaw/issues/190993) Update failure: package-install-omit-optional (2026.9.9)
- [#127454](https://github.com/openclaw/openclaw/issues/127454) Gateway status and discovery cannot safely serialize IPv6 SSH targets or URL authorities
- [#163006](https://github.com/openclaw/openclaw/issues/163006) [Bug]: Amazon Bedrock Mantle provider 401s with "Invalid bearer token" when auth: "aws-sdk" is set
- [#190990](https://github.com/openclaw/openclaw/issues/190990) [Bug]: State-lease heartbeat caches a rejected stop() promise; one cleanup failure permanently breaks file exclusion and skips lease/lock release
- [#157412](https://github.com/openclaw/openclaw/issues/157412) [Bug]: Security audit and install policy fields lack localizable source labels
- [#190947](https://github.com/openclaw/openclaw/issues/190947) [Bug]: MCP cleanup failure leaks a live runtime slot and blocks new MCP runtimes after 256 retirements
- [#190920](https://github.com/openclaw/openclaw/issues/190920) Thinking reset before the first session row retains the created choice
- [#190902](https://github.com/openclaw/openclaw/issues/190902) fix(automations): explicit native CLI account selection cannot replace a stored account
- [#190886](https://github.com/openclaw/openclaw/issues/190886) Thinking choice clears when an overlapping title snapshot is rejected
- [#190887](https://github.com/openclaw/openclaw/issues/190887) Reduce database-worker CI check overhead without changing safety checks
- [#187849](https://github.com/openclaw/openclaw/issues/187849) [Bug]: Token budget under-counts Tangut, Khitan, and Nushu supplementary characters
- [#190797](https://github.com/openclaw/openclaw/issues/190797) Web-search Docker regression crashes after the mock completes a response
- [#190851](https://github.com/openclaw/openclaw/issues/190851) An inter-session send delivers a second message carrying only the requester's runtime context

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 259,918 · **Open issues:** 52,400 · **Last push:** <1h ago

On November 2, 2026, Hermes Agent released version 0.22.6, a patch that consolidated approximately 776 pull requests since the previous version, ensuring stability across its platforms including the CLI, Microsoft Store app, Docker, and Hermes Cloud. Significant merged pull requests included fixes for bundles that enhance payload caching and macOS update handling. Among the new issues, a notable concern was raised regarding the OpenAI-compatible image backend being unable to connect to providers without specific URL formats, highlighting potential limitations in flexibility. Additionally, several bugs were reported, including challenges with background-process notifications and issues related to chat resumes when directories are missing.

#### 🚀 New Releases
- [v0.22.6](https://github.com/nousresearch/hermes-agent/releases/tag/v0.22.6) Hermes Agent v0.22.6

#### ✅ Merged PRs
- [#148193](https://github.com/NousResearch/hermes-agent/pull/148193) fix(bundles): keep uv's wheel links from the payload cache to the machine cache
- [#147058](https://github.com/NousResearch/hermes-agent/pull/147058) chore(plugins): pin birkin-mnemosyne to core 0.9.0
- [#148244](https://github.com/NousResearch/hermes-agent/pull/148244) fix(bundles): refuse a macOS update ZIP with entries lacking owner write

#### 🐛 New Issues
- [#148283](https://github.com/NousResearch/hermes-agent/issues/148283) [Feature]: OpenAI-compatible image backend can't reach providers without /images/edits (nor send vendor extras like watermark) `type/feature` `comp/plugins` `tool/file` `tool/vision` 💬1
- [#147996](https://github.com/NousResearch/hermes-agent/issues/147996) [Bug][Desktop]: [SILENT] reply to a background-process notification is rendered as a message (gateway suppresses it) `type/bug` `P2` `comp/desktop` `area/streaming` 💬1
- [#148281](https://github.com/NousResearch/hermes-agent/issues/148281) Gateway drain timeout log reports "0 active agent(s)" while it waits the full drain budget — managed/uncounted work is counted but not printed `type/bug` `comp/gateway` `P3` 💬1
- [#148282](https://github.com/NousResearch/hermes-agent/issues/148282) Managed work registrations accumulate (3,239 active work units on an idle gateway) and force every stop to drain to timeout `type/bug` `comp/gateway` `P2` 💬1
- [#148272](https://github.com/NousResearch/hermes-agent/issues/148272) [Bug]: /compact is unreachable in Bot Mode — `compress` is refused by command_verdict while session.compress is never registered `type/bug` `comp/gateway` `tool/file` `P2` 💬1
- [#148257](https://github.com/NousResearch/hermes-agent/issues/148257) [Bug]: Group Chat members can't be woken after a standalone→gateway handoff — "message.member authority epoch does not match the room" `type/bug` `comp/gateway` `P2` 💬1
- [#148255](https://github.com/NousResearch/hermes-agent/issues/148255) [Bug]: /model <alias> with key_env bills the default Anthropic key — per-request refresh and gateway restart drop the alias credential `type/security` `comp/agent` `comp/gateway` `tool/delegate` 💬1
- [#148245](https://github.com/NousResearch/hermes-agent/issues/148245) [Bug]: Desktop in remote-gateway mode ignores "Default project directory" for the first chat after launch (stale per-connection workspace wins) `type/bug` `area/config` `P2` `comp/desktop` 💬1
- [#148238](https://github.com/NousResearch/hermes-agent/issues/148238) [Bug]: session.resume refuses a chat whose stored cwd no longer exists, with a bare invalid_params `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#148307](https://github.com/NousResearch/hermes-agent/issues/148307) [Feature][Mobile]: Suppress routine mobile notifications while actively using Hermes Desktop `type/feature` `comp/gateway` `P3`
- [#148306](https://github.com/NousResearch/hermes-agent/issues/148306) Feature: agent-loop hook for guarded decision reuse (skip already-decided model callbacks) `type/feature` `comp/agent` `P3`
- [#148284](https://github.com/NousResearch/hermes-agent/issues/148284) macOS Desktop: dictation lost when switching chats during transcription `type/bug` `tool/tts` `P2` `comp/desktop`
- [#148285](https://github.com/NousResearch/hermes-agent/issues/148285) [Bug]: Mobile clients park on "Reconnecting..." after a network switch, with no way to tell which mechanism fired `type/bug` `area/auth` `area/config` `P2`
- [#148286](https://github.com/NousResearch/hermes-agent/issues/148286) Desktop dictation: silent failure on remote backend, "no STT provider" with no install UI on local `type/bug` `tool/tts` `area/config` `P2`
- [#148287](https://github.com/NousResearch/hermes-agent/issues/148287) Desktop shows the working indicator for a turn before the prompt text arrives, when the prompt was sent from the Webapp `type/bug` `P3` `comp/desktop` `desktop/chat`
- [#148277](https://github.com/NousResearch/hermes-agent/issues/148277) [Bug]: Desktop send that landed is also restored into the composer — a compacted Bot Chat shows the same message twice (bubble + live draft) `type/bug` `P2` `comp/desktop` `area/sessions`
- [#148270](https://github.com/NousResearch/hermes-agent/issues/148270) [Bug]: Desktop archived list hides successful pages when a later page times out `type/bug` `P2` `comp/desktop` `area/sessions`
- [#148264](https://github.com/NousResearch/hermes-agent/issues/148264) [Bug]: stash-restore import probe runs a dependency rebuild inside its own 120s timeout — hermes update hangs and dies mid-restore on Windows `type/bug` `comp/cli` `P2` `area/install-update`
- [#148261](https://github.com/NousResearch/hermes-agent/issues/148261) local_runtime: hardcoded `--load-mode dio` materializes spilled MoE experts as a 19 GB Vulkan host buffer → KV cache allocation fails with 1.9/8 GB VRAM in use (mmap loads fine) `type/perf` `comp/cli` `P2` `area/local-models`
- [#148262](https://github.com/NousResearch/hermes-agent/issues/148262) pm strips UV_CONCURRENT_DOWNLOADS, so a slow link cannot lower download concurrency — parallel large wheels all hit the HTTP timeout `type/bug` `comp/cli` `P2` `area/install-update`
- [#148258](https://github.com/NousResearch/hermes-agent/issues/148258) [Bug]: Matrix message "read only = no" renders as "read" `type/bug` `comp/plugins` `platform/matrix` `P2`
- [#148237](https://github.com/NousResearch/hermes-agent/issues/148237) [Bug]: live-system test guard blocks its own subtree's teardown signal when psutil is absent, wedging pytest in Popen.__exit__'s unbounded wait `type/bug` `P2`
- [#148246](https://github.com/NousResearch/hermes-agent/issues/148246) [Bug]: [Mobile app - Android beta] Direct connection option when adding an instance discovers that dashboards has Nous auth, but fails with "Unable to resolve host: [hostname]. No address associated with hostname" after successful browser sign-in `type/bug` `area/auth` `P3`
- [#148248](https://github.com/NousResearch/hermes-agent/issues/148248) Multiplexed gateway: /new and /undo confirm reads the launch profile's approvals.destructive_slash_confirm, not the chat's profile `type/bug` `comp/gateway` `P2` `area/profiles`
- [#148249](https://github.com/NousResearch/hermes-agent/issues/148249) local_runtime: GPU device probe silently fails when MSVCP140.dll is missing → budget falls back to system RAM → `spilled: false` on a model 3× larger than VRAM → ErrorOutOfDeviceMemory at load `type/bug` `comp/cli` `P2` `area/local-models`
- [#148241](https://github.com/NousResearch/hermes-agent/issues/148241) [Bug]: 0.22.6 provider clients ignore SSL_CERT_FILE (resolve_httpx_verify drops the bundle), TLS fails behind intercepting proxies `type/bug` `comp/agent` `P2`
- [#148236](https://github.com/NousResearch/hermes-agent/issues/148236) Telegram: agent-facing labeled inline buttons (callback) for section navigation `type/feature` `comp/gateway` `comp/plugins` `platform/telegram`

#### 🔒 Closed Issues
- [#143268](https://github.com/NousResearch/hermes-agent/issues/143268) [Bug] LOCAL Kanban notify+wake never reaches the session FIFO: LocalSessionAdapter has no gateway_runner
- [#141891](https://github.com/NousResearch/hermes-agent/issues/141891) [Bug]: pm: uv cache seed follows symlinks, producing directories where uv requires a link
- [#147036](https://github.com/NousResearch/hermes-agent/issues/147036) [Bug]: /api/config/schema builds the config schema on the event loop, freezing every other request (and /api/ws chat) for ~3 s
- [#138659](https://github.com/NousResearch/hermes-agent/issues/138659) [Bug]: macOS desktop update never installs: Squirrel.Mac aborts on the read-only .pyc files bytecode.py bakes
- [#137717](https://github.com/NousResearch/hermes-agent/issues/137717) [Bug]: desktop bundle prepare cannot be re-run on Windows — `snapshot()` rmtrees a tree `bake_bytecode` made read-only

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,173 · **Open issues:** 9,772 · **Last push:** <1h ago

On November 3, 2026, vLLM released version v0.33.0, which includes 927 commits from 389 contributors, introducing notable models such as Reflection Beam-1.0 with 501 billion MoE parameters and Yandex's AliceAI-Foundation-80B-A3B. Key merged pull requests addressed various bugs, with significant fixes like enabling GDN prefill on SM110 and the support for DCP on the FlashMLA sparse bf16 KV path. Additionally, important bugs were reported, including one related to the Muse Spark long-context handling on MI350X that affects GPU KV and a failure of the extensible KV cache when used with the KV offload connector. Overall, the day highlighted substantial developments and contributions to enhancing the functionality of vLLM.

#### 🚀 New Releases
- [v0.33.0rc3](https://github.com/vllm-project/vllm/releases/tag/v0.33.0rc3) v0.33.0

#### ✅ Merged PRs
- [#61755](https://github.com/vllm-project/vllm/pull/61755) [Bugfix][Kernel] Fill K-padded output in silu_and_mul_nvfp4_quant
- [#65051](https://github.com/vllm-project/vllm/pull/65051) [Bugfix][LoRA] Skip MoE-LoRA shrink/expand when no LoRA is active
- [#65050](https://github.com/vllm-project/vllm/pull/65050) [Kernel] Enable CuteDSL GDN prefill on SM110
- [#61609](https://github.com/vllm-project/vllm/pull/61609) [Attention][DCP] Support DCP on the FlashMLA sparse bf16 KV path
- [#64651](https://github.com/vllm-project/vllm/pull/64651) [XPU][CI] add EPD test into intel CI
- [#61795](https://github.com/vllm-project/vllm/pull/61795) [UMBP][7/10] Add standalone mode backed by a node-local server
- [#60339](https://github.com/vllm-project/vllm/pull/60339) [Spec Decode][MRV2] Suffix decoding speculator for Model Runner V2
- [#61435](https://github.com/vllm-project/vllm/pull/61435) [ROCm][Perf][Kimi-K3] Specialized decode on MI355X: K1/K2 + MLA M1a/M1b (FlyDSL, TP8, DCP1/DCP8)
- [#63420](https://github.com/vllm-project/vllm/pull/63420) [Mooncake] Support selective leases for prefix lookups
- [#64585](https://github.com/vllm-project/vllm/pull/64585) [NIXL][CI/Build] Bump NIXL to 1.5.2 and drop source build for Rubin
- [#65238](https://github.com/vllm-project/vllm/pull/65238) [CI/Build] Add batch-invariance auto-label rule
- [#65199](https://github.com/vllm-project/vllm/pull/65199) [Docs] List the Nemotron-3-Diarization plugin
- [#65225](https://github.com/vllm-project/vllm/pull/65225) [Bugfix] Pad extensible KV cache segments instead of rounding the block count
- [#65041](https://github.com/vllm-project/vllm/pull/65041) [Bugfix][MRV2][Spec Decode] Keep P/D prompt tails on FULL graphs with adaptive verification
- [#63123](https://github.com/vllm-project/vllm/pull/63123) [Bugfix][Distributed] Gate FlashInfer all-reduce on 16-byte row widths
- [#64417](https://github.com/vllm-project/vllm/pull/64417) [Perf] Skip custom-op dispatch for FlashInfer dense GEMMs in eager
- [#62966](https://github.com/vllm-project/vllm/pull/62966) [Core] Add watermark_config.enforce to override request opt-outs in EngineCore
- [#65166](https://github.com/vllm-project/vllm/pull/65166) [Perf][Frontend] Validate plain embedding inputs before the full union
- [#65060](https://github.com/vllm-project/vllm/pull/65060) [Bugfix][KV Connector] Fix KV role detection for MultiConnector with nested connectors
- [#64839](https://github.com/vllm-project/vllm/pull/64839) [ROCm][CI] Add a build.sh prebuild mode for maintainer-approved stack builds
- [#64657](https://github.com/vllm-project/vllm/pull/64657) [Test][UMBP] Cover TP=2 restore through per-rank MORI pools
- [#65211](https://github.com/vllm-project/vllm/pull/65211) [CI] Enroll 6 jobs in automatic sharding
- [#64788](https://github.com/vllm-project/vllm/pull/64788) [CI] Enroll Spec Decode AL DSpark and UMBP Connector Integration in automatic sharding
- [#64272](https://github.com/vllm-project/vllm/pull/64272) [CI] Enroll 13 jobs in automatic sharding
- [#64174](https://github.com/vllm-project/vllm/pull/64174) [CI] Enroll four Nightly steps and three AMD mirrors in automatic sharding
- [#64806](https://github.com/vllm-project/vllm/pull/64806) [Bugfix][Attention] Bound SM100 decode indexer logits with query-row chunks
- [#62623](https://github.com/vllm-project/vllm/pull/62623) [XPU][Test] Skip attention fusion splitting_ops check on XPU
- [#65178](https://github.com/vllm-project/vllm/pull/65178) [Perf][DCP] Sparse indexer: read the rank-major DCP top-k gather in place
- [#65059](https://github.com/vllm-project/vllm/pull/65059) [Bugfix][Kernel] Only set PDL launch attr for MoE top-k gating on SM90+
- [#59999](https://github.com/vllm-project/vllm/pull/59999) [Bugfix] FlashInfer: declare only KV layouts it can address
- [#63426](https://github.com/vllm-project/vllm/pull/63426) [ROCm][CI] Print the native backtrace of a fault in AMD CI pytest runs
- [#64833](https://github.com/vllm-project/vllm/pull/64833) [ROCm][Step5] Require CDNA3 or newer for the sparse attention layers

#### 🐛 New Issues
- [#65190](https://github.com/vllm-project/vllm/issues/65190) [ROCm][Bug] Muse Spark long-context c40 on MI350X: serial prefill and ~0 decode when the working set exceeds GPU KV and the default 2 GB/rank SimpleCPUOffload pool `rocm` 💬8
- [#65204](https://github.com/vllm-project/vllm/issues/65204) [Bug]: Extensible KV cache + KV offload connector fails to start: granule alignment rounds reserved blocks to 0 `bug` `quantization` 💬3
- [#65209](https://github.com/vllm-project/vllm/issues/65209) [RFC]: Group-wide LoRA admission and residency for distributed MoE serving 💬2
- [#65193](https://github.com/vllm-project/vllm/issues/65193) [Bug][Quantization] MXFP8 linear kernel selection ignores the requested activation scheme — weight-only (W8A16) checkpoints silently run W8A8 `quantization` 💬2
- [#65075](https://github.com/vllm-project/vllm/issues/65075) [Bug]: Bi-encoder scoring token limits fail with MistralTokenizer 💬2
- [#65264](https://github.com/vllm-project/vllm/issues/65264) [Bug]: Mamba align prefix cache keys a partial-hit state copy at a block boundary that no chunk wrote when an internal prefill checkpoint is used `bug` `kv-cache-manager` 💬1
- [#65115](https://github.com/vllm-project/vllm/issues/65115) [Bug]: DeepSeek render parity — native appends EOS for continue_final_message, vllm-rs does not `deepseek` 💬1
- [#65223](https://github.com/vllm-project/vllm/issues/65223) [RFC]: TokenGate integration into vLLM `RFC` 💬1
- [#65071](https://github.com/vllm-project/vllm/issues/65071) [Bug]: CustomDataset converts numeric-string prompts to integers before tokenization 💬1
- [#65151](https://github.com/vllm-project/vllm/issues/65151) [Feature][ROCm]: Configurable HIP host wait policy for WSL GPU workers `feature request` `rocm` 💬1
- [#65106](https://github.com/vllm-project/vllm/issues/65106) [Bug]: [ROCm][Kimi-K3] DBO: MoE workspace locked smaller than the DP-gathered batch, first request fails `rocm` `kimi` `k3` 💬1
- [#65105](https://github.com/vllm-project/vllm/issues/65105) [Bug]: [ROCm] AITER MLA `paged_kv_indices` sized max_num_seqs x max_model_len (4 GiB per builder) pins a cached segment, Kimi-K3 DBO OOMs at startup `rocm` `kimi` `k3` 💬1
- [#65081](https://github.com/vllm-project/vllm/issues/65081) [CI Failure]: pre-commit mypy on main - process_weights_after_loading redefined in vllm/models/muse_spark/amd/model.py `rocm` `ci-failure` 💬1
- [#65056](https://github.com/vllm-project/vllm/issues/65056) [RFC]: Selected input-row hidden-state export for full-vocabulary OPD teachers `quantization` 💬1
- [#65095](https://github.com/vllm-project/vllm/issues/65095) [Bug]: The message API doesn't support min_tokens for now `bug` 💬1
- [#65073](https://github.com/vllm-project/vllm/issues/65073) [Bug]: Duplicate MCP server names advertise tools from a different execution server `tool-calling` 💬1
- [#65074](https://github.com/vllm-project/vllm/issues/65074) [Bug]: MCP tool discovery drops tools after the first tools/list page `tool-calling` 💬1
- [#65072](https://github.com/vllm-project/vllm/issues/65072) [Bug]: ASRDataset uses channel count as duration when filtering stereo audio bytes 💬1
- [#65278](https://github.com/vllm-project/vllm/issues/65278) [Bug]: GLM-5.3 (DSA sparse MLA) is not batch invariant under `VLLM_BATCH_INVARIANT=1`; today it is refused at startup `bug` `quantization` `glm` `batch-invariance`
- [#65277](https://github.com/vllm-project/vllm/issues/65277) [Feature]: Rust frontend does not export `vllm:cache_config_info` `rust`
- [#65273](https://github.com/vllm-project/vllm/issues/65273) [Bug]: Step3 tool parser does not coerce nullable or object/array parameters `bug` `tool-calling`
- [#65265](https://github.com/vllm-project/vllm/issues/65265) [Bug]: --max-num-queued-tokens is enforced per API server, not across API servers
- [#65255](https://github.com/vllm-project/vllm/issues/65255) [RFC]: Out-of-tree KV-export connectors that hand a vLLM prefill to MLX (EXO) decode on Apple Silicon `cpu`
- [#65250](https://github.com/vllm-project/vllm/issues/65250) [Performance]: extract_hidden_states loses ~38% throughput to a decode draft that is almost never accepted `performance`
- [#65242](https://github.com/vllm-project/vllm/issues/65242) [Bug]: Hermes streaming tool parser leaks keys that follow "arguments" into the streamed arguments string; non-streaming is correct `bug` `tool-calling`
- [#65218](https://github.com/vllm-project/vllm/issues/65218) [Bug]: NixlConnector silently corrupts NVFP4 KV cache when the prefill block size is smaller than decode's
- [#65205](https://github.com/vllm-project/vllm/issues/65205) [Bug]: Muse Spark (NVIDIA path): 46 private fp32 RoPE tables of 1M rows cost 11.5 GiB per GPU `nvidia`
- [#65179](https://github.com/vllm-project/vllm/issues/65179) CATHLEENANNTICO
- [#65173](https://github.com/vllm-project/vllm/issues/65173) [Bug] DeepSeek V4.1 Flash selects the last optional tool parameter based on JSON Schema property order, contradicting reasoning `bug` `structured-output` `tool-calling` `deepseek`
- [#65172](https://github.com/vllm-project/vllm/issues/65172) [RFC]: Holemiss: Selective Recovery of Partially Lost LLM Cache State `RFC`
- [#65171](https://github.com/vllm-project/vllm/issues/65171) [Bug][Transformers Backend] HunyuanOCR fails with attention head dimension mismatch (128 vs 192)
- [#65055](https://github.com/vllm-project/vllm/issues/65055) [Performance]: MoE top-k gating PDL launch (#59737) slows CUDA graph replay on pre-Hopper GPUs `performance`
- [#65161](https://github.com/vllm-project/vllm/issues/65161) [Performance]: With EAGLE and the OffloadingConnector, a prefix-cache hit loads its dropped last block from the CPU tier `speculative-decoding`
- [#65155](https://github.com/vllm-project/vllm/issues/65155) [Bug]: Rust frontend: clients that connect during --shutdown-timeout hang instead of being refused `rust`
- [#65141](https://github.com/vllm-project/vllm/issues/65141) [Bug]: Second `vllm serve --grpc` on the same port starts fine and steals traffic
- [#65139](https://github.com/vllm-project/vllm/issues/65139) [Bug]: b12x attention — CUDA illegal memory access at the first MTP verify step (cold-JIT `PagedForwardKernel`) on v0.33.0; regression from v0.32.0 (SM120, NVFP4 MoE, fp8 KV, chunked prefill, prefix caching, MTP spec decode) `kv-cache-manager`
- [#65135](https://github.com/vllm-project/vllm/issues/65135) [Bug]: MessageQueue.shutdown() does not unblock writers blocked in acquire_write `bug`
- [#65131](https://github.com/vllm-project/vllm/issues/65131) [Bug]: Sync KV load-failure recovery triggers num_output_placeholders assertion on v0.29.0 and v0.32.0 `bug`
- [#65120](https://github.com/vllm-project/vllm/issues/65120) [RFC]: DBO for the decoder of multimodal MoE models in Model Runner V2 `multi-modality` `kimi`
- [#65119](https://github.com/vllm-project/vllm/issues/65119) [RFC]: DBO for the MTP/EAGLE drafter forward in Model Runner V2 `speculative-decoding`
- [#65116](https://github.com/vllm-project/vllm/issues/65116) [Bug]: DeepSeek tool-schema JSON omits "description": null in vllm-rs (native includes it) `tool-calling` `deepseek`
- [#65114](https://github.com/vllm-project/vllm/issues/65114) [Bug]: vllm-rs chat render and native render select opposite thinking modes when a thinking toggle is combined with a reasoning-effort control `tool-calling`
- [#65122](https://github.com/vllm-project/vllm/issues/65122) [RFC]: Zero-copy DeepEP low-latency combine, safe under DBO
- [#65121](https://github.com/vllm-project/vllm/issues/65121) [RFC]: DBO with the allgather_reducescatter all2all backend on CUDA
- [#65112](https://github.com/vllm-project/vllm/issues/65112) test_process_checkpoint: no coverage path for hybrid GDN models
- [#65096](https://github.com/vllm-project/vllm/issues/65096) [Bug]: Unbounded startup wait holds --data-parallel-rpc-port; crashed frontend leaves orphaned processes holding accelerator memory and the shared API listen socket
- [#65070](https://github.com/vllm-project/vllm/issues/65070) [Bug]: CPU WNA16 MoE cannot load poolside/Laguna-XS-2.1-INT4 `bug` `quantization`
- [#65054](https://github.com/vllm-project/vllm/issues/65054) [Feature]: GDN prefill on SM110 (Jetson Thor): use the CuteDSL and FlashInfer kernels `feature request`

#### 🔒 Closed Issues
- [#23943](https://github.com/vllm-project/vllm/issues/23943) [Feature]: Any plans to add nvidia/parakeet-tdt-0.6b-v3 to vllm?
- [#36821](https://github.com/vllm-project/vllm/issues/36821) [Bug]: No sm_121 (Blackwell) support on aarch64 — NVIDIA DGX Spark / Acer GN100
- [#46625](https://github.com/vllm-project/vllm/issues/46625) Qwen3-VL-8B-FP8 on RTX 5080 (Blackwell SM120) - engine init OK but generate() hangs silently
- [#46328](https://github.com/vllm-project/vllm/issues/46328) [Bug]: glm-5-fp8 zcode str object has no attribute items
- [#46679](https://github.com/vllm-project/vllm/issues/46679) [Bug]: GLM5.2 RuntimeError: The expanded size of the tensor (10210) must match the existing size (16384) at non-singleton dimension 1. Target sizes: [12, 10210]. Tensor sizes: [12, 16384]
- [#47349](https://github.com/vllm-project/vllm/issues/47349) [Bug]: fp8 KV cache + prefix caching truncates generation (ignore_eos bypassed) on Qwen3.5-NVFP4
- [#65190](https://github.com/vllm-project/vllm/issues/65190) [ROCm][Bug] Muse Spark long-context c40 on MI350X: serial prefill and ~0 decode when the working set exceeds GPU KV and the default 2 GB/rank SimpleCPUOffload pool
- [#47129](https://github.com/vllm-project/vllm/issues/47129) [Bug]: DiffusionGemma fails to start with RuntimeError in _compiled_sample_step during torch.compile (matmul shape mismatch)
- [#43090](https://github.com/vllm-project/vllm/issues/43090) [CI Failure]: Language Models Tests (Hybrid) 1 - granite-4.0-tiny-preview prefix caching regression
- [#48898](https://github.com/vllm-project/vllm/issues/48898) [Bug]: NVFP4 garbage output under torch.compile when per-rank K is not 32-aligned (TP8 on SM120): padded block-scale column reads stale memory; eager/Marlin/aligned-TP correct
- [#47026](https://github.com/vllm-project/vllm/issues/47026) [Bug]: Gemma4ForConditionalGeneration + runtime LoRA greedy decode diverges from HuggingFace transformers on text-only prompts
- [#47047](https://github.com/vllm-project/vllm/issues/47047) Gemma-4-26B-A4B-NVFP4 + MTP4 is slower on v0.23.0 than v0.21.0 on RTX PRO 6000 Blackwell
- [#47051](https://github.com/vllm-project/vllm/issues/47051) [Bug]: GPT-OSS models silently ignore unsupported content types (input_file, etc.)
- [#47473](https://github.com/vllm-project/vllm/issues/47473) [Bug]: Gemma4 (probably other models with missing v_proj) breaks with mixed quantization
- [#44245](https://github.com/vllm-project/vllm/issues/44245) fix(lora): _load_lora_config retry uses deterministic backoff without jitter — thundering herd risk
- [#47424](https://github.com/vllm-project/vllm/issues/47424) [Bug]: DiffusionGemma output unstable (v0.24.0)
- [#64327](https://github.com/vllm-project/vllm/issues/64327) [Bug][HiSparse] GLM-5.3 TP8 B200: unspecified launch failure with MNNVL all-reduce (#61989) once KV spills to host
- [#45531](https://github.com/vllm-project/vllm/issues/45531) [Bug]: minimax M3MXFP8 with mtp can not start success
- [#47415](https://github.com/vllm-project/vllm/issues/47415) WorkerProc initialization failure swallows root cause traceback (raise e from None)
- [#47486](https://github.com/vllm-project/vllm/issues/47486) [Bug]: SpeculativeConfig silently overrides the user's explicit speculative method (model_type and path-substring auto-detection)
- [#65204](https://github.com/vllm-project/vllm/issues/65204) [Bug]: Extensible KV cache + KV offload connector fails to start: granule alignment rounds reserved blocks to 0
- [#64758](https://github.com/vllm-project/vllm/issues/64758) [Bug]: Kimi-K3 outputs turn into `!!!!` (token 0) streams under load (FlashKDA spreads one NaN across requests; FlashMLA SM90 decode PDL race)
- [#63130](https://github.com/vllm-project/vllm/issues/63130) [Bug]: Strict serde rejection of duplicate field `reasoning` breaks agent harnesses that echo both `reasoning` and `reasoning_content`
- [#63948](https://github.com/vllm-project/vllm/issues/63948) [Bug]: KV offload P2P tier: reset_cache() fails an assert on a prefill node with stores waiting for the decoder
- [#61658](https://github.com/vllm-project/vllm/issues/61658) [Bug]: tiering async lookup serves stale absent verdicts across instances sharing a secondary tier
- [#65071](https://github.com/vllm-project/vllm/issues/65071) [Bug]: CustomDataset converts numeric-string prompts to integers before tokenization
- [#65081](https://github.com/vllm-project/vllm/issues/65081) [CI Failure]: pre-commit mypy on main - process_weights_after_loading redefined in vllm/models/muse_spark/amd/model.py
- [#59998](https://github.com/vllm-project/vllm/issues/59998) [Bug]: FlashInfer with LHBNC on A100 asserts at startup
- [#65055](https://github.com/vllm-project/vllm/issues/65055) [Performance]: MoE top-k gating PDL launch (#59737) slows CUDA graph replay on pre-Hopper GPUs

### SGLang (`sgl-project/sglang`)

**Stars:** 38,384 · **Open issues:** 6,319 · **Last push:** <1h ago

On November 3, 2026, SGLang released version v0.5.23, showcasing 1,007 pull requests from 257 contributors, and introducing new models including Muse Spark Open and Beam-1.0. Significant merged updates included fixes for the scheduler related to metrics publishing and decode requests, alongside feature enhancements for the Kimi-K3 model which now supports DCP with shared compact communication. Notably, a new issue was reported regarding the MambaPool copying from an all-source temporal state, which could lead to CUDA out-of-memory errors during high-load scenarios. Overall, the day highlighted meaningful advancements in performance and model capabilities while addressing critical bug fixes.

#### 🚀 New Releases
- [v0.5.23](https://github.com/sgl-project/sglang/releases/tag/v0.5.23) v0.5.23

#### ✅ Merged PRs
- [#47261](https://github.com/sgl-project/sglang/pull/47261) [Fix] attention: Keep fused RoPE KV writes off DCP layouts
- [#48051](https://github.com/sgl-project/sglang/pull/48051) [Doc] qwen: Use TRT-LLM MHA for the B300 Qwen3-VL-4B recipe
- [#48055](https://github.com/sgl-project/sglang/pull/48055) Revert "[Perf] kimi-k3: Seed a validated FlashInfer prefill MoE tactic (#47653)"
- [#48054](https://github.com/sgl-project/sglang/pull/48054) Revert "[Feat] diffusion/model: add the BRIA Fibo 2.0 transformer and text conditioning (#46580)"
- [#47929](https://github.com/sgl-project/sglang/pull/47929) [Doc] cookbook: Refresh SemiAnalysis AgentX launches to InferenceX main c5e8b9b3 and revert #47560
- [#47990](https://github.com/sgl-project/sglang/pull/47990) [Refactor] imports: Import names from where they are defined; remove re-export shims
- [#43906](https://github.com/sgl-project/sglang/pull/43906) [Fix] scheduler: Tell a step's middle chunk from the batch's chunked request, not a per-request counter
- [#48032](https://github.com/sgl-project/sglang/pull/48032) [CI] [AMD] nightly-disagg: Run MI355X disagg nightly at 04:00 UTC (12:00 UTC+8)
- [#44148](https://github.com/sgl-project/sglang/pull/44148) [Feat] moe: Allow SiTU on the CuTe DSL NVFP4 MoE (Kimi-K3 W4A16)
- [#47954](https://github.com/sgl-project/sglang/pull/47954) [Refactor] rust-server: Make the advertised listener host an overridable classmethod
- [#45785](https://github.com/sgl-project/sglang/pull/45785) [Fix] scheduler: Publish KV metrics when idle
- [#47900](https://github.com/sgl-project/sglang/pull/47900) [Doc] cookbook: Align navigation groups with model publishers
- [#40825](https://github.com/sgl-project/sglang/pull/40825) [Feat] [NPU] kimi-k3: Support DCP with shared compact communication
- [#44398](https://github.com/sgl-project/sglang/pull/44398) [Test] [NPU] kimi_k3: enable L2 host HiCache for 32p gpqa accuracy test with host hit-rate bench
- [#47476](https://github.com/sgl-project/sglang/pull/47476) [Feat] paged-experts: size the resident experts automatically
- [#47810](https://github.com/sgl-project/sglang/pull/47810) [Feat] deepseek-recipe: Expose convert and encode_conversation on DeepSeekRecipe
- [#47997](https://github.com/sgl-project/sglang/pull/47997) [Doc] blogs: Sync LMSYS SGLang blog cards
- [#43905](https://github.com/sgl-project/sglang/pull/43905) [Fix] scheduler: Abort held decode requests, and read live requests from the lists
- [#43904](https://github.com/sgl-project/sglang/pull/43904) [Refactor] scheduler: Check request ownership once at step launch
- [#47994](https://github.com/sgl-project/sglang/pull/47994) [Fix] moe: Revert the JIT rewrite of `moe_finalize_fuse_shared` (#47784)
- [#47989](https://github.com/sgl-project/sglang/pull/47989) [CI] test: Relax bs=1 perf limits for CI hosts with slower CPUs
- [#47504](https://github.com/sgl-project/sglang/pull/47504) [CI] [AMD] mi355x: Clean up interrupted nightly jobs and reduce runner disk usage
- [#47894](https://github.com/sgl-project/sglang/pull/47894) [Chore] [NVIDIA] deps: Bump sgl-deep-gemm to 0.2.5.post3
- [#47731](https://github.com/sgl-project/sglang/pull/47731) [Perf] imports: Keep light modules off HF patches, model configs, and the scheduler
- [#43903](https://github.com/sgl-project/sglang/pull/43903) [Refactor] scheduler: Hold a launched prefill in one list until its next holder takes it
- [#44197](https://github.com/sgl-project/sglang/pull/44197) [Fix] [AMD] mamba: Import the causal conv1d kernels for Mamba2 layers on ROCm
- [#45443](https://github.com/sgl-project/sglang/pull/45443) [Fix] [AMD] imports: Skip import-time device probes when no GPU is visible
- [#47951](https://github.com/sgl-project/sglang/pull/47951) [Doc] [AMD] cookbook: Qwen3.8-Flash-Next MI355X, add the monokernel command for concurrency 1-8
- [#47926](https://github.com/sgl-project/sglang/pull/47926) [Fix] [AMD] qwen3: Guard dtype alignment when fused decode omits KV
- [#47949](https://github.com/sgl-project/sglang/pull/47949) [Perf] [NVIDIA] dsv41: Split small-batch decode mHC post-combine-norm rows over a CTA cluster
- [#46325](https://github.com/sgl-project/sglang/pull/46325) [Perf] [AMD] deterministic: Use a fixed-order two-stage all-reduce for large inputs

#### 🐛 New Issues
- [#47916](https://github.com/sgl-project/sglang/issues/47916) [Bug] [mamba/hybrid] MambaPool.copy_from gathers all source temporal states into one temporary (n x state_size) - CUDA OOM under parallel admission bursts 💬2
- [#47868](https://github.com/sgl-project/sglang/issues/47868) [Bug] SMG PowerOfTwoPolicy does not track in-flight requests in regular HTTP routing 💬1
- [#48039](https://github.com/sgl-project/sglang/issues/48039) [Bug] 'HashTopK' object has no attribute 'topk_config' during breakable prefill CUDA graph capture
- [#47932](https://github.com/sgl-project/sglang/issues/47932) [Bug] expert_distribution_recorder records all-zero counts under `flashinfer_trtllm` (BYPASSED TopK skips the recorder hook)
- [#47896](https://github.com/sgl-project/sglang/issues/47896) [Bug] Qwen3.5 GatedDeltaNet: finalize_fused_in_proj builds the fused in_proj weight on CPU under --cpu-offload-gb (mat2 is on cpu)
- [#47836](https://github.com/sgl-project/sglang/issues/47836) [CI] test_linear_parallel_groups.py fails on main: replicated rows now skip TP symmetric memory
- [#47834](https://github.com/sgl-project/sglang/issues/47834) [NPU] Investigate fused masked attention for pi0.5 VLA inference

#### 🔒 Closed Issues
- [#36545](https://github.com/sgl-project/sglang/issues/36545) Qwen3.8-Flash-Next QSA crashes with FP8 KV cache (BF16 q vs FP8 k dtype assertion)
- [#37639](https://github.com/sgl-project/sglang/issues/37639) [Bug] Spark2.5 attention output gate hardcodes sigmoid, ignores config gate_attn_act_mode
- [#46476](https://github.com/sgl-project/sglang/issues/46476) [Bug] DSpark draft query width is incorrect on FA3/FA4 when `sample_from_anchor=False`
- [#43204](https://github.com/sgl-project/sglang/issues/43204) `AssertionError: Can not alloc mamba cache` kills the engine when every cached mamba state is locked
- [#37845](https://github.com/sgl-project/sglang/issues/37845) [Bug] Multi-part text content is rejected for system and assistant messages
- [#37548](https://github.com/sgl-project/sglang/issues/37548) [GLM-5.3-Flash] NextN/MTP crashes on the first request: Glm5NextForConditionalGenerationNextN inherits DeepSeek's draft forward, embedding gather goes out of bounds at TP8
- [#37792](https://github.com/sgl-project/sglang/issues/37792) [Feature] Serve Qwen3.8-Flash-Next (176B / 6B-active MoE) at 2.57 bpw on one 24 GB GPU with 32 GB host RAM
- [#37652](https://github.com/sgl-project/sglang/issues/37652) [Bug] `force_nonempty_content`: the answer stays stranded in reasoning_content when there's a single trailing space
- [#37650](https://github.com/sgl-project/sglang/issues/37650) [Bug] `HarmonyParser` never flushes
- [#37711](https://github.com/sgl-project/sglang/issues/37711) [Bug] Ollama endpoints: /api/chat 500s on every request; /api/generate 500s when the client sends no num_predict
- [#31261](https://github.com/sgl-project/sglang/issues/31261) [Feature] Support Deterministic Inference for Qwen3_5ForConditionalGeneration
- [#37852](https://github.com/sgl-project/sglang/issues/37852) [Bug] sglang:kv_cache_memory_usage_gb reports 0 for DeepSeek-V4 pools
- [#37846](https://github.com/sgl-project/sglang/issues/37846) [Bug] Null optional config sections are treated as populated
- [#37772](https://github.com/sgl-project/sglang/issues/37772) [Feature] LoRA adapter support for Dspark speculative decoding draft models
- [#37755](https://github.com/sgl-project/sglang/issues/37755) [Bug] MiMo-V2.5-Pro-W8A8 load weight failed via modelslim
- [#37710](https://github.com/sgl-project/sglang/issues/37710) [Feature] KVCache can support dtype:int
- [#37707](https://github.com/sgl-project/sglang/issues/37707) [Bug] pattern + minLength: xgrammar silently drops the length bound
- [#47613](https://github.com/sgl-project/sglang/issues/47613) [Bug] PP disaggregated decode produces garbage (runs of token 0) when pp_async_batch_depth > pp_size / 2
- [#47836](https://github.com/sgl-project/sglang/issues/47836) [CI] test_linear_parallel_groups.py fails on main: replicated rows now skip TP symmetric memory
- [#47598](https://github.com/sgl-project/sglang/issues/47598) [Bug] rust-server: attention-DP listeners on one CPU mask pin their frontends to the same cores
- [#43864](https://github.com/sgl-project/sglang/issues/43864) [Bug] gemma-4-31B-it: audio request crashes the scheduler; /get_model_info misreports has_audio_understanding: true

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,212 · **Open issues:** 2,582 · **Last push:** 1h ago

On November 3, 2026, several updates were released for llama.cpp, including version b12063, which features enhancements to hidden features via device copies. Version b12061 introduces support for Pocket TTS voices that do not require voice cloning, broadening its accessibility. Among the key merges today, PR #29510 implements a fix for unified key-value storage in multi-sequence contexts, while PR #31429 adds notable improvements for audio streaming. A significant new issue was raised regarding a Vulkan regression affecting performance on the Arc Pro B60, highlighting ongoing concerns with hardware compatibility and optimization.

#### 🚀 New Releases
- [b12063](https://github.com/ggml-org/llama.cpp/releases/tag/b12063) b12063
- [b12061](https://github.com/ggml-org/llama.cpp/releases/tag/b12061) b12061
- [b12060](https://github.com/ggml-org/llama.cpp/releases/tag/b12060) b12060
- [b12059](https://github.com/ggml-org/llama.cpp/releases/tag/b12059) b12059
- [b12058](https://github.com/ggml-org/llama.cpp/releases/tag/b12058) b12058
- [b12057](https://github.com/ggml-org/llama.cpp/releases/tag/b12057) b12057
- [b12054](https://github.com/ggml-org/llama.cpp/releases/tag/b12054) b12054
- [b12053](https://github.com/ggml-org/llama.cpp/releases/tag/b12053) b12053
- [b12052](https://github.com/ggml-org/llama.cpp/releases/tag/b12052) b12052
- [b12050](https://github.com/ggml-org/llama.cpp/releases/tag/b12050) b12050

#### ✅ Merged PRs
- [#29510](https://github.com/ggml-org/llama.cpp/pull/29510) llama + CUDA: flash_attn_ext_rows (fix unified kv for multi-seq)
- [#31506](https://github.com/ggml-org/llama.cpp/pull/31506) dflash: copy hidden features via device copies
- [#25051](https://github.com/ggml-org/llama.cpp/pull/25051) vulkan: add tensor-parallel allreduce function
- [#29730](https://github.com/ggml-org/llama.cpp/pull/29730) context : simplify setters
- [#31306](https://github.com/ggml-org/llama.cpp/pull/31306) feat: add Clover support
- [#30956](https://github.com/ggml-org/llama.cpp/pull/30956) [SYCL] fast ggml_sycl_comm_exchange() - +19% prompt eval -sm tensor t/s on Intel Arc Pro B70s
- [#31546](https://github.com/ggml-org/llama.cpp/pull/31546) docs: small update for s390x build docs
- [#31429](https://github.com/ggml-org/llama.cpp/pull/31429) Pocket tts - support for voices without voice cloning
- [#31326](https://github.com/ggml-org/llama.cpp/pull/31326) ui: don't reload a loading model on select, prefer it in pre-selection
- [#31481](https://github.com/ggml-org/llama.cpp/pull/31481) ggml-zdnn: enable buffer sharing with host
- [#31522](https://github.com/ggml-org/llama.cpp/pull/31522) imatrix : fix --nextn crash
- [#31487](https://github.com/ggml-org/llama.cpp/pull/31487) docs: fix link in README.md for maintainer PRs
- [#31249](https://github.com/ggml-org/llama.cpp/pull/31249) docs: CANN backend supports BF16 on 910B, document GGML_CANN_NO_PINNED
- [#31437](https://github.com/ggml-org/llama.cpp/pull/31437) ggml : use `vm_allocate` instead of `posix_memalign` on all Apple platforms
- [#31441](https://github.com/ggml-org/llama.cpp/pull/31441) opencl: add topk_mask
- [#30146](https://github.com/ggml-org/llama.cpp/pull/30146) vulkan: improve small-n split-K selection on RDNA3 and RDNA4
- [#31266](https://github.com/ggml-org/llama.cpp/pull/31266) vulkan: avoid redundant scans when zeroing skipped rows
- [#31325](https://github.com/ggml-org/llama.cpp/pull/31325) sycl: dmmv code cleanup
- [#31305](https://github.com/ggml-org/llama.cpp/pull/31305) ui: disable model deletion the server would refuse
- [#31312](https://github.com/ggml-org/llama.cpp/pull/31312) ui: align alert dialog styling with other overlay surfaces
- [#31304](https://github.com/ggml-org/llama.cpp/pull/31304) ui: keep queued steering messages in their own conversation
- [#31314](https://github.com/ggml-org/llama.cpp/pull/31314) ui: show interrupted state for tool calls that never returned
- [#31530](https://github.com/ggml-org/llama.cpp/pull/31530) docs : fix Vulkan example command in build.md
- [#31523](https://github.com/ggml-org/llama.cpp/pull/31523) tests : merge identical if branches
- [#24033](https://github.com/ggml-org/llama.cpp/pull/24033) jinja: implement map('filter')
- [#31276](https://github.com/ggml-org/llama.cpp/pull/31276) ggml : fix clang-cl build with AVX512 BF16
- [#31463](https://github.com/ggml-org/llama.cpp/pull/31463) docs : fix Huawei ascend brand
- [#31534](https://github.com/ggml-org/llama.cpp/pull/31534) requirements : minor adjustments for python 3.14 wheels
- [#31414](https://github.com/ggml-org/llama.cpp/pull/31414) cmake : add explicit thread linkage
- [#31422](https://github.com/ggml-org/llama.cpp/pull/31422) webgpu : fix CI by keeping scratch alloc sizes monotonic in batch length

#### 🐛 New Issues
- [#31538](https://github.com/ggml-org/llama.cpp/issues/31538) Misc. bug: `bug-unconfirmed` 💬4
- [#31561](https://github.com/ggml-org/llama.cpp/issues/31561) Feature Request: Support mtmd_audio_stream for Gemma 4 E2B and E4B `enhancement` 💬1
- [#31562](https://github.com/ggml-org/llama.cpp/issues/31562) Research: `research 🔬` 💬1
- [#31557](https://github.com/ggml-org/llama.cpp/issues/31557) Vulkan: Arc Pro B60 regression between 65840ed and 29c720e (tg128 20.1 -> 13.0 t/s, pp512 1117 -> 821 t/s) 💬1
- [#31541](https://github.com/ggml-org/llama.cpp/issues/31541) Compile bug: FreeBSD ggml vulkan compilation issue `bug-unconfirmed` 💬1
- [#31571](https://github.com/ggml-org/llama.cpp/issues/31571) Feature Request: Support SenseNova-Loop (sensenova_loop) architecture
- [#31565](https://github.com/ggml-org/llama.cpp/issues/31565) Misc. bug: llama web UI does NOT list some models (name issue) but /v1/models endpoint does list them `bug-unconfirmed`
- [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) Vulkan: KHR_coopmat gives nondeterministic, wrong results on Intel Arc Pro B70 (BMG G31, Mesa 26.2.5) — encoder/decision model, F16 and Q8_0
- [#31555](https://github.com/ggml-org/llama.cpp/issues/31555) CUDA: on Volta, FA dispatch for DKQ=576 picks a 16-column MMA kernel (no sm_70 code) when gqa_ratio % 16 == 8
- [#31553](https://github.com/ggml-org/llama.cpp/issues/31553) Misc. bug: /v1/messages returns stop_reason "end_turn" when a stop sequence matched `bug-unconfirmed`
- [#31551](https://github.com/ggml-org/llama.cpp/issues/31551) llama : add dense FFN support for Qwen3Next (Qwen3.5/3.8-27B dense) and fix SIGFPE when n_expert_used == 0
- [#31548](https://github.com/ggml-org/llama.cpp/issues/31548) Eval bug: Qwen 2.5 coder doesn't use tools `bug-unconfirmed`
- [#31547](https://github.com/ggml-org/llama.cpp/issues/31547) Eval bug: SYCL: decode hangs in ggml_backend_sycl_synchronize on Xe3 (Panther Lake) unless GGML_SYCL_USE_ASYNC_MEM_OP=0
- [#31531](https://github.com/ggml-org/llama.cpp/issues/31531) Misc. bug: When the “--fit on” parameter is used, one layer is not offloaded to GPU (it remains on the CPU), which causes performance to drop by half. `bug-unconfirmed`

#### 🔒 Closed Issues
- [#25522](https://github.com/ggml-org/llama.cpp/issues/25522) Eval bug: Gemma 4 crashes with MTP
- [#31029](https://github.com/ggml-org/llama.cpp/issues/31029) Misc. bug: SYCL bf conversion instruction not supported! Arrow Lake iGPU
- [#22360](https://github.com/ggml-org/llama.cpp/issues/22360) Bug: Server Slows Down Significantly Over Time, Requires Frequent Reboots
- [#21547](https://github.com/ggml-org/llama.cpp/issues/21547) Eval bug: Gemma4 fails with NotImplemented: map: filter-mapping not implemented
- [#27910](https://github.com/ggml-org/llama.cpp/issues/27910) CUDA inference on Qwen3.8-27B Q6_K causes RTX 5090 display loss and NVIDIA GSP/full-chip reset on Linux
- [#28773](https://github.com/ggml-org/llama.cpp/issues/28773) Feature Request: do not hide the build or version number anymore
- [#28768](https://github.com/ggml-org/llama.cpp/issues/28768) Eval bug: HIP/ROCm on Windows gfx1201 (R9700), batched target scoring changes logits/top-1; Vulkan control is stable
- [#28633](https://github.com/ggml-org/llama.cpp/issues/28633) CUDA: make GGML_CUDA_FA_ALL_QUANTS=ON the default (silent CPU fallback for 4-bit KV)
- [#28527](https://github.com/ggml-org/llama.cpp/issues/28527) Eval bug: Quantized K cache makes deterministic prefix-cache repeats produce different output
- [#29045](https://github.com/ggml-org/llama.cpp/issues/29045) iSWA: seq_pos_max answers from the sliding cache, so a batch without positions lands at 0 after a partial seq_rm and leaks base-cache cells
- [#31163](https://github.com/ggml-org/llama.cpp/issues/31163) Eval bug: Vulkan: count_experts.comp zero_skipped_rows() loops over every id in every thread
- [#27134](https://github.com/ggml-org/llama.cpp/issues/27134) Misc. bug: regression — assistant reply misfiled into reasoning_content (content empty) for chat templates whose generation prompt ends with a closing </think> (works on fe2adf0/b10252, broken on b10360)
- [#29049](https://github.com/ggml-org/llama.cpp/issues/29049) Feature Request: Include preferred citation in the readme
- [#29098](https://github.com/ggml-org/llama.cpp/issues/29098) Misc. bug: Two llama-server processes on the same RX 6800 cause 100% GPU when HIP graphs enabled
- [#31445](https://github.com/ggml-org/llama.cpp/issues/31445) Compile bug: Vulkan backend fails to build since #27512 (`signbit`/`isnan`/`isinf` undeclared in `ggml_fp32_to_f8_e4m3`), GCC 16.2 and clang 22 with libstdc++ 16
- [#31411](https://github.com/ggml-org/llama.cpp/issues/31411) Feature Request: add a compiled version that works on google colab T4 instance
- [#31346](https://github.com/ggml-org/llama.cpp/issues/31346) Misc. bug: test-llama-context crashing on deepseek41-moe.gguf
- [#31562](https://github.com/ggml-org/llama.cpp/issues/31562) Research:
- [#29081](https://github.com/ggml-org/llama.cpp/issues/29081) Eval bug: [OpenCL] MUL_MAT produces wrong results on Adreno 730 (x8_gqa_r4_img)
- [#29090](https://github.com/ggml-org/llama.cpp/issues/29090) Eval bug: init_batch: failed to prepare attention ubatches with --kv-unified on serveur
- [#31462](https://github.com/ggml-org/llama.cpp/issues/31462) Feature Request: Use Huawei Ascend in the NPU support section
- [#31280](https://github.com/ggml-org/llama.cpp/issues/31280) Compile bug: Errors on glibc < 2.34

### Ollama (`ollama/ollama`)

**Stars:** 185,731 · **Open issues:** 4,551 · **Last push:** 2h ago

On November 3, 2026, Ollama released version v0.40.14, which addressed several issues including a deadlock workaround in the build process, improved response content preservation for OpenAI, and enhanced sorting for top-k rows in ML tasks. The update also made disconnection failures with ChatGPT retryable, which should improve user experience during sessions. Among the merged pull requests, notable features included the decoding of cloud web search responses and a check on ChatGPT routing before configuration. A significant new issue reported by a user pertains to difficulties accessing the paid tier for cloud models, highlighting potential access problems for subscribers.

#### 🚀 New Releases
- [v0.40.14-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.14-rc0) v0.40.14

#### ✅ Merged PRs
- [#19476](https://github.com/ollama/ollama/pull/19476) server: decode cloud web search responses
- [#19470](https://github.com/ollama/ollama/pull/19470) launch: check ChatGPT routing before configuring

#### 🐛 New Issues
- [#19461](https://github.com/ollama/ollama/issues/19461) I subscribed to Ollama's cloud/paid tier to access cloud models via API, but I am unable to access the service that I paid for. `cloud` 💬3
- [#19482](https://github.com/ollama/ollama/issues/19482) Ollama GitHub Issues `bug` 💬1
- [#19473](https://github.com/ollama/ollama/issues/19473) model doesnt get recognized. `bug` 💬1
- [#19465](https://github.com/ollama/ollama/issues/19465) docs: document `ollama cp` and `ollama push` in CLI reference 💬1
- [#19483](https://github.com/ollama/ollama/issues/19483) Ollama GitHub Issues `bug`
- [#19479](https://github.com/ollama/ollama/issues/19479) OpenAI-compat /v1: image in tool result → misleading HTTP 400 "Unexpected tool call id … in tool results" (ids pair correctly; minimal repro)
- [#19474](https://github.com/ollama/ollama/issues/19474) Vulkan support `bug`
- [#19472](https://github.com/ollama/ollama/issues/19472) macOS app offers "Restart to update" for the installed version (0.40.13) and requests admin rights to change /Applications/Ollama.app ownership `bug`
- [#19464](https://github.com/ollama/ollama/issues/19464) Add support for Unix domain sockets (IPC) alongside TCP/IP `feature request`
- [#19463](https://github.com/ollama/ollama/issues/19463) VRAM prediction over-counts KV cache 4-8x for hybrid models (recurrent/SSM blocks, OLLAMA_KV_CACHE_TYPE ignored), evicting runners loaded with keep_alive=-1

#### 🔒 Closed Issues
- [#18785](https://github.com/ollama/ollama/issues/18785) lfm2:24b: "python" token without a leading space is decoded as an empty string (text silently missing from output)
- [#19459](https://github.com/ollama/ollama/issues/19459) Qwen3.8-27B hybrid-attention GGUFs fail to load: qwen3next: layer 64 missing attn_qkv/attn_gate projections
- [#19482](https://github.com/ollama/ollama/issues/19482) Ollama GitHub Issues
- [#19465](https://github.com/ollama/ollama/issues/19465) docs: document `ollama cp` and `ollama push` in CLI reference

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,590 · **Open issues:** 5,575 · **Last push:** <1h ago

On November 3, 2026, there were no new releases for LiteLLM, but significant progress was made with several merged pull requests. Notable changes included a fix for authorization and decoding comparison response IDs in PR #49402, and a refactor to integrate i18n support for admin and settings text (PR #49546). Additional updates addressed issues with OpenAI's allowed tools in chat completions (PR #49043) and improvements to integration tests regarding release qualification timing and labels (PR #49737). A particularly concerning new issue was identified (#49736), where the streamed Responses API incorrectly maps a flex_unavailable error to a 500 InternalServerError instead of the expected 429 status.

#### ✅ Merged PRs
- [#49402](https://github.com/BerriAI/litellm/pull/49402) fix(responses)!: authorize and decode comparison response IDs
- [#49707](https://github.com/BerriAI/litellm/pull/49707) fix(cost-map): give the bare gpt-4o, gpt-4o-mini, gpt-4.1 and gpt-4.1-mini aliases their 2027-01-14 shutdown date
- [#49043](https://github.com/BerriAI/litellm/pull/49043) fix(tool_choice): accept OpenAI allowed_tools on chat completions and flatten it for the Responses bridge
- [#49770](https://github.com/BerriAI/litellm/pull/49770) test(integration): fix rc109 ledger transaction expiry
- [#49546](https://github.com/BerriAI/litellm/pull/49546) refactor(ui): move admin and settings text onto i18n
- [#49723](https://github.com/BerriAI/litellm/pull/49723) fix(proxy): backport rc/1.108.0 integration repairs
- [#49737](https://github.com/BerriAI/litellm/pull/49737) test(integration): repair release qualification timing and labels
- [#49703](https://github.com/BerriAI/litellm/pull/49703) fix(bedrock): send native structured output for json_schema on Claude models that cannot force a tool
- [#49689](https://github.com/BerriAI/litellm/pull/49689) feat(anthropic): pick the beta allowlist row per deployment and surface input_transformations
- [#36963](https://github.com/BerriAI/litellm/pull/36963) fix(vertex_ai)!: map Anthropic context overflow errors
- [#48466](https://github.com/BerriAI/litellm/pull/48466) fix(anthropic_endpoints)!: return Anthropic error envelopes on /v1/messages auth failures
- [#49386](https://github.com/BerriAI/litellm/pull/49386) test(e2e): add Codex file edit, long session and auto-compaction rows through LiteLLM
- [#49374](https://github.com/BerriAI/litellm/pull/49374) test(e2e): drive the Codex CLI through LiteLLM, command round trip
- [#49389](https://github.com/BerriAI/litellm/pull/49389) test(e2e): Codex auto-compaction through LiteLLM
- [#49754](https://github.com/BerriAI/litellm/pull/49754) test(integration): finish rc/1.109.0 qualification repairs
- [#49697](https://github.com/BerriAI/litellm/pull/49697) fix(gemini): resend once with the placeholder signature when the other backend rejects a replayed thought signature
- [#49752](https://github.com/BerriAI/litellm/pull/49752) test(integration): look up streamed Responses spend rows by the client-facing id
- [#49420](https://github.com/BerriAI/litellm/pull/49420) fix(managed_files): keep the upload the managed id encodes when two target models share a deployment
- [#49727](https://github.com/BerriAI/litellm/pull/49727) fix: backport metadata and metric repairs to rc/1.109.0
- [#49497](https://github.com/BerriAI/litellm/pull/49497) fix(mcp): answer bare OPTIONS on MCP routes without running LiteLLM auth
- [#49746](https://github.com/BerriAI/litellm/pull/49746) test(integration): defer empty-count Gemini cases on rc/1.109.0
- [#49684](https://github.com/BerriAI/litellm/pull/49684) fix(proxy): log each endpoint's own call type on failed audio, moderation, image, and rerank spend rows
- [#49530](https://github.com/BerriAI/litellm/pull/49530) refactor(ui): move agents and knowledge text onto i18n
- [#49524](https://github.com/BerriAI/litellm/pull/49524) refactor(ui): move guardrails text onto i18n
- [#49473](https://github.com/BerriAI/litellm/pull/49473) refactor(ui): move MCP text onto i18n
- [#49735](https://github.com/BerriAI/litellm/pull/49735) fix(proxy): preserve DB settings during config reload
- [#49718](https://github.com/BerriAI/litellm/pull/49718) fix(ui): make the off state of switches visible in light theme

#### 🐛 New Issues
- [#49736](https://github.com/BerriAI/litellm/issues/49736) [Bug]: streamed Responses API flex_unavailable error maps to 500 InternalServerError instead of 429 `llm translation` 💬2
- [#49675](https://github.com/BerriAI/litellm/issues/49675) [Bug]: v3 rate limiter: TPM counter outlives its window under upstream 429s (key/team rejected below tpm_limit) `bug` `llm translation` 💬2
- [#49622](https://github.com/BerriAI/litellm/issues/49622) [Bug]: A2A push URL check runs on tasks/pushNotificationConfig/set but not on a push config inside message/send 💬2
- [#49617](https://github.com/BerriAI/litellm/issues/49617) [Bug]: langfuse_otel omits SystemOne answers and token totals `bug` 💬2
- [#49680](https://github.com/BerriAI/litellm/issues/49680) [Bug]: prisma_migration --skip_server_startup crashes with ImportError when psycopg cannot load libpq (unguarded import in ensure_request_log_indexes) 💬1
- [#49673](https://github.com/BerriAI/litellm/issues/49673) [Bug]: `log_raw_request_response: true` freezes the proxy on large requests, liveness probe restarts the pod `bug` 💬1
- [#49651](https://github.com/BerriAI/litellm/issues/49651) [Bug]: websearch_interception drops the first model call's SpendLogs row for non-streaming /v1/messages (request_id collision) `llm translation` 💬1
- [#49645](https://github.com/BerriAI/litellm/issues/49645) [Feature]: Vertex AI Claude partner models: serialize messages after system/tools in the request body `llm translation` 💬1
- [#49649](https://github.com/BerriAI/litellm/issues/49649) [Feature]: BYOK authorize should reuse a stored credential instead of asking for the key again 💬1
- [#49775](https://github.com/BerriAI/litellm/issues/49775) [Bug]: HTTPS PDF image_url is sent to Anthropic as an image instead of a document `bug` `llm translation`
- [#49774](https://github.com/BerriAI/litellm/issues/49774) [Bug]: Unsupported Bedrock CountTokens calls cannot be skipped per deployment `bug` `llm translation`
- [#49767](https://github.com/BerriAI/litellm/issues/49767) [Bug]: Interactions API on vertex_ai deployments: by-id GET/DELETE/cancel hard-coded to gemini, Vertex cancel uses `:cancel`, Deep Research cost-map and poll-timeout gaps `llm translation`
- [#49751](https://github.com/BerriAI/litellm/issues/49751) [Bug]: Router retries and Retry-After sleeps ignore the caller's request timeout (x-litellm-timeout / x-stainless-timeout) `llm translation`
- [#49730](https://github.com/BerriAI/litellm/issues/49730) [Docs]: budget_fallbacks page omits that its trigger (model_max_budget) is Enterprise-only — feature is inert on OSS
- [#49711](https://github.com/BerriAI/litellm/issues/49711) After an SSE keepalive opens the stream, an Anthropic client is never told the upstream failed `llm translation`
- [#49698](https://github.com/BerriAI/litellm/issues/49698) [Bug]: Terraform litellm_organization_member and litellm_organization_member_add never read members back, so out-of-band changes are never detected
- [#49688](https://github.com/BerriAI/litellm/issues/49688) [Bug]: Question: fix status for CVE-2026-93355 and CVE-2026-108575 (Snyk reports no fixed version) `bug`
- [#49670](https://github.com/BerriAI/litellm/issues/49670) [Bug]: Hugging Face rerank without api_base still calls api-inference.huggingface.co, which no longer resolves
- [#49669](https://github.com/BerriAI/litellm/issues/49669) [Bug]: Terraform provider sends max_budget_in_team as 0 when it is not set
- [#49668](https://github.com/BerriAI/litellm/issues/49668) [Docs]: Add a silent_model comparison recipe with Langfuse and paired JSON output
- [#49653](https://github.com/BerriAI/litellm/issues/49653) [Feature]: Per-server credential template for BYOK MCP servers (e.g. Basic `email:apikey`)
- [#49652](https://github.com/BerriAI/litellm/issues/49652) [Feature]: Skip the "Finish connecting" click for a gateway DCR flow scoped to a single MCP server
- [#49647](https://github.com/BerriAI/litellm/issues/49647) [Feature]: BYOK authorize page should send the user to login before asking for the API key
- [#49644](https://github.com/BerriAI/litellm/issues/49644) [Feature]: How should MCP clients complete BYOK? Access token unusable, no BYOK challenge over streamable HTTP
- [#49643](https://github.com/BerriAI/litellm/issues/49643) [Feature]: Tolerate a lost refresh-token response in the MCP gateway OAuth flow (grace window / reuse detection)
- [#49640](https://github.com/BerriAI/litellm/issues/49640) [Bug]: BYOK MCP OAuth token exchange fails with invalid_grant on multi-worker proxies
- [#49639](https://github.com/BerriAI/litellm/issues/49639) [Bug]: MCP gateway OAuth endpoints return error responses without logging why
- [#49638](https://github.com/BerriAI/litellm/issues/49638) [Bug]: Presidio pre_call masking degrades to unnumbered tokens when stream=true, so output_parse_pii can never restore (/chat/completions) `llm translation`
- [#49630](https://github.com/BerriAI/litellm/issues/49630) [Feature]: Let MCP tool listings read policy through the cache instead of forcing a fresh database read `claude code`
- [#49629](https://github.com/BerriAI/litellm/issues/49629) [Bug]: MCP catalog reloads every server row on every MCP request until an MCP server is first edited
- [#49627](https://github.com/BerriAI/litellm/issues/49627) [Feature]: Reuse LLM short-reply guidance in Jev's default instructions
- [#49623](https://github.com/BerriAI/litellm/issues/49623) [Feature]: A2A push notifications through the proxy (proxy-owned webhook receiver)
- [#49620](https://github.com/BerriAI/litellm/issues/49620) [Feature]: Register custom routing strategies on the proxy and select them in Router Settings and Routing Groups `llm translation`

#### 🔒 Closed Issues
- [#49179](https://github.com/BerriAI/litellm/issues/49179) [Bug]: /key/update during an in-flight request drops that request's cost from the key's budget window spend
- [#22753](https://github.com/BerriAI/litellm/issues/22753) [Bug]: `llm_requests_hanging` alerts ignore digest mode
- [#44923](https://github.com/BerriAI/litellm/issues/44923) [Bug]: Responses streaming bridge omits serialized sequence_number fields and hardcodes output_item.done to 1
- [#33670](https://github.com/BerriAI/litellm/issues/33670) [Feature]: Missing model, one model with multiple keys
- [#34471](https://github.com/BerriAI/litellm/issues/34471) [Bug]: safe_deep_copy and safe_dumps crash with 'dictionary changed size during iteration' under concurrent mutation
- [#34772](https://github.com/BerriAI/litellm/issues/34772) [Feature]: Add `litellm token-count` CLI subcommand for offline token counting
- [#32895](https://github.com/BerriAI/litellm/issues/32895) Support max_retries for non-OpenAI/Azure providers
- [#34753](https://github.com/BerriAI/litellm/issues/34753) [Bug]: metadata.error_information.error_message is too big when contain files base64
- [#34766](https://github.com/BerriAI/litellm/issues/34766) [Feature]: Auto Router v2: derive a session key from request content when `session_id` is absent
- [#34771](https://github.com/BerriAI/litellm/issues/34771) [Bug]: CP OAuth DCR relay returns LiteLLM's own /callback as the client's redirect_uri, causing a self-redirect loop. Reopen for #33699
- [#34877](https://github.com/BerriAI/litellm/issues/34877) [Feature]: Add `litellm config-validate` CLI subcommand for offline config-file validation
- [#34910](https://github.com/BerriAI/litellm/issues/34910) [Feature]: Support an "exclude" list for MCP servers, in addition to `x-mcp-servers`' include-only allowlist
- [#34916](https://github.com/BerriAI/litellm/issues/34916) Inconsistency in custom favicon: favicon set via UI Theme Customization is not applied to the browser tab
- [#34932](https://github.com/BerriAI/litellm/issues/34932) Azure gpt-5: per-deployment reasoning_effort capability overrides are ignored when base_model is set, forcing temperature 400s
- [#38907](https://github.com/BerriAI/litellm/issues/38907) [Bug] Proxy strips delta.reasoning_items from streaming chunks on the fast-serialization path
- [#42717](https://github.com/BerriAI/litellm/issues/42717) [Bug]: Bedrock Claude Opus 5.5 returns plain text for response_format json_schema because json_tool_call can't be forced
- [#47948](https://github.com/BerriAI/litellm/issues/47948) [Bug]: /v1/messages still answers auth, model-access and malformed-JSON errors in the OpenAI error shape
- [#34767](https://github.com/BerriAI/litellm/issues/34767) [Bug]: /v1/responses with stream=true + file_search (emulated, Anthropic) crashes with "'async for' requires an object with __aiter__ method, got ResponsesAPIResponse"
- [#34768](https://github.com/BerriAI/litellm/issues/34768) [Bug]: Emulated file_search on /v1/responses returns results: null for a registered s3_vectors store, while /v1/vector_stores/{id}/search on the same store returns correct chunks
- [#34777](https://github.com/BerriAI/litellm/issues/34777) Cursor bridge endpoint (/cursor/chat/completions) doesn't translate image_url content blocks to Responses API format
- [#34778](https://github.com/BerriAI/litellm/issues/34778) [Bug]: git-subdir path validation rejects dot-prefixed segments (e.g. .claude/skills/...)
- [#34846](https://github.com/BerriAI/litellm/issues/34846) [Feature]: Option to override client-supplied 'user' field with authenticated user_id
- [#34858](https://github.com/BerriAI/litellm/issues/34858) [Feature]: Add Modelsell as an OpenAI-compatible provider
- [#34922](https://github.com/BerriAI/litellm/issues/34922) [Bug]: Noma v2 guardrail ignores streaming_end_of_stream_only and streaming_sampling_rate
- [#34926](https://github.com/BerriAI/litellm/issues/34926) [Bug]: /v1/responses silently drops explicitly allowed client_metadata before native OpenAI upstream request
- [#34978](https://github.com/BerriAI/litellm/issues/34978) [Bug]: Chat-to-Responses bridge always wraps tool output in a list, breaking strict Responses API backends for plain-string tool results
- [#47945](https://github.com/BerriAI/litellm/issues/47945) [Feature]: hosted_vllm Chat Completions: keep vLLM's `stop_reason` and `token_ids` on the choice, as /v1/completions and streamed Chat already do
- [#44913](https://github.com/BerriAI/litellm/issues/44913) [Bug]: Constructing a Router with shared fallbacks changes an existing Router's default fallback
- [#49042](https://github.com/BerriAI/litellm/issues/49042) [Bug]: Responses API rejects a LiteLLM response id in prompt_cache_options.comparison_response_id

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,984 · **Open issues:** 452 · **Last push:** <1h ago

On November 3, 2026, Unsloth did not release any new versions, but significant activity occurred in merged pull requests, including enhancements to the Studio. Key updates featured improvements for the OpenAI API (#16153), the addition of LFM3-Audio-2B functionalities for text and speech interactions (#16243), and draft MLX tool functionalities along with video and grammar responses (#16441). Notably, a new bug issue (#16484) was reported regarding the broken auto unload feature when idle, drawing developers' attention to address functionality concerns. The ongoing development and user feedback reflect an active engagement with improving the platform’s performance and usability.

#### ✅ Merged PRs
- [#16153](https://github.com/unslothai/unsloth/pull/16153) Studio OpenAI API: refuse unsupported weights in selected JSONL chats
- [#16191](https://github.com/unslothai/unsloth/pull/16191) Decode graphs: preserve eager cache growth and reject stale replay
- [#16243](https://github.com/unslothai/unsloth/pull/16243) Studio: chat with LFM3-Audio-2B (text and speech in, text out)
- [#16156](https://github.com/unslothai/unsloth/pull/16156) FP8: strip activation_scale sources when matching the 16-bit save conversion
- [#16382](https://github.com/unslothai/unsloth/pull/16382) Studio: emit only the woff2 KaTeX fonts
- [#16133](https://github.com/unslothai/unsloth/pull/16133) Studio: keep style keywords inside quoted state labels in the Mermaid guard
- [#16151](https://github.com/unslothai/unsloth/pull/16151) Studio fine-tuning queue: do not start jobs cancelled during the batching probe
- [#16150](https://github.com/unslothai/unsloth/pull/16150) Studio sd.cpp install: treat ELF symbol-version mismatches as loader refusals
- [#16441](https://github.com/unslothai/unsloth/pull/16441) feat(studio): draft MLX tool, video, grammar, KV and LoRA replies
- [#16242](https://github.com/unslothai/unsloth/pull/16242) Studio: LFM3-Omni audio input, export, LoRA defaults and Stop for custom-code generate
- [#16104](https://github.com/unslothai/unsloth/pull/16104) Saving: write the source tokenizer_class instead of TokenizersBackend
- [#15757](https://github.com/unslothai/unsloth/pull/15757) Loader: fetch each config probe once per from_pretrained call
- [#16269](https://github.com/unslothai/unsloth/pull/16269) Studio diffusion: turn off coordinate descent where Max pins reduction configs
- [#16389](https://github.com/unslothai/unsloth/pull/16389) Studio: start the credential bootstrap with the entry instead of after the route checks
- [#15740](https://github.com/unslothai/unsloth/pull/15740) Studio: build the code highlighter from shiki/core so the unused WASM engine leaves the bundle
- [#16098](https://github.com/unslothai/unsloth/pull/16098) Studio: name FFmpeg when a video GGUF can't decode, and shrink clips with the ffmpeg llama-server uses
- [#15739](https://github.com/unslothai/unsloth/pull/15739) Desktop: overlap owner liveness probes and skip redundant preflight HTTP
- [#15695](https://github.com/unslothai/unsloth/pull/15695) Cleanup: remove six private helpers and constants in core that nothing calls
- [#16102](https://github.com/unslothai/unsloth/pull/16102) Saving: drop the training truncation and padding from saved tokenizers
- [#16404](https://github.com/unslothai/unsloth/pull/16404) Studio: recognise a worker VRAM release that finished before the first settle poll
- [#16350](https://github.com/unslothai/unsloth/pull/16350) Studio: wake the dispatcher on stop instead of waiting out its queue poll
- [#16250](https://github.com/unslothai/unsloth/pull/16250) Studio Windows XPU Triton: verify the swap and torch's XPU triton payload, repair a broken triton, skip pip backups
- [#16344](https://github.com/unslothai/unsloth/pull/16344) Studio: wait on worker exit instead of fixed sleeps when switching models
- [#16214](https://github.com/unslothai/unsloth/pull/16214) Studio: keep an anonymous Hub token anonymous in the hosted bf16 VAE path
- [#16231](https://github.com/unslothai/unsloth/pull/16231) Studio: do not subtract live segment graph outputs twice from reusable cache
- [#15878](https://github.com/unslothai/unsloth/pull/15878) Studio: show the voice description on Clone for Breeze TTS 2 and VoxCPM2
- [#16403](https://github.com/unslothai/unsloth/pull/16403) Studio video: reuse bounded conditioning image decodes
- [#16272](https://github.com/unslothai/unsloth/pull/16272) Block compile: say when packed rows run each block uncompiled
- [#16220](https://github.com/unslothai/unsloth/pull/16220) Fused LM head: accept TRL 1.17's score_ids kernel argument
- [#16228](https://github.com/unslothai/unsloth/pull/16228) Concretize RMSNorm width before the narrow-row self-check
- [#16215](https://github.com/unslothai/unsloth/pull/16215) Studio: keep a nested active HF hub clearable and listed
- [#16394](https://github.com/unslothai/unsloth/pull/16394) Studio: keep feature indexes and the markdown renderer out of the startup bundle
- [#16124](https://github.com/unslothai/unsloth/pull/16124) Studio: train audio VLMs on the images in a mixed audio + image dataset
- [#16377](https://github.com/unslothai/unsloth/pull/16377) Studio: apply the mapped chat template once per loaded tokenizer
- [#16223](https://github.com/unslothai/unsloth/pull/16223) Studio: restore public OpenAPI descriptions on four routes and schemas
- [#16235](https://github.com/unslothai/unsloth/pull/16235) Skip pinned staging for native int8 host quantisation on integrated GPUs
- [#16121](https://github.com/unslothai/unsloth/pull/16121) Studio: /v1/chat/completions puts the whole answer in reasoning_content for templates with a {% generation %} tag
- [#16216](https://github.com/unslothai/unsloth/pull/16216) Studio: match diffusion training access facts to the no-token mirror fetch
- [#16099](https://github.com/unslothai/unsloth/pull/16099) Studio: keep a text selection in Settings › Logs across polls so part of the log can be copied
- [#16454](https://github.com/unslothai/unsloth/pull/16454) Studio: keep the chat background, interface scale and Browser preferences with the account
- [#16298](https://github.com/unslothai/unsloth/pull/16298) Studio: paste links, tables, lists and formatting into the composer as Markdown
- [#16466](https://github.com/unslothai/unsloth/pull/16466) Recognize shared encoder assets in Model Hub inventory
- [#16465](https://github.com/unslothai/unsloth/pull/16465) Fix pipeline denoiser downloads labeled as required assets
- [#16453](https://github.com/unslothai/unsloth/pull/16453) Studio: report the measured VRAM shortfall instead of blaming the previous worker
- [#16464](https://github.com/unslothai/unsloth/pull/16464) studiobench parity: treat every data-*-id attribute as an instance id
- [#15284](https://github.com/unslothai/unsloth/pull/15284) Studio: honour Voice Settings Load into on cold STT API loads (#15280)
- [#16435](https://github.com/unslothai/unsloth/pull/16435) fix(api): preserve refusal text in collected connection replies
- [#16463](https://github.com/unslothai/unsloth/pull/16463) Fix OpenRouter MAI-Voice speech playback
- [#16459](https://github.com/unslothai/unsloth/pull/16459) Studio: add a link preview setting
- [#16452](https://github.com/unslothai/unsloth/pull/16452) Studio: translate the live generation figures, the reply timing tooltip and the weight placement row
- [#16455](https://github.com/unslothai/unsloth/pull/16455) Studio: Composer appearance section, composer outline on by default
- [#16451](https://github.com/unslothai/unsloth/pull/16451) Studio: time a continued reply as the whole answer, not just its last pass
- [#16449](https://github.com/unslothai/unsloth/pull/16449) Studio: keep the live generation line from moving the branch picker, and update it during short replies
- [#16450](https://github.com/unslothai/unsloth/pull/16450) Studio: estimate the prompt's time left from how the cost per token grows, not the rate so far
- [#16433](https://github.com/unslothai/unsloth/pull/16433) Studio: list every Gemini chat model (follow nextPageToken, allow new families)
- [#16458](https://github.com/unslothai/unsloth/pull/16458) Preserve external chat import recovery across checkpoint failures
- [#16447](https://github.com/unslothai/unsloth/pull/16447) Backend CI: run the context parallel compose gloo suite in its own shard
- [#16448](https://github.com/unslothai/unsloth/pull/16448) Studio: add a Time format setting and drop the redundant desktop update note
- [#16457](https://github.com/unslothai/unsloth/pull/16457) PP env GA test: compare the trained adapter at 5e-5
- [#16300](https://github.com/unslothai/unsloth/pull/16300) Studio: turn navigator at the chat's left edge, building on #11668
- [#16444](https://github.com/unslothai/unsloth/pull/16444) Studio: read lookup tables lazily when needed to enable the MoE cache

#### 🐛 New Issues
- [#16486](https://github.com/unslothai/unsloth/issues/16486) [Feature] Global Token Usage Guardrail `feature request` 💬2
- [#16484](https://github.com/unslothai/unsloth/issues/16484) [Bug] Auto unload on idle broken `feature request` `bug` 💬2
- [#16485](https://github.com/unslothai/unsloth/issues/16485) [Feature] Upload files from unsloth studio library `feature request`
- [#16472](https://github.com/unslothai/unsloth/issues/16472) [Bug] (working fix included!) TTS reads emoji descriptions aloud instead of skipping emojis `feature request` `bug`
- [#16467](https://github.com/unslothai/unsloth/issues/16467) [Bug] The "thinking" display is missing [0.1.913-beta] `feature request` `bug` 💬1
- [#16512](https://github.com/unslothai/unsloth/issues/16512) [Feature] Layer offloading `feature request`
- [#16479](https://github.com/unslothai/unsloth/issues/16479) Studio: loading a model cancels running chats silently, while unloading refuses without force_cancel_active
- [#16494](https://github.com/unslothai/unsloth/issues/16494) [Studio] Custom llama-server args reject `-ngl all` and `-ngl auto`, which llama.cpp accepts

#### 🔒 Closed Issues
- [#15588](https://github.com/unslothai/unsloth/issues/15588) [Feature] Support LFM3-1.7B
- [#8912](https://github.com/unslothai/unsloth/issues/8912) [Feature] Support Native RTL / BiDi Text Rendering in Unsloth Desktop Chat UI
- [#14989](https://github.com/unslothai/unsloth/issues/14989) PC Control
- [#15117](https://github.com/unslothai/unsloth/issues/15117) Closing the Unsloth icon in the menu bar
- [#15285](https://github.com/unslothai/unsloth/issues/15285) [Bug] DeepSeek V4.1 Flash GGUF template rejects ordinary discussion of the image marker, breaking conversation history
- [#16294](https://github.com/unslothai/unsloth/issues/16294) [Bug] Studio video: MiniMax-H3 on Auto attention crashes with "No available kernel" on Windows (torch without flash attention)
- [#15932](https://github.com/unslothai/unsloth/issues/15932) [Bug] Previous working model doesnt load now!
- [#15281](https://github.com/unslothai/unsloth/issues/15281) [Feature] Support 24-hour time format
- [#15412](https://github.com/unslothai/unsloth/issues/15412) [Bug] Unable to load *any* deepseek 4.1 1017 uncensored from the "model hub"
- [#16432](https://github.com/unslothai/unsloth/issues/16432) [Bug] gemini connection only loads first page of 20 models
- [#16427](https://github.com/unslothai/unsloth/issues/16427) Minor UI: “MoE Layers on CPU” remains available when “GPU Layers” is set to 0
- [#8834](https://github.com/unslothai/unsloth/issues/8834) [Feature] Proper Embedded File Download Section in Chat
- [#16436](https://github.com/unslothai/unsloth/issues/16436) Studio: loading another model during a generation fails with a misleading memory-not-released error
- [#16467](https://github.com/unslothai/unsloth/issues/16467) [Bug] The "thinking" display is missing [0.1.913-beta]
- [#15280](https://github.com/unslothai/unsloth/issues/15280) [Bug] "Load into" setting ignored when STT model is loaded from API
- [#16434](https://github.com/unslothai/unsloth/issues/16434) [Bug] Nonstream saved-connection replies discard refusal text
- [#14381](https://github.com/unslothai/unsloth/issues/14381) DFlash2 crashes on first prompt with Qwen3.8-Flash-Next in Unsloth build
- [#10767](https://github.com/unslothai/unsloth/issues/10767) [Feature] Inject Message During Generation
- [#16309](https://github.com/unslothai/unsloth/issues/16309) [Feature] Some Settings (Appearance / System / Security / Browser) are stored only in browser `localStorage` and silently reset per origin/browser
- [#16443](https://github.com/unslothai/unsloth/issues/16443) [Bug] (fix included!) External text-to-speech fails when using OpenRouter / expects wav instead of mp3/pcm.
- [#16399](https://github.com/unslothai/unsloth/issues/16399) I’d like a setting to turn link previews on/off.
- [#16419](https://github.com/unslothai/unsloth/issues/16419) [Bug] Failed external-chat imports can skip newly appended turns

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,176 · **Open issues:** 398 · **Last push:** 2h ago

On November 3, 2026, AIBrix had a relatively routine day with no new releases. Significant updates included the merging of pull request #3381, which fixes a bug by forwarding mock fault headers to gateway-initiated PD requests, and #3388, which introduces an output schema to the OpenAI frontend. Fresh issues surfaced, notably #3392, which highlights a bug where ModelClaim remains in an "Activating" state after an EngineCore out-of-memory error during sleep, drawing attention from five commenters. Additionally, #3393 proposed a feature to respect priority when making room for new claims, reflecting ongoing enhancements to resource management.

#### ✅ Merged PRs
- [#3381](https://github.com/vllm-project/aibrix/pull/3381) [Bug] Forward mock fault headers to gateway-initiated PD requests
- [#3388](https://github.com/vllm-project/aibrix/pull/3388) feat(openai-frontend): add output schema

#### 🐛 New Issues
- [#3392](https://github.com/vllm-project/aibrix/issues/3392) [Bug] ModelClaim remains Activating after EngineCore OOM during sleep `kind/bug` `triage/accepted` `area/runtime` 💬5
- [#3393](https://github.com/vllm-project/aibrix/issues/3393) [Feature][ModelClaim] Respect priority when making room for a new claim `triage/accepted` `kind/feature` `area/orchestration` 💬4
- [#3390](https://github.com/vllm-project/aibrix/issues/3390) [RFC]: Gateway-side pod ejection with pluggable reasons (failure rate, saturation, restart churn) `area/gateway` `kind/feature` 💬2
- [#3386](https://github.com/vllm-project/aibrix/issues/3386) [Bug] KPA and APA round scale-rate limits past the configured rate, so 50 pods at 1.1 can scale to 56 `kind/bug` `triage/accepted` 💬2

#### 🔒 Closed Issues
- [#3323](https://github.com/vllm-project/aibrix/issues/3323) prefix-cache-preble charges the full prefill cost of a shared prefix to every pod that holds it
- [#3345](https://github.com/vllm-project/aibrix/issues/3345) [Bug] HPA percent policies truncate scale rates, dropping a point or reaching zero
- [#3298](https://github.com/vllm-project/aibrix/issues/3298) [Bug] leastThroughput adapter scheduler looks up pod-scoped metrics per model, so it never schedules
- [#3223](https://github.com/vllm-project/aibrix/issues/3223) [Bug] Prefill overload filter can never skip a hot pod with 5 or fewer prefill pods
- [#3217](https://github.com/vllm-project/aibrix/issues/3217) KV cache Redis meta service raises AttributeError on a missing cluster meta key, which kills the placement refresh thread
- [#3260](https://github.com/vllm-project/aibrix/issues/3260) Batch job resumed at request N re-sends earlier requests when the input has a blank line before N
- [#3262](https://github.com/vllm-project/aibrix/issues/3262) KV cache manager metrics multiply get() results by the block size (hit rate 1600% with 16-token blocks)
- [#3268](https://github.com/vllm-project/aibrix/issues/3268) S3 storage stores only the tail of a large upload when a multipart part times out, and reports success
- [#3356](https://github.com/vllm-project/aibrix/issues/3356) pd` routing: prefill engine 4xx/5xx are masked as `503 error on selecting target pod`

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,385 · **Open issues:** 822 · **Last push:** <1h ago

On November 3, 2026, there were no new releases for Semantic Router, but several important pull requests were merged, including the addition of built-in recipes from Mixture-of-Models to the dashboard (#5720) and updates to documentation linking the agent harness to the subagent identity section (#5726). Additionally, bug fixes addressed issues related to CLI model catalog reading and preserving inline file data URLs in responses (#5727, #5078). Among the new issues, feature requests emerged for writing open-label definitions tied to the vela3-mini and vela3-flash models (#5703) and recording golden answers for Vela 3.0 in d3 sizes (#5705). Overall, the day was marked by ongoing enhancements and bug resolutions, contributing to the project's continuous improvement.

#### ✅ Merged PRs
- [#5720](https://github.com/vllm-project/semantic-router/pull/5720) [Feature] Dashboard: publish built-in recipes from Mixture-of-Models
- [#5726](https://github.com/vllm-project/semantic-router/pull/5726) [Docs] Link the agent harness page to the subagent identity section
- [#5725](https://github.com/vllm-project/semantic-router/pull/5725) [Test] Pin the repository name in the pull request lifecycle tests
- [#5727](https://github.com/vllm-project/semantic-router/pull/5727) [Bug] CLI: read the packaged model catalog with libyaml
- [#5078](https://github.com/vllm-project/semantic-router/pull/5078) [Bug] Preserve inline file data URLs in Responses encoding
- [#5226](https://github.com/vllm-project/semantic-router/pull/5226) [Bug] Mark Step 5 Preview as open weights in model catalog

#### 🐛 New Issues
- [#5703](https://github.com/vllm-project/semantic-router/issues/5703) [Feature] Write open-label definitions with the base on vela3-mini and vela3-flash `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬3
- [#5705](https://github.com/vllm-project/semantic-router/issues/5705) [Feature] Record golden answers for the Vela 3.0 d3 sizes `enhancement` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5695](https://github.com/vllm-project/semantic-router/issues/5695) [Bug] Model runtime: concurrent vela3-fast requests never share a forward `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5698](https://github.com/vllm-project/semantic-router/issues/5698) [Feature] Record the npu golden answers entry and the fla-npu chunk data files `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬1
- [#5736](https://github.com/vllm-project/semantic-router/issues/5736) Model runtime: Vela 3.0 d3 span and loading structure follow-ups
- [#5724](https://github.com/vllm-project/semantic-router/issues/5724) [CI/Build] The pull request lifecycle test fails on every runner because it reads GITHUB_REPOSITORY `bug` `owner/maintainers`
- [#5732](https://github.com/vllm-project/semantic-router/issues/5732) Model runtime: router_signal_direct.py sends overflow: truncate to models without a scan budget `needs-acceptance`
- [#5712](https://github.com/vllm-project/semantic-router/issues/5712) [Bug] Model runtime: CUDA varlen detection misses the ATen kernel on PyTorch 2.9 `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#5168](https://github.com/vllm-project/semantic-router/issues/5168) [Bug] GPU load materializes a full host copy before placing weights in VRAM
- [#5629](https://github.com/vllm-project/semantic-router/issues/5629) [Docs] The Vela model guide still names Vela 2.0 0.3B as the default and has no Vela 3.0 section
- [#2359](https://github.com/vllm-project/semantic-router/issues/2359) [Benchmark] Build a reproducible telemetry-to-CapacityStudy baseline
- [#5643](https://github.com/vllm-project/semantic-router/issues/5643) [Bug] Use the active management port in CLI status
- [#3181](https://github.com/vllm-project/semantic-router/issues/3181) [Test] Cover Router Learning adaptation, protection, and state lifecycle end to end
- [#2355](https://github.com/vllm-project/semantic-router/issues/2355) [Feature] Align Operator, CRDs, and Helm with the versioned deployment contract
- [#2242](https://github.com/vllm-project/semantic-router/issues/2242) [Cleanup] Finish Router Learning migration and reject legacy learning config paths
- [#5063](https://github.com/vllm-project/semantic-router/issues/5063) [Bug] Responses encoding strips the data-URL prefix from inline file_data
- [#5224](https://github.com/vllm-project/semantic-router/issues/5224) [Bug] stepfun/step-5-preview is still catalogued as proprietary after the weights opened
- [#3283](https://github.com/vllm-project/semantic-router/issues/3283) [Feature] Generate reviewed routing proposals and orchestrate gated flywheel campaigns
- [#3281](https://github.com/vllm-project/semantic-router/issues/3281) [Feature] Run black-box model distillation with pluggable local executors
- [#3234](https://github.com/vllm-project/semantic-router/issues/3234) [CI] Emit one versioned, fail-closed CI execution plan and merge gate
- [#3232](https://github.com/vllm-project/semantic-router/issues/3232) [Test] Run tiered performance regression and hardware qualification gates
- [#3231](https://github.com/vllm-project/semantic-router/issues/3231) [Feature] Publish reproducible performance reports and longitudinal baselines
- [#3230](https://github.com/vllm-project/semantic-router/issues/3230) [Feature] Define a versioned performance coverage and measurement matrix
- [#3192](https://github.com/vllm-project/semantic-router/issues/3192) [Feature] Define recipe- and topology-aware CapacityStudy inputs and proposal export
- [#3191](https://github.com/vllm-project/semantic-router/issues/3191) [Test] Qualify install, upgrade, drain, rollback, and recovery for maintained stacks
- [#2800](https://github.com/vllm-project/semantic-router/issues/2800) [Feature] Make management audit durable, append-only, and exhaustive
- [#2550](https://github.com/vllm-project/semantic-router/issues/2550) [Feature] Add follow-the-sun pool-boundary and capacity recommendations
- [#5636](https://github.com/vllm-project/semantic-router/issues/5636) [Bug] Vela 3.0 package verification accepts out-of-range marker IDs
- [#5625](https://github.com/vllm-project/semantic-router/issues/5625) [Feature] Serve the vela3-fast-vision package and image inputs in the model runtime
- [#3223](https://github.com/vllm-project/semantic-router/issues/3223) [Epic] Publish verified ecosystem integration and Router Model development guides
- [#5355](https://github.com/vllm-project/semantic-router/issues/5355) [Docs] Agent harness: keep agent runs on one model and on a warm prompt cache
- [#5724](https://github.com/vllm-project/semantic-router/issues/5724) [CI/Build] The pull request lifecycle test fails on every runner because it reads GITHUB_REPOSITORY

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*