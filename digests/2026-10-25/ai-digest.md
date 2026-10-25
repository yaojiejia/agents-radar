# 📡 AI Ecosystem Digest — 2026-10-25

> Generated 2026-10-25 00:53 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 153,288 | 17 | 19 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 130,812 | 17 | 6 | 0 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,055 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,295 | 0 | 2 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 221,092 | 33 | 14 | 5 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,705 | 23 | 12 | 4 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,960 | 118 | 86 | 224 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 256,819 | 29 | 7 | 5 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 95,343 | 14 | 4 | 25 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,800 | 13 | 14 | 81 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,254 | 16 | 8 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 184,662 | 4 | 1 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,978 | 17 | 22 | 45 | 4 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,527 | 7 | 1 | 122 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,160 | 2 | 1 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,253 | 5 | 7 | 4 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.67.0-nightly.20261024.gcd1b45c2d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261024.gcd1b45c2d).
- **GitHub Copilot CLI** published two new releases: [v1.0.104-3](https://github.com/github/copilot-cli/releases/tag/v1.0.104-3) and [v1.0.104-2](https://github.com/github/copilot-cli/releases/tag/v1.0.104-2).
- **OpenCode** merged several PRs, notably [#58771](https://github.com/anomalyco/opencode/pull/58771) to classify failed Google interactions by reported errors.
- **OpenAI Codex** reported a significant new issue, [#56691](https://github.com/openai/codex/issues/56691), concerning the failure to start the UI in VS Code 1.143.1 on Windows, garnering 17 comments.
- **Qwen Code** faced a critical issue with [#15446](https://github.com/QwenLM/qwen-code/issues/15446) regarding Main CI failures, which has already attracted 14 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 153,288 · **Open issues:** 15,608 · **Last push:** 22h ago

On October 25, 2026, there were no new releases or merged pull requests for Claude Code. However, a number of notable new issues were reported, including Issue #104925, which highlights a dangerous prompt related to background subagents stalling due to a "Dangerous rm operation not ruled out." Additionally, Issue #104918 draws attention to a significant bug affecting Windows users, where valid sign-ins are repeatedly rejected as too old, necessitating frequent re-logins. Another user concern is documented in Issue #104912, which reveals that 100% of Bash commands exit silently for zsh users in the Linux sandbox.

#### 🐛 New Issues
- [#104925](https://github.com/anthropics/claude-code/issues/104925) Bypass mode: "Dangerous rm operation not ruled out" prompt on a command with no rm stalls background subagents; worktree isolation then refuses the approved call
- [#104924](https://github.com/anthropics/claude-code/issues/104924) frontend-design 1.1.0 references LICENSE.txt absent from the published plugin directory `bug` `area:plugins`
- [#104923](https://github.com/anthropics/claude-code/issues/104923) "Keep computer awake while Claude works" also blocks screen dimming, DPMS and the lock screen on KDE Wayland `bug` `has repro` `platform:linux` `area:desktop`
- [#104922](https://github.com/anthropics/claude-code/issues/104922) Nested ordered list numbers are rendered as letters/roman numerals, so the user sees different labels than the model wrote `bug` `platform:macos` `area:tui`
- [#104921](https://github.com/anthropics/claude-code/issues/104921) [GitHub integration] `bug` `platform:web` `github-integration`
- [#104920](https://github.com/anthropics/claude-code/issues/104920) [BUG] Session goes idle after auto-compaction instead of continuing the work the assistant just announced `bug` `platform:macos` `area:core`
- [#104919](https://github.com/anthropics/claude-code/issues/104919) [Bug] /btw blocks main session from acting on background results `bug` `platform:windows` `area:tui`
- [#104918](https://github.com/anthropics/claude-code/issues/104918) [BUG] Desktop app (Windows): valid sign-in rejected as too old (session_stale_relogin) forces re-login almost daily; each re-login needs a second device `bug` `platform:windows` `area:auth` `area:desktop`
- [#104917](https://github.com/anthropics/claude-code/issues/104917) [BUG] Remote Control: sessions open on a server never reconnect after the server restarts (Windows); app shows "Can't reach <host>" indefinitely `bug` `has repro` `platform:windows` `area:desktop`
- [#104916](https://github.com/anthropics/claude-code/issues/104916) [BUG] Claude Desktop for Linux: "Send to Claude" / "Open in Claude Code" file-manager entries survive `apt remove` and then do nothing, silently `invalid`
- [#104915](https://github.com/anthropics/claude-code/issues/104915) [FEATURE] Mods: icons on Button and on the Input submit button `enhancement` `area:plugins`
- [#104914](https://github.com/anthropics/claude-code/issues/104914) [BUG] VSCode: The chat prompt grabs focus when trying to maximize the bottom panel `bug` `has repro` `platform:macos` `area:ide`
- [#104913](https://github.com/anthropics/claude-code/issues/104913) [Bug] Classifier Blocks Patch Application in Board Game Project `bug` `platform:linux` `area:permissions` `needs-repro`
- [#104912](https://github.com/anthropics/claude-code/issues/104912) [BUG] Linux sandbox: 100% of Bash commands exit 126 silently for zsh users — inner script uses bash-only `exec 3<&-` semantics `bug` `has repro` `platform:linux` `regression`
- [#104911](https://github.com/anthropics/claude-code/issues/104911) Give paying users one documented switch to opt out of behavior experiments `enhancement` `area:core`
- [#104910](https://github.com/anthropics/claude-code/issues/104910) [GitHub integration] `invalid` `github-integration`
- [#104909](https://github.com/anthropics/claude-code/issues/104909) [GitHub integration] Doesn't allow for a standard forked repo usage pattern `enhancement` `platform:web` `github-integration`

#### 🔒 Closed Issues
- [#89197](https://github.com/anthropics/claude-code/issues/89197) [BUG] Opus 4.8 and 5.0 is consistently broken and unusable.
- [#89735](https://github.com/anthropics/claude-code/issues/89735) Give paying users one documented switch to opt out of behavior experiments
- [#84224](https://github.com/anthropics/claude-code/issues/84224) Auto-updater installs into the PATH-resolved npm prefix, not its own — clobbers a different install
- [#82821](https://github.com/anthropics/claude-code/issues/82821) [BUG] workflow subagents receive a substituted tool input, making every parameterized tool call fail schema validation
- [#88216](https://github.com/anthropics/claude-code/issues/88216) Desktop: Confirm before a denied permission prompt aborts an entire multi-agent workflow
- [#89871](https://github.com/anthropics/claude-code/issues/89871) [BUG] Desktop sidebar: `lastActivityAt` is persisted for a turn that never happened, so an idle session outranks live ones forever and a restart does not fix it
- [#89719](https://github.com/anthropics/claude-code/issues/89719) Issue in claude-in-chrome
- [#83745](https://github.com/anthropics/claude-code/issues/83745) Named-pipe conflict from many concurrent CLI sessions makes Claude in Chrome permanently report "not connected"
- [#89879](https://github.com/anthropics/claude-code/issues/89879) [BUG] On a genuinely full disk, the Bash ENOSPC notice names the session tmpdir instead of the filesystem, and no command can then run to diagnose it
- [#89876](https://github.com/anthropics/claude-code/issues/89876) [Bug] Advisor model fails to recommend efficient model selection despite documented context
- [#89875](https://github.com/anthropics/claude-code/issues/89875) [BUG] In an Output-Style file, keep-coding-instructions in frontmatter doesn't do anything. Claude Code’s built-in software engineering instructions are never removed
- [#89873](https://github.com/anthropics/claude-code/issues/89873) Sessions with model: claude-sonnet-4-6 show "No messages yet" after update, despite intact .jsonl content on disk
- [#89868](https://github.com/anthropics/claude-code/issues/89868) [BUG] remote session restored from stale file system backups, overwriting git progress
- [#89866](https://github.com/anthropics/claude-code/issues/89866) [BUG] Remote MCP servers can add outward-facing tools to a trusted connector with no notification or re-consent
- [#89860](https://github.com/anthropics/claude-code/issues/89860) [Feature Request] Add model selection option to Claude Code CLI
- [#89818](https://github.com/anthropics/claude-code/issues/89818) [BUG] MCP server shows "Needs Auth" after VSCode restart despite valid token
- [#89861](https://github.com/anthropics/claude-code/issues/89861) [Bug] Verification email delivery delays requiring multiple resend attempts
- [#89863](https://github.com/anthropics/claude-code/issues/89863) You've hit your limit · resets 2:50pm (America/Toronto)
- [#96846](https://github.com/anthropics/claude-code/issues/96846) -

### OpenAI Codex (`openai/codex`)

**Stars:** 130,812 · **Open issues:** 24,622 · **Last push:** 1d ago

Today was relatively routine for OpenAI Codex, with no new releases or merged pull requests to report. However, several significant new issues have emerged, with #56691 highlighting a bug where Codex 26.1021.22027 fails to start the UI in VS Code 1.143.1 on Windows, sparking considerable discussion among users. Additional noteworthy issues include #56697, which reports that the Ctrl+Tab shortcut stops switching chats on Windows, and #56807, where the Codex CLI fails to follow skill instructions as expected.

#### 🐛 New Issues
- [#56691](https://github.com/openai/codex/issues/56691) [BUG] Codex 26.1021.22027 fails to start UI in VS Code 1.143.1 on Windows `bug` `windows-os` `extension` 💬17
- [#56697](https://github.com/openai/codex/issues/56697) Windows: Ctrl+Tab stops switching chats; recent-chat cycling is unbound and non-configurable `bug` `windows-os` `app` 💬3
- [#56769](https://github.com/openai/codex/issues/56769) Railway connector OAuth reconnect loop: could not validate id_token_hint on Windows `bug` `windows-os` `auth` `app` 💬1
- [#56812](https://github.com/openai/codex/issues/56812) [Dots][Windows] Publishing approval rejected after earlier success, even after saving an explicit custom rule `bug` `windows-os` `sandbox` `app` 💬1
- [#56808](https://github.com/openai/codex/issues/56808) macOS: new chats have networking disabled and no permission selector while an older Full access chat works `bug` `sandbox` `app` 💬1
- [#56805](https://github.com/openai/codex/issues/56805) Dot-delegated tasks retain empty in-progress records; Proton Mail Bridge app approval repeatedly reappears `bug` `app-server` `computer-use` `dots` 💬1
- [#56802](https://github.com/openai/codex/issues/56802) TUI `/clear` leaves the previous thread's stdio MCP servers running (one extra MCP set per `/clear`) `bug` `mcp` `CLI` `session` 💬1
- [#56816](https://github.com/openai/codex/issues/56816) Packaged skills assume unavailable hosted tools and output channels in Codex embedding hosts `enhancement` `CLI` `skills`
- [#56815](https://github.com/openai/codex/issues/56815) Google Drive 0.1.22 raw-fetch examples omit include_base64:false required for streaming `documentation` `CLI` `skills`
- [#56814](https://github.com/openai/codex/issues/56814) [macOS] Next tab shortcut does not work after reassignment `bug` `app`
- [#56811](https://github.com/openai/codex/issues/56811) [macOS] Sidebar omits “Awaiting approval” label for chats waiting on approval `bug` `app`
- [#56813](https://github.com/openai/codex/issues/56813) [Windows ChatGPT 26.1021.3705.0] Settings open Codex only; upgrade prices and credits payment fail (web works) `bug` `windows-os` `app`
- [#56810](https://github.com/openai/codex/issues/56810) CLI Mermaid renderer rejects long node labels instead of wrapping them `bug` `TUI` `CLI`
- [#56807](https://github.com/openai/codex/issues/56807) Codex CLI can't follow skill, ignores instructions `bug` `model-behavior` `CLI` `skills`
- [#56806](https://github.com/openai/codex/issues/56806) McAfee Real Protect blocks Codex PowerShell launcher on Windows 11 - CLI 0.164.0 `bug` `windows-os` `sandbox` `CLI`
- [#56804](https://github.com/openai/codex/issues/56804) [Cloud environment] /usr/bin/go is a board game and shadows the Go compiler `bug` `codex-web`
- [#56803](https://github.com/openai/codex/issues/56803) [Dots][Windows/macOS] Computer access UI appears inconsistent after switching the authorized personal computer `bug` `windows-os` `app` `dots`

#### 🔒 Closed Issues
- [#55034](https://github.com/openai/codex/issues/55034) Windows/MSYS2 mintty: Shift+Enter and Ctrl+J do not insert a newline
- [#55024](https://github.com/openai/codex/issues/55024) CLI: pressing Shift+Left twice replaces the retrieved queued prompt
- [#54990](https://github.com/openai/codex/issues/54990) Supported whole-command timing and process-tree memory measurement
- [#55045](https://github.com/openai/codex/issues/55045) Copying does not work through SSH.
- [#55102](https://github.com/openai/codex/issues/55102) Allow customization of the Codex CLI working-status indicator color
- [#55023](https://github.com/openai/codex/issues/55023) send_message_to_thread fails with "'sendRequest.bind' is not a function." from an ephemeral side chat, while the identical call succeeds from a regular chat

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,055 · **Open issues:** 762 · **Last push:** 23h ago

On October 25, 2026, the Gemini CLI team released version v0.67.0-nightly.20261024.gcd1b45c2d, which includes important fixes such as stopping continuation stream processing and auto-nudging after request cancellation, and correcting the display width of Thai and Lao SARA AM characters. Additionally, the release resolves relative file paths against the active IDE workspace root, improving user experience. There were no new issues reported or merged pull requests in the last 24 hours, indicating a stable day of maintenance focused on enhancements in the existing functionality of the CLI.

#### 🚀 New Releases
- [v0.67.0-nightly.20261024.gcd1b45c2d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261024.gcd1b45c2d) Release v0.67.0-nightly.20261024.gcd1b45c2d

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,295 · **Open issues:** 2,256 · **Last push:** 9h ago

On October 25, 2026, GitHub Copilot CLI released version 1.0.104-3, which introduced fixes that ensure the managed model "fusion" now starts sessions in Auto mode while applying the fusionTier settings. Additionally, interactive and SDK Autopilot sessions have been updated to wait for attached background tasks, addressing issues that arose after the COPILOT_TASK_WAIT_TIMEOUT_SECONDS, although the `-p --autopilot` option still adheres to this timeout. There were no merged pull requests or new issues reported in the last 24 hours, marking the day as relatively routine, but the updates to session management settings are noteworthy for enhancing user experience.

#### 🚀 New Releases
- [v1.0.104-3](https://github.com/github/copilot-cli/releases/tag/v1.0.104-3) 1.0.104-3
- [v1.0.104-2](https://github.com/github/copilot-cli/releases/tag/v1.0.104-2) 1.0.104-2

#### 🔒 Closed Issues
- [#5147](https://github.com/github/copilot-cli/issues/5147) /restart fails when the CLI was launched with --new-session-id
- [#3815](https://github.com/github/copilot-cli/issues/3815) Debug logs saved to location is missing a `\`.

### OpenCode (`anomalyco/opencode`)

**Stars:** 221,092 · **Open issues:** 3,773 · **Last push:** <1h ago

On October 25, 2026, OpenCode saw no new releases, but several important issues were merged, including fixes for error classification in Google and AWS interactions (#58771 and #58770), as well as performance enhancements such as converting tool schemas once (#58798) and caching git discovery using metadata fingerprints (#58616). In the realm of new issues, users have raised significant concerns about free usage limits, with reports of exceeding quotas in OpenCode Desktop 1.19.4 (#58781) and ongoing time out issues (#58831). Additionally, a user highlighted persistent difficulties with API key expiration, even after creating new keys (#58832), signaling broader reliability concerns that may need immediate attention.

#### ✅ Merged PRs
- [#58771](https://github.com/anomalyco/opencode/pull/58771) fix(ai): classify failed Google Interactions by reported errors
- [#58770](https://github.com/anomalyco/opencode/pull/58770) fix(ai): classify AWS modeled errors from every restJson1 identity location
- [#58811](https://github.com/anomalyco/opencode/pull/58811) fix(schema): validate base64 attachments in linear time
- [#58798](https://github.com/anomalyco/opencode/pull/58798) perf(core): convert each tool schema once
- [#58616](https://github.com/anomalyco/opencode/pull/58616) perf(core): cache git discovery in Project.resolve by metadata fingerprint

#### 🐛 New Issues
- [#58781](https://github.com/anomalyco/opencode/issues/58781) Free Usage Exceeded on all free models in OpenCode Desktop 1.19.4. `pending close` `triaging` 💬5
- [#58831](https://github.com/anomalyco/opencode/issues/58831) Free quota time out never recoves, sawtooths on 86400s to go `pending close` `triaging` 💬3
- [#58829](https://github.com/anomalyco/opencode/issues/58829) حدود استخدامي اليومية غير موجودة `pending close` `triaging` 💬3
- [#58832](https://github.com/anomalyco/opencode/issues/58832) api key has expired even with a newly created api key in opencode console `triaging` 💬3
- [#58605](https://github.com/anomalyco/opencode/issues/58605) Error: "Free usage exceeded" (Desktop version) `pending close` `triaging` 💬2
- [#58785](https://github.com/anomalyco/opencode/issues/58785) Login `triaging` 💬2
- [#58828](https://github.com/anomalyco/opencode/issues/58828) Opencode is geniunely broken and HAS to be fixed IMMEDIATELY. `pending close` `triaging` 💬2
- [#58809](https://github.com/anomalyco/opencode/issues/58809) [FEATURE] Desktop v2: show effective model and reasoning effort for running subagents 💬2
- [#58824](https://github.com/anomalyco/opencode/issues/58824) [FEATURE]: Support theme overrides and language token extensions for built-in themes 💬2
- [#58724](https://github.com/anomalyco/opencode/issues/58724) session: manual compaction omits required "recent", permanently bricking the session `triaging` 💬2
- [#58762](https://github.com/anomalyco/opencode/issues/58762) app: showing a local image registers its folder as a project `reproduced` 💬2
- [#58830](https://github.com/anomalyco/opencode/issues/58830) The free usage limit for the free OpenCode (Zen & Console) plan has not reset for two consecutive days in v1 and v2 `pending close` `triaging` 💬1
- [#58776](https://github.com/anomalyco/opencode/issues/58776) [FEATURE]: conditional steering admission with an expected-turn guard 💬1
- [#58827](https://github.com/anomalyco/opencode/issues/58827) Usage limit hit before any prompts were submitted. `pending close` `triaging` 💬1
- [#58826](https://github.com/anomalyco/opencode/issues/58826) [FEATURE]: Please add USDC as a payment method for Go payments `pending close` `triaging` 💬1
- [#58822](https://github.com/anomalyco/opencode/issues/58822) Trash agent `triaging` 💬1
- [#58821](https://github.com/anomalyco/opencode/issues/58821) provider: compaction fails on OpenAI-compatible/vLLM server when model body sets tool_choice=auto (tools empty) `triaging` 💬1
- [#58819](https://github.com/anomalyco/opencode/issues/58819) Contribution `triaging` 💬1
- [#58818](https://github.com/anomalyco/opencode/issues/58818) Background compaction: hardcoded 64k floor makes it unreachable on smaller context windows 💬1
- [#58816](https://github.com/anomalyco/opencode/issues/58816) Server ignores SIGTERM when a teardown step hangs (no shutdown deadline) `reproduced` 💬1
- [#58814](https://github.com/anomalyco/opencode/issues/58814) Free usage limit doesn't reset for 2+ days ("Free usage limit reached" on a free OpenCode model) `pending close` `triaging` 💬1
- [#58810](https://github.com/anomalyco/opencode/issues/58810) tui: /pair QR code encodes the loopback 127.0.0.1 link, so other devices cannot connect `reproduced` 💬1
- [#58812](https://github.com/anomalyco/opencode/issues/58812) اوبن كود `triaging` 💬1
- [#58808](https://github.com/anomalyco/opencode/issues/58808) [docs] dialog.set before show() is a silent no-op `reproduced` 💬1
- [#58807](https://github.com/anomalyco/opencode/issues/58807) [docs] Plugin package.json example's peer ranges cause ERESOLVE `reproduced` 💬1
- [#58806](https://github.com/anomalyco/opencode/issues/58806) Pro Subscription – API Inference Unavailable (HTTP 503) `pending close` `triaging` 💬1
- [#58805](https://github.com/anomalyco/opencode/issues/58805) Free usage limit / 429 rate limit on home fiber (Kenya) but not on mobile data, suspected per-IP limiting `pending close` `triaging` 💬1
- [#58799](https://github.com/anomalyco/opencode/issues/58799) [FEATURE]: allow disabling cache_control on tool definitions for Anthropic-compatible endpoints 💬1
- [#58795](https://github.com/anomalyco/opencode/issues/58795) app: an open web page boots every evicted location again within a second `reproduced` 💬1
- [#58797](https://github.com/anomalyco/opencode/issues/58797) [FEATURE]: `pending close` `triaging` 💬1
- [#58794](https://github.com/anomalyco/opencode/issues/58794) compaction: 'too many tokens per minute' rate limit misclassified as context overflow `reproduced` 💬1
- [#58789](https://github.com/anomalyco/opencode/issues/58789) 429 rate limit after few request/ 429 rate limit persist even after a day reset on free models `pending close` `triaging` 💬1
- [#58787](https://github.com/anomalyco/opencode/issues/58787) desktop: workspace and local chat colors lack an explanation 💬1

#### 🔒 Closed Issues
- [#58536](https://github.com/anomalyco/opencode/issues/58536) Free usage limit error despite zero Console usage
- [#58550](https://github.com/anomalyco/opencode/issues/58550) Free usage exceeded, tho my first time Using opencode
- [#58558](https://github.com/anomalyco/opencode/issues/58558) provider discovery: hard-coded 1s timeout fails remote endpoints
- [#58559](https://github.com/anomalyco/opencode/issues/58559) Opencode crash or fail to run if %temp% is located to different path on windows
- [#58553](https://github.com/anomalyco/opencode/issues/58553) 额度限制有误
- [#57931](https://github.com/anomalyco/opencode/issues/57931) Expired free model (GLM) breaks client catalog and blocks access to other active free models (Mimo)
- [#58529](https://github.com/anomalyco/opencode/issues/58529) DeepSeek V4.1 Flash Free model responds with long text and enters infinite loop
- [#58561](https://github.com/anomalyco/opencode/issues/58561) Free usage exceeded infinite limit.
- [#58557](https://github.com/anomalyco/opencode/issues/58557) After one message I hit the limit for today.
- [#57968](https://github.com/anomalyco/opencode/issues/57968) مشكلة كبيرة
- [#58533](https://github.com/anomalyco/opencode/issues/58533) desktop: custom-provider dialog writes V1 provider keys that the V2 server ignores - toast says provider not available on this server
- [#58527](https://github.com/anomalyco/opencode/issues/58527) Permission "ask" effect silently allows for edit/write — no prompt shown (shell "ask" prompts correctly)
- [#58776](https://github.com/anomalyco/opencode/issues/58776) [FEATURE]: conditional steering admission with an expected-turn guard
- [#58806](https://github.com/anomalyco/opencode/issues/58806) Pro Subscription – API Inference Unavailable (HTTP 503)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,705 · **Open issues:** 2,048 · **Last push:** <1h ago

On October 25, 2026, Qwen Code released version 0.26.1, which introduced key improvements such as opt-in daemon token persistence to enhance token management during session handling. Notably, the release also included a breaking change that restored per-group session isolation under thread scope. Additionally, important merged pull requests focused on fixes for preserving checkpoint restoration ownership and enhancements to OpenTUI session replay. Among the newly reported issues, the most pressing concern was a main CI failure relating to the Managed Agent gate, indicating ongoing challenges in the continuous integration process.

#### 🚀 New Releases
- [v0.26.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.1) Release v0.26.1
- [desktop-v0.26.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.1) Qwen Code Desktop v0.26.1

#### ✅ Merged PRs
- [#15386](https://github.com/QwenLM/qwen-code/pull/15386) fix(cli): preserve checkpoint restore ownership and cold continuation
- [#15384](https://github.com/QwenLM/qwen-code/pull/15384) feat(cli): preserve OpenTUI session replay and rewind
- [#15455](https://github.com/QwenLM/qwen-code/pull/15455) fix(managed-agent): restore the module and cli lanes after #15448
- [#15224](https://github.com/QwenLM/qwen-code/pull/15224) test(managed-agent): retry the team-lead boot past the harness port race

#### 🐛 New Issues
- [#15446](https://github.com/QwenLM/qwen-code/issues/15446) Main CI failed: Managed Agent gate — HostedPublicWorkspaceIT.publicShellReceiptFaultsNeverRepeatEffects(String)[1] (+12 more) `status/needs-triage` `type/bug` 💬14
- [#15479](https://github.com/QwenLM/qwen-code/issues/15479) Auto-memory is bound to the startup directory, so multi-workspace sessions cannot save into the right project and the global store fills up `priority/P2` `type/feature-request` `category/core` `scope/memory` 💬4
- [#15483](https://github.com/QwenLM/qwen-code/issues/15483) Hosted Harness recovery checks exhaust their I/O budgets outside the ECS runner pool `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#15470](https://github.com/QwenLM/qwen-code/issues/15470) ci: main-push failures file no issues — the reporter waits 20–100 min for a hosted runner and is then dropped as superseded `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬3
- [#15444](https://github.com/QwenLM/qwen-code/issues/15444) [Bug]: Avoid double-counting included reasoning tokens in model cost estimates `priority/P3` `type/bug` `category/ui` `scope/components` 💬3
- [#15461](https://github.com/QwenLM/qwen-code/issues/15461) release: provision the release-only host on the idle hz ARM64 pool so publish stops queueing on GitHub-hosted `priority/P2` `category/development` `scope/ci-cd` `type/enhancement` 💬3
- [#15427](https://github.com/QwenLM/qwen-code/issues/15427) Main CI failed: SDK Java — HostedPublicWorkspaceIT files turns assert a tool list that predates web_fetch `priority/P1` `type/bug` `category/development` `scope/testing` 💬3
- [#15445](https://github.com/QwenLM/qwen-code/issues/15445) Web Shell fails to load in non-English browsers: desktopRelay i18n lookup has no fallback (TypeError reading 'desktopRelay.trigger') `status/need-retesting` `priority/P2` `type/bug` `category/ui` 💬3
- [#15418](https://github.com/QwenLM/qwen-code/issues/15418) Managed automation scanner holds its only thread for every gate probe, so one node serves only a handful of PR watches `priority/P2` `category/performance` `type/enhancement` `roadmap/background-automation` 💬3
- [#15486](https://github.com/QwenLM/qwen-code/issues/15486) After automatic compaction, the next request's size estimate counts the pending tool result twice and adds a 20K pad, so the turn is stopped or sent with `max_tokens: 1` `priority/P1` `type/bug` `category/core` `scope/token-management` 💬2
- [#15487](https://github.com/QwenLM/qwen-code/issues/15487) Post-compaction file restoration uses a fixed budget, so on a small window a successful compaction can leave the next request over the window `priority/P2` `type/bug` `category/core` `scope/token-management` 💬2
- [#15480](https://github.com/QwenLM/qwen-code/issues/15480) Web Shell: allow archiving the current session when it is idle `priority/P3` `type/feature-request` `category/ui` `scope/session-management` 💬2
- [#15478](https://github.com/QwenLM/qwen-code/issues/15478) Privacy notice says no extra data is collected with your own API key, but usage statistics are on by default for all auth types `priority/P2` `type/documentation` `category/telemetry` `scope/data-privacy` 💬2
- [#15476](https://github.com/QwenLM/qwen-code/issues/15476) GitHub authorization on coder.qwen.ai reports failure even though the OAuth grant succeeds on GitHub `priority/P2` `status/blocked` `type/bug` `category/authentication` 💬2
- [#15424](https://github.com/QwenLM/qwen-code/issues/15424) docs(design): the scheduled-task gate design's probe examples fail when copied into a fresh clone `priority/P3` `type/documentation` `category/cli` `scope/documentation` 💬2
- [#15465](https://github.com/QwenLM/qwen-code/issues/15465) release: the post-publish fan-out still waits 37-50 min on GitHub-hosted runners `priority/P2` `category/development` `scope/ci-cd` `type/enhancement` 💬2
- [#15462](https://github.com/QwenLM/qwen-code/issues/15462) Follow-up: preview validation of #12442 — Windows desktop GUI check, CUA dry-run tail, draft release cleanup `priority/P2` `type/bug` `category/development` `scope/packaging` 💬2
- [#15454](https://github.com/QwenLM/qwen-code/issues/15454) Write replaces read-only files and splits hard links `priority/P2` `type/bug` `category/core` `scope/file-operations` 💬2
- [#15447](https://github.com/QwenLM/qwen-code/issues/15447) ci: review-pr checks fail after the review completes on ecs-qwen hosts (no failing step, leftover .qwen/tmp/review-pr-*) `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#15484](https://github.com/QwenLM/qwen-code/issues/15484) Release Failed for v0.26.1-nightly.20261024.f4f602d606 on 2026-10-24 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15481](https://github.com/QwenLM/qwen-code/issues/15481) Main CI failed: SDK Java — LocalProcessRuntimeProvisionerTest.rejectsReusingADeadWorkersLeaseIdentity `status/needs-triage` `type/bug` 💬1
- [#15477](https://github.com/QwenLM/qwen-code/issues/15477) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > settles the parked runtime after a broker fault, releasing its… (+6 more) `status/needs-triage` `type/bug` 💬1
- [#15456](https://github.com/QwenLM/qwen-code/issues/15456) Main CI failed: E2E Tests — sdk-typescript/workflow-intent.test.ts > … > uses the actual user setting for workflows disabled (+1 more) `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#9437](https://github.com/QwenLM/qwen-code/issues/9437) Rework rewind mapping to derive UI/API alignment from a single representation
- [#12986](https://github.com/QwenLM/qwen-code/issues/12986) Follow up on deferred O2 review suggestions from #12894
- [#14350](https://github.com/QwenLM/qwen-code/issues/14350) bug(qqbot): chat_thread marks every QQ direct message as a shared session although QQ supplies no thread id
- [#12813](https://github.com/QwenLM/qwen-code/issues/12813) channels/base: the responseBoundary adapter hook is skipped during cancelPending while the bridge still clears its chunks
- [#15365](https://github.com/QwenLM/qwen-code/issues/15365) bug(cli): a stream-json message sent during startup runs before the first message
- [#12956](https://github.com/QwenLM/qwen-code/issues/12956) follow-up(runtime-broker): Handle durable startup zombies and minimal Linux test hosts
- [#12778](https://github.com/QwenLM/qwen-code/issues/12778) test(cli): Cover remaining Managed Workspace activation refusals
- [#15427](https://github.com/QwenLM/qwen-code/issues/15427) Main CI failed: SDK Java — HostedPublicWorkspaceIT files turns assert a tool list that predates web_fetch
- [#5901](https://github.com/QwenLM/qwen-code/issues/5901) qqbot: streaming improvements and deprecated approaches
- [#15424](https://github.com/QwenLM/qwen-code/issues/15424) docs(design): the scheduled-task gate design's probe examples fail when copied into a fresh clone
- [#15205](https://github.com/QwenLM/qwen-code/issues/15205) Main CI failed: Managed Agent gate — HostedTeamLeadMySqlIT.teamCallsAskWithTheirInputInDefaultMode
- [#2720](https://github.com/QwenLM/qwen-code/issues/2720) qwen code cli对接GLM-5.1 异常

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

**Stars:** 392,960 · **Open issues:** 7,818 · **Last push:** <1h ago

On October 25, 2026, OpenClaw released version 2026.10.7, introducing noteworthy enhancements such as replay-safe session recovery, which ensures that interrupted sessions retain critical information and manage message transitions more effectively. This release was preceded by the extended-stable v2026.9.34, which included essential security updates and improvements. Additionally, several performance optimizations were merged, such as reusing prepared policies on recurring reads and optimizing PostgreSQL agent session loads. A particularly concerning new issue emerged regarding a failure in the Windows update repair process, which is linked to the gateway's slow and unstable readiness.

#### 🚀 New Releases
- [v2026.10.7](https://github.com/openclaw/openclaw/releases/tag/v2026.10.7) openclaw 2026.10.7
- [v2026.9.34](https://github.com/openclaw/openclaw/releases/tag/v2026.9.34) openclaw 2026.9.34

#### ✅ Merged PRs
- [#183047](https://github.com/openclaw/openclaw/pull/183047) perf(plugins): reuse prepared policy on recurring reads
- [#183028](https://github.com/openclaw/openclaw/pull/183028) fix(telegram): deliver questions during progress draft retirement
- [#172916](https://github.com/openclaw/openclaw/pull/172916) fix(cron): keep native CLI runs on their own login
- [#182943](https://github.com/openclaw/openclaw/pull/182943) perf(workboard): fold placement precondition into write
- [#183035](https://github.com/openclaw/openclaw/pull/183035) test(core,ui): remove low-value tests (batch d502)
- [#182875](https://github.com/openclaw/openclaw/pull/182875) perf(ui): construct live Markdown tails directly as DOM
- [#182754](https://github.com/openclaw/openclaw/pull/182754) perf(gateway): preserve session row identity across unchanged reads
- [#183004](https://github.com/openclaw/openclaw/pull/183004) test(memory): prune duplicate embedding retry cases
- [#182999](https://github.com/openclaw/openclaw/pull/182999) test: remove duplicate agent and gateway coverage
- [#183020](https://github.com/openclaw/openclaw/pull/183020) perf(gateway): allocate session group positions in the insert
- [#183045](https://github.com/openclaw/openclaw/pull/183045) perf(gateway): remove the remaining reload observation lease read
- [#183014](https://github.com/openclaw/openclaw/pull/183014) improve(database): speed up PostgreSQL agent session loads
- [#183055](https://github.com/openclaw/openclaw/pull/183055) perf(plugins): defer unused capture resolvers
- [#182494](https://github.com/openclaw/openclaw/pull/182494) fix(media): match delivered image filenames to encoded format
- [#183024](https://github.com/openclaw/openclaw/pull/183024) test(core): remove low-value tests (batch d501)
- [#183051](https://github.com/openclaw/openclaw/pull/183051) perf(gateway): reduce compression work for short frame segments
- [#183054](https://github.com/openclaw/openclaw/pull/183054) fix: keep subagent Stop test stable after cleanup
- [#183041](https://github.com/openclaw/openclaw/pull/183041) perf(plugins): reuse bounded retention owners across references
- [#183050](https://github.com/openclaw/openclaw/pull/183050) perf(sqlite): reuse completed admission scope sweeps
- [#183046](https://github.com/openclaw/openclaw/pull/183046) perf(plugins): reduce request scope enumeration work
- [#183007](https://github.com/openclaw/openclaw/pull/183007) perf(agents): reuse frozen hydrated history fingerprints
- [#182994](https://github.com/openclaw/openclaw/pull/182994) test(sessions): avoid duplicate conformance executions
- [#183037](https://github.com/openclaw/openclaw/pull/183037) test: derive source runtime modules from package manifest
- [#182934](https://github.com/openclaw/openclaw/pull/182934) perf(sessions): share resident actor entries across projections
- [#182982](https://github.com/openclaw/openclaw/pull/182982) fix: restore standalone helper launches
- [#182984](https://github.com/openclaw/openclaw/pull/182984) fix: CLI runs stall for minutes scanning an agent database the Gateway already opened
- [#183030](https://github.com/openclaw/openclaw/pull/183030) perf(sessions): avoid copying catalog rows for adoption lookup
- [#183012](https://github.com/openclaw/openclaw/pull/183012) chore: remove redundant test executions
- [#182992](https://github.com/openclaw/openclaw/pull/182992) test(ui,plugins,sessions): remove low-value tests (batch d499)
- [#182980](https://github.com/openclaw/openclaw/pull/182980) perf(gateway): shrink cached session selection indexes
- [#181904](https://github.com/openclaw/openclaw/pull/181904) perf(cron): share identical delivery preview reads
- [#183039](https://github.com/openclaw/openclaw/pull/183039) chore(ui): refresh control ui locales
- [#182879](https://github.com/openclaw/openclaw/pull/182879) perf(gateway): remove redundant config observation lease reads
- [#183008](https://github.com/openclaw/openclaw/pull/183008) test: remove low-value tests (batch d500)
- [#183022](https://github.com/openclaw/openclaw/pull/183022) refactor: deslop CLI, session and reply fixtures
- [#183027](https://github.com/openclaw/openclaw/pull/183027) perf(gateway): skip stale placement replica scans during maintenance
- [#182983](https://github.com/openclaw/openclaw/pull/182983) test(core, ui): remove low-value tests (batch d498)
- [#183026](https://github.com/openclaw/openclaw/pull/183026) test(codex): update bounded media thread expectation
- [#183011](https://github.com/openclaw/openclaw/pull/183011) perf(agents): reuse immutable replay history cleanup
- [#182978](https://github.com/openclaw/openclaw/pull/182978) refactor: deslop runtime, skills and transport fixtures
- [#182741](https://github.com/openclaw/openclaw/pull/182741) fix(ui): limit Details to running processes
- [#182871](https://github.com/openclaw/openclaw/pull/182871) perf(gateway): bound failed orphan workspace discovery retries
- [#182968](https://github.com/openclaw/openclaw/pull/182968) fix(memory): rebuild reuses cached embeddings instead of evicting them first
- [#183010](https://github.com/openclaw/openclaw/pull/183010) perf(agents): release skill catalogs retained by prompt reports
- [#182998](https://github.com/openclaw/openclaw/pull/182998) perf(sessions): share retained summary identity strings
- [#182953](https://github.com/openclaw/openclaw/pull/182953) perf(ui): defer optional transcript renderers and session copy
- [#182928](https://github.com/openclaw/openclaw/pull/182928) fix(lobster): validate workflows without runtime code generation in AOT
- [#182896](https://github.com/openclaw/openclaw/pull/182896) perf(plugins): reduce retained preparation-worker memory
- [#182972](https://github.com/openclaw/openclaw/pull/182972) refactor: remove redundant timer cleanup guards
- [#182872](https://github.com/openclaw/openclaw/pull/182872) refactor: deslop auth, CLI and reply fixtures
- [#182991](https://github.com/openclaw/openclaw/pull/182991) refactor: deslop runner, media and reply fixtures
- [#183003](https://github.com/openclaw/openclaw/pull/183003) refactor: deslop browser, provider and channel fixtures
- [#182836](https://github.com/openclaw/openclaw/pull/182836) perf(gateway): release archived page budget after reads
- [#182767](https://github.com/openclaw/openclaw/pull/182767) fix(android): bind chat to an allowed agent roster
- [#183001](https://github.com/openclaw/openclaw/pull/183001) chore(ui): refresh control ui locales
- [#182986](https://github.com/openclaw/openclaw/pull/182986) perf(sessions): lazily wrap catalog entry snapshots
- [#182923](https://github.com/openclaw/openclaw/pull/182923) perf(diagnostics-prometheus): reuse unchanged series bytes
- [#138553](https://github.com/openclaw/openclaw/pull/138553) fix(gateway): apply reloaded config to new native approvals
- [#182990](https://github.com/openclaw/openclaw/pull/182990) fix(test): isolated setup Gateway exits before readiness
- [#182989](https://github.com/openclaw/openclaw/pull/182989) perf(runtime): reduce idle worker GC profiler churn
- [#182995](https://github.com/openclaw/openclaw/pull/182995) fix(agents): keep the attempt budget for runtime plugins without a monotonic start
- [#182925](https://github.com/openclaw/openclaw/pull/182925) perf(agents): wake media completion waits from owner changes
- [#182924](https://github.com/openclaw/openclaw/pull/182924) perf(gateway): prepare the default state root at startup
- [#182979](https://github.com/openclaw/openclaw/pull/182979) refactor: deslop gateway, config and infra fixtures
- [#182491](https://github.com/openclaw/openclaw/pull/182491) fix(sessions): reset detaches a project folder that has no worktree
- [#182942](https://github.com/openclaw/openclaw/pull/182942) perf(gateway): reduce repeated task PR subscription work
- [#182933](https://github.com/openclaw/openclaw/pull/182933) improve: skip redundant expiry probes in plugin-state writes
- [#182985](https://github.com/openclaw/openclaw/pull/182985) test(ui): remove unused compact session count helper
- [#182935](https://github.com/openclaw/openclaw/pull/182935) perf(memory): batch source headers during publication
- [#182965](https://github.com/openclaw/openclaw/pull/182965) perf(gateway): reduce repeated profile reads during restart recovery
- [#182897](https://github.com/openclaw/openclaw/pull/182897) refactor(gateway): trust admitted client scope arrays
- [#182887](https://github.com/openclaw/openclaw/pull/182887) refactor: remove redundant cache readbacks
- [#182973](https://github.com/openclaw/openclaw/pull/182973) test(providers,cron,ui): remove low-value tests (batch d497)
- [#182926](https://github.com/openclaw/openclaw/pull/182926) test(perf): add synthetic session readiness workloads
- [#182892](https://github.com/openclaw/openclaw/pull/182892) test(core,plugins): remove low-value tests (batch d493)
- [#182932](https://github.com/openclaw/openclaw/pull/182932) perf(sqlite): avoid copying complete worker transfer records
- [#182962](https://github.com/openclaw/openclaw/pull/182962) fix: align hot-handoff lifecycle check with plugin origin
- [#182429](https://github.com/openclaw/openclaw/pull/182429) fix: retry asks the model to continue dropped reasoning when a turn hits the output limit
- [#166772](https://github.com/openclaw/openclaw/pull/166772) fix(openai): restore Azure realtime Talk on GA deployments
- [#182901](https://github.com/openclaw/openclaw/pull/182901) fix: restore the Gateway when Doctor receives SIGHUP
- [#182960](https://github.com/openclaw/openclaw/pull/182960) test(core,ui,plugins): remove low-value tests (batch d496)
- [#182857](https://github.com/openclaw/openclaw/pull/182857) perf(ai): avoid loading Google SDK for generic Gateway work
- [#182906](https://github.com/openclaw/openclaw/pull/182906) perf(sessions): share immutable replica publication entries
- [#182936](https://github.com/openclaw/openclaw/pull/182936) refactor(tests): prune duplicate state-read capture cases
- [#182975](https://github.com/openclaw/openclaw/pull/182975) refactor(ui): reuse settings row for pairing accounts
- [#182969](https://github.com/openclaw/openclaw/pull/182969) refactor(ui): consolidate retry action rendering
- [#182955](https://github.com/openclaw/openclaw/pull/182955) perf(runtime): avoid pooled slabs in retained buffers
- [#182863](https://github.com/openclaw/openclaw/pull/182863) perf(ui): show saved conversations before reconnecting
- [#182823](https://github.com/openclaw/openclaw/pull/182823) fix: trusted proxy readiness probes return 403 without forwarded headers
- [#182873](https://github.com/openclaw/openclaw/pull/182873) refactor(time): remove redundant native Intl fallback paths
- [#182974](https://github.com/openclaw/openclaw/pull/182974) fix(sandbox): toolchain scratch blocks workspace recovery
- [#182917](https://github.com/openclaw/openclaw/pull/182917) fix: align bootstrap hardlink safety fixture
- [#182945](https://github.com/openclaw/openclaw/pull/182945) perf(ui): remove redundant first-screen boot work
- [#182964](https://github.com/openclaw/openclaw/pull/182964) refactor: share native selects across settings and activity views
- [#182954](https://github.com/openclaw/openclaw/pull/182954) fix: rate-limited runs fail within seconds and stack identical error cards
- [#182940](https://github.com/openclaw/openclaw/pull/182940) refactor: deslop subagent, runtime and reply fixtures
- [#182908](https://github.com/openclaw/openclaw/pull/182908) fix: keep restart policy checks independent of idle database timers
- [#182821](https://github.com/openclaw/openclaw/pull/182821) fix(memory): PostgreSQL embedding cache eviction scans the whole cache on every write at the cap
- [#182963](https://github.com/openclaw/openclaw/pull/182963) perf(agents): skip unconsumed model stream byte statistics
- [#182850](https://github.com/openclaw/openclaw/pull/182850) fix(update): candidate admission falls back to installed checks when console logging is raised
- [#182883](https://github.com/openclaw/openclaw/pull/182883) perf: avoid extra transactions for pending input lookups
- [#181716](https://github.com/openclaw/openclaw/pull/181716) fix: allow offline model probes to use account SecretRefs
- [#182902](https://github.com/openclaw/openclaw/pull/182902) perf(agents): share remote catalog revisions across worker contexts
- [#182927](https://github.com/openclaw/openclaw/pull/182927) fix: QA flow bundle test runs in clean CI shards
- [#182922](https://github.com/openclaw/openclaw/pull/182922) test(ui,runtime): remove low-value tests (batch d495)
- [#182944](https://github.com/openclaw/openclaw/pull/182944) refactor: deslop Codex, channel and provider fixtures
- [#182818](https://github.com/openclaw/openclaw/pull/182818) fix: allow fetched plugins and Code Mode in AOT builds
- [#182801](https://github.com/openclaw/openclaw/pull/182801) feat(perf): attribute retained compiled code to scripts
- [#182918](https://github.com/openclaw/openclaw/pull/182918) perf(pairing): avoid re-inspecting decoded node snapshots
- [#182952](https://github.com/openclaw/openclaw/pull/182952) fix(agents): preserve discovered models for isolated completions
- [#182948](https://github.com/openclaw/openclaw/pull/182948) perf(status): avoid resummarizing unchanged session stores
- [#182921](https://github.com/openclaw/openclaw/pull/182921) fix: restore SQLite readonly WAL activation fixture
- [#182910](https://github.com/openclaw/openclaw/pull/182910) perf(process): scope Linux PTY cleanup scans to their session
- [#182903](https://github.com/openclaw/openclaw/pull/182903) fix: stabilize cold session mutation reconciliation test
- [#182930](https://github.com/openclaw/openclaw/pull/182930) fix: duplicate replies after agent runs that send files via the message tool
- [#182915](https://github.com/openclaw/openclaw/pull/182915) perf(gateway): avoid duplicate publication environment snapshots
- [#182905](https://github.com/openclaw/openclaw/pull/182905) refactor: deslop CLI, TUI and UI fixtures
- [#182878](https://github.com/openclaw/openclaw/pull/182878) refactor(channels): normalize bundled channel inputs once
- [#182912](https://github.com/openclaw/openclaw/pull/182912) fix: restore package update sync failure coverage
- [#182876](https://github.com/openclaw/openclaw/pull/182876) chore(ui): refresh control ui locales
- [#182894](https://github.com/openclaw/openclaw/pull/182894) refactor: remove redundant Gateway collection copies
- [#182898](https://github.com/openclaw/openclaw/pull/182898) fix(exec): restore Windows S4U commands with Store PowerShell installed
- [#182909](https://github.com/openclaw/openclaw/pull/182909) perf(ui): share visible presentation clocks
- [#182916](https://github.com/openclaw/openclaw/pull/182916) fix: staged exclusive-create test misses pathname substitution
- [#182866](https://github.com/openclaw/openclaw/pull/182866) refactor: deslop Gateway fixtures, model configs and wake seeds
- [#182890](https://github.com/openclaw/openclaw/pull/182890) refactor: remove redundant collection precondition probes
- [#182844](https://github.com/openclaw/openclaw/pull/182844) perf(agents): build session forks only when requested
- [#182911](https://github.com/openclaw/openclaw/pull/182911) perf(infra): reduce worker CPU sampling allocations
- [#155759](https://github.com/openclaw/openclaw/pull/155759) fix(doctor): detect held database aliases before maintenance
- [#182421](https://github.com/openclaw/openclaw/pull/182421) fix(models): warn when policy substitutes the configured default
- [#182884](https://github.com/openclaw/openclaw/pull/182884) refactor: remove redundant channel authority assertions
- [#182885](https://github.com/openclaw/openclaw/pull/182885) test(perf): reproduce Reef audit boot retention
- [#182813](https://github.com/openclaw/openclaw/pull/182813) perf(ui): defer optional chat code until it is needed
- [#182865](https://github.com/openclaw/openclaw/pull/182865) perf(agents): reuse stable tool factory schemas
- [#182856](https://github.com/openclaw/openclaw/pull/182856) fix: validate dynamic schemas without code generation in AOT builds
- [#182598](https://github.com/openclaw/openclaw/pull/182598) fix(codex): admit first reply during app discovery
- [#182870](https://github.com/openclaw/openclaw/pull/182870) test(ui,gateway,plugins): remove low-value tests (batch d492)
- [#182854](https://github.com/openclaw/openclaw/pull/182854) perf(plugins): reuse immutable tool output validation schemas
- [#182764](https://github.com/openclaw/openclaw/pull/182764) refactor: deslop execution, catalog and reply fixtures
- [#182900](https://github.com/openclaw/openclaw/pull/182900) perf(sqlite): limit admission publication on worker exit
- [#182804](https://github.com/openclaw/openclaw/pull/182804) perf(diagnostics-prometheus): release pooled prefix backing stores
- [#182877](https://github.com/openclaw/openclaw/pull/182877) refactor: remove bundled plugin timer capability fallbacks
- [#182880](https://github.com/openclaw/openclaw/pull/182880) refactor: trust normalized command and channel values
- [#114891](https://github.com/openclaw/openclaw/pull/114891) fix(microsoft-foundry): correct limits for new GPT-5 deployments
- [#182849](https://github.com/openclaw/openclaw/pull/182849) refactor: deslop MCP catalogs, ACP handlers and plugin owners
- [#182814](https://github.com/openclaw/openclaw/pull/182814) perf(ui): render only visible content during chat boot
- [#182787](https://github.com/openclaw/openclaw/pull/182787) refactor: deslop channel inputs, transport fixtures and CLI results
- [#182294](https://github.com/openclaw/openclaw/pull/182294) perf(chat): keep startup independent of catalog recovery
- [#182530](https://github.com/openclaw/openclaw/pull/182530) feat(memory-lancedb): add offline table optimization
- [#182864](https://github.com/openclaw/openclaw/pull/182864) test(sessions,ui): remove low-value tests (batch d491)
- [#182852](https://github.com/openclaw/openclaw/pull/182852) test: remove low-value tests (batch d490)
- [#182838](https://github.com/openclaw/openclaw/pull/182838) test(sandbox,sessions,channels): remove low-value tests (batch d489)
- [#182817](https://github.com/openclaw/openclaw/pull/182817) refactor: deslop AI, Doctor and UI fixtures
- [#182861](https://github.com/openclaw/openclaw/pull/182861) ci(live): run the Abliteration live test in scheduled and release live checks
- [#182262](https://github.com/openclaw/openclaw/pull/182262) fix: keep unchanged automation checks out of chat
- [#182851](https://github.com/openclaw/openclaw/pull/182851) refactor: deslop provider, channel and browser fixtures
- [#182253](https://github.com/openclaw/openclaw/pull/182253) perf(sessions): share transcript string storage during hydration
- [#182815](https://github.com/openclaw/openclaw/pull/182815) fix: restore state catalog coverage for current schema inputs
- [#182826](https://github.com/openclaw/openclaw/pull/182826) fix: keep plugin imports from replacing host process functions
- [#182053](https://github.com/openclaw/openclaw/pull/182053) fix(sessions): apply archive retention without cron
- [#182827](https://github.com/openclaw/openclaw/pull/182827) fix(doctor): stop doctor --lint from creating empty PostgreSQL workboard schemas
- [#182802](https://github.com/openclaw/openclaw/pull/182802) perf(skills): share parsed catalog facts across session snapshots
- [#182841](https://github.com/openclaw/openclaw/pull/182841) test(zalo): consolidate API validation cases
- [#182766](https://github.com/openclaw/openclaw/pull/182766) refactor: deslop runtime, worktree and UI fixtures
- [#182825](https://github.com/openclaw/openclaw/pull/182825) perf(ui): paint the chat frame before application assets load
- [#182853](https://github.com/openclaw/openclaw/pull/182853) chore(release): update appcast for 2026.10.7
- [#182830](https://github.com/openclaw/openclaw/pull/182830) fix(database): report the credential receipt mismatch in database port preflight
- [#182824](https://github.com/openclaw/openclaw/pull/182824) fix(agents): save automations with malformed job wrappers
- [#182807](https://github.com/openclaw/openclaw/pull/182807) fix(plugins): isolate config format validation
- [#182835](https://github.com/openclaw/openclaw/pull/182835) refactor: deslop runner, subagent and reply fixture owners
- [#182819](https://github.com/openclaw/openclaw/pull/182819) fix: restore worker environment session test boundaries
- [#182460](https://github.com/openclaw/openclaw/pull/182460) fix(memory): support query instructions for local embedding aliases
- [#182795](https://github.com/openclaw/openclaw/pull/182795) fix(ui): pending chat sends kept only in memory get stranded or hidden after reconnect
- [#182677](https://github.com/openclaw/openclaw/pull/182677) perf(diagnostics): reuse immutable event snapshots
- [#182794](https://github.com/openclaw/openclaw/pull/182794) test(diagnostics,slack,models): remove low-value tests (batch d487)
- [#182484](https://github.com/openclaw/openclaw/pull/182484) fix: preserve fetched plugin loading in standalone builds
- [#182816](https://github.com/openclaw/openclaw/pull/182816) test: remove low-value tests (batch d488)
- [#182796](https://github.com/openclaw/openclaw/pull/182796) refactor(ui): share native settings select rendering
- [#79832](https://github.com/openclaw/openclaw/pull/79832) fix(feishu): quick-action and confirmation cards fail to send
- [#182803](https://github.com/openclaw/openclaw/pull/182803) refactor: deslop method clients, placement claims and infra fixtures
- [#182789](https://github.com/openclaw/openclaw/pull/182789) fix(sandbox): resume turns after protected mount additions on upgrade
- [#182822](https://github.com/openclaw/openclaw/pull/182822) fix(config): allow offline database config edits when plugin state exists
- [#182311](https://github.com/openclaw/openclaw/pull/182311) fix(sessions): reject malformed numeric session metadata
- [#182500](https://github.com/openclaw/openclaw/pull/182500) fix: hide partial tool markers before native tool calls
- [#182799](https://github.com/openclaw/openclaw/pull/182799) test(ui): drain catalog asset reads before navigation
- [#182780](https://github.com/openclaw/openclaw/pull/182780) fix(gateway): title-source test fails after config snapshot capture
- [#182800](https://github.com/openclaw/openclaw/pull/182800) fix(ui): remove unused model provider fixture
- [#182770](https://github.com/openclaw/openclaw/pull/182770) test(gateway,ui,agents): remove low-value tests (batch d485)
- [#182788](https://github.com/openclaw/openclaw/pull/182788) test(gateway,agents,plugins): remove low-value tests (batch d486)
- [#182793](https://github.com/openclaw/openclaw/pull/182793) fix(ui): remove retired quota reset formatter
- [#182454](https://github.com/openclaw/openclaw/pull/182454) fix(agents): withhold reasoning tags before streaming replies
- [#182703](https://github.com/openclaw/openclaw/pull/182703) test(agents,gateway,commands,infra): remove low-value tests (batch d477)
- [#182237](https://github.com/openclaw/openclaw/pull/182237) perf: wake durable ingress from committed work
- [#182765](https://github.com/openclaw/openclaw/pull/182765) test(browser): reuse proxy environment snapshots
- [#182768](https://github.com/openclaw/openclaw/pull/182768) refactor: deslop channel formatting, browser owners and provider handoffs
- [#182774](https://github.com/openclaw/openclaw/pull/182774) fix(update): explain what holds a blocked update
- [#182676](https://github.com/openclaw/openclaw/pull/182676) perf(plugins): defer unused invocation binding caches
- [#182762](https://github.com/openclaw/openclaw/pull/182762) fix: let owners ask the agent to maintain its own gateway
- [#182760](https://github.com/openclaw/openclaw/pull/182760) test(talk,agents,qa): remove low-value tests (batch d484)
- [#182777](https://github.com/openclaw/openclaw/pull/182777) fix(ui): restore workspace clipboard and native header E2E coverage
- [#182439](https://github.com/openclaw/openclaw/pull/182439) fix(feishu): explain denied group control commands
- [#182763](https://github.com/openclaw/openclaw/pull/182763) refactor: deslop daemon results, migration locks and schema fixtures
- [#182756](https://github.com/openclaw/openclaw/pull/182756) test(auto-reply,gateway,cli,ui): remove low-value tests (batch d483)
- [#182434](https://github.com/openclaw/openclaw/pull/182434) fix(codex): refresh context usage after compaction
- [#182734](https://github.com/openclaw/openclaw/pull/182734) test(core,ui): remove low-value tests (batch d480)
- [#182737](https://github.com/openclaw/openclaw/pull/182737) test(agents,gateway,chat): remove low-value tests (batch d481)
- [#182749](https://github.com/openclaw/openclaw/pull/182749) refactor: deslop policy, channel and provider test fixtures
- [#182667](https://github.com/openclaw/openclaw/pull/182667) perf(agents): release completed steering request closures
- [#182673](https://github.com/openclaw/openclaw/pull/182673) refactor: deslop transport, generation and Codex fixtures
- [#182751](https://github.com/openclaw/openclaw/pull/182751) refactor: deslop gateway frames, placement and config fixtures
- [#182752](https://github.com/openclaw/openclaw/pull/182752) perf(gateway): keep input replay metadata off the chat wire
- [#182433](https://github.com/openclaw/openclaw/pull/182433) fix(gateway): keep channel restart after exited-run cancellation
- [#182732](https://github.com/openclaw/openclaw/pull/182732) refactor: deslop browser, provider and channel fixtures
- [#182745](https://github.com/openclaw/openclaw/pull/182745) test(msteams): reuse ingress state cleanup fixture
- [#182725](https://github.com/openclaw/openclaw/pull/182725) test(runtime,ui): remove low-value tests (batch d479)
- [#182739](https://github.com/openclaw/openclaw/pull/182739) refactor: deslop worker, transport and UI fixtures
- [#182690](https://github.com/openclaw/openclaw/pull/182690) refactor: deslop native entrypoints, PostgreSQL and package fixtures
- [#182740](https://github.com/openclaw/openclaw/pull/182740) test(cli,gateway): remove low-value tests (batch d482)
- [#182743](https://github.com/openclaw/openclaw/pull/182743) refactor: deslop MCP, spawn and reply fixtures
- [#182735](https://github.com/openclaw/openclaw/pull/182735) fix(gateway): avoid rejected continuations during concurrent recovery
- [#182370](https://github.com/openclaw/openclaw/pull/182370) refactor: deslop plugin recipes, prepared arguments and stylesheet clones
- [#182618](https://github.com/openclaw/openclaw/pull/182618) refactor: deslop config snapshots, Gateway fixtures and database cleanup
- [#182425](https://github.com/openclaw/openclaw/pull/182425) fix(media): guard generated video result downloads
- [#182423](https://github.com/openclaw/openclaw/pull/182423) fix(feishu): admit controls during active turns

#### 🐛 New Issues
- [#182476](https://github.com/openclaw/openclaw/issues/182476) [Windows] update repair fails with OPENCLAW_STATE_LEASE_LOST and gateway readiness is slow/unstable `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬10
- [#182712](https://github.com/openclaw/openclaw/issues/182712) [Feature]: Limit-aware model fallback — skip candidates on an exhausted provider account and prefer a different provider `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬7
- [#182549](https://github.com/openclaw/openclaw/issues/182549) [Bug]: First message in fresh Codex dashboard conversation fails with claimed-work error before turn/start `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#182744](https://github.com/openclaw/openclaw/issues/182744) [Bug]: chat.send follow-up fails: Session read batch cannot reenter an active SQLite writer admission `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬4
- [#182547](https://github.com/openclaw/openclaw/issues/182547) Gateway stays broken with `SQLite read-only worker scope closed` after `main-session startup orphan marking` worker timeout (2026.10.6, Windows) `bug` `regression` `clawsweeper:needs-live-repro` `impact:auth-provider` 💬4
- [#182178](https://github.com/openclaw/openclaw/issues/182178) [Bug]: Reasoning-only retry prompt is refused by Anthropic as reasoning_extraction on claude-opus-5-5 (anthropic-messages) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#182683](https://github.com/openclaw/openclaw/issues/182683) [Bug]: SIGTERM during doctor --fix leaves the managed Gateway stopped (2026.10.7) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬3
- [#182634](https://github.com/openclaw/openclaw/issues/182634) [Bug] 2026.10.6: mid-turn tool-result truncation followed by transcript-projection errors aborts recovery `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#182616](https://github.com/openclaw/openclaw/issues/182616) [Bug]: Managed update spends minutes copying/hashing SQLite state (profile and scaling measurements) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#182326](https://github.com/openclaw/openclaw/issues/182326) [Bug]: transient 'database is locked' in deferred agent-DB startup migration leaves the agent degraded until restart (no retry) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#182629](https://github.com/openclaw/openclaw/issues/182629) Update failure: candidate-state-snapshot (2026.9.6) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#183036](https://github.com/openclaw/openclaw/issues/183036) Gateway startup: ~40 s main-thread agent-DB reservations (1 direct + 3 worker) per boot since 2026.10.5 (ready 105 s → 150 s), still on 2026.10.7 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#183056](https://github.com/openclaw/openclaw/issues/183056) [Bug]: Reloading a Control UI session address carrying __openclawSessionKey returns a bare 404 "Not found" `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#183005](https://github.com/openclaw/openclaw/issues/183005) [Bug]: Failover classifier defaults a 400 with a redaction-destroyed body to format, forcing a model-swap recovery instead of overflow recovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#182967](https://github.com/openclaw/openclaw/issues/182967) Update failure: invalid-config (2026.10.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#182652](https://github.com/openclaw/openclaw/issues/182652) [Bug]: Windows gateway under a scheduled task with S4U logon cannot spawn child processes (exec fails with EPERM; Interactive logon works) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#182143](https://github.com/openclaw/openclaw/issues/182143) [Bug]: memory search sqlite-vec KNN recomputes vec_distance_cosine per candidate (~1 s per query on a 650-vector index) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#182685](https://github.com/openclaw/openclaw/issues/182685) [Feature]: Bind source-version dependencies to derived actions, separately from execution permission `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:session-state` 💬2
- [#182723](https://github.com/openclaw/openclaw/issues/182723) iOS app: node auth fails while UI reports "Connected"; duplicate gateway entries; no legible connection state `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#182748](https://github.com/openclaw/openclaw/issues/182748) [Bug]: openclaw update always fails with gateway-stop-unverified on Windows when the gateway runs in a foreground terminal `P3` `impact:ux-friction` 💬2
- [#182738](https://github.com/openclaw/openclaw/issues/182738) [Bug]: Doctor cold admission checks repeatedly hash SQLite state during repair preparation (2026.10.7) `P1` `impact:crash-loop` `maturity:stable` 💬2
- [#182699](https://github.com/openclaw/openclaw/issues/182699) [Feature]: Opt-in zstd compression for openclaw backup archives `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#182696](https://github.com/openclaw/openclaw/issues/182696) Update failure: managed-service-handoff-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬2
- [#182604](https://github.com/openclaw/openclaw/issues/182604) [Regression]: Discord ack reaction fires after session record instead of on receipt (~3s delay since 2026.10.x) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#182567](https://github.com/openclaw/openclaw/issues/182567) Explicit package update checks should discover a fresh release `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#182586](https://github.com/openclaw/openclaw/issues/182586) Update failure: package-install-omit-optional (2026.9.8) `P0` `impact:ux-release-blocker` 💬2
- [#182497](https://github.com/openclaw/openclaw/issues/182497) [Feature]: Skills: executable-bound credentials with child-only environment injection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#182315](https://github.com/openclaw/openclaw/issues/182315) [Feature]: Support Google Gemini Omni Flash for video_generate (Veo 3.1 Preview retired) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#182467](https://github.com/openclaw/openclaw/issues/182467) [Bug]: Project-parent sessions_spawn fails model validation while models.list reports available models (2026.10.6) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#182624](https://github.com/openclaw/openclaw/issues/182624) [Bug]: Telegram ask_user question is dropped when the progress draft is retired concurrently `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#182395](https://github.com/openclaw/openclaw/issues/182395) Add DemonRoute as a custom provider option `clawsweeper:intake:docs` 💬1
- [#182805](https://github.com/openclaw/openclaw/issues/182805) [Bug]: PostgreSQL agent session loads open a new database connection on every read (~116 ms vs ~4 ms on SQLite) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183049](https://github.com/openclaw/openclaw/issues/183049) [Bug]: Telegram delegated sessions_send browser status loses operator.admin scope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#183048](https://github.com/openclaw/openclaw/issues/183048) Outbound queue: no CLI to inspect/settle unknown_after_send entries (Slack channel_not_found / no durable marker) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183031](https://github.com/openclaw/openclaw/issues/183031) [Bug]: Android reports a superseded chat.metadata read as a model-refresh failure `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183025](https://github.com/openclaw/openclaw/issues/183025) Update failure: package-install-omit-optional (2026.10.4) `P0` `impact:ux-release-blocker` 💬1
- [#183021](https://github.com/openclaw/openclaw/issues/183021) macOS app terminates itself ~15-30s after connecting to a remote Gateway (2026.10.7, macOS 26) — related to #89162 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#182886](https://github.com/openclaw/openclaw/issues/182886) [Bug]: Memory rebuild after `database port --family agent` re-embeds every chunk when the embedding cache is at its cap, though most vectors are cached `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#182638](https://github.com/openclaw/openclaw/issues/182638) Operator role: agents.list returns a defaultId outside the role's allowed agents; Android app then sends to a forbidden agent `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182981](https://github.com/openclaw/openclaw/issues/182981) [Bug]: Rejected sessions_yield terminates the run with gateway-injected "⚠️ Yield failed"; child completion and automation delivery lose the real report `P2` `impact:session-state` `impact:message-loss` 💬1
- [#182798](https://github.com/openclaw/openclaw/issues/182798) /readyz returns 403 proxy_attribution_required to a trusted proxy's health probe `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182808](https://github.com/openclaw/openclaw/issues/182808) [Bug]: PostgreSQL memory embedding cache eviction seq-scans and sorts the whole cache on every call at the cap; `ORDER BY updated_at ASC` cannot use the `NULLS FIRST` index `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182966](https://github.com/openclaw/openclaw/issues/182966) [Feature]: Apply existing pronunciation dictionaries in ElevenLabs TTS `P3` 💬1
- [#182950](https://github.com/openclaw/openclaw/issues/182950) [Bug]: Codex persistence suppression omits the real user request from agent_end observers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182946](https://github.com/openclaw/openclaw/issues/182946) Add a tool-free realtime agent consult policy `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#182920](https://github.com/openclaw/openclaw/issues/182920) [Bug] `decision_evaluate` rejects a manifest-conformant call pre-dispatch (`unavailable / unsupported-input`) on 2026.10.7 — OpenRouter Jev route `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#182914](https://github.com/openclaw/openclaw/issues/182914) [Bug]: Windows MSIX 2026.10.6: Codex preparation stalls and unconfirmed chat delivery `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#182474](https://github.com/openclaw/openclaw/issues/182474) [Bug]: Control UI text /reset drops non-worktree project association and execution directory (2026.10.6) `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#182891](https://github.com/openclaw/openclaw/issues/182891) [Bug]: Prompt cache never reused — `cache read dropped N -> 0` on every request (envelope rewrites, runtimeContextCarrier changes, and unexplained within-turn drops) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#182869](https://github.com/openclaw/openclaw/issues/182869) [Feature]: Wrap-up reserve before timeoutSeconds, and expose the run deadline to plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#182771](https://github.com/openclaw/openclaw/issues/182771) [Bug]: `doctor --lint` creates a new empty PostgreSQL workboard schema on every run when Workboard is on PostgreSQL `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182773](https://github.com/openclaw/openclaw/issues/182773) [Bug]: database port preflight reports "validation or I/O failure" when the real cause is a local credential receipt bound to another file `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182831](https://github.com/openclaw/openclaw/issues/182831) [Feature]: Let authenticated Android admins manage automations from chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#182842](https://github.com/openclaw/openclaw/issues/182842) [Feature]: Nemotron embedding task prefixes (query:/passage:) and a config override for aliased embedding models `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#182840](https://github.com/openclaw/openclaw/issues/182840) Bug: Heartbeat routine outputs visible NO_RPLY text in direct chats `P2` `impact:ux-friction` 💬1
- [#182837](https://github.com/openclaw/openclaw/issues/182837) Feature request: show message timestamps in Control UI chat `P3` `impact:ux-friction` 💬1
- [#182834](https://github.com/openclaw/openclaw/issues/182834) [Bug]: Repetition guard (#173844) lets a multi-line loop run to 90% of a 212k-char reply `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#182833](https://github.com/openclaw/openclaw/issues/182833) computer tool: Gateway desktop provider can never register (commandAllowlist suppresses computerUse) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#182829](https://github.com/openclaw/openclaw/issues/182829) [Feature]: WhatsApp: expose owner-sent (fromMe) direct messages to plugins, without routing them to the agent `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#182828](https://github.com/openclaw/openclaw/issues/182828) [Bug]: claude-cli system prompt drifts per inbound source (telegram/webchat/sessions_send/cron) → full prompt-cache rewrite on most turns `P2` `impact:other` 💬1
- [#182769](https://github.com/openclaw/openclaw/issues/182769) [Bug]: offline `config set database.*` fails with "Config-only ownership does not admit database access" when plugins.entries is set and a state DB exists `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182810](https://github.com/openclaw/openclaw/issues/182810) [Bug]: PostgreSQL turn commit makes 24 blocking bridge round trips per two-message turn (about 6x slower than SQLite) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#182797](https://github.com/openclaw/openclaw/issues/182797) [Bug] Subagent completion announce perma-dropped when all retries land inside the parent's post-turn compaction write-lock window → orphaned sessions_yield / silent job stall `P2` `impact:session-state` `impact:message-loss` 💬1
- [#182786](https://github.com/openclaw/openclaw/issues/182786) [Bug]: OAuth profile remains in 30-day cooldown after ChatGPT Go to Plus upgrade `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#182761](https://github.com/openclaw/openclaw/issues/182761) [Bug]: Control UI E2E fails on main since #182599 (workspace header chip hidden, native header 48px) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182106](https://github.com/openclaw/openclaw/issues/182106) [Bug]: Workshop transcript-context refusal reason is lost across worker transport `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#182772](https://github.com/openclaw/openclaw/issues/182772) [Feature]: `backup restore` option to import PostgreSQL stores into a different connection (staging DB) than the archived config's `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#182758](https://github.com/openclaw/openclaw/issues/182758) Feature: openclaw presence query (people/devices via presence.query) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#182757](https://github.com/openclaw/openclaw/issues/182757) [Bug]: claude-cli runner persists the final reply twice when the turn has text before a tool call `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#182750](https://github.com/openclaw/openclaw/issues/182750) False positive: ENV_ASSIGNMENT_REDACT_PATTERN redacts values after NOPASSWD: in sudoers commands `P2` `impact:ux-friction` 💬1
- [#182747](https://github.com/openclaw/openclaw/issues/182747) [Bug]: Heartbeat turns become owner turns when commands.ownerAllowFrom names the DM they deliver to `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#182728](https://github.com/openclaw/openclaw/issues/182728) [Bug]: Model refresh is reported as failed when an Anthropic model is configured but the Claude CLI is not installed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#182694](https://github.com/openclaw/openclaw/issues/182694) Signal channel: native/SSE transport silently receives nothing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182726](https://github.com/openclaw/openclaw/issues/182726) [Bug] Linux 2026.9.8: after dirty shutdown, model catalog stays 'not ready' for 5.5h+; Control UI mislabels it as 'Workspace connection dropped' with re-auth prompts `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#182722](https://github.com/openclaw/openclaw/issues/182722) Update failure: package-install-omit-optional (2026.10.5) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#182721](https://github.com/openclaw/openclaw/issues/182721) [Bug]: openclaw update repair still refuses on 2026.10.7 — protected DefenderSessionHelper.exe counted as an unverified descendant `P1` `impact:ux-friction` 💬1
- [#182718](https://github.com/openclaw/openclaw/issues/182718) Allow operators to enable <final>-tag enforcement for native-reasoning providers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#182715](https://github.com/openclaw/openclaw/issues/182715) [Feature]: Read the resolved default agent model through Gateway RPC `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#182711](https://github.com/openclaw/openclaw/issues/182711) Talk (realtime voice) consult turns never reach the Claude CLI backend session: the agent acts on stale context `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#182708](https://github.com/openclaw/openclaw/issues/182708) Telegram inline callback taps in forum topics are spooled but never dispatched (no error), 2026.10.4 `P2` `impact:message-loss` 💬1
- [#182693](https://github.com/openclaw/openclaw/issues/182693) plugin-sdk/security-runtime: export detectSuspiciousPatterns `security` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#182691](https://github.com/openclaw/openclaw/issues/182691) before_dispatch hook context lacks the originating gateway connId `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#182689](https://github.com/openclaw/openclaw/issues/182689) [Bug]: Control UI avatar fetch shows initials when Bearer candidates 401 instead of falling back to same-origin (Tailscale) auth `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#182688](https://github.com/openclaw/openclaw/issues/182688) [Bug]: Agent avatars stored as data URLs 404 in session owner/participant avatars (bare /avatar/<id> URL) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182682](https://github.com/openclaw/openclaw/issues/182682) [Feature]: Workboard: allow a new attempt on a card after review without clearing its completed session `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#182680](https://github.com/openclaw/openclaw/issues/182680) [Bug]: Windows Gateway 2026.10.6 – Codex tool calls abort, SQLite contention and severe delays `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#182663](https://github.com/openclaw/openclaw/issues/182663) google-meet: Meet's /meet/<code> URL rewrite breaks transcripts, recovery, and audio ownership `no-stale` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#182659](https://github.com/openclaw/openclaw/issues/182659) [Performance regression][2026.10.5] agent exec stalls before inference: slow database admission and ACP session reads (Ubuntu 24.04 WSL2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#182657](https://github.com/openclaw/openclaw/issues/182657) [Bug]: One slow account delays queued recovery on healthy channels `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#182654](https://github.com/openclaw/openclaw/issues/182654) Anthropic-compatible stop_reason "sensitive" becomes unknown error instead of provider refusal `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#182649](https://github.com/openclaw/openclaw/issues/182649) Current-session cron completions are invisible to CLI runtimes (claude-cli) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#182642](https://github.com/openclaw/openclaw/issues/182642) Feature: `openclaw sessions processes list|stop` (expose sessions.processes.*) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#182647](https://github.com/openclaw/openclaw/issues/182647) Cloud-worker turns fail before inference: "Session capability metadata requires worker preparation" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#182640](https://github.com/openclaw/openclaw/issues/182640) Feature: `openclaw backup status` (ledger + schedules + storage locations) `P3` `clawsweeper:no-new-fix-pr` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#182637](https://github.com/openclaw/openclaw/issues/182637) [Bug]: `skills.allowBundled: []` allows every bundled skill, while the docs say only listed ones are eligible (follow-up to #21709) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#182635](https://github.com/openclaw/openclaw/issues/182635) [Bug]: plugins uninstall of a stale install record: live plugin disabled, SQLite snapshot staging crash, plugin-captures deleted, plugins.reload locked `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#182614](https://github.com/openclaw/openclaw/issues/182614) Bug: openclaw pairing approve via docker compose exec times out (ETIMEDOUT) despite healthy gateway, then fails silently `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#182602](https://github.com/openclaw/openclaw/issues/182602) [Bug]: Android realtime Talk ends with "request timeout" when one audio append goes unanswered for 8 seconds `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#182607](https://github.com/openclaw/openclaw/issues/182607) [Bug]: Codex follow-ups time out in thread-lifecycle after 600s with no pending app-server requests (2026.10.6, macOS) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#182558](https://github.com/openclaw/openclaw/issues/182558) Updates settings: coordinated Gateway and companion app experience `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#182591](https://github.com/openclaw/openclaw/issues/182591) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#182579](https://github.com/openclaw/openclaw/issues/182579) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#182297](https://github.com/openclaw/openclaw/issues/182297) [Bug]: WhatsApp media message(send) to the current DM is not counted as a source reply (delivered toJid is @lid), so a trailing NO_REPLY fails as empty_response with a false "couldn't finish this request" notice `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182568](https://github.com/openclaw/openclaw/issues/182568) Expose truthful companion app update status and capabilities in the Dashboard `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#182566](https://github.com/openclaw/openclaw/issues/182566) CI: ios-build Watch simulator step hangs until hosted runner is lost `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#182562](https://github.com/openclaw/openclaw/issues/182562) [Bug]: JSON-like prose in streamed replies blocks the Gateway for seconds `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182559](https://github.com/openclaw/openclaw/issues/182559) [Feature]: Keyboard shortcut to jump to the next session waiting for me `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#182555](https://github.com/openclaw/openclaw/issues/182555) [Bug]: Control UI sends mcp.app.discover with the new sessionKey and a stale agentId while switching sessions (FORBIDDEN in the Gateway log) `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182541](https://github.com/openclaw/openclaw/issues/182541) fix(diagnostics): tool error spans don't say whether a tool failed, was cancelled or timed out `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#182537](https://github.com/openclaw/openclaw/issues/182537) ClawHub child rejects parent waiting at its own approval gate (wait_for_clawhub=false race) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#182529](https://github.com/openclaw/openclaw/issues/182529) Update failure: package-install-omit-optional (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#182527](https://github.com/openclaw/openclaw/issues/182527) [Bug]: macOS app dashboard stays blank after WebKit WebContent crash (no reload); New session triggers WebKit AX crash on macOS 26.1 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182526](https://github.com/openclaw/openclaw/issues/182526) [Bug]: Markdown links and inline Context: in streamed replies re-scan inbound metadata on every delta (8.6-10.9 s at 256 KiB) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182518](https://github.com/openclaw/openclaw/issues/182518) [Bug]: llama-cpp: `openclaw agent exec` temp state rewrites the shared managed preset, breaking Gateway local embeddings (HTTP 500 "failed to load") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#182519](https://github.com/openclaw/openclaw/issues/182519) [Bug]: provider-local-service discards service stderr after /health readiness, hiding llama.cpp router model-load failures `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#182520](https://github.com/openclaw/openclaw/issues/182520) [Bug]: managed local model service has no cross-process ownership: CLI and headless processes start or adopt the Gateway llama-server on the same port `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#182488](https://github.com/openclaw/openclaw/issues/182488) Update failure: target-metadata-preflight (2026.9.4) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#182487](https://github.com/openclaw/openclaw/issues/182487) [Bug]: Telegram final reply is not dispatched after session-writer change; continuation hits keyed-user assertion `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1

#### 🔒 Closed Issues
- [#96675](https://github.com/openclaw/openclaw/issues/96675) Owner-signed responsibility gates for assistant memory, actions, skills, and evidence reuse
- [#181619](https://github.com/openclaw/openclaw/issues/181619) [Bug] Codex app-server execution-budget timeout regression after 2026.10.5 -> 2026.10.6 upgrade; every primary turn fails and falls back silently
- [#135858](https://github.com/openclaw/openclaw/issues/135858) opencode-go local catalog snapshot doesn't project provider.npm→api override, breaking muse-spark-1.2-contributor and omitting mimo-v2.5
- [#181660](https://github.com/openclaw/openclaw/issues/181660) [Bug]: Error: Session read batch cannot reenter an active SQLite writer admission
- [#42803](https://github.com/openclaw/openclaw/issues/42803) [Bug]: Feishu text commands (/stop, /new, /status) no longer bypass queue during active agent run (3.8 regression)
- [#119914](https://github.com/openclaw/openclaw/issues/119914) [Bug]: Fastmail MCP OAuth code exchange repeatedly fails with invalid_request invalid signing_id
- [#176301](https://github.com/openclaw/openclaw/issues/176301) [Bug]: memory.search.extraPaths files are indexed but never surface in content search (ranked at the bottom)
- [#147181](https://github.com/openclaw/openclaw/issues/147181) memory: textual query-only instruction for instruction-aware embedding models (remainder of #58765)
- [#79824](https://github.com/openclaw/openclaw/issues/79824) feishu: card V2 schema rejects deprecated `action` container — exec/plugin approval cards fail with code 230099
- [#49915](https://github.com/openclaw/openclaw/issues/49915) [Bug]: Feishu group chat: slash commands like /new, /status, and /model do not work and may lose message content
- [#103520](https://github.com/openclaw/openclaw/issues/103520) Silent, un-warned substitution to the paid catalog default when a configured model isn't in the allowlist
- [#182549](https://github.com/openclaw/openclaw/issues/182549) [Bug]: First message in fresh Codex dashboard conversation fails with claimed-work error before turn/start
- [#66263](https://github.com/openclaw/openclaw/issues/66263) [Bug]: Codex native compaction can leave post-compaction context usage stale or unknown
- [#109659](https://github.com/openclaw/openclaw/issues/109659) Channel auto-restart is lost silently when the abort signal races the backoff sleep (empty catch swallows the rejection)
- [#103083](https://github.com/openclaw/openclaw/issues/103083) Video-generation providers fetch the result URL with no SSRF guard (byteplus, minimax, xai, runway, vydra)
- [#89254](https://github.com/openclaw/openclaw/issues/89254) Matrix channel: inbound DMs intermittently not dispatched to agent; no reply delivery; cross-user verification cannot complete (E2EE, self-hosted homeserver)
- [#62438](https://github.com/openclaw/openclaw/issues/62438) [Bug]: security audit "config.secrets.hooks_token_in_config" fires for ${VAR} env refs because the check runs on the resolved config
- [#182547](https://github.com/openclaw/openclaw/issues/182547) Gateway stays broken with `SQLite read-only worker scope closed` after `main-session startup orphan marking` worker timeout (2026.10.6, Windows)
- [#38601](https://github.com/openclaw/openclaw/issues/38601) [Bug] PTY silently disabled in sandbox mode without warning when pty:true is set
- [#147701](https://github.com/openclaw/openclaw/issues/147701) [Bug]: Robinhood MCP session DELETE returns 400 after successful catalog discovery
- [#9607](https://github.com/openclaw/openclaw/issues/9607) Himalaya skill: missing email formatting philosophy and incorrect command syntax
- [#142003](https://github.com/openclaw/openclaw/issues/142003) [Bug]: GitHub OAuth identity blocks exec despite credentialState=available
- [#166773](https://github.com/openclaw/openclaw/issues/166773) Azure realtime Talk input transcription requires configurable deployment
- [#89473](https://github.com/openclaw/openclaw/issues/89473) [Bug]: Reasoning tokens leak to chat channels when models stream interleaved text/thinking blocks
- [#95895](https://github.com/openclaw/openclaw/issues/95895) [Security]: GEMINI_API_KEY written as a plaintext literal in the generated systemd service unit
- [#38604](https://github.com/openclaw/openclaw/issues/38604) [Security] Sandbox containers have no default pidsLimit - vulnerable to fork bomb attacks
- [#182629](https://github.com/openclaw/openclaw/issues/182629) Update failure: candidate-state-snapshot (2026.9.6)
- [#84627](https://github.com/openclaw/openclaw/issues/84627) [Bug]: xAI image_generate blocked by SSRF — resolveAllowPrivateNetwork hardcoded to false in extensions/xai/image-generation-provider.ts
- [#164433](https://github.com/openclaw/openclaw/issues/164433) [Feature]: Versioned Upgrade Recipes with qualified execution and recovery
- [#178560](https://github.com/openclaw/openclaw/issues/178560) [Bug]: Cloud-worker exec with tools.exec.mode=auto dials ws://127.0.0.1:18789 on the worker and fails
- [#182652](https://github.com/openclaw/openclaw/issues/182652) [Bug]: Windows gateway under a scheduled task with S4U logon cannot spawn child processes (exec fails with EPERM; Interactive logon works)
- [#157280](https://github.com/openclaw/openclaw/issues/157280) memory-lancedb: no native compaction — table fragments accumulate and ltm has no optimize command
- [#182748](https://github.com/openclaw/openclaw/issues/182748) [Bug]: openclaw update always fails with gateway-stop-unverified on Windows when the gateway runs in a foreground terminal
- [#182738](https://github.com/openclaw/openclaw/issues/182738) [Bug]: Doctor cold admission checks repeatedly hash SQLite state during repair preparation (2026.10.7)
- [#182696](https://github.com/openclaw/openclaw/issues/182696) Update failure: managed-service-handoff-unavailable (2026.9.4)
- [#94425](https://github.com/openclaw/openclaw/issues/94425) [Security/Bug] Sandbox 'skills' directory lacks initial read-only protection if host directory is missing upon agent creation
- [#93408](https://github.com/openclaw/openclaw/issues/93408) fix(whatsapp): inbound access denials only logged at verbose, so allowlist/policy drops are silent on default config
- [#112050](https://github.com/openclaw/openclaw/issues/112050) Gemini schema cleanup can leave array-valued type fields
- [#111620](https://github.com/openclaw/openclaw/issues/111620) [Bug]: Windows file tools misresolve POSIX drive paths
- [#182586](https://github.com/openclaw/openclaw/issues/182586) Update failure: package-install-omit-optional (2026.9.8)
- [#181956](https://github.com/openclaw/openclaw/issues/181956) [Bug]: system prompt tells the model the owner can send `/update`, also when `commands.text` and `commands.restart` are false
- [#182624](https://github.com/openclaw/openclaw/issues/182624) [Bug]: Telegram ask_user question is dropped when the progress draft is retired concurrently
- [#182805](https://github.com/openclaw/openclaw/issues/182805) [Bug]: PostgreSQL agent session loads open a new database connection on every read (~116 ms vs ~4 ms on SQLite)
- [#183025](https://github.com/openclaw/openclaw/issues/183025) Update failure: package-install-omit-optional (2026.10.4)
- [#182886](https://github.com/openclaw/openclaw/issues/182886) [Bug]: Memory rebuild after `database port --family agent` re-embeds every chunk when the embedding cache is at its cap, though most vectors are cached
- [#182638](https://github.com/openclaw/openclaw/issues/182638) Operator role: agents.list returns a defaultId outside the role's allowed agents; Android app then sends to a forbidden agent
- [#138552](https://github.com/openclaw/openclaw/issues/138552) [Bug]: Native approvals retain old configuration after hot reload
- [#166776](https://github.com/openclaw/openclaw/issues/166776) Azure Realtime Talk still targets retired preview endpoint
- [#182981](https://github.com/openclaw/openclaw/issues/182981) [Bug]: Rejected sessions_yield terminates the run with gateway-injected "⚠️ Yield failed"; child completion and automation delivery lose the real report
- [#182798](https://github.com/openclaw/openclaw/issues/182798) /readyz returns 403 proxy_attribution_required to a trusted proxy's health probe
- [#181686](https://github.com/openclaw/openclaw/issues/181686) [Bug]: Offline models status --probe cannot materialize account-owned SecretRefs
- [#182808](https://github.com/openclaw/openclaw/issues/182808) [Bug]: PostgreSQL memory embedding cache eviction seq-scans and sorts the whole cache on every call at the cap; `ORDER BY updated_at ASC` cannot use the `NULLS FIRST` index
- [#182474](https://github.com/openclaw/openclaw/issues/182474) [Bug]: Control UI text /reset drops non-worktree project association and execution directory (2026.10.6)
- [#181976](https://github.com/openclaw/openclaw/issues/181976) [Bug]: `session.maintenance.resetArchiveRetention` is silently not applied when cron is disabled
- [#182771](https://github.com/openclaw/openclaw/issues/182771) [Bug]: `doctor --lint` creates a new empty PostgreSQL workboard schema on every run when Workboard is on PostgreSQL
- [#182773](https://github.com/openclaw/openclaw/issues/182773) [Bug]: database port preflight reports "validation or I/O failure" when the real cause is a local credential receipt bound to another file
- [#182840](https://github.com/openclaw/openclaw/issues/182840) Bug: Heartbeat routine outputs visible NO_RPLY text in direct chats
- [#182837](https://github.com/openclaw/openclaw/issues/182837) Feature request: show message timestamps in Control UI chat
- [#182828](https://github.com/openclaw/openclaw/issues/182828) [Bug]: claude-cli system prompt drifts per inbound source (telegram/webchat/sessions_send/cron) → full prompt-cache rewrite on most turns
- [#182769](https://github.com/openclaw/openclaw/issues/182769) [Bug]: offline `config set database.*` fails with "Config-only ownership does not admit database access" when plugins.entries is set and a state DB exists
- [#178206](https://github.com/openclaw/openclaw/issues/178206) [Bug]: Qwen/vLLM partial tool markers leak into text events before native tool calls (2026.10.5)
- [#182797](https://github.com/openclaw/openclaw/issues/182797) [Bug] Subagent completion announce perma-dropped when all retries land inside the parent's post-turn compaction write-lock window → orphaned sessions_yield / silent job stall
- [#182761](https://github.com/openclaw/openclaw/issues/182761) [Bug]: Control UI E2E fails on main since #182599 (workspace header chip hidden, native header 48px)
- [#182757](https://github.com/openclaw/openclaw/issues/182757) [Bug]: claude-cli runner persists the final reply twice when the turn has text before a tool call
- [#182750](https://github.com/openclaw/openclaw/issues/182750) False positive: ENV_ASSIGNMENT_REDACT_PATTERN redacts values after NOPASSWD: in sudoers commands
- [#182722](https://github.com/openclaw/openclaw/issues/182722) Update failure: package-install-omit-optional (2026.10.5)
- [#182721](https://github.com/openclaw/openclaw/issues/182721) [Bug]: openclaw update repair still refuses on 2026.10.7 — protected DefenderSessionHelper.exe counted as an unverified descendant
- [#182715](https://github.com/openclaw/openclaw/issues/182715) [Feature]: Read the resolved default agent model through Gateway RPC
- [#182708](https://github.com/openclaw/openclaw/issues/182708) Telegram inline callback taps in forum topics are spooled but never dispatched (no error), 2026.10.4
- [#179147](https://github.com/openclaw/openclaw/issues/179147) [Feature]: inspect session context in one side panel
- [#111797](https://github.com/openclaw/openclaw/issues/111797) [Bug]: security audit skips nested escapes under a symlinked skills root
- [#181429](https://github.com/openclaw/openclaw/issues/181429) [Bug]: Session Details values are clipped with the full text only in a mouse-only tooltip
- [#179472](https://github.com/openclaw/openclaw/issues/179472) [Bug]: Nextcloud Talk and Zalo default account stops starting once a named account is added (SecretRef credential)
- [#175597](https://github.com/openclaw/openclaw/issues/175597) [Bug]: sessions_send reply is cut at 4,096 characters, and the requester isn't told
- [#178275](https://github.com/openclaw/openclaw/issues/178275) [Bug]: Long talk-back replies lose most of their audio: the 2 s output cap treats normal faster-than-real-time streaming as stuck playback
- [#178357](https://github.com/openclaw/openclaw/issues/178357) [Bug]: Tlon stops answering for minutes after a silent network drop
- [#179331](https://github.com/openclaw/openclaw/issues/179331) [Bug]: concurrent automation starts reject an unchanged inference account
- [#179398](https://github.com/openclaw/openclaw/issues/179398) Discord voice: agent-proxy consults fail with "Discord runtime not initialized" (realtime callbacks run in the openai plugin instance)
- [#182591](https://github.com/openclaw/openclaw/issues/182591) Update failure: package-install-omit-optional (2026.10.5)
- [#180308](https://github.com/openclaw/openclaw/issues/180308) [Bug]: MCP CLI list/show print live credentials during routine inspection
- [#182579](https://github.com/openclaw/openclaw/issues/182579) Update failure: package-install-omit-optional (2026.10.5)
- [#126633](https://github.com/openclaw/openclaw/issues/126633) [Bug]: Invalid plugin command names can break Discord native command deployment
- [#179562](https://github.com/openclaw/openclaw/issues/179562) [Bug]: Persisted-but-unadmitted user turn is dropped, not replayed, after a transcript-change admission race
- [#182297](https://github.com/openclaw/openclaw/issues/182297) [Bug]: WhatsApp media message(send) to the current DM is not counted as a source reply (delivered toJid is @lid), so a trailing NO_REPLY fails as empty_response with a false "couldn't finish this request" notice
- [#182529](https://github.com/openclaw/openclaw/issues/182529) Update failure: package-install-omit-optional (2026.10.4)
- [#182488](https://github.com/openclaw/openclaw/issues/182488) Update failure: target-metadata-preflight (2026.9.4)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 256,819 · **Open issues:** 50,847 · **Last push:** <1h ago

On October 25, 2026, there were no new releases for Hermes Agent, but several significant pull requests were merged. Notably, PR #144177 improved prompt handling during one-shot runs by enhancing steering and live-control delegation, while PR #144203 verified the CoreWeave Inference tier in the plugin catalog. Additionally, PR #144190 resolved import and collection failures in test runs, ensuring accurate feedback on missing paths. Among new issues, bug #144140 was highlighted, where the dashboard fails to open specific Desktop sessions due to a "not_found" error on session resumes, indicating a troublesome area for user experience that may require urgent attention.

#### ✅ Merged PRs
- [#144177](https://github.com/NousResearch/hermes-agent/pull/144177) fix(prompt): one-shot runs drop steering, clarify and delegate live-control; skill-safety rule moves to compaction
- [#144203](https://github.com/NousResearch/hermes-agent/pull/144203) plugin-catalog: CoreWeave Inference tier verified
- [#144174](https://github.com/NousResearch/hermes-agent/pull/144174) fix(skills): the skills index stops printing category blurbs, duplicate names and mid-word fragments (salvage #130552)
- [#144190](https://github.com/NousResearch/hermes-agent/pull/144190) fix(run_tests): import/collection failures and missing named paths no longer read green (salvage #126582)
- [#144175](https://github.com/NousResearch/hermes-agent/pull/144175) fix(desktop): source hand-off test echoes the Desktop's started-at stamp (main red 40137931246)

#### 🐛 New Issues
- [#144140](https://github.com/NousResearch/hermes-agent/issues/144140) Dashboard lists serve/Desktop sessions it cannot open: session.resume returns not_found (row owned by the dashboard login) `type/bug` `comp/cli` `comp/gateway` `area/auth` 💬3
- [#144200](https://github.com/NousResearch/hermes-agent/issues/144200) [Bug]: Kanban spawn callback runs twice when its body raises TypeError or ValueError `type/bug` `comp/cli` `P2` 💬2
- [#144003](https://github.com/NousResearch/hermes-agent/issues/144003) Plugin admission fails on Python 3.14: uv multi-environment lock cannot resolve onnxruntime (no android wheels) -> mnemosyne fail-closed on all profiles `type/bug` `comp/cli` `tool/memory` `P2` 💬2
- [#144159](https://github.com/NousResearch/hermes-agent/issues/144159) [Bug]: A pending clarify returns "undelivered" when the mobile client reconnects mid-question `type/bug` `comp/gateway` `P2` `area/sessions` 💬2
- [#144166](https://github.com/NousResearch/hermes-agent/issues/144166) cron: load_jobs() raises on a transient Windows sharing violation while jobs.json is being saved (no reader-side retry, unlike atomic_replace) `type/bug` `comp/cron` `P2` `os/windows` 💬2
- [#144150](https://github.com/NousResearch/hermes-agent/issues/144150) bug(verify): no-op run reports success and clears pending verification `type/bug` `comp/agent` `comp/cli` `P2` 💬2
- [#144071](https://github.com/NousResearch/hermes-agent/issues/144071) Feature request: opt-in human-input (approval / clarify) replies from plugins `type/feature` `comp/acp` `area/auth` `P3` 💬1
- [#144199](https://github.com/NousResearch/hermes-agent/issues/144199) Burst of concurrent 'hermes chat -q' wake runs fails at model-connect with invalid_params `type/bug` `comp/agent` `provider/nous` `P2` 💬1
- [#144183](https://github.com/NousResearch/hermes-agent/issues/144183) Auxiliary post-rotation retry re-sends the failed main-session key, benching a healthy pool entry `type/bug` `comp/agent` `provider/anthropic` `area/auth` 💬1
- [#144165](https://github.com/NousResearch/hermes-agent/issues/144165) [Bug]: Windows v0.22.5 update leaves gateway restart unaccounted after successful dependency/build stages; startup recovery blocks Desktop `type/bug` `comp/cli` `P2` `area/install-update` 💬1
- [#144168](https://github.com/NousResearch/hermes-agent/issues/144168) [Perf][Linux/NVIDIA]: Settings button hover causes large GPU utilization spikes with native hardware acceleration `type/perf` `P2` `comp/desktop` `desktop/settings` 💬1
- [#144181](https://github.com/NousResearch/hermes-agent/issues/144181) gateway: a sole non-retryable startup conflict ignores on_all_adapters_down=stay_alive and exits 78, restart-looping the whole process over one logged-out platform `type/bug` `comp/gateway` `platform/whatsapp` `P2` 💬1
- [#144158](https://github.com/NousResearch/hermes-agent/issues/144158) [Bug]: A client error reply to a clarify request surfaces as "undelivered" and drops locked answers (settle_batch documents "cancelled") `type/bug` `comp/gateway` `tool/file` `P2` 💬1
- [#144167](https://github.com/NousResearch/hermes-agent/issues/144167) [Bug]: Repeated compaction can leave a tool/assistant-led transcript; the leading-user repair exists on the Anthropic and Bedrock paths but not on OpenAI-compatible, so lmstudio/ollama/custom hit a permanent non-retryable 400 `type/bug` `comp/agent` `P2` `area/sessions` 💬1
- [#144102](https://github.com/NousResearch/hermes-agent/issues/144102) [Bug]: Bundled Python fails HTTPS connections with Errno 9 on macOS 26 (Apple Silicon) `type/bug` `comp/cli` `provider/nous` `area/auth` 💬1
- [#144152](https://github.com/NousResearch/hermes-agent/issues/144152) Process-watcher receipts lack the interim metadata marker during an active turn `type/bug` `comp/gateway` `P2` 💬1
- [#144157](https://github.com/NousResearch/hermes-agent/issues/144157) [Bug]: cronjob_manage has no documented/working 'delete' action - paused jobs accumulate forever `type/bug` `comp/tools` `comp/cron` `P2` 💬1
- [#144156](https://github.com/NousResearch/hermes-agent/issues/144156) [Bug]: An OIDC dashboard login can't delete, rename, archive or pin the Desktop chats it created (permission_denied) `type/bug` `comp/gateway` `area/auth` `P3` 💬1
- [#144213](https://github.com/NousResearch/hermes-agent/issues/144213) Windows Store build: bundled venv ships brotlicffi 1.2.0.2 (GHSA-9v8h-qqgm-4m35, critical) `type/security` `P3` `comp/desktop` `area/install-update`
- [#144205](https://github.com/NousResearch/hermes-agent/issues/144205) Plugin API: a short-lived reply notice for the turn in flight (e.g. which model answered) `type/feature` `comp/agent` `P3`
- [#144206](https://github.com/NousResearch/hermes-agent/issues/144206) Fallback notice: let a plugin mark a model fallback as planned so the warning line can be quieter `type/feature` `comp/agent` `P3`
- [#144208](https://github.com/NousResearch/hermes-agent/issues/144208) [Bug]: install.sh / pm install stalls ~24 min per URL on hosts with a dead IPv6 route (pm ignores force_ipv4) `type/bug` `P2` `area/install-update`
- [#144186](https://github.com/NousResearch/hermes-agent/issues/144186) [Bug]: Desktop image send to a remote `hermes serve` fails — invalid params for prompt.submit: attachments (v0.22.5 client ↔ backend) `type/bug` `P2` `comp/desktop` `desktop/chat`
- [#144187](https://github.com/NousResearch/hermes-agent/issues/144187) [Feature]: expose the Clear translucency control on Linux instead of removing the capability `type/feature` `area/config` `P3` `comp/desktop`
- [#144188](https://github.com/NousResearch/hermes-agent/issues/144188) Proposal: scoped native media surface and linked-player API for Desktop plugins `type/feature` `area/auth` `P3` `comp/desktop`
- [#144171](https://github.com/NousResearch/hermes-agent/issues/144171) Guidance request: supported read-only busy/waiting/idle state for an external status client `type/feature` `P3` `area/sessions` `comp/tui-gateway`
- [#144172](https://github.com/NousResearch/hermes-agent/issues/144172) [Feature]: Windows approval notifications — Allow for session / Always allow without opening the app `type/feature` `tool/terminal` `P3` `comp/desktop`
- [#144163](https://github.com/NousResearch/hermes-agent/issues/144163) Desktop: the session.archive hotkey archives the sidebar selection, not the focused pane `type/bug` `tool/file` `P2` `comp/desktop`
- [#144160](https://github.com/NousResearch/hermes-agent/issues/144160) [Feature]: Matrix E2EE: replace deprecated libolm (python-olm) with vodozemac — tested patch attached `type/security` `comp/plugins` `platform/matrix` `P3`

#### 🔒 Closed Issues
- [#141468](https://github.com/NousResearch/hermes-agent/issues/141468) [Bug]: cron enabled_toolsets with "mcp-<name>" widens the job to every enabled MCP server
- [#142528](https://github.com/NousResearch/hermes-agent/issues/142528) [Bug]: Windows: abandoned pm-runtime lease files are never pruned (1,546 accumulated) and a Python delete hook makes `hermes cron`/`gateway` exit 1
- [#144071](https://github.com/NousResearch/hermes-agent/issues/144071) Feature request: opt-in human-input (approval / clarify) replies from plugins
- [#142576](https://github.com/NousResearch/hermes-agent/issues/142576) [Bug]: Redaction does not recognise Context7 API keys (ctx7sk-…): bare keys pass through unmasked
- [#142515](https://github.com/NousResearch/hermes-agent/issues/142515) [Bug]: Windows CLI `hermes gateway restart` never stamps the planned-restart marker — "Gateway online" notice lost after every CLI restart
- [#144102](https://github.com/NousResearch/hermes-agent/issues/144102) [Bug]: Bundled Python fails HTTPS connections with Errno 9 on macOS 26 (Apple Silicon)
- [#120629](https://github.com/NousResearch/hermes-agent/issues/120629) gateway install --force can leave the service unloaded while printing "launchd still supervises"

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 95,343 · **Open issues:** 9,417 · **Last push:** 2h ago

On October 25, 2026, there were no new releases for vLLM, but several important merged pull requests included the deprecation of the LM Format Enforcer structured outputs backend and the addition of adaptive verification support for batch-sharded sampling. Performance improvements were highlighted by a 1.2% to 3.0% end-to-end TPOT enhancement due to skipping scale calculations for `concat_and_cache_mla`, alongside fixing issues related to the Gemma4 encoder with `max_soft_tokens` and supporting new profiling capabilities in the HTTP `/start_profile` endpoint. Notably, new issues were raised, including a regression in Qwen3.8-27B leading to illegal memory access with prefix caching since version 0.28.0, indicating a potential ongoing challenge for users of this hybrid model.

#### ✅ Merged PRs
- [#63423](https://github.com/vllm-project/vllm/pull/63423) [Deprecation] Deprecate LM Format Enforcer structured outputs backend
- [#58466](https://github.com/vllm-project/vllm/pull/58466) [Sampling] Add adaptive verification support to batch-sharded sampling
- [#62102](https://github.com/vllm-project/vllm/pull/62102) [GLM 5.3 Perf] Skip scale calculation for `concat_and_cache_mla`, 1.2% ~ 3.0% E2E TPOT improvement
- [#51974](https://github.com/vllm-project/vllm/pull/51974) [Profiling] Add support for profile_prefix payload in HTTP /start_profile endpoint
- [#63452](https://github.com/vllm-project/vllm/pull/63452) [CI] Fix the Domyn Edge (ROCm) and Qwen2 embed HF references
- [#63466](https://github.com/vllm-project/vllm/pull/63466) [Kernel] Bump up FlashInfer to 0.7.2.post1
- [#63462](https://github.com/vllm-project/vllm/pull/63462) [CI][Bench] Keep captured request headers case-insensitive in Responses test
- [#62850](https://github.com/vllm-project/vllm/pull/62850) [Perf][Multimodal] Make encoder cache free linear in items per request
- [#60687](https://github.com/vllm-project/vllm/pull/60687) [Bugfix][Model] Fix Gemma4 encoder CG with `max_soft_tokens` set
- [#63001](https://github.com/vllm-project/vllm/pull/63001) [Bugfix][Quantization][Spec Decode] Load ModelOpt mixed-precision DFlash and DSpark drafts
- [#61791](https://github.com/vllm-project/vllm/pull/61791) [UMBP][3/10] Add shared lookup, transfer, hybrid, and observability
- [#62713](https://github.com/vllm-project/vllm/pull/62713) [DeepSeek][ROCm] V4.1-Flash: enable --monokernel on MI325X
- [#60413](https://github.com/vllm-project/vllm/pull/60413) [Perf][ROCm][Kernel] Add W4A8 int8-dot MXFP4 GEMV for RDNA3/RDNA3.5 d…
- [#61628](https://github.com/vllm-project/vllm/pull/61628) [ROCm][MLA][DCP] Drop VLLM_ROCM_AITER_MLA_DCP_VERIFY
- [#57909](https://github.com/vllm-project/vllm/pull/57909) [ROCm][PERF] Enable MiniMax-M3 Indexer CP
- [#61482](https://github.com/vllm-project/vllm/pull/61482) [ROCm][Perf][DSv4] Standalone mono decode layer for DeepSeek-V4-Pro on MI355X
- [#62473](https://github.com/vllm-project/vllm/pull/62473) [Bugfix][ROCm][MoRIIO] Release every prefill rank a READ holds
- [#63248](https://github.com/vllm-project/vllm/pull/63248) [CI] Label recipe PRs and link their recipes.vllm.ai preview
- [#63449](https://github.com/vllm-project/vllm/pull/63449) [CI][Kimi-K3] Expect no trailing-block drop in DSpark resend tests
- [#63017](https://github.com/vllm-project/vllm/pull/63017) [Platform] Use pluggable layer for ViT mrope preparation
- [#63345](https://github.com/vllm-project/vllm/pull/63345) [Bugfix][Frontend] Apply batch tool_choice rules to streamed tool calls
- [#62835](https://github.com/vllm-project/vllm/pull/62835) [Security] Refresh vulnerable runtime and test dependencies
- [#63428](https://github.com/vllm-project/vllm/pull/63428) [Doc][Recipe] MiniMax-M3.1-Flash: DEP2 + DEP4 PD on GB200/GB300, 7-token FLASHINFER_TS DSpark on NVIDIA
- [#63045](https://github.com/vllm-project/vllm/pull/63045) [Kimi K3] KDA RecoverSSM: CuTe verify and commit kernels, records outside the KV cache
- [#59100](https://github.com/vllm-project/vllm/pull/59100) [CI][ROCm] Export kernel source maps for CI selection

#### 🐛 New Issues
- [#63505](https://github.com/vllm-project/vllm/issues/63505) [Bug]: Qwen3.8-27B (GDN hybrid) with PP=3 on sm_86: illegal memory access (Xid 31) with prefix caching, gibberish output without it; regression since v0.28.0 (v0.31.0, v0.32.0, both model runners) `bug` `kv-cache-manager` 💬6
- [#63474](https://github.com/vllm-project/vllm/issues/63474) [Bug]: API server crashes with IndexError in structured-decisions init when tokenizer files are missing (after engine fully loads) 💬2
- [#63519](https://github.com/vllm-project/vllm/issues/63519) [Bug]: Deferred block-free fence (#45357) does not cover speculator `propose()` KV writes in the V2 model runner 💬1
- [#63467](https://github.com/vllm-project/vllm/issues/63467) [Bug]: Wrong token ids from fastokens' split cache before 0.3.4 (Rust frontend, VLLM_USE_FASTOKENS) `rust` `kimi` 💬1
- [#63480](https://github.com/vllm-project/vllm/issues/63480) [Bug] Responses API silently drops a leading `developer` message for DeepSeek V4 when reasoning is enabled and no tools are set `tool-calling` `deepseek` `DSv4` 💬1
- [#63465](https://github.com/vllm-project/vllm/issues/63465) [Bug]: Mooncake Store split-load failures omit unattempted KV blocks from invalidation `bug` 💬1
- [#63455](https://github.com/vllm-project/vllm/issues/63455) [Bug]: [ROCm] AutoAWQ checkpoints never use the RDNA W4A16 kernel; AWQ decodes 2.5x slower than BF16 on gfx1151 `rocm` `quantization` 💬1
- [#63439](https://github.com/vllm-project/vllm/issues/63439) [RFC]: Reduce CPU overhead in Model Runner V2 for long-context P/D serving 💬1
- [#63517](https://github.com/vllm-project/vllm/issues/63517) [Perf][Qwen4Exp] Hybrid KV-cache capacity accounting: merged main-KV+indexer groups share one block table — slots/request are coverage-set; page bytes buy blocks via bytes_per_block
- [#63514](https://github.com/vllm-project/vllm/issues/63514) [Bug]: `hadacore_transform` gives wrong results for odd row counts (INT4 per-token-head KV cache): garbage K/V and intermittent illegal memory access `quantization`
- [#63507](https://github.com/vllm-project/vllm/issues/63507) [Bug]: CPU backend accepts unsupported attention head sizes; engine dies on first request `cpu`
- [#63501](https://github.com/vllm-project/vllm/issues/63501) [RFC]: Select the MRV2 DBO microbatch count per step within an allocated capacity
- [#63499](https://github.com/vllm-project/vllm/issues/63499) [Bug]: P2P KV offload tier: a peer that stalls or is replaced stays unreachable over RDMA until restart
- [#63470](https://github.com/vllm-project/vllm/issues/63470) [Feature]: Run Nemotron 3.5 Super VL without the --trust-remote-code flag `feature request`

#### 🔒 Closed Issues
- [#53928](https://github.com/vllm-project/vllm/issues/53928) [Bug]: [XPU] RuntimeError: causal_conv1d does not support spec-decode and non-spec tokens in the same invocation (MTP + chunked prefill)
- [#43995](https://github.com/vllm-project/vllm/issues/43995) [Bug]:
- [#63346](https://github.com/vllm-project/vllm/issues/63346) [Bug]: Streaming chat keeps tool calls for `tool_choice: "none"` (gpt-oss) and `tool_choice: null`
- [#63003](https://github.com/vllm-project/vllm/issues/63003) [Bug]: MiniMax-M3 ViT mRoPE setup BLOCK_N=32 exceeds UB capacity on Ascend A5

### SGLang (`sgl-project/sglang`)

**Stars:** 37,800 · **Open issues:** 6,155 · **Last push:** <1h ago

On October 25, 2026, SGLang saw no new releases but had several notable merged pull requests that enhanced functionality and performance. Key updates included the addition of weight versions and media token counts reporting in the rust-server's meta_info generation (#46205), and improvements in the diffusion module, such as completing the Blackwell routing test fixture (#46294) and optimizing device copying in the Ulysses exchange (#46145). There were also several performance enhancements related to the diffusion quantization layer and streamlining various pipelines. However, the day was marked by significant new issues, particularly related to DeepSeek, including a reported failure to load certain checkpoints due to module errors (#46312) and performance metrics that suggested problems with DeepSeek-V4.1-Flash-1017 across specific hardware configurations (#46310).

#### ✅ Merged PRs
- [#46205](https://github.com/sgl-project/sglang/pull/46205) [Feat] rust-server: Report weight versions and media token counts in generate meta_info
- [#34543](https://github.com/sgl-project/sglang/pull/34543) [Fix] [AMD] custom-allreduce: Stop registering oversized inputs in the deterministic all-reduce
- [#46216](https://github.com/sgl-project/sglang/pull/46216) [Feat] rust-server: Let an embedding package add keys to /generate frames
- [#46294](https://github.com/sgl-project/sglang/pull/46294) [Fix] diffusion: Complete Blackwell routing test fixture
- [#46136](https://github.com/sgl-project/sglang/pull/46136) [Chore] docker: Select released wheels and the torch index in the cu134 image
- [#46134](https://github.com/sgl-project/sglang/pull/46134) [Perf] moe: Run the Marlin GPT-OSS SwiGLU through the fused Triton kernel
- [#46133](https://github.com/sgl-project/sglang/pull/46133) [Fix] minimax-m3: Type nested tool-call arguments and count self-opened reasoning
- [#46145](https://github.com/sgl-project/sglang/pull/46145) [Perf] diffusion: Keep same-device copies out of the pipelined Ulysses exchange
- [#46250](https://github.com/sgl-project/sglang/pull/46250) [Fix] diffusion/realtime: Keep frame payloads contiguous
- [#46046](https://github.com/sgl-project/sglang/pull/46046) [Perf] diffusion: Remove per-step host syncs and uploads in image models
- [#42929](https://github.com/sgl-project/sglang/pull/42929) [Perf] dsv4: Vectorize paged KV cache dequantization
- [#46171](https://github.com/sgl-project/sglang/pull/46171) [Perf] diffusion: Gather spatial-parallel decode heights on the host
- [#46228](https://github.com/sgl-project/sglang/pull/46228) [Perf] diffusion: Fuse Wan's q/k RMSNorm with its interleaved RoPE
- [#46221](https://github.com/sgl-project/sglang/pull/46221) [Perf] diffusion: Stop the idle loop from starving async-save replies
- [#46253](https://github.com/sgl-project/sglang/pull/46253) [Fix] diffusion/loader: Honor custom weight-loader overrides
- [#45399](https://github.com/sgl-project/sglang/pull/45399) [Perf] glm-5.3: Encode GLM-5.3 Python chat template prompts segment by segment
- [#45389](https://github.com/sgl-project/sglang/pull/45389) [Refactor] kernels: Add the plugin kernel backend and split plugin contracts from their srt integration
- [#44029](https://github.com/sgl-project/sglang/pull/44029) [Perf] KVShard: 0SM KV Cache Allgather for KV Cache Sharding
- [#46084](https://github.com/sgl-project/sglang/pull/46084) [CI] [AMD] pr-test: Move tests in CUDA's extra tier to the AMD extra workflow
- [#46207](https://github.com/sgl-project/sglang/pull/46207) [Fix] request_logger: Skip watermark redaction when watermarking is disabled
- [#45907](https://github.com/sgl-project/sglang/pull/45907) [Feat] openai: parse DeepSeek output through deepseek-recipe
- [#46219](https://github.com/sgl-project/sglang/pull/46219) [Feat] openai: Parse DeepSeek text for the native endpoints through deepseek-recipe
- [#45315](https://github.com/sgl-project/sglang/pull/45315) [Feat] openai: Render DeepSeek-V4/V4.1 chat prompts with deepseek-recipe
- [#46157](https://github.com/sgl-project/sglang/pull/46157) [Fix] diffusion/scheduler: Isolate invalid IPC requests
- [#46172](https://github.com/sgl-project/sglang/pull/46172) [Perf] diffusion: Encode Cosmos3 video while it decodes
- [#46239](https://github.com/sgl-project/sglang/pull/46239) [Perf] diffusion: Validate breakable CUDA graphs for LTX-2.5 two-stage serving
- [#46235](https://github.com/sgl-project/sglang/pull/46235) [Fix] diffusion: Preserve metrics collectives after output save errors
- [#46045](https://github.com/sgl-project/sglang/pull/46045) [Perf] diffusion: Keep shared denoising paths off the host and add host-sync test guards
- [#46146](https://github.com/sgl-project/sglang/pull/46146) [Perf] diffusion: Prefer FA4 over cuDNN SDPA for long self-attention on B300
- [#46237](https://github.com/sgl-project/sglang/pull/46237) [Perf] diffusion: Split LTX tiled VAE decode across the decode-parallel ranks
- [#46241](https://github.com/sgl-project/sglang/pull/46241) [Perf] diffusion/loader: Avoid temporary GPU tensors when loading encoders
- [#45758](https://github.com/sgl-project/sglang/pull/45758) [Perf] [AMD] GPT-OSS: Pick the gfx1250 W4A8 MoE backend, in-kernel GEMM 1 gather
- [#45179](https://github.com/sgl-project/sglang/pull/45179) [Perf] diffusion/minimax-h3: Batch the video VAE decoder tiles and fuse the output chain
- [#46161](https://github.com/sgl-project/sglang/pull/46161) [Fix] [AMD] rotary: Pass a query-dtype cos_sin_cache to the HIP fallback
- [#46147](https://github.com/sgl-project/sglang/pull/46147) [Perf] diffusion: Tile the 3D scale-shift Triton kernel by rows
- [#46162](https://github.com/sgl-project/sglang/pull/46162) [Fix] diffusion/api: Do not publish failed generation outputs
- [#46104](https://github.com/sgl-project/sglang/pull/46104) [Fix] diffusion/disaggregation: Keep decoded images in tensor transport
- [#46142](https://github.com/sgl-project/sglang/pull/46142) [Fix] diffusion/server: Clean up workers on startup failure
- [#46149](https://github.com/sgl-project/sglang/pull/46149) [Perf] diffusion: Speed up Wan's spatial-parallel VAE decode
- [#46215](https://github.com/sgl-project/sglang/pull/46215) [Feat] rust-server: Record the tokenizer manager's request metrics in the Rust frontend
- [#45970](https://github.com/sgl-project/sglang/pull/45970) [Feat] metrics: Export prealloc_{full,swa}_token_usage for decode requests with a pending KV transfer
- [#46074](https://github.com/sgl-project/sglang/pull/46074) [Fix] rust-server: Start a transfer backend's own KV bootstrap server on prefill
- [#46206](https://github.com/sgl-project/sglang/pull/46206) [Feat] rust-server: Let a multimodal processor check and fetch media during admission
- [#46127](https://github.com/sgl-project/sglang/pull/46127) [Fix] scheduler: Keep long prefill steps in the busy counter and exclude engine pauses
- [#46078](https://github.com/sgl-project/sglang/pull/46078) [Fix] bench: Add missing HiCache RPCs to gRPC mock
- [#46229](https://github.com/sgl-project/sglang/pull/46229) [Perf] dsv41: Translate SWA locations once per prefill graph step
- [#46230](https://github.com/sgl-project/sglang/pull/46230) [Perf] dsv41: Use the fused ratio-2 compressor in the prefill graph
- [#46231](https://github.com/sgl-project/sglang/pull/46231) [Perf] dsv41: Feed wo_b the fused MXFP8 attention output in the prefill graph
- [#45145](https://github.com/sgl-project/sglang/pull/45145) [Feat] spec: Let out-of-tree platforms provide EAGLE draft graph runners
- [#45144](https://github.com/sgl-project/sglang/pull/45144) [Feat] spec: Let out-of-tree platforms provide their own speculative worker
- [#46068](https://github.com/sgl-project/sglang/pull/46068) [Fix] diffusion/storage: Join uploads before request cleanup
- [#46081](https://github.com/sgl-project/sglang/pull/46081) [Fix] diffusion/mesh: Guard asynchronous job publication and defaults
- [#46095](https://github.com/sgl-project/sglang/pull/46095) [Fix] diffusion/loader: Preserve checkpoints on read failures
- [#46105](https://github.com/sgl-project/sglang/pull/46105) [Perf] diffusion: Project LTX-2 prompt K/V once per denoising loop
- [#46242](https://github.com/sgl-project/sglang/pull/46242) [Fix] dsv41: Revert MegaGate routing in prefill
- [#46151](https://github.com/sgl-project/sglang/pull/46151) [Fix] [AMD] dsv4.1: Fix decode graph capture with quantized low-ratio activations
- [#46232](https://github.com/sgl-project/sglang/pull/46232) [Perf] dsv41: Run MegaGate routing in prefill
- [#46007](https://github.com/sgl-project/sglang/pull/46007) [Perf] diffusion: Wait on the socket when the scheduler is idle
- [#46109](https://github.com/sgl-project/sglang/pull/46109) [Perf] diffusion: Build one LTX-2.3 AdaLN row per sample when every token shares the sigma
- [#46107](https://github.com/sgl-project/sglang/pull/46107) [Perf] diffusion: Route dense attention with a sub-tile side to FA4 on Blackwell
- [#41140](https://github.com/sgl-project/sglang/pull/41140) [Refactor] pd: Consolidate sender and receiver implementations
- [#45838](https://github.com/sgl-project/sglang/pull/45838) [Fix] [AMD] diffusion: Fix the first-step denoise regression from compiling ENABLE_CK=0 BF16 attention
- [#46180](https://github.com/sgl-project/sglang/pull/46180) [Perf] dsv41: Read Engram rows from peer device shards
- [#41944](https://github.com/sgl-project/sglang/pull/41944) [Perf] [XPU] diffusion: Avoid QKV copies in flash attention
- [#41943](https://github.com/sgl-project/sglang/pull/41943) [Perf] flux2: Build the single-block output projection without a cat
- [#46043](https://github.com/sgl-project/sglang/pull/46043) [Perf] diffusion/registry: Reduce model discovery work at startup
- [#46099](https://github.com/sgl-project/sglang/pull/46099) [Perf] diffusion: Write uncompressed PNG responses without Pillow's row filters
- [#46110](https://github.com/sgl-project/sglang/pull/46110) [Perf] diffusion: Cut LTX-2.3 per-block elementwise work (contiguous AdaLN values, gate-folded masks, vectorized head gate)
- [#45978](https://github.com/sgl-project/sglang/pull/45978) [Perf] diffusion: Keep every component resident in auto mode when memory allows
- [#45993](https://github.com/sgl-project/sglang/pull/45993) [Fix] diffusion: Step MOVA latents outside the serial-CFG branch
- [#46108](https://github.com/sgl-project/sglang/pull/46108) [Perf] diffusion: Run LTX-2 stage 2 on a premerged resident DiT
- [#45977](https://github.com/sgl-project/sglang/pull/45977) [Perf] diffusion: Turn on breakable CUDA graphs by default for LTX-2/LTX-2.3 two-stage serving
- [#46102](https://github.com/sgl-project/sglang/pull/46102) [Perf] diffusion: Serve FA4 head sizes on Blackwell instead of falling back to sm80 SDPA
- [#46106](https://github.com/sgl-project/sglang/pull/46106) [Perf] diffusion: Drop LTX-2's all-valid prompt mask under lossless quality
- [#45965](https://github.com/sgl-project/sglang/pull/45965) [Perf] diffusion: Shard LTX-2 stage 2 over the CFG ranks as Ulysses
- [#46101](https://github.com/sgl-project/sglang/pull/46101) [Perf] diffusion/qwen-image-2.1: Keep an image prefix's K/V in the packed buffer across steps
- [#46148](https://github.com/sgl-project/sglang/pull/46148) [Perf] diffusion: Patchify Wan latents straight into tokens
- [#46169](https://github.com/sgl-project/sglang/pull/46169) [Fix] diffusion/http: Allow bounded graceful shutdown
- [#46164](https://github.com/sgl-project/sglang/pull/46164) [Refactor] rust-server: Tokenize and apply chat model rules through sglang-processor
- [#46030](https://github.com/sgl-project/sglang/pull/46030) [Fix] docker: Pin sgl-nvidia-mega to 3333e4c so the megakernel starts on main
- [#46163](https://github.com/sgl-project/sglang/pull/46163) [Perf] dsv41: Let Mega-mHC write the MegaMoE input under MegaGate

#### 🐛 New Issues
- [#46335](https://github.com/sgl-project/sglang/issues/46335) [Bug] compressed-tensors: Untargeted layers fail with "Unable to find matching target"
- [#46326](https://github.com/sgl-project/sglang/issues/46326) [Bug] ValueError: The checkpoint you are trying to load has model type `qwen4_exp` but Transformers does not recognize this architecture.
- [#46316](https://github.com/sgl-project/sglang/issues/46316) [Bug] DeepSeek-V4-Flash NVFP4 with flashinfer_megamoe + dp-attention fails in decode CUDA graph capture: transport finalize owes an undeclared sum group
- [#46314](https://github.com/sgl-project/sglang/issues/46314) [Bug] diffusion quantization layer: 11 correctness bugs (ModelSlim MXFP4, rowwise FP8/gfx1250, MXFP4 ROCm, KitchenW4A4, Nunchaku)
- [#46312](https://github.com/sgl-project/sglang/issues/46312) [Bug] DeepSeek AWQ checkpoints fail to load on CUDA: ModuleNotFoundError: No module named 'sglang.kernel_api_logging'
- [#46310](https://github.com/sgl-project/sglang/issues/46310) [Performance] DeepSeek-V4.1-Flash-1017 on 8x H20-3e: SGLang vs DeepInfer #92 measurements and profiling
- [#46302](https://github.com/sgl-project/sglang/issues/46302) [Perf] diffusion quantization layer: fix 6 real perf/overhead bugs
- [#46301](https://github.com/sgl-project/sglang/issues/46301) [Perf] diffusion quantization layer: fix 6 real perf/overhead bugs
- [#46299](https://github.com/sgl-project/sglang/issues/46299) [Bug] Rejection-sampling verify kernel overflows int32 batch offset: illegal memory access once bs * num_draft_tokens * vocab >= 2^31
- [#46297](https://github.com/sgl-project/sglang/issues/46297) [Feature] add chat and completions to the shared v1.api protos
- [#46293](https://github.com/sgl-project/sglang/issues/46293) [Bug] minimax-m2 streaming: next invoke's parameters overwrite the current call's arguments when one delta spans </invoke>
- [#46259](https://github.com/sgl-project/sglang/issues/46259) [Bug] FlashInfer prefill is not split-invariant: radix-cache hit or chunked prefill flips greedy output on a Qwen3.5 hybrid GDN model
- [#46203](https://github.com/sgl-project/sglang/issues/46203) [Bug] Xid 13 "CTA Not Present" in HiCache kvcacheio transfer kernels on Blackwell (B20Z) — 7 crashes across 4 machines / 7 GPU instances under agentic load

#### 🔒 Closed Issues
- [#35808](https://github.com/sgl-project/sglang/issues/35808) [Feature] Enhanced KV Cache Observability: Full-Lifecycle Metrics and Diagnostics
- [#36302](https://github.com/sgl-project/sglang/issues/36302) [Bug] sglang-kernel JIT: HiCache L3 segfault on first backup with nvcc 12.8 + CUDA 13 runtime (compile-time vs runtime cudaMemcpyBatchAsync ABI in staged_write_back.cuh)
- [#35385](https://github.com/sgl-project/sglang/issues/35385) [Bug] Multimodal CUDA IPC transport auto-selected on WSL2, where CUDA IPC is unsupported — scheduler crashes with no hint at --mm-feature-transport
- [#35557](https://github.com/sgl-project/sglang/issues/35557) [Bug] DeepSeek-V4-Flash expert parallelism (DeepEP) crashes on Hopper/SM90 — DeepGEMM MXFP4 MegaMoE is SM100-only; late failure + misleading error
- [#36326](https://github.com/sgl-project/sglang/issues/36326) [Bug] --config rejects canonical mamba-radix-cache-strategy due to DeprecatedAliasStoreAction
- [#31719](https://github.com/sgl-project/sglang/issues/31719) [Bug] Hybrid-GDN models: mamba conv_states dtype ignores --dtype; float16 serving crashes at first prefill with index_put dtype mismatch
- [#36395](https://github.com/sgl-project/sglang/issues/36395) bench_one_batch silently ignores --moe-runner-backend (initialize_moe_config is scheduler-only): quantized MoE benches run the BF16/triton fallback
- [#36383](https://github.com/sgl-project/sglang/issues/36383) [Feature] Generic OCP MXFP4 KV cache support
- [#36352](https://github.com/sgl-project/sglang/issues/36352) [Bug] NGRAM + `torch_native` is accepted, then crashes during startup warmup on unset `extend_prefix_lens`
- [#36338](https://github.com/sgl-project/sglang/issues/36338) [Feature] Selective FP8 KV dequantization for BF16 DSA sparse prefill
- [#36303](https://github.com/sgl-project/sglang/issues/36303) [Bug] MegaMoE a2a backend crashes with CUDA illegal address on multi-node TP (SM90): SymBuffer peer access assumes a single NVLink domain
- [#36291](https://github.com/sgl-project/sglang/issues/36291) --enable-deterministic-inference accepted and reported enabled, but has no effect on an NVFP4 W4A4 + hybrid-Mamba checkpoint with a DFlash2 drafter (GB10 / sm_121)
- [#36276](https://github.com/sgl-project/sglang/issues/36276) [Bug] qwen3.6-35b-a3b repeat bug
- [#46299](https://github.com/sgl-project/sglang/issues/46299) [Bug] Rejection-sampling verify kernel overflows int32 batch offset: illegal memory access once bs * num_draft_tokens * vocab >= 2^31

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,254 · **Open issues:** 2,601 · **Last push:** <1h ago

On October 25, 2026, the llama.cpp project saw the release of several new versions, including b11869, which features a fix for argument handling in jinja, and b11868, which introduces a KV-head team split for multicore HMX flash attention. Notable merged pull requests include the refactor of the server entrypoint in #31113 and the removal of amax rescaling in Metal from #30924. Additionally, a bug related to the vision encoder output was reported in #31104, highlighting output corruption depending on image shape. Overall, the updates focused on improving performance and stability across various architectures.

#### 🚀 New Releases
- [b11869](https://github.com/ggml-org/llama.cpp/releases/tag/b11869) b11869
- [b11868](https://github.com/ggml-org/llama.cpp/releases/tag/b11868) b11868
- [b11867](https://github.com/ggml-org/llama.cpp/releases/tag/b11867) b11867
- [b11866](https://github.com/ggml-org/llama.cpp/releases/tag/b11866) b11866
- [b11865](https://github.com/ggml-org/llama.cpp/releases/tag/b11865) b11865
- [b11861](https://github.com/ggml-org/llama.cpp/releases/tag/b11861) b11861
- [b11860](https://github.com/ggml-org/llama.cpp/releases/tag/b11860) b11860
- [b11858](https://github.com/ggml-org/llama.cpp/releases/tag/b11858) b11858
- [b11857](https://github.com/ggml-org/llama.cpp/releases/tag/b11857) b11857
- [b11856](https://github.com/ggml-org/llama.cpp/releases/tag/b11856) b11856

#### ✅ Merged PRs
- [#31059](https://github.com/ggml-org/llama.cpp/pull/31059) jinja : fix select and selectattr argument handling
- [#31055](https://github.com/ggml-org/llama.cpp/pull/31055) hexagon: KV-head team split for multicore HMX flash attention
- [#31113](https://github.com/ggml-org/llama.cpp/pull/31113) server: refactor server entrypoint
- [#30924](https://github.com/ggml-org/llama.cpp/pull/30924) metal : remove mul_mm_id amax rescaling
- [#30399](https://github.com/ggml-org/llama.cpp/pull/30399) rpc : add bounds check in rdma_recv
- [#30988](https://github.com/ggml-org/llama.cpp/pull/30988) ui: Models Manager as Route + UI improvements
- [#30978](https://github.com/ggml-org/llama.cpp/pull/30978) ui: Align hover card and context popup styling overall UI style
- [#31100](https://github.com/ggml-org/llama.cpp/pull/31100) ci : pass per-runner results dir to self-hosted jobs on T4 runners
- [#31097](https://github.com/ggml-org/llama.cpp/pull/31097) minimax-m3 : forward quant scales to the graph (fixes #31063)
- [#31088](https://github.com/ggml-org/llama.cpp/pull/31088) ci : exclude test-speculative-rejection-sampling from macos-latest-arm64
- [#31083](https://github.com/ggml-org/llama.cpp/pull/31083) tests : fix test-llama-context for large n_batch
- [#31081](https://github.com/ggml-org/llama.cpp/pull/31081) llama : deny -sm tensor for arches with moe amax rescaling
- [#26631](https://github.com/ggml-org/llama.cpp/pull/26631) ggml : allow MUL_MAT_ID -1 index to skip the computation
- [#30213](https://github.com/ggml-org/llama.cpp/pull/30213) tests : add speculative rejection draft sampling test
- [#31046](https://github.com/ggml-org/llama.cpp/pull/31046) ci : fix data race between runners sharing the model cache
- [#30656](https://github.com/ggml-org/llama.cpp/pull/30656) vulkan: ggml src1 precision support
- [#30915](https://github.com/ggml-org/llama.cpp/pull/30915) HIP: add byte permute fallback when __builtin_amdgcn_perm is unavailable
- [#31065](https://github.com/ggml-org/llama.cpp/pull/31065) mtmd: move build_inp_temporal_merge to base class

#### 🐛 New Issues
- [#31072](https://github.com/ggml-org/llama.cpp/issues/31072) Get ready for qwen4 `enhancement` 💬1
- [#31112](https://github.com/ggml-org/llama.cpp/issues/31112) Add KailA architecture support `enhancement`
- [#31104](https://github.com/ggml-org/llama.cpp/issues/31104) Eval bug: ggml-hexagon: vision encoder (mmproj/CLIP) output corrupted depending on image shape on HTP v75 — garbled transcription with repetition loop, correct on CPU 💬1
- [#31077](https://github.com/ggml-org/llama.cpp/issues/31077) Eval bug: Gemma 4 31B + draft-mtp: CUDA illegal memory access when MTP drafts right after the KV cache is rolled back or cleared (checkpoint restore or full re-process); no crash with MTP off `bug-unconfirmed` 💬1
- [#31124](https://github.com/ggml-org/llama.cpp/issues/31124) Feature Request: Dflash support for odd number cards (3x3060) with sm tensor - qwen3.8-27b `enhancement`
- [#31123](https://github.com/ggml-org/llama.cpp/issues/31123) Eval bug: [SYCL] oneDNN fused-SDPA flash-attention path only used for first context in a process; subsequent contexts fall back to native kernel `bug-unconfirmed`
- [#31118](https://github.com/ggml-org/llama.cpp/issues/31118) Misc. bug: docs mention --spec-draft-conf-min, but that flag doesn't exist `bug-unconfirmed`
- [#31115](https://github.com/ggml-org/llama.cpp/issues/31115) Eval bug: Nemotron Vulkan Intel Core Ultra 5 125H `bug-unconfirmed`
- [#31111](https://github.com/ggml-org/llama.cpp/issues/31111) Misc. bug: MUL_MAT: wrong results, exceeds tolerance; gfx1200 HIP/ROCm; f16 + deterministic. `bug-unconfirmed`
- [#31108](https://github.com/ggml-org/llama.cpp/issues/31108) Misc. bug: SOLVE_TRI, memory fault, gfx1200 HIP/ROCm, intermittent. `bug-unconfirmed`
- [#31106](https://github.com/ggml-org/llama.cpp/issues/31106) Feature Request: Support for Raon-1 architecture `enhancement`
- [#31091](https://github.com/ggml-org/llama.cpp/issues/31091) Metal: bf16 MUL_MAT returns wrong results on pre-M5 integrated GPUs (Intel Iris, Common3 family) even with -ngl 0
- [#31085](https://github.com/ggml-org/llama.cpp/issues/31085) [Misc] Windows CUDA prebuilt binaries stuck at b11828 while release tags keep advancing (b11846..b11852)
- [#31078](https://github.com/ggml-org/llama.cpp/issues/31078) Feature Request: Metis-1.6, Logos & Praxis `enhancement`
- [#31074](https://github.com/ggml-org/llama.cpp/issues/31074) Compile bug: [SYCL] Leverl Zero detection / support needs updating `bug-unconfirmed`
- [#31068](https://github.com/ggml-org/llama.cpp/issues/31068) Eval bug: SYCL: XMX-ESIMD path makes MoE prompt processing ~35% slower on Arc Pro B70

#### 🔒 Closed Issues
- [#26447](https://github.com/ggml-org/llama.cpp/issues/26447) Eval bug: Running large models on Vega 8 iGPU with Vulkan errors `vk::Queue::submit: ErrorDeviceLost` after ~ 50K context size
- [#27168](https://github.com/ggml-org/llama.cpp/issues/27168) SYCL/OpenCL: ur_die 'Experimental P2P feature is not implemented for OpenCL adapter' in dev2dev_memcpy on multi-GPU Arc
- [#27296](https://github.com/ggml-org/llama.cpp/issues/27296) Eval bug: MTP breaks long/short inference?
- [#27351](https://github.com/ggml-org/llama.cpp/issues/27351) Misc. bug: llama-server in router mode can spawn child processes also in router mode
- [#28565](https://github.com/ggml-org/llama.cpp/issues/28565) Feature Request: Metal backend: use multiple physical GPUs (eGPU + dGPU) on Intel Macs
- [#27802](https://github.com/ggml-org/llama.cpp/issues/27802) Misc. bug: Qwen3.8 coverstaion/quantization issue?
- [#31057](https://github.com/ggml-org/llama.cpp/issues/31057) Misc. bug: jinja: Functionary v3.2 template errors with HTTP 500 (`selectattr: unknown test 'type'`) on `oneOf` params
- [#31063](https://github.com/ggml-org/llama.cpp/issues/31063) Eval bug: minimax-m3: build_moe_ffn() drops the per-expert NVFP4 scale → garbled output (M3.1 Flash)

### Ollama (`ollama/ollama`)

**Stars:** 184,662 · **Open issues:** 4,410 · **Last push:** 6h ago

Today was relatively quiet for Ollama, with no new releases. However, the significant merged pull request #19247 enhances the Gemma 4 vision towers by preserving small-image detail, which could improve performance for specific use cases. Among new issues, #19262 raises a question about the functionality of the OLLAMA_NUM_PARALLEL=1 setting, generating some discussion among users. Additionally, there are reports of bugs, including issue #19270, where the Beam feature returns empty responses in OMP despite working with OpenCode Go.

#### ✅ Merged PRs
- [#19247](https://github.com/ollama/ollama/pull/19247) mlx: preserve small-image detail for compact Gemma 4 vision towers

#### 🐛 New Issues
- [#19262](https://github.com/ollama/ollama/issues/19262) Does OLLAMA_NUM_PARALLEL=1 do anything? `bug` 💬6
- [#19270](https://github.com/ollama/ollama/issues/19270) [Cloud][Bug] Beam returns empty responses in OMP while the same model works via OpenCode Go
- [#19268](https://github.com/ollama/ollama/issues/19268) `stop` is ignored by models on the MLX engine `bug`
- [#19258](https://github.com/ollama/ollama/issues/19258) Proposal: add OpenSeal to `ollama launch` `feature request`

#### 🔒 Closed Issues
- [#19254](https://github.com/ollama/ollama/issues/19254) flint:40b-a2b-gguf-nvfp4 MLX is slower than flint:40b-a2b-qat-int4 on Apple silicon

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,978 · **Open issues:** 5,656 · **Last push:** <1h ago

Today, LiteLLM released versions v1.106.3, v1.105.4, v1.104.6, and v1.103.8, all of which introduced a critical update with a new image-signing key. Users are required to update their systems to verify Docker images and Helm charts with the new cosign key, as verification with the previous key will fail. Significant merged pull requests included a fix for streamed reasoning replies in Groq, enhancements to preserve missing native usages in decisions, and the addition of hyphenated aliases for Cerebras Llama 3.1 models. Notably, a new bug has been reported (#48145) concerning JSON-defined OpenAI-like providers losing tools by default when the model is not listed in the catalog, highlighting ongoing development challenges.

#### 🚀 New Releases
- [v1.106.3](https://github.com/BerriAI/litellm/releases/tag/v1.106.3) v1.106.3
- [v1.105.4](https://github.com/BerriAI/litellm/releases/tag/v1.105.4) v1.105.4
- [v1.104.6](https://github.com/BerriAI/litellm/releases/tag/v1.104.6) v1.104.6
- [v1.103.8](https://github.com/BerriAI/litellm/releases/tag/v1.103.8) v1.103.8

#### ✅ Merged PRs
- [#48268](https://github.com/BerriAI/litellm/pull/48268) fix(groq): replay streamed reasoning replies without HTTP 400 (#47931)
- [#48261](https://github.com/BerriAI/litellm/pull/48261) fix(decisions): preserve missing native usage (#48147)
- [#48265](https://github.com/BerriAI/litellm/pull/48265) fix(cloudflare): clarify the chat endpoint warning (#47965)
- [#48259](https://github.com/BerriAI/litellm/pull/48259) feat(cost): parse 12-hour cache write rates for batch and ultrafast tiers
- [#48158](https://github.com/BerriAI/litellm/pull/48158) feat(models): add Cerebras Llama 3.1 hyphenated aliases (cerebras/lla…
- [#47065](https://github.com/BerriAI/litellm/pull/47065) fix(ui): show "Never resets" instead of "n/a" for an unset budget reset period
- [#48244](https://github.com/BerriAI/litellm/pull/48244) fix(chatgpt): route uncatalogued models through responses
- [#45674](https://github.com/BerriAI/litellm/pull/45674) feat(teams): show caller member spend and budget on Your Teams
- [#48220](https://github.com/BerriAI/litellm/pull/48220) fix(anthropic): release upstream messages stream on disconnect (#48197)
- [#48221](https://github.com/BerriAI/litellm/pull/48221) fix(proxy): restore Claude gateway model discovery (#48204)
- [#48254](https://github.com/BerriAI/litellm/pull/48254) fix(opencode): bill OpenCode Go requests from the reported list_cost
- [#48239](https://github.com/BerriAI/litellm/pull/48239) feat(proxy): add disable_pre_routing_error_logs to skip spend rows for pre-routing rejections
- [#48241](https://github.com/BerriAI/litellm/pull/48241) fix(router): skip declared text-only deployments for image requests on every routing strategy
- [#48243](https://github.com/BerriAI/litellm/pull/48243) feat(guardrails): add native Reco guardrail provider (pre_call), fail closed by default
- [#47688](https://github.com/BerriAI/litellm/pull/47688) feat(responses): honor max_agentic_loops for the streamed MCP auto-execute round cap
- [#48252](https://github.com/BerriAI/litellm/pull/48252) fix(pricing): set azure gpt-chat-latest max_input_tokens to 128000
- [#48251](https://github.com/BerriAI/litellm/pull/48251) chore(pricing): add github_copilot/claude-opus-4.8-fast deprecation date
- [#48248](https://github.com/BerriAI/litellm/pull/48248) fix(gemini): bill gemini-2.5-flash-native-audio video input at the audio / video rate
- [#48247](https://github.com/BerriAI/litellm/pull/48247) fix(bedrock): take Nova Sonic context and output limits from the Bedrock model cards
- [#48246](https://github.com/BerriAI/litellm/pull/48246) chore(cost-map): add openai gpt-5.6-cyber 12-hour cache write rate from the pricing page
- [#48150](https://github.com/BerriAI/litellm/pull/48150) fix(bedrock): price claude_platform calls from their own cost map rows
- [#34822](https://github.com/BerriAI/litellm/pull/34822) fix(anthropic): stop injecting empty-content placeholder into tool-call-only assistant turns
- [#48224](https://github.com/BerriAI/litellm/pull/48224) fix(vector_stores): put azure vector store id before the api-version query on retrieve, update and delete
- [#48216](https://github.com/BerriAI/litellm/pull/48216) fix(router): keep latency routing alive when latency samples are unusable
- [#48206](https://github.com/BerriAI/litellm/pull/48206) feat(router): add opt-in session repinning after successful failover
- [#48001](https://github.com/BerriAI/litellm/pull/48001) refactor(typing): widen delete_nested_value to Mapping and drop two unused Span aliases
- [#48199](https://github.com/BerriAI/litellm/pull/48199) fix(ui): wire up Download CSV Template button in bulk invite
- [#48089](https://github.com/BerriAI/litellm/pull/48089) fix(proxy): buffer tool discoveries in Redis and write LiteLLM_ToolTable in one statement per drain, on its own lock
- [#48225](https://github.com/BerriAI/litellm/pull/48225) fix(chat): remove hosted telemetry on chat submissions
- [#48223](https://github.com/BerriAI/litellm/pull/48223) fix(ui): move Aria empty model state into the picker
- [#48140](https://github.com/BerriAI/litellm/pull/48140) feat(providers): add OpenCode Go routing and pricing
- [#48207](https://github.com/BerriAI/litellm/pull/48207) feat(ui): configure the default Usage time range
- [#48175](https://github.com/BerriAI/litellm/pull/48175) fix(router): route decisions calls only to deployments whose provider supports decisions
- [#47789](https://github.com/BerriAI/litellm/pull/47789) refactor(typing): clear 1181 basedpyright Any errors across 431 files
- [#48095](https://github.com/BerriAI/litellm/pull/48095) fix(mcp): retain toolset scope when refreshing catalog authority
- [#48086](https://github.com/BerriAI/litellm/pull/48086) fix(cost): bill gemini audio input and cached audio at flex, priority and batch rates
- [#48088](https://github.com/BerriAI/litellm/pull/48088) feat(cost): bill openai 12-hour prompt cache writes at their own rate
- [#48119](https://github.com/BerriAI/litellm/pull/48119) fix(responses): honor per-call custom pricing on the native Responses API path
- [#48152](https://github.com/BerriAI/litellm/pull/48152) fix(router): keep image requests off deployments declared supports_vision false
- [#48149](https://github.com/BerriAI/litellm/pull/48149) fix(cost-map): declare Bedrock gpt-oss rows text-only so modality routing skips them
- [#48131](https://github.com/BerriAI/litellm/pull/48131) fix(spend): await the per-request rollup enqueues and report their failures
- [#48142](https://github.com/BerriAI/litellm/pull/48142) chore(release): backport #48139 to stable/1.106.x
- [#48139](https://github.com/BerriAI/litellm/pull/48139) fix(docker): update bundled LiteAdmin CA roots and aiohttp
- [#48137](https://github.com/BerriAI/litellm/pull/48137) feat(chat): add document uploads (discussion #32085)
- [#47963](https://github.com/BerriAI/litellm/pull/47963) fix(aws_polly): read the engine from the bare model name

#### 🐛 New Issues
- [#48145](https://github.com/BerriAI/litellm/issues/48145) [Bug]: JSON-defined openai-like providers lose tools by default if model is not in catalog `bug` `llm translation` 💬7
- [#48226](https://github.com/BerriAI/litellm/issues/48226) [Bug]: completion_cost() raises ModelNotMappedError for groq/openai/gpt-oss-* responses, even when model="groq/..." is passed `llm translation` 💬3
- [#48197](https://github.com/BerriAI/litellm/issues/48197) [Bug]: /v1/messages: client disconnect before the first chunk leaves the upstream LLM request running `llm translation` 💬3
- [#48215](https://github.com/BerriAI/litellm/issues/48215) Reason for the cosign key rotation in #48103, and is the old key (0112e53) still trusted? 💬3
- [#48147](https://github.com/BerriAI/litellm/issues/48147) [Bug]: decisions (typesafe): missing usage becomes zero cost, a 200 with an invalid body becomes a 500, and the error body is only in the message `llm translation` `Cost & Budgeting` 💬2
- [#48167](https://github.com/BerriAI/litellm/issues/48167) [Bug]: MCP: a virtual key whose only tool restriction is a deleted MCP toolset can call every tool on the server (a team in the same state is denied) 💬2
- [#48157](https://github.com/BerriAI/litellm/issues/48157) [Feature]: Add standard hyphenated model aliases for Cerebras Llama 3.1 models (`cerebras/llama-3.1-8b`, `cerebras/llama-3.1-70b`) `enhancement` 💬1
- [#48204](https://github.com/BerriAI/litellm/issues/48204) [Bug]: Claude gateway base URL returns 404 for model discovery `llm translation` 💬1
- [#48162](https://github.com/BerriAI/litellm/issues/48162) [Bug]: completion() sends the real request when mock_response is an empty string `bug` `llm translation` 💬1
- [#48186](https://github.com/BerriAI/litellm/issues/48186) [Feature]: Refresh the OpenAI-compatible provider definitions at runtime, like the cost map `llm translation` 💬1
- [#48169](https://github.com/BerriAI/litellm/issues/48169) [Bug]: MCP tool search: a call through `mcp_tool_call` counts twice against key rate limits, is not priced, and is not logged 💬1
- [#48170](https://github.com/BerriAI/litellm/issues/48170) [Bug]: MCP tool search: `mcp_tool_search` calls are not rate-limited or logged (keyword ranking) 💬1
- [#48171](https://github.com/BerriAI/litellm/issues/48171) [Bug]: MCP guardrails: a tool hidden from tools/list by a `pre_mcp_call` guardrail can still be called by exact name 💬1
- [#48166](https://github.com/BerriAI/litellm/issues/48166) [Bug]: MCP: a tool on both `allowed_tools` and `disallowed_tools` is hidden from tools/list but can still be called by name 💬1
- [#48168](https://github.com/BerriAI/litellm/issues/48168) [Bug/Docs]: MCP: sessions from the built-in OAuth for `/mcp` ignore virtual key settings (budget, blocked key, key tool permissions) `claude code` 💬1
- [#48238](https://github.com/BerriAI/litellm/issues/48238) [Bug]: Vertex Model Garden (vertex_ai/openai/...) streaming drops reasoning_content, extra tool calls and usage details `bug` `llm translation`
- [#48196](https://github.com/BerriAI/litellm/issues/48196) [Bug]: Bulk Invite Users – "Download CSV Template" button has no onClick handler (still unfixed, #27197 closed as stale). `bug`

#### 🔒 Closed Issues
- [#16021](https://github.com/BerriAI/litellm/issues/16021) [Bug]: OpenRouter cost information lost in streaming responses
- [#27175](https://github.com/BerriAI/litellm/issues/27175) [Bug]: Cannot use ChatGPT subscription sucessfully
- [#31568](https://github.com/BerriAI/litellm/issues/31568) [Feature]: Add OpenCode Go provider
- [#24498](https://github.com/BerriAI/litellm/issues/24498) [Bug]: When using claude models, litellm returns `[System: Empty message content sanitised to satisfy protocol]`
- [#17696](https://github.com/BerriAI/litellm/issues/17696) [Bug]: Gemini request fails when cache size is too small
- [#35667](https://github.com/BerriAI/litellm/issues/35667) [Feature]: Make the Usage dashboard’s default time range configurable
- [#38078](https://github.com/BerriAI/litellm/issues/38078) [Feature]: session affinity (sticky sessions) for router model groups
- [#48197](https://github.com/BerriAI/litellm/issues/48197) [Bug]: /v1/messages: client disconnect before the first chunk leaves the upstream LLM request running
- [#48045](https://github.com/BerriAI/litellm/issues/48045) [Bug]: Bedrock claude_platform/ requests are logged with $0 spend
- [#48215](https://github.com/BerriAI/litellm/issues/48215) Reason for the cosign key rotation in #48103, and is the old key (0112e53) still trusted?
- [#47856](https://github.com/BerriAI/litellm/issues/47856) [Bug]: /toolset/{name}/mcp tools/list loses URL scope after catalog authority refresh (1.106.x regression)
- [#48147](https://github.com/BerriAI/litellm/issues/48147) [Bug]: decisions (typesafe): missing usage becomes zero cost, a 200 with an invalid body becomes a 500, and the error body is only in the message
- [#47965](https://github.com/BerriAI/litellm/issues/47965) [Bug]: Cloudflare decisions provider uses the /ai/run path the chat provider calls 'legacy' — inconsistent and undocumented
- [#47382](https://github.com/BerriAI/litellm/issues/47382) [Bug]: Bedrock /v1/messages: claude-opus-5-5 rejects thinking.type=enabled, no adaptive translation and output_config is stripped
- [#47931](https://github.com/BerriAI/litellm/issues/47931) [Bug]: Groq rejects the next turn after a streamed reasoning reply because reasoning_content is sent back
- [#48011](https://github.com/BerriAI/litellm/issues/48011) [Feature]: Add Terraform support for managing LiteLLM tool sets
- [#48157](https://github.com/BerriAI/litellm/issues/48157) [Feature]: Add standard hyphenated model aliases for Cerebras Llama 3.1 models (`cerebras/llama-3.1-8b`, `cerebras/llama-3.1-70b`)
- [#48009](https://github.com/BerriAI/litellm/issues/48009) [Bug]: main lockfiles fail OSV and need a canonical dependency update
- [#48204](https://github.com/BerriAI/litellm/issues/48204) [Bug]: Claude gateway base URL returns 404 for model discovery
- [#42768](https://github.com/BerriAI/litellm/issues/42768) [Test] Zapier SDK classification test — direct Python SDK usage
- [#48196](https://github.com/BerriAI/litellm/issues/48196) [Bug]: Bulk Invite Users – "Download CSV Template" button has no onClick handler (still unfixed, #27197 closed as stale).
- [#35682](https://github.com/BerriAI/litellm/issues/35682) July Townhall Updates - 317 Bug Fixes, 95% E2E Testing

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,527 · **Open issues:** 384 · **Last push:** <1h ago

On October 25, 2026, there were no new releases for Unsloth, but several significant pull requests were merged, enhancing the studio's functionality and performance. Notable updates included the enhancement of API page fonts and the restyling of Library and System storage sections to improve usability. Additionally, features such as caching for the offloaded native int8 DiT and optimizing CUDA graphs for compiled blocks were introduced, aiming to boost efficiency in video processing and model decoding. However, a new issue was raised regarding desktop users on Windows, where all tested models failed to load after updating to version v0.1.910-beta, highlighting ongoing stability challenges.

#### ✅ Merged PRs
- [#14442](https://github.com/unslothai/unsloth/pull/14442) Bump vite, @modelcontextprotocol/sdk and dompurify in studio/frontend
- [#14503](https://github.com/unslothai/unsloth/pull/14503) Bump the cargo-tauri group across 1 directory with 2 updates
- [#14675](https://github.com/unslothai/unsloth/pull/14675) Bump github/codeql-action/init in /
- [#15051](https://github.com/unslothai/unsloth/pull/15051) Bump setuptools from 84.0.0 to 84.1.0 in the python-security group across 1 directory
- [#15111](https://github.com/unslothai/unsloth/pull/15111) Studio: API page fonts, Sampling footer in chat settings
- [#15173](https://github.com/unslothai/unsloth/pull/15173) Studio video: stream the Wan encode under model / sequential offload too
- [#15083](https://github.com/unslothai/unsloth/pull/15083) Studio: restyle Library and System storage sections as a usage overview
- [#15104](https://github.com/unslothai/unsloth/pull/15104) Studio: pinned Run settings footer, model picker on the radius scale
- [#15112](https://github.com/unslothai/unsloth/pull/15112) Studio: one audio icon everywhere, ai-speech for Text to Speech
- [#15166](https://github.com/unslothai/unsloth/pull/15166) Studio video: cache Wan text encodes per text so an unchanged negative prompt is encoded once
- [#15171](https://github.com/unslothai/unsloth/pull/15171) Decode: write K/V straight into the cache slot, and opt-in CUDA-graph replay of the decode step
- [#15157](https://github.com/unslothai/unsloth/pull/15157) Block compile: per-region recompile limit with isolate_recompiles on torch 2.13+
- [#15163](https://github.com/unslothai/unsloth/pull/15163) Studio diffusion: choose whole-module vs streamed offload per request from its step count
- [#15162](https://github.com/unslothai/unsloth/pull/15162) Lift for_inference's tensor parallel helpers in the return-logits test
- [#15167](https://github.com/unslothai/unsloth/pull/15167) Clear the compile kill switch in the block CUDA graphs tests
- [#15165](https://github.com/unslothai/unsloth/pull/15165) Keep test_studio_root_resilience on the backend's utils and loggers
- [#15158](https://github.com/unslothai/unsloth/pull/15158) FSDP2: free-memory fit check, MFU without recompute (HFU separately), nccl2 warning on small GPUs
- [#15156](https://github.com/unslothai/unsloth/pull/15156) DDP: find unused params for a fully finetuned VLM on text-only batches; native FSDP2 names expert parallelism
- [#15152](https://github.com/unslothai/unsloth/pull/15152) Studio video: cache the offloaded native int8 DiT per expert (Wan2.2-A14B warm load 210 s to 21 s)
- [#15154](https://github.com/unslothai/unsloth/pull/15154) Opt-in CUDA graphs for compiled blocks under gradient checkpointing (UNSLOTH_BLOCK_CUDAGRAPHS=1)
- [#15160](https://github.com/unslothai/unsloth/pull/15160) Padding-free: call flash varlen through a plain autograd.Function in eager
- [#15149](https://github.com/unslothai/unsloth/pull/15149) Studio diffusion: seed the dense bf16 placement from FLUX.1's measured peak
- [#15147](https://github.com/unslothai/unsloth/pull/15147) Studio video: keep Wan2.1-T2V-1.3B in fp16 on fp16-only GPUs
- [#15137](https://github.com/unslothai/unsloth/pull/15137) Tensor parallelism v1: apply_tensor_parallel for dense decoders (LoRA / QLoRA)
- [#15150](https://github.com/unslothai/unsloth/pull/15150) Studio diffusion: move the deferred compile off the render for offloaded and Qwen-Image-2.1 denoisers
- [#15151](https://github.com/unslothai/unsloth/pull/15151) Studio: count the LTX-2.5 encoder worker context in every whole-module phase
- [#15153](https://github.com/unslothai/unsloth/pull/15153) FP8 block GEMM: find torchao 0.18 blockwise_fp8_gemm and route each call to the faster kernel
- [#15148](https://github.com/unslothai/unsloth/pull/15148) Studio video: decode the Wan VAE untiled or in the fewest tiles that fit, also when offloaded
- [#15146](https://github.com/unslothai/unsloth/pull/15146) Studio diffusion: read the local int8 / fp8 prequant cache back on pipeline loads
- [#15145](https://github.com/unslothai/unsloth/pull/15145) Honour use_gradient_checkpointing=False over TRL's gradient_checkpointing=True default
- [#15124](https://github.com/unslothai/unsloth/pull/15124) Studio: shorter Agent permissions description, even card padding
- [#15144](https://github.com/unslothai/unsloth/pull/15144) Studio diffusion: keep SDXL resident on 15-16 GB cards from its measured activations
- [#14909](https://github.com/unslothai/unsloth/pull/14909) Studio: show prompt progress, live generation details and where a GGUF loaded
- [#15073](https://github.com/unslothai/unsloth/pull/15073) Studio: centralize GGUF identity rules and exclude incomplete GGUF splits
- [#15135](https://github.com/unslothai/unsloth/pull/15135) FSDP2: replicated grad sync without host syncs, once per gradient accumulation cycle
- [#15141](https://github.com/unslothai/unsloth/pull/15141) Cross entropy: 8192-wide chunks at 4 warps for the chunked forward on B200
- [#15133](https://github.com/unslothai/unsloth/pull/15133) Remove hidden host-device syncs from per-step training paths
- [#15136](https://github.com/unslothai/unsloth/pull/15136) FP8 block GEMM: TMA descriptor kernel with a 4-stage K loop on B200
- [#15129](https://github.com/unslothai/unsloth/pull/15129) Studio diffusion: keep whole-module offload for a bf16 denoiser past the streamed floor
- [#15026](https://github.com/unslothai/unsloth/pull/15026) Preserve runtime settings when unsloth start names the loaded model
- [#15132](https://github.com/unslothai/unsloth/pull/15132) Context parallel RL: single-tensor all-gather for hidden states and reduce-scatter in backward
- [#15025](https://github.com/unslothai/unsloth/pull/15025) Studio: remember chat preferences per account across logins
- [#15068](https://github.com/unslothai/unsloth/pull/15068) Preserve padding masks in distillation backbone forwards
- [#15134](https://github.com/unslothai/unsloth/pull/15134) Training SDPA: bucket sequence lengths where torch picks cuDNN, so padded batches stop rebuilding plans
- [#14693](https://github.com/unslothai/unsloth/pull/14693) Explain disabled SentencePiece before loading MOSS-TTS-Nano
- [#15029](https://github.com/unslothai/unsloth/pull/15029) Let OpenClaw app setup read valid JSON5
- [#15028](https://github.com/unslothai/unsloth/pull/15028) Add the Unsloth provider to OpenClaw’s selected configuration
- [#15000](https://github.com/unslothai/unsloth/pull/15000) Sync before re-reading a buffer stored in an Inductor reduction loop (torch < 2.14)
- [#14985](https://github.com/unslothai/unsloth/pull/14985) Studio: Fix model pickers opening an empty On Device tab
- [#15045](https://github.com/unslothai/unsloth/pull/15045) Fix Books & Documents recipe loading under CSP
- [#15024](https://github.com/unslothai/unsloth/pull/15024) Keep managed vLLM and SGLang environments usable across Docker updates
- [#15101](https://github.com/unslothai/unsloth/pull/15101) Run Unsloth's patched forwards only on Unsloth-loaded models
- [#15131](https://github.com/unslothai/unsloth/pull/15131) Restore the hub source and endpoint env between backend tests
- [#15118](https://github.com/unslothai/unsloth/pull/15118) Studio video: pin MiniMax-H3's lazily streamed blocks in place so the stream prefetch engages
- [#15121](https://github.com/unslothai/unsloth/pull/15121) MXFP4 torch decode: fp16 in fp32 on torch < 2.12, where ldexp overflows
- [#15027](https://github.com/unslothai/unsloth/pull/15027) Preserve reasoning limits when unsloth start changes context
- [#15079](https://github.com/unslothai/unsloth/pull/15079) Keep Mamba dt_proj out of 4-bit so QLoRA forward works
- [#15050](https://github.com/unslothai/unsloth/pull/15050) Native FSDP2 optimizer.pt resume: parameters the saved run never stepped
- [#14993](https://github.com/unslothai/unsloth/pull/14993) pre-commit: format with ruff-unsloth instead of three passes around stock ruff
- [#15095](https://github.com/unslothai/unsloth/pull/15095) Unwrap compressed-tensors offload caches after the lazy first-forward decompress
- [#15120](https://github.com/unslothai/unsloth/pull/15120) Wait for the sandbox pick to land instead of a fixed 5ms tick
- [#15119](https://github.com/unslothai/unsloth/pull/15119) Fused LoRA: plain Linear projections after merge_and_unload / unload no longer crash
- [#15113](https://github.com/unslothai/unsloth/pull/15113) MXFP4 compressed-linear tests: fp16 where bf16 is unsupported
- [#15114](https://github.com/unslothai/unsloth/pull/15114) Read the working folder picker labels from the component in project_folders
- [#15108](https://github.com/unslothai/unsloth/pull/15108) Studio: cross-forward prefetch for video renders
- [#15105](https://github.com/unslothai/unsloth/pull/15105) Studio diffusion: pack up-front group-offload pins into slabs
- [#15109](https://github.com/unslothai/unsloth/pull/15109) Find a LAN address's actions in its row, not the text's parent
- [#15107](https://github.com/unslothai/unsloth/pull/15107) FP8 inductor fullgraph test: allow one ulp on GPUs where Inductor fuses the dequant
- [#15084](https://github.com/unslothai/unsloth/pull/15084) Studio: language and platform tabs for the API page code examples
- [#15085](https://github.com/unslothai/unsloth/pull/15085) Studio: one red shade for every red button in light and dark
- [#15106](https://github.com/unslothai/unsloth/pull/15106) Block compile: mark the batch dim dynamic so an uneven last batch does not recompile every layer
- [#15080](https://github.com/unslothai/unsloth/pull/15080) Studio UI polish: projects, API page, audio inputs, settings layout
- [#15103](https://github.com/unslothai/unsloth/pull/15103) FP8 to NF4 load tests: compare in the load dtype on GPUs without bf16
- [#15099](https://github.com/unslothai/unsloth/pull/15099) Studio diffusion: keep the denoiser resident ahead of the text encoders
- [#15096](https://github.com/unslothai/unsloth/pull/15096) Studio: contiguous k/v before SDPA on gfx1151 when they outgrow L2
- [#15094](https://github.com/unslothai/unsloth/pull/15094) Studio: free the Qwen-Image-2.1 prefix KV cache before VAE decode
- [#15092](https://github.com/unslothai/unsloth/pull/15092) Resume native FSDP2 optimizer checkpoints across torch AdamW and bnb 8-bit
- [#15100](https://github.com/unslothai/unsloth/pull/15100) GRPO trainer: follow zoo's torch < 2.12 gate for persistent TMA matmul
- [#15076](https://github.com/unslothai/unsloth/pull/15076) Load Mamba / FalconMamba with eager instead of a refused sdpa
- [#15078](https://github.com/unslothai/unsloth/pull/15078) FP8 tests: same automatic dequant route on sm89+, no Fp8Dequantize leak between files
- [#15088](https://github.com/unslothai/unsloth/pull/15088) Studio diffusion: carry the next forward's first offload groups into the idle copy tail
- [#15081](https://github.com/unslothai/unsloth/pull/15081) Studio: stream an offloaded ControlNet through the group prefetcher
- [#15091](https://github.com/unslothai/unsloth/pull/15091) Do not let the gap worker lock test deadlock its own worker
- [#15090](https://github.com/unslothai/unsloth/pull/15090) Bring two diffusion route test fakes up to the load id routes
- [#15075](https://github.com/unslothai/unsloth/pull/15075) Full finetune pack-quantized compressed-tensors checkpoints
- [#15041](https://github.com/unslothai/unsloth/pull/15041) Context parallel (Ulysses) for DPO and GRPO training
- [#15082](https://github.com/unslothai/unsloth/pull/15082) Give the embedder unload race test room for a slow release
- [#15086](https://github.com/unslothai/unsloth/pull/15086) Read diffusion.py as UTF-8 in the NVFP4 act-quant test
- [#15077](https://github.com/unslothai/unsloth/pull/15077) Studio: keep host memory unpinned on integrated GPUs
- [#15069](https://github.com/unslothai/unsloth/pull/15069) Studio: multistage companion and CFG replica fit checks do not count CUDA graph pool cache as free
- [#14827](https://github.com/unslothai/unsloth/pull/14827) Studio: name image and video loads so an unload ends only its own
- [#15066](https://github.com/unslothai/unsloth/pull/15066) Studio: run the image-load gates before the MLX router's diffusers fallback
- [#15063](https://github.com/unslothai/unsloth/pull/15063) Studio Images: run Detailer inpaints eager and uncounted
- [#15059](https://github.com/unslothai/unsloth/pull/15059) Studio diffusion/video: share the Hub reachability verdict across cached-load calls
- [#15055](https://github.com/unslothai/unsloth/pull/15055) Studio NVFP4: tag the compile cache in both switch states so a legacy cache never matches
- [#15067](https://github.com/unslothai/unsloth/pull/15067) Studio: CFG batch, H3 budget and stream residency fit checks do not count CUDA graph pool cache as free
- [#15072](https://github.com/unslothai/unsloth/pull/15072) Forget the last NVML inventory between backend tests
- [#15012](https://github.com/unslothai/unsloth/pull/15012) Native FSDP2: sync initial trainable weights across ranks; shard FastSentenceTransformer and FastDiffusionModel
- [#15062](https://github.com/unslothai/unsloth/pull/15062) FastDiffusionModel: record an explicit float32 request so T4 training stays float32
- [#15042](https://github.com/unslothai/unsloth/pull/15042) Native FSDP2: sharded resume reads for weights and an opt-in sharded optimizer checkpoint
- [#15065](https://github.com/unslothai/unsloth/pull/15065) Studio diffusion: do not demote a resident transformer to whole-module offload for the 2048 worst case
- [#15074](https://github.com/unslothai/unsloth/pull/15074) Format the MoE per-expert dW shared memory files
- [#14726](https://github.com/unslothai/unsloth/pull/14726) Studio: leave rows with a null caption out of vision training
- [#15071](https://github.com/unslothai/unsloth/pull/15071) FP8 dequant under compile: keep the torch path for bf16 on cards without native bf16
- [#15070](https://github.com/unslothai/unsloth/pull/15070) MoE per-expert dW: count pipelined shared memory, fit tiles that overflow the card
- [#15056](https://github.com/unslothai/unsloth/pull/15056) Studio MLX: retry a refused coexist diffusers fallback with MLX unloaded
- [#15064](https://github.com/unslothai/unsloth/pull/15064) Studio: untiled VAE fit checks do not count CUDA graph pool cache as free
- [#15058](https://github.com/unslothai/unsloth/pull/15058) Studio: fp32 VAE upcast frees each 16-bit device tensor as it is cast
- [#15057](https://github.com/unslothai/unsloth/pull/15057) Studio: split guided Z-Image on the background-compile recording render
- [#14929](https://github.com/unslothai/unsloth/pull/14929) MOSS-Image: build the float64 timestep sinusoid on the CPU off CUDA
- [#15039](https://github.com/unslothai/unsloth/pull/15039) Studio diffusion: one bounded Hub probe per process when the Hub is unreachable
- [#15047](https://github.com/unslothai/unsloth/pull/15047) Studio diffusion: key the CFG-batch verdict on the weight quant, not just the module layout
- [#14717](https://github.com/unslothai/unsloth/pull/14717) Train on CPU when no GPU is found, instead of refusing to import
- [#15048](https://github.com/unslothai/unsloth/pull/15048) Studio diffusion: keep the VRAM Budget reserve free in the decode-time residency release
- [#15054](https://github.com/unslothai/unsloth/pull/15054) Studio sd.cpp: use BF16 cuBLAS for Q8_0 only when every GGUF the process loads is Q8_0
- [#14857](https://github.com/unslothai/unsloth/pull/14857) Studio diffusion: drop stale pinned host layout entries after a dtype change in low_vram offload
- [#15033](https://github.com/unslothai/unsloth/pull/15033) Native FSDP2 float16: start the loss scale where one GPU's scaled backward fits
- [#15061](https://github.com/unslothai/unsloth/pull/15061) Backend CI: split the 3.13 shards a-f / g-r instead of a-k / l-r
- [#15060](https://github.com/unslothai/unsloth/pull/15060) mxfp4_packed_matmul: exact gradients for grad-requiring inputs
- [#15023](https://github.com/unslothai/unsloth/pull/15023) FSDP2 native: fewer collectives under gradient accumulation and checkpoint recompute
- [#15019](https://github.com/unslothai/unsloth/pull/15019) Attention: keep training SDPA off cuDNN attention on SM100
- [#15052](https://github.com/unslothai/unsloth/pull/15052) Decode LoRA cast cache: refresh after fused optimizer steps

#### 🐛 New Issues
- [#15143](https://github.com/unslothai/unsloth/issues/15143) [Bug] Please fill in your issue title here. `feature request` `bug` 💬3
- [#15142](https://github.com/unslothai/unsloth/issues/15142) [Bug] [Desktop][Windows] All tested models fail to load after updating to v0.1.910-beta `feature request` `bug` 💬2
- [#15115](https://github.com/unslothai/unsloth/issues/15115) [Bug] Studio forces preserve_thinking=true at llama-server launch, which overrides a user-supplied chat template and makes --no-reasoning-preserve a no-op 💬1
- [#15172](https://github.com/unslothai/unsloth/issues/15172) [Bug] studio fails to generate image. core dumped `feature request` `bug`
- [#15117](https://github.com/unslothai/unsloth/issues/15117) Closing the Unsloth icon in the menu bar
- [#15116](https://github.com/unslothai/unsloth/issues/15116) Inquiry about quantization evaluation datasets and imatrix calibration data
- [#15110](https://github.com/unslothai/unsloth/issues/15110) [Bug] Embedding model disapires from api `feature request` `bug`

#### 🔒 Closed Issues
- [#15016](https://github.com/unslothai/unsloth/issues/15016) [Feature] vLLM/SGLang persistence in Docker

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,160 · **Open issues:** 378 · **Last push:** <1h ago

On October 25, 2026, AIBrix did not release any new versions, but several significant pull requests were merged. Notable fixes include the resolution of a bug that caused throughput and least-latency read PromQL token averages to report inaccurately as zeros, tackled in PR #3291, and an improvement in prefix-cache matching speed on large fleets with PR #3294. Additional enhancements included addressing the recursive TOS multipart uploads issue (PR #3184) and ensuring the least-loaded pod remains prioritized during blended routing score normalization (PR #3278). A new request for comments was also raised in issue #3296, which focuses on developing rules for managing a rapidly growing AI-assisted contributor base.

#### ✅ Merged PRs
- [#3294](https://github.com/vllm-project/aibrix/pull/3294) [Bug] Read PromQL token averages as query results in throughput and least-latency
- [#3181](https://github.com/vllm-project/aibrix/pull/3181) [Bug] Honor AIBRIX_PREFIX_CACHE_REMOTE_TOKENIZER_ENDPOINT and spread tokenize endpoint selection
- [#3291](https://github.com/vllm-project/aibrix/pull/3291) [Misc] Speed up prefix-cache matching on large fleets
- [#3184](https://github.com/vllm-project/aibrix/pull/3184) [Bug] Prevent recursive TOS multipart uploads
- [#3278](https://github.com/vllm-project/aibrix/pull/3278) [Bug] Keep the least-loaded pod ahead when normalizing blended routing scores

#### 🐛 New Issues
- [#3296](https://github.com/vllm-project/aibrix/issues/3296) [RFC] Review and merge rules for a fast-growing, AI-assisted contributor base `area/gateway` `triage/needs-information` `kind/feature` `area/testing` 💬2
- [#3293](https://github.com/vllm-project/aibrix/issues/3293) [Bug] throughput and least-latency read PromQL token averages as 0 `kind/bug` 💬1

#### 🔒 Closed Issues
- [#3165](https://github.com/vllm-project/aibrix/issues/3165) [Bug] Runtime re-adoption can lose a known startup KV ceiling

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,253 · **Open issues:** 739 · **Last push:** 9h ago

On October 25, 2026, there were no new releases for Semantic Router; however, several important pull requests were merged. Notably, PR #5073 fixed a bug that preserves explicit content for empty Chat tool results, while PR #5432 ensured unknown cache-write usage is omitted from Responses output. Additionally, PR #4758 addressed the need to keep RAG block-mode 503 responses generic, enhancing overall functionality. Among the new issues, PR #5434 highlighted a critical bug regarding Envoy image smoke checks failing on Podman due to stdio chown permission errors, raising concerns that may affect deployment stability.

#### ✅ Merged PRs
- [#5073](https://github.com/vllm-project/semantic-router/pull/5073) [Bug] Preserve explicit content for empty Chat tool results
- [#3639](https://github.com/vllm-project/semantic-router/pull/3639) build(deps): bump @vitest/mocker from 4.1.7 to 4.1.11 in /dashboard/frontend in the dashboard-frontend-security group across 1 directory
- [#5432](https://github.com/vllm-project/semantic-router/pull/5432) [Bug] Omit unknown cache-write usage from Responses output
- [#4758](https://github.com/vllm-project/semantic-router/pull/4758) [Bug] Keep RAG block-mode 503 responses generic

#### 🐛 New Issues
- [#5434](https://github.com/vllm-project/semantic-router/issues/5434) [Bug] Envoy image smoke checks fail on Podman with stdio chown permission errors `accepted` `wg/developer-experience-ecosystem` 💬2
- [#5435](https://github.com/vllm-project/semantic-router/issues/5435) [Feature] Preserve Codex run and child identity across stateless Responses calls `enhancement` `needs-acceptance` `wg/mom-routing` 💬2
- [#5441](https://github.com/vllm-project/semantic-router/issues/5441) [Bug] Model runtime: the packed oneDNN linear is assumed batch-invariant by construction, but is not on torch 2.11, nor at every thread count on the pinned 2.10 `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5438](https://github.com/vllm-project/semantic-router/issues/5438) [Bug] Router Memory provenance fields are lost by Milvus and Valkey `needs-acceptance` `wg/agentic-context` 💬1
- [#5442](https://github.com/vllm-project/semantic-router/issues/5442) [Epic] Cache-aware logical model selection across inference backends `enhancement` `needs-acceptance` `wg/mom-routing` `epic`

#### 🔒 Closed Issues
- [#5431](https://github.com/vllm-project/semantic-router/issues/5431) [Bug] Responses response codec emits null for omitted cache_write_tokens
- [#5148](https://github.com/vllm-project/semantic-router/issues/5148) [Bug] Repeated media test fails on hosts that start media workers
- [#4993](https://github.com/vllm-project/semantic-router/issues/4993) [Bug] Empty tool results lose required content when encoded for Chat Completions
- [#4995](https://github.com/vllm-project/semantic-router/issues/4995) [Feature] Model runtime: capture Decision 3.0 forwards as graphs
- [#4717](https://github.com/vllm-project/semantic-router/issues/4717) [Bug] RAG retrieval failures interpolate the internal error chain into the client 503
- [#5241](https://github.com/vllm-project/semantic-router/issues/5241) [Bug] config validate accepts a model_runtime deployment of a Hub repository it cannot load
- [#5236](https://github.com/vllm-project/semantic-router/issues/5236) [Bug] Model runtime docs: the attach example sets a served_name the runtime never serves

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*