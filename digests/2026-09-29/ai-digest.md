# 📡 AI Ecosystem Digest — 2026-09-29

> Generated 2026-09-29 02:30 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 148,491 | 32 | 2 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 126,983 | 23 | 2 | 45 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,180 | 0 | 0 | 1 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,221 | 14 | 29 | 0 | 5 |
| [OpenCode](https://github.com/anomalyco/opencode) | 210,649 | 5 | 45 | 10 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,203 | 25 | 14 | 2 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,747 | 132 | 63 | 161 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 249,820 | 13 | 32 | 6 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,895 | 40 | 18 | 48 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,550 | 10 | 11 | 45 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,810 | 10 | 16 | 21 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,876 | 5 | 2 | 5 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,812 | 27 | 13 | 42 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,965 | 8 | 10 | 110 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,116 | 1 | 1 | 6 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,969 | 22 | 6 | 1 | 0 |

---

## ✨ Highlights

- **Claude Code** released v2.1.284.  
- **OpenAI Codex** had multiple releases including rust-v0.158.0 and rust-v0.160.0-alpha.3.  
- **Gemini CLI** released v0.63.0-nightly.20260929.gfe6350238.  
- **OpenClaw** saw a significant new issue regarding a gateway crash with 7 comments [#160521](https://github.com/openclaw/openclaw/issues/160521).  
- **Qwen Code**'s issue about tracking structured Auto Memory rollout readiness gained traction with 7 comments [#12947](https://github.com/QwenLM/qwen-code/issues/12947).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 148,491 · **Open issues:** 13,577 · **Last push:** 2h ago

On September 29, 2026, Claude Code released version 2.1.284, introducing Claude Sonnet 5.5 as the default Sonnet model on the Anthropic API, now featuring a context length of 1M and pricing at $2/$10 per Mtok, alongside enhanced auto mode responses for directory reading. A merged pull request reverted two modifications related to agents causing truncated reads and forced colors. Notably, a new issue (#98035) was raised requesting a feature to prevent warnings when a user-scope MCP server intentionally shadows a plugin's server, reflecting ongoing discussions about server management in user configurations. Other reported bugs included issues with Fable's usage accounting (#97997) and the auto-memory writes prompt malfunctioning with symlinked project directories (#98044).

#### 🚀 New Releases
- [v2.1.284](https://github.com/anthropics/claude-code/releases/tag/v2.1.284) v2.1.284

#### ✅ Merged PRs
- [#98018](https://github.com/anthropics/claude-code/pull/98018) mods: revert two changes (agents-md truncated reads, diff forced colors)

#### 🐛 New Issues
- [#98035](https://github.com/anthropics/claude-code/issues/98035) [FEATURE] Do not warn when a user-scope MCP server intentionally shadows a plugin's server at the same endpoint (or let the plugin opt out) `enhancement` `platform:windows` `area:mcp` `area:plugins` 💬1
- [#98033](https://github.com/anthropics/claude-code/issues/98033) higgsfield ai `invalid` 💬1
- [#97997](https://github.com/anthropics/claude-code/issues/97997) [BUG] Fable weekly usage counted (20%) with zero Fable requests since reset — only Opus 5.5 / Sonnet 5 used (Max 20x, Windows) `bug` `has repro` `platform:windows` `area:cost` 💬1
- [#98017](https://github.com/anthropics/claude-code/issues/98017) [Bug] Safety classifier blocks legitimate admin UI code generation for user's own extension `bug` `platform:macos` `area:model` 💬1
- [#98023](https://github.com/anthropics/claude-code/issues/98023) [BUG] 2.1.284 freezes on first Enter: new sandbox glob expander synchronously walks all of ~ for "~/**/…" denyRead patterns (follows symlinks, unbounded memory); 2.1.280 fine `bug` `has repro` `platform:linux` `regression` 💬1
- [#97987](https://github.com/anthropics/claude-code/issues/97987) [BUG] Figma MCP tool calls fail with SSE JSON parse error on long responses (desktop app, Code tab) `bug` `platform:macos` `area:mcp` `area:desktop` 💬1
- [#98044](https://github.com/anthropics/claude-code/issues/98044) [BUG] Auto-memory writes prompt every time since 2.1.280 when CLAUDE_CONFIG_DIR's projects/ is a symlink to ~/.claude/projects (allow rules, hooks and auto mode cannot approve) `bug` `has repro` `platform:macos` `memory`
- [#98043](https://github.com/anthropics/claude-code/issues/98043) [GitHub integration] `bug` `platform:web` `github-integration`
- [#98042](https://github.com/anthropics/claude-code/issues/98042) [MODEL] Safety classifier false positive stops defensive encryption planning for user data in my own Android app `bug` `duplicate` `platform:linux` `area:model`
- [#98041](https://github.com/anthropics/claude-code/issues/98041) [Bug] Anthropic API Error: Safety guardrails blocking legitimate cybersecurity educational content `bug` `platform:linux` `area:model`
- [#98039](https://github.com/anthropics/claude-code/issues/98039) [GitHub integration] `question` `platform:web` `github-integration`
- [#98038](https://github.com/anthropics/claude-code/issues/98038) [GitHub integration] org is not linked although the full permission is granted. `bug` `platform:web` `github-integration`
- [#98037](https://github.com/anthropics/claude-code/issues/98037) [BUG] Stats "Longest session" is the first-to-last message span, so resuming an old session reports it as a multi-week session `bug` `platform:macos` `area:tui`
- [#98036](https://github.com/anthropics/claude-code/issues/98036) [GitHub integration] `bug` `needs-info` `github-integration`
- [#98031](https://github.com/anthropics/claude-code/issues/98031) [Bug] Auto-updater in-place binary overwrite causes SIGKILL on subsequent launches (macOS) `bug` `has repro` `platform:macos` `area:installation`
- [#98034](https://github.com/anthropics/claude-code/issues/98034) I'm ready to help generate GitHub issue titles for Claude Code bug reports. Please provide the bug report details, and I'll create a concise, technical issue title following the format specified. `bug` `platform:windows` `needs-info`
- [#98032](https://github.com/anthropics/claude-code/issues/98032) [BUG] Turns hang ~6 minutes then "Connection dropped (ECONNRESET)", sudden onset 2026-09-28, across all sessions on one Mac `bug` `has repro` `platform:macos` `area:mcp`
- [#98030](https://github.com/anthropics/claude-code/issues/98030) [GitHub integration] Zunnie `invalid` `github-integration`
- [#98029](https://github.com/anthropics/claude-code/issues/98029) [Bug] Image paste via Ctrl+V not working in Ghostty with PNGf clipboard format `bug` `platform:macos` `area:tui`
- [#98028](https://github.com/anthropics/claude-code/issues/98028) [GitHub integration] Unable to use tool in claude chats `bug` `platform:web` `github-integration`
- [#98027](https://github.com/anthropics/claude-code/issues/98027) 唐[GitHub integration] `invalid` `github-integration`
- [#98026](https://github.com/anthropics/claude-code/issues/98026) [FEATURE] Focus View should apply to the whole transcript, not only messages after the toggle `enhancement` `area:tui`
- [#98025](https://github.com/anthropics/claude-code/issues/98025) [MODEL] Claude bypassed the standing "no production changes without confirmation" rule again, then repeated the same mistake while writing up the incident `bug` `area:model` `memory` `model`
- [#98024](https://github.com/anthropics/claude-code/issues/98024) [Bug] Excessive request blocking or rate limiting preventing normal operation `bug` `platform:macos` `area:model` `needs-repro`
- [#98022](https://github.com/anthropics/claude-code/issues/98022) [GitHub integration] `invalid` `github-integration`
- [#98021](https://github.com/anthropics/claude-code/issues/98021) [FEATURE] Forward the URL fragment into published artifacts so they can be deep-linked `enhancement` `platform:windows`
- [#98020](https://github.com/anthropics/claude-code/issues/98020) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#98019](https://github.com/anthropics/claude-code/issues/98019) Classic renderer drops or overwrites output when anything above the visible window changes height (verbose makes it frequent) `bug` `has repro` `platform:macos` `area:tui`
- [#98016](https://github.com/anthropics/claude-code/issues/98016) [Bug] Agent workflow performance degradation on trivial tasks `bug` `platform:linux` `area:agents` `needs-repro`
- [#98015](https://github.com/anthropics/claude-code/issues/98015) [Bug] False positive reasoning_extraction safeguard flag on legitimate requests `bug` `duplicate` `platform:macos` `area:model`
- [#97973](https://github.com/anthropics/claude-code/issues/97973) [BUG] Cloud sessions: `gh` is not installed although the proxy already injects a GitHub credential; the GitHub MCP is the only supported path and is limited to session repos `bug` `area:claude-code-web` `platform:web`
- [#97888](https://github.com/anthropics/claude-code/issues/97888) [BUG] hasTrustDialogAccepted reverts to false for previously-trusted, actively-used projects (macOS, 2.1.283) `bug` `has repro` `platform:macos` `area:core`

#### 🔒 Closed Issues
- [#98035](https://github.com/anthropics/claude-code/issues/98035) [FEATURE] Do not warn when a user-scope MCP server intentionally shadows a plugin's server at the same endpoint (or let the plugin opt out)
- [#98022](https://github.com/anthropics/claude-code/issues/98022) [GitHub integration]

### OpenAI Codex (`openai/codex`)

**Stars:** 126,983 · **Open issues:** 19,414 · **Last push:** <1h ago

On September 29, 2026, the Codex ecosystem saw the release of rust-v0.158.0, which introduced new features such as configurable copy-on-select and right-click paste in the fullscreen TUI, as well as support for connecting to MCP servers requiring pre-registered OAuth client secrets. Additionally, rust-v0.160.0-alpha.2 and rust-v0.160.0-alpha.3 were released, although specific changes for these alpha versions were not detailed. Among the merged PRs, notable updates included recovery guidance added to content-filter retries and improvements to the agent command center with history pagination. However, several notable issues emerged, particularly concerning the Windows version 0.158.0, with users reporting transient console windows appearing on prompt submissions and problems with excessive token usage.

#### 🚀 New Releases
- [rust-v0.158.0](https://github.com/openai/codex/releases/tag/rust-v0.158.0) 0.158.0
- [rust-v0.160.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.3) 0.160.0-alpha.3
- [rust-v0.160.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.2) 0.160.0-alpha.2
- [rust-v0.159.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.13) 0.159.0-alpha.13
- [rust-v0.159.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.12) 0.159.0-alpha.12

#### ✅ Merged PRs
- [#49130](https://github.com/openai/codex/pull/49130) Move content-filter guidance into the shared Responses retry handler
- [#49127](https://github.com/openai/codex/pull/49127) Deduplicate cloud and executor skill listings before budgeting
- [#49119](https://github.com/openai/codex/pull/49119) Add recovery guidance to content-filter retries
- [#49118](https://github.com/openai/codex/pull/49118) Correct provider authentication storage documentation
- [#49117](https://github.com/openai/codex/pull/49117) Attribute analytics requests to each thread's product SKU
- [#49114](https://github.com/openai/codex/pull/49114) Point remote compaction tests at the mock ChatGPT server
- [#49112](https://github.com/openai/codex/pull/49112) Add X11 primary selection and middle-click paste support
- [#49106](https://github.com/openai/codex/pull/49106) Add history pagination to the agent command center
- [#49105](https://github.com/openai/codex/pull/49105) Resume unsent TUI input after reconnecting
- [#49103](https://github.com/openai/codex/pull/49103) Balance Windows Bazel test shards using duration estimates
- [#49102](https://github.com/openai/codex/pull/49102) Preserve SQLite vacuum modes and surface pool initialization errors
- [#49100](https://github.com/openai/codex/pull/49100) Reuse the HTTP connection pool for remote plugin requests
- [#49099](https://github.com/openai/codex/pull/49099) Cache parsed plugin manifests across plugin workflows
- [#49098](https://github.com/openai/codex/pull/49098) Resolve Windows sandbox PowerShell fallbacks on the exec server
- [#49097](https://github.com/openai/codex/pull/49097) Notify lifecycle extensions of compaction usage limits
- [#49096](https://github.com/openai/codex/pull/49096) Update `h2` from 0.4.16 to 0.4.19 in Cargo and Bazel lockfiles
- [#49093](https://github.com/openai/codex/pull/49093) Simplify startup promotions to platform-specific desktop app tips
- [#49089](https://github.com/openai/codex/pull/49089) Render follow-up directive labels in the TUI and copied responses
- [#49084](https://github.com/openai/codex/pull/49084) Track app-server running turns incrementally
- [#49082](https://github.com/openai/codex/pull/49082) Skip remote Git discovery for Guardian diff paths
- [#49079](https://github.com/openai/codex/pull/49079) Update and centralize TUI subscription labels
- [#49076](https://github.com/openai/codex/pull/49076) Avoid collecting unused Git metadata in skill analytics
- [#49075](https://github.com/openai/codex/pull/49075) Preserve pending environments when spawning subagents
- [#49074](https://github.com/openai/codex/pull/49074) Propagate Cargo package versions to Bazel Rust targets
- [#49073](https://github.com/openai/codex/pull/49073) Surface realtime voice catalog failures in the TUI
- [#49069](https://github.com/openai/codex/pull/49069) Reclaim unused SQLite log database pages in the background
- [#49067](https://github.com/openai/codex/pull/49067) Keep configuration values out of Windows sandbox policy events
- [#49065](https://github.com/openai/codex/pull/49065) Update Guardian handoff snapshot for separate agent messages
- [#49060](https://github.com/openai/codex/pull/49060) Update Guardian messaging snapshots for native agent messages
- [#49058](https://github.com/openai/codex/pull/49058) Fix Windows sandbox ACL repair for long runtime paths
- [#49057](https://github.com/openai/codex/pull/49057) Add handoff-aware root context for Guardian reviews
- [#49043](https://github.com/openai/codex/pull/49043) Update Pro plan display names in the TUI
- [#49041](https://github.com/openai/codex/pull/49041) Copy selections within inline code as plain text
- [#49038](https://github.com/openai/codex/pull/49038) Preserve encrypted agent messages in Guardian reviews
- [#49037](https://github.com/openai/codex/pull/49037) Show the Plan mode cycling hint in the fullscreen status line
- [#49036](https://github.com/openai/codex/pull/49036) Add opt-in conversation history retrieval to Guardian reviews
- [#49032](https://github.com/openai/codex/pull/49032) Avoid SQLite stalls from connection setup and stderr span logging
- [#49031](https://github.com/openai/codex/pull/49031) Clarify ChatGPT sign-in success copy
- [#49028](https://github.com/openai/codex/pull/49028) Use the numeric ioctl value in the macOS sandbox policy
- [#49019](https://github.com/openai/codex/pull/49019) Use a compatible PowerShell fallback for the Windows MXC sandbox
- [#49000](https://github.com/openai/codex/pull/49000) Isolate the memory startup metadata test from Git enrichment
- [#48983](https://github.com/openai/codex/pull/48983) Avoid full metadata rewrites for thread timestamp updates
- [#48982](https://github.com/openai/codex/pull/48982) Prevent message-board notifications from reopening final answers
- [#48973](https://github.com/openai/codex/pull/48973) Isolate realtime auth fallback test from startup prewarm
- [#48895](https://github.com/openai/codex/pull/48895) Expand native Mermaid flowchart syntax support

#### 🐛 New Issues
- [#48945](https://github.com/openai/codex/issues/48945) [Windows] 0.158.0: codex-windows-sandbox-setup.exe opens visible terminal windows on startup and during use `bug` `windows-os` `sandbox` `CLI` 💬6
- [#49122](https://github.com/openai/codex/issues/49122) Windows 0.158.0: transient console windows flash on every submitted prompt `bug` `windows-os` `CLI` 💬1
- [#49115](https://github.com/openai/codex/issues/49115) codex using to many tokens `bug` `rate-limits` `CLI` 💬3
- [#49090](https://github.com/openai/codex/issues/49090) Android app: threads assigned to Sections are inaccessible; Sections only partially work in Remote `bug` `session` `remote` 💬2
- [#48988](https://github.com/openai/codex/issues/48988) [macOS / iPhone / Work scheduled] Sol, Terra and Astra: unsupported delivery and source claims, history discrepancies `bug` `model-behavior` `app` `imagen` 💬2
- [#48961](https://github.com/openai/codex/issues/48961) [macOS][26.924.22138] Archive fails before thread/archive despite active ChatGPT sign-in (custom provider) `bug` `auth` `custom-model` `app` 💬2
- [#49092](https://github.com/openai/codex/issues/49092) codex versions > 156.1 do not allow copy-paste in mate-terminal on Linux `bug` `TUI` `CLI` 💬2
- [#49128](https://github.com/openai/codex/issues/49128) Codex Desktop: restore a dedicated sidebar section for chats without a project `enhancement` `app` `session` 💬2
- [#49134](https://github.com/openai/codex/issues/49134) Powershell pop up repeatedly when run scripts shell `bug` `windows-os` `CLI` `tool-calls` 💬1
- [#49132](https://github.com/openai/codex/issues/49132) [Windows][Remote Control] Android pairing approval loops to login; host stays 'connection is errored' on CLI 0.158.0 `bug` `windows-os` `auth` `CLI` 💬1
- [#48951](https://github.com/openai/codex/issues/48951) TUI theme does not change when selecting different themes `bug` `windows-os` `TUI` `CLI` 💬1
- [#48969](https://github.com/openai/codex/issues/48969) Possible regression: drag-to-copy fails in WezTerm over SSH with tmux; Alt+C also does not copy `bug` `TUI` `CLI` `remote` 💬1
- [#49110](https://github.com/openai/codex/issues/49110) Cannot scroll chat/plan while approval prompt is shown, making long plans unreadable `bug` `TUI` `CLI` `plan` 💬1
- [#49124](https://github.com/openai/codex/issues/49124) keyboard shortcut CMD + copy not working `bug` `TUI` `CLI` 💬1
- [#49126](https://github.com/openai/codex/issues/49126) [Bug] CLI inputs terminal mouse escape sequences (e.g., [M#\6) when moving mouse `bug` `windows-os` `TUI` `CLI` 💬1
- [#49125](https://github.com/openai/codex/issues/49125) [macOS][Desktop] Threads archived via `codex archive` (CLI) stay in the Recents sidebar, even after restart `bug` `app` `session` 💬1
- [#49120](https://github.com/openai/codex/issues/49120) Invalid prompt Response `bug` `model-behavior` `app` 💬1
- [#49116](https://github.com/openai/codex/issues/49116) Windows Codex Desktop 26.924: Archive fails from UI ("无法归档对话") and app API, but codex archive CLI succeeds `bug` `windows-os` `app` `app-server` 💬1
- [#49133](https://github.com/openai/codex/issues/49133) [Work][Web/macOS] PNG figures remain missing inline after restart, but open correctly from Outputs `bug`
- [#49131](https://github.com/openai/codex/issues/49131) IDE extension leaves interrupted tool card stuck on ‘Running’ after process has ended `bug` `extension` `tool-calls`
- [#49123](https://github.com/openai/codex/issues/49123) [Windows] Refreshing in-app browser immediately blacks out HDMI output (26.924.2738.0, RTX 3050) `bug` `windows-os` `app` `browser`
- [#49121](https://github.com/openai/codex/issues/49121) [macOS 26.924] ChatGPT-linked projects disappear after sidebar request failures; local projects remain `bug` `app` `connectivity`
- [#49113](https://github.com/openai/codex/issues/49113) [Windows] apply_patch fails after CLI 0.154.0 → 0.158.0 upgrade: unexpected --windows-sandbox-private-desktop wrapper argument `bug` `windows-os` `sandbox` `CLI`

#### 🔒 Closed Issues
- [#48969](https://github.com/openai/codex/issues/48969) Possible regression: drag-to-copy fails in WezTerm over SSH with tmux; Alt+C also does not copy
- [#49110](https://github.com/openai/codex/issues/49110) Cannot scroll chat/plan while approval prompt is shown, making long plans unreadable

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,180 · **Open issues:** 793 · **Last push:** 1h ago

On September 29, 2026, Gemini CLI released version v0.63.0-nightly.20260929.gfe6350238, which includes a critical fix to prevent an infinite authentication loop caused by file contention, headless keyring issues, and drops in supervisor state, as addressed in pull request #29448. This fix responds to previously reported problems, aiming to improve the stability of the authentication process. There were no new issues reported in the last 24 hours, marking a relatively routine day for the Gemini CLI ecosystem. Overall, the release brings significant enhancements to user experience by resolving persistent challenges within the authentication workflow.

#### 🚀 New Releases
- [v0.63.0-nightly.20260929.gfe6350238](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-nightly.20260929.gfe6350238) Release v0.63.0-nightly.20260929.gfe6350238

#### ✅ Merged PRs
- [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) fix(auth): prevent infinite auth loop from file contention, headless keyring, and supervisor state drops (#28341)

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,221 · **Open issues:** 2,188 · **Last push:** <1h ago

On September 29, 2026, GitHub Copilot CLI released version 1.0.90-1, which addressed key issues such as the MCP OAuth sign-in process and ensured that withdrawn running prompts remain removed after session resumption. This update follows version 1.0.90-0, which included several fixes and changes, as well as version 1.0.89, which brought enhancements like improved left-click functionality for form inputs and better adherence to pull request templates during PR creation. Notably, new issues arose today, including issue #4983 regarding slow initialization with remote MCP servers, which reported timeout and connection issues after OAuth completion. Other new issues involved problems with text selection in Windows Terminal and AI model stalling during tool calls, highlighting ongoing challenges within the platform.

#### 🚀 New Releases
- [v1.0.90-1](https://github.com/github/copilot-cli/releases/tag/v1.0.90-1) 1.0.90-1
- [v1.0.90-0](https://github.com/github/copilot-cli/releases/tag/v1.0.90-0) 1.0.90-0
- [v1.0.89](https://github.com/github/copilot-cli/releases/tag/v1.0.89) 1.0.89
- [v1.0.89-7](https://github.com/github/copilot-cli/releases/tag/v1.0.89-7) 1.0.89-7
- [v1.0.89-6](https://github.com/github/copilot-cli/releases/tag/v1.0.89-6) 1.0.89-6

#### 🐛 New Issues
- [#4983](https://github.com/github/copilot-cli/issues/4983) Remote MCP server with slow "initialize" fails in Copilot CLI/app (Miro MCP: "server/discover" timeout, then "has no configured connection" after successful OAuth) 💬1
- [#4988](https://github.com/github/copilot-cli/issues/4988) ปัญหา `invalid` 💬1
- [#4986](https://github.com/github/copilot-cli/issues/4986) Copilot CLI ignores no-em-dash style instruction 💬1
- [#4985](https://github.com/github/copilot-cli/issues/4985) MCP server env secret placeholders are not passed to spawned process `triage` 💬1
- [#4991](https://github.com/github/copilot-cli/issues/4991) MCP: Cloudflare connection fails with "Subscription limit reached" after successful OAuth, then reports authentication required `triage`
- [#4990](https://github.com/github/copilot-cli/issues/4990) Busy Copilot CLI Swallowed Messages `triage`
- [#4989](https://github.com/github/copilot-cli/issues/4989) allowedMcpServers entries using serverName never match `triage`
- [#4987](https://github.com/github/copilot-cli/issues/4987) Pasting a path creates a file attachment. No option to turn off `triage`
- [#4984](https://github.com/github/copilot-cli/issues/4984) Accept plan fails to transition from plan model to default model (Opus 5.5) `triage`
- [#4982](https://github.com/github/copilot-cli/issues/4982) AI model stuck indefinitely when using Read Search View/Rg tool calls `triage`
- [#4981](https://github.com/github/copilot-cli/issues/4981) Windows Terminal: selecting text and right-clicking to copy blanks the TUI; rows reappear on mouse clicks `triage`
- [#4980](https://github.com/github/copilot-cli/issues/4980) Claude Opus 5.5: no progress/intent text shown between tool calls `triage`
- [#4979](https://github.com/github/copilot-cli/issues/4979) Terminal canvas opens outside the active worktree session `triage`
- [#4978](https://github.com/github/copilot-cli/issues/4978) extensions.discover() omits enabled marketplace-installed plugin extensions on Copilot CLI 1.0.88 `triage`

#### 🔒 Closed Issues
- [#2958](https://github.com/github/copilot-cli/issues/2958) Support per-mode default model configuration (plan mode vs. autopilot)
- [#1838](https://github.com/github/copilot-cli/issues/1838) Bug: Copilot CLI hangs in Nix/direnv environments due to subprocess I/O deadlock
- [#3392](https://github.com/github/copilot-cli/issues/3392) Bash tool breaks on NixOS with version >=1.0.49
- [#1250](https://github.com/github/copilot-cli/issues/1250) copilot command silently fails on Windows due to getCACertificates('system') error
- [#3602](https://github.com/github/copilot-cli/issues/3602) @github/copilot SDK mutates host `process.env` to inject `safe.bareRepository=explicit` for all spawned processes
- [#2216](https://github.com/github/copilot-cli/issues/2216) [Bug] Text selection highlight has very low contrast on dark terminal backgrounds
- [#1600](https://github.com/github/copilot-cli/issues/1600) Auto selection (10% discount)
- [#1936](https://github.com/github/copilot-cli/issues/1936) Single tilde `~` is being used as markdown strikethrough markup when it should be double-tilde `~~`
- [#3042](https://github.com/github/copilot-cli/issues/3042) "ask" permissionDecision does not suppress the native trust prompt, causing two confirmations per gated tool call
- [#2258](https://github.com/github/copilot-cli/issues/2258) Command blocked in autopilot mode
- [#1530](https://github.com/github/copilot-cli/issues/1530) Support @ file includes in instruction files (like Claude Code)
- [#4050](https://github.com/github/copilot-cli/issues/4050) `ask_user` tool should allow Ctrl-G to support long freeform answers
- [#3434](https://github.com/github/copilot-cli/issues/3434) Restarting actions (update, experimental toggles) don't preserve session
- [#3378](https://github.com/github/copilot-cli/issues/3378) /memory shows invalid "Manage stored memories" link for non-GitHub repositories (404s)
- [#3070](https://github.com/github/copilot-cli/issues/3070) Custom agent frontmatter: accept array for `model:` field
- [#1726](https://github.com/github/copilot-cli/issues/1726) UI: Remaining requests percentage displays unrounded floating-point value
- [#4983](https://github.com/github/copilot-cli/issues/4983) Remote MCP server with slow "initialize" fails in Copilot CLI/app (Miro MCP: "server/discover" timeout, then "has no configured connection" after successful OAuth)
- [#4988](https://github.com/github/copilot-cli/issues/4988) ปัญหา
- [#4986](https://github.com/github/copilot-cli/issues/4986) Copilot CLI ignores no-em-dash style instruction
- [#4442](https://github.com/github/copilot-cli/issues/4442) Copilot CLI binary contains vulnerable version of adm-zip package
- [#4372](https://github.com/github/copilot-cli/issues/4372) When adding two steering message the first gets queued which messes up order.
- [#3322](https://github.com/github/copilot-cli/issues/3322) Post-plan-approval system message contradicts itself ("edits require manual approval" + "Proceed with implementing"), causing the model to stop instead of starting work
- [#3014](https://github.com/github/copilot-cli/issues/3014) TUI footer/status line does not refresh after session/config-backed reasoning effort changes
- [#2902](https://github.com/github/copilot-cli/issues/2902) [Bug] CLI downgrades TERM from xterm-256color to xterm-color — diff highlighting has no colors
- [#2860](https://github.com/github/copilot-cli/issues/2860) CAPIError 400 when agent using `view` tool with GIF file -> blocks autopilot and essentially stops after error.
- [#4820](https://github.com/github/copilot-cli/issues/4820) Add an "end of session" hook that can run a process/skill
- [#1628](https://github.com/github/copilot-cli/issues/1628) `/usage` not working when resuming a session
- [#634](https://github.com/github/copilot-cli/issues/634) Allow assistant to access output from commands executed with ! prefix
- [#4973](https://github.com/github/copilot-cli/issues/4973) When AI uses Search it gets stuck indefinitely

### OpenCode (`anomalyco/opencode`)

**Stars:** 210,649 · **Open issues:** 6,197 · **Last push:** <1h ago

On September 29, 2026, OpenCode released version v1.18.33, which includes critical bug fixes such as ensuring that Cloudflare AI Gateway models now respect provider response and stream timeouts. Among the notable merged pull requests, fixes were made to enhance provider routes with distinct IDs and to improve the xAI variant expectations for responses, as well as updates to session headers for shared affinity. Additionally, a feature was introduced to cap requested output tokens at 256k, enhancing resource management. A new issue of interest was raised about a desktop crash occurring when pasting large text, highlighting a potential performance bottleneck.

#### 🚀 New Releases
- [v1.18.33](https://github.com/anomalyco/opencode/releases/tag/v1.18.33) v1.18.33

#### ✅ Merged PRs
- [#51976](https://github.com/anomalyco/opencode/pull/51976) fix(ai): give provider routes distinct IDs
- [#51975](https://github.com/anomalyco/opencode/pull/51975) feat(core): align shell tool environment with agent conventions
- [#51977](https://github.com/anomalyco/opencode/pull/51977) test(core): update xAI variant expectations for Responses
- [#51931](https://github.com/anomalyco/opencode/pull/51931) fix(core): share affinity in provider session headers
- [#51960](https://github.com/anomalyco/opencode/pull/51960) fix(core): drop session ID and order instructions for prompt-cache reuse
- [#51963](https://github.com/anomalyco/opencode/pull/51963) fix(core): fall back to Cloudflare environment IDs when not configured
- [#51964](https://github.com/anomalyco/opencode/pull/51964) fix(core): request xAI reasoning summaries on Responses variants
- [#51950](https://github.com/anomalyco/opencode/pull/51950) fix(ai): classify invalid Google API keys as authentication errors
- [#51962](https://github.com/anomalyco/opencode/pull/51962) feat(core): cap requested output tokens at 256k
- [#51955](https://github.com/anomalyco/opencode/pull/51955) test(cli): isolate run exit codes between tests

#### 🐛 New Issues
- [#51759](https://github.com/anomalyco/opencode/issues/51759) [FEATURE]: Project-level tabs with a per-project session list in the left panel 💬5
- [#51966](https://github.com/anomalyco/opencode/issues/51966) Fase 7: confirmação human-in-the-loop com níveis configuráveis 💬3
- [#51965](https://github.com/anomalyco/opencode/issues/51965) doom_loop never fires when repeated calls span steps: check only reads the current assistant message 💬2
- [#51987](https://github.com/anomalyco/opencode/issues/51987) [FEATURE]:Clarify in the model doc whether sub-configurations for `variants` use camelCase or snake_case 💬2
- [#51988](https://github.com/anomalyco/opencode/issues/51988) Desktop crash: pasting ~270KB text into prompt hangs renderer (JSON.stringify on main thread) 💬1

#### 🔒 Closed Issues
- [#39653](https://github.com/anomalyco/opencode/issues/39653) GPT-5.6 Sol, server overloaded errors
- [#37762](https://github.com/anomalyco/opencode/issues/37762) Problems With Responses
- [#39256](https://github.com/anomalyco/opencode/issues/39256) [FEATURE]:Clarify in the model doc whether sub-configurations for `variants` use camelCase or snake_case
- [#38655](https://github.com/anomalyco/opencode/issues/38655) I can't switch between plan and build after the latest update
- [#37598](https://github.com/anomalyco/opencode/issues/37598) [Bug] Session identifier missing in OpenCode Go cache records & unstable cache hit behavior with GLM-5.2
- [#37566](https://github.com/anomalyco/opencode/issues/37566) Opencode-ai v1.18.3 - Corrupted executable on Windows
- [#39527](https://github.com/anomalyco/opencode/issues/39527) time
- [#39399](https://github.com/anomalyco/opencode/issues/39399) [FEATURE]: SIMPLE CHAT
- [#39771](https://github.com/anomalyco/opencode/issues/39771) [FEATURE]: Fast failure on network errors and concise error output
- [#37666](https://github.com/anomalyco/opencode/issues/37666) NVIDIA API ROUTER ISSUE
- [#37748](https://github.com/anomalyco/opencode/issues/37748) why tokens run so quickly?
- [#39611](https://github.com/anomalyco/opencode/issues/39611) [FEATURE]: WYSIWYG Preview & Edit for docx / HTML / Markdown
- [#39494](https://github.com/anomalyco/opencode/issues/39494) Error: Sidecar did not become ready within 60000ms: C:\Users\Suppe\AppData\Local\Programs\@opencode-aidesktop\resources\app.asar\out\main\sidecar.js
- [#51966](https://github.com/anomalyco/opencode/issues/51966) Fase 7: confirmação human-in-the-loop com níveis configuráveis
- [#37746](https://github.com/anomalyco/opencode/issues/37746) On mobile, session sidebar stays open after selecting a session, hiding the session
- [#38506](https://github.com/anomalyco/opencode/issues/38506) Theme doesn't change automatically as per terminal theme
- [#38585](https://github.com/anomalyco/opencode/issues/38585) Windows: select-all bound to super+a (OS-reserved) and word-selection missing ctrl+shift+arrow
- [#37750](https://github.com/anomalyco/opencode/issues/37750) Deeplink feature does not resolve
- [#37764](https://github.com/anomalyco/opencode/issues/37764) chat fails with directory=/home/<username>/��
- [#38765](https://github.com/anomalyco/opencode/issues/38765) deepseek giving up
- [#39316](https://github.com/anomalyco/opencode/issues/39316) Stuck failed network connection
- [#39293](https://github.com/anomalyco/opencode/issues/39293) ZEN gemini-3.6-flash returns "Upstream request failed" while gemini-3.5-flash works
- [#38500](https://github.com/anomalyco/opencode/issues/38500) OpenCode not answering
- [#39188](https://github.com/anomalyco/opencode/issues/39188) free usage exceed issue
- [#39202](https://github.com/anomalyco/opencode/issues/39202) [FEATURE]:翻译修改
- [#39404](https://github.com/anomalyco/opencode/issues/39404) Docs: typo in enterprise.mdx for IT lang
- [#39543](https://github.com/anomalyco/opencode/issues/39543) Desktop v1.18.9: npm plugin install still fails with @opencode-ai/plugin@local (regression of #26085)
- [#39455](https://github.com/anomalyco/opencode/issues/39455) fix(ui): all dropdown selects stop opening after first selection in settings
- [#39477](https://github.com/anomalyco/opencode/issues/39477) Web UI: "Copy response" button only copies the last text part of a turn
- [#39338](https://github.com/anomalyco/opencode/issues/39338) TUI: option to configure input cursor style (line/beam instead of block)
- [#39639](https://github.com/anomalyco/opencode/issues/39639) [Bug] Desktop provider "Connect" only stores API key — provider definition is not persisted
- [#39785](https://github.com/anomalyco/opencode/issues/39785) mod+shift+w and mod+o do nothing in the new layout
- [#39769](https://github.com/anomalyco/opencode/issues/39769) [FEATURE]: Long-running shell commands block the entire conversation
- [#39773](https://github.com/anomalyco/opencode/issues/39773) bug(core): empty git repos share the same "global" project ID, causing sessions to leak across unrelated directories
- [#39763](https://github.com/anomalyco/opencode/issues/39763) TUI: mouse wheel scrolls by message blocks - should scroll line-by-line
- [#38660](https://github.com/anomalyco/opencode/issues/38660) desktop bun dev report Missed semicolon
- [#37599](https://github.com/anomalyco/opencode/issues/37599) Unexpected Qwen 3.7 Max usage despite DeepSeek configuration
- [#39186](https://github.com/anomalyco/opencode/issues/39186) not working
- [#38632](https://github.com/anomalyco/opencode/issues/38632) [BUG]: Session suddenly produces garbled/nonsensical responses (胡言乱语)
- [#37583](https://github.com/anomalyco/opencode/issues/37583) A bug of new ui
- [#37755](https://github.com/anomalyco/opencode/issues/37755) Opencode Restart is forced
- [#39679](https://github.com/anomalyco/opencode/issues/39679) question(llm): does the `auto` cache policy leave the growing transcript unanchored?
- [#39594](https://github.com/anomalyco/opencode/issues/39594) [FEATURE]:你们奖励的那个5$额度能恢复吗？
- [#39370](https://github.com/anomalyco/opencode/issues/39370) referring to #38384, which I closed
- [#39341](https://github.com/anomalyco/opencode/issues/39341) fix(app): model selector keyboard navigation does not follow visual group order

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,203 · **Open issues:** 1,522 · **Last push:** <1h ago

On September 29, 2026, there were no new releases for Qwen Code, but several notable changes were merged, including the adoption of durable local Runtime workers in PR #12865 and an update in PR #12934 that shares home-expansion and spawn-environment rules for compatibility evaluation. Among the newly reported issues, #12947 stands out as it tracks the rollout readiness for structured Auto Memory on the main branch, while #12919 addresses a bug related to edited cards in the web-shell, highlighting a significant oversight in diff reconstruction. Overall, the day was marked by routine maintenance and incremental improvements to enhance the functionality of the managed agent features.

#### ✅ Merged PRs
- [#12865](https://github.com/QwenLM/qwen-code/pull/12865) feat(managed-agent): Adopt durable local Runtime workers
- [#12934](https://github.com/QwenLM/qwen-code/pull/12934) fix(managed-agent): Share the home-expansion and spawn-environment rules of the compatibility evaluation

#### 🐛 New Issues
- [#12947](https://github.com/QwenLM/qwen-code/issues/12947) Track structured Auto Memory rollout readiness on main `status/in-progress` `priority/P2` `category/core` `scope/token-management` 💬7
- [#12928](https://github.com/QwenLM/qwen-code/issues/12928) Remove hard-coded temperature from internal model requests `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬4
- [#12929](https://github.com/QwenLM/qwen-code/issues/12929) fix(memory): schedule legacy metadata migration after tool-completing turns `priority/P2` `type/bug` `category/core` `scope/memory` 💬4
- [#12919](https://github.com/QwenLM/qwen-code/issues/12919) fix(web-shell): a completed Edit card whose diff was rebuilt from its arguments shows no hint that the diff was reconstructed `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬4
- [#12899](https://github.com/QwenLM/qwen-code/issues/12899) runtime-broker: the +/-2048 scale guard enforces only half the codec's digit budget, so three value classes still persist unreadable rows `priority/P2` `type/bug` `category/core` `scope/sdk` 💬4
- [#12889](https://github.com/QwenLM/qwen-code/issues/12889) Deferred `tool_call` schema allows empty arguments for tools with required fields `priority/P2` `type/bug` `category/tools` `status/ready-for-human` 💬4
- [#12961](https://github.com/QwenLM/qwen-code/issues/12961) [core] An unclosed `<system-reminder>` tag in user text silently truncates the rest of the message `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#12957](https://github.com/QwenLM/qwen-code/issues/12957) fix(serve): Stop renewing settled Hosted Shell publication grants `priority/P3` `type/bug` `category/cli` `scope/shell` 💬3
- [#12956](https://github.com/QwenLM/qwen-code/issues/12956) follow-up(runtime-broker): Handle durable startup zombies and minimal Linux test hosts `priority/P2` `type/bug` `category/core` `scope/linux` 💬3
- [#12905](https://github.com/QwenLM/qwen-code/issues/12905) Hosted file tools: make invalid absolute file_path a durable refusal `priority/P2` `type/bug` `category/tools` `scope/file-operations` 💬3
- [#12952](https://github.com/QwenLM/qwen-code/issues/12952) feat(managed-agent): Stage G authoritative Session history, writer fencing and takeover `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#12941](https://github.com/QwenLM/qwen-code/issues/12941) test(managed-agent): record the Hosted baseline latency measurements Stage A requires `priority/P2` `type/feature-request` `scope/latency` `scope/testing` 💬3
- [#12914](https://github.com/QwenLM/qwen-code/issues/12914) bug(daemon): persist session approval mode across cold restore and restart `priority/P2` `type/bug` `category/security` `scope/session-management` 💬3
- [#12940](https://github.com/QwenLM/qwen-code/issues/12940) test(sdk-java): prevent duplicate Flyway migration versions from breaking main `priority/P2` `type/feature-request` `category/development` `scope/testing` 💬3
- [#12936](https://github.com/QwenLM/qwen-code/issues/12936) Runtime Broker: immediate /executions route still persists toolName/input in reference_json `priority/P2` `type/feature-request` `category/core` `need-discussion` 💬3
- [#12938](https://github.com/QwenLM/qwen-code/issues/12938) Managed auto-memory extraction is skipped after tool-completing CLI turns `priority/P1` `type/bug` `category/core` `scope/memory` 💬3
- [#12937](https://github.com/QwenLM/qwen-code/issues/12937) Managed Agent: worker release refusal strands Workspace storage ownership `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#12902](https://github.com/QwenLM/qwen-code/issues/12902) Main CI failed: Qwen Code CI on 42d7a2b833a7 `type/bug` `status/ready-for-agent` `autofix/skip` 💬3
- [#12908](https://github.com/QwenLM/qwen-code/issues/12908) fix(workflows): follow up on completion names, nested errors, and notice ordering `priority/P3` `type/bug` `category/core` `scope/commands` 💬3
- [#12904](https://github.com/QwenLM/qwen-code/issues/12904) Hosted Shell: recover a Workspace lease after incomplete pipe capture `priority/P1` `type/bug` `category/core` `need-discussion` 💬3
- [#12969](https://github.com/QwenLM/qwen-code/issues/12969) fix(core): Handle partial ANSI and UTF-8 prefixes in Shell previews `priority/P3` `status/blocked` `type/bug` `category/core` 💬2
- [#12962](https://github.com/QwenLM/qwen-code/issues/12962) Release Failed for v0.24.6-nightly.20260928.9f6138ae44 on 2026-09-28 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12959](https://github.com/QwenLM/qwen-code/issues/12959) feat(core): add maxConcurrentBackgroundAgents setting and retry on transient API errors for background subagents 💬2
- [#12911](https://github.com/QwenLM/qwen-code/issues/12911) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > omits settled output when only the complete tool result record… `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12925](https://github.com/QwenLM/qwen-code/issues/12925) Main CI failed: E2E Tests — cli/qwen-serve-streaming.test.ts > … > publishes session_died after the qwen --acp child is SIGKILL-ed `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2

#### 🔒 Closed Issues
- [#12835](https://github.com/QwenLM/qwen-code/issues/12835) Skills listing is injected even when the Skill tool is excluded
- [#12880](https://github.com/QwenLM/qwen-code/issues/12880) Release Failed for v0.24.6-nightly.20260927.3f5ae3ffeb on 2026-09-27
- [#12899](https://github.com/QwenLM/qwen-code/issues/12899) runtime-broker: the +/-2048 scale guard enforces only half the codec's digit budget, so three value classes still persist unreadable rows
- [#12844](https://github.com/QwenLM/qwen-code/issues/12844) fix(cli): `qwen mcp reconnect` sends a usage-statistics session_start even when usage statistics are disabled
- [#12093](https://github.com/QwenLM/qwen-code/issues/12093) CSP comments state the wrong failure mode for bracketed IPv6 host-sources
- [#12905](https://github.com/QwenLM/qwen-code/issues/12905) Hosted file tools: make invalid absolute file_path a durable refusal
- [#12914](https://github.com/QwenLM/qwen-code/issues/12914) bug(daemon): persist session approval mode across cold restore and restart
- [#12629](https://github.com/QwenLM/qwen-code/issues/12629) fix(web-shell): an empty-args MCP approval still renders "{}" as its subtitle
- [#12871](https://github.com/QwenLM/qwen-code/issues/12871) Main CI failed: E2E Tests — cli/acp-integration.test.ts > … > should work with new --acp flag without warnings
- [#12902](https://github.com/QwenLM/qwen-code/issues/12902) Main CI failed: Qwen Code CI on 42d7a2b833a7
- [#12716](https://github.com/QwenLM/qwen-code/issues/12716) docs: seven dead links in the GitHub Action, extensions, and privacy pages
- [#12911](https://github.com/QwenLM/qwen-code/issues/12911) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > omits settled output when only the complete tool result record…
- [#8926](https://github.com/QwenLM/qwen-code/issues/8926) feat(channels): bound session lifetime so a long-lived route cannot grow past the context window
- [#11126](https://github.com/QwenLM/qwen-code/issues/11126) Deferred review findings from PR #11110

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

**Stars:** 390,747 · **Open issues:** 8,953 · **Last push:** <1h ago

On September 29, 2026, there were no new releases for OpenClaw, but several impactful pull requests were merged. Key updates include performance improvements to the OpenAI stream allocation overhead and fixes to various components, such as retaining usage and provider errors after rejected tool calls, which enhances the reliability of AI interactions. A significant issue was reported regarding the Gateway crashing due to a state database read-admission seal error, alongside several other impactful bugs and feature requests, including memory leaks in the prepared-model-catalog worker. This combination of merges and emergent issues highlights an active period of development and maintenance within the OpenClaw ecosystem.

#### ✅ Merged PRs
- [#160894](https://github.com/openclaw/openclaw/pull/160894) perf(plugins): reduce OpenAI stream allocation overhead
- [#160841](https://github.com/openclaw/openclaw/pull/160841) fix(code-mode): exec backgrounds after 1 s and forces extra poll turns
- [#160883](https://github.com/openclaw/openclaw/pull/160883) refactor(webhooks): deslop target and guard helpers
- [#160203](https://github.com/openclaw/openclaw/pull/160203) fix(subagents): avoid Gateway blocking while Stop saves state
- [#149071](https://github.com/openclaw/openclaw/pull/149071) fix(ai): retain usage and provider errors after rejected Responses tool calls
- [#160754](https://github.com/openclaw/openclaw/pull/160754) refactor(line): share carousel delivery test fixture
- [#160698](https://github.com/openclaw/openclaw/pull/160698) fix(exec): detect combined shell stdin flags
- [#159945](https://github.com/openclaw/openclaw/pull/159945) refactor(plugins): deslop plugin runtime fifth pass
- [#160794](https://github.com/openclaw/openclaw/pull/160794) refactor(daemon): prune redundant Scheduler test fixtures
- [#158995](https://github.com/openclaw/openclaw/pull/158995) fix(ci): keep untouched line-limit drift from blocking changed checks
- [#160715](https://github.com/openclaw/openclaw/pull/160715) fix(ci): restore Doctor plugin repair lint budget
- [#160769](https://github.com/openclaw/openclaw/pull/160769) perf(gateway): reuse pending narration deadlines
- [#160779](https://github.com/openclaw/openclaw/pull/160779) refactor(gateway): remove duplicate artifact API scenario
- [#160771](https://github.com/openclaw/openclaw/pull/160771) chore(ui): refresh control ui locales
- [#159860](https://github.com/openclaw/openclaw/pull/159860) fix: dashboards require approval after native app authentication
- [#160753](https://github.com/openclaw/openclaw/pull/160753) chore(ui): refresh control ui locales
- [#160147](https://github.com/openclaw/openclaw/pull/160147) fix: worker turns fail on older session-host nodes after the Gateway adds a worker tool
- [#160714](https://github.com/openclaw/openclaw/pull/160714) refactor(test): share caller-mode migration fixtures
- [#160188](https://github.com/openclaw/openclaw/pull/160188) fix(nodes): explain and recover session-host setup problems
- [#160747](https://github.com/openclaw/openclaw/pull/160747) improve(ui): Ask in side chat stages selection comments
- [#160887](https://github.com/openclaw/openclaw/pull/160887) fix(sessions): preserve rollback-journal commit waits
- [#160110](https://github.com/openclaw/openclaw/pull/160110) improve: show worker runtime install progress on paired session hosts
- [#159525](https://github.com/openclaw/openclaw/pull/159525) feat(approvals): enforce scoped Slack plugin reviewers
- [#160885](https://github.com/openclaw/openclaw/pull/160885) fix(health): report unreadable config instead of missing Gateway credentials
- [#160790](https://github.com/openclaw/openclaw/pull/160790) fix(node): headless nodes with default plugins never activate automatic updates
- [#160859](https://github.com/openclaw/openclaw/pull/160859) fix(release): keep stable publication handoffs moving
- [#160801](https://github.com/openclaw/openclaw/pull/160801) perf(sessions): yield during SQLite entry write contention
- [#160843](https://github.com/openclaw/openclaw/pull/160843) fix(ci): restore config and node adapter lint budgets
- [#160874](https://github.com/openclaw/openclaw/pull/160874) refactor(daemon): remove unused Unix fixture controls
- [#160867](https://github.com/openclaw/openclaw/pull/160867) fix(ui): progress card stays after dismissing an unfinished or note-only card
- [#160880](https://github.com/openclaw/openclaw/pull/160880) chore(ui): refresh control ui locales
- [#160862](https://github.com/openclaw/openclaw/pull/160862) refactor(scheduler): deslop suspension state
- [#160838](https://github.com/openclaw/openclaw/pull/160838) fix(test): prevent SQLite pathname failures in shared Gateway shards
- [#160849](https://github.com/openclaw/openclaw/pull/160849) refactor(cron): deslop stream output ownership
- [#160592](https://github.com/openclaw/openclaw/pull/160592) fix: keep update history responsive during reconciliation
- [#160853](https://github.com/openclaw/openclaw/pull/160853) fix(ui): update channel cards as soon as a channel setup is applied
- [#160651](https://github.com/openclaw/openclaw/pull/160651) fix(openrouter): configured models send high reasoning effort when xhigh is selected
- [#160661](https://github.com/openclaw/openclaw/pull/160661) fix: recognize Cloudflare OIDC custom GitHub claims
- [#160846](https://github.com/openclaw/openclaw/pull/160846) refactor(webhooks): deslop target ownership and body guards
- [#160848](https://github.com/openclaw/openclaw/pull/160848) refactor(ingress): deslop worker dispatch and pressure health
- [#160834](https://github.com/openclaw/openclaw/pull/160834) feat(ui): remove large pasted text from composer preview
- [#160796](https://github.com/openclaw/openclaw/pull/160796) fix(release): extend npm readback timeout
- [#159817](https://github.com/openclaw/openclaw/pull/159817) refactor(commands): deslop commands fifth pass
- [#160828](https://github.com/openclaw/openclaw/pull/160828) fix(update): restart the previous Gateway when Git rollback cannot rewrite a reflog-less branch
- [#160854](https://github.com/openclaw/openclaw/pull/160854) refactor(daemon): remove unused Windows control fixtures
- [#160774](https://github.com/openclaw/openclaw/pull/160774) fix(ui): resume first-run model setup after a page reload
- [#157465](https://github.com/openclaw/openclaw/pull/157465) feat: speak Gemini dialogues with two voices
- [#134425](https://github.com/openclaw/openclaw/pull/134425) fix(ai): reshape+restore non-canonical tool-call ids for HTTP continuation
- [#160547](https://github.com/openclaw/openclaw/pull/160547) fix(ui): session creation fails when a runtime is selected
- [#160855](https://github.com/openclaw/openclaw/pull/160855) chore(ui): refresh control ui locales
- [#160837](https://github.com/openclaw/openclaw/pull/160837) improve(ui): keep streaming replies fast in long chats
- [#160776](https://github.com/openclaw/openclaw/pull/160776) test(agents,ui,tooling): remove low-value tests (batch d090)
- [#160844](https://github.com/openclaw/openclaw/pull/160844) improve(ui): soften GitHub reference backgrounds across themes
- [#160802](https://github.com/openclaw/openclaw/pull/160802) fix(gateway): `gateway run --force` fails on Linux hosts with IPv6 disabled
- [#160840](https://github.com/openclaw/openclaw/pull/160840) fix(codex): stop advertising tool discovery when a run allows no tools
- [#157007](https://github.com/openclaw/openclaw/pull/157007) fix(gateway): derive the darwin stop budget from the launchd job
- [#160759](https://github.com/openclaw/openclaw/pull/160759) fix(ui): keep the idle presence dot amber in the light theme
- [#160807](https://github.com/openclaw/openclaw/pull/160807) perf(agents): reuse prompt diagnostic text measurements
- [#160748](https://github.com/openclaw/openclaw/pull/160748) fix(ui): release memory when closing terminals
- [#160795](https://github.com/openclaw/openclaw/pull/160795) fix(gateway): avoid five-minute startup waits after forced stops
- [#160830](https://github.com/openclaw/openclaw/pull/160830) fix: owners signed in with the shared Gateway token can steer each other's turns
- [#160400](https://github.com/openclaw/openclaw/pull/160400) fix(doctor): preserve the live plugin index during read-only checks
- [#160835](https://github.com/openclaw/openclaw/pull/160835) refactor(storage): deslop SQLite recovery cleanup
- [#160783](https://github.com/openclaw/openclaw/pull/160783) fix(outbound): prevent SQLite lock failures when sending local media
- [#160813](https://github.com/openclaw/openclaw/pull/160813) fix(onboarding): fail fast when a model endpoint is unreachable
- [#160833](https://github.com/openclaw/openclaw/pull/160833) perf(ui): stop Web Awesome's page rule from restyling html and body on every insertion
- [#160814](https://github.com/openclaw/openclaw/pull/160814) fix(gateway): handle connection bursts behind shared IPs
- [#160829](https://github.com/openclaw/openclaw/pull/160829) refactor(line): prune redundant tests and fixtures
- [#159588](https://github.com/openclaw/openclaw/pull/159588) refactor(config): deslop config fourth pass
- [#160248](https://github.com/openclaw/openclaw/pull/160248) fix(gateway): a message sent during a cloud worker runtime update fails the update and is interrupted
- [#160809](https://github.com/openclaw/openclaw/pull/160809) fix(scripts): local macOS packaging fails on the second run in the same checkout
- [#160763](https://github.com/openclaw/openclaw/pull/160763) fix(macos): keep tokenless native dashboards connected after route refresh
- [#160208](https://github.com/openclaw/openclaw/pull/160208) perf(plugins): reduce repeated stream payload inspection
- [#157498](https://github.com/openclaw/openclaw/pull/157498) fix: Claude CLI turns are killed mid-run when Claude Code auto-compacts
- [#160788](https://github.com/openclaw/openclaw/pull/160788) refactor(cron): deslop cron service, core, store and isolated agent
- [#159879](https://github.com/openclaw/openclaw/pull/159879) feat(slack-huddles): join Slack huddles as a signed-in Slack user
- [#160822](https://github.com/openclaw/openclaw/pull/160822) fix(ui): clear failed-message inbox alerts after review
- [#160552](https://github.com/openclaw/openclaw/pull/160552) refactor(plugins): deslop tool, search and media plugins
- [#160798](https://github.com/openclaw/openclaw/pull/160798) refactor(scripts): deslop tooling scripts
- [#160816](https://github.com/openclaw/openclaw/pull/160816) fix(macos): app-link bridge test times out on main under native suite load
- [#159545](https://github.com/openclaw/openclaw/pull/159545) improve: keep session lists warm when changing the Talk model
- [#160676](https://github.com/openclaw/openclaw/pull/160676) docs(imap): clarify trusted Authentication-Results boundary
- [#160786](https://github.com/openclaw/openclaw/pull/160786) fix: preserve requester tools after subagents settle
- [#160811](https://github.com/openclaw/openclaw/pull/160811) perf(tool-search): reuse catalog tokens across Code Mode cells
- [#160606](https://github.com/openclaw/openclaw/pull/160606) test(wizard,cli,code-mode,browser,codex): remove low-value tests (batch d089)
- [#160136](https://github.com/openclaw/openclaw/pull/160136) fix: keep token, HTTP, and approval work alive when another user's identity scopes change
- [#160808](https://github.com/openclaw/openclaw/pull/160808) perf(ui): stop forbidden canvas lease refresh loops
- [#160755](https://github.com/openclaw/openclaw/pull/160755) fix(doctor): retained session-source warning never clears after deferred plugin migrations complete
- [#160787](https://github.com/openclaw/openclaw/pull/160787) perf(gateway): reduce broadcast fanout allocations
- [#160432](https://github.com/openclaw/openclaw/pull/160432) fix(browser): read Windows browser version via environment data so spaced paths stop breaking the PowerShell probe
- [#160679](https://github.com/openclaw/openclaw/pull/160679) fix(tlon): bound pending approval queue
- [#160071](https://github.com/openclaw/openclaw/pull/160071) fix(ui): multi-file chat sends fail late when attachments together exceed the frame limit
- [#160728](https://github.com/openclaw/openclaw/pull/160728) test: speed up database preflight lifecycle tests
- [#160800](https://github.com/openclaw/openclaw/pull/160800) perf(subagents): avoid sibling scans for registry patches
- [#150915](https://github.com/openclaw/openclaw/pull/150915) fix(channels): isolate Mattermost sends and retain capture owner proof
- [#160791](https://github.com/openclaw/openclaw/pull/160791) chore(ios): simplify store release workflow
- [#140012](https://github.com/openclaw/openclaw/pull/140012) fix(security): parse gpt generation numbers in the audit tier check
- [#160726](https://github.com/openclaw/openclaw/pull/160726) chore(ui): refresh control ui locales
- [#160460](https://github.com/openclaw/openclaw/pull/160460) refactor(qa-lab): deslop QA Lab fifth pass
- [#160704](https://github.com/openclaw/openclaw/pull/160704) chore(ui): refresh control ui locales
- [#160784](https://github.com/openclaw/openclaw/pull/160784) docs(ios): setup guide understates where CI uses SimSlim
- [#160265](https://github.com/openclaw/openclaw/pull/160265) perf(nodes): reuse warm workers so node session turns start as fast as local ones
- [#160764](https://github.com/openclaw/openclaw/pull/160764) refactor: remove redundant final-delivery reconciliation
- [#160768](https://github.com/openclaw/openclaw/pull/160768) fix(active-memory): recalls on claude-cli never reuse the prompt cache
- [#160184](https://github.com/openclaw/openclaw/pull/160184) fix(doctor): update refuses when lint warns about an unusable agent database
- [#155097](https://github.com/openclaw/openclaw/pull/155097) fix(agentmail): allow official ClawHub channel to load
- [#152844](https://github.com/openclaw/openclaw/pull/152844) fix(google): Gemini 3.8 Live never replies when the microphone sends digital-zero silence (audioStreamEnd stalls the turn)
- [#160404](https://github.com/openclaw/openclaw/pull/160404) improve: speed up child-session lists on large rosters
- [#160775](https://github.com/openclaw/openclaw/pull/160775) chore(release): prepare 2026.9.7
- [#160314](https://github.com/openclaw/openclaw/pull/160314) improve: keep Gateway responsive while compaction loads history
- [#160766](https://github.com/openclaw/openclaw/pull/160766) test(agents,channels,cli): remove low-value tests (batch d091)
- [#160686](https://github.com/openclaw/openclaw/pull/160686) fix(ui): open voice setup before history admission
- [#160761](https://github.com/openclaw/openclaw/pull/160761) fix: disable plugin Connect when gateway OAuth is unavailable
- [#160329](https://github.com/openclaw/openclaw/pull/160329) fix(http): rejection responses reset connections on Bun with the new node:http
- [#160310](https://github.com/openclaw/openclaw/pull/160310) fix: SQLite workers fail when running OpenClaw from source under Bun on Windows
- [#160658](https://github.com/openclaw/openclaw/pull/160658) fix: prevent repeated plugin captures during agent turns
- [#160586](https://github.com/openclaw/openclaw/pull/160586) fix(ci): planner ownership census times out on loaded runners
- [#160756](https://github.com/openclaw/openclaw/pull/160756) fix(browser): Windows version probe pushes the env-var count over budget
- [#160677](https://github.com/openclaw/openclaw/pull/160677) fix(ui): keep composer focus when onboarding suggestions arrive
- [#160092](https://github.com/openclaw/openclaw/pull/160092) feat(plugins): show installed accounts and credential status
- [#160687](https://github.com/openclaw/openclaw/pull/160687) fix(gateway): size bootstrap artifact transfer lifetime from its operation window
- [#157331](https://github.com/openclaw/openclaw/pull/157331) feat: speak with Gemini 3.8 Flash TTS
- [#160724](https://github.com/openclaw/openclaw/pull/160724) fix(ui): keep Inbox empty-state heading larger than description
- [#160088](https://github.com/openclaw/openclaw/pull/160088) fix(slack): progress card links open the visible work session instead of the main session
- [#160216](https://github.com/openclaw/openclaw/pull/160216) perf(cron): narrow delivery-target session reads
- [#160705](https://github.com/openclaw/openclaw/pull/160705) fix(ui): let channel setups run back to back
- [#160713](https://github.com/openclaw/openclaw/pull/160713) fix(onboarding): stop claiming inference is ready after Skip for now
- [#155841](https://github.com/openclaw/openclaw/pull/155841) fix(slack): Socket Mode never connects when HTTPS_PROXY is set
- [#160170](https://github.com/openclaw/openclaw/pull/160170) fix(update): preserve operator work during retained Git rollback
- [#160140](https://github.com/openclaw/openclaw/pull/160140) improve(ui): compact Online people activity rows
- [#160701](https://github.com/openclaw/openclaw/pull/160701) fix: streamed replies split Markdown tables that fit one message
- [#160575](https://github.com/openclaw/openclaw/pull/160575) fix(node-host): updates never install on Bun-only macOS and Linux hosts
- [#160115](https://github.com/openclaw/openclaw/pull/160115) test(gateway): remove low-value tests (batch d080)
- [#160730](https://github.com/openclaw/openclaw/pull/160730) fix(cloud-workers): retain bundles through provisioning
- [#160588](https://github.com/openclaw/openclaw/pull/160588) fix(telegram): near-limit webhook tests flake on loaded CI shards
- [#157904](https://github.com/openclaw/openclaw/pull/157904) fix(ui): show total tool calls alongside failures
- [#160725](https://github.com/openclaw/openclaw/pull/160725) fix(ui): restore the alternating Talk, Send, and Stop button
- [#160685](https://github.com/openclaw/openclaw/pull/160685) fix(ui): show the exact command to approve an admin access request
- [#159444](https://github.com/openclaw/openclaw/pull/159444) fix(cron): named-session jobs run in the wrong workspace
- [#160721](https://github.com/openclaw/openclaw/pull/160721) fix(scripts): accept the CI workflow's fail-fast expression in admin landing
- [#160579](https://github.com/openclaw/openclaw/pull/160579) fix(ui): session rename reverts to the old name until the roster refreshes
- [#160722](https://github.com/openclaw/openclaw/pull/160722) fix(ui): keep history rail wave while hovering its preview
- [#160527](https://github.com/openclaw/openclaw/pull/160527) fix(qa): unblock isolated harness tool and evidence checks
- [#153727](https://github.com/openclaw/openclaw/pull/153727) fix(talk): speaking over the assistant does not interrupt it during forced consults
- [#160639](https://github.com/openclaw/openclaw/pull/160639) refactor(channels): deslop small channel plugins
- [#160455](https://github.com/openclaw/openclaw/pull/160455) fix(feishu): preserve webhooks on supported 9.6 hosts
- [#160164](https://github.com/openclaw/openclaw/pull/160164) fix(doctor): reclaim legacy pnpm runtimes and TMP/TEMP service scratch
- [#160487](https://github.com/openclaw/openclaw/pull/160487) fix(codex): retain completed command output with Codex 0.158.0
- [#152680](https://github.com/openclaw/openclaw/pull/152680) fix(google): Talk on Gemini 3.8 Live never finalizes spoken user turns (no user rows, force-agent-consult inert)
- [#159279](https://github.com/openclaw/openclaw/pull/159279) refactor(packages): deslop shared packages second pass
- [#160717](https://github.com/openclaw/openclaw/pull/160717) fix(release): admit 2026.9.7 recovery helper and plugin scan inventory
- [#160653](https://github.com/openclaw/openclaw/pull/160653) fix(test): include all runners for package directories
- [#159759](https://github.com/openclaw/openclaw/pull/159759) refactor(infra): deslop infra fifth pass
- [#160681](https://github.com/openclaw/openclaw/pull/160681) fix(ui): keep the chat position rail inside RTL transcripts
- [#160711](https://github.com/openclaw/openclaw/pull/160711) fix(ci): prevent premature state and Skills fixture failures
- [#160709](https://github.com/openclaw/openclaw/pull/160709) fix(ui): revert assigned-owner header change
- [#160618](https://github.com/openclaw/openclaw/pull/160618) fix(ui): include signed-in user in Online roster
- [#160038](https://github.com/openclaw/openclaw/pull/160038) refactor(providers): deslop model-provider plugins second pass
- [#160605](https://github.com/openclaw/openclaw/pull/160605) test(agents,plugins,ui): remove low-value tests (batch d087)
- [#154881](https://github.com/openclaw/openclaw/pull/154881) fix: avoid false failures while an agent waits for a child
- [#160555](https://github.com/openclaw/openclaw/pull/160555) fix(ui): keep menu and control colors on the selected theme

#### 🐛 New Issues
- [#160521](https://github.com/openclaw/openclaw/issues/160521) Gateway crash: state DB read-admission seal -> "Worker environment inventory has closed" -> unhandled rejection in reconcileActive `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬7
- [#160548](https://github.com/openclaw/openclaw/issues/160548) [Bug]: 2026.9.6 prepared-model-catalog worker leaks ~1 GiB per 5 min; each memory reclamation supersedes the runtime publication and kills every waiting turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬5
- [#160882](https://github.com/openclaw/openclaw/issues/160882) [Feature]: Show whether the utility model runs through Claude CLI or the API `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬4
- [#160386](https://github.com/openclaw/openclaw/issues/160386) [Bug]: 2026.9.6 on large session stores causes severe SQLite I/O pressure, WebUI RPC timeouts, and STATE_DATABASE_READ_ADMISSION_INVALIDATED `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬4
- [#160259](https://github.com/openclaw/openclaw/issues/160259) [Bug]: pinned CI Bun fails registry successor-retention assertion on main `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬4
- [#160522](https://github.com/openclaw/openclaw/issues/160522) prepared-model-catalog worker isolate reaches 1.15 GB despite maxOldGenerationSizeMb: 512 `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬4
- [#160669](https://github.com/openclaw/openclaw/issues/160669) MiniMax M3.1-Flash: OpenAI-compatible route produces stream garbage and dropped messages; anthropic-messages route is clean `P1` `clawsweeper:needs-info` `impact:message-loss` `impact:auth-provider` 💬4
- [#160839](https://github.com/openclaw/openclaw/issues/160839) [Bug]: memory keyword leg ANDs every query token (buildFtsQuery), so natural-language questions get no BM25 hits (2026.9.6; #15226 closed stale) 💬3
- [#160474](https://github.com/openclaw/openclaw/issues/160474) [Bug]: OpenRouter configured model loses reasoning metadata in prepared runtime; xhigh sent as high `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#160485](https://github.com/openclaw/openclaw/issues/160485) [Bug]: plugin load is CPU-bound on module compilation - one heavy channel plugin entry costs 5-13 s cold (SDK graph recompiled per plugin instance); 3 channel plugins are 57.4 s of the 60 s plugin phase (2026.9.6, Windows) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬3
- [#160572](https://github.com/openclaw/openclaw/issues/160572) [Bug]: runtime runs re-run the full plugin discovery/tool-discovery passes - 5-7 new source captures (220k-310k files) and 45-76 s of main-thread blocking per occurrence `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#160668](https://github.com/openclaw/openclaw/issues/160668) Block streaming fragments fitting Markdown tables before rendering `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#160356](https://github.com/openclaw/openclaw/issues/160356) Control UI: `:heartbeat` lane sessions appear as empty conversations titled by internal markers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#160501](https://github.com/openclaw/openclaw/issues/160501) perf: provider-catalog acquisition loads a full plugin-generation isolate (~260-350 MB) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#160441](https://github.com/openclaw/openclaw/issues/160441) [Bug]: opencode-go imageModel/vision calls fail with 400 MissingSessionID (x-opencode-session header missing on image path) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#160875](https://github.com/openclaw/openclaw/issues/160875) [Bug]: readGatewayRestartIntentPayloadSync silently drops the restart intent on a state-DB read failure `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#160889](https://github.com/openclaw/openclaw/issues/160889) [Bug]: OpenAI tool continuations resend compacted history after ID repair `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160690](https://github.com/openclaw/openclaw/issues/160690) Update: bound the retained-runtime exit only after SQLite broker settlement `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160832](https://github.com/openclaw/openclaw/issues/160832) [Feature]: Remove large pasted text from composer card `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#160716](https://github.com/openclaw/openclaw/issues/160716) gateway --force: the :: probe reports a free port as busy on hosts with IPv6 disabled (2026.9.6) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160672](https://github.com/openclaw/openclaw/issues/160672) [Bug]: Active Memory on claude-cli: per-run Runtime identities prevent cross-recall system-prompt cache reuse `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#160758](https://github.com/openclaw/openclaw/issues/160758) Prepared OpenRouter rows keep catalog-derived thinking efforts after a catalog refresh `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160712](https://github.com/openclaw/openclaw/issues/160712) [Feature]: Run each Grok request in its own process, like Claude CLI and Codex `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#160377](https://github.com/openclaw/openclaw/issues/160377) [Bug]: Windows browser version probe appends the exe path after powershell -Command, causing a ParserError on any path with spaces (stderr leaks into doctor --json) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160523](https://github.com/openclaw/openclaw/issues/160523) Plugin mistral: data/settings upgrade stays unfinished; openclaw doctor --fix cannot complete it `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬2
- [#160609](https://github.com/openclaw/openclaw/issues/160609) Lost category update acknowledgements invalidate unrelated session reads `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬2
- [#160577](https://github.com/openclaw/openclaw/issues/160577) [Bug]: OpenShell mirror mode masks missing-file errors and blocks new memory files `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160236](https://github.com/openclaw/openclaw/issues/160236) [Bug]: Google Chat monitor keeps the startup config, so `messages.*` changes need a restart despite "No gateway restart needed" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160610](https://github.com/openclaw/openclaw/issues/160610) [Bug]: Discord autoPresence always reports "runtime degraded" when model credentials come from SecretRef/env (empty auth-profile store in env-only mode) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#160602](https://github.com/openclaw/openclaw/issues/160602) [Bug]: Telegram topic node-exec completion sends error final to owner DM after thread-not-found failure `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬2
- [#160149](https://github.com/openclaw/openclaw/issues/160149) Compaction safeguard can replay pre-boundary history when firstKeptEntryId precedes the physical compaction event `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160534](https://github.com/openclaw/openclaw/issues/160534) [Bug]: empty-error-retry resubmits non-retryable HTTP 400 three times, burning provider rate limits `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160498](https://github.com/openclaw/openclaw/issues/160498) [Bug]: Session-only guests cannot see their own Control UI profile `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160383](https://github.com/openclaw/openclaw/issues/160383) test: focused Doctor cold start compiles workers inside a timed case `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160566](https://github.com/openclaw/openclaw/issues/160566) [Bug]: `openclaw skills verify` intermittently never returns (no output, no error) while direct ClawHub HTTP calls succeed on the same host `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦐 gold shrimp` 💬2
- [#160120](https://github.com/openclaw/openclaw/issues/160120) [Bug]: Uncredentialed/expired auth profile causes perpetual prepared-model-catalog refresh loop (100% 1-core CPU, memory leak, tmp disk leak); openclaw doctor does not detect or fix it `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#160313](https://github.com/openclaw/openclaw/issues/160313) CI: no-output fixture can reset its own triggered deadline `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160054](https://github.com/openclaw/openclaw/issues/160054) [Bug] Failed Dashboard update logs as INFO status=skipped with no reason and no update report — failure only exists in the modal `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#160337](https://github.com/openclaw/openclaw/issues/160337) Gateway event-loop wedge under dashboard load: synchronous main-thread SQLite + GC/string churn on a large agent store (2026.9.6) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#160891](https://github.com/openclaw/openclaw/issues/160891) Incoming channel message silently swallowed (dispatch complete replies=0) during settle-wake retry storm — 2026.9.6 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#160865](https://github.com/openclaw/openclaw/issues/160865) Discord threads: auto-name after a conversation threshold `P3` `impact:ux-friction` 💬1
- [#160870](https://github.com/openclaw/openclaw/issues/160870) [Feature]: Show readable live purposes in the web tool-activity row `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#160866](https://github.com/openclaw/openclaw/issues/160866) [Bug]: MainSessionRecoveryCapacity has no bounded wait, starving startup recovery dispatch `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#160863](https://github.com/openclaw/openclaw/issues/160863) sessions --json: inputTokens stays frozen at last-run value on idle sessions, with no freshness marker — downstream pressure monitors false-flag idle sessions for hours `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160652](https://github.com/openclaw/openclaw/issues/160652) Cloudflare OIDC sign-in omits verified GitHub identity from custom claims `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#160861](https://github.com/openclaw/openclaw/issues/160861) Bridge redelivery duplicates processed messages after restart; no circuit breaker for repeated identical tool calls `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160852](https://github.com/openclaw/openclaw/issues/160852) openclaw-update-report `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#160757](https://github.com/openclaw/openclaw/issues/160757) Idle presence dot is dark brown instead of amber in the light theme `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#160827](https://github.com/openclaw/openclaw/issues/160827) [Feature]: Support GitLab repositories in the new-session project picker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160689](https://github.com/openclaw/openclaw/issues/160689) [Bug]: Doctor session-SQLite settlement strands .trajectory-path.json sidecars after unreferenced JSONL archival `bug` `no-stale` `regression` `P2` 💬1
- [#160785](https://github.com/openclaw/openclaw/issues/160785) [Bug]: A heartbeat that delegates and yields can never call `heartbeat_respond` — the child-completion turn rejects it, the scratch is never written, and the rejected call leaks "⚠️ Heartbeat Respond blocked" to the owner's chat (2026.9.3, Codex harness) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160780](https://github.com/openclaw/openclaw/issues/160780) Update failure: global-install-failed (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#160736](https://github.com/openclaw/openclaw/issues/160736) [Bug] A non-container worker launch that is not confirmed running leaves its child alive and its ownership entry retained `P3` `clawsweeper:bulk-filed` 💬1
- [#160733](https://github.com/openclaw/openclaw/issues/160733) [Security] `materializeGitBackupRef` accepts a `git ls-tree` name that textually starts with `<scope>/tables/`, letting a `..` component escape the output directory `security` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#160734](https://github.com/openclaw/openclaw/issues/160734) [Bug] One non-cloneable audit payload permanently disables the entire audit ledger for the process lifetime `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#160735](https://github.com/openclaw/openclaw/issues/160735) [Bug] Durable session RPC spins the event loop forever on a socket that is closing but not yet closed — a full node-host process hang `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#160777](https://github.com/openclaw/openclaw/issues/160777) [Bug]: Control UI OpenClaw assistant turns rebuild the prepared model runtime every time (~105 s gateway event-loop freeze) because each turn uses a fresh temp workspaceDir `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#160770](https://github.com/openclaw/openclaw/issues/160770) 2026.9.6: gateway hangs at 100% CPU in media-persistence-detection startup migration after deleted transcript-archive folder (RangeError: Maximum call stack size exceeded) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬1
- [#160767](https://github.com/openclaw/openclaw/issues/160767) Update failure: runtime-verification-failed (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#160762](https://github.com/openclaw/openclaw/issues/160762) [Bug]: claude-cli + Telegram: message sent mid-turn is dropped; drained prompt carries the previous message's body (2026.9.6) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#160732](https://github.com/openclaw/openclaw/issues/160732) [Security] `restoreGitBackupDirectory` executes schema DDL and trigger bodies from a caller-supplied `schema.sql` before any integrity check, with `trusted_schema` left enabled `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#160087](https://github.com/openclaw/openclaw/issues/160087) feat: show MCP sign-in status on plugin detail pages `P2` `impact:auth-provider` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#160750](https://github.com/openclaw/openclaw/issues/160750) [Bug]: Slack allowBots: "mentions" admits untagged bot replies through implicit thread mentions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#160749](https://github.com/openclaw/openclaw/issues/160749) [Bug]: message tool posts at the Slack channel root from a thread turn on CLI runtimes (claude-cli) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#160731](https://github.com/openclaw/openclaw/issues/160731) [Bug]: Discord /models picker omits the `anthropic` provider and offers `claude-cli`, whose submission fails with "Unknown provider" `P1` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦐 gold shrimp` 💬1
- [#160708](https://github.com/openclaw/openclaw/issues/160708) ACPX: enforce dispatch-scoped per-target authorization at the filesystem write boundary `P2` `impact:security` 💬1
- [#160741](https://github.com/openclaw/openclaw/issues/160741) Session controller: route Gateway chat.send and agent RPC turns through the controller `gateway` `maintainer` `no-stale` `P2` 💬1
- [#160739](https://github.com/openclaw/openclaw/issues/160739) Session controller: make it the only source of busy state and run ownership `agents` `maintainer` `no-stale` `P2` 💬1
- [#160737](https://github.com/openclaw/openclaw/issues/160737) Umbrella: one owner per session for turns, queueing, and stop `gateway` `agents` `maintainer` `no-stale` 💬1
- [#160740](https://github.com/openclaw/openclaw/issues/160740) Session controller: move follow-up queueing and steering into the controller `agents` `maintainer` `no-stale` `P1` 💬1
- [#160738](https://github.com/openclaw/openclaw/issues/160738) Session controller: specify the statechart, invariants, and model-based tests `agents` `maintainer` `no-stale` `P2` 💬1
- [#160744](https://github.com/openclaw/openclaw/issues/160744) Session controller: replace stuck-session recovery with a controller watchdog `agents` `maintainer` `no-stale` `P1` 💬1
- [#160742](https://github.com/openclaw/openclaw/issues/160742) Session controller: one stop operation for every entry point `gateway` `agents` `maintainer` `no-stale` 💬1
- [#160745](https://github.com/openclaw/openclaw/issues/160745) Session controller: durable mailbox so queued messages survive a Gateway restart (needs storage review) `gateway` `maintainer` `no-stale` `P1` 💬1
- [#160743](https://github.com/openclaw/openclaw/issues/160743) Session controller: run reset, delete, and compaction through the controller and retire per-session lanes `agents` `maintainer` `no-stale` `P2` 💬1
- [#160727](https://github.com/openclaw/openclaw/issues/160727) Native (non-heap) RSS growth on 2026.7.2-beta.7: heap ~1.1 GB stable while RSS grows; 17.8 GB pre-restart (data point for #154812) `P1` `impact:message-loss` `impact:crash-loop` `maturity:stable` 💬1
- [#160723](https://github.com/openclaw/openclaw/issues/160723) Gateway boot exits 1 on transient state-lifecycle contention: the boot-path coordinator acquire has busyTimeoutMs 0, so it never waits `P1` `impact:crash-loop` `maturity:stable` 💬1
- [#160719](https://github.com/openclaw/openclaw/issues/160719) [Bug]: sessions.delete returns ok:true / deleted:false and silently keeps an orphan session_windows row when the session_nodes row is gone — no CLI, doctor or reaper path can retire it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#160670](https://github.com/openclaw/openclaw/issues/160670) fix(ui): assigned session owner disappears beside sharing controls `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#160693](https://github.com/openclaw/openclaw/issues/160693) perf(update): candidate updates on Docker/OverlayFS spend minutes in runtime retention and retirement `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#160688](https://github.com/openclaw/openclaw/issues/160688) embedded run start logs a stale thinkLevel after primary→fallback model switch `P2` `impact:ux-friction` 💬1
- [#160683](https://github.com/openclaw/openclaw/issues/160683) [Bug]: State-lifecycle logic appears to be forcing read-only incorrectly. `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#160632](https://github.com/openclaw/openclaw/issues/160632) [Bug] `resolveLimit` silently clamps an oversized numeric `limit` instead of rejecting it, and regex-scans an unbounded-length digit string per request `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#160636](https://github.com/openclaw/openclaw/issues/160636) [Bug] A failed plugin source build leaks a `.source-*` temp directory next to the plugin root on every attempt, in a location the sweeper explicitly refuses `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#160664](https://github.com/openclaw/openclaw/issues/160664) [Bug]: OpenClaw failed to install WSL distro `bug` `bug:crash` `P0` `impact:ux-release-blocker` 💬1
- [#160659](https://github.com/openclaw/openclaw/issues/160659) refactor(agents): simplify redundant subsystem code `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#160643](https://github.com/openclaw/openclaw/issues/160643) [Bug] Group-anchor force-cleanup blocks forever on a lineage EOF it can never reach, orphaning the whole worker process group and permanently retaining the capacity slot `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#160641](https://github.com/openclaw/openclaw/issues/160641) [Bug] `tool_result_persist` / `before_message_write` return an unvalidated `message` that replaces the host transcript entry `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#160647](https://github.com/openclaw/openclaw/issues/160647) [Bug] `voicesession` record's `effects` and `consultRunIds` are unbounded and the row has no TTL, so a long session grows one blob without limit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#160644](https://github.com/openclaw/openclaw/issues/160644) [Bug] Route cache key omits `session.mainKey`, so an in-place `cfg.session` mutation serves stale session keys `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#160634](https://github.com/openclaw/openclaw/issues/160634) [Bug] `paginateSessionMessages`' seq-group closure walks the entire message prefix on every paged history request `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#160637](https://github.com/openclaw/openclaw/issues/160637) [Bug] A failed skills watcher close permanently strands the entry in `pathWatchers`, forcing a full filesystem rescan on every agent preparation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160646](https://github.com/openclaw/openclaw/issues/160646) [Bug] Group `open` policy admits any sender even when a `groupAllowFrom` allowlist is configured, while DM `open` deliberately narrows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160642](https://github.com/openclaw/openclaw/issues/160642) [Bug] Hook reload `commit()` has a staleness guard only on the `initial` path, so an overlapping reload silently clobbers a newer generation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#160645](https://github.com/openclaw/openclaw/issues/160645) [Bug] Group session keys omit `accountId` while the group history key includes it, causing cross-account message bleed in multi-account group deployments `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#160640](https://github.com/openclaw/openclaw/issues/160640) [Security] Any plugin can silently evict and replace another plugin's live memory registration through the SDK facade (cross-plugin system-prompt injection) `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#160631](https://github.com/openclaw/openclaw/issues/160631) [Bug] Handler state is registered *after* dispatch starts, so `deferredLaneOccupancy: "release"` never actually releases the lane `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#160638](https://github.com/openclaw/openclaw/issues/160638) [Bug] A single failed workspace-process cleanup pins every sibling's workspace generation forever `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160627](https://github.com/openclaw/openclaw/issues/160627) [Bug] A failed supersede tombstone permanently wedges the ingress lane and leaks the claim state `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160635](https://github.com/openclaw/openclaw/issues/160635) [Bug] `uncertainPooledObservationRoots` grows without bound and is O(n) per live watcher on every event, permanently poisoning correctness `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#160633](https://github.com/openclaw/openclaw/issues/160633) [Bug] `readRequestBodyWithLimit` leaves the request stream unconsumed on a non-destroy size rejection, retaining the socket `clawsweeper:bulk-filed` 💬1
- [#160630](https://github.com/openclaw/openclaw/issues/160630) [Bug] Durable receive prunes the journal *before* enqueue without protecting the incoming event id, so a redelivered platform update is dispatched twice `P3` `impact:message-loss` `clawsweeper:bulk-filed` 💬1
- [#160626](https://github.com/openclaw/openclaw/issues/160626) [Bug] `waitForQueueDebounce` never settles after a backward wall-clock step, permanently stalling the follow-up queue `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#160628](https://github.com/openclaw/openclaw/issues/160628) [Bug] Deferred heartbeats re-arm the adoption stall watchdog, so there is no absolute pre-adoption deadline `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160625](https://github.com/openclaw/openclaw/issues/160625) [Bug] Branch summarization records file operations for a message that the token budget then discards from the summary `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160622](https://github.com/openclaw/openclaw/issues/160622) [Bug] Execution-layer `Set<string>` collapses duplicate provider tool-call ids that the transcript layer explicitly supports `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#160623](https://github.com/openclaw/openclaw/issues/160623) [Bug] An unhandled run failure fabricates an extra un-tainted assistant turn and double-emits `turn_end` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#160624](https://github.com/openclaw/openclaw/issues/160624) [Bug] `signalProcessTree`'s `onComplete` means "signal sent" on Unix but "taskkill finished" on Windows, and a caller awaits it as a completion barrier `P3` `clawsweeper:bulk-filed` 💬1
- [#160621](https://github.com/openclaw/openclaw/issues/160621) [Bug] `PendingMessageQueue.clear()` destroys unconsumed cancellation facts, so a withdrawn steering message is still committed to the transcript and its tools execute `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#160613](https://github.com/openclaw/openclaw/issues/160613) [Feature]: Expose reset-aware transcript admission for context-engine plugins `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#160611](https://github.com/openclaw/openclaw/issues/160611) [Bug]: MCP OAuth never requests offline_access, so servers that scope-gate refresh tokens die one token lifetime after login `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160601](https://github.com/openclaw/openclaw/issues/160601) [Feature]: active-memory: emit the escalation decision (no-recall-intent / no-strong-hit) at info when config.logging is true `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160589](https://github.com/openclaw/openclaw/issues/160589) Discord active thread-list rejects channel-scoped allowlists `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#160598](https://github.com/openclaw/openclaw/issues/160598) sessions_spawn subagent completion delivery misroutes to Telegram from a WebChat session `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160561](https://github.com/openclaw/openclaw/issues/160561) [Bug]: update status keeps transcript_missing migration warnings after sessions cleanup --fix-missing removed the rows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#160554](https://github.com/openclaw/openclaw/issues/160554) claude-cli: agent runs list every discovered Claude Code skill (including claude.ai-synced plugins) instead of the agent's granted skills; send `initialize.skills` from the skills snapshot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160530](https://github.com/openclaw/openclaw/issues/160530) macOS: clarify “Check for updates automatically” and allow review-before-install policy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160553](https://github.com/openclaw/openclaw/issues/160553) docs(nix): macOS launchd service PATH doesn't include ~/.nix-profile/bin as documented `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#160397](https://github.com/openclaw/openclaw/issues/160397) Service reconciliation fails every update (SERVICE_DEFINITION_UNKNOWN) over installer-generated Environment.PATH `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#160544](https://github.com/openclaw/openclaw/issues/160544) [Bug]: 2026.9.6 still loops the model-catalog worker on multi-agent gateways — per-provider refresh jobs × single-slot worker cache (verified workaround) `P1` `impact:crash-loop` 💬1
- [#160541](https://github.com/openclaw/openclaw/issues/160541) [Bug]: macOS 12 Monterey — gateway stop preflight fails because launchctl print pid/<pid> domain is unavailable (label domain still works) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#160543](https://github.com/openclaw/openclaw/issues/160543) Restart silently supersedes agent-owned one-shot cron job; interactive turn LLM failures emit no journal diagnostics 💬1
- [#160536](https://github.com/openclaw/openclaw/issues/160536) All isolated cron jobs fail at cron-setup: DataCloneError: #<Object> could not be cloned. | unavailable (2026.9.6 regression) `P1` `impact:other` 💬1
- [#160518](https://github.com/openclaw/openclaw/issues/160518) [Feature]: Per-agent (and global) opt-out for hardcoded refusals that ignore user config `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#160514](https://github.com/openclaw/openclaw/issues/160514) Update failure: doctor-failed (2026.9.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#160511](https://github.com/openclaw/openclaw/issues/160511) Docs: source-install Corepack fallback installs an older pnpm than the checkout pin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#160504](https://github.com/openclaw/openclaw/issues/160504) update: candidate snapshot inventories agent workspace files; fails unless workspace is idle `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#160496](https://github.com/openclaw/openclaw/issues/160496) [Bug]: Visitor list shows invitation input instead of verified GitHub identity `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#160902](https://github.com/openclaw/openclaw/issues/160902) Update failure: gateway-recovery-verification (2026.9.6)
- [#160901](https://github.com/openclaw/openclaw/issues/160901) [Bug]: Secret egress proxy sets HTTP(S)_PROXY for exec without NO_PROXY, so loopback/LAN plain-HTTP services are refused
- [#160678](https://github.com/openclaw/openclaw/issues/160678) Update failure: managed-service-preflight (2026.9.3)
- [#160500](https://github.com/openclaw/openclaw/issues/160500) Update failure: unexpected-error (2026.9.4)

#### 🔒 Closed Issues
- [#159514](https://github.com/openclaw/openclaw/issues/159514) [Bug]: 2026.9.6 / release/2026.9.7: catalog worker rebuilds its discovery registry on nearly every request (≈8 MB of unreleasable modules per request)
- [#120775](https://github.com/openclaw/openclaw/issues/120775) [Bug]: Cerebras provider (openai-completions) always returns 400 with empty body; identical requests succeed via curl and a different client
- [#152284](https://github.com/openclaw/openclaw/issues/152284) [Bug]: Building checkout dist under a live managed Gateway deletes modules mid-flight (installation changed / ERR_MODULE_NOT_FOUND)
- [#144769](https://github.com/openclaw/openclaw/issues/144769) Progress card cannot be dismissed by the user unless every plan step is completed (note-only cards never dismissible)
- [#156968](https://github.com/openclaw/openclaw/issues/156968) [Bug]: darwin shutdown budget resolves from restart ownership, so OPENCLAW_SUPERVISOR_MODE=external ignores the launchd exit timeout
- [#137720](https://github.com/openclaw/openclaw/issues/137720) [Feature]: Telegram: retain checklist, commentary, and tools in one progress message
- [#138644](https://github.com/openclaw/openclaw/issues/138644) [Bug]: CLI no-output watchdog kills the turn during Claude Code auto-compaction — the defer path counts tool calls but has no signal for an in-flight compaction
- [#139751](https://github.com/openclaw/openclaw/issues/139751) [Bug]: Security audit isGpt5OrHigher incorrectly flags GPT-6 model IDs as below GPT-5
- [#134042](https://github.com/openclaw/openclaw/issues/134042) [Bug] 2026.8.1: official AgentMail channel blocked — openChannelIngressQueue only for trusted plugins; catalog trusted-keys list is empty in shipped build
- [#160259](https://github.com/openclaw/openclaw/issues/160259) [Bug]: pinned CI Bun fails registry successor-retention assertion on main
- [#156976](https://github.com/openclaw/openclaw/issues/156976) [Bug]: `status --deep` misses stale Homebrew Node path held by running macOS LaunchAgent gateway after brew upgrade
- [#139351](https://github.com/openclaw/openclaw/issues/139351) [Bug]: Skill Workshop review outlives timeout and starves unrelated heartbeats
- [#160474](https://github.com/openclaw/openclaw/issues/160474) [Bug]: OpenRouter configured model loses reasoning metadata in prepared runtime; xhigh sent as high
- [#160572](https://github.com/openclaw/openclaw/issues/160572) [Bug]: runtime runs re-run the full plugin discovery/tool-discovery passes - 5-7 new source captures (220k-310k files) and 45-76 s of main-thread blocking per occurrence
- [#139278](https://github.com/openclaw/openclaw/issues/139278) Realtime Talk: force-agent-consult couples interruptResponseOnInputAudio to autoRespondToAudio, disabling barge-in (phone path behaves differently)
- [#155840](https://github.com/openclaw/openclaw/issues/155840) [Bug]: Slack Socket Mode never connects when HTTPS_PROXY is set (2026.9.5): undici 8 proxy dispatcher passed to @slack/socket-mode's undici 7 WebSocket
- [#152646](https://github.com/openclaw/openclaw/issues/152646) [Bug]: Talk on gemini-3.8-live-extended-thinking over gateway-relay never finalizes user voice transcripts (no user rows; force-agent-consult never fires)
- [#160356](https://github.com/openclaw/openclaw/issues/160356) Control UI: `:heartbeat` lane sessions appear as empty conversations titled by internal markers
- [#159322](https://github.com/openclaw/openclaw/issues/159322) Update failure: runtime-verification-failed (2026.9.5)
- [#153422](https://github.com/openclaw/openclaw/issues/153422) [Bug]: Sustained WorkerThread CPU usage after startup when OpenRouter is enabled
- [#153562](https://github.com/openclaw/openclaw/issues/153562) Update failure: database-schema-preflight (2026.9.5)
- [#160832](https://github.com/openclaw/openclaw/issues/160832) [Feature]: Remove large pasted text from composer card
- [#160716](https://github.com/openclaw/openclaw/issues/160716) gateway --force: the :: probe reports a free port as busy on hosts with IPv6 disabled (2026.9.6)
- [#160672](https://github.com/openclaw/openclaw/issues/160672) [Bug]: Active Memory on claude-cli: per-run Runtime identities prevent cross-recall system-prompt cache reuse
- [#142880](https://github.com/openclaw/openclaw/issues/142880) [Feature]: Cmd/Ctrl+K captures prompts and files into background sessions
- [#142952](https://github.com/openclaw/openclaw/issues/142952) [Feature]: Open New Session with a keyboard shortcut
- [#148575](https://github.com/openclaw/openclaw/issues/148575) [Bug]: ModelRegistry drops contextTokens, widening Astra runtime budgets from 272k to 1.05M
- [#152234](https://github.com/openclaw/openclaw/issues/152234) Plugin SDK: optional typed judgment providers for native consumers
- [#160377](https://github.com/openclaw/openclaw/issues/160377) [Bug]: Windows browser version probe appends the exe path after powershell -Command, causing a ParserError on any path with spaces (stderr leaks into doctor --json)
- [#160236](https://github.com/openclaw/openclaw/issues/160236) [Bug]: Google Chat monitor keeps the startup config, so `messages.*` changes need a restart despite "No gateway restart needed"
- [#160149](https://github.com/openclaw/openclaw/issues/160149) Compaction safeguard can replay pre-boundary history when firstKeptEntryId precedes the physical compaction event
- [#160534](https://github.com/openclaw/openclaw/issues/160534) [Bug]: empty-error-retry resubmits non-retryable HTTP 400 three times, burning provider rate limits
- [#160498](https://github.com/openclaw/openclaw/issues/160498) [Bug]: Session-only guests cannot see their own Control UI profile
- [#160313](https://github.com/openclaw/openclaw/issues/160313) CI: no-output fixture can reset its own triggered deadline
- [#158874](https://github.com/openclaw/openclaw/issues/158874) [Bug]: video/music candidate failures log at debug without the error, while image logs at warn with it
- [#155788](https://github.com/openclaw/openclaw/issues/155788) [Bug]: Telegram progress disappears without a final reply when the active plugin instance is invalidated
- [#159330](https://github.com/openclaw/openclaw/issues/159330) [Bug]: Concurrent first sends to an empty shared conversation are rejected as branch changes
- [#160652](https://github.com/openclaw/openclaw/issues/160652) Cloudflare OIDC sign-in omits verified GitHub identity from custom claims
- [#160852](https://github.com/openclaw/openclaw/issues/160852) openclaw-update-report
- [#160757](https://github.com/openclaw/openclaw/issues/160757) Idle presence dot is dark brown instead of amber in the light theme
- [#160689](https://github.com/openclaw/openclaw/issues/160689) [Bug]: Doctor session-SQLite settlement strands .trajectory-path.json sidecars after unreferenced JSONL archival
- [#160780](https://github.com/openclaw/openclaw/issues/160780) Update failure: global-install-failed (2026.9.4)
- [#160736](https://github.com/openclaw/openclaw/issues/160736) [Bug] A non-container worker launch that is not confirmed running leaves its child alive and its ownership entry retained
- [#152830](https://github.com/openclaw/openclaw/issues/152830) [Bug]: Gemini 3.8 Live never ends the user's turn after the Google bridge stops streaming silence (audioStreamEnd), so exact-zero-silence clients get no reply
- [#160767](https://github.com/openclaw/openclaw/issues/160767) Update failure: runtime-verification-failed (2026.9.4)
- [#160087](https://github.com/openclaw/openclaw/issues/160087) feat: show MCP sign-in status on plugin detail pages
- [#160727](https://github.com/openclaw/openclaw/issues/160727) Native (non-heap) RSS growth on 2026.7.2-beta.7: heap ~1.1 GB stable while RSS grows; 17.8 GB pre-restart (data point for #154812)
- [#160723](https://github.com/openclaw/openclaw/issues/160723) Gateway boot exits 1 on transient state-lifecycle contention: the boot-path coordinator acquire has busyTimeoutMs 0, so it never waits
- [#160670](https://github.com/openclaw/openclaw/issues/160670) fix(ui): assigned session owner disappears beside sharing controls
- [#160688](https://github.com/openclaw/openclaw/issues/160688) embedded run start logs a stale thinkLevel after primary→fallback model switch
- [#160683](https://github.com/openclaw/openclaw/issues/160683) [Bug]: State-lifecycle logic appears to be forcing read-only incorrectly.
- [#160664](https://github.com/openclaw/openclaw/issues/160664) [Bug]: OpenClaw failed to install WSL distro
- [#160644](https://github.com/openclaw/openclaw/issues/160644) [Bug] Route cache key omits `session.mainKey`, so an in-place `cfg.session` mutation serves stale session keys
- [#160633](https://github.com/openclaw/openclaw/issues/160633) [Bug] `readRequestBodyWithLimit` leaves the request stream unconsumed on a non-destroy size rejection, retaining the socket
- [#160630](https://github.com/openclaw/openclaw/issues/160630) [Bug] Durable receive prunes the journal *before* enqueue without protecting the incoming event id, so a redelivered platform update is dispatched twice
- [#160624](https://github.com/openclaw/openclaw/issues/160624) [Bug] `signalProcessTree`'s `onComplete` means "signal sent" on Unix but "taskkill finished" on Windows, and a caller awaits it as a completion barrier
- [#139169](https://github.com/openclaw/openclaw/issues/139169) [Bug]: Control UI "Automations Enabled" toggle shows OFF while the scheduler is running (schema declares no default; ~65 other optional booleans render the same way)
- [#160397](https://github.com/openclaw/openclaw/issues/160397) Service reconciliation fails every update (SERVICE_DEFINITION_UNKNOWN) over installer-generated Environment.PATH
- [#160544](https://github.com/openclaw/openclaw/issues/160544) [Bug]: 2026.9.6 still loops the model-catalog worker on multi-agent gateways — per-provider refresh jobs × single-slot worker cache (verified workaround)
- [#160543](https://github.com/openclaw/openclaw/issues/160543) Restart silently supersedes agent-owned one-shot cron job; interactive turn LLM failures emit no journal diagnostics
- [#160536](https://github.com/openclaw/openclaw/issues/160536) All isolated cron jobs fail at cron-setup: DataCloneError: #<Object> could not be cloned. | unavailable (2026.9.6 regression)
- [#160678](https://github.com/openclaw/openclaw/issues/160678) Update failure: managed-service-preflight (2026.9.3)
- [#160500](https://github.com/openclaw/openclaw/issues/160500) Update failure: unexpected-error (2026.9.4)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 249,820 · **Open issues:** 45,014 · **Last push:** <1h ago

On September 29, 2026, there were no new releases for Hermes Agent, but several important fixes were merged, including improvements to the desktop client such as reconnecting the client socket after a gateway restart (#123135) and retaining the local secondary profile gateway for foreground sessions (#121949). Additional fixes addressed critical functionality, including maintaining SSH forwards across mux idle (#80654) and ensuring that source switches do not fail while dialing (#120298). Among the newly reported issues, the desktop assistant reply rendering twice (#126524) stands out, indicating a potential bug that may affect user experience overall. Other significant issues relate to recent updates on multi-profile hosts and the handling of session data, highlighting areas requiring attention as the development team moves forward.

#### ✅ Merged PRs
- [#123135](https://github.com/NousResearch/hermes-agent/pull/123135) fix(desktop): reconnect the client socket after a requested gateway restart
- [#121949](https://github.com/NousResearch/hermes-agent/pull/121949) fix(desktop): retain local secondary profile gateway for foreground sessions
- [#80654](https://github.com/NousResearch/hermes-agent/pull/80654) fix(desktop): keep SSH forwards alive across mux idle
- [#95959](https://github.com/NousResearch/hermes-agent/pull/95959) fix(web): redial after clean 1012 service-restart closes
- [#120298](https://github.com/NousResearch/hermes-agent/pull/120298) fix(desktop): stop failing a source switch that is still dialing
- [#98661](https://github.com/NousResearch/hermes-agent/pull/98661) fix(desktop): auto-recover boundaries from React portal teardown races

#### 🐛 New Issues
- [#126524](https://github.com/NousResearch/hermes-agent/issues/126524) Desktop: assistant reply renders twice (adjacent, verbatim) on a fresh client; DB holds one row; session list also double-renders `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop` 💬5
- [#126470](https://github.com/NousResearch/hermes-agent/issues/126470) [BUG] hermes update on a multi-profile host: the host-gateway relaunch inherits the launching profile's HERMES_HOME — the gateway stays down while the run records "restarted" (fleet 0 rows → partial / exit 1) `type/bug` `comp/cli` `comp/gateway` `P2` 💬3
- [#126655](https://github.com/NousResearch/hermes-agent/issues/126655) BUG: cron passes the model pin literally — seat model.aliases never resolve (sessions do); 404 says bare `model: <name>` `type/bug` `comp/cron` `area/config` `P2` 💬3
- [#126591](https://github.com/NousResearch/hermes-agent/issues/126591) [Bug]: Remote-backend catalog install puts the Desktop half at repo HEAD (pin ignored) in a folder named after the subdir `type/bug` `comp/plugins` `P1` `comp/desktop` 💬2
- [#126265](https://github.com/NousResearch/hermes-agent/issues/126265) Stable per-message identity for context engines and plugins: message_uid, merge witness, per-occurrence tool-call ids `type/feature` `innovation` `comp/agent` `P3` 💬2
- [#127261](https://github.com/NousResearch/hermes-agent/issues/127261) Official scratch TMPDIR export (export_scratch_tmp_env) is overridden by git-bash /etc/profile; system prompt "TMPDIR points here" is factually wrong
- [#127260](https://github.com/NousResearch/hermes-agent/issues/127260) Tool-call arguments (terminal/write_file/execute_code) corrupted in-flight by context compression: truncation (U+27EA markers) + token insertion + BOM instability on Windows git-bash
- [#127246](https://github.com/NousResearch/hermes-agent/issues/127246) Desktop: sending in a pinned, user-titled session replaces its sidebar title with the prompt preview (stored title intact; ⌘R restores) `type/bug` `P3` `comp/desktop` `area/sessions`
- [#127249](https://github.com/NousResearch/hermes-agent/issues/127249) [Bug][Windows Desktop]: computer_use contract mismatch causes retry loops when agent edits Hermes UI `type/bug` `comp/tools` `P2` `platform/windows`
- [#127228](https://github.com/NousResearch/hermes-agent/issues/127228) [Feature]: HUD quicklaunch — warm summon under 200ms, not a cold Desktop boot `type/feature` `P3` `comp/desktop`
- [#127234](https://github.com/NousResearch/hermes-agent/issues/127234) [Bug]: A streaming repetition loop never ends on an uncapped endpoint — every repetition check waits for the stream to finish `type/bug` `comp/agent` `P1` `area/streaming`
- [#127218](https://github.com/NousResearch/hermes-agent/issues/127218) [Feature]: Hold background jobs whose provider is out of credits instead of running them on a local fallback `type/feature` `comp/agent` `comp/cron` `P2`
- [#126338](https://github.com/NousResearch/hermes-agent/issues/126338) [Bug]: A desktop runtime plugin that fails its first load can never hot-reload again — the host leaks the failed registration and re-runs a cached blob, so edits take effect only after an app restart `type/bug` `comp/plugins` `P3` `comp/desktop`

#### 🔒 Closed Issues
- [#77277](https://github.com/NousResearch/hermes-agent/issues/77277) Desktop in-app update loops forever on Windows: updater reports its own respawning backend as the venv blocker
- [#68783](https://github.com/NousResearch/hermes-agent/issues/68783) [Bug]: Desktop app version stuck at 0.17.0 while CLI is v0.19.0 — apps/desktop/package.json version not bumped during releases
- [#98384](https://github.com/NousResearch/hermes-agent/issues/98384) [Bug]: macOS desktop update aborts "venv/bin/hermes is missing" on shared-venv layout (posix.sh hardcodes <root>/venv, no .venv fallback)
- [#83211](https://github.com/NousResearch/hermes-agent/issues/83211) [Bug][Windows] Update fails silently when hermes.exe is locked: no pre-check for running processes, interrupted install not recovered for extras deps (fastapi missing → desktop boot failure)
- [#69908](https://github.com/NousResearch/hermes-agent/issues/69908) [desktop] Auto-updater zip extraction desyncs local git checkout from origin/main
- [#123111](https://github.com/NousResearch/hermes-agent/issues/123111) [Desktop] Gateway "lost" after in-app restart — client websocket flaps, needs full app relaunch
- [#125910](https://github.com/NousResearch/hermes-agent/issues/125910) Cloud gateway instance primus-7774.agents.nousresearch.com unresponsive (TLS accepts, HTTP hangs) since ~15:02 UTC Sep 27
- [#91603](https://github.com/NousResearch/hermes-agent/issues/91603) Desktop: statusbar `render` contribution remounts on every statusbar re-render, destroying component state (dialogs close unexpectedly)
- [#119028](https://github.com/NousResearch/hermes-agent/issues/119028) bug(desktop): Sessions "Gateway & profile" grouping never spans gateways when every source is a registered connection
- [#121209](https://github.com/NousResearch/hermes-agent/issues/121209) [Bug]: About-panel Desktop update can unexpectedly update remote/fleet instances
- [#120882](https://github.com/NousResearch/hermes-agent/issues/120882) docs: Document model update flow and SDK version management
- [#76291](https://github.com/NousResearch/hermes-agent/issues/76291) Desktop update fails: venv-blocker probe returns exit code -1, zombie Node.js processes block update
- [#74563](https://github.com/NousResearch/hermes-agent/issues/74563) Electron desktop: inconsistent runtime resolution causes "Unable to connect to Hermes gateway" on first launch
- [#72073](https://github.com/NousResearch/hermes-agent/issues/72073) Electron updater rebuild fails: npm not found on PATH (macOS)
- [#126265](https://github.com/NousResearch/hermes-agent/issues/126265) Stable per-message identity for context engines and plugins: message_uid, merge witness, per-occurrence tool-call ids
- [#62128](https://github.com/NousResearch/hermes-agent/issues/62128) [Bug]: macOS launchd: post-update gateway restart left service dead (respawn pended) and desktop app never relaunched itself
- [#119089](https://github.com/NousResearch/hermes-agent/issues/119089) Wake word never fires on macOS Desktop with remote gateway client capture
- [#98654](https://github.com/NousResearch/hermes-agent/issues/98654) [Bug] Desktop: "workspace" failed to render — "Tried to unmount a fiber that is already unmounted" (Radix portal dismiss race)
- [#95951](https://github.com/NousResearch/hermes-agent/issues/95951) [Bug]: Desktop/web UI never reconnects after WebSocket close code 1012 (service restart)
- [#102743](https://github.com/NousResearch/hermes-agent/issues/102743) [Bug]: comment flush can leak descendant secrets and split nested page regions
- [#118729](https://github.com/NousResearch/hermes-agent/issues/118729) Desktop: a profile named 'serve' breaks the dashboard fallback and remote ownership verification
- [#103055](https://github.com/NousResearch/hermes-agent/issues/103055) hermes update reports "Desktop app up to date" with a bundle far older than the source
- [#91636](https://github.com/NousResearch/hermes-agent/issues/91636) Desktop updater emergency state.db copy can omit WAL transactions
- [#76197](https://github.com/NousResearch/hermes-agent/issues/76197) [desktop] Update handoff on macOS hangs: app.quit() dwell too short + no force-exit watchdog (#73822)
- [#121865](https://github.com/NousResearch/hermes-agent/issues/121865) Desktop app: websocket reconnect loop (1005) when opening a large cross-profile session; renderer spins ~18% CPU
- [#120296](https://github.com/NousResearch/hermes-agent/issues/120296) [Bug]: Desktop gateway switch reports "Could not connect" ~20 s into a healthy remote bring-up, then connects anyway
- [#79509](https://github.com/NousResearch/hermes-agent/issues/79509) Desktop/turn isolation: model switch is silently lost on compute-host sessions
- [#124347](https://github.com/NousResearch/hermes-agent/issues/124347) [Bug]: after Stop, a background completion immediately starts a new model turn (TUI/Desktop)
- [#119748](https://github.com/NousResearch/hermes-agent/issues/119748) [Bug]: Desktop Maintenance panel never tails a second run of the same op (Run doctor, Security audit, Create backup, curator Run now)
- [#93324](https://github.com/NousResearch/hermes-agent/issues/93324) desktop: composer image previewUrl retention contradicts remote-attach cache assumption
- [#108161](https://github.com/NousResearch/hermes-agent/issues/108161) [Bug]: Desktop Preview console entry-count cap still retains unbounded log strings
- [#126338](https://github.com/NousResearch/hermes-agent/issues/126338) [Bug]: A desktop runtime plugin that fails its first load can never hot-reload again — the host leaks the failed registration and re-runs a cached blob, so edits take effect only after an app restart

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,895 · **Open issues:** 8,355 · **Last push:** <1h ago

On September 29, 2026, there were no new releases for vLLM; however, significant merged pull requests included enhancements such as enabling sparse MLA Gluon kernel support (#53492), adding Encoder CUDA graph support (#58673), and fixing various bugs related to scheduling and performance. Noteworthy improvements also included preserving non-contiguous strides when pinning CPU tensors (#54874) and allowing FULL decode graphs for one-token prompt tails (#58400). Among new issues, a notable bug was reported regarding derender that drops leading spaces on SentencePiece tokenizers (#59043), highlighting a potential area for immediate attention.

#### ✅ Merged PRs
- [#58655](https://github.com/vllm-project/vllm/pull/58655) [ROCm][DSv4.1][Perf] Run the delayed mHC seams through aiter's fused Triton kernel
- [#54874](https://github.com/vllm-project/vllm/pull/54874) [XPU] Preserve non-contiguous strides when pinning CPU tensors for UVA view
- [#53492](https://github.com/vllm-project/vllm/pull/53492) [ROCm][MLA] Enable sparse MLA Gluon kernel from Aiter
- [#58673](https://github.com/vllm-project/vllm/pull/58673) [Minimax-M3] Add Encoder CUDA graph support
- [#59066](https://github.com/vllm-project/vllm/pull/59066) [CI] Bound the CRCR report by build age, and stop gating it on a job
- [#57299](https://github.com/vllm-project/vllm/pull/57299) [torch.compile] Canonicalize functionalized split slices for fusion pa…
- [#53934](https://github.com/vllm-project/vllm/pull/53934) [Elastic EP] Support Model Runner V2
- [#59017](https://github.com/vllm-project/vllm/pull/59017) [Bugfix][Frontend] Keep in-flight requests on the same DP engine
- [#58058](https://github.com/vllm-project/vllm/pull/58058) [Bugfix][ROCm] Drop -1 sentinels when building the ragged sparse-MLA indices
- [#58950](https://github.com/vllm-project/vllm/pull/58950) [Bugfix] Fix moe_wna16 w13 zero-point shard split for 8-bit asym GPTQ MoE
- [#52395](https://github.com/vllm-project/vllm/pull/52395) [CI/Build][BugFix][The Rock] Make supports_mm_prefix return False for ROCm attn and unified attn since Prefix-LM not implemented
- [#59081](https://github.com/vllm-project/vllm/pull/59081) [Minimax M3] Enable fp8 indexer cache on triton indexer for non-SM100 architectures.
- [#50519](https://github.com/vllm-project/vllm/pull/50519) [ROCm][CI] Add missing test coverage for upstream parity
- [#58269](https://github.com/vllm-project/vllm/pull/58269) [XPU][CI] Make `test_mamba_prefix_cache` block-size agnostic
- [#58987](https://github.com/vllm-project/vllm/pull/58987) [XPU] skip test_online_quantization_loads_real_weights
- [#58896](https://github.com/vllm-project/vllm/pull/58896) [XPU] use rms_norm xpu kernel for context-key normalization
- [#58895](https://github.com/vllm-project/vllm/pull/58895) [CI] Drop test-group rules that no longer match the tree
- [#57107](https://github.com/vllm-project/vllm/pull/57107) [Perf][Spec Decode] Avoid triton recompiles in the acceptance estimator
- [#57676](https://github.com/vllm-project/vllm/pull/57676) [Bugfix][Scheduler] Refresh max tokens for streaming continuations
- [#58784](https://github.com/vllm-project/vllm/pull/58784) [Bugfix][MRV2][Spec Decode] Reject draft slots that were never proposed
- [#58947](https://github.com/vllm-project/vllm/pull/58947) [Core] Rework scheduler `skipped_waiting` queue
- [#58400](https://github.com/vllm-project/vllm/pull/58400) [Perf][MRV2] Allow FULL decode graphs for one-token prompt tails
- [#58251](https://github.com/vllm-project/vllm/pull/58251) [Mypy] Fix mypy typing for Voxtral and vision models
- [#57447](https://github.com/vllm-project/vllm/pull/57447) [Bugfix][Scheduler] Preserve logprobs across streaming continuations
- [#43091](https://github.com/vllm-project/vllm/pull/43091) [Model Runner V2][Spec Decode] Support spec decode with draft model
- [#56861](https://github.com/vllm-project/vllm/pull/56861) [ROCm][MLA] Add an AITER ASM round-robin decode route for DCP multi-token verify
- [#58259](https://github.com/vllm-project/vllm/pull/58259) [Bugfix] Fix resumable request + async scheduling handoff race
- [#58498](https://github.com/vllm-project/vllm/pull/58498) [Bugfix] Don't sync-police or retry FlashInfer all-reduce workspace creation in eager mode
- [#59051](https://github.com/vllm-project/vllm/pull/59051) [ROCm][CI] Pin OpenTelemetry to LMCache's cap in the ROCm images
- [#59076](https://github.com/vllm-project/vllm/pull/59076) [ROCm][CI] Increase timeout for Entrypoints Unit
- [#59008](https://github.com/vllm-project/vllm/pull/59008) [CI][Bugfix] Relax packed_qk_rope_ correctness test to one ULP
- [#52798](https://github.com/vllm-project/vllm/pull/52798) [Quant] Use canonical N-first weight format for CT WNA16 MoE
- [#50499](https://github.com/vllm-project/vllm/pull/50499) [KVConnector][NIXL] Support packed MLA KV layouts in pipeline-parallel push prefill
- [#58814](https://github.com/vllm-project/vllm/pull/58814) [Bugfix][Kimi-K3] Refresh DSpark context KV cache pointers after the KV cache is re-bound
- [#59056](https://github.com/vllm-project/vllm/pull/59056) [ROCm]Keep LMCache OpenTelemetry on the image's 1.40 stack
- [#58208](https://github.com/vllm-project/vllm/pull/58208) [ROCm][Perf] Replace torch.topk in DSA candidate block selection
- [#57766](https://github.com/vllm-project/vllm/pull/57766) [LoRA] Support variable num_labels for sequence classification
- [#54335](https://github.com/vllm-project/vllm/pull/54335) [Feature] Add fixed-token prefill scoring
- [#54956](https://github.com/vllm-project/vllm/pull/54956) [ROCm][Perf] Kimi-K3 Enable sharded latent MoE up-projection under EP
- [#57461](https://github.com/vllm-project/vllm/pull/57461) [Bugfix] Use the correct repository revision for secondary artifact loaders
- [#58747](https://github.com/vllm-project/vllm/pull/58747) [Bugfix][Logging] Preserve application log record factories
- [#57568](https://github.com/vllm-project/vllm/pull/57568) [Bugfix][Spec Decode] Implement get_top_tokens() on the ROCm DeepSeek V4 MTP drafter
- [#56711](https://github.com/vllm-project/vllm/pull/56711) [Multimodal] Avoid extra d2d for encoder cudagraph with fused input norm
- [#58983](https://github.com/vllm-project/vllm/pull/58983) [ROCm][Refactor] Move DeepSeek-V4/V4.1 multi-stream overlap gate to ROCm platform
- [#58114](https://github.com/vllm-project/vllm/pull/58114) [Perf][Qwen3.8] Reduce PLE metadata construction overhead
- [#54213](https://github.com/vllm-project/vllm/pull/54213) [Bugfix][Model] Gemma4: register aliased embedding scalars as buffers
- [#58957](https://github.com/vllm-project/vllm/pull/58957) [Perf][Qwen4Exp] Fuse HC down projection and SiLU on NVIDIA
- [#59011](https://github.com/vllm-project/vllm/pull/59011) Revert "[CI] Shard (H200 MIG 35GB / MI355 DPX) Entrypoints Integration (Pooling) into named jobs (#58652)"

#### 🐛 New Issues
- [#59043](https://github.com/vllm-project/vllm/issues/59043) [Bug]: Derender drops the leading space on SentencePiece tokenizers `bug` 💬2
- [#59087](https://github.com/vllm-project/vllm/issues/59087) [Bug]: `--tool-call-parser mistral` on a non-Mistral tokenizer can start but then answers EVERY chat request with 500 `bug` `tool-calling` `mistral` 💬3
- [#59009](https://github.com/vllm-project/vllm/issues/59009) [Bug]: Rust frontend chat-template rendering fails with 500 "unknown function: raise_exception" for templates that legally use it (e.g. Qwen3 reasoning_effort validation) `tool-calling` `rust` 💬2
- [#59115](https://github.com/vllm-project/vllm/issues/59115) [Bug]: GLM-5.3-Flash illegal memory access on long-context chucked prefill still reproduces on v 0.30.0 (B200, TP4+EP, MTP) `bug` `glm` 💬2
- [#59054](https://github.com/vllm-project/vllm/issues/59054) [Bug]: Triton attention: spec-decode verify batches (q_len>1) forced onto the 2D kernel — 7-20x per-call attention slowdown at long context 💬2
- [#59088](https://github.com/vllm-project/vllm/issues/59088) [Bug]: /scale_elastic_ep bypasses API-key authentication, accepts boolean counts, and returns 500 for unsupported scaling `bug` 💬2
- [#59062](https://github.com/vllm-project/vllm/issues/59062) [RFC]: Online quantization from arbitrary precision `rocm` `RFC` `quantization` 💬1
- [#59022](https://github.com/vllm-project/vllm/issues/59022) [ROCm][Perf] Fold Q fp8 quantization into QkNormRopeKvCacheFusionPass (drop per-layer scaled_quant) `rocm` `quantization` 💬2
- [#59120](https://github.com/vllm-project/vllm/issues/59120) [Feature]: Add lifecycle management hooks for the worker extension class (--worker-extension-cls) `feature request` 💬1
- [#59064](https://github.com/vllm-project/vllm/issues/59064) [Bug]: Kimi-K3 MXFP4: flashinfer_trtllm selects unsupported BF16/SiTU MoE backend `bug` `quantization` `kimi` `k3` 💬1
- [#59057](https://github.com/vllm-project/vllm/issues/59057) [Bug]: vllm/vllm-openai:v0.30.0-cu129 crashes on import: operator torchvision::nms does not exist `bug` 💬1
- [#59114](https://github.com/vllm-project/vllm/issues/59114) [Bug]: MoRIIO WRITE: after the producer dies, decode requests hang until client timeout and KV usage stays elevated `rocm` 💬1
- [#59110](https://github.com/vllm-project/vllm/issues/59110) [Bug]: NixlConnector silently misreads KV pages with split K/V slots (ROCm AITER shuffle, ROCM_ATTN, B12X) `rocm` 💬1
- [#59111](https://github.com/vllm-project/vllm/issues/59111) [RFC]: NixlConnector: convert standard KV pages to ROCm AITER shuffled pages on the decode side `rocm` 💬1
- [#59101](https://github.com/vllm-project/vllm/issues/59101) [Bug] UMA startup memory gate compares host-available against device-fraction, unbootable at validated utilization on DGX Spark 💬1
- [#59095](https://github.com/vllm-project/vllm/issues/59095) [Feature]: Support Prefix-LM for ROCM_ATTN and ROCM_UNIFIED_ATTN backends `feature request` `rocm` 💬1
- [#59045](https://github.com/vllm-project/vllm/issues/59045) [Bug][ROCm] v0.30.0: DeepSeek-V4.1-Flash cannot boot on gfx942 — Engram pinned-host CPU offload lost on the AMD path (+47 GiB/rank GPU), OOM in profile_run `bug` `rocm` `deepseek` `DSv4.1` 💬1
- [#59038](https://github.com/vllm-project/vllm/issues/59038) [RFC]: DeepSeek-V4.1-Flash performance on MI325X (gfx942) `rocm` `deepseek` `DSv4.1` 💬1
- [#59018](https://github.com/vllm-project/vllm/issues/59018) [RFC]: Meta-device operator capture: see which operators a model runs on this platform, without weights or device memory `rocm` `intel-gpu` `quantization` `kimi` 💬1
- [#59027](https://github.com/vllm-project/vllm/issues/59027) [Bug][ROCm] v0.30.0: GLM-5.3-Flash cannot boot on gfx942 — ROCMAiterMLASparseImpl missing record_logical_topk_ready (#57252 not in the release) `bug` `rocm` `glm` 💬1
- [#58973](https://github.com/vllm-project/vllm/issues/58973) [Bug]: V2 speculative prefill can change Qwen3-4B's first greedy token through RMSNorm autotune configuration `bug` 💬1
- [#59117](https://github.com/vllm-project/vllm/issues/59117) [RFC]: [Spec decode] KV-cache pool collapse when a draft model introduces a new cache spec type (hybrid GDN + DFlash): diagnosis, mitigation dead-ends, and a working dedicated-draft-pool POC `RFC` `speculative-decoding`
- [#59116](https://github.com/vllm-project/vllm/issues/59116) [Bug]: SMG MoRI-IO PD disagg `bug`
- [#59109](https://github.com/vllm-project/vllm/issues/59109) PP on docker: gloo control plane resolves to bridge IP (535ms per send) and presents as a long-context decode collapse — suggest defaulting GLOO_SOCKET_IFNAME=lo for same-netns ranks
- [#59104](https://github.com/vllm-project/vllm/issues/59104) [Bug]: Fill-in DSpark underallocates KV lookahead and can overwrite target KV (synthetic CUDA repro)
- [#59024](https://github.com/vllm-project/vllm/issues/59024) Hidden-state extraction for GLM-5.3-Flash `glm`
- [#59090](https://github.com/vllm-project/vllm/issues/59090) [Bug]: Silent data loss when typo in `role`, server deletes the whole message and request returns 200 `bug`
- [#59089](https://github.com/vllm-project/vllm/issues/59089) [Bug]: Non-streaming derender appends U+FFFD where the ordinary route emits nothing 🌈🌈 `bug`
- [#59086](https://github.com/vllm-project/vllm/issues/59086) [Bug]: VLLM_BATCH_INVARIANT=1 is not batch-invariant for AWQ models on sm8x in the default mode `bug` `quantization`
- [#59078](https://github.com/vllm-project/vllm/issues/59078) [Bug]: VLLM_BATCH_INVARIANT=1 breaks DeepEncoder models (DeepSeek-OCR family): mean_batch_invariant returns float32, LayerNorm2d then feeds fp32 into a bf16 conv2d `deepseek`
- [#59065](https://github.com/vllm-project/vllm/issues/59065) [Bug]: FlashInfer MLA with DCP>1 crashes in kernel warmup on ragged spec/non-spec decode batch (`causal_seqlens_kv_global must have shape (9,), got (2,)`) `kimi` `k3`
- [#59055](https://github.com/vllm-project/vllm/issues/59055) [Feature]: Make GPU memory allocated by WorkspaceManager releasable by sleep mode `feature request`
- [#59016](https://github.com/vllm-project/vllm/issues/59016) [RFC]: Software-dequant fp8 KV cache for MLA on Ampere (sm80/sm86) — consolidate the existing pieces, a 1M-ctx field case, and a validation offer `kimi`
- [#58960](https://github.com/vllm-project/vllm/issues/58960) [Bug]: Qwen4Exp QSA key-cache views keep the CUDA-graph profiling KV cache alive; CUDA graph capture OOMs at --gpu-memory-utilization 0.90
- [#58990](https://github.com/vllm-project/vllm/issues/58990) [Roadmap] Q4 2026 vLLM × RL
- [#58980](https://github.com/vllm-project/vllm/issues/58980) [Performance]: DeepSeek-V3.2 under DCP: FP8 sparse attention processes other ranks' masked top-k slots on Hopper `performance` `deepseek`
- [#58971](https://github.com/vllm-project/vllm/issues/58971) [Bug]: bench startup --output-json records no model identifier
- [#58970](https://github.com/vllm-project/vllm/issues/58970) [Bug]: bench throughput prints prompt/output token counts and output tok/s but omits them from --output-json
- [#58969](https://github.com/vllm-project/vllm/issues/58969) [Bug]: bench serve drops or mis-buckets several result fields, including all E2EL metrics for pooling
- [#58959](https://github.com/vllm-project/vllm/issues/58959) [RFC]: Return logprobs aligned with sampling-mask token IDs for score centering `RFC`

#### 🔒 Closed Issues
- [#43828](https://github.com/vllm-project/vllm/issues/43828) [Bug]: failed with AssertionError when using mooncakeconnector
- [#43771](https://github.com/vllm-project/vllm/issues/43771) [Bug]: Why does the video file uploaded to the LLM node parse out as files:[] during the data processing step?
- [#43842](https://github.com/vllm-project/vllm/issues/43842) [Bug]: `--num-gpu-blocks-override 0` silently accepted; engine init fails with bare `AssertionError` in `BlockPool.__init__`
- [#43918](https://github.com/vllm-project/vllm/issues/43918) [RFC]: Move trainer-side weight transfer logic out of `vllm`
- [#43939](https://github.com/vllm-project/vllm/issues/43939) [ROCm]: Docker/CMake build support for gfx1103 (Radeon 780M / RDNA3 APU)
- [#43996](https://github.com/vllm-project/vllm/issues/43996) [Bug]: [PD + SpecDec] Prefix-cache trimming drops wrong block when P has extra lookahead block
- [#56889](https://github.com/vllm-project/vllm/issues/56889) [Bug]: HiSparseConnector produces incoherent outputs on GLM-5.2 DEP8
- [#56559](https://github.com/vllm-project/vllm/issues/56559) [Bug]: Unconditional xgrammar import in backend_xgrammar.py crashes vLLM startup on s390x
- [#57927](https://github.com/vllm-project/vllm/issues/57927) [Bug]: Chunked embeddings break dot-product scoring with `use_activation=true
- [#48306](https://github.com/vllm-project/vllm/issues/48306) [RFC] RL Information Retrieval: APIs & Introspection
- [#43763](https://github.com/vllm-project/vllm/issues/43763) [RFC]: Does SimpleCPUOffloadConnector have plans to support disk/ssd？
- [#43811](https://github.com/vllm-project/vllm/issues/43811) [Bug]: Multinode no NVLink DEP8 server hangs in CUDA graph replay on MoE models during benchmarking
- [#43820](https://github.com/vllm-project/vllm/issues/43820) Spec decode with multimodal pruning gives Eagle drafter shifted embeddings but unshifted M-RoPE positions
- [#43858](https://github.com/vllm-project/vllm/issues/43858) [Feature]: DFlash Partial Multimodal Token Full Attention with Gemma MoE + Drafter
- [#43954](https://github.com/vllm-project/vllm/issues/43954) [Bug]: NVCC compilation error when launching DeepSeek-V4-Flash on H100
- [#43967](https://github.com/vllm-project/vllm/issues/43967) [Bug]: KeyError: 'layers.0.mlp.gate_up_proj.g_idx' of GLM-OCR GPTQ Int8 in v0.21.1rc1
- [#59101](https://github.com/vllm-project/vllm/issues/59101) [Bug] UMA startup memory gate compares host-available against device-fraction, unbootable at validated utilization on DGX Spark
- [#58960](https://github.com/vllm-project/vllm/issues/58960) [Bug]: Qwen4Exp QSA key-cache views keep the CUDA-graph profiling KV cache alive; CUDA graph capture OOMs at --gpu-memory-utilization 0.90

### SGLang (`sgl-project/sglang`)

**Stars:** 36,550 · **Open issues:** 5,342 · **Last push:** <1h ago

There were no new releases for SGLang in the past 24 hours. Significant merged pull requests included the addition of IQuest Q1 support and an MTP draft, enhancements to the Radix Cache with a sync of Rust TreeCore, and the implementation of FLUX 3 Action robot policies for diffusion. Bug fixes also progressed, addressing issues such as a hang in dp-attn on NPU and consistent metadata handling for the EAGLE DP graph and tokens. Among the newly reported issues, a critical bug was raised regarding a SIGQUIT signal being sent to PID 1 when a worker's launcher dies during startup.

#### ✅ Merged PRs
- [#41527](https://github.com/sgl-project/sglang/pull/41527) [npu]support NPU 910C L2 memcache offload
- [#39627](https://github.com/sgl-project/sglang/pull/39627) [Radix Cache] Sync Rust TreeCore and make it the default
- [#41066](https://github.com/sgl-project/sglang/pull/41066) [Diffusion] Support FLUX 3 Action robot policies
- [#41469](https://github.com/sgl-project/sglang/pull/41469) [mem cache] refactor: remove the index-K continuous getters orphaned by the CP v1 removal
- [#41590](https://github.com/sgl-project/sglang/pull/41590) [Model] Add IQuest Q1 support and MTP draft
- [#41118](https://github.com/sgl-project/sglang/pull/41118) [Docs] Add GigaChat 3.5 and GigaChat 3.5 Reasoning cookbook pages
- [#32196](https://github.com/sgl-project/sglang/pull/32196) [PD] Keep EAGLE DP graph and token metadata consistent
- [#41588](https://github.com/sgl-project/sglang/pull/41588) [Model Loader] Stop checkpoint prefetch after iterator completion
- [#41021](https://github.com/sgl-project/sglang/pull/41021) dsv4.1-amd: fused mHC boundary and all-reduce + mHC post kernels
- [#41020](https://github.com/sgl-project/sglang/pull/41020) dsv4.1-amd: gfx950 sparse decode attention and sorted top-k
- [#41597](https://github.com/sgl-project/sglang/pull/41597) [Docs][AMD] Update GLM-5.2 MI355X daily image
- [#40987](https://github.com/sgl-project/sglang/pull/40987) [NVIDIA] Update deepgemm, deep-ep, sgl-kernel in CUDA 13.4 image, use cuda base image
- [#41506](https://github.com/sgl-project/sglang/pull/41506) [cherrypick from #39379] [LoRA] Size dense row/column-parallel LoRA buffers from the base linear's real shard
- [#41235](https://github.com/sgl-project/sglang/pull/41235) [PD] Keep the sampling mask of a replayed rebootstrap token
- [#41404](https://github.com/sgl-project/sglang/pull/41404) [PD] Defer decode KV release on every transfer failure, not only decode-initiated aborts
- [#39643](https://github.com/sgl-project/sglang/pull/39643) [Spec] Model-agnostic last-stage draft embedding under pipeline parallelism
- [#40446](https://github.com/sgl-project/sglang/pull/40446) [Fix][NPU] fix dp-attn hang when pin_mem is True on NPU
- [#41339](https://github.com/sgl-project/sglang/pull/41339) [diffusion] Qwen-Image 2.1: fuse Q/K RMSNorm + RoPE + KV packing into one CUDA kernel and project Q/K/V with one packed GEMM
- [#41364](https://github.com/sgl-project/sglang/pull/41364) [DeepSelect] Add page-table transform to top-k and tighten the layout contract
- [#38133](https://github.com/sgl-project/sglang/pull/38133) [Unified Memory] fix: preserve FP8 dtype in unified MHA pool
- [#41144](https://github.com/sgl-project/sglang/pull/41144) [Unified Memory] Fix Inkling conv-checkpoint track ids written to virtual slot numbers
- [#41545](https://github.com/sgl-project/sglang/pull/41545) [Doc] Add kernel benchmark rule on L2 cache reuse
- [#41540](https://github.com/sgl-project/sglang/pull/41540) [Diffusion] Consolidate Qwen-Image 2.1 guidance in its cookbook
- [#40689](https://github.com/sgl-project/sglang/pull/40689) [Router] Name a replica's siblings with --kv-peer-selector (3/13)
- [#41161](https://github.com/sgl-project/sglang/pull/41161) [AMD] [GLM5] Fuse shared expert into AITER MoE on gfx950
- [#40688](https://github.com/sgl-project/sglang/pull/40688) [Router] Serve the cache-aware tree at /internal/kv_snapshot (2/13)
- [#41226](https://github.com/sgl-project/sglang/pull/41226) [sgl-router] Scope input_ids forwarding by renderer: all text chats for DeepSeek-V4
- [#41558](https://github.com/sgl-project/sglang/pull/41558) [sgl-router] README: document renderer-scoped input_ids forwarding
- [#40943](https://github.com/sgl-project/sglang/pull/40943) [AMD][DSV4] moe: enable shared-expert fusion on the grouped-topk path (megamoe)
- [#39539](https://github.com/sgl-project/sglang/pull/39539) perf(multimodal): offload CPU feature hashing with bounded admission
- [#40439](https://github.com/sgl-project/sglang/pull/40439) [Diffusion] Populate CPU weight stores before host registration
- [#41165](https://github.com/sgl-project/sglang/pull/41165) Let predicate-registered linear-attention models carry the mamba radix-cache leaves
- [#40687](https://github.com/sgl-project/sglang/pull/40687) [Router] Give the cache-aware tree a snapshot surface (1/13)
- [#41164](https://github.com/sgl-project/sglang/pull/41164) [Kimi-K3] Merge fused_qkvg_proj into the loader-seeded packed_modules_mapping
- [#41220](https://github.com/sgl-project/sglang/pull/41220) [XPU] Bump sglang-kernel-xpu wheel to v0.3.0
- [#39354](https://github.com/sgl-project/sglang/pull/39354) docs: add prefill context parallelism guide and design draft
- [#41517](https://github.com/sgl-project/sglang/pull/41517) Fix chat template cache key order
- [#39060](https://github.com/sgl-project/sglang/pull/39060) feat(npu): Support returning indexer top-k results
- [#39679](https://github.com/sgl-project/sglang/pull/39679) Rust server unify datapath for mm and generate requests
- [#30899](https://github.com/sgl-project/sglang/pull/30899) [Bugfix] fix(hicache): wait for decode offload before retraction
- [#40664](https://github.com/sgl-project/sglang/pull/40664) [Intel GPU] Xpu/weekly simple model enablement 2026 09 21
- [#41387](https://github.com/sgl-project/sglang/pull/41387) [AMD] [Docker] Remove unused LLVM 18 setup from ROCm TileLang build
- [#36903](https://github.com/sgl-project/sglang/pull/36903) [AMD] Add GLM-5.3-Flash MI35x nightly test
- [#41137](https://github.com/sgl-project/sglang/pull/41137) [AMD] Register Triton data movement tests in PR CI
- [#41378](https://github.com/sgl-project/sglang/pull/41378) [CI] Real-model Kimi-Linear PD parity at page, DCP virtual-page, chunk and cached-prefix boundaries

#### 🐛 New Issues
- [#41539](https://github.com/sgl-project/sglang/issues/41539) [Bug] A worker whose launcher died during startup sends SIGQUIT to PID 1 💬2
- [#41569](https://github.com/sgl-project/sglang/issues/41569) [Bug] MiMo-V2 selects the FP8 MoE runner for packed MXFP4 experts on SM100 💬1
- [#41617](https://github.com/sgl-project/sglang/issues/41617) [Bug] --strip-thinking-cache + retraction: release_kv_cache frees KV slots the radix tree still owns (double free)
- [#41609](https://github.com/sgl-project/sglang/issues/41609) [Bug] GLM-5.3-Flash-NVFP4 teacher-forced logprobs drift vs v0.5.20 on SM100 after 2026-09-18..09-21 (suspect #39688 KDA fusion gate)
- [#41606](https://github.com/sgl-project/sglang/issues/41606) [Bug] SM120: block-FP8 linears ignore scale_fmt "ue8m0" for activations (cutlass path uses FP32 amax/448 scales)
- [#41579](https://github.com/sgl-project/sglang/issues/41579) [Bug] Hybrid-SWA + radix cache: admission livelock when the SWA prefix lock pins a finished request's untrimmed last chunk
- [#41576](https://github.com/sgl-project/sglang/issues/41576) [RFC] Dynamic Latent Consensus Governor for DeepSeek-R1 to Reduce KV-Cache Holding Time by 4.5x.
- [#41568](https://github.com/sgl-project/sglang/issues/41568) [Bug] MiMo-V2 processor fails to register when optional TorchCodec is unavailable
- [#41514](https://github.com/sgl-project/sglang/issues/41514) [RFC / HiCache] Same-node peer L2 sharing across DP ranks via /dev/shm
- [#41510](https://github.com/sgl-project/sglang/issues/41510) AttributeError: 'ComponentData' object has no attribute 'parent'

#### 🔒 Closed Issues
- [#31359](https://github.com/sgl-project/sglang/issues/31359) [Tracking] Inkling Day-0 Support
- [#32790](https://github.com/sgl-project/sglang/issues/32790) SGlang部署 GLM-5.2-FP8模型，并发性能较差
- [#32938](https://github.com/sgl-project/sglang/issues/32938) [Bug] FP8 KV cache slows down performance when DSPARK is enabled
- [#32751](https://github.com/sgl-project/sglang/issues/32751) [Bug] `create_custom_parallel_group` calls `all_gather_object` without explicit `group`, causing non-deterministic device selection and CUDA errors on non-NVIDIA backends
- [#32965](https://github.com/sgl-project/sglang/issues/32965) [Bug][AMD gfx1201] Native MoE kernels segfault during Qwen3.5 inference
- [#32942](https://github.com/sgl-project/sglang/issues/32942) [Bug] Unified deterministic extend attention uses different xAI temperature scaling than regular attention
- [#32933](https://github.com/sgl-project/sglang/issues/32933) [Bug] Scheduler crashes on Blackwell (SM100) and SM120 GPUs with --enable-pdmux: Unsupported compute capability
- [#32928](https://github.com/sgl-project/sglang/issues/32928) [Feature] Integrate NCCL RAS runtime diagnostics into SGLang health checks
- [#32924](https://github.com/sgl-project/sglang/issues/32924) [Bug] Kimi-K3: repeated 'CUDA error: unspecified launch failure' in decode on the 07-29 kimi-k3 image (c6ad1f26), not on 74968e5653
- [#32893](https://github.com/sgl-project/sglang/issues/32893) [Bug] v0.5.16 glm GLM-5.2 W4AFP8 + EAGLE + TP8 , MTP seed issue
- [#31015](https://github.com/sgl-project/sglang/issues/31015) [Feature] [Roadmap] Support Hygon HCU GPUs

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,810 · **Open issues:** 2,566 · **Last push:** <1h ago

On September 29, 2026, llama.cpp released several new versions, including b11242, which addresses a GCC 15 stringop-overflow issue in the mtmd component, and b11240, enhancing the /v1/embeddings endpoint to support typed multimodal content inputs. Additionally, b11239 resolves a compilation error in Vulkan by including a necessary functional header. Among the merged pull requests, the inclusion of functionality for left padding with ggml_pad_ext in b11238 and the migration of various components to batch_ext in b11236 stand out. However, the day was not without challenges, as a notable new issue (#29549) was reported related to an eval bug causing machines to reboot during generation tasks.

#### 🚀 New Releases
- [b11242](https://github.com/ggml-org/llama.cpp/releases/tag/b11242) b11242
- [b11240](https://github.com/ggml-org/llama.cpp/releases/tag/b11240) b11240
- [b11239](https://github.com/ggml-org/llama.cpp/releases/tag/b11239) b11239
- [b11238](https://github.com/ggml-org/llama.cpp/releases/tag/b11238) b11238
- [b11237](https://github.com/ggml-org/llama.cpp/releases/tag/b11237) b11237
- [b11236](https://github.com/ggml-org/llama.cpp/releases/tag/b11236) b11236
- [b11235](https://github.com/ggml-org/llama.cpp/releases/tag/b11235) b11235
- [b11234](https://github.com/ggml-org/llama.cpp/releases/tag/b11234) b11234
- [b11233](https://github.com/ggml-org/llama.cpp/releases/tag/b11233) b11233
- [b11232](https://github.com/ggml-org/llama.cpp/releases/tag/b11232) b11232

#### ✅ Merged PRs
- [#29273](https://github.com/ggml-org/llama.cpp/pull/29273) ci : update the oneAPI toolkit to 2026.1
- [#29607](https://github.com/ggml-org/llama.cpp/pull/29607) mtmd: fix GCC 15 CI stringop-overflow in decode_embd_batch
- [#29603](https://github.com/ggml-org/llama.cpp/pull/29603) ggml-openvino: mark unaligned batch-stride views unsupported
- [#29614](https://github.com/ggml-org/llama.cpp/pull/29614) hexagon: show trace events smaller than 100nsec in perfetto
- [#28751](https://github.com/ggml-org/llama.cpp/pull/28751) context : do not re-reserve the scheduler when toggling causal_attn
- [#29556](https://github.com/ggml-org/llama.cpp/pull/29556) server : support typed content (vision/audio/video) input for /v1/embeddings endpoint
- [#29597](https://github.com/ggml-org/llama.cpp/pull/29597) ggml: Add missing <functional> include
- [#29385](https://github.com/ggml-org/llama.cpp/pull/29385) batch: migrate speculative, mtmd and server to batch_ext
- [#29567](https://github.com/ggml-org/llama.cpp/pull/29567) models: pad on the left with ggml_pad_ext
- [#27945](https://github.com/ggml-org/llama.cpp/pull/27945) ui : type-safe API types, fetch helpers and store plumbing
- [#29475](https://github.com/ggml-org/llama.cpp/pull/29475) common : fix HF cache paths on Windows
- [#29471](https://github.com/ggml-org/llama.cpp/pull/29471) Fix: Handle unaligned writes in ggml_backend_webgpu_buffer_set_tensor
- [#29426](https://github.com/ggml-org/llama.cpp/pull/29426) tests : refactor test-recurrent-state-rollback
- [#29423](https://github.com/ggml-org/llama.cpp/pull/29423) ggml-cpu: enable tiled flash attention for non-vector-multiple head dims on x86
- [#29571](https://github.com/ggml-org/llama.cpp/pull/29571) CI: ignore more vgpr spills in > 256 DQK fattn kernels
- [#29520](https://github.com/ggml-org/llama.cpp/pull/29520) vulkan: fuse qwen4exp's SCALE -> SIGMOID -> SCALE -> hc_post chain
- [#29559](https://github.com/ggml-org/llama.cpp/pull/29559) HIP: fix template skip for DKQ > 256 mfma kernels
- [#29561](https://github.com/ggml-org/llama.cpp/pull/29561) metal: support left and circular padding in GGML_OP_PAD
- [#28362](https://github.com/ggml-org/llama.cpp/pull/28362) Enables Windows ARM64 build with MSVC cl.exe
- [#29554](https://github.com/ggml-org/llama.cpp/pull/29554) tests : fix ggml init
- [#28956](https://github.com/ggml-org/llama.cpp/pull/28956) vulkan: fix wrong results when a mul_mat reads a slice of a larger cache

#### 🐛 New Issues
- [#29549](https://github.com/ggml-org/llama.cpp/issues/29549) Eval bug: -sm tensor make my machine reboot in the middle of generation `bug-unconfirmed` 💬3
- [#29551](https://github.com/ggml-org/llama.cpp/issues/29551) Misc. bug: Builds b11222 and later crash unless "-dev" is specified in command line. `bug-unconfirmed` 💬2
- [#29552](https://github.com/ggml-org/llama.cpp/issues/29552) Eval bug: PR #28907 reveals ERROR: HIP kernel flash_attn_ext_f16 `bug-unconfirmed` 💬2
- [#29623](https://github.com/ggml-org/llama.cpp/issues/29623) Vulkan ErrorDeviceLost (vk::Queue::submit) on AMD Radeon AI PRO R9700 when SAM/ReBAR enabled `bug-unconfirmed` 💬1
- [#29613](https://github.com/ggml-org/llama.cpp/issues/29613) Eval bug: Muse Glimmer ignores response_format json_schema with --jinja `bug-unconfirmed`
- [#29596](https://github.com/ggml-org/llama.cpp/issues/29596) Vulkan: Abysmal performance on FirePro D700 (Gentoo Linux 7.2.7, Mesa 26.2.3) `bug-unconfirmed`
- [#29581](https://github.com/ggml-org/llama.cpp/issues/29581) Misc. bug: llama-server second SIGTERM during shutdown calls exit() from the signal handler and can deadlock in glibc free()
- [#29579](https://github.com/ggml-org/llama.cpp/issues/29579) Eval bug: 0xc0000409 exit `bug-unconfirmed`
- [#29577](https://github.com/ggml-org/llama.cpp/issues/29577) Misc. bug: PLaMo-2/3: </s> is treated as EOG instead of NORMAL `bug-unconfirmed`
- [#29562](https://github.com/ggml-org/llama.cpp/issues/29562) Deterministic prefill crash at a fixed token position on qwen4exp (Qwen3.8-Flash-Next) under multi-GPU layer split — 4 runtimes, FA on/off, graphs on/off `bug-unconfirmed`

#### 🔒 Closed Issues
- [#21831](https://github.com/ggml-org/llama.cpp/issues/21831) Server forces full prompt re-processing on subsequent requests (SWA/recurrent memory error)
- [#25452](https://github.com/ggml-org/llama.cpp/issues/25452) Eval bug: DSV4-Flash churned-reuse SWA KV-cache exhaustion (crash + stall)
- [#24437](https://github.com/ggml-org/llama.cpp/issues/24437) Misc. bug: HIP: GGML_HIP_ROCWMMA_FATTN=ON causes severe prefill regression with flash attention on gfx1151 (Strix Halo), up to −41% at long context
- [#27118](https://github.com/ggml-org/llama.cpp/issues/27118) Proposal: Have 2 reasoning settings in the webui, one for effort/strength and another for the token limit
- [#27019](https://github.com/ggml-org/llama.cpp/issues/27019) convert_hf_to_gguf: Qwen3.5 (qwen3_5) hybrid linear-attention tensors fail - ssm_conv1d kernel dim + in_proj_a/b expansion not handled
- [#27137](https://github.com/ggml-org/llama.cpp/issues/27137) Misc. bug: 2.3x performance regression from flash attention auto-enabling.
- [#27139](https://github.com/ggml-org/llama.cpp/issues/27139) Qwen3.8 Codex error resolved by using the Qwen3.6 chat template file.
- [#29259](https://github.com/ggml-org/llama.cpp/issues/29259) Eval bug: Nemotron-3-Nano-30B-A3B fails to load only in server mode.
- [#29552](https://github.com/ggml-org/llama.cpp/issues/29552) Eval bug: PR #28907 reveals ERROR: HIP kernel flash_attn_ext_f16
- [#27105](https://github.com/ggml-org/llama.cpp/issues/27105) Eval bug: MTP (--spec-type draft-mtp) causes GPU MMU page fault (Xid 31) on Maxwell (sm_52) — Tesla M40
- [#27129](https://github.com/ggml-org/llama.cpp/issues/27129) Misc. bug: server silently drops the tools array when the chat template has no tool support (--jinja)
- [#27136](https://github.com/ggml-org/llama.cpp/issues/27136) Eval bug: Audio not working with ggml-org/Qwen3-Omni-30B-A3B-Instruct-GGUF
- [#27146](https://github.com/ggml-org/llama.cpp/issues/27146) Misc. bug: mmproj/mtmd models balloon GTT allocations to ~33 GB total-vm at load on AMD iGPU (Vulkan) -> system-wide OOM
- [#27147](https://github.com/ggml-org/llama.cpp/issues/27147) Misc. bug: first image request on multimodal models is much slower than subsequent ones, because mtmd warmup doesn't perform an encode
- [#29168](https://github.com/ggml-org/llama.cpp/issues/29168) Eval bug: CUDA MoE weighted-reduction fusion (#25952) breaks speculative-decoding exactness — MTP draft acceptance 0.82 → 0.48 and MTP becomes a net slowdown (bisected to b10751)
- [#29118](https://github.com/ggml-org/llama.cpp/issues/29118) Misc. bug: /props publishes the randomized media_marker, defeating PR #21962's collision defense

### Ollama (`ollama/ollama`)

**Stars:** 181,876 · **Open issues:** 4,120 · **Last push:** <1h ago

On September 29, 2026, Ollama released version 0.35.0, introducing support for decision models via the new `/v1/systemone` endpoint, which utilizes TypeSafe’s Jev API to provide choices, probabilities, and scores for tasks like ticket triage and content classification. Key merged features included the addition of the System One scoring API and an update allowing up to ten web searches per response in the machine learning extension. Additionally, various version bumps for llama.cpp and MLX were merged. A notably hot new issue reported is the removal of the settings-file provider in dsh 0.1.7, resulting in launch failures for Ollama models.

#### 🚀 New Releases
- [v0.35.0](https://github.com/ollama/ollama/releases/tag/v0.35.0) v0.35.0

#### ✅ Merged PRs
- [#18652](https://github.com/ollama/ollama/pull/18652) llama.cpp: version bump b11232
- [#18651](https://github.com/ollama/ollama/pull/18651) MLX: version bump
- [#18606](https://github.com/ollama/ollama/pull/18606) feat: add System One scoring API
- [#18602](https://github.com/ollama/ollama/pull/18602) feat: allow ten web searches per response
- [#18625](https://github.com/ollama/ollama/pull/18625) mlx: bound pull stall retries and let the watchdog interrupt them

#### 🐛 New Issues
- [#18698](https://github.com/ollama/ollama/issues/18698) Support for K2 Horizon models (architecture "k2-horizon") `feature request` 💬1
- [#18695](https://github.com/ollama/ollama/issues/18695) Please close/disregard security advisory GHSA-p3v2-289m-c33h 💬1
- [#18699](https://github.com/ollama/ollama/issues/18699) ollama launch dsh: dsh 0.1.7 removed the settings-file provider, so launch no longer loads Ollama models
- [#18696](https://github.com/ollama/ollama/issues/18696) ollama cli (Ubuntu) integration with chatgpt and claude desktop apps `feature request`
- [#18692](https://github.com/ollama/ollama/issues/18692) Add AgentBridge to the list of agents and harnesses

#### 🔒 Closed Issues
- [#18695](https://github.com/ollama/ollama/issues/18695) Please close/disregard security advisory GHSA-p3v2-289m-c33h
- [#18699](https://github.com/ollama/ollama/issues/18699) ollama launch dsh: dsh 0.1.7 removed the settings-file provider, so launch no longer loads Ollama models

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,812 · **Open issues:** 5,393 · **Last push:** <1h ago

Today, LiteLLM released version v1.104.0-rc.1, which includes updates to the signing process for Docker images with cosign. In addition, version v1.103.0 was also released, reinforcing the importance of verifying image signatures using a pinned commit hash. Significant merged features include the addition of bedrock_mantle rows for Claude Opus 5.5 and Sonnet 5.5 (#43647), and updates to the UI, which renamed the "All Models" tab to "Deployed Models" (#43638). The team is also addressing several critical bugs, such as one where audit-log writes fail during worker shutdown (#43583) and another that causes a 500 error when retrieving key info in certain conditions (#43571). Notably, a new bug was reported regarding the WebSocket upstream that incorrectly dispatches success for truncated responses (#43625), highlighting ongoing challenges in system reliability.

#### 🚀 New Releases
- [v1.104.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-rc.1) v1.104.0-rc.1
- [v1.103.0](https://github.com/BerriAI/litellm/releases/tag/v1.103.0) v1.103.0

#### ✅ Merged PRs
- [#43641](https://github.com/BerriAI/litellm/pull/43641) feat(fireworks_ai): route and list the auto, auto-instant and firerouter routers
- [#43653](https://github.com/BerriAI/litellm/pull/43653) chore(codeowners): drop UI, migration, and CODEOWNERS self owners
- [#43647](https://github.com/BerriAI/litellm/pull/43647) feat(cost-map): add bedrock_mantle rows for claude opus 5.5 and sonnet 5.5
- [#43283](https://github.com/BerriAI/litellm/pull/43283) feat(mcp): scan and pin upstream tool descriptions
- [#43638](https://github.com/BerriAI/litellm/pull/43638) fix(ui): rename All Models tab to Deployed Models and model filters to All Proxy Models
- [#43401](https://github.com/BerriAI/litellm/pull/43401) fix(guardrails): preserve Presidio output selection and restoration
- [#43309](https://github.com/BerriAI/litellm/pull/43309) test(integration): stored-config credential canary slots
- [#43308](https://github.com/BerriAI/litellm/pull/43308) test(integration): credential canary slots for MCP and pass-through credentials
- [#43601](https://github.com/BerriAI/litellm/pull/43601) feat(cache): select Rust caching through explicit cache objects
- [#43636](https://github.com/BerriAI/litellm/pull/43636) ci: sync the weekly release cycle with Linear releases
- [#43623](https://github.com/BerriAI/litellm/pull/43623) feat(bedrock): add xai grok-4.7 pricing and sync llama, mistral large 2407 and minimax m2.5 prices
- [#43300](https://github.com/BerriAI/litellm/pull/43300) test(integration): credential canary suite harness
- [#41961](https://github.com/BerriAI/litellm/pull/41961) feat(providers): add Prism provider (internal copy of #40914)
- [#43595](https://github.com/BerriAI/litellm/pull/43595) revert: "feat(proxy): add LiteLLM_DailyGlobalSpend key-free rollup for the usage dashboard (#41324)"
- [#43377](https://github.com/BerriAI/litellm/pull/43377) revert: "feat(usage): search team keys beyond the top-N in the Team usage view (#42857)"
- [#43378](https://github.com/BerriAI/litellm/pull/43378) revert: "feat(usage): search keys beyond the top-N usage subset (#42827)"
- [#43596](https://github.com/BerriAI/litellm/pull/43596) revert: "perf(proxy): split aggregated usage query into key-free rollups and bounded top-N keys (#41293)"
- [#43602](https://github.com/BerriAI/litellm/pull/43602) fix(cost-map): add Vertex batch cache prices to vertex_ai/claude-sonnet-5-5
- [#42447](https://github.com/BerriAI/litellm/pull/42447) fix(panw_prisma_airs): honor experimental_use_latest_role_message_only on every request shape
- [#42461](https://github.com/BerriAI/litellm/pull/42461) fix(provider): accept 2xx status codes in unified_access_group create
- [#43394](https://github.com/BerriAI/litellm/pull/43394) refactor(mcp): consolidate hub publication predicate
- [#43584](https://github.com/BerriAI/litellm/pull/43584) fix(cost-map): add web search flag and model page source to anthropic claude-sonnet-5-5
- [#43376](https://github.com/BerriAI/litellm/pull/43376) revert: "feat(proxy): server-side Team Usage export beyond the top-N key cap (#42996)"
- [#43597](https://github.com/BerriAI/litellm/pull/43597) chore(cost-map): take azure limits for deepseek-v4-flash-0731 and v3.2-speciale
- [#43386](https://github.com/BerriAI/litellm/pull/43386) test(anthropic): add Claude Code /v1/messages customer-journey matrix (native + responses bridge)
- [#43515](https://github.com/BerriAI/litellm/pull/43515) refactor(rust): centralize host execution and compose callbacks
- [#43428](https://github.com/BerriAI/litellm/pull/43428) fix(proxy): unregister logging callbacks removed from the stored config
- [#43421](https://github.com/BerriAI/litellm/pull/43421) test(unit): stop test modules from putting their own directory on sys.path
- [#43587](https://github.com/BerriAI/litellm/pull/43587) fix(model_prices): correct Claude Sonnet 5.5 capabilities and provider keys
- [#43189](https://github.com/BerriAI/litellm/pull/43189) refactor(guardrails): fix agent 365 to the production endpoint and log the opt-in fail_open at error level
- [#43592](https://github.com/BerriAI/litellm/pull/43592) test(integration): pin org-admin status codes in the team-admin matrix
- [#43586](https://github.com/BerriAI/litellm/pull/43586) feat(model_prices): add claude-sonnet-5-5 model pricing
- [#43217](https://github.com/BerriAI/litellm/pull/43217) security(proxy): keep team callback credentials out of the stored request body
- [#43566](https://github.com/BerriAI/litellm/pull/43566) fix(cost-map): registry audit 2026-09-28, openai deep-research shutdown dates, azure deepseek v4.1 flash direct price, vertex gemini 3.8 live avatar price, drop azure_ai/muse-spark-1.3
- [#43105](https://github.com/BerriAI/litellm/pull/43105) fix(proxy): log key owner identity on expired key auth failures
- [#43520](https://github.com/BerriAI/litellm/pull/43520) test(rust): enforce shared upstream error contract in wheel checks
- [#43551](https://github.com/BerriAI/litellm/pull/43551) refactor(types): replace Any with proven types in 8 files
- [#43538](https://github.com/BerriAI/litellm/pull/43538) refactor: clean up fresh tech debt from 2026-09-27
- [#43530](https://github.com/BerriAI/litellm/pull/43530) feat(azure): add mistral ocr pricing and azure max output limits
- [#43514](https://github.com/BerriAI/litellm/pull/43514) refactor(rust): remove delivery routing abstraction
- [#43470](https://github.com/BerriAI/litellm/pull/43470) feat(rust): add the MCP gateway
- [#43469](https://github.com/BerriAI/litellm/pull/43469) feat(rust): add gateway UI login and sessions

#### 🐛 New Issues
- [#43625](https://github.com/BerriAI/litellm/issues/43625) [Bug]: Native Responses WebSocket upstream close dispatches success for truncated responses and leaves client open 💬1
- [#43583](https://github.com/BerriAI/litellm/issues/43583) [Bug]: audit-log writes are fire-and-forget tasks, so a worker shutdown drops records for calls that returned 200 💬1
- [#43582](https://github.com/BerriAI/litellm/issues/43582) [Bug]: key/team router_settings leak to the provider as "router_settings_override" when the request carries api_key `llm translation` 💬1
- [#43578](https://github.com/BerriAI/litellm/issues/43578) _strip_prisma_query_params drops `host`, breaking every Unix-socket Postgres deployment 💬1
- [#43571](https://github.com/BerriAI/litellm/issues/43571) [Bug]: GET /key/info returns 500 MissingRequiredValueError (`where.token`) when the authenticated principal has no virtual key (api_key=None) instead of a clean 4xx 💬1
- [#43569](https://github.com/BerriAI/litellm/issues/43569) Azure EU Data Zone GPT-6 Astra cost map underprices Sweden Central by 10% `llm translation`
- [#43542](https://github.com/BerriAI/litellm/issues/43542) [Bug]: langfuse_otel (OTel V2) drops cache and reasoning tokens from usage_details that the V1 langfuse callback sends `llm translation` 💬1
- [#43541](https://github.com/BerriAI/litellm/issues/43541) [Bug]: OTel V2 still roots an 'auth <route>' trace for routes excluded via OTEL_PYTHON_FASTAPI_EXCLUDED_URLS 💬1
- [#43658](https://github.com/BerriAI/litellm/issues/43658) [Bug]: `Auto-router baseline observation could not be initialized` warning logged on every /v1/messages request when no auto-router is involved `llm translation` `claude code`
- [#43652](https://github.com/BerriAI/litellm/issues/43652) [Feature]: Support aggregate shared-wallet budget fallback to economy models
- [#43620](https://github.com/BerriAI/litellm/issues/43620) [Bug]: Responses bridge keeps only the last reasoning item when stream=False `bug` `llm translation`
- [#43619](https://github.com/BerriAI/litellm/issues/43619) [Bug]: MCP server list returns null description after update
- [#43613](https://github.com/BerriAI/litellm/issues/43613) [Bug]: Cohere and Replicate declare tool-calling params as supported but silently drop them (drop_params=False ignored) `llm translation`
- [#43606](https://github.com/BerriAI/litellm/issues/43606) [Bug]: GigaChat silently ignores stop and response_format={'type':'json_object'} despite declaring them supported `llm translation`
- [#43605](https://github.com/BerriAI/litellm/issues/43605) [Question]: Router for accuracy/cost/latency optimization `enhancement`
- [#43589](https://github.com/BerriAI/litellm/issues/43589) Add "openjev" in "model_prices_and_context_window.json" `llm translation`
- [#43575](https://github.com/BerriAI/litellm/issues/43575) [Bug]: gemini-robotics-er-2-preview bills thinking tokens at 2x Google's current output rate `llm translation`
- [#43572](https://github.com/BerriAI/litellm/issues/43572) [Feature]: Isolate cooldown for a forwarded Claude subscription OAuth bearer, so fallback applies per caller `llm translation` `claude code`
- [#43570](https://github.com/BerriAI/litellm/issues/43570) [Bug]: update_settings replaces router fallbacks without re-materializing the default_fallbacks {"*": ...} chain — periodic 30s reload silently disables default fallbacks (store_model_in_db=True)
- [#43568](https://github.com/BerriAI/litellm/issues/43568) [Feature]: AWS Bedrock autodiscovery `enhancement` `llm translation`
- [#43567](https://github.com/BerriAI/litellm/issues/43567) [Bug]: cache_control_injection_points lose Anthropic cache breakpoints `llm translation`
- [#43557](https://github.com/BerriAI/litellm/issues/43557) [Bug]: Vertex AI drops the per-turn-control beta, so Claude Code's per-message output_config 400s `llm translation` `claude code`
- [#43549](https://github.com/BerriAI/litellm/issues/43549) [Bug]: langfuse_otel stores non-ASCII input/output as \uXXXX escapes
- [#43540](https://github.com/BerriAI/litellm/issues/43540) [Bug]: Pass-through endpoints ignore x-litellm-session-id; every spend log gets a fresh session `llm translation`
- [#43533](https://github.com/BerriAI/litellm/issues/43533) [Bug]: GenerateContentToCompletionHandler drops proxy_server_request, causing empty request body in spend logs and UI `llm translation`
- [#43531](https://github.com/BerriAI/litellm/issues/43531) [Bug]: modify_params drops adaptive thinking after a thinking-less tool call, so Claude Opus 5.x reasons without streaming `llm translation`
- [#43518](https://github.com/BerriAI/litellm/issues/43518) [Bug]: Request Failed Error Code: 500 Message: litellm.APIConnectionError: APIConnectionError: Hosted_vllmException - `bug` `llm translation`

#### 🔒 Closed Issues
- [#36863](https://github.com/BerriAI/litellm/issues/36863) [Bug]: OTel v2 GenAI exception events are never exported — Event body defaults to None, and the OTLP encoder drops the whole batch
- [#31061](https://github.com/BerriAI/litellm/issues/31061) timeout issue in long pdf
- [#31078](https://github.com/BerriAI/litellm/issues/31078) [Bug]: internal_user budget exceeded blocks model discovery endpoints (/v1/models, /models)
- [#31097](https://github.com/BerriAI/litellm/issues/31097) [Bug]: Soft budgets can be set at the Team level and at the personal level but not the team member level.
- [#43336](https://github.com/BerriAI/litellm/issues/43336) [Bug]: Broken Doc Links - Litellm Admin Agent
- [#36931](https://github.com/BerriAI/litellm/issues/36931) [Bug] Databricks provider sends internal `thinking_blocks` field instead of the documented `reasoning` content block, breaking multi-turn extended thinking
- [#31052](https://github.com/BerriAI/litellm/issues/31052) Team admins can exfiltrate proxy env secrets via os.environ/ in DB-stored team models
- [#31059](https://github.com/BerriAI/litellm/issues/31059) [Bug] Streaming Responses-API spend logs can be lost: success-handler asyncio.create_task() is never referenced (GC race)
- [#31079](https://github.com/BerriAI/litellm/issues/31079) [Bug]: /key/regenerate resets active model_max_budget spend window
- [#31092](https://github.com/BerriAI/litellm/issues/31092) [Bug]: Triton models have no means to control chat template parameters (e.g. disable thinking)
- [#31095](https://github.com/BerriAI/litellm/issues/31095) UI: Expired authentication causes page to freeze with 401 errors instead of redirecting to login
- [#31121](https://github.com/BerriAI/litellm/issues/31121) [Bug]: Non-streaming /v1/messages (anthropic_messages) emits duplicate litellm_request OTEL spans + double success/cost callbacks
- [#42655](https://github.com/BerriAI/litellm/issues/42655) [Bug]: MCP tools/call on a single-server endpoint returns 404 "Tool not found" when a different replica served tools/list (oauth_passthrough servers)

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,965 · **Open issues:** 1,234 · **Last push:** 2h ago

On September 29, 2026, Unsloth released version 0.1.900-beta, introducing significant updates including support for Laya Decision Models, a unified Library for documentation and media, improved document viewer capabilities, enhanced performance for Apple Silicon, and a Skills Editor for creating and managing Skills. Noteworthy merged pull requests included fixes for Laya inference speed (#12224), enabling default model sourcing from ModelScope (#12197), and several enhancements to the Studio’s image handling and accessibility features. Among the new issues reported, a notable concern involved the inability to load Qwen 3.8 Flash Next on the M5 Ultra (#12257). Overall, the day's developments enhance the usability and performance of the platform while addressing key user-reported issues.

#### 🚀 New Releases
- [v0.1.900-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.900-beta) Laya Decision Models + Library

#### ✅ Merged PRs
- [#12224](https://github.com/unslothai/unsloth/pull/12224) Studio: faster Laya inference (marker-only head, CUDA graphs)
- [#12106](https://github.com/unslothai/unsloth/pull/12106) Studio: explain failed and recurring llama.cpp runtime repairs
- [#12173](https://github.com/unslothai/unsloth/pull/12173) Studio: fix prompt timestamp layout, accessibility, and imported times
- [#12197](https://github.com/unslothai/unsloth/pull/12197) feat(studio): default the model source to ModelScope where Hugging Face is restricted
- [#12196](https://github.com/unslothai/unsloth/pull/12196) Studio: laya download confirm
- [#12222](https://github.com/unslothai/unsloth/pull/12222) Library delete dialog: no dark mode border, cancel on outside click
- [#12223](https://github.com/unslothai/unsloth/pull/12223) Images: smaller prompt box radius, inset scrollbar, taller default
- [#12228](https://github.com/unslothai/unsloth/pull/12228) Studio: load Images strip tiles as thumbnails instead of full PNGs
- [#12230](https://github.com/unslothai/unsloth/pull/12230) Scope the runtime encoding scan past vendored laya while its loader supplies UTF-8
- [#12210](https://github.com/unslothai/unsloth/pull/12210) Studio: load Laya without randomly initialising its vocabulary embedding
- [#12208](https://github.com/unslothai/unsloth/pull/12208) Studio: clamp unsupported reasoning effort to offered levels
- [#7102](https://github.com/unslothai/unsloth/pull/7102) Unsloth Studio (AMD/Windows): real torchao INT8 / FP8 export on Windows ROCm
- [#12204](https://github.com/unslothai/unsloth/pull/12204) fix(studio): reuse hardware monitor drag and resize handling for API monitor
- [#11897](https://github.com/unslothai/unsloth/pull/11897) Studio: resolve repo-relative image paths in the simple image+text VLM converter
- [#12007](https://github.com/unslothai/unsloth/pull/12007) fix: align GKD Liger loss with the native objective
- [#11750](https://github.com/unslothai/unsloth/pull/11750) Train Kimi-K3 with its MXFP4 experts kept packed and dequantized on the fly
- [#8804](https://github.com/unslothai/unsloth/pull/8804) Studio: say why a generation or a model load failed, and offer the log
- [#12229](https://github.com/unslothai/unsloth/pull/12229) Default loader.py's Mistral-format names in the precision-conflict harness
- [#12087](https://github.com/unslothai/unsloth/pull/12087) fix(studio): prevent terminal tool hangs in credential scan (#12048)
- [#11537](https://github.com/unslothai/unsloth/pull/11537) Load compressed-tensors packed INT4 checkpoints for QLoRA without a 16-bit copy (exact packed INT4 by default, NF4 fallback), and train remote DeepSeek-V3 MoE code (Kimi-K2.7-Code)
- [#12218](https://github.com/unslothai/unsloth/pull/12218) Repair the checks red on main after today's Mistral-format, GKD, laya, llm-compressor and HF token merges
- [#4241](https://github.com/unslothai/unsloth/pull/4241) Add Idefics3 support (Granite Docling VLM)
- [#12203](https://github.com/unslothai/unsloth/pull/12203) Follow chat export calls in the cancelled-save contract instead of a fixed file list
- [#12206](https://github.com/unslothai/unsloth/pull/12206) Give the Kimi processor test's stand-in tokenizer convert_tokens_to_ids
- [#12209](https://github.com/unslothai/unsloth/pull/12209) Bump install.sh / install.ps1 pin to unsloth>=2026.9.12, unsloth-zoo>=2026.9.8
- [#12200](https://github.com/unslothai/unsloth/pull/12200) GKD: right-align left-padded rows before the student forward
- [#12199](https://github.com/unslothai/unsloth/pull/12199) Keep xFormers attention causal when the decoder is called without a mask
- [#12194](https://github.com/unslothai/unsloth/pull/12194) Unpack the mirrored uv wheel with python3 -m zipfile instead of an inline one-liner
- [#12202](https://github.com/unslothai/unsloth/pull/12202) Studio: vendor laya 0.3.5 and hold its weights in float16
- [#11449](https://github.com/unslothai/unsloth/pull/11449) Stop gpt-oss generation at the harmony tool call token
- [#9212](https://github.com/unslothai/unsloth/pull/9212) Studio: name the MCP server while the tool call is still streaming
- [#12144](https://github.com/unslothai/unsloth/pull/12144) Load Mistral-format checkpoints (params.json only) through transformers' Mistral4 (Mistral-Large-3)
- [#6933](https://github.com/unslothai/unsloth/pull/6933) Fix Studio launcher repair for missing install id
- [#6806](https://github.com/unslothai/unsloth/pull/6806) Do not reinstall llm-compressor when it is already installed
- [#8397](https://github.com/unslothai/unsloth/pull/8397) Studio: return no-op instead of 500 for an out-of-range scan folder id
- [#8833](https://github.com/unslothai/unsloth/pull/8833) Unsloth Studio: stop a Mac browser hiding GPU-only models from a remote CUDA / ROCm / Intel server
- [#12061](https://github.com/unslothai/unsloth/pull/12061) Studio: compile VAEs by repeated block, one H3 graph per first render, vectorise the HunyuanVideo-1.5 VAE mask
- [#12060](https://github.com/unslothai/unsloth/pull/12060) Studio: compile FLUX.1 dynamic, CUDA-graph the SDXL U-Net, decode one-frame Qwen-Image latents in 2D
- [#12146](https://github.com/unslothai/unsloth/pull/12146) Load block-FP8 checkpoints in 4-bit (NF4) when load_in_4bit=True is passed
- [#12059](https://github.com/unslothai/unsloth/pull/12059) Studio: fix inductor CantSplit on torch 2.12/2.13 and speed up the Qwen-Image-2.1 VAE
- [#12008](https://github.com/unslothai/unsloth/pull/12008) Fix Gemma2 padding masks during batched cached decoding
- [#12192](https://github.com/unslothai/unsloth/pull/12192) Studio: capability tags in the model picker match the vision pill and get their own colours
- [#12083](https://github.com/unslothai/unsloth/pull/12083) Studio: fused int8 MLP kernels and real-arithmetic RoPE for DiT denoisers (FLUX.1 11% less GPU time per step)
- [#12190](https://github.com/unslothai/unsloth/pull/12190) Name utf-8 on the SSLKEYLOGFILE writability probe
- [#12188](https://github.com/unslothai/unsloth/pull/12188) Store the Studio sandbox credential path names in pieces
- [#12189](https://github.com/unslothai/unsloth/pull/12189) Count only the retry loop's own sleeps in the JSON fallback backoff test
- [#12182](https://github.com/unslothai/unsloth/pull/12182) Pass the MXC host-prep script as plain text instead of an encoded command
- [#12181](https://github.com/unslothai/unsloth/pull/12181) Join the npm scanner's credential path markers from pieces
- [#12161](https://github.com/unslothai/unsloth/pull/12161) Studio: load a downloaded GGUF from disk when the Hub cannot be read or refuses it
- [#12164](https://github.com/unslothai/unsloth/pull/12164) Studio: run the isolated Windows Terminal on cmd.exe with stock git when Git Bash cannot start in MXC
- [#12159](https://github.com/unslothai/unsloth/pull/12159) Studio: tell a rejected Hugging Face token apart from an unreachable Hub
- [#12121](https://github.com/unslothai/unsloth/pull/12121) Studio: grant MXC Tier 3 read access to runtime folders once, not per launch
- [#12186](https://github.com/unslothai/unsloth/pull/12186) Studio: fix Decision API validation and TypeSafe SDK metadata
- [#12078](https://github.com/unslothai/unsloth/pull/12078) Studio: Triton-fused VAE norms, caches and attention for every image and video VAE (1.7x to 6.3x decode)
- [#12187](https://github.com/unslothai/unsloth/pull/12187) Read the gradient checkpointing precondition off transformers' own method
- [#12184](https://github.com/unslothai/unsloth/pull/12184) Refresh WSL shortcut icons through Python instead of an emitted native stub
- [#11722](https://github.com/unslothai/unsloth/pull/11722) Studio: pick the right model size when the file names are lowercase
- [#11600](https://github.com/unslothai/unsloth/pull/11600) Studio: list a crashed or cancelled run's saved checkpoints on the Export page
- [#12158](https://github.com/unslothai/unsloth/pull/12158) Studio: read public Hub repos without a saved token the Hub rejects
- [#12156](https://github.com/unslothai/unsloth/pull/12156) Studio: list HF cache models written without symlinks in the local inventory
- [#12136](https://github.com/unslothai/unsloth/pull/12136) Route GKD distillation through the chunked generalized JSD
- [#12139](https://github.com/unslothai/unsloth/pull/12139) Repair chat templates that always append the generation prompt, also on FastModel loads
- [#12132](https://github.com/unslothai/unsloth/pull/12132) Narrow Kimi-K3's zero-padded KDA A_log to num_heads so the fla backward runs
- [#12127](https://github.com/unslothai/unsloth/pull/12127) Load speech-to-text models (Voxtral, Qwen2-Audio) through FastModel
- [#12124](https://github.com/unslothai/unsloth/pull/12124) Keep Linear layers an FP8 checkpoint stores in bf16 unconverted
- [#12129](https://github.com/unslothai/unsloth/pull/12129) Keep flash attention off towers the Auto classes do not register
- [#12130](https://github.com/unslothai/unsloth/pull/12130) Rebuild CohereTokenizer from tokenizer.json when transformers v5 changes its ids
- [#12133](https://github.com/unslothai/unsloth/pull/12133) Dequantize block-FP8 weights with a ragged last block on 16-bit loads (GLM-5.3)
- [#12178](https://github.com/unslothai/unsloth/pull/12178) Add a CI gate for code shapes that heuristic antivirus scanners quarantine
- [#12175](https://github.com/unslothai/unsloth/pull/12175) Studio: never ask for approval to run search_conversation
- [#12174](https://github.com/unslothai/unsloth/pull/12174) Studio: keep conversation recall working across repeated compactions
- [#12076](https://github.com/unslothai/unsloth/pull/12076) Turn off the MoE aux loss for dense models that carry a router config
- [#12155](https://github.com/unslothai/unsloth/pull/12155) Studio: list at most the 12 most recently active projects and sections in Move to
- [#12128](https://github.com/unslothai/unsloth/pull/12128) Refuse K-EXAONE 2.0 on a transformers that ignores its config
- [#12125](https://github.com/unslothai/unsloth/pull/12125) Build the native image processor at defaults when a VLM repo has no preprocessor_config.json
- [#12126](https://github.com/unslothai/unsloth/pull/12126) Let a loaded Kimi K2.5 / K2.7 processor take processor(text=..., images=...)
- [#12067](https://github.com/unslothai/unsloth/pull/12067) Studio: LTX-2.3 about 4.5x faster per clip (unguided distilled sampling, compile fixes, hosted FP8)
- [#12123](https://github.com/unslothai/unsloth/pull/12123) Phi-4-reasoning-vision: give remote multimodal prep an indexable cache view on transformers 5
- [#12131](https://github.com/unslothai/unsloth/pull/12131) Keep Nemotron-H mixer.out_proj unquantized under a caller's BitsAndBytesConfig
- [#12147](https://github.com/unslothai/unsloth/pull/12147) Attention resolver: respect a declared _supports_sdpa = False, and skip flash_attention_2 when a class's compatible flash kernels exclude it (MiMo-V2-Flash)
- [#12176](https://github.com/unslothai/unsloth/pull/12176) SAC probe: verify Studio identity before sending a password
- [#12111](https://github.com/unslothai/unsloth/pull/12111) unsloth start opencode: size the output limit to the context and add --max-tokens
- [#12172](https://github.com/unslothai/unsloth/pull/12172) Studio: round hover for the Settings close button
- [#12122](https://github.com/unslothai/unsloth/pull/12122) Studio: Chats library in the Library
- [#12167](https://github.com/unslothai/unsloth/pull/12167) Tests: stop Windows tests tripping Bitdefender and the 16-bit application dialog on real machines
- [#12166](https://github.com/unslothai/unsloth/pull/12166) Studio: ignore an SSLKEYLOGFILE the process cannot write instead of failing every HTTPS client
- [#11485](https://github.com/unslothai/unsloth/pull/11485) Studio: Select all only picks the models the search shows
- [#11593](https://github.com/unslothai/unsloth/pull/11593) Studio: reset the download progress bar when a retry restarts the file
- [#11723](https://github.com/unslothai/unsloth/pull/11723) Studio: stop runaway tool output from using up memory
- [#12162](https://github.com/unslothai/unsloth/pull/12162) Fix training with accelerate 1.15 on torch without a distributed backend (AMD Windows ROCm)
- [#12154](https://github.com/unslothai/unsloth/pull/12154) Gemma2: keep softcapping attention under int32 indexing and fall back to eager if compile fails
- [#10287](https://github.com/unslothai/unsloth/pull/10287) Studio: price MLX loads in the memory panel and fit an unpinned context to available memory
- [#12165](https://github.com/unslothai/unsloth/pull/12165) Studio: stop a hung system node or npm from stalling setup
- [#12075](https://github.com/unslothai/unsloth/pull/12075) Studio: make compile knobs reach the render thread on torch 2.12+
- [#12110](https://github.com/unslothai/unsloth/pull/12110) Studio: add a Scroll while generating setting (Auto-scroll or Manual)
- [#12170](https://github.com/unslothai/unsloth/pull/12170) Studio: show when a prompt was sent while hovering it
- [#12169](https://github.com/unslothai/unsloth/pull/12169) Keep scan_packages.py from tripping Bitdefender's Python stealer signature
- [#12116](https://github.com/unslothai/unsloth/pull/12116) Fix Gemma and Gemma2 embeddings scaled twice on transformers 5.4+
- [#12112](https://github.com/unslothai/unsloth/pull/12112) Gemma2: use flash_attn_with_kvcache for cached decoding
- [#11166](https://github.com/unslothai/unsloth/pull/11166) Windows installers find an NVIDIA GPU on the PCI bus, and say which CUDA it can use
- [#10408](https://github.com/unslothai/unsloth/pull/10408) Add a Windows probe for code integrity blocks, and audit bundle signatures in CI
- [#11193](https://github.com/unslothai/unsloth/pull/11193) Remove the reflection-emit apparatus and all four emitted types
- [#11173](https://github.com/unslothai/unsloth/pull/11173) Recover CUDA compute capabilities without emitting a P/Invoke type
- [#11116](https://github.com/unslothai/unsloth/pull/11116) Refresh a rewritten shortcut's icon where the shell cannot define the type
- [#11115](https://github.com/unslothai/unsloth/pull/11115) Ask Python for the process image table when the native helper is unavailable
- [#11104](https://github.com/unslothai/unsloth/pull/11104) Unsloth Studio Installer: ask Python for a path identity before giving up on an exact one
- [#11799](https://github.com/unslothai/unsloth/pull/11799) Fix rowwise FP8 scale axes in fused LoRA backward
- [#11170](https://github.com/unslothai/unsloth/pull/11170) Studio: TurboQuant KV cache option for MLX inference
- [#12098](https://github.com/unslothai/unsloth/pull/12098) Fall back from FBGEMM for rowwise FP8 on GPUs it has no kernel for (RTX PRO 6000 / 5090)
- [#12027](https://github.com/unslothai/unsloth/pull/12027) Speed up block-FP8 LoRA training: run FP8 linears eagerly, 8 warps for 128-row GEMM tiles

#### 🐛 New Issues
- [#12183](https://github.com/unslothai/unsloth/issues/12183) [Feature] Memory across conversations with different models `feature request`
- [#12257](https://github.com/unslothai/unsloth/issues/12257) [Bug] Unable to load Qwen 3.8 Flash Next (Specifically MLX) on M5 Ultra `feature request` `bug`
- [#12253](https://github.com/unslothai/unsloth/issues/12253) [Bug] Unsloth Loading a repo id that exists in a registered scan folder downloads it into the hub cache instead of using the local copy `feature request` `bug`
- [#12248](https://github.com/unslothai/unsloth/issues/12248) [Feature] AMD: Unsloth Studio / Desktop: use an NVIDIA card and an AMD card at the same time for different jobs
- [#12247](https://github.com/unslothai/unsloth/issues/12247) [Bug] Unsloth Studio / Desktop: the System tab doesn't show the card llama.cpp runs on when it's CUDA or ROCm and different from training
- [#12246](https://github.com/unslothai/unsloth/issues/12246) [Bug] AMD: Unsloth Studio / Desktop "Automatic" llama.cpp backend picks CUDA on a mixed host where torch is ROCm and the AMD card is bigger
- [#12245](https://github.com/unslothai/unsloth/issues/12245) [Bug] AMD: Unsloth Studio / Desktop shows no GPU on a mixed NVIDIA+AMD host after `CUDA_VISIBLE_DEVICES=""`, because ROCm hides the AMD card too
- [#12205](https://github.com/unslothai/unsloth/issues/12205) [Unsloth Studio] Prebuilt ROCm llama.cpp binary crashes with "out of memory" (hipStreamCreateWithFlags); source build of the same commit works fine

#### 🔒 Closed Issues
- [#4073](https://github.com/unslothai/unsloth/issues/4073) [Feature Request] fast inference for LFM (and Mamba models)
- [#4079](https://github.com/unslothai/unsloth/issues/4079) [Feature Request] Add Idefics3 architecture support (Granite Docling VLM)
- [#12009](https://github.com/unslothai/unsloth/issues/12009) [Bug] Unsloth Desktop "unsloth start opencode" generation always caps at 8192 tokens, ignoring max_tokens
- [#11709](https://github.com/unslothai/unsloth/issues/11709) [Bug] This won’t take long...
- [#12048](https://github.com/unslothai/unsloth/issues/12048) [Bug] Tool Calls Completely Halt Randomly (Stuck in 'Running' State) Even Past Max Tool Call Duration
- [#11554](https://github.com/unslothai/unsloth/issues/11554) Wire the chunked generalized JSD into the GKD path
- [#11665](https://github.com/unslothai/unsloth/issues/11665) [Feature] Option to disable auto chat scroll
- [#11545](https://github.com/unslothai/unsloth/issues/11545) [Bug] LLM CUDA works, image model import fails after Repair.
- [#11432](https://github.com/unslothai/unsloth/issues/11432) Studio: say antivirus when a runtime repair fails or the damage comes back, not only when repair cannot run
- [#5162](https://github.com/unslothai/unsloth/issues/5162) [Bug] unsloth/gpt-oss-120b emits harmony specials as plain BPE under long system prompts → HarmonyError 200006

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,116 · **Open issues:** 392 · **Last push:** 4h ago

On September 29, 2026, there were no new releases for AIBrix; however, several important merged PRs improved the codebase. Notably, #2834 introduced a configuration for Envoy diagnostic access logs, while #2798 added adaptive bucket serving to the pd prefill routing, enhancing data handling efficiency. Additionally, bug fixes included #2839, which restored the S3 storage factory parameter test, and #2820, which improved event chaining for multi-block BlockStored events. A new issue was raised, #2840, proposing token-weighted decode scoring for the PD router, indicating growing interest in optimizing routing algorithms.

#### ✅ Merged PRs
- [#2834](https://github.com/vllm-project/aibrix/pull/2834) chart: Add Envoy diagnostic access log configuration
- [#2798](https://github.com/vllm-project/aibrix/pull/2798) [Feat] Add adaptive bucket serving to the pd prefill routing
- [#2839](https://github.com/vllm-project/aibrix/pull/2839) [Bug] Restore the S3 storage factory parameter test
- [#2820](https://github.com/vllm-project/aibrix/pull/2820) [Bug] Chain each block of a multi-block BlockStored event from its predecessor
- [#2802](https://github.com/vllm-project/aibrix/pull/2802) [Bug] Key gateway rate history by namespace/name
- [#2794](https://github.com/vllm-project/aibrix/pull/2794) [Feat] Support TensorRT-LLM generation-first (parallel) P/D routing

#### 🐛 New Issues
- [#2840](https://github.com/vllm-project/aibrix/issues/2840) [RFC]: Token-weighted decode scoring for the PD router `area/gateway` `kind/feature` `area/testing` `area/kv-cache` 💬3

#### 🔒 Closed Issues
- [#2808](https://github.com/vllm-project/aibrix/issues/2808) [Feature][ModelClaim] Answer 503 with Retry-After for a model whose claim is not placed yet

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,969 · **Open issues:** 564 · **Last push:** <1h ago

On September 29, 2026, there were no new releases for Semantic Router. However, a significant bug fix was merged addressing the scoring of the domain baseline on MMLU-Pro rows outside of MMLU (PR #4308). In addition, several notable new issues were raised, including a documentation update needed for the README regarding the DASHBOARD_SETUP_MODE (issue #4313) and a bug concerning the routing of same-named LoRA adapters to the incorrect base model (issue #4337). Another key feature request was submitted to warn when a context band escalates to a model without a larger window (issue #4318), indicating a focus on enhancing context management capabilities. Overall, the day's activities included crucial bug fixes and immediate attention to potential vulnerabilities and misconfigurations within the system.

#### ✅ Merged PRs
- [#4308](https://github.com/vllm-project/semantic-router/pull/4308) [Bug] Score the domain baseline on MMLU-Pro rows outside MMLU

#### 🐛 New Issues
- [#4313](https://github.com/vllm-project/semantic-router/issues/4313) [Docs] README still presents DASHBOARD_SETUP_MODE as the setup-mode switch `accepted` `wg/developer-experience-ecosystem` `documentation` 💬5
- [#4317](https://github.com/vllm-project/semantic-router/issues/4317) [Feature] Re-evaluate a context-gated decision when transformation drops demand below its band `enhancement` `needs-acceptance` `wg/mom-routing` 💬4
- [#4337](https://github.com/vllm-project/semantic-router/issues/4337) [Bug] Same-named LoRA adapters can route to the wrong base model `bug` `accepted` `wg/data-plane-networking` 💬4
- [#4318](https://github.com/vllm-project/semantic-router/issues/4318) [Feature] Warn when a context band escalates to a model with no larger window `enhancement` `good first issue` `help wanted` `accepted` 💬3
- [#4304](https://github.com/vllm-project/semantic-router/issues/4304) [Feature] Batch Decision runtime rows of similar length together `enhancement` `accepted` `wg/router-models-inference-runtime` 💬3
- [#4316](https://github.com/vllm-project/semantic-router/issues/4316) [Bug] Context compression silently stops working once token calibration warms up `bug` `accepted` `wg/agentic-context` 💬3
- [#4302](https://github.com/vllm-project/semantic-router/issues/4302) [Feature] List the training data on the Vela model cards `enhancement` `good first issue` `help wanted` `accepted` 💬2
- [#4338](https://github.com/vllm-project/semantic-router/issues/4338) [Security] Validate and contain MCP management-plane inputs `bug` `needs-acceptance` `wg/enterprise-environment` 💬2
- [#4312](https://github.com/vllm-project/semantic-router/issues/4312) [Bug] Dashboard MCP test connection fails with 405 Method Not Allowed `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4319](https://github.com/vllm-project/semantic-router/issues/4319) [Bug] Anthropic content extension validation applies request rules to provider responses `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4314](https://github.com/vllm-project/semantic-router/issues/4314) [Bug] ML Setup navigation visible with the pipeline disabled leads to a bare 403 `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4339](https://github.com/vllm-project/semantic-router/issues/4339) [Bug] Prevent stale in-flight tokens from clearing newer requests `bug` `accepted` `wg/mom-routing` 💬1
- [#4306](https://github.com/vllm-project/semantic-router/issues/4306) [Research] One fine-tuned Decision model vs per-signal encoders on the same data `accepted` `research` `wg/router-models-inference-runtime` 💬1
- [#4305](https://github.com/vllm-project/semantic-router/issues/4305) [Research] Corpus-matched train and test data for the router signal classifiers `accepted` `research` `wg/router-models-inference-runtime` 💬1
- [#4327](https://github.com/vllm-project/semantic-router/issues/4327) [Bug] Reject negative RAG max_context_length during configuration validation `bug` `needs-acceptance` 💬1
- [#4326](https://github.com/vllm-project/semantic-router/issues/4326) [Bug] Remove per-user cardinality from Router Memory metrics and align backend telemetry `bug` `accepted` `wg/agentic-context` 💬1
- [#4325](https://github.com/vllm-project/semantic-router/issues/4325) [Bug] Define paginated, ordered Router Memory List semantics across maintained backends `bug` `accepted` `wg/agentic-context` 💬1
- [#4303](https://github.com/vllm-project/semantic-router/issues/4303) [Bug] Domain and Guard recipes train mean pooling, but the released checkpoints use CLS `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4301](https://github.com/vllm-project/semantic-router/issues/4301) [Bug] Quality baseline fact-check and feedback splits can be solved without reading the text `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4300](https://github.com/vllm-project/semantic-router/issues/4300) [Bug] Vela Domain's MMLU-Pro score includes questions from its training data `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4329](https://github.com/vllm-project/semantic-router/issues/4329) [Bug] Make parallel hybrid RAG return promptly and define deterministic result ranking `bug` `needs-acceptance`
- [#4328](https://github.com/vllm-project/semantic-router/issues/4328) [Bug] Reject MCP RAG configuration until the runtime has an MCP tool invoker `bug` `needs-acceptance`

#### 🔒 Closed Issues
- [#3892](https://github.com/vllm-project/semantic-router/issues/3892) [Bug] header mutations when responding to body in full-duplex-streamed mode is likely ignored by clients
- [#4313](https://github.com/vllm-project/semantic-router/issues/4313) [Docs] README still presents DASHBOARD_SETUP_MODE as the setup-mode switch
- [#3530](https://github.com/vllm-project/semantic-router/issues/3530) [Feature] Add fix hints for recipe and entrypoint validation errors
- [#4312](https://github.com/vllm-project/semantic-router/issues/4312) [Bug] Dashboard MCP test connection fails with 405 Method Not Allowed
- [#4281](https://github.com/vllm-project/semantic-router/issues/4281) [Bug] v0.4.0 serve aborts on WSL2 when XDG_RUNTIME_DIR points at a missing directory
- [#4283](https://github.com/vllm-project/semantic-router/issues/4283) [Bug] protocol-compatibility matrix overstates reasoning-content support

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*