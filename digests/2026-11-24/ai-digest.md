# 📡 AI Ecosystem Digest — 2026-11-24

> Generated 2026-11-24 06:48 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 156,856 | 27 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 136,277 | 15 | 4 | 49 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 109,038 | 0 | 0 | 4 | 4 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,463 | 6 | 9 | 1 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 228,855 | 33 | 10 | 9 | 2 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,907 | 14 | 9 | 11 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 395,126 | 143 | 155 | 174 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 265,720 | 20 | 11 | 0 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,448 | 28 | 16 | 41 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 39,000 | 29 | 17 | 30 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 136,114 | 11 | 9 | 31 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 187,945 | 8 | 6 | 2 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,787 | 16 | 37 | 151 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 80,117 | 13 | 3 | 206 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,203 | 7 | 2 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,523 | 7 | 5 | 3 | 0 |

---

## ✨ Highlights

- **vLLM** released version [v0.20.0](https://github.com/vllm-project/vllm/releases/tag/v0.20.0) with significant improvements.  
- **Claude Code** has introduced a new release, [v2.1.331](https://github.com/anthropics/claude-code/releases/tag/v2.1.331), which aims to enhance overall functionality.  
- **OpenCode** merged several notable PRs including [feat(app): pin inbox sessions](https://github.com/anomalyco/opencode/pull/65961), improving user experience on session management.  
- A significant issue has arisen in **OpenClaw** regarding its [Discord provider](https://github.com/openclaw/openclaw/issues/204283) which fails on client initialization after an upgrade, attracting significant attention with 6 comments.  
- In **LiteLLM**, the new issue on [per-principal budgets](https://github.com/BerriAI/litellm/issues/53946) rapidly gained traction with 23 comments, reflecting heavy interest in financial features.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 156,856 · **Open issues:** 16,086 · **Last push:** 2h ago

On November 24, 2026, Claude Code released version v2.1.331, which introduced Code Mode support for terminal sessions across Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, and the Claude Platform on AWS. Additionally, enhancements included the addition of `oidc.groups_jsonpath` to the Claude apps gateway for improved JSONPath group reading and a new API connectivity section in `claude doctor`. Among the newly reported issues, a particularly concerning bug (#111921) was identified where an autonomous task ran all repository tests locally without proper auditing, leading to the deletion of user files outside the repo. Other notable issues included bugs related to session management and environment variable behavior, indicating ongoing challenges in user experience.

#### 🚀 New Releases
- [v2.1.331](https://github.com/anthropics/claude-code/releases/tag/v2.1.331) v2.1.331

#### 🐛 New Issues
- [#111921](https://github.com/anthropics/claude-code/issues/111921) [BUG] Autonomous task ran every repo test locally without auditing them and deleted user files outside the repo `bug` `platform:macos` `area:model` `area:permissions` 💬3
- [#111942](https://github.com/anthropics/claude-code/issues/111942) [GitHub integration] `github-integration` 💬2
- [#111811](https://github.com/anthropics/claude-code/issues/111811) [BUG] `claude -w <name> -p` exits 0 but leaves its worktree locked by its own exited pid; a later `claude -p` does not release it `bug` `has repro` `platform:windows` `area:core` 💬2
- [#111932](https://github.com/anthropics/claude-code/issues/111932) [BUG] CLAUDE_CODE_ENABLE_CFC=0 in project settings env is accepted but applied after Claude in Chrome is already wired `bug` `has repro` `platform:linux` `area:core` 💬2
- [#111903](https://github.com/anthropics/claude-code/issues/111903) [Desktop] Cross-session send_message returns 'undelivered' and never reaches the target CLI, yet the target's transcript view shows the message `bug` `platform:windows` `area:desktop` 💬2
- [#111870](https://github.com/anthropics/claude-code/issues/111870) [FEATURE] Native Pause / Hibernate & Resume controls for single and parallel sessions (VS Code & CLI) `enhancement` `area:ide` `area:cli` 💬2
- [#111897](https://github.com/anthropics/claude-code/issues/111897) Auto mode via gateway: misleading "credit balance is too low" from beta combo, and classifier model silently falls back `bug` `platform:macos` `area:api` `area:permissions` 💬2
- [#111837](https://github.com/anthropics/claude-code/issues/111837) [BUG] Ultra weekly limit drained by unexplained Other usage (84%); Fable limit at 99% with zero Fable requests in Claude Code logs `bug` `platform:windows` `area:cost` `area:desktop` 💬2
- [#111939](https://github.com/anthropics/claude-code/issues/111939) [BUG] Resuming a session from a second host starts a second live copy while the original keeps running; ▎ both write to one transcript without any warning `bug` `platform:linux` `area:core` 💬1
- [#111935](https://github.com/anthropics/claude-code/issues/111935) [BUG] Claude Desktop (macOS): Code tab animations lag while the app isn't frontmost, e.g. while the pointer is on another Mac through Universal Control `bug` `platform:macos` `perf:cpu` `area:desktop` 💬1
- [#111915](https://github.com/anthropics/claude-code/issues/111915) [BUG] Tools loaded through ToolSearch are deferred again after a compaction (2.1.321 and 2.1.331, repro with request bodies) `bug` `has repro` `platform:macos` `area:tools` 💬1
- [#111941](https://github.com/anthropics/claude-code/issues/111941) [BUG] --add-dir trust dialog does not emit OSC 7501 blocked status `bug` `platform:macos` `area:tui`
- [#111940](https://github.com/anthropics/claude-code/issues/111940) Opus 5.5: Explicit instruction overridden without asking; documented prior work not consulted for 25.7 hours; work left on node-local storage `bug` `platform:linux` `area:model` `model`
- [#111938](https://github.com/anthropics/claude-code/issues/111938) [FEATURE] Option to scope the /resume picker to the current working directory (like Codex's Filter: Cwd) `enhancement` `area:tui` `area:cli`
- [#111937](https://github.com/anthropics/claude-code/issues/111937) [GitHub integration] `bug` `area:auth` `github-integration`
- [#111936](https://github.com/anthropics/claude-code/issues/111936) [BUG] Code blocks in replies render without syntax colors (diff and ts all grey) on 2.1.331, macOS 27 `bug` `platform:macos` `area:tui`
- [#111934](https://github.com/anthropics/claude-code/issues/111934) [Bug] AI session committed fabricated DARPA whitepaper with false DoD markings `bug` `platform:linux` `area:model`
- [#111933](https://github.com/anthropics/claude-code/issues/111933) Opus 5.5 safeguards repeatedly flagged legitimate scientific work as [bio] `bug` `area:model` `model`
- [#111931](https://github.com/anthropics/claude-code/issues/111931) [Bug] @ File Tagging Stops Returning Project Files After 2-4 Uses `bug` `platform:windows` `area:tui` `platform:vscode`
- [#111930](https://github.com/anthropics/claude-code/issues/111930) Requesting a feature to easy switch accouts on desktop app `enhancement` `area:auth` `area:desktop`
- [#111929](https://github.com/anthropics/claude-code/issues/111929) [Bug] Safeguards error on casual conversation for all models except Haiku `bug` `platform:macos` `area:model`
- [#111928](https://github.com/anthropics/claude-code/issues/111928) [FEATURE] Desktop: show the machine on recent environment rows of the new-session page `enhancement` `platform:macos` `area:desktop`
- [#111927](https://github.com/anthropics/claude-code/issues/111927) [FEATURE] Desktop: keep the unread dot's color when the app window is inactive `enhancement` `platform:macos` `area:desktop`
- [#111926](https://github.com/anthropics/claude-code/issues/111926) [FEATURE] Artifact tool: share an artifact with people by email (invite, role, general access) `enhancement` `area:tools`
- [#111925](https://github.com/anthropics/claude-code/issues/111925) [BUG] Bedrock: expired SSO at session start latches the unchecked region-prefix fallback; 400 "model identifier is invalid" persists after re-login `bug` `has repro` `platform:windows` `api:bedrock`
- [#111924](https://github.com/anthropics/claude-code/issues/111924) [Bug] Restriction on one MCP tool expanded to entire server access `bug` `platform:macos` `area:model` `area:mcp`
- [#111923](https://github.com/anthropics/claude-code/issues/111923) Channels docs and Telegram/Discord plugin READMEs should state that messages aren't end-to-end encrypted `documentation` `enhancement` `area:security` `area:docs`

#### 🔒 Closed Issues
- [#111903](https://github.com/anthropics/claude-code/issues/111903) [Desktop] Cross-session send_message returns 'undelivered' and never reaches the target CLI, yet the target's transcript view shows the message

### OpenAI Codex (`openai/codex`)

**Stars:** 136,277 · **Open issues:** 28,449 · **Last push:** <1h ago

Today, OpenAI Codex released several updates, including rust-v0.172.0, which introduced new features such as the ability to follow thread links from search results to saved conversations and to complete arguments for supported slash commands using the `Tab` key. Additionally, rust-v0.174.0-alpha.1 and rust-v0.173.0-alpha.5 were released, though specific changes were not detailed. Significant merged pull requests included improvements to the TUI model picker, a fix for avoiding keyring unlock prompts on headless Linux, and enhancements to session model ID requirements for thread stores. A particularly pressing new issue reported a harness error causing sessions to fail due to "No tool output found," with 29 confirmed cases affecting users on the DeepSeek Responses path.

#### 🚀 New Releases
- [rust-v0.174.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.1) 0.174.0-alpha.1
- [rust-v0.172.0](https://github.com/openai/codex/releases/tag/rust-v0.172.0) 0.172.0
- [rust-v0.173.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.5) 0.173.0-alpha.5
- [rust-v0.172.0-alpha.2.1](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2.1) 0.172.0-alpha.2.1
- [rust-v0.171.0-alpha.13.2](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.2) 0.171.0-alpha.13.2

#### ✅ Merged PRs
- [#63553](https://github.com/openai/codex/pull/63553) Use the active thread's provider in the TUI model picker
- [#63545](https://github.com/openai/codex/pull/63545) Report workspace kind on TUI composer turns
- [#63544](https://github.com/openai/codex/pull/63544) Avoid keyring unlock prompts on headless Linux
- [#63540](https://github.com/openai/codex/pull/63540) Deduplicate MCP text fallbacks in Code Mode output
- [#63537](https://github.com/openai/codex/pull/63537) Reap idle local code-mode hosts after five seconds
- [#63533](https://github.com/openai/codex/pull/63533) Refresh the model catalog from Responses WebSocket handshakes
- [#63532](https://github.com/openai/codex/pull/63532) Let extensions supply per-request authentication for MCP servers
- [#63528](https://github.com/openai/codex/pull/63528) Verify eval plugin archives with scoped signing keys
- [#63527](https://github.com/openai/codex/pull/63527) Test remote plugin archive verification end to end
- [#63525](https://github.com/openai/codex/pull/63525) Require thread stores to provide a session model ID store
- [#63523](https://github.com/openai/codex/pull/63523) Preserve accepted prompts when turn setup is interrupted
- [#63520](https://github.com/openai/codex/pull/63520) Wait for foreground terminal ownership before resuming the TUI
- [#63516](https://github.com/openai/codex/pull/63516) Avoid panics when TUI recovery diagnostics fail to write
- [#63515](https://github.com/openai/codex/pull/63515) Honor configured and saved approvals in `codex exec`
- [#63514](https://github.com/openai/codex/pull/63514) Prewarm the Guardian v3 root reviewer for automatic approvals
- [#63513](https://github.com/openai/codex/pull/63513) Direct Guardian to read user instructions before its first verdict
- [#63497](https://github.com/openai/codex/pull/63497) Connect Codex Desktop MCP over Unix sockets
- [#63491](https://github.com/openai/codex/pull/63491) Coalesce concurrent plugin signing key fetches
- [#63490](https://github.com/openai/codex/pull/63490) Cache Plugin Service signing keys for archive verification
- [#63489](https://github.com/openai/codex/pull/63489) Verify signed remote plugin archives before extraction
- [#63487](https://github.com/openai/codex/pull/63487) Add signature verification for Plugin Service archives
- [#63484](https://github.com/openai/codex/pull/63484) Scaffold the plugin archive verification crate
- [#63479](https://github.com/openai/codex/pull/63479) Exclude sequence numbers from Responses stream deltas by default
- [#63476](https://github.com/openai/codex/pull/63476) Add gateway enrollment to local managed requirements
- [#63475](https://github.com/openai/codex/pull/63475) Trace lock acquisition during cloud catalog refresh
- [#63474](https://github.com/openai/codex/pull/63474) Support encrypted context from MCP session-start hooks
- [#63473](https://github.com/openai/codex/pull/63473) Reuse config server discovery when loading managed policy
- [#63471](https://github.com/openai/codex/pull/63471) Speed up remote control reconnects when a controller is active
- [#63468](https://github.com/openai/codex/pull/63468) Honor explicit plugin disablement without a global default
- [#63462](https://github.com/openai/codex/pull/63462) Support model and reasoning effort overrides in remote exec
- [#63461](https://github.com/openai/codex/pull/63461) Request omission of preliminary reasoning ciphertext
- [#63460](https://github.com/openai/codex/pull/63460) Avoid redundant buffer copies when applying patches
- [#63458](https://github.com/openai/codex/pull/63458) Avoid cloning realtime conversation events before sending them
- [#63456](https://github.com/openai/codex/pull/63456) Defer paginated thread history updates on NFS
- [#63454](https://github.com/openai/codex/pull/63454) Handle TCP resets in the code mode session recovery test
- [#63448](https://github.com/openai/codex/pull/63448) Add Statsig bootstrap to the Codex backend client
- [#63446](https://github.com/openai/codex/pull/63446) Avoid unnecessary clones in local thread conversions
- [#63445](https://github.com/openai/codex/pull/63445) Preserve the TUI logo's aspect ratio across terminal cell sizes
- [#63444](https://github.com/openai/codex/pull/63444) Resolve subagent nicknames in TUI transcripts
- [#63441](https://github.com/openai/codex/pull/63441) Keep TUI event receivers with their threads
- [#63440](https://github.com/openai/codex/pull/63440) Defer tool search indexing until the first search
- [#63438](https://github.com/openai/codex/pull/63438) Route Statsig requests through Codex's HTTP client
- [#63433](https://github.com/openai/codex/pull/63433) Remove the TUI's test-only MCP inventory conversion
- [#63428](https://github.com/openai/codex/pull/63428) Keep active turns running when `/compact` is rejected
- [#63427](https://github.com/openai/codex/pull/63427) Make Codex tests more portable across environments
- [#63423](https://github.com/openai/codex/pull/63423) Remove test-only agent message grouping from TUI backtracking
- [#63422](https://github.com/openai/codex/pull/63422) Test subagent metadata on stored thread conversions
- [#63419](https://github.com/openai/codex/pull/63419) Preserve slash command selection across TUI connection changes
- [#63415](https://github.com/openai/codex/pull/63415) Terminate unregistered exec processes on startup interruption

#### 🐛 New Issues
- [#63549](https://github.com/openai/codex/issues/63549) [Bug] harness error "No tool output found for tool call" kills sessions — 29 confirmed cases on DeepSeek Responses path `bug` `exec` `CLI` `custom-model` 💬2
- [#63560](https://github.com/openai/codex/issues/63560) Subject: Feature request: Control over conversation sync and local file opening `enhancement` `app` `session` 💬1
- [#63558](https://github.com/openai/codex/issues/63558) Codex Desktop: “Always allow” repeatedly prompts again for node_repl js `bug` `sandbox` `tool-calls` `app` 💬1
- [#63552](https://github.com/openai/codex/issues/63552) macOS Desktop Work: OAuth MCP returns “Auth required” while Codex CLI can discover tools `bug` `auth` `mcp` `app` 💬1
- [#63424](https://github.com/openai/codex/issues/63424) GPT-6.2 Sol and Astra only appear in Codex CLI model picker with --search `bug` `TUI` `CLI` `app` 💬1
- [#63548](https://github.com/openai/codex/issues/63548) Allow chat-only handoff between connected Macs without requiring a Git repository `enhancement` `app` `session` `remote` 💬1
- [#63546](https://github.com/openai/codex/issues/63546) Codex repeatedly ended a long-running task early and closed an unrelated application instance during recovery `bug` `model-behavior` `windows-os` `CLI` 💬1
- [#63561](https://github.com/openai/codex/issues/63561) Codex Desktop: saved side chat is hard to find after archiving its parent and still references the worktree `bug` `app` `session`
- [#63557](https://github.com/openai/codex/issues/63557) Windows MSIX: Dot loses native codex_app when cmd.exe cannot see the virtualized plugin directory `bug` `windows-os` `mcp` `app`
- [#63556](https://github.com/openai/codex/issues/63556) app-server file watcher wakes on every file open in /etc when /etc/codex is missing `bug` `CLI` `app-server` `performance`
- [#63555](https://github.com/openai/codex/issues/63555) Windows Desktop regression: Organization settings could not be loaded — October rollback works, November builds still blocked `bug` `windows-os` `app`
- [#63554](https://github.com/openai/codex/issues/63554) Skills list: sort alphabetically and use capitalized skill names `enhancement` `skills`
- [#63551](https://github.com/openai/codex/issues/63551) [Dots][macOS] Custom Rules entry no longer visible in Personalization `bug` `dots`
- [#63550](https://github.com/openai/codex/issues/63550) Codex Desktop: deleting an empty cross-device project removes project grouping on the original device (macOS/Windows) `bug` `app` `session`
- [#63547](https://github.com/openai/codex/issues/63547) CLI: configurable prompt recall scope while preserving existing defaults `enhancement` `TUI` `CLI` `config`

#### 🔒 Closed Issues
- [#39823](https://github.com/openai/codex/issues/39823) [CLI][TUI] Session resume can fail with 'already has an active writer' after approval-mode use or session switching
- [#52768](https://github.com/openai/codex/issues/52768) After upgrading Codex CLI from 0.155.1 to 0.157, the TUI displays additional small text in some states.
- [#60325](https://github.com/openai/codex/issues/60325) TUI stays busy (spinner + OSC 7501 "working") forever after parent turn completes, because stalled spawned subagents are never completed or closed
- [#51169](https://github.com/openai/codex/issues/51169) Feature Suggestion

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 109,038 · **Open issues:** 737 · **Last push:** 2h ago

On November 24, 2026, Gemini CLI released several updates, including version v0.72.0-preview.0, which notably improved handling of nested .gitignore negations and expanded Windows home-relative path support. The team also issued a patch to create version v0.71.1, addressing issues from the previous release. Additionally, the v0.71.0-nightly.20261124.gaafdfdfb5 release enforced bearer token authentication and input validation for the a2a-server component. This day's activities were primarily focused on refining functionality and ensuring robustness, with no new issues reported.

#### 🚀 New Releases
- [v0.72.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.72.0-preview.0) Release v0.72.0-preview.0
- [v0.71.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.1) Release v0.71.1
- [v0.71.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0) Release v0.71.0
- [v0.71.0-nightly.20261124.gaafdfdfb5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261124.gaafdfdfb5) Release v0.71.0-nightly.20261124.gaafdfdfb5

#### ✅ Merged PRs
- [#30420](https://github.com/google-gemini/gemini-cli/pull/30420) fix(a2a-server): enforce bearer token authentication and request input validation
- [#30428](https://github.com/google-gemini/gemini-cli/pull/30428) chore(release): bump version to 0.73.0-nightly.20261123.gaafdfdfb5
- [#30429](https://github.com/google-gemini/gemini-cli/pull/30429) fix(patch): cherry-pick aafdfdf to release/v0.71.0-pr-30420 to patch version v0.71.0 and create version 0.71.1
- [#30426](https://github.com/google-gemini/gemini-cli/pull/30426) Changelog for v0.71.0

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,463 · **Open issues:** 2,172 · **Last push:** 11h ago

On November 24, 2026, GitHub Copilot CLI released version v1.0.115-8, which introduced improvements such as grouping subagent usage by configured name in the `--usage-output-file` and allowing Assisted Permissions to automatically switch review models when the initial attempt stalls or fails. Additionally, this update enables one-time approvals to be reused for identical requests within the same session, enhancing user experience. A notable merged pull request was #5554, which added opt-in connection token generation to the CLI container. However, the day also saw the emergence of significant issues, with #5559 highlighting a TLS 1.3 break on MacOS since the 1.0.93-0 pre-release, making it a key concern for users on that platform.

#### 🚀 New Releases
- [v1.0.115-8](https://github.com/github/copilot-cli/releases/tag/v1.0.115-8) 1.0.115-8

#### ✅ Merged PRs
- [#5554](https://github.com/github/copilot-cli/pull/5554) Add opt-in connection token generation to the CLI container

#### 🐛 New Issues
- [#5559](https://github.com/github/copilot-cli/issues/5559) TLS 1.3 broken on MacOS since 1.0.93-0 pre-release `area:networking` `area:mcp` 💬1
- [#5561](https://github.com/github/copilot-cli/issues/5561) Linux x86_64 CLI aborts in bundled cli-native.node on Arch `area:platform-linux`
- [#5560](https://github.com/github/copilot-cli/issues/5560) Copilot CLI rg compaction corrupts filenames with multiple numeric suffixes `area:tools`
- [#5558](https://github.com/github/copilot-cli/issues/5558) Remove or make optional the 100-word response limit `area:configuration`
- [#5557](https://github.com/github/copilot-cli/issues/5557) Interactive mode fails on invalid MCP output schema while noninteractive mode succeeds; blocks all turns `area:mcp`
- [#5556](https://github.com/github/copilot-cli/issues/5556) ACP mode no longer emits `agent_thought_chunk` since 1.0.110 (reasoning summaries missing for ACP clients) `area:non-interactive`

#### 🔒 Closed Issues
- [#1446](https://github.com/github/copilot-cli/issues/1446) Bug: error: unknown option '--no-warnings' noise in terminal
- [#2482](https://github.com/github/copilot-cli/issues/2482) task_complete not written to output causes loss of actual result
- [#5100](https://github.com/github/copilot-cli/issues/5100) Session event delivery permanently fails after one 120s host-ack timeout ("session host did not acknowledge the <event> event within 120s"); session unusable until resume
- [#4484](https://github.com/github/copilot-cli/issues/4484) can't access rubber-duck anymore
- [#4446](https://github.com/github/copilot-cli/issues/4446) Policy to require copilot cli sandbox and push config
- [#5555](https://github.com/github/copilot-cli/issues/5555) MCP client declares the Tasks extension on tools/call but rejects CreateTaskResult
- [#5542](https://github.com/github/copilot-cli/issues/5542) Supabase OAuth status probe fails with missing Mcp-Session-Id (HTTP 400) while normal App tool calls succeed
- [#2048](https://github.com/github/copilot-cli/issues/2048) Copilot memory of prior session history
- [#4323](https://github.com/github/copilot-cli/issues/4323) Comments in .mcp.json not supported, causing all workspace MCP servers to be skipped

### OpenCode (`anomalyco/opencode`)

**Stars:** 228,855 · **Open issues:** 4,045 · **Last push:** <1h ago

On November 24, 2026, OpenCode released version 2.4.1, which includes a significant fix for saving assistant messages on macOS 12 and allows config-only providers, like Ollama, to display their models without the need for a login. The previous version, 2.4.0, introduced a built-in desktop browser that allows users to import sign-ins and browsing history from other browsers, enhancing the user experience by keeping everything in a single persistent profile. Notably merged features today include the ability to pin inbox sessions and list archived ones in the sidebar, along with improvements to Code Mode functionality and agent instructions for Plan mode. There were also a variety of new issues reported, with the most attention on requests for features, including the ability to right-click links to open them in the app's browser pane.

#### 🚀 New Releases
- [v2.4.1](https://github.com/anomalyco/opencode/releases/tag/v2.4.1) v2.4.1
- [v2.4.0](https://github.com/anomalyco/opencode/releases/tag/v2.4.0) v2.4.0

#### ✅ Merged PRs
- [#65961](https://github.com/anomalyco/opencode/pull/65961) feat(app): pin inbox sessions and list archived ones in the sidebar
- [#65670](https://github.com/anomalyco/opencode/pull/65670) feat(codemode): say full Code Mode works with files and data
- [#66000](https://github.com/anomalyco/opencode/pull/66000) fix(core): save the site, not every URL, when always allowing a web fetch
- [#65998](https://github.com/anomalyco/opencode/pull/65998) fix(app): line up settings with home and keep home steady at medium widths
- [#65931](https://github.com/anomalyco/opencode/pull/65931) feat(core): check opencode:// fetch as the opencode api command
- [#65990](https://github.com/anomalyco/opencode/pull/65990) chore(codemode): bump psychoscript to 0.3.0
- [#63669](https://github.com/anomalyco/opencode/pull/63669) feat(core): add agent instructions and use them for Plan mode
- [#65917](https://github.com/anomalyco/opencode/pull/65917) fix(core): send Bun.file bodies from Code Mode fetch
- [#65954](https://github.com/anomalyco/opencode/pull/65954) chore(ci): tighten stale issue closing and add linked-ref/slop workflows

#### 🐛 New Issues
- [#65946](https://github.com/anomalyco/opencode/issues/65946) [FEATURE]: desktop: right-click a link in a message to open it in the app's browser pane, and let the agent work on that page `type/feature` `area/desktop` `version/v2` 💬8
- [#65932](https://github.com/anomalyco/opencode/issues/65932) cli: opencode run --standalone intermittently registers no MCP servers in the session tool pool (~10% of sessions) `type/bug` `area/mcp` `version/v2` `platform/macos` 💬6
- [#65978](https://github.com/anomalyco/opencode/issues/65978) "OpenCode installer failed" during v2.3.2 -> v2.4.1 in Ubuntu 26.04 `type/bug` `area/install-upgrade` `version/v2` `platform/linux` 💬5
- [#65993](https://github.com/anomalyco/opencode/issues/65993) tui: removed queued message stays rendered; session_inbox entries never drain `type/bug` `area/tui` `version/v2` `platform/linux` 💬4
- [#65928](https://github.com/anomalyco/opencode/issues/65928) no puedo avanzar `pending close` `triaging` `type/support` `inference/free-tier` 💬4
- [#65977](https://github.com/anomalyco/opencode/issues/65977) [FEATURE]: desktop: an IDE-grade project tree, worktree manager and git history — modelled on IntelliJ Community `type/feature` `area/desktop` `version/v2` `platform/windows` 💬4
- [#65959](https://github.com/anomalyco/opencode/issues/65959) Confusing Project Name Display and Request for a “Remove Project” Option `type/bug` `area/desktop` `version/v2` `platform/windows` 💬3
- [#65966](https://github.com/anomalyco/opencode/issues/65966) opencode-go: TTFT grows with prompt length (18k -> 6 s, 90k cold -> 19 s), traffic routed to remote-IAD `pending close` `triaging` `type/bug` `area/network` 💬3
- [#65970](https://github.com/anomalyco/opencode/issues/65970) [FEATURE]: desktop: surface opencode-github-panel as a recommended plugin (Git graph, PRs, issues, agent approvals) `type/feature` `area/desktop` `version/v2` `platform/windows` 💬2
- [#65950](https://github.com/anomalyco/opencode/issues/65950) [FEATURE]: desktop: show the session's working directory in the header `type/feature` `area/desktop` `version/v2` `platform/windows` 💬2
- [#65958](https://github.com/anomalyco/opencode/issues/65958) [FEATURE]: desktop: always show the date, time, agent and model under a user message `type/feature` `area/desktop` `version/v2` `platform/windows` 💬2
- [#65956](https://github.com/anomalyco/opencode/issues/65956) [FEATURE]: browse: support page.waitForEvent("filechooser") or a way to upload from a button `type/feature` `area/mcp` 💬2
- [#65955](https://github.com/anomalyco/opencode/issues/65955) browse: caught errors in execute still reported as "Unhandled promise rejection" `reproduced` `type/bug` `platform/linux` 💬2
- [#65953](https://github.com/anomalyco/opencode/issues/65953) [FEATURE]: desktop sidebar: mark working sessions apart from ones that need you, and pin inside a project group `type/feature` `area/desktop` `version/v2` `platform/windows` 💬2
- [#65944](https://github.com/anomalyco/opencode/issues/65944) [FEATURE]: Desktop files pane: stack the file view under the tree, with a draggable splitter `type/feature` `area/desktop` `version/v2` `platform/windows` 💬2
- [#65876](https://github.com/anomalyco/opencode/issues/65876) provider: Invalid synthetic/openai-compatible-chat stream event aborts session step on Synthetic models `triaging` `type/bug` `area/providers` `version/v2` 💬2
- [#66001](https://github.com/anomalyco/opencode/issues/66001) claude-agent with a Claude subscription doesn't set cache.ttl, so warming pings every 4 minutes `type/feature` `area/providers` `version/v2` `platform/windows` 💬1
- [#65997](https://github.com/anomalyco/opencode/issues/65997) core: Slack MCP catalog budget hides tools with long descriptions `type/feature` `area/mcp` `version/v2` `platform/windows` 💬1
- [#65992](https://github.com/anomalyco/opencode/issues/65992) [FEATURE]:Desktop: Option to keep models in provider groups or disable "Recent" section `type/feature` `area/desktop` `inference/go` `version/v2` 💬1
- [#65975](https://github.com/anomalyco/opencode/issues/65975) [FEATURE]: Avoid implicit model/provider fallback for image generation `type/feature` `area/core` `inference/zen` `version/v2` 💬1
- [#65974](https://github.com/anomalyco/opencode/issues/65974) [FEATURE]: desktop: open any diff in an external tool (Beyond Compare, IntelliJ) — two configurable slots `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#65973](https://github.com/anomalyco/opencode/issues/65973) [FEATURE]: desktop: reply to a specific paragraph — click or right-click it and put a reference into the composer `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#65972](https://github.com/anomalyco/opencode/issues/65972) [FEATURE]: desktop sidebar: delete or move every session of a group from the group header `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#65971](https://github.com/anomalyco/opencode/issues/65971) [FEATURE]: Expose skills to ACP clients `type/feature` `area/ide-acp` `version/v2` `platform/macos` 💬1
- [#65964](https://github.com/anomalyco/opencode/issues/65964) tui: no visual list for automations `type/feature` `area/tui` `version/v2` `platform/linux` 💬1
- [#65963](https://github.com/anomalyco/opencode/issues/65963) [FEATURE]: desktop: show per-reply token usage in the assistant meta line `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#65962](https://github.com/anomalyco/opencode/issues/65962) [BUG]: desktop 2.4.1: Ctrl+F does nothing in the conversation, and the Find command is hidden from the palette `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1
- [#65952](https://github.com/anomalyco/opencode/issues/65952) opencode-pty daemon does not reap exited pty session children (zombie accumulation) `type/bug` `area/service` `version/v2` `platform/linux` 💬1
- [#65942](https://github.com/anomalyco/opencode/issues/65942) windows/scoop: `scoop update opencode` blocked by lingering `opencode serve --service` process `type/feature` `area/install-upgrade` `version/v2` `platform/windows` 💬1
- [#65943](https://github.com/anomalyco/opencode/issues/65943) desktop: a bottom-pane tab is restored into the side strip after a session switch `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1
- [#65940](https://github.com/anomalyco/opencode/issues/65940) [FEATURE]: desktop: read-only session activity log in a side-panel tab `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#65939](https://github.com/anomalyco/opencode/issues/65939) [FEATURE]: desktop: sidebar tab listing the files mentioned in a session, click to jump back to the message `type/feature` `area/desktop` `version/v2` 💬1
- [#66009](https://github.com/anomalyco/opencode/issues/66009) [FEATURE]: Support agent-specific colors in OpenCode Desktop

#### 🔒 Closed Issues
- [#65928](https://github.com/anomalyco/opencode/issues/65928) no puedo avanzar
- [#59906](https://github.com/anomalyco/opencode/issues/59906) Allow pinning sessions on the new experimental view.
- [#62628](https://github.com/anomalyco/opencode/issues/62628) Plan agent loops forever after auto-compaction (opencode run never exits)
- [#65956](https://github.com/anomalyco/opencode/issues/65956) [FEATURE]: browse: support page.waitForEvent("filechooser") or a way to upload from a button
- [#65955](https://github.com/anomalyco/opencode/issues/65955) browse: caught errors in execute still reported as "Unhandled promise rejection"
- [#65876](https://github.com/anomalyco/opencode/issues/65876) provider: Invalid synthetic/openai-compatible-chat stream event aborts session step on Synthetic models
- [#64429](https://github.com/anomalyco/opencode/issues/64429) [FEATURE]: Scope the webfetch "Allow always" approval to the requested URL path instead of saving *
- [#65971](https://github.com/anomalyco/opencode/issues/65971) [FEATURE]: Expose skills to ACP clients
- [#65952](https://github.com/anomalyco/opencode/issues/65952) opencode-pty daemon does not reap exited pty session children (zombie accumulation)
- [#65521](https://github.com/anomalyco/opencode/issues/65521) remote: OpenTunnel relay drops all visitor connections (pair --remote unreachable, mobile app -1200)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,907 · **Open issues:** 2,555 · **Last push:** <1h ago

On November 24, 2026, Qwen Code saw a productive day with several significant developments despite no new releases. Key merged features included enhancements to the generated UI with the ability to let clicks copy or download via the host (#18158), and an idempotent prompt auto-retry mechanism added to the web shell (#18177). Notable fixes included addressing session isolation for deletions (#17707) and maintaining proper handling of text in Gemini functions (#18220). Amid these improvements, new issues emerged, particularly a bug related to missing model IDs in the core functionality of getGptReasoningCapabilities() (#18200), which could impact user experience. Overall, the day reflected ongoing improvements and attention to fixing critical bugs.

#### ✅ Merged PRs
- [#18158](https://github.com/QwenLM/qwen-code/pull/18158) feat(generated-ui): let a click copy or download through the host
- [#18177](https://github.com/QwenLM/qwen-code/pull/18177) feat(web-shell): idempotent prompt auto-retry and message-level resend
- [#18224](https://github.com/QwenLM/qwen-code/pull/18224) feat(managed-agent): park a child Session's approval wait
- [#18218](https://github.com/QwenLM/qwen-code/pull/18218) docs(managed-agent): scope S5 Hooks parking and confirm its pre-start checks
- [#18220](https://github.com/QwenLM/qwen-code/pull/18220) fix(core): keep text out of Gemini functionResponse.parts
- [#18212](https://github.com/QwenLM/qwen-code/pull/18212) fix(managed-agent): Settle unadmitted cancellations with owed cleanup
- [#17707](https://github.com/QwenLM/qwen-code/pull/17707) fix(serve): isolate session deletion from sibling sessions
- [#18128](https://github.com/QwenLM/qwen-code/pull/18128) fix(web-shell): allow composer task chips to collapse on repeat click
- [#18146](https://github.com/QwenLM/qwen-code/pull/18146) perf(daemon): reduce session catalog scan I/O
- [#18211](https://github.com/QwenLM/qwen-code/pull/18211) test(managed-agent): Pin identity join key parts in MySQL
- [#18018](https://github.com/QwenLM/qwen-code/pull/18018) feat(core): point the compacted summary at its local transcript

#### 🐛 New Issues
- [#18178](https://github.com/QwenLM/qwen-code/issues/18178) Support immutable resource versions for each turn in qwen serve `status/needs-triage` `type/feature-request` 💬2
- [#18202](https://github.com/QwenLM/qwen-code/issues/18202) bug(cli): Ctrl+X external editor (micro/nano/vim) leaves the TUI garbled after exit 💬1
- [#18197](https://github.com/QwenLM/qwen-code/issues/18197) Tool-call emission layer intermittently drops required JSON parameters; can escalate to full-session outage with a non-recoverable retry loop `status/needs-triage` `type/bug` 💬1
- [#18200](https://github.com/QwenLM/qwen-code/issues/18200) bug(core): missing GPT-6 / 6.1 / 6.2 model IDs in getGptReasoningCapabilities() 💬1
- [#18198](https://github.com/QwenLM/qwen-code/issues/18198) Web shell: file/image link resolves workspace from the current session, not the viewed one (ENOENT on cross-workspace open) 💬1
- [#18225](https://github.com/QwenLM/qwen-code/issues/18225) 窗口文本信息刷新异常 `status/needs-triage` `type/bug`
- [#18222](https://github.com/QwenLM/qwen-code/issues/18222) Follow-ups from #18175: feat(cli): add built-in display translation for replies and thoughts
- [#18217](https://github.com/QwenLM/qwen-code/issues/18217) hooks: fix silently diverging fields, then extend handler fields, events and executors `status/needs-triage` `type/feature-request` `roadmap/hooks-events`
- [#18214](https://github.com/QwenLM/qwen-code/issues/18214) Web Shell activity view: date groups keep stale ordering; request: custom Web Shell frontend directory for qwen serve
- [#18206](https://github.com/QwenLM/qwen-code/issues/18206) Follow-ups from PR #18190: harden identity-join plan assertions (recovery candidates, cancel evidence)
- [#18204](https://github.com/QwenLM/qwen-code/issues/18204) Windows: 5 node-repl mcp-server tests fail in teardown (EBUSY/EPERM) because close() doesn't await dispose()
- [#18192](https://github.com/QwenLM/qwen-code/issues/18192) bug `status/needs-triage` `type/bug`
- [#18191](https://github.com/QwenLM/qwen-code/issues/18191) Follow-ups from PR #18126: Web Shell mobile single-row composer (touch workspace discoverability, narrow focus hatch test, draft type reuse) `priority/P3` `category/ui`
- [#18188](https://github.com/QwenLM/qwen-code/issues/18188) Proposal: behavioral eval harness for model-steering changes

#### 🔒 Closed Issues
- [#17143](https://github.com/QwenLM/qwen-code/issues/17143) Feature request: localize the TUI interface (i18n), not just model output language
- [#16437](https://github.com/QwenLM/qwen-code/issues/16437) Point the model at the session transcript after compaction, so it can look up details the summary dropped
- [#18127](https://github.com/QwenLM/qwen-code/issues/18127) Managed Agent cancellation stalls on cleanup owed by a prior turn
- [#17933](https://github.com/QwenLM/qwen-code/issues/17933) Web Shell: portaled inputs stay at 14px on landscape tablets, so iOS zooms the page on focus
- [#17963](https://github.com/QwenLM/qwen-code/issues/17963) Web Shell: environment panel bottom is hidden behind the pending question card and cannot be scrolled into view
- [#10635](https://github.com/QwenLM/qwen-code/issues/10635) Deferred review findings from PR #10611
- [#9427](https://github.com/QwenLM/qwen-code/issues/9427) Deferred review findings from PR #9421
- [#18222](https://github.com/QwenLM/qwen-code/issues/18222) Follow-ups from #18175: feat(cli): add built-in display translation for replies and thoughts
- [#18206](https://github.com/QwenLM/qwen-code/issues/18206) Follow-ups from PR #18190: harden identity-join plan assertions (recovery candidates, cancel evidence)

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

**Stars:** 395,126 · **Open issues:** 8,994 · **Last push:** <1h ago

On November 24, 2026, OpenClaw released v2026.11.10-beta.3, enhancing recovery mechanisms to ensure that interrupted package and source updates remain recoverable, even across schema changes or machine restarts, alongside preserving completed subagent answers through Gateway restarts. This follows v2026.11.10-beta.2, which also focused on update resilience and reliable background work. Significant merged fixes include corrections to various user interface components and improvements in handling installed artifacts and notification delivery systems. A notable new issue emerged, where the Discord provider fails to initiate client operations after upgrading to version 2026.11.7, which is causing a silent health-monitor restart loop.

#### 🚀 New Releases
- [v2026.11.10-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10-beta.3) openclaw 2026.11.10-beta.3
- [v2026.11.10-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10-beta.2) openclaw 2026.11.10-beta.2

#### ✅ Merged PRs
- [#204438](https://github.com/openclaw/openclaw/pull/204438) fix(release): authenticate retained publication artifacts on main
- [#204341](https://github.com/openclaw/openclaw/pull/204341) fix: let Ask OpenClaw show channel guides on multi-agent gateways
- [#204026](https://github.com/openclaw/openclaw/pull/204026) fix(msteams): respect agent media roots in replies
- [#204367](https://github.com/openclaw/openclaw/pull/204367) test(qa): assert the failed child status lands once in parent history
- [#204426](https://github.com/openclaw/openclaw/pull/204426) fix(update): report an already-installed artifact as current
- [#204424](https://github.com/openclaw/openclaw/pull/204424) fix(gateway): report removed worktrees before diff baseline capture
- [#204422](https://github.com/openclaw/openclaw/pull/204422) test: make OpenAI version and CI runtime fixtures prerelease-safe
- [#204423](https://github.com/openclaw/openclaw/pull/204423) test: fix Doctor truncation and Telegram automation fixtures for prerelease FRV
- [#204430](https://github.com/openclaw/openclaw/pull/204430) chore(release): raise fast-track limits to 20 commits and 15k lines
- [#204414](https://github.com/openclaw/openclaw/pull/204414) fix(ui): show Linear artwork in chat tool activity
- [#204416](https://github.com/openclaw/openclaw/pull/204416) fix(ui): keep a Home press scrolling to older chat history
- [#204395](https://github.com/openclaw/openclaw/pull/204395) refactor(gateway): check the cron creator grant's issuer once
- [#204415](https://github.com/openclaw/openclaw/pull/204415) fix: Gemini receives attached videos again on installed builds
- [#204413](https://github.com/openclaw/openclaw/pull/204413) fix(plugin-sdk): let API comparison resolve runtime-only imports
- [#204325](https://github.com/openclaw/openclaw/pull/204325) fix: run unconfigured cyber models at Daybreak Red outside the Control UI
- [#203947](https://github.com/openclaw/openclaw/pull/203947) fix: open older session links without reloading chat
- [#204397](https://github.com/openclaw/openclaw/pull/204397) fix(test): capture the SQLite close method without an unbound reference
- [#203872](https://github.com/openclaw/openclaw/pull/203872) fix: remove the “Título:” prefix from generated session names
- [#203967](https://github.com/openclaw/openclaw/pull/203967) fix: bring attachments closer to the draft in the command palette
- [#204313](https://github.com/openclaw/openclaw/pull/204313) fix(agents): keep the replayed user turn in history after compaction
- [#203969](https://github.com/openclaw/openclaw/pull/203969) fix: align sidebar loading rows with navigation items
- [#203865](https://github.com/openclaw/openclaw/pull/203865) fix: restore the subtle background behind composer file icons
- [#204389](https://github.com/openclaw/openclaw/pull/204389) fix(ci): model every Solid lazy named-export loader in the UI for Knip
- [#204388](https://github.com/openclaw/openclaw/pull/204388) fix(gateway): record Tailscale Control UI sources without a paired browser key
- [#204369](https://github.com/openclaw/openclaw/pull/204369) chore(ui): refresh control ui locales
- [#204385](https://github.com/openclaw/openclaw/pull/204385) docs(release): keep parallel release lines ledger-only and coverage explicit
- [#203948](https://github.com/openclaw/openclaw/pull/203948) fix(macos): require Shift-Command-R to reload the Dashboard
- [#203974](https://github.com/openclaw/openclaw/pull/203974) fix: keep hidden macOS dashboards connected until closed
- [#204352](https://github.com/openclaw/openclaw/pull/204352) fix(ui): clarify pending guest suggestions
- [#204380](https://github.com/openclaw/openclaw/pull/204380) test(browser): forward lstat options in install-layout ownership mocks
- [#202514](https://github.com/openclaw/openclaw/pull/202514) fix(ci): run the builds selected tests need
- [#204304](https://github.com/openclaw/openclaw/pull/204304) fix(tests): stop recovery and output checks racing lazy UI loads
- [#203952](https://github.com/openclaw/openclaw/pull/203952) fix: read GitHub previews with the connected GitHub CLI account
- [#204329](https://github.com/openclaw/openclaw/pull/204329) fix: recognize valid Git plugin installation provenance
- [#204277](https://github.com/openclaw/openclaw/pull/204277) improve: welcome guests in the agent's own voice
- [#204219](https://github.com/openclaw/openclaw/pull/204219) feat(agents): keep idle prompt caches warm with read-only prewarms
- [#204360](https://github.com/openclaw/openclaw/pull/204360) fix(release): reuse child evidence across release tooling changes
- [#201028](https://github.com/openclaw/openclaw/pull/201028) feat: comment on live elements in inline widgets
- [#204359](https://github.com/openclaw/openclaw/pull/204359) fix: repair worker placement and node-host CI fixtures
- [#204328](https://github.com/openclaw/openclaw/pull/204328) fix: clarify setup instructions for account sign-in
- [#204346](https://github.com/openclaw/openclaw/pull/204346) fix(ci): bound agent owner PR selection to same-directory importers and a declared behavior set
- [#202894](https://github.com/openclaw/openclaw/pull/202894) improve(ci): start long upgrade checks before the final validation wave
- [#204280](https://github.com/openclaw/openclaw/pull/204280) fix(ci): keep bundled npm retries within their deadline
- [#204302](https://github.com/openclaw/openclaw/pull/204302) fix: make Daybreak one toggle that follows the chat's model
- [#204357](https://github.com/openclaw/openclaw/pull/204357) chore(ui): refresh control ui locales
- [#201198](https://github.com/openclaw/openclaw/pull/201198) fix(release): print a verified verdict and pinned candidate inputs
- [#203411](https://github.com/openclaw/openclaw/pull/203411) fix(test): surface transfer boundary failures without cleanup hang
- [#204315](https://github.com/openclaw/openclaw/pull/204315) fix(ci): recognize the daemon runtime probe regenerated by #201712
- [#204314](https://github.com/openclaw/openclaw/pull/204314) fix(ci): drop an unselected whole group's timeout from selected Node jobs
- [#204351](https://github.com/openclaw/openclaw/pull/204351) fix: open the new agent chat after importing a Template
- [#204336](https://github.com/openclaw/openclaw/pull/204336) fix(gateway): keep workspace Git imports off the main thread
- [#204327](https://github.com/openclaw/openclaw/pull/204327) fix: keep a goal advancing after a background command's completion turn
- [#202013](https://github.com/openclaw/openclaw/pull/202013) feat(templates): sign in to ClawHub from a private draft
- [#204299](https://github.com/openclaw/openclaw/pull/204299) test(qa): expect empty child completions to settle as parent history
- [#204348](https://github.com/openclaw/openclaw/pull/204348) chore(ui): refresh control ui locales
- [#204335](https://github.com/openclaw/openclaw/pull/204335) fix(agents): a member on the global session gets a reply again
- [#204332](https://github.com/openclaw/openclaw/pull/204332) fix(ci): restore signed Gateway releases and completion-owned Store requests
- [#204292](https://github.com/openclaw/openclaw/pull/204292) fix(ci): select every transitive importer test for agent, compaction and transport owners
- [#204200](https://github.com/openclaw/openclaw/pull/204200) fix: explain when OpenAI voice needs an API key
- [#204326](https://github.com/openclaw/openclaw/pull/204326) docs(release): release agents own Plugin SDK API acknowledgement
- [#204303](https://github.com/openclaw/openclaw/pull/204303) fix: restore compact failed-reply cards in the Control UI
- [#204320](https://github.com/openclaw/openclaw/pull/204320) chore(ui): refresh control ui locales
- [#204316](https://github.com/openclaw/openclaw/pull/204316) test(vitest): keep database-worker files out of the shared-core project
- [#204318](https://github.com/openclaw/openclaw/pull/204318) docs(release): keep retrospective tracking in the ledger
- [#204296](https://github.com/openclaw/openclaw/pull/204296) fix: let setup verify Codex without a runtime override
- [#204300](https://github.com/openclaw/openclaw/pull/204300) fix(release): apply approved waivers during receipt recovery
- [#204249](https://github.com/openclaw/openclaw/pull/204249) refactor: drop the admitted operator authority re-check and the lifetime ratchet (R6z)
- [#203422](https://github.com/openclaw/openclaw/pull/203422) fix: keep prompt-history diagnostics accurate between turns
- [#204264](https://github.com/openclaw/openclaw/pull/204264) fix: keep OpenAI account limits aligned while loading
- [#204274](https://github.com/openclaw/openclaw/pull/204274) improve: reduce session row refresh work during bursts
- [#204288](https://github.com/openclaw/openclaw/pull/204288) test(ui): make the attachment filename fit check independent of installed CJK fonts
- [#204275](https://github.com/openclaw/openclaw/pull/204275) fix: stop Git checkouts on 2026-11-17 main updaters from half-switching on a schema change
- [#204281](https://github.com/openclaw/openclaw/pull/204281) fix(sessions): unread advances only when a run ends with a new visible reply
- [#204247](https://github.com/openclaw/openclaw/pull/204247) fix(ui): resume Logs auto-follow when WebKit delivers a wheel's scroll late
- [#204260](https://github.com/openclaw/openclaw/pull/204260) fix(agents): settle every undelivered child completion into history; drop delivery dispositions
- [#204270](https://github.com/openclaw/openclaw/pull/204270) test: drop mid-run refusal tests left red by #204155 and #204134
- [#204234](https://github.com/openclaw/openclaw/pull/204234) fix: add templates without requiring model sign-in
- [#202720](https://github.com/openclaw/openclaw/pull/202720) fix(openai): embed system prompt in input on ChatGPT Responses when uncached (#202372)
- [#204257](https://github.com/openclaw/openclaw/pull/204257) test(gateway): drop the stale mid-turn revocation step from screen routing
- [#201712](https://github.com/openclaw/openclaw/pull/201712) fix: preserve managed GitHub exec on packaged Windows
- [#204253](https://github.com/openclaw/openclaw/pull/204253) fix: remove repeated details after an update rolls back
- [#204255](https://github.com/openclaw/openclaw/pull/204255) fix: unblock changed-file CI for session history
- [#204254](https://github.com/openclaw/openclaw/pull/204254) fix(release): retry immutable ClawHub recovery transfers
- [#200555](https://github.com/openclaw/openclaw/pull/200555) fix(ci): remove mobile qualification from Gateway validation
- [#202175](https://github.com/openclaw/openclaw/pull/202175) fix: schedule Template automations in the adding device’s time zone
- [#204246](https://github.com/openclaw/openclaw/pull/204246) fix: unblock local checks by removing dead exports
- [#204230](https://github.com/openclaw/openclaw/pull/204230) fix(models): show provider plugin labels in the Control UI
- [#204224](https://github.com/openclaw/openclaw/pull/204224) fix: let Windows updates restart after a rollback
- [#204217](https://github.com/openclaw/openclaw/pull/204217) improve: identify commands that fall back to in-process spawning
- [#204191](https://github.com/openclaw/openclaw/pull/204191) refactor: drop mid-request authority re-checks in the last gateway, session and node-host refusals (R6d part 4)
- [#204215](https://github.com/openclaw/openclaw/pull/204215) fix(update): keep a Gateway's own update running when it first reports ready
- [#203222](https://github.com/openclaw/openclaw/pull/203222) fix(subagents): preserve yield settlement after child cleanup
- [#202791](https://github.com/openclaw/openclaw/pull/202791) fix: open the submission view for pending Templates
- [#204220](https://github.com/openclaw/openclaw/pull/204220) fix(ui): keep a reader who reaches the top of a chat at the top
- [#204210](https://github.com/openclaw/openclaw/pull/204210) improve: start automatic compaction at 85% of the window on every route
- [#204127](https://github.com/openclaw/openclaw/pull/204127) fix: update plugins after the new Gateway starts
- [#202786](https://github.com/openclaw/openclaw/pull/202786) fix: show the Template review card only when it is ready
- [#204216](https://github.com/openclaw/openclaw/pull/204216) fix: keep older chat history reachable when message rows shift
- [#204222](https://github.com/openclaw/openclaw/pull/204222) chore(ui): refresh control ui locales
- [#204178](https://github.com/openclaw/openclaw/pull/204178) fix(agents): deliver a child's end state as parent history, not a turn obligation
- [#204184](https://github.com/openclaw/openclaw/pull/204184) ci(android): cache Gradle dependencies per lane and version catalog
- [#203112](https://github.com/openclaw/openclaw/pull/203112) fix: avoid rereading unchanged sandbox files on reuse
- [#204201](https://github.com/openclaw/openclaw/pull/204201) fix: notify script webhooks when a Gateway restart interrupts a run
- [#203470](https://github.com/openclaw/openclaw/pull/203470) feat: let admins share specific projects with restricted roles
- [#202960](https://github.com/openclaw/openclaw/pull/202960) fix: start sessions from ready templates during background refreshes
- [#204167](https://github.com/openclaw/openclaw/pull/204167) fix(agents): record a child's message to its parent without a parent turn
- [#204173](https://github.com/openclaw/openclaw/pull/204173) test(ui): choose the signed-in model in the first-model login e2e
- [#204094](https://github.com/openclaw/openclaw/pull/204094) fix: let Windows updates replace migrated state databases
- [#204154](https://github.com/openclaw/openclaw/pull/204154) fix(gateway): apply credential limits to assistant media URLs
- [#204102](https://github.com/openclaw/openclaw/pull/204102) fix: keep Claude CLI inline widgets on the reply after a chat reloads
- [#204129](https://github.com/openclaw/openclaw/pull/204129) fix: let plugin updates finish for plugins that ship no Doctor artifact
- [#204116](https://github.com/openclaw/openclaw/pull/204116) fix: say which consent fact is missing when an agent's tool authority can't be verified
- [#204130](https://github.com/openclaw/openclaw/pull/204130) test(ui): expect the archived title lookup in the palette e2e
- [#204155](https://github.com/openclaw/openclaw/pull/204155) refactor(agents): drop mid-run operator authority re-reads (R6c part 4c)
- [#204180](https://github.com/openclaw/openclaw/pull/204180) fix: compact at 80% on every route
- [#204176](https://github.com/openclaw/openclaw/pull/204176) fix(ui): rich hover cards close while the pointer is on the card
- [#202743](https://github.com/openclaw/openclaw/pull/202743) fix: fill each plugin category preview when installed plugins are hidden
- [#196172](https://github.com/openclaw/openclaw/pull/196172) fix(codex): session handoff stalls when a retired writer stays loaded
- [#204143](https://github.com/openclaw/openclaw/pull/204143) fix(sessions): exclude hidden coordination and failed children from unread
- [#204126](https://github.com/openclaw/openclaw/pull/204126) docs(tlon): warn that future club invitees can trigger agent
- [#204153](https://github.com/openclaw/openclaw/pull/204153) fix(ui): keep a reader's scroll when an older row remeasures
- [#204134](https://github.com/openclaw/openclaw/pull/204134) refactor: drop mid-request authority re-checks in gateway operator/plugin/MCP App paths, skill library, reclaim and channel reads (R6d part 3)
- [#204095](https://github.com/openclaw/openclaw/pull/204095) fix(update): keep updates working after read-only database reads
- [#204142](https://github.com/openclaw/openclaw/pull/204142) test(ui): stop expecting a Home child read in the roster rate e2e
- [#204122](https://github.com/openclaw/openclaw/pull/204122) fix: let Doctor and updates finish when an official provider plugin is installed from npm
- [#204111](https://github.com/openclaw/openclaw/pull/204111) feat(agents): compact from the warm prompt cache on every route
- [#204144](https://github.com/openclaw/openclaw/pull/204144) test(scripts): cover watchdog duration formats through runWatchdog
- [#204151](https://github.com/openclaw/openclaw/pull/204151) docs: run update repair with the Gateway stopped after a manual install
- [#204070](https://github.com/openclaw/openclaw/pull/204070) test(ui): drop the off-list pin toggle from the roster e2e
- [#204117](https://github.com/openclaw/openclaw/pull/204117) chore(scripts): keep the watchdog timeout parser private
- [#202594](https://github.com/openclaw/openclaw/pull/202594) docs: update the 2026.11.7 patch release notes
- [#204123](https://github.com/openclaw/openclaw/pull/204123) chore(release): update appcast for 2026.11.7
- [#204105](https://github.com/openclaw/openclaw/pull/204105) refactor(auto-reply): drop mid-run operator re-checks in dispatch and session events (R6c part 4a-2)
- [#203943](https://github.com/openclaw/openclaw/pull/203943) fix: make openclaw available in new terminals when gateway install runs from npx
- [#204075](https://github.com/openclaw/openclaw/pull/204075) test(ui): run a first turn before the diff-folding e2e reads its diff
- [#204109](https://github.com/openclaw/openclaw/pull/204109) test(ios): stop failing Settings proofs on a fixed 10 s page-load deadline
- [#204110](https://github.com/openclaw/openclaw/pull/204110) test: expect current run-close and restart-admission refusal text
- [#204067](https://github.com/openclaw/openclaw/pull/204067) fix(release): install verifier dependencies before Docker publication
- [#203904](https://github.com/openclaw/openclaw/pull/203904) fix(test): stop rejecting admitted API-key saves in Gateway tests
- [#204054](https://github.com/openclaw/openclaw/pull/204054) fix: show what happened after an update rolls back
- [#204098](https://github.com/openclaw/openclaw/pull/204098) fix(agents): answer Control UI users once after a child finishes
- [#204089](https://github.com/openclaw/openclaw/pull/204089) fix(subagents): show child delivery notices as child results, not failed replies
- [#203961](https://github.com/openclaw/openclaw/pull/203961) fix: align chat Stop product test with request admission
- [#204093](https://github.com/openclaw/openclaw/pull/204093) refactor(agents): drop mid-run operator re-checks in agent tools, sandbox and command
- [#204063](https://github.com/openclaw/openclaw/pull/204063) fix(update): keep update watcher wakes synchronous
- [#203560](https://github.com/openclaw/openclaw/pull/203560) chore(test): align latent-red tests with one-time admission and no-auto-disable cron
- [#204087](https://github.com/openclaw/openclaw/pull/204087) build: emit the shared worker host graph once
- [#204081](https://github.com/openclaw/openclaw/pull/204081) test(gateway): delete stale mid-run refusal tests after one-time admission
- [#204056](https://github.com/openclaw/openclaw/pull/204056) ci: anchor repeated workflow scalars to restore size margin
- [#204077](https://github.com/openclaw/openclaw/pull/204077) refactor: drop mid-request authority re-checks in bundled plugins and update/MCP sign-in (R6d part 2)
- [#204069](https://github.com/openclaw/openclaw/pull/204069) refactor(auto-reply): drop mid-run operator re-checks in reply runner (R6c part 4a)
- [#203569](https://github.com/openclaw/openclaw/pull/203569) fix: restore two OpenClaw regression suites
- [#198921](https://github.com/openclaw/openclaw/pull/198921) test(ui): trim repetitive hovercard presentation cases
- [#203541](https://github.com/openclaw/openclaw/pull/203541) test(ui): expect no rail search in the compact chat drawer
- [#204045](https://github.com/openclaw/openclaw/pull/204045) fix: require plugin trust closeout after beta.1 publication
- [#204064](https://github.com/openclaw/openclaw/pull/204064) fix(macos): wait for the page to see a theme change before reading tab favicons
- [#204065](https://github.com/openclaw/openclaw/pull/204065) test(ci): drop owner tests deleted by #204031 from routing lists
- [#204032](https://github.com/openclaw/openclaw/pull/204032) fix(release): verify empty candidate artifact-source coverage
- [#204031](https://github.com/openclaw/openclaw/pull/204031) refactor(auto-reply): drop the mid-command owner re-check
- [#204033](https://github.com/openclaw/openclaw/pull/204033) test(agents): give the sessions_spawn outcome fixture a model
- [#204062](https://github.com/openclaw/openclaw/pull/204062) fix: let the Gateway start while another OpenClaw command briefly holds state
- [#204037](https://github.com/openclaw/openclaw/pull/204037) refactor: drop mid-run authority re-checks in infra, state, plugins and GitHub publication
- [#203994](https://github.com/openclaw/openclaw/pull/203994) fix: show advisory findings after successful updates
- [#204043](https://github.com/openclaw/openclaw/pull/204043) chore(deadcode): delete unused exports and model live Knip entrypoints
- [#204030](https://github.com/openclaw/openclaw/pull/204030) test(gateway): compare resolved ancestor rows across session row sockets
- [#204028](https://github.com/openclaw/openclaw/pull/204028) fix(agents): keep the settled-turn finalizer within its budget bound
- [#204021](https://github.com/openclaw/openclaw/pull/204021) fix(session-share): keep the last refresh error visible while a retry runs
- [#204048](https://github.com/openclaw/openclaw/pull/204048) refactor(agents): drop channel operator re-check and reword run-end refusals
- [#204024](https://github.com/openclaw/openclaw/pull/204024) refactor(gateway): drop remaining mid-request authority re-checks in server methods (R6b part 2)
- [#198924](https://github.com/openclaw/openclaw/pull/198924) test(gateway): trim redundant instrumentation and catalog permutations
- [#169681](https://github.com/openclaw/openclaw/pull/169681) fix(feishu): renderMode card ignored for non-streaming block replies
- [#204012](https://github.com/openclaw/openclaw/pull/204012) fix(ci): run release decision and diagnostics without Boat provisioning
- [#204050](https://github.com/openclaw/openclaw/pull/204050) test(ui): follow gateway failure dismissal and automation cards in bundled E2E
- [#191649](https://github.com/openclaw/openclaw/pull/191649) fix(agents): cache drop warnings blame max_completion_tokens when only the output cap changed

#### 🐛 New Issues
- [#204283](https://github.com/openclaw/openclaw/issues/204283) [Bug]: Discord provider never reaches client init after upgrading to 2026.11.7 when commands.nativeSkills is enabled (silent, health-monitor restart loop) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬6
- [#204020](https://github.com/openclaw/openclaw/issues/204020) [Feature]: macOS deep link route to open and focus a specific session in the app UI (openclaw://session) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#204014](https://github.com/openclaw/openclaw/issues/204014) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬4
- [#204038](https://github.com/openclaw/openclaw/issues/204038) [Bug]: macOS: update from 2026.11.3 to 2026.11.6 rolls back when Doctor cannot verify gateway ownership `bug` `regression` `P2` `clawsweeper:needs-info` 💬4
- [#204197](https://github.com/openclaw/openclaw/issues/204197) [Bug]: Codex supervision read cannot narrow completed-result recovery before dynamic output truncation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#204421](https://github.com/openclaw/openclaw/issues/204421) [Bug]: Windows update rolls back at activation when the Gateway is restarted mid-update; process census unavailable on win32 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#204387](https://github.com/openclaw/openclaw/issues/204387) [Bug]: Embedded runtime replaces an earlier, still-loadable image with "could not be loaded … ask them to resend" on every later turn `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#204386](https://github.com/openclaw/openclaw/issues/204386) [Bug]: Native video never reaches Gemini: `PROVIDER_CONTEXT_HANDOFF` is defined twice in the published build `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#204375](https://github.com/openclaw/openclaw/issues/204375) OpenClaw performance: scheduled Kova live OpenAI lane fails after producing its bundle `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#204338](https://github.com/openclaw/openclaw/issues/204338) [Bug]: 2026.11.3 Telegram message CLI delivers but times out; command cron retry duplicates post `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#204258](https://github.com/openclaw/openclaw/issues/204258) [Bug]: Can't set up OpenClaw with "AllSigned" GPO. `bug` `bug:crash` `clawsweeper:source-repro` `P0` 💬2
- [#204226](https://github.com/openclaw/openclaw/issues/204226) 2026.11.7: `openclaw update repair` always fails at finalize:targetConfigConvergence — "state … undergoing offline maintenance by sqlite-maintenance process"; run stays failed (service-authority-revoked-recovery-pending) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#204266](https://github.com/openclaw/openclaw/issues/204266) [Bug]: npm update on a node-only systemd host reports success without a node restart prompt `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#204256](https://github.com/openclaw/openclaw/issues/204256) [Bug]: claude-cli thinking snapshot duplicates a summary block (per-block assistant record matched by local index 0) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#204233](https://github.com/openclaw/openclaw/issues/204233) Windows: gateway install --force leaves a logon task pointed at a missing openclaw-gateway-recovery.exe `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#204213](https://github.com/openclaw/openclaw/issues/204213) [Feature]: Codex supervision needs owner-guarded existing-native-client-only recovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:session-state` 💬2
- [#204177](https://github.com/openclaw/openclaw/issues/204177) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#204066](https://github.com/openclaw/openclaw/issues/204066) [Bug]: Update 2026.11.6 → 2026.11.7 always rolls back: post-activation doctor fills the disk with unlinked-but-open read-only SQLite snapshots (ENOSPC) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#204135](https://github.com/openclaw/openclaw/issues/204135) [Bug]: Codex subscription utility sampling requires a relay, stopping observer assessments `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#204079](https://github.com/openclaw/openclaw/issues/204079) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#204076](https://github.com/openclaw/openclaw/issues/204076) Loop detectors are structurally blind to "distinct side effect per call" loops — cron agentTurn delivered 8 unwanted Telegram cards in 26 minutes despite warnings and working content dedupe `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#203988](https://github.com/openclaw/openclaw/issues/203988) checks-ui (1/3) and (3/3) fail on unrelated PRs (toast, board-view, chat-attachment-handoff browser tests) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#204441](https://github.com/openclaw/openclaw/issues/204441) Update failure: update-recovery-pending (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204420](https://github.com/openclaw/openclaw/issues/204420) Provider-specific Set up in the chat picker discards the selected provider `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#204419](https://github.com/openclaw/openclaw/issues/204419) Uninstalling the selected provider leaves a broken default without warning `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204425](https://github.com/openclaw/openclaw/issues/204425) Web UI shows only 1 agent while CLI lists 3 - agent DB admission broken since 11.4->11.5 upgrade (update-recovery-pending) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#204192](https://github.com/openclaw/openclaw/issues/204192) [Bug]: Running `gateway status` through a legacy Git launcher rolls back a healthy Gateway `bug` `P1` `impact:data-loss` `impact:crash-loop` 💬1
- [#204403](https://github.com/openclaw/openclaw/issues/204403) Control UI drops the provider’s billing reason and recovery link `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#204412](https://github.com/openclaw/openclaw/issues/204412) [Bug]: macOS place picker shows "No folders match your search." when a non-admin types an existing folder path in the other Unicode form `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204418](https://github.com/openclaw/openclaw/issues/204418) New-session model setup gate prevents `/login` from being the first message `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#204356](https://github.com/openclaw/openclaw/issues/204356) Show context compaction inline with chat activity `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204405](https://github.com/openclaw/openclaw/issues/204405) [Feature]: Let session writers run a plugin’s read-only helper in their own chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#204354](https://github.com/openclaw/openclaw/issues/204354) [Feature]: Agent Profiles: a smaller prompt for small local models, chosen per agent or by model size `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#204401](https://github.com/openclaw/openclaw/issues/204401) Local (stdio) MCP servers have no way to ask for a new sign-in: support URL-mode elicitation as the Connect card `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#204400](https://github.com/openclaw/openclaw/issues/204400) [Android Node] Add `device.apps.launch` — let an approved agent open apps on a paired phone `P2` `impact:ux-friction` 💬1
- [#204394](https://github.com/openclaw/openclaw/issues/204394) update: failed trial does not restore agent databases registered outside the state directory `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#204390](https://github.com/openclaw/openclaw/issues/204390) Browser split Talk can go silent when the audio unlock clip stalls `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204373](https://github.com/openclaw/openclaw/issues/204373) CodeQL macOS critical security: Analyze reaches the 90-minute job limit `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#204374](https://github.com/openclaw/openclaw/issues/204374) CI test timings refit: daily job times out or fails 5 of the last 8 runs `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#204372](https://github.com/openclaw/openclaw/issues/204372) QA live transports (Convex): all five live channel lanes red on every scheduled run `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#204376](https://github.com/openclaw/openclaw/issues/204376) Docs external links: audit cancelled at its time limit on every scheduled run since 2026-08-31 `P3` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#204312](https://github.com/openclaw/openclaw/issues/204312) Recovery and inline-output UI tests race lazy module loading `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204324](https://github.com/openclaw/openclaw/issues/204324) Valid pinned Git plugin installs are reported as provenance-invalid `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#204269](https://github.com/openclaw/openclaw/issues/204269) [Feature]: Make guest welcomes speak in the agent’s own voice `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#204366](https://github.com/openclaw/openclaw/issues/204366) CI: thousands of test files run on no scheduled lane of main; add an every-file lane and a plan test `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🦪 silver shellfish` 💬1
- [#204267](https://github.com/openclaw/openclaw/issues/204267) QA smoke: subagent-empty-completion-recovery fails on main since child history delivery `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#204368](https://github.com/openclaw/openclaw/issues/204368) OpenAI-compatible speech is unavailable to streaming TTS callers `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#204323](https://github.com/openclaw/openclaw/issues/204323) Sign-in-only setup dialog describes API-key verification `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204363](https://github.com/openclaw/openclaw/issues/204363) update: on PostgreSQL, a crash after migration leaves no Gateway running `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#204311](https://github.com/openclaw/openclaw/issues/204311) [Feature]: Add audible status cues for hands-free Talk `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#204350](https://github.com/openclaw/openclaw/issues/204350) CLI: some flag/target errors hide the fix instructions and tell users to run `openclaw doctor` `P2` `impact:ux-friction` 💬1
- [#204347](https://github.com/openclaw/openclaw/issues/204347) [Bug]: [Control UI] zh-CN translation: "People" shown as 人力资源 (Human Resources) in session details `bug` `no-stale` `bug:behavior` `P3` 💬1
- [#204319](https://github.com/openclaw/openclaw/issues/204319) Goal stops advancing after a background command's completion turn `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#204331](https://github.com/openclaw/openclaw/issues/204331) Three changed-lane e2e tests fail on main (cron force after turn, graceful restart backfill, one-shot child result) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#204334](https://github.com/openclaw/openclaw/issues/204334) [Feature]: Show live / post-turn tokens/sec in web chat (Control UI) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204297](https://github.com/openclaw/openclaw/issues/204297) [Bug]: Control UI failed-reply card has excessive spacing after #194607 `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#204321](https://github.com/openclaw/openclaw/issues/204321) Update failure: package-update (2026.11.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204317](https://github.com/openclaw/openclaw/issues/204317) [Bug]: Scheduled Telegram final delivered text-only while automatic TTS works for adjacent replies (2026.11.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#204309](https://github.com/openclaw/openclaw/issues/204309) Update leaves .openclaw.package-backup-*.databases snapshots (7 GB each) forever; update.cleanup does not cover them `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#204307](https://github.com/openclaw/openclaw/issues/204307) [Feature]: Add GitHub Copilot as a native image-generation provider `P3` `impact:auth-provider` 💬1
- [#204306](https://github.com/openclaw/openclaw/issues/204306) (06/28/2026-Current)Partial Auth 10-21-26 'Stipulation' Deal-Honored 'null' (so) Devices-Unauthorized-Host-Runner-No Follow Through Agreements-Open Invoice-Deals In Place:Contention: Must start from day of Poisonous Tree-include all pertinent material 💬1
- [#204290](https://github.com/openclaw/openclaw/issues/204290) [Bug]: Android app fails to start diction and wake word listener! `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#204298](https://github.com/openclaw/openclaw/issues/204298) [Bug]: Managed-update triage 60s process-group SIGKILL bypasses SQLite creator cleanup and exhausts disk `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204268](https://github.com/openclaw/openclaw/issues/204268) [Feature] Add issue and PR comments to `github_publish` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#204294](https://github.com/openclaw/openclaw/issues/204294) [Feature]: Expose per-call evidence for host-prepared isolated completions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204252](https://github.com/openclaw/openclaw/issues/204252) PR CI test selection skips prompt-cache and compaction tests for changes to their owners `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204291](https://github.com/openclaw/openclaw/issues/204291) [Bug]: Automation turns end on a sessions_yield that has nothing to wait for, and the run is recorded ok `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204164](https://github.com/openclaw/openclaw/issues/204164) Unread follows run visibility, not visible content (NO_REPLY and quiet wakes still mark unread) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#204284](https://github.com/openclaw/openclaw/issues/204284) Update failure: requested (2026.11.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204282](https://github.com/openclaw/openclaw/issues/204282) Update failure: requested (2026.11.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204271](https://github.com/openclaw/openclaw/issues/204271) Click to dictate and hold for Talk in desktop chat `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#204276](https://github.com/openclaw/openclaw/issues/204276) [Bug]: npm reinstall after release conversion hides CLI/Gateway version split in update status `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204207](https://github.com/openclaw/openclaw/issues/204207) [Bug]: `templates add` fails without model sign-in in 2026.11.10-beta.3 `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#204187](https://github.com/openclaw/openclaw/issues/204187) Goal continuation can run before a background exec result (admission-window race) `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#204262](https://github.com/openclaw/openclaw/issues/204262) [Feature]: Bridge claude-cli preamble (commentary) items to Gateway chat runs and inFlightRun `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204091](https://github.com/openclaw/openclaw/issues/204091) update: rollback report still lists lines that do not help the user `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#204261](https://github.com/openclaw/openclaw/issues/204261) GPT-Live: voice allowlist is outdated and unknown voices silently fall back to `marin` `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204259](https://github.com/openclaw/openclaw/issues/204259) 🐛 Preserve v2 tool factories in supported plugin packing `P2` `impact:other` 💬1
- [#204245](https://github.com/openclaw/openclaw/issues/204245) [Bug]: native Codex caller lacks registered recovery reader and tool-search access in searchable mode (2026.11.3) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204242](https://github.com/openclaw/openclaw/issues/204242) Update failure: package-doctor (2026.11.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204240](https://github.com/openclaw/openclaw/issues/204240) Update failure: global-install-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204244](https://github.com/openclaw/openclaw/issues/204244) [Bug]: cold setup CLI hits unprepared runtime config on 2026.11.3; explicit preparation preload unblocks it `P2` `impact:ux-friction` 💬1
- [#204238](https://github.com/openclaw/openclaw/issues/204238) Beam-1.0 via OpenRouter: 400 'assistant turn at messages[2] is missing its reasoning' on fresh single-turn sessions (2026.11.6/11.7; 2026.11.1 unaffected) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204196](https://github.com/openclaw/openclaw/issues/204196) Windows: launcher IPC keeps a cleanly stopped Gateway alive and hangs the next update `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬1
- [#204227](https://github.com/openclaw/openclaw/issues/204227) [Bug]: update check-release rejects a cleanly closed WAL-mode agent database when its SHM file is absent `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#204236](https://github.com/openclaw/openclaw/issues/204236) [Feature]: Say how big an oversized reply attachment was and what the limit is `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204241](https://github.com/openclaw/openclaw/issues/204241) backup git verify/restore fail on table rows containing U+2028/U+2029 (readline splits the line) `P2` `impact:other` 💬1
- [#204235](https://github.com/openclaw/openclaw/issues/204235) Cross-OS release checks save about 12 npm cache entries of 500 MB per release run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204231](https://github.com/openclaw/openclaw/issues/204231) test: three tests fail on main (prompt-cache request count, cron preflight compaction, changed-node test plan timeout) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#204035](https://github.com/openclaw/openclaw/issues/204035) Prepared-release plugin maintenance refuses a schema bump while the serving Gateway owns state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204225](https://github.com/openclaw/openclaw/issues/204225) Update failure: package-install-omit-optional (2026.10.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#204228](https://github.com/openclaw/openclaw/issues/204228) Update failure: [redacted-command] (2026.11.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#204214](https://github.com/openclaw/openclaw/issues/204214) [Bug]: Gateway loses provider credentials after an auth snapshot publication conflict `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204218](https://github.com/openclaw/openclaw/issues/204218) Control UI: optionally send text messages already in the browser queue together `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204203](https://github.com/openclaw/openclaw/issues/204203) [Bug]: Control UI skips Ask User when I answer in the chat composer `bug` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#204195](https://github.com/openclaw/openclaw/issues/204195) [Feature]: Add bf16.ai uncensored LLM provider plugin `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#204194](https://github.com/openclaw/openclaw/issues/204194) [Bug]: Cron webhook gets no POST when a Gateway restart interrupts the run `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#204202](https://github.com/openclaw/openclaw/issues/204202) [Feature]: Provider request: Tadly (OpenAI-compatible, open-weight Qwen models) `P3` 💬1
- [#204205](https://github.com/openclaw/openclaw/issues/204205) Config writes wait 135–900 ms for a state-database read image before reading config health `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204198](https://github.com/openclaw/openclaw/issues/204198) Update failure: gateway-stop-unverified (2026.11.2) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#204193](https://github.com/openclaw/openclaw/issues/204193) [Bug]: Update fails during backup: SQLite header probe hits fixed 10s timeout (spawnSync ETIMEDOUT) on large state directories `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#204190](https://github.com/openclaw/openclaw/issues/204190) [Bug]: Automation refusal says to recreate the job even when re-enabling it works after access is restored `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#204085](https://github.com/openclaw/openclaw/issues/204085) [Bug]: Windows release trial cannot replace the state WAL and rolls back a schema-changing update `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` `impact:ux-release-blocker` 💬1
- [#204186](https://github.com/openclaw/openclaw/issues/204186) path resolve reports JSONL insertion targets that path set refuses `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204185](https://github.com/openclaw/openclaw/issues/204185) Add Hungarian (hu) Control UI locale `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204168](https://github.com/openclaw/openclaw/issues/204168) [Bug]: Gateway crash-loops at startup when any tailscale serve handler is a path share (401 must be root ... to serve a path) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#204166](https://github.com/openclaw/openclaw/issues/204166) Update failure: database-schema-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#204169](https://github.com/openclaw/openclaw/issues/204169) [Bug]: Telegram channel stuck after restart (getMe ETIMEDOUT inside Gateway while host network is fine); stopAccount exceeds 5000ms and health-monitor can't replace it `P1` `impact:message-loss` 💬1
- [#204161](https://github.com/openclaw/openclaw/issues/204161) [Bug]: Package (npm) `openclaw update` stops the Gateway without draining; in-flight agent turns are aborted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204078](https://github.com/openclaw/openclaw/issues/204078) Windows update fails when a read-only SQLite reader opens during Doctor `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204156](https://github.com/openclaw/openclaw/issues/204156) [Bug]: Managed Git plugins stay linked to the previous OpenClaw release after a host update `bug` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#204157](https://github.com/openclaw/openclaw/issues/204157) 2026.11.6: path-installed TS plugin fails with "Plugin preparation callback timed out" when a relative import uses ./x.js for x.ts (or is extensionless) `P2` `impact:other` 💬1
- [#204150](https://github.com/openclaw/openclaw/issues/204150) [Bug]: doctor --fix can never remove retained update runtimes: the process census counts doctor's own child processes as holders (macOS, 2026.11.7) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#204141](https://github.com/openclaw/openclaw/issues/204141) Telegram turns repeatedly fail with incomplete turn until a same-session CLI invocation restores replies (2026.10.5) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` `P0` 💬1
- [#204146](https://github.com/openclaw/openclaw/issues/204146) [Bug]: Git release launcher conversion leaves the managed profile CLI on the old checkout `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204147](https://github.com/openclaw/openclaw/issues/204147) [Bug]: plugins list tool drops Gateway generation and per-plugin runtime before budgeting `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204145](https://github.com/openclaw/openclaw/issues/204145) [Bug]: Git updater reports a healthy schema-41 Gateway as abandoned and leaves its rollback trial armed `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#204148](https://github.com/openclaw/openclaw/issues/204148) [Bug]: message tool send batched with other tool calls ends the turn and drops the sibling results `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#204137](https://github.com/openclaw/openclaw/issues/204137) [Bug]: Transparent-background OpenAI images use gpt-image-1.5, which stops working on December 1, 2026 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#204138](https://github.com/openclaw/openclaw/issues/204138) [Feature]: Render native charts in Microsoft Teams messages `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204128](https://github.com/openclaw/openclaw/issues/204128) Make OpenAI speech and audio work with Sign in with ChatGPT `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204124](https://github.com/openclaw/openclaw/issues/204124) [Bug]: Talk sends MiniMax China-region speech requests to the global MiniMax host `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204113](https://github.com/openclaw/openclaw/issues/204113) WhatsApp setup in the Control UI takes 13 terminal-style screens and the scan isn't picked up on its own `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#204120](https://github.com/openclaw/openclaw/issues/204120) [Bug]: WhatsApp and Discord voice notes are uploaded for transcription despite tools.media.audio.scope deny rules `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#204118](https://github.com/openclaw/openclaw/issues/204118) [Bug]: voicecall expose --mode off reports success but leaves the Tailscale route published on port 443 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#204112](https://github.com/openclaw/openclaw/issues/204112) [Bug]: Intermediate Git/dev updater leaves a prepared release stranded across a schema upgrade `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204104](https://github.com/openclaw/openclaw/issues/204104) Control UI Browser panel: press-and-hold is sent as a single click, so "Press & Hold" bot checks can't be completed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204100](https://github.com/openclaw/openclaw/issues/204100) Update failure: gateway-recovery-verification (2026.9.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204101](https://github.com/openclaw/openclaw/issues/204101) SQLite generation verification can miss a rapid checkpointed write from a closed source `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#204084](https://github.com/openclaw/openclaw/issues/204084) [Bug]: WhatsApp DM replies sent through the message tool are delivered but missing from Control UI history `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204082](https://github.com/openclaw/openclaw/issues/204082) Exec approvals ignore OPENCLAW_PROFILE: env-only profiles use the default ~/.openclaw exec-approvals file and socket `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#204080](https://github.com/openclaw/openclaw/issues/204080) Sidebar: off-list pinned parents cannot show their child sessions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204072](https://github.com/openclaw/openclaw/issues/204072) Gateway stop hits 325s watchdog SIGKILL: session-admissions and memory-preparation wait without timeout `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#204060](https://github.com/openclaw/openclaw/issues/204060) Rewind before a lossy compaction leaves /status showing "degraded history" (compactionQualityDegraded survives sessions.rewind) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204059](https://github.com/openclaw/openclaw/issues/204059) /model provider/model silently selects a different allowed model when the exact one is not allowed (grok-4.7 → grok-4.3) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204058](https://github.com/openclaw/openclaw/issues/204058) Resume an existing managed session from a different local clone `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204052](https://github.com/openclaw/openclaw/issues/204052) PostgreSQL engine: one transcript event containing \u0000 permanently blocks the session and its ingress lane `P2` `impact:session-state` `impact:message-loss` 💬1
- [#204047](https://github.com/openclaw/openclaw/issues/204047) [Docs Bug]: zh-Hans sidebar renders the Capabilities subgroups in English `bug` `docs` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#204046](https://github.com/openclaw/openclaw/issues/204046) Plugin maintenance performs millions of filesystem metadata calls after npm updates `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#204041](https://github.com/openclaw/openclaw/issues/204041) [Feature]: `tts.speak` should read a reply in its agent's voice (optional `sessionKey`) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204044](https://github.com/openclaw/openclaw/issues/204044) [Bug]: memory-tencentdb L1/L2 fails with "Plugin invocation scope is closed" on 2026.11.4 `P2` `impact:session-state` 💬1
- [#204018](https://github.com/openclaw/openclaw/issues/204018) Feishu: internal UUIDs still reach /messages/{id}/reply on 2026.11.6 (message tool replyTo + completion delivery) → 400 99992354, consumer closed, fallback burst `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204016](https://github.com/openclaw/openclaw/issues/204016) [Bug]: Completion source replies reject empty/default args (e.g. targets: []), strict-schema models hit repeated_tool_error `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1

#### 🔒 Closed Issues
- [#158127](https://github.com/openclaw/openclaw/issues/158127) [Bug]: 2026.9.6 multi-agent runtime publication failures and separate Codex startup timeouts
- [#138366](https://github.com/openclaw/openclaw/issues/138366) [Feature]: Let the memory slot owner drive the Dreams page (dreaming provider in MemoryPluginCapability)
- [#187917](https://github.com/openclaw/openclaw/issues/187917) Update failure: updater-runtime-retention (2026.10.8)
- [#177909](https://github.com/openclaw/openclaw/issues/177909) [Bug]: transcript idempotency conflict is treated as a model failure and walks the cross-provider fallback chain (2026.10.5)
- [#177505](https://github.com/openclaw/openclaw/issues/177505) skill_workshop background experience-review retries on invalid tool-call arguments, no visible retry/turn cap
- [#155039](https://github.com/openclaw/openclaw/issues/155039) [Feature]: Manual team-sidebar agent section order via synced display preferences
- [#151173](https://github.com/openclaw/openclaw/issues/151173) [Bug]: memory-core recall rehydration anchors on fragments and picks ambiguous ranges by line distance
- [#159743](https://github.com/openclaw/openclaw/issues/159743) [Feature]: Installation-aware post-upgrade survey and monitored recovery window
- [#153430](https://github.com/openclaw/openclaw/issues/153430) [Bug]: a deep $include config that passes include resolution crashes later load stages (deep-merge, env substitution, migration probes) with RangeError
- [#107487](https://github.com/openclaw/openclaw/issues/107487) [Bug]: `/acp close` does not clear acpx FileSessionStore — stale `acp_session_id` causes unwanted `session/resume` instead of `session/new`
- [#202379](https://github.com/openclaw/openclaw/issues/202379) Lean: measure and ship further lean-only memory reductions
- [#187588](https://github.com/openclaw/openclaw/issues/187588) [Bug]: Telegram: a standalone MEDIA: line for an existing local PDF is never dispatched — text delivered, zero document send, no error logged
- [#186990](https://github.com/openclaw/openclaw/issues/186990) [Bug]: failure alerts silently undeliverable without a configured channel; failing automations surface only as repeated in-conversation repair briefs
- [#177531](https://github.com/openclaw/openclaw/issues/177531) Picker offers xhigh for meta/muse-* but sessions.patch rejects it on the muse runtime
- [#189921](https://github.com/openclaw/openclaw/issues/189921) Update failure: requested (2026.9.5)
- [#189643](https://github.com/openclaw/openclaw/issues/189643) Update failure: git-clone (2026.10.4)
- [#189414](https://github.com/openclaw/openclaw/issues/189414) Update failure: reconcile:abandoned (2026.10.9)
- [#188829](https://github.com/openclaw/openclaw/issues/188829) Update failure: validating (2026.10.9)
- [#187950](https://github.com/openclaw/openclaw/issues/187950) [Feature]: Configurable shell for tools.exec on Windows (use PowerShell 7 when available)
- [#187774](https://github.com/openclaw/openclaw/issues/187774) [Feature]: Add an optional Cua Spaces worker provider
- [#187010](https://github.com/openclaw/openclaw/issues/187010) [Feature]: Session-scoped agent cursor for integrated cua-computer desktop executions
- [#170661](https://github.com/openclaw/openclaw/issues/170661) [Feature]: per-agent Active Memory overrides (mode, model, timeoutMs)
- [#189332](https://github.com/openclaw/openclaw/issues/189332) [Bug]: exec (zsh) — heredoc on non-first pipeline stage receives upstream pipe output ⊕ heredoc body instead of overriding the pipe → false "Exec failed" NameError alerts
- [#188737](https://github.com/openclaw/openclaw/issues/188737) Scheduled pinned-only show_widget is unavailable when the target session uses an OpenAI model
- [#188694](https://github.com/openclaw/openclaw/issues/188694) Update failure: invalid-config (2026.10.9)
- [#188417](https://github.com/openclaw/openclaw/issues/188417) [Bug]: Code Mode: models call catalog tools like `read` directly instead of inside `exec`
- [#204038](https://github.com/openclaw/openclaw/issues/204038) [Bug]: macOS: update from 2026.11.3 to 2026.11.6 rolls back when Doctor cannot verify gateway ownership
- [#188171](https://github.com/openclaw/openclaw/issues/188171) ask_user card never shows buttons on Telegram; 'ask_user prompt delivery failed' hides its cause (2026.9.5)
- [#187628](https://github.com/openclaw/openclaw/issues/187628) [Feature]: allow deleting or editing a message cancelled just after sending (currently only copy-and-resend)
- [#187149](https://github.com/openclaw/openclaw/issues/187149) [Feature]: PlanetScale Neki native agent storage via a pre-boot PostgreSQL lifecycle extension
- [#187014](https://github.com/openclaw/openclaw/issues/187014) [Feature]: MiniMax M3.1 Flash native server-side web search on Anthropic Messages
- [#186985](https://github.com/openclaw/openclaw/issues/186985) [Bug]: iOS send-shortcut setting does not enable Enter to send on iPad
- [#186978](https://github.com/openclaw/openclaw/issues/186978) [Bug]: iOS native Talk splits ElevenLabs speech mid-sentence at a hardcoded 72-character soft boundary
- [#186514](https://github.com/openclaw/openclaw/issues/186514) [Feature]: Slack opt-in optional completion for explicitly mentioned bot notifications
- [#186228](https://github.com/openclaw/openclaw/issues/186228) Closed SQLite read-only AsyncLocalStorage scope leaks into later async work and rejects valid inspections
- [#190056](https://github.com/openclaw/openclaw/issues/190056) [Bug]: trailing-whitespace filenames and sshIdentity values silently resolve to trimmed siblings
- [#189985](https://github.com/openclaw/openclaw/issues/189985) Android app 2026.10.70: Talk button demands a realtime provider despite Gateway Talk being configured (system/stt-tts); composer dictation also fails
- [#189980](https://github.com/openclaw/openclaw/issues/189980) sessions_yield already_pending gives unconditional end-turn advice for unrelated historical children; empty terminal recovery then fails at 512 KiB
- [#189914](https://github.com/openclaw/openclaw/issues/189914) fix(memory): configured extraPaths roots are trimmed, collapsing distinct literal directories
- [#189911](https://github.com/openclaw/openclaw/issues/189911) [Feature]: Let config set model order within a provider in the model pickers
- [#189890](https://github.com/openclaw/openclaw/issues/189890) [Bug] sessions delete leaves context_engine_turn_outbox rows that retry forever (no purge, no cap, log churn)
- [#189878](https://github.com/openclaw/openclaw/issues/189878) [Feature]: Telegram live preview for non-inbound turns (automations, sessions_send, agent --deliver)
- [#189649](https://github.com/openclaw/openclaw/issues/189649) [Bug]: Telegram slash commands typed by a linked operator never receive plugin runtime capabilities
- [#189575](https://github.com/openclaw/openclaw/issues/189575) [Bug]: image quality is ignored when generating with xAI image 2.0
- [#189567](https://github.com/openclaw/openclaw/issues/189567) [Bug]: Control UI session pin state is force-reverted by projection refresh - manual unpin does not stick
- [#189527](https://github.com/openclaw/openclaw/issues/189527) Supported interface for complete original ACP tool-result retrieval
- [#189479](https://github.com/openclaw/openclaw/issues/189479) [Bug]: macOS gateway discovery truncates TXT values containing spaces (displayName shows "Peter’s\")
- [#189442](https://github.com/openclaw/openclaw/issues/189442) Google Chat: Drive-link attachments reach the agent without file name or Drive file ID
- [#189396](https://github.com/openclaw/openclaw/issues/189396) [Feature]: Cover the legacy session recovery contracts with tests
- [#189354](https://github.com/openclaw/openclaw/issues/189354) [Feature]: Search and send native Zalo stickers through the existing zalouser channel
- [#189178](https://github.com/openclaw/openclaw/issues/189178) Session SQLite migration recovery report (session-sqlite-1793347595202-896c14d0)
- [#189139](https://github.com/openclaw/openclaw/issues/189139) [Bug]: models.dev merge keeps cost in snake_case (cache_read/cache_write) → catalog schema rejects models.dev-sourced entries (zai: 18/18 invalid)
- [#189067](https://github.com/openclaw/openclaw/issues/189067) [Feature]: List ClawHub provider plugins under "Community tools" in the provider directory
- [#188993](https://github.com/openclaw/openclaw/issues/188993) [Feature]: preserve original recording dates on transcript imports
- [#188793](https://github.com/openclaw/openclaw/issues/188793) [Feature]: Support European Portuguese across interfaces and apps
- [#188740](https://github.com/openclaw/openclaw/issues/188740) Clarify prompt delivery equivalence, request modes, and delegation intent
- [#188732](https://github.com/openclaw/openclaw/issues/188732) voice-call: allow `realtime` overrides (instructions + speakerVoice) in per-number routes
- [#188712](https://github.com/openclaw/openclaw/issues/188712) [Bug]: Codex app-server subprocess chains spawned via a plugin generation outlive that generation and are not covered by mcp.sessionIdleTtlMs
- [#188582](https://github.com/openclaw/openclaw/issues/188582) [Bug]: Chat images become unavailable after switching session stores
- [#188524](https://github.com/openclaw/openclaw/issues/188524) [Bug]: 10.10 release drops WebChat origin from native completion scopes
- [#188520](https://github.com/openclaw/openclaw/issues/188520) [Feature]: Make Telegram usage footer indicators easier to understand
- [#188449](https://github.com/openclaw/openclaw/issues/188449) [Bug]: Dashboards gallery only lists the currently selected agent's boards
- [#188446](https://github.com/openclaw/openclaw/issues/188446) bug: 2026.10.8 git backup loses agent-scope resolution (--agent <id> fails with Unknown agent id)
- [#188337](https://github.com/openclaw/openclaw/issues/188337) feat(gateway): preserve a verified admission fence across SDK maintenance restart
- [#188320](https://github.com/openclaw/openclaw/issues/188320) [Feature]: Let the gateway tool read update status before scheduling updates
- [#188275](https://github.com/openclaw/openclaw/issues/188275) Hot reload of agents.defaults.models.* re-registers every plugin and stalls the gateway ~19 s (2026.10.9)
- [#188274](https://github.com/openclaw/openclaw/issues/188274) Diagnostics: slow SQLite hold async=false is misleading, worker log lines lack emit timestamps; integrity-admission diagnostics gaps (2026.10.9)
- [#188272](https://github.com/openclaw/openclaw/issues/188272) memory-core re-exports the full session transcript on every update; delta thresholds unused and sync not configurable (2026.10.9)
- [#188213](https://github.com/openclaw/openclaw/issues/188213) [Feature]: Opt-in OpenAI Flex processing with Flex-sized timeouts and retries
- [#188209](https://github.com/openclaw/openclaw/issues/188209) [Feature]: Search past transcript text from the CLI (sessions search)
- [#188201](https://github.com/openclaw/openclaw/issues/188201) Memory status: expose dirty reasons and per-source session freshness
- [#188199](https://github.com/openclaw/openclaw/issues/188199) [Feature]: List recorded update runs from the CLI (update history)
- [#188183](https://github.com/openclaw/openclaw/issues/188183) [Feature]: Show what a session changed from the CLI (sessions diff)
- [#188143](https://github.com/openclaw/openclaw/issues/188143) [Feature]: Support explicit native @all mentions in WhatsApp group sends
- [#188142](https://github.com/openclaw/openclaw/issues/188142) Session SQLite migration recovery report (session-sqlite-1793304006022-4fa94334)
- [#188051](https://github.com/openclaw/openclaw/issues/188051) [Feature]: Customize spoken summary style
- [#187987](https://github.com/openclaw/openclaw/issues/187987) [Feature]: Scope iMessage Read receipts to handled messages
- [#187978](https://github.com/openclaw/openclaw/issues/187978) [Feature]: Pin a dashboard so it is selectable as a panel from the + menu in any session
- [#187977](https://github.com/openclaw/openclaw/issues/187977) [Feature]: Built-in read-only Maintenance / Ops overview (gateway health, automations, quota, sessions)
- [#187882](https://github.com/openclaw/openclaw/issues/187882) [Bug]: Windows npm backup fails late on managed browser Cookies EBUSY without recovery guidance
- [#187817](https://github.com/openclaw/openclaw/issues/187817) [Feature]: Generate short multi-speaker dialogue with the bundled ElevenLabs plugin
- [#187780](https://github.com/openclaw/openclaw/issues/187780) secrets store CLI leaks raw ENOENT with exit 1 for missing --value-file / --from paths
- [#187629](https://github.com/openclaw/openclaw/issues/187629) Align iOS app icon composition with Apple design guidelines
- [#187607](https://github.com/openclaw/openclaw/issues/187607) [Bug]: macOS status menu Thinking/Verbose submenus check "Off" for sessions that inherit the agent default
- [#187599](https://github.com/openclaw/openclaw/issues/187599) [Bug]: macOS Tailscale section shows "Tailnet (Serve)" for Gateways with no Tailscale config (hydrates a missing mode as serve; Gateway default is off)
- [#187557](https://github.com/openclaw/openclaw/issues/187557) [Feature]: Supported before_agent_finalize gate for blocking terminal success
- [#187491](https://github.com/openclaw/openclaw/issues/187491) [Bug]: Heartbeat-only turns attribute unsent replies to user and persist unsupported tasks (Telegram, GLM-5.3-Flash)
- [#187358](https://github.com/openclaw/openclaw/issues/187358) [Bug]: Inbound vision media URI hidden from prompt text and UUIDv4 alphabetical sorting in ls prevents selecting latest media
- [#187357](https://github.com/openclaw/openclaw/issues/187357) [Bug]: Gemini 2.5 Flash returns 404 NOT_FOUND for new Google AI Studio API keys ("no longer available to new users")
- [#187229](https://github.com/openclaw/openclaw/issues/187229) [Feature]: Skill Workshop background review model override with fail-closed local routing
- [#186957](https://github.com/openclaw/openclaw/issues/186957) Plugin scheduled command turns keep failing after the plugin is disabled or the conversation is reset, and block new schedules
- [#186908](https://github.com/openclaw/openclaw/issues/186908) [Bug]: QA evidence gallery trims literal filesystem paths
- [#186897](https://github.com/openclaw/openclaw/issues/186897) backup git: `--push` to GitHub fails on any real agent DB (files >100 MB), and `--keep-*` is rejected in Git mode
- [#186881](https://github.com/openclaw/openclaw/issues/186881) [Bug]: memory-wiki status and doctor perform synchronization before reporting, exceeding the CLI deadline
- [#186879](https://github.com/openclaw/openclaw/issues/186879) [Feature]: Change project folder for an existing idle Control UI chat
- [#186852](https://github.com/openclaw/openclaw/issues/186852) [Feature]: Support first and last keyframes for Runway Veo video generation
- [#186808](https://github.com/openclaw/openclaw/issues/186808) Feature: precise duration formatter rounds inconsistently on .005 float noise
- [#186764](https://github.com/openclaw/openclaw/issues/186764) [Feature]: Tell agents how chat file paths resolve in the Control UI
- [#186710](https://github.com/openclaw/openclaw/issues/186710) [Bug]: `openclaw onboard --non-interactive` key replacement without a model to test fails with an app-guided "starter model" error and no next step
- [#186704](https://github.com/openclaw/openclaw/issues/186704) CLI 'automations run' lacks --force (tool supports runMode force); hint references 'cron'
- [#186699](https://github.com/openclaw/openclaw/issues/186699) docs(secrets): distinguish native macOS TLS trust from proxy grant authentication
- [#186685](https://github.com/openclaw/openclaw/issues/186685) Editing AGENTS.md / MEMORY.md mid-session rewrites the whole prompt cache (regression vs 2026.9.6)
- [#186617](https://github.com/openclaw/openclaw/issues/186617) [Feature]: Readable filenames for encoded workspace links
- [#193736](https://github.com/openclaw/openclaw/issues/193736) [Bug]: gateway emits repeated File descriptor N closed but not opened in unmanaged mode warnings during plugin source materialization
- [#203946](https://github.com/openclaw/openclaw/issues/203946) update: deferred advisory Doctor inspections never run after an update (first hop and release path)
- [#169550](https://github.com/openclaw/openclaw/issues/169550) [Bug]: Feishu non-streaming block replies ignore renderMode=card and are sent as posts
- [#186447](https://github.com/openclaw/openclaw/issues/186447) [Feature]: Open the matching provider from command palette model results
- [#186424](https://github.com/openclaw/openclaw/issues/186424) [Feature]: show the target agent id in /subagents list rows
- [#186418](https://github.com/openclaw/openclaw/issues/186418) [Bug]: agent.run callers that pin a model cannot supply a fallback ladder, so a quota-class 429 dead-ends
- [#186309](https://github.com/openclaw/openclaw/issues/186309) Compaction: 1M-window models produce oversized summarization requests (401 from provider), estimator fires compaction ~5x early on non-English/JSON transcripts, overflow-recovery dies on anchor guard
- [#167310](https://github.com/openclaw/openclaw/issues/167310) [Bug]: Generated images remain undelivered after handoff timeout and retired state-owner errors (2026.9.6, Weixin)
- [#204387](https://github.com/openclaw/openclaw/issues/204387) [Bug]: Embedded runtime replaces an earlier, still-loadable image with "could not be loaded … ask them to resend" on every later turn
- [#204386](https://github.com/openclaw/openclaw/issues/204386) [Bug]: Native video never reaches Gemini: `PROVIDER_CONTEXT_HANDOFF` is defined twice in the published build
- [#204338](https://github.com/openclaw/openclaw/issues/204338) [Bug]: 2026.11.3 Telegram message CLI delivers but times out; command cron retry duplicates post
- [#202373](https://github.com/openclaw/openclaw/issues/202373) Lean Gateway resource profile for small machines
- [#204177](https://github.com/openclaw/openclaw/issues/204177) Update failure: package-update (2026.10.10)
- [#203942](https://github.com/openclaw/openclaw/issues/203942) [Bug]: After `gateway install` from npx, new shells have no `openclaw` because the npx cache copy is kept as the terminal default
- [#191648](https://github.com/openclaw/openclaw/issues/191648) [Bug]: Prompt-cache drop warnings blame max_completion_tokens when only the re-clamped output cap changed
- [#203988](https://github.com/openclaw/openclaw/issues/203988) checks-ui (1/3) and (3/3) fail on unrelated PRs (toast, board-view, chat-attachment-handoff browser tests)
- [#204400](https://github.com/openclaw/openclaw/issues/204400) [Android Node] Add `device.apps.launch` — let an approved agent open apps on a paired phone
- [#202501](https://github.com/openclaw/openclaw/issues/202501) [Bug] Selected CI tests can inherit an unnecessary runtime build
- [#204312](https://github.com/openclaw/openclaw/issues/204312) Recovery and inline-output UI tests race lazy module loading
- [#204324](https://github.com/openclaw/openclaw/issues/204324) Valid pinned Git plugin installs are reported as provenance-invalid
- [#204269](https://github.com/openclaw/openclaw/issues/204269) [Feature]: Make guest welcomes speak in the agent’s own voice
- [#204267](https://github.com/openclaw/openclaw/issues/204267) QA smoke: subagent-empty-completion-recovery fails on main since child history delivery
- [#204323](https://github.com/openclaw/openclaw/issues/204323) Sign-in-only setup dialog describes API-key verification
- [#204350](https://github.com/openclaw/openclaw/issues/204350) CLI: some flag/target errors hide the fix instructions and tell users to run `openclaw doctor`
- [#204319](https://github.com/openclaw/openclaw/issues/204319) Goal stops advancing after a background command's completion turn
- [#204297](https://github.com/openclaw/openclaw/issues/204297) [Bug]: Control UI failed-reply card has excessive spacing after #194607
- [#204306](https://github.com/openclaw/openclaw/issues/204306) (06/28/2026-Current)Partial Auth 10-21-26 'Stipulation' Deal-Honored 'null' (so) Devices-Unauthorized-Host-Runner-No Follow Through Agreements-Open Invoice-Deals In Place:Contention: Must start from day of Poisonous Tree-include all pertinent material
- [#204252](https://github.com/openclaw/openclaw/issues/204252) PR CI test selection skips prompt-cache and compaction tests for changes to their owners
- [#204164](https://github.com/openclaw/openclaw/issues/204164) Unread follows run visibility, not visible content (NO_REPLY and quiet wakes still mark unread)
- [#198702](https://github.com/openclaw/openclaw/issues/198702) Together chat models outside the built-in catalog are hidden from model lists and refused with "This model doesn't support chat"
- [#204207](https://github.com/openclaw/openclaw/issues/204207) [Bug]: `templates add` fails without model sign-in in 2026.11.10-beta.3
- [#202372](https://github.com/openclaw/openclaw/issues/202372) gpt-6.2 on the ChatGPT (Codex) Responses route: system prompt in `instructions` is never prompt-cached; same request on gpt-6.1 caches fully
- [#204091](https://github.com/openclaw/openclaw/issues/204091) update: rollback report still lists lines that do not help the user
- [#204259](https://github.com/openclaw/openclaw/issues/204259) 🐛 Preserve v2 tool factories in supported plugin packing
- [#204244](https://github.com/openclaw/openclaw/issues/204244) [Bug]: cold setup CLI hits unprepared runtime config on 2026.11.3; explicit preparation preload unblocks it
- [#204196](https://github.com/openclaw/openclaw/issues/204196) Windows: launcher IPC keeps a cleanly stopped Gateway alive and hangs the next update
- [#204241](https://github.com/openclaw/openclaw/issues/204241) backup git verify/restore fail on table rows containing U+2028/U+2029 (readline splits the line)
- [#204035](https://github.com/openclaw/openclaw/issues/204035) Prepared-release plugin maintenance refuses a schema bump while the serving Gateway owns state
- [#204194](https://github.com/openclaw/openclaw/issues/204194) [Bug]: Cron webhook gets no POST when a Gateway restart interrupts the run
- [#204193](https://github.com/openclaw/openclaw/issues/204193) [Bug]: Update fails during backup: SQLite header probe hits fixed 10s timeout (spawnSync ETIMEDOUT) on large state directories
- [#204085](https://github.com/openclaw/openclaw/issues/204085) [Bug]: Windows release trial cannot replace the state WAL and rolls back a schema-changing update
- [#198048](https://github.com/openclaw/openclaw/issues/198048) [Bug]: openclaw-tooltip hover card flickers on mouse move: interactionElements excludes host element, so sidebar build chip hover card cannot stay open
- [#204169](https://github.com/openclaw/openclaw/issues/204169) [Bug]: Telegram channel stuck after restart (getMe ETIMEDOUT inside Gateway while host network is fine); stopAccount exceeds 5000ms and health-monitor can't replace it
- [#204078](https://github.com/openclaw/openclaw/issues/204078) Windows update fails when a read-only SQLite reader opens during Doctor
- [#204157](https://github.com/openclaw/openclaw/issues/204157) 2026.11.6: path-installed TS plugin fails with "Plugin preparation callback timed out" when a relative import uses ./x.js for x.ts (or is extensionless)
- [#201406](https://github.com/openclaw/openclaw/issues/201406) New setups: offer Sign in with ChatGPT first for OpenAI
- [#198523](https://github.com/openclaw/openclaw/issues/198523) Talk consult exclusion now fails the session prefix assertion: second native consult speaks the fallback (client-native-control.test.ts red on main)
- [#203828](https://github.com/openclaw/openclaw/issues/203828) main: models.authSetApiKey test asserts a retired mid-request authority recheck
- [#203931](https://github.com/openclaw/openclaw/issues/203931) test: chat-abort-initiator product test fails on main (expected 'aborted' to be 'final')
- [#203492](https://github.com/openclaw/openclaw/issues/203492) CI: checks-ui-e2e red on main (native-nav-responsive-layout, openclaw-id-menu)
- [#204052](https://github.com/openclaw/openclaw/issues/204052) PostgreSQL engine: one transcript event containing \u0000 permanently blocks the session and its ingress lane
- [#204044](https://github.com/openclaw/openclaw/issues/204044) [Bug]: memory-tencentdb L1/L2 fails with "Plugin invocation scope is closed" on 2026.11.4

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 265,720 · **Open issues:** 54,251 · **Last push:** <1h ago

On November 23, 2026, Hermes Agent released version canary.20261123T065600Z-v0.23.3, reflecting ongoing enhancements and stability improvements. While no new pull requests were merged, several critical issues emerged, including a Telegram adapter connection timeout and a bug within agent-mode cron jobs causing session leaks that may saturate the gateway event loop. Other notable new issues involve a UnicodeEncodeError causing crashes in the skills_guard and a reported problem with the desktop capabilities interface blocking the main thread during operation. The day indicated a mix of advancements and challenges that developers will need to address in upcoming updates.

#### 🚀 New Releases
- [canary.20261123T065600Z-v0.23.3](https://github.com/nousresearch/hermes-agent/releases/tag/canary.20261123T065600Z-v0.23.3) Hermes Agent canary canary.20261123T065600Z-v0.23.3

#### 🐛 New Issues
- [#159490](https://github.com/NousResearch/hermes-agent/issues/159490) Telegram adapter: connect attempt 1 times out (20 s), attempt 2 hits "Flood control exceeded. Retry in 32 seconds", every cycle `type/bug` `comp/gateway` `comp/plugins` `platform/telegram` 💬4
- [#159395](https://github.com/NousResearch/hermes-agent/issues/159395) [Bug]: Agent-mode cron jobs leak an empty open session on every gated (suppressed) fire; accumulation saturates the gateway event loop `type/perf` `comp/gateway` `P2` `area/sessions` 💬3
- [#159406](https://github.com/NousResearch/hermes-agent/issues/159406) skills_guard: a lone surrogate crashes `_scan_text` / `scan_file` (UnicodeEncodeError from stdlib tokenize) `type/bug` `comp/tools` `tool/skills` `P4` 💬2
- [#159209](https://github.com/NousResearch/hermes-agent/issues/159209) --version health probe runs git status over the install worktree and can pin every core `type/perf` `comp/agent` `comp/cli` `P2` 💬2
- [#159438](https://github.com/NousResearch/hermes-agent/issues/159438) [Bug]: After the gateway dies mid-command, the resumed session no longer shows the call, and models run it again `type/bug` `comp/agent` `tool/terminal` `P2` 💬2
- [#159408](https://github.com/NousResearch/hermes-agent/issues/159408) Telegram: MEDIA tag with spaces in path double-delivers the same file (Windows) `type/bug` `comp/gateway` `platform/telegram` `P2` 💬1
- [#159335](https://github.com/NousResearch/hermes-agent/issues/159335) Gateway emits bare Infinity in JSON-RPC responses (profiles.list) — strict-JSON clients fail to parse and reconnect-loop `type/bug` `comp/gateway` `P2` `area/profiles` 💬1
- [#159515](https://github.com/NousResearch/hermes-agent/issues/159515) [Bug]: Desktop Capabilities → Skills blocks the main thread ~1.7 s on open — section list does a full catalog scan per category `type/perf` `tool/skills` `P2` `comp/desktop`
- [#159488](https://github.com/NousResearch/hermes-agent/issues/159488) local-model estimator under-measures free VRAM in WSL2 (nvidia-smi), forcing wrongful CPU spill `type/perf` `comp/cli` `P2` `area/local-models`
- [#159510](https://github.com/NousResearch/hermes-agent/issues/159510) [Feature]: Add identity-pinned plugin message injection `type/security` `comp/gateway` `P3` `area/sessions`
- [#159506](https://github.com/NousResearch/hermes-agent/issues/159506) [Security] stable-desktop image contains three known unpatched vulnerabilities `type/security` `P3` `area/install-update`
- [#159505](https://github.com/NousResearch/hermes-agent/issues/159505) Typed final disposition for conversational refusals on the committed turn result `type/feature` `comp/agent` `P3` `area/sessions`
- [#159501](https://github.com/NousResearch/hermes-agent/issues/159501) [Bug] Desktop token-mode remote connection: WS dials with ?token= but REST calls send no auth header (401 on /api/profiles, /api/config) `type/bug` `area/auth` `P3` `comp/desktop`
- [#159500](https://github.com/NousResearch/hermes-agent/issues/159500) [Bug] Webapp /login succeeds on the loopback listener but the session cookie authorizes nothing (REST 401, dead end) `type/bug` `comp/gateway` `area/auth` `P3`
- [#159499](https://github.com/NousResearch/hermes-agent/issues/159499) [Feature]: Edited files have no reliable click-to-preview card in chat — changed-files card should open the rendered preview `type/feature` `tool/file` `tool/delegate` `P3`
- [#159497](https://github.com/NousResearch/hermes-agent/issues/159497) Profile delete on Windows fails (WinError 32): profile's plugin_host_child not stopped, survives app restart; desktop then spams DELETE retries `type/bug` `comp/cli` `P2` `area/profiles`
- [#159492](https://github.com/NousResearch/hermes-agent/issues/159492) [Bug][Desktop] Show earlier exposes hidden internal prompts as user messages `type/bug` `P2` `comp/desktop` `desktop/chat`
- [#159470](https://github.com/NousResearch/hermes-agent/issues/159470) /model switch to a custom provider whose name has spaces fails with model_resolution_failed (and --global can persist a corrupted model.default) `type/bug` `comp/cli` `area/config` `P2`
- [#159459](https://github.com/NousResearch/hermes-agent/issues/159459) [Bug]: Discord progress cleanup can delete messages without complete final delivery `type/bug` `comp/gateway` `comp/plugins` `platform/discord`
- [#159456](https://github.com/NousResearch/hermes-agent/issues/159456) [Bug]: Telegram gateway times out while standalone requests from same venv succeed (macOS) `type/bug` `comp/gateway` `comp/plugins` `platform/telegram`

#### 🔒 Closed Issues
- [#17199](https://github.com/NousResearch/hermes-agent/issues/17199) deepseek provider: model normalization and base_url override break custom endpoints (e.g. Volcengine ARK)
- [#5197](https://github.com/NousResearch/hermes-agent/issues/5197) Automatically run "npm audit" to identify security issues
- [#24782](https://github.com/NousResearch/hermes-agent/issues/24782) [Bug]: [subagent] Fallback model uses parent's base_url instead of fallback's base_url
- [#14614](https://github.com/NousResearch/hermes-agent/issues/14614) resolve_alias() reverse lookup returns wrong provider when multiple providers share the same model
- [#28992](https://github.com/NousResearch/hermes-agent/issues/28992) [Feature]: Use -z (oneshot) mode for kanban worker spawn instead of chat -q
- [#22754](https://github.com/NousResearch/hermes-agent/issues/22754) Feature: Make unconditional blocklist configurable (default: disabled)
- [#24284](https://github.com/NousResearch/hermes-agent/issues/24284) Allow cron jobs to safely self-schedule or opt into cronjob tool access
- [#24092](https://github.com/NousResearch/hermes-agent/issues/24092) [Bug]: fallback_providers with provider: custom + explicit base_url falls back to OpenRouter when main model.provider is a named provider
- [#20984](https://github.com/NousResearch/hermes-agent/issues/20984) feat: add cron_mode: allowlist to restrict cron jobs to command_allowlist only
- [#17497](https://github.com/NousResearch/hermes-agent/issues/17497) Research disclosure: static review observations for agent-facing skill artifacts
- [#155854](https://github.com/NousResearch/hermes-agent/issues/155854) hermes_tools.search_files docstring promises `matches` but densified ≥5-match responses omit the key entirely

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,448 · **Open issues:** 11,039 · **Last push:** <1h ago

On November 24, 2026, there were no new releases for vLLM; however, significant advancements were made with several critical PRs merged. Notable updates included performance enhancements to the FlashInfer prefill checkpoint states, bug fixes addressing the Mistral Large cache configuration, and improved features for HY4 Flash and MoE with various backend optimizations. Among the new issues, a performance concern was raised regarding the CPU backend, which highlighted decoding speeds approximately 1.6x slower on 2-core machines since version 0.20.0. While the day was mainly routine maintenance, the merging of enhancements for both performance and bug fixes remains crucial for ongoing improvements in the ecosystem.

#### ✅ Merged PRs
- [#69401](https://github.com/vllm-project/vllm/pull/69401) [Perf][GDN] Write only the used FlashInfer prefill checkpoint states
- [#68103](https://github.com/vllm-project/vllm/pull/68103) [Bugfix][Model] Port Mistral Large 4 NVIDIA indexer cache to get_kv_cache_config
- [#69529](https://github.com/vllm-project/vllm/pull/69529) [Perf][Qwen4Exp] Add SM100 TP=2 and TP=8 skinny GEMM plans
- [#69475](https://github.com/vllm-project/vllm/pull/69475) [Bugfix][Config] Keep host-only renderer, timeout, and recovery fields out of compile cache key
- [#62268](https://github.com/vllm-project/vllm/pull/62268) [Bugfix] Guard Conch W4A16 preconditions and pad non-tile-multiple outputs
- [#65365](https://github.com/vllm-project/vllm/pull/65365) [Bugfix][CPU] DeepSeek-V4: return all layer types from the CPU tile scheduler
- [#69503](https://github.com/vllm-project/vllm/pull/69503) [CI] Let auto-rebase ignore per-step ci/step statuses
- [#69509](https://github.com/vllm-project/vllm/pull/69509) [CI][XPU] Enable batch invariance for OLMoE LoRA tests
- [#69520](https://github.com/vllm-project/vllm/pull/69520) [Startup] Keep Inductor and Dynamo imports off the non-compiled path
- [#69426](https://github.com/vllm-project/vllm/pull/69426) [EPD] Support metadata-only images and videos for HY4 and HY4 Flash
- [#68808](https://github.com/vllm-project/vllm/pull/68808) [Rust Frontend] Serve Nemotron VL and Omni multimodal inputs
- [#69374](https://github.com/vllm-project/vllm/pull/69374) [CI][ROCm] Spawn the GPU memory wait worker
- [#68661](https://github.com/vllm-project/vllm/pull/68661) [HY4 Flash][MoE] Allow passthrough all2all backend with DP
- [#69122](https://github.com/vllm-project/vllm/pull/69122) [Perf][Qwen4Exp] Small NVIDIA-path wins: HC expand via cat, GDN ba overlap, fused HC mix from M=48
- [#69437](https://github.com/vllm-project/vllm/pull/69437) [Governance] Add Taneem Ibrahim as a pooling committer
- [#64796](https://github.com/vllm-project/vllm/pull/64796) [CI] Turn automatic sharding on by default
- [#69425](https://github.com/vllm-project/vllm/pull/69425) [Recipe] Update ERNIE recipe Support ERNIE 5.5 Flash Preview
- [#65474](https://github.com/vllm-project/vllm/pull/65474) [ROCm][Perf][Qwen4Exp] Tune QSA sparse GQA and indexer on gfx942 and gfx950
- [#69513](https://github.com/vllm-project/vllm/pull/69513) [CI] Switch vllm-runners callers to @main reusable workflows (step 2/2)
- [#69510](https://github.com/vllm-project/vllm/pull/69510) [CI] Add reusable workflows for vllm-runners (step 1/2)
- [#67185](https://github.com/vllm-project/vllm/pull/67185) [Bugfix][HiSparse] Reclaim resident pages before allocating the next prefill chunk
- [#69483](https://github.com/vllm-project/vllm/pull/69483) [Refactor] Remove dead code quantizations
- [#69497](https://github.com/vllm-project/vllm/pull/69497) [CI] Don't treat a finished build left blocked by the test picker as running
- [#60961](https://github.com/vllm-project/vllm/pull/60961) [Bugfix][Kernel] Validate decode top-k runtime width
- [#66456](https://github.com/vllm-project/vllm/pull/66456) [MoE][Kernel] Support MXFP8 in FlashInfer CuteDSL batched experts for DeepEP low-latency
- [#69056](https://github.com/vllm-project/vllm/pull/69056) [ROCm][CI] Cache a PR's ROCm base image automatically before merge
- [#63590](https://github.com/vllm-project/vllm/pull/63590) [Perf][Kernel] AWQ: vectorize the output store in dequantize_weights
- [#69446](https://github.com/vllm-project/vllm/pull/69446) [Bugfix][DSv4.1] Keep MXFP8 linear weights in FP8 on SM90 at TP1
- [#68944](https://github.com/vllm-project/vllm/pull/68944) [Bugfix] Fix oversized piecewise CUDA graphs for Gemma3n cross-decoder
- [#69416](https://github.com/vllm-project/vllm/pull/69416) [CI] Retry gcc-15 downloads from the Launchpad PPA in the CPU image
- [#68368](https://github.com/vllm-project/vllm/pull/68368) [Feature][GDN] Reuse Qwen GDN for OLMo Hybrid prefill checkpoints
- [#69001](https://github.com/vllm-project/vllm/pull/69001) [Perf][GLM-5.3-Flash] Enable fused all-reduce + mHC + RMSNorm on Hopper, 8.7%E2E Throughput Improvement
- [#68521](https://github.com/vllm-project/vllm/pull/68521) [Bugfix][Kernel] Restrict `TRITON_ATTN` tensor-descriptor path to XPU
- [#60800](https://github.com/vllm-project/vllm/pull/60800) [Bugfix][Mamba] Warm up the SSD kernels on a prefill-sized sequence
- [#67301](https://github.com/vllm-project/vllm/pull/67301) [Bugfix][KV Connector] Fix HF3FS storage rank derivation with pipeline parallelism
- [#68674](https://github.com/vllm-project/vllm/pull/68674) [Bugfix][Tracing] Collect request stats when OTLP tracing is enabled
- [#69468](https://github.com/vllm-project/vllm/pull/69468) [Bugfix] Only inject `cohere_format` default chat-template kwarg in Cohere tokenizer mode
- [#69472](https://github.com/vllm-project/vllm/pull/69472) [Docs] Fix HY4 Flash IndexPool API reference warnings
- [#69085](https://github.com/vllm-project/vllm/pull/69085) [ROCm][Bugfix] Fix precision loss in asymmetric int8 linear layers on ROCm
- [#67957](https://github.com/vllm-project/vllm/pull/67957) [Bugfix][Mooncake] Stop reloading from the store after a failed load
- [#55520](https://github.com/vllm-project/vllm/pull/55520) [Bugfix][DeepSeek V4] Keep input IDs on later pipeline stages

#### 🐛 New Issues
- [#69464](https://github.com/vllm-project/vllm/issues/69464) [Performance]: CPU backend reserves a core for the scheduler process since v0.20.0 (#36487), decode ~1.6x slower on 2-core machines `cpu` `scheduler` 💬3
- [#69358](https://github.com/vllm-project/vllm/issues/69358) [Bug]: Built-in LMCacheConnectorV1 broken with declared dependency range lmcache>=0.5.6 (latest 0.5.8 removed lmcache.integration.vllm.vllm_v1_adapter) `kv-connector` 💬3
- [#69352](https://github.com/vllm-project/vllm/issues/69352) [Bug]: SHM multimodal cache — cancelled request stops cache reuse `multi-modality` 💬3
- [#69439](https://github.com/vllm-project/vllm/issues/69439) [RFC] A Reusable KV Compression Layer for Transfer and Storage 💬2
- [#69490](https://github.com/vllm-project/vllm/issues/69490) [XPU][INC] Should `VLLM_XPU_INC_WNA16_BACKEND=auto` keep selecting ARK for sym int4 on Arc Pro B70? w4a16 decodes 17–33% faster end to end `intel-gpu` 💬1
- [#69473](https://github.com/vllm-project/vllm/issues/69473) [Bug]: Qwen3-VL video prompt nests the per-frame vision markers inside an outer pair with transformers >= 5.10 💬1
- [#69396](https://github.com/vllm-project/vllm/issues/69396) [Bug]: SHM multimodal processor cache: preempted image request resumes with a stale handle and kills EngineCore `multi-modality` 💬1
- [#69388](https://github.com/vllm-project/vllm/issues/69388) [Bug]: FBGEMM & ModelOpt per-channel FP8 emit kFp8StaticTokenSym, bypassing ROCm AITER linear kernels `rocm` `quantization` 💬1
- [#69381](https://github.com/vllm-project/vllm/issues/69381) [Performance][ROCm] ROCM_AITER_FA: host and copy overhead on prefill and extend steps `rocm` 💬1
- [#69350](https://github.com/vllm-project/vllm/issues/69350) [Bug]: FlashInfer 0.7.6rc1 compatibility blocked by cuDNN Frontend <1.33 cap 💬1
- [#69569](https://github.com/vllm-project/vllm/issues/69569) [Feature]: HY4 Flash sparse attention on NVIDIA Ada (SM89 / RTX 4090) `nvidia`
- [#69568](https://github.com/vllm-project/vllm/issues/69568) [RFC]: Grammar-as-a-Drafter (GaaD): Composing Grammar-Forced Tokens with Speculative Decoding `structured-output` `speculative-decoding`
- [#69554](https://github.com/vllm-project/vllm/issues/69554) [Bug]: P2P KV offload: a batched-prompt request with one shared transfer ID kills EngineCore
- [#69498](https://github.com/vllm-project/vllm/issues/69498) [Bug]: MoEPermuteScratch crashes on an empty first batch
- [#69489](https://github.com/vllm-project/vllm/issues/69489) [Security]: vLLM 0.33.0 FastAPI upper bound blocks the fix for GHSA-f56c-v883-vx8r `bug`
- [#69459](https://github.com/vllm-project/vllm/issues/69459) [Bug]: Codex code mode: namespaced grammar custom tool functions.exec is dropped from Responses requests `bug` `structured-output` `tool-calling`
- [#69451](https://github.com/vllm-project/vllm/issues/69451) [Bug]: Inkling 2: Triton %16 recompiles of prefill attention and attention prologue stall the engine for seconds after a cold start `inkling`
- [#69421](https://github.com/vllm-project/vllm/issues/69421) [Bug]: Hy4 DFly rejects SimpleCPUOffloadConnector as PD disaggregation `kv-connector`
- [#69420](https://github.com/vllm-project/vllm/issues/69420) [Bug]: Lazy SimpleCPUOffloadConnector evicts cached blocks without a CPU copy while stores are in flight
- [#69407](https://github.com/vllm-project/vllm/issues/69407) [Bug][KV Offload][P2P]: access_mode=read on a PD prefiller stalls every decoder fetch for the 30 s load timeout
- [#69418](https://github.com/vllm-project/vllm/issues/69418) [Performance]: Synchronized attention-page growth causes decode preemption on Qwen3.5 without MTP
- [#69417](https://github.com/vllm-project/vllm/issues/69417) [Feature]: Support RWKV-7 (Goose) as a model plugin via the V1 Mamba state cache
- [#69408](https://github.com/vllm-project/vllm/issues/69408) [Performance]: Parallel sampling (n>1) is 10–14% slower in v0.34.0 than v0.28.0; n=1 unchanged
- [#69403](https://github.com/vllm-project/vllm/issues/69403) [Bug]: Hy4-flash Engram hashes padded-vocab ids wrongly; microbatching is not rejected
- [#69391](https://github.com/vllm-project/vllm/issues/69391) [Feature]: Add native block-diffusion support for Clover-35B-A3B-Preview
- [#69377](https://github.com/vllm-project/vllm/issues/69377) [Bug][XPU][INC] ARK weight post-processing fragments the allocator (~9.5 GiB reserved, unused); Qwen3.6-27B-int4-AutoRound cannot boot on one 32 GB B70 `intel-gpu`
- [#69375](https://github.com/vllm-project/vllm/issues/69375) [Perf][Spec Decode] Support draft windows above 8 tokens in GDN/KDA spec-decode kernels (T=9 for DSpark, T=16 for DFlash/DSpine) `kimi`
- [#69361](https://github.com/vllm-project/vllm/issues/69361) [Perf][Frontend] Use orjson and reduce logging overhead for ORCA JSON headers

#### 🔒 Closed Issues
- [#68647](https://github.com/vllm-project/vllm/issues/68647) [Bug]: DSV4.1 Model weight memory increased from ~47 GiB to ~60 GiB per GPU between two nightlies (11.12 nightly and 11.18 nightly) H100
- [#68833](https://github.com/vllm-project/vllm/issues/68833) [Bug]: The faulthandler.dump_traceback used in the Watchdog can print stack traces for only 100 threads.
- [#64704](https://github.com/vllm-project/vllm/issues/64704) [Bug]: PyTorch `.bin` checkpoints can silently lose a distinct `lm_head` when embeddings are configured as tied
- [#53658](https://github.com/vllm-project/vllm/issues/53658) [Bug]: FULL cudagraph dummy runs set seq_lens > max_model_len, overrunning the block table (TRITON_ATTN illegal memory access; FLEX_ATTENTION shape error)
- [#66437](https://github.com/vllm-project/vllm/issues/66437) [Bug]: HummingLinearKernel (W4A16) computes wrong output for group sizes that don't tile its K-blocks; can_implement has no group-size check
- [#63793](https://github.com/vllm-project/vllm/issues/63793) [Bug]: DeepSeek-V4.1 with block FP8 MoE activations fails on Hopper at TP=4/8 (Humming partial input-scale group)
- [#60829](https://github.com/vllm-project/vllm/issues/60829) [Bug]: `top_k_per_row_decode` raises an illegal memory access for runtime topK > 8192 instead of a clean error
- [#68433](https://github.com/vllm-project/vllm/issues/68433) [Bug]: enabling OTLP tracing with offline LLM default statistics settings crashes request completion
- [#69217](https://github.com/vllm-project/vllm/issues/69217) [Bug]: vllm 0.34 fails to load model: Audar ASR Turbo
- [#58675](https://github.com/vllm-project/vllm/issues/58675) [Bug]: `--hf-overrides '{"rope_scaling": ...}'` drops `rope_theta` under Transformers v5; models without a per-file default silently run with base 10000
- [#69279](https://github.com/vllm-project/vllm/issues/69279) [Bug]: --hf-overrides '{"rope_theta": N}' is accepted silently but has no effect on Qwen3 (the value lives under rope_parameters)
- [#68601](https://github.com/vllm-project/vllm/issues/68601) [Bug]: `/v1/completions` with `echo` + `logprobs` returns HTTP 500 `IndexError: list index out of range` when the request is aborted before its prompt is processed
- [#69335](https://github.com/vllm-project/vllm/issues/69335) [Performance]: DSpark reuses fewer cached prefix tokens on Qwen3.5-35B-A3B during multi-turn SWE replay
- [#69024](https://github.com/vllm-project/vllm/issues/69024) [Bug]: KV offload, hybrid models: after a request loads a prompt-tail checkpoint from the CPU tier, the rest of that chunk is never stored
- [#65364](https://github.com/vllm-project/vllm/issues/65364) [Bug]: [CPU] DeepSeek-V4 fails at the first decode step with KeyError: 'c1a'
- [#69407](https://github.com/vllm-project/vllm/issues/69407) [Bug][KV Offload][P2P]: access_mode=read on a PD prefiller stalls every decoder fetch for the 30 s load timeout

### SGLang (`sgl-project/sglang`)

**Stars:** 39,000 · **Open issues:** 7,265 · **Last push:** <1h ago

There were no new releases for SGLang on November 24, 2026, but several important updates were merged. Key developments included PR #51251, which enhances CI testing for the Intel XPU with an automated bisecting process, and improvements to the documentation in PRs #51951 and #52754, which standardize hardware identifiers and update recipes for the ERNIE 5.5 Flash. Performance and bug fixes also featured prominently, notably in the AMD-related PRs #49347 and #52644, which optimize operations for the gfx1250 architecture and Triton MoE runner respectively. Additionally, new issues were raised, with #52612 highlighting a bug in the Kimi-K3 reasoning parser that shortens answers, drawing attention to potential challenges ahead in maintaining robust system performance.

#### ✅ Merged PRs
- [#51251](https://github.com/sgl-project/sglang/pull/51251) [CI] [Intel] ci/xpu: Run PR Test (XPU) every 6 hours with auto-bisect
- [#51951](https://github.com/sgl-project/sglang/pull/51951) [Doc] cookbook: Use one hardware id, rtxpro6000, for the RTX PRO 6000
- [#52754](https://github.com/sgl-project/sglang/pull/52754) [Doc] cookbook: Point the ERNIE 5.5 Flash recipes at the Preview ckpt
- [#49347](https://github.com/sgl-project/sglang/pull/49347) [Perf] [AMD] mla: Read the fused_qkv_a slices in place in the gfx1250 q_a / kv_a RMSNorm, one launch
- [#48154](https://github.com/sgl-project/sglang/pull/48154) [Perf] [AMD] mla: Use the gfx950 aiter RoPE, RMSNorm and MLA KV-row paths on gfx1250
- [#52652](https://github.com/sgl-project/sglang/pull/52652) [CI] pr-test: Run on pull_request_target with a one-shot, commit-bound run-ci
- [#52753](https://github.com/sgl-project/sglang/pull/52753) [CI] pr-test: Allow the gated fork-PR checkout under pull_request_target
- [#52111](https://github.com/sgl-project/sglang/pull/52111) [Fix] benchmark: Use current SGLang and vLLM fused MoE APIs
- [#51721](https://github.com/sgl-project/sglang/pull/51721) [Feat] cp: Replay zigzag prefill CP breakable graph on PP stages
- [#52535](https://github.com/sgl-project/sglang/pull/52535) [Chore] [AMD] aiter: Bump gfx1250 AITER pin to 58b435276
- [#52635](https://github.com/sgl-project/sglang/pull/52635) [Fix] processor: render an explicit Kimi K3 tool_choice="none" without tools
- [#48940](https://github.com/sgl-project/sglang/pull/48940) [Fix] sgl-router: Honor --cache-pending-prefix-consult-below under reorg routing
- [#52411](https://github.com/sgl-project/sglang/pull/52411) [CI] ci: Mask Hugging Face tokens in CUDA job logs and keep them out of lmms-eval
- [#52488](https://github.com/sgl-project/sglang/pull/52488) [Doc] README: Put the adoption logo wall on a white background
- [#52644](https://github.com/sgl-project/sglang/pull/52644) [Fix] [AMD] moe: Fall back to the Triton MoE runner on gfx1250 for FP8 and BF16 experts
- [#52626](https://github.com/sgl-project/sglang/pull/52626) [Doc] cookbook: Update ERNIE 5.5 Flash for the Preview release
- [#52710](https://github.com/sgl-project/sglang/pull/52710) [CI] [NPU] docker: Bump SGLANG_KERNEL_NPU_TAG to post14
- [#52643](https://github.com/sgl-project/sglang/pull/52643) [Feat] [NVIDIA] kda: Run the FlashInfer KDA prefill on SM107
- [#49462](https://github.com/sgl-project/sglang/pull/49462) [Perf] linker: Build Mooncake grouped load range metadata with numpy
- [#52706](https://github.com/sgl-project/sglang/pull/52706) [CI] pr-gate: Gate MLU and sgl-router on per-commit approval; move sgl-router to pull_request_target
- [#46177](https://github.com/sgl-project/sglang/pull/46177) [Fix] jit: Fix permanent cache misses behind a symlinked cache dir
- [#52690](https://github.com/sgl-project/sglang/pull/52690) [CI] run-ci: Approve commits by command only, with CI_PERMISSIONS.json as the approver source; prune the file
- [#47618](https://github.com/sgl-project/sglang/pull/47618) [Fix] pd: Release PP prefill transfers via PP0 decision once every stage concludes
- [#50622](https://github.com/sgl-project/sglang/pull/50622) [Perf] QSA: build the extend row map from the host lengths instead of reading its size back
- [#50065](https://github.com/sgl-project/sglang/pull/50065) [Feat] muse_spark: Support expert TP (`--ep-size 1`) for NVFP4 checkpoints
- [#51512](https://github.com/sgl-project/sglang/pull/51512) [Feat] flashinfer-autotune: Persist single-rank tactics in FlashInfer's managed v2 store
- [#52687](https://github.com/sgl-project/sglang/pull/52687) [CI] ci-lark-notify: Remove the runner-health card
- [#52663](https://github.com/sgl-project/sglang/pull/52663) [Fix] sgl-router: Bump url to 2.5.9 for RUSTSEC-2026-0592
- [#52651](https://github.com/sgl-project/sglang/pull/52651) [CI] slash-command-handler: always run the handler from the default branch
- [#52510](https://github.com/sgl-project/sglang/pull/52510) [Fix] scheduler: Release finished prefill requests before observers defer responses

#### 🐛 New Issues
- [#52612](https://github.com/sgl-project/sglang/issues/52612) [Bug] Kimi-K3: a marker quoted in the answer cuts it short or is dropped with --reasoning-parser kimi_k3 💬3
- [#52575](https://github.com/sgl-project/sglang/issues/52575) [Bug] sgl-kv-indexer: a prefix query holds the single RwLock read guard for the whole scan, starving apply 💬2
- [#52483](https://github.com/sgl-project/sglang/issues/52483) [Bug] --max-running-requests 0 or negative is silently clamped to 1 💬2
- [#52506](https://github.com/sgl-project/sglang/issues/52506) DSPARK draft MoE crashes on SM120: HybridFp8NvFp4Config unconditionally uses TRT-LLM-gen (sm100-only cubins) for MTP layers
- [#52523](https://github.com/sgl-project/sglang/issues/52523) [NPU] [Roadmap] Optimization of GLM-5.2 (DSA / sparse-MLA) inference on Ascend NPU
- [#52759](https://github.com/sgl-project/sglang/issues/52759) [Feature] Validate DeepSeek-OCR-2 accuracy on Xeon CPU and add a nightly test
- [#52762](https://github.com/sgl-project/sglang/issues/52762) [Feature] diffusion: Q4 roadmap proposal: fast MiniMax-H3 image ↔ video switching on consumer GPUs
- [#52761](https://github.com/sgl-project/sglang/issues/52761) [Bug] [Diffusion] MiniMax-H3-Image does not start on a 24 GB GPU + 32 GB host (plain command and derived 4090 recipe)
- [#52736](https://github.com/sgl-project/sglang/issues/52736) [Feature] Align deterministic Triton decode and single-chain EAGLE3 verification for reproducible greedy output
- [#52732](https://github.com/sgl-project/sglang/issues/52732) DeepSeek-V4.1 CP8 + Mooncake: eliminate external KV storage amplification with per-pool sharing and SWA replay
- [#52720](https://github.com/sgl-project/sglang/issues/52720) [Bug] Hybrid cache: the second turn of a chat prefills the whole prompt again on Qwen3.5 / Qwen3.8
- [#52694](https://github.com/sgl-project/sglang/issues/52694) [Feature] HiCache: make L3 an overflow (victim) tier of L2 instead of a mirror
- [#52684](https://github.com/sgl-project/sglang/issues/52684) [Bug] sgl-kernel: apply_shuffle_mul_sum crashes on empty, narrow or unaligned inputs
- [#52664](https://github.com/sgl-project/sglang/issues/52664) [Bug] cache_aware prefix tree ignores cache_salt
- [#52659](https://github.com/sgl-project/sglang/issues/52659) [Feature] ModelOpt NVFP4 checkpoints: opt-in load-time block-FP8 for BF16 dense layers
- [#52649](https://github.com/sgl-project/sglang/issues/52649) [Bug] Responses API drops images from function_call_output
- [#52647](https://github.com/sgl-project/sglang/issues/52647) [Bug] Gemma 4 non-streaming responses leak tool-call markup when max_tokens cuts the call
- [#52619](https://github.com/sgl-project/sglang/issues/52619) [Roadmap] Fully asynchronous pipeline-parallel prefill (AsyncPP)
- [#52618](https://github.com/sgl-project/sglang/issues/52618) [Bug] /v1/classify returns probs=[1.0] for every input on single-output models (reward, binary and regression heads)
- [#52615](https://github.com/sgl-project/sglang/issues/52615) [Tracking] [AMD] MiMo-V2.6 serving performance on AMD Instinct MI355X (gfx950)
- [#52574](https://github.com/sgl-project/sglang/issues/52574) [NPU] [Roadmap] DeepSeek-V4.1 Ascend Development & Optimization
- [#52555](https://github.com/sgl-project/sglang/issues/52555) [Feature] How to use DeepEP transfer Engram fragments likely DeepInfer?
- [#52546](https://github.com/sgl-project/sglang/issues/52546) [Bug] DFLASH: start-up sampling rehearsal OOMs at memory fractions where serving fits
- [#52543](https://github.com/sgl-project/sglang/issues/52543) [Bug] multimodal_gen: Unfiltered `diffusers_kwargs` in `POST /v1/videos` allows validation bypass and GPU OOM
- [#52514](https://github.com/sgl-project/sglang/issues/52514) [Bug] NGRAM speculative decoding on a PD decode worker crashes at startup since v0.5.14: `build_disagg_draft_input` has no NGRAM branch (works on v0.5.13)
- [#52501](https://github.com/sgl-project/sglang/issues/52501) [Bug] DeepSeek-V4.1 MegaMoE BCG tail capture calls full_like on absent DP counts
- [#52489](https://github.com/sgl-project/sglang/issues/52489) [Bug] multimodal_gen: AttributeError: 'DiffusersTI2VPipelineConfig' object has no attribute 'distilled_sigmas' when serving Cosmos3-Edge with --backend diffusers
- [#52482](https://github.com/sgl-project/sglang/issues/52482) [Bug] --radix-eviction-policy priority silently degrades to LRU without --enable-priority-scheduling
- [#52481](https://github.com/sgl-project/sglang/issues/52481) [Bug] Negative --priority-scheduling-preemption-threshold livelocks same-priority requests

#### 🔒 Closed Issues
- [#21065](https://github.com/sgl-project/sglang/issues/21065) CI Maintenance Mode
- [#40360](https://github.com/sgl-project/sglang/issues/40360) [Bug] Cache request finalization is tied to cache_finished_req: aborted LMCache sessions can leak
- [#40144](https://github.com/sgl-project/sglang/issues/40144) [Bug] DFLASH draft layout is assumed, not validated: anchor-first checkpoints shift every position silently
- [#40995](https://github.com/sgl-project/sglang/issues/40995) [Feature] EFA SGLang image should work out of the box on AWS NVIDIA GPUs (NIXL & Mooncake)
- [#40959](https://github.com/sgl-project/sglang/issues/40959) [Bug] Anthropic `/v1/messages`: prior-turn thinking is spliced into content, which breaks the Qwen3.8 chat template (empty `<think>` + inline `<think>…</think>`); model starts emitting `</think>` as visible text
- [#34419](https://github.com/sgl-project/sglang/issues/34419) [Bug] [Security tracking] Private advisory GHSA-8374-wrr5-7q7f has received no maintainer response
- [#41038](https://github.com/sgl-project/sglang/issues/41038) [Bug] Mooncake DFlash draft KV transfer fails with asymmetric P/D TP on GLM-5.3-Flash
- [#41148](https://github.com/sgl-project/sglang/issues/41148) [Feature] Incremental chat-prompt processing: stop re-tokenizing the whole history on every turn
- [#41129](https://github.com/sgl-project/sglang/issues/41129) [Feature] Support configurable retention for request log files
- [#41124](https://github.com/sgl-project/sglang/issues/41124) penalties use one step stale history under the overlap scheduler
- [#41089](https://github.com/sgl-project/sglang/issues/41089) [Bug] /v1/responses drops the request priority
- [#41077](https://github.com/sgl-project/sglang/issues/41077) [Bug] DWDP: expert weight copy peaks at 2x local expert memory, causing OOM at startup
- [#41070](https://github.com/sgl-project/sglang/issues/41070) [Feature][Spec][XPU] Honor rejection sampling in EAGLE chain verification
- [#51103](https://github.com/sgl-project/sglang/issues/51103) [Bug] `fused_moe_router_shim`: softcapped router weights are NaN for large finite logits
- [#52759](https://github.com/sgl-project/sglang/issues/52759) [Feature] Validate DeepSeek-OCR-2 accuracy on Xeon CPU and add a nightly test
- [#52108](https://github.com/sgl-project/sglang/issues/52108) [Bug] benchmark_vllm_vs_sglang_fused_moe_triton.py calls fused_moe with an outdated signature
- [#50091](https://github.com/sgl-project/sglang/issues/50091) [Bug] [PPU] DeepSeek-V4.1 (fp4 experts) cannot be served on T-HEAD SAIL with main

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 136,114 · **Open issues:** 2,656 · **Last push:** <1h ago

On November 24, 2026, several new versions of llama.cpp were released, including b12670, which focused on compact bias optimizations for FLASH_ATTN_EXT, and b12669, which introduced an option to automatically select optimal quantization types. Additionally, b12668 enhanced Metal support for BF16/F32 operations, and b12661 added ROLL support for WebGPU. Significant merged features included improvements to OpenCL and UI enhancements, including the removal of the Matte theme and support for grouping agentic replies. Notably, a new issue raised concerns about illegal memory access in CUDA under specific conditions (#32900), which may impact user applications.

#### 🚀 New Releases
- [b12670](https://github.com/ggml-org/llama.cpp/releases/tag/b12670) b12670
- [b12669](https://github.com/ggml-org/llama.cpp/releases/tag/b12669) b12669
- [b12668](https://github.com/ggml-org/llama.cpp/releases/tag/b12668) b12668
- [b12667](https://github.com/ggml-org/llama.cpp/releases/tag/b12667) b12667
- [b12662](https://github.com/ggml-org/llama.cpp/releases/tag/b12662) b12662
- [b12659](https://github.com/ggml-org/llama.cpp/releases/tag/b12659) b12659
- [b12658](https://github.com/ggml-org/llama.cpp/releases/tag/b12658) b12658
- [b12657](https://github.com/ggml-org/llama.cpp/releases/tag/b12657) b12657
- [b12655](https://github.com/ggml-org/llama.cpp/releases/tag/b12655) b12655
- [b12651](https://github.com/ggml-org/llama.cpp/releases/tag/b12651) b12651

#### ✅ Merged PRs
- [#32747](https://github.com/ggml-org/llama.cpp/pull/32747) opencl: fix GDN QK offsets
- [#32909](https://github.com/ggml-org/llama.cpp/pull/32909) opencl: add q6_k coopk c8 GEMM for up to n=8 spec verify
- [#31669](https://github.com/ggml-org/llama.cpp/pull/31669) GDN: use replay instead of rollback
- [#32914](https://github.com/ggml-org/llama.cpp/pull/32914) Quick CI failure fixes
- [#32902](https://github.com/ggml-org/llama.cpp/pull/32902) quantize : make local consts static for MSVC
- [#15550](https://github.com/ggml-org/llama.cpp/pull/15550) quantize: add option to automatically choose optimal quant types to reach a file/bpw target size at lowest error
- [#32906](https://github.com/ggml-org/llama.cpp/pull/32906) ui: remove the Matte theme and the Light surfaces setting
- [#32828](https://github.com/ggml-org/llama.cpp/pull/32828) server : preserve a prompt-cache entry until restores succeed
- [#31759](https://github.com/ggml-org/llama.cpp/pull/31759) opencl: fetch the Adreno binary kernel library at configure time for Windows on Snapdragon
- [#32894](https://github.com/ggml-org/llama.cpp/pull/32894) server: ask exec_shell_command for a short description of the command
- [#32879](https://github.com/ggml-org/llama.cpp/pull/32879) ui: show an agentic reply as a grouped Agent Trace
- [#32892](https://github.com/ggml-org/llama.cpp/pull/32892) ui: set code in messages at the size of the text around it
- [#32824](https://github.com/ggml-org/llama.cpp/pull/32824) metal : batch concat rows and copy them in vector chunks
- [#32825](https://github.com/ggml-org/llama.cpp/pull/32825) metal : add NVFP4 support
- [#32873](https://github.com/ggml-org/llama.cpp/pull/32873) ui: smooth height transition for every collapsible
- [#32740](https://github.com/ggml-org/llama.cpp/pull/32740) ggml: compact bias on the existing FLASH_ATTN_EXT
- [#32881](https://github.com/ggml-org/llama.cpp/pull/32881) ui: unmount a closed collapsible's body after one transition
- [#32677](https://github.com/ggml-org/llama.cpp/pull/32677) llama, metal : support BF16/F32 src1 for MUL_MAT and MUL_MAT_ID
- [#32738](https://github.com/ggml-org/llama.cpp/pull/32738) ui: drop tool calls cut off by Stop from the next request
- [#31815](https://github.com/ggml-org/llama.cpp/pull/31815) metal: increase default command buffers on iPhone
- [#32856](https://github.com/ggml-org/llama.cpp/pull/32856) ui: use a red edge on the send button's error state
- [#32890](https://github.com/ggml-org/llama.cpp/pull/32890) ui: name the PWA from the build env and default it to Llama Chat
- [#32861](https://github.com/ggml-org/llama.cpp/pull/32861) ggml-openvino: CI fixes, new model support, fixes and improvements.
- [#32651](https://github.com/ggml-org/llama.cpp/pull/32651) rpc : typed request helpers and a single validation step on the server
- [#32566](https://github.com/ggml-org/llama.cpp/pull/32566) ggml-cuda : handle zero blocks in few-row MMQ quantization
- [#32605](https://github.com/ggml-org/llama.cpp/pull/32605) cmake: treat kleidiai files as vendored
- [#32845](https://github.com/ggml-org/llama.cpp/pull/32845) tests : update Qwen3.6-27B snapshot
- [#32864](https://github.com/ggml-org/llama.cpp/pull/32864) ggml : update cmake MATH_LIBRARY check
- [#32225](https://github.com/ggml-org/llama.cpp/pull/32225) ui: add cancel button to cancel model loading
- [#31887](https://github.com/ggml-org/llama.cpp/pull/31887) webgpu : add ROLL support
- [#32833](https://github.com/ggml-org/llama.cpp/pull/32833) chat : improve inkling parser/grammar

#### 🐛 New Issues
- [#32900](https://github.com/ggml-org/llama.cpp/issues/32900) CUDA illegal memory access in SET_ROWS after SWA context checkpoint invalidation (Gemma 4 E4B + q8_0 KV + draft-mtp) `bug-unconfirmed` 💬1
- [#32918](https://github.com/ggml-org/llama.cpp/issues/32918) Misc. bug: convert_hf_to_gguf.py => error in number of tensors Qwen 3.8 27B (others?) `bug-unconfirmed`
- [#32882](https://github.com/ggml-org/llama.cpp/issues/32882) Misc. bug: mmBERT GGUFs converted since #23343 fail to load: "metaspace prepend_scheme 'always' is not supported for BPE vocab" (breaks ggml-org/Julia-1-GGUF)
- [#32912](https://github.com/ggml-org/llama.cpp/issues/32912) Feature Request: [Vulkan - NVIDIA] Reading IQ grid tables from constant memory causes LDC divergence `enhancement`
- [#32910](https://github.com/ggml-org/llama.cpp/issues/32910) Eval bug: Inkling-2-Mini: ~7.2-7.8 GB CUDA0 compute buffer requested regardless of -ngl, --fit off, even with -ngl 0 `bug-unconfirmed`
- [#32907](https://github.com/ggml-org/llama.cpp/issues/32907) Eval bug: JSON schema error "schema must be an object" `bug-unconfirmed`
- [#32877](https://github.com/ggml-org/llama.cpp/issues/32877) check that the current commit is tagged correctly according to the version specified above
- [#32874](https://github.com/ggml-org/llama.cpp/issues/32874) S
- [#32871](https://github.com/ggml-org/llama.cpp/issues/32871) Misc. bug: Prefill performance drop on A4000 (sm_86) in b12285 with gemma4 and deepseek `bug-unconfirmed`
- [#32869](https://github.com/ggml-org/llama.cpp/issues/32869) Misc. bug: json-schema-to-grammar does not escape property names in character classes when additionalProperties is set `bug-unconfirmed`
- [#32868](https://github.com/ggml-org/llama.cpp/issues/32868) Compile bug: MSVC + BUILD_SHARED_LIBS=OFF fails to build test-batch-alloc and test-server-component `bug-unconfirmed`

#### 🔒 Closed Issues
- [#25904](https://github.com/ggml-org/llama.cpp/issues/25904) Misc. bug: OpenVINO NPU: SIGSEGV/WeightlessCacheAttribute on Intel Core Ultra 7 255H (Linux)
- [#32818](https://github.com/ggml-org/llama.cpp/issues/32818) chat : inkling tool-call grammar crash with thinking off ("unexpected empty grammar stack")
- [#29154](https://github.com/ggml-org/llama.cpp/issues/29154) Eval bug: ubatch size leads to freezing of GPU+eGPU setup
- [#32844](https://github.com/ggml-org/llama.cpp/issues/32844) Misc. bug: test-quant-type-selection fails due to tensor reorganization
- [#32019](https://github.com/ggml-org/llama.cpp/issues/32019) Feature Request: cancel model loading from the web UI
- [#32800](https://github.com/ggml-org/llama.cpp/issues/32800) Misc. bug: Inkling2 tool calls fail with HTTP 500 on Vulkan
- [#32877](https://github.com/ggml-org/llama.cpp/issues/32877) check that the current commit is tagged correctly according to the version specified above
- [#32874](https://github.com/ggml-org/llama.cpp/issues/32874) S
- [#32802](https://github.com/ggml-org/llama.cpp/issues/32802) Eval bug: llama-server returns no tool call for ggml-org/TML-d24-varloop-research-GGUF

### Ollama (`ollama/ollama`)

**Stars:** 187,945 · **Open issues:** 4,739 · **Last push:** 5h ago

On November 24, 2026, Ollama released version 0.40.18, which includes significant changes such as the integration of residual mixing on Metal and enhanced model setup across architectures. Key updates were also made to llama.cpp, bumping the version to b12651 and removing support for jetpack5. Noteworthy merged pull requests featured improvements in the inkling2, resulting in faster Metal decoding and operational efficiency. However, the day was marked by the emergence of a major performance regression issue (#19866) associated with version 0.40.17 on macOS M4 Pro, stirring ongoing user concern.

#### 🚀 New Releases
- [v0.40.18-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.18-rc0) v0.40.18

#### ✅ Merged PRs
- [#19843](https://github.com/ollama/ollama/pull/19843) inkling2: faster Metal decode, prefill and draft rounds
- [#19865](https://github.com/ollama/ollama/pull/19865) llama.cpp: version bump b12651 + remove jetpack5 support

#### 🐛 New Issues
- [#19866](https://github.com/ollama/ollama/issues/19866) 0.40.17 major performance regression (macOS M4 Pro MLX Qwen 3.8 27b) `bug` 💬2
- [#19859](https://github.com/ollama/ollama/issues/19859) A legacy template with `.Response` inside `if…else` panics and returns an empty HTTP 500 💬1
- [#19862](https://github.com/ollama/ollama/issues/19862) Feature Request: Add installer option to install as Windows system service (machine-wide, not user login item) 💬1
- [#19851](https://github.com/ollama/ollama/issues/19851) 0.4.17 have out of memory issue `bug` `needs more info` 💬1
- [#19854](https://github.com/ollama/ollama/issues/19854) Built-in parsers consume call-shaped output when no tools are declared, losing response content in non-stream mode 💬1
- [#19856](https://github.com/ollama/ollama/issues/19856) Ollama v0.40.16 — Unbounded blob part creation from an unvalidated registry Content-Length `bug` 💬1
- [#19852](https://github.com/ollama/ollama/issues/19852) api: function-level tool keys (e.g. `strict`) are still dropped 💬1
- [#19857](https://github.com/ollama/ollama/issues/19857) MLX runner: support KV-cache quantization (OLLAMA_KV_CACHE_TYPE is ignored); qwen3.8:27b-mlx OOMs at 16K on 24 GB Macs

#### 🔒 Closed Issues
- [#19826](https://github.com/ollama/ollama/issues/19826) llama.cpp: bump LLAMA_CPP_VERSION for inkling2_loop (Inkling 2 Mini GGUF)
- [#19712](https://github.com/ollama/ollama/issues/19712) Error: listen tcp 127.0.0.1:11434: bind: Une seule utilisation de chaque adresse de socket (protocole/adresse réseau/port) est habituellement autorisée.
- [#19589](https://github.com/ollama/ollama/issues/19589) ollama-vulkan-fix
- [#15788](https://github.com/ollama/ollama/issues/15788) My open claw oolamy setup isn't showing me any love code is dead on arrival I was supposed to get a free uncensored model to help me with content creation
- [#19444](https://github.com/ollama/ollama/issues/19444) Windows ARM64: Gemma3 vision times out during CPU image processing
- [#19856](https://github.com/ollama/ollama/issues/19856) Ollama v0.40.16 — Unbounded blob part creation from an unvalidated registry Content-Length

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,787 · **Open issues:** 5,505 · **Last push:** <1h ago

In the last 24 hours, LiteLLM released three new versions: v1.110.3, v1.109.4, and v1.108.16, with key updates in each version focusing on enhancing the gateway DCR opt-in feature. Notable merged features and fixes include the persistence of per-server event settings and enhancements to support logprobs and top_logprobs for NIM models, vital for improving model performance. Additionally, a new issue has emerged regarding the implementation of per-principal budgets for model families, indicating a growing interest in tailored budgeting solutions. The team continues to actively address various bugs, including those affecting Azure AI pricing and model behavior under specific conditions.

#### 🚀 New Releases
- [v1.110.3](https://github.com/BerriAI/litellm/releases/tag/v1.110.3) v1.110.3
- [v1.109.4](https://github.com/BerriAI/litellm/releases/tag/v1.109.4) v1.109.4
- [v1.108.16](https://github.com/BerriAI/litellm/releases/tag/v1.108.16) v1.108.16

#### ✅ Merged PRs
- [#53602](https://github.com/BerriAI/litellm/pull/53602) feat(mcp): persist per-server event settings
- [#54043](https://github.com/BerriAI/litellm/pull/54043) fix(nvidia_nim): forward logprobs and top_logprobs to NIM models that serve them on lts/1.108.x (#54008)
- [#54008](https://github.com/BerriAI/litellm/pull/54008) fix(nvidia_nim): forward logprobs and top_logprobs to NIM models that serve them
- [#53758](https://github.com/BerriAI/litellm/pull/53758) fix(guardrails): clear token ids and logprobs when a post-call hook rewrites a non-streamed answer
- [#54055](https://github.com/BerriAI/litellm/pull/54055) fix(anthropic): convert Pydantic messages before async cache_control injection
- [#54074](https://github.com/BerriAI/litellm/pull/54074) fix(spend-logs): backport #54007, #53995 and #54003 to rc/1.112.0
- [#53989](https://github.com/BerriAI/litellm/pull/53989) fix(mcp): seed the catalog revision
- [#53986](https://github.com/BerriAI/litellm/pull/53986) feat(minimax): support MiniMax-H3-Image on /v1/images/generations and /v1/images/edits on lts/1.108.x
- [#50881](https://github.com/BerriAI/litellm/pull/50881) feat(minimax): add MiniMax-H3-Image generation and edit support
- [#54003](https://github.com/BerriAI/litellm/pull/54003) fix(spend-logs): let the proxy finish slow failure spend counters
- [#52519](https://github.com/BerriAI/litellm/pull/52519) feat(nace): add NDI document parse as an OCR provider
- [#54047](https://github.com/BerriAI/litellm/pull/54047) fix(perplexity): let every Agent API model take chat tools unless the cost map says no
- [#53979](https://github.com/BerriAI/litellm/pull/53979) fix(anthropic): backport dropping unsigned thinking only where Claude checks signatures to lts/1.108.x
- [#51793](https://github.com/BerriAI/litellm/pull/51793) fix(anthropic): drop unsigned thinking blocks before /v1/messages reaches Claude
- [#53789](https://github.com/BerriAI/litellm/pull/53789) feat(router-core): add the model rate limit counters to RouterCache
- [#53704](https://github.com/BerriAI/litellm/pull/53704) feat(gateway): count the requests the gateway serves toward the daily gateway request totals
- [#54045](https://github.com/BerriAI/litellm/pull/54045) refactor(types): replace Unknown with proven types in 131 more files
- [#54067](https://github.com/BerriAI/litellm/pull/54067) fix(cost-map): move five azure_ai retirement dates to the ones the Azure retirement schedule states
- [#53996](https://github.com/BerriAI/litellm/pull/53996) refactor(proxy): classify billable requests through one Rust route table
- [#53995](https://github.com/BerriAI/litellm/pull/53995) fix(spend-logs): stamp and compare delivery times in utc
- [#54057](https://github.com/BerriAI/litellm/pull/54057) fix(cost-map): set azure_ai/kimi-k3.1-pro limits to the 1,000,000 input and 262,144 output Azure states
- [#54007](https://github.com/BerriAI/litellm/pull/54007) fix(proxy): stop the remaining budget gauges counting each request twice
- [#53866](https://github.com/BerriAI/litellm/pull/53866) fix(proxy): make litellm --test pick a served model, and send the master key only to a local proxy
- [#53865](https://github.com/BerriAI/litellm/pull/53865) fix(openai)!: apply drop_params to reasoning objects on openai/ chat, openai/responses/ and /v1/messages
- [#53799](https://github.com/BerriAI/litellm/pull/53799) fix(cost-map): add newly known models to model_list and model_list_set on a reload
- [#54051](https://github.com/BerriAI/litellm/pull/54051) test(gateway): hold the first mock server in the stream pass-through test
- [#53390](https://github.com/BerriAI/litellm/pull/53390) fix(responses): bound overlong tool call IDs in the chat bridge
- [#53893](https://github.com/BerriAI/litellm/pull/53893) fix(rerank): preserve provider usage and reported costs
- [#53957](https://github.com/BerriAI/litellm/pull/53957) fix(vertex_ai): report Gemini batch lines that end malformed with no output as error rows
- [#53953](https://github.com/BerriAI/litellm/pull/53953) fix(responses): always stream tool argument fields as strings for every Responses provider
- [#53829](https://github.com/BerriAI/litellm/pull/53829) fix(proxy): answer 400 naming a content block the token counter cannot read
- [#54040](https://github.com/BerriAI/litellm/pull/54040) feat(proxy): turn on drop_params for VS Code Copilot Chat like Claude Code and Codex
- [#53715](https://github.com/BerriAI/litellm/pull/53715) refactor(types): replace Unknown with proven types in 390 files
- [#52618](https://github.com/BerriAI/litellm/pull/52618) feat(gemini): backport extended file inspection to lts/1.108.x (#52611)
- [#51784](https://github.com/BerriAI/litellm/pull/51784) fix(scim): clear every group or member on a PATCH remove with no value or filter
- [#52119](https://github.com/BerriAI/litellm/pull/52119) ci(lint): run the lint tools from the paths the PR head carries
- [#52611](https://github.com/BerriAI/litellm/pull/52611) feat(gemini): support extended multimodal file inspection on chat completions
- [#54031](https://github.com/BerriAI/litellm/pull/54031) fix(openai): backport #51809 provider error relay to rc/1.112.0
- [#54044](https://github.com/BerriAI/litellm/pull/54044) test(bedrock): expect an authentication error when the AWS profile is missing in the bearer token test
- [#53899](https://github.com/BerriAI/litellm/pull/53899) feat(logging): add luca to the generic API compatible callbacks
- [#53857](https://github.com/BerriAI/litellm/pull/53857) fix(bedrock,databricks): forward the server-side-fallback beta and drop it under drop_params where the model lacks it
- [#53987](https://github.com/BerriAI/litellm/pull/53987) fix(anthropic)!: keep thinking disabled, display, between_tools, and effort on /v1/messages to OpenAI on lts/1.108.x
- [#53952](https://github.com/BerriAI/litellm/pull/53952) fix(perplexity): accept function tools on chat completions for Agent API models
- [#54037](https://github.com/BerriAI/litellm/pull/54037) test(deepseek): pass typed litellm_params to the DeepSeek messages transform in the unsigned thinking test
- [#54038](https://github.com/BerriAI/litellm/pull/54038) chore(ui): regenerate the dashboard API types for Responses background_options
- [#54036](https://github.com/BerriAI/litellm/pull/54036) test(otel): check the Prisma CRUD scan by the helpers it finds instead of a fixed call count
- [#53427](https://github.com/BerriAI/litellm/pull/53427) fix(openai): backport #53217 and #51809 OpenAI-compatible error relay to lts/1.108.x
- [#54035](https://github.com/BerriAI/litellm/pull/54035) refactor(router): name the priority, lar1 and provider-budget routing strategies
- [#53962](https://github.com/BerriAI/litellm/pull/53962) fix(mistral): drop message fields Mistral rejects when drop_params is on
- [#51809](https://github.com/BerriAI/litellm/pull/51809) fix(openai): relay provider error codes, types, and Responses params from OpenAI-compatible backends
- [#53930](https://github.com/BerriAI/litellm/pull/53930) test(proxy): wait for the Rust cleanup warning to reach Python logging before asserting it
- [#53932](https://github.com/BerriAI/litellm/pull/53932) test(vertex_ai): keep the beta header map local in the URL join host proxy test
- [#54019](https://github.com/BerriAI/litellm/pull/54019) refactor(router-core): read a deployment's own cooldown_time in one place
- [#53900](https://github.com/BerriAI/litellm/pull/53900) feat(lens): provision a model key for embedded Lens
- [#54018](https://github.com/BerriAI/litellm/pull/54018) chore(release): backport #53994 to rc/1.112.0
- [#53966](https://github.com/BerriAI/litellm/pull/53966) fix(images): support stream=True on image generation and edit
- [#53993](https://github.com/BerriAI/litellm/pull/53993) fix(openai): forward Responses background_options (lts/1.108.x)
- [#53978](https://github.com/BerriAI/litellm/pull/53978) fix(proxy): partial pick of #44763 on lts/1.108.x
- [#53991](https://github.com/BerriAI/litellm/pull/53991) fix(openai): forward Responses background_options
- [#54010](https://github.com/BerriAI/litellm/pull/54010) chore: bump versions on stable/1.110.x
- [#54009](https://github.com/BerriAI/litellm/pull/54009) chore: bump versions on stable/1.109.x
- [#49765](https://github.com/BerriAI/litellm/pull/49765) fix(anthropic)!: keep thinking disabled, display, between_tools, and effort on /v1/messages to OpenAI
- [#52196](https://github.com/BerriAI/litellm/pull/52196) fix(deepseek): forward output_config.effort and thinking as sent on /v1/messages
- [#53110](https://github.com/BerriAI/litellm/pull/53110) fix(router): fall back by the group a pick was routed to (backport #52510 to rc/1.111.0)
- [#53994](https://github.com/BerriAI/litellm/pull/53994) fix(images): bill the deployment's custom pricing when the proxy pre-creates the logging object
- [#51317](https://github.com/BerriAI/litellm/pull/51317) fix(deepseek): forward output_config.effort and thinking as sent on /v1/messages
- [#53918](https://github.com/BerriAI/litellm/pull/53918) refactor(types): replace Unknown with proven types in 82 more files
- [#53109](https://github.com/BerriAI/litellm/pull/53109) fix(router): fall back by the group a pick was routed to (backport #52510 to stable/1.110.x)
- [#53964](https://github.com/BerriAI/litellm/pull/53964) fix(together_ai): bring main's Together image, transcription and retirement rows to lts/1.108.x
- [#53976](https://github.com/BerriAI/litellm/pull/53976) refactor(gateway-inference): hold each call's record in a task-local
- [#51278](https://github.com/BerriAI/litellm/pull/51278) fix(http): answer HTTP/2 requests in flight at a graceful GOAWAY instead of failing or resending them
- [#53972](https://github.com/BerriAI/litellm/pull/53972) fix(hosted_vllm,azure): leave the caller's messages untouched when building the chat request on lts/1.108.x (#51841)
- [#53951](https://github.com/BerriAI/litellm/pull/53951) feat(ui): add PDF export to the Usage page export modal
- [#53961](https://github.com/BerriAI/litellm/pull/53961) refactor(gateway): keep a worker's per-minute outcomes in an outcomes-only type
- [#53969](https://github.com/BerriAI/litellm/pull/53969) fix(bedrock): treat an empty api_base or runtime endpoint as unset on realtime sessions for lts/1.108.x
- [#53840](https://github.com/BerriAI/litellm/pull/53840) fix(proxy): preserve concurrent access group assignments
- [#53599](https://github.com/BerriAI/litellm/pull/53599) refactor(typing): clear basedpyright Any errors across 35 files
- [#53181](https://github.com/BerriAI/litellm/pull/53181) fix(mcp)!: backport gateway DCR opt-in to 1.111 RC (#53059)
- [#51244](https://github.com/BerriAI/litellm/pull/51244) fix(bedrock): treat an empty api_base or runtime endpoint as unset
- [#53981](https://github.com/BerriAI/litellm/pull/53981) test(spend-logs): expect the always kept previous response ids in the included metadata fields test
- [#52624](https://github.com/BerriAI/litellm/pull/52624) feat(cost): price native /v1/messages calls in the Rust route and hand the receipt to logging
- [#53975](https://github.com/BerriAI/litellm/pull/53975) chore: bump versions on rc/1.111.0
- [#51841](https://github.com/BerriAI/litellm/pull/51841) fix(hosted_vllm,azure): leave the caller's messages untouched when building the chat request
- [#53973](https://github.com/BerriAI/litellm/pull/53973) chore(cost-map): move together_ai/Qwen/Qwen4-Max to Together's regular price now that the promotion ended
- [#53965](https://github.com/BerriAI/litellm/pull/53965) fix(proxy): start on Postgres databases with SQL_ASCII encoding
- [#53974](https://github.com/BerriAI/litellm/pull/53974) feat(cost-map): add fal_ai/recraft/vectorize/pro and apply the FLUX 3 Max video promotion through December 7
- [#53687](https://github.com/BerriAI/litellm/pull/53687) refactor(types): replace Unknown with proven types in 225 files
- [#53601](https://github.com/BerriAI/litellm/pull/53601) feat(mcp): model the Events extension wire contract
- [#53970](https://github.com/BerriAI/litellm/pull/53970) test(responses): expect bridged turns to replay only their own path in the caller session tests
- [#53928](https://github.com/BerriAI/litellm/pull/53928) fix(params): backport #51209 vector store routing fix to lts/1.108.x
- [#51209](https://github.com/BerriAI/litellm/pull/51209) fix(params): keep vector store routing fields out of provider requests
- [#53504](https://github.com/BerriAI/litellm/pull/53504) test(mcp): pin default credentials for ordinary server permissions
- [#53503](https://github.com/BerriAI/litellm/pull/53503) feat(db): add nullable MCP auth profile storage
- [#53502](https://github.com/BerriAI/litellm/pull/53502) feat(mcp): define auth profile types with secret-free serialization
- [#53960](https://github.com/BerriAI/litellm/pull/53960) chore(release): backport six stale-test fixes to rc/1.112.0
- [#53947](https://github.com/BerriAI/litellm/pull/53947) fix(gemini): keep an empty trailing user turn so Gemini doesn't answer a model-turn 400 on lts/1.108.x (#51311)
- [#53669](https://github.com/BerriAI/litellm/pull/53669) fix(github_copilot): convert plain-text documents for native messages for lts/1.108.x
- [#53927](https://github.com/BerriAI/litellm/pull/53927) test: backport #52365, #52815, #53000, #53243 and #53193 to rc/1.111.0 and wait for the Codex MCP server
- [#51311](https://github.com/BerriAI/litellm/pull/51311) fix(gemini): keep an empty trailing user turn so Gemini doesn't answer a model-turn 400
- [#53938](https://github.com/BerriAI/litellm/pull/53938) fix(bedrock): accept the OpenAI SDK default encoding_format on Nova embeddings on lts/1.108.x
- [#53933](https://github.com/BerriAI/litellm/pull/53933) chore(cost-map): date the Bedrock Claude Opus 4.5 end of life for May 23, 2027
- [#53958](https://github.com/BerriAI/litellm/pull/53958) test(proxy): give the spend counter ledger test's auth cache double the team fields read
- [#53367](https://github.com/BerriAI/litellm/pull/53367) refactor(messages): run the python bridge through MessagesRoute::machine and pass decode results as one plan
- [#53554](https://github.com/BerriAI/litellm/pull/53554) fix(github_copilot): convert plain-text documents for native messages
- [#53942](https://github.com/BerriAI/litellm/pull/53942) chore(release): backport #53939 to rc/1.112.0
- [#53920](https://github.com/BerriAI/litellm/pull/53920) fix(anthropic): log 0 output tokens when an error frame follows message_start on lts/1.108.x (#53914)
- [#53914](https://github.com/BerriAI/litellm/pull/53914) fix(anthropic): log 0 output tokens when an error frame follows message_start
- [#53922](https://github.com/BerriAI/litellm/pull/53922) fix(rust): clear the rust-test and rust-wheel failures on main
- [#53940](https://github.com/BerriAI/litellm/pull/53940) test: update stale integration and e2e expectations for intended changes
- [#53939](https://github.com/BerriAI/litellm/pull/53939) fix(ui): move models refresh back to the tab row and space the budget percent
- [#53921](https://github.com/BerriAI/litellm/pull/53921) refactor(ui): move the customer portal onto the layout frame
- [#53755](https://github.com/BerriAI/litellm/pull/53755) fix(bedrock): accept the OpenAI SDK default encoding_format on Nova embeddings
- [#52484](https://github.com/BerriAI/litellm/pull/52484) feat(cost): price Claude token calls, budget holds and auth price checks in Rust
- [#52472](https://github.com/BerriAI/litellm/pull/52472) feat(model-catalog): candidate rows and pricing snapshot for /v1/messages Claude providers
- [#52816](https://github.com/BerriAI/litellm/pull/52816) refactor(cost): price generic_cost_per_token with the native calculate
- [#53905](https://github.com/BerriAI/litellm/pull/53905) feat(caching): configure semantic cache params per key, user and team
- [#53891](https://github.com/BerriAI/litellm/pull/53891) refactor(ui): move six more pages and the root route onto the layout frame
- [#53904](https://github.com/BerriAI/litellm/pull/53904) fix(proxy): only relay Azure passthrough model groups that are served by Azure
- [#53926](https://github.com/BerriAI/litellm/pull/53926) test(vertex_ai): expect the default service tier on Vertex Gemini chat responses (backport #53847)
- [#53924](https://github.com/BerriAI/litellm/pull/53924) test(perplexity): walk the Perplexity Orchestrator chat route for internal params (backport #53856)
- [#49519](https://github.com/BerriAI/litellm/pull/49519) feat(responses): store each bridged turn's path to the root so a fork replays only its ancestors
- [#53902](https://github.com/BerriAI/litellm/pull/53902) fix(proxy): release the parallel request slot when a Responses WebSocket is refused at open
- [#53810](https://github.com/BerriAI/litellm/pull/53810) fix(lens): accept a key in every header the gateway reads keys from on Lens routes
- [#53844](https://github.com/BerriAI/litellm/pull/53844) fix(mcp): keep the dashboard login of a PROXY_ADMIN_ID admin on MCP /authorize
- [#53898](https://github.com/BerriAI/litellm/pull/53898) fix(caching): key the response cache on extra_body by default
- [#53908](https://github.com/BerriAI/litellm/pull/53908) fix(proxy): drain pooled connections when workers recycle
- [#53868](https://github.com/BerriAI/litellm/pull/53868) fix(cost): restore AI21 Jamba SDK pricing without overriding custom rates
- [#53362](https://github.com/BerriAI/litellm/pull/53362) fix(bedrock): answer 401 instead of 500 when AWS SSO or profile credentials are unusable
- [#53887](https://github.com/BerriAI/litellm/pull/53887) fix(ui): show hosted Lens navigation in the gateway sidebar
- [#53299](https://github.com/BerriAI/litellm/pull/53299) fix(proxy): backport audit log fixes to rc/1.111.0 (#50929, #53305)
- [#53909](https://github.com/BerriAI/litellm/pull/53909) perf(proxy): read only the needed team fields from the auth cache
- [#53206](https://github.com/BerriAI/litellm/pull/53206) chore(release): backport #53171, #53210 to rc/1.111.0
- [#53207](https://github.com/BerriAI/litellm/pull/53207) chore(release): backport #53171, #53210 to stable/1.110.x
- [#53298](https://github.com/BerriAI/litellm/pull/53298) fix(proxy): backport audit log fixes to stable/1.110.x (#50929, #53305)
- [#53906](https://github.com/BerriAI/litellm/pull/53906) feat(cost-map): add together_ai/deepseek-ai/DeepSeek-V4.1-Flash-1017-fast at the Together models API rates
- [#53907](https://github.com/BerriAI/litellm/pull/53907) chore(cost-map): date the databricks-gpt-5-nano retirement for December 11, 2026
- [#50828](https://github.com/BerriAI/litellm/pull/50828) fix(db_scripts): spend logs runbooks repoint dependent views so the old table can be dropped
- [#53586](https://github.com/BerriAI/litellm/pull/53586) fix(proxy): bill an OpenAI pass-through background response to the key that created it
- [#53901](https://github.com/BerriAI/litellm/pull/53901) chore(ui): regenerate the OpenAPI snapshot and dashboard API types for preserve_explicit_oauth_settings
- [#53897](https://github.com/BerriAI/litellm/pull/53897) test(decisions): expect null usage on the Databricks systemone answer on lts/1.108.x (#48665)
- [#53867](https://github.com/BerriAI/litellm/pull/53867) fix(cost): fall back to half the standard audio rate for batches
- [#53879](https://github.com/BerriAI/litellm/pull/53879) fix(proxy): default uvicorn keep-alive to 95s so load balancers close idle connections first
- [#53894](https://github.com/BerriAI/litellm/pull/53894) fix(proxy): create current and upcoming spend log partitions in the partitioning runbook
- [#53870](https://github.com/BerriAI/litellm/pull/53870) fix(router): keep DB-only deployments priced across price data reloads on lts/1.108.x
- [#53886](https://github.com/BerriAI/litellm/pull/53886) fix(proxy): stop requeueing rejected tool discovery batches to Redis
- [#53895](https://github.com/BerriAI/litellm/pull/53895) docs(terraform): clarify logging_callback ownership of unmanaged callbacks
- [#53315](https://github.com/BerriAI/litellm/pull/53315) fix(guardrails): serve usage detail for a guardrail removed from config
- [#53896](https://github.com/BerriAI/litellm/pull/53896) feat(cost-map): add vertex_ai/gemini-4-neon-cyber-permissive at the Vertex pricing page rates
- [#53880](https://github.com/BerriAI/litellm/pull/53880) refactor(ui): move models, organizations, projects, skills, tool policies, usage and alerts onto the layout frame
- [#53882](https://github.com/BerriAI/litellm/pull/53882) fix(proxy): drain in-flight requests during worker recycling
- [#53863](https://github.com/BerriAI/litellm/pull/53863) feat(scripts): add a linter for proxy config.yaml files

#### 🐛 New Issues
- [#53946](https://github.com/BerriAI/litellm/issues/53946) [Feature]: Per-principal budgets that cover a set of models (a model family or a cross-vendor tier) `llm translation` 💬23
- [#53787](https://github.com/BerriAI/litellm/issues/53787) [Bug]: Missing US and EU Data Zone prices for Azure AI Foundry Microsoft-Decision-1.1 `bug` `llm translation` 💬2
- [#53959](https://github.com/BerriAI/litellm/issues/53959) [Bug]: Bedrock Mantle Responses forwards Daybreak Blue temperature with drop_params enabled `llm translation` 💬1
- [#53945](https://github.com/BerriAI/litellm/issues/53945) [Bug]: test_bedrock_invoke_stream_failure_raises_and_logs_what_python_does[json-body] fails on main since #53482 `llm translation` 💬1
- [#53812](https://github.com/BerriAI/litellm/issues/53812) [Bug]: Free (zero-cost) models blocked with ExceededBudget when user budget is $0.0 (v1.100.0) `bug` 💬1
- [#53814](https://github.com/BerriAI/litellm/issues/53814) [Bug]: /v1/messages input guardrails replace tool names over 64 chars with the truncated name, and it is never restored `llm translation` `claude code` 💬1
- [#53971](https://github.com/BerriAI/litellm/issues/53971) [Feature]: Report the source file and line for included config diagnostics `llm translation`
- [#53944](https://github.com/BerriAI/litellm/issues/53944) [Bug]: async oidc/google api_key retried right after a metadata failure reuses the failed fetch
- [#53871](https://github.com/BerriAI/litellm/issues/53871) [Bug]: /v1/chat/completions drops clear_at from mid-conversation system messages on Anthropic models `llm translation`
- [#53855](https://github.com/BerriAI/litellm/issues/53855) [Feature]: Per-key and per-team model ITPM/OTPM limits (provider-shaped token accounting) `llm translation`
- [#53853](https://github.com/BerriAI/litellm/issues/53853) [Bug]: SCIM user lookup returns userName from user_email, so Entra cannot match existing users (409 on create)
- [#53819](https://github.com/BerriAI/litellm/issues/53819) [Bug]: model_info.default_reasoning_effort is never injected into chat request bodies — the "move it under model_info" warning overpromises `llm translation`
- [#53811](https://github.com/BerriAI/litellm/issues/53811) [Bug]: Responses image_generation tool with output_format=svg: svg_usage (the SVG author model's tokens) is never billed `llm translation`
- [#53809](https://github.com/BerriAI/litellm/issues/53809) Bug: image edit `markup` file is sent to OpenAI as text (its repr), so every markup-guided edit is rejected `llm translation`
- [#53793](https://github.com/BerriAI/litellm/issues/53793) [Bug]: Vertex Gemini /v1/images/generations returns the non-replayable thoughtSignature (~7 MiB at 2K) while /v1/images/edits drops it `llm translation`
- [#53749](https://github.com/BerriAI/litellm/issues/53749) [Bug]: SVG image output: svg.model skips key model access, proxy names aren't translated, and author tokens ignore deployment pricing `llm translation`

#### 🔒 Closed Issues
- [#23741](https://github.com/BerriAI/litellm/issues/23741) [Bug]: AnthropicException 400 - vector_store_ids: Extra inputs are not permitted
- [#19769](https://github.com/BerriAI/litellm/issues/19769) Helm Chart: Switch to other repo provider for postgres and redis dependencies
- [#52837](https://github.com/BerriAI/litellm/issues/52837) v1.108.10+ images are signed keyless only (project-releaser); please confirm the switch from the cosign.pub key
- [#31457](https://github.com/BerriAI/litellm/issues/31457) [Bug]: /v1/audio/transcriptions returns JSON for response_format=text instead of text/plain
- [#29818](https://github.com/BerriAI/litellm/issues/29818) [Bug]: OpenAI Codex CLI does not work with LiteLLM
- [#52247](https://github.com/BerriAI/litellm/issues/52247) Proxy start crashes with ValueError in find_blockers when the database encoding is SQL_ASCII
- [#33676](https://github.com/BerriAI/litellm/issues/33676) [Bug]: Prometheus /metrics endpoint incorrectly redirects
- [#53119](https://github.com/BerriAI/litellm/issues/53119) [Bug]: Vertex Gemini image models: n > 1 on /chat/completions is forwarded as candidateCount and returns an opaque 400 INVALID_ARGUMENT
- [#42765](https://github.com/BerriAI/litellm/issues/42765) [Bug]: Chat-to-Responses bridge should normalize overlong tool call IDs
- [#53099](https://github.com/BerriAI/litellm/issues/53099) [Bug]: complexity_router with `plugins` returns RouterRateLimitError instead of applying fallbacks when the selected model is in cooldown
- [#36103](https://github.com/BerriAI/litellm/issues/36103) Unconditional model injection in `get_deployment_credentials_with_provider` loses alias identity when model groups share a `litellm_params.model`
- [#37270](https://github.com/BerriAI/litellm/issues/37270) [Bug]: anthropic_messages drops plaintext reasoning across tool-call replay
- [#38648](https://github.com/BerriAI/litellm/issues/38648) [Bug]: Vertex AI / Gemini 3+ silently drops google_search grounding when request contains function tool
- [#52518](https://github.com/BerriAI/litellm/issues/52518) [Feature]: Nace NDI document parsing as an OCR provider (nace/parse-low, nace/parse-medium, nace/parse-high)
- [#44912](https://github.com/BerriAI/litellm/issues/44912) [Bug]: The advertised litellm --test command raises Invalid test value before sending a request
- [#37271](https://github.com/BerriAI/litellm/issues/37271) [Bug]: GET /v1/models/{model_id} returns 404 for any model name containing a slash
- [#37301](https://github.com/BerriAI/litellm/issues/37301) [Bug] router_settings.max_fallbacks silently dropped by /config/update — UpdateRouterConfig schema excludes it
- [#37321](https://github.com/BerriAI/litellm/issues/37321) [Bug]: Health Check Ignores api_base for hosted_vllm Models
- [#37352](https://github.com/BerriAI/litellm/issues/37352) [Bug]: Chained proxy batch results: output_file_id from the second proxy is not fetchable through the first
- [#53812](https://github.com/BerriAI/litellm/issues/53812) [Bug]: Free (zero-cost) models blocked with ExceededBudget when user budget is $0.0 (v1.100.0)
- [#52644](https://github.com/BerriAI/litellm/issues/52644) [Bug]: /azure passthrough returns 500 "Provider openai not found" when body model is a non-Azure router group (regression in 1.109.1)
- [#53676](https://github.com/BerriAI/litellm/issues/53676) Responses WebSocket leaks a parallel-request slot when pre-call processing fails after admission
- [#53729](https://github.com/BerriAI/litellm/issues/53729) [Bug]: extra_body is left out of the response cache key by default
- [#52453](https://github.com/BerriAI/litellm/issues/52453) [Bug]: TokenRetrievalError in litellm/llms/bedrock/base_aws_llm.py
- [#47799](https://github.com/BerriAI/litellm/issues/47799) [Bug]: the per-call success callback is dispatched on a background executor, so post-call cost accounting races and loses figures
- [#52800](https://github.com/BerriAI/litellm/issues/52800) [Bug]: Vertex Gemini image adapters silently replace size/imageConfig, ignore edit image controls, and drop mask (v1.108.0)
- [#53573](https://github.com/BerriAI/litellm/issues/53573) [Security] CORS wildcard (Access-Control-Allow-Origin: *) on all API routes enables cross-origin credential theft
- [#53557](https://github.com/BerriAI/litellm/issues/53557) [Security] Mass Assignment in /user/new and /key/generate allows arbitrary spend and budget manipulation
- [#53572](https://github.com/BerriAI/litellm/issues/53572) [Security] Stored XSS / SSTI payload accepted in key_alias and metadata fields without sanitization
- [#53571](https://github.com/BerriAI/litellm/issues/53571) [Security] Blind SSRF via api_base in /model/new allows internal network scanning and cloud metadata access
- [#53556](https://github.com/BerriAI/litellm/issues/53556) [Security] JSON Parameter Pollution allows Privilege Escalation to proxy_admin
- [#49012](https://github.com/BerriAI/litellm/issues/49012) [Bug]: Gemini search usage and cost missing with include_server_side_tool_invocations and function calling
- [#53719](https://github.com/BerriAI/litellm/issues/53719) [Bug]: stream=True on /v1/images/generations and /v1/images/edits fails after the image is generated; edits return the image inside the error
- [#53971](https://github.com/BerriAI/litellm/issues/53971) [Feature]: Report the source file and line for included config diagnostics
- [#53722](https://github.com/BerriAI/litellm/issues/53722) [Bug]: litellm.completion returns no cost for AI21 Jamba models
- [#53726](https://github.com/BerriAI/litellm/issues/53726) [Bug]: Batch cost bills audio tokens at the batch text rate when a model has no audio batch rate
- [#43773](https://github.com/BerriAI/litellm/issues/43773) [Bug]: litellm_model mode enum rejects responses, realtime and other in-use modes

### Unsloth (`unslothai/unsloth`)

**Stars:** 80,117 · **Open issues:** 549 · **Last push:** <1h ago

On November 24, 2026, Unsloth released v0.1.923-beta, enhancing the Inkling 2 Mini model with up to 1.9x faster inference and training improvements across all GPUs, as well as featuring new capabilities for GRPO and AsyncGRPO and additions like the translation of audio, subtitles, and images. Significant merged pull requests included updates to the Studio tool sandbox for improved cache management and better handling of important datasets, alongside enhancements to the Studio frontend for improved user experience and security. Notably, a new issue was reported regarding the inability to load two models with the same parent name concurrently, underlining a pressing concern for users utilizing similar model contexts. Overall, the updates signify a strong push for increased performance and usability within the Unsloth ecosystem.

#### 🚀 New Releases
- [v0.1.923-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.923-beta) Inkling 1.9x faster inference + Training

#### ✅ Merged PRs
- [#19195](https://github.com/unslothai/unsloth/pull/19195) Studio tool sandbox: shared cache readers and deletes stay inside the cache
- [#19208](https://github.com/unslothai/unsloth/pull/19208) Studio Krea 2: attend over the valid key prefix without a mask so INT8 attention can take it
- [#19200](https://github.com/unslothai/unsloth/pull/19200) Studio: refuse Windows network-share paths in the frontend route and probes, no Ghostscript
- [#19187](https://github.com/unslothai/unsloth/pull/19187) Studio LTX-2.5: refuse cleanly on fp16-only cards when the host cannot hold the float32 load
- [#19174](https://github.com/unslothai/unsloth/pull/19174) Studio Krea 2: take the low-RAM load route on fp16-only cards instead of being killed
- [#19194](https://github.com/unslothai/unsloth/pull/19194) Studio Data Recipe and saved datasets: keep managed accounts in their own data
- [#19191](https://github.com/unslothai/unsloth/pull/19191) Studio export worker: dataset card guard, drafter converter, late adapters, reused folders
- [#19219](https://github.com/unslothai/unsloth/pull/19219) Tests: name utf-8 on the source reads added by #18977 and #19069
- [#19218](https://github.com/unslothai/unsloth/pull/19218) Parallel capabilities: name real tests as the Inkling 2 x pp cell evidence
- [#19217](https://github.com/unslothai/unsloth/pull/19217) Version-compat CI: run the router aux loss reentrant suite on pull requests
- [#19199](https://github.com/unslothai/unsloth/pull/19199) Studio listeners and provider URLs: IPv6 loopback, sidecar owners, metadata addresses
- [#19214](https://github.com/unslothai/unsloth/pull/19214) Risky loader baseline: record five fixed-name loader call sites merged on Nov 23
- [#19190](https://github.com/unslothai/unsloth/pull/19190) Weight indexes and component references stay inside the checkpoint folder
- [#19189](https://github.com/unslothai/unsloth/pull/19189) Studio remote-code gate: versioned configs, JSON file targets, CSM, token preview, upscalers
- [#19198](https://github.com/unslothai/unsloth/pull/19198) Studio media pages: ask before loading a model named by an outside link
- [#19202](https://github.com/unslothai/unsloth/pull/19202) Studio: bound the work a signed-in account can make a shared server hold
- [#19197](https://github.com/unslothai/unsloth/pull/19197) Studio frontend: tool approvals tied to their tool, reply images and mermaid guard
- [#19193](https://github.com/unslothai/unsloth/pull/19193) Studio media: hand llama-server and FFmpeg only the bytes Studio checked
- [#19188](https://github.com/unslothai/unsloth/pull/19188) Sentence-transformers model_args and malware gate paths: no code from a model's own config
- [#18977](https://github.com/unslothai/unsloth/pull/18977) Fuse the bitsandbytes 8-bit AdamW step into one update per parameter group
- [#19206](https://github.com/unslothai/unsloth/pull/19206) Studio tests: set USERPROFILE for the dedicated cache path expansion test
- [#19205](https://github.com/unslothai/unsloth/pull/19205) Studio tests: let a tmp_path cache home through the macOS system folder check
- [#19175](https://github.com/unslothai/unsloth/pull/19175) LoRA fold for RL rollouts: fold from 128 tokens under graphed decode
- [#19176](https://github.com/unslothai/unsloth/pull/19176) Skinny decode linear on NVIDIA L4: base GEMM and LoRA in one Triton pass
- [#18989](https://github.com/unslothai/unsloth/pull/18989) GRPO hidden-states fallback: compare the head input once per model, not on every scoring call
- [#19083](https://github.com/unslothai/unsloth/pull/19083) Fix SGLang loading local checkpoints on Windows
- [#17171](https://github.com/unslothai/unsloth/pull/17171) Studio: prevent model load thread-unsafety by making accelerate's init_empty_weights per-thread so concurrent skeleton builds cannot leave torch patched
- [#18950](https://github.com/unslothai/unsloth/pull/18950) Left padded training: fully masked pad queries attend only their own key
- [#19130](https://github.com/unslothai/unsloth/pull/19130) Studio multi-GPU placement: count quantized weights at their logical size when pricing compute
- [#19098](https://github.com/unslothai/unsloth/pull/19098) Studio: keep MiniMax-H3 video Auto INT8 attention off on sm89 (audio drift past the L4 floor)
- [#18987](https://github.com/unslothai/unsloth/pull/18987) QAT nvfp4 / mxfp8: keep trainable adapter biases out of QAT, accept strided MX inputs
- [#18988](https://github.com/unslothai/unsloth/pull/18988) Generic decode graphs: clear the RNG capture flag after a failed capture
- [#19008](https://github.com/unslothai/unsloth/pull/19008) Keep bfloat16 mixed precision generation per model instead of process wide
- [#18953](https://github.com/unslothai/unsloth/pull/18953) FSDP2 4-bit DCP load: quant-state copies and byte check on the owning rank, verdict agreed across ranks
- [#19128](https://github.com/unslothai/unsloth/pull/19128) Frontend CI build: overlap unit tests and the dependency-removal check with the browser checks
- [#19127](https://github.com/unslothai/unsloth/pull/19127) CI: run the multi-rank Repo tests shards only when what they import changes
- [#19126](https://github.com/unslothai/unsloth/pull/19126) Core zoo: restore a main-built Inductor cache
- [#18718](https://github.com/unslothai/unsloth/pull/18718) Tensor parallel resume: refuse a checkpoint written under the other expert lora_B layout
- [#18720](https://github.com/unslothai/unsloth/pull/18720) Token budget: split packed chunks read and keep the host packed lengths
- [#18963](https://github.com/unslothai/unsloth/pull/18963) Token balance labels: keep the sampler's order when the regroup is less even
- [#18897](https://github.com/unslothai/unsloth/pull/18897) Context parallel: gather only the last hidden state for GRPO's hidden-state forward
- [#18915](https://github.com/unslothai/unsloth/pull/18915) Native FSDP2: move 16-bit gradients as 16-bit in the float32 reduce-scatter
- [#18973](https://github.com/unslothai/unsloth/pull/18973) FastLanguageModel: keep tied embeddings tied after add_new_tokens
- [#19058](https://github.com/unslothai/unsloth/pull/19058) MoE router aux loss: keep its gradient under the RL config's reentrant checkpointing pin
- [#19163](https://github.com/unslothai/unsloth/pull/19163) Studio MiniMax-H3 trainer: load only the conditioning half a partial cache miss needs
- [#19056](https://github.com/unslothai/unsloth/pull/19056) Save: keep a separately trained lm_head when merging a tied model
- [#19080](https://github.com/unslothai/unsloth/pull/19080) AsyncGRPO: support TRL's patch_tree_recurrent for tree packing of recurrent layers
- [#19069](https://github.com/unslothai/unsloth/pull/19069) Fix Gemma 3n / Gemma 4 checkpointing wrapper rejecting positional kwargs
- [#19108](https://github.com/unslothai/unsloth/pull/19108) Studio Z-Image: share the ConvRot act quant across Q/K/V and w1/w3, fuse SwiGLU into w2's quant
- [#19065](https://github.com/unslothai/unsloth/pull/19065) GGUF export: never let a throwaway 16-bit intermediate replace a prior export
- [#19120](https://github.com/unslothai/unsloth/pull/19120) Inkling 2: pipeline parallel (gpipe, 1f1b) for Mini and Small
- [#19079](https://github.com/unslothai/unsloth/pull/19079) Fused LoRA for float32 models under bfloat16 autocast
- [#19115](https://github.com/unslothai/unsloth/pull/19115) Native FSDP2: refuse Adafactor before training instead of failing at step one
- [#19132](https://github.com/unslothai/unsloth/pull/19132) Studio MiniMax-H3-Image: denoise the images of a streamed multi-image request together
- [#19129](https://github.com/unslothai/unsloth/pull/19129) Studio diffusion: retiring a whole-forward CUDA graph clears every link to it, so the CFG replica builds under Automatic
- [#19057](https://github.com/unslothai/unsloth/pull/19057) Studio Z-Image fp16 training: scaled fp16 GEMMs instead of fp32 islands on T4 (1.7x per step)
- [#18686](https://github.com/unslothai/unsloth/pull/18686) [BUGFIX] Respect main-process gating during PEFT exports
- [#19152](https://github.com/unslothai/unsloth/pull/19152) Saved attention tests: the explicit setting stays in the graph outside a frame
- [#19114](https://github.com/unslothai/unsloth/pull/19114) vLLM server mode: sync merged LoRA weights from the main process only
- [#19064](https://github.com/unslothai/unsloth/pull/19064) Save: keep a 16-bit model's own dtype in merged_16bit exports
- [#19138](https://github.com/unslothai/unsloth/pull/19138) CPU backend: export PatchDPOTrainer / PatchKTOTrainer so TRL preference trainers run
- [#19107](https://github.com/unslothai/unsloth/pull/19107) Studio: remote code scan off the event loop, refuse managed accounts before download
- [#19136](https://github.com/unslothai/unsloth/pull/19136) Studio MiniMax-H3 video: keep cudnn.benchmark off so a seed renders the same clip in every process
- [#19103](https://github.com/unslothai/unsloth/pull/19103) Studio RAG: charge repeated .ppt slide references to the extraction budget
- [#19102](https://github.com/unslothai/unsloth/pull/19102) Studio seed preview: linear matcher for dataset card globs
- [#18775](https://github.com/unslothai/unsloth/pull/18775) [BUGFIX] Fail fast in vLLM eval when LoRA rank exceeds 512
- [#19111](https://github.com/unslothai/unsloth/pull/19111) GRPO no-grad scoring: round the split count up, PrefixGrouper token cap
- [#19106](https://github.com/unslothai/unsloth/pull/19106) Studio login: hash passwords off the event loop
- [#19101](https://github.com/unslothai/unsloth/pull/19101) Refuse Hub network-share paths in parallel auto sizing and sentence-transformers routes
- [#19112](https://github.com/unslothai/unsloth/pull/19112) Saved attention: keep run_attention in a user's fullgraph compile on every build
- [#19109](https://github.com/unslothai/unsloth/pull/19109) FSDP2 fp16: keep the lr schedule on overflow skips when CPU offload switches to fused AdamW
- [#19135](https://github.com/unslothai/unsloth/pull/19135) Inkling 2 merged save: read and write the config and index as utf-8
- [#19133](https://github.com/unslothai/unsloth/pull/19133) Inkling 2 tests: utf-8 source reads, and pin the shared compile-disable helper
- [#18610](https://github.com/unslothai/unsloth/pull/18610) Fix CUDA DoRA row-norm accuracy under cancellation and torch.compile
- [#19117](https://github.com/unslothai/unsloth/pull/19117) Studio MiniMax-H3: cache encoded reference latents across prompt and seed edits
- [#19119](https://github.com/unslothai/unsloth/pull/19119) Studio diffusion training: pin inductor reduction configs (same forward across processes), opt-in fully deterministic mode
- [#19110](https://github.com/unslothai/unsloth/pull/19110) Studio Krea-2: probe attention with its padding mask so Auto keeps the faster cuDNN pin
- [#19125](https://github.com/unslothai/unsloth/pull/19125) Studio tests: read the cudnn.benchmark opt-outs from the family catalog
- [#19105](https://github.com/unslothai/unsloth/pull/19105) Studio: drafter capability checks get their own thread pool
- [#19123](https://github.com/unslothai/unsloth/pull/19123) Studio tests: keep the compile-cache worker tests clear of the begin() artifact snapshot
- [#19086](https://github.com/unslothai/unsloth/pull/19086) Llama/Mistral forward: per-layer Gemma2 checkpoint replay, logits_to_keep with labels, shift-only fused loss, biased head decode
- [#19121](https://github.com/unslothai/unsloth/pull/19121) Studio tests: run the shipped isServedByMlx rule in the auto-load harness
- [#19099](https://github.com/unslothai/unsloth/pull/19099) Studio H3-Image: spread streamed DiT blocks among resident ones so copies overlap compute
- [#19100](https://github.com/unslothai/unsloth/pull/19100) Studio: refuse network-share paths from untrusted sources before probing them
- [#19016](https://github.com/unslothai/unsloth/pull/19016) Inkling 2: merged 16-bit save and GGUF export
- [#19077](https://github.com/unslothai/unsloth/pull/19077) Studio: pin Krea-2's reduction-config filter so fresh Studio homes render one seed the same way
- [#19104](https://github.com/unslothai/unsloth/pull/19104) Studio: cap pending chat PDF exports
- [#19082](https://github.com/unslothai/unsloth/pull/19082) Tensor parallel for Inkling 2: shard the wrapper attention by heads
- [#19116](https://github.com/unslothai/unsloth/pull/19116) Context parallel: import the Inkling 2 Ulysses helpers after get_cp_manager
- [#19054](https://github.com/unslothai/unsloth/pull/19054) Studio sd.cpp: direct conv for the VAE on Metal with the implicit GEMM build
- [#19076](https://github.com/unslothai/unsloth/pull/19076) Studio Wan2.2-TI2V-5B: pin inductor reduction configs on gfx1151 so renders reproduce across processes
- [#18914](https://github.com/unslothai/unsloth/pull/18914) FSDP2 generate: keep as many decoder blocks gathered as fit, stream only the rest
- [#19040](https://github.com/unslothai/unsloth/pull/19040) Studio: repair MLX on Chat only Macs and offer MLX models exactly where they run
- [#19051](https://github.com/unslothai/unsloth/pull/19051) Studio: wait longer for a long summary prompt and retry a cut-off summary once
- [#19097](https://github.com/unslothai/unsloth/pull/19097) Bump install.sh / install.ps1 pins to unsloth>=2026.11.10
- [#19074](https://github.com/unslothai/unsloth/pull/19074) Context parallel (Ulysses) for Inkling 2
- [#18890](https://github.com/unslothai/unsloth/pull/18890) Studio: let Max Tokens reach the model's window on Ollama and Custom connections
- [#19049](https://github.com/unslothai/unsloth/pull/19049) Native FSDP2: shard a bitsandbytes 4-bit quantize-on-load while it loads
- [#19084](https://github.com/unslothai/unsloth/pull/19084) Diffusion backend tests: the apply_attention_backend stubs take fallback
- [#18925](https://github.com/unslothai/unsloth/pull/18925) Studio: give local thinking a window budget, and compact after a thought the window still cuts
- [#19081](https://github.com/unslothai/unsloth/pull/19081) Cap Studio paging reserve on Windows integrated CUDA GPUs
- [#19035](https://github.com/unslothai/unsloth/pull/19035) Studio: first-run onboarding for new accounts
- [#19078](https://github.com/unslothai/unsloth/pull/19078) studiobench stream cost: count chat-run chunk events on the wire
- [#18990](https://github.com/unslothai/unsloth/pull/18990) Saved attention on ROCm: keep run_attention in a fullgraph compile inside a checkpoint frame
- [#19041](https://github.com/unslothai/unsloth/pull/19041) Studio: accept diffusers attention names and keep speedups when an explicit pick falls back
- [#19075](https://github.com/unslothai/unsloth/pull/19075) Studio: treat a cached GGUF the repo lists as an equivalent alternate as current
- [#18349](https://github.com/unslothai/unsloth/pull/18349) studio: keep canceled export runs from dispatching pending ops
- [#19063](https://github.com/unslothai/unsloth/pull/19063) Studio: keep the Engram Table row when the model listing comes from the cache
- [#19050](https://github.com/unslothai/unsloth/pull/19050) Studio: leave temperature out of a summary request instead of sending null
- [#18682](https://github.com/unslothai/unsloth/pull/18682) [BUGFIX] Restore chat templates after failed GGUF exports
- [#19071](https://github.com/unslothai/unsloth/pull/19071) Studio: prefer dspark-Inkling-2-Mini-Q8_0_Old.gguf for Inkling-2-Mini
- [#18710](https://github.com/unslothai/unsloth/pull/18710) [BUGFIX] Validate save methods before selecting export paths
- [#19073](https://github.com/unslothai/unsloth/pull/19073) Inkling 2: partly disable compile through the shared helper
- [#19062](https://github.com/unslothai/unsloth/pull/19062) Studio: bound the text encoder release name index
- [#19061](https://github.com/unslothai/unsloth/pull/19061) Studio: give chat PDF exports their own thread pool
- [#19060](https://github.com/unslothai/unsloth/pull/19060) Refuse a Hub adapter base on a Windows network share in Clef and the export MoE probe
- [#19059](https://github.com/unslothai/unsloth/pull/19059) Studio diffusion resume: refuse pickled state on torch < 2.6
- [#18679](https://github.com/unslothai/unsloth/pull/18679) [BUGFIX] Prevent unrelated TensorBoard logs from being uploaded
- [#18889](https://github.com/unslothai/unsloth/pull/18889) Studio: Auto-compact at a percent of each model's window, per model
- [#19036](https://github.com/unslothai/unsloth/pull/19036) Studio: keep connected-model chats generating when the phone sleeps
- [#18974](https://github.com/unslothai/unsloth/pull/18974) SFT eval on TRL >= 1.15: run Unsloth's prediction_step again (compute_metrics and predict() hit EmptyLogits)
- [#19070](https://github.com/unslothai/unsloth/pull/19070) Gloo two-rank precision test: ranks leave together and skip interpreter teardown
- [#18746](https://github.com/unslothai/unsloth/pull/18746) Studio: make summary compaction work on Ollama and Custom connections
- [#18390](https://github.com/unslothai/unsloth/pull/18390) studio: keep recipe execution finish time stable across status polls
- [#18773](https://github.com/unslothai/unsloth/pull/18773) [BUGFIX] Preserve explicit UNSLOTH_COMPILE_DISABLE=1 in FastModel loader
- [#13548](https://github.com/unslothai/unsloth/pull/13548) Studio: Add llama.cpp SYCL prebuilt path for Studio install.sh
- [#18876](https://github.com/unslothai/unsloth/pull/18876) Studio: point NVFP4 and FP8 checkpoints at the vLLM and SGLang engines
- [#19052](https://github.com/unslothai/unsloth/pull/19052) Studio: Auto-compact hint says API-model turns are archived, not dropped
- [#19055](https://github.com/unslothai/unsloth/pull/19055) Tests: read checked-in sources as UTF-8 in two new suites
- [#18680](https://github.com/unslothai/unsloth/pull/18680) [BUGFIX] Restore tokenizer padding side after failed saves
- [#18772](https://github.com/unslothai/unsloth/pull/18772) [BUGFIX] Return (model_types, False) from unsloth_compile_transformers on torch < 2.4
- [#18678](https://github.com/unslothai/unsloth/pull/18678) [BUGFIX] Propagate failed Ollama create and push commands
- [#19053](https://github.com/unslothai/unsloth/pull/19053) Inkling 2 parity test: reload the adapter on CPU explicitly
- [#19011](https://github.com/unslothai/unsloth/pull/19011) Studio: recheck follow-ups for DDP low-precision agreement, oversized graph release and quantize OOM
- [#19048](https://github.com/unslothai/unsloth/pull/19048) Warn before installing a Windows desktop build for the wrong processor
- [#18708](https://github.com/unslothai/unsloth/pull/18708) [BUGFIX] Handle corrupt compressed Codex imports gracefully
- [#18719](https://github.com/unslothai/unsloth/pull/18719) Fused CE: train an unmerged lm_head LoRA and keep the head bias in the SFT loss
- [#19015](https://github.com/unslothai/unsloth/pull/19015) Studio: bound the FLUX.1 adapter split padding
- [#18391](https://github.com/unslothai/unsloth/pull/18391) legacy cli: route supported local datasets to the raw loader
- [#19024](https://github.com/unslothai/unsloth/pull/19024) FP8 on XPU: allow on the fly FP8 loading through the torchao path
- [#19047](https://github.com/unslothai/unsloth/pull/19047) ROCm skinny linear: request fp fusion on both launches and document the constexpr parameters
- [#19042](https://github.com/unslothai/unsloth/pull/19042) Fix two checks red on main: evaluated union in a new studio test, unmapped sidebar glass frame flag
- [#19045](https://github.com/unslothai/unsloth/pull/19045) Image cancel/retry driver: expect the pick toast to name the repo being fetched
- [#18348](https://github.com/unslothai/unsloth/pull/18348) fix auto-install mapping torch 2.7.1 to torch271 extra
- [#19029](https://github.com/unslothai/unsloth/pull/19029) Translate: timed subtitles from video files
- [#19010](https://github.com/unslothai/unsloth/pull/19010) Studio model switch: skip GPU cache work before the inference worker exits, and wait for the GGUF server's VRAM release
- [#17811](https://github.com/unslothai/unsloth/pull/17811) Studio: an undecodable refs/main reads like a missing ref in six more cache readers
- [#19044](https://github.com/unslothai/unsloth/pull/19044) Gloo two-rank precision test: bounded collectives, captured rank output, kill on timeout
- [#18959](https://github.com/unslothai/unsloth/pull/18959) Inkling 2: checkpoint the Mini loop message residual, refuse TP / PP early, parity tests
- [#18873](https://github.com/unslothai/unsloth/pull/18873) Block CUDA graphs under DDP: opt-in rank agreement (UNSLOTH_BLOCK_CUDAGRAPHS_DDP=1, -20% to -27% step on 2xT4)
- [#18716](https://github.com/unslothai/unsloth/pull/18716) Ebook text: leave print page numbers out of the sentence they interrupt
- [#19020](https://github.com/unslothai/unsloth/pull/19020) AdamWBF16: resume without a discarded BF16 copy of the moments
- [#18874](https://github.com/unslothai/unsloth/pull/18874) ROCm gfx1151: 2x faster GRPO rollouts (one-launch skinny decode linear + RL decode graphs)
- [#19019](https://github.com/unslothai/unsloth/pull/19019) Native FSDP2 resume: memory-map the full optimizer.pt
- [#18961](https://github.com/unslothai/unsloth/pull/18961) Text diffusion loader: refuse a network-share base model named by a Hub adapter
- [#19006](https://github.com/unslothai/unsloth/pull/19006) Studio: skip reading the vision tower for MLX text-only LoRA training
- [#19039](https://github.com/unslothai/unsloth/pull/19039) Studio: show the composer's model logo 20% larger on phones
- [#19004](https://github.com/unslothai/unsloth/pull/19004) Studio speech to text: start a cold Auto server at the clip's context instead of restarting it
- [#18729](https://github.com/unslothai/unsloth/pull/18729) Ebook text: read a book whose markup has attributes without a value
- [#19038](https://github.com/unslothai/unsloth/pull/19038) Studio Model hub: maker logos for LFM, Inkling, FLUX, LTX, MOSS, Ornith and Flint
- [#19028](https://github.com/unslothai/unsloth/pull/19028) Studio: H3 training loads only the conditioner layers and VAE encoders it reads
- [#18621](https://github.com/unslothai/unsloth/pull/18621) Ship one Windows installer that selects x64 or ARM64 automatically
- [#19032](https://github.com/unslothai/unsloth/pull/19032) Translate: draw the translation over an image
- [#19026](https://github.com/unslothai/unsloth/pull/19026) Studio: link the diffusion and video LoRA guides from the Train panel
- [#19037](https://github.com/unslothai/unsloth/pull/19037) Locale direction guard: read LOCALES from the module that defines it
- [#19018](https://github.com/unslothai/unsloth/pull/19018) Rank-agreed JIT checkpoint for multi-GPU runs (enable_jit_checkpoint)
- [#19017](https://github.com/unslothai/unsloth/pull/19017) DDP: opt-in lazy gradient bucket allocation (UNSLOTH_DDP_LAZY_BUCKETS=1, torch >= 2.15)
- [#18530](https://github.com/unslothai/unsloth/pull/18530) Unsloth Studio / Desktop: one glass sheet over the pinned sidebar strip and docked Run settings, no seam where they meet
- [#18728](https://github.com/unslothai/unsloth/pull/18728) Raw text: cut text chunks between characters, not inside one
- [#19031](https://github.com/unslothai/unsloth/pull/19031) Studio: say why an image failed instead of a bare mtmd error or "An internal error occurred"
- [#19007](https://github.com/unslothai/unsloth/pull/19007) Unsloth Studio Restyle setup: drop downloaded sources when the Hugging Face cache path is behind a symlink
- [#19033](https://github.com/unslothai/unsloth/pull/19033) Studio: show Computer use as Desktop app only in browser Studio instead of an empty section
- [#18998](https://github.com/unslothai/unsloth/pull/18998) Studio: compile the date probe template once per call and warm the llama-server build probe at startup
- [#19030](https://github.com/unslothai/unsloth/pull/19030) Security audit: re-pin unsloth-zoo 2026.11.9 and trl 1.18.2 sites in the package scan baseline
- [#19034](https://github.com/unslothai/unsloth/pull/19034) PrefixGrouper compile check test: keep the throwaway package importable for Dynamo
- [#18996](https://github.com/unslothai/unsloth/pull/18996) Studio chat history: serialize thread messages per message in the threadpool, off the event loop
- [#18098](https://github.com/unslothai/unsloth/pull/18098) Studio: separate gallery images when prompts change
- [#19014](https://github.com/unslothai/unsloth/pull/19014) unsloth eval: refuse a network-share base model named by a Hub adapter
- [#18714](https://github.com/unslothai/unsloth/pull/18714) Raw text: a longer code fence keeps a shorter fence inside it as code
- [#18715](https://github.com/unslothai/unsloth/pull/18715) Ebook text: drop soft hyphens and zero-width characters from inside words
- [#18730](https://github.com/unslothai/unsloth/pull/18730) Ebook text: skip content a reading system does not display
- [#18994](https://github.com/unslothai/unsloth/pull/18994) Studio: ask the Hub only for the first page a search reads
- [#19027](https://github.com/unslothai/unsloth/pull/19027) Tests: four repo-wide reds on main (gloo banner, klein 9B host RAM, NVFP4 nested kernel, Kaggle input via env)
- [#19000](https://github.com/unslothai/unsloth/pull/19000) Studio Desktop on Windows: probe only backend ports with a TCP listener at launch
- [#18999](https://github.com/unslothai/unsloth/pull/18999) Studio sd.cpp: decode the VAE in one tile when the whole image fits
- [#19009](https://github.com/unslothai/unsloth/pull/19009) Studio datasets: parse only the preview rows of a local CSV in check-format
- [#19002](https://github.com/unslothai/unsloth/pull/19002) Studio: preload the non-English locale catalog from a boot script so the first render does not wait for it
- [#18731](https://github.com/unslothai/unsloth/pull/18731) GRPO: score an unmerged lm_head LoRA through the head's own forward
- [#18709](https://github.com/unslothai/unsloth/pull/18709) [BUGFIX] Isolate full-finetuning state between models
- [#18522](https://github.com/unslothai/unsloth/pull/18522) [Bug] Unsloth Studio / Desktop: Q4NX source picker lists every GGUF in the repo and calls a local Qwen3.5 Q4_0 "packs directly"
- [#18960](https://github.com/unslothai/unsloth/pull/18960) Loader: refuse a network-share base model named by a ModelScope adapter
- [#19001](https://github.com/unslothai/unsloth/pull/19001) Studio Data Recipes: compile each Jinja template once per environment instead of once per row
- [#18882](https://github.com/unslothai/unsloth/pull/18882) Studio: add a Knowledge page to Settings, open it from the chat bar, show embedding progress
- [#18848](https://github.com/unslothai/unsloth/pull/18848) Gemma 4: render JSON-string tool call arguments in the trained call syntax
- [#18902](https://github.com/unslothai/unsloth/pull/18902) Condense comments added since the last cleanup: installers, scripts and CI
- [#18901](https://github.com/unslothai/unsloth/pull/18901) Condense comments added since the last cleanup: core, CLI and tests
- [#18900](https://github.com/unslothai/unsloth/pull/18900) Condense comments added since the last cleanup: Studio backend
- [#19005](https://github.com/unslothai/unsloth/pull/19005) Studio: recheck follow-ups for the merged VAE per-tap, Lanczos preprocess, INT8 attention and MPS guard changes
- [#19012](https://github.com/unslothai/unsloth/pull/19012) Studio: match hosted prequant files on the full base repo id, and stop retrying a failed portable VAE fold
- [#18894](https://github.com/unslothai/unsloth/pull/18894) Resolve the revision once per load for transformers >= 5.18
- [#18986](https://github.com/unslothai/unsloth/pull/18986) Block compile: transformers 5.24 cache contract, second hooked model, replay skip eligibility
- [#18975](https://github.com/unslothai/unsloth/pull/18975) PrefixGrouper: run the strict compile check per padded length on ROCm
- [#18985](https://github.com/unslothai/unsloth/pull/18985) Batched grouped decode: stop recompiling per call under torch.compile
- [#18520](https://github.com/unslothai/unsloth/pull/18520) Unsloth Studio / Desktop: glass strength and lens act the same on every glass surface; 0% is clear, and a 12px readable blur floor applies from 1% up
- [#18747](https://github.com/unslothai/unsloth/pull/18747) [Bug] Unsloth Studio / Desktop: VRAM monitor files a GGUF's KV cache under "Other in use"
- [#18951](https://github.com/unslothai/unsloth/pull/18951) Studio image: read the hosted int8 ConvRot DiT as W8A8 on ROCm for an explicit int8 pick (FLUX.3 Klein, Qwen-Image-2.1)

#### 🐛 New Issues
- [#19072](https://github.com/unslothai/unsloth/issues/19072) [Bug] Unable to load 2 models of the same parent name (concurrently) `feature request` `bug` 💬2
- [#19013](https://github.com/unslothai/unsloth/issues/19013) [Bug] Inkling-2-Mini GGUF outputs NaN ("!!!!") on Tesla V100S (sm_70) with Unsloth cuda12-older and mainline llama.cpp; correct on CPU 💬2
- [#19043](https://github.com/unslothai/unsloth/issues/19043) engram table setting `feature request` 💬2
- [#19124](https://github.com/unslothai/unsloth/issues/19124) [Feature] Cap the height of the per-site Agent permissions list `feature request` 💬1
- [#19022](https://github.com/unslothai/unsloth/issues/19022) Built-in Evaluation Framework for Fine-Tuned Models `feature request` 💬1
- [#19066](https://github.com/unslothai/unsloth/issues/19066) [Bug] Too small context for FLM (NPU) models `feature request` `bug` 💬1
- [#19212](https://github.com/unslothai/unsloth/issues/19212) [Bug] Chat: @skill content is appended to the system prompt only on the turn that mentions it, so turn 2 re-processes the whole conversation (prompt cache miss) `feature request` `bug`
- [#19173](https://github.com/unslothai/unsloth/issues/19173) [Feature] Desktop app: connect to a remote Studio server `feature request`
- [#19140](https://github.com/unslothai/unsloth/issues/19140) Generated files during chats can be downloaded from a dedicated place in the UI. `feature request`
- [#19160](https://github.com/unslothai/unsloth/issues/19160) [Feature] Allow routing embedding model through connections `feature request`
- [#19137](https://github.com/unslothai/unsloth/issues/19137) [Studio Bug] Inkling 2 Mini GPU offloading regression after v0.1.923-beta: 40 → 12 tokens/s `feature request` `bug`
- [#19131](https://github.com/unslothai/unsloth/issues/19131) [Feature] Voice Isolation `feature request`
- [#19021](https://github.com/unslothai/unsloth/issues/19021) Graph-Based Long-Term Memory for LLMs `feature request`

#### 🔒 Closed Issues
- [#18763](https://github.com/unslothai/unsloth/issues/18763) [Bug] New AMD NPU issue Lemonade/FastflowLM - Listing NPU models failed: Extra data: line 2025 column 1 (char 73430)
- [#18723](https://github.com/unslothai/unsloth/issues/18723) [Feature] Unsloth Translate: Add Official Amharic and Popular African Continent Languages Support (Gemma 4 Supports it)
- [#18674](https://github.com/unslothai/unsloth/issues/18674) [Bug] Unsloth Translate - Failed Hmong Detection + Add Hmong as a supported language

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,203 · **Open issues:** 430 · **Last push:** 13h ago

Today in the AIBrix ecosystem, there were no new releases, but several important developments took place with the merging of key pull requests. Notably, PR #3556 improved documentation for the candidatesim K-only baseline, adding evaluations for K values of 16, 32, and 64, alongside updates to the gateway documentation. Additionally, PR #3555 implemented the capacity to detect stale gateway replicas, exporting this information as metrics. On the bug-fixing side, PR #3509 addressed issues related to metric-driven scale-down processes, ensuring stability during metric source failures. The emergence of several new bugs, including issue #3572, which highlights a critical flaw where a rollout's drain mark survives a rollback, complicates the pod traffic management after an update.

#### ✅ Merged PRs
- [#3556](https://github.com/vllm-project/aibrix/pull/3556) [Docs] Fix candidatesim K-only baseline, add K=16/32/64 & N=300 eval, and update gateway docs (#3188)
- [#3555](https://github.com/vllm-project/aibrix/pull/3555) [Feat] Detect a gateway replica's stale discovery and export it as metrics
- [#3558](https://github.com/vllm-project/aibrix/pull/3558) [Bug] Register orchestration API group in scheme for pod-autoscaler-controller
- [#3509](https://github.com/vllm-project/aibrix/pull/3509) [Bug] Hold a metric-driven scale-down while a metric source fails, when opted in

#### 🐛 New Issues
- [#3572](https://github.com/vllm-project/aibrix/issues/3572) [Bug] A rollout's drain mark survives a rollback, so the pod stays Ready but never gets traffic again `kind/bug` `area/orchestration` 💬4
- [#3571](https://github.com/vllm-project/aibrix/issues/3571) [Bug] A rollout drains more pods than maxUnavailable allows, so a role can drop to one routable pod while reporting Ready `kind/bug` `area/orchestration` 💬3
- [#3565](https://github.com/vllm-project/aibrix/issues/3565) [Bug] The standalone model-adapter overlay crash-loops, because its name prefix renames the webhook Secret the manager looks up `kind/bug` `triage/accepted` `area/orchestration` 💬3
- [#3566](https://github.com/vllm-project/aibrix/issues/3566) [Bug] Standalone overlays installed together route to each other's pods, because every manager uses the same selector `kind/bug` `triage/accepted` `area/orchestration` 💬3
- [#3574](https://github.com/vllm-project/aibrix/issues/3574) [Bug] Responses API function_call and function_call_output items are left out of the prefix-match text `kind/bug` `area/gateway` `triage/accepted` 💬2
- [#3564](https://github.com/vllm-project/aibrix/issues/3564) [Bug] prefix-cache-preble logs the full detokenized prompt `area/gateway` `triage/accepted` `kind/misc` 💬2
- [#3576](https://github.com/vllm-project/aibrix/issues/3576) [Bug] SGLang PD prefill HTTP requests outlive client cancellation `kind/bug` `area/gateway` `bug` `triage` 💬1

#### 🔒 Closed Issues
- [#3439](https://github.com/vllm-project/aibrix/issues/3439) [Bug] KPA and APA skip a failed metric source, so the remaining sources can scale the target down
- [#3554](https://github.com/vllm-project/aibrix/issues/3554) [Bug] The standalone autoscaler can't scale a StormService, because the orchestration group isn't in its scheme

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,523 · **Open issues:** 693 · **Last push:** 4h ago

On November 24, 2026, there were no new releases for Semantic Router, but several important updates and fixes were merged. Among them, PR #7204 introduced routing for the OpenAI Speech API (/v1/audio/speech) to the vLLM-Omni TTS backends, enhancing the functionality for speech processing. Additionally, PR #7342 addressed a bug by ensuring that accepted Chat tool deltas are preserved during stream aborts. Noteworthy new issues included #7326, which aims to add a GitHub Copilot CLI plugin to the agent harness, highlighting ongoing development focused on expanding integration capabilities.

#### ✅ Merged PRs
- [#7342](https://github.com/vllm-project/semantic-router/pull/7342) [Bug] Preserve accepted Chat tool deltas on stream abort
- [#7306](https://github.com/vllm-project/semantic-router/pull/7306) [CI/Build] Use a non-key fixture in the replay review redaction test
- [#7204](https://github.com/vllm-project/semantic-router/pull/7204) [Feature] Route OpenAI Speech API (/v1/audio/speech) to vLLM-Omni TTS backends

#### 🐛 New Issues
- [#7326](https://github.com/vllm-project/semantic-router/issues/7326) [Feature] Add a GitHub Copilot CLI plugin to the agent harness `enhancement` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬5
- [#7312](https://github.com/vllm-project/semantic-router/issues/7312) [Bug] Chat streaming drops an accepted tool-call delta when a later delta changes the tool type `bug` `accepted` `wg/data-plane-networking` 💬5
- [#7328](https://github.com/vllm-project/semantic-router/issues/7328) [Bug] Standalone gateway returns an empty HTTP 200 for zero-length Chat Completions responses `bug` `accepted` `wg/data-plane-networking` 💬4
- [#7341](https://github.com/vllm-project/semantic-router/issues/7341) [Bug] `vllm-sr status` hides a pending restart on a `--minimal` stack `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬3
- [#7333](https://github.com/vllm-project/semantic-router/issues/7333) [Bug] Operator ignores the cluster default StorageClass when `storageClassName` is omitted `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#7331](https://github.com/vllm-project/semantic-router/issues/7331) [Bug] Operator deletes an externally managed HPA with the same name as a SemanticRouter `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#7329](https://github.com/vllm-project/semantic-router/issues/7329) [Bug] `vllm-sr serve` clears pending activation when a restart fails `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2

#### 🔒 Closed Issues
- [#3954](https://github.com/vllm-project/semantic-router/issues/3954) [Feature] Route OpenAI Speech API (/v1/audio/speech) to vLLM-Omni TTS backends
- [#7312](https://github.com/vllm-project/semantic-router/issues/7312) [Bug] Chat streaming drops an accepted tool-call delta when a later delta changes the tool type
- [#6793](https://github.com/vllm-project/semantic-router/issues/6793) [Feature] Model runtime: compute Decision 3.0 in BF16 on CPUs that compute BF16 natively
- [#7305](https://github.com/vllm-project/semantic-router/issues/7305) [Bug] Netlify production deploy fails on a sk- fixture in the replay review redaction test
- [#6651](https://github.com/vllm-project/semantic-router/issues/6651) [Feature] Ship a routing diagnosis skill based on Router evidence

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*