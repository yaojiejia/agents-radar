# 📡 AI Ecosystem Digest — 2026-10-24

> Generated 2026-10-24 01:23 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 153,176 | 23 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 130,672 | 26 | 3 | 40 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,564 | 1 | 0 | 5 | 2 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,293 | 10 | 6 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 220,645 | 26 | 8 | 4 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,678 | 18 | 10 | 1 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,885 | 152 | 109 | 245 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 256,534 | 24 | 8 | 0 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 95,255 | 19 | 12 | 57 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,677 | 6 | 10 | 63 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,167 | 14 | 10 | 22 | 5 |
| [Ollama](https://github.com/ollama/ollama) | 184,494 | 6 | 5 | 7 | 2 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,924 | 13 | 22 | 31 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,486 | 14 | 17 | 219 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,160 | 5 | 6 | 6 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,252 | 11 | 4 | 5 | 0 |

---

## ✨ Highlights

- **Claude Code** released [v2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310).
- **OpenAI Codex** released multiple versions: [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0), [rust-v0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1), and [rust-v0.164.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.11.1).
- **GitHub Copilot CLI** released [v1.0.104-2](https://github.com/github/copilot-cli/releases/tag/v1.0.104-2).
- A high-impact new issue in **OpenClaw** reported a [Bug: Session read batch cannot reenter an active SQLite writer admission](https://github.com/openclaw/openclaw/issues/181660) with 7 comments.
- Another notable issue in **Qwen Code** details a [TUI crash with V8 out-of-memory during a long-running session on macOS](https://github.com/QwenLM/qwen-code/issues/15344) that garnered 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 153,176 · **Open issues:** 15,569 · **Last push:** 1h ago

On October 24, 2026, Claude Code released version v2.1.310, which introduced a new Monitor tool along with plugin monitors for Bedrock, Vertex, and Foundry, enhancing functionality when telemetry or nonessential traffic is disabled. Additionally, the update addressed various request failures behind certain gateways and improved reliability by retrying requests that encountered issues with the `effort-2025-11-24` beta value or mid-conversation system messages. Among the newly reported issues, the most significant is #104748, detailing a bug where the desktop code tab's layout resets after the first message in a new session. Other notable issues include bugs relating to macOS session interactions and unbounded recursive processes causing unintended costs.

#### 🚀 New Releases
- [v2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) v2.1.310

#### 🐛 New Issues
- [#104748](https://github.com/anthropics/claude-code/issues/104748) [BUG] [Desktop] Code tab: whole panel layout (terminal, file browser, other panes and their positions) resets after first message in a new session `bug` `platform:windows` `area:claude-code-web` `area:ui` 💬1
- [#104732](https://github.com/anthropics/claude-code/issues/104732) [BUG] Desktop: two instances with different `--user-data-dir` reap each other's live session worktrees (untracked-dir GC) → daily "recycled" worktrees and repeated trust prompts 💬1
- [#104506](https://github.com/anthropics/claude-code/issues/104506) [FEATURE] Desktop Code sidebar: setting for how many sessions to show per group before "Show more" `enhancement` `platform:macos` `area:ui` `area:desktop` 💬1
- [#104736](https://github.com/anthropics/claude-code/issues/104736) [BUG] Unbounded recursive send_later loop silently burned $285 on an idle draft PR via 60-min cache TTL misses `duplicate` `area:cost` `platform:web`
- [#104730](https://github.com/anthropics/claude-code/issues/104730) [Bug] `pkill -f "vite" -U $(id -u)` on macOS kills Chromium/Electron apps `bug` `platform:macos` `area:bash` `area:sandbox` 💬1
- [#104751](https://github.com/anthropics/claude-code/issues/104751) [FEATURE] Background sessions (`claude --bg`) can't set their own session title `enhancement` `area:agent-view`
- [#104750](https://github.com/anthropics/claude-code/issues/104750) Max 20x: weekly limit holds about half the usage since the week of Oct 15, 2026, with no announcement `question` `area:cost`
- [#104749](https://github.com/anthropics/claude-code/issues/104749) [Bug] Remote Control: /rename and /remote-control <name> don't update iOS session title `bug` `platform:windows` `platform:vscode` `platform:ios`
- [#104746](https://github.com/anthropics/claude-code/issues/104746) reasoning_extraction classifier blocks a single-session token-cost question, even a plain "ok" reply `bug` `duplicate` `platform:macos` `area:model`
- [#104747](https://github.com/anthropics/claude-code/issues/104747) [Bug] Kitty keyboard protocol: Cmd+C (CSI 99;9u) incorrectly inserted as literal "c" `bug` `platform:macos` `area:tui` `keybindings`
- [#104745](https://github.com/anthropics/claude-code/issues/104745) [Bug] Bash tool fails on Windows Git Bash: "unexpected EOF while looking for matching '" `bug` `platform:windows` `area:bash`
- [#104742](https://github.com/anthropics/claude-code/issues/104742) [BUG] Cloud session dies for good when its starting branch was deleted, although its working branch still exists `bug` `has repro` `area:agent-view`
- [#104744](https://github.com/anthropics/claude-code/issues/104744) [DOCS] Delete dialog says Anthropic keeps a copy of a cloud session, the docs say deleting removes it permanently `bug` `documentation` `area:claude-code-web` `area:docs`
- [#104743](https://github.com/anthropics/claude-code/issues/104743) [FEATURE] Cloud session: files outside the repo vanish without warning when the platform swaps in a fresh VM `enhancement` `area:claude-code-web`
- [#104741](https://github.com/anthropics/claude-code/issues/104741) [GitHub integration] Scheduled task cannot push: repo "not in this session's authorized repository set" `bug` `regression` `area:routines` `github-integration`
- [#104740](https://github.com/anthropics/claude-code/issues/104740) [Feature Request] Default to native Edit tool over complex Bash retries `enhancement` `platform:macos` `area:tools` `area:model`
- [#104739](https://github.com/anthropics/claude-code/issues/104739) [Windows][Desktop] Code tab spawns git.exe with visible console windows every ~30s (flashing conhost, steals focus) `duplicate` `platform:windows` `area:desktop`
- [#104738](https://github.com/anthropics/claude-code/issues/104738) Session limit blocks the Agent SDK while the desktop app on the same account is at 62% `bug` `platform:windows` `area:cost` `area:agent-sdk`
- [#104737](https://github.com/anthropics/claude-code/issues/104737) [Bug] Cost controls block educator's Agent SDK usage; requests exemption for coursework harness `enhancement` `platform:macos` `area:cost` `area:agent-sdk`
- [#104735](https://github.com/anthropics/claude-code/issues/104735) Session-wide lockout after single false-positive safeguard trip (decode request) `bug` `area:model`
- [#104734](https://github.com/anthropics/claude-code/issues/104734) [Bug] Interactive sessions skip OpenTelemetry export; headless -p mode exports `bug` `has repro` `platform:macos` `area:core`
- [#104733](https://github.com/anthropics/claude-code/issues/104733) [BUG] VS Code: `$.ui.scroll` from a mod is ignored by the webview (pane never scrolls), and pane scroll is never reported back `bug` `has repro` `platform:vscode` `area:plugins`
- [#104731](https://github.com/anthropics/claude-code/issues/104731) [Bug] Cyber Safeguard Blocks Security Test Planning for Payment Plugin `bug` `duplicate` `platform:macos` `area:model`

#### 🔒 Closed Issues
- [#102799](https://github.com/anthropics/claude-code/issues/102799) [BUG] [VSCode] Slash commands don't send ide_opened_file context, even though the file chip shows the file as attached

### OpenAI Codex (`openai/codex`)

**Stars:** 130,672 · **Open issues:** 24,464 · **Last push:** 6h ago

On October 24, 2026, OpenAI Codex released version rust-v0.164.0, which introduced new features allowing users to save reusable prompts and slash commands in ten numbered `/presets` slots, and set model, reasoning effort, speed, and permission profiles using inline arguments. Additionally, the release included the ability to preview viewed and generated images in fullscreen transcripts on compatible terminals. Significant merged pull requests included enhancements to Guardian's async classification and messaging efficiency, along with the addition of environment hooks in thread listings. Notably, there are multiple new issues reported, with #56618 highlighting an unusually fast drain of app usage limits, indicating possible service or configuration errors affecting user experiences.

#### 🚀 New Releases
- [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0) 0.164.0
- [rust-v0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1) 0.165.0-alpha.1
- [rust-v0.164.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.11.1) 0.164.0-alpha.11.1

#### ✅ Merged PRs
- [#56560](https://github.com/openai/codex/pull/56560) Allow configuring GCP project and location in provider settings
- [#56559](https://github.com/openai/codex/pull/56559) Remove Guardian snapshot-specific context helpers
- [#56557](https://github.com/openai/codex/pull/56557) Exercise retained sampling in Guardian transport tests
- [#56556](https://github.com/openai/codex/pull/56556) Use conversations for all Guardian v2 async classification
- [#56555](https://github.com/openai/codex/pull/56555) Apply sync Guardian message limits during transcript preparation
- [#56554](https://github.com/openai/codex/pull/56554) Enable masked AWS credentials for local proxy signing
- [#56553](https://github.com/openai/codex/pull/56553) Include environment hooks in thread hook listings
- [#56552](https://github.com/openai/codex/pull/56552) Initialize SQLite databases with DELETE journaling on NFS
- [#56543](https://github.com/openai/codex/pull/56543) Track resume picker pagination and selection metadata per backend
- [#56535](https://github.com/openai/codex/pull/56535) Extract the head-tail buffer into a utility crate
- [#56533](https://github.com/openai/codex/pull/56533) Defer sync Guardian tool-output truncation to transcript preparation
- [#56530](https://github.com/openai/codex/pull/56530) Record skill and plugin catalog sizes on publication
- [#56525](https://github.com/openai/codex/pull/56525) Remove the 1 MiB response limit for explicit model catalogs
- [#56524](https://github.com/openai/codex/pull/56524) Add turn, tool, and skill attribution to traces
- [#56516](https://github.com/openai/codex/pull/56516) Respect server approval policy defaults during TUI startup
- [#56515](https://github.com/openai/codex/pull/56515) Add trace instrumentation for turn startup and response streaming
- [#56514](https://github.com/openai/codex/pull/56514) Preserve tracing context throughout tool dispatch
- [#56505](https://github.com/openai/codex/pull/56505) Defer synchronous Guardian tool-call truncation to preparation
- [#56495](https://github.com/openai/codex/pull/56495) Add paginated channel subscription queries to the local message board
- [#56494](https://github.com/openai/codex/pull/56494) Add channel upserts to message boards
- [#56493](https://github.com/openai/codex/pull/56493) Move Guardian tool description preparation into context composition
- [#56483](https://github.com/openai/codex/pull/56483) Allow installed plugin metadata to skip display enrichment
- [#56477](https://github.com/openai/codex/pull/56477) Move Guardian approval reason caps into context composition
- [#56468](https://github.com/openai/codex/pull/56468) Preserve `SystemRoot` for Windows filesystem sandbox helpers
- [#56465](https://github.com/openai/codex/pull/56465) Add experimental thread memory summary reads
- [#56462](https://github.com/openai/codex/pull/56462) Prevent memory imports from racing with consolidation
- [#56461](https://github.com/openai/codex/pull/56461) Add silent append support to message boards
- [#56460](https://github.com/openai/codex/pull/56460) Add Guardian v3 local board helpers
- [#56459](https://github.com/openai/codex/pull/56459) Add Guardian V3 feature configuration
- [#56454](https://github.com/openai/codex/pull/56454) Make sandbox mount cleanup tests tolerate file descriptor reuse
- [#56453](https://github.com/openai/codex/pull/56453) Make the Realtime V2 background-agent steering test deterministic
- [#56445](https://github.com/openai/codex/pull/56445) Treat model-not-found provider errors as terminal failures
- [#56439](https://github.com/openai/codex/pull/56439) Update `ctutils` from 0.4.2 to 0.4.5
- [#56414](https://github.com/openai/codex/pull/56414) Support memory v2 in external-agent memory imports
- [#56371](https://github.com/openai/codex/pull/56371) Make the Guardian review timeout configurable
- [#56364](https://github.com/openai/codex/pull/56364) Allow callers to set the thread source for sampling
- [#56351](https://github.com/openai/codex/pull/56351) Add experimental attached thread forks
- [#56343](https://github.com/openai/codex/pull/56343) Run environment hooks on their owning executors
- [#56342](https://github.com/openai/codex/pull/56342) Match rollout trace image content across request snapshots
- [#56330](https://github.com/openai/codex/pull/56330) Make agent-message wakes respect interrupts and Plan mode

#### 🐛 New Issues
- [#56607](https://github.com/openai/codex/issues/56607) 404 Error unable to download install script for codex `bug` `CLI` `app` `connectivity` 💬2
- [#56616](https://github.com/openai/codex/issues/56616) https://chatgpt.com/codex/install.sh returns 404 `bug` `CLI` `connectivity` 💬3
- [#56623](https://github.com/openai/codex/issues/56623) Windows Codex exec: opaque 'blocked by policy' during rollback ZIP verification (request for supported diagnosis) `bug` `windows-os` `sandbox` `tool-calls` 💬2
- [#56620](https://github.com/openai/codex/issues/56620) [Windows] Codex Desktop fails to load organization settings after update — persists after reinstall, Windows repair, and reauthentication `bug` `windows-os` `app` 💬2
- [#56618](https://github.com/openai/codex/issues/56618) Codex App usage limits draining unusually fast — 83% of 5-hour allowance consumed in 2 hours `bug` `rate-limits` `app` 💬1
- [#56422](https://github.com/openai/codex/issues/56422) [Dots cloud computer] Desktop stays Offline with native pipe ENOENT while shell works; resets do not recover `bug` `computer-use` `dots` 💬1
- [#56615](https://github.com/openai/codex/issues/56615) [Codex] Repeated cyber_policy blocks during authorised migration regression testing `bug` `app` `safety-check` 💬1
- [#56614](https://github.com/openai/codex/issues/56614) Windows 10: native Computer Use screenshots time out while window discovery and accessibility work `bug` `windows-os` `app` `computer-use` 💬1
- [#56611](https://github.com/openai/codex/issues/56611) [Windows] Azure model provider in config.toml prevents ChatGPT sign-in screen from appearing `bug` `windows-os` `auth` `azure` 💬1
- [#56610](https://github.com/openai/codex/issues/56610) [Desktop Remote SSH] Existing thread retains another client's codex_app MCP binding across Windows → macOS → Windows `bug` `windows-os` `mcp` `app` 💬1
- [#56609](https://github.com/openai/codex/issues/56609) macOS: existing chat reports browser disabled after switching ChatGPT accounts `bug` `auth` `app` `browser` 💬1
- [#56603](https://github.com/openai/codex/issues/56603) [Windows] Computer Use shows Manage but Chrome native host registration is missing `bug` `windows-os` `app` `computer-use` 💬1
- [#56600](https://github.com/openai/codex/issues/56600) Android Codex Remote pairing fails with both QR and manual code `bug` `windows-os` `app` `remote` 💬1
- [#56622](https://github.com/openai/codex/issues/56622) [macOS] PDF preview text appears blurry during reading alongside chat `bug` `app`
- [#56621](https://github.com/openai/codex/issues/56621) Make GitHub Codex reviews explicit about stack context and cross-PR dependencies `enhancement` `code-review`
- [#56613](https://github.com/openai/codex/issues/56613) [Dot cloud-browser tooling] CDP binding/observation timeouts; session recovered after reset + new tab `bug` `browser` `dots`
- [#56612](https://github.com/openai/codex/issues/56612) [Dot-managed cloud task / web UI] Plan mode absent; /plan shows No commands while idle `bug` `codex-web` `plan`
- [#56619](https://github.com/openai/codex/issues/56619) latest desktop build caused issues `bug` `app` `dots`
- [#56617](https://github.com/openai/codex/issues/56617) Antigravity/WSL: 26.1021.22027 hits renderer_ready_timeout; 26.51007.21434 prerelease works `bug` `windows-os` `extension` `remote`
- [#56604](https://github.com/openai/codex/issues/56604) [macOS][26.1021.22027] Lowercase F key swallowed app-wide after update; Shift+F works `bug` `app`
- [#56608](https://github.com/openai/codex/issues/56608) Codex app: expose remote device globe color in connection settings `enhancement` `app` `remote`
- [#56394](https://github.com/openai/codex/issues/56394) TUI: closing "Enable/Disable Skills" says "0 skills enabled, 1 skills disabled", which reads like totals, not changes `bug` `TUI` `CLI` `skills`
- [#56606](https://github.com/openai/codex/issues/56606) Branching a chat drops secondary workspace folders `bug` `windows-os` `extension` `session`
- [#56605](https://github.com/openai/codex/issues/56605) Windows Work local execution blocked by helper_sandbox_lock_failed on 26.1016.6573.0; persists after reboot and Repair `bug` `windows-os` `sandbox` `app`
- [#56602](https://github.com/openai/codex/issues/56602) Codex Cloud: Add “refresh/reload environment” for existing tasks/sessions (avoid opening many tabs) `enhancement` `codex-web` `session`
- [#56601](https://github.com/openai/codex/issues/56601) Allow Codex CLI/TUI users to connect their computer to a dot without the desktop app `enhancement` `CLI` `remote` `dots`

#### 🔒 Closed Issues
- [#33662](https://github.com/openai/codex/issues/33662) [Windows] In-app Browser steals foreground focus when agent opens a new browser window
- [#37251](https://github.com/openai/codex/issues/37251) [Hooks] PreToolUse omits the effective workdir for exec_command and shell_command
- [#56394](https://github.com/openai/codex/issues/56394) TUI: closing "Enable/Disable Skills" says "0 skills enabled, 1 skills disabled", which reads like totals, not changes

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,564 · **Open issues:** 755 · **Last push:** <1h ago

On October 24, 2026, the Gemini CLI released version v0.67.0-nightly.20261024.gcd1b45c2d, which includes important fixes such as stopping continuation stream processing after request cancellation and correcting the display width for Thai and Lao SARA AM. Notable merged pull requests today feature the addition of a models command along with a --list-models flag for easier model discovery, as well as critical updates to handle termination signals and ensure correct reporting of token usage metadata. A new issue was raised regarding the Solaris extension, specifically that it lacks a visible validation disposition. Overall, the day's updates highlight a continued focus on enhancing user experience and functionality within the Gemini CLI ecosystem.

#### 🚀 New Releases
- [v0.67.0-nightly.20261024.gcd1b45c2d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261024.gcd1b45c2d) Release v0.67.0-nightly.20261024.gcd1b45c2d
- [v0.67.0-nightly.20261023.ga713410ab](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261023.ga713410ab) Release v0.67.0-nightly.20261023.ga713410ab

#### ✅ Merged PRs
- [#29880](https://github.com/google-gemini/gemini-cli/pull/29880) feat(cli): add models command and --list-models flag for model discovery
- [#29899](https://github.com/google-gemini/gemini-cli/pull/29899) fix(cli): convert Claude hook timeout from seconds to milliseconds during migration
- [#29838](https://github.com/google-gemini/gemini-cli/pull/29838) fix(core): resolve relative file paths against active IDE workspace root
- [#29883](https://github.com/google-gemini/gemini-cli/pull/29883) fix(cli): correct Thai and Lao SARA AM display width
- [#29868](https://github.com/google-gemini/gemini-cli/pull/29868) fix(cli): stop continuation stream processing and auto-nudge after request cancellation

#### 🐛 New Issues
- [#29903](https://github.com/google-gemini/gemini-cli/issues/29903) Extensions gallery: tagged Solaris extension has no visible validation disposition `area/extensions` `status/bot-triaged` `effort/small` 💬1

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,293 · **Open issues:** 2,258 · **Last push:** <1h ago

On October 24, 2026, GitHub Copilot CLI released v1.0.104-2, which introduced a fix for the managed model "fusion" to ensure sessions start on Auto and appropriately apply fusionTier settings, alongside improvements for interactive and SDK Autopilot sessions. The earlier version, v1.0.104-0, notably made Assisted Permissions available without needing to enable experimental mode and fixed an issue where Auto would fail when preferences were unavailable, allowing it to revert to defaults. There were no merged PRs to report today, but several new issues emerged, with #5248 attracting attention due to a container runtime failure that's impacting the copilot-runtime-bazel-cache.

#### 🚀 New Releases
- [v1.0.104-2](https://github.com/github/copilot-cli/releases/tag/v1.0.104-2) 1.0.104-2
- [v1.0.104-1](https://github.com/github/copilot-cli/releases/tag/v1.0.104-1) 1.0.104-1
- [v1.0.104-0](https://github.com/github/copilot-cli/releases/tag/v1.0.104-0) 1.0.104-0

#### 🐛 New Issues
- [#5248](https://github.com/github/copilot-cli/issues/5248) P3 - container-runtime/copilot-runtime-bazel-cache-container-oomkilled on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-1-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-bazel-ca... - 2026-10-23T20:02Z `source:datadog` `catalog_service:copilot-runtime-bazel-cache` `RECOVERED` 💬1
- [#5249](https://github.com/github/copilot-cli/issues/5249) Model-Facing `skill()` Tool Registers Plugin Skills Under Bare Names Unless the Name Collides, So `plugin:skill` Fails `triage`
- [#5247](https://github.com/github/copilot-cli/issues/5247) PowerShell 7.6.8 `triage`
- [#5246](https://github.com/github/copilot-cli/issues/5246) Editing prompt to start with `!` traps user in Shell mode `triage`
- [#5245](https://github.com/github/copilot-cli/issues/5245) No STT models behind a corporate proxy since 1.0.101 (Foundry runtime ignores proxy settings) `triage`
- [#5244](https://github.com/github/copilot-cli/issues/5244) Sub-agent detail view in /tasks does not allow expanding tool calls `triage`
- [#5243](https://github.com/github/copilot-cli/issues/5243) Subagents started in the same turn as an approved exit_plan_mode get none of the built-in tools (regression after 1.0.95) `triage`
- [#5242](https://github.com/github/copilot-cli/issues/5242) Sessions stop processing when MCP config watch registration hits the inotify limit (ENOSPC) `triage`
- [#5241](https://github.com/github/copilot-cli/issues/5241) Copilot app: selecting a custom agent in the composer agent picker doesn't apply its model or reasoning-effort `area:agents` `area:models`
- [#5240](https://github.com/github/copilot-cli/issues/5240) GitHub Copilot CLI interactive mode breaks terminal TTY on macOS (Copilot)

#### 🔒 Closed Issues
- [#869](https://github.com/github/copilot-cli/issues/869) Failed to list available models due to duplicate CA certificates from combined system and bundled certs
- [#1177](https://github.com/github/copilot-cli/issues/1177) Error updating plugin
- [#5248](https://github.com/github/copilot-cli/issues/5248) P3 - container-runtime/copilot-runtime-bazel-cache-container-oomkilled on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-1-gc-cus-02,kube_deployment:copilot-runtime-bazel-cache,kube_namespace:copilot-runtime-bazel-ca... - 2026-10-23T20:02Z
- [#4075](https://github.com/github/copilot-cli/issues/4075) Using images (like for testing UX changes) often results in the CLI getting into a broken state
- [#5055](https://github.com/github/copilot-cli/issues/5055) Support dynamic workflows (/workflows view) in BYOK / air-gapped sessions
- [#5240](https://github.com/github/copilot-cli/issues/5240) GitHub Copilot CLI interactive mode breaks terminal TTY on macOS (Copilot)

### OpenCode (`anomalyco/opencode`)

**Stars:** 220,645 · **Open issues:** 3,680 · **Last push:** <1h ago

On October 24, 2026, there were no new releases for OpenCode, but several important pull requests were merged, including a fix to ensure omitted tool images do not retain their payloads (#58560) and a notable feature that allows for a portable image shape with specified aspect and resolution (#58528). Additionally, the catalog was updated to exclude real-time, embedding, and reranking models (#58458) and adjustments were made to store opaque screenshots as JPEGs before PNGs (#56990). Among the new issues, the report of a "Free usage exceeded" error despite being a first-time user (#58550) stands out as a concerning topic likely to affect new adopters of the platform.

#### ✅ Merged PRs
- [#58560](https://github.com/anomalyco/opencode/pull/58560) fix(app): stop omitted tool images from keeping their payload alive
- [#58458](https://github.com/anomalyco/opencode/pull/58458) fix(core): exclude realtime, embedding, and reranking models from the catalog
- [#58528](https://github.com/anomalyco/opencode/pull/58528) feat(ai): portable image shape with aspect and resolution
- [#56990](https://github.com/anomalyco/opencode/pull/56990) fix(core): store opaque screenshots as JPEG before PNG

#### 🐛 New Issues
- [#58550](https://github.com/anomalyco/opencode/issues/58550) Free usage exceeded, tho my first time Using opencode `pending close` `triaging` 💬3
- [#58496](https://github.com/anomalyco/opencode/issues/58496) Stream error only written to log, never surfaced to client — session appears to “hang” (opencode as external agent in zed) `pending close` `triaging` 💬3
- [#58559](https://github.com/anomalyco/opencode/issues/58559) Opencode crash or fail to run if %temp% is located to different path on windows `pending close` `triaging` 💬2
- [#58553](https://github.com/anomalyco/opencode/issues/58553) 额度限制有误 `pending close` `triaging` 💬2
- [#58537](https://github.com/anomalyco/opencode/issues/58537) agents: plan mode allows file mutations through MCP tools `reproduced` 💬2
- [#58536](https://github.com/anomalyco/opencode/issues/58536) Free usage limit error despite zero Console usage `pending close` `triaging` 💬2
- [#58532](https://github.com/anomalyco/opencode/issues/58532) desktop: switching language from Arabic (RTL) to English leaves overlapping, unusable controls in 2.1.4 💬2
- [#58529](https://github.com/anomalyco/opencode/issues/58529) DeepSeek V4.1 Flash Free model responds with long text and enters infinite loop `pending close` `triaging` 💬2
- [#58476](https://github.com/anomalyco/opencode/issues/58476) [FEATURE]: ACP - allow disabling codemode for MCP servers passed via session/new 💬2
- [#58571](https://github.com/anomalyco/opencode/issues/58571) install: @democratize-technology/desktop-commander-mcp returns 404 `triaging` 💬1
- [#58570](https://github.com/anomalyco/opencode/issues/58570) [BUG] Assistant stops displaying text during a long tool-driven task, continues working silently, and provides no final report `triaging` 💬1
- [#58569](https://github.com/anomalyco/opencode/issues/58569) Free-model daily quota counter resets for a new day, but the “limit exhausted” warning persists and access remains blocked `pending close` `triaging` 💬1
- [#58564](https://github.com/anomalyco/opencode/issues/58564) `VcsGit.patch()` does not pass literal pathspecs for the per-file patch `reproduced` 💬1
- [#58563](https://github.com/anomalyco/opencode/issues/58563) server basic auth password check is not constant time `reproduced` 💬1
- [#58561](https://github.com/anomalyco/opencode/issues/58561) Free usage exceeded infinite limit. `pending close` `triaging` 💬1
- [#58558](https://github.com/anomalyco/opencode/issues/58558) provider discovery: hard-coded 1s timeout fails remote endpoints `pending close` `triaging` 💬1
- [#58557](https://github.com/anomalyco/opencode/issues/58557) After one message I hit the limit for today. `pending close` `triaging` 💬1
- [#58555](https://github.com/anomalyco/opencode/issues/58555) tui: WebSocket editor selection_changed line numbers are off by one (0-based shown as-is) `reproduced` 💬1
- [#58554](https://github.com/anomalyco/opencode/issues/58554) tui: "Modified Files" sidebar section never renders on 2.1.4 💬1
- [#58547](https://github.com/anomalyco/opencode/issues/58547) Plugin session.update with an empty title clears the title instead of generating a new one `reproduced` 💬1
- [#58543](https://github.com/anomalyco/opencode/issues/58543) migration: sessions created via 1.19 /api/session lose all messages on v1->v2 migration (2.1.3) `reproduced` `severity:high` 💬1
- [#58541](https://github.com/anomalyco/opencode/issues/58541) [FEATURE]: Cmd+X should cut the selected text in the prompt 💬1
- [#58534](https://github.com/anomalyco/opencode/issues/58534) Docs: incorrectly stating MiMo Code as "Problematic Client" `reproduced` 💬1
- [#58533](https://github.com/anomalyco/opencode/issues/58533) desktop: custom-provider dialog writes V1 provider keys that the V2 server ignores - toast says provider not available on this server `pending close` `triaging` 💬1
- [#58527](https://github.com/anomalyco/opencode/issues/58527) Permission "ask" effect silently allows for edit/write — no prompt shown (shell "ask" prompts correctly) `pending close` `triaging` 💬1
- [#58526](https://github.com/anomalyco/opencode/issues/58526) tui: link clicks ignore $BROWSER on WSL 💬1

#### 🔒 Closed Issues
- [#58284](https://github.com/anomalyco/opencode/issues/58284) Free models report "Free usage limit reached" despite zero usage
- [#57578](https://github.com/anomalyco/opencode/issues/57578) [Bug] OpenCode steals foreground focus and disrupts user workflow when testing/running apps (Window Activation / Focus Stealing)
- [#58285](https://github.com/anomalyco/opencode/issues/58285) False Free Usage Exceeded Message Going on for 2 Days already
- [#58250](https://github.com/anomalyco/opencode/issues/58250) [FEATURE]: Add a /goal Command for Autonomous Goal Pursuit
- [#58268](https://github.com/anomalyco/opencode/issues/58268) desktop: Electron version still ~1GB memory (Node server wrapped in Electron)
- [#57558](https://github.com/anomalyco/opencode/issues/57558) Error al instalar v2
- [#57541](https://github.com/anomalyco/opencode/issues/57541) tool dispatch: shell tool silently removed mid-session; assistant emits tool-call XML as chat text and cannot build or verify
- [#58537](https://github.com/anomalyco/opencode/issues/58537) agents: plan mode allows file mutations through MCP tools

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,678 · **Open issues:** 2,064 · **Last push:** <1h ago

On October 24, 2026, Qwen Code released v0.26.0-nightly.20261023.5a0be33432, introducing features such as daemon token persistence and enhancements in the handling of spawned vendored binaries. Notably, merged pull request #15255 added a shared Harness pool for Kubernetes. However, the day also saw the emergence of several significant new issues, with #15344 reporting that the Qwen Code 0.26.0 TUI crashes due to a V8 out-of-memory condition during long-running sessions on macOS, highlighting a critical area for further investigation and resolution. Other reported issues include problems with headless run exits and dropped voice attachments in QQ, indicating ongoing challenges within the platform.

#### 🚀 New Releases
- [v0.26.0-nightly.20261023.5a0be33432](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.0-nightly.20261023.5a0be33432) Release v0.26.0-nightly.20261023.5a0be33432

#### ✅ Merged PRs
- [#15255](https://github.com/QwenLM/qwen-code/pull/15255) feat(managed-agent): Add a shared Harness pool for Kubernetes

#### 🐛 New Issues
- [#15344](https://github.com/QwenLM/qwen-code/issues/15344) Qwen Code 0.26.0 TUI crashes with V8 out-of-memory during a long-running session on macOS `status/need-information` `priority/P1` `type/bug` `category/performance` 💬5
- [#15328](https://github.com/QwenLM/qwen-code/issues/15328) Headless run exits 0 with no output when the turn is truncated by the output limit `priority/P2` `type/bug` `category/cli` `scope/non-interactive` 💬4
- [#15353](https://github.com/QwenLM/qwen-code/issues/15353) Remove rotating loading phrases and improve status visibility in Web Shell `priority/P3` `type/feature-request` `category/ui` `need-discussion` 💬4
- [#15334](https://github.com/QwenLM/qwen-code/issues/15334) QQ voice attachments are dropped: the voice CDN host is missing from the attachment allowlist `priority/P2` `type/bug` `category/integration` 💬4
- [#15392](https://github.com/QwenLM/qwen-code/issues/15392) CI: nothing pins that workspace vitest JUnit writers land inside the packages/*/junit.xml upload glob `priority/P3` `category/development` `scope/testing` `scope/ci-cd` 💬3
- [#15365](https://github.com/QwenLM/qwen-code/issues/15365) bug(cli): a stream-json message sent during startup runs before the first message `priority/P2` `type/bug` `category/cli` `scope/non-interactive` 💬3
- [#15340](https://github.com/QwenLM/qwen-code/issues/15340) test(runtime-broker): aLostActivationAnswerIsRetriedAgainstTheSameGate can time out with its execution stuck in UNKNOWN `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#15398](https://github.com/QwenLM/qwen-code/issues/15398) ci: surface new failure signatures recorded on aggregated Main CI issues — new regressions currently land as invisible comments `priority/P2` `status/needs-triage` `type/feature-request` `category/development` 💬2
- [#15397](https://github.com/QwenLM/qwen-code/issues/15397) Ink history recall loses large pasted text after editing `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬2
- [#15380](https://github.com/QwenLM/qwen-code/issues/15380) Deferred review findings from PR #12442: fix(cua): sign Windows UIAccess workers before publishing `priority/P3` `category/security` `scope/windows` `scope/testing` 💬2
- [#15327](https://github.com/QwenLM/qwen-code/issues/15327) tracking(core): run every surface on one agent loop behind experimental.unifiedAgentLoop `priority/P1` `type/feature-request` `category/core` `roadmap/session-management` 💬2
- [#15341](https://github.com/QwenLM/qwen-code/issues/15341) test(cli): hosted-harness-session hasActivePrompt assertion flips under extreme ECS host contention (1/44,637) `priority/P3` `type/bug` `category/development` `scope/testing` 💬2
- [#15325](https://github.com/QwenLM/qwen-code/issues/15325) bug(cli): a stream-json message past --max-session-turns returns success with the previous answer `priority/P2` `type/bug` `category/cli` `scope/non-interactive` 💬2
- [#15307](https://github.com/QwenLM/qwen-code/issues/15307) Main CI failed: Managed Agent gate on 8666ab091f76 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#15326](https://github.com/QwenLM/qwen-code/issues/15326) bug(cli): OpenTUI runs tool calls from a retried attempt and does not record native tool results `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬2
- [#15324](https://github.com/QwenLM/qwen-code/issues/15324) bug(acp): an edit whose arguments were cut off by max_tokens is written to disk `priority/P1` `type/bug` `category/integration` `scope/content-generation` 💬2
- [#15336](https://github.com/QwenLM/qwen-code/issues/15336) Main CI failed: Managed Agent gate on 801826b5247b `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15335](https://github.com/QwenLM/qwen-code/issues/15335) Main CI failed: Managed Agent gate on d6088f14fa03 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1

#### 🔒 Closed Issues
- [#15088](https://github.com/QwenLM/qwen-code/issues/15088) Hosted lifecycle ITs can lose a just-admitted close claim to SessionLifecycleCoordinator's scan
- [#12842](https://github.com/QwenLM/qwen-code/issues/12842) Deferred review findings from PR #8838: fix(cli): persist scheduled cron prompts
- [#15191](https://github.com/QwenLM/qwen-code/issues/15191) Hosted gate: HostedShellLifecycleRecoveryIT spring-kill leaves the publication RETIRING past its wait
- [#15166](https://github.com/QwenLM/qwen-code/issues/15166) ci: dedupe pre-test-result main CI failure filings by error signature, not commit SHA
- [#15139](https://github.com/QwenLM/qwen-code/issues/15139) Main CI failed: Qwen Code CI — scripts/tests/no-ak-integration-ci.test.js > … > accounts for every runnable integration test and every no-AK…
- [#15075](https://github.com/QwenLM/qwen-code/issues/15075) Managed Agent: add a capability parity matrix against the legacy daemon
- [#15287](https://github.com/QwenLM/qwen-code/issues/15287) Main CI failed: Qwen Code CI — cli/hosted-harness-process.test.ts [ cli/hosted-harness-process.test.ts ]
- [#15307](https://github.com/QwenLM/qwen-code/issues/15307) Main CI failed: Managed Agent gate on 8666ab091f76
- [#13410](https://github.com/QwenLM/qwen-code/issues/13410) Deferred review findings from PR #13342: fix(web-shell): managed session UI correctness from the #12692 R2 review
- [#11482](https://github.com/QwenLM/qwen-code/issues/11482) Deferred review findings from PR #11376: fix(cli): quiesce serve test leak and sync capability doc count (#11363)

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1245](https://github.com/anthropics/skills/pull/1245) Add notion-spec-to-implementation and quantitative-resume-auditor skills
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 392,885 · **Open issues:** 8,942 · **Last push:** <1h ago

On October 24, 2026, OpenClaw saw a flurry of merging activity but no new releases. Key merged pull requests included fixes for UI navigation with #182067, stability improvements in session handling (#182048 and #181878), and performance enhancements in the Doctor tool (#182035). Among the new issues, the most pressing is #181660, reporting an error where a session read batch cannot reenter while an SQLite writer is active, indicating potential challenges in handling concurrent database operations. These developments reflect ongoing work to enhance system reliability and usability ahead of future releases.

#### ✅ Merged PRs
- [#182047](https://github.com/openclaw/openclaw/pull/182047) fix(release): bound candidate tooling lag path count
- [#182050](https://github.com/openclaw/openclaw/pull/182050) fix(release): size FRV helper git output for extended-stable lag
- [#182067](https://github.com/openclaw/openclaw/pull/182067) fix(ui): preserve Show in Files navigation
- [#182048](https://github.com/openclaw/openclaw/pull/182048) fix: release PostgreSQL bridges after three idle minutes
- [#159863](https://github.com/openclaw/openclaw/pull/159863) fix(agents): describe sessions_spawn agentId allowed targets in the tool description
- [#181878](https://github.com/openclaw/openclaw/pull/181878) fix: prevent queued followup replies after session reset
- [#182032](https://github.com/openclaw/openclaw/pull/182032) fix: preserve updates after read-only SQLite probes
- [#182055](https://github.com/openclaw/openclaw/pull/182055) fix(update): release owned agent-database holders before package Doctor
- [#182026](https://github.com/openclaw/openclaw/pull/182026) refactor: keep single-consumer internals with their owners
- [#182035](https://github.com/openclaw/openclaw/pull/182035) perf(doctor): compute runtime tool schemas once per effective tool set
- [#182031](https://github.com/openclaw/openclaw/pull/182031) fix(gateway): reclaim dead legacy locks without a process namespace
- [#182038](https://github.com/openclaw/openclaw/pull/182038) fix(update): keep upgrade CI compatible with automatic recovery cleanup
- [#181697](https://github.com/openclaw/openclaw/pull/181697) fix: show chat color swatches before hex values
- [#181930](https://github.com/openclaw/openclaw/pull/181930) fix(ui): keep fitting Environment branch names readable
- [#181973](https://github.com/openclaw/openclaw/pull/181973) fix(perf): report natural GC cost for paired RPC measurements
- [#181962](https://github.com/openclaw/openclaw/pull/181962) perf(workers): reduce unused imports and duplicate admission maps
- [#182030](https://github.com/openclaw/openclaw/pull/182030) fix(test): make shard timings work in fresh installs
- [#181843](https://github.com/openclaw/openclaw/pull/181843) fix(ui): improve contrast between the active spinner and pending tasks
- [#182016](https://github.com/openclaw/openclaw/pull/182016) fix: typing filters an open assignment menu
- [#178750](https://github.com/openclaw/openclaw/pull/178750) fix(agents): retain requester selection for returned peer replies
- [#182029](https://github.com/openclaw/openclaw/pull/182029) chore(ui): refresh control ui locales
- [#181892](https://github.com/openclaw/openclaw/pull/181892) fix(ui): make empty session panels consistent on desktop and mobile
- [#182025](https://github.com/openclaw/openclaw/pull/182025) fix(test): make WebKit tests selectable in isolated runs
- [#180789](https://github.com/openclaw/openclaw/pull/180789) fix(plugins): read mixed-case plugin policy from canonical lowercase entries
- [#181897](https://github.com/openclaw/openclaw/pull/181897) fix(ui): stop Subagents placeholders shifting while loading
- [#181898](https://github.com/openclaw/openclaw/pull/181898) fix(ui): keep Processes loading placeholders aligned
- [#181937](https://github.com/openclaw/openclaw/pull/181937) fix: managed files open as links instead of previews
- [#180219](https://github.com/openclaw/openclaw/pull/180219) fix(release): show Pacific time in FRV progress
- [#182015](https://github.com/openclaw/openclaw/pull/182015) fix(ui): hide unrelated sessions from Involving me
- [#181899](https://github.com/openclaw/openclaw/pull/181899) fix(ui): keep Side chat placeholders aligned during hydration
- [#182017](https://github.com/openclaw/openclaw/pull/182017) chore(ui): refresh control ui locales
- [#182007](https://github.com/openclaw/openclaw/pull/182007) fix(gateway): keep public reads available during session updates
- [#181900](https://github.com/openclaw/openclaw/pull/181900) fix(ui): avoid a duplicate toolbar while Browser loads
- [#181868](https://github.com/openclaw/openclaw/pull/181868) perf(ui): defer optional root English copy
- [#181721](https://github.com/openclaw/openclaw/pull/181721) fix: keep restored sessions unpinned unless archive is undone
- [#181985](https://github.com/openclaw/openclaw/pull/181985) refactor: localize private plugin parameter annotations
- [#181941](https://github.com/openclaw/openclaw/pull/181941) fix(doctor): bound the state content-version wait and restart the Gateway Doctor stopped
- [#181943](https://github.com/openclaw/openclaw/pull/181943) fix: keep dynamic Knip roots out of unused-file reports
- [#181895](https://github.com/openclaw/openclaw/pull/181895) fix(codex): queue inference roots at capacity instead of failing turns
- [#181903](https://github.com/openclaw/openclaw/pull/181903) fix: open generated images directly from Outputs
- [#181676](https://github.com/openclaw/openclaw/pull/181676) fix(agents): creating an agent fails with UNAVAILABLE on PostgreSQL state
- [#182008](https://github.com/openclaw/openclaw/pull/182008) fix(database): rebuild memory indexes before agent ports return
- [#182013](https://github.com/openclaw/openclaw/pull/182013) fix(pr): surface review workspace paths before setup
- [#178955](https://github.com/openclaw/openclaw/pull/178955) fix(claude-cli): subagent completions reset the Claude session and lose context
- [#181836](https://github.com/openclaw/openclaw/pull/181836) fix(ui): tone down Markdown table action icons
- [#182012](https://github.com/openclaw/openclaw/pull/182012) fix: recognize retained updater exports in dead-code analysis
- [#182009](https://github.com/openclaw/openclaw/pull/182009) fix: restore subagent benchmark config loading
- [#181979](https://github.com/openclaw/openclaw/pull/181979) ci: qualify PostgreSQL 17 daily on main
- [#181844](https://github.com/openclaw/openclaw/pull/181844) fix(ui): keep completed work duration after later run updates
- [#180788](https://github.com/openclaw/openclaw/pull/180788) feat(providers): add Requesty provider
- [#182004](https://github.com/openclaw/openclaw/pull/182004) fix(gateway): add restart guidance to replayed settle wakes
- [#181987](https://github.com/openclaw/openclaw/pull/181987) refactor: consolidate measured error and plugin clone owners
- [#181953](https://github.com/openclaw/openclaw/pull/181953) fix(webchat): acknowledge pending input before steering admission
- [#181863](https://github.com/openclaw/openclaw/pull/181863) fix: MCP relay runs abort after submission succeeds
- [#181861](https://github.com/openclaw/openclaw/pull/181861) fix(oc-path): find misses children of quoted array indexes
- [#182003](https://github.com/openclaw/openclaw/pull/182003) improve: make split panes easier to close
- [#181983](https://github.com/openclaw/openclaw/pull/181983) fix(gateway): skip install discovery at startup when update checks are off
- [#181885](https://github.com/openclaw/openclaw/pull/181885) fix(release): pin patched Node Docker bases on extended-stable
- [#181848](https://github.com/openclaw/openclaw/pull/181848) feat(ui): dismiss completed processes from Details
- [#181969](https://github.com/openclaw/openclaw/pull/181969) perf(media): remove redundant upload collision check
- [#181971](https://github.com/openclaw/openclaw/pull/181971) refactor: localize single-use erased annotations
- [#181992](https://github.com/openclaw/openclaw/pull/181992) fix(agents): release restart-recovery fences for killed runs
- [#181989](https://github.com/openclaw/openclaw/pull/181989) chore(ui): retain evidence for descendant PR hydration failures
- [#181864](https://github.com/openclaw/openclaw/pull/181864) fix: avoid false startup status during observed chat progress
- [#181934](https://github.com/openclaw/openclaw/pull/181934) fix(ui): keep Details stable while sections load
- [#181855](https://github.com/openclaw/openclaw/pull/181855) fix: keep PR publication progress accurate and rows stable
- [#181915](https://github.com/openclaw/openclaw/pull/181915) refactor(ui): remove obsolete Details and attachment code
- [#181944](https://github.com/openclaw/openclaw/pull/181944) perf(gateway): move preference and cookie snapshot flushes off main
- [#179062](https://github.com/openclaw/openclaw/pull/179062) feat(cron): give scheduled runs their parent conversation's memory audience
- [#181890](https://github.com/openclaw/openclaw/pull/181890) perf(gateway): retain task PR lineage across row updates
- [#181970](https://github.com/openclaw/openclaw/pull/181970) fix(control-ui): hide features unavailable to limited operators
- [#181879](https://github.com/openclaw/openclaw/pull/181879) feat(learn): /learn can save lessons to the selected memory plugin
- [#181794](https://github.com/openclaw/openclaw/pull/181794) fix(memory-wiki): percent-encoded Markdown links are reported as broken and get no backlinks
- [#181975](https://github.com/openclaw/openclaw/pull/181975) refactor: remove stale infra error forwarder
- [#181986](https://github.com/openclaw/openclaw/pull/181986) chore(ui): refresh control ui locales
- [#181978](https://github.com/openclaw/openclaw/pull/181978) fix: model documented async-context probe in dead-code scans
- [#181948](https://github.com/openclaw/openclaw/pull/181948) perf(workspace): reuse admitted child directory membership
- [#181894](https://github.com/openclaw/openclaw/pull/181894) fix(github): keep uncaptured publication failures readable
- [#181195](https://github.com/openclaw/openclaw/pull/181195) feat(update): show recovery disk use and retire selected untracked copies
- [#181025](https://github.com/openclaw/openclaw/pull/181025) fix(doctor): reuse verified captures across healthy repair runs
- [#181873](https://github.com/openclaw/openclaw/pull/181873) refactor: fold single-consumer parsers and private frames
- [#181847](https://github.com/openclaw/openclaw/pull/181847) refactor: trim private bundled plugin overrides
- [#181850](https://github.com/openclaw/openclaw/pull/181850) fix: dependency check fails on session-row metrics
- [#181838](https://github.com/openclaw/openclaw/pull/181838) refactor: localize single-consumer contract owners
- [#181961](https://github.com/openclaw/openclaw/pull/181961) perf(memory): avoid duplicate cosine evaluation in PostgreSQL search
- [#181688](https://github.com/openclaw/openclaw/pull/181688) fix: confirm objective replacement when a session already has a goal
- [#181960](https://github.com/openclaw/openclaw/pull/181960) perf(sqlite): batch database page-cache progress
- [#181964](https://github.com/openclaw/openclaw/pull/181964) fix: restore Doctor deletion recovery CI coverage
- [#181902](https://github.com/openclaw/openclaw/pull/181902) perf(gateway): avoid reclassifying prepared session rows
- [#181957](https://github.com/openclaw/openclaw/pull/181957) perf(memory): batch PostgreSQL full-index publication
- [#181692](https://github.com/openclaw/openclaw/pull/181692) fix: streamed replies no longer re-run the runtime-context scrub per delta
- [#181947](https://github.com/openclaw/openclaw/pull/181947) refactor: localize single-consumer read rendering and plugin annotations
- [#181768](https://github.com/openclaw/openclaw/pull/181768) fix: human messages queue behind runs with older recovery claims
- [#181033](https://github.com/openclaw/openclaw/pull/181033) fix: automatically retire old recovery copies after successful updates
- [#181830](https://github.com/openclaw/openclaw/pull/181830) fix: Skill workshop reader stays short as the skill list grows
- [#181887](https://github.com/openclaw/openclaw/pull/181887) perf(github): overlap pull request comment reads
- [#181079](https://github.com/openclaw/openclaw/pull/181079) docs: document tested video preparation paths and compatibility gaps
- [#181932](https://github.com/openclaw/openclaw/pull/181932) refactor: localize single-consumer preparation and projection frames
- [#181685](https://github.com/openclaw/openclaw/pull/181685) feat(models): expose canonical model family in models.list and the requester catalog
- [#181801](https://github.com/openclaw/openclaw/pull/181801) fix: resume stopped conversations with terminal recovery residue
- [#181931](https://github.com/openclaw/openclaw/pull/181931) fix(database): port accepts stores that have not used first-use columns
- [#181936](https://github.com/openclaw/openclaw/pull/181936) perf(transcripts): avoid retaining provider transports in history workers
- [#181938](https://github.com/openclaw/openclaw/pull/181938) refactor: reuse policy preparation and Gateway response owners
- [#181933](https://github.com/openclaw/openclaw/pull/181933) fix(subagents): parent turns never settle after an inline child reply
- [#181918](https://github.com/openclaw/openclaw/pull/181918) perf(sessions): reuse checkout facts in uncommitted diffs
- [#181785](https://github.com/openclaw/openclaw/pull/181785) fix: exclude zero-scale hidden text from web fetch
- [#181882](https://github.com/openclaw/openclaw/pull/181882) fix(database): port honors retained tables and the configured schema prefix
- [#181757](https://github.com/openclaw/openclaw/pull/181757) fix(agents): retain fresh plugin context during model fallback
- [#181923](https://github.com/openclaw/openclaw/pull/181923) fix(kimi): give Kimi K3.1 Pro the K3 thinking and video controls
- [#181758](https://github.com/openclaw/openclaw/pull/181758) fix(policy): emit JSON for command-owned CLI failures
- [#181896](https://github.com/openclaw/openclaw/pull/181896) test(perf): measure concurrent chat acknowledgement tails
- [#181117](https://github.com/openclaw/openclaw/pull/181117) fix(sessions): parent follow-ups fail after native child runs age out
- [#181916](https://github.com/openclaw/openclaw/pull/181916) fix(cron): Discord-DM automations lose owner access even while their creator is an owner
- [#181929](https://github.com/openclaw/openclaw/pull/181929) fix(perf): keep team boot fixture at 44 plugins
- [#181928](https://github.com/openclaw/openclaw/pull/181928) perf(fs): avoid synchronous durability waits for scratch and artifact writes
- [#181901](https://github.com/openclaw/openclaw/pull/181901) fix(agents): resume dashboard children through session recovery
- [#181824](https://github.com/openclaw/openclaw/pull/181824) fix: cloud workers fail to bootstrap from private QA builds
- [#181806](https://github.com/openclaw/openclaw/pull/181806) fix(agent-core): build package declarations without Promise.withResolvers
- [#181790](https://github.com/openclaw/openclaw/pull/181790) refactor: fold single-consumer internal operations into owners
- [#181769](https://github.com/openclaw/openclaw/pull/181769) refactor: fold single-consumer internal owners
- [#181925](https://github.com/openclaw/openclaw/pull/181925) fix: align runtime-plan auth type visibility
- [#181860](https://github.com/openclaw/openclaw/pull/181860) perf(memory): speed up PostgreSQL index publication
- [#181917](https://github.com/openclaw/openclaw/pull/181917) refactor: consolidate single-consumer reply and chat owners
- [#181906](https://github.com/openclaw/openclaw/pull/181906) fix: recover from update stat timeouts and retain failure targets
- [#181919](https://github.com/openclaw/openclaw/pull/181919) fix(ui): keep swapped chat within its side panel
- [#181891](https://github.com/openclaw/openclaw/pull/181891) perf(memory): narrow workspace file worker imports
- [#181880](https://github.com/openclaw/openclaw/pull/181880) refactor(plugins): consolidate independent clone owners
- [#181905](https://github.com/openclaw/openclaw/pull/181905) refactor: keep model list catalog source private
- [#170071](https://github.com/openclaw/openclaw/pull/170071) feat: choose which tools are deferred behind Tool Search
- [#181856](https://github.com/openclaw/openclaw/pull/181856) refactor(ui): remove ineffective incremental Markdown pipeline
- [#181780](https://github.com/openclaw/openclaw/pull/181780) perf(infra): consolidate per-turn async context stores
- [#181872](https://github.com/openclaw/openclaw/pull/181872) chore(deps): update fs-safe to 0.26.11
- [#181871](https://github.com/openclaw/openclaw/pull/181871) fix(agents): recover accepted children as interrupted after restart
- [#181869](https://github.com/openclaw/openclaw/pull/181869) fix: avoid reopening agent databases during startup
- [#181851](https://github.com/openclaw/openclaw/pull/181851) refactor: retire unused private core inputs
- [#181475](https://github.com/openclaw/openclaw/pull/181475) fix(codex): Stop succeeds after parent thread reuse
- [#181849](https://github.com/openclaw/openclaw/pull/181849) refactor: keep one-use callbacks with their owners
- [#181756](https://github.com/openclaw/openclaw/pull/181756) perf(ui): reduce Chat and New Session boot imports
- [#181862](https://github.com/openclaw/openclaw/pull/181862) fix(ui): keep plugin navigation message type private
- [#181870](https://github.com/openclaw/openclaw/pull/181870) fix(release): backport terminal recovery repair to 2026.9.33
- [#181503](https://github.com/openclaw/openclaw/pull/181503) fix(update): backport safe recovery completion
- [#181866](https://github.com/openclaw/openclaw/pull/181866) fix(release): backport terminal recovery repair to 2026.10.10
- [#181840](https://github.com/openclaw/openclaw/pull/181840) refactor: consolidate measured CLI, session, and channel clones
- [#181427](https://github.com/openclaw/openclaw/pull/181427) fix(release): backport retrospective batch 4 to 2026.9.33
- [#181425](https://github.com/openclaw/openclaw/pull/181425) fix(release): backport retrospective batch 4 to 2026.10.10
- [#181426](https://github.com/openclaw/openclaw/pull/181426) fix(release): backport retrospective batch 4 to 2026.10.6
- [#181867](https://github.com/openclaw/openclaw/pull/181867) fix(release): backport terminal recovery repair to 2026.10.7
- [#180289](https://github.com/openclaw/openclaw/pull/180289) fix(release): preserve interrupted harness work on 2026.9.33
- [#180270](https://github.com/openclaw/openclaw/pull/180270) fix(runtime): backport harness remediations to 2026.10.10
- [#181854](https://github.com/openclaw/openclaw/pull/181854) chore(catalog): recommend Kimi K3.1 Pro ahead of Kimi K3
- [#181487](https://github.com/openclaw/openclaw/pull/181487) fix(release): repair stable validation gates
- [#180158](https://github.com/openclaw/openclaw/pull/180158) fix(release): backport retrospective batch 2 to 2026.10.6
- [#180157](https://github.com/openclaw/openclaw/pull/180157) fix(release): backport retrospective batch 2 to 2026.10.10
- [#180159](https://github.com/openclaw/openclaw/pull/180159) fix(release): backport retrospective tooling to 2026.9.33
- [#181808](https://github.com/openclaw/openclaw/pull/181808) perf(subagents): avoid repeated topology and settled maintenance scans
- [#181842](https://github.com/openclaw/openclaw/pull/181842) fix(doctor): treat a heartbeat tasks: line without entries as checklist text
- [#181845](https://github.com/openclaw/openclaw/pull/181845) perf(doctor): resolve memory-search plugins once per plugin set, not per agent
- [#181815](https://github.com/openclaw/openclaw/pull/181815) perf(mentions): reduce allocation on Inbox refreshes
- [#181819](https://github.com/openclaw/openclaw/pull/181819) perf(sessions): fuse PostgreSQL projection and window writes
- [#181846](https://github.com/openclaw/openclaw/pull/181846) fix: recognize documented performance command roots
- [#181754](https://github.com/openclaw/openclaw/pull/181754) refactor: consolidate core and Gateway clone owners
- [#181745](https://github.com/openclaw/openclaw/pull/181745) fix(doctor): keep migrated heartbeat tasks silent
- [#181735](https://github.com/openclaw/openclaw/pull/181735) fix(ui): slash command clicks lost during catalog refresh
- [#181661](https://github.com/openclaw/openclaw/pull/181661) fix(database): prevent stuck chats after connection loss
- [#181841](https://github.com/openclaw/openclaw/pull/181841) fix: remove redundant heading from command palette attachments
- [#181837](https://github.com/openclaw/openclaw/pull/181837) fix(postgres): recover startup reads after schema publication
- [#181834](https://github.com/openclaw/openclaw/pull/181834) fix: avoid fleet-wide usage refreshes during agent recovery
- [#181202](https://github.com/openclaw/openclaw/pull/181202) fix(crabbox): shorten new Windows worker workspace paths
- [#181828](https://github.com/openclaw/openclaw/pull/181828) perf(ui): reduce repeated Markdown work while streaming
- [#181832](https://github.com/openclaw/openclaw/pull/181832) test: pin only the audit-ledger tail of the schema migration preview
- [#181800](https://github.com/openclaw/openclaw/pull/181800) fix(agents): mid-turn context assembly overflows precheck when the engine fills its budget
- [#181782](https://github.com/openclaw/openclaw/pull/181782) perf(gateway): reduce duplicate profile authority checks
- [#181814](https://github.com/openclaw/openclaw/pull/181814) refactor: localize single-consumer owner frames
- [#181829](https://github.com/openclaw/openclaw/pull/181829) fix: wait for profile consent action readiness
- [#181821](https://github.com/openclaw/openclaw/pull/181821) fix: keep inline-view example checks accurate
- [#181793](https://github.com/openclaw/openclaw/pull/181793) refactor: remove unused private inputs and append result fields
- [#181820](https://github.com/openclaw/openclaw/pull/181820) chore(ui): refresh control ui locales
- [#181802](https://github.com/openclaw/openclaw/pull/181802) fix(cron): finalize retained one-shot jobs on PostgreSQL
- [#181812](https://github.com/openclaw/openclaw/pull/181812) fix(agents): preserve inherited auth owner during turns
- [#181787](https://github.com/openclaw/openclaw/pull/181787) refactor: consolidate ranked core clone owners
- [#181804](https://github.com/openclaw/openclaw/pull/181804) fix: recover configured agents after deletion journal loss
- [#181816](https://github.com/openclaw/openclaw/pull/181816) fix: worker recovery fixture blocks healthy Gateway startup
- [#181555](https://github.com/openclaw/openclaw/pull/181555) perf(ui): defer optional feature English copy
- [#180797](https://github.com/openclaw/openclaw/pull/180797) fix(browser): preserve JSON errors for invalid action input
- [#181798](https://github.com/openclaw/openclaw/pull/181798) fix(ui): restore boot stress test after sharing permissions change
- [#181803](https://github.com/openclaw/openclaw/pull/181803) fix(release): bind 2026.10.7 ledger to landed cut
- [#181669](https://github.com/openclaw/openclaw/pull/181669) fix(cron): system-event automations answer from configured fallbacks when the session's pinned model fails
- [#181206](https://github.com/openclaw/openclaw/pull/181206) fix(update): updates refuse with candidate-snapshot-failed after a SQLite tokenizer change
- [#181789](https://github.com/openclaw/openclaw/pull/181789) fix: isolate dispatch delivery controller fixtures
- [#181788](https://github.com/openclaw/openclaw/pull/181788) chore(ui): refresh control ui locales
- [#181771](https://github.com/openclaw/openclaw/pull/181771) perf(plugins): reduce gateway scope frame allocations
- [#181553](https://github.com/openclaw/openclaw/pull/181553) fix: complete 2026.10.7 stable remediation backports
- [#181634](https://github.com/openclaw/openclaw/pull/181634) fix(ui): keep Settings inputs responsive with large configurations
- [#181592](https://github.com/openclaw/openclaw/pull/181592) fix: queued follow-up replies omit automatic speech
- [#181750](https://github.com/openclaw/openclaw/pull/181750) refactor: localize single-consumer helpers and private shapes
- [#181576](https://github.com/openclaw/openclaw/pull/181576) fix(postgres): explain connection loss and canceled queries
- [#179011](https://github.com/openclaw/openclaw/pull/179011) feat(cron): route scheduled child board and widget tools to the parent conversation
- [#181760](https://github.com/openclaw/openclaw/pull/181760) perf: defer directory and adoption key derivation
- [#146018](https://github.com/openclaw/openclaw/pull/146018) fix: activate context engines with distinct plugin and engine IDs
- [#181726](https://github.com/openclaw/openclaw/pull/181726) perf(gateway): reuse session pull-request targets across notifications
- [#181751](https://github.com/openclaw/openclaw/pull/181751) refactor: use canonical environment for explicit lock recovery
- [#175945](https://github.com/openclaw/openclaw/pull/175945) fix(setup): keep first-run model metadata from restricting the picker
- [#181761](https://github.com/openclaw/openclaw/pull/181761) chore(ui): refresh control ui locales
- [#173135](https://github.com/openclaw/openclaw/pull/173135) feat: let plugin tools show native views in chat
- [#181753](https://github.com/openclaw/openclaw/pull/181753) fix: stop managed timeout drain test from hanging
- [#181218](https://github.com/openclaw/openclaw/pull/181218) fix: reveal invalid advanced automation fields
- [#181749](https://github.com/openclaw/openclaw/pull/181749) chore(ui): refresh control ui locales
- [#181712](https://github.com/openclaw/openclaw/pull/181712) perf(ui): rebalance E2E shards with recent CI timings
- [#181724](https://github.com/openclaw/openclaw/pull/181724) perf(ui): reuse slow E2E fixtures and restore shard weights
- [#181732](https://github.com/openclaw/openclaw/pull/181732) perf(gateway): reuse prepared task parents and attribute row selections
- [#181730](https://github.com/openclaw/openclaw/pull/181730) perf(sessions): reuse catalog row selections
- [#181428](https://github.com/openclaw/openclaw/pull/181428) fix: let healthy agents chat during deferred recovery
- [#181734](https://github.com/openclaw/openclaw/pull/181734) refactor: keep single-consumer details with their owners
- [#180136](https://github.com/openclaw/openclaw/pull/180136) fix(ui): show session participation permissions in sharing
- [#181736](https://github.com/openclaw/openclaw/pull/181736) feat(qa): support Telegram Test Server DM topic proofs
- [#181739](https://github.com/openclaw/openclaw/pull/181739) chore(ui): refresh control ui locales
- [#181105](https://github.com/openclaw/openclaw/pull/181105) fix: finish reply recording before resetting sessions
- [#181733](https://github.com/openclaw/openclaw/pull/181733) fix(ui): remove unused thinking level type re-export
- [#181715](https://github.com/openclaw/openclaw/pull/181715) fix(update): avoid staging Git targets that require newer Node
- [#181709](https://github.com/openclaw/openclaw/pull/181709) refactor: consolidate ranked request and UI clone owners
- [#181714](https://github.com/openclaw/openclaw/pull/181714) refactor: narrow private runtime arguments and results
- [#181497](https://github.com/openclaw/openclaw/pull/181497) perf(ui): load sidebar Pages and Roster on demand
- [#181717](https://github.com/openclaw/openclaw/pull/181717) chore: align remaining update recovery expectations
- [#181678](https://github.com/openclaw/openclaw/pull/181678) fix: recover Node from quoted Windows PATH entries
- [#181720](https://github.com/openclaw/openclaw/pull/181720) fix: keep managed commands owned until child close
- [#181702](https://github.com/openclaw/openclaw/pull/181702) refactor: localize single-consumer implementation frames
- [#179997](https://github.com/openclaw/openclaw/pull/179997) fix(mcp): concurrent agents fail tool calls while a shared OAuth credential is leased
- [#181359](https://github.com/openclaw/openclaw/pull/181359) fix(memory): memory tools fail for owner sessions started by sessions_send and cross-agent subagents
- [#180734](https://github.com/openclaw/openclaw/pull/180734) fix: hide inline image controls on mobile
- [#181689](https://github.com/openclaw/openclaw/pull/181689) fix: improve Inbox badge contrast across themes
- [#181699](https://github.com/openclaw/openclaw/pull/181699) fix: retain subagent progress wake after silent settle
- [#181700](https://github.com/openclaw/openclaw/pull/181700) fix: prevent startup races in Gateway plugin tests
- [#181477](https://github.com/openclaw/openclaw/pull/181477) perf(ui): reuse compiled assets in update lifecycle tests
- [#181698](https://github.com/openclaw/openclaw/pull/181698) fix: align Windows triage tests with untouched recovery
- [#166011](https://github.com/openclaw/openclaw/pull/166011) fix(telegram): keep personal topic titles in sync after agent replies
- [#181695](https://github.com/openclaw/openclaw/pull/181695) fix: recover offline state after an update executor dies
- [#181691](https://github.com/openclaw/openclaw/pull/181691) refactor: localize single-consumer runtime details
- [#181681](https://github.com/openclaw/openclaw/pull/181681) refactor: remove unused private helper inputs and results
- [#181654](https://github.com/openclaw/openclaw/pull/181654) fix(reef): share delivery admission and ordering
- [#181693](https://github.com/openclaw/openclaw/pull/181693) fix: stop false dead-code reports for performance scripts
- [#181659](https://github.com/openclaw/openclaw/pull/181659) fix(doctor): keep disabled heartbeats disabled during migration
- [#181690](https://github.com/openclaw/openclaw/pull/181690) refactor: keep Slack reconnect policy private
- [#181047](https://github.com/openclaw/openclaw/pull/181047) improve(ui): download about 3.3% less JavaScript over gzip
- [#181637](https://github.com/openclaw/openclaw/pull/181637) fix: restore iOS screenshot evidence packaging
- [#181671](https://github.com/openclaw/openclaw/pull/181671) refactor: inline single-consumer private frames

#### 🐛 New Issues
- [#181660](https://github.com/openclaw/openclaw/issues/181660) [Bug]: Error: Session read batch cannot reenter an active SQLite writer admission `bug` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬7
- [#181958](https://github.com/openclaw/openclaw/issues/181958) Update failure: package-doctor (2026.10.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬6
- [#181490](https://github.com/openclaw/openclaw/issues/181490) [Bug]: macOS 2026.10.5 to 2026.10.6 update stalls in candidate Doctor with waiting SQLite worker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬6
- [#181432](https://github.com/openclaw/openclaw/issues/181432) [Bug]: Excessive baseline RSS memory (~1.9 GB) and SQLite transaction timeouts in 2026.10.5 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬5
- [#181619](https://github.com/openclaw/openclaw/issues/181619) [Bug] Codex app-server execution-budget timeout regression after 2026.10.5 -> 2026.10.6 upgrade; every primary turn fails and falls back silently `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬5
- [#181770](https://github.com/openclaw/openclaw/issues/181770) [Bug]: Dashboard conversation repeatedly rejects new turns with DispatchSessionRefreshRequiredError on 2026.10.6 `bug` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#181423](https://github.com/openclaw/openclaw/issues/181423) Fresh setup.activate fails on main: plugin source capture collides with its own symlink (creation target already exists) `P1` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬4
- [#181826](https://github.com/openclaw/openclaw/issues/181826) Improve default guidance for discovering masked credential entry `P3` `clawsweeper:needs-live-repro` `impact:security` `issue-rating: 🐚 platinum hermit` 💬3
- [#181952](https://github.com/openclaw/openclaw/issues/181952) [Bug]: restart-recovery fence of a killed run never reaches terminal state — conversation stays blocked (not covered by #181801) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#181459](https://github.com/openclaw/openclaw/issues/181459) [Bug]: 3.5 GB agent DB makes startup a gamble on 2026.10.6 — 18 s open, 4–6 min startup, agent left UNAVAILABLE with 'commit checkpoint expired'; embeddings stored 3× (re: #166634) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#181362](https://github.com/openclaw/openclaw/issues/181362) [Feature]: memory_search per-source weighting — session transcripts still outrank curated memory (re: #147433) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:session-state` 💬3
- [#181365](https://github.com/openclaw/openclaw/issues/181365) [Bug]: macOS 10.6 pending core-update receipt blocks bundled Gateway recovery; Gateway remains on 10.2 `bug` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬3
- [#181884](https://github.com/openclaw/openclaw/issues/181884) Unknown-tool-name failure is kept as the run error after the model recovers via the Tool Search call tool, so a NO_REPLY cron run is reported as failed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#181859](https://github.com/openclaw/openclaw/issues/181859) [Feature]: rebuild memory indexes as part of the agent database port `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#181687](https://github.com/openclaw/openclaw/issues/181687) Gateway 2026.10.3 (macOS, arm64): sustained RSS growth — prepared-model-catalog worker heap never shrinks and worker count creeps from 8 to 18 without idle retirement `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#181956](https://github.com/openclaw/openclaw/issues/181956) [Bug]: system prompt tells the model the owner can send `/update`, also when `commands.text` and `commands.restart` are false `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬2
- [#181940](https://github.com/openclaw/openclaw/issues/181940) Update failure: update-executor-settlement (2026.9.6) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#181710](https://github.com/openclaw/openclaw/issues/181710) Android realtime Talk hangs up when a navigation prompt or notification sound plays `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#181809](https://github.com/openclaw/openclaw/issues/181809) Update failure: node-runtime-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#181799](https://github.com/openclaw/openclaw/issues/181799) main: pnpm build fails in the native declaration step (Promise.withResolvers in agent-core vs ES2023 lib) `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#181765](https://github.com/openclaw/openclaw/issues/181765) [Bug]: agent stores stay held after 2026.10.6 - doctor --fix and update repair both refuse; agents add is a no-op `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#181772](https://github.com/openclaw/openclaw/issues/181772) [Bug]: Control UI drops bounded-context warnings delivered to external chat channels `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#181557](https://github.com/openclaw/openclaw/issues/181557) [Bug]: Auto-TTS (tts.auto: "always") is never applied to queued follow-up replies `bug` `no-stale` `regression` `P2` 💬2
- [#181722](https://github.com/openclaw/openclaw/issues/181722) [Bug]: transcript archive file/row lifecycle is unreconciled — doctor reports "missing canonical transcript archive file(s)" for copies its own retention policy deleted `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#181649](https://github.com/openclaw/openclaw/issues/181649) Post-swap activation stalls on 2026.10.6: publication-complete never advances to complete (RPi 5) `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` `P0` 💬2
- [#181694](https://github.com/openclaw/openclaw/issues/181694) Update failure: invalid-config (2026.10.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#181662](https://github.com/openclaw/openclaw/issues/181662) [Bug]: npm update keeps Gateway stopped ~19 min during activating while host is idle (downtime grows each release) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#181635](https://github.com/openclaw/openclaw/issues/181635) Update failure: global-install-foreign-destination (2026.10.3) `P0` `impact:ux-release-blocker` 💬2
- [#181611](https://github.com/openclaw/openclaw/issues/181611) [Bug]: 2026.10.5 → 2026.10.6 migrates state but leaves systemd Gateway pinned to unsupported Node 24.20.0 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#181630](https://github.com/openclaw/openclaw/issues/181630) Update failure: pnpm-staging-preflight (2026.10.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#181583](https://github.com/openclaw/openclaw/issues/181583) Control UI sidebar: session title collapses to a few characters while trailing controls stay visible `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#181577](https://github.com/openclaw/openclaw/issues/181577) [Windows] package-swap fails with ENOENT on node-pty-darwin-arm64: swap stats platform-specific optionalDependencies that pnpm never installs `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬2
- [#181345](https://github.com/openclaw/openclaw/issues/181345) [Bug]: voice-call realtime consult and response model ignore agents.defaults.model / the call agent's model and fall back to the hard-coded openai/gpt-6-astra `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#181348](https://github.com/openclaw/openclaw/issues/181348) [Bug]: nodes camera list reports "No cameras reported." for the Windows node — CLI reads payload.devices, node returns payload.cameras `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#181539](https://github.com/openclaw/openclaw/issues/181539) Update failure: runtime-artifact-publication (2026.10.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#181413](https://github.com/openclaw/openclaw/issues/181413) Update failure: update (2026.10.6) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#181418](https://github.com/openclaw/openclaw/issues/181418) [Feature]: iOS custom headers should guide Cloudflare Access service tokens and refuse a Client ID typed as a header name `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#181337](https://github.com/openclaw/openclaw/issues/181337) Update failure: requested (2026.10.5) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#181358](https://github.com/openclaw/openclaw/issues/181358) [Feature]: errorPolicy / silentErrorReplies for Slack channel `P3` `impact:ux-friction` 💬2
- [#182077](https://github.com/openclaw/openclaw/issues/182077) [Docs Bug]: Show same-model interactive and background provider routes `clawsweeper:intake:docs` 💬1
- [#181817](https://github.com/openclaw/openclaw/issues/181817) [Feature]: Control UI: persistent default to keep Side chat rail closed across sessions `enhancement` `clawsweeper:intake:feature` 💬1
- [#182071](https://github.com/openclaw/openclaw/issues/182071) Release management needs a shared owner lifecycle and cross-channel coordination mode `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#182043](https://github.com/openclaw/openclaw/issues/182043) [Bug]: Pending subagent completion loses requester source after a Gateway crash `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#182058](https://github.com/openclaw/openclaw/issues/182058) chat.history reports the global verboseDefault instead of the session agent's own verboseDefault `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#182051](https://github.com/openclaw/openclaw/issues/182051) [Bug]: Ollama web search ignores tools.web.search maxResults and timeoutSeconds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#182062](https://github.com/openclaw/openclaw/issues/182062) [Bug]: Requester settlement rejects the same interrupted task after cleanup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#182060](https://github.com/openclaw/openclaw/issues/182060) Restart recovery exhausts SQLite worker heap on large compressed transcripts `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181877](https://github.com/openclaw/openclaw/issues/181877) [Bug]: Unsent queued followup replies can arrive after session reset `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#182042](https://github.com/openclaw/openclaw/issues/182042) [Bug]: Native subagent restart recovery loses the original requester source `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181993](https://github.com/openclaw/openclaw/issues/181993) [Bug]: Windows stale Gateway locks with missing `processNamespace` cannot be auto-reclaimed `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#182028](https://github.com/openclaw/openclaw/issues/182028) [Feature]: Control UI Details panel — show retained session context size `enhancement` `P3` `impact:ux-friction` 💬1
- [#182024](https://github.com/openclaw/openclaw/issues/182024) [Feature]: Plugin reload hands running turns to the new generation at step boundaries `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#181719](https://github.com/openclaw/openclaw/issues/181719) Control UI: unarchiving restores the previous personal session pin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181995](https://github.com/openclaw/openclaw/issues/181995) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#181988](https://github.com/openclaw/openclaw/issues/181988) [Feature]: a switch to disable automatic resumption of an interrupted main-session turn after a restart `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#181982](https://github.com/openclaw/openclaw/issues/181982) [Feature]: a switch to disable stability bundles (`diagnostics.enabled: false` does not) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#181984](https://github.com/openclaw/openclaw/issues/181984) Launch the managed Chrome with an allowlisted environment `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#181981](https://github.com/openclaw/openclaw/issues/181981) Strict user-pinned session (/model -s) disables imageModel fallback, not just reachability fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#181980](https://github.com/openclaw/openclaw/issues/181980) [Bug]: Telegram sticker description makes a separate model call even when the model has vision, and ignores `tools.media.image.enabled` `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#181977](https://github.com/openclaw/openclaw/issues/181977) [Feature]: no outbound fetches from Control UI methods and routes when the Control UI is disabled (GitHub, Gravatar, link previews, Web Push) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#181976](https://github.com/openclaw/openclaw/issues/181976) [Bug]: `session.maintenance.resetArchiveRetention` is silently not applied when cron is disabled `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#181972](https://github.com/openclaw/openclaw/issues/181972) [Feature]: make remote rescue (`/openclaw` from the owner's chat) opt-in, independent of the exec posture `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#181968](https://github.com/openclaw/openclaw/issues/181968) [Bug]: silent local pairing also applies to non-loopback private peers (e.g. through a container bridge), while the docs say direct loopback only `bug` `no-stale` `P3` `clawsweeper:fix-shape-clear` 💬1
- [#181965](https://github.com/openclaw/openclaw/issues/181965) [Bug]: plugins.entries.openai.config.personality "off" is ignored for GPT-5 models on non-OpenAI providers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#181682](https://github.com/openclaw/openclaw/issues/181682) [Bug]: every streamed English reply re-runs the runtime-context scrub per delta (537M characters for 64 KB; 12 s of blocked Gateway CPU at 256 KB) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181963](https://github.com/openclaw/openclaw/issues/181963) [Feature]: configurable retention and a purge command for channel ingress rows, and an info-level line for a blocked sender `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#181955](https://github.com/openclaw/openclaw/issues/181955) [Bug]: Telegram native commands answer senders that dmPolicy rejects ("You are not authorized to use this command.") `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#181954](https://github.com/openclaw/openclaw/issues/181954) [Feature]: decision-model rerank provider for memory_search (and optionally wiki_search) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#181950](https://github.com/openclaw/openclaw/issues/181950) [Bug]: onepassword SecretRef resolver cannot import `openclaw/plugin-sdk` in the official Docker image (ERR_MODULE_NOT_FOUND) `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#181875](https://github.com/openclaw/openclaw/issues/181875) [Bug]: database port refuses upgraded state and agent stores that have not used every first-use column `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181945](https://github.com/openclaw/openclaw/issues/181945) [Bug]: claude-cli: stopping the first turn of a new chat discards its native session, next turn starts without context `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181858](https://github.com/openclaw/openclaw/issues/181858) [Bug]: database port names new PostgreSQL schemas port_<uuid> instead of using the configured schemaPrefix `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181857](https://github.com/openclaw/openclaw/issues/181857) [Bug]: database port refuses shared state that still holds the retained fleet_cells table `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#181926](https://github.com/openclaw/openclaw/issues/181926) [Feature]: jev support with ollama `enhancement` `P3` 💬1
- [#181888](https://github.com/openclaw/openclaw/issues/181888) [Bug]: LM Studio binary reasoning models still receive unsupported reasoning_effort values on the native provider route `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#181886](https://github.com/openclaw/openclaw/issues/181886) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#181881](https://github.com/openclaw/openclaw/issues/181881) Update failure: plugin-target-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#181810](https://github.com/openclaw/openclaw/issues/181810) [Bug]: Heartbeat migration refuses a tasks: line followed by plain bullets, leaving the Gateway unable to start `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181728](https://github.com/openclaw/openclaw/issues/181728) Update failure: package-install-omit-optional (2026.10.4) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#181822](https://github.com/openclaw/openclaw/issues/181822) [Bug]: Codex turns that end with NO_REPLY after tool work always deliver the 'no final summary was produced' fallback `P2` `impact:ux-friction` 💬1
- [#181818](https://github.com/openclaw/openclaw/issues/181818) [Bug]: Windows plugin artifact test fixture fails before capture when joining absolute paths `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181805](https://github.com/openclaw/openclaw/issues/181805) [Bug]: Native Codex loses watchdog protection during host tool calls and output projection `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬1
- [#181797](https://github.com/openclaw/openclaw/issues/181797) Update failure: package-swap (2026.9.7) `P2` `impact:ux-friction` 💬1
- [#181796](https://github.com/openclaw/openclaw/issues/181796) main: 27 dispatch-from-config.delivery.test.ts cases fail with "Physical session already has a different controller owner" (pinned Bun) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#181791](https://github.com/openclaw/openclaw/issues/181791) [Feature]: Durable owner-native execution provenance for safe interruption recovery `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#181668](https://github.com/openclaw/openclaw/issues/181668) [Bug]: Main-session system-event automations answer from configured fallbacks when the session's user-pinned model fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181784](https://github.com/openclaw/openclaw/issues/181784) [Feature]: Reuse verified plugin source captures across Gateway restarts (content-addressed store) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#181783](https://github.com/openclaw/openclaw/issues/181783) Update failure: node-runtime-preflight (2026.9.6) `P2` `impact:ux-friction` 💬1
- [#181778](https://github.com/openclaw/openclaw/issues/181778) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#181774](https://github.com/openclaw/openclaw/issues/181774) [Feature]: Active Memory: make the recall ceiling (MAX_TIMEOUT_MS) configurable and show recall progress while it runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#181764](https://github.com/openclaw/openclaw/issues/181764) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#181729](https://github.com/openclaw/openclaw/issues/181729) [Bug]: Doctor keeps HEARTBEAT_OK in migrated heartbeat task prompts instead of NO_REPLY `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181744](https://github.com/openclaw/openclaw/issues/181744) [Feature] no completion signal for deferred followup turns — channel plugins cannot tell that the framework is still busy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#181743](https://github.com/openclaw/openclaw/issues/181743) [Feature] followup queue "collect" mode groups by sender id — messages from different members of the same group are never merged `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#181738](https://github.com/openclaw/openclaw/issues/181738) [Bug]: Active Memory always skips with policy-disabled when Code Mode catalogs memory tools (Codex runtime) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#181737](https://github.com/openclaw/openclaw/issues/181737) [Bug]: MCP OAuth loopback registration omits application_type=native, rejected by Better Auth `P2` `impact:auth-provider` 💬1
- [#181727](https://github.com/openclaw/openclaw/issues/181727) [Bug]: claude-cli native login: a Claude account switch isn't detected, stale session resumed (empty replies until sessions.reset) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#181725](https://github.com/openclaw/openclaw/issues/181725) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#181696](https://github.com/openclaw/openclaw/issues/181696) [Bug]: a leaked plain-text tool call followed by a paragraph blocks the Gateway for 8.5 s at 32 KB after #175328 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181711](https://github.com/openclaw/openclaw/issues/181711) Group chat history blocks render senders as anonymous "User:" — agent cannot attribute messages across multiple humans `P2` `impact:session-state` 💬1
- [#181703](https://github.com/openclaw/openclaw/issues/181703) delivery: system-internal UUIDs mistaken for platform message IDs cause permanent dead letters on thread reply `P2` `impact:other` 💬1
- [#181704](https://github.com/openclaw/openclaw/issues/181704) [Feature]: Per-agent setting to let agents speak alongside tool calls (for voice clients), also available to plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#181616](https://github.com/openclaw/openclaw/issues/181616) [Bug]: doctor --fix provisions an enabled 30-minute Proactive check for a disabled heartbeat, with a receipt that never completes, so every run fails with "Automation migration is incomplete" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#181686](https://github.com/openclaw/openclaw/issues/181686) [Bug]: Offline models status --probe cannot materialize account-owned SecretRefs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181672](https://github.com/openclaw/openclaw/issues/181672) [Bug]: The owner turn after a subagent completion misses the prompt cache because the completion's user message is never saved `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181677](https://github.com/openclaw/openclaw/issues/181677) [Bug]: Graceful restart retains prior native capture through resumed Codex session `P2` `impact:other` 💬1
- [#181670](https://github.com/openclaw/openclaw/issues/181670) Investigate absent-store probing in async cross-agent session-ID lookup `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#181643](https://github.com/openclaw/openclaw/issues/181643) [Bug]: Agent-deletion lease admission never finishes when the worker operation settlement rejects (handled only on fulfil) `bug` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:not-repro-on-main` 💬1
- [#181642](https://github.com/openclaw/openclaw/issues/181642) [Bug]: Null-body guarded responses fire-and-forget the release callback, turning cleanup failures into unhandled rejections `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#181640](https://github.com/openclaw/openclaw/issues/181640) [Bug]: Context-engine assembly failures are swallowed silently and retried on every tool-loop iteration `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#181641](https://github.com/openclaw/openclaw/issues/181641) Automations created from a Feishu direct-chat session fail all scheduled executions: "Scheduled account 'main' is unavailable" `P1` `impact:other` 💬1
- [#181550](https://github.com/openclaw/openclaw/issues/181550) Update failure: package-install-omit-optional (2026.10.5) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#181479](https://github.com/openclaw/openclaw/issues/181479) macOS/Windows never reclaim tokenless plugin source captures — disk grows with no supported remedy `clawsweeper:intake:feature` 💬1
- [#181379](https://github.com/openclaw/openclaw/issues/181379) Memory Wiki reports valid titled and parenthesized Markdown links as broken `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181579](https://github.com/openclaw/openclaw/issues/181579) Improve progress narration grounding when follow-ups reference earlier conversation `P3` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#181595](https://github.com/openclaw/openclaw/issues/181595) iMessage: agent replies echo back in self-chat (direct-chat echo lookup misses the chat_id scope replies are filed under) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181590](https://github.com/openclaw/openclaw/issues/181590) [Feature]: Control UI: let plugins extend the New session page (affordances, draft, starting parameters) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#181580](https://github.com/openclaw/openclaw/issues/181580) [Bug]: Codex harness: a subagent completion turn replaces the owner's stored Codex thread, so each completion creates two fresh threads and loses the prompt cache `P2` `impact:session-state` `clawsweeper:bulk-filed` 💬1
- [#181575](https://github.com/openclaw/openclaw/issues/181575) Skill Workshop background review fails with context overflow (mid-turn precheck) without attempting compaction `P2` `impact:other` 💬1
- [#181559](https://github.com/openclaw/openclaw/issues/181559) claude-cli compaction event: include Claude Code's pre/post token counts `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#181548](https://github.com/openclaw/openclaw/issues/181548) [Bug]: Ollama convertToOllamaMessages leaves provider-prefixed tool_name on tool results `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181538](https://github.com/openclaw/openclaw/issues/181538) Update failure: node-runtime-preflight (2026.9.5) `P2` `impact:ux-friction` 💬1
- [#181537](https://github.com/openclaw/openclaw/issues/181537) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#181533](https://github.com/openclaw/openclaw/issues/181533) Heartbeat-declaration automation jobs cannot receive delivery config via CLI (closed validation loop), contradicting config docs `P2` `impact:message-loss` 💬1
- [#181525](https://github.com/openclaw/openclaw/issues/181525) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#181524](https://github.com/openclaw/openclaw/issues/181524) [Bug]: Secret egress proxy closes Node fetch CONNECT tunnels to loopback HTTP (UND_ERR_SOCKET) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#181507](https://github.com/openclaw/openclaw/issues/181507) [Bug]: every word-boundary streamed delta re-parses the whole answer (88M characters for one 46 KB reply; 31 s of blocked Gateway CPU at 256 KB) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181518](https://github.com/openclaw/openclaw/issues/181518) [Bug]: SiliconFlow "length of prompt_tokens (N) must be less than max_seq_len (M)" overflow is classified as format and skips compaction recovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181520](https://github.com/openclaw/openclaw/issues/181520) [Bug]: vLLM "decoder prompt … is longer than the maximum model length" overflow is classified as format and skips compaction recovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181516](https://github.com/openclaw/openclaw/issues/181516) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#181514](https://github.com/openclaw/openclaw/issues/181514) [Docs Bug]: Android docs omit the session Dashboard screen (chat ⋮ → Dashboard) `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181502](https://github.com/openclaw/openclaw/issues/181502) [Security] Google OAuth client secrets (`GOCSPX-…`) are not redacted from model-visible tool output `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#181493](https://github.com/openclaw/openclaw/issues/181493) [Bug]: a streamed answer with a code or JSON block plus a Markdown list blocks the Gateway for 7-72 s at 32 KB (list checkpoints never settle) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181495](https://github.com/openclaw/openclaw/issues/181495) Update failure: package-install-omit-optional (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#181488](https://github.com/openclaw/openclaw/issues/181488) [Bug]: doctor --fix refuses to repair $include-owned config ("would flatten $include-owned config at agents") instead of editing the included file `P2` `impact:ux-friction` 💬1
- [#181489](https://github.com/openclaw/openclaw/issues/181489) Let an MCP server be required: retry its start within a run attempt instead of running without its tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#181480](https://github.com/openclaw/openclaw/issues/181480) main: three run.operator-continuation restart cases fail on Linux amd64 (restartRecoveryDeliverySourceRunId) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#181435](https://github.com/openclaw/openclaw/issues/181435) Session diagnostics test includes slow fixture warm-up in warning assertions `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#181467](https://github.com/openclaw/openclaw/issues/181467) [Bug]: xAI "Internal error during token generation" mid-stream still ends the reply with no retry or fallback (embedded run path, 2026.10.10-beta.2) 💬1
- [#181353](https://github.com/openclaw/openclaw/issues/181353) [Bug]: OpenAI OAuth blocked by stale catalog rows `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181445](https://github.com/openclaw/openclaw/issues/181445) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#181442](https://github.com/openclaw/openclaw/issues/181442) [Bug]: structured_output returns the previous attempt's stored error without validating once the retry budget is spent (valid payload reported rejected, collector failed) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181412](https://github.com/openclaw/openclaw/issues/181412) [Bug]: provider setup text replies lose keyboard focus after validation errors `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181429](https://github.com/openclaw/openclaw/issues/181429) [Bug]: Session Details values are clipped with the full text only in a mouse-only tooltip `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181361](https://github.com/openclaw/openclaw/issues/181361) [Bug]: Doctor legacy usage-cache cleanup requests a runtime DB owner during maintenance, warning on clean stores `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181416](https://github.com/openclaw/openclaw/issues/181416) docs(cron): no note that messages sent to an isolated job's session do not reach later runs `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#181409](https://github.com/openclaw/openclaw/issues/181409) [Bug] Intentional CLI self-disable aborts agentTurn and emits execution-failure alert, losing blocker summary `P2` `impact:ux-friction` 💬1
- [#181280](https://github.com/openclaw/openclaw/issues/181280) Feature: `openclaw sessions storage status|run` (expose existing cold-transcript Gateway RPCs) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#181385](https://github.com/openclaw/openclaw/issues/181385) [Bug]: Terminal dynamic-tool release cancels accepted, unconsumed Codex steering `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#181370](https://github.com/openclaw/openclaw/issues/181370) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#181368](https://github.com/openclaw/openclaw/issues/181368) Feature: openclaw gateway lanes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#182054](https://github.com/openclaw/openclaw/issues/182054) fix(update): `update repair` refused inside the Gateway process tree is saved as a generic `repair-failed` run

#### 🔒 Closed Issues
- [#180690](https://github.com/openclaw/openclaw/issues/180690) doctor --fix on an ~800-agent state: heap OOM at 6 GB in the contributions phase; three passes and ~110 minutes from v28 to v31
- [#158099](https://github.com/openclaw/openclaw/issues/158099) [Bug]: Gateway start runs `git rev-parse` and `npm root -g` unconditionally; `update.checkOnStart: false` does not stop it (macOS: triggers the Command Line Tools install dialog)
- [#80667](https://github.com/openclaw/openclaw/issues/80667) trajectory.jsonl never written for pure claude-cli sessions (recordEvent only wired into selection-* dispatch path)
- [#166752](https://github.com/openclaw/openclaw/issues/166752) [Bug]: claude-cli agents lose their shell on 2026.10.1 and 2026.10.2 when the tool policy doesn't grant exec
- [#180688](https://github.com/openclaw/openclaw/issues/180688) Update failure: pnpm-staging-preflight (2026.10.3)
- [#141249](https://github.com/openclaw/openclaw/issues/141249) [Bug]: 2026.9.2 regresses Skill Workshop Experience Review foreground prompt-cache reuse from #130013
- [#163611](https://github.com/openclaw/openclaw/issues/163611) Control UI memory overview: embeddings stuck on "Not checked yet" (doctor.memory.status probes only with probe:true, result discarded per request)
- [#149550](https://github.com/openclaw/openclaw/issues/149550) sessions_spawn: agentId is advertised as an unconstrained string but only main is accepted
- [#181770](https://github.com/openclaw/openclaw/issues/181770) [Bug]: Dashboard conversation repeatedly rejects new turns with DispatchSessionRefreshRequiredError on 2026.10.6
- [#105438](https://github.com/openclaw/openclaw/issues/105438) [Bug] Incomplete CSS transform scale regex validation in isStyleHidden
- [#128395](https://github.com/openclaw/openclaw/issues/128395) claude-cli backend: per-agent tools.deny never reaches --disallowedTools, so every agent can call every mcp.servers entry
- [#181423](https://github.com/openclaw/openclaw/issues/181423) Fresh setup.activate fails on main: plugin source capture collides with its own symlink (creation target already exists)
- [#181952](https://github.com/openclaw/openclaw/issues/181952) [Bug]: restart-recovery fence of a killed run never reaches terminal state — conversation stays blocked (not covered by #181801)
- [#168580](https://github.com/openclaw/openclaw/issues/168580) [Bug]: ElevenLabs batch STT ignores providerOptions.elevenlabs (no_verbatim, tag_audio_events cannot be set)
- [#135142](https://github.com/openclaw/openclaw/issues/135142) web.login.start accepts a missing accountId: QR pairing writes into the default account and stops every other account's listener
- [#177440](https://github.com/openclaw/openclaw/issues/177440) gateway bootstrap failures print no diagnostic — 'The CLI command failed.' hides the exception during restart loops
- [#152267](https://github.com/openclaw/openclaw/issues/152267) [Bug]: `openclaw.cache-ttl` transcript marker is appended as a full snapshot on every change and is 52% of transcript bytes in the agent SQLite store
- [#181859](https://github.com/openclaw/openclaw/issues/181859) [Feature]: rebuild memory indexes as part of the agent database port
- [#178953](https://github.com/openclaw/openclaw/issues/178953) [Bug]: claude-cli sessions reset with reason=prompt-tools on every subagent completion, losing context
- [#181940](https://github.com/openclaw/openclaw/issues/181940) Update failure: update-executor-settlement (2026.9.6)
- [#181809](https://github.com/openclaw/openclaw/issues/181809) Update failure: node-runtime-preflight (2026.9.4)
- [#181799](https://github.com/openclaw/openclaw/issues/181799) main: pnpm build fails in the native declaration step (Promise.withResolvers in agent-core vs ES2023 lib)
- [#181765](https://github.com/openclaw/openclaw/issues/181765) [Bug]: agent stores stay held after 2026.10.6 - doctor --fix and update repair both refuse; agents add is a no-op
- [#181557](https://github.com/openclaw/openclaw/issues/181557) [Bug]: Auto-TTS (tts.auto: "always") is never applied to queued follow-up replies
- [#181649](https://github.com/openclaw/openclaw/issues/181649) Post-swap activation stalls on 2026.10.6: publication-complete never advances to complete (RPi 5)
- [#181635](https://github.com/openclaw/openclaw/issues/181635) Update failure: global-install-foreign-destination (2026.10.3)
- [#181611](https://github.com/openclaw/openclaw/issues/181611) [Bug]: 2026.10.5 → 2026.10.6 migrates state but leaves systemd Gateway pinned to unsupported Node 24.20.0
- [#181630](https://github.com/openclaw/openclaw/issues/181630) Update failure: pnpm-staging-preflight (2026.10.5)
- [#121217](https://github.com/openclaw/openclaw/issues/121217) trajectory context.compiled truncates prompt/system prompt at 32,768 chars with no way to see the full text
- [#181577](https://github.com/openclaw/openclaw/issues/181577) [Windows] package-swap fails with ENOENT on node-pty-darwin-arm64: swap stats platform-specific optionalDependencies that pnpm never installs
- [#127579](https://github.com/openclaw/openclaw/issues/127579) Approval page visibility refreshes fan out unretired approval.get requests
- [#180514](https://github.com/openclaw/openclaw/issues/180514) Compaction always times out on long-lived sessions: reset keeps sessionId and compaction hydrates all pre-reset events under fixed 60s budget
- [#181358](https://github.com/openclaw/openclaw/issues/181358) [Feature]: errorPolicy / silentErrorReplies for Slack channel
- [#174053](https://github.com/openclaw/openclaw/issues/174053) Codex legacy cleanup resets complete self-origin automatic model selections
- [#181877](https://github.com/openclaw/openclaw/issues/181877) [Bug]: Unsent queued followup replies can arrive after session reset
- [#181993](https://github.com/openclaw/openclaw/issues/181993) [Bug]: Windows stale Gateway locks with missing `processNamespace` cannot be auto-reclaimed
- [#182028](https://github.com/openclaw/openclaw/issues/182028) [Feature]: Control UI Details panel — show retained session context size
- [#181719](https://github.com/openclaw/openclaw/issues/181719) Control UI: unarchiving restores the previous personal session pin
- [#181995](https://github.com/openclaw/openclaw/issues/181995) Update failure: package-install-omit-optional (2026.10.5)
- [#181682](https://github.com/openclaw/openclaw/issues/181682) [Bug]: every streamed English reply re-runs the runtime-context scrub per delta (537M characters for 64 KB; 12 s of blocked Gateway CPU at 256 KB)
- [#181875](https://github.com/openclaw/openclaw/issues/181875) [Bug]: database port refuses upgraded state and agent stores that have not used every first-use column
- [#181858](https://github.com/openclaw/openclaw/issues/181858) [Bug]: database port names new PostgreSQL schemas port_<uuid> instead of using the configured schemaPrefix
- [#181857](https://github.com/openclaw/openclaw/issues/181857) [Bug]: database port refuses shared state that still holds the retained fleet_cells table
- [#181926](https://github.com/openclaw/openclaw/issues/181926) [Feature]: jev support with ollama
- [#181886](https://github.com/openclaw/openclaw/issues/181886) Update failure: package-install-omit-optional (2026.10.5)
- [#181881](https://github.com/openclaw/openclaw/issues/181881) Update failure: plugin-target-unavailable (2026.9.4)
- [#181810](https://github.com/openclaw/openclaw/issues/181810) [Bug]: Heartbeat migration refuses a tasks: line followed by plain bullets, leaving the Gateway unable to start
- [#181728](https://github.com/openclaw/openclaw/issues/181728) Update failure: package-install-omit-optional (2026.10.4)
- [#181822](https://github.com/openclaw/openclaw/issues/181822) [Bug]: Codex turns that end with NO_REPLY after tool work always deliver the 'no final summary was produced' fallback
- [#181797](https://github.com/openclaw/openclaw/issues/181797) Update failure: package-swap (2026.9.7)
- [#127341](https://github.com/openclaw/openclaw/issues/127341) [Bug]: Advanced Config clones and serializes the full document on every keystroke
- [#181668](https://github.com/openclaw/openclaw/issues/181668) [Bug]: Main-session system-event automations answer from configured fallbacks when the session's user-pinned model fails
- [#181783](https://github.com/openclaw/openclaw/issues/181783) Update failure: node-runtime-preflight (2026.9.6)
- [#181778](https://github.com/openclaw/openclaw/issues/181778) Update failure: package-install-omit-optional (2026.10.5)
- [#175533](https://github.com/openclaw/openclaw/issues/175533) [Bug]: Fresh macOS DMG install restricts OpenAI model picker to one model after API-key onboarding
- [#181764](https://github.com/openclaw/openclaw/issues/181764) Update failure: package-install-omit-optional (2026.10.5)
- [#181729](https://github.com/openclaw/openclaw/issues/181729) [Bug]: Doctor keeps HEARTBEAT_OK in migrated heartbeat task prompts instead of NO_REPLY
- [#181737](https://github.com/openclaw/openclaw/issues/181737) [Bug]: MCP OAuth loopback registration omits application_type=native, rejected by Better Auth
- [#181725](https://github.com/openclaw/openclaw/issues/181725) Update failure: package-install-omit-optional (2026.10.5)
- [#181711](https://github.com/openclaw/openclaw/issues/181711) Group chat history blocks render senders as anonymous "User:" — agent cannot attribute messages across multiple humans
- [#181703](https://github.com/openclaw/openclaw/issues/181703) delivery: system-internal UUIDs mistaken for platform message IDs cause permanent dead letters on thread reply
- [#181616](https://github.com/openclaw/openclaw/issues/181616) [Bug]: doctor --fix provisions an enabled 30-minute Proactive check for a disabled heartbeat, with a receipt that never completes, so every run fails with "Automation migration is incomplete"
- [#181677](https://github.com/openclaw/openclaw/issues/181677) [Bug]: Graceful restart retains prior native capture through resumed Codex session
- [#175665](https://github.com/openclaw/openclaw/issues/175665) Telegram: reactions in private-chat topics are routed to the base DM session, not the topic session
- [#181641](https://github.com/openclaw/openclaw/issues/181641) Automations created from a Feishu direct-chat session fail all scheduled executions: "Scheduled account 'main' is unavailable"
- [#181550](https://github.com/openclaw/openclaw/issues/181550) Update failure: package-install-omit-optional (2026.10.5)
- [#181479](https://github.com/openclaw/openclaw/issues/181479) macOS/Windows never reclaim tokenless plugin source captures — disk grows with no supported remedy
- [#181379](https://github.com/openclaw/openclaw/issues/181379) Memory Wiki reports valid titled and parenthesized Markdown links as broken
- [#181580](https://github.com/openclaw/openclaw/issues/181580) [Bug]: Codex harness: a subagent completion turn replaces the owner's stored Codex thread, so each completion creates two fresh threads and loses the prompt cache
- [#181575](https://github.com/openclaw/openclaw/issues/181575) Skill Workshop background review fails with context overflow (mid-turn precheck) without attempting compaction
- [#164704](https://github.com/openclaw/openclaw/issues/164704) [Bug]: Optional-question number shortcuts redirect focus to the chat composer
- [#113955](https://github.com/openclaw/openclaw/issues/113955) Cold connectOverCDP hangs when any shared tab has a wedged renderer
- [#181538](https://github.com/openclaw/openclaw/issues/181538) Update failure: node-runtime-preflight (2026.9.5)
- [#181537](https://github.com/openclaw/openclaw/issues/181537) Update failure: package-install-omit-optional (2026.10.5)
- [#181533](https://github.com/openclaw/openclaw/issues/181533) Heartbeat-declaration automation jobs cannot receive delivery config via CLI (closed validation loop), contradicting config docs
- [#181525](https://github.com/openclaw/openclaw/issues/181525) Update failure: package-install-omit-optional (2026.10.5)
- [#178997](https://github.com/openclaw/openclaw/issues/178997) [Bug]: crabbox run timeout accepts non-decimal numeric forms
- [#178240](https://github.com/openclaw/openclaw/issues/178240) [Bug]: Control UI: starting a session from the command palette drops keyboard focus, and a failed start leaves it lost
- [#178136](https://github.com/openclaw/openclaw/issues/178136) [Bug]: Control UI: Pair device dialog does not announce pending device requests to screen readers
- [#181516](https://github.com/openclaw/openclaw/issues/181516) Update failure: package-install-omit-optional (2026.10.5)
- [#178257](https://github.com/openclaw/openclaw/issues/178257) [Bug]: Control UI: "Create PR" links are named "Create a pull request for {branch}", so voice control cannot click them by their visible label
- [#181495](https://github.com/openclaw/openclaw/issues/181495) Update failure: package-install-omit-optional (2026.10.4)
- [#178161](https://github.com/openclaw/openclaw/issues/178161) [Bug]: Control UI: MCP server Disable/Enable/Sign in buttons do not say which server they act on
- [#181488](https://github.com/openclaw/openclaw/issues/181488) [Bug]: doctor --fix refuses to repair $include-owned config ("would flatten $include-owned config at agents") instead of editing the included file
- [#178261](https://github.com/openclaw/openclaw/issues/178261) [Bug]: Control UI: model provider card buttons (Connect provider, Test connection, Set API key, Remove key) do not say which provider they act on
- [#178138](https://github.com/openclaw/openclaw/issues/178138) [Bug]: Control UI: table, Copy ID, usage session and GitHub code copy results are not announced to screen readers
- [#181435](https://github.com/openclaw/openclaw/issues/181435) Session diagnostics test includes slow fixture warm-up in warning assertions
- [#181467](https://github.com/openclaw/openclaw/issues/181467) [Bug]: xAI "Internal error during token generation" mid-stream still ends the reply with no retry or fallback (embedded run path, 2026.10.10-beta.2)
- [#177546](https://github.com/openclaw/openclaw/issues/177546) [Bug]: Automation runs answer from configured fallbacks when the session's user-pinned model fails
- [#172174](https://github.com/openclaw/openclaw/issues/172174) Automations action bar floats above the bottom edge of the form
- [#181152](https://github.com/openclaw/openclaw/issues/181152) [Bug]: "runtime owner was not published" is retried indefinitely — typing indicator sticks and the turn is lost
- [#181445](https://github.com/openclaw/openclaw/issues/181445) Update failure: package-install-omit-optional (2026.10.5)
- [#181361](https://github.com/openclaw/openclaw/issues/181361) [Bug]: Doctor legacy usage-cache cleanup requests a runtime DB owner during maintenance, warning on clean stores
- [#175156](https://github.com/openclaw/openclaw/issues/175156) [Bug]: streaming a reply that quotes or leaks tool-call XML outside code re-parses the whole reply per delta (quadratic Gateway CPU)
- [#180581](https://github.com/openclaw/openclaw/issues/180581) [Bug]: Native worker attachment failure crashes the lifecycle supervisor without returning a create-error
- [#152047](https://github.com/openclaw/openclaw/issues/152047) [Bug]: config.patch rejects explicit keyed agent deletions
- [#177523](https://github.com/openclaw/openclaw/issues/177523) [Bug]: Session automations ignore the session's selected context window on native runs
- [#181409](https://github.com/openclaw/openclaw/issues/181409) [Bug] Intentional CLI self-disable aborts agentTurn and emits execution-failure alert, losing blocker summary
- [#180783](https://github.com/openclaw/openclaw/issues/180783) [Bug]: openai-completions output clamp counts replayed reasoning_content the server discards, so long reasoning sessions get max_tokens ~1k at half the context
- [#180510](https://github.com/openclaw/openclaw/issues/180510) CLI-backend sessions with a spawned cwd load bootstrap files from the cwd, dropping the agent workspace's AGENTS.md/SOUL.md/USER.md/MEMORY.md
- [#181090](https://github.com/openclaw/openclaw/issues/181090) [Bug]: startup blocks ~105 s in markGatewayStartupMainSessionOrphans and always fails (Windows, 2026.10.5)
- [#180631](https://github.com/openclaw/openclaw/issues/180631) [Bug]: Gateway with PostgreSQL agent stores exits at startup while its inherited auth owner is still preparing
- [#179979](https://github.com/openclaw/openclaw/issues/179979) [Bug]: internal claude-cli runtime faults are classified reason=unknown and trigger cross-provider model fallback
- [#178174](https://github.com/openclaw/openclaw/issues/178174) [Bug]: Control UI: Settings switches and choices go natively disabled while busy and drop keyboard focus to the page
- [#177685](https://github.com/openclaw/openclaw/issues/177685) memory search: search-triggered sync is fire-and-forget and is lost when the CLI exits
- [#180071](https://github.com/openclaw/openclaw/issues/180071) plugins: reinstalling a mixed-case plugin id ignores its lowercase-keyed settings and leaves it disabled
- [#181370](https://github.com/openclaw/openclaw/issues/181370) Update failure: package-install-omit-optional (2026.10.5)
- [#175264](https://github.com/openclaw/openclaw/issues/175264) [Bug]: a streamed phased final answer holding an open plain-text tool-call candidate re-parses the whole reply per delta (5 s at 12 KB, 207 s at 32 KB of blocked stream CPU)
- [#176261](https://github.com/openclaw/openclaw/issues/176261) fix(cli): openclaw logs --local-time is a dead option and conflicts silently with --utc

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 256,534 · **Open issues:** 50,691 · **Last push:** <1h ago

On October 22, 2026, Hermes Agent released version 0.22.5, incorporating approximately 81 pull requests since the prior version. This patch release aims to stabilize the CLI, installers, Microsoft Store app, Docker, and Hermes Cloud. Notably, new issues include an RFC on the doc-chain substrate's network #143379 and a critical bug (#143775) where a stale post-boot host rendezvous record prevents gateway startups, leading clients to see misleading service messages. Additionally, #143806 addresses concerns about logging overload that amplifies memory growth due to unbounded queues. Overall, the updates focus on stabilizing existing features while addressing significant issues that could impact user experience.

#### 🚀 New Releases
- [v0.22.5](https://github.com/nousresearch/hermes-agent/releases/tag/v0.22.5) Hermes Agent v0.22.5

#### 🐛 New Issues
- [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) RFC: The doc-chain substrate's network — the read, the governance, the compaction `type/security` `comp/agent` `tool/memory` `P3` 💬11
- [#143547](https://github.com/NousResearch/hermes-agent/issues/143547) Unified gateway (#106742): open post-merge problems on main, continuing #134889 `comp/gateway` `comp/cron` `P2` `comp/desktop` 💬10
- [#143775](https://github.com/NousResearch/hermes-agent/issues/143775) [Bug]: A stale post-boot host rendezvous record (dead PID) permanently blocks every gateway start — clients only see "Gateway starting: deadline" / "Gateway draining: service_draining" `type/bug` `comp/gateway` `P2` 💬5
- [#143806](https://github.com/NousResearch/hermes-agent/issues/143806) Logging overload: unbounded queue retains exception traceback graphs and amplifies memory growth `type/perf` `comp/cli` `P2` 💬2
- [#143816](https://github.com/NousResearch/hermes-agent/issues/143816) [Bug]: UnscopedSecretError for a `docker_forward_env` secret when Desktop re-attaches a sandbox-hosted Bot Screen on a multiplexed gateway `type/bug` `comp/gateway` `tool/terminal` `backend/docker` 💬2
- [#143793](https://github.com/NousResearch/hermes-agent/issues/143793) [Bug]: webhook admission maps a permanent destination-config error to a retryable 503 `type/bug` `comp/gateway` `platform/webhook` `P2` 💬2
- [#143817](https://github.com/NousResearch/hermes-agent/issues/143817) Background review can archive an active skill without absorbing anything — the consolidation guard only checks the name `type/bug` `comp/tools` `tool/skills` `P2` 💬1
- [#143818](https://github.com/NousResearch/hermes-agent/issues/143818) 0.22.4: conversations become permanently unwritable (missing API binding, legacy adoption) and background delegation results never delivered to api_server sessions `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#143814](https://github.com/NousResearch/hermes-agent/issues/143814) [Bug]: Dashboard onboarding wizard loops on umbrelOS with custom (Gemini) provider despite provider being correctly configured `type/bug` `comp/cli` `area/config` `P2` 💬1
- [#143815](https://github.com/NousResearch/hermes-agent/issues/143815) [Withdrawn] (content removed at author's request) `type/bug` `P2` 💬1
- [#143739](https://github.com/NousResearch/hermes-agent/issues/143739) Hook context (pre_llm_call) is persisted in api_content, replayed, and seen by the memory review: allow sent-but-not-saved context `type/security` `comp/agent` `tool/memory` `P3` 💬1
- [#143810](https://github.com/NousResearch/hermes-agent/issues/143810) TUI: message sent while agent is busy re-renders as a duplicate user bubble; final assistant bubble renders empty (finalTail over-dedupe at message.complete) `type/bug` `comp/tui` `tool/file` `P2` 💬1
- [#143792](https://github.com/NousResearch/hermes-agent/issues/143792) [Bug]: Slack Connect — external user's message handled twice and scoped to the external team; external DMs served `type/security` `comp/gateway` `comp/plugins` `platform/slack` 💬1
- [#143779](https://github.com/NousResearch/hermes-agent/issues/143779) [Bug]: Native Windows + Docker: configured Linux cwd falls back to /root; Projects encounter Windows-path failures `type/bug` `comp/tools` `tool/terminal` `backend/docker` 💬1
- [#143785](https://github.com/NousResearch/hermes-agent/issues/143785) Cron monitor-gated job persists an empty session row on every tick (484 rows in 16h, 95% of profile sessions) `type/bug` `comp/cron` `P2` `area/sessions` 💬1
- [#143828](https://github.com/NousResearch/hermes-agent/issues/143828) [Bug]: completion_contract accepts OWNER/<repo> placeholders as real repositories, creating an unfulfillable PR contract
- [#143826](https://github.com/NousResearch/hermes-agent/issues/143826) Kanban dispatcher should externally notify assignee when gave_up transitions a task to blocked
- [#143825](https://github.com/NousResearch/hermes-agent/issues/143825) admission_conflict permanently blocks resume and branch on one desktop local session (v0.22.4, Windows)
- [#143824](https://github.com/NousResearch/hermes-agent/issues/143824) kanban PR acceptance: required check with conclusion=skipped classified infra forever, merged PRs can never complete their card `type/bug` `comp/cli` `comp/cron` `comp/plugins`
- [#143807](https://github.com/NousResearch/hermes-agent/issues/143807) [Bug]: pinned Chromium 145 (chromium-1208) still trusts the compromised eMudhra intermediates `type/security` `comp/tools` `tool/browser` `P3`
- [#143802](https://github.com/NousResearch/hermes-agent/issues/143802) [Bug]: Dead-connection sweep never fires: its socket probe raises on every TLS socket, and on every socket on Windows `type/bug` `comp/agent` `P2` `os/windows`
- [#143798](https://github.com/NousResearch/hermes-agent/issues/143798) [Bug]: copilot-acp model probe prints "Exception ignored ... BrokenPipeError" on every startup (pipes not closed when CLI exits early) `type/bug` `comp/agent` `comp/acp` `provider/copilot`
- [#143797](https://github.com/NousResearch/hermes-agent/issues/143797) Session cost reprices its whole history at the session's current model, reporting spend no provider billed `type/bug` `P2` `comp/portal` `area/billing`
- [#143788](https://github.com/NousResearch/hermes-agent/issues/143788) [Feature]: Let a plugin ask the session's own agent a text-only side question after a turn (warm cache, no tools) `type/feature` `comp/agent` `P3`

#### 🔒 Closed Issues
- [#138329](https://github.com/NousResearch/hermes-agent/issues/138329) httpx2==2.12.0's 1 MiB per-SSE-event cap silently breaks MCP servers with a large tools/list (reported as "SSE stream ended without a response")
- [#123680](https://github.com/NousResearch/hermes-agent/issues/123680) [Bug]: Discord voice replies unplayable — MP3 bytes uploaded as voice-message.ogg (discord missing from OPUS_VOICE_PLATFORMS, no adapter transcode)
- [#143775](https://github.com/NousResearch/hermes-agent/issues/143775) [Bug]: A stale post-boot host rendezvous record (dead PID) permanently blocks every gateway start — clients only see "Gateway starting: deadline" / "Gateway draining: service_draining"
- [#96703](https://github.com/NousResearch/hermes-agent/issues/96703) MCP trust-gate approval card: show the call arguments; Session/Always buttons act as Once
- [#141136](https://github.com/NousResearch/hermes-agent/issues/141136) MCP: servers whose tools/list exceeds 1 MiB never connect (SSE event cap)
- [#143815](https://github.com/NousResearch/hermes-agent/issues/143815) [Withdrawn] (content removed at author's request)
- [#132120](https://github.com/NousResearch/hermes-agent/issues/132120) [Bug]: Cron media delivery drops `[[audio_as_voice]]`, so a cron job's TTS reply never arrives as a Telegram voice bubble
- [#109818](https://github.com/NousResearch/hermes-agent/issues/109818) "always" answer to an MCP elicitation/trust-gate approval is not persisted — every session asks again

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 95,255 · **Open issues:** 9,365 · **Last push:** <1h ago

On October 24, 2026, there were no new releases for vLLM, but several significant pull requests were merged. Notable bug fixes included enhancements to processing reloaded weights for LoRA-wrapped Mixture of Experts (MoE) layers and the resolution of illegal memory access issues related to cooperative top-k operations. A new feature was added to support decoder-side Stochastic Weight Averaging bounded replay for DeepSeek-V4.1-Flash, alongside various improvements to ROCm compatibility and performance. However, the day also saw the reporting of a critical bug where the `enable_adaptive_verification` feature was rejected on SM120, raising concerns for compatibility with the latest hardware.

#### ✅ Merged PRs
- [#59100](https://github.com/vllm-project/vllm/pull/59100) [CI][ROCm] Export kernel source maps for CI selection
- [#63319](https://github.com/vllm-project/vllm/pull/63319) [Bugfix][LoRA][MoE] Process reloaded weights of LoRA-wrapped MoE layers
- [#59717](https://github.com/vllm-project/vllm/pull/59717) [Bugfix][MoE] Remap invalid topk_ids in moe_permute without expert_map
- [#63131](https://github.com/vllm-project/vllm/pull/63131) [Bugfix][ROCm][Kimi-K3] Validate gfx942's int4 expert requant as int4
- [#63186](https://github.com/vllm-project/vllm/pull/63186) [Bugfix][LoRA] Don't reject LoRA for speculative decoding drafters
- [#60644](https://github.com/vllm-project/vllm/pull/60644) [ROCm][RDNA][Perf] W4A16: packed fp16 prefill dequant and tiles for gfx1151
- [#63118](https://github.com/vllm-project/vllm/pull/63118) [Bugfix][Kernel] Fix cooperative_topk illegal memory access on NaN scores
- [#62591](https://github.com/vllm-project/vllm/pull/62591) [Bugfix][AuxOutput] Retain routed experts while a KV cache tier holds their blocks
- [#61509](https://github.com/vllm-project/vllm/pull/61509) [Bugfix][MRV2] Don't count adaptive verification profiling cache as CUDA graph memory
- [#62384](https://github.com/vllm-project/vllm/pull/62384) [Feature][PCP] Support decoder-side SWA bounded replay with APC for DeepSeek-V4.1-Flash
- [#63400](https://github.com/vllm-project/vllm/pull/63400) [Refactor] Remove dead code models
- [#62544](https://github.com/vllm-project/vllm/pull/62544) [Model] Add Domyn Edge support
- [#63413](https://github.com/vllm-project/vllm/pull/63413) [CI] Remove redundant Ubuntu 24.04 release variant
- [#61649](https://github.com/vllm-project/vllm/pull/61649) [Refactor] [AMD] flydsl: Move UltraQuant/TurboQuant decode to public APIs
- [#63268](https://github.com/vllm-project/vllm/pull/63268) [ROCm][Bugfix] Fix Triton paged decode leaving output heads unwritten on gfx942
- [#63407](https://github.com/vllm-project/vllm/pull/63407) [Doc] MiniMax-M3: update the B300 NVFP4 InferenceX AgentX profile
- [#62907](https://github.com/vllm-project/vllm/pull/62907) [CI][ROCm][MoE] Add MXFP4 SWIGLUOAI_UNINTERLEAVE/SITU test coverage on MI355
- [#63260](https://github.com/vllm-project/vllm/pull/63260) [Core] Let VLLM_WORKER_SHUTDOWN_TIMEOUT_SECONDS set the EngineCore cleanup grace after an immediate abort
- [#63242](https://github.com/vllm-project/vllm/pull/63242) [CI][ROCm] Fail the AITER nightly overlay on wheels ci_base cannot load
- [#63283](https://github.com/vllm-project/vllm/pull/63283) [CI][ROCm] Run the online FP8 MoE batch-invariance test on ROCm
- [#63371](https://github.com/vllm-project/vllm/pull/63371) [vLLM IR] Deprecate ir_op_priority ahead of vLLM IR removal
- [#63178](https://github.com/vllm-project/vllm/pull/63178) [Docs][Mistral] Note that required and named tool choice may not produce a call
- [#62757](https://github.com/vllm-project/vllm/pull/62757) [ROCm][Model] Muse Spark: share one RoPE cache sized by max_model_len
- [#62841](https://github.com/vllm-project/vllm/pull/62841) [Bugfix][Mamba] Avoid re-marking committed prompt-tail boundaries as cached this step
- [#63394](https://github.com/vllm-project/vllm/pull/63394) [Doc] MiniMax-M3: use the autotune flag the pinned GB200 nightly accepts, fix golden-AL links
- [#63395](https://github.com/vllm-project/vllm/pull/63395) [Doc] MiniMax-M3: document the B300 NVFP4 InferenceX AgentX aggregated profile
- [#63391](https://github.com/vllm-project/vllm/pull/63391) [Doc] MiniMax-M3: document the H200 MXFP8 InferenceX AgentX aggregated profile
- [#40186](https://github.com/vllm-project/vllm/pull/40186) [entrypoints/openai] add kv params to streaming api response
- [#62934](https://github.com/vllm-project/vllm/pull/62934) [ROCm][CI] Move NFS-affected MI300 test groups to MI355
- [#62540](https://github.com/vllm-project/vllm/pull/62540) [CI] Automatically label Reflection Beam model changes
- [#55743](https://github.com/vllm-project/vllm/pull/55743) [Bugfix][Tool Parser] Preserve large integer tool arguments
- [#62751](https://github.com/vllm-project/vllm/pull/62751) [Quantization] Honor MoE activation override for Humming MXFP4
- [#63251](https://github.com/vllm-project/vllm/pull/63251) [Spec Decode] Keep drafters within their rotary cache on the V2 model runner
- [#63344](https://github.com/vllm-project/vllm/pull/63344) [Doc][ROCm] Document DeepSeek-V4.1-Flash MI355X AgentX TP2 profiles
- [#63370](https://github.com/vllm-project/vllm/pull/63370) [MRV2] Remove stale experimental README
- [#59854](https://github.com/vllm-project/vllm/pull/59854) [Rust Frontend] Refactor rust frontend for latest `llm-multimodal` v1.14 crate
- [#63339](https://github.com/vllm-project/vllm/pull/63339) [Bugfix][CPU] Match GPU conv-state layout in GDN spec decode
- [#62827](https://github.com/vllm-project/vllm/pull/62827) [ROCm] Bump UCX to v1.23.0-rc1 so NIXL uses rocm_ipc
- [#62171](https://github.com/vllm-project/vllm/pull/62171) [Perf][Kernel] Size cooperative_topk's single pass by row length, not stride
- [#63269](https://github.com/vllm-project/vllm/pull/63269) [CI][ROCm] Raise the MI355 MiniMax M3 MonoKernel timeout to 45 minutes
- [#63163](https://github.com/vllm-project/vllm/pull/63163) [Recipe] MiniMax-M3: add B200 NVFP4 AgentX aggregated profile
- [#63190](https://github.com/vllm-project/vllm/pull/63190) [Bugfix] Skip prompt_embeds passthrough items in set_active_mm_loras
- [#63257](https://github.com/vllm-project/vllm/pull/63257) [ROCm][Recipe] MiniMax-M3.1-Flash: MI355X PD, DBO / SP prefill, Quark MXFP4, mono decode
- [#63320](https://github.com/vllm-project/vllm/pull/63320) [CI][Rust Frontend] Run more Python server tests against the Rust frontend
- [#62683](https://github.com/vllm-project/vllm/pull/62683) [XPU][CI] Run prefix-caching tests for GDN, Mamba and pooling models on XPU
- [#63281](https://github.com/vllm-project/vllm/pull/63281) [XPU][UT] Use W8A8 FP8 linear kernel instead of W8A16 on XPU in modernbert_fp8 unit test
- [#63295](https://github.com/vllm-project/vllm/pull/63295) [Bugfix][Rust Frontend] LoraRequest: drop tensorizer_config_dict to match the Python wire layout
- [#63318](https://github.com/vllm-project/vllm/pull/63318) [Rust Frontend] Support --return-tokens-as-token-ids
- [#63317](https://github.com/vllm-project/vllm/pull/63317) [Rust Frontend] Export Mooncake connector transfer metrics like Python
- [#63316](https://github.com/vllm-project/vllm/pull/63316) [Rust Frontend] Keep load_inplace off cached LoRA requests like Python
- [#63315](https://github.com/vllm-project/vllm/pull/63315) [Rust Frontend] Validate, deduplicate and cap bad words like Python
- [#63314](https://github.com/vllm-project/vllm/pull/63314) [Rust Frontend] Render empty tool call arguments as an empty object like Python
- [#63313](https://github.com/vllm-project/vllm/pull/63313) [Rust Frontend] Report every invalid logit_bias key like Python
- [#63062](https://github.com/vllm-project/vllm/pull/63062) [Rust Frontend] End prefilled Kimi K3 reasoning at the response opener like Python
- [#63061](https://github.com/vllm-project/vllm/pull/63061) [Rust Frontend] Serialize unset chat response fields as null like Python
- [#63060](https://github.com/vllm-project/vllm/pull/63060) [Rust Frontend] Reject an empty chat tools array like Python
- [#63059](https://github.com/vllm-project/vllm/pull/63059) [Rust Frontend] Accept Gemma 4 tool calls without the call prefix like Python

#### 🐛 New Issues
- [#63343](https://github.com/vllm-project/vllm/issues/63343) [Bug][DSv4.1][SM120] enable_adaptive_verification is rejected on SM120 — device-query-lens support is gated to SM90/SM100 only `DSv4.1` 💬2
- [#63340](https://github.com/vllm-project/vllm/issues/63340) [Feature][ROCm][DSv4.1] Mono decode: enable MI350P (gfx950, 128 CUs) via k-pass task decomposition `rocm` `DSv4.1` 💬2
- [#63399](https://github.com/vllm-project/vllm/issues/63399) [Performance]: Startup sizing of FlashInfer workspace to recover KV-cache capacity `performance` 💬1
- [#63331](https://github.com/vllm-project/vllm/issues/63331) Anthropic /v1/messages: inline system messages are merged into the leading system prompt, so every Claude Code turn misses the prefix cache after that point 💬1
- [#63346](https://github.com/vllm-project/vllm/issues/63346) [Bug]: Streaming chat keeps tool calls for `tool_choice: "none"` (gpt-oss) and `tool_choice: null` `bug` `tool-calling` `gpt-oss` 💬1
- [#63309](https://github.com/vllm-project/vllm/issues/63309) [Bug]: Hermes tool parser streaming silently drops all content after a stray <tool_call> marker in prose `bug` `tool-calling` 💬1
- [#63336](https://github.com/vllm-project/vllm/issues/63336) [RFC]: MoRIIO transfer contract: safe KV reclamation and bounded failure for P/D (READ and WRITE) `rocm` `RFC` 💬1
- [#63267](https://github.com/vllm-project/vllm/issues/63267) [Bug]: CUDA builds without FA extensions (Jetson Thor sm_110) cannot start: vllm_flash_attn raises at import time and FA is still auto-selected 💬1
- [#63276](https://github.com/vllm-project/vllm/issues/63276) [Bug]: DS V4.1 Flash1017 outputs incorrect numbers `bug` 💬1
- [#63250](https://github.com/vllm-project/vllm/issues/63250) [Bug]: DeepSeek-V4.1-Flash(-1017) returns U+FFFD for a 12-token prompt, clean one token longer (v0.31.0/v0.32.0, TP8+EP, 8xH20) `deepseek` `DSv4.1` 💬1
- [#63240](https://github.com/vllm-project/vllm/issues/63240) [Question]: Qwen4Exp PLE n-gram table is materialised dense in bf16 — can it stay compressed in pinned host memory? `quantization` 💬1
- [#63414](https://github.com/vllm-project/vllm/issues/63414) [Bug]: compile_mm_encoder is engine-fatal for RADIO/NaViT encoders (Nemotron Parse 3.5)
- [#63363](https://github.com/vllm-project/vllm/issues/63363) [RFC]: Keep per-request token lists out of EngineCore garbage collection
- [#63359](https://github.com/vllm-project/vllm/issues/63359) [RFC]: Use session Agent Hints to reuse prompt tokens and block hashes `RFC`
- [#63358](https://github.com/vllm-project/vllm/issues/63358) [Bug]: Hermes tool parser: streaming and non-streaming disagree when a valid tool call is followed by a malformed <tool_call> region `bug` `tool-calling`
- [#63356](https://github.com/vllm-project/vllm/issues/63356) [Bug]: Chat derender ignores `--response-role`, `add_generation_prompt: false` and `echo` `bug`
- [#63310](https://github.com/vllm-project/vllm/issues/63310) [Bug]: Responses API rejects assistant input items without "type" (output_text content) `bug`
- [#63285](https://github.com/vllm-project/vllm/issues/63285) [Bug][LoRA] SEQ_CLS adapters saved with modules_to_save=null crash on load
- [#63278](https://github.com/vllm-project/vllm/issues/63278) [Bug][LoRA] BERT sequence classification drops LoRA on bert.pooler.dense `pooling`

#### 🔒 Closed Issues
- [#42729](https://github.com/vllm-project/vllm/issues/42729) [RFC]: Derender Endpoints to Provide Detokenization for Disaggregated Serving
- [#41515](https://github.com/vllm-project/vllm/issues/41515) [Bug]: [kv_offload+HMA] Fails on chat subsequent request
- [#50128](https://github.com/vllm-project/vllm/issues/50128) [Performance] Measure Transformers backend startup time vs native
- [#38147](https://github.com/vllm-project/vllm/issues/38147) [RFC]: Endpoints to Retrieve User Configuration and Runtime Data
- [#46283](https://github.com/vllm-project/vllm/issues/46283) [Bug]: NixlPushConnector — decode-side KV blocks of an aborted remote-KV load are never reclaimed when the prefill node never reports completion (KV cache leak)
- [#57593](https://github.com/vllm-project/vllm/issues/57593) [Feature]: Share non-streaming chat message assembly between `OpenAIServingChat` and batch derender
- [#57016](https://github.com/vllm-project/vllm/issues/57016) [Bug]: `VLLM_BATCH_INVARIANT=1` is not batch-invariant for fused-MoE experts with no warning
- [#62804](https://github.com/vllm-project/vllm/issues/62804) [Feature / Question]:: /v1/systemone rejects image inputs on standard multimodal VLMs with "this model does not take image inputs"
- [#59045](https://github.com/vllm-project/vllm/issues/59045) [Bug][ROCm] v0.30.0: DeepSeek-V4.1-Flash cannot boot on gfx942 — Engram pinned-host CPU offload lost on the AMD path (+47 GiB/rank GPU), OOM in profile_run
- [#47328](https://github.com/vllm-project/vllm/issues/47328) [Bug]: CPU DP affinity regression
- [#63026](https://github.com/vllm-project/vllm/issues/63026) [Bug]: EngineCore CPU memory growth on Ascend associated with SHM notification mailbox accumulation
- [#59686](https://github.com/vllm-project/vllm/issues/59686) [Bug]: CUTLASS fp8 MoE corrupts valid tokens when CUDA-graph padding routes are `-1` (wrong `expert_first_token_offset` from `moe_permute`)

### SGLang (`sgl-project/sglang`)

**Stars:** 37,677 · **Open issues:** 6,144 · **Last push:** <1h ago

Today saw no new releases for SGLang, but notable progress was made with several significant performance improvements and bug fixes. Among the merged pull requests, enhancements to the diffusion module included the introduction of breakable CUDA graphs by default for LTX-2 and optimizations for FA4 head sizes on Blackwell hardware. Additionally, the rust-server received a refactor to tokenize and apply chat model rules through the sglang-processor, while the muse module now supports Responses namespace tools. However, a new issue surfaced regarding the HiCache scheduler, which crashes with a "Prefill out of memory" error under certain conditions, potentially impacting resource management.

#### ✅ Merged PRs
- [#46108](https://github.com/sgl-project/sglang/pull/46108) [Perf] diffusion: Run LTX-2 stage 2 on a premerged resident DiT
- [#45977](https://github.com/sgl-project/sglang/pull/45977) [Perf] diffusion: Turn on breakable CUDA graphs by default for LTX-2/LTX-2.3 two-stage serving
- [#46102](https://github.com/sgl-project/sglang/pull/46102) [Perf] diffusion: Serve FA4 head sizes on Blackwell instead of falling back to sm80 SDPA
- [#46106](https://github.com/sgl-project/sglang/pull/46106) [Perf] diffusion: Drop LTX-2's all-valid prompt mask under lossless quality
- [#45965](https://github.com/sgl-project/sglang/pull/45965) [Perf] diffusion: Shard LTX-2 stage 2 over the CFG ranks as Ulysses
- [#46101](https://github.com/sgl-project/sglang/pull/46101) [Perf] diffusion/qwen-image-2.1: Keep an image prefix's K/V in the packed buffer across steps
- [#46148](https://github.com/sgl-project/sglang/pull/46148) [Perf] diffusion: Patchify Wan latents straight into tokens
- [#46169](https://github.com/sgl-project/sglang/pull/46169) [Fix] diffusion/http: Allow bounded graceful shutdown
- [#46164](https://github.com/sgl-project/sglang/pull/46164) [Refactor] rust-server: Tokenize and apply chat model rules through sglang-processor
- [#45315](https://github.com/sgl-project/sglang/pull/45315) [Feat] openai: Render DeepSeek-V4/V4.1 chat prompts with deepseek-recipe
- [#46030](https://github.com/sgl-project/sglang/pull/46030) [Fix] docker: Pin sgl-nvidia-mega to 3333e4c so the megakernel starts on main
- [#46163](https://github.com/sgl-project/sglang/pull/46163) [Perf] dsv41: Let Mega-mHC write the MegaMoE input under MegaGate
- [#46176](https://github.com/sgl-project/sglang/pull/46176) [Perf] dsv41: Trim per-step DSpark decode overhead
- [#41169](https://github.com/sgl-project/sglang/pull/41169) [Perf] spec-decoding: fuse simulated speculative acceptance tensor preparation
- [#44685](https://github.com/sgl-project/sglang/pull/44685) [Fix] muse: Support Responses namespace tools and defer_loading
- [#46066](https://github.com/sgl-project/sglang/pull/46066) [Fix] rust-server: Keep a transfer backend's own bootstrap port on prefill
- [#45335](https://github.com/sgl-project/sglang/pull/45335) [Fix] inkling: Keep BF16 LM-head operands with FP32 output
- [#46170](https://github.com/sgl-project/sglang/pull/46170) [Doc] quantization: Link W4A16 design from environment reference
- [#46167](https://github.com/sgl-project/sglang/pull/46167) [Perf] logits: Cast bf16 logits into the fp32 buffer with a Triton kernel
- [#45760](https://github.com/sgl-project/sglang/pull/45760) [Fix] http_server: Apply SGLANG_TIMEOUT_KEEP_ALIVE to Granian HTTP/1.1 connections
- [#43774](https://github.com/sgl-project/sglang/pull/43774) [Feat] glm5.3flash: Support padded CP BCG and prefix replay with PD/DFlash2
- [#46071](https://github.com/sgl-project/sglang/pull/46071) [Perf] dsv41: Build the MegaGate row masks once per forward
- [#40479](https://github.com/sgl-project/sglang/pull/40479) [Feat] parser: Add checkpoint-driven response-template adapters
- [#45656](https://github.com/sgl-project/sglang/pull/45656) [Fix] mistral3: Subclass LlavaForConditionalGeneration instead of wrapping it
- [#45983](https://github.com/sgl-project/sglang/pull/45983) [CI] [AMD] diffusion: Drain the Cosmos Dreams decode stream after freeing its outputs
- [#45461](https://github.com/sgl-project/sglang/pull/45461) [CI] vlm: Harden fixture cleanup after setup and shutdown failures
- [#45444](https://github.com/sgl-project/sglang/pull/45444) [Refactor] radix-tree: Make each cache action a typed CacheAction implementation
- [#45681](https://github.com/sgl-project/sglang/pull/45681) [Fix] lora: Preserve MoE projection identity and routing lifetimes
- [#45917](https://github.com/sgl-project/sglang/pull/45917) [Fix] moe: Preserve CUTLASS routing metadata and execution budgets
- [#45462](https://github.com/sgl-project/sglang/pull/45462) [Perf] moe: Preserve Marlin workspace and route-count budgets
- [#45916](https://github.com/sgl-project/sglang/pull/45916) [Fix] gguf: Preserve MoE routing, weighting and allocation budgets
- [#45915](https://github.com/sgl-project/sglang/pull/45915) [Fix] deepseek-v4: Preserve decoder-tail token-count ownership
- [#39083](https://github.com/sgl-project/sglang/pull/39083) [Fix] [AMD] dsa: Fix AITER prefill with an FP8 KV cache
- [#40776](https://github.com/sgl-project/sglang/pull/40776) [Fix] [AMD] Quark: fix Quark block-FP8 loading in DeepSeek loader
- [#45897](https://github.com/sgl-project/sglang/pull/45897) [Feat] platforms: Let out-of-tree platforms bind group devices and custom ops
- [#45971](https://github.com/sgl-project/sglang/pull/45971) [Fix] true-on-policy: Sample from fp32 probs when logits are bf16
- [#41187](https://github.com/sgl-project/sglang/pull/41187) [Feat] hicache: Support MLA DCP with HiCache L3(file/mooncake)
- [#46126](https://github.com/sgl-project/sglang/pull/46126) [CI] disaggregation: Run the SWA decode radix cache test on Mooncake
- [#45922](https://github.com/sgl-project/sglang/pull/45922) [Fix] disaggregation: Restart a lost prefill's heartbeat miss count
- [#45914](https://github.com/sgl-project/sglang/pull/45914) [Feat] rust-server: Let a multimodal processor finalize item layout after caller hashes
- [#45982](https://github.com/sgl-project/sglang/pull/45982) [Feat] benchmark: Add --input-len-list to bench_one_batch_server for per-request input lengths
- [#45899](https://github.com/sgl-project/sglang/pull/45899) [Fix] rust-server: Deliver scheduler-side aborts to Rust frontend clients
- [#45888](https://github.com/sgl-project/sglang/pull/45888) [Feat] rust-server: Serve /abort_request from the Rust frontend
- [#45728](https://github.com/sgl-project/sglang/pull/45728) [Test] [AMD] deepseek-v4.1: Give the encoder-replay test's request window a zero_row
- [#43673](https://github.com/sgl-project/sglang/pull/43673) [Feat] comfyui: video-to-video input and prompt enhancement for server-mode nodes
- [#44139](https://github.com/sgl-project/sglang/pull/44139) [Fix] offloader: Preserve cached weights during CPU offload
- [#45943](https://github.com/sgl-project/sglang/pull/45943) [Fix] diffusion: Keep dynamic LoRA deltas on fused linear-GELU sites
- [#45966](https://github.com/sgl-project/sglang/pull/45966) [Perf] diffusion: Cut LTX-2 denoising-step host overhead
- [#45979](https://github.com/sgl-project/sglang/pull/45979) [Perf] diffusion: Skip the residency calibration probe in auto mode until a planner consumes it
- [#45987](https://github.com/sgl-project/sglang/pull/45987) [Perf] diffusion: Serve image responses from in-memory encoded bytes
- [#45995](https://github.com/sgl-project/sglang/pull/45995) [Fix] diffusion: Offset LTX-2.3 BCG video RoPE by the SP shard start
- [#45732](https://github.com/sgl-project/sglang/pull/45732) [Fix] [NPU] tests: Restore evalscope GSM8K baseline via NPUGSM8KMixin backend
- [#46055](https://github.com/sgl-project/sglang/pull/46055) [CI] [NPU] precise-test: skip recommend-tests-from-coverage when no NPU paths changed
- [#45857](https://github.com/sgl-project/sglang/pull/45857) [Fix] deps: Pin python-dateutil<3 to keep botocore resolvable
- [#46042](https://github.com/sgl-project/sglang/pull/46042) [CI] [NPU] precise-test: gate precision on PR judgeability, not bucket count
- [#46040](https://github.com/sgl-project/sglang/pull/46040) [CI] diffusion: Run the FLUX.2 XPU norm-fusion test on the XPU suite only
- [#46032](https://github.com/sgl-project/sglang/pull/46032) [Doc] cookbook: Qwen3.5 MI355X FP8 agentic adds scheduler/tokenizer tuning from the InferenceX recipe
- [#45164](https://github.com/sgl-project/sglang/pull/45164) [Chore] api: add fields to generate request
- [#43548](https://github.com/sgl-project/sglang/pull/43548) [Fix] hicache/pd: Promise prefill only the L3 span the decode prefetch takes
- [#46014](https://github.com/sgl-project/sglang/pull/46014) [CI] [NPU] precise-test: run only the recommended multimodal_gen cases
- [#46017](https://github.com/sgl-project/sglang/pull/46017) [Doc] cookbook: Qwen3.5 MI355X FP8 agentic uses HiCache write_through on the v0.5.22 image
- [#45944](https://github.com/sgl-project/sglang/pull/45944) [Fix] diffusion: Keep the linear-GELU verdict cache out of torch.compile traces
- [#45994](https://github.com/sgl-project/sglang/pull/45994) [Fix] diffusion: Give every SP rank the same Wan TI2V timestep

#### 🐛 New Issues
- [#45989](https://github.com/sgl-project/sglang/issues/45989) [Bug] HiCache `buffer_only` + Mooncake L3: scheduler admits a chunked prefill it cannot finish, then crashes with "Prefill out of memory" (evictable 0, every radix node locked) 💬1
- [#46037](https://github.com/sgl-project/sglang/issues/46037) [Bug][function_call] GLM tool-call parsers turn JSON null into the string "None"/"null" 💬1
- [#46130](https://github.com/sgl-project/sglang/issues/46130) [RFC] diffusion: LTX-2 stage-1 distilled LoRA base restore is not exact
- [#46097](https://github.com/sgl-project/sglang/issues/46097) [Feature] Semantic Prompt Hints in HiCache TreeNode for Heterogeneous L3 Storage Tiering
- [#46067](https://github.com/sgl-project/sglang/issues/46067) [Bug] sgl-model-gateway: accepted client sockets don't get TCP_NODELAY, adds ~40 ms to TTFT on some streaming requests
- [#45953](https://github.com/sgl-project/sglang/issues/45953) [Bug] Glm47MoeDetector.detect_and_parse drops tool calls when the function name is followed by a newline (non-streaming)

#### 🔒 Closed Issues
- [#32903](https://github.com/sgl-project/sglang/issues/32903) [RFC] KVCR as a HiCacheStorage backend for peer-to-peer KV reuse
- [#36071](https://github.com/sgl-project/sglang/issues/36071) [Bug][AMD] Custom AR graph registration corrupts DSA DP-attention graph-skew replay
- [#36127](https://github.com/sgl-project/sglang/issues/36127) [Feature] Dynamic verification for DFlash2
- [#36194](https://github.com/sgl-project/sglang/issues/36194) [Bug] /v1/responses and /v1/chat/completions return 400 when a function tool has "strict": null
- [#34559](https://github.com/sgl-project/sglang/issues/34559) [NPU][Tracking] Ascend A5 MXFP8/MXFP4 Capability and Model Coverage
- [#34214](https://github.com/sgl-project/sglang/issues/34214) [Bug] Streaming response truncates content when both content and tool_calls are present (SGLang 0.5.17)
- [#36208](https://github.com/sgl-project/sglang/issues/36208) [RFC] Per-Token-Range KV-Cache Retention Priority
- [#35851](https://github.com/sgl-project/sglang/issues/35851) # Breakable CUDA graph: per-layer break dominates GDN prefill time on hybrid models (Qwen3.5/3.6)
- [#43877](https://github.com/sgl-project/sglang/issues/43877) [Feature] [diffusion] ComfyUI server-mode nodes: video-to-video, audio-video output, prompt enhancement, checkpoint sweep, LoRA stacking, API recipe
- [#43874](https://github.com/sgl-project/sglang/issues/43874) [Bug] [diffusion] ComfyUI plugin: integrated-mode bugs in GGUF detection, import guard and VRAM accounting

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,167 · **Open issues:** 2,578 · **Last push:** <1h ago

In the last 24 hours, llama.cpp released versions b11846, b11840, b11838, and several others, featuring enhancements such as enforcing DP4A MMQ tile height requirements in b11846 and the addition of the CEIL operation in b11840. Key merged PRs included optimizations like hexadecimal operation refactoring and concurrent downloads across processes. However, some critical new issues have emerged, notably a significant performance disparity in evaluations between the llama-prism and the main llama.cpp builds (#31016) and various compile bugs related to SYCL and other components. Overall, the day reflected a mix of promising feature updates and pressing issue tracking amidst ongoing development.

#### 🚀 New Releases
- [b11846](https://github.com/ggml-org/llama.cpp/releases/tag/b11846) b11846
- [b11840](https://github.com/ggml-org/llama.cpp/releases/tag/b11840) b11840
- [b11838](https://github.com/ggml-org/llama.cpp/releases/tag/b11838) b11838
- [b11836](https://github.com/ggml-org/llama.cpp/releases/tag/b11836) b11836
- [b11835](https://github.com/ggml-org/llama.cpp/releases/tag/b11835) b11835

#### ✅ Merged PRs
- [#30965](https://github.com/ggml-org/llama.cpp/pull/30965) qwen4exp : build the QSA selection without the kq_mask
- [#30943](https://github.com/ggml-org/llama.cpp/pull/30943) mtmd : lfm2 resize matches torchvision
- [#28607](https://github.com/ggml-org/llama.cpp/pull/28607) mtmd : add Soprano audio generation
- [#30346](https://github.com/ggml-org/llama.cpp/pull/30346) hexagon: add SGN op
- [#29312](https://github.com/ggml-org/llama.cpp/pull/29312) common : allow concurrent downloads across processes
- [#30885](https://github.com/ggml-org/llama.cpp/pull/30885) hip: fix bf16 WMMA operand vector type for gfx11/gfx12
- [#30804](https://github.com/ggml-org/llama.cpp/pull/30804) CUDA: chunk graphs to amortize graph launch
- [#30837](https://github.com/ggml-org/llama.cpp/pull/30837) ggm-cuda: enforce DP4A MMQ tile height multiple of warp size
- [#31053](https://github.com/ggml-org/llama.cpp/pull/31053) CUDA: fix build after chunked CUDA graphs (#30804)
- [#24554](https://github.com/ggml-org/llama.cpp/pull/24554) Fix 24486: TP: allows the usage of 4-10 gpus for stepfun and laguna
- [#31049](https://github.com/ggml-org/llama.cpp/pull/31049) vendor : update LibreSSL to 4.4.0 [no ci]
- [#31006](https://github.com/ggml-org/llama.cpp/pull/31006) hexagon: add CEIL op
- [#31038](https://github.com/ggml-org/llama.cpp/pull/31038) ui: bump packages to clear npm audit
- [#30969](https://github.com/ggml-org/llama.cpp/pull/30969) ggml : fix time overflow in ggml_time_us
- [#31036](https://github.com/ggml-org/llama.cpp/pull/31036) ci : add behavior check workflow
- [#30933](https://github.com/ggml-org/llama.cpp/pull/30933) cann: missing `const` qualifiers added for consistency
- [#31014](https://github.com/ggml-org/llama.cpp/pull/31014) sycl: pass device into mul_mat_uses_onednn
- [#30663](https://github.com/ggml-org/llama.cpp/pull/30663) Extend probabilistic sampling for DFlash2 drafts
- [#30974](https://github.com/ggml-org/llama.cpp/pull/30974) vocab : fix Nemotron-3.5-Embed tokenization
- [#30843](https://github.com/ggml-org/llama.cpp/pull/30843) hexagon: Op Fusion refactoring, optimizations and new fusions like `BINARY_NX` (back-to-back ADDs, etc)
- [#28725](https://github.com/ggml-org/llama.cpp/pull/28725) Add SYCL graph record and replay
- [#30684](https://github.com/ggml-org/llama.cpp/pull/30684) Replace host waits in fattn-mkl with explicit dependencies

#### 🐛 New Issues
- [#31016](https://github.com/ggml-org/llama.cpp/issues/31016) Eval bug: Significant performance difference between llama-prism and main llama.cpp builds (same base version) `bug-unconfirmed` 💬5
- [#31056](https://github.com/ggml-org/llama.cpp/issues/31056) Compile bug: error: class "ggml_cuda_graph" has no member "instance" `bug-unconfirmed` 💬3
- [#31052](https://github.com/ggml-org/llama.cpp/issues/31052) Eval bug: Running Flint (by Recursive) on GPU (Intel Iris Xe, Windows) using Vulkan, shows ErrorOutOfDeviceMemory even though memory is available `bug-unconfirmed` 💬1
- [#31023](https://github.com/ggml-org/llama.cpp/issues/31023) Compile bug: SYCL build fails on Windows and Linux: missing device argument in can_use_mul_mat_vec_q() `bug-unconfirmed` 💬1
- [#31029](https://github.com/ggml-org/llama.cpp/issues/31029) Misc. bug: SYCL bf conversion instruction not supported! Arrow Lake iGPU `bug-unconfirmed` 💬1
- [#31012](https://github.com/ggml-org/llama.cpp/issues/31012) Misc. bug: FP4 quantization should support round to even `bug-unconfirmed` 💬1
- [#31010](https://github.com/ggml-org/llama.cpp/issues/31010) Misc. bug: Incorrect conversion results found in ggml_fp32_to_ue4m3() `bug-unconfirmed` 💬1
- [#31064](https://github.com/ggml-org/llama.cpp/issues/31064) Eval bug: SYCL: Segmentation fault on oneAPI 2026.2.0 `bug-unconfirmed`
- [#31063](https://github.com/ggml-org/llama.cpp/issues/31063) Eval bug: minimax-m3: build_moe_ffn() drops the per-expert NVFP4 scale → garbled output (M3.1 Flash) `bug-unconfirmed`
- [#31057](https://github.com/ggml-org/llama.cpp/issues/31057) Misc. bug: jinja: Functionary v3.2 template errors with HTTP 500 (`selectattr: unknown test 'type'`) on `oneOf` params `bug-unconfirmed`
- [#31043](https://github.com/ggml-org/llama.cpp/issues/31043) Feature Request: Add SOTA on-device TTS model Phonon by Gradium `enhancement`
- [#31041](https://github.com/ggml-org/llama.cpp/issues/31041) Misc. bug: Llama delivered via one-line install script provided the Vulkan version instead of the CUDA version `bug-unconfirmed`
- [#31039](https://github.com/ggml-org/llama.cpp/issues/31039) [Bug] Bielik-1.5B-v3.0-Instruct Q8_0 generates only `0x1F` bytes on RK3588 (aarch64) — Q4_K_M works, other Q8_0 models work
- [#31033](https://github.com/ggml-org/llama.cpp/issues/31033) Compile bug: SYCL AOT build for mtl-m (Xe-LPG) fails: `dpas.nosrc0` intrinsic not supported, introduced by d81d0d8fb `bug-unconfirmed`

#### 🔒 Closed Issues
- [#26447](https://github.com/ggml-org/llama.cpp/issues/26447) Eval bug: Running large models on Vega 8 iGPU with Vulkan errors `vk::Queue::submit: ErrorDeviceLost` after ~ 50K context size
- [#27168](https://github.com/ggml-org/llama.cpp/issues/27168) SYCL/OpenCL: ur_die 'Experimental P2P feature is not implemented for OpenCL adapter' in dev2dev_memcpy on multi-GPU Arc
- [#27296](https://github.com/ggml-org/llama.cpp/issues/27296) Eval bug: MTP breaks long/short inference?
- [#27351](https://github.com/ggml-org/llama.cpp/issues/27351) Misc. bug: llama-server in router mode can spawn child processes also in router mode
- [#28565](https://github.com/ggml-org/llama.cpp/issues/28565) Feature Request: Metal backend: use multiple physical GPUs (eGPU + dGPU) on Intel Macs
- [#31056](https://github.com/ggml-org/llama.cpp/issues/31056) Compile bug: error: class "ggml_cuda_graph" has no member "instance"
- [#27802](https://github.com/ggml-org/llama.cpp/issues/27802) Misc. bug: Qwen3.8 coverstaion/quantization issue?
- [#30839](https://github.com/ggml-org/llama.cpp/issues/30839) Compile bug: Fail to build with mma.cuh:1424 v0.7.0 gfx1151
- [#31023](https://github.com/ggml-org/llama.cpp/issues/31023) Compile bug: SYCL build fails on Windows and Linux: missing device argument in can_use_mul_mat_vec_q()
- [#30987](https://github.com/ggml-org/llama.cpp/issues/30987) Misc. bug: increasing -ncmoe!!! (or putting cmoe) leads to OOM on GPU

### Ollama (`ollama/ollama`)

**Stars:** 184,494 · **Open issues:** 4,403 · **Last push:** 2h ago

On October 24, 2026, Ollama released version v0.40.11, which introduced important changes including the preservation of literal function closing tags in parameters and allowed for an empty state in vllm-d3. Additionally, the updated launch functionality for OpenCode utilized an allocated context, and "llama.cpp" was bumped to version b11845. Merged features included the addition of a voice catalog for Phonon and updates to gemma renderers, enhancing user interaction. A notable new issue emerged regarding the need to add an OLLAMA_API_KEY for local deployment, highlighting an ongoing challenge for users aiming to implement authorization smoothly.

#### 🚀 New Releases
- [v0.40.11-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.11-rc0) v0.40.11
- [v0.40.10](https://github.com/ollama/ollama/releases/tag/v0.40.10) v0.40.10

#### ✅ Merged PRs
- [#19242](https://github.com/ollama/ollama/pull/19242) voice: add voice catalog for Phonon
- [#19234](https://github.com/ollama/ollama/pull/19234) mlxrunner: spell out symbols, numbers and links for Phonon
- [#19250](https://github.com/ollama/ollama/pull/19250) llama.cpp: version bump b11845
- [#19173](https://github.com/ollama/ollama/pull/19173) decision: allow empty state for vllm-d3
- [#19193](https://github.com/ollama/ollama/pull/19193) launch: use allocated context for OpenCode
- [#19228](https://github.com/ollama/ollama/pull/19228) qwen3coder: preserve literal function closing tags in parameters
- [#19241](https://github.com/ollama/ollama/pull/19241) Update gemma renderers

#### 🐛 New Issues
- [#19235](https://github.com/ollama/ollama/issues/19235) install.sh calling sudo immediately after download forces user to be present at download completion `bug` 💬1
- [#19238](https://github.com/ollama/ollama/issues/19238) Need to add OLLAMA_API_KEY for local deployment of Olama for authorization [very important] `feature request` 💬1
- [#19254](https://github.com/ollama/ollama/issues/19254) flint:40b-a2b-gguf-nvfp4 MLX is slower than flint:40b-a2b-qat-int4 on Apple silicon `bug`
- [#19249](https://github.com/ollama/ollama/issues/19249) claude code auto compress fails with "deepseek-v4.1-flash:1017-cloud" `bug`
- [#19245](https://github.com/ollama/ollama/issues/19245) Scheduler stalls: runner marked "expire immediately" for eviction never unloads while other clients keep using it (keep_alive overrides the eviction)
- [#19232](https://github.com/ollama/ollama/issues/19232) Plz add Ollama set nothink in the UI `feature request`

#### 🔒 Closed Issues
- [#19172](https://github.com/ollama/ollama/issues/19172) ollama launch opencode not using actual context window size
- [#19238](https://github.com/ollama/ollama/issues/19238) Need to add OLLAMA_API_KEY for local deployment of Olama for authorization [very important]
- [#19160](https://github.com/ollama/ollama/issues/19160) /v1/systemone rejects an empty state for vllm-d3 pairwise questions
- [#19245](https://github.com/ollama/ollama/issues/19245) Scheduler stalls: runner marked "expire immediately" for eviction never unloads while other clients keep using it (keep_alive overrides the eviction)
- [#19232](https://github.com/ollama/ollama/issues/19232) Plz add Ollama set nothink in the UI

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,924 · **Open issues:** 5,644 · **Last push:** <1h ago

On October 24, 2026, LiteLLM saw routine maintenance with the release of version 1.106.3 and updates to several previous stable versions, addressing various stability and functionality issues. Among the notable merged pull requests, key features include the addition of `LITELLM_OFFLINE_MODE` to enhance operation under offline circumstances, and various sorting enhancements in the UI, such as sorting budgets by reset duration and organizing teams and user tables by their respective data columns. Significant fixes were made to address issues related to AWS Polly, Azure AI, and the proxy system, ensuring smoother operations across multiple services. Additionally, a new bug was reported regarding Bedrock logging requests which were inaccurately recorded with $0 spend, highlighting a critical area for future attention.

#### ✅ Merged PRs
- [#47963](https://github.com/BerriAI/litellm/pull/47963) fix(aws_polly): read the engine from the bare model name
- [#48121](https://github.com/BerriAI/litellm/pull/48121) fix(opencode): forward stable sessions automatically across inference routes
- [#48096](https://github.com/BerriAI/litellm/pull/48096) feat(proxy): add LITELLM_OFFLINE_MODE, one switch for the fetches LiteLLM makes on its own
- [#48033](https://github.com/BerriAI/litellm/pull/48033) fix(azure_ai): forward the thinking-binding-controls beta header to Foundry
- [#47848](https://github.com/BerriAI/litellm/pull/47848) fix(proxy): record spend_logs_metadata on /interactions
- [#48107](https://github.com/BerriAI/litellm/pull/48107) feat(ui): sort budgets by reset duration
- [#48109](https://github.com/BerriAI/litellm/pull/48109) feat(ui): sort every teams table data column
- [#48078](https://github.com/BerriAI/litellm/pull/48078) chore(release): backport #47670, #47969, #48055, #48103, #48110 to stable/1.106.x and cut 1.106.3
- [#48075](https://github.com/BerriAI/litellm/pull/48075) chore(release): backport #42431, #47670, #47969, #48055, #48103, #48110 to stable/1.103.x and cut 1.103.8
- [#48077](https://github.com/BerriAI/litellm/pull/48077) chore(release): backport #44345, #47670, #47969, #48055, #48103, #48110 to stable/1.105.x and cut 1.105.4
- [#48076](https://github.com/BerriAI/litellm/pull/48076) chore(release): backport #44345, #47670, #47969, #48055, #48103, #48110 to stable/1.104.x
- [#48105](https://github.com/BerriAI/litellm/pull/48105) feat(ui): sort every users table data column
- [#48032](https://github.com/BerriAI/litellm/pull/48032) fix(azure_ai): drop tool_reference parts from tool messages on chat
- [#48106](https://github.com/BerriAI/litellm/pull/48106) feat(ui): sort every organizations table data column
- [#48074](https://github.com/BerriAI/litellm/pull/48074) feat(ui): sort virtual keys by expiry, activity, spend and limits
- [#48081](https://github.com/BerriAI/litellm/pull/48081) fix(ui): make pass-through headers optional and align authentication
- [#48110](https://github.com/BerriAI/litellm/pull/48110) build(deps): bump mlflow, pypdf and setuptools to clear osv-scan
- [#47623](https://github.com/BerriAI/litellm/pull/47623) fix(cost-map): rolling registry audit, add elevenlabs api rates, together minimax-m3.1-flash, mistral voxtral 3 and azure_ai phi-4 dates
- [#48097](https://github.com/BerriAI/litellm/pull/48097) fix(sso): enforce free user admission without locking out existing users
- [#48085](https://github.com/BerriAI/litellm/pull/48085) chore(cost-map): add Llama 4 Batch rates to vertex_ai scout 128e and maverick 16e maas
- [#48103](https://github.com/BerriAI/litellm/pull/48103) chore(signing): rotate the cosign image-signing key
- [#48101](https://github.com/BerriAI/litellm/pull/48101) chore(codeowners): add joshua-berri as a code owner of the model cost map
- [#47847](https://github.com/BerriAI/litellm/pull/47847) fix(vertex-ai): add deprecation_date to retired veo-2.0-generate-001
- [#48065](https://github.com/BerriAI/litellm/pull/48065) feat(proxy): add LITELLM_DISABLE_LATEST_RELEASE_CHECK to stop the release check
- [#47979](https://github.com/BerriAI/litellm/pull/47979) feat(proxy): expose wildcard model listings in general settings
- [#47969](https://github.com/BerriAI/litellm/pull/47969) fix(security): update bundled CA roots and preserve Prisma image compatibility
- [#48066](https://github.com/BerriAI/litellm/pull/48066) chore(cost-map): update openai gpt-6-luna decisions cache rates from the decisions guide
- [#47998](https://github.com/BerriAI/litellm/pull/47998) fix(proxy): take the upgrade notice from the changelog instead of GitHub releases
- [#48002](https://github.com/BerriAI/litellm/pull/48002) test(interactions): read the spec from a vendored snapshot and canary the live one daily
- [#47954](https://github.com/BerriAI/litellm/pull/47954) fix: recognize OpenAI context_length_exceeded errors
- [#43624](https://github.com/BerriAI/litellm/pull/43624) feat(proxy): model_list_return_wildcard_routes setting for /v1/models

#### 🐛 New Issues
- [#48045](https://github.com/BerriAI/litellm/issues/48045) [Bug]: Bedrock claude_platform/ requests are logged with $0 spend `bug` `llm translation` 💬3
- [#47988](https://github.com/BerriAI/litellm/issues/47988) [Bug]: MCPJWTSigner overwrites a server's configured `auth_value` (bearer_token etc.), so keyed MCP servers get 401 💬2
- [#48072](https://github.com/BerriAI/litellm/issues/48072) [Bug]: No api_base produces a valid Azure Responses URL behind a path prefix `bug` `llm translation` 💬1
- [#48090](https://github.com/BerriAI/litellm/issues/48090) [Bug]: MCP OAuth login loses return_to continuation and leaves native client callback waiting `claude code` 💬1
- [#48005](https://github.com/BerriAI/litellm/issues/48005) [Bug]: Team-level logging settings never run for /v1beta/models/{model}:generateContent on non-Gemini deployments `llm translation` 💬1
- [#48007](https://github.com/BerriAI/litellm/issues/48007) [Bug]: Content filter streamed generic_api_key is missed when a long whitespace run separates the label from the key `bug` `llm translation` 💬1
- [#48038](https://github.com/BerriAI/litellm/issues/48038) [Feature]: record which provider served an OpenRouter request, next to its reported cost
- [#48030](https://github.com/BerriAI/litellm/issues/48030) [Bug]: Guardrails skip reasoning_content of assistant messages on /v1/chat/completions `llm translation`
- [#48029](https://github.com/BerriAI/litellm/issues/48029) [Bug]: Presidio output_parse_pii restores a placeholder that was already in the request to an unrelated value `llm translation`
- [#48011](https://github.com/BerriAI/litellm/issues/48011) [Feature]: Add Terraform support for managing LiteLLM tool sets `enhancement`
- [#48010](https://github.com/BerriAI/litellm/issues/48010) [Bug]: Config-defined pass-through endpoints buffer the full response body without a limit, which OOM-kills the proxy with Codex image generation `bug` `llm translation`
- [#48009](https://github.com/BerriAI/litellm/issues/48009) [Bug]: main lockfiles fail OSV and need a canonical dependency update
- [#48006](https://github.com/BerriAI/litellm/issues/48006) [Bug]: generic_api callback loses queued events on stable releases (fixed on main only), and drops a batch whose send failed

#### 🔒 Closed Issues
- [#39503](https://github.com/BerriAI/litellm/issues/39503) Send x-opencode-session header on API requests (required by OpenCode Go from 09/05)
- [#30425](https://github.com/BerriAI/litellm/issues/30425) [Bug]: Failed to import Prisma client
- [#25628](https://github.com/BerriAI/litellm/issues/25628) [Bug]: langfuse_otel callback logs raw upstream model name instead of proxy alias for streaming requests
- [#31909](https://github.com/BerriAI/litellm/issues/31909) [Bug]: mcp_semantic_tool_filter strips ALL tools (N->0) for standard nested chat/completions tool format — _extract_tool_info only reads top-level name
- [#33492](https://github.com/BerriAI/litellm/issues/33492) [Bug] OpenAPI Spec converted MCP cannot forward extra_headers to upstream backend API in v1.91.0
- [#46466](https://github.com/BerriAI/litellm/issues/46466) [Feature]: Add a way to stop the proxy from calling remote LiteLLM / GitHub services, for deployments that are air-gapped, egress-restricted, or simply don't want the proxy phoning out.
- [#26424](https://github.com/BerriAI/litellm/issues/26424) auth_exception_handler logs 401/403 permission denials at ERROR level with full traceback (should be WARNING)
- [#33671](https://github.com/BerriAI/litellm/issues/33671) [Bug]: [Bug]: Standalone Bedrock Guardrails integration never sends AWS's "trace" param — zero guardrail assessment detail in AWS-side logs
- [#47841](https://github.com/BerriAI/litellm/issues/47841) [Bug]: spend_logs_metadata is never recorded for /v1beta/interactions
- [#46076](https://github.com/BerriAI/litellm/issues/46076) [Bug]: Management endpoints return raw database exception text in 500 responses
- [#47946](https://github.com/BerriAI/litellm/issues/47946) [Bug]: Non-streamed /v1/messages response has no `stop_sequence` key unless a stop sequence fired (hosted_vllm)
- [#47382](https://github.com/BerriAI/litellm/issues/47382) [Bug]: Bedrock /v1/messages: claude-opus-5-5 rejects thinking.type=enabled, no adaptive translation and output_config is stripped
- [#33281](https://github.com/BerriAI/litellm/issues/33281) [Bug]: Bedrock guardrailConfig silently drops cache_control on trailing user messages (breaks prompt caching)
- [#33688](https://github.com/BerriAI/litellm/issues/33688) [Bug]: prompt_tokens/completion_tokens missing from logged usage on non-streaming /v1/responses calls
- [#47536](https://github.com/BerriAI/litellm/issues/47536) [Bug]: Decisions API should not hardcode an arbitrary 128-question limit
- [#33663](https://github.com/BerriAI/litellm/issues/33663) [Bug]: spend_logs_metadata set on an organization is silently ignored (only key and team levels are merged)
- [#33666](https://github.com/BerriAI/litellm/issues/33666) [Bug]: Responses API previous_response_id session reconstruction runs an unbounded SELECT * over LiteLLM_SpendLogs (query-engine OOM)
- [#33779](https://github.com/BerriAI/litellm/issues/33779) [Bug]: Exception when Using Codex CLI connect to Nvidia NIM Model nemotron-3-ultra-550b-a55b
- [#48072](https://github.com/BerriAI/litellm/issues/48072) [Bug]: No api_base produces a valid Azure Responses URL behind a path prefix
- [#47975](https://github.com/BerriAI/litellm/issues/47975) [Bug]: /v1/realtime with Gemini Live stalls after the first output_audio_transcript.delta when the turn is triggered by streamed audio (text-triggered turns work)
- [#46853](https://github.com/BerriAI/litellm/issues/46853) [Bug]: free tier SSO lets a 6th user in, then locks out every SSO user including admins
- [#47953](https://github.com/BerriAI/litellm/issues/47953) [Bug]: Streamed /v1/completions without `stream_options` puts `"usage": {0, 0, 0}` on every chunk

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,486 · **Open issues:** 388 · **Last push:** <1h ago

On October 24, 2026, Unsloth released version v0.1.910-beta, introducing MOSS-Image, Flint, and NVIDIA Bolt E4B, along with a chat-only Unsloth Desktop install, MLX MoE models that exceed Mac memory limits, and a new OpenAI-compatible fine-tuning API. Noteworthy merged pull requests included updates to FSDP2 for optimized gradient accumulation and checkpoint recomputation, enhancements to image generation in Unsloth Studio, and improved routing for Apple Silicon image requests. Among the new issues, the bug related to text generation failures with the MiniCPM-V-4.7-1B Vulkan backend stands out, highlighting ongoing challenges in model performance.

#### 🚀 New Releases
- [v0.1.910-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.910-beta) MOSS-Image, Flint & NVIDIA Bolt E4B

#### ✅ Merged PRs
- [#15023](https://github.com/unslothai/unsloth/pull/15023) FSDP2 native: fewer collectives under gradient accumulation and checkpoint recompute
- [#15052](https://github.com/unslothai/unsloth/pull/15052) Decode LoRA cast cache: refresh after fused optimizer steps
- [#15049](https://github.com/unslothai/unsloth/pull/15049) FSDP2 optimizer_cls test: follow #15008, which keeps bitsandbytes Adam / AdamW on local shards
- [#15044](https://github.com/unslothai/unsloth/pull/15044) Block compile: keep a caller's flex BACKEND instead of adding FORCE_USE_FLEX_ATTENTION
- [#15036](https://github.com/unslothai/unsloth/pull/15036) Studio: return a video render's pinned host memory to the driver at render end
- [#14845](https://github.com/unslothai/unsloth/pull/14845) Unsloth Studio / Desktop: remember the text encoder and VAE files per image model
- [#14816](https://github.com/unslothai/unsloth/pull/14816) Unsloth Studio / Desktop: image generation ignores the VRAM Budget setting when planning offload
- [#15008](https://github.com/unslothai/unsloth/pull/15008) FSDP2: keep bitsandbytes 8-bit AdamW state by stepping the local shards
- [#15040](https://github.com/unslothai/unsloth/pull/15040) Name the encoding on two more diffusion.py reads in test_diffusion_zimage_cfg_split
- [#14883](https://github.com/unslothai/unsloth/pull/14883) Studio: route Apple Silicon image requests to the MLX engine by default, diffusers MPS for the rest
- [#15011](https://github.com/unslothai/unsloth/pull/15011) FSDP2 QLoRA: reuse the planned NF4 dequant launch for all-gathered weights
- [#15035](https://github.com/unslothai/unsloth/pull/15035) Studio diffusion: correct the fused RMSNorm accuracy notes
- [#15032](https://github.com/unslothai/unsloth/pull/15032) Settings tabs smoke: hold the shortcut recorder box before pressing Backspace
- [#15001](https://github.com/unslothai/unsloth/pull/15001) Keep frozen load_in_fp8 weights out of FSDP2 sharding and the DDP broadcast
- [#15007](https://github.com/unslothai/unsloth/pull/15007) Opt-in torchao float8 training for full finetuning
- [#14964](https://github.com/unslothai/unsloth/pull/14964) Studio diffusion: record CUDA graphs thread-locally and keep other threads' syncs out of a recording
- [#14996](https://github.com/unslothai/unsloth/pull/14996) Native FSDP2 float16: skip the step when every rank overflows under fused AdamW
- [#14616](https://github.com/unslothai/unsloth/pull/14616) Studio Images: Detailer (face fix) pass with SAM 3 and inpaint
- [#14955](https://github.com/unslothai/unsloth/pull/14955) Studio: keep the Z-Image CFG split on when group offload leaves every group resident
- [#15031](https://github.com/unslothai/unsloth/pull/15031) Scan baseline: re-review the eight unsloth-zoo sites 2026.10.8 moved
- [#15010](https://github.com/unslothai/unsloth/pull/15010) SFT: keep the router aux loss off for single-expert configs (Jamba)
- [#15006](https://github.com/unslothai/unsloth/pull/15006) Studio Images: decide VAE tiling at the decode and stream resident groups there, so offloaded edits decode untiled
- [#15009](https://github.com/unslothai/unsloth/pull/15009) Compiled blocks: keep the xformers stand-in SDPA off cuDNN attention
- [#14998](https://github.com/unslothai/unsloth/pull/14998) Block compile: router_logits capture no longer recompiles every layer
- [#14973](https://github.com/unslothai/unsloth/pull/14973) Native FSDP2: faster native_clip_grad_norm_ that follows torch clip_grad_norm_ dtypes
- [#14988](https://github.com/unslothai/unsloth/pull/14988) Studio diffusion: route untuned archs (sm86 / 90 / 100 / 121) onto the factored ConvRot kernel behind a probe and latency check
- [#15020](https://github.com/unslothai/unsloth/pull/15020) MLX backend tests: stub zoo's new fused_drafter_ops
- [#15018](https://github.com/unslothai/unsloth/pull/15018) Name the encoding on the trainer.py read in test_pretokenized_dataset
- [#14859](https://github.com/unslothai/unsloth/pull/14859) Studio sd.cpp: pass --conv-direct off when Studio's policy keeps direct convolution off
- [#15017](https://github.com/unslothai/unsloth/pull/15017) Check the GGUF load marker on load_model through the AST
- [#14874](https://github.com/unslothai/unsloth/pull/14874) Studio MLX images: a LoRA load keeps sd.cpp or diffusers instead of routing into the MLX refusal
- [#14954](https://github.com/unslothai/unsloth/pull/14954) Studio: run the Qwen-Image-2.1 CFG branch on the replica with its own prefix KV cache
- [#14983](https://github.com/unslothai/unsloth/pull/14983) Studio sd.cpp: route all-Q8_0 image GGUFs to BF16 cuBLAS, keep k-quants on MMQ
- [#14979](https://github.com/unslothai/unsloth/pull/14979) Studio diffusion: learned peaks per render phase, so later loads keep text encoders resident
- [#15013](https://github.com/unslothai/unsloth/pull/15013) Agent guides CI: resolve the newest Node 24 for the openclaw legs
- [#15015](https://github.com/unslothai/unsloth/pull/15015) Pin CUDA availability in the step graph capture-stream release test
- [#14982](https://github.com/unslothai/unsloth/pull/14982) Studio diffusion: cut the int8 ConvRot overhead (one rotation per shared input, SwiGLU fused into the down quant, factored rotation kernel)
- [#14765](https://github.com/unslothai/unsloth/pull/14765) Studio diffusion: block-offload re-pins land at the addresses the step graph recorded
- [#14975](https://github.com/unslothai/unsloth/pull/14975) Studio diffusion: cap the prefetcher's pinned staging so guided Z-Image-Turbo renders on a 31 GB host (Kaggle T4x2)
- [#14904](https://github.com/unslothai/unsloth/pull/14904) Studio Flows: open a flow as an app, Run Flow blocks, and per-block output history with pins
- [#14181](https://github.com/unslothai/unsloth/pull/14181) Studio: import and export skills as a ZIP from the Skills dialog
- [#14899](https://github.com/unslothai/unsloth/pull/14899) Studio Flows: drop files on the canvas, a block toolbar, and image and video edit blocks
- [#14884](https://github.com/unslothai/unsloth/pull/14884) Studio: truncate completion_mask / assistant_masks with pre-tokenized input_ids
- [#14986](https://github.com/unslothai/unsloth/pull/14986) Studio video: MiniMax-H3 fused VAE decoder follows the mixed-precision load, and encode overlaps decode
- [#14946](https://github.com/unslothai/unsloth/pull/14946) Studio diffusion: fp32 VAE upcasts keep the offloaded VAE's pinned host weights (SDXL-class force_upcast VAEs)
- [#14951](https://github.com/unslothai/unsloth/pull/14951) Studio diffusion: fixed 2 GiB discrete-card reserve (ComfyUI-style fixed reserve plus activation estimate)
- [#14910](https://github.com/unslothai/unsloth/pull/14910) get_peft_model: pass a scalar layers_to_transform to PEFT as a list
- [#14992](https://github.com/unslothai/unsloth/pull/14992) FP8 block dequant on ROCm: round fp32 to fp16 with integer ops
- [#14937](https://github.com/unslothai/unsloth/pull/14937) Studio video: keep per-request residency fitting after the stream step graph is dropped (Wan2.2-TI2V-5B at 8 / 12 GB)
- [#15003](https://github.com/unslothai/unsloth/pull/15003) Repair two more backend checks red on main
- [#14991](https://github.com/unslothai/unsloth/pull/14991) Repair four checks red on main
- [#14950](https://github.com/unslothai/unsloth/pull/14950) Studio diffusion: measured activation rows for MOSS-Image and FLUX.3 Klein base; layer split prices Z-Image from its measured row
- [#14941](https://github.com/unslothai/unsloth/pull/14941) Studio: use the MPS SDPA prefill kernel per call on torch 2.13+
- [#14902](https://github.com/unslothai/unsloth/pull/14902) Studio Flows: owner-approved Python, HTTP Request, schedule and webhook triggers
- [#14997](https://github.com/unslothai/unsloth/pull/14997) Format unsloth/models/speculative.py
- [#14892](https://github.com/unslothai/unsloth/pull/14892) Studio Flows: LoRA, sampler, hires, mask and ControlNet controls, plus Find Mask, Extend Canvas and Join Videos
- [#14990](https://github.com/unslothai/unsloth/pull/14990) Fix test_every_resolver_probe_forwards_the_trust_decision on main
- [#14912](https://github.com/unslothai/unsloth/pull/14912) MTP: keep the trained head when saving a named PEFT adapter
- [#14995](https://github.com/unslothai/unsloth/pull/14995) Repair the studio-install checks red on main
- [#14944](https://github.com/unslothai/unsloth/pull/14944) Studio Flows: Generative Agents village life for worlds, with the Smallville Lite example
- [#14940](https://github.com/unslothai/unsloth/pull/14940) Studio: synchronise VAE decode and encode calls on Apple MPS
- [#14905](https://github.com/unslothai/unsloth/pull/14905) Studio Flows: memory stream blocks after Generative Agents (Remember, Recall, Reflect, Plan)
- [#14898](https://github.com/unslothai/unsloth/pull/14898) Studio Flows: data transforms, documents and local knowledge-base blocks
- [#14897](https://github.com/unslothai/unsloth/pull/14897) Studio Flows: Agent, Classify and Extract blocks, and a chat player, on local models
- [#14891](https://github.com/unslothai/unsloth/pull/14891) Studio Flows: Data Recipe datasets keep their parquet, take a seed, and convert to column graphs
- [#14994](https://github.com/unslothai/unsloth/pull/14994) Bump install.sh / install.ps1 pins to unsloth>=2026.10.8, unsloth-zoo>=2026.10.8
- [#14889](https://github.com/unslothai/unsloth/pull/14889) Studio Flows: job polling, partial outputs, load settings, bindable params and a GPU lease
- [#14546](https://github.com/unslothai/unsloth/pull/14546) Studio: cancel + bound conversation-archive embeddings before inference (#14519)
- [#14974](https://github.com/unslothai/unsloth/pull/14974) fix(studio): use the target's embedded MTP head when the MLX checkpoint keeps it under the language model
- [#14960](https://github.com/unslothai/unsloth/pull/14960) Fix QLoRA on WavLM: keep its attention projections out of 4-bit
- [#14868](https://github.com/unslothai/unsloth/pull/14868) Studio: split Z-Image guided steps only while the denoiser is compiled or replaying graphs
- [#14856](https://github.com/unslothai/unsloth/pull/14856) Windows: read safetensors shards with pread on transformers 5.0 - 5.16
- [#14514](https://github.com/unslothai/unsloth/pull/14514) Studio: fix host memory checks and improve logging for GGUF image loads
- [#14847](https://github.com/unslothai/unsloth/pull/14847) Studio sd.cpp: keep sd.cpp's all-CPU thread count on small SMT hosts nothing restricts
- [#14799](https://github.com/unslothai/unsloth/pull/14799) Studio: refuse to start Claude Code or OpenCode on a context too small for their own prompt
- [#14893](https://github.com/unslothai/unsloth/pull/14893) Studio Flows: Unsloth notebooks as flows, a static notebook importer, and wider Fine-tune settings
- [#14890](https://github.com/unslothai/unsloth/pull/14890) Studio Flows: table, chart, heatmap and tensor values with viewers, plus table blocks
- [#14731](https://github.com/unslothai/unsloth/pull/14731) Studio: keep turns an external provider's compaction drops searchable
- [#14308](https://github.com/unslothai/unsloth/pull/14308) Studio: let HTTP/SSE MCP tool calls run for the whole Max Tool Call Duration
- [#14915](https://github.com/unslothai/unsloth/pull/14915) Studio diffusion: record each card's CUDA graphs on its own capture stream, so compiled renders on a second GPU are correct
- [#14943](https://github.com/unslothai/unsloth/pull/14943) Studio Flows: Ren'Py-style stage directions, expression portraits, transitions and sound cues
- [#14966](https://github.com/unslothai/unsloth/pull/14966) Studio: dataset image guard keeps owner flows working (opt-in, WSL paths, unencoded spaces)
- [#14969](https://github.com/unslothai/unsloth/pull/14969) FP8 e4m3fn scale dequant: pass enable_fp_fusion like every other launch
- [#14961](https://github.com/unslothai/unsloth/pull/14961) Tests: stub _unmerge_flags_on_error in the merged hub destination harness
- [#14877](https://github.com/unslothai/unsloth/pull/14877) Studio: show when a chat is waiting for tool approval
- [#14918](https://github.com/unslothai/unsloth/pull/14918) Studio diffusion: CFG-parallel router keeps the wrapped forward's signature (FLUX.3 under CFG-parallel)
- [#14681](https://github.com/unslothai/unsloth/pull/14681) Unsloth Studio: browser use fixes and clearer agent progress
- [#14815](https://github.com/unslothai/unsloth/pull/14815) Studio: stop the macOS desktop app typing stray control characters for unhandled keys
- [#14977](https://github.com/unslothai/unsloth/pull/14977) Studio: attach duplicate-named text files like LICENSE(1), and say why a file can't be attached
- [#14945](https://github.com/unslothai/unsloth/pull/14945) Load and QLoRA-train Moonshine Streaming checkpoints
- [#14980](https://github.com/unslothai/unsloth/pull/14980) Studio: trim file toolbar comments
- [#14976](https://github.com/unslothai/unsloth/pull/14976) Studio: drop file toolbar controls that repeat a visible button
- [#14901](https://github.com/unslothai/unsloth/pull/14901) Studio: keep renamed audio.cpp options at generation time
- [#14978](https://github.com/unslothai/unsloth/pull/14978) Pin FastFlowLM v1.0.10
- [#14967](https://github.com/unslothai/unsloth/pull/14967) Studio: remove unused image assets
- [#14972](https://github.com/unslothai/unsloth/pull/14972) Studio: no divider above the Live monitor's Detailed view row
- [#14914](https://github.com/unslothai/unsloth/pull/14914) Studio: simpler API usage examples, and no Pi / Mistral Vibe outbound links
- [#14814](https://github.com/unslothai/unsloth/pull/14814) Studio: give Intel XPU Triton a working C++ toolchain on Windows
- [#14938](https://github.com/unslothai/unsloth/pull/14938) Studio: neutral grey tints instead of green ones
- [#14917](https://github.com/unslothai/unsloth/pull/14917) Studio diffusion: report the split's primary card as the execution device for diffusers ModularPipeline (FLUX.3 on two cards)
- [#14965](https://github.com/unslothai/unsloth/pull/14965) Studio: tidy the Logs viewer and let it resize
- [#14971](https://github.com/unslothai/unsloth/pull/14971) CI: skip Windows, macOS and Tauri jobs on draft pull requests
- [#14718](https://github.com/unslothai/unsloth/pull/14718) Fix centering of audio and music results
- [#14933](https://github.com/unslothai/unsloth/pull/14933) Studio (AMD Linux): keep the bundled ROCm runtime when the system ROCm prepend hides the GPU
- [#14686](https://github.com/unslothai/unsloth/pull/14686) Installer (Windows): fall back to the python-build-standalone mirror for uv-managed Python
- [#14687](https://github.com/unslothai/unsloth/pull/14687) Studio setup: keep the extension-free mamba-ssm in the stale kernel check
- [#14685](https://github.com/unslothai/unsloth/pull/14685) Studio: keep causal-conv1d for Qwen3.5 / Qwen3-Next remote implementations
- [#14684](https://github.com/unslothai/unsloth/pull/14684) Studio (Windows): pair a kept torch 2.12 with triton-windows 3.7
- [#14722](https://github.com/unslothai/unsloth/pull/14722) fix(export): pass trust_remote_code for checkpoint exports
- [#14265](https://github.com/unslothai/unsloth/pull/14265) Studio: reuse Model Hub filter metadata between searches
- [#14953](https://github.com/unslothai/unsloth/pull/14953) CodeQL: run weekly and on dispatch only
- [#14963](https://github.com/unslothai/unsloth/pull/14963) Format dataset_media.py, merged without the repo formatter in #14840
- [#14952](https://github.com/unslothai/unsloth/pull/14952) Check the weight index of dot-named Sentence Transformers module folders
- [#14957](https://github.com/unslothai/unsloth/pull/14957) Tests: follow the radius scale in the titlebar and remote access contracts
- [#14840](https://github.com/unslothai/unsloth/pull/14840) Studio: pin managed dataset media URLs to the Hub and scope extracted archive members
- [#14805](https://github.com/unslothai/unsloth/pull/14805) Attention: keep packed fp32 on one xformers call, read the fp32 downcast from Q's device
- [#14942](https://github.com/unslothai/unsloth/pull/14942) DiffusionGemma: build the prefix cache per DataParallel replica
- [#14934](https://github.com/unslothai/unsloth/pull/14934) Studio: raise the chat template limit from 64 KiB to 512 KiB
- [#14671](https://github.com/unslothai/unsloth/pull/14671) Fix delayed playback of generated audio
- [#14810](https://github.com/unslothai/unsloth/pull/14810) Keep HTML previews visible when requesting edits
- [#14768](https://github.com/unslothai/unsloth/pull/14768) Studio: preserve conversation archive order for turns with attachments
- [#14919](https://github.com/unslothai/unsloth/pull/14919) Studio: one fixed radius scale, applied to the shared primitives
- [#14568](https://github.com/unslothai/unsloth/pull/14568) Studio chat: go back to a chat's model when it is still loaded
- [#14947](https://github.com/unslothai/unsloth/pull/14947) FP8 gfx11 byte decoder: tighten comments from #14936
- [#14925](https://github.com/unslothai/unsloth/pull/14925) Studio: one-line command and URL boxes are pills
- [#14924](https://github.com/unslothai/unsloth/pull/14924) Studio: filled borderless buttons
- [#14923](https://github.com/unslothai/unsloth/pull/14923) Studio: radius scale in Recipe Studio, Studio, Audio and the remaining pages
- [#14922](https://github.com/unslothai/unsloth/pull/14922) Studio: radius scale in the Hub, model picker, Images and Video
- [#14921](https://github.com/unslothai/unsloth/pull/14921) Studio: radius scale in Settings, Profile and Library
- [#14920](https://github.com/unslothai/unsloth/pull/14920) Studio: radius scale in chat, browser and shared components
- [#14515](https://github.com/unslothai/unsloth/pull/14515) Studio: save sampling defaults per model and use them for API requests
- [#14935](https://github.com/unslothai/unsloth/pull/14935) Studio: model picker hides empty uploads and fades models this device cannot run
- [#14936](https://github.com/unslothai/unsloth/pull/14936) FP8 block dequant on gfx11 ROCm: ragged / rectangular e4m3fn blocks take the byte decoder
- [#14824](https://github.com/unslothai/unsloth/pull/14824) Studio: gate saved Connection keys on a stamped key purpose, not the key name
- [#14928](https://github.com/unslothai/unsloth/pull/14928) Keep the checkpoint_skip_layers="auto" planner out of torch.compile regions
- [#14882](https://github.com/unslothai/unsloth/pull/14882) Native FSDP2: keep accelerate FSDP2 for custom Accelerator loops, support unsharded generation on torch 2.6 / 2.7
- [#14831](https://github.com/unslothai/unsloth/pull/14831) GRPO: sync LoRA weights to TRL's own vLLM engine on TRL < 0.28, refuse quantized bases
- [#14790](https://github.com/unslothai/unsloth/pull/14790) Large head attention: keep CUDA graph capture off the mask scan and bound int32 row offsets
- [#14939](https://github.com/unslothai/unsloth/pull/14939) Studio: remove the New badge from the Browser settings tab
- [#14927](https://github.com/unslothai/unsloth/pull/14927) Studio: hover label on the composer + button
- [#14926](https://github.com/unslothai/unsloth/pull/14926) Studio: steadier run settings controls, grey sliders, 18px thumbs
- [#14931](https://github.com/unslothai/unsloth/pull/14931) Studio: list imatrix-weighted quants named <model>-<QUANT>-imatrix.gguf
- [#14798](https://github.com/unslothai/unsloth/pull/14798) Studio: horizontally scroll long API usage examples
- [#14873](https://github.com/unslothai/unsloth/pull/14873) Studio Images: keep v-prediction detection on cache-only SDXL loads by remembering the online markers per snapshot
- [#14797](https://github.com/unslothai/unsloth/pull/14797) Studio: tell websites the macOS browser panel is Safari
- [#14894](https://github.com/unslothai/unsloth/pull/14894) Installers: pin uv 0.13.5 and replace uv older than 0.13.4 (emSign root)
- [#14930](https://github.com/unslothai/unsloth/pull/14930) Format four files merged without the repo formatter in #14913 and #14823
- [#14823](https://github.com/unslothai/unsloth/pull/14823) FSDP2 QLoRA merged saves: stage the packed 4-bit base on the CPU and merge one layer at a time
- [#14875](https://github.com/unslothai/unsloth/pull/14875) Studio Images: Compare grid counts Hires CFG when sending the negative prompt and records Hires settings
- [#14866](https://github.com/unslothai/unsloth/pull/14866) Studio diffusion: seed FLUX.2 klein residency from its measured peak on the first load
- [#14865](https://github.com/unslothai/unsloth/pull/14865) Studio video: fit per-request residency on the streaming tier and for HunyuanVideo-1.5
- [#14913](https://github.com/unslothai/unsloth/pull/14913) FP8 per-tensor / rowwise dequant under torch.compile below sm89: one opaque byte-decode op
- [#14476](https://github.com/unslothai/unsloth/pull/14476) Fetch get_statistics repos concurrently so from_pretrained does not wait on four HF round trips
- [#14869](https://github.com/unslothai/unsloth/pull/14869) Studio ROCm: keep stored flash-attention verdicts from recompiling per bucket, and gate the CFG replica too
- [#14908](https://github.com/unslothai/unsloth/pull/14908) Format two files merged without the repo formatter in #14769
- [#14870](https://github.com/unslothai/unsloth/pull/14870) Security audit: baseline the pandas 3.1.0 find_stack_level test
- [#14896](https://github.com/unslothai/unsloth/pull/14896) Studio: rework the keyboard shortcuts page
- [#14903](https://github.com/unslothai/unsloth/pull/14903) Tests: rewrite the remote_images import in the no-torch format_conversion harness
- [#14876](https://github.com/unslothai/unsloth/pull/14876) Studio Images: run ESRGAN upscalers through the spandrel descriptor
- [#14863](https://github.com/unslothai/unsloth/pull/14863) Studio Images: Hires fix latent upscale interpolates the base latents directly, as ComfyUI's LatentUpscale
- [#14740](https://github.com/unslothai/unsloth/pull/14740) gpt-oss bnb 4-bit: probe the checkpoint transformers loads and keep fused expert quant state on save
- [#14769](https://github.com/unslothai/unsloth/pull/14769) XPU bf16: judge the XPU in use, not every visible one
- [#14781](https://github.com/unslothai/unsloth/pull/14781) Load VibeVoice-ASR, MusicGen, Audio Flamingo 3 and Music Flamingo through FastModel
- [#14744](https://github.com/unslothai/unsloth/pull/14744) Fine-tune Whisper, Canary, Moonshine, CTC, audio classification, Dia and Higgs Audio through FastModel by default
- [#14716](https://github.com/unslothai/unsloth/pull/14716) Load Qwen3-ASR checkpoints saved in the qwen-asr package layout
- [#14729](https://github.com/unslothai/unsloth/pull/14729) Keep Gemma 3n AltUp coefficients out of on-the-fly 4-bit quantization
- [#14867](https://github.com/unslothai/unsloth/pull/14867) Studio diffusion: stop recording CUDA graphs once the VMM arena has failed, and detach it
- [#14860](https://github.com/unslothai/unsloth/pull/14860) Studio sd.cpp: stage server-mode image LoRAs as hard links so sd-server lists them
- [#14777](https://github.com/unslothai/unsloth/pull/14777) Studio diffusion: stop flushing the CUDA allocator on every prompt encode under block offload
- [#14552](https://github.com/unslothai/unsloth/pull/14552) Studio: MOSS-Image (in-tree port, quantised builds, GGUF through stable-diffusion.cpp)
- [#14888](https://github.com/unslothai/unsloth/pull/14888) Studio: install the dataset image URL guard when datasets loads, not at startup
- [#14842](https://github.com/unslothai/unsloth/pull/14842) Studio: use a cached earlier FLUX.3 upsampler quant when the default is missing
- [#14862](https://github.com/unslothai/unsloth/pull/14862) Studio sd.cpp: load a cached earlier text encoder quant when the BF16 default cannot be fetched
- [#14853](https://github.com/unslothai/unsloth/pull/14853) Studio NVFP4: tag the compile cache key with the one-pass activation quantiser so a warm cache cannot bypass its switch
- [#14885](https://github.com/unslothai/unsloth/pull/14885) Format two files merged without the repo formatter in #14821 and #14886
- [#14886](https://github.com/unslothai/unsloth/pull/14886) FP8 per-tensor / rowwise dequant: one Triton pass over the e4m3fn bytes
- [#14864](https://github.com/unslothai/unsloth/pull/14864) Studio diffusion: store request peaks for Wan pipelines with an empty transformer_2 slot so measured residency runs
- [#14887](https://github.com/unslothai/unsloth/pull/14887) Studio and Core: certifi 2026.10.19 and pip 26.2.2 floors (drop the compromised emSign root)
- [#14879](https://github.com/unslothai/unsloth/pull/14879) Desktop: reject the compromised eMudhra/emSign intermediates (rustls-webpki 0.103.16)
- [#14646](https://github.com/unslothai/unsloth/pull/14646) Studio: registered model folders and HF cache on /run/media drives stay silent for the owner
- [#14644](https://github.com/unslothai/unsloth/pull/14644) Studio: Data Recipe column names with a slash run again; the validator file name is made safe instead
- [#14643](https://github.com/unslothai/unsloth/pull/14643) Desktop: write the Windows login entry for the current user only
- [#14642](https://github.com/unslothai/unsloth/pull/14642) Studio: let the browser agent follow search-result redirect links shown on the page
- [#14641](https://github.com/unslothai/unsloth/pull/14641) install.sh: repair a stale ROCm-on-WSL drop-in without an interactive password prompt
- [#14543](https://github.com/unslothai/unsloth/pull/14543) Studio: approved host calls keep chat-installed packages, helper modules and CLIs
- [#14534](https://github.com/unslothai/unsloth/pull/14534) Studio: read every forwarded header field behind a trusted proxy
- [#14533](https://github.com/unslothai/unsloth/pull/14533) Studio: a managed account's own Hub token covers a resident loaded from the Hub cache
- [#14530](https://github.com/unslothai/unsloth/pull/14530) Studio: chat audio's librosa fallback refuses playlists too
- [#14529](https://github.com/unslothai/unsloth/pull/14529) Studio: refuse a chained dataset media path whose first hop is not an archive
- [#14526](https://github.com/unslothai/unsloth/pull/14526) Studio: a mermaid style statement after a semicolon or mid-line cannot fetch either
- [#14527](https://github.com/unslothai/unsloth/pull/14527) Studio: flag a modules.json folder of only dots and slashes that leaves the model
- [#14846](https://github.com/unslothai/unsloth/pull/14846) Studio diffusion: pool SDXL textual inversion prompts at EOS
- [#14820](https://github.com/unslothai/unsloth/pull/14820) Studio H3: let Auto residency see the card again on ROCm and NVIDIA without nvidia-smi
- [#14621](https://github.com/unslothai/unsloth/pull/14621) Studio diffusion: compile MiniMax-H3 with torchao float8 weights
- [#14871](https://github.com/unslothai/unsloth/pull/14871) Tests: name text encodings and gate CUDA skips on has_real_cuda
- [#14861](https://github.com/unslothai/unsloth/pull/14861) Studio: Install Training button in the Train hint and the Export banner
- [#14821](https://github.com/unslothai/unsloth/pull/14821) Studio diffusion: free the failed group offload setup before the OOM retry
- [#14872](https://github.com/unslothai/unsloth/pull/14872) Studio: account management needs a UI session
- [#14878](https://github.com/unslothai/unsloth/pull/14878) Format two files merged without the repo formatter in #14834 and #14819
- [#14849](https://github.com/unslothai/unsloth/pull/14849) Studio diffusion: latch the CFG-batch verdict per load and across processes so a seed keeps one path
- [#14855](https://github.com/unslothai/unsloth/pull/14855) Studio browser: keep a temporary chat's hidden pages out of history
- [#14837](https://github.com/unslothai/unsloth/pull/14837) Desktop: keep the environment when WEBKIT_DISABLE_COMPOSITING_MODE=0 leaves compositing on
- [#14834](https://github.com/unslothai/unsloth/pull/14834) Studio updater: install a matched unsloth + unsloth-zoo pair when the index lags
- [#14819](https://github.com/unslothai/unsloth/pull/14819) Studio: read the prequant source etag from the repo blob under the shared Hub blob store
- [#14851](https://github.com/unslothai/unsloth/pull/14851) Studio Images: run the Hires fix latent encode where an offloaded SDXL VAE computes
- [#14844](https://github.com/unslothai/unsloth/pull/14844) Studio diffusion: keep the CFG-parallel weight probe inside large inference weights
- [#14795](https://github.com/unslothai/unsloth/pull/14795) Studio MLX images: release MLX's buffer cache after each generation
- [#14700](https://github.com/unslothai/unsloth/pull/14700) GPT-OSS template: keep earlier answers on the final channel when the turn has thinking
- [#14701](https://github.com/unslothai/unsloth/pull/14701) Studio: fetch VLM dataset row image URLs through the SSRF-guarded fetch
- [#14705](https://github.com/unslothai/unsloth/pull/14705) Fix Gemma 4 E2B / E4B DPO CheckpointError after the ref adapter switch
- [#14706](https://github.com/unslothai/unsloth/pull/14706) Studio: only trust llama-server's /health when our own child holds the port
- [#14699](https://github.com/unslothai/unsloth/pull/14699) Studio: API keys can't make a Data Recipe read credentials from the server environment
- [#14830](https://github.com/unslothai/unsloth/pull/14830) Studio: hold the image render slot while a cold FLUX.3 upsampler start comes up
- [#14833](https://github.com/unslothai/unsloth/pull/14833) Studio: budget HunyuanImage-2.1's automatic int8 text encoder at its hosted file
- [#14770](https://github.com/unslothai/unsloth/pull/14770) Studio diffusion: hold cudnn.benchmark off for FLUX.2 klein so a seed decodes the same image in every process
- [#14839](https://github.com/unslothai/unsloth/pull/14839) Studio MLX images: list Q5_0 / Q5_1 in the unsupported GGUF refusal
- [#14679](https://github.com/unslothai/unsloth/pull/14679) Studio: pick the vision projector precision per device, and never F16 for MiMo-VL
- [#14832](https://github.com/unslothai/unsloth/pull/14832) Studio diffusion: onload torchao int8 / fp8 weights through the pinned chunks
- [#14852](https://github.com/unslothai/unsloth/pull/14852) Format test_video_stream_encode.py, merged without the repo formatter in #14822

#### 🐛 New Issues
- [#14987](https://github.com/unslothai/unsloth/issues/14987) [Bug] Text generation failure with MiniCPM-V-4.7-1B Vulkan backend `feature request` `bug` 💬4
- [#15043](https://github.com/unslothai/unsloth/issues/15043) [Feature] allow 'pin' option for "custom folders" models `feature request` 💬1
- [#15022](https://github.com/unslothai/unsloth/issues/15022) Unsloth Studio (Windows): every GGUF load is killed by a false "our child is not listening" port-ownership check 💬2
- [#14906](https://github.com/unslothai/unsloth/issues/14906) [Bug] Silent CPU fallback on native Linux AMD (RDNA3/gfx1100): studio-prepended /opt/rocm/lib hides the GPU from the bundled llama-server `feature request` `bug` 💬2
- [#15016](https://github.com/unslothai/unsloth/issues/15016) [Feature] vLLM/SGLang persistence in Docker `feature request`
- [#15004](https://github.com/unslothai/unsloth/issues/15004) [Bug] Assistant messages can not be edited... again `feature request` `bug` 💬1
- [#14989](https://github.com/unslothai/unsloth/issues/14989) PC Control `feature request` 💬1
- [#14968](https://github.com/unslothai/unsloth/issues/14968) [Bug] Auto-compact ignores image tokens on local GGUF chats, so tool loops with screenshots overflow the context window 💬1
- [#14916](https://github.com/unslothai/unsloth/issues/14916) [Bug] Continuation of Ling 3 Tiny Saga. `feature request` `bug` 💬1
- [#15046](https://github.com/unslothai/unsloth/issues/15046) [Bug] Please fill in your issue title here. `feature request` `bug`
- [#15038](https://github.com/unslothai/unsloth/issues/15038) [Feature] Model Management (Labels, Rename, Notes) `feature request`
- [#15021](https://github.com/unslothai/unsloth/issues/15021) [Feature] Integrated Headscale Support for Private Peer-to-Peer Remote Access instead of Temporary Cloudflare Link `feature request`
- [#14959](https://github.com/unslothai/unsloth/issues/14959) [Feature] Arm64 Appimage `feature request`
- [#14900](https://github.com/unslothai/unsloth/issues/14900) [Feature] Assign saved inference presets to models and auto-apply on model switch

#### 🔒 Closed Issues
- [#14519](https://github.com/unslothai/unsloth/issues/14519) [Bug] Long chats stall before inference in CPU conversation-archive embeddings; Stop does not cancel archiving
- [#14695](https://github.com/unslothai/unsloth/issues/14695) [Bug] failed to load DeepSeek-V4.1-Flash-1017 (pls fix or tell working model link/name)
- [#14650](https://github.com/unslothai/unsloth/issues/14650) Lemonade & FastFlowLM chat and models stopped working
- [#14906](https://github.com/unslothai/unsloth/issues/14906) [Bug] Silent CPU fallback on native Linux AMD (RDNA3/gfx1100): studio-prepended /opt/rocm/lib hides the GPU from the bundled llama-server
- [#14708](https://github.com/unslothai/unsloth/issues/14708) [Bug] Attachments (images/PDFs) become permanently unreadable after auto-compaction, and `search_conversation` never being invoked
- [#14764](https://github.com/unslothai/unsloth/issues/14764) [Bug] Arrow key problem in MacOS chat window
- [#14221](https://github.com/unslothai/unsloth/issues/14221) [Bug] Model Hub filters not working as expected + regression found
- [#14783](https://github.com/unslothai/unsloth/issues/14783) [Bug] Unsloth Desktop request edits tool change Unsloth Browser to code view instead of staying on rendered preview page
- [#10631](https://github.com/unslothai/unsloth/issues/10631) [Feature] Model hub should support persistent / truly default settings
- [#14513](https://github.com/unslothai/unsloth/issues/14513) Studio: GGUF loads can crash the server on Windows instead of taking the low-memory route
- [#14298](https://github.com/unslothai/unsloth/issues/14298) [Bug] "Max Tool Call Duration" slider is ignored for HTTP/SSE MCP tools - calls always cap at 5 minutes
- [#14916](https://github.com/unslothai/unsloth/issues/14916) [Bug] Continuation of Ling 3 Tiny Saga.
- [#14807](https://github.com/unslothai/unsloth/issues/14807) [Bug] Unsloth Studio Intel XPU LoRA inference mixes GNU and MSVC linker arguments on Windows
- [#14688](https://github.com/unslothai/unsloth/issues/14688) [Bug] Models with remote code can't be exported from UI
- [#14841](https://github.com/unslothai/unsloth/issues/14841) [Issue] Need support for larger chat templates
- [#14366](https://github.com/unslothai/unsloth/issues/14366) [Feature] Unsloth issue draft — `get_statistics()` blocks `from_pretrained` for ~76s
- [#14660](https://github.com/unslothai/unsloth/issues/14660) [Feature] Omnivoice full model inference and finetune (lora/full)

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,160 · **Open issues:** 373 · **Last push:** 1h ago

On October 24, 2026, there were no new releases for AIBrix, but several significant pull requests were merged, including a fix for the pending-replica guard applied to custom metric sources in PR #3285 and an enhancement to honor the global namespace in the secrets CLI with PR #3275. Additionally, PR #3276 addressed issues with discarding partial metrics before falling back to raw data, while PR #3281 annotated the `download_model` function as returning a Path. Notably, a new issue was raised regarding a gateway queue incorrectly routing requests after a client cancellation, documented in issue #3282, which highlights potential complications in request handling and routing contexts. Overall, the day was focused on improving reliability and efficiency within the system.

#### ✅ Merged PRs
- [#3285](https://github.com/vllm-project/aibrix/pull/3285) [Bug] Apply the pending-replica guard to custom metric sources
- [#3275](https://github.com/vllm-project/aibrix/pull/3275) [Bug] Honor the global namespace in the secrets CLI
- [#3276](https://github.com/vllm-project/aibrix/pull/3276) [Bug] Discard partial metrics before raw fallback
- [#3281](https://github.com/vllm-project/aibrix/pull/3281) [Misc] Annotate download_model as returning a Path
- [#3072](https://github.com/vllm-project/aibrix/pull/3072) [Bug] Split KV sync requests by the engine's block size
- [#3267](https://github.com/vllm-project/aibrix/pull/3267) [Bug] Pass a downloaded model path to the engine as a string

#### 🐛 New Issues
- [#3282](https://github.com/vllm-project/aibrix/issues/3282) Gateway queue routes a request after its client cancels, through a routing context that may already belong to another request `kind/bug` `area/gateway` 💬2
- [#3284](https://github.com/vllm-project/aibrix/issues/3284) [Bug] Pending-replica guard skips custom metric sources, so APA overshoots while pods start `kind/bug` `area/orchestration` 💬1
- [#3279](https://github.com/vllm-project/aibrix/issues/3279) KV cache L2 get with mget counts blocks after a missing block, so the caller uses an unfilled block as KV cache `kind/bug` `area/kv-cache` `area/batch` 💬1
- [#3277](https://github.com/vllm-project/aibrix/issues/3277) [Bug] Multi-strategy routing ties the least-loaded pod with a busier one, then picks by pod name `kind/bug` `area/gateway` 💬1
- [#3268](https://github.com/vllm-project/aibrix/issues/3268) S3 storage stores only the tail of a large upload when a multipart part times out, and reports success `kind/bug` `area/batch` 💬1

#### 🔒 Closed Issues
- [#3284](https://github.com/vllm-project/aibrix/issues/3284) [Bug] Pending-replica guard skips custom metric sources, so APA overshoots while pods start
- [#3210](https://github.com/vllm-project/aibrix/issues/3210) GPU optimizer: reloading a regenerated profile raises KeyError, and the new profile is never applied
- [#3208](https://github.com/vllm-project/aibrix/issues/3208) KV cache token validation rejects every L2 block that has a prefix: unpack_tokens() decodes the wrong bytes
- [#3206](https://github.com/vllm-project/aibrix/issues/3206) KV cache L1 S3FIFO policy never trims its ghost fifo, so evicted keys accumulate without bound
- [#3204](https://github.com/vllm-project/aibrix/issues/3204) Batch requests ignore the job's client.request_timeout_seconds and always use a 30 s read timeout
- [#3257](https://github.com/vllm-project/aibrix/issues/3257) Runtime drops model download errors and starts the engine with "bucket/key" as the model

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,252 · **Open issues:** 739 · **Last push:** 9h ago

On October 24, 2026, Semantic Router did not release any new versions, but several significant changes were implemented through merged pull requests. Notably, #4971 added a test to validate CUDA accelerators on NVIDIA GPUs, while #5327 locked the routing header's Envoy contract, bolstering stability. Bug fixes included #5410, which addressed the centering of the translation banner contents on desktop, and #5286, which ensured proper preprocessing of Decision 3.0 media on CPU threads. A particularly hot new issue was #5431, highlighting a codec bug that emits null for omitted cache_write_tokens, indicating a potential impact on response handling. Overall, the day featured routine maintenance with notable attention on improving code stability and resolving critical bugs.

#### ✅ Merged PRs
- [#4971](https://github.com/vllm-project/semantic-router/pull/4971) [Test] Model runtime: validate the CUDA accelerator on NVIDIA GPUs
- [#5327](https://github.com/vllm-project/semantic-router/pull/5327) [Test] Lock the routing header's Envoy contract
- [#5393](https://github.com/vllm-project/semantic-router/pull/5393) [Community] Update company affiliation and role for Anup Sharma
- [#5410](https://github.com/vllm-project/semantic-router/pull/5410) [Bug] Center translation banner contents on desktop
- [#5286](https://github.com/vllm-project/semantic-router/pull/5286) [Bug] Model runtime: preprocess Decision 3.0 media on the CPU device thread

#### 🐛 New Issues
- [#5431](https://github.com/vllm-project/semantic-router/issues/5431) [Bug] Responses response codec emits null for omitted cache_write_tokens `bug` `needs-acceptance` `wg/data-plane-networking` 💬3
- [#5418](https://github.com/vllm-project/semantic-router/issues/5418) [Bug] Qdrant RAG retrieval returns similarity scores misaligned with document content `bug` `needs-acceptance` `wg/agentic-context` 💬1
- [#5421](https://github.com/vllm-project/semantic-router/issues/5421) [Bug] `/ci run` is rejected when main advances after the PR's merge revision was computed `bug` `needs-acceptance` `wg/evaluation-quality` 💬1
- [#5428](https://github.com/vllm-project/semantic-router/issues/5428) [Bug] Log-spool relay failure can leave its service waiting indefinitely `needs-acceptance` 💬1
- [#5429](https://github.com/vllm-project/semantic-router/issues/5429) [Bug] RouterDC initialization holds readers across external embedding calls `needs-acceptance` 💬1
- [#5426](https://github.com/vllm-project/semantic-router/issues/5426) [Bug] Operator silently drops unavailable discovered backends and may publish an empty routing config `needs-acceptance` 💬1
- [#5416](https://github.com/vllm-project/semantic-router/issues/5416) [Feature] Add MiniMax M3.1 Flash catalog and provider support `needs-acceptance` `wg/evaluation-quality` 💬1
- [#5425](https://github.com/vllm-project/semantic-router/issues/5425) [Bug] Hybrid RAG retrieval does not support the vectorstore backend `bug` `needs-acceptance` `wg/agentic-context`
- [#5424](https://github.com/vllm-project/semantic-router/issues/5424) [Bug] Router: startup status reports "initialized" before dependencies are initialized `bug` `needs-acceptance`
- [#5422](https://github.com/vllm-project/semantic-router/issues/5422) [Feature] fla-npu Ascend C chunk kernels for the NPU decision path `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5419](https://github.com/vllm-project/semantic-router/issues/5419) [Bug] ROCm host-ID CLI test fails on macOS without a Linux host mock `needs-acceptance` `wg/developer-experience-ecosystem`

#### 🔒 Closed Issues
- [#4621](https://github.com/vllm-project/semantic-router/issues/4621) [Test] Model runtime: validate the CUDA accelerator on NVIDIA GPUs
- [#5131](https://github.com/vllm-project/semantic-router/issues/5131) [Test] Lock the routing header's Envoy contract
- [#5408](https://github.com/vllm-project/semantic-router/issues/5408) [Website] Center the AI translation banner text vertically
- [#5285](https://github.com/vllm-project/semantic-router/issues/5285) [Bug] Model runtime: CPU forwards pay an OpenMP wake-up per parallel region because d3 preprocessing keeps a second thread team

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*