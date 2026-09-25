# 📡 AI Ecosystem Digest — 2026-09-25

> Generated 2026-09-25 01:11 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 147,969 | 33 | 1 | 5 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 126,351 | 22 | 2 | 50 | 7 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,152 | 0 | 0 | 4 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,206 | 5 | 18 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 209,900 | 34 | 0 | 6 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,112 | 13 | 11 | 4 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,425 | 113 | 43 | 96 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 248,728 | 11 | 36 | 1 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,643 | 27 | 16 | 50 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,408 | 14 | 7 | 68 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,449 | 17 | 16 | 22 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,644 | 4 | 2 | 4 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,570 | 31 | 18 | 135 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,724 | 21 | 2 | 42 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,112 | 6 | 1 | 8 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,912 | 18 | 7 | 2 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.282](https://github.com/anthropics/claude-code/releases/tag/v2.1.282) today, bringing updates to its features and functionality.
- **OpenAI Codex** published multiple releases, including [rust-v0.158.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.12), enhancing its performance and capabilities.
- **OpenClaw** saw notable activity with the merger of PR [#157107](https://github.com/openclaw/openclaw/issues/157107), addressing a major bug related to the prepared-model-catalog worker that impacts agent runs.
- A significant issue emerged in **vLLM** as new bug report [#58616](https://github.com/vllm-project/vllm/issues/58616) describes deterministic segfaults occurring just after weight loading, raising concerns from the community.
- **Qwen Code** faced a high level of engagement with new feature request [#12589](https://github.com/QwenLM/qwen-code/issues/12589) advocating for an optional System One Decision Gate, attracting 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 147,969 · **Open issues:** 12,737 · **Last push:** <1h ago

On September 25, 2026, Claude Code released version v2.1.282, introducing a new `maxProseWidth` setting to limit the width of prose in wide terminals while keeping tables and code blocks at full width, along with a startup notice that details telemetry variables ignored or disabled in project settings. Key merged pull requests included enhancements to telemetry logging by ensuring versioning details are captured and improvements to diff commands for better readability. However, the day also saw the emergence of notable issues, particularly a bug (#96911) on Windows Desktop where the device bridge's handshake could take up to 18 minutes, highlighting ongoing connectivity challenges for users.

#### 🚀 New Releases
- [v2.1.282](https://github.com/anthropics/claude-code/releases/tag/v2.1.282) v2.1.282

#### ✅ Merged PRs
- [#96364](https://github.com/anthropics/claude-code/pull/96364) agents-md: an auto-paginated Read of a nested AGENTS.md no longer counts as delivering it
- [#96363](https://github.com/anthropics/claude-code/pull/96363) diff: pass --no-color so forced git colors do not empty the diff body
- [#96487](https://github.com/anthropics/claude-code/pull/96487) telemetry: rows carry the engine's version, base version and build time from $.session.version()
- [#95423](https://github.com/anthropics/claude-code/pull/95423) diff: a shell command the tool held read-only fetches nothing
- [#96570](https://github.com/anthropics/claude-code/pull/96570) diff: the command.run hook names its command by a literal the engine's scan reads

#### 🐛 New Issues
- [#96911](https://github.com/anthropics/claude-code/issues/96911) [BUG] Windows Desktop: device bridge handshake never acknowledged for ~18 min (connect frame sent → handshake timeout), survives reboot + app update, then self-recovers `bug` `platform:windows` `area:cowork` `area:desktop` 💬2
- [#96825](https://github.com/anthropics/claude-code/issues/96825) [FEATURE] Windows desktop: computer-use side panel stays docked (no sidebar, windows hidden) until the whole turn ends `enhancement` `platform:windows` `area:desktop` 💬1
- [#96565](https://github.com/anthropics/claude-code/issues/96565) [FEATURE] Usage keeps getting worse `enhancement` `area:cost` 💬1
- [#96919](https://github.com/anthropics/claude-code/issues/96919) [BUG] Cowork device bridge never completes device handshake after socket opens (regression after update to 2.9939.2) `bug` `platform:macos` `area:cowork` `regression`
- [#96918](https://github.com/anthropics/claude-code/issues/96918) [BUG] Windows Desktop: linked computer stuck on "Asleep or app closed", cloud sessions and cloud scheduled tasks fail with "not connected to the bridge" (survives reboot, re-login, device removal, app update) `bug` `platform:windows` `area:desktop` `area:routines`
- [#96910](https://github.com/anthropics/claude-code/issues/96910) [MODEL] [SECURITY] Inconsistent behaviour: entry of test credentials and data. Inconsistent handling of test passwords in the user's own dev environment: agreed, rewrote global config, then reversed; incoherent Playwright position (relates to #78160) `bug` `platform:macos` `area:model` `model`
- [#96916](https://github.com/anthropics/claude-code/issues/96916) [BUG] 400 diagnostics.previous_message_id bricks a session after switching from an ANTHROPIC_BASE_URL gateway back to first-party (anchor accepts any requestId) `bug` `has repro` `platform:macos` `area:core`
- [#96915](https://github.com/anthropics/claude-code/issues/96915) [GitHub integration] `question` `platform:web` `github-integration`
- [#96914](https://github.com/anthropics/claude-code/issues/96914) [GitHub integration] `bug` `duplicate` `github-integration`
- [#96913](https://github.com/anthropics/claude-code/issues/96913) [BUG] Claude Desktop (Linux/Cinnamon X11): window menu from custom title bar gets stuck, desktop appears frozen (pushModal: begin_modal failed) `bug` `has repro` `platform:linux` `area:desktop`
- [#96912](https://github.com/anthropics/claude-code/issues/96912) [Bug] Overly restrictive content classifier blocking legitimate use cases `bug` `platform:linux` `area:model`
- [#96909](https://github.com/anthropics/claude-code/issues/96909) Stop hook block reason is sent to the model twice (meta message + hook_blocking_error attachment) `bug` `has repro` `platform:macos` `area:cost`
- [#96908](https://github.com/anthropics/claude-code/issues/96908) [Bug] Anthropic API Error: Consistent failure with HTB Academy queries `bug` `platform:linux` `area:api` `needs-info`
- [#96907](https://github.com/anthropics/claude-code/issues/96907) [Bug] Anthropic API Error: Message flagged by safety filters with reasoning_extraction `bug` `duplicate` `platform:macos` `area:model`
- [#96906](https://github.com/anthropics/claude-code/issues/96906) [GitHub integration] `question` `platform:web` `github-integration`
- [#96905](https://github.com/anthropics/claude-code/issues/96905) [GitHub integration] will not reconnect `bug` `platform:macos` `github-integration`
- [#96904](https://github.com/anthropics/claude-code/issues/96904) iOS Simulator panel shows black screen on Intel Mac (stream healthy, native Simulator works) `bug` `has repro` `platform:macos` `area:desktop`
- [#96903](https://github.com/anthropics/claude-code/issues/96903) [GitHub integration] `bug` `platform:web` `area:integrations` `github-integration`
- [#96902](https://github.com/anthropics/claude-code/issues/96902) [Bug] WiFi Connection Not Recognized as User-Owned Network `bug` `platform:macos` `needs-info` `area:networking`
- [#96901](https://github.com/anthropics/claude-code/issues/96901) [GitHub integration] `bug` `github-integration`
- [#96900](https://github.com/anthropics/claude-code/issues/96900) [GitHub integration] `bug` `platform:web` `github-integration`
- [#96899](https://github.com/anthropics/claude-code/issues/96899) [Bug] Anthropic API Error: Model unavailable after system failure detection `bug` `platform:macos` `area:model` `needs-info`
- [#96898](https://github.com/anthropics/claude-code/issues/96898) [Feature Request] Improve visibility into dynamic workflow decision paths and reasoning `enhancement` `platform:linux` `area:agents`
- [#96897](https://github.com/anthropics/claude-code/issues/96897) [Bug] Claude lost automatic language detection for email recipients `bug` `area:model` `area:cowork`
- [#96896](https://github.com/anthropics/claude-code/issues/96896) [Bug] Runaway process exceeds usage quota and restarts after hitting rate limit `bug` `platform:linux` `area:cost` `area:core`
- [#96895](https://github.com/anthropics/claude-code/issues/96895) [FEATURE] statusLine payload: expose the focused subagent view's model/effort (and repaint on view switch) `enhancement` `platform:windows` `area:statusline` `area:agent-view`
- [#96894](https://github.com/anthropics/claude-code/issues/96894) [Bug] Unable to write LLD file - permission or path issue `bug` `platform:windows` `needs-info` `needs-repro`
- [#96893](https://github.com/anthropics/claude-code/issues/96893) [FEATURE] Allow other login methods alongside a Claude apps gateway enrolment, for consultants working across several clients on one laptop `enhancement` `platform:macos` `area:auth` `area:self-hosted-environments`
- [#96892](https://github.com/anthropics/claude-code/issues/96892) [Bug] Claude lost ability to analyze video files `bug` `platform:linux` `area:tools`
- [#96891](https://github.com/anthropics/claude-code/issues/96891) UserPromptSubmit hook: blocked prompts are echoed to the UI and written to the session transcript `bug` `has repro` `area:security` `area:hooks`
- [#96890](https://github.com/anthropics/claude-code/issues/96890) [GitHub integration] `invalid` `github-integration`
- [#96889](https://github.com/anthropics/claude-code/issues/96889) [GitHub integration] `bug` `platform:web` `github-integration`
- [#96888](https://github.com/anthropics/claude-code/issues/96888) [GitHub integration] `invalid` `github-integration`

#### 🔒 Closed Issues
- [#96565](https://github.com/anthropics/claude-code/issues/96565) [FEATURE] Usage keeps getting worse

### OpenAI Codex (`openai/codex`)

**Stars:** 126,351 · **Open issues:** 18,645 · **Last push:** <1h ago

Today saw the release of several new alpha versions of Rust, including rust-v0.158.0-alpha.12, 0.158.0-alpha.11, and 0.158.0-alpha.10, among others, which may introduce notable enhancements and bug fixes for users. Key merged pull requests include #47975, which prevents stale voice answers during speech recovery, and #47964, which preserves the client-agent header for Amazon Bedrock Runtime. A significant new issue has emerged concerning the Windows desktop version, where users are reporting that the GPT-6 Astra/Sol/Luna models are missing from the model picker, impacting their ability to access the latest features.

#### 🚀 New Releases
- [rust-v0.158.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.9) 0.158.0-alpha.9
- [rust-v0.158.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.8) 0.158.0-alpha.8
- [rust-v0.158.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.7) 0.158.0-alpha.7
- [rust-v0.158.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.12) 0.158.0-alpha.12
- [rust-v0.158.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.11) 0.158.0-alpha.11
- [rust-v0.158.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.10) 0.158.0-alpha.10
- [rust-v0.157.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.11.1) 0.157.0-alpha.11.1

#### ✅ Merged PRs
- [#47975](https://github.com/openai/codex/pull/47975) Prevent stale voice answers from reappearing during speech recovery
- [#47974](https://github.com/openai/codex/pull/47974) Preserve Git directory protections across writable roots
- [#47971](https://github.com/openai/codex/pull/47971) Add Pro Max plan support and update Pro display names
- [#47970](https://github.com/openai/codex/pull/47970) Expose current environment selections for a running turn
- [#47968](https://github.com/openai/codex/pull/47968) Handle Btrfs device mismatches when masking daemon sockets
- [#47967](https://github.com/openai/codex/pull/47967) Surface Flex capacity failures as a distinct terminal error
- [#47964](https://github.com/openai/codex/pull/47964) Preserve the client-agent header for Amazon Bedrock Runtime
- [#47962](https://github.com/openai/codex/pull/47962) Request transparent huge pages for Cargo and eligible Bazel rustc jobs
- [#47957](https://github.com/openai/codex/pull/47957) Bound tool-call observations to the outgoing Responses message budget
- [#47956](https://github.com/openai/codex/pull/47956) Support file references in image edit requests
- [#47954](https://github.com/openai/codex/pull/47954) Move fullscreen startup tips into the transcript
- [#47952](https://github.com/openai/codex/pull/47952) Prune expired in-memory message board registry entries
- [#47951](https://github.com/openai/codex/pull/47951) Use prebuilt V8 archives for Bazel on macOS and GNU Linux
- [#47947](https://github.com/openai/codex/pull/47947) Expand root authorization context to 16 messages
- [#47946](https://github.com/openai/codex/pull/47946) Add an in-memory agent message board for ephemeral sessions
- [#47945](https://github.com/openai/codex/pull/47945) Parameterize the thread initialization analytics test by originator
- [#47943](https://github.com/openai/codex/pull/47943) Remove unused Windows world-writable audit code
- [#47939](https://github.com/openai/codex/pull/47939) Separate selected plugin identities from MCP contributions
- [#47937](https://github.com/openai/codex/pull/47937) Add direct replies for thread settings updates
- [#47936](https://github.com/openai/codex/pull/47936) Make MCP and Code Mode input schema budgets configurable
- [#47935](https://github.com/openai/codex/pull/47935) Allow cached catalogs to satisfy MCP startup readiness
- [#47934](https://github.com/openai/codex/pull/47934) Apply the unchanged-model compaction shortcut to all session sources
- [#47932](https://github.com/openai/codex/pull/47932) Remove GPT-5.4 from bundled catalogs and preserve migration prompts
- [#47929](https://github.com/openai/codex/pull/47929) Generate TUI prompt suggestions after successful turns
- [#47927](https://github.com/openai/codex/pull/47927) Use `127.0.0.1` for local login redirects
- [#47926](https://github.com/openai/codex/pull/47926) Retry file blob uploads on HTTP 502 and 504
- [#47924](https://github.com/openai/codex/pull/47924) Make project trust lookup paths explicit and defer root resolution
- [#47922](https://github.com/openai/codex/pull/47922) Allow full-access Windows setup to provision through registered Core
- [#47920](https://github.com/openai/codex/pull/47920) Allow directory moves under global Seatbelt basename denies
- [#47919](https://github.com/openai/codex/pull/47919) Transport large Windows sandbox launch payloads through the environment
- [#47918](https://github.com/openai/codex/pull/47918) Parameterize the turn-start originator header test
- [#47915](https://github.com/openai/codex/pull/47915) Reuse verified V8 checksum manifests from the artifact cache
- [#47913](https://github.com/openai/codex/pull/47913) Add an opt-in flag to defer mailbox preemption
- [#47912](https://github.com/openai/codex/pull/47912) Fix attestation routing during thread startup
- [#47911](https://github.com/openai/codex/pull/47911) Add TUI composer support for prompt suggestions
- [#47908](https://github.com/openai/codex/pull/47908) Alias `tui.whimsy` to `tui.effects.starfield`
- [#47904](https://github.com/openai/codex/pull/47904) Support nested canonical paths in config key aliases
- [#47903](https://github.com/openai/codex/pull/47903) Move config key alias normalization ahead of merging
- [#47902](https://github.com/openai/codex/pull/47902) Avoid repeated table clones during config merging
- [#47901](https://github.com/openai/codex/pull/47901) Add bounded credential-storage telemetry helpers
- [#47900](https://github.com/openai/codex/pull/47900) Default local threads to paginated history
- [#47899](https://github.com/openai/codex/pull/47899) Add diagnostic reasons to MCP attribution errors
- [#47898](https://github.com/openai/codex/pull/47898) Preserve local-binding inheritance in environment network policies
- [#47896](https://github.com/openai/codex/pull/47896) Preserve Markdown formatting when copying transcript selections
- [#47894](https://github.com/openai/codex/pull/47894) Clean up temporary Codex homes after TUI tests
- [#47891](https://github.com/openai/codex/pull/47891) Support client secrets for pre-registered MCP OAuth clients
- [#47889](https://github.com/openai/codex/pull/47889) Include TUI client logs in diagnostic uploads
- [#47887](https://github.com/openai/codex/pull/47887) Warn users when SQLite diagnostic log writes fail
- [#47886](https://github.com/openai/codex/pull/47886) Preserve diagnostic logs when SQLite logging fails
- [#47881](https://github.com/openai/codex/pull/47881) Use Tokio's clock for TUI paste timing

#### 🐛 New Issues
- [#47897](https://github.com/openai/codex/issues/47897) [Codex App] Restore visible Commit and Push buttons in the project sidebar `enhancement` `app` 💬3
- [#47868](https://github.com/openai/codex/issues/47868) Windows: Node.js spawn fails with EPERM when using stdio pipes inside Codex `bug` `windows-os` `sandbox` `app` 💬4
- [#47969](https://github.com/openai/codex/issues/47969) Mac app no longer working and connecting to account says you don't have access to work yet `bug` `auth` `app` 💬3
- [#47972](https://github.com/openai/codex/issues/47972) [Windows Desktop] GPT-6 Astra/Sol/Luna available in CLI and mobile Work but missing from Desktop model picker `bug` `windows-os` `app` 💬2
- [#47834](https://github.com/openai/codex/issues/47834) No way to pass Responses API access_programs argument through codex harness `bug` `safety-check` `app-server` 💬1
- [#47978](https://github.com/openai/codex/issues/47978) Old Chats Not Appearing on the Sidebar `bug` `app` `session` 💬1
- [#47977](https://github.com/openai/codex/issues/47977) [VS Code + CLI] Conversation lock blocks input with no recovery; branch/edit also unavailable `bug` `extension` `app-server` 💬1
- [#47973](https://github.com/openai/codex/issues/47973) gVisor: another Linux sandbox option `enhancement` `sandbox` `CLI`
- [#47963](https://github.com/openai/codex/issues/47963) [Windows + iOS Remote] Desktop, iPhone and iPad show different project grouping; iPad exposes raw project ID `bug` `windows-os` `iOS` `session` 💬1
- [#47955](https://github.com/openai/codex/issues/47955) Codex App: authorized read-only review blocked with “Potentially unintended activity” `bug` `app` `safety-check` 💬1
- [#47950](https://github.com/openai/codex/issues/47950) Windows sandbox startup and elevated setup fail when deny-read ACL state is zero-filled `bug` `windows-os` `sandbox` 💬1
- [#47948](https://github.com/openai/codex/issues/47948) [Windows Desktop] Launch saturates CPU and system SSD, disrupting unrelated video/audio playback (26.917.9434.0) `bug` `windows-os` `app` `performance` 💬1
- [#47979](https://github.com/openai/codex/issues/47979) Chrome import surfaces deprecated, built-in, and stale extension IDs as failed imports `bug` `app` `browser`
- [#47976](https://github.com/openai/codex/issues/47976) /ps does not show what is running `bug` `TUI` `CLI`
- [#47966](https://github.com/openai/codex/issues/47966) [Bug/Question] Chrome extension pairing fails with a custom model provider `bug` `custom-model` `app` `browser`
- [#47961](https://github.com/openai/codex/issues/47961) Native OpenAI models cannot say which model they are: identity line has no model id (reproduced without any proxy) `bug` `model-behavior` `CLI`
- [#47960](https://github.com/openai/codex/issues/47960) Receiving thread's model is silently overwritten when another thread messages it via send_message_to_thread `bug` `app` `subagent` `app-server`
- [#47959](https://github.com/openai/codex/issues/47959) Thread deserialization fails wholesale on unknown subAgentActivity variant (`completed`) `bug` `extension` `subagent` `app-server`
- [#47958](https://github.com/openai/codex/issues/47958) connect `bug`
- [#47953](https://github.com/openai/codex/issues/47953) Incapable of following the smallest instruction as given. Knows rules it is breaking, unable to even list them in checklist tho. `bug` `model-behavior` `CLI`
- [#47949](https://github.com/openai/codex/issues/47949) Main agent keeps waiting after resumed subagent is no longer running `bug` `app` `subagent` `session`
- [#47944](https://github.com/openai/codex/issues/47944) File edit succeeds but prompts to retry without sandbox on Windows. `bug` `windows-os` `sandbox` `CLI`

#### 🔒 Closed Issues
- [#47290](https://github.com/openai/codex/issues/47290) Windows CLI 0.155.1: --remote to Linux app-server fails with “config/read failed in TUI”
- [#38300](https://github.com/openai/codex/issues/38300) Codex Desktop IAB dispatches input events but native text selection never changes

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,152 · **Open issues:** 826 · **Last push:** 3h ago

On September 25, 2026, Gemini CLI released version v0.62.0-nightly.20260924.g8e70c862f, which introduced a check for Visual Studio Code integration test presence during execution attempts and added a retry progress indicator during connection recovery. Significant merged pull requests included a fix that bounds tool output size and optimizes memory usage in long-running agent loops, as well as enhancements to the CLI that restore paused stdin after capability detection and distinguish between a missing MCP enablement configuration and malformed JSON. No new issues were reported today, marking a relatively routine day for the project, although the updates and fixes suggest continued improvements in functionality and performance.

#### 🚀 New Releases
- [v0.62.0-nightly.20260924.g8e70c862f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260924.g8e70c862f) Release v0.62.0-nightly.20260924.g8e70c862f

#### ✅ Merged PRs
- [#29451](https://github.com/google-gemini/gemini-cli/pull/29451) fix(core): bound tool output size and optimize memory lifecycle in long-running agent loops
- [#29487](https://github.com/google-gemini/gemini-cli/pull/29487) fix(cli): restore paused stdin after capability detection
- [#29446](https://github.com/google-gemini/gemini-cli/pull/29446) fix(cli): distinguish missing MCP enablement config from malformed JSON
- [#29472](https://github.com/google-gemini/gemini-cli/pull/29472) Changelog for v0.61.0

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,206 · **Open issues:** 2,266 · **Last push:** 3h ago

On September 25, 2026, GitHub Copilot CLI released version 1.0.89-3, which fixed the issue of ask-user forms keeping custom "Other" answers separate across multiple questions. Additionally, version 1.0.89-2 introduced significant improvements, including the ability for MCP pre-registered OAuth clients to honor configured oauthScopes, while also enhancing local session interactions. However, no pull requests were merged today, but several new issues were reported, notably issue #4964, where built-in voice dictation rejects the focused Changes inline comment editor as a non-text field. Other issues include problems with custom models and plugin installations on repositories using Git LFS.

#### 🚀 New Releases
- [v1.0.89-3](https://github.com/github/copilot-cli/releases/tag/v1.0.89-3) 1.0.89-3
- [v1.0.89-2](https://github.com/github/copilot-cli/releases/tag/v1.0.89-2) 1.0.89-2

#### 🐛 New Issues
- [#4964](https://github.com/github/copilot-cli/issues/4964) Built-in voice dictation rejects focused Changes inline comment editor as non-text field 💬1
- [#4960](https://github.com/github/copilot-cli/issues/4960) Enterprise-managed custom model is listed in /model but cannot be selected `triage` 💬1
- [#4965](https://github.com/github/copilot-cli/issues/4965) Desktop app: an extension joinSession() call removes all plugin skills from the session `triage`
- [#4963](https://github.com/github/copilot-cli/issues/4963) Custom-agent reference documents reasoningEffort, but the working frontmatter key is reasoning-effort `triage`
- [#4962](https://github.com/github/copilot-cli/issues/4962) `plugin install` fails on repos that use Git LFS: the whole repo's LFS content is downloaded, and one missing object aborts the install `triage`

#### 🔒 Closed Issues
- [#2058](https://github.com/github/copilot-cli/issues/2058) Add /fork command to branch a session for side quests without derailing the main objective
- [#2408](https://github.com/github/copilot-cli/issues/2408) Issues auto-updating CLI
- [#3682](https://github.com/github/copilot-cli/issues/3682) Support refreshing the BYOK provider credential without restarting the CLI
- [#4522](https://github.com/github/copilot-cli/issues/4522) Copilot CLI 1.0.81 forces sandbox while managed policy is undetermined, overriding sandbox.enabled=false
- [#3948](https://github.com/github/copilot-cli/issues/3948) Any web_fetch: TypeError: fetch failed
- [#3304](https://github.com/github/copilot-cli/issues/3304) [ERR_HTTP2_INVALID_SESSION]: The session has been destroyed — causes repeated transient retries
- [#2170](https://github.com/github/copilot-cli/issues/2170) Enable searching timeline history
- [#4116](https://github.com/github/copilot-cli/issues/4116) Copying selected prompt text includes the input box's left border
- [#3934](https://github.com/github/copilot-cli/issues/3934) MCP server 'blocked by policy'
- [#2128](https://github.com/github/copilot-cli/issues/2128) Change model for enqueued prompts
- [#4200](https://github.com/github/copilot-cli/issues/4200) Reason: Request Failed: 400 {"type":"error","error":
- [#3276](https://github.com/github/copilot-cli/issues/3276) Copilot CLI fails to start on Rocky Linux 8.10 due to GLIBC version mismatch in distributed native modules
- [#2786](https://github.com/github/copilot-cli/issues/2786) MCP Server 'Command to run' strips backslashes from Windows paths
- [#2702](https://github.com/github/copilot-cli/issues/2702) launch_engine ACCESS_VIOLATION (0xC0000005) on Windows after auto-update replaces binary
- [#4964](https://github.com/github/copilot-cli/issues/4964) Built-in voice dictation rejects focused Changes inline comment editor as non-text field
- [#3556](https://github.com/github/copilot-cli/issues/3556) Config changes does not work over ACP
- [#2968](https://github.com/github/copilot-cli/issues/2968) Line wraps break URL links in Windows Terminal
- [#4890](https://github.com/github/copilot-cli/issues/4890) In `ask_user` "Other" option has issues: it disappears or gets overridden by later "Other" text

### OpenCode (`anomalyco/opencode`)

**Stars:** 209,900 · **Open issues:** 6,241 · **Last push:** <1h ago

On September 25, 2026, there were no new releases, but several noteworthy pull requests were merged, enhancing the OpenCode ecosystem. Key fixes included #51240, which ensures that the browser page remains visible under floating content, and #51239, which improves codemode by better handling object patterns and Date components. Additionally, PR #50837 introduced a feature to honor program `valueOf` and `toString` in operators and conversions. Among the newly reported issues, #51087 stands out for causing crashes in the session timeline for non-English locales, indicating a critical area for immediate attention. Overall, today's developments primarily focused on improving stability and addressing user-reported issues.

#### ✅ Merged PRs
- [#51240](https://github.com/anomalyco/opencode/pull/51240) fix(desktop): keep browser page visible under floating content
- [#51239](https://github.com/anomalyco/opencode/pull/51239) fix(codemode): destructure object patterns from primitives and convert Date components through ToPrimitive
- [#51210](https://github.com/anomalyco/opencode/pull/51210) fix(tui): don't crash when fs.watch throws (e.g. ENOSPC)
- [#50837](https://github.com/anomalyco/opencode/pull/50837) feat(codemode): honor program valueOf and toString in operators and conversions
- [#51231](https://github.com/anomalyco/opencode/pull/51231) fix(stats): promote radar fixes to production
- [#51166](https://github.com/anomalyco/opencode/pull/51166) fix(core): apply GPT verbosity defaults at request time

#### 🐛 New Issues
- [#51087](https://github.com/anomalyco/opencode/issues/51087) app: TodoWrite crashes session timeline in non-English locales 💬2
- [#51219](https://github.com/anomalyco/opencode/issues/51219) Cant use free version after upgrading 💬1
- [#51233](https://github.com/anomalyco/opencode/issues/51233) [FEATURE]: Plugin API to register a custom provider icon 💬1
- [#51218](https://github.com/anomalyco/opencode/issues/51218) Skills with invalid-YAML frontmatter are silently dropped after the first load in a server process (gray-matter cache poisoning) 💬1
- [#51206](https://github.com/anomalyco/opencode/issues/51206) Tool execution interrupted 💬1
- [#51202](https://github.com/anomalyco/opencode/issues/51202) [Bug] Gpt-6 luna compaction error `2.0` 💬1
- [#51244](https://github.com/anomalyco/opencode/issues/51244) [FEATURE]: Add Local / Cloud / Hybrid mode control for model selection
- [#51241](https://github.com/anomalyco/opencode/issues/51241) Free models fail when `shell` or `read` permissions are denied
- [#51234](https://github.com/anomalyco/opencode/issues/51234) [FEATURE]: Support model variants in slash command frontmatter
- [#51230](https://github.com/anomalyco/opencode/issues/51230) [FEATURE]: Pre-Execution Tool Hooks / Guardrails Middleware & Native OpenTelemetry Support
- [#51229](https://github.com/anomalyco/opencode/issues/51229) [FEATURE] TUI: configurable reasoning bubbles and tool output collapsing
- [#51228](https://github.com/anomalyco/opencode/issues/51228) tui: Maximum call stack size exceeded when rendering a list
- [#51224](https://github.com/anomalyco/opencode/issues/51224) permissions: parallel Code Mode asks for the same tool orphan the second request
- [#51223](https://github.com/anomalyco/opencode/issues/51223) permissions: asks from MCP tools inside Code Mode never surface in the TUI, execute hangs until user interrupt
- [#51222](https://github.com/anomalyco/opencode/issues/51222) tui: submitting a client-side slash command sends it to the model instead of executing it
- [#51221](https://github.com/anomalyco/opencode/issues/51221) [FEATURE]: tui: system notifications never delivered in terminals without OSC 777 support (e.g. Alacritty); request native DBus delivery on Linux
- [#51220](https://github.com/anomalyco/opencode/issues/51220) [FEATURE]: Test that PermissionV2 declines pending requests when its scope closes
- [#51216](https://github.com/anomalyco/opencode/issues/51216) desktop(win): background service SIGKILLed mid-turn when snapshot capture blocks /api/info for >6s -> ~60s restart loop, aborted turns
- [#51214](https://github.com/anomalyco/opencode/issues/51214) Test harness captures every Effect log, so a failing test shows its symptom and none of its diagnostics
- [#51213](https://github.com/anomalyco/opencode/issues/51213) Background service resumes sessions still running on another server that shares the database
- [#51212](https://github.com/anomalyco/opencode/issues/51212) [Bug]: /models "OpenCode Go" section omits 10 models that the Go API and CLI return (incl. all DeepSeek)
- [#51208](https://github.com/anomalyco/opencode/issues/51208) tui: crashes with ENOSPC when inotify watch limit is exhausted `2.0`
- [#51209](https://github.com/anomalyco/opencode/issues/51209) [FEATURE]: Expose the V2 TUI composer to plugins
- [#51203](https://github.com/anomalyco/opencode/issues/51203) [FEATURE]:paginated output mode instead of infinitely scrolling
- [#51205](https://github.com/anomalyco/opencode/issues/51205) issuee , the ai is gone n no bot is available
- [#51201](https://github.com/anomalyco/opencode/issues/51201) provider: opencode-go 400 stub on long sessions varies per attempt (identical bytes replay 200/400/200)
- [#51199](https://github.com/anomalyco/opencode/issues/51199) cli: api post rejects a JSON body containing spaces on Windows
- [#51198](https://github.com/anomalyco/opencode/issues/51198) debug: evicting a loaded location recreates its project
- [#51197](https://github.com/anomalyco/opencode/issues/51197) project: no API or UI to remove projects and recently-closed project entries
- [#51196](https://github.com/anomalyco/opencode/issues/51196) session: new session created from a project binds to the service default location and is missing from that project's history
- [#51193](https://github.com/anomalyco/opencode/issues/51193) agents: config-defined shell deny on free-model agent fails session with misleading free-tier error
- [#51191](https://github.com/anomalyco/opencode/issues/51191) web: session in nested project folder opens at git repo root, nested .opencode/skills not discovered
- [#51188](https://github.com/anomalyco/opencode/issues/51188) Configurable timeout for MCP tool calls
- [#51186](https://github.com/anomalyco/opencode/issues/51186) tui: slash list does not distinguish built-in commands from custom, skill, and MCP commands

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,112 · **Open issues:** 1,477 · **Last push:** <1h ago

On September 25, 2026, Qwen Code released version 0.24.5, introducing notable features such as decoupling group-member access from the senderPolicy and adding a managed runtime attestation worker. Additionally, the nightly release v0.24.5-nightly.20260924.ffea2d024e brought enhancements for the Java SDK, including the Hosted Harness private client. Significant merged pull requests included a fix for preserving Claude's thinking across tool turns and improvements to the local findings ledger. The day also saw the emergence of a high-priority feature request (#12589) for an optional System One Decision Gate, highlighting user interest in new functionalities.

#### 🚀 New Releases
- [v0.24.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5) Release v0.24.5
- [v0.24.5-nightly.20260924.ffea2d024e](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5-nightly.20260924.ffea2d024e) Release v0.24.5-nightly.20260924.ffea2d024e
- [sdk-typescript-v0.1.15](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.15) SDK TypeScript Release v0.1.15
- [desktop-v0.24.5](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.5) Qwen Code Desktop v0.24.5

#### ✅ Merged PRs
- [#12663](https://github.com/QwenLM/qwen-code/pull/12663) chore(release): sdk-typescript v0.1.15
- [#12621](https://github.com/QwenLM/qwen-code/pull/12621) fix(core): Preserve Claude thinking across tool turns
- [#12660](https://github.com/QwenLM/qwen-code/pull/12660) fix(review): persist the local findings ledger when a round cannot anchor
- [#12633](https://github.com/QwenLM/qwen-code/pull/12633) test(cli): pin the managed-runtime worker's boot, bind and shutdown guards

#### 🐛 New Issues
- [#12589](https://github.com/QwenLM/qwen-code/issues/12589) Feature request: optional System One Decision Gate (von-install + /superfast) `priority/P3` `type/feature-request` `category/performance` `scope/model-switching` 💬5
- [#12628](https://github.com/QwenLM/qwen-code/issues/12628) Support multiple workspace folders (VS Code multi-root solutions) in the daemon shell guard `priority/P2` `type/feature-request` `category/cli` `scope/shell` 💬4
- [#12664](https://github.com/QwenLM/qwen-code/issues/12664) Shell-mode commands never hold the session busy: streamingState reads Idle while the command runs, so the queue drain admits a concurrent model turn `priority/P1` `type/bug` `category/ui` `scope/interactive` 💬3
- [#12657](https://github.com/QwenLM/qwen-code/issues/12657) review: local withheld-candidate branches still drop the round's findings ledger `priority/P2` `type/bug` `category/development` `scope/caching` 💬3
- [#12662](https://github.com/QwenLM/qwen-code/issues/12662) Where does a hosted endpoint that never asks for a key fit in modelProviders? `priority/P3` `type/documentation` `category/configuration` `scope/documentation` 💬3
- [#12612](https://github.com/QwenLM/qwen-code/issues/12612) Deferred review findings from PR #12559: fix(cli): match ink's OpenTUI popup geometry and completion truncation 💬3
- [#12600](https://github.com/QwenLM/qwen-code/issues/12600) fix(cli): --bare ignores privacy.usageStatisticsEnabled `priority/P2` `type/bug` `category/telemetry` `scope/settings` 💬3
- [#12645](https://github.com/QwenLM/qwen-code/issues/12645) Add Firecrawl to the web search MCP services docs `priority/P3` `type/documentation` `category/integration` `scope/mcp` 💬2
- [#12635](https://github.com/QwenLM/qwen-code/issues/12635) Main CI failed: Qwen Code CI on 00080e0d2392 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12647](https://github.com/QwenLM/qwen-code/issues/12647) Main CI failed: Qwen Code CI on a064952e33dc `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12667](https://github.com/QwenLM/qwen-code/issues/12667) Deferred review findings from PR #12183: feat(extensions): load deployment-managed extensions from a directory 💬1
- [#12659](https://github.com/QwenLM/qwen-code/issues/12659) Deferred review findings from PR #12650: fix(ci): fall back to the pinned yamllint when the runner image copy is stale or 💬1
- [#12658](https://github.com/QwenLM/qwen-code/issues/12658) Deferred review findings from PR #12492: feat(cli): agent-prepared Batch API workflow (/batch-api) 💬1

#### 🔒 Closed Issues
- [#11756](https://github.com/QwenLM/qwen-code/issues/11756) Virtualized history crashes with React error #185 during background-agent workflows
- [#12578](https://github.com/QwenLM/qwen-code/issues/12578) save-artifact's isSameFile overwrite guard has no hard-link witness (follow-up from #11848)
- [#11948](https://github.com/QwenLM/qwen-code/issues/11948) Docs: comments/JSDoc contradict the actual code in several places
- [#12214](https://github.com/QwenLM/qwen-code/issues/12214) docs(conversations-recovery): add explicit non-graceful shutdown guidance (fence detached ACP writers first)
- [#12657](https://github.com/QwenLM/qwen-code/issues/12657) review: local withheld-candidate branches still drop the round's findings ledger
- [#11848](https://github.com/QwenLM/qwen-code/issues/11848) 64-bit NTFS file ids make `isSameFile` and the deletion-journal swap check fail open on Windows
- [#12600](https://github.com/QwenLM/qwen-code/issues/12600) fix(cli): --bare ignores privacy.usageStatisticsEnabled
- [#12645](https://github.com/QwenLM/qwen-code/issues/12645) Add Firecrawl to the web search MCP services docs
- [#11941](https://github.com/QwenLM/qwen-code/issues/11941) feat(web-shell): add git visualization — branch selector, commit history graph, and worktree manager
- [#12635](https://github.com/QwenLM/qwen-code/issues/12635) Main CI failed: Qwen Code CI on 00080e0d2392
- [#12647](https://github.com/QwenLM/qwen-code/issues/12647) Main CI failed: Qwen Code CI on a064952e33dc

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 390,425 · **Open issues:** 8,643 · **Last push:** <1h ago

On September 25, 2026, there were no new releases for OpenClaw, but the day saw a robust set of merged pull requests aimed at improving overall functionality and fixing critical issues. Notable fixes include #139131, which preserves Copilot tenant credentials during repairs, and #157290, which ensures native commands honor the configured tool PATH. Additionally, the refactoring work in #157681 seeks to improve session result accuracy during cold reads. Among the newly reported issues, #157107 highlights a significant concern with the prepared-model-catalog worker, which continuously rebuilds plugin generation every few seconds, adversely affecting agent installations.

#### ✅ Merged PRs
- [#157652](https://github.com/openclaw/openclaw/pull/157652) fix(ci): prevent Security Review checkout retry collisions
- [#157651](https://github.com/openclaw/openclaw/pull/157651) fix(ci): recover interrupted Security Review response bodies
- [#157294](https://github.com/openclaw/openclaw/pull/157294) refactor(agents): deslop runners, harness and recovery
- [#139131](https://github.com/openclaw/openclaw/pull/139131) fix(auth): preserve Copilot tenant credentials during Doctor repair
- [#157706](https://github.com/openclaw/openclaw/pull/157706) refactor(msteams): consolidate stored service-URL validation
- [#157290](https://github.com/openclaw/openclaw/pull/157290) fix(codex): honor configured tool PATH in native commands
- [#157705](https://github.com/openclaw/openclaw/pull/157705) refactor(msteams): consolidate approval-kind labels
- [#156121](https://github.com/openclaw/openclaw/pull/156121) fix(sessions): keep session results current during cold reads
- [#157535](https://github.com/openclaw/openclaw/pull/157535) fix(testing): capture bounded upgrade integrity diagnostics
- [#157681](https://github.com/openclaw/openclaw/pull/157681) fix(test): prevent late announcements from contaminating registry tests
- [#148890](https://github.com/openclaw/openclaw/pull/148890) fix(update): preserve recovery files after ownership refusal
- [#157636](https://github.com/openclaw/openclaw/pull/157636) refactor(i18n): reuse native branch candidate extraction
- [#157689](https://github.com/openclaw/openclaw/pull/157689) perf(test): reuse MCP archives and batch worker fixture copies
- [#157624](https://github.com/openclaw/openclaw/pull/157624) fix(e2e): scan full onboarding logs for prompts
- [#156365](https://github.com/openclaw/openclaw/pull/156365) refactor(session-tools): derive contracts from schemas
- [#156367](https://github.com/openclaw/openclaw/pull/156367) refactor(channels): derive config contracts from schemas
- [#157685](https://github.com/openclaw/openclaw/pull/157685) refactor: reuse prepared fixtures in slow core tests
- [#157621](https://github.com/openclaw/openclaw/pull/157621) refactor(codex): reuse marketplace reference selection
- [#157710](https://github.com/openclaw/openclaw/pull/157710) chore(ui): refresh control ui locales
- [#157675](https://github.com/openclaw/openclaw/pull/157675) docs(gateway): show how we build OpenClaw on Team
- [#157580](https://github.com/openclaw/openclaw/pull/157580) refactor: verify IRC surrogate chunking over loopback
- [#153187](https://github.com/openclaw/openclaw/pull/153187) fix(plugins): prevent stale credential reads and stuck cleanup on reload
- [#141209](https://github.com/openclaw/openclaw/pull/141209) feat(agents): sharpen sessions_spawn research guidance and add stalled-child follow-up
- [#157588](https://github.com/openclaw/openclaw/pull/157588) fix(cli): make state database contention actionable
- [#157659](https://github.com/openclaw/openclaw/pull/157659) fix(update): restore npm-pack helper typechecking
- [#156369](https://github.com/openclaw/openclaw/pull/156369) refactor(config): derive root authoring contracts
- [#147781](https://github.com/openclaw/openclaw/pull/147781) fix(ci): keep child ownership until captured output closes
- [#157571](https://github.com/openclaw/openclaw/pull/157571) fix(subagents): stop completion transcript retry loops
- [#157208](https://github.com/openclaw/openclaw/pull/157208) refactor(channels): deslop channels, routing, pairing and hooks
- [#154472](https://github.com/openclaw/openclaw/pull/154472) fix: retain Gateway cleanup errors and completed cron output
- [#157459](https://github.com/openclaw/openclaw/pull/157459) fix: stop catalog renewal from stalling agent runs
- [#157033](https://github.com/openclaw/openclaw/pull/157033) fix: keep completion binding lookups off the Gateway event loop
- [#157556](https://github.com/openclaw/openclaw/pull/157556) fix(reply): use the primary when inherited or temporarily unavailable pins are refused
- [#156995](https://github.com/openclaw/openclaw/pull/156995) fix(node): wait for resource cleanup before shutdown completes
- [#157572](https://github.com/openclaw/openclaw/pull/157572) perf(sessions): remove duplicate foreground history reference scans
- [#157380](https://github.com/openclaw/openclaw/pull/157380) perf(typesafe): defer evaluator initialization until first decision
- [#157631](https://github.com/openclaw/openclaw/pull/157631) fix(agents): wait for database resources during deletion
- [#157471](https://github.com/openclaw/openclaw/pull/157471) fix(packaging): avoid heap exhaustion on large bundles
- [#157632](https://github.com/openclaw/openclaw/pull/157632) refactor(infra): share process error handler registries
- [#155800](https://github.com/openclaw/openclaw/pull/155800) improve: move operator profile database reads off the Gateway thread
- [#157573](https://github.com/openclaw/openclaw/pull/157573) chore(ui): refresh control ui locales
- [#157592](https://github.com/openclaw/openclaw/pull/157592) fix(gateway): avoid shutdown stalls from remote Skills subscriptions
- [#156205](https://github.com/openclaw/openclaw/pull/156205) perf(plugins): reuse declared tool membership during resolution
- [#157390](https://github.com/openclaw/openclaw/pull/157390) fix(ui): pasted text previews fail before sending
- [#157549](https://github.com/openclaw/openclaw/pull/157549) fix: explain rejected settings without losing edits
- [#157598](https://github.com/openclaw/openclaw/pull/157598) fix: keep Gateway responsive while recording trajectory events
- [#157629](https://github.com/openclaw/openclaw/pull/157629) fix(auth): show SIWC email and selected model account identity
- [#155089](https://github.com/openclaw/openclaw/pull/155089) docs: explain Codex app approval precedence
- [#157085](https://github.com/openclaw/openclaw/pull/157085) docs: deploy team servers with verified identities
- [#157607](https://github.com/openclaw/openclaw/pull/157607) refactor(wizard): share select prompt requests
- [#157619](https://github.com/openclaw/openclaw/pull/157619) fix(ui): GitHub folder links lose repository context
- [#157623](https://github.com/openclaw/openclaw/pull/157623) fix(test): preserve outer storage admission in relay fixtures
- [#157567](https://github.com/openclaw/openclaw/pull/157567) improve(update): speed up Git inspection for ref-heavy checkouts
- [#157590](https://github.com/openclaw/openclaw/pull/157590) fix(ui): omit empty sections from conversation Markdown exports
- [#156547](https://github.com/openclaw/openclaw/pull/156547) fix(doctor): explain update lint supervisor refusals
- [#153236](https://github.com/openclaw/openclaw/pull/153236) fix(update): let package updates finish without an implicit deadline
- [#157583](https://github.com/openclaw/openclaw/pull/157583) refactor(docs): remove completed Mintlify migration cleanup
- [#157579](https://github.com/openclaw/openclaw/pull/157579) fix(ci): avoid false Projects upgrade reader failures
- [#157576](https://github.com/openclaw/openclaw/pull/157576) ci: defer session-row publication scale proof to release validation
- [#157604](https://github.com/openclaw/openclaw/pull/157604) refactor: tighten prepared reply media tests
- [#157618](https://github.com/openclaw/openclaw/pull/157618) fix(release): avoid reparsing sealed worker bundles
- [#157611](https://github.com/openclaw/openclaw/pull/157611) chore(ci): move eight slow runtime tours to full release validation
- [#157633](https://github.com/openclaw/openclaw/pull/157633) fix(update): allow already-current installs without a Gateway service
- [#157273](https://github.com/openclaw/openclaw/pull/157273) fix(update): prevent candidate Doctor authority stack overflows
- [#157610](https://github.com/openclaw/openclaw/pull/157610) fix: frozen validation fails while planning current UI groups
- [#157609](https://github.com/openclaw/openclaw/pull/157609) fix: frozen upgrade validation cannot load its TypeScript runner
- [#157608](https://github.com/openclaw/openclaw/pull/157608) fix: plugin update validation selects stale compatibility chunks
- [#156242](https://github.com/openclaw/openclaw/pull/156242) test(e2e): shorten draft-proof shell wait
- [#157350](https://github.com/openclaw/openclaw/pull/157350) fix(update): avoid stale chunks after same-commit Git rebuilds
- [#157041](https://github.com/openclaw/openclaw/pull/157041) fix(mcp): wait for idle connection cleanup before resetting sessions
- [#157486](https://github.com/openclaw/openclaw/pull/157486) fix(release): restore stable manifest performance controls
- [#157490](https://github.com/openclaw/openclaw/pull/157490) refactor(google-meet): share doctor status output
- [#156220](https://github.com/openclaw/openclaw/pull/156220) improve: reduce Bun UI test time and memory growth
- [#157432](https://github.com/openclaw/openclaw/pull/157432) fix(update): avoid downloading unrelated Git history during checks
- [#157516](https://github.com/openclaw/openclaw/pull/157516) fix(gateway): restore native lint after transport changes
- [#156435](https://github.com/openclaw/openclaw/pull/156435) fix(doctor): validate retired model successors on the selected route
- [#157026](https://github.com/openclaw/openclaw/pull/157026) fix(release): repair frozen npm declaration sealing
- [#157480](https://github.com/openclaw/openclaw/pull/157480) improve(build): speed up Git update builds
- [#157454](https://github.com/openclaw/openclaw/pull/157454) feat(gateway): preserve browser sign-in requirements before connecting
- [#157373](https://github.com/openclaw/openclaw/pull/157373) fix(ci): preserve consumer selection across core type stripes
- [#155695](https://github.com/openclaw/openclaw/pull/155695) fix(agents): avoid repeated history scans during spawn admission
- [#157429](https://github.com/openclaw/openclaw/pull/157429) test: avoid worker preparation in search result fixtures
- [#156244](https://github.com/openclaw/openclaw/pull/156244) test(parallels): tighten host teardown fixtures
- [#156245](https://github.com/openclaw/openclaw/pull/156245) test(release): shorten serial pack budget proof
- [#157602](https://github.com/openclaw/openclaw/pull/157602) fix(test): retain runtimes after incomplete child cleanup
- [#157586](https://github.com/openclaw/openclaw/pull/157586) improve(update): speed up CLI help generation in source builds
- [#148567](https://github.com/openclaw/openclaw/pull/148567) feat(openai): add Sign in with ChatGPT through Responses
- [#157596](https://github.com/openclaw/openclaw/pull/157596) fix(cli): report managed Gateway slow starts without claiming failure
- [#152020](https://github.com/openclaw/openclaw/pull/152020) fix: preserve plugin restrictions during managed installation
- [#148966](https://github.com/openclaw/openclaw/pull/148966) refactor(agents): centralize tool description exclusions
- [#157585](https://github.com/openclaw/openclaw/pull/157585) refactor(cli): consolidate directory table formatting
- [#157170](https://github.com/openclaw/openclaw/pull/157170) fix: use publicOrigin as the default browser origin
- [#157561](https://github.com/openclaw/openclaw/pull/157561) test: skip durable resets for fresh custody fixtures
- [#140422](https://github.com/openclaw/openclaw/pull/140422) fix(codex): restore installed skills with catalog-backed models
- [#157581](https://github.com/openclaw/openclaw/pull/157581) test: make exec background promotion deterministic
- [#157589](https://github.com/openclaw/openclaw/pull/157589) fix: settle task notification fixture lifetimes

#### 🐛 New Issues
- [#157107](https://github.com/openclaw/openclaw/issues/157107) 2026.9.6: prepared-model-catalog worker rebuilds the plugin generation every ~6 s forever; agent runs never admitted (28-agent install) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬13
- [#157531](https://github.com/openclaw/openclaw/issues/157531) 2026.9.7 Fixes Tracker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬11
- [#157011](https://github.com/openclaw/openclaw/issues/157011) [Bug]: Managed update 2026.9.5 → 2026.9.6 always rolls back — RangeError "Maximum call stack size exceeded" in update-history reconciliation (survives doctor --fix) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬11
- [#157617](https://github.com/openclaw/openclaw/issues/157617) Session writer queue waits up to minutes with repeated agent DB integrity/maintenance work on 2026.9.6 `P1` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬8
- [#157234](https://github.com/openclaw/openclaw/issues/157234) Update recovery fails with active agent database lease `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬6
- [#156930](https://github.com/openclaw/openclaw/issues/156930) [Bug]: Codex resident catalog PLUGIN_STATE_OPEN_FAILED every 30s on 2026.9.6 despite successful DB/catalog reads; persists after restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬6
- [#157415](https://github.com/openclaw/openclaw/issues/157415) [Bug]: Doctor --fix refuses post-session plugin migrations for externally installed acpx and codex `bug` `regression` `clawsweeper:needs-live-repro` `impact:session-state` 💬6
- [#157657](https://github.com/openclaw/openclaw/issues/157657) [Bug]: Plugin reinstall churn invalidates an unrelated provider plugin, leaving reply dispatch unpublished for ~20 min and dropping a subagent completion `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬4
- [#157485](https://github.com/openclaw/openclaw/issues/157485) [Bug]: failed update leaks a hardlinked openclaw-update-runtime-* snapshot of the git checkout, making checkout plugin manifests unsafe `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬4
- [#157389](https://github.com/openclaw/openclaw/issues/157389) feishu channel: replies lost under multi-lane load — private-final guard self-suppression, ingress claim→adoption stall, cross-lane session writer supersession `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#157545](https://github.com/openclaw/openclaw/issues/157545) [Bug]: Severe performance regression in 2026.9.6 — CLI commands take 20–30+ minutes and Gateway WebSocket repeatedly disconnects `bug` `regression` `P0` `issue-rating: 🦪 silver shellfish` 💬4
- [#156917](https://github.com/openclaw/openclaw/issues/156917) State-lifecycle lease has no holder heartbeat or forced takeover: one hung client blocks gateway startup for 31 minutes (crash-restart loop) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬4
- [#157442](https://github.com/openclaw/openclaw/issues/157442) ACP turns are cancelled on admission after an in-process gateway restart `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#157303](https://github.com/openclaw/openclaw/issues/157303) [gateway] Transcript projection rebuild can surface as generic 500 on OpenAI-compatible retry `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬3
- [#157468](https://github.com/openclaw/openclaw/issues/157468) [Feature]: Android: simplify the sessions list header `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬3
- [#157388](https://github.com/openclaw/openclaw/issues/157388) [Feature]: Android: redesign Overview into a calm one-screen home `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬3
- [#157325](https://github.com/openclaw/openclaw/issues/157325) A stuck agent-DB resource makes every agent's replies fail with the generic failure copy until the gateway is restarted `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:message-loss` 💬3
- [#157077](https://github.com/openclaw/openclaw/issues/157077) Windows update 2026.9.5 to 2026.9.6 strands schema 18 state and requires manual repair `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#157056](https://github.com/openclaw/openclaw/issues/157056) Update failure: managed-service-preflight (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#157362](https://github.com/openclaw/openclaw/issues/157362) Git update from 2026.9.3 to eb377ac5 fails canary: immutable plugin migration order (acpx/codex) `bug` `regression` `clawsweeper:needs-live-repro` `impact:session-state` 💬3
- [#157491](https://github.com/openclaw/openclaw/issues/157491) [Bug]: Identical progress-card updates evade enabled loop protection as revisions change `bug` `good first issue` `no-stale` `P2` 💬3
- [#157782](https://github.com/openclaw/openclaw/issues/157782) [Bug]: pnpm build peaks at ~9.5GB in the tsdown-unified step since per-plugin unified bundles; OOMs 10GB hosts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#157670](https://github.com/openclaw/openclaw/issues/157670) [Bug]: Refused plugin reload invalidates the still-serving runtime generation `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬2
- [#157665](https://github.com/openclaw/openclaw/issues/157665) [Bug]: fix(codex): runtimePluginToolGrant silently dropped in dynamic tool build `bug` `no-stale` `regression` `P2` 💬2
- [#157645](https://github.com/openclaw/openclaw/issues/157645) Gateway shutdown session-store cleanup fails on retained directory of a deleted agent 💬2
- [#157781](https://github.com/openclaw/openclaw/issues/157781) @openclaw/kimi-provider: kimi-for-coding thinking profile stuck at off/on — K2.8 Preview supports low/high/max 💬2
- [#157783](https://github.com/openclaw/openclaw/issues/157783) [Bug]: native TypeScript 7 declaration emit peaks at ~13.5GB per tsgo child during pnpm build 💬2
- [#157736](https://github.com/openclaw/openclaw/issues/157736) [Feature]: Android Overview: show nodes as “8 of 9 online”, not fraction + percent + bar `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#157643](https://github.com/openclaw/openclaw/issues/157643) Usage reports coincide with out-of-window cold restores and repeated refresh timeouts `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#157692](https://github.com/openclaw/openclaw/issues/157692) Gateway startup blocks its main thread for 37.8s during media-persistence detection `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬2
- [#157761](https://github.com/openclaw/openclaw/issues/157761) [Bug]: config set --dry-run reports success for a target path the identical command rejects without --dry-run `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#157747](https://github.com/openclaw/openclaw/issues/157747) fix(updater): Control UI Gateway update handoff fails when its saved Node path is gone `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#157255](https://github.com/openclaw/openclaw/issues/157255) Turn claim still not released after lane timeout on 2026.9.5 (different trigger than #137043, 90+ min wedge) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#157686](https://github.com/openclaw/openclaw/issues/157686) Session-reclamation transactions stall the Gateway main thread ~3s, and the log omits database/operation so they cannot be attributed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#157605](https://github.com/openclaw/openclaw/issues/157605) High sustained CPU (240–276%) after v2026.9.6 upgrade – stuck sessions.list materialization `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#157092](https://github.com/openclaw/openclaw/issues/157092) [Performance] SQLite session-entry snapshots repeatedly materialize full transcript in long read transactions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#157513](https://github.com/openclaw/openclaw/issues/157513) [Bug]: Android Overview caps the session count at 50 `bug` `app: android` `no-stale` `P2` 💬2
- [#157481](https://github.com/openclaw/openclaw/issues/157481) [Feature]: Android: align the session dashboard header with other detail screens `enhancement` `app: android` 💬2
- [#157476](https://github.com/openclaw/openclaw/issues/157476) [Feature]: Android: move hardcoded font sizes into the ClawTheme type scale `enhancement` `app: android` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#157464](https://github.com/openclaw/openclaw/issues/157464) [Feature]: Android: compact approval cards like the Control UI `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#157451](https://github.com/openclaw/openclaw/issues/157451) [Feature]: Android: merge Connection and Status rows on the Gateway settings page `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#157449](https://github.com/openclaw/openclaw/issues/157449) [Feature]: Android: one primary button on the Gateway settings page `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#157408](https://github.com/openclaw/openclaw/issues/157408) [Feature]: Android: show a labeled step rail in setup `enhancement` `app: android` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#157403](https://github.com/openclaw/openclaw/issues/157403) [Feature]: Android: use Control UI wording in setup and phone approval `enhancement` `app: android` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#157401](https://github.com/openclaw/openclaw/issues/157401) [Feature]: Android: show the OpenClaw settings row only to admins `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#157400](https://github.com/openclaw/openclaw/issues/157400) [Feature]: Android: use Control UI names for Settings rows `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#157399](https://github.com/openclaw/openclaw/issues/157399) [Feature]: Android: order Settings like the Control UI `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#157367](https://github.com/openclaw/openclaw/issues/157367) [Feature]: Android sidebar: put Home first and Settings last by default `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#157340](https://github.com/openclaw/openclaw/issues/157340) [Feature]: Android: use "session" like the Control UI instead of "thread" and "chat" `enhancement` `app: android` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#157336](https://github.com/openclaw/openclaw/issues/157336) [Bug]: Android Home opens the last session instead of the main session `bug` `app: android` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#157646](https://github.com/openclaw/openclaw/issues/157646) Update startup canary fails on old Discord plugin settings during 9.5-to-9.6 upgrade `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#157647](https://github.com/openclaw/openclaw/issues/157647) Claude CLI backgrounded Bash turn stays silent and hits no-output watchdog on v2026.9.6 `P1` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦐 gold shrimp` 💬2
- [#157568](https://github.com/openclaw/openclaw/issues/157568) [Bug]: 2026.9.6 WSL Gateway regrows 7.5 GB of live plugin captures in 4 minutes despite 60s reclamation settings `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#157614](https://github.com/openclaw/openclaw/issues/157614) Feature request: independent command text limit for progress streaming `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#157443](https://github.com/openclaw/openclaw/issues/157443) [Bug]: Gateway start readiness timeout precedes successful startup; diagnostics rule out warm-up prematurely `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#157603](https://github.com/openclaw/openclaw/issues/157603) Update failure: repairing (2026.9.5) Saved sanitized report: /home/user/.openclaw/update-reports/10ab6a7430da41e2cd36a16f8b4994bdc6c03d46038fcba3b400279a66c8b1a6.7830d737d2cd7f5455f14dbc229d287a45091d2b8653dcb39a63b0904f5d75ca.md `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#157418](https://github.com/openclaw/openclaw/issues/157418) A faster way to answer simple messages before the big model wakes up `P3` 💬2
- [#157525](https://github.com/openclaw/openclaw/issues/157525) [Bug]: release-check SDK consumer compile exceeds 8 GiB during frozen-candidate qualification `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#157416](https://github.com/openclaw/openclaw/issues/157416) [Bug]: gateway performance exceeds 1.2 GB RSS release gate on current main `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#157377](https://github.com/openclaw/openclaw/issues/157377) [Bug]: Disallowed model override falls back to first catalog entry instead of configured primary `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#157537](https://github.com/openclaw/openclaw/issues/157537) [Bug]: claude-cli runtime emits assistant message twice (end_turn + stop), idempotencyKey dedup fails — duplicate webchat delivery (2026.9.6) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#157477](https://github.com/openclaw/openclaw/issues/157477) automations get: outputSchema validation fails (state.scheduleErrorCount not allowed) on 2026.9.6 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#157483](https://github.com/openclaw/openclaw/issues/157483) [Bug]: Manual /compact on claude-cli is discarded when the next turn reuses the live claude process 💬2
- [#157778](https://github.com/openclaw/openclaw/issues/157778) Update failure: gateway-recovery-verification (2026.9.6) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬1
- [#157712](https://github.com/openclaw/openclaw/issues/157712) 2026.9.6: every CLI state read leaks one 162 MB read-only DB snapshot under ~/.cache/openclaw (two staged, one removed at exit); 23 GB in 25 min from scheduled scripts `P1` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#157430](https://github.com/openclaw/openclaw/issues/157430) [Bug]: Mexico WhatsApp numbers may require legacy +521 normalization for inbound/outbound messages `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#157762](https://github.com/openclaw/openclaw/issues/157762) [Feature]: Local Ollama: take thinking levels from `/api/show` → `thinking.values` (Qwen3.8's `xhigh` is refused, and High/Maximum run at its default) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157760](https://github.com/openclaw/openclaw/issues/157760) [Bug]: secrets audit flags a plaintext API key that configure --section model itself writes, with no supported non-Vault way to store a SecretRef in a SQLite auth profile `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157667](https://github.com/openclaw/openclaw/issues/157667) Remote desktop application audio for managed Linux desktops `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#157640](https://github.com/openclaw/openclaw/issues/157640) Update failure: requested (2026.9.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#157714](https://github.com/openclaw/openclaw/issues/157714) [Bug]: Opening the configuration file removes the rejected draft reason 💬1
- [#157738](https://github.com/openclaw/openclaw/issues/157738) Update failure: runtime-verification-failed (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#157642](https://github.com/openclaw/openclaw/issues/157642) Reduce repeated work when listing configured agents 💬1
- [#157691](https://github.com/openclaw/openclaw/issues/157691) Codex turn intermittently fails policy handoff after config hot reload, then succeeds on retry `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#157639](https://github.com/openclaw/openclaw/issues/157639) [Bug]: Windows CP866 cmd output still mojibakes because console encoding map omits code page 866 💬1
- [#157688](https://github.com/openclaw/openclaw/issues/157688) Update failure: finalize:doctor (2026.9.5) `clawsweeper:needs-info` `impact:session-state` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#157699](https://github.com/openclaw/openclaw/issues/157699) Bug: native plugin sidebar selection stays stale after navigation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#157698](https://github.com/openclaw/openclaw/issues/157698) [Feature]: Allow unmentioned replies in bot-created threads `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#157702](https://github.com/openclaw/openclaw/issues/157702) [Bug]: MSTeams progress status runs rows together in 1:1 chats (informative updates are single-line) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#157243](https://github.com/openclaw/openclaw/issues/157243) [Bug]: 2026.9.6 Doctor restoration still times out in 90s native activation admission after #153017 `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#157638](https://github.com/openclaw/openclaw/issues/157638) Plugin-hosted pino registers a process 'exit' listener per vendored copy, tripping MaxListenersExceededWarning at every startup `P2` `impact:other` 💬1
- [#157676](https://github.com/openclaw/openclaw/issues/157676) [Bug]: MSTeams native approval cards in 1:1 chats are never finalized after a decision `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#157668](https://github.com/openclaw/openclaw/issues/157668) Plugin SDK: supply deployment-specific external supervisor guidance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157637](https://github.com/openclaw/openclaw/issues/157637) Docs feedback: /channels/nextcloud-talk `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#157409](https://github.com/openclaw/openclaw/issues/157409) [Feature]: Android: ask for phone permissions on first use, not all during setup `enhancement` `app: android` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#157644](https://github.com/openclaw/openclaw/issues/157644) Reclamation worker opens repeatedly run full integrity validation during live Gateway operation `P1` `impact:crash-loop` 💬1
- [#157012](https://github.com/openclaw/openclaw/issues/157012) [Bug]: Git update post-update verification loads removed hashed io.write chunk 💬1
- [#157630](https://github.com/openclaw/openclaw/issues/157630) An explicit --max-old-space-size silently defeats a worker's resourceLimits (managed heap policy adds one) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157627](https://github.com/openclaw/openclaw/issues/157627) [Feature]: Plugin-supported cross-channel /fork with reversible in-place fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#157507](https://github.com/openclaw/openclaw/issues/157507) [Feature]: Support explicit bundled plugin and skill selection for Docker builds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157131](https://github.com/openclaw/openclaw/issues/157131) Use the public Gateway origin as the default browser allowlist `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#157593](https://github.com/openclaw/openclaw/issues/157593) Update failure: finalize:doctor (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#157587](https://github.com/openclaw/openclaw/issues/157587) [Bug]: Session Activity Indicators missing/not working MacOS App `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#157473](https://github.com/openclaw/openclaw/issues/157473) [Bug]: A refused stored model override still falls back to the first allowed catalog entry (parent-inherited pin and degraded catalog) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#157575](https://github.com/openclaw/openclaw/issues/157575) [Bug]: Managed Gateway heap flag overrides per-worker old-space limits `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157553](https://github.com/openclaw/openclaw/issues/157553) Receive Telegram, Feishu, Teams, and Nextcloud webhooks on the Gateway port `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#157532](https://github.com/openclaw/openclaw/issues/157532) [Bug]: Control UI layout flickers when Browser is open in the dock and a chat side panel `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#157547](https://github.com/openclaw/openclaw/issues/157547) [Bug]: CDP attachment redirects native browser downloads to a temporary directory `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#157546](https://github.com/openclaw/openclaw/issues/157546) channels add non-TTY advice points at `--use-env`, which 13 bundled channels never register `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#157541](https://github.com/openclaw/openclaw/issues/157541) [Bug]: Installed Claude CLI version probe never raises OAuth identity — Opus 5.5 rejected as 'Claude Code 2.1.278' with 2.1.281 on PATH (v2026.9.6) `P1` `clawsweeper:needs-live-repro` `impact:auth-provider` `issue-rating: 🐚 platinum hermit` 💬1
- [#157526](https://github.com/openclaw/openclaw/issues/157526) [Bug]: v2026.9.6: sustained idle WorkerThread CPU and memory/swap pressure on 4 GB Ubuntu VPS `bug` `bug:behavior` `P1` `issue-rating: 🦪 silver shellfish` 💬1
- [#157489](https://github.com/openclaw/openclaw/issues/157489) Update failure: global-install-failed (2026.9.4) `P1` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#157522](https://github.com/openclaw/openclaw/issues/157522) eager-import-closure test fails: PR wrapper inventory is missing config-journal-snapshot.kernel.ts 💬1
- [#157519](https://github.com/openclaw/openclaw/issues/157519) [Bug]: Failed migrating legacy device identity: FsSafeError: native no-replace move is unavailable `bug` `regression` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#157518](https://github.com/openclaw/openclaw/issues/157518) [Bug]: [Bug]: iOS Voice Wake stays in Listening state but never detects wake word `bug` `bug:behavior` `P2` `maturity:stable` 💬1
- [#157512](https://github.com/openclaw/openclaw/issues/157512) [Bug]: Successful plugin reload closes initiating turn’s Gateway tool authority before post-reload verification `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157510](https://github.com/openclaw/openclaw/issues/157510) [Feature]: Make remote session hosting optional while retaining local sessions and browser nodes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157509](https://github.com/openclaw/openclaw/issues/157509) [Feature]: Make the complete native GitHub integration independently optional `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157506](https://github.com/openclaw/openclaw/issues/157506) [Feature]: Make remaining optional bundled plugins removable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157511](https://github.com/openclaw/openclaw/issues/157511) [Feature]: Support deployment-wide marketplace discovery controls through the feed/catalog owner `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157508](https://github.com/openclaw/openclaw/issues/157508) [Feature]: Derive channel setup choices from installed plugins and the selected catalog `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#157499](https://github.com/openclaw/openclaw/issues/157499) [Bug]: memory-core dreaming cron job fails with DataCloneError: #<Object> could not be cloned `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#157786](https://github.com/openclaw/openclaw/issues/157786) Update failure: managed-service-preflight (2026.9.5)

#### 🔒 Closed Issues
- [#157107](https://github.com/openclaw/openclaw/issues/157107) 2026.9.6: prepared-model-catalog worker rebuilds the plugin generation every ~6 s forever; agent runs never admitted (28-agent install)
- [#157011](https://github.com/openclaw/openclaw/issues/157011) [Bug]: Managed update 2026.9.5 → 2026.9.6 always rolls back — RangeError "Maximum call stack size exceeded" in update-history reconciliation (survives doctor --fix)
- [#134925](https://github.com/openclaw/openclaw/issues/134925) Gateway main thread hits ~100% CPU on every agent turn on ARM64/Pi
- [#127373](https://github.com/openclaw/openclaw/issues/127373) OAuth ownership ignores tenant routing scope and can delete or adopt another tenant credential
- [#157468](https://github.com/openclaw/openclaw/issues/157468) [Feature]: Android: simplify the sessions list header
- [#157388](https://github.com/openclaw/openclaw/issues/157388) [Feature]: Android: redesign Overview into a calm one-screen home
- [#145000](https://github.com/openclaw/openclaw/issues/145000) subagent announce completions can trigger recursive self-announcements
- [#150956](https://github.com/openclaw/openclaw/issues/150956) Context engine contract: the host appends its live user turn after assemble() with no coverage signal, and the loop hook hands the engine the turn it just persisted
- [#157077](https://github.com/openclaw/openclaw/issues/157077) Windows update 2026.9.5 to 2026.9.6 strands schema 18 state and requires manual repair
- [#157362](https://github.com/openclaw/openclaw/issues/157362) Git update from 2026.9.3 to eb377ac5 fails canary: immutable plugin migration order (acpx/codex)
- [#157092](https://github.com/openclaw/openclaw/issues/157092) [Performance] SQLite session-entry snapshots repeatedly materialize full transcript in long read transactions
- [#157513](https://github.com/openclaw/openclaw/issues/157513) [Bug]: Android Overview caps the session count at 50
- [#157481](https://github.com/openclaw/openclaw/issues/157481) [Feature]: Android: align the session dashboard header with other detail screens
- [#157476](https://github.com/openclaw/openclaw/issues/157476) [Feature]: Android: move hardcoded font sizes into the ClawTheme type scale
- [#157464](https://github.com/openclaw/openclaw/issues/157464) [Feature]: Android: compact approval cards like the Control UI
- [#157451](https://github.com/openclaw/openclaw/issues/157451) [Feature]: Android: merge Connection and Status rows on the Gateway settings page
- [#157449](https://github.com/openclaw/openclaw/issues/157449) [Feature]: Android: one primary button on the Gateway settings page
- [#157408](https://github.com/openclaw/openclaw/issues/157408) [Feature]: Android: show a labeled step rail in setup
- [#157403](https://github.com/openclaw/openclaw/issues/157403) [Feature]: Android: use Control UI wording in setup and phone approval
- [#157401](https://github.com/openclaw/openclaw/issues/157401) [Feature]: Android: show the OpenClaw settings row only to admins
- [#157400](https://github.com/openclaw/openclaw/issues/157400) [Feature]: Android: use Control UI names for Settings rows
- [#157399](https://github.com/openclaw/openclaw/issues/157399) [Feature]: Android: order Settings like the Control UI
- [#157367](https://github.com/openclaw/openclaw/issues/157367) [Feature]: Android sidebar: put Home first and Settings last by default
- [#157340](https://github.com/openclaw/openclaw/issues/157340) [Feature]: Android: use "session" like the Control UI instead of "thread" and "chat"
- [#157336](https://github.com/openclaw/openclaw/issues/157336) [Bug]: Android Home opens the last session instead of the main session
- [#150726](https://github.com/openclaw/openclaw/issues/150726) Fallback chain doesn't fire on rate limit — 429 gets converted to friendly text before failover classifier sees it
- [#157443](https://github.com/openclaw/openclaw/issues/157443) [Bug]: Gateway start readiness timeout precedes successful startup; diagnostics rule out warm-up prematurely
- [#154470](https://github.com/openclaw/openclaw/issues/154470) Gateway stop and restart fall back after uncertain native service cleanup
- [#157418](https://github.com/openclaw/openclaw/issues/157418) A faster way to answer simple messages before the big model wakes up
- [#157525](https://github.com/openclaw/openclaw/issues/157525) [Bug]: release-check SDK consumer compile exceeds 8 GiB during frozen-candidate qualification
- [#157416](https://github.com/openclaw/openclaw/issues/157416) [Bug]: gateway performance exceeds 1.2 GB RSS release gate on current main
- [#157377](https://github.com/openclaw/openclaw/issues/157377) [Bug]: Disallowed model override falls back to first catalog entry instead of configured primary
- [#157738](https://github.com/openclaw/openclaw/issues/157738) Update failure: runtime-verification-failed (2026.9.4)
- [#157638](https://github.com/openclaw/openclaw/issues/157638) Plugin-hosted pino registers a process 'exit' listener per vendored copy, tripping MaxListenersExceededWarning at every startup
- [#156203](https://github.com/openclaw/openclaw/issues/156203) Repeated membership scans add work when resolving large plugin tool sets
- [#157644](https://github.com/openclaw/openclaw/issues/157644) Reclamation worker opens repeatedly run full integrity validation during live Gateway operation
- [#157012](https://github.com/openclaw/openclaw/issues/157012) [Bug]: Git update post-update verification loads removed hashed io.write chunk
- [#132178](https://github.com/openclaw/openclaw/issues/132178) [Bug]: Interrupted Codex compaction leaves its activity stream open
- [#132177](https://github.com/openclaw/openclaw/issues/132177) [Bug]: Cancelled native compaction can still be sent after admission
- [#157131](https://github.com/openclaw/openclaw/issues/157131) Use the public Gateway origin as the default browser allowlist
- [#157473](https://github.com/openclaw/openclaw/issues/157473) [Bug]: A refused stored model override still falls back to the first allowed catalog entry (parent-inherited pin and degraded catalog)
- [#157522](https://github.com/openclaw/openclaw/issues/157522) eager-import-closure test fails: PR wrapper inventory is missing config-journal-snapshot.kernel.ts
- [#157518](https://github.com/openclaw/openclaw/issues/157518) [Bug]: [Bug]: iOS Voice Wake stays in Listening state but never detects wake word

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 248,728 · **Open issues:** 43,362 · **Last push:** <1h ago

On September 24, 2026, Hermes Agent released version 0.21.5 (v2026.9.24), a patch release that consolidated approximately 460 merged PRs since v0.21.4, ensuring a stable update for downstream consumers like Docker images and Hermes Cloud, with more extensive notes anticipated for v0.22.0. Notably, PR #121563 addressed an issue in the desktop application by stamping the packaged app.asar and adopting a published session token. Among new issues, #122027 emerged as a significant concern, highlighting a failure to check for the existence of local files before attempting to open them, which reports "No application found to open URL." Other notable issues involved bugs with dependency synchronization and OAuth token management, indicating areas for immediate attention in upcoming updates.

#### 🚀 New Releases
- [v2026.9.24](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.9.24) Hermes Agent v0.21.5 (v2026.9.24)

#### ✅ Merged PRs
- [#121563](https://github.com/NousResearch/hermes-agent/pull/121563) fix(desktop): stamp packaged app.asar and adopt a published session token

#### 🐛 New Issues
- [#122027](https://github.com/NousResearch/hermes-agent/issues/122027) Desktop: opening a missing local file reports "No application found to open URL" — existence is never checked before shell.openExternal `type/bug` `P3` `comp/desktop` 💬2
- [#122071](https://github.com/NousResearch/hermes-agent/issues/122071) [Bug]: `hermes update` cannot finish dependency sync with the Hindsight catalog plugin: duplicate `hermes-plugin-hindsight` workspace members, and the `[hindsight]` extra (==0.6.1) came back in 27df3b88 💬1
- [#121756](https://github.com/NousResearch/hermes-agent/issues/121756) [Bug]: Auxiliary calls on `auto` keep sending a revoked Anthropic OAuth token after the main agent's silent token refresh (`agent.api_key` is never updated) `type/bug` `comp/agent` `provider/anthropic` `area/auth` 💬1
- [#122011](https://github.com/NousResearch/hermes-agent/issues/122011) [Bug]: write_file and patch empty the target file on Modal/Daytona/Vercel (heredoc stdin lands on the last command) `type/bug` `backend/modal` `backend/daytona` `tool/terminal` 💬1
- [#122006](https://github.com/NousResearch/hermes-agent/issues/122006) [Bug]: hermes plugins update deletes the user's config and data files in subdirectory installs and ignored data dirs `type/bug` `comp/cli` `comp/plugins` `P0` 💬1
- [#122075](https://github.com/NousResearch/hermes-agent/issues/122075) Model catalog: add stealth/space-bunny-alpha to the OpenRouter curated list
- [#122072](https://github.com/NousResearch/hermes-agent/issues/122072) execute_code remote RPC re-dispatches side-effecting tool calls when the response write fails
- [#122063](https://github.com/NousResearch/hermes-agent/issues/122063) [Urgent regression] Desktop 0.21.4 shows the same chat for all bots after profile control channel stalls `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop`
- [#122062](https://github.com/NousResearch/hermes-agent/issues/122062) Desktop: drive_preview refused in the active session after context compression (session_id vs activeSessionId identity mismatch) `type/bug` `tool/browser` `P2` `sweeper:risk-session-state`
- [#122053](https://github.com/NousResearch/hermes-agent/issues/122053) Desktop: persisted visibility state can keep available models hidden `type/bug` `P3` `comp/desktop`
- [#122054](https://github.com/NousResearch/hermes-agent/issues/122054) [Bug]: Current source version is older than catalog plugin requirements `type/bug` `comp/cli` `comp/plugins` `P2`

#### 🔒 Closed Issues
- [#90477](https://github.com/NousResearch/hermes-agent/issues/90477) [Bug]: Desktop profile switch on an SSH remote connection spawns a LOCAL backend, falls back to an unrelated local profile, and reconnects to a different SSH host
- [#92760](https://github.com/NousResearch/hermes-agent/issues/92760) Bot Mode group bots reply slowly and stall; Desktop UI needs polish (silent failures, poll-driven replies, zh-CN)
- [#89896](https://github.com/NousResearch/hermes-agent/issues/89896) [Bug]: Desktop auto-speak still races after 63565fa26 — now doubles, truncates, or skips
- [#100438](https://github.com/NousResearch/hermes-agent/issues/100438) Desktop app fails to start when dashboard.public_url is configured (auth gate rejects legacy token)
- [#89697](https://github.com/NousResearch/hermes-agent/issues/89697) Desktop: selecting a profile spawns its backend but the sidebar never switches — `$activeGatewayProfile` stays on the default profile
- [#85605](https://github.com/NousResearch/hermes-agent/issues/85605) [Bug]: Desktop Electron fails to connect to `hermes serve` headless backend — 404 on session token handshake
- [#63577](https://github.com/NousResearch/hermes-agent/issues/63577) Critical: hermes update on Windows destroys local commits + kills active chat + blocks when desktop is open
- [#76030](https://github.com/NousResearch/hermes-agent/issues/76030) [Bug]: Desktop — transcript completely frozen (cannot scroll) with user prompts missing mid-session (P0)
- [#98146](https://github.com/NousResearch/hermes-agent/issues/98146) [Bug][Desktop] Thinking spinner stuck forever after turn interruption / tool-call limit (DeepSeek, GLM Flash)
- [#91437](https://github.com/NousResearch/hermes-agent/issues/91437) Docker image: google-cloud-pubsub missing from image, causes google_chat adapter to fail with misleading SA key invalid/revoked status
- [#109858](https://github.com/NousResearch/hermes-agent/issues/109858) Heartbeat and loop not working for remote backends in Windows Hermes Desktop
- [#90580](https://github.com/NousResearch/hermes-agent/issues/90580) Bug: non-media attachments (e.g. `.md`) delivered via MEDIA: can't be downloaded on a remote dashboard (misleading "missing, unreadable, or too large")
- [#64109](https://github.com/NousResearch/hermes-agent/issues/64109) Desktop app fails to boot after engine upgrade (.17 → .18): invalid app.asar/dist web-dist path + renderer readiness handshake timeout
- [#91710](https://github.com/NousResearch/hermes-agent/issues/91710) [Bug] Desktop does not show unread state when an inactive bot finishes
- [#93204](https://github.com/NousResearch/hermes-agent/issues/93204) Desktop: attached images render at 512px in chat (pill, sent bubble, lightbox), full resolution only after session reload
- [#99003](https://github.com/NousResearch/hermes-agent/issues/99003) [CN Desktop 0.19.0-cn.7] auth.json GBK parse loop still present — image upload broken (rebuild needed to pick up #71078)
- [#89713](https://github.com/NousResearch/hermes-agent/issues/89713) Desktop app cannot download non-media files (.docx, .pdf, etc.) from gateway — X-Hermes-Session-Token header ignored when auth_required=true
- [#88866](https://github.com/NousResearch/hermes-agent/issues/88866) [Bug]: Desktop sidebar stays empty after auto-archive sweep, even after sessions are restored
- [#87875](https://github.com/NousResearch/hermes-agent/issues/87875) [Bug]: Windows self-update deferral (exit 2) loops forever with a local carried commit — 'Update failed' on every launch
- [#87828](https://github.com/NousResearch/hermes-agent/issues/87828) [Bug]: Desktop backend health-check SIGTERM'd on Windows due to slow powershell.exe spawn under Defender Behavior Monitoring
- [#81535](https://github.com/NousResearch/hermes-agent/issues/81535) v0.20.0 Windows: Desktop IPC bridge unavailable + dashboard WebSocket fails
- [#80900](https://github.com/NousResearch/hermes-agent/issues/80900) Desktop app: clicking 'New Session' inside a Project does nothing (no request reaches backend)
- [#72583](https://github.com/NousResearch/hermes-agent/issues/72583) [Bug]: I've been having this problem ever since I upgraded from version 0.19.0. My operating system is Windows 10.
- [#106670](https://github.com/NousResearch/hermes-agent/issues/106670) Desktop app.asar not refreshed by hermes update on git install — 3-week-old UI misses fix #87857, clarify/choice cards crash
- [#92816](https://github.com/NousResearch/hermes-agent/issues/92816) Desktop: Enter after selecting a clarify choice does not submit
- [#101640](https://github.com/NousResearch/hermes-agent/issues/101640) Desktop: config-record cache not scoped per gateway; whole-record settings save after switching gateways overwrites the other machine's config.yaml
- [#119252](https://github.com/NousResearch/hermes-agent/issues/119252) [Bug]: Windows desktop — Hermes.exe stops responding (OS AppHangB1) after minimize-to-tray use, and the app's own logs capture nothing because every hang affordance is renderer-scoped
- [#65047](https://github.com/NousResearch/hermes-agent/issues/65047) [Bug]: Opening the same chat in a second Desktop window shows stale history and can send into an out-of-date context (no live sync, no refresh)
- [#97651](https://github.com/NousResearch/hermes-agent/issues/97651) [desktop] Backend port announce fails when external gateway/agent running, or on low-RAM cold start (90s timeout)
- [#91047](https://github.com/NousResearch/hermes-agent/issues/91047) [Bug]: Switching profiles bug w/multiple gateways
- [#89448](https://github.com/NousResearch/hermes-agent/issues/89448) [Bug] Profile-level auxiliary.vision config not overriding global config — UI saves but backend ignores it
- [#79643](https://github.com/NousResearch/hermes-agent/issues/79643) Desktop updater fails when Hermes is still running (no graceful shutdown wait)
- [#79860](https://github.com/NousResearch/hermes-agent/issues/79860) Bug: Desktop UI update fails with "Hermes is still running" — detached gateway's venv-launcher survives the updater's kill (Windows)
- [#79242](https://github.com/NousResearch/hermes-agent/issues/79242) [Bug]: Windows Desktop updater still aborts on the normal Gateway runtime Python process
- [#108102](https://github.com/NousResearch/hermes-agent/issues/108102) Desktop: approval.respond fails with "Session owner could not be resolved" on a Telegram-resumed session after client restart
- [#92220](https://github.com/NousResearch/hermes-agent/issues/92220) [Bug]: Artifacts miss every file produced by the `terminal` tool — script-generated figures are never indexed

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,643 · **Open issues:** 8,398 · **Last push:** <1h ago

There were no new releases for vLLM on September 25, 2026, but significant progress was made with several important merged pull requests. Notable updates included performance enhancements such as the parallelization of registered CUDA Triton kernel warmup (#58582) and bug fixes addressing issues like the acceptance of end-of-sequence tokens after grammar completion in the outlines backend (#57743). Additionally, there were resolutions for decoding issues ensuring correct behavior in various components like the KV Cache and the Mamba module. A concerning new issue was reported regarding a deterministic segfault occurring right after weight loading when using the single L4 GPU with the V1 engine (#58616), highlighting potential instability in that configuration.

#### ✅ Merged PRs
- [#49371](https://github.com/vllm-project/vllm/pull/49371) [Perf] Batch Mamba2 prefill SSM state saves, removing GPU<->CPU syncs
- [#58488](https://github.com/vllm-project/vllm/pull/58488) Fix full logprobs in token-in/token-out responses
- [#57743](https://github.com/vllm-project/vllm/pull/57743) [Bugfix] Accept EOS after grammar finish in outlines backend; reject json_object at validation
- [#55270](https://github.com/vllm-project/vllm/pull/55270) [Bugfix] GLM-5.3-Flash: launch the kpool paged MQA logits in the varlen mode its schedule was built with
- [#58626](https://github.com/vllm-project/vllm/pull/58626) [Bugfix][Frontend] Count reasoning tokens for Harmony, DeepSeek-V3 and Step3 parsers
- [#57775](https://github.com/vllm-project/vllm/pull/57775) [Bugfix][KVConnector] Finalize saves on steps without a forward
- [#57988](https://github.com/vllm-project/vllm/pull/57988) [Bugfix] Release prompt_embeds tensor when its InputBatch slot is freed
- [#58472](https://github.com/vllm-project/vllm/pull/58472) [KV Connector] Fix DecodeBench fp8 fill values and add a startup fill mode
- [#58582](https://github.com/vllm-project/vllm/pull/58582) [Perf] Parallelize registered CUDA Triton kernel warmup at startup
- [#58368](https://github.com/vllm-project/vllm/pull/58368) [Bugfix][Mamba] Restore prompt-tail prefix-cache hits with MTP
- [#58444](https://github.com/vllm-project/vllm/pull/58444) [Bugfix][Quantization] Give LM heads standard linear metadata
- [#58558](https://github.com/vllm-project/vllm/pull/58558) [ROCm][CI] Mirror the DSv4-Flash disaggregated DP EP group on MI355
- [#58288](https://github.com/vllm-project/vllm/pull/58288) [Bugfix][Core] Keep every multimodal feature in the partial-block KV event
- [#52623](https://github.com/vllm-project/vllm/pull/52623) [BUGFIX] fix ovis2_5 multimodal tokens
- [#52245](https://github.com/vllm-project/vllm/pull/52245) [PD][PushConnector] Record last activity of remotes on the D side
- [#58628](https://github.com/vllm-project/vllm/pull/58628) [CI] Report to CRCR after all jobs finish, gated on the build's long pole
- [#58283](https://github.com/vllm-project/vllm/pull/58283) [XPU][CI] enable prompt embeds tests on XPU
- [#51694](https://github.com/vllm-project/vllm/pull/51694) [Bugfix][KV Cache] Fix incremental multimodal block hashing
- [#58612](https://github.com/vllm-project/vllm/pull/58612) [Bugfix][Outlines] Fix EOS termination and unconstrained masks after rejected drafts
- [#57632](https://github.com/vllm-project/vllm/pull/57632) [DFlash] Capture the context K/V precompute in the draft CUDA graph
- [#57453](https://github.com/vllm-project/vllm/pull/57453) [Bugfix][KV Offload] Retain offload event metadata through batch translation
- [#58535](https://github.com/vllm-project/vllm/pull/58535) [ROCm][CI] skip the ROCm MRV1 default where MRV1 cannot serve the config
- [#48521](https://github.com/vllm-project/vllm/pull/48521) [Bugfix] Pass quant_config to DiffusionGemma's ParallelLMHead
- [#58216](https://github.com/vllm-project/vllm/pull/58216) [Perf] DiffusionGemma: constrained reads over the request's logprob_token_ids
- [#51681](https://github.com/vllm-project/vllm/pull/51681) [ROCm] Fix misrouting race-condition in multi-decode P/D disagg with mori-io
- [#53585](https://github.com/vllm-project/vllm/pull/53585) [Cleanup] Remove online quantization support in `fp8.py` in favor of online shorthands
- [#58572](https://github.com/vllm-project/vllm/pull/58572) [Refactor] Move auxiliary files out of the repository root
- [#58427](https://github.com/vllm-project/vllm/pull/58427) [Bugfix][Quantization] Add Humming to the W4A8 (INT4xFP8) MoE oracle
- [#58370](https://github.com/vllm-project/vllm/pull/58370) [Fast Start] Wait for weight cache daemon readiness
- [#58590](https://github.com/vllm-project/vllm/pull/58590) [Core] Skip JIT monitor when JIT warmup is disabled
- [#58593](https://github.com/vllm-project/vllm/pull/58593) [Bugfix] Keep JIT warmup under enforce-eager when fault tolerance is on
- [#48760](https://github.com/vllm-project/vllm/pull/48760) [Bugfix] Count unsplit Idefics3 image patches
- [#56092](https://github.com/vllm-project/vllm/pull/56092) [Bugfix] Resolve the Hub revision once per repo
- [#58275](https://github.com/vllm-project/vllm/pull/58275) [Bugfix] Capture prefill kernels for mixed FULL graphs
- [#58484](https://github.com/vllm-project/vllm/pull/58484) Revert "[DSpark] Support pipeline-parallel targets in aggregated serving (#56956)"
- [#54461](https://github.com/vllm-project/vllm/pull/54461) [transformer] RMSNorm matching for alternative rsqrt
- [#58545](https://github.com/vllm-project/vllm/pull/58545) [Frontend] Remove the slow tokenizer mode
- [#50769](https://github.com/vllm-project/vllm/pull/50769) fix(config): apply presence_penalty/frequency_penalty from override-generation-config
- [#58550](https://github.com/vllm-project/vllm/pull/58550) [Chore] Use Transformers v5 names and drop redundant processor `use_fast`
- [#57918](https://github.com/vllm-project/vllm/pull/57918) [Perf][Attention] Bound FlashInfer prefill dequantization scratch
- [#58446](https://github.com/vllm-project/vllm/pull/58446) [Refactor] Remove dead or duplicate tests
- [#57347](https://github.com/vllm-project/vllm/pull/57347) [Bugfix][Pooling] Fix JinaVL label configuration and restore multimodal tests
- [#58541](https://github.com/vllm-project/vllm/pull/58541) Remove `.gemini/` and `CLAUDE.md`
- [#58456](https://github.com/vllm-project/vllm/pull/58456) [ROCm][DSv4.1][Perf] Emit MXFP8 from the sparse decode reduce and run wo_a as a grouped FP8 GEMM
- [#51600](https://github.com/vllm-project/vllm/pull/51600) [XPU] enable XPU GRAPH by default
- [#57728](https://github.com/vllm-project/vllm/pull/57728) [MRV2] Validate MRV2 entrypoint logits processors
- [#58460](https://github.com/vllm-project/vllm/pull/58460) [Multimodal] Reuse the supplied tokenizer in the MiniMax-M3 VL processor
- [#57528](https://github.com/vllm-project/vllm/pull/57528) [Perf][Frontend] Offload streaming derender detokenization
- [#58133](https://github.com/vllm-project/vllm/pull/58133) [CPU] Gate the AVX10.2 paths on compiler support
- [#58117](https://github.com/vllm-project/vllm/pull/58117) [XPU][UT] Align HF and vLLM inputs for Qwen2 embedding test by preventing Sentence Transformers from applying chat template

#### 🐛 New Issues
- [#58627](https://github.com/vllm-project/vllm/issues/58627) [Bug][DSA] Complete sparse top-k output after DeepSelect detects a NaN 💬2
- [#58616](https://github.com/vllm-project/vllm/issues/58616) vllm serve segfaults deterministically right after weight loading (single L4 GPU, V1 engine) — only avoided by VLLM_TRACE_FUNCTION=1 💬2
- [#58520](https://github.com/vllm-project/vllm/issues/58520) [RFC]: Publish Mooncake Store residency once per complete block 💬2
- [#58565](https://github.com/vllm-project/vllm/issues/58565) [Bug]: EngineCore worker crashes with "RuntimeError: cancelled" on first /v1/embeddings request (CPU, bge-m3) `bug` `quantization` 💬2
- [#58579](https://github.com/vllm-project/vllm/issues/58579) [ROCm][Perf][GLM-5.3-Flash]: Support GLM-5.3-Flash with rocm_sparse_attn_decode `feature request` `rocm` `glm` 💬2
- [#58543](https://github.com/vllm-project/vllm/issues/58543) [Bug][MooncakeConnector] Decode-side bootstrap query has hardcoded 5s httpx default timeout — unconfigurable, no retry, fatal for first PD request in cold-start window 💬2
- [#58487](https://github.com/vllm-project/vllm/issues/58487) [Feature]: [ROCm][Hy4] Add calibrated FP8 KV-cache support for sparse MLA `feature request` `rocm` `kimi` `k3` 💬2
- [#58639](https://github.com/vllm-project/vllm/issues/58639) [Performance][ROCm] V2 runner PP side streams make gfx1201 (RDNA4) forward ~2× slower; main-stream option fixes it `performance` `rocm` 💬1
- [#58636](https://github.com/vllm-project/vllm/issues/58636) [Bug]: GLM-5.x sparse indexer: the replicated key norm is autotuned per rank, so TP ranks can select different candidates and greedy completions change from launch to launch `glm` 💬1
- [#58624](https://github.com/vllm-project/vllm/issues/58624) [Performance]: MoE decode ~15% slower on SM12x since #56876 (DeepGEMM contiguous-layout alignment 128 instead of 64) 💬1
- [#58606](https://github.com/vllm-project/vllm/issues/58606) [ROCm][Perf][Tracking Issue]: Hy4-Preview `feature request` `rocm` 💬1
- [#58492](https://github.com/vllm-project/vllm/issues/58492) [Bug]: verbose_json crashes when a Whisper chunk emits only EOS 💬1
- [#58567](https://github.com/vllm-project/vllm/issues/58567) [ROCm][Perf][GLM-5.3-Flash]: Remove cpy after _rocm_sparse_attn_prefill_ragged_triton `feature request` `rocm` `glm` 💬1
- [#58575](https://github.com/vllm-project/vllm/issues/58575) [Bug][ROCm]: v0.30.0 release is missing #57252, so GLM-5.3 (GlmMoeDsa) can't start on AMD `bug` `rocm` `glm` 💬1
- [#58523](https://github.com/vllm-project/vllm/issues/58523) [Bug]: explicit off-grid max_cudagraph_capture_size is silently truncated, largest decode batches run eager 💬1
- [#58640](https://github.com/vllm-project/vllm/issues/58640) [Bug]: When using the V4 parser in vLLM to parse outputs from DeepSeek V4.1 Flash, the leading extra space in V4.1 DSML tags breaks state machine matching and parameter regex, filters arg deltas, and prevents streaming return of tool call arguments. `bug` `tool-calling` `deepseek` `DSv4.1`
- [#58638](https://github.com/vllm-project/vllm/issues/58638) [RFC]: KV cache grouping for hybrid models with speculative drafters `RFC`
- [#58599](https://github.com/vllm-project/vllm/issues/58599) [Bug]: MiniMax fused allreduce+RMSNorm Lamport workspace silently disabled on cuda-bindings 13.4 — cudaIpcMemHandle_t.reserved removed `minimax`
- [#58597](https://github.com/vllm-project/vllm/issues/58597) [Bug]: MFU/MBU bills linear-attention layers of hybrid models as full attention; reported bandwidth exceeds the GPU's peak
- [#58596](https://github.com/vllm-project/vllm/issues/58596) [Bug]: `VLLM_DEBUG_MFU_METRICS=1` shuts the server down on the first request (msgspec `ValidationError` on `context_breakdown`)
- [#58580](https://github.com/vllm-project/vllm/issues/58580) [Feature]: [Rust Frontend][Multimodal] Add Gemma 4 image support / multimodal model spec `feature request` `multi-modality` `quantization` `rust`
- [#58578](https://github.com/vllm-project/vllm/issues/58578) [Feature]: Reduced draft vocabulary for MTP drafters that share the target lm_head (measured +25-29 % decode) `intel-gpu` `quantization`
- [#58562](https://github.com/vllm-project/vllm/issues/58562) [RFC]: Pluggable KV connector metrics on the Rust frontend via connector metrics descriptor `rust`
- [#58544](https://github.com/vllm-project/vllm/issues/58544) [Feature]: [Helm] Add configurable startupProbe for slow model initialization `feature request`
- [#58532](https://github.com/vllm-project/vllm/issues/58532) [Bug]: Triton fused MoE incorrectly indexes per-channel weight scales with per-tensor activations `bug` `quantization`
- [#58537](https://github.com/vllm-project/vllm/issues/58537) [RFC]: KV Context Editing — Relaxed Prefix Alignment for KV Allocation and Reuse `RFC`
- [#58494](https://github.com/vllm-project/vllm/issues/58494) probe-do-not-keep

#### 🔒 Closed Issues
- [#11905](https://github.com/vllm-project/vllm/issues/11905) [Feature]: Support Multiple Tasks Per Model
- [#22731](https://github.com/vllm-project/vllm/issues/22731) [Bug]: Avg prompt throughput: 0.0 tokens/s, Avg generation throughput: 0.0 tokens/s, Running: 1 reqs, Waiting: 0 reqs, GPU KV cache usage: 21.1%, Prefix cache hit rate: 11.9%
- [#36643](https://github.com/vllm-project/vllm/issues/36643) [Bug]: Qwen3.5 does not work with pipeline parallelism
- [#52109](https://github.com/vllm-project/vllm/issues/52109) [Bug][ROCm/gfx942]: DeepSeek-V4-Flash silent retrieval corruption for prompts ≥ ~4-5k tokens (AITER sparse indexer)
- [#33204](https://github.com/vllm-project/vllm/issues/33204) [Bug]: Qwen3-VL-Embedding model produces different embeddings than official qwen_vl_utils implementation
- [#48494](https://github.com/vllm-project/vllm/issues/48494) [Bug][Spec Decode] num_speculative_tokens_per_batch_size + MTP speculator fails full CUDA graph decode capture (InputBatch.make_dummy assert)
- [#57974](https://github.com/vllm-project/vllm/issues/57974) [Bug]: V1 `InputBatch` retains prompt-embedding tensors after requests finish
- [#56563](https://github.com/vllm-project/vllm/issues/56563) [Bug]: FLASH_ATTN_MLA_SPARSE emits 'Failed to initialize the TMA descriptor 1' every step for GLM-5.3-Flash (zero-extent descriptors; output correct)
- [#56945](https://github.com/vllm-project/vllm/issues/56945) [Bug]: rocm/vllm image never sets VLLM_ROCM_USE_AITER — Qwen3.5-122B-A10B-FP8 runs Triton MoE + ROCM_ATTN, 1.7x slower at short prompts and 3.7x at 12k than AITER + ROCM_AITER_UNIFIED_ATTN (MI300X/MI325X/MI355X)
- [#57350](https://github.com/vllm-project/vllm/issues/57350) [Performance]: Streaming derender bypasses renderer thread pool and blocks the event loop
- [#48667](https://github.com/vllm-project/vllm/issues/48667) Idefics3/SmolVLM: num_patches=0 for non-tiled images mis-sizes pixel_values while the prompt still reserves image_seq_len placeholder tokens
- [#50767](https://github.com/vllm-project/vllm/issues/50767) [Bug]: override-generation-config silently ignores presence_penalty / frequency_penalty (missing from available_params whitelist)
- [#58523](https://github.com/vllm-project/vllm/issues/58523) [Bug]: explicit off-grid max_cudagraph_capture_size is silently truncated, largest decode batches run eager
- [#57723](https://github.com/vllm-project/vllm/issues/57723) [Bug]: the `outlines` structured-output backend rejects the EOS it allowed, every choice / regex / json request that completes returns HTTP 500
- [#58363](https://github.com/vllm-project/vllm/issues/58363) [Installation]: CPU source build fails on GCC < 15: sgl-kernels use AVX10.2 unconditionally
- [#58494](https://github.com/vllm-project/vllm/issues/58494) probe-do-not-keep

### SGLang (`sgl-project/sglang`)

**Stars:** 36,408 · **Open issues:** 5,423 · **Last push:** <1h ago

On September 25, 2026, SGLang experienced a routine maintenance day with no new releases. Significant merged pull requests included #40907, which restores non-DCP Mamba checkpoint donation to enhance cache hit rates under high concurrency, and #38965, introducing setwise scoring support in the Score API. Noteworthy fixes included #41091, ensuring accurate memory budgets for FlashMLA with respect to physical KV page padding, and #41079, addressing deferred all-reduce completions. A hot new issue was #40995, advocating for seamless EFA SGLang image functionality across AWS NVIDIA GPUs.

#### ✅ Merged PRs
- [#40907](https://github.com/sgl-project/sglang/pull/40907) [AMD] Restore non-DCP Mamba checkpoint donation to fix agent-mode cache hit at high conc with HiCache
- [#40988](https://github.com/sgl-project/sglang/pull/40988) [mem_cache] Drop `is_insert` from `cache_finished_req`; release rows from `release_kv_cache`
- [#41091](https://github.com/sgl-project/sglang/pull/41091) [DSV4] Account for FlashMLA physical KV page padding in memory budgets
- [#38965](https://github.com/sgl-project/sglang/pull/38965) [Score API] Setwise Scoring Support
- [#41103](https://github.com/sgl-project/sglang/pull/41103) [PD] Add a `none` decode retraction backup and subclass seams in the PD queues
- [#40960](https://github.com/sgl-project/sglang/pull/40960) [HiCache] Batch buffer-only KV backups within each flush
- [#37442](https://github.com/sgl-project/sglang/pull/37442) Add 8-node AllReduce/AllGather and MNVLS algorithm support to MSCCL++
- [#41179](https://github.com/sgl-project/sglang/pull/41179) Fix mixed chunk prefill with DP speculative coordination
- [#39929](https://github.com/sgl-project/sglang/pull/39929) [Bugfix] Align DeepSeek-V4.1 reasoning effort budgets
- [#41049](https://github.com/sgl-project/sglang/pull/41049) [DSV4] Size compressed pools from one per-ratio table in DSV4PoolConfigurator
- [#41046](https://github.com/sgl-project/sglang/pull/41046) [Docs] Enable Qwen3.8 Flash Next NVIDIA NVFP4 on B200/B300/GB300
- [#41162](https://github.com/sgl-project/sglang/pull/41162) [Fix] Patch set_dp_buffer_len_from_batch in DP spec prefill coordination test
- [#41090](https://github.com/sgl-project/sglang/pull/41090) [DSV4] Fix TRTLLM uniform FP8 KV memory budgeting
- [#36559](https://github.com/sgl-project/sglang/pull/36559) MoE: small-batch sorting path with fused mxfp8 quantisation
- [#36574](https://github.com/sgl-project/sglang/pull/36574) MiniMax-M3: MXFP8 dense-only block convert + aiter MXFP8 MoE on gfx950
- [#40041](https://github.com/sgl-project/sglang/pull/40041) [qwen 3.8 next] Fuse Qwen PLE gate and convolution preparation for target verify
- [#41120](https://github.com/sgl-project/sglang/pull/41120) [AMD] Add .co for deepseek v4 fp8 decode kernel and add group decode opt
- [#41084](https://github.com/sgl-project/sglang/pull/41084) [Refactor] Split prepare_attn into a reduction step and per-quant-format residual steps
- [#41083](https://github.com/sgl-project/sglang/pull/41083) [Fix] Broadcast requests along attention CP before attention TP
- [#41082](https://github.com/sgl-project/sglang/pull/41082) [Fix] Step-3.5: stop dense layers from summing their output twice under DP attention
- [#41097](https://github.com/sgl-project/sglang/pull/41097) [Refactor] Share the MoE output all-reduce between models
- [#41081](https://github.com/sgl-project/sglang/pull/41081) [Refactor] Pass each layer stack's output through a communicator exit
- [#41080](https://github.com/sgl-project/sglang/pull/41080) [Fix] Complete the deferred FFN all-reduce before deepstack addition and aux hidden-state capture
- [#41079](https://github.com/sgl-project/sglang/pull/41079) [Fix] Complete the deferred FFN all-reduce before a pipeline-parallel send
- [#41109](https://github.com/sgl-project/sglang/pull/41109) [AMD] GLM-5.2 MI355X MXFP4: bump image to 20260923 daily
- [#41155](https://github.com/sgl-project/sglang/pull/41155) [Test] Run the Qwen3.5 Triton DCP nightly with the radix cache enabled
- [#40858](https://github.com/sgl-project/sglang/pull/40858) [DP attention] Publish DP buffer sizes from a ForwardBatch
- [#41138](https://github.com/sgl-project/sglang/pull/41138) [Fix] Skip the DCP target-verify MLA kernel during FlashInfer autotune
- [#39478](https://github.com/sgl-project/sglang/pull/39478) Support unified memory decode host pools
- [#40805](https://github.com/sgl-project/sglang/pull/40805) fix: Triton 3.8 compatbility to support DSV4.1-Flash in CUDA 13.4 image (Rubin)
- [#38726](https://github.com/sgl-project/sglang/pull/38726) [Quant] ModelOpt mixed precision: dispatch block-FP8 MoE experts and derive the block size
- [#40387](https://github.com/sgl-project/sglang/pull/40387) [AMD] ci: move the Miles ROCm 7.2 nightly build to 7.2.4
- [#40712](https://github.com/sgl-project/sglang/pull/40712) [HiCache] Demote internal-node SWA KV to host on write_back eviction instead of dropping it
- [#28960](https://github.com/sgl-project/sglang/pull/28960) fix(sampling): validate sampling_seed is an int within int64 range
- [#40866](https://github.com/sgl-project/sglang/pull/40866) [chore] surface the cookbook to users who pip install sglang
- [#41023](https://github.com/sgl-project/sglang/pull/41023) [PD] Enable deferred decode-side KV release by default
- [#40922](https://github.com/sgl-project/sglang/pull/40922) [Refactor] Retire the model-specific Kimi K3 kernel namespace
- [#40524](https://github.com/sgl-project/sglang/pull/40524) [NPU] Update CANN version to 9.1.0
- [#41130](https://github.com/sgl-project/sglang/pull/41130) [Diffusion] Add @niehen6174 as a code owner
- [#40512](https://github.com/sgl-project/sglang/pull/40512) [HiCache] Make host reclamation independent of transfer order
- [#39816](https://github.com/sgl-project/sglang/pull/39816) Refactor the Cute-DSL AR fusion to support DeepseekV2 archs (GLM-5.3, etc.)
- [#40612](https://github.com/sgl-project/sglang/pull/40612) [Diffusion] migrate the whole _register_configs from registry.py to the model own config file
- [#40388](https://github.com/sgl-project/sglang/pull/40388) [Diffusion] Enable lossless SANA-Video eager conv fusions for 12.6% lower latency
- [#40996](https://github.com/sgl-project/sglang/pull/40996) [AMD] Add tuned dsv4 shape
- [#40878](https://github.com/sgl-project/sglang/pull/40878) [AMD][DSV4] fp8 unified_kv decode: wave-aware split count past 40 tokens
- [#40425](https://github.com/sgl-project/sglang/pull/40425) [Diffusion] Fuse lossless LingBot World FP32 normalization
- [#40405](https://github.com/sgl-project/sglang/pull/40405) [Diffusion] Fuse lossless Wan VAE post-ops for LongLive 2 I2V
- [#39059](https://github.com/sgl-project/sglang/pull/39059) [AMD] Tune Triton sparse MLA on gfx950 and make split-K workspaces graph-safe
- [#41096](https://github.com/sgl-project/sglang/pull/41096) Fix TBO child batch missing dp_spec_prefill_coordination_applied
- [#40384](https://github.com/sgl-project/sglang/pull/40384) [Diffusion] Fuse LongCat GELU+cat and support Edit-Turbo BCG
- [#41078](https://github.com/sgl-project/sglang/pull/41078) Read a per-replica sequence at the slot of the gather that produced it
- [#40826](https://github.com/sgl-project/sglang/pull/40826) [Feature] Add per-item candidate token scoring and calibration
- [#40510](https://github.com/sgl-project/sglang/pull/40510) [NPU] Fix DSV4 hard-coding kv dtype
- [#40999](https://github.com/sgl-project/sglang/pull/40999) [ci] pr-gate: add generic require-label input and support pull_request_target
- [#40905](https://github.com/sgl-project/sglang/pull/40905) [NPU] Remove the LLaDA2.0-mini basic-function test case
- [#40812](https://github.com/sgl-project/sglang/pull/40812) [AMD] Register mem-cache unit tests in PR CI
- [#40118](https://github.com/sgl-project/sglang/pull/40118) [Experimental] Preserve speculative decoding during prefill across DP ranks
- [#41048](https://github.com/sgl-project/sglang/pull/41048) [DSV4] Budget the ratio-2 pair state pool in DSV4PoolConfigurator
- [#41053](https://github.com/sgl-project/sglang/pull/41053) [AMD][DI][CI] Move MI355X disagg nightly to ROCm 10
- [#41047](https://github.com/sgl-project/sglang/pull/41047) [cherrypick from #40932] [Sampling] Add selected/support sampling logprob modes
- [#40932](https://github.com/sgl-project/sglang/pull/40932) [Sampling] Add selected/support sampling logprob modes
- [#37751](https://github.com/sgl-project/sglang/pull/37751) [AMD][Diffusion] FlyDSL fused norm kernels on wave32 targets (gfx1250)
- [#40337](https://github.com/sgl-project/sglang/pull/40337) [DSV4] fix: size the C4 state ring by the page it is addressed by
- [#40204](https://github.com/sgl-project/sglang/pull/40204) [AMD] Small-M MXFP4 fused-MoE kernel for gfx950 (Qwen)
- [#40238](https://github.com/sgl-project/sglang/pull/40238) [PD] Add decode host receive for custom transfer backends
- [#41024](https://github.com/sgl-project/sglang/pull/41024) [Docs] DeepSeek-V4 MI355X Pro Official PD pairs with DSpark and UMBP
- [#40710](https://github.com/sgl-project/sglang/pull/40710) [ROCm][DSA] Enable AITER fused FP8 indexer writer
- [#41026](https://github.com/sgl-project/sglang/pull/41026) [AMD][DI][CI] Say which image the MI355X nightly ran on

#### 🐛 New Issues
- [#40995](https://github.com/sgl-project/sglang/issues/40995) [Feature] EFA SGLang image should work out of the box on AWS NVIDIA GPUs (NIXL & Mooncake) 💬2
- [#41038](https://github.com/sgl-project/sglang/issues/41038) [Bug] Mooncake DFlash draft KV transfer fails with asymmetric P/D TP on GLM-5.3-Flash 💬1
- [#41192](https://github.com/sgl-project/sglang/issues/41192) [Bug] Diffusion Qwen-Image-2.1: TP=2 output corrupted with dense chroma speckle (single-GPU clean; vLLM-Omni TP=2 shows the identical corruption)
- [#41152](https://github.com/sgl-project/sglang/issues/41152) [Bug][AMD] aiter unified attention: Gemma 2/3 batched generations run away (Gemma 3 4B GSM8K 0.57 vs 0.83 on triton)
- [#41151](https://github.com/sgl-project/sglang/issues/41151) [Perf] Padded decode CUDA-graph slots cost more with longer contexts on the triton backend (bs 5 on the bs-8 graph: 27.7 -> 35.9 ms/token at 30K)
- [#41148](https://github.com/sgl-project/sglang/issues/41148) [Feature] Incremental chat-prompt processing: stop re-tokenizing the whole history on every turn
- [#41129](https://github.com/sgl-project/sglang/issues/41129) [Feature] Support configurable retention for request log files
- [#41126](https://github.com/sgl-project/sglang/issues/41126) [diffusion] Make warmup preferred preload components and headroom configurable
- [#41124](https://github.com/sgl-project/sglang/issues/41124) penalties use one step stale history under the overlap scheduler
- [#41110](https://github.com/sgl-project/sglang/issues/41110) [Feature] Qwen3.5forsequenceclassification model is supported
- [#41089](https://github.com/sgl-project/sglang/issues/41089) [Bug] /v1/responses drops the request priority
- [#41077](https://github.com/sgl-project/sglang/issues/41077) [Bug] DWDP: expert weight copy peaks at 2x local expert memory, causing OOM at startup
- [#41076](https://github.com/sgl-project/sglang/issues/41076) [Bug] DeepSeek-V4.1-Flash + DSPARK: unbounded SparsePrefillWorkspace allocation OOM-crashes the whole TP group
- [#41070](https://github.com/sgl-project/sglang/issues/41070) [Feature][Spec][XPU] Honor rejection sampling in EAGLE chain verification

#### 🔒 Closed Issues
- [#32377](https://github.com/sgl-project/sglang/issues/32377) [GLM-5.2 FP4 Bug] tvm.error.InternalError in trtllm_bf16_moe on Blackwell (SM100) during speculative decoding (EAGLE) with GLM-5.2-NVFP4
- [#31891](https://github.com/sgl-project/sglang/issues/31891) [Feature] Native same-GPU data parallelism: colocated DP gives 1.8x (A6000) to 2.6x (H200) embedding throughput; currently blocked by gpu_id_step assert
- [#32156](https://github.com/sgl-project/sglang/issues/32156) [Bug] Cannot load unsloth/Qwen3.6-35B-A3B-NVFP4
- [#32449](https://github.com/sgl-project/sglang/issues/32449) [Bug] MLX hybrid-SSM models crash with AttributeError when the radix cache is enabled
- [#32426](https://github.com/sgl-project/sglang/issues/32426) [Bug] In version v0.5.16, the sakamakismile/Ornith-1.0-35B-NVFP4 model generates garbled characters.
- [#40865](https://github.com/sgl-project/sglang/issues/40865) [RFC] Explicit, budgeted tail-replay for Mamba/GDN state in UnifiedRadixCache
- [#39909](https://github.com/sgl-project/sglang/issues/39909) [Bug] DeepSeek-V4.1 encoder renders the pre-release reasoning-effort budgets (high → 50; release reference and deepseek-recipe → 75)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,449 · **Open issues:** 2,534 · **Last push:** 1h ago

On September 25, 2026, llama.cpp released several updates, including version b11173, which fixed graph capture for empty graphs and enhanced error messages related to METAL_CAPTURE_ENABLED. Version b11172 introduced optimizations for sparse FA and refined shared memory calculations, while b11171 synchronized the ggml component and addressed a UBSan error. Notable merged pull requests included improvements to hexagon's handling of multi-sequence concatenation and dynamic quantization, as well as a fix for numeric truncation in llama-grammar. Among the newly reported issues, a significant concern reported is the server's crash under sustained image traffic due to an assertion failure, indicating potential performance bottlenecks that may need immediate attention.

#### 🚀 New Releases
- [b11173](https://github.com/ggml-org/llama.cpp/releases/tag/b11173) b11173
- [b11172](https://github.com/ggml-org/llama.cpp/releases/tag/b11172) b11172
- [b11171](https://github.com/ggml-org/llama.cpp/releases/tag/b11171) b11171
- [b11170](https://github.com/ggml-org/llama.cpp/releases/tag/b11170) b11170
- [b11169](https://github.com/ggml-org/llama.cpp/releases/tag/b11169) b11169
- [b11168](https://github.com/ggml-org/llama.cpp/releases/tag/b11168) b11168
- [b11167](https://github.com/ggml-org/llama.cpp/releases/tag/b11167) b11167
- [b11166](https://github.com/ggml-org/llama.cpp/releases/tag/b11166) b11166
- [b11165](https://github.com/ggml-org/llama.cpp/releases/tag/b11165) b11165
- [b11163](https://github.com/ggml-org/llama.cpp/releases/tag/b11163) b11163

#### ✅ Merged PRs
- [#29390](https://github.com/ggml-org/llama.cpp/pull/29390) metal : fix graph capture and handle empty graphs
- [#29377](https://github.com/ggml-org/llama.cpp/pull/29377) metal : optimize sparse FA + clean-up
- [#29396](https://github.com/ggml-org/llama.cpp/pull/29396) sync : ggml
- [#29344](https://github.com/ggml-org/llama.cpp/pull/29344) hexagon: handle multi-sequence in concat_2d
- [#29395](https://github.com/ggml-org/llama.cpp/pull/29395) hexagon: dynamic quantizer improvements
- [#29382](https://github.com/ggml-org/llama.cpp/pull/29382) llama-grammar: fix numeric truncation for token_id parsing
- [#29379](https://github.com/ggml-org/llama.cpp/pull/29379) hexagon: support I32 CPY and CONT
- [#29064](https://github.com/ggml-org/llama.cpp/pull/29064) cuda : add F16 kernel support for CONV_2D_DW
- [#28352](https://github.com/ggml-org/llama.cpp/pull/28352) test: flush status
- [#28962](https://github.com/ggml-org/llama.cpp/pull/28962) ui : fix missing svg use and animation elements in preview and download
- [#24669](https://github.com/ggml-org/llama.cpp/pull/24669) llama: add llama_batch_ext
- [#29376](https://github.com/ggml-org/llama.cpp/pull/29376) server : change default pytest workers to 4
- [#29369](https://github.com/ggml-org/llama.cpp/pull/29369) ci : use hf-jobs-cpu-performance, use 4 pytest workers
- [#27952](https://github.com/ggml-org/llama.cpp/pull/27952) vulkan: int8 coopmat1 matmul implementation for AMD RDNA3 and RDNA4
- [#29365](https://github.com/ggml-org/llama.cpp/pull/29365) vulkan: handle misalignment in conv_2d and conv_3d
- [#29137](https://github.com/ggml-org/llama.cpp/pull/29137) cuda : add conv3d with implicit GEMM
- [#29328](https://github.com/ggml-org/llama.cpp/pull/29328) vulkan: tune KHR cooperative matrix support for Adreno GPUs
- [#29151](https://github.com/ggml-org/llama.cpp/pull/29151) model : add Ling 3.0 VL support
- [#29325](https://github.com/ggml-org/llama.cpp/pull/29325) server,common : fix the GCC 12 stringop-overread false positive (again)
- [#29316](https://github.com/ggml-org/llama.cpp/pull/29316) test-save-load-state : print a per-model results table in --models mode
- [#29348](https://github.com/ggml-org/llama.cpp/pull/29348) hexagon: reject MUL_MAT_ID when src1 precision is F32
- [#29336](https://github.com/ggml-org/llama.cpp/pull/29336) scripts : make-release-desc - link previous release in changelog title

#### 🐛 New Issues
- [#29350](https://github.com/ggml-org/llama.cpp/issues/29350) Misc. bug: llama-common are not installed `bug-unconfirmed` 💬2
- [#29386](https://github.com/ggml-org/llama.cpp/issues/29386) Misc. bug: server dies under sustained image traffic — ubatch assert at small -ub, silent SIGKILL at large -ub (Gemma 12B QAT + mmproj) 💬1
- [#29373](https://github.com/ggml-org/llama.cpp/issues/29373) Compile bug: Vulkan fails with a glslc lacking GL_KHR_cooperative_matrix since #24406 (fa_decode shaders built as coopmat unconditionally) 💬1
- [#29378](https://github.com/ggml-org/llama.cpp/issues/29378) Feature Request: CPU Flash Attention does not use the selected KleidiAI SME2 kernel `enhancement` 💬1
- [#29398](https://github.com/ggml-org/llama.cpp/issues/29398) Feature Request: SYCL per-instance queue, device-side events, async copy `enhancement`
- [#29380](https://github.com/ggml-org/llama.cpp/issues/29380) Misc. bug: numeric truncation during grammar parsing `bug-unconfirmed`
- [#29392](https://github.com/ggml-org/llama.cpp/issues/29392) Eval bug: Repeats the same token or generates garbage on any models. `bug-unconfirmed`
- [#29391](https://github.com/ggml-org/llama.cpp/issues/29391) Eval bug: llama-server aborts on GGML_ASSERT(batch.slot_batched || batch.size() == 0) after "got exception: bad allocation" in a slot (b11159, Gemma 4 31B, prefix reuse)
- [#29388](https://github.com/ggml-org/llama.cpp/issues/29388) Feature Request: avoid allocating logits buffer for encoder-only models `enhancement`
- [#29383](https://github.com/ggml-org/llama.cpp/issues/29383) Misc. bug: uncaught integer overflows during model loading `bug-unconfirmed`
- [#29372](https://github.com/ggml-org/llama.cpp/issues/29372) Feature Request: split generation timings into reasoning and answer phases (rate and draft acceptance per phase)
- [#29371](https://github.com/ggml-org/llama.cpp/issues/29371) CUDA flash attention inefficiency in quantized KV cache handling, worsening with context length `enhancement`
- [#29366](https://github.com/ggml-org/llama.cpp/issues/29366) Compile bug: [SYCL] flawed debug builds `bug-unconfirmed`
- [#29361](https://github.com/ggml-org/llama.cpp/issues/29361) Feature Request: expose last-token hidden state during normal inference `enhancement`
- [#29352](https://github.com/ggml-org/llama.cpp/issues/29352) Eval bug: Vulkan/MoltenVK + AMD discrete GPU: ErrorDeviceLost with the default 4 server slots and prompts above ~70 tokens; --parallel 1 fixes it `bug-unconfirmed`
- [#29351](https://github.com/ggml-org/llama.cpp/issues/29351) ggml-cpu x86: Q8_0 dot product sign error when an int8 operand is -128 (non-VNNI mul_sum_i8_pairs_float)
- [#29349](https://github.com/ggml-org/llama.cpp/issues/29349) Feature Request: Vulkan dmmv workgroup-size on Intel Xe2. `enhancement`

#### 🔒 Closed Issues
- [#17583](https://github.com/ggml-org/llama.cpp/issues/17583) Eval bug: Running llama-server only possible with single AMD GPU, running multiple always causes Segmentation fault regardless of model size
- [#29281](https://github.com/ggml-org/llama.cpp/issues/29281) Misc. bug: Performance regression: CUDA sparse flash attention decode 1.6x slower (b11047 -> b11062)
- [#26337](https://github.com/ggml-org/llama.cpp/issues/26337) Eval bug: Ternary-Bonsai-27B fails to load when using its Dspark draft model
- [#20433](https://github.com/ggml-org/llama.cpp/issues/20433) Eval bug: #17795 introduces subtle correctness errors
- [#26478](https://github.com/ggml-org/llama.cpp/issues/26478) Eval bug: lllama-spec failure at 16k boundary due to non-consecutive KV cache position tracking (Y != X + 1)
- [#28336](https://github.com/ggml-org/llama.cpp/issues/28336) Misc. bug: A Generated svg image has missing parts.
- [#15845](https://github.com/ggml-org/llama.cpp/issues/15845) Eval bug: HIP gfx908 (MI100) cublass error when prompt is too long.
- [#28384](https://github.com/ggml-org/llama.cpp/issues/28384) Misc. bug: [SYCL] test-backend-ops failures CONV_2D, CPY, ROLL, FLASH_ATTN_EXT
- [#26008](https://github.com/ggml-org/llama.cpp/issues/26008) Feature Request: server: add option to concatenate prompts on /completion endpoint
- [#26744](https://github.com/ggml-org/llama.cpp/issues/26744) Eval bug: vulkan flash attention lets stale K/V in freed cells influence the output
- [#26795](https://github.com/ggml-org/llama.cpp/issues/26795) Vulkan: Qwen3.6-35B-A3B (GATED_DELTA_NET) decode collapses to ~4 t/s on RDNA4 (gfx1201/RADV) while prefill runs at ~3,200 t/s
- [#26825](https://github.com/ggml-org/llama.cpp/issues/26825) [RPC] GET_ROWS can read past an input tensor buffer in release builds
- [#26853](https://github.com/ggml-org/llama.cpp/issues/26853) Eval bug: [Vulkan] GGML_ASSERT failed in GET_ROWS with view offset (Qwen3-TTS)
- [#26875](https://github.com/ggml-org/llama.cpp/issues/26875) Compile bug: KleidiAI .S kernels fail to assemble on Windows ARM64 with llvm-mingw (COFF target) - ELF-only .type/.size in asm preamble
- [#26876](https://github.com/ggml-org/llama.cpp/issues/26876) Misc. bug: Partial MoE offload (-ncmoe) on integrated GPU is ~2x slower than CPU-only (Arc 140T / Vulkan / UMA)
- [#29380](https://github.com/ggml-org/llama.cpp/issues/29380) Misc. bug: numeric truncation during grammar parsing

### Ollama (`ollama/ollama`)

**Stars:** 181,644 · **Open issues:** 4,073 · **Last push:** 3h ago

On September 25, 2026, there were no new releases for Ollama; however, several important changes were merged into the codebase. The team deprecated the `typical_p` API in PR #18627 and improved app performance by isolating cloud-setting tests from the Windows user config and deferring Settings model discovery in PRs #18626 and #18598. Additionally, macOS users will benefit from an update where the menu and icon sync at startup, addressed in PR #18622. Notably, a new issue was raised regarding memory leaks in the MLX runner, specifically that each request ending in a tool call leaks approximately 0.43 GiB outside the prefix-cache budget, which could impact performance for users.

#### ✅ Merged PRs
- [#18627](https://github.com/ollama/ollama/pull/18627) api: deprecate typical_p
- [#18626](https://github.com/ollama/ollama/pull/18626) app: isolate cloud-setting tests from Windows user config
- [#18598](https://github.com/ollama/ollama/pull/18598) app: defer Settings model discovery
- [#18622](https://github.com/ollama/ollama/pull/18622) app: sync macOS update menu and icon at startup

#### 🐛 New Issues
- [#18620](https://github.com/ollama/ollama/issues/18620) MLX runner: each request that ends in a tool call leaks ~0.43 GiB (three recurrent snapshots) outside the prefix-cache budget (qwen3.6:27b-mlx, 0.34.2 and 0.34.4) 💬1
- [#18632](https://github.com/ollama/ollama/issues/18632) qwen3.8: `think: "high"` / `"max"` silently run the default (`medium`); the model's top level `xhigh` is reachable only by a string outside the documented `think` values
- [#18628](https://github.com/ollama/ollama/issues/18628) macOS incorrectly prompts to move app when installed in an `/Applications` subdirectory `bug`
- [#18621](https://github.com/ollama/ollama/issues/18621) macOS: keep the update icon and Restart to update menu synchronized at startup

#### 🔒 Closed Issues
- [#18616](https://github.com/ollama/ollama/issues/18616) Mimo-v2.6-Pro and Mimo-v2.6-Flash
- [#18621](https://github.com/ollama/ollama/issues/18621) macOS: keep the update icon and Restart to update menu synchronized at startup

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,570 · **Open issues:** 5,252 · **Last push:** <1h ago

On September 25, 2026, there were no new releases for LiteLLM, but the team made significant progress with several merged pull requests. Noteworthy enhancements included a wider and resizable audit log detail drawer (#42808) and the addition of a per-agent kill switch webhook (#42841). Several fixes addressed critical issues such as mapping Anthropic batch row parameters correctly (#43087) and translating responses through the Responses-to-Chat bridge (#43042). However, a concerning new issue was raised regarding the `encrypted_content_affinity`, which has no fallback when the pinned deployment is unavailable, disrupting multi-turn Responses API conversations (#43000).

#### ✅ Merged PRs
- [#42808](https://github.com/BerriAI/litellm/pull/42808) feat(ui): make the audit log detail drawer wider and resizable
- [#43087](https://github.com/BerriAI/litellm/pull/43087) fix(bedrock): map Anthropic batch row params the way real time does
- [#43062](https://github.com/BerriAI/litellm/pull/43062) fix(router): match provider-prefixed fallback keys for bare model groups served by wildcard deployments
- [#43097](https://github.com/BerriAI/litellm/pull/43097) feat(cost-map): add fireworks deepseek-v4p1-flash US-only rows
- [#42835](https://github.com/BerriAI/litellm/pull/42835) feat(ui): offer reset of custom member budgets when team default changes
- [#43091](https://github.com/BerriAI/litellm/pull/43091) chore(cost-map): sync gemini priority, flex and video token prices from the Gemini API pricing page
- [#43015](https://github.com/BerriAI/litellm/pull/43015) fix(router): serve Responses turns from a sibling when the encrypted content origin has no boundary peer
- [#43092](https://github.com/BerriAI/litellm/pull/43092) feat(cost-map): add fireworks glm-5p3 US-only rows and kimi-k3-us priority prices
- [#43090](https://github.com/BerriAI/litellm/pull/43090) fix(cost-map): sync openrouter deepseek v4 and glm-5.3-flash prices, add mistral-large-2512
- [#43077](https://github.com/BerriAI/litellm/pull/43077) ci: run the claude_code harness unit-test trees in the lint job
- [#43044](https://github.com/BerriAI/litellm/pull/43044) feat(spend): capture-rate check of LiteLLM spend against the OpenAI bill
- [#43071](https://github.com/BerriAI/litellm/pull/43071) fix(proxy): drop client-supplied proxy-stamped names from pass-through litellm_params
- [#42478](https://github.com/BerriAI/litellm/pull/42478) fix(mcp): cap an agent key's tools at what the invoking user and team may call
- [#43076](https://github.com/BerriAI/litellm/pull/43076) docs(e2e): carve harness tests out of the no-unit-tests hard rule
- [#43078](https://github.com/BerriAI/litellm/pull/43078) fix(cost-map): drop cache read price from vertex gemini-2.5-flash-image
- [#43073](https://github.com/BerriAI/litellm/pull/43073) chore(cost-map): add video input price to gemini 3.8 live rows
- [#42967](https://github.com/BerriAI/litellm/pull/42967) fix(ui): explain unbackfilled key lifetime spend and ship a backfill script
- [#33954](https://github.com/BerriAI/litellm/pull/33954) fix(proxy): stop /utils/transform_request from calling the provider and blocking the event loop
- [#42841](https://github.com/BerriAI/litellm/pull/42841) feat(agents): add optional per-agent kill switch webhook
- [#43069](https://github.com/BerriAI/litellm/pull/43069) fix(cost-map): add vertex priority prices for gemini-3-pro-image-preview and batch price for gemini-embedding-001
- [#43042](https://github.com/BerriAI/litellm/pull/43042) fix(vertex_ai): translate /v1/responses batch rows through the Responses-to-Chat bridge
- [#42904](https://github.com/BerriAI/litellm/pull/42904) ci: move provider-independent MCP tests into tests/unit and run mcp-integration from litellm-tests
- [#42903](https://github.com/BerriAI/litellm/pull/42903) ci: move tests/proxy_unit_tests to tests/unit/proxy and run the proxy-db shards from litellm-tests
- [#43027](https://github.com/BerriAI/litellm/pull/43027) feat(proxy): let callbacks filter the model listing routes per caller
- [#42902](https://github.com/BerriAI/litellm/pull/42902) ci: move caching, proxy-extras, gateway and enterprise tests into tests/unit and run them from litellm-tests
- [#43021](https://github.com/BerriAI/litellm/pull/43021) docs(github): require UI before/after screenshots and intentional UX change note in PR template
- [#43058](https://github.com/BerriAI/litellm/pull/43058) chore(cost-map): move azure gpt-realtime-2.1-mini deprecation date to the later Models API date
- [#43053](https://github.com/BerriAI/litellm/pull/43053) fix(e2e): skip unpublished npm versions in the Claude Code PR-gate resolver
- [#41705](https://github.com/BerriAI/litellm/pull/41705) feat(proxy_cli): add --validate_config dry-run flag
- [#42987](https://github.com/BerriAI/litellm/pull/42987) feat(terraform): add display_name to litellm_model resource and model data sources
- [#42901](https://github.com/BerriAI/litellm/pull/42901) test: take keys out of the legacy proxy, enterprise and mcp unit tests before moving them
- [#42900](https://github.com/BerriAI/litellm/pull/42900) ci: fix the litellm-tests unit job (sysmon, codecov on failure, env -i allowlist, selection errors, reruns param)
- [#43033](https://github.com/BerriAI/litellm/pull/43033) test(e2e/ui): hide the LiteAdmin button in the shared admin session
- [#42968](https://github.com/BerriAI/litellm/pull/42968) fix(playground): stop following streamed tokens, add jump to bottom button
- [#43038](https://github.com/BerriAI/litellm/pull/43038) feat(compat-matrix): resolve and install the Claude Code CLI per run
- [#43050](https://github.com/BerriAI/litellm/pull/43050) fix(cost-map): drop the priority input price from vertex gemini-2.5-flash-image
- [#43030](https://github.com/BerriAI/litellm/pull/43030) fix(vertex_ai): keep batch output_file_id null until Vertex reports outputInfo
- [#43029](https://github.com/BerriAI/litellm/pull/43029) fix(proxy): pass team member spend rows as jsonb so a $0 flush cannot poison the pool connection
- [#43037](https://github.com/BerriAI/litellm/pull/43037) chore(cost-map): add azure deprecation dates from the Models API for five realtime and transcribe rows
- [#42784](https://github.com/BerriAI/litellm/pull/42784) fix(proxy): stop leaking periodic tasks on every DB config reload
- [#42996](https://github.com/BerriAI/litellm/pull/42996) feat(proxy): server-side Team Usage export beyond the top-N key cap
- [#43036](https://github.com/BerriAI/litellm/pull/43036) fix(cost-map): add video and reasoning output prices to vertex gemini-omni-1.1-flash
- [#43028](https://github.com/BerriAI/litellm/pull/43028) refactor(rust): move tests.rs files inline or under tests/ and drop autotests = false
- [#42810](https://github.com/BerriAI/litellm/pull/42810) feat(vertex): native batch JSONL passthrough with cost tracking
- [#42713](https://github.com/BerriAI/litellm/pull/42713) fix(bedrock): route unmapped openai family model ids to converse
- [#42857](https://github.com/BerriAI/litellm/pull/42857) feat(usage): search team keys beyond the top-N in the Team usage view
- [#42827](https://github.com/BerriAI/litellm/pull/42827) feat(usage): search keys beyond the top-N usage subset
- [#42824](https://github.com/BerriAI/litellm/pull/42824) fix(logging): pass provider response headers to callbacks on every endpoint
- [#43024](https://github.com/BerriAI/litellm/pull/43024) fix(cost-map): add the Vertex shutdown date to gemini-2.5-flash-native-audio
- [#42966](https://github.com/BerriAI/litellm/pull/42966) fix(prometheus): add model_group label to deployment request and rate limit metrics
- [#42982](https://github.com/BerriAI/litellm/pull/42982) feat(rust): shape Anthropic Messages requests natively
- [#42925](https://github.com/BerriAI/litellm/pull/42925) test(guardrails): run the cache-hit redis outage test on the shared owned_redis helper
- [#42916](https://github.com/BerriAI/litellm/pull/42916) test(mcp): patch create_mcp_server_if_identifier_free in the store-model-in-db MCP tests
- [#42906](https://github.com/BerriAI/litellm/pull/42906) test(mcp): stop a comprehension variable from shadowing the body() helper
- [#42914](https://github.com/BerriAI/litellm/pull/42914) test(vertex_ai): run the files peak-memory guards without coverage tracing
- [#43017](https://github.com/BerriAI/litellm/pull/43017) fix(azure): update gpt-audio-mini and gpt-5-chat deprecation dates from the retirement schedule
- [#42930](https://github.com/BerriAI/litellm/pull/42930) test(e2e/ui): give the logout specs their own admin session
- [#43003](https://github.com/BerriAI/litellm/pull/43003) fix(ui): pass is_proxy_admin for proxy admins on the models page team drill-in
- [#42905](https://github.com/BerriAI/litellm/pull/42905) test(ollama): assert the images sent to Ollama instead of echoing them through response
- [#42995](https://github.com/BerriAI/litellm/pull/42995) fix(cost-map): add vertex cache read, batch and above 200k prices for gemini image preview rows
- [#42994](https://github.com/BerriAI/litellm/pull/42994) fix(cost-map): drop stale cache_hit field from openrouter deepseek-v4-pro
- [#42649](https://github.com/BerriAI/litellm/pull/42649) fix(mcp): reject origins outside the configured allowlist
- [#42989](https://github.com/BerriAI/litellm/pull/42989) fix(cost-map): add supports_reasoning to azure/eu/gpt-6-astra
- [#42986](https://github.com/BerriAI/litellm/pull/42986) fix(cost-map): take the later azure deprecation date for gpt-4.1-nano, gpt-4o-transcribe and gpt-realtime-2.1
- [#42985](https://github.com/BerriAI/litellm/pull/42985) fix(cost-map): align openrouter deepseek-v4-pro cache hit price with cache read
- [#42981](https://github.com/BerriAI/litellm/pull/42981) feat(azure): add gpt-audio and gpt-realtime alias rows from the Azure model list
- [#42758](https://github.com/BerriAI/litellm/pull/42758) feat(rust_bridge): stamp x-litellm-rust on native sync and async streams at the bridge boundary
- [#42980](https://github.com/BerriAI/litellm/pull/42980) fix(cost-map): add vertex ai priority audio input prices for gemini flash rows
- [#42978](https://github.com/BerriAI/litellm/pull/42978) fix(cost-map): sync openrouter deepseek-v4-pro prices
- [#42937](https://github.com/BerriAI/litellm/pull/42937) refactor(types): replace Any with proven types in 13 files
- [#42974](https://github.com/BerriAI/litellm/pull/42974) fix(cost-map): sync openrouter deepseek v4 flash, v4 pro and v4.1 flash prices
- [#42971](https://github.com/BerriAI/litellm/pull/42971) fix(bedrock): extrapolate global cris pricing for gpt-5.4 and gpt-5.5
- [#42970](https://github.com/BerriAI/litellm/pull/42970) feat(cost-map): sync azure models, add MAI-Image-2.6, deepseek-v4.1-flash, muse-spark-1.3
- [#42969](https://github.com/BerriAI/litellm/pull/42969) fix(cost-map): sync openrouter deepseek-v4-pro prices
- [#42654](https://github.com/BerriAI/litellm/pull/42654) fix(proxy): fail parked DB lookups at a deadline and flip readiness while they stall
- [#42964](https://github.com/BerriAI/litellm/pull/42964) fix(cost-map): sync openrouter deepseek-v4-pro prices
- [#42956](https://github.com/BerriAI/litellm/pull/42956) fix(cost-map): sync openrouter deepseek-v4-pro prices
- [#42954](https://github.com/BerriAI/litellm/pull/42954) fix(cost-map): add azure realtime, audio and partner model rows
- [#42953](https://github.com/BerriAI/litellm/pull/42953) fix(cost-map): add batch prices for vertex gemini-3.8-flash-cyber
- [#42952](https://github.com/BerriAI/litellm/pull/42952) fix(cost-map): sync openrouter prices for deepseek v4 and glm-5.3
- [#42908](https://github.com/BerriAI/litellm/pull/42908) fix(proxy): list key and team model aliases in GET /v1/models
- [#42947](https://github.com/BerriAI/litellm/pull/42947) fix(cost-map): update azure gpt-4.1-nano and gpt-4o-2024-05-13 retirement dates
- [#42941](https://github.com/BerriAI/litellm/pull/42941) feat(bedrock): add gpt-5.4 and gpt-5.5 us and global inference profile pricing
- [#42942](https://github.com/BerriAI/litellm/pull/42942) fix(cost-map): sync vertex-ai rows (gemma 4 maas cache price, chirp_2)
- [#42710](https://github.com/BerriAI/litellm/pull/42710) chore(techdebt): clear fresh tech debt from the last 24 hours (rolling, 2026-09-06 to 2026-09-24)
- [#42933](https://github.com/BerriAI/litellm/pull/42933) fix(cost-map): add azure deprecation dates for regional gpt-6 rows
- [#42932](https://github.com/BerriAI/litellm/pull/42932) fix(cost-map): update openrouter kimi-k2.7-code input price
- [#42924](https://github.com/BerriAI/litellm/pull/42924) feat(cost-map): add wandb DeepSeek-V4.1-Flash and gemma-4-26B-A4B-it
- [#42897](https://github.com/BerriAI/litellm/pull/42897) fix(cost-map): add azure deprecation dates for gpt-6 and gpt-realtime-whisper
- [#42895](https://github.com/BerriAI/litellm/pull/42895) test(integration): edge-case matrices for malformed token limits and callback_settings shapes
- [#42898](https://github.com/BerriAI/litellm/pull/42898) fix(cost-map): source for bedrock mantle gpt-5.6 luna, sol, terra and grok-4.6
- [#41258](https://github.com/BerriAI/litellm/pull/41258) fix(s3_v2): bound concurrent S3 uploads per flush and add opt-in JSONL batch files
- [#42692](https://github.com/BerriAI/litellm/pull/42692) test(integration): add read-replica routing harness to the CircleCI integration suite
- [#42695](https://github.com/BerriAI/litellm/pull/42695) fix(passthrough): log upstream 4xx/5xx error bodies and carry them into the failure hook
- [#42891](https://github.com/BerriAI/litellm/pull/42891) feat(cost-map): add vertex_ai/gemini-3.8-live
- [#42890](https://github.com/BerriAI/litellm/pull/42890) fix(cost-map): source and chat completions endpoint for bedrock mantle gpt-5.4 and gpt-5.5
- [#42889](https://github.com/BerriAI/litellm/pull/42889) fix(cost-map): sync openrouter prices and add fireworks ember-1
- [#42786](https://github.com/BerriAI/litellm/pull/42786) fix(proxy): do not requeue a daily spend batch whose commit already left for postgres
- [#42780](https://github.com/BerriAI/litellm/pull/42780) fix(proxy): keep deployment labels on cache-hit post_call guardrail rejections
- [#42778](https://github.com/BerriAI/litellm/pull/42778) fix(logging): scan the exceeded budget wording linearly so a crafted error message cannot stall the proxy
- [#42885](https://github.com/BerriAI/litellm/pull/42885) fix(cost-map): add azure gpt-realtime-mini-2025-10-06 deprecation date
- [#42884](https://github.com/BerriAI/litellm/pull/42884) fix(models): correct fireworks kimi k3 us pricing to the published rate
- [#42883](https://github.com/BerriAI/litellm/pull/42883) fix(cost-map): add azure gpt-realtime-mini deprecation date
- [#42882](https://github.com/BerriAI/litellm/pull/42882) fix(cost-map): sync vertex-ai deprecation dates from Vertex model lifecycle pages
- [#42881](https://github.com/BerriAI/litellm/pull/42881) fix(cost-map): halve openrouter deepseek-v4-flash-0731 output price
- [#42777](https://github.com/BerriAI/litellm/pull/42777) fix(presidio): stream non-Anthropic raw SSE through the post_call hook unbuffered
- [#42879](https://github.com/BerriAI/litellm/pull/42879) feat(vertex_ai): add gemini-3.8-flash-cyber pricing
- [#42877](https://github.com/BerriAI/litellm/pull/42877) fix(models): correct gemini robotics er 2 preview audio input price
- [#42878](https://github.com/BerriAI/litellm/pull/42878) feat(cost-map): add retired azure gpt-5 chat and o1-preview data zone rows
- [#42875](https://github.com/BerriAI/litellm/pull/42875) fix(model_prices): bedrock bare Claude ids priced at the Global SKU (aws-bedrock sync)
- [#42874](https://github.com/BerriAI/litellm/pull/42874) fix(models): add fireworks 2026-09-25 deprecation dates for glm 5.2, kimi k2.6, kimi k2.7 code, deepseek v4 and muse glimmer rows
- [#42873](https://github.com/BerriAI/litellm/pull/42873) fix(models): add azure gpt-4o-mini-transcribe and gpt-4o-mini-tts deprecation dates
- [#42872](https://github.com/BerriAI/litellm/pull/42872) fix(models): add openai deprecation date for gpt-5-chat-latest and gpt-5-chat
- [#42814](https://github.com/BerriAI/litellm/pull/42814) fix(fireworks_ai): route firerouter short names and bill pass-through legs at the routed model's rates
- [#42858](https://github.com/BerriAI/litellm/pull/42858) test(integration): assert /v1/models reports max_input_tokens and max_output_tokens
- [#42867](https://github.com/BerriAI/litellm/pull/42867) chore(vertex_ai): add deprecation dates for retired claude 3 and jamba 1.5 partner models
- [#42866](https://github.com/BerriAI/litellm/pull/42866) fix(models): add fireworks deprecation date for glm 5.2 fast serverless rows
- [#42859](https://github.com/BerriAI/litellm/pull/42859) test(integration): cover per key tag rpm limits and tag budget_duration resets
- [#42779](https://github.com/BerriAI/litellm/pull/42779) fix(model_prices): registry audit 2026-09-23, in-region Bedrock Claude prices
- [#42856](https://github.com/BerriAI/litellm/pull/42856) fix(model-catalog): declare above_32k cost fields on ModelInfo
- [#42849](https://github.com/BerriAI/litellm/pull/42849) fix(models): add fireworks deprecation dates for kimi k2.6 fast, kimi k2.7 code fast and glm 5.2 fast us
- [#42852](https://github.com/BerriAI/litellm/pull/42852) feat(bedrock): add 17 aws-bedrock cost map rows from provider sync
- [#42848](https://github.com/BerriAI/litellm/pull/42848) feat(models): add gemini lyria-realtime-exp row inherited from lyria-3.5
- [#42847](https://github.com/BerriAI/litellm/pull/42847) feat(models): add openrouter/openai/gpt-oss-120b:batch from the OpenRouter models API
- [#42846](https://github.com/BerriAI/litellm/pull/42846) fix(models): add the sora-2-pro shutdown date to the sora-2-pro-high-res rows
- [#42855](https://github.com/BerriAI/litellm/pull/42855) test(integration): assert /v1/responses usage reports Anthropic system cache write then read
- [#42845](https://github.com/BerriAI/litellm/pull/42845) chore(models): add deprecation_date to claude-mythos-preview from the Anthropic deprecations page
- [#42851](https://github.com/BerriAI/litellm/pull/42851) feat(models): add 39 together_ai chat rows priced by the Together models API
- [#42830](https://github.com/BerriAI/litellm/pull/42830) fix(caching): stamp provider on sync cache-hit logs so responses spend logs record provider
- [#42850](https://github.com/BerriAI/litellm/pull/42850) fix(models): add the June 1, 2026 retirement date to the vertex_ai gemini-2.0-flash rows
- [#42802](https://github.com/BerriAI/litellm/pull/42802) fix(proxy): document request body and response schemas for the Responses API in OpenAPI
- [#42838](https://github.com/BerriAI/litellm/pull/42838) fix(ollama): read the JSON thinking field on non-streaming completions
- [#42834](https://github.com/BerriAI/litellm/pull/42834) feat(models): add openai chat-latest, codex and deep-research rows from the model docs
- [#42842](https://github.com/BerriAI/litellm/pull/42842) feat(ui): configure prompt caching request rows per page
- [#42794](https://github.com/BerriAI/litellm/pull/42794) docs(pr-template): drop empty sections from the PR body and tighten the User Flow

#### 🐛 New Issues
- [#43000](https://github.com/BerriAI/litellm/issues/43000) [Bug]: encrypted_content_affinity has no fallback when the pinned deployment is unavailable or removed, permanently bricking multi-turn Responses API conversations `llm translation` 💬3
- [#43059](https://github.com/BerriAI/litellm/issues/43059) [Bug]: Scheduler never removes admitted requests from the priority queue, so prioritized requests fail during cooldown and, with Redis, under normal traffic `bug` `llm translation` 💬2
- [#43012](https://github.com/BerriAI/litellm/issues/43012) [Bug]: Anthropic stop_reason model_context_window_exceeded is mapped to finish_reason "stop" `llm translation` `claude code` 💬2
- [#43045](https://github.com/BerriAI/litellm/issues/43045) [Bug]: `encrypted_content_affinity` does not match an encryption-boundary peer when a deployment uses `litellm_credential_name` `llm translation` 💬1
- [#43005](https://github.com/BerriAI/litellm/issues/43005) Bedrock audio transcription hardcodes a system message in the Rust codec, breaking Voxtral (400 'Found system messages at indexes [0] and audio chunks') `llm translation` 💬1
- [#43013](https://github.com/BerriAI/litellm/issues/43013) [Bug]: OpenAI "exceeds the context window" and Moonshot "exceeded model token limit" errors not mapped to ContextWindowExceededError `llm translation` `claude code` 💬1
- [#43002](https://github.com/BerriAI/litellm/issues/43002) [Bug]: tool-usage flush and auto-router turn drain permanently drop data on a transient DB connection error 💬1
- [#42988](https://github.com/BerriAI/litellm/issues/42988) [Bug]: Streaming failure callbacks bypass duplicate logging guard and enqueue repeated S3 uploads `llm translation` 💬1
- [#42910](https://github.com/BerriAI/litellm/issues/42910) [Bug]: get_supported_openai_params lists temperature for Claude models with supports_sampling_params: false, and get_model_info drops the flag `llm translation` 💬1
- [#42868](https://github.com/BerriAI/litellm/issues/42868) [Bug]: s3_v2 async 500/503 retries are bypassed by HTTPStatusError 💬1
- [#42945](https://github.com/BerriAI/litellm/issues/42945) [Feature]: Show a tag's virtual keys on the Tag details page `llm translation` 💬1
- [#42946](https://github.com/BerriAI/litellm/issues/42946) [Feature]: Contains filters for tag name and description on the Tag Management page `llm translation` 💬1
- [#42959](https://github.com/BerriAI/litellm/issues/42959) [Bug]: per-turn-control-2026-07-01 filtered for azure_ai, but Azure AI Foundry supports it — Claude Code fails with "messages.1.output_config: Extra inputs are not permitted" `bug` `llm translation` `claude code` 💬1
- [#42886](https://github.com/BerriAI/litellm/issues/42886) [Bug]: /v1/messages passthrough skips temperature reconciliation for adaptive-thinking models, which still 400 `bug` `llm translation` 💬1
- [#43098](https://github.com/BerriAI/litellm/issues/43098) [Bug]: OpenAI to Anthropic conversion downloads http:// image URLs instead of forwarding them `bug` `llm translation`
- [#43032](https://github.com/BerriAI/litellm/issues/43032) [Bug]: langfuse_otel builds OTLP endpoint without required /v1/traces suffix — self-hosted Langfuse traces silently dropped (404)
- [#43019](https://github.com/BerriAI/litellm/issues/43019) [Bug]: Terraform resource `litellm_mcp_server.auth_type` does not support `bearer_token` input, resulting in a 422 error `bug`
- [#43014](https://github.com/BerriAI/litellm/issues/43014) [Bug]: Gemini errors on streaming /v1/chat/completions bypass exception mapping (raw bytes message, no ContextWindowExceededError) `llm translation` `claude code`
- [#43010](https://github.com/BerriAI/litellm/issues/43010) [Bug]: /v1/responses streaming with Anthropic doubles thinking text in reasoning encrypted_content `llm translation` `claude code`
- [#43011](https://github.com/BerriAI/litellm/issues/43011) [Bug]: /v1/responses bridge drops Gemini thought signatures on text parts `llm translation` `claude code`
- [#43009](https://github.com/BerriAI/litellm/issues/43009) [Bug]: Bedrock Converse drops redacted_thinking blocks on replay, causing "Invalid signature in thinking block" `llm translation` `claude code`
- [#43006](https://github.com/BerriAI/litellm/issues/43006) [Feature]: Databricks audio transcription support (get_provider_audio_transcription_config has no databricks branch -> 'Unmapped provider passed in') `llm translation`
- [#42955](https://github.com/BerriAI/litellm/issues/42955) [Bug]: Responses streaming fallback replays a delivered tool call `llm translation`
- [#42939](https://github.com/BerriAI/litellm/issues/42939) [Bug]: Headroom guardrail compresses nothing when the client sets a trailing cache_control breakpoint (protected == 100% of messages) `llm translation` `claude code`
- [#42938](https://github.com/BerriAI/litellm/issues/42938) [Bug]: sse_keepalive_ping_interval_seconds leaks a max_parallel_requests slot on every streaming request (ContextVar lost across asyncio.ensure_future)
- [#42928](https://github.com/BerriAI/litellm/issues/42928) [Feature]: Control order-based fallback by HTTP status code
- [#42919](https://github.com/BerriAI/litellm/issues/42919) [Bug]: /v1/responses reasoning item carries thinking text as output_text instead of reasoning_text, failing OpenAI SDK validation `llm translation`
- [#42869](https://github.com/BerriAI/litellm/issues/42869) [Bug]: streaming /v1/responses emits no reasoning item for signature-only thinking (Claude Fable 5.1 / Opus 5.5 default, Bedrock adaptive), so reasoning cannot be replayed `llm translation`
- [#42896](https://github.com/BerriAI/litellm/issues/42896) [Feature]: Option to keep message content out of debug logs while debug logging is enabled `enhancement`
- [#42863](https://github.com/BerriAI/litellm/issues/42863) [Bug]: AWS Terraform module fails validation when gateway_metrics_port uses its default
- [#42853](https://github.com/BerriAI/litellm/issues/42853) [Bug]: Bedrock GPT-6 Astra returns 400 on /v1/messages when thinking is disabled `llm translation`

#### 🔒 Closed Issues
- [#24109](https://github.com/BerriAI/litellm/issues/24109) [Feature]: Provide either `/info` or `/version` API endpoint to expose LiteLLM version
- [#24065](https://github.com/BerriAI/litellm/issues/24065) [Bug]: Cloudflare Workers AI API Error
- [#28474](https://github.com/BerriAI/litellm/issues/28474) [Bug]: The litellm call will disconnect after 60-70 seconds.
- [#43000](https://github.com/BerriAI/litellm/issues/43000) [Bug]: encrypted_content_affinity has no fallback when the pinned deployment is unavailable or removed, permanently bricking multi-turn Responses API conversations
- [#30504](https://github.com/BerriAI/litellm/issues/30504) [Bug]: Adding Complexity router from "Add auto router" UI fails
- [#42716](https://github.com/BerriAI/litellm/issues/42716) [Bug]: AutoRouter finishes with no content returned
- [#35665](https://github.com/BerriAI/litellm/issues/35665) [Bug]: Security - logout/password change do not revoke active UI sessions (v1.94.0)
- [#30314](https://github.com/BerriAI/litellm/issues/30314) [Bug]: Malformed input request: #: extraneous key [cache_control_injection_points] is not permitted
- [#41962](https://github.com/BerriAI/litellm/issues/41962) [Bug]: Ollama completion transport discards the JSON `thinking` field on non-streaming replies (empty content, reasoning_content always null)
- [#30742](https://github.com/BerriAI/litellm/issues/30742) [Bug]: Bedrock Converse map_openai_params uses if instead of elif causing unnecessary checks
- [#30798](https://github.com/BerriAI/litellm/issues/30798) [Bug]: /team/info leaks internal model routing keys; /team/update round-trips them back, corrupting team.models
- [#30833](https://github.com/BerriAI/litellm/issues/30833) [Bug]: Fix the CVEs for liteLLM 1.85.5
- [#30839](https://github.com/BerriAI/litellm/issues/30839) [Bug]: Prometheus Metrics - litellm_total_users & litellm_teams_count
- [#33952](https://github.com/BerriAI/litellm/issues/33952) [Bug]: /utils/transform_request performs blocking provider I/O and freezes the proxy event loop
- [#34147](https://github.com/BerriAI/litellm/issues/34147) AWS Bedrock charges for full usage in interrupted/disconnected mid-streams requests
- [#42750](https://github.com/BerriAI/litellm/issues/42750) [Feature]: Let a custom callback hide models from the model listing endpoints
- [#37034](https://github.com/BerriAI/litellm/issues/37034) [Feature]: Add Team ALIASES to /v1/models list
- [#42679](https://github.com/BerriAI/litellm/issues/42679) [Bug]: Bedrock in-region (bare) Claude model IDs are priced at the global rate, but AWS bills 10% more

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,724 · **Open issues:** 1,344 · **Last push:** <1h ago

On September 25, 2026, there were no new releases for Unsloth. Significant merged pull requests included enhancements to the Unsloth Studio, such as updates to the launcher tests (#11869), improvements to the evaluation step by restoring the UNSLOTH_RETURN_LOGITS (#11865), and fixes for handling model exports and rendering issues. Notably, new issues reported included a bug relating to the export of fine-tuned models to GGUF due to read-only permissions in the Hugging Face cache (#11785), and a report of performance issues on the M5 Max when running the Qwen Image 2.1 model (#11792). Overall, the day was marked by a series of optimizations and fixes rather than any major overhauls.

#### ✅ Merged PRs
- [#11869](https://github.com/unslothai/unsloth/pull/11869) Studio update launcher tests: give every test a private STUDIO_HOME
- [#11865](https://github.com/unslothai/unsloth/pull/11865) Eval step: restore UNSLOTH_RETURN_LOGITS even when evaluation raises
- [#11863](https://github.com/unslothai/unsloth/pull/11863) Padding-free gate tests: state that UNSLOTH_RETURN_LOGITS is unset
- [#11732](https://github.com/unslothai/unsloth/pull/11732) Unsloth Studio (AMD/ROCm): don't turn on cudnn.benchmark for image and video generation
- [#11817](https://github.com/unslothai/unsloth/pull/11817) Load-replacement contract: read the rollback guard, not its one-line spelling
- [#11816](https://github.com/unslothai/unsloth/pull/11816) Prebuilt installers: retry a download the server drops
- [#11697](https://github.com/unslothai/unsloth/pull/11697) Replace an in-flight chat model load with the latest pick
- [#11811](https://github.com/unslothai/unsloth/pull/11811) Baseline the two huggingface_hub 1.33.0 / 2.0.0 findings after review
- [#11696](https://github.com/unslothai/unsloth/pull/11696) Fix GGUF vision capability selection
- [#11695](https://github.com/unslothai/unsloth/pull/11695) Fix false ONNX rejection for models with native weights
- [#11690](https://github.com/unslothai/unsloth/pull/11690) Studio: show the Custom size fields under Output size in unified Edit
- [#11789](https://github.com/unslothai/unsloth/pull/11789) Account matrix: cover the audio gallery move and add-to-project routes
- [#11699](https://github.com/unslothai/unsloth/pull/11699) Studio: dock the floating Live monitor beside Run settings
- [#11775](https://github.com/unslothai/unsloth/pull/11775) Studio: example prompt per image workflow, remember the last prompt
- [#11718](https://github.com/unslothai/unsloth/pull/11718) Studio: Make `unsloth start --reasoning on/off` take effect
- [#11726](https://github.com/unslothai/unsloth/pull/11726) Studio: Keep Codex reasoning between tool calls on /v1/responses
- [#11720](https://github.com/unslothai/unsloth/pull/11720) Studio: fix broken Chinese, Japanese and emoji text in gpt-oss replies
- [#11773](https://github.com/unslothai/unsloth/pull/11773) Layout contract: tie the Train rail clamp to its scroller's padding
- [#11731](https://github.com/unslothai/unsloth/pull/11731) Studio: stop the max speed tier recompiling on every new prompt length
- [#11706](https://github.com/unslothai/unsloth/pull/11706) fix(studio): support preserve thinking for llama.cpp connections
- [#11717](https://github.com/unslothai/unsloth/pull/11717) Studio: Show token usage and cache stats on connected provider chats
- [#11774](https://github.com/unslothai/unsloth/pull/11774) Studio: pin, reorder and add to project for Audio history
- [#11753](https://github.com/unslothai/unsloth/pull/11753) Studio: make the HunyuanImage-2.1 denoiser step capturable as a CUDA graph
- [#11713](https://github.com/unslothai/unsloth/pull/11713) Studio: let an explicit FBCache request engage on Qwen-Image-2.1 and other prefix-KV models
- [#11677](https://github.com/unslothai/unsloth/pull/11677) Studio: keep Qwen-Image-2.1 int8 / fp8 compiling on torch 2.12 (CantSplit)
- [#11719](https://github.com/unslothai/unsloth/pull/11719) Studio: end Alpaca training samples with the end token
- [#11716](https://github.com/unslothai/unsloth/pull/11716) Export full fine-tunes in 16-bit from the CLI by default
- [#11777](https://github.com/unslothai/unsloth/pull/11777) MCP HTTP integration test: let the server bind its own port
- [#11772](https://github.com/unslothai/unsloth/pull/11772) studiobench: do not fail UI parity on repetitions that swap two renderings
- [#11765](https://github.com/unslothai/unsloth/pull/11765) Studio: follow-ups for the media gallery, hub link and rail divider
- [#11769](https://github.com/unslothai/unsloth/pull/11769) Studio: stop clipping the model description's descenders; follow the resizable rail in the layout contracts
- [#11767](https://github.com/unslothai/unsloth/pull/11767) Account matrix: cover the gallery move and add-to-project routes
- [#11762](https://github.com/unslothai/unsloth/pull/11762) Update idempotency: count whisper.cpp only when the install has one
- [#11763](https://github.com/unslothai/unsloth/pull/11763) Data settings check: pin the legacy store outcome in the failed-delete check
- [#11759](https://github.com/unslothai/unsloth/pull/11759) Studio installer: do not run Apple's git shim to ask whether git works
- [#11760](https://github.com/unslothai/unsloth/pull/11760) Studio: make the Images, Video and Audio settings rail resizable
- [#11758](https://github.com/unslothai/unsloth/pull/11758) Studio: drag to reorder, add to project and quick download for the image and video galleries
- [#11756](https://github.com/unslothai/unsloth/pull/11756) Studio: add Search Hub to the Images, Video and Audio model pickers
- [#11757](https://github.com/unslothai/unsloth/pull/11757) Studio: keep the model name and quant whole in the Images and Video header
- [#11751](https://github.com/unslothai/unsloth/pull/11751) Clean-machine trace leg: let git fetch the pinned git+ requirements, nothing else
- [#11752](https://github.com/unslothai/unsloth/pull/11752) AMD iGPU routing tests: clear the visibility masks for every test
- [#11749](https://github.com/unslothai/unsloth/pull/11749) Chat UI driver: wait for the Recents thread to load, and let the check fail

#### 🐛 New Issues
- [#11768](https://github.com/unslothai/unsloth/issues/11768) [Feature] Expose GPU toggle for RAG embedding model `feature request` 💬2
- [#11785](https://github.com/unslothai/unsloth/issues/11785) [Bug] Exporting fine-tuned model to GGUF fails due to read-only permission in hugging face cache in unsloth studio `feature request` `bug` 💬2
- [#11792](https://github.com/unslothai/unsloth/issues/11792) [Bug]? Unable to run Qwen Image 2.1 Q4_K_M on an M5 Max with 48 gb? `feature request` `bug` 💬2
- [#11778](https://github.com/unslothai/unsloth/issues/11778) [Unsloth Desktop ] Thinking UI text rendering stutters new thinking ui at 30/60 FPS" `feature request` `bug` 💬1
- [#11810](https://github.com/unslothai/unsloth/issues/11810) [Bug] --mmproj-device / --spec-draft-device rejected as "invalid device" when Studio pins llama-server to a single GPU `feature request` `bug`
- [#11870](https://github.com/unslothai/unsloth/issues/11870) [Bug] AMD: Unsloth Studio / Desktop GGUF export splits the model onto an iGPU the installed PyTorch has no kernels for, and fails with "invalid kernel file"
- [#11815](https://github.com/unslothai/unsloth/issues/11815) [Feature] Unsloth Studio (AMD): install every AMD card from AMD's stable multi-arch index `feature request` `AMD` `Studio` `windows`
- [#11814](https://github.com/unslothai/unsloth/issues/11814) [Bug] Unsloth Studio (AMD/Windows): a gfx103X / gfx110X / gfx908 / gfx90a venv can stay on torch 2.10.0+rocm7.13.0, whose `_grouped_mm` access-violates, so `import unsloth` crashes `bug` `AMD` `Studio` `important#`
- [#11848](https://github.com/unslothai/unsloth/issues/11848) [Bug] "streamdown:incomplete-link" & "[blocked]" Showing In Streaming Response `feature request` `bug`
- [#11840](https://github.com/unslothai/unsloth/issues/11840) [Tracking] Unsloth Studio / Desktop: Qwen-Image-2.1 open issues and PRs, week of Sep 22
- [#11839](https://github.com/unslothai/unsloth/issues/11839) [Bug] Tool Call Elision Mechanism Causing File Corruption When Using The "Edit_File" Tool `feature request` `bug`
- [#11837](https://github.com/unslothai/unsloth/issues/11837) [Feature] Allow adjustment of deep research parameters within an existing thread `feature request`
- [#11825](https://github.com/unslothai/unsloth/issues/11825) [Bug] Unsloth Studio / Desktop: Qwen/Qwen-Image-2.1 can't be deleted because a hidden unsloth/Qwen-Image-2.1-FP8 fetch counts as a model that still needs it
- [#11833](https://github.com/unslothai/unsloth/issues/11833) [Bug] UI: Search/Code toggle states indistinguishable; thinking not collapsible; long conversations cause UI lag in all web ui browsers `feature request` `bug`
- [#11826](https://github.com/unslothai/unsloth/issues/11826) [Bug] Unsloth Studio / Desktop: picking unsloth/Qwen-Image-2.1-FP8 as a model stages 14 GB, then the load 404s on model_index.json
- [#11827](https://github.com/unslothai/unsloth/issues/11827) [Bug] Unsloth Studio / Desktop: the Qwen-Image-2.1 GGUF has no general.architecture, so the Images page's On Device tab hides it and Chat lists it instead
- [#11822](https://github.com/unslothai/unsloth/issues/11822) [Feature] Server always binds on all IP then warns about one being a public IP `feature request`
- [#11821](https://github.com/unslothai/unsloth/issues/11821) [Bug] Studio: "Remember for this model" never mirrors settings to the server for MLX models, so API auto-switch loads them with defaults
- [#11820](https://github.com/unslothai/unsloth/issues/11820) [Bug] Studio API (MLX): with a chat template override, a thinking-off answer is returned as `reasoning_content` and `content` is empty
- [#11809](https://github.com/unslothai/unsloth/issues/11809) [Unsloth Bug] Streaming response body is held ~5 s after the headers when the request declares large tool schemas
- [#11754](https://github.com/unslothai/unsloth/issues/11754) [Question] Complete chat history location

#### 🔒 Closed Issues
- [#6988](https://github.com/unslothai/unsloth/issues/6988) [Bug / Feature Request] UI Improvement: Docking/Merging Live Monitor to prevent occlusion by Run Settings
- [#11636](https://github.com/unslothai/unsloth/issues/11636) [Bug] AMD: Unsloth Studio / Desktop image generation turns on cudnn.benchmark under ROCm, so the first VAE decode runs MIOpen's exhaustive tuning for 10 to 23 minutes and crashed a gfx1030

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,112 · **Open issues:** 384 · **Last push:** <1h ago

On September 25, 2026, there were no new releases for AIBrix. Significant development activity was marked by several merged pull requests, including #2719, which enforces tokenizer pool capacity during concurrent creation, and #2803, which introduces support for accepting workers and prefill/decode worker keys in the static configuration. Noteworthy bug fixes include #2784, which improves the inclusion of canonicalized tools in prefix-match text, and #2791, which infers the StormService mode based on spec.replicas when the mode is unset. The day's hot new issue is #2800, which reports a bug where gateway per-pod state is keying by bare pod name outside the PD trackers, stirring community discussion.

#### ✅ Merged PRs
- [#2719](https://github.com/vllm-project/aibrix/pull/2719) [Bug] Enforce tokenizer pool capacity during concurrent creation
- [#2801](https://github.com/vllm-project/aibrix/pull/2801) [CI] Serialize the poetry install in the python image
- [#2784](https://github.com/vllm-project/aibrix/pull/2784) [Bug] Include canonicalized tools in the prefix-match text
- [#2785](https://github.com/vllm-project/aibrix/pull/2785) [Bug] Key PD router per-pod load state by namespace/name
- [#2791](https://github.com/vllm-project/aibrix/pull/2791) [Bug] Infer StormService mode from spec.replicas when spec.mode is unset
- [#2803](https://github.com/vllm-project/aibrix/pull/2803) [Feat] Accept workers and prefill/decode worker keys in the static config
- [#2797](https://github.com/vllm-project/aibrix/pull/2797) [Misc] Pin the SLOQueue ordering contract and cover the policy switch matrix
- [#2796](https://github.com/vllm-project/aibrix/pull/2796) [Feat] Scope the VTC token tracker per profile

#### 🐛 New Issues
- [#2800](https://github.com/vllm-project/aibrix/issues/2800) [Bug] Gateway per-pod state still keyed by bare pod name outside the PD trackers `area/gateway` `kind/misc` `area/orchestration` 💬2
- [#2799](https://github.com/vllm-project/aibrix/issues/2799) [Bug] Prefix matching ignores /v1/messages `system` and /v1/responses `instructions`/`tools` `kind/bug` `area/gateway` `triage/needs-information` 💬2
- [#2807](https://github.com/vllm-project/aibrix/issues/2807) [Feature][ModelClaim] Route a new engine within seconds of being ready `kind/feature` `area/orchestration` 💬1
- [#2806](https://github.com/vllm-project/aibrix/issues/2806) [Feature][ModelClaim] Back off from claims that cannot be placed, and say when one can never fit `kind/feature` `area/orchestration` 💬1
- [#2808](https://github.com/vllm-project/aibrix/issues/2808) [Feature][ModelClaim] Answer 503 with Retry-After for a model whose claim is not placed yet `area/gateway` `kind/feature` 💬1
- [#2805](https://github.com/vllm-project/aibrix/issues/2805) [Testing] Triage of red tests that still need a fix (90-day sweep) `kind/bug` `area/gateway` `area/testing` `area/website` 💬1

#### 🔒 Closed Issues
- [#2727](https://github.com/vllm-project/aibrix/issues/2727) [Feature] Make Kubernetes API client QPS and Burst configurable for gateway-plugin

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,912 · **Open issues:** 543 · **Last push:** <1h ago

On September 25, 2026, there were no new releases for the Semantic Router, but two significant pull requests were merged. Notably, the project's CI now requires Python 3.10 or newer for the .venv-agent, and the built-in Model Card catalog has been updated to include the Xiaomi MiMo V2.6 Flash. Among the newly reported issues, the bug regarding the production-stack jailbreak-detection E2E failures after swapping Vela Guard (#4120) has garnered attention, highlighting ongoing challenges in the system's stability. Additionally, discussions on layout issues with blog articles on wide screens (#4112) indicate user interface adjustments might be needed moving forward. Overall, the day was largely routine maintenance with important updates on both functionality and documentation.

#### ✅ Merged PRs
- [#4129](https://github.com/vllm-project/semantic-router/pull/4129) [CI/Build] Require Python 3.10 or newer for .venv-agent
- [#4091](https://github.com/vllm-project/semantic-router/pull/4091) [Feature] Add Xiaomi MiMo V2.6 Flash to the built-in Model Card catalog

#### 🐛 New Issues
- [#4112](https://github.com/vllm-project/semantic-router/issues/4112) [Feature] Blog article layout leaves a large unused gap on the right on wide screens `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬7
- [#4120](https://github.com/vllm-project/semantic-router/issues/4120) [Bug] production-stack jailbreak-detection E2E fails after Vela Guard swap (#3769) `bug` `accepted` `wg/router-models-inference-runtime` 💬3
- [#4088](https://github.com/vllm-project/semantic-router/issues/4088) [Docs] Clarify stack layers: rename “LLM-D” category to Inference Router; expand AI Gateway examples `accepted` `wg/developer-experience-ecosystem` 💬3
- [#4084](https://github.com/vllm-project/semantic-router/issues/4084) [Feature] Serve six Decision 1.0 models with vllm-sr decision serve `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬1
- [#4106](https://github.com/vllm-project/semantic-router/issues/4106) [Bug] harness-go-bootstrap reuses a golangci-lint built by an older Go, so Go lint panics after a Go upgrade `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4105](https://github.com/vllm-project/semantic-router/issues/4105) [Bug] make harness-bootstrap builds .venv-agent with macOS's Python 3.9 and keeps reusing it `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4126](https://github.com/vllm-project/semantic-router/issues/4126) [Docs] Use the Agent Router name for the former Envoy AI Gateway `needs-acceptance` `wg/developer-experience-ecosystem` `documentation` 💬2
- [#4113](https://github.com/vllm-project/semantic-router/issues/4113) [Bug] DeepSeek's deepseek-v4-pro name may now serve V4.1 Flash, not V4 Pro `bug` `needs-info` `wg/evaluation-quality` 💬2
- [#4122](https://github.com/vllm-project/semantic-router/issues/4122) [Bug] Every make command warns that CUDA_COMPUTE_CAP is undefined `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4132](https://github.com/vllm-project/semantic-router/issues/4132) [Bug] Image builds fail on arm64 hosts in the vela-omni-builder stage `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4127](https://github.com/vllm-project/semantic-router/issues/4127) [Bug] Merging one catalog PR makes the others conflict, and the README card count drifts unchecked `bug` `needs-acceptance` `wg/developer-experience-ecosystem` 💬1
- [#4118](https://github.com/vllm-project/semantic-router/issues/4118) [Bug] Buffered response diagnostics are lost: the warnings header is built before the body is decoded `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4117](https://github.com/vllm-project/semantic-router/issues/4117) [Bug] The documented bench[real_eval] install breaks the EvalScope runner `bug` `accepted` `wg/evaluation-quality` 💬1
- [#4115](https://github.com/vllm-project/semantic-router/issues/4115) [Bug] Built-in Bedrock Nova mappings use Chat Completions, which Bedrock does not support for Nova `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4114](https://github.com/vllm-project/semantic-router/issues/4114) [Bug] Nova Pro and Nova Premier output limits and Premier's Bedrock lifecycle disagree with AWS `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4104](https://github.com/vllm-project/semantic-router/issues/4104) [Bug] The stable vllm-sr CLI pulls a main-built :latest image that rejects its own configs `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4094](https://github.com/vllm-project/semantic-router/issues/4094) [Bug] Moonshot provider still maps the retired kimi-k2.5 API model `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4119](https://github.com/vllm-project/semantic-router/issues/4119) [Bug] Fleet Sim guide download links use an invalid pathname:/// prefix 💬1

#### 🔒 Closed Issues
- [#4088](https://github.com/vllm-project/semantic-router/issues/4088) [Docs] Clarify stack layers: rename “LLM-D” category to Inference Router; expand AI Gateway examples
- [#4105](https://github.com/vllm-project/semantic-router/issues/4105) [Bug] make harness-bootstrap builds .venv-agent with macOS's Python 3.9 and keeps reusing it
- [#4113](https://github.com/vllm-project/semantic-router/issues/4113) [Bug] DeepSeek's deepseek-v4-pro name may now serve V4.1 Flash, not V4 Pro
- [#4004](https://github.com/vllm-project/semantic-router/issues/4004) [Bug] The CUDA image does not ship a CUDA-capable Candle, so `--platform nvidia` cannot start
- [#3996](https://github.com/vllm-project/semantic-router/issues/3996) [Bug] MemoryBackend accepts embeddings with the wrong dimension
- [#4027](https://github.com/vllm-project/semantic-router/issues/4027) [Bug] Dashboard config editor cannot save in Docker/CLI deployments: rename() over single-file bind mount fails (EBUSY)
- [#4119](https://github.com/vllm-project/semantic-router/issues/4119) [Bug] Fleet Sim guide download links use an invalid pathname:/// prefix

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*