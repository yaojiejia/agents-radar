# 📡 AI Ecosystem Digest — 2026-10-11

> Generated 2026-10-11 01:35 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 150,073 | 24 | 0 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 128,549 | 21 | 5 | 14 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,276 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,249 | 5 | 5 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 212,564 | 18 | 10 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,409 | 26 | 8 | 2 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,628 | 144 | 103 | 112 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 252,560 | 26 | 1 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,527 | 21 | 31 | 30 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,968 | 15 | 19 | 71 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,774 | 13 | 12 | 13 | 5 |
| [Ollama](https://github.com/ollama/ollama) | 182,667 | 5 | 1 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,920 | 12 | 9 | 120 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,729 | 6 | 52 | 72 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,129 | 6 | 5 | 9 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,075 | 18 | 19 | 3 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.65.0-nightly.20261010.g9b6e0265d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261010.g9b6e0265d).
- **GitHub Copilot CLI** released [v1.0.96-2](https://github.com/github/copilot-cli/releases/tag/v1.0.96-2).
- **Qwen Code** released [v0.25.1-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.2).
- **OpenClaw** addressed the highly discussed issue [#168307](https://github.com/openclaw/openclaw/issues/168307) about non-converging single-core grind after startup, which has received 13 comments.
- **OpenAI Codex** has a hot new issue [#53002](https://github.com/openai/codex/issues/53002) concerning User Skills advertising incorrect resources, garnering 10 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 150,073 · **Open issues:** 14,646 · **Last push:** 3h ago

Today was a routine maintenance day for Claude Code, with no new releases or merged pull requests. However, a number of new issues were reported, with #101114 highlighting that OSC 7501 status reports are not sent in version 2.1.296 despite the terminal responding to probes, drawing significant attention with two comments. Additionally, #101065 points out a bug in the Mods feature where the split view incorrectly displays AbovePrompt plugin bands in the left pane only. Other noteworthy issues include #100991, which discusses a permissions problem preventing project access, and #101150, which addresses a critical flaw where npm auto-update during a network outage results in a non-functional installation.

#### 🐛 New Issues
- [#101114](https://github.com/anthropics/claude-code/issues/101114) OSC 7501 status reports not sent in 2.1.296 even after the terminal answers the probe `bug` `platform:windows` `area:tui` 💬2
- [#101065](https://github.com/anthropics/claude-code/issues/101065) [BUG] Mods: split view draws AbovePrompt plugin bands in the left pane only `bug` `has repro` `platform:macos` `area:plugins` 💬1
- [#101092](https://github.com/anthropics/claude-code/issues/101092) [Bug] Update operation fails `bug` `platform:macos` `area:auth` 💬1
- [#100974](https://github.com/anthropics/claude-code/issues/100974) Auto mode: terminal-only "Teach auto mode about your environment?" offer blocks Remote Control sessions; a stray Enter opens /auto-mode-setup `bug` `has repro` `platform:macos` `area:tui` 💬1
- [#100991](https://github.com/anthropics/claude-code/issues/100991) Projects: Debug access grant is active, but Claude in the other project can't read it `invalid` 💬1
- [#101150](https://github.com/anthropics/claude-code/issues/101150) npm auto-update during network outage replaces working install with 500-byte stub `bug` `duplicate` `platform:linux` `area:packaging`
- [#101149](https://github.com/anthropics/claude-code/issues/101149) [BUG] Mods tool.call: PowerShell results never carry isReadOnly (Bash does) `bug` `platform:windows` `area:tools` `area:plugins`
- [#101148](https://github.com/anthropics/claude-code/issues/101148) /design is user-only (disable-model-invocation), but the agent isn't told it exists or that the Design canvas is reachable another way `enhancement` `platform:macos` `area:skills`
- [#101147](https://github.com/anthropics/claude-code/issues/101147) cannot read the closed holder `bug` `platform:web` `needs-info` `github-integration`
- [#101146](https://github.com/anthropics/claude-code/issues/101146) Desktop: archiving an SSH session does not remove its clean worktree `bug` `has repro` `area:desktop`
- [#101144](https://github.com/anthropics/claude-code/issues/101144) /feeback doesn't work in Projects in Claude Mac App `bug` `platform:macos` `needs-info` `area:desktop`
- [#101117](https://github.com/anthropics/claude-code/issues/101117) [BUG] claude.ai connectors silently missing for the whole session when the connector-list fetch gets a 401 at first launch of the day — 401 is never retried, even after the token refresh succeeds `bug` `has repro` `platform:windows` `area:auth`
- [#101143](https://github.com/anthropics/claude-code/issues/101143) [Bug] Linux saveImage ignores JPEG clipboard images (only tries PNG and BMP) `bug` `platform:linux` `area:core`
- [#101142](https://github.com/anthropics/claude-code/issues/101142) [MODEL] Told the user as fact that a system tool could not do something, repeating a record without reading the tool's manual `bug` `area:model`
- [#101141](https://github.com/anthropics/claude-code/issues/101141) [MODEL] Gave the user a table of measured line counts with one count estimated, and the estimate was wrong `bug` `area:model` `api:anthropic`
- [#101140](https://github.com/anthropics/claude-code/issues/101140) [Bug] Claude Code sessions leak tool uses and diffs across VS Code split terminals `bug` `platform:macos` `area:ide` `platform:vscode`
- [#101139](https://github.com/anthropics/claude-code/issues/101139) [FEATURE] Post-compact hook lines print the full hook command into context; show statusMessage or truncate `enhancement` `area:cost` `area:hooks`
- [#101138](https://github.com/anthropics/claude-code/issues/101138) [Desktop app, Windows] Every notification shows the session title twice (groupTitle = title) `invalid`
- [#101137](https://github.com/anthropics/claude-code/issues/101137) [Bug] Local business lookups rely on web search, return stale hours and menu info `enhancement` `platform:macos` `area:model`
- [#101136](https://github.com/anthropics/claude-code/issues/101136) [Bug] Safeguards Flag Legitimate Message During Custom API Integration `bug` `duplicate` `platform:windows` `area:model`
- [#101135](https://github.com/anthropics/claude-code/issues/101135) I can't search inside this MD easily. Ctrl+F should work and also when I manual… `enhancement` `area:ui`
- [#101134](https://github.com/anthropics/claude-code/issues/101134) [MODEL] Verified a shared shell helper's change against five of its consumers, and the merged helper broke others' lint `bug` `area:model`
- [#101133](https://github.com/anthropics/claude-code/issues/101133) [Bug] Session starts with repeated "line" output, undermining trust in code changes `bug` `platform:macos` `area:model` `needs-repro`
- [#101132](https://github.com/anthropics/claude-code/issues/101132) [Bug] iOS app sessions on desktop-served Remote Control hang; "That mode isn't available right now" `bug` `has repro` `platform:macos` `platform:ios`

### OpenAI Codex (`openai/codex`)

**Stars:** 128,549 · **Open issues:** 22,134 · **Last push:** 3h ago

On October 11, 2026, there were no new releases of OpenAI Codex; however, several important pull requests were merged, including the addition of a searchable `/config` preferences panel to the TUI and an upgrade to `rmcp` version `3.5.1`, which also included lifecycle test enhancements. Significant stability improvements were made with updates like retaining client-marked tool outputs across compaction and ensuring stability in the real-time steering timeline tests. Notably, a new issue emerged regarding the User Skills feature, which inaccurately advertises child resources that are rejected as Unknown. This day was primarily focused on enhancing performance and user experience through various crucial bug fixes and feature improvements.

#### ✅ Merged PRs
- [#52990](https://github.com/openai/codex/pull/52990) Add a searchable `/config` preferences panel to the TUI
- [#52972](https://github.com/openai/codex/pull/52972) Upgrade `rmcp` to `3.5.1` and harden lifecycle tests
- [#52968](https://github.com/openai/codex/pull/52968) Keep startup modals protected when terminal input draining times out
- [#52967](https://github.com/openai/codex/pull/52967) Reuse and prewarm the WSL clipboard text reader
- [#52964](https://github.com/openai/codex/pull/52964) Defer owned transcript redraws during raw paste bursts
- [#52959](https://github.com/openai/codex/pull/52959) Reduce stack usage in async TUI tests
- [#52952](https://github.com/openai/codex/pull/52952) Verify reset notification during code-mode host recovery
- [#52946](https://github.com/openai/codex/pull/52946) Keep agent command center rows stable across progress updates
- [#52937](https://github.com/openai/codex/pull/52937) Retain client-marked tool outputs across compaction
- [#52923](https://github.com/openai/codex/pull/52923) Stabilize the realtime steering timeline test
- [#52825](https://github.com/openai/codex/pull/52825) Report exec runtime resets before accepting further requests
- [#52778](https://github.com/openai/codex/pull/52778) Make pinned transcript prompts clickable
- [#52756](https://github.com/openai/codex/pull/52756) Classify voice session failures and record terminal outcomes
- [#52748](https://github.com/openai/codex/pull/52748) Make code-mode `exit()` stop the entire cell

#### 🐛 New Issues
- [#53002](https://github.com/openai/codex/issues/53002) User Skills advertise child resources that resources/read rejects as Unknown resource `bug` `codex-web` `mcp` `skills` 💬10
- [#52949](https://github.com/openai/codex/issues/52949) In-TUI /review never dispatches the Stop hook (no Stop or SubagentStop when the review turn ends) `bug` `code-review` `CLI` `hooks` 💬4
- [#52755](https://github.com/openai/codex/issues/52755) dot cloud computer: intermittent GitHub connectivity blocks gh device login `bug` `auth` `connectivity` `dots` 💬2
- [#52895](https://github.com/openai/codex/issues/52895) [Windows Desktop 26.1007.21434] '+' icon missing to the right of global New chat in Codex sidebar (new chat still works) `bug` `windows-os` `app` 💬2
- [#53019](https://github.com/openai/codex/issues/53019) Single turn issues 58 sequential exec calls, consuming 4.17M input tokens (34% of session) `bug` `model-behavior` `extension` `rate-limits` 💬1
- [#53014](https://github.com/openai/codex/issues/53014) [Windows][codex_app] Project inventory fails with MCP -32000 when native bridge is unavailable in ChatGPT Work `bug` `windows-os` `mcp` `app` 💬1
- [#52997](https://github.com/openai/codex/issues/52997) Official X Ads MCP OAuth fails origin validation in Codex 0.162.1 `bug` `auth` `mcp` `CLI` 💬1
- [#53013](https://github.com/openai/codex/issues/53013) Guardian rejects explicit Anthropic delegation approval and empty output polls in dot cloud `bug` `sandbox` `tool-calls` `dots` 💬1
- [#53012](https://github.com/openai/codex/issues/53012) Windows desktop renderer repeatedly crashes and returns to sign-in, persists after upgrade and clean profile `bug` `windows-os` `app` 💬1
- [#53011](https://github.com/openai/codex/issues/53011) Windows desktop: Responses HTTP 503 terminates long-running turn; manual continue immediately recovers (custom proxy) `bug` `windows-os` `custom-model` `app` 💬1
- [#53009](https://github.com/openai/codex/issues/53009) [Windows] Chrome extension reads webpages but interaction fails: Unable to load browser request-header policy `bug` `windows-os` `app` `browser` 💬1
- [#53020](https://github.com/openai/codex/issues/53020) ChatGPT OAuth token keeps a stale (free) `chatgpt_plan_type` after an App Store plan change, so Codex rejects every paid model until the next token refresh `bug` `auth`
- [#53018](https://github.com/openai/codex/issues/53018) Let --approve-for-me skip the one-time folder-trust dialog when nothing is there to answer it `enhancement` `sandbox` `CLI`
- [#53016](https://github.com/openai/codex/issues/53016) Dots: inconsistent computer names and no rename option in the Computers sidebar `enhancement` `dots`
- [#53017](https://github.com/openai/codex/issues/53017) @openai/codex-sdk: TS item types drifted from exec JSONL wire format `bug` `exec` `CLI` `subagent`
- [#53015](https://github.com/openai/codex/issues/53015) Codex CLI conversation interrupted while adding a BMKG radar source to Omastorm `bug` `CLI` `agent`
- [#53010](https://github.com/openai/codex/issues/53010) Windows desktop 26.1007: repeated browser-process crash after Browser Use guest teardown `bug` `windows-os` `app` `browser`
- [#53006](https://github.com/openai/codex/issues/53006) Browser Use site_status_blocked after Google Flow media download; ordinary downloads succeed `bug` `app` `safety-check` `browser`
- [#53008](https://github.com/openai/codex/issues/53008) macOS: Ruby startup blocked by GMP symlink metadata denial despite explicit read grants `bug` `sandbox` `CLI`
- [#53007](https://github.com/openai/codex/issues/53007) [Codex Cloud][Web] Same CLI-created task URL fails in ChatGPT mode but sends successfully in Codex mode `bug` `codex-web` `session`
- [#53005](https://github.com/openai/codex/issues/53005) [Windows][Chrome extension] Locator click/Enter returns normally but enabled Like control remains unchanged; dispatch diagnostics needed `bug` `windows-os` `tool-calls` `app`

#### 🔒 Closed Issues
- [#52949](https://github.com/openai/codex/issues/52949) In-TUI /review never dispatches the Stop hook (no Stop or SubagentStop when the review turn ends)
- [#51293](https://github.com/openai/codex/issues/51293) Codex exec fails during in-process app-server initialization with read-only CODEX_HOME
- [#51552](https://github.com/openai/codex/issues/51552) codex exec reports edits it never made: exits 0 after ~8 s with no file changes and a final message saying the change was done
- [#47440](https://github.com/openai/codex/issues/47440) [Windows][CLI] TUI output and status rows overlap during redraw on 0.155.1
- [#52479](https://github.com/openai/codex/issues/52479) codex exec prints the same unchanged diff three times with hooks disabled

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,276 · **Open issues:** 765 · **Last push:** 23h ago

On October 10, 2026, Gemini CLI released version v0.65.0-nightly.20261010.g9b6e0265d, which included significant fixes such as handling JSON parse and response stream errors in the fetchJson function and preserving line terminators in the truncateString method. Additionally, the release addressed an issue in the vscode-ide-companion where the IdeServer.stop() would resolve even when MCP sessions were still active. There were no new merged pull requests or issues reported in the last 24 hours, marking the day as relatively routine in terms of ongoing development.

#### 🚀 New Releases
- [v0.65.0-nightly.20261010.g9b6e0265d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261010.g9b6e0265d) Release v0.65.0-nightly.20261010.g9b6e0265d

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,249 · **Open issues:** 2,186 · **Last push:** 23h ago

On October 11, 2026, GitHub Copilot CLI released version 1.0.96-2, which introduced a fix that makes model IDs in the /model and /config commands case-insensitive while saving canonical IDs. There were no merged pull requests in the last 24 hours, but five new issues were reported, with #5112 highlighting a need for OSC 7501 program status support in the interactive CLI being particularly noteworthy. Other issues included problems with image cap management (#5111), functionality for right-click copying of output text (#5110), a general usability concern (#5109), and performance issues in session listing due to unnecessary rescanning (#5108). Overall, while maintenance was light, the new issues reflect ongoing user challenges and potential areas for improvement.

#### 🚀 New Releases
- [v1.0.96-2](https://github.com/github/copilot-cli/releases/tag/v1.0.96-2) 1.0.96-2

#### 🐛 New Issues
- [#5112](https://github.com/github/copilot-cli/issues/5112) Support OSC 7501 program status in the interactive CLI `triage`
- [#5111](https://github.com/github/copilot-cli/issues/5111) Image cap ignores modelCapabilities.limits.vision.max_prompt_images, and each eviction past the 50-image cap rewrites the prompt-cache prefix `triage`
- [#5110](https://github.com/github/copilot-cli/issues/5110) Right click copy fails for copilot output text in copilot-cli `triage`
- [#5109](https://github.com/github/copilot-cli/issues/5109) copilot-cli is unusable `triage`
- [#5108](https://github.com/github/copilot-cli/issues/5108) ACP session/list: every page rescans all sessions, so listing thousands takes minutes `area:sessions` `area:non-interactive`

#### 🔒 Closed Issues
- [#2494](https://github.com/github/copilot-cli/issues/2494) copilot login auto-enters 'y/N' keychain prompt in v1.0.16 (regression: does not wait for user input)
- [#4614](https://github.com/github/copilot-cli/issues/4614) macOS: MallocStackLogging warning persists in v1.0.80
- [#3866](https://github.com/github/copilot-cli/issues/3866) Thinking/reasoning text is unreadable on dark backgrounds (hardcoded dim color)
- [#590](https://github.com/github/copilot-cli/issues/590) Provide "copilot mcp" subcommand for mcp setup
- [#2746](https://github.com/github/copilot-cli/issues/2746) Visual distinction between user input and assistant responses

### OpenCode (`anomalyco/opencode`)

**Stars:** 212,564 · **Open issues:** 5,232 · **Last push:** <1h ago

On October 11, 2026, OpenCode saw the merging of several noteworthy pull requests, including the implementation of a feature to archive projects with missing directories (#54354) and a significant update to the TUI that replaces the V1 auto-update with a new V2-style /update dialog (#54409). Additionally, a fix was introduced to align Copilot fallback routing with models.dev packages (#54210). Among the new issues, a notable concern was raised about the legacy V1 provider.opencode-go block being silently dropped in version 2, which affects Go credentials (#54370). Overall, the day was marked by impactful updates and ongoing challenges that will require attention.

#### ✅ Merged PRs
- [#54354](https://github.com/anomalyco/opencode/pull/54354) feat(core): archive projects whose directories are gone
- [#54409](https://github.com/anomalyco/opencode/pull/54409) feat(tui): replace V1 auto-update with V2-style /update dialog
- [#54210](https://github.com/anomalyco/opencode/pull/54210) fix(core): follow models.dev packages for Copilot fallback routing

#### 🐛 New Issues
- [#54370](https://github.com/anomalyco/opencode/issues/54370) provider: legacy V1 provider.opencode-go block silently dropped in v2 breaks Go credentials (fixed by removing the block) 💬7
- [#54352](https://github.com/anomalyco/opencode/issues/54352) execute: compressor mints ccr pointers to never-persisted payloads - large tool results destroyed `triaging` 💬7
- [#54400](https://github.com/anomalyco/opencode/issues/54400) tools: agents fall back to bash/powershell for read/write because read loses indentation and edit requires exact byte match `triaging` 💬5
- [#54374](https://github.com/anomalyco/opencode/issues/54374) desktop: agent select menu overflows the window with many agents — clipped instead of scrollable `reproduced` 💬4
- [#54389](https://github.com/anomalyco/opencode/issues/54389) perf(core): bound native Session.wait history scans `triaging` 💬3
- [#54298](https://github.com/anomalyco/opencode/issues/54298) desktop: reasoning part stops being recorded in a long session — chain-of-thought shows up as normal answer text 💬2
- [#54269](https://github.com/anomalyco/opencode/issues/54269) Copilot Opus 5.5: thinking uses the whole 32k output cap, turn ends silently with finish=length and no answer `pending close` `triaging` 💬2
- [#54420](https://github.com/anomalyco/opencode/issues/54420) tui: modal scrim fills entire terminal with opaque black under transparent themes 💬1
- [#54418](https://github.com/anomalyco/opencode/issues/54418) TUI crash: Orphan text error: "No configured models" must have a <text> as a parent: box-687 above text-node-1456 `triaging` 💬1
- [#54320](https://github.com/anomalyco/opencode/issues/54320) cli: projects whose directory was deleted are never removed from the recent projects list `pending close` `triaging` 💬1
- [#54413](https://github.com/anomalyco/opencode/issues/54413) Copy failures are silently swallowed — TUI shows "Copied to clipboard" even when nothing is copied `pending close` `triaging` 💬1
- [#54408](https://github.com/anomalyco/opencode/issues/54408) Committed revert resets the instruction baseline and busts the prompt cache for the whole conversation `reproduced` 💬1
- [#54406](https://github.com/anomalyco/opencode/issues/54406) [FEATURE]: Web fork dialog — add "Full session" option (Resubmission of #37016) 💬1
- [#54404](https://github.com/anomalyco/opencode/issues/54404) session: location inactivity interrupt aborts pending question with "Tool execution interrupted" `pending close` `triaging` 💬1
- [#54264](https://github.com/anomalyco/opencode/issues/54264) Desktop: turn help button into a help menu (docs, feedback, GitHub, Discord) 💬1
- [#54401](https://github.com/anomalyco/opencode/issues/54401) session: title generation request has no output limit and runs away on local thinking models `reproduced` 💬1
- [#54393](https://github.com/anomalyco/opencode/issues/54393) shell: bare "--" in a pwsh command skips the permission check `reproduced` `severity:high` 💬1
- [#54390](https://github.com/anomalyco/opencode/issues/54390) Why are you afraid to publish the changelog for the new v2 version? `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#54213](https://github.com/anomalyco/opencode/issues/54213) OpenCode Cli does not response
- [#49908](https://github.com/anomalyco/opencode/issues/49908) OpenCode V2 cannot access OpenCode Zen free models (e.g., Big Pickle) due to unsupported latest Zen authentication headers
- [#54389](https://github.com/anomalyco/opencode/issues/54389) perf(core): bound native Session.wait history scans
- [#54269](https://github.com/anomalyco/opencode/issues/54269) Copilot Opus 5.5: thinking uses the whole 32k output cap, turn ends silently with finish=length and no answer
- [#54216](https://github.com/anomalyco/opencode/issues/54216) [FEATURE]: Vertical Tabs
- [#54209](https://github.com/anomalyco/opencode/issues/54209) OpenCode problem
- [#54206](https://github.com/anomalyco/opencode/issues/54206) Expose live TUI binding and draft-preserving quiesce diagnostics
- [#54203](https://github.com/anomalyco/opencode/issues/54203) plugin: wrapping a tool's execute makes parallel failing calls all report the first error
- [#54199](https://github.com/anomalyco/opencode/issues/54199) TUI layout corrupted (missing characters/text) after large MCP tool results — e.g. lemma memory_library (170KB)
- [#54320](https://github.com/anomalyco/opencode/issues/54320) cli: projects whose directory was deleted are never removed from the recent projects list

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,409 · **Open issues:** 1,811 · **Last push:** <1h ago

On October 11, 2026, Qwen Code saw the release of two new versions: v0.25.1-preview.2 and v0.25.0-nightly.20261010.9763580b84, both featuring a fix for agents that allows replacement of selected remote hosts without losing bindings. Additionally, the merged pull requests included significant features such as the ability to cancel public tasks for child agents in H4f and the implementation of a restart-recoverable foreground child wait, addressing issue #13708. Among the newly reported issues, a notable concern is the crash associated with H4b in batch processes that blocks lead Sessions, drawing attention with five comments so far.

#### 🚀 New Releases
- [v0.25.1-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.2) Release v0.25.1-preview.2
- [v0.25.0-nightly.20261010.9763580b84](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.0-nightly.20261010.9763580b84) Release v0.25.0-nightly.20261010.9763580b84

#### ✅ Merged PRs
- [#13823](https://github.com/QwenLM/qwen-code/pull/13823) feat(managed-agent): H4f public task cancel for child agent tasks
- [#13769](https://github.com/QwenLM/qwen-code/pull/13769) feat(managed-agent): restart-recoverable foreground child wait (fixes #13708)

#### 🐛 New Issues
- [#13847](https://github.com/QwenLM/qwen-code/issues/13847) [H4b follow-up] A Harness crash inside a batch with no Runtime work blocks the lead Session (background launches, team calls) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬5
- [#13871](https://github.com/QwenLM/qwen-code/issues/13871) #13708 post-merge rig acceptance: Linux close/delete reprobes (L1/L3) against the merged head `priority/P2` `type/bug` `category/core` `scope/session-management` 💬4
- [#13865](https://github.com/QwenLM/qwen-code/issues/13865) @ file completion corrupts the search query when the prompt or filename contains supplementary Unicode characters `status/in-progress` `priority/P2` `type/bug` `category/ui` 💬4
- [#13863](https://github.com/QwenLM/qwen-code/issues/13863) AutoReconnectTransport can retain a replacement and retry requests after disposal `status/in-review` `priority/P3` `type/bug` `daemon` 💬4
- [#13861](https://github.com/QwenLM/qwen-code/issues/13861) Python SDK cannot start npm's Windows qwen.cmd shim through the default qwen command `priority/P2` `type/bug` `category/platform` `scope/windows` 💬4
- [#13837](https://github.com/QwenLM/qwen-code/issues/13837) Chat view breaks mixed RTL/LTR text: code blocks forced LTR, no bidi isolation `priority/P2` `type/feature-request` `category/ui` `scope/rendering` 💬4
- [#13873](https://github.com/QwenLM/qwen-code/issues/13873) [H4b follow-up] The wake pump races the takeover continue: a restart during a foreground agent wait with a pending wake input blocks the Session for good `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#13875](https://github.com/QwenLM/qwen-code/issues/13875) [H4f follow-up] A parent close waits for each child's running Turn instead of stopping it, so cancel-then-close leaves the child running `priority/P2` `category/core` `scope/session-management` `type/enhancement` 💬3
- [#13874](https://github.com/QwenLM/qwen-code/issues/13874) Child result relay inserts a stray "\n" into a child's answer when another event splits its output_text Part (terminalResultText) `priority/P2` `type/bug` `category/core` `status/ready-for-human` 💬3
- [#13870](https://github.com/QwenLM/qwen-code/issues/13870) Support OSC 7501 program status in the interactive CLI `priority/P3` `type/feature-request` `category/cli` `scope/interactive` 💬3
- [#13869](https://github.com/QwenLM/qwen-code/issues/13869) Deferred review findings from PR #13737: fix(rewind): resolve legacy turns by source identity `priority/P2` `status/on-hold` `type/bug` `category/ui` 💬3
- [#13868](https://github.com/QwenLM/qwen-code/issues/13868) fix(managed-agent): #13682 follow-ups: rename title-blankness asymmetry and deferred review suggestions `priority/P3` `status/blocked` `category/development` `scope/testing` 💬3
- [#13857](https://github.com/QwenLM/qwen-code/issues/13857) Harness restart during an in-flight model call wedges every later Turn of the Session (unresolved_after_settle) `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#13853](https://github.com/QwenLM/qwen-code/issues/13853) [Bug] Tools sent without "parameters" schema (get_goal, list_agents) break strict OpenAI-compatible backends: 400 `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬3
- [#13851](https://github.com/QwenLM/qwen-code/issues/13851) Non-interactive (headless/SDK) mode delays the terminal `result` until managed auto-memory tasks finish, while the TUI and ACP return immediately / 非交互（headless/SDK）模式的最终 `result` 要等托管自动记忆任务完成才输出，TUI 与 ACP 则立即返回 `priority/P1` `type/bug` `category/cli` `scope/non-interactive` 💬3
- [#13845](https://github.com/QwenLM/qwen-code/issues/13845) bug(feishu): resource HTTP 401 retains a warm tenant token cache `priority/P3` `type/bug` `category/integration` `scope/token-management` 💬3
- [#13840](https://github.com/QwenLM/qwen-code/issues/13840) Follow-up from #13530: seven deferred review findings (managed-agent stored-definition execution) `priority/P3` `scope/testing` `scope/documentation` `type/enhancement` 💬3
- [#13838](https://github.com/QwenLM/qwen-code/issues/13838) fix(managed-agent): re-attachment of a child Session answers 409 hosted_session_already_attached after a control-plane kill (non-durable-local host profile) `priority/P1` `type/bug` `category/integration` `scope/session-management` 💬3
- [#13831](https://github.com/QwenLM/qwen-code/issues/13831) Deferred from #13579: three round-5 review Suggestions (mask-rule oracle, null-sentinel discrimination, unclosed-opener containment) `priority/P3` `status/blocked` `type/bug` `category/core` 💬3
- [#13821](https://github.com/QwenLM/qwen-code/issues/13821) [H4b follow-up] http and function result Hooks take the Session mount too, so child admission still wedges `priority/P2` `status/blocked` `type/bug` `category/core` 💬3
- [#13876](https://github.com/QwenLM/qwen-code/issues/13876) compaction: the server-reported context ceiling is forwarded with no scope, so it cannot be safely applied to a distinct compaction model `priority/P2` `status/blocked` `type/bug` `category/core` 💬2
- [#13856](https://github.com/QwenLM/qwen-code/issues/13856) feat(managed-agent): enable the H3 Monitor and background Shell gates after the physical pass `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#13859](https://github.com/QwenLM/qwen-code/issues/13859) Github Integration, Stop Agent from Working `status/need-information` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#13849](https://github.com/QwenLM/qwen-code/issues/13849) Main CI failed: E2E Tests — cli/tool-hook-updated-input.test.ts > … > interactive: a PreToolUse ask confirms and writes the replacement `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13842](https://github.com/QwenLM/qwen-code/issues/13842) Main CI failed: SDK Java — ChildWorktreeGitTest.aLinkWhereGitWritesRefsLogsOrObjectsIsRefused `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13860](https://github.com/QwenLM/qwen-code/issues/13860) Deferred review findings from PR #13855: test(integration): sync the updatedInput ask approval on the dialog, not the too 💬1

#### 🔒 Closed Issues
- [#2596](https://github.com/QwenLM/qwen-code/issues/2596) Qwen CLI keeps adding </think> at the end
- [#13300](https://github.com/QwenLM/qwen-code/issues/13300) feat(managed-agent): Close the H0c review follow-ups deferred from #12855
- [#13871](https://github.com/QwenLM/qwen-code/issues/13871) #13708 post-merge rig acceptance: Linux close/delete reprobes (L1/L3) against the merged head
- [#12467](https://github.com/QwenLM/qwen-code/issues/12467) LSP diagnostics can report a clean result after failed or unavailable queries
- [#13200](https://github.com/QwenLM/qwen-code/issues/13200) proposal(managed-agent): Name RocketMQ LiteTopic (5.5.0+) as the preferred P2 EventTransport candidate
- [#13420](https://github.com/QwenLM/qwen-code/issues/13420) Deferred review findings from PR #13292: fix(ci): wait 60s before the E2E build artifact download retry (#13284)
- [#13727](https://github.com/QwenLM/qwen-code/issues/13727) feat(web-shell): simultaneous multi-daemon connections — live local+remote workspaces/sessions, cross-host picker, no-flash switching
- [#13560](https://github.com/QwenLM/qwen-code/issues/13560) Deferred review findings from PR #13547: fix(ci): skip millisecond latency budgets on the release ECS pool (#13541)

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

**Stars:** 391,628 · **Open issues:** 9,477 · **Last push:** <1h ago

On October 11, 2026, OpenClaw released version 2026.10.1, which introduced crucial updates focused on session and memory preservation during registry changes, improved worker attachment capabilities from remote workspaces, and optimized embedding cache migrations. Among the noteworthy merged pull requests were fixes to preserve chat context in the Claude CLI across account switches (#168781) and improvements to the UI to maintain visibility for Workboard drag test endpoints (#168769). A significant new issue was reported (#168307), highlighting a non-converging single-core grind on Gateway 2026.9.9, which intermittently refuses connections for extended periods on Windows. Overall, the day marked meaningful enhancements in stability and performance, although troubleshooting efforts are now directed toward emerging bugs.

#### 🚀 New Releases
- [v2026.10.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1) openclaw 2026.10.1

#### ✅ Merged PRs
- [#168728](https://github.com/openclaw/openclaw/pull/168728) fix: use Claude Code native models for CLI selections
- [#168656](https://github.com/openclaw/openclaw/pull/168656) refactor(ui): simplify display refresh bookkeeping
- [#168724](https://github.com/openclaw/openclaw/pull/168724) fix(models): remove saved provider models on config removal
- [#168781](https://github.com/openclaw/openclaw/pull/168781) fix: preserve Claude CLI chat context across account switches
- [#138204](https://github.com/openclaw/openclaw/pull/138204) fix: serialized tool-call XML leaks into chat replies
- [#168629](https://github.com/openclaw/openclaw/pull/168629) chore(deps): update fs-safe to 0.26.0
- [#168649](https://github.com/openclaw/openclaw/pull/168649) fix: reduce Gateway health stalls in large agent fleets
- [#168733](https://github.com/openclaw/openclaw/pull/168733) perf(models): avoid repeated policy loading after hot reload
- [#168752](https://github.com/openclaw/openclaw/pull/168752) refactor(nodes): deduplicate private invocation failures
- [#168769](https://github.com/openclaw/openclaw/pull/168769) fix(ui): keep Workboard drag test endpoints visible
- [#158719](https://github.com/openclaw/openclaw/pull/158719) fix(whatsapp): reject unknown login actions
- [#168768](https://github.com/openclaw/openclaw/pull/168768) fix(test): restore owner-routed memory search coverage
- [#168725](https://github.com/openclaw/openclaw/pull/168725) fix(gateway): keep normalized chat text stable across replay
- [#168670](https://github.com/openclaw/openclaw/pull/168670) fix: preserve Claude CLI tools after exec completion
- [#168618](https://github.com/openclaw/openclaw/pull/168618) fix(models): make refreshed models work in local agent turns
- [#168486](https://github.com/openclaw/openclaw/pull/168486) refactor: migrate Reef trust and state to workers
- [#168682](https://github.com/openclaw/openclaw/pull/168682) perf(worktrees): avoid eager partial-clone blobs and clean tree rebuilds
- [#168726](https://github.com/openclaw/openclaw/pull/168726) fix(agents): restore context when switching back to Claude CLI
- [#168765](https://github.com/openclaw/openclaw/pull/168765) chore(ui): refresh control ui locales
- [#168746](https://github.com/openclaw/openclaw/pull/168746) fix: release worker capacity after forced descendant cleanup
- [#168680](https://github.com/openclaw/openclaw/pull/168680) fix: match machine join commands to the Gateway release
- [#168644](https://github.com/openclaw/openclaw/pull/168644) fix(node): keep npx-installed services outside the npm cache
- [#168737](https://github.com/openclaw/openclaw/pull/168737) refactor(worker): simplify private protocol validation
- [#168679](https://github.com/openclaw/openclaw/pull/168679) fix(skills): background skill reviews run after every turn that uses a learned skill
- [#168722](https://github.com/openclaw/openclaw/pull/168722) fix: Bun test runs can delete the checkout through handoff fixture cleanup
- [#141286](https://github.com/openclaw/openclaw/pull/141286) fix(gateway): trim node.pair approve/reject requestId
- [#168651](https://github.com/openclaw/openclaw/pull/168651) fix(gateway): resume main sessions after missed restart markers
- [#168652](https://github.com/openclaw/openclaw/pull/168652) fix: reject the local Ollama placeholder during Cloud setup
- [#168120](https://github.com/openclaw/openclaw/pull/168120) fix(node-host): allow trailing whitespace in safe-bin commands
- [#168485](https://github.com/openclaw/openclaw/pull/168485) refactor(matrix): move thread bindings to workers
- [#168723](https://github.com/openclaw/openclaw/pull/168723) fix(telegram): render progress notes as literal prose
- [#163521](https://github.com/openclaw/openclaw/pull/163521) fix(gateway): keep routed CLI prompts off the owner's side in chat history
- [#168650](https://github.com/openclaw/openclaw/pull/168650) fix(agents): resume interrupted turns after session preparation
- [#168659](https://github.com/openclaw/openclaw/pull/168659) chore(ui): refresh control ui locales
- [#168484](https://github.com/openclaw/openclaw/pull/168484) refactor: prepare message action discovery asynchronously
- [#168483](https://github.com/openclaw/openclaw/pull/168483) feat(plugin-sdk): add worker-owned conversation binding APIs
- [#168419](https://github.com/openclaw/openclaw/pull/168419) fix(migrate): refuse imports while the Gateway owns local state
- [#83178](https://github.com/openclaw/openclaw/pull/83178) fix(memory-flush): fallback to estimatePromptTokensFromSessionTranscript when usage data is unavailable
- [#168639](https://github.com/openclaw/openclaw/pull/168639) perf(gateway): reduce placement SQL on local turns
- [#168643](https://github.com/openclaw/openclaw/pull/168643) improve: reduce idle delivery and notification database work
- [#168636](https://github.com/openclaw/openclaw/pull/168636) perf(memory): reduce SQL calls during index publication
- [#168635](https://github.com/openclaw/openclaw/pull/168635) perf(plugin-state): reuse committed observations during turns
- [#168482](https://github.com/openclaw/openclaw/pull/168482) refactor: prepare command and approval eligibility asynchronously
- [#168576](https://github.com/openclaw/openclaw/pull/168576) refactor(ui): share presentation primitives across Solid and Lit
- [#168606](https://github.com/openclaw/openclaw/pull/168606) refactor(workboard): render the browser UI with Solid 2
- [#168481](https://github.com/openclaw/openclaw/pull/168481) refactor: resolve persisted channel accounts asynchronously
- [#168653](https://github.com/openclaw/openclaw/pull/168653) fix(node): keep paired credentials after service enrollment
- [#168316](https://github.com/openclaw/openclaw/pull/168316) improve(sessions): reduce repeated database reads during chat turns
- [#168641](https://github.com/openclaw/openclaw/pull/168641) fix: explain unavailable Codex sessions on paired devices
- [#168655](https://github.com/openclaw/openclaw/pull/168655) improve: reduce repeated runtime fact queries on unchanged turns
- [#168392](https://github.com/openclaw/openclaw/pull/168392) fix(agents): guard prompt-cache reuse across replay and releases
- [#168480](https://github.com/openclaw/openclaw/pull/168480) refactor: prepare conversation ownership off the Gateway thread
- [#168647](https://github.com/openclaw/openclaw/pull/168647) perf(sqlite): reuse admission snapshots across worker requests
- [#168383](https://github.com/openclaw/openclaw/pull/168383) fix(telegram): keep table before blockquote/list as sibling, not nested or dropped
- [#168614](https://github.com/openclaw/openclaw/pull/168614) fix(ai): normalize streamed tool argument progress
- [#168657](https://github.com/openclaw/openclaw/pull/168657) feat(ui): add Solid chat render lifecycle
- [#168654](https://github.com/openclaw/openclaw/pull/168654) fix(test): restore Gateway steering input assertions
- [#168479](https://github.com/openclaw/openclaw/pull/168479) refactor: move native binding preparation to workers
- [#112811](https://github.com/openclaw/openclaw/pull/112811) feat(msteams): support multiple bot accounts
- [#168577](https://github.com/openclaw/openclaw/pull/168577) fix(update): allow Doctor to retire Workshop proposal tables
- [#168594](https://github.com/openclaw/openclaw/pull/168594) test(gateway): retry plugin reload refused by post-ready registry refresh
- [#168220](https://github.com/openclaw/openclaw/pull/168220) refactor: deslop plugin core and smaller runtime leftovers
- [#168598](https://github.com/openclaw/openclaw/pull/168598) chore(ui): refresh control ui locales
- [#168417](https://github.com/openclaw/openclaw/pull/168417) fix(cli): guard config and agent writes at command boundaries
- [#167080](https://github.com/openclaw/openclaw/pull/167080) fix(triage): require working Gateway RPC before claiming recovery
- [#168623](https://github.com/openclaw/openclaw/pull/168623) improve: default device joins to session-host services
- [#168300](https://github.com/openclaw/openclaw/pull/168300) test(memory): own the fenced late manager's successor provider
- [#168622](https://github.com/openclaw/openclaw/pull/168622) test(qa-lab): size the repeated-turn child close budget for loaded CI
- [#167672](https://github.com/openclaw/openclaw/pull/167672) fix: keep subagent wait counts pending through overlapping reads
- [#168454](https://github.com/openclaw/openclaw/pull/168454) fix(crabbox): don't wait for optional teardown capture
- [#168325](https://github.com/openclaw/openclaw/pull/168325) feat: organize personal navigation in a compact sidebar rail
- [#168633](https://github.com/openclaw/openclaw/pull/168633) fix(plugins): preserve config for unchanged policy requests
- [#168616](https://github.com/openclaw/openclaw/pull/168616) improve(ui): put everyday session actions first
- [#168550](https://github.com/openclaw/openclaw/pull/168550) fix(sessions): avoid false indexing state in completed searches
- [#168617](https://github.com/openclaw/openclaw/pull/168617) fix(models): discover models after API-key sign-in
- [#168634](https://github.com/openclaw/openclaw/pull/168634) fix(ui): restore startup toast recovery test after reload
- [#168619](https://github.com/openclaw/openclaw/pull/168619) fix(cron): keep busy Gateway work from blocking updates
- [#166223](https://github.com/openclaw/openclaw/pull/166223) fix: model list builds slow down quadratically with large provider catalogs
- [#168059](https://github.com/openclaw/openclaw/pull/168059) perf(control-ui): preload native plugin assets together
- [#168478](https://github.com/openclaw/openclaw/pull/168478) feat(plugin-sdk): add worker-owned keyed state
- [#168471](https://github.com/openclaw/openclaw/pull/168471) fix(cli): keep Memory and Matrix state consistent with the Gateway
- [#158974](https://github.com/openclaw/openclaw/pull/158974) fix: preserve valid values in tool argument unions
- [#168597](https://github.com/openclaw/openclaw/pull/168597) feat(ui): add visual parity capture and reports
- [#168603](https://github.com/openclaw/openclaw/pull/168603) fix(agents): keep Claude CLI utility work on Haiku
- [#138416](https://github.com/openclaw/openclaw/pull/138416) fix(compaction): keep required facts when fitting a dense summary to the request budget
- [#168566](https://github.com/openclaw/openclaw/pull/168566) fix(models): honor live thinking levels in agent runs
- [#168042](https://github.com/openclaw/openclaw/pull/168042) perf(anthropic): preserve conversation cache checkpoints
- [#168359](https://github.com/openclaw/openclaw/pull/168359) fix(gateway): operator Stop misses OpenAI-compatible HTTP runs before the runner starts
- [#168605](https://github.com/openclaw/openclaw/pull/168605) fix: restore model fallback after provider timeouts
- [#168382](https://github.com/openclaw/openclaw/pull/168382) build: add shrink-only SQLite dialect ratchet
- [#168595](https://github.com/openclaw/openclaw/pull/168595) feat: require macOS, iOS, and Safari 26.2
- [#168601](https://github.com/openclaw/openclaw/pull/168601) fix(opencode): show listed Zen models and explain free-tier refusals
- [#168608](https://github.com/openclaw/openclaw/pull/168608) test(plugins): start dreaming under the boot path, not the reload candidate deadline
- [#168560](https://github.com/openclaw/openclaw/pull/168560) chore(ci): queue ClawSweeper reviews directly instead of through a relay run
- [#168500](https://github.com/openclaw/openclaw/pull/168500) fix: malformed tool calls report auth failures when argument length is 401 or 403
- [#168548](https://github.com/openclaw/openclaw/pull/168548) fix(sessions): invalidate peer admission on config publication
- [#153728](https://github.com/openclaw/openclaw/pull/153728) fix: recover unfinished tool work after empty length responses
- [#150685](https://github.com/openclaw/openclaw/pull/150685) fix(ai): stream completions text live when reasoning precedes it
- [#168578](https://github.com/openclaw/openclaw/pull/168578) fix(agents): discard replaced CLI tool inputs
- [#164804](https://github.com/openclaw/openclaw/pull/164804) fix(ollama): reuse prompt prefixes across subagent spawns
- [#167874](https://github.com/openclaw/openclaw/pull/167874) fix: local model runs falsely succeed after partial response failures
- [#148538](https://github.com/openclaw/openclaw/pull/148538) fix: configured top_p is silently ignored while topP works
- [#89894](https://github.com/openclaw/openclaw/pull/89894) fix(docs): reorder AGENTS.md template to protect critical rules from truncation (fixes #75187)
- [#168144](https://github.com/openclaw/openclaw/pull/168144) fix(codex): use monotonic clock for Ultrafast service tier deadline
- [#168087](https://github.com/openclaw/openclaw/pull/168087) fix(commands): use monotonic clock for remote Gateway restart deadline
- [#168298](https://github.com/openclaw/openclaw/pull/168298) fix(codex): keep codex rollout snapshot deadline monotonic across clock skew
- [#141686](https://github.com/openclaw/openclaw/pull/141686) fix(memory): split embedding requests at provider input-array limits
- [#168397](https://github.com/openclaw/openclaw/pull/168397) fix(sessions): refresh empty previews after restoring cold history
- [#168518](https://github.com/openclaw/openclaw/pull/168518) test(agents,plugins,skills): remove low-value tests (batch d046)
- [#168459](https://github.com/openclaw/openclaw/pull/168459) fix(proxy): keep capture writes with the Gateway state owner
- [#168529](https://github.com/openclaw/openclaw/pull/168529) docs(agents): lead with deliberate correctness/complexity/performance compromises
- [#168002](https://github.com/openclaw/openclaw/pull/168002) improve: reduce repeated SQLite work during chat turns

#### 🐛 New Issues
- [#168307](https://github.com/openclaw/openclaw/issues/168307) Gateway 2026.9.9: non-converging single-core grind after startup — intermittently refuses connections for 6+ hours (Windows, dumps + stacks included) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬13
- [#168207](https://github.com/openclaw/openclaw/issues/168207) claude-cli: session MCP server overrides are dropped before strict MCP overlay preparation (2026.9.9) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168413](https://github.com/openclaw/openclaw/issues/168413) memory.search.extraPaths content never recalled; stale reindex-lock forces keyword-only fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬3
- [#168092](https://github.com/openclaw/openclaw/issues/168092) [Bug]: macOS 2026.9.8 → 2026.9.9 update blocked by anchor-retired journal identity mismatch `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬3
- [#168593](https://github.com/openclaw/openclaw/issues/168593) Update failure: doctor-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#168523](https://github.com/openclaw/openclaw/issues/168523) Approval requests from headless/nested agent exec runs never render; empty self-reply user_request events `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#168580](https://github.com/openclaw/openclaw/issues/168580) [Bug]: ElevenLabs batch STT ignores providerOptions.elevenlabs (no_verbatim, tag_audio_events cannot be set) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168540](https://github.com/openclaw/openclaw/issues/168540) [Bug]: Discord slash commands fail when their per-user session is archived `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168160](https://github.com/openclaw/openclaw/issues/168160) main (24ca81d5): `RangeError: Maximum call stack size exceeded` ("Exception in PromiseRejectCallback") in the store writer queue and agent write admission `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168489](https://github.com/openclaw/openclaw/issues/168489) [Bug]: First model call to reasoning-mandatory endpoints is dispatched with reasoning disabled, even when the session store pins thinkingLevel: minimal `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#168082](https://github.com/openclaw/openclaw/issues/168082) [Bug]: ask_user 900s timeout settlement writes the no_answer tool result with a stale expectedMutationAt fence and fails the run with SqliteTranscriptMutationConflictError `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#168131](https://github.com/openclaw/openclaw/issues/168131) [Bug]: Safeguard compaction summary reads AGENTS.md from the gateway's process.cwd(), not the agent workspace (workspaceDir never reaches buildEmbeddedExtensionFactories) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168130](https://github.com/openclaw/openclaw/issues/168130) [Bug]: External TypeScript plugins load ~4x slower since 2026.9.8: plugin capture creates a jiti resolver per file, and each "./x.js" -> "x.ts" lookup throws ~228 errors with unlimited stack traces `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168389](https://github.com/openclaw/openclaw/issues/168389) [Feature]: Scoped "own automations" permission so an agent can create and manage its own scheduled jobs without full owner rights `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#168122](https://github.com/openclaw/openclaw/issues/168122) auto-reply: /<alias> model shorthand ignored for agent-local aliases (agents.entries.<id>.models) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168356](https://github.com/openclaw/openclaw/issues/168356) [Bug]: provider model discovery uses a fixed ~5s guarded-fetch budget and ignores models.providers.<id>.timeoutSeconds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#168794](https://github.com/openclaw/openclaw/issues/168794) [Bug]: Codex relay turns >32 MiB decoded image requests into retryable 502 errors `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168784](https://github.com/openclaw/openclaw/issues/168784) [Bug]: memory-wiki: a compile with no file updates and the same source generation still publishes a new compiled-cache row and deletes the active one `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#168676](https://github.com/openclaw/openclaw/issues/168676) [Bug]: claude-cli still delivers a Stop-hook-rejected draft when a tool call precedes the rewrite `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168783](https://github.com/openclaw/openclaw/issues/168783) [Bug]: memory-wiki: `openclaw wiki compile` compiles the vault twice when its source-sync step compiles, and reports the second compile's result `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#168749](https://github.com/openclaw/openclaw/issues/168749) [Bug]: `openclaw plugins update` fails with only "The CLI command failed." (no reason) while an unfinished update run holds plugin install records `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168748](https://github.com/openclaw/openclaw/issues/168748) [Bug]: Failed 2026.9.5→2026.10.1 update leaves @openclaw/codex on 2026.9.5; gateway serves with it and every turn fails (agent-harness-task-runtime not exported) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#168625](https://github.com/openclaw/openclaw/issues/168625) [Bug]: show_widget called through Tool Search (tool_call) loses its inline widget from chat.history `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168665](https://github.com/openclaw/openclaw/issues/168665) OpenAI image provider sends sizes gpt-image-1.5 rejects (e.g. 16:9 → 2048x1152) with a custom baseUrl `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168691](https://github.com/openclaw/openclaw/issues/168691) Update failure: unexpected-error (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#168688](https://github.com/openclaw/openclaw/issues/168688) [Bug]: Control UI "Icon & color" picker has no clear choice in the Emoji section; an emoji can only be removed from the Icons row `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#168662](https://github.com/openclaw/openclaw/issues/168662) [Feature]: Large-state 2026.9.4 installation cannot upgrade: candidate validation killed near 299 seconds `enhancement` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#168627](https://github.com/openclaw/openclaw/issues/168627) Control UI: composer Tool access never refreshes after a run, so it keeps saying "MCP tools will appear here after the next agent run" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168664](https://github.com/openclaw/openclaw/issues/168664) [Bug]: Control UI sidebar timer of a spawned session restarts at the spawn run's duration on every refresh during follow-up turns `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#168366](https://github.com/openclaw/openclaw/issues/168366) [Bug]: Telegram richMessages: a table followed by a blockquote is nested inside it, followed by a list it is dropped (2026.9.2–2026.9.9 regression vs 2026.7.1) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168626](https://github.com/openclaw/openclaw/issues/168626) `before_agent_reply` `{ handled: true }` (silence) on a Control UI chat turn is settled as "I finished the turn, but it did not produce a visible reply" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168344](https://github.com/openclaw/openclaw/issues/168344) system-agent-inference fails with "prepared model runtime generation was superseded" and survives doctor --fix restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#168138](https://github.com/openclaw/openclaw/issues/168138) [Bug]: 2026.9.9 stable — doctor pre-migration SQLite snapshot aborts on Synology DSM ("staging file changed during transfer"); fix exists in main/beta.2 but no stable ships it `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬2
- [#168534](https://github.com/openclaw/openclaw/issues/168534) [Bug]: macOS app runs `openclaw update repair` on every launch and stops the Gateway for ~2 minutes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#168251](https://github.com/openclaw/openclaw/issues/168251) [Bug] App Update button fails with managed-service-preflight when Gateway runs as launchd service with custom npm plugins `bug` `regression` `clawsweeper:needs-info` `P0` 💬2
- [#168205](https://github.com/openclaw/openclaw/issues/168205) Update failure: package-swap (2026.9.9) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬2
- [#168530](https://github.com/openclaw/openclaw/issues/168530) Update failure: gateway-recovery-verification (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#168373](https://github.com/openclaw/openclaw/issues/168373) Update failure: managed-service-update-handoff (2026.9.7) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬2
- [#168124](https://github.com/openclaw/openclaw/issues/168124) Update failure: managed-service-update-handoff (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#168116](https://github.com/openclaw/openclaw/issues/168116) Update failure: managed-service-update-handoff (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#168600](https://github.com/openclaw/openclaw/issues/168600) Update failure: package-doctor (2026.9.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#168367](https://github.com/openclaw/openclaw/issues/168367) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#168148](https://github.com/openclaw/openclaw/issues/168148) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#168624](https://github.com/openclaw/openclaw/issues/168624) [Feature]: Explore safety-first Android Auto support for explicit-turn assistant messaging `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#168585](https://github.com/openclaw/openclaw/issues/168585) main (23cf1bc3): at startup every agent past the 128th fails background preparation with "worker task capacity reached" and stays degraded (645 of 773 agents) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168450](https://github.com/openclaw/openclaw/issues/168450) [Bug]: Malformed tool-call error is classified as auth when argumentChars is 401 or 403 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168599](https://github.com/openclaw/openclaw/issues/168599) [Bug]: Remote CDP reachable by curl from WSL, but openclaw browser says not reachable `bug` `regression` `P2` `impact:ux-friction` 💬2
- [#168476](https://github.com/openclaw/openclaw/issues/168476) [Bug]: Talk gateway-relay writes every spoken sentence three times (transcript retry ladder) `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬2
- [#168159](https://github.com/openclaw/openclaw/issues/168159) main (24ca81d5): Codex app-server processes pile up after a few failed starts: a new node + `codex` pair every ~22 s, none reaped, and the event loop stalls 7-15 s on the same beat `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#168567](https://github.com/openclaw/openclaw/issues/168567) doctor --fix: malformed UTF-8 in root memory pair is silently merged into MEMORY.md with replacement characters `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#168565](https://github.com/openclaw/openclaw/issues/168565) migrate claude: malformed UTF-8 command file is imported with replacement characters and reported as migrated `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#168364](https://github.com/openclaw/openclaw/issues/168364) [Bug]: preemptive/mid-turn context precheck double-counts the system prompt when provider usage is measured → false compact_only `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬2
- [#168538](https://github.com/openclaw/openclaw/issues/168538) [Feature]: Add SearchBase as a built-in web search provider `enhancement` `P3` 💬2
- [#168372](https://github.com/openclaw/openclaw/issues/168372) Assistant agent-creation flow loses the new agent: config never committed before its own gateway.restart.safe `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#168456](https://github.com/openclaw/openclaw/issues/168456) [Bug] Model fallback dies on session-transcript turn-key assertion (cron agentTurn) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168477](https://github.com/openclaw/openclaw/issues/168477) Browser extension: support Opera/Brave/Edge native-host registration, and make setup work on browser-node-only machines `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#168412](https://github.com/openclaw/openclaw/issues/168412) [Bug]: iOS compact sidebar detail card leaves top and bottom safe-area gaps `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168362](https://github.com/openclaw/openclaw/issues/168362) [Bug]: Doctor conflates system Node SQLite risk with a Gateway running a different Node executable `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168306](https://github.com/openclaw/openclaw/issues/168306) [Bug]: Group prompt tells the agent to stay silent, but the default silence policy rejects NO_REPLY (claude-cli posts an error in the channel) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168193](https://github.com/openclaw/openclaw/issues/168193) [Bug]: gateway-node-exec-approvals e2e test can fail CI on an unhandled rejection while the test passes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168231](https://github.com/openclaw/openclaw/issues/168231) [Bug]: Bounded Codex turns do not rotate auth profiles after usage-limit failure `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168793](https://github.com/openclaw/openclaw/issues/168793) [Bug]: memory-wiki: a compile killed after writing its compiled-cache candidate leaves the row until oldest-first namespace eviction (256 rows / 512 MiB) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#168787](https://github.com/openclaw/openclaw/issues/168787) [Bug]: 2026.10.1: runtime context emitted as trailing system message causes vLLM Qwen HTTP 400 `bug` `regression` `P1` `impact:auth-provider` 💬1
- [#168792](https://github.com/openclaw/openclaw/issues/168792) Secret egress proxy: MITM root CA expires after 24h, breaking all proxied HTTPS egress until gateway restart 💬1
- [#168777](https://github.com/openclaw/openclaw/issues/168777) [Feature]: memory-core: resolve cache misses from published chunk vectors and stop retaining a second copy in `memory_embedding_cache` (64% of a 50,000-row cache duplicates `memory_index_chunks`) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168342](https://github.com/openclaw/openclaw/issues/168342) [Bug]: claude-cli turn woken by exec completion (notifyOnExit) runs with only exec/process/apply_patch — native and other OpenClaw tools dropped `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#168766](https://github.com/openclaw/openclaw/issues/168766) [Bug] 2026.9.8: subagent.run spawned by plugin fails "Unknown model" for a session model override that ordinary chat executes fine `P2` `impact:auth-provider` 💬1
- [#168743](https://github.com/openclaw/openclaw/issues/168743) [Bug]: macOS app Control UI reconnects every 12 to 16 s after a native-auth refusal with no attempt cap; each 4008 close logs at warn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168742](https://github.com/openclaw/openclaw/issues/168742) [Feature]: Log "node command surface withheld" once per node and withheld set instead of on every reconnect `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#168750](https://github.com/openclaw/openclaw/issues/168750) [Bug]: Update activation Doctor fails after ~24 min with "Database maintenance authority check cannot admit a nested effect" → state-migrated-no-rollback (2026.9.5→2026.10.1) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` `P0` 💬1
- [#168744](https://github.com/openclaw/openclaw/issues/168744) agent exec with local Ollama times out after tool catalog; direct/gateway inference succeeds (2026.9.5) `P2` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#168729](https://github.com/openclaw/openclaw/issues/168729) Update to 2026.9.9 fails with V8 heap OOM in the candidate doctor and activation doctor: updater ignores the Gateway service heap setting (large agent DB) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#168727](https://github.com/openclaw/openclaw/issues/168727) WebUI: restore a discoverable Background Tasks panel / historical task list 💬1
- [#168685](https://github.com/openclaw/openclaw/issues/168685) Agent replay: automation results carry job/run provenance that the model cannot see `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#168686](https://github.com/openclaw/openclaw/issues/168686) X: outbound results to a non-root post can land in a session that inbound replies do not use `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#168684](https://github.com/openclaw/openclaw/issues/168684) Cron: failure alerts and repair notices are sent but not written to the chat's transcript `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#168687](https://github.com/openclaw/openclaw/issues/168687) Control UI: run history does not show cron run diagnostics `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#168683](https://github.com/openclaw/openclaw/issues/168683) Agent: messages an automation sends with the `message` tool are stored but not model-visible in the receiving chat `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#168669](https://github.com/openclaw/openclaw/issues/168669) Update failure: finalize-doctor (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#168658](https://github.com/openclaw/openclaw/issues/168658) [Bug]: Cold SecretRef owners from a failed startup resolution are never retried; 1Password resolver discards op stderr `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168648](https://github.com/openclaw/openclaw/issues/168648) Gateway shutdown budget is sized from a 20 s exit timeout while launchd allows 75 s; shutdown is abandoned early, the owner lease is not released, and the next start waits ~5 min for the 300 s lease TTL `P1` `impact:crash-loop` 💬1
- [#168646](https://github.com/openclaw/openclaw/issues/168646) Failed ACP launches leave acpx session records open with no supported way to close them, and a later plugin reload waits on them indefinitely `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#168645](https://github.com/openclaw/openclaw/issues/168645) sessions_spawn runtime="acp" via an agents.entries.*.runtime.type="acp" entry fails dispatch: child key minted from harness id, not the config agent id `P2` `impact:session-state` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#168637](https://github.com/openclaw/openclaw/issues/168637) claude-cli exec completion wake fails with SESSION_DELIVERY_GENERATION_UNAVAILABLE `P1` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#168628](https://github.com/openclaw/openclaw/issues/168628) backup create: let operators (or plugins) mark folders inside agent workspaces as regenerable, such as node_modules `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168621](https://github.com/openclaw/openclaw/issues/168621) Gateway shutdown leaves agent-database leases when an earlier final close step fails `gateway` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#168620](https://github.com/openclaw/openclaw/issues/168620) Memory corpus inventory leaks agent-database leases from the transcript Worker, forcing integrity checks after restart `extensions: memory-core` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#168610](https://github.com/openclaw/openclaw/issues/168610) QA Lab: check replayed channel history against a plugin tool registered under a core tool name `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:linked-pr-open` 💬1
- [#168581](https://github.com/openclaw/openclaw/issues/168581) [Investigation] Completion-path plugin registry reuse beyond the known workspace omission `bug` `regression` 💬1
- [#168573](https://github.com/openclaw/openclaw/issues/168573) [Bug]: Memory-flush run cannot read or append through a symlinked `skills/` or `memory/`, and loops on the failed read `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#168572](https://github.com/openclaw/openclaw/issues/168572) [bug] WhatsApp: native image loader rejects staged inbound media — 'Local media path is not under an allowed directory' (path-not-allowed), 6 failed retries `P2` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#168568](https://github.com/openclaw/openclaw/issues/168568) [Bug]: Matrix owner automations.run enqueues successfully but manual execution immediately loses its admin grant (2026.9.9) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#168570](https://github.com/openclaw/openclaw/issues/168570) Feature: let an agent delete or edit its own earlier message in another conversation (Slack) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#168557](https://github.com/openclaw/openclaw/issues/168557) Agent credential requests: allow batching, persistent prompts, and kind: env `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#168558](https://github.com/openclaw/openclaw/issues/168558) Feature: opt-in trusted single-operator profile (no live-argument redaction, pasted credentials as env) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#168553](https://github.com/openclaw/openclaw/issues/168553) [Bug]: macOS Companion Codex setup-inference probe fails with Gateway caller authority no longer active (2026.9.9) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` `impact:auth-provider` 💬1
- [#168542](https://github.com/openclaw/openclaw/issues/168542) [Feature]: refine compact iOS sidebar presentation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#168541](https://github.com/openclaw/openclaw/issues/168541) [Feature]: Recoverable operation receipts for destructive transcript mutations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168528](https://github.com/openclaw/openclaw/issues/168528) [Bug]: Docker upgrade loops when agent SQLite snapshot staging file changes during transfer `bug` `regression` `P1` `impact:crash-loop` 💬1
- [#168519](https://github.com/openclaw/openclaw/issues/168519) [Bug]: memory-core dreaming sweep fails on the scheduled (cron) dispatch path — Plugin "memory-core" runtime is no longer active; the same job succeeds via manual cron run `P2` `impact:session-state` 💬1
- [#168514](https://github.com/openclaw/openclaw/issues/168514) v2026.9.9: Talk disconnect resets active context on :main; not reproduced in explicit dashboard session. `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#168508](https://github.com/openclaw/openclaw/issues/168508) [Bug]: Bun Gateway shutdown can exceed 2 s while memory cleanup is pending `bug` `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#168503](https://github.com/openclaw/openclaw/issues/168503) Replay drops cross-session delivery-mirror: isTranscriptOnlyOpenClawAssistantMessage hides outbound sent from another session, so the conversation never sees its own message `P1` `impact:session-state` 💬1
- [#168499](https://github.com/openclaw/openclaw/issues/168499) [Feature]: Track official MXC v1 adoption across Core, Windows Node and native Gateway packaging `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#168498](https://github.com/openclaw/openclaw/issues/168498) [Bug] Codex 2026.9.9 native session fails: plugin capture imports missing agent-harness-task-runtime export `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#168497](https://github.com/openclaw/openclaw/issues/168497) Visible sessions silently auto-archived after ~1 week idle (undocumented, no config option) 💬1
- [#168495](https://github.com/openclaw/openclaw/issues/168495) [Bug]: token-sharing OAuth refresh discards a rotated credential when post-rotation verification fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#168492](https://github.com/openclaw/openclaw/issues/168492) [Bug]: macOS remote-only companion: Chrome extension paired to absent local Gateway instead of node relay `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#168474](https://github.com/openclaw/openclaw/issues/168474) [Bug]: phone notifications from a paired Android node wake the agent (one NO_REPLY model call each) `P2` `impact:other` 💬1
- [#168475](https://github.com/openclaw/openclaw/issues/168475) [Bug]: Talk asks for a spoken yes before every allow-listed custom command `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#168472](https://github.com/openclaw/openclaw/issues/168472) [Bug]: Browser plugin loaded and functional, but toolNames remains empty and browser tool is absent from agent surface on Windows 11 (2026.9.9) `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#168468](https://github.com/openclaw/openclaw/issues/168468) Gateway 2026.9.9 (Windows): startup single-core grind for hours, event loop stalls refuse connections — JS profile attributes ~66% CPU to sync SQLite integrity_check; new 9.9 trigger paths re-fire it after convergence `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#168469](https://github.com/openclaw/openclaw/issues/168469) Update failure: package-swap (2026.9.8) `P0` `impact:ux-release-blocker` 💬1
- [#168455](https://github.com/openclaw/openclaw/issues/168455) Update failure: global-install-foreign-destination (2026.9.9) `P0` `impact:ux-release-blocker` 💬1
- [#168452](https://github.com/openclaw/openclaw/issues/168452) Idle Linux Gateway shows ~60-second CPU bursts; placement maintenance is a timing match (2026.9.9) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#168448](https://github.com/openclaw/openclaw/issues/168448) Codex harness: two idle-forever app-server processes per agent (discovery + turn client), no way to retire idle ones 💬1
- [#168444](https://github.com/openclaw/openclaw/issues/168444) [Bug]: Discord bots remain disconnected after macOS sleep/wake; account stop/start does not recover `bug` `bug:behavior` `P1` `impact:other` 💬1
- [#168440](https://github.com/openclaw/openclaw/issues/168440) macOS app appears under "Connected without pairing" in Devices `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#168443](https://github.com/openclaw/openclaw/issues/168443) [Bug]: strict overflow checks miss the completions builder's own "Context window exceeded" refusal 💬1
- [#168415](https://github.com/openclaw/openclaw/issues/168415) iOS realtime Talk over the Gateway relay crashes on the first reply and is silent on the iPhone speaker `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:crash-loop` 💬1
- [#168407](https://github.com/openclaw/openclaw/issues/168407) [Bug]: Isolated cron jobs with delivery "none" lose subagent completions (no owner; deleteAfterRun aborts the fallback turn) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168404](https://github.com/openclaw/openclaw/issues/168404) Gateway rejects `agent` RPC with UNAVAILABLE while the target session holds a turn claim — no spool, no dead-letter, no retry `P2` `impact:message-loss` 💬1
- [#168396](https://github.com/openclaw/openclaw/issues/168396) macOS app crashes (SIGTRAP) on computer list_windows with Peekaboo provider: WebChatWindow.title read off main thread `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#168386](https://github.com/openclaw/openclaw/issues/168386) [Feature]: Sidebar footer user button looks like a static label; add a dropdown affordance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168377](https://github.com/openclaw/openclaw/issues/168377) [Bug]: 2026.9.9 completed anchor-retired receipt still blocks recovery after handoff database identity changes 💬1
- [#168374](https://github.com/openclaw/openclaw/issues/168374) oc-path find: recursive wildcard ** misses zero-segment matches and duplicates results `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#168357](https://github.com/openclaw/openclaw/issues/168357) Docs: document AtMem managed memory setup `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#168355](https://github.com/openclaw/openclaw/issues/168355) exec Code Mode: r.stdout always undefined since v9.8 upgrade 💬1
- [#168353](https://github.com/openclaw/openclaw/issues/168353) Update failure: finalize-doctor (2026.9.9) `P2` `impact:ux-friction` 💬1
- [#168352](https://github.com/openclaw/openclaw/issues/168352) Regression: stdio MCP servers orphaned (reparented to PID 1) on reconnect since 2026.9.6 (spawn-broker/service-child-relay) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#168351](https://github.com/openclaw/openclaw/issues/168351) Auth-profile rate_limit cooldown ignores provider-reported reset time, uses error-count backoff instead `P2` `impact:auth-provider` 💬1
- [#168339](https://github.com/openclaw/openclaw/issues/168339) [Bug]: Blocked subagent-completion notices run as their own requester turns since #167113 and stay queued after the settle wake delivers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168343](https://github.com/openclaw/openclaw/issues/168343) [v9.8 regression] exec Code Mode: r.stdout always undefined (exitCode correct) 💬1
- [#168332](https://github.com/openclaw/openclaw/issues/168332) [Bug]: claude-cli runs never produce browser tab cards, so the Browser panel cannot show the agent's tab `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#168334](https://github.com/openclaw/openclaw/issues/168334) [Bug]: recurring --trigger-once jobs are never deleted with --delete-after-run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#168323](https://github.com/openclaw/openclaw/issues/168323) Supported plugin contract for recoverable isolated agent calls and result acknowledgment `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168324](https://github.com/openclaw/openclaw/issues/168324) [Feature]: Zalo Personal: durable observation of authorized group messages before mention gating `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168322](https://github.com/openclaw/openclaw/issues/168322) Docs and help text use unnecessary jargon `docs` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#168311](https://github.com/openclaw/openclaw/issues/168311) [Bug]: Dashboard cold load shows welcome before conversation history is known `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#168308](https://github.com/openclaw/openclaw/issues/168308) [Feature]: Desktop tray chat UI does not render custom session groups `enhancement` `P2` `impact:ux-friction` 💬1
- [#168303](https://github.com/openclaw/openclaw/issues/168303) [Feature]: Retain authenticated release-plan artifacts for read-only outage status `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168288](https://github.com/openclaw/openclaw/issues/168288) [Bug]: Codex usage-limit error in OpenClaw 2026.9.9 while a fresh native CLI test succeeds `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#168278](https://github.com/openclaw/openclaw/issues/168278) [Feature]: Support configurable long-lived / resumable plugin approvals for remote MCP risk-control flows `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#168800](https://github.com/openclaw/openclaw/issues/168800) [Bug]: Windows update repair fails with OPENCLAW_STATE_LEASE_LOST after Doctor (2026.10.1-based build)

#### 🔒 Closed Issues
- [#149538](https://github.com/openclaw/openclaw/issues/149538) main (1611ca6d): Gateway reaches ready but never serves; every /health probe times out while the event loop is starved (632-agent fleet)
- [#119411](https://github.com/openclaw/openclaw/issues/119411) [Bug]: memory file watcher never reindexes, and `memory status` reports `Dirty: no` while indexed count is below on-disk count
- [#168307](https://github.com/openclaw/openclaw/issues/168307) Gateway 2026.9.9: non-converging single-core grind after startup — intermittently refuses connections for 6+ hours (Windows, dumps + stacks included)
- [#88079](https://github.com/openclaw/openclaw/issues/88079) [Regression] WebChat: reasoning_content not streamed for Kimi Code & DeepSeek Reasoner — only MiniMax works
- [#130955](https://github.com/openclaw/openclaw/issues/130955) openclaw memory index stalls permanently after exactly 2 files/chunks (extraPaths and base memory dir both affected)
- [#69086](https://github.com/openclaw/openclaw/issues/69086) attempt-execution: scope session-history guard to assistant-after-latest-user and expose retry-prompt hook
- [#165860](https://github.com/openclaw/openclaw/issues/165860) [Bug]: Beta update can remain running at verifying after Gateway restart
- [#132615](https://github.com/openclaw/openclaw/issues/132615) openai-completions + thinking: onPartialReply never fires because textPhaseRequiresTerminal returns before emitAssistantStreamData
- [#75187](https://github.com/openclaw/openclaw/issues/75187) [Bug]: Auto-generated `AGENTS.md` puts load-bearing tool-use rules at the bottom; head-truncation by `bootstrapMaxChars` strips them
- [#138775](https://github.com/openclaw/openclaw/issues/138775) [Bug]: memory search livelocks — every search triggers a full reindex that cannot publish, and re-arms with no backoff
- [#40919](https://github.com/openclaw/openclaw/issues/40919) [Bug]: Performance degradation in session memory sync: full delete-reinsert pattern for growing JSONL files
- [#123265](https://github.com/openclaw/openclaw/issues/123265) [Bug]: role:"custom" runtime-context carrier with display:false is serialized as a trailing role:"user" message on every request
- [#83954](https://github.com/openclaw/openclaw/issues/83954) Document/support a Pro-plan path for gpt-5.5-pro and retired Spark via Codex CLI/app-server
- [#111697](https://github.com/openclaw/openclaw/issues/111697) [Bug]: Extremely slow prompt processing with LM Studio (Qwen3-8B) via Telegram
- [#141202](https://github.com/openclaw/openclaw/issues/141202) [Bug]: regression race after #120575: terminal process.poll can still trigger duplicate notifyOnExit wake
- [#101603](https://github.com/openclaw/openclaw/issues/101603) [Bug] Dreaming narrative: hardcoded 60s timeout includes lane-queue wait; timeout disposal aborts the primary call then discards the successful fallback-model output
- [#150286](https://github.com/openclaw/openclaw/issues/150286) [Bug]: Runtime facts sections emit a literal "none", so the tail runtime-context carrier is attached to every request and defeats prefix caches on local engines
- [#159706](https://github.com/openclaw/openclaw/issues/159706) [Bug]: skill-collection-review jobs are projected for agents whose tool profile excludes the review's tools, so they fail forever (2026.9.6)
- [#145438](https://github.com/openclaw/openclaw/issues/145438) [Docs Bug]: OpenAI OAuth recovery omits Advanced Account Security enrollment and credential ownership
- [#88188](https://github.com/openclaw/openclaw/issues/88188) Auto-compaction not triggering despite config (midTurnPrecheck + maxActiveTranscriptBytes)
- [#160839](https://github.com/openclaw/openclaw/issues/160839) [Bug]: memory keyword leg ANDs every query token (buildFtsQuery), so natural-language questions get no BM25 hits (2026.9.6; #15226 closed stale)
- [#168207](https://github.com/openclaw/openclaw/issues/168207) claude-cli: session MCP server overrides are dropped before strict MCP overlay preparation (2026.9.9)
- [#157762](https://github.com/openclaw/openclaw/issues/157762) [Feature]: Local Ollama: take thinking levels from `/api/show` → `thinking.values` (Qwen3.8's `xhigh` is refused, and High/Maximum run at its default)
- [#168092](https://github.com/openclaw/openclaw/issues/168092) [Bug]: macOS 2026.9.8 → 2026.9.9 update blocked by anchor-retired journal identity mismatch
- [#168593](https://github.com/openclaw/openclaw/issues/168593) Update failure: doctor-failed (2026.9.4)
- [#83177](https://github.com/openclaw/openclaw/issues/83177) MiniMax sessions: totalTokens stays undefined when model does not return usage data
- [#144842](https://github.com/openclaw/openclaw/issues/144842) Embedded agent runs with an explicit contextTokenBudget can permanently lose tool access after a stopReason: "length" turn
- [#168160](https://github.com/openclaw/openclaw/issues/168160) main (24ca81d5): `RangeError: Maximum call stack size exceeded` ("Exception in PromiseRejectCallback") in the store writer queue and agent write admission
- [#164791](https://github.com/openclaw/openclaw/issues/164791) Runtime context is still delivered as a raw `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` user turn in 2026.9.8 (follow-up to #142754)
- [#168082](https://github.com/openclaw/openclaw/issues/168082) [Bug]: ask_user 900s timeout settlement writes the no_answer tool result with a stale expectedMutationAt fence and fails the run with SqliteTranscriptMutationConflictError
- [#168131](https://github.com/openclaw/openclaw/issues/168131) [Bug]: Safeguard compaction summary reads AGENTS.md from the gateway's process.cwd(), not the agent workspace (workspaceDir never reaches buildEmbeddedExtensionFactories)
- [#163567](https://github.com/openclaw/openclaw/issues/163567) 1
- [#167837](https://github.com/openclaw/openclaw/issues/167837) [Bug]: `openclaw acp` bridge drops assistant text that accompanies tool calls (plans, warnings never reach the ACP client)
- [#168130](https://github.com/openclaw/openclaw/issues/168130) [Bug]: External TypeScript plugins load ~4x slower since 2026.9.8: plugin capture creates a jiti resolver per file, and each "./x.js" -> "x.ts" lookup throws ~228 errors with unlimited stack traces
- [#168122](https://github.com/openclaw/openclaw/issues/168122) auto-reply: /<alias> model shorthand ignored for agent-local aliases (agents.entries.<id>.models)
- [#153103](https://github.com/openclaw/openclaw/issues/153103) [Bug]: Chat annotation comment is discarded when viewport resize moves the transcript
- [#167574](https://github.com/openclaw/openclaw/issues/167574) Workboard: card is moved to blocked when the first model candidate fails, although the same run continues and completes on the fallback model
- [#161922](https://github.com/openclaw/openclaw/issues/161922) [Bug]: Retained package-backup symlink blocks npm updates during runtime inventory
- [#160643](https://github.com/openclaw/openclaw/issues/160643) [Bug] Group-anchor force-cleanup blocks forever on a lineage EOF it can never reach, orphaning the whole worker process group and permanently retaining the capacity slot
- [#158129](https://github.com/openclaw/openclaw/issues/158129) [Bug]: Windows node host: system.run breaks double-quoted arguments (cmd.exe receives \" escaping)
- [#136777](https://github.com/openclaw/openclaw/issues/136777) [Bug]: Placement reconciliation blocks unrelated node dispatch behind slow session
- [#168366](https://github.com/openclaw/openclaw/issues/168366) [Bug]: Telegram richMessages: a table followed by a blockquote is nested inside it, followed by a list it is dropped (2026.9.2–2026.9.9 regression vs 2026.7.1)
- [#168251](https://github.com/openclaw/openclaw/issues/168251) [Bug] App Update button fails with managed-service-preflight when Gateway runs as launchd service with custom npm plugins
- [#168205](https://github.com/openclaw/openclaw/issues/168205) Update failure: package-swap (2026.9.9)
- [#168530](https://github.com/openclaw/openclaw/issues/168530) Update failure: gateway-recovery-verification (2026.9.8)
- [#168373](https://github.com/openclaw/openclaw/issues/168373) Update failure: managed-service-update-handoff (2026.9.7)
- [#168124](https://github.com/openclaw/openclaw/issues/168124) Update failure: managed-service-update-handoff (2026.9.8)
- [#168116](https://github.com/openclaw/openclaw/issues/168116) Update failure: managed-service-update-handoff (2026.9.8)
- [#168600](https://github.com/openclaw/openclaw/issues/168600) Update failure: package-doctor (2026.9.7)
- [#168367](https://github.com/openclaw/openclaw/issues/168367) Update failure: global-install-failed (2026.9.4)
- [#168148](https://github.com/openclaw/openclaw/issues/168148) Update failure: runtime-verification-failed (2026.9.4)
- [#168450](https://github.com/openclaw/openclaw/issues/168450) [Bug]: Malformed tool-call error is classified as auth when argumentChars is 401 or 403
- [#168599](https://github.com/openclaw/openclaw/issues/168599) [Bug]: Remote CDP reachable by curl from WSL, but openclaw browser says not reachable
- [#168476](https://github.com/openclaw/openclaw/issues/168476) [Bug]: Talk gateway-relay writes every spoken sentence three times (transcript retry ladder)
- [#168364](https://github.com/openclaw/openclaw/issues/168364) [Bug]: preemptive/mid-turn context precheck double-counts the system prompt when provider usage is measured → false compact_only
- [#168538](https://github.com/openclaw/openclaw/issues/168538) [Feature]: Add SearchBase as a built-in web search provider
- [#144176](https://github.com/openclaw/openclaw/issues/144176) Device inventory memory bar always red on macOS due to os.freemem() misunderstanding
- [#161024](https://github.com/openclaw/openclaw/issues/161024) status waits out the full restart budget when a non-Gateway process holds the Gateway port
- [#139802](https://github.com/openclaw/openclaw/issues/139802) [Bug]: llama-cpp router discovery marks non-active models supportsTools:false even though the server reports true
- [#148304](https://github.com/openclaw/openclaw/issues/148304) Daily `Current date:` line in system prompt defeats positional prefix caches (vLLM) — should be configurable/moved
- [#158159](https://github.com/openclaw/openclaw/issues/158159) [Bug]: proxy completions still send a one-token request at the context cap for non-reasoning models and thinking off
- [#167865](https://github.com/openclaw/openclaw/issues/167865) Cron failure alert reports "Cause: timeout" for non-model errors (channel 500, ENOSPC, runner/tool failures)
- [#168193](https://github.com/openclaw/openclaw/issues/168193) [Bug]: gateway-node-exec-approvals e2e test can fail CI on an unhandled rejection while the test passes
- [#151055](https://github.com/openclaw/openclaw/issues/151055) memory-core: a hot reload of models.providers never rebuilds the cached memory index manager (stale provider config until restart)
- [#167766](https://github.com/openclaw/openclaw/issues/167766) [Bug]: Terminal cleanup loses an admitted Codex completion recovery claim and stalls Slack DMs
- [#154931](https://github.com/openclaw/openclaw/issues/154931) Supported update path for an intentionally public, capability-restricted DM agent
- [#168787](https://github.com/openclaw/openclaw/issues/168787) [Bug]: 2026.10.1: runtime context emitted as trailing system message causes vLLM Qwen HTTP 400
- [#168792](https://github.com/openclaw/openclaw/issues/168792) Secret egress proxy: MITM root CA expires after 24h, breaking all proxied HTTPS egress until gateway restart
- [#138198](https://github.com/openclaw/openclaw/issues/138198) [Bug]: GLM-style <tool_call>exec<arg_key> shadow text still reaches chat after #61645
- [#168342](https://github.com/openclaw/openclaw/issues/168342) [Bug]: claude-cli turn woken by exec completion (notifyOnExit) runs with only exec/process/apply_patch — native and other OpenClaw tools dropped
- [#168766](https://github.com/openclaw/openclaw/issues/168766) [Bug] 2026.9.8: subagent.run spawned by plugin fails "Unknown model" for a session model override that ordinary chat executes fine
- [#168727](https://github.com/openclaw/openclaw/issues/168727) WebUI: restore a discoverable Background Tasks panel / historical task list
- [#168648](https://github.com/openclaw/openclaw/issues/168648) Gateway shutdown budget is sized from a 20 s exit timeout while launchd allows 75 s; shutdown is abandoned early, the owner lease is not released, and the next start waits ~5 min for the 300 s lease TTL
- [#168053](https://github.com/openclaw/openclaw/issues/168053) feat: personalize the sidebar rail and separate navigation views
- [#127561](https://github.com/openclaw/openclaw/issues/127561) OpenAI-style top_p config is silently dropped while topP works
- [#168581](https://github.com/openclaw/openclaw/issues/168581) [Investigation] Completion-path plugin registry reuse beyond the known workspace omission
- [#168528](https://github.com/openclaw/openclaw/issues/168528) [Bug]: Docker upgrade loops when agent SQLite snapshot staging file changes during transfer
- [#168519](https://github.com/openclaw/openclaw/issues/168519) [Bug]: memory-core dreaming sweep fails on the scheduled (cron) dispatch path — Plugin "memory-core" runtime is no longer active; the same job succeeds via manual cron run
- [#168021](https://github.com/openclaw/openclaw/issues/168021) [Bug]: memory-core: "dreaming trigger failed: Malformed agent session key" on every heartbeat when heartbeat session is named `heartbeat`
- [#168503](https://github.com/openclaw/openclaw/issues/168503) Replay drops cross-session delivery-mirror: isTranscriptOnlyOpenClawAssistantMessage hides outbound sent from another session, so the conversation never sees its own message
- [#168015](https://github.com/openclaw/openclaw/issues/168015) Codex native auto-compaction clears transcriptByteCompactionLatch, so the next turn re-runs the byte-fuse preflight compaction
- [#167859](https://github.com/openclaw/openclaw/issues/167859) Control UI: typed /stop while the agent is running leaves queued turns, so the agent starts again right after the stop
- [#168497](https://github.com/openclaw/openclaw/issues/168497) Visible sessions silently auto-archived after ~1 week idle (undocumented, no config option)
- [#168474](https://github.com/openclaw/openclaw/issues/168474) [Bug]: phone notifications from a paired Android node wake the agent (one NO_REPLY model call each)
- [#168472](https://github.com/openclaw/openclaw/issues/168472) [Bug]: Browser plugin loaded and functional, but toolNames remains empty and browser tool is absent from agent surface on Windows 11 (2026.9.9)
- [#168469](https://github.com/openclaw/openclaw/issues/168469) Update failure: package-swap (2026.9.8)
- [#168455](https://github.com/openclaw/openclaw/issues/168455) Update failure: global-install-foreign-destination (2026.9.9)
- [#157702](https://github.com/openclaw/openclaw/issues/157702) [Bug]: MSTeams progress status runs rows together in 1:1 chats (informative updates are single-line)
- [#168448](https://github.com/openclaw/openclaw/issues/168448) Codex harness: two idle-forever app-server processes per agent (discovery + turn client), no way to retire idle ones
- [#168444](https://github.com/openclaw/openclaw/issues/168444) [Bug]: Discord bots remain disconnected after macOS sleep/wake; account stop/start does not recover
- [#168443](https://github.com/openclaw/openclaw/issues/168443) [Bug]: strict overflow checks miss the completions builder's own "Context window exceeded" refusal
- [#168014](https://github.com/openclaw/openclaw/issues/168014) [Bug] Steering a running turn blocks that turn's context-engine advancement for good (steer metadata rewrite rotates the transcript generation, so the closed-turn read returns session-rebound)
- [#168404](https://github.com/openclaw/openclaw/issues/168404) Gateway rejects `agent` RPC with UNAVAILABLE while the target session holds a turn claim — no spool, no dead-letter, no retry
- [#168377](https://github.com/openclaw/openclaw/issues/168377) [Bug]: 2026.9.9 completed anchor-retired receipt still blocks recovery after handoff database identity changes
- [#167742](https://github.com/openclaw/openclaw/issues/167742) claude-cli route emits no agent events while a tool call's input is being generated — chat goes silent during long Write/Edit streams
- [#153797](https://github.com/openclaw/openclaw/issues/153797) [Feature]: Personal session backgrounds with opt-out and custom images
- [#168355](https://github.com/openclaw/openclaw/issues/168355) exec Code Mode: r.stdout always undefined since v9.8 upgrade
- [#168353](https://github.com/openclaw/openclaw/issues/168353) Update failure: finalize-doctor (2026.9.9)
- [#168351](https://github.com/openclaw/openclaw/issues/168351) Auth-profile rate_limit cooldown ignores provider-reported reset time, uses error-count backoff instead
- [#152874](https://github.com/openclaw/openclaw/issues/152874) WebUI: reconnecting Advanced settings replaces loaded fields and resets scrolling
- [#168343](https://github.com/openclaw/openclaw/issues/168343) [v9.8 regression] exec Code Mode: r.stdout always undefined (exitCode correct)
- [#168308](https://github.com/openclaw/openclaw/issues/168308) [Feature]: Desktop tray chat UI does not render custom session groups
- [#161650](https://github.com/openclaw/openclaw/issues/161650) [Feature]: Float task progress above the conversation

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 252,560 · **Open issues:** 47,883 · **Last push:** <1h ago

On October 11, 2026, there were no new releases or merged pull requests for Hermes Agent. Notably, several new issues were reported, with #136349 raising concerns about compression markers leaking into files written by the agent, potentially leading to data corruption. Additionally, #136340 highlighted that goals remain paused after server errors during auto-continuations, despite a session resuming work. Another significant issue, #136350, pointed out a discrepancy between the actual resolution of `compression.threshold_tokens` and its documentation, causing confusion over its default value.

#### 🐛 New Issues
- [#136349](https://github.com/NousResearch/hermes-agent/issues/136349) Compression marker leaks into files written by the agent (data corruption) `type/bug` `comp/agent` `tool/file` `P3` 💬3
- [#136340](https://github.com/NousResearch/hermes-agent/issues/136340) Goal stays paused after server_error auto-continuations, even when the session resumes work `invalid` `comp/agent` `P3` 💬3
- [#136350](https://github.com/NousResearch/hermes-agent/issues/136350) `compression.threshold_tokens` resolves to 256000 while the docs say the default is `null` `type/bug` `comp/agent` `comp/cli` `area/config` 💬3
- [#136335](https://github.com/NousResearch/hermes-agent/issues/136335) [desktop] Completed assistant replies render twice after long tool-heavy turns (stale inflight-turn journal re-fold) `type/bug` `P3` `needs-repro` `sweeper:risk-session-state` 💬2
- [#136383](https://github.com/NousResearch/hermes-agent/issues/136383) [Setup]: 升级为0.21.6后新开对话或者进入旧对话很慢，你们遇到这种问题了吗？ `type/perf` `comp/tui` `P2` `needs-repro` 💬1
- [#136379](https://github.com/NousResearch/hermes-agent/issues/136379) Skills installed while gateway is running never appear in system prompt (Layer-1 in-process cache has no invalidation on skills change) `type/bug` `comp/agent` `tool/skills` `P2` 💬1
- [#136346](https://github.com/NousResearch/hermes-agent/issues/136346) Windows: stdio.py prepends the default install's venv\Scripts to PATH, so child 'hermes' runs another installation (shared-profile warning loops) `type/bug` `comp/cli` `P2` `sweeper:risk-platform-windows` 💬1
- [#136238](https://github.com/NousResearch/hermes-agent/issues/136238) [Bug]: Tool-loop advisories corrupt JSON-object tool results `type/bug` `comp/agent` `P2` 💬1
- [#136329](https://github.com/NousResearch/hermes-agent/issues/136329) Desktop: repeated "No handler registered" for shared-metrics IPC when the running app predates the source tree `type/bug` `P3` `sweeper:risk-compatibility` `comp/desktop` 💬1
- [#136236](https://github.com/NousResearch/hermes-agent/issues/136236) Telegram: exclusive_bot_mentions drops a group message that only mentions another bot in passing `type/bug` `comp/plugins` `platform/telegram` `P3` 💬1
- [#136188](https://github.com/NousResearch/hermes-agent/issues/136188) cron: a gateway restart releases the fire claim of a live restart-safe worker, so the replacement gateway re-fires the job and the worker's result is discarded `type/bug` `comp/cron` `P1` `sweeper:risk-message-delivery` 💬1
- [#136323](https://github.com/NousResearch/hermes-agent/issues/136323) [Bug]: CLI `--resume` recombines the stored model with the ambient default provider when the session row has no route (model name right, wrong backend) `type/bug` `comp/cli` `P2` `sweeper:risk-session-state` 💬1
- [#136204](https://github.com/NousResearch/hermes-agent/issues/136204) Desktop app ignores a profile's HERMES_WRITE_SAFE_ROOT (shared tui_gateway process); Bot-to-Bot deliveries route there too `type/security` `comp/agent` `comp/tui` `tool/file` 💬1
- [#136321](https://github.com/NousResearch/hermes-agent/issues/136321) load_soul_md still leaks the wrong profile's SOUL.md on latest (#50233 incomplete) — 2 repro paths, reproduced `type/bug` `comp/agent` `P2` `sweeper:risk-session-state` 💬1
- [#136386](https://github.com/NousResearch/hermes-agent/issues/136386) [Feature]: Desktop option to disable token by token streaming or display complete paragraphs
- [#136385](https://github.com/NousResearch/hermes-agent/issues/136385) Hindsight: 'downloading its local memory server' notice misreports daemon-start failure; no stale-lock recovery on Windows
- [#136376](https://github.com/NousResearch/hermes-agent/issues/136376) [Bug]: no_agent cron output delivered to Bot Chat runs a full agent turn (docs promise zero LLM involvement) `type/bug` `comp/cli` `comp/tui` `comp/cron`
- [#136377](https://github.com/NousResearch/hermes-agent/issues/136377) [Bug]: terminal foreground guard redirects detached starts (docker compose up -d/--detach/--wait, plain systemd-run) `type/bug` `comp/tools` `tool/terminal` `P2`
- [#136359](https://github.com/NousResearch/hermes-agent/issues/136359) Let one-shot `hermes chat` callers share a prompt-cache scope `type/feature` `comp/agent` `comp/cli` `provider/openai`
- [#136360](https://github.com/NousResearch/hermes-agent/issues/136360) [Feature]: Ultra effort is just an alias for max on Claude routes — no Claude Code-style Ultra (toggle + workflows) `type/feature` `comp/agent` `comp/plugins` `provider/anthropic`
- [#136121](https://github.com/NousResearch/hermes-agent/issues/136121) [Bug]: Failed plugin installs leak .install-* staging directories that nothing ever reaps `type/bug` `comp/cli` `comp/plugins` `P3`
- [#136159](https://github.com/NousResearch/hermes-agent/issues/136159) Update follow-up: corrupted dashboard respawn argv (fails every update) + contradictory gateway_restart warning `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#136351](https://github.com/NousResearch/hermes-agent/issues/136351) Documentation contradicts itself on the default turn cap `type/docs` `area/config` `P3`
- [#136348](https://github.com/NousResearch/hermes-agent/issues/136348) [Bug]: pm doctor crashes with KeyError 'sha256' on Termux — termux-docker bionic artifact has no sha256 field `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#136344](https://github.com/NousResearch/hermes-agent/issues/136344) [Feature]: Desktop file editor — soft-wrap long lines (or a wrap toggle) `type/feature` `P3` `comp/desktop`
- [#136333](https://github.com/NousResearch/hermes-agent/issues/136333) Kanban dashboard: task grouping breaks when an assignee is named `constructor` — JS prototype collision in `byProfile` `type/bug` `comp/plugins` `P3` `comp/dashboard`

#### 🔒 Closed Issues
- [#136379](https://github.com/NousResearch/hermes-agent/issues/136379) Skills installed while gateway is running never appear in system prompt (Layer-1 in-process cache has no invalidation on skills change)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,527 · **Open issues:** 8,704 · **Last push:** 5h ago

On October 11, 2026, there were no new releases for vLLM, but several important pull requests were merged, including a deprecation of scheduled deprecated items and a bug fix that allows log outputs to be correctly forwarded to the Anthropic handler. Significant updates include the restoration of pre-2.0 config loading for K-EXAONE and optimizations to the FlashInfer autotune table implementation. Among the new issues, a critical bug was identified with the DFlash draft model, where ignored layers were incorrectly aliased, resulting in significant drops in acceptance metrics. Overall, the day primarily consisted of maintenance and bug fixes, reflecting ongoing improvements within the vLLM framework.

#### ✅ Merged PRs
- [#60923](https://github.com/vllm-project/vllm/pull/60923) [Deprecation] Remove scheduled deprecated items
- [#60982](https://github.com/vllm-project/vllm/pull/60982) [Bugfix][Frontend] Forward --enable-log-outputs to the Anthropic handler
- [#60085](https://github.com/vllm-project/vllm/pull/60085) [Fast Start] Preload the FlashInfer autotune table on the weight cache daemon
- [#60120](https://github.com/vllm-project/vllm/pull/60120) [Refactor] Remove dead code multiple places
- [#60680](https://github.com/vllm-project/vllm/pull/60680) [Compile] Fix sampler compile warning
- [#60187](https://github.com/vllm-project/vllm/pull/60187) [Bugfix][Model] K-EXAONE: restore loading of pre-2.0 configs and apply RoPE to the MTP layer
- [#60647](https://github.com/vllm-project/vllm/pull/60647) [HiSparse] Own GPU residency instead of editing core block-table rows
- [#58497](https://github.com/vllm-project/vllm/pull/58497) [BUG] Fix KV offload shared-memory slot selection using worker rank
- [#60973](https://github.com/vllm-project/vllm/pull/60973) [Bugfix][Responses API] Complete cache-write token accounting
- [#60522](https://github.com/vllm-project/vllm/pull/60522) [Misc] mv chat_utils.py to renderers.
- [#59853](https://github.com/vllm-project/vllm/pull/59853) [Model] Drop the 4x M-RoPE cache headroom for Qwen3-VL, Qwen3.5 and Qwen3.8
- [#60246](https://github.com/vllm-project/vllm/pull/60246) [Perf] Skip the M-RoPE warmup when every holder of the RoPE fuses it
- [#60954](https://github.com/vllm-project/vllm/pull/60954) [Bugfix][Model] Restore AXK1 config defaults dropped with the vendored config
- [#57881](https://github.com/vllm-project/vllm/pull/57881) [BreakableCG] Add eager break for Mamba-family ops
- [#56360](https://github.com/vllm-project/vllm/pull/56360) [ROCm] Remove MRV1 model exceptions
- [#57511](https://github.com/vllm-project/vllm/pull/57511) [Bugfix][XPU] Remove stale W4A8 weight after repacking
- [#60855](https://github.com/vllm-project/vllm/pull/60855) [Model] Support EAGLE3/DFlash aux hidden states for Granite
- [#60828](https://github.com/vllm-project/vllm/pull/60828) [Refactor] Deduplicate trace header handling in BaseServing
- [#60922](https://github.com/vllm-project/vllm/pull/60922) [Rust Frontend][gRPC] Remove `GenerateStream` producer task so disconnects abort requests
- [#60812](https://github.com/vllm-project/vllm/pull/60812) [Bugfix][LoRA] Fix GPT-OSS gate/up interleaving with mixed MoE LoRA formats
- [#48074](https://github.com/vllm-project/vllm/pull/48074) Optimize ppc64le vLLM runtime image size
- [#60452](https://github.com/vllm-project/vllm/pull/60452) [Attention] Decode an NVFP4 KV cache with XQA on SM12x
- [#58765](https://github.com/vllm-project/vllm/pull/58765) [Frontend][Build] Add `vllm download-kernels` for FlashInfer precompiled kernels
- [#59360](https://github.com/vllm-project/vllm/pull/59360) [Core] Release the FlashInfer allreduce workspace (MNNVL or TRT-LLM) with --enable-nccl-comm-suspend
- [#60404](https://github.com/vllm-project/vllm/pull/60404) [TEST][XPU][CI] Fix ci uva kernel test instability 2
- [#59085](https://github.com/vllm-project/vllm/pull/59085) [Feature][Attention] Cover a whole spec-verify in one DiffKV split-KV program
- [#55104](https://github.com/vllm-project/vllm/pull/55104) [ROCm][MXFP4] Align the AITER W4A4 MoE intermediate size to 128
- [#55504](https://github.com/vllm-project/vllm/pull/55504) [Bugfix] Bound GDN speculative decode query widths
- [#57108](https://github.com/vllm-project/vllm/pull/57108) [Bugfix][ModelLoader] Make enable_weights_track check quantized layers
- [#60397](https://github.com/vllm-project/vllm/pull/60397) [ROCm][Perf][DSv4.1] Mono decode layer for DeepSeek-V4.1-Flash on MI355X

#### 🐛 New Issues
- [#60947](https://github.com/vllm-project/vllm/issues/60947) [Feature]: Allow pooling tasks (token_embed / token_classify) to reuse prefix cache while returning full hidden-state sequences `feature request` `quantization` `kv-cache-manager` `pooling` 💬4
- [#61003](https://github.com/vllm-project/vllm/issues/61003) [Bug] DFlash draft model: fp8 `ignored_layers` are not aliased to global layer indices, so excluded bf16 projections are loaded into fp8 parameters (acceptance drops from 4.3 to 1.0) `rocm` `speculative-decoding` `quantization` 💬2
- [#61027](https://github.com/vllm-project/vllm/issues/61027) [Bug]: CPU MXFP4 MoE (gpt-oss) broken on AMD EPYC after AMX gate `rocm` `gpt-oss` `quantization` 💬1
- [#61024](https://github.com/vllm-project/vllm/issues/61024) [Roadmap] vLLM Roadmap Q4 2026 `rocm` `quantization` `kimi` `k3` 💬1
- [#60998](https://github.com/vllm-project/vllm/issues/60998) SamplingParams accepts float for int fields (max_tokens/min_tokens/logprobs), then LLM.generate() hangs on an EngineCore msgspec decode error 💬1
- [#60977](https://github.com/vllm-project/vllm/issues/60977) [Bug]: EmbeddingGemma 2 rejects dimensions=768 despite returning 768-dimensional embeddings 💬1
- [#60970](https://github.com/vllm-project/vllm/issues/60970) [Bug]: Qwen3-ASR with Rust frontend — EngineCore dies when a scheduler step batches unequal-length audio `bug` `rust` `scheduler` 💬1
- [#61040](https://github.com/vllm-project/vllm/issues/61040) [Bug]: DeepSeek-V4.1 crashes in decoder-replay CUDA graph with --moe-backend flashinfer_moe_ep_* (input_ids int32 vs int64) `bug` `deepseek` `DSv4.1`
- [#61030](https://github.com/vllm-project/vllm/issues/61030) [Performance]: LoRA shrink launches empty split-K programs with the default config (split_k=64 > ceil(K/block_k))
- [#61029](https://github.com/vllm-project/vllm/issues/61029) [Performance]: Triton decode with 64-token KV tiles beats FLASH_ATTN at kernel level on H100, but only +2.6% end to end `quantization`
- [#61026](https://github.com/vllm-project/vllm/issues/61026) [Bug]: /v1/realtime drops session.update prompt and language, so Qwen3-ASR realtime always uses a fixed prompt
- [#60971](https://github.com/vllm-project/vllm/issues/60971) [Bug]: --enable-log-outputs is ignored by the Anthropic /v1/messages endpoint
- [#61008](https://github.com/vllm-project/vllm/issues/61008) [Feature]: Add built-in support for TriAttention `feature request`
- [#61007](https://github.com/vllm-project/vllm/issues/61007) [Bug]: GB10 (sm_121) engine hangs forever inside a cuDNN FP8 GEMM picked via FlashInferFP8ScaledMMLinearKernel; CutlassFP8ScaledMMLinearKernel avoids it `quantization`
- [#60987](https://github.com/vllm-project/vllm/issues/60987) Opt-in request security middleware for the API server (rate limiting, IP lists, payload screening)
- [#60986](https://github.com/vllm-project/vllm/issues/60986) [RFC]: Scheduler-owned KV transfer obligations: release blocks only after both recv and send complete `kv-connector` `scheduler`
- [#60985](https://github.com/vllm-project/vllm/issues/60985) [Performance]: Resize video frames while decoding to skip full-resolution copies `performance`
- [#60981](https://github.com/vllm-project/vllm/issues/60981) [Bug]: ngram_gpu crashes with num_speculative_tokens_per_batch_size (assert num_speculative_tokens == self.k)
- [#60965](https://github.com/vllm-project/vllm/issues/60965) [RFC]: Support Internally Managed Elastic EP with the MP DP Backend `RFC`
- [#60964](https://github.com/vllm-project/vllm/issues/60964) [Installation]: `installation`
- [#60944](https://github.com/vllm-project/vllm/issues/60944) [Feature]: Explicitly trust a selected preload daemon to avoid checkpoint rescans on engine restart `feature request` `quantization`

#### 🔒 Closed Issues
- [#44985](https://github.com/vllm-project/vllm/issues/44985) [Bug]: vllm-0.22.0 fail to run "Qwen/Qwen3.5-9B" in offline `LLM` mode
- [#44688](https://github.com/vllm-project/vllm/issues/44688) [Performance]: Qwen3.6-35B-A3B-FP8 on RTX PRO 6000 Blackwell has very low decode throughput; missing FP8 MoE config for E=256,N=256
- [#44973](https://github.com/vllm-project/vllm/issues/44973) [Bug]: [ROCm][FLA] chunk_gated_delta_rule Triton compilation fails on MI210/gfx90a with num_stages=4
- [#48168](https://github.com/vllm-project/vllm/issues/48168) [Roadmap] vLLM Roadmap Q3 2026
- [#45198](https://github.com/vllm-project/vllm/issues/45198) [Bug]: vllm hangs at Triton kernel JIT compilation during inference: _zero_kv_blocks_kernel with TP=2
- [#59054](https://github.com/vllm-project/vllm/issues/59054) [Bug]: Triton attention: spec-decode verify batches (q_len>1) forced onto the 2D kernel — 7-20x per-call attention slowdown at long context
- [#45231](https://github.com/vllm-project/vllm/issues/45231) [Feature]: MI300/MI325 DeepSeekv4 Pro (Functional Support & Recipes)
- [#44998](https://github.com/vllm-project/vllm/issues/44998) [Feature]: triton_scaled_mm uses an AMD-tuned fixed tile heuristic — leaves up to 1.82x on NVIDIA H800 (Hopper sm_90)
- [#45088](https://github.com/vllm-project/vllm/issues/45088) [Bug]: Vllm init fails when model-loader-extra-config option provided
- [#43807](https://github.com/vllm-project/vllm/issues/43807) [RFC]: Deprecate `kv_both` for NIXLConnector and Enforce Explicit P/D Roles
- [#45079](https://github.com/vllm-project/vllm/issues/45079) [Bug]: [Anthropic] `cache_creation_input_tokens` and `cache_read_input_tokens` missing from `/v1/messages` usage response
- [#45156](https://github.com/vllm-project/vllm/issues/45156) [Bug]: cupy-cuda13x installed instead of cupy-cuda12x in CUDA 12.9 Docker image
- [#45257](https://github.com/vllm-project/vllm/issues/45257) [Bug]: max-num-seqs is not accurate when using async scheduling (especially affects P-D disaggregation prefills)
- [#45303](https://github.com/vllm-project/vllm/issues/45303) Performance tips for AMD MI210?
- [#60109](https://github.com/vllm-project/vllm/issues/60109) [Bug][HiSparse] GLM-5.3 TP8 on B200: illegal memory access when admitting a new request wave
- [#44996](https://github.com/vllm-project/vllm/issues/44996) [RFC]: Fast Runtime Resize of a Pre-Built EP Topology
- [#45020](https://github.com/vllm-project/vllm/issues/45020) [Feature Request] SLEM (String-Level Exact Match) speculative decoding for heterogeneous vocabularies
- [#45023](https://github.com/vllm-project/vllm/issues/45023) [RFC] Add Top-nσ logit truncation example via custom logits processor
- [#45028](https://github.com/vllm-project/vllm/issues/45028) [Installation]: Blocked by CVE-2025-30165 & CVE-2024-11041 (Legacy V0 Engine)
- [#45069](https://github.com/vllm-project/vllm/issues/45069) [RFC]: Profiler support for CUDA graph capture tracing and roofline trace annotations
- [#45075](https://github.com/vllm-project/vllm/issues/45075) [Feature]: Make vLLM compatible with Torch 2.12
- [#45092](https://github.com/vllm-project/vllm/issues/45092) [Bug]: In a dual-machine mixed setup running DP, some nodes fail to reach all_reduce on time, causing Gloo backend 'connection reset by peer'
- [#45174](https://github.com/vllm-project/vllm/issues/45174) [Bug]: KV events replay buffer drops topic frame, breaking external index recovery
- [#45220](https://github.com/vllm-project/vllm/issues/45220) Offering a free security review — no strings attached
- [#45235](https://github.com/vllm-project/vllm/issues/45235) [Bug]: docker离线启动qwen3-asr不支持返回时间戳
- [#45332](https://github.com/vllm-project/vllm/issues/45332) [Bug] test_w8a8_block_fp8_fused_moe uses fixed atol that K=7168 quantization noise legitimately exceeds (fails on SM120/RTX PRO 6000)
- [#60862](https://github.com/vllm-project/vllm/issues/60862) [Bug]: /v1/systemone noul questions without criteria lose label_mass to "Yes"/"No"
- [#60971](https://github.com/vllm-project/vllm/issues/60971) [Bug]: --enable-log-outputs is ignored by the Anthropic /v1/messages endpoint
- [#60819](https://github.com/vllm-project/vllm/issues/60819) [Bug]: Multimodal requests with an encoder input exceeding the per-step admission capacity hang indefinitely (no error, no timeout)
- [#60811](https://github.com/vllm-project/vllm/issues/60811) [Bug]: GPT-OSS LoRA gate/up delta layout mismatch with enable_mixed_moe_lora_format=True
- [#57503](https://github.com/vllm-project/vllm/issues/57503) [Bug][XPU]: LoRA initialization fails for W4A8 layer after XPU weight repacking

### SGLang (`sgl-project/sglang`)

**Stars:** 36,968 · **Open issues:** 5,651 · **Last push:** <1h ago

On October 11, 2026, there were no new releases for SGLang, but several significant pull requests were merged, including enhancements to TileLang with FP8 KV cache support on CUDA (#42957) and improvements in the dynamic LoRA delta integration during GEMM operations (#43501). Other notable merges addressed performance issues, such as optimizing the Qwen-Image-2.1 processing by skipping QKV packing under specific conditions (#43576) and ensuring error handling in the comfyui integration for SGLD mode (#43495). A troubling new issue was reported regarding the accuracy of the FX942 block-FP8 linear AITER CK blockscale GEMM, highlighting ongoing challenges with GPU compatibility and computational precision (#43526).

#### ✅ Merged PRs
- [#42957](https://github.com/sgl-project/sglang/pull/42957) [DSA] Support TileLang FP8 KV cache on CUDA
- [#43564](https://github.com/sgl-project/sglang/pull/43564) [Fix] Reserve remaining tokens for ignore_eos requests during prefill admission
- [#43495](https://github.com/sgl-project/sglang/pull/43495) [diffusion] comfyui: fail early instead of silently dropping features in SGLD integrated mode
- [#43601](https://github.com/sgl-project/sglang/pull/43601) [diffusion] torch.compile: skip inductor's saved multi-kernel pick (Z-Image warm starts crash or hang)
- [#43574](https://github.com/sgl-project/sglang/pull/43574) test(diffusion): skip the LTX-2 RMSNorm-modulation guard test off the CUDA platform
- [#43501](https://github.com/sgl-project/sglang/pull/43501) [diffusion] Add the dynamic LoRA delta inside the second GEMM
- [#43576](https://github.com/sgl-project/sglang/pull/43576) [diffusion] Qwen-Image-2.1: skip QKV packing while layers are offloaded
- [#43584](https://github.com/sgl-project/sglang/pull/43584) [diffusion] IPC all-to-all: keep exported buffers out of expandable segments
- [#43602](https://github.com/sgl-project/sglang/pull/43602) [diffusion] torch.compile: keep the TP all-reduce inside the graph
- [#43568](https://github.com/sgl-project/sglang/pull/43568) [diffusion] BCG: warn instead of disabling on unvalidated models
- [#43565](https://github.com/sgl-project/sglang/pull/43565) [diffusion] Bind each GPU worker to its GPU's NUMA node
- [#43575](https://github.com/sgl-project/sglang/pull/43575) [diffusion] FLUX: declare regional compile regions
- [#43573](https://github.com/sgl-project/sglang/pull/43573) [diffusion] Accept request-level profiling on the image API
- [#42808](https://github.com/sgl-project/sglang/pull/42808) [Dsv4.1] Mega-mhc integration
- [#43624](https://github.com/sgl-project/sglang/pull/43624) [Model] Keep gpt-oss router logits batch-invariant under deterministic inference
- [#43598](https://github.com/sgl-project/sglang/pull/43598) [CI] Fix Kimi-Linear DCP PD test startup
- [#41591](https://github.com/sgl-project/sglang/pull/41591) [DCP + L3 3/N] Support hybrid MLA/KDA DCP with file and Mooncake HiCache L3
- [#43460](https://github.com/sgl-project/sglang/pull/43460) [Refactor] Declare every model's stages from a shared function and drop the meta-device neighbour build
- [#43458](https://github.com/sgl-project/sglang/pull/43458) [Refactor] Decide an exit's fixed facts when the stage is built
- [#43457](https://github.com/sgl-project/sglang/pull/43457) [Refactor] Bind a layer stack in one pass over each stage's data flow
- [#43455](https://github.com/sgl-project/sglang/pull/43455) [Refactor] Make residual read and update capabilities explicit and checked
- [#43456](https://github.com/sgl-project/sglang/pull/43456) [Refactor] Decide input-scattered eligibility and stage rejections in one place
- [#43459](https://github.com/sgl-project/sglang/pull/43459) [Refactor] Declare pipeline neighbours from a shared declaration function
- [#43454](https://github.com/sgl-project/sglang/pull/43454) [Fix] Keep residual rows and sums consistent across appends and pipeline handoffs
- [#43453](https://github.com/sgl-project/sglang/pull/43453) [Refactor] Record what a bound stage path does instead of reading it back
- [#43029](https://github.com/sgl-project/sglang/pull/43029) [Scheduler] Use committed length in spec mamba track boundary check
- [#40453](https://github.com/sgl-project/sglang/pull/40453) [Model Loader] Add InstantTensor loader support
- [#42788](https://github.com/sgl-project/sglang/pull/42788) [HiCache] Keep protected cgroup page cache charged in host budgets
- [#43554](https://github.com/sgl-project/sglang/pull/43554) [Docs] Let the Qwen3 B300 recipe use the default attention backend
- [#43551](https://github.com/sgl-project/sglang/pull/43551) [Docs] Document Qwen3-4B/8B H200 mixed-chunk latency tradeoffs
- [#40102](https://github.com/sgl-project/sglang/pull/40102) [kv-shard 3/4] Enable Control Plane C
- [#39606](https://github.com/sgl-project/sglang/pull/39606) [HiCache] Add staged write-back for the page-unified KV cache layout
- [#41452](https://github.com/sgl-project/sglang/pull/41452) [MemCache] refactor: require an anchored lock receipt for non-root releases
- [#41446](https://github.com/sgl-project/sglang/pull/41446) [HiSparse] Avoid host synchronization in eager backup
- [#35524](https://github.com/sgl-project/sglang/pull/35524) [Responses] Fix max_output_tokens overestimate on multimodal requests
- [#43538](https://github.com/sgl-project/sglang/pull/43538) [CI] Fix EAGLE3 CUDA parity prefill chunk alignment
- [#43508](https://github.com/sgl-project/sglang/pull/43508) [diffusion] Run head_dim-128 QK-norm + RoPE two rows per warp for every RoPE layout
- [#43521](https://github.com/sgl-project/sglang/pull/43521) [diffusion] Pipeline every USPAttention Ulysses path's exchange over the copy engine
- [#42807](https://github.com/sgl-project/sglang/pull/42807) [Rust] Upgrade sglang-radix-tree to PyO3 0.29
- [#43547](https://github.com/sgl-project/sglang/pull/43547) [AMD][CI] Cap pyarrow below 26 for lmms-eval
- [#42854](https://github.com/sgl-project/sglang/pull/42854) [sglang-miles] [Diffusion] Support distributed weight updates
- [#42989](https://github.com/sgl-project/sglang/pull/42989) [rust-server] preserve PD routing in chat and completions
- [#43503](https://github.com/sgl-project/sglang/pull/43503) [CI] Drop CPU tests with no bug-catching signal and run Rust workspace tests in their own workflow
- [#41071](https://github.com/sgl-project/sglang/pull/41071) [AMD] Add an opt-in AITER CK blockscale GEMM for gfx942 block-FP8 linears
- [#43318](https://github.com/sgl-project/sglang/pull/43318) [AMD][CI] Drop removed tp_rank/tp_size kwargs from small-M FP8 proj test
- [#39840](https://github.com/sgl-project/sglang/pull/39840) [AMD] Resolving bug in per batch size graph capture due to multiple capture runs per batch size
- [#43385](https://github.com/sgl-project/sglang/pull/43385) [diffusion] fix: keep a LoRA unmerged under merge_mode auto when merging would round its update away
- [#43505](https://github.com/sgl-project/sglang/pull/43505) [CI] Fix Python 3.10 failure in prefill complete integration test
- [#43165](https://github.com/sgl-project/sglang/pull/43165) [DSv4.1] Initialize the full-to-SWA mapping for request-window pools
- [#43172](https://github.com/sgl-project/sglang/pull/43172) Clamp default decode CUDA graph max_bs to max_running_requests
- [#43470](https://github.com/sgl-project/sglang/pull/43470) [CI] Remove the GLM-5.3-Flash PTX KDA prefill nightly test
- [#42287](https://github.com/sgl-project/sglang/pull/42287) [Refactor][TCPCG] Retire backend selection and configuration (3/9)
- [#43478](https://github.com/sgl-project/sglang/pull/43478) [Dsv4.1] Add DeepSeek V4.1 DSPARK TP and DP EP accuracy coverage
- [#35755](https://github.com/sgl-project/sglang/pull/35755) [diffusion] Z-Image: autotune the shared transformer block at both token scales (H100 1024^2 denoise 13.58 -> 9.58 s, 1.42x)
- [#34978](https://github.com/sgl-project/sglang/pull/34978) [Diffusion] Fail MiniMax-H3 quality="high" closed on substituted DiT weights
- [#43373](https://github.com/sgl-project/sglang/pull/43373) [diffusion] perf: pipeline MiniMax-H3's Ulysses exchange against cuDNN SDPA on Blackwell
- [#43329](https://github.com/sgl-project/sglang/pull/43329) [PP+PD] Harden PPConsensusStore: msgspec wire format, drop malformed messages
- [#43442](https://github.com/sgl-project/sglang/pull/43442) [PD] Reclaim parked optimistic prefills when request slots are exhausted
- [#43474](https://github.com/sgl-project/sglang/pull/43474) [MemCache] Fix the strict busy check on prefill-aware SWA and tidy small leftovers
- [#43206](https://github.com/sgl-project/sglang/pull/43206) [unified memory pool] Allocate without transfer waits, pin floating SWA reservations, drop the HiCache startup asserts
- [#43472](https://github.com/sgl-project/sglang/pull/43472) [Docs] Standardize diffusion cookbook command builders
- [#36311](https://github.com/sgl-project/sglang/pull/36311) [diffusion] Add support for HunyuanImage-3.0-Instruct
- [#43233](https://github.com/sgl-project/sglang/pull/43233) [sgl-router] Read finished /generate streams to the end; expose reorg admission caps as flags
- [#42019](https://github.com/sgl-project/sglang/pull/42019) [Gemma4][Attention] Enable Gemma4 FA4 on SM90 with head-dim 512 support
- [#43435](https://github.com/sgl-project/sglang/pull/43435) Skip the eager activation reserve in KV sizing on a capped Full prefill role
- [#43410](https://github.com/sgl-project/sglang/pull/43410) [PD] Receive decode KV into separate paged SWA host pools; let host-capable receivers own abort drain tracking
- [#42604](https://github.com/sgl-project/sglang/pull/42604) [SM90] Use native block32 DeepGEMM for DeepSeek-V4.1
- [#43444](https://github.com/sgl-project/sglang/pull/43444) [Scheduler] Fix the deterministic-inference hang when a prefill chunk is shorter than its alignment
- [#42683](https://github.com/sgl-project/sglang/pull/42683) perf(kda): rebalance MTP verify precompute and state synchronization
- [#42982](https://github.com/sgl-project/sglang/pull/42982) [AMD][Fix] Saturate FP8 KV commits instead of reproducing e4m3fnuz NaN overflow
- [#43380](https://github.com/sgl-project/sglang/pull/43380) docs: add Wan-Animate-2 cookbook command picker

#### 🐛 New Issues
- [#43526](https://github.com/sgl-project/sglang/issues/43526) [AMD][Bug] Accuracy issue with gfx942 block-FP8 linear AITER CK blockscale GEMM 💬3
- [#43523](https://github.com/sgl-project/sglang/issues/43523) [Bug] DeepSeekV3Detector streaming drops the first tool call when two complete calls arrive in one increment 💬1
- [#43489](https://github.com/sgl-project/sglang/issues/43489) [Bug] [diffusion] FluxAdapter crashes on latent sizes not divisible by patch size 💬1
- [#43488](https://github.com/sgl-project/sglang/issues/43488) [Bug] [diffusion] FluxAdapter silently drops Kontext ref_latents and ControlNet control 💬1
- [#43615](https://github.com/sgl-project/sglang/issues/43615) [Bug] KDA prefill dispatch sends packed one-token batches with FP32 state into BF16-only FlashInfer recurrence
- [#43609](https://github.com/sgl-project/sglang/issues/43609) Opt-in request security middleware for the HTTP server (rate limiting, IP lists, payload screening)
- [#43588](https://github.com/sgl-project/sglang/issues/43588) [Bug] PP>1 (GLM-5.3/DSA): intermittent runtime crash in RotaryEmbedding.forward_cuda — query.view(positions.size(0), -1, head_size) with a shorter positions tensor
- [#43580](https://github.com/sgl-project/sglang/issues/43580) [Bug] PP>1 + DSA skip-topk stage boundary: 'OwedOutput' object has no attribute 'shape' during decode CUDA-graph capture
- [#43557](https://github.com/sgl-project/sglang/issues/43557) [PD] Runtime role switch: engine launched with --disaggregation-mode decode crashes with illegal memory access after decode -> prefill -> decode
- [#43540](https://github.com/sgl-project/sglang/issues/43540) [Bug] OTEL to Perfetto converter rejects whitespace-prefixed arrays and SMG spans
- [#43522](https://github.com/sgl-project/sglang/issues/43522) [Feature] π0.5 completion-boundary batching for heterogeneous denoising budgets
- [#43519](https://github.com/sgl-project/sglang/issues/43519) [Roadmap][NPU][Multimodal] Model support and serving features (2026 Q4)
- [#43514](https://github.com/sgl-project/sglang/issues/43514) [Bug] DFlash + Qwen3.8-27B: speculative decoding accept rate drops to 0 during serving
- [#43487](https://github.com/sgl-project/sglang/issues/43487) [Bug] [diffusion] Multiple FluxAdapter correctness issues in ComfyUI SGLDiffusion
- [#43486](https://github.com/sgl-project/sglang/issues/43486) [Bug] DSV4.1 Flash + DSPARK: CUDA caching allocator exhausts GPU memory under sustained max-batch decode (OOM crash every 15–25 min), KV pool only 29% used

#### 🔒 Closed Issues
- [#23035](https://github.com/sgl-project/sglang/issues/23035) [Roadmap] SGLang-Diffusion (26 Q2)
- [#30344](https://github.com/sgl-project/sglang/issues/30344) [Tracking] DSpark in SGLang: roadmap
- [#34120](https://github.com/sgl-project/sglang/issues/34120) Wide EP for GLM5-2 and kimi-k3
- [#33394](https://github.com/sgl-project/sglang/issues/33394) [RFC][sgl-router] Recoverable KV Placement State with Snapshots and Event Replay
- [#34297](https://github.com/sgl-project/sglang/issues/34297) [Roadmap] DSpark CUDA Graph correctness and robustness
- [#39412](https://github.com/sgl-project/sglang/issues/39412) [Bug] pd bootstrap params silently dropped on rust frontend openai endpoints
- [#36344](https://github.com/sgl-project/sglang/issues/36344) [Bug] Deterministic inference hangs when chunked prefill is smaller than the prefill alignment
- [#32470](https://github.com/sgl-project/sglang/issues/32470) [Bug] CUDA illegal memory access during compact ragged-verify graph capture (c128 plan kernel race)
- [#29794](https://github.com/sgl-project/sglang/issues/29794) [Bug] 910B run deepseek v4 flash w8a8 occure a error, AttributeError: '_OpNamespace' 'custom' object has no attribute 'npu_hc_pre'
- [#34392](https://github.com/sgl-project/sglang/issues/34392) [Bug] Gemma4UnifiedMultimodalEmbedder uses wrong input dim for audio → weight-loading AssertionError
- [#31018](https://github.com/sgl-project/sglang/issues/31018) [Bug] DSpark CUDA Graph Capture Fails When --speculative-dspark-block-size Overrides Checkpoint dspark_block_size
- [#34954](https://github.com/sgl-project/sglang/issues/34954) [diffusion] MiniMax-H3 quality="high" runs on Turbo-LoRA-merged weights — the audit gate has no adapter field
- [#34442](https://github.com/sgl-project/sglang/issues/34442) [Bug] Kimi-VL TP4/DP2 + DP-attention deadlocks on first image request (MoonViT encoder reduces on the global TP group)
- [#34434](https://github.com/sgl-project/sglang/issues/34434) [Bug] Fix unreferenced fire-and-forget asyncio tasks
- [#34397](https://github.com/sgl-project/sglang/issues/34397) [Feature] support read/write datalake（iceberg、delta lake、paimon、lance）
- [#33507](https://github.com/sgl-project/sglang/issues/33507) [Bug][PD] Prefill request aborted during KV transfer returns spurious finish_reason "length" (200) instead of "abort" (400/503)
- [#34367](https://github.com/sgl-project/sglang/issues/34367) [Bug][diffusion] LongLive2 `longlive2_i2v` aborts: num_frames not divisible by num_frames_per_block (causal DMD)
- [#41363](https://github.com/sgl-project/sglang/issues/41363) [CI] ltx_2_3_hq_pipeline perf checks fail on most diffusion PRs (load / decode / denoise variance)
- [#43184](https://github.com/sgl-project/sglang/issues/43184) [Bug] [diffusion] Chained SGLD LoRA nodes in ComfyUI keep only the last LoRA

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,774 · **Open issues:** 2,507 · **Last push:** 6h ago

On October 11, 2026, multiple versions of llama.cpp were released, with notable updates in b11552 which addressed a bug where a busy id_slot continued to run prompts from an incorrect context; b11551 added support for MiniCPM-V 4.7, enhancing model capabilities; and b11550 disabled the z17 target for unsupported compilers. Key merged features included enhancements for model handling with PR #29416 supporting MiniCPM-V 4.7 and improvements to OpenCL performance with the addition of new bin kernels in PR #30187. Among the new issues, #30313 raised concerns over a "throw path" test failing in the GLM-4.7-Flash run, which may require attention for further testing stability. Overall, it was an active day with critical improvements and new challenges to address.

#### 🚀 New Releases
- [b11552](https://github.com/ggml-org/llama.cpp/releases/tag/b11552) b11552
- [b11551](https://github.com/ggml-org/llama.cpp/releases/tag/b11551) b11551
- [b11550](https://github.com/ggml-org/llama.cpp/releases/tag/b11550) b11550
- [b11541](https://github.com/ggml-org/llama.cpp/releases/tag/b11541) b11541
- [b11540](https://github.com/ggml-org/llama.cpp/releases/tag/b11540) b11540

#### ✅ Merged PRs
- [#30295](https://github.com/ggml-org/llama.cpp/pull/30295) server: leave a busy slot untouched when a request pins it
- [#29416](https://github.com/ggml-org/llama.cpp/pull/29416) [Model] Support MiniCPM-V 4.7
- [#30297](https://github.com/ggml-org/llama.cpp/pull/30297) cmake(s390x): disable z17 target for unsupported compilers
- [#30140](https://github.com/ggml-org/llama.cpp/pull/30140) ggml: fix s390x all cpu build
- [#30272](https://github.com/ggml-org/llama.cpp/pull/30272) args: add LLAMA_ARG_SLOT_SAVE_PATH env for --slot-save-path
- [#30257](https://github.com/ggml-org/llama.cpp/pull/30257) spec: properly handle mtmd input for mtp
- [#30259](https://github.com/ggml-org/llama.cpp/pull/30259) mtmd: add build_inp_attn_mask
- [#27828](https://github.com/ggml-org/llama.cpp/pull/27828) cuda: always use MMVQ for MUL_MAT_ID on sm_60
- [#30103](https://github.com/ggml-org/llama.cpp/pull/30103) CUDA/HIP: fix race in flash_attn_ext_f16_process_tile when nbatch_combine != DKQ/2
- [#30157](https://github.com/ggml-org/llama.cpp/pull/30157) ggml-cpu(s390x): vectorize fp32 to fp16 conversion
- [#29274](https://github.com/ggml-org/llama.cpp/pull/29274) vulkan: use 4 rows for NVIDIA MUL_MAT_ID MMVQ except pre-Turing
- [#30187](https://github.com/ggml-org/llama.cpp/pull/30187) opencl: add bin kernels kernel_gemm_moe_q4_k_q8_1_dp4a_bin, kernel_gemm_moe_q6_k_q8_1_dp4a_bin
- [#29809](https://github.com/ggml-org/llama.cpp/pull/29809) sycl : accelerate MXFP4 MoE with arithmetic decoding and weight reordering

#### 🐛 New Issues
- [#30313](https://github.com/ggml-org/llama.cpp/issues/30313) test-chat: GLM-4.7-Flash "throw path" test fails when run with `--template GLM`; skipped in an unfiltered run
- [#30309](https://github.com/ggml-org/llama.cpp/issues/30309) Eval bug: Hexagon: htp_main_thread exits on a dspqueue_peek error (AEE_ENOMORE on v75), the host then hangs `bug-unconfirmed`
- [#30308](https://github.com/ggml-org/llama.cpp/issues/30308) Eval bug: WebUI: context window fillup bar tooltip flickers on hover `bug-unconfirmed`
- [#30307](https://github.com/ggml-org/llama.cpp/issues/30307) Eval bug: qwen4exp (Qwen3.8-Flash-Next) + MTP aborts on image input after #30257 (`GGML_ASSERT(ubatch.token …)` left in `graph_mtp`)
- [#30304](https://github.com/ggml-org/llama.cpp/issues/30304) Misc. bug: examples/sycl/build.sh builds without openssl support `bug-unconfirmed`
- [#30303](https://github.com/ggml-org/llama.cpp/issues/30303) Misc. bug: sycl backend does not play nice along other backends in same build `bug-unconfirmed`
- [#30302](https://github.com/ggml-org/llama.cpp/issues/30302) Eval bug: GSQ-RCO MTP Causes Black Screen of Death `bug-unconfirmed`
- [#30301](https://github.com/ggml-org/llama.cpp/issues/30301) Eval bug: [SYCL] RMS_NORM (rms_norm_f32_sycl) fails at launch with UR_RESULT_ERROR_UNSUPPORTED_FEATURE on Arc Pro B60 `bug-unconfirmed`
- [#30287](https://github.com/ggml-org/llama.cpp/issues/30287) Feature Request: Metal prefill speedup (~68%) on M5 Max (NAX / tensor API kernels) `enhancement`
- [#30281](https://github.com/ggml-org/llama.cpp/issues/30281) Feature Request: Fail test backend ops on missing or unsupported types `enhancement`
- [#30276](https://github.com/ggml-org/llama.cpp/issues/30276) Performance cliff: c=262144 with n_parallel>=4 collapses decode throughput (~5x) while np<=2 is fine
- [#30273](https://github.com/ggml-org/llama.cpp/issues/30273) Feature Request: Support BharatGen Param-1 (ParamBharatGenForCausalLM) `enhancement`
- [#30269](https://github.com/ggml-org/llama.cpp/issues/30269) Feature Request: SYCL build: file-local functions missing static, unreachable code after abort, extra semicolons `enhancement`

#### 🔒 Closed Issues
- [#26448](https://github.com/ggml-org/llama.cpp/issues/26448) Feature request: run MoE expert weights from host RAM via PCIe DMA (no H2D copy) — 23GB MoE on 1.6GB VRAM, 81GB Qwen3-235B on 8GB cards
- [#23737](https://github.com/ggml-org/llama.cpp/issues/23737) Eval bug: GGML_ASSERT(tensor->data != NULL) on Vulkan since b9318
- [#27116](https://github.com/ggml-org/llama.cpp/issues/27116) `GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN) failed` on startup with `--split-mode tensor` and `iq4_nl` kv-cache
- [#26219](https://github.com/ggml-org/llama.cpp/issues/26219) Misc. bug: Intel UHD 770 graphics crashes on Vulkan TOP_K unit test
- [#27693](https://github.com/ggml-org/llama.cpp/issues/27693) mtmd: one-sample audio input causes process abort
- [#27697](https://github.com/ggml-org/llama.cpp/issues/27697) mtmd: audio with a duration that is a multiple of 30s produces one extra silent chunk
- [#6400](https://github.com/ggml-org/llama.cpp/issues/6400) Kompute-based Vulkan backend shows an GGML_OP_GET_ROWS error
- [#29314](https://github.com/ggml-org/llama.cpp/issues/29314) fattn failure on gfx1201 in test-backend-ops
- [#27757](https://github.com/ggml-org/llama.cpp/issues/27757) Eval bug: tensor parallelism and kv offload crashes
- [#27801](https://github.com/ggml-org/llama.cpp/issues/27801) Eval bug: crash on RPC server when using gemma-4-26B MTP head
- [#27814](https://github.com/ggml-org/llama.cpp/issues/27814) Misc. bug: VRAM usage increased in msvc build vs clang on windows (+2gb)
- [#30225](https://github.com/ggml-org/llama.cpp/issues/30225) Feature Request: Stop lazy grammar trigger pattern search time from growing with buffer size

### Ollama (`ollama/ollama`)

**Stars:** 182,667 · **Open issues:** 4,242 · **Last push:** 2h ago

On October 11, 2026, there were no new releases or merged pull requests for Ollama, indicating a day of routine maintenance. However, several new issues were reported, including #18916, which highlights that Qwen3.5 4B is returning thinking-only responses in long conversations on version 0.40.2, and #18924, detailing an error related to the termination of the llama-server process due to an assertion failure. Additionally, a proposal was raised in #18922 to add KailA architecture support to the llama.cpp compatibility layer, while #18925 suggests the creation of portable CLI wrappers for centralized configuration and daemon control. Lastly, #18921 noted an issue where the `ollama list` command returns empty on Windows when the model location is an NTFS mount point path.

#### 🐛 New Issues
- [#18916](https://github.com/ollama/ollama/issues/18916) Qwen3.5 4B returns thinking-only responses for a long conversation on Ollama 0.40.2 `bug` 💬2
- [#18924](https://github.com/ollama/ollama/issues/18924) Error running rnj-1: llama-server process has terminated: GGML_ASSERT(hparams.is_swa_any()) failed: GGML_ASSERT(hparams.is_swa_any()) failed `bug` 💬1
- [#18922](https://github.com/ollama/ollama/issues/18922) proposal: add KailA (kail) architecture support to the llama.cpp compat layer `feature request` 💬1
- [#18925](https://github.com/ollama/ollama/issues/18925) [Feature Proposal]: Portable CLI Wrappers (ollama.bat/ollama.sh) for Centralized Configuration & Daemon Control `feature request`
- [#18921](https://github.com/ollama/ollama/issues/18921) Windows: `ollama list` returns empty when Model location is an NTFS mount point path `bug`

#### 🔒 Closed Issues
- [#18117](https://github.com/ollama/ollama/issues/18117) Bug: Vulkan buffer allocation fails (~900MB-1GB) with a larger prompt, despite >14GB VRAM free

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,920 · **Open issues:** 5,426 · **Last push:** <1h ago

There were no new releases for LiteLLM on October 11, 2026, but several significant pull requests were merged, including a backport of the decision model guardrail to versions stable/1.104.x and rc/1.105.0, along with various fixes to improve guardrail functionality and UI elements. Notably, the addition of a Home page for the dashboard offers a consolidated view with usage summaries, recent launches, blog updates, and a model leaderboard. Additionally, several issues were raised, with the most pressing being a bug related to the "cost-based-routing" strategy, which is causing routing errors for synchronous methods and impacting the operation of the MCP semantic tool filter.

#### ✅ Merged PRs
- [#45901](https://github.com/BerriAI/litellm/pull/45901) fix(mcp): backport request-local guardrail bearers to RC 106
- [#45897](https://github.com/BerriAI/litellm/pull/45897) fix(mcp): exclude gateway credentials from guardrail bearers
- [#45900](https://github.com/BerriAI/litellm/pull/45900) feat(guardrails): backport the decision model guardrail to stable/1.104.x (#45663)
- [#45894](https://github.com/BerriAI/litellm/pull/45894) feat(guardrails): backport the decision model guardrail to rc/1.105.0 (#45663)
- [#43383](https://github.com/BerriAI/litellm/pull/43383) fix(guardrails)!: scan or refuse attachments in the bedrock guardrail
- [#39667](https://github.com/BerriAI/litellm/pull/39667) test(headroom): pin that SDK-echoed null tool_calls never reach /v1/compress
- [#45858](https://github.com/BerriAI/litellm/pull/45858) feat(ui): add a Home page as the dashboard root with usage summary, recent launches, blog updates and a model leaderboard
- [#45850](https://github.com/BerriAI/litellm/pull/45850) refactor(rust): share provider constants via llms-types and restructure AGENTS.md
- [#42749](https://github.com/BerriAI/litellm/pull/42749) feat: forward-port dd user_email span tag and model hub description from internal staging
- [#42212](https://github.com/BerriAI/litellm/pull/42212) fix(langfuse): log Responses API token usage instead of zeros
- [#45890](https://github.com/BerriAI/litellm/pull/45890) fix(credentials): backport credential edit fixes to rc/1.106.0
- [#45822](https://github.com/BerriAI/litellm/pull/45822) fix(guardrails): guardrail Bedrock Converse stream text per content block
- [#45879](https://github.com/BerriAI/litellm/pull/45879) test(integration): move the openai cost tracking cases from cost_tracking_cases.json to CostTrackingTestCase literals
- [#45888](https://github.com/BerriAI/litellm/pull/45888) feat(guardrails): backport the decision model guardrail to rc/1.106.0 (#45663)
- [#45835](https://github.com/BerriAI/litellm/pull/45835) fix(credentials): keep credential labels and edits consistent across UI, API, and replicas
- [#45885](https://github.com/BerriAI/litellm/pull/45885) test(integration): move the remaining cost tracking cases, the cost map and the batch/realtime cases from cost_tracking_cases.json to Python literals
- [#45760](https://github.com/BerriAI/litellm/pull/45760) test: migrate local_testing SDK and provider tests out of build_and_test
- [#41566](https://github.com/BerriAI/litellm/pull/41566) test(e2e): cover persisted pricing spend
- [#45663](https://github.com/BerriAI/litellm/pull/45663) feat(guardrails): add decision model guardrail with Admin UI flow
- [#43734](https://github.com/BerriAI/litellm/pull/43734) fix(proxy/auth): expand all-team-models sentinel for project model access checks
- [#45877](https://github.com/BerriAI/litellm/pull/45877) fix(ui): backport modal backdrop fix to rc/1.106.0
- [#45724](https://github.com/BerriAI/litellm/pull/45724) fix(sagemaker): keep AWS credentials out of the sagemaker_chat request body
- [#45730](https://github.com/BerriAI/litellm/pull/45730) test(integration): streamed request bills the same SpendLogs row as the non-streamed request
- [#45846](https://github.com/BerriAI/litellm/pull/45846) feat(sdk): add litellm.systemone and trim litellm.decisions to the OpenAI shape
- [#45866](https://github.com/BerriAI/litellm/pull/45866) fix(ui): restore dashboard modal backdrops
- [#45550](https://github.com/BerriAI/litellm/pull/45550) fix(vertex_ai): parse Vertex timestamps as UTC so created_at is not shifted by the host timezone
- [#45849](https://github.com/BerriAI/litellm/pull/45849) fix(azure): move gpt-realtime-translate deprecation_date to the Models API date
- [#45843](https://github.com/BerriAI/litellm/pull/45843) ci: gate undocumented POST routes in the proxy OpenAPI document
- [#42741](https://github.com/BerriAI/litellm/pull/42741) fix(mcp): keep one upstream MCP session per gateway session across tool calls
- [#43838](https://github.com/BerriAI/litellm/pull/43838) feat(azure_storage): upload audit logs to Azure Storage via audit_log_callbacks
- [#45844](https://github.com/BerriAI/litellm/pull/45844) fix(proxy): only pass the JSON-RPC method to MCP admission auth
- [#45853](https://github.com/BerriAI/litellm/pull/45853) test(decisions): bill the OpenAI-format openrouter case from provider-reported cost
- [#45806](https://github.com/BerriAI/litellm/pull/45806) refactor(sdk): import UserAPIKeyAuth from litellm.types.proxy.auth
- [#45841](https://github.com/BerriAI/litellm/pull/45841) feat(ui): label the System One yes / no question type noul and explain it on hover
- [#45848](https://github.com/BerriAI/litellm/pull/45848) feat(ui): replace Reset example with an Example preset dropdown and a Clear button on the Decisions tab
- [#45838](https://github.com/BerriAI/litellm/pull/45838) docs(proxy): describe /v1/decisions and /v1/systemone in Swagger UI
- [#45800](https://github.com/BerriAI/litellm/pull/45800) refactor(types): move UserAPIKeyAuth, its token view and hash_token into litellm.types.proxy.auth.user_api_key_auth
- [#45805](https://github.com/BerriAI/litellm/pull/45805) refactor(core_utils): move resource_ownership out of the proxy
- [#41412](https://github.com/BerriAI/litellm/pull/41412) fix(proxy): describe rejected characters in key_alias validation error
- [#44167](https://github.com/BerriAI/litellm/pull/44167) feat(models): register ScaleDown text pricing
- [#44264](https://github.com/BerriAI/litellm/pull/44264) feat(otel)!: let a team capture_message_content override the global setting for its OTel v2 destination
- [#44168](https://github.com/BerriAI/litellm/pull/44168) feat(scaledown): add native text provider support
- [#45814](https://github.com/BerriAI/litellm/pull/45814) refactor(types): move MemberDeleteRequest into litellm.types.proxy.management_endpoints.team_endpoints
- [#45813](https://github.com/BerriAI/litellm/pull/45813) refactor(types): move user request models into litellm.types.proxy.management_endpoints.user_requests
- [#45810](https://github.com/BerriAI/litellm/pull/45810) refactor(types): move key request models into litellm.types.proxy.management_endpoints.key_requests
- [#43887](https://github.com/BerriAI/litellm/pull/43887) feat(proxy): per-model team member budgets with router fallback
- [#45749](https://github.com/BerriAI/litellm/pull/45749) refactor(anthropic): move raw SSE stream assembly helpers out of proxy guardrails
- [#45837](https://github.com/BerriAI/litellm/pull/45837) perf(ci): use native timing splits with bounded integration concurrency
- [#45802](https://github.com/BerriAI/litellm/pull/45802) refactor(types): move GenerateRequestBase and LiteLLM_ObjectPermissionBase into litellm.types.proxy.management_endpoints.request_base
- [#45809](https://github.com/BerriAI/litellm/pull/45809) refactor(types): annotate key request containers and drop_blank_team_id
- [#45779](https://github.com/BerriAI/litellm/pull/45779) refactor(constants): move AUTH_OBJECTS_TARGET into litellm.constants
- [#45768](https://github.com/BerriAI/litellm/pull/45768) refactor(skills): move NewSkillRequest to litellm.models.skills
- [#45840](https://github.com/BerriAI/litellm/pull/45840) fix(ui): store SSO exchange token via storeLoginToken to keep Secure flag
- [#45410](https://github.com/BerriAI/litellm/pull/45410) fix(terraform): stop sending blocked on litellm_user updates
- [#45753](https://github.com/BerriAI/litellm/pull/45753) refactor(anthropic): move prompt cache pricing helper out of the proxy package
- [#45845](https://github.com/BerriAI/litellm/pull/45845) fix(sdk): resolve litellm.proxy lazily on attribute access
- [#45829](https://github.com/BerriAI/litellm/pull/45829) fix(ui): load embedded Lens styles in the gateway
- [#45389](https://github.com/BerriAI/litellm/pull/45389) fix(proxy-extras): bound migration DDL lock waits with lock_timeout and retry
- [#43927](https://github.com/BerriAI/litellm/pull/43927) fix(ui): show the team member budget on keys without their own budget
- [#44133](https://github.com/BerriAI/litellm/pull/44133) fix(proxy): let configured pass-through endpoints outrank built-in provider prefix routes
- [#45784](https://github.com/BerriAI/litellm/pull/45784) fix(caching): give RedisClusterCache one async client per event loop
- [#45310](https://github.com/BerriAI/litellm/pull/45310) feat(usage): add top users by spend and user activity views
- [#45747](https://github.com/BerriAI/litellm/pull/45747) refactor(types): move is_jwt into litellm.types.proxy.auth.user_api_key_auth
- [#45808](https://github.com/BerriAI/litellm/pull/45808) refactor(types): annotate user request metadata and check_user_info validators
- [#45801](https://github.com/BerriAI/litellm/pull/45801) refactor(types): annotate GenerateRequestBase containers and check_max_budget
- [#45799](https://github.com/BerriAI/litellm/pull/45799) refactor(types): type UserAPIKeyAuth, its token view and hash_token in place
- [#45783](https://github.com/BerriAI/litellm/pull/45783) refactor(responses): move ColdStorageHandler out of proxy into litellm_core_utils
- [#45781](https://github.com/BerriAI/litellm/pull/45781) refactor(repositories): import proxy helpers inside the methods that use them
- [#45780](https://github.com/BerriAI/litellm/pull/45780) refactor(types): move complexity router request models next to their base config
- [#45776](https://github.com/BerriAI/litellm/pull/45776) refactor(types): import litellm lazily in prometheus types helpers
- [#45775](https://github.com/BerriAI/litellm/pull/45775) refactor(core): move path_utils from proxy common_utils to litellm_core_utils
- [#45774](https://github.com/BerriAI/litellm/pull/45774) refactor(types): import CustomLogger and CustomLLM under TYPE_CHECKING in adapter TypedDicts
- [#45772](https://github.com/BerriAI/litellm/pull/45772) refactor(responses): move responses_api_bridge_check out of litellm.main
- [#45771](https://github.com/BerriAI/litellm/pull/45771) refactor(cost-calc): move cache token extractors out of proxy savings
- [#45766](https://github.com/BerriAI/litellm/pull/45766) refactor: move stream_chunk_builder into streaming_chunk_builder_utils
- [#45763](https://github.com/BerriAI/litellm/pull/45763) refactor(types): move PassThroughGuardrailSettings into the pass-through types module
- [#45752](https://github.com/BerriAI/litellm/pull/45752) refactor(types): move slack alerting leaf types out of proxy/_types.py
- [#45748](https://github.com/BerriAI/litellm/pull/45748) refactor(anthropic): move prompt cache observation lookup out of the proxy hook
- [#45745](https://github.com/BerriAI/litellm/pull/45745) refactor(types): move CommonProxyErrors into litellm/types/proxy
- [#45742](https://github.com/BerriAI/litellm/pull/45742) refactor(llms): move typesafe passthrough logging handler out of proxy
- [#45740](https://github.com/BerriAI/litellm/pull/45740) refactor(types): import team and user table models from litellm.models
- [#45744](https://github.com/BerriAI/litellm/pull/45744) refactor(anthropic): move passthrough SSE stream assembly into litellm/llms
- [#45741](https://github.com/BerriAI/litellm/pull/45741) refactor(types): move LitellmUserRoles and KeyManagementRoutes into litellm.types.proxy.auth.user_roles
- [#45737](https://github.com/BerriAI/litellm/pull/45737) refactor(skills): import LiteLLM_SkillsTable from litellm.models
- [#45836](https://github.com/BerriAI/litellm/pull/45836) fix(bedrock): price the regionless Kimi K2.5 and K2 Thinking rows from the us-east-1 Bedrock price map
- [#44933](https://github.com/BerriAI/litellm/pull/44933) feat(proxy): require trace IDs per team on LLM, MCP and agent requests
- [#44469](https://github.com/BerriAI/litellm/pull/44469) fix(proxy): keep the parsed key when the custom key header is absent
- [#45828](https://github.com/BerriAI/litellm/pull/45828) fix: route OpenAI cyber policy errors to content policy fallbacks
- [#41276](https://github.com/BerriAI/litellm/pull/41276) fix(proxy): exempt zero-spend MCP discovery routes from budget checks
- [#43279](https://github.com/BerriAI/litellm/pull/43279) fix(proxy): bound spend-log cleanup delete transactions to the statement timeout
- [#45817](https://github.com/BerriAI/litellm/pull/45817) fix(ui): expose both decisions playground endpoints
- [#44146](https://github.com/BerriAI/litellm/pull/44146) perf(ci): isolate and shard integration suites
- [#45755](https://github.com/BerriAI/litellm/pull/45755) fix(ui): drop the decision models sublabel from the Add Model provider dropdown
- [#45816](https://github.com/BerriAI/litellm/pull/45816) chore: remove committed PR screenshots
- [#45793](https://github.com/BerriAI/litellm/pull/45793) fix(model-prices): correct Bedrock Titan and Nova 2 Lite prices, add Nova Premier, clear rescinded Together dates
- [#45757](https://github.com/BerriAI/litellm/pull/45757) test: move packaging and install checks off CircleCI build_and_test
- [#45761](https://github.com/BerriAI/litellm/pull/45761) test: move routing, caching and callback tests out of local_testing
- [#45782](https://github.com/BerriAI/litellm/pull/45782) feat(guardrails): backport the logging_only scope split to rc/1.106.0 (#45709)
- [#45437](https://github.com/BerriAI/litellm/pull/45437) fix(guardrails): avoid blocking the event loop during HiddenLayer JWT refresh
- [#45709](https://github.com/BerriAI/litellm/pull/45709) feat(guardrails): split logging_only_scope direction from input-failure policy
- [#44165](https://github.com/BerriAI/litellm/pull/44165) fix(proxy): keep keys and projects on the same team
- [#45699](https://github.com/BerriAI/litellm/pull/45699) fix(spend): run /global/spend/refresh on the writer instead of the read replica
- [#45723](https://github.com/BerriAI/litellm/pull/45723) fix(proxy): let MCP server management bodies carry their OAuth token exchange settings
- [#45764](https://github.com/BerriAI/litellm/pull/45764) feat(azure): add azure_ai/Cohere-Embed-V5-Fast and azure_ai/Cohere-Embed-V5-Pro
- [#45746](https://github.com/BerriAI/litellm/pull/45746) fix(mcp): preserve caller bearer for guardrail evaluation
- [#45732](https://github.com/BerriAI/litellm/pull/45732) feat(ui): link the decision models banner to the supported providers docs and rename the System One playground to Decisions
- [#45729](https://github.com/BerriAI/litellm/pull/45729) feat(ui): rename the Playground System One tab to Decisions and give the JSON editor VS Code light and dark themes
- [#45459](https://github.com/BerriAI/litellm/pull/45459) fix(proxy): let admins make per-model key/team rate limits a hard 429 instead of falling back
- [#45739](https://github.com/BerriAI/litellm/pull/45739) feat(ui): backport the System One request form to rc/1.106.0 (#45721)
- [#45678](https://github.com/BerriAI/litellm/pull/45678) feat(strands_decider): call a Strands Decider on an AgentCore runtime ARN
- [#45735](https://github.com/BerriAI/litellm/pull/45735) feat(decisions): backport Microsoft-Decision-1 and the decision models Admin UI to rc/1.106.0 (#45639, #45673, #45654, #45717)
- [#45433](https://github.com/BerriAI/litellm/pull/45433) fix(websearch_interception): drop stream_options when forcing stream=False and replay it on the final stream
- [#45721](https://github.com/BerriAI/litellm/pull/45721) feat(ui): build System One playground requests with a form
- [#43791](https://github.com/BerriAI/litellm/pull/43791) fix(realtime): only inject response.create when a transcript guardrail suppressed VAD auto-response
- [#44927](https://github.com/BerriAI/litellm/pull/44927) fix: support OpenAI SDK 3 while retaining SDK 2 compatibility
- [#45717](https://github.com/BerriAI/litellm/pull/45717) fix(model_prices): drop unverified output price on Microsoft-Decision-1 and guard evaluation rows
- [#45692](https://github.com/BerriAI/litellm/pull/45692) fix(python-bridge): preserve callback keyword deletions in native requests
- [#44955](https://github.com/BerriAI/litellm/pull/44955) fix(decisions)!: refuse safety_identifier on providers that cannot take it unless drop_params drops it
- [#45303](https://github.com/BerriAI/litellm/pull/45303) fix(gemini): map OpenAI voice names to Gemini prebuilt TTS voices
- [#45659](https://github.com/BerriAI/litellm/pull/45659) fix(databricks): keep #/$defs refs in json_schema response_format

#### 🐛 New Issues
- [#45718](https://github.com/BerriAI/litellm/issues/45718) [Bug]: routing_strategy "cost-based-routing" breaks all sync Router methods with RouterRateLimitError (single healthy deployment) — permanently disables mcp_semantic_tool_filter `llm translation` 💬2
- [#45736](https://github.com/BerriAI/litellm/issues/45736) [Bug]: OpenTelemetry callback creates no span for a streaming call the app stops reading early `bug` `llm translation` 💬2
- [#45895](https://github.com/BerriAI/litellm/issues/45895) [Bug]: With custom_auth_run_common_checks: true and no database, key max_budget pre-call reservation is never reconciled on success `llm translation` 💬1
- [#45868](https://github.com/BerriAI/litellm/issues/45868) [Feature]: Let a session-affinity pin yield when its deployment is saturated and another deployment in the group is idle 💬1
- [#45807](https://github.com/BerriAI/litellm/issues/45807) [Feature]: Model Additon: Microsoft Decison 1 `enhancement` `llm translation` 💬1
- [#45796](https://github.com/BerriAI/litellm/issues/45796) [Bug]: OpenTelemetry callback records tool-call responses as an empty message (gen_ai.output.messages has "parts": []), and "stop" as the finish reason for single-chunk streamed tool calls `bug` `llm translation` 💬1
- [#45787](https://github.com/BerriAI/litellm/issues/45787) [Bug]: Pass-through endpoint URL containing 'predict' substring is misidentified as Vertex AI route — KeyError('predictions') kills logging task, SpendLogs never written `llm translation` 💬1
- [#45883](https://github.com/BerriAI/litellm/issues/45883) [Bug]: per_user_oauth Copilot models in responses mode fail with "requires litellm_credential_name" `llm translation` `claude code`
- [#45872](https://github.com/BerriAI/litellm/issues/45872) Opt-in request security middleware for the proxy (IP blocklists, general rate limiting, payload screening)
- [#45830](https://github.com/BerriAI/litellm/issues/45830) [Bug]: Anthropic batch accounting undercounts 1h cache writes and omits web-search fees `llm translation`
- [#45825](https://github.com/BerriAI/litellm/issues/45825) [Bug]: Getting 500 error `bug`
- [#45785](https://github.com/BerriAI/litellm/issues/45785) [Bug]: Vertex AI serves a STALE access token up to the second it expires, Google answers 401 ACCESS_TOKEN_EXPIRED `llm translation`

#### 🔒 Closed Issues
- [#37907](https://github.com/BerriAI/litellm/issues/37907) Don't restrict openai<3
- [#40317](https://github.com/BerriAI/litellm/issues/40317) [Bug]: openai dependency still pinned to <3.0.0 in latest release, blocks packages requiring openai>=3.0.0
- [#25128](https://github.com/BerriAI/litellm/issues/25128) [Bug]: MCP HTTP proxy client does not forward mcp-session-id to upstream stateful servers - tools never load
- [#31726](https://github.com/BerriAI/litellm/issues/31726) [Bug]: Realtime proxy injects a duplicate response.create on input_audio_transcription.completed, causing conversation_already_has_active_response (when no realtime guardrail is configured)
- [#29575](https://github.com/BerriAI/litellm/issues/29575) [Bug]: Langfuse logs zero token usage for OpenAI Responses API calls
- [#43853](https://github.com/BerriAI/litellm/issues/43853) Question: roadmap for openai>=3.0.0 support (current pin is openai>=2.20.0,<3.0.0)
- [#41089](https://github.com/BerriAI/litellm/issues/41089) [Bug]: a key can be attached to a project owned by another team, by an admin of only the key's team
- [#44921](https://github.com/BerriAI/litellm/issues/44921) [Bug]: HiddenLayer JWT refresh blocks the event loop inside the async guardrail request
- [#45617](https://github.com/BerriAI/litellm/issues/45617) [Bug]: Databricks json_schema response_format with $defs fails: DatabricksConfig inherits Anthropic ref_template and rewrites $ref to "/$defs/X" (missing "#")

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,729 · **Open issues:** 617 · **Last push:** <1h ago

On October 11, 2026, there were no new releases for Unsloth, but several significant PRs were merged. The updates included enhancements to the Unsloth Studio, such as fixing the warning at startup for AMD drivers with the RDNA4 idle-eviction bug and improvements for handling Word and HTML files. Additionally, features were added to support better training techniques for Unsloth models, such as the integration of new DiffusionTrainer recipes and improved handling of chat templates in TRL's response schema. Notably, a major bug was reported regarding the rejection of the '--api-key-file' value by the llama-server, which may impact users relying on external APIs.

#### ✅ Merged PRs
- [#13257](https://github.com/unslothai/unsloth/pull/13257) Chunked mask test: drop the now-unused _swap_function_references import
- [#13183](https://github.com/unslothai/unsloth/pull/13183) Studio: keep exponents when the model reads a web page
- [#10277](https://github.com/unslothai/unsloth/pull/10277) Unsloth Studio installer (AMD/Linux): use ROCm 6.4 PyTorch on ROCm 6.0 to 6.3 so bitsandbytes training doesn't crash
- [#13248](https://github.com/unslothai/unsloth/pull/13248) Chunked mask test: unwrap every layer, including unsloth_zoo's mask wrapper
- [#13146](https://github.com/unslothai/unsloth/pull/13146) Unsloth Studio / Desktop: export image LoRAs and pick them up again from a custom models folder
- [#12951](https://github.com/unslothai/unsloth/pull/12951) Studio: size a GPU cache for spilled MoE experts with --moe-cache-mib auto
- [#13214](https://github.com/unslothai/unsloth/pull/13214) Add opt-in tokenizers 1.0 release candidate encode path
- [#13225](https://github.com/unslothai/unsloth/pull/13225) Studio: show context usage for a revisited chat under a cloud model or none
- [#13209](https://github.com/unslothai/unsloth/pull/13209) Make Unsloth-patched tokenizers and processors picklable
- [#13205](https://github.com/unslothai/unsloth/pull/13205) Let TRL AsyncGRPOTrainer train Unsloth models; fix GRPO vision rewards for tool images and TRL 1.15
- [#13204](https://github.com/unslothai/unsloth/pull/13204) assistant_only_loss with Unsloth chat templates: fall back to response markers
- [#13202](https://github.com/unslothai/unsloth/pull/13202) GRPO tool calling: accept Unsloth chat templates in TRL's response schema and training template lookup
- [#13203](https://github.com/unslothai/unsloth/pull/13203) Support TRL 1.14 and 1.15: ORPO/CPO row cap, masked GRPO sampling metrics, cap to 1.15.0
- [#13239](https://github.com/unslothai/unsloth/pull/13239) Studio: pin Qwen-Image 2.1 Turbo directly under Qwen-Image 2.1 in the Images picker
- [#13185](https://github.com/unslothai/unsloth/pull/13185) Studio: keep list numbers in attached Word and HTML files
- [#13226](https://github.com/unslothai/unsloth/pull/13226) Studio: browser Downloads button matches the toolbar and closes on a second click
- [#13184](https://github.com/unslothai/unsloth/pull/13184) Studio: keep heading text that sits inside a button on fetched pages
- [#13208](https://github.com/unslothai/unsloth/pull/13208) Unsloth Studio / Desktop (AMD, Windows): warn at startup when the AMD driver has the RDNA4 idle-eviction bug
- [#13211](https://github.com/unslothai/unsloth/pull/13211) Tests: drop duplicate tests and fix three that checked nothing new
- [#13075](https://github.com/unslothai/unsloth/pull/13075) Fall back to a dynamic KV cache when the static one would not fit
- [#13157](https://github.com/unslothai/unsloth/pull/13157) Train text-diffusion LMs: DiffusionTrainer with recipes for DiffusionGemma, LLaDA, LLaDA-MoE, LLaDA2, Dream, Nemotron and SDAR
- [#13181](https://github.com/unslothai/unsloth/pull/13181) Studio: keep tool calls and results when training on ShareGPT tool data
- [#13222](https://github.com/unslothai/unsloth/pull/13222) Studio: keep the chat composer typing after a send on WebKitGTK Wayland
- [#13191](https://github.com/unslothai/unsloth/pull/13191) Studio (Jetson): keep JetPack's CUDA ahead of pip CUDA in llama-server and backend loader paths
- [#13230](https://github.com/unslothai/unsloth/pull/13230) Studio: name the app Unsloth in the MCP settings copy
- [#13193](https://github.com/unslothai/unsloth/pull/13193) install.sh: install XPU PyTorch on Linux when an Intel Arc / Data Center GPU is the only GPU
- [#13196](https://github.com/unslothai/unsloth/pull/13196) Unsloth Studio (AMD): pick a discrete GPU that fits over a larger APU in automatic GPU selection
- [#13188](https://github.com/unslothai/unsloth/pull/13188) Studio: bound Qwen-Image-2.1 attention on Apple Silicon and fail loudly on NaN images
- [#13200](https://github.com/unslothai/unsloth/pull/13200) Studio: choose how often update notifications appear, including Unsloth updates
- [#13151](https://github.com/unslothai/unsloth/pull/13151) Studio: show the installed Lemonade and FastFlowLM versions on the NPU
- [#13162](https://github.com/unslothai/unsloth/pull/13162) Studio: fit MCP image mappings in the dialog and keep one field per tool
- [#13216](https://github.com/unslothai/unsloth/pull/13216) Studio: shorten the vLLM / SGLang install prompt
- [#13206](https://github.com/unslothai/unsloth/pull/13206) Studio: list unsloth/Qwen-Image-2.1-Turbo-GGUF in the Images picker
- [#13168](https://github.com/unslothai/unsloth/pull/13168) Studio: treat a Smart App Control block of unsloth.exe like the AppLocker one
- [#13213](https://github.com/unslothai/unsloth/pull/13213) Studio: cap sd.cpp threads at the cgroup CPU quota and honour UNSLOTH_CPU_THREADS
- [#13198](https://github.com/unslothai/unsloth/pull/13198) Studio: keep the composer expand button in the top corner when a file is attached
- [#13212](https://github.com/unslothai/unsloth/pull/13212) Studio: give compare chat the same composer as normal chat
- [#13150](https://github.com/unslothai/unsloth/pull/13150) Record the repo id for ModelScope loads so merged_16bit and GGUF export work
- [#13155](https://github.com/unslothai/unsloth/pull/13155) Fall back to Unsloth inference for gpt-oss with fast_inference=True
- [#13197](https://github.com/unslothai/unsloth/pull/13197) Studio: regenerate a chat's title from its latest turns
- [#13187](https://github.com/unslothai/unsloth/pull/13187) Studio: fill the context bar for Qwen connections
- [#13163](https://github.com/unslothai/unsloth/pull/13163) Studio: let @skill mentions work without Code and add bulk skill toggles
- [#13166](https://github.com/unslothai/unsloth/pull/13166) Studio: let small models send an attached image to a mapped MCP tool
- [#13186](https://github.com/unslothai/unsloth/pull/13186) Studio: keep HTML table rows together in knowledge bases and sources
- [#13182](https://github.com/unslothai/unsloth/pull/13182) Studio: show the whole conversation for imported Claude chats
- [#13141](https://github.com/unslothai/unsloth/pull/13141) Fix illegal memory access in block-FP8 LoRA kernels on long batches
- [#12599](https://github.com/unslothai/unsloth/pull/12599) Studio: name the /v1/models VRAM-fit context estimate
- [#13167](https://github.com/unslothai/unsloth/pull/13167) Studio: turn on agent access (MCP) from Settings > API
- [#13180](https://github.com/unslothai/unsloth/pull/13180) Studio: train tool-calling datasets with their tool list
- [#13165](https://github.com/unslothai/unsloth/pull/13165) Studio: mount sidebar Recents a page at a time so long chat histories stay fast
- [#13179](https://github.com/unslothai/unsloth/pull/13179) Studio: send each line of a file attached in Chat with files once
- [#13161](https://github.com/unslothai/unsloth/pull/13161) Fix case-sensitive Hugging Face projector pairing
- [#13178](https://github.com/unslothai/unsloth/pull/13178) Studio: stop cutting a fetched page down to one article element
- [#13199](https://github.com/unslothai/unsloth/pull/13199) Studio: read AGENTS.md into chat instructions
- [#13048](https://github.com/unslothai/unsloth/pull/13048) Studio: make OpenBLAS thread limits work on Windows ROCm, and default numpy to up to 8 threads instead of 1
- [#11685](https://github.com/unslothai/unsloth/pull/11685) Studio/feat: add a run-setting toggle to disable tool-call deduplication
- [#13207](https://github.com/unslothai/unsloth/pull/13207) version_compat tests: follow TRL 1.15's chunked_nll alias and GPU-only DPO scorer
- [#13159](https://github.com/unslothai/unsloth/pull/13159) Studio: support Qwen-Image-2.1-Turbo with its 8-step sampling schedule
- [#13023](https://github.com/unslothai/unsloth/pull/13023) Studio: add a spell check switch to Settings > General
- [#13176](https://github.com/unslothai/unsloth/pull/13176) Fix DecisionTrainer crashing on step 1 without a prior inference pass
- [#13145](https://github.com/unslothai/unsloth/pull/13145) Studio: stop a linked folder re-indexing failed files forever and let Unlink stop a running sync
- [#13022](https://github.com/unslothai/unsloth/pull/13022) Hub token identity tests: let the llama-backend stubs take the caller's token after #13005
- [#13121](https://github.com/unslothai/unsloth/pull/13121) Use int64 row offsets in RoPE and norm kernels
- [#13171](https://github.com/unslothai/unsloth/pull/13171) Apply embedding_learning_rate to embeddings under full finetuning
- [#13173](https://github.com/unslothai/unsloth/pull/13173) Fix the Backend CI test failures after the branch-restore and Omni routing merges
- [#13169](https://github.com/unslothai/unsloth/pull/13169) Studio: translate the browser Downloads and video player strings in every locale
- [#13194](https://github.com/unslothai/unsloth/pull/13194) Studio: add a sandbox memory limit setting to Settings > Sandbox
- [#13081](https://github.com/unslothai/unsloth/pull/13081) Studio: read Office, OpenDocument, e-book, email, RTF and web page files in chat with files
- [#13195](https://github.com/unslothai/unsloth/pull/13195) Studio: open http(s): source links without slashes as web links; flag Windows theme downloads
- [#13192](https://github.com/unslothai/unsloth/pull/13192) Studio: cap every /api write body before auth; keep chat text out of INFO logs
- [#13189](https://github.com/unslothai/unsloth/pull/13189) Installers: hash-check the uv fallback script; fail closed on undigested Lemonade assets
- [#13149](https://github.com/unslothai/unsloth/pull/13149) Fix 4-bit VLM DDP training crash on ranks >= 1 (CheckpointError)

#### 🐛 New Issues
- [#13217](https://github.com/unslothai/unsloth/issues/13217) [Bug] llama-server rejected the value for '--api-key-file' `feature request` `bug` 💬1
- [#13253](https://github.com/unslothai/unsloth/issues/13253) [Bug] Internal error due to MTP set on by default on Apple Silicon `feature request` `bug`
- [#13246](https://github.com/unslothai/unsloth/issues/13246) [Feature] Unsloth Studio: Support for General Task Routines `feature request`
- [#13245](https://github.com/unslothai/unsloth/issues/13245) [Bug] unsloth_compiled_module_gemma4 fails to load: name 'transformers' is not defined (zoo 2026.10.3, transformers 5.5.0) `feature request` `bug`
- [#13244](https://github.com/unslothai/unsloth/issues/13244) [Bug] Studio update channel installs a CUDA-13 / torch-2.10 flash-attn wheel into a CUDA-12 (driver-locked) venv; diffusers image generation then fails: libcudart.so.13 → torchao FqnToConfig `feature request` `bug`
- [#13243](https://github.com/unslothai/unsloth/issues/13243) [Bug] External models are subject to tool-call limits but Tools settings are hidden

#### 🔒 Closed Issues
- [#3921](https://github.com/unslothai/unsloth/issues/3921) [Bug] RuntimeError: Triton Error [CUDA]: an illegal memory access was encountered with PRO RTX6000
- [#3951](https://github.com/unslothai/unsloth/issues/3951) [Feature] Add FT support for the Qwen3-TTS model.
- [#3411](https://github.com/unslothai/unsloth/issues/3411) OOM for GPT OSS 120b on 183GB of VRAM (B200)
- [#12468](https://github.com/unslothai/unsloth/issues/12468) [Bug] Tensor split decode up to 2.9x slower since b10715-mix-86bd2d3 possibly "max_cuda_graphs = 64" from #144 (2x RTX 5070 Ti, Windows/WSL2/Linux)
- [#7449](https://github.com/unslothai/unsloth/issues/7449) [Bug] AMD: Unsloth Studio puts model weights in system RAM on Strix Halo (Windows) and shows no VRAM
- [#2590](https://github.com/unslothai/unsloth/issues/2590) [Bug] OOM when doing inference on any model using unsloth from v2025-01
- [#3459](https://github.com/unslothai/unsloth/issues/3459) [Bug] Qwen2.5-VL-7B + Unsloth + Accelerate DDP: Model Loading Delays and 'find_unused_parameters' RuntimeError
- [#3911](https://github.com/unslothai/unsloth/issues/3911) [Bug] RuntimeError: Engine core initialization failed. See root cause above. Failed core proc(s): {}
- [#10015](https://github.com/unslothai/unsloth/issues/10015) [Bug] Qwen3.8-Flash-Next-GGUF model cannot be loaded in Unsloth Desktop.
- [#10379](https://github.com/unslothai/unsloth/issues/10379) [Feature] Add Option to Disable the Deduplication of Tool Calls
- [#10147](https://github.com/unslothai/unsloth/issues/10147) Studio: Hub caller boundary follow-ups deferred from #10076
- [#3884](https://github.com/unslothai/unsloth/issues/3884) [Feature] Selective Backprop Integration (CGGR)
- [#3511](https://github.com/unslothai/unsloth/issues/3511) CUDA Runtime Error on WSL2 Docker: “unknown error” during GPU buffer allocation
- [#8517](https://github.com/unslothai/unsloth/issues/8517) [Feature] Allow Custom OpenAI-compatible providers to configure reasoning controls
- [#9869](https://github.com/unslothai/unsloth/issues/9869) [Performance] Linked-folder RAG indexing is fully sequential and underutilizes CPU/GPU
- [#10929](https://github.com/unslothai/unsloth/issues/10929) [Bug] Misleading error shown by Unsloth when revoked HF model, stored locally, is loaded; multiple errors seen in logs
- [#10738](https://github.com/unslothai/unsloth/issues/10738) [Bug] Data recipes incorrectly tells me that all columns are dropped, when none are title: "[Unsloth Bug] "
- [#11754](https://github.com/unslothai/unsloth/issues/11754) [Question] Complete chat history location
- [#3873](https://github.com/unslothai/unsloth/issues/3873) [Feature] Please consider supporting/creating finetuning notebook for MiroThinker-v1.5
- [#4541](https://github.com/unslothai/unsloth/issues/4541) [Bug] unsloth / vllm / gpt-oss-20b
- [#12520](https://github.com/unslothai/unsloth/issues/12520) [Feature] Allow Customisation of Sandbox Virtual Memory Limit
- [#10337](https://github.com/unslothai/unsloth/issues/10337) [Bug] Tokens per chat are not being counted Again
- [#3271](https://github.com/unslothai/unsloth/issues/3271) [Bug] unstable training on Qwen2.5VL on text-only data
- [#10252](https://github.com/unslothai/unsloth/issues/10252) [Bug] GPT OSS 120b - output that does not match
- [#10657](https://github.com/unslothai/unsloth/issues/10657) [Bug] AMD: fine-tuning fails on 2x R9700 on Linux (ROCm 7.14 host gets ROCm 7.2 PyTorch)
- [#11187](https://github.com/unslothai/unsloth/issues/11187) [Bug] Studio not starting on 0.0.0.0
- [#10464](https://github.com/unslothai/unsloth/issues/10464) [Feature Request] Add "Regenerate Title" option to update chat titles as conversations evolve
- [#12942](https://github.com/unslothai/unsloth/issues/12942) [Bug] v0.1.903-beta: backend python.exe spins ~95% CPU across all cores at idle (no model loaded) — OPENBLAS_NUM_THREADS=1 has no effect
- [#12861](https://github.com/unslothai/unsloth/issues/12861) [Feature] Add a way to disable or manage spell check in unsloth desktop
- [#13095](https://github.com/unslothai/unsloth/issues/13095) [Bug] No option to stop, pause or cancel embedding of linked folder once it has begun and the process is now stuck indefinitely
- [#7515](https://github.com/unslothai/unsloth/issues/7515) [Bug] How does canvas_ids reach the model in the DiffusionGemma training loop?
- [#8911](https://github.com/unslothai/unsloth/issues/8911) [Studio Bug] macOS display wake reloads the desktop UI, cancels long GGUF generation, and leaves a blank unrecoverable response
- [#10806](https://github.com/unslothai/unsloth/issues/10806) GPU idle for most of each step training a Qwen3.5-9B LoRA with unsloth-cli.py on B200: fla rebuilt its autotune key on every launch
- [#8555](https://github.com/unslothai/unsloth/issues/8555) [Question] Support status for ModelOpt NVFP4 + FP8 mixed-precision NemotronH MoE (Nemotron-3.5-Lightning-30B-A3B-NVFP4): required GPU generation and minimum VRAM?
- [#9548](https://github.com/unslothai/unsloth/issues/9548) [Bug] Source / Model Name in Top Corner is being based on ../<Foldername> from the Model.
- [#11343](https://github.com/unslothai/unsloth/issues/11343) GGUF load 500s on a synthesized filename: variant resolver guesses `{repo}-{variant}.gguf` instead of using the repo's actual file (repro: PQ2_0 file advertised as Q2_0)
- [#3726](https://github.com/unslothai/unsloth/issues/3726) [Bug] Qwen3 Unable to merge to 16-bit and export as GGUF
- [#12183](https://github.com/unslothai/unsloth/issues/12183) [Feature] Memory across conversations with different models
- [#12947](https://github.com/unslothai/unsloth/issues/12947) [Bug] AMD: pip install "unsloth[amd]" can still replace ROCm torch with CUDA torch from PyPI
- [#10012](https://github.com/unslothai/unsloth/issues/10012) [Bug] Chat Composer stops accepting keyboard input after second generation (Wayland + WebKitGTK)
- [#10359](https://github.com/unslothai/unsloth/issues/10359) [Feature] Add options to strictly uses completely custom llamacpp flags without unsloth studio internal flags optimizers
- [#12730](https://github.com/unslothai/unsloth/issues/12730) [Feature] Qwen 3.8 27b cannot see image generated by builtin tool call
- [#9188](https://github.com/unslothai/unsloth/issues/9188) [Studio Bug] Asymmetric and uneven padding on settings search highlight
- [#11098](https://github.com/unslothai/unsloth/issues/11098) Qwen3.8-Next MTP guide (RTX 6000 PRO): which memory tier carried the PLE table behind the 170 tok/s chart?
- [#10739](https://github.com/unslothai/unsloth/issues/10739) [Bug] network lost error and stop generating when away from browsers on android
- [#10144](https://github.com/unslothai/unsloth/issues/10144) [Bug] Unsloth Desktop current Preset gets cleared during update
- [#10877](https://github.com/unslothai/unsloth/issues/10877) [Feature] add these fields please so I do not have to override in extra args
- [#10481](https://github.com/unslothai/unsloth/issues/10481) [First-time contributor] Looking for beginner-friendly issues to contribute
- [#12571](https://github.com/unslothai/unsloth/issues/12571) [Studio] /v1/models: 'max_context_length' name is misleading — it's a VRAM-fit estimate, not the actual context limit
- [#13160](https://github.com/unslothai/unsloth/issues/13160) [Bug] DecisionTrainer crashes on step 1 unless an inference pass runs first (compiled layer_norm backward: "expected size 8==8, stride 1222==1248")
- [#13120](https://github.com/unslothai/unsloth/issues/13120) RoPE, RMSNorm and LayerNorm kernels overflow int32 offsets past 2^31 elements
- [#10273](https://github.com/unslothai/unsloth/issues/10273) [Bug] AMD: QLoRA training crashes on Linux ROCm 6.1 PyTorch, where bitsandbytes loads its ROCm 6.4 build

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,129 · **Open issues:** 386 · **Last push:** 2h ago

On October 11, 2026, AIBrix experienced a routine maintenance day with no new releases. However, multiple significant bug fixes were merged, including improvements to S3 and GCS artifact downloads by skipping nested folder markers (#2982) and better handling of non-ASCII filenames in Files API response headers (#2979). Additionally, enhancements were made to enforce size limits on read operations (#2977) and to group PodArray pods accurately by both namespace and name (#2976). A notably hot new issue emerged regarding nested S3 and GCS folder-marker keys that can abort artifact prefix downloads (#2981), highlighting ongoing challenges in managing cloud artifacts.

#### ✅ Merged PRs
- [#2982](https://github.com/vllm-project/aibrix/pull/2982) [Bug] Skip nested folder markers in S3 and GCS artifact downloads
- [#2979](https://github.com/vllm-project/aibrix/pull/2979) [Bug] Encode non-ASCII filenames in Files API response headers
- [#2977](https://github.com/vllm-project/aibrix/pull/2977) [Bug] Enforce Reader.size_limiter on the bytes actually read
- [#2976](https://github.com/vllm-project/aibrix/pull/2976) [Bug] Group PodArray pods by namespace and name
- [#2975](https://github.com/vllm-project/aibrix/pull/2975) [Bug] Report a missing latency from PendingLoadProvider.GetConsumption
- [#2972](https://github.com/vllm-project/aibrix/pull/2972) [Bug] Admit user RPM on the counter's incremented value
- [#2964](https://github.com/vllm-project/aibrix/pull/2964) [Bug] Count assistant tool_calls in the chat routing text
- [#2968](https://github.com/vllm-project/aibrix/pull/2968) [Bug] Treat an omitted role replicas as zero in RoleSet status
- [#2967](https://github.com/vllm-project/aibrix/pull/2967) [Bug] Start a download for a model directory with no tracked files

#### 🐛 New Issues
- [#2981](https://github.com/vllm-project/aibrix/issues/2981) [Bug] Nested S3 and GCS folder-marker keys abort artifact prefix downloads `kind/bug` `area/runtime` 💬2
- [#2985](https://github.com/vllm-project/aibrix/issues/2985) [Bug] An HPA max-scale-up-rate or max-scale-down-rate of 1 generates an HPA that the API server rejects `kind/bug` `area/website` `area/orchestration` 💬1
- [#2983](https://github.com/vllm-project/aibrix/issues/2983) [Bug] Unparseable RoleSet update budgets can stall rollout while pod sync returns nil `kind/bug` `area/runtime` `area/orchestration` 💬1
- [#2971](https://github.com/vllm-project/aibrix/issues/2971) [Bug] Concurrent requests can exceed a user's RPM limit `kind/bug` `area/gateway` 💬1
- [#2973](https://github.com/vllm-project/aibrix/issues/2973) [Bug] PendingLoadProvider.GetConsumption returns success when the profile has no latency data `kind/bug` `area/gateway` `area/testing` 💬1
- [#2974](https://github.com/vllm-project/aibrix/issues/2974) [Bug] PodArray groups pods by bare pod name, so same-named pods in different namespaces are merged `kind/bug` 💬1

#### 🔒 Closed Issues
- [#1675](https://github.com/vllm-project/aibrix/issues/1675) lora的modeladapter中设置Replicas多副本不生效
- [#2981](https://github.com/vllm-project/aibrix/issues/2981) [Bug] Nested S3 and GCS folder-marker keys abort artifact prefix downloads
- [#2966](https://github.com/vllm-project/aibrix/issues/2966) [Bug] RoleSet status calculation panics when a role omits replicas
- [#2965](https://github.com/vllm-project/aibrix/issues/2965) [Bug] An empty model directory is reported as downloaded, so the download never starts
- [#2971](https://github.com/vllm-project/aibrix/issues/2971) [Bug] Concurrent requests can exceed a user's RPM limit

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,075 · **Open issues:** 595 · **Last push:** <1h ago

Today was a routine maintenance day for Semantic Router, with no new releases noted. However, significant progress was made with the merging of several pull requests, including enhancements to documentation regarding the remnants of the install script (#4851), expanded benchmarks for the target register (#4820), and implementation of shared linting configurations for better code quality in the CI process (#3772). The community is currently addressing a notable bug related to the Router Memory stores, where discrepancies in behavior when disabled and closed have been reported (#4839). Additionally, multiple issues concerning memory store leaks and panics, particularly with Milvus and Qdrant configurations, have emerged, indicating a pressing need for further investigation and fixes.

#### ✅ Merged PRs
- [#4851](https://github.com/vllm-project/semantic-router/pull/4851) [Docs] List what install.sh leaves behind and report the kept runtime
- [#4820](https://github.com/vllm-project/semantic-router/pull/4820) [Test] Cover the benchmark target register and run exit-code contracts
- [#3772](https://github.com/vllm-project/semantic-router/pull/3772) [CI/Build] Lint the operator with the shared golangci-lint config and format Go with golangci-lint fmt

#### 🐛 New Issues
- [#4839](https://github.com/vllm-project/semantic-router/issues/4839) [Bug] Router Memory stores disagree on disabled and closed behaviour `bug` `accepted` `in-progress` `wg/agentic-context` 💬3
- [#4838](https://github.com/vllm-project/semantic-router/issues/4838) [Bug] Qdrant Router Memory store panics when used after Close `bug` `accepted` `in-progress` `wg/agentic-context` 💬3
- [#4837](https://github.com/vllm-project/semantic-router/issues/4837) [Bug] Milvus and Valkey Router Memory stores leak their client on every config reload `bug` `accepted` `in-progress` `wg/agentic-context` 💬3
- [#4836](https://github.com/vllm-project/semantic-router/issues/4836) [Bug] Milvus Router Memory access tracking can recreate a forgotten memory `bug` `accepted` `in-progress` `wg/agentic-context` 💬3
- [#4835](https://github.com/vllm-project/semantic-router/issues/4835) [Bug] Router Memory Redis cache can keep serving a deleted memory until TTL `bug` `accepted` `in-progress` `wg/agentic-context` 💬3
- [#4822](https://github.com/vllm-project/semantic-router/issues/4822) [Bug] The agent-routing-protection benchmarking page is missing from sidebars.ts `bug` `accepted` `wg/developer-experience-ecosystem` 💬3
- [#4859](https://github.com/vllm-project/semantic-router/issues/4859) [Bug] Anthropic ingress rejects tool_result when optional content is omitted `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4854](https://github.com/vllm-project/semantic-router/issues/4854) [Bug] The baseline result records scored rows but not the labels it dropped `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4852](https://github.com/vllm-project/semantic-router/issues/4852) [Bug] An unedited Builder Deploy of the shipped config fails validation `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4832](https://github.com/vllm-project/semantic-router/issues/4832) [Bug] An omitted system.hazard resolves to the decision model instead of Vela 1.0 Hazard `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4861](https://github.com/vllm-project/semantic-router/issues/4861) [Feature] Model runtime: serve Decision 3.0 with image inputs in Engine mode `enhancement` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4845](https://github.com/vllm-project/semantic-router/issues/4845) [Bug] Shadow dispatch still mirrors a request the router rejected with an immediate error `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4846](https://github.com/vllm-project/semantic-router/issues/4846) [Feature] Install the model runtime's CI dependencies from its lock `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#4843](https://github.com/vllm-project/semantic-router/issues/4843) [Website] Homepage Trending highlights rail for Decision/Vela community momentum `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4828](https://github.com/vllm-project/semantic-router/issues/4828) [Bug] Dashboard backend fails to build and two instance tests fail on macOS `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4815](https://github.com/vllm-project/semantic-router/issues/4815) [Bug] Router Memory Redis cache can refill stale results after invalidation `bug` `accepted` `wg/agentic-context` 💬1
- [#4834](https://github.com/vllm-project/semantic-router/issues/4834) [Feature] Serve jev-index open decision models via external model families `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#4860](https://github.com/vllm-project/semantic-router/issues/4860) [Bug] Chat stream decoding rejects vLLM's integer error code, so clients never see vLLM's error `bug` `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#4665](https://github.com/vllm-project/semantic-router/issues/4665) [Feature] Move Ecosystem & partnerships into Community (after Build with us / Open positions)
- [#4548](https://github.com/vllm-project/semantic-router/issues/4548) [Bug] Re-running install with a different runtime silently discards the persisted runtime preference
- [#4257](https://github.com/vllm-project/semantic-router/issues/4257) [Feature] Record call phases and cache-usage presence in sr-bench results
- [#3150](https://github.com/vllm-project/semantic-router/issues/3150) [Feature] Add a standalone HTTP gateway without Envoy
- [#4205](https://github.com/vllm-project/semantic-router/issues/4205) [Feature] Add an action signal so coding requests can route by operation
- [#4339](https://github.com/vllm-project/semantic-router/issues/4339) [Bug] Prevent stale in-flight tokens from clearing newer requests
- [#4491](https://github.com/vllm-project/semantic-router/issues/4491) [Bug] config migrate reports success for output that fails canonical validation
- [#4772](https://github.com/vllm-project/semantic-router/issues/4772) [Bug] Kubernetes, OpenShift and Helm deployments don't configure Grafana Live origins for external Dashboard URLs
- [#4832](https://github.com/vllm-project/semantic-router/issues/4832) [Bug] An omitted system.hazard resolves to the decision model instead of Vela 1.0 Hazard
- [#4555](https://github.com/vllm-project/semantic-router/issues/4555) [Bug] Chat response decoding puts vLLM reasoning after the answer, so streamed Messages fail mid-reply
- [#4534](https://github.com/vllm-project/semantic-router/issues/4534) [Bug] Builder Deploy without edits removes decision adaptations
- [#4587](https://github.com/vllm-project/semantic-router/issues/4587) [Bug] Dashboard Embedding Models editor cannot save the shipped config
- [#4488](https://github.com/vllm-project/semantic-router/issues/4488) [Bug] Router Memory reflection underestimates CJK size for inject budget and dedup
- [#4578](https://github.com/vllm-project/semantic-router/issues/4578) [Bug] Anthropic tool-result error status is silently lost in OpenAI translation
- [#4791](https://github.com/vllm-project/semantic-router/issues/4791) [Test] Cover the benchmark run exit-code contract with unit tests
- [#4768](https://github.com/vllm-project/semantic-router/issues/4768) [Test] Cover the benchmark target register credential-store flow with unit tests
- [#4366](https://github.com/vllm-project/semantic-router/issues/4366) [Bug] sr-bench preview requests ignore case deadlines and in-flight cancellation
- [#4365](https://github.com/vllm-project/semantic-router/issues/4365) [Bug] NOT guards incorrectly disqualify scored decisions from confidence ranking
- [#4680](https://github.com/vllm-project/semantic-router/issues/4680) [Bug] Tool observability headers replace a dispatch failure with a request continue

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*