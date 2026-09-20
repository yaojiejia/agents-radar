# 📡 AI Ecosystem Digest — 2026-09-20

> Generated 2026-09-20 00:44 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 146,705 | 14 | 22 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 125,307 | 16 | 1 | 50 | 4 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,089 | 1 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,185 | 7 | 35 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 208,643 | 24 | 4 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,991 | 19 | 14 | 4 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,101 | 313 | 119 | 186 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 247,160 | 33 | 7 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,189 | 25 | 27 | 22 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,177 | 7 | 15 | 37 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 128,859 | 16 | 20 | 12 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,278 | 11 | 9 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,165 | 12 | 20 | 101 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,446 | 6 | 4 | 19 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,098 | 1 | 1 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,870 | 6 | 7 | 11 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.278](https://github.com/anthropics/claude-code/releases/tag/v2.1.278).
- **OpenAI Codex** rolled out multiple releases including [rust-v0.156.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.9) and merged several enhancements for transcript browsing and search.
- **OpenClaw** released version [v2026.9.5](https://github.com/openclaw/openclaw/releases/tag/v2026.9.5) and faced significant user criticism with new issues, including [Codex retained-state migration problems](https://github.com/openclaw/openclaw/issues/152744) attracting 19 comments.
- New issue [#46641](https://github.com/openai/codex/issues/46641) in **OpenAI Codex**, regarding repeated white-screens in the Codex renderer on macOS, received 18 comments, indicating high user concern.
- **vLLM** merged a critical [bugfix](https://github.com/vllm-project/vllm/pull/49435) addressing SM100 cache scales, which should improve overall performance.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 146,705 · **Open issues:** 12,308 · **Last push:** 5h ago

On September 20, 2026, Claude Code released version v2.1.278, which introduced a significant change in the auto mode for Claude API and Enterprise users, defaulting to a server-side classifier to eliminate classifier overhead charges. Although there were no merged pull requests reported in the last 24 hours, several new issues were created, including a notable bug report (#95609) regarding the Remote Control feature failing to connect to existing local sessions. Other reported problems included intermittent missing descriptions in the skill catalog (#95582) and duplicate spawning of subagents (#95612).

#### 🚀 New Releases
- [v2.1.278](https://github.com/anthropics/claude-code/releases/tag/v2.1.278) v2.1.278

#### 🐛 New Issues
- [#95598](https://github.com/anthropics/claude-code/issues/95598) Expose current auth method (subscription vs API key) in status line payload `enhancement` `area:auth` `area:statusline` 💬1
- [#95582](https://github.com/anthropics/claude-code/issues/95582) Skill catalog descriptions intermittently missing from system prompt (frontmatter on disk is correct) `bug` `platform:windows` `area:skills` 💬1
- [#95613](https://github.com/anthropics/claude-code/issues/95613) [Bug] Failed to install gitrepos skill dependency `bug` `platform:windows` `needs-info` `area:skills`
- [#95612](https://github.com/anthropics/claude-code/issues/95612) [Bug] Subagent duplicate spawning due to misinterpreted watch-armed status reports `bug` `platform:macos` `area:agents`
- [#95611](https://github.com/anthropics/claude-code/issues/95611) Worktree isolation refuses fifteen shell words in any argv position, including in read-only commands containing no git `bug` `has repro` `area:bash` `area:agents`
- [#95610](https://github.com/anthropics/claude-code/issues/95610) ListAgents gives two live sessions the same bracketed ref, in the line that tells each how it is addressed `bug` `has repro` `area:agents`
- [#95609](https://github.com/anthropics/claude-code/issues/95609) [BUG] Remote Control fails to connect for existing local session (stuck at "connecting" / times out) `bug` `duplicate` `platform:windows` `area:networking`
- [#95608](https://github.com/anthropics/claude-code/issues/95608) bypassPermissions + wildcard allow rule still ignored on the first MCP tool call after a desktop app restart (follow-up to #87358) `bug` `has repro` `platform:macos` `area:mcp`
- [#95607](https://github.com/anthropics/claude-code/issues/95607) [MODEL] Valósàg kodók nélkül🦋💕 `invalid`
- [#95606](https://github.com/anthropics/claude-code/issues/95606) Szeretet Védelem `invalid`
- [#95605](https://github.com/anthropics/claude-code/issues/95605) [FEATURE] /continue OR /complete to continue the chat where it stopped. `duplicate` `area:cli`
- [#95602](https://github.com/anthropics/claude-code/issues/95602) [Bug] Sonnet 5 [bio] classifier false positive on Claude.ai web chat — DHCP/DNS/AD infrastructure content (NOT Claude Code CLI) `invalid`
- [#95604](https://github.com/anthropics/claude-code/issues/95604) [Bug] Unclear Bug Report: "A rude tone" — insufficient detail to reproduce `bug` `platform:macos` `area:model` `needs-repro`
- [#95603](https://github.com/anthropics/claude-code/issues/95603) [Bug] False positive security flag on video frame rotation code `bug` `platform:macos` `area:model`

#### 🔒 Closed Issues
- [#75912](https://github.com/anthropics/claude-code/issues/75912) [FEATURE] VS Code extension: no session-only model selection - every picker click persists to settings.json
- [#76379](https://github.com/anthropics/claude-code/issues/76379) [Feature Request] Add model selection prompt for Fable subagent creation
- [#75955](https://github.com/anthropics/claude-code/issues/75955) No way to connect/authorize a connector (e.g. Readwise) directly from within a Claude Code session
- [#75981](https://github.com/anthropics/claude-code/issues/75981) Hooks cannot detect the active model or /model runtime switches
- [#75992](https://github.com/anthropics/claude-code/issues/75992) [FEATURE] Mobile app: preview/render artifacts (HTML, Markdown, React) generated in Claude Code sessions
- [#75875](https://github.com/anthropics/claude-code/issues/75875) [DOCS] `--json-schema` flag docs omit v2.1.205 fix for invalid-schema silent fallback and `format` keyword rejection
- [#75876](https://github.com/anthropics/claude-code/issues/75876) [DOCS] [Worktrees] cleanup docs omit the v2.1.205 Windows NTFS junction / directory symlink safety fix
- [#75877](https://github.com/anthropics/claude-code/issues/75877) [DOCS] [Agent view] `claude agents` rows keep showing "failed" or "completed" after a background agent is resumed with `SendMessage`; v2.1.205 fix is not reflected in `agent-view.md`, `sub-agents.md`, or `tools-reference.md`
- [#75878](https://github.com/anthropics/claude-code/issues/75878) [DOCS] Agent view `Needs input` row can flip back to `Working` after a turn that produced no readable text
- [#75879](https://github.com/anthropics/claude-code/issues/75879) [DOCS] `claude attach` behavior during a background agent's auto-update restart is undocumented; v2.1.205 wait-instead-of-error fix is not reflected in the Attach or supervisor sections
- [#75880](https://github.com/anthropics/claude-code/issues/75880) [DOCS] `claude mcp add-from-claude-desktop` docs do not document the v2.1.205 invalid-name reporting and partial-import behavior
- [#87392](https://github.com/anthropics/claude-code/issues/87392) `/resume` picker: sessions older than the 50 most recent are unreachable in the UI; recovering them requires grepping transcript files for the session UUID
- [#75881](https://github.com/anthropics/claude-code/issues/75881) [DOCS] Plugin LSP server init failure no longer blocks another plugin's valid LSP server for the same file extension
- [#75882](https://github.com/anthropics/claude-code/issues/75882) [DOCS] `[Bash tool] Windows crash when launch directory is deleted, locked, or unmounted mid-command is not documented`
- [#75883](https://github.com/anthropics/claude-code/issues/75883) [DOCS] `/run-skill-generator` per-project verify skills are silently rewritten on every session; v2.1.205 fix to only rewrite on bundled-command changes is undocumented
- [#75884](https://github.com/anthropics/claude-code/issues/75884) [DOCS] Remote Control page does not describe the web/mobile background-task panel status synchronization fixed in v2.1.205
- [#75891](https://github.com/anthropics/claude-code/issues/75891) [DOCS] [Cowork] "Not logged in · Please run /login" error reference omits the v2.1.203+ Cowork VM-mode local-agent regression that v2.1.205 fixed
- [#75962](https://github.com/anthropics/claude-code/issues/75962) Assistant didn't check for a local CLI before claiming a service integration was impossible
- [#75970](https://github.com/anthropics/claude-code/issues/75970) [BUG] Claude Cowork/Desktop folder revocation problem ("Hotel California")
- [#75993](https://github.com/anthropics/claude-code/issues/75993) [FEATURE] Opt-in local codebase index to reduce search time and token cost in large repositories
- [#76000](https://github.com/anthropics/claude-code/issues/76000) [FEATURE] /usage: make the "What's contributing to your limits usage" section collapsible so limit bars stay visible
- [#76001](https://github.com/anthropics/claude-code/issues/76001) [FEATURE] Hierarchical skill discovery to reduce skill-list metadata overhead

### OpenAI Codex (`openai/codex`)

**Stars:** 125,307 · **Open issues:** 17,904 · **Last push:** <1h ago

On September 20, 2026, OpenAI Codex released four new alpha versions: rust-v0.156.0-alpha.9, -alpha.8, -alpha.7, and -alpha.6, introducing incremental updates. Significant advancements were seen in the merged pull requests, including the addition of compact transcript browsing and prompt navigation via PR #46739, as well as enhancements to the transcript viewer with features for selection and copying (#46732) and improved caching of transcript layouts (#46720). One notable issue emerged regarding the ChatGPT macOS app, where users reported a persistent white-screen problem and high CPU usage linked to the Codex renderer (#46641), indicating a significant user experience challenge. Overall, the day highlighted key improvements in user interface functionality while also revealing critical issues needing immediate attention.

#### 🚀 New Releases
- [rust-v0.156.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.9) 0.156.0-alpha.9
- [rust-v0.156.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.8) 0.156.0-alpha.8
- [rust-v0.156.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.7) 0.156.0-alpha.7
- [rust-v0.156.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.6) 0.156.0-alpha.6

#### ✅ Merged PRs
- [#46739](https://github.com/openai/codex/pull/46739) Add compact transcript browsing and prompt navigation to the TUI
- [#46734](https://github.com/openai/codex/pull/46734) Add transcript search and per-activity detail controls
- [#46733](https://github.com/openai/codex/pull/46733) Integrate the interactive transcript into the alternate-screen TUI
- [#46732](https://github.com/openai/codex/pull/46732) Add selection and copying to the transcript viewer
- [#46731](https://github.com/openai/codex/pull/46731) Render dynamic tool activity and preserve TUI history ordering
- [#46722](https://github.com/openai/codex/pull/46722) Cancel pending transcript Home jumps on subsequent navigation
- [#46721](https://github.com/openai/codex/pull/46721) Anchor transcript scrolling to entries and bound viewport rendering
- [#46720](https://github.com/openai/codex/pull/46720) Cache transcript layouts across measurement and rendering
- [#46719](https://github.com/openai/codex/pull/46719) Extract the TUI transcript overlay into its own module
- [#46715](https://github.com/openai/codex/pull/46715) Split shell snapshot credential tests into focused cases
- [#46714](https://github.com/openai/codex/pull/46714) Skip polling delays in the external queue lifecycle test
- [#46712](https://github.com/openai/codex/pull/46712) Recover executed tool call metadata under recorder capacity pressure
- [#46711](https://github.com/openai/codex/pull/46711) Align persisted TUI activity groups and reasoning with live output
- [#46710](https://github.com/openai/codex/pull/46710) Restore rich tool details in persisted TUI transcripts
- [#46709](https://github.com/openai/codex/pull/46709) Add compact activity rendering and preserve transcript source text
- [#46708](https://github.com/openai/codex/pull/46708) Preserve logical source text and styles across TUI wrapping
- [#46697](https://github.com/openai/codex/pull/46697) Unify TUI picker styling and improve compact session layouts
- [#46695](https://github.com/openai/codex/pull/46695) Unify TUI prompts with shared picker styling and layouts
- [#46694](https://github.com/openai/codex/pull/46694) Unify TUI completion popup styling and preserve result identity
- [#46692](https://github.com/openai/codex/pull/46692) Unify TUI picker styling and improve compact layouts
- [#46691](https://github.com/openai/codex/pull/46691) Standardize TUI picker presentation and fix wrapping boundaries
- [#46680](https://github.com/openai/codex/pull/46680) Improve TUI contrast, keyboard hints, and picker layouts
- [#46673](https://github.com/openai/codex/pull/46673) Extend server version notices to prerelease and local clients
- [#46661](https://github.com/openai/codex/pull/46661) Avoid fork when spawning macOS filesystem helpers
- [#46660](https://github.com/openai/codex/pull/46660) Make local child process launch settings explicit
- [#46659](https://github.com/openai/codex/pull/46659) Move local child-process spawning into `codex-utils-pty`
- [#46583](https://github.com/openai/codex/pull/46583) Deny XPC service lookups in macOS Seatbelt profiles
- [#46580](https://github.com/openai/codex/pull/46580) Keep Guardian reviews on the applied instruction snapshot
- [#46579](https://github.com/openai/codex/pull/46579) Limit the agent command center to 10 recent sessions on startup
- [#46578](https://github.com/openai/codex/pull/46578) Fix standalone network proxy policy initialization
- [#46577](https://github.com/openai/codex/pull/46577) Allow thread instruction providers to share updates with subagents
- [#46575](https://github.com/openai/codex/pull/46575) Preserve Windows package identity for sandboxed descendants
- [#46574](https://github.com/openai/codex/pull/46574) Notify users when asynchronous questions arrive in the TUI
- [#46573](https://github.com/openai/codex/pull/46573) Add a standalone network proxy binary with JSON configuration
- [#46572](https://github.com/openai/codex/pull/46572) Add turn-start cloud plugin discovery to the MCP extension
- [#46571](https://github.com/openai/codex/pull/46571) Preserve macOS Seatbelt exclusions in scratch directories
- [#46570](https://github.com/openai/codex/pull/46570) Tag remote model fetch duration by authentication mode
- [#46569](https://github.com/openai/codex/pull/46569) Set explicit turn triggers for exec and TUI requests
- [#46568](https://github.com/openai/codex/pull/46568) Use captured environment state for permissions and daemon recovery
- [#46567](https://github.com/openai/codex/pull/46567) Separate plugin catalog listing from package resolution
- [#46566](https://github.com/openai/codex/pull/46566) Allow recovery commands when the current thread is unavailable
- [#46564](https://github.com/openai/codex/pull/46564) Rename plugin MCP and app extension APIs
- [#46565](https://github.com/openai/codex/pull/46565) Preserve reasoning order in TUI activity groups
- [#46562](https://github.com/openai/codex/pull/46562) Add system proxy fallback for login and startup requests
- [#46561](https://github.com/openai/codex/pull/46561) Support explicit provider model catalog URLs
- [#46560](https://github.com/openai/codex/pull/46560) Fix stale environment config in the network approval test
- [#46559](https://github.com/openai/codex/pull/46559) Encapsulate rollout budget accounting in `LocalAgentControl`
- [#46558](https://github.com/openai/codex/pull/46558) Add shared plugin catalog discovery APIs
- [#46557](https://github.com/openai/codex/pull/46557) Fix active-turn environment selection lookup
- [#46556](https://github.com/openai/codex/pull/46556) Keep step settings and approval environments consistent

#### 🐛 New Issues
- [#46641](https://github.com/openai/codex/issues/46641) ChatGPT macOS 26.915.31945: Codex renderer repeatedly white-screens; Renderer reaches ~120% CPU `bug` `app` `performance` 💬18
- [#46638](https://github.com/openai/codex/issues/46638) [macOS] Downloading a generated image from a remote task throws a getOwnerBrowserWindow error `bug` `app` `imagen` 💬4
- [#46730](https://github.com/openai/codex/issues/46730) Windows/Android Remote: active thread omitted until pinned; conversation link parsed as file ID `bug` `windows-os` `app` `session` 💬1
- [#46737](https://github.com/openai/codex/issues/46737) ChatGPT Pro complaint: repeated image-generation blocks, attachment errors, and potential usage-limit deductions `bug` `rate-limits` `app` `imagen` 💬1
- [#46703](https://github.com/openai/codex/issues/46703) Codex desktop's concurrent `wsl.exe` git probes crash WSL's Interop server, and every new WSL session hangs until the distro restarts `bug` `windows-os` `app` 💬1
- [#46736](https://github.com/openai/codex/issues/46736) Windows Codex 0.155.0-alpha.9.2: Default thread/list first page does not return within 15 seconds; reproducible after reopening the App `bug` `windows-os` `CLI` `app-server` 💬1
- [#46735](https://github.com/openai/codex/issues/46735) Updated to v0.155.1 and now there's this annoying and distracting animation in the prompt area with no clear way to disable it. `enhancement` `TUI` `CLI` 💬1
- [#46727](https://github.com/openai/codex/issues/46727) Statsig request-header policy initialization failure `bug` `app` `browser` 💬1
- [#46725](https://github.com/openai/codex/issues/46725) UX for Chat in the ChatGPT Mac App `bug` `app` 💬1
- [#46724](https://github.com/openai/codex/issues/46724) Codex Desktop repeatedly shows “Selected model is at capacity” only on my Pro account `bug` `rate-limits` `app` 💬1
- [#46738](https://github.com/openai/codex/issues/46738) Windows CLI upgrade fails when Git for Windows tar precedes System32 in PATH `bug` `windows-os` `CLI`
- [#46728](https://github.com/openai/codex/issues/46728) image generator `bug` `model-behavior` `app` `imagen`
- [#46729](https://github.com/openai/codex/issues/46729) Codex desktop IAB blocks local file preview: clarification needed for supported localhost preview `documentation` `app` `browser`
- [#46726](https://github.com/openai/codex/issues/46726) [Windows] Codex sandbox Schannel fails with SEC_E_NO_CREDENTIALS; elevated sandbox launches without loaded user profile `bug` `windows-os` `sandbox` `app`
- [#46723](https://github.com/openai/codex/issues/46723) [iOS Remote] New Local task reuses a viewed conversation's worktree directory and fails to switch branch `bug` `iOS` `session` `remote`
- [#46718](https://github.com/openai/codex/issues/46718) extension chrome `bug` `app` `browser`

#### 🔒 Closed Issues
- [#42737](https://github.com/openai/codex/issues/42737) Desktop conversation mention is unresolved when priorConversation is null and read_thread is unavailable

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,089 · **Open issues:** 843 · **Last push:** 23h ago

On September 20, 2026, the Gemini CLI team released version v0.62.0-nightly.20260919.gcfbcaa8df, which includes an important fix that synchronizes the ConPTY process exit lifecycle and hardens PTY output finalization. The release also suppresses uncaught AbortError logs that could occur during requests. There were no merged pull requests in the last 24 hours; however, a new issue was opened regarding feedback on GeminiCLI.com, labeled as issue #29418. Overall, the day was primarily focused on the night release and its enhancements, with ongoing attention to user feedback.

#### 🚀 New Releases
- [v0.62.0-nightly.20260919.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260919.gcfbcaa8df) Release v0.62.0-nightly.20260919.gcfbcaa8df

#### 🐛 New Issues
- [#29418](https://github.com/google-gemini/gemini-cli/issues/29418) GeminiCLI.com Feedback: [ISSUE] `status/need-triage` `area/unknown`

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,185 · **Open issues:** 2,349 · **Last push:** 1d ago

On September 20, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. However, several new issues were reported, including a critical problem in issue #4915 where Copilot CLI version 1.0.86 consistently crashes Ghostty 1.3.1 on macOS, although Terminal.app remains unaffected. Additionally, issue #4913 highlights a viewport shift during text selection on Linux, complicating usage. Other notable issues include failures related to the Gemini continuation feature in #4914 and background sub-agent stream failures addressed in #4911, indicating ongoing challenges with the tool's stability and integration. Overall, today's developments reflect a need for troubleshooting rather than progress through new features or enhancements.

#### 🐛 New Issues
- [#4913](https://github.com/github/copilot-cli/issues/4913) Text selection shifts the viewport on Linux; footer reads obsolete copy_on_select `triage` 💬1
- [#4915](https://github.com/github/copilot-cli/issues/4915) Copilot CLI 1.0.86 reliably crashes Ghostty 1.3.1 on macOS; Terminal.app unaffected `triage`
- [#4914](https://github.com/github/copilot-cli/issues/4914) Gemini continuation and /compact fail with "Tool name is required" on mixed-model history `triage`
- [#4912](https://github.com/github/copilot-cli/issues/4912) GPT-6 Astra: HTTP 422 cyber-risk rejection during local heap-OOM debugging `triage`
- [#4911](https://github.com/github/copilot-cli/issues/4911) Background sub-agent stream failures end the turn without a failure status `triage`
- [#4910](https://github.com/github/copilot-cli/issues/4910) Non-interactive MCP tool call hangs after progress notification until idle timeout `triage`
- [#4909](https://github.com/github/copilot-cli/issues/4909) /ide finds no workspaces under the CLI sandbox: kill(pid,0) EPERM misread as a dead process `triage`

#### 🔒 Closed Issues
- [#107](https://github.com/github/copilot-cli/issues/107) Tool calls cause Segmentation Fault on Alpine Linux
- [#4069](https://github.com/github/copilot-cli/issues/4069) TUI wedges mid-turn (screen clears, input dead, Ctrl+C/Ctrl+\ ignored) — write EIO on stdout followed by EPIPE on Rust JSON-RPC transport; WSL2 + Windows Terminal
- [#1381](https://github.com/github/copilot-cli/issues/1381) "Rewind is not available because you're not in a git repository."
- [#1801](https://github.com/github/copilot-cli/issues/1801) Auto model selection
- [#3439](https://github.com/github/copilot-cli/issues/3439) [Bug] 1.0.49 regression: TUI rendering lag inside tmux on mintty/Cygwin
- [#4765](https://github.com/github/copilot-cli/issues/4765) copilot cli fails to read config from working directory which isn't a repo root
- [#3481](https://github.com/github/copilot-cli/issues/3481) contextTier=long_context is not applied on startup / no CLI flag for long context tier
- [#3355](https://github.com/github/copilot-cli/issues/3355) Allow configurable context window for Claude Opus 4.6 (200K cap vs 1M model capability)
- [#1423](https://github.com/github/copilot-cli/issues/1423) Path-specific custom instructions bloat context window on initial copilot session.
- [#2543](https://github.com/github/copilot-cli/issues/2543) Bug: Concurrent sub-agent events corrupt session state — permanent "tool_use ids were found without tool_result blocks" error
- [#2655](https://github.com/github/copilot-cli/issues/2655) `cwd` and `branch` no longer persist to local session-store.db since ~1.0.13
- [#2571](https://github.com/github/copilot-cli/issues/2571) Running under WSL, when copying text, BOM is always prepended to any copied text segment
- [#2151](https://github.com/github/copilot-cli/issues/2151) Hint texts are NOT gray when using WSL terminal
- [#1675](https://github.com/github/copilot-cli/issues/1675) Checkpoint restore (git clean -fd) permanently deletes all untracked files
- [#3117](https://github.com/github/copilot-cli/issues/3117) During the evening, my TUI instances regularly get transient API errors
- [#3733](https://github.com/github/copilot-cli/issues/3733) Windows: Ctrl+G cannot launch code-insiders --wait
- [#2081](https://github.com/github/copilot-cli/issues/2081) Custom agents missing from 'Environment loaded' startup message due to race condition
- [#807](https://github.com/github/copilot-cli/issues/807) add session id in the output of non-interactive mode
- [#4237](https://github.com/github/copilot-cli/issues/4237) Steering message in `preToolUse` "ask" denial is silently dropped
- [#3621](https://github.com/github/copilot-cli/issues/3621) Auto-compaction loops infinitely when instruction files are large
- [#3523](https://github.com/github/copilot-cli/issues/3523) Execution failed: CAPIError: 400 model "claude-opus-4.6" not supported for vision
- [#2641](https://github.com/github/copilot-cli/issues/2641) Request failed due to a transient API error. Retrying...
- [#2585](https://github.com/github/copilot-cli/issues/2585) preToolUse hook doesn't pass additionalContext to agent
- [#1955](https://github.com/github/copilot-cli/issues/1955) Allow for more customization/separation for mcp configuration
- [#1171](https://github.com/github/copilot-cli/issues/1171) Feature Request: Plan Mode Tool-Layer Enforcement
- [#3719](https://github.com/github/copilot-cli/issues/3719) Unable to add-dir with user home directory (Windows)
- [#3411](https://github.com/github/copilot-cli/issues/3411) Add way to suppress the bell character for end of interaction when a prompt is scheduled
- [#3005](https://github.com/github/copilot-cli/issues/3005) Ctrl+T thinking toggle provides no screen reader feedback for state changes
- [#2781](https://github.com/github/copilot-cli/issues/2781) Typo when selecting effort level in Claude Opus/Sonnet
- [#2599](https://github.com/github/copilot-cli/issues/2599) Plan mode is actually implementing and making code changes
- [#2417](https://github.com/github/copilot-cli/issues/2417) /restart exits the session instead of restarting
- [#2221](https://github.com/github/copilot-cli/issues/2221) SQL tool invoke filters "attach" in the text of the value being inserted
- [#4797](https://github.com/github/copilot-cli/issues/4797) Command legitimacy checker doesn't normalize `git -C path/to/dir --no-pager <subcommand>`
- [#4657](https://github.com/github/copilot-cli/issues/4657) /delegate fails with 403 during UncommittedChangesCheck pre-flight ("Request forbidden by administrative rules") despite valid auth and repo access
- [#1521](https://github.com/github/copilot-cli/issues/1521) Allow opening /diff while copilot is working

### OpenCode (`anomalyco/opencode`)

**Stars:** 208,643 · **Open issues:** 5,967 · **Last push:** <1h ago

On September 20, 2026, there were no new releases for OpenCode, but several significant updates were merged, including feature enhancements to codemode that now return live iterators from keys, values, and entries, and a crucial fix that pins the session to HTTP following multiple websocket stream losses. Additionally, a chore aimed at refreshing the v2 models.dev snapshot on a schedule was also integrated. Among the newly reported issues, #49936 stands out, detailing a problem with the OpenCode Go implementation that returns a 402 error due to insufficient user quota from OrcaRouter, despite the Go quota being healthy. This issue has sparked discussions, attracting four comments to date.

#### ✅ Merged PRs
- [#50061](https://github.com/anomalyco/opencode/pull/50061) feat(codemode): return live iterators from keys, values, and entries
- [#50030](https://github.com/anomalyco/opencode/pull/50030) chore(ci): refresh v2 models.dev snapshot on a schedule
- [#50031](https://github.com/anomalyco/opencode/pull/50031) fix(core): pin the session to http after repeated websocket stream losses

#### 🐛 New Issues
- [#49936](https://github.com/anomalyco/opencode/issues/49936) OpenCode Go: deepseek-v4.1-flash returns 402 insufficient_user_quota from OrcaRouter while Go quota is healthy 💬4
- [#50054](https://github.com/anomalyco/opencode/issues/50054) Didn't get subscription 💬2
- [#50055](https://github.com/anomalyco/opencode/issues/50055) [BUG]: switching to a primary agent that denies execute/subagent busts prompt cache (42k re-sent, 0 cached) 💬1
- [#50049](https://github.com/anomalyco/opencode/issues/50049) Desktop chat outputs corrupted internal parameter/tool text and gets stuck in Thinking 💬1
- [#50027](https://github.com/anomalyco/opencode/issues/50027) TUI crash: undefined is not an object (evaluating 's().tailHygiene.evaluable') 💬1
- [#50040](https://github.com/anomalyco/opencode/issues/50040) [Windows] Spawning npm/npx opens npm.ps1 in Notepad instead of executing (nvm .ps1 shims) 💬1
- [#50014](https://github.com/anomalyco/opencode/issues/50014) /export only exports the loaded portion of a long thread 💬1
- [#50043](https://github.com/anomalyco/opencode/issues/50043) vscode extension: "Timeout waiting for server to start" with CLI 2.0.10 (stdout marker mismatch + missing server auth) 💬1
- [#50036](https://github.com/anomalyco/opencode/issues/50036) MCP OAuth: issuer mismatch on a trailing slash rejects a valid authorization server (regression since 2.0.3) 💬1
- [#50066](https://github.com/anomalyco/opencode/issues/50066) Feature request: automatic session summarization + skill self-evolution (hermes-style loop)
- [#50065](https://github.com/anomalyco/opencode/issues/50065) Perf: session bootstrap/compaction becomes very slow after ~50 rounds of conversation
- [#50064](https://github.com/anomalyco/opencode/issues/50064) Feature request: automatic session summarization + skill self-evolution (hermes-style loop)
- [#50063](https://github.com/anomalyco/opencode/issues/50063) Perf: session bootstrap/compaction becomes very slow after ~50 rounds of conversation
- [#50062](https://github.com/anomalyco/opencode/issues/50062) `opencode run` (v2) exits 1 after a transient provider error that the runner retried and recovered from
- [#50060](https://github.com/anomalyco/opencode/issues/50060) [FEATURE]: List Mnemoverse hosted memory (remote MCP) on the ecosystem page
- [#50059](https://github.com/anomalyco/opencode/issues/50059) OpenCode App sends periodic background requests to grok-4.3 via custom OpenAI-compatible provider (no such model in config)
- [#50057](https://github.com/anomalyco/opencode/issues/50057) [FEATURE]: Add BytesBrains Cruise to the plugin ecosystem
- [#50056](https://github.com/anomalyco/opencode/issues/50056) [FEATURE]: Add a keybind to toggle visibility of tabs (v2)
- [#49997](https://github.com/anomalyco/opencode/issues/49997) cli: opencode always opens ~ instead of requested directory (/api/location 500 with null-byte shell path)
- [#50045](https://github.com/anomalyco/opencode/issues/50045) [FEATURE]: heartbeat tool in v2, structured use case of background shell
- [#50041](https://github.com/anomalyco/opencode/issues/50041) [FEATURE]: add wait built-in tool with countdown in footer
- [#50039](https://github.com/anomalyco/opencode/issues/50039) v2: no way to select a different compaction model
- [#50029](https://github.com/anomalyco/opencode/issues/50029) Client can not connect to an opencode in server mode.
- [#50032](https://github.com/anomalyco/opencode/issues/50032) server: sessions without an explicit model ignore the user's model

#### 🔒 Closed Issues
- [#47975](https://github.com/anomalyco/opencode/issues/47975) Provider request fails with invalid_request_error and OpenCode does not work
- [#48404](https://github.com/anomalyco/opencode/issues/48404) V2 Workers AI ignores saved account ID when resolving the catalog endpoint
- [#49997](https://github.com/anomalyco/opencode/issues/49997) cli: opencode always opens ~ instead of requested directory (/api/location 500 with null-byte shell path)
- [#50029](https://github.com/anomalyco/opencode/issues/50029) Client can not connect to an opencode in server mode.

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,991 · **Open issues:** 1,482 · **Last push:** <1h ago

On September 20, 2026, Qwen Code released version v0.24.1, which features a significant refactor in its goal management, ceasing the emission of the active_goal stream event. Additionally, v0.24.1-nightly was issued, focusing on improving CI processes and the handling of Bash comments in permission rules. Noteworthy merged pull requests included fixes to the web-shell that ensure inline message editors maintain their containment within narrow panes and the management of keyboard focus for Plan chips. Among new issues, the complaint regarding the Local Control feature's failure due to port issues on the LAN interface stood out, highlighting potential challenges in session management.

#### 🚀 New Releases
- [v0.24.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.1) Release v0.24.1
- [v0.24.1-nightly.20260919.c1c00cbaab](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.1-nightly.20260919.c1c00cbaab) Release v0.24.1-nightly.20260919.c1c00cbaab
- [sdk-typescript-v0.1.13](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.13) SDK TypeScript Release v0.1.13
- [desktop-v0.24.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.1) Qwen Code Desktop v0.24.1

#### ✅ Merged PRs
- [#12175](https://github.com/QwenLM/qwen-code/pull/12175) fix(web-shell): contain the inline message editor in narrow panes
- [#12248](https://github.com/QwenLM/qwen-code/pull/12248) fix(web-shell): hand keyboard focus on when the Plan chip goes
- [#12282](https://github.com/QwenLM/qwen-code/pull/12282) test(core): skip the bwrap execution suite on win32 (#12281)
- [#12128](https://github.com/QwenLM/qwen-code/pull/12128) fix(ci): retry transient E2E build artifact download failures once (#12125)

#### 🐛 New Issues
- [#12246](https://github.com/QwenLM/qwen-code/issues/12246) permissions: a `;` seen only by the pre-fix quote reading marks a backgrounded `cd` as foreground, so a protected write resolves to the wrong path `priority/P1` `type/bug` `category/security` `scope/shell` 💬4
- [#12277](https://github.com/QwenLM/qwen-code/issues/12277) serve: Local Control enable fails with EADDRINUSE when the daemon's ephemeral port is held on the LAN interface `priority/P2` `type/bug` `category/cli` `daemon` 💬4
- [#12272](https://github.com/QwenLM/qwen-code/issues/12272) The "agent" function description is absurdly long `priority/P3` `type/feature-request` `category/core` `scope/token-management` 💬4
- [#12274](https://github.com/QwenLM/qwen-code/issues/12274) E2E: transient Download build artifact failures redden whole E2E legs and auto-file per-commit failure issues `priority/P3` `status/waiting-for-feedback` `scope/ci-cd` `type/enhancement` 💬4
- [#12283](https://github.com/QwenLM/qwen-code/issues/12283) Add Azerbaijani ui language `priority/P3` `type/feature-request` `category/ui` `scope/settings` 💬3
- [#12275](https://github.com/QwenLM/qwen-code/issues/12275) review adapter: corepack pnpm version is unpinned for reviewed repos whose root manifest lacks packageManager, and the .modules.yaml marker can certify a tree whose dependency build scripts never ran `priority/P2` `status/blocked` `type/bug` `category/development` 💬3
- [#12270](https://github.com/QwenLM/qwen-code/issues/12270) Windows lane red since #12067: bwrap execution suite runs on win32 and throws 'Sandbox assets are missing' `priority/P2` `type/bug` `category/development` `scope/sandbox` 💬3
- [#12260](https://github.com/QwenLM/qwen-code/issues/12260) Follow-ups from #12135 / #12140: docker cleanup unit timeout and a design-doc clause `priority/P3` `status/waiting-for-feedback` `category/development` `scope/ci-cd` 💬3
- [#12261](https://github.com/QwenLM/qwen-code/issues/12261) test(ci): pin the three review-unchanged-diff guards a false skip depends on `priority/P3` `status/blocked` `category/development` `scope/testing` 💬3
- [#12262](https://github.com/QwenLM/qwen-code/issues/12262) Windows lane red since #11163: git-remotes scp-like removal witness spawns 'ls-remote -- h:p' `status/in-progress` `priority/P2` `type/bug` `category/development` 💬3
- [#12231](https://github.com/QwenLM/qwen-code/issues/12231) feat(web-shell): search within the current conversation and jump to matching content `priority/P2` `type/feature-request` `category/ui` `scope/session-management` 💬3
- [#12253](https://github.com/QwenLM/qwen-code/issues/12253) ci: give every test:ci leg a runner-side machine-readable unhandled-error record, so the infra-flake classifier stops reading rendered log text `priority/P2` `status/blocked` `category/development` `scope/testing` 💬3
- [#12249](https://github.com/QwenLM/qwen-code/issues/12249) feat(serve): list sessions across multiple workspaces in one catalog request `priority/P3` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#12240](https://github.com/QwenLM/qwen-code/issues/12240) Publish the Chrome extension to the Chrome Web Store with a release workflow `priority/P2` `type/feature-request` `category/integration` `scope/extensions` 💬3
- [#12237](https://github.com/QwenLM/qwen-code/issues/12237) Startup restore and delayed reload route standalone sessions to the workspace load endpoint (404 No session with id) `priority/P2` `type/bug` `category/ui` `scope/session-management` 💬3
- [#12235](https://github.com/QwenLM/qwen-code/issues/12235) Follow-up: deferred Suggestions from #12119 (/context category accounting) `priority/P3` `category/cli` `scope/commands` `scope/token-management` 💬3
- [#12230](https://github.com/QwenLM/qwen-code/issues/12230) web-shell: a successful live-journal repair permanently drops the settlement of a prompt this client never admitted `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#12281](https://github.com/QwenLM/qwen-code/issues/12281) Main CI failed: Qwen Code CI — src/sandbox/bwrap-execution.test.ts > … > builds a literal launch, filters internal secrets, and cleans confi… (+5 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12257](https://github.com/QwenLM/qwen-code/issues/12257) feat(core): add local notes-based compaction and session history recovery `priority/P2` `type/feature-request` `category/core` `scope/token-management` 💬2

#### 🔒 Closed Issues
- [#11162](https://github.com/QwenLM/qwen-code/issues/11162) fix(cli): normal queued tool cancellation skips completion cleanup
- [#11783](https://github.com/QwenLM/qwen-code/issues/11783) TUI crashes with uncaught React error #185 (Maximum update depth exceeded) a few seconds after a background task is registered
- [#12032](https://github.com/QwenLM/qwen-code/issues/12032) feat(core): assemble the tool-policy and example sections of the system prompt from the resident tool set
- [#12186](https://github.com/QwenLM/qwen-code/issues/12186) fix(web-shell): close the publish-correctness gaps found while adding it to the CLI release
- [#12033](https://github.com/QwenLM/qwen-code/issues/12033) fix(cli): /context category breakdown does not close (skills listing unattributed, messages derived from a cache subtraction, startup prelude uncounted)
- [#12206](https://github.com/QwenLM/qwen-code/issues/12206) LSP: non-ASCII responses are silently dropped (Content-Length in bytes compared to UTF-16 string length)
- [#12172](https://github.com/QwenLM/qwen-code/issues/12172) fix(web-shell): inline message editor overflows narrow chat panes
- [#12262](https://github.com/QwenLM/qwen-code/issues/12262) Windows lane red since #11163: git-remotes scp-like removal witness spawns 'ls-remote -- h:p'
- [#11907](https://github.com/QwenLM/qwen-code/issues/11907) feat(serve): manage ACP capacity with idle reclamation and user choice
- [#10389](https://github.com/QwenLM/qwen-code/issues/10389) feat(web-shell): expose assistant turn settlement lifecycle
- [#12143](https://github.com/QwenLM/qwen-code/issues/12143) ci: reclaim accumulated unused Docker build cache on ECS runners
- [#12281](https://github.com/QwenLM/qwen-code/issues/12281) Main CI failed: Qwen Code CI — src/sandbox/bwrap-execution.test.ts > … > builds a literal launch, filters internal secrets, and cleans confi… (+5 more)
- [#12219](https://github.com/QwenLM/qwen-code/issues/12219) Main CI failed: Qwen Code CI on 537311b8a5d8
- [#11631](https://github.com/QwenLM/qwen-code/issues/11631) feat(extensions): let an extension ship saved workflows, so its context file can name one instead of spelling out the procedure

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

**Stars:** 390,101 · **Open issues:** 8,134 · **Last push:** <1h ago

On September 20, 2026, OpenClaw released version 2026.9.5, which included refinements impacting session management and AI tool interactions, such as improvements to the Codex state migration and enhanced performance on various common tasks. Key merged pull requests featured fixes for browser performance, session title recovery, and optimizations for markdown parsing and agent database management. Significant new issues arose, including concerns over the Codex retained-state migration failing to settle, causing session catalogs to remain empty, and experiencing CPU consumption by a single-agent Gateway. This highlights ongoing challenges in maintaining a stable and responsive environment following the latest update.

#### 🚀 New Releases
- [v2026.9.5](https://github.com/openclaw/openclaw/releases/tag/v2026.9.5) openclaw 2026.9.5
- [linux-stable](https://github.com/openclaw/openclaw/releases/tag/linux-stable) OpenClaw Linux update channel

#### ✅ Merged PRs
- [#153283](https://github.com/openclaw/openclaw/pull/153283) fix(browser): recover page inspection without stale tab delays
- [#152966](https://github.com/openclaw/openclaw/pull/152966) test(codex): keep grace clock fixed through settlement
- [#153252](https://github.com/openclaw/openclaw/pull/153252) perf: avoid bundled discovery in Matrix reset tests
- [#153282](https://github.com/openclaw/openclaw/pull/153282) fix: start Codex turns after slow registration reads
- [#152962](https://github.com/openclaw/openclaw/pull/152962) fix(usage): avoid Windows usage worker clone failures
- [#152633](https://github.com/openclaw/openclaw/pull/152633) fix: send reply attachments from remote workspaces
- [#153266](https://github.com/openclaw/openclaw/pull/153266) fix(macos): recognize installed Chrome extensions in settings
- [#153256](https://github.com/openclaw/openclaw/pull/153256) refactor(ui): remove duplicate table copy coverage
- [#152904](https://github.com/openclaw/openclaw/pull/152904) improve(ai): reuse complete streamed tool arguments
- [#153273](https://github.com/openclaw/openclaw/pull/153273) fix(macos): hide Inspect Element when debug is disabled
- [#153158](https://github.com/openclaw/openclaw/pull/153158) improve(cron): move recovery proposal reads off the caller thread
- [#152728](https://github.com/openclaw/openclaw/pull/152728) perf(markdown): skip fence parsing for marker-free text
- [#153234](https://github.com/openclaw/openclaw/pull/153234) perf: avoid repeated plugin discovery in ACP tests
- [#153220](https://github.com/openclaw/openclaw/pull/153220) improve: reduce main-thread work for session lists
- [#153248](https://github.com/openclaw/openclaw/pull/153248) perf(agents): stop normalizing after a duplicate match
- [#153150](https://github.com/openclaw/openclaw/pull/153150) refactor(state): share the agent database worker lifecycle
- [#153243](https://github.com/openclaw/openclaw/pull/153243) fix: resume unfinished tasks after Gateway restarts
- [#153239](https://github.com/openclaw/openclaw/pull/153239) refactor(discord): remove obsolete modal test fallback
- [#153117](https://github.com/openclaw/openclaw/pull/153117) test(transcripts): await persisted Discord capture retirement
- [#153259](https://github.com/openclaw/openclaw/pull/153259) refactor(test): share usage page route fixtures
- [#153221](https://github.com/openclaw/openclaw/pull/153221) fix(sessions): recover automatic titles after slow naming
- [#152254](https://github.com/openclaw/openclaw/pull/152254) improve(ui): apply theme defaults when switching themes
- [#152612](https://github.com/openclaw/openclaw/pull/152612) test: reduce mention fixture setup and imports
- [#153125](https://github.com/openclaw/openclaw/pull/153125) perf(doctor): defer historical transcript conversion from startup
- [#151863](https://github.com/openclaw/openclaw/pull/151863) fix(codex): preserve delivery facts and native approval semantics
- [#153184](https://github.com/openclaw/openclaw/pull/153184) fix(macos): show About in native connection settings
- [#153051](https://github.com/openclaw/openclaw/pull/153051) fix(auth): explain missing Codex profiles after upgrades
- [#152967](https://github.com/openclaw/openclaw/pull/152967) fix(outbound): stop endlessly retrying obsolete queued replies
- [#152448](https://github.com/openclaw/openclaw/pull/152448) perf(node): defer unused runtime imports in CLI commands
- [#153223](https://github.com/openclaw/openclaw/pull/153223) perf(sessions): reuse fixed-store discovery ownership per operation
- [#153131](https://github.com/openclaw/openclaw/pull/153131) fix(ui): keep mobile setup controls compact and sidebar tools reachable
- [#153224](https://github.com/openclaw/openclaw/pull/153224) feat(ui): filter and sort the Systems machine list
- [#153193](https://github.com/openclaw/openclaw/pull/153193) fix(ui): restore compact PR previews and co-author avatars
- [#153232](https://github.com/openclaw/openclaw/pull/153232) docs(crabbox): document Blacksmith directory downloads
- [#153171](https://github.com/openclaw/openclaw/pull/153171) fix(release): harden 2026.8.33 update paths
- [#151245](https://github.com/openclaw/openclaw/pull/151245) fix(windows): reconcile aliased plugin roots at safe open
- [#153219](https://github.com/openclaw/openclaw/pull/153219) feat(ui): clarify linked conversations in session hovers
- [#152972](https://github.com/openclaw/openclaw/pull/152972) refactor: adopt fs-safe 0.16 and remove duplicate filesystem logic
- [#153087](https://github.com/openclaw/openclaw/pull/153087) fix(android): Talk repeats every GPT-Live answer when no realtime model is pinned
- [#128320](https://github.com/openclaw/openclaw/pull/128320) fix(qqbot): isolate missing account credentials
- [#145335](https://github.com/openclaw/openclaw/pull/145335) fix: complete Gateway upgrades after Node prefix changes
- [#153100](https://github.com/openclaw/openclaw/pull/153100) fix(ui): hide Cmd+K search while composing session prompts
- [#153097](https://github.com/openclaw/openclaw/pull/153097) fix(doctor): unblock verified session migrations with pending plugins
- [#153130](https://github.com/openclaw/openclaw/pull/153130) fix(gateway): stop model refreshes copying the state database
- [#153218](https://github.com/openclaw/openclaw/pull/153218) refactor: simplify LINE card test expectations
- [#149002](https://github.com/openclaw/openclaw/pull/149002) fix(ui): prevent clipped keyboard focus rings on tool summaries
- [#142018](https://github.com/openclaw/openclaw/pull/142018) fix(sessions): converge projections during active writes
- [#153170](https://github.com/openclaw/openclaw/pull/153170) fix(tests): compiler cleanup fixture times out under Bun
- [#153093](https://github.com/openclaw/openclaw/pull/153093) fix(update): prevent overlapping lifecycle work during long package updates
- [#152298](https://github.com/openclaw/openclaw/pull/152298) feat(typesafe): bundle TypeSafe AI decision models
- [#153165](https://github.com/openclaw/openclaw/pull/153165) improve: speed up CI planner policy tests
- [#153185](https://github.com/openclaw/openclaw/pull/153185) fix: restore selected task after chat reload
- [#153197](https://github.com/openclaw/openclaw/pull/153197) fix(ui): preview HTML attachments larger than 256 KiB
- [#153091](https://github.com/openclaw/openclaw/pull/153091) fix(ui): keep Cmd+K prompts from jumping to the bottom
- [#153162](https://github.com/openclaw/openclaw/pull/153162) perf(logbook): avoid transferring unused frame metadata
- [#153181](https://github.com/openclaw/openclaw/pull/153181) fix(ui): show actionable GitHub errors across previews and status views
- [#153190](https://github.com/openclaw/openclaw/pull/153190) fix(release): keep 7.34 validation on compatible provider gates
- [#153152](https://github.com/openclaw/openclaw/pull/153152) fix(release): stabilize 2026.7.34 live provider qualification
- [#153106](https://github.com/openclaw/openclaw/pull/153106) fix(ui): keep the sidebar expanded in new session tabs
- [#151754](https://github.com/openclaw/openclaw/pull/151754) fix(signal): retain case-sensitive link destinations
- [#153189](https://github.com/openclaw/openclaw/pull/153189) fix(release): use broadly entitled Gemini live gate
- [#134386](https://github.com/openclaw/openclaw/pull/134386) fix(install): fall back to portable Node after package manager failure
- [#153157](https://github.com/openclaw/openclaw/pull/153157) fix: deliver subagent replies despite stale completed tasks
- [#153115](https://github.com/openclaw/openclaw/pull/153115) fix(sessions): archive cleanup fails from eval-launched commands
- [#153122](https://github.com/openclaw/openclaw/pull/153122) improve: reduce main-thread work for live session messages
- [#152840](https://github.com/openclaw/openclaw/pull/152840) refactor: settle outbound acknowledgements in the SQLite worker
- [#153149](https://github.com/openclaw/openclaw/pull/153149) improve: simplify the CPU usage tooltip
- [#152237](https://github.com/openclaw/openclaw/pull/152237) feat(plugins): add decision models with per-agent selection
- [#153168](https://github.com/openclaw/openclaw/pull/153168) fix: keep expanded Swarm results clear of keyboard focus
- [#152374](https://github.com/openclaw/openclaw/pull/152374) fix(auth): remove redundant host source lease
- [#153019](https://github.com/openclaw/openclaw/pull/153019) refactor: simplify worker placement and node execution
- [#152745](https://github.com/openclaw/openclaw/pull/152745) fix(audit): keep queued persistence off the Gateway thread
- [#153161](https://github.com/openclaw/openclaw/pull/153161) improve: reduce repeated work loading session history
- [#152834](https://github.com/openclaw/openclaw/pull/152834) fix(android): realtime Talk stops long replies after about 77 seconds
- [#150536](https://github.com/openclaw/openclaw/pull/150536) fix: retain Talk consult answers after late speech finalization
- [#153140](https://github.com/openclaw/openclaw/pull/153140) fix: keep Talk answers matched to their live runs
- [#152988](https://github.com/openclaw/openclaw/pull/152988) docs: illustrate the 2026.9.1 release page
- [#145976](https://github.com/openclaw/openclaw/pull/145976) fix(doctor): preserve explicitly configured profile workspaces
- [#152994](https://github.com/openclaw/openclaw/pull/152994) fix: prevent worker cancellation from hanging shutdown
- [#152655](https://github.com/openclaw/openclaw/pull/152655) fix(tasks): keep the Gateway responsive during database contention
- [#152691](https://github.com/openclaw/openclaw/pull/152691) improve: keep project listings responsive during database reads
- [#153081](https://github.com/openclaw/openclaw/pull/153081) fix(update): tolerate unsupported launcher symlink metadata
- [#153041](https://github.com/openclaw/openclaw/pull/153041) fix: reuse plugin captures during model catalog refresh
- [#151946](https://github.com/openclaw/openclaw/pull/151946) chore: show OS state for stalled CLI process tests
- [#153068](https://github.com/openclaw/openclaw/pull/153068) fix: SQLite cleanup validation fails when large writes are slow
- [#153144](https://github.com/openclaw/openclaw/pull/153144) fix(ci): run Gateway database-worker tests in parallel
- [#153105](https://github.com/openclaw/openclaw/pull/153105) fix: respect plugin lifecycle in outbound sends
- [#153137](https://github.com/openclaw/openclaw/pull/153137) fix(ui): reduce layout work when loading chat history
- [#152836](https://github.com/openclaw/openclaw/pull/152836) fix(ui): chat export hints promise unsupported HTML paths
- [#153111](https://github.com/openclaw/openclaw/pull/153111) improve(team-reports): avoid transferring unused Markdown
- [#152900](https://github.com/openclaw/openclaw/pull/152900) fix(ui): CSV file links open a missing session
- [#111175](https://github.com/openclaw/openclaw/pull/111175) fix(usage): stop reporting unavailable model pricing as free
- [#153118](https://github.com/openclaw/openclaw/pull/153118) fix: show active subagent follow-ups in the sidebar
- [#153101](https://github.com/openclaw/openclaw/pull/153101) chore: remove duplicate build-cache assertions
- [#153109](https://github.com/openclaw/openclaw/pull/153109) fix: let post-core plugin updates finish without an implicit deadline
- [#153085](https://github.com/openclaw/openclaw/pull/153085) fix(update): let finalization finish without an implicit deadline
- [#153154](https://github.com/openclaw/openclaw/pull/153154) fix(release): restore Blacksmith npm artifact checks
- [#151740](https://github.com/openclaw/openclaw/pull/151740) fix(cron): reject invalid stagger before silent schedule changes
- [#152255](https://github.com/openclaw/openclaw/pull/152255) fix(ui): keep Review activity readable during long tool runs
- [#150551](https://github.com/openclaw/openclaw/pull/150551) fix: expose search in the mobile navigation drawer
- [#151747](https://github.com/openclaw/openclaw/pull/151747) fix(status): retain JSON console errors in diagnostic reports
- [#153004](https://github.com/openclaw/openclaw/pull/153004) fix(ui): display GitHub attachments and hide comment metadata
- [#150626](https://github.com/openclaw/openclaw/pull/150626) fix(imessage): keep queued answers attached to their questions
- [#152826](https://github.com/openclaw/openclaw/pull/152826) fix(test): discard rejected pending store writers
- [#152833](https://github.com/openclaw/openclaw/pull/152833) fix(agents): continue work after corrections and progress promises
- [#151452](https://github.com/openclaw/openclaw/pull/151452) chore: prepare extended-stable 2026.8.33
- [#153021](https://github.com/openclaw/openclaw/pull/153021) fix(android): stop adding instructions to recognized speech
- [#153020](https://github.com/openclaw/openclaw/pull/153020) fix: Gateway updates reject their managed helper at activation
- [#153098](https://github.com/openclaw/openclaw/pull/153098) refactor: share repeated OpenRouter Fusion test inputs
- [#152827](https://github.com/openclaw/openclaw/pull/152827) fix: keep prepared reads valid across read acknowledgments
- [#152723](https://github.com/openclaw/openclaw/pull/152723) fix(scripts): report quota from the failed GitHub response
- [#153050](https://github.com/openclaw/openclaw/pull/153050) chore: report stop-scoped exit entry for test workers
- [#149803](https://github.com/openclaw/openclaw/pull/149803) fix: find grouped conversations created by agents
- [#153005](https://github.com/openclaw/openclaw/pull/153005) fix(ci): keep security review pending while CI runs
- [#150537](https://github.com/openclaw/openclaw/pull/150537) fix: don't move CLI-routed OpenClaw sessions under the Claude Code catalog
- [#153107](https://github.com/openclaw/openclaw/pull/153107) fix(release): restore OpenCode Go fallback selection
- [#145103](https://github.com/openclaw/openclaw/pull/145103) fix(doctor): resolve ClawHub plugin drift targets from ClawHub
- [#153010](https://github.com/openclaw/openclaw/pull/153010) fix: prevent stale session history after rollback or database replacement
- [#153108](https://github.com/openclaw/openclaw/pull/153108) fix: retain live provider fallbacks in 2026.7.34
- [#153102](https://github.com/openclaw/openclaw/pull/153102) fix(ci): prevent Security Review checkout failures after fork merges
- [#150283](https://github.com/openclaw/openclaw/pull/150283) fix: preserve Talk consult startup during speech
- [#152635](https://github.com/openclaw/openclaw/pull/152635) feat(workspace): share document policy and unavailable errors with adapters
- [#152629](https://github.com/openclaw/openclaw/pull/152629) refactor(skills): separate file operations from install policy
- [#152631](https://github.com/openclaw/openclaw/pull/152631) refactor(memory): let file watching run without an index
- [#153056](https://github.com/openclaw/openclaw/pull/153056) refactor: share repeated Anthropic transport test inputs
- [#153047](https://github.com/openclaw/openclaw/pull/153047) fix: remove finished subagents from chat after parent continuations
- [#147547](https://github.com/openclaw/openclaw/pull/147547) refactor(update): separate repair turns from validation
- [#152630](https://github.com/openclaw/openclaw/pull/152630) fix(ui): preserve domain paths in chat messages
- [#153062](https://github.com/openclaw/openclaw/pull/153062) improve: avoid unused lobster variant generation in tests
- [#152383](https://github.com/openclaw/openclaw/pull/152383) fix(codex): distinguish Luna Reserve from ordinary usage
- [#152958](https://github.com/openclaw/openclaw/pull/152958) fix(chat): continue messages through compaction
- [#152802](https://github.com/openclaw/openclaw/pull/152802) improve(gateway): leave legacy worktree scans to Doctor
- [#153089](https://github.com/openclaw/openclaw/pull/153089) fix(ci): avoid stale Security Review failures after reevaluation
- [#153071](https://github.com/openclaw/openclaw/pull/153071) fix(agents): show spawned ACP tasks only once
- [#140743](https://github.com/openclaw/openclaw/pull/140743) fix(agents): plugin revisions fail while session history rebuilds
- [#125299](https://github.com/openclaw/openclaw/pull/125299) fix(doctor): report unavailable plugin manifests
- [#152986](https://github.com/openclaw/openclaw/pull/152986) fix(update): preserve successful results during concurrent SQLite writes
- [#153036](https://github.com/openclaw/openclaw/pull/153036) fix(update): honor omitted Git work deadlines
- [#153064](https://github.com/openclaw/openclaw/pull/153064) fix: stop speech cleanup errors leaking into later tests
- [#150071](https://github.com/openclaw/openclaw/pull/150071) fix(cron): preserve escaped spaces in automation commands
- [#153030](https://github.com/openclaw/openclaw/pull/153030) ci(ui): pin Chromium on browser cache misses
- [#153037](https://github.com/openclaw/openclaw/pull/153037) fix(cloud): start remote turns without a local container
- [#152971](https://github.com/openclaw/openclaw/pull/152971) ci: refresh measured test timings while retaining deferred families
- [#149967](https://github.com/openclaw/openclaw/pull/149967) fix: Claude CLI backend drops a backgrounded Bash call's follow-up turn and denies its tools
- [#152670](https://github.com/openclaw/openclaw/pull/152670) improve: run post-login avatar persistence off the Gateway thread
- [#152664](https://github.com/openclaw/openclaw/pull/152664) fix(auth): finish canceled requests during OAuth refresh
- [#153043](https://github.com/openclaw/openclaw/pull/153043) fix: let plugin and hook updates finish without default work deadlines
- [#152964](https://github.com/openclaw/openclaw/pull/152964) refactor: share repeated startup corpus model and skill inputs
- [#148879](https://github.com/openclaw/openclaw/pull/148879) fix(update): show failed finalize step instead of unknown reason
- [#152761](https://github.com/openclaw/openclaw/pull/152761) fix(agents): retain pending requester-settle wakes
- [#153028](https://github.com/openclaw/openclaw/pull/153028) fix(discord): retain progress cards while subagents continue
- [#139606](https://github.com/openclaw/openclaw/pull/139606) docs(providers): expand llmman guidance and add hybrid inference
- [#152786](https://github.com/openclaw/openclaw/pull/152786) fix: keep required replies from disappearing after tool completion
- [#144691](https://github.com/openclaw/openclaw/pull/144691) feat(fleet): show the recorded container runtime in status
- [#152888](https://github.com/openclaw/openclaw/pull/152888) fix(ci): retain valid installed startup CPU diagnostics
- [#152180](https://github.com/openclaw/openclaw/pull/152180) fix: prevent empty task pages when session metadata is unavailable
- [#152979](https://github.com/openclaw/openclaw/pull/152979) fix(ui): speed up older chat history loading
- [#153001](https://github.com/openclaw/openclaw/pull/153001) fix: keep custom themes stable during reloads
- [#152645](https://github.com/openclaw/openclaw/pull/152645) fix: preserve progress attachments during media cleanup
- [#152944](https://github.com/openclaw/openclaw/pull/152944) fix(qa): preserve transport preloads and packaged bootstrap boundaries
- [#152678](https://github.com/openclaw/openclaw/pull/152678) chore(ci): trim redundant workflow guard assertions
- [#152236](https://github.com/openclaw/openclaw/pull/152236) fix(plugins): validate authored SecretRefs when runtime values are prepared
- [#152951](https://github.com/openclaw/openclaw/pull/152951) fix(tasks): keep finished execution from reverting to unknown
- [#152947](https://github.com/openclaw/openclaw/pull/152947) fix(agents): recover safe response stream identity conflicts
- [#152873](https://github.com/openclaw/openclaw/pull/152873) fix: settle shared SQLite worker ownership before retirement
- [#153007](https://github.com/openclaw/openclaw/pull/153007) fix(config): import include validation from value-tree
- [#152908](https://github.com/openclaw/openclaw/pull/152908) fix(android): session diff wide-glyph test fails on busy CI runners
- [#152878](https://github.com/openclaw/openclaw/pull/152878) feat(android): choose a device-local text size
- [#152758](https://github.com/openclaw/openclaw/pull/152758) feat(ui): preview ordinary external links on hover
- [#152973](https://github.com/openclaw/openclaw/pull/152973) fix(update): avoid imposing a Doctor deadline during normal updates
- [#152990](https://github.com/openclaw/openclaw/pull/152990) fix(sdk): avoid stack overflow when cleaning deeply nested tool schemas
- [#152953](https://github.com/openclaw/openclaw/pull/152953) refactor(transcripts): simplify transcription and summary ownership
- [#152930](https://github.com/openclaw/openclaw/pull/152930) refactor(tests): share captured CI job fixtures
- [#152969](https://github.com/openclaw/openclaw/pull/152969) refactor: simplify restart recovery ownership and admission
- [#148877](https://github.com/openclaw/openclaw/pull/148877) fix(sessions): keep queued work when checkpoint restore fails
- [#152828](https://github.com/openclaw/openclaw/pull/152828) fix: keep child notifications out of replaced session stores
- [#129544](https://github.com/openclaw/openclaw/pull/129544) fix(qa): reject replay confidence with missing runtime executions
- [#152881](https://github.com/openclaw/openclaw/pull/152881) feat(android): reorder sidebar pages with accessibility actions
- [#152880](https://github.com/openclaw/openclaw/pull/152880) feat(android): inspect message details from its timestamp
- [#152877](https://github.com/openclaw/openclaw/pull/152877) feat(android): zoom and pan chat image previews
- [#152928](https://github.com/openclaw/openclaw/pull/152928) fix(ci): align status timeout fixture with shared auth
- [#152922](https://github.com/openclaw/openclaw/pull/152922) test(gateway): drive the CLI watchdog scenarios from an injected clock
- [#152903](https://github.com/openclaw/openclaw/pull/152903) fix(skills): stop repeated scans after watched folders are removed
- [#152490](https://github.com/openclaw/openclaw/pull/152490) refactor(config): isolate value traversal from config IO
- [#141843](https://github.com/openclaw/openclaw/pull/141843) fix(agents): stop reporting upstream HTTP failures as timeouts
- [#152429](https://github.com/openclaw/openclaw/pull/152429) improve(ui): quiet settings and make chat progress optional

#### 🐛 New Issues
- [#152744](https://github.com/openclaw/openclaw/issues/152744) OpenClaw 2026.9.5: Codex retained-state migration never settles; session-catalog stuck permanently cold (empty session lists, "thread not loaded" on archive) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` `P0` 💬19
- [#152759](https://github.com/openclaw/openclaw/issues/152759) [update] `openclaw update` from 2026.9.4 to 2026.9.5 fails with reason code `doctor-failed`; auto-rollback succeeds but upgrade is silent and unactionable `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬12
- [#153257](https://github.com/openclaw/openclaw/issues/153257) [Bug]: OpenClaw 2026.9.5 Turned a Stable Environment Into an 8-Hour Failure Recovery Session `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬8
- [#152689](https://github.com/openclaw/openclaw/issues/152689) Codex resident catalog retry loop after 2026.9.5 fills os.tmpdir() with repeated 342 MB plugin captures `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬8
- [#152961](https://github.com/openclaw/openclaw/issues/152961) [Bug]: 2026.9.5 WorkerThread consumes one CPU core and grows native RSS on a single-agent Gateway `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬7
- [#153067](https://github.com/openclaw/openclaw/issues/153067) Gateway in steady state re-copies the entire state DB every ~5 s per instance (~170 MB per read, ~5.9 TB/day of staging writes) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬7
- [#152632](https://github.com/openclaw/openclaw/issues/152632) docs: release illustration assets for 2026.9.2–2026.9.4 `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬7
- [#152968](https://github.com/openclaw/openclaw/issues/152968) [Bug]: 2026.9.5 — Codex app-server cannot find the existing "openai:default" OAuth profile; every lane fails as HTTP 401 (works on 2026.9.4 before and after rollback) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` `P0` 💬6
- [#153177](https://github.com/openclaw/openclaw/issues/153177) Update failure: finalize:targetConfigConvergence (2026.9.5) `maintainer` `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` 💬5
- [#152981](https://github.com/openclaw/openclaw/issues/152981) [Bug]: Gateway startup hangs for ~17 minutes at sidecars.model-runtime and finally fails with prepared model runtime publication (workspace plugins; agent) timed out `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬5
- [#153230](https://github.com/openclaw/openclaw/issues/153230) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#152942](https://github.com/openclaw/openclaw/issues/152942) [Bug]: sessions_spawn inherits requester fastMode onto a child that names a different model → Anthropic Opus 429 "Usage credits are required for fast mode" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#153151](https://github.com/openclaw/openclaw/issues/153151) WebUI: Profile discards an unsaved display name on reconnect `maintainer` `P2` `clawsweeper:source-repro` `impact:data-loss` 💬4
- [#153013](https://github.com/openclaw/openclaw/issues/153013) Update failure: managed-service-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#153049](https://github.com/openclaw/openclaw/issues/153049) Update failure: doctor-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#153015](https://github.com/openclaw/openclaw/issues/153015) [Bug]: Plugin service.stop() called on session cleanup without matching service.start(), breaks Hindsight retain pipeline (2026.9.5) `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬4
- [#153044](https://github.com/openclaw/openclaw/issues/153044) macOS app accepts only one Talk Mode turn per launch — audio capture dies after the first exchange `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬4
- [#152760](https://github.com/openclaw/openclaw/issues/152760) [Bug]: Deeply nested payload crashes Codex image-payload sanitizer with RangeError `bug` `no-stale` `bug:crash` `P2` 💬4
- [#152562](https://github.com/openclaw/openclaw/issues/152562) [Bug]: memory status reports the llama-cpp adapter default model (EmbeddingGemma) instead of the configured local.modelPath `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#152648](https://github.com/openclaw/openclaw/issues/152648) Update failure: doctor-failed (2026.9.3 to 2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬4
- [#153250](https://github.com/openclaw/openclaw/issues/153250) backup create aborts on any file vanishing mid-walk (ENOENT untolerated), and on a single dangling absolute symlink `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬3
- [#153270](https://github.com/openclaw/openclaw/issues/153270) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#153246](https://github.com/openclaw/openclaw/issues/153246) Plugin build temp dirs (openclaw-plugin-build-*) are never cleaned up, growing ~7.5 GB/day `P1` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬3
- [#153016](https://github.com/openclaw/openclaw/issues/153016) [Bug]: Control UI Memory page shows 'plugin unavailable' when third-party plugin fills slots.memory (2026.9.5) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#152839](https://github.com/openclaw/openclaw/issues/152839) [Feature]: [Feature]: Handle openat2 ENOSYS gracefully when acquiring the gateway state lock `enhancement` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#153179](https://github.com/openclaw/openclaw/issues/153179) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#153155](https://github.com/openclaw/openclaw/issues/153155) [Bug]: macOS: doctor --fix stops a healthy LaunchAgent Gateway, then fails to restore it (gateway-lifecycle contention → launchctl kickstart failed) and leaves the service booted out (2026.9.5) `clawsweeper:source-repro` `impact:crash-loop` `P0` `issue-rating: 🦞 diamond lobster` 💬3
- [#152987](https://github.com/openclaw/openclaw/issues/152987) docs: illustrate the 2026.9.1 release page `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬3
- [#153116](https://github.com/openclaw/openclaw/issues/153116) [Bug]: Rewind confirmation stays offscreen after resizing the viewport `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#153103](https://github.com/openclaw/openclaw/issues/153103) [Bug]: Chat annotation comment is discarded when viewport resize moves the transcript `maintainer` `P2` `clawsweeper:source-repro` `impact:data-loss` 💬3
- [#152957](https://github.com/openclaw/openclaw/issues/152957) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#152891](https://github.com/openclaw/openclaw/issues/152891) Update failure: runtime-verification-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#152941](https://github.com/openclaw/openclaw/issues/152941) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#152879](https://github.com/openclaw/openclaw/issues/152879) [Bug]: 2026.9.5 Doctor restoration still times out in LoadUnit admission guards after #149970 `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#152823](https://github.com/openclaw/openclaw/issues/152823) [Bug]: In-Gateway agent update rebuilds live dist then systemctl restart deadlocks on its own drain `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#152755](https://github.com/openclaw/openclaw/issues/152755) [Bug]: Deeply nested config crashes config redaction with RangeError `bug` `no-stale` `bug:crash` `P2` 💬3
- [#152765](https://github.com/openclaw/openclaw/issues/152765) [Bug]: remote model catalog refresh ignores ssrfPolicy.allowRfc2544BenchmarkRange — under Clash/Mihomo fake-ip it retries forever and leaks plugin captures into os.tmpdir() `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#152636](https://github.com/openclaw/openclaw/issues/152636) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#152695](https://github.com/openclaw/openclaw/issues/152695) macOS app: onboarding/welcome wizard reopens on every launch after in-place manual update over an old version `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#152508](https://github.com/openclaw/openclaw/issues/152508) [Bug]: Outbound plain-text replies silently lose everything between an unspaced `attempts<max` and a later `>` on WhatsApp, Telegram, Google Chat, IRC and iMessage `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#153295](https://github.com/openclaw/openclaw/issues/153295) [Bug]: saved Codex tool output loses text after 10,000 characters `maintainer` 💬2
- [#153275](https://github.com/openclaw/openclaw/issues/153275) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153235](https://github.com/openclaw/openclaw/issues/153235) Update failure: repairing (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#153240](https://github.com/openclaw/openclaw/issues/153240) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬2
- [#152869](https://github.com/openclaw/openclaw/issues/152869) Cron run continuation cannot be deleted while competing work is in flight (stuck sessions) `P2` `impact:session-state` 💬2
- [#153227](https://github.com/openclaw/openclaw/issues/153227) [Proposal] Consequence-bound release receipts beyond tool permission `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#153225](https://github.com/openclaw/openclaw/issues/153225) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#152935](https://github.com/openclaw/openclaw/issues/152935) [Bug]: 2026.9.4 → 2026.9.5 container upgrade leaves all agents refused at schema 19 until offline Doctor `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#153191](https://github.com/openclaw/openclaw/issues/153191) Update failure: state-migrated-no-rollback (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153176](https://github.com/openclaw/openclaw/issues/153176) Update failure: repairing (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153145](https://github.com/openclaw/openclaw/issues/153145) [Bug]: macOS Talk Mode abandons local-model responses after 30 seconds `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#153141](https://github.com/openclaw/openclaw/issues/153141) Compaction permanently fails with "thread already has an active writer", even after /stop `impact:session-state` `P0` `impact:ux-release-blocker` 💬2
- [#153127](https://github.com/openclaw/openclaw/issues/153127) WebUI: reconnect during input recall discards the reserved unsent draft `maintainer` `P2` `clawsweeper:source-repro` `impact:data-loss` 💬2
- [#153132](https://github.com/openclaw/openclaw/issues/153132) [Bug]: Telegram forum-topic group messages silently dropped pre-dispatch (spooled, never inbound) — worked hours earlier `P2` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬2
- [#153099](https://github.com/openclaw/openclaw/issues/153099) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153094](https://github.com/openclaw/openclaw/issues/153094) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#153034](https://github.com/openclaw/openclaw/issues/153034) Chat split loses sender and session metadata when another pane switches agent `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#153074](https://github.com/openclaw/openclaw/issues/153074) Update failure: managed-service-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬2
- [#153077](https://github.com/openclaw/openclaw/issues/153077) Update failure: finalize:doctor (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#152643](https://github.com/openclaw/openclaw/issues/152643) Control UI: Files preview transitions lose keyboard focus `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#153065](https://github.com/openclaw/openclaw/issues/153065) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#153003](https://github.com/openclaw/openclaw/issues/153003) [Bug]: Codex configuration refresh skips unsubscribe when retained owner is missing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152982](https://github.com/openclaw/openclaw/issues/152982) WebUI: reconnect closes an already-loaded Tasks transcript and loses focus `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#153026](https://github.com/openclaw/openclaw/issues/153026) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#152863](https://github.com/openclaw/openclaw/issues/152863) [Feature]: Add a public external-supervisor graceful stop handshake `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#153022](https://github.com/openclaw/openclaw/issues/153022) Slack: conversation avatar download blocked by the SSRF allowlist when the user's default avatar is served from secure.gravatar.com `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#153014](https://github.com/openclaw/openclaw/issues/153014) openclaw update swap step always fails on slow hardware: hardcoded 30s scan limit in rollback integrity check (reproduced on 2026.9.4 and 2026.9.5) `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#152920](https://github.com/openclaw/openclaw/issues/152920) WebUI: short desktop windows collapse a populated Logs stream to zero height `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#152970](https://github.com/openclaw/openclaw/issues/152970) [Bug]: doctor probe timeout is hardcoded at 10s but Gateway cold start takes 17-22s on loaded installs — false 'gateway timeout' failures `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152992](https://github.com/openclaw/openclaw/issues/152992) [Windows] openclaw update always fails at candidate snapshot: mkdir ENOENT on a path containing an illegal question-mark `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#152995](https://github.com/openclaw/openclaw/issues/152995) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#152938](https://github.com/openclaw/openclaw/issues/152938) [Bug]: sanitizeTerminalUploadName can reintroduce trailing dot/space after truncation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152954](https://github.com/openclaw/openclaw/issues/152954) [Bug]: Subagent announce produces no visible reply for Signal group requesters; healthy child completions never delivered `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬2
- [#152965](https://github.com/openclaw/openclaw/issues/152965) [Bug]: Hot-reloading a non-channel plugin (plugins.entries.*) disposes channel plugins without reconnecting — cuts active streams and drops inbound messages `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#152757](https://github.com/openclaw/openclaw/issues/152757) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#152584](https://github.com/openclaw/openclaw/issues/152584) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#152886](https://github.com/openclaw/openclaw/issues/152886) [Bug]: Codex/model-catalog startup retains multi-GB plugin builds in /tmp, causing ENOSPC and inference failure (2026.9.5) `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#152854](https://github.com/openclaw/openclaw/issues/152854) WebUI: reconnecting Logs expands the stream and loses the reading position `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#152955](https://github.com/openclaw/openclaw/issues/152955) Update failure: doctor-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#152949](https://github.com/openclaw/openclaw/issues/152949) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#152916](https://github.com/openclaw/openclaw/issues/152916) [Bug]: Heartbeat scratch emptiness check treats boilerplate markdown as content, so one agent runs heartbeat turns while sibling agents skip `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152933](https://github.com/openclaw/openclaw/issues/152933) [Bug]: Matrix regression with 2026.9.5 - no progress is shown `bug` `regression` `P2` `issue-rating: 🦪 silver shellfish` 💬2
- [#152925](https://github.com/openclaw/openclaw/issues/152925) [Feature]: Keep undelivered (held/cancelled) drafts and plugin-injected continuation turns out of Dreaming and session memory search `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#152499](https://github.com/openclaw/openclaw/issues/152499) WebChat progress attachments are permanently deleted when the hourly media sweep runs between attachment creation and the transcript rewrite that references them `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#152876](https://github.com/openclaw/openclaw/issues/152876) [Bug]: Remote JSON webhook body can crash the gateway with native stack overflow (0xC00000FD) `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#152847](https://github.com/openclaw/openclaw/issues/152847) [Bug]: Config `$include` resolution recursively walks nested JSON with no depth limit `bug` `no-stale` `bug:crash` `P2` 💬2
- [#152659](https://github.com/openclaw/openclaw/issues/152659) Session creation fails as 'session writer claim changed before transcript persistence' — real cause is an auth-resolution failure, masked `P1` `impact:session-state` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬2
- [#152804](https://github.com/openclaw/openclaw/issues/152804) Regression 2026.9.5: minimax-portal loses its model catalog after upgrade (heartbeat/main-lane fail with 'Unknown model: minimax-portal/MiniMax-M3') `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` `P0` 💬2
- [#152675](https://github.com/openclaw/openclaw/issues/152675) Plugin loader accumulates /tmp/openclaw-plugin-build-* staging dirs indefinitely; fills /tmp on multi-plugin setups `P1` `impact:crash-loop` 💬2
- [#152605](https://github.com/openclaw/openclaw/issues/152605) feishu: unset groupPolicy admits unlisted groups `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬2
- [#152604](https://github.com/openclaw/openclaw/issues/152604) config: recovery overwrites live bytes when the forensic copy cannot be written `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#152750](https://github.com/openclaw/openclaw/issues/152750) Update failure: global-install-failed (2026.9.4) Saved sanitized report: /home/miraibushido/.openclaw/update-reports/5e0f8f7b961050a7654edb26dacf9dbb489a67f40705beb6565acec6ad218333.50179187efdeafa039030ca50008cc7f5c1b4bfa40567bd2cd653933d9bbc325.md `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#152649](https://github.com/openclaw/openclaw/issues/152649) Control UI: a failed file preview hides the entire Files browser `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#152667](https://github.com/openclaw/openclaw/issues/152667) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#152651](https://github.com/openclaw/openclaw/issues/152651) [Bug]: Telegram /status loses its native table with partial streaming after 2026.9.5 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152542](https://github.com/openclaw/openclaw/issues/152542) update: an interrupted update run makes almost every CLI command block for over a minute on every invocation, permanently, until openclaw update repair `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152540](https://github.com/openclaw/openclaw/issues/152540) docs: openclaw approvals --node is not a real option, so node targeted exec approval edits fail as documented `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152663](https://github.com/openclaw/openclaw/issues/152663) [Feature]: Chrome session import and passkeys in integrated macOS browser tabs `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#152553](https://github.com/openclaw/openclaw/issues/152553) feishu: rich-text post redelivered on WS reconnect runs a second agent turn on the same message `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152592](https://github.com/openclaw/openclaw/issues/152592) [Bug]: cron edit --cron updates job_json.schedule + schedule_identity but never recomputes state.nextRunAtMs — job keeps firing on the old schedule (2026.9.4) `P1` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#152564](https://github.com/openclaw/openclaw/issues/152564) config: nested Discord and Slack dm.policy / dm.allowFrom are rejected as invalid config, blocking the documented upgrade path `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152579](https://github.com/openclaw/openclaw/issues/152579) [Bug]: voice-call: turn staleness token is issued only for twilio, so a late plivo or telnyx callback answers the previous question `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#152351](https://github.com/openclaw/openclaw/issues/152351) killed subagent with pending delivery keeps re-arming requester settle wake forever `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬2
- [#152509](https://github.com/openclaw/openclaw/issues/152509) config: a detected openclaw.json truncation is promoted over last-known-good on the next gateway start, and doctor --fix then restores the truncated file `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#152523](https://github.com/openclaw/openclaw/issues/152523) docs: illustrate the 2026.9.5 release without adding image binaries `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#152476](https://github.com/openclaw/openclaw/issues/152476) openclaw update: candidate doctor/lint abort at a fixed ~300s deadline that --timeout does not override `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#152360](https://github.com/openclaw/openclaw/issues/152360) Plugin runtime.llm.complete never rotates auth profiles: a rate-limited first profile fails every plugin completion while agent turns fail over `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#153293](https://github.com/openclaw/openclaw/issues/153293) Update failure: doctor-failed (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#153290](https://github.com/openclaw/openclaw/issues/153290) [Bug]: plugins reload removes the previous plugin build generation while a live channel adapter still loads from it → ENOENT in WhatsApp after-delivery hook, delivered message recorded as agent-tool-failure (2026.9.5) `P1` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#153284](https://github.com/openclaw/openclaw/issues/153284) Session SQLite migration recovery report (session-sqlite-1789863378413-67cc792d) `P3` 💬1
- [#153262](https://github.com/openclaw/openclaw/issues/153262) Session SQLite migration recovery report (session-sqlite-1789861367238-2b5a47b2) `P3` 💬1
- [#153264](https://github.com/openclaw/openclaw/issues/153264) Show resource history in Systems `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#153258](https://github.com/openclaw/openclaw/issues/153258) Stalled session on blocked ask_user tool call: no recovery, only gateway restart clears it `impact:session-state` `impact:message-loss` `P0` `impact:ux-release-blocker` 💬1
- [#153254](https://github.com/openclaw/openclaw/issues/153254) [Bug]: Doctor error: archived registry identity changed `bug` `regression` `P2` `clawsweeper:needs-info` 💬1
- [#153244](https://github.com/openclaw/openclaw/issues/153244) [Bug]: model.usage diagnostic event's provider field inconsistently populated, breaking OTel provider-grouped metrics (esp. custom OpenAI-compatible providers) `P2` `impact:other` 💬1
- [#153237](https://github.com/openclaw/openclaw/issues/153237) Update failure: managed-service-handoff-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#153201](https://github.com/openclaw/openclaw/issues/153201) [Bug]: Android Talk speaks GPT-Live consult answers twice on gateway-relay `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153229](https://github.com/openclaw/openclaw/issues/153229) [bug] backup create silently excludes user-configured cron/automations jobs (state/openclaw.sqlite) `P2` `impact:data-loss` 💬1
- [#153228](https://github.com/openclaw/openclaw/issues/153228) [Bug]: update repair cannot acknowledge abandoned runs older than 30 minutes, so Doctor repeats unactionable guidance `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#153079](https://github.com/openclaw/openclaw/issues/153079) Session SQLite migration recovery report (session-sqlite-1789825630375-7b7a1cac) `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#153222](https://github.com/openclaw/openclaw/issues/153222) [Feature]: Keep consecutive chat images in a horizontal scroll row `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#153217](https://github.com/openclaw/openclaw/issues/153217) runtime.type="acp" agents can leak into a live Codex/OpenAI dispatch attempt using the harness-specific model ref `P1` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#153205](https://github.com/openclaw/openclaw/issues/153205) [Feature]: Pin agents on Control UI `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#153180](https://github.com/openclaw/openclaw/issues/153180) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#153203](https://github.com/openclaw/openclaw/issues/153203) Workboard archive accepts non-terminal cards and strands active work `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153202](https://github.com/openclaw/openclaw/issues/153202) Control UI: closing file search with Escape interrupts Page Down reading `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153200](https://github.com/openclaw/openclaw/issues/153200) Codex app-server: one persistent app-server per agent (11 agents → ~1.5 GB RSS); appServer.homeScope "user" does not consolidate them `P2` `impact:other` 💬1
- [#153199](https://github.com/openclaw/openclaw/issues/153199) PR identity checks fail when GraphQL quota is exhausted despite available REST quota `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153192](https://github.com/openclaw/openclaw/issues/153192) [Bug]: iOS app reopens the main chat instead of the chat you were in after a relaunch `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#153182](https://github.com/openclaw/openclaw/issues/153182) Control UI: narrowing a fresh Chat tab row hides the selected file Close control `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153175](https://github.com/openclaw/openclaw/issues/153175) Control UI: warmed command palette opens over image preview and loses return focus `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153174](https://github.com/openclaw/openclaw/issues/153174) Auto-compaction fails with "no API key found" for models routed through the claude-cli CLI backend `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#153173](https://github.com/openclaw/openclaw/issues/153173) [Bug]: Doctor can leave a managed macOS Gateway stopped during restoration `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153160](https://github.com/openclaw/openclaw/issues/153160) Reduce avoidable work in session-history readers `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#153166](https://github.com/openclaw/openclaw/issues/153166) Control UI: Devices reconnect closes Details and loses the reading position `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152822](https://github.com/openclaw/openclaw/issues/152822) [Bug]: Android realtime Talk ends a long gateway-relay reply after ~77 s of queued audio (playout entry cap) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#153164](https://github.com/openclaw/openclaw/issues/153164) Control UI: repeated orientation changes drift the Review Markdown reading position `maintainer` `P3` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#153129](https://github.com/openclaw/openclaw/issues/153129) [Bug]: Talk consult run IDs change when their answers are saved `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#153153](https://github.com/openclaw/openclaw/issues/153153) [Bug]: Installed systemd --user unit keeps TimeoutStopSec=30 while 2026.9.5 requires >=330s; doctor --fix drain is SIGKILLed mid-shutdown and leaves the Gateway stopped `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#153148](https://github.com/openclaw/openclaw/issues/153148) WebUI: open model popup keeps its previous responsive anchor after resize `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153143](https://github.com/openclaw/openclaw/issues/153143) WebUI: Raw settings editor loses keyboard focus after reconnect `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153133](https://github.com/openclaw/openclaw/issues/153133) [Bug]: Gateway test-type inventory exceeds the early root limit on main `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#153139](https://github.com/openclaw/openclaw/issues/153139) WebUI: resizing a long Chat draft leaves its active line outside the visible field `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153135](https://github.com/openclaw/openclaw/issues/153135) [Bug]: Telegram ask_user buttons dead in groups without allowFrom — taps silently denied `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#153128](https://github.com/openclaw/openclaw/issues/153128) WebUI: restoring a long draft with Down leaves the caret outside the visible field `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#153120](https://github.com/openclaw/openclaw/issues/153120) [Bug]: Message context menu remains offscreen after viewport resize `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153119](https://github.com/openclaw/openclaw/issues/153119) [Bug]: Revealing narrow Chat footer actions shifts the following reply by 20 px `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153114](https://github.com/openclaw/openclaw/issues/153114) [Bug]: Chat forgets a progress card's partial expansion when returning to the session `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153104](https://github.com/openclaw/openclaw/issues/153104) [Bug]: Pasting a long annotation comment leaves its caret outside the visible textarea `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153095](https://github.com/openclaw/openclaw/issues/153095) [Feature]: Preview a vertical collapsed sidebar rail `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#153092](https://github.com/openclaw/openclaw/issues/153092) Feature request: configurable, scoped confirmation policy for realtime Talk actions `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153084](https://github.com/openclaw/openclaw/issues/153084) Gateway-routed replies ignore the inbound Discord account and fall back to the default bot identity `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#153082](https://github.com/openclaw/openclaw/issues/153082) [Bug]: Agents Files Preview Edit action focuses an editor below the viewport `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153058](https://github.com/openclaw/openclaw/issues/153058) [Bug]: Speech preparation fixtures leak cleanup failures into later music tests `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#153073](https://github.com/openclaw/openclaw/issues/153073) [Bug]: Narrow Sessions search cards require horizontal panning to read excerpts `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153070](https://github.com/openclaw/openclaw/issues/153070) [Bug]: Browser Back clears transcript search in Sessions `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153066](https://github.com/openclaw/openclaw/issues/153066) Improve reliability of Compaction Counter in /status `enhancement` `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#153059](https://github.com/openclaw/openclaw/issues/153059) [Feature]: Personal case files across chats and email with evidence-backed outcomes and follow-ups `P3` 💬1
- [#153055](https://github.com/openclaw/openclaw/issues/153055) [Bug]: 2026.9.4 → 2026.9.5 update can never succeed on large state: the 2026.9.4 driver still enforces the 300s candidate clamp fixed in #144901 `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#153048](https://github.com/openclaw/openclaw/issues/153048) [Bug]: Skill Workshop `update` creates a second pending proposal instead of continuing the existing review stream `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#153035](https://github.com/openclaw/openclaw/issues/153035) Feature request: per-session / per-session-type compaction override `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#153029](https://github.com/openclaw/openclaw/issues/153029) [Bug]: outLog.debug is not a function — 9.5 Delivery adapter regression breaks pre-V2 SDK plugins `P1` `impact:message-loss` 💬1
- [#153024](https://github.com/openclaw/openclaw/issues/153024) [Bug]: Google Live Talk ignores the caller's language hint and replies in whatever language an utterance was transcribed as `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#153018](https://github.com/openclaw/openclaw/issues/153018) WebUI: resizing across the landscape breakpoint moves a paused Logs reader `maintainer` `P3` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#152442](https://github.com/openclaw/openclaw/issues/152442) [Feature]: Rich hover previews for ordinary Web UI links `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#153011](https://github.com/openclaw/openclaw/issues/153011) memory: interrupted reindex leaves stale 0-byte reindex-lock.sqlite → intermittent 15s memory_search timeouts (no self-heal) `bug` `regression` `P2` `impact:session-state` 💬1
- [#153008](https://github.com/openclaw/openclaw/issues/153008) [Bug]: claimless ackDelivery can delete a delivery owned by another worker `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#153009](https://github.com/openclaw/openclaw/issues/153009) Updates/restarts leave stale temp build dirs in ~/.openclaw/tmp (40GB accumulated) `P2` `impact:other` 💬1
- [#153002](https://github.com/openclaw/openclaw/issues/153002) WebUI: wheel scrolling stalls over Sessions tables without vertical overflow `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#152997](https://github.com/openclaw/openclaw/issues/152997) [Bug]: In-place npm swap while Gateway is running makes 2026.8.2 process ENOENT on 2026.9.5 hashed dist chunks (Telegram replies fail) `impact:message-loss` `P0` `impact:ux-release-blocker` 💬1
- [#153000](https://github.com/openclaw/openclaw/issues/153000) Update failure: finalize:plugins (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#152999](https://github.com/openclaw/openclaw/issues/152999) Gateway silently rejects ALL new top-level messages after an interrupted session's rootWork is marked `released` (AsyncLocalStorage leak via snapshot()) `clawsweeper:needs-info` `impact:message-loss` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#152993](https://github.com/openclaw/openclaw/issues/152993) [Bug]: v2026.9.5 duplicates Codex binaries across 11 temporary captures; persistent TMPDIR accumulated ~29 GiB and caused ENOSPC `impact:auth-provider` `P0` `impact:ux-release-blocker` 💬1
- [#152424](https://github.com/openclaw/openclaw/issues/152424) [Feature]: Quieter settings and optional chat progress cards `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#152388](https://github.com/openclaw/openclaw/issues/152388) feat: consistent Keep computer awake setting for desktop apps `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#152980](https://github.com/openclaw/openclaw/issues/152980) WebUI: reconnect discards the unsaved agent Display name and resets the editor `maintainer` `P2` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#152978](https://github.com/openclaw/openclaw/issues/152978) Recover Slack and Discord recent context from platform history `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#152974](https://github.com/openclaw/openclaw/issues/152974) Update failure: finalize:targetConfigConvergence (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#152950](https://github.com/openclaw/openclaw/issues/152950) WebUI: Profile jumps back to the top after reconnecting `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152963](https://github.com/openclaw/openclaw/issues/152963) WebUI: reconnect closes an existing automation detail and resets reading position `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152792](https://github.com/openclaw/openclaw/issues/152792) WebUI: repeating a transcript search collapses loaded results and shifts Sessions `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152959](https://github.com/openclaw/openclaw/issues/152959) Feature: Support Windows meeting talk-back audio on paired Chrome nodes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#152946](https://github.com/openclaw/openclaw/issues/152946) [Bug]: Non-reentrant store-writer admission deadlocks when the same SQLite store path is re-entered `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152914](https://github.com/openclaw/openclaw/issues/152914) Update failure: finalize:doctor (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152906](https://github.com/openclaw/openclaw/issues/152906) [Bug]: Desktop computer control fails to start when Bun's node shim shadows the Node runtime on PATH `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#152939](https://github.com/openclaw/openclaw/issues/152939) [Bug]: Gateway reports ready while default/system agent databases are refused; readiness omits agent admission `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#152931](https://github.com/openclaw/openclaw/issues/152931) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152927](https://github.com/openclaw/openclaw/issues/152927) Background exec task runs are retained without a liveness check and permanently block graceful suspension `P2` `impact:crash-loop` 💬1
- [#152921](https://github.com/openclaw/openclaw/issues/152921) [Bug]: Deeply nested tool-call args crash tool display metadata with RangeError `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152918](https://github.com/openclaw/openclaw/issues/152918) Update failure: repairing (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152913](https://github.com/openclaw/openclaw/issues/152913) [Bug]: Long skill names overlap in dense composer Skills menus `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152874](https://github.com/openclaw/openclaw/issues/152874) WebUI: reconnecting Advanced settings replaces loaded fields and resets scrolling `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152912](https://github.com/openclaw/openclaw/issues/152912) doctor --session-sqlite import returns 0 targets when manifest plannedMoves entries have archivePath == sourcePath `P2` `impact:session-state` 💬1
- [#152910](https://github.com/openclaw/openclaw/issues/152910) Update failure: finalize:doctor (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152909](https://github.com/openclaw/openclaw/issues/152909) doctor --session-sqlite import returns 0 targets when manifest plannedMoves entries have archivePath == sourcePath `P2` `impact:session-state` 💬1
- [#152907](https://github.com/openclaw/openclaw/issues/152907) WebUI: closing an image after reconnect loses keyboard focus `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152838](https://github.com/openclaw/openclaw/issues/152838) WebUI: previously loaded images briefly collapse on virtual remount `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152905](https://github.com/openclaw/openclaw/issues/152905) Control UI: root URL lands on the Ask OpenClaw/Home conversation on every open; no default-landing setting or durable dismiss `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#152527](https://github.com/openclaw/openclaw/issues/152527) Usage: restore readable history, recover busy loads, and show session creators `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#152894](https://github.com/openclaw/openclaw/issues/152894) WebUI: reconnecting shifts Appearance controls when helper descriptions rewrap `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152890](https://github.com/openclaw/openclaw/issues/152890) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152887](https://github.com/openclaw/openclaw/issues/152887) WebUI: reconnect status is hidden inside inert content and can scroll out of view `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152883](https://github.com/openclaw/openclaw/issues/152883) [Bug]: MCP draft-2020-12 tool schema validator crashes with RangeError on deep inputSchema `bug` `bug:crash` `P2` `impact:crash-loop` 💬1
- [#152884](https://github.com/openclaw/openclaw/issues/152884) Updating Openclaw - Deadlock `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#152872](https://github.com/openclaw/openclaw/issues/152872) [Bug]: 2026.9.5 on Windows — external channel plugin fails to register ("Bundled companion is outside the plugin's captured module graph"), and the staged copy then cannot resolve the host peer package `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` `P0` 💬1
- [#152871](https://github.com/openclaw/openclaw/issues/152871) HTTP 429 from provider kills turn despite 3-model fallback chain (no retry with backoff) `P2` `impact:auth-provider` 💬1
- [#152870](https://github.com/openclaw/openclaw/issues/152870) Memory Dreaming narrative generation timeouts (rem + deep phases abort after ~60s) `P2` `impact:other` 💬1
- [#152866](https://github.com/openclaw/openclaw/issues/152866) [Bug]: Public Gemini tool-schema cleaner `normalizeGeminiToolSchemas` recurses with no depth limit → RangeError `bug` `bug:crash` `P2` `impact:crash-loop` 💬1
- [#152865](https://github.com/openclaw/openclaw/issues/152865) [Feature]: Reuse verified node-hosted skills for bound workers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#152860](https://github.com/openclaw/openclaw/issues/152860) [Bug]: `sessions cleanup --store` aborts with native stack overflow on deeply nested session-store JSON `bug` `bug:crash` `P2` `impact:crash-loop` 💬1
- [#152861](https://github.com/openclaw/openclaw/issues/152861) [Bug]: Control UI WebKit regex stall persists in 2026.9.5 during Computer Use after #147528 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#152852](https://github.com/openclaw/openclaw/issues/152852) Plugins: openclaw-plugin-build-* scratch dirs leak in /tmp when the owning process dies ungracefully (no orphan sweep) `P2` `impact:other` 💬1
- [#152725](https://github.com/openclaw/openclaw/issues/152725) Control UI: a short horizontal split clips the multiline composer and its controls `maintainer` `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#152846](https://github.com/openclaw/openclaw/issues/152846) [Windows] Event loop stalls of 60-68s: main thread blocked in a synchronous FS syscall while the port keeps listening - external probe + perf + native stack evidence `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152845](https://github.com/openclaw/openclaw/issues/152845) [Bug]: 2026.9.5 graceful restart fails its close step: workboard plugin cleanup runs after the async work scope is closed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#152841](https://github.com/openclaw/openclaw/issues/152841) [Bug]: Deeply nested Codex thread config makes config merge quadratic and unstable `bug` `bug:crash` `P2` `impact:crash-loop` 💬1
- [#152843](https://github.com/openclaw/openclaw/issues/152843) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152815](https://github.com/openclaw/openclaw/issues/152815) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152819](https://github.com/openclaw/openclaw/issues/152819) WebUI: toggling Tool calls loses active and retained conversation reading positions `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152449](https://github.com/openclaw/openclaw/issues/152449) Plugin themes and agent-controlled appearance without Gateway restarts `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#152831](https://github.com/openclaw/openclaw/issues/152831) WebUI: expanded activity groups lose their reading position after virtual remount `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152830](https://github.com/openclaw/openclaw/issues/152830) [Bug]: Gemini 3.8 Live never ends the user's turn after the Google bridge stops streaming silence (audioStreamEnd), so exact-zero-silence clients get no reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#152829](https://github.com/openclaw/openclaw/issues/152829) Update failure: managed-service-stop-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#152824](https://github.com/openclaw/openclaw/issues/152824) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152821](https://github.com/openclaw/openclaw/issues/152821) Group chat: make stranded-final diagnostic card and run-failure notices configurable (suppressible) `P2` `impact:ux-friction` 💬1
- [#152811](https://github.com/openclaw/openclaw/issues/152811) Update failure: activating (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152809](https://github.com/openclaw/openclaw/issues/152809) WebUI: entering or leaving the folder browser loses keyboard focus `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152808](https://github.com/openclaw/openclaw/issues/152808) WebUI: loading a folder shrinks the focused path input `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152806](https://github.com/openclaw/openclaw/issues/152806) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152762](https://github.com/openclaw/openclaw/issues/152762) WebUI: rejected session rename discards input and shifts the sidebar `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152791](https://github.com/openclaw/openclaw/issues/152791) [Bug]: OPENCLAW_ALLOW_OLDER_BINARY_DESTRUCTIVE_ACTIONS=1 does not allow an older binary to start against newer-migrated config `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#152789](https://github.com/openclaw/openclaw/issues/152789) WebUI: clearing a session title leaves its old derived title visible `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152788](https://github.com/openclaw/openclaw/issues/152788) Update failure: post-update-failed (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#152768](https://github.com/openclaw/openclaw/issues/152768) [Feature]: memory-core: support per-agent Dreaming exclusions in multi-agent setups `enhancement` `P2` `impact:session-state` `impact:security` 💬1
- [#152772](https://github.com/openclaw/openclaw/issues/152772) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152770](https://github.com/openclaw/openclaw/issues/152770) Update failure: unexpected-error (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152473](https://github.com/openclaw/openclaw/issues/152473) Plugin artifact selection can retain the wrong metadata generation or environment `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152756](https://github.com/openclaw/openclaw/issues/152756) WebUI: empty Logs poll removes truncation warning and shifts reading by 48 px `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152753](https://github.com/openclaw/openclaw/issues/152753) [Bug]: Deeply nested tool schema crashes tool parameter schema normalization with RangeError `bug` `bug:crash` `P2` `impact:crash-loop` 💬1
- [#152743](https://github.com/openclaw/openclaw/issues/152743) Control UI: Settings search shifts existing results when the schema arrives `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152751](https://github.com/openclaw/openclaw/issues/152751) [Bug]: Deeply nested config override value crashes TOML inline serialization with RangeError `bug` `bug:crash` `P3` `impact:crash-loop` 💬1
- [#152747](https://github.com/openclaw/openclaw/issues/152747) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152739](https://github.com/openclaw/openclaw/issues/152739) Control UI: multiline composer stays too short after editing in a resized window `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152742](https://github.com/openclaw/openclaw/issues/152742) Update failure: post-update-plugins (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#152740](https://github.com/openclaw/openclaw/issues/152740) [Bug]: Deeply nested JSON crashes config loading with native stack overflow (0xC00000FD) `bug` `bug:crash` `P2` `impact:crash-loop` 💬1
- [#152737](https://github.com/openclaw/openclaw/issues/152737) [Feature]: Opt-in per-job cron policy to skip stale work before execution `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#152716](https://github.com/openclaw/openclaw/issues/152716) Control UI: returning to Chat briefly collapses a retained multiline composer `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152735](https://github.com/openclaw/openclaw/issues/152735) Update failure: managed-service-handoff-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#152538](https://github.com/openclaw/openclaw/issues/152538) Background commands lose secret egress proxy access when their originating turn ends `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#152718](https://github.com/openclaw/openclaw/issues/152718) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152714](https://github.com/openclaw/openclaw/issues/152714) [Bug]: WebChat re-injects an old image attachment into unrelated later model turns `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#152713](https://github.com/openclaw/openclaw/issues/152713) Update failure: doctor-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152702](https://github.com/openclaw/openclaw/issues/152702) Control UI: Settings takeover slides already rendered content horizontally `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152709](https://github.com/openclaw/openclaw/issues/152709) [Bug] models.providers.*.models schema breaking change since 2026.9.x — config validation fails on upgrade `bug` `regression` `impact:auth-provider` `P0` 💬1
- [#152710](https://github.com/openclaw/openclaw/issues/152710) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152711](https://github.com/openclaw/openclaw/issues/152711) Markdown files opened from the file explorer are not rendered (only attachments are) `P3` `impact:ux-friction` 💬1
- [#152660](https://github.com/openclaw/openclaw/issues/152660) Control UI: recovery reload discards unsaved Files edits `maintainer` `P2` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#152701](https://github.com/openclaw/openclaw/issues/152701) Update failure: fetch-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152698](https://github.com/openclaw/openclaw/issues/152698) [Bug]: Docker updates blocked by overly broad update instructions `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152696](https://github.com/openclaw/openclaw/issues/152696) Config-reload restart forces after 300s and skips the active-work drain, with no remaining control since deferralTimeoutMs retirement `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#152694](https://github.com/openclaw/openclaw/issues/152694) macOS app (Control UI): stale running spinner after session finished; queued message stuck with no way to force-send `P2` `impact:session-state` `impact:message-loss` 💬1
- [#152666](https://github.com/openclaw/openclaw/issues/152666) Control UI: disabling Files word wrap resets the reading position `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152626](https://github.com/openclaw/openclaw/issues/152626) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152669](https://github.com/openclaw/openclaw/issues/152669) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#152658](https://github.com/openclaw/openclaw/issues/152658) [Feature]: Filter sidebar sessions by workspace type `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#152656](https://github.com/openclaw/openclaw/issues/152656) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152654](https://github.com/openclaw/openclaw/issues/152654) [Feature]: Reuse source hashes in bulk catalog verification `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#152625](https://github.com/openclaw/openclaw/issues/152625) Control UI: Tasks transcript loading shifts the task list and controls 💬1
- [#152646](https://github.com/openclaw/openclaw/issues/152646) [Bug]: Talk on gemini-3.8-live-extended-thinking over gateway-relay never finalizes user voice transcripts (no user rows; force-agent-consult never fires) `P1` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#152637](https://github.com/openclaw/openclaw/issues/152637) Control UI: Files search field jumps while an earlier search is pending `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#152624](https://github.com/openclaw/openclaw/issues/152624) [Bug]: PDF image-only pages disappear alongside selectable text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#152607](https://github.com/openclaw/openclaw/issues/152607) slack: acknowledged interactions disappear across restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#152606](https://github.com/openclaw/openclaw/issues/152606) voice-call: interrupted persistence leaves unreachable chunks across restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#152599](https://github.com/openclaw/openclaw/issues/152599) [Feature]: Show selected skills as inline composer chips `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#152598](https://github.com/openclaw/openclaw/issues/152598) [Bug]: Task progress clips below active chat questions `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#152596](https://github.com/openclaw/openclaw/issues/152596) [Feature]: Show selected people as inline mention chips in the composer `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#152590](https://github.com/openclaw/openclaw/issues/152590) Update failure: post-update-plugins (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#152589](https://github.com/openclaw/openclaw/issues/152589) Update failure: runtime-verification-failed (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152588](https://github.com/openclaw/openclaw/issues/152588) [Bug]: /status OAuth usage quota can mismatch the session-pinned auth profile (follow-up to #15089) `P2` `impact:auth-provider` `impact:ux-friction` 💬1
- [#152582](https://github.com/openclaw/openclaw/issues/152582) message tool: cross-context origin marker is applied to only 2 of the 8 actions that declare it, so forwarded content arrives unlabeled `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152577](https://github.com/openclaw/openclaw/issues/152577) voice-call: pre-connect dtmfSequence is silently discarded on plivo and telnyx while initiate_call reports success `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152573](https://github.com/openclaw/openclaw/issues/152573) discord: /new and /reset skip every configured guild guard in guild channels, including enabled:false `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#152580](https://github.com/openclaw/openclaw/issues/152580) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152572](https://github.com/openclaw/openclaw/issues/152572) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152568](https://github.com/openclaw/openclaw/issues/152568) [Bug]: Agent file preview shows unread content as empty and shifts when the read completes `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152560](https://github.com/openclaw/openclaw/issues/152560) [Bug]: Late command catalog response reopens New Session slash menu after Escape `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152558](https://github.com/openclaw/openclaw/issues/152558) update fails every time at "global install swap": Package rollback launcher backup changed `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152556](https://github.com/openclaw/openclaw/issues/152556) Keep main-chat indicators compact in agent roster headers `maintainer` `P3` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#152554](https://github.com/openclaw/openclaw/issues/152554) Update failure: plugin-target-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#152551](https://github.com/openclaw/openclaw/issues/152551) [Bug]: New Session command menu extends past the desktop viewport top edge `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152534](https://github.com/openclaw/openclaw/issues/152534) [Bug]: /model <id> -a persists a model id the provider rejects, and the resulting failure names agents.defaults.model although the value is on agents.entries.<agent>.model `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152541](https://github.com/openclaw/openclaw/issues/152541) [Bug]: Large gap below agent headers in the all-agents sidebar `bug` `maintainer` `P3` `clawsweeper:source-repro` 💬1
- [#152529](https://github.com/openclaw/openclaw/issues/152529) [Bug]: Secret egress proxy cannot tunnel to hosts longer than 64 characters — the leaf CSR sets CN to the full hostname and OpenSSL refuses it `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152535](https://github.com/openclaw/openclaw/issues/152535) [Bug]: SSE comment keepalives are discarded before the idle watchdog sees them, aborting healthy streams `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#152533](https://github.com/openclaw/openclaw/issues/152533) [Bug]: 2026.9.5 updater upgrades core but cannot refresh legacy systemd service due to unsafe-permissions `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152524](https://github.com/openclaw/openclaw/issues/152524) [Bug]: Control UI browser-handoff link carries the loopback gatewayUrl, so a link opened through a reverse proxy asks to switch to an address the browser cannot reach `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#152532](https://github.com/openclaw/openclaw/issues/152532) Gateway instability: chronic 'service child cleanup identity lost' unhandled rejections at restart boundaries (anchor channel / relay EPIPE) `impact:crash-loop` `P0` `maturity:stable` 💬1
- [#152511](https://github.com/openclaw/openclaw/issues/152511) [Bug]: Next keyed user message fails with "Session transcript anchor was not returned" for seconds after the agent replies into a captured conversation turn `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#152505](https://github.com/openclaw/openclaw/issues/152505) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152502](https://github.com/openclaw/openclaw/issues/152502) Identical streamed fenced chunks are suppressed before source coverage `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#152488](https://github.com/openclaw/openclaw/issues/152488) Composer controls clipped off-screen when viewport height shrinks (e.g. mobile keyboard open) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#152482](https://github.com/openclaw/openclaw/issues/152482) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152469](https://github.com/openclaw/openclaw/issues/152469) [Feature]: Bundled iFLYTEK Astron MaaS provider plugin (Token Plan + Coding Plan) `P2` `impact:auth-provider` 💬1
- [#152465](https://github.com/openclaw/openclaw/issues/152465) [Bug]: Trusted policy approval can execute later hook-rewritten params `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152464](https://github.com/openclaw/openclaw/issues/152464) Update failure: doctor-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#152457](https://github.com/openclaw/openclaw/issues/152457) [Bug]: A repeated secrets request looks identical to the first and silently replaces the entry's allowed hosts `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152459](https://github.com/openclaw/openclaw/issues/152459) doctor --fix hard-blocked when a plugin (memory-core) reaches the hardcoded 50k plugin-state entry cap — all later repairs silently skipped `impact:crash-loop` `P0` `impact:ux-release-blocker` 💬1
- [#152454](https://github.com/openclaw/openclaw/issues/152454) [Bug]: memory extra paths created after startup are not automatically indexed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#152453](https://github.com/openclaw/openclaw/issues/152453) [Bug]: Managed llama.cpp provider starts a configured localService.command without installing it — a managed block whose server file is absent cannot recover without interactive setup `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152461](https://github.com/openclaw/openclaw/issues/152461) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#152450](https://github.com/openclaw/openclaw/issues/152450) [Bug]: Models settings reads and writes only agents.defaults.model, so after a provider sign-in it shows a model the agent never runs `bug` `bug:behavior` `P2` `impact:auth-provider` 💬1
- [#152446](https://github.com/openclaw/openclaw/issues/152446) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#153298](https://github.com/openclaw/openclaw/issues/153298) [Bug]: Android Talk silently falls back to native Talk for gpt-live models because the Gateway sends no gatewayRelaySupported hint `bug` `maintainer`

#### 🔒 Closed Issues
- [#152744](https://github.com/openclaw/openclaw/issues/152744) OpenClaw 2026.9.5: Codex retained-state migration never settles; session-catalog stuck permanently cold (empty session lists, "thread not loaded" on archive)
- [#152961](https://github.com/openclaw/openclaw/issues/152961) [Bug]: 2026.9.5 WorkerThread consumes one CPU core and grows native RSS on a single-agent Gateway
- [#150204](https://github.com/openclaw/openclaw/issues/150204) [Bug]: Talk on gemini-3.8-live: agent consult fails with "Session transcript keyed user is outside the current turn" (voice transcript lands before run adoption)
- [#152632](https://github.com/openclaw/openclaw/issues/152632) docs: release illustration assets for 2026.9.2–2026.9.4
- [#152968](https://github.com/openclaw/openclaw/issues/152968) [Bug]: 2026.9.5 — Codex app-server cannot find the existing "openai:default" OAuth profile; every lane fails as HTTP 401 (works on 2026.9.4 before and after rollback)
- [#107930](https://github.com/openclaw/openclaw/issues/107930) [Feature]: Improve OpenClaw upgrade experience when Node.js version requirement changes
- [#150530](https://github.com/openclaw/openclaw/issues/150530) [Bug]: Talk agent consult dies on the prepared-assistant fence when a live voice transcript lands mid-run
- [#145087](https://github.com/openclaw/openclaw/issues/145087) [Bug]: update verifying false-negatives on a version mismatch and strands a healthy gateway (win32/npm)
- [#149106](https://github.com/openclaw/openclaw/issues/149106) Gateway process froze for ~31 min while the host stayed up, then self-recovered — Windows 11 / 2026.9.1: `host timing gap detected: process was frozen ~1849447ms`
- [#153013](https://github.com/openclaw/openclaw/issues/153013) Update failure: managed-service-preflight (2026.9.4)
- [#153015](https://github.com/openclaw/openclaw/issues/153015) [Bug]: Plugin service.stop() called on session cleanup without matching service.start(), breaks Hindsight retain pipeline (2026.9.5)
- [#139277](https://github.com/openclaw/openclaw/issues/139277) Android Talk voice silently reverts to default agent after gateway reconnect (agent selection only applied on picker tap, never persisted)
- [#152987](https://github.com/openclaw/openclaw/issues/152987) docs: illustrate the 2026.9.1 release page
- [#144877](https://github.com/openclaw/openclaw/issues/144877) [Bug]: category (custom group) does not override CLI catalog placement in CODING zone
- [#124158](https://github.com/openclaw/openclaw/issues/124158) codex-responses image transport discards refusal detail — completed responses with refusal text become generic "returned no images"
- [#151047](https://github.com/openclaw/openclaw/issues/151047) Chat PR links use the checkout repository instead of the named project
- [#104064](https://github.com/openclaw/openclaw/issues/104064) Safe restart emits when pending inspection throws
- [#152869](https://github.com/openclaw/openclaw/issues/152869) Cron run continuation cannot be deleted while competing work is in flight (stuck sessions)
- [#153141](https://github.com/openclaw/openclaw/issues/153141) Compaction permanently fails with "thread already has an active writer", even after /stop
- [#153014](https://github.com/openclaw/openclaw/issues/153014) openclaw update swap step always fails on slow hardware: hardcoded 30s scan limit in rollback integrity check (reproduced on 2026.9.4 and 2026.9.5)
- [#152288](https://github.com/openclaw/openclaw/issues/152288) [Bug]: Session-store reload sends queued heartbeat context into another store
- [#152499](https://github.com/openclaw/openclaw/issues/152499) WebChat progress attachments are permanently deleted when the hourly media sweep runs between attachment creation and the transcript rewrite that references them
- [#152193](https://github.com/openclaw/openclaw/issues/152193) Update failure: unexpected-error (2026.9.4)
- [#147722](https://github.com/openclaw/openclaw/issues/147722) Control UI: cannot turn off Labs "Gateway Host Desktop" — desktop.host.enabled is a required boolean so the Labs reset patch is rejected
- [#144493](https://github.com/openclaw/openclaw/issues/144493) [Bug]: Failed chunking upgrade hides available lexical memory
- [#138424](https://github.com/openclaw/openclaw/issues/138424) Windows: claude-cli backend cannot launch — pathToClaudeCodeExecutable gets the bare command, not the resolved .exe (spawn-path counterpart to #134960)
- [#152675](https://github.com/openclaw/openclaw/issues/152675) Plugin loader accumulates /tmp/openclaw-plugin-build-* staging dirs indefinitely; fills /tmp on multi-plugin setups
- [#151006](https://github.com/openclaw/openclaw/issues/151006) [Bug]: ACP task failure notices include unbounded diagnostics
- [#125305](https://github.com/openclaw/openclaw/issues/125305) [Bug]: Source-install updater deletes dist under a running gateway and leaves no rollback on failed builds
- [#151111](https://github.com/openclaw/openclaw/issues/151111) Isolated completions skip prepared backup profiles after returned quota errors
- [#142481](https://github.com/openclaw/openclaw/issues/142481) Sandbox backend launchers inherit the Linux exec OOM-score wrapper
- [#150117](https://github.com/openclaw/openclaw/issues/150117) message(action=thread-create) returns stale message_count:0 / last_message_id:null while actually posting — causes duplicate replies
- [#152351](https://github.com/openclaw/openclaw/issues/152351) killed subagent with pending delivery keeps re-arming requester settle wake forever
- [#152523](https://github.com/openclaw/openclaw/issues/152523) docs: illustrate the 2026.9.5 release without adding image binaries
- [#152476](https://github.com/openclaw/openclaw/issues/152476) openclaw update: candidate doctor/lint abort at a fixed ~300s deadline that --timeout does not override
- [#91284](https://github.com/openclaw/openclaw/issues/91284) [Bug]: doctor reports complete trusted-proxy gateway auth as unauthenticated
- [#153293](https://github.com/openclaw/openclaw/issues/153293) Update failure: doctor-failed (2026.9.3)
- [#153284](https://github.com/openclaw/openclaw/issues/153284) Session SQLite migration recovery report (session-sqlite-1789863378413-67cc792d)
- [#152229](https://github.com/openclaw/openclaw/issues/152229) Control UI: apply a theme’s default fonts and colors when selecting it
- [#153262](https://github.com/openclaw/openclaw/issues/153262) Session SQLite migration recovery report (session-sqlite-1789861367238-2b5a47b2)
- [#153258](https://github.com/openclaw/openclaw/issues/153258) Stalled session on blocked ask_user tool call: no recovery, only gateway restart clears it
- [#153244](https://github.com/openclaw/openclaw/issues/153244) [Bug]: model.usage diagnostic event's provider field inconsistently populated, breaking OTel provider-grouped metrics (esp. custom OpenAI-compatible providers)
- [#153237](https://github.com/openclaw/openclaw/issues/153237) Update failure: managed-service-handoff-unavailable (2026.9.4)
- [#153201](https://github.com/openclaw/openclaw/issues/153201) [Bug]: Android Talk speaks GPT-Live consult answers twice on gateway-relay
- [#153229](https://github.com/openclaw/openclaw/issues/153229) [bug] backup create silently excludes user-configured cron/automations jobs (state/openclaw.sqlite)
- [#153079](https://github.com/openclaw/openclaw/issues/153079) Session SQLite migration recovery report (session-sqlite-1789825630375-7b7a1cac)
- [#153180](https://github.com/openclaw/openclaw/issues/153180) Update failure: plugin-target-unavailable (2026.9.4)
- [#153200](https://github.com/openclaw/openclaw/issues/153200) Codex app-server: one persistent app-server per agent (11 agents → ~1.5 GB RSS); appServer.homeScope "user" does not consolidate them
- [#153160](https://github.com/openclaw/openclaw/issues/153160) Reduce avoidable work in session-history readers
- [#152822](https://github.com/openclaw/openclaw/issues/152822) [Bug]: Android realtime Talk ends a long gateway-relay reply after ~77 s of queued audio (playout entry cap)
- [#153129](https://github.com/openclaw/openclaw/issues/153129) [Bug]: Talk consult run IDs change when their answers are saved
- [#146446](https://github.com/openclaw/openclaw/issues/146446) [Bug]: String staggerMs values silently discarded, 5-minute default can apply
- [#153133](https://github.com/openclaw/openclaw/issues/153133) [Bug]: Gateway test-type inventory exceeds the early root limit on main
- [#150402](https://github.com/openclaw/openclaw/issues/150402) Control UI shows one ACP task twice as Subagent and ACP
- [#153058](https://github.com/openclaw/openclaw/issues/153058) [Bug]: Speech preparation fixtures leak cleanup failures into later music tests
- [#150612](https://github.com/openclaw/openclaw/issues/150612) [Bug]: Automation shell commands lose escaped trailing spaces on create and edit
- [#153059](https://github.com/openclaw/openclaw/issues/153059) [Feature]: Personal case files across chats and email with evidence-backed outcomes and follow-ups
- [#153055](https://github.com/openclaw/openclaw/issues/153055) [Bug]: 2026.9.4 → 2026.9.5 update can never succeed on large state: the 2026.9.4 driver still enforces the 300s candidate clamp fixed in #144901
- [#144675](https://github.com/openclaw/openclaw/issues/144675) [Feature]: Show the recorded container runtime in Fleet status
- [#153029](https://github.com/openclaw/openclaw/issues/153029) [Bug]: outLog.debug is not a function — 9.5 Delivery adapter regression breaks pre-V2 SDK plugins
- [#152442](https://github.com/openclaw/openclaw/issues/152442) [Feature]: Rich hover previews for ordinary Web UI links
- [#153011](https://github.com/openclaw/openclaw/issues/153011) memory: interrupted reindex leaves stale 0-byte reindex-lock.sqlite → intermittent 15s memory_search timeouts (no self-heal)
- [#153009](https://github.com/openclaw/openclaw/issues/153009) Updates/restarts leave stale temp build dirs in ~/.openclaw/tmp (40GB accumulated)
- [#152997](https://github.com/openclaw/openclaw/issues/152997) [Bug]: In-place npm swap while Gateway is running makes 2026.8.2 process ENOENT on 2026.9.5 hashed dist chunks (Telegram replies fail)
- [#152993](https://github.com/openclaw/openclaw/issues/152993) [Bug]: v2026.9.5 duplicates Codex binaries across 11 temporary captures; persistent TMPDIR accumulated ~29 GiB and caused ENOSPC
- [#152424](https://github.com/openclaw/openclaw/issues/152424) [Feature]: Quieter settings and optional chat progress cards
- [#152388](https://github.com/openclaw/openclaw/issues/152388) feat: consistent Keep computer awake setting for desktop apps
- [#120292](https://github.com/openclaw/openclaw/issues/120292) fix(control-ui): let users forget a stale browser device credential
- [#151988](https://github.com/openclaw/openclaw/issues/151988) [Feature]: Start background sessions from the command palette
- [#127354](https://github.com/openclaw/openclaw/issues/127354) `all-since-*` update migration silently truncates release history at 100 records
- [#151328](https://github.com/openclaw/openclaw/issues/151328) Telegram deletes a pending ask_user question card when the tool-progress draft is retired
- [#152906](https://github.com/openclaw/openclaw/issues/152906) [Bug]: Desktop computer control fails to start when Bun's node shim shadows the Node runtime on PATH
- [#152931](https://github.com/openclaw/openclaw/issues/152931) Update failure: plugin-target-unavailable (2026.9.4)
- [#152927](https://github.com/openclaw/openclaw/issues/152927) Background exec task runs are retained without a liveness check and permanently block graceful suspension
- [#152912](https://github.com/openclaw/openclaw/issues/152912) doctor --session-sqlite import returns 0 targets when manifest plannedMoves entries have archivePath == sourcePath
- [#152909](https://github.com/openclaw/openclaw/issues/152909) doctor --session-sqlite import returns 0 targets when manifest plannedMoves entries have archivePath == sourcePath
- [#152527](https://github.com/openclaw/openclaw/issues/152527) Usage: restore readable history, recover busy loads, and show session creators
- [#152883](https://github.com/openclaw/openclaw/issues/152883) [Bug]: MCP draft-2020-12 tool schema validator crashes with RangeError on deep inputSchema
- [#152871](https://github.com/openclaw/openclaw/issues/152871) HTTP 429 from provider kills turn despite 3-model fallback chain (no retry with backoff)
- [#152870](https://github.com/openclaw/openclaw/issues/152870) Memory Dreaming narrative generation timeouts (rem + deep phases abort after ~60s)
- [#152866](https://github.com/openclaw/openclaw/issues/152866) [Bug]: Public Gemini tool-schema cleaner `normalizeGeminiToolSchemas` recurses with no depth limit → RangeError
- [#152860](https://github.com/openclaw/openclaw/issues/152860) [Bug]: `sessions cleanup --store` aborts with native stack overflow on deeply nested session-store JSON
- [#152852](https://github.com/openclaw/openclaw/issues/152852) Plugins: openclaw-plugin-build-* scratch dirs leak in /tmp when the owning process dies ungracefully (no orphan sweep)
- [#152841](https://github.com/openclaw/openclaw/issues/152841) [Bug]: Deeply nested Codex thread config makes config merge quadratic and unstable
- [#152815](https://github.com/openclaw/openclaw/issues/152815) Update failure: plugin-target-unavailable (2026.9.4)
- [#152449](https://github.com/openclaw/openclaw/issues/152449) Plugin themes and agent-controlled appearance without Gateway restarts
- [#152821](https://github.com/openclaw/openclaw/issues/152821) Group chat: make stranded-final diagnostic card and run-failure notices configurable (suppressible)
- [#114510](https://github.com/openclaw/openclaw/issues/114510) [Bug]: xAI OAuth failures silently reroute the catalog to the paid api.x.ai API-key provider
- [#152772](https://github.com/openclaw/openclaw/issues/152772) Update failure: plugin-target-unavailable (2026.9.4)
- [#152473](https://github.com/openclaw/openclaw/issues/152473) Plugin artifact selection can retain the wrong metadata generation or environment
- [#152753](https://github.com/openclaw/openclaw/issues/152753) [Bug]: Deeply nested tool schema crashes tool parameter schema normalization with RangeError
- [#152751](https://github.com/openclaw/openclaw/issues/152751) [Bug]: Deeply nested config override value crashes TOML inline serialization with RangeError
- [#150205](https://github.com/openclaw/openclaw/issues/150205) [Bug]: Talk gateway-relay with Google Live: any output cancellation closes the whole realtime session after 1 s
- [#152740](https://github.com/openclaw/openclaw/issues/152740) [Bug]: Deeply nested JSON crashes config loading with native stack overflow (0xC00000FD)
- [#152310](https://github.com/openclaw/openclaw/issues/152310) [Feature]: Favicons and social previews on browser-tab cards
- [#152735](https://github.com/openclaw/openclaw/issues/152735) Update failure: managed-service-handoff-unavailable (2026.9.4)
- [#152538](https://github.com/openclaw/openclaw/issues/152538) Background commands lose secret egress proxy access when their originating turn ends
- [#152714](https://github.com/openclaw/openclaw/issues/152714) [Bug]: WebChat re-injects an old image attachment into unrelated later model turns
- [#152709](https://github.com/openclaw/openclaw/issues/152709) [Bug] models.providers.*.models schema breaking change since 2026.9.x — config validation fails on upgrade
- [#152711](https://github.com/openclaw/openclaw/issues/152711) Markdown files opened from the file explorer are not rendered (only attachments are)
- [#151391](https://github.com/openclaw/openclaw/issues/151391) Composer comments cannot be cleared together and deleting one closes the preview
- [#152694](https://github.com/openclaw/openclaw/issues/152694) macOS app (Control UI): stale running spinner after session finished; queued message stuck with no way to force-send
- [#127654](https://github.com/openclaw/openclaw/issues/127654) Ordinary-send chunkers split extended grapheme clusters across platform messages
- [#127584](https://github.com/openclaw/openclaw/issues/127584) Failed checkpoint restore discards accepted queued work before active session stops
- [#152589](https://github.com/openclaw/openclaw/issues/152589) Update failure: runtime-verification-failed (2026.9.4)
- [#152588](https://github.com/openclaw/openclaw/issues/152588) [Bug]: /status OAuth usage quota can mismatch the session-pinned auth profile (follow-up to #15089)
- [#152580](https://github.com/openclaw/openclaw/issues/152580) Update failure: plugin-target-unavailable (2026.9.4)
- [#152572](https://github.com/openclaw/openclaw/issues/152572) Update failure: plugin-target-unavailable (2026.9.4)
- [#152558](https://github.com/openclaw/openclaw/issues/152558) update fails every time at "global install swap": Package rollback launcher backup changed
- [#152554](https://github.com/openclaw/openclaw/issues/152554) Update failure: plugin-target-unavailable (2026.9.4)
- [#152532](https://github.com/openclaw/openclaw/issues/152532) Gateway instability: chronic 'service child cleanup identity lost' unhandled rejections at restart boundaries (anchor channel / relay EPIPE)
- [#150701](https://github.com/openclaw/openclaw/issues/150701) Bug: message tool drops buffer attachments when the caption is sanitized away
- [#152505](https://github.com/openclaw/openclaw/issues/152505) Update failure: plugin-target-unavailable (2026.9.4)
- [#152482](https://github.com/openclaw/openclaw/issues/152482) Update failure: plugin-target-unavailable (2026.9.4)
- [#152264](https://github.com/openclaw/openclaw/issues/152264) Show host and thread CPU context in the compact busyness tile
- [#152469](https://github.com/openclaw/openclaw/issues/152469) [Feature]: Bundled iFLYTEK Astron MaaS provider plugin (Token Plan + Coding Plan)
- [#150575](https://github.com/openclaw/openclaw/issues/150575) Telegram: retain group messages and read history on demand
- [#152459](https://github.com/openclaw/openclaw/issues/152459) doctor --fix hard-blocked when a plugin (memory-core) reaches the hardcoded 50k plugin-state entry cap — all later repairs silently skipped
- [#152450](https://github.com/openclaw/openclaw/issues/152450) [Bug]: Models settings reads and writes only agents.defaults.model, so after a provider sign-in it shows a model the agent never runs

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 247,160 · **Open issues:** 43,477 · **Last push:** <1h ago

Today was a routine maintenance day for Hermes Agent, with no new releases or merged pull requests reported. However, a range of new issues were brought to attention, including the critical #115638 regarding fleet_restart_pending markers that become undischargeable following a crash during cleanup. Another significant issue raised was #116213, which identifies a bug where the cron preflight fails to resolve openai-codex OAuth credentials, further complicating operational stability. Additional complaints such as #116312 highlight Telegram streaming edits causing unpaced issues, which contribute to flood penalties, indicating potential areas for immediate improvement. Overall, the day highlighted multiple areas for focus and enhancement in the Hermes Agent ecosystem.

#### 🐛 New Issues
- [#115638](https://github.com/NousResearch/hermes-agent/issues/115638) fleet_restart_pending marker is undischargeable when `hermes update` crashes mid-cleanup `type/bug` `comp/cli` `comp/gateway` `P2` 💬4
- [#116213](https://github.com/NousResearch/hermes-agent/issues/116213) [Bug]: Cron preflight cannot resolve openai-codex OAuth credentials from credential_pool `type/bug` `comp/cron` `provider/openai` `area/auth` 💬4
- [#116416](https://github.com/NousResearch/hermes-agent/issues/116416) Gateway status false-negative when gateway runs in-process inside dashboard `type/bug` `comp/cli` `comp/gateway` `area/docker` 💬4
- [#116497](https://github.com/NousResearch/hermes-agent/issues/116497) post-update cleanup traceback: _find_stale_dashboard_pids() got unexpected keyword argument scope_home 💬1
- [#116404](https://github.com/NousResearch/hermes-agent/issues/116404) `tools.tool_search.defer` is read at runtime but missing from DEFAULT_CONFIG (docs also say built-in tools never defer) `type/bug` `comp/cli` `comp/tools` `area/config` 💬1
- [#116483](https://github.com/NousResearch/hermes-agent/issues/116483) desktop: clarify tool's question form never renders (user sees only a spinner, answers come back empty) 💬1
- [#116312](https://github.com/NousResearch/hermes-agent/issues/116312) [Bug]: Telegram streaming edits are unpaced — 83% of flood penalties come from them, and the fallback continuation then cuts mid-word `type/bug` `comp/plugins` `platform/telegram` `P3` 💬1
- [#116467](https://github.com/NousResearch/hermes-agent/issues/116467) [Bug] Desktop/CLI model changes can silently discard the effective context ceiling 💬1
- [#116458](https://github.com/NousResearch/hermes-agent/issues/116458) ux(desktop): group-chat member failures always render as "<Bot> hit an error" — slot-timeout cause is captured but never shown, indistinguishable from a bot crash 💬1
- [#116460](https://github.com/NousResearch/hermes-agent/issues/116460) contributors/emails: two mappings differ only in case, causing a permanent phantom diff on macOS 💬1
- [#116443](https://github.com/NousResearch/hermes-agent/issues/116443) [Bug]: Ctrl+D does not exit the TUI on macOS; Cmd+D conflicts with Ghostty 💬1
- [#116446](https://github.com/NousResearch/hermes-agent/issues/116446) LSP servers inherit Node's default heap, and share the gateway cgroup — a large workspace can OOM-stop the whole fleet 💬1
- [#116514](https://github.com/NousResearch/hermes-agent/issues/116514) One raising startup-restore replay wedges the inbound gate closed forever
- [#116511](https://github.com/NousResearch/hermes-agent/issues/116511) Expose the existing image_urls switch on history reads (inline_images=false)
- [#116510](https://github.com/NousResearch/hermes-agent/issues/116510) SELECT * in message reads lets a new column break GET /api/sessions/{id}/messages
- [#116507](https://github.com/NousResearch/hermes-agent/issues/116507) defer_manual_serve can never discharge a reminder whose create_time is None (unreadable /proc -> immortal pending_manual_serves row)
- [#116504](https://github.com/NousResearch/hermes-agent/issues/116504) desktop: `--build-only` swaps release/mac-arm64/Hermes.app under a running Desktop and deletes the previous bundle (macOS)
- [#116503](https://github.com/NousResearch/hermes-agent/issues/116503) hermes update: a launchd-supervised `hermes dashboard` is left on pre-update code (macOS)
- [#116501](https://github.com/NousResearch/hermes-agent/issues/116501) Feature: multi-bot conversations on Telegram (bots chat each other in-channel, visible)
- [#116495](https://github.com/NousResearch/hermes-agent/issues/116495) [Bug]: Promoted-reasoning stall guard misses Thai plan tails — reasoning leaks to user channel
- [#116494](https://github.com/NousResearch/hermes-agent/issues/116494) licensed / provisioned solely for use from within OpenCode `bug`
- [#116490](https://github.com/NousResearch/hermes-agent/issues/116490) Env-writer denylist misses most of the subprocess-execution class (GIT_CONFIG_*, BASH_ENV, ASKPASS, interpreter injection)
- [#116486](https://github.com/NousResearch/hermes-agent/issues/116486) Gateway sends leaked terminal <|eos|> control tokens as chat messages
- [#116473](https://github.com/NousResearch/hermes-agent/issues/116473) kanban: a BLOB task_comments.body aborts the whole dispatch pass (TypeError in check_respawn_guard)
- [#116472](https://github.com/NousResearch/hermes-agent/issues/116472) Desktop UI freezes 15-20 min and renderer is SIGKILLed while context compression stalls on an over-window session
- [#116464](https://github.com/NousResearch/hermes-agent/issues/116464) [Bug]: Cadu/iOS disconnect leaves canonical Bot Chat lease alive after completed turn
- [#116456](https://github.com/NousResearch/hermes-agent/issues/116456) [Bug]: pipe-to-shell and related approval patterns miss zsh/ksh/dash
- [#116455](https://github.com/NousResearch/hermes-agent/issues/116455) Two small hook gaps: outbound gateway status text, and CLI parity for `kanban create`
- [#116452](https://github.com/NousResearch/hermes-agent/issues/116452) Kanban: a pre-dispatch and a pre-create plugin hook whose return value is honoured
- [#116450](https://github.com/NousResearch/hermes-agent/issues/116450) [Bug]: deleted-WAL guard misses held sidecars when state.db is reached through a symlinked path
- [#116429](https://github.com/NousResearch/hermes-agent/issues/116429) [Bug]: Subdirectory hint files follow symlinks out of the working tree `type/security` `comp/agent` `P2` `needs-repro`
- [#116435](https://github.com/NousResearch/hermes-agent/issues/116435) [Bug]: Interrupt of a parallel delegate batch hangs on the executor join when a child is wedged `type/bug` `comp/agent` `tool/delegate` `P2`
- [#116433](https://github.com/NousResearch/hermes-agent/issues/116433) feat(discord): /discord-branch — fork session + create new thread in one command `type/feature` `comp/gateway` `platform/discord` `P3`

#### 🔒 Closed Issues
- [#61634](https://github.com/NousResearch/hermes-agent/issues/61634) [Bug]: GPT-5.6 reasoning support is incomplete: gateway/CLI block max; Ultra needs Multi-agent integration
- [#91021](https://github.com/NousResearch/hermes-agent/issues/91021) Desktop app relaunch after in-app update fails to reconnect to WSL backend, requires manual close and reopen
- [#116416](https://github.com/NousResearch/hermes-agent/issues/116416) Gateway status false-negative when gateway runs in-process inside dashboard
- [#108558](https://github.com/NousResearch/hermes-agent/issues/108558) [Bug]: Reasoning models starve to empty responses on OpenAI-compatible gateways with internal output caps
- [#116460](https://github.com/NousResearch/hermes-agent/issues/116460) contributors/emails: two mappings differ only in case, causing a permanent phantom diff on macOS
- [#102552](https://github.com/NousResearch/hermes-agent/issues/102552) Custom OpenAI-compatible provider (OmniRoute): duplicated models in picker and no way to hide upstream-hidden models
- [#83080](https://github.com/NousResearch/hermes-agent/issues/83080) [Feature]: Configure named Custom Endpoints for image/video generation with per-request model selection

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,189 · **Open issues:** 8,146 · **Last push:** <1h ago

On September 20, 2026, there were no new releases for vLLM, but several significant updates were made through merged pull requests. Notably, the GLM-5.3 performance was enhanced with a workspace size adjustment that saves 3072 MiB of GPU memory, while bug fixes addressed issues related to the SM100 fp8_ds_mla cache scales and the MiMo-V2.5 fused fp8 qkv_proj sharding. Additionally, improvements were made to the processing of logits with support for custom logits processors, and a dynamic MM cache was implemented. Among the newly reported issues, a prominent concern involves task cancellation during the _commit_scale_down_elastic_ep, which is corrupting cluster state without rollback, highlighting the need for prompt resolutions in this area.

#### ✅ Merged PRs
- [#49435](https://github.com/vllm-project/vllm/pull/49435) [Bugfix] Fix SM100 fp8_ds_mla cache scales
- [#57641](https://github.com/vllm-project/vllm/pull/57641) [CI][Bugfix] Fix MoE reprocess test mock after #57405's kernel refactor
- [#57701](https://github.com/vllm-project/vllm/pull/57701) [GLM5.3 Perf] Size the GLM-5 sparse indexer decode workspace, 3072 MiB GPU memory saved
- [#52500](https://github.com/vllm-project/vllm/pull/52500) [Bugfix] Take padded path for ragged decode batches in sparse_attn_indexer
- [#56497](https://github.com/vllm-project/vllm/pull/56497) [Model Runner V2] Support custom logits processors
- [#57674](https://github.com/vllm-project/vllm/pull/57674) [Refactor] Use dynamic MM cache in processor
- [#57456](https://github.com/vllm-project/vllm/pull/57456) [Kernel][Perf] Add sm_120 (RTX PRO 6000 / RTX 50) tuned configs for batch-invariant persistent matmul
- [#53623](https://github.com/vllm-project/vllm/pull/53623) [ROCm][Perf] Enable the AITER GDN decode fast path for flat qkvz layouts
- [#57508](https://github.com/vllm-project/vllm/pull/57508) [Bugfix][Model] Fix MiMo-V2.5 fused fp8 qkv_proj sharding (pre-shard count is num_key_value_heads; MTP path too)
- [#57316](https://github.com/vllm-project/vllm/pull/57316) [Quantization] Let ModelOpt MXFP8 layers load pre-processed weights Purpose
- [#55928](https://github.com/vllm-project/vllm/pull/55928) [Tests] Cover get_unhashed_block_ids_all_groups
- [#57669](https://github.com/vllm-project/vllm/pull/57669) [Docs] Explain pointer-alignment JIT specialization in Triton skill
- [#57667](https://github.com/vllm-project/vllm/pull/57667) [Bugfix][DSA] Avoid runtime JIT for offset candidate end buffers
- [#53009](https://github.com/vllm-project/vllm/pull/53009) [CI][AMD] Bump torchao to v18 for Python 3.14
- [#57654](https://github.com/vllm-project/vllm/pull/57654) [Bugfix][CPU] Fix DeepSeek V4.1 import without Triton
- [#54283](https://github.com/vllm-project/vllm/pull/54283) [Bugfix][Multimodal] Frame the multi-modal hash digest input
- [#57487](https://github.com/vllm-project/vllm/pull/57487) [Bugfix][Model] Fix Aria expert weight names and layout
- [#57371](https://github.com/vllm-project/vllm/pull/57371) [CI] Deflake pooling shards with GPU teardown fixtures between tests
- [#57364](https://github.com/vllm-project/vllm/pull/57364) [CI] Deflake MTEB score tests with per-model mteb_tol and reruns
- [#57647](https://github.com/vllm-project/vllm/pull/57647) [CI][Bugfix] Correct the Laguna DFlash acceptance-length reference
- [#56885](https://github.com/vllm-project/vllm/pull/56885) [ROCm] Bump AITER to v0.1.22.post1
- [#55844](https://github.com/vllm-project/vllm/pull/55844) [Core][Frontend] Bind KV-event publishers at port 0 and expose the bound endpoints

#### 🐛 New Issues
- [#57691](https://github.com/vllm-project/vllm/issues/57691) [Bug]: Task cancellation during _commit_scale_down_elastic_ep corrupts cluster state without rollback 💬5
- [#57650](https://github.com/vllm-project/vllm/issues/57650) [Bug]: In version 0.26.0, when scheduler initialization fails, the worker process will not proactively exit or release resources. `bug` `scheduler` 💬4
- [#57714](https://github.com/vllm-project/vllm/issues/57714) [Bug][Reasoning] kimi_k3: structured output never engages when the completion skips the think channel `structured-output` `tool-calling` `kimi` `k3` 💬3
- [#57713](https://github.com/vllm-project/vllm/issues/57713) [Bug]: GLM5.3-Flash does not support fp8 kv cache dtype on hopper `bug` 💬3
- [#57725](https://github.com/vllm-project/vllm/issues/57725) [Bug]: a malformed structured-output specification returns HTTP 500 with an empty error message, and a self-referential `$ref` passes validation and then kills the request mid-generation `bug` `structured-output` 💬2
- [#57671](https://github.com/vllm-project/vllm/issues/57671) [Bug]: collect-env is not supported in MAC `bug` 💬2
- [#57730](https://github.com/vllm-project/vllm/issues/57730) [Bug]: /tokenize returns 400 "cannot pickle ValidatorIterator" for assistant `content: null` + `tool_calls` (DeepSeek-V4.1), while chat completions accepts the same messages `tool-calling` `deepseek` `DSv4.1` 💬1
- [#57727](https://github.com/vllm-project/vllm/issues/57727) [Bug]: `POST /reset_prefix_cache` returns success while the CPU offload tier keeps serving the same blocks `bug` 💬1
- [#57716](https://github.com/vllm-project/vllm/issues/57716) [Bug] Kimi-K3 TP8xPP2 + DSpark spec-on: mid-decode target-forward NaN detonates MLA decode under concurrency (fp8 latent-cache bytes carry the corruption) `rocm` `quantization` `kimi` `k3` 💬1
- [#57680](https://github.com/vllm-project/vllm/issues/57680) [Bug]: Decode throughput drops ~3.3x from 0.26.0 to 0.29.0 on H100 (Qwen3.6-35B-A3B-FP8, same config, same backends) 💬1
- [#57653](https://github.com/vllm-project/vllm/issues/57653) [CI Failure]: MI250 Multimodal Processor - test_common.py::test_processing_correctness[DeepSeek-V4.1-Flash] `rocm` `multi-modality` `ci-failure` `deepseek` 💬1
- [#57726](https://github.com/vllm-project/vllm/issues/57726) [Bug]: with a `--reasoning-parser` configured, structured outputs on `/v1/completions` are not enforced, with no warnings `bug` `structured-output` `tool-calling`
- [#57724](https://github.com/vllm-project/vllm/issues/57724) [Bug]: RealtimeConnection leaks connection state and skips teardown on handshake exception or task cancellation
- [#57723](https://github.com/vllm-project/vllm/issues/57723) [Bug]: the `outlines` structured-output backend rejects the EOS it allowed, every choice / regex / json request that completes returns HTTP 500 `bug` `structured-output`
- [#57721](https://github.com/vllm-project/vllm/issues/57721) [Bug]: Mamba-hybrid models cannot start with speculative decoding. Mamba page padding is planned without the speculative widening `bug` `speculative-decoding`
- [#57720](https://github.com/vllm-project/vllm/issues/57720) [Bug]: Mamba-hybrid models (granite-4.0-h) give a different, garbled greedy answer every time for a ONE-token prompt under full CUDA graphs `bug`
- [#57719](https://github.com/vllm-project/vllm/issues/57719) [Bug]: `prompt_embeds` + any penalty kills the engine with a device-side assert (`scatter gather kernel index out of bounds`) `bug`
- [#57712](https://github.com/vllm-project/vllm/issues/57712) [Feature]: OutOfResources: shared memory (98304 > 65536) on Turing (SM75) — global attention layers with head_dim=512 `feature request`
- [#57699](https://github.com/vllm-project/vllm/issues/57699) [Bug]: qwen3_coder tool parser drops the last parameter when the model omits </parameter> before </function> (non-streaming {}, streaming unterminated JSON) `tool-calling`
- [#57688](https://github.com/vllm-project/vllm/issues/57688) [Bug][Reasoning] kimi_k3: streaming path classifies a response-only completion as reasoning (diverges from non-streaming after #57098) `tool-calling` `kimi`
- [#57684](https://github.com/vllm-project/vllm/issues/57684) [Question] Support path for platform plugins that cannot install Triton (MRV2 requires it)
- [#57672](https://github.com/vllm-project/vllm/issues/57672) [RFC]: Raw-survivor storage with query-side rotation (RSQR) for KV cache eviction `RFC`
- [#57661](https://github.com/vllm-project/vllm/issues/57661) [Bug]: NIXL P/D disagg silently corrupts output when hybrid-attention layers share a storage base with different block lengths (DeepSeek-V4.1-Flash) `deepseek` `kv-connector` `DSv4.1`
- [#57660](https://github.com/vllm-project/vllm/issues/57660) auth-test
- [#57649](https://github.com/vllm-project/vllm/issues/57649) [RFC]: Declarative cross-platform capability negotiation and effective configuration reporting `RFC`

#### 🔒 Closed Issues
- [#35700](https://github.com/vllm-project/vllm/issues/35700) [Bug]: Qwen3.5 structured output doesn't work
- [#42895](https://github.com/vllm-project/vllm/issues/42895) [Bug]: NIXL disagg fails for Qwen3.5 hybrid model when prefill TP4 and decode DP8 use different physical block sizes
- [#53777](https://github.com/vllm-project/vllm/issues/53777) [Bug] DFlash2 spec decode + xgrammar: deterministic "Failed to advance FSM" on json_object grammar (same draft token every time)
- [#43094](https://github.com/vllm-project/vllm/issues/43094) [Bug][PD] Bidirectional KV transfer produces incorrect results when reasoning traces are stripped between turns
- [#43178](https://github.com/vllm-project/vllm/issues/43178) [Feature]: Port Gemma4 vision encoder to MMEncoderAttention with FlashAttention support
- [#42898](https://github.com/vllm-project/vllm/issues/42898) [Bug]: Poor Qwen3.5 NVFP4 disagg GSM8K accuracy with 2p1d (2xTEP8 prefill, 1xDEP8 decode)
- [#42927](https://github.com/vllm-project/vllm/issues/42927) [Bug]: "The page size of the layer is not divisible by the maximum page size" When serving Qwen3.5 MoE with custom "VLLM_PP_LAYER_PARTITION"
- [#42987](https://github.com/vllm-project/vllm/issues/42987) [SM120] _dummy_sampler_run hangs indefinitely on RTX 5090 due to top_k=vocab_size-1 triggering an SM120-broken top-k masking kernel (one-line fix)
- [#57473](https://github.com/vllm-project/vllm/issues/57473) [Bug]: Aria expert loading looks up w13_weight.weight / w2_weight.weight
- [#42873](https://github.com/vllm-project/vllm/issues/42873) [Bug]: Forked workers retain stale CUDA primary contexts from parent process
- [#42882](https://github.com/vllm-project/vllm/issues/42882) [Feature]: Make DS layout used by default
- [#43042](https://github.com/vllm-project/vllm/issues/43042) [Bug]: Pixtral model(Migstral-Small-2509) will raise AttributeError NoneType Size on graph mode. Eager mode is ok
- [#43060](https://github.com/vllm-project/vllm/issues/43060) [Bug]: worker process remains after SIGKILL the serve process for Qwen3omni model
- [#43093](https://github.com/vllm-project/vllm/issues/43093) [Bug]: Fix two crashes that prevent DeepSeek-V4-Flash + OffloadingConnector
- [#43187](https://github.com/vllm-project/vllm/issues/43187) [Performance]: Triton fusion for Qwen2/3-MoE shared-expert gate (Qwen2MoeMLP/Qwen3MoeMLP)
- [#43021](https://github.com/vllm-project/vllm/issues/43021) [Feature]: Fuse QK Norm + mRoPE + KV cache write + FP8 quant
- [#43035](https://github.com/vllm-project/vllm/issues/43035) [Build]: spinloop.cpp fails with Py_LIMITED_API enabled: Py_buffer not declared
- [#43080](https://github.com/vllm-project/vllm/issues/43080) [Bug]: vLLM 0.21: DeepSeek-V4-pro crashes with tensor size mismatch & CUBLAS error during PP+TP inference on 2x8 H800
- [#43109](https://github.com/vllm-project/vllm/issues/43109) [Bug]: Triton Attention AssertionError on supported kv_cache_dtype
- [#43172](https://github.com/vllm-project/vllm/issues/43172) [Usage]: GLM-5/GLM-5.1 deployment on L40 with vLLM
- [#43207](https://github.com/vllm-project/vllm/issues/43207) [Feature]: GRPC interface for Pooling
- [#43222](https://github.com/vllm-project/vllm/issues/43222) [Bug]: Possible to get GPU OOM for DP/EP
- [#43235](https://github.com/vllm-project/vllm/issues/43235) [RFC] NSA is architecturally incompatible with NVIDIA consumer/workstation GPUs — MLA is the only viable sparse attention path
- [#43239](https://github.com/vllm-project/vllm/issues/43239) [Usage]: Support Gemma 4 E4B, 31B, 26B-A4B, and assistant variants (MTP) on TPU v6e 1x1 with vLLM
- [#55679](https://github.com/vllm-project/vllm/issues/55679) [Feature]: KV cache events — bind-time ephemeral port allocation and a discovery API
- [#57653](https://github.com/vllm-project/vllm/issues/57653) [CI Failure]: MI250 Multimodal Processor - test_common.py::test_processing_correctness[DeepSeek-V4.1-Flash]
- [#57660](https://github.com/vllm-project/vllm/issues/57660) auth-test

### SGLang (`sgl-project/sglang`)

**Stars:** 36,177 · **Open issues:** 5,391 · **Last push:** <1h ago

On September 20, 2026, there were no new releases for SGLang, but significant development activity occurred with numerous merged pull requests. Notable updates include the implementation of MegaMoE blocks for DeepGEMM, enhancements to the HiCache auto-sizing with the host memory, and the fixing of disaggregation issues in the GLM-5.2 model. Additionally, improvements in logging and scheduler efficiency were made, particularly in prefill burst counting and resource management across various components. Among the new issues, a critical bug was reported regarding the FlashInfer autotune cache being discarded at startup under specific conditions, indicating a potential challenge for parallelism with MoE experts.

#### ✅ Merged PRs
- [#38080](https://github.com/sgl-project/sglang/pull/38080) [MegaMoE] Wire Qwen MoE blocks to DeepGEMM MegaMoE (MXFP4 and NVFP4 experts)
- [#39378](https://github.com/sgl-project/sglang/pull/39378) Fix disagg PP MTP for GLM-5.2
- [#40038](https://github.com/sgl-project/sglang/pull/40038) [Logprob] Serve input-logprob temporaries from CUDA-graph-pool dead space
- [#40006](https://github.com/sgl-project/sglang/pull/40006) [Scheduler] Count complete prefill bursts and their tokens
- [#40135](https://github.com/sgl-project/sglang/pull/40135) [HiCache] Auto-size the host pool to fit available host memory
- [#40205](https://github.com/sgl-project/sglang/pull/40205) [AMD][DSV4] fix: skip compressed-KV metadata on the draft worker in the HIP radix backend
- [#39968](https://github.com/sgl-project/sglang/pull/39968) [AMD] dsv4: pick kv_splits per index stream, not by occupancy alone
- [#39095](https://github.com/sgl-project/sglang/pull/39095) [DSV4] Chunk the indexer MQA logits by query rows under a free-memory budget
- [#37152](https://github.com/sgl-project/sglang/pull/37152) [ROCm] Widen the HiCache JIT copy rounds and enable the K-only host pool
- [#40353](https://github.com/sgl-project/sglang/pull/40353) [Fix] Keep mHC context out of non-V4 compiled MoE forwards
- [#39704](https://github.com/sgl-project/sglang/pull/39704) [DSV4.1] Reduce mHC, metadata and small-batch router overhead
- [#40349](https://github.com/sgl-project/sglang/pull/40349) [CI] Propagate full-run fast-fail policy to reusable workflows
- [#38220](https://github.com/sgl-project/sglang/pull/38220) [perf] Optimize w4a8 MoE for glm5.2 on H200
- [#39957](https://github.com/sgl-project/sglang/pull/39957) [DSV4.1] Big fused wo_a quant
- [#40265](https://github.com/sgl-project/sglang/pull/40265) [Cleanup] Deduplicate kernel tests, diffusion fixtures and benchmark helpers
- [#40325](https://github.com/sgl-project/sglang/pull/40325) [Fix] Repair CI fixtures and ROCm speculative tree device checks
- [#40004](https://github.com/sgl-project/sglang/pull/40004) [Metrics] Propagate idle gaps across all scheduler loops
- [#40308](https://github.com/sgl-project/sglang/pull/40308) Fix mxfp4 padding test stubbing an accessor the module no longer imports
- [#40071](https://github.com/sgl-project/sglang/pull/40071) Record a process's placement at publish, not at group build
- [#40290](https://github.com/sgl-project/sglang/pull/40290) [Test] Fix fusion-group mocks after runtime context migration
- [#40304](https://github.com/sgl-project/sglang/pull/40304) [HiCache] Size MHA host pools from device row width
- [#40303](https://github.com/sgl-project/sglang/pull/40303) [Lint] Fix logits processor formatting on main
- [#40222](https://github.com/sgl-project/sglang/pull/40222) [Runtime] Add decode CUDA graph hooks for eager logits processing
- [#40262](https://github.com/sgl-project/sglang/pull/40262) Fix prefetch attempt cleanup on abort
- [#40003](https://github.com/sgl-project/sglang/pull/40003) [PD] Skip singleton transfer-status all-reduces
- [#40259](https://github.com/sgl-project/sglang/pull/40259) fix: restrict SafeUnpickler to explicit globals
- [#39088](https://github.com/sgl-project/sglang/pull/39088) Fix GLM-OCR MTP multimodal embeddings and positions
- [#38792](https://github.com/sgl-project/sglang/pull/38792) [PP][DeepSeek V4] Overlap communication and optimize SM120 prefill
- [#38604](https://github.com/sgl-project/sglang/pull/38604) fix(openai): recover logprobs token bytes from token_id (UTF-8 fragments)
- [#40104](https://github.com/sgl-project/sglang/pull/40104) [Diffusion] Cache-DiT 1.5.1: DMD Calibrator, SVDQuant DQ, etc.
- [#38750](https://github.com/sgl-project/sglang/pull/38750) [Multimodal] Avoid CUDA placement on non-CUDA platforms
- [#40263](https://github.com/sgl-project/sglang/pull/40263) [PD] Allow decode radix cache and HiCache L1/L2 with DCP
- [#40208](https://github.com/sgl-project/sglang/pull/40208) [Kernel] Fuse hc_combine_norm for mid-size verify batches (9-96 rows)
- [#37547](https://github.com/sgl-project/sglang/pull/37547) [diffusion] feature: out of tree platform support
- [#40197](https://github.com/sgl-project/sglang/pull/40197) [Refactor] Deduplicate kernel helpers and remove unused code
- [#40264](https://github.com/sgl-project/sglang/pull/40264) [Test] Drop dead and strictly-subsumed CI test registrations
- [#40070](https://github.com/sgl-project/sglang/pull/40070) Name the two widths of the WORLD group

#### 🐛 New Issues
- [#40320](https://github.com/sgl-project/sglang/issues/40320) [Bug] FlashInfer autotune cache is discarded every boot under MoE expert parallelism (EP>1): per-rank shapes never agree, so the fused-MoE tactic is re-drawn each start 💬1
- [#40364](https://github.com/sgl-project/sglang/issues/40364) [Bug] DP scheduler SIGQUIT terminates the DataParallelController instead of notifying the Engine 💬1
- [#40360](https://github.com/sgl-project/sglang/issues/40360) [Bug] LMCache MP session leaks on pre-load-back abort, but the abort hook cannot safely finalize it 💬1
- [#40285](https://github.com/sgl-project/sglang/issues/40285) [Bug] glm5_next: MTP layer (layers.45) not skipped for 'model.language_model.*' names — local-inference-lab/GLM-5.3-Flash-NVFP4 (MXFP8 MTP experts) fails to load with a w2 shape mismatch 💬1
- [#40286](https://github.com/sgl-project/sglang/issues/40286) [Bug] GLM-5.3-Flash has no usable DSA attention backend on SM121 (DGX Spark): trtllm SM100-only, tilelang exceeds dynamic smem, triton ROCm-only, flashinfer_sparse_mla gated to GlmMoeDsa archs 💬1
- [#40370](https://github.com/sgl-project/sglang/issues/40370) Please delete — filed to wrong repo by mistake
- [#40305](https://github.com/sgl-project/sglang/issues/40305) [Feature] Make SGLANG_DEBUG_MEMORY_POOL effective on the default page_size=1 allocator

#### 🔒 Closed Issues
- [#15194](https://github.com/sgl-project/sglang/issues/15194) [Roadmap] Quantization Modifications
- [#31894](https://github.com/sgl-project/sglang/issues/31894) [Feature] Feature LoRA support for the CPU engine (Intel Xeon) — pin_memory=True hardcoded in lora/layers.py crashes on CPU-only systems
- [#31021](https://github.com/sgl-project/sglang/issues/31021) [Feature] Dev / hot-reload debug mode: skip weight loading and re-run graph capture + serving after code changes
- [#31365](https://github.com/sgl-project/sglang/issues/31365) [GB10/sm121] Several sgl-kernel tests fail instead of skip on consumer Blackwell (major-only capability guards)
- [#31970](https://github.com/sgl-project/sglang/issues/31970) [Bug] Mamba slot-donation debug asserts force a per-request cudaStreamSynchronize on the scheduler thread
- [#31954](https://github.com/sgl-project/sglang/issues/31954) [Feature] Anti-starvation aging for the lpm schedule policy
- [#31953](https://github.com/sgl-project/sglang/issues/31953) [Feature] Runtime schedule_policy switching without an engine reload
- [#31938](https://github.com/sgl-project/sglang/issues/31938) [Bug] DSV4-Flash BF16 model + A2 dual machine，start failed, error is "socVersion [ascend910b] does not support opType [HcPre]"
- [#31929](https://github.com/sgl-project/sglang/issues/31929) [Bug] _fwd_kernel_ep_scatter_1 may lead to illegal memory access.
- [#31912](https://github.com/sgl-project/sglang/issues/31912) ReDoS in PythonicDetector: a truncated tool call pins a worker CPU (catastrophic regex backtracking)
- [#31011](https://github.com/sgl-project/sglang/issues/31011) [Bug] Intel XPU: TP token-id sync corrupted — xccl all_reduce(MIN/MAX) silently does SUM, breaking grammar/structured decoding.
- [#31890](https://github.com/sgl-project/sglang/issues/31890) [Bug] --tokenizer-worker-num > 1 crashes every embedding response: BatchEmbeddingOutput repack drops retraction_counts (and time_stats / cached_tokens_details / pooled_hidden_states)
- [#31861](https://github.com/sgl-project/sglang/issues/31861) [Bug] AMX MoE router path does not enforce FP32 gating logits (and cannot handle FP32 router weights)
- [#40152](https://github.com/sgl-project/sglang/issues/40152) [Feature] Track DeepSeek-V4.1 support on the main branch
- [#40370](https://github.com/sgl-project/sglang/issues/40370) Please delete — filed to wrong repo by mistake

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 128,859 · **Open issues:** 2,516 · **Last push:** <1h ago

On September 20, 2026, llama.cpp released several significant updates, including b11057 which introduces a dedicated Ling 3.0 parser that preemptively opens the think block in generation prompts. Additionally, b11056 enabled I32 GET_ROWS support, while b11054 allowed for TOP_K operations within the hexagon framework. Among the merged pull requests, noteworthy fixes include improvements to the Gemma 4 required tool grammar and enhancements in server startup log messages. However, a persistent issue has emerged concerning an Eval bug, where Qwen 3.8 Flash Next MTP fails to load, posing challenges for users during inference on mobile GPU setups.

#### 🚀 New Releases
- [b11057](https://github.com/ggml-org/llama.cpp/releases/tag/b11057) b11057
- [b11056](https://github.com/ggml-org/llama.cpp/releases/tag/b11056) b11056
- [b11055](https://github.com/ggml-org/llama.cpp/releases/tag/b11055) b11055
- [b11054](https://github.com/ggml-org/llama.cpp/releases/tag/b11054) b11054
- [b11053](https://github.com/ggml-org/llama.cpp/releases/tag/b11053) b11053
- [b11052](https://github.com/ggml-org/llama.cpp/releases/tag/b11052) b11052
- [b11050](https://github.com/ggml-org/llama.cpp/releases/tag/b11050) b11050
- [b11049](https://github.com/ggml-org/llama.cpp/releases/tag/b11049) b11049
- [b11048](https://github.com/ggml-org/llama.cpp/releases/tag/b11048) b11048
- [b11047](https://github.com/ggml-org/llama.cpp/releases/tag/b11047) b11047

#### ✅ Merged PRs
- [#29115](https://github.com/ggml-org/llama.cpp/pull/29115) chat : fix gemma4 required tool grammar
- [#28682](https://github.com/ggml-org/llama.cpp/pull/28682) chat: add dedicated Ling 3.0 (Bailing V3) parser
- [#29116](https://github.com/ggml-org/llama.cpp/pull/29116) hexagon: enable I32 GET_ROWS
- [#29114](https://github.com/ggml-org/llama.cpp/pull/29114) hexagon: add support for GEGLU_QUICK
- [#29113](https://github.com/ggml-org/llama.cpp/pull/29113) hexagon: enable support for TOP_K op
- [#29125](https://github.com/ggml-org/llama.cpp/pull/29125) server : improve startup log messages
- [#29127](https://github.com/ggml-org/llama.cpp/pull/29127) json-schema : accept escaped hyphen in regex patterns
- [#28948](https://github.com/ggml-org/llama.cpp/pull/28948) metal : add MoE and SSM_CONV fusion optimizations
- [#29122](https://github.com/ggml-org/llama.cpp/pull/29122) metal : fix FA support checks
- [#29084](https://github.com/ggml-org/llama.cpp/pull/29084) test-llama-archs : generate dummy test vocab
- [#29000](https://github.com/ggml-org/llama.cpp/pull/29000) metal : support qwen4exp hc ops
- [#28389](https://github.com/ggml-org/llama.cpp/pull/28389) cuda : fix CUB argsort corruption caused by in-place keys

#### 🐛 New Issues
- [#29164](https://github.com/ggml-org/llama.cpp/issues/29164) Misc. bug: Model loads into mobile GPU CUDA0, but inference happens on iGPU `bug-unconfirmed` 💬1
- [#29159](https://github.com/ggml-org/llama.cpp/issues/29159) /v1/responses: reasoning item with "summary": null rejected as "Cannot determine type of 'item'" 💬1
- [#29148](https://github.com/ggml-org/llama.cpp/issues/29148) Eval bug: Qwen 3.8 Flash Next MTP fails to load `bug-unconfirmed` 💬1
- [#29130](https://github.com/ggml-org/llama.cpp/issues/29130) Feature Request: Slow prompt processing when MoE experts are read from disk via mmap - an optimization using O_DIRECT `enhancement` 💬1
- [#29142](https://github.com/ggml-org/llama.cpp/issues/29142) Eval bug: hardcoded 32GB VMM pool reservation (cuMemAddressReserve) fails on Jetson Orin iGPU — all multimodal image requests crash `bug-unconfirmed` 💬1
- [#29163](https://github.com/ggml-org/llama.cpp/issues/29163) Misc. bug: interrupted connection trashes KV cache `bug-unconfirmed`
- [#29154](https://github.com/ggml-org/llama.cpp/issues/29154) Eval bug: ubatch size leads to freezing of GPU+eGPU setup `bug-unconfirmed`
- [#29149](https://github.com/ggml-org/llama.cpp/issues/29149) Eval bug: qwen4exp (Qwen3.8-Flash-Next) livelocks during model load on HIP; identical config loads on Vulkan
- [#29145](https://github.com/ggml-org/llama.cpp/issues/29145) Qwen 3.5 MTP fails to load compact draft vocabularies (missing d2t mapping support)
- [#29138](https://github.com/ggml-org/llama.cpp/issues/29138) Misc. bug: ggml-rpc-server crashes on vulkan when a duplicate copy of libggml-vulkan is dlopened `bug-unconfirmed`
- [#29134](https://github.com/ggml-org/llama.cpp/issues/29134) Metal: ~6% token-generation regression on gemma-4-26B-A4B since #28164 (fusion packing chains patterns, reducing concurrency)
- [#29131](https://github.com/ggml-org/llama.cpp/issues/29131) Misc. bug: RISC-V RVV IQ4_NL/MXFP4 dot product errors with an odd number of blocks due to missing tail handling `bug-unconfirmed`
- [#29129](https://github.com/ggml-org/llama.cpp/issues/29129) Feature Request: Video with audio support `enhancement`
- [#29128](https://github.com/ggml-org/llama.cpp/issues/29128) Misc. bug: LoRA loader accepts a MoE expert-count mismatch, causing an OOB write in CPU MUL_MAT_ID `bug-unconfirmed`
- [#29119](https://github.com/ggml-org/llama.cpp/issues/29119) Eval bug: can not run models `bug-unconfirmed`
- [#29118](https://github.com/ggml-org/llama.cpp/issues/29118) Misc. bug: /props publishes the randomized media_marker, defeating PR #21962's collision defense

#### 🔒 Closed Issues
- [#21545](https://github.com/ggml-org/llama.cpp/issues/21545) server: Add model capabilities information (instruction, embedding etc.)
- [#23609](https://github.com/ggml-org/llama.cpp/issues/23609) Feature Request: Expose Custom Parameters in Web GUI
- [#24729](https://github.com/ggml-org/llama.cpp/issues/24729) Windows OpenVINO builds fail to start due to missing OpenSSL dependencies and incorrect release packaging
- [#26010](https://github.com/ggml-org/llama.cpp/issues/26010) [SYCL] Low generation throughput on Intel Arc compared to Vulkan backend
- [#20675](https://github.com/ggml-org/llama.cpp/issues/20675) Refactor: MCP client on CLI
- [#23622](https://github.com/ggml-org/llama.cpp/issues/23622) UI Bug: Editing assistant message duplicates reasoning block and corrupts stored content
- [#23854](https://github.com/ggml-org/llama.cpp/issues/23854) Misc. bug: The title should ideally be less than 64 characters in length
- [#25171](https://github.com/ggml-org/llama.cpp/issues/25171) Eval bug: Deepseek V4 Flash forgets everything
- [#26470](https://github.com/ggml-org/llama.cpp/issues/26470) Metal: Gemma 4 E4B Q8_0 decode regression (~13%) between b9730 and b10219; qwen models unaffected
- [#23407](https://github.com/ggml-org/llama.cpp/issues/23407) Eval bug: Multi-modal Qwen3.5 on llama.cpp triggered a CUDA error
- [#24164](https://github.com/ggml-org/llama.cpp/issues/24164) Misc. bug: WEBUI does not uploads audio ogg files
- [#25944](https://github.com/ggml-org/llama.cpp/issues/25944) Eval bug: When using AI programs with llama.ccp as backend there is often no rocognition of some ROCm hardware when selecting hip forcing vulkan use
- [#26451](https://github.com/ggml-org/llama.cpp/issues/26451) Compile bug: RHEL8 / too low glibc cannot compile with default flags
- [#29089](https://github.com/ggml-org/llama.cpp/issues/29089) PEG→GBNF: `until()` can stop mid-delimiter, leaving Gemma 4 tool calls unconstrained under `tool_choice: required`
- [#24345](https://github.com/ggml-org/llama.cpp/issues/24345) Feature: Improve Message Steering & Queuing features
- [#24348](https://github.com/ggml-org/llama.cpp/issues/24348) Feature: Improve Tool Permissions management & logic
- [#26094](https://github.com/ggml-org/llama.cpp/issues/26094) Eval bug: quantized Qwen3.5 `ssm_out` falls back to CPU for` batch>1` on Hexagon
- [#26630](https://github.com/ggml-org/llama.cpp/issues/26630) Build: `-DGGML_CPU_KLEIDIAI=ON`'s documented build line silently compiles zero `kai_run_matmul` kernels on gcc 13.3 + Cortex-X925 (banner still reports `KLEIDIAI = 1`); cost grows with model size
- [#26648](https://github.com/ggml-org/llama.cpp/issues/26648) Eval bug: llama-sampler.cpp:1100: Assertion 'found' failed with --spec-type draft-mtp on long context
- [#29134](https://github.com/ggml-org/llama.cpp/issues/29134) Metal: ~6% token-generation regression on gemma-4-26B-A4B since #28164 (fusion packing chains patterns, reducing concurrency)

### Ollama (`ollama/ollama`)

**Stars:** 181,278 · **Open issues:** 4,036 · **Last push:** 4h ago

On September 20, 2026, Ollama did not release any new versions or merge any pull requests, indicating a routine maintenance day. However, the team did see a surge of new issues, with notable discussions emerging around #18541, which highlights a regression in Ollama 0.34.2 when using MTP speculative decoding with Qwen 3.8 27B, and #18548, addressing the absence of Intel QuickSync iGPU utilization. Other issues of interest include #18549, seeking to allow users to select installation and model storage drives in the Windows installer, and #18534, where an OpenAI-compatible endpoint is reported to silently ignore `reasoning_content` on assistant messages, affecting replayed reasoning for DeepSeek models. These developments suggest ongoing challenges and user feedback as the community engages with Ollama's functionalities.

#### 🐛 New Issues
- [#18548](https://github.com/ollama/ollama/issues/18548) Not utilizing Intel QuickSync iGPU `bug` 💬6
- [#18541](https://github.com/ollama/ollama/issues/18541) Ollama 0.34.2 MTP speculative decoding regression with Qwen3.8 27B `bug` 💬1
- [#18546](https://github.com/ollama/ollama/issues/18546) Support Qwen 3.5 MTP FastMTP draft-vocabulary trim (d2t mapping) 💬1
- [#18542](https://github.com/ollama/ollama/issues/18542) typical_p is no longer supported breaks existing clients that cannot omit the parameter `bug`
- [#18549](https://github.com/ollama/ollama/issues/18549) Allow selecting installation and model storage drives in Windows installer `feature request`
- [#18534](https://github.com/ollama/ollama/issues/18534) OpenAI-compatible endpoint silently ignores `reasoning_content` on assistant messages, dropping replayed reasoning for DeepSeek models
- [#18547](https://github.com/ollama/ollama/issues/18547) Model not downloading on newer versions `bug`
- [#18545](https://github.com/ollama/ollama/issues/18545) Support downloading both runtimes rocm & cuda `feature request`
- [#18544](https://github.com/ollama/ollama/issues/18544) Support CLAUDE_CODE_AUTO_MODE_SERVER=1 `feature request`
- [#18539](https://github.com/ollama/ollama/issues/18539) Chat, Code & Work is missing! `bug`
- [#18540](https://github.com/ollama/ollama/issues/18540) MLX: mlx-community Gemma 4 MoE imports but fails to load: layer 0: missing MoE expert weights (experts.switch_glu layout)

#### 🔒 Closed Issues
- [#18522](https://github.com/ollama/ollama/issues/18522) gpt-oss:20b (MXFP4) deterministic llama-server abort in CUDA ADD_ID on a short two-message /api/chat (0.32.13 and 0.33.3)
- [#18548](https://github.com/ollama/ollama/issues/18548) Not utilizing Intel QuickSync iGPU
- [#18527](https://github.com/ollama/ollama/issues/18527) [Cloud] deepseek-v4.1-flash silently discards all image input while advertising `vision` in capabilities
- [#18483](https://github.com/ollama/ollama/issues/18483) minicpm5-2b native tool calls never parse
- [#18529](https://github.com/ollama/ollama/issues/18529) deepseek3 renderer drops `thinking` on assistant messages that carry tool calls, although its own `isCurrentTurn` gate would admit them, impacting DS Flash Ollama Cloud
- [#18541](https://github.com/ollama/ollama/issues/18541) Ollama 0.34.2 MTP speculative decoding regression with Qwen3.8 27B
- [#18546](https://github.com/ollama/ollama/issues/18546) Support Qwen 3.5 MTP FastMTP draft-vocabulary trim (d2t mapping)
- [#18547](https://github.com/ollama/ollama/issues/18547) Model not downloading on newer versions
- [#18539](https://github.com/ollama/ollama/issues/18539) Chat, Code & Work is missing!

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,165 · **Open issues:** 5,178 · **Last push:** <1h ago

On September 20, 2026, there were no new releases for LiteLLM, but several significant pull requests were merged. Notably, the feature enhancements included the ability to run hosted_vllm batches inside LiteLLM and improvements to the user interface, allowing users to configure web search interception from the Admin UI. Key fixes addressed issues with the integration-cost and proxy_e2e_anthropic_messages CircleCI jobs, along with backports of the GPT-6 reasoning gate fix to stable versions. Among the new issues, a critical bug was reported regarding the Responses API stream events, where null values were lost during pass-through, indicating a regression that could impact functionality.

#### ✅ Merged PRs
- [#42058](https://github.com/BerriAI/litellm/pull/42058) chore(prices): sync OpenRouter prices: 5 models
- [#41840](https://github.com/BerriAI/litellm/pull/41840) fix(team): emit audit events for member_delete and role changes and carry the final roster on team create
- [#42059](https://github.com/BerriAI/litellm/pull/42059) test(e2e): backport the Nova Sonic nova-2-sonic model fix to rc/1.102.0
- [#42053](https://github.com/BerriAI/litellm/pull/42053) test(e2e): point the Nova Sonic realtime test at nova-2-sonic
- [#41740](https://github.com/BerriAI/litellm/pull/41740) feat(otel v2): opt-in llm_only span scope for Langfuse destinations and the operator Langfuse exporter
- [#42006](https://github.com/BerriAI/litellm/pull/42006) chore(prices): sync OpenRouter prices: 2 models
- [#42048](https://github.com/BerriAI/litellm/pull/42048) fix(test): unbreak the integration-cost and proxy_e2e_anthropic_messages CircleCI jobs on main
- [#42042](https://github.com/BerriAI/litellm/pull/42042) feat(ui): report whether the serving proxy has applied web search interception
- [#42033](https://github.com/BerriAI/litellm/pull/42033) test(mcp): cover SDK redirect compatibility
- [#42040](https://github.com/BerriAI/litellm/pull/42040) revert(e2e): remove MCP OAuth SSO and cold restart tests
- [#42039](https://github.com/BerriAI/litellm/pull/42039) Revert "test(mcp): verify scoped execution and OAuth credential isolation"
- [#42037](https://github.com/BerriAI/litellm/pull/42037) refactor(rust): rename legacy callback adapter crate
- [#41617](https://github.com/BerriAI/litellm/pull/41617) feat(router): add maintained Fuse model and harness presets
- [#42001](https://github.com/BerriAI/litellm/pull/42001) fix(auto-router): show heuristic v2 score estimates in routing details
- [#41177](https://github.com/BerriAI/litellm/pull/41177) fix(proxy): estimate auto-router baseline costs from durable cache history
- [#42007](https://github.com/BerriAI/litellm/pull/42007) feat(ui): configure web search interception from the Admin UI
- [#41909](https://github.com/BerriAI/litellm/pull/41909) test(e2e): cover MCP OAuth SSO and cold restart persistence
- [#41731](https://github.com/BerriAI/litellm/pull/41731) test(mcp): verify scoped execution and OAuth credential isolation
- [#42031](https://github.com/BerriAI/litellm/pull/42031) fix(azure): drop tool_choice when the request has no tools (internal copy of #41781)
- [#41781](https://github.com/BerriAI/litellm/pull/41781) fix(azure): tool choice without tools causes 400
- [#42027](https://github.com/BerriAI/litellm/pull/42027) fix(proxy): forward stream response attributes through the hook boundary and merge logged applied_guardrails
- [#41942](https://github.com/BerriAI/litellm/pull/41942) feat(batches): run hosted_vllm batches inside LiteLLM
- [#42002](https://github.com/BerriAI/litellm/pull/42002) fix(bedrock): backport #41870, the GPT-6 reasoning gate fix, and the Python 3.13 image pin to stable/1.98.x for v1.98.1
- [#42000](https://github.com/BerriAI/litellm/pull/42000) fix(bedrock): backport #41870 and the GPT-6 reasoning gate fix to stable/1.100.x for v1.100.2
- [#41681](https://github.com/BerriAI/litellm/pull/41681) fix(auth): inherit org alias, budget and rate limits for JWT and team-linked keys
- [#41997](https://github.com/BerriAI/litellm/pull/41997) fix(proxy): block project requests when max_budget is 0
- [#42009](https://github.com/BerriAI/litellm/pull/42009) fix(proxy): close the config-ownership gaps QA found in the settings store
- [#42025](https://github.com/BerriAI/litellm/pull/42025) chore: bump litellm-enterprise 0.1.68 -> 0.1.69, litellm-proxy-extras 0.4.99 -> 0.4.100
- [#42008](https://github.com/BerriAI/litellm/pull/42008) test(e2e): stop the config suite locking itself out of the shared proxy
- [#41991](https://github.com/BerriAI/litellm/pull/41991) fix(otel v2): map Responses API output onto the Langfuse generation output
- [#42010](https://github.com/BerriAI/litellm/pull/42010) test(integration): native responses and messages cost cases
- [#42003](https://github.com/BerriAI/litellm/pull/42003) fix(terraform): unlink the registry docs entries that 404 on click
- [#41987](https://github.com/BerriAI/litellm/pull/41987) fix(rust): refuse native routes in processes forked after the runtime started
- [#41995](https://github.com/BerriAI/litellm/pull/41995) test(unified_google_tests): use the Vertex global endpoint and retry 429s with backoff
- [#41948](https://github.com/BerriAI/litellm/pull/41948) ci(unit): fail a hung test in 120s with a traceback instead of idling the shard to its step timeout
- [#41950](https://github.com/BerriAI/litellm/pull/41950) fix(proxy): keep request metadata out of the cost tracking failure alert
- [#41933](https://github.com/BerriAI/litellm/pull/41933) fix(policy_engine): deliver guardrail text rewrites on multi-choice, unfinished, and envelope-less streams
- [#41930](https://github.com/BerriAI/litellm/pull/41930) fix(exceptions): keep internal_server_error as the public type of an upstream 500
- [#41926](https://github.com/BerriAI/litellm/pull/41926) fix(proxy): register transcribe as a known provider for model grants
- [#41918](https://github.com/BerriAI/litellm/pull/41918) fix(websearch): forward the deployment api_base to agentic follow-up calls on /v1/messages
- [#41905](https://github.com/BerriAI/litellm/pull/41905) fix(websearch_interception): surface a failed search as a web_search_tool_result_error block and end the turn
- [#41485](https://github.com/BerriAI/litellm/pull/41485) feat(proxy): add RFC 8693 token exchange for IdP JWTs on the gateway token endpoint
- [#41996](https://github.com/BerriAI/litellm/pull/41996) chore(prices): sync OpenRouter prices: 2 models
- [#41718](https://github.com/BerriAI/litellm/pull/41718) refactor(mcp): upgrade SDK2 while preserving legacy gateway behavior
- [#41986](https://github.com/BerriAI/litellm/pull/41986) revert(guardrails): drop the scoped request conversation and tools from post-call scans (#41220)
- [#41993](https://github.com/BerriAI/litellm/pull/41993) ci: remove auto-merge-price-sync workflow, the Devin sync automation merges price PRs
- [#41992](https://github.com/BerriAI/litellm/pull/41992) fix(ocr): set DeepSeek OCR sampling defaults
- [#41833](https://github.com/BerriAI/litellm/pull/41833) chore(prices): sync OpenRouter prices: 172 models, 2 new
- [#40729](https://github.com/BerriAI/litellm/pull/40729) fix(ui): show user attribution in Top Virtual Keys usage tables
- [#41964](https://github.com/BerriAI/litellm/pull/41964) fix(model_prices): drop anthropic deprecation floors and correct azure gpt-4.1-nano retirement date
- [#41787](https://github.com/BerriAI/litellm/pull/41787) fix(llmguard): accept proxy async call types
- [#41939](https://github.com/BerriAI/litellm/pull/41939) fix(proxy): return 400 instead of 500 for /v1/responses without input
- [#41920](https://github.com/BerriAI/litellm/pull/41920) fix(caching): scope automatic breakpoints to supported Claude transports
- [#41982](https://github.com/BerriAI/litellm/pull/41982) fix(otel v2): summarize embedding vectors as Langfuse observation output
- [#41985](https://github.com/BerriAI/litellm/pull/41985) feat(proxy): say when a stored setting is ignored because the config file owns it
- [#41915](https://github.com/BerriAI/litellm/pull/41915) fix(router): enforce model tpm limits against shared redis usage across replicas
- [#41981](https://github.com/BerriAI/litellm/pull/41981) refactor(rust): use typed pyo3 APIs instead of getattr/import strings
- [#41977](https://github.com/BerriAI/litellm/pull/41977) feat(ocr): add Rust-only Textract and sign provider requests after host hooks
- [#41966](https://github.com/BerriAI/litellm/pull/41966) chore(prices): sync Azure prices: 5 models, 5 deprecated
- [#41328](https://github.com/BerriAI/litellm/pull/41328) test(integration): literal request/response cost tracking suite on a test-owned cost map
- [#41946](https://github.com/BerriAI/litellm/pull/41946) test(response_metadata): anchor detailed-timing test on a fixed instant instead of wall clock
- [#41975](https://github.com/BerriAI/litellm/pull/41975) test(utils): isolate dated model fallback from pricing additions
- [#41969](https://github.com/BerriAI/litellm/pull/41969) refactor(rust): centralize layered settings resolution
- [#41931](https://github.com/BerriAI/litellm/pull/41931) fix(proxy): refuse runtime writes to config-owned settings
- [#41971](https://github.com/BerriAI/litellm/pull/41971) test(cost): point dated snapshot tests at a date the cost map cannot carry
- [#41960](https://github.com/BerriAI/litellm/pull/41960) fix(cost): bill DeepSeek V4.1 Flash and V4 Pro at off-peak rates outside peak hours
- [#41949](https://github.com/BerriAI/litellm/pull/41949) fix(proxy): /key/bulk_update writes only the fields each item carries
- [#41423](https://github.com/BerriAI/litellm/pull/41423) fix(cost): resolve dated openai/azure snapshots to their undated cost map entry
- [#41943](https://github.com/BerriAI/litellm/pull/41943) fix(proxy): keep the raw client model out of spend logs for rejections outside the router
- [#40147](https://github.com/BerriAI/litellm/pull/40147) fix(azure): send the resolved Entra ID token on image generation requests
- [#41940](https://github.com/BerriAI/litellm/pull/41940) fix(rag): resolve registry stores on /v1/rag/ingest and reject providers without ingestion
- [#41953](https://github.com/BerriAI/litellm/pull/41953) fix(responses): drop tool_search and local_shell in the chat completions bridge
- [#41952](https://github.com/BerriAI/litellm/pull/41952) fix(masker): memoize shared nodes and fail closed past the depth cap
- [#41234](https://github.com/BerriAI/litellm/pull/41234) fix(utils): reject an untranslatable tool_choice with a 400 instead of a 500
- [#41934](https://github.com/BerriAI/litellm/pull/41934) feat(batches): support Mistral files/batches and per-page OCR batch cost tracking (internal copy of #40484)
- [#41947](https://github.com/BerriAI/litellm/pull/41947) refactor(types): replace Any with proven types in 6 files
- [#41237](https://github.com/BerriAI/litellm/pull/41237) fix(cost): carry image and video input tokens through the Responses usage bridge (internal copy of #36887)
- [#39102](https://github.com/BerriAI/litellm/pull/39102) fix(alerting): clarify budget threshold messages
- [#41941](https://github.com/BerriAI/litellm/pull/41941) fix(guardrails): stop the Javelin api_version default leaking into Azure Content Safety
- [#41938](https://github.com/BerriAI/litellm/pull/41938) fix(anthropic): keep cache_control for Gemini targets on /v1/messages and normalize Anthropic ttl units
- [#41935](https://github.com/BerriAI/litellm/pull/41935) fix(team): apply team_member_budget updates to members still on the team default (backport of #41347 to rc/1.102.0)
- [#41685](https://github.com/BerriAI/litellm/pull/41685) fix(proxy): dispatch llm_api_check moderation through during_call_hook
- [#40399](https://github.com/BerriAI/litellm/pull/40399) feat(websearch): let the model emit objective + multi-query search shapes
- [#41843](https://github.com/BerriAI/litellm/pull/41843) fix(proxy): unpin cost-map pricing copied into model_info and report pricing overrides
- [#41564](https://github.com/BerriAI/litellm/pull/41564) fix(responses): announce message item before text events in the chat completions bridge
- [#41924](https://github.com/BerriAI/litellm/pull/41924) fix(proxy): parse role_permissions where it is read
- [#41893](https://github.com/BerriAI/litellm/pull/41893) fix(responses): restore encrypted_content and apply affinity on the native WebSocket relay
- [#34267](https://github.com/BerriAI/litellm/pull/34267) feat(proxy): serve the Claude Code gateway protocol under /claude_code_gateway
- [#41921](https://github.com/BerriAI/litellm/pull/41921) chore: consolidate CLAUDE.md into AGENTS.md
- [#41721](https://github.com/BerriAI/litellm/pull/41721) feat(vertex_ai): stream Chirp speech-to-text over /v1/realtime
- [#41897](https://github.com/BerriAI/litellm/pull/41897) feat(rust): add litellm-http client pool and inject it into the OCR route
- [#41914](https://github.com/BerriAI/litellm/pull/41914) feat(xai): add speech-to-text (Grok Voice Transcribe) via /v1/audio/transcriptions
- [#41891](https://github.com/BerriAI/litellm/pull/41891) fix(timing): anchor response duration and overhead at proxy receive time
- [#41917](https://github.com/BerriAI/litellm/pull/41917) fix(cost_calc): default fireworks cached input to the documented 50% discount when the map has no cache-read rate
- [#41904](https://github.com/BerriAI/litellm/pull/41904) fix(bedrock): sign batch retrieve and cancel with deployment credentials when AWS_BEARER_TOKEN_BEDROCK is set
- [#41916](https://github.com/BerriAI/litellm/pull/41916) feat(proxy): let team admins manage projects via team_admin_editable_team_fields
- [#41910](https://github.com/BerriAI/litellm/pull/41910) ci(issues): comment which release carries the fix when a pull request closes an issue
- [#41911](https://github.com/BerriAI/litellm/pull/41911) fix(rate_limiter): render the 429 reset time in UTC as labelled
- [#41847](https://github.com/BerriAI/litellm/pull/41847) fix(schema): classify off_peak_pricing as a structured object in the model prices schema generator
- [#41667](https://github.com/BerriAI/litellm/pull/41667) feat(mcp): allowlist MCP client applications at the gateway
- [#41902](https://github.com/BerriAI/litellm/pull/41902) chore(model_info): backfill reseller Gemini entries from provider catalogs and prune retired ids

#### 🐛 New Issues
- [#41963](https://github.com/BerriAI/litellm/issues/41963) [Bug]: /v1/responses does not normalize a string `input` before provider dispatch `llm translation` 💬1
- [#41954](https://github.com/BerriAI/litellm/issues/41954) [Bug]: /v1/messages bridge moves tool_result cache_control into tool_result.content for order-based model groups (Anthropic rejects with 400) `llm translation` 💬1
- [#42005](https://github.com/BerriAI/litellm/issues/42005) [Bug]: Responses-to-Chat bridge loses native tool calls on multi-turn replay and leaks reasoning as assistant text `llm translation` 💬1
- [#41972](https://github.com/BerriAI/litellm/issues/41972) fix(proxy): Responses API stream events lose every null in pass-through — _serialize_streaming_chunk applies exclude_none to Responses events, so response.completed is a strict subset of the upstream frame `llm translation` 💬1
- [#41990](https://github.com/BerriAI/litellm/issues/41990) [Bug]: opentelemetry-api >= 1.44.0 breaks the OTel v2 integration and silently disables the newrelic callback (Events API removed) 💬1
- [#41973](https://github.com/BerriAI/litellm/issues/41973) test_get_model_info_falls_back_from_dated_snapshot_to_undated_entry[...azure/gpt-5.6-luna] fails on current main `llm translation` 💬1
- [#41962](https://github.com/BerriAI/litellm/issues/41962) [Bug]: Ollama completion transport discards the JSON `thinking` field on non-streaming replies (empty content, reasoning_content always null) `llm translation` 💬1
- [#41912](https://github.com/BerriAI/litellm/issues/41912) [Bug]: attached files and audio are dropped before the provider sees them `bug` `llm translation` 💬1
- [#41913](https://github.com/BerriAI/litellm/issues/41913) [Bug]: tool and instruction fields dropped in translation (const, strict, parallel_tool_calls, allowed_callers, developer role) `bug` `llm translation` 💬1
- [#42056](https://github.com/BerriAI/litellm/issues/42056) [Feature]: Authenticate to Redis on Google Cloud with GKE Workload Identity Federation tokens or other ADC-supported auth methods `enhancement` `llm translation`
- [#41976](https://github.com/BerriAI/litellm/issues/41976) Sync `responses` call_type logs response_cost=0 in StandardLoggingPayload while SpendLogs has the real cost (regression in v1.101.0-rc.1) `llm translation`
- [#41957](https://github.com/BerriAI/litellm/issues/41957) Deployment-level input-work admission and saturation control `llm translation`

#### 🔒 Closed Issues
- [#26240](https://github.com/BerriAI/litellm/issues/26240) [Bug]: Claude Code 2.1.104 throws Extra inputs are not permitted
- [#37255](https://github.com/BerriAI/litellm/issues/37255) DeepSeek V4 Pro and Flash prices are stale — the flat rate no longer matches the provider at any hour
- [#40102](https://github.com/BerriAI/litellm/issues/40102) [Bug]: `openrouter/openai/gpt-5.6-sol` is missing from `model_prices_and_context_window.json`
- [#27967](https://github.com/BerriAI/litellm/issues/27967) [Bug]: Mid-stream fallback request includes assistant prefill block, breaks for fallback targets that don't support `prefix=True` (Claude Sonnet 4.6 / Opus 4.7)
- [#37727](https://github.com/BerriAI/litellm/issues/37727) [Feature]: azure_ai image generation and OCR should honour the Entra ID token fallback (enable_azure_ad_token_refresh) like azure_ai chat does
- [#34924](https://github.com/BerriAI/litellm/issues/34924) [Feature]: Support Claude Gateway
- [#35306](https://github.com/BerriAI/litellm/issues/35306) Support mcp 2.x (Python SDK): pin blocks mcp 2.0.0
- [#29914](https://github.com/BerriAI/litellm/issues/29914) [Feature]: Support OCR endpoints and Mistral through the Batches API
- [#30421](https://github.com/BerriAI/litellm/issues/30421) [Feature]: lite cli: add launch agent cli ability just like `ollama launch` do
- [#30430](https://github.com/BerriAI/litellm/issues/30430) Add "deepseek-v4-flash" and "deepseek-vr-p4o" in "model_prices_and_context_window.json"
- [#30432](https://github.com/BerriAI/litellm/issues/30432) [Feature]: Add Native Bayesian Optimization for Hyperparameter and Prompt Tuning
- [#35762](https://github.com/BerriAI/litellm/issues/35762) [Bug]: Azure gpt-5.6-luna dated snapshot gpt-5.6-luna-2026-07-09 missing from cost map
- [#31067](https://github.com/BerriAI/litellm/issues/31067) [Bug]: Mid-stream fallback continuation prompt corrupts tool-calling context — fallback returns prose instead of tool calls
- [#41185](https://github.com/BerriAI/litellm/issues/41185) [Bug]: Responses stream bridge never emits output_item.added for the message after a reasoning-first chunk (orphan output_text.delta)
- [#37852](https://github.com/BerriAI/litellm/issues/37852) [Bug]: Responses API streaming emits an unopened assistant message item for Anthropic tool calls with no text (breaks Vercel AI SDK)
- [#41591](https://github.com/BerriAI/litellm/issues/41591) [Bug]: OTel v2: gen_ai.output.messages and gen_ai.response.finish_reasons missing on Responses API (/v1/responses) spans
- [#40291](https://github.com/BerriAI/litellm/issues/40291) TPM rate limit pre-call check reads local memory only, ignoring Redis in multi-replica deployments
- [#40576](https://github.com/BerriAI/litellm/issues/40576) [Feature]: add support and price for DeepSeek-V4.1-Flash
- [#41253](https://github.com/BerriAI/litellm/issues/41253) Native Responses API WebSocket mode doesn't restore/unwrap encrypted_content or apply encrypted_content_affinity, causing invalid_encrypted_content
- [#39816](https://github.com/BerriAI/litellm/issues/39816) Rate limit 429 body reports local time labelled "UTC"

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,446 · **Open issues:** 1,252 · **Last push:** <1h ago

On September 20, 2026, there were no new releases for Unsloth, but several notable pull requests were merged, including updates to improve the studio interface, such as #11331 which tidies run settings controls and #11316 that optically centers the model selector label. Other important changes involved backend improvements, such as #11213, which ensures timeouts for backend connections are appropriately reported without unnecessary delays, and #11312, which enhances error messaging for WSL compiler failures. Among the new issues raised, #11330, highlighted a bug where the Studio backend strips essential flags, leading to out-of-memory errors on multi-GPU configurations, indicating a critical area of concern for users working with resource-intensive models.

#### ✅ Merged PRs
- [#11331](https://github.com/unslothai/unsloth/pull/11331) Studio: tidy run settings controls and settings page titles
- [#11342](https://github.com/unslothai/unsloth/pull/11342) Point the interrupt legs at the phase label the installer prints
- [#10659](https://github.com/unslothai/unsloth/pull/10659) Studio setup: reuse the uv a previous run installed instead of downloading it again
- [#11269](https://github.com/unslothai/unsloth/pull/11269) Studio: keep a connected pin that could not be written
- [#10473](https://github.com/unslothai/unsloth/pull/10473) Name an AMD device node this account cannot open, instead of reading it as no GPU
- [#11213](https://github.com/unslothai/unsloth/pull/11213) Studio: report a backend that is provably gone without sleeping out the retry ladder
- [#11328](https://github.com/unslothai/unsloth/pull/11328) Give the CUDA spoof the raw-stream handle unsloth reads at import
- [#11326](https://github.com/unslothai/unsloth/pull/11326) Strip distro .devN markers from the Colab pins
- [#11325](https://github.com/unslothai/unsloth/pull/11325) Give the torchcodec placeholder a real __spec__
- [#11324](https://github.com/unslothai/unsloth/pull/11324) Acknowledge the Colab oracle drift, and stop the diff hiding entries
- [#11323](https://github.com/unslothai/unsloth/pull/11323) Desktop clean machine: pick the x64 installer, and stop blaming the .deb for the mirror
- [#11322](https://github.com/unslothai/unsloth/pull/11322) Clear the idle-reload stash between tests
- [#11320](https://github.com/unslothai/unsloth/pull/11320) Serve the decoded pixels on a multi-image turn, not the base64 they arrived as
- [#11318](https://github.com/unslothai/unsloth/pull/11318) Re-approve three unsloth-zoo exec sites, pinned, and say which reviews are which
- [#11317](https://github.com/unslothai/unsloth/pull/11317) Put back the Docker quickstart paragraph the README lost
- [#11316](https://github.com/unslothai/unsloth/pull/11316) Studio: optically centre the model selector label
- [#11314](https://github.com/unslothai/unsloth/pull/11314) Studio: trim the composer "+" menu top level
- [#10088](https://github.com/unslothai/unsloth/pull/10088) Studio: let models see images returned by MCP tools
- [#11312](https://github.com/unslothai/unsloth/pull/11312) Make the WSL compiler-intermediate control say why it failed

#### 🐛 New Issues
- [#11327](https://github.com/unslothai/unsloth/issues/11327) [Feature Request] Allow Windows Desktop to configure the backend installation directory `feature request` 💬1
- [#11343](https://github.com/unslothai/unsloth/issues/11343) GGUF load 500s on a synthesized filename: variant resolver guesses `{repo}-{variant}.gguf` instead of using the repo's actual file (repro: PQ2_0 file advertised as Q2_0)
- [#11336](https://github.com/unslothai/unsloth/issues/11336) [Bug] Regression - windows version seem much slower than linux `feature request` `bug`
- [#11335](https://github.com/unslothai/unsloth/issues/11335) Qwen 3.5 FastMTP draft-vocab trim (d2t) causes loader crash in llama.cpp engine
- [#11330](https://github.com/unslothai/unsloth/issues/11330) [Bug] Studio backend strips explicit --tensor-split / -ts flag, causing OOM on multi-GPU MoE with CPU offload `feature request` `bug`
- [#11321](https://github.com/unslothai/unsloth/issues/11321) [Bug] The response marker '<|turn>model\n' was not found in any sample `feature request` `bug`

#### 🔒 Closed Issues
- [#3581](https://github.com/unslothai/unsloth/issues/3581) Error saving GGUF of Gemma27B (but not Gemma4B) on DGX Spark
- [#10057](https://github.com/unslothai/unsloth/issues/10057) [Feature] Allow models to actually read images returned in MCP responses.
- [#8926](https://github.com/unslothai/unsloth/issues/8926) [Bug] Published constraints block torch 2.13 security remediation (GHSA-rrmf-rvhw-rf47)
- [#10466](https://github.com/unslothai/unsloth/issues/10466) [Bug] Inference does not use AMD iGPU on Strix Halo without appropriate permissions

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,098 · **Open issues:** 381 · **Last push:** 4h ago

On September 20, 2026, there were no new releases for AIBrix, but several important updates were merged including the addition of an async job registry and videos routing in PR #2740, alongside enhancements to the Gateway with power-of-two routing adjustments in PR #2749. Additionally, a crucial bug fix in PR #2755 ensures that profile cache updates are skipped when the Redis client is nil in standalone mode, addressing potential performance issues. Notably, the team also introduced streaming chunk-edge coverage to the Gateway integration suite with PR #2750. However, the day saw the emergence of a new bug related to profile cache updates in standalone mode, documented in issue #2754, which could impact user experience.

#### ✅ Merged PRs
- [#2740](https://github.com/vllm-project/aibrix/pull/2740) [API] Add async job registry and Videos routing
- [#2749](https://github.com/vllm-project/aibrix/pull/2749) [Gateway] Move power-of-two routing onto the shared running-requests counter
- [#2755](https://github.com/vllm-project/aibrix/pull/2755) [Bug] Skip profile cache updates when Redis client is nil in standalo…
- [#2750](https://github.com/vllm-project/aibrix/pull/2750) [TEST] Add streaming chunk-edge coverage to Gateway integration suite
- [#2661](https://github.com/vllm-project/aibrix/pull/2661) [API] Reject StormService /scale above 1 in Pooled mode

#### 🐛 New Issues
- [#2754](https://github.com/vllm-project/aibrix/issues/2754) [Bug] Skip profile cache updates when Redis client is nil in standalone mode `kind/misc` 💬1

#### 🔒 Closed Issues
- [#2754](https://github.com/vllm-project/aibrix/issues/2754) [Bug] Skip profile cache updates when Redis client is nil in standalone mode

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,870 · **Open issues:** 509 · **Last push:** <1h ago

On September 20, 2026, there were no new releases for Semantic Router. However, significant progress was made with several merged pull requests, including the addition of Snowflake Cortex AI as a built-in serving provider and the introduction of a metric contract for prompt guard candidates. The evaluation loops and recipe observability were also unified, enhancing overall system performance. Among the new issues raised, the bug regarding the Config Builder's automatic config load failing silently seems to be the most noteworthy, as it could impact user experience significantly. Overall, the day focused on enhancements and fixes to improve functionality and user accessibility.

#### ✅ Merged PRs
- [#3938](https://github.com/vllm-project/semantic-router/pull/3938) [Fix] Unify evaluation loops and recipe observability
- [#3545](https://github.com/vllm-project/semantic-router/pull/3545) [Fix] Make dashboard builder context menu keyboard accessible
- [#3931](https://github.com/vllm-project/semantic-router/pull/3931) [Test] Cover the hosted image_generation contract in the Response API E2E profile
- [#3656](https://github.com/vllm-project/semantic-router/pull/3656) [Feature] Add Snowflake Cortex AI as a built-in serving provider
- [#3943](https://github.com/vllm-project/semantic-router/pull/3943) [Docs] Update Vela blog URL and social preview
- [#3935](https://github.com/vllm-project/semantic-router/pull/3935) [CI/Build] Keep Python formatting checks read-only
- [#3924](https://github.com/vllm-project/semantic-router/pull/3924) [Feature] Add a metric contract for prompt guard candidates
- [#3483](https://github.com/vllm-project/semantic-router/pull/3483) [Feature] Add response-side Router Memory extraction and persistence receipts
- [#3942](https://github.com/vllm-project/semantic-router/pull/3942) [CI/Build] Gate Netlify previews behind maintainer comments
- [#3927](https://github.com/vllm-project/semantic-router/pull/3927) chore(deps): bump anyio from 4.12.1 to 4.14.2 in /src/vllm-sr in the cli-python-security group across 1 directory
- [#3910](https://github.com/vllm-project/semantic-router/pull/3910) [Docs] Introduce Vela 1.0 and align homepage color modes

#### 🐛 New Issues
- [#3947](https://github.com/vllm-project/semantic-router/issues/3947) [Bug] The Config Builder's automatic config load fails silently `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#3949](https://github.com/vllm-project/semantic-router/issues/3949) [Bug] Tools database paths fail to resolve in the dashboard backend `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#3954](https://github.com/vllm-project/semantic-router/issues/3954) [Feature] Route OpenAI Speech API (/v1/audio/speech) to vLLM-Omni TTS backends `enhancement` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#3941](https://github.com/vllm-project/semantic-router/issues/3941) [CI/Build] Gate Netlify PR previews behind /netlify `accepted` `owner/maintainers` 💬1
- [#3939](https://github.com/vllm-project/semantic-router/issues/3939) [Feature] Record which window decided a windowed guard score `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3932](https://github.com/vllm-project/semantic-router/issues/3932) [Feature] Reproducible uv-based dependency management for the training code `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`

#### 🔒 Closed Issues
- [#3470](https://github.com/vllm-project/semantic-router/issues/3470) [Bug] Dashboard Monitoring embeds a stale Grafana goto URL
- [#2572](https://github.com/vllm-project/semantic-router/issues/2572) [Bug] Documented online Playground credentials return 401
- [#3610](https://github.com/vllm-project/semantic-router/issues/3610) [Feature] Add Cloudflare Workers AI as a built-in serving provider
- [#3475](https://github.com/vllm-project/semantic-router/issues/3475) [Feature] Produce a versioned offline calibration artifact for Confidence thresholds
- [#3515](https://github.com/vllm-project/semantic-router/issues/3515) [Bug] Dashboard collapsible headers and context menus are not keyboard reachable
- [#3923](https://github.com/vllm-project/semantic-router/issues/3923) [Bug] The missing DSL-compiler WASM hides its prerequisite instead of naming it
- [#3941](https://github.com/vllm-project/semantic-router/issues/3941) [CI/Build] Gate Netlify PR previews behind /netlify

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*