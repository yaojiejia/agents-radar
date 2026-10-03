# 📡 AI Ecosystem Digest — 2026-10-03

> Generated 2026-10-03 01:46 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 148,981 | 28 | 3 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 127,641 | 25 | 5 | 48 | 7 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,216 | 0 | 0 | 1 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,236 | 8 | 11 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 211,511 | 26 | 7 | 13 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,279 | 23 | 7 | 5 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,196 | 139 | 100 | 162 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 250,785 | 24 | 16 | 7 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,084 | 30 | 24 | 66 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,730 | 10 | 7 | 42 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,172 | 17 | 19 | 25 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,069 | 10 | 1 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,063 | 24 | 7 | 88 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,147 | 11 | 23 | 78 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,120 | 3 | 1 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,000 | 9 | 11 | 6 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.288](https://github.com/anthropics/claude-code/releases/tag/v2.1.288) with various bug fixes and improvements.
- **OpenAI Codex** announced multiple releases, with the latest being [rust-v0.162.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.9).
- **OpenClaw** released [v2026.8.35](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35), addressing multiple stability issues.
- A critical new issue in **vLLM**, [#59724](https://github.com/vllm-project/vllm/issues/59724), reports a 0% acceptance rate for MTP speculative decoding on a specific backend, attracting significant user attention (7 comments).
- **Gemini CLI** merged [PR #29502](https://github.com/google-gemini/gemini-cli/pull/29502), ensuring that selection list options are reliably confirmed with Enter and Spacebar.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 148,981 · **Open issues:** 14,063 · **Last push:** <1h ago

On October 3, 2026, Claude Code released version 2.1.288, which introduced the new `$.ui.selection()` method for mods, enabling users to retrieve the text last selected in fullscreen mode along with the corresponding transcript row when applicable. Additionally, the release included a built-in `gh api` for cloud sessions without GitHub CLI, and improvements to control character handling from file names and error messages. No pull requests were merged today, but notable new issues include a feature request (#99105) that seeks to enable text selection and copying from Claude's responses on mobile, highlighting growing user interest in enhancing mobile usability. Other reported bugs such as the crash-loop issue in VS Code when opening large transcripts (#99088) underscore ongoing concerns with stability in the desktop app.

#### 🚀 New Releases
- [v2.1.288](https://github.com/anthropics/claude-code/releases/tag/v2.1.288) v2.1.288

#### 🐛 New Issues
- [#99105](https://github.com/anthropics/claude-code/issues/99105) [FEATURE] Dispatch mobile: allow selecting and copying text from Claude's responses `enhancement` `platform:android` `area:ui` 💬3
- [#98979](https://github.com/anthropics/claude-code/issues/98979) Agent-opened Terminal tabs never report ready on Windows: shell integration script is recreated at spawn time `bug` `has repro` `platform:windows` `area:desktop` 💬3
- [#98971](https://github.com/anthropics/claude-code/issues/98971) Composer prompt suggestions (ghost text, Tab to accept) stopped appearing in the desktop app while the setting stays On `bug` `platform:windows` `area:desktop` 💬2
- [#99071](https://github.com/anthropics/claude-code/issues/99071) [Bug] Built-in plugin startup tip references unavailable plugin `bug` `platform:macos` `needs-info` `area:plugins` 💬2
- [#99088](https://github.com/anthropics/claude-code/issues/99088) [BUG] VS Code: opening a session whose transcript exceeds 2 GiB crash-loops the extension host `bug` 💬1
- [#98986](https://github.com/anthropics/claude-code/issues/98986) [FEATURE] Mods: let a plugin observe or own the collapse of the AbovePrompt band ([-] mark) `enhancement` `area:tui` `area:plugins` 💬1
- [#99095](https://github.com/anthropics/claude-code/issues/99095) [Feature Request] Desktop app needs configurable Return key behavior for multiline input 💬1
- [#99119](https://github.com/anthropics/claude-code/issues/99119) [GitHub integration] `bug` `duplicate` `platform:web` `github-integration`
- [#99117](https://github.com/anthropics/claude-code/issues/99117) [BUG] Desktop app's --plugin-dir copy of a strict:false LSP plugin drops its lspServers, so 0 servers load and the LSP tool never appears (bundled CLI resolves it) `bug` `has repro` `platform:linux` `area:lsp`
- [#99116](https://github.com/anthropics/claude-code/issues/99116) Mouse selection in the transcript spills into a docked plugin Pane when it crosses lines `bug` `has repro` `area:tui` `area:plugins`
- [#99114](https://github.com/anthropics/claude-code/issues/99114) [BUG] [BUG] Windows: OneDrive-redirected Desktop folders appear as duplicates in folder picker, require adding twice `invalid`
- [#99115](https://github.com/anthropics/claude-code/issues/99115) [GitHub integration] `bug` `platform:web` `github-integration`
- [#99113](https://github.com/anthropics/claude-code/issues/99113) [Bug] Anthropic API Error: Opus 5.5 Safeguards Flagged Safe Code Review Requests `bug` `duplicate` `platform:macos` `area:model`
- [#99112](https://github.com/anthropics/claude-code/issues/99112) [BUG] Claude Code on the web (claude.ai/code): MCP connector prompts offer only "Allow once", so read-only tools ask on every call `enhancement` `area:mcp` `area:claude-code-web` `platform:web`
- [#99111](https://github.com/anthropics/claude-code/issues/99111) [BUG] Agent teams (interactive only): SendMessage to a busy teammate is withheld until its turn ends, so mid-task corrections arrive after the work is done `bug` `has repro` `platform:linux` `area:agents`
- [#99110](https://github.com/anthropics/claude-code/issues/99110) [FEATURE] Default open last used session / Open session if there's only 1 linked to dir `enhancement` `area:cli`
- [#99109](https://github.com/anthropics/claude-code/issues/99109) [Bug] Jailbreak attempt flagged in conversation context `bug` `platform:linux` `area:security`
- [#99108](https://github.com/anthropics/claude-code/issues/99108) [Bug] Safety classifier false positives with bug-bounty skills loaded `bug` `duplicate` `platform:linux` `area:model`
- [#99107](https://github.com/anthropics/claude-code/issues/99107) Withdrawn by author `enhancement` `platform:macos` `area:plugins`
- [#99106](https://github.com/anthropics/claude-code/issues/99106) [Bug] Security filter incorrectly blocks legitimate FiveM scripts `bug` `platform:windows` `area:model` `needs-repro`
- [#99104](https://github.com/anthropics/claude-code/issues/99104) [DOCS] Desktop docs send users to a VS Code icon to move a session to the cloud; the icon assumes VS Code and was removed in the April 2026 redesign `bug` `documentation` `platform:macos` `area:docs`
- [#99103](https://github.com/anthropics/claude-code/issues/99103) [FEATURE] $.ui.selection() should report where a selection is (element key and offsets), not just its text `enhancement` `area:plugins` `area:ui`
- [#99102](https://github.com/anthropics/claude-code/issues/99102) [False Positive] Supported Countries Policy suspension on a US-based paid account `invalid`
- [#99101](https://github.com/anthropics/claude-code/issues/99101) [GitHub integration] `bug` `platform:web` `github-integration`
- [#99099](https://github.com/anthropics/claude-code/issues/99099) [Bug] Skills not loading in intended scenarios `bug` `platform:macos` `area:model` `platform:vscode`
- [#99098](https://github.com/anthropics/claude-code/issues/99098) Auto mode: when an allow rule covers only part of a compound Bash command, say which parts weren't covered `enhancement` `platform:macos` `area:permissions`
- [#99097](https://github.com/anthropics/claude-code/issues/99097) [Bug] Claude API Security Filter Triggering on Local SQL Injection Tests `bug` `platform:linux` `area:security`
- [#99096](https://github.com/anthropics/claude-code/issues/99096) [BUG] Warm 1h prompt cache fully missed (cache_read_input_tokens = 0, 634k tokens re-written) 1.6 min after the previous request, mid tool loop — v2.1.288, Opus 5.5 `bug` `platform:linux` `area:cost` `area:core`

#### 🔒 Closed Issues
- [#97182](https://github.com/anthropics/claude-code/issues/97182) [BUG] User had to repeat an explicit order three times before it was carried out
- [#95961](https://github.com/anthropics/claude-code/issues/95961) [Bug] Account access restrictions on paid tier accounts
- [#99107](https://github.com/anthropics/claude-code/issues/99107) Withdrawn by author

### OpenAI Codex (`openai/codex`)

**Stars:** 127,641 · **Open issues:** 20,253 · **Last push:** <1h ago

On October 3, 2026, OpenAI Codex released seven new versions of Rust, culminating in version 0.162.0-alpha.9. Key changes across these releases included enhancements for service tiers, refined output handling for TUI commands, and an increment flag for tool management. Significant merged pull requests focused on improving JSON handling during multitasking, enhancing tool definition persistence, and ensuring that command outputs respect size limits in paginated histories. Notably, a hot new issue was reported regarding the VS Code extension, where queued messages were failing to send due to a JSON formatting error.

#### 🚀 New Releases
- [rust-v0.162.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.9) 0.162.0-alpha.9
- [rust-v0.162.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.8) 0.162.0-alpha.8
- [rust-v0.162.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.7) 0.162.0-alpha.7
- [rust-v0.162.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.6) 0.162.0-alpha.6
- [rust-v0.162.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.5) 0.162.0-alpha.5
- [rust-v0.162.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.4) 0.162.0-alpha.4
- [rust-v0.162.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.3) 0.162.0-alpha.3

#### ✅ Merged PRs
- [#50480](https://github.com/openai/codex/pull/50480) Skip managed config loading for registered Windows sandbox refreshes
- [#50477](https://github.com/openai/codex/pull/50477) Use the app-server default output cap for TUI workspace commands
- [#50472](https://github.com/openai/codex/pull/50472) Enable Ultrafast service tiers for Amazon Bedrock Astra models
- [#50470](https://github.com/openai/codex/pull/50470) Account for JSON overhead when truncating MCP tool results
- [#50467](https://github.com/openai/codex/pull/50467) Copy transcript selections as literal text while preserving rich HTML
- [#50465](https://github.com/openai/codex/pull/50465) Retry registry authentication outages and jitter executor reconnects
- [#50464](https://github.com/openai/codex/pull/50464) Add the `incremental_tools` feature flag
- [#50462](https://github.com/openai/codex/pull/50462) Populate thread previews from delegated task inputs
- [#50459](https://github.com/openai/codex/pull/50459) Add capability overrides for custom model providers
- [#50458](https://github.com/openai/codex/pull/50458) Truncate oversized MCP results in paginated thread history
- [#50454](https://github.com/openai/codex/pull/50454) Measure rollout persistence size reductions
- [#50447](https://github.com/openai/codex/pull/50447) Remove the provider capability gate for tool namespaces
- [#50446](https://github.com/openai/codex/pull/50446) Bundle rollout attachments into a gzip tar archive
- [#50445](https://github.com/openai/codex/pull/50445) Assert that only direct tool calls emit timing events
- [#50443](https://github.com/openai/codex/pull/50443) Stabilize paused-time code-mode service tests
- [#50442](https://github.com/openai/codex/pull/50442) Preserve native USD amounts in thread usage responses
- [#50441](https://github.com/openai/codex/pull/50441) Support ordered response items in world-state context updates
- [#50437](https://github.com/openai/codex/pull/50437) Add a CLI command to uninstall the legacy Windows sandbox
- [#50435](https://github.com/openai/codex/pull/50435) Persist additional tool definitions in rollout history
- [#50434](https://github.com/openai/codex/pull/50434) Add keyboard copy selection to the owned transcript
- [#50433](https://github.com/openai/codex/pull/50433) Allow API-key accounts to use Daybreak in the TUI
- [#50431](https://github.com/openai/codex/pull/50431) Preserve terminal hyperlinks in agents overview previews
- [#50427](https://github.com/openai/codex/pull/50427) Cap persisted command output in paginated history at 64 KiB
- [#50418](https://github.com/openai/codex/pull/50418) Honor Retry-After headers in failed Responses events
- [#50416](https://github.com/openai/codex/pull/50416) Clarify Git worktree choices for new and forked conversations
- [#50402](https://github.com/openai/codex/pull/50402) Consolidate command execution output into `aggregated_output`
- [#50396](https://github.com/openai/codex/pull/50396) Honor pager bindings for transcript page keys
- [#50389](https://github.com/openai/codex/pull/50389) Honor configured keybindings before transcript navigation
- [#50384](https://github.com/openai/codex/pull/50384) Allow opting into 16 KiB ARM64 code pages for macOS signing
- [#50380](https://github.com/openai/codex/pull/50380) Fix thread unloading after disconnect during MCP startup
- [#50375](https://github.com/openai/codex/pull/50375) Use printable ASCII terminal titles under GNU Screen
- [#50360](https://github.com/openai/codex/pull/50360) Remove initial messages from session configuration events
- [#50359](https://github.com/openai/codex/pull/50359) Render ANSI styles in TUI hook system messages
- [#50354](https://github.com/openai/codex/pull/50354) Skip unrelated subtrees during config alias normalization
- [#50348](https://github.com/openai/codex/pull/50348) Back off automatic remote control reconnects with jitter
- [#50345](https://github.com/openai/codex/pull/50345) Keep the subagent picker consistent with thread archive state
- [#50339](https://github.com/openai/codex/pull/50339) Add end-to-end coverage for MCP sandbox state enforcement
- [#50273](https://github.com/openai/codex/pull/50273) Record Guardian V2 Decisions agreement and latency metrics
- [#50219](https://github.com/openai/codex/pull/50219) Bound tmux option probes to one second
- [#50216](https://github.com/openai/codex/pull/50216) Use the shared text editor for command-center task renaming
- [#50215](https://github.com/openai/codex/pull/50215) Support Ctrl+Insert for copying TUI selections
- [#50209](https://github.com/openai/codex/pull/50209) Make transcript mouse scroll speed configurable
- [#50207](https://github.com/openai/codex/pull/50207) Release stable Markdown tables into scrollback during streaming
- [#50200](https://github.com/openai/codex/pull/50200) Report the configured TUI mode in `codex doctor`
- [#50199](https://github.com/openai/codex/pull/50199) Restore the account email in `/status` after account updates
- [#50189](https://github.com/openai/codex/pull/50189) Replace the Figma OAuth exception with Mercado Pago
- [#50183](https://github.com/openai/codex/pull/50183) Add `dots` to issue labeler guidance
- [#50177](https://github.com/openai/codex/pull/50177) Enable writable file streaming in exec-server

#### 🐛 New Issues
- [#50403](https://github.com/openai/codex/issues/50403) VS Code extension: queued messages silently fail to send — "Failed to release queued message send lock" (SyntaxError: "undefined" is not valid JSON) `bug` `windows-os` `extension` `app-server` 💬6
- [#50193](https://github.com/openai/codex/issues/50193) Windows: repeated blank terminal windows appear during normal Codex use `bug` `windows-os` `sandbox` `CLI` 💬4
- [#50157](https://github.com/openai/codex/issues/50157) Dot cannot read existing remote Codex sessions: unsupported placement format versions 1 and 2 `bug` `iOS` `app-server` `remote` 💬4
- [#50197](https://github.com/openai/codex/issues/50197) Broken copy functionality after update Today `bug` `TUI` `CLI` 💬3
- [#50317](https://github.com/openai/codex/issues/50317) Windows ChatGPT Work: permissions selector disappears after chat starts and node_repl is unavailable `bug` `windows-os` `mcp` `app` 💬2
- [#50451](https://github.com/openai/codex/issues/50451) [Rate limits] Oct 2 global reset did not reach paid account after "Reset all propagated" `bug` `rate-limits` 💬2
- [#50466](https://github.com/openai/codex/issues/50466) Tmux scrollback copy mode selection broken with recent releases `bug` `TUI` `CLI` 💬2
- [#50482](https://github.com/openai/codex/issues/50482) [Dots] Ongoing report review stops after an interim draft despite instructions not to finalize early `bug` `model-behavior` `dots` 💬1
- [#50481](https://github.com/openai/codex/issues/50481) [Windows/Android] Remote pairing returns to Google login after entering code; authenticator MFA does not resolve it `bug` `windows-os` `auth` `app` 💬1
- [#50478](https://github.com/openai/codex/issues/50478) VS Code extension follow-up messages remain pending while Codex CLI works `bug` `windows-os` `extension` `app-server` 💬1
- [#50475](https://github.com/openai/codex/issues/50475) Windows desktop (26.930.2377.0): browser/computer-use tools not attached to new Work sessions despite node_repl + cua_repl reporting ready `bug` `windows-os` `app` `computer-use` 💬1
- [#50471](https://github.com/openai/codex/issues/50471) My Dot has completely broken and rebooting doesn't fix it `bug` `windows-os` `app` `dots` 💬1
- [#50450](https://github.com/openai/codex/issues/50450) Codex App: Stop fails on orphaned durable turn; “stop working” recovers chat `bug` `app` `app-server` 💬1
- [#50469](https://github.com/openai/codex/issues/50469) codex_apps initialization fails with “error decoding response body” on Windows — 0.160.0 and 0.155.1 `bug` `windows-os` `mcp` `CLI` 💬1
- [#50468](https://github.com/openai/codex/issues/50468) [macOS] Usage history graphs are duplicated in Usage & billing → Analytics `bug` `app` 💬1
- [#50461](https://github.com/openai/codex/issues/50461) Five-hour allowance drops before prompt submission, then drops further during a low-effort response `bug` `rate-limits` `app` 💬1
- [#50455](https://github.com/openai/codex/issues/50455) Unrelated CRISPR/biotechnology thinking text during website development; task stuck for approximately 2 hours `bug` `model-behavior` `app` `connectivity` 💬1
- [#50483](https://github.com/openai/codex/issues/50483) Codex App: Add dictation to the Markdown viewer’s "Describe the edit" field `enhancement` `app`
- [#50479](https://github.com/openai/codex/issues/50479) Codex desktop: command-menu search does not locate old matches, and read_thread pagination can skip stored items `bug` `app` `session` `app-server`
- [#50476](https://github.com/openai/codex/issues/50476) [Windows Appshots] Capturing another app restores a maximized ChatGPT window to a small normal window `bug` `windows-os` `app`
- [#50474](https://github.com/openai/codex/issues/50474) navigation remains stuck in the priority pane `bug` `app`
- [#50473](https://github.com/openai/codex/issues/50473) Enabled Confetti cannon cannot be triggered from a Dot conversation `bug` `app` `dots`
- [#50463](https://github.com/openai/codex/issues/50463) Expose a read-only metadata API for Codex scheduled/heartbeat automations (list + inspect) `enhancement` `app` `app-server` `automations`
- [#50460](https://github.com/openai/codex/issues/50460) [ChatGPT Web][Deep Research] Markdown export drops durable source URLs and preserves internal turn/filecite markers `bug`
- [#50457](https://github.com/openai/codex/issues/50457) Codex Scrolling Ability Disappeared + Can't Use Projects in Web Interface `bug` `windows-os` `app`

#### 🔒 Closed Issues
- [#50466](https://github.com/openai/codex/issues/50466) Tmux scrollback copy mode selection broken with recent releases
- [#50068](https://github.com/openai/codex/issues/50068) Support /skill-name invocation in Codex CLI to match the desktop app
- [#48164](https://github.com/openai/codex/issues/48164) "git-branch" isn't showing up in the statusbar
- [#50450](https://github.com/openai/codex/issues/50450) Codex App: Stop fails on orphaned durable turn; “stop working” recovers chat
- [#26642](https://github.com/openai/codex/issues/26642) Bug: Codex Desktop inherits Chrome `DynamicCodeSettings` (ACG) policy

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,216 · **Open issues:** 800 · **Last push:** <1h ago

On October 3, 2026, Gemini CLI released version v0.64.0-nightly.20261003.gfb972b2f8, which includes a crucial fix ensuring that the Enter and Spacebar keys reliably confirm selection list options, as contributed by @ugorla-dev in pull request #29502. There were no new issues reported in the last 24 hours, making it a routine day for maintenance and updates. The enhancement to key selection confirmation is particularly noteworthy, improving user experience with the command line interface.

#### 🚀 New Releases
- [v0.64.0-nightly.20261003.gfb972b2f8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261003.gfb972b2f8) Release v0.64.0-nightly.20261003.gfb972b2f8

#### ✅ Merged PRs
- [#29502](https://github.com/google-gemini/gemini-cli/pull/29502) fix(cli): ensure Enter and Spacebar reliably confirm selection list options

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,236 · **Open issues:** 2,179 · **Last push:** 3h ago

On October 3, 2026, GitHub Copilot CLI released version v1.0.92-3, which introduced a pre-conversation Ctrl+E environment picker for switching between local and cloud runs, alongside improvements that ensure keyboard, paste, and mouse input maintain order and responsiveness during rapid interactions. Additionally, the latest update addressed several crucial fixes such as providing a network bypass prompt for sandboxed shell commands and ensuring masked authentication for Git commands within sandboxed scripts. There were no merged pull requests reported today, but new issues included a notable regression in version 1.0.87 where MCP tool calls fail due to discrepancies in the tool catalog, as well as an instance where user attestation gets canceled unintentionally while copying text in Herdr.

#### 🚀 New Releases
- [v1.0.92-3](https://github.com/github/copilot-cli/releases/tag/v1.0.92-3) 1.0.92-3
- [v1.0.92-2](https://github.com/github/copilot-cli/releases/tag/v1.0.92-2) 1.0.92-2
- [v1.0.92-1](https://github.com/github/copilot-cli/releases/tag/v1.0.92-1) 1.0.92-1

#### 🐛 New Issues
- [#5045](https://github.com/github/copilot-cli/issues/5045) /compact repeatedly fails with empty model response using gpt-6.1-sol `triage`
- [#5044](https://github.com/github/copilot-cli/issues/5044) Regression in 1.0.87: MCP tool call fails with "MCP tool catalog changed" when an unrelated tool's `_meta` differs between `tools/list` responses `triage`
- [#5043](https://github.com/github/copilot-cli/issues/5043) Ask user attestation is cancel unwillingly when Ctrl+Shift+C to copy in Herdr `triage`
- [#5042](https://github.com/github/copilot-cli/issues/5042) HydraFusion: after a 400 on the routed model, the session is re-routed to a small-context model that cannot load the static prompt; tool set changes mid-session `triage`
- [#5041](https://github.com/github/copilot-cli/issues/5041) Plan mode: add "Accept plan with fresh context" action that drops planning transcript and keeps artifacts `triage`
- [#5040](https://github.com/github/copilot-cli/issues/5040) MCP OAuth: Entra rejects 127.0.0.1 callback (AADSTS50011); no localhost host override found `triage`
- [#5039](https://github.com/github/copilot-cli/issues/5039) MCP OAuth login fails with HTTP 400 when server rejects MCP-Protocol-Version (no fallback to older version)
- [#5038](https://github.com/github/copilot-cli/issues/5038) grep tool silently ignores `n`, so models that drop the dash from `-n` get no line numbers `area:tools`

#### 🔒 Closed Issues
- [#4012](https://github.com/github/copilot-cli/issues/4012) Bug with BYOK: reasoning effort not supported for model "glm-5.2:cloud"
- [#3172](https://github.com/github/copilot-cli/issues/3172) Strange "Somebody else is owning the clipboard" message
- [#4832](https://github.com/github/copilot-cli/issues/4832) Workspace .mcp.json is never loaded in CLI 1.0.83 — 'mcp list' shows no Workspace group
- [#3032](https://github.com/github/copilot-cli/issues/3032) Feature request: Allow-list specific shell command patterns for tool permissions
- [#2024](https://github.com/github/copilot-cli/issues/2024) Disable appending builtin agent-types via configuration/options
- [#4842](https://github.com/github/copilot-cli/issues/4842) Concurrent MCP OAuth token-refresh for two servers cancels one reconnect (self-heals, but surfaces a false hard-failure error)
- [#4562](https://github.com/github/copilot-cli/issues/4562) MCP reload reuses startup workspace config after .github/mcp.json changes
- [#4628](https://github.com/github/copilot-cli/issues/4628) Autopilot background-task timeout exits active parent after subagent completes
- [#2780](https://github.com/github/copilot-cli/issues/2780) Shared MCP Token Cache Across CLI Sessions
- [#2444](https://github.com/github/copilot-cli/issues/2444) Remaining reqs. disappear after first prompt with GPT models.
- [#5039](https://github.com/github/copilot-cli/issues/5039) MCP OAuth login fails with HTTP 400 when server rejects MCP-Protocol-Version (no fallback to older version)

### OpenCode (`anomalyco/opencode`)

**Stars:** 211,511 · **Open issues:** 6,219 · **Last push:** 1h ago

On October 3, 2026, there were no new releases in OpenCode; however, several important pull requests were merged, including fixes to maintain question form highlights on the raised surface (#52872) and a rename of the legacy provider in the top-level model (#51901). Additionally, significant code improvements were made with the enabling of "noUnusedLocals" across multiple packages, enhancing code cleanliness and potentially reducing technical debt. Among new issues, the feature request for a skip field in tool execution demonstrates a growing interest in deterministic pre-execution gating, which may impact workflow consistency (#52837).

#### ✅ Merged PRs
- [#52872](https://github.com/anomalyco/opencode/pull/52872) fix(tui): keep question form highlights on the raised surface
- [#51901](https://github.com/anomalyco/opencode/pull/51901) fix(core): rename legacy provider in top-level model
- [#52858](https://github.com/anomalyco/opencode/pull/52858) chore: enable noUnusedLocals in ai and core
- [#52857](https://github.com/anomalyco/opencode/pull/52857) chore(cli): enable noUnusedLocals
- [#52856](https://github.com/anomalyco/opencode/pull/52856) chore(app): enable noUnusedLocals
- [#51889](https://github.com/anomalyco/opencode/pull/51889) refactor(core): remove duplicate v1 config migration
- [#52851](https://github.com/anomalyco/opencode/pull/52851) chore(tui): enable noUnusedLocals
- [#52143](https://github.com/anomalyco/opencode/pull/52143) chore(nix): run the nix eval workflow on v2
- [#51891](https://github.com/anomalyco/opencode/pull/51891) fix(nix): repair three packaging defects on the v2 branch
- [#52850](https://github.com/anomalyco/opencode/pull/52850) chore: enable noUnusedLocals in schema, server, sdk and smaller packages
- [#52849](https://github.com/anomalyco/opencode/pull/52849) chore: enable noUnusedLocals in already-clean packages
- [#52848](https://github.com/anomalyco/opencode/pull/52848) test(tui): drop title shimmer animation timing tests
- [#52614](https://github.com/anomalyco/opencode/pull/52614) fix(core): retry transient MCP connect failures

#### 🐛 New Issues
- [#52837](https://github.com/anomalyco/opencode/issues/52837) [FEATURE]: Add a skip field to tool.execute.before (for deterministic pre-execution gating) 💬3
- [#52796](https://github.com/anomalyco/opencode/issues/52796) core: tool stuck in pending state when hitting SQLITE full errors 💬4
- [#52761](https://github.com/anomalyco/opencode/issues/52761) V2: summary compaction still reads almost nothing from the prompt cache, even right after a warm request 💬3
- [#52701](https://github.com/anomalyco/opencode/issues/52701) skills: newly added skill directories are not discovered until service restart 💬2
- [#52794](https://github.com/anomalyco/opencode/issues/52794) tui: /sessions shows no pin option and no Pinned section in 2.0.21 on Windows 💬3
- [#52878](https://github.com/anomalyco/opencode/issues/52878) provider/catalog: openai models selected via models.dev or config dropped when connected with ChatGPT oauth 💬2
- [#52870](https://github.com/anomalyco/opencode/issues/52870) [FEATURE]: Bounded plugin hooks at V2 session execution boundaries 💬2
- [#52863](https://github.com/anomalyco/opencode/issues/52863) nix-eval never builds, so a broken Nix derivation can merge into v2 undetected 💬2
- [#52833](https://github.com/anomalyco/opencode/issues/52833) /init and /review use the git worktree root instead of the session location directory 💬2
- [#52628](https://github.com/anomalyco/opencode/issues/52628) Session permanently fails after compaction when the retained tail starts mid-turn (Claude thinking blocks cannot be modified) 💬2
- [#52843](https://github.com/anomalyco/opencode/issues/52843) [TEST] Ignore this 💬2
- [#52839](https://github.com/anomalyco/opencode/issues/52839) Web UI: 'Open project' dialog gets stuck on 'Loading' when re-opened 💬2
- [#52836](https://github.com/anomalyco/opencode/issues/52836) Add a skip field to ool.execute.before (for deterministic pre-execution gating) `needs:compliance` 💬2
- [#52791](https://github.com/anomalyco/opencode/issues/52791) We are encountering a technical streaming issue: "Error: Invalid opencode-go/anthropic-messages stream event". 💬2
- [#52879](https://github.com/anomalyco/opencode/issues/52879) providers.settings.transport not respected 💬1
- [#52873](https://github.com/anomalyco/opencode/issues/52873) [FEATURE]: support `rules` instruction mechanism in v2 💬1
- [#52874](https://github.com/anomalyco/opencode/issues/52874) core: instruction discovery stack-overflows with case-variant Windows paths ("Instruction initialization blocked: core/instructions") 💬1
- [#52867](https://github.com/anomalyco/opencode/issues/52867) [FEATURE]: Let users message a subagent directly from its view 💬1
- [#52862](https://github.com/anomalyco/opencode/issues/52862) not able to select model, option is not available `needs:compliance` 💬1
- [#52860](https://github.com/anomalyco/opencode/issues/52860) ACP: provider status and rate-limit headers of API errors are dropped 💬1
- [#52854](https://github.com/anomalyco/opencode/issues/52854) MCP connections keep contacting an endpoint during Retry-After after HTTP 429 💬1
- [#52846](https://github.com/anomalyco/opencode/issues/52846) permission: pending requests destroyed on instance disposal without revocation event; dialog unanswerable, replies 404 forever 💬1
- [#52844](https://github.com/anomalyco/opencode/issues/52844) tui: migrated V1 sessions missing from /sessions list after V2 upgrade `needs:compliance` 💬1
- [#52880](https://github.com/anomalyco/opencode/issues/52880) subagent: Bash-less agent profiles fail at launch with free-tier error
- [#52852](https://github.com/anomalyco/opencode/issues/52852) MCP resource discovery repeats identical requests on one live connection
- [#52845](https://github.com/anomalyco/opencode/issues/52845) [FEATURE]: please add tokenharbor.ai

#### 🔒 Closed Issues
- [#52123](https://github.com/anomalyco/opencode/issues/52123) Nix checks do not run on v2 pull requests
- [#52452](https://github.com/anomalyco/opencode/issues/52452) session: tool aborted by a background-service restart leaves unpaired tool_calls, producing 400 on resume
- [#52554](https://github.com/anomalyco/opencode/issues/52554) Go plan model (Kimi K3) billed against Zen pay-as-you-go credit instead of Go monthly quota
- [#52401](https://github.com/anomalyco/opencode/issues/52401) console: usage limit bars read inverted — remaining (green fill) is mistaken for spend
- [#52007](https://github.com/anomalyco/opencode/issues/52007) provider: enforce a total request deadline on native HTTP streams
- [#52628](https://github.com/anomalyco/opencode/issues/52628) Session permanently fails after compaction when the retained tail starts mid-turn (Claude thinking blocks cannot be modified)
- [#52836](https://github.com/anomalyco/opencode/issues/52836) Add a skip field to ool.execute.before (for deterministic pre-execution gating)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,279 · **Open issues:** 1,603 · **Last push:** <1h ago

On October 2, 2026, Qwen Code released version v0.24.7-nightly.20261002.a011f66944, featuring fixes to align Code Mode text with lazy tool discovery and to ensure approved cross-directory tool calls are respected. Significant merged pull requests included enhancements to the managed agent, allowing Workspace-bound session creators to submit, cancel, and rename tasks, and a fix ensuring that Markdown emphasis style is preserved during extraction. A notable new issue was raised concerning side queries requesting max_tokens that exceed the model's context window, highlighting a limitation in output budgeting. Overall, the day focused on refining existing functionalities and addressing emerging concerns.

#### 🚀 New Releases
- [v0.24.7-nightly.20261002.a011f66944](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261002.a011f66944) Release v0.24.7-nightly.20261002.a011f66944

#### ✅ Merged PRs
- [#13152](https://github.com/QwenLM/qwen-code/pull/13152) fix(acp): preserve configured OpenAI auth choice on model switches
- [#13112](https://github.com/QwenLM/qwen-code/pull/13112) feat(managed-agent): let a Workspace-bound Session's creator submit, cancel and rename
- [#13240](https://github.com/QwenLM/qwen-code/pull/13240) fix(memory): preserve Markdown emphasis style during extraction
- [#13225](https://github.com/QwenLM/qwen-code/pull/13225) feat(managed-agent): Restore safe retired tool output collection
- [#11889](https://github.com/QwenLM/qwen-code/pull/11889) fix(core): swap extension artifacts by copy when Windows locks the directory

#### 🐛 New Issues
- [#13208](https://github.com/QwenLM/qwen-code/issues/13208) Side queries can request max_tokens >= the model's context window (output budgeting is not window-aware outside llm-chat) `priority/P2` `type/bug` `category/core` `scope/token-management` 💬4
- [#13238](https://github.com/QwenLM/qwen-code/issues/13238) agent hosts: late result after terminal settlement is acknowledged as already applied and drops incurred usage `priority/P2` `type/bug` `category/core` `scope/token-management` 💬4
- [#13220](https://github.com/QwenLM/qwen-code/issues/13220) test(feishu): cover inbound file persistence and fallback offline `priority/P3` `category/integration` `scope/testing` `type/enhancement` 💬4
- [#13234](https://github.com/QwenLM/qwen-code/issues/13234) TLS-stack-selective connection resets on some carrier links: extension + daemon (Electron/BoringSSL) fail while Node 24 (OpenSSL 3.5) succeeds — diagnosis + workaround `priority/P2` `type/bug` `category/platform` `scope/vscode` 💬4
- [#13201](https://github.com/QwenLM/qwen-code/issues/13201) fix(memory): the managed auto-memory extractor is told no Markdown style, so its rewrites mix emphasis styles in linted files `priority/P3` `type/bug` `category/core` `scope/markdown` 💬3
- [#13252](https://github.com/QwenLM/qwen-code/issues/13252) Main-turn output clamp can exceed a user-configured small context window (MIN_CLAMPED_OUTPUT_TOKENS 4K floor) — second half of #13208 `priority/P2` `type/bug` `category/core` `scope/token-management` 💬3
- [#13253](https://github.com/QwenLM/qwen-code/issues/13253) fix(core): the four new `toolSearchBridgeSentence` sites emit the bridge sentence without the registration gate their two pre-existing siblings use `priority/P2` `type/bug` `category/core` `roadmap/subagents-tools` 💬3
- [#13251](https://github.com/QwenLM/qwen-code/issues/13251) fix(memory): deferred Suggestions from #13156 — astral percent-expansion, unobservable non-contiguous eviction, inaccurate denylist rationale `priority/P3` `category/core` `scope/memory` `type/enhancement` 💬3
- [#13249](https://github.com/QwenLM/qwen-code/issues/13249) fix(ci): the nightly CodeQL scan can die silently — no notifier covers it, and a cancelled or empty run reads as green `priority/P2` `type/bug` `scope/ci-cd` 💬3
- [#13248](https://github.com/QwenLM/qwen-code/issues/13248) Web Shell: tool-card diff doesn't wrap long lines (per-line horizontal scrollbars) `priority/P3` `type/bug` `category/ui` `status/ready-for-agent` 💬3
- [#13245](https://github.com/QwenLM/qwen-code/issues/13245) perf(ci): route trusted PR lanes off hosted runners onto the idle ECS pool `priority/P2` `type/feature-request` `category/development` `scope/github-actions` 💬3
- [#13242](https://github.com/QwenLM/qwen-code/issues/13242) Move the managed-agent seal/finish stream rehash off the request thread `priority/P2` `category/performance` `scope/latency` `type/enhancement` 💬3
- [#13239](https://github.com/QwenLM/qwen-code/issues/13239) /context estimate can account for more tokens than the context window `priority/P3` `type/bug` `category/cli` `scope/commands` 💬3
- [#13236](https://github.com/QwenLM/qwen-code/issues/13236) memory: the index budget has no per-entry share, so long paths still crowd ordinary notes out of MEMORY.md `priority/P3` `status/blocked` `type/bug` `category/core` 💬3
- [#13233](https://github.com/QwenLM/qwen-code/issues/13233) fix(core): reasoning/custom_tool_call groups fall through both orphan sweeps after the pair cleanup was widened to custom calls `priority/P3` `status/blocked` `type/bug` `category/core` 💬3
- [#13232](https://github.com/QwenLM/qwen-code/issues/13232) /context shows a 1M context window as 1000.0k tokens `priority/P3` `type/bug` `category/ui` `scope/rendering` 💬3
- [#13228](https://github.com/QwenLM/qwen-code/issues/13228) Runtime Broker: steady-state recovery scan re-reconciles healthy bindings every 5s, with no backoff and no supporting index `priority/P2` `category/performance` `type/enhancement` `need-discussion` 💬3
- [#13221](https://github.com/QwenLM/qwen-code/issues/13221) Token counts just under a unit boundary show as 1000.0k instead of 1.0m `priority/P3` `type/bug` `category/ui` `scope/rendering` 💬3
- [#13207](https://github.com/QwenLM/qwen-code/issues/13207) Follow-up: memory content read hardening deferred from #13154 (symlink containment, bounded read, retry path) `priority/P2` `type/bug` `category/security` `scope/memory` 💬3
- [#13205](https://github.com/QwenLM/qwen-code/issues/13205) A few pull requests are stuck and we do not want them to go unnoticed `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬3
- [#13204](https://github.com/QwenLM/qwen-code/issues/13204) test(runtime-broker): InMemory repositories drift from JDBC semantics, hiding JDBC-only races from service tests `status/need-information` `priority/P3` `type/bug` `category/development` 💬3
- [#13230](https://github.com/QwenLM/qwen-code/issues/13230) Main CI failed: Qwen Code CI on b3dda468f2e4 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#13222](https://github.com/QwenLM/qwen-code/issues/13222) Main CI failed: SDK Java — flyway duplicate version 31 in packages/sdk-java/managed-agent-server (+291 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2

#### 🔒 Closed Issues
- [#12217](https://github.com/QwenLM/qwen-code/issues/12217) A comment before `export const meta` fails the workflow script and misleads the hint
- [#12504](https://github.com/QwenLM/qwen-code/issues/12504) [Bug] On Linux the clipboard-unavailable message names the wrong cause ("native clipboard module could not be loaded")
- [#13201](https://github.com/QwenLM/qwen-code/issues/13201) fix(memory): the managed auto-memory extractor is told no Markdown style, so its rewrites mix emphasis styles in linted files
- [#13193](https://github.com/QwenLM/qwen-code/issues/13193) fix(managed-hooks): releaseEarlierOwners releases every earlier activation on each load and detach
- [#13100](https://github.com/QwenLM/qwen-code/issues/13100) fix(web-shell): memory panel User tab can silently replace the global QWEN.md
- [#12940](https://github.com/QwenLM/qwen-code/issues/12940) test(sdk-java): prevent duplicate Flyway migration versions from breaking main
- [#11883](https://github.com/QwenLM/qwen-code/issues/11883) Extension update and uninstall fail on Windows with `EPERM`

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

**Stars:** 391,196 · **Open issues:** 9,188 · **Last push:** <1h ago

On October 3, 2026, OpenClaw released version 2026.8.35, an `extended-stable` update incorporating critical security patches, reliability improvements, and new model support, following the latest release of 2026.9.7. Significant merged features included updates to the plugin SDK that join service and account scheduling at retirement, and multiple refactorings aimed at optimizing various components, such as removing duplicate bookkeeping in the gateway and enhancing media generation. Among the issues raised, a notable bug involves the durable context-engine becoming stuck as 'session-rebound' after updates, significantly impacting CPU usage. Additionally, users reported problems with session SQLite receipt identity becoming unstable after macOS VM reboots and latency persisting in production session writes, highlighting ongoing challenges for developers.

#### 🚀 New Releases
- [v2026.8.35](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35) openclaw 2026.8.35

#### ✅ Merged PRs
- [#163558](https://github.com/openclaw/openclaw/pull/163558) fix(swarm): wait for owned cleanup when stopping children
- [#162669](https://github.com/openclaw/openclaw/pull/162669) feat(plugin-sdk): join service and account scheduling at retirement
- [#163935](https://github.com/openclaw/openclaw/pull/163935) chore(i18n): refresh native locales
- [#163892](https://github.com/openclaw/openclaw/pull/163892) refactor(macos): deslop macos
- [#163913](https://github.com/openclaw/openclaw/pull/163913) fix(pr): recover merges after REST projection refusals
- [#163862](https://github.com/openclaw/openclaw/pull/163862) fix(gateway): approve same-machine node capabilities silently
- [#163827](https://github.com/openclaw/openclaw/pull/163827) refactor(providers): deslop provider family
- [#163912](https://github.com/openclaw/openclaw/pull/163912) refactor(doctor): remove unused snapshot fallback
- [#163921](https://github.com/openclaw/openclaw/pull/163921) refactor(gateway): remove duplicate worker mutation bookkeeping
- [#163893](https://github.com/openclaw/openclaw/pull/163893) fix: deliver final replies across reloads for channels without sender preparation
- [#163916](https://github.com/openclaw/openclaw/pull/163916) refactor(media): deslop media generation and understanding
- [#163928](https://github.com/openclaw/openclaw/pull/163928) fix(doctor): repair split Discord migration regression tests
- [#163905](https://github.com/openclaw/openclaw/pull/163905) ci: pin the OpenClaw Bun fork 13311 prerelease
- [#163605](https://github.com/openclaw/openclaw/pull/163605) refactor(sessions): move async durable transcript reads off the Gateway thread
- [#163838](https://github.com/openclaw/openclaw/pull/163838) fix: restore MIT license detection
- [#163805](https://github.com/openclaw/openclaw/pull/163805) fix(test): keep subprocess fixtures consistent across Node and Bun
- [#163807](https://github.com/openclaw/openclaw/pull/163807) fix(agents): prevent shared SQLite stores in model-switch tests
- [#163806](https://github.com/openclaw/openclaw/pull/163806) fix(codex): restore catalog lint checks
- [#163804](https://github.com/openclaw/openclaw/pull/163804) fix: put QuickJS plugin mascot on white
- [#163789](https://github.com/openclaw/openclaw/pull/163789) ci: use Blacksmith for default fork lint checks
- [#163904](https://github.com/openclaw/openclaw/pull/163904) fix(doctor): preserve verified session imports across VM reboots
- [#163488](https://github.com/openclaw/openclaw/pull/163488) fix(qa): restore Telegram release validation
- [#163852](https://github.com/openclaw/openclaw/pull/163852) fix(agent): mid-turn messages no longer skip freshly requested tools
- [#163823](https://github.com/openclaw/openclaw/pull/163823) refactor(workboard): rule-based Sessions boards with live facts and no utility model
- [#163723](https://github.com/openclaw/openclaw/pull/163723) refactor(state): retire unshipped agent session schemas
- [#163898](https://github.com/openclaw/openclaw/pull/163898) perf(ui): deliver transcript geometry in one pane render
- [#163901](https://github.com/openclaw/openclaw/pull/163901) fix(cli): preserve the reason when an update fails
- [#163902](https://github.com/openclaw/openclaw/pull/163902) chore(ui): refresh control ui locales
- [#163869](https://github.com/openclaw/openclaw/pull/163869) fix(doctor): admit disposable update rehearsals before repair
- [#163890](https://github.com/openclaw/openclaw/pull/163890) refactor(terminal): remove select styler injection
- [#163850](https://github.com/openclaw/openclaw/pull/163850) refactor(channels): deslop Feishu, WhatsApp, and Teams
- [#163886](https://github.com/openclaw/openclaw/pull/163886) test(android): await gateway handoff owner state
- [#163896](https://github.com/openclaw/openclaw/pull/163896) fix(msteams): retain recovery guidance for retired state
- [#163814](https://github.com/openclaw/openclaw/pull/163814) fix(agents): stale pause notice wakes the requester after a quick subagent follow-up
- [#163786](https://github.com/openclaw/openclaw/pull/163786) fix(plugins): honor reply defaults from July harnesses
- [#163185](https://github.com/openclaw/openclaw/pull/163185) fix(ui): file links outside the session workspace fail to open, HTML previews drop their assets
- [#163894](https://github.com/openclaw/openclaw/pull/163894) refactor(ci): deslop browser test ownership inventory
- [#158513](https://github.com/openclaw/openclaw/pull/158513) docs: remove generic 10-minute agent timeout examples
- [#163866](https://github.com/openclaw/openclaw/pull/163866) fix(nodes): reduce the delay before remote replies finish
- [#163874](https://github.com/openclaw/openclaw/pull/163874) refactor(worker): streamline validated RPC dispatch
- [#163884](https://github.com/openclaw/openclaw/pull/163884) fix(test): Doctor locator fixture uses retired Discord config
- [#163876](https://github.com/openclaw/openclaw/pull/163876) fix(plugins): load managed npm plugins across filesystems
- [#163887](https://github.com/openclaw/openclaw/pull/163887) chore(ui): refresh control ui locales
- [#163882](https://github.com/openclaw/openclaw/pull/163882) fix(test): session search scope fixture times out before querying
- [#163883](https://github.com/openclaw/openclaw/pull/163883) fix(test): compaction lifecycle tests race awaited persistence
- [#163879](https://github.com/openclaw/openclaw/pull/163879) fix(ci): keep shell values free of terminal colors
- [#163878](https://github.com/openclaw/openclaw/pull/163878) fix(gateway): accept fenced JSON from the session observer model
- [#163868](https://github.com/openclaw/openclaw/pull/163868) refactor(node-host): consolidate command execution ownership
- [#163819](https://github.com/openclaw/openclaw/pull/163819) refactor(gateway): move placement result settlement into workers
- [#163855](https://github.com/openclaw/openclaw/pull/163855) refactor(doctor): remove unused harness environment argument
- [#159673](https://github.com/openclaw/openclaw/pull/159673) refactor(plugins): reuse test environment snapshots
- [#163797](https://github.com/openclaw/openclaw/pull/163797) refactor(cron): prepare display names in workers
- [#163867](https://github.com/openclaw/openclaw/pull/163867) fix(test): merge recovery refusal cases expect obsolete diagnostic
- [#163834](https://github.com/openclaw/openclaw/pull/163834) fix(gateway): release completed runs and obsolete cache state (main-thread heap retention)
- [#163861](https://github.com/openclaw/openclaw/pull/163861) refactor(workers): consolidate placement completion writes
- [#163821](https://github.com/openclaw/openclaw/pull/163821) fix(bun): preserve CLI launches, usage reports, and subagent completion
- [#163849](https://github.com/openclaw/openclaw/pull/163849) fix: make plugin MCP rows expandable and keep README nearby
- [#163854](https://github.com/openclaw/openclaw/pull/163854) refactor(tui): deslop TUI and runtime plugins
- [#163829](https://github.com/openclaw/openclaw/pull/163829) fix(ui): Tool Search tool calls render as blank rows in chat
- [#163864](https://github.com/openclaw/openclaw/pull/163864) chore(ui): refresh control ui locales
- [#163763](https://github.com/openclaw/openclaw/pull/163763) perf(gateway): release unused session row data
- [#163860](https://github.com/openclaw/openclaw/pull/163860) fix(ui): show chat plugin icons promptly and include publishers
- [#163591](https://github.com/openclaw/openclaw/pull/163591) refactor(sdk): retire deprecated provider hook constants
- [#163496](https://github.com/openclaw/openclaw/pull/163496) refactor(agents): move workspace state operations off the Gateway thread
- [#163840](https://github.com/openclaw/openclaw/pull/163840) refactor(commands): deslop commands, CLI, and infrastructure
- [#162523](https://github.com/openclaw/openclaw/pull/162523) fix(telegram): rich messages send tg://user ID links as links instead of mentions
- [#163859](https://github.com/openclaw/openclaw/pull/163859) test(ui,browser,providers): remove low-value tests (batch d161)
- [#163843](https://github.com/openclaw/openclaw/pull/163843) fix(test): provider-review suggestion checks race with maintenance
- [#163817](https://github.com/openclaw/openclaw/pull/163817) fix: dashboard sessions get crustacean names when the model serves one request at a time
- [#163784](https://github.com/openclaw/openclaw/pull/163784) feat(agents): allow managed GitHub identity in opted-in sandboxes
- [#160442](https://github.com/openclaw/openclaw/pull/160442) perf(nodes): load only what a worker turn needs
- [#163836](https://github.com/openclaw/openclaw/pull/163836) fix: plugins reload while searching and leave incomplete loading states
- [#163847](https://github.com/openclaw/openclaw/pull/163847) fix(doctor): stop flagging preserved systemd environment overrides
- [#163848](https://github.com/openclaw/openclaw/pull/163848) docs: prefer plugins for general ClawHub searches
- [#163780](https://github.com/openclaw/openclaw/pull/163780) fix: keep Doctor migration capture within plugin data
- [#163762](https://github.com/openclaw/openclaw/pull/163762) fix: video widgets trap scrolling and start without previews
- [#160984](https://github.com/openclaw/openclaw/pull/160984) fix(ui): gate portal discovery and startup reads by scope
- [#163757](https://github.com/openclaw/openclaw/pull/163757) chore(ui): refresh control ui locales
- [#163744](https://github.com/openclaw/openclaw/pull/163744) improve(ci): shorten fork PR compiler checks
- [#163432](https://github.com/openclaw/openclaw/pull/163432) improve(update): shorter Gateway downtime during npm package updates
- [#163831](https://github.com/openclaw/openclaw/pull/163831) build(macos): pin the app runtime to OpenClaw Bun 13311cf83e
- [#162960](https://github.com/openclaw/openclaw/pull/162960) fix: enable Skill source lifecycle in paired-node workspaces
- [#163808](https://github.com/openclaw/openclaw/pull/163808) fix(doctor): stop repair when admitted originals cannot be verified
- [#158303](https://github.com/openclaw/openclaw/pull/158303) fix(mxc): Windows sandbox fails to activate or run commands
- [#161369](https://github.com/openclaw/openclaw/pull/161369) fix(telegram): separate session dashboards from owner-only Control UI launch
- [#163790](https://github.com/openclaw/openclaw/pull/163790) feat(state): incognito actor lifecycle adapters (P4b, inactive)
- [#163830](https://github.com/openclaw/openclaw/pull/163830) fix(browser): isolate list-profile MCP cache
- [#163771](https://github.com/openclaw/openclaw/pull/163771) perf(gateway): serve transcript pages as transferred bytes instead of cloning entry objects onto the main thread
- [#163820](https://github.com/openclaw/openclaw/pull/163820) feat(plugins): expose session change subscription on the gateway runtime
- [#163811](https://github.com/openclaw/openclaw/pull/163811) refactor(ai): remove unused internal redaction options
- [#163770](https://github.com/openclaw/openclaw/pull/163770) fix(test): keep Doctor capture fixtures private under umask 0002
- [#163813](https://github.com/openclaw/openclaw/pull/163813) feat(diagnostics): allow long live-only heap profile windows for retention attribution
- [#162176](https://github.com/openclaw/openclaw/pull/162176) feat(memory): resolve the memory audience in the host
- [#163737](https://github.com/openclaw/openclaw/pull/163737) fix(test): swap baseline time-budget bounds case flakes under host load
- [#163803](https://github.com/openclaw/openclaw/pull/163803) fix(update): finish pending migrations before recovery restart
- [#160629](https://github.com/openclaw/openclaw/pull/160629) fix(discord): scope active thread lists to allowed channel
- [#163704](https://github.com/openclaw/openclaw/pull/163704) fix(cron): stale cron timeout aborts a later run in the same session
- [#163776](https://github.com/openclaw/openclaw/pull/163776) fix: keep execution permissions hover on Learn more
- [#161006](https://github.com/openclaw/openclaw/pull/161006) fix(heartbeat): Control UI completion replies leak to an explicit heartbeat channel
- [#163745](https://github.com/openclaw/openclaw/pull/163745) fix: hide subagent scaffolding and redundant title prefixes
- [#163772](https://github.com/openclaw/openclaw/pull/163772) fix(ui): keep selected-text comment input readable while scrolling
- [#163730](https://github.com/openclaw/openclaw/pull/163730) fix(gateway): approve same-machine native node role upgrades silently
- [#163734](https://github.com/openclaw/openclaw/pull/163734) improve(ui): bring the community chair invitation to the sidebar
- [#163716](https://github.com/openclaw/openclaw/pull/163716) fix(scripts): restore Workboard UI proof captures
- [#163798](https://github.com/openclaw/openclaw/pull/163798) fix(agents): report structured visible spawn start errors
- [#163769](https://github.com/openclaw/openclaw/pull/163769) fix: avoid false delivery warnings after rejected replies
- [#163793](https://github.com/openclaw/openclaw/pull/163793) chore(i18n): refresh native locales
- [#163787](https://github.com/openclaw/openclaw/pull/163787) fix(macos): Mac node misses Claude Code sessions when CLAUDE_CONFIG_DIR is set
- [#163788](https://github.com/openclaw/openclaw/pull/163788) fix: CLI and Gateway processes can hang forever at exit on Node 24 and 26
- [#163694](https://github.com/openclaw/openclaw/pull/163694) fix(test): Control UI base-comparison test times out and hides it behind ENOTEMPTY under host load
- [#163623](https://github.com/openclaw/openclaw/pull/163623) fix(test): Gateway E2E shard 1/4 fails after the concise error copy and keyed agent roster changes
- [#163324](https://github.com/openclaw/openclaw/pull/163324) docs: macOS 13.5 is Node's support target, not a hard floor for the CLI and Gateway
- [#163371](https://github.com/openclaw/openclaw/pull/163371) test(gateway): prepare session projection before tool request deadlines
- [#163362](https://github.com/openclaw/openclaw/pull/163362) improve(control-ui): flag builds too large to keep the previous build for open tabs
- [#163777](https://github.com/openclaw/openclaw/pull/163777) fix(test): stop Doctor integrity teardown from breaking commands
- [#163766](https://github.com/openclaw/openclaw/pull/163766) fix(test): exec approval Gateway e2e fails at startup on its legacy agents.list fixture
- [#163754](https://github.com/openclaw/openclaw/pull/163754) chore(db): reclassify worker-only and boot-only inventory sites with evidence (T1 1,508 → 1,354)
- [#160982](https://github.com/openclaw/openclaw/pull/160982) fix(ui): gate system information at the shared reader
- [#163740](https://github.com/openclaw/openclaw/pull/163740) refactor(channels): deslop Slack and Matrix
- [#129120](https://github.com/openclaw/openclaw/pull/129120) fix(agents): reject empty sessions_search queries in the tool schema
- [#163649](https://github.com/openclaw/openclaw/pull/163649) fix(test): CLI process tests fail after concise Gateway error copy
- [#163728](https://github.com/openclaw/openclaw/pull/163728) refactor(discord): deslop discord
- [#163767](https://github.com/openclaw/openclaw/pull/163767) refactor(plugins): deslop imessage, mattermost, and voice-call
- [#163761](https://github.com/openclaw/openclaw/pull/163761) fix(workboard): make Sessions boards work on multi-agent Gateways
- [#163764](https://github.com/openclaw/openclaw/pull/163764) test(gateway): add sustained heap retention diagnostics
- [#163719](https://github.com/openclaw/openclaw/pull/163719) test(chat): await agent navigation bootstraps instead of wall-clock polling
- [#163718](https://github.com/openclaw/openclaw/pull/163718) fix(qa): run Telegram plugin source in --source-gateway userbot runs
- [#163690](https://github.com/openclaw/openclaw/pull/163690) perf(gateway): serve the listener before multi-gigabyte store validation and honor clean-close receipts at startup
- [#163758](https://github.com/openclaw/openclaw/pull/163758) feat(macos): add a --no-activate launch flag for background automation
- [#163725](https://github.com/openclaw/openclaw/pull/163725) fix(agents): preserve host authority across module reloads
- [#162175](https://github.com/openclaw/openclaw/pull/162175) feat(memory): add a provider-neutral memory provider runtime
- [#163729](https://github.com/openclaw/openclaw/pull/163729) docs(doctor): Doctor repairs session provider aliases instead of refusing them
- [#163594](https://github.com/openclaw/openclaw/pull/163594) refactor(gateway): move worker transcript replay off the main thread
- [#163752](https://github.com/openclaw/openclaw/pull/163752) fix(test): avoid unnecessary node launcher worker builds
- [#163759](https://github.com/openclaw/openclaw/pull/163759) refactor(telegram): deslop telegram
- [#163738](https://github.com/openclaw/openclaw/pull/163738) improve(ui): localize the community chair invitation
- [#163743](https://github.com/openclaw/openclaw/pull/163743) refactor(sessions): remove unused incognito outbox env parameter
- [#163688](https://github.com/openclaw/openclaw/pull/163688) fix(gateway): release session catalog list lifetimes when the response finishes and stop keying providers per connection
- [#160980](https://github.com/openclaw/openclaw/pull/160980) fix: skip discussion probes without read access
- [#160978](https://github.com/openclaw/openclaw/pull/160978) fix(ui): respect read scopes for publication, PR status, and discussion
- [#163732](https://github.com/openclaw/openclaw/pull/163732) fix(talk): retire a replaced legacy realtime reply before it can start
- [#163741](https://github.com/openclaw/openclaw/pull/163741) fix(subagents): avoid cleanup failures during overlapping completion
- [#163428](https://github.com/openclaw/openclaw/pull/163428) feat(plugins): let plugins open their session side panels
- [#157496](https://github.com/openclaw/openclaw/pull/157496) fix(ci): isolate all native Testbox prepare gates
- [#163692](https://github.com/openclaw/openclaw/pull/163692) refactor(test): Telegram skill tests share one child-process teardown helper
- [#163742](https://github.com/openclaw/openclaw/pull/163742) fix: restore missing ordinary iMessage final replies
- [#163747](https://github.com/openclaw/openclaw/pull/163747) refactor(ui): one presentation input per chat surface
- [#163675](https://github.com/openclaw/openclaw/pull/163675) refactor(android): deslop android
- [#163497](https://github.com/openclaw/openclaw/pull/163497) refactor(sdk): retire sourceVisibleReplies harness alias
- [#163699](https://github.com/openclaw/openclaw/pull/163699) feat(macos): show the session tree and cross-agent Pages in the native sidebar
- [#160871](https://github.com/openclaw/openclaw/pull/160871) fix(ui): hide progress card locally while retaining shared clear
- [#161293](https://github.com/openclaw/openclaw/pull/161293) fix(compaction): distinguish failed checks from pending work
- [#160979](https://github.com/openclaw/openclaw/pull/160979) fix: stop PR status reads for session-only viewers
- [#163731](https://github.com/openclaw/openclaw/pull/163731) fix(tests): prevent realtime overflow flakes on busy runners
- [#163630](https://github.com/openclaw/openclaw/pull/163630) fix(test): CLI JSON e2e cases time out when the built CLI deadlocks in process.exit on loaded hosts
- [#163664](https://github.com/openclaw/openclaw/pull/163664) improve(ui): filter and sort online people
- [#163717](https://github.com/openclaw/openclaw/pull/163717) fix(ui): saved-message recovery counts cleared drafts as messages
- [#163205](https://github.com/openclaw/openclaw/pull/163205) refactor(reef): stop reconstructing historical delivery bindings
- [#161543](https://github.com/openclaw/openclaw/pull/161543) fix(watch): complete cache migration and ignore unchanged invalidations
- [#163715](https://github.com/openclaw/openclaw/pull/163715) refactor(cli): remove unused runtime default flag
- [#163713](https://github.com/openclaw/openclaw/pull/163713) refactor(workboard): deslop workboard, claws, and Linux
- [#163722](https://github.com/openclaw/openclaw/pull/163722) fix: show embedding vectors and dimensions in infer text output

#### 🐛 New Issues
- [#163566](https://github.com/openclaw/openclaw/issues/163566) [Bug] durable context-engine turns stuck as 'session-rebound' after update repair; session-resource-loader burns ~100 s CPU per turn (2026.9.7) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬6
- [#163466](https://github.com/openclaw/openclaw/issues/163466) [Bug]: Embedded auto-compaction hangs ~2.5 h (well past the 180 s safety timeout), then fails with session_writer_claim_changed_before_transcript_persistence (2026.9.7) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬4
- [#163568](https://github.com/openclaw/openclaw/issues/163568) [Bug]: Cron agentTurn into a shared session times out after its run already finished, and the timeout aborts a different run in that session `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#163870](https://github.com/openclaw/openclaw/issues/163870) 2026.9.7: session SQLite receipt identity is unstable across macOS VM reboots `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#163828](https://github.com/openclaw/openclaw/issues/163828) Browser tool: no secure way to fill interactive-login credentials without exposing them to the model `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#163638](https://github.com/openclaw/openclaw/issues/163638) [Bug]: 2026.9.5→9.7 managed update: activation doctor fails on its own offline-maintenance lock, flow still finalizes the swap, leaves agent DBs unmigrated and the gateway down until manual doctor --fix `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬3
- [#163748](https://github.com/openclaw/openclaw/issues/163748) [Bug]: Production session-write latency persists on 2026.9.7: queue waits and slow execution `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#163696](https://github.com/openclaw/openclaw/issues/163696) [Bug]: infer embedding create omits vectors without --json `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬3
- [#163774](https://github.com/openclaw/openclaw/issues/163774) [Bug]: memory_search silently degrades to full-text after 2026.4.21 → 2026.8.33 upgrade — vectorScore: 0 with a complete, healthy vector index `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬3
- [#163739](https://github.com/openclaw/openclaw/issues/163739) [Feature]: Make Control UI's Ctrl+Shift+A (Archive) configurable; it collides with browser shortcuts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#163611](https://github.com/openclaw/openclaw/issues/163611) Control UI memory overview: embeddings stuck on "Not checked yet" (doctor.memory.status probes only with probe:true, result discarded per request) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#163547](https://github.com/openclaw/openclaw/issues/163547) [Bug]: CLI "Update history reconciliation" step crashes with spawn EACCES, blocks plugin install/doctor/registry refresh `bug` `no-stale` `bug:crash` `clawsweeper:fix-shape-clear` 💬3
- [#163900](https://github.com/openclaw/openclaw/issues/163900) [Bug]: memory-core budget compaction never removes "## Consolidated Memory" sections, so Dreaming promotion stalls once MEMORY.md is full `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#163929](https://github.com/openclaw/openclaw/issues/163929) Update failure: managed-service-preflight (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#163871](https://github.com/openclaw/openclaw/issues/163871) [Bug]: Control UI rewind drops the claude-cli session binding instead of resuming at the recorded checkpoint, so the agent loses all context `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#163832](https://github.com/openclaw/openclaw/issues/163832) Plugins search reloads shelves and leaves incomplete skeletons `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#163822](https://github.com/openclaw/openclaw/issues/163822) [Feature]: Unsloth Studio integration `enhancement` `P3` 💬2
- [#163795](https://github.com/openclaw/openclaw/issues/163795) doctor SERVICE_DEFINITION_UNKNOWN "installer would discard or change an operator setting" persists after aligning unit `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#163826](https://github.com/openclaw/openclaw/issues/163826) Update failure: reconcile:abandoned (2026.9.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#163668](https://github.com/openclaw/openclaw/issues/163668) Session SQLite migration recovery report (session-sqlite-1790959994047-f7659468) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#163796](https://github.com/openclaw/openclaw/issues/163796) 2026.9.7 agent DB schema v23→v24 blocks gateway start (exit 78) with no pre-upgrade warning `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#163703](https://github.com/openclaw/openclaw/issues/163703) Sandboxed agents silently lose core tools missing from tools.sandbox.tools.alsoAllow (+ daemon restart doesn't restart Gateway container) `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬2
- [#163434](https://github.com/openclaw/openclaw/issues/163434) age-based transcript trimming deletes the session header, and ensureTranscriptHeader cannot repair a partially trimmed transcript `clawsweeper:needs-info` `impact:session-state` `impact:data-loss` `P0` 💬2
- [#163724](https://github.com/openclaw/openclaw/issues/163724) [Bug]: Discord thread requester: message-tool reply + NO_REPLY in the subagent settle turn is never credited, so the completion is marked failed ("recovered requester completed without durable final delivery evidence") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#163708](https://github.com/openclaw/openclaw/issues/163708) Cloud worker-turn sessions: deliver MEDIA: attachments from the remote workspace (prepareReplyMedia, like Codex remote-exec) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#163700](https://github.com/openclaw/openclaw/issues/163700) [Bug]: channel mediaMaxMb set to 0 makes every attachment send fail with a 0-byte limit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#163680](https://github.com/openclaw/openclaw/issues/163680) [Feature]: Coherent, configurable protected paths for rw sandboxes (skills are read-only but AGENTS.md/MEMORY.md stay writable) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#163615](https://github.com/openclaw/openclaw/issues/163615) [Bug]: A serialized JSON array on a MEDIA line attaches only the first file, while the same list with spaces attaches all `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#163531](https://github.com/openclaw/openclaw/issues/163531) [Bug]: `openclaw update` 2026.9.5 -> 2026.9.7 fails in validating Doctor ("Exit code: unknown", native SQLite/V8 stack); failure record keeps only an adjacent plugin warning `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#163617](https://github.com/openclaw/openclaw/issues/163617) [Bug]: Gateway startup materializes a 2.1 GB plugin dependency capture tree before config load, and can fail to open the listener `clawsweeper:needs-live-repro` `impact:crash-loop` `P0` `issue-rating: 🐚 platinum hermit` 💬2
- [#163274](https://github.com/openclaw/openclaw/issues/163274) [Feature]: Add response status, role, attendee count and online/in-person to iOS calendar.events `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#163596](https://github.com/openclaw/openclaw/issues/163596) [Bug]: Update rehearsal enumerates and header-sniffs every file under the state directory, including the agent workspace `P2` 💬2
- [#163537](https://github.com/openclaw/openclaw/issues/163537) Update failure: activating (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#163552](https://github.com/openclaw/openclaw/issues/163552) [Bug]: a persisted Workboard comment >2000 chars makes the card permanently immutable (read-path normalizer throws on unchanged rows) `P1` `impact:other` `clawsweeper:bulk-filed` 💬2
- [#163518](https://github.com/openclaw/openclaw/issues/163518) [Bug]: message tool says "plugin not loaded" for the loaded a2a channel when the channel has no message actions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#163544](https://github.com/openclaw/openclaw/issues/163544) [Bug]: Web Push notifications are silent on macOS because service worker omits silent: false `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#163486](https://github.com/openclaw/openclaw/issues/163486) `openclaw update` fails candidate-doctor ("Plugin dependency is outside the temporary update copy: ~/node_modules/chromium-bidi/...") when the home folder has its own node_modules `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬2
- [#163528](https://github.com/openclaw/openclaw/issues/163528) [Bug] Every agent run dies in under a second with WorkerTaskError: DataCloneError `impact:message-loss` `P0` `impact:ux-release-blocker` 💬2
- [#163526](https://github.com/openclaw/openclaw/issues/163526) [Bug] sessions.create always fails with UNAVAILABLE: Session creation publication owner is no longer current `impact:session-state` `P0` `impact:ux-release-blocker` 💬2
- [#163365](https://github.com/openclaw/openclaw/issues/163365) [Bug]: Doctor maintenance rehashes shared SQLite state on every admission check `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#163482](https://github.com/openclaw/openclaw/issues/163482) [Bug]: OpenClaw 2026.9.7 — `sessions.create` always fails with "Session creation publication owner is no longer current" (Windows) `bug` `regression` `impact:session-state` `P0` 💬2
- [#163458](https://github.com/openclaw/openclaw/issues/163458) [Feature]: Original-owner authority ordered with remote datastore commit `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#163443](https://github.com/openclaw/openclaw/issues/163443) Update failure: gateway-recovery-verification (2026.9.6) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#163406](https://github.com/openclaw/openclaw/issues/163406) [copilot] Ask OpenClaw setup inference probe fails: "canonical transcript persistence requires an exact runtime session target" `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#163263](https://github.com/openclaw/openclaw/issues/163263) [Feature]: no detection when two OpenClaw instances share the same channel app id `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#163924](https://github.com/openclaw/openclaw/issues/163924) [Bug]: chat.send from a resuming Control UI is rejected for its own __controlUiReconnectResume param — connection is then permanently unable to send `bug` `bug:behavior` `P1` `impact:message-loss` 💬1
- [#163881](https://github.com/openclaw/openclaw/issues/163881) [Bug]: monolithic extension test typecheck exhausts memory on a 20 GB host `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#163903](https://github.com/openclaw/openclaw/issues/163903) [Bug]: iOS chat: replies stay as empty "…" bubbles and final reply shows only stats after tool calls `P1` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#163873](https://github.com/openclaw/openclaw/issues/163873) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#163872](https://github.com/openclaw/openclaw/issues/163872) [Bug]: /compact on a claude-cli/* model ref skips native Claude Code compaction and fails with "No API key found for provider claude-cli" `P1` `impact:session-state` `impact:auth-provider` 💬1
- [#163858](https://github.com/openclaw/openclaw/issues/163858) MCP plugin sign-in fails on operator-managed HTTPS gateways `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#163856](https://github.com/openclaw/openclaw/issues/163856) [Feature]: Provider usage-window reserve so automations survive a saturated subscription window `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163802](https://github.com/openclaw/openclaw/issues/163802) [Bug]: 2026.9.7 dashboard sessions get crustacean fallback names when the model serves one request at a time `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#163846](https://github.com/openclaw/openclaw/issues/163846) Withdrawn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#163824](https://github.com/openclaw/openclaw/issues/163824) [Bug]: Applied Workshop skill stays invisible to its own agent when the agent has a skills allowlist `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#163810](https://github.com/openclaw/openclaw/issues/163810) [Bug]: real pnpm tarball test fails on Node layouts using npm PATH fallback `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#163778](https://github.com/openclaw/openclaw/issues/163778) [Bug]: Stored Responses reasoning ciphertext is truncated when it contains a dotted routing suffix `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#163794](https://github.com/openclaw/openclaw/issues/163794) Subagent / cron runs cannot raise plugin or exec approval cards (silent deny) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#163782](https://github.com/openclaw/openclaw/issues/163782) feat(slack): create public channels from message actions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#163760](https://github.com/openclaw/openclaw/issues/163760) [Bug]: ACP-bound source conversations enter native restart recovery before an ACP-aware admission boundary `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#163749](https://github.com/openclaw/openclaw/issues/163749) config get reports "Unknown config path" for fields a bundled plugin declares through $defs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#163416](https://github.com/openclaw/openclaw/issues/163416) Feature: let plugins open their registered session side panels `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163736](https://github.com/openclaw/openclaw/issues/163736) [Bug]: Telegram media group (album) silently truncated to first image only `P2` `impact:message-loss` 💬1
- [#163735](https://github.com/openclaw/openclaw/issues/163735) Update failure: global-install-foreign-destination (2026.9.6) `P0` `impact:ux-release-blocker` 💬1
- [#163733](https://github.com/openclaw/openclaw/issues/163733) Bug: Telegram multi-photo album truncated to first image only — silent drop with no warning `P2` `impact:message-loss` 💬1
- [#163659](https://github.com/openclaw/openclaw/issues/163659) Online people: compact workload filters and tabular counters `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163721](https://github.com/openclaw/openclaw/issues/163721) exec host=node: decide strict validation for explicit timeoutSeconds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163678](https://github.com/openclaw/openclaw/issues/163678) Mail duplicate-send guard blocks legitimate multi-recipient email sends `P2` 💬1
- [#163657](https://github.com/openclaw/openclaw/issues/163657) qianfan provider: DeepSeek models missing supportsStreamingUsage — responses buffer until fully generated `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#163653](https://github.com/openclaw/openclaw/issues/163653) [Bug]: macOS LaunchAgent pins ExitTimeOut=20s while the Linux drain budget is 330s (hardcoded, not overridable) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163651](https://github.com/openclaw/openclaw/issues/163651) Batch agent SQLite snapshot and preflight operations in one CLI process `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163644](https://github.com/openclaw/openclaw/issues/163644) [Feature]: Trusted tool policies cannot inspect host-issued invocation capability scope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163628](https://github.com/openclaw/openclaw/issues/163628) [Bug]: macOS app local connection always presents the shared token and never falls back to the password against an auth.mode=password gateway `clawsweeper:source-repro` `impact:auth-provider` `P0` `issue-rating: 🦞 diamond lobster` 💬1
- [#163625](https://github.com/openclaw/openclaw/issues/163625) MCP OAuth token resolution takes the state-lifecycle lease even for a fresh token, blocking Gateway turns `P1` `impact:message-loss` 💬1
- [#163607](https://github.com/openclaw/openclaw/issues/163607) Dreaming cron never triggers the real ingestion pipeline - recall store stays empty despite default-enabled config `P2` `impact:session-state` 💬1
- [#163599](https://github.com/openclaw/openclaw/issues/163599) [Bug]: Experience review is silently inactive for CLI-backed runtimes; doctor and curator status do not report it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#163600](https://github.com/openclaw/openclaw/issues/163600) [Feature]: Opt-in experience review for CLI-backed runtimes (transcript-based), including sandboxed agents `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163597](https://github.com/openclaw/openclaw/issues/163597) [Bug]: Telegram Test Server proxy hides forwarding failures `bug` 💬1
- [#163595](https://github.com/openclaw/openclaw/issues/163595) [Feature]: Browser preview card menu should open managed-tab and system-browser destinations unambiguously `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163584](https://github.com/openclaw/openclaw/issues/163584) [Bug]: Historical browser card/panel target shows "This tab is no longer available" with no reopen-URL recovery while the managed browser is running `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163581](https://github.com/openclaw/openclaw/issues/163581) [Bug]: A binding with session.dmScope "main" turns off the rememberAcrossConversations default and pauses memory search `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163402](https://github.com/openclaw/openclaw/issues/163402) [Feature]: Enrich Gateway ClawHub listing details and inspection for plugins and skills `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163569](https://github.com/openclaw/openclaw/issues/163569) [Bug]: Unix installer leaves openclaw off PATH with a custom ZDOTDIR `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#163567](https://github.com/openclaw/openclaw/issues/163567) [Bug]: Reasoning never streams live in Control UI or TUI with native Ollama provider (only shown after reply finishes) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163564](https://github.com/openclaw/openclaw/issues/163564) [Bug]: Completed terminal assistant reply can render without Reply/Copy actions `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#163561](https://github.com/openclaw/openclaw/issues/163561) RFC: keyless Copilot managed web-search provider (tools.web.search.provider: copilot) `P3` `impact:auth-provider` 💬1
- [#163559](https://github.com/openclaw/openclaw/issues/163559) WhatsApp: stickers sent from WhatsApp Web/Desktop never download — bundled Baileys rebuilds directPath on the non-media host from `url` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#163543](https://github.com/openclaw/openclaw/issues/163543) [Bug]: Control UI shows known tool outcomes as unknown `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#163540](https://github.com/openclaw/openclaw/issues/163540) [Feature]: Add a lightweight local SRT sandbox backend `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#163536](https://github.com/openclaw/openclaw/issues/163536) `sessions_spawn` accepts a duplicate `taskName` silently; `subagents list` cannot disambiguate by name `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163520](https://github.com/openclaw/openclaw/issues/163520) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#163505](https://github.com/openclaw/openclaw/issues/163505) Maintenance: share gateway CLI payload resolution `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#163517](https://github.com/openclaw/openclaw/issues/163517) [Feature]: A2A channel: let an agent read the answer to its A2A message (GetTask) through the message tool `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163509](https://github.com/openclaw/openclaw/issues/163509) [Bug]: spawn broker native resource attachment drops target input that arrives before ownership is admitted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#163508](https://github.com/openclaw/openclaw/issues/163508) Update failure: doctor-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#163491](https://github.com/openclaw/openclaw/issues/163491) [Bug]: Title historical-transcript-archive migration holds each archive in BEGIN IMMEDIATE for ~1.2s, blocking the main thread and causing gateway shutdown races `bug` `regression` `P1` `impact:ux-friction` 💬1
- [#163468](https://github.com/openclaw/openclaw/issues/163468) Maintenance: share the strict text-content predicate `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#163480](https://github.com/openclaw/openclaw/issues/163480) [Feature]: iOS app should send location updates in the background by itself (no location.update seen while travelling) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163447](https://github.com/openclaw/openclaw/issues/163447) [Bug]: Comma-separated quoted MEDIA references deliver no attachment, while the same paths separated by spaces deliver both `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#163473](https://github.com/openclaw/openclaw/issues/163473) Inbound metadata strip leaves "requester_profile is the verified linked requester…" line visible in chat (2026.9.7) `P2` `impact:ux-friction` 💬1
- [#163465](https://github.com/openclaw/openclaw/issues/163465) update: candidate state snapshot fails with ENOSPC when TMPDIR is a tmpfs smaller than the state npm tree `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#163454](https://github.com/openclaw/openclaw/issues/163454) [Feature]: Give MS Teams the thread-bound sessions (session.threadBindings) Discord, Telegram, Matrix, Feishu, and LINE already have `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163453](https://github.com/openclaw/openclaw/issues/163453) [Bug]: WAL split-brain tripwire fired on 2026.9.5 with a single gateway process (state/openclaw.sqlite) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#163345](https://github.com/openclaw/openclaw/issues/163345) Consolidate duplicated updater fixtures and test-only plumbing `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#163252](https://github.com/openclaw/openclaw/issues/163252) Guest agents cannot rename their own sessions with session-write authority `P2` `clawsweeper:source-repro` `impact:security` `issue-rating: 🦞 diamond lobster` 💬1
- [#163413](https://github.com/openclaw/openclaw/issues/163413) [Feature]: Expose Codex reset-credit inventory and expiry dates through usage APIs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163368](https://github.com/openclaw/openclaw/issues/163368) Error messages expose diagnostics before useful recovery guidance `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#163394](https://github.com/openclaw/openclaw/issues/163394) [Bug]: With gateway.roles configured, the owner's Web Push subscription receives only push.web.test, never a category notification `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#163393](https://github.com/openclaw/openclaw/issues/163393) [Bug]: Control UI config form: a sensitive field turns read-only after its first keystroke, and a stored secret cannot be replaced `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#163395](https://github.com/openclaw/openclaw/issues/163395) [Feature]: Control UI: name the requesting agent on the inline exec approval card `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#163401](https://github.com/openclaw/openclaw/issues/163401) [Feature]: Gateway ClawHub catalog parity for plugins and skills, including bulk keyword search `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163248](https://github.com/openclaw/openclaw/issues/163248) Hidden sub-agent launch rejects guests with own-session write authority `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#163375](https://github.com/openclaw/openclaw/issues/163375) Integrate the LiNKautowork OpenClaw consumer plugin `P3` 💬1
- [#163348](https://github.com/openclaw/openclaw/issues/163348) [Bug]: Codex tool approvals lose policy owner when reusing signed runtime identity `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#163332](https://github.com/openclaw/openclaw/issues/163332) claude-cli backend on Windows: selected auth profile token is never used, so Claude Code always runs on its own saved login and profile failover has no effect `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#163315](https://github.com/openclaw/openclaw/issues/163315) [Bug]: Ollama memory embeddings blocked when the configured Ollama host resolves into 0.0.0.0/8 (host.docker.internal under OrbStack) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#163288](https://github.com/openclaw/openclaw/issues/163288) [Bug] QQ group chat messages fail with "No callable tools remain after resolving explicit tool allowlist (...); no registered tools matched" - persists across gateway restart, session reset, and lossless-claw hook fix `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#163277](https://github.com/openclaw/openclaw/issues/163277) [Bug]: After I enter a secret in the iOS app, the agent's Telegram conversation doesn't continue until I message again `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#163276](https://github.com/openclaw/openclaw/issues/163276) [Bug]: iOS app: the paste menu disappears in the masked secret field because the view collapses `P2` `maturity:stable` `impact:ux-friction` 💬1
- [#163273](https://github.com/openclaw/openclaw/issues/163273) [Bug]: Tapping a Telegram inline button says "action no longer available" and never reaches the agent `P1` `impact:message-loss` 💬1
- [#163272](https://github.com/openclaw/openclaw/issues/163272) [Feature]: Only show the heartbeat failure notice once while the provider is out of quota `P2` `impact:ux-friction` 💬1
- [#163265](https://github.com/openclaw/openclaw/issues/163265) [Bug] Windows exec: Set-Content -Encoding UTF8 BOM silently corrupts staged values (35-char credential arrives as 36, all auth returns 401); GBK parsing of no-BOM .ps1 still reproduces on 2026.9.6 `P2` `impact:ux-friction` 💬1
- [#163256](https://github.com/openclaw/openclaw/issues/163256) Feature: conversation-scoped session visibility for same-channel thread recall `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#163240](https://github.com/openclaw/openclaw/issues/163240) [Feature]: before_tool_call cannot tell native Claude CLI / Codex subagent tool calls from the primary agent's `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163237](https://github.com/openclaw/openclaw/issues/163237) Update failure: clean-check (2026.9.7) `P3` 💬1
- [#163235](https://github.com/openclaw/openclaw/issues/163235) Feature: Hugging Face device-code login for inference `enhancement` `P3` `impact:auth-provider` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#163212](https://github.com/openclaw/openclaw/issues/163212) [Bug]: DataCloneError on every agent run with local Ollama provider (Windows) `bug` `bug:behavior` `impact:message-loss` `P0` 💬1
- [#163213](https://github.com/openclaw/openclaw/issues/163213) [Feature]: Owner-scoped session pins with conditional release `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163211](https://github.com/openclaw/openclaw/issues/163211) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#163206](https://github.com/openclaw/openclaw/issues/163206) Support per-agent scoping for mcp.servers entries `P2` `impact:other` 💬1
- [#163199](https://github.com/openclaw/openclaw/issues/163199) [Bug]: TUI clears unsent slash-prefixed drafts while disconnected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#163192](https://github.com/openclaw/openclaw/issues/163192) [Feature]: Snowflake Cortex local application OAuth `enhancement` `P2` `impact:auth-provider` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#163190](https://github.com/openclaw/openclaw/issues/163190) [Feature]: Give /btw side answers the channel delivery format contract that replies, cron announces, and subagent announces already get `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#163179](https://github.com/openclaw/openclaw/issues/163179) [Bug]: update fails on 2026.9.5 → 2026.9.7 `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#163172](https://github.com/openclaw/openclaw/issues/163172) [Bug]: `openclaw update --timeout` replaces the size-scaled candidate validation budget, so a generous-looking timeout can shorten it on large state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163166](https://github.com/openclaw/openclaw/issues/163166) Update failure: gateway-recovery-verification (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#163939](https://github.com/openclaw/openclaw/issues/163939) Windows health checks time out when a healthy Gateway listener cannot be attributed
- [#163841](https://github.com/openclaw/openclaw/issues/163841) Withdrawn — filed in error
- [#163616](https://github.com/openclaw/openclaw/issues/163616) DELETED!

#### 🔒 Closed Issues
- [#144911](https://github.com/openclaw/openclaw/issues/144911) [Bug]: MCP server init timeout crashes the Gateway — unhandled rejection "service child cleanup identity lost" in child cleanup path
- [#84242](https://github.com/openclaw/openclaw/issues/84242) memory-lancedb memory_store is registered but not exposed as callable agent tool
- [#145562](https://github.com/openclaw/openclaw/issues/145562) [Bug]: available_skills catalog missing from native Google/Gemini systemInstruction despite systemPromptReport claiming it's included
- [#152125](https://github.com/openclaw/openclaw/issues/152125) [Bug]: subagents cancel rejects spawn identifiers and returns misleading "Task outside session tree" for unresolvable taskIds
- [#115400](https://github.com/openclaw/openclaw/issues/115400) sessions_send: no synchronous wait option + duplicate delivery via async announce after sync tool result already returned
- [#138789](https://github.com/openclaw/openclaw/issues/138789) Session observer utility model auto-routes to a claude-cli-backed provider, then fails isolated completion with "No API key found"
- [#163568](https://github.com/openclaw/openclaw/issues/163568) [Bug]: Cron agentTurn into a shared session times out after its run already finished, and the timeout aborts a different run in that session
- [#147326](https://github.com/openclaw/openclaw/issues/147326) [Bug]: visible subagent exec completions trigger extra heartbeat notifications
- [#162055](https://github.com/openclaw/openclaw/issues/162055) [Bug]: 2026.9.7 update/repair stalls in Doctor with high CPU; state migrated, Gateway down
- [#144486](https://github.com/openclaw/openclaw/issues/144486) Expose native sub-agent (Agent/Task) result to plugins for at-source capture
- [#144401](https://github.com/openclaw/openclaw/issues/144401) Codex app-server display cap can emit foreign bytes into user-visible response
- [#141347](https://github.com/openclaw/openclaw/issues/141347) Telegram: table block missing is_compact support (Bot API 10.3)
- [#160882](https://github.com/openclaw/openclaw/issues/160882) [Feature]: Show whether the utility model runs through Claude CLI or the API
- [#163870](https://github.com/openclaw/openclaw/issues/163870) 2026.9.7: session SQLite receipt identity is unstable across macOS VM reboots
- [#161833](https://github.com/openclaw/openclaw/issues/161833) 2026.9.7: managed npm plugin (codex) fails to load when the npm root is reached through a symlink: "Retained native directory does not resolve the selected OpenClaw host"
- [#163638](https://github.com/openclaw/openclaw/issues/163638) [Bug]: 2026.9.5→9.7 managed update: activation doctor fails on its own offline-maintenance lock, flow still finalizes the swap, leaves agent DBs unmigrated and the gateway down until manual doctor --fix
- [#163696](https://github.com/openclaw/openclaw/issues/163696) [Bug]: infer embedding create omits vectors without --json
- [#163774](https://github.com/openclaw/openclaw/issues/163774) [Bug]: memory_search silently degrades to full-text after 2026.4.21 → 2026.8.33 upgrade — vectorScore: 0 with a complete, healthy vector index
- [#163547](https://github.com/openclaw/openclaw/issues/163547) [Bug]: CLI "Update history reconciliation" step crashes with spawn EACCES, blocks plugin install/doctor/registry refresh
- [#144612](https://github.com/openclaw/openclaw/issues/144612) Compaction can open a competing writer for an already-loaded Codex chat
- [#158442](https://github.com/openclaw/openclaw/issues/158442) [Bug]: Opening an unread session bumps its Last updated timestamp and sidebar position
- [#144042](https://github.com/openclaw/openclaw/issues/144042) Allow configured remote image origins in Control UI
- [#138634](https://github.com/openclaw/openclaw/issues/138634) Deterministic gateway-level output footer/template (session cost + context %) for outgoing channel messages
- [#154140](https://github.com/openclaw/openclaw/issues/154140) Update failure: finalize:doctor (2026.9.5)
- [#98180](https://github.com/openclaw/openclaw/issues/98180) Docs: avoid generic 600s agent timeout examples
- [#162407](https://github.com/openclaw/openclaw/issues/162407) [Bug]: Telegram rich messages cannot produce mentions: tg://user links become URLs and linkPreview:false suppresses @username detection
- [#163832](https://github.com/openclaw/openclaw/issues/163832) Plugins search reloads shelves and leaves incomplete skeletons
- [#163822](https://github.com/openclaw/openclaw/issues/163822) [Feature]: Unsloth Studio integration
- [#163795](https://github.com/openclaw/openclaw/issues/163795) doctor SERVICE_DEFINITION_UNKNOWN "installer would discard or change an operator setting" persists after aligning unit
- [#141091](https://github.com/openclaw/openclaw/issues/141091) [Bug]: Side-chat input sends on Shift+Enter and does not wrap long questions
- [#160589](https://github.com/openclaw/openclaw/issues/160589) Discord active thread-list rejects channel-scoped allowlists
- [#140007](https://github.com/openclaw/openclaw/issues/140007) Code Mode erases find/grep/bash results over half the output budget: details duplicate truncated content twice
- [#129054](https://github.com/openclaw/openclaw/issues/129054) sessions_search`: `query` schema has no `minLength` or `description` — models emit `query: ""
- [#163615](https://github.com/openclaw/openclaw/issues/163615) [Bug]: A serialized JSON array on a MEDIA line attaches only the first file, while the same list with spaces attaches all
- [#163531](https://github.com/openclaw/openclaw/issues/163531) [Bug]: `openclaw update` 2026.9.5 -> 2026.9.7 fails in validating Doctor ("Exit code: unknown", native SQLite/V8 stack); failure record keeps only an adjacent plugin warning
- [#118373](https://github.com/openclaw/openclaw/issues/118373) Scheduled automations agentTurn: exec bridge fails immediately, run + failure notification both undelivered
- [#163596](https://github.com/openclaw/openclaw/issues/163596) [Bug]: Update rehearsal enumerates and header-sniffs every file under the state directory, including the agent workspace
- [#163552](https://github.com/openclaw/openclaw/issues/163552) [Bug]: a persisted Workboard comment >2000 chars makes the card permanently immutable (read-path normalizer throws on unchanged rows)
- [#163518](https://github.com/openclaw/openclaw/issues/163518) [Bug]: message tool says "plugin not loaded" for the loaded a2a channel when the channel has no message actions
- [#163486](https://github.com/openclaw/openclaw/issues/163486) `openclaw update` fails candidate-doctor ("Plugin dependency is outside the temporary update copy: ~/node_modules/chromium-bidi/...") when the home folder has its own node_modules
- [#163528](https://github.com/openclaw/openclaw/issues/163528) [Bug] Every agent run dies in under a second with WorkerTaskError: DataCloneError
- [#163526](https://github.com/openclaw/openclaw/issues/163526) [Bug] sessions.create always fails with UNAVAILABLE: Session creation publication owner is no longer current
- [#163365](https://github.com/openclaw/openclaw/issues/163365) [Bug]: Doctor maintenance rehashes shared SQLite state on every admission check
- [#163482](https://github.com/openclaw/openclaw/issues/163482) [Bug]: OpenClaw 2026.9.7 — `sessions.create` always fails with "Session creation publication owner is no longer current" (Windows)
- [#152454](https://github.com/openclaw/openclaw/issues/152454) [Bug]: memory extra paths created after startup are not automatically indexed
- [#141947](https://github.com/openclaw/openclaw/issues/141947) Archived sessions still offer a GitHub publication confirmation that the confirm action always rejects
- [#150643](https://github.com/openclaw/openclaw/issues/150643) [Bug]: Tool continuations lose encrypted reasoning through managed Chat Completions
- [#156763](https://github.com/openclaw/openclaw/issues/156763) [Bug]: config patch refusals recommend --merge/--replace, which config patch does not accept
- [#129737](https://github.com/openclaw/openclaw/issues/129737) [Bug]: packageManager pin (pnpm@11.2.2) ships node-tar 7.5.15 — CVE-2026-59873 (CRITICAL), unfixable downstream
- [#163020](https://github.com/openclaw/openclaw/issues/163020) [Bug]: Same-model transient retry strips sessions_send/sessions_spawn from requester completion turns
- [#163924](https://github.com/openclaw/openclaw/issues/163924) [Bug]: chat.send from a resuming Control UI is rejected for its own __controlUiReconnectResume param — connection is then permanently unable to send
- [#163872](https://github.com/openclaw/openclaw/issues/163872) [Bug]: /compact on a claude-cli/* model ref skips native Claude Code compaction and fails with "No API key found for provider claude-cli"
- [#163802](https://github.com/openclaw/openclaw/issues/163802) [Bug]: 2026.9.7 dashboard sessions get crustacean fallback names when the model serves one request at a time
- [#163846](https://github.com/openclaw/openclaw/issues/163846) Withdrawn
- [#163416](https://github.com/openclaw/openclaw/issues/163416) Feature: let plugins open their registered session side panels
- [#163736](https://github.com/openclaw/openclaw/issues/163736) [Bug]: Telegram media group (album) silently truncated to first image only
- [#163735](https://github.com/openclaw/openclaw/issues/163735) Update failure: global-install-foreign-destination (2026.9.6)
- [#163733](https://github.com/openclaw/openclaw/issues/163733) Bug: Telegram multi-photo album truncated to first image only — silent drop with no warning
- [#163659](https://github.com/openclaw/openclaw/issues/163659) Online people: compact workload filters and tabular counters
- [#141331](https://github.com/openclaw/openclaw/issues/141331) Telegram command help exposes truncated tokens for hyphenated plugin names
- [#163678](https://github.com/openclaw/openclaw/issues/163678) Mail duplicate-send guard blocks legitimate multi-recipient email sends
- [#141291](https://github.com/openclaw/openclaw/issues/141291) Telegram images sent as documents are omitted from automatic vision input
- [#163625](https://github.com/openclaw/openclaw/issues/163625) MCP OAuth token resolution takes the state-lifecycle lease even for a fresh token, blocking Gateway turns
- [#163607](https://github.com/openclaw/openclaw/issues/163607) Dreaming cron never triggers the real ingestion pipeline - recall store stays empty despite default-enabled config
- [#163597](https://github.com/openclaw/openclaw/issues/163597) [Bug]: Telegram Test Server proxy hides forwarding failures
- [#163402](https://github.com/openclaw/openclaw/issues/163402) [Feature]: Enrich Gateway ClawHub listing details and inspection for plugins and skills
- [#163561](https://github.com/openclaw/openclaw/issues/163561) RFC: keyless Copilot managed web-search provider (tools.web.search.provider: copilot)
- [#163505](https://github.com/openclaw/openclaw/issues/163505) Maintenance: share gateway CLI payload resolution
- [#146442](https://github.com/openclaw/openclaw/issues/146442) [Bug]: Telegram accepts forum topic:0 while rejecting direct-topic:0
- [#163491](https://github.com/openclaw/openclaw/issues/163491) [Bug]: Title historical-transcript-archive migration holds each archive in BEGIN IMMEDIATE for ~1.2s, blocking the main thread and causing gateway shutdown races
- [#163468](https://github.com/openclaw/openclaw/issues/163468) Maintenance: share the strict text-content predicate
- [#163447](https://github.com/openclaw/openclaw/issues/163447) [Bug]: Comma-separated quoted MEDIA references deliver no attachment, while the same paths separated by spaces deliver both
- [#163473](https://github.com/openclaw/openclaw/issues/163473) Inbound metadata strip leaves "requester_profile is the verified linked requester…" line visible in chat (2026.9.7)
- [#163465](https://github.com/openclaw/openclaw/issues/163465) update: candidate state snapshot fails with ENOSPC when TMPDIR is a tmpfs smaller than the state npm tree
- [#163345](https://github.com/openclaw/openclaw/issues/163345) Consolidate duplicated updater fixtures and test-only plumbing
- [#153490](https://github.com/openclaw/openclaw/issues/153490) [Bug]: Telegram callback delete-failure swallowed, stale live buttons plus new reply
- [#163252](https://github.com/openclaw/openclaw/issues/163252) Guest agents cannot rename their own sessions with session-write authority
- [#150960](https://github.com/openclaw/openclaw/issues/150960) [Bug]: Multiple quoted MEDIA paths are combined into one missing attachment
- [#163368](https://github.com/openclaw/openclaw/issues/163368) Error messages expose diagnostics before useful recovery guidance
- [#159007](https://github.com/openclaw/openclaw/issues/159007) Deleted agents retain model and auth database readers
- [#163248](https://github.com/openclaw/openclaw/issues/163248) Hidden sub-agent launch rejects guests with own-session write authority
- [#163375](https://github.com/openclaw/openclaw/issues/163375) Integrate the LiNKautowork OpenClaw consumer plugin
- [#157088](https://github.com/openclaw/openclaw/issues/157088) [Bug]: memory prompt surfaces informational wiki corpus as recall failure
- [#157407](https://github.com/openclaw/openclaw/issues/157407) [Bug]: Approvals, Telemetry, and Cloud Workers settings stay in English in zh-CN
- [#154315](https://github.com/openclaw/openclaw/issues/154315) [Bug]: process poll silently ignores the unsupported timeoutMs parameter
- [#163276](https://github.com/openclaw/openclaw/issues/163276) [Bug]: iOS app: the paste menu disappears in the masked secret field because the view collapses
- [#163273](https://github.com/openclaw/openclaw/issues/163273) [Bug]: Tapping a Telegram inline button says "action no longer available" and never reaches the agent
- [#163272](https://github.com/openclaw/openclaw/issues/163272) [Feature]: Only show the heartbeat failure notice once while the provider is out of quota
- [#163265](https://github.com/openclaw/openclaw/issues/163265) [Bug] Windows exec: Set-Content -Encoding UTF8 BOM silently corrupts staged values (35-char credential arrives as 36, all auth returns 401); GBK parsing of no-BOM .ps1 still reproduces on 2026.9.6
- [#154309](https://github.com/openclaw/openclaw/issues/154309) [Bug]: exec silently ignores the unsupported cwd parameter and runs in the default directory
- [#163237](https://github.com/openclaw/openclaw/issues/163237) Update failure: clean-check (2026.9.7)
- [#163144](https://github.com/openclaw/openclaw/issues/163144) [Bug]: A workspace skill named export-session duplicates Telegram's native command
- [#163212](https://github.com/openclaw/openclaw/issues/163212) [Bug]: DataCloneError on every agent run with local Ollama provider (Windows)
- [#163206](https://github.com/openclaw/openclaw/issues/163206) Support per-agent scoping for mcp.servers entries
- [#162839](https://github.com/openclaw/openclaw/issues/162839) [Bug]: omitted skill directory still receives scan instructions
- [#162854](https://github.com/openclaw/openclaw/issues/162854) [Feature]: search bounded prefixes of large local skill instructions
- [#160431](https://github.com/openclaw/openclaw/issues/160431) [Bug]: Deeply nested `<details>` in assistant markdown crashes the Telegram rich-block pipeline with RangeError
- [#161626](https://github.com/openclaw/openclaw/issues/161626) [Bug]: iOS chat composer cannot paste an image from the clipboard
- [#163841](https://github.com/openclaw/openclaw/issues/163841) Withdrawn — filed in error
- [#163616](https://github.com/openclaw/openclaw/issues/163616) DELETED!

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 250,785 · **Open issues:** 47,943 · **Last push:** <1h ago

There were no new releases for Hermes Agent on October 3, 2026. However, several important fixes were merged, including #105136, which improved the upsert process for recreated slash commands in Discord, and #131916, which enhanced turn-liveness activity stamping from the MoA reference fan-out. Notably, a new issue was reported regarding the Desktop's inference chip, which can become stuck at "Checking inference" after a gateway flap, leading to potential disruptions in service. Other significant bugs include the incorrect behavior of relative file markdown links in Desktop chat and issues with the desktop boot process timing out when connecting to the Hermes backend.

#### ✅ Merged PRs
- [#105136](https://github.com/NousResearch/hermes-agent/pull/105136) fix(discord): upsert recreated slash commands without a delete-first step (#104399)
- [#131914](https://github.com/NousResearch/hermes-agent/pull/131914) fix(computer-use): keep capture working when Cua Driver is frontmost [risk 0.30]
- [#131912](https://github.com/NousResearch/hermes-agent/pull/131912) fix(agent): skip /v1/models/{model} probe for unrecognised server types [risk 0.30]
- [#127596](https://github.com/NousResearch/hermes-agent/pull/127596) fix(cron): keep a sticky last_failure stamp so a healed no_agent script failure stays visible
- [#131915](https://github.com/NousResearch/hermes-agent/pull/131915) fix(auxiliary_client): preserve named user-defined provider on explicit base_url [risk 0.30]
- [#131910](https://github.com/NousResearch/hermes-agent/pull/131910) fix(mcp): re-validate PGID ownership before killing orphaned process groups [risk 0.20]
- [#131916](https://github.com/NousResearch/hermes-agent/pull/131916) fix(agent): stamp turn-liveness activity from the MoA reference fan-out [risk 0.30]

#### 🐛 New Issues
- [#131793](https://github.com/NousResearch/hermes-agent/issues/131793) Desktop: inference chip can stick at "Checking inference" after a gateway flap (readiness legs never retried on the tick) `type/bug` `P3` `comp/desktop` 💬5
- [#131818](https://github.com/NousResearch/hermes-agent/issues/131818) Local skill correctly discovered by default profile is silently absent (not even 'disabled') from a sub-profile's skills list `type/bug` `comp/cli` `tool/skills` `P2` 💬2
- [#131751](https://github.com/NousResearch/hermes-agent/issues/131751) [Bug]: Desktop @file suggestions (complete.path) run in the launch profile's Docker sandbox, spawning and orphaning containers for other profiles' chats `type/bug` `comp/tui` `tool/terminal` `backend/docker` 💬1
- [#131862](https://github.com/NousResearch/hermes-agent/issues/131862) Bug: rebrand_text rewrites real-world strings (usernames, file paths, sqlite filenames) into references to things that don't exist `type/bug` `comp/cli` `P3` `sweeper:risk-compatibility` 💬1
- [#131842](https://github.com/NousResearch/hermes-agent/issues/131842) [Bug]: Relative file markdown links in Desktop chat fail to route to preview and are denied by Electron window-open policy `type/bug` `P3` `comp/desktop` 💬1
- [#131851](https://github.com/NousResearch/hermes-agent/issues/131851) [Bug]: Recurring FTS5 shadow table B-tree corruption ("Rowid out of order" / "2nd reference to page") after unclean container stop on large state.db `type/bug` `comp/agent` `area/docker` `P1` 💬1
- [#131270](https://github.com/NousResearch/hermes-agent/issues/131270) [Bug]: hermes update silently waits through intermittent stalled Git fetches `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬1
- [#131710](https://github.com/NousResearch/hermes-agent/issues/131710) [Bug]: Right-click → Select all in the composer selects nothing (the menu runs a renderer range, main is not involved) `type/bug` `P2` `needs-repro` `comp/desktop` 💬1
- [#131844](https://github.com/NousResearch/hermes-agent/issues/131844) [Bug]: data loss on the default board + orphaned attachments on delete_task `type/bug` `comp/cron` `P3` `sweeper:risk-session-state` 💬1
- [#131855](https://github.com/NousResearch/hermes-agent/issues/131855) [Bug]: OpenRouter Deepseek became unusable in latest updates. `type/bug` `comp/agent` `provider/openrouter` `provider/deepseek` 💬1
- [#131934](https://github.com/NousResearch/hermes-agent/issues/131934) [Bug]: Windows desktop boot stalls 35s+ → "Timed out connecting to Hermes backend after 15000ms" — new repro link to credential-pool "no available entries" log storm
- [#131924](https://github.com/NousResearch/hermes-agent/issues/131924) [Bug]: hermes send / standalone Telegram sends ignore display.platforms.telegram.notifications `type/bug` `comp/tools` `platform/telegram` `area/config`
- [#131869](https://github.com/NousResearch/hermes-agent/issues/131869) [Bug]: pm llamacpp-cuda win32-x64 still pins CUDA 13.3 assets (404 upstream) and the pin loop crash discards every pin from the run `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#131875](https://github.com/NousResearch/hermes-agent/issues/131875) `hermes gateway restart` on macOS launchd can leave the gateway down (Signal lock race, exit 78 mapped to 0) `type/bug` `comp/cli` `comp/gateway` `platform/signal`
- [#131876](https://github.com/NousResearch/hermes-agent/issues/131876) Two classic-CLI approval prompts fire no `pre_approval_request` / `post_approval_response` hooks `type/bug` `comp/cli` `comp/tools` `comp/plugins`
- [#131884](https://github.com/NousResearch/hermes-agent/issues/131884) [Bug]: Windows `hermes update` fails installing ffmpeg/agent-browser with [WinError 5] — flatten_single_dir renames a freshly extracted tree without retry `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#131899](https://github.com/NousResearch/hermes-agent/issues/131899) [Feature]: Public `strip_quotes` and `looks_like_help_or_version_command` in the terminal guards `type/feature` `comp/tools` `tool/terminal` `P3`
- [#131900](https://github.com/NousResearch/hermes-agent/issues/131900) [Feature]: Public `ProcessRegistry.terminate_host_pid` — the identity-verified tree kill `type/feature` `comp/agent` `tool/terminal` `P3`
- [#131901](https://github.com/NousResearch/hermes-agent/issues/131901) [Feature]: Public doctor section banner, named-profile listing and gateway pending-agent sentinel `type/feature` `comp/cli` `comp/gateway` `P3`
- [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) Cannot open a pull request via API: CreatePullRequest permission error (issue creation and fork PRs still work) `type/bug` `area/auth` `P3`
- [#131861](https://github.com/NousResearch/hermes-agent/issues/131861) Bug: non-root migration silently migrates nothing (migrated=0 / error=0 / exit 0) when openclaw.json is unreadable `type/bug` `comp/cli` `area/config` `P3`
- [#131863](https://github.com/NousResearch/hermes-agent/issues/131863) Bug: cron jobs are archived, never recreated — migration drops all scheduled jobs by design; SecretRef credentials are never migrated (dead code present) `type/bug` `comp/cli` `comp/cron` `area/auth`
- [#131864](https://github.com/NousResearch/hermes-agent/issues/131864) [Bug]: Windows: update cleanup stops a unit-less serve/dashboard and can never respawn it (win32 skip) — every update exits 1 ("could not be auto-restarted") `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#131848](https://github.com/NousResearch/hermes-agent/issues/131848) Desktop chat duplicates the last exchange (~1 in 5 sends): timeline refresh races the optimistic temp-id → server-id swap `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop`

#### 🔒 Closed Issues
- [#76602](https://github.com/NousResearch/hermes-agent/issues/76602) auxiliary vision with custom provider + base_url loses api_key (downgraded to 'custom' → 'no-key-required' → 401)
- [#110068](https://github.com/NousResearch/hermes-agent/issues/110068) [Bug]: kanban notify subscription created after a compaction fork binds to the superseded session
- [#71424](https://github.com/NousResearch/hermes-agent/issues/71424) delegate_task subagents hang 600s — child credential pool ignores parent's fixed (proxy) credential, 401s on api.anthropic.com
- [#118354](https://github.com/NousResearch/hermes-agent/issues/118354) [Bug]: no_agent cron script failure is erased by the next successful run - last_status and failure_streak self-heal, so a relapse is invisible
- [#25848](https://github.com/NousResearch/hermes-agent/issues/25848) [Bug]: _query_local_context_length unconditionally probes admin-gated /v1/models/{model} on LiteLLM proxies
- [#102405](https://github.com/NousResearch/hermes-agent/issues/102405) shell hooks: `fail_closed` does not block when the hook exits non-zero with empty stdout
- [#91609](https://github.com/NousResearch/hermes-agent/issues/91609) [Bug]: keyless Firecrawl HTTP 403 stops the free-provider failover ring
- [#94527](https://github.com/NousResearch/hermes-agent/issues/94527) Unqualified capture fails with "Cua Driver refuses operations that target its own authorization process" when the daemon's own window is frontmost
- [#43044](https://github.com/NousResearch/hermes-agent/issues/43044) Gateway orphan-MCP reaper can SIGTERM an unrelated process via a recycled PGID
- [#41579](https://github.com/NousResearch/hermes-agent/issues/41579) fix: _get_platform_tools() should resolve legacy toolset aliases (hermes → hermes-cli)
- [#41147](https://github.com/NousResearch/hermes-agent/issues/41147) fix(stepfun): step-3.7-flash missing from model picker — Step Plan API endpoint doesn't list it
- [#64291](https://github.com/NousResearch/hermes-agent/issues/64291) [Bug]: memory tool schema missing "action" from top-level required fields
- [#104399](https://github.com/NousResearch/hermes-agent/issues/104399) Discord safe command sync deletes a command then gets 429'd before re-creating it, leaving `/model` (and others) missing from the slash picker
- [#110015](https://github.com/NousResearch/hermes-agent/issues/110015) [Bug]: MoA fan-out never stamps `_touch_activity` — turn-liveness watchdog kills healthy advisor streams at 600s while the aux stream ceiling permits 3600s
- [#79816](https://github.com/NousResearch/hermes-agent/issues/79816) [Bug]: cross-process container reuse ignores image and mounts, with no warning when they differ
- [#43272](https://github.com/NousResearch/hermes-agent/issues/43272) [Bug]: Firecrawl provider doesn't pass timeout to scrape API

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,084 · **Open issues:** 8,482 · **Last push:** <1h ago

On October 3, 2026, vLLM saw a productive day with several notable PR merges but no new releases. Key enhancements included the integration of contention-aware expert migration batching (#52641) and the introduction of a native ModelExpress weight transfer backend (#58399), which should improve model interoperability. Bug fixes addressed issues like the M-RoPE offset double-count in Qwen3-Omni (#58890) and a regression in tokenization for Qwen3.8-Flash-Next (#59756). Meanwhile, a significant new issue was raised regarding a 0% acceptance rate in MTP speculative decoding on the SM120 backend (#59724), indicating potential performance concerns that may need immediate attention.

#### ✅ Merged PRs
- [#58890](https://github.com/vllm-project/vllm/pull/58890) [Bugfix][Model] Fix M-RoPE offset double-count in Qwen3-Omni
- [#59568](https://github.com/vllm-project/vllm/pull/59568) [TEST][XPU][CI] disable xpu tests for nonexistent input norm kernels
- [#52641](https://github.com/vllm-project/vllm/pull/52641) [EPLB] Add contention-aware expert migration batching
- [#59288](https://github.com/vllm-project/vllm/pull/59288) [CI/Build][NVIDIA] Build Rubin images on the public nvidia/cuda base image
- [#57443](https://github.com/vllm-project/vllm/pull/57443) [GLM 5.3 Perf] Enable fused multi-step decode, 13.3% E2E throughput improvement for concurrency 1
- [#58476](https://github.com/vllm-project/vllm/pull/58476) [Docs] Add ERNIE 4.5 to batch invariance tested models
- [#57995](https://github.com/vllm-project/vllm/pull/57995) [Perf][MoE] Support fp8 combine in FlashInfer one-sided MoE all2all
- [#54049](https://github.com/vllm-project/vllm/pull/54049) [feat] FlashInfer CuteDSL MegaMoE integration
- [#59015](https://github.com/vllm-project/vllm/pull/59015) [Bugfix][Frontend] Avoid generation for empty streaming input
- [#59800](https://github.com/vllm-project/vllm/pull/59800) [Perf] Use value-only reduction for native per-token FP8 quantization
- [#59796](https://github.com/vllm-project/vllm/pull/59796) [Bugfix] Bump tokenizers to 0.23.2 for duplicate-pattern support
- [#59779](https://github.com/vllm-project/vllm/pull/59779) [Bugfix][Watermarking] Keep draft prompt lengths valid under CUDA graphs
- [#56403](https://github.com/vllm-project/vllm/pull/56403) [Frontend] Constrain non-strict GLM-4.7 tool calls with a shallow structural tag
- [#59781](https://github.com/vllm-project/vllm/pull/59781) [Refactor] Remove dead env and config
- [#58399](https://github.com/vllm-project/vllm/pull/58399) [Feature] Add native ModelExpress weight transfer backend
- [#59464](https://github.com/vllm-project/vllm/pull/59464) [GLM5.3 Perf] Reuse sparse MLA index conversion across layers, 3.5~3.9x kernel performance improvement
- [#59805](https://github.com/vllm-project/vllm/pull/59805) Revert "[Bugfix] Tie lm_head.weight for Nemotron Parse when checkpoint omits it" (#53020)
- [#59753](https://github.com/vllm-project/vllm/pull/59753) [Perf][Qwen4Exp] Add SM121 TP=1 skinny-GEMM plans
- [#59731](https://github.com/vllm-project/vllm/pull/59731) [Perf] Tune MoE weighted-sum kernel launch configuration
- [#59481](https://github.com/vllm-project/vllm/pull/59481) [Minimax-M3] Keep the native FP8 MMA in the Triton indexer scorers
- [#59396](https://github.com/vllm-project/vllm/pull/59396) Upgrade tpu-inference to v0.30.0
- [#59657](https://github.com/vllm-project/vllm/pull/59657) [Agents] Add pre-commit check for agent files and skills
- [#59772](https://github.com/vllm-project/vllm/pull/59772) [CI] Fix ModelExpress handling in weight transfer tests
- [#59332](https://github.com/vllm-project/vllm/pull/59332) [ROCm][CI] Add test coverage for VLLM_ROCM_MOE_PADDING memory-stride padding transparency
- [#59525](https://github.com/vllm-project/vllm/pull/59525) [CI] Use vllm_runner in fusions_e2e conftest for reliable GPU cleanup
- [#59459](https://github.com/vllm-project/vllm/pull/59459) [Docs] Add Reviewers page
- [#59455](https://github.com/vllm-project/vllm/pull/59455) [Bugfix] Bind routed-experts capture to the MoE layer, not the kernel
- [#57820](https://github.com/vllm-project/vllm/pull/57820) [Bugfix] Fix stalled local-only Elastic EP scale-up
- [#59126](https://github.com/vllm-project/vllm/pull/59126) [Bugfix][Multimodal] Fix GLM-5.3-Flash vision tower crashes on image input
- [#58975](https://github.com/vllm-project/vllm/pull/58975) [Bugfix][Pooling] Handle multimodal cache misses without crashing
- [#59695](https://github.com/vllm-project/vllm/pull/59695) [Bugfix][Multimodal] Fix reference counting of the SHM processor cache
- [#59752](https://github.com/vllm-project/vllm/pull/59752) [Bugfix][Quark] Pass grouped-routing arguments to OCP MX monolithic kernels
- [#59735](https://github.com/vllm-project/vllm/pull/59735) [Perf] Keep non-speculative GDN decode on the standard path
- [#56742](https://github.com/vllm-project/vllm/pull/56742) [Model] Add Qwen4Exp to the Qwen GDN Triton warmup
- [#58623](https://github.com/vllm-project/vllm/pull/58623) [Distributed] Enable custom all-reduce under VLLM_BATCH_INVARIANT
- [#59135](https://github.com/vllm-project/vllm/pull/59135) [Docs] Fix stale W4A16 NVFP4 default kernel in ModelOpt docs
- [#59229](https://github.com/vllm-project/vllm/pull/59229) [CI][Kimi-K3] Test prefix cache reuse with KV offload, P/D and DCP
- [#59158](https://github.com/vllm-project/vllm/pull/59158) [Feature] Offload KV-init runtime state on sleep
- [#56050](https://github.com/vllm-project/vllm/pull/56050) [Bugfix][Quantization] Detect NVFP4 in ModelOpt mixed-precision checkpoints
- [#59763](https://github.com/vllm-project/vllm/pull/59763) [Test] Re-enable Ovis2.5 and Ovis2.6-MoE vLLM tests on Transformers v5
- [#56063](https://github.com/vllm-project/vllm/pull/56063) [XPU][Kernel] Tune Triton W8A8 block-FP8 GEMM for Intel B70
- [#53341](https://github.com/vllm-project/vllm/pull/53341) [CI] Replace shellcheck-suppressed patterns flagged in #52572 with clean equivalents
- [#58569](https://github.com/vllm-project/vllm/pull/58569) [ROCm][Perf][GLM-5.3-Flash] Remove redundant copy after ragged sparse MLA
- [#59701](https://github.com/vllm-project/vllm/pull/59701) [Model] Migrate GPT-NeoX, Phi, Seed-OSS and Jais2 to the Transformers modeling backend
- [#59762](https://github.com/vllm-project/vllm/pull/59762) [Misc] Remove code paths for Transformers < 5.16.1
- [#55161](https://github.com/vllm-project/vllm/pull/55161) [Bugfix][LoRA] Fall back for high-rank MoE LoRA
- [#58167](https://github.com/vllm-project/vllm/pull/58167) [ROCm][Perf][GLM-5.3-Flash] Add AITER topk backend for decodes
- [#59565](https://github.com/vllm-project/vllm/pull/59565) [Bugfix][GLM-5.3] Size the image encoder cache from the exact token ceiling
- [#59293](https://github.com/vllm-project/vllm/pull/59293) [Bugfix][Spec Decode] Qualify Transformers backend attention layer names with the model prefix
- [#59614](https://github.com/vllm-project/vllm/pull/59614) [Misc] Add Transformers version upper bound in requirements
- [#59417](https://github.com/vllm-project/vllm/pull/59417) [Security] Accept zero-sum DeepSeek-OCR pixel tensors
- [#59613](https://github.com/vllm-project/vllm/pull/59613) [Bugfix] Fix minimax-m3 multimodal processor compatability with Transformers v5.18
- [#59659](https://github.com/vllm-project/vllm/pull/59659) [Rust Frontend] Expose gRPC port in Python vllm serve
- [#59046](https://github.com/vllm-project/vllm/pull/59046) [Bugfix][Frontend] Seed derender detokenization from the prompt
- [#59679](https://github.com/vllm-project/vllm/pull/59679) [Model] Migrate Glm, Arcee, CWM and Mellum to the Transformers modeling backend
- [#58344](https://github.com/vllm-project/vllm/pull/58344) [ROCm][Perf] Kimi-K3 enable prefill checkpoints on ROCm
- [#59309](https://github.com/vllm-project/vllm/pull/59309) [Bugfix][HiSparse] Fix MTP acceptance collapse under FULL graphs with a saturated GPU pool
- [#55902](https://github.com/vllm-project/vllm/pull/55902) [Model][Spec Decode] Enable EAGLE3/DSpark pipeline parallelism for Sarvam MLA
- [#59450](https://github.com/vllm-project/vllm/pull/59450) [Bugfix][HiSparse] Size the KV cache from the groups HiSparse allocates
- [#59196](https://github.com/vllm-project/vllm/pull/59196) [Doc] Document ECMooncakeConnector for EPD disaggregation
- [#52162](https://github.com/vllm-project/vllm/pull/52162) [Perf][PCP] Shard decode requests across PCP ranks
- [#59500](https://github.com/vllm-project/vllm/pull/59500) [Bugfix] Keep batch-invariance NCCL pins out of the weight-transfer group
- [#59529](https://github.com/vllm-project/vllm/pull/59529) [Bugfix][Bench] Clean up synthetic video files and writers
- [#59156](https://github.com/vllm-project/vllm/pull/59156) [Feature] Release WorkspaceManager scratch on sleep
- [#58604](https://github.com/vllm-project/vllm/pull/58604) [Frontend] Parse tool calls and reasoning from checkpoint response templates
- [#57387](https://github.com/vllm-project/vllm/pull/57387) [Model] Use upstream GLM-5.3 and Qwen4-Exp configs and processor

#### 🐛 New Issues
- [#59724](https://github.com/vllm-project/vllm/issues/59724) [Bug][SM120] MTP speculative decoding acceptance rate drops to 0% on nightly with native FLASHINFER_MLA_SPARSE_SM120 backend (GLM-5.3-Flash) `speculative-decoding` `quantization` `glm` 💬7
- [#59823](https://github.com/vllm-project/vllm/issues/59823) SimpleCPUOffloadConnector is queried on every request but never serves a hit on a hybrid GDN + full-attention model `quantization` 💬3
- [#59786](https://github.com/vllm-project/vllm/issues/59786) [Bug][CPU] V1 CPU sampling (fused_gumbel_argmax) is biased: the 2^20 noise table makes about half of a 152K vocabulary unreachable 💬3
- [#59765](https://github.com/vllm-project/vllm/issues/59765) [Bug]: ~2% output throughput regression on DeepSeek-R1 NVFP4 (DP4 + EP, GB300) from #48247 (AITER custom AG/RS) `rocm` `deepseek` 💬3
- [#59738](https://github.com/vllm-project/vllm/issues/59738) [Bug]: [Bug]: deepseek_r1 streaming reasoning deltas are not detokenized (byte-level BPE glyphs) `bug` `tool-calling` 💬3
- [#59725](https://github.com/vllm-project/vllm/issues/59725) [Feature]: Integrate Cake kernels via FlashInfer: model-by-model tracker `quantization` `kimi` 💬2
- [#59750](https://github.com/vllm-project/vllm/issues/59750) [RFC]: Handle empty responses in synthetic acceptance benchmarks `RFC` 💬2
- [#59773](https://github.com/vllm-project/vllm/issues/59773) [RFC]: Octave KV, a native 3-bit KV cache for AMD GPUs `performance` `rocm` 💬2
- [#59784](https://github.com/vllm-project/vllm/issues/59784) [Bug]: Qwen3-VL-Reranker fails to load because Qwen3VLTextConfig has no tie_word_embeddings `bug` 💬2
- [#59756](https://github.com/vllm-project/vllm/issues/59756) [Bug]: Qwen3.8-Flash-Next (Qwen4Exp) fails to load on main after #57387: `ValueError: Invalid layer_type indexed_attention` `quantization` 💬2
- [#59722](https://github.com/vllm-project/vllm/issues/59722) [Bug]: Rust vllm-bench openai-chat counts token-less streams as successful `rust` 💬2
- [#59770](https://github.com/vllm-project/vllm/issues/59770) [Performance]: Nemotron-3.5-Lightning NVFP4 decode ~16% slower on DGX Spark (GB10/SM121) since v0.29.0 💬1
- [#59820](https://github.com/vllm-project/vllm/issues/59820) [ROCm][AMD] GLM5.3 Flash Performance Optimization on gfx950 / MI355X `feature request` `rocm` 💬1
- [#59803](https://github.com/vllm-project/vllm/issues/59803) [Bug]: Engine fails to start with `--enable-expert-parallel` and `--load-format ipc_cache`; the disk fallback fails too `bug` 💬1
- [#59817](https://github.com/vllm-project/vllm/issues/59817) [Bug]: HiSparse cache-handle test passes a plain SparseMLAIndexGroup; follower path relies on an attribute only the leader writes 💬1
- [#59818](https://github.com/vllm-project/vllm/issues/59818) [ROCm]: run-to-run GSM8K accuracy variance for simple-nemotron-h-8b in KV-Offload test on MI300 `rocm` `ci-failure` 💬1
- [#59806](https://github.com/vllm-project/vllm/issues/59806) [Bug]: `--custom-histogram-buckets` rejects a `0` bound, so `vllm:request_num_preemptions` cannot separate never-preempted requests 💬1
- [#59785](https://github.com/vllm-project/vllm/issues/59785) [Bug][CPU] apply_top_k_top_p_triton drops tokens that top-p must keep (kernel logic; reproduces end to end on V1 and V2) 💬1
- [#59755](https://github.com/vllm-project/vllm/issues/59755) [Feature][ROCm]: GLM-5.3-Flash prefill checkpoints `feature request` `rocm` `glm` 💬1
- [#59741](https://github.com/vllm-project/vllm/issues/59741) [Bug][ROCm] GLM-5.3-Flash: recent-context pools not guaranteed in kpool top-k selection (always_select_tail covers only the incomplete pool) `rocm` `glm` 💬1
- [#59840](https://github.com/vllm-project/vllm/issues/59840) [Feature]: Support trainer-side pipeline parallelism with NCCL M2N weight transfer `feature request`
- [#59838](https://github.com/vllm-project/vllm/issues/59838) [Bug]: Malformed namespace tools cause early return validation bypass in ResponsesRequest `tool-calling`
- [#59835](https://github.com/vllm-project/vllm/issues/59835) [Feature]: Support fused MoE weights with NCCL M2N weight transfer `feature request`
- [#59834](https://github.com/vllm-project/vllm/issues/59834) [Bug]: Responses API streaming regenerates output item id/call_id in response.completed (breaks strict clients)
- [#59828](https://github.com/vllm-project/vllm/issues/59828) [Bug][DiffusionGemma][CPU]: CPU async output snapshots can alias reused sampler buffers `bug`
- [#59809](https://github.com/vllm-project/vllm/issues/59809) [Bug]: `vllm bench sweep serve --resume` skips the warmup on the restarted server, and crashes after a run recorded by `--continue-on-error`
- [#59799](https://github.com/vllm-project/vllm/issues/59799) [Bug]: LoRA adapters with PEFT rank_pattern / alpha_pattern are served with the wrong scaling `bug`
- [#59798](https://github.com/vllm-project/vllm/issues/59798) [Bug]: Qwen3.8-Flash-Next AutoRound/INC checkpoint fails because PLE rejects INCConfig even though PLE is unquantized `bug` `quantization`
- [#59768](https://github.com/vllm-project/vllm/issues/59768) [Bug]: Illegal memory access (Xid 13) with SimpleCPUOffloadConnector on Qwen3.8-Flash-Next while an async CPU→GPU prefix load is in flight / sm120 `bug` `intel-gpu`
- [#59764](https://github.com/vllm-project/vllm/issues/59764) [Bug]: Qwen3.6-35B-A3B (hybrid GDN + MoE): identical batches give different logprobs from run to run, and a prompt's logprobs move by up to 0.2 when another sequence shares its step (v0.30.0, sm_120)

#### 🔒 Closed Issues
- [#51744](https://github.com/vllm-project/vllm/issues/51744) [Bug]: vllm/vllm-openai:latest fails to start Gemma4 with Transformers 5.15.0
- [#50001](https://github.com/vllm-project/vllm/issues/50001) [Model Support] Kimi K3 Tracking Issue
- [#33865](https://github.com/vllm-project/vllm/issues/33865) [Bug]: OpenAI-compatible Embeddings API intermittently crashes with multimodal cache assertion (`Expected a cached item for mm_hash`) on Qwen3-VL-Embedding-8B
- [#50709](https://github.com/vllm-project/vllm/issues/50709) [Bug]: TurboQuant hybrid model crashes at determine_available_memory with 'Unknown cache dtype: auto' on v0.25.0+
- [#45242](https://github.com/vllm-project/vllm/issues/45242) feat(ec-connector): async multimodal embedding-cache loading — scheduler hold-back for PENDING embeddings
- [#59520](https://github.com/vllm-project/vllm/issues/59520) [Performance]: Non-spec Qwen3.5 CUDA GDN wrapper fallback regressed H200 throughput (fixed by #59735)
- [#50136](https://github.com/vllm-project/vllm/issues/50136) [Bug] should_custom_ar()'s size threshold makes all-reduce kernel selection batch-dependent, which is why custom all-reduce can't simply be re-enabled under VLLM_BATCH_INVARIANT
- [#44184](https://github.com/vllm-project/vllm/issues/44184) [Bug]: when set kv_cache_dtype to fp8 or fp8_e4m3 causes the d node to crash
- [#59823](https://github.com/vllm-project/vllm/issues/59823) SimpleCPUOffloadConnector is queried on every request but never serves a hit on a hybrid GDN + full-attention model
- [#59043](https://github.com/vllm-project/vllm/issues/59043) [Bug]: Derender drops the leading space on SentencePiece tokenizers
- [#59055](https://github.com/vllm-project/vllm/issues/59055) [RFC]: Release all releasable GPU memory in sleep mode (tracking)
- [#58567](https://github.com/vllm-project/vllm/issues/58567) [ROCm][Perf][GLM-5.3-Flash]: Remove cpy after _rocm_sparse_attn_prefill_ragged_triton
- [#59089](https://github.com/vllm-project/vllm/issues/59089) [Bug]: Non-streaming derender appends U+FFFD where the ordinary route emits nothing 🌈🌈
- [#59449](https://github.com/vllm-project/vllm/issues/59449) [Bug] `enable_return_routed_experts` returns stale routing after a layerwise weight reload when a monolithic MoE kernel (FLASHINFER_TRTLLM FP8) is in use
- [#58170](https://github.com/vllm-project/vllm/issues/58170) [ROCm][Perf]: GLM-5.3-Flash should use AITER topk kernel during decode
- [#59539](https://github.com/vllm-project/vllm/issues/59539) [Bug]: GLM-5.3-Flash (Glm5Next): common non-square images (4032x3024, 3840x2160, A4 at 300 dpi) are refused with "exceeds the pre-allocated encoder cache size 7921"
- [#47409](https://github.com/vllm-project/vllm/issues/47409) [Feature]: Support min_tokens in beam search
- [#55158](https://github.com/vllm-project/vllm/issues/55158) [Bug]: MoE LoRA one-shot path rejects max_lora_rank=256 although LoRAConfig accepts it
- [#59292](https://github.com/vllm-project/vllm/issues/59292) [Bug]: `draft_model` speculative decoding fails for Transformers-backend models: `ValueError: Duplicate layer name: 0.attn`
- [#59562](https://github.com/vllm-project/vllm/issues/59562) [Bug]: MiniMax-M3 fails to start with transformers 5.18.0: MiniMaxM3VLVideoProcessor._preprocess() missing 'do_convert_rgb'
- [#56940](https://github.com/vllm-project/vllm/issues/56940) CSOAI — vLLM governance measurement with signed receipts
- [#56948](https://github.com/vllm-project/vllm/issues/56948) CSOAI — vLLM interop: inference governance
- [#56951](https://github.com/vllm-project/vllm/issues/56951) CSOAI — vLLM interop: high-throughput governance
- [#58928](https://github.com/vllm-project/vllm/issues/58928) [Installation]: macOS CPU build fails with Apple Clang 16 (structured binding capture under OpenMP in fla.cpp)

### SGLang (`sgl-project/sglang`)

**Stars:** 36,730 · **Open issues:** 5,524 · **Last push:** <1h ago

On October 3, 2026, SGLang saw no new releases, but several significant pull requests were merged. Noteworthy changes include the addition of SGLang's /v1/classify and /v1/rerank endpoints, which enhance the model's functionality. Additionally, improvements were made for the MiniMax-M3 host pool configuration and the CP adapter was removed to better separate interleave transport from boundary reduction. A prominent new issue was raised regarding the DeepSeek V4.1 optimization roadmap, indicating ongoing developments in enhancing model performance.

#### ✅ Merged PRs
- [#42295](https://github.com/sgl-project/sglang/pull/42295) [Session] Run streaming sessions only on `UnifiedRadixCache`; reject unverified tree caches
- [#41729](https://github.com/sgl-project/sglang/pull/41729) [QSA] Enable breakable prefill CUDA graphs for text-only Qwen3.8 Flash-Next (capture-safe metadata, MTP side-channel padding)
- [#42166](https://github.com/sgl-project/sglang/pull/42166) [HiCache] Let the MiniMax-M3 K-only host pool join a host pool group
- [#42036](https://github.com/sgl-project/sglang/pull/42036) [PCP] Remove the CP adapter and separate interleave transport from boundary reduction
- [#39265](https://github.com/sgl-project/sglang/pull/39265) [sglang-miles] Allocate packed weight receive buffers directly from metadata
- [#42278](https://github.com/sgl-project/sglang/pull/42278) [Docs][AMD] Update GLM-5.2 MI355X daily image to 20260930
- [#41488](https://github.com/sgl-project/sglang/pull/41488) [AMD] Add opt-in MiniMax-M3 TP4 indexer context partitioning
- [#42252](https://github.com/sgl-project/sglang/pull/42252) [unified-memory] Copy page envelopes in place during compaction
- [#42251](https://github.com/sgl-project/sglang/pull/42251) [KDA] Add an opt-in decode-parity mode to the Triton multi-token recurrence
- [#42125](https://github.com/sgl-project/sglang/pull/42125) Size the VMM graph-input exchange by the widest input across ranks
- [#42120](https://github.com/sgl-project/sglang/pull/42120) [HiCache] Fall back to host memory when no cgroup fs is mounted
- [#42113](https://github.com/sgl-project/sglang/pull/42113) [PD] Make the prebuilt last-token H2D copy non-blocking under overlap
- [#42026](https://github.com/sgl-project/sglang/pull/42026) [eplb] Warm default-group NCCL P2P transports before KV-cache sizing
- [#42025](https://github.com/sgl-project/sglang/pull/42025) [Metrics] Label scheduler stage wall time by sampled forward overlap
- [#42258](https://github.com/sgl-project/sglang/pull/42258) [sgl-router] Add SGLang's /v1/classify
- [#42202](https://github.com/sgl-project/sglang/pull/42202) [mem_cache] Rename the tree's request-level `insert_req` to `checkpoint`
- [#42205](https://github.com/sgl-project/sglang/pull/42205) [sgl-router] Add SGLang's /v1/rerank
- [#41990](https://github.com/sgl-project/sglang/pull/41990) [sgl-router] Unify reorg session and cache affinity modes
- [#42002](https://github.com/sgl-project/sglang/pull/42002) [Spec] Fix Qwen3.5 text model EAGLE3/DFLASH aux-layer capture
- [#42194](https://github.com/sgl-project/sglang/pull/42194) [mem_cache] Skip the release-time insert on optimistic prefill requeue; make `refresh_fill_ids` public
- [#41282](https://github.com/sgl-project/sglang/pull/41282) [AMD][ROCm] Keep cos_sin_cache fp32 on HIP for fused QSA indexer kernel
- [#42005](https://github.com/sgl-project/sglang/pull/42005) [PD][NIXL] Fix prepared dlists for KV entries of different lengths (DeepSeek-V4)
- [#39893](https://github.com/sgl-project/sglang/pull/39893) fix: preserve QSA indexer state through HiCache
- [#42055](https://github.com/sgl-project/sglang/pull/42055) [AMD][V4.1][*/N] Fuse MXFP8 activation quant into producer kernels on gfx950
- [#38040](https://github.com/sgl-project/sglang/pull/38040) [diffusion] quantization: ConvRot INT8 online W8A8 for DiTs (sgl-kernel + `convrot_int8_customkernel`)
- [#42004](https://github.com/sgl-project/sglang/pull/42004) [Kernel] Use Cake softmax for qualified SM103 sampling workloads
- [#41711](https://github.com/sgl-project/sglang/pull/41711) [diffusion] perf dump: one writer per replica, no first-request NCCL setup
- [#42219](https://github.com/sgl-project/sglang/pull/42219) [AMD] Skip the AITER #6042/#5967 patches on gfx1250
- [#42191](https://github.com/sgl-project/sglang/pull/42191) [sgl-router] Add OpenAI /v1/embeddings
- [#42147](https://github.com/sgl-project/sglang/pull/42147) [sgl-router] Add native /generate endpoint
- [#41973](https://github.com/sgl-project/sglang/pull/41973) [AMD][CI] Partition stage-b-test-1-gpu-small-amd-mi35x to stop the 30-min timeout
- [#41542](https://github.com/sgl-project/sglang/pull/41542) [Diffusion] Deduplicate SM120 FP8 fallback warnings across layers
- [#41979](https://github.com/sgl-project/sglang/pull/41979) [AMD][CI] Fix VLM MMMU nightly max_tokens for CoT prompt
- [#36266](https://github.com/sgl-project/sglang/pull/36266) [Mamba] Warm cache COW kernel before serving
- [#42211](https://github.com/sgl-project/sglang/pull/42211) [Test] Add get_swa_key_page_size to the Q8KV8 sparse-prefill fake KV pool
- [#42179](https://github.com/sgl-project/sglang/pull/42179) [Fix] Update stale source-patch match in dumper comparator e2e test
- [#42201](https://github.com/sgl-project/sglang/pull/42201) [Docs] Keep the last CUDA 12 image tag fixed during install version bumps
- [#42013](https://github.com/sgl-project/sglang/pull/42013) chore: bump docs install version to 0.5.21
- [#42190](https://github.com/sgl-project/sglang/pull/42190) [sgl-router] Forward text where the engine's tokenizer normalizes differently
- [#41520](https://github.com/sgl-project/sglang/pull/41520) [mem_cache] Rename `cache_unfinished_req` to `checkpoint_req` and count cache hits only when a request finishes
- [#41967](https://github.com/sgl-project/sglang/pull/41967) Readme refresh
- [#41965](https://github.com/sgl-project/sglang/pull/41965) [Diffusion][MiniMax-H3] Fix int32 offset overflow in SubBlock router kernels

#### 🐛 New Issues
- [#42170](https://github.com/sgl-project/sglang/issues/42170) [Roadmap] DeepSeek V4.1 Optimization 💬2
- [#42217](https://github.com/sgl-project/sglang/issues/42217) MultiDetokenizerRouter splits each batch into per-request IPC sends 💬1
- [#42173](https://github.com/sgl-project/sglang/issues/42173) RFC: Capability-based device gating for CUDA-compatible OOT platforms
- [#42176](https://github.com/sgl-project/sglang/issues/42176) [Feature] Integrate Cake kernels via FlashInfer: model-by-model tracker
- [#42272](https://github.com/sgl-project/sglang/issues/42272) [Bug] Anthropic /v1/messages: inline system messages are still merged into the top system block on system-first templates (Qwen), so the prefix cache misses every turn
- [#42269](https://github.com/sgl-project/sglang/issues/42269) response_format + tools on glm47: tool calls silently dropped, model invents a JSON answer
- [#42260](https://github.com/sgl-project/sglang/issues/42260) [Bug] Anthropic streaming drops a tool call's closing "}" when whitespace text arrives between its arguments (multiple tool calls, qwen3_coder)
- [#42237](https://github.com/sgl-project/sglang/issues/42237) [Feature] Rust mm datapath: InternVL server-pipeline processor
- [#42222](https://github.com/sgl-project/sglang/issues/42222) [Bug] expert-distribution endpoints terminate the scheduler when expert_distribution_recorder_mode is unset
- [#42188](https://github.com/sgl-project/sglang/issues/42188) [Bug] DSv4.1: text-only batches take `vision_topk()` on CUDA, skipping recorder and EPLB remap

#### 🔒 Closed Issues
- [#32459](https://github.com/sgl-project/sglang/issues/32459) [Bug] EAGLE speculative decoding defeats radix prefix reuse for multi-turn traffic (GLM-DSA NVFP4, v0.5.16) — no crash, silent 97%→40-53% reuse collapse
- [#27310](https://github.com/sgl-project/sglang/issues/27310) [RFC] GPU Memory Service (GMS) integration for out-of-process GPU memory management in SGLang
- [#33415](https://github.com/sgl-project/sglang/issues/33415) OLMo-2 bypasses its own fused QK norm on every path except cuda-graph capture
- [#33383](https://github.com/sgl-project/sglang/issues/33383) [AMD] EAGLE3 spec-decode unsupported for MiniMax-M3: minimax_sparse_backend has no decode-shaped forward path (extend_seq_lens=None)
- [#33360](https://github.com/sgl-project/sglang/issues/33360) [Bug] DeepSeek-V4-Flash-0731 abnormal accuracy output when dp < tp
- [#33324](https://github.com/sgl-project/sglang/issues/33324) [Bug] Glm47MoeDetector sets tool_index to the tool's position in tools, not the call index (same pattern as #25073)
- [#42162](https://github.com/sgl-project/sglang/issues/42162) [Bug] MiMo-V2.6 crashes on SM90 (H200) with automatic MoE runner selection: packed MXFP4 experts reach the Triton FP8 runner

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,172 · **Open issues:** 2,518 · **Last push:** <1h ago

On October 3, 2026, the llama.cpp repository released several updates, including version b11365, which fixed a critical issue with the soft_max_back function in the ggml-cpu component that incorrectly handled destination aliasing. Additionally, version b11364 introduced support for a nimble decision model, while b11362 added a new tensor API for flash attention kernels optimized for F16 key-value pairs on Metal architecture. Among the merged PRs, significant contributions included the addition of the /v1/systemone API for various models and improvements to memory management and performance across different backends. Noteworthy new issues were raised, particularly a bug in the router mode that resulted in blank log lines (#29878), highlighting ongoing challenges in the system.

#### 🚀 New Releases
- [b11365](https://github.com/ggml-org/llama.cpp/releases/tag/b11365) b11365
- [b11364](https://github.com/ggml-org/llama.cpp/releases/tag/b11364) b11364
- [b11362](https://github.com/ggml-org/llama.cpp/releases/tag/b11362) b11362
- [b11361](https://github.com/ggml-org/llama.cpp/releases/tag/b11361) b11361
- [b11355](https://github.com/ggml-org/llama.cpp/releases/tag/b11355) b11355
- [b11352](https://github.com/ggml-org/llama.cpp/releases/tag/b11352) b11352
- [b11351](https://github.com/ggml-org/llama.cpp/releases/tag/b11351) b11351
- [b11349](https://github.com/ggml-org/llama.cpp/releases/tag/b11349) b11349
- [b11347](https://github.com/ggml-org/llama.cpp/releases/tag/b11347) b11347
- [b11346](https://github.com/ggml-org/llama.cpp/releases/tag/b11346) b11346

#### ✅ Merged PRs
- [#29831](https://github.com/ggml-org/llama.cpp/pull/29831) model: add support for clef decision model (text-only)
- [#29184](https://github.com/ggml-org/llama.cpp/pull/29184) CUDA: fuse shared experts into MMVQ
- [#29818](https://github.com/ggml-org/llama.cpp/pull/29818) llama, server: add /v1/systemone API (models: laya, julia-1, lev, openjev, kev)
- [#29570](https://github.com/ggml-org/llama.cpp/pull/29570) metal : add tensor API flash attention kernel for F16 KV
- [#29842](https://github.com/ggml-org/llama.cpp/pull/29842) ci : use t4-medium for cuda jobs
- [#27694](https://github.com/ggml-org/llama.cpp/pull/27694) Make the drafter probabilistic and the target verify by rejection sampling for simple draft and MTP
- [#27663](https://github.com/ggml-org/llama.cpp/pull/27663) ggml-cuda : fix cpy transposed path corrupting non-contiguous dst
- [#29817](https://github.com/ggml-org/llama.cpp/pull/29817) ggml-quants : avoid invalid rounding in qkx3 scale search
- [#27096](https://github.com/ggml-org/llama.cpp/pull/27096) ggml-cpu : fix soft_max_back wrong output when dst aliases src1
- [#29844](https://github.com/ggml-org/llama.cpp/pull/29844) model: support nimble decision model
- [#29850](https://github.com/ggml-org/llama.cpp/pull/29850) readme : add cmd install commands
- [#29841](https://github.com/ggml-org/llama.cpp/pull/29841) common : remove fs_open_ifstream() by using u8path()
- [#29839](https://github.com/ggml-org/llama.cpp/pull/29839) llama : silence unused-result warnings
- [#29840](https://github.com/ggml-org/llama.cpp/pull/29840) llama : use GGML_ABORT instead of throw
- [#29787](https://github.com/ggml-org/llama.cpp/pull/29787) opencl: use sigmoid f16 for bf16
- [#29186](https://github.com/ggml-org/llama.cpp/pull/29186) SYCL: Q8_0 DMMV ESIMD and MMVQ wide load
- [#28531](https://github.com/ggml-org/llama.cpp/pull/28531) vulkan: disable large matmul tile on Samsung GPUs with 32KB shared memory
- [#29062](https://github.com/ggml-org/llama.cpp/pull/29062) sycl: large register file for D=512 FA vec kernels
- [#28985](https://github.com/ggml-org/llama.cpp/pull/28985) sycl : do not use slow oneDNN reference matmul and fattn
- [#29824](https://github.com/ggml-org/llama.cpp/pull/29824) qwen4exp : optimize mask constructions
- [#23671](https://github.com/ggml-org/llama.cpp/pull/23671) ggml : add `alloc_buffer_n` to buffer type interface
- [#29837](https://github.com/ggml-org/llama.cpp/pull/29837) ci: fix missing zdnn backend check
- [#29794](https://github.com/ggml-org/llama.cpp/pull/29794) vulkan: add logging to pipeline compile issues
- [#29177](https://github.com/ggml-org/llama.cpp/pull/29177) pyproject : add linux platform marker to uv torch source (#29176)
- [#29828](https://github.com/ggml-org/llama.cpp/pull/29828) hexagon: install rebuilt HTP skels

#### 🐛 New Issues
- [#29878](https://github.com/ggml-org/llama.cpp/issues/29878) Misc. bug: blank log lines in router mode `bug-unconfirmed` 💬2
- [#29879](https://github.com/ggml-org/llama.cpp/issues/29879) `common/fit`: MoE step 4 underflows `n_part` on the last device (guard tests `id` instead of `id_dense_start`) → near-endless fit loop 💬1
- [#29870](https://github.com/ggml-org/llama.cpp/issues/29870) Feature Request: Add support for RheoEcho ETET 1.0 24E 1.8B A1B Preview `enhancement` 💬1
- [#29867](https://github.com/ggml-org/llama.cpp/issues/29867) Eval bug: GLM-5.3-Flash decode stalls on Metal because fused Lightning Indexer falls back to CPU `bug-unconfirmed` 💬1
- [#29868](https://github.com/ggml-org/llama.cpp/issues/29868) Eval bug: Qwen3.8-27B + `--spec-type draft-mtp` + `--split-mode tensor` on ROCm (2x RX 9060 XT) hard-freezes the whole machine `bug-unconfirmed` 💬1
- [#29847](https://github.com/ggml-org/llama.cpp/issues/29847) Eval bug: CUDA MoE MMQ illegal memory access at ubatch 512 (src1 padding uses ne11 instead of gathered columns) `bug-unconfirmed` 💬1
- [#29884](https://github.com/ggml-org/llama.cpp/issues/29884) [Android/aarch64] Backend score prefers the SVE2 variant, which is 2x slower than the non-SVE variant on 128-bit VL mobile cores
- [#29880](https://github.com/ggml-org/llama.cpp/issues/29880) Eval bug: llama-bench - state_read_data: incompatible V transposition, failed to restore kv cache `bug-unconfirmed`
- [#29875](https://github.com/ggml-org/llama.cpp/issues/29875) Feature Request: Early-exit speculative drafting via Shannon entropy (comparison with p_min) `enhancement`
- [#29874](https://github.com/ggml-org/llama.cpp/issues/29874) Feature Request: gracefully ignore missing/invalid arguments instead of failing the model loading in serve mode `enhancement`
- [#29871](https://github.com/ggml-org/llama.cpp/issues/29871) Eval bug: ggml-vulkan crash with vulkan 1.0 `bug-unconfirmed`
- [#29866](https://github.com/ggml-org/llama.cpp/issues/29866) Misc. bug: server_tokens::keep_first checks find_chunk(n - 1) instead of find_chunk(n), allowing partial media chunks
- [#29865](https://github.com/ggml-org/llama.cpp/issues/29865) Misc. bug: infinite loop in server_tokens::push_back(server_tokens&) when the appended tokens contain media
- [#29858](https://github.com/ggml-org/llama.cpp/issues/29858) Misc. bug: High CPU use with model running on GPU. Regression introducted in b10423) `bug-unconfirmed`
- [#29854](https://github.com/ggml-org/llama.cpp/issues/29854) Misc. bug: llama serve -hf rejects the token returned by the current Hugging Face CLI authentication flow. `bug-unconfirmed`
- [#29849](https://github.com/ggml-org/llama.cpp/issues/29849) Misc. bug: Homebrew's llama.cpp 0.5.0 has no web UI
- [#29845](https://github.com/ggml-org/llama.cpp/issues/29845) Fix size-suffix threshold so exact 1M/1B/1T counts use the larger unit

#### 🔒 Closed Issues
- [#24473](https://github.com/ggml-org/llama.cpp/issues/24473) Feature: Compact Conversation Action
- [#29758](https://github.com/ggml-org/llama.cpp/issues/29758) Feature Request: Improve Security against Prompt Injection attacks
- [#29786](https://github.com/ggml-org/llama.cpp/issues/29786) Vulkan: aborts with no diagnostic on the Qualcomm Adreno driver (works on Turnip, same binary, same args)
- [#27237](https://github.com/ggml-org/llama.cpp/issues/27237) [Vulkan] Qwen3.5-27B (qwen35 hybrid DeltaNet) garbage output at batch size 512; OK at 1024/4096
- [#29418](https://github.com/ggml-org/llama.cpp/issues/29418) [Vulkan] GGML_ASSERT(neq0 == HSK) failed in ggml-vulkan.cpp during speculative draft decoding (MTP) with tensor split
- [#27039](https://github.com/ggml-org/llama.cpp/issues/27039) Refactor: share thread pools across drafter and main model contexts
- [#27327](https://github.com/ggml-org/llama.cpp/issues/27327) Eval bug: Low speed of MoE models when unloading to RAM with VRAM. Degradation more than 3 times.
- [#27387](https://github.com/ggml-org/llama.cpp/issues/27387) Token corruption (wrong-alphabet chars) with two concurrent long generations; identical solo run is clean
- [#28251](https://github.com/ggml-org/llama.cpp/issues/28251) Eval bug: MoE models crashes llama with CUDA Error on first or second prompt.
- [#27334](https://github.com/ggml-org/llama.cpp/issues/27334) Eval bug: errors and poor performance on vulkan tensor split on quad rx580
- [#27359](https://github.com/ggml-org/llama.cpp/issues/27359) Feature Request: Inkling support
- [#27361](https://github.com/ggml-org/llama.cpp/issues/27361) Tool: KV-gate proxy to prevent 'KV pool full' deadlock with idle slots
- [#27366](https://github.com/ggml-org/llama.cpp/issues/27366) Bug: -sm tensor hangs and leaks VRAM on multi-GPU Volta (V100); -sm row unavailable on CUDA
- [#27397](https://github.com/ggml-org/llama.cpp/issues/27397) [server] json_schema_to_grammar: regex escape "\/" passed through verbatim into GBNF → "failed to parse grammar" (HTTP 400)
- [#27415](https://github.com/ggml-org/llama.cpp/issues/27415) Compile bug: version: 0.1.0-dev (build 10454, commit 4df29be4f) built with GNU 16.2.1 for Linux x86_64
- [#27420](https://github.com/ggml-org/llama.cpp/issues/27420) Vulkan/MTP performance bug triggered by ubatch=256 + f16 KV cache at large context
- [#29879](https://github.com/ggml-org/llama.cpp/issues/29879) `common/fit`: MoE step 4 underflows `n_part` on the last device (guard tests `id` instead of `id_dense_start`) → near-endless fit loop
- [#29804](https://github.com/ggml-org/llama.cpp/issues/29804) Misc. bug: imatrix assertion failure in make_qkx3_quants
- [#29176](https://github.com/ggml-org/llama.cpp/issues/29176) Misc. bug: pyproject.toml: uv sync fails on macOS due to unconditional PyTorch CPU index

### Ollama (`ollama/ollama`)

**Stars:** 182,069 · **Open issues:** 4,156 · **Last push:** 6h ago

On October 3, 2026, there were no new releases for Ollama. However, two documentation-related pull requests were merged, adding valuable information on image input for decision models and providing links to available decision models. Among the new issues, the most notable concern involves the MLX runner not utilizing the full GPU capabilities on Mac with the M4 Pro chipset, which has attracted three comments. Other important issues include a bug with the Windows installer failing Authenticode due to a hash mismatch and a challenge with the /v1/chat/completions endpoint where tool results are incorrectly associated by position rather than tool_call_id.

#### ✅ Merged PRs
- [#18757](https://github.com/ollama/ollama/pull/18757) docs: document image input for decision models
- [#18758](https://github.com/ollama/ollama/pull/18758) docs: link to available decision models

#### 🐛 New Issues
- [#18754](https://github.com/ollama/ollama/issues/18754) MLX runner not using full GPU (Mac / M4 Pro) `bug` 💬3
- [#18760](https://github.com/ollama/ollama/issues/18760) Decision models: a basal-1.0 encoding and per-type temperatures for /v1/systemone 💬1
- [#18744](https://github.com/ollama/ollama/issues/18744) MLX engine: weights are unwired ~2 s after each request on macOS 27, so the first request after idle pages them back in
- [#18765](https://github.com/ollama/ollama/issues/18765) Windows installer-signature bug: Ollama v0.35.1 Windows installer fail Authenticode with HashMismatch `bug`
- [#18762](https://github.com/ollama/ollama/issues/18762) /v1/chat/completions: reordered tool results are associated by position instead of tool_call_id `bug`
- [#18756](https://github.com/ollama/ollama/issues/18756) Rocm GPU VRAM ignored when evicting models `bug`
- [#18753](https://github.com/ollama/ollama/issues/18753) Build materials and CPU artifact correspondence for v0.30.8 Linux AMD64
- [#18752](https://github.com/ollama/ollama/issues/18752) extend `ollama launch` to browsers (Chrome, Edge, Firefox, Opera, Brave)
- [#18750](https://github.com/ollama/ollama/issues/18750) /v1/systemone with Nimble serializes all questions: qwen35 is forced to numParallel=1
- [#18747](https://github.com/ollama/ollama/issues/18747) Pull request 18693 is waiting for a review

#### 🔒 Closed Issues
- [#18418](https://github.com/ollama/ollama/issues/18418) N/A

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,063 · **Open issues:** 5,577 · **Last push:** <1h ago

On October 3, 2026, LiteLLM released version v1.105.0-dev.2, which introduced signed Docker images for enhanced security. Significant updates included features that allow the investigation progress to be displayed as a single staged bar and the addition of sample previews in the lens setup, while improvements were made to the proxy to prevent queued registry read-throughs from consuming the resync budget. Among the notable merged fixes was the resolution of issues related to the Lens traces refresh button and the handling of migration sanity checks in proxy extras. However, the introduction of new bugs, such as incorrectly handling OTLP span events and issues with model parameter forwarding in ChatOpenAI, presents ongoing challenges for the team.

#### 🚀 New Releases
- [v1.105.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-dev.2) v1.105.0-dev.2

#### ✅ Merged PRs
- [#44239](https://github.com/BerriAI/litellm/pull/44239) fix(proxy): share ownership permissions for spend logs and traces
- [#44304](https://github.com/BerriAI/litellm/pull/44304) chore(release): backport #44277 to rc/1.104.0 and bump oauthlib
- [#44283](https://github.com/BerriAI/litellm/pull/44283) fix(proxy-extras): retry P3009 when a peer already recovered the named migration row
- [#44306](https://github.com/BerriAI/litellm/pull/44306) refactor(ui): compose dashboard pages with shared layouts
- [#44301](https://github.com/BerriAI/litellm/pull/44301) feat(lens): show investigation progress as one staged bar with time left
- [#44277](https://github.com/BerriAI/litellm/pull/44277) fix(proxy): stop queued registry read-throughs spending the resync budget
- [#44285](https://github.com/BerriAI/litellm/pull/44285) refactor(traces): type the ClickHouse query help response
- [#44287](https://github.com/BerriAI/litellm/pull/44287) chore(openrouter): sync prices, limits and deprecation dates from the models API
- [#44268](https://github.com/BerriAI/litellm/pull/44268) feat(lens): add sample previews and improve setup and worker feedback
- [#44286](https://github.com/BerriAI/litellm/pull/44286) fix(proxy-extras): stop the migration sanity check from building the hand-built SpendLogs indexes and cut 1.103.3
- [#44252](https://github.com/BerriAI/litellm/pull/44252) fix(ui): make the Lens traces refresh button always clickable
- [#44281](https://github.com/BerriAI/litellm/pull/44281) test: fix three order-dependent and timing-flaky tests (rc/1.105.0 backport of #44271)
- [#44280](https://github.com/BerriAI/litellm/pull/44280) test: fix three order-dependent and timing-flaky tests (rc/1.104.0 backport of #44271)
- [#44271](https://github.com/BerriAI/litellm/pull/44271) test: fix three order-dependent and timing-flaky tests
- [#44265](https://github.com/BerriAI/litellm/pull/44265) test(integration): opt the config pass-through spend-log case into auth
- [#44269](https://github.com/BerriAI/litellm/pull/44269) test(integration): opt the config pass-through spend-log case into auth (rc/1.105.0 backport of #44265)
- [#44267](https://github.com/BerriAI/litellm/pull/44267) test(integration): opt the config pass-through spend-log case into auth (rc/1.104.0 backport of #44265)
- [#44243](https://github.com/BerriAI/litellm/pull/44243) perf(proxy): batch daily model usage writes instead of upserting per request
- [#44112](https://github.com/BerriAI/litellm/pull/44112) fix(bedrock): surface unrecognized converse-stream event frames instead of an empty turn
- [#44260](https://github.com/BerriAI/litellm/pull/44260) fix(lens): default to traces and reopen span details
- [#44232](https://github.com/BerriAI/litellm/pull/44232) refactor(mcp): extract upstream preparation and support modern clients
- [#44261](https://github.com/BerriAI/litellm/pull/44261) chore(ui): untrack tsconfig.tsbuildinfo and gitignore *.tsbuildinfo
- [#44254](https://github.com/BerriAI/litellm/pull/44254) test: repair stale and polluting tests red on scheduled main CI (#44229) [rc/1.105.0]
- [#44228](https://github.com/BerriAI/litellm/pull/44228) feat(traces): type queries and align read access with log visibility
- [#44229](https://github.com/BerriAI/litellm/pull/44229) test: repair stale and polluting tests red on scheduled main CI
- [#44251](https://github.com/BerriAI/litellm/pull/44251) fix(ui): shrink the sidebar logo so it stops outweighing page titles (backport #44247 to rc/1.105.0)
- [#44248](https://github.com/BerriAI/litellm/pull/44248) feat(tracing): support claude agent sdk traces with agent name, logo and chat content
- [#44249](https://github.com/BerriAI/litellm/pull/44249) fix(ui): make model leaderboard chart bars wide and readable
- [#44247](https://github.com/BerriAI/litellm/pull/44247) fix(ui): shrink the sidebar logo so it stops outweighing page titles
- [#43978](https://github.com/BerriAI/litellm/pull/43978) fix(scim): apply path-less group PATCH ops instead of storing them under an empty metadata key
- [#44233](https://github.com/BerriAI/litellm/pull/44233) fix(lens): run investigations with configured wildcard models
- [#42213](https://github.com/BerriAI/litellm/pull/42213) fix(exa): fall back to highlights/summary when text is missing
- [#44237](https://github.com/BerriAI/litellm/pull/44237) chore(prices): add xAI grok-voice-transcribe-1.0 deprecation date
- [#44234](https://github.com/BerriAI/litellm/pull/44234) chore: bump litellm-proxy-extras 0.4.104 -> 0.4.105
- [#44235](https://github.com/BerriAI/litellm/pull/44235) chore: bump litellm-proxy-extras 0.4.104 -> 0.4.105
- [#44043](https://github.com/BerriAI/litellm/pull/44043) feat(ui): add System One (Jev) tab to the playground
- [#42662](https://github.com/BerriAI/litellm/pull/42662) fix(proxy): carry key, team and project tags into pass-through spend logs
- [#44223](https://github.com/BerriAI/litellm/pull/44223) fix(ui): leave unset callback select params out of the save payload (backport #44213 to rc/1.105.0)
- [#44086](https://github.com/BerriAI/litellm/pull/44086) fix(otel): tolerate non-dict callback_settings.otel and ignore bare EXCLUDED_SERVICES env
- [#44224](https://github.com/BerriAI/litellm/pull/44224) chore: bump litellm-proxy-extras to 0.4.102.post1
- [#44225](https://github.com/BerriAI/litellm/pull/44225) chore(release): bump litellm-proxy-extras 0.4.100 -> 0.4.100.post1 for stable/1.103.x
- [#43768](https://github.com/BerriAI/litellm/pull/43768) feat(ui): select Laya for OSS classification
- [#44206](https://github.com/BerriAI/litellm/pull/44206) fix(proxy): enforce the migration check by default and stop building SpendLogs indexes in migrations (rc/1.104.0)
- [#44205](https://github.com/BerriAI/litellm/pull/44205) fix(proxy): enforce the migration check by default and stop building SpendLogs indexes in migrations (stable/1.103.x)
- [#42375](https://github.com/BerriAI/litellm/pull/42375) feat(jwt): auto_register_map_existing_key maps JWT to the user's existing virtual key
- [#43180](https://github.com/BerriAI/litellm/pull/43180) fix(oci): resolve the GenAI endpoint realm from the compartment OCID instead of hardcoding oraclecloud.com
- [#44220](https://github.com/BerriAI/litellm/pull/44220) fix(proxy-extras): backport #44203 to rc/1.105.0
- [#44216](https://github.com/BerriAI/litellm/pull/44216) chore(release): backport #44066 to rc/1.104.0
- [#44218](https://github.com/BerriAI/litellm/pull/44218) fix(lens): preserve framework agent names and GenAI message content
- [#44115](https://github.com/BerriAI/litellm/pull/44115) fix(auto-router): count usage savings by selected UTC request day
- [#43626](https://github.com/BerriAI/litellm/pull/43626) feat: add Laya gateway and OSS classifier providers
- [#44215](https://github.com/BerriAI/litellm/pull/44215) chore(release): backport #44066 to rc/1.105.0
- [#44203](https://github.com/BerriAI/litellm/pull/44203) fix(proxy-extras): hand libpq a root cert, not Prisma's sslcert, when the migration job builds indexes
- [#44213](https://github.com/BerriAI/litellm/pull/44213) fix(ui): leave unset callback select params out of the save payload
- [#40108](https://github.com/BerriAI/litellm/pull/40108) fix(chatgpt): preserve requested service tier in Responses calls
- [#44214](https://github.com/BerriAI/litellm/pull/44214) fix(proxy): preserve lifespan state across all entrypoints
- [#44066](https://github.com/BerriAI/litellm/pull/44066) feat(mcp)!: disable stdio MCP servers by default
- [#44207](https://github.com/BerriAI/litellm/pull/44207) fix(proxy): exit when DATABASE_URL is set but the Prisma toolchain is missing
- [#44212](https://github.com/BerriAI/litellm/pull/44212) revert: backport of #43948, #44109, #44124 to rc/1.104.0 (#44156)
- [#40924](https://github.com/BerriAI/litellm/pull/40924) fix(ui): register tencent in the Add Model provider dropdown
- [#44157](https://github.com/BerriAI/litellm/pull/44157) test: remove 130 legacy tests owned by stronger unit proofs
- [#42141](https://github.com/BerriAI/litellm/pull/42141) chore(helm): drop migrationJob values the chart never reads
- [#44123](https://github.com/BerriAI/litellm/pull/44123) fix(lens): simplify the example investigation preview
- [#43673](https://github.com/BerriAI/litellm/pull/43673) feat(docker): one-command quickstart that starts the gateway, Postgres, and the admin UI
- [#43941](https://github.com/BerriAI/litellm/pull/43941) fix(tracing): unify ClickHouse storage configuration
- [#44175](https://github.com/BerriAI/litellm/pull/44175) fix(cost-map): add OpenAI TTS and GPT-5.x deprecation dates
- [#44166](https://github.com/BerriAI/litellm/pull/44166) test(mcp): fire MCP client test deadlines on conditions instead of wall-clock time
- [#43844](https://github.com/BerriAI/litellm/pull/43844) refactor(types): replace Any with proven types in 7 files
- [#44153](https://github.com/BerriAI/litellm/pull/44153) test(straiker): assert a saved api_version v1 with an sk_agt_ key routes to v3
- [#44161](https://github.com/BerriAI/litellm/pull/44161) chore(harness): remove banner comments, restating comments and dead in_loop_thread
- [#44159](https://github.com/BerriAI/litellm/pull/44159) chore(release): backport #42643 to stable/1.100.x
- [#44156](https://github.com/BerriAI/litellm/pull/44156) chore(release): backport #43948, #44109, #44124 to rc/1.104.0
- [#44151](https://github.com/BerriAI/litellm/pull/44151) chore(release): backport #39590 to stable/1.100.x and cut 1.100.5
- [#44120](https://github.com/BerriAI/litellm/pull/44120) test(e2e): move live-provider legacy tests into tests/e2e
- [#44075](https://github.com/BerriAI/litellm/pull/44075) fix(proxy): keep tool payloads and logprobs unmasked in stored spend logs
- [#44067](https://github.com/BerriAI/litellm/pull/44067) fix(guardrails): restore Azure guardrail get_user_prompt dispatch and allow logging
- [#44099](https://github.com/BerriAI/litellm/pull/44099) fix(azure_storage): keep client call ids from sharing one Data Lake file
- [#44145](https://github.com/BerriAI/litellm/pull/44145) chore(cost-map): take azure_ai claude-sonnet-4-5 retirement date from the Azure schedule
- [#44128](https://github.com/BerriAI/litellm/pull/44128) test(integration): move legacy proxy, router and Redis tests into tests/integration
- [#44011](https://github.com/BerriAI/litellm/pull/44011) fix(guardrails): straiker v3 routes sk_agt_ keys to v3 and fails closed on a missing verdict
- [#44106](https://github.com/BerriAI/litellm/pull/44106) test(straiker): assert a saved api_version v1 with an sk_agt_ key routes to v3
- [#44085](https://github.com/BerriAI/litellm/pull/44085) feat(tracing): add scoped SQL queries and schema-aware help
- [#44141](https://github.com/BerriAI/litellm/pull/44141) fix(proxy): always exit when database setup fails at boot
- [#44143](https://github.com/BerriAI/litellm/pull/44143) fix(proxy): reject non-canonical daily activity dates
- [#44139](https://github.com/BerriAI/litellm/pull/44139) fix(daily_activity): keep NULL entity ids when excluding entity ids
- [#44142](https://github.com/BerriAI/litellm/pull/44142) chore(cost-map): add azure_ai deprecation dates from the Azure retired models page
- [#43099](https://github.com/BerriAI/litellm/pull/43099) feat(mcp): add Microsoft 365 (Graph) server to the MCP catalog
- [#44126](https://github.com/BerriAI/litellm/pull/44126) chore: bump litellm-enterprise 0.1.72 -> 0.1.73, litellm-proxy-extras 0.4.103 -> 0.4.104

#### 🐛 New Issues
- [#44274](https://github.com/BerriAI/litellm/issues/44274) [Bug]: Generic OTLP span events are decoded but silently dropped before ClickHouse storage 💬2
- [#44154](https://github.com/BerriAI/litellm/issues/44154) [Bug]: Background health check results are attributed to every deployment sharing the same `litellm_params.model` `bug` `llm translation` 💬2
- [#44172](https://github.com/BerriAI/litellm/issues/44172) 邀请 litellm 加入 GithubStarMate，让更多人发现你的作品 💬1
- [#44197](https://github.com/BerriAI/litellm/issues/44197) [Bug]: ChatOpenAI + LiteLLM not forwarding thinking parameter to Anthropic Models `bug` `llm translation` 💬1
- [#44181](https://github.com/BerriAI/litellm/issues/44181) Add gpt-5.6-sol-2026-07-09 to the model price map `llm translation` 💬1
- [#44174](https://github.com/BerriAI/litellm/issues/44174) [Bug]: Client anthropic-beta header is not forwarded to github_copilot, so Claude Code's per-message output_config 400s `llm translation` `claude code` 💬1
- [#44182](https://github.com/BerriAI/litellm/issues/44182) [Bug]: Team ID not verified on JWT `bug`
- [#44300](https://github.com/BerriAI/litellm/issues/44300) [Bug]: openai_like embeddings send extra_headers in the JSON body instead of as HTTP headers `llm translation`
- [#44298](https://github.com/BerriAI/litellm/issues/44298) [Bug]: Sonnet 5.5 thinking.disabled silently drops to full adaptive thinking instead of between_tools `llm translation`
- [#44275](https://github.com/BerriAI/litellm/issues/44275) [Bug]: Trace detail returns HTTP 500 above 1,000 spans due to the ClickHouse reader row cap
- [#44262](https://github.com/BerriAI/litellm/issues/44262) [Feature]: Serve Codex-compatible thread usage endpoint so Codex CLI shows real-time $ cost through the proxy `llm translation`
- [#44250](https://github.com/BerriAI/litellm/issues/44250) [Bug]: user_turn replays previous ask’s model after classifier default_model fallback `llm translation`
- [#44242](https://github.com/BerriAI/litellm/issues/44242) [Bug]: Native Responses WebSocket forwards wrapped response.inject.response_id unchanged, causing response_not_found `llm translation`
- [#44238](https://github.com/BerriAI/litellm/issues/44238) [Bug]: /v1/messages streaming: transport drop before first content is never retried (num_retries/max_retries ignored), surfaces as HTTP 500 `llm translation`
- [#44217](https://github.com/BerriAI/litellm/issues/44217) [Bug]: ⏺ API Error: The response stream was malformed. The response above may be incomplete. `bug` `llm translation`
- [#44211](https://github.com/BerriAI/litellm/issues/44211) [Bug] DeepSeek transformer silently drops image content from role=tool messages `llm translation`
- [#44208](https://github.com/BerriAI/litellm/issues/44208) [Feature]: Add an “is not” operator to the Key Alias filter in the Logs UI `enhancement`
- [#44200](https://github.com/BerriAI/litellm/issues/44200) audio_speech: deployment-level input_cost_per_character is silently ignored — 200 with spend=0 and no x-litellm-response-cost header `llm translation`
- [#44188](https://github.com/BerriAI/litellm/issues/44188) [Bug]: websearch_interception drops allowed_domains and blocked_domains from the Anthropic web_search tool `llm translation` `claude code`
- [#44186](https://github.com/BerriAI/litellm/issues/44186) [Bug]: OTel spans report llm.cost.total = 0 for a model LiteLLM could not price `llm translation`
- [#44184](https://github.com/BerriAI/litellm/issues/44184) [Bug]: OTel error spans have no status description, the error is only in error.message `llm translation`
- [#44180](https://github.com/BerriAI/litellm/issues/44180) Azure route: cached client ignores max_retries, so num_retries re-attempts keep the SDK's retries (16 requests instead of 7) `llm translation`
- [#44169](https://github.com/BerriAI/litellm/issues/44169) Optional pre-push hook rejects the documented internal litellm_ branch convention
- [#44149](https://github.com/BerriAI/litellm/issues/44149) [Feature]: Allow exact Jev classifier URLs for Cloudflare Clef-compatible endpoints

#### 🔒 Closed Issues
- [#15560](https://github.com/BerriAI/litellm/issues/15560) [Bug]: Stdio MCP not working
- [#31451](https://github.com/BerriAI/litellm/issues/31451) [Bug]: unable to use claude code -> litellm -> gpt5.x
- [#24669](https://github.com/BerriAI/litellm/issues/24669) [Bug]: Bedrock cross-region inference pricing entries in cost map are unreachable due to lookup order
- [#28679](https://github.com/BerriAI/litellm/issues/28679) [Bug]: User-count badge ("U: X/5") in sidebar overlaps the Settings nav item
- [#44172](https://github.com/BerriAI/litellm/issues/44172) 邀请 litellm 加入 GithubStarMate，让更多人发现你的作品
- [#36905](https://github.com/BerriAI/litellm/issues/36905) [Bug] Exa search: `contents.highlights` and `contents.summary` are sent, billed, and then dropped by `transform_search_response`
- [#44169](https://github.com/BerriAI/litellm/issues/44169) Optional pre-push hook rejects the documented internal litellm_ branch convention

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,147 · **Open issues:** 1,112 · **Last push:** <1h ago

On October 3, 2026, there were no new releases for Unsloth, but several notable features and fixes were merged, enhancing the Studio experience. Key updates include the addition of a native engine for audio processing, improvements to the model selection interface, and adjustments to various visual components for better usability, such as making carried rows and sidebar buttons more intuitive. Meanwhile, new issues emerged, notably #12518, which addresses a bug where users consistently encounter a "Generation stopped making progress" error, signifying a critical troubleshooting area for developers moving forward. Overall, it was a productive day focused on refining user experience and addressing emerging concerns.

#### ✅ Merged PRs
- [#12562](https://github.com/unslothai/unsloth/pull/12562) Studio: make carried rows a faintly frosted, darker copy
- [#12563](https://github.com/unslothai/unsloth/pull/12563) Studio: nudge sidebar row pin and options buttons 3px right
- [#12560](https://github.com/unslothai/unsloth/pull/12560) Re-measure the Studio startup budget after the managed engine options
- [#12548](https://github.com/unslothai/unsloth/pull/12548) Keep the MLX inference test stub neutral for every helper zoo enters around a model
- [#12556](https://github.com/unslothai/unsloth/pull/12556) Postpone annotation evaluation in engine_compat.py so main's PEP 604 ratchet holds
- [#12499](https://github.com/unslothai/unsloth/pull/12499) Studio: lift a carried model picker row like a sidebar chat, and lighten both drag copies
- [#11361](https://github.com/unslothai/unsloth/pull/11361) fix(studio): WSL2 Windows localhost hint in startup banner (#11187)
- [#12505](https://github.com/unslothai/unsloth/pull/12505) Studio: stop rejecting --mmproj-device CUDA1 when gpu_ids are saved
- [#12523](https://github.com/unslothai/unsloth/pull/12523) Studio: renew the chat-run lease while long prefill is still advancing
- [#12529](https://github.com/unslothai/unsloth/pull/12529) Count only the lock's own waits in the unlockable-filesystem row
- [#12526](https://github.com/unslothai/unsloth/pull/12526) Studio: move torchao int8 weights back to the GPU after an oversized request streams pinned groups
- [#12516](https://github.com/unslothai/unsloth/pull/12516) Studio: use ComfyUI's default settings for FLUX.1, Qwen-Image, Z-Image, Ideogram 4, Wan2.2 and HunyuanVideo-1.5
- [#12514](https://github.com/unslothai/unsloth/pull/12514) Parity: keep the reap-margin check off the edge of its own window
- [#12511](https://github.com/unslothai/unsloth/pull/12511) Studio: draw the command palette like chat search
- [#12506](https://github.com/unslothai/unsloth/pull/12506) Studio: keep the composer permission shield still while the plus spins
- [#12438](https://github.com/unslothai/unsloth/pull/12438) Studio: clip every rounded scroller in Firefox, dropping the overflow watcher
- [#12502](https://github.com/unslothai/unsloth/pull/12502) Studio: center the sidebar row kebab and pin in their hover circle
- [#12342](https://github.com/unslothai/unsloth/pull/12342) Studio: add audio.cpp as a native engine for speech, music and dictation
- [#12024](https://github.com/unslothai/unsloth/pull/12024) Studio: run vLLM and SGLang on Windows inside a private WSL2 distro
- [#11016](https://github.com/unslothai/unsloth/pull/11016) Lift the transformers ceiling to 5.17.0 and align the mirrored CI caps
- [#11491](https://github.com/unslothai/unsloth/pull/11491) Studio: add opt-in vLLM and SGLang support with multi-GPU inference, quantization and vision
- [#12171](https://github.com/unslothai/unsloth/pull/12171) Make RMSNorm, RoPE and the input-embedding hook traceable by torch.compile
- [#12113](https://github.com/unslothai/unsloth/pull/12113) Fused Triton NF4 dequant and GEMV: bit-exact, stream-safe, torch.compile traceable
- [#10783](https://github.com/unslothai/unsloth/pull/10783) Studio: add per-model custom llama.cpp INI configuration
- [#12486](https://github.com/unslothai/unsloth/pull/12486) Studio: train a dataset's system column as the system prompt
- [#12492](https://github.com/unslothai/unsloth/pull/12492) Studio: stop CLI commands running as another account when Studio has more than one
- [#12491](https://github.com/unslothai/unsloth/pull/12491) Studio: log the real reason the Decision API model failed to load
- [#12455](https://github.com/unslothai/unsloth/pull/12455) Studio: load the cached int8 checkpoint for a 5-bit-or-below GGUF pick that has to offload (Qwen-Image-2.1 about 2x faster at 12 / 8 GB)
- [#12461](https://github.com/unslothai/unsloth/pull/12461) Studio: keep MiniMax-H3 GGUF renders on a resident sd-server, released when idle
- [#12490](https://github.com/unslothai/unsloth/pull/12490) Studio: keep Word equations when a .docx is added to a knowledge base or chat documents
- [#12489](https://github.com/unslothai/unsloth/pull/12489) Studio: keep <placeholder> and Vec<T> text in research reports and file previews
- [#12487](https://github.com/unslothai/unsloth/pull/12487) Studio: keep tool-call arguments when training on tool-calling datasets
- [#12488](https://github.com/unslothai/unsloth/pull/12488) Studio: stop adding backslashes to Word files in Data Recipes
- [#12493](https://github.com/unslothai/unsloth/pull/12493) Studio: make unsloth start sampling and reasoning flags apply only to that agent
- [#12519](https://github.com/unslothai/unsloth/pull/12519) Studio: faster first renders and resident text encoder under group offload
- [#12476](https://github.com/unslothai/unsloth/pull/12476) Studio: run Z-Image and Wan2.2-5B / HunyuanVideo-1.5 in fp16 on fp16-only GPUs instead of fp32
- [#12480](https://github.com/unslothai/unsloth/pull/12480) Studio: load FLUX.1 and Qwen-Image on fp16-only GPUs with small host RAM
- [#12503](https://github.com/unslothai/unsloth/pull/12503) Studio: run FLUX.2 RoPE as one fused kernel on fp16 GPUs (klein step 5% faster on T4, bit-identical)
- [#12495](https://github.com/unslothai/unsloth/pull/12495) studio: reuse ssl setup for local gguf requests
- [#12043](https://github.com/unslothai/unsloth/pull/12043) Studio: plan image offload on measured activations so more VRAM is never slower
- [#12150](https://github.com/unslothai/unsloth/pull/12150) Studio: torch 2.13 for new Linux cu130 Python 3.13 installs, existing installs keep their torch
- [#12022](https://github.com/unslothai/unsloth/pull/12022) Studio: keep GGUF weights and the last-run module on their host copy under whole-model offload
- [#12510](https://github.com/unslothai/unsloth/pull/12510) Studio: let the compile cache keep denoiser graphs with sdpa_kernel blocks (restart first render 1-5.5 s faster)
- [#12496](https://github.com/unslothai/unsloth/pull/12496) Studio: faster cold start for image and video loads (first image on H100 7 to 37% sooner)
- [#12472](https://github.com/unslothai/unsloth/pull/12472) Studio: wait for the torch warm's dynamo import before a load's first download
- [#12448](https://github.com/unslothai/unsloth/pull/12448) Studio: fused int8 GEMM with the dequant epilogue, bf16 out (Qwen-Image-2.1 14-17% faster per step)
- [#12211](https://github.com/unslothai/unsloth/pull/12211) Name the matching build when flash-attn or causal-conv1d was built for another torch
- [#12512](https://github.com/unslothai/unsloth/pull/12512) Studio: resume NPU model downloads, keep their progress, and list NPU models in the Hub
- [#12151](https://github.com/unslothai/unsloth/pull/12151) Core: pip extras and auto-install support for torch 2.13 and 2.14
- [#12152](https://github.com/unslothai/unsloth/pull/12152) Raise the released torch ceiling to <2.15.0
- [#10737](https://github.com/unslothai/unsloth/pull/10737) Studio: live dataset preview during active runs
- [#4460](https://github.com/unslothai/unsloth/pull/4460) SentenceTransformer: opt-in encoder unpadding via shared attention dispatch
- [#9308](https://github.com/unslothai/unsloth/pull/9308) Studio: optional systemd user service for Linux auto-start
- [#9716](https://github.com/unslothai/unsloth/pull/9716) Studio: canonicalize and validate web_search arguments
- [#12504](https://github.com/unslothai/unsloth/pull/12504) Studio: resume a reply that stopped mid-thought on MLX
- [#12484](https://github.com/unslothai/unsloth/pull/12484) Studio: train vision models on images in a list column or inside the messages
- [#11501](https://github.com/unslothai/unsloth/pull/11501) fix(studio): block-split long backslash lines without inline lex (#11376)
- [#12471](https://github.com/unslothai/unsloth/pull/12471) Studio: extend the ROCm MIOpen cutoff and Qwen-Image-2.1 query chunking beyond gfx1151
- [#12409](https://github.com/unslothai/unsloth/pull/12409) Studio: run MiniMax-H3's Diffusers INT8 path on 24 / 16 / 12 GB cards and near the host RAM floor
- [#12479](https://github.com/unslothai/unsloth/pull/12479) Feat/UI rework
- [#12422](https://github.com/unslothai/unsloth/pull/12422) perf(studio): enter the MLX routed-experts and norm-handoff fusions per request
- [#9405](https://github.com/unslothai/unsloth/pull/9405) Add install_missing_dependencies to opt out of the FP8/FP4 llm-compressor auto-install
- [#12513](https://github.com/unslothai/unsloth/pull/12513) Studio: restore markdown chat import and bulk export
- [#12485](https://github.com/unslothai/unsloth/pull/12485) Studio: stop leftover dataset columns becoming the system prompt
- [#10848](https://github.com/unslothai/unsloth/pull/10848) Studio: put llama-server warnings and errors in the default session log
- [#12515](https://github.com/unslothai/unsloth/pull/12515) Baseline the nine unsloth-zoo 2026.9.9 findings after review
- [#12482](https://github.com/unslothai/unsloth/pull/12482) Studio: keep a Data Recipes publish private when the Hub repo already exists
- [#12138](https://github.com/unslothai/unsloth/pull/12138) fix(studio): allow Enter to send with idle macOS Pinyin IME
- [#12483](https://github.com/unslothai/unsloth/pull/12483) Studio: save a merged Whisper export that can be loaded again
- [#11500](https://github.com/unslothai/unsloth/pull/11500) fix(studio): reconcile externally updated saved assistant messages
- [#10710](https://github.com/unslothai/unsloth/pull/10710) Studio: JSON and Markdown validator blocks
- [#10644](https://github.com/unslothai/unsloth/pull/10644) fix(studio): keep distinct symlink aliases for per-model settings
- [#10736](https://github.com/unslothai/unsloth/pull/10736) Studio: top-level Models block group in picker
- [#12501](https://github.com/unslothai/unsloth/pull/12501) Wait for vite to serve before the titlebar, find, shortcuts and settings smokes navigate
- [#12475](https://github.com/unslothai/unsloth/pull/12475) fix(studio): prevent IME confirmation from submitting chat renames
- [#12500](https://github.com/unslothai/unsloth/pull/12500) Studio: move Butterfly Pea and Earl Grey up the More themes list, and rename Cherry Cola to Cherry
- [#12498](https://github.com/unslothai/unsloth/pull/12498) Studio: retry Lemonade on a new port when its free port is taken before it binds
- [#12494](https://github.com/unslothai/unsloth/pull/12494) Studio: keep diffusion LoRA loading working on torchao 0.18 with peft 0.18

#### 🐛 New Issues
- [#12518](https://github.com/unslothai/unsloth/issues/12518) [Bug] Constantly Getting "Generation stopped making progress" `feature request` `bug` 💬2
- [#12589](https://github.com/unslothai/unsloth/issues/12589) [Feature] Add Unsloth Power Live Monitor Verbose Mode and add Power Monitor `feature request`
- [#12534](https://github.com/unslothai/unsloth/issues/12534) [Feature] Add Code tool for the vision capable LLM to automatically import an image. `feature request`
- [#12571](https://github.com/unslothai/unsloth/issues/12571) [Studio] /v1/models: 'max_context_length' name is misleading — it's a VRAM-fit estimate, not the actual context limit
- [#12554](https://github.com/unslothai/unsloth/issues/12554) [Bug] Problem saving and loading a text-only variant of a VLM (Gemma 3) `feature request` `bug`
- [#12553](https://github.com/unslothai/unsloth/issues/12553) [Feature] Request: Dynamic GGUF quants for Index-Translate family (2B / 9B / 35B-A3B translation models) `feature request`
- [#12552](https://github.com/unslothai/unsloth/issues/12552) [Bug] The long-context chat has started to lag. `feature request` `bug`
- [#12547](https://github.com/unslothai/unsloth/issues/12547) [Bug] Hash hash asterisk underscore: Unsloth Desktop when using System TTS accidentally reads out the formatting `feature request` `bug`
- [#12537](https://github.com/unslothai/unsloth/issues/12537) [Feature] Add mcp support for the Deep Research feature `feature request`
- [#12533](https://github.com/unslothai/unsloth/issues/12533) [Bug] Unsloth Studio minor bug with the upper right hand corner Context Length meter. `feature request` `bug`
- [#12520](https://github.com/unslothai/unsloth/issues/12520) [Feature] Allow Customisation of Sandbox Virtual Memory Limit `feature request`

#### 🔒 Closed Issues
- [#11135](https://github.com/unslothai/unsloth/issues/11135) Unsloth Desktop packaged for Nixpkgs
- [#12435](https://github.com/unslothai/unsloth/issues/12435) [Bug] Projects / Code / Tool Calls randomly failing from recent updates.
- [#9519](https://github.com/unslothai/unsloth/issues/9519) [Bug] Duplicated remote access and lan access on API + Remote & LAN under Settings (bloat)
- [#9867](https://github.com/unslothai/unsloth/issues/9867) [Bug] Qwen3.8-27B bnb-4bit training crashes with a shape error (R9700 on Windows, also NVIDIA)
- [#12518](https://github.com/unslothai/unsloth/issues/12518) [Bug] Constantly Getting "Generation stopped making progress"
- [#5355](https://github.com/unslothai/unsloth/issues/5355) [Bug] gemma-4-E4B won't LoRA finetune (training loss is dropping but output aren't chaning)
- [#12361](https://github.com/unslothai/unsloth/issues/12361) No idea how to remove date from the prompt.
- [#12469](https://github.com/unslothai/unsloth/issues/12469) Your CI/CD Is Slow. Try This :-)
- [#12364](https://github.com/unslothai/unsloth/issues/12364) [Studio] OpenAI-compatible API adds a fixed ~1.2 s per request — 3-5x slower than the bundled llama-server on short-text workloads
- [#10276](https://github.com/unslothai/unsloth/issues/10276) Qwen3.8-27B-unsloth-bnb-4bit: GatedDeltaNet projections load with no quant_state
- [#10017](https://github.com/unslothai/unsloth/issues/10017) Bug: Windows - pre-quantized bnb-4bit checkpoints load with quant_state=None, forward fails with shape error
- [#9709](https://github.com/unslothai/unsloth/issues/9709) [Studio 0.1.803-beta] web_search can be called with empty arguments and returns "No query provided"
- [#8904](https://github.com/unslothai/unsloth/issues/8904) [Feature] Require consent before FP8/FP4 export installs llm-compressor
- [#12297](https://github.com/unslothai/unsloth/issues/12297) [Bug] Importing chats that have been exported as .md and general housekeeping of settings tab
- [#10793](https://github.com/unslothai/unsloth/issues/10793) Improve default Studio and llama-server logs for troubleshooting
- [#12467](https://github.com/unslothai/unsloth/issues/12467) [Bug] Companion-device mask widening (#11823) is skipped when the model has saved gpu_ids, so --mmproj-device CUDA1 is still rejected
- [#10010](https://github.com/unslothai/unsloth/issues/10010) [Bug] Qwen3.8-27B (Qwen3.5 hybrid linear-attention) QLoRA fails with "mat1 and mat2 shapes cannot be multiplied" in linear_attn.in_proj_z — missing quant_state in unsloth/qwen3.8-27b-unsloth-bnb-4bit
- [#9258](https://github.com/unslothai/unsloth/issues/9258) [Feature] Optional systemd service for auto-start and crash recovery on Linux
- [#11376](https://github.com/unslothai/unsloth/issues/11376) Studio: a long single line with backslashes costs seconds per render in Marked's inline tokenizer
- [#12137](https://github.com/unslothai/unsloth/issues/12137) [Bug] macOS Pinyin input method prevents Enter key from sending chat messages
- [#11496](https://github.com/unslothai/unsloth/issues/11496) [Unsloth Bug] Open chat does not reconcile externally updated saved assistant messages
- [#10605](https://github.com/unslothai/unsloth/issues/10605) [Bug] When local model is a link on linux settings per model are not saved
- [#12474](https://github.com/unslothai/unsloth/issues/12474) [Bug] Japanese IME confirmation Enter prematurely saves chat title in sidebar rename dialog

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,120 · **Open issues:** 401 · **Last push:** 8h ago

On October 3, 2026, there were no new releases for AIBrix; however, several important features and bug fixes were merged. Notably, PR #2877 ensures that prefix cache blocks remain dirty during a delta push, while PR #2889 makes the gateway plugin's pprof address configurable and prevents fatal errors if the bind fails. Additionally, PR #2878 addresses an issue where NewJSONPatch was prepending empty operations, and PR #2886 expands the ModelClaim sample validation guide, enhancing documentation. Among the new issues reported, #2894 highlights a bug with the TOS V1 downloader failing when part_chunksize is not configured, signaling a user-impacting concern that may require prompt attention.

#### ✅ Merged PRs
- [#2877](https://github.com/vllm-project/aibrix/pull/2877) [Bug] Keep prefix cache blocks dirty when they change during a delta push
- [#2887](https://github.com/vllm-project/aibrix/pull/2887) [CI] Run ZMQ-tagged tests in CI
- [#2889](https://github.com/vllm-project/aibrix/pull/2889) [Bug] Make the gateway plugin's pprof address configurable and its bind failure non-fatal
- [#2878](https://github.com/vllm-project/aibrix/pull/2878) [Bug] Stop NewJSONPatch from prepending empty operations
- [#2886](https://github.com/vllm-project/aibrix/pull/2886) [Docs] Expand ModelClaim sample validation guide

#### 🐛 New Issues
- [#2894](https://github.com/vllm-project/aibrix/issues/2894) [Bug] TOS V1 downloader fails when part_chunksize is not set `kind/bug` `area/runtime` 💬1
- [#2892](https://github.com/vllm-project/aibrix/issues/2892) [Bug] RayClusterReplicaSet ignores matchExpressions and counts RayClusters it doesn't own `kind/bug` `area/runtime` `area/orchestration` 💬1
- [#2888](https://github.com/vllm-project/aibrix/issues/2888) [Bug] Gateway plugin exits when its fixed pprof port 6060 is taken, so only one can run per host `kind/bug` `area/gateway` 💬1

#### 🔒 Closed Issues
- [#2888](https://github.com/vllm-project/aibrix/issues/2888) [Bug] Gateway plugin exits when its fixed pprof port 6060 is taken, so only one can run per host

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,000 · **Open issues:** 589 · **Last push:** <1h ago

On October 3, 2026, there were no new releases for Semantic Router, but several significant changes were merged to improve functionality and address ongoing issues. Noteworthy updates included a fix for the installer test virtual environment creation on macOS (#4449), documentation enhancements related to CLI completion and benchmark exit codes (#4335), and the resolution of bugs concerning jailbreak detection and ML pipeline availability (#4272, #4321). In addition, new issues surfaced, with a prominent bug reported regarding the installer test failing to create a virtual environment with the UV-managed Python on macOS (#4448), indicating ongoing challenges with the installation process.

#### ✅ Merged PRs
- [#4449](https://github.com/vllm-project/semantic-router/pull/4449) [Bug] Fix installer test venv creation on macOS
- [#4335](https://github.com/vllm-project/semantic-router/pull/4335) [Docs] Document CLI completion, recipe lifecycle, and benchmark exit codes
- [#4272](https://github.com/vllm-project/semantic-router/pull/4272) [Bug] Accept the no-match path in jailbreak-detection and select multi-endpoint
- [#4431](https://github.com/vllm-project/semantic-router/pull/4431) [CI/Build]: Reconcile all accepted issues in one pas
- [#4321](https://github.com/vllm-project/semantic-router/pull/4321) [Bug] Publish ML pipeline availability to the dashboard client
- [#3934](https://github.com/vllm-project/semantic-router/pull/3934) [Research] Add LFM2.5-Encoder and SCX Router exploration scripts (#3198)

#### 🐛 New Issues
- [#4448](https://github.com/vllm-project/semantic-router/issues/4448) [Bug] Installer test fails to create a venv with uv-managed Python on macOS `bug` `accepted` `wg/developer-experience-ecosystem` 💬3
- [#4456](https://github.com/vllm-project/semantic-router/issues/4456) [Feature] Speed up signal models inference on Arm CPU `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬3
- [#4468](https://github.com/vllm-project/semantic-router/issues/4468) [Bug] MCP streaming endpoint reports tool failures as successful null results `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4454](https://github.com/vllm-project/semantic-router/issues/4454) [Bug] OpenClaw disabled: collection endpoints answer 200 [] and the UI invites an operation that 405s `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4453](https://github.com/vllm-project/semantic-router/issues/4453) [Bug] Config page drops the backend failure reason when reads fail `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4470](https://github.com/vllm-project/semantic-router/issues/4470) [Bug] zh-Hans docs intro link 404s into /docs/intro/overview/use-cases after Netlify case-fold redirect `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4466](https://github.com/vllm-project/semantic-router/issues/4466) [Feature] Fail the linked-issue check when the linked issue is assigned to another author `enhancement` `needs-acceptance` `owner/maintainers` 💬1
- [#4451](https://github.com/vllm-project/semantic-router/issues/4451) [Bug] Fix dead installation link in Vela AMD recipe README `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4472](https://github.com/vllm-project/semantic-router/issues/4472) [Feature] Follow-ups from the #4086 Decision runtime review `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#4284](https://github.com/vllm-project/semantic-router/issues/4284) [Docs] New v0.4.0 CLI commands lack prose documentation
- [#3615](https://github.com/vllm-project/semantic-router/issues/3615) [Feature] Batch-reconcile accepted issue labels from /accept comments
- [#4327](https://github.com/vllm-project/semantic-router/issues/4327) [Bug] Reject invalid RAG and memory config bounds at load time
- [#4448](https://github.com/vllm-project/semantic-router/issues/4448) [Bug] Installer test fails to create a venv with uv-managed Python on macOS
- [#4377](https://github.com/vllm-project/semantic-router/issues/4377) [Bug] test_service_boundary.py still expects the ml-service sidecar that #4125 removed, and CI never runs it
- [#4314](https://github.com/vllm-project/semantic-router/issues/4314) [Bug] ML Setup navigation visible with the pipeline disabled leads to a bare 403
- [#4325](https://github.com/vllm-project/semantic-router/issues/4325) [Bug] Define paginated, ordered Router Memory List semantics across maintained backends
- [#4329](https://github.com/vllm-project/semantic-router/issues/4329) [Bug] Make parallel hybrid RAG return promptly and define deterministic result ranking
- [#4326](https://github.com/vllm-project/semantic-router/issues/4326) [Bug] Remove per-user cardinality from Router Memory metrics and align backend telemetry
- [#4328](https://github.com/vllm-project/semantic-router/issues/4328) [Bug] Reject MCP RAG configuration until the runtime has an MCP tool invoker
- [#4271](https://github.com/vllm-project/semantic-router/issues/4271) [Bug] multi-endpoint jailbreak-detection treats a no-match benign request as a contract error

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*