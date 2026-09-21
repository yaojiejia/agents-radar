# 📡 AI Ecosystem Digest — 2026-09-21

> Generated 2026-09-21 00:52 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 147,120 | 8 | 26 | 2 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 125,511 | 23 | 3 | 37 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,101 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,188 | 4 | 22 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 208,885 | 33 | 1 | 2 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,025 | 25 | 9 | 1 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,160 | 235 | 143 | 176 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 247,473 | 41 | 26 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,260 | 15 | 15 | 29 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,219 | 8 | 15 | 61 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 128,977 | 9 | 5 | 7 | 6 |
| [Ollama](https://github.com/ollama/ollama) | 181,330 | 5 | 4 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,247 | 14 | 15 | 64 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,499 | 11 | 7 | 33 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,101 | 0 | 5 | 6 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,876 | 5 | 21 | 11 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple updates with versions [rust-v0.156.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.12), [rust-v0.156.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.11), and [rust-v0.156.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.10).
- **Qwen Code** introduced versions [v0.24.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.2) and [v0.24.2-nightly.20260920.eceaede18e](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.2-nightly.20260920.eceaede18e).
- **OpenClaw** merged PR [#154154](https://github.com/openclaw/openclaw/pull/154154) to fix cloud session resumption when workers reconnect after updates.
- A hot issue in **OpenAI Codex** (#46819) reports a security scan exhausting a weekly allowance in about 44 minutes, generating **4** comments.
- **OpenCode** saw significant user feedback with a new issue (#50093) highlighting free usage limits and increasing retry timers, attracting **6** comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 147,120 · **Open issues:** 12,206 · **Last push:** 4h ago

There were no new releases for Claude Code on September 21, 2026. However, two significant pull requests were merged: PR #95587 addressed session management by ensuring that resumed sessions with edits open the relevant pane, while PR #95618 improved telemetry by gathering complete rows through $ and sending them in batches for built-in plugins. Among the newly reported issues, the most notable is issue #95758, which raises concerns about the security of Opus, questioning the adequacy of its safeguarding measures. Additionally, there were several bugs reported, including issues with the reauthentication process on Ubuntu and non-responsive features in the macOS version.

#### ✅ Merged PRs
- [#95587](https://github.com/anthropics/claude-code/pull/95587) diff: a resumed session with edits opens the pane, /clear leaves it up, and the session line follows the engine's start
- [#95618](https://github.com/anthropics/claude-code/pull/95618) telemetry: complete rows gathered through $, sent in batches, serving built-in plugins only

#### 🐛 New Issues
- [#95758](https://github.com/anthropics/claude-code/issues/95758) How is a company smart enough to build Opus dumb enough to guard it with something my grandma with Alzheimer's could have coded better? `bug` `area:model`
- [#95757](https://github.com/anthropics/claude-code/issues/95757) [BUG] Fail to reauthenticate my account, Claude Desktop on Ubuntu Linux `bug` `has repro` `platform:linux` `area:auth`
- [#95756](https://github.com/anthropics/claude-code/issues/95756) [FEATURE] Is it ok to use "clauding" as a verb? `invalid`
- [#95755](https://github.com/anthropics/claude-code/issues/95755) Windows: per-second statusLine bash spawns turn the MSYS add_item/errno 1 race into a permanent outage of every Bash call `bug` `platform:windows` `area:bash` `area:statusline`
- [#95754](https://github.com/anthropics/claude-code/issues/95754) [BUG] Desktop 2.2553.1 (macOS): Run button on bash blocks and markdown links do nothing on click in Code tab `bug` `platform:macos` `regression` `area:desktop`
- [#95753](https://github.com/anthropics/claude-code/issues/95753) I am not able to see my project conversation from my phone. Even when I try to … `bug` `needs-info`
- [#95752](https://github.com/anthropics/claude-code/issues/95752) [FEATURE] sandbox credentials mask: substitute the sentinel inside HTTP Basic auth (Base64) so git over HTTPS can authenticate `enhancement` `area:security` `area:sandbox`
- [#95751](https://github.com/anthropics/claude-code/issues/95751) miniaturized windows to show questions `enhancement` `platform:macos` `platform:vscode`

#### 🔒 Closed Issues
- [#67766](https://github.com/anthropics/claude-code/issues/67766) `API Error: The socket connection was closed unexpectedly` — packet captures show server-initiated FIN mid-stream (10 incidents, requestIds included)
- [#82529](https://github.com/anthropics/claude-code/issues/82529) [Billing Bug] Unauthorized Pro→Max upgrade
- [#72748](https://github.com/anthropics/claude-code/issues/72748) Sandboxed Bash fails with "bwrap: Can't create file at .git: Is a directory" in normal (non-worktree) git repos
- [#87587](https://github.com/anthropics/claude-code/issues/87587) [BUG] Plan mode: after "No, keep planning" feedback, the revised plan is never re-shown and edits start without a second approval
- [#87551](https://github.com/anthropics/claude-code/issues/87551) [BUG] https://github.com/anthropics/claude-code/issues/69354..Issue still exists
- [#87543](https://github.com/anthropics/claude-code/issues/87543) [Bug] False Positive in Opus Security Scan
- [#75869](https://github.com/anthropics/claude-code/issues/75869) [Feature Request] Add privacy guardrail warning for diagnostic command outputs
- [#87563](https://github.com/anthropics/claude-code/issues/87563) [BUG] Any link generated by the CLI that contains a URL inside parentheses is unusable
- [#87559](https://github.com/anthropics/claude-code/issues/87559) [FEATURE] Add voice/audio output for Claude's responses in Claude Code
- [#87593](https://github.com/anthropics/claude-code/issues/87593) Cross-session message: sender label shows generic string instead of source session title
- [#87585](https://github.com/anthropics/claude-code/issues/87585) [Feature Request] Add official read-only transcript viewer for session logs
- [#87586](https://github.com/anthropics/claude-code/issues/87586) [MODEL] [MODEL] Repeated inefficient actions during browser automation (stale click coordinates, wrong keyboard shortcut, keyword-guessing) burn excessive session budget
- [#87581](https://github.com/anthropics/claude-code/issues/87581) [BUG] Approving a forwarded teammate permission request with a message silently drops the message
- [#87577](https://github.com/anthropics/claude-code/issues/87577) Agent SDK bundled CLI stalls after final message: transcript has complete end_turn message, but stream-json result is never emitted
- [#87580](https://github.com/anthropics/claude-code/issues/87580) Feedback prompt is a single non-scrolling line — text disappears off-screen after a few words
- [#87572](https://github.com/anthropics/claude-code/issues/87572) Remote Control app: file delivery via SendUserFile fails silently (red error triangle), tool reports success
- [#87570](https://github.com/anthropics/claude-code/issues/87570) [BUG] Claude Code installer hangs indefinitely at "Setting up Claude Code..." on Windows Server 2019 — process spins CPU with no network activity
- [#87565](https://github.com/anthropics/claude-code/issues/87565) [BUG]vm_workspace_diagnosis
- [#87569](https://github.com/anthropics/claude-code/issues/87569) [BUG] Sessions that exit with live background tasks stay "active" forever — orphan reconciliation only runs on resume
- [#87562](https://github.com/anthropics/claude-code/issues/87562) Sessions sidebar: option to limit sessions shown per project/folder group
- [#87561](https://github.com/anthropics/claude-code/issues/87561) [Bug] Conversation compacting hangs indefinitely during token reduction and uses huge tokens
- [#87555](https://github.com/anthropics/claude-code/issues/87555) [Bug] Anthropic API Error: Persistent 429 rate_limit_error despite low usage (1%)
- [#87557](https://github.com/anthropics/claude-code/issues/87557) Memory-file naming: distinguish 'role' (capability/function) from 'relationship' (behavioral norms)
- [#87549](https://github.com/anthropics/claude-code/issues/87549) PushNotification skips even when the terminal/VS Code window is closed or minimized
- [#87545](https://github.com/anthropics/claude-code/issues/87545) [BUG] autoMode in project settings is silently ignored — settings schema does not mark it user-only, unlike sibling restricted keys
- [#87547](https://github.com/anthropics/claude-code/issues/87547) Worktree cleanup deletes live worktrees when a repo is opened from both Windows and WSL (gitdir path-spelling mismatch makes every cross-side worktree look prunable)

### OpenAI Codex (`openai/codex`)

**Stars:** 125,511 · **Open issues:** 18,023 · **Last push:** <1h ago

The latest release of OpenAI Codex includes alpha versions rust-v0.156.0-alpha.12, rust-v0.156.0-alpha.11, and rust-v0.156.0-alpha.10. Key merged features today focus on improving user experience, including enhancements to the terminal user interface (TUI) such as right-click copying for transcript selections (#46895) and the ability to preserve streamed answers when subagents finish (#46867). Additional improvements include the addition of mouse selection to the fullscreen composer (#46858) and streamlined shortcuts in the command center (#46882). Among the new issues, one notable concern is the Codex Security scan exhausting its weekly allowance in a short span of time (#46819), which indicates potential resource management issues under intensive usage.

#### 🚀 New Releases
- [rust-v0.156.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.12) 0.156.0-alpha.12
- [rust-v0.156.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.11) 0.156.0-alpha.11
- [rust-v0.156.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.10) 0.156.0-alpha.10

#### ✅ Merged PRs
- [#46912](https://github.com/openai/codex/pull/46912) Keep quota warnings visible in the TUI
- [#46910](https://github.com/openai/codex/pull/46910) Preserve transcript position when opening settings pickers
- [#46905](https://github.com/openai/codex/pull/46905) Identify local background servers in `/status`
- [#46902](https://github.com/openai/codex/pull/46902) Hide Back to bottom when the current transcript tail is visible
- [#46899](https://github.com/openai/codex/pull/46899) Make transcript list spacing uniform after streaming
- [#46897](https://github.com/openai/codex/pull/46897) Honor the effective terminal color level in activity charts
- [#46895](https://github.com/openai/codex/pull/46895) Add right-click copying for transcript and composer selections
- [#46884](https://github.com/openai/codex/pull/46884) Enable plain clicks on transcript links and style bare URLs
- [#46883](https://github.com/openai/codex/pull/46883) Add `/tui` to choose the terminal UI mode for the next launch
- [#46882](https://github.com/openai/codex/pull/46882) Streamline agent command-center shortcuts and layout
- [#46880](https://github.com/openai/codex/pull/46880) Preserve voice playback across pauses and packet bursts
- [#46879](https://github.com/openai/codex/pull/46879) Count TUI launches by fullscreen transcript configuration
- [#46877](https://github.com/openai/codex/pull/46877) Allow subagents to request MCP elicitation input
- [#46867](https://github.com/openai/codex/pull/46867) Preserve streamed answers when subagents finish
- [#46866](https://github.com/openai/codex/pull/46866) Enable mouse navigation in the TUI usage view
- [#46864](https://github.com/openai/codex/pull/46864) Improve usage report layouts and preserve reading positions
- [#46863](https://github.com/openai/codex/pull/46863) Stabilize usage dashboard navigation and add keyboard help
- [#46862](https://github.com/openai/codex/pull/46862) Refresh analytics on identity changes and compact usage menus
- [#46861](https://github.com/openai/codex/pull/46861) Remove analytics TUI snapshots
- [#46859](https://github.com/openai/codex/pull/46859) Limit the welcome logo animation to onboarding
- [#46858](https://github.com/openai/codex/pull/46858) Add mouse selection and editing to the fullscreen composer
- [#46857](https://github.com/openai/codex/pull/46857) Extract shared text selection helpers for the TUI
- [#46856](https://github.com/openai/codex/pull/46856) Support stadium nodes in Mermaid terminal diagrams
- [#46855](https://github.com/openai/codex/pull/46855) Increase the default terminal probe timeout from 100 ms to 250 ms
- [#46849](https://github.com/openai/codex/pull/46849) Move fullscreen transcript control to TUI configuration
- [#46845](https://github.com/openai/codex/pull/46845) Honor the system clock preference in TUI completion timestamps
- [#46844](https://github.com/openai/codex/pull/46844) Select read-only permissions for temporary structured threads
- [#46840](https://github.com/openai/codex/pull/46840) Simplify agent command center hints and back navigation
- [#46839](https://github.com/openai/codex/pull/46839) Add status filter tabs to the agent command center
- [#46838](https://github.com/openai/codex/pull/46838) Refine the agent command center layout and metadata editing
- [#46837](https://github.com/openai/codex/pull/46837) Improve agent command center rows and page navigation
- [#46835](https://github.com/openai/codex/pull/46835) Respect reduced motion in the voice UI
- [#46832](https://github.com/openai/codex/pull/46832) Add independent controls for TUI visual effects
- [#46752](https://github.com/openai/codex/pull/46752) Add an animated Codex logo to fresh conversations and onboarding
- [#46751](https://github.com/openai/codex/pull/46751) Add a warning footer and dedicated warnings viewer to the TUI
- [#46750](https://github.com/openai/codex/pull/46750) Preserve startup drafts and submit them when the session is ready
- [#46749](https://github.com/openai/codex/pull/46749) Stabilize transcript and composer interactions in the TUI

#### 🐛 New Issues
- [#46819](https://github.com/openai/codex/issues/46819) Codex Security scan exhausted a freshly reset weekly allowance in ~44 minutes through worker/subagent fan-out `bug` `model-behavior` `rate-limits` `app` 💬4
- [#46869](https://github.com/openai/codex/issues/46869) Review-only task interrupted by opaque “Daybreak isn’t available for Astra” banner (GPT-6 Astra High) `bug` `code-review` `app` `safety-check` 💬4
- [#46906](https://github.com/openai/codex/issues/46906) CPU usage exceeds 40% when starting the Codex app `bug` `windows-os` `app` `performance` 💬2
- [#46896](https://github.com/openai/codex/issues/46896) Codex does things I didn't ask it to do. `bug` `model-behavior` `CLI` 💬2
- [#46891](https://github.com/openai/codex/issues/46891) Chat history is missing from ChatGPT desktop app on Windows after updating to 26.915.31945 starting Saturday 19th September 2026. Chat history visible in web app of ChatGPT. `bug` `windows-os` `app` `session` 💬2
- [#46887](https://github.com/openai/codex/issues/46887) Absolutely Nothing Is WORKING `bug` `windows-os` `rate-limits` `app` 💬2
- [#46914](https://github.com/openai/codex/issues/46914) `forced_login_method = "chatgpt"` from config.toml is not respected, while CLI `-c` override works `bug` `auth` `CLI` `app-server` 💬1
- [#46913](https://github.com/openai/codex/issues/46913) Unable to delete "test" chats with appshot experiments. `bug` `windows-os` `app` `session` 💬1
- [#46909](https://github.com/openai/codex/issues/46909) Windows desktop Recents omits older cloud chats that remain searchable and open normally `bug` `windows-os` `app` `session` 💬1
- [#46908](https://github.com/openai/codex/issues/46908) Codex keep in reconnection `bug` `windows-os` `CLI` `connectivity` 💬1
- [#46904](https://github.com/openai/codex/issues/46904) [Quota compensation requested] Codex Goals continued for 5 hours after acknowledged pause (2,466 turns) `bug` `rate-limits` `agent` `app` 💬1
- [#46901](https://github.com/openai/codex/issues/46901) Weekly quota was completely exhausted within just a few hours `bug` `rate-limits` `CLI` 💬1
- [#46898](https://github.com/openai/codex/issues/46898) Windows: starting a new local Work chat in a ChatGPT project fails when the existing project root is in use `bug` `windows-os` `app` 💬1
- [#46875](https://github.com/openai/codex/issues/46875) Windows: apply_patch fails to create parent directories after scoped write permission was granted `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#46915](https://github.com/openai/codex/issues/46915) [Bug] ChatGPT desktop sends unsupported reasoning effort 'minimal' to gpt-5.6-luna `bug` `app` `app-server`
- [#46911](https://github.com/openai/codex/issues/46911) [Bug + Solution] Queued message edits are lost when another app-server sends the message `bug` `CLI` `app-server`
- [#46907](https://github.com/openai/codex/issues/46907) Subject: Banked Codex reset UI Failure — request to verify ledger and expiry-time visibility `bug` `codex-web` `rate-limits`
- [#46903](https://github.com/openai/codex/issues/46903) [Bug + Solution] Python SDK: startup timeout leaves the app-server running, while client reuse fails `bug` `app-server`
- [#46900](https://github.com/openai/codex/issues/46900) codex-windows-sandbox service remains running after reboot and blocks CurrentUser DPAPI validation `bug` `windows-os` `sandbox` `app`
- [#46870](https://github.com/openai/codex/issues/46870) Usage Visualization doesnt render properly in Windows Terminal `bug` `windows-os` `TUI` `CLI`
- [#46894](https://github.com/openai/codex/issues/46894) Required Sites remote plugin cache disappears while inventory remains installed `bug` `CLI` `skills`
- [#46893](https://github.com/openai/codex/issues/46893) Linux desktop app is presented as a consumer release without disclosing its Preview status `enhancement` `app`
- [#46892](https://github.com/openai/codex/issues/46892) Feature request: copy a conversation to another Project without moving the original `enhancement` `app` `session`

#### 🔒 Closed Issues
- [#45870](https://github.com/openai/codex/issues/45870) reasoning summary is set to detailed against my will
- [#46891](https://github.com/openai/codex/issues/46891) Chat history is missing from ChatGPT desktop app on Windows after updating to 26.915.31945 starting Saturday 19th September 2026. Chat history visible in web app of ChatGPT.
- [#46870](https://github.com/openai/codex/issues/46870) Usage Visualization doesnt render properly in Windows Terminal

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,101 · **Open issues:** 846 · **Last push:** <1h ago

On September 21, 2026, Gemini CLI saw the release of version v0.62.0-nightly.20260920.gcfbcaa8df, although no new features or fixes were noted in the merged pull requests or issues over the past 24 hours. The changelog for this nightly release can be explored for any incremental improvements or bug resolutions. Overall, the day was largely routine with no significant updates, but the continued development in the nightly builds suggests ongoing refinement and feature enhancement for the Gemini CLI.

#### 🚀 New Releases
- [v0.62.0-nightly.20260920.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260920.gcfbcaa8df) Release v0.62.0-nightly.20260920.gcfbcaa8df

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,188 · **Open issues:** 2,331 · **Last push:** 2d ago

On September 21, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. However, several significant issues were reported, including issue #4919 regarding the malfunction of the /ask command in auto mode, and issue #4918, which highlights a crash in the built-in ARM64 ripgrep on Linux systems with 64 KiB pages. Additionally, issue #4917 raises concerns about the auto model selection choosing inadequately weak models for processing Linux kernel patch-series work, while issue #4916 reports that MCP `text/plain` `resource.blob` results are being returned as empty output. Overall, it appears to be a routine maintenance day, but these emerging issues could impact user experience and functionality.

#### 🐛 New Issues
- [#4919](https://github.com/github/copilot-cli/issues/4919) /ask does not work in auto mode `triage`
- [#4918](https://github.com/github/copilot-cli/issues/4918) Built-in ARM64 ripgrep crashes on Linux systems with 64 KiB pages due to jemalloc `triage`
- [#4917](https://github.com/github/copilot-cli/issues/4917) Auto model selection picks models too weak for Linux kernel patch-series work `triage`
- [#4916](https://github.com/github/copilot-cli/issues/4916) MCP `text/plain` `resource.blob` results reach the model as empty output `triage`

#### 🔒 Closed Issues
- [#4870](https://github.com/github/copilot-cli/issues/4870) MCP: Figma remote server (mcp.figma.com) fails to load — `-32601` on `server/discover` treated as fatal (works in VS Code)
- [#1886](https://github.com/github/copilot-cli/issues/1886) .github/lsp.json and .github/mcp.json do not work
- [#3762](https://github.com/github/copilot-cli/issues/3762) config option contextTier does nothing
- [#1130](https://github.com/github/copilot-cli/issues/1130) Skills token limit impact on context window
- [#4224](https://github.com/github/copilot-cli/issues/4224) OTel spans for subagent calls omit billing attributes (github.copilot.nano_aiu, github.copilot.cost), so external cost accounting undercounts actual billing
- [#3692](https://github.com/github/copilot-cli/issues/3692) Escape should cancel the current task and focus the pending queued prompt (not discard it)
- [#2922](https://github.com/github/copilot-cli/issues/2922) Feature Request: /remote should support non-GitHub git repositories (e.g. GitLab, Bitbucket)
- [#2012](https://github.com/github/copilot-cli/issues/2012) Session file corrupted: raw U+2028/U+2029 in events.jsonl breaks JSON.parse() on /resume
- [#3874](https://github.com/github/copilot-cli/issues/3874) `preToolUse` agent hook denial does not work
- [#4448](https://github.com/github/copilot-cli/issues/4448) Search stuck and never finishes
- [#4098](https://github.com/github/copilot-cli/issues/4098) Resuming a session can leave truncated and concatenated events in events.jsonl
- [#3118](https://github.com/github/copilot-cli/issues/3118) BYOK model limits catalog is missing gpt-5.5
- [#3958](https://github.com/github/copilot-cli/issues/3958) Windows: v1.0.66 fails to start stdio MCP servers when command is a .bat/.cmd with args (regression from 1.0.65)
- [#3034](https://github.com/github/copilot-cli/issues/3034) Feature request: stash prompt
- [#2726](https://github.com/github/copilot-cli/issues/2726) Bug Report: Bash tool fails to create PTY sessions in iTerm2 (macOS)
- [#2670](https://github.com/github/copilot-cli/issues/2670) Using a BYOK model reports a premium request
- [#2348](https://github.com/github/copilot-cli/issues/2348) [BUG]: extensions_reload and extensions_manage tools deadlock permanently when project has a joinSession() extension
- [#2320](https://github.com/github/copilot-cli/issues/2320) Skill toggling doesn't work when large (~30) number of skills loaded.
- [#4784](https://github.com/github/copilot-cli/issues/4784) [Bug] -i initial prompt can remain pending until a second user message on Windows
- [#2096](https://github.com/github/copilot-cli/issues/2096) Manually resetting to Auto model in /models
- [#4743](https://github.com/github/copilot-cli/issues/4743) ACP: end_turn precedes background-shell completion and autonomous follow-up tool calls; no observable session-idle signal
- [#4738](https://github.com/github/copilot-cli/issues/4738) ask_user form: pressing Enter early submits/cancels and permanently discards the in-progress typed answer

### OpenCode (`anomalyco/opencode`)

**Stars:** 208,885 · **Open issues:** 6,009 · **Last push:** <1h ago

On September 21, 2026, OpenCode saw no new releases, but two notable pull requests were merged: #50255 that extends the documentation for DeepSeek's promotion and #50240, which fixes a CLI issue by ensuring fatal startup causes are reported on stderr. In terms of new issues, a significant concern was raised in #50093 regarding excess usage limits and escalating retry timers across various free models, suggesting potential scalability problems. Additionally, #50155 highlighted a missing Privacy setting in the opencode-go integration with DeepSeek V4 Flash, indicating a gap in region configurations. Other notable issues include a recurring server segfault in #50246 and unresponsive behaviors in terminal commands as described in #50170.

#### ✅ Merged PRs
- [#50255](https://github.com/anomalyco/opencode/pull/50255) docs(web): extend DeepSeek promotion
- [#50240](https://github.com/anomalyco/opencode/pull/50240) fix(cli): report fatal startup causes on stderr

#### 🐛 New Issues
- [#50093](https://github.com/anomalyco/opencode/issues/50093) Free usage exceeded and there's long retry timers keep escalating across different free models 💬6
- [#50155](https://github.com/anomalyco/opencode/issues/50155) opencode-go: DeepSeek V4 Flash requires Global regions but Privacy setting is missing 💬2
- [#50179](https://github.com/anomalyco/opencode/issues/50179) Error from provider (Console) 💬1
- [#50202](https://github.com/anomalyco/opencode/issues/50202) Big Pickle (Free Stealth Model) Produces Corrupted, Non-Functional Output 💬2
- [#50172](https://github.com/anomalyco/opencode/issues/50172) v1 file-plugin loader never falls back to legacy named exports when a v2 default export is present 💬2
- [#50160](https://github.com/anomalyco/opencode/issues/50160) Free Limits exceeds 💬2
- [#50216](https://github.com/anomalyco/opencode/issues/50216) desktop: Export session and Reveal in Explorer fail with "Desktop IPC handler failed" 💬1
- [#50247](https://github.com/anomalyco/opencode/issues/50247) GitHub action: pull_request_review (review body) is not a supported trigger event 💬1
- [#50089](https://github.com/anomalyco/opencode/issues/50089) Session load parses summary.diffs patches from message rows; hundreds of MB of JSON per session, multi-GB heap spike on resume 💬1
- [#50170](https://github.com/anomalyco/opencode/issues/50170) OpenCode gets stuck indefinetly when running terminal commands. 💬1
- [#50208](https://github.com/anomalyco/opencode/issues/50208) tui: "Copied to clipboard" does not update local clipboard over SSH and tmux 💬1
- [#50250](https://github.com/anomalyco/opencode/issues/50250) Session idles silently when a turn ends with `stop` and no model output
- [#50246](https://github.com/anomalyco/opencode/issues/50246) server: v2.0.11 background service segfaults repeatedly (SIGSEGV, Linux x64)
- [#50242](https://github.com/anomalyco/opencode/issues/50242) Docs: opencode.ai/docs/agents lists a built-in `scout` subagent that doesn't exist in v1.18.31 (latest stable)
- [#50241](https://github.com/anomalyco/opencode/issues/50241) plan: plan-mode guard denies writes to configured plan directory (~/.opencode/plan) `2.0`
- [#50234](https://github.com/anomalyco/opencode/issues/50234) Permission prompts don't say what is being approved
- [#50238](https://github.com/anomalyco/opencode/issues/50238) muse spark contributor 1.3, returning the following error: "Error from provider (Console Go): Upstream request failed: [user_blocked] Your access has been restricted due to repeated policy violations."
- [#50237](https://github.com/anomalyco/opencode/issues/50237) provider: openai-compatible endpoint rejects multi-dot tool names
- [#50236](https://github.com/anomalyco/opencode/issues/50236) acp: session/new catalog ignores config providers, agents, and default model since 2.0.4
- [#50235](https://github.com/anomalyco/opencode/issues/50235) Usage exceed
- [#50232](https://github.com/anomalyco/opencode/issues/50232) ai: Kimi K3 tool-loop 400 because reasoning_details replay includes streaming index
- [#50229](https://github.com/anomalyco/opencode/issues/50229) The output panel always outputs a few characters in a loop
- [#50228](https://github.com/anomalyco/opencode/issues/50228) [FEATURE]: Show worktree branch in vertical tab subtitles
- [#50227](https://github.com/anomalyco/opencode/issues/50227) websearch dies on transient Parallel transport errors with no retry or fallback
- [#50226](https://github.com/anomalyco/opencode/issues/50226) Where is Archived Chats?
- [#50222](https://github.com/anomalyco/opencode/issues/50222) [FEATURE]:add vLLM preset for custom models/endpoints
- [#50211](https://github.com/anomalyco/opencode/issues/50211) ACP effort not available in latest version 1.18.31
- [#50220](https://github.com/anomalyco/opencode/issues/50220) tui: no setting to always expand tool call arguments and output in the session transcript
- [#50217](https://github.com/anomalyco/opencode/issues/50217) websearch: Firecrawl provider always returns "No search results found"
- [#50215](https://github.com/anomalyco/opencode/issues/50215) Your session will resume automatically.
- [#50214](https://github.com/anomalyco/opencode/issues/50214) [FEATURE]: Sanitize interrupted running/pending tool parts on subagent resume
- [#50212](https://github.com/anomalyco/opencode/issues/50212) OpenCode Bug Fixes & System Improvements
- [#50213](https://github.com/anomalyco/opencode/issues/50213) [v2] OpenAI Responses WebSocket times out after 5 minutes of reasoning

#### 🔒 Closed Issues
- [#50220](https://github.com/anomalyco/opencode/issues/50220) tui: no setting to always expand tool call arguments and output in the session transcript

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,025 · **Open issues:** 1,513 · **Last push:** <1h ago

On September 21, 2026, Qwen Code released version v0.24.2, which introduced new features such as restoring the remote workspace add flow and exposing the assistant turn settlement lifecycle in the web shell. Additionally, a nightly build, v0.24.2-nightly.20260920.eceaede18e, was made available, featuring enhancements for capturing live voice microphone input with an AudioWorklet. One significant merged pull request involved routing runtime tools through bwrap. Among the new issues, #12287 stands out, focusing on hardening follow-ups for the workflow retry-from-history feature.

#### 🚀 New Releases
- [v0.24.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.2) Release v0.24.2
- [v0.24.2-nightly.20260920.eceaede18e](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.2-nightly.20260920.eceaede18e) Release v0.24.2-nightly.20260920.eceaede18e

#### ✅ Merged PRs
- [#12269](https://github.com/QwenLM/qwen-code/pull/12269) feat(core): Route runtime tools through bwrap

#### 🐛 New Issues
- [#12287](https://github.com/QwenLM/qwen-code/issues/12287) Workflow retry-from-history: hardening follow-ups split out of the feature PR `priority/P2` `type/bug` `category/core` `roadmap/background-automation` 💬7
- [#12303](https://github.com/QwenLM/qwen-code/issues/12303) Cross-session gate: settling, capping and naming sessions in a host that holds several `priority/P2` `type/feature-request` `category/core` `scope/memory-usage` 💬6
- [#12332](https://github.com/QwenLM/qwen-code/issues/12332) web-shell: publish verifier rejects wildcard export targets `priority/P3` `type/bug` `category/development` `scope/packaging` 💬4
- [#12310](https://github.com/QwenLM/qwen-code/issues/12310) web-shell: publish verifier accepts artifacts omitted from npm pack `priority/P2` `type/bug` `category/development` `scope/packaging` 💬4
- [#12333](https://github.com/QwenLM/qwen-code/issues/12333) feat(ci): the token work has no recall or task-success gate — teach the existing benchmark to compare two configurations `priority/P2` `model/long-context` `type/feature-request` `category/telemetry` 💬4
- [#12326](https://github.com/QwenLM/qwen-code/issues/12326) feat(core): the eager tool surface is a hand-maintained static list — let something choose it, without invalidating the prompt prefix `priority/P2` `model/long-context` `type/feature-request` `category/core` 💬4
- [#12320](https://github.com/QwenLM/qwen-code/issues/12320) feat(web-shell): support host settings item allowlists `priority/P3` `type/feature-request` `category/ui` `scope/settings` 💬4
- [#12306](https://github.com/QwenLM/qwen-code/issues/12306) Some settings in Web Shell settings panel remain in English when UI language is set to Chinese `priority/P3` `type/bug` `category/ui` `scope/settings` 💬3
- [#12350](https://github.com/QwenLM/qwen-code/issues/12350) serve: daemon shutdown fails during ACP preheat on macOS `priority/P2` `type/bug` `category/cli` `scope/macos` 💬3
- [#12351](https://github.com/QwenLM/qwen-code/issues/12351) web-shell: publish-artifact verifier's silence assertion breaks on any npm warning, and its `--ignore-scripts` comment names a hook `npm pack` never runs `priority/P3` `type/bug` `category/development` `scope/packaging` 💬3
- [#12314](https://github.com/QwenLM/qwen-code/issues/12314) Main CI failed: Qwen Code CI — live/messages.test.ts > … > are defined and used nowhere outside client/live `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬3
- [#12290](https://github.com/QwenLM/qwen-code/issues/12290) core: MCP inline-media bounding decides admission and labelling from the server-declared mime label, not the bytes `priority/P2` `type/bug` `category/core` `scope/mcp` 💬3
- [#12357](https://github.com/QwenLM/qwen-code/issues/12357) Main CI failed: E2E Tests — sdk-typescript/mcp-server.test.ts > … > should use MCP add tool to add two numbers (+6 more) `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#12335](https://github.com/QwenLM/qwen-code/issues/12335) feat(web-shell): host controls for model add/delete interactions `status/needs-triage` `type/feature-request` 💬2
- [#12296](https://github.com/QwenLM/qwen-code/issues/12296) Main CI failed: Qwen Code CI on e75b8e53b033 `type/bug` `status/ready-for-agent` `autofix/approved` 💬2
- [#12315](https://github.com/QwenLM/qwen-code/issues/12315) feat(desktop): support custom window background image and theme customization 💬2
- [#12289](https://github.com/QwenLM/qwen-code/issues/12289) Main CI failed: Qwen Code CI on 8589f7133198 `type/bug` `status/ready-for-agent` `autofix/approved` 💬2
- [#12288](https://github.com/QwenLM/qwen-code/issues/12288) Main CI failed: Qwen Code CI on 59629fb21e97 `type/bug` `status/ready-for-agent` `autofix/approved` 💬2
- [#12295](https://github.com/QwenLM/qwen-code/issues/12295) Main CI failed: Qwen Code CI on cc9bb988477f `type/bug` `status/ready-for-agent` `autofix/approved` 💬2
- [#12293](https://github.com/QwenLM/qwen-code/issues/12293) feat(web-shell): Trajectory view for inspecting how a session ran (requests, tools, timing) `status/needs-triage` `type/feature-request` 💬2
- [#12366](https://github.com/QwenLM/qwen-code/issues/12366) Deferred review findings from PR #12311: feat(web-shell): present structured shell execution results 💬1
- [#12334](https://github.com/QwenLM/qwen-code/issues/12334) Deferred review findings from PR #12016: fix(ci): tolerate unwritable docker sandbox lock dir on self-hosted runners (#12 💬1
- [#12325](https://github.com/QwenLM/qwen-code/issues/12325) Deferred review findings from PR #11963: fix(ci): synthesize bold in the verify-capture renderer (#11962) 💬1
- [#12313](https://github.com/QwenLM/qwen-code/issues/12313) Deferred review findings from PR #12258: fix(mcp): Make App resource limits configurable per server 💬1
- [#12368](https://github.com/QwenLM/qwen-code/issues/12368) Deferred review findings from PR #12362: fix(web-shell): restore mobile history navigation

#### 🔒 Closed Issues
- [#12048](https://github.com/QwenLM/qwen-code/issues/12048) fix(core): context-usage telemetry is dropped entirely when a non-function tool is present, and mixes two token estimators
- [#12030](https://github.com/QwenLM/qwen-code/issues/12030) feat(extensions): an extension's context file is unconditionally resident, with no path gating, budget, or attribution
- [#12310](https://github.com/QwenLM/qwen-code/issues/12310) web-shell: publish verifier accepts artifacts omitted from npm pack
- [#12314](https://github.com/QwenLM/qwen-code/issues/12314) Main CI failed: Qwen Code CI — live/messages.test.ts > … > are defined and used nowhere outside client/live
- [#11609](https://github.com/QwenLM/qwen-code/issues/11609) feat(browser-use): support concurrent sessions sharing a Chrome profile
- [#12296](https://github.com/QwenLM/qwen-code/issues/12296) Main CI failed: Qwen Code CI on e75b8e53b033
- [#12289](https://github.com/QwenLM/qwen-code/issues/12289) Main CI failed: Qwen Code CI on 8589f7133198
- [#12288](https://github.com/QwenLM/qwen-code/issues/12288) Main CI failed: Qwen Code CI on 59629fb21e97
- [#12295](https://github.com/QwenLM/qwen-code/issues/12295) Main CI failed: Qwen Code CI on cc9bb988477f

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

**Stars:** 390,160 · **Open issues:** 8,209 · **Last push:** <1h ago

On September 21, 2026, OpenClaw reported no new releases but saw significant activity with several merged pull requests addressing various issues. Notably, PR #154020 introduced a feature to link team activity to work sessions, while improvements were made to speed up pending-media session cleanup (#154174). Among the numerous fixes, PR #154171 reduced Gateway restart delays for multiple cloud sessions, and PR #154179 improved UI performance during chat interactions. However, the introduction of new issues such as #153704, which reports a candidate doctor failing during a pre-migration integrity check, has drawn attention, highlighting ongoing challenges with the 2026.9.5 update.

#### ✅ Merged PRs
- [#153852](https://github.com/openclaw/openclaw/pull/153852) fix(tasks): admit restored flow writes before worker commit
- [#154154](https://github.com/openclaw/openclaw/pull/154154) fix: resume cloud sessions when workers reconnect after updates
- [#154206](https://github.com/openclaw/openclaw/pull/154206) fix(test): retire shared read pools between files
- [#154084](https://github.com/openclaw/openclaw/pull/154084) fix(search): keep native search from using unrelated provider credentials
- [#154174](https://github.com/openclaw/openclaw/pull/154174) improve(cron): speed up pending-media session cleanup
- [#154197](https://github.com/openclaw/openclaw/pull/154197) chore: simplify bootstrap budget tests
- [#154020](https://github.com/openclaw/openclaw/pull/154020) feat(reports): link team activity to work sessions
- [#152850](https://github.com/openclaw/openclaw/pull/152850) fix: ACP model requests fail for aliases and provider references
- [#154171](https://github.com/openclaw/openclaw/pull/154171) fix(workers): reduce Gateway restart delays with multiple cloud sessions
- [#154179](https://github.com/openclaw/openclaw/pull/154179) fix(ui): reduce layout stalls during chat and sidebar interactions
- [#154176](https://github.com/openclaw/openclaw/pull/154176) fix: allow plugin state writes after database inode reuse
- [#154163](https://github.com/openclaw/openclaw/pull/154163) fix: avoid history-wide scans during session refreshes
- [#154159](https://github.com/openclaw/openclaw/pull/154159) chore(ui): refresh control ui locales
- [#154118](https://github.com/openclaw/openclaw/pull/154118) fix: keep Tauri new-session shortcut in the foreground
- [#154184](https://github.com/openclaw/openclaw/pull/154184) chore: reuse tool-stream event test fixtures
- [#154177](https://github.com/openclaw/openclaw/pull/154177) test(gateway): join task pagination fixture churn
- [#154151](https://github.com/openclaw/openclaw/pull/154151) fix: avoid claiming macOS has no login keychain
- [#154134](https://github.com/openclaw/openclaw/pull/154134) fix: accept stopped Linux groups in recovery tests
- [#154167](https://github.com/openclaw/openclaw/pull/154167) fix: show creation choices when reopening New agent
- [#154168](https://github.com/openclaw/openclaw/pull/154168) refactor: remove polling and private state from locale retry tests
- [#153317](https://github.com/openclaw/openclaw/pull/153317) fix(transcripts): make configured startup completion observable
- [#152929](https://github.com/openclaw/openclaw/pull/152929) fix(gateway): retain lifecycle notice queue context
- [#154068](https://github.com/openclaw/openclaw/pull/154068) feat: enable structured Tool Search by default
- [#154155](https://github.com/openclaw/openclaw/pull/154155) improve(memory): reduce publication worker startup imports
- [#149738](https://github.com/openclaw/openclaw/pull/149738) fix(tasks): keep chat status reads responsive
- [#151175](https://github.com/openclaw/openclaw/pull/151175) refactor: move plugin blob database work off the calling thread
- [#153948](https://github.com/openclaw/openclaw/pull/153948) perf(test): reuse Gateway database fixtures
- [#153878](https://github.com/openclaw/openclaw/pull/153878) fix: preserve visitor revocation through provider failures
- [#153910](https://github.com/openclaw/openclaw/pull/153910) fix(goals): recover unconfirmed controls after reconnects
- [#154115](https://github.com/openclaw/openclaw/pull/154115) improve: reduce eager imports during Gateway workspace discovery
- [#129310](https://github.com/openclaw/openclaw/pull/129310) fix(ui): allow manual runs for paused automations
- [#154113](https://github.com/openclaw/openclaw/pull/154113) fix: reuse warmed JavaScript bytecode in CI build jobs
- [#154146](https://github.com/openclaw/openclaw/pull/154146) perf(test): remove fixed waits from TUI session-label tests
- [#129341](https://github.com/openclaw/openclaw/pull/129341) fix(ui): preserve composition while renaming sessions
- [#154107](https://github.com/openclaw/openclaw/pull/154107) ci: shorten Windows jobs by sharing project setup
- [#143033](https://github.com/openclaw/openclaw/pull/143033) fix(ui): distinguish known zero costs from missing pricing
- [#154142](https://github.com/openclaw/openclaw/pull/154142) refactor(test): reuse Talk harness provider fixtures
- [#154148](https://github.com/openclaw/openclaw/pull/154148) fix(ui): recover hidden progress refresh startup and canceled retries
- [#154137](https://github.com/openclaw/openclaw/pull/154137) fix: preserve custom agent purpose during creation
- [#154070](https://github.com/openclaw/openclaw/pull/154070) refactor(transcripts): move summary database writes off the caller thread
- [#154138](https://github.com/openclaw/openclaw/pull/154138) fix: prevent archive tests from leaking native filesystem mode
- [#152736](https://github.com/openclaw/openclaw/pull/152736) refactor: move outbound delivery lease SQLite off the Gateway thread
- [#153757](https://github.com/openclaw/openclaw/pull/153757) fix(ui): keep long placement selections readable on mobile
- [#153466](https://github.com/openclaw/openclaw/pull/153466) fix(ci): prevent large workspace recovery proof timeouts
- [#154123](https://github.com/openclaw/openclaw/pull/154123) test(doctor): focus outbound custody on nested maintenance
- [#153981](https://github.com/openclaw/openclaw/pull/153981) fix(github): avoid anonymous quota in authenticated link readers
- [#153779](https://github.com/openclaw/openclaw/pull/153779) fix(agents): avoid stale tool failure replies while waiting for children
- [#153655](https://github.com/openclaw/openclaw/pull/153655) fix(doctor): recover verified session imports with missing or replaced files
- [#154120](https://github.com/openclaw/openclaw/pull/154120) refactor(gateway): simplify scope checks and tool dispatch
- [#154091](https://github.com/openclaw/openclaw/pull/154091) fix(browser): explain disabled control without restart loops
- [#154007](https://github.com/openclaw/openclaw/pull/154007) perf(test): isolate and reuse Gateway and update fixtures
- [#153984](https://github.com/openclaw/openclaw/pull/153984) fix: avoid local health timeouts for wildcard Gateways
- [#153649](https://github.com/openclaw/openclaw/pull/153649) fix(agents): move execution binding writes off the calling thread
- [#153644](https://github.com/openclaw/openclaw/pull/153644) fix(process): preserve child results after early stdin closure
- [#153345](https://github.com/openclaw/openclaw/pull/153345) fix(test): prevent order-dependent agent cleanup failures
- [#154100](https://github.com/openclaw/openclaw/pull/154100) fix: reduce Swift test execution overhead
- [#154001](https://github.com/openclaw/openclaw/pull/154001) refactor(code-mode): execute JavaScript with typed API discovery
- [#154044](https://github.com/openclaw/openclaw/pull/154044) feat(ui): refresh work progress without adding a chat message
- [#153868](https://github.com/openclaw/openclaw/pull/153868) refactor: share session key normalization
- [#153830](https://github.com/openclaw/openclaw/pull/153830) fix(cua): update driver to 0.28.2 for reliable Linux key taps
- [#154097](https://github.com/openclaw/openclaw/pull/154097) fix(ci): run cron files in parallel within the shared worker budget
- [#154046](https://github.com/openclaw/openclaw/pull/154046) perf(plugin-sdk): keep channel target discovery lightweight
- [#154095](https://github.com/openclaw/openclaw/pull/154095) ci: reuse verified test workers across jobs
- [#153967](https://github.com/openclaw/openclaw/pull/153967) chore(i18n): refresh native locales
- [#154099](https://github.com/openclaw/openclaw/pull/154099) refactor(test): share Talk provider fixtures
- [#154082](https://github.com/openclaw/openclaw/pull/154082) fix(ios): prevent chat freezing when sending a photo
- [#153933](https://github.com/openclaw/openclaw/pull/153933) fix(ui): collapsed code previews reveal hidden lines
- [#117114](https://github.com/openclaw/openclaw/pull/117114) fix: fence pnpm link out of source-checkout updates and warn on self-link damage
- [#153947](https://github.com/openclaw/openclaw/pull/153947) fix(qa-lab): prevent refused-upstream test timeouts
- [#154110](https://github.com/openclaw/openclaw/pull/154110) improve(tests): remove sleeps from ingress capacity checks
- [#153842](https://github.com/openclaw/openclaw/pull/153842) perf(diagnostics): account for worker memory and reduce isolate churn
- [#153943](https://github.com/openclaw/openclaw/pull/153943) fix(ci): split agent session test type graph
- [#154096](https://github.com/openclaw/openclaw/pull/154096) fix: prevent sibling installs from breaking test runs
- [#154025](https://github.com/openclaw/openclaw/pull/154025) fix: avoid transient CLI snapshot failures during database writes
- [#154103](https://github.com/openclaw/openclaw/pull/154103) perf(test): avoid worker startup in serial Workboard cases
- [#154052](https://github.com/openclaw/openclaw/pull/154052) fix: avoid repeated skill refresh work after shared-directory changes
- [#154018](https://github.com/openclaw/openclaw/pull/154018) chore(test): overlap isolated CI watcher replay cases
- [#153795](https://github.com/openclaw/openclaw/pull/153795) fix: stop late failure replies for canceled background commands
- [#154030](https://github.com/openclaw/openclaw/pull/154030) fix(tests): avoid cold-start failures in pretag cleanup checks
- [#154049](https://github.com/openclaw/openclaw/pull/154049) fix(tests): make Active Memory timeout checks deterministic
- [#154034](https://github.com/openclaw/openclaw/pull/154034) fix(doctor): repair stale session files whose header crosses a read chunk boundary
- [#154047](https://github.com/openclaw/openclaw/pull/154047) chore(ui): refresh control ui locales
- [#154083](https://github.com/openclaw/openclaw/pull/154083) fix: close task test workers before deleting fixtures
- [#154092](https://github.com/openclaw/openclaw/pull/154092) improve(tts): remove real waits from timeout precedence tests
- [#153662](https://github.com/openclaw/openclaw/pull/153662) fix(plugins): retain live captures and admit shutdown cleanup
- [#153660](https://github.com/openclaw/openclaw/pull/153660) refactor(update): move ledger reads off the calling thread
- [#150773](https://github.com/openclaw/openclaw/pull/150773) fix(macos): shrink universal app downloads by pruning the node worker
- [#154012](https://github.com/openclaw/openclaw/pull/154012) chore(test): avoid waiting for disabled desktop renderers
- [#153679](https://github.com/openclaw/openclaw/pull/153679) fix(update): avoid false Doctor failures during slow cleanup
- [#154063](https://github.com/openclaw/openclaw/pull/154063) fix(tests): remove timing races from Activity refresh coverage
- [#153944](https://github.com/openclaw/openclaw/pull/153944) improve(agents): reduce repeated filtering of streamed comparison text
- [#153979](https://github.com/openclaw/openclaw/pull/153979) refactor: share operator permissions across Gateway calls and events
- [#154086](https://github.com/openclaw/openclaw/pull/154086) perf(test): avoid worker startup in serial Workboard proofs
- [#153939](https://github.com/openclaw/openclaw/pull/153939) fix: keep task lists readable during terminal publication
- [#154008](https://github.com/openclaw/openclaw/pull/154008) fix(ui): enable desktop access from Systems
- [#154085](https://github.com/openclaw/openclaw/pull/154085) refactor(test): share voice-session fixture helpers
- [#154040](https://github.com/openclaw/openclaw/pull/154040) improve: reduce GitHub API work during PR landing
- [#154028](https://github.com/openclaw/openclaw/pull/154028) fix: prevent Tauri startup crashes when restoring saved gateways
- [#154015](https://github.com/openclaw/openclaw/pull/154015) fix(macos): keep discovery warnings out of the model picker
- [#153871](https://github.com/openclaw/openclaw/pull/153871) refactor: consolidate session title request ownership
- [#154023](https://github.com/openclaw/openclaw/pull/154023) fix(ci): reduce Swift test build and fixture overhead
- [#153908](https://github.com/openclaw/openclaw/pull/153908) fix(ui): match skill file icons to the composer skill picker
- [#154042](https://github.com/openclaw/openclaw/pull/154042) fix(update): avoid size failures and memory spikes in Git updates
- [#154014](https://github.com/openclaw/openclaw/pull/154014) fix(ci): use the subagent codec in state migration tests
- [#153973](https://github.com/openclaw/openclaw/pull/153973) refactor: simplify filesystem operations with fs-safe 0.17
- [#153982](https://github.com/openclaw/openclaw/pull/153982) improve(ui): remove redundant Systems machine tooltips
- [#153571](https://github.com/openclaw/openclaw/pull/153571) fix(ui): custom output directories fail during asset finalization
- [#153061](https://github.com/openclaw/openclaw/pull/153061) fix(ui): prevent chat jumps when collaborators send messages
- [#153988](https://github.com/openclaw/openclaw/pull/153988) fix(ui): avoid repeated waits in the people picker
- [#153741](https://github.com/openclaw/openclaw/pull/153741) fix(android): GPT-Live Talk silently falls back to native speech
- [#153986](https://github.com/openclaw/openclaw/pull/153986) perf(test): reuse Doctor and Gateway fixtures
- [#153438](https://github.com/openclaw/openclaw/pull/153438) feat(skills): install and inspect skills on the workspace host
- [#153998](https://github.com/openclaw/openclaw/pull/153998) refactor: remove redundant newline chunking coverage
- [#153888](https://github.com/openclaw/openclaw/pull/153888) fix(opencode-go): send stable session routing header
- [#153772](https://github.com/openclaw/openclaw/pull/153772) fix(plugins): restore SDK imports in captured workers
- [#153927](https://github.com/openclaw/openclaw/pull/153927) perf(test): reuse config write and recovery fixture preparation
- [#153920](https://github.com/openclaw/openclaw/pull/153920) perf(test): reuse Doctor plugin-repair database fixtures
- [#153789](https://github.com/openclaw/openclaw/pull/153789) fix: macOS Gateway stop reports success before shutdown completes
- [#153434](https://github.com/openclaw/openclaw/pull/153434) fix(matrix): fail promptly when request authority expires
- [#134906](https://github.com/openclaw/openclaw/pull/134906) refactor(gateway): reuse canonical workspace stat shapes
- [#153938](https://github.com/openclaw/openclaw/pull/153938) refactor(config): derive extension contracts from schemas
- [#154039](https://github.com/openclaw/openclaw/pull/154039) fix(codex): refresh July managed runtime to 0.155.1
- [#153651](https://github.com/openclaw/openclaw/pull/153651) chore(cli): align updater signal tests with Node test policy
- [#141865](https://github.com/openclaw/openclaw/pull/141865) fix: background continuations lose session access and GitHub tools
- [#153881](https://github.com/openclaw/openclaw/pull/153881) fix: enforce operator roles for tools without stored sessions
- [#153914](https://github.com/openclaw/openclaw/pull/153914) fix(ui): align person mention avatars without profile photos
- [#153879](https://github.com/openclaw/openclaw/pull/153879) fix(mcp): long-running tools lose their connection before returning
- [#153951](https://github.com/openclaw/openclaw/pull/153951) fix(triage): preserve update context in plugin migration guidance
- [#153941](https://github.com/openclaw/openclaw/pull/153941) improve(cron): speed up explicit-revision scratch writes
- [#153080](https://github.com/openclaw/openclaw/pull/153080) fix(ui): keep attachment rows inside narrow composers
- [#153403](https://github.com/openclaw/openclaw/pull/153403) fix(gateway): recover services from shells with inherited markers
- [#153892](https://github.com/openclaw/openclaw/pull/153892) chore(ui): refresh control ui locales
- [#153509](https://github.com/openclaw/openclaw/pull/153509) fix(tasks): keep identifier repair out of Gateway restore
- [#153884](https://github.com/openclaw/openclaw/pull/153884) fix(test): stop tooling fixtures from silently stalling
- [#153458](https://github.com/openclaw/openclaw/pull/153458) improve: reduce mobile gutter test setup time
- [#153838](https://github.com/openclaw/openclaw/pull/153838) refactor(agents): separate subagent serialization from storage
- [#151297](https://github.com/openclaw/openclaw/pull/151297) fix: stop cross-session replies from bouncing after delivery
- [#153961](https://github.com/openclaw/openclaw/pull/153961) fix(deps): clear extended-stable security blockers
- [#153901](https://github.com/openclaw/openclaw/pull/153901) chore: prepare extended-stable 2026.7.35
- [#153900](https://github.com/openclaw/openclaw/pull/153900) fix(release): align frozen validation fixtures
- [#129396](https://github.com/openclaw/openclaw/pull/129396) fix(ui): show cron completion outcomes in run history
- [#153602](https://github.com/openclaw/openclaw/pull/153602) fix(doctor): avoid redundant authentication loading during session migration
- [#150817](https://github.com/openclaw/openclaw/pull/150817) fix(agents): keep cli-runner recovery retry budgets monotonic
- [#153616](https://github.com/openclaw/openclaw/pull/153616) fix(ui): model picker opens effort menu in narrow chat panes
- [#153817](https://github.com/openclaw/openclaw/pull/153817) fix(decisions): allow ten-second evaluations
- [#153958](https://github.com/openclaw/openclaw/pull/153958) improve(workboard): load worker context and captured sessions faster
- [#147120](https://github.com/openclaw/openclaw/pull/147120) fix(doctor): honor config write refusals before gateway repair
- [#153921](https://github.com/openclaw/openclaw/pull/153921) fix(ui): align expired pairing QR notices
- [#153630](https://github.com/openclaw/openclaw/pull/153630) fix: avoid unrelated test typechecks for UI stylesheet changes
- [#153913](https://github.com/openclaw/openclaw/pull/153913) fix: avoid unnecessary ClawHub recommendations
- [#153716](https://github.com/openclaw/openclaw/pull/153716) docs: fix node approval command examples
- [#153850](https://github.com/openclaw/openclaw/pull/153850) fix(agents): preserve settle-wake identity across sibling replay
- [#153646](https://github.com/openclaw/openclaw/pull/153646) fix: correct dashboard gallery count wording
- [#153785](https://github.com/openclaw/openclaw/pull/153785) test(gateway): join child fixture cleanup before deleting state
- [#153782](https://github.com/openclaw/openclaw/pull/153782) fix(ui): align System busyness header controls
- [#153659](https://github.com/openclaw/openclaw/pull/153659) fix(qa): bootstrap isolated fixtures beside an installed Gateway
- [#153911](https://github.com/openclaw/openclaw/pull/153911) fix(ci): keep package builds out of the macOS app test budget
- [#153893](https://github.com/openclaw/openclaw/pull/153893) improve: avoid redundant reads while updating task activity
- [#153799](https://github.com/openclaw/openclaw/pull/153799) feat(acpx): add native Copilot CLI model selection
- [#153862](https://github.com/openclaw/openclaw/pull/153862) fix(ui): isolate Inbox dismissals by authenticated account
- [#153837](https://github.com/openclaw/openclaw/pull/153837) fix(macos): prevent white flash while dashboard loads
- [#148090](https://github.com/openclaw/openclaw/pull/148090) test(daemon): cover launchd recovery settlement
- [#153832](https://github.com/openclaw/openclaw/pull/153832) perf(memory-core): reuse native KNN query processes
- [#153821](https://github.com/openclaw/openclaw/pull/153821) perf(agents): reduce model diagnostic JSON allocations
- [#151721](https://github.com/openclaw/openclaw/pull/151721) fix: keep sidebar previews from blocking conversation clicks
- [#153905](https://github.com/openclaw/openclaw/pull/153905) improve(ui): make session references borderless
- [#153823](https://github.com/openclaw/openclaw/pull/153823) fix(memory-core): restore missing diary entries after context truncation
- [#153419](https://github.com/openclaw/openclaw/pull/153419) fix: avoid circular plugin migration recovery advice
- [#153416](https://github.com/openclaw/openclaw/pull/153416) fix: identify the update step when progress recording fails
- [#153904](https://github.com/openclaw/openclaw/pull/153904) improve: speed up serial Workboard storage tests
- [#153408](https://github.com/openclaw/openclaw/pull/153408) fix(triage): explain missing CLI discovery before recommending installation
- [#150344](https://github.com/openclaw/openclaw/pull/150344) feat(node-host): support native session and policy ownership
- [#153880](https://github.com/openclaw/openclaw/pull/153880) fix(tooling): avoid redundant reads and incomplete CI success
- [#151358](https://github.com/openclaw/openclaw/pull/151358) fix: preserve text-block boundaries in conversation summaries
- [#150669](https://github.com/openclaw/openclaw/pull/150669) fix(ui): clarify GitHub connection flow
- [#153854](https://github.com/openclaw/openclaw/pull/153854) fix(codex): recover oversized tool frames during session preparation

#### 🐛 New Issues
- [#153704](https://github.com/openclaw/openclaw/issues/153704) 2026.9.5 update: candidate doctor dies at fixed ~299s in [state/agent-db] pre-migration integrity check; error blames inference route `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬12
- [#153706](https://github.com/openclaw/openclaw/issues/153706) [Bug]: closed ACP sessions project agentRuntime as {id:"codex", source:"implicit"}, asserting a native runtime they never use `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬8
- [#153882](https://github.com/openclaw/openclaw/issues/153882) Update deadlock: plugin state migrations defer on the updating parent's own install-records lease, aborting Doctor and parking the Gateway (state-migrated-no-rollback) `clawsweeper:needs-info` `impact:crash-loop` `P0` `issue-rating: 🦐 gold shrimp` 💬7
- [#153654](https://github.com/openclaw/openclaw/issues/153654) Session SQLite migration recovery report (session-sqlite-1789901119271-30e54d4f) `clawsweeper:needs-info` `impact:session-state` `P0` `issue-rating: 🦐 gold shrimp` 💬7
- [#153682](https://github.com/openclaw/openclaw/issues/153682) [Bug]: memory-core dreaming — light-phase narrative is always dropped when a recent diary entry was truncated ("publication skipped") `bug` `no-stale` `bug:behavior` `P2` 💬6
- [#153619](https://github.com/openclaw/openclaw/issues/153619) 2026.9.5: Gateway blocked by retained_plugin_source_conflict; recovery is a no-op and generated report omits the remaining issue `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:session-state` 💬5
- [#153859](https://github.com/openclaw/openclaw/issues/153859) [Bug]: Single ACP sessions_spawn causes two wake events `bug` `regression` `P2` `clawsweeper:source-repro` 💬5
- [#153313](https://github.com/openclaw/openclaw/issues/153313) [Bug]: 2026.9.5 Gateway main thread livelocks in acquirePreparedModelRuntimeLeaseFromOwners when a runtime selection is "auto" (normalizePreparedModelRuntimeInput not idempotent) `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` `impact:auth-provider` 💬5
- [#153334](https://github.com/openclaw/openclaw/issues/153334) Update failure: runtime-verification-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬5
- [#153541](https://github.com/openclaw/openclaw/issues/153541) Update failure: repairing (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#153607](https://github.com/openclaw/openclaw/issues/153607) [Bug]: openclaw update/doctor leave several GB of uncleaned /tmp scratch data, can trigger ENOSPC on constrained tmpfs `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬4
- [#153604](https://github.com/openclaw/openclaw/issues/153604) Plugin runtime: `config.loadConfig` removal breaks third-party plugins (wecom-openclaw-plugin) — no shim or load-time detection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#153333](https://github.com/openclaw/openclaw/issues/153333) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬4
- [#154141](https://github.com/openclaw/openclaw/issues/154141) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#153959](https://github.com/openclaw/openclaw/issues/153959) [Bug]: agents.run() can return not_owner after creating the correctly owned collector child, risking duplicate retries `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#153453](https://github.com/openclaw/openclaw/issues/153453) WhatsApp replies wait for recovery after agent registry switches away from connected adapter `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#153566](https://github.com/openclaw/openclaw/issues/153566) qqbot plugin state migration stuck in pending after plugin replacement (@openclaw/qqbot → @tencent-connect/openclaw-qqbot) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#154016](https://github.com/openclaw/openclaw/issues/154016) [Bug]: claude-fable-5-1 rejected with HTTP 400 on native Anthropic path (v2026.9.5); works via standalone Claude Code CLI on same account `P1` `impact:auth-provider` 💬3
- [#154066](https://github.com/openclaw/openclaw/issues/154066) plugins.allow` regenerated on every gateway start silently drops `browser` (and CLI enable does not stick)` `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#153971](https://github.com/openclaw/openclaw/issues/153971) Bedrock provider never picks up rotated AWS STS credentials without a gateway restart (duplicate @smithy/core module instances break cache invalidation) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#153899](https://github.com/openclaw/openclaw/issues/153899) [Bug]: Gateway drain waits out the full TimeoutStopSec — health refresh and workboard lifecycle timers keep firing against closed resources `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#153896](https://github.com/openclaw/openclaw/issues/153896) [Bug]: sessions_spawn outputSchema keeps patternProperties after normalization — WARN on every google run, and the recommended linter reports nothing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#153720](https://github.com/openclaw/openclaw/issues/153720) [Bug]: 2026.9.5 never reclaims plugin source captures on normal paths — doctor --fix (exit 0), Gateway startup, model-catalog worker (idleTimeoutMs: 0) and per-agent tool-surface rebuilds each leak ~5 GB in /tmp `impact:crash-loop` `P0` `impact:ux-release-blocker` 💬3
- [#153822](https://github.com/openclaw/openclaw/issues/153822) Plugin-repair step wipes plugin project directories, then misreports the cause as "requires capability consent" `clawsweeper:needs-live-repro` `impact:data-loss` `P0` `issue-rating: 🐚 platinum hermit` 💬3
- [#153770](https://github.com/openclaw/openclaw/issues/153770) [Bug]: WorkerTaskPool: a task that never settles pins a worker thread at ~100% CPU forever and is never retired (thread leak) `bug` `bug:behavior` `P2` `issue-rating: 🦪 silver shellfish` 💬3
- [#153769](https://github.com/openclaw/openclaw/issues/153769) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#153417](https://github.com/openclaw/openclaw/issues/153417) Subagent completion announce retries indefinitely when requester yields no visible reply (2026.9.5) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#153516](https://github.com/openclaw/openclaw/issues/153516) [Bug]: Plugin runtime staging breaks sqlite-vec optionalDependency hoisting, so native extension vec0.so cannot be found `bug` `no-stale` `regression` `P1` 💬3
- [#153680](https://github.com/openclaw/openclaw/issues/153680) [Feature]: Hide Home/main sessions from the team-mode sidebar without archiving `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#153529](https://github.com/openclaw/openclaw/issues/153529) Update failure: post-update-plugins (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#153622](https://github.com/openclaw/openclaw/issues/153622) [Bug]: macOS Peekaboo get_window_state stores a transient UUID as an owned snapshot `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#153377](https://github.com/openclaw/openclaw/issues/153377) [Bug]: update repair self-contends at finalize:doctor while owning gateway-lifecycle `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬3
- [#153562](https://github.com/openclaw/openclaw/issues/153562) Update failure: database-schema-preflight (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#153421](https://github.com/openclaw/openclaw/issues/153421) [Bug]: Upgrading from 2026.9.4 to 2026.9.5 fails `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#153357](https://github.com/openclaw/openclaw/issues/153357) WS response timeout: CLI write action succeeds on gateway but response does not reach CLI `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#153365](https://github.com/openclaw/openclaw/issues/153365) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#154180](https://github.com/openclaw/openclaw/issues/154180) [Bug]: Telegram polling ingress worker Cannot find module in source-checkout/capture mode `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#154165](https://github.com/openclaw/openclaw/issues/154165) Update failure: finalize:doctor (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#154149](https://github.com/openclaw/openclaw/issues/154149) [Bug]: Codex plugin repeatedly leaves ~300MB openclaw-plugin-build dirs in /tmp until ENOSPC `impact:crash-loop` `P0` `impact:ux-release-blocker` 💬2
- [#154145](https://github.com/openclaw/openclaw/issues/154145) [Bug]: Session row status indicator sits flush against the selection pill's rounded corner `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#154140](https://github.com/openclaw/openclaw/issues/154140) Update failure: finalize:doctor (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#153606](https://github.com/openclaw/openclaw/issues/153606) [Bug]: 2026.9.5 cannot recover verified sessions.json backup after source inode changed `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#154128](https://github.com/openclaw/openclaw/issues/154128) Update failure: post-update-plugins (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#154054](https://github.com/openclaw/openclaw/issues/154054) Session SQLite migration recovery report (session-sqlite-1789934917521-9fb0987a) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:session-state` 💬2
- [#154112](https://github.com/openclaw/openclaw/issues/154112) [Bug]: Discord video attachments classified as audio because duration_secs is checked before the video/* content type (regression from #138031 fix) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#153618](https://github.com/openclaw/openclaw/issues/153618) Design: compact agent payloads and indexed full-text maintenance `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬2
- [#154114](https://github.com/openclaw/openclaw/issues/154114) openclaw update: candidate rehearsal fails with 'No usable, authenticated, tool-capable inference route' despite live Gateway having working model auth `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#154105](https://github.com/openclaw/openclaw/issues/154105) Update failure: requested (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#154077](https://github.com/openclaw/openclaw/issues/154077) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153919](https://github.com/openclaw/openclaw/issues/153919) Adopt fs-safe 0.17 for archive extraction and complete file I/O `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#154019](https://github.com/openclaw/openclaw/issues/154019) Update failure: global-install-failed (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#154036](https://github.com/openclaw/openclaw/issues/154036) [Feature]: Provide some way to view automation (former cronjob) promt as rendered Markdown `enhancement` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬2
- [#153990](https://github.com/openclaw/openclaw/issues/153990) Update failure: managed-service-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬2
- [#154002](https://github.com/openclaw/openclaw/issues/154002) [Bug]: Upgrade rehearsal blocked by retained database of intentionally deleted agent `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬2
- [#153955](https://github.com/openclaw/openclaw/issues/153955) [Bug]: 2026.9.5 — severe chat/composer lag and frequent timeouts across iOS app and WebUI `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#153985](https://github.com/openclaw/openclaw/issues/153985) Update failure: doctor-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153952](https://github.com/openclaw/openclaw/issues/153952) Symlinked state/repository roots break worktree cleanup and config atomic writes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#153970](https://github.com/openclaw/openclaw/issues/153970) backup create --verify fails with SQLite path aliases multiple core database owners in 2026.9.5 `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#153960](https://github.com/openclaw/openclaw/issues/153960) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153954](https://github.com/openclaw/openclaw/issues/153954) model.usage diagnostic event never emitted for IONOS Model Hub / OpenAI-compatible providers (zero usage after normalization) `P2` `impact:other` 💬2
- [#153861](https://github.com/openclaw/openclaw/issues/153861) Model fallback: no user-visible notice and no mid-turn primary re-probe in a synchronous Telegram session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#153930](https://github.com/openclaw/openclaw/issues/153930) [Bug]: 9.4/9.5 upgrade: proxy.enabled=true breaks WebChat/Codex loopback; use HTTP_PROXY with NO_PROXY `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` `impact:auth-provider` 💬2
- [#153422](https://github.com/openclaw/openclaw/issues/153422) [Bug]: Sustained WorkerThread CPU usage after startup when OpenRouter is enabled `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#153847](https://github.com/openclaw/openclaw/issues/153847) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153809](https://github.com/openclaw/openclaw/issues/153809) Update failure: unexpected-error (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#153787](https://github.com/openclaw/openclaw/issues/153787) safeBinProfiles: no way to allow a boolean long flag on a user-configured safe bin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#153768](https://github.com/openclaw/openclaw/issues/153768) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#153773](https://github.com/openclaw/openclaw/issues/153773) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153686](https://github.com/openclaw/openclaw/issues/153686) [Feature]: Preserve named session groups under each agent in team mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#153760](https://github.com/openclaw/openclaw/issues/153760) Update failure: repairing (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#153688](https://github.com/openclaw/openclaw/issues/153688) [Bug]: Native Talk steering shows internal delegation text in Chat `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#153753](https://github.com/openclaw/openclaw/issues/153753) Update failure: finalize:doctor (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#153725](https://github.com/openclaw/openclaw/issues/153725) fix: Matrix credential setup intermittently invalidates database read admission `maintainer` `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#153729](https://github.com/openclaw/openclaw/issues/153729) Update failure: managed-service-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153349](https://github.com/openclaw/openclaw/issues/153349) Desktop nodes need default sharing and a Mac settings control `maintainer` `P2` `clawsweeper:source-repro` `impact:security` 💬2
- [#153701](https://github.com/openclaw/openclaw/issues/153701) [Bug]: Deeply nested external tool schema crashes llama.cpp GBNF schema normalization with RangeError `bug` `bug:crash` `P2` `impact:crash-loop` 💬2
- [#153691](https://github.com/openclaw/openclaw/issues/153691) Update failure: global-install-failed (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#153639](https://github.com/openclaw/openclaw/issues/153639) [Bug]: Model catalog is not ready when selecting another model in a session `bug` `regression` `P1` `impact:auth-provider` 💬2
- [#153623](https://github.com/openclaw/openclaw/issues/153623) [Feature]: Document/support relocating the Gateway state directory outside docker-compose `P3` 💬2
- [#153594](https://github.com/openclaw/openclaw/issues/153594) Assistant-emitted tool-call markup (<invoke name=…>) is delivered verbatim to channels `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#153631](https://github.com/openclaw/openclaw/issues/153631) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#153613](https://github.com/openclaw/openclaw/issues/153613) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153609](https://github.com/openclaw/openclaw/issues/153609) Feature Request: Add option to disable subagent completion push notifications `P3` 💬2
- [#153533](https://github.com/openclaw/openclaw/issues/153533) SQLite task and maintenance index design `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬2
- [#153608](https://github.com/openclaw/openclaw/issues/153608) [Feature]: [Feature]: Local Whisper dictation for the Control UI microphone `enhancement` `P2` `impact:ux-friction` 💬2
- [#153595](https://github.com/openclaw/openclaw/issues/153595) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153378](https://github.com/openclaw/openclaw/issues/153378) [Bug]: triage --run ignores failed update without a correlated restart sentinel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#153507](https://github.com/openclaw/openclaw/issues/153507) Codex background completion can lose final-summary recovery `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#153589](https://github.com/openclaw/openclaw/issues/153589) Update failure: doctor-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153554](https://github.com/openclaw/openclaw/issues/153554) Official kimi provider plugin not published for 2026.9.5 — standing version-drift warning, update no-ops `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#153543](https://github.com/openclaw/openclaw/issues/153543) [Bug]: Failed agent-codex Discord turn delivered to user's Feishu DM with heartbeat-failure copy despite heartbeat disabled (normal failure mislabeled as heartbeat + cross-channel delivery) `P2` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬2
- [#153502](https://github.com/openclaw/openclaw/issues/153502) Session SQLite migration recovery report (session-sqlite-1789884963743-ce317201) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#153530](https://github.com/openclaw/openclaw/issues/153530) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#153535](https://github.com/openclaw/openclaw/issues/153535) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#153505](https://github.com/openclaw/openclaw/issues/153505) [Bug]: Edit tool validates edits but not path, missing path fails deep `P3` `clawsweeper:bulk-filed` 💬2
- [#153308](https://github.com/openclaw/openclaw/issues/153308) FaceTime: reduce agent-consult latency without losing tools or context `maintainer` `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#153391](https://github.com/openclaw/openclaw/issues/153391) [Bug]: Reasoning models cannot be used as `utilityModel` — isolated completions drop configured `params`, and the observer's token budget is hardcoded `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#153423](https://github.com/openclaw/openclaw/issues/153423) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#154220](https://github.com/openclaw/openclaw/issues/154220) [Bug]: openclaw gateway install --force writes broken schtasks gateway.cmd on Windows npm-global installs (9.5 regression) 💬1
- [#154205](https://github.com/openclaw/openclaw/issues/154205) Shared read mocks survive SQLite test lifecycle retirement `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#154213](https://github.com/openclaw/openclaw/issues/154213) Weixin DM omits MsgContext.SenderId, so sender-scoped plugin tools cannot authenticate recall `P2` `impact:session-state` `impact:security` 💬1
- [#154211](https://github.com/openclaw/openclaw/issues/154211) [Feature]: Wake-name gating for Discord bidi voice `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#154195](https://github.com/openclaw/openclaw/issues/154195) [Bug]: Summarization request sends orphaned tool_choice without tools — 400 on strict OpenAI-compatible backends (vLLM), breaking compaction `P1` `clawsweeper:needs-info` `impact:session-state` `impact:auth-provider` 💬1
- [#154130](https://github.com/openclaw/openclaw/issues/154130) Native PR recovery fixtures reject exited Linux process groups `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#154005](https://github.com/openclaw/openclaw/issues/154005) Enable structured Tool Search by default with policy and lifecycle parity `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#154161](https://github.com/openclaw/openclaw/issues/154161) Let System busyness move freely and remember its position `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#154157](https://github.com/openclaw/openclaw/issues/154157) Updater repeats post-plugin completion when model retirement is deferred `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#154153](https://github.com/openclaw/openclaw/issues/154153) [Bug]: Dream Diary narrative aborts with "No callable tools remain ... explicit tool allowlist" when tools.alsoAllow is set `P2` `impact:session-state` 💬1
- [#154147](https://github.com/openclaw/openclaw/issues/154147) Consolidate filesystem ownership with released fs-safe primitives `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#153755](https://github.com/openclaw/openclaw/issues/153755) [Bug]: Long placement selections are clipped on mobile `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153889](https://github.com/openclaw/openclaw/issues/153889) Simplify Code Mode to JavaScript execution with typed tool discovery `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#154004](https://github.com/openclaw/openclaw/issues/154004) Reports: link team activity to current work sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#154124](https://github.com/openclaw/openclaw/issues/154124) Gateway: catalog-published invalidates every session row and Control UI falls back to a 30s sessions.catalog.list poll `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#154109](https://github.com/openclaw/openclaw/issues/154109) [Feature]: Per-call sampling overrides and target capabilities for plugin llm.complete `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#154108](https://github.com/openclaw/openclaw/issues/154108) CI: align cache publishers and improve measured test scheduling `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#154104](https://github.com/openclaw/openclaw/issues/154104) [Bug]: Idle Gateway with 4 Matrix E2EE accounts: ~50% CPU and ~52 MB/min writes; none with Matrix disabled or on 2026.7.1 `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#154101](https://github.com/openclaw/openclaw/issues/154101) Loopback MCP bridge sends no periodic SSE keepalive — claude-cli notification stream dies at 6 min idle and never recovers `P2` `impact:other` 💬1
- [#154102](https://github.com/openclaw/openclaw/issues/154102) [Bug]: updater lets the service unit's PATH select the Node runtime, so updates can run on a Node that fails the package's own engines constraint `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#154055](https://github.com/openclaw/openclaw/issues/154055) [Bug] Windows npm update fails at candidate snapshot: canary path contains a \\?\ prefix that degrades into a literal "?" path component (ENOENT) `bug` `bug:crash` `P0` `impact:ux-release-blocker` 💬1
- [#154072](https://github.com/openclaw/openclaw/issues/154072) macOS app renders Dashboard Website widgets as blank `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#154081](https://github.com/openclaw/openclaw/issues/154081) [Feature]: Support GPT-Live 1 through Azure Foundry for OpenClaw Talk `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#154075](https://github.com/openclaw/openclaw/issues/154075) iOS: sent photos disappear from chat after history refresh `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#154074](https://github.com/openclaw/openclaw/issues/154074) Android: opt-in prepared incoming data calls over the paired Gateway `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#154045](https://github.com/openclaw/openclaw/issues/154045) [Feature]: Retire compaction checkpoint controls while preserving Fork and history `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153717](https://github.com/openclaw/openclaw/issues/153717) [Bug]: Captured plugin Workers cannot resolve openclaw with native registerHooks, breaking Codex final-answer recovery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#154029](https://github.com/openclaw/openclaw/issues/154029) Update failure: runtime-verification-failed (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#154031](https://github.com/openclaw/openclaw/issues/154031) [Regression] Browser Talk still speaks replies in transcription mode — 2026.9.5 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#154032](https://github.com/openclaw/openclaw/issues/154032) [Feature]: Mention people in the quick composer `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#154027](https://github.com/openclaw/openclaw/issues/154027) Update failure: requested (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#154024](https://github.com/openclaw/openclaw/issues/154024) Update failure: finalize:doctor (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#154022](https://github.com/openclaw/openclaw/issues/154022) [Feature]: Implement a button to copy my own input from chat window as Markdown `enhancement` `P3` `impact:ux-friction` 💬1
- [#154021](https://github.com/openclaw/openclaw/issues/154021) [Bug]: macOS app flips gateway.mode to remote on a local-gateway host, uninstalls the LaunchAgent, and writes captured terminal stdout into gateway.remote.token `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:data-loss` `impact:security` 💬1
- [#154009](https://github.com/openclaw/openclaw/issues/154009) [Bug]: Tripple backquote (```) is not formatted as "code block" in session chat `bug` `regression` `P3` `impact:ux-friction` 💬1
- [#153875](https://github.com/openclaw/openclaw/issues/153875) [Bug]: Standalone tool calls ignore operator role limits when the session does not exist `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153999](https://github.com/openclaw/openclaw/issues/153999) [Bug]: Codex cancellation stops retained background work from another source `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153977](https://github.com/openclaw/openclaw/issues/153977) [Bug]: Completing task disappears from its owner's task tree when a subscriber updates it in the same window `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153976](https://github.com/openclaw/openclaw/issues/153976) Active transcript projection rebuild is a full-table rescan and rejects inbound messages while running (SessionTranscriptProjectionUnavailableError, ~64s on a 1.2k-event session) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#153963](https://github.com/openclaw/openclaw/issues/153963) [Feature]: Make message recovery actionable in Inbox System `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153965](https://github.com/openclaw/openclaw/issues/153965) feat: load personal USER files from authenticated profile identity `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#153957](https://github.com/openclaw/openclaw/issues/153957) Custom OpenAI-compatible providers never receive stream_options.include_usage, so model.usage is never emitted `P2` `impact:other` 💬1
- [#153802](https://github.com/openclaw/openclaw/issues/153802) [Bug]: Sibling requester-settle replay conflicts with its durable completion after restart `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#153949](https://github.com/openclaw/openclaw/issues/153949) [Bug]: Codex tool-output screenshots are dropped before Control UI reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#153923](https://github.com/openclaw/openclaw/issues/153923) [Bug]: browser upload sends a filename ending in a dot or space when the name exceeds 180 bytes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153918](https://github.com/openclaw/openclaw/issues/153918) [Feature]: Apple Watch access to allowlisted private services through the Gateway `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#153886](https://github.com/openclaw/openclaw/issues/153886) [Feature]: Explicit everyone mention in Team conversations `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#153903](https://github.com/openclaw/openclaw/issues/153903) [Bug]: iOS background location.get over Tailscale reconnects then fails; foreground succeeds `P2` `issue-rating: 🦪 silver shellfish` `impact:other` `maturity:stable` 💬1
- [#153863](https://github.com/openclaw/openclaw/issues/153863) [Bug]: Hidden local sessions_spawn repeatedly emits placeholder cloud placement and fails validation `bug` `maintainer` `P2` `clawsweeper:needs-info` 💬1
- [#153864](https://github.com/openclaw/openclaw/issues/153864) [Bug]: Stale per-session contextTokens self-perpetuate via implicit 128k contextWindow cap; sessions.patch blocks correction `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#153867](https://github.com/openclaw/openclaw/issues/153867) [Bug][Android] location.get returns LOCATION_BACKGROUND_UNAVAILABLE while Play app is foreground `P2` `issue-rating: 🦪 silver shellfish` `impact:other` `maturity:stable` 💬1
- [#153858](https://github.com/openclaw/openclaw/issues/153858) [Feature]: Video Talk visual guidance with annotations and user correction `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#153853](https://github.com/openclaw/openclaw/issues/153853) [Bug]: Behavior bug (incorrect output/state without crash) — hang/timeout, no crash `bug` `bug:behavior` `P1` `impact:auth-provider` 💬1
- [#153845](https://github.com/openclaw/openclaw/issues/153845) [Bug]: conversation listing fails after a Matrix, Telegram, or Slack account is removed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153827](https://github.com/openclaw/openclaw/issues/153827) Bug: obsolete async questions remain pending after later work completes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#153730](https://github.com/openclaw/openclaw/issues/153730) [Bug]: `openclaw directory peers list --channel ""` lists the inferred channel's contacts instead of failing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153811](https://github.com/openclaw/openclaw/issues/153811) [Feature]: Run the Docker container as an operator-chosen uid/gid (OPENCLAW_PUID/OPENCLAW_PGID) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#153807](https://github.com/openclaw/openclaw/issues/153807) Feature: let agents explicitly mention people in sessions `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#153801](https://github.com/openclaw/openclaw/issues/153801) [Feature]: In-app notifications for session mentions `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#153797](https://github.com/openclaw/openclaw/issues/153797) [Feature]: Personal session backgrounds with opt-out and custom images `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#153794](https://github.com/openclaw/openclaw/issues/153794) Compaction of large sessions spikes heap to GBs and blocks event loop for 10-40s (request: off-thread/incremental compaction) `P1` `impact:session-state` `impact:crash-loop` 💬1
- [#153791](https://github.com/openclaw/openclaw/issues/153791) Deferred plugin session import can never verify after legacy session stores are archived `impact:session-state` `P0` `impact:ux-release-blocker` 💬1
- [#153750](https://github.com/openclaw/openclaw/issues/153750) [Bug]: Nextcloud Talk send reports a configured bot secret as missing when its secret file cannot be read `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153743](https://github.com/openclaw/openclaw/issues/153743) [Bug]: Provider tool-schema compatibility hooks recurse into untrusted external tool schemas with no depth budget (DoS) `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153744](https://github.com/openclaw/openclaw/issues/153744) [Bug]: a corrupted xAI OAuth token response silently replaces the working refresh token and signs the operator out `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153748](https://github.com/openclaw/openclaw/issues/153748) [Feature]: Allow error-only automation alerts without recovery messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#153312](https://github.com/openclaw/openclaw/issues/153312) [Feature]: Identify configured cloud backends in environment pickers `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#153733](https://github.com/openclaw/openclaw/issues/153733) Update failure: finalize:doctor (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#153732](https://github.com/openclaw/openclaw/issues/153732) 2026.9.5 live Gateway: WorkerThread ~1 core + 3GiB RSS from session-store structured clone (not catalog, not cleanup --enforce) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#153724](https://github.com/openclaw/openclaw/issues/153724) [Bug]: Deeply nested reasoning replay payload crashes reasoning sanitizer with RangeError `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153719](https://github.com/openclaw/openclaw/issues/153719) [Bug]: Deeply nested session transcript content crashes transcript text collection with RangeError `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153572](https://github.com/openclaw/openclaw/issues/153572) [Bug]: One retired plugin instance makes the bundled MCP loopback return 500 for every request after a config hot reload — CLI backends lose all OpenClaw tools until restart (2026.9.5) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#153713](https://github.com/openclaw/openclaw/issues/153713) [Bug]: Deeply nested external tool schema crashes DeepSeek schema normalization with RangeError `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153714](https://github.com/openclaw/openclaw/issues/153714) [Bug]: `--to` cannot derive an existing Telegram session route; `--session-key` to the same session works `P2` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#153712](https://github.com/openclaw/openclaw/issues/153712) [Bug]: Codex harness releases the turn on a plugin tool's terminate:true but never projects it into toolMetas, so core finalizes the released turn and delivers the fallback text `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#153708](https://github.com/openclaw/openclaw/issues/153708) Config load dies with RangeError in the read-path $include pre-scan on deeply nested documents `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#153700](https://github.com/openclaw/openclaw/issues/153700) [Bug]: Deeply nested external tool schema crashes OpenAI strict schema normalization with RangeError `bug` `bug:crash` `P2` `impact:crash-loop` 💬1
- [#153702](https://github.com/openclaw/openclaw/issues/153702) [Feature]: Link Provider and Model configuration. `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#153697](https://github.com/openclaw/openclaw/issues/153697) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#153695](https://github.com/openclaw/openclaw/issues/153695) Session SQLite migration recovery report (session-sqlite-1789908130492-f9f36936) `P2` `impact:session-state` 💬1
- [#153687](https://github.com/openclaw/openclaw/issues/153687) [Bug]: Deeply nested external tool schema crashes Gemini schema inspection with RangeError `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153675](https://github.com/openclaw/openclaw/issues/153675) [Bug]: Deeply nested config env-ref collection crashes with RangeError `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153674](https://github.com/openclaw/openclaw/issues/153674) [Bug]: Deeply nested legacy model-ref config crashes rewriteModelRefs with RangeError `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153678](https://github.com/openclaw/openclaw/issues/153678) Telegram: support Guest Mode (Bot API 10.0 guest_message / answerGuestQuery) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#153677](https://github.com/openclaw/openclaw/issues/153677) Telegram: use native message drafts (sendMessageDraft) for streaming replies `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#153668](https://github.com/openclaw/openclaw/issues/153668) [Bug]: Deeply nested config change path collection crashes with RangeError `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#153666](https://github.com/openclaw/openclaw/issues/153666) [Bug]: Non-reentrant store-writer admission self-deadlocks on the same SQLite store path `bug` `bug:crash` `P2` `impact:crash-loop` 💬1
- [#153670](https://github.com/openclaw/openclaw/issues/153670) Discord/brave/byteplus npm plugin packages get redacted to `<redacted-handle>` in update failure output `P2` `impact:ux-friction` 💬1
- [#153671](https://github.com/openclaw/openclaw/issues/153671) Control UI webchat: final assistant reply rendered twice while transcript stores exactly one copy (zhipu openai-completions segment fallback) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬1
- [#153669](https://github.com/openclaw/openclaw/issues/153669) claude-cli backend: per-turn hard limit (8388608 chars / 20000 lines) kills sessions with no config escape `P1` `impact:message-loss` 💬1
- [#153664](https://github.com/openclaw/openclaw/issues/153664) Cancelled Codex-native session re-woken by its own child's announce continuation, merges to main 65 min later; resume survives process-tree kill `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#153611](https://github.com/openclaw/openclaw/issues/153611) Telegram native-approval bootstrap retries every 1s with no backoff on 'pairing required' `P2` `impact:crash-loop` 💬1
- [#153577](https://github.com/openclaw/openclaw/issues/153577) [Feature]: theme-matched light and dark app backgrounds `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#153617](https://github.com/openclaw/openclaw/issues/153617) CLI: openclaw-plugin-build-* scratch dir leaked per invocation (mkdtemp in createPluginSourceCapture never reclaimed on CLI path) `P1` `impact:other` 💬1
- [#153605](https://github.com/openclaw/openclaw/issues/153605) New chat sessions hide reasoning by default, even when configured to show it `P2` `impact:ux-friction` 💬1
- [#153598](https://github.com/openclaw/openclaw/issues/153598) Android beta screenshots discard emulator startup diagnostics `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#153593](https://github.com/openclaw/openclaw/issues/153593) Session SQLite migration recovery report (session-sqlite-1789895151161-04ab9f24) `P3` 💬1
- [#153592](https://github.com/openclaw/openclaw/issues/153592) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#153588](https://github.com/openclaw/openclaw/issues/153588) [Bug]: /tmp/openclaw-plugin-build-* staging dirs leak per CLI invocation since v2026.9.5 `P1` `impact:crash-loop` 💬1
- [#153544](https://github.com/openclaw/openclaw/issues/153544) [Feature]: Continue CI watching and squash landing when GraphQL quota is exhausted `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#153547](https://github.com/openclaw/openclaw/issues/153547) Update failure: managed-service-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#153414](https://github.com/openclaw/openclaw/issues/153414) Internal grounding context leaks into chat as a standalone phantom message, especially during Gateway restart drain 💬1
- [#153493](https://github.com/openclaw/openclaw/issues/153493) [Bug]: POSIX !-resolvers skip configured-shell path used on Windows `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#153524](https://github.com/openclaw/openclaw/issues/153524) Session SQLite migration recovery report (session-sqlite-1789885304363-86ee7433) `P2` `impact:session-state` 💬1
- [#153522](https://github.com/openclaw/openclaw/issues/153522) Internal steering skip note ('Skipped to process an incoming message.') leaks as final channel reply `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬1
- [#153521](https://github.com/openclaw/openclaw/issues/153521) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#153517](https://github.com/openclaw/openclaw/issues/153517) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#153503](https://github.com/openclaw/openclaw/issues/153503) [Bug]: codex login status matched by regex against merged stdout+stderr `P2` `impact:auth-provider` `clawsweeper:bulk-filed` 💬1
- [#153496](https://github.com/openclaw/openclaw/issues/153496) [Bug]: Gateway call(): onHelloOk observer throw swallowed mid-connect `P3` `clawsweeper:bulk-filed` 💬1
- [#153504](https://github.com/openclaw/openclaw/issues/153504) [Bug]: Edit tool merges legacy oldText/newText on top of edits[], duplicate fails whole edit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153500](https://github.com/openclaw/openclaw/issues/153500) [Bug]: basenameFromMediaReference falls back to path.basename(full URL) on parse failure `P3` `clawsweeper:bulk-filed` 💬1
- [#153506](https://github.com/openclaw/openclaw/issues/153506) [Docs]: Telegram troubleshooting references unsupported Node 22 behavior twice `P3` `clawsweeper:no-new-fix-pr` `issue-rating: 🌊 off-meta tidepool` `clawsweeper:bulk-filed` 💬1
- [#153495](https://github.com/openclaw/openclaw/issues/153495) [Bug]: Gateway call(): onSignalAbort throw swallowed, abort may not happen `P2` `impact:other` `clawsweeper:bulk-filed` 💬1
- [#153499](https://github.com/openclaw/openclaw/issues/153499) [Bug]: normalizeAgentPlanSteps silently drops unknown status/empty steps `P3` `clawsweeper:bulk-filed` 💬1
- [#153501](https://github.com/openclaw/openclaw/issues/153501) [Bug]: Corrupt restart-sentinel JSON columns read as null, recovery context lost `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#153498](https://github.com/openclaw/openclaw/issues/153498) [Bug]: Delivery-queue media-spool removal failures swallowed, orphaned artifacts accumulate `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153494](https://github.com/openclaw/openclaw/issues/153494) [Bug]: Reply-dispatcher observer errors dropped at three sites (onIdle, onError x2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153497](https://github.com/openclaw/openclaw/issues/153497) [Bug]: isStartupEntryInstalled treats access-denied as not-installed, duplicates Windows login items `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153489](https://github.com/openclaw/openclaw/issues/153489) [Bug]: Codex credential readers return null for errors, indistinguishable from not logged in `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#153486](https://github.com/openclaw/openclaw/issues/153486) [Bug]: Edit tool silently drops model-sent JSON-string edits, fails with confusing validation error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153492](https://github.com/openclaw/openclaw/issues/153492) [Bug]: !-resolver discards child stderr, error names command but not output `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#153487](https://github.com/openclaw/openclaw/issues/153487) [Bug]: Settlement-chain has no per-settlement isolation, one throw skips all later settlements `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153490](https://github.com/openclaw/openclaw/issues/153490) [Bug]: Telegram callback delete-failure swallowed, stale live buttons plus new reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153488](https://github.com/openclaw/openclaw/issues/153488) [Bug]: openclaw status swallows vector-probe failures, reports unprobed status as current `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#153491](https://github.com/openclaw/openclaw/issues/153491) [Bug]: Telegram something-went-wrong fallback send failure swallowed, zero user feedback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#153485](https://github.com/openclaw/openclaw/issues/153485) [Bug]: !-command credential cache is process-lifetime including negatives, rotation never picked up `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#153483](https://github.com/openclaw/openclaw/issues/153483) [Bug]: clearGatewayRestartIntentSync swallows failure, stale intent can trigger unwanted restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153484](https://github.com/openclaw/openclaw/issues/153484) [Bug]: Empty env var resolves to literal variable name as credential `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#153481](https://github.com/openclaw/openclaw/issues/153481) [Bug]: Local package source silently skipped when statSync fails (EACCES/ELOOP misclassified) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#153482](https://github.com/openclaw/openclaw/issues/153482) [Bug]: Clobber-snapshot lock-release failures swallowed, safety snapshots stall 30s silently `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#153456](https://github.com/openclaw/openclaw/issues/153456) Make Discord and Slack E2E skills reusable with Convex-login-only setup `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#153415](https://github.com/openclaw/openclaw/issues/153415) Reduce unnecessary GitHub API work during PR review and CI polling `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#153440](https://github.com/openclaw/openclaw/issues/153440) [Bug]: Plugin tool resolves standalone but is unavailable to live agent on 2026.9.5 `bug` `regression` `P2` `issue-rating: 🦪 silver shellfish` 💬1
- [#153430](https://github.com/openclaw/openclaw/issues/153430) [Bug]: a deep $include config that passes include resolution crashes later load stages (deep-merge, env substitution, migration probes) with RangeError `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#153426](https://github.com/openclaw/openclaw/issues/153426) Curated memory roots (`MEMORY.md` / `USER.md`) are silently and permanently excluded from bootstrap injection by the provenance ratchet — including after ordinary agent behavior (a web-search turn), with no diagnostics, no CLI, and no recovery `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#153401](https://github.com/openclaw/openclaw/issues/153401) Update recovery requires manual service, state, and diagnostic intervention `maintainer` `P1` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#153771](https://github.com/openclaw/openclaw/issues/153771) [Feature]: Design staged Decision consumers for turn context, bounded replanning, and Tool Search

#### 🔒 Closed Issues
- [#152759](https://github.com/openclaw/openclaw/issues/152759) [update] `openclaw update` from 2026.9.4 to 2026.9.5 fails with reason code `doctor-failed`; auto-rollback succeeds but upgrade is silent and unactionable
- [#153704](https://github.com/openclaw/openclaw/issues/153704) 2026.9.5 update: candidate doctor dies at fixed ~299s in [state/agent-db] pre-migration integrity check; error blames inference route
- [#153246](https://github.com/openclaw/openclaw/issues/153246) Plugin build temp dirs (openclaw-plugin-build-*) are never cleaned up, growing ~7.5 GB/day
- [#152884](https://github.com/openclaw/openclaw/issues/152884) Updating Openclaw - Deadlock
- [#153067](https://github.com/openclaw/openclaw/issues/153067) Gateway in steady state re-copies the entire state DB every ~5 s per instance (~170 MB per read, ~5.9 TB/day of staging writes)
- [#153882](https://github.com/openclaw/openclaw/issues/153882) Update deadlock: plugin state migrations defer on the updating parent's own install-records lease, aborting Doctor and parking the Gateway (state-migrated-no-rollback)
- [#153290](https://github.com/openclaw/openclaw/issues/153290) [Bug]: plugins reload removes the previous plugin build generation while a live channel adapter still loads from it → ENOENT in WhatsApp after-delivery hook (2026.9.5)
- [#153654](https://github.com/openclaw/openclaw/issues/153654) Session SQLite migration recovery report (session-sqlite-1789901119271-30e54d4f)
- [#95840](https://github.com/openclaw/openclaw/issues/95840) contextPruning (mode: cache-ttl) never fires on OpenAI models: isCacheTtlEligibleProvider excludes OpenAI, so the idle-gap tool-result firebreak is dead for the highest-volume provider
- [#153682](https://github.com/openclaw/openclaw/issues/153682) [Bug]: memory-core dreaming — light-phase narrative is always dropped when a recent diary entry was truncated ("publication skipped")
- [#153619](https://github.com/openclaw/openclaw/issues/153619) 2026.9.5: Gateway blocked by retained_plugin_source_conflict; recovery is a no-op and generated report omits the remaining issue
- [#139239](https://github.com/openclaw/openclaw/issues/139239) [Bug]: iOS/iPadOS 2026.8.1: image attachments hang before reaching the gateway
- [#153313](https://github.com/openclaw/openclaw/issues/153313) [Bug]: 2026.9.5 Gateway main thread livelocks in acquirePreparedModelRuntimeLeaseFromOwners when a runtime selection is "auto" (normalizePreparedModelRuntimeInput not idempotent)
- [#153334](https://github.com/openclaw/openclaw/issues/153334) Update failure: runtime-verification-failed (2026.9.4)
- [#87256](https://github.com/openclaw/openclaw/issues/87256) [Bug]: High idle CPU on macOS gateway, possibly related to chokidar awaitWriteFinish polling
- [#111815](https://github.com/openclaw/openclaw/issues/111815) image tool: 60s timeout for Anthropic vision when direct API returns in ~2s
- [#153541](https://github.com/openclaw/openclaw/issues/153541) Update failure: repairing (2026.9.5)
- [#153607](https://github.com/openclaw/openclaw/issues/153607) [Bug]: openclaw update/doctor leave several GB of uncleaned /tmp scratch data, can trigger ENOSPC on constrained tmpfs
- [#153250](https://github.com/openclaw/openclaw/issues/153250) backup create aborts on any file vanishing mid-walk (ENOENT untolerated), and on a single dangling absolute symlink
- [#152562](https://github.com/openclaw/openclaw/issues/152562) [Bug]: memory status reports the llama-cpp adapter default model (EmbeddingGemma) instead of the configured local.modelPath
- [#152879](https://github.com/openclaw/openclaw/issues/152879) [Bug]: 2026.9.5 Doctor restoration still times out in LoadUnit admission guards after #149970
- [#114292](https://github.com/openclaw/openclaw/issues/114292) [Bug]: escape sequences in content parameter no longer parsed as newlines after v2026.7.1 upgrade`
- [#108555](https://github.com/openclaw/openclaw/issues/108555) Subagent runtime: exec-tool stalls inside subagent sessions while write-tool and LLM traffic continue to function
- [#108690](https://github.com/openclaw/openclaw/issues/108690) [Bug]: OpenClaw was upgraded from v2026.6.11 to v2026.7.1 , grammar parse failure
- [#154016](https://github.com/openclaw/openclaw/issues/154016) [Bug]: claude-fable-5-1 rejected with HTTP 400 on native Anthropic path (v2026.9.5); works via standalone Claude Code CLI on same account
- [#141799](https://github.com/openclaw/openclaw/issues/141799) [Bug]: nested scope narrowing drops read authority implied by operator.write
- [#153720](https://github.com/openclaw/openclaw/issues/153720) [Bug]: 2026.9.5 never reclaims plugin source captures on normal paths — doctor --fix (exit 0), Gateway startup, model-catalog worker (idleTimeoutMs: 0) and per-agent tool-surface rebuilds each leak ~5 GB in /tmp
- [#149566](https://github.com/openclaw/openclaw/issues/149566) WebUI: narrow sidebar hovercards can intercept conversation clicks
- [#75184](https://github.com/openclaw/openclaw/issues/75184) [Bug]: `agents.defaults.skipBootstrap: true` is a no-op for workspace bootstrap files
- [#153516](https://github.com/openclaw/openclaw/issues/153516) [Bug]: Plugin runtime staging breaks sqlite-vec optionalDependency hoisting, so native extension vec0.so cannot be found
- [#153680](https://github.com/openclaw/openclaw/issues/153680) [Feature]: Hide Home/main sessions from the team-mode sidebar without archiving
- [#153529](https://github.com/openclaw/openclaw/issues/153529) Update failure: post-update-plugins (2026.9.5)
- [#153303](https://github.com/openclaw/openclaw/issues/153303) Update failure: post-update-plugins (2026.9.5)
- [#153235](https://github.com/openclaw/openclaw/issues/153235) Update failure: repairing (2026.9.4)
- [#152970](https://github.com/openclaw/openclaw/issues/152970) [Bug]: doctor probe timeout is hardcoded at 10s but Gateway cold start takes 17-22s on loaded installs — false 'gateway timeout' failures
- [#153421](https://github.com/openclaw/openclaw/issues/153421) [Bug]: Upgrading from 2026.9.4 to 2026.9.5 fails
- [#153357](https://github.com/openclaw/openclaw/issues/153357) WS response timeout: CLI write action succeeds on gateway but response does not reach CLI
- [#83857](https://github.com/openclaw/openclaw/issues/83857) [Bug]: xAI image generation and TTS work via infer but not through Crestodian REPL
- [#133024](https://github.com/openclaw/openclaw/issues/133024) [Feature]: Add user_access_token support to the Feishu channel
- [#133023](https://github.com/openclaw/openclaw/issues/133023) [Feature]: Add group disband (channel-delete) and transfer-owner to the Feishu channel
- [#133021](https://github.com/openclaw/openclaw/issues/133021) [Feature]: Implement the search message action in the Feishu channel
- [#133017](https://github.com/openclaw/openclaw/issues/133017) [Feature]: Implement topic-edit (conversations.setTopic/setPurpose) in the Slack channel
- [#133016](https://github.com/openclaw/openclaw/issues/133016) [Feature]: Add Slack Canvas create/edit capability to the Slack channel
- [#133015](https://github.com/openclaw/openclaw/issues/133015) [Feature]: Add channel bookmark management (bookmarks.add/list/edit/remove) to the Slack channel
- [#132941](https://github.com/openclaw/openclaw/issues/132941) [Bug]: `openclaw mcp serve` hangs on pre-initialize `server/discover`, breaking ChatGPT Secure MCP Tunnel
- [#132905](https://github.com/openclaw/openclaw/issues/132905) [Feature]: Deliver lifecycle statusReactions emojis on Mattermost to match Discord, Slack, Signal, Telegram, and WhatsApp
- [#132843](https://github.com/openclaw/openclaw/issues/132843) [Bug]: Unattended heartbeat can move its active workspace to Trash via an empty cleanup path
- [#132319](https://github.com/openclaw/openclaw/issues/132319) [Bug]: tools.deny does not block Codex native subagent tools
- [#130838](https://github.com/openclaw/openclaw/issues/130838) [Feature]: Add voice-message (tts) delivery to the Slack channel
- [#130823](https://github.com/openclaw/openclaw/issues/130823) [Feature]: Add native group/chat management to the Feishu (Lark) channel
- [#130822](https://github.com/openclaw/openclaw/issues/130822) [Feature]: Add native group/channel management to the Slack channel
- [#130772](https://github.com/openclaw/openclaw/issues/130772) [Feature]: Add native interactive poll creation to the Slack channel
- [#129983](https://github.com/openclaw/openclaw/issues/129983) [Feature]: Add channel-info/member-info/channel-list message actions to Telegram
- [#129982](https://github.com/openclaw/openclaw/issues/129982) [Feature]: Expose pause/resume states to the update_goal agent tool
- [#127861](https://github.com/openclaw/openclaw/issues/127861) [Bug]: Accepted queued channel work has no arrival-clocked visible receipt
- [#154149](https://github.com/openclaw/openclaw/issues/154149) [Bug]: Codex plugin repeatedly leaves ~300MB openclaw-plugin-build dirs in /tmp until ENOSPC
- [#153606](https://github.com/openclaw/openclaw/issues/153606) [Bug]: 2026.9.5 cannot recover verified sessions.json backup after source inode changed
- [#152845](https://github.com/openclaw/openclaw/issues/152845) [Bug]: 2026.9.5 graceful restart fails its close step: workboard plugin cleanup runs after the async work scope is closed
- [#153919](https://github.com/openclaw/openclaw/issues/153919) Adopt fs-safe 0.17 for archive extraction and complete file I/O
- [#154019](https://github.com/openclaw/openclaw/issues/154019) Update failure: global-install-failed (2026.9.4)
- [#153954](https://github.com/openclaw/openclaw/issues/153954) model.usage diagnostic event never emitted for IONOS Model Hub / OpenAI-compatible providers (zero usage after normalization)
- [#152540](https://github.com/openclaw/openclaw/issues/152540) docs: openclaw approvals --node is not a real option, so node targeted exec approval edits fail as documented
- [#114966](https://github.com/openclaw/openclaw/issues/114966) [Bug]: pnpm link during agent-driven live update stripped pnpm-workspace.yaml override pins and self-linked openclaw, breaking every install (ERR_PNPM_LOCKFILE_CONFIG_MISMATCH)
- [#153688](https://github.com/openclaw/openclaw/issues/153688) [Bug]: Native Talk steering shows internal delegation text in Chat
- [#153725](https://github.com/openclaw/openclaw/issues/153725) fix: Matrix credential setup intermittently invalidates database read admission
- [#153349](https://github.com/openclaw/openclaw/issues/153349) Desktop nodes need default sharing and a Mac settings control
- [#153295](https://github.com/openclaw/openclaw/issues/153295) [Bug]: saved Codex tool output loses text after 10,000 characters
- [#153701](https://github.com/openclaw/openclaw/issues/153701) [Bug]: Deeply nested external tool schema crashes llama.cpp GBNF schema normalization with RangeError
- [#153691](https://github.com/openclaw/openclaw/issues/153691) Update failure: global-install-failed (2026.9.3)
- [#140627](https://github.com/openclaw/openclaw/issues/140627) Trusted official external channels lose gateway binding for delegated session control
- [#152914](https://github.com/openclaw/openclaw/issues/152914) Update failure: finalize:doctor (2026.9.5)
- [#147700](https://github.com/openclaw/openclaw/issues/147700) Heartbeat hint text suggests invalid config CLI syntax (YAML-style colon in key)
- [#153623](https://github.com/openclaw/openclaw/issues/153623) [Feature]: Document/support relocating the Gateway state directory outside docker-compose
- [#153631](https://github.com/openclaw/openclaw/issues/153631) Update failure: plugin-target-unavailable (2026.9.4)
- [#153609](https://github.com/openclaw/openclaw/issues/153609) Feature Request: Add option to disable subagent completion push notifications
- [#153533](https://github.com/openclaw/openclaw/issues/153533) SQLite task and maintenance index design
- [#153608](https://github.com/openclaw/openclaw/issues/153608) [Feature]: [Feature]: Local Whisper dictation for the Control UI microphone
- [#153378](https://github.com/openclaw/openclaw/issues/153378) [Bug]: triage --run ignores failed update without a correlated restart sentinel
- [#153507](https://github.com/openclaw/openclaw/issues/153507) Codex background completion can lose final-summary recovery
- [#153505](https://github.com/openclaw/openclaw/issues/153505) [Bug]: Edit tool validates edits but not path, missing path fails deep
- [#130879](https://github.com/openclaw/openclaw/issues/130879) [Bug]: Browser role refs lose snapshot membership and ordering
- [#153308](https://github.com/openclaw/openclaw/issues/153308) FaceTime: reduce agent-consult latency without losing tools or context
- [#154205](https://github.com/openclaw/openclaw/issues/154205) Shared read mocks survive SQLite test lifecycle retirement
- [#154130](https://github.com/openclaw/openclaw/issues/154130) Native PR recovery fixtures reject exited Linux process groups
- [#154005](https://github.com/openclaw/openclaw/issues/154005) Enable structured Tool Search by default with policy and lifecycle parity
- [#154153](https://github.com/openclaw/openclaw/issues/154153) [Bug]: Dream Diary narrative aborts with "No callable tools remain ... explicit tool allowlist" when tools.alsoAllow is set
- [#153755](https://github.com/openclaw/openclaw/issues/153755) [Bug]: Long placement selections are clipped on mobile
- [#153889](https://github.com/openclaw/openclaw/issues/153889) Simplify Code Mode to JavaScript execution with typed tool discovery
- [#154004](https://github.com/openclaw/openclaw/issues/154004) Reports: link team activity to current work sessions
- [#154101](https://github.com/openclaw/openclaw/issues/154101) Loopback MCP bridge sends no periodic SSE keepalive — claude-cli notification stream dies at 6 min idle and never recovers
- [#154055](https://github.com/openclaw/openclaw/issues/154055) [Bug] Windows npm update fails at candidate snapshot: canary path contains a \\?\ prefix that degrades into a literal "?" path component (ENOENT)
- [#153717](https://github.com/openclaw/openclaw/issues/153717) [Bug]: Captured plugin Workers cannot resolve openclaw with native registerHooks, breaking Codex final-answer recovery
- [#154029](https://github.com/openclaw/openclaw/issues/154029) Update failure: runtime-verification-failed (2026.9.3)
- [#154022](https://github.com/openclaw/openclaw/issues/154022) [Feature]: Implement a button to copy my own input from chat window as Markdown
- [#154009](https://github.com/openclaw/openclaw/issues/154009) [Bug]: Tripple backquote (```) is not formatted as "code block" in session chat
- [#153875](https://github.com/openclaw/openclaw/issues/153875) [Bug]: Standalone tool calls ignore operator role limits when the session does not exist
- [#153957](https://github.com/openclaw/openclaw/issues/153957) Custom OpenAI-compatible providers never receive stream_options.include_usage, so model.usage is never emitted
- [#153802](https://github.com/openclaw/openclaw/issues/153802) [Bug]: Sibling requester-settle replay conflicts with its durable completion after restart
- [#153298](https://github.com/openclaw/openclaw/issues/153298) [Bug]: Android Talk silently falls back to native Talk for gpt-live models because the Gateway sends no gatewayRelaySupported hint
- [#153730](https://github.com/openclaw/openclaw/issues/153730) [Bug]: `openclaw directory peers list --channel ""` lists the inferred channel's contacts instead of failing
- [#153794](https://github.com/openclaw/openclaw/issues/153794) Compaction of large sessions spikes heap to GBs and blocks event loop for 10-40s (request: off-thread/incremental compaction)
- [#153791](https://github.com/openclaw/openclaw/issues/153791) Deferred plugin session import can never verify after legacy session stores are archived
- [#153750](https://github.com/openclaw/openclaw/issues/153750) [Bug]: Nextcloud Talk send reports a configured bot secret as missing when its secret file cannot be read
- [#143044](https://github.com/openclaw/openclaw/issues/143044) [Feature]: Simplify Android chat composer and unify attachment picker
- [#153312](https://github.com/openclaw/openclaw/issues/153312) [Feature]: Identify configured cloud backends in environment pickers
- [#153572](https://github.com/openclaw/openclaw/issues/153572) [Bug]: One retired plugin instance makes the bundled MCP loopback return 500 for every request after a config hot reload — CLI backends lose all OpenClaw tools until restart (2026.9.5)
- [#152105](https://github.com/openclaw/openclaw/issues/152105) [Bug]: A2A task can complete on model fallback notice before the actual final answer
- [#153700](https://github.com/openclaw/openclaw/issues/153700) [Bug]: Deeply nested external tool schema crashes OpenAI strict schema normalization with RangeError
- [#153697](https://github.com/openclaw/openclaw/issues/153697) Update failure: plugin-target-unavailable (2026.9.4)
- [#153695](https://github.com/openclaw/openclaw/issues/153695) Session SQLite migration recovery report (session-sqlite-1789908130492-f9f36936)
- [#153666](https://github.com/openclaw/openclaw/issues/153666) [Bug]: Non-reentrant store-writer admission self-deadlocks on the same SQLite store path
- [#153670](https://github.com/openclaw/openclaw/issues/153670) Discord/brave/byteplus npm plugin packages get redacted to `<redacted-handle>` in update failure output
- [#153669](https://github.com/openclaw/openclaw/issues/153669) claude-cli backend: per-turn hard limit (8388608 chars / 20000 lines) kills sessions with no config escape
- [#152918](https://github.com/openclaw/openclaw/issues/152918) Update failure: repairing (2026.9.4)
- [#153611](https://github.com/openclaw/openclaw/issues/153611) Telegram native-approval bootstrap retries every 1s with no backoff on 'pairing required'
- [#153577](https://github.com/openclaw/openclaw/issues/153577) [Feature]: theme-matched light and dark app backgrounds
- [#145058](https://github.com/openclaw/openclaw/issues/145058) [Bug]: nodes invoke forwards a blank --idempotency-key to the Gateway and fails with a cryptic schema error
- [#153617](https://github.com/openclaw/openclaw/issues/153617) CLI: openclaw-plugin-build-* scratch dir leaked per invocation (mkdtemp in createPluginSourceCapture never reclaimed on CLI path)
- [#153605](https://github.com/openclaw/openclaw/issues/153605) New chat sessions hide reasoning by default, even when configured to show it
- [#153593](https://github.com/openclaw/openclaw/issues/153593) Session SQLite migration recovery report (session-sqlite-1789895151161-04ab9f24)
- [#153588](https://github.com/openclaw/openclaw/issues/153588) [Bug]: /tmp/openclaw-plugin-build-* staging dirs leak per CLI invocation since v2026.9.5
- [#153544](https://github.com/openclaw/openclaw/issues/153544) [Feature]: Continue CI watching and squash landing when GraphQL quota is exhausted
- [#136025](https://github.com/openclaw/openclaw/issues/136025) Doctor restores retired official plugin aliases after a successful canonical update
- [#136800](https://github.com/openclaw/openclaw/issues/136800) Workflow checker fallback accepts unsupported Python
- [#150275](https://github.com/openclaw/openclaw/issues/150275) Portals fail to load through an HTTPS remote Gateway
- [#112051](https://github.com/openclaw/openclaw/issues/112051) Windows installer cannot repair stale Winget Node registrations
- [#146330](https://github.com/openclaw/openclaw/issues/146330) Reply directives strip code indentation from streamed WebChat history
- [#151301](https://github.com/openclaw/openclaw/issues/151301) [Bug]: Browser storage commands read or overwrite the wrong key when it has surrounding spaces
- [#153414](https://github.com/openclaw/openclaw/issues/153414) Internal grounding context leaks into chat as a standalone phantom message, especially during Gateway restart drain
- [#153524](https://github.com/openclaw/openclaw/issues/153524) Session SQLite migration recovery report (session-sqlite-1789885304363-86ee7433)
- [#153503](https://github.com/openclaw/openclaw/issues/153503) [Bug]: codex login status matched by regex against merged stdout+stderr
- [#153496](https://github.com/openclaw/openclaw/issues/153496) [Bug]: Gateway call(): onHelloOk observer throw swallowed mid-connect
- [#153500](https://github.com/openclaw/openclaw/issues/153500) [Bug]: basenameFromMediaReference falls back to path.basename(full URL) on parse failure
- [#153495](https://github.com/openclaw/openclaw/issues/153495) [Bug]: Gateway call(): onSignalAbort throw swallowed, abort may not happen
- [#153499](https://github.com/openclaw/openclaw/issues/153499) [Bug]: normalizeAgentPlanSteps silently drops unknown status/empty steps
- [#153481](https://github.com/openclaw/openclaw/issues/153481) [Bug]: Local package source silently skipped when statSync fails (EACCES/ELOOP misclassified)
- [#152624](https://github.com/openclaw/openclaw/issues/152624) [Bug]: PDF image-only pages disappear alongside selectable text
- [#130964](https://github.com/openclaw/openclaw/issues/130964) [Bug]: Browser action errors hide editability and actionability failures as missing elements
- [#153415](https://github.com/openclaw/openclaw/issues/153415) Reduce unnecessary GitHub API work during PR review and CI polling
- [#152978](https://github.com/openclaw/openclaw/issues/152978) Recover Slack and Discord recent context from platform history
- [#146447](https://github.com/openclaw/openclaw/issues/146447) [Bug]: Control UI cron timeout copy contradicts validator on 0
- [#152921](https://github.com/openclaw/openclaw/issues/152921) [Bug]: Deeply nested tool-call args crash tool display metadata with RangeError
- [#153771](https://github.com/openclaw/openclaw/issues/153771) [Feature]: Design staged Decision consumers for turn context, bounded replanning, and Tool Search

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 247,473 · **Open issues:** 43,059 · **Last push:** <1h ago

Today saw no new releases for Hermes Agent, but a significant merge includes the addition of Windows compatibility for the claude-subscription-directsdk along with card art updates. Among the notable new issues, a request for Bot Mode aims to enhance chat interactions to feel more authentic, creating a "friend-group vibe" during rooms and 1:1 conversations. Additionally, there's a bug report regarding the misclassification of CommandCode upstream-unavailable 429 errors, mistakenly exhausting healthy API keys. Other issues include a persistent problem with agent-authored tips not being properly dismissed and a bug affecting how the group-chat hold classifier interprets certain commands. Overall, today's developments reflect ongoing efforts to refine user experience and address critical bugs within the Hermes ecosystem.

#### ✅ Merged PRs
- [#117701](https://github.com/NousResearch/hermes-agent/pull/117701) plugin-catalog: claude-subscription-directsdk runs on Windows too; add card art

#### 🐛 New Issues
- [#117520](https://github.com/NousResearch/hermes-agent/issues/117520) [Feature]: Bot Mode — rooms and 1:1 bot chats should feel like a real chat (friend-group vibe) `type/feature` `comp/plugins` `P3` `comp/desktop` 💬6
- [#117111](https://github.com/NousResearch/hermes-agent/issues/117111) [Bug]: CommandCode upstream-unavailable 429 is misclassified as credential rate limit and exhausts a healthy API key `type/bug` `comp/agent` `area/auth` `P2` 💬3
- [#117487](https://github.com/NousResearch/hermes-agent/issues/117487) [HOLD] [Bug]: Hindsight auto-recall and auto-retain run on synthetic runtime turns, not just user input `type/bug` `comp/agent` `comp/plugins` `tool/memory` 💬2
- [#116905](https://github.com/NousResearch/hermes-agent/issues/116905) bot_mode_probe._roster() lists the `.deleted` tombstone dir as a teammate agent `type/bug` `comp/agent` `P2` `area/profiles` 💬2
- [#117401](https://github.com/NousResearch/hermes-agent/issues/117401) Desktop Bot chats: GPT-Live voice sessions should use the Bot’s own profile voice `type/bug` `tool/tts` `provider/openai` `P3` 💬2
- [#117516](https://github.com/NousResearch/hermes-agent/issues/117516) [Bug]: DeepSeek picker offers retired ids and shows V4.1 Flash as version-less "Deepseek Flash" `type/bug` `comp/agent` `comp/cli` `provider/deepseek` 💬2
- [#117482](https://github.com/NousResearch/hermes-agent/issues/117482) [Bug]: A provider quota outage (429) during credential resolution is reported and counted as an authentication failure `type/bug` `comp/cli` `area/auth` `P2` 💬2
- [#117216](https://github.com/NousResearch/hermes-agent/issues/117216) [Bug][Desktop] Agent-authored tips (show_tip) are not persisted as dismissed — the same bubble reappears in every new conversation after the user closes it `type/bug` `P3` `comp/desktop` 💬2
- [#117040](https://github.com/NousResearch/hermes-agent/issues/117040) Group-chat hold classifier treats stop words inside code and quotes as commands `type/bug` `comp/plugins` `P3` `comp/desktop` 💬2
- [#117682](https://github.com/NousResearch/hermes-agent/issues/117682) [Bug]: HERMES_DESKTOP_IGNORE_EXISTING / --ignore-existing does not prevent a local backend (ACTIVE_HERMES_ROOT resolves first) `type/bug` `area/config` `P2` `comp/desktop` 💬1
- [#117693](https://github.com/NousResearch/hermes-agent/issues/117693) google_meet realtime (v2) is dead: client still speaks the retired OpenAI beta API shape `type/bug` `comp/plugins` `provider/openai` `P3` 💬1
- [#116667](https://github.com/NousResearch/hermes-agent/issues/116667) fix(model-validation): profile-owned catalogs must not fall through to generic /models `type/bug` `comp/cli` `comp/plugins` `area/config` 💬1
- [#117181](https://github.com/NousResearch/hermes-agent/issues/117181) Windows: hub-installed skills report "update_available" forever (CRLF vs LF newline translation in quarantine_bundle) `type/bug` `tool/skills` `P2` `sweeper:risk-platform-windows` 💬1
- [#117267](https://github.com/NousResearch/hermes-agent/issues/117267) docs(gateway): clarify that systemd reload performs a graceful restart `type/docs` `comp/gateway` `P3` 💬1
- [#117739](https://github.com/NousResearch/hermes-agent/issues/117739) Feature: pause-preserving cron schedule edits for disabled jobs
- [#117736](https://github.com/NousResearch/hermes-agent/issues/117736) [Bug]: skill_manage patch refuses a skill whose unquoted description contains ': ' while the loader still loads it — skill becomes unmaintainable `type/bug` `comp/agent` `tool/skills` `P2`
- [#117734](https://github.com/NousResearch/hermes-agent/issues/117734) Kanban gateway dispatcher reads all kanban.* caps once at boot; live config changes are ignored until restart (repeat spawn bursts) `type/bug` `comp/gateway` `comp/cron` `area/config`
- [#117725](https://github.com/NousResearch/hermes-agent/issues/117725) [Bug]: Nous Portal LongCat 2.0 free exhausts output budget on reasoning even after lowering effort `type/bug` `comp/agent` `provider/nous` `P2`
- [#117715](https://github.com/NousResearch/hermes-agent/issues/117715) [Feature]: Desktop settings for custom link handlers and inline local-file navigation `type/feature` `P3` `needs-decision` `sweeper:risk-security-boundary`
- [#117717](https://github.com/NousResearch/hermes-agent/issues/117717) [Bug]: Telegram inline picker accepts negative offsets and serves the catalog tail `type/bug` `comp/plugins` `platform/telegram` `P3`
- [#117722](https://github.com/NousResearch/hermes-agent/issues/117722) web: `npm run build -w web` always fails — `vite.config.ts` does not typecheck (TS18048) `type/bug` `P3` `comp/dashboard`
- [#117710](https://github.com/NousResearch/hermes-agent/issues/117710) api_server: POST /api/sessions/{id}/chat works once per session on a custom: provider — persisted session model drops the provider, second turn 500s `type/bug` `comp/agent` `comp/gateway` `P2`
- [#117713](https://github.com/NousResearch/hermes-agent/issues/117713) [Bug]: Live gateway chat stays hidden in sidebar after auto-archive sweep archives its compression lineage, then a resume re-activates it `type/bug` `comp/gateway` `P2` `sweeper:risk-session-state`
- [#116895](https://github.com/NousResearch/hermes-agent/issues/116895) [Bug]: HERMES_HUMAN_DELAY_MODE/_MIN_MS/_MAX_MS pacing via env with unvalidated parse `type/bug` `comp/gateway` `area/config` `P3`
- [#116898](https://github.com/NousResearch/hermes-agent/issues/116898) [Bug]: HERMES_TOOL_PROGRESS_MODE read from process env per turn under multiplex `type/bug` `comp/gateway` `area/config` `P2`
- [#116893](https://github.com/NousResearch/hermes-agent/issues/116893) [Bug]: HERMES_GATEWAY_BUSY_TEXT_MODE/_DEBOUNCE/_HARD_CAP runner behavior via env, frozen at construction `type/bug` `comp/gateway` `area/config` `P2`
- [#116886](https://github.com/NousResearch/hermes-agent/issues/116886) [Bug]: HERMES_FILTER_SILENCE_NARRATION behavioral flag via process env breaks profile scope `type/bug` `comp/gateway` `area/config` `P2`
- [#116888](https://github.com/NousResearch/hermes-agent/issues/116888) [Bug]: HERMES_MAX_ITERATIONS env bridge bypasses agent.max_turns config authority + misreports budget `type/bug` `duplicate` `comp/gateway` `area/config`
- [#117484](https://github.com/NousResearch/hermes-agent/issues/117484) [Bug]: The rate-limit cooldown guesses the wait exponentially while the provider's own reset time is parsed a few lines earlier and dropped `type/bug` `comp/agent` `P2` `area/billing`
- [#117696](https://github.com/NousResearch/hermes-agent/issues/117696) fix(contracts): ProfileRow is missing previous_names, so profiles.list violates its own result contract `type/bug` `comp/tui` `P2` `area/profiles`
- [#117698](https://github.com/NousResearch/hermes-agent/issues/117698) Platform adapters prepend the checkout root onto sys.path at import, shadowing installed packages process-wide `type/bug` `comp/cli` `comp/gateway` `comp/cron`
- [#117703](https://github.com/NousResearch/hermes-agent/issues/117703) [Bug]: multiplexed dashboard serves a routed profile WITHOUT its profile-local plugin toolsets (discovery pinned to launch home) `type/bug` `comp/tui` `comp/plugins` `P3`
- [#117434](https://github.com/NousResearch/hermes-agent/issues/117434) kanban edit rejects its documented --title/--body/--priority flags; cron list hides paused jobs `type/bug` `comp/cli` `comp/cron` `P3`
- [#117505](https://github.com/NousResearch/hermes-agent/issues/117505) cron: _owner_is_live() rejects a live process on an exact start-time compare, marking running executions unknown `type/bug` `comp/cron` `P2`
- [#117347](https://github.com/NousResearch/hermes-agent/issues/117347) [Bug]: get_scratch_dir ignores managed/shared-home permissions and strips setgid `type/bug` `area/config` `area/nix` `P2`
- [#116855](https://github.com/NousResearch/hermes-agent/issues/116855) [Bug]: macOS — search_files returns "[Errno 1] Operation not permitted" and drops collected matches whenever a search reaches its limit (unguarded killpg) `type/bug` `comp/tools` `tool/file` `P2`
- [#116950](https://github.com/NousResearch/hermes-agent/issues/116950) Plugin admission scanner: Python open() of credential files lands medium, not critical (gap vs shell/JS equivalents) `type/security` `comp/plugins` `tool/skills` `P3`
- [#116731](https://github.com/NousResearch/hermes-agent/issues/116731) [Bug]: Desktop updater ignores updates.pre_update_backup: false — preflightStateDb always copies full state.db (~1.7GB held) `type/bug` `area/config` `P2` `sweeper:risk-compatibility`
- [#116774](https://github.com/NousResearch/hermes-agent/issues/116774) [Bug]: npm audit fix for agent-browser does not persist across hermes update — vulnerabilities reintroduced by fresh Node dependency reinstall `type/bug` `tool/browser` `P3` `sweeper:risk-compatibility`
- [#116627](https://github.com/NousResearch/hermes-agent/issues/116627) [Bug]: plugin install --ref refuses an annotated-tag pin ("Checked-out revision … does not match requested commit …") `type/bug` `comp/cli` `comp/plugins` `P3`
- [#116904](https://github.com/NousResearch/hermes-agent/issues/116904) [Bug]: os.system("cls"/"clear") fallback spawns shell + silent no-op without binary `type/bug` `comp/cli` `P3` `platform/windows`

#### 🔒 Closed Issues
- [#117111](https://github.com/NousResearch/hermes-agent/issues/117111) [Bug]: CommandCode upstream-unavailable 429 is misclassified as credential rate limit and exhausts a healthy API key
- [#116905](https://github.com/NousResearch/hermes-agent/issues/116905) bot_mode_probe._roster() lists the `.deleted` tombstone dir as a teammate agent
- [#117401](https://github.com/NousResearch/hermes-agent/issues/117401) Desktop Bot chats: GPT-Live voice sessions should use the Bot’s own profile voice
- [#117482](https://github.com/NousResearch/hermes-agent/issues/117482) [Bug]: A provider quota outage (429) during credential resolution is reported and counted as an authentication failure
- [#117216](https://github.com/NousResearch/hermes-agent/issues/117216) [Bug][Desktop] Agent-authored tips (show_tip) are not persisted as dismissed — the same bubble reappears in every new conversation after the user closes it
- [#117040](https://github.com/NousResearch/hermes-agent/issues/117040) Group-chat hold classifier treats stop words inside code and quotes as commands
- [#116667](https://github.com/NousResearch/hermes-agent/issues/116667) fix(model-validation): profile-owned catalogs must not fall through to generic /models
- [#117181](https://github.com/NousResearch/hermes-agent/issues/117181) Windows: hub-installed skills report "update_available" forever (CRLF vs LF newline translation in quarantine_bundle)
- [#117267](https://github.com/NousResearch/hermes-agent/issues/117267) docs(gateway): clarify that systemd reload performs a graceful restart
- [#116895](https://github.com/NousResearch/hermes-agent/issues/116895) [Bug]: HERMES_HUMAN_DELAY_MODE/_MIN_MS/_MAX_MS pacing via env with unvalidated parse
- [#116898](https://github.com/NousResearch/hermes-agent/issues/116898) [Bug]: HERMES_TOOL_PROGRESS_MODE read from process env per turn under multiplex
- [#116893](https://github.com/NousResearch/hermes-agent/issues/116893) [Bug]: HERMES_GATEWAY_BUSY_TEXT_MODE/_DEBOUNCE/_HARD_CAP runner behavior via env, frozen at construction
- [#116886](https://github.com/NousResearch/hermes-agent/issues/116886) [Bug]: HERMES_FILTER_SILENCE_NARRATION behavioral flag via process env breaks profile scope
- [#116888](https://github.com/NousResearch/hermes-agent/issues/116888) [Bug]: HERMES_MAX_ITERATIONS env bridge bypasses agent.max_turns config authority + misreports budget
- [#117484](https://github.com/NousResearch/hermes-agent/issues/117484) [Bug]: The rate-limit cooldown guesses the wait exponentially while the provider's own reset time is parsed a few lines earlier and dropped
- [#117434](https://github.com/NousResearch/hermes-agent/issues/117434) kanban edit rejects its documented --title/--body/--priority flags; cron list hides paused jobs
- [#117505](https://github.com/NousResearch/hermes-agent/issues/117505) cron: _owner_is_live() rejects a live process on an exact start-time compare, marking running executions unknown
- [#117347](https://github.com/NousResearch/hermes-agent/issues/117347) [Bug]: get_scratch_dir ignores managed/shared-home permissions and strips setgid
- [#116855](https://github.com/NousResearch/hermes-agent/issues/116855) [Bug]: macOS — search_files returns "[Errno 1] Operation not permitted" and drops collected matches whenever a search reaches its limit (unguarded killpg)
- [#107029](https://github.com/NousResearch/hermes-agent/issues/107029) Gateway SIGKILL: _kill_process_group_posix killpg()s the gateway pgid on Darwin (follow-on to #97296)
- [#116950](https://github.com/NousResearch/hermes-agent/issues/116950) Plugin admission scanner: Python open() of credential files lands medium, not critical (gap vs shell/JS equivalents)
- [#116495](https://github.com/NousResearch/hermes-agent/issues/116495) [Bug]: Promoted-reasoning stall guard misses Thai plan tails — reasoning leaks to user channel
- [#116731](https://github.com/NousResearch/hermes-agent/issues/116731) [Bug]: Desktop updater ignores updates.pre_update_backup: false — preflightStateDb always copies full state.db (~1.7GB held)
- [#116774](https://github.com/NousResearch/hermes-agent/issues/116774) [Bug]: npm audit fix for agent-browser does not persist across hermes update — vulnerabilities reintroduced by fresh Node dependency reinstall
- [#116627](https://github.com/NousResearch/hermes-agent/issues/116627) [Bug]: plugin install --ref refuses an annotated-tag pin ("Checked-out revision … does not match requested commit …")
- [#116904](https://github.com/NousResearch/hermes-agent/issues/116904) [Bug]: os.system("cls"/"clear") fallback spawns shell + silent no-op without binary

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,260 · **Open issues:** 8,191 · **Last push:** <1h ago

On September 21, 2026, there were no new releases for vLLM. However, several significant PRs were merged, including a performance enhancement for small TP batches in #57603, improvements in persistent workspaces for Marlin and Humming in #57421, and support for bf16 MoE router and mxfp4 MoE for MiMo V2 in #57784. Notably, two new bugs were reported, including issue #57740, which highlights a misrecognition problem with user-authored image placeholders, and issue #57722 regarding illegal memory access under specific conditions with version 0.28.0. Overall, the day was characterized by continued development and focus on performance improvements and feature integrations.

#### ✅ Merged PRs
- [#57603](https://github.com/vllm-project/vllm/pull/57603) [Perf][DSV4.1] Overlap mHC coefficients for small TP batches
- [#57421](https://github.com/vllm-project/vllm/pull/57421) [Core][Kernel] Share persistent workspaces for Marlin and Humming
- [#57779](https://github.com/vllm-project/vllm/pull/57779) [XPU][UT]Bugfix when the process can't see all the world_size meet accuracy issue.
- [#51052](https://github.com/vllm-project/vllm/pull/51052) [KVConnector][MoRIIO] Transfer hybrid mamba/KDA recurrent state in READ mode
- [#57450](https://github.com/vllm-project/vllm/pull/57450) [ROCm][CI] Query HIP device memory for test GPU teardown waits.
- [#57621](https://github.com/vllm-project/vllm/pull/57621) [Refactor] Remove dead kernel code
- [#57382](https://github.com/vllm-project/vllm/pull/57382) [Misc] Rename --enable-mamba-fine-grained-prefix-cache (#53945 follow-up)
- [#56685](https://github.com/vllm-project/vllm/pull/56685) [Feature][Humming] Humming feature integration
- [#56625](https://github.com/vllm-project/vllm/pull/56625) [DSV4.1] Add encoder cuda graph support for deepseek-v4.1-flash
- [#57784](https://github.com/vllm-project/vllm/pull/57784) [Feature] support bf16 MoE router and mxfp4 MoE for MiMo V2
- [#57467](https://github.com/vllm-project/vllm/pull/57467) [Test][Core] Compute the expected hybrid prefix-cache hit instead of hard-coding it
- [#43310](https://github.com/vllm-project/vllm/pull/43310) [Frontend] Expose per-request spec decode metrics in generate API
- [#57546](https://github.com/vllm-project/vllm/pull/57546) [GLM-5.3-Flash] Route kpool indexer top-k through the shared SparseIndexerTopk dispatcher
- [#56810](https://github.com/vllm-project/vllm/pull/56810) [Bugfix][KV Offload] Skip non-prefix-cacheable groups in SimpleCPUOffload (GLM-5.3-Flash kpool tail and QSA)
- [#57534](https://github.com/vllm-project/vllm/pull/57534) [Perf][GLM] Fuse the kpool tail slot mapping into one Triton kernel
- [#57477](https://github.com/vllm-project/vllm/pull/57477) [Bugfix][GLM-5.3-Flash] Address kpool tail blocks by the padded indexer stride in the NVIDIA prefill seed kernel
- [#57708](https://github.com/vllm-project/vllm/pull/57708) [Model][LoRA] Enable LoRA support for VoyageQwen3BidirectionalEmbedModel
- [#54894](https://github.com/vllm-project/vllm/pull/54894) [ROCm][DSV4][Perf] Use FP8 WO_A output projection
- [#57076](https://github.com/vllm-project/vllm/pull/57076) [Bugfix][Frontend] Bound the prompt after multimodal expansion
- [#57745](https://github.com/vllm-project/vllm/pull/57745) [Model] Pass intermediate_tensors to the model when capturing CUDA gr…
- [#54871](https://github.com/vllm-project/vllm/pull/54871) [XPU] fix incorrect gdn kernel log for XPU path
- [#57416](https://github.com/vllm-project/vllm/pull/57416) [Perf] Give a prefill-only batch the model state's number of logit rows
- [#57462](https://github.com/vllm-project/vllm/pull/57462) [Bugfix] DiffusionGemma: cast the self-conditioning soft embed to the buffer dtype
- [#56045](https://github.com/vllm-project/vllm/pull/56045) [CPU][Perf] refactor paged attention for Arm CPUs
- [#54176](https://github.com/vllm-project/vllm/pull/54176) [Feature][EPD] Support dynamic EPD (EC-connector) proxy
- [#57434](https://github.com/vllm-project/vllm/pull/57434) [ROCm][DSv4.1][Perf] Reuse the decode topk ragged metadata across layers
- [#57306](https://github.com/vllm-project/vllm/pull/57306) Add one-step recipe serving
- [#57591](https://github.com/vllm-project/vllm/pull/57591) [XPU][UT]Fix test_mnnvl_alltoall device and distributed backend
- [#57581](https://github.com/vllm-project/vllm/pull/57581) [XPU][UT]Using the device_control_env_var to restrict visible device on different platform

#### 🐛 New Issues
- [#57740](https://github.com/vllm-project/vllm/issues/57740) [Bug]: User-authored <|image_pad|> in text is misrecognized as image placeholder, causing image binding mismatch `bug` 💬3
- [#57838](https://github.com/vllm-project/vllm/issues/57838) [Bug]: RowWiseTorchFP8ScaledMMLinearKernel is selected on RDNA4 (gfx1201) from v0.28 and costs 5-24% decode `rocm` 💬1
- [#57748](https://github.com/vllm-project/vllm/issues/57748) [Bug]: Running GLM-5.3-Flash-NVFP4 on Hopper GPUs `bug` `quantization` `glm` 💬1
- [#57794](https://github.com/vllm-project/vllm/issues/57794) [RFC]: Expert-granular MoE residency — drive UVA offload from EPLB's per-expert load statistics 💬1
- [#57839](https://github.com/vllm-project/vllm/issues/57839) [Bug] [watermarking]: reference detection server does not support dual_key_gumbel; detector alpha default disagrees with generation default `bug`
- [#57837](https://github.com/vllm-project/vllm/issues/57837) [Feature]: [WideEP][CPU]: Add a CPU-only Wide Expert Parallelism well-lit path `feature request`
- [#57827](https://github.com/vllm-project/vllm/issues/57827) [Bug]: minimax_m2 / glm47_moe / deepseek_v4 arg converters drop the last parameter when the model omits the closing tag (same class as #57699) `DSv4` `minimax`
- [#57826](https://github.com/vllm-project/vllm/issues/57826) [Bug]: minimax_m2 / glm47_moe / deepseek_v4 arg converters drop the last parameter when the model omits the closing tag (same class as #57699) `DSv4` `minimax`
- [#57822](https://github.com/vllm-project/vllm/issues/57822) [Bug]: v0.28.0 — repeated illegal memory access / illegal instruction under production traffic with compressed-tensors per-tensor static FP8 (W8A8) on SM120 (RTX PRO 6000 Blackwell); v0.24.0 stable on the same host and checkpoint `quantization`
- [#57791](https://github.com/vllm-project/vllm/issues/57791) [Bug]: Responses API executes only the final built-in tool call in a parallel tool-call turn `tool-calling`
- [#57772](https://github.com/vllm-project/vllm/issues/57772) [Feature]: mega-MoE expert path for SM90 (H100/H20) DeepSeek-V4 / V4.1-Flash — Marlin weight-only is the only option today `deepseek` `quantization` `DSv4`
- [#57771](https://github.com/vllm-project/vllm/issues/57771) Docs: warn that --cpu-offload-gb is purely negative when weights fit in VRAM (~19x slowdown observed)
- [#57759](https://github.com/vllm-project/vllm/issues/57759) [Bug]: FULL_AND_PIECEWISE capture fails intermittently with cudaErrorNotPermitted when Engram PLE cpu_offload is enabled under load `bug`
- [#57755](https://github.com/vllm-project/vllm/issues/57755) Title
- [#57738](https://github.com/vllm-project/vllm/issues/57738) [RFC]: Encoder-Only Prefill in P/D deployment for DeepSeek V4.1 Flash `RFC` `deepseek` `quantization` `DSv4.1`

#### 🔒 Closed Issues
- [#41306](https://github.com/vllm-project/vllm/issues/41306) [Bug]: v0.20 latency and throughput regression on MoE models
- [#42801](https://github.com/vllm-project/vllm/issues/42801) [Bug]: Significant accuracy discrepancies across different vLLM versions.
- [#39170](https://github.com/vllm-project/vllm/issues/39170) [Intel-GPU]: Using docker image at intel/vllm:0.17.0-xpu -> RuntimeError: PyTorch was compiled without CUDA support
- [#39996](https://github.com/vllm-project/vllm/issues/39996) [Bug] Fatal AssertionError: Encoder KV cache fails to evict tokens, exceeding max_model_len in long-lived WebSocket sessions
- [#36772](https://github.com/vllm-project/vllm/issues/36772) [Bug]: Docker Model Runner vLLM ignores tensor parallel config and starts with world_size=1 on 4x RTX 3060
- [#42701](https://github.com/vllm-project/vllm/issues/42701) [Bug] v0.21.0 release missing PR #42320 — DeepSeek-V4 MTP fails with `TypeError: missing required positional argument: post_mix`
- [#42808](https://github.com/vllm-project/vllm/issues/42808) [Bug]: 这次崩溃的直接原因是 TurboQuant 注意力后端与 MTP 推测解码在 vLLM 0.21.0 版本中的兼容性问题，具体表现为工作区（workspace）预留不足，导致引擎在处理第一个请求时触发断言错误
- [#41413](https://github.com/vllm-project/vllm/issues/41413) [Bug]: TurboQuant fails on non-power-of-2 head_dim (Phi-2, MSE-K presets)
- [#42360](https://github.com/vllm-project/vllm/issues/42360) [Usage]: vllm v1 not use `--no-enable-chunked-prefill` to disable chunked prefill.
- [#39631](https://github.com/vllm-project/vllm/issues/39631) [Bug]: Abnormal Scores in Batch Processing of Image-Text Pairs with qwen3-VL-reranker Model
- [#42862](https://github.com/vllm-project/vllm/issues/42862) [Bug]: integer overflow in layernorm_kernels.cu
- [#55560](https://github.com/vllm-project/vllm/issues/55560) [Bug]: CPU MoE kernel produces NaN logits under torch.compile for Qwen3_5MoeForConditionalGeneration — reproduces with AND without GPTQ-Int4 quantization, fixed by --enforce-eager
- [#42870](https://github.com/vllm-project/vllm/issues/42870) [Bug]: Multiple model files still trigger ImageProcessorFast DeprecationWarning post transformers v5.4 refactor
- [#57038](https://github.com/vllm-project/vllm/issues/57038) [Bug]: truncate_prompt_tokens does not bound the final prompt after multimodal expansion
- [#57771](https://github.com/vllm-project/vllm/issues/57771) Docs: warn that --cpu-offload-gb is purely negative when weights fit in VRAM (~19x slowdown observed)

### SGLang (`sgl-project/sglang`)

**Stars:** 36,219 · **Open issues:** 5,382 · **Last push:** <1h ago

On September 21, 2026, SGLang saw a flurry of activity, although no new releases were recorded. Notable merged pull requests included #40487, which added a verified DGX Spark recipe for Qwen-Image 2.1, and #40472, which improved caching for this model by maintaining prefix KV per layer under Cache-DiT. Additionally, various performance improvements were made, such as reducing memory requirements for Qwen-Image 2.1's VAE and warmup process (#40481) and enhancing session-aware policies in the sgl-router (#40379). Several bugs were also addressed, including a fix for undelivered embeddings in `send_with_url` (#40502). Among new issues, a bug report (#40393) highlighted a crash during weight loading due to an attribute error in quantization settings, indicating potential concerns for users operating on version 0.5.20.

#### ✅ Merged PRs
- [#40487](https://github.com/sgl-project/sglang/pull/40487) [Diffusion] Add verified DGX Spark recipe for Qwen-Image 2.1
- [#40472](https://github.com/sgl-project/sglang/pull/40472) [diffusion] keep Qwen-Image 2.1 prefix KV per layer under Cache-DiT
- [#39206](https://github.com/sgl-project/sglang/pull/39206) [Diffusion] Guard E2E/loading latency with runner-aware baselines
- [#40481](https://github.com/sgl-project/sglang/pull/40481) [Diffusion] Reduce Qwen-Image 2.1 VAE and graph warmup memory
- [#40502](https://github.com/sgl-project/sglang/pull/40502) [Fix] Raise on undelivered embeddings in `send_with_url`, fix broken tests
- [#40379](https://github.com/sgl-project/sglang/pull/40379) [sgl-router] refactor - session-aware policy
- [#39777](https://github.com/sgl-project/sglang/pull/39777) Use pinned memory for asynchronous sampling metadata transfers
- [#39695](https://github.com/sgl-project/sglang/pull/39695) [GLM-5.3-Flash] Reduce KPool planning synchronization and overlap indexer preparation
- [#39688](https://github.com/sgl-project/sglang/pull/39688) Fuse GLM-5.3-Flash KDA projections and prefill metadata
- [#40241](https://github.com/sgl-project/sglang/pull/40241) [sgl-router] refactor - layout BucketResolver, Bucket, EngineGroup and implement PowerOfTwo
- [#40272](https://github.com/sgl-project/sglang/pull/40272) [sgl-router] refactor - move policy-required states under src/state
- [#40496](https://github.com/sgl-project/sglang/pull/40496) [CI] Give the kernel lane a 5090 suite and move kernel-only tests off the general lane
- [#38932](https://github.com/sgl-project/sglang/pull/38932) fix(modelopt): dispatch NVFP4 MoE on the cached backend, not the live global
- [#39200](https://github.com/sgl-project/sglang/pull/39200) [Perf] Fuse the glm5_next mHC attn->MLP boundary
- [#40448](https://github.com/sgl-project/sglang/pull/40448) [Feature] support bf16 MoE router and mxfp4 MoE for MiMo V2
- [#40495](https://github.com/sgl-project/sglang/pull/40495) [CI] Drive per-commit stage jobs from a runner table instead of copied job blocks
- [#40163](https://github.com/sgl-project/sglang/pull/40163) Fix TopK v2 fallback when 16-block cluster capacity is zero
- [#40217](https://github.com/sgl-project/sglang/pull/40217) [DeepSeek-V4.1] Bound dense prefill indexer memory
- [#38805](https://github.com/sgl-project/sglang/pull/38805) [Kimi-K3] O(1) expert weight lookup in load_weights
- [#40288](https://github.com/sgl-project/sglang/pull/40288) [Test] Drop cause-less disabled tests, fix XPU lane, demote quality gates off base-c
- [#35452](https://github.com/sgl-project/sglang/pull/35452) [Fix] Preserve model runner contracts in prefill CUDA graphs
- [#40483](https://github.com/sgl-project/sglang/pull/40483) Add CODEOWNERS entry for sglang-renderer
- [#40376](https://github.com/sgl-project/sglang/pull/40376) [PD] Bound cached-prefix DCP transfers by pack capacity
- [#40440](https://github.com/sgl-project/sglang/pull/40440) [Simulator] Fix meta host memory budgets on constrained runners
- [#40474](https://github.com/sgl-project/sglang/pull/40474) [CI] update CI permissions
- [#39928](https://github.com/sgl-project/sglang/pull/39928) [Qwen4-Exp] Build the offloaded PLE table on the meta device so --ple-offload-embedding never materialises it on the accelerator
- [#36718](https://github.com/sgl-project/sglang/pull/36718) [rust-renderer] Standalone preprocessing
- [#40392](https://github.com/sgl-project/sglang/pull/40392) Update test cases and performance testing framework
- [#38339](https://github.com/sgl-project/sglang/pull/38339) [NPU] add coverage-based precision test selection pipeline
- [#40469](https://github.com/sgl-project/sglang/pull/40469) [Test] Fix optimistic prefill disaggregation test after mamba radix cache removal
- [#39705](https://github.com/sgl-project/sglang/pull/39705) [Diffusion] Enable shared RMSNorm dispatch for SenseNova-U1
- [#40184](https://github.com/sgl-project/sglang/pull/40184) Enable optimistic prefill for Mamba radix-cache models
- [#40455](https://github.com/sgl-project/sglang/pull/40455) [docs] Simplify Qwen-Image 2.1 cookbook
- [#39867](https://github.com/sgl-project/sglang/pull/39867) [sgl-router] refactor - config and organize CLI options
- [#40418](https://github.com/sgl-project/sglang/pull/40418) [Simulator][Compatibility] Adapt to latest KV cache pool interfaces
- [#40294](https://github.com/sgl-project/sglang/pull/40294) [CI] Derive registered-test kind from the registry call instead of the path
- [#39861](https://github.com/sgl-project/sglang/pull/39861) [sgl-router] refactor - main startup logic
- [#40116](https://github.com/sgl-project/sglang/pull/40116) [Diffusion][MiniMax-H3] Add SM120 Sage compute for SubBlock sparse attention
- [#37870](https://github.com/sgl-project/sglang/pull/37870) [HiCache] Fix sparse hybrid transfer layer IDs
- [#40293](https://github.com/sgl-project/sglang/pull/40293) [CI] Skip SRT Rust extension builds for diffusion-only PRs
- [#40427](https://github.com/sgl-project/sglang/pull/40427) [Test] Fix OOT DFlash hook test resolving the draft config over the network
- [#38901](https://github.com/sgl-project/sglang/pull/38901) [AMD][DSV4] feat: enable DSpark with fp8 unified_kv on gfx950
- [#40313](https://github.com/sgl-project/sglang/pull/40313) Remove swa and mamba radix cache
- [#40045](https://github.com/sgl-project/sglang/pull/40045) [kimi k3][pd disagg] support pp prefill + dcp decode with dspark
- [#40402](https://github.com/sgl-project/sglang/pull/40402) [NPU] [DOC] fix typos, heading levels and terminology in NPU docs
- [#40411](https://github.com/sgl-project/sglang/pull/40411) [Test] Fix scheduler fixtures after prefill burst counting
- [#38740](https://github.com/sgl-project/sglang/pull/38740) Add out-of-tree DFlash extension points
- [#38996](https://github.com/sgl-project/sglang/pull/38996) [Model] Serve DeepSeek-OCR-2 with its official 768px local-crop geometry
- [#40276](https://github.com/sgl-project/sglang/pull/40276) docs: sync LMSYS SGLang blog cards
- [#40408](https://github.com/sgl-project/sglang/pull/40408) [diffusion] Batch Qwen-Image 2.1 targets and document measured deployment recipes
- [#39848](https://github.com/sgl-project/sglang/pull/39848) [sgl-router] refactor - chat_completions() into modules
- [#40389](https://github.com/sgl-project/sglang/pull/40389) Update linear attention code owner directory
- [#39837](https://github.com/sgl-project/sglang/pull/39837) [2/N] [Kernel] Fuse padding-preserving HiSparse slot translation
- [#40354](https://github.com/sgl-project/sglang/pull/40354) [Fix] Forward SWA prealloc reclaim through the DSV4 HiSparse allocator
- [#36700](https://github.com/sgl-project/sglang/pull/36700) [PP + HiCache] Add PP Prefetch Tickets for eager cross-stage storage prefetch
- [#40284](https://github.com/sgl-project/sglang/pull/40284) [PD] Enter the custom mem pool once when allocating DCP pack buffers
- [#39565](https://github.com/sgl-project/sglang/pull/39565) [Unified Cache][9/N] add opt-in MLA load deduplication for Mooncake Linker
- [#38831](https://github.com/sgl-project/sglang/pull/38831) [NPU][bugfix] update low latency quantization input and update MXFP8 tests
- [#39820](https://github.com/sgl-project/sglang/pull/39820) [NPU][DSV4]dsv4 enable cpp
- [#39983](https://github.com/sgl-project/sglang/pull/39983) [diffusion] model: support qwen-image-2.1
- [#40157](https://github.com/sgl-project/sglang/pull/40157) Update SGLANG_KERNEL_NPU_TAG to version 2026.9.0.post5

#### 🐛 New Issues
- [#40401](https://github.com/sgl-project/sglang/issues/40401) [Feature] lmsysorg/sglang:dev-qwen38-next-local this image have the versions of cuda-12.6 or 12.9? 💬2
- [#40393](https://github.com/sgl-project/sglang/issues/40393) [Bug] 0.5.20: `--quantization humming` crashes at weight load — `BlockQuantScaleParameter` has no attribute `format_ue8m0` 💬2
- [#40417](https://github.com/sgl-project/sglang/issues/40417) [Bug] humming MoE runner picks tuning config with a 4x-inflated shape under EP, and the obvious EP-aware fix regresses serving 💬1
- [#40504](https://github.com/sgl-project/sglang/issues/40504) [Bug] Hardcoded fp32 dtypes in KDA short-convs cause 2x bandwidth waste
- [#40459](https://github.com/sgl-project/sglang/issues/40459) [Bug] handle_embedding_request does not abort over-length requests before enqueuing
- [#40441](https://github.com/sgl-project/sglang/issues/40441) [Feature][DeepSeek-V4.1] Decode graph width is pinned to --context-length; add a decode-phase max_seq_len
- [#40437](https://github.com/sgl-project/sglang/issues/40437) [Feature][weight-cache] Support DeepSeek-V4-Flash MXFP4 IPC loading
- [#40432](https://github.com/sgl-project/sglang/issues/40432) 4*5090 run nvidia/Qwen3.8-Flash-Next-NVFP4

#### 🔒 Closed Issues
- [#31578](https://github.com/sgl-project/sglang/issues/31578) [Feature] Native SM120 (Blackwell) support for flash_mla_sparse_fwd (DeepSeek-V4 sparse-attention prefill)
- [#32021](https://github.com/sgl-project/sglang/issues/32021) [Bug] Intermittent CUTLASS NVFP4 GEMM 'Error Internal' in qkv_proj crashes one TP rank (SM121, MiniMax-M3, 4x DGX Spark)
- [#31842](https://github.com/sgl-project/sglang/issues/31842) [Enhancement] [LMCache] MP mode: non-blocking store on request finish
- [#28669](https://github.com/sgl-project/sglang/issues/28669) [RFC] Disaggregated request preprocessing
- [#31597](https://github.com/sgl-project/sglang/issues/31597) Unvalidated request fields can crash the server (out-of-bounds topk / scatter DoS)
- [#40401](https://github.com/sgl-project/sglang/issues/40401) [Feature] lmsysorg/sglang:dev-qwen38-next-local this image have the versions of cuda-12.6 or 12.9?
- [#32105](https://github.com/sgl-project/sglang/issues/32105) [Bug] --enable-expert-distribution-metrics + EAGLE speculative-num-steps >= 2 crash-loops at startup: recorder pass boundary runs inside draft CUDA-graph capture
- [#32089](https://github.com/sgl-project/sglang/issues/32089) Prefill hidden_state_offset not advanced for non-requesting reqs -> cross-request hidden-state leak
- [#32084](https://github.com/sgl-project/sglang/issues/32084) [Bug] Grammar-compile ThreadPoolExecutor is sized by host CPU count (cgroup-unaware); xgrammar spawns 8 more threads per compile — CFS throttling stalls scheduler in containers
- [#32065](https://github.com/sgl-project/sglang/issues/32065) [Bug] Fused silu_and_mul post-quant launchers build invalid CUDA launch configs (block > 1024 threads; zero-block grid on empty batch)
- [#32063](https://github.com/sgl-project/sglang/issues/32063) [Bug] FlashInfer GDN backend silently disabled on Hopper by unconditional import of the SM100-only BF16-state kernel
- [#32056](https://github.com/sgl-project/sglang/issues/32056) [Bug] DeepGemm standard pre-permute disposes caller-owned hidden_states, crashing shared-expert models (e.g. Qwen3.5)
- [#39841](https://github.com/sgl-project/sglang/issues/39841) [Bug] --ple-offload-embedding is unreachable when the PLE table exceeds single-device VRAM (embedding is materialised on device before being offloaded)
- [#35201](https://github.com/sgl-project/sglang/issues/35201) [Bug] DeepSeek-V4 indexer's context-proportional logits allocation is unaccounted by mem_fraction_static — deterministic OOM on long-context prefill
- [#38795](https://github.com/sgl-project/sglang/issues/38795) [Bug] NVFP4 + flashinfer_cutlass + --speculative-adaptive: CUDA-graph capture raises "Unsupported moe_runner_backend ... Use flashinfer_cutlass instead" for the backend already in use

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 128,977 · **Open issues:** 2,531 · **Last push:** 2h ago

On September 21, 2026, llama.cpp released several new versions: b11065 optimized the CUDA FA for Gemma 4 on Ampere or newer, while b11064 added support for arbitrary hardware configurations in the metal dsv4_hc_pre kernels. Notably, b11059 incorporated F16 input support for the Metal FWHT, expanding its capabilities. Merged pull requests included enhancements like improved handling of invalid UTF-8 sequences in the AST and fixes for mobile breakpoint issues in the user interface. A significant new issue was raised regarding an evaluation bug that causes SIGSEGV during token-counting when the server is asleep.

#### 🚀 New Releases
- [b11065](https://github.com/ggml-org/llama.cpp/releases/tag/b11065) b11065
- [b11064](https://github.com/ggml-org/llama.cpp/releases/tag/b11064) b11064
- [b11063](https://github.com/ggml-org/llama.cpp/releases/tag/b11063) b11063
- [b11062](https://github.com/ggml-org/llama.cpp/releases/tag/b11062) b11062
- [b11060](https://github.com/ggml-org/llama.cpp/releases/tag/b11060) b11060
- [b11059](https://github.com/ggml-org/llama.cpp/releases/tag/b11059) b11059

#### ✅ Merged PRs
- [#29152](https://github.com/ggml-org/llama.cpp/pull/29152) CUDA: tune FA for Gemma 4 on Ampere or newer
- [#29169](https://github.com/ggml-org/llama.cpp/pull/29169) metal : support arbitrary hc in dsv4_hc_pre
- [#29161](https://github.com/ggml-org/llama.cpp/pull/29161) common/peg : handle invalid utf-8 sequences in the AST
- [#28770](https://github.com/ggml-org/llama.cpp/pull/28770) CUDA: enable sparse fa for qwen4
- [#29108](https://github.com/ggml-org/llama.cpp/pull/29108) ui: Fix mobile breakpoint + content overflow issues
- [#28832](https://github.com/ggml-org/llama.cpp/pull/28832) fix(mamba) : make time-step projection input contiguous
- [#29094](https://github.com/ggml-org/llama.cpp/pull/29094) metal: add F16 input to the FWHT

#### 🐛 New Issues
- [#29188](https://github.com/ggml-org/llama.cpp/issues/29188) Eval bug: SIGSEGV in token-counting routes when the request arrives while the server is sleeping (stale vocab/mctx captured before the wake barrier) 💬1
- [#29167](https://github.com/ggml-org/llama.cpp/issues/29167) [SYCL] Gated DeltaNet produces token soup on long prompts (greedy fails, dense models fine to 131K+) 💬1
- [#29174](https://github.com/ggml-org/llama.cpp/issues/29174) Eval bug: Qwen3.8-Flash-Next MTP draft GGUFs fail to load on b11058 (tensor not found) — no MTP path on Pascal `bug-unconfirmed` 💬1
- [#29192](https://github.com/ggml-org/llama.cpp/issues/29192) Feature Request: Add opt-in CLI flags to llama-server `enhancement`
- [#29183](https://github.com/ggml-org/llama.cpp/issues/29183) [SYCL] DeltaNet kernel produces token soup on long prompts (Qwen3.6, Qwen3.8, Nemotron)
- [#29176](https://github.com/ggml-org/llama.cpp/issues/29176) Misc. bug: pyproject.toml: uv sync fails on macOS due to unconditional PyTorch CPU index `bug-unconfirmed`
- [#29175](https://github.com/ggml-org/llama.cpp/issues/29175) llama-server: one prefill chunk blocks decode for all sequences — co-tenant stalls = ceil(prompt/n_batch), so `-b = n_parallel x -ub` maximises them
- [#29172](https://github.com/ggml-org/llama.cpp/issues/29172) Eval bug: CUDA decode+prefill collapse at deep KV position on qwen35 hybrid (~5.5x tg, ~21x pp at d154855)
- [#29168](https://github.com/ggml-org/llama.cpp/issues/29168) Eval bug: CUDA MoE weighted-reduction fusion (#25952) breaks speculative-decoding exactness — MTP draft acceptance 0.82 → 0.48 and MTP becomes a net slowdown (bisected to b10751)

#### 🔒 Closed Issues
- [#24737](https://github.com/ggml-org/llama.cpp/issues/24737) Eval bug: Qwen3.5-4B: GGUF conversion/load expects 33 blocks, model only has 32
- [#26215](https://github.com/ggml-org/llama.cpp/issues/26215) Eval bug: Trapped into garbled "/" loop with a specific conversation
- [#27543](https://github.com/ggml-org/llama.cpp/issues/27543) server: PEG chat parser returns HTTP 500 on complete generations containing invalid UTF-8 (no content fallback, unlike legacy parser)
- [#26682](https://github.com/ggml-org/llama.cpp/issues/26682) [rocm] Eval bug: qwen3-coder-next (unsloth UD-Q6_K) at 2100 t/s by repeating tokens after first 256 times
- [#26680](https://github.com/ggml-org/llama.cpp/issues/26680) rpc-server dies silently (no log past startup banner) on ANY relayed connection (portproxy or SSH tunnel), even a zero-byte TCP probe — works fine on direct loopback

### Ollama (`ollama/ollama`)

**Stars:** 181,330 · **Open issues:** 4,045 · **Last push:** 1d ago

On September 21, 2026, there were no new releases or merged PRs for Ollama, indicating a day of routine maintenance. However, a noteworthy issue was raised regarding the `/api/generate` endpoint, specifically with the `think:true` parameter, which appears to leak Qwen reasoning into the response, highlighting potential inconsistencies with the `/api/chat` endpoint that effectively separates this reasoning. Additionally, a memory issue was reported, along with questions about errors encountered using the gemma4 model for online searching and concerning instances where the gemma4:e4b model produced a blank image. Another technical problem also emerged, involving an access violation when loading models on a specific AMD GPU setup.

#### 🐛 New Issues
- [#18554](https://github.com/ollama/ollama/issues/18554) `/api/generate` with `think:true` leaks Qwen reasoning into `response`, while `/api/chat` separates it `bug` 💬4
- [#18558](https://github.com/ollama/ollama/issues/18558) memory issue `bug` 💬2
- [#18559](https://github.com/ollama/ollama/issues/18559) Why does Ollama encounter the following error when using gemma4:31b-mlx for online searching? `bug` 💬1
- [#18560](https://github.com/ollama/ollama/issues/18560) gemma4:e4b receives a blank (all-black) image; every image is described as black
- [#18557](https://github.com/ollama/ollama/issues/18557) 0xc0000005 access violation loading ANY model on Vulkan (AMD RX 6800 XT, driver 32.0.21045.5002)

#### 🔒 Closed Issues
- [#18554](https://github.com/ollama/ollama/issues/18554) `/api/generate` with `think:true` leaks Qwen reasoning into `response`, while `/api/chat` separates it
- [#18558](https://github.com/ollama/ollama/issues/18558) memory issue
- [#18441](https://github.com/ollama/ollama/issues/18441) MLX: structured output with thinking enabled prefixes JSON content with a stray "."
- [#18560](https://github.com/ollama/ollama/issues/18560) gemma4:e4b receives a blank (all-black) image; every image is described as black

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,247 · **Open issues:** 5,199 · **Last push:** <1h ago

Today, LiteLLM released version v1.103.0-rc.1, which includes signed Docker images for enhanced security. Among the merged pull requests, the team focused on synchronizing OpenRouter prices across multiple models while also implementing a crucial fix in the authentication system to reject deactivated JWT users. Notably, a new bug was reported regarding mid-conversation system messages causing issues with Gemini/Vertex prompt caching, highlighting ongoing challenges with user experience in streaming contexts. Additionally, developers are addressing a failure in the `/v1/audio/speech` endpoint for OpenRouter due to mapping issues with custom LLM providers.

#### 🚀 New Releases
- [v1.103.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.103.0-rc.1) v1.103.0-rc.1

#### ✅ Merged PRs
- [#42179](https://github.com/BerriAI/litellm/pull/42179) chore(prices): sync OpenRouter prices: 3 models
- [#42178](https://github.com/BerriAI/litellm/pull/42178) chore(prices): sync OpenRouter prices: 4 models
- [#42175](https://github.com/BerriAI/litellm/pull/42175) chore(prices): sync OpenRouter prices: 3 models
- [#42169](https://github.com/BerriAI/litellm/pull/42169) chore(prices): sync OpenRouter prices: 2 models
- [#42165](https://github.com/BerriAI/litellm/pull/42165) refactor(rust): split token counter backends
- [#42168](https://github.com/BerriAI/litellm/pull/42168) chore(prices): sync OpenRouter prices: 3 models
- [#42166](https://github.com/BerriAI/litellm/pull/42166) chore(prices): sync OpenRouter prices: 1 model
- [#42164](https://github.com/BerriAI/litellm/pull/42164) chore(prices): sync OpenRouter prices: 2 models
- [#42163](https://github.com/BerriAI/litellm/pull/42163) chore(prices): sync OpenRouter prices: 3 models
- [#42162](https://github.com/BerriAI/litellm/pull/42162) chore(prices): sync OpenRouter prices: 2 models
- [#42148](https://github.com/BerriAI/litellm/pull/42148) fix(mcp): explain missing public client dependencies
- [#42064](https://github.com/BerriAI/litellm/pull/42064) fix(auth): reject deactivated JWT users and refresh cached status
- [#42157](https://github.com/BerriAI/litellm/pull/42157) chore(prices): sync OpenRouter prices: 2 models
- [#42155](https://github.com/BerriAI/litellm/pull/42155) chore(prices): sync OpenRouter prices: 5 models
- [#42154](https://github.com/BerriAI/litellm/pull/42154) chore(prices): sync OpenRouter prices: 2 models
- [#42145](https://github.com/BerriAI/litellm/pull/42145) test: migrate legacy provider tests to tests/unit (wave 2, phase 13)
- [#42096](https://github.com/BerriAI/litellm/pull/42096) chore(prices): sync OpenRouter prices: 11 models
- [#41980](https://github.com/BerriAI/litellm/pull/41980) feat(fal_ai): add Seedance 2.5 / 2.0 video generation via fal queue API
- [#41879](https://github.com/BerriAI/litellm/pull/41879) fix(proxy): enforce virtual key budgets for JEV test routing
- [#42136](https://github.com/BerriAI/litellm/pull/42136) test: migrate phase 15 legacy tests to tests/unit
- [#42137](https://github.com/BerriAI/litellm/pull/42137) test: migrate phase 12 legacy llm provider tests to tests/unit
- [#42123](https://github.com/BerriAI/litellm/pull/42123) test: migrate wave 1 phase 1 legacy tests to tests/unit
- [#42131](https://github.com/BerriAI/litellm/pull/42131) test: migrate phase 16 legacy tests to tests/unit
- [#42132](https://github.com/BerriAI/litellm/pull/42132) test: migrate phase 14 wave 2 provider tests to tests/unit
- [#42128](https://github.com/BerriAI/litellm/pull/42128) test: migrate openai, openai_like and openrouter legacy tests to tests/unit
- [#42118](https://github.com/BerriAI/litellm/pull/42118) test(unit): migrate wave 1 phase 3 anthropic, apiserpent, azure and azure_ai legacy tests
- [#42135](https://github.com/BerriAI/litellm/pull/42135) test(unit): make every tests/unit directory a package so pytest collection is unique
- [#42127](https://github.com/BerriAI/litellm/pull/42127) refactor(types): replace Any with proven types in 30 files
- [#42109](https://github.com/BerriAI/litellm/pull/42109) test(llms): migrate phase 5 provider unit tests to tests/unit
- [#42112](https://github.com/BerriAI/litellm/pull/42112) test: migrate wave 1 phase 8 legacy llm tests to tests/unit
- [#42114](https://github.com/BerriAI/litellm/pull/42114) test(llms): migrate phase 7 provider unit tests to tests/unit
- [#42117](https://github.com/BerriAI/litellm/pull/42117) test: migrate phase 9 legacy llm provider tests to tests/unit
- [#42115](https://github.com/BerriAI/litellm/pull/42115) test: migrate nvidia, oci, ocr, oobabooga and openai legacy tests to tests/unit
- [#42107](https://github.com/BerriAI/litellm/pull/42107) test(llms): migrate phase 6 provider unit tests to tests/unit
- [#42110](https://github.com/BerriAI/litellm/pull/42110) test(llms): migrate bedrock, baseten and base_llm batch tests to tests/unit
- [#42108](https://github.com/BerriAI/litellm/pull/42108) test: migrate wave 1 phase 2 legacy unit tests to tests/unit
- [#42116](https://github.com/BerriAI/litellm/pull/42116) fix(ci): excuse retired test-quality rules in the budget ratchet
- [#42113](https://github.com/BerriAI/litellm/pull/42113) test(unit): block external sockets at import time and add a socket policy regression test
- [#42103](https://github.com/BerriAI/litellm/pull/42103) ci(tests): wire tests/unit into CircleCI and keep draining GHA shards green
- [#40932](https://github.com/BerriAI/litellm/pull/40932) fix(proxy): coordinate v2 migration startup and qualify container recovery
- [#42099](https://github.com/BerriAI/litellm/pull/42099) docs(tests): define the tier contract for unit, integration and e2e
- [#42071](https://github.com/BerriAI/litellm/pull/42071) chore: remove the dead telemetry flag from the SDK, proxy CLI and configs
- [#42092](https://github.com/BerriAI/litellm/pull/42092) chore(prices): sync OpenRouter prices: 1 model
- [#42089](https://github.com/BerriAI/litellm/pull/42089) chore(prices): sync OpenRouter prices: 1 model
- [#40986](https://github.com/BerriAI/litellm/pull/40986) fix(guardrails): scan each choice's tool-call arguments apart on n>1 streams and log why a rewrite was discarded
- [#41974](https://github.com/BerriAI/litellm/pull/41974) fix(proxy): wait for the spend-log table before creating startup views
- [#42082](https://github.com/BerriAI/litellm/pull/42082) chore(prices): sync OpenRouter prices: 7 models, 6 deprecated
- [#42081](https://github.com/BerriAI/litellm/pull/42081) test(batches): skip the Bedrock GovCloud batch e2e until its secrets are provisioned
- [#42072](https://github.com/BerriAI/litellm/pull/42072) fix(mcp): tools/call no longer 404s on a worker that has not served tools/list
- [#42051](https://github.com/BerriAI/litellm/pull/42051) test(e2e): restore MCP OAuth happy-path coverage (LIT-3467)
- [#42067](https://github.com/BerriAI/litellm/pull/42067) fix(google_genai): forward response schema and tool parameters through the generateContent adapter
- [#42077](https://github.com/BerriAI/litellm/pull/42077) chore(prices): sync OpenRouter prices: 2 models
- [#42045](https://github.com/BerriAI/litellm/pull/42045) fix(router): add NotFoundErrorRetries so a retry policy can pin 404 retries
- [#42076](https://github.com/BerriAI/litellm/pull/42076) test(logging): add autorouter estimate keys to the GCS pub/sub spend-log golden
- [#42075](https://github.com/BerriAI/litellm/pull/42075) test(mcp): migrate the mcp test helpers to the mcp 2.x MCPServer API
- [#42061](https://github.com/BerriAI/litellm/pull/42061) test(logging): add autorouter estimate keys to the GCS pub/sub spend-log golden
- [#42011](https://github.com/BerriAI/litellm/pull/42011) docs: stop advertising sk-1234 as the master key in shipped configs and examples
- [#42019](https://github.com/BerriAI/litellm/pull/42019) feat(proxy)!: refuse to start with an unset, empty, or publicly known master key
- [#42050](https://github.com/BerriAI/litellm/pull/42050) test(mcp): restore scoped execution and credential isolation regressions
- [#42062](https://github.com/BerriAI/litellm/pull/42062) fix(router): stamp model_group when retrieving a batch, so batch tokens are attributable (internal copy of #38499)
- [#42046](https://github.com/BerriAI/litellm/pull/42046) fix(router): skip cooldown for background response cost poll 404s
- [#41994](https://github.com/BerriAI/litellm/pull/41994) fix(proxy): stop re-sending un-resendable spend batches from the Redis buffer
- [#42054](https://github.com/BerriAI/litellm/pull/42054) chore: rebuild Admin UI bundle from main (build kXnLzJ6ylsRPmgSkCkCKM)
- [#42063](https://github.com/BerriAI/litellm/pull/42063) chore(prices): sync OpenRouter prices: 2 models

#### 🐛 New Issues
- [#42104](https://github.com/BerriAI/litellm/issues/42104) [Bug]: Mid-conversation `system` messages break Gemini/Vertex prompt caching (prefix changes every turn) `bug` `llm translation` `claude code` 💬4
- [#42161](https://github.com/BerriAI/litellm/issues/42161) [Bug]: streamed requests are costed as 0 when model_name is an alias `llm translation` 💬2
- [#42085](https://github.com/BerriAI/litellm/issues/42085) [Feature/Bug]: Add opt-in strict stream validation (strict_stream_completion) to catch truncated SSE streams `llm translation` 💬2
- [#42111](https://github.com/BerriAI/litellm/issues/42111) [Bug]: `/v1/audio/speech` fails for OpenRouter: "Unable to map the custom llm provider=openrouter to a known provider" `bug` `llm translation` 💬2
- [#42098](https://github.com/BerriAI/litellm/issues/42098) [Feature]: Add pricing for StepFun step-5-preview (official rate card available) 💬2
- [#42172](https://github.com/BerriAI/litellm/issues/42172) [Bug]: anthropic/<model> with a third-party api_base receives the client's Claude subscription OAuth token instead of the deployment's configured api_key (with forward_llm_provider_auth_headers either on or off) `llm translation` `claude code` 💬1
- [#42130](https://github.com/BerriAI/litellm/issues/42130) [Bug]: Presidio output_parse_pii corrupts text when analyzer spans overlap — placeholders spliced (<US_BANK_NUMBER_7>LICENSE_7>), characters after the entity eaten `llm translation` 💬1
- [#42073](https://github.com/BerriAI/litellm/issues/42073) [Bug]: Proxy /v1/messages/count_tokens sends third-party api_key to api.anthropic.com when deployment uses custom api_base (anthropic/* model) `bug` `llm translation` `claude code` 💬1
- [#42094](https://github.com/BerriAI/litellm/issues/42094) [Bug]: Anthropic is_pdf_used raises TypeError (500) when a message content list contains a plain string `llm translation` 💬1
- [#42171](https://github.com/BerriAI/litellm/issues/42171) [Bug]: chat-to-Responses bridge only folds a system message into instructions when content is a plain string (regression of #21192) `llm translation`
- [#42170](https://github.com/BerriAI/litellm/issues/42170) forward_client_headers_to_llm_api has no effect on /v1/messages (Claude Code Max subscription passthrough) `llm translation` `claude code`
- [#42151](https://github.com/BerriAI/litellm/issues/42151) [Feature]: Model wildcard parent-child configuration `enhancement` `llm translation`
- [#42139](https://github.com/BerriAI/litellm/issues/42139) Jev classifier: confidence-gated route-down + fail-expensive option
- [#42078](https://github.com/BerriAI/litellm/issues/42078) [Feature]: Expose OpenTelemetry trace IDs on LiteLLM Proxy responses

#### 🔒 Closed Issues
- [#23544](https://github.com/BerriAI/litellm/issues/23544) MCP: list_tools called on every tool call for HTTP servers - should use cached tool list
- [#27949](https://github.com/BerriAI/litellm/issues/27949) Feature request: OWASP ASI06 memory poisoning defense integration for LiteLLM agent deployments
- [#30471](https://github.com/BerriAI/litellm/issues/30471) [Bug]: Gemini pass-through streaming endpoint (streamGenerateContent) returns truncated JSON
- [#29961](https://github.com/BerriAI/litellm/issues/29961) How should an independent OpenAI-compatible gateway be represented in model_prices_and_context_window.json?
- [#30460](https://github.com/BerriAI/litellm/issues/30460) [Bug]: Redis spend counters inflate over time → false BudgetExceededError (429) on multi-pod + ElastiCache timeouts (v1.85.3)
- [#36896](https://github.com/BerriAI/litellm/issues/36896) [Bug] RetryPolicy has no NotFoundErrorRetries; router retries 404s and cools the whole deployment pool
- [#30437](https://github.com/BerriAI/litellm/issues/30437) LiteLLM_TeamMembership.litellm_budget_table missing default = None causes HTTP 401 on team member budget check
- [#30439](https://github.com/BerriAI/litellm/issues/30439) [Bug]: Playground: Model dropdown is empty/not selectable after navigating to Usage and back
- [#30444](https://github.com/BerriAI/litellm/issues/30444) Azure o-series and GPT-5 bypass api_version gating for tool_choice/response_format
- [#30448](https://github.com/BerriAI/litellm/issues/30448) [Feature]: Bayesian optimization feature
- [#30457](https://github.com/BerriAI/litellm/issues/30457) [Bug]: Downloaded bulk user creation CSV does not respect install location of LiteLLM
- [#30462](https://github.com/BerriAI/litellm/issues/30462) [Bug]: Container builds not delivering correct Next.js version in package-lock.json for UI
- [#30468](https://github.com/BerriAI/litellm/issues/30468) [Feature]: Include static/extra headers in MCP usage examples and copy snippets
- [#30469](https://github.com/BerriAI/litellm/issues/30469) Proxy: Anthropic /v1/messages endpoint bypasses CustomLogger.async_pre_call_hook — data['model'] overrides ignored
- [#30470](https://github.com/BerriAI/litellm/issues/30470) [Feature]: Add 'claude mcp add' CLI example to MCP modal in Model Hub

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,499 · **Open issues:** 1,255 · **Last push:** <1h ago

On September 21, 2026, there were no new releases for Unsloth. Significant merged pull requests included #11392, which optimizes the diffusion load worker by holding it on an event instead of relying on sleep, and #11371, enhancing the pinned formatter in settings.py. Additionally, the Studio component benefited from improvements such as #11293, which drops rows that cannot be formatted by the chat template, and #11298, allowing users to export and save only the reply they are currently viewing. Among new issues, #11391 stands out, proposing the loading of community SDXL fine-tunes on the Images page, highlighting ongoing enhancements in model management.

#### ✅ Merged PRs
- [#11392](https://github.com/unslothai/unsloth/pull/11392) Hold the diffusion load worker on an event instead of a sleep
- [#11389](https://github.com/unslothai/unsloth/pull/11389) Read the routing invariance counters as a steady state, not one request
- [#11386](https://github.com/unslothai/unsloth/pull/11386) Say when a failing pull_request job is testing a stale merge ref
- [#11372](https://github.com/unslothai/unsloth/pull/11372) Give the desktop release tests an explicit utf-8 encoding
- [#11347](https://github.com/unslothai/unsloth/pull/11347) Correct why a superseded probe matrix is expensive: slots, not minutes
- [#11371](https://github.com/unslothai/unsloth/pull/11371) Let the pinned formatter have the line it wants in settings.py
- [#11293](https://github.com/unslothai/unsloth/pull/11293) Studio: drop rows the chat template can't format and tell the user
- [#11374](https://github.com/unslothai/unsloth/pull/11374) Studio: put the sidebar nav validator signature on the line the formatter wants
- [#11305](https://github.com/unslothai/unsloth/pull/11305) Studio: show Vulkan iGPU memory as shared availability
- [#10597](https://github.com/unslothai/unsloth/pull/10597) Keep the regenerable caches inside the Studio root
- [#11218](https://github.com/unslothai/unsloth/pull/11218) Docker ROCm image: ship Unsloth Studio, as the CUDA image already does
- [#11227](https://github.com/unslothai/unsloth/pull/11227) Studio: skip duplicate weight files when downloading a model from the Hub
- [#9645](https://github.com/unslothai/unsloth/pull/9645) fix(studio): track Marked's def rule in the link definition probe
- [#11298](https://github.com/unslothai/unsloth/pull/11298) Studio: export and save only the reply you are looking at
- [#11356](https://github.com/unslothai/unsloth/pull/11356) desktop: publish a native arm64 linux deb
- [#10802](https://github.com/unslothai/unsloth/pull/10802) Studio: reopen dismissed Deep Research plan dialogs
- [#11370](https://github.com/unslothai/unsloth/pull/11370) Studio: give a project one home in the sidebar, and fix the row menus around it
- [#11365](https://github.com/unslothai/unsloth/pull/11365) Let the uv-safe requirements test pass where 8.3 names exist
- [#11339](https://github.com/unslothai/unsloth/pull/11339) studio: protect authenticated release redirects
- [#11338](https://github.com/unslothai/unsloth/pull/11338) studio: add in-app updates for debian installs
- [#11307](https://github.com/unslothai/unsloth/pull/11307) Studio: chat with a cached upstream model instead of downloading its Unsloth copy
- [#11283](https://github.com/unslothai/unsloth/pull/11283) Studio: turn on Code when Full access is picked
- [#11212](https://github.com/unslothai/unsloth/pull/11212) Docker ROCm image: reach the GPU through WSL2's DXG bridge, not only /dev/kfd
- [#11362](https://github.com/unslothai/unsloth/pull/11362) Take the Linux subdirectory-watch race out of the compiler watcher test
- [#11301](https://github.com/unslothai/unsloth/pull/11301) Studio: bring back the Resume button for past training runs
- [#11300](https://github.com/unslothai/unsloth/pull/11300) Studio: let recipes with a Hugging Face dataset run
- [#11297](https://github.com/unslothai/unsloth/pull/11297) Studio: show the right time left after resuming training
- [#11299](https://github.com/unslothai/unsloth/pull/11299) Studio: push only the exported files to the Hugging Face Hub
- [#11355](https://github.com/unslothai/unsloth/pull/11355) Retry a browser driver once before failing the leg
- [#11344](https://github.com/unslothai/unsloth/pull/11344) Say which locale catalog failed instead of dying in an eval
- [#11292](https://github.com/unslothai/unsloth/pull/11292) Studio: map context, question and answer columns to the right roles
- [#11346](https://github.com/unslothai/unsloth/pull/11346) Studio: tidy the run settings panel
- [#11348](https://github.com/unslothai/unsloth/pull/11348) Format the superseded-runs guard the way the hook does

#### 🐛 New Issues
- [#11391](https://github.com/unslothai/unsloth/issues/11391) [Feature] Load community SDXL fine-tunes (single-file GGUF/safetensors) in the Images page
- [#11388](https://github.com/unslothai/unsloth/issues/11388) [Feature] Remove Path information from Password Failure on Remote Access `feature request`
- [#11387](https://github.com/unslothai/unsloth/issues/11387) [Bug] Created API Keys cannot be copied `feature request` `bug`
- [#11385](https://github.com/unslothai/unsloth/issues/11385) [Feature] Make RAG UPLOAD_EXTS configurable via environment variable 💬1
- [#11349](https://github.com/unslothai/unsloth/issues/11349) Bundled llama.cpp build (CUDA 13.4) generates ~5-6x slower than official ggml-org CUDA 12 build on RTX 5070 Ti (sm_120) 💬1
- [#11393](https://github.com/unslothai/unsloth/issues/11393) [Bug] Unsloth STudio not returning all models when queried for models `feature request` `bug`
- [#11384](https://github.com/unslothai/unsloth/issues/11384) Backend CI: _page_char_budget raises TypeError when the context sentinel is compared across two module copies
- [#11382](https://github.com/unslothai/unsloth/issues/11382) [Feature] Allow managed accounts to use private/local provider base URLs (or add an admin toggle) `feature request`
- [#11381](https://github.com/unslothai/unsloth/issues/11381) Sandbox host policy: three call spellings still resolve to no name
- [#11376](https://github.com/unslothai/unsloth/issues/11376) Studio: a long single line with backslashes costs seconds per render in Marked's inline tokenizer
- [#11358](https://github.com/unslothai/unsloth/issues/11358) [Bug] Full Data of MCP Image Got Output, Not Parsed (Might Be JINJA Related) `feature request` `bug`

#### 🔒 Closed Issues
- [#9804](https://github.com/unslothai/unsloth/issues/9804) [Bug] Windows installer fails with errors that aren't fatal
- [#9540](https://github.com/unslothai/unsloth/issues/9540) Studio: a link reference definition with a label over 200 characters can be committed away, breaking the reference
- [#11336](https://github.com/unslothai/unsloth/issues/11336) [Resolved] Drivers too old - cuda 13 works with drivers =< 580
- [#9633](https://github.com/unslothai/unsloth/issues/9633) Studio: a link reference definition whose label spans lines is not held in the live tail
- [#10676](https://github.com/unslothai/unsloth/issues/10676) [Unsloth Bug] Deep Research "Review plan" is inert until the page is reloaded
- [#11103](https://github.com/unslothai/unsloth/issues/11103) Studio: token-carrying requests that still follow redirects without the auth-safe policy
- [#10332](https://github.com/unslothai/unsloth/issues/10332) [Feature] ARM64 Linux build of Unsloth Desktop (aarch64 / DGX Spark)

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,101 · **Open issues:** 373 · **Last push:** 7h ago

On September 21, 2026, AIBrix did not release any new versions, but several important changes were merged into the codebase. Notable updates include the resolution of a bug that ensures ranked candidates are retained in the SLOQueue despite rank lookup failures, as well as improvements to CI that enhance readiness checks for inference in the ModelAdapter. Additionally, lifecycle coverage for both PodSet and RayClusterFleet was added, contributing to more robust testing capabilities. A fix was also implemented to guard against short indexes in ModelGPUProfile.GetSignature. Overall, the day was marked by routine maintenance, focusing on bug fixes and the enhancement of system reliability.

#### ✅ Merged PRs
- [#2760](https://github.com/vllm-project/aibrix/pull/2760) [Bug] Keep ranked candidates in SLOQueue when a rank lookup fails
- [#2761](https://github.com/vllm-project/aibrix/pull/2761) [Bug][CI] Wait for inference readiness in ModelAdapter all-pods-removed E2E
- [#2751](https://github.com/vllm-project/aibrix/pull/2751) [CI] Add PodSet lifecycle E2E coverage
- [#2746](https://github.com/vllm-project/aibrix/pull/2746) [Gateway] Fail the client request and abort the decode leg when the SGLang PD prefill leg fails
- [#2756](https://github.com/vllm-project/aibrix/pull/2756) [Bug] Guard ModelGPUProfile.GetSignature against short indexes
- [#2753](https://github.com/vllm-project/aibrix/pull/2753) [CI] Add RayClusterFleet lifecycle E2E coverage

#### 🔒 Closed Issues
- [#2674](https://github.com/vllm-project/aibrix/issues/2674) [RFC]: Generalized Asynchronous Inference Job Lifecycle and Routing
- [#1430](https://github.com/vllm-project/aibrix/issues/1430) [RFC]: Add Integration Tests for CRD Controller
- [#2449](https://github.com/vllm-project/aibrix/issues/2449) Make StormService deployment mode explicit
- [#1805](https://github.com/vllm-project/aibrix/issues/1805) RFC: Add Leader Election Support for Active-Passive Architecture in Gateway plugin
- [#2737](https://github.com/vllm-project/aibrix/issues/2737) [Testing] Expand integration and E2E coverage for core controller and gateway workflows

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,876 · **Open issues:** 481 · **Last push:** <1h ago

On September 21, 2026, there were no new releases for Semantic Router. However, several significant changes were merged, including a feature to apply the routing strategy inside the selected tier (#3974) and enhancements that allow ranking decisions based on declared evidence rather than every leaf (#3959). Bug fixes addressed critical issues such as honoring parent deadlines in benchmark harness calls (#3973) and establishing score quantities before ranking (#3972). Among new issues, a notable bug was reported regarding the default Envoy image exiting with a SIGSEGV on Linux ARM64 (#3979), highlighting potential compatibility challenges.

#### ✅ Merged PRs
- [#3974](https://github.com/vllm-project/semantic-router/pull/3974) [Feature] Apply routing.strategy inside the selected tier
- [#3963](https://github.com/vllm-project/semantic-router/pull/3963) [CI/Build] Reject invalid check base references
- [#3964](https://github.com/vllm-project/semantic-router/pull/3964) [Test] Verify the Snowflake Cortex failure envelope and raise its conformance
- [#3973](https://github.com/vllm-project/semantic-router/pull/3973) [Bug] Honor parent deadlines in benchmark harness calls
- [#3972](https://github.com/vllm-project/semantic-router/pull/3972) [Bug] Establish the score quantity before ranking on it
- [#3912](https://github.com/vllm-project/semantic-router/pull/3912) [Feature] Build a reproducible shadow comparison dataset manifest
- [#3967](https://github.com/vllm-project/semantic-router/pull/3967) [Bug] Stream sr-bench datasets and compare total evaluation cost
- [#3960](https://github.com/vllm-project/semantic-router/pull/3960) [Feature] Remove prompt guard legacy Protocol field and fallback (#3126)
- [#3795](https://github.com/vllm-project/semantic-router/pull/3795) [Test] Cover tool plugin effects at the provider boundary
- [#3955](https://github.com/vllm-project/semantic-router/pull/3955) [CI/Build] Keep checks for both sides of renamed files
- [#3959](https://github.com/vllm-project/semantic-router/pull/3959) [Feature] Rank decisions on declared evidence instead of every leaf

#### 🐛 New Issues
- [#3979](https://github.com/vllm-project/semantic-router/issues/3979) [Bug] Default Envoy image exits with SIGSEGV on Linux ARM64 `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#3971](https://github.com/vllm-project/semantic-router/issues/3971) [Docs] FAQ, VSR vs gateways/llm-d, value metrics, and debugging `needs-acceptance` `wg/developer-experience-ecosystem` `documentation`
- [#3970](https://github.com/vllm-project/semantic-router/issues/3970) [Research] Evaluate Jev as an optional remote classifier backend `needs-acceptance` `research` `wg/router-models-inference-runtime`
- [#3962](https://github.com/vllm-project/semantic-router/issues/3962) [Feature] Expose the model-download endpoint in the k8s values and operator guide `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#3961](https://github.com/vllm-project/semantic-router/issues/3961) [Feature] Audit and strengthen generated API contract coverage `enhancement` `needs-acceptance` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#2729](https://github.com/vllm-project/semantic-router/issues/2729) [Bug] Kubernetes reconciliation double-prefixes canonical backend_ref names
- [#3126](https://github.com/vllm-project/semantic-router/issues/3126) [Feature] Move prompt guard onto the shared backend block
- [#3800](https://github.com/vllm-project/semantic-router/issues/3800) [Bug] LLM classifier signal fails when the classifier model reasons
- [#2676](https://github.com/vllm-project/semantic-router/issues/2676) [Bug] Validate completeness for alias-form embedding model paths
- [#3846](https://github.com/vllm-project/semantic-router/issues/3846) [Bug] Router Memory Redis cache conflates distinct hybrid and adaptive retrieval policies
- [#3524](https://github.com/vllm-project/semantic-router/issues/3524) [Bug] Traced Looper responses fail strict protocol translation and return 502
- [#3629](https://github.com/vllm-project/semantic-router/issues/3629) [Feature] Make the Model Hub table fill its container responsively
- [#3449](https://github.com/vllm-project/semantic-router/issues/3449) [Bug] google.golang.org/grpc pinned at v1.79.3 has 2 disclosed HIGH CVEs
- [#3811](https://github.com/vllm-project/semantic-router/issues/3811) [Bug] Kubernetes CRDs can report Ready before runtime activation succeeds
- [#3718](https://github.com/vllm-project/semantic-router/issues/3718) [Bug] plugin-request-mutations cannot reliably distinguish header overwrite from append
- [#3461](https://github.com/vllm-project/semantic-router/issues/3461) [Bug] Three local developer workflow issues in docker.mk and pre-commit config
- [#3500](https://github.com/vllm-project/semantic-router/issues/3500) [Bug] Streaming rejects a message_delta without stop_sequence that the buffered path accepts
- [#3793](https://github.com/vllm-project/semantic-router/issues/3793) [Bug] Support mistral.ai service_tier field in usage, chat completions API
- [#3548](https://github.com/vllm-project/semantic-router/issues/3548) [Bug] Dashboard config backups are world-readable and can contain API keys
- [#3710](https://github.com/vllm-project/semantic-router/issues/3710) [Bug] Keyword rules never match keywords that start or end with a symbol or a non-ASCII letter
- [#3949](https://github.com/vllm-project/semantic-router/issues/3949) [Bug] Tools database paths fail to resolve in the dashboard backend
- [#3947](https://github.com/vllm-project/semantic-router/issues/3947) [Bug] The Config Builder's automatic config load fails silently
- [#2727](https://github.com/vllm-project/semantic-router/issues/2727) [Bug] Guard the in-memory semantic cache against polarity mismatches
- [#2691](https://github.com/vllm-project/semantic-router/issues/2691) [Bug] Prevent semantic-cache false hits on negated or antonym queries
- [#3706](https://github.com/vllm-project/semantic-router/issues/3706) [Bug] golang.org/x/text v0.37.0 is vulnerable to GO-2026-5970 (infinite loop / DoS)
- [#3925](https://github.com/vllm-project/semantic-router/issues/3925) [Bug] Training scripts pass warmup_ratio/logging_dir removed in transformers 5.15

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*