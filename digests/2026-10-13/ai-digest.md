# 📡 AI Ecosystem Digest — 2026-10-13

> Generated 2026-10-13 03:22 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 150,466 | 24 | 3 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 128,876 | 19 | 2 | 24 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,304 | 0 | 0 | 1 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,250 | 9 | 11 | 0 | 4 |
| [OpenCode](https://github.com/anomalyco/opencode) | 212,987 | 11 | 32 | 10 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,456 | 24 | 12 | 3 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,816 | 207 | 139 | 169 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 253,184 | 14 | 24 | 3 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,677 | 32 | 11 | 39 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,053 | 28 | 21 | 30 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,967 | 18 | 19 | 20 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,934 | 6 | 7 | 9 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,103 | 33 | 22 | 60 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,901 | 18 | 88 | 121 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,134 | 7 | 1 | 14 | 1 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,122 | 33 | 10 | 19 | 0 |

---

## ✨ Highlights

- **Gemini CLI** has released [v0.65.0-nightly.20261013.g51617c1bc](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261013.g51617c1bc).
- **OpenAI Codex** merged [PR #53506](https://github.com/openai/codex/pull/53506), which rejects duplicate Host headers in the network proxy.
- **OpenClaw** issued a crucial bug report regarding the beta.2 update where [config read exits 1](https://github.com/openclaw/openclaw/issues/170331) and leaves the systemd unit unchanged, gathering 8 comments.
- **Hermes Agent** is addressing a significant bug involving memory provider issues with [15 comments](https://github.com/NousResearch/hermes-agent/issues/137017) about the 'holographic' provider not being installed.
- **Semantic Router** has reported a bug about duplicate row inserts on retry in Milvus Router Memory Store, which has already drawn 4 comments ([issue link](https://github.com/vllm-project/semantic-router/issues/4966)).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 150,466 · **Open issues:** 14,723 · **Last push:** 2h ago

On October 13, 2026, there were no new releases or merged pull requests for Claude Code, indicating a routine maintenance day. However, a notable new issue was reported (#101476) concerning the LSP tool, which fails to respect specified configurations for ignoring gitignored paths. Additionally, users highlighted several bugs related to session management and system errors, including issue #101661 where Opus 5.5's cyber safeguards mistakenly blocked legitimate materials, and issue #101650 where the orchestrating session ignored set limits and resulted in unnecessary retries. Overall, while there were no updates or fixes, the reported issues suggest areas of improvement for future developments.

#### 🐛 New Issues
- [#101476](https://github.com/anthropics/claude-code/issues/101476) [BUG] LSP tool drops findReferences/goToDefinition results in gitignored paths; respectGitignore: false has no effect `bug` `has repro` `platform:macos` `area:tools` 💬1
- [#101654](https://github.com/anthropics/claude-code/issues/101654) Claude in Chrome extension permission popup fires repeatedly within an already-approved session, ignoring Claude Code permission mode `bug` `area:mcp` `area:permissions` `area:browser-extension` 💬1
- [#101650](https://github.com/anthropics/claude-code/issues/101650) [MODEL] Orchestrating session ignored the project's written agent and batch limits, then retried its own load-caused timeouts for 2 hours: ~12% of a weekly Max allowance spent, nothing merged `bug` `platform:windows` `area:cost` `area:model` 💬1
- [#101670](https://github.com/anthropics/claude-code/issues/101670) Bug Report: Unspecified error in Fable 5 and Sonnet 5.5 desktop sessions `bug` `platform:macos` `needs-info`
- [#101669](https://github.com/anthropics/claude-code/issues/101669) demorar en cargar `bug` `needs-info`
- [#101668](https://github.com/anthropics/claude-code/issues/101668) [BUG] Files of all types uploaded via both the plus (+) button and drag-and-drop cannot be recognized `bug` `platform:macos` `area:ide` `platform:vscode`
- [#101667](https://github.com/anthropics/claude-code/issues/101667) [Bug] Haiku subagent fails after Skill use: 400 system.4.type must be 'text' `bug` `has repro` `platform:macos` `area:agents`
- [#101666](https://github.com/anthropics/claude-code/issues/101666) MCP tool place_stock_order fails with type validation error when passing qty or notional `bug` `platform:windows` `area:mcp`
- [#101665](https://github.com/anthropics/claude-code/issues/101665) Preventing Claude within Projects from manipulating system systems or file dele… `enhancement` `area:security` `area:permissions`
- [#101664](https://github.com/anthropics/claude-code/issues/101664) [GitHub integration] Missing Github option `bug` `platform:web` `github-integration`
- [#101662](https://github.com/anthropics/claude-code/issues/101662) [Bug] Repeated factual errors in summaries: incorrect counts, overclaims, misread context `bug` `platform:macos` `area:model` `needs-repro`
- [#101663](https://github.com/anthropics/claude-code/issues/101663) [Bug] Auto mode blocks harmless actions like reading project context files `bug` `platform:macos` `platform:vscode` `area:permissions`
- [#101661](https://github.com/anthropics/claude-code/issues/101661) [Bug] Opus 5.5 cyber safeguards falsely block legitimate security study materials `bug` `duplicate` `platform:macos` `area:model`
- [#101658](https://github.com/anthropics/claude-code/issues/101658) [MODEL] Opus 5.5 - Palantir showed up in thinking? Model denied a root cause analysis and session got blocked? `model`
- [#101660](https://github.com/anthropics/claude-code/issues/101660) [Bug] Legitimate security review of own code blocked with [cyber] flag `bug` `platform:linux` `area:model` `area:security`
- [#101625](https://github.com/anthropics/claude-code/issues/101625) [Bug] Support Consulting a Second LLM for Second Opinions `enhancement` `platform:windows` `area:providers`
- [#101659](https://github.com/anthropics/claude-code/issues/101659) Subagent sent the user's email from session context in a User-Agent header `bug` `platform:macos` `area:security` `area:agents`
- [#101657](https://github.com/anthropics/claude-code/issues/101657) [BUG] Voice dictation sends the dictated text twice when a character is typed through the Japanese IME before Enter (macOS desktop app, Code tab; reproduces every time) `bug` `platform:macos` `area:desktop`
- [#101656](https://github.com/anthropics/claude-code/issues/101656) [BUG] Japanese voice dictation inserts a full-width full stop 。 at the start of each new dictation segment (macOS desktop app, Code tab) `bug` `platform:macos` `area:desktop`
- [#101655](https://github.com/anthropics/claude-code/issues/101655) [Bug] Safeguard blocks benign agent message-analysis coding with no reason `bug` `platform:macos` `area:model` `area:security`
- [#101653](https://github.com/anthropics/claude-code/issues/101653) [Bug] /compact blocked by safety classifier despite pre-compact warning (Opus 5.5) `bug` `platform:macos` `area:model` `area:core`
- [#101652](https://github.com/anthropics/claude-code/issues/101652) I can't see the prompt which should be shown to ask for my approval `bug` `area:claude-code-web` `platform:web` `area:permissions`
- [#101649](https://github.com/anthropics/claude-code/issues/101649) [BUG] macOS: OAuth login revoked ~weekly when long-lived processes on different versions share one Keychain credential (still reproduces 2.1.296) `bug` `has repro` `platform:macos` `area:auth`
- [#101651](https://github.com/anthropics/claude-code/issues/101651) "Couldn't share transcript" after accepting the share prompt, and /feedback returns 403 even after /login `bug` `platform:windows` `area:cli`

#### 🔒 Closed Issues
- [#90438](https://github.com/anthropics/claude-code/issues/90438) [BUG] Windows: .claude.json accumulates project keys differing only in case, making the file unparseable and silently hiding MCP servers
- [#101205](https://github.com/anthropics/claude-code/issues/101205) [BUG] MCP OAuth: resource parameter is double-encoded when the server URL has a query string (Supabase returns 422)
- [#95383](https://github.com/anthropics/claude-code/issues/95383) MCP Calls

### OpenAI Codex (`openai/codex`)

**Stars:** 128,876 · **Open issues:** 22,198 · **Last push:** 3h ago

No new releases were made today, but several significant pull requests were merged, including #53506, which rejects duplicate Host headers in the network proxy, and #53496, which preserves pending Effects toggles across save refreshes. Other highlights include updates to support local MSVC toolchains for Windows Bazel tests (#53443) and improvements to the user interface for live configuration toggles (#53429). Among the new issues, #53407 identifies a problem with the Codex CLI on macOS, where the GPT-6.1 model returns at-capacity errors during text-only turns, affecting a notable number of users. This day featured routine maintenance and updates, but the ongoing capacity issues with selected models draw particular attention.

#### ✅ Merged PRs
- [#53506](https://github.com/openai/codex/pull/53506) Reject duplicate Host headers in the network proxy
- [#53496](https://github.com/openai/codex/pull/53496) Preserve pending Effects toggles across save refreshes
- [#53485](https://github.com/openai/codex/pull/53485) Update `quinn-proto` to 0.11.18
- [#53453](https://github.com/openai/codex/pull/53453) Prefer the Windows clipboard and bound copy attempts on WSL
- [#53452](https://github.com/openai/codex/pull/53452) Close input admission while a turn finishes recording
- [#53451](https://github.com/openai/codex/pull/53451) Treat incomplete responses as terminal errors
- [#53444](https://github.com/openai/codex/pull/53444) Suppress repeated turn diffs in `codex exec` human output
- [#53443](https://github.com/openai/codex/pull/53443) Use local MSVC toolchains for native Windows Bazel tests
- [#53440](https://github.com/openai/codex/pull/53440) Preserve status line accents on 16-color terminals
- [#53438](https://github.com/openai/codex/pull/53438) Stop identifying Apple Terminal from `TERM_SESSION_ID`
- [#53436](https://github.com/openai/codex/pull/53436) Route TUI request replies to their originating connection and thread
- [#53429](https://github.com/openai/codex/pull/53429) Apply configuration toggles live and improve settings navigation
- [#53426](https://github.com/openai/codex/pull/53426) Preserve Windows runtime registration failure diagnostics
- [#53424](https://github.com/openai/codex/pull/53424) Add regression coverage for network grants on cold thread resume
- [#53419](https://github.com/openai/codex/pull/53419) Restore saved thread permissions during configuration loading
- [#53412](https://github.com/openai/codex/pull/53412) Isolate arg0 helper directories by operating system
- [#53400](https://github.com/openai/codex/pull/53400) Add explicit local board connections with fixed runtime access
- [#53393](https://github.com/openai/codex/pull/53393) Distinguish Guardian parent-compaction failure reasons
- [#53389](https://github.com/openai/codex/pull/53389) Use cached login credentials for Guardian decisions
- [#53382](https://github.com/openai/codex/pull/53382) Ignore the unsafe-libyaml advisory in dependency audits
- [#53369](https://github.com/openai/codex/pull/53369) Allow turns when the agent message board is unavailable
- [#53358](https://github.com/openai/codex/pull/53358) Remove selected protocol, apply-patch, MCP, and TUI tests
- [#53339](https://github.com/openai/codex/pull/53339) Test final polling of remote processes with open output streams
- [#53331](https://github.com/openai/codex/pull/53331) Finish remote exec cleanup when output streams remain open

#### 🐛 New Issues
- [#53407](https://github.com/openai/codex/issues/53407) Codex CLI 0.162.1 on macOS: GPT-6.1 Sol xhigh returns at-capacity on text-only turn; long tasks also lose response stream (Oct 10–12) `bug` `CLI` `connectivity` 💬2
- [#53435](https://github.com/openai/codex/issues/53435) Feature Request: Show Authenticated ChatGPT Account in Codex CLI `enhancement` `auth` `CLI` 💬2
- [#53524](https://github.com/openai/codex/issues/53524) Selected model is at capacity. Please try a different model. `bug` `windows-os` `context` `app` 💬2
- [#53287](https://github.com/openai/codex/issues/53287) ChatGPT/Codex macOS app crashes on launch – EXC_BREAKPOINT in ares_llist_replace_destructor `bug` `app` 💬2
- [#53538](https://github.com/openai/codex/issues/53538) [ChatGPT Web][Pro] Suspected mismatch between selected reasoning strength and effective response behavior `bug` `model-behavior` 💬1
- [#53535](https://github.com/openai/codex/issues/53535) Linux desktop: text follow-up stalls for 5 minutes until WebSocket send timeout and retry; Stop shows 0s `bug` `app` `connectivity` 💬1
- [#53532](https://github.com/openai/codex/issues/53532) Windows storage: Review old chats list cannot be scrolled, preventing review of 23 selected chats for permanent deletion `bug` `windows-os` `app` `session` 💬1
- [#53533](https://github.com/openai/codex/issues/53533) macOS app frequently stops responding to mouse and keyboard input while background tasks and UI updates continue `bug` `app` `performance` 💬1
- [#53531](https://github.com/openai/codex/issues/53531) Codex CLI 0.162.1 (macOS, Pro): ~50% of turns fail with "Selected model is at capacity" (server_overloaded) since Oct 8, on all models, with 99% weekly quota left `bug` `CLI` `connectivity` 💬1
- [#53530](https://github.com/openai/codex/issues/53530) Work UI should distinguish active background execution from assistant future-tense promises `enhancement` `model-behavior` `iOS` 💬1
- [#53528](https://github.com/openai/codex/issues/53528) Windows desktop: recurring response delays, HTTP 503 retries, and conversation-state errors `bug` `windows-os` `app` `connectivity` 💬1
- [#53525](https://github.com/openai/codex/issues/53525) [Windows Codex Desktop] Unexplained "$29k budget" reasoning summary disappears from live activity but persists in session records `bug` `model-behavior` `windows-os` `app` 💬1
- [#53523](https://github.com/openai/codex/issues/53523) [macOS Desktop] Pinning and unpinning ordinary Codex sessions does not take effect `bug` `app` `session` 💬1
- [#53537](https://github.com/openai/codex/issues/53537) fs sandbox helper's response is read with no timeout: a helper that never answers hangs codex exec forever `bug` `windows-os` `sandbox` `exec`
- [#53536](https://github.com/openai/codex/issues/53536) [Windows desktop] Existing-chat restoration waits on plugin reconciliation; Skill links query every local project root despite having cwd `bug` `windows-os` `app` `skills`
- [#53534](https://github.com/openai/codex/issues/53534) Codex app web tool reports URLs inaccessible while ChatGPT and direct HTTP can read them `bug` `windows-os` `tool-calls` `app`
- [#53529](https://github.com/openai/codex/issues/53529) Allow user-approved loopback-network access for MCP App UI `enhancement` `mcp` `app`
- [#53526](https://github.com/openai/codex/issues/53526) CLI: expose managed worktree removal to agents alongside create_worktree and list_worktrees `enhancement` `CLI` `session`
- [#53527](https://github.com/openai/codex/issues/53527) Project archive confirmation shows the newest project's name instead of the selected project `bug` `windows-os` `app` `session`

#### 🔒 Closed Issues
- [#52073](https://github.com/openai/codex/issues/52073) Linux: ChatGPT becomes the fallback browser without user selection, then hides “Open in external browser”
- [#53435](https://github.com/openai/codex/issues/53435) Feature Request: Show Authenticated ChatGPT Account in Codex CLI

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,304 · **Open issues:** 755 · **Last push:** 1h ago

On October 13, 2026, Gemini CLI saw the release of version v0.65.0-nightly.20261013.g51617c1bc, which includes a significant fix that allows the CLI to continue loading other extensions even if one fails the allowlist check, as implemented in pull request #29720 by @jesussamuel-byte. This enhancement improves the robustness of the CLI by ensuring smoother operations when handling extensions. There were no new issues reported in the last 24 hours, indicating a stable development period. Overall, the updates reflect ongoing efforts to enhance user experience and functionality within Gemini CLI.

#### 🚀 New Releases
- [v0.65.0-nightly.20261013.g51617c1bc](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261013.g51617c1bc) Release v0.65.0-nightly.20261013.g51617c1bc

#### ✅ Merged PRs
- [#29720](https://github.com/google-gemini/gemini-cli/pull/29720) fix(cli): keep loading other extensions when one fails the allowlist check

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,250 · **Open issues:** 2,184 · **Last push:** 2h ago

On October 13, 2026, GitHub Copilot CLI released version 1.0.97-2, which addressed issues related to discovering custom agents in deeply nested repository structures. The previous version, 1.0.97-1, included several fixes and minor changes, while version 1.0.97-0 introduced features such as agent-scoped declarative hooks for custom agents and improved rendering of inline images in supported terminals. New issues reported include #5127, highlighting a problem where short model names are not matched to the provider's models, leading to misleading error messages, and #5124, which notes that the `--agent <name>` selection is dropped shortly after startup. Overall, the day saw significant fixes and enhancements to improve user experience and functionality.

#### 🚀 New Releases
- [v1.0.97-2](https://github.com/github/copilot-cli/releases/tag/v1.0.97-2) 1.0.97-2
- [v1.0.97-1](https://github.com/github/copilot-cli/releases/tag/v1.0.97-1) 1.0.97-1
- [v1.0.97-0](https://github.com/github/copilot-cli/releases/tag/v1.0.97-0) 1.0.97-0
- [v1.0.96](https://github.com/github/copilot-cli/releases/tag/v1.0.96) 1.0.96

#### 🐛 New Issues
- [#5127](https://github.com/github/copilot-cli/issues/5127) SDK with BYOK providers: short model names aren't matched to the provider's models (custom agents fail; a short session model fails with a misleading "No GitHub OAuth token" error) `triage` 💬1
- [#5126](https://github.com/github/copilot-cli/issues/5126) BYOK: built-in agents (explore, task, research) never use their default models and silently run on the session model `triage`
- [#5125](https://github.com/github/copilot-cli/issues/5125) Add a way to track prompt execution time `triage`
- [#5124](https://github.com/github/copilot-cli/issues/5124) `--agent <name>` selection is dropped ~1s after startup (race with sign-in / MCP reload) `triage`
- [#5123](https://github.com/github/copilot-cli/issues/5123) Terminal safety denial turns session recovery into a dead end `triage`
- [#5122](https://github.com/github/copilot-cli/issues/5122) userPromptSubmitted: only the last plugin's additionalContext reaches the model (sessionStart was fixed in #3589) `triage`
- [#5121](https://github.com/github/copilot-cli/issues/5121) Ramesh.R On Mon, 12 Oct 2026, 13:57, Dunja Denic <notifications@github.com> wrote: v-dunjadenic left a comment (actions/runner-images#14895): Thanks, we'll take a look. — Reply to this email directly, view it on GitHub, or unsubscribe. You are receiving this because you are subscribed to this thread. `triage`
- [#5120](https://github.com/github/copilot-cli/issues/5120) Terminal left with mouse-tracking/focus-reporting enabled after CLI crashes `triage`
- [#5119](https://github.com/github/copilot-cli/issues/5119) Windows: uninstalling an installed plugin fails with Access is denied (os error 5) `triage`

#### 🔒 Closed Issues
- [#3052](https://github.com/github/copilot-cli/issues/3052) `--add-github-mcp-tool=create_pull_request` leaves the configured endpoint readonly
- [#4960](https://github.com/github/copilot-cli/issues/4960) Enterprise-managed custom model is listed in /model but cannot be selected
- [#5079](https://github.com/github/copilot-cli/issues/5079) Copilot sends `ping` on the 2026-07-28 protocol, and reuses rotated refresh tokens
- [#5101](https://github.com/github/copilot-cli/issues/5101) --add-github-mcp-tool issue_write causes no MCP tools to be available
- [#4834](https://github.com/github/copilot-cli/issues/4834) Support MCP 2026-07-28 Multi Round-Trip Requests (input_required)
- [#5030](https://github.com/github/copilot-cli/issues/5030) ACP mode: task tool cannot launch custom agents since 1.0.89 ("Unsupported native sessions host effect 'custom_agent_prompt'")
- [#5118](https://github.com/github/copilot-cli/issues/5118) Atlassian Rovo MCP Server connector fails auth probe with HTTP 400, blocking all Atlassian tool calls
- [#5082](https://github.com/github/copilot-cli/issues/5082) MCP OAuth: Dataverse MCP rejected by RFC 8414 issuer check ( login.windows.net vs login.microsoftonline.com ), with and without a static oauthClientId
- [#4226](https://github.com/github/copilot-cli/issues/4226) Spamming server errors during subagent execution
- [#4597](https://github.com/github/copilot-cli/issues/4597) pasting issue
- [#4255](https://github.com/github/copilot-cli/issues/4255) I hope all lovely fd can meet the date 🌞

### OpenCode (`anomalyco/opencode`)

**Stars:** 212,987 · **Open issues:** 4,125 · **Last push:** <1h ago

On October 13, 2026, OpenCode saw no new releases; however, several important updates were merged, including the promotion of the development version to production (#55005) and the configuration of Anthropic cache breakpoints to improve compatibility (#54945). Notable fixes included renewing the DeepSeek ZDR date on the Go landing page (#54987) and ensuring proper extraction of ripgrep on Windows without relying on PowerShell (#54981). A significant issue emerged where pasted images in the V2 Desktop version showed no thumbnail when the active model was text-only (#54991), attracting immediate attention from users. Overall, the day reflected a focus on enhancing compatibility and stability across the platform.

#### ✅ Merged PRs
- [#55005](https://github.com/anomalyco/opencode/pull/55005) chore(release): promote dev to production
- [#54987](https://github.com/anomalyco/opencode/pull/54987) fix(console): renew DeepSeek ZDR date on Go landing page through October 2026
- [#54945](https://github.com/anomalyco/opencode/pull/54945) feat(core): configure Anthropic cache breakpoints with compatibility.cacheFormat
- [#54983](https://github.com/anomalyco/opencode/pull/54983) fix(desktop): update emulated x64 installs to native ARM64
- [#54984](https://github.com/anomalyco/opencode/pull/54984) fix(tui): report x64 emulation on Windows ARM64
- [#54982](https://github.com/anomalyco/opencode/pull/54982) fix(ci): fail releases that bundle native code for the wrong CPU
- [#54981](https://github.com/anomalyco/opencode/pull/54981) fix(core): extract ripgrep on Windows without PowerShell
- [#54979](https://github.com/anomalyco/opencode/pull/54979) fix(desktop): stage the bundled CLI per architecture
- [#54920](https://github.com/anomalyco/opencode/pull/54920) fix(update): return 503 instead of 1101 when D1 is overloaded
- [#54971](https://github.com/anomalyco/opencode/pull/54971) feat(console): offer the Windows ARM64 desktop download

#### 🐛 New Issues
- [#54991](https://github.com/anomalyco/opencode/issues/54991) [V2 Desktop] Pasted images show no thumbnail when the active model is text-only 💬3
- [#54990](https://github.com/anomalyco/opencode/issues/54990) [V2 Desktop] Zoom level resets to 1 on every restart (Windows) `pending close` `triaging` 💬3
- [#55008](https://github.com/anomalyco/opencode/issues/55008) [FEATURE]: Model fallback/failover `pending close` `triaging` 💬1
- [#55006](https://github.com/anomalyco/opencode/issues/55006) [FEATURE]: Don't default agent scratch dir to a RAM-backed /tmp 💬1
- [#55001](https://github.com/anomalyco/opencode/issues/55001) V2 file logger marks shared objects as circular `reproduced` 💬1
- [#55002](https://github.com/anomalyco/opencode/issues/55002) V2 OTLP exporters send percent-encoded header values unchanged `reproduced` 💬1
- [#55000](https://github.com/anomalyco/opencode/issues/55000) desktop: session view crashes on todowrite tool call in non-English locale (TypeError: Iterable yielded undefined) `pending close` `triaging` 💬1
- [#54997](https://github.com/anomalyco/opencode/issues/54997) subagent: no way to force parent-model-only, cheap parent can escalate to paid model per call `pending close` `triaging` 💬1
- [#54996](https://github.com/anomalyco/opencode/issues/54996) zen/go: intermittent opaque 400 on chat/completions (body only is {"model":"<id>"}) for response_format json_schema on deepseek-v4.1-flash `pending close` `triaging` 💬1
- [#54993](https://github.com/anomalyco/opencode/issues/54993) Auto-compaction loops forever when the system prompt and tools exceed the usable context `pending close` `triaging` 💬1
- [#54995](https://github.com/anomalyco/opencode/issues/54995) 桌面端设置模型的时候需要增加一个输入类型的设置 我设置的模型支持图片输入，但是无法直接设置 需要改配置文件 💬1

#### 🔒 Closed Issues
- [#7602](https://github.com/anomalyco/opencode/issues/7602) [FEATURE]: Native Model Fallback / Failover Support
- [#14212](https://github.com/anomalyco/opencode/issues/14212) [FEATURE]: Support more DBMS' for OpenCode state storage
- [#42135](https://github.com/anomalyco/opencode/issues/42135) deepseek-v4-pro on opencode-go /responses fails on any multi-turn request (flash & official API both work)
- [#32165](https://github.com/anomalyco/opencode/issues/32165) [FEATURE]:User message quick-jump sidebar
- [#42091](https://github.com/anomalyco/opencode/issues/42091) BUG: `deepseek-v4-pro` on zen/go `/v1/messages` returns 400 `Empty input messages` for string content (flash works on same request)
- [#42250](https://github.com/anomalyco/opencode/issues/42250) Tool files that fail to load crash the whole session/registry instead of being skipped
- [#37225](https://github.com/anomalyco/opencode/issues/37225) tui: default_agent is ignored on startup in V2
- [#54673](https://github.com/anomalyco/opencode/issues/54673) All previously created workspaces became unavailable,
- [#54233](https://github.com/anomalyco/opencode/issues/54233) PEMBUATAN WEBSITE
- [#54990](https://github.com/anomalyco/opencode/issues/54990) [V2 Desktop] Zoom level resets to 1 on every restart (Windows)
- [#42258](https://github.com/anomalyco/opencode/issues/42258) Tool files that fail to load crash the whole session/registry instead of being skipped
- [#42259](https://github.com/anomalyco/opencode/issues/42259) Session run defects are silently dropped — UI shows no error, session just goes idle
- [#34331](https://github.com/anomalyco/opencode/issues/34331) [Bug] zen/go model compatibility in Anthropic /v1/messages for coding-agent tool use
- [#42242](https://github.com/anomalyco/opencode/issues/42242) [FEATURE]: Add opencode-sandbox to ecosystem documentation
- [#54675](https://github.com/anomalyco/opencode/issues/54675) Model exo-free has been deprecated.
- [#48201](https://github.com/anomalyco/opencode/issues/48201) v2 silently drops flat mcp entries when the config has no v1-only key
- [#54228](https://github.com/anomalyco/opencode/issues/54228) tui: Bun 1.4.2 segfault ~5s after idle startup on Linux x64 (v2.0.26)
- [#54230](https://github.com/anomalyco/opencode/issues/54230) server: session requests occasionally rejected with 400 (truncated hex escape)
- [#42325](https://github.com/anomalyco/opencode/issues/42325) [Bug] Stream silently returns empty when calling Zhipu via Anthropic-compatible provider (`/api/anthropic`)
- [#42299](https://github.com/anomalyco/opencode/issues/42299) serve: idle service burns 20-45% CPU in silent bursts from launch; memory creeps
- [#33394](https://github.com/anomalyco/opencode/issues/33394) prompt_async returns 204 after startup failure, leaving empty child sessions that appear frozen
- [#42271](https://github.com/anomalyco/opencode/issues/42271) service: idle background daemon holds ~700-800MB RSS
- [#42266](https://github.com/anomalyco/opencode/issues/42266) desktop: bundled sidecar (next-17403) crashes with 'Path is not absolute: global' — all API 500s, failed to load sessions
- [#42251](https://github.com/anomalyco/opencode/issues/42251) Session run defects are silently dropped — UI shows no error, session just goes idle
- [#42237](https://github.com/anomalyco/opencode/issues/42237) snapshot: corrupt index causes repeated capture failures and unresponsive service
- [#42124](https://github.com/anomalyco/opencode/issues/42124) [FEATURE]: Show timestamp on permission prompts (Ask/Approve dialogs)
- [#42335](https://github.com/anomalyco/opencode/issues/42335) Caret jumps to end of prompt after inserting an @mention on the session page
- [#42287](https://github.com/anomalyco/opencode/issues/42287) Session title silently empty when the title model is a reasoning model (returns only a `<think>` block)
- [#42282](https://github.com/anomalyco/opencode/issues/42282) Failed compaction silently drops pre-tail history from the model context
- [#42280](https://github.com/anomalyco/opencode/issues/42280) V2 external plugins silently fail to register agents/tools after startup
- [#42265](https://github.com/anomalyco/opencode/issues/42265) Web/new layout: direct /:dir/session creates a draft but does not register the directory as an opened project
- [#42220](https://github.com/anomalyco/opencode/issues/42220) [FEATURE]: Sync zh-cn agents doc page with the latest English version

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,456 · **Open issues:** 1,835 · **Last push:** <1h ago

On October 13, 2026, Qwen Code saw the release of version v0.25.1-nightly.20261012.18f80f5666, which includes important fixes for connector and broker robustness and introduces a feature for managing mailbox communications over session messages. Significant merged features include the addition of read-only Excel artifact previews and improvements to member board tools that enhance the session_command channel functionality. Among new issues, the most notable is #14011, which proposes a feature-type benchmark tasks harness to exercise and demonstrate Qwen Code's capabilities. Overall, the day was marked by critical enhancements in performance and user experience.

#### 🚀 New Releases
- [v0.25.1-nightly.20261012.18f80f5666](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261012.18f80f5666) Release v0.25.1-nightly.20261012.18f80f5666

#### ✅ Merged PRs
- [#14008](https://github.com/QwenLM/qwen-code/pull/14008) fix(core): clean the folded cause before getErrorMessage caps the retained subagent error text
- [#13664](https://github.com/QwenLM/qwen-code/pull/13664) feat(web-shell): add read-only Excel artifact previews
- [#13928](https://github.com/QwenLM/qwen-code/pull/13928) feat(managed-agent): member board tools ride the session_command channel end to end (H4e-b3b)

#### 🐛 New Issues
- [#14011](https://github.com/QwenLM/qwen-code/issues/14011) feat: harness SWE — feature-type benchmark tasks that exercise and demo qwen code's own features `priority/P2` `type/feature-request` `category/development` `scope/testing` 💬5
- [#14004](https://github.com/QwenLM/qwen-code/issues/14004) Separate the agentic harness from the LLM subscription to remove the conflict of interest `priority/P3` `type/feature-request` `category/ui` `scope/token-management` 💬4
- [#13951](https://github.com/QwenLM/qwen-code/issues/13951) CI: Integration Tests (no-AK, No Sandbox) fails at Checkout with "fatal: pack has 1 unresolved delta" `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬4
- [#13987](https://github.com/QwenLM/qwen-code/issues/13987) docs(tools): add You.com free MCP to the web search MCP services `priority/P3` `type/documentation` `category/integration` `scope/mcp` 💬4
- [#13967](https://github.com/QwenLM/qwen-code/issues/13967) [i18n] Localize VS Code IDE Companion UI using the CLI locale packs `priority/P3` `type/feature-request` `category/ui` `scope/vscode` 💬4
- [#13937](https://github.com/QwenLM/qwen-code/issues/13937) Managed agent: in-turn never-started proof gate skips dispatches whose reserve left no publication row (#13801 follow-up) `priority/P2` `type/bug` `category/tools` `scope/shell` 💬3
- [#14009](https://github.com/QwenLM/qwen-code/issues/14009) fix(cli): --disable-mcp-server exclusion is lost on the first settings.json recompute `priority/P2` `type/bug` `category/cli` `scope/mcp` 💬3
- [#13998](https://github.com/QwenLM/qwen-code/issues/13998) bug(web-shell): turn collapse hides the turn's final answer when a background task notification lands right after it `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#13992](https://github.com/QwenLM/qwen-code/issues/13992) fix(runtime-broker): preserve exact release proof after retention `priority/P2` `category/core` `type/enhancement` `need-discussion` 💬3
- [#13984](https://github.com/QwenLM/qwen-code/issues/13984) fix(managed-agent): a Monitor resume that finds its record already settled leaves a loop that fails the Session close `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#13943](https://github.com/QwenLM/qwen-code/issues/13943) .lsp.json saved with a UTF-8 BOM is silently ignored, so no LSP servers start `priority/P2` `type/bug` `category/configuration` `scope/ide` 💬3
- [#13966](https://github.com/QwenLM/qwen-code/issues/13966) Chrome extension retries rejected daemon WebSocket upgrade indefinitely (no backoff, floods qwen serve journal) `priority/P3` `type/bug` `category/integration` `scope/logging` 💬3
- [#13965](https://github.com/QwenLM/qwen-code/issues/13965) bug(web-shell): Settings lists discontinued built-in OAuth model `priority/P2` `type/bug` `category/ui` `scope/model-switching` 💬3
- [#13953](https://github.com/QwenLM/qwen-code/issues/13953) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > reports an aborted live turn as cancelled after a Java-style c… (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬3
- [#13995](https://github.com/QwenLM/qwen-code/issues/13995) Main CI failed: E2E Tests — cli/qwen-serve-channel-workers.test.ts > … > controls a real mock-plugin worker after a channel-less boot (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13988](https://github.com/QwenLM/qwen-code/issues/13988) Main CI failed: Qwen Code CI — src/serve/hosted-never-started-reconcile.test.ts > … > admits a shell when the production kind gate is restor… (+1 more) `type/bug` `status/ready-for-agent` `autofix/approved` 💬2
- [#13989](https://github.com/QwenLM/qwen-code/issues/13989) Main CI failed: SDK Java on 96076f3a0673 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13982](https://github.com/QwenLM/qwen-code/issues/13982) Main CI failed: Qwen Code CI — build-artifact.test.ts > … > keeps the transcript entry a fraction of the interactive entry `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#13963](https://github.com/QwenLM/qwen-code/issues/13963) Main CI failed: Qwen Code CI — src/serve/hosted-never-started-reconcile.test.ts > … > refuses a shell admit when the production kind gate is… (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#14015](https://github.com/QwenLM/qwen-code/issues/14015) Composer ↑/↓ scrolls the transcript instead of cycling input history (Virtualized History) 💬1
- [#14010](https://github.com/QwenLM/qwen-code/issues/14010) Main CI failed: SDK Java — ToolPublicationStoreTest.streamsLargeOutputAndReadsItsTailAfterStoreReplacement(Path) `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#14007](https://github.com/QwenLM/qwen-code/issues/14007) Main CI failed: SDK Java on 06a837d7688a `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#14006](https://github.com/QwenLM/qwen-code/issues/14006) Main CI failed: SDK Java on 6ececc39bc9f `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#14005](https://github.com/QwenLM/qwen-code/issues/14005) Main CI failed: Qwen Code CI — src/serve/hosted-never-started-reconcile.test.ts > … > admits a shell when the production kind gate is restor… `type/bug` `status/ready-for-agent` `autofix/approved` 💬1

#### 🔒 Closed Issues
- [#13680](https://github.com/QwenLM/qwen-code/issues/13680) bug(desktop): vendored x64-linux ripgrep is rewritten post-link (RUNPATH $ORIGIN, phdrs moved) and SIGSEGVs on every startup probe
- [#13717](https://github.com/QwenLM/qwen-code/issues/13717) core: clean the folded `cause` before getErrorMessage caps the retained subagent error text
- [#13925](https://github.com/QwenLM/qwen-code/issues/13925) Release notes duplicates PRs released in previous releases
- [#13943](https://github.com/QwenLM/qwen-code/issues/13943) .lsp.json saved with a UTF-8 BOM is silently ignored, so no LSP servers start
- [#13242](https://github.com/QwenLM/qwen-code/issues/13242) Move the managed-agent seal/finish stream rehash off the request thread
- [#13953](https://github.com/QwenLM/qwen-code/issues/13953) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > reports an aborted live turn as cancelled after a Java-style c… (+1 more)
- [#13988](https://github.com/QwenLM/qwen-code/issues/13988) Main CI failed: Qwen Code CI — src/serve/hosted-never-started-reconcile.test.ts > … > admits a shell when the production kind gate is restor… (+1 more)
- [#13989](https://github.com/QwenLM/qwen-code/issues/13989) Main CI failed: SDK Java on 96076f3a0673
- [#13907](https://github.com/QwenLM/qwen-code/issues/13907) Main CI failed: SDK Java — HttpRuntimeTransportTest.boundsToolResponsesAtOneMiB
- [#13982](https://github.com/QwenLM/qwen-code/issues/13982) Main CI failed: Qwen Code CI — build-artifact.test.ts > … > keeps the transcript entry a fraction of the interactive entry
- [#10138](https://github.com/QwenLM/qwen-code/issues/10138) SDK transports drop an explicitly empty coreTools list, so coreTools: [] cannot reach the tool-free semantic
- [#13963](https://github.com/QwenLM/qwen-code/issues/13963) Main CI failed: Qwen Code CI — src/serve/hosted-never-started-reconcile.test.ts > … > refuses a shell admit when the production kind gate is… (+1 more)

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 391,816 · **Open issues:** 9,615 · **Last push:** <1h ago

On October 13, 2026, OpenClaw released version 2026.10.5-beta.2, which notably improves the `openclaw update` process by addressing stale handoff leases and legacy recovery records, while ensuring that the service remains operational during updates. The prior version, 2026.10.2, also saw significant enhancements, including successful in-place updates and improved handling on Windows systems. Several critical fixes were merged, particularly related to maintaining Gateway responsiveness during reply-tagged streams and preventing status timeouts on large vaults. However, the day also brought attention to a new issue (#170331) concerning the beta.2 update candidate config read failing with exit code 1, which may affect systemd unit stability.

#### 🚀 New Releases
- [v2026.10.5-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.2) openclaw 2026.10.5-beta.2
- [v2026.10.2](https://github.com/openclaw/openclaw/releases/tag/v2026.10.2) openclaw 2026.10.2

#### ✅ Merged PRs
- [#170561](https://github.com/openclaw/openclaw/pull/170561) test(ui): reduce native fixture startup cost
- [#166782](https://github.com/openclaw/openclaw/pull/166782) fix: keep the Gateway responsive during reply-tagged streams
- [#170153](https://github.com/openclaw/openclaw/pull/170153) feat(llama-cpp): allow non-interactive embedding-only setup
- [#170557](https://github.com/openclaw/openclaw/pull/170557) fix(sqlite): scope admission service helpers to tests
- [#170553](https://github.com/openclaw/openclaw/pull/170553) fix(memory-wiki): prevent status timeouts on large vaults
- [#170543](https://github.com/openclaw/openclaw/pull/170543) fix(ci): reduce current package boundary runner capacity
- [#168107](https://github.com/openclaw/openclaw/pull/168107) fix(googlechat): deliver replies after truncated 404 responses
- [#170555](https://github.com/openclaw/openclaw/pull/170555) fix(gateway): join lifecycle publication during shutdown
- [#170521](https://github.com/openclaw/openclaw/pull/170521) perf(build): reuse artifacts across sealed deployment candidates
- [#170225](https://github.com/openclaw/openclaw/pull/170225) perf: reuse compiled matchers for support redaction
- [#169725](https://github.com/openclaw/openclaw/pull/169725) refactor(ui): port portable Lit consumers to Solid
- [#170470](https://github.com/openclaw/openclaw/pull/170470) perf(sqlite): make profile admission authority transferable
- [#169848](https://github.com/openclaw/openclaw/pull/169848) fix: lightContext is ignored by subagents on CLI backends
- [#170548](https://github.com/openclaw/openclaw/pull/170548) fix(cron): keep manual runs from losing tool access
- [#170552](https://github.com/openclaw/openclaw/pull/170552) fix(control-ui): remove unused lazy dropdown directive
- [#170497](https://github.com/openclaw/openclaw/pull/170497) build(ui): restore original startup performance budgets
- [#170533](https://github.com/openclaw/openclaw/pull/170533) refactor(ui): consolidate chat and Solid presentation paths
- [#170551](https://github.com/openclaw/openclaw/pull/170551) chore(ui): refresh control ui locales
- [#170542](https://github.com/openclaw/openclaw/pull/170542) fix: avoid Stop errors when a turn completes
- [#170463](https://github.com/openclaw/openclaw/pull/170463) perf(cron): reuse run state and skip redundant persistence
- [#170341](https://github.com/openclaw/openclaw/pull/170341) perf(skills): coalesce passive refresh off the Gateway thread
- [#170520](https://github.com/openclaw/openclaw/pull/170520) perf(sqlite): transfer broker request custody
- [#170535](https://github.com/openclaw/openclaw/pull/170535) test(ui): align backscroll and update report expectations
- [#170230](https://github.com/openclaw/openclaw/pull/170230) perf(config): keep deferred plugin migrations out of normal runs
- [#170532](https://github.com/openclaw/openclaw/pull/170532) test(core,plugins,ui): remove low-value tests (batch d076)
- [#170399](https://github.com/openclaw/openclaw/pull/170399) perf: reuse background projection and usage reads
- [#170452](https://github.com/openclaw/openclaw/pull/170452) test: reuse shared workers in CLI preparation fixtures
- [#168117](https://github.com/openclaw/openclaw/pull/168117) fix(sessions): ignore punctuation-only words in transcript search queries
- [#170517](https://github.com/openclaw/openclaw/pull/170517) perf(gateway): reduce retained session row and recap state
- [#169707](https://github.com/openclaw/openclaw/pull/169707) perf(control-ui): reduce cold-load chat rendering
- [#165771](https://github.com/openclaw/openclaw/pull/165771) fix(media): keep Windows-1252 accents in channel attachments declared as text
- [#170511](https://github.com/openclaw/openclaw/pull/170511) refactor(extensions): simplify plugin paths and lifecycle bookkeeping
- [#170523](https://github.com/openclaw/openclaw/pull/170523) fix: preserve unsealed database snapshots after successful updates
- [#170461](https://github.com/openclaw/openclaw/pull/170461) fix: accept long provider response IDs in cloud worker turns
- [#167260](https://github.com/openclaw/openclaw/pull/167260) fix(ui): board widgets ignore the 10 MiB HTML size cap
- [#170516](https://github.com/openclaw/openclaw/pull/170516) perf(agents): stabilize cross-run prompt prefixes and replay
- [#141752](https://github.com/openclaw/openclaw/pull/141752) fix(googlechat): render Markdown in conversational replies
- [#170441](https://github.com/openclaw/openclaw/pull/170441) fix(node): restore retained service runtimes safely
- [#170498](https://github.com/openclaw/openclaw/pull/170498) fix(cron): retain app access when owners replace allowed tools
- [#170499](https://github.com/openclaw/openclaw/pull/170499) fix(ci): repair worker entry roots and retired exports
- [#170491](https://github.com/openclaw/openclaw/pull/170491) fix(ui): Inbox update action looks ready before its freshness check starts
- [#170504](https://github.com/openclaw/openclaw/pull/170504) refactor(searxng): remove obsolete URL fixture branch
- [#170368](https://github.com/openclaw/openclaw/pull/170368) test(acp,agents,config,gateway,ui,whatsapp): remove low-value tests (batch d073)
- [#170364](https://github.com/openclaw/openclaw/pull/170364) chore(database): correct worker-only and test-only inventory
- [#170350](https://github.com/openclaw/openclaw/pull/170350) chore(ui): refresh control ui locales
- [#170318](https://github.com/openclaw/openclaw/pull/170318) improve(boards): avoid duplicate target reads in cross-store writes
- [#170283](https://github.com/openclaw/openclaw/pull/170283) perf(deploy): reuse the package store and fetch only frozen source
- [#170290](https://github.com/openclaw/openclaw/pull/170290) test(macos): wait for MLX transport ownership before shutdown
- [#170285](https://github.com/openclaw/openclaw/pull/170285) test(gateway): bound concurrent session durability fixture
- [#170288](https://github.com/openclaw/openclaw/pull/170288) test(gateway): prepare profile catalog for cron run fixtures
- [#170052](https://github.com/openclaw/openclaw/pull/170052) perf(control-ui): keep cached transcripts steady on reload
- [#170250](https://github.com/openclaw/openclaw/pull/170250) perf(sessions): avoid rewriting activity after accepting chat input
- [#170042](https://github.com/openclaw/openclaw/pull/170042) fix(auth): avoid repeated database admission during credential reads
- [#156605](https://github.com/openclaw/openclaw/pull/156605) fix(gateway): coalesce pending provider metadata requests
- [#170514](https://github.com/openclaw/openclaw/pull/170514) perf(gateway): cache compiled entry startup in source checkouts
- [#170505](https://github.com/openclaw/openclaw/pull/170505) fix(gateway): preserve stall capture with quoted script names
- [#170510](https://github.com/openclaw/openclaw/pull/170510) test(dashboard): expect the structured readiness error
- [#170508](https://github.com/openclaw/openclaw/pull/170508) perf(github): conditionally revalidate shared hover previews
- [#170512](https://github.com/openclaw/openclaw/pull/170512) fix(gateway): report sidebar row mode accurately
- [#170507](https://github.com/openclaw/openclaw/pull/170507) fix(mentions): recover unavailable profiles and back off inbox retries
- [#170506](https://github.com/openclaw/openclaw/pull/170506) perf(agents): summarize legacy subagent authority warnings
- [#170202](https://github.com/openclaw/openclaw/pull/170202) perf(config): avoid state bootstrap for previews and no-op edits
- [#170493](https://github.com/openclaw/openclaw/pull/170493) fix: prevent stalled transcript workers from blocking Gateway shutdown
- [#170154](https://github.com/openclaw/openclaw/pull/170154) fix(cli): reject unsupported image resolutions before dispatch
- [#170389](https://github.com/openclaw/openclaw/pull/170389) perf(gateway): skip unobserved idle database refreshes
- [#155801](https://github.com/openclaw/openclaw/pull/155801) fix(codex): use monotonic clock for attempt execution deadline
- [#170451](https://github.com/openclaw/openclaw/pull/170451) refactor: retain GitHub publication authority without main-thread SQL
- [#170490](https://github.com/openclaw/openclaw/pull/170490) fix(update): success headline hides post-swap steps that did not run
- [#168731](https://github.com/openclaw/openclaw/pull/168731) fix(codex): keep native inference WS handshake deadline monotonic across wall-clock skew
- [#170494](https://github.com/openclaw/openclaw/pull/170494) test(agents,channels,cli,ui): remove low-value tests (batch d075)
- [#170455](https://github.com/openclaw/openclaw/pull/170455) fix(build): keep concurrent UI publication from failing postbuild
- [#167871](https://github.com/openclaw/openclaw/pull/167871) fix: meeting commands ignore explicit empty mode and transport values
- [#170481](https://github.com/openclaw/openclaw/pull/170481) improve: load older chat history in larger pages
- [#170299](https://github.com/openclaw/openclaw/pull/170299) fix(gateway): explain archived sessions in OpenAI-compatible requests
- [#168127](https://github.com/openclaw/openclaw/pull/168127) fix(gateway): accept non-canonical agent id spelling in tools.invoke
- [#170492](https://github.com/openclaw/openclaw/pull/170492) fix(backup): restore snapshots from older schemas
- [#170479](https://github.com/openclaw/openclaw/pull/170479) refactor(outbound): remove unused alias test fixtures
- [#170433](https://github.com/openclaw/openclaw/pull/170433) test: publish runtime config at fixture owners and repair remaining #169714 fallout
- [#170489](https://github.com/openclaw/openclaw/pull/170489) chore(ui): refresh control ui locales
- [#161111](https://github.com/openclaw/openclaw/pull/161111) fix(ui): keep keyboard focus after removing a plugin
- [#168329](https://github.com/openclaw/openclaw/pull/168329) fix(ui): Settings never shows why a config value is invalid (#127329)
- [#170439](https://github.com/openclaw/openclaw/pull/170439) fix: release retained resources after completed and failed operations
- [#162706](https://github.com/openclaw/openclaw/pull/162706) fix(backup): keep Git backups working after opening the repository in Finder
- [#170464](https://github.com/openclaw/openclaw/pull/170464) fix(chat): restore first turns in a new session store
- [#169431](https://github.com/openclaw/openclaw/pull/169431) fix(codex): recover follow-up requests after failed thread preparation
- [#170473](https://github.com/openclaw/openclaw/pull/170473) fix(tts): accept Fish Audio Drama 3 preview
- [#170469](https://github.com/openclaw/openclaw/pull/170469) fix(a2a): prevent retried messages from stranding tasks
- [#170477](https://github.com/openclaw/openclaw/pull/170477) test(ui): expect the offline composer band to stay absent
- [#170460](https://github.com/openclaw/openclaw/pull/170460) fix(ci): catch release blockers early and retain slow shard splits
- [#170475](https://github.com/openclaw/openclaw/pull/170475) chore(i18n): refresh native locales
- [#169485](https://github.com/openclaw/openclaw/pull/169485) fix: preserve exact filesystem identities through recovery
- [#170456](https://github.com/openclaw/openclaw/pull/170456) fix(ui): explain unavailable computers in session selectors
- [#167066](https://github.com/openclaw/openclaw/pull/167066) fix(talk): clipboard-padded Talk session ids miss live sessions
- [#170462](https://github.com/openclaw/openclaw/pull/170462) fix(daemon): exclude maintenance commands from Gateway discovery
- [#158108](https://github.com/openclaw/openclaw/pull/158108) fix(secrets): isolate managed local provider auth
- [#170397](https://github.com/openclaw/openclaw/pull/170397) fix(ui): stop wait timers showing thousands of days after parent updates
- [#168612](https://github.com/openclaw/openclaw/pull/168612) refactor(ui): render the app shell and retained routes with Solid
- [#168115](https://github.com/openclaw/openclaw/pull/168115) fix(web-fetch): decode documents that declare UTF-16 without a BOM as UTF-8
- [#169628](https://github.com/openclaw/openclaw/pull/169628) feat: automatically choose inference for first-run setup
- [#170266](https://github.com/openclaw/openclaw/pull/170266) refactor(database): prepare shared-state engine admission (PR2a)
- [#170442](https://github.com/openclaw/openclaw/pull/170442) test(channels): add reproducible channel-turn benchmark
- [#170141](https://github.com/openclaw/openclaw/pull/170141) feat: use model fallbacks after context overflow recovery
- [#170432](https://github.com/openclaw/openclaw/pull/170432) refactor(duckduckgo): consolidate request identity coverage
- [#170448](https://github.com/openclaw/openclaw/pull/170448) test: reuse shared workers in voice authority fixtures
- [#170361](https://github.com/openclaw/openclaw/pull/170361) fix(macos): dashboard gets stuck on raw Gateway error text with no way to reload
- [#170400](https://github.com/openclaw/openclaw/pull/170400) perf(subagents): reuse committed session facts during spawn
- [#170377](https://github.com/openclaw/openclaw/pull/170377) perf(sessions): avoid cloning rebuilt actor projections
- [#170426](https://github.com/openclaw/openclaw/pull/170426) fix(worker): finalize settled tool turns before completion
- [#170447](https://github.com/openclaw/openclaw/pull/170447) test(agents): prepare config in lane and finalization fixtures
- [#170340](https://github.com/openclaw/openclaw/pull/170340) perf(sessions): reuse activity summary transcript metadata
- [#167423](https://github.com/openclaw/openclaw/pull/167423) fix(mcp): legacy SSE tool calls fail forever after a server restart reconnects onto an uninitialized session
- [#170412](https://github.com/openclaw/openclaw/pull/170412) perf(gateway): avoid repeated speech discovery during dashboard reloads
- [#170352](https://github.com/openclaw/openclaw/pull/170352) fix(ui): drop duplicate offline outbox band from composer
- [#170309](https://github.com/openclaw/openclaw/pull/170309) fix(state): isolate deletion claims from unrelated journal changes
- [#168582](https://github.com/openclaw/openclaw/pull/168582) fix: correct JSONC path line numbers in files with a BOM
- [#169760](https://github.com/openclaw/openclaw/pull/169760) fix(slack): keep compact progress mentions escaped
- [#170262](https://github.com/openclaw/openclaw/pull/170262) perf(agents): reuse prepared initial session context
- [#170440](https://github.com/openclaw/openclaw/pull/170440) docs(sqlite): design transferable writer admission authority
- [#170402](https://github.com/openclaw/openclaw/pull/170402) fix(pr): retire absent auto-merge after a head change
- [#168812](https://github.com/openclaw/openclaw/pull/168812) fix: dashboard JSON failures omit the shared error description
- [#170436](https://github.com/openclaw/openclaw/pull/170436) test(ui): follow current cloud startup recovery guidance
- [#170435](https://github.com/openclaw/openclaw/pull/170435) test(gateway): preserve primary database recreation failures
- [#170429](https://github.com/openclaw/openclaw/pull/170429) fix(update): report LaunchAgent inspection failures after updates
- [#170411](https://github.com/openclaw/openclaw/pull/170411) test(agents,plugins,ui): remove low-value tests (batch d074)
- [#170407](https://github.com/openclaw/openclaw/pull/170407) perf(memory): move published index reads out of writer FIFO
- [#170423](https://github.com/openclaw/openclaw/pull/170423) fix(sqlite): prevent append rollbacks during worker admission
- [#170354](https://github.com/openclaw/openclaw/pull/170354) fix: gateway restart fails from verified external macOS terminals
- [#170427](https://github.com/openclaw/openclaw/pull/170427) test(sessions): drain shared state before offline registry recovery
- [#170365](https://github.com/openclaw/openclaw/pull/170365) fix(update): preserve refusal when a configured channel is disabled
- [#170403](https://github.com/openclaw/openclaw/pull/170403) fix(node): allow lifecycle commands with custom state directories
- [#170390](https://github.com/openclaw/openclaw/pull/170390) fix(ui): clarify cross-session messaging controls
- [#170414](https://github.com/openclaw/openclaw/pull/170414) chore(ui): refresh control ui locales
- [#170379](https://github.com/openclaw/openclaw/pull/170379) improve(state): reduce cold agent database SQL
- [#168804](https://github.com/openclaw/openclaw/pull/168804) fix(ci): clear completed fork checks when associations name stack children
- [#170376](https://github.com/openclaw/openclaw/pull/170376) perf(gateway): acknowledge idle chat after one durable input commit
- [#170128](https://github.com/openclaw/openclaw/pull/170128) refactor(ui): retire unused Web Awesome style tokens
- [#170330](https://github.com/openclaw/openclaw/pull/170330) perf(auth): retain personal Codex credential authority in the owner
- [#170278](https://github.com/openclaw/openclaw/pull/170278) fix(openai): accept URL images from compatible providers
- [#170384](https://github.com/openclaw/openclaw/pull/170384) fix(sessions): retain queued turns for restart recovery
- [#170392](https://github.com/openclaw/openclaw/pull/170392) fix(update): warn when plugin migrations remain pending
- [#170383](https://github.com/openclaw/openclaw/pull/170383) refactor(feishu): remove unselected policy fixtures
- [#167736](https://github.com/openclaw/openclaw/pull/167736) fix(cli-runner): credit final WebChat internal-sink sends as the source reply
- [#170391](https://github.com/openclaw/openclaw/pull/170391) fix(cli): exit after local OpenAI agent replies
- [#170308](https://github.com/openclaw/openclaw/pull/170308) fix(sessions): preserve first writes through retained cold owners
- [#170386](https://github.com/openclaw/openclaw/pull/170386) fix(talk): release voice request session authorization
- [#170345](https://github.com/openclaw/openclaw/pull/170345) perf(gateway): avoid redundant Control UI boot work
- [#170382](https://github.com/openclaw/openclaw/pull/170382) improve(ui): make colored sessions easier to scan
- [#170385](https://github.com/openclaw/openclaw/pull/170385) fix(update): explain package journal identity mismatches
- [#170348](https://github.com/openclaw/openclaw/pull/170348) fix: unblock database admission before worker startup
- [#170325](https://github.com/openclaw/openclaw/pull/170325) fix(ui): show turn time without duplicate subagent status
- [#170173](https://github.com/openclaw/openclaw/pull/170173) fix(memory): honor private-network denial in Gemini and LM Studio embeddings
- [#170306](https://github.com/openclaw/openclaw/pull/170306) fix(plugins): stop stale Codex runtimes breaking turns after updates
- [#170073](https://github.com/openclaw/openclaw/pull/170073) fix(cron): avoid repair alerts before fresh-run verification
- [#167474](https://github.com/openclaw/openclaw/pull/167474) feat(ollama): show cloud balance in status usage
- [#168125](https://github.com/openclaw/openclaw/pull/168125) fix(agents): reject overlapping oldText matches in edit uniqueness checks
- [#170358](https://github.com/openclaw/openclaw/pull/170358) perf(control-ui): remove extra cold-load placeholder stages
- [#170300](https://github.com/openclaw/openclaw/pull/170300) fix(sqlite): preserve pending cold schema preparation
- [#169141](https://github.com/openclaw/openclaw/pull/169141) fix(agents): continue retries when status callbacks reject
- [#169908](https://github.com/openclaw/openclaw/pull/169908) fix(crabbox): measure warm-image cleanup deadlines on the monotonic clock
- [#170138](https://github.com/openclaw/openclaw/pull/170138) fix: recover Workboard after SQLite worker failures
- [#170356](https://github.com/openclaw/openclaw/pull/170356) improve: reduce redundant session lifecycle reads
- [#170033](https://github.com/openclaw/openclaw/pull/170033) test(control-ui): add a Team-scale cold-load benchmark
- [#170221](https://github.com/openclaw/openclaw/pull/170221) chore(i18n): refresh native locales
- [#170218](https://github.com/openclaw/openclaw/pull/170218) fix(doctor): stop chat updates rolling back during cleanup (2026.10.3)
- [#170215](https://github.com/openclaw/openclaw/pull/170215) chore(ui): refresh control ui locales
- [#170181](https://github.com/openclaw/openclaw/pull/170181) fix(test): finish cold catalog preparation before benchmarking
- [#170188](https://github.com/openclaw/openclaw/pull/170188) chore(ui): refresh control ui locales
- [#170168](https://github.com/openclaw/openclaw/pull/170168) test(usage): settle refresh outside the fake timer tick
- [#170132](https://github.com/openclaw/openclaw/pull/170132) fix: allow keyless Gateway selection for worker-local inference

#### 🐛 New Issues
- [#170331](https://github.com/openclaw/openclaw/issues/170331) [Bug]: beta.2 update candidate config read exits 1 and leaves the systemd unit unchanged `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬8
- [#170332](https://github.com/openclaw/openclaw/issues/170332) [Bug]: beta update continues after the live state database changes during original-state capture `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬7
- [#170001](https://github.com/openclaw/openclaw/issues/170001) [Bug]: Graceful gateway restart mid-turn wedges the session lane — channel messages are consumed but never start turns until an inter-session followup nudge `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬5
- [#170212](https://github.com/openclaw/openclaw/issues/170212) [Bug]: Failed Telegram /update followed by gateway repair leaves systemd user service failed (SIGKILL), Telegram offline until manual start `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬5
- [#169953](https://github.com/openclaw/openclaw/issues/169953) [Bug]: npm update 2026.9.4 → 2026.10.2 always fails: candidate gateway hangs at config.auth until the canary deadline; repair passes but discards required meta/wizard config changes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬5
- [#169930](https://github.com/openclaw/openclaw/issues/169930) [Bug]: Telegram partial streaming leaves a cut-off preview before the final answer as a separate message `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬5
- [#169662](https://github.com/openclaw/openclaw/issues/169662) [Bug]: macOS managed Gateway update rejects protected Bun --no-install command in installedServiceCLI `bug` `no-stale` `bug:behavior` `clawsweeper:fix-shape-clear` 💬4
- [#170031](https://github.com/openclaw/openclaw/issues/170031) [2026.9.8/macOS] Publication journal binding refusal blocks update; supported diagnostics do not identify failed binding `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬4
- [#170334](https://github.com/openclaw/openclaw/issues/170334) [Bug]: acpx and codex data/settings upgrades still pending after a successful 2026.10.5-beta.2 update `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#170333](https://github.com/openclaw/openclaw/issues/170333) [Bug]: update validation lint defers agent checks with 0ms left and still passes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#169937](https://github.com/openclaw/openclaw/issues/169937) Update failure: gateway-recovery-verification (2026.9.9) `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬4
- [#169850](https://github.com/openclaw/openclaw/issues/169850) [Bug]: Personal-account quota rechecks abort replies with credential codec error `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#170182](https://github.com/openclaw/openclaw/issues/170182) [Bug]: 2026.9.8 -> 2026.10.2 update fails at updater-runtime-retention: "Plugin copy source overlaps update state" (plugins installed under state dir) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#170335](https://github.com/openclaw/openclaw/issues/170335) [Bug]: successful update removes database snapshots it said must be preserved `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#169829](https://github.com/openclaw/openclaw/issues/169829) Gateway self-restarts when the system wall clock steps backwards (state-ownership heartbeat uses wall clock) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#170488](https://github.com/openclaw/openclaw/issues/170488) [Bug]: webchat with thinking-enabled local model does not stream responses `bug` `regression` `P2` `impact:ux-friction` 💬3
- [#170147](https://github.com/openclaw/openclaw/issues/170147) Agent posts an extra reply in the source chat after a tool already delivered the visible output `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬3
- [#169780](https://github.com/openclaw/openclaw/issues/169780) [Bug]: Existing chat turns fail with SQLite worker commit receipt transport limit `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#169929](https://github.com/openclaw/openclaw/issues/169929) [Bug]: SVG document sent on Telegram fails the whole turn on every model `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#170522](https://github.com/openclaw/openclaw/issues/170522) [Bug]: Malformed tool call is not continued when an earlier tool in the same turn failed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#170424](https://github.com/openclaw/openclaw/issues/170424) [Feature]: Android local mode: chat with a model provider without a Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#169777](https://github.com/openclaw/openclaw/issues/169777) [Bug]: Gateway shutdown hangs ~325 s in restart.close.transcript-workers with no active work (reconcile pool join is unbounded) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#170443](https://github.com/openclaw/openclaw/issues/170443) [Bug]: macOS prepared package journal blocks update after device-ID drift `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#170204](https://github.com/openclaw/openclaw/issues/170204) Per-agent SQLite store is unbounded and fully scanned at startup — multi-GB stores cause ~70 min startup, migration timeouts, and shutdown hangs on large installs `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#170409](https://github.com/openclaw/openclaw/issues/170409) [Bug]: Plugin Control UI panels (Workboard) unavailable when assets are hardlinked: readPluginControlUiAssets ignores the hardlink policy `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#170014](https://github.com/openclaw/openclaw/issues/170014) [Bug]: Cron auto-repair races retries and escalates before recovery is verified `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#169981](https://github.com/openclaw/openclaw/issues/169981) Workboard keeps failing with the same SQLite worker error until a gateway restart once its worker slot fails `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#170111](https://github.com/openclaw/openclaw/issues/170111) Update failure: gateway-recovery-verification (2026.9.9) `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬2
- [#169997](https://github.com/openclaw/openclaw/issues/169997) Update failure: validating (2026.9.6) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#170076](https://github.com/openclaw/openclaw/issues/170076) Update failure: package-swap (2026.10.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#170061](https://github.com/openclaw/openclaw/issues/170061) Update failure: gateway-recovery-verification (2026.9.9) `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬2
- [#170305](https://github.com/openclaw/openclaw/issues/170305) Update failure: requested (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#170032](https://github.com/openclaw/openclaw/issues/170032) Node4 npm-global update blocked: unsafe publication-recovery permissions and retained lease database identity refusal `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬2
- [#170036](https://github.com/openclaw/openclaw/issues/170036) Update failure: reconcile:abandoned (2026.10.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#170019](https://github.com/openclaw/openclaw/issues/170019) Update failure: updater-runtime-retention (2026.10.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#170323](https://github.com/openclaw/openclaw/issues/170323) [Bug]: channel turn fails with "plugin generation was superseded" after an isolated cron run of the same agent and model `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `impact:message-loss` 💬2
- [#169922](https://github.com/openclaw/openclaw/issues/169922) [Bug]: Sandboxed agents cannot access their own image_generate/video_generate/music_generate outputs (follow-up to #75683) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#170179](https://github.com/openclaw/openclaw/issues/170179) Gateway RSS/native-memory growth with session SQLite stalls `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#169797](https://github.com/openclaw/openclaw/issues/169797) [Bug]: Gateway on 2026.9.9 / 2026.10.1 uses ~2.5x the memory of 2026.9.4 on a single-CPU host (10–17 worker isolates), 3–5x slower start and first reply `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#169784](https://github.com/openclaw/openclaw/issues/169784) 2026.10.2: legacy Telegram spool import re-dispatched an update already consumed in June (update_id = migrated lastUpdateId); the agent executed a 4-month-old instruction `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#170114](https://github.com/openclaw/openclaw/issues/170114) canvas widgets ignore sandboxOrigin / gateway.canvas.publicUrl is missing `P3` 💬2
- [#169919](https://github.com/openclaw/openclaw/issues/169919) macOS app 2026.10.1: "Could not read the Gateway service ownership record" update window persists for an npm-global Node gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#169958](https://github.com/openclaw/openclaw/issues/169958) Update failure: candidate-state-snapshot (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#169900](https://github.com/openclaw/openclaw/issues/169900) Update failure: candidate-state-snapshot (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#169891](https://github.com/openclaw/openclaw/issues/169891) Update failure: gateway-recovery-verification (2026.9.9) `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬2
- [#169914](https://github.com/openclaw/openclaw/issues/169914) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#169668](https://github.com/openclaw/openclaw/issues/169668) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#169768](https://github.com/openclaw/openclaw/issues/169768) Update failure: package-swap (2026.9.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#169788](https://github.com/openclaw/openclaw/issues/169788) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#169938](https://github.com/openclaw/openclaw/issues/169938) Update failure: package-swap (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#169897](https://github.com/openclaw/openclaw/issues/169897) Update failure: package-swap (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#169775](https://github.com/openclaw/openclaw/issues/169775) Update failure: package-swap (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#169855](https://github.com/openclaw/openclaw/issues/169855) [Feature]: Configurable model label for TypeSafe local System One servers `P3` 💬2
- [#169808](https://github.com/openclaw/openclaw/issues/169808) Windows: gateway install --force silently drops hand-added env lines from the generated gateway.cmd (e.g. the official OPENCLAW_GATEWAY_STARTUP_TRACE); no supported way to set gateway env vars `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#169704](https://github.com/openclaw/openclaw/issues/169704) [Bug]: sessions_spawn lightContext ignored for CLI-backend subagents: agent command CLI branch never forwards bootstrapContextMode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#170554](https://github.com/openclaw/openclaw/issues/170554) [Bug]: agent-turn history image fetch ignores tools.web.fetch.ssrfPolicy — still blocked under Clash/mihomo fake-ip after #61830 opt-in 💬1
- [#170466](https://github.com/openclaw/openclaw/issues/170466) [Bug]: `openclaw wiki status` times out at hardcoded 30s; wiki.status re-parses every vault page (collectVaultCounts) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170549](https://github.com/openclaw/openclaw/issues/170549) Bug: shared-state SQLite WAL checkpoint is permanently starved on Windows (WAL grows unbounded; state-writing CLI commands hang) `P2` `impact:other` 💬1
- [#170545](https://github.com/openclaw/openclaw/issues/170545) Update failure: update-executor-settlement (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#170528](https://github.com/openclaw/openclaw/issues/170528) [Bug]: sessions.list thinkingLevels ignore reasoning: false (differs from models.list) `bug` `no-stale` `regression` `P2` 💬1
- [#170525](https://github.com/openclaw/openclaw/issues/170525) [Bug]: macOS lid-close sleep expires state-owner heartbeat and forces Gateway restart on wake (2026.10.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#170298](https://github.com/openclaw/openclaw/issues/170298) [Bug]: Native app access remains unavailable after successful automation updates `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#170503](https://github.com/openclaw/openclaw/issues/170503) [Bug]: Claude CLI auth login falsely reports unauthenticated when 3s probe times out (WSL2, 2026.10.2) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170501](https://github.com/openclaw/openclaw/issues/170501) [Feature]: Let plugins install refuse artifacts that differ from an operator digest `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `impact:security` 💬1
- [#170244](https://github.com/openclaw/openclaw/issues/170244) backup sqlite verify/restore rejects global snapshots taken before a schema-bumping upgrade `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#169679](https://github.com/openclaw/openclaw/issues/169679) [Bug]: OpenAI-compatible /v1/chat/completions fails with 500 when the routed session is archived `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170483](https://github.com/openclaw/openclaw/issues/170483) [Bug]: Zalo cuts message-tool sends and photo captions at 2000 characters and drops the rest `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169916](https://github.com/openclaw/openclaw/issues/169916) [Bug]: A2A: a SendMessage that repeats a messageId creates a task that stays WORKING forever (no turn, no reply, no lifetime) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170474](https://github.com/openclaw/openclaw/issues/170474) [Bug]: sessions.cleanup (all agents) takes ~27s since 2026.10.1 (under 1s on 2026.9.9); `openclaw sessions cleanup --all-agents` now always hits the fixed 10s CLI wait `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170465](https://github.com/openclaw/openclaw/issues/170465) [Bug]: active-memory "Plugin session ownership target not found" persists on 2026.10.1 for named direct sessions (not internal-session-effects) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#170457](https://github.com/openclaw/openclaw/issues/170457) [Bug] 2026.9.6: disabled codex plugin still spawns codex app-server; timed-out spawns are never reaped (orphan pile-up, state-lifecycle contention) `P1` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#170459](https://github.com/openclaw/openclaw/issues/170459) [Bug] Deferred gateway restart blocked for ~1h because the busy gate counts idle/orphaned child processes as active `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#170458](https://github.com/openclaw/openclaw/issues/170458) [Bug] 2026.9.6: one invalid model cost block triggers a catalog rebuild loop; prepared-model-catalog worker heap grows to multi-GB and freezes the event loop `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#170430](https://github.com/openclaw/openclaw/issues/170430) cloud-workers list hangs with high CPU on 2026.10.2 while environments.list answers in 2 s `P2` `clawsweeper:no-new-fix-pr` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#169758](https://github.com/openclaw/openclaw/issues/169758) [Bug]: Compact Slack progress can reactivate escaped mentions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#170279](https://github.com/openclaw/openclaw/issues/170279) Feature request: let claws migrate adopt existing agents while leaving operator-side settings (thinking, model catalog/runtime, agentDir, agents.defaults) in config `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170431](https://github.com/openclaw/openclaw/issues/170431) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#169995](https://github.com/openclaw/openclaw/issues/169995) [Bug]: Post-update LaunchAgent recovery treats a probe failure as "no recovery needed" `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#170428](https://github.com/openclaw/openclaw/issues/170428) [Bug]: iOS app has no working way to reduce native chat text size; Settings -> Appearance -> Text size does not apply or persist `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170415](https://github.com/openclaw/openclaw/issues/170415) [Bug]: Browser navigation guard resolves host names locally (dns.lookup) – host-name navigation fails with EAI_AGAIN when the Gateway's only route out is a proxy; needs a trusted-proxy mode like web_fetch `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#170410](https://github.com/openclaw/openclaw/issues/170410) Update failure: retired-state-format (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#170393](https://github.com/openclaw/openclaw/issues/170393) Codex OAuth migration blocked: current database is schema 20, documented bridge supports up to 19 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#170395](https://github.com/openclaw/openclaw/issues/170395) update fails with update-recovery-pending after a superseded package publication; repair refuses ("not either recorded generation") `P1` `impact:ux-friction` 💬1
- [#170388](https://github.com/openclaw/openclaw/issues/170388) Provider failover: inferSignalStatus misses mid-message HTTP status (e.g. Gemini "...error (503): ...") → no failover on 5xx/429 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170371](https://github.com/openclaw/openclaw/issues/170371) improve(ui): make session colors easier to scan in the sidebar `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#170375](https://github.com/openclaw/openclaw/issues/170375) `logging.redactPatterns` also masks tool results sent to the model, and custom patterns replace the built-in set `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#170291](https://github.com/openclaw/openclaw/issues/170291) [Bug]: publication observations omit downstream Linux builder admission `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#170367](https://github.com/openclaw/openclaw/issues/170367) [Feature]: OAuth usage-limit errors (ChatGPT/Codex 5h & weekly) should trigger auth profile rotation to the next configured OAuth account `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#170366](https://github.com/openclaw/openclaw/issues/170366) Update failure: package-swap (2026.10.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#170328](https://github.com/openclaw/openclaw/issues/170328) Daily session reset keeps the sessionId (boundary only), contrary to schema.md — chat transcripts grow without bound `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170320](https://github.com/openclaw/openclaw/issues/170320) Codex delegation prompt ignores disabled native multi-agent features `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#169918](https://github.com/openclaw/openclaw/issues/169918) [Bug]: doctor --fix migrates shared state DB before the retired-sidecar gate refuses, leaving the gateway unable to start (9.3 -> 10.2, npm global) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170301](https://github.com/openclaw/openclaw/issues/170301) [Bug]: CI: managed handoff "revoked requester" test fails on Linux `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#170261](https://github.com/openclaw/openclaw/issues/170261) [Feature]: Matrix — option to deliver the final reply as a new message when `streaming.mode` is `progress`/`partial`/`quiet` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170241](https://github.com/openclaw/openclaw/issues/170241) [Bug]: backup enable --to schedules offsite backups with the 10-minute command default timeout, so long archives are always killed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#170233](https://github.com/openclaw/openclaw/issues/170233) [Bug]: Code Mode exec tool description rewrite invalidates the whole prompt cache on every catalog change `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#170214](https://github.com/openclaw/openclaw/issues/170214) [Bug]: backup git create never commits large databases: hard-coded 120 s git timeout (add and pathspec commit each re-hash all dumps) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#170226](https://github.com/openclaw/openclaw/issues/170226) Gateway main thread stays ~99% busy after ready on an 810-agent fleet: pairwise realpath/stat path comparisons and repeated config stringify `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170216](https://github.com/openclaw/openclaw/issues/170216) Same-client human steering rejected (tool_authority_mismatch) during requester-settle turns after sessions_yield; human followup starves behind long completion-wake work (2026.10.2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#170203](https://github.com/openclaw/openclaw/issues/170203) [Bug]: Remount recovery rejects retained original launcher with recorded symlink mode 0755 vs 0700 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170198](https://github.com/openclaw/openclaw/issues/170198) [Docs Bug]: Documentation clarification: reviewing unfinished work after a terminal cyber refusal `bug` `docs` `P3` 💬1
- [#169669](https://github.com/openclaw/openclaw/issues/169669) Release checks: macOS packaged fresh lane fails when its chosen Gateway port is taken `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#169737](https://github.com/openclaw/openclaw/issues/169737) Flaky test: session-catalog performance test runs before the Codex catalog finishes loading `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#170192](https://github.com/openclaw/openclaw/issues/170192) [Feature]: Opt-in Skill Workshop experience review for native subagent (and cron/hook) runs, attributed to the owning agent `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169764](https://github.com/openclaw/openclaw/issues/169764) [Bug]: 2026.10.1 update registers the "(multiple)" store sentinel as a physical agent DB path; configured agents fail startup inspection after any deferred admission (doctor --fix repair is win32-only) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170186](https://github.com/openclaw/openclaw/issues/170186) MCP App prepareToolCall skipped the in-flight approval recheck `P3` `impact:security` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#170180](https://github.com/openclaw/openclaw/issues/170180) claude-cli: Opus 4.7/4.8 default to thinking off (MAX_THINKING_TOKENS=0) while the startup banner reports thinking=medium `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170136](https://github.com/openclaw/openclaw/issues/170136) [Bug]: chat.inject is refused with "is owned by" once a session's entry facts are cached and another key owns its transcript `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#170175](https://github.com/openclaw/openclaw/issues/170175) [Bug]: Transcript-ownership refusals from sessions.reset and sessions.compact lack structured details and a retryable flag `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#170143](https://github.com/openclaw/openclaw/issues/170143) [Bug]: Crabbox warm-image allocation keeps forking an 'available' image whose provider checkpoint is gone (never verified, every create fails) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170159](https://github.com/openclaw/openclaw/issues/170159) [Bug]: Codex harness group-chat "Current user request" has no sender label, so the model misattributes speakers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170158](https://github.com/openclaw/openclaw/issues/170158) [Bug]: NO_R keeps popping up in telegram chat `bug` `no-stale` `regression` `P2` 💬1
- [#170145](https://github.com/openclaw/openclaw/issues/170145) [Bug]: Secret egress proxy ignores the Gateway's HTTPS_PROXY for upstream connections `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#170144](https://github.com/openclaw/openclaw/issues/170144) [Bug]: crabbox tool stop times out at 600 s while teardown warm-image capture runs; environment reports ready throughout teardown `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#170117](https://github.com/openclaw/openclaw/issues/170117) Cron startup catch-up runs missed command jobs inline before arming the timer; one long job blocks the scheduler `P2` `impact:other` 💬1
- [#170116](https://github.com/openclaw/openclaw/issues/170116) Cron heartbeat job waits unbounded on a busy session (no wake-wait deadline); run stays 'running' for hours `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170118](https://github.com/openclaw/openclaw/issues/170118) Worker-turn before_agent_run event has no systemPrompt (embedded and CLI runners pass it) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170103](https://github.com/openclaw/openclaw/issues/170103) [Feature]: Native scheduled 'Learn from past conversations' per agent, including subagent/cron sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170102](https://github.com/openclaw/openclaw/issues/170102) [Feature]: Shared Workshop collections across agents that stay Workshop-maintained `P2` 💬1
- [#170100](https://github.com/openclaw/openclaw/issues/170100) [Feature]: Experience review depth bar should count tool calls, not only model iterations (code mode under-qualifies) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170101](https://github.com/openclaw/openclaw/issues/170101) [Bug]: Pending experience reviews are lost on restart and can starve on a busy Gateway (in-memory, global 30 s idle) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170104](https://github.com/openclaw/openclaw/issues/170104) [Feature]: Self-learning metrics: learning event log and weekly curator report `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170107](https://github.com/openclaw/openclaw/issues/170107) CI intermittent: `database is locked` in session-rewind tests (archived switch, local cut, retired owner) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#170095](https://github.com/openclaw/openclaw/issues/170095) gateway.canvas.publicUrl configuration is missing / canvas service base URL is not configurable 💬1
- [#170091](https://github.com/openclaw/openclaw/issues/170091) [Bug]: inbound Telegram photo fails every vision model with "Transcript idempotency key ... conflicts with the admitted message" (2026.10.1) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#170088](https://github.com/openclaw/openclaw/issues/170088) Matrix key-backup loop inherits expired message-tool authority `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#170062](https://github.com/openclaw/openclaw/issues/170062) [Bug]: TTS-only assistant turns can disappear from later OpenAI Completions replay `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#170060](https://github.com/openclaw/openclaw/issues/170060) [Bug]: anthropic-messages (Sonnet 5.5): carrier relocated after the message tool result is read as an empty new user message 💬1
- [#170058](https://github.com/openclaw/openclaw/issues/170058) [Feature]: Select which tools are deferred behind Tool Search `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170049](https://github.com/openclaw/openclaw/issues/170049) [Feature]: Decide opt-in operator-selected Gateway readiness conditions `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#170030](https://github.com/openclaw/openclaw/issues/170030) [2026.9.8] Control UI loses recent conversation from rendered history `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#170027](https://github.com/openclaw/openclaw/issues/170027) [Bug]: TTS-only heartbeat replies are silently dropped before speech synthesis `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#170013](https://github.com/openclaw/openclaw/issues/170013) [Bug]: Windows Gateway: prepared-model-catalog worker repeatedly cancelled with sustained idle CPU usage `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#170018](https://github.com/openclaw/openclaw/issues/170018) Context metrics inconsistent across sessions_list, session store and /status on Codex sessions (Context 345%; denominator switches with fallback provenance) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#170015](https://github.com/openclaw/openclaw/issues/170015) [Feature]: Let operators limit how many automation jobs clients can create (cron.maxJobs) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#170008](https://github.com/openclaw/openclaw/issues/170008) [Feature]: Config key for custom models whose endpoint resolves the model id itself `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#169999](https://github.com/openclaw/openclaw/issues/169999) [Bug]: Repair worker exits on error without emitting a stopped event or result message `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#169998](https://github.com/openclaw/openclaw/issues/169998) [Bug]: A corrupt restore journal aborts the audit-recovery backup instead of degrading like the restore path `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#170002](https://github.com/openclaw/openclaw/issues/170002) [Bug]: Session rollover fails after work drain timeout; dashboard warning has no effective recovery action `P2` `impact:message-loss` `impact:ux-friction` 💬1
- [#169991](https://github.com/openclaw/openclaw/issues/169991) Feature request: LiveKit SIP/RTC carrier for the existing voice-call plugin `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169911](https://github.com/openclaw/openclaw/issues/169911) [Bug]: iOS shows timeouts during healthy chat and restores dismissed banners `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#169979](https://github.com/openclaw/openclaw/issues/169979) [Feature]: Keep which skill a tool call used in the session transcript `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#169976](https://github.com/openclaw/openclaw/issues/169976) [Bug]: A response model the provider declares equivalent is reported as "Model route changed" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169972](https://github.com/openclaw/openclaw/issues/169972) [Bug]: Managed Codex web_search loses typed timeout and budget at WebSearchProviderError.toResult `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169969](https://github.com/openclaw/openclaw/issues/169969) [Feature]: Telegram DM Topics — allow commands in root DM while requiring topics for conversations `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169968](https://github.com/openclaw/openclaw/issues/169968) Codex harness: explicit per-agent control (off / allowlist) for account-connected Codex apps `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#169959](https://github.com/openclaw/openclaw/issues/169959) [Docs Bug]: Stable HTTPS URL Guide troubleshooting `bug` `docs` `no-stale` `P2` 💬1
- [#169950](https://github.com/openclaw/openclaw/issues/169950) [Bug]: `openclaw status` keeps prescribing `openclaw update` for a weeks-old failed git update after the Gateway moved past it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169947](https://github.com/openclaw/openclaw/issues/169947) doctor: Discord groupPolicy="open" warning contradicts security audit --deep ("allowlist") on same live config `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#169944](https://github.com/openclaw/openclaw/issues/169944) [Bug]: browser open ignores timeoutMs: tab navigation hard-coded to 30 s and the tab is closed on expiry `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169941](https://github.com/openclaw/openclaw/issues/169941) [Bug]: Gateway stays up but deaf for 40 min when a plugin hook starves the event loop; no health signal or recovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169942](https://github.com/openclaw/openclaw/issues/169942) [Bug]: channels status --probe --json exits 0 when the Gateway is unreachable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169935](https://github.com/openclaw/openclaw/issues/169935) Read-only CLI inspection (status/health/doctor/memory) fails during any concurrent writer — snapshot worker retries ~0.55s instead of using the online-backup API `P2` `impact:other` 💬1
- [#169927](https://github.com/openclaw/openclaw/issues/169927) [Bug]: Multi-agent rooms: an agent cc'd by @mention can't stay silent in message_tool_only mode; its silence is posted as a run failure `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169917](https://github.com/openclaw/openclaw/issues/169917) MS Teams: pasted (inline) images in DMs always time out: the 10 s inbound media budget is shorter than Bot Framework attachment downloads `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169888](https://github.com/openclaw/openclaw/issues/169888) Backport #140730 (KNN child import slimming) to extended-stable: memory_search ~2x slower / times out on 2026.8.35 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169885](https://github.com/openclaw/openclaw/issues/169885) Issue on docs 💬1
- [#169883](https://github.com/openclaw/openclaw/issues/169883) [Bug]: Control UI: invalid chat.send params: unexpected property '__controlUiReconnectResume' after WebSocket reconnect `bug` `regression` `P1` `impact:message-loss` 💬1
- [#169882](https://github.com/openclaw/openclaw/issues/169882) [Bug]: macOS app node system.run uses launchd's bare PATH when OpenClaw.app is opened from Finder/Dock `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169881](https://github.com/openclaw/openclaw/issues/169881) Telegram inline-button taps are timestamped with the source message's date, not the tap time `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169877](https://github.com/openclaw/openclaw/issues/169877) Update failure: gateway-recovery-verification (2026.9.9) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#169865](https://github.com/openclaw/openclaw/issues/169865) [Bug]: 2026.10.1 → 2026.10.2: managed-service-stop-failed despite responsive systemd user manager and session bus `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#169861](https://github.com/openclaw/openclaw/issues/169861) [Bug]: Removed plugin's data/settings migration stays "unfinished" forever; doctor --fix, registry refresh and uninstall can't retire it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#169862](https://github.com/openclaw/openclaw/issues/169862) [Bug]: `plugins enable` hides its failure reason ("The CLI command failed") unless OPENCLAW_DEBUG=1 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169863](https://github.com/openclaw/openclaw/issues/169863) [Bug]: Linux doctor legacy capture cleanup always skipped: "Could not classify PID 1: working directory is unavailable" `P2` `impact:other` 💬1
- [#169845](https://github.com/openclaw/openclaw/issues/169845) [Feature] TUI: send image attachments (paste / file path) `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#169844](https://github.com/openclaw/openclaw/issues/169844) [Bug]: Control UI Gateway update on Windows hangs at "Activating", leaves Scheduled Task disabled and gateway stopped (package not updated) `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#169842](https://github.com/openclaw/openclaw/issues/169842) [Bug]: plugins update on Windows cannot upgrade in place — pinned-spec "already at" resolution or EPERM rename over existing install dir `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#169831](https://github.com/openclaw/openclaw/issues/169831) [Bug]: 2026.10.2 models.list stays UNAVAILABLE ("Agent database preparation has ended") after the agent DB startup inspection misses its 5 s budget and then recovers `P2` `impact:auth-provider` `impact:ux-friction` 💬1
- [#169832](https://github.com/openclaw/openclaw/issues/169832) [Bug]: workboard plugin uses fixed-interval polling with no backoff/circuit breaker; blocks gateway event loop and drops cron first-runs `P2` `impact:crash-loop` 💬1
- [#169828](https://github.com/openclaw/openclaw/issues/169828) [Bug]: sessions_send to children of a rotated parent session is refused for every sender ("communication policy's parent session is no longer current") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#169823](https://github.com/openclaw/openclaw/issues/169823) Add isolated OAuth text judgment for production Brain Librarian 💬1
- [#169815](https://github.com/openclaw/openclaw/issues/169815) [Feature]: Feishu distinguish queued messages from confirmed run inclusion `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169810](https://github.com/openclaw/openclaw/issues/169810) [Bug]: macOS restart only targets the gui launchd domain and never falls back to system/ or user/ `bug` `bug:behavior` `clawsweeper:bulk-filed` 💬1
- [#169809](https://github.com/openclaw/openclaw/issues/169809) [Bug]: Failed gateway-restart emission retries indefinitely with no attempt cap, terminal state, or further logging `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#169807](https://github.com/openclaw/openclaw/issues/169807) [Bug]: Dead-lettered session deliveries are dropped without being counted or logged `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#169804](https://github.com/openclaw/openclaw/issues/169804) claude-cli runs marked failed after the final reply is persisted (writer claim / unsettled writer / caller authority), mostly sessions_send targets from cron (2026.9.9) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#169803](https://github.com/openclaw/openclaw/issues/169803) [Bug]: Thread replies can misread the current message as part of the thread starter note `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169796](https://github.com/openclaw/openclaw/issues/169796) [Feature]: ElevenLabs: configurable audio-tag prefix for Eleven v3/v4 models `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#169790](https://github.com/openclaw/openclaw/issues/169790) [Bug]: LINE quote of a bot message sent before a Gateway restart no longer addresses the bot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169785](https://github.com/openclaw/openclaw/issues/169785) WhatsApp group quote-replies do not mark the quoted message as is_reply_target 💬1
- [#169776](https://github.com/openclaw/openclaw/issues/169776) [Enhancement] Harden the updater: self-heal ephemeral /tmp lease drift, GC orphaned activation journals, survive lost restart handoffs `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-info` 💬1
- [#169772](https://github.com/openclaw/openclaw/issues/169772) Update failure: package-swap (2026.9.8) `P2` `maturity:stable` `impact:ux-friction` 💬1
- [#169762](https://github.com/openclaw/openclaw/issues/169762) [Android] No inline approval prompt in chat interface - approvals hidden in sidebar and separate panel only `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169742](https://github.com/openclaw/openclaw/issues/169742) Skill Workshop collection review via claude-cli fallback degenerates: tool calls emitted as text, 128k-token repetition until 20k-line JSONL cap 💬1
- [#169734](https://github.com/openclaw/openclaw/issues/169734) [Bug]: Discord native session controls can silently fail after authorization `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#169643](https://github.com/openclaw/openclaw/issues/169643) [Bug]: Telegram transcript mirror run lookup scans the whole session history `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#169718](https://github.com/openclaw/openclaw/issues/169718) [Bug] memory search: storage-error on short-term-lock acquire hides the real exception (use-after-close during shutdown) `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169706](https://github.com/openclaw/openclaw/issues/169706) Feature: configurable command exclusions for the Tokenjuice plugin `P3` 💬1
- [#169685](https://github.com/openclaw/openclaw/issues/169685) [Bug]: iOS chat messages jump only after the keyboard animation finishes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169691](https://github.com/openclaw/openclaw/issues/169691) Automation job with scheduledToolPolicy.mode="account" fails: Scheduled account is unavailable despite account existing in channel config `P1` `impact:other` 💬1
- [#169642](https://github.com/openclaw/openclaw/issues/169642) [Bug]: Doctor hosted-Ollama rename moves local memory.search embeddings to ollama-cloud `bug` `regression` `P2` `clawsweeper:source-repro` 💬1
- [#169675](https://github.com/openclaw/openclaw/issues/169675) [Bug]: Telegram inbound files over 50 MiB download but fail workspace staging despite higher mediaMaxMb `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#169674](https://github.com/openclaw/openclaw/issues/169674) [Bug]: doctor --fix NOCOW rewrite makes pre-startup-migration .bak originals permanently non-retirable by update cleanup (artifact-metadata-changed) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169666](https://github.com/openclaw/openclaw/issues/169666) Flaky test: inbound restore releases unrelated session writes while allocation waits `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#169641](https://github.com/openclaw/openclaw/issues/169641) [Bug]: Claude CLI native models no longer offer thinking "Off" `bug` `regression` `P2` `clawsweeper:source-repro` 💬1
- [#169636](https://github.com/openclaw/openclaw/issues/169636) [Bug]: cron.list fails "worker task capacity reached" for agents with >128 announce jobs (regression from #169311) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#169640](https://github.com/openclaw/openclaw/issues/169640) [Bug]: macOS app runs "Gateway update repair" on every launch – codex plugin data/settings migration stays pending `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#169614](https://github.com/openclaw/openclaw/issues/169614) [Bug]: Cron failure-repair brief asks for NO_REPLY but WebChat repair turn is reply-required → false empty-response error in owner chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#169611](https://github.com/openclaw/openclaw/issues/169611) [Feature] Control UI: add a display toggle to hide per-message tool/activity bars (show Q&A only) `P3` `impact:ux-friction` 💬1
- [#169604](https://github.com/openclaw/openclaw/issues/169604) [Bug]: Command palette search navigation fails to load or anchor messages pre-dating /new session reset `P2` `impact:ux-friction` 💬1
- [#169601](https://github.com/openclaw/openclaw/issues/169601) Unscoped sessions.list silently omits agents still in startup database inspection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#169600](https://github.com/openclaw/openclaw/issues/169600) In-process restart (/restart, SIGUSR2) proceeds after hot reload already rejected the on-disk config, guaranteeing a 78/CONFIG outage `P2` `impact:crash-loop` 💬1
- [#170562](https://github.com/openclaw/openclaw/issues/170562) [Feature]: Doctor recovery for a requester settle wake stranded on a terminal subagent run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision`
- [#170496](https://github.com/openclaw/openclaw/issues/170496) Read-only state-DB snapshot copied per read; cron timer maintenance triggers it every tick (no reuse)
- [#169939](https://github.com/openclaw/openclaw/issues/169939) Update failure: finalize-target-config-convergence (2026.9.8)
- [#169591](https://github.com/openclaw/openclaw/issues/169591) Test tooling: run-vitest silently skips requested files that belong to other Vitest configs

#### 🔒 Closed Issues
- [#168750](https://github.com/openclaw/openclaw/issues/168750) [Bug]: Update activation Doctor fails after ~24 min with "Database maintenance authority check cannot admit a nested effect" → state-migrated-no-rollback (2026.9.5→2026.10.1)
- [#95746](https://github.com/openclaw/openclaw/issues/95746) [Bug]: memory-core dreaming can exhaust local model context due to parallel/internal Dream Diary subagent runs
- [#127239](https://github.com/openclaw/openclaw/issues/127239) Context window silently falls back to 200k (2e5) hardcoded default instead of real 1M catalog value for deepseek-v4-flash
- [#39811](https://github.com/openclaw/openclaw/issues/39811) Model configuration accepts unvalidated model names, enabling silent misconfiguration
- [#9986](https://github.com/openclaw/openclaw/issues/9986) Feature: Trigger model fallback on context length exceeded
- [#119692](https://github.com/openclaw/openclaw/issues/119692) fix(usage): OpenAI-compatible streaming path drops token usage for MiniMax-M3 (transcript written as all-zero)
- [#165501](https://github.com/openclaw/openclaw/issues/165501) heartbeat (isolatedSession) sessions have message tool filtered out, breaking cron-driven delivery even though plugin declares describeMessageTool
- [#169050](https://github.com/openclaw/openclaw/issues/169050) [Bug]: macOS publishing journal blocks update after recorded device IDs diverge from live identities
- [#167345](https://github.com/openclaw/openclaw/issues/167345) Let a turn continue after a mid-stream `WebSocket closed 1000` on the ChatGPT Responses transport
- [#82020](https://github.com/openclaw/openclaw/issues/82020) [Bug]: Custom provider sharing baseUrl with built-in provider still broken in latest release (Regression from 4.29)
- [#169352](https://github.com/openclaw/openclaw/issues/169352) [Bug]: npm package-publication recovery stuck after an interrupted update — `retire`/`repair` refuse ("previous changed", then "journal does not match its installation"), blocking all future `openclaw update`
- [#169662](https://github.com/openclaw/openclaw/issues/169662) [Bug]: macOS managed Gateway update rejects protected Bun --no-install command in installedServiceCLI
- [#170031](https://github.com/openclaw/openclaw/issues/170031) [2026.9.8/macOS] Publication journal binding refusal blocks update; supported diagnostics do not identify failed binding
- [#161865](https://github.com/openclaw/openclaw/issues/161865) [Bug]: pnpm self-update launches SQLite worker from removed old generation after stopping Gateway
- [#170334](https://github.com/openclaw/openclaw/issues/170334) [Bug]: acpx and codex data/settings upgrades still pending after a successful 2026.10.5-beta.2 update
- [#170333](https://github.com/openclaw/openclaw/issues/170333) [Bug]: update validation lint defers agent checks with 0ms left and still passes
- [#166332](https://github.com/openclaw/openclaw/issues/166332) [Bug]: macOS app Peekaboo Bridge rejects current Peekaboo CLI 4.8.0 (versionMismatch), CLI reports a handshake timeout
- [#165709](https://github.com/openclaw/openclaw/issues/165709) [Bug]: Control UI: parent session keeps an unread dot from hidden subagent runs that cannot be marked read
- [#169463](https://github.com/openclaw/openclaw/issues/169463) [Bug]: Update recovery blocked: activation database hard-linked into retained updater runtime
- [#111354](https://github.com/openclaw/openclaw/issues/111354) RFC: Declarative provider manifests instead of per-vendor lifecycle re-implementation
- [#152760](https://github.com/openclaw/openclaw/issues/152760) [Bug]: Deeply nested payload crashes Codex image-payload sanitizer with RangeError
- [#159942](https://github.com/openclaw/openclaw/issues/159942) [Feature]: Progress-card handoff after `sessions_yield` for webchat / Control UI requesters (Discord/Telegram only today)
- [#170335](https://github.com/openclaw/openclaw/issues/170335) [Bug]: successful update removes database snapshots it said must be preserved
- [#170488](https://github.com/openclaw/openclaw/issues/170488) [Bug]: webchat with thinking-enabled local model does not stream responses
- [#167371](https://github.com/openclaw/openclaw/issues/167371) [Bug]: MCP SSE transport silently switches to an uninitialized server session after eventsource auto-reconnect — tools/call fails with -32602 until the runtime is rebuilt
- [#157646](https://github.com/openclaw/openclaw/issues/157646) Update startup canary fails on old Discord plugin settings during 9.5-to-9.6 upgrade
- [#166244](https://github.com/openclaw/openclaw/issues/166244) [Bug]: Bundled peekaboo skill installs stale Peekaboo 4.5.0 from steipete/tap instead of openclaw/tap
- [#164211](https://github.com/openclaw/openclaw/issues/164211) acpx: managed MCP bridges (`openclaw-plugin-tools`, `openclaw-tools`) fail with ERR_MODULE_NOT_FOUND on packaged installs — ACP agents get no plugin tools
- [#169780](https://github.com/openclaw/openclaw/issues/169780) [Bug]: Existing chat turns fail with SQLite worker commit receipt transport limit
- [#159665](https://github.com/openclaw/openclaw/issues/159665) DeepSeek DSML tool-call markup with kind `calls` leaks into delivered messages (whitelist misses `calls`)
- [#169422](https://github.com/openclaw/openclaw/issues/169422) 2026.10.1: updating with the Gateway running records a false post-install-verify failure ("cannot open your existing data") and leaves "restart remains unsafe / state-migrated-no-rollback" although the new Gateway serves
- [#169059](https://github.com/openclaw/openclaw/issues/169059) [Bug]: Linux pnpm 12 Gateway unit records versioned .pnpm entrypoint; every update leaves the Gateway stopped
- [#111921](https://github.com/openclaw/openclaw/issues/111921) acpx plugin install pulls all-platform prebuilt binaries (~2.7GB waste, regrows every update)
- [#168963](https://github.com/openclaw/openclaw/issues/168963) Update failure: updater-runtime-retention (2026.9.9)
- [#169366](https://github.com/openclaw/openclaw/issues/169366) Update failure: package-swap (2026.9.8)
- [#168072](https://github.com/openclaw/openclaw/issues/168072) [Bug]: Startup cron host admission holds the state writer for 107s and blocks update receipts
- [#87925](https://github.com/openclaw/openclaw/issues/87925) thinkingLevel: model switch silently downgrades and persists an inherited explicit override
- [#152876](https://github.com/openclaw/openclaw/issues/152876) [Bug]: Remote JSON webhook body can crash the gateway with native stack overflow (0xC00000FD)
- [#170424](https://github.com/openclaw/openclaw/issues/170424) [Feature]: Android local mode: chat with a model provider without a Gateway
- [#141625](https://github.com/openclaw/openclaw/issues/141625) Google Chat: Markdown reaches conversational replies as raw text — reply-delivery path bypasses the working converter (see #49350)
- [#169777](https://github.com/openclaw/openclaw/issues/169777) [Bug]: Gateway shutdown hangs ~325 s in restart.close.transcript-workers with no active work (reconcile pool join is unbounded)
- [#162717](https://github.com/openclaw/openclaw/issues/162717) Image generation: support response_format config or url response parsing for custom OpenAI-compatible providers
- [#170014](https://github.com/openclaw/openclaw/issues/170014) [Bug]: Cron auto-repair races retries and escalates before recovery is verified
- [#169981](https://github.com/openclaw/openclaw/issues/169981) Workboard keeps failing with the same SQLite worker error until a gateway restart once its worker slot fails
- [#170111](https://github.com/openclaw/openclaw/issues/170111) Update failure: gateway-recovery-verification (2026.9.9)
- [#170323](https://github.com/openclaw/openclaw/issues/170323) [Bug]: channel turn fails with "plugin generation was superseded" after an isolated cron run of the same agent and model
- [#141812](https://github.com/openclaw/openclaw/issues/141812) [Bug]: channels add and the llama.cpp setup write plaintext secrets into openclaw.json that doctor then flags every heartbeat
- [#168959](https://github.com/openclaw/openclaw/issues/168959) [Bug]: doctor --fix deletes a sidecar-backed OAuth profile when the legacy auth store is unreadable
- [#168303](https://github.com/openclaw/openclaw/issues/168303) [Feature]: Retain authenticated release-plan artifacts for read-only outage status
- [#169784](https://github.com/openclaw/openclaw/issues/169784) 2026.10.2: legacy Telegram spool import re-dispatched an update already consumed in June (update_id = migrated lastUpdateId); the agent executed a 4-month-old instruction
- [#94166](https://github.com/openclaw/openclaw/issues/94166) memory-core OpenAI-compatible embeddings cannot use explicitly configured private endpoints
- [#170114](https://github.com/openclaw/openclaw/issues/170114) canvas widgets ignore sandboxOrigin / gateway.canvas.publicUrl is missing
- [#166747](https://github.com/openclaw/openclaw/issues/166747) remove obsolete hook install archive fixtures
- [#169958](https://github.com/openclaw/openclaw/issues/169958) Update failure: candidate-state-snapshot (2026.9.9)
- [#169165](https://github.com/openclaw/openclaw/issues/169165) Update failure: post-update-verification (2026.10.1)
- [#169287](https://github.com/openclaw/openclaw/issues/169287) Update failure: unexpected-error (2026.9.4)
- [#169083](https://github.com/openclaw/openclaw/issues/169083) Update failure: runtime-verification-failed (2026.9.3)
- [#169041](https://github.com/openclaw/openclaw/issues/169041) Update failure: candidate-state-snapshot (2026.9.6)
- [#169768](https://github.com/openclaw/openclaw/issues/169768) Update failure: package-swap (2026.9.6)
- [#169788](https://github.com/openclaw/openclaw/issues/169788) Update failure: package-swap (2026.9.8)
- [#169938](https://github.com/openclaw/openclaw/issues/169938) Update failure: package-swap (2026.9.8)
- [#169897](https://github.com/openclaw/openclaw/issues/169897) Update failure: package-swap (2026.9.8)
- [#169775](https://github.com/openclaw/openclaw/issues/169775) Update failure: package-swap (2026.9.8)
- [#169545](https://github.com/openclaw/openclaw/issues/169545) Update failure: package-swap (2026.9.8)
- [#169317](https://github.com/openclaw/openclaw/issues/169317) Update failure: package-swap (2026.9.8)
- [#169855](https://github.com/openclaw/openclaw/issues/169855) [Feature]: Configurable model label for TypeSafe local System One servers
- [#160426](https://github.com/openclaw/openclaw/issues/160426) [Bug]: Deeply nested external tool schema crashes `validateJsonSchemaValue` with RangeError
- [#169420](https://github.com/openclaw/openclaw/issues/169420) 2026.9.9 update: candidate-state-snapshot fails with "SQLite journal state changed while copying" on the shared state DB while the Gateway is stopped (Linux, npm)
- [#169421](https://github.com/openclaw/openclaw/issues/169421) 2026.10.1: cron runs --id <job> returns no history for a disabled job although its run receipts are in the state DB
- [#169464](https://github.com/openclaw/openclaw/issues/169464) [Bug]: Opening /chat/main on a Gateway without a main agent polls board.get with agent "main" every 30s
- [#166781](https://github.com/openclaw/openclaw/issues/166781) [Bug]: Streaming a reply that contains [[reply_to_current]] re-parses the whole reply on every delta
- [#141793](https://github.com/openclaw/openclaw/issues/141793) [Feature]: Non-interactive path for the managed llama.cpp embedding-only setup
- [#169704](https://github.com/openclaw/openclaw/issues/169704) [Bug]: sessions_spawn lightContext ignored for CLI-backend subagents: agent command CLI branch never forwards bootstrapContextMode
- [#170554](https://github.com/openclaw/openclaw/issues/170554) [Bug]: agent-turn history image fetch ignores tools.web.fetch.ssrfPolicy — still blocked under Clash/mihomo fake-ip after #61830 opt-in
- [#170466](https://github.com/openclaw/openclaw/issues/170466) [Bug]: `openclaw wiki status` times out at hardcoded 30s; wiki.status re-parses every vault page (collectVaultCounts)
- [#170549](https://github.com/openclaw/openclaw/issues/170549) Bug: shared-state SQLite WAL checkpoint is permanently starved on Windows (WAL grows unbounded; state-writing CLI commands hang)
- [#170298](https://github.com/openclaw/openclaw/issues/170298) [Bug]: Native app access remains unavailable after successful automation updates
- [#170244](https://github.com/openclaw/openclaw/issues/170244) backup sqlite verify/restore rejects global snapshots taken before a schema-bumping upgrade
- [#169679](https://github.com/openclaw/openclaw/issues/169679) [Bug]: OpenAI-compatible /v1/chat/completions fails with 500 when the routed session is archived
- [#169916](https://github.com/openclaw/openclaw/issues/169916) [Bug]: A2A: a SendMessage that repeats a messageId creates a task that stays WORKING forever (no turn, no reply, no lifetime)
- [#169758](https://github.com/openclaw/openclaw/issues/169758) [Bug]: Compact Slack progress can reactivate escaped mentions
- [#169995](https://github.com/openclaw/openclaw/issues/169995) [Bug]: Post-update LaunchAgent recovery treats a probe failure as "no recovery needed"
- [#170395](https://github.com/openclaw/openclaw/issues/170395) update fails with update-recovery-pending after a superseded package publication; repair refuses ("not either recorded generation")
- [#170371](https://github.com/openclaw/openclaw/issues/170371) improve(ui): make session colors easier to scan in the sidebar
- [#167709](https://github.com/openclaw/openclaw/issues/167709) [Bug]: claude-cli WebChat turn fails as empty response after a delivered message(final=true) + NO_REPLY (internal-ui send not credited in automatic mode)
- [#169106](https://github.com/openclaw/openclaw/issues/169106) [Bug]: A rejecting host retry callback aborts the model retry loop instead of returning a retry decision
- [#169918](https://github.com/openclaw/openclaw/issues/169918) [Bug]: doctor --fix migrates shared state DB before the retired-sidecar gate refuses, leaving the gateway unable to start (9.3 -> 10.2, npm global)
- [#169390](https://github.com/openclaw/openclaw/issues/169390) The repair hint for a corrupt agent database says `openclaw doctor --fix`, which refuses that database; `doctor --session-sqlite recover` is the command that repairs it
- [#123687](https://github.com/openclaw/openclaw/issues/123687) [Feature]: Enforce the dependency pin guard in required CI
- [#167990](https://github.com/openclaw/openclaw/issues/167990) [Bug]: claude-cli: sessions of one agent never share the system-prompt cache (Runtime session=/sessionUrl= in the cached block)
- [#170198](https://github.com/openclaw/openclaw/issues/170198) [Docs Bug]: Documentation clarification: reviewing unfinished work after a terminal cyber refusal
- [#169669](https://github.com/openclaw/openclaw/issues/169669) Release checks: macOS packaged fresh lane fails when its chosen Gateway port is taken
- [#169737](https://github.com/openclaw/openclaw/issues/169737) Flaky test: session-catalog performance test runs before the Codex catalog finishes loading
- [#127327](https://github.com/openclaw/openclaw/issues/127327) [Bug]: plugin uninstall alertdialog has no focus lifecycle
- [#169764](https://github.com/openclaw/openclaw/issues/169764) [Bug]: 2026.10.1 update registers the "(multiple)" store sentinel as a physical agent DB path; configured agents fail startup inspection after any deferred admission (doctor --fix repair is win32-only)
- [#169462](https://github.com/openclaw/openclaw/issues/169462) Updater: blocked receipt is known before validation but only fails after ~30 min at package-swap; `update repair` exits 0 when it did nothing
- [#169382](https://github.com/openclaw/openclaw/issues/169382) [Bug]: Managed update lease lives in shared /tmp/openclaw; another local user owning it moves the lease path and blocks package-swap and update repair
- [#127536](https://github.com/openclaw/openclaw/issues/127536) Discord edit, delete, pin, and unpin bypass the channel retry owner
- [#127329](https://github.com/openclaw/openclaw/issues/127329) [Bug]: Config scalar validation reasons are inaccessible
- [#162422](https://github.com/openclaw/openclaw/issues/162422) [Bug]: OpenAI-compatible endpoints return 408 for valid large bodies that take longer than 30 seconds to upload
- [#169244](https://github.com/openclaw/openclaw/issues/169244) [Bug]: pnpm 12 native update leaves the `openclaw` bin shim pointing at the deleted `.openclaw-update-native-*` staging dir
- [#170117](https://github.com/openclaw/openclaw/issues/170117) Cron startup catch-up runs missed command jobs inline before arming the timer; one long job blocks the scheduler
- [#170102](https://github.com/openclaw/openclaw/issues/170102) [Feature]: Shared Workshop collections across agents that stay Workshop-maintained
- [#170095](https://github.com/openclaw/openclaw/issues/170095) gateway.canvas.publicUrl configuration is missing / canvas service base URL is not configurable
- [#170060](https://github.com/openclaw/openclaw/issues/170060) [Bug]: anthropic-messages (Sonnet 5.5): carrier relocated after the message tool result is read as an empty new user message
- [#170002](https://github.com/openclaw/openclaw/issues/170002) [Bug]: Session rollover fails after work drain timeout; dashboard warning has no effective recovery action
- [#169911](https://github.com/openclaw/openclaw/issues/169911) [Bug]: iOS shows timeouts during healthy chat and restores dismissed banners
- [#169935](https://github.com/openclaw/openclaw/issues/169935) Read-only CLI inspection (status/health/doctor/memory) fails during any concurrent writer — snapshot worker retries ~0.55s instead of using the online-backup API
- [#169885](https://github.com/openclaw/openclaw/issues/169885) Issue on docs
- [#169883](https://github.com/openclaw/openclaw/issues/169883) [Bug]: Control UI: invalid chat.send params: unexpected property '__controlUiReconnectResume' after WebSocket reconnect
- [#169877](https://github.com/openclaw/openclaw/issues/169877) Update failure: gateway-recovery-verification (2026.9.9)
- [#169863](https://github.com/openclaw/openclaw/issues/169863) [Bug]: Linux doctor legacy capture cleanup always skipped: "Could not classify PID 1: working directory is unavailable"
- [#169831](https://github.com/openclaw/openclaw/issues/169831) [Bug]: 2026.10.2 models.list stays UNAVAILABLE ("Agent database preparation has ended") after the agent DB startup inspection misses its 5 s budget and then recovers
- [#169832](https://github.com/openclaw/openclaw/issues/169832) [Bug]: workboard plugin uses fixed-interval polling with no backoff/circuit breaker; blocks gateway event loop and drops cron first-runs
- [#169823](https://github.com/openclaw/openclaw/issues/169823) Add isolated OAuth text judgment for production Brain Librarian
- [#169810](https://github.com/openclaw/openclaw/issues/169810) [Bug]: macOS restart only targets the gui launchd domain and never falls back to system/ or user/
- [#169785](https://github.com/openclaw/openclaw/issues/169785) WhatsApp group quote-replies do not mark the quoted message as is_reply_target
- [#153674](https://github.com/openclaw/openclaw/issues/153674) [Bug]: Deeply nested legacy model-ref config crashes rewriteModelRefs with RangeError
- [#153668](https://github.com/openclaw/openclaw/issues/153668) [Bug]: Deeply nested config change path collection crashes with RangeError
- [#169772](https://github.com/openclaw/openclaw/issues/169772) Update failure: package-swap (2026.9.8)
- [#153743](https://github.com/openclaw/openclaw/issues/153743) [Bug]: Provider tool-schema compatibility hooks recurse into untrusted external tool schemas with no depth budget (DoS)
- [#153724](https://github.com/openclaw/openclaw/issues/153724) [Bug]: Deeply nested reasoning replay payload crashes reasoning sanitizer with RangeError
- [#153719](https://github.com/openclaw/openclaw/issues/153719) [Bug]: Deeply nested session transcript content crashes transcript text collection with RangeError
- [#153713](https://github.com/openclaw/openclaw/issues/153713) [Bug]: Deeply nested external tool schema crashes DeepSeek schema normalization with RangeError
- [#153687](https://github.com/openclaw/openclaw/issues/153687) [Bug]: Deeply nested external tool schema crashes Gemini schema inspection with RangeError
- [#153675](https://github.com/openclaw/openclaw/issues/153675) [Bug]: Deeply nested config env-ref collection crashes with RangeError
- [#152946](https://github.com/openclaw/openclaw/issues/152946) [Bug]: Non-reentrant store-writer admission deadlocks when the same SQLite store path is re-entered
- [#169742](https://github.com/openclaw/openclaw/issues/169742) Skill Workshop collection review via claude-cli fallback degenerates: tool calls emitted as text, 128k-token repetition until 20k-line JSONL cap
- [#169643](https://github.com/openclaw/openclaw/issues/169643) [Bug]: Telegram transcript mirror run lookup scans the whole session history
- [#169706](https://github.com/openclaw/openclaw/issues/169706) Feature: configurable command exclusions for the Tokenjuice plugin
- [#169691](https://github.com/openclaw/openclaw/issues/169691) Automation job with scheduledToolPolicy.mode="account" fails: Scheduled account is unavailable despite account existing in channel config
- [#169642](https://github.com/openclaw/openclaw/issues/169642) [Bug]: Doctor hosted-Ollama rename moves local memory.search embeddings to ollama-cloud
- [#169641](https://github.com/openclaw/openclaw/issues/169641) [Bug]: Claude CLI native models no longer offer thinking "Off"
- [#148056](https://github.com/openclaw/openclaw/issues/148056) [Feature]: Hardware-aware setup for local OCR and image understanding
- [#169611](https://github.com/openclaw/openclaw/issues/169611) [Feature] Control UI: add a display toggle to hide per-message tool/activity bars (show Q&A only)
- [#169604](https://github.com/openclaw/openclaw/issues/169604) [Bug]: Command palette search navigation fails to load or anchor messages pre-dating /new session reset
- [#169600](https://github.com/openclaw/openclaw/issues/169600) In-process restart (/restart, SIGUSR2) proceeds after hot reload already rejected the on-disk config, guaranteeing a 78/CONFIG outage
- [#169939](https://github.com/openclaw/openclaw/issues/169939) Update failure: finalize-target-config-convergence (2026.9.8)
- [#169591](https://github.com/openclaw/openclaw/issues/169591) Test tooling: run-vitest silently skips requested files that belong to other Vitest configs

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 253,184 · **Open issues:** 48,170 · **Last push:** <1h ago

On October 11, 2026, Hermes Agent released version 0.21.7, a patch that integrates around 204 merged pull requests since the previous release, ensuring stability across platforms like macOS, Windows, Docker, and Hermes Cloud. Key updates include the addition of a browsable connector card in the manage_connections feature and bug fixes addressing issues with the Gemini offerings and messaging failures in Telegram. Notably, the new issue #137017 highlights a problem with the 'holographic' memory provider not being installed, causing automatic installation failures. Additionally, there are ongoing concerns with various bugs related to billing plans displaying incorrect options, message thread failures in Telegram, and issues with session keys in approval hooks.

#### 🚀 New Releases
- [v0.21.7](https://github.com/nousresearch/hermes-agent/releases/tag/v0.21.7) Hermes Agent v0.21.7

#### ✅ Merged PRs
- [#137567](https://github.com/NousResearch/hermes-agent/pull/137567) fmt(js): `npm run fix` auto-fix
- [#137426](https://github.com/NousResearch/hermes-agent/pull/137426) feat(connectors): manage_connections display, a browsable connector card
- [#137525](https://github.com/NousResearch/hermes-agent/pull/137525) fix(solstice): offer Gemini 3.1 Pro, 3.8 Flash and 3.5 Flash Lite

#### 🐛 New Issues
- [#137017](https://github.com/NousResearch/hermes-agent/issues/137017) Memory provider 'holographic' is not installed, so external memory is off for this session. Its automatic install failed less than an hour ago: run hermes plugins install holographic.[Bug]: `type/bug` `comp/cli` `comp/plugins` `tool/memory` 💬15
- [#137544](https://github.com/NousResearch/hermes-agent/issues/137544) [Bug]: Billing Plans shows "Downgrade" on higher tiers while on the Free plan `type/bug` `P2` `comp/desktop` `area/billing` 💬2
- [#137568](https://github.com/NousResearch/hermes-agent/issues/137568) [Bug]: Native Telegram DM topics: sends fail with "message thread not found" when metadata lacks direct_messages_topic_id 💬1
- [#137558](https://github.com/NousResearch/hermes-agent/issues/137558) Approval hooks pass `session_key` but no `session_id`, so plugins keyed on session_id silently lose approval events `type/bug` `comp/gateway` `comp/tools` `comp/plugins` 💬1
- [#137572](https://github.com/NousResearch/hermes-agent/issues/137572) [slack] bare URL at the end of a bold span: closing `*` is swallowed into the href (link 404s, span never closes)
- [#137565](https://github.com/NousResearch/hermes-agent/issues/137565) [Bug]: Compression-exhaustion auto-reset drops the inbound user action request `type/bug` `comp/gateway` `platform/telegram` `P2`
- [#137561](https://github.com/NousResearch/hermes-agent/issues/137561) [Bug]: Desktop sends queued clarify answers after an earlier lock expires `type/bug` `P3` `sweeper:risk-session-state` `comp/desktop`
- [#137555](https://github.com/NousResearch/hermes-agent/issues/137555) [Bug]: Worker-thread ensure_import() in _lazy_ensure_quietly() blocks on stdin input(), permanently deadlocking gateway session leases without tripping the watchdog `type/bug` `comp/gateway` `tool/tts` `platform/wecom`
- [#137546](https://github.com/NousResearch/hermes-agent/issues/137546) [Bug]: /goal judge rejection never reaches the agent — origin traced to #18262 `type/bug` `comp/cli` `P2`
- [#137551](https://github.com/NousResearch/hermes-agent/issues/137551) BUG: Updater moves user model files from config path to install directory during update `type/bug` `comp/cli` `area/config` `P2`
- [#137552](https://github.com/NousResearch/hermes-agent/issues/137552) [Bug]: Kanban notify+wake is admitted then lost while the gateway drains for /restart `type/bug` `comp/gateway` `comp/cron` `P2`
- [#137545](https://github.com/NousResearch/hermes-agent/issues/137545) [Bug]: Telegram: a message sent while /stop is being acknowledged replays the /stop; the replay cancels the next turn and leaves the session permanently busy `type/bug` `comp/gateway` `platform/telegram` `P1`
- [#137540](https://github.com/NousResearch/hermes-agent/issues/137540) Compaction summary is shown to the user as an assistant message on the live desktop transcript; each compaction also re-stores the full history `type/bug` `comp/agent` `comp/gateway` `P2`
- [#137541](https://github.com/NousResearch/hermes-agent/issues/137541) Catalog admission: enforce the 3-day release age on plugin Python deps (design question on exact pins vs core-locked packages) `type/feature` `P3` `needs-decision` `Plugin Catalog`

#### 🔒 Closed Issues
- [#63787](https://github.com/NousResearch/hermes-agent/issues/63787) Langfuse SDK plugin: placeholder API key silent failure
- [#72661](https://github.com/NousResearch/hermes-agent/issues/72661) Bug: Langfuse traces show zero total_cost despite per-type cost breakdown
- [#69421](https://github.com/NousResearch/hermes-agent/issues/69421) Langfuse SDK plugin: placeholder API key silent failure
- [#66960](https://github.com/NousResearch/hermes-agent/issues/66960) Langfuse SDK plugin: placeholder API key silent failure
- [#60308](https://github.com/NousResearch/hermes-agent/issues/60308) Langfuse SDK plugin: placeholder API key silent failure
- [#57949](https://github.com/NousResearch/hermes-agent/issues/57949) Langfuse SDK plugin: placeholder API key silent failure
- [#72484](https://github.com/NousResearch/hermes-agent/issues/72484) [Bug]: Langfuse plugin rejects valid custom-endpoint credentials based on key prefix
- [#71556](https://github.com/NousResearch/hermes-agent/issues/71556) [Bug]: Langfuse plugin uses random session_id from /v1/responses instead of stable gateway_session_key - traces do not chain under Open WebUI
- [#60961](https://github.com/NousResearch/hermes-agent/issues/60961) Langfuse SDK plugin: placeholder API key silent failure
- [#59026](https://github.com/NousResearch/hermes-agent/issues/59026) [Bug]: Documented Langfuse setup can silently stop tracing after update removes SDK from venv
- [#58322](https://github.com/NousResearch/hermes-agent/issues/58322) Langfuse traces emit service.name=unknown_service when observability.service_name is unset
- [#110053](https://github.com/NousResearch/hermes-agent/issues/110053) Langfuse SDK plugin: placeholder API key silent failure
- [#89221](https://github.com/NousResearch/hermes-agent/issues/89221) Langfuse SDK plugin: placeholder API key silent failure
- [#81730](https://github.com/NousResearch/hermes-agent/issues/81730) [Bug]: Langfuse plugin: session_id/tags never reach child observations — propagate_attributes() closed before LLM-call/tool spans are created
- [#98631](https://github.com/NousResearch/hermes-agent/issues/98631) Langfuse SDK plugin: placeholder API key silent failure
- [#95057](https://github.com/NousResearch/hermes-agent/issues/95057) Langfuse plugin: 'Failed to detach context' OTel errors (token created in a different Context)
- [#88455](https://github.com/NousResearch/hermes-agent/issues/88455) Langfuse SDK plugin: placeholder API key silent failure
- [#87054](https://github.com/NousResearch/hermes-agent/issues/87054) Langfuse SDK plugin: placeholder API key silent failure
- [#86172](https://github.com/NousResearch/hermes-agent/issues/86172) Langfuse SDK plugin: placeholder API key silent failure
- [#83984](https://github.com/NousResearch/hermes-agent/issues/83984) Langfuse SDK plugin: placeholder API key silent failure
- [#94710](https://github.com/NousResearch/hermes-agent/issues/94710) [Bug]: Langfuse plugin targets SDK v3 but setup installs latest v4
- [#88502](https://github.com/NousResearch/hermes-agent/issues/88502) [Feature]: Langfuse plugin — tag traces with cron vs. interactive trigger type
- [#87468](https://github.com/NousResearch/hermes-agent/issues/87468) [Bug]: Langfuse plugin's client.flush() has no timeout — can hang a cron job past its inactivity watchdog and discard the turn's real output
- [#81731](https://github.com/NousResearch/hermes-agent/issues/81731) [Bug]: Langfuse plugin: failed/abandoned LLM and tool calls are indistinguishable from successful ones — no observation is ever marked ERROR/WARNING

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,677 · **Open issues:** 8,730 · **Last push:** <1h ago

Today in vLLM, there were no new releases, but a number of significant PRs were merged, enhancing overall performance and functionality. Notably, improvements were made to the `_topk_topp_kernel()` for masked logits and bug fixes addressed issues such as KV connector problems and specification decoding errors. Additionally, a critical bug was reported regarding the Ministral 3 setup, which fails to run due to a missing PixtralRotaryEmbedding error, and another significant issue was identified where the MTP draft ignores the target `--revision`, leading to potential crashes with ZeroDivisionError. Overall, while there were no new releases, the team focused on refining existing features and addressing pressing bugs.

#### ✅ Merged PRs
- [#61183](https://github.com/vllm-project/vllm/pull/61183) [Core][Refactor] Move KV cache planning logic to kv_cache_planning.py
- [#59039](https://github.com/vllm-project/vllm/pull/59039) [ROCm][Perf][DSv4.1] Enable decoder SWA bounded replay
- [#51755](https://github.com/vllm-project/vllm/pull/51755) [CI][XPU] Standardize test job labels for intel jobs
- [#61082](https://github.com/vllm-project/vllm/pull/61082) [ROCm][Perf][DSv4.1] Mono decode on every backbone layer
- [#61181](https://github.com/vllm-project/vllm/pull/61181) [Misc] Expand @ZJY0516 CODEOWNERS to Mamba and KV cache
- [#61134](https://github.com/vllm-project/vllm/pull/61134) [Model Loader] Make dummy weight init dtype-aware
- [#59070](https://github.com/vllm-project/vllm/pull/59070) [ROCm][MLA] Keep DCP prefill context in FP8 through AllGather
- [#56148](https://github.com/vllm-project/vllm/pull/56148) [Attention][Spec Decode] Multi-query Triton split-K for spec-decode verify, with empty-segment/padding hardening
- [#50415](https://github.com/vllm-project/vllm/pull/50415) [MoE] Add MoNe experts pruning support
- [#61213](https://github.com/vllm-project/vllm/pull/61213) [Perf] Improve `_topk_topp_kernel()` for masked logits
- [#59314](https://github.com/vllm-project/vllm/pull/59314) [Rust Frontend] Add per-request timing metrics to chat and completions
- [#57705](https://github.com/vllm-project/vllm/pull/57705) [Bugfix][KVConnector] Fix MoRI-IO WRITE-mode requests stranded in WAITING_FOR_REMOTE_KVS
- [#61004](https://github.com/vllm-project/vllm/pull/61004) [ROCm][DSv4] Fuse the shared expert into AITER MegaMoE
- [#61253](https://github.com/vllm-project/vllm/pull/61253) [Bugfix][Parser] Stop re-parsing the whole GLM tool argument per chunk
- [#61022](https://github.com/vllm-project/vllm/pull/61022) [Docs] Fix broken llm-d.ai links on the llm-d integration page
- [#60285](https://github.com/vllm-project/vllm/pull/60285) [HiSparse] Report host pool in KV cache capacity logs
- [#59340](https://github.com/vllm-project/vllm/pull/59340) [Perf][Humming] Skip the redundant MoE input copy before the w13 GEMM
- [#61269](https://github.com/vllm-project/vllm/pull/61269) [CI] Pace the CRCR nightly report under the relay rate limit
- [#61220](https://github.com/vllm-project/vllm/pull/61220) [Bugfix][Rust Frontend] Omit unset sampling params in render output
- [#58547](https://github.com/vllm-project/vllm/pull/58547) [ROCm][Perf] Fix Gemma AR+RMS prefill fallback
- [#59721](https://github.com/vllm-project/vllm/pull/59721) [Bugfix][Core] Check multimodal chunk boundaries before encoder cache reuse
- [#61236](https://github.com/vllm-project/vllm/pull/61236) [Bugfix][Frontend] Honor request_id and X-Request-Id in chat and completions render
- [#61240](https://github.com/vllm-project/vllm/pull/61240) [Bug] Honor spec decode draft model config
- [#61023](https://github.com/vllm-project/vllm/pull/61023) [Attention] Make the sparse MLA prefill workspace size configurable
- [#60020](https://github.com/vllm-project/vllm/pull/60020) [Bugfix][weight loader] Stop warning when a parameter only widens the weight
- [#58381](https://github.com/vllm-project/vllm/pull/58381) [ROCm][MLA] Cut ~21x host dispatch from the MLA metadata build
- [#60883](https://github.com/vllm-project/vllm/pull/60883) [CI][ROCm] Add AITER nightly overlay scripts
- [#61126](https://github.com/vllm-project/vllm/pull/61126) [Attention] Remove cascade attention
- [#60941](https://github.com/vllm-project/vllm/pull/60941) [Bugfix][HiSparse] Fix TP group hang on steps without scheduled tokens
- [#58715](https://github.com/vllm-project/vllm/pull/58715) [Metrics] Count finished requests by watermark status
- [#60502](https://github.com/vllm-project/vllm/pull/60502) [Triton] Migrate Triton kernels off tl.make_block_ptr for triton-main compat
- [#60456](https://github.com/vllm-project/vllm/pull/60456) [CI] Add nightly Python 3.14 smoke test
- [#61108](https://github.com/vllm-project/vllm/pull/61108) [Fix][Compile] Declare group_shape in the static FP8 quant fusion …
- [#55717](https://github.com/vllm-project/vllm/pull/55717) [Bugfix][Frontend] Return all logprobs when completions requests logprobs=-1
- [#60766](https://github.com/vllm-project/vllm/pull/60766) [Bugfix][Platform] Don't resolve current_platform during import vllm
- [#60676](https://github.com/vllm-project/vllm/pull/60676) [Frontend] Serve LiquidAI/d1-3B on /v1/systemone
- [#60721](https://github.com/vllm-project/vllm/pull/60721) [Misc] Consolidate csrc shared headers and prune dead code
- [#52231](https://github.com/vllm-project/vllm/pull/52231) [Feature] Support batch invariance on ROCm
- [#49263](https://github.com/vllm-project/vllm/pull/49263) [Perf] [Feat] [ROCm] Add densemha support to ROCm AITER Sparse MLA

#### 🐛 New Issues
- [#61252](https://github.com/vllm-project/vllm/issues/61252) [Bug]: Ministral 3 Fails to Run with Error About PixtralRotaryEmbedding Missing `bug` `mistral` 💬3
- [#61197](https://github.com/vllm-project/vllm/issues/61197) [Bug]: MTP draft ignores target `--revision` (loads default branch) – regression vs 0.29, can crash with ZeroDivisionError `bug` `quantization` 💬2
- [#61157](https://github.com/vllm-project/vllm/issues/61157) [Bug] GLM hybrid-SSM + MTP: deep-ctx agent session sharply degrades (fabricated tool args, self-amnesia) exactly when a concurrent request arrives — persists after #58454/#58368 `tool-calling` `quantization` `glm` 💬2
- [#61160](https://github.com/vllm-project/vllm/issues/61160) [Bug]: Cross-request context contamination via shared-prefix KV reuse in PD disaggregation with automatic prefix caching — clean with `--no-enable-prefix-caching` `kv-connector` `kv-cache-manager` 💬2
- [#61170](https://github.com/vllm-project/vllm/issues/61170) [Bug]: VLLM_MAX_AUDIO_CLIP_FILESIZE_MB=0 rejects non-empty audio `bug` 💬2
- [#61286](https://github.com/vllm-project/vllm/issues/61286) [Bug]: LoRA MoE backend selection ignores --moe-backend and the TRT-LLM LoRA path asserts with --fully-sharded-loras 💬1
- [#61229](https://github.com/vllm-project/vllm/issues/61229) [Bug]: NixlConnector: KV blocks released on lease expiry while remote READ in flight, decode silently consumes overwritten KV `bug` 💬1
- [#61206](https://github.com/vllm-project/vllm/issues/61206) [Bug]: Qwen Tool Calling errors - 3 parser issues `bug` `tool-calling` `qwen` 💬1
- [#61204](https://github.com/vllm-project/vllm/issues/61204) [Bug]: [ROCm] requirements/rocm.txt hard-requires mooncake-transfer-engine-rocm, which has no Python 3.14 wheel `rocm` 💬1
- [#61172](https://github.com/vllm-project/vllm/issues/61172) [Bug]: Anthropic Messages silently drops unsupported system content blocks `bug` 💬1
- [#61150](https://github.com/vllm-project/vllm/issues/61150) [Bug]: PIECEWISE CUDA graphs give wrong outputs when vllm::moe_forward is in splitting_ops (fresh output tensor, stale replay address) 💬1
- [#61144](https://github.com/vllm-project/vllm/issues/61144) [Bug][ROCm][MoRIIO] On MI300X (SR-IOV VF), READ mode over XGMI crashes the decode with a GPU memory access fault on its first request `rocm` 💬1
- [#61315](https://github.com/vllm-project/vllm/issues/61315) [Bug]: enable_lora with max_lora_rank=320 crashes engine startup on MoE models — AssertionError: fused_moe_lora_one_shot supports max_lora_rank<=128 `bug`
- [#61314](https://github.com/vllm-project/vllm/issues/61314) [Bug]: quantization="fp8" + kv_cache_dtype="float16" on a bf16 model crashes at startup — same flash-attn dtype assert as #60859, now on the online-quant path `bug` `quantization`
- [#61313](https://github.com/vllm-project/vllm/issues/61313) [Bug]: disable_hybrid_kv_cache_manager=True crashes engine startup on hybrid mamba models — ValueError: Failed to promote local KV cache specs to one unified type `bug`
- [#61305](https://github.com/vllm-project/vllm/issues/61305) [RFC]: Simulated execution with pluggable timing models (building on #47922)
- [#61300](https://github.com/vllm-project/vllm/issues/61300) [Bug]: Intel Arc Pro B70 XPU checkpoint-loading hang before readiness with Xe BCS faults on v0.31.0 `intel-gpu` `quantization`
- [#61291](https://github.com/vllm-project/vllm/issues/61291) [RFC]: Use a manifest for Aux Outputs and extend it to store top k token logprobs `RFC`
- [#61289](https://github.com/vllm-project/vllm/issues/61289) [Performance]: Cold start on a fresh H100: -42.5% TTFT with overlapped weight staging and AOT reuse (Qwen3-8B-AWQ)
- [#61281](https://github.com/vllm-project/vllm/issues/61281) [Bug]: Hybrid prefix caching: the Mamba "align" prompt-boundary state is freed mid-request and evicted before the request's attention blocks, so the next turn misses the whole prompt `kimi` `kv-cache-manager`
- [#61256](https://github.com/vllm-project/vllm/issues/61256) [Feature]: Enable batch-sharded sampling for GPT-OSS `feature request` `gpt-oss`
- [#61249](https://github.com/vllm-project/vllm/issues/61249) [Bug]: /v1/systemone tokenizes the whole state once per question, so decision latency grows with questions × state length
- [#61239](https://github.com/vllm-project/vllm/issues/61239) [Bug]: FlashInfer metadata builder races under async scheduling for non-speculative models since #57214 (CUDA illegal memory access / GPU hang)
- [#61233](https://github.com/vllm-project/vllm/issues/61233) [MRV2][spec-decode] Full-graph replay with >=2 concurrent sequences kills the engine on SM75; logits also diverge from PIECEWISE
- [#61231](https://github.com/vllm-project/vllm/issues/61231) [Bug]: EAGLE/EAGLE-3 drafter silently uses RoPE base 10000 when the draft config omits rope_theta `speculative-decoding`
- [#61225](https://github.com/vllm-project/vllm/issues/61225) [Bug]: nvfp4 KV cache silently corrupt under token-major (BLNHC) KV-cache layout — writer/reader stride mismatch `quantization`
- [#61215](https://github.com/vllm-project/vllm/issues/61215) [Bug]: /v1/systemone returns noise for thinking-only Qwen3 checkpoints `tool-calling`
- [#61208](https://github.com/vllm-project/vllm/issues/61208) [Bug] MooncakeStoreConnector drops secondary views of multi-tensor KV caches
- [#61195](https://github.com/vllm-project/vllm/issues/61195) [Bug]: Gemma 4 image requests fail with "Failed to apply prompt replacement" under --chat-template-content-format string
- [#61189](https://github.com/vllm-project/vllm/issues/61189) [Bug]: /v1/systemone reads score levels named "1".."5" one level high, and letter choices out of order as the wrong option
- [#61188](https://github.com/vllm-project/vllm/issues/61188) [Bug]: mamba_config backend is silently overridden by the --mamba-backend default
- [#61169](https://github.com/vllm-project/vllm/issues/61169) [Bug]: custom all-reduce creates its NVLink multicast reduce-scatter buffer mid-serving (not at startup); the run then crashes (Xid + CUBLAS_STATUS_EXECUTION_FAILED) `kimi`

#### 🔒 Closed Issues
- [#57267](https://github.com/vllm-project/vllm/issues/57267) [Bug]: Hybrid Mamba2 with prefix caching (`mamba_cache_mode="all", should be deterministic`) returns different in same batch
- [#58729](https://github.com/vllm-project/vllm/issues/58729) [Bug]: GLM MXFP4 returns 0 GSM8K on GB200 (DEP8+EP8, vLLM 0.30.0)
- [#42398](https://github.com/vllm-project/vllm/issues/42398) [Feature]: Enhance the security protection of ZMQ communication
- [#61252](https://github.com/vllm-project/vllm/issues/61252) [Bug]: Ministral 3 Fails to Run with Error About PixtralRotaryEmbedding Missing
- [#61043](https://github.com/vllm-project/vllm/issues/61043) [Bug]: structured outputs: a request during shutdown fails with "'XgrammarBackend' object has no attribute 'compiler'"
- [#60121](https://github.com/vllm-project/vllm/issues/60121) [Bug][ROCm] Slow EngineCore/worker teardown leaves VRAM held after shutdown, so the next engine fails its startup memory check
- [#59887](https://github.com/vllm-project/vllm/issues/59887) [Bug]: flashinfer_moe_ep_cutedsl passes enable_in_kernel_fc2_reduce, which pinned FlashInfer 0.7.0.post1 does not accept
- [#56981](https://github.com/vllm-project/vllm/issues/56981) [Bug]: Qwen3-ASR audio preprocessing produces different audio-token counts from Hugging Face
- [#61078](https://github.com/vllm-project/vllm/issues/61078) docs(security): API Key Limitations list is missing /metrics, /kv_event_sources, and /fault_tolerance/* (all unauthenticated)
- [#61040](https://github.com/vllm-project/vllm/issues/61040) [Bug]: DeepSeek-V4.1 crashes in decoder-replay CUDA graph with --moe-backend flashinfer_moe_ep_* (input_ids int32 vs int64)
- [#58912](https://github.com/vllm-project/vllm/issues/58912) XPU: logits_soft_cap silently dropped in flash_attn_varlen_func - Gemma-2/4 run uncapped on Intel GPUs

### SGLang (`sgl-project/sglang`)

**Stars:** 37,053 · **Open issues:** 5,665 · **Last push:** <1h ago

On October 13, 2026, SGLang saw no new releases, but several significant changes were merged into the codebase. Notable PRs included updates to the assessment processes with the recalibration of GSM8K thresholds in #41980 and advancements for DeepSeek-V4.1, such as admitting the NIXL transfer backend for DSpark PD in #43734 and improvements in accuracy reporting in #43971. Among the new issues, a bug reported in #43765 highlights a problem with compact attention imports from a previous AITER removal, indicating ongoing challenges in compatibility. Another significant concern is raised in #43930 regarding scheduling discrepancies in request rates during benchmarking.

#### ✅ Merged PRs
- [#43973](https://github.com/sgl-project/sglang/pull/43973) [CI] Remove Mistral Small 4 e2e test
- [#43962](https://github.com/sgl-project/sglang/pull/43962) [AMD] Update v4 amd cookbook 1012
- [#43563](https://github.com/sgl-project/sglang/pull/43563) [Fix] Account for captured inputs in DeepGEMM masked workspace budget
- [#43936](https://github.com/sgl-project/sglang/pull/43936) [PD] Recompute retracted DeepSeek-V4 requests on prefill instead of crashing decode
- [#43948](https://github.com/sgl-project/sglang/pull/43948) [DSv4.1] Temporarily disable B300 PD/CP accuracy test
- [#43796](https://github.com/sgl-project/sglang/pull/43796) [Fix] Preserve HTTP errors for non-streaming /v1/messages
- [#42077](https://github.com/sgl-project/sglang/pull/42077) [HiCache] Avoid full-store scans for uncached file prefix lookups
- [#43921](https://github.com/sgl-project/sglang/pull/43921) [DSv4.1] Reduce sparse-prefill workspace padding
- [#43833](https://github.com/sgl-project/sglang/pull/43833) [DeepSeek-V4.1] mHC: drop seam_open, narrow precomputed stats in take_rows
- [#43021](https://github.com/sgl-project/sglang/pull/43021) [Build][CI] Drop Python 3.10: require Python 3.11+ and run CUDA CI on Python 3.12
- [#43935](https://github.com/sgl-project/sglang/pull/43935) [DSV4][CP] Write low-ratio page indices when CP prefill runs paged attention
- [#41980](https://github.com/sgl-project/sglang/pull/41980) [AMD] Recalibrate test_quark_mxfp4 GSM8K thresholds to observed MI355X noise
- [#43238](https://github.com/sgl-project/sglang/pull/43238) [Perf] Route BF16 mixed-batch decode tails through decode attention
- [#43251](https://github.com/sgl-project/sglang/pull/43251) Quantized weight-update fixes: Qwen3.5 draft KV budget, UE8M0 partial blocks, mxfp8 fused indexer, NVFP4 input scales
- [#42820](https://github.com/sgl-project/sglang/pull/42820) [sglang-miles] Support P2P replica loading and target/draft weight updates
- [#43734](https://github.com/sgl-project/sglang/pull/43734) [DeepSeek-V4.1] Admit the NIXL transfer backend for DSpark PD
- [#43918](https://github.com/sgl-project/sglang/pull/43918) [Kernel] Expose bundled FlashMLA MegaAttention kernels and APIs
- [#43834](https://github.com/sgl-project/sglang/pull/43834) [AMD] [Docker] Update MoRI to v1.2.4
- [#43836](https://github.com/sgl-project/sglang/pull/43836) [AMD] Fix test_compact_attention_hip.py CI
- [#43803](https://github.com/sgl-project/sglang/pull/43803) [AMD] Add flydsl mxfp8 dense gemm kernel for dpsk v4.1 prefill
- [#41793](https://github.com/sgl-project/sglang/pull/41793) [AMD] Keep the FP4 varctx schedule test off AITER's 2048-row compile
- [#42553](https://github.com/sgl-project/sglang/pull/42553) [ROCm] Eliminate HiCache migration stalls and use exact-size host allocations
- [#43854](https://github.com/sgl-project/sglang/pull/43854) Fix autograd retention in CUDA graph capture tail hooks
- [#43791](https://github.com/sgl-project/sglang/pull/43791) [DFlash] Decide the Domino candidate pool in one place and apply simulated acceptance inside the accept
- [#43790](https://github.com/sgl-project/sglang/pull/43790) [DSpark] Share draft params, logits dtype, confidence and the accept tail between graph and eager
- [#40896](https://github.com/sgl-project/sglang/pull/40896) [Unified Cache] Abort requests whose external linker load fails instead of crashing the scheduler
- [#37525](https://github.com/sgl-project/sglang/pull/37525) Prebuild fixup_zero_kv JIT module at TRTLLM-MLA backend init
- [#43463](https://github.com/sgl-project/sglang/pull/43463) [QSA] Bound the decode indexer's work by the context length
- [#37426](https://github.com/sgl-project/sglang/pull/37426) [CI][Diffusion] Add caching for npu GT images in CI
- [#43756](https://github.com/sgl-project/sglang/pull/43756) [diffusion] bind worker CPUs to the GPU's NUMA node when memory policy is not permitted

#### 🐛 New Issues
- [#43765](https://github.com/sgl-project/sglang/issues/43765) [Bug][AMD] DSV4 compact_attention_hip imports aiter's pa_decode_sparse, which aiter removed on 2026-09-18 💬2
- [#43949](https://github.com/sgl-project/sglang/issues/43949) [RFC] Monokernel framework for SGLang `RFC` 💬1
- [#43930](https://github.com/sgl-project/sglang/issues/43930) [Bug] bench_serving: --request-rate falls further behind schedule with every request, so the achieved rate is below the requested rate 💬1
- [#43914](https://github.com/sgl-project/sglang/issues/43914) [Bug] NVFP4 W4A4 MoE on SM100 less accurate than vLLM on the same checkpoint 💬1
- [#43971](https://github.com/sgl-project/sglang/issues/43971) Cache usage reporting drops measured zero and invents unknown cached-token totals
- [#43965](https://github.com/sgl-project/sglang/issues/43965) [Feature] [RFC] SGLang Engine Initialization Snapshots: Reusing Initialized State for Faster Startup
- [#43961](https://github.com/sgl-project/sglang/issues/43961) [Bug] #running-req / num_running_reqs grows monotonically under chunked prefill and over-reports load (hits the default config)
- [#43958](https://github.com/sgl-project/sglang/issues/43958) [NPU] Qwen3-ASR compiled decode graph capture fails even with CPU offload disabled
- [#43956](https://github.com/sgl-project/sglang/issues/43956) [Bug] Qwen3.8-27B scores depend on batch shape and can change borderline decisions (FP8 and BF16)
- [#43931](https://github.com/sgl-project/sglang/issues/43931) [Bug] SGLANG_NGRAM_FORCE_GREEDY_VERIFY does not force greedy NGRAM verification
- [#43929](https://github.com/sgl-project/sglang/issues/43929) [Bug] bench_serving: --dataset-name openai counts every prompt as 2 input tokens (transformers 5)
- [#43912](https://github.com/sgl-project/sglang/issues/43912) [Feature] SM90 W8A16 small-M fused MoE for 128x128 block-FP8 experts
- [#43888](https://github.com/sgl-project/sglang/issues/43888) [Bug] sgl-model-gateway: usage/billing token accounting wraps (u32) and passes negative worker reports through unchecked
- [#43885](https://github.com/sgl-project/sglang/issues/43885) [Roadmap] Pipeline Parallelism Roadmap (2026 Q4) `high priority`
- [#43882](https://github.com/sgl-project/sglang/issues/43882) [Bug] bootstrap_room fan-out wraps in the Rust worker but not in Python (io_struct) — mixed PD legs can disagree on the rendezvous room near i64::MAX
- [#43880](https://github.com/sgl-project/sglang/issues/43880) [Feature] SM90 single-token W8A16 GEMV for 128x128 block-FP8 linears
- [#43878](https://github.com/sgl-project/sglang/issues/43878) [Feature] [diffusion] ComfyUI integrated mode: support FLUX.2 and FLUX.2 Klein
- [#43877](https://github.com/sgl-project/sglang/issues/43877) [Feature] [diffusion] ComfyUI server-mode nodes: video-to-video, audio-video output, prompt enhancement, checkpoint sweep, LoRA stacking, API recipe
- [#43876](https://github.com/sgl-project/sglang/issues/43876) [Bug] [diffusion] RIFE: unbounded frame_interpolation_exp and crash at scale 0.5
- [#43875](https://github.com/sgl-project/sglang/issues/43875) [Bug] [diffusion] OpenAI API hardening and runtime utils/pipeline bugs
- [#43874](https://github.com/sgl-project/sglang/issues/43874) [Bug] [diffusion] ComfyUI plugin: 14 bugs in SGLDiffusion nodes and executors
- [#43873](https://github.com/sgl-project/sglang/issues/43873) [Bug] [diffusion] ComfyUI integrated mode: SGLD worker crashes at startup on ComfyUI v0.39.2
- [#43864](https://github.com/sgl-project/sglang/issues/43864) [Bug] Audio request to a multimodal model without an audio tower crashes the scheduler (gemma-4-31B-it)
- [#43862](https://github.com/sgl-project/sglang/issues/43862) [Bug] PD disagg: bootstrap_room normalization diverges between the Rust worker, the Python path, and the sgl-model-gateway router — n>1 chat requests to a Rust PD worker are always rejected
- [#43857](https://github.com/sgl-project/sglang/issues/43857) [Bug] sglang-mm: token-layout offsets wrap at u32 for prompts expanding past 2^32 tokens, silently corrupting M-RoPE positions
- [#43820](https://github.com/sgl-project/sglang/issues/43820) [RFC] Context-parallel prefill for GDN hybrid models (Qwen3.5 / Qwen3-Next family): contiguous sharding with an exact affine state hand-off
- [#43810](https://github.com/sgl-project/sglang/issues/43810) CI/CD Speed Up Optimizations
- [#43761](https://github.com/sgl-project/sglang/issues/43761) [Bug] Mistral tokenizers: image prompts lose <s>/[INST]/[/INST], and "[/THINK]" encodes as 5 tokens

#### 🔒 Closed Issues
- [#23602](https://github.com/sgl-project/sglang/issues/23602) DeepSeek V4 Roadmap
- [#27574](https://github.com/sgl-project/sglang/issues/27574) [Agentic Inference] Programmatic KV Cache for Agentic Workloads
- [#30928](https://github.com/sgl-project/sglang/issues/30928) [RFC] Position-Independent KV Cache Reuse for Agentic/RAG Workloads
- [#22558](https://github.com/sgl-project/sglang/issues/22558) [RFC] Native gRPC Server for SGLang in Rust
- [#30781](https://github.com/sgl-project/sglang/issues/30781) [Bug] sgl-model-gateway router rejects /v1/responses requests with tool type "custom" — openai-protocol crate out of sync with Python protocol.py
- [#31019](https://github.com/sgl-project/sglang/issues/31019) [Bug] GPT-OSS + require_reasoning + json_schema emits malformed Harmony without Role and Channel
- [#34611](https://github.com/sgl-project/sglang/issues/34611) [Bug] ROCm MI355 HiCache Broken - Poor Performance for Realistic Agentic Workload
- [#34384](https://github.com/sgl-project/sglang/issues/34384) [Bug] DSpark compact ragged CUDA Graph uses incompatible request-slot geometry for the same token tier
- [#33385](https://github.com/sgl-project/sglang/issues/33385) [Bug] DeepSeekV4TokenToKVPool (SWA/HiSparse) has no get_cpu_copy() → decode-mode retract crashes with NotImplementedError (offload is unconditional, not gated on --disaggregation-decode-enable-offload-kvcache)
- [#30595](https://github.com/sgl-project/sglang/issues/30595) SGLang not support hidden_size=4096, moe_intermediate_size=2048 MoE
- [#43765](https://github.com/sgl-project/sglang/issues/43765) [Bug][AMD] DSV4 compact_attention_hip imports aiter's pa_decode_sparse, which aiter removed on 2026-09-18
- [#31766](https://github.com/sgl-project/sglang/issues/31766) [Bug] fd exhaustion on the prefill side
- [#34399](https://github.com/sgl-project/sglang/issues/34399) [Bug] Paged KV allocator launches allocation kernels before checking OOM
- [#29998](https://github.com/sgl-project/sglang/issues/29998) [Bug] runai_streamer load-format silently corrupts GLM-5.2 (glm_moe_dsa) weights under TP8 — loads clean, generates token-0 garbage
- [#27937](https://github.com/sgl-project/sglang/issues/27937) [Failure Tracker] PR Test (AMD)
- [#34675](https://github.com/sgl-project/sglang/issues/34675) [Bug] DP-aware routing rank is dropped for OpenAI Responses API
- [#34677](https://github.com/sgl-project/sglang/issues/34677) [Bug] Streaming: one unknown tool name discards or corrupts the other tool calls in the same parallel batch
- [#42070](https://github.com/sgl-project/sglang/issues/42070) [Bug] HiCacheFile scans the whole store directory on every existence check, so the scheduler stalls as the store grows
- [#42981](https://github.com/sgl-project/sglang/issues/42981) [AMD] Fused FP8 prefix-valid commit kernel disagrees with eager on float8_e4m3fnuz overflow
- [#41841](https://github.com/sgl-project/sglang/issues/41841) [Bug] Scheduler stalls with no running requests because batch_is_full is not reset (v0.5.20)
- [#43746](https://github.com/sgl-project/sglang/issues/43746) [CI] test_model_fast_paths.py::TestQwenImageModulationCache fails on main: no attribute '_shard_modulation'

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,967 · **Open issues:** 2,545 · **Last push:** <1h ago

On October 13, 2026, llama.cpp released several updates with notable improvements. Version b11577 addressed a problem in the vllm d3 multi sequence case, while b11576 enhanced the no-cache attention mechanism by padding the KV dimension to 256. Additionally, b11575 resolved a metal tensor kernel error for large tensors, and b11574 optimized short-row handling for CPY/CONCAT on hexagon. Significant new issues were reported, including a CUDA illegal memory access on RTX 5090 involving the MUL_MAT operation, showcasing potential challenges for users with specific hardware configurations.

#### 🚀 New Releases
- [b11577](https://github.com/ggml-org/llama.cpp/releases/tag/b11577) b11577
- [b11576](https://github.com/ggml-org/llama.cpp/releases/tag/b11576) b11576
- [b11575](https://github.com/ggml-org/llama.cpp/releases/tag/b11575) b11575
- [b11574](https://github.com/ggml-org/llama.cpp/releases/tag/b11574) b11574
- [b11573](https://github.com/ggml-org/llama.cpp/releases/tag/b11573) b11573
- [b11572](https://github.com/ggml-org/llama.cpp/releases/tag/b11572) b11572
- [b11571](https://github.com/ggml-org/llama.cpp/releases/tag/b11571) b11571
- [b11570](https://github.com/ggml-org/llama.cpp/releases/tag/b11570) b11570
- [b11569](https://github.com/ggml-org/llama.cpp/releases/tag/b11569) b11569
- [b11567](https://github.com/ggml-org/llama.cpp/releases/tag/b11567) b11567

#### ✅ Merged PRs
- [#30324](https://github.com/ggml-org/llama.cpp/pull/30324) ci : build OpenVINO releases with GGML_NATIVE=OFF and CPU backend variants
- [#30401](https://github.com/ggml-org/llama.cpp/pull/30401) ci : fix OpenVINO download links in release notes
- [#30408](https://github.com/ggml-org/llama.cpp/pull/30408) model: fix vllm d3 multi seq case
- [#30416](https://github.com/ggml-org/llama.cpp/pull/30416) graph: pad the KV dimension of the no-cache attention to 256
- [#28748](https://github.com/ggml-org/llama.cpp/pull/28748) metal: fix metal tensor kernel_mul_mm error for large tensor
- [#29877](https://github.com/ggml-org/llama.cpp/pull/29877) vulkan: pack FMA for f16 accumulation, no dot product op
- [#30341](https://github.com/ggml-org/llama.cpp/pull/30341) hexagon: optimize CPY/CONCAT — round 3, short-rows edition
- [#30378](https://github.com/ggml-org/llama.cpp/pull/30378) model: support vllm decision 2 model
- [#30383](https://github.com/ggml-org/llama.cpp/pull/30383) model: support vllm d3 models
- [#30373](https://github.com/ggml-org/llama.cpp/pull/30373) metal : fix mul_mat_id with duplicate ids
- [#30299](https://github.com/ggml-org/llama.cpp/pull/30299) tests : link each test against only the libraries it uses
- [#30095](https://github.com/ggml-org/llama.cpp/pull/30095) examples : fix draft sampling and rejection handling
- [#30329](https://github.com/ggml-org/llama.cpp/pull/30329) llama : report compute graph reallocations during inference
- [#29898](https://github.com/ggml-org/llama.cpp/pull/29898) ui: fix text attachment preview overflow
- [#29338](https://github.com/ggml-org/llama.cpp/pull/29338) sycl: guard DMMV reads at row tails
- [#30164](https://github.com/ggml-org/llama.cpp/pull/30164) vulkan: use ternary expressions to avoid switch lowering for CM2 quant block size
- [#30014](https://github.com/ggml-org/llama.cpp/pull/30014) ggml: Change default visibility of symbols to hidden
- [#30326](https://github.com/ggml-org/llama.cpp/pull/30326) vulkan: fix buffer logging on 32-bit platforms after source split
- [#30035](https://github.com/ggml-org/llama.cpp/pull/30035) hexagon: optimize q2_k bpw and activation
- [#30305](https://github.com/ggml-org/llama.cpp/pull/30305) hexagon: add IM2COL_3D

#### 🐛 New Issues
- [#30398](https://github.com/ggml-org/llama.cpp/issues/30398) Eval bug: EmbeddingGemma 2 with -fa on runs attention on the CPU unless the token count is a multiple of 256 `bug` 💬1
- [#30428](https://github.com/ggml-org/llama.cpp/issues/30428) Misc. bug: [SYCL] GET_ROWS returns wrong values or NaN on weights reordered by MUL_MAT `bug-unconfirmed`
- [#30424](https://github.com/ggml-org/llama.cpp/issues/30424) Misc. bug: `llama-fit-params` does not accept --spec-type, -md, -ngld arguments `bug-unconfirmed`
- [#30422](https://github.com/ggml-org/llama.cpp/issues/30422) pooled embeddings / `--reranking` with decoder models copy n_vocab logits for every token to the host (~6x slower rerank) `bug-unconfirmed`
- [#30419](https://github.com/ggml-org/llama.cpp/issues/30419) Grammar stack dies on `? (30)` with a json_schema response_format under --spec-type draft-mtp, no tools involved
- [#30406](https://github.com/ggml-org/llama.cpp/issues/30406) Misc. bug: ggml_backend_sched_new reserves a buffer sized for the graph's maximum capacity, which counts towards the commit charge on Windows `bug-unconfirmed`
- [#30404](https://github.com/ggml-org/llama.cpp/issues/30404) Eval bug: CUDA illegal memory access (MUL_MAT) on RTX 5090 with cohere2moe `bug-unconfirmed`
- [#30402](https://github.com/ggml-org/llama.cpp/issues/30402) Eval bug: vllm-d3 answers change when a shorter request shares the batch (split_equal splits non-causal prompts) `bug-unconfirmed`
- [#30396](https://github.com/ggml-org/llama.cpp/issues/30396) Eval bug: draft-mtp with Qwen3.6-35B-A3B on 2x RTX 5060 Ti (layer split): "CUDA error: the launch timed out" in MTP path at ~88K context `bug-unconfirmed`
- [#30395](https://github.com/ggml-org/llama.cpp/issues/30395) Eval bug: draft-mtp with Qwen3.6-35B-A3B on 2x RTX 5060 Ti (layer split): "CUDA error: the launch timed out" in MTP path at ~88K context `bug-unconfirmed`
- [#30394](https://github.com/ggml-org/llama.cpp/issues/30394) Eval bug: draft-mtp with Qwen3.6-35B-A3B on 2x RTX 5060 Ti (layer split): "CUDA error: the launch timed out" in MTP path at ~88K context `bug-unconfirmed`
- [#30391](https://github.com/ggml-org/llama.cpp/issues/30391) Misc. bug: flash_attn.comp cols_per_thread is 0 on Adreno A750 `bug-unconfirmed`
- [#30388](https://github.com/ggml-org/llama.cpp/issues/30388) llama batch incompatible sequence check is not covered `bug-unconfirmed`
- [#30381](https://github.com/ggml-org/llama.cpp/issues/30381) vulkan: #30145 (rms_norm wg-count fix) costs ~3% pp512 on Intel Arc B580
- [#30377](https://github.com/ggml-org/llama.cpp/issues/30377) gpt-oss-120b: tools + response_format json_schema combined -> model loops in reasoning channel, never emits tool call (terminates at token budget, tool_calls=0)
- [#30369](https://github.com/ggml-org/llama.cpp/issues/30369) llama-server: object-form named `tool_choice` still falls back to `auto` (re-filing #26535, closed as stale)
- [#30368](https://github.com/ggml-org/llama.cpp/issues/30368) Eval bug: qwen4exp (Qwen3.8-Flash-Next) with `--spec-type draft-mtp` + `--kv-unified` + `--parallel N>1` fails every request with `decode: Compute error`
- [#30366](https://github.com/ggml-org/llama.cpp/issues/30366) Misc. bug: server: slot KV is reused after the global lora config changes `bug-unconfirmed`

#### 🔒 Closed Issues
- [#26674](https://github.com/ggml-org/llama.cpp/issues/26674) Eval bug: Gemma 4 tg128 performance on RTX 5060 Ti (Blackwell) appears abnormally low compared to other architectures. Is this expected?
- [#28726](https://github.com/ggml-org/llama.cpp/issues/28726) Eval bug: OpenVINO backend crashes with STATUS_ILLEGAL_INSTRUCTION due to AVX-512
- [#25117](https://github.com/ggml-org/llama.cpp/issues/25117) DFlash performance regression on AMD APU + quantized MoE target: ~2x slower than baseline
- [#27819](https://github.com/ggml-org/llama.cpp/issues/27819) DFlash2 is not working with `--split-mode tensor`
- [#27717](https://github.com/ggml-org/llama.cpp/issues/27717) Eval bug: --n-cpu-moe below a threshold crashes MTP draft model load with 'invalid vector subscript' (Nemotron-3.5-Lightning-30B-A3B)
- [#26894](https://github.com/ggml-org/llama.cpp/issues/26894) Eval bug: DFlash drafter fails to bind (vector::_M_range_check) when target GGUF encodes attention.sliding_window_pattern as an array — Muse-Glimmer-30B official GGUF
- [#27473](https://github.com/ggml-org/llama.cpp/issues/27473) Compile bug: Metal tensor API silently inert on M5+/A19+ — MTLCompileOptions.languageVersion never set
- [#27893](https://github.com/ggml-org/llama.cpp/issues/27893) Feature Request: Ignore sampling CLI arg for Anthropic endpoint (local Claude Code)
- [#30000](https://github.com/ggml-org/llama.cpp/issues/30000) Eval bug: Vulkan prompt processing 16-19% slower for Q8_0 on RTX 5060 Ti (NV_coopmat2) since #25773
- [#29975](https://github.com/ggml-org/llama.cpp/issues/29975) Eval bug: llama-speculative changes the distribution at temp > 0
- [#26749](https://github.com/ggml-org/llama.cpp/issues/26749) Eval bug: qwen3 asr outputs `asr_text` which clients do not expect and cannot handle
- [#27677](https://github.com/ggml-org/llama.cpp/issues/27677) Misc. bug: Hexagon session fails when /vendor/lib64 is on LD_LIBRARY_PATH (Termux, SM8850)
- [#27892](https://github.com/ggml-org/llama.cpp/issues/27892) Eval bug: CLIP graph uses unsupported operators by the backend ( IM2COL: type = f32, ne = [4096 16 16 1])
- [#27976](https://github.com/ggml-org/llama.cpp/issues/27976) Misc. bug: prune-layers updates the block_count but not the per-layer array metadata which causes the output to not load.
- [#27938](https://github.com/ggml-org/llama.cpp/issues/27938) Feature Request: support Tencent/WeMM-Embedding multi-modal embedding model
- [#27982](https://github.com/ggml-org/llama.cpp/issues/27982) Compile bug: ARM64 GCC build fails with GGML_NATIVE=ON (dotprod/i8mm on armv8-a base)
- [#29970](https://github.com/ggml-org/llama.cpp/issues/29970) Eval bug: Qwen3.6-35B-A3B (qwen35moe) cannot read text in images — sees shapes/colors, misreads letters/digits; same on CPU, all quants, all projectors, latest master
- [#30398](https://github.com/ggml-org/llama.cpp/issues/30398) Eval bug: EmbeddingGemma 2 with -fa on runs attention on the CPU unless the token count is a multiple of 256
- [#29891](https://github.com/ggml-org/llama.cpp/issues/29891) Misc. bug: large pasted text preview overflowing in the webui

### Ollama (`ollama/ollama`)

**Stars:** 182,934 · **Open issues:** 4,263 · **Last push:** 1h ago

Ollama released version v0.40.4-rc0, incorporating significant updates such as the upgrade of llama.cpp to b11521 for enhanced decision models and the introduction of EmbeddingGemma 2. In addition, the server received improvements for reusing verified manifests and loaded models in inference routes, while the MLX module compacted restored recurrent state after speculative rollback. Several merged pull requests also addressed documentation updates, system enhancements, and a fix for multimodal embedding load issues. Among new issues, the most notable is #18968, which reports a performance drop of 25% to 30% across all models, drawing attention from the community.

#### 🚀 New Releases
- [v0.40.4-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.4-rc0) v0.40.4

#### ✅ Merged PRs
- [#18973](https://github.com/ollama/ollama/pull/18973) server: fix multimodal embedding load with small num_ctx
- [#18963](https://github.com/ollama/ollama/pull/18963) docs: update SECURITY.md
- [#18960](https://github.com/ollama/ollama/pull/18960) Revert "docs: restructuring"
- [#18828](https://github.com/ollama/ollama/pull/18828) docs: restructuring
- [#18956](https://github.com/ollama/ollama/pull/18956) MLX, MLX-C: version bump
- [#18887](https://github.com/ollama/ollama/pull/18887) launch: include installed models in Codex /model picker
- [#18955](https://github.com/ollama/ollama/pull/18955) mlx: compact restored recurrent state after speculative rollback
- [#18947](https://github.com/ollama/ollama/pull/18947) server: reuse verified manifests and loaded models in inference routes
- [#18917](https://github.com/ollama/ollama/pull/18917) llama: update llama.cpp to b11521 for decision models and EmbeddingGemma 2

#### 🐛 New Issues
- [#18952](https://github.com/ollama/ollama/issues/18952) Systemprompt KV cache warm-up for Ollama `feature request` 💬2
- [#18954](https://github.com/ollama/ollama/issues/18954) Windows: GPU discovery subprocesses can flash console windows; suppress consoles at all three probe launches 💬2
- [#18968](https://github.com/ollama/ollama/issues/18968) Ollama performs between 25% and 30% less in all models `bug` 💬1
- [#18958](https://github.com/ollama/ollama/issues/18958) The size issue (1.5gb)?? `feature request` 💬1
- [#18971](https://github.com/ollama/ollama/issues/18971) embeddinggemma-2:740m (and other tags) missing MLX badge on ollama.com `ollama.com` `mlx`
- [#18966](https://github.com/ollama/ollama/issues/18966) panic: mlx: Maximum threads per threadgroup is 896 but requested 960 for kernel sdpa_vector_2pass_1_bfloat16_t_256_256_nomask_qnt_c_nosinks_128 `bug`

#### 🔒 Closed Issues
- [#18521](https://github.com/ollama/ollama/issues/18521) Support Prism ternary GGUFs (PQ2_0 type 142 / PTQ1_0 type 143): import fails with unsupported tensor size overflows
- [#13388](https://github.com/ollama/ollama/issues/13388) v0.13.1+ Breaks Deepseek R1 671B system messages
- [#18846](https://github.com/ollama/ollama/issues/18846) Version 0.40.0 stops with "Maximum threads" error after a minute.
- [#18856](https://github.com/ollama/ollama/issues/18856) MLX runner panic with qwen3.6:35b-mlx in Ollama 0.40.x — regression from 0.35.0
- [#18620](https://github.com/ollama/ollama/issues/18620) MLX runner: each request that ends in a tool call leaks ~0.43 GiB (three recurrent snapshots) outside the prefix-cache budget (qwen3.6:27b-mlx, 0.34.2 and 0.34.4)
- [#18869](https://github.com/ollama/ollama/issues/18869) ffn_down_exps.weight size overflows
- [#18940](https://github.com/ollama/ollama/issues/18940) [macOS/Metal] MLX SDPA kernel panic on M2 Max: Maximum threads per threadgroup is 896 but requested 960 (Qwen 3.8 / Gemma 4)

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,103 · **Open issues:** 5,465 · **Last push:** <1h ago

On October 13, 2026, there were no new releases for LiteLLM. However, several important pull requests were merged, including a fix for the Gemini context cache that now bills creation tokens correctly (#46144) and an enhancement to the UI for the Decisions playground to present a clearer request hierarchy (#45981). Additionally, the newly added gemini-robotics-er-2-preview feature for Vertex AI (#46126) enhances model capabilities. Notably, a bug has been reported concerning the websearch_interception leaking max_parallel_requests slots during specific streaming requests, which has garnered attention from the community (#46093).

#### ✅ Merged PRs
- [#46144](https://github.com/BerriAI/litellm/pull/46144) fix(gemini): bill context cache creation tokens from cachedContents responses
- [#46141](https://github.com/BerriAI/litellm/pull/46141) test(cost): add Bedrock Converse Claude 5 /v1/responses bridge cost parity pairs
- [#46130](https://github.com/BerriAI/litellm/pull/46130) test(cost): add BridgeCostParityTestCase with a gpt-6-sol /v1/messages to Responses pair
- [#46138](https://github.com/BerriAI/litellm/pull/46138) test(cost): give azure gpt-6 rows supports_none_reasoning_effort and drop the known_bug tag
- [#46137](https://github.com/BerriAI/litellm/pull/46137) test(cost): add gpt-6-luna, gpt-6-astra and gpt-6.1-sol /v1/messages to Responses bridge cost parity pairs
- [#45981](https://github.com/BerriAI/litellm/pull/45981) feat(ui): give the Decisions playground a clearer request hierarchy
- [#46135](https://github.com/BerriAI/litellm/pull/46135) fix(cost): bill azure_ai claude web searches under deployment-owned pricing ids
- [#46133](https://github.com/BerriAI/litellm/pull/46133) test(cost): add tier 1 chat tool, reasoning, no-usage stream, upstream error and rollup cost cases
- [#46021](https://github.com/BerriAI/litellm/pull/46021) fix(gemini): price tool-use prompt tokens as input
- [#46128](https://github.com/BerriAI/litellm/pull/46128) fix(bedrock): bill the regional row for inference-profile ARNs that embed a cross-region prefix
- [#46068](https://github.com/BerriAI/litellm/pull/46068) feat(ui): add Home entry and independent LiteAdmin chat tabs
- [#46126](https://github.com/BerriAI/litellm/pull/46126) feat(vertex-ai): add gemini-robotics-er-2-preview
- [#46111](https://github.com/BerriAI/litellm/pull/46111) fix(databricks): accept service_tier on requests and carry the served tier on responses
- [#46124](https://github.com/BerriAI/litellm/pull/46124) test(cost): add tier 1 Claude 5 and gpt-6 native cost cases
- [#46120](https://github.com/BerriAI/litellm/pull/46120) fix(cost): bill custom priced deployments at their own rates over the upstream x-litellm-response-cost header
- [#46114](https://github.com/BerriAI/litellm/pull/46114) fix(cost): bill azure_ai claude web searches per server_tool_use request
- [#45823](https://github.com/BerriAI/litellm/pull/45823) test(rust): add Messages live provider harness
- [#45698](https://github.com/BerriAI/litellm/pull/45698) feat(rust): settle EdenAI Messages reported cost
- [#46112](https://github.com/BerriAI/litellm/pull/46112) fix(cost_calculator): apply the anthropic fast multiplier to cache cost breakdown
- [#46109](https://github.com/BerriAI/litellm/pull/46109) fix(responses): number bridged chat tool calls 0, 1 and pin the remaining bridge shapes
- [#43692](https://github.com/BerriAI/litellm/pull/43692) feat(proxy): let personal keys inherit model access from the owner's current teams
- [#46082](https://github.com/BerriAI/litellm/pull/46082) fix(anthropic): carry cache_control to prompt_cache_breakpoint on the /v1/messages to Responses bridge
- [#46099](https://github.com/BerriAI/litellm/pull/46099) fix(responses): fold bridged Responses output into one chat choice
- [#46086](https://github.com/BerriAI/litellm/pull/46086) fix(guardrails): honor decision model streaming buffering
- [#45880](https://github.com/BerriAI/litellm/pull/45880) feat(otel): let a team or key excluded_services override the global setting for its OTel v2 destination
- [#46094](https://github.com/BerriAI/litellm/pull/46094) feat(zscaler_ai_guard): send the request user to AI Guard
- [#43070](https://github.com/BerriAI/litellm/pull/43070) fix(proxy): enforce the personal max_budget on proxy-admin JWTs
- [#43335](https://github.com/BerriAI/litellm/pull/43335) feat(cost): support provider/model-pattern keys in cost_discount_config
- [#44985](https://github.com/BerriAI/litellm/pull/44985) feat(sagemaker)!: inference components and OpenAI-compatible embeddings
- [#46098](https://github.com/BerriAI/litellm/pull/46098) fix(ui): show the legacy evaluation mode as decisions in the Model Hub and guardrail picker
- [#45857](https://github.com/BerriAI/litellm/pull/45857) fix(ui): lock config-owned model group aliases on the alias tab
- [#45861](https://github.com/BerriAI/litellm/pull/45861) fix(ui): gray out router settings and fallbacks that config.yaml owns
- [#46089](https://github.com/BerriAI/litellm/pull/46089) docs: point the GCP one-click deploy at the terraform-google-litellm mirror
- [#45860](https://github.com/BerriAI/litellm/pull/45860) fix(proxy): refuse /fallback writes to a fallbacks list set in config.yaml
- [#44700](https://github.com/BerriAI/litellm/pull/44700) feat(providers): add CoralBricks as a native provider
- [#46088](https://github.com/BerriAI/litellm/pull/46088) fix(ci): wait for SIGSTOP to take effect before handing back a suspended proxy process
- [#41747](https://github.com/BerriAI/litellm/pull/41747) fix(bedrock_mantle): map the OpenAI-shaped context overflow envelope too
- [#45904](https://github.com/BerriAI/litellm/pull/45904) feat(decisions): bill decisions and systemone from _decisions cost map fields
- [#45886](https://github.com/BerriAI/litellm/pull/45886) fix(mcp)!: preserve scopes during managed OAuth reauthorization
- [#45881](https://github.com/BerriAI/litellm/pull/45881) fix(proxy): skip failure rows for expired Admin UI session keys on dashboard info routes
- [#46077](https://github.com/BerriAI/litellm/pull/46077) test(e2e): rename load to perf and consolidate the opt-in into E2E_PERF_TESTS
- [#45811](https://github.com/BerriAI/litellm/pull/45811) feat(decisions): support Clef-omni audio and video
- [#45107](https://github.com/BerriAI/litellm/pull/45107) fix(gemini): do not inject temperature for Gemini 3+ models when omitted
- [#46072](https://github.com/BerriAI/litellm/pull/46072) feat(model_prices): add meta/muse-wonder-1.0
- [#46061](https://github.com/BerriAI/litellm/pull/46061) feat(vertex_ai): add semantic-ranker rerank pricing to the cost map
- [#45842](https://github.com/BerriAI/litellm/pull/45842) fix(model-prices): add OpenAI dated snapshots, fix Perplexity decider pricing, absorb Together Tev1 cache price removal
- [#46058](https://github.com/BerriAI/litellm/pull/46058) refactor(bedrock): rename is_claude_4_5_on_bedrock to supports_bedrock_prompt_cache_ttl
- [#46013](https://github.com/BerriAI/litellm/pull/46013) chore: drop Greptile from the PR template, AGENTS.md and CI
- [#46057](https://github.com/BerriAI/litellm/pull/46057) feat(fireworks_ai): add Decisions support for accounts/fireworks/routers/rune on /v1/systemone and /v1/decisions
- [#45855](https://github.com/BerriAI/litellm/pull/45855) fix(managed_files): enforce input file ownership on batch and fine-tuning create
- [#45902](https://github.com/BerriAI/litellm/pull/45902) test(integration): bill Decisions spend from captured provider responses on /v1/decisions and /v1/systemone
- [#46037](https://github.com/BerriAI/litellm/pull/46037) test(integration): cut CircleCI proxy boot time with concurrent worker stacks and single-worker test proxies
- [#46031](https://github.com/BerriAI/litellm/pull/46031) test(integration): give chaos and timing tests a harness API and gate raw signals
- [#46034](https://github.com/BerriAI/litellm/pull/46034) ci(integration): run integration shards on large machines and size workers per suite
- [#46027](https://github.com/BerriAI/litellm/pull/46027) test(integration): isolate every multi-worker integration suite by default
- [#46026](https://github.com/BerriAI/litellm/pull/46026) ci: move redis-compat and MCP unit suites from CircleCI to GitHub Actions
- [#46030](https://github.com/BerriAI/litellm/pull/46030) test(integration): migrate before timed owned proxy launch and gate credential probe on every worker
- [#46025](https://github.com/BerriAI/litellm/pull/46025) test(integration): give the ownership proxy its own DB pool headroom
- [#46019](https://github.com/BerriAI/litellm/pull/46019) fix(tests): retry owned_redis on a port already served in the target namespace
- [#46020](https://github.com/BerriAI/litellm/pull/46020) test(mcp): attribute passthrough probe traffic to the caller instead of the whole peer log

#### 🐛 New Issues
- [#46093](https://github.com/BerriAI/litellm/issues/46093) [Bug]: websearch_interception leaks one max_parallel_requests slot per streamed /v1/messages request carrying a web_search tool `llm translation` `claude code` 💬2
- [#46071](https://github.com/BerriAI/litellm/issues/46071) [Bug]: test_cold_concurrent_schema_validation_accepts_valid_arguments is flaky on main, fails ~25% of runs 💬2
- [#46047](https://github.com/BerriAI/litellm/issues/46047) [Bug]: Streaming 500s with "unsupported operand type(s) for +: 'NoneType' and 'int'" when a backend chunk omits choices[].index `llm translation` 💬2
- [#45998](https://github.com/BerriAI/litellm/issues/45998) [Bug]: is_gpt_reasoning_series_name checks raw model path instead of normalized name, misclassifying models under gpt-5/gpt-6 routing prefixes `llm translation` 💬2
- [#46117](https://github.com/BerriAI/litellm/issues/46117) Anthropic document PDF is routed as an image URL for ChatGPT subscription provider `llm translation` 💬1
- [#46078](https://github.com/BerriAI/litellm/issues/46078) [Feature]: Option to send Cache-Control: no-store from SecurityHeadersMiddleware `enhancement` `llm translation` 💬1
- [#46107](https://github.com/BerriAI/litellm/issues/46107) [Bug]: per-page PDF token count (#45301) uses Anthropic pricing for every provider, so Router pre-call checks reject Gemini/OpenAI PDF requests the provider accepts `llm translation` 💬1
- [#46100](https://github.com/BerriAI/litellm/issues/46100) [Bug]: Cost map guard treats provider-info-sync PRs as human PRs, so the bot contract never runs `bug` `llm translation` 💬1
- [#46095](https://github.com/BerriAI/litellm/issues/46095) [Bug]: OpenRouter streaming chunks report the requested router name instead of the model OpenRouter served `bug` `llm translation` 💬1
- [#46103](https://github.com/BerriAI/litellm/issues/46103) [Bug]: Vertex AI claude-sonnet-5-5 response_format gets a 400 for forced tool_choice because a claude-3-sonnet stub model bypasses supports_forced_tool_use `llm translation` 💬1
- [#46074](https://github.com/BerriAI/litellm/issues/46074) [Bug]: /v1/messages forwards a forced tool_choice verbatim to models flagged supports_forced_tool_use: false (Opus/Sonnet 5.5); /chat/completions downgrades it `llm translation` 💬1
- [#46059](https://github.com/BerriAI/litellm/issues/46059) [Bug]: watsonx streamed usage is lost; the proxy reports its own token estimate instead `llm translation` 💬1
- [#46052](https://github.com/BerriAI/litellm/issues/46052) [Bug]: token_counter raises KeyError 'items' for array tool params without items -> /v1/messages/count_tokens 500 `llm translation` `claude code` 💬1
- [#46048](https://github.com/BerriAI/litellm/issues/46048) [Bug]: `bug` `llm translation` 💬1
- [#46043](https://github.com/BerriAI/litellm/issues/46043) [Bug]: proxy crashes at startup under `USE_DDTRACE=True` — ddtrace 4.11.0's mcp integration vs mcp 2.2.0 in v1.105.0 💬1
- [#46045](https://github.com/BerriAI/litellm/issues/46045) [Bug]: "ModuleNotFoundError: No module named 'mcp'" `bug` 💬1
- [#46038](https://github.com/BerriAI/litellm/issues/46038) [Bug] Azure Responses bridge inherits chat-era api-version, rejected by Azure (needs >= 2025-03-01-preview) `llm translation` 💬1
- [#46033](https://github.com/BerriAI/litellm/issues/46033) [Bug]: "Not all views exist in db" warning at startup although all 8 views exist in the `litellm` schema `bug` 💬1
- [#46010](https://github.com/BerriAI/litellm/issues/46010) [Feature]: How to log what model actually ended up using in a router which has multiple models and fallbacks? `enhancement` `llm translation` 💬1
- [#45999](https://github.com/BerriAI/litellm/issues/45999) [Bug]: Vertex AI text embeddings drop metadata.billableCharacterCount `bug` `llm translation` 💬1
- [#46146](https://github.com/BerriAI/litellm/issues/46146) [Bug]: /v1/responses silently drops the top-level `moderation` param, so OpenAI moderation never runs `bug` `llm translation`
- [#46142](https://github.com/BerriAI/litellm/issues/46142) [Bug]: Cross-thread import deadlock on first import — log filters resolve rust_bridge.catalog → types.secret_managers.main per record, then all logging breaks with KeyError: 'litellm'
- [#46118](https://github.com/BerriAI/litellm/issues/46118) [Feature]: smart mode and custom vocabulary for gemini-3.5-transcribe (gemini + vertex_ai) `llm translation`
- [#46116](https://github.com/BerriAI/litellm/issues/46116) [Feature]: Custom display ordering and sorting for Model Group Alias in Admin UI
- [#46087](https://github.com/BerriAI/litellm/issues/46087) [Bug]: Presidio output_parse_pii never restores streamed /v1/messages responses (Anthropic SSE routed through unified_guardrail) `llm translation` `claude code`
- [#46076](https://github.com/BerriAI/litellm/issues/46076) [Bug]: Management endpoints return raw database exception text in 500 responses `bug`
- [#46067](https://github.com/BerriAI/litellm/issues/46067) [Bug]: litellm_key reads a deleted key as present, and destroying it fails with 404 "No keys found" `bug`
- [#46062](https://github.com/BerriAI/litellm/issues/46062) [Feature]: Per-user ChatGPT subscription passthrough for Codex-compatible clients `llm translation`
- [#46060](https://github.com/BerriAI/litellm/issues/46060) [Bug]: import litellm fails on Python 3.15: sre_constants and sre_parse were removed `bug`
- [#46050](https://github.com/BerriAI/litellm/issues/46050) [Bug]: Reranker forcefully sets truncate to true for TEI `bug`
- [#46032](https://github.com/BerriAI/litellm/issues/46032) [Bug]: Responses API streaming: reasoning output_item.done has no encrypted_content, so replayed turns lose the signed thinking blocks `llm translation`
- [#46009](https://github.com/BerriAI/litellm/issues/46009) [Feature]: Add native GPT-Live support for OpenAI and Azure OpenAI `enhancement` `llm translation`
- [#46002](https://github.com/BerriAI/litellm/issues/46002) [Bug]: Router does not fail over to a healthy deployment on non-retryable 4xx errors `llm translation`

#### 🔒 Closed Issues
- [#15861](https://github.com/BerriAI/litellm/issues/15861) [Feature]: Enable Vector Store API routes and Vector Store Files API routes
- [#24483](https://github.com/BerriAI/litellm/issues/24483) [Bug]: Error when connecting to Minimax coding plan API: "Please carry the API secret key in the 'Authorization' field of the request header (1004)"
- [#41226](https://github.com/BerriAI/litellm/issues/41226) [Bug]: Proxy-admin JWT authentication bypasses personal max_budget
- [#38663](https://github.com/BerriAI/litellm/issues/38663) fix(gemini): do not inject temperature for Gemini 3 models when omitted
- [#26081](https://github.com/BerriAI/litellm/issues/26081) [Bug]: Pass-through endpoint registry grows unbounded causing CPU to reach 100%
- [#45991](https://github.com/BerriAI/litellm/issues/45991) [Bug]: Gemini tool-use prompt tokens are added to prompt_tokens but not billed
- [#45333](https://github.com/BerriAI/litellm/issues/45333) [Bug]: Gemini 3 provider always injects temperature=1.0; Google will reject sampling params on upcoming models
- [#31296](https://github.com/BerriAI/litellm/issues/31296) [Feature]: Inbound MCP OAuth: emit 401 + Protected Resource Metadata (RFC 9728) to enable client auto-discovery
- [#32330](https://github.com/BerriAI/litellm/issues/32330) MCP resources/read: binary (blob) resources returned as TextResourceContents — base64 string forwarded as text
- [#41861](https://github.com/BerriAI/litellm/issues/41861) Gemini explicit cache creation drops lifecycle usage; spend callbacks omit creation and storage accounting
- [#41834](https://github.com/BerriAI/litellm/issues/41834) [Bug]: Databricks service_tier is dropped in request translation, streaming, and pricing
- [#32184](https://github.com/BerriAI/litellm/issues/32184) [Bug]: Wrong max_output_tokens for Claude Haiku 4.5 in vertex_ai (8192) and openrouter (200000) catalog entries
- [#32193](https://github.com/BerriAI/litellm/issues/32193) [Feature]: Declarative error response mapping (config + SDK) for provider errors
- [#32306](https://github.com/BerriAI/litellm/issues/32306) [Bug]: Documented cosign verification fails for LiteLLM Docker image v1.91.0
- [#32318](https://github.com/BerriAI/litellm/issues/32318) [Bug]: cache related log are not generated even if LITELLM_LOG=DEBUG and set_verbose = true
- [#32341](https://github.com/BerriAI/litellm/issues/32341) [Feature]: Support x-grok-conv-id param for X-Ai Grok caching
- [#32369](https://github.com/BerriAI/litellm/issues/32369) [Bug]: _rotate_master_key skips callback_vars in verification tokens & teams — decryption errors after master key rotation (LIT-1531)
- [#32375](https://github.com/BerriAI/litellm/issues/32375) [Feature]: Key rotation UX — email alerts, SSO gate for auto-rotation, suppress misleading decrypt errors
- [#32639](https://github.com/BerriAI/litellm/issues/32639) [Bug]: Close Duplicates Workflow failing due to unhandled JSON
- [#44678](https://github.com/BerriAI/litellm/issues/44678) [Feature]: Add CoralBricks as a native provider
- [#41224](https://github.com/BerriAI/litellm/issues/41224) [Bug]: Vertex AI Unit Tests Fail Consistently
- [#39557](https://github.com/BerriAI/litellm/issues/39557) [Bug]: OSV Scan 03.09

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,901 · **Open issues:** 467 · **Last push:** <1h ago

On October 13, 2026, Unsloth released version v0.1.906-beta, introducing significant features including the ability for models to use the browser, allowing interactive activities like reading, clicking, and scrolling, and the launch of Qwen-Image-2.1-Turbo, which enhances image generation in just eight steps. Noteworthy merged pull requests included improvements to the Studio, such as enhanced support for various file types in the composer and adjustments to the LTX-2.5 framework for streamlined performance. However, the day also saw new challenges with several bug reports, notably the inability to export fine-tuned models and a failure in drag and drop functionality on the Unsloth Desktop, both of which are attracting user attention.

#### 🚀 New Releases
- [v0.1.906-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.906-beta) Browser Use + Qwen-Image-2.1-Turbo

#### ✅ Merged PRs
- [#13493](https://github.com/unslothai/unsloth/pull/13493) Studio: composer takes README-style files, dotfiles, Office templates and more media
- [#13513](https://github.com/unslothai/unsloth/pull/13513) Studio: never follow a symlink when linking a file into a tool workspace
- [#13516](https://github.com/unslothai/unsloth/pull/13516) Studio: seed LTX-2.5 fp8 / int8 loads from hosted pre-quantized DiTs
- [#13435](https://github.com/unslothai/unsloth/pull/13435) Studio: add --models-dir to unsloth studio for local model folders
- [#13488](https://github.com/unslothai/unsloth/pull/13488) Make UNSLOTH_STUDIO_KEEP_LEGACY=0 work through docker/run.sh
- [#13500](https://github.com/unslothai/unsloth/pull/13500) Studio: LTX-2.5 VAE fixture, catalog row and Video page defaults
- [#13509](https://github.com/unslothai/unsloth/pull/13509) studio: stronger light-mode Library card hover, centered time pill
- [#13426](https://github.com/unslothai/unsloth/pull/13426) Studio: composer accepts every document type chat with files parses
- [#13492](https://github.com/unslothai/unsloth/pull/13492) Studio: clip the browser page at the split handle while dragging it smaller
- [#13506](https://github.com/unslothai/unsloth/pull/13506) Studio: larger Browser use icon, more room and a shorter description in Settings
- [#13512](https://github.com/unslothai/unsloth/pull/13512) Update README.md
- [#13508](https://github.com/unslothai/unsloth/pull/13508) Studio: close the LTX-2.5 two-stage speed gaps in a shared multi-stage layer
- [#13494](https://github.com/unslothai/unsloth/pull/13494) tests: give each xdist worker one CPU share for torch
- [#13504](https://github.com/unslothai/unsloth/pull/13504) Studio: nudge the dictate mic down 1px instead of 2px
- [#13503](https://github.com/unslothai/unsloth/pull/13503) studio: keep open thinking sized when the chat pane narrows
- [#13495](https://github.com/unslothai/unsloth/pull/13495) Studio: optically centre the annotate button's icon
- [#10693](https://github.com/unslothai/unsloth/pull/10693) Studio: Open WebUI llama.cpp residency and explicit load/unload (#10610)
- [#13496](https://github.com/unslothai/unsloth/pull/13496) Fix the three Backend CI reds LTX-2.5 left on main
- [#13387](https://github.com/unslothai/unsloth/pull/13387) studio: restore file drops and composer drag feedback
- [#13472](https://github.com/unslothai/unsloth/pull/13472) Baseline the unsloth-zoo 2026.10.4 and trl 1.15.0 findings after review
- [#13463](https://github.com/unslothai/unsloth/pull/13463) Studio: run LTX-2.5 on the Video page
- [#13462](https://github.com/unslothai/unsloth/pull/13462) Format two test files that #13378 and #13437 left off the formatter's fixed point
- [#13422](https://github.com/unslothai/unsloth/pull/13422) Studio: list each on-disk quant of a multi-quant GGUF in GET /v1/models
- [#13457](https://github.com/unslothai/unsloth/pull/13457) Codex device-poll tests: fake asyncio.sleep only on the test's own thread
- [#13406](https://github.com/unslothai/unsloth/pull/13406) Keep a user's UNSLOTH_RETURN_LOGITS=1 after for_inference() on FastModel
- [#13429](https://github.com/unslothai/unsloth/pull/13429) Studio: browser use follow-ups (safetensors nudge, date fields, disabled dropdowns, moved pages)
- [#13373](https://github.com/unslothai/unsloth/pull/13373) Keep uv, its cache and the uv-managed Python inside a custom UNSLOTH_STUDIO_HOME
- [#13424](https://github.com/unslothai/unsloth/pull/13424) Studio: keep Spark-TTS LoRA checkpoints exportable
- [#13449](https://github.com/unslothai/unsloth/pull/13449) test_trl_cap_sites: unsloth_zoo 2026.10.4 admits trl 1.15.0, end the deferral
- [#10712](https://github.com/unslothai/unsloth/pull/10712) fix: reshape noncontiguous gradients in fused LoRA backward
- [#13408](https://github.com/unslothai/unsloth/pull/13408) Accept bf16 tie-flips in the batched left-padded generation guard
- [#13219](https://github.com/unslothai/unsloth/pull/13219) fix(studio): show queued downloads consistently across media routes
- [#13445](https://github.com/unslothai/unsloth/pull/13445) Tests: catch up with four product changes that landed red on main
- [#13291](https://github.com/unslothai/unsloth/pull/13291) Studio: split DiffusionGemma across GPUs when one GPU cannot hold it
- [#10932](https://github.com/unslothai/unsloth/pull/10932) Unsloth Studio (AMD/Windows): import PyTorch before Triton to avoid WinError 126
- [#13412](https://github.com/unslothai/unsloth/pull/13412) Studio: retry from the Hub when a cached snapshot has no tokenizer files
- [#13416](https://github.com/unslothai/unsloth/pull/13416) Studio: keep emoji split across tokens in MLX replies
- [#13423](https://github.com/unslothai/unsloth/pull/13423) Studio: refuse a text-encoder GGUF picked as the image or video model
- [#13437](https://github.com/unslothai/unsloth/pull/13437) fix(studio): preserve chat search position on close
- [#13378](https://github.com/unslothai/unsloth/pull/13378) Studio: image-to-video for Wan2.2-TI2V-5B and LTX-2 / LTX-2.3
- [#13224](https://github.com/unslothai/unsloth/pull/13224) Studio: linked folders honour .gitignore, folder uploads in the browser, queued drops and retry for failed sources
- [#13409](https://github.com/unslothai/unsloth/pull/13409) Key triton < 3.4 driver module cache by Python version
- [#13433](https://github.com/unslothai/unsloth/pull/13433) Bump install.sh / install.ps1 pins to unsloth>=2026.10.4
- [#13410](https://github.com/unslothai/unsloth/pull/13410) Say when xformers is installed but cannot load, and how to fix it
- [#13431](https://github.com/unslothai/unsloth/pull/13431) Revert "Unsloth Studio / Desktop: colour a companion download's bar by model, text encoder and VAE" (#13112)
- [#13430](https://github.com/unslothai/unsloth/pull/13430) MLX diffusion backend: decode the sysctl chip name as UTF-8
- [#13372](https://github.com/unslothai/unsloth/pull/13372) Studio: let models use the browser panel
- [#13385](https://github.com/unslothai/unsloth/pull/13385) Padding-free rows for Gemma 4 image and audio SFT
- [#13175](https://github.com/unslothai/unsloth/pull/13175) Studio: pin sd.cpp to the mirror build with Windows CUDA, sharing llama.cpp's CUDA runtime
- [#13384](https://github.com/unslothai/unsloth/pull/13384) Gemma 4 packed SFT: efficient kernel for the 512-wide global layers, processor on text-only data
- [#13399](https://github.com/unslothai/unsloth/pull/13399) Windows installer: always build Studio on a uv-managed Python, never one already installed
- [#13383](https://github.com/unslothai/unsloth/pull/13383) Pack Qwen3.5 / Qwen3-Next hybrids by default with document boundaries in the linear-attention kernels
- [#13396](https://github.com/unslothai/unsloth/pull/13396) Studio setup: install causal-conv1d and mamba-ssm prebuilt wheels next to flash-attn
- [#13398](https://github.com/unslothai/unsloth/pull/13398) fix(studio): show original chat model in the header
- [#13415](https://github.com/unslothai/unsloth/pull/13415) Studio: keep syntax colour on settled thinking code in tilde, four-backtick and stopped fences
- [#13407](https://github.com/unslothai/unsloth/pull/13407) Studio: keep Data Recipe runs whose structured fields change type between rows
- [#13401](https://github.com/unslothai/unsloth/pull/13401) Studio: browser page zoom on desktop: zoom keys and clipping
- [#13400](https://github.com/unslothai/unsloth/pull/13400) Studio: keep the browser page below its toolbar while the split is dragged
- [#13392](https://github.com/unslothai/unsloth/pull/13392) FastLanguageModel.for_training: undo the UNSLOTH_RETURN_LOGITS=1 that generate() forces
- [#13326](https://github.com/unslothai/unsloth/pull/13326) Packed rows on sliding-window layers take varlen on the transformers path, plus opt-in FA4 / FA3 for packed training
- [#13376](https://github.com/unslothai/unsloth/pull/13376) Studio: Wan2.1 T2V 1.3B and 14B video families
- [#10635](https://github.com/unslothai/unsloth/pull/10635) Studio: document the intentional torch and torchcodec floor gap
- [#13350](https://github.com/unslothai/unsloth/pull/13350) Opt-in DDP batched_grad_copy (UNSLOTH_DDP_BATCHED_GRAD_COPY=1)
- [#13364](https://github.com/unslothai/unsloth/pull/13364) Allow offload_layers = "auto" under a DDP launch
- [#13379](https://github.com/unslothai/unsloth/pull/13379) Studio: opt-in MLX image engine for Apple Silicon (Z-Image)
- [#13356](https://github.com/unslothai/unsloth/pull/13356) Studio: refresh the context meter when a tool loop hands off to a tool
- [#13339](https://github.com/unslothai/unsloth/pull/13339) Studio: judge hosted pre-quant checkpoints before downloading them, and make the int8 fingerprint torchao-version-neutral
- [#13375](https://github.com/unslothai/unsloth/pull/13375) Studio MPS: opt-in fp16 compute with fixed headroom for Z-Image
- [#13370](https://github.com/unslothai/unsloth/pull/13370) Studio: refuse LTX-2.5 instead of loading it as LTX-2
- [#13369](https://github.com/unslothai/unsloth/pull/13369) Studio: sd.cpp on Macs, CPU backend on a paravirtual GPU and no direct conv on Metal
- [#13403](https://github.com/unslothai/unsloth/pull/13403) Sandbox delete test: only the chat's detached tree counts as the delete
- [#13313](https://github.com/unslothai/unsloth/pull/13313) Keep packed documents apart on Unsloth's own models (flash path, eval, cached eval) and match transformers' Mistral window
- [#10852](https://github.com/unslothai/unsloth/pull/10852) feat(dataprep): add audit_supervision, a pre-flight report of what an SFT dataset actually supervises
- [#10398](https://github.com/unslothai/unsloth/pull/10398) Studio: let a python/terminal call ask for a lower output cap
- [#13255](https://github.com/unslothai/unsloth/pull/13255) Perf/scroll performance
- [#13353](https://github.com/unslothai/unsloth/pull/13353) Studio: let a project run its tools in an existing local folder
- [#13374](https://github.com/unslothai/unsloth/pull/13374) Switch between training and inference mode in one tree walk
- [#13397](https://github.com/unslothai/unsloth/pull/13397) Studio: hide the response-details badge without a fade
- [#13256](https://github.com/unslothai/unsloth/pull/13256) Honor padding masks in Llama and Qwen3 cached attention
- [#13395](https://github.com/unslothai/unsloth/pull/13395) Tests: keep five tests off what the host has installed or downloaded
- [#13382](https://github.com/unslothai/unsloth/pull/13382) Studio: Working... placeholder with a soft glint
- [#13386](https://github.com/unslothai/unsloth/pull/13386) Studio: screen a quoted program path that cmd /c or start launches
- [#13393](https://github.com/unslothai/unsloth/pull/13393) Studio: classify the 10 new audio.cpp-gguf folders as needing a newer runtime
- [#13394](https://github.com/unslothai/unsloth/pull/13394) Revert "Studio: keep the composer expand button in the top corner when a file is attached"
- [#13302](https://github.com/unslothai/unsloth/pull/13302) Forward output head bias in GRPO policy scoring
- [#13357](https://github.com/unslothai/unsloth/pull/13357) Studio: add an opt-in setting to read replies aloud automatically
- [#13354](https://github.com/unslothai/unsloth/pull/13354) Studio: forward llama-server /metrics, /slots, /tokenize and /detokenize
- [#13380](https://github.com/unslothai/unsloth/pull/13380) Studio: torch 2.13 for new Linux aarch64 cu130 Python 3.13 installs, existing installs keep their torch
- [#13365](https://github.com/unslothai/unsloth/pull/13365) Studio: add an embedding device setting for RAG
- [#13351](https://github.com/unslothai/unsloth/pull/13351) Studio: optional detailed Live monitor with GPU load, temperature and power
- [#13359](https://github.com/unslothai/unsloth/pull/13359) Studio: per-account model allowlist for multi-user installs
- [#12839](https://github.com/unslothai/unsloth/pull/12839) Studio: let LAN access bind only the addresses you choose
- [#13311](https://github.com/unslothai/unsloth/pull/13311) Keep a user-set UNSLOTH_RETURN_LOGITS=1 across trainer.train()
- [#13363](https://github.com/unslothai/unsloth/pull/13363) Studio Hub: filter models by parameter count, context length and publisher
- [#13358](https://github.com/unslothai/unsloth/pull/13358) Studio: Deep Research Retry continues with the current time budget
- [#13377](https://github.com/unslothai/unsloth/pull/13377) studiobench: carry on with image_upload when the click opened the menu but timed out
- [#13366](https://github.com/unslothai/unsloth/pull/13366) Studio: upload files straight into a chat's folder
- [#13381](https://github.com/unslothai/unsloth/pull/13381) AsyncGRPO vLLM server: raise the listen backlog past socketserver's 5
- [#13347](https://github.com/unslothai/unsloth/pull/13347) Studio: stop refusing C:\path\app.exe as the blocked command '.'
- [#13039](https://github.com/unslothai/unsloth/pull/13039) Studio: run React and TypeScript code blocks as live previews
- [#13057](https://github.com/unslothai/unsloth/pull/13057) Train embed_tokens and lm_head in FastModel after add_new_tokens
- [#13279](https://github.com/unslothai/unsloth/pull/13279) Studio: keep a wrapper-less Gemma value a string unless JSON reads it as a number
- [#13276](https://github.com/unslothai/unsloth/pull/13276) Fix Q-GaLore checkpoint weights and stacked MoE grouping
- [#13177](https://github.com/unslothai/unsloth/pull/13177) Never train with a KV cache, so padding-free rows keep their document boundaries
- [#13360](https://github.com/unslothai/unsloth/pull/13360) Studio: make the web UI installable as a PWA
- [#13112](https://github.com/unslothai/unsloth/pull/13112) Unsloth Studio / Desktop: colour a companion download's bar by model, text encoder and VAE
- [#13355](https://github.com/unslothai/unsloth/pull/13355) Studio: show the compaction count in the context meter
- [#13086](https://github.com/unslothai/unsloth/pull/13086) Studio: bound a live Thinking block to its newest lines
- [#13260](https://github.com/unslothai/unsloth/pull/13260) Unsloth Desktop: redact dashed sk- keys, JWTs and JSON credentials in support diagnostics
- [#13362](https://github.com/unslothai/unsloth/pull/13362) Studio: lighter chat with files border in light mode
- [#13303](https://github.com/unslothai/unsloth/pull/13303) Keep modules_to_save trainable when reloading a LoRA checkpoint
- [#13348](https://github.com/unslothai/unsloth/pull/13348) Fall back instead of failing import when torchcodec cannot load its native library
- [#13324](https://github.com/unslothai/unsloth/pull/13324) Mask packed document boundary labels for TRL older than 0.23.1
- [#13352](https://github.com/unslothai/unsloth/pull/13352) Studio: stop a chat switch mid-reply crashing the app on a stale message index
- [#13335](https://github.com/unslothai/unsloth/pull/13335) Keep token fields when DiffusionTrainer converts a config
- [#13158](https://github.com/unslothai/unsloth/pull/13158) Studio: continue LoRA training from a saved adapter checkpoint
- [#13046](https://github.com/unslothai/unsloth/pull/13046) Studio: stop offscreen reasoning transcripts listening to thread scroll
- [#13251](https://github.com/unslothai/unsloth/pull/13251) fix(studio): expose tool settings for external models
- [#13310](https://github.com/unslothai/unsloth/pull/13310) Studio: load and run DeepSeek-OCR and DeepSeek-OCR-2
- [#10707](https://github.com/unslothai/unsloth/pull/10707) Studio: keep prompt cache on seeded tool-loop continuations
- [#13322](https://github.com/unslothai/unsloth/pull/13322) Save LoRA-GA adapters relative to the original base so they reload correctly

#### 🐛 New Issues
- [#13473](https://github.com/unslothai/unsloth/issues/13473) [Bug] Drag & Drop has stopped working on Unsloth Desktop `feature request` `bug` 💬3
- [#13388](https://github.com/unslothai/unsloth/issues/13388) It is not yet possible to run Gemma4e2b on Windows. `feature request` `bug` 💬3
- [#13464](https://github.com/unslothai/unsloth/issues/13464) [Feature] give option for notification when prompt is done/returned `feature request` 💬1
- [#13476](https://github.com/unslothai/unsloth/issues/13476) [Bug] `unsloth start opencode` fails with `Unrecognized flag: --model in command opencode` `feature request` `bug` 💬1
- [#13461](https://github.com/unslothai/unsloth/issues/13461) [Feature] Multi-image Jev/Clef decision model training and prediction on PyTorch/CUDA `feature request` 💬1
- [#13466](https://github.com/unslothai/unsloth/issues/13466) [Bug] Can't install Unsloth Studio `feature request` `bug` 💬1
- [#13411](https://github.com/unslothai/unsloth/issues/13411) [Bug] Export fails for fine-tuned unsloth/SparkTTS-0.5B: Unrecognized model (missing model_type in config.json) `feature request` `bug` 💬1
- [#13468](https://github.com/unslothai/unsloth/issues/13468) [Bug] Vision chat crashes on Gemma 4 E2B with CUDA device-side assert (NaN/inf in sampling), misreported as "out of memory" `feature request` `bug`
- [#13511](https://github.com/unslothai/unsloth/issues/13511) [Bug] Studio pairs --mmproj with --model-draft dflash; first image desyncs ctx_dft and poisons the slot
- [#13510](https://github.com/unslothai/unsloth/issues/13510) [Studio] MiniMax Music 3 generation always times out on Metal/CPU: MUSIC_SPECS["minimax_music3"] has no rtf, so the timeout heuristic uses the CUDA-calibrated 4.0 default
- [#13460](https://github.com/unslothai/unsloth/issues/13460) [Feature] Use Local command MCPs when Remote Access is enabled `feature request`
- [#13459](https://github.com/unslothai/unsloth/issues/13459) [Feature] Fine Tune Gemma 4 MTP Drafters `feature request`
- [#13458](https://github.com/unslothai/unsloth/issues/13458) [Bug] Spark-TTS training fails on BiCodec tokenizer load with FileNotFoundError ('...\None\config.yaml') `feature request` `bug`
- [#13453](https://github.com/unslothai/unsloth/issues/13453) [Feature] allow manual compact conversation `feature request`
- [#13450](https://github.com/unslothai/unsloth/issues/13450) [Feature] allow per-conversation picked model / allow more than 1 model in use `feature request`
- [#13418](https://github.com/unslothai/unsloth/issues/13418) [Feature] Studio: precision picker for MLX repos that keep each quant in a subfolder (2/4/6/8-bit), like LM Studio
- [#13391](https://github.com/unslothai/unsloth/issues/13391) [Feature] Localize chat welcome greetings into i18n locale files `feature request`
- [#13367](https://github.com/unslothai/unsloth/issues/13367) [Feature] Add guidance for supervised overnight local training

#### 🔒 Closed Issues
- [#3071](https://github.com/unslothai/unsloth/issues/3071) [Bug] os.environ["UNSLOTH_RETURN_LOGITS"] = "1" becomes unset to "0" once I start to train
- [#8488](https://github.com/unslothai/unsloth/issues/8488) [Feature] Support multiple servers with different loaded models and llama.cpp configurations
- [#2937](https://github.com/unslothai/unsloth/issues/2937) OOM when finetuning Qwen2.5 72B 4bit with context length of 32k
- [#10769](https://github.com/unslothai/unsloth/issues/10769) [Bug] Unsloth Desktop Large Codeblocks Causes Lots of Lag in Interface
- [#6958](https://github.com/unslothai/unsloth/issues/6958) [Bug] [studio] Cannot train LoftQ on qwen2.5-derived model: "expected str, bytes, or path-like object, not NoneType"
- [#8594](https://github.com/unslothai/unsloth/issues/8594) [Bug] Unsloth Desktop App (macOS) text encoding errors
- [#2942](https://github.com/unslothai/unsloth/issues/2942) [Bug] Fine-tuned unsloth/whisper-large-v3 Performs Poorly Compared to Default Model (on Persian)
- [#5919](https://github.com/unslothai/unsloth/issues/5919) Customizer Unsloth to fine-tune a model of this architecture: Model( (backbone): TransformerDecoder() )
- [#2963](https://github.com/unslothai/unsloth/issues/2963) [Bug] Unsloth: vllm_process failed to load!
- [#10288](https://github.com/unslothai/unsloth/issues/10288) [Bug] "tapClientLookup: Index 1 out of bounds (length: 0)" & "MessagePartText can only be used inside text or reasoning message parts" & "Duplicate key toolCallId"
- [#2760](https://github.com/unslothai/unsloth/issues/2760) [Bug] SystemError: PY_SSIZE_T_CLEAN macro must be defined for '#' formats
- [#9430](https://github.com/unslothai/unsloth/issues/9430) [Bug] Failed to load ggml-org/sesame-csm-1b-GGUF
- [#2955](https://github.com/unslothai/unsloth/issues/2955) [Bug] When fine-tuning Qwen3 , an 'deallocating None'error occurs after few minutes: Conflict Between Gradient Checkpointing and Memory Management
- [#6046](https://github.com/unslothai/unsloth/issues/6046) cpu spikes 100% while token generation windows please fix
- [#8360](https://github.com/unslothai/unsloth/issues/8360) MiniMax M3 GGUF fails to load: missing indexer.head_count metadata
- [#12303](https://github.com/unslothai/unsloth/issues/12303) [Feature] Auto read-aloud after response completes
- [#11096](https://github.com/unslothai/unsloth/issues/11096) [Feature] Upload/download files in the sandbox
- [#10698](https://github.com/unslothai/unsloth/issues/10698) [Bug] Possible Regression: Entire Context Being Reprocessed Slowly After Every Tool Call (With Set Seed)
- [#12589](https://github.com/unslothai/unsloth/issues/12589) [Feature] Add Unsloth Power Live Monitor Verbose Mode and add Power Monitor
- [#5124](https://github.com/unslothai/unsloth/issues/5124) [Bug] Gemma4-31B-it repeats itself most of the time, endlessly repeating the same token
- [#9340](https://github.com/unslothai/unsloth/issues/9340) [Bug] Specific Quantization of the model is not listed in Model List API
- [#3005](https://github.com/unslothai/unsloth/issues/3005) Qwen3 reasoning ability disappears
- [#8539](https://github.com/unslothai/unsloth/issues/8539) [Feature] Turn/Save a chat as source/knowledge base (e.g. for a specific project)
- [#8607](https://github.com/unslothai/unsloth/issues/8607) [Feature] MLX: corpus selection, shard packing, tokenizer word pair compute - general pretraining structure request
- [#9171](https://github.com/unslothai/unsloth/issues/9171) [Bug] Desktop does not auto load model when used with OpenCode
- [#9775](https://github.com/unslothai/unsloth/issues/9775) [Bug] Downloading dataset not working
- [#10341](https://github.com/unslothai/unsloth/issues/10341) [Bug] Model still sitting in RAM while Box Checked for No Ram Offload.
- [#2877](https://github.com/unslothai/unsloth/issues/2877) When fine-tuning Qwen3 on Windows, an error occurs after a certain number of steps: Fatal Python error: none_dealloc: deallocating None: bug likely caused by a refcount error in a C extension
- [#8513](https://github.com/unslothai/unsloth/issues/8513) MiniMax-M3 GGUF fails to load: missing indexer keys (Studio llama.cpp vs HF quants out of sync)
- [#11705](https://github.com/unslothai/unsloth/issues/11705) [Feature] Toggle to expose native llama.cpp API alongside OpenAI-compatible API
- [#11768](https://github.com/unslothai/unsloth/issues/11768) [Feature] Expose GPU toggle for RAG embedding model
- [#11822](https://github.com/unslothai/unsloth/issues/11822) [Feature] Server always binds on all IP then warns about one being a public IP
- [#13140](https://github.com/unslothai/unsloth/issues/13140) [Feature] Studio: continue fine-tuning a saved LoRA adapter on a new dataset without merging
- [#932](https://github.com/unslothai/unsloth/issues/932) Supporting "LoRA-GA: Low-Rank Adaptation with Gradient Approximation"?
- [#8568](https://github.com/unslothai/unsloth/issues/8568) [Feature] Models folder : Allow configuring of multiple folders for different types of models. text, audio, video models
- [#6319](https://github.com/unslothai/unsloth/issues/6319) [Studio] DiffusionGemma GGUF does not appear to use Tensor Parallelism on dual GPUs
- [#9404](https://github.com/unslothai/unsloth/issues/9404) [Bug] Image generation hangs on Preparing (text encoding + warmup)... 0%
- [#4996](https://github.com/unslothai/unsloth/issues/4996) [Bug] Incorrect tokenizer?
- [#13321](https://github.com/unslothai/unsloth/issues/13321) [Feature] wan 2.2
- [#4381](https://github.com/unslothai/unsloth/issues/4381) [Bug] No xformers and Flash-attention under Windows?
- [#10768](https://github.com/unslothai/unsloth/issues/10768) [Bug] CUDA error: CUBLAS_STATUS_NOT_INITIALIZED during FLUX.2 Klein VAE decoding in pipeline_flux2_klein
- [#8442](https://github.com/unslothai/unsloth/issues/8442) [Bug] Context leaks between sessions and model harnesses when using unsloth as API backend
- [#10306](https://github.com/unslothai/unsloth/issues/10306) [Bug] Accessing Models running in Unsloth via PocketPal - Model does not autoload when prompt is sent via API
- [#5848](https://github.com/unslothai/unsloth/issues/5848) [Bug] Data recipes keeps returning "🛑 Error generating dataset: 🛑 Failed to process column 'raw_conv': 🛑 Failed to write batch 0: ('cannot mix struct and non-struct, non-null values', 'Conversion failed for column raw_conv with type object') error"
- [#10354](https://github.com/unslothai/unsloth/issues/10354) calling Claude Codex Hermes using the unsloth API is quite low
- [#9145](https://github.com/unslothai/unsloth/issues/9145) Wispr Flow MCP OAuth token exchange fails with 401 after successful browser authentication
- [#5982](https://github.com/unslothai/unsloth/issues/5982) [Bug] Loading gemma-4-12B yields "Maximum call stack size exceeded"
- [#7732](https://github.com/unslothai/unsloth/issues/7732) [Bug] After 5-6 Revisions (Refresh Icon) of a Chat/Model Response, All responses Past 1 Are deleted / Resets
- [#5338](https://github.com/unslothai/unsloth/issues/5338) [Bug] "" string missing in Unsloth Studio UI output display
- [#3106](https://github.com/unslothai/unsloth/issues/3106) [Bug] Accuracy discrepancy when fine-tuning with A100 vs 4090 on Unsloth
- [#2934](https://github.com/unslothai/unsloth/issues/2934) [Bug] Fine-tuning always ooms under torch2.6
- [#5890](https://github.com/unslothai/unsloth/issues/5890) [Bug] Unsloth Studio Setup triggers changes in Windows App Aliases etc., causing PowerShell or CMD not recognize Python anymore, despite being on PATH and working properly
- [#6386](https://github.com/unslothai/unsloth/issues/6386) [Bug] Uploading a file fails and freezes the browser when previously used folder no longer exists
- [#3981](https://github.com/unslothai/unsloth/issues/3981) [Bug] When loading LoRA via load_lora_adapter, the inference becomes very slow with high CPU usage
- [#10873](https://github.com/unslothai/unsloth/issues/10873) [Feature] Support folder-based projects
- [#12025](https://github.com/unslothai/unsloth/issues/12025) [Bug] Toolbar toggle states indistinguishable on some color palettes; thinking no longer collapsible; long conversations cause UI lag (web + desktop)
- [#8527](https://github.com/unslothai/unsloth/issues/8527) [Feature] Improved performance monitoring - GPU/CPU Utilization, Wattage, and Temperatures
- [#11650](https://github.com/unslothai/unsloth/issues/11650) [Feature] Model ACLs for multi-user setups
- [#12625](https://github.com/unslothai/unsloth/issues/12625) [Feature] Unsloth Studio Context Length meter #2: Add a count for automatic compactions.
- [#8250](https://github.com/unslothai/unsloth/issues/8250) [Feature] Possibility to change the directory easily please
- [#10610](https://github.com/unslothai/unsloth/issues/10610) [Feature] Open WebUI compatibility: model residency and explicit load/unload
- [#3228](https://github.com/unslothai/unsloth/issues/3228) [Bug] Multiple EOS tokens found in the official DPO colab notebook
- [#13411](https://github.com/unslothai/unsloth/issues/13411) [Bug] Export fails for fine-tuned unsloth/SparkTTS-0.5B: Unrecognized model (missing model_type in config.json)
- [#7638](https://github.com/unslothai/unsloth/issues/7638) [Bug] XPU divergence on batched left-padded generation test
- [#9875](https://github.com/unslothai/unsloth/issues/9875) [Bug] Cannot copy out of meta tensor - flux2-klein-9b-uncensored
- [#8266](https://github.com/unslothai/unsloth/issues/8266) Tool-calling unreliable for Qwen3-Coder-30B-A3B GGUF via ollama pull hf.co/... (root cause found, fix filed against Ollama)
- [#8828](https://github.com/unslothai/unsloth/issues/8828) [Feature] Defining Custom Tools Within the UI (Without External MCP)
- [#8708](https://github.com/unslothai/unsloth/issues/8708) Add UEmbed Qwen3.5 dense and SPLADE fine-tuning support
- [#9184](https://github.com/unslothai/unsloth/issues/9184) [Issue] Hermes Agent M1 Unsloth Desktop opening the desktop app only
- [#9040](https://github.com/unslothai/unsloth/issues/9040) [Bug] Settings menu tool calling Z-clipping
- [#8880](https://github.com/unslothai/unsloth/issues/8880) [Bug] No more llama.cpp updates
- [#9043](https://github.com/unslothai/unsloth/issues/9043) [Bug] Installation failures across Windows 10 and Linux (Mint) environments behind various proxies.
- [#11707](https://github.com/unslothai/unsloth/issues/11707) FastLanguageModel.from_pretrained's 38-dependency fan-out has zero test coverage
- [#10598](https://github.com/unslothai/unsloth/issues/10598) install.sh floors at torch 2.4, the torchcodec table floors at 2.5, and nothing records the difference
- [#7026](https://github.com/unslothai/unsloth/issues/7026) [Bug] After fine-tuning gemma4-e4b-it vision layers , use unsloth load model and inference is OK. but can't use vllm deploy the saved model
- [#12624](https://github.com/unslothai/unsloth/issues/12624) [Feature] Unsloth Studio Context Length meter #1: Add a meter update when a tool call hands control to the sandbox.
- [#9321](https://github.com/unslothai/unsloth/issues/9321) [Feature] Allow Desktop projects to use an existing local folder as their workspace
- [#13138](https://github.com/unslothai/unsloth/issues/13138) [Bug] Website header Download link reloads current page instead of opening downloads
- [#9015](https://github.com/unslothai/unsloth/issues/9015) [Feature] Live Monitor: add GPU temperature and power consumption (optional)
- [#11030](https://github.com/unslothai/unsloth/issues/11030) [Feature] Extended filtering in the Model Hub (filter by model size, etc)
- [#11837](https://github.com/unslothai/unsloth/issues/11837) [Feature] Allow adjustment of deep research parameters within an existing thread
- [#8905](https://github.com/unslothai/unsloth/issues/8905) [Feature] Button for Uploading Files to the working directory of any chat, good for remote clients / browser laziness
- [#12054](https://github.com/unslothai/unsloth/issues/12054) Studio terminal: allow flutter/dart create or provide safe flutter helper
- [#12262](https://github.com/unslothai/unsloth/issues/12262) [Feature] Make Unsloth Studio Web UI installable as a PWA
- [#3108](https://github.com/unslothai/unsloth/issues/3108) unsloth_train(trainer, resume_from_checkpoint = True) gives a ValueError: loaded state dict contains a parameter group that doesn't match the size of optimizer's group
- [#13243](https://github.com/unslothai/unsloth/issues/13243) [Bug] External models are subject to tool-call limits but Tools settings are hidden
- [#8732](https://github.com/unslothai/unsloth/issues/8732) [Bug] Unsloth Studio: DeepSeek-OCR-2 fails to load, module named 'addict' is missing from requirements
- [#11703](https://github.com/unslothai/unsloth/issues/11703) [Feature] Add a collapsible, fixed-height Thinking panel in Unsloth Studio chat

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,134 · **Open issues:** 392 · **Last push:** 4h ago

AIBrix has successfully launched version 0.8.0, which introduces significant enhancements in model lifecycle management, inference routing, multi-node serving, autoscaling, LoRA, batch inference, and production reliability, culminating from 443 commits by over 100 contributors. Noteworthy merged fixes include resolving bugs related to routing vLLM classification requests and ensuring the proper management of PodAutoscaler states. Additionally, a critical new issue has emerged concerning the loss of pending counts and output predictors for served models when their pods or adapters are updated.

#### 🚀 New Releases
- [v0.8.0](https://github.com/vllm-project/aibrix/releases/tag/v0.8.0) v0.8.0

#### ✅ Merged PRs
- [#3028](https://github.com/vllm-project/aibrix/pull/3028) cut release v0.8.0
- [#3025](https://github.com/vllm-project/aibrix/pull/3025) fix(kvcache): bump main cuda version to 13.0
- [#3022](https://github.com/vllm-project/aibrix/pull/3022) cut release v0.8.0-rc.2
- [#3015](https://github.com/vllm-project/aibrix/pull/3015) [Bug] Route vLLM /classify requests through the gateway
- [#3020](https://github.com/vllm-project/aibrix/pull/3020) [Bug] Release per-PodAutoscaler state when it is deleted
- [#3019](https://github.com/vllm-project/aibrix/pull/3019) [Bug] Reject unusable autoscaling annotation values
- [#3018](https://github.com/vllm-project/aibrix/pull/3018) [Bug] Keep fractional values from the custom metrics API
- [#3017](https://github.com/vllm-project/aibrix/pull/3017) [Bug] Update existing model HTTPRoutes that drift from their workload
- [#3013](https://github.com/vllm-project/aibrix/pull/3013) [Feat] Support listener-aware Envoy Service NodePorts
- [#3012](https://github.com/vllm-project/aibrix/pull/3012) [Bug] Route /v1/messages/count_tokens through the gateway
- [#3009](https://github.com/vllm-project/aibrix/pull/3009) [Bug] Meter streamed /v1/messages requests when usage has no total_tokens
- [#3010](https://github.com/vllm-project/aibrix/pull/3010) [Bug] Match the PodAutoscaler owner kind when mapping HPA events
- [#3007](https://github.com/vllm-project/aibrix/pull/3007) [CI] Raise the Go coverage threshold to 55%
- [#3006](https://github.com/vllm-project/aibrix/pull/3006) [Docs] Add overview diagrams to ModelClaim and ModelWarmup pages

#### 🐛 New Issues
- [#3031](https://github.com/vllm-project/aibrix/issues/3031) [Bug] A served model loses its pending count and output predictor when its only pod or its adapter is updated `kind/bug` `area/gateway` `area/orchestration` 💬1
- [#3029](https://github.com/vllm-project/aibrix/issues/3029) [Bug] TOS v1 downloads a model prefix that also has children as a single file `kind/bug` `area/website` `area/runtime` 💬1
- [#3021](https://github.com/vllm-project/aibrix/issues/3021) [Bug] PodAutoscaler status is rewritten on every reconcile, alternating between two versions `kind/bug` `area/runtime` `area/orchestration` 💬1
- [#3014](https://github.com/vllm-project/aibrix/issues/3014) [Bug] vLLM classification models can't be reached through the gateway `kind/bug` `area/gateway` 💬1
- [#3011](https://github.com/vllm-project/aibrix/issues/3011) [Bug] /v1/messages/count_tokens returns 501 through the gateway `kind/bug` `area/gateway` 💬1
- [#3008](https://github.com/vllm-project/aibrix/issues/3008) [Bug] Streamed /v1/messages responses are never charged against TPM `kind/bug` `area/gateway` 💬1
- [#3016](https://github.com/vllm-project/aibrix/issues/3016) [Bug] ModelRouter never updates an existing HTTPRoute `kind/bug` `area/gateway`

#### 🔒 Closed Issues
- [#3003](https://github.com/vllm-project/aibrix/issues/3003) [Bug] The APA samples use annotation keys the controller ignores

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,122 · **Open issues:** 612 · **Last push:** <1h ago

On October 13, 2026, there were no new releases for Semantic Router, but several important developments occurred in merged pull requests. Notable fixes included enhancements to the dashboard backend build for macOS and improvements in reporting unusable sr-bench service responses and Redis cache TTL failures. In feature updates, the model runtime now supports replaying Vela 2.0 forest graphs on CUDA, and a new decision demo incorporating Super Mario Bros. was added to the Decision 3.0 Core ML post. Among the new issues, #4943 stands out, highlighting a bug related to preset decision answers that skip the confidence and probability bounds assigned to other answer types.

#### ✅ Merged PRs
- [#4829](https://github.com/vllm-project/semantic-router/pull/4829) [Bug] Fix dashboard backend build and socket tests on macOS
- [#4813](https://github.com/vllm-project/semantic-router/pull/4813) [Feature] Model runtime: replay Vela 2.0 forest graphs on CUDA
- [#4551](https://github.com/vllm-project/semantic-router/pull/4551) [CI/Build] Pin the packaging tools the publish workflows install
- [#4927](https://github.com/vllm-project/semantic-router/pull/4927) [Bug] Report unusable sr-bench service response bodies as value errors
- [#4926](https://github.com/vllm-project/semantic-router/pull/4926) [Bug] Log Redis cache TTL failures instead of dropping them
- [#4925](https://github.com/vllm-project/semantic-router/pull/4925) [Bug] Admit random selection into the benchmark usage scope
- [#4908](https://github.com/vllm-project/semantic-router/pull/4908) [Test] Give the model-deployment readiness polls one shared CI-safe budget
- [#4872](https://github.com/vllm-project/semantic-router/pull/4872) [Test] Pin ModernBERT package failure readiness
- [#4975](https://github.com/vllm-project/semantic-router/pull/4975) [Docs] Add the Super Mario Bros. demo to the Decision 3.0 Core ML post
- [#4956](https://github.com/vllm-project/semantic-router/pull/4956) [Test] Read the refused-connection errno from the platform
- [#4931](https://github.com/vllm-project/semantic-router/pull/4931) [Bug] Decode Chat target opening delta immediately without holding (#4911)
- [#4959](https://github.com/vllm-project/semantic-router/pull/4959) [Website] Add the Decision 3.0 r/LocalLLaMA highlight
- [#4856](https://github.com/vllm-project/semantic-router/pull/4856) [Bug] Score the feedback baseline on the suite's fresh held-out set
- [#4777](https://github.com/vllm-project/semantic-router/pull/4777) [Bug] Classification: mask every copy of a detected PII value
- [#4538](https://github.com/vllm-project/semantic-router/pull/4538) [Test] Verify in-memory Store lifecycle and retrieval scope
- [#4123](https://github.com/vllm-project/semantic-router/pull/4123) [Feature] Publish a validated dataset and its judgments by digest
- [#4811](https://github.com/vllm-project/semantic-router/pull/4811) [Test] Model runtime: record the fused kernels and graphs on MI300X
- [#4896](https://github.com/vllm-project/semantic-router/pull/4896) [Bug] Stop echoing read errors from the dashboard config update handlers
- [#4750](https://github.com/vllm-project/semantic-router/pull/4750) [Bug] Return PII and security results for batch task_type "all"

#### 🐛 New Issues
- [#4943](https://github.com/vllm-project/semantic-router/issues/4943) [Bug] Preset decision answers skip the confidence and probability bounds the other answer types get `bug` `accepted` `wg/router-models-inference-runtime` 💬6
- [#4966](https://github.com/vllm-project/semantic-router/issues/4966) [Bug] Milvus Router Memory Store can insert duplicate rows when an insert is retried `bug` `accepted` `in-progress` `wg/agentic-context` 💬4
- [#4973](https://github.com/vllm-project/semantic-router/issues/4973) [Bug] Redis/Valkey exact cache can return expired responses `bug` `needs-acceptance` `wg/data-plane-networking` 💬4
- [#4965](https://github.com/vllm-project/semantic-router/issues/4965) [Bug] Reject unknown or incomplete global.stores.memory backend config at load time `bug` `accepted` `in-progress` `wg/agentic-context` 💬4
- [#4970](https://github.com/vllm-project/semantic-router/issues/4970) [Bug] Qdrant Router Memory Retrieve accepts an empty user ID `bug` `accepted` `in-progress` `wg/agentic-context` 💬4
- [#4969](https://github.com/vllm-project/semantic-router/issues/4969) [Bug] Milvus Router Memory ForgetByScope reports success when deletes fail `bug` `accepted` `in-progress` `wg/agentic-context` 💬4
- [#4967](https://github.com/vllm-project/semantic-router/issues/4967) [Bug] Qdrant Router Memory write operations report zero latency and no errors `bug` `accepted` `wg/agentic-context` 💬3
- [#4968](https://github.com/vllm-project/semantic-router/issues/4968) [Bug] Escape memory IDs in Milvus Router Memory filter expressions `bug` `accepted` `wg/agentic-context` 💬3
- [#4936](https://github.com/vllm-project/semantic-router/issues/4936) [Bug] LiteLLM proxy replies fail strict Chat decoding on provider_specific_fields `bug` `accepted` `wg/data-plane-networking` 💬3
- [#4946](https://github.com/vllm-project/semantic-router/issues/4946) [Bug] Drifted zh-Hans model-runtime translations break test_translations_in_sync on main `bug` `wg/developer-experience-ecosystem` 💬2
- [#4942](https://github.com/vllm-project/semantic-router/issues/4942) [Bug] Read-only KB validation accepts POSIX-absolute source paths on Windows `bug` `accepted` `wg/enterprise-environment` 💬2
- [#4954](https://github.com/vllm-project/semantic-router/issues/4954) [Bug] README community calendar invites no longer resolve `bug` `needs-acceptance` `wg/developer-experience-ecosystem` 💬2
- [#4963](https://github.com/vllm-project/semantic-router/issues/4963) [Feature] multi_benchmark_eval: --api-key for authenticated endpoints and params extra_body passthrough `enhancement` `needs-acceptance` `wg/evaluation-quality` 💬2
- [#4993](https://github.com/vllm-project/semantic-router/issues/4993) [Bug] Empty tool results lose required content when encoded for Chat Completions `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#4974](https://github.com/vllm-project/semantic-router/issues/4974) [Blog] Decision 3.0 on Apple Silicon: add the Super Mario Bros. demo `wg/router-models-inference-runtime` `documentation` 💬1
- [#4958](https://github.com/vllm-project/semantic-router/issues/4958) [Website] Add the Decision 3.0 r/LocalLLaMA card to Trending highlights `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4972](https://github.com/vllm-project/semantic-router/issues/4972) [Research] Verify that agents can discover and complete a configuration planning workflow `needs-acceptance` `research` `wg/developer-experience-ecosystem` 💬1
- [#4950](https://github.com/vllm-project/semantic-router/issues/4950) [Docs] List NEED_CLARIFICATION among the feedback classes the baseline leaves unmeasured `needs-acceptance` `wg/evaluation-quality` `documentation` 💬1
- [#4949](https://github.com/vllm-project/semantic-router/issues/4949) [Bug] bucket_bench crashes with StatisticsError when warmup covers every prompt `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4932](https://github.com/vllm-project/semantic-router/issues/4932) [Feature] Qualify the AMD AI PC CPU profile with reproducible receipts `enhancement` `needs-acceptance` `wg/enterprise-environment` 💬1
- [#4994](https://github.com/vllm-project/semantic-router/issues/4994) [Bug] Model runtime: every graph capture leaves a BLAS workspace behind `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#4997](https://github.com/vllm-project/semantic-router/issues/4997) [Feature] Model runtime: Decision 3.0 approximate profiles rarely reuse a graph `enhancement` `wg/router-models-inference-runtime`
- [#4996](https://github.com/vllm-project/semantic-router/issues/4996) [Feature] Model runtime: read Decision 3.0 images once under the approximate profiles `enhancement` `wg/router-models-inference-runtime`
- [#4995](https://github.com/vllm-project/semantic-router/issues/4995) [Feature] Model runtime: capture Decision 3.0 forwards as graphs `enhancement` `wg/router-models-inference-runtime`
- [#4992](https://github.com/vllm-project/semantic-router/issues/4992) [Bug] router_latency parity counts inputs that failed on both sides as agreement `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#4991](https://github.com/vllm-project/semantic-router/issues/4991) [Bug] router_latency run crashes on portless URLs and empty corpora `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#4990](https://github.com/vllm-project/semantic-router/issues/4990) [Bug] TestServingOverALeaseBundlesEverySignalOfAStage flakes when the runner is CPU-starved `needs-acceptance` `wg/router-models-inference-runtime`
- [#4984](https://github.com/vllm-project/semantic-router/issues/4984) Strict recipe validation accepts decision signal references with surrounding whitespace `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#4982](https://github.com/vllm-project/semantic-router/issues/4982) [Bug] Model runtime: D3-edge CPU readiness fix and NVIDIA L4 CUDA validation `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#4985](https://github.com/vllm-project/semantic-router/issues/4985) [Bug] Responses requests with the default "truncation": "disabled" are rejected for Chat and Anthropic backends `needs-acceptance` `wg/data-plane-networking`
- [#4951](https://github.com/vllm-project/semantic-router/issues/4951) [Test] Refuse or flag a baseline run whose mapped gold keeps a single class `enhancement` `needs-acceptance` `wg/evaluation-quality`
- [#4934](https://github.com/vllm-project/semantic-router/issues/4934) [Feature] Assess a Ryzen AI NPU path for the AMD AI PC profile `enhancement` `needs-acceptance` `wg/enterprise-environment`
- [#4933](https://github.com/vllm-project/semantic-router/issues/4933) [Feature] Assess a Radeon iGPU path for the AMD AI PC profile `enhancement` `needs-acceptance` `wg/enterprise-environment`

#### 🔒 Closed Issues
- [#2669](https://github.com/vllm-project/semantic-router/issues/2669) [Bug] Restore incomplete ModernBERT runtime weights during model healing
- [#4662](https://github.com/vllm-project/semantic-router/issues/4662) [Bug] Batch classification task_type "all" returns only intent results
- [#4903](https://github.com/vllm-project/semantic-router/issues/4903) [Bug] The model-deployment readiness reload test can outrun its 20s polling windows on loaded CI runners
- [#4946](https://github.com/vllm-project/semantic-router/issues/4946) [Bug] Drifted zh-Hans model-runtime translations break test_translations_in_sync on main
- [#4882](https://github.com/vllm-project/semantic-router/issues/4882) [Bug] Dashboard config update handlers return internal read errors to the client
- [#4874](https://github.com/vllm-project/semantic-router/issues/4874) [Bug] Router Memory API reports "not configured" when its backend was unreachable
- [#4828](https://github.com/vllm-project/semantic-router/issues/4828) [Bug] Dashboard backend fails to build and two instance tests fail on macOS
- [#4911](https://github.com/vllm-project/semantic-router/issues/4911) [Bug] Chat decoding holds a Chat client's opening delta, so a failed stream sends it twice
- [#4974](https://github.com/vllm-project/semantic-router/issues/4974) [Blog] Decision 3.0 on Apple Silicon: add the Super Mario Bros. demo
- [#4958](https://github.com/vllm-project/semantic-router/issues/4958) [Website] Add the Decision 3.0 r/LocalLLaMA card to Trending highlights

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*