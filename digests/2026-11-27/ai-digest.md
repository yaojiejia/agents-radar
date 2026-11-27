# 📡 AI Ecosystem Digest — 2026-11-27

> Generated 2026-11-27 04:49 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 157,249 | 25 | 0 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 136,602 | 16 | 5 | 28 | 1 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 109,210 | 0 | 0 | 0 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,474 | 14 | 5 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 229,455 | 26 | 7 | 14 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,970 | 12 | 29 | 7 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 395,319 | 183 | 99 | 187 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 266,448 | 21 | 7 | 4 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,659 | 48 | 65 | 35 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 39,112 | 23 | 19 | 36 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 136,430 | 20 | 18 | 38 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 188,264 | 10 | 3 | 1 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,979 | 15 | 15 | 78 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 80,321 | 12 | 7 | 145 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,207 | 8 | 8 | 9 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,539 | 10 | 7 | 1 | 0 |

---

## ✨ Highlights

- **llama.cpp** released v1.1.0, alongside several minor releases (b12804, b12803, b12801, b12800, b12798, b12793, b12791, b12785, b12784).
- **OpenAI Codex** merged PR [#64256](https://github.com/openai/codex/pull/64256) to keep the TUI status timer ticking with animations disabled. 
- **OpenClaw** saw significant activity with the new issue [#206081](https://github.com/openclaw/openclaw/issues/206081) reporting a failure when a gitignored declared table is involved, gathering 4 comments.
- **vLLM** addressed a crucial bug in the new issue [#70056](https://github.com/vllm-project/vllm/issues/70056) related to a parser emitting blank tool names, with 4 comments highlighting the concern.
- **Claude Code** has a reported bug in issue [#112477](https://github.com/anthropics/claude-code/issues/112477), where the 5-hour usage limit jumps immediately from 0% to 100% upon reset, inciting 4 discussions.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 157,249 · **Open issues:** 16,488 · **Last push:** <1h ago

On November 27, 2026, there were no new releases or merged pull requests for Claude Code. However, several new issues were reported, with the most notable being issue #112477, which highlights a bug in version 2.1.332 where the five-hour usage limit jumps from 0% to 100% immediately upon reset. Other significant issues include problem #112651, where the Ctrl+Z command unexpectedly suspends or exits the app, and #112557, which concerns excessive consumption impacting the pro plan's five-hour limit. Users are also facing issues with session continuity, as seen in #112644, where a cloud session fails to read the owner's earlier session, resulting in lost work.

#### 🐛 New Issues
- [#112477](https://github.com/anthropics/claude-code/issues/112477) [BUG] v2.1.332: 5-hour usage limit jumps from 0% to 100% immediately upon reset / single prompt `bug` `platform:linux` `area:cost` `regression` 💬4
- [#112651](https://github.com/anthropics/claude-code/issues/112651) [Bug] Ctrl+Z suspends/exits the app instead of being ignored or remapped `duplicate` `platform:linux` `area:tui` 💬2
- [#112557](https://github.com/anthropics/claude-code/issues/112557) [BUG] Excessive consumption by Claude, 5-hour limit on pro plan `bug` `area:cost` 💬2
- [#112644](https://github.com/anthropics/claude-code/issues/112644) Cloud session can't read the owner's own earlier session ("elevated_session_untrusted_device"), so work from yesterday is lost `duplicate` `area:claude-code-web` `area:permissions` 💬1
- [#112627](https://github.com/anthropics/claude-code/issues/112627) Plugin types: an MCP tool argument named `tool` removes `tool` and `tool_use_id` from McpToolCallInput `bug` `has repro` `area:mcp` `area:plugins` 💬1
- [#112652](https://github.com/anthropics/claude-code/issues/112652) [FEATURE] `invalid`
- [#112650](https://github.com/anthropics/claude-code/issues/112650) Claude keeps giving me information that turns out to be wrong, so I can't rely on it to run my business from my phone `bug` `area:claude-code-web` `platform:web` `area:permissions`
- [#112649](https://github.com/anthropics/claude-code/issues/112649) claude tidak bisa mengoperasikan Nvivo di lettop saya `bug` `needs-info`
- [#112648](https://github.com/anthropics/claude-code/issues/112648) Let prompt hooks handle a command without the "Operation stopped by hook" warning `enhancement` `platform:windows` `area:hooks`
- [#112647](https://github.com/anthropics/claude-code/issues/112647) I was told "always allow" would work automatically every time; it doesn't, and the problem still can't be fixed `bug` `area:claude-code-web` `area:permissions` `area:self-hosted-environments`
- [#112646](https://github.com/anthropics/claude-code/issues/112646) Claude can't fix live problems on my own server: every cloud session is locked out, "always allow" is ignored `duplicate` `area:claude-code-web` `area:permissions`
- [#112453](https://github.com/anthropics/claude-code/issues/112453) Workaround: auto-generate session titles via UserPromptSubmit hook `enhancement` `area:hooks`
- [#112645](https://github.com/anthropics/claude-code/issues/112645) [FEATURE] Reviewable response blocks with persistent, model-visible review state `enhancement` `area:tui`
- [#112643](https://github.com/anthropics/claude-code/issues/112643) Cloud session from claude.ai: ~2 hours lost on two simple requests (no carry-over of earlier setup, silent approval denials, blocked documentation sites) `bug` `area:claude-code-web` `platform:web` `area:networking`
- [#112642](https://github.com/anthropics/claude-code/issues/112642) Sandbox (bwrap): concurrent sessions race on placeholder mounts for missing protected paths ("Can't find source path") `bug` `platform:vscode` `area:bash` `platform:wsl`
- [#112641](https://github.com/anthropics/claude-code/issues/112641) debug access in new projects beta not working `bug` `needs-info`
- [#112640](https://github.com/anthropics/claude-code/issues/112640) [Bug] MCP OAuth: Google Workspace Gmail/Calendar tools/list returns 401 invalid_token after auth `bug` `platform:macos` `area:auth` `area:mcp`
- [#112639](https://github.com/anthropics/claude-code/issues/112639) Feature Request: Read aloud and voice chat in projects similar to in Duet. `enhancement`
- [#112638](https://github.com/anthropics/claude-code/issues/112638) [GitHub integration] `question` `area:claude-code-web` `github-integration`
- [#112637](https://github.com/anthropics/claude-code/issues/112637) Desktop app: session status dots and Task complete notifications signal 'needs you' for routine linked-session activity `enhancement` `platform:windows` `area:desktop`
- [#112636](https://github.com/anthropics/claude-code/issues/112636) [BUG] Desktop (Code tab): "Allow once" stays disabled on a long new-session approval card until I scroll to the top and back down `bug` `has repro` `platform:macos` `area:desktop`
- [#112635](https://github.com/anthropics/claude-code/issues/112635) [FEATURE] Go to Definition (Cmd/Ctrl+Click) in Desktop file editor `enhancement` `area:lsp` `area:desktop`
- [#112634](https://github.com/anthropics/claude-code/issues/112634) I really liked this feature. I have an improvement for it is that it be smarter… `enhancement` `area:cost` `area:model`
- [#112633](https://github.com/anthropics/claude-code/issues/112633) [BUG] Desktop (Windows): no way to hide sidebar nav items once all hidden items are shown again — "More" row and "Edit sidebar" become unreachable `invalid`
- [#112632](https://github.com/anthropics/claude-code/issues/112632) [Bug] False-positive safety flag on Roblox minigame request `bug` `platform:windows` `area:model`

### OpenAI Codex (`openai/codex`)

**Stars:** 136,602 · **Open issues:** 28,746 · **Last push:** <1h ago

On November 27, 2026, OpenAI Codex released version rust-v0.174.0-alpha.8, which includes several enhancements and fixes to improve the user experience. Notable merged pull requests included the restoration of hidden sidebars with workspace shortcuts, inline rendering of local Markdown images in TUI replies, and fixes for Unicode highlighting in fuzzy file search. Additionally, a significant new issue arose concerning Codex unexpectedly stopping tasks with an “Extra care for cybersecurity” message, leaving users uncertain about the triggered actions. Other noteworthy issues reported involved severe memory exhaustion on Linux and a bug affecting the GPT-6 models that incorrectly flag harmless prompts.

#### 🚀 New Releases
- [rust-v0.174.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.8) 0.174.0-alpha.8

#### ✅ Merged PRs
- [#64256](https://github.com/openai/codex/pull/64256) Keep the TUI status timer ticking with animations disabled
- [#64254](https://github.com/openai/codex/pull/64254) Render local Markdown images inline in TUI replies
- [#64253](https://github.com/openai/codex/pull/64253) Restore hidden sidebars with the workspace shortcut
- [#64236](https://github.com/openai/codex/pull/64236) Clear stale turn and review state when the TUI resumes
- [#64235](https://github.com/openai/codex/pull/64235) Fix `fd` search summaries in the terminal UI
- [#64232](https://github.com/openai/codex/pull/64232) Consolidate TUI tests and prune snapshots
- [#64230](https://github.com/openai/codex/pull/64230) Render matching file link labels once in the TUI
- [#64221](https://github.com/openai/codex/pull/64221) Keep MCP startup from showing the TUI as working
- [#64219](https://github.com/openai/codex/pull/64219) Focus the sidebar chooser when clicking empty space
- [#64214](https://github.com/openai/codex/pull/64214) Fix Unicode highlighting in fuzzy file search
- [#64211](https://github.com/openai/codex/pull/64211) Open and highlight file line ranges in the TUI
- [#64207](https://github.com/openai/codex/pull/64207) Save and cycle through side chats in TUI scrollback mode
- [#64204](https://github.com/openai/codex/pull/64204) Batch terminal writes when inserting TUI history
- [#64202](https://github.com/openai/codex/pull/64202) Smooth transitions between TUI reasoning headings
- [#64199](https://github.com/openai/codex/pull/64199) Fix TUI prompt editing with partially loaded history
- [#64195](https://github.com/openai/codex/pull/64195) Preserve TUI row shading across redraws in Apple Terminal
- [#64193](https://github.com/openai/codex/pull/64193) Keep TUI tool calls grouped across hidden reasoning
- [#64192](https://github.com/openai/codex/pull/64192) Support PRIMARY selection in Wayland sessions
- [#64187](https://github.com/openai/codex/pull/64187) Configure Guardian V3 shadow reviews from the root thread
- [#64184](https://github.com/openai/codex/pull/64184) Add metrics for Statsig updates and evaluations
- [#64179](https://github.com/openai/codex/pull/64179) Test and document MCP message board notification delivery
- [#64166](https://github.com/openai/codex/pull/64166) Cap evidence stored on Guardian v3 shadow boards
- [#64164](https://github.com/openai/codex/pull/64164) Add compact filesystem context for workspace-write profiles
- [#64160](https://github.com/openai/codex/pull/64160) Verify manual approval provenance in Guardian transcripts
- [#64159](https://github.com/openai/codex/pull/64159) Simplify tool executor lifetimes
- [#64157](https://github.com/openai/codex/pull/64157) Use Guardian V3 to assess recorded tool calls
- [#64152](https://github.com/openai/codex/pull/64152) Drop the child session during Statsig startup test cleanup
- [#64128](https://github.com/openai/codex/pull/64128) Test hosted root turn suspension before roster preparation

#### 🐛 New Issues
- [#64238](https://github.com/openai/codex/issues/64238) Codex repeatedly stops tasks with an “Extra care for cybersecurity” message, but it doesn’t tell me which action or part of the task triggered the block. 01a13500-f5fa-7e31-8441-69d5cc4cb896 `bug` `app` `safety-check` 💬4
- [#64085](https://github.com/openai/codex/issues/64085) codex agents hangs when an old session references an unresponsive SSHFS mount `bug` `TUI` `CLI` `session` 💬2
- [#64246](https://github.com/openai/codex/issues/64246) [Linux Desktop] Severe memory exhaustion – 22.6 GiB memory, 15.6 GiB swap, 323 processes killed by systemd-oomd – potential regression of #44525 `bug` `app` `performance` 💬2
- [#64245](https://github.com/openai/codex/issues/64245) Only GPT‑5.6 works on my Codex account, and GPT‑6 models incorrectly flag harmless prompts `bug` `model-behavior` `app` 💬2
- [#64212](https://github.com/openai/codex/issues/64212) Paid Codex retries: completion claims without runtime verification and no operation-level credit attribution `bug` `model-behavior` `rate-limits` 💬2
- [#64251](https://github.com/openai/codex/issues/64251) [Windows] Missing inline edited-files summary and Last Turn Diff after update 26.1120.50957 `bug` `windows-os` `app` 💬1
- [#64250](https://github.com/openai/codex/issues/64250) Windows: fresh sandbox PDF/ZIP previews fail; file menu changes after response completion `bug` `windows-os` `app` 💬1
- [#64248](https://github.com/openai/codex/issues/64248) Improve advance notice and per-model usage transparency after GPT-6.2 accounting correction `enhancement` `rate-limits` 💬1
- [#64243](https://github.com/openai/codex/issues/64243) [Pro 100] Weekly allowance flips to 100% with a different reset time, then reverts `bug` `rate-limits` `app` 💬1
- [#64242](https://github.com/openai/codex/issues/64242) Codex cannot read an uploaded HTML/PDF/any file that appears under Sources `bug` `model-behavior` `app` 💬1
- [#64257](https://github.com/openai/codex/issues/64257) Expose intensity control for transparent sidebar tint `enhancement` `app`
- [#64255](https://github.com/openai/codex/issues/64255) Persistent, user-editable task progress panel for long-running Codex conversations `enhancement` `app` `plan`
- [#64252](https://github.com/openai/codex/issues/64252) Desktop follow-up: large-line memory amplification and cancellation coverage after 0.171 alpha 13 `bug` `app` `app-server` `performance`
- [#64249](https://github.com/openai/codex/issues/64249) [FEATURE] Reviewable response blocks with persistent, model-visible review state `enhancement` `app` `session`
- [#64247](https://github.com/openai/codex/issues/64247) Clarify supported HTML preview after browser URL policy denial `documentation` `app` `browser`
- [#64244](https://github.com/openai/codex/issues/64244) Expose GPT-6 Luna Decisions in Codex `enhancement` `agent` `app`

#### 🔒 Closed Issues
- [#13967](https://github.com/openai/codex/issues/13967) Codex Desktop hides automation when automation.toml is UTF-8 with BOM
- [#64085](https://github.com/openai/codex/issues/64085) codex agents hangs when an old session references an unresponsive SSHFS mount
- [#63969](https://github.com/openai/codex/issues/63969) dot frozen due to DFW server non response, persistent over 24hrs across all platforms
- [#61070](https://github.com/openai/codex/issues/61070) Windows 10 22H2: Computer Use window screenshots time out on a fresh Notepad window
- [#61083](https://github.com/openai/codex/issues/61083) Windows: Chrome extension installed and native host valid, but Chrome is unavailable and reinstall page fails to open

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,474 · **Open issues:** 2,187 · **Last push:** 3h ago

On November 27, 2026, GitHub Copilot CLI released several updates, with v1.0.117-5 introducing the ability to trust custom CA certificates through the new sandbox.userPolicy.network.extraCaCertificates configuration. Additionally, v1.0.117-4 resolved an issue where the Page Down function stalled at a pinned prompt in a 10-row terminal with tabs enabled, while v1.0.117-3 improved assistant permissions to reduce unnecessary confirmation prompts. There were no merged pull requests today, but a noteworthy new issue emerged: #5583 reported a regression in version 1.0.115, where the OTel file is not written for BYOK -p runs without GitHub sign-in. This combination of updates and new issues indicates ongoing efforts to enhance functionality while addressing recent challenges.

#### 🚀 New Releases
- [v1.0.117-5](https://github.com/github/copilot-cli/releases/tag/v1.0.117-5) 1.0.117-5
- [v1.0.117-4](https://github.com/github/copilot-cli/releases/tag/v1.0.117-4) 1.0.117-4
- [v1.0.117-3](https://github.com/github/copilot-cli/releases/tag/v1.0.117-3) 1.0.117-3

#### 🐛 New Issues
- [#5583](https://github.com/github/copilot-cli/issues/5583) OTel file not written for BYOK -p runs without GitHub sign-in (regression in 1.0.115) `triage`
- [#5597](https://github.com/github/copilot-cli/issues/5597) wrapper/child exit telemetry conflates SIGTERM-killed vs drained exits; completion notice carries no disposition for detached helpers `triage`
- [#5596](https://github.com/github/copilot-cli/issues/5596) no disposition observability for notifications (queued/surfaced/dropped + reason) `triage`
- [#5594](https://github.com/github/copilot-cli/issues/5594) ahp.connections.refresh retries forever with 30s timeouts and no backoff or circuit breaker `triage`
- [#5595](https://github.com/github/copilot-cli/issues/5595) settings/hooks changes require a full CLI restart with no notice or hot-reload signal `triage`
- [#5593](https://github.com/github/copilot-cli/issues/5593) Local sandbox blocks `git submodule update`, even as a no-op (worked in 1.0.99-2) `triage`
- [#5592](https://github.com/github/copilot-cli/issues/5592) getMessages on a large session kills the stdio transport (write EINVAL) and the CLI hangs `triage`
- [#5591](https://github.com/github/copilot-cli/issues/5591) Copilot CLI floods Windows Credential Manager with copilot-mcp-oauth / copilot-keychain-chunk entries, causing CredWrite error 8 for other apps `triage`
- [#5590](https://github.com/github/copilot-cli/issues/5590) Gemini 4 Neon: buffered tool calls >60s hit /chat/completions idle timeout (unexpected EOF during chunk size line / Incomplete response) `triage`
- [#5589](https://github.com/github/copilot-cli/issues/5589) CLI repeatedly ignores commit instruction, tool rejections and reminders to check its rules `triage`
- [#5588](https://github.com/github/copilot-cli/issues/5588) Cypress crashes in the macOS sandbox `triage`
- [#5587](https://github.com/github/copilot-cli/issues/5587) Let ACP clients read account quota without a model call `triage`
- [#5586](https://github.com/github/copilot-cli/issues/5586) Windows: existing UNC paths are denied by content exclusion on 1.0.114 (regression from 1.0.108) `triage`
- [#5585](https://github.com/github/copilot-cli/issues/5585) Org-level custom agents ignore `model`; a model list drops the agent `triage`

#### 🔒 Closed Issues
- [#3563](https://github.com/github/copilot-cli/issues/3563) Tool approvals sometimes silently lost when copilot CLI is used in parallel sessions
- [#5047](https://github.com/github/copilot-cli/issues/5047) Expose assisted approval in ACP mode
- [#5257](https://github.com/github/copilot-cli/issues/5257) Permission prompt truncates URLs with shell variable expansion (${VAR}), e.g. shows "https://api.$"
- [#5005](https://github.com/github/copilot-cli/issues/5005) OTel metrics have no service.instance.id, so concurrent sessions write to the same metric streams
- [#5050](https://github.com/github/copilot-cli/issues/5050) /mcp <server-name> fails due to case sensitive matching

### OpenCode (`anomalyco/opencode`)

**Stars:** 229,455 · **Open issues:** 4,163 · **Last push:** <1h ago

On November 27, 2026, there were no new releases for OpenCode, but several important pull requests were merged, enhancing core functionality and addressing various issues. Notably, PR #66720 fixed a bug that releases the native PTY when a terminal's shell exits, while PR #65774 improved replay functionality for Muse commentary after tool calls. Additionally, the system now converts each tool schema to JSON Schema in a single pass (#66656) and syncs several experimental spaces with a new writing request mechanism (#66694). Among the new issues, a particularly concerning one is #66626, which reports that provider 500 errors result in silent conversations, a significant usability problem.

#### ✅ Merged PRs
- [#66720](https://github.com/anomalyco/opencode/pull/66720) fix(core): release the native PTY when a terminal's shell exits on its own
- [#64945](https://github.com/anomalyco/opencode/pull/64945) fix(core): register a new ChatGPT client when adding an account
- [#66656](https://github.com/anomalyco/opencode/pull/66656) fix(core): convert each tool schema to JSON Schema once
- [#66717](https://github.com/anomalyco/opencode/pull/66717) fix(core): read effort and system update flags from models.dev
- [#66649](https://github.com/anomalyco/opencode/pull/66649) refactor(core): parse MCP skill entries once and type skill load failures
- [#66690](https://github.com/anomalyco/opencode/pull/66690) refactor(core): unify location and private SDK instances in one map
- [#65774](https://github.com/anomalyco/opencode/pull/65774) fix(ai): replay Muse commentary after a tool call without its phase
- [#66504](https://github.com/anomalyco/opencode/pull/66504) fix(core): show the keys a model sent when a tool call misses a required key
- [#66665](https://github.com/anomalyco/opencode/pull/66665) fix(core): replace all edit matches in one pass
- [#66670](https://github.com/anomalyco/opencode/pull/66670) fix(data): guard alias and catalog lookups against Object.prototype keys
- [#66694](https://github.com/anomalyco/opencode/pull/66694) feat(server): sync and write several experimental spaces in one request
- [#66684](https://github.com/anomalyco/opencode/pull/66684) fix(core): re-provision workspace when destroy and recreate race connect
- [#66652](https://github.com/anomalyco/opencode/pull/66652) fix(cli-rs): port selection colours and ACP fixes, and regenerate bindings
- [#66673](https://github.com/anomalyco/opencode/pull/66673) fix(core): poll Console config every 5 minutes with jitter

#### 🐛 New Issues
- [#66596](https://github.com/anomalyco/opencode/issues/66596) tui: sort skills alphabetically in /skills, @ autocomplete, and /api/skill `type/feature` `area/tui` `version/v2` `platform/macos` 💬4
- [#66706](https://github.com/anomalyco/opencode/issues/66706) mcp_skills drops a server's instructions as soon as it offers one skill `type/feature` `area/mcp` `version/v2` `platform/macos` 💬3
- [#66699](https://github.com/anomalyco/opencode/issues/66699) cli: opencode run exits 1 with empty stderr on server-side session failures (e.g. provider quota) `type/bug` `area/cli` `inference/go` `version/v2` 💬3
- [#66655](https://github.com/anomalyco/opencode/issues/66655) i can use the go `triaging` `type/support` `inference/go` 💬3
- [#66708](https://github.com/anomalyco/opencode/issues/66708) Session title request sends the whole first message to the title model `type/bug` `status/repro-simulated` `area/sessions-storage` `version/v2` 💬2
- [#66698](https://github.com/anomalyco/opencode/issues/66698) Unattended code automation: a Promise plugin tool's permission.assert opens an interactive ask that outlives the run `reproduced` `type/bug` `area/plugins` `version/v2` 💬2
- [#66601](https://github.com/anomalyco/opencode/issues/66601) desktop: Branch changes does not reflect commits (stale after commit/merge, no per-commit view) `type/bug` `area/desktop` `version/v2` `platform/windows` 💬2
- [#66702](https://github.com/anomalyco/opencode/issues/66702) [FEATURE]:one cmd inner opencode to install litllm skills. `type/feature` `area/plugins` 💬2
- [#66689](https://github.com/anomalyco/opencode/issues/66689) [FEATURE]:Desktop Plugins tab: switches should actually enable/disable plugins (server side), not just hide the desktop UI `type/feature` `area/desktop` `version/v2` 💬2
- [#66682](https://github.com/anomalyco/opencode/issues/66682) acp: MCP server elicitations are not forwarded to the client `type/feature` `area/ide-acp` `version/v2` `platform/windows` 💬2
- [#66681](https://github.com/anomalyco/opencode/issues/66681) v2.4.1: opencode-go ECONNRESET before first token ends turns with zero retry attempts (provider.transport) `type/bug` `area/core` `inference/go` `version/v2` 💬1
- [#66667](https://github.com/anomalyco/opencode/issues/66667) docs: `todowrite` is undocumented in v2 despite shipping behind `experimental.todo` `reproduced` `type/bug` `area/core` `version/v2` 💬2
- [#66626](https://github.com/anomalyco/opencode/issues/66626) session: provider 500s leave a conversation silent (empty content, idle "interrupted"); opencode upgrade/restart/revert change nothing, only resetting the provider clears it `type/bug` `area/core` `version/v2` `platform/windows` 💬2
- [#66719](https://github.com/anomalyco/opencode/issues/66719) Provider request failed with HTTP 404 `triaging` `type/bug` `area/providers` 💬1
- [#66716](https://github.com/anomalyco/opencode/issues/66716) skills: a SKILL.md with malformed frontmatter is skipped at logDebug — the skill disappears with no warning `reproduced` `type/bug` `area/plugins` `version/v2` 💬1
- [#66713](https://github.com/anomalyco/opencode/issues/66713) automation: disabling automations still claims and renews the scheduler lease `reproduced` `type/bug` `area/core` `version/v2` 💬1
- [#66714](https://github.com/anomalyco/opencode/issues/66714) tui: no way to show an assistant message's completion time in its footer `type/feature` `area/tui` `version/v2` `platform/windows` 💬1
- [#66712](https://github.com/anomalyco/opencode/issues/66712) core(subagent): coalesced background-shell wake drops earlier assistant report in the same busy period `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬1
- [#66709](https://github.com/anomalyco/opencode/issues/66709) go: gemini-4-argon fails with upstream 429 spending cap while Go allowance remains `type/bug` `area/providers` `inference/go` `version/v2` 💬1
- [#66703](https://github.com/anomalyco/opencode/issues/66703) Browse: agent tabs have no distinct color (group color hardcoded to grey) `type/feature` `area/mcp` `platform/windows` 💬1
- [#66701](https://github.com/anomalyco/opencode/issues/66701) [FEATURE]: `triaging` `type/feature` 💬1
- [#66700](https://github.com/anomalyco/opencode/issues/66700) Support project creation in subdirectories of a Git repository (v1 directory-based behavior) `type/bug` `area/web` `version/v2` 💬1
- [#66697](https://github.com/anomalyco/opencode/issues/66697) question: widget not rendered leaves session running `type/bug` `version/v2` `platform/linux` `area/mobile` 💬1
- [#66693](https://github.com/anomalyco/opencode/issues/66693) agent: repeated identical tool calls run indefinitely with no doom_loop detection (v2.4.2) `type/feature` `area/core` `version/v2` `platform/macos` 💬1
- [#66692](https://github.com/anomalyco/opencode/issues/66692) compaction: session drain hard-fails when summary hits the model's output token limit `type/bug` `area/core` `version/v2` `platform/windows` 💬1
- [#66691](https://github.com/anomalyco/opencode/issues/66691) feat(codemode): agent() children should not notify the parent or leave background jobs running `status/repro-plausible` 💬1

#### 🔒 Closed Issues
- [#56298](https://github.com/anomalyco/opencode/issues/56298) openai: adding a second ChatGPT account fails with workspace scope denied
- [#66655](https://github.com/anomalyco/opencode/issues/66655) i can use the go
- [#66626](https://github.com/anomalyco/opencode/issues/66626) session: provider 500s leave a conversation silent (empty content, idle "interrupted"); opencode upgrade/restart/revert change nothing, only resetting the provider clears it
- [#66714](https://github.com/anomalyco/opencode/issues/66714) tui: no way to show an assistant message's completion time in its footer
- [#66700](https://github.com/anomalyco/opencode/issues/66700) Support project creation in subdirectories of a Git repository (v1 directory-based behavior)
- [#66693](https://github.com/anomalyco/opencode/issues/66693) agent: repeated identical tool calls run indefinitely with no doom_loop detection (v2.4.2)
- [#66692](https://github.com/anomalyco/opencode/issues/66692) compaction: session drain hard-fails when summary hits the model's output token limit

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,970 · **Open issues:** 2,564 · **Last push:** <1h ago

Today, Qwen Code released version v0.28.7, which introduces the Qwen Code CLI on the Harness kernel with usage statistics management, and improved explanations for repeated-tool-call rejections. This follows the prior release of v0.28.6, which added support for suspending managed sessions during tool approvals and enabling cold recovery after crashes. Significant merged features include enhancements to workspace memory preservation across task worktrees and a redesign of archived conversations within the web shell. Notably, a new issue was raised regarding a gray window in the Desktop AppImage due to a missing bundled library, highlighting ongoing challenges with platform compatibility.

#### 🚀 New Releases
- [v0.28.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.7) Release v0.28.7
- [v0.28.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.6) Release v0.28.6
- [v0.28.6-nightly.20261126.6b0cd79b](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.6-nightly.20261126.6b0cd79b) Release v0.28.6-nightly.20261126.6b0cd79b
- [sdk-typescript-v0.1.36](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.36) SDK TypeScript Release v0.1.36

#### ✅ Merged PRs
- [#18454](https://github.com/QwenLM/qwen-code/pull/18454) fix(cli): preserve archive coordinator prefix without sidecars
- [#17692](https://github.com/QwenLM/qwen-code/pull/17692) feat(cli): discover models during custom provider setup
- [#18230](https://github.com/QwenLM/qwen-code/pull/18230) feat(memory): preserve workspace memory across task worktrees
- [#18452](https://github.com/QwenLM/qwen-code/pull/18452) perf(daemon): Defer prompt ledger reads until after pagination
- [#18338](https://github.com/QwenLM/qwen-code/pull/18338) feat(web-shell): redesign archived conversations with search, filtering, sorting, and pagination
- [#18473](https://github.com/QwenLM/qwen-code/pull/18473) fix(ci): re-pin the RHEL 10 rpm build root to the current stream10 digest
- [#18463](https://github.com/QwenLM/qwen-code/pull/18463) fix(managed-agent): Recover interrupted Broker polls after failover

#### 🐛 New Issues
- [#18486](https://github.com/QwenLM/qwen-code/issues/18486) Desktop AppImage: gray window on current Mesa — bundled libwayland-client lacks wl_fixes_interface, host EGL vendor fails to load `priority/P2` `type/bug` `category/platform` `scope/linux` 💬3
- [#18422](https://github.com/QwenLM/qwen-code/issues/18422) proposal(harness): kernel seams a product plugin needs to host Mods `priority/P2` `type/feature-request` `category/core` `roadmap/hooks-events` 💬3
- [#18475](https://github.com/QwenLM/qwen-code/issues/18475) fix(serve): fail closed on unreadable worktree sidecars during session deletion `priority/P2` `type/bug` `category/cli` `scope/session-management` 💬3
- [#18465](https://github.com/QwenLM/qwen-code/issues/18465) load admission: Android 上 os.cpus() 返回 0 导致 ratio=Infinity，新会话被永久拒绝 `status/needs-triage` `type/bug` 💬3
- [#18492](https://github.com/QwenLM/qwen-code/issues/18492) Ink TUI forgets checked options and typed text when scrolling away from a pending question `priority/P2` `type/bug` `category/cli` `scope/interactive` 💬2
- [#18484](https://github.com/QwenLM/qwen-code/issues/18484) MCP: HTTP 401 is treated as unsafe-to-replay — no retry without server trust, plus a misleading "may have completed" error `priority/P2` `type/bug` `category/authentication` `category/tools` 💬2
- [#18489](https://github.com/QwenLM/qwen-code/issues/18489) bug(serve): v0.28.7 worktree retention freezes event loop for 6-8 min via O(N²) regularFiles.includes on 300k-file .qwen snapshots and W² 30s timers `priority/P1` `type/bug` `category/performance` `daemon` 💬2
- [#18472](https://github.com/QwenLM/qwen-code/issues/18472) The quota was erroneously consumed after a server malfunction (502/504) `priority/P2` `type/bug` `category/platform` `scope/latency` 💬2
- [#18471](https://github.com/QwenLM/qwen-code/issues/18471) SDK Release Failed for v0.1.37 on 2026-11-26 💬1
- [#18493](https://github.com/QwenLM/qwen-code/issues/18493) SDK Release Failed for v0.1.39 on 2026-11-27
- [#18487](https://github.com/QwenLM/qwen-code/issues/18487) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.approval-parking.test.ts > … > resumes a version-0 Shell approval with exten… `status/needs-triage` `type/bug`
- [#18485](https://github.com/QwenLM/qwen-code/issues/18485) SDK Release Failed for v0.1.38 on 2026-11-27

#### 🔒 Closed Issues
- [#11680](https://github.com/QwenLM/qwen-code/issues/11680) Main CI failed: E2E Tests — no test identified (latest: 2026-11-22)
- [#13009](https://github.com/QwenLM/qwen-code/issues/13009) Main CI failed: E2E Tests — cli/cron-tools.test.ts > … > should have cron tools registered by default (+42 more)
- [#16346](https://github.com/QwenLM/qwen-code/issues/16346) Main CI failed: Managed Agent gate — ClassSizeRatchetTest.productionClassesStayWithinTheirSizeRatchet
- [#16219](https://github.com/QwenLM/qwen-code/issues/16219) Main CI failed: E2E Tests — cli/extensions-install.test.ts > installs a local extension, verifies a command, and updates it (+2 more)
- [#18253](https://github.com/QwenLM/qwen-code/issues/18253) Main CI failed: Managed Agent gate — ClassSizeRatchetTest.productionClassesStayWithinTheirSizeRatchet
- [#15185](https://github.com/QwenLM/qwen-code/issues/15185) Main CI failed: E2E Tests — skill-hooks-resume.test.ts > … > a gate that blocked in the first session still blocks after --continue
- [#18264](https://github.com/QwenLM/qwen-code/issues/18264) Main CI failed: Qwen Code CI — no test identified (latest: 2026-11-27)
- [#15739](https://github.com/QwenLM/qwen-code/issues/15739) Main CI failed: E2E Tests — cli/workflow-mode.test.ts > … > rejects unavailable on before any provider request (+1 more)
- [#17446](https://github.com/QwenLM/qwen-code/issues/17446) feat(cli): discover models during custom provider setup
- [#18288](https://github.com/QwenLM/qwen-code/issues/18288) Main CI failed: Managed Agent gate — no test identified (latest: 2026-11-25)
- [#15814](https://github.com/QwenLM/qwen-code/issues/15814) Main CI failed: E2E Tests — interactive/tui-foreground-shell.test.ts > cancels a focused shell through the global first-Ctrl+C guard befo…
- [#16046](https://github.com/QwenLM/qwen-code/issues/16046) Main CI failed: E2E Tests — interactive/tui-foreground-shell.test.ts > promotes a live foreground shell and exposes its real task lifetime
- [#17490](https://github.com/QwenLM/qwen-code/issues/17490) Main CI failed: E2E Tests — cli/qwen-serve-generated-ui-state.test.ts > … > saves during a running turn, reads back after reload, and sta…
- [#16860](https://github.com/QwenLM/qwen-code/issues/16860) Main CI failed: Desktop Checks — Desktop Checks > … > Initialize containers
- [#13995](https://github.com/QwenLM/qwen-code/issues/13995) Main CI failed: E2E Tests — cli/qwen-serve-channel-workers.test.ts > … > controls a real mock-plugin worker after a channel-less boot (+1 more)
- [#17298](https://github.com/QwenLM/qwen-code/issues/17298) Main CI failed: E2E Tests — interactive/tui-memory-manager.test.ts > Memory B: actual preferred User context and newly created Project fi… (+5 more)
- [#18030](https://github.com/QwenLM/qwen-code/issues/18030) feat(memory): share project auto-memory between a workspace and its Git worktrees
- [#16531](https://github.com/QwenLM/qwen-code/issues/16531) Main CI failed: tui-parity — installed/npm-distribution.test.ts > npx-ignore-scripts no-relaunch-fallback uses actual installed entry and …
- [#17278](https://github.com/QwenLM/qwen-code/issues/17278) Main CI failed: E2E Tests — interactive/tui-memory-manager.test.ts [ interactive/tui-memory-manager.test.ts ]
- [#18307](https://github.com/QwenLM/qwen-code/issues/18307) Main CI failed: Managed Agent gate — DaemonServeE2ETest.deadlineTerminalIsReliableAndSessionRemainsReusable (+3 more)
- [#15580](https://github.com/QwenLM/qwen-code/issues/15580) Main CI failed: E2E Tests — interactive/protocol-tags-interactive.test.ts > … > retries protocol leaks across SSE disconnect and complete…
- [#16947](https://github.com/QwenLM/qwen-code/issues/16947) Main CI failed: E2E Tests — interactive/tui-agent-loop-parity.test.ts > … > 'a retry after a model error'
- [#16971](https://github.com/QwenLM/qwen-code/issues/16971) Main CI failed: tui-parity
- [#17387](https://github.com/QwenLM/qwen-code/issues/17387) Main CI failed: tui-parity — installed/npm-distribution.test.ts > global-ignore-scripts native uses actual installed entry and exits natur…
- [#16733](https://github.com/QwenLM/qwen-code/issues/16733) Main CI failed: E2E Tests — interactive/workflow-mode.test.ts > … > changes the persistent mode locally, guides a fresh turn, and clears …
- [#16734](https://github.com/QwenLM/qwen-code/issues/16734) Main CI failed: E2E Tests — interactive/workflow-completion.test.ts > … > delivers 'WORKFLOW_PARTIAL_RESULT_12176' once
- [#16744](https://github.com/QwenLM/qwen-code/issues/16744) Main CI failed: E2E Tests — sdk-typescript/workflow-mode.test.ts > … > honors explicit initial false over saved on and preserves it on th…
- [#16754](https://github.com/QwenLM/qwen-code/issues/16754) Main CI failed: E2E Tests — cli/tool-hook-context.test.ts > … > interactive: withholds project hooks in an untrusted folder and says why
- [#17356](https://github.com/QwenLM/qwen-code/issues/17356) Main CI failed: E2E Tests — interactive/tui-memory-manager.test.ts > Memory A: all four toggles including confirmation, hot/cold Workspac…

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

**Stars:** 395,319 · **Open issues:** 9,298 · **Last push:** <1h ago

There were no new releases for OpenClaw in the past 24 hours, but several significant changes were made through merged pull requests. Key improvements include enhancing the loading efficiency for plugin migrations, allowing only readable items on the Home button, and optimizing Git metadata checks. Important fixes addressed issues with the OLLAMA cloud models, ensuring they function correctly without request failures, and resolving user experience challenges like displaying background processes in the sidebar. A newly reported issue of note is #206081, which indicates that a gitignored declared table could cause failures in verifying and restoring entire agent scopes, spotlighting a potential critical bug to be addressed in upcoming updates.

#### ✅ Merged PRs
- [#206327](https://github.com/openclaw/openclaw/pull/206327) improve: load less code when checking plugin migrations
- [#206381](https://github.com/openclaw/openclaw/pull/206381) test(ui): await pending identity refresh in lifecycle coverage
- [#199930](https://github.com/openclaw/openclaw/pull/199930) fix(ollama): uncurated cloud models fail every request with a window-sized max_tokens budget
- [#205600](https://github.com/openclaw/openclaw/pull/205600) improve: show only running or unread on the Home button
- [#206365](https://github.com/openclaw/openclaw/pull/206365) refactor(ui): remove duplicate Logs and Activity layout reporters
- [#206338](https://github.com/openclaw/openclaw/pull/206338) fix(ci): keep unused update helpers private
- [#197108](https://github.com/openclaw/openclaw/pull/197108) fix(agents): Code Mode ask_user questions are cancelled when the turn ends
- [#206345](https://github.com/openclaw/openclaw/pull/206345) refactor(android): separate gateway results from session transport
- [#206369](https://github.com/openclaw/openclaw/pull/206369) test(ui): remove redundant effective-tools pass-through coverage
- [#205690](https://github.com/openclaw/openclaw/pull/205690) fix: keep long subagent names on one line in chat summaries
- [#203982](https://github.com/openclaw/openclaw/pull/203982) improve: make pull requests easier to read in the link reader
- [#206363](https://github.com/openclaw/openclaw/pull/206363) improve: reduce Git metadata checks when opening a workspace
- [#205105](https://github.com/openclaw/openclaw/pull/205105) fix(ui): stop showing background processes as sidebar activity
- [#206358](https://github.com/openclaw/openclaw/pull/206358) improve: reduce Codex shutdown overhead on busy Linux hosts
- [#206288](https://github.com/openclaw/openclaw/pull/206288) fix: make Knowledge annotations and file errors easier to use
- [#206360](https://github.com/openclaw/openclaw/pull/206360) fix(tests): install roles roster before navigation
- [#206359](https://github.com/openclaw/openclaw/pull/206359) test(ui): consolidate stale roster response coverage
- [#206362](https://github.com/openclaw/openclaw/pull/206362) test(ui): isolate agent deletion guards
- [#204344](https://github.com/openclaw/openclaw/pull/204344) fix: finish healthy Git updates after an older verifier exits
- [#206252](https://github.com/openclaw/openclaw/pull/206252) fix(update): bound release CLI Gateway waits
- [#206357](https://github.com/openclaw/openclaw/pull/206357) fix: keep shell results when Tokenjuice fails
- [#205374](https://github.com/openclaw/openclaw/pull/205374) fix(release): explain prepared receipt recovery requests
- [#206271](https://github.com/openclaw/openclaw/pull/206271) refactor(tests): retire duplicate macOS Talk parser coverage
- [#206336](https://github.com/openclaw/openclaw/pull/206336) fix(tests): align Gateway update notices with shared summaries
- [#206344](https://github.com/openclaw/openclaw/pull/206344) test(ui): strengthen projection completion and disposal proof
- [#206355](https://github.com/openclaw/openclaw/pull/206355) chore(ui): refresh control ui locales
- [#206342](https://github.com/openclaw/openclaw/pull/206342) fix(ui): skip account listing without operator.read in chat picker
- [#206323](https://github.com/openclaw/openclaw/pull/206323) improve: skip unrelated harness discovery for isolated model calls
- [#206330](https://github.com/openclaw/openclaw/pull/206330) fix(ci): isolate approval tests from shell startup environment
- [#205252](https://github.com/openclaw/openclaw/pull/205252) fix: keep compaction working regardless of whose turn triggered it
- [#206312](https://github.com/openclaw/openclaw/pull/206312) Control UI: keep reply headers off subagent completion notices
- [#204671](https://github.com/openclaw/openclaw/pull/204671) docs: clarify what telemetry OpenClaw sends and how to opt out
- [#206316](https://github.com/openclaw/openclaw/pull/206316) refactor(ui): remove retired stream-follow test seams
- [#206313](https://github.com/openclaw/openclaw/pull/206313) Control UI: distinguish missing command results from unknown outcomes
- [#206251](https://github.com/openclaw/openclaw/pull/206251) chore(ci): inventory Gateway model catalog worker lifecycles
- [#206322](https://github.com/openclaw/openclaw/pull/206322) fix(cron): use the service's free memory for extra automation runs
- [#206282](https://github.com/openclaw/openclaw/pull/206282) fix(build): reuse stamps after identical pnpm installs
- [#206283](https://github.com/openclaw/openclaw/pull/206283) fix: keep failed image inspections inside chat activity
- [#206048](https://github.com/openclaw/openclaw/pull/206048) fix: clarify sent-message labels and chat activity icons
- [#206280](https://github.com/openclaw/openclaw/pull/206280) refactor(android): reuse the shared TLS test fixture
- [#206246](https://github.com/openclaw/openclaw/pull/206246) feat: let doctor --fix tell when its startup repairs have nothing to do
- [#206319](https://github.com/openclaw/openclaw/pull/206319) fix(ui): restore New Session recovery during startup
- [#206281](https://github.com/openclaw/openclaw/pull/206281) fix(tests): expect normalized Gateway URLs on macOS
- [#196209](https://github.com/openclaw/openclaw/pull/196209) fix(android): pause idle gateway discovery without blocking consumers
- [#203843](https://github.com/openclaw/openclaw/pull/203843) fix(ci): prepare the Android SDK for scheduled CodeQL scans
- [#206308](https://github.com/openclaw/openclaw/pull/206308) Fix Gateway pressure checks on delegated Linux cgroups
- [#206289](https://github.com/openclaw/openclaw/pull/206289) improve(config): reuse plugin metadata during auto-enable
- [#206287](https://github.com/openclaw/openclaw/pull/206287) improve: copy only the selected model for agent completions
- [#206236](https://github.com/openclaw/openclaw/pull/206236) fix(pr): refresh tooling before preparing reviewed incoming PRs
- [#206299](https://github.com/openclaw/openclaw/pull/206299) fix: keep Gateway ready while plugins drain after updates
- [#206267](https://github.com/openclaw/openclaw/pull/206267) fix(crabbox): reuse source mirrors after canceled preparation
- [#206285](https://github.com/openclaw/openclaw/pull/206285) perf(secrets): skip plugin metadata for entries without config values
- [#206302](https://github.com/openclaw/openclaw/pull/206302) chore(i18n): refresh native locales
- [#205375](https://github.com/openclaw/openclaw/pull/205375) fix(release): avoid repeating complete release-note lookups
- [#205959](https://github.com/openclaw/openclaw/pull/205959) fix: let agents answer before soft compaction repeats source reads
- [#205986](https://github.com/openclaw/openclaw/pull/205986) feat: set up Llama and llama.cpp without installing a plugin first
- [#206293](https://github.com/openclaw/openclaw/pull/206293) perf(update): avoid reading full runs twice during reconciliation
- [#206290](https://github.com/openclaw/openclaw/pull/206290) fix: keep the full Doctor timing line in update reports
- [#191597](https://github.com/openclaw/openclaw/pull/191597) fix(android): load cursor history without losing reading position
- [#205940](https://github.com/openclaw/openclaw/pull/205940) refactor(subagents): check a Stop's caller authority once, then let the admitted kill finish
- [#206275](https://github.com/openclaw/openclaw/pull/206275) test(ui): strengthen lifecycle and input write oracles
- [#187082](https://github.com/openclaw/openclaw/pull/187082) fix(trajectory): keep quoted tool arguments parseable in exports
- [#206260](https://github.com/openclaw/openclaw/pull/206260) refactor(test): simplify UI fixture helpers
- [#206269](https://github.com/openclaw/openclaw/pull/206269) refactor(test): trim unused terminal fixture options
- [#206259](https://github.com/openclaw/openclaw/pull/206259) fix(ci): keep browser PID tests stable on busy runners
- [#206276](https://github.com/openclaw/openclaw/pull/206276) improve: reduce memory when the catalog first captures plugin source
- [#206227](https://github.com/openclaw/openclaw/pull/206227) fix: shorten the first update's outage by skipping an idle second Doctor
- [#206274](https://github.com/openclaw/openclaw/pull/206274) chore(ui): refresh control ui locales
- [#206240](https://github.com/openclaw/openclaw/pull/206240) improve(cli): skip channel and web discovery for model credentials
- [#206266](https://github.com/openclaw/openclaw/pull/206266) refactor(tests): share DeepLinks coverage with iOS
- [#206198](https://github.com/openclaw/openclaw/pull/206198) improve(memory): skip the helper used only for recall cleanup at startup
- [#206210](https://github.com/openclaw/openclaw/pull/206210) refactor(ui): use one switch component in settings
- [#206195](https://github.com/openclaw/openclaw/pull/206195) fix: stop doctor --fix rewriting the plugin registry on a healthy install
- [#206268](https://github.com/openclaw/openclaw/pull/206268) fix(ci): isolate respawn tests from host CA discovery
- [#206203](https://github.com/openclaw/openclaw/pull/206203) fix(test): clean up fixtures and repair readiness checks
- [#206150](https://github.com/openclaw/openclaw/pull/206150) fix: preserve the first reply across gateway restart races
- [#205945](https://github.com/openclaw/openclaw/pull/205945) fix: unblock database capture during 9.37 Git updates
- [#206257](https://github.com/openclaw/openclaw/pull/206257) improve(ci): narrow scheduled test inventory scans
- [#206200](https://github.com/openclaw/openclaw/pull/206200) fix: reject incomplete Git backup commits
- [#206148](https://github.com/openclaw/openclaw/pull/206148) feat: show CSV attachments as a table in the chat file viewer
- [#205987](https://github.com/openclaw/openclaw/pull/205987) fix(update): settle after plugins and share one completion summary
- [#206247](https://github.com/openclaw/openclaw/pull/206247) feat: let each Doctor repair say whether it has work before the Gateway stops
- [#206228](https://github.com/openclaw/openclaw/pull/206228) fix(mattermost): let buttons with Chinese, spaced or agent-callback values be clicked
- [#206244](https://github.com/openclaw/openclaw/pull/206244) fix: keep lean Gateway reads on the shared worker
- [#206237](https://github.com/openclaw/openclaw/pull/206237) improve: skip unused context engine lookups during model selection
- [#206232](https://github.com/openclaw/openclaw/pull/206232) improve(cli): skip package lookup when no Gateway installation is found
- [#206238](https://github.com/openclaw/openclaw/pull/206238) fix(ci): resolve production export consumers
- [#143648](https://github.com/openclaw/openclaw/pull/143648) fix(apple): Gateway connections fail behind hostname-routed HTTPS proxies
- [#206248](https://github.com/openclaw/openclaw/pull/206248) fix: show how to reload automation events
- [#206242](https://github.com/openclaw/openclaw/pull/206242) fix: keep overlapping meeting speech in conversation order
- [#205883](https://github.com/openclaw/openclaw/pull/205883) fix(ui): adopt uirouter navigation lifecycle fixes
- [#206245](https://github.com/openclaw/openclaw/pull/206245) improve: use less memory when measuring session disk usage
- [#206192](https://github.com/openclaw/openclaw/pull/206192) fix: use less memory for installed plugins with native files
- [#206199](https://github.com/openclaw/openclaw/pull/206199) fix: keep package updates going when backup or indexing tools touch file attributes
- [#206243](https://github.com/openclaw/openclaw/pull/206243) fix: keep Signal quote markers on every quoted line and message
- [#206233](https://github.com/openclaw/openclaw/pull/206233) fix: stop promising unavailable command wakes in local agent runs
- [#206165](https://github.com/openclaw/openclaw/pull/206165) fix(ci): remove unused agent runtime exports
- [#206235](https://github.com/openclaw/openclaw/pull/206235) fix(plugin-sdk): let the released Codex plugin start turns on newer hosts
- [#206222](https://github.com/openclaw/openclaw/pull/206222) fix(plugin-state): release tracking after deleting keys across stores
- [#205442](https://github.com/openclaw/openclaw/pull/205442) fix: preserve blank lines in fenced code in the full message reader
- [#206201](https://github.com/openclaw/openclaw/pull/206201) fix(ci): provide required Git capabilities in Crabbox jobs
- [#206221](https://github.com/openclaw/openclaw/pull/206221) fix(sqlite): release retired pooled reader launch owners
- [#206230](https://github.com/openclaw/openclaw/pull/206230) fix: size Linux Gateways from their delegated memory limit
- [#206229](https://github.com/openclaw/openclaw/pull/206229) refactor(android): remove duplicate settings question state
- [#206167](https://github.com/openclaw/openclaw/pull/206167) test: trim redundant count and presentation assertions
- [#206177](https://github.com/openclaw/openclaw/pull/206177) fix: retain Responses request JSON in debug captures
- [#205994](https://github.com/openclaw/openclaw/pull/205994) refactor(update): remove unreachable Git database capture cleanup
- [#206220](https://github.com/openclaw/openclaw/pull/206220) improve(ci): defer cold-load session imports until capture
- [#206004](https://github.com/openclaw/openclaw/pull/206004) fix(ci): retain parent samples in timing refit reports
- [#206189](https://github.com/openclaw/openclaw/pull/206189) improve: reduce memory used by SQLite update checks
- [#206204](https://github.com/openclaw/openclaw/pull/206204) refactor(android): share the transcript anchor with turn recaps
- [#206209](https://github.com/openclaw/openclaw/pull/206209) improve(ci): avoid fixture startup for invalid capture flags
- [#206158](https://github.com/openclaw/openclaw/pull/206158) fix: show Waiting and Resumed for Claude CLI subagent handoffs
- [#205437](https://github.com/openclaw/openclaw/pull/205437) fix: restore Copy code for carriage-return fences in Full Reader
- [#196214](https://github.com/openclaw/openclaw/pull/196214) fix(android): consolidate selection accessibility
- [#206196](https://github.com/openclaw/openclaw/pull/206196) fix: release memory used to track finished plugin writes
- [#206010](https://github.com/openclaw/openclaw/pull/206010) improve(ci): build Docker package declarations once
- [#206183](https://github.com/openclaw/openclaw/pull/206183) improve(exec): avoid copying small buffered command results
- [#206191](https://github.com/openclaw/openclaw/pull/206191) improve: use less memory when reading workspace files
- [#206182](https://github.com/openclaw/openclaw/pull/206182) fix(skills): pin Workshop archive Undo to the saved version
- [#206153](https://github.com/openclaw/openclaw/pull/206153) fix: hide project moves when a run works outside its default workspace
- [#206185](https://github.com/openclaw/openclaw/pull/206185) fix: shorten doctor --fix Gateway downtime by removing old updater folders before the stop
- [#205439](https://github.com/openclaw/openclaw/pull/205439) fix(telegram): report reply targets accurately for split messages
- [#203025](https://github.com/openclaw/openclaw/pull/203025) fix: Matrix progress previews missing when the message tool sends the final reply
- [#206181](https://github.com/openclaw/openclaw/pull/206181) improve: reduce OpenAI Responses request preparation overhead
- [#206162](https://github.com/openclaw/openclaw/pull/206162) fix(irc): let status probes recover from shorter nickname limits
- [#205564](https://github.com/openclaw/openclaw/pull/205564) fix(android): keep your place in code when a chat reply finishes
- [#206172](https://github.com/openclaw/openclaw/pull/206172) fix(plugins): release idle workers after preparing bundled state operations
- [#206149](https://github.com/openclaw/openclaw/pull/206149) fix(apple): preserve recalled draft spelling across session switches
- [#206169](https://github.com/openclaw/openclaw/pull/206169) feat: show mentioned people by name when an agent reads Slack
- [#206175](https://github.com/openclaw/openclaw/pull/206175) feat: change what a started Knowledge scribe reads from the Scribes page
- [#206176](https://github.com/openclaw/openclaw/pull/206176) improve: reduce memory used to prepare plugin generations
- [#206166](https://github.com/openclaw/openclaw/pull/206166) fix: release plugin source text after capturing its imports
- [#205659](https://github.com/openclaw/openclaw/pull/205659) fix: use the configured system agent for skills inventory
- [#205614](https://github.com/openclaw/openclaw/pull/205614) fix: let Knowledge scribes read Slack on a schedule when set up from a remote Control UI
- [#206139](https://github.com/openclaw/openclaw/pull/206139) perf(gateway): reduce sidebar page packing allocation
- [#205477](https://github.com/openclaw/openclaw/pull/205477) fix: keep your place in chat when toggling tool calls
- [#205493](https://github.com/openclaw/openclaw/pull/205493) fix(ui): restore Latest after jumping to a reply’s original message
- [#206152](https://github.com/openclaw/openclaw/pull/206152) refactor: record which doctor --fix steps have work before the Gateway stop can become conditional
- [#206155](https://github.com/openclaw/openclaw/pull/206155) docs(codex): explain worker ownership refusals after reconnecting
- [#205575](https://github.com/openclaw/openclaw/pull/205575) fix(android): honor Markdown table column alignment
- [#206142](https://github.com/openclaw/openclaw/pull/206142) improve: reduce broker memory when loading plugin and SQLite resources
- [#206144](https://github.com/openclaw/openclaw/pull/206144) improve: reduce Gateway allocations for session updates
- [#206123](https://github.com/openclaw/openclaw/pull/206123) fix(ui): preserve spaces and the caret in Activity session search
- [#206111](https://github.com/openclaw/openclaw/pull/206111) feat: show failing automations in their own group in the Automations sidebar
- [#202586](https://github.com/openclaw/openclaw/pull/202586) feat(signal): include recent group photos when mentioned
- [#206124](https://github.com/openclaw/openclaw/pull/206124) fix: remove the updater copies that earlier releases leave behind after an update
- [#206072](https://github.com/openclaw/openclaw/pull/206072) improve: skip building the Feishu settings form during startup checks
- [#206137](https://github.com/openclaw/openclaw/pull/206137) fix(codex): release the gateway hold when a resumed worker finishes
- [#206117](https://github.com/openclaw/openclaw/pull/206117) fix(apple): preserve newer drafts when a send completes during history recall
- [#206127](https://github.com/openclaw/openclaw/pull/206127) test(prompts): trim duplicate tool schema snapshots
- [#206058](https://github.com/openclaw/openclaw/pull/206058) fix: sessions_send recipient's NO_REPLY fails as empty_response and runs model fallback
- [#205528](https://github.com/openclaw/openclaw/pull/205528) fix(android): keep the turn recap when returning to a conversation
- [#206104](https://github.com/openclaw/openclaw/pull/206104) improve: reduce Gateway broker memory at startup
- [#205434](https://github.com/openclaw/openclaw/pull/205434) fix(macos): keep Up in multiline composer drafts
- [#206130](https://github.com/openclaw/openclaw/pull/206130) chore(ui): refresh control ui locales
- [#206091](https://github.com/openclaw/openclaw/pull/206091) fix(workshop): cap CLI changes requests at 500
- [#206110](https://github.com/openclaw/openclaw/pull/206110) improve: reduce Gateway work during session recall
- [#206105](https://github.com/openclaw/openclaw/pull/206105) test(presentation): trim redundant formatting permutations
- [#206114](https://github.com/openclaw/openclaw/pull/206114) fix(codex): explain when a resumed worker has a different parent
- [#206108](https://github.com/openclaw/openclaw/pull/206108) fix: reuse prepared middleware for agent tool results
- [#205525](https://github.com/openclaw/openclaw/pull/205525) fix(ios): keep shared link captions when the title is blank
- [#206090](https://github.com/openclaw/openclaw/pull/206090) feat: let several agents share one USER.md
- [#206100](https://github.com/openclaw/openclaw/pull/206100) fix(gateway): wait for transient SQLite schema custody at startup
- [#206013](https://github.com/openclaw/openclaw/pull/206013) refactor(android): keep composer drafts in recency order
- [#205436](https://github.com/openclaw/openclaw/pull/205436) fix(chat): preserve the latest Unicode spelling of Apple composer drafts
- [#206098](https://github.com/openclaw/openclaw/pull/206098) perf(config): decode bundled channel schemas on demand
- [#205389](https://github.com/openclaw/openclaw/pull/205389) fix: keep a newer Apple chat draft when a send finishes after reconnect
- [#205429](https://github.com/openclaw/openclaw/pull/205429) fix(chat): restore the native draft after paging older messages
- [#205010](https://github.com/openclaw/openclaw/pull/205010) fix: let Git updates build when pnpm uses a global virtual store
- [#205804](https://github.com/openclaw/openclaw/pull/205804) fix: let Doctor repair a Git checkout install after its first update (2026.12.1)
- [#205760](https://github.com/openclaw/openclaw/pull/205760) fix(update): the update after a failed 2026.11.10 pnpm update settles it instead of asking for repair
- [#205644](https://github.com/openclaw/openclaw/pull/205644) fix: show the correct hour for Activity peaks across half-hour clock changes
- [#205523](https://github.com/openclaw/openclaw/pull/205523) fix(ui): include the first day of Activity charts after spring forward
- [#206080](https://github.com/openclaw/openclaw/pull/206080) fix(codex): keep late worker notices from completing a newer task
- [#206070](https://github.com/openclaw/openclaw/pull/206070) improve(gateway): reuse unchanged child sessions in parent rows
- [#206069](https://github.com/openclaw/openclaw/pull/206069) improve: reduce spawn broker CPU and allocation on resource replies
- [#206036](https://github.com/openclaw/openclaw/pull/206036) fix(workshop): preserve the default archived version when undoing a restore
- [#206065](https://github.com/openclaw/openclaw/pull/206065) improve(sessions): use less memory when refreshing session usage
- [#205616](https://github.com/openclaw/openclaw/pull/205616) fix(tui): clarify how to dismiss a BTW reply
- [#205957](https://github.com/openclaw/openclaw/pull/205957) fix(apple): use the selected session title for chat exports
- [#206041](https://github.com/openclaw/openclaw/pull/206041) fix: pause optional Gateway work under parent memory pressure
- [#206066](https://github.com/openclaw/openclaw/pull/206066) chore(ui): refresh control ui locales
- [#205911](https://github.com/openclaw/openclaw/pull/205911) test(gateway): retire latency benchmark suites
- [#205977](https://github.com/openclaw/openclaw/pull/205977) fix(state): keep agent schema steps from scanning the whole database offline
- [#205900](https://github.com/openclaw/openclaw/pull/205900) fix: keep OpenClaw ID remote access after Git updates
- [#206026](https://github.com/openclaw/openclaw/pull/206026) fix: respect launcher file ownership during root maintenance

#### 🐛 New Issues
- [#206081](https://github.com/openclaw/openclaw/issues/206081) [Bug]: backup git create: a gitignored declared table silently makes the whole agent scope fail verify and restore 💬4
- [#206030](https://github.com/openclaw/openclaw/issues/206030) Post-migration reclamation can't drain migrated transcript backlog (commit checkpoint expired → session DB degraded → channel messages rejected) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬4
- [#206097](https://github.com/openclaw/openclaw/issues/206097) [Bug]: Infinite models.list ↔ chat.metadata.changed ping-pong loop causes sustained ~4.5/s catalog worker CPU storm `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬4
- [#205946](https://github.com/openclaw/openclaw/issues/205946) [Feature]: No supported way to share one canonical USER.md across agent workspaces — symlinks escape the root, hardlinks are rejected, only duplicated copies work `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#206018](https://github.com/openclaw/openclaw/issues/206018) Workboard: Control UI board page shows no cards while owner-scope list returns all (browser workboard.cards.list ~empty vs .owner full) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#206264](https://github.com/openclaw/openclaw/issues/206264) [Bug]: Gateway main-thread stalls grow with uptime: SQLite admission references for exited workers are re-serialized into every new Worker's environmentData `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬3
- [#206084](https://github.com/openclaw/openclaw/issues/206084) [Bug]: `/hooks/agent` with `sessionMode: "persistent"` + `deliver: false` writes every reply twice to the session transcript (`automation-result` echo) — regression in 2026.11.5 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#205833](https://github.com/openclaw/openclaw/issues/205833) [Bug]: Talk TTS (xAI OAuth) fails with "No API key found for provider xai" after token renewal until Gateway restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#205981](https://github.com/openclaw/openclaw/issues/205981) sessions_spawn rejected with "max active children (5/5)" after all children finished; cancel and archive do not free the slot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬3
- [#206375](https://github.com/openclaw/openclaw/issues/206375) WebChat: one plain-text final reply appears both as an assistant bubble and a Message card `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#206335](https://github.com/openclaw/openclaw/issues/206335) [Bug]: subagent requester-settle continuation blocks the requester's channel DM indefinitely; a slow tool call locks the user out (2026.11.10) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#206320](https://github.com/openclaw/openclaw/issues/206320) [Bug]: Since 2026.11.10, Codex threads on OpenClaw's base prompt ignore a workspace rule to finish every item, and long cron jobs stop early `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#205927](https://github.com/openclaw/openclaw/issues/205927) Doctor recommends deleting retired agent directories, but Gateway maintenance recreates their SQLite stores `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205979](https://github.com/openclaw/openclaw/issues/205979) [Bug]: Usage refresh fails after every internal model run with "Chat history for the requested usage is unavailable" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#205992](https://github.com/openclaw/openclaw/issues/205992) [Bug]: FaceTime inbound call intermittently fails to answer: "Phone pid=N is not routed to OpenClaw-Mic (input devices: none)" — redial seconds later works `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#206314](https://github.com/openclaw/openclaw/issues/206314) [Windows / Node 26] Warning: File descriptor closed but not opened in unmanaged mode during `openclaw models status --probe` `P3` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#206121](https://github.com/openclaw/openclaw/issues/206121) [Bug]: infer model run --model provider/model@profile rejected by agents.defaults.modelPolicy.allow (2026.11.10) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#206272](https://github.com/openclaw/openclaw/issues/206272) [Bug]: daemon-install records ephemeral fnm_multishells path and accepts Bun fake node.exe shim in Windows gateway.cmd `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#206154](https://github.com/openclaw/openclaw/issues/206154) [Bug]: Files pane HTML preview gives no routing hint when the widget sandbox is unreachable `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬2
- [#206190](https://github.com/openclaw/openclaw/issues/206190) [Feature]: Terminate processes manually, or clear everything out using /new `enhancement` `P2` `impact:other` 💬2
- [#206118](https://github.com/openclaw/openclaw/issues/206118) [Bug]: Model chosen by a before_model_resolve hook is announced as "Model Fallback … selected model unavailable" `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#206032](https://github.com/openclaw/openclaw/issues/206032) [Bug]: Invalid background result placement marker blocks replies in an existing session `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#206101](https://github.com/openclaw/openclaw/issues/206101) [Bug]: After MCP idle eviction, the next turn runs without MCP tools ("previous runtime has not confirmed shutdown") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#206074](https://github.com/openclaw/openclaw/issues/206074) [Bug]: v2026.11.10 still copies ordinary plugin sources to fresh capture dirs — static audit (Codex/ACPX heavy setup) `P2` `impact:other` 💬2
- [#205864](https://github.com/openclaw/openclaw/issues/205864) Embedded Responses endpoint compaction skips ordinary user and tool-result tails `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬2
- [#206017](https://github.com/openclaw/openclaw/issues/206017) [Feature]: WhatsApp: opt-in to let the owner invoke the agent by mention in third-party direct chats `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#205769](https://github.com/openclaw/openclaw/issues/205769) [Bug]: State upgrade aborts on Windows without Developer Mode — recreates node_modules symlinks with fs.symlinkSync (EPERM) after copying 9.4 GB, retried in a loop `P1` `impact:crash-loop` 💬2
- [#205858](https://github.com/openclaw/openclaw/issues/205858) Gateway main thread stalls ~30 s on every config write (hot reload copies plugin source files synchronously) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#206373](https://github.com/openclaw/openclaw/issues/206373) refactor(subagents): centralize completion delivery decisions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206303](https://github.com/openclaw/openclaw/issues/206303) [Bug]: Qwen Token Plan drops reasoning_effort for qwen4-max, so /think low and xhigh send the same thinking parameters `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206378](https://github.com/openclaw/openclaw/issues/206378) [Bug]: 2026.11.6: "Model switched … (model_not_found)" notice replaces a sessions_spawn child's final reply, so the parent receives no result `P2` `impact:message-loss` 💬1
- [#206368](https://github.com/openclaw/openclaw/issues/206368) [Bug]: [Bug]: QQ Bot c2c — ambiguous final-text replay reuses a consumed one-time msg_id and permanently dead-letters (请求参数msg_id无效或越权) `bug` `bug:behavior` `P2` `impact:message-loss` 💬1
- [#206367](https://github.com/openclaw/openclaw/issues/206367) [Bug]: Control UI Environment → Changes repeatedly disappears and reappears in the same chat `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205802](https://github.com/openclaw/openclaw/issues/205802) [Bug]: Knowledge plugin tool shapes cause avoidable validation failures (knowledge_annotate required/sibling trap, knowledge_attach_file opaque workspace error, and cross-tool schema drift) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#206094](https://github.com/openclaw/openclaw/issues/206094) [Bug]: Google (Gemini) audio transcription ignores the configured language `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206351](https://github.com/openclaw/openclaw/issues/206351) [Bug]: claude-cli + queue mode "steer": blocked channel DM backlog drains one message per turn, interleaved with internal events; user stays 25+ min behind after the block clears (2026.11.10) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#206270](https://github.com/openclaw/openclaw/issues/206270) Finish shared ownership of Talk parser tests `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206349](https://github.com/openclaw/openclaw/issues/206349) [Feature]: let plugins add gated outbound headers to embedded model requests `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#206340](https://github.com/openclaw/openclaw/issues/206340) File pickup: explain hardlink refusal and distinguish it from missing authorization `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206332](https://github.com/openclaw/openclaw/issues/206332) advanceAuthProfileCandidate only walks later auth profiles: a run on the last profile of auth.order never returns to an earlier profile whose cooldown expired `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206331](https://github.com/openclaw/openclaw/issues/206331) [Bug]: Managed worktree cleanup repeatedly fails (git exit 128) on already-removed worktrees whose repo_root was deleted `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206326](https://github.com/openclaw/openclaw/issues/206326) [Bug]: Control UI: `bug` `regression` `P2` `clawsweeper:needs-info` 💬1
- [#206279](https://github.com/openclaw/openclaw/issues/206279) Update macOS connection tests for normalized WSS ports `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206324](https://github.com/openclaw/openclaw/issues/206324) [Feature]: Configurable local media roots — view files generated outside the workspace (WSL /mnt/... Windows paths) directly in chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#205796](https://github.com/openclaw/openclaw/issues/205796) Learn from Memory can stop before reading daily notes and cannot resume a large import `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#206311](https://github.com/openclaw/openclaw/issues/206311) backup verify: PAX path records containing a newline are mis-parsed, causing "duplicate entry path" or truncated restore names `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#206315](https://github.com/openclaw/openclaw/issues/206315) [Bug]: openclaw models status --probe emits 20+ 'File descriptor 13 closed but not opened in unmanaged mode' warnings and DEP_PLUGIN_SDK on Node.js 26 (Windows) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#206310](https://github.com/openclaw/openclaw/issues/206310) Codex native creator capture omits placement required by stream exec qualification `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#206306](https://github.com/openclaw/openclaw/issues/206306) [Feature]: Let a run's exec use a credential that run just requested with the secrets tool `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#206307](https://github.com/openclaw/openclaw/issues/206307) [Bug]: anthropic-messages provider never tags pre-tool text as commentary, so Telegram progress drafts omit it `P3` `impact:ux-friction` 💬1
- [#206305](https://github.com/openclaw/openclaw/issues/206305) [Feature]: Protected store secrets for durable (restart-surviving) exec processes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#206304](https://github.com/openclaw/openclaw/issues/206304) [Bug]: claude-cli: the stranded-reply retry ("[System] Your previous reply was not delivered…") is imported as an operator message and shown in Control UI as the user's own bubble `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205954](https://github.com/openclaw/openclaw/issues/205954) Soft compaction after the final source read can make the agent repeat completed work `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `impact:session-state` 💬1
- [#206284](https://github.com/openclaw/openclaw/issues/206284) [Bug]: macOS app re-dials its operator connection forever after the device's operator token is revoked (token_mismatch, then token_missing); no way to stay node-only `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#206255](https://github.com/openclaw/openclaw/issues/206255) Share DeepLinks parser coverage between package and iOS tests `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205939](https://github.com/openclaw/openclaw/issues/205939) [Bug]: 2026.9.37 Git updates launch the new schema worker under the old updater’s maintenance lease `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206186](https://github.com/openclaw/openclaw/issues/206186) [Bug]: backup git create reports success for a commit missing declared tables when a pre-commit hook unstages them `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206147](https://github.com/openclaw/openclaw/issues/206147) [Feature]: Show CSV attachments as a table in the Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206226](https://github.com/openclaw/openclaw/issues/206226) Mattermost buttons with non-alphanumeric values (Chinese text, spaces, agent callbacks) open "Page not found" on click `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206258](https://github.com/openclaw/openclaw/issues/206258) [Feature]: Let Knowledge claims carry a takeaway, tags, an event span and inference provenance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#206249](https://github.com/openclaw/openclaw/issues/206249) [Bug]: Heartbeat repeatedly delivers "Thinking level clamped to off" notice to channel on every run `P2` `impact:ux-friction` 💬1
- [#206225](https://github.com/openclaw/openclaw/issues/206225) Paste-token can only save credentials as plain text, so the secrets audit finding can't be fixed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#206216](https://github.com/openclaw/openclaw/issues/206216) Claude Code "Your organization has disabled Claude subscription access" is recorded as an unknown failure `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206212](https://github.com/openclaw/openclaw/issues/206212) [Feature]: Message a card's existing worker from the Workboard plugin `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#206208](https://github.com/openclaw/openclaw/issues/206208) Finish settings controls migration to the canonical switch `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206211](https://github.com/openclaw/openclaw/issues/206211) [Feature]: Show related task conversations in the Workboard card `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#206215](https://github.com/openclaw/openclaw/issues/206215) Claude Code "this login reached its time limit and cannot be renewed" is recorded as an unknown failure, so chat shows no sign-in guidance `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:auth-provider` 💬1
- [#206217](https://github.com/openclaw/openclaw/issues/206217) [Docs Bug]: The bundled diagnose-gateway skill still names the retired /tmp/openclaw log path `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206207](https://github.com/openclaw/openclaw/issues/206207) [Bug]: L1 memory pipeline spins forever when model-runtime prepare is permanently superseded (attempt counter never increments) `P2` `impact:session-state` 💬1
- [#206213](https://github.com/openclaw/openclaw/issues/206213) Discord: /activation always confirms but the bot still requires a mention `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206202](https://github.com/openclaw/openclaw/issues/206202) browser: a denied or unresolvable subframe document request fails the whole interaction (withPageNavigationRequestGuard records iframe denials as action errors) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206146](https://github.com/openclaw/openclaw/issues/206146) session_project is offered to runs working outside the agent's default workspace `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206021](https://github.com/openclaw/openclaw/issues/206021) [Bug]: Teams 1:1 chat: a file sent from the iOS app never reaches the agent (activity has no attachments) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206187](https://github.com/openclaw/openclaw/issues/206187) Talk: synthetic `talk-…` parent IDs propagate as Matrix `replyToId` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#206188](https://github.com/openclaw/openclaw/issues/206188) Google realtime voice: tool-response scheduling and late-response lifecycle on `gemini-3.8-live` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#206184](https://github.com/openclaw/openclaw/issues/206184) [Bug]: Existing scheduled Codex app job cannot refresh its authorization without changing its tool scope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#206163](https://github.com/openclaw/openclaw/issues/206163) IRC probe fails with “Nickname too long” while the bot is connected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206178](https://github.com/openclaw/openclaw/issues/206178) [Bug]: Committed reply (stopReason=stop) never settles its run; manual /compact fails at ~360s with "Reply operation stalled" behind the stuck owner, ambiguous double-entry session controller identity persists `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#206173](https://github.com/openclaw/openclaw/issues/206173) [Bug]: Plugin helpers lose exec right after a subagent reports back `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206168](https://github.com/openclaw/openclaw/issues/206168) Matrix: first encrypted send after Gateway restart misses devices added while offline (live-sync gate exists but is never called) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206171](https://github.com/openclaw/openclaw/issues/206171) [Bug]: Talk responds to unrelated nearby speech and fails to respect stop-and-resume `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206170](https://github.com/openclaw/openclaw/issues/206170) [Bug]: Talk consult fails replay admission during Workboard task review `P2` `impact:session-state` 💬1
- [#206107](https://github.com/openclaw/openclaw/issues/206107) [Bug]: Control UI shows "Outcome unknown" for all claude-cli tool calls, so sessions_yield never shows "Waiting on…" / "Resumed" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206164](https://github.com/openclaw/openclaw/issues/206164) [Bug]: Deterministic session-preparation error keeps Telegram ingress events retrying for hours; no way to drop a pending event, sessions archive does not release them `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206120](https://github.com/openclaw/openclaw/issues/206120) Non-admin approval reviewers miss notifications and pending-list entries `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#206143](https://github.com/openclaw/openclaw/issues/206143) [Bug]: Gateway suspend refuses for over an hour with "1 admitted session turn(s)" and no way to see which session holds it `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#206138](https://github.com/openclaw/openclaw/issues/206138) [Bug]: pairing approve --notify never notifies the sender when the channel token is a SecretRef `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206119](https://github.com/openclaw/openclaw/issues/206119) GitHub comment approvals are cancelled before their five-minute deadline `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#206157](https://github.com/openclaw/openclaw/issues/206157) [Bug]: openclaw@2026.11.4 runtime-context bloat (requesterSettleWake deadlock + unbounded Interrupted inputs), closed PluginInvocationScope on agent_end & session-maintenance, and stale Codex client_version pin `P2` `impact:session-state` 💬1
- [#206141](https://github.com/openclaw/openclaw/issues/206141) [Bug]: openclaw update status with --timeout 30 or more can't read channel status (fractional timeoutMs rejected) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206140](https://github.com/openclaw/openclaw/issues/206140) [Bug]: A session shows as idle in sessions.list while an automation's turn is running in it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#206116](https://github.com/openclaw/openclaw/issues/206116) Title: Automations sidebar: failing automations are hard to find `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206136](https://github.com/openclaw/openclaw/issues/206136) [Bug]: `openclaw agent` returns an empty "ok" when the turn calls sessions_yield, and the reply after the subagent finishes never reaches the caller `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206145](https://github.com/openclaw/openclaw/issues/206145) Transcript index delete orphans session_transcript_active_event_facts rows when PRAGMA foreign_keys is OFF `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#206133](https://github.com/openclaw/openclaw/issues/206133) [Bug]: Workboard agent tools refuse the short card id that the CLI and /workboard show and accept `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206135](https://github.com/openclaw/openclaw/issues/206135) [Bug]: PostgreSQL engine: memory session indexing fails with "invalid byte sequence for encoding UTF8: 0x00" when a transcript holds a JSON-escaped NUL (U+0000) `P2` `impact:session-state` 💬1
- [#206125](https://github.com/openclaw/openclaw/issues/206125) [Bug]: Install page advertises macOS 15+ for the desktop app, but every linked DMG from 2026.10.10 onward is built for macOS 26.2 and will not launch `P0` `impact:ux-release-blocker` 💬1
- [#206115](https://github.com/openclaw/openclaw/issues/206115) [Bug]: voice-call: a terminal transcription-session error mid-call leaves the call open with no speech recognition `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206112](https://github.com/openclaw/openclaw/issues/206112) [Docs Bug]: Clarify tab discovery for loopback attach-only CDP `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206113](https://github.com/openclaw/openclaw/issues/206113) [Bug]: Discord voice: a dropped voice session logs no reason, and a plain `autoJoin` channel is not rejoined `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206106](https://github.com/openclaw/openclaw/issues/206106) [Bug]: Message-tool `voiceId` and the documented `voice` / `voiceId` directive aliases are silently ignored for OpenAI and Google TTS `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206103](https://github.com/openclaw/openclaw/issues/206103) [Bug]: The TTS system-prompt hint ignores channel and account `tts.auto` overrides, unlike delivery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206096](https://github.com/openclaw/openclaw/issues/206096) [Bug]: `/tts latest` always fails on replies longer than `tts.maxTextLength`, with an error that does not say why `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206087](https://github.com/openclaw/openclaw/issues/206087) [Bug]: Discord never sends the transcript echo for voice messages in DMs or mention-gated channels `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206082](https://github.com/openclaw/openclaw/issues/206082) Host exec memory guard sums VmRSS over the process tree, so shared memory is counted once per process and kills headless Chrome `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206085](https://github.com/openclaw/openclaw/issues/206085) [Bug]: Telegram and WhatsApp post the transcript echo for group voice notes that do not mention the bot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#206079](https://github.com/openclaw/openclaw/issues/206079) [Bug]: Android native Talk overwrites reply failures ("No reply", "Chat error", "Speak failed") with "Listening" almost immediately `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206076](https://github.com/openclaw/openclaw/issues/206076) [Bug]: Android Talk button does nothing when microphone permission is permanently denied `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#206073](https://github.com/openclaw/openclaw/issues/206073) [Bug]: macOS native Talk failures are not shown on the orb, and the only status text says "Realtime unavailable" when realtime was never used `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206068](https://github.com/openclaw/openclaw/issues/206068) [Bug]: macOS Talk orb: double-clicking to stop speech also toggles pause `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206064](https://github.com/openclaw/openclaw/issues/206064) [Bug]: macOS "Shift to stop" setting is bound to Right Option, so pressing Shift does not stop speech `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206059](https://github.com/openclaw/openclaw/issues/206059) [Bug]: macOS Voice Wake does not react to audio input device changes, and a failed start is never retried `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206063](https://github.com/openclaw/openclaw/issues/206063) [Feature]: Optional origin-bound reply mode for ordinary Slack turns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#206062](https://github.com/openclaw/openclaw/issues/206062) [Feature]: Add optional scrape-only authentication to diagnostics-prometheus `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#206060](https://github.com/openclaw/openclaw/issues/206060) [Bug]: macOS selected microphone is applied only to Talk; Voice Wake, push-to-talk and the microphone test capture from the system default `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206057](https://github.com/openclaw/openclaw/issues/206057) [Feature]: Global keyboard shortcut to start and stop Talk Mode on macOS `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#206055](https://github.com/openclaw/openclaw/issues/206055) [Bug]: iOS "Listen" on a chat message reconfigures and then deactivates the shared audio session while Talk, dictation or Voice Wake owns the microphone `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206051](https://github.com/openclaw/openclaw/issues/206051) [Bug]: Dictation start error says no transcription provider is "registered" when the real problem is that none is configured `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206056](https://github.com/openclaw/openclaw/issues/206056) [Bug]: Codex 90 s tool watchdog kills long before_tool_call gates on workboard_complete; per-call timeoutMs is then rejected by the tool schema `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206050](https://github.com/openclaw/openclaw/issues/206050) [Bug]: On a plain-HTTP dashboard, Talk, dictation and the microphone picker fail with messages that never mention HTTPS or localhost `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206047](https://github.com/openclaw/openclaw/issues/206047) [Bug]: Control UI Talk goes idle with no message after a non-error remote close, and the next Talk click does nothing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206045](https://github.com/openclaw/openclaw/issues/206045) [Docs Bug]: Node troubleshooting page has no speech, audio or Talk troubleshooting `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206037](https://github.com/openclaw/openclaw/issues/206037) [Bug]: Discord voice in `stt-tts` mode drops the agent's reply when TTS or playback fails, with no text fallback `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206038](https://github.com/openclaw/openclaw/issues/206038) [Bug]: Android native Talk restarts the speech recognizer every 600 ms on any error with no backoff or terminal state, while showing "Listening" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206033](https://github.com/openclaw/openclaw/issues/206033) [Bug]: Discord voice in `stt-tts` mode drops every utterance with no log when no transcription model is available `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206031](https://github.com/openclaw/openclaw/issues/206031) [Docs Bug]: The Local CLI TTS example using macOS `say` fails on every synthesis ("Opening output file failed: fmt?") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206025](https://github.com/openclaw/openclaw/issues/206025) WebChat shows a turn's private final text when a peer agent's sessions_send started it (message_tool_only turn) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#206024](https://github.com/openclaw/openclaw/issues/206024) [Bug]: Dictation ends on the first recoverable STT error; the realtime transcription reconnect budget is unreachable through the Gateway relay `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206027](https://github.com/openclaw/openclaw/issues/206027) [Bug]: Local whisper-cli transcription assumes English when `tools.media.audio.language` is unset, although the docs say unset means autodetection `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#206019](https://github.com/openclaw/openclaw/issues/206019) [Bug]: macOS Talk stays stuck in "thinking" after pausing during a reply and resuming `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#206012](https://github.com/openclaw/openclaw/issues/206012) [Bug]: Slack: edits/deletes of bot messages bypass allowBots "mentions" and fill the session system-event queue `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206015](https://github.com/openclaw/openclaw/issues/206015) [Bug]: iOS Talk does not handle audio route changes; connecting or removing AirPods mid-call can stop capture or leave it on a stale format `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#206006](https://github.com/openclaw/openclaw/issues/206006) [Bug]: iOS Talk and Voice Wake have no audio-session interruption handling, so a call, Siri or alarm can leave them showing "Listening" with a dead microphone `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#206007](https://github.com/openclaw/openclaw/issues/206007) sessions_send: recipient's explicit NO_REPLY treated as empty_response since 2026.11.7 (false delivery failure + full fallback chain) `P2` `impact:auth-provider` `impact:ux-friction` 💬1
- [#205897](https://github.com/openclaw/openclaw/issues/205897) Support Copilot Fusion across the SDK runtime `enhancement` `P2` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#205996](https://github.com/openclaw/openclaw/issues/205996) [Bug]: memory_search/memory_get disappear in 2026.11.10 when a third-party memory plugin owns plugins.slots.memory (memory-core sidecar, no opt-in) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#205985](https://github.com/openclaw/openclaw/issues/205985) managesOwnAvailability doesn't bypass the rate-limit block for a plugin-owned custom provider `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205960](https://github.com/openclaw/openclaw/issues/205960) [Bug]: Home shows blank Not sent rows for hidden pending-input receipts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205938](https://github.com/openclaw/openclaw/issues/205938) [Bug]: Control UI silently ignores queued-edit Enter while reconnect history loads `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205956](https://github.com/openclaw/openclaw/issues/205956) [Regression]: Agent switcher search was removed in #174984, please restore it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#205920](https://github.com/openclaw/openclaw/issues/205920) Quick Chat still has two popup presentation paths `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205881](https://github.com/openclaw/openclaw/issues/205881) [Bug]: Cron treats provider overloads returned by an isolated agent run as permanent: finalize path fabricates errorReason "unknown", which overrides the transient text match (no quick retry; 2026.11.6) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205793](https://github.com/openclaw/openclaw/issues/205793) [Bug]: Editing a saved attachment caption and immediately reloading loses the attachment `P2` `clawsweeper:source-repro` `impact:data-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#205935](https://github.com/openclaw/openclaw/issues/205935) [Bug]: streamed replies containing inbound metadata rescan the whole reply per delta `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205901](https://github.com/openclaw/openclaw/issues/205901) Doctor heartbeat recovery rejects an explicit multi-agent roster with `systemAgent` set `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205851](https://github.com/openclaw/openclaw/issues/205851) [Feature]: Preserve explicit dictation, Talk, and voice-command routes across voice sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205931](https://github.com/openclaw/openclaw/issues/205931) Discord: make /goal discoverable with action-specific subcommands `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205929](https://github.com/openclaw/openclaw/issues/205929) Investigate intermittent startup corpus timeout on GitHub-hosted CI `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#205919](https://github.com/openclaw/openclaw/issues/205919) Telegram: expose topic icon (iconCustomEmojiId) in message tool and add getForumTopicIconStickers action `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205908](https://github.com/openclaw/openclaw/issues/205908) Update failure: package-update (2026.10.10) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#205894](https://github.com/openclaw/openclaw/issues/205894) [Release blocker] macOS app remains unusable after stable 2026.11.10 migration — compatible signed app and recovery ETA needed `P0` `impact:ux-release-blocker` 💬1
- [#205848](https://github.com/openclaw/openclaw/issues/205848) [Feature]: Add literal and programming-aware dictation profiles with exact symbol and identifier handling `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205889](https://github.com/openclaw/openclaw/issues/205889) [Bug]: view_image has no config key for allowed local roots (docs mention mediaAccess.localRoots, schema rejects it) `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#205815](https://github.com/openclaw/openclaw/issues/205815) Reuse shared heap sampling in benchmark harnesses `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205890](https://github.com/openclaw/openclaw/issues/205890) [Bug]: claude-cli ToolSearch results stored as tool_reference blocks show as errors in Control UI / Android app `bug` `bug:behavior` `P2` `clawsweeper:needs-info` 💬1
- [#205882](https://github.com/openclaw/openclaw/issues/205882) [Bug]: Control UI sidebar silently drops a pinned agent main session (agent:main:main) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#205852](https://github.com/openclaw/openclaw/issues/205852) [Feature]: Make dictation provider readiness and speech-data egress policy explicit `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#205854](https://github.com/openclaw/openclaw/issues/205854) [Feature]: Add explicit voice command turns through authorized computer-control tools `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#205877](https://github.com/openclaw/openclaw/issues/205877) [Bug]: Subagent-completion (requester-settle) turns lose final MEDIA attachments — persisted __openclaw.runId is masked as a Telegram token, so media ownership lookup fails `P2` `impact:session-state` `impact:message-loss` 💬1
- [#205862](https://github.com/openclaw/openclaw/issues/205862) Inbox: 11.10 dropped the "Automations" tab — could the changelog say so explicitly? `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205867](https://github.com/openclaw/openclaw/issues/205867) [Bug]: overlap window UI `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#205856](https://github.com/openclaw/openclaw/issues/205856) [Feature]: Add a personal dictation dictionary with explicit learning and provider hints `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205855](https://github.com/openclaw/openclaw/issues/205855) [Feature]: Add bounded, permission-aware context to dictation transcription `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205847](https://github.com/openclaw/openclaw/issues/205847) [Feature]: Resolve explicitly dictated file references to authorized workspace objects `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205845](https://github.com/openclaw/openclaw/issues/205845) [Feature]: Add bounded low-latency dictation refinement with one coherent result lifecycle `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205846](https://github.com/openclaw/openclaw/issues/205846) [Feature]: Insert finalized dictation into a verified original text target `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205853](https://github.com/openclaw/openclaw/issues/205853) [Feature]: Explicit system-wide dictation with visible capture ownership `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205841](https://github.com/openclaw/openclaw/issues/205841) [Bug]: Control UI: 💬1
- [#205830](https://github.com/openclaw/openclaw/issues/205830) Anthropic conversion path: sanitize empty text blocks in tool_result before sending (session wedges permanently) 💬1
- [#205799](https://github.com/openclaw/openclaw/issues/205799) [Bug]: Claude CLI agents only see "start" and "capabilities" for deep_research, so they can never check or fetch a research job `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205823](https://github.com/openclaw/openclaw/issues/205823) Expose pre-restore PostgreSQL disposition in native backup verification `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#205824](https://github.com/openclaw/openclaw/issues/205824) [Bug]: Profile avatar upload shows “Couldn’t process that image” for a 512 × 512 PNG `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205825](https://github.com/openclaw/openclaw/issues/205825) [Feature]: Let users update their own profile picture from chat `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205803](https://github.com/openclaw/openclaw/issues/205803) No way to add a named token auth profile on a live gateway (paste-token needs offline ownership, no RPC for type: token) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#205781](https://github.com/openclaw/openclaw/issues/205781) Exclude GPT-6 models from the legacy GPT-5 prompt overlay `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#205797](https://github.com/openclaw/openclaw/issues/205797) test(cron): cron-execution-diagnostics e2e fails on main: occurrence admission is not configured `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205786](https://github.com/openclaw/openclaw/issues/205786) test(ui): Meetings dashboard e2e fails on main (heading focus after capture-settings return) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#205790](https://github.com/openclaw/openclaw/issues/205790) Knowledge conversation scribe stops the whole run when one history read remains truncated `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#205784](https://github.com/openclaw/openclaw/issues/205784) [Feature]: Editable operator note/label per secret store entry `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205779](https://github.com/openclaw/openclaw/issues/205779) [Feature]: Opt-in turn-only context for before_prompt_build `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205764](https://github.com/openclaw/openclaw/issues/205764) [Bug]: A queued agent run loses its plugin tools for the whole turn when any plugin is reloaded (regression from #205173, main only) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#205762](https://github.com/openclaw/openclaw/issues/205762) [Bug]: 2026.11.10 cloud worker reclaim teardown fails ("device worker node is not connected with the supervisor dialect"); Crabbox lease can stay active `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#205770](https://github.com/openclaw/openclaw/issues/205770) Allow a scheduled worker to report its outcome without job-management access `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1

#### 🔒 Closed Issues
- [#153426](https://github.com/openclaw/openclaw/issues/153426) Curated memory roots (`MEMORY.md` / `USER.md`) are silently and permanently excluded from bootstrap injection by the provenance ratchet — including after ordinary agent behavior (a web-search turn), with no diagnostics, no CLI, and no recovery
- [#200606](https://github.com/openclaw/openclaw/issues/200606) [Bug]: 2026.11.5 candidate Doctor blocks update with plugin migration conflict and changed=[]
- [#170496](https://github.com/openclaw/openclaw/issues/170496) Read-only state-DB snapshot copied per read; cron timer maintenance triggers it every tick (no reuse)
- [#144876](https://github.com/openclaw/openclaw/issues/144876) [Bug]: Tool-backed dashboard sessions can end silently after length finalization failure
- [#157712](https://github.com/openclaw/openclaw/issues/157712) 2026.9.6: every CLI state read leaks one 162 MB read-only DB snapshot under ~/.cache/openclaw (two staged, one removed at exit); 23 GB in 25 min from scheduled scripts
- [#193673](https://github.com/openclaw/openclaw/issues/193673) [Bug]: Windows update backup capture stops on EBUSY without identifying file
- [#161781](https://github.com/openclaw/openclaw/issues/161781) [Feature]: Signal produces no quoted_bot implicit-mention fact, so quoting the bot in a group is silently ignored
- [#186413](https://github.com/openclaw/openclaw/issues/186413) Silent NO_REPLY on a sessions_send turn to a WebChat session fails as empty_response
- [#202314](https://github.com/openclaw/openclaw/issues/202314) Process supervisor wrappers and stdio MCP servers are not reclaimed (macOS, 2026.11.6)
- [#204738](https://github.com/openclaw/openclaw/issues/204738) [Bug]: core/doctor/memory-provenance reports a fix-now MEMORY.md quarantine, but there is no way to restore trust after review
- [#203532](https://github.com/openclaw/openclaw/issues/203532) Feature request: `openclaw memory trust <file>` to re-trust a workspace memory file that is marked untrusted (provenance record is sticky and there is no documented way out)
- [#142772](https://github.com/openclaw/openclaw/issues/142772) [Bug]: Slack Agent View “is working” status can remain after a completed turn until the desktop client restarts
- [#206081](https://github.com/openclaw/openclaw/issues/206081) [Bug]: backup git create: a gitignored declared table silently makes the whole agent scope fail verify and restore
- [#180796](https://github.com/openclaw/openclaw/issues/180796) Memory provenance misses writes from session-rooted runs and claude-cli native tools, so the next recorded write quarantines MEMORY.md/USER.md
- [#113709](https://github.com/openclaw/openclaw/issues/113709) Trajectory export emits invalid JSON: secret redaction runs after serialization as raw-text replacement
- [#195198](https://github.com/openclaw/openclaw/issues/195198) test: plugin-source-capture-directory caller-retention check fails on main (Node 24.22.1)
- [#205946](https://github.com/openclaw/openclaw/issues/205946) [Feature]: No supported way to share one canonical USER.md across agent workspaces — symlinks escape the root, hardlinks are rejected, only duplicated copies work
- [#194247](https://github.com/openclaw/openclaw/issues/194247) [Feature]: Reduce PWA new-message catch-up with best-effort push-assisted cache refresh
- [#200210](https://github.com/openclaw/openclaw/issues/200210) [Bug]: Incognito first-turn fix (PR #183800 / commit 34e60768, merged 2026-11-05) is absent from stable releases 2026.11.3 and 2026.11.4
- [#196381](https://github.com/openclaw/openclaw/issues/196381) Isolated cron sessions fail with MCP_AUTHORIZATION_RETIRED after secrets migration — auth-profile assertion, not MCP
- [#204735](https://github.com/openclaw/openclaw/issues/204735) [Bug]: macOS service refresh deadlocks when existing PATH[0] is not dirname(node) (SERVICE_DEFINITION_UNKNOWN since >=2026.9.7, surfaced as owed step in beta.3)
- [#195391](https://github.com/openclaw/openclaw/issues/195391) [Bug]: git install on a 4 GB host fails late at "Building OpenClaw" (needs ~4.7 GB); no memory preflight or documented requirement
- [#199928](https://github.com/openclaw/openclaw/issues/199928) [Bug]: ollama-cloud replies fail with 400 "max_tokens exceeds model's maximum output tokens" for models outside the curated default list (2026.11.3+)
- [#206314](https://github.com/openclaw/openclaw/issues/206314) [Windows / Node 26] Warning: File descriptor closed but not opened in unmanaged mode during `openclaw models status --probe`
- [#195956](https://github.com/openclaw/openclaw/issues/195956) fix(android): expose selected accessibility state on branch switcher rows
- [#195903](https://github.com/openclaw/openclaw/issues/195903) Android: Voice Settings microphone rows omit radio selection and disabled semantics
- [#195895](https://github.com/openclaw/openclaw/issues/195895) Android: App language choices in Appearance settings omit radio-button selection semantics
- [#195862](https://github.com/openclaw/openclaw/issues/195862) Android: Threads rows do not expose unread state to accessibility services
- [#195843](https://github.com/openclaw/openclaw/issues/195843) android: Appearance theme-family cards do not expose radio role or selected state to accessibility
- [#195815](https://github.com/openclaw/openclaw/issues/195815) android: recorded-source preview cards do not expose selected state to accessibility
- [#195796](https://github.com/openclaw/openclaw/issues/195796) Android: ChatQuestionCard answer rows do not expose radio or checkbox selection semantics to screen readers
- [#195704](https://github.com/openclaw/openclaw/issues/195704) Android: Threads filter pills do not expose selected state to screen readers
- [#195628](https://github.com/openclaw/openclaw/issues/195628) Android: chat agent picker chips do not expose selected state to screen readers
- [#206190](https://github.com/openclaw/openclaw/issues/206190) [Feature]: Terminate processes manually, or clear everything out using /new
- [#206074](https://github.com/openclaw/openclaw/issues/206074) [Bug]: v2026.11.10 still copies ordinary plugin sources to fresh capture dirs — static audit (Codex/ACPX heavy setup)
- [#204080](https://github.com/openclaw/openclaw/issues/204080) Sidebar: off-list pinned parents cannot show their child sessions
- [#205745](https://github.com/openclaw/openclaw/issues/205745) [Bug]: Mobile Safari chat jumps while scrolling into older history
- [#190378](https://github.com/openclaw/openclaw/issues/190378) [Bug]: buildCodeSpanIndex is not chunk-invariant when a backtick run is split across streamed chunks
- [#205769](https://github.com/openclaw/openclaw/issues/205769) [Bug]: State upgrade aborts on Windows without Developer Mode — recreates node_modules symlinks with fs.symlinkSync (EPERM) after copying 9.4 GB, retried in a loop
- [#190889](https://github.com/openclaw/openclaw/issues/190889) [Bug]: Every Telegram polling worker loads the debug proxy capture store while capture is off
- [#204767](https://github.com/openclaw/openclaw/issues/204767) [Bug]: Exec-completion wake in a webchat gateway-owner session runs with runtime senderIsOwner=false, quarantining MEMORY.md on tracked edits
- [#174730](https://github.com/openclaw/openclaw/issues/174730) [Bug]: Control UI fork of long conversation fails with size-limit toast and no recovery action
- [#205035](https://github.com/openclaw/openclaw/issues/205035) Windows TEMP service repair retains control SQLite custody and fails Gateway publication (EPERM)
- [#203932](https://github.com/openclaw/openclaw/issues/203932) Docker: a hard-killed Gateway container cannot restart (GatewayLockNamespaceError on its own previous PID 1)
- [#205417](https://github.com/openclaw/openclaw/issues/205417) Queued input start refusal: deliver the cause sentence to channels (R-UX2 part 2)
- [#205537](https://github.com/openclaw/openclaw/issues/205537) Memory-index session worker OOMs on session files > ~250 MB (hard 512 MB heap + whole-file read)
- [#201571](https://github.com/openclaw/openclaw/issues/201571) [Bug]: memory index on PostgreSQL agent stores hits ERR_WORKER_OUT_OF_MEMORY (hardcoded 512 MB transcript worker heap)
- [#205737](https://github.com/openclaw/openclaw/issues/205737) [Bug]: Bun catalog retention test still sees a superseded snapshot
- [#203463](https://github.com/openclaw/openclaw/issues/203463) Collected group batch can run with the last sender's owner rights when one message lacks sender evidence
- [#203464](https://github.com/openclaw/openclaw/issues/203464) Queued channel messages are silently refused after a Gateway restart
- [#197024](https://github.com/openclaw/openclaw/issues/197024) [Bug]: code-mode `ask_user` without `awaitResults` returns `waiting`, and the card is lost when the turn ends
- [#206378](https://github.com/openclaw/openclaw/issues/206378) [Bug]: 2026.11.6: "Model switched … (model_not_found)" notice replaces a sessions_spawn child's final reply, so the parent receives no result
- [#205802](https://github.com/openclaw/openclaw/issues/205802) [Bug]: Knowledge plugin tool shapes cause avoidable validation failures (knowledge_annotate required/sibling trap, knowledge_attach_file opaque workspace error, and cross-tool schema drift)
- [#204145](https://github.com/openclaw/openclaw/issues/204145) [Bug]: Git updater reports a healthy schema-41 Gateway as abandoned and leaves its rollback trial armed
- [#206270](https://github.com/openclaw/openclaw/issues/206270) Finish shared ownership of Talk parser tests
- [#206279](https://github.com/openclaw/openclaw/issues/206279) Update macOS connection tests for normalized WSS ports
- [#206307](https://github.com/openclaw/openclaw/issues/206307) [Bug]: anthropic-messages provider never tags pre-tool text as commentary, so Telegram progress drafts omit it
- [#205954](https://github.com/openclaw/openclaw/issues/205954) Soft compaction after the final source read can make the agent repeat completed work
- [#206255](https://github.com/openclaw/openclaw/issues/206255) Share DeepLinks parser coverage between package and iOS tests
- [#205939](https://github.com/openclaw/openclaw/issues/205939) [Bug]: 2026.9.37 Git updates launch the new schema worker under the old updater’s maintenance lease
- [#206186](https://github.com/openclaw/openclaw/issues/206186) [Bug]: backup git create reports success for a commit missing declared tables when a pre-commit hook unstages them
- [#206147](https://github.com/openclaw/openclaw/issues/206147) [Feature]: Show CSV attachments as a table in the Control UI
- [#206226](https://github.com/openclaw/openclaw/issues/206226) Mattermost buttons with non-alphanumeric values (Chinese text, spaces, agent callbacks) open "Page not found" on click
- [#206249](https://github.com/openclaw/openclaw/issues/206249) [Bug]: Heartbeat repeatedly delivers "Thinking level clamped to off" notice to channel on every run
- [#204999](https://github.com/openclaw/openclaw/issues/204999) Signal: blockquote continuation lines, nested quote lines, and later chunks lose the > marker
- [#206208](https://github.com/openclaw/openclaw/issues/206208) Finish settings controls migration to the canonical switch
- [#206146](https://github.com/openclaw/openclaw/issues/206146) session_project is offered to runs working outside the agent's default workspace
- [#203006](https://github.com/openclaw/openclaw/issues/203006) Matrix progress previews are suppressed when final delivery uses the message tool
- [#206163](https://github.com/openclaw/openclaw/issues/206163) IRC probe fails with “Nickname too long” while the bot is connected
- [#206170](https://github.com/openclaw/openclaw/issues/206170) [Bug]: Talk consult fails replay admission during Workboard task review
- [#206107](https://github.com/openclaw/openclaw/issues/206107) [Bug]: Control UI shows "Outcome unknown" for all claude-cli tool calls, so sessions_yield never shows "Waiting on…" / "Resumed"
- [#206157](https://github.com/openclaw/openclaw/issues/206157) [Bug]: openclaw@2026.11.4 runtime-context bloat (requesterSettleWake deadlock + unbounded Interrupted inputs), closed PluginInvocationScope on agent_end & session-maintenance, and stale Codex client_version pin
- [#206116](https://github.com/openclaw/openclaw/issues/206116) Title: Automations sidebar: failing automations are hard to find
- [#202570](https://github.com/openclaw/openclaw/issues/202570) [Feature]: Include recent unquoted Signal group images on a later mention
- [#206135](https://github.com/openclaw/openclaw/issues/206135) [Bug]: PostgreSQL engine: memory session indexing fails with "invalid byte sequence for encoding UTF8: 0x00" when a transcript holds a JSON-escaped NUL (U+0000)
- [#206125](https://github.com/openclaw/openclaw/issues/206125) [Bug]: Install page advertises macOS 15+ for the desktop app, but every linked DMG from 2026.10.10 onward is built for macOS 26.2 and will not launch
- [#206007](https://github.com/openclaw/openclaw/issues/206007) sessions_send: recipient's explicit NO_REPLY treated as empty_response since 2026.11.7 (false delivery failure + full fallback chain)
- [#205897](https://github.com/openclaw/openclaw/issues/205897) Support Copilot Fusion across the SDK runtime
- [#195966](https://github.com/openclaw/openclaw/issues/195966) fix(android): preserve aggregate contact display name in contacts.search results
- [#199378](https://github.com/openclaw/openclaw/issues/199378) Talk voice consults fail on Claude CLI and locked native-harness chats that answer typed messages
- [#199428](https://github.com/openclaw/openclaw/issues/199428) GPT-Live client-owned calls omit the rule against invented progress
- [#196029](https://github.com/openclaw/openclaw/issues/196029) Android: ChatReactionPicker custom emoji sheet is not scrollable in short viewports with large text
- [#194029](https://github.com/openclaw/openclaw/issues/194029) [Bug]: Signal exec approval responses queue behind the turn waiting for approval
- [#205938](https://github.com/openclaw/openclaw/issues/205938) [Bug]: Control UI silently ignores queued-edit Enter while reconnect history loads
- [#205920](https://github.com/openclaw/openclaw/issues/205920) Quick Chat still has two popup presentation paths
- [#204192](https://github.com/openclaw/openclaw/issues/204192) [Bug]: Running `gateway status` through a legacy Git launcher rolls back a healthy Gateway
- [#193280](https://github.com/openclaw/openclaw/issues/193280) Android calendar.add puts an all-day event on the wrong day when the time has a positive UTC offset
- [#205793](https://github.com/openclaw/openclaw/issues/205793) [Bug]: Editing a saved attachment caption and immediately reloading loses the attachment
- [#197331](https://github.com/openclaw/openclaw/issues/197331) 2026.10.10: each sessions.delete can leave a ~150 MB SQLite reclamation worker alive for 30 min; bulk deletes exhaust host memory
- [#205894](https://github.com/openclaw/openclaw/issues/205894) [Release blocker] macOS app remains unusable after stable 2026.11.10 migration — compatible signed app and recovery ETA needed
- [#205815](https://github.com/openclaw/openclaw/issues/205815) Reuse shared heap sampling in benchmark harnesses
- [#205877](https://github.com/openclaw/openclaw/issues/205877) [Bug]: Subagent-completion (requester-settle) turns lose final MEDIA attachments — persisted __openclaw.runId is masked as a Telegram token, so media ownership lookup fails
- [#205867](https://github.com/openclaw/openclaw/issues/205867) [Bug]: overlap window UI
- [#205387](https://github.com/openclaw/openclaw/issues/205387) [Bug]: Compaction summarizer injects fabricated verification gates into Open TODOs, overriding explicit user approvals
- [#205841](https://github.com/openclaw/openclaw/issues/205841) [Bug]: Control UI:
- [#205752](https://github.com/openclaw/openclaw/issues/205752) [Bug]: Compaction of a large session fails on 2026.11.10: the manual plan request is refused by the 256 MiB worker pending-bytes cap, and the budget path times out at a fixed 60 s
- [#204768](https://github.com/openclaw/openclaw/issues/204768) [Bug]: Update run record (16 KiB steps_json) silently evicts actionable warnings: 2026.11.7 hid a failed service refresh, beta.3 status drops a real Doctor warning
- [#205781](https://github.com/openclaw/openclaw/issues/205781) Exclude GPT-6 models from the legacy GPT-5 prompt overlay
- [#199327](https://github.com/openclaw/openclaw/issues/199327) [Bug]: Every session MCP runtime eagerly compiles an output-schema validator for every tool (~15–20 MB per runtime, nothing shared)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 266,448 · **Open issues:** 54,667 · **Last push:** <1h ago

There were no new releases for Hermes Agent on November 27, 2026. Significant merged pull requests included #160641, which compactly manages idle gateway chats in the background, and #160651, fixing an issue where replies outlasting the prompt cache could redundantly resend previous requests. A notable new issue is #160322, which proposes a feature where the subagent rewrites its cached prefix after a single generation exceeding five minutes. This adds to a busy day of development reflected in various fixes and enhancements, particularly in addressing plugin compatibility and UI behavior.

#### ✅ Merged PRs
- [#160641](https://github.com/NousResearch/hermes-agent/pull/160641) Idle gateway chats compact in the background before you come back (fixes #79357, part of #97390)
- [#159896](https://github.com/NousResearch/hermes-agent/pull/159896) catalog: bump fastpath pin and add marketplace images
- [#160651](https://github.com/NousResearch/hermes-agent/pull/160651) A reply that outlasts the prompt cache no longer makes the next request re-send everything (fixes #160322)
- [#160225](https://github.com/NousResearch/hermes-agent/pull/160225) fix(gateway): align backend migration restart handoff, systemd, and UI polling timeouts

#### 🐛 New Issues
- [#160322](https://github.com/NousResearch/hermes-agent/issues/160322) [Feature]: Subagent re-writes its whole cached prefix after a single generation longer than 5 minutes (follow-up to #147220, measured after #156455) `type/perf` `comp/agent` `tool/delegate` `P2` 💬2
- [#160384](https://github.com/NousResearch/hermes-agent/issues/160384) [Feishu] Custom interactive-card button clicks are dropped on v0.23.4: synthetic `/card` has no gateway handler, `form_value` never forwarded (re-file of #150559 with repro + fix) `type/bug` `comp/plugins` `platform/feishu` `P2` 💬2
- [#160647](https://github.com/NousResearch/hermes-agent/issues/160647) [Bug]: catalog plugin \`mnemosyne\` cannot be installed into an existing scope because Hermes 0.23.4 pins \`onnxruntime==1.31.0\` and the plugin needs \`onnxruntime<1.29\` `type/bug` `comp/plugins` `P2` `area/install-update` 💬1
- [#160634](https://github.com/NousResearch/hermes-agent/issues/160634) [Bug]: /v1/runs reports a max-iterations handoff (final response delivered) as run.failed `type/bug` `comp/gateway` `tool/file` `P2` 💬1
- [#160605](https://github.com/NousResearch/hermes-agent/issues/160605) Approval gate: three command shapes turn an `ask` verdict into `allow` (trailing redirect after `cp`, `sed … | sh`, `sh <file>`) `type/security` `comp/tools` `tool/terminal` `area/config` 💬1
- [#160608](https://github.com/NousResearch/hermes-agent/issues/160608) Sessions fence indefinitely on persisted 'unknown' admissions; no boot-time reconciliation `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#160628](https://github.com/NousResearch/hermes-agent/issues/160628) [Bug]: could not update/install `type/bug` `comp/cli` `P2` `area/install-update` 💬1
- [#160658](https://github.com/NousResearch/hermes-agent/issues/160658) [Feature]: An interactive session source for integrations (queued Steer/Edit without owner-chat semantics) `type/feature` `comp/gateway` `P2` `area/sessions`
- [#160657](https://github.com/NousResearch/hermes-agent/issues/160657) [Bug]: Desktop v0.23.4 omits enabled MoA presets in a new chat on a secondary profile `type/bug` `P2` `comp/desktop` `area/profiles`
- [#160655](https://github.com/NousResearch/hermes-agent/issues/160655) Skill `requires_tools` / `requires_toolsets` treat tools deferred behind tool search as missing `type/bug` `comp/agent` `tool/skills` `tool/mcp`
- [#160652](https://github.com/NousResearch/hermes-agent/issues/160652) hermes cron create/edit: a flag to control a job's completion notices `type/feature` `comp/cli` `comp/cron` `P3`
- [#160648](https://github.com/NousResearch/hermes-agent/issues/160648) [Bug]: hermes gateway migrate --multiplex cannot detect a symlinked profile's gateway and concludes the host is already converged `type/bug` `comp/cli` `P3` `area/profiles`
- [#160646](https://github.com/NousResearch/hermes-agent/issues/160646) [Windows] Tray toggle: when minimize-to-tray is OFF, taskbar click should minimize to taskbar, not hide to tray `type/bug` `area/config` `P2` `comp/desktop`
- [#160645](https://github.com/NousResearch/hermes-agent/issues/160645) [Bug]: a failed update deadlocks the host and \`hermes pm repair\` cannot recover it (symlinked profile home) `type/bug` `comp/cli` `P2` `area/install-update`
- [#160638](https://github.com/NousResearch/hermes-agent/issues/160638) Group chat renders the primary (default-profile) bot with the shape fallback instead of its photo/pet avatar `type/bug` `P3` `comp/desktop` `area/profiles`
- [#160637](https://github.com/NousResearch/hermes-agent/issues/160637) [Bug]: Hermes Mobile crashes when using Live Mode on iPad (8th generation) `type/bug` `tool/tts` `P2`
- [#160636](https://github.com/NousResearch/hermes-agent/issues/160636) [Bot Mode] Reply delivery status shows "awaiting reply" after auto-reply already sent `type/bug` `comp/gateway` `P2` `area/profiles`
- [#160629](https://github.com/NousResearch/hermes-agent/issues/160629) Buzz gateway: hosted NIP-FI community returns 401; setup does not explain agent authentication requirements `type/bug` `comp/gateway` `area/auth` `P2`
- [#160627](https://github.com/NousResearch/hermes-agent/issues/160627) feat(desktop-plugin-sdk): add profile-scoped SDK verb to read and patch config keys `type/feature` `area/config` `P3` `comp/desktop`
- [#160623](https://github.com/NousResearch/hermes-agent/issues/160623) [Feature]: `type/feature` `backend/ssh` `comp/tools` `P3`
- [#160622](https://github.com/NousResearch/hermes-agent/issues/160622) Fix profile-scoped HERMES_CODEX_BASE_URL resolution for multiplexed Codex OAuth `type/bug` `comp/gateway` `provider/openai` `area/auth`

#### 🔒 Closed Issues
- [#79357](https://github.com/NousResearch/hermes-agent/issues/79357) [Bug]: idle_compact_after_seconds never fires in gateway mode — watchdog reset clobbers _last_activity_ts before the idle check reads it
- [#99568](https://github.com/NousResearch/hermes-agent/issues/99568) session_search recovery footer after compaction cannot return compacted rows
- [#149642](https://github.com/NousResearch/hermes-agent/issues/149642) Plugin oauth: entries: expose redirect_port for IdPs that require exact-match redirect URIs (e.g. QuickBooks)
- [#160322](https://github.com/NousResearch/hermes-agent/issues/160322) [Feature]: Subagent re-writes its whole cached prefix after a single generation longer than 5 minutes (follow-up to #147220, measured after #156455)
- [#152732](https://github.com/NousResearch/hermes-agent/issues/152732) Plugin oauth: comma-separated scopes and a pinned redirect port (Linear's requirements)
- [#160108](https://github.com/NousResearch/hermes-agent/issues/160108) session_search: session_id parameter description contradicts supported READ mode
- [#160629](https://github.com/NousResearch/hermes-agent/issues/160629) Buzz gateway: hosted NIP-FI community returns 401; setup does not explain agent authentication requirements

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,659 · **Open issues:** 11,194 · **Last push:** <1h ago

On November 27, 2026, there were no new releases for vLLM, but several significant updates were merged. Notably, PR #68374 addressed a bug in MoRIIO by skipping layers that share another layer's KV cache in WRITE mode, while PR #70214 introduced online quantization targeting for the lm_head in Qwen4Exp. Additionally, PR #69404 fixed an issue with Hy4-flash Engram that related to hashing padded-vocab ids. The most pressing new issue reported today is #70056, which highlights a bug in the Mistral parser that emits blank tool names, potentially complicating tool usage in streaming scenarios. Overall, the day was focused on refining existing features and addressing bugs rather than introducing new functionality.

#### ✅ Merged PRs
- [#68374](https://github.com/vllm-project/vllm/pull/68374) [Bugfix][ROCm][MoRIIO] Skip layers sharing another layer's KV cache in WRITE mode
- [#67944](https://github.com/vllm-project/vllm/pull/67944) [Perf][UMBP] Default the embedded DRAM pool to 0.99/0.97 eviction watermarks
- [#69165](https://github.com/vllm-project/vllm/pull/69165) [Model][Hardware] Inkling 2: run on Ampere and Ada (SM80/SM86/SM89)
- [#70216](https://github.com/vllm-project/vllm/pull/70216) [Frontend] Honor return_documents in rerank responses
- [#69622](https://github.com/vllm-project/vllm/pull/69622) [Bugfix][Frontend] Kimi K3: accept strict tool schemas with a `$ref` into their own property tree
- [#69404](https://github.com/vllm-project/vllm/pull/69404) [Bugfix] Hy4-flash Engram: hash padded-vocab ids as pad, reject microbatching
- [#66502](https://github.com/vllm-project/vllm/pull/66502) [Feature][KV Connector][Mooncake] Support HiSparse host-pool imports
- [#70214](https://github.com/vllm-project/vllm/pull/70214) [Model][Qwen4Exp] Apply an online quantization target to the lm_head
- [#70004](https://github.com/vllm-project/vllm/pull/70004) [ROCm][HY4] fp8_ds_mla with sinks, ShardQ and iHC sequence parallelism on ROCm
- [#69354](https://github.com/vllm-project/vllm/pull/69354) [LoRA] Make embedding and lm_head LoRA opt-in
- [#69819](https://github.com/vllm-project/vllm/pull/69819) [Bugfix][MoRIIO] Support grouped 4D KV cache blocks
- [#69112](https://github.com/vllm-project/vllm/pull/69112) [RL][Weight Transfer] Add sparse_disk backend for sparse deltas through storage
- [#70246](https://github.com/vllm-project/vllm/pull/70246) [Bugfix][Inkling2] Read the conv cache in short_conv prefill tiles that end in padding
- [#69996](https://github.com/vllm-project/vllm/pull/69996) [CI] Leave the shard coverage check out of /ci retry on a new commit
- [#68477](https://github.com/vllm-project/vllm/pull/68477) [Frontend][Multimodal] Load processed multimodal tensors from S3 in /inference/v1/generate
- [#69842](https://github.com/vllm-project/vllm/pull/69842) [Renderer] Pass media_io_kwargs to renderer via prompt_extras
- [#69573](https://github.com/vllm-project/vllm/pull/69573) [Bugfix][Model] Hy4 VL: emit encoder graph axis keys only with video
- [#70197](https://github.com/vllm-project/vllm/pull/70197) [LoRA] Add --lora-split-k-reduction for LoRA BI
- [#69735](https://github.com/vllm-project/vllm/pull/69735) [Perf][Qwen4Exp] Run QSA prefill steps with FlashInfer on Blackwell
- [#67064](https://github.com/vllm-project/vllm/pull/67064) [KV Connector][NIXL] Cut P/D loads at the Mamba prefix-cache checkpoint
- [#62524](https://github.com/vllm-project/vllm/pull/62524) [ROCm][CI] Fix ViT backend and custom all-reduce tests with AITER on
- [#70169](https://github.com/vllm-project/vllm/pull/70169) [ROCm][Bugfix] Pass is_ultraquant_run in automatic attention backend selection
- [#69621](https://github.com/vllm-project/vllm/pull/69621) [Bugfix][Kimi-K3] Composite transparent images over the checkpoint background
- [#69009](https://github.com/vllm-project/vllm/pull/69009) [Pre-commit][Bugfix] Move torch.cuda check into check_forbidden_strings
- [#69911](https://github.com/vllm-project/vllm/pull/69911) [ROCm][CI] Make the child stack dump work on Python 3.14
- [#70159](https://github.com/vllm-project/vllm/pull/70159) [CI] Skip the global cleanup after kernel tests that skipped themselves
- [#70155](https://github.com/vllm-project/vllm/pull/70155) [CI][ROCm] Speed up the block-quant reference matmul in kernel tests
- [#70134](https://github.com/vllm-project/vllm/pull/70134) [ROCm][CI] Use an fp32 lm_head for granite4_h in test_pp_tied_word_embeddings
- [#70116](https://github.com/vllm-project/vllm/pull/70116) [Bugfix][Transformers backend] Keep the BOS that the HF processor prepends
- [#69975](https://github.com/vllm-project/vllm/pull/69975) [Refactor] Remove dead code in models
- [#70076](https://github.com/vllm-project/vllm/pull/70076) [Bugfix][Transformers backend] Don't split checkpoint tensors of skipped modules
- [#65741](https://github.com/vllm-project/vllm/pull/65741) [Bugfix][Frontend] Keep the most likely candidate's logprob when /v1/completions top_logprobs keys collide
- [#70178](https://github.com/vllm-project/vllm/pull/70178) [Perf][DCP] Size sparse-indexer decode logits by the DCP-local context
- [#70031](https://github.com/vllm-project/vllm/pull/70031) [Rust Frontend] Serve /v1/decisions with next-token reads
- [#70038](https://github.com/vllm-project/vllm/pull/70038) [Refactor][Sleep Mode] Remove unused SleepModeState and uncalled capability flags

#### 🐛 New Issues
- [#70056](https://github.com/vllm-project/vllm/issues/70056) [Bug]: Mistral parser emits blank tool names followed by orphaned streaming argument deltas `tool-calling` `mistral` 💬4
- [#70043](https://github.com/vllm-project/vllm/issues/70043) [Bug]: Inkling 2: copies of a prompt in one batch differ run to run with prefix caching on `kv-cache-manager` `inkling` 💬3
- [#70053](https://github.com/vllm-project/vllm/issues/70053) [Bug]: /v1/responses` streaming crashes with `ValidationError: ResponseFunctionToolCallItem.name ... NoneType` when a tool-call state is opened from a delta without `function.name `bug` `tool-calling` 💬2
- [#70199](https://github.com/vllm-project/vllm/issues/70199) [Bug]: FA3 gives wrong output for causal sliding-window prefill at head dim 128/256 on H100 💬2
- [#70232](https://github.com/vllm-project/vllm/issues/70232) [Bug]: Gemma 4 falls back to FA2 and fails warmup with batch invariance on H100 `batch-invariance` 💬2
- [#70193](https://github.com/vllm-project/vllm/issues/70193) [Performance]: Fix remaining engine step stalls during CPU KV restore (idx_mapping H2D + in-flight copy cap) `performance` 💬2
- [#70219](https://github.com/vllm-project/vllm/issues/70219) [Bug]: Cohere tool parser returns HTTP 500 for a malformed tool schema that should be HTTP 400 `rocm` `structured-output` `tool-calling` 💬2
- [#70046](https://github.com/vllm-project/vllm/issues/70046) [RFC]: Zero-VRAM progressive bit-sliced (2+2+4) sparse FP8 MoE backend for FusedMoEExpertsModular `rocm` 💬2
- [#70158](https://github.com/vllm-project/vllm/issues/70158) [ROCm][AMD] Mistral Large 4 gfx942 / MI300X / MI325X Performance Optimization `performance` `rocm` `quantization` `mistral` 💬2
- [#70057](https://github.com/vllm-project/vllm/issues/70057) [Feature]: DFlash2 best-first tree verification for Qwen3.5/GDN on Model Runner V2 💬2
- [#70257](https://github.com/vllm-project/vllm/issues/70257) [Bug]: KV event publisher binds or connects depending on how the same IPv6 address is spelled 💬1
- [#70061](https://github.com/vllm-project/vllm/issues/70061) [Feature]: Opt-in fixed-order LoRA shrink reduction without global batch-invariant mode `batch-invariance` 💬1
- [#70233](https://github.com/vllm-project/vllm/issues/70233) [Feature][ROCm]: Decode FULL cudagraphs under PCP `feature request` `rocm` `kimi` 💬1
- [#70180](https://github.com/vllm-project/vllm/issues/70180) [Feature]: --enable-cache-reset: expose the dev cache-reset routes without VLLM_SERVER_DEV_MODE `feature request`
- [#70172](https://github.com/vllm-project/vllm/issues/70172) [ROCm][Performance]: --kv-cache-dtype-skip-layers makes fp8 KV decode ~14x slower on MI300X (custom paged attention disabled by stride-padded blocks) `rocm` 💬1
- [#70165](https://github.com/vllm-project/vllm/issues/70165) [Bug]: Gemma-4 E4B OOMs during torch.compile on 16 GB GPUs: Inductor benchmarks the 5.25 GiB per-layer embedding table with a random copy `rocm` `torch.compile` 💬1
- [#70051](https://github.com/vllm-project/vllm/issues/70051) [RFC]: Async Pre-Allocation Wait State in Scheduler for External KV Transfer and Lookup `kv-connector` `scheduler` 💬1
- [#70128](https://github.com/vllm-project/vllm/issues/70128) [ROCm][MoE] MORI EP: experts process the full capacity-sized receive buffer, so per-step cost scales with `max_num_batched_tokens` instead of load `rocm` 💬1
- [#70098](https://github.com/vllm-project/vllm/issues/70098) [Bug]: Rust frontend silently accepts `thinking_token_budget` when no reasoning config is set `tool-calling` `rust` 💬1
- [#70054](https://github.com/vllm-project/vllm/issues/70054) [Bug]: Rust frontend (vllm-rs) silently hangs on unbounded ZMQ input send while /health continues returning 200 OK `rust` 💬1
- [#70106](https://github.com/vllm-project/vllm/issues/70106) [Bug]: Weight-only block FP8 (input_activations: null) fails with AssertionError in CompressedTensorsW8A16Fp8 `quantization` 💬1
- [#70273](https://github.com/vllm-project/vllm/issues/70273) [Bug]: Muse-Glimmer-30B-NVFP4 hangs or crashes with "illegal memory access" on RTX PRO 5000 Blackwell when another process on the same GPU is under load `bug`
- [#70272](https://github.com/vllm-project/vllm/issues/70272) [Bug][ROCm]: AITER kernels return different bits for identical calls on MI355X (gfx950) `rocm` `batch-invariance`
- [#70267](https://github.com/vllm-project/vllm/issues/70267) [Bug]: Inkling 2 Mini: DSpark greedy output differs from no speculation on plain-text prompts, deterministically `inkling`
- [#70266](https://github.com/vllm-project/vllm/issues/70266) [Bug]: Inkling 2 Mini: prefix caching changes greedy output of image requests sent one at a time `kv-cache-manager` `inkling`
- [#70265](https://github.com/vllm-project/vllm/issues/70265) [Feature]: Write the resolved vllm serve settings to a YAML file that --config can load `feature request`
- [#70264](https://github.com/vllm-project/vllm/issues/70264) [Feature]: Support adaptive verification together with LoRA
- [#70240](https://github.com/vllm-project/vllm/issues/70240) [Bug]: `--kv-cache-dtype` is ignored for Falcon models with rotary or ALiBi attention
- [#70231](https://github.com/vllm-project/vllm/issues/70231) [Performance]: LFM2 tool parser re-parses the whole tool call on every delta `tool-calling`
- [#70222](https://github.com/vllm-project/vllm/issues/70222) [Feature][ROCm]: ShardQ with ROCM_AITER_MLA_SPARSE `feature request` `rocm` `kimi`
- [#70210](https://github.com/vllm-project/vllm/issues/70210) In-process sleep(level=1) / cache-clearing pause raises while a connector transfer still holds a finished request's blocks: intended?
- [#70206](https://github.com/vllm-project/vllm/issues/70206) [Bug]: Fault-tolerance recovery leaves the PP idle-step gate set, so kept requests stall (PP>1, DP=1, recompute)
- [#70182](https://github.com/vllm-project/vllm/issues/70182) [Bug]: Hybrid model + drafter with non-dividing KV pages: lcm page inflates the scheduler block and prefix caching never hits `intel-gpu` `scheduler` `kv-cache-manager`
- [#70181](https://github.com/vllm-project/vllm/issues/70181) [Bug]: vllm-ascend `npu_ring_mla` crashes on an MLA model with 32 heads (v_head_dim 192): AtbRingMLAGetWorkspaceSize, no diagnostics — head-count matrix, legality, workaround shim with LSE-merge (prefix-cache compatible)
- [#70168](https://github.com/vllm-project/vllm/issues/70168) [Feature]: Support greedy token parity for GLM-5.3-Flash DFlash2 on GB10 `quantization` `glm`
- [#70066](https://github.com/vllm-project/vllm/issues/70066) [Bug]: Mamba prefix caching can cache a block's state under the wrong position after a preemption `kv-cache-manager`
- [#70145](https://github.com/vllm-project/vllm/issues/70145) [Bug]: Nemotron-H MTP speculative decoding with --enable-eplb fails: EPLB requires expert_load_view != None `speculative-decoding`
- [#70127](https://github.com/vllm-project/vllm/issues/70127) [Bug][XPU] Qwen3.6-35B-A3B MXFP4: more dropped items in long json_schema outputs after #64687 `structured-output` `intel-gpu` `quantization`
- [#70122](https://github.com/vllm-project/vllm/issues/70122) [Performance]: DeepSeek-V4 SP gathers four residual streams before the final HC head `performance` `deepseek`
- [#70123](https://github.com/vllm-project/vllm/issues/70123) [Performance]: Offline beam search retains finished hypotheses beyond beam width `performance`
- [#70119](https://github.com/vllm-project/vllm/issues/70119) [Bug][Frontend]: /v1/completions echo returns the untruncated text prompt when truncate_prompt_tokens is set without truncation_side
- [#70111](https://github.com/vllm-project/vllm/issues/70111) [Performance]: Avoid copying discarded histories in offline LLM.beam_search `performance`
- [#70104](https://github.com/vllm-project/vllm/issues/70104) [Bug]: Streaming input ignores per-chunk skip_special_tokens changes
- [#70100](https://github.com/vllm-project/vllm/issues/70100) [Bug]: Muse Spark rejects attention-only LoRA for its packed QKV and output gate `bug`
- [#70060](https://github.com/vllm-project/vllm/issues/70060) [RFC]: Extend Mamba Internal Prefill Checkpoints to Non-Final Chunks `RFC`
- [#70064](https://github.com/vllm-project/vllm/issues/70064) [Bug]: GDN ReplaySSM loses the state update of a resumed one-token prefill chunk
- [#70055](https://github.com/vllm-project/vllm/issues/70055) [Bug]: HiSparse completes a wasted host import after the request is aborted
- [#70049](https://github.com/vllm-project/vllm/issues/70049) FusedMoE default loader skips e_score_correction_bias and misses the router parameter alias

#### 🔒 Closed Issues
- [#42426](https://github.com/vllm-project/vllm/issues/42426) [Bug]: Kimi-K2.6 intermittently outputs only "!!!!!!!!!!" in reasoning field with content null
- [#48234](https://github.com/vllm-project/vllm/issues/48234) SIGSEGV in torch::jit::invokeOperatorFromPython (transpose) with NVFP4 + DFlash + torch.compile on Blackwell SM120
- [#48504](https://github.com/vllm-project/vllm/issues/48504) [RFC]: GDS support for filesystem KV-cache offloading
- [#49137](https://github.com/vllm-project/vllm/issues/49137) [Bug]: auto_round (INC) path hardcodes lm_head_quantized=False, crashing on checkpoints with quantized lm_head that auto-round legally produces
- [#48449](https://github.com/vllm-project/vllm/issues/48449) [Bug]: MiniCPM-V-4.6 fails to load on vLLM 0.25.0 — ValueError: There is no module or parameter named 'qkqkv_proj' in MiniCPMV4_6ViTWindowAttentionSelfAttn
- [#49290](https://github.com/vllm-project/vllm/issues/49290) [Bug]: [kernel] MRotaryEmbedding Triton kernel hardcodes Neox-style rotation, producing wrong results for GPT-J style models (like GLM-OCR).
- [#48540](https://github.com/vllm-project/vllm/issues/48540) [RFC]: manylinux compatibility baseline for aarch64 binary dependencies
- [#48541](https://github.com/vllm-project/vllm/issues/48541) [Bug]: FlashInfer CUTLASS MoE selected on fp4-less builds (CUDA toolkit < 12.8); gpt-oss dies at engine start
- [#48591](https://github.com/vllm-project/vllm/issues/48591) 还不支持[Usage]: vllm 0.25版本在tp=8并行的时候走dflash 和dspark 命中 attention后端的时候出现错误报错定位 CUDA error (/workspace/.deps/vllm-flash-attn-src/hopper/flash_api.cpp:697): invalid configuration argument 8个worker(TP0-TP7)
- [#48602](https://github.com/vllm-project/vllm/issues/48602) [Bug]: DeepSeekv4 flash on RTXpro6000 vllm benchmark input 8192 output 1024 encounter a err
- [#49158](https://github.com/vllm-project/vllm/issues/49158) [Bug]: Regression ; v0.24.0 -> v0.25.1 / v0.26.0 breaks MinimaxM2.7 TP2 on NVIDIA GH200NVL2
- [#67575](https://github.com/vllm-project/vllm/issues/67575) [Bug]: flashinfer_cutlass MoE hits cudaErrorIllegalAddress at startup with --data-parallel-size 2 (EP16); fine at dp=1 and fine with moe-backend auto
- [#48466](https://github.com/vllm-project/vllm/issues/48466) [Bug]: deepseek-v4-pro with --max-num-batched-tokens 16384 custom-all-reduce failed
- [#48480](https://github.com/vllm-project/vllm/issues/48480) [RFC]: Make Triton kernel unit tests hardware-agnostic and cover untested kernels
- [#48576](https://github.com/vllm-project/vllm/issues/48576) [Perf][ROCm] Optimize DSA lightning-indexer fp8_mqa_logits scoring kernel on MI300X (gfx942)
- [#48707](https://github.com/vllm-project/vllm/issues/48707) [Bug]: vLLM 0.25.0 crashed
- [#48904](https://github.com/vllm-project/vllm/issues/48904) [Bug]: VLLM_MARLIN_INPUT_DTYPE=int8 silently ignored for auto-round (INC) checkpoints
- [#48919](https://github.com/vllm-project/vllm/issues/48919) [Bug]: CPU offloading fails with block_size=256 + speculative decoding due to eagle group block_size mismatch
- [#49061](https://github.com/vllm-project/vllm/issues/49061) [Bug]: `all_gather_interleave()` in PaddleOCR-VL/Ernie4.5-VL/GLM-4.1V bypasses vLLM's collective API and crashes with "No backend type associated with device type" on out-of-tree platforms
- [#49063](https://github.com/vllm-project/vllm/issues/49063) [Bug] enable_lora on hybrid-MoE model perturbs outputs of requests WITHOUT lora_request (greedy repetition loop) — fused MoE LoRA implementation
- [#49070](https://github.com/vllm-project/vllm/issues/49070) [Bug]: MiniMax-M3 NVFP4 produces garbage output + CUDA illegal memory access on Hopper (sm90) via Marlin FP4-MoE
- [#49147](https://github.com/vllm-project/vllm/issues/49147) [Bug]: Minimax-M3 running crase
- [#49004](https://github.com/vllm-project/vllm/issues/49004) [Bug]: DBRX MoE weight loading crashes with KeyError after FusedMoE/MoERunner inversion refactor (#41184) — dbrx.py missed by follow-up fix #45054
- [#48491](https://github.com/vllm-project/vllm/issues/48491) [Bug]: cuBLAS NVFP4 GEMM silently rejects M < 128, impacts speech model decode
- [#48650](https://github.com/vllm-project/vllm/issues/48650) [Bug]: Runtime-varying tl.constexpr params force Triton kernel recompiles on the serving path (unified attention MAX_MM_RANGES et al.)
- [#48651](https://github.com/vllm-project/vllm/issues/48651) transformers backend: per_token_group_quant_8bit not implemented for Float8_e4m3fn (FP8 MoE models)
- [#48680](https://github.com/vllm-project/vllm/issues/48680) [Bug]: `--enable-sleep-mode` OOMs loading an NVFP4 (modelopt) 30B on 16GB SM120 cards where the identical model loads fine without it — cumem MemPool overhead, not resolved by raising max_split_size_mb
- [#48720](https://github.com/vllm-project/vllm/issues/48720) [RFC] TP-wide step-consensus guard with NCCL RAS integration — field-validated, two live deadlock captures
- [#49005](https://github.com/vllm-project/vllm/issues/49005) [Bug]: Minimax MSA - AttributeError: module 'cutlass.cute.core' has no attribute 'ThrMma'
- [#49079](https://github.com/vllm-project/vllm/issues/49079) [Bug]: --moe-backend flashinfer_b12x roughly doubles peak activation memory vs default, cutting available KV cache ~55%
- [#49182](https://github.com/vllm-project/vllm/issues/49182) [Bug]: vLLM serving Qwen3.6-27B with multimodal inputs causes InternalServerError due to CUDA OOM despite sufficient GPU memory
- [#49215](https://github.com/vllm-project/vllm/issues/49215) [Enhancement]: Expose git commit hash in version metadata for reliable fix-containment checks
- [#50142](https://github.com/vllm-project/vllm/issues/50142) [Bug]: Qwen3-Omni does not propagate effective sampled FPS to audio/video interleaving
- [#52504](https://github.com/vllm-project/vllm/issues/52504) [Bug] Cross-node TP CUDA-graph replay deadlocks with NCCL 2.28.9 (fixed by NCCL 2.30.4) — watchdog "RPC call to sample_tokens timed out"
- [#49584](https://github.com/vllm-project/vllm/issues/49584) [Bug]: vllm0.25版本支持qwen3-vl fp8算子DeepGemmFp8BlockScaledMMKernel 走原始的deepgemm的后端
- [#48194](https://github.com/vllm-project/vllm/issues/48194) [Performance]: Model download at CLI entry: prior art, a first measurement, and a go/no-go protocol
- [#48570](https://github.com/vllm-project/vllm/issues/48570) [Usage]:
- [#48620](https://github.com/vllm-project/vllm/issues/48620) V1 EngineCore: SIGTERM teardown runs two full-heap gen-2 GC passes (~4-7 s) to collect a few hundred objects
- [#48621](https://github.com/vllm-project/vllm/issues/48621) [Bug]: Ministral3 RoPE scaling ignores YaRN mscale and nested Llama 4 fields
- [#48689](https://github.com/vllm-project/vllm/issues/48689) [Bug]: GLM-5.2 nvpf4 quantization not loading with TP
- [#48721](https://github.com/vllm-project/vllm/issues/48721) [Bug]: v0.25.1 int4_per_token_head crashes with SWA models
- [#48819](https://github.com/vllm-project/vllm/issues/48819) [Bug] Optional Transformers model submodules can break vLLM model imports
- [#48823](https://github.com/vllm-project/vllm/issues/48823) [Bug]: Failed to initialize FlashInfer All Reduce workspace: CUDA driver error: invalid device ordinal
- [#48827](https://github.com/vllm-project/vllm/issues/48827) [Bug]: enable_multithread_load silently disables EP weight filtering (local_expert_ids never reaches multi_thread_safetensors_weights_iterator)
- [#48921](https://github.com/vllm-project/vllm/issues/48921) [Feature]: FlashInfer-CUTLASS NVFP4 MoE lacks SWIGLUSTEP activation (blocks Step-3.7-Flash-NVFP4 at TP=8)
- [#49041](https://github.com/vllm-project/vllm/issues/49041) [Bug]: Nemotron model CUDA error: an illegal memory access was encountered
- [#49049](https://github.com/vllm-project/vllm/issues/49049) [Bug] Inkling on sm_121a (GB10): unclamped q-row in rel-bias score-mod gather causes deterministic illegal address (coredump evidence); + aux-stream KV-write race in fused_qkvr_prep
- [#49157](https://github.com/vllm-project/vllm/issues/49157) [Bug]: MiniMax M3 decode index kernel fails when num_idx_heads is not a power of two
- [#49198](https://github.com/vllm-project/vllm/issues/49198) [Feature]: Recency-based progressive mixed-precision KV cache
- [#49271](https://github.com/vllm-project/vllm/issues/49271) [Feature]: Opt-in DeepGEMM BF16 grouped-GEMM MoE backend (unquantized bf16)
- [#49276](https://github.com/vllm-project/vllm/issues/49276) [Bug]: cuMemcpyBatchAsync segfaults or hangs on large/repeated compact scatter submissions
- [#49310](https://github.com/vllm-project/vllm/issues/49310) [Bug]: ExampleHiddenStatesConnector full gather causes long-context OOM
- [#49319](https://github.com/vllm-project/vllm/issues/49319) [Bug]: logprob_token_ids: [] silently bypasses validation and is discarded, on both Chat Completions and Completions
- [#50143](https://github.com/vllm-project/vllm/issues/50143) [Bug/Feature]: w8a8_block_int8_matmul kernel is dormant
- [#50149](https://github.com/vllm-project/vllm/issues/50149) [Feature]: remove vllm user from docker containers
- [#50154](https://github.com/vllm-project/vllm/issues/50154) [Bug]: GLM 5.2; Garbled output with sequence-parallel MoE on small decode batches (TP+EP+DP)
- [#70046](https://github.com/vllm-project/vllm/issues/70046) [RFC]: Zero-VRAM progressive bit-sliced (2+2+4) sparse FP8 MoE backend for FusedMoEExpertsModular
- [#68431](https://github.com/vllm-project/vllm/issues/68431) [Bug]: cudagraph_copy_inputs reuses an incompatible static buffer and crashes phi-2 initialization
- [#42118](https://github.com/vllm-project/vllm/issues/42118) [Bug]: FLASHINFER_CUTLASS_MXFP4_MXFP8 produces wrong output under expert parallelism
- [#67162](https://github.com/vllm-project/vllm/issues/67162) [Bug]: Gemma 4 placeholder count ignores `do_resize=False`
- [#70061](https://github.com/vllm-project/vllm/issues/70061) [Feature]: Opt-in fixed-order LoRA shrink reduction without global batch-invariant mode
- [#69403](https://github.com/vllm-project/vllm/issues/69403) [Bug]: Hy4-flash Engram hashes padded-vocab ids wrongly; microbatching is not rejected
- [#65726](https://github.com/vllm-project/vllm/issues/65726) [Bug]: /v1/completions top_logprobs overwrites the sampled token's entry when candidates decode to the same string (byte fragments -> "")
- [#70066](https://github.com/vllm-project/vllm/issues/70066) [Bug]: Mamba prefix caching can cache a block's state under the wrong position after a preemption
- [#68277](https://github.com/vllm-project/vllm/issues/68277) [Bug]: Kimi close-then-reopen speculative drafts can bypass required JSON masks

### SGLang (`sgl-project/sglang`)

**Stars:** 39,112 · **Open issues:** 7,493 · **Last push:** <1h ago

On November 27, 2026, SGLang did not release any new versions, but several important pull requests were merged, including a refactor of the MiniMax sparse attention mechanism into a dedicated subpackage (#52870) and updates to CI evaluation processes for base accuracy (#53476). Notable fixes included improvements to the diffusion/media module to properly scope temporary inputs (#51949) and adjustments in the operational parameters of the deepseek_v4 module to enhance decoder-tail graph handling (#48850). Additionally, #53309 reported a critical bug concerning TP startup hangs when Pods share `/dev/shm`, which could impact system performance. Overall, it was a productive day focused on refining existing functionality and enhancing system stability.

#### ✅ Merged PRs
- [#52870](https://github.com/sgl-project/sglang/pull/52870) [Refactor] minimax_sparse: Split MiniMax sparse attention into platform/quantization subpackage
- [#53476](https://github.com/sgl-project/sglang/pull/53476) [CI] dsv41: Split base accuracy evaluations into separate shards
- [#51949](https://github.com/sgl-project/sglang/pull/51949) [Fix] diffusion/media: Scope temporary inputs to the request lifetime
- [#53444](https://github.com/sgl-project/sglang/pull/53444) [Doc] cookbook: Add JoyAI-Image-Edit, FireRed-Image-Edit, and Hunyuan3D-2 pages
- [#33111](https://github.com/sgl-project/sglang/pull/33111) [Feat] elastic-ep: Runtime scale-down that retires EP ranks via Mooncake deactivate_ranks
- [#48850](https://github.com/sgl-project/sglang/pull/48850) [Fix] deepseek_v4: Capture decoder-tail graphs at startup, never on a step a DP rank skips
- [#52416](https://github.com/sgl-project/sglang/pull/52416) [Test] [AMD] diffusion: Skip the CUDA-only mapped-weight snapshot residency tests on ROCm
- [#53468](https://github.com/sgl-project/sglang/pull/53468) [Doc] [NPU] docs: update npu supported features
- [#53460](https://github.com/sgl-project/sglang/pull/53460) [CI] [NPU] docker: Bump sgl-kernel NPU tag to 2026.11.0.post16
- [#53412](https://github.com/sgl-project/sglang/pull/53412) [Fix] dsa: Set max_kv_len in the FlashMLA graph test backend after #53314
- [#53307](https://github.com/sgl-project/sglang/pull/53307) [CI] diffusion: Keep the FlashInfer version check on in the BCG Z-Image tests
- [#51780](https://github.com/sgl-project/sglang/pull/51780) [Feat] linker: synchronize cache flushes across pipeline stages
- [#53060](https://github.com/sgl-project/sglang/pull/53060) [Feat] hicache: Add --model, --chat-template-kwargs, and --extra-request-body to bench_multiturn
- [#53465](https://github.com/sgl-project/sglang/pull/53465) [Test] inkling2: Skip the FP32 one-shot all-reduce test below 4 ranks
- [#53451](https://github.com/sgl-project/sglang/pull/53451) [Test] [NPU] deepseek-v4-pro: Reduce the 1P1D 32P W4A8 GPQA prefill memory footprint
- [#39595](https://github.com/sgl-project/sglang/pull/39595) [Feat] [AMD] linear-attn: Add FlyDSL GDN prefill backend
- [#53365](https://github.com/sgl-project/sglang/pull/53365) [Fix] [NPU] disaggregation: switch layer split transfer backend to mooncake
- [#52066](https://github.com/sgl-project/sglang/pull/52066) [Feat] [NPU] kimi-k3.1: Enable prefill context parallelism
- [#53212](https://github.com/sgl-project/sglang/pull/53212) [Fix] kimi_k3: skip SP exit gather when PP>1 last stage has no embeds
- [#50954](https://github.com/sgl-project/sglang/pull/50954) [Perf] mem_cache: Let the per-path Mamba state cap count host copies
- [#53241](https://github.com/sgl-project/sglang/pull/53241) [CI] Diffusion: Guard free GPU memory during Wan request tests
- [#53008](https://github.com/sgl-project/sglang/pull/53008) [CI] [Intel] ci/xpu: Keep PR-controlled code and images out of the XPU release jobs
- [#53348](https://github.com/sgl-project/sglang/pull/53348) [Fix] attention: Size the remaining KV row bounds by the req_to_token row width
- [#52936](https://github.com/sgl-project/sglang/pull/52936) [Perf] [NVIDIA] diffusion/pixelumm: Fuse block-FP8 activation quantization on SM103
- [#51948](https://github.com/sgl-project/sglang/pull/51948) [Test] diffusion: Check that popular Hub LoRAs reach the layers they train
- [#47610](https://github.com/sgl-project/sglang/pull/47610) [Fix] pd: Pair MiniMax sparse state by layer id under PP
- [#40872](https://github.com/sgl-project/sglang/pull/40872) [Fix] [AMD] aiter: Fix NEXTN draft extend crash on the CK kernel
- [#49885](https://github.com/sgl-project/sglang/pull/49885) [Fix] parser: Accept reasoning_content and empty join in response templates
- [#53305](https://github.com/sgl-project/sglang/pull/53305) [Doc] diffusion: Align the add-diffusion-model skill's BCG output check with the performance guide
- [#53429](https://github.com/sgl-project/sglang/pull/53429) [Doc] diffusion: Document offline Wan2.2 speech-to-video generation
- [#43242](https://github.com/sgl-project/sglang/pull/43242) [Fix] diffusion: keep TP/Ulysses head shards on the unsharded torch SDPA kernel
- [#52480](https://github.com/sgl-project/sglang/pull/52480) [Perf] [NVIDIA] diffusion: Read both TP ranks' partial sums in MiniMax-H3's gate kernels
- [#52528](https://github.com/sgl-project/sglang/pull/52528) [Feat] diffusion/lingbot: Add optional prompt rewriting
- [#51786](https://github.com/sgl-project/sglang/pull/51786) [Fix] diffusion/serving: Protect request privacy and scope media jobs to tenants
- [#35014](https://github.com/sgl-project/sglang/pull/35014) [Feat] diffusion/MAGI: Support MAGI-2-preview
- [#52655](https://github.com/sgl-project/sglang/pull/52655) [Perf] diffusion/wan: Load the UMT5 text encoder in BF16 by default

#### 🐛 New Issues
- [#53309](https://github.com/sgl-project/sglang/issues/53309) [Bug] TP startup hangs when same-host Pods share /dev/shm 💬3
- [#53439](https://github.com/sgl-project/sglang/issues/53439) [Bug] inkling2 on SM12x: `route_metadata` asks for more shared memory than a GB10 block has once a step routes more than ~2,750 ids (Inkling-2-Small, 384 experts, EP > 1) 💬2
- [#53471](https://github.com/sgl-project/sglang/issues/53471) [CI] check-changes fails on main: base-c-test-2-gpu-gb300 needs 2 shards but has only 1 test file 💬1
- [#53485](https://github.com/sgl-project/sglang/issues/53485) [CI] test_scheduler_recv_skipper.py fails on main: 'Scheduler' object has no attribute 'server_args'
- [#53413](https://github.com/sgl-project/sglang/issues/53413) [CI] diffusion: fast_hunyuan_video VAE decode ~1.8 s slower at quality="exact" since #50806 (H100 perf flake)
- [#53480](https://github.com/sgl-project/sglang/issues/53480) Optimization
- [#53411](https://github.com/sgl-project/sglang/issues/53411) [CI] test_flashmla_sched_meta.py fails on main: 'DeepseekSparseAttnBackend' object has no attribute 'max_kv_len'
- [#53462](https://github.com/sgl-project/sglang/issues/53462) [CI] test_inkling2_fp32_oneshot_matches_multimem fails on main: one-shot buffer gets no multicast mapping on 4-gpu-b200
- [#53461](https://github.com/sgl-project/sglang/issues/53461) [CI] test_collectives.py::test_inkling2_fp32_oneshot_matches_multimem fails on main: assert None is not None with 2 ranks
- [#53447](https://github.com/sgl-project/sglang/issues/53447) [Bug] openai: a malformed legacy response_format.schema returns HTTP 500 instead of 400
- [#53431](https://github.com/sgl-project/sglang/issues/53431) [Bug][Perf] Decode batches above the largest captured CUDA graph run eagerly and the server stays in a slow state
- [#53426](https://github.com/sgl-project/sglang/issues/53426) [Bug] Rust benchmark sleeps after the final request and inflates duration
- [#53366](https://github.com/sgl-project/sglang/issues/53366) [Bug] Inkling2: a non-FA4 attention backend is accepted, then fails in prefill CUDA-graph capture or a model assert
- [#53352](https://github.com/sgl-project/sglang/issues/53352) [Bug] SIGQUIT handler logs from signal context; `RuntimeError: reentrant call inside <_io.BufferedWriter name='<stderr>'>` hides the child's real error
- [#53343](https://github.com/sgl-project/sglang/issues/53343) [Question] debug_utils/dumper: how to group dumps per step when a draft model has no root forward()
- [#53341](https://github.com/sgl-project/sglang/issues/53341) [CI] Nightly Docker images not published since 2026-11-22: build runners moirai-a10-runner-0 and labubu stopped picking up jobs `ci`
- [#53331](https://github.com/sgl-project/sglang/issues/53331) Reduce temporary memory for mean-pooled embedding requests on CUDA
- [#53329](https://github.com/sgl-project/sglang/issues/53329) [Performance] Raw embedding responses over pickle IPC repeatedly encode the backing batch storage
- [#53327](https://github.com/sgl-project/sglang/issues/53327) [Bug] multimodal: grayscale JPEG decoded by nvJPEG keeps 1 channel and crashes the Gemma 4 scheduler (CMYK keeps 4)
- [#53319](https://github.com/sgl-project/sglang/issues/53319) [Bug] Qwen3 embedding pooling indexes global token positions in a sequence-parallel shard
- [#53277](https://github.com/sgl-project/sglang/issues/53277) [CI] test_inkling2.py fails on main: 4-gpu-gb300 runner g++ rejects -march=armv9-a
- [#53274](https://github.com/sgl-project/sglang/issues/53274) [Perf] Kimi K3: default startup warmup leaves the large-grid KDA prefill kernel to compile on the first long request
- [#53271](https://github.com/sgl-project/sglang/issues/53271) [Bug] Adaptive speculative decoding crashes at steps=0 when the overlap scheduler is off

#### 🔒 Closed Issues
- [#21891](https://github.com/sgl-project/sglang/issues/21891) [Roadmap] — SGLang Simulator
- [#41236](https://github.com/sgl-project/sglang/issues/41236) [Bug] streaming silently loses up to 5 tokens of text when detokenizer state is evicted mid-request
- [#40441](https://github.com/sgl-project/sglang/issues/40441) [Feature][DeepSeek-V4.1] Decode graph width is pinned to --context-length; add a decode-phase max_seq_len
- [#41471](https://github.com/sgl-project/sglang/issues/41471) [Bug] Two concurrent requests using DisallowedTokensLogitsProcessor with different token_ids crash the server
- [#36429](https://github.com/sgl-project/sglang/issues/36429) [Bug] #35061 rejects multi-node custom all-reduce v2 without expandable segments, causing ~19% Llama-4 TP8 regression on GB300
- [#41465](https://github.com/sgl-project/sglang/issues/41465) [Bug] Aborting a constrained request while its grammar compiles returns HTTP 400 `BadRequestError`
- [#41474](https://github.com/sgl-project/sglang/issues/41474) [Bug] `/abort_request` with a rid also aborts every request whose rid starts with it
- [#33852](https://github.com/sgl-project/sglang/issues/33852) [RFC] Allow prefill CUDA graph bs below chunked_prefill_size under post-capture KV sizing
- [#41470](https://github.com/sgl-project/sglang/issues/41470) [Bug] A session turn with replace: true and no rid crashes the server ("dictionary changed size during iteration")
- [#41385](https://github.com/sgl-project/sglang/issues/41385) EvalPort: portable interchange for BenchmarkResult
- [#51104](https://github.com/sgl-project/sglang/issues/51104) [Bug] `per_token_quant_int8`: row offset wraps for inputs with >= 2^31 elements
- [#53480](https://github.com/sgl-project/sglang/issues/53480) Optimization
- [#45569](https://github.com/sgl-project/sglang/issues/45569) [Feature] Support symmetric static compressed-tensors W8A8 on Ascend
- [#44025](https://github.com/sgl-project/sglang/issues/44025) [Bug][NPU] GPT-OSS FIA sink attention uses incompatible prefill and eager decode paths
- [#43540](https://github.com/sgl-project/sglang/issues/43540) [Bug] OTEL to Perfetto converter rejects whitespace-prefixed arrays and SMG spans
- [#53411](https://github.com/sgl-project/sglang/issues/53411) [CI] test_flashmla_sched_meta.py fails on main: 'DeepseekSparseAttnBackend' object has no attribute 'max_kv_len'
- [#53462](https://github.com/sgl-project/sglang/issues/53462) [CI] test_inkling2_fp32_oneshot_matches_multimem fails on main: one-shot buffer gets no multicast mapping on 4-gpu-b200
- [#53461](https://github.com/sgl-project/sglang/issues/53461) [CI] test_collectives.py::test_inkling2_fp32_oneshot_matches_multimem fails on main: assert None is not None with 2 ranks
- [#49874](https://github.com/sgl-project/sglang/issues/49874) [Feature] Accept `reasoning_content` and `join` in response templates

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 136,430 · **Open issues:** 2,651 · **Last push:** <1h ago

On November 27, 2026, llama.cpp released version 1.1.0, which introduces support for the Inkling 2 family of models (base, Mini, and DSpark), along with several new models including Domyn Edge 4B and RAON-1-mini. The update also enhances TTS and audio models, separates DFlash speculative decoding, and deprecates the `llama_batch` API in favor of `llama_batch_ext`. Notable merged features include improvements to the Flash Attention mechanism with indexed bias and a fix for the bf16 MFMA operand vector type for CDNA. However, the day was marred by several significant bugs reported, including an issue with the Inkling 2 Mini crashing when using the `--moe-cache-mib` option and a problem with Vulkan flash attention output on older AMD Radeon GPUs.

#### 🚀 New Releases
- [v1.1.0](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0) v1.1.0
- [b12804](https://github.com/ggml-org/llama.cpp/releases/tag/b12804) b12804
- [b12803](https://github.com/ggml-org/llama.cpp/releases/tag/b12803) b12803
- [b12801](https://github.com/ggml-org/llama.cpp/releases/tag/b12801) b12801
- [b12800](https://github.com/ggml-org/llama.cpp/releases/tag/b12800) b12800
- [b12798](https://github.com/ggml-org/llama.cpp/releases/tag/b12798) b12798
- [b12793](https://github.com/ggml-org/llama.cpp/releases/tag/b12793) b12793
- [b12791](https://github.com/ggml-org/llama.cpp/releases/tag/b12791) b12791
- [b12785](https://github.com/ggml-org/llama.cpp/releases/tag/b12785) b12785
- [b12784](https://github.com/ggml-org/llama.cpp/releases/tag/b12784) b12784

#### ✅ Merged PRs
- [#32726](https://github.com/ggml-org/llama.cpp/pull/32726) [sycl] XMX enablement 0/4 - Fix Q6_K precision
- [#33088](https://github.com/ggml-org/llama.cpp/pull/33088) ggml-openvino: CI op-test fixes and NPU improvements
- [#30606](https://github.com/ggml-org/llama.cpp/pull/30606) sycl: route BMG D=256 single-query decode to the FA vector kernel
- [#33098](https://github.com/ggml-org/llama.cpp/pull/33098) opencl: add multi token f32 GEMV for spec verify
- [#33070](https://github.com/ggml-org/llama.cpp/pull/33070) ui: type /cwd and other slash commands anywhere in the chat input
- [#33086](https://github.com/ggml-org/llama.cpp/pull/33086) hip : fix bf16 MFMA operand vector type for CDNA
- [#33081](https://github.com/ggml-org/llama.cpp/pull/33081) bailingmoe3 : fuse ssm_conv + silu and remove redundant copies
- [#33105](https://github.com/ggml-org/llama.cpp/pull/33105) quantize : include clocale for std::setlocale
- [#33063](https://github.com/ggml-org/llama.cpp/pull/33063) ggml/CUDA+HIP: Flash Attention with indexed bias
- [#33127](https://github.com/ggml-org/llama.cpp/pull/33127) ci: relax spec dec acceptance length floor
- [#33069](https://github.com/ggml-org/llama.cpp/pull/33069) opencl: add MoE int8 coopmat bin kernel host side changes for Adreno A850
- [#33060](https://github.com/ggml-org/llama.cpp/pull/33060) CUDA: fuse the Inkling 2 short conv, depth mix, loop controller, L2 clip and situ chains
- [#33141](https://github.com/ggml-org/llama.cpp/pull/33141) tests : relax the DEPTH_MIX tolerance to the mul_mat one (Fix CI)
- [#33145](https://github.com/ggml-org/llama.cpp/pull/33145) ui: install the demo harness before the app's type check in CI
- [#33144](https://github.com/ggml-org/llama.cpp/pull/33144) ui: fix the phone model sheet's search field and reasoning row
- [#33120](https://github.com/ggml-org/llama.cpp/pull/33120) ui: NVFP4 as 4-bit in Discover, model details inside Search
- [#33125](https://github.com/ggml-org/llama.cpp/pull/33125) ui: move the demo harness to ui/lib/demo and render videos on the Llama brand
- [#33114](https://github.com/ggml-org/llama.cpp/pull/33114) nix: remove x86_64-darwin support
- [#33123](https://github.com/ggml-org/llama.cpp/pull/33123) vulkan: fix Windows driver RDNA1 architecture misclassification
- [#33061](https://github.com/ggml-org/llama.cpp/pull/33061) DPI setting for PDF as Images
- [#33082](https://github.com/ggml-org/llama.cpp/pull/33082) ui: pass theme to toasts
- [#33112](https://github.com/ggml-org/llama.cpp/pull/33112) tests : add RPC support to test-llama-archs
- [#33073](https://github.com/ggml-org/llama.cpp/pull/33073) DFlash2: support Inkling-2-Mini DFlash2
- [#33087](https://github.com/ggml-org/llama.cpp/pull/33087) CUDA: move the fusion code out of ggml-cuda.cu
- [#32365](https://github.com/ggml-org/llama.cpp/pull/32365) CI: Hip quality review easy: add Hip occupancy check and small static analysis report
- [#33104](https://github.com/ggml-org/llama.cpp/pull/33104) tests : take the test-fusion moe flag from the fixture name
- [#33113](https://github.com/ggml-org/llama.cpp/pull/33113) ci : move vulkan-nvidia runners to dgx spark
- [#33067](https://github.com/ggml-org/llama.cpp/pull/33067) ui: read the Enable MCP setting through one getter
- [#32533](https://github.com/ggml-org/llama.cpp/pull/32533) ggml : support a BF16 src1 in MUL_MAT and MUL_MAT_ID (CPU, CUDA)
- [#33080](https://github.com/ggml-org/llama.cpp/pull/33080) llama : refuse SPLIT_MODE_TENSOR for Hadamard-folded models
- [#32943](https://github.com/ggml-org/llama.cpp/pull/32943) CUDA: fuse the top-k MoE weight norm with an additive sum bias
- [#33006](https://github.com/ggml-org/llama.cpp/pull/33006) CUDA: loop over ne2/ne3 in non-contiguous concat
- [#33045](https://github.com/ggml-org/llama.cpp/pull/33045) CUDA: fix ROCm CI, do not pick the tile FA kernel for DKQ 576 with a GQA ratio not divisible by 4
- [#33095](https://github.com/ggml-org/llama.cpp/pull/33095) ui: npx llama-chat talks to llama-server on :9931 by default
- [#33096](https://github.com/ggml-org/llama.cpp/pull/33096) sync : ggml
- [#32583](https://github.com/ggml-org/llama.cpp/pull/32583) [SYCL] update linux refer doc
- [#31208](https://github.com/ggml-org/llama.cpp/pull/31208) Remove check for host waits in fattn-mkl from graph checks
- [#32582](https://github.com/ggml-org/llama.cpp/pull/32582) ggml-hexagon 2.0 : support for int-hmx, automatic f32 -> f16 lowering, and generic dma pipelines

#### 🐛 New Issues
- [#33099](https://github.com/ggml-org/llama.cpp/issues/33099) Eval bug: raon-1-mini - wrong number of tensors; expected 736, got 731 `bug-unconfirmed` 💬4
- [#33083](https://github.com/ggml-org/llama.cpp/issues/33083) Misc. bug: `--bash-completion` is wrong for unified binary `bug-unconfirmed` 💬4
- [#33101](https://github.com/ggml-org/llama.cpp/issues/33101) Eval bug: Inkling 2 Mini crashes when using `--moe-cache-mib` `bug-unconfirmed` 💬2
- [#33132](https://github.com/ggml-org/llama.cpp/issues/33132) Multi-GPU: `cudaGetDeviceProperties` called on every cross-device input copy when tensor overrides are used (up to ~8x slowdown) `bug-unconfirmed` 💬2
- [#33134](https://github.com/ggml-org/llama.cpp/issues/33134) Eval bug: named tool_choice is not enforced for peg-native chat format (Qwen3.5 / 3.6 XML tool calls) 💬1
- [#33118](https://github.com/ggml-org/llama.cpp/issues/33118) Vulkan flash attention produces wrong output on older AMD Radeon GPUs 💬1
- [#33084](https://github.com/ggml-org/llama.cpp/issues/33084) SYCL: full-intel with mtp got 2x slower after/around 1.0.0-dev on Linux x86_64 `bug-unconfirmed` 💬1
- [#33092](https://github.com/ggml-org/llama.cpp/issues/33092) Feature Request: support ERNIE-5.5-Flash-Preview - 166 GB model with DeepSWE score 71 `enhancement`
- [#33158](https://github.com/ggml-org/llama.cpp/issues/33158) Feature Request: Support SupraLabs Models `enhancement`
- [#33153](https://github.com/ggml-org/llama.cpp/issues/33153) Misc. bug: WebUI Markdown renderer cannot render `\|` in a table cell `bug-unconfirmed`
- [#33151](https://github.com/ggml-org/llama.cpp/issues/33151) Misc. bug: Wrong help text for -hf `bug-unconfirmed`
- [#33150](https://github.com/ggml-org/llama.cpp/issues/33150) Eval bug: Inkling 2 Mini degenerates into repeated tokens with -np 2 on HIP (#33063 branch)
- [#33085](https://github.com/ggml-org/llama.cpp/issues/33085) Compile bug: CDNA (gfx908/gfx90a/gfx942/gfx950) fails to build with LLVM 23 in mma.cuh
- [#33143](https://github.com/ggml-org/llama.cpp/issues/33143) Research: 能不能添加中文 `research 🔬`
- [#33128](https://github.com/ggml-org/llama.cpp/issues/33128) webui: silent 500 error on Safari when sidebar state is restored from older build
- [#33126](https://github.com/ggml-org/llama.cpp/issues/33126) server: draft-mtp acceptance halved on v1.1.0 (Gemma-4 26B-A4B + MTP head, CUDA) — target output byte-identical, draft proposals diverge
- [#33121](https://github.com/ggml-org/llama.cpp/issues/33121) SYCL: prompt processing about 3x slower with draft-mtp on qwen35 since d35dc4d9e (#31669, GDN replay is not implemented in SYCL) `bug-unconfirmed`
- [#33109](https://github.com/ggml-org/llama.cpp/issues/33109) BERT conversion silently drops the pooler, so a `BertForSequenceClassification`'s logits are not reproduced and its ranking changes
- [#33091](https://github.com/ggml-org/llama.cpp/issues/33091) bug: Inkling-2-Mini DFlash/DSpark drafter cannot load — draft tensor padded to vocab_size (201024) vs loader check on vocab_size_unpadded (200058)
- [#33089](https://github.com/ggml-org/llama.cpp/issues/33089) Quick question about fail-fast in your CI matrix

#### 🔒 Closed Issues
- [#25593](https://github.com/ggml-org/llama.cpp/issues/25593) Eval bug: SM_60 Quality Loss, FP32 math silently done in FP16, fix merged in two forks.
- [#24440](https://github.com/ggml-org/llama.cpp/issues/24440) Eval bug: llama server crashes(fattn.cu:579: fatal error) after editing system message when using Gemma 4 31B with MTP and -sm tensor
- [#32780](https://github.com/ggml-org/llama.cpp/issues/32780) Compile bug: UI asset validation fails during build (v1.0.0 and v0.7.0)
- [#30768](https://github.com/ggml-org/llama.cpp/issues/30768) Eval bug: slash (/) spam on IQ4_XS qwen4exp on Vulkan RADV with transfer queues
- [#29324](https://github.com/ggml-org/llama.cpp/issues/29324) Misc. bug: Misc. bug: --cache-ram -1 is not "no limit": the token cap stays at n_ctx, and with hybrid models RAM grows ~640 MiB per short prompt
- [#30175](https://github.com/ggml-org/llama.cpp/issues/30175) Eval bug: Nondeterministic FA prefill with Qwen 3.5 9B on RDNA3 (ROCm/HIP) on multimodal requests since b10905
- [#30321](https://github.com/ggml-org/llama.cpp/issues/30321) json-schema-to-grammar: optional field listed before a required one gets dropped
- [#28153](https://github.com/ggml-org/llama.cpp/issues/28153) Feature Request: Add support for Xing4.0-29B-A4B
- [#30303](https://github.com/ggml-org/llama.cpp/issues/30303) Misc. bug: sycl backend does not play nice along other backends in same build
- [#30391](https://github.com/ggml-org/llama.cpp/issues/30391) Misc. bug: flash_attn.comp cols_per_thread is 0 on Adreno A750
- [#30419](https://github.com/ggml-org/llama.cpp/issues/30419) Grammar stack dies on `? (30)` with a json_schema response_format under --spec-type draft-mtp, no tools involved
- [#30424](https://github.com/ggml-org/llama.cpp/issues/30424) Misc. bug: `llama-fit-params` does not accept --spec-type, -md, -ngld arguments
- [#30460](https://github.com/ggml-org/llama.cpp/issues/30460) [RFC] GGML_TYPE_BF16X: fixed-rate near-lossless bfloat16 recompression (11.5 bpw)
- [#30465](https://github.com/ggml-org/llama.cpp/issues/30465) Feature Request: Model manager offline icons
- [#33118](https://github.com/ggml-org/llama.cpp/issues/33118) Vulkan flash attention produces wrong output on older AMD Radeon GPUs
- [#33085](https://github.com/ggml-org/llama.cpp/issues/33085) Compile bug: CDNA (gfx908/gfx90a/gfx942/gfx950) fails to build with LLVM 23 in mma.cuh
- [#33008](https://github.com/ggml-org/llama.cpp/issues/33008) Eval bug: Ternary-Bonsai-2.5-27B -sm tensor failed
- [#32956](https://github.com/ggml-org/llama.cpp/issues/32956) CUDA/HIP: non-contiguous CONCAT fails with "invalid configuration argument" when ne[2] > 65535

### Ollama (`ollama/ollama`)

**Stars:** 188,264 · **Open issues:** 4,786 · **Last push:** 9h ago

On November 27, 2026, Ollama released version v0.40.19, which includes enhancements such as faster short histories and improved draft proposals via inkling2, as well as compacted Engram history buffers through mlxrunner. A notable merged pull request involved bumping the llama-server, which may impact overall performance. Among the new issues, #19923 raised concerns about updating local setups, while #19934 highlighted a critical bug where errors in llama-server during processing led to misleading HTTP responses, indicating a need for immediate attention. Other standout issues included problems with hardware initialization on dual-GPU hosts and a script failure on non-GPU Linux machines.

#### 🚀 New Releases
- [v0.40.19-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.19-rc0) v0.40.19

#### ✅ Merged PRs
- [#19917](https://github.com/ollama/ollama/pull/19917) bump llama-server

#### 🐛 New Issues
- [#19923](https://github.com/ollama/ollama/issues/19923) Did you and;/or DO. YOU GUYS have the ability to run updates on my local sestup `bug` 💬2
- [#19934](https://github.com/ollama/ollama/issues/19934) Mid-stream llama-server errors are dropped in Completion(), so a decode failure (e.g. Metal OOM) returns HTTP 200 with a zero-value body on every endpoint 💬1
- [#19921](https://github.com/ollama/ollama/issues/19921) CUDA_VISIBLE_DEVICES set on dual-GPU host (RTX 4090 + RTX 5090): 5090 is discovered, then filtered as "didn't fully initialize" -> CPU-only inference (0.40.18) `bug` 💬1
- [#19927](https://github.com/ollama/ollama/issues/19927) DGX Spark: upgrading Ollama 0.34.4 → 0.40.18 makes multiple models unstable and eventually freezes the entire system `bug` 💬1
- [#19935](https://github.com/ollama/ollama/issues/19935) [Bug]: FunctionGemma parser splits at `<end_function_call>` inside an `<escape>`-quoted string, returning a nameless tool call
- [#19933](https://github.com/ollama/ollama/issues/19933) Ollama install script breaks any linux who's PC doesnt have GPU that supports latest driver `bug` `install`
- [#19931](https://github.com/ollama/ollama/issues/19931) How does Ollama calculate its public model pull/download counts? `question` `ollama.com`
- [#19930](https://github.com/ollama/ollama/issues/19930) Download arrow in model picker does not start download `bug`
- [#19925](https://github.com/ollama/ollama/issues/19925) `/v1/messages` silently drops a valid text/plain `document` block and returns HTTP 200
- [#19920](https://github.com/ollama/ollama/issues/19920) Add support for Tencent WePocketModel (WePM) `model`

#### 🔒 Closed Issues
- [#5972](https://github.com/ollama/ollama/issues/5972) Intergration With Gnome (add on idea)
- [#19915](https://github.com/ollama/ollama/issues/19915) Error: CUDA: GGML_ASSERT(s2 <= uint32_t::max()) While running Inkling-2-mini on DGX Spark
- [#19735](https://github.com/ollama/ollama/issues/19735) Proposal: CANN build and device discovery for Ascend NPUs

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,979 · **Open issues:** 5,569 · **Last push:** <1h ago

On November 27, 2026, LiteLLM released version v1.113.0-dev.1, which includes a new feature that forwards agent spans to Lens and records gateway calls in the agent's trace, as implemented by @ker. Additionally, the long-term support versions v1.108.19 and v1.108.18 were also available, with users encouraged to pull the latest LTS releases. Significant merged pull requests include improvements in response handling, ensuring that client-cancelled streams are billed accurately, as well as enhancements to type definition consistency throughout the codebase. Notably, issue #54707 highlights a critical bug where the Swagger documentation page causes browser freezes, drawing attention to user experience challenges.

#### 🚀 New Releases
- [v1.113.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.113.0-dev.1) v1.113.0-dev.1
- [v1.108.19](https://github.com/BerriAI/litellm/releases/tag/v1.108.19) 1.108.19 (LTS)
- [v1.108.18](https://github.com/BerriAI/litellm/releases/tag/v1.108.18) 1.108.18 (LTS)

#### ✅ Merged PRs
- [#54785](https://github.com/BerriAI/litellm/pull/54785) test(unit): make 21 flaky unit tests deterministic
- [#54790](https://github.com/BerriAI/litellm/pull/54790) fix(responses): free a read-on stream without a cycle collection (lts/1.108.x)
- [#54789](https://github.com/BerriAI/litellm/pull/54789) fix(responses): stop a cancelled background response and free a read-on stream without a cycle collection
- [#54775](https://github.com/BerriAI/litellm/pull/54775) refactor(types): type the return of decode and 15 guardrail get_config_model overrides
- [#53254](https://github.com/BerriAI/litellm/pull/53254) fix(ui): keep fixed labels in English and fill Chinese locale gaps
- [#54757](https://github.com/BerriAI/litellm/pull/54757) ci: start fewer jobs per pull request
- [#54755](https://github.com/BerriAI/litellm/pull/54755) fix(responses): bill a client-cancelled native Responses stream with the usage the provider reports (lts/1.108.x)
- [#54772](https://github.com/BerriAI/litellm/pull/54772) fix(responses): bill a client-cancelled native Responses stream with the usage the provider reports (lts/1.108.x)
- [#54752](https://github.com/BerriAI/litellm/pull/54752) fix(responses): bill a client-cancelled native Responses stream with the usage the provider reports
- [#54566](https://github.com/BerriAI/litellm/pull/54566) refactor(ui): move customer hierarchy forms onto the form kit
- [#54571](https://github.com/BerriAI/litellm/pull/54571) refactor(ui): move router settings forms onto the form kit
- [#54577](https://github.com/BerriAI/litellm/pull/54577) refactor(ui): move skill and prompt editor forms onto the form kit
- [#54765](https://github.com/BerriAI/litellm/pull/54765) refactor(types): type the return of get_secret
- [#54621](https://github.com/BerriAI/litellm/pull/54621) refactor(ui): migrate guardrail and policy forms onto form kit
- [#53275](https://github.com/BerriAI/litellm/pull/53275) fix(pass-through): add preserve_trace_context to forward caller trace headers unchanged
- [#54607](https://github.com/BerriAI/litellm/pull/54607) refactor(ui): inline Tailwind styles in the log detail viewer
- [#54750](https://github.com/BerriAI/litellm/pull/54750) ci(unit): run the full unit and smoke matrix on every PR on standard runners
- [#54749](https://github.com/BerriAI/litellm/pull/54749) ci(integration): run integration and MCP dependency resolution three times a day
- [#54753](https://github.com/BerriAI/litellm/pull/54753) refactor(types): type the proxy CLI override globals and the Gemini agents endpoints' proxy imports
- [#54748](https://github.com/BerriAI/litellm/pull/54748) test(database): make the performance alert sweep due before each pass the test runs
- [#54733](https://github.com/BerriAI/litellm/pull/54733) test: backport #52128 reset budget roundoff test fix to lts/1.108.x
- [#54739](https://github.com/BerriAI/litellm/pull/54739) test: align auth 401 param expectations with lts/1.108.x behavior
- [#54747](https://github.com/BerriAI/litellm/pull/54747) refactor(types): type the headers of the shared Azure, Tencent and Vertex header helpers and the vector store and image edit validate_environment methods
- [#54746](https://github.com/BerriAI/litellm/pull/54746) test(spend): expect the Flex image output rate for Vertex Flex spend
- [#54344](https://github.com/BerriAI/litellm/pull/54344) perf(import): load realtime and provider cost modules on first use
- [#54539](https://github.com/BerriAI/litellm/pull/54539) refactor(import): key the lazy registry by host, load all of it under LITELLM_DISABLE_LAZY_LOADING
- [#54743](https://github.com/BerriAI/litellm/pull/54743) refactor(types): type the json, headers and params of the shared HTTP client's request methods and their callers
- [#54741](https://github.com/BerriAI/litellm/pull/54741) test(mcp): run the outer deadline termination test on a controlled clock
- [#54736](https://github.com/BerriAI/litellm/pull/54736) fix(anthropic): refuse a tool message whose tool_call_id is not a string when caller ids are kept
- [#54732](https://github.com/BerriAI/litellm/pull/54732) test: drop main-only Bedrock guardrail assertions on lts/1.108.x
- [#54735](https://github.com/BerriAI/litellm/pull/54735) fix(anthropic): refuse a tool message whose tool_call_id is not a string when caller ids are kept
- [#54728](https://github.com/BerriAI/litellm/pull/54728) test(router): read minute-bucket usage across a minute rollover in three router core tests
- [#54727](https://github.com/BerriAI/litellm/pull/54727) refactor(types): type the headers of the search and rerank validate_environment base methods and their provider overrides
- [#54723](https://github.com/BerriAI/litellm/pull/54723) chore: bump litellm to 1.108.19 on lts/1.108.x
- [#54720](https://github.com/BerriAI/litellm/pull/54720) refactor(types): type the headers and bodies of the Responses, Skills and Files paths in the shared HTTP handler
- [#54718](https://github.com/BerriAI/litellm/pull/54718) fix(cost-map): add Flex image output token prices to four Vertex Gemini image models
- [#54716](https://github.com/BerriAI/litellm/pull/54716) refactor(types): type the completion dispatch context's optional_params for the providers that read no credentials from it
- [#54711](https://github.com/BerriAI/litellm/pull/54711) refactor(types): type the kwargs reads on the Prometheus logger's success, failure and per-key rate limit paths
- [#54573](https://github.com/BerriAI/litellm/pull/54573) fix(cost-map): give the lowercase together_ai Inkling row the same 2026-12-09 removal date as the canonical row
- [#54705](https://github.com/BerriAI/litellm/pull/54705) test(logging): read only the test's own call in the SDK logged key identity test
- [#54392](https://github.com/BerriAI/litellm/pull/54392) refactor(gateway-auth-core): move the key model access check into authz/models
- [#54703](https://github.com/BerriAI/litellm/pull/54703) refactor(types): type the kwargs views of embedding, transcription and speech and the completion dispatch context's containers
- [#54642](https://github.com/BerriAI/litellm/pull/54642) feat(auth-store): read a user in the shape the auth cache holds it
- [#54641](https://github.com/BerriAI/litellm/pull/54641) feat(auth-store): read an organization in the shape the auth cache holds it
- [#54697](https://github.com/BerriAI/litellm/pull/54697) fix(auth-cache): take only the key roles and regions UserAPIKeyAuth takes
- [#54639](https://github.com/BerriAI/litellm/pull/54639) feat(auth-store): read an end user in the shape the auth cache holds it
- [#54696](https://github.com/BerriAI/litellm/pull/54696) refactor(repositories): read an object permission row as one type
- [#54638](https://github.com/BerriAI/litellm/pull/54638) feat(auth-store): read a team membership in the shape the auth cache holds it
- [#54635](https://github.com/BerriAI/litellm/pull/54635) feat(auth-store): read a project in the shape the auth cache holds it
- [#54675](https://github.com/BerriAI/litellm/pull/54675) feat(auth-store): read a team by its alias
- [#54651](https://github.com/BerriAI/litellm/pull/54651) refactor(auth-store): name the field a refused nested row sits under
- [#54616](https://github.com/BerriAI/litellm/pull/54616) feat(auth-store): read a team in the shape the auth cache holds it
- [#54649](https://github.com/BerriAI/litellm/pull/54649) refactor(auth-cache): name the auth cache's records entry instead of cached
- [#54695](https://github.com/BerriAI/litellm/pull/54695) feat(python-compat): keep a datetime's offset the way Python does
- [#54632](https://github.com/BerriAI/litellm/pull/54632) refactor(auth-store): give the column helpers a module and each cached record a file
- [#54693](https://github.com/BerriAI/litellm/pull/54693) refactor(types): type the parameters of Logging.update_from_kwargs and the Logfire logger's kwargs
- [#54669](https://github.com/BerriAI/litellm/pull/54669) fix(cost-map): mark baseten DeepSeek-V4.1-Flash-Fast as not supporting response schema
- [#54687](https://github.com/BerriAI/litellm/pull/54687) refactor(types): type the kwargs of the assistants list, create and delete entrypoints
- [#54686](https://github.com/BerriAI/litellm/pull/54686) refactor(types): type the kwargs reads in the Braintrust, Datadog, Langsmith, Literal AI and generic API loggers
- [#54653](https://github.com/BerriAI/litellm/pull/54653) refactor(types): type the kwargs reads in the responses, images, realtime, files, rerank, batches and fine-tuning entrypoints
- [#54623](https://github.com/BerriAI/litellm/pull/54623) fix(proxy): send finish_reason null on every in-progress streamed chat chunk on lts/1.108.x
- [#53876](https://github.com/BerriAI/litellm/pull/53876) fix(proxy): send finish_reason null on every in-progress streamed chat chunk
- [#54679](https://github.com/BerriAI/litellm/pull/54679) refactor(types): type the kwargs reads in the usage-based router strategies, rag, batch completion and the completion bridges
- [#54673](https://github.com/BerriAI/litellm/pull/54673) ci(osv): drop withdrawn picomatch GHSA-fc5q-39xc-vjpf ignore
- [#54662](https://github.com/BerriAI/litellm/pull/54662) chore(techdebt): remove fresh suppressions and dynamic getattr added on 2026-11-25
- [#51098](https://github.com/BerriAI/litellm/pull/51098) fix(passthrough): find a new Azure AI Search index in the DB on a registry miss
- [#54626](https://github.com/BerriAI/litellm/pull/54626) docs(github): move Caveats out of Details to right below the handwritten description in the PR template
- [#54469](https://github.com/BerriAI/litellm/pull/54469) fix(proxy): keep a request's slot, TPM and budget holds while it runs MCP tools
- [#54507](https://github.com/BerriAI/litellm/pull/54507) feat(volcengine): add Ark Seedream image generation, editing, and pricing (lts/1.108.x)
- [#54215](https://github.com/BerriAI/litellm/pull/54215) fix(ocr): report an unreachable document URL as a 400, not a provider 500
- [#54076](https://github.com/BerriAI/litellm/pull/54076) feat(volcengine): add Ark Seedream image generation, editing, and pricing
- [#54648](https://github.com/BerriAI/litellm/pull/54648) refactor(gateway-auth-core): replace CachedTeam with a generic Refreshed carrier
- [#54565](https://github.com/BerriAI/litellm/pull/54565) fix(openai_like): end an async stream cleanly when the connection drops after the finish
- [#54445](https://github.com/BerriAI/litellm/pull/54445) fix(anthropic): keep tool_use ids for non-Anthropic backends on /v1/messages for lts/1.108.x
- [#54468](https://github.com/BerriAI/litellm/pull/54468) fix(anthropic): keep caller tool_use ids unless the upstream rejects them
- [#54466](https://github.com/BerriAI/litellm/pull/54466) fix(streaming): surface upstream abort on OpenAI, azure_ai, databricks, Vertex Model Garden and text completion streams on lts/1.108.x
- [#54584](https://github.com/BerriAI/litellm/pull/54584) fix(a2a): bill chat route agent calls at the agent's own price (lts/1.108.x)
- [#51808](https://github.com/BerriAI/litellm/pull/51808) fix(a2a): bill chat route agent calls at the agent's own price

#### 🐛 New Issues
- [#54763](https://github.com/BerriAI/litellm/issues/54763) [Bug]: validate_environment and supports_response_schema start the OAuth device login for chatgpt/ and github_copilot/ models `llm translation` 💬3
- [#54777](https://github.com/BerriAI/litellm/issues/54777) [Feature]: Bulk key creation for team members, with key delivery by email `enhancement`
- [#54776](https://github.com/BerriAI/litellm/issues/54776) [Feature]: Multi-select bulk actions on a team's keys table (UI) `enhancement`
- [#54774](https://github.com/BerriAI/litellm/issues/54774) [Feature]: Bulk add members on the team page (UI) `enhancement`
- [#54707](https://github.com/BerriAI/litellm/issues/54707) [Bug]: Swagger docs page freezes the browser on load and on every operation expand 💬2
- [#54715](https://github.com/BerriAI/litellm/issues/54715) [Bug]: v1.111.0 /mcp/proxy search_tools returns 504 during cold embedding-cache build due to hardcoded 30s gateway deadline `llm translation` 💬1
- [#54683](https://github.com/BerriAI/litellm/issues/54683) [Bug]: Proxy-only errors (401/429) log "default-message-value" and drop caller input for /v1/decisions, /v1/systemone, and /v1/responses 💬1
- [#54682](https://github.com/BerriAI/litellm/issues/54682) [Bug]: LATENCY_BUCKETS gap between 0.1s and 0.5s inflates histogram_quantile P95 up to ~4x (false-positive overhead alerts) 💬1
- [#54793](https://github.com/BerriAI/litellm/issues/54793) [Bug]: Managed GET /v1/batches lists passthrough-managed batches (list_user_batches filters only file_purpose and owner) `llm translation`
- [#54786](https://github.com/BerriAI/litellm/issues/54786) [Feature]: Configuration Setting to Disable Credential Tagging `enhancement`
- [#54769](https://github.com/BerriAI/litellm/issues/54769) [Feature]: one cmd inner opencode to install skills for opencode. `enhancement` `claude code`
- [#54730](https://github.com/BerriAI/litellm/issues/54730) [Bug]: Badge text disappears when a dropdown menu item is hovered or focused `llm translation`
- [#54699](https://github.com/BerriAI/litellm/issues/54699) [Feature]: Support OpenRouter Batch API in proxy /v1/batches `llm translation`
- [#54680](https://github.com/BerriAI/litellm/issues/54680) [Feature]: Support native MCP Tool Search in the Responses API `enhancement`
- [#54647](https://github.com/BerriAI/litellm/issues/54647) [Bug]: /a2a/{agent_id} task methods (tasks/cancel, tasks/get, …) fail with "has no URL configured" for Bedrock AgentCore agents `bug` `llm translation`

#### 🔒 Closed Issues
- [#32214](https://github.com/BerriAI/litellm/issues/32214) [Bug]: sanitize_tool_use_ids_in_anthropic_messages breaks multi-turn tool-use on vLLM/Kimi K2.7 pass-through (v1.91.0 regression)
- [#29998](https://github.com/BerriAI/litellm/issues/29998) [Feature]: Preserve Anthropic cache_creation TTL breakdown in Chat Completions usage
- [#37222](https://github.com/BerriAI/litellm/issues/37222) [Bug]: OAuth2 client_credentials MCP servers never receive client_id/client_secret at runtime — token endpoint always rejects with 400
- [#37469](https://github.com/BerriAI/litellm/issues/37469) [Bug]: `cache_control_injection_points` incorrectly invokes Dotprompt prompt management and requires `prompt_id`
- [#37849](https://github.com/BerriAI/litellm/issues/37849) [Bug]: Gemini thought signature is embedded in the tool call id, so any client that normalizes ids breaks the next turn
- [#38494](https://github.com/BerriAI/litellm/issues/38494) [Bug]: increment_deployment_cooled_down raises Incorrect label count with custom_prometheus_metadata_labels
- [#54409](https://github.com/BerriAI/litellm/issues/54409) [Bug]: GitHub Copilot Responses-only models fail on /v1/chat/completions bridge when using GitHub App credential with uploaded private key
- [#42223](https://github.com/BerriAI/litellm/issues/42223) [Bug]: Managed vector store indexes are unusable until proxy restart
- [#35410](https://github.com/BerriAI/litellm/issues/35410) [Feature]: support kimi k3, glm 5.2 and others from morph
- [#37846](https://github.com/BerriAI/litellm/issues/37846) SendGrid: support inline CID logo attachment to avoid external content warnings
- [#37850](https://github.com/BerriAI/litellm/issues/37850) [Feature]: Separate routing adapter from upstream provider metadata in model management
- [#37872](https://github.com/BerriAI/litellm/issues/37872) Bedrock guardrail hook reuses request_data["api_key"] as its own ApplyGuardrail bearer token, colliding with BYOK credential-override routing
- [#37873](https://github.com/BerriAI/litellm/issues/37873) stream_chunk_builder crashes with TypeError on nvidia_nim streaming chunks, turning a successful streamed completion into a 500 via the Bedrock post_call guardrail hook
- [#52046](https://github.com/BerriAI/litellm/issues/52046) [Bug]: Presidio guardrail in mode logging_only masks the live response returned to the client
- [#52366](https://github.com/BerriAI/litellm/issues/52366) [Bug]: Vertex AI Imagen image edit raises raw ValueError on missing image or prompt instead of HTTP 400 BadRequestError

### Unsloth (`unslothai/unsloth`)

**Stars:** 80,321 · **Open issues:** 684 · **Last push:** <1h ago

On November 27, 2026, there were no new releases for Unsloth. However, significant developments included the merging of several pull requests aimed at enhancing functionality and stability, notably #19850, which introduced opt-in W8A8 int8 LoRA training on ROCm, and #19864, which tackled tensorwise _scaled_mm fallback for Windows builds. Additionally, issues were raised regarding features and bugs, with #19759 highlighting a problem with the translation feature not functioning properly unless in detect language mode. Overall, the day was marked by routine maintenance activities with important upgrades aimed at improving the user experience and system performance.

#### ✅ Merged PRs
- [#19875](https://github.com/unslothai/unsloth/pull/19875) FP8: treat any row-wise _scaled_mm probe failure as a missing kernel (torch 2.10 cuBLASLt error)
- [#19887](https://github.com/unslothai/unsloth/pull/19887) Tests: read diffusion.py as UTF-8 in the MOSS hosted int8 Auto test
- [#19784](https://github.com/unslothai/unsloth/pull/19784) Studio on Windows: refuse a GGUF load that would exhaust commit, and flag dequant-only FP8
- [#19850](https://github.com/unslothai/unsloth/pull/19850) Studio: opt-in W8A8 int8 LoRA training on ROCm
- [#19865](https://github.com/unslothai/unsloth/pull/19865) FP8: probe FBGEMM lazily on the local rank's card instead of GPU 0 at import
- [#19861](https://github.com/unslothai/unsloth/pull/19861) Torch config thread mirror: reset cached config hashes so worker threads get the new Inductor cache key
- [#19866](https://github.com/unslothai/unsloth/pull/19866) TP checkpoints: release the inference replica, gather offloaded optimizer state on device
- [#19860](https://github.com/unslothai/unsloth/pull/19860) Studio: T4 Auto runs MOSS-Image from the hosted int8 ConvRot W8A8 build when host RAM allows (2.57x)
- [#19641](https://github.com/unslothai/unsloth/pull/19641) Studio: match export timeout recovery to the operation ID
- [#19854](https://github.com/unslothai/unsloth/pull/19854) CI: give Core zoo room for slow runners and print its slowest tests
- [#19783](https://github.com/unslothai/unsloth/pull/19783) Windows on ARM: pair triton-windows with the torch minor, as on x64
- [#19869](https://github.com/unslothai/unsloth/pull/19869) FP8 unit-scale epilogue: comment its constexpr and request fp fusion
- [#19774](https://github.com/unslothai/unsloth/pull/19774) FP8: tensorwise _scaled_mm fallback for torch builds without the row-wise kernel (Windows)
- [#19849](https://github.com/unslothai/unsloth/pull/19849) Studio: ROCm H3 single-frame encode as Conv2d over the causal last tap (16x faster reference encode)
- [#19805](https://github.com/unslothai/unsloth/pull/19805) EP: run local experts as grouped GEMMs in the 4.x per-expert list exchange
- [#19596](https://github.com/unslothai/unsloth/pull/19596) Studio: let Claude chats write compaction summaries
- [#19858](https://github.com/unslothai/unsloth/pull/19858) Tests: GRPO model.config guard ignores the TRL text a replace() removes
- [#19857](https://github.com/unslothai/unsloth/pull/19857) DPO on TRL < 0.29: keep every patch row and image_grid_thw for Qwen-VL grids
- [#19819](https://github.com/unslothai/unsloth/pull/19819) Studio MiniMax-H3 video: apply LoRAs as a side branch instead of a bf16 bake (keeps the hosted INT8 base)
- [#19856](https://github.com/unslothai/unsloth/pull/19856) DPO on TRL 0.22: send Gemma3 and other image-text-to-text models down the vision path
- [#19836](https://github.com/unslothai/unsloth/pull/19836) Studio video: prefetch one group ahead when a streamed request is memory-tight
- [#19844](https://github.com/unslothai/unsloth/pull/19844) Studio int8: keep the shared ConvRot act quant for baked LoRA layers (Z-Image-Turbo, Qwen-Image-2.1)
- [#19843](https://github.com/unslothai/unsloth/pull/19843) Vision DPO, Online DPO and RLOO: encode each distinct image once
- [#19803](https://github.com/unslothai/unsloth/pull/19803) bf16 stochastic rounding: one kernel for bitsandbytes AdamW (no float32 weight / gradient copies)
- [#19800](https://github.com/unslothai/unsloth/pull/19800) fast_inference for DeepSeek-V4.1: serve the native text model through vLLM, keep the shared norms
- [#19817](https://github.com/unslothai/unsloth/pull/19817) Studio video: encode a finished clip after the GPU lock so the next queued clip starts
- [#19822](https://github.com/unslothai/unsloth/pull/19822) Studio Wan: fused norm / modulation / gated-residual kernels for bf16 eager loads (GGUF)
- [#19832](https://github.com/unslothai/unsloth/pull/19832) EP expert row chunks: use torch's own checkpoint under smart gradient checkpointing
- [#19818](https://github.com/unslothai/unsloth/pull/19818) Studio MiniMax-H3 video: load LoRAs saved in the community key layout
- [#19719](https://github.com/unslothai/unsloth/pull/19719) Studio: open Hub repo and README links on ModelScope or the mirror directly, not through the backend
- [#19833](https://github.com/unslothai/unsloth/pull/19833) ROCm: define the Triton probe kernel at module level so Triton < 3.4 can build it
- [#19835](https://github.com/unslothai/unsloth/pull/19835) On-policy distillation: equal forward counts across ranks, sharded teacher refusals, column-chunked teacher scoring
- [#19807](https://github.com/unslothai/unsloth/pull/19807) Studio int8 GEMM: keep a CUTLASS race winner only if it wins paired with today's kernel (MiniMax-H3 on power-capped cards)
- [#19830](https://github.com/unslothai/unsloth/pull/19830) FSDP2 save: keep rank 0's store alive for the sharded optimizer commit readers
- [#19797](https://github.com/unslothai/unsloth/pull/19797) EP: load only this rank's experts for per-expert layouts (4.x ModuleList, gpt-oss 4-bit)
- [#19779](https://github.com/unslothai/unsloth/pull/19779) EP: plan gpt-oss QLoRA, skip shared experts in pass 1 of the 4.x per-expert block
- [#19798](https://github.com/unslothai/unsloth/pull/19798) Studio FLUX.3 / Krea-2: skip the unused Qwen3-VL vision tower in the text encoder (793 MiB less VRAM per load)
- [#19787](https://github.com/unslothai/unsloth/pull/19787) Studio Krea-2: load LoRA, DoRA and LoKR trained on a fused attn.to_qkv
- [#19821](https://github.com/unslothai/unsloth/pull/19821) FSDP2 save: keep rank 0's store alive until every rank has read the writer's outcome
- [#19823](https://github.com/unslothai/unsloth/pull/19823) Tests: read unsloth/__init__.py as UTF-8 in the NCCL default env test
- [#19801](https://github.com/unslothai/unsloth/pull/19801) Studio: FrozenInt8Linear declares its compute dtype (MOSS-Image int8 training cast activations to int8)
- [#19820](https://github.com/unslothai/unsloth/pull/19820) Tests: pin the parallel pytest run count to the split distributed matrix
- [#19804](https://github.com/unslothai/unsloth/pull/19804) Share NCCL resources between split communicators by default
- [#19730](https://github.com/unslothai/unsloth/pull/19730) Distributed CPU CI: fork gloo ranks from a zygote that already imported unsloth
- [#19791](https://github.com/unslothai/unsloth/pull/19791) Studio: video fp8_gemm status, ModelOpt FP8 unit-scale fallback, step guidance, Loaded build rows, restore TE precision
- [#19794](https://github.com/unslothai/unsloth/pull/19794) Studio LTX-2.5: keep the text encoder's host copy owned on mid-size hosts (uncached L4 render 87 s to 57 s)
- [#19799](https://github.com/unslothai/unsloth/pull/19799) Studio ROCm gfx1151: block V^T layout for 56-head long INT8 attention calls
- [#19802](https://github.com/unslothai/unsloth/pull/19802) Tests: read rl.py as UTF-8 in the max_num_seqs warning test
- [#19793](https://github.com/unslothai/unsloth/pull/19793) GRPO: warn when a vLLM generate call has more rows than max_num_seqs
- [#19792](https://github.com/unslothai/unsloth/pull/19792) GRPO packing no-grad self-verify: trust 2x the verified shape, re-verify at most 3 rows
- [#19796](https://github.com/unslothai/unsloth/pull/19796) fast_inference for Qwen3.8-Flash-Next (qwen4_exp): vision gate with a capable zoo, shared norms
- [#19782](https://github.com/unslothai/unsloth/pull/19782) xformers gate: probe the backward kernel too, not only the forward
- [#19536](https://github.com/unslothai/unsloth/pull/19536) Keep explicit LoRA targets for vision models in unsloth train
- [#19785](https://github.com/unslothai/unsloth/pull/19785) Studio Qwen-Image-2.1: apply LoRAs trained on a fused img_mlp.gate_up
- [#19786](https://github.com/unslothai/unsloth/pull/19786) Studio MiniMax-H3: correct the causal conv frame pad on MPS (hardening for a future Mac path)
- [#19778](https://github.com/unslothai/unsloth/pull/19778) Expert parallel: shard zoo's packed NVFP4 / MXFP8 / MXFP4 expert stacks, and keep the load cut through UNSLOTH_MOE_EXPERTS_QUANTIZE
- [#19764](https://github.com/unslothai/unsloth/pull/19764) GRPO with vLLM: score LoRA in the rounding order the rollout uses
- [#19789](https://github.com/unslothai/unsloth/pull/19789) Token balance: even out DDP rank tokens with longest-first plus swap refinement
- [#19766](https://github.com/unslothai/unsloth/pull/19766) Gradient checkpointing: keep the layers that fit by default on one GPU, sized per batch
- [#19790](https://github.com/unslothai/unsloth/pull/19790) Studio tests: count the dismiss probe click wherever it lands at its spot
- [#19758](https://github.com/unslothai/unsloth/pull/19758) Studio training: drop the unused audio stream from LTX-2 / LTX-2.5 video-only LoRA training
- [#19765](https://github.com/unslothai/unsloth/pull/19765) Studio training: FLUX.3 Klein LoRA previews sample at inference's shift and base CFG
- [#19736](https://github.com/unslothai/unsloth/pull/19736) Studio: cut per-call sandbox overhead (lazy shim imports, one MXC pin pick per launch)
- [#19780](https://github.com/unslothai/unsloth/pull/19780) Distributed CPU CI: split the expert parallel and layout resume gloo files into gloo-ep
- [#19775](https://github.com/unslothai/unsloth/pull/19775) On-policy distillation: score the teacher with logits_to_keep
- [#19740](https://github.com/unslothai/unsloth/pull/19740) Studio video: load Wan LoRAs saved with musubi-tuner key names
- [#19772](https://github.com/unslothai/unsloth/pull/19772) Studio tests: pin the host machine in the torch ceiling freeze test
- [#19763](https://github.com/unslothai/unsloth/pull/19763) Studio: default PAL_DISABLE_SDMA=1 on Windows ROCm so copies after an event record are not stale
- [#19771](https://github.com/unslothai/unsloth/pull/19771) Opt-in GRPO partial rollouts for colocated vLLM
- [#19574](https://github.com/unslothai/unsloth/pull/19574) Studio: don't cut a `<` inside LaTeX (streaming, finished and stopped replies)
- [#19667](https://github.com/unslothai/unsloth/pull/19667) Studio images: coalesce identical requests across users, batch plain /images/generate, first-come-first-served slot
- [#19743](https://github.com/unslothai/unsloth/pull/19743) Studio images: load gated tokenizers (Krea 2, Ideogram 4, Anima) with the request's Hub token
- [#19707](https://github.com/unslothai/unsloth/pull/19707) Studio: sample FLUX.3 Klein at BFL's reference shift 16 and base CFG 4
- [#19729](https://github.com/unslothai/unsloth/pull/19729) Expert parallel for per-expert MoE layouts: transformers 4.x ModuleList experts and the load_in_4bit gpt-oss lists
- [#19761](https://github.com/unslothai/unsloth/pull/19761) Studio tests: forget probe_devices cached card names between tests
- [#19618](https://github.com/unslothai/unsloth/pull/19618) Restore custom preset values when switching cloud models
- [#19757](https://github.com/unslothai/unsloth/pull/19757) Tests: stop the rest shard stalling on a leaked rendezvous environment
- [#19575](https://github.com/unslothai/unsloth/pull/19575) Studio: video Restore no longer reuses staged frames or references
- [#19745](https://github.com/unslothai/unsloth/pull/19745) Studio images: render SD / SDXL prompt lists in runs of equal CLIP chunk count
- [#19746](https://github.com/unslothai/unsloth/pull/19746) Studio: keep Windows awake while a generation or training job runs
- [#19677](https://github.com/unslothai/unsloth/pull/19677) Studio video: one queue for the Video page, /v1/videos and the chat tool instead of a busy 409
- [#19726](https://github.com/unslothai/unsloth/pull/19726) GRPO: install MoE routing replay for old-policy replay (R2) without vLLM
- [#19748](https://github.com/unslothai/unsloth/pull/19748) Studio vLLM 0.30 engine: add vllm-bnb-plugin so int4 serving works
- [#19573](https://github.com/unslothai/unsloth/pull/19573) Studio: keep a processor from overwriting the main dataset on the Hub
- [#19577](https://github.com/unslothai/unsloth/pull/19577) Studio: keep the batch's variation seed when importing a later image
- [#19747](https://github.com/unslothai/unsloth/pull/19747) GRPO packing self-verify: tolerate bf16 GEMM shape noise on dense models
- [#19722](https://github.com/unslothai/unsloth/pull/19722) Studio images: seed the noise HiDream-I1 Fast/Dev draw in scheduler.step
- [#19742](https://github.com/unslothai/unsloth/pull/19742) DPO chunked path: log TRL <= 1.14's half-logit token accuracy
- [#19744](https://github.com/unslothai/unsloth/pull/19744) Bring three new tests in line with the encoding and rendezvous port guards
- [#19734](https://github.com/unslothai/unsloth/pull/19734) Point TRL's own vLLM engine at fast_inference when vLLM has no bitsandbytes
- [#19709](https://github.com/unslothai/unsloth/pull/19709) On-policy distillation: adapter-off base teacher, teacher advantages in GRPO, KL to the sampler
- [#19741](https://github.com/unslothai/unsloth/pull/19741) Gate the FlashAdamW variance kernel test on a real CUDA device
- [#19603](https://github.com/unslothai/unsloth/pull/19603) Studio: honor saved settings when MCP loads a model
- [#19647](https://github.com/unslothai/unsloth/pull/19647) Studio media: precision selectors follow the loaded build, refused precisions disabled with the reason, clearer labels
- [#19578](https://github.com/unslothai/unsloth/pull/19578) Studio: re-embed documents when an embedding connection changes server
- [#19633](https://github.com/unslothai/unsloth/pull/19633) Studio: save long Translate results to History
- [#19625](https://github.com/unslothai/unsloth/pull/19625) Studio: keep MCP servers that share a URL when importing a config
- [#19626](https://github.com/unslothai/unsloth/pull/19626) Studio: use the model's top reasoning level in every scheduled run
- [#19732](https://github.com/unslothai/unsloth/pull/19732) Warn once for low-rank LoRA with lora_alpha == r
- [#19689](https://github.com/unslothai/unsloth/pull/19689) Studio: run Krea 2 tensor parallel over two cards when one card would stream it
- [#19739](https://github.com/unslothai/unsloth/pull/19739) RLOO on TRL 0.22 to 0.27: run vLLM rollouts and sync the trained weights into TRL's own vLLM
- [#19711](https://github.com/unslothai/unsloth/pull/19711) FlashAdamW: compile the fp32 variance kernel on Triton 3.2 / 3.3
- [#19721](https://github.com/unslothai/unsloth/pull/19721) Pipeline parallel: carry the router aux loss for Mixtral, OLMoE, Qwen2-MoE, FlexOlmo, Ernie 4.5 MoE and GraniteMoE
- [#19737](https://github.com/unslothai/unsloth/pull/19737) accelerate FSDP2: gather every unit for generate(), so GRPO rollouts do not crash
- [#19718](https://github.com/unslothai/unsloth/pull/19718) GRPO: opt-in ScaleRL No-Positive-Resampling and a truncation-rate warning
- [#19735](https://github.com/unslothai/unsloth/pull/19735) Split the fsdp2-native shard by file name at s
- [#19733](https://github.com/unslothai/unsloth/pull/19733) Read trainer.py as utf-8 in the MoE load logging test
- [#19731](https://github.com/unslothai/unsloth/pull/19731) Split the pipeline parallel tests out of the gloo-cp shard
- [#19728](https://github.com/unslothai/unsloth/pull/19728) Expect gpt-oss router aux loss under cp to follow its new gloo evidence
- [#19727](https://github.com/unslothai/unsloth/pull/19727) Treat the GRPO scorer hidden-states restore as a restore, not a request
- [#19685](https://github.com/unslothai/unsloth/pull/19685) Resume TP / PP / EP LoRA checkpoints on another layout or on one GPU
- [#19705](https://github.com/unslothai/unsloth/pull/19705) FSDP2: keep the committed sharded optimizer checkpoint when a DCP save fails
- [#19723](https://github.com/unslothai/unsloth/pull/19723) fast_inference: route NVFP4 layers rebuilt from vLLM to the W4A16 kernels
- [#19725](https://github.com/unslothai/unsloth/pull/19725) Expert parallel: optional row chunks for the local experts call (UNSLOTH_EP_EXPERT_ROWS)
- [#19715](https://github.com/unslothai/unsloth/pull/19715) Put torchao NVFP4 to_nvfp4 back after tests that run a real NVFP4 quantize
- [#19724](https://github.com/unslothai/unsloth/pull/19724) Log the hard MoE routing load beside the aux loss (UNSLOTH_LOG_MOE_LOAD=N)
- [#19691](https://github.com/unslothai/unsloth/pull/19691) Studio multi-GPU: split distilled FLUX.2 steps across two cards by tokens
- [#19716](https://github.com/unslothai/unsloth/pull/19716) Ulysses Inkling 2: build the relative bias without an int64 [T, T] distance
- [#19712](https://github.com/unslothai/unsloth/pull/19712) PP: turn off donated buffers only during zero bubble steps
- [#19694](https://github.com/unslothai/unsloth/pull/19694) Studio: verify wxc-exec.exe with Windows CNG SHA-256 instead of hashlib
- [#19671](https://github.com/unslothai/unsloth/pull/19671) Studio multi-GPU: price a CFG replica when the text encoders already sit on the second card
- [#19688](https://github.com/unslothai/unsloth/pull/19688) Studio: put FP8 ahead of INT8 in auto quant on sm_103 (B300 / GB300)
- [#19687](https://github.com/unslothai/unsloth/pull/19687) Studio: warm inductor's fx shim before the background compile thread starts
- [#19699](https://github.com/unslothai/unsloth/pull/19699) GRPO scorer: restore UNSLOTH_RETURN_HIDDEN_STATES when scoring raises
- [#19714](https://github.com/unslothai/unsloth/pull/19714) Pipeline parallel GA folding: attended filler row, token budget exactness guards
- [#19710](https://github.com/unslothai/unsloth/pull/19710) vLLM colocate sync: reload MoE weights so experts are not corrupted on Blackwell
- [#19708](https://github.com/unslothai/unsloth/pull/19708) Context parallel: exact router aux loss for Mixtral, Qwen2-MoE, OLMoE, Qwen3.5-MoE, Qwen3-Next and gpt-oss
- [#19706](https://github.com/unslothai/unsloth/pull/19706) Ulysses chunked attention and TP vocab CE: use torch's own checkpoint under smart GC
- [#19665](https://github.com/unslothai/unsloth/pull/19665) Studio FP8: tensorwise fallback when the row-wise fp8 GEMM is missing (Windows wheels)
- [#19697](https://github.com/unslothai/unsloth/pull/19697) Do not latch fast paths off after one OOM or a checkpoint early stop
- [#19696](https://github.com/unslothai/unsloth/pull/19696) AsyncGRPO server: fail queued commands on stop, keep the adapter registry on a failed reload
- [#19612](https://github.com/unslothai/unsloth/pull/19612) Studio: read vision dataset images from the pinned dataset version
- [#19683](https://github.com/unslothai/unsloth/pull/19683) Pipeline parallel: pack each GA window's documents into equal-length micro-batches
- [#19702](https://github.com/unslothai/unsloth/pull/19702) Ulysses packed Flash attention: no host read of cu_seqlens per layer
- [#19701](https://github.com/unslothai/unsloth/pull/19701) MoE: cp pads out of eval aux under no_grad, no NaN on an all-masked micro-batch, zero-token remote MoE dispatch
- [#19703](https://github.com/unslothai/unsloth/pull/19703) TP / PP x DDP: all-reduce gradients in 256 MiB buckets, not one flat copy of them all
- [#19700](https://github.com/unslothai/unsloth/pull/19700) Q-GaLore: hold the weight by reference during the low-rank swap, not a clone
- [#19698](https://github.com/unslothai/unsloth/pull/19698) Hygiene: fp fusion on flash_adamw, per-call frozen tower env, GRPO cudagraphs key, typed device indices
- [#19704](https://github.com/unslothai/unsloth/pull/19704) Lift the TRL cap to 1.19.0
- [#19664](https://github.com/unslothai/unsloth/pull/19664) Studio NVFP4: bake LoRAs on NVFP4 transformers and cache the runtime NVFP4 build
- [#19623](https://github.com/unslothai/unsloth/pull/19623) Compiled blocks: launch kernels from Inductor's C++ wrapper once a run is long (L4 LoRA steps -11% to -14%)
- [#19693](https://github.com/unslothai/unsloth/pull/19693) FSDP2: keep the committed optimizer state when a checkpoint write fails, and raise on every rank
- [#19494](https://github.com/unslothai/unsloth/pull/19494) Studio diffusion: hold the engine-pick snapshot weakly so a model switch frees the old pipeline
- [#19652](https://github.com/unslothai/unsloth/pull/19652) Studio: fix the multi-GPU training plan, FSDP2 memory, TP / PP rows and the GPUs card
- [#19692](https://github.com/unslothai/unsloth/pull/19692) Expert parallel: gathered save_lora, agreed optimizer checkpoint writes, guard batch

#### 🐛 New Issues
- [#19759](https://github.com/unslothai/unsloth/issues/19759) [Bug] Translate not working properly unless in detect language mode. `feature request` `bug` 💬3
- [#19876](https://github.com/unslothai/unsloth/issues/19876) [Bug] Remote MCP (GitHub MCP server): intermittent "header mismatch: missing Mcp-Param-owner header" on tool calls, consistently on large create_or_update_file payloads `feature request` `bug` 💬1
- [#19853](https://github.com/unslothai/unsloth/issues/19853) [Bug] Can not execute a valid command because of sandbox limit `feature request` `bug` 💬1
- [#19842](https://github.com/unslothai/unsloth/issues/19842) [Feature] Multi-User Central Hub with SSO, Mesh Compute Nodes, and Cross-Device Computer Use
- [#19834](https://github.com/unslothai/unsloth/issues/19834) [Bug] Merging adapters led to worse performance than inference with adapters on the fly `feature request` `bug` 💬1
- [#19769](https://github.com/unslothai/unsloth/issues/19769) [Feature] Add sandbox warning or proper instructions for using MCP tools safely `feature request`
- [#19768](https://github.com/unslothai/unsloth/issues/19768) [Bug] Windows Strix Halo: GPU available memory is underestimated when BIOS UMA reservation reduces Windows-visible RAM `feature request` `bug` 💬1
- [#19767](https://github.com/unslothai/unsloth/issues/19767) [Feature] Support Ming-Image-0.2-Design `feature request`
- [#19750](https://github.com/unslothai/unsloth/issues/19750) [Feature] Support PrismML PQ2_0 / PTQ1_0 (GGML types 142 / 143) in Studio's bundled llama.cpp
- [#19795](https://github.com/unslothai/unsloth/issues/19795) [Bug] Studio: estimate-memory ignores -ot / n_cpu_moe MoE expert offload and shows false "Exceeds GPU memory" warning `feature request` `bug`
- [#19810](https://github.com/unslothai/unsloth/issues/19810) Studio: CSV chat import turns "developer" rows into user messages (and drops them in headerless CSVs)
- [#19749](https://github.com/unslothai/unsloth/issues/19749) Unsloth Studio MLX (Apple Silicon): huggingface_hub _ModuleLock deadlock on tier 510 + LanguageModelOutput TypeError on LFM3

#### 🔒 Closed Issues
- [#18563](https://github.com/unslothai/unsloth/issues/18563) v0.1.920-beta Crashes on Model Load
- [#19423](https://github.com/unslothai/unsloth/issues/19423) [Bug] Decision models (Clef): JSON string state is re-parsed and key-sorted in training/predict, but used verbatim by the exported GGUF
- [#18755](https://github.com/unslothai/unsloth/issues/18755) [Bug] The copyable Prompt token data is now not copyable
- [#18092](https://github.com/unslothai/unsloth/issues/18092) Optional seperators between batches of generated images
- [#18691](https://github.com/unslothai/unsloth/issues/18691) [Feature] Inkling 2 Mini finetune supported by Unsloth?
- [#19660](https://github.com/unslothai/unsloth/issues/19660) torch and pyarrow imports exit 139 in the Studio virtual environment on Linux
- [#19550](https://github.com/unslothai/unsloth/issues/19550) [Bug] Studio chat: LaTeX containing `<` (e.g. `x_{<i}`) is cut off with a KaTeX ParseError

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,207 · **Open issues:** 430 · **Last push:** 2h ago

On November 27, 2026, there were no new releases for AIBrix, but several important PRs were merged. Notable changes included the consolidation of small test pairs and a feature enhancement that allows the reuse of RunningRequests snapshots for a more efficient PD token_load. Bug fixes addressed issues like filtering routable PD pods during replica checks and managing metadata service properly via its image entrypoint. Among newly opened issues, a request for comments (RFC) emerged to explore scaling PD disaggregated routing to large fleets, indicating ongoing efforts to improve system performance and efficiency.

#### ✅ Merged PRs
- [#3630](https://github.com/vllm-project/aibrix/pull/3630) [Docs] fix links to the moved ModelClaim guide and GPU profiling README
- [#3627](https://github.com/vllm-project/aibrix/pull/3627) [Bug] Run metadata-service via its image entrypoint in standalone compose
- [#3623](https://github.com/vllm-project/aibrix/pull/3623) [Feat] Hoist read-only PD scraped metrics and pod-key formatting out of selectStripe lock (#3620)
- [#3622](https://github.com/vllm-project/aibrix/pull/3622) [Bug] Filter only routable PD decode and combined pods in replica inflight check (#3619)
- [#3621](https://github.com/vllm-project/aibrix/pull/3621) [Bug] Drop the drain-rate series when a pod is deleted or relabeled (#3505)
- [#3609](https://github.com/vllm-project/aibrix/pull/3609) [Misc] Consolidate small test pairs and split gateway_test.go (PR 6 o…
- [#3567](https://github.com/vllm-project/aibrix/pull/3567) [Misc] Move CryptoShuffle out of pkg/utils into fleet routing benchmark
- [#3616](https://github.com/vllm-project/aibrix/pull/3616) [Feat] Reuse RunningRequests snapshot with ledger-only Redis read for PD token_load (#3615)
- [#3617](https://github.com/vllm-project/aibrix/pull/3617) [Bug][Gateway] Log token counts instead of detokenized prompt in prefix-cache-preble

#### 🐛 New Issues
- [#3620](https://github.com/vllm-project/aibrix/issues/3620) [RFC]: Scale PD Disaggregated Routing to Large Fleets (Lock-Free Metric Precomputation & RoleSet-Aligned Candidate Stage) `area/gateway` `triage/accepted` `kind/feature` 💬4
- [#3631](https://github.com/vllm-project/aibrix/issues/3631) [Feat] add a CI smoke test for the standalone docker compose stack `area/gateway` `triage/accepted` `kind/feature` `area/runtime` 💬4
- [#3624](https://github.com/vllm-project/aibrix/issues/3624) [Bug] Remaining pod-scoped gauges keep stale series after a pod is deleted or relabeled `area/gateway` `triage/accepted` `kind/misc` `area/orchestration` 💬4
- [#3619](https://github.com/vllm-project/aibrix/issues/3619) [Bug] PD routing with requestsInflight reads prefill/encode pods in Redis and returns 503 instead of 429 when all decode pods are saturated `kind/bug` `area/gateway` `triage/accepted` 💬3
- [#3628](https://github.com/vllm-project/aibrix/issues/3628) [Bug] The post-sync ModelAdapter re-emit can replay a deleted adapter, making it routable again `kind/bug` `area/gateway` `triage/accepted` 💬2
- [#3629](https://github.com/vllm-project/aibrix/issues/3629) [Bug] A JSON null max_tokens is read as 0, so auto config-profile selection picks the wrong profile and ignores max_completion_tokens `kind/bug` `area/gateway` `triage/accepted` 💬2
- [#3632](https://github.com/vllm-project/aibrix/issues/3632) [Bug] TPOT metrics read vllm:time_per_output_token_seconds, which vLLM removed in v0.15 `kind/bug` `area/runtime` 💬1
- [#3618](https://github.com/vllm-project/aibrix/issues/3618) [Bug] RayClusterReplicaSet never requeues for minReadySeconds, so ready clusters stay unavailable `kind/bug` `area/orchestration` 💬1

#### 🔒 Closed Issues
- [#3597](https://github.com/vllm-project/aibrix/issues/3597) [Bug] Requests that arrive together all read 0 running requests, tie, and go to the name-first pod
- [#3457](https://github.com/vllm-project/aibrix/issues/3457) [Misc] Move CryptoShuffle out of pkg/utils into the fleet routing benchmark
- [#3369](https://github.com/vllm-project/aibrix/issues/3369) [Bug] Session-key Redis lookup waits three seconds despite its 500 ms budget
- [#3307](https://github.com/vllm-project/aibrix/issues/3307) [Bug] KV-sync chat tokenization drops tool-call history and falls back on null content
- [#3576](https://github.com/vllm-project/aibrix/issues/3576) [Bug] SGLang PD prefill HTTP requests outlive client cancellation
- [#3619](https://github.com/vllm-project/aibrix/issues/3619) [Bug] PD routing with requestsInflight reads prefill/encode pods in Redis and returns 503 instead of 429 when all decode pods are saturated
- [#3522](https://github.com/vllm-project/aibrix/issues/3522) [Bug] Gateway ClusterRoles grant unused write permissions
- [#3615](https://github.com/vllm-project/aibrix/issues/3615) [Feature]: Add ledger-only Redis read for PD token_load when RunningRequests snapshot is populated

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,539 · **Open issues:** 701 · **Last push:** <1h ago

On November 27, 2026, there were no new releases for Semantic Router. The key development was the merging of PR #7455, which addresses a bug related to checking Docker listener TLS files before replacing the Router. New issues reported include #7447, which highlights a bug in engine mode checks leaking API prefixes across listeners, and #7448, where standalone config validation accepts an HTTPS backend IP that is ultimately rejected at startup. Additionally, #7452 raises a concern about Kubernetes credential rotation deleting a crucial Secret needed for Helm rollback. Overall, the day was characterized by ongoing bug reports, with particular attention to those affecting Kubernetes functionality and Docker Router behavior.

#### ✅ Merged PRs
- [#7455](https://github.com/vllm-project/semantic-router/pull/7455) [Bug] Check Docker listener TLS files before replacing the Router

#### 🐛 New Issues
- [#7447](https://github.com/vllm-project/semantic-router/issues/7447) [Bug] Engine mode checks a listener's API grant against the provider path, and API prefixes leak across listeners `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬4
- [#7448](https://github.com/vllm-project/semantic-router/issues/7448) [Bug] Standalone config validation accepts an HTTPS backend IP that startup rejects `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#7477](https://github.com/vllm-project/semantic-router/issues/7477) [Bug] Operator-generated model endpoints fail on Kubernetes clusters with a custom DNS domain `bug` `needs-acceptance` `wg/enterprise-environment` 💬1
- [#7444](https://github.com/vllm-project/semantic-router/issues/7444) [Bug] vllm-sr serve removes the running Docker Router when a replacement certificate is missing `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#7452](https://github.com/vllm-project/semantic-router/issues/7452) [Bug] Kubernetes credential rotation deletes a Secret required by Helm rollback `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬1
- [#7446](https://github.com/vllm-project/semantic-router/issues/7446) [Bug] Standalone Router cannot reach a backend with an AAAA-only hostname `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#7443](https://github.com/vllm-project/semantic-router/issues/7443) [Bug] Operator hard-codes HTTPS port 8443 for KServe Standard predictors `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬1
- [#7445](https://github.com/vllm-project/semantic-router/issues/7445) [Bug] Docker Router keeps serving the old TLS certificate after an atomic renewal `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#7450](https://github.com/vllm-project/semantic-router/issues/7450) [Feature] Add Pareto model-pool roles and configurable routing penalties `needs-acceptance` `wg/mom-routing`
- [#7449](https://github.com/vllm-project/semantic-router/issues/7449) [Feature] Add an opt-in lightweight model route for standalone greetings `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#5903](https://github.com/vllm-project/semantic-router/issues/5903) [Feature] Build a use-case-first Semantic Router recipes page
- [#7162](https://github.com/vllm-project/semantic-router/issues/7162) [Feature] Add Tencent Hy4 and Hy4 Flash to the Model Catalog
- [#7371](https://github.com/vllm-project/semantic-router/issues/7371) [Bug] The setup wizard says "Your router is live" when the Router never started
- [#7169](https://github.com/vllm-project/semantic-router/issues/7169) [Feature] Add Nemotron 3.5 Super VL and Bolt to the Model Catalog
- [#7444](https://github.com/vllm-project/semantic-router/issues/7444) [Bug] vllm-sr serve removes the running Docker Router when a replacement certificate is missing
- [#7179](https://github.com/vllm-project/semantic-router/issues/7179) [Bug] Model runtime: a long Decision 3.0 forward reserves about twice the memory it uses under the default CUDA allocator
- [#7404](https://github.com/vllm-project/semantic-router/issues/7404) [Bug] The classify API never computes invalid_tool_call

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*