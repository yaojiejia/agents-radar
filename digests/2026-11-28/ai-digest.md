# 📡 AI Ecosystem Digest — 2026-11-28

> Generated 2026-11-28 04:34 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 157,336 | 27 | 1 | 1 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 136,652 | 13 | 2 | 23 | 1 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 109,255 | 0 | 0 | 0 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,473 | 10 | 2 | 0 | 4 |
| [OpenCode](https://github.com/anomalyco/opencode) | 229,647 | 26 | 8 | 20 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,991 | 31 | 12 | 18 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 395,360 | 165 | 126 | 203 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 266,625 | 30 | 2 | 2 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,721 | 42 | 29 | 29 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 39,143 | 25 | 18 | 51 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 136,468 | 13 | 10 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 188,338 | 15 | 5 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 64,049 | 16 | 10 | 57 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 80,396 | 4 | 6 | 250 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,210 | 7 | 2 | 9 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,551 | 9 | 25 | 12 | 0 |

---

## ✨ Highlights

- **GitHub Copilot CLI** released versions [v1.0.118-2](https://github.com/github/copilot-cli/releases/tag/v1.0.118-2), [v1.0.118-1](https://github.com/github/copilot-cli/releases/tag/v1.0.118-1), [v1.0.118-0](https://github.com/github/copilot-cli/releases/tag/v1.0.118-0), and [v1.0.117](https://github.com/github/copilot-cli/releases/tag/v1.0.117).
- **OpenAI Codex** released version rust-v0.174.0-alpha.9.
- **OpenClaw** released [v2026.12.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.12.1-beta.1).
- **Qwen Code** introduced a new issue about enabling pull scheduling for Hosted Harness, currently attracting significant attention with 7 comments: [#18514](https://github.com/QwenLM/qwen-code/issues/18514).
- **OpenClaw** reported a critical issue regarding SQLite integrity worker remaining active after verdict delivery, which has received high engagement with 8 comments: [#206669](https://github.com/openclaw/openclaw/issues/206669).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 157,336 · **Open issues:** 16,557 · **Last push:** 18h ago

On November 28, 2026, Claude Code did not see any new releases. However, a notable update was made with the merging of PR #112436, which ensures that reproducible or high-impact issues will not be marked as stale. Among the newly raised issues, #112803 highlighted a problem with the VS Code extension where sessions utilizing EnterWorktree fail to restore properly, opening as "Untitled" instead. Other significant issues included a request for UI improvements in the Desktop app sidebar (#112804) and a bug report concerning the failure of the weekly usage limit to reset on Claude Pro (#112755). Overall, the day was routine maintenance with some key bug reports emerging for future attention.

#### ✅ Merged PRs
- [#112436](https://github.com/anthropics/claude-code/pull/112436) Don't mark reproducible or high-impact issues as stale

#### 🐛 New Issues
- [#112803](https://github.com/anthropics/claude-code/issues/112803) VS Code extension: sessions that used EnterWorktree are not restored after restarting VS Code (they open as "Untitled") `bug` `has repro` `platform:macos` `area:ide` 💬1
- [#112804](https://github.com/anthropics/claude-code/issues/112804) Desktop app: let users and mods style the session sidebar `enhancement` `area:desktop` 💬1
- [#112800](https://github.com/anthropics/claude-code/issues/112800) Desktop app 6.28899.6.0 removed the extension slot, so please add a sidebar spot for plugin mods `enhancement` `platform:windows` `area:plugins` `area:desktop` 💬1
- [#112755](https://github.com/anthropics/claude-code/issues/112755) [BUG] Weekly usage limit failed to reset on Claude Pro `bug` `platform:windows` `area:cost` 💬1
- [#112806](https://github.com/anthropics/claude-code/issues/112806) [Bug][bio] False-positive `[bio]` safeguard on plant genetic transformation R&D — 157 blocked requests in 4 weeks on Opus 5 (req_011ChUeJdHkipvn3v1Q7kod3) `bug` `platform:linux` `area:model`
- [#112805](https://github.com/anthropics/claude-code/issues/112805) [FEATURE] Let the user's word reach a session from a shared chat, on purpose (scoped, signed, revocable) `enhancement` `area:security` `area:permissions`
- [#112802](https://github.com/anthropics/claude-code/issues/112802) [GitHub integration] `bug` `area:auth` `area:claude-code-web` `platform:web`
- [#112801](https://github.com/anthropics/claude-code/issues/112801) [FEATURE] Projects (coordinator): add "Use account memory" toggle and allow moving chats in/out — toggle to opt out of coordinator was removed `enhancement` `platform:windows` `area:desktop`
- [#112799](https://github.com/anthropics/claude-code/issues/112799) [GitHub integration] `bug` `platform:web` `github-integration`
- [#112798](https://github.com/anthropics/claude-code/issues/112798) [BUG] Claude Desktop (macOS): every Spotlight OS-entry refresh deletes the whole `com.anthropic.claude.os-entry` domain and re-indexes it, bloating the CoreSpotlight index and slowing all Spotlight searches `bug` `platform:macos` `perf:reliability` `area:desktop`
- [#112797](https://github.com/anthropics/claude-code/issues/112797) [Bug] Bypass permissions not inherited by subagents; autonomous execution stalls on prompts and memory over-persists `bug` `platform:linux` `memory` `area:agents`
- [#112796](https://github.com/anthropics/claude-code/issues/112796) Unbounded connections and constant reconnect attempts to api.anthropic.com keep a host blocked by a per-host connection limit (Remote Control server, Linux, 2.1.332) `bug` `has repro` `platform:linux` `area:networking`
- [#112795](https://github.com/anthropics/claude-code/issues/112795) Auto mode classifier denies owner-authorized fire_trigger between the same account's scheduled sessions ("Unsanctioned Communication") `bug` `has repro` `area:permissions` `area:routines`
- [#112794](https://github.com/anthropics/claude-code/issues/112794) [BUG] Desktop Code tab task list shows "Task #N" instead of the subject for tasks created before a compaction `bug` `has repro` `platform:macos` `area:desktop`
- [#112793](https://github.com/anthropics/claude-code/issues/112793) Es la 1 de la mañana ahora mismo en España, pero se me ha ocurrido… `enhancement` `area:tui`
- [#112792](https://github.com/anthropics/claude-code/issues/112792) claude today has been doing nothing but lying and sabotaging my project `bug` `area:model`
- [#112791](https://github.com/anthropics/claude-code/issues/112791) [BUG] Desktop app: video player only buffers during playback, videos stutter (Windows) `bug` `platform:windows` `area:desktop`
- [#112790](https://github.com/anthropics/claude-code/issues/112790) [Bug] Claude Code ignores reference archive and fabricates output without consulting it `bug` `platform:macos` `area:model`
- [#112789](https://github.com/anthropics/claude-code/issues/112789) [BUG] Weekly usage jumped from 80% to 99% immediately after upgrading from Max to Ultra `invalid`
- [#112788](https://github.com/anthropics/claude-code/issues/112788) Auto mode classifier blocks a pull request the user explicitly asked for `bug` `platform:macos` `area:permissions`
- [#112787](https://github.com/anthropics/claude-code/issues/112787) [BUG] Read/Edit deny and ask rules (also managed) and the working-directory blocks never apply to MCP tools: please say so where file rules and managed settings are described `bug` `has repro` `area:mcp` `area:docs`
- [#112786](https://github.com/anthropics/claude-code/issues/112786) [BUG] `$(echo touch)` evades `Bash(touch *)` deny/ask rules (also managed); the docs list `/usr/bin/...` as a form that evades them, but 2.1.328 blocks it `bug` `has repro` `platform:linux` `area:security`
- [#112785](https://github.com/anthropics/claude-code/issues/112785) [BUG] Read/Edit deny rules don't cover files git opens through a `.git` file's `gitdir:` pointer (docs name only scripts that open files) `bug` `has repro` `area:security` `area:bash`
- [#112784](https://github.com/anthropics/claude-code/issues/112784) [Bug] Unable to Process Input: Unclear Bug Report Referencing "Guardian Fixed Point Work" `bug` `platform:macos` `needs-repro`
- [#112783](https://github.com/anthropics/claude-code/issues/112783) [FEATURE] VS Code extension: quote text from earlier chat messages into the input `enhancement` `platform:windows` `area:ide` `platform:vscode`
- [#112782](https://github.com/anthropics/claude-code/issues/112782) [VS Code] Typing in the editor Find widget (Cmd+F) makes another VS Code window take focus `bug` `has repro` `platform:macos` `area:ide`
- [#112781](https://github.com/anthropics/claude-code/issues/112781) [BUG] macOS: Full Disk Access granted to com.anthropic.claude-code is not honored; sessions launched with --resume lose ~/Downloads (EPERM) `bug` `has repro` `platform:macos` `area:core`

#### 🔒 Closed Issues
- [#111988](https://github.com/anthropics/claude-code/issues/111988) [BUG] Desktop: can't create projects without coordinator or choose global memory access

### OpenAI Codex (`openai/codex`)

**Stars:** 136,652 · **Open issues:** 28,863 · **Last push:** 1h ago

Today, OpenAI Codex released version 0.174.0-alpha.9, which includes several crucial updates aimed at improving sandbox functionality. Among the notable merged pull requests, enhancements such as honoring filesystem permissions in Windows sandboxes and preserving Linux sandbox restrictions across writable symlinks were implemented, along with improvements to the TUI status display for thread permissions. A significant issue emerged regarding the app-server, where a stream disconnect is reported inaccurately, leading to potential confusion for developers. Overall, the day balanced critical updates and ongoing troubleshooting for smoother user experiences.

#### 🚀 New Releases
- [rust-v0.174.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.9) 0.174.0-alpha.9

#### ✅ Merged PRs
- [#64416](https://github.com/openai/codex/pull/64416) Honor declared filesystem permissions in Windows sandboxes
- [#64415](https://github.com/openai/codex/pull/64415) Preserve Linux sandbox restrictions across writable symlink aliases
- [#64411](https://github.com/openai/codex/pull/64411) Fit the Agent Command Center grouping header to the panel
- [#64400](https://github.com/openai/codex/pull/64400) Fix TUI Markdown line breaks before inline code
- [#64398](https://github.com/openai/codex/pull/64398) Seal synthetic mounts in read-restricted Linux sandboxes
- [#64396](https://github.com/openai/codex/pull/64396) Show confirmed thread permissions in TUI status
- [#64393](https://github.com/openai/codex/pull/64393) Track server-confirmed thread permissions in the TUI
- [#64391](https://github.com/openai/codex/pull/64391) Remove dim styling from hook details in the TUI
- [#64388](https://github.com/openai/codex/pull/64388) Bind Linux sandbox paths before shell snapshot replay
- [#64384](https://github.com/openai/codex/pull/64384) Report pending startup dialogs through terminal program status
- [#64382](https://github.com/openai/codex/pull/64382) Clean up unused TUI image paste files on exit
- [#64369](https://github.com/openai/codex/pull/64369) Respect sandbox read restrictions in remote plugin approvals
- [#64368](https://github.com/openai/codex/pull/64368) Interrupt running commands promptly when approval is canceled
- [#64367](https://github.com/openai/codex/pull/64367) Finish approved remote one-shot commands after startup interruption
- [#64355](https://github.com/openai/codex/pull/64355) Share tool approval logic across initial attempts and retries
- [#64349](https://github.com/openai/codex/pull/64349) Preserve command approval items through turn interruption
- [#64346](https://github.com/openai/codex/pull/64346) Drain unified exec launch failure events before session shutdown
- [#64345](https://github.com/openai/codex/pull/64345) Gate hosted Guardian test helpers to non-Windows builds
- [#64341](https://github.com/openai/codex/pull/64341) Persist command completions when approval is declined or fails
- [#64324](https://github.com/openai/codex/pull/64324) Compute the Responses WebSocket privacy flag before building the request
- [#64310](https://github.com/openai/codex/pull/64310) Fix lifecycle hook dispatch for hosted subagents
- [#64259](https://github.com/openai/codex/pull/64259) Resolve Command Center worktree groups in the background
- [#64258](https://github.com/openai/codex/pull/64258) Open `/diff` in a TUI sidebar tab

#### 🐛 New Issues
- [#64403](https://github.com/openai/codex/issues/64403) app-server: a stream disconnect (`CodexErr::Stream`) is reported as `codexErrorInfo: "other"` instead of `responseStreamDisconnected` `bug` `CLI` `connectivity` `app-server` 💬4
- [#64394](https://github.com/openai/codex/issues/64394) Remote Control repeatedly shows HTTP 400: Responses WebSocket messages must have type response.create `bug` `app` `connectivity` `remote` 💬2
- [#64419](https://github.com/openai/codex/issues/64419) Failed /models fetch is not remembered: every turn waits for the fetch timeout when /models is unreachable `bug` `CLI` `connectivity` `performance` 💬1
- [#64418](https://github.com/openai/codex/issues/64418) Work sessions started from ChatGPT mode fail to use the local project environment `bug` `app` `session` 💬1
- [#64417](https://github.com/openai/codex/issues/64417) Daybreak verification prompt appears during local development and testing of the project `bug` `safety-check` 💬1
- [#64410](https://github.com/openai/codex/issues/64410) Native subagent completion fails to wake an unloaded parent with wake_on_agent_messages enabled `bug` `windows-os` `app` `subagent` 💬1
- [#64409](https://github.com/openai/codex/issues/64409) Goal kept retrying after garbled replies `bug` `model-behavior` `CLI` `agent` 💬1
- [#64407](https://github.com/openai/codex/issues/64407) This content can’t be shown We take extra care with some cybersecurity requests. If you’re doing authorized security work, apply for Daybreak to get broader access. `bug` `app` `safety-check` 💬1
- [#64327](https://github.com/openai/codex/issues/64327) Persistent clickable activity indicator for running workers between chat messages `enhancement` `extension` `subagent` 💬1
- [#64413](https://github.com/openai/codex/issues/64413) VS Code: pressing Enter while editing a chat message freezes the composer until VS Code restarts `bug` `extension`
- [#64412](https://github.com/openai/codex/issues/64412) Startup WebSocket prewarm uses the thread's initial model, not the first turn's model (no settings check on the startup path) `bug` `app` `app-server`
- [#64408](https://github.com/openai/codex/issues/64408) Shell output is cut to ~10k tokens by three independent defaults; raising tool_output_token_limit alone changes nothing, and the rollout records output the model never saw `bug` `CLI` `context` `tool-calls`
- [#64405](https://github.com/openai/codex/issues/64405) codex exec hangs silently with an unreachable openai_base_url; unsupported configured model error is hard to trace `bug` `exec` `CLI` `connectivity`

#### 🔒 Closed Issues
- [#15499](https://github.com/openai/codex/issues/15499) Bug: Markdown local file links render percent-encoded non-ASCII paths in transcript output
- [#64413](https://github.com/openai/codex/issues/64413) VS Code: pressing Enter while editing a chat message freezes the composer until VS Code restarts

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,473 · **Open issues:** 2,195 · **Last push:** 3h ago

On November 28, 2026, GitHub Copilot CLI released multiple updates, including v1.0.118-2, which fixed navigation of prompt history after a Ctrl+R search match, and v1.0.118-1, addressing an issue with preserving changes to different MCP servers during simultaneous command execution. Notably, v1.0.118-0 enhanced the sandbox policy by displaying trusted CA certificate paths and improved task context visibility for subagents. Although there were no merged pull requests reported, a significant new issue emerged: #5605 highlights a problem where Fork PRs created from the Copilot app fail to enable "Allow edits by maintainers." These updates demonstrate ongoing enhancements to user experience and server functionality.

#### 🚀 New Releases
- [v1.0.118-2](https://github.com/github/copilot-cli/releases/tag/v1.0.118-2) 1.0.118-2
- [v1.0.118-1](https://github.com/github/copilot-cli/releases/tag/v1.0.118-1) 1.0.118-1
- [v1.0.118-0](https://github.com/github/copilot-cli/releases/tag/v1.0.118-0) 1.0.118-0
- [v1.0.117](https://github.com/github/copilot-cli/releases/tag/v1.0.117) 1.0.117

#### 🐛 New Issues
- [#5601](https://github.com/github/copilot-cli/issues/5601) Sandbox bypass prompt for explicitly writable skills directory `triage`
- [#5607](https://github.com/github/copilot-cli/issues/5607) Reasoning models compact at 30 to 40% of the window because the context estimate keeps counting old reasoning tokens `triage`
- [#5606](https://github.com/github/copilot-cli/issues/5606) Copilot app: user extensions never start in sessions linked to a pull request `triage`
- [#5605](https://github.com/github/copilot-cli/issues/5605) Fork PRs created from the GitHub Copilot app can't enable "Allow edits by maintainers" (`maintainer_can_modify` silently ignored) `triage`
- [#5604](https://github.com/github/copilot-cli/issues/5604) Copilot CLI ACP mode ignores fusionTier=high and uses Standard routing `triage`
- [#5603](https://github.com/github/copilot-cli/issues/5603) Browser Use activation fails on Windows Unicode profile paths: false registration conflict and broken native launcher `triage`
- [#5602](https://github.com/github/copilot-cli/issues/5602) ACP: a content-filtered model response ends the turn with `stopReason: "end_turn"` and sends no message `triage`
- [#5600](https://github.com/github/copilot-cli/issues/5600) macOS: Entra broker MCP sign-in (Azure DevOps remote MCP) never cached — MSAL keychain save fails with -34018, account picker every session `triage`
- [#5599](https://github.com/github/copilot-cli/issues/5599) Copilot CLI 1.0.116 refuses session.metadata.setWorkingDirectory calls from extensions `triage`
- [#5598](https://github.com/github/copilot-cli/issues/5598) /Users/parkdonghwan/Downloads/[붙임] 2026년도 제4차 직원 채용 공고문.pdf

#### 🔒 Closed Issues
- [#4670](https://github.com/github/copilot-cli/issues/4670) Tool call hangs after extension startup fails
- [#4740](https://github.com/github/copilot-cli/issues/4740) Voice server permanent deadlock when pid file is deleted while server process survives (bind-loser exits before writing pid)

### OpenCode (`anomalyco/opencode`)

**Stars:** 229,647 · **Open issues:** 4,111 · **Last push:** <1h ago

On November 28, 2026, OpenCode had a productive day with several significant merged pull requests, including the introduction of multi-language support in V2 docs through PRs #66778 and #66838, which now feature translations in 16 additional languages, including Simplified Chinese. Key fixes in core functionalities were addressed with PRs #66923 and #66914, ensuring reliable MCP connections and handling of type errors. An enhancement to allow tools to invoke one another via context.tool.call was also integrated through PR #66919, showcasing a commitment to improved interactivity. Among the new issues, the regression in the TUI where permissions were allowed without prompts drew attention, indicating potential user experience concerns that need addressing. Overall, the day reflected a strong focus on enhancing documentation accessibility and core functionality integrity.

#### ✅ Merged PRs
- [#66930](https://github.com/anomalyco/opencode/pull/66930) fix(site): tidy the docs Console nav key in the dictionaries
- [#66838](https://github.com/anomalyco/opencode/pull/66838) docs(site): translate V2 docs to 16 more languages
- [#66786](https://github.com/anomalyco/opencode/pull/66786) docs(site): translate V2 docs to Simplified Chinese
- [#66778](https://github.com/anomalyco/opencode/pull/66778) feat(site): multi-language V2 docs
- [#66772](https://github.com/anomalyco/opencode/pull/66772) refactor(site): share locale helpers between site and data
- [#66923](https://github.com/anomalyco/opencode/pull/66923) fix(core): keep MCP needs_auth and event follows through connection teardown
- [#66229](https://github.com/anomalyco/opencode/pull/66229) feat(core): stop a subagent's Claude process once it goes idle
- [#66909](https://github.com/anomalyco/opencode/pull/66909) chore(data): update OpenMono to 1.001
- [#66908](https://github.com/anomalyco/opencode/pull/66908) chore(site): update OpenMono to 1.001
- [#66912](https://github.com/anomalyco/opencode/pull/66912) feat(core): support native Windows machine workers on the home
- [#66926](https://github.com/anomalyco/opencode/pull/66926) fix(app): guard channel lookup in settings catalog
- [#66914](https://github.com/anomalyco/opencode/pull/66914) fix(core): share pooled MCP connections across equivalent configs
- [#66919](https://github.com/anomalyco/opencode/pull/66919) feat(core): let tools call other tools through context.tool.call
- [#66924](https://github.com/anomalyco/opencode/pull/66924) feat(core): enable opencode api in dev by default
- [#66915](https://github.com/anomalyco/opencode/pull/66915) fix(core): keep the MCP SDK out of startup and type MCP errors
- [#66880](https://github.com/anomalyco/opencode/pull/66880) refactor(sdk,server): split ServerOptions, unify ServerFetch, and clean SDK seams
- [#66879](https://github.com/anomalyco/opencode/pull/66879) refactor(core): plan inbox boundaries purely and carry drain position
- [#66900](https://github.com/anomalyco/opencode/pull/66900) fix(app): only call a cron every N hours when it covers the whole day
- [#66899](https://github.com/anomalyco/opencode/pull/66899) feat(app): ship automations and clean up the list
- [#66895](https://github.com/anomalyco/opencode/pull/66895) fix(cli-rs): mark /find as not ported in the slash parity test

#### 🐛 New Issues
- [#66840](https://github.com/anomalyco/opencode/issues/66840) Inkling 2 mini unable to call the `edit` tool `type/feature` `area/model-behavior` `version/v2` `platform/linux` 💬5
- [#66891](https://github.com/anomalyco/opencode/issues/66891) new session no model selection `triaging` `type/bug` 💬4
- [#66826](https://github.com/anomalyco/opencode/issues/66826) compaction: background summary + recent-context drops unconsumed tool-result images, causing repeated image reads `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬4
- [#66861](https://github.com/anomalyco/opencode/issues/66861) TUI: "ask" permissions silently allowed without any prompt (shell + webfetch) — regression in 2.4.x `severity:high` `type/bug` `area/tui` `version/v2` 💬3
- [#66771](https://github.com/anomalyco/opencode/issues/66771) shell: permission scanner misses nested-shell quote mangling — `cmd /c "rmdir /s /q \"$p\""` executes as recursive delete of the drive root `type/feature` `area/core` `version/v2` `platform/windows` 💬3
- [#66824](https://github.com/anomalyco/opencode/issues/66824) tui: hitting Esc to interrupt deletes multiple messages and ruins sessions `severity:high` `type/bug` `area/tui` `version/v2` 💬3
- [#66773](https://github.com/anomalyco/opencode/issues/66773) tui: Mermaid renderer displays <b>/<strong> tags literally and ignores \n line breaks `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬3
- [#66885](https://github.com/anomalyco/opencode/issues/66885) opencode run waits forever on background jobs; add an option to limit or skip the wait `type/feature` `area/cli` `version/v2` 💬2
- [#66868](https://github.com/anomalyco/opencode/issues/66868) Windows: opencode run --standalone exits without invoking plugin cleanup `type/bug` `area/cli` `version/v2` `platform/windows` 💬2
- [#66804](https://github.com/anomalyco/opencode/issues/66804) opencode-ctrl-v-bug-report `triaging` `type/bug` `area/tui` `version/v2` 💬2
- [#66921](https://github.com/anomalyco/opencode/issues/66921) cli: session import prints a stack trace when the file is missing or the fetch fails `reproduced` `type/bug` `area/cli` `version/v2` 💬1
- [#66916](https://github.com/anomalyco/opencode/issues/66916) shell: workdir is ignored when timeout or background params are set (command runs in the session's default cwd) `type/bug` `area/core` `version/v2` `platform/windows` 💬1
- [#66760](https://github.com/anomalyco/opencode/issues/66760) app: user message bubble wraps the last words on touch devices `reproduced` `type/bug` `area/web` `version/v2` 💬1
- [#66911](https://github.com/anomalyco/opencode/issues/66911) Compaction sends image parts when agents.compaction.model omits capabilities.input (openai-compatible default assumes vision) `type/bug` `area/providers` `version/v2` 💬1
- [#66910](https://github.com/anomalyco/opencode/issues/66910) claude-agent: plugins that edit earlier messages make every turn fork the Claude Code session `type/feature` `area/providers` `version/v2` `platform/wsl` 💬1
- [#66906](https://github.com/anomalyco/opencode/issues/66906) desktop: browser pane page renders over the session pane in RTL (Arabic) layout `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1
- [#66905](https://github.com/anomalyco/opencode/issues/66905) desktop: in an RTL (Arabic) UI the browser pane's page renders over the session pane instead of inside it `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1
- [#66904](https://github.com/anomalyco/opencode/issues/66904) core: text-only model rejection (Model only support text input) permanently bricks session `type/bug` `area/core` `version/v2` `platform/macos` 💬1
- [#66902](https://github.com/anomalyco/opencode/issues/66902) Open code countinue showing working `triaging` `type/bug` 💬1
- [#66901](https://github.com/anomalyco/opencode/issues/66901) service: persistent background server retains ~450 MB RSS after TUI exit `type/feature` `area/service` `version/v2` `platform/linux` 💬1
- [#66896](https://github.com/anomalyco/opencode/issues/66896) browser: CookieMirror drops Max-Age=0 / past-Expires cookie deletions ("expired-overwrite"), so deleted cookies come back on the next bind `type/bug` `status/repro-simulated` `area/desktop` `version/v2` 💬1
- [#66894](https://github.com/anomalyco/opencode/issues/66894) [FEATURE]: Make Code Mode catalog token budget configurable `type/feature` `area/core` `version/v2` 💬1
- [#66884](https://github.com/anomalyco/opencode/issues/66884) Unable to send terminal bell through a plugin `type/support` `area/plugins` `version/v2` `platform/linux` 💬1
- [#66882](https://github.com/anomalyco/opencode/issues/66882) [FEATURE]: Let a plugin start when the server starts `type/feature` `area/plugins` `version/v2` 💬1
- [#66883](https://github.com/anomalyco/opencode/issues/66883) [FEATURE]: Document tool renames in the session context hook and export the hook types `type/feature` `area/plugins` `version/v2` 💬1
- [#66877](https://github.com/anomalyco/opencode/issues/66877) [FEATURE]: desktop: abort session when its conversation tab is closed `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1

#### 🔒 Closed Issues
- [#66861](https://github.com/anomalyco/opencode/issues/66861) TUI: "ask" permissions silently allowed without any prompt (shell + webfetch) — regression in 2.4.x
- [#66824](https://github.com/anomalyco/opencode/issues/66824) tui: hitting Esc to interrupt deletes multiple messages and ruins sessions
- [#66185](https://github.com/anomalyco/opencode/issues/66185) claude-agent: bound idle claude processes and stop finished subagents early
- [#66804](https://github.com/anomalyco/opencode/issues/66804) opencode-ctrl-v-bug-report
- [#66911](https://github.com/anomalyco/opencode/issues/66911) Compaction sends image parts when agents.compaction.model omits capabilities.input (openai-compatible default assumes vision)
- [#66906](https://github.com/anomalyco/opencode/issues/66906) desktop: browser pane page renders over the session pane in RTL (Arabic) layout
- [#66904](https://github.com/anomalyco/opencode/issues/66904) core: text-only model rejection (Model only support text input) permanently bricks session
- [#66884](https://github.com/anomalyco/opencode/issues/66884) Unable to send terminal bell through a plugin

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,991 · **Open issues:** 2,587 · **Last push:** <1h ago

Today, Qwen Code released sdk-typescript-v0.1.39, which bundles the CLI version 0.28.7, enhancing its functionality further. Among the significant merged pull requests, features such as host capability probes for verification in #18552 and the wake-up of MySQL session resource garbage collection via RocketMQ in #18559 stand out. Additionally, multiple fixes like the hardening of tracked-state guard rules in #18546 and the prevention of worktree snapshot capture from freezing the daemon in #18494 contribute to improved stability and performance. A notable new issue was raised regarding enabling pull scheduling for the Hosted Harness in #18514, indicating a keen interest in further optimizing resource management.

#### 🚀 New Releases
- [sdk-typescript-v0.1.39](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.39) SDK TypeScript Release sdk-typescript-v0.1.39

#### ✅ Merged PRs
- [#18546](https://github.com/QwenLM/qwen-code/pull/18546) fix(autofix-pr): harden tracked-state guard, watch consent, and in-place skill rules
- [#18552](https://github.com/QwenLM/qwen-code/pull/18552) feat(verify-pr): add host capability probes and per-round VM staging
- [#18559](https://github.com/QwenLM/qwen-code/pull/18559) feat(managed-agent): Wake MySQL session resource GC via RocketMQ
- [#18370](https://github.com/QwenLM/qwen-code/pull/18370) fix(ci): fail closed on authority-surface PRs and ambient credential probes
- [#18535](https://github.com/QwenLM/qwen-code/pull/18535) fix(serve): fail closed on unreadable worktree sidecars during session deletion
- [#18577](https://github.com/QwenLM/qwen-code/pull/18577) test(web-shell): account for the usage chip's stats read in managed diagnostics E2E
- [#18539](https://github.com/QwenLM/qwen-code/pull/18539) test(verify-pr): close #18064 deferred recipe-screen and test-isolation follow-ups
- [#18554](https://github.com/QwenLM/qwen-code/pull/18554) docs(design): mark daemon overload sidebar indicator as implemented
- [#18557](https://github.com/QwenLM/qwen-code/pull/18557) feat(managed-agent): Hand a fresh Turn's event delivery to the Harness
- [#18576](https://github.com/QwenLM/qwen-code/pull/18576) ci: record ci.yml's 221514 bytes in the size baseline
- [#18533](https://github.com/QwenLM/qwen-code/pull/18533) fix(triage): prepend or normalize stage marker in triage-publish
- [#18494](https://github.com/QwenLM/qwen-code/pull/18494) fix(core): stop worktree snapshot capture from freezing the daemon event loop
- [#18566](https://github.com/QwenLM/qwen-code/pull/18566) fix(managed-agent): delete retained sessions after external workspace retirement
- [#18560](https://github.com/QwenLM/qwen-code/pull/18560) fix(managed-agent): scope external mount-path recovery to the registered storage owner
- [#18480](https://github.com/QwenLM/qwen-code/pull/18480) perf(core): persist prompt-time sidecar, bound cold scans, and extend transcript index incrementally
- [#18054](https://github.com/QwenLM/qwen-code/pull/18054) feat(web-shell): pause task creation and show an overload strip in the sidebar
- [#18548](https://github.com/QwenLM/qwen-code/pull/18548) ci(lint): share the content-verified pnpm store across runs
- [#18547](https://github.com/QwenLM/qwen-code/pull/18547) ci(web-shell): isolate browser smoke in a loopback-only netns on self-hosted runners

#### 🐛 New Issues
- [#18514](https://github.com/QwenLM/qwen-code/issues/18514) proposal(managed-agent): Enable pull scheduling for Hosted Harness `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬7
- [#18508](https://github.com/QwenLM/qwen-code/issues/18508) fix(web-shell): opening Artifacts should show the list, not a restored artifact preview tab `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬6
- [#18544](https://github.com/QwenLM/qwen-code/issues/18544) Allow external Files sessions to share a worker with distinct working directories `status/in-progress` `type/feature-request` `managed-agent-server` 💬3
- [#18541](https://github.com/QwenLM/qwen-code/issues/18541) feat(serve): allow branch/fork for trusted secondary-workspace sessions (follow-up to #7014) `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#18492](https://github.com/QwenLM/qwen-code/issues/18492) Ink TUI forgets checked options and typed text when scrolling away from a pending question `priority/P2` `type/bug` `category/cli` `scope/interactive` 💬3
- [#18534](https://github.com/QwenLM/qwen-code/issues/18534) follow-up(cron): retain permission hints for gates with standalone comments `priority/P3` `type/bug` `scope/core` 💬3
- [#18524](https://github.com/QwenLM/qwen-code/issues/18524) Developer guide still uses npm install for repository-root setup and manual publishing `priority/P2` `type/documentation` `category/development` 💬3
- [#18501](https://github.com/QwenLM/qwen-code/issues/18501) Allow a containerized Managed Runtime Worker to select its control port `priority/P2` `type/feature-request` `category/core` `scope/core` 💬3
- [#18567](https://github.com/QwenLM/qwen-code/issues/18567) Main CI failed: tui-parity — installed/npm-distribution.test.ts > global-ignore-scripts no-relaunch-fallback uses actual installed entry a… `status/needs-triage` `type/bug` 💬2
- [#18556](https://github.com/QwenLM/qwen-code/issues/18556) Main CI failed: Qwen Code CI — scripts/tests/workflow-size.test.js > … > .github/workflows/ci.yml is within its baseline allowance `status/needs-triage` `type/bug` 💬2
- [#18553](https://github.com/QwenLM/qwen-code/issues/18553) fix(web-shell): surface branch sourceWarnings even when the follow-up switch fails or aborts `priority/P3` `type/bug` `category/ui` `scope/session-management` 💬2
- [#18540](https://github.com/QwenLM/qwen-code/issues/18540) deflake: packages/web-shell/client/e2e/web-shell.update.spec.ts › downloads silently, shows an update action in More and restarts in place @smoke `priority/P2` `type/bug` `scope/testing` `status/ready-for-agent` 💬2
- [#18537](https://github.com/QwenLM/qwen-code/issues/18537) follow-up(sdk): strengthen bridge prompt ordering regressions `priority/P3` `scope/testing` `type/enhancement` 💬2
- [#18536](https://github.com/QwenLM/qwen-code/issues/18536) deflake: packages/core/src/omni/policy/tools/extract-keyframes.test.ts › OmniExtractKeyframesTool › bucketed extraction (known duration, maxFrames > 1) › threads policyTools.<tool>.runtime.timeoutMs into runFfmpeg `priority/P3` `type/bug` `category/core` `scope/testing` 💬2
- [#18527](https://github.com/QwenLM/qwen-code/issues/18527) fix(web-shell): restore secondary session color groups and delayed group picker `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#18515](https://github.com/QwenLM/qwen-code/issues/18515) Web Shell: let embedding hosts save an unsent draft to Input history `priority/P3` `type/feature-request` `scope/web-shell` 💬2
- [#18498](https://github.com/QwenLM/qwen-code/issues/18498) Anthropic: no message cache breakpoint when the user turn ends with an image or PDF `priority/P2` `type/bug` `category/performance` `scope/caching` 💬2
- [#18578](https://github.com/QwenLM/qwen-code/issues/18578) feat(managed-agent): support host-scoped actions in external Files turns 💬1
- [#18565](https://github.com/QwenLM/qwen-code/issues/18565) Managed Agent cannot delete a retained session after permanent external workspace retirement 💬1
- [#18542](https://github.com/QwenLM/qwen-code/issues/18542) Main CI failed: E2E Tests — cli/tool-hook-context.test.ts > … > interactive: withholds project hooks in an untrusted folder and says why `status/needs-triage` `type/bug` 💬1
- [#18550](https://github.com/QwenLM/qwen-code/issues/18550) Managed Agent cannot retire a workspace-scoped external Files worker 💬1
- [#18531](https://github.com/QwenLM/qwen-code/issues/18531) Main CI failed: Qwen Code CI — src/serve/run-qwen-serve.test.ts > … > keeps the remote same-origin exception alive during the bootstrap wind… `status/needs-triage` `type/bug` 💬1
- [#18493](https://github.com/QwenLM/qwen-code/issues/18493) SDK Release Failed for v0.1.39 on 2026-11-27 💬1
- [#18575](https://github.com/QwenLM/qwen-code/issues/18575) Desktop (Windows): machine-scope (HKLM) pinning for the CLI runtime directory in managed deployments
- [#18574](https://github.com/QwenLM/qwen-code/issues/18574) Web Shell: false "interrupted" banner in side-task forks created before the first tool call
- [#18571](https://github.com/QwenLM/qwen-code/issues/18571) Web Shell cannot restore an automatically retained worktree because the request uses the deleted checkout as its workspace
- [#18569](https://github.com/QwenLM/qwen-code/issues/18569) Release Failed for v0.28.7-nightly.20261127.cc652838 on 2026-11-27 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18563](https://github.com/QwenLM/qwen-code/issues/18563) Windows: /doctor reports "npm is not available" although npm works `status/needs-triage` `type/bug`
- [#18564](https://github.com/QwenLM/qwen-code/issues/18564) Release Failed for v0.29.0 on 2026-11-27 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18562](https://github.com/QwenLM/qwen-code/issues/18562) /advisor model picker corrupts advisorModel in settings.json `status/needs-triage` `type/bug`
- [#18558](https://github.com/QwenLM/qwen-code/issues/18558) Managed Agent external workspaces with distinct storage owners can block each other at the same mount path

#### 🔒 Closed Issues
- [#18252](https://github.com/QwenLM/qwen-code/issues/18252) Main CI failed: E2E Tests — cli/cron-tools.test.ts > … > should have cron tools registered by default (+73 more)
- [#18264](https://github.com/QwenLM/qwen-code/issues/18264) Main CI failed: Qwen Code CI — no test identified (latest: 2026-11-27)
- [#18475](https://github.com/QwenLM/qwen-code/issues/18475) fix(serve): fail closed on unreadable worktree sidecars during session deletion
- [#18501](https://github.com/QwenLM/qwen-code/issues/18501) Allow a containerized Managed Runtime Worker to select its control port
- [#18556](https://github.com/QwenLM/qwen-code/issues/18556) Main CI failed: Qwen Code CI — scripts/tests/workflow-size.test.js > … > .github/workflows/ci.yml is within its baseline allowance
- [#18515](https://github.com/QwenLM/qwen-code/issues/18515) Web Shell: let embedding hosts save an unsent draft to Input history
- [#18542](https://github.com/QwenLM/qwen-code/issues/18542) Main CI failed: E2E Tests — cli/tool-hook-context.test.ts > … > interactive: withholds project hooks in an untrusted folder and says why
- [#18274](https://github.com/QwenLM/qwen-code/issues/18274) Main CI failed: Desktop Checks — Desktop Checks > … > Run actions/checkout@df4cb1c069e1874edd31b4311f1884172cec0e10
- [#18464](https://github.com/QwenLM/qwen-code/issues/18464) Main CI failed: Desktop Checks — Desktop Checks > … > Initialize containers
- [#18531](https://github.com/QwenLM/qwen-code/issues/18531) Main CI failed: Qwen Code CI — src/serve/run-qwen-serve.test.ts > … > keeps the remote same-origin exception alive during the bootstrap wind…
- [#18493](https://github.com/QwenLM/qwen-code/issues/18493) SDK Release Failed for v0.1.39 on 2026-11-27
- [#18487](https://github.com/QwenLM/qwen-code/issues/18487) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.approval-parking.test.ts > … > resumes a version-0 Shell approval with exten…

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

**Stars:** 395,360 · **Open issues:** 9,388 · **Last push:** <1h ago

On November 28, 2026, OpenClaw released version 2026.12.1-beta.1, introducing significant updates that enhance Git installations with prepared releases and a resident launcher, while enabling package updates without halting the serving Gateway. Among the notable merged pull requests, improvements included the capability to open cold chats with the latest 24 messages and important fixes that stabilized the Control UI and improved cache management during chat branch transitions. Additionally, a critical new issue was reported regarding the Windows SQLite integrity worker, which remains active after delivering verdicts, causing delays at startup due to enforced wait times.

#### 🚀 New Releases
- [v2026.12.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.12.1-beta.1) openclaw 2026.12.1-beta.1

#### ✅ Merged PRs
- [#207173](https://github.com/openclaw/openclaw/pull/207173) improve: open cold chats with the latest 24 messages
- [#207213](https://github.com/openclaw/openclaw/pull/207213) fix(doctor): check sandboxes the runtime enables per agent
- [#207194](https://github.com/openclaw/openclaw/pull/207194) fix: tell the user when a finished subagent's report can't start in their chat
- [#207130](https://github.com/openclaw/openclaw/pull/207130) fix: make nested Git branch discovery tests deterministic
- [#203375](https://github.com/openclaw/openclaw/pull/203375) fix: keep chat image generation working on text-only models
- [#207046](https://github.com/openclaw/openclaw/pull/207046) fix: restore compaction counts after switching chat branches or upgrading
- [#207172](https://github.com/openclaw/openclaw/pull/207172) fix(codex): prevent macOS specialist startup failures through a launcher
- [#207215](https://github.com/openclaw/openclaw/pull/207215) fix(doctor): Codex asset reminder follows plugin activation
- [#207212](https://github.com/openclaw/openclaw/pull/207212) fix(sessions): keep tool-usage retention from recreating removed agent stores
- [#207207](https://github.com/openclaw/openclaw/pull/207207) docs(skills): load specialty procedures for the selected task
- [#207208](https://github.com/openclaw/openclaw/pull/207208) fix(doctor): lint --all reads client credentials from source state
- [#207196](https://github.com/openclaw/openclaw/pull/207196) fix: keep cold Skills detail loads from failing layout tests
- [#206929](https://github.com/openclaw/openclaw/pull/206929) test: trim ordinary test examples and unused support bindings
- [#207202](https://github.com/openclaw/openclaw/pull/207202) improve: defer browser profile setup for configs without a browser
- [#207119](https://github.com/openclaw/openclaw/pull/207119) fix: stabilize Control UI update-triage tests on Bun
- [#207197](https://github.com/openclaw/openclaw/pull/207197) improve: skip unused model catalogs during provider auth and entry discovery
- [#207087](https://github.com/openclaw/openclaw/pull/207087) fix: await completed turns in the startup ordering test
- [#207184](https://github.com/openclaw/openclaw/pull/207184) fix(test): wait for the HTML preview to receive HiDPI pointer input
- [#207160](https://github.com/openclaw/openclaw/pull/207160) fix: preserve newer scrolls after older chat messages load
- [#207104](https://github.com/openclaw/openclaw/pull/207104) fix(test): make Talk readiness and handoff checks wait for backend events
- [#207093](https://github.com/openclaw/openclaw/pull/207093) fix(test): keep the worker RPC authority check within its fixture scope
- [#206613](https://github.com/openclaw/openclaw/pull/206613) feat(ios): sign in to model providers and set effort from the model sheet
- [#207186](https://github.com/openclaw/openclaw/pull/207186) fix(cron): show job notices when the owner conversation's model cannot run
- [#207118](https://github.com/openclaw/openclaw/pull/207118) chore(test): trim low-value session creation coverage
- [#207163](https://github.com/openclaw/openclaw/pull/207163) fix(update): report plugin repair warnings after boot
- [#207146](https://github.com/openclaw/openclaw/pull/207146) fix(doctor): report which config-flow owners have work
- [#207128](https://github.com/openclaw/openclaw/pull/207128) fix: keep recovery prompts out of Claude chat history
- [#207169](https://github.com/openclaw/openclaw/pull/207169) improve: use less memory when the Gateway loads its model catalog
- [#207077](https://github.com/openclaw/openclaw/pull/207077) fix: bound memory used by shared session sidebar views
- [#207076](https://github.com/openclaw/openclaw/pull/207076) improve: use less memory when capturing the first session checkout snapshot
- [#207156](https://github.com/openclaw/openclaw/pull/207156) chore(ui): refresh control ui locales
- [#207151](https://github.com/openclaw/openclaw/pull/207151) fix: dismiss inbox mentions immediately
- [#207167](https://github.com/openclaw/openclaw/pull/207167) ci: check the Plugin SDK export surface on every pull request
- [#207159](https://github.com/openclaw/openclaw/pull/207159) improve: reuse the active config for local inference
- [#207154](https://github.com/openclaw/openclaw/pull/207154) improve: use less memory when sharing a downloaded model catalog
- [#207134](https://github.com/openclaw/openclaw/pull/207134) fix: keep completed worker runs visible after a follow-up
- [#207062](https://github.com/openclaw/openclaw/pull/207062) fix: finish updates of 2026-11-17 main checkouts automatically on Linux and macOS
- [#207085](https://github.com/openclaw/openclaw/pull/207085) fix(update): preserve exception causes in failure history
- [#207097](https://github.com/openclaw/openclaw/pull/207097) fix: auto-disable automations whose account was signed out
- [#206666](https://github.com/openclaw/openclaw/pull/206666) feat(ios): a sidebar with pins, and Sessions grouped by what needs you
- [#206615](https://github.com/openclaw/openclaw/pull/206615) feat: let memory search index only supported media when requested
- [#207059](https://github.com/openclaw/openclaw/pull/207059) fix(logging): explain why an unsafe directory blocks file logs
- [#207108](https://github.com/openclaw/openclaw/pull/207108) fix(ci): keep baseline ratchets from exhausting hosted runners
- [#206999](https://github.com/openclaw/openclaw/pull/206999) test: prove plugin convergence after manual core swaps
- [#207091](https://github.com/openclaw/openclaw/pull/207091) fix(cron): wait for a provider's stated rate-limit reset before the next run
- [#207016](https://github.com/openclaw/openclaw/pull/207016) refactor(subagents): simplify queued registration recovery
- [#207017](https://github.com/openclaw/openclaw/pull/207017) fix(android): show device dictation availability
- [#205443](https://github.com/openclaw/openclaw/pull/205443) fix: let updates pass validation when the Gateway uses Tailscale Serve or Funnel
- [#204068](https://github.com/openclaw/openclaw/pull/204068) chore(qa): compare archived worktree restore with clone selection
- [#206620](https://github.com/openclaw/openclaw/pull/206620) feat: browse and search Knowledge records from Memory Wiki
- [#207075](https://github.com/openclaw/openclaw/pull/207075) fix(cli): clear the unused dispatch export from dependency checks
- [#205382](https://github.com/openclaw/openclaw/pull/205382) feat: explain pasted errors in Ask OpenClaw
- [#206695](https://github.com/openclaw/openclaw/pull/206695) fix: keep Home in its workspace when starting project work
- [#207116](https://github.com/openclaw/openclaw/pull/207116) refactor(skills): load procedures for the selected operation
- [#207070](https://github.com/openclaw/openclaw/pull/207070) fix(agents): apply the role model policy to every utility consumer
- [#206616](https://github.com/openclaw/openclaw/pull/206616) feat(ios): pick a model in a system sheet, with an effort bar over the composer
- [#206816](https://github.com/openclaw/openclaw/pull/206816) improve(ui): offer a 24-message opening window for cold chats
- [#207102](https://github.com/openclaw/openclaw/pull/207102) fix(ai): every stream transport records a measured or explicitly unavailable context size
- [#206521](https://github.com/openclaw/openclaw/pull/206521) feat(ios): a sent message rises from the composer, and times show while dragging left
- [#207106](https://github.com/openclaw/openclaw/pull/207106) improve: reduce sidebar row rebuilds during child activity
- [#206987](https://github.com/openclaw/openclaw/pull/206987) fix: keep past blockers from stopping current work
- [#207037](https://github.com/openclaw/openclaw/pull/207037) fix: let backups finish when Gateway startup creates a database
- [#206514](https://github.com/openclaw/openclaw/pull/206514) feat(ios): sent videos play inline in the chat
- [#207084](https://github.com/openclaw/openclaw/pull/207084) improve: reduce memory needed to renew the Gateway lock
- [#207054](https://github.com/openclaw/openclaw/pull/207054) improve: use less agent context after a Gateway restart
- [#206758](https://github.com/openclaw/openclaw/pull/206758) fix(imap): require the authenticated From mailbox to match the allowlisted sender
- [#206519](https://github.com/openclaw/openclaw/pull/206519) feat(ios): the chat header shows the agent and title, a more menu, and fits landscape
- [#207045](https://github.com/openclaw/openclaw/pull/207045) fix: preserve source ranges in compaction requests
- [#206926](https://github.com/openclaw/openclaw/pull/206926) fix: converge plugins after every Gateway boot
- [#207040](https://github.com/openclaw/openclaw/pull/207040) fix(update): clean up rejected Git update worktrees
- [#206507](https://github.com/openclaw/openclaw/pull/206507) feat(ios): photos sit above the bubble and open in a viewer that grows from the thumbnail
- [#207005](https://github.com/openclaw/openclaw/pull/207005) improve: reduce memory needed to load the model catalog
- [#206506](https://github.com/openclaw/openclaw/pull/206506) feat(ios): messages read like the web, with quotes, softer links and Show more
- [#206641](https://github.com/openclaw/openclaw/pull/206641) refactor(ios): remove the old Agent tab and Docs screen
- [#206509](https://github.com/openclaw/openclaw/pull/206509) fix: link sessions started from a selection back to their source chat
- [#207068](https://github.com/openclaw/openclaw/pull/207068) fix: let readers finish cleanup before the shared worker host stops
- [#207025](https://github.com/openclaw/openclaw/pull/207025) refactor(subagents): simplify kill claim and ownership handling
- [#207073](https://github.com/openclaw/openclaw/pull/207073) improve: reduce peak memory during Gateway startup update checks
- [#207006](https://github.com/openclaw/openclaw/pull/207006) refactor(goals): trim continuation and loop test scaffolding
- [#207089](https://github.com/openclaw/openclaw/pull/207089) fix(codex): list the model catalog again when the reported account changes
- [#207066](https://github.com/openclaw/openclaw/pull/207066) refactor(subagents): consolidate terminal-effect retirement
- [#206997](https://github.com/openclaw/openclaw/pull/206997) test(openai): expect the progress instructions on GPT-Live sessions
- [#206996](https://github.com/openclaw/openclaw/pull/206996) chore(ci): inventory Control UI worker lifecycles
- [#206991](https://github.com/openclaw/openclaw/pull/206991) refactor(openai): send every tool strict: false on routes that accept the field
- [#206985](https://github.com/openclaw/openclaw/pull/206985) fix(ci): preserve scheduled coverage with literal pathspecs
- [#207043](https://github.com/openclaw/openclaw/pull/207043) fix: avoid premature layout reads when opening chats
- [#207064](https://github.com/openclaw/openclaw/pull/207064) refactor(subagents): consolidate registry cleanup and publication guards
- [#207047](https://github.com/openclaw/openclaw/pull/207047) fix(openai): enable GPT-6.1 Terra in the OpenClaw runtime
- [#207020](https://github.com/openclaw/openclaw/pull/207020) refactor: simplify requester wake settlement
- [#207078](https://github.com/openclaw/openclaw/pull/207078) fix(openai): report correct costs for Fast responses
- [#206532](https://github.com/openclaw/openclaw/pull/206532) feat(ios): choose a chat's access and web search in a permissions sheet
- [#207081](https://github.com/openclaw/openclaw/pull/207081) chore(ui): refresh control ui locales
- [#207027](https://github.com/openclaw/openclaw/pull/207027) refactor(subagents): unify read topology initialization
- [#207053](https://github.com/openclaw/openclaw/pull/207053) refactor(skills): separate maintainer operations and shorten CI guides
- [#207050](https://github.com/openclaw/openclaw/pull/207050) feat(status): say when the last request sent no prompt cache key
- [#207030](https://github.com/openclaw/openclaw/pull/207030) refactor(subagents): simplify announcement delivery ownership
- [#207049](https://github.com/openclaw/openclaw/pull/207049) docs: explain when Gateway suspension can interrupt running work
- [#206977](https://github.com/openclaw/openclaw/pull/206977) fix: let agents call tools on larger MCP servers in one step
- [#206975](https://github.com/openclaw/openclaw/pull/206975) refactor(test): trim plugin install and uninstall fixtures
- [#206584](https://github.com/openclaw/openclaw/pull/206584) refactor(subagents): centralize requester turn matching
- [#207052](https://github.com/openclaw/openclaw/pull/207052) fix: let the end-of-turn recovery request reuse the turn's cached prompt
- [#207061](https://github.com/openclaw/openclaw/pull/207061) refactor(plugin-sdk): keep the side-question request type inside Copilot
- [#207022](https://github.com/openclaw/openclaw/pull/207022) fix(agents): freeze every embedded dispatch and let harnesses declare who builds the prompt
- [#207033](https://github.com/openclaw/openclaw/pull/207033) refactor(test): drop unused artifact loader return
- [#207038](https://github.com/openclaw/openclaw/pull/207038) fix(skills): inventory commands fail with newer local state
- [#207028](https://github.com/openclaw/openclaw/pull/207028) fix(test): require failed plugin drain settlement
- [#206694](https://github.com/openclaw/openclaw/pull/206694) fix(doctor): skip the state schema repair when its read-only plan finds nothing
- [#204179](https://github.com/openclaw/openclaw/pull/204179) fix(sessions): clear stale compactionQualityDegraded on rewind/branch switch
- [#207041](https://github.com/openclaw/openclaw/pull/207041) fix(google): record the measured context size so Gemini sessions compact at their real occupancy
- [#206784](https://github.com/openclaw/openclaw/pull/206784) improve: start SQLite schema inspectors earlier during Gateway startup
- [#206911](https://github.com/openclaw/openclaw/pull/206911) fix(ci): clear stale restart-sentinel exports from the dependency report
- [#207031](https://github.com/openclaw/openclaw/pull/207031) fix(cron): verify recurring job backoff in the live scheduler test
- [#195894](https://github.com/openclaw/openclaw/pull/195894) fix(android): retain finalized phrases across native Talk recognition segments
- [#207003](https://github.com/openclaw/openclaw/pull/207003) improve: start the model catalog worker without loading channel schemas
- [#206993](https://github.com/openclaw/openclaw/pull/206993) fix(android): preserve Watch Live progress during audio capture
- [#206982](https://github.com/openclaw/openclaw/pull/206982) refactor(test): trim unused plugin fixture setup
- [#207008](https://github.com/openclaw/openclaw/pull/207008) improve: skip an unneeded sort in sandbox workspace scans
- [#206508](https://github.com/openclaw/openclaw/pull/206508) feat(ios): one composer button for Talk, Send and Stop, and a draft that grows to six lines
- [#201430](https://github.com/openclaw/openclaw/pull/201430) fix(install): piped install-cli.sh --onboard fails after a successful install
- [#207002](https://github.com/openclaw/openclaw/pull/207002) improve: speed up sandbox workspace checks by listing only build-output ignores
- [#207004](https://github.com/openclaw/openclaw/pull/207004) test(codex): build expected summaries from the agent-core summary constants
- [#206945](https://github.com/openclaw/openclaw/pull/206945) fix(agents): keep the provider reset in agent-route failure notices
- [#206941](https://github.com/openclaw/openclaw/pull/206941) improve: avoid copying the published model catalog when a worker starts
- [#206995](https://github.com/openclaw/openclaw/pull/206995) fix(codex): list skills by name when skills_read can load them
- [#207000](https://github.com/openclaw/openclaw/pull/207000) test(feishu): drop the stale never-iterated assertion on storage failure
- [#195678](https://github.com/openclaw/openclaw/pull/195678) fix(android): preserve repeated dictation after an earlier idle flush
- [#206988](https://github.com/openclaw/openclaw/pull/206988) fix(ai): never send an empty tools array on Chat Completions
- [#206984](https://github.com/openclaw/openclaw/pull/206984) refactor(agents): exec records its output file in the shared details.spill shape
- [#194845](https://github.com/openclaw/openclaw/pull/194845) fix(swabble): serve overwrites an unreadable config with defaults
- [#206994](https://github.com/openclaw/openclaw/pull/206994) fix(codex): discover the model catalog once per Codex cache window
- [#198996](https://github.com/openclaw/openclaw/pull/198996) fix(memory): prevent oversized chunks from heading-only files
- [#206617](https://github.com/openclaw/openclaw/pull/206617) refactor(subagents): own session display facts
- [#206983](https://github.com/openclaw/openclaw/pull/206983) fix(test): verify captured middleware arguments
- [#206962](https://github.com/openclaw/openclaw/pull/206962) fix(agents): resolve utility models against the session owner's role
- [#196880](https://github.com/openclaw/openclaw/pull/196880) fix(openrouter): BYOK turns record $0 spend when OpenRouter reports only its fee
- [#206936](https://github.com/openclaw/openclaw/pull/206936) feat(models): declare every Chat Completions compat default
- [#206900](https://github.com/openclaw/openclaw/pull/206900) fix: resume interrupted shell work without retrying it
- [#206979](https://github.com/openclaw/openclaw/pull/206979) refactor(test): remove unused command channel fixtures
- [#206969](https://github.com/openclaw/openclaw/pull/206969) fix(sessions): let a fallback run after the turn was dispatched without a projection
- [#206972](https://github.com/openclaw/openclaw/pull/206972) fix(agents): read cannot open the full output of a large tool result under workspace-only read
- [#196221](https://github.com/openclaw/openclaw/pull/196221) fix(android): name skill and audio controls and identify browser previews
- [#206981](https://github.com/openclaw/openclaw/pull/206981) chore(ui): refresh control ui locales
- [#206946](https://github.com/openclaw/openclaw/pull/206946) fix(ci): recognize passive screenshots in Browser panel checks
- [#206495](https://github.com/openclaw/openclaw/pull/206495) feat(ios): a reply's actions move into its long-press menu, with one reactions pill
- [#206948](https://github.com/openclaw/openclaw/pull/206948) test(agents): gate prompt and tool bytes on the Gateway, configured-agent and Codex routes
- [#206930](https://github.com/openclaw/openclaw/pull/206930) fix(infra): join the shared worker host at terminal native close
- [#206924](https://github.com/openclaw/openclaw/pull/206924) fix(ci): restore clean dependency checks
- [#206951](https://github.com/openclaw/openclaw/pull/206951) improve: shrink the database code loaded by the model catalog
- [#206963](https://github.com/openclaw/openclaw/pull/206963) fix: clear main's SDK budget and dead-export reds
- [#206973](https://github.com/openclaw/openclaw/pull/206973) ci: prune the provider-branching allowlist to main
- [#206968](https://github.com/openclaw/openclaw/pull/206968) refactor(test): remove duplicate requester expiry coverage
- [#206965](https://github.com/openclaw/openclaw/pull/206965) fix: stop recopying sandbox skills after idle periods
- [#206867](https://github.com/openclaw/openclaw/pull/206867) improve(gateway): avoid redundant cleanup for empty legacy auth stores
- [#206967](https://github.com/openclaw/openclaw/pull/206967) fix(agents): record the tool name of a degenerate-output abort
- [#206903](https://github.com/openclaw/openclaw/pull/206903) fix(test): detect premature background disposal
- [#206966](https://github.com/openclaw/openclaw/pull/206966) refactor(test): remove unused plugin generation fixture
- [#206878](https://github.com/openclaw/openclaw/pull/206878) ci: ratchet provider/model/URL branches on the request path
- [#206880](https://github.com/openclaw/openclaw/pull/206880) fix(agents): large tool results lose their last lines and cannot be recovered
- [#206684](https://github.com/openclaw/openclaw/pull/206684) fix(ios): setup steps push with the system back and neutral ink
- [#206956](https://github.com/openclaw/openclaw/pull/206956) fix(release): restore installer, Telegram, and native validation
- [#206496](https://github.com/openclaw/openclaw/pull/206496) feat(ios): native Settings with plain copy, one text style per role and General first
- [#206937](https://github.com/openclaw/openclaw/pull/206937) fix: keep compaction warm when the model reaches for a tool instead of summarizing
- [#206957](https://github.com/openclaw/openclaw/pull/206957) fix: wait for the visible reply in the handoff order test
- [#206964](https://github.com/openclaw/openclaw/pull/206964) fix(ci): restore worker oversized-output coverage
- [#206959](https://github.com/openclaw/openclaw/pull/206959) refactor(test): trim unused workspace alias fixture value
- [#194682](https://github.com/openclaw/openclaw/pull/194682) fix(browser): report crashed tabs as tab-scoped failures
- [#206939](https://github.com/openclaw/openclaw/pull/206939) fix(ci): match passive Browser screenshot requests
- [#206906](https://github.com/openclaw/openclaw/pull/206906) improve(cli): keep YAML parsing off text-only model startup
- [#206953](https://github.com/openclaw/openclaw/pull/206953) refactor(test): prune redundant plugin test setup
- [#206864](https://github.com/openclaw/openclaw/pull/206864) fix(ai): keep tool history native when a chat-completions request offers no tools
- [#206950](https://github.com/openclaw/openclaw/pull/206950) fix(ci): match passive Browser route reads
- [#206931](https://github.com/openclaw/openclaw/pull/206931) improve: avoid unused proxy runtime in local text replies
- [#206918](https://github.com/openclaw/openclaw/pull/206918) fix(agents): long sessions compact early after a provider compaction checkpoint
- [#206947](https://github.com/openclaw/openclaw/pull/206947) refactor(test): drop private capability spelling check
- [#206942](https://github.com/openclaw/openclaw/pull/206942) fix: keep the Gateway serving while doctor --fix prints its read-only reports
- [#206707](https://github.com/openclaw/openclaw/pull/206707) fix: stop Doctor from rewriting healthy agent databases while the Gateway is stopped
- [#206943](https://github.com/openclaw/openclaw/pull/206943) fix(test): cover process memory owner precedence
- [#206913](https://github.com/openclaw/openclaw/pull/206913) fix(macos): release profile connections held by closed chat windows
- [#206933](https://github.com/openclaw/openclaw/pull/206933) fix: keep mobile chat from jumping back when older history loads
- [#206905](https://github.com/openclaw/openclaw/pull/206905) fix: let the Gateway stop when a browser operation hangs
- [#206863](https://github.com/openclaw/openclaw/pull/206863) fix: keep the prompt cache in long tool sessions on Claude 4.5 and older models
- [#206877](https://github.com/openclaw/openclaw/pull/206877) fix: let published updates finish after Doctor reads model catalogs
- [#206934](https://github.com/openclaw/openclaw/pull/206934) fix(test): exercise plugin policy ID resolution
- [#206839](https://github.com/openclaw/openclaw/pull/206839) fix(telegram): tell users when a reply will resume after restart
- [#206735](https://github.com/openclaw/openclaw/pull/206735) refactor(openai): decide strict per tool on declared routes; drop the URL strict helper
- [#206935](https://github.com/openclaw/openclaw/pull/206935) chore(ui): refresh control ui locales
- [#206857](https://github.com/openclaw/openclaw/pull/206857) fix: keep visible handoffs before later chat turns
- [#206846](https://github.com/openclaw/openclaw/pull/206846) improve(cli): avoid loading web helpers for model commands
- [#206840](https://github.com/openclaw/openclaw/pull/206840) fix: label conversation data in system updates
- [#206896](https://github.com/openclaw/openclaw/pull/206896) fix(agents): watch every model for repetitive output
- [#158554](https://github.com/openclaw/openclaw/pull/158554) feat(linux): add desktop-managed shortcut sessions
- [#206909](https://github.com/openclaw/openclaw/pull/206909) fix: tell context engines when you run /compact and explain no-op results
- [#206923](https://github.com/openclaw/openclaw/pull/206923) fix: check that gateway turns stop when a member loses access
- [#206922](https://github.com/openclaw/openclaw/pull/206922) chore(test): remove stale SDK fixture scanner
- [#191685](https://github.com/openclaw/openclaw/pull/191685) fix(browser): restore AI snapshot query coverage
- [#200699](https://github.com/openclaw/openclaw/pull/200699) fix(ui): divide usage throughput by active time instead of session span
- [#206910](https://github.com/openclaw/openclaw/pull/206910) fix: explain why OAuth client registration failed during MCP login
- [#206920](https://github.com/openclaw/openclaw/pull/206920) fix(test): detect missing web provider artifacts
- [#206919](https://github.com/openclaw/openclaw/pull/206919) chore(i18n): refresh native locales
- [#206912](https://github.com/openclaw/openclaw/pull/206912) chore(test): remove redundant plugin checks
- [#174996](https://github.com/openclaw/openclaw/pull/174996) refactor(tests): remove duplicate macOS onboarding page checks
- [#206837](https://github.com/openclaw/openclaw/pull/206837) fix: keep PostgreSQL workers on their inherited pool
- [#206904](https://github.com/openclaw/openclaw/pull/206904) fix(gateway): defer optional session warming on lean hosts

#### 🐛 New Issues
- [#206669](https://github.com/openclaw/openclaw/issues/206669) Windows: SQLite integrity worker stays alive after delivering verdict, forcing full 300s budget wait per database at every startup `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬8
- [#207190](https://github.com/openclaw/openclaw/issues/207190) [UX]: Agent inside a Gateway session cannot stop that Gateway — 324s hang instead of a fast refusal `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬5
- [#207082](https://github.com/openclaw/openclaw/issues/207082) Android onboarding with named operator roles: QR stalls, bootstrap token rejected, node approval is a separate hidden step `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬4
- [#206808](https://github.com/openclaw/openclaw/issues/206808) [Bug]: macOS Control UI window does not move when dragging blank header `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬4
- [#207162](https://github.com/openclaw/openclaw/issues/207162) [Bug]: state/openclaw.sqlite WAL sidecar inode replaced under live Gateway on 2026.11.10 (Linux ext4) → B-tree corruption and SIGKILL `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:data-loss` `impact:crash-loop` 💬3
- [#206944](https://github.com/openclaw/openclaw/issues/206944) [Bug]: Control UI: [Bug]: Control UI: native child reaping unavailable | helper-unavailable | service child cleanup identity lost: native owner closed without kernel descendant extinction `bug` `regression` `P1` `clawsweeper:needs-info` 💬3
- [#206781](https://github.com/openclaw/openclaw/issues/206781) [Feature]: per-call toolsDeny and opt-in parentSessionKey for plugin-dispatched subagent.run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#206807](https://github.com/openclaw/openclaw/issues/206807) Automation scratch is truncated to 2000 chars in the cron prompt, and the truncation notice sends the agent searching for a document it cannot address `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#207099](https://github.com/openclaw/openclaw/issues/207099) decision_evaluate: stacked validators emit one generic "provide state and a nonempty questions map" for at least 4 distinct arg defects `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬2
- [#207098](https://github.com/openclaw/openclaw/issues/207098) decisionModels.questionTypes manifest cap (≤3: boolean/choice/score) blocks locally-supported decision types (text/number/date/box/boxes/noul) `clawsweeper:intake:feature` 💬2
- [#207058](https://github.com/openclaw/openclaw/issues/207058) Reply-session rollover hangs 15s: ownerSettlement never resolves for stalled/non-abortable runs (retain leak) `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬2
- [#207117](https://github.com/openclaw/openclaw/issues/207117) [Bug]: Internal Codex steering timeout text is delivered to the chat once per message sent during a blocking approval `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#206884](https://github.com/openclaw/openclaw/issues/206884) [Bug]: Cron run prompt's "record no_change" hint silences replies the job requires, and gives no input shape under Code Mode `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#207086](https://github.com/openclaw/openclaw/issues/207086) [Bug]: Discord splits raw markdown at 2,000 chars before converting tables, so a long table arrives partly as raw pipes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#206980](https://github.com/openclaw/openclaw/issues/206980) [Bug]: CLI backend runs never report the serving model while they work (no lifecycle model phase, activeModel stays null) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#207018](https://github.com/openclaw/openclaw/issues/207018) Update failure: candidate-doctor (2026.11.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#206921](https://github.com/openclaw/openclaw/issues/206921) [Bug]: Control UI agent creation requires an OpenAI API key even when subscription inference works `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` `P0` 💬2
- [#206691](https://github.com/openclaw/openclaw/issues/206691) [Bug]: Confusing Polish translation for workbench columns `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#206899](https://github.com/openclaw/openclaw/issues/206899) Update failure: gateway-stop-unverified (2026.10.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#206589](https://github.com/openclaw/openclaw/issues/206589) [Bug]: Worker lifecycle: replacement host worker spawned while original stays alive; dead workers left as unreaped zombies under Gateway PID `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#206834](https://github.com/openclaw/openclaw/issues/206834) One-shot CLI workers can start a second PostgreSQL pool during update status `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#206824](https://github.com/openclaw/openclaw/issues/206824) [Bug]: iOS app cannot recover local credentials after iPhone-to-iPhone migration `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:auth-provider` 💬2
- [#206751](https://github.com/openclaw/openclaw/issues/206751) System events pile up on a main session that only receives internal turns; sessions_send notify then fails with a misleading "Notification was not queued." `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#206775](https://github.com/openclaw/openclaw/issues/206775) macOS Safari: Control UI pins WebContent at 100% CPU for ~90 s (all input ignored) and intermittently renders blank `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#206585](https://github.com/openclaw/openclaw/issues/206585) [Bug]: Voice Wake routing docs and Doctor hint describe settings that do not exist `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#206689](https://github.com/openclaw/openclaw/issues/206689) Windows: paired interactive desktop node exits with GatewayLockNamespaceError while Gateway task is running (2026.11.10) `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬2
- [#206619](https://github.com/openclaw/openclaw/issues/206619) [Bug]: `infer tts set-provider --local` saves an unknown provider id and reports success `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#206654](https://github.com/openclaw/openclaw/issues/206654) Update failure: package-publication-admission (2026.10.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#207231](https://github.com/openclaw/openclaw/issues/207231) [Feature]: Add movable dividers between personal shortcuts in the Control UI navigation rail `clawsweeper:intake:feature` 💬1
- [#207222](https://github.com/openclaw/openclaw/issues/207222) [Docs Bug]: contributor skill catalog still duplicates shared and private workflows `bug` `docs` `P3` `clawsweeper:source-repro` 💬1
- [#207171](https://github.com/openclaw/openclaw/issues/207171) macOS Codex specialists can fail to start through a launcher `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#207218](https://github.com/openclaw/openclaw/issues/207218) Opening an HTML file from chat can move the target out from under the first click `clawsweeper:intake:bug` 💬1
- [#207204](https://github.com/openclaw/openclaw/issues/207204) [Docs Bug]: specialty skill procedures load for unrelated tasks `bug` `docs` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#207192](https://github.com/openclaw/openclaw/issues/207192) Skills layout test can fail before the detail page loads at 390 px `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#207198](https://github.com/openclaw/openclaw/issues/207198) Reply-session rollover hangs 15s: ownerSettlement never resolves on /stop supersede (retain leak + missing settleOwner in abortOperation) `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬1
- [#207179](https://github.com/openclaw/openclaw/issues/207179) HiDPI HTML preview test can click the outer iframe before the summary receives input `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🦪 silver shellfish` 💬1
- [#207155](https://github.com/openclaw/openclaw/issues/207155) Control UI can undo a scroll step just after older messages load `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#207161](https://github.com/openclaw/openclaw/issues/207161) [Bug]: Code Mode can return completed with empty output while a side-effectful nested exec is still running` `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#206587](https://github.com/openclaw/openclaw/issues/206587) [Feature]: Let embedding providers declare which media each model embeds, and skip the rest instead of failing memory search `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#207055](https://github.com/openclaw/openclaw/issues/207055) File logging blames a writable log file when its parent directory is unsafe `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#207021](https://github.com/openclaw/openclaw/issues/207021) Simplify ACP spawn and parent progress relay decisions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#207072](https://github.com/openclaw/openclaw/issues/207072) Dependency check reports an unused CLI dispatch export on main `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#207140](https://github.com/openclaw/openclaw/issues/207140) Update failure: requested (2026.11.10) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#207107](https://github.com/openclaw/openclaw/issues/207107) [Docs Bug]: skill entrypoints load unrelated operation procedures `bug` `docs` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#207019](https://github.com/openclaw/openclaw/issues/207019) Backup exits without an archive when Gateway startup creates a managed SQLite database during capture `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#207103](https://github.com/openclaw/openclaw/issues/207103) Feishu: bot-to-bot messages dropped with 'local mention not verifiable' despite allowBots=true `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#207095](https://github.com/openclaw/openclaw/issues/207095) [Bug]: Nested subagent's final answer is never delivered when its yielded grandchildren finish in separate partitions (already_pending → "end this turn normally" finalizes the task early) (2026.11.10) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#207096](https://github.com/openclaw/openclaw/issues/207096) Bug: Nested tool activity lifecycle error causes Feishu consumer closed (message lost) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#207065](https://github.com/openclaw/openclaw/issues/207065) Bun CI fails worker teardown after both shared-state read-capacity tests pass `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#207079](https://github.com/openclaw/openclaw/issues/207079) [Bug]: "System prompt update" notes reach the model as user messages, so a model that resists prompt injection ignores them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#207029](https://github.com/openclaw/openclaw/issues/207029) Simplify duplicate subagent announcement delivery decisions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#207042](https://github.com/openclaw/openclaw/issues/207042) Backup creation recommends retrying when no safe temp directory exists `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#207039](https://github.com/openclaw/openclaw/issues/207039) /compact in an ACP-bound conversation compacts the Gateway mirror transcript instead of the harness (handleCompactCommand has no ACP branch) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206647](https://github.com/openclaw/openclaw/issues/206647) [Bug]: Android Settings "Dictation" readiness row reports a Gateway provider that on-device dictation never uses `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#207012](https://github.com/openclaw/openclaw/issues/207012) [Feature]: Keep existing destination files while importing independent migration items `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#207034](https://github.com/openclaw/openclaw/issues/207034) Allow repository-scoped release requests from Telegram topics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#207014](https://github.com/openclaw/openclaw/issues/207014) [Feature]: Compare the requirements of two agent Template revisions before adding one `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#207009](https://github.com/openclaw/openclaw/issues/207009) [Feature]: Retry a failed automation announcement from its original run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#207011](https://github.com/openclaw/openclaw/issues/207011) [Feature]: Preview the next Workboard dispatch before starting workers `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#207010](https://github.com/openclaw/openclaw/issues/207010) [Feature]: Preview which offsite backup archives a retention policy would remove `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206566](https://github.com/openclaw/openclaw/issues/206566) [Bug]: Wear OS: Watch Live shows "Listening" while the agent is working, and the phone republishes the Talk snapshot on every audio frame `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#207013](https://github.com/openclaw/openclaw/issues/207013) [Feature]: Export a selected passage from a meeting transcript `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206989](https://github.com/openclaw/openclaw/issues/206989) [Bug]: Telegram long-running turn loses source-send capability before completion and is recorded as completed with no reply `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#206986](https://github.com/openclaw/openclaw/issues/206986) refactor(ios): use one camera capture result contract `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206974](https://github.com/openclaw/openclaw/issues/206974) [Feature]: Publish mid-turn context occupancy for CLI backends (follow-up to #164550) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206970](https://github.com/openclaw/openclaw/issues/206970) [Feature]: Owner authority scoped to a single agent (multi-person household gateways) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#206952](https://github.com/openclaw/openclaw/issues/206952) Control UI handoff-order test can match the screen-reader announcement instead of the reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206960](https://github.com/openclaw/openclaw/issues/206960) [Bug]: memory search is ~10× slower on a cold cache after a full memory reindex `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#206955](https://github.com/openclaw/openclaw/issues/206955) acpx: agent-initiated ACP turns (task-notification after a background task) are recorded in the acpx session but never delivered to the bound conversation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#206954](https://github.com/openclaw/openclaw/issues/206954) acpx: form elicitation (Claude AskUserQuestion) in a chat-bound ACP thread deadlocks the turn: the reply queues behind the run awaiting it until the watchdog aborts `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206932](https://github.com/openclaw/openclaw/issues/206932) Mobile Control UI chat jumps backward as older messages load during a drag `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206938](https://github.com/openclaw/openclaw/issues/206938) [Bug]: Managed Claude CLI drops per-tool MCP alwaysLoad hints `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206861](https://github.com/openclaw/openclaw/issues/206861) Published updates roll back after Doctor finishes reading an agent’s model catalog `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206927](https://github.com/openclaw/openclaw/issues/206927) [Docs Bug]: Uninstall docs do not say that removing a channel plugin deletes its `channels.<id>` config `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206914](https://github.com/openclaw/openclaw/issues/206914) [Bug]: 2026.11.10 gateway fails to start after upgrade when agentDir is agents/<id> (AgentDatabaseAdmissionError on deferred <agentDir>/openclaw-agent.sqlite) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#206915](https://github.com/openclaw/openclaw/issues/206915) [Docs Bug]: Tool plugin troubleshooting does not mention Tool Search, so a working plugin tool looks missing `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206894](https://github.com/openclaw/openclaw/issues/206894) Cron list and show display different stream argument lists as the same command `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206850](https://github.com/openclaw/openclaw/issues/206850) Cron alert persistence test can read the job before notification delivery settles `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206890](https://github.com/openclaw/openclaw/issues/206890) Goal composer keyboard test fails when its strip loads slowly `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206859](https://github.com/openclaw/openclaw/issues/206859) PostgreSQL Git backup tests fail before the first case under umask 0002 `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#206856](https://github.com/openclaw/openclaw/issues/206856) Model fallback stops after a GitHub read or search and a billing error `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206843](https://github.com/openclaw/openclaw/issues/206843) Gateway participation admission test sometimes counts an extra provider request `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206869](https://github.com/openclaw/openclaw/issues/206869) Early PostgreSQL finalizer test failures report only `expected undefined` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206879](https://github.com/openclaw/openclaw/issues/206879) claude-cli: a chat turn is held open indefinitely by nested or resumed background agents; the watchdog's eventual kill discards the reply and shows a misleading notice `P1` `clawsweeper:needs-live-repro` `impact:message-loss` `issue-rating: 🐚 platinum hermit` 💬1
- [#206826](https://github.com/openclaw/openclaw/issues/206826) Clean worktree lifecycle checks still expect a dirty snapshot ref `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206875](https://github.com/openclaw/openclaw/issues/206875) Telegram DM autoTopicLabel renames topics that already have a name `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#206845](https://github.com/openclaw/openclaw/issues/206845) [Feature]: Knowledge: add a Learn from Notion scribe `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#206820](https://github.com/openclaw/openclaw/issues/206820) [Bug]: Container worker rejects auto-resolved host NODE_EXTRA_CA_CERTS `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#206817](https://github.com/openclaw/openclaw/issues/206817) Knowledge Scribe can silently skip direct Telegram chats on a single-user Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#206776](https://github.com/openclaw/openclaw/issues/206776) [Bug]: WhatsApp: a small attachment that fails to decrypt crashes the gateway, and the durable ingress queue replays it on every boot `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#206772](https://github.com/openclaw/openclaw/issues/206772) [Feature]: Filter the Gateway log tail by subsystem `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206743](https://github.com/openclaw/openclaw/issues/206743) Control UI: opening an already-running Browser tab waits for the panel to load `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#206757](https://github.com/openclaw/openclaw/issues/206757) Gateway drops an allowed manual restart when the restart-intent read times out `P2` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬1
- [#206800](https://github.com/openclaw/openclaw/issues/206800) [Bug]: Opening a local Claude session in Control UI triggers “No session found” from Talk `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206727](https://github.com/openclaw/openclaw/issues/206727) [Bug]: Model-route auth mismatch is rendered as a failed sign-in, hiding the correct recovery guidance `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206789](https://github.com/openclaw/openclaw/issues/206789) Agent-side owner-approved live MCP server add (mcp set is offline-only; Settings needs a human) 💬1
- [#206767](https://github.com/openclaw/openclaw/issues/206767) [Bug]: Mobile web sidebar swipe-to-open no longer works on Android: the 32px edge strip collides with the system Back gesture `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#206771](https://github.com/openclaw/openclaw/issues/206771) [Feature]: Report per-package outcomes as JSON from plugins update `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206770](https://github.com/openclaw/openclaw/issues/206770) [Feature]: Scope channel status and live probes to one account `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206769](https://github.com/openclaw/openclaw/issues/206769) [Docs Bug]: knowledge-automation skill still teaches the retired AUTOMATION_FAILED marker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206692](https://github.com/openclaw/openclaw/issues/206692) Clarify where to log in after a scheduled Claude CLI login failure `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#206774](https://github.com/openclaw/openclaw/issues/206774) [Feature]: Filter restorable worktrees by repository in the Control UI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206773](https://github.com/openclaw/openclaw/issues/206773) [Feature]: Search the Control UI device inventory by name or ID `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206604](https://github.com/openclaw/openclaw/issues/206604) [Bug]: OpenAI realtime voice silently falls back to `alloy` when the configured voice is not a realtime voice `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206421](https://github.com/openclaw/openclaw/issues/206421) Codex harness: managed app-server's inference relay stops warm requests from reusing the prompt cache tail `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#206722](https://github.com/openclaw/openclaw/issues/206722) macOS: config routing tests should use the captured connection mode `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206648](https://github.com/openclaw/openclaw/issues/206648) [Bug]: Cron trigger scripts cannot access an MCP server added by hot reload ("MCP is not defined") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206569](https://github.com/openclaw/openclaw/issues/206569) [Bug]: xAI realtime Talk ends on any provider socket drop with no reason reaching the client `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206748](https://github.com/openclaw/openclaw/issues/206748) WhatsApp groups: quote of owner's own (non-bot) message counts as quoted_bot when bot runs on the owner's number `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206553](https://github.com/openclaw/openclaw/issues/206553) [Bug]: `infer audio transcribe` prints "No transcript returned" for a missing, oversize or tiny file and hides the reason `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206571](https://github.com/openclaw/openclaw/issues/206571) [Bug]: before_message_write edits to final replies with media are dropped from openclawDisplayContent (Control UI / WebChat) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206723](https://github.com/openclaw/openclaw/issues/206723) [Bug]: Private archive plugin remains provenance-invalid after managed artifact activation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206708](https://github.com/openclaw/openclaw/issues/206708) Hidden subagent background follow-ups reply directly into the requester's chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206702](https://github.com/openclaw/openclaw/issues/206702) Workboard: raw store.register/registerIfUpdatedAt bypass comment-body size cap; oversize comment locks card `P2` `impact:other` 💬1
- [#206698](https://github.com/openclaw/openclaw/issues/206698) [Bug]: Discord plugin gateway ws never becomes READY (macOS arm64, Node 24) — REST/socket verified working `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#206460](https://github.com/openclaw/openclaw/issues/206460) Visible children ask for direct confirmation of their spawning parent's follow-ups `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#206670](https://github.com/openclaw/openclaw/issues/206670) Correlate exec auto-reviewer failures across gateway and provider diagnostics `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206671](https://github.com/openclaw/openclaw/issues/206671) [Feature]: Let bundled local embedding providers (Ollama, llama.cpp, oMLX) embed images and audio with EmbeddingGemma 2 `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206658](https://github.com/openclaw/openclaw/issues/206658) [Bug]: Wear OS auto-speak reads only the truncated preview of long replies `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206652](https://github.com/openclaw/openclaw/issues/206652) [Bug]: Android microphone permission help for dictation and voice notes expires after 20 seconds `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206525](https://github.com/openclaw/openclaw/issues/206525) [Bug]: With auto-TTS on, Google Chat and Zalo drop the whole reply (text and audio) because the synthesized audio is a local file `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206644](https://github.com/openclaw/openclaw/issues/206644) [Docs Bug]: TTS docs misstate which channels get native voice messages and claim every other channel gets an audio attachment `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206610](https://github.com/openclaw/openclaw/issues/206610) [Feature]: Knowledge keyword search should find records when a query has an extra word or a different word form `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#206637](https://github.com/openclaw/openclaw/issues/206637) [Bug]: Feishu drops the message text when an `.ogg`/`.opus` attachment is sent with a caption `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206625](https://github.com/openclaw/openclaw/issues/206625) [Bug]: Dreaming consolidation always fails with a key/candidateKey field-name mismatch, silently degrading every promotion to append-only `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206630](https://github.com/openclaw/openclaw/issues/206630) [Bug]: Swabble `mic set` saves a device index that nothing reads; capture always uses the default input `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206618](https://github.com/openclaw/openclaw/issues/206618) HiDPI HTML preview test can click stale coordinates while loading finishes `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#206624](https://github.com/openclaw/openclaw/issues/206624) [Bug]: macOS Talk drops voice directives with short voice names such as `nova` before they reach the Gateway `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206611](https://github.com/openclaw/openclaw/issues/206611) [Feature]: Opt-in semantic search for Knowledge, using the shared memory embedding settings and falling back to keyword search `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206612](https://github.com/openclaw/openclaw/issues/206612) [Bug]: `infer tts convert --output ./voice.opus` (the docs example) writes `./voice.ogg` instead `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206591](https://github.com/openclaw/openclaw/issues/206591) Gateway cron tests can finish while a failure alert is still loading `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#206606](https://github.com/openclaw/openclaw/issues/206606) [Feature]: Export requested reasoning effort on OpenTelemetry model-call spans `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206595](https://github.com/openclaw/openclaw/issues/206595) [Bug]: [event-loop] main-thread stall reported by task "scheduler:worker-placements" (~300–360 ms blocks) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#206598](https://github.com/openclaw/openclaw/issues/206598) [Bug]: voice-call: `silenceTimeoutMs` is documented and accepted but has no effect `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#206590](https://github.com/openclaw/openclaw/issues/206590) [Bug]: voice-call: a second inbound caller is told to hold and is never connected (Enqueue with no dequeue) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206593](https://github.com/openclaw/openclaw/issues/206593) [Feature]: comfy plugin — accept `baseUrl` inside `image` / `video` / `music` (runtime already honours it) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#206581](https://github.com/openclaw/openclaw/issues/206581) Gateway startup prepares agents strictly one at a time (publication chain): 16 agents → ~12 min until the last agent is usable `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#206540](https://github.com/openclaw/openclaw/issues/206540) macOS: keep unavailable onboarding test service out of the app target `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206579](https://github.com/openclaw/openclaw/issues/206579) [Bug]: Control UI in `stt-tts` mode reports a missing speech provider as "No realtime voice provider is configured." `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#206556](https://github.com/openclaw/openclaw/issues/206556) [Bug]: A hidden subagent's reply after an exec wake is posted to the user's chat as well as handed to the parent `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#206572](https://github.com/openclaw/openclaw/issues/206572) [Bug]: Realtime voice consult with no speakable text tells the caller "I need a moment to verify" and nothing follows `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206524](https://github.com/openclaw/openclaw/issues/206524) Gateway close can check native workers before transcript readers finish stopping `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206559](https://github.com/openclaw/openclaw/issues/206559) [Bug]: Wear OS: a failed Watch Live start shows nothing or "Watch audio failed"; the phone's reason is never shown `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206555](https://github.com/openclaw/openclaw/issues/206555) [Bug]: WhatsApp spoken-reply failure sends "Media failed." and the Gateway log omits the cause `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206498](https://github.com/openclaw/openclaw/issues/206498) Unmanaged Gateway keeps its old port after a config-triggered restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206440](https://github.com/openclaw/openclaw/issues/206440) Automation exec grants prompt again after upgrading from 2026.9.37 `P2` `clawsweeper:source-repro` `impact:security` `issue-rating: 🦞 diamond lobster` 💬1
- [#206546](https://github.com/openclaw/openclaw/issues/206546) [Bug]: Native Talk does not speak replies longer than `tts.maxTextLength`; `talk.speak` fails with "Text too long" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206422](https://github.com/openclaw/openclaw/issues/206422) Subagent runs stay running after a Gateway crash restart `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206535](https://github.com/openclaw/openclaw/issues/206535) Browser: implicit target (no targetId) is profile-scoped lastTargetId, so concurrent sessions drive each other tabs and hit tab not found after owner cleanup `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#206534](https://github.com/openclaw/openclaw/issues/206534) [Bug]: voice-call: outbound streaming call stops responding to the callee after a failed opening line `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206536](https://github.com/openclaw/openclaw/issues/206536) [Bug]: voice-call: per-number `tts` override has no effect on Twilio streaming calls `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206531](https://github.com/openclaw/openclaw/issues/206531) [Bug]: iOS realtime Talk aborts the agent run when a consult takes longer than 45 seconds `P1` `impact:message-loss` `maturity:stable` 💬1
- [#206430](https://github.com/openclaw/openclaw/issues/206430) [Bug]: Forked subagents see an accepted spawn as aborted `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#206480](https://github.com/openclaw/openclaw/issues/206480) refactor(subagents): unify registry read projections `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#206505](https://github.com/openclaw/openclaw/issues/206505) [Bug]: memory-core Linux watcher falls back to chokidar permanently on mass delete; chokidar fallback follows symlink loops and exhausts memory `P1` `impact:crash-loop` 💬1
- [#206500](https://github.com/openclaw/openclaw/issues/206500) [Bug]: Queued follow-up turn is dropped for good on transient Codex preflight busy errors (no retry), 2026.11.10 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#206404](https://github.com/openclaw/openclaw/issues/206404) [Bug]: Chat image previews are encoded at 1/4 of the requested width for photos (120/240/480 px for 480/960/1920), so images look blurry in Control UI until downloaded `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206438](https://github.com/openclaw/openclaw/issues/206438) Consolidate native Codex completion delivery under the core owner `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206472](https://github.com/openclaw/openclaw/issues/206472) Consolidate native and ACP spawn admission ownership `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206445](https://github.com/openclaw/openclaw/issues/206445) [Bug]: a non-empty plugins.allow does not keep out a bundled plugin whose plugins.entries.<id>.enabled is true `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#206434](https://github.com/openclaw/openclaw/issues/206434) Cron failure notices say "Cause: unknown" for Codex usage-limit failures and the cooldown runs after them `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206428](https://github.com/openclaw/openclaw/issues/206428) [Bug]: browser `open` with `label` silently drops the label when the new tab is not listed within 2 s `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206424](https://github.com/openclaw/openclaw/issues/206424) Reduce redundant model-facing runtime metadata and stabilize prompt prefixes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#206426](https://github.com/openclaw/openclaw/issues/206426) [Bug]: Cron outcome prompt can select an unrelated connector instead of OpenClaw automations `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#206417](https://github.com/openclaw/openclaw/issues/206417) [Bug]: Telegram progress reposts after a queued follow-up and does not silence preview notifications `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#202213](https://github.com/openclaw/openclaw/issues/202213) [Bug]: 2026.11.6 refuses to read compressed session archives; please ship #192743 and #193548 in a stable release
- [#143367](https://github.com/openclaw/openclaw/issues/143367) [Bug]: After a Agent answers the chat collapses automatically
- [#193429](https://github.com/openclaw/openclaw/issues/193429) Telegram polling can hold gateway shutdown while bot initialization is pending
- [#182744](https://github.com/openclaw/openclaw/issues/182744) [Bug]: chat.send follow-up fails: Session read batch cannot reenter an active SQLite writer admission
- [#191961](https://github.com/openclaw/openclaw/issues/191961) [Bug]: Control UI: insertBefore DOMException on the session-less chat route (/chat/main/), also triggered by /new
- [#135955](https://github.com/openclaw/openclaw/issues/135955) [Bug]: Secret egress proxy ignores Node startup CA trust for upstream TLS
- [#206264](https://github.com/openclaw/openclaw/issues/206264) [Bug]: Gateway main-thread stalls grow with uptime: SQLite admission references for exited workers are re-serialized into every new Worker's environmentData
- [#201530](https://github.com/openclaw/openclaw/issues/201530) [Bug]: 2026.11.3 to 2026.11.5 update blocked by legacy sqlite_stat4 on official Node 26.13.0
- [#192772](https://github.com/openclaw/openclaw/issues/192772) [Feature]: The Zen of OpenClaw (The Lobster Sutra) — `openclaw evo` easter egg
- [#191008](https://github.com/openclaw/openclaw/issues/191008) ClawHub skill offer: Company Research Job, a paid research job for when the free search tier runs dry
- [#205162](https://github.com/openclaw/openclaw/issues/205162) [Bug]: Chat-triggered update fails with requester-revoked for a `discord:user:<id>` owner while the Discord plugin migration is pending; Gateway left stopped
- [#198152](https://github.com/openclaw/openclaw/issues/198152) [Bug]: Discord: parent’s reply after sessions_yield is generated but never posted to the channel (2026.9.36, Windows)
- [#206097](https://github.com/openclaw/openclaw/issues/206097) [Bug]: Infinite models.list ↔ chat.metadata.changed ping-pong loop causes sustained ~4.5/s catalog worker CPU storm
- [#205405](https://github.com/openclaw/openclaw/issues/205405) [Bug]: `openclaw update` to 2026.11.10 always fails `candidate-gateway-startup` when the live Gateway uses `gateway.tailscale.mode: "serve"` (port 443 ownership conflict)
- [#192364](https://github.com/openclaw/openclaw/issues/192364) [Bug]: active_node in the relocated Runtime line busts the whole prompt cache on openai-completions when the macOS app quits or is next used
- [#202479](https://github.com/openclaw/openclaw/issues/202479) [Bug]: Control UI "Latest update attempt" shows a later `update repair` run as a successful update and hides the failed update it repaired
- [#190914](https://github.com/openclaw/openclaw/issues/190914) Sharing one GPU between a local MoE engine and media renders (mmap experts + VRAM lending) — prior art?
- [#194667](https://github.com/openclaw/openclaw/issues/194667) [Bug]: Browser tool reports a crashed tab as a generic 20 s timeout and tells the agent the browser is unavailable
- [#202794](https://github.com/openclaw/openclaw/issues/202794) [Bug]: `openclaw message send --media` fails with AgentSelectionRequiredError on explicit multi-agent gateways despite valid account binding (text-only sends work)
- [#206084](https://github.com/openclaw/openclaw/issues/206084) [Bug]: `/hooks/agent` with `sessionMode: "persistent"` + `deliver: false` writes every reply twice to the session transcript (`automation-result` echo) — regression in 2026.11.5
- [#196251](https://github.com/openclaw/openclaw/issues/196251) [Bug]: Windows Native Setup Fails on "Finishing setup" Due to 10s Gateway Health Check Timeout
- [#203460](https://github.com/openclaw/openclaw/issues/203460) [Bug]: Linux installer hangs indefinitely at “Downloading NodeSource setup script” when sudo apt is stopped by SIGTTOU
- [#200782](https://github.com/openclaw/openclaw/issues/200782) release: 49e8b5d (safe-restart preflight session counts) is on main but not in any release — backport request
- [#204202](https://github.com/openclaw/openclaw/issues/204202) [Feature]: Provider request: Tadly (OpenAI-compatible, open-weight Qwen models)
- [#207099](https://github.com/openclaw/openclaw/issues/207099) decision_evaluate: stacked validators emit one generic "provide state and a nonempty questions map" for at least 4 distinct arg defects
- [#207098](https://github.com/openclaw/openclaw/issues/207098) decisionModels.questionTypes manifest cap (≤3: boolean/choice/score) blocks locally-supported decision types (text/number/date/box/boxes/noul)
- [#201388](https://github.com/openclaw/openclaw/issues/201388) [Bug]: install-cli.sh --onboard fails under the documented curl | bash form (onboarding gets the pipe, not the TTY)
- [#206691](https://github.com/openclaw/openclaw/issues/206691) [Bug]: Confusing Polish translation for workbench columns
- [#203434](https://github.com/openclaw/openclaw/issues/203434) [Bug]: claude-cli → embedded API fallback sends the uncompacted transcript over the contextTokens budget (no preflight compaction)
- [#206834](https://github.com/openclaw/openclaw/issues/206834) One-shot CLI workers can start a second PostgreSQL pool during update status
- [#204996](https://github.com/openclaw/openclaw/issues/204996) models CLI: fallbacks list and image-fallbacks list ignore --agent and print global defaults
- [#205371](https://github.com/openclaw/openclaw/issues/205371) [Bug]: doctor asks for skill_workshop in tools.allow while the skill-workshop plugin is disabled
- [#204736](https://github.com/openclaw/openclaw/issues/204736) [Bug]: Update summary counts a completed deferred model-retirement repair as a warning that needs attention
- [#206367](https://github.com/openclaw/openclaw/issues/206367) [Bug]: Control UI Environment → Changes repeatedly disappears and reappears in the same chat
- [#186753](https://github.com/openclaw/openclaw/issues/186753) Bedrock tool-returned images fail on GPT-6/6.1 Sol and Kimi K3; workaround only covers GPT-5.6 Sol
- [#194731](https://github.com/openclaw/openclaw/issues/194731) Does the small-model web tool fix (PR #169556) cover omlx/MLX providers?
- [#201751](https://github.com/openclaw/openclaw/issues/201751) [Bug]: Local TUI reports successful GitHub Copilot login but cannot use the token until restarted
- [#200558](https://github.com/openclaw/openclaw/issues/200558) [Bug]: local TUI /auth fails with a state-ownership conflict
- [#206121](https://github.com/openclaw/openclaw/issues/206121) [Bug]: infer model run --model provider/model@profile rejected by agents.defaults.modelPolicy.allow (2026.11.10)
- [#199928](https://github.com/openclaw/openclaw/issues/199928) [Bug]: ollama-cloud replies fail with 400 "max_tokens exceeds model's maximum output tokens" for models outside the curated default list (2026.11.3+)
- [#203374](https://github.com/openclaw/openclaw/issues/203374) [Bug]: Chat image generation leaves the session stuck when the session model is text-only
- [#207171](https://github.com/openclaw/openclaw/issues/207171) macOS Codex specialists can fail to start through a launcher
- [#207204](https://github.com/openclaw/openclaw/issues/207204) [Docs Bug]: specialty skill procedures load for unrelated tasks
- [#207192](https://github.com/openclaw/openclaw/issues/207192) Skills layout test can fail before the detail page loads at 390 px
- [#207179](https://github.com/openclaw/openclaw/issues/207179) HiDPI HTML preview test can click the outer iframe before the summary receives input
- [#207155](https://github.com/openclaw/openclaw/issues/207155) Control UI can undo a scroll step just after older messages load
- [#206304](https://github.com/openclaw/openclaw/issues/206304) [Bug]: claude-cli: the stranded-reply retry ("[System] Your previous reply was not delivered…") is imported as an operator message and shown in Control UI as the user's own bubble
- [#206587](https://github.com/openclaw/openclaw/issues/206587) [Feature]: Let embedding providers declare which media each model embeds, and skip the rest instead of failing memory search
- [#207055](https://github.com/openclaw/openclaw/issues/207055) File logging blames a writable log file when its parent directory is unsafe
- [#207072](https://github.com/openclaw/openclaw/issues/207072) Dependency check reports an unused CLI dispatch export on main
- [#207107](https://github.com/openclaw/openclaw/issues/207107) [Docs Bug]: skill entrypoints load unrelated operation procedures
- [#207019](https://github.com/openclaw/openclaw/issues/207019) Backup exits without an archive when Gateway startup creates a managed SQLite database during capture
- [#207065](https://github.com/openclaw/openclaw/issues/207065) Bun CI fails worker teardown after both shared-state read-capacity tests pass
- [#207029](https://github.com/openclaw/openclaw/issues/207029) Simplify duplicate subagent announcement delivery decisions
- [#204060](https://github.com/openclaw/openclaw/issues/204060) Rewind before a lossy compaction leaves /status showing "degraded history" (compactionQualityDegraded survives sessions.rewind)
- [#195844](https://github.com/openclaw/openclaw/issues/195844) android: native Talk overwrites earlier finalized phrases when recognizer restarts before silence timeout
- [#206647](https://github.com/openclaw/openclaw/issues/206647) [Bug]: Android Settings "Dictation" readiness row reports a Gateway provider that on-device dictation never uses
- [#206566](https://github.com/openclaw/openclaw/issues/206566) [Bug]: Wear OS: Watch Live shows "Listening" while the agent is working, and the phone republishes the Talk snapshot on every audio frame
- [#195638](https://github.com/openclaw/openclaw/issues/195638) Android: MicCaptureManager leaves manual-mic transcript deduplication set after final transcription or stop
- [#194842](https://github.com/openclaw/openclaw/issues/194842) [Bug]: swabble serve overwrites an unreadable config with defaults
- [#195259](https://github.com/openclaw/openclaw/issues/195259) [Bug]: OpenRouter BYOK responses record usage.cost.total = 0 while component costs are priced correctly
- [#206952](https://github.com/openclaw/openclaw/issues/206952) Control UI handoff-order test can match the screen-reader announcement instead of the reply
- [#205127](https://github.com/openclaw/openclaw/issues/205127) [Bug]: 2026.11.7: interrupted-reply recovery emits raw tool-call frames as message text
- [#206932](https://github.com/openclaw/openclaw/issues/206932) Mobile Control UI chat jumps backward as older messages load during a drag
- [#206861](https://github.com/openclaw/openclaw/issues/206861) Published updates roll back after Doctor finishes reading an agent’s model catalog
- [#200627](https://github.com/openclaw/openclaw/issues/200627) [Bug]: Usage throughput divides by wall-clock session span, while the label promises active time
- [#205250](https://github.com/openclaw/openclaw/issues/205250) [Bug]: knowledge plugin ignores agents.defaults.systemAgent on explicit-ownership multi-agent configs (no knowledge_* tools)
- [#202358](https://github.com/openclaw/openclaw/issues/202358) Smooth-scroll retarget test can reject an already-reached shortened endpoint
- [#206850](https://github.com/openclaw/openclaw/issues/206850) Cron alert persistence test can read the job before notification delivery settles
- [#206890](https://github.com/openclaw/openclaw/issues/206890) Goal composer keyboard test fails when its strip loads slowly
- [#206859](https://github.com/openclaw/openclaw/issues/206859) PostgreSQL Git backup tests fail before the first case under umask 0002
- [#206856](https://github.com/openclaw/openclaw/issues/206856) Model fallback stops after a GitHub read or search and a billing error
- [#206843](https://github.com/openclaw/openclaw/issues/206843) Gateway participation admission test sometimes counts an extra provider request
- [#206869](https://github.com/openclaw/openclaw/issues/206869) Early PostgreSQL finalizer test failures report only `expected undefined`
- [#206826](https://github.com/openclaw/openclaw/issues/206826) Clean worktree lifecycle checks still expect a dirty snapshot ref
- [#205796](https://github.com/openclaw/openclaw/issues/205796) Learn from Memory can stop before reading daily notes and cannot resume a large import
- [#205426](https://github.com/openclaw/openclaw/issues/205426) [Bug]: Linux: Doctor can't reclaim a dead gateway-owner state lease without processNamespace, so updates from 2026.9.8 roll back
- [#204834](https://github.com/openclaw/openclaw/issues/204834) [Bug]: Update to 2026.11.8 blocked: Doctor `session.import.batch` refuses valid cold transcripts (TRANSCRIPT_COLD) instead of restoring or skipping them
- [#206776](https://github.com/openclaw/openclaw/issues/206776) [Bug]: WhatsApp: a small attachment that fails to decrypt crashes the gateway, and the durable ingress queue replays it on every boot
- [#206743](https://github.com/openclaw/openclaw/issues/206743) Control UI: opening an already-running Browser tab waits for the panel to load
- [#206757](https://github.com/openclaw/openclaw/issues/206757) Gateway drops an allowed manual restart when the restart-intent read times out
- [#206727](https://github.com/openclaw/openclaw/issues/206727) [Bug]: Model-route auth mismatch is rendered as a failed sign-in, hiding the correct recovery guidance
- [#206789](https://github.com/openclaw/openclaw/issues/206789) Agent-side owner-approved live MCP server add (mcp set is offline-only; Settings needs a human)
- [#190460](https://github.com/openclaw/openclaw/issues/190460) sessions cleanup --fix-dm-scope retires DM sessions that a route binding's dmScope still routes to
- [#206692](https://github.com/openclaw/openclaw/issues/206692) Clarify where to log in after a scheduled Claude CLI login failure
- [#200034](https://github.com/openclaw/openclaw/issues/200034) [Bug]: Enter used to confirm IME text prematurely saves the rename dialog
- [#204678](https://github.com/openclaw/openclaw/issues/204678) [Bug]: A worker spawn `EACCES` from an unreadable working directory is reported as an unreadable state database
- [#204504](https://github.com/openclaw/openclaw/issues/204504) [Bug]: doctor --fix on an unparseable config tells you to run doctor --fix again
- [#204838](https://github.com/openclaw/openclaw/issues/204838) path emit reports a temporary copy of a JSON file as Markdown
- [#206331](https://github.com/openclaw/openclaw/issues/206331) [Bug]: Managed worktree cleanup repeatedly fails (git exit 128) on already-removed worktrees whose repo_root was deleted
- [#195705](https://github.com/openclaw/openclaw/issues/195705) Android: CameraCaptureManager waits out full video duration after early CameraX finalization error
- [#206421](https://github.com/openclaw/openclaw/issues/206421) Codex harness: managed app-server's inference relay stops warm requests from reusing the prompt cache tail
- [#206722](https://github.com/openclaw/openclaw/issues/206722) macOS: config routing tests should use the captured connection mode
- [#206648](https://github.com/openclaw/openclaw/issues/206648) [Bug]: Cron trigger scripts cannot access an MCP server added by hot reload ("MCP is not defined")
- [#206553](https://github.com/openclaw/openclaw/issues/206553) [Bug]: `infer audio transcribe` prints "No transcript returned" for a missing, oversize or tiny file and hides the reason
- [#205901](https://github.com/openclaw/openclaw/issues/205901) Doctor heartbeat recovery rejects an explicit multi-agent roster with `systemAgent` set
- [#206702](https://github.com/openclaw/openclaw/issues/206702) Workboard: raw store.register/registerIfUpdatedAt bypass comment-body size cap; oversize comment locks card
- [#196263](https://github.com/openclaw/openclaw/issues/196263) refactor(memory-lancedb): separate shared policy data from config parsing
- [#206460](https://github.com/openclaw/openclaw/issues/206460) Visible children ask for direct confirmation of their spawning parent's follow-ups
- [#206618](https://github.com/openclaw/openclaw/issues/206618) HiDPI HTML preview test can click stale coordinates while loading finishes
- [#206591](https://github.com/openclaw/openclaw/issues/206591) Gateway cron tests can finish while a failure alert is still loading
- [#206540](https://github.com/openclaw/openclaw/issues/206540) macOS: keep unavailable onboarding test service out of the app target
- [#206524](https://github.com/openclaw/openclaw/issues/206524) Gateway close can check native workers before transcript readers finish stopping
- [#206498](https://github.com/openclaw/openclaw/issues/206498) Unmanaged Gateway keeps its old port after a config-triggered restart
- [#206440](https://github.com/openclaw/openclaw/issues/206440) Automation exec grants prompt again after upgrading from 2026.9.37
- [#206422](https://github.com/openclaw/openclaw/issues/206422) Subagent runs stay running after a Gateway crash restart
- [#206168](https://github.com/openclaw/openclaw/issues/206168) Matrix: first encrypted send after Gateway restart misses devices added while offline (live-sync gate exists but is never called)
- [#206531](https://github.com/openclaw/openclaw/issues/206531) [Bug]: iOS realtime Talk aborts the agent run when a consult takes longer than 45 seconds
- [#206430](https://github.com/openclaw/openclaw/issues/206430) [Bug]: Forked subagents see an accepted spawn as aborted
- [#206480](https://github.com/openclaw/openclaw/issues/206480) refactor(subagents): unify registry read projections
- [#206505](https://github.com/openclaw/openclaw/issues/206505) [Bug]: memory-core Linux watcher falls back to chokidar permanently on mass delete; chokidar fallback follows symlink loops and exhausts memory
- [#206404](https://github.com/openclaw/openclaw/issues/206404) [Bug]: Chat image previews are encoded at 1/4 of the requested width for photos (120/240/480 px for 480/960/1920), so images look blurry in Control UI until downloaded
- [#201885](https://github.com/openclaw/openclaw/issues/201885) [Bug]: Telegram queued follow-up turn never shows typing (source dispatch seals the shared typing controller)
- [#206438](https://github.com/openclaw/openclaw/issues/206438) Consolidate native Codex completion delivery under the core owner
- [#206119](https://github.com/openclaw/openclaw/issues/206119) GitHub comment approvals are cancelled before their five-minute deadline
- [#202292](https://github.com/openclaw/openclaw/issues/202292) [Bug]: replies to sessions_create sessions' sessions_send reports are hidden as subagent coordination
- [#203163](https://github.com/openclaw/openclaw/issues/203163) refactor(nextcloud-talk): separate webhook decoding from queue lifecycle
- [#198978](https://github.com/openclaw/openclaw/issues/198978) [Bug]: Updating an A2A peer token removes its outbound URL and credential
- [#202669](https://github.com/openclaw/openclaw/issues/202669) [Bug]: A final reply to a steered message ends the run while the message that started it is still unanswered
- [#206082](https://github.com/openclaw/openclaw/issues/206082) Host exec memory guard sums VmRSS over the process tree, so shared memory is counted once per process and kills headless Chrome
- [#206303](https://github.com/openclaw/openclaw/issues/206303) [Bug]: Qwen Token Plan drops reasoning_effort for qwen4-max, so /think low and xhigh send the same thinking parameters
- [#206056](https://github.com/openclaw/openclaw/issues/206056) [Bug]: Codex 90 s tool watchdog kills long before_tool_call gates on workboard_complete; per-call timeoutMs is then rejected by the tool schema
- [#206141](https://github.com/openclaw/openclaw/issues/206141) [Bug]: openclaw update status with --timeout 30 or more can't read channel status (fractional timeoutMs rejected)
- [#206373](https://github.com/openclaw/openclaw/issues/206373) refactor(subagents): centralize completion delivery decisions
- [#206094](https://github.com/openclaw/openclaw/issues/206094) [Bug]: Google (Gemini) audio transcription ignores the configured language
- [#197024](https://github.com/openclaw/openclaw/issues/197024) [Bug]: code-mode `ask_user` without `awaitResults` returns `waiting`, and the card is lost when the turn ends

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 266,625 · **Open issues:** 54,910 · **Last push:** <1h ago

On November 27, 2026, Hermes Agent released version v0.23.5, a patch update that consolidates approximately 338 merged pull requests since the previous version, enhancing stability for the CLI, installers, Microsoft Store app, Docker, and Hermes Cloud. Notable merged features include the release of archytan-lite 0.1.2 and improvements to plugin host tests by splitting them into more focused suites. Among the new issues, a significant bug was reported concerning the latest update, which force installs a configured "webapp", potentially disrupting user setups. Additionally, another issue highlighted challenges with cron agent sessions failing to receive necessary tools, indicating ongoing concerns with session management.

#### 🚀 New Releases
- [v0.23.5](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.5) Hermes Agent v0.23.5

#### ✅ Merged PRs
- [#160071](https://github.com/NousResearch/hermes-agent/pull/160071) plugin-catalog: archytan-lite 0.1.2
- [#160971](https://github.com/NousResearch/hermes-agent/pull/160971) test(plugins): split plugin host tests into focused suites

#### 🐛 New Issues
- [#160977](https://github.com/NousResearch/hermes-agent/issues/160977) anthropic account usage: fraction=True scales a genuine 1% to 100% (unit guessed from magnitude) `type/bug` `comp/agent` `provider/anthropic` `P2` 💬2
- [#160877](https://github.com/NousResearch/hermes-agent/issues/160877) [Bug]: Latest update force installs / configured "webapp" `type/bug` `comp/cli` `area/config` `P2` 💬2
- [#160945](https://github.com/NousResearch/hermes-agent/issues/160945) [Bug]: cron agent sessions never get the external memory provider's tools (honcho_*), although the provider registers and activates `type/bug` `comp/agent` `comp/tools` `tool/memory` 💬2
- [#160941](https://github.com/NousResearch/hermes-agent/issues/160941) [Bug]: Docker boot reconciliation crashes when one profile's gateway_state.json holds valid JSON of the wrong shape `type/bug` `comp/cli` `P3` `area/install-update` 💬2
- [#160998](https://github.com/NousResearch/hermes-agent/issues/160998) __issue_probe__ `P3` 💬1
- [#160982](https://github.com/NousResearch/hermes-agent/issues/160982) cron lifecycle_guard false-positive: command regex matches across JSON string fields (newline anchors + order-independent pass) `type/bug` `comp/cron` `P3` 💬1
- [#160983](https://github.com/NousResearch/hermes-agent/issues/160983) Kanban: a one-shot `hermes kanban claim` is reclaimed as a failure at its TTL and trips `gave_up` `type/bug` `comp/cron` `P2` 💬1
- [#160948](https://github.com/NousResearch/hermes-agent/issues/160948) [Feature]: Attach selected session-log excerpts to chat composer as context chips (like @file attachments) `type/feature` `P3` `comp/desktop` `desktop/chat` 💬1
- [#160938](https://github.com/NousResearch/hermes-agent/issues/160938) Plugin-only dependency pins never advance: each env generation inherits the previous generation's uv.lock, silently reverting client/daemon upgrades `type/bug` `P2` `area/install-update` 💬1
- [#160997](https://github.com/NousResearch/hermes-agent/issues/160997) kanban_complete loses finished reviews when metadata keys are flattened or metadata is a scalar `type/bug` `comp/tools` `comp/cron` `comp/plugins`
- [#160996](https://github.com/NousResearch/hermes-agent/issues/160996) Group chat member never replies: relative terminal.cwd makes hosted-room session creation refuse with bare invalid_params `type/bug` `comp/agent` `comp/gateway` `tool/terminal`
- [#160992](https://github.com/NousResearch/hermes-agent/issues/160992) Feature request: Tool-free derivation from a completed turn with a verifiable receipt `type/feature` `comp/agent` `area/auth` `P3`
- [#160991](https://github.com/NousResearch/hermes-agent/issues/160991) [Bug]: Desktop Bot Chat forces /new to /compact, trapping long-lived bots in a rising ~417K-token compaction floor (807K-char summary in v0.23.4) `type/perf` `P2` `comp/desktop` `area/compression`
- [#160989](https://github.com/NousResearch/hermes-agent/issues/160989) [Desktop] Transcript renders legacy messages pinned to top (NULL display_order) and duplicates compacted-tail messages (display_order collisions) `type/bug` `P2` `comp/desktop` `area/sessions`
- [#160987](https://github.com/NousResearch/hermes-agent/issues/160987) terminal tool rejects schema-valid notify=true: args arrive double-serialized `type/bug` `comp/tools` `tool/terminal` `backend/local`
- [#160986](https://github.com/NousResearch/hermes-agent/issues/160986) [Feature]: SearXNG web search: send a signed-in provider's OAuth token `type/feature` `comp/plugins` `tool/web` `area/auth`
- [#160985](https://github.com/NousResearch/hermes-agent/issues/160985) Lean compaction: summarizer instructions sit only in the leading system message, so local models continue the agent instead of summarizing (and Hermes stores that as the summary) `type/bug` `comp/agent` `P2` `area/compression`
- [#160981](https://github.com/NousResearch/hermes-agent/issues/160981) Kanban: add a pre-spawn veto hook (`on_kanban_before_spawn`) so a plugin can hold a card before its worker exists `type/feature` `comp/cli` `comp/cron` `comp/plugins`
- [#160978](https://github.com/NousResearch/hermes-agent/issues/160978) account usage: 429 retry-after ignored, surfaced as "no credential is configured", and re-armed every 120s `type/bug` `comp/agent` `tool/file` `provider/anthropic`
- [#160970](https://github.com/NousResearch/hermes-agent/issues/160970) [Bug]: Multiplexed secondary profile delivers final responses through the default profile's bot when its adapter is detached (cross-profile misdelivery) `type/security` `comp/gateway` `platform/telegram` `P3`
- [#160968](https://github.com/NousResearch/hermes-agent/issues/160968) fix(cli): preserve assistant text sharing a message with a tool call `type/bug` `comp/cli` `P2` `area/streaming`
- [#160967](https://github.com/NousResearch/hermes-agent/issues/160967) feat(cli): built-in per-turn footer line `type/feature` `comp/cli` `area/config` `P3`
- [#160964](https://github.com/NousResearch/hermes-agent/issues/160964) Host gateway plugin-reload pass seeds marker-less dirs under profiles/, which marker-based sweep scripts then promote to real profiles `type/bug` `comp/gateway` `P3` `area/profiles`
- [#160963](https://github.com/NousResearch/hermes-agent/issues/160963) Kanban: a headless worker stopped by a consent refusal is booked as a crash and auto-blocked, instead of blocking as needs_input `type/bug` `comp/cli` `comp/cron` `tool/file`
- [#160957](https://github.com/NousResearch/hermes-agent/issues/160957) Structured improvement memory for harness edits — predicted-versus-observed outcomes under a stable root cause `type/feature` `comp/agent` `tool/memory` `tool/skills`
- [#160952](https://github.com/NousResearch/hermes-agent/issues/160952) Mid-turn user steering releases a running tool call but the turn ends with no assistant output ('result unavailable') `type/bug` `comp/agent` `tool/terminal` `P2`
- [#160944](https://github.com/NousResearch/hermes-agent/issues/160944) Deferred hygiene adoption (#97963) leaves a stale `last_prompt_tokens`, so the next turn re-compresses a freshly compacted transcript `type/perf` `comp/gateway` `P2` `area/sessions`
- [#160940](https://github.com/NousResearch/hermes-agent/issues/160940) Keep observation times and recheck reminders on compaction blockers `type/feature` `comp/agent` `P3` `area/compression`
- [#160935](https://github.com/NousResearch/hermes-agent/issues/160935) [Bug]: Android chat - Gboard (English) duplicates every committed word (composition-end + native onData both forwarded) `type/bug` `comp/tui` `P2`
- [#160934](https://github.com/NousResearch/hermes-agent/issues/160934) Kanban review-lane workers hard-crash with misleading "Kanban owner refused" when the lane-forced skill (`sdlc-review`) is missing from `$HERMES_HOME/skills` — `hermes update` does not seed new bundled skills into existing homes `type/bug` `comp/cli` `tool/skills` `P2`

#### 🔒 Closed Issues
- [#94714](https://github.com/NousResearch/hermes-agent/issues/94714) [Bug]: hermes sessions browse exits with 'Cancelled.' when pressing arrow keys
- [#160998](https://github.com/NousResearch/hermes-agent/issues/160998) __issue_probe__

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,721 · **Open issues:** 11,238 · **Last push:** <1h ago

On November 28, 2026, there were no new releases for vLLM; however, several significant changes were merged. Key updates included bug fixes addressing NCCL communicators and improved support for Intel V1 tests on larger GPUs. Notably, the Rust frontend was enhanced to serve `/v1/systemone` with next-token reads, while performance optimizations were made, including the integration of a new kernel for Qwen4Exp and fusion in the CUTLASS block-FP8 linear operation. Among the newly reported issues, a critical bug was identified in the Frontend where `chat_template_kwargs["tools"]` caused a KeyError that triggered HTTP 500 errors during rendering in DeepSeek, highlighting ongoing challenges in the system's tool management.

#### ✅ Merged PRs
- [#64335](https://github.com/vllm-project/vllm/pull/64335) [Bugfix][RL] Destroy the previous NCCL communicator when the weight-transfer engine is re-initialized
- [#70344](https://github.com/vllm-project/vllm/pull/70344) [XPU][CI] Run Intel V1 test on 24+ GiB GPUs
- [#70077](https://github.com/vllm-project/vllm/pull/70077) [Rust Frontend] Serve /v1/systemone with next-token reads
- [#70341](https://github.com/vllm-project/vllm/pull/70341) [Refactor][Weight Transfer] Expose transport hooks on sparse NCCL engines
- [#70356](https://github.com/vllm-project/vllm/pull/70356) [CI] Size torch CPU threads in tests to the container CPU quota
- [#64752](https://github.com/vllm-project/vllm/pull/64752) [ROCm] Skip RTLD_GLOBAL libtorch_cpu.so promotion when HSA_TOOLS_LIB is set
- [#68806](https://github.com/vllm-project/vllm/pull/68806) [Bugfix][ROCm][MiniMax-M3] Drop the gfx942 native QK-norm/RoPE fallback
- [#70160](https://github.com/vllm-project/vllm/pull/70160) [Perf][Qwen4Exp] Add SM100 tcgen05 fused HC down+inject+SiLU kernel
- [#66438](https://github.com/vllm-project/vllm/pull/66438) [−0.2 min][CI] Speed up image builds: arm64 CPU registry cache + sccache, uncapped Rust relink
- [#69778](https://github.com/vllm-project/vllm/pull/69778) [Perf] Fuse SiLU-and-mul with group-128 FP8 input quant for the CUTLASS block-FP8 linear
- [#70271](https://github.com/vllm-project/vllm/pull/70271) [Rust Frontend][DeepSeek V4.1] Encode special-token spellings in client text as plain text
- [#69995](https://github.com/vllm-project/vllm/pull/69995) [Bugfix][Transformers backend] Apply checkpoint converters to the renamed weights
- [#70355](https://github.com/vllm-project/vllm/pull/70355) [CI] Skip the MoE entry cleanup after tests that skipped themselves
- [#70412](https://github.com/vllm-project/vllm/pull/70412) [CI] Make the DGX Spark MoE Kernels step optional
- [#69064](https://github.com/vllm-project/vllm/pull/69064) [Feature][Spec Decode] Enable VLM hidden states extraction
- [#70234](https://github.com/vllm-project/vllm/pull/70234) [Bugfix][Attention] Use Triton for Gemma 4 batch invariance
- [#69603](https://github.com/vllm-project/vllm/pull/69603) [ROCm][CI] Bound the logprob shift in the per-token-head KV accuracy test; run all prompts for int4
- [#67274](https://github.com/vllm-project/vllm/pull/67274) [Bugfix][Docker] Keep vLLM's OpenTelemetry versions when installing KV connectors
- [#70277](https://github.com/vllm-project/vllm/pull/70277) [Bugfix][CuTe DSL] Use inline PTX in cute_utils.mbarrier
- [#62536](https://github.com/vllm-project/vllm/pull/62536) [ROCm] Update ROCm to 10.1 and MORI to v1.2.4 and amd-smi fixes
- [#58375](https://github.com/vllm-project/vllm/pull/58375) Add Mooncake EP all-to-all backend
- [#69666](https://github.com/vllm-project/vllm/pull/69666) [Bugfix] Use the public Gluon reinterpret API for Inkling 2
- [#70020](https://github.com/vllm-project/vllm/pull/70020) [Bugfix] Correct /v1/decisions score probabilities
- [#70036](https://github.com/vllm-project/vllm/pull/70036) [MyPy][7/N] Enforce mypy for remaining standalone test directories
- [#70374](https://github.com/vllm-project/vllm/pull/70374) [Misc] Move Hugging Face references from `vllm-project` to `vllm` org
- [#51621](https://github.com/vllm-project/vllm/pull/51621) [Misc] Remove stale level reference from CompilationConfig validator
- [#68968](https://github.com/vllm-project/vllm/pull/68968) [MoE][FP8] Let out-of-tree platforms register FP8 MoE experts
- [#65427](https://github.com/vllm-project/vllm/pull/65427) [Kernel][Perf] Do not split rows no longer than k in `top_k_per_row_decode`
- [#70121](https://github.com/vllm-project/vllm/pull/70121) [Bugfix][Frontend] Rebuild echoed text when the tokenizer truncates the prompt

#### 🐛 New Issues
- [#70385](https://github.com/vllm-project/vllm/issues/70385) [Bug][Frontend]: chat_template_kwargs["tools"] overrides server-built tools and triggers HTTP 500 KeyError on DeepSeek renderers `tool-calling` `deepseek` `kimi` 💬6
- [#70350](https://github.com/vllm-project/vllm/issues/70350) [Bug]: ECMooncakeConnector producer never releases per-consumer-address ZMQ sockets/topology cache; fd exhaustion when consumer pod IPs change `bug` 💬4
- [#70373](https://github.com/vllm-project/vllm/issues/70373) [Bug]: With `--reasoning-parser qwen3`, `enable_thinking: false` requests get special tokens (`<|im_end|>`, `<|endoftext|>`) in `content`, even with `skip_special_tokens: true` `bug` `tool-calling` 💬3
- [#70406](https://github.com/vllm-project/vllm/issues/70406) [Bug]: VLLM_BATCH_INVARIANT=1 loads tuned LoRA shrink configs since #70197 `batch-invariance` 💬2
- [#70418](https://github.com/vllm-project/vllm/issues/70418) [Bug]: Mistral Large 4 fused Triton kernels turn NaN/inf into -0.0 (`_round_bf16` carries a NaN into the sign bit) `mistral` 💬2
- [#70417](https://github.com/vllm-project/vllm/issues/70417) [Bug]: Multi-module MTP draft-input shift kernels race between warps (`_shift_input_embeds_kernel`, `_shift_input_ids_kernel`) 💬1
- [#70408](https://github.com/vllm-project/vllm/issues/70408) [Bug]: KV a connector loads is prefix-cached as if vLLM computed it, so requests with the same tokens reuse it 💬1
- [#70428](https://github.com/vllm-project/vllm/issues/70428) [Bug]: GLM-4.7 structural tag builder returns HTTP 500 for a non-dict tool property schema `rocm` `structured-output` `tool-calling` `glm` 💬1
- [#70416](https://github.com/vllm-project/vllm/issues/70416) [Tracking Issue] Stabilizing DSA: correctness and scaling to long-context
- [#70298](https://github.com/vllm-project/vllm/issues/70298) [Bug]: Inkling 2 Mini: tool call written as XML text or never emitted, even with the official parsers (RTX 5090, image built for archs 10.0/10.3) `tool-calling` `inkling` 💬1
- [#70403](https://github.com/vllm-project/vllm/issues/70403) [Feature][ROCm]: ShardQ for GLM-5.3-Flash `feature request` `rocm` `glm` 💬1
- [#70401](https://github.com/vllm-project/vllm/issues/70401) [Feature][ROCm]: ShardQ for DeepSeek V4.1 `feature request` `rocm` `deepseek` 💬1
- [#70402](https://github.com/vllm-project/vllm/issues/70402) [Feature][ROCm]: ShardQ for DeepSeek V4 `feature request` `rocm` `deepseek` 💬1
- [#70330](https://github.com/vllm-project/vllm/issues/70330) [Bug]: Untyped tool parameters return null as the string "null" (Python parsers; Rust frontend returns null) `tool-calling` `rust` 💬1
- [#70381](https://github.com/vllm-project/vllm/issues/70381) [Bug]: [vllm._custom_ops] awq_dequantize: ignores row stride on non-contiguous qweight tensor 💬1
- [#70375](https://github.com/vllm-project/vllm/issues/70375) [Bug]: [vllm._custom_ops] reshape_and_cache(_flash): ignores head stride on strided K/V and corrupts KV cache 💬1
- [#70378](https://github.com/vllm-project/vllm/issues/70378) [Bug]: [vllm._custom_ops] rms_norm: cudaErrorMisalignedAddress on non-16B-aligned strided FP16/BF16 input 💬1
- [#70376](https://github.com/vllm-project/vllm/issues/70376) [Bug]: [vllm._custom_ops] topk_softmax / topk_sigmoid: overwrites out-of-slice memory and fails on empty batch 💬1
- [#70379](https://github.com/vllm-project/vllm/issues/70379) [Bug]: [vllm._custom_ops] grouped_topk: silently returns wrong routing weights on non-contiguous scores tensor 💬1
- [#70370](https://github.com/vllm-project/vllm/issues/70370) [Bug]: Rust frontend audio processor pads every clip to the longest in a batch, costing item count × longest clip `rust` 💬1
- [#70328](https://github.com/vllm-project/vllm/issues/70328) [Bug]: Intermittent IMA in MLA on SM120 with cuBLAS 13.5.x / 13.6.0: nvjet GEMM over-reads the interleaved W_UK / W_UV `torch.bmm` operands (deterministic repro, possibly #64266) 💬1
- [#70424](https://github.com/vllm-project/vllm/issues/70424) [RFC]: let the served model write its own KV cache from per-layer inputs `quantization`
- [#70450](https://github.com/vllm-project/vllm/issues/70450) [Bug]: Rust vllm-bench --num-runs summary shows 0 for metrics that weren't measured `rust`
- [#70410](https://github.com/vllm-project/vllm/issues/70410) [RFC]: cross-model KV translation (speculative encoding) `quantization`
- [#70425](https://github.com/vllm-project/vllm/issues/70425) [Bug]: Mamba prefill checkpoint is exported into a relocated speculative block at prefix_cache_retention_interval=0
- [#70420](https://github.com/vllm-project/vllm/issues/70420) [Bug]: TRITON_MLA returns its decode LSE in bf16, so the decode-context-parallel (DCP) combine loses precision (up to ~2.5% output error) `kimi`
- [#70419](https://github.com/vllm-project/vllm/issues/70419) [Bug]: INT4 per-token-head KV cache ignores chunked local attention and R-SWA masks in Triton unified attention
- [#70415](https://github.com/vllm-project/vllm/issues/70415) [Bug]: Model Runner V2 `_bias_kernel` can set an allowed token to -inf when `allowed_token_ids` and `logit_bias` overlap (no barrier after the allowed-token restore)
- [#70398](https://github.com/vllm-project/vllm/issues/70398) [Bug]: nemotron_v3 / granite_thinking_parser ignore force_nonempty_content set via --default-chat-template-kwargs
- [#70383](https://github.com/vllm-project/vllm/issues/70383) [Bug]: [vllm._custom_ops] hadacore_transform: overwrites out-of-slice memory and fails on empty batch `quantization`
- [#70382](https://github.com/vllm-project/vllm/issues/70382) [Bug]: [vllm._custom_ops] convert_fp8: overwrites memory outside strided output slice and returns wrong values
- [#70380](https://github.com/vllm-project/vllm/issues/70380) [Bug]: [vllm._custom_ops] shuffle_rows: ignores row stride on non-contiguous input and reads out-of-slice memory
- [#70377](https://github.com/vllm-project/vllm/issues/70377) [Bug]: [vllm._custom_ops] top_k_per_row_prefill: overwrites out-of-slice memory and returns wrong indices
- [#70367](https://github.com/vllm-project/vllm/issues/70367) [Bug]: Engine core accepts a malformed multimodal PlaceholderRange from an engine client and fails in the scheduler `multi-modality` `scheduler`
- [#70336](https://github.com/vllm-project/vllm/issues/70336) [Bug]: Inkling 2 renderer closes text-array assistant continuations and mishandles assistant refusal history `inkling`
- [#70306](https://github.com/vllm-project/vllm/issues/70306) [Feature]: Disk-backed Engram tables for HY4 Flash
- [#70283](https://github.com/vllm-project/vllm/issues/70283) [Performance][Multimodal] Encoder DP: single-image batches still pay shard + padded all-gather while other ranks idle `multi-modality`
- [#70287](https://github.com/vllm-project/vllm/issues/70287) [Bug]: With VLLM_USE_NCCL_SYMM_MEM=1, all-reduces over non-TP groups (e.g. DCP) silently return the TP group's sum `bug`
- [#70296](https://github.com/vllm-project/vllm/issues/70296) [Bug]: Skipping prompt logprob rows can erase the decoded text of a scored Unicode token `bug`
- [#70291](https://github.com/vllm-project/vllm/issues/70291) [Bug]: Per-request speculative decoding metrics disappear when a custom stop string ends generation `bug` `speculative-decoding`
- [#70275](https://github.com/vllm-project/vllm/issues/70275) [Bug]: Custom JSONL object prompts are sent as strings by the pooling benchmark `pooling`
- [#70273](https://github.com/vllm-project/vllm/issues/70273) [Bug]: Muse-Glimmer-30B-NVFP4 hangs or crashes with "illegal memory access" on RTX PRO 5000 Blackwell when another process on the same GPU is under load `bug` `quantization`

#### 🔒 Closed Issues
- [#47367](https://github.com/vllm-project/vllm/issues/47367) [Bug]: Deploying the GLM5.2-nvfp4 model using the 0.24.0 image , the model occasionally outputs "!!!!!!!!!!!!!!!!!" in the thinking phase,
- [#47159](https://github.com/vllm-project/vllm/issues/47159) [Bug]: triton_w4a16_gemm assert qzeros.shape == (K // group_size, N // 8) fails on GPTQ models
- [#47456](https://github.com/vllm-project/vllm/issues/47456) [RFC]: Design a shared warmup infrastructure for JITs
- [#48054](https://github.com/vllm-project/vllm/issues/48054) [Bug]: DeepSeek-V4 sparse-SWA decode passes flashinfer 0.6.14-only kwargs, but the pin is 0.6.13
- [#47292](https://github.com/vllm-project/vllm/issues/47292) [Bug]: RuntimeError: UVA is not available
- [#48395](https://github.com/vllm-project/vllm/issues/48395) [Bug]: can not start vllm 0.25.0 natively in jetson agx orin 64G jetpack 6.2.2
- [#48396](https://github.com/vllm-project/vllm/issues/48396) [Bug]: ~11% long-prefill regression v0.24.0 -> v0.25.x on SM120, traced to the FlashInfer 0.6.13 bump (#46683)
- [#49089](https://github.com/vllm-project/vllm/issues/49089) [Bug]: assert req_id in self.requests in Scheduler._update_from_kv_xfer_finished kills the engine on late KV xfer-finished for an already-failed request
- [#46937](https://github.com/vllm-project/vllm/issues/46937) [RFC]: TorchComms DeviceCommunicator for VLLM
- [#47365](https://github.com/vllm-project/vllm/issues/47365) [Bug] NVFP4 flashinfer_b12x MoE produces empty/garbage output under pipeline or tensor parallel on SM120 — regression between dev552 (06-29) and dev601 (06-30)
- [#48445](https://github.com/vllm-project/vllm/issues/48445) [RFC]: Support SparDA-style decoupled Forecast projection for lookahead KV prefetch in sparse attention
- [#49101](https://github.com/vllm-project/vllm/issues/49101) [Bug]: Failed: Cuda error /workspace/csrc/custom_all_reduce.cuh:455 'invalid argument'
- [#47769](https://github.com/vllm-project/vllm/issues/47769) [Bug]: MXFP4 MoE Marlin fallback crashes with illegal memory access on Hopper (DeepSeek V4, TP+EP) — non-tile-aligned intermediate size
- [#48099](https://github.com/vllm-project/vllm/issues/48099) [Feature]: Make kv cache dtype releated to platform
- [#48803](https://github.com/vllm-project/vllm/issues/48803) [Bug]: "There are significant spike issues in TTFT" with Kimi-K2.6-NVFP4
- [#49112](https://github.com/vllm-project/vllm/issues/49112) [Bug]: Speculative decoding with a hybrid draft model (LFM2/LFM2.5 short_conv) fails — drafter requires all draft layers in one KV cache group
- [#69766](https://github.com/vllm-project/vllm/issues/69766) [CI Failure]: test_per_token_head_kv_cache_accuracy[int4_per_token_head] on MI355 DPX since #66547 (int4 not stable at a flat position)
- [#48747](https://github.com/vllm-project/vllm/issues/48747) [Feature]: Can we add base PCP support for hybrid attention?
- [#48766](https://github.com/vllm-project/vllm/issues/48766) [Performance]: Hy3 MTP speculative decoding is slower than plain decode — HYV3MTP is missing `@support_torch_compile`
- [#49090](https://github.com/vllm-project/vllm/issues/49090) [RFC][SpecDecode] Move MTP completeness validation to the weight-update transaction boundary
- [#49116](https://github.com/vllm-project/vllm/issues/49116) [Bug]: Transcription streaming uses Chat Completions SSE format instead of OpenAI transcript events
- [#70232](https://github.com/vllm-project/vllm/issues/70232) [Bug]: Gemma 4 falls back to FA2 and fails warmup with batch invariance on H100
- [#70418](https://github.com/vllm-project/vllm/issues/70418) [Bug]: Mistral Large 4 fused Triton kernels turn NaN/inf into -0.0 (`_round_bf16` carries a NaN into the sign bit)
- [#66192](https://github.com/vllm-project/vllm/issues/66192) [Bug]: SM100 default prefill CUDA-graph grid (up to 8192 tokens, #63406) adds ~5 GiB/GPU graph memory and breaks max_model_len=256000 startup for Qwen3.8-2.4T-A95B-FP8 TP16 on GB200
- [#68165](https://github.com/vllm-project/vllm/issues/68165) [Bug]: DeepSeek V4.1 eager image span assembly triggers GPU sync guard on SM80
- [#40444](https://github.com/vllm-project/vllm/issues/40444) [Bug]: Per-attention-head quantization is currently available only with the Flash Attention backend and requires the calibration pathway provided by llm-compressor.
- [#69660](https://github.com/vllm-project/vllm/issues/69660) [Bug]: Inkling-2-Mini fails with Triton 3.9 in cu135-nightly: missing _reinterpret
- [#70119](https://github.com/vllm-project/vllm/issues/70119) [Bug][Frontend]: /v1/completions echo returns the untruncated text prompt when truncate_prompt_tokens is set without truncation_side
- [#69451](https://github.com/vllm-project/vllm/issues/69451) [Bug]: Inkling 2: Triton %16 recompiles of prefill attention and attention prologue stall the engine for seconds after a cold start

### SGLang (`sgl-project/sglang`)

**Stars:** 39,143 · **Open issues:** 7,520 · **Last push:** <1h ago

On November 28, 2026, SGLang did not release any new versions; however, several significant changes were made through merged pull requests. Notably, the new feature supporting DSA cache layer splitting with NIXL (#52863) and improvements to the Rust toolchain query serialization (#53408) were implemented, alongside various fixes and performance optimizations. Key updates included resolving issues related to CUDA JPEG decoding in multimodal tasks (#51822) and enhancing KV cache sharding for the Rust tree core in mem_cache (#53553). Additionally, a notable bug was reported (#53615), indicating that Jet-Nemotron with unified memory faces a challenge in correctly writing back linear-attention states, emphasizing ongoing concerns in memory management.

#### ✅ Merged PRs
- [#52863](https://github.com/sgl-project/sglang/pull/52863) [Feat] disaggregation: Support DSA cache layer splitting with NIXL
- [#46614](https://github.com/sgl-project/sglang/pull/46614) [Refactor] pd: Extract NixlTransport behind the common Transport interface
- [#53408](https://github.com/sgl-project/sglang/pull/53408) [Fix] unified_cache: Serialize the Rust toolchain query so every rank picks the same TreeCore
- [#51822](https://github.com/sgl-project/sglang/pull/51822) [Fix] multimodal: Decode standard CUDA JPEG inputs as RGB
- [#53553](https://github.com/sgl-project/sglang/pull/53553) [Feat] mem_cache: Support the Rust tree core for KV cache sharding
- [#51778](https://github.com/sgl-project/sglang/pull/51778) [Fix] gemma4: Scope Triton image masks to sliding layers
- [#53647](https://github.com/sgl-project/sglang/pull/53647) [Perf] xing4_0: Cache tool indices across streaming tool blocks
- [#53658](https://github.com/sgl-project/sglang/pull/53658) [Fix] beam-search: Address K/V past 2^31 elements in the shared-context kernel
- [#53646](https://github.com/sgl-project/sglang/pull/53646) [Refactor] speculative: Pass the EAGLE draft graph's greedy variant explicitly
- [#52410](https://github.com/sgl-project/sglang/pull/52410) [Fix] sampling: Keep the custom logit processor when SynthID fuses the decode sample
- [#53665](https://github.com/sgl-project/sglang/pull/53665) [Fix] srt/speculative: Use the allocator’s new-token count to guard DFlash KV length copies
- [#53622](https://github.com/sgl-project/sglang/pull/53622) [Perf] sgl-router: encode DeepSeek-V4/V4.1 prompts through the L1 tokenizer cache
- [#44806](https://github.com/sgl-project/sglang/pull/44806) [Fix] minimax-h3: fix AdaLN cache slot leak on preparation failure
- [#43917](https://github.com/sgl-project/sglang/pull/43917) [Perf] dsa: Split topk across CTAs for small CUDA BF16 TileLang sparse decode
- [#53656](https://github.com/sgl-project/sglang/pull/53656) [CI] permissions: Narrow delegated access to shared runners
- [#49571](https://github.com/sgl-project/sglang/pull/49571) [Feat] flashinfer-autotune: Capture decode graphs from stored tactics only
- [#50032](https://github.com/sgl-project/sglang/pull/50032) [Perf] scheduler: Cut per-step host work in the batch-1 speculative decode loop
- [#40583](https://github.com/sgl-project/sglang/pull/40583) [Perf] [AMD] norm: Pick the wave count per hidden size in diffusion FlyDSL norm
- [#53654](https://github.com/sgl-project/sglang/pull/53654) [Chore] release: Cherry-pick [CI] mem_cache: Count the multicast gather copies as enqueued instead of profiled to release/v1.0.0 (#53132)
- [#53653](https://github.com/sgl-project/sglang/pull/53653) [Test] function_call: Drop the inkling2 sample from the chunk-boundary test on release/v1.0.0
- [#53454](https://github.com/sgl-project/sglang/pull/53454) [Fix] scheduler: Apply one request length policy across the scheduler, the tokenizer manager, and the Rust frontend
- [#53651](https://github.com/sgl-project/sglang/pull/53651) [Doc] blogs: Sync LMSYS SGLang blog cards
- [#52551](https://github.com/sgl-project/sglang/pull/52551) [Fix] speculative: Add an NGRAM draft-input builder for PD decode
- [#47674](https://github.com/sgl-project/sglang/pull/47674) [Feat] multimodal: GLM-5.3 token-space strategy for images (sglang-miles)
- [#47920](https://github.com/sgl-project/sglang/pull/47920) [Fix] qwen: Support prefill CP with whole-expert EP and optimize NIXL KV transfers
- [#53115](https://github.com/sgl-project/sglang/pull/53115) [Feat] xing4_0: Forward unknown tool calls and number calls by response order
- [#48890](https://github.com/sgl-project/sglang/pull/48890) [Perf] diffusion/lora: Keep base weights only while merged
- [#53634](https://github.com/sgl-project/sglang/pull/53634) [CI] coverage: Give the editable install time to build the Rust extensions
- [#53642](https://github.com/sgl-project/sglang/pull/53642) [CI] sgl-router: Ignore RUSTSEC-2026-0600 in cargo deny
- [#53632](https://github.com/sgl-project/sglang/pull/53632) [Test] ci: Use loopback for single-node Mooncake and torchrun tests
- [#52406](https://github.com/sgl-project/sglang/pull/52406) [Refactor] sampling: Run decode and every speculative verify through one stage order
- [#53608](https://github.com/sgl-project/sglang/pull/53608) [Test] custom-all-reduce: Pass get_all_reduce_config's spx keyword through the hier test stub
- [#53633](https://github.com/sgl-project/sglang/pull/53633) [CI] lychee: Exclude x.com and deeplearning.ai from the nightly link check
- [#53594](https://github.com/sgl-project/sglang/pull/53594) [CI] diffusion: Fix Python startup during model prefetch
- [#52223](https://github.com/sgl-project/sglang/pull/52223) [Feat] diffusion/minimax_h3: Serve pi-H3 2/4-step adapters with decoder-free video
- [#51728](https://github.com/sgl-project/sglang/pull/51728) [Feat] weight_cache: Add the load-diff format: walk, storages, values as data
- [#32848](https://github.com/sgl-project/sglang/pull/32848) [Feat] diffusion/lingbot: Support image conditioning, T2I and refinement
- [#39236](https://github.com/sgl-project/sglang/pull/39236) [Perf] disaggregation: Vectorize staging gather/scatter for aligned KV buffers
- [#52935](https://github.com/sgl-project/sglang/pull/52935) [Feat] cookbook: Add per-recipe ratings to the deployment configurator
- [#52661](https://github.com/sgl-project/sglang/pull/52661) [Refactor] diffusion: [sglang-miles] Record the rollout denoising env from the pos and neg forward kwargs each denoising stage pushes
- [#52961](https://github.com/sgl-project/sglang/pull/52961) [Feat] observability: Report cumulative storage-prefetch token counters in the load snapshot
- [#52964](https://github.com/sgl-project/sglang/pull/52964) [Fix] server-args: Raise the prefill token budget to the chunked prefill size
- [#53294](https://github.com/sgl-project/sglang/pull/53294) [Feat] rust-server: Warm a VLM up with its image on both frontends, P/D prefill included
- [#43480](https://github.com/sgl-project/sglang/pull/43480) [Perf] [AMD] DSV4.1: Fuse wo_b's GEMM with its all-reduce via mori cco on gfx950
- [#53453](https://github.com/sgl-project/sglang/pull/53453) [Refactor] attention: Rename length names that collide with the row-width vocabulary
- [#53464](https://github.com/sgl-project/sglang/pull/53464) [Refactor] mem_cache: Size every decode's write-ahead with one set of functions
- [#53602](https://github.com/sgl-project/sglang/pull/53602) [Doc] cookbook: Refresh NEW tags on diffusion pages
- [#53171](https://github.com/sgl-project/sglang/pull/53171) [Doc] cookbook: Rename the VLA section to Action Models and add a Robotics & Physical AI index
- [#53312](https://github.com/sgl-project/sglang/pull/53312) [Fix] diffusion: Warm up each BCG benchmark run at its own quality
- [#52899](https://github.com/sgl-project/sglang/pull/52899) [Perf] diffusion: Build every head-group copy width when the Ulysses pipeline first plans
- [#53452](https://github.com/sgl-project/sglang/pull/53452) [Perf] diffusion/magi2: Run the text encoder on the GPU, streamed layer by layer

#### 🐛 New Issues
- [#53615](https://github.com/sgl-project/sglang/issues/53615) [Bug] Jet-Nemotron/JetVLM with --enable-unified-memory never write back their linear-attention state (plain @input_guard on FusedRecurrentUpdateFunction) 💬2
- [#53571](https://github.com/sgl-project/sglang/issues/53571) [Bug] mxfp4: the SM120 CUTLASS preprocessing assumes GPT-OSS pair-wise w13 rows and hardcodes its SwiGLU scalars 💬2
- [#53617](https://github.com/sgl-project/sglang/issues/53617) [Bug] round_bf16_to_fp32 turns NaN into 0 (or finite values) in the bit-exact diffusion and page2d RoPE Triton kernels 💬1
- [#53582](https://github.com/sgl-project/sglang/issues/53582) [Bug] [sgl_kernel] ggml_mul_mat_a8 / ggml_mul_mat_vec_a8: wrong values on non-contiguous activation input 💬1
- [#53584](https://github.com/sgl-project/sglang/issues/53584) [Bug] [sgl_kernel] shuffle_rows / apply_shuffle_mul_sum: ignores stride and overwrites out-of-slice memory 💬1
- [#53485](https://github.com/sgl-project/sglang/issues/53485) [CI] test_scheduler_recv_skipper.py fails on main: 'Scheduler' object has no attribute 'server_args' 💬1
- [#53688](https://github.com/sgl-project/sglang/issues/53688) [CI] test_rust_server_startup fails on main: No prompt fits: max_req_input_len=-2 (context_len=4) since #53454
- [#53683](https://github.com/sgl-project/sglang/issues/53683) [Bug] hy_v4 `_topk` hard-depends on flashinfer JIT (needs nvcc) and blocks decode CUDA-graph capture on non-CUDA accelerators
- [#53652](https://github.com/sgl-project/sglang/issues/53652) [Bug] ROCm Qwen3.5 MoE FP8: decode CUDA graph capture fails at batch size > 1
- [#53618](https://github.com/sgl-project/sglang/issues/53618) [Bug] Experimental TRT-LLM dense LoRA: sgemm_lora_b_fwd contracts over unwritten shrink columns, NaN outputs for adapters with rank < max_lora_rank
- [#53616](https://github.com/sgl-project/sglang/issues/53616) [Bug] lightning_attention prefill (linear_backend="minimax") applies one decay step too few to the carried state: wrong outputs after token 256 and on continuation chunks
- [#53597](https://github.com/sgl-project/sglang/issues/53597) [Bug] sampling: a custom_params that is not an object of scalars crashes the scheduler
- [#53585](https://github.com/sgl-project/sglang/issues/53585) [CI] diffusion-4-gpu-b200 fails on main: HF 401 on gated FLUX.2-dev and ideogram-4-fp8
- [#53583](https://github.com/sgl-project/sglang/issues/53583) [Bug] [sgl_kernel] moe_sum: overwrites memory outside strided output slice and returns wrong values
- [#53579](https://github.com/sgl-project/sglang/issues/53579) [Bug] [sgl_kernel] sgl_per_token_quant_fp8: triggers cudaErrorMisalignedAddress on non-16B-aligned offset view
- [#53578](https://github.com/sgl-project/sglang/issues/53578) [Bug] [sgl_kernel] rotary_embedding: SIGFPE divide-by-zero on empty batch (num_tokens=0)
- [#53577](https://github.com/sgl-project/sglang/issues/53577) [Bug] [sgl_kernel] apply_token_bitmask_inplace_cuda: SIGFPE divide-by-zero when batch or indices is empty
- [#53570](https://github.com/sgl-project/sglang/issues/53570) [Feature] sgl-router should honor the live PD role on EndpointSlice rediscovery
- [#53568](https://github.com/sgl-project/sglang/issues/53568) [Bug] two servers on one host with attention DP: derived TCP port blocks overlap, second server dies with ZMQError Address already in use
- [#53567](https://github.com/sgl-project/sglang/issues/53567) [Bug] attention DP + speculative decoding: a DP rank with zero local tokens enters _forward_prefill_batch and crashes
- [#53563](https://github.com/sgl-project/sglang/issues/53563) [CI] extra-b-test-8-gpu-h200 fails on main: socket.gaierror resolving the runner hostname in MooncakeTestServices
- [#53560](https://github.com/sgl-project/sglang/issues/53560) [RFC] Runtime Scheduling Policy Registration and Hot Switching
- [#53552](https://github.com/sgl-project/sglang/issues/53552) [CI] Shared GITHUB_TOKEN quota (15k/h) runs out daily at ~08:55–09:20 UTC; CI jobs fail with "API rate limit exceeded for installation"
- [#53547](https://github.com/sgl-project/sglang/issues/53547) [Bug] Qwen3.6-27B response_template loses the reasoning end token for counting and JSON Schema
- [#53510](https://github.com/sgl-project/sglang/issues/53510) Cache-aware scheduling builds a temporary radix tree for a fixed-length waiting-queue comparison

#### 🔒 Closed Issues
- [#21846](https://github.com/sgl-project/sglang/issues/21846) [Roadmap]: SGLang Distributed KVCache System For Agentic Workload
- [#26751](https://github.com/sgl-project/sglang/issues/26751) [Bug] Gemma-4 mm: single non-RGB image crashes vision tower and kills scheduler (mat1 256 vs 768)
- [#40920](https://github.com/sgl-project/sglang/issues/40920) [RFC] SGLang renderer
- [#41466](https://github.com/sgl-project/sglang/issues/41466) [Bug] `/generate` does not type-check its fields: one wrong-typed field takes the server down
- [#38975](https://github.com/sgl-project/sglang/issues/38975) [Bug] GDN packed decode and KDA replay decode round sigmoid(beta) through bf16; recurrent-state drift accumulates with context length
- [#41463](https://github.com/sgl-project/sglang/issues/41463) [Bug] Falcon-H1 with tied word embeddings cannot serve a single request, tied LM head's `.float()` upcasts the embedding in place
- [#41467](https://github.com/sgl-project/sglang/issues/41467) [Bug] wrong typed `session_params` field in one /generate request can crash server
- [#41482](https://github.com/sgl-project/sglang/issues/41482) [Bug] `top_k`, `logprobs` and `n` have no upper bound, one request can DoS the server
- [#41576](https://github.com/sgl-project/sglang/issues/41576) [RFC] Dynamic Latent Consensus Governor for DeepSeek-R1 to Reduce KV-Cache Holding Time by 4.5x.
- [#41514](https://github.com/sgl-project/sglang/issues/41514) [RFC / HiCache] Same-node peer L2 sharing across DP ranks via /dev/shm
- [#41510](https://github.com/sgl-project/sglang/issues/41510) AttributeError: 'ComponentData' object has no attribute 'parent'
- [#53617](https://github.com/sgl-project/sglang/issues/53617) [Bug] round_bf16_to_fp32 turns NaN into 0 (or finite values) in the bit-exact diffusion and page2d RoPE Triton kernels
- [#53471](https://github.com/sgl-project/sglang/issues/53471) [CI] check-changes fails on main: base-c-test-2-gpu-gb300 needs 2 shards but has only 1 test file
- [#53485](https://github.com/sgl-project/sglang/issues/53485) [CI] test_scheduler_recv_skipper.py fails on main: 'Scheduler' object has no attribute 'server_args'
- [#52059](https://github.com/sgl-project/sglang/issues/52059) [Bug] [XPU] Startup crash on WSL2 iGPU: torch.xpu.mem_get_info() requires Level Zero Sysman, unavailable under GPU-PV
- [#51777](https://github.com/sgl-project/sglang/issues/51777) [Bug] Gemma 4 Triton image masks make full-attention layers bidirectional
- [#52514](https://github.com/sgl-project/sglang/issues/52514) [Bug] NGRAM speculative decoding on a PD decode worker crashes at startup since v0.5.14: `build_disagg_draft_input` has no NGRAM branch (works on v0.5.13)
- [#53413](https://github.com/sgl-project/sglang/issues/53413) [CI] diffusion: fast_hunyuan_video VAE decode ~1.8 s slower at quality="exact" since #50806 (H100 perf flake)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 136,468 · **Open issues:** 2,668 · **Last push:** <1h ago

Today, llama.cpp released versions b12823 and b12822, with key updates including a CUDA fix for ADD_ID launch issues with more than 65535 tokens and a Vulkan optimization for handling empty conv3d kernels. Merged pull requests featured a significant improvement in caching the device type during CUDA initialization, and enhanced UI functionalities such as markdown table rendering. Among the newly reported issues, a critical compile bug (#33169) was highlighted, where test dependencies were found to break non-test builds, indicating potential disruptions for developers.

#### 🚀 New Releases
- [b12823](https://github.com/ggml-org/llama.cpp/releases/tag/b12823) b12823
- [b12822](https://github.com/ggml-org/llama.cpp/releases/tag/b12822) b12822
- [b12821](https://github.com/ggml-org/llama.cpp/releases/tag/b12821) b12821
- [b12820](https://github.com/ggml-org/llama.cpp/releases/tag/b12820) b12820
- [b12819](https://github.com/ggml-org/llama.cpp/releases/tag/b12819) b12819
- [b12818](https://github.com/ggml-org/llama.cpp/releases/tag/b12818) b12818
- [b12816](https://github.com/ggml-org/llama.cpp/releases/tag/b12816) b12816
- [b12815](https://github.com/ggml-org/llama.cpp/releases/tag/b12815) b12815
- [b12814](https://github.com/ggml-org/llama.cpp/releases/tag/b12814) b12814
- [b12812](https://github.com/ggml-org/llama.cpp/releases/tag/b12812) b12812

#### ✅ Merged PRs
- [#33205](https://github.com/ggml-org/llama.cpp/pull/33205) ui: show only the mention label in generated conversation titles
- [#33142](https://github.com/ggml-org/llama.cpp/pull/33142) CUDA: cache the device type at init
- [#33195](https://github.com/ggml-org/llama.cpp/pull/33195) ui: draw markdown tables with row rules instead of a grid
- [#33062](https://github.com/ggml-org/llama.cpp/pull/33062) [Inkling 2] Support nvfp4 "pass-through"
- [#33162](https://github.com/ggml-org/llama.cpp/pull/33162) CUDA: fix ADD_ID launch for more than 65535 tokens
- [#33106](https://github.com/ggml-org/llama.cpp/pull/33106) vulkan: handle empty conv3d kernel, fix validation error
- [#32860](https://github.com/ggml-org/llama.cpp/pull/32860) vulkan: further optimize coopmat2 GDN
- [#31849](https://github.com/ggml-org/llama.cpp/pull/31849) ggml-zdnn: make zTensor memory usage visible for fitting
- [#28898](https://github.com/ggml-org/llama.cpp/pull/28898) ggml: support quant scales for fp8 and nvfp4
- [#33122](https://github.com/ggml-org/llama.cpp/pull/33122) convert : preserve pooler for BertForSequenceClassification
- [#30139](https://github.com/ggml-org/llama.cpp/pull/30139) graph : read recurrent states in place instead of copying (#28841)
- [#33136](https://github.com/ggml-org/llama.cpp/pull/33136) cuda : fix NVFP4 MMQ y_scale over-read in the stream-k fixup
- [#33133](https://github.com/ggml-org/llama.cpp/pull/33133) moe-cache : support experts selected on another backend
- [#33179](https://github.com/ggml-org/llama.cpp/pull/33179) llama : remove unused llm_tensor enums
- [#33175](https://github.com/ggml-org/llama.cpp/pull/33175) metal : check all fused nodes for concurrency
- [#32608](https://github.com/ggml-org/llama.cpp/pull/32608) ui: share conversations to Hugging Face datasets as agent traces
- [#33166](https://github.com/ggml-org/llama.cpp/pull/33166) hexagon: fix INT HMX correctness
- [#32898](https://github.com/ggml-org/llama.cpp/pull/32898) vulkan: add FA compact bias support for Inkling 2 Mini

#### 🐛 New Issues
- [#33169](https://github.com/ggml-org/llama.cpp/issues/33169) Compile bug: vite.config.ts: test dependencies break non-test builds `bug-unconfirmed` 💬2
- [#33176](https://github.com/ggml-org/llama.cpp/issues/33176) server: shutdown blocks for sse_ping_interval (30s) when a completion stream is in flight 💬1
- [#33228](https://github.com/ggml-org/llama.cpp/issues/33228) Eval bug: Bug: Intel Arc Vulkan 64B alignment assertion failure (ggml-vulkan.cpp:6464) with Inkling-2-Mini DSpark drafter (-ngld 99) `bug-unconfirmed`
- [#33224](https://github.com/ggml-org/llama.cpp/issues/33224) Misc. bug: On Metal, elu operation is inaccurate for small negative inputs `bug-unconfirmed`
- [#33218](https://github.com/ggml-org/llama.cpp/issues/33218) Eval bug: ggml-impl.h:337 (ggml_hash_find_or_insert) abort on Phi-4 when both K and V caches are quantized (fixed by LLAMA_ATTN_ROT_DISABLE=1) `bug-unconfirmed`
- [#33215](https://github.com/ggml-org/llama.cpp/issues/33215) Misc. bug: per-channel FP8 is silently dequantized to F16, with no warning and no way to detect it `bug-unconfirmed`
- [#33206](https://github.com/ggml-org/llama.cpp/issues/33206) hybrid models: failed seq_rm surfaces as a misleading M-RoPE position error
- [#33200](https://github.com/ggml-org/llama.cpp/issues/33200) Eval bug: CUDA supports_op returns true for non-contiguous XIELU / LEAKY_RELU views then aborts with GGML_ASSERT `bug-unconfirmed`
- [#33199](https://github.com/ggml-org/llama.cpp/issues/33199) Eval bug: CUDA ggml_unary_inplace overwrites out-of-slice padding and skips strided rows across 21 unary ops `bug-unconfirmed`
- [#33196](https://github.com/ggml-org/llama.cpp/issues/33196) CUDA: `GGML_ASSERT(convert_func != nullptr)` in `ggml_cuda_mul_mat_cublas_impl` for non-contiguous K-quant src0 on GPUs without DP4A (Pascal sm_60)
- [#33191](https://github.com/ggml-org/llama.cpp/issues/33191) Eval bug: olmo2 YaRN files with rope.scaling.attn_factor get YaRN's attention factor twice (OLMo 3 7B Think)
- [#33185](https://github.com/ggml-org/llama.cpp/issues/33185) Eval bug: SYCL oneDNN flash attention crash with Gemma 4 `bug-unconfirmed`
- [#33184](https://github.com/ggml-org/llama.cpp/issues/33184) Misc. bug: GGML_ASSERT at ggml-backend-meta.cpp:1171 — Qwen3.8 (GDN) model, `--split-mode tensor`, 2x Arc Pro B60, SYCL `bug-unconfirmed`

#### 🔒 Closed Issues
- [#31111](https://github.com/ggml-org/llama.cpp/issues/31111) Misc. bug: MUL_MAT: wrong results, exceeds tolerance; gfx1200 HIP/ROCm; f16 + deterministic.
- [#28234](https://github.com/ggml-org/llama.cpp/issues/28234) Compile bug: Vulkan builds on Termux fail to optimize shaders.
- [#26123](https://github.com/ggml-org/llama.cpp/issues/26123) Hexagon: dspqueue_read failed: 0x0000002e during graph compute on Snapdragon 8 Gen 2 (v73), reproducible at 4B+ params, works fine at 1B
- [#32444](https://github.com/ggml-org/llama.cpp/issues/32444) Eval bug: CUDA: ADD_ID fails with more than 65535 tokens (invalid configuration argument)
- [#32969](https://github.com/ggml-org/llama.cpp/issues/32969) Feature Request: Make Parse PDF as image DPI configurable
- [#33132](https://github.com/ggml-org/llama.cpp/issues/33132) Multi-GPU: `cudaGetDeviceProperties` called on every cross-device input copy when tensor overrides are used (up to ~8x slowdown)
- [#33101](https://github.com/ggml-org/llama.cpp/issues/33101) Eval bug: Inkling 2 Mini crashes when using `--moe-cache-mib`
- [#30377](https://github.com/ggml-org/llama.cpp/issues/30377) gpt-oss-120b: tools + response_format json_schema combined -> model loops in reasoning channel, never emits tool call (terminates at token budget, tool_calls=0)
- [#30554](https://github.com/ggml-org/llama.cpp/issues/30554) Eval bug: Vulkan] Poor Flash Attention performance on AMD RDNA2 (RX 6600 XT) under Windows
- [#33109](https://github.com/ggml-org/llama.cpp/issues/33109) BERT conversion silently drops the pooler, so a `BertForSequenceClassification`'s logits are not reproduced and its ranking changes

### Ollama (`ollama/ollama`)

**Stars:** 188,338 · **Open issues:** 4,809 · **Last push:** <1h ago

On November 28, 2026, Ollama saw a routine maintenance day with no new releases. The most notable development was the merging of PR #19953, which involved a bump to the llama-server. Several new issues were reported, including #19957 regarding provider-side admission for external GPU workload coordination, which raises critical questions about resource management. Other significant issues highlighted include #19960, addressing the `/v1/chat/completions` endpoint that omits top_logprobs when none are requested, and #19945, which points out that invalid request option types currently return an HTTP 500 error instead of the more appropriate HTTP 400 response.

#### ✅ Merged PRs
- [#19953](https://github.com/ollama/ollama/pull/19953) bump llama-server

#### 🐛 New Issues
- [#19957](https://github.com/ollama/ollama/issues/19957) Question: provider-side admission for external GPU workload coordination `question` 💬1
- [#19960](https://github.com/ollama/ollama/issues/19960) /v1/chat/completions logprobs leave out top_logprobs when none are requested `bug` 💬1
- [#19965](https://github.com/ollama/ollama/issues/19965) `max_tokens: 0` on `/v1/completions` generates text instead of returning an empty completion 💬1
- [#19945](https://github.com/ollama/ollama/issues/19945) Invalid request option types return HTTP 500 instead of HTTP 400 💬1
- [#19950](https://github.com/ollama/ollama/issues/19950) Apps page shows Claude Desktop as Claude Code `bug` 💬1
- [#19942](https://github.com/ollama/ollama/issues/19942) `/api/chat` truncation re-renders and re-tokenizes the whole remaining history once per dropped message 💬1
- [#19967](https://github.com/ollama/ollama/issues/19967) gemma4:12b: thinking does not terminate on some GSM8K problems; `content` empty even at max_tokens 8192 (OpenAI API)
- [#19962](https://github.com/ollama/ollama/issues/19962) MLX runner over-evicts saved history on 64 GB Mac: long chat keeps only the first 8191 tokens with ~17 GiB free (0.40.18) `bug`
- [#19958](https://github.com/ollama/ollama/issues/19958) /v1/responses stream: reasoning after text reuses the open message's output_index `bug`
- [#19955](https://github.com/ollama/ollama/issues/19955) cogito parser: content starts with the newlines after </think> when they arrive in their own chunk `bug`
- [#19952](https://github.com/ollama/ollama/issues/19952) mlxrunner: chat follow-ups on hybrid models re-read up to 8k tokens `bug`
- [#19949](https://github.com/ollama/ollama/issues/19949) `/v1/systemone`: autotrust-decision models ignore noul `criteria` and score level texts
- [#19948](https://github.com/ollama/ollama/issues/19948) deepseek3 parser: content starts with the newlines after </think> when they arrive in their own chunk `bug`
- [#19947](https://github.com/ollama/ollama/issues/19947) /v1/messages: tool_result messages reach the template without a tool name `bug`
- [#19941](https://github.com/ollama/ollama/issues/19941) launch: proposal to support Morningstar CLI

#### 🔒 Closed Issues
- [#15758](https://github.com/ollama/ollama/issues/15758) Ollama's Cloud doesn't report number of cached tokens
- [#17510](https://github.com/ollama/ollama/issues/17510) deepseek-v4-flash:0731 (local)
- [#14228](https://github.com/ollama/ollama/issues/14228) Provide smaller release packages without cuda
- [#19923](https://github.com/ollama/ollama/issues/19923) Did you and;/or DO. YOU GUYS have the ability to run updates on my local sestup
- [#18379](https://github.com/ollama/ollama/issues/18379) deepseek-v4.1-flash Downloadable Model

### LiteLLM (`BerriAI/litellm`)

**Stars:** 64,049 · **Open issues:** 5,618 · **Last push:** <1h ago

On November 28, 2026, LiteLLM released version v1.108.20, a new Long Term Support (LTS) release, with available updates for maintaining the latest patches. Significant merged features include enhancements to the gateway that enable native support for Claude on Vertex AI, Bedrock, and Mantle, along with improvements in handling API keys for credential resolution. Crucial bug fixes were made, including a resolution to preserve team member caps for default budgets and ensuring proper message translations in the Python model. Among the newly reported issues, a particularly notable bug (#54855) has emerged, where responses generated by Anthropic are incorrectly reordered, causing conversation handling failures.

#### 🚀 New Releases
- [v1.108.20](https://github.com/BerriAI/litellm/releases/tag/v1.108.20) 1.108.20 (LTS)

#### ✅ Merged PRs
- [#54613](https://github.com/BerriAI/litellm/pull/54613) feat(gateway): serve claude on vertex ai, bedrock and mantle natively
- [#54612](https://github.com/BerriAI/litellm/pull/54612) feat(gateway): drain a bedrock invoke stream after its client leaves, as python does
- [#54611](https://github.com/BerriAI/litellm/pull/54611) feat(gateway): resolve bedrock and vertex credentials without an api key
- [#54610](https://github.com/BerriAI/litellm/pull/54610) fix(gateway): send messages models python translates to python
- [#54921](https://github.com/BerriAI/litellm/pull/54921) feat(redis-stores): flush_local on every native store so a test harness can reset a live process
- [#54933](https://github.com/BerriAI/litellm/pull/54933) fix(proxy): preserve team member caps for blank default budgets
- [#54934](https://github.com/BerriAI/litellm/pull/54934) fix(docker-fips): add audioop's compiled module to the FIPS image's reviewed inventory
- [#54764](https://github.com/BerriAI/litellm/pull/54764) chore(cost-map): date retired xai grok-code-fast alias and 0825 snapshot rows
- [#54606](https://github.com/BerriAI/litellm/pull/54606) fix(rust-auth): hash Azure and GCP credential cache keys in the AWS-LC FIPS module
- [#54932](https://github.com/BerriAI/litellm/pull/54932) test(spend): expect no spend row for requests that fail authentication
- [#54918](https://github.com/BerriAI/litellm/pull/54918) test(integration): keep the database down during readiness checks
- [#54931](https://github.com/BerriAI/litellm/pull/54931) test(integration): keep the database down during readiness checks
- [#54916](https://github.com/BerriAI/litellm/pull/54916) test(ui): recover the federation edit menu after rerender on LTS
- [#54917](https://github.com/BerriAI/litellm/pull/54917) test(e2e): use Opus 5.5 for Bedrock Converse WebSearch on LTS
- [#54928](https://github.com/BerriAI/litellm/pull/54928) test(observability): expect the Langfuse media reference in a refused request's logged input
- [#54771](https://github.com/BerriAI/litellm/pull/54771) fix(cost-map): retire provider model names the newly installed cost map no longer serves
- [#54767](https://github.com/BerriAI/litellm/pull/54767) refactor(ui): migrate deployment and routing forms to form kit
- [#54423](https://github.com/BerriAI/litellm/pull/54423) fix(rust-auth): hash virtual keys in the AWS-LC FIPS module
- [#54563](https://github.com/BerriAI/litellm/pull/54563) fix(ui): send internal users off Home when page visibility hides it
- [#54329](https://github.com/BerriAI/litellm/pull/54329) feat(gateway): price messages calls for their spend log rows
- [#54285](https://github.com/BerriAI/litellm/pull/54285) build(docker): build the Rust bridge with its fips feature in the FIPS image
- [#54608](https://github.com/BerriAI/litellm/pull/54608) fix(proxy): stop writing spend-log rows for requests that fail authentication
- [#54809](https://github.com/BerriAI/litellm/pull/54809) refactor(mcp): type oauth token endpoint outcomes
- [#54807](https://github.com/BerriAI/litellm/pull/54807) refactor(mcp): type refresh coordinator outcomes
- [#54919](https://github.com/BerriAI/litellm/pull/54919) test(spend): lock the app group row first in the app group test cleanup
- [#54745](https://github.com/BerriAI/litellm/pull/54745) feat(cost-map): add Databricks Gemini Nano Banana 2.1, Gemini 4 Neon and Kimi K3.1 Pro Fast
- [#54806](https://github.com/BerriAI/litellm/pull/54806) test(mcp): format oauth regression test files
- [#54903](https://github.com/BerriAI/litellm/pull/54903) build(deps): remove beautifulsoup4 and the unrun Bedrock pricing scraper
- [#53934](https://github.com/BerriAI/litellm/pull/53934) fix(langfuse): upload base64 media and export its reference from the langfuse callback
- [#54902](https://github.com/BerriAI/litellm/pull/54902) ci(osv): extend the expired Python 3.10 ignores on lts/1.108.x to 2027-02-01
- [#54892](https://github.com/BerriAI/litellm/pull/54892) chore: bump LiteLLM to 1.108.20 on LTS
- [#54486](https://github.com/BerriAI/litellm/pull/54486) fix(mcp): support opt-in path matching for aggregate resource reads
- [#41463](https://github.com/BerriAI/litellm/pull/41463) feat(ui): keep cost optimization tabs and filters in the URL
- [#54559](https://github.com/BerriAI/litellm/pull/54559) refactor(ui): move notification settings forms onto the form kit
- [#54629](https://github.com/BerriAI/litellm/pull/54629) refactor(ui): move membership forms onto the form kit
- [#53262](https://github.com/BerriAI/litellm/pull/53262) fix(proxy): backport audit log fixes to lts/1.108.x (#50929, #53305)
- [#54514](https://github.com/BerriAI/litellm/pull/54514) perf(mcp): skip unchanged scheduled catalog rebuilds
- [#54868](https://github.com/BerriAI/litellm/pull/54868) feat(auth-store): read the user a sign-in resolves to without linking it
- [#54783](https://github.com/BerriAI/litellm/pull/54783) refactor(gateway): move prompt_estimate out of host, since it answers no hostcall
- [#54780](https://github.com/BerriAI/litellm/pull/54780) refactor(gateway): prepare the auth host to read rows beside the key
- [#54841](https://github.com/BerriAI/litellm/pull/54841) fix(auth): read a JWT team list claim sent as text as one team
- [#54846](https://github.com/BerriAI/litellm/pull/54846) feat(rust): port the team_id_upsert team insert to repositories
- [#54828](https://github.com/BerriAI/litellm/pull/54828) feat(rust): insert a team for team_id_upsert in auth-store
- [#54825](https://github.com/BerriAI/litellm/pull/54825) feat(rust): add and remove a team member in auth-store
- [#54845](https://github.com/BerriAI/litellm/pull/54845) feat(rust): port the team member removal and the default team join to repositories
- [#54823](https://github.com/BerriAI/litellm/pull/54823) feat(rust): write a user's sign-in insert, email backfill and role in auth-store
- [#54822](https://github.com/BerriAI/litellm/pull/54822) feat(rust): read a user by sign-in in auth-store
- [#54830](https://github.com/BerriAI/litellm/pull/54830) refactor: remove fresh mutable-ok suppressions from Datadog and rerank headers
- [#54557](https://github.com/BerriAI/litellm/pull/54557) refactor(ui): migrate MCP operations forms to the form kit
- [#52994](https://github.com/BerriAI/litellm/pull/52994) fix(ui): localize hardcoded English left in the zh-CN dashboard
- [#54788](https://github.com/BerriAI/litellm/pull/54788) refactor(rust): log from the core crates with tracing instead of host calls
- [#54797](https://github.com/BerriAI/litellm/pull/54797) fix(rust): make the rust-test and rust-wheel CI jobs pass again
- [#54794](https://github.com/BerriAI/litellm/pull/54794) test(pass-through): expect the stored preserve_trace_context flag on a created endpoint
- [#41471](https://github.com/BerriAI/litellm/pull/41471) feat(ui): persist mcp servers tabs, filters, open server and tool state in the URL
- [#54792](https://github.com/BerriAI/litellm/pull/54792) test(s3): wait for the fake bucket to record a timed-out upload before counting attempts
- [#54785](https://github.com/BerriAI/litellm/pull/54785) test(unit): make 21 flaky unit tests deterministic
- [#54790](https://github.com/BerriAI/litellm/pull/54790) fix(responses): free a read-on stream without a cycle collection (lts/1.108.x)

#### 🐛 New Issues
- [#54855](https://github.com/BerriAI/litellm/issues/54855) [Bug]: /v1/responses with Anthropic reorders thinking and text blocks on replay, Claude 5.x then rejects the conversation (thinking block bound to a different conversation) `llm translation` 💬3
- [#54893](https://github.com/BerriAI/litellm/issues/54893) [Bug]: Clearing a team's Default Key Duration in the UI saves "" and breaks member key creation `bug` 💬2
- [#54804](https://github.com/BerriAI/litellm/issues/54804) [Bug]: Gemini image usage drops thoughtsTokenCount again in v1.110.2 (regression of #52220) `llm translation` 💬2
- [#54889](https://github.com/BerriAI/litellm/issues/54889) [Bug]: Responses Hosted Shell does not translate unified file IDs in environment.file_ids `llm translation` 💬1
- [#54803](https://github.com/BerriAI/litellm/issues/54803) [Bug]: Vertex image generations bill the standard rate when Vertex serves Priority/Flex (v1.110.2 regression) `llm translation` 💬1
- [#54848](https://github.com/BerriAI/litellm/issues/54848) [Bug]: code_interpreter interception logs the follow-up usage on the outer call; responses double-counts it, chat drops the first model call (v1.109.0) `bug` `llm translation` 💬1
- [#54802](https://github.com/BerriAI/litellm/issues/54802) [Bug]: Bundled Lens UI calls Lens 0.2 paths; Lens 0.3+ serves them under /lens/admin, so the dashboard gets 404s 💬1
- [#54793](https://github.com/BerriAI/litellm/issues/54793) [Bug]: Managed GET /v1/batches lists passthrough-managed batches (list_user_batches filters only file_purpose and owner) `llm translation` 💬1
- [#54912](https://github.com/BerriAI/litellm/issues/54912) [Bug]: DeepInfra rerank always costs $0 because its per-token billing is priced per search
- [#54907](https://github.com/BerriAI/litellm/issues/54907) [Bug]: Saving user settings can overwrite another user's data `bug` `llm translation`
- [#54881](https://github.com/BerriAI/litellm/issues/54881) [Feature]: Delete investigations button `enhancement`
- [#54896](https://github.com/BerriAI/litellm/issues/54896) [Bug]: ollama_chat tool results reach Ollama without tool_name, so gpt-oss sees "functions. to=assistant" and cannot tell parallel results apart `llm translation`
- [#54860](https://github.com/BerriAI/litellm/issues/54860) [Bug]: Azure chat completions can skip InternalServerErrorRetries on HTTP 500 `llm translation`
- [#54849](https://github.com/BerriAI/litellm/issues/54849) [Bug]: tools/list on /mcp waits for the legacy subscription listener past the 30 s handler timeout `claude code`
- [#54838](https://github.com/BerriAI/litellm/issues/54838) [Feature]: Add Native Gnani AI Timbre Text-to-Speech Support (REST, SSE, WebSocket) `llm translation`
- [#54819](https://github.com/BerriAI/litellm/issues/54819) [Bug]: Disabling local token counting still runs synchronous stream chunk assembly on mid-stream disconnects and can trigger Pod NotReady `llm translation`

#### 🔒 Closed Issues
- [#23005](https://github.com/BerriAI/litellm/issues/23005) [Bug] UI very slow in version 1.82.x
- [#28071](https://github.com/BerriAI/litellm/issues/28071) [Bug]: token_counter raises ValueError for OpenAI-style video_url content blocks
- [#37810](https://github.com/BerriAI/litellm/issues/37810) [Bug]: keys with key_type="llm_api" get 403 on /model/info, /v1/model/info, /v2/model/info and /model_group/info
- [#54804](https://github.com/BerriAI/litellm/issues/54804) [Bug]: Gemini image usage drops thoughtsTokenCount again in v1.110.2 (regression of #52220)
- [#37929](https://github.com/BerriAI/litellm/issues/37929) [Feature]: local HOL Guard policy guardrail for MCP tool calls
- [#37948](https://github.com/BerriAI/litellm/issues/37948) Proxy exits 0 when a worker fails startup validation under --num_workers > 1
- [#37970](https://github.com/BerriAI/litellm/issues/37970) [Feature]: Prometheus gauges for team-scoped rate limits
- [#54803](https://github.com/BerriAI/litellm/issues/54803) [Bug]: Vertex image generations bill the standard rate when Vertex serves Priority/Flex (v1.110.2 regression)
- [#54453](https://github.com/BerriAI/litellm/issues/54453) [Bug]: Home page still shown to internal users after being unchecked in Internal User Page Visibility
- [#54881](https://github.com/BerriAI/litellm/issues/54881) [Feature]: Delete investigations button

### Unsloth (`unslothai/unsloth`)

**Stars:** 80,396 · **Open issues:** 607 · **Last push:** <1h ago

On November 28, 2026, there were no new releases for Unsloth. Significant developments included the merging of several impactful pull requests, such as the introduction of live denoise previews for MiniMax-H3 video (#20094) and enhancements to preserve cue boundaries in CR-delimited WebVTT files (#19473). The merge of pull request #20089 improved packed expert stacks' reliability when using the fully_shard feature, while #20066 streamlined installations for Apple Silicon users by updating to Torch 2.14.1. Additionally, a new issue (#19943) was raised proposing the addition of DPO training, indicating ongoing interest in expanding model capabilities.

#### ✅ Merged PRs
- [#19473](https://github.com/unslothai/unsloth/pull/19473) Studio Translate: preserve cue boundaries in CR-delimited WebVTT files
- [#20094](https://github.com/unslothai/unsloth/pull/20094) Studio: live denoise preview for MiniMax-H3 video (fitted latent map, no slowdown, bit-identical output)
- [#20081](https://github.com/unslothai/unsloth/pull/20081) Studio: live denoise previews do no work unless a visible page is watching the render
- [#20091](https://github.com/unslothai/unsloth/pull/20091) gguf_packed: faster packed GGUF LoRA training (constant types under compile, recompute reuse, zoo kernels by default)
- [#20080](https://github.com/unslothai/unsloth/pull/20080) gguf_packed: load Inkling 2 GGUFs (inkling2, inkling2_loop) packed for LoRA
- [#20072](https://github.com/unslothai/unsloth/pull/20072) Studio images: per-row layout for Qwen-Image-2.1 batches (mixed prompt lengths in one forward, 2.12x streamed on A100)
- [#20092](https://github.com/unslothai/unsloth/pull/20092) Portable resume: keep offloaded DTensor optimizer moments on the host instead of copying each to the device first
- [#20090](https://github.com/unslothai/unsloth/pull/20090) Native FSDP2: stage the bitsandbytes 8-bit optimizer export per parameter on a sub-mesh writer too
- [#20089](https://github.com/unslothai/unsloth/pull/20089) Native FSDP2: keep packed expert stacks (NVFP4 / MXFP8 / MXFP4 / GGUF) replicated instead of crashing in fully_shard
- [#20066](https://github.com/unslothai/unsloth/pull/20066) install.sh: new Apple Silicon installs and Repair take torch 2.14.1 (Studio MPS images 1.16-1.45x faster than 2.13)
- [#20070](https://github.com/unslothai/unsloth/pull/20070) gguf_packed: load Qwen3.5 GGUFs with fused attn_qkv_gate / ssm_beta_alpha tensors
- [#19640](https://github.com/unslothai/unsloth/pull/19640) Studio: preserve prompt text in prompt list CSV imports
- [#20071](https://github.com/unslothai/unsloth/pull/20071) Studio images: batch FLUX.3 requests in one modular call (streamed klein 2.69x per 4 images on A100), Anima kept serial
- [#19513](https://github.com/unslothai/unsloth/pull/19513) Studio: pin locale in the library alphabetical-sort test
- [#20033](https://github.com/unslothai/unsloth/pull/20033) Studio: match profile upload overlay to avatar shape and bounds
- [#20065](https://github.com/unslothai/unsloth/pull/20065) Studio ROCm: prebuild the Triton conv3d kernels off the first decode (gfx1151 Wan first 480p decode 284 -> 42 s on Windows)
- [#20085](https://github.com/unslothai/unsloth/pull/20085) Probes: DPO prefix-share cost probe only when sharing would engage, no OOM latch; cache the ROCm fp8 no-verdict outcome
- [#20084](https://github.com/unslothai/unsloth/pull/20084) Layer-major GA tests: stub the GPU size probe and never leak a caller mode past a failed step
- [#20079](https://github.com/unslothai/unsloth/pull/20079) Expert parallel: skip the list-exchange hint when the current device cannot be read
- [#20076](https://github.com/unslothai/unsloth/pull/20076) install.sh: existing Apple Silicon homes keep their torch on a plain re-run again (repair still upgrades)
- [#19996](https://github.com/unslothai/unsloth/pull/19996) Make the Model hub easier to browse on phones
- [#20078](https://github.com/unslothai/unsloth/pull/20078) GGUF-packed follow-ups: utf-8 for the dense writer JSON, the real packed check in the loader fixture, hint check per failure path (red on main since #20022)
- [#20077](https://github.com/unslothai/unsloth/pull/20077) Load hook guard: require the hook to be the first statement that does work (red on main since #20022)
- [#20068](https://github.com/unslothai/unsloth/pull/20068) Online DPO: pass mm_token_type_ids to Qwen-VL on transformers 5.x with TRL < 1.17
- [#20074](https://github.com/unslothai/unsloth/pull/20074) Block CUDA graphs: keep kept layers' saved activations alive across checkpoint recomputes (fixes the overwritten-output crash with partial gradient checkpointing)
- [#20075](https://github.com/unslothai/unsloth/pull/20075) Save routing harness: define what the GGUF-packed save paths read, and guard every global the generic save loads (red on main since #20022)
- [#20073](https://github.com/unslothai/unsloth/pull/20073) CP compose gloo test: compiled one-process reference on transformers 4.x, MoE x cp cells skip there
- [#20063](https://github.com/unslothai/unsloth/pull/20063) Auto-fit full finetuning: faster in-backward step, no first-step deferral
- [#20069](https://github.com/unslothai/unsloth/pull/20069) Mac torch floor workflow: check the merge base arm against its own route (red on staging since #20038 landed)
- [#19837](https://github.com/unslothai/unsloth/pull/19837) Studio images: family batch adapters, measured batching race and per-size CUDA graphs
- [#20067](https://github.com/unslothai/unsloth/pull/20067) DPO fused loss: take entropy and token accuracy from the log-prob pass
- [#20064](https://github.com/unslothai/unsloth/pull/20064) Online DPO and RLOO: score VLM batches from hidden states with the fused head
- [#20050](https://github.com/unslothai/unsloth/pull/20050) Vision DPO: relabel mm_token_type_ids at the forward's width on TRL < 0.29
- [#20022](https://github.com/unslothai/unsloth/pull/20022) Train LoRA on packed GGUF weights (gguf_packed = True)
- [#19620](https://github.com/unslothai/unsloth/pull/19620) Studio: stop empty replies when long OpenAI chats compact
- [#20038](https://github.com/unslothai/unsloth/pull/20038) install.sh: move existing Apple Silicon homes below torch 2.13 to the fused-MPS-attention release on re-run
- [#20062](https://github.com/unslothai/unsloth/pull/20062) Recipe route gate test: stub the recipe store with the real signatures (red on main since #19610)
- [#17742](https://github.com/unslothai/unsloth/pull/17742) Studio: preview per-GPU memory for manual GGUF layer splits
- [#20060](https://github.com/unslothai/unsloth/pull/20060) NVIDIA presence parity test: amd-smi no longer vetoes, opted in or not (red on main since #19615)
- [#20034](https://github.com/unslothai/unsloth/pull/20034) Studio GGUF: keep the exact Q2_K / Q3_K / Q6_K dequant at rank 4 (Z-Image GGUF 2.2x faster on Apple MPS, bit-identical)
- [#19610](https://github.com/unslothai/unsloth/pull/19610) Studio: keep recipe edits made just before leaving the editor
- [#20037](https://github.com/unslothai/unsloth/pull/20037) Context parallel: keep the train scope when the auto-fit optimizer wraps train()
- [#20021](https://github.com/unslothai/unsloth/pull/20021) Studio MiniMax-H3: load only the text-encoder layers the read uses (bf16 encoder 66.7 -> 51.5 GB, bit-exact)
- [#20036](https://github.com/unslothai/unsloth/pull/20036) Auto-fit optimizer test: read _layer_major_ga.py as utf-8 (encoding guard red on main since #20007)
- [#19936](https://github.com/unslothai/unsloth/pull/19936) Studio: read safetensors with pread on ROCm integrated GPUs when host memory is tight
- [#20003](https://github.com/unslothai/unsloth/pull/20003) Studio sd.cpp: direct conv for the Metal VAE by default on FLUX.2 and FLUX.1 VAEs
- [#19992](https://github.com/unslothai/unsloth/pull/19992) Studio images: honour output_format and output_compression on /v1/images/generations
- [#19939](https://github.com/unslothai/unsloth/pull/19939) Kernels: do_not_specialize per-call sizes, eager int4 self-check, ROCm gates via is_rocm_torch
- [#19873](https://github.com/unslothai/unsloth/pull/19873) Studio ROCm gfx1151: vendored Triton conv3d for the Wan VAE (about 11% faster decode, Winograd opt-in), MIOpen fallback
- [#20025](https://github.com/unslothai/unsloth/pull/20025) Inkling 2: say when UNSLOTH_INKLING2_PACKED_EXPERTS=1 cannot engage
- [#20026](https://github.com/unslothai/unsloth/pull/20026) Portable resume: keep an offloaded optimizer state on the host
- [#20029](https://github.com/unslothai/unsloth/pull/20029) Parallel guards: refuse layout changes after a load, keep UNSLOTH_TOKEN_BUDGET off pipeline steps, CP split generation with TRL environments
- [#20007](https://github.com/unslothai/unsloth/pull/20007) Full finetuning: step the optimizer inside backward when the standard step would run out of memory
- [#19814](https://github.com/unslothai/unsloth/pull/19814) Use the model’s chat template for auto-detected Alpaca data
- [#19628](https://github.com/unslothai/unsloth/pull/19628) Studio: recall summarised details when a cloud chat is also trimmed
- [#20024](https://github.com/unslothai/unsloth/pull/20024) MLX inference stub: answer zoo's new _MarkovTreeDrafter import (red since unsloth-zoo #2910)
- [#20016](https://github.com/unslothai/unsloth/pull/20016) Studio diffusion offload: follow diffusers' generic wrapper-tensor group offload helpers
- [#20023](https://github.com/unslothai/unsloth/pull/20023) Tests: name the device for PEFT reloads, gate FP4 GPU cases on real CUDA (accelerator guards red on main)
- [#20017](https://github.com/unslothai/unsloth/pull/20017) Decode CUDA graphs for RL rollout batches up to 64 rows (GRPO without vLLM 4x on L4, 7x on A100)
- [#20013](https://github.com/unslothai/unsloth/pull/20013) offload_layers: layer-major gradient accumulation on by default (auto)
- [#19991](https://github.com/unslothai/unsloth/pull/19991) Quantize-on-load NVFP4 / MXFP4 LoRA bases: load_in_4bit = "nvfp4" / "mxfp4", load_in_8bit = "fp8"
- [#19838](https://github.com/unslothai/unsloth/pull/19838) Studio: Keep audio recordings available for follow-up questions
- [#19583](https://github.com/unslothai/unsloth/pull/19583) Allow trainable_token_indices after add_new_tokens
- [#19806](https://github.com/unslothai/unsloth/pull/19806) Fix LoRA GGUF export for rsLoRA, PiSSA and OLoRA adapters
- [#20020](https://github.com/unslothai/unsloth/pull/20020) Tests: LoRA-GA native-save control measures weights, not logits
- [#20019](https://github.com/unslothai/unsloth/pull/20019) clean_gpu_cache: no-op on CPU-only hosts
- [#19615](https://github.com/unslothai/unsloth/pull/19615) Unsloth Studio / Desktop (AMD, Windows): never run amd-smi from the installers
- [#20018](https://github.com/unslothai/unsloth/pull/20018) Tests: skip transformers 5 weight-loading tests on transformers 4 despite Unsloth's PEFT stub
- [#20008](https://github.com/unslothai/unsloth/pull/20008) Studio loads: upload rings wait for the current stream before writing reused blocks
- [#20014](https://github.com/unslothai/unsloth/pull/20014) Sharded loading: refuse save_pretrained before apply_tensor_parallel / apply_expert_parallel
- [#19829](https://github.com/unslothai/unsloth/pull/19829) Studio: Import semicolon-separated CSVs as training columns
- [#19598](https://github.com/unslothai/unsloth/pull/19598) Studio: finish tool runs when a provider refuses a too-long prompt
- [#20015](https://github.com/unslothai/unsloth/pull/20015) MOSS-TTS-Nano attention test: hold on Windows, where SentencePiece is disabled by default
- [#19611](https://github.com/unslothai/unsloth/pull/19611) Studio: reopen Inpaint, Transform, Extend and Upscale on restore
- [#19613](https://github.com/unslothai/unsloth/pull/19613) Studio: reload the previous speech model when a switch fails
- [#19851](https://github.com/unslothai/unsloth/pull/19851) Studio: Keep full fetched pages searchable after chat compaction
- [#19753](https://github.com/unslothai/unsloth/pull/19753) Studio Audio: Separate's Search Hub opens the audio.cpp repo
- [#19777](https://github.com/unslothai/unsloth/pull/19777) Studio: let curl and wget download files in the isolated Windows Terminal
- [#19605](https://github.com/unslothai/unsloth/pull/19605) Studio: keep the chat Files menu on project pages and mid-stream
- [#19840](https://github.com/unslothai/unsloth/pull/19840) Studio: Include each attachment in multi-file overviews
- [#19995](https://github.com/unslothai/unsloth/pull/19995) Studio diffusion training: record per-process GPU and host memory peaks like LLM training
- [#19537](https://github.com/unslothai/unsloth/pull/19537) Evaluate per-module LoRA scaling on vLLM releases that apply it
- [#19962](https://github.com/unslothai/unsloth/pull/19962) Expert parallel: cut gpt-oss MXFP4 and other converter-built expert stacks to this rank's experts as they load
- [#19254](https://github.com/unslothai/unsloth/pull/19254) Studio diffusion: one module walk per CFG replica check
- [#14623](https://github.com/unslothai/unsloth/pull/14623) NF4 GEMV: dequantize each weight tile once for 2 to 4 decode rows
- [#19845](https://github.com/unslothai/unsloth/pull/19845) Studio: Honor UNSLOTH_CPU_THREADS in GGUF chat
- [#19809](https://github.com/unslothai/unsloth/pull/19809) Keep Claude Code parallel tool results in call order
- [#19828](https://github.com/unslothai/unsloth/pull/19828) Studio: Import pandas column JSON as training rows
- [#19751](https://github.com/unslothai/unsloth/pull/19751) Studio Audio: do not load the Hub's selected model when switching to Audio
- [#19624](https://github.com/unslothai/unsloth/pull/19624) Studio: keep the OpenRouter Reasoning block when a reply is recovered
- [#19586](https://github.com/unslothai/unsloth/pull/19586) Studio: keep Decision API state images on a runtime that reads them
- [#16940](https://github.com/unslothai/unsloth/pull/16940) FSDP2: load stacked MoE experts as local shards
- [#19619](https://github.com/unslothai/unsloth/pull/19619) Studio: keep sentence spacing in long Chinese and Japanese translations
- [#19566](https://github.com/unslothai/unsloth/pull/19566) Studio: fix project page showing over websites in the macOS browser dialog
- [#19576](https://github.com/unslothai/unsloth/pull/19576) Studio: read image training captions in any letter case
- [#19752](https://github.com/unslothai/unsloth/pull/19752) Studio Audio: the blocker menu offers the empty pane's recommended models
- [#20012](https://github.com/unslothai/unsloth/pull/20012) Distillation tests: read sources as utf-8 (encoding guard red on main since #20001 and #20002)
- [#19629](https://github.com/unslothai/unsloth/pull/19629) Show models from every Ollama folder when Studio runs in Docker
- [#20009](https://github.com/unslothai/unsloth/pull/20009) precision: refresh the sm120 fp8 LoRA timing evidence
- [#19839](https://github.com/unslothai/unsloth/pull/19839) Studio: Preserve discovered tool references in Claude Code results
- [#19754](https://github.com/unslothai/unsloth/pull/19754) Studio Audio: play separated stems through plain media elements
- [#20005](https://github.com/unslothai/unsloth/pull/20005) Studio corner rail: scroll when cards run into its bottom padding (update banner layout red since #19970)
- [#19788](https://github.com/unslothai/unsloth/pull/19788) Studio: load layer split at once when llama.cpp has no tensor mode for the architecture
- [#19964](https://github.com/unslothai/unsloth/pull/19964) Studio diffusion: reuse the pipeline listing's gated answer instead of a second Hub info call on every load
- [#19826](https://github.com/unslothai/unsloth/pull/19826) Studio: Keep temporary chat transcripts off disk
- [#19630](https://github.com/unslothai/unsloth/pull/19630) Let the Docker llama.cpp updater repair a missing install
- [#19627](https://github.com/unslothai/unsloth/pull/19627) Studio: keep a chat's summary when forking it
- [#19538](https://github.com/unslothai/unsloth/pull/19538) Studio: let Deep Research try a failed page fetch again
- [#20002](https://github.com/unslothai/unsloth/pull/20002) Distillation: refuse a separate teacher whose tokenizer maps ids to other tokens
- [#20000](https://github.com/unslothai/unsloth/pull/20000) MoE load logger: count layers with different expert counts per layer
- [#20004](https://github.com/unslothai/unsloth/pull/20004) int8 LoRA kernels: comment every tl.constexpr parameter (red on main since #19965)
- [#20001](https://github.com/unslothai/unsloth/pull/20001) GRPO distillation: opt-in terminal token set scored as one stop action
- [#19680](https://github.com/unslothai/unsloth/pull/19680) Windows AMSI/Defender CI: actually ask AMSI, and turn the runner's Defender back on
- [#19979](https://github.com/unslothai/unsloth/pull/19979) Installer (Windows on ARM): read a companion wheel's METADATA through ZipFile, not hand-rolled ranged reads
- [#13164](https://github.com/unslothai/unsloth/pull/13164) Write permission for root group is safe on folders for bwrap path
- [#19717](https://github.com/unslothai/unsloth/pull/19717) Studio: trim stray whitespace from a relative local dataset path
- [#11329](https://github.com/unslothai/unsloth/pull/11329) fix(studio): align PDF citation highlights with page rotation
- [#19999](https://github.com/unslothai/unsloth/pull/19999) dataset_num_proc fallback: keep map in-process while offload_layers holds host RAM (copies drifted since zoo #2909)
- [#19976](https://github.com/unslothai/unsloth/pull/19976) Keep the PowerShell installers ASCII-only so install.ps1's signature verifies in every locale
- [#16122](https://github.com/unslothai/unsloth/pull/16122) Studio: recognize raw text columns in streams without feature schemas
- [#18940](https://github.com/unslothai/unsloth/pull/18940) Studio: omit loose GGUF companions from the model inventory
- [#19911](https://github.com/unslothai/unsloth/pull/19911) Studio MLX: count spliced image columns before VLM generation
- [#19971](https://github.com/unslothai/unsloth/pull/19971) Restore the PowerShell test comments condensed in #19656
- [#19657](https://github.com/unslothai/unsloth/pull/19657) Condense comments and docstrings toward a 10% comment budget: installers, scripts and CI
- [#19655](https://github.com/unslothai/unsloth/pull/19655) Condense comments and docstrings toward a 10% comment budget: core and CLI
- [#19654](https://github.com/unslothai/unsloth/pull/19654) Condense comments and docstrings toward a 10% comment budget: Studio backend
- [#19653](https://github.com/unslothai/unsloth/pull/19653) Condense comments and docstrings toward a 10% comment budget: Studio frontend and Tauri
- [#19935](https://github.com/unslothai/unsloth/pull/19935) Studio diffusion: Krea-2 block frees its norm outputs before attention and the feed-forward
- [#19965](https://github.com/unslothai/unsloth/pull/19965) LoRA: opt-in rotated int8 frozen base for consumer Blackwell (UNSLOTH_LORA_BASE_INT8=1)
- [#19597](https://github.com/unslothai/unsloth/pull/19597) Studio: keep the request and tool results when an API chat compacts
- [#19954](https://github.com/unslothai/unsloth/pull/19954) Prebuilt wheels: build causal-conv1d and mamba-ssm for win_arm64 torch 2.15.0+cu135
- [#19973](https://github.com/unslothai/unsloth/pull/19973) MLX hosts: _UnslothDeviceStats answers gcnArchName for Inductor's cache key
- [#19956](https://github.com/unslothai/unsloth/pull/19956) bf16 stochastic rounding: round DTensor (FSDP2 / TP) weights on their local shards
- [#19859](https://github.com/unslothai/unsloth/pull/19859) fix(studio): split Inkling 2's thought at effort none, honor enable_thinking false, keep literal think tags
- [#19910](https://github.com/unslothai/unsloth/pull/19910) Studio: count an MLX chat of instructions alone, and refuse a speech model's count by name
- [#19970](https://github.com/unslothai/unsloth/pull/19970) Studio: give toasts and floating cards the composer's glass in Glass mode
- [#19988](https://github.com/unslothai/unsloth/pull/19988) Inkling 2: keep the released NVFP4 / MXFP8 experts packed (opt-in), each expert parallel rank reading only its experts
- [#17231](https://github.com/unslothai/unsloth/pull/17231) Studio: round the decision warmup ratio up like transformers
- [#19913](https://github.com/unslothai/unsloth/pull/19913) Studio: let a resident MLX batch reply carry a video clip
- [#19545](https://github.com/unslothai/unsloth/pull/19545) Merge reloaded PiSSA and OLoRA adapters relative to the original base
- [#15857](https://github.com/unslothai/unsloth/pull/15857) Studio: hybrid token count — dense estimate guard + scaled read timeout
- [#18201](https://github.com/unslothai/unsloth/pull/18201) Unsloth Studio: price a connection's tool result from the provider's reported tokens (#18185)
- [#19969](https://github.com/unslothai/unsloth/pull/19969) Studio: keep the Qwen-Image and Wan VAE encoders stock so edits and image-to-video match bf16, fold and fuse only the decoder
- [#19909](https://github.com/unslothai/unsloth/pull/19909) fix(studio): count spliced media columns in MLX VLM chat usage
- [#19891](https://github.com/unslothai/unsloth/pull/19891) Studio RAG: re-embed with one stale-document scan instead of one per document
- [#19990](https://github.com/unslothai/unsloth/pull/19990) FSDP2 auto GA: replicated gradients wait for the last micro-batch again (red on main since #19942)
- [#19989](https://github.com/unslothai/unsloth/pull/19989) DoRA FP8 test: read the source as utf-8 (encoding guard red on main)
- [#13030](https://github.com/unslothai/unsloth/pull/13030) Honor DDP common CUDA training dtype
- [#19600](https://github.com/unslothai/unsloth/pull/19600) Studio: show the backend's error message, not [object Object], when a request fails
- [#19529](https://github.com/unslothai/unsloth/pull/19529) fix(studio): rebuild @skill manifests into the system prompt on every turn
- [#19886](https://github.com/unslothai/unsloth/pull/19886) Studio images: skip the coalescing tokenizer copies on resident loads that can never batch
- [#19720](https://github.com/unslothai/unsloth/pull/19720) Unsloth Studio: pin mlx 0.32.5
- [#19572](https://github.com/unslothai/unsloth/pull/19572) Keep the earlier GGUF when a re-export fails
- [#19937](https://github.com/unslothai/unsloth/pull/19937) Studio video: batch LTX-2.5 clips across requests (per-clip noise, encode, upsample and audio)
- [#19960](https://github.com/unslothai/unsloth/pull/19960) Studio CUDA graphs: report why Krea-2 calls decline a graph instead of blaming a non-tensor argument
- [#12177](https://github.com/unslothai/unsloth/pull/12177) Studio: keep a Hub repo id that ends in .gguf
- [#19934](https://github.com/unslothai/unsloth/pull/19934) Studio video: load DiffSynth raw-layout MiniMax-H3 LoRAs with per-head fused QKV rows
- [#19608](https://github.com/unslothai/unsloth/pull/19608) Studio: deploy a finished diffusion LoRA with the trigger word it was trained on
- [#19987](https://github.com/unslothai/unsloth/pull/19987) Studio frontend test: stub llama-flags in the llama update single-flight test (red on main)
- [#12142](https://github.com/unslothai/unsloth/pull/12142) studio: allow explicitly configured local HTTPS reverse proxies
- [#19582](https://github.com/unslothai/unsloth/pull/19582) Preserve output-head hooks installed between masked diffusion batches
- [#19580](https://github.com/unslothai/unsloth/pull/19580) Keep BF16 rounding streams stable when resuming AdamW with inactive weights
- [#19983](https://github.com/unslothai/unsloth/pull/19983) WebKit long-chat gate: lower the browser pane, thread scroll and overlay ceilings to what CI measures now
- [#19738](https://github.com/unslothai/unsloth/pull/19738) feat(studio): live prompt progress and generation details for MLX chats
- [#19852](https://github.com/unslothai/unsloth/pull/19852) Studio: Keep QLoRA selected for cached 4-bit models on CUDA
- [#19299](https://github.com/unslothai/unsloth/pull/19299) Studio: follow the Omarchy desktop's theme
- [#18916](https://github.com/unslothai/unsloth/pull/18916) Hub: default scan folders to recursive and add --models-dir to chat and inference (#18896)
- [#17634](https://github.com/unslothai/unsloth/pull/17634) Keep incomplete dataset uploads out of inventory
- [#16279](https://github.com/unslothai/unsloth/pull/16279) Ascend: opt-in eager bootstrap for Torch 2.6/Triton 3.5 on ARM64
- [#16043](https://github.com/unslothai/unsloth/pull/16043) feat(distributed): Zero-Disk in-flight token streaming & in-memory GGUF v3 Hub exporter
- [#13469](https://github.com/unslothai/unsloth/pull/13469) REPO sync
- [#10766](https://github.com/unslothai/unsloth/pull/10766) feat(docker): add official ARM64 CPU-only build target
- [#19587](https://github.com/unslothai/unsloth/pull/19587) Apply qat_scheme for models that load through FastModel
- [#19883](https://github.com/unslothai/unsloth/pull/19883) Studio: map more Hugging Face repos and whole vendor orgs to their ModelScope copies
- [#19825](https://github.com/unslothai/unsloth/pull/19825) Studio: Use remembered model sampling in new chats
- [#13334](https://github.com/unslothai/unsloth/pull/13334) Update ci-capacity.yml
- [#19975](https://github.com/unslothai/unsloth/pull/19975) Layer-major DDP: put back broadcast buffers an abandoned window wrote
- [#19942](https://github.com/unslothai/unsloth/pull/19942) FSDP2 GA auto skip: reduce-scatter mostly trainable units every micro-batch
- [#19812](https://github.com/unslothai/unsloth/pull/19812) Preserve chat settings edited in another Studio tab
- [#19955](https://github.com/unslothai/unsloth/pull/19955) DoRA on native FP8 checkpoints: hand PEFT the dequantized weight
- [#19980](https://github.com/unslothai/unsloth/pull/19980) Studio RAG test: the connection gate test holds on a sqlite3 without extension loading (macos-15)
- [#19518](https://github.com/unslothai/unsloth/pull/19518) Studio: line up an installed engine's actions in Settings > More engines
- [#19827](https://github.com/unslothai/unsloth/pull/19827) Studio: Decode OpenAI embedding token IDs before local inference
- [#19890](https://github.com/unslothai/unsloth/pull/19890) Skip the adapter_config.json Hub request when the cache already records it as missing for the resolved commit
- [#19606](https://github.com/unslothai/unsloth/pull/19606) Studio: use decimal units for file and model sizes
- [#19974](https://github.com/unslothai/unsloth/pull/19974) Tests: test_pp_native_fused_ce leaked UNSLOTH_FORCE_CPU=1 into its whole CPU shard (15 reds on unrelated PRs)
- [#19957](https://github.com/unslothai/unsloth/pull/19957) Studio images: batch MOSS-Image layer by layer so a streamed block uploads once per batch
- [#19940](https://github.com/unslothai/unsloth/pull/19940) offload_layers layer-major gradient accumulation under DDP
- [#19902](https://github.com/unslothai/unsloth/pull/19902) Vision DPO collator: reuse TRL's converted pixel rows for Qwen-VL grids on TRL < 0.29
- [#19604](https://github.com/unslothai/unsloth/pull/19604) Studio: open the live run when its Recents or Library entry is clicked during training
- [#19607](https://github.com/unslothai/unsloth/pull/19607) Studio: show and clear quant pins from the Model Hub's Pin menu
- [#19892](https://github.com/unslothai/unsloth/pull/19892) Studio training: skip unchanged diffusion status replies and the duplicate Train page status poll
- [#19933](https://github.com/unslothai/unsloth/pull/19933) Studio images: compress large PNGs in parallel strips, identical pixels
- [#19912](https://github.com/unslothai/unsloth/pull/19912) Studio: render MLX image chats on string-only chat templates
- [#19972](https://github.com/unslothai/unsloth/pull/19972) Native FSDP2 full optimizer save: gather host-offloaded optimizer state on the device
- [#19921](https://github.com/unslothai/unsloth/pull/19921) Studio: suggest max steps from the dataset size for LLM training
- [#19941](https://github.com/unslothai/unsloth/pull/19941) Expert parallel: shard Llama 4 and Qwen3-VL-MoE experts, save their expert LoRA correctly
- [#19609](https://github.com/unslothai/unsloth/pull/19609) Studio: refresh the llama.cpp version after changing the llama.cpp folder
- [#19656](https://github.com/unslothai/unsloth/pull/19656) Condense comments and docstrings toward a 10% comment budget: tests
- [#19895](https://github.com/unslothai/unsloth/pull/19895) Studio Data Recipes: default Data Designer usage telemetry to off in the recipe worker
- [#19651](https://github.com/unslothai/unsloth/pull/19651) Studio Images: list the gallery in one scandir pass, like the video and audio galleries
- [#19658](https://github.com/unslothai/unsloth/pull/19658) Studio: share one forced llama.cpp update check across hook copies and one release fetch per status pass
- [#19662](https://github.com/unslothai/unsloth/pull/19662) Studio Train: share one Hub model_info per parallel plan request
- [#19968](https://github.com/unslothai/unsloth/pull/19968) Tests: name the device in the gloo save_lora reload (accelerator guard red on main)
- [#19944](https://github.com/unslothai/unsloth/pull/19944) UNSLOTH_PARALLEL=auto: size 3-D expert stacks and FP8 checkpoints like the loaders
- [#19644](https://github.com/unslothai/unsloth/pull/19644) Studio Translate: one cached-model listing per disk probe, and no re-probe on RAM-only system updates
- [#19966](https://github.com/unslothai/unsloth/pull/19966) UNSLOTH_VLLM_STANDBY: sleep vLLM during training for RLOO and OnlineDPO
- [#19643](https://github.com/unslothai/unsloth/pull/19643) Studio: remember the install source until the unsloth dist-info changes
- [#19885](https://github.com/unslothai/unsloth/pull/19885) Studio RAG: keep the warm vector cache when a document is ingested
- [#19959](https://github.com/unslothai/unsloth/pull/19959) Pipeline parallel DeepSeek-V4.1: score the last stage with the chunked fused CE
- [#19958](https://github.com/unslothai/unsloth/pull/19958) Ulysses CP DeepSeek-V4: all-gather position_ids once per step
- [#19695](https://github.com/unslothai/unsloth/pull/19695) Studio chat: send pasted text exactly as pasted, not re-decoded by its XML charset
- [#19263](https://github.com/unslothai/unsloth/pull/19263) Add opt-in image model swapping for local chat
- [#19477](https://github.com/unslothai/unsloth/pull/19477) Keep literal CSV prompts and answers intact in local evaluation
- [#19946](https://github.com/unslothai/unsloth/pull/19946) UNSLOTH_TP_SIZE: refuse a prebuilt optimizer on a model the Trainer still has to split
- [#19945](https://github.com/unslothai/unsloth/pull/19945) model.save_lora under FSDP2 and pipeline parallel: one gathered adapter written by rank 0
- [#19949](https://github.com/unslothai/unsloth/pull/19949) Tensor parallel KTOTrainer: skip or refuse TRL's ref adapter copy like DPO
- [#19963](https://github.com/unslothai/unsloth/pull/19963) Tests: give the from_pretrained precision harness the real _gguf_load helpers (rest red on main)
- [#19961](https://github.com/unslothai/unsloth/pull/19961) GGUF loads: keep the load hook first, and fix the MLX harness for the new relative import (rest-2 red on main)
- [#19953](https://github.com/unslothai/unsloth/pull/19953) Studio: resolve the Windows on ARM flash-attn build for torch 2.15
- [#19952](https://github.com/unslothai/unsloth/pull/19952) Windows on ARM: pair torchvision with torch by its own torch requirement
- [#19927](https://github.com/unslothai/unsloth/pull/19927) Studio setup (Windows): a custom-home install no longer repoints another install's inductor cache
- [#19922](https://github.com/unslothai/unsloth/pull/19922) Studio training: record per-process GPU and host memory peaks on the run and status API
- [#19918](https://github.com/unslothai/unsloth/pull/19918) Studio: flag dequant-only FP8 in the Hub, hint tensorwise on row-wise fp8 failures, tie cu130 keep windows
- [#19290](https://github.com/unslothai/unsloth/pull/19290) [BUGFIX] Isolate TorchAO's intermediate 16-bit checkpoint
- [#19951](https://github.com/unslothai/unsloth/pull/19951) Remote MoE eval shim: an out-of-memory grouped GEMM probe records no verdict
- [#19475](https://github.com/unslothai/unsloth/pull/19475) Preserve significant leading whitespace in local eval exact match
- [#19373](https://github.com/unslothai/unsloth/pull/19373) Studio desktop: clear the composer drop overlay when the window loses focus or is hidden
- [#19501](https://github.com/unslothai/unsloth/pull/19501) Studio: show the Thinking switch for llama.cpp models served by repo id
- [#19938](https://github.com/unslothai/unsloth/pull/19938) Expert parallel: read only this rank's experts from pre-quantized packed NVFP4 / MXFP8 checkpoints
- [#19926](https://github.com/unslothai/unsloth/pull/19926) setup.ps1: pin the elevation probe in the unattended-UAC tests (red on elevated Windows runners)
- [#19928](https://github.com/unslothai/unsloth/pull/19928) Studio: headless image and video API requests no longer build a live preview
- [#19929](https://github.com/unslothai/unsloth/pull/19929) Studio diffusion: Z-Image and Krea-2 prompt encodes skip the KV cache and keep only the hidden states they read
- [#19903](https://github.com/unslothai/unsloth/pull/19903) DPO prefix share: gate on the GEMM time saved per layer, not tokens alone
- [#19947](https://github.com/unslothai/unsloth/pull/19947) GGUF loads: refuse gguf_file on MLX, read a GGUF-only repo's tokenizer from the GGUF, name a missing gguf package
- [#19950](https://github.com/unslothai/unsloth/pull/19950) Tests: stop test_css_culprit leaking its synthetic CSS tree into the cached scan
- [#19877](https://github.com/unslothai/unsloth/pull/19877) Routing replay: keep sigmoid routers whose weights carry a scaling factor
- [#19874](https://github.com/unslothai/unsloth/pull/19874) Studio ROCm gfx1151: Linear weight row pitch K + 64 outside TunableOp-covered GEMMs (Wan -7% s/step, Krea-2 -19%)
- [#19931](https://github.com/unslothai/unsloth/pull/19931) FP8 and ROCm Triton probes: an out-of-memory probe records no verdict
- [#19846](https://github.com/unslothai/unsloth/pull/19846) Studio: Use file-scoped links for chat downloads
- [#19932](https://github.com/unslothai/unsloth/pull/19932) Studio: stop every modal open and close from restyling the whole page in long chats with math
- [#19841](https://github.com/unslothai/unsloth/pull/19841) Studio: Keep whole attachments available after chat compaction
- [#19894](https://github.com/unslothai/unsloth/pull/19894) Vision: skip a frozen tower's backward under torch.compile too
- [#19899](https://github.com/unslothai/unsloth/pull/19899) Pipeline parallel: form the MoE router aux loss over the whole split batch (GPipe)
- [#19924](https://github.com/unslothai/unsloth/pull/19924) Studio: add the repair-install strings to every locale and fix the repair test typecheck
- [#19925](https://github.com/unslothai/unsloth/pull/19925) Studio FP8 GEMM: import the Triton error classes by name
- [#19915](https://github.com/unslothai/unsloth/pull/19915) Batched decode: grouped route on T4 for one-prompt GRPO batches, and CP split at one group per peer
- [#19923](https://github.com/unslothai/unsloth/pull/19923) Block compile: route every GatedDeltaNet instance, not only the first load's
- [#19907](https://github.com/unslothai/unsloth/pull/19907) Read safetensors shards with pread on CUDA unified-memory GPUs (DGX Spark)
- [#19919](https://github.com/unslothai/unsloth/pull/19919) Studio diffusion: reuse the text-encoder dead-tail verdict across loads, settle unified memory on stable reads

#### 🐛 New Issues
- [#19943](https://github.com/unslothai/unsloth/issues/19943) [Feature] add DPO training `feature request` 💬2
- [#19908](https://github.com/unslothai/unsloth/issues/19908) Windows Desktop v0.1.925-beta: install.ps1 HashMismatch 💬1
- [#20045](https://github.com/unslothai/unsloth/issues/20045) [Bug] Studio’s MLX model picker loads a local unquantized FP16 checkpoint with 4-bit runtime quantization `feature request` `bug`
- [#19930](https://github.com/unslothai/unsloth/issues/19930) [Bug / Feature] Keep Original Name Spelling in Parentheses in Unsloth Translate `feature request` `bug`

#### 🔒 Closed Issues
- [#18896](https://github.com/unslothai/unsloth/issues/18896) [Feature] Add option to have multiple paths for local models
- [#19759](https://github.com/unslothai/unsloth/issues/19759) [Bug] Translate not working properly unless in detect language mode.
- [#3678](https://github.com/unslothai/unsloth/issues/3678) [Feature] Expert Parallelism
- [#19472](https://github.com/unslothai/unsloth/issues/19472) [Bug] Studio Translate treats valid CR-delimited WebVTT files as plain text
- [#19749](https://github.com/unslothai/unsloth/issues/19749) Unsloth Studio MLX (Apple Silicon): huggingface_hub _ModuleLock deadlock on tier 510 + LanguageModelOutput TypeError on LFM3
- [#19810](https://github.com/unslothai/unsloth/issues/19810) Studio: CSV chat import turns "developer" rows into user messages (and drops them in headerless CSVs)

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,210 · **Open issues:** 432 · **Last push:** 7h ago

On November 28, 2026, there were no new releases for AIBrix. However, several important pull requests were merged, including #3633, which shares prompt-length bucket and eligibility helpers in the leaf pd package, and #3638, which adds a smoke test for the standalone Docker Compose stack. Additionally, issue #3642 was reported, highlighting a bug where a ModelClaim instance can remain in an `activating` state indefinitely, preventing the gateway from waking a sleeping peer. Other notable merged bug fixes addressed various issues related to media-aware token loading and HTTP routing consistency. Overall, it was a day focused on enhancements and bug resolutions within the codebase.

#### ✅ Merged PRs
- [#3633](https://github.com/vllm-project/aibrix/pull/3633) [Misc] Share PD prompt-length bucket and eligibility helpers in leaf pd package (#3620)
- [#3635](https://github.com/vllm-project/aibrix/pull/3635) [Bug] Make token_load prompt estimates media-aware (#3092)
- [#3563](https://github.com/vllm-project/aibrix/pull/3563) [Bug] Use short TTL for stale HTTPRoute condition observedGeneration
- [#3577](https://github.com/vllm-project/aibrix/pull/3577) [Bug] Wire the standalone routing strategy to ROUTING_ALGORITHM
- [#3634](https://github.com/vllm-project/aibrix/pull/3634) [Bug] Drop stale raw and derived pod gauges
- [#3637](https://github.com/vllm-project/aibrix/pull/3637) [Bug] Treat a JSON null max_tokens as absent in config-profile selection
- [#3638](https://github.com/vllm-project/aibrix/pull/3638) [CI] Add a smoke test for the standalone docker compose stack
- [#3625](https://github.com/vllm-project/aibrix/pull/3625) [Bug] Propagate RayClusterFleet rolling scale-down errors
- [#3610](https://github.com/vllm-project/aibrix/pull/3610) [Feat] prefer ModelClaim bindings by routing state over pod key

#### 🐛 New Issues
- [#3642](https://github.com/vllm-project/aibrix/issues/3642) [Bug] A ModelClaim instance can stay `activating` with no deadline, so the gateway never wakes a sleeping peer `kind/bug` `area/gateway` `priority/important-soon` `triage/accepted` 💬7
- [#3641](https://github.com/vllm-project/aibrix/issues/3641) [Bug] token_load media-aware estimate ignores Responses API input_image payloads `kind/bug` `area/gateway` `priority/important-soon` `triage/accepted` 💬6
- [#3640](https://github.com/vllm-project/aibrix/issues/3640) [bug] local mode: /healthz always returns 500 because ext_proc rewrites envoy's direct response `kind/bug` `good first issue` `area/gateway` `priority/important-soon` 💬4
- [#3639](https://github.com/vllm-project/aibrix/issues/3639) [bug] make build-gateway-plugins fails with "undefined: shutdownGateway" because it builds main.go as a single file `kind/bug` `good first issue` `area/gateway` `priority/important-soon` 💬4
- [#3645](https://github.com/vllm-project/aibrix/issues/3645) [Bug] RayClusterFleet rollout status misses deadlines when scale-up or Recreate writes fail `kind/bug` `area/runtime` `area/orchestration` 💬3
- [#3649](https://github.com/vllm-project/aibrix/issues/3649) [Bug] Store.worker adds cumulative engine counter snapshots to Prometheus CounterVec on every scrape `kind/bug` `area/gateway` 💬2
- [#3643](https://github.com/vllm-project/aibrix/issues/3643) [Bug] TestModelAdapterConcurrentAdaptersShareBaseModelPods still gets an empty-body HTTP 500 on its first probe after #3512 `kind/bug` `area/gateway` `priority/important-soon` `triage/accepted` 💬2

#### 🔒 Closed Issues
- [#3624](https://github.com/vllm-project/aibrix/issues/3624) [Bug] Remaining pod-scoped gauges keep stale series after a pod is deleted or relabeled
- [#3505](https://github.com/vllm-project/aibrix/issues/3505) [Bug] Gateway-tracked gauge series never disappear when a pod is deleted or relabeled

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,551 · **Open issues:** 673 · **Last push:** <1h ago

On November 28, 2026, there were no new releases for the Semantic Router, but several important bug fixes were merged, including enhancements for model runtime calibration (#7489) and decision timeout handling on structured-output calls (#7254). Additionally, the introduction of native MRCR diagnostics to sr-bench (#6004) and improvements in backends discovery and TLS renewal were notable developments. Among new issues, a concerning bug (#7491) was reported where the Envoy gateway cannot reach models with multiple `host.docker.internal` backends, indicating a potential deployment challenge for users. Overall, the day consisted mostly of maintenance and debugging improvements.

#### ✅ Merged PRs
- [#7489](https://github.com/vllm-project/semantic-router/pull/7489) [Bug] Model runtime: keep the calibration peak when a memory sample is missing
- [#7254](https://github.com/vllm-project/semantic-router/pull/7254) [Bug] Honor decision timeout overrides on the second structured-output call
- [#7126](https://github.com/vllm-project/semantic-router/pull/7126) [Test] Cover PR Gate suite diagnostics with recorded queue cases
- [#6004](https://github.com/vllm-project/semantic-router/pull/6004) [Feature] Add native MRCR diagnostics to sr-bench
- [#7457](https://github.com/vllm-project/semantic-router/pull/7457) [Bug] Reach AAAA-only backends in standalone mode
- [#7456](https://github.com/vllm-project/semantic-router/pull/7456) [Bug] Support atomic TLS renewal from selected Docker directories
- [#7454](https://github.com/vllm-project/semantic-router/pull/7454) [Bug] Discover KServe predictor ports from their Services
- [#7422](https://github.com/vllm-project/semantic-router/pull/7422) [Bug] Preserve Anthropic redacted_thinking blocks through the Router
- [#7293](https://github.com/vllm-project/semantic-router/pull/7293) [Bug] Keep the context plugin's call IDs stable across agent steps
- [#6563](https://github.com/vllm-project/semantic-router/pull/6563) [Bug] Record a streamed TTFT from the first content, not the first frame
- [#7496](https://github.com/vllm-project/semantic-router/pull/7496) [Bug] Reject an HTTPS backend IP in standalone config validation
- [#7257](https://github.com/vllm-project/semantic-router/pull/7257) [Bug] Normalize finished empty tool arguments in Chat-to-Responses streams

#### 🐛 New Issues
- [#7491](https://github.com/vllm-project/semantic-router/issues/7491) [Bug] The Envoy gateway can't reach a model with two or more `host.docker.internal` backends `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬4
- [#7486](https://github.com/vllm-project/semantic-router/issues/7486) [Bug] Invalid `toolsDb` fields block deployment from three Operator samples `bug` `accepted` `wg/enterprise-environment` 💬3
- [#7516](https://github.com/vllm-project/semantic-router/issues/7516) [Bug] Custom ground-truth evaluation skips correctly matched domains `bug` `accepted` `wg/evaluation-quality` 💬2
- [#7514](https://github.com/vllm-project/semantic-router/issues/7514) [Bug] make helm-prod uses unpinned Router and Dashboard images by default `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#7485](https://github.com/vllm-project/semantic-router/issues/7485) [Bug] Standalone Operator upgrade leaves Pods that use a pinned legacy Router image in CrashLoopBackOff `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#7477](https://github.com/vllm-project/semantic-router/issues/7477) [Bug] Operator-generated model endpoints fail on Kubernetes clusters with a custom DNS domain `bug` `accepted` `wg/enterprise-environment` 💬1
- [#7538](https://github.com/vllm-project/semantic-router/issues/7538) [Bug] PR Gate lands in a superseded Community run, so approved PRs cannot merge `needs-acceptance` `wg/developer-experience-ecosystem`
- [#7535](https://github.com/vllm-project/semantic-router/issues/7535) [Feature] Exercise the Copilot CLI plugin's listener-rules path against a live Router `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#7531](https://github.com/vllm-project/semantic-router/issues/7531) [Feature] Verify LM Studio as a backend and raise its catalog conformance `enhancement` `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#3378](https://github.com/vllm-project/semantic-router/issues/3378) [Feature] Add native streaming for eligible final Looper stages
- [#6545](https://github.com/vllm-project/semantic-router/issues/6545) [Bug] A streamed request records its TTFT from the first body chunk, keepalives included
- [#5877](https://github.com/vllm-project/semantic-router/issues/5877) [Bug] Model runtime calibration can silently discard valid peak-memory measurements when a probe returns None
- [#7292](https://github.com/vllm-project/semantic-router/issues/7292) [Bug] The context plugin's call ID changes on every request, so agent steps lose the cached prompt
- [#5644](https://github.com/vllm-project/semantic-router/issues/5644) [Bug] Anthropic redacted_thinking blocks are rejected even for Anthropic-to-Anthropic traffic
- [#7200](https://github.com/vllm-project/semantic-router/issues/7200) [Bug] Chat→Responses stream rejects finished tool calls with empty arguments as invalid_stream_tool_arguments
- [#5490](https://github.com/vllm-project/semantic-router/issues/5490) [Feature] recipe-lab sub-issue 2: experiment contract, ledger and threshold proposer (replay tier)
- [#7071](https://github.com/vllm-project/semantic-router/issues/7071) [Feature] Read a session's long turn once across Router replicas: share the guard's window answers or keep a session on one replica
- [#5489](https://github.com/vllm-project/semantic-router/issues/5489) [Feature] recipe-lab sub-issue 1: misroute attribution report
- [#6776](https://github.com/vllm-project/semantic-router/issues/6776) [Bug] system_prompt replace keeps a Messages client's system message inside messages
- [#7212](https://github.com/vllm-project/semantic-router/issues/7212) [Feature] Verify Ollama as a backend and raise its catalog conformance
- [#6768](https://github.com/vllm-project/semantic-router/issues/6768) [Bug] `config apply` on a `--minimal` stack drops serve's tracing-off projection, so every change is refused as a tracing change
- [#7448](https://github.com/vllm-project/semantic-router/issues/7448) [Bug] Standalone config validation accepts an HTTPS backend IP that startup rejects
- [#7167](https://github.com/vllm-project/semantic-router/issues/7167) [Feature] Add Muse Wonder and Muse Ember to the Model Catalog
- [#5878](https://github.com/vllm-project/semantic-router/issues/5878) [Community] Request a Maintainer nomination for Wilson Wu (@wilsonwu)
- [#5574](https://github.com/vllm-project/semantic-router/issues/5574) [Bug] Chat requests with n>1 and stream=true get a 200, then an error at end of stream
- [#7168](https://github.com/vllm-project/semantic-router/issues/7168) [Feature] Add Muse Spark Open to the Model Catalog
- [#7164](https://github.com/vllm-project/semantic-router/issues/7164) [Feature] Add Gemini 3.5 Flash-Lite to the Model Catalog
- [#7252](https://github.com/vllm-project/semantic-router/issues/7252) [Bug] The second structured-output call ignores decision timeout overrides
- [#7443](https://github.com/vllm-project/semantic-router/issues/7443) [Bug] Operator hard-codes HTTPS port 8443 for KServe Standard predictors
- [#7446](https://github.com/vllm-project/semantic-router/issues/7446) [Bug] Standalone Router cannot reach a backend with an AAAA-only hostname
- [#7414](https://github.com/vllm-project/semantic-router/issues/7414) [Bug] Helm renders plaintext gRPC startup and readiness probes for TLS extproc
- [#7452](https://github.com/vllm-project/semantic-router/issues/7452) [Bug] Kubernetes credential rotation deletes a Secret required by Helm rollback
- [#7400](https://github.com/vllm-project/semantic-router/issues/7400) [Bug] A Speech decision discards a healthy fallback candidate's audio
- [#7402](https://github.com/vllm-project/semantic-router/issues/7402) [Bug] The output-limit reasoning rule is skipped on a Looper decision

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*