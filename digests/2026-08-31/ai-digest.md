# 📡 AI Ecosystem Digest — 2026-08-31

> Generated 2026-08-31 01:07 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,477 | 12 | 30 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 120,101 | 15 | 4 | 10 | 1 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,754 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,128 | 10 | 4 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 202,601 | 29 | 13 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,512 | 25 | 5 | 1 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 388,096 | 185 | 153 | 151 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 238,504 | 30 | 2 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,518 | 20 | 11 | 24 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 32,938 | 8 | 13 | 38 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 126,409 | 15 | 25 | 23 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 179,797 | 7 | 6 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,615 | 11 | 11 | 7 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,272 | 14 | 4 | 28 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,046 | 0 | 0 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,429 | 12 | 6 | 13 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released version [rust-v0.152.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.4), enhancing its functionality.
- **Gemini CLI** released [v0.59.0-nightly.20260830.g0bd1d4397](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260830.g0bd1d4397).
- **Ollama** reported a hot issue with [RTX 5060 Ti: llama-server causes reproducible Xid 62 followed by Xid 154 / GPU Reset Required](https://github.com/ollama/ollama/issues/18144), indicating significant stability concerns.
- **vLLM** merged a critical bug fix in [GroupCoordinator.isend_tensor_dict](https://github.com/vllm-project/vllm/pull/49274), aiming to improve performance.
- **OpenClaw** is facing issues with its migration process, notably outlined in the [2026.8.1 migration](https://github.com/openclaw/openclaw/issues/133347), where valid cron jobs are affected.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,477 · **Open issues:** 15,491 · **Last push:** 2d ago

On August 31, 2026, there were no official releases or merged pull requests for Claude Code. However, the repository saw a notable influx of new issues, with #90798 drawing attention for highlighting the unintended spawning of throwaway sessions in the Desktop app, leading to an accumulation of unused sessions. Additionally, users reported critical issues, such as #90863 indicating a completely broken payment system where card transactions failed, and #90860 mentioning the Desktop app's requirement for frequent re-authentication on Windows. Other issues included a regression in command autocomplete for claude.ai skills (#90858) and a report of overly aggressive content filtering when using the Anthropic API (#90857).

#### 🐛 New Issues
- [#90798](https://github.com/anthropics/claude-code/issues/90798) Desktop: every session switch spawns a throwaway Claude Code session — 950 unused sessions in 4 weeks, inflating claude_code.session.count and littering ~/.claude/projects `bug` `has repro` `platform:macos` `area:desktop` 💬1
- [#90864](https://github.com/anthropics/claude-code/issues/90864) After desktop app update to 2.1.247, new sessions report "/remote-control isn't available in this environment" until the app is fully restarted `bug` `has repro` `platform:windows` `area:desktop`
- [#90863](https://github.com/anthropics/claude-code/issues/90863) Payment system completely broken — cards declined without any request reaching the bank `invalid`
- [#90862](https://github.com/anthropics/claude-code/issues/90862) Feature request: per-agent compaction thresholds for Agent-tool subagents `enhancement` `area:core` `area:agents`
- [#90848](https://github.com/anthropics/claude-code/issues/90848) /doctor skill applies CLI-installation assumptions when run in Claude Code Desktop (Windows) `bug` `platform:windows` `area:skills` `area:desktop`
- [#90753](https://github.com/anthropics/claude-code/issues/90753) pluginConfigs lookup for --plugin-dir-loaded plugins doesn't resolve to their marketplace-keyed userConfig `bug` `area:hooks` `area:plugins`
- [#90844](https://github.com/anthropics/claude-code/issues/90844) MCP stdio server intermittently reports CONNECTION_CLOSED on session start, then works fine seconds later `bug` `platform:macos` `area:mcp`
- [#90861](https://github.com/anthropics/claude-code/issues/90861) test `invalid`
- [#90860](https://github.com/anthropics/claude-code/issues/90860) [BUG] Desktop app (Windows) requires re-authentication roughly every 24 hours `bug` `platform:windows` `area:auth` `area:desktop`
- [#90859](https://github.com/anthropics/claude-code/issues/90859) I appreciate you reaching out, but this message appears to be feedback about user experience rather than a specific bug report for Claude Code. If you're experiencing a technical issue with Claude Code, please provide: 1. What command or action triggered `question` `platform:macos` `area:model`
- [#90858](https://github.com/anthropics/claude-code/issues/90858) [BUG] claude.ai skills (anthropic-skills:*) missing from new-chat slash-command autocomplete until first message (regression ~Aug 2026) `bug` `has repro` `platform:macos` `regression`
- [#90857](https://github.com/anthropics/claude-code/issues/90857) [Bug] Anthropic API Error: Overly aggressive cybersecurity content filtering `bug` `platform:windows` `area:model`

#### 🔒 Closed Issues
- [#74502](https://github.com/anthropics/claude-code/issues/74502) [Bug][aup] Fable 5 safety block halted legitimate UI work on HUD drop shadows and glass overlay after a frustr (req_011Cchrz9yeqgFGvpAxBzG2K)
- [#74501](https://github.com/anthropics/claude-code/issues/74501) [Bug][aup] Frustrated exclamation during liquid-glass UI drop-shadow/radar work wrongly flags AUP safety block (req_011CchrsQ4YJLqQrDzLEfnq1)
- [#74500](https://github.com/anthropics/claude-code/issues/74500) [Bug][aup] Fable 5 safety filter blocked SwiftUI vision-radar warning UI restyling on a frustrated exclamation (req_011CchrrHbaG6BSg7j3YcKhw)
- [#74496](https://github.com/anthropics/claude-code/issues/74496) [Bug][aup] Frustrated exclamation during overlay/HUD frame-band render debugging wrongly flagged as unsafe (req_011CchqxBAfbKPvXsUEtob6q)
- [#74495](https://github.com/anthropics/claude-code/issues/74495) [Bug][aup] Frustrated exclamation during game HUD screenshot-editing work wrongly flagged by safety block (req_011Cchqt7t7RJLbDucpqiAPx)
- [#74494](https://github.com/anthropics/claude-code/issues/74494) [Bug][aup] Safety block halted GIMP HUD-overlay edits after a frustrated one-line exclamation (req_011Cchqrnzn4unVeGnoXUrGH)
- [#74493](https://github.com/anthropics/claude-code/issues/74493) [Bug][aup] Safety block halted GIMP HUD-transparency editing after a frustrated exclamation mid-task (req_011Cchqr9cVPRGNMsrSLnW6W)
- [#74491](https://github.com/anthropics/claude-code/issues/74491) [Bug][aup] Safety filter blocked legitimate GIMP image-annotation troubleshooting during design review (req_011CchqDNx8rFLRzGdF2Mx7c)
- [#74486](https://github.com/anthropics/claude-code/issues/74486) [Bug][cyber] Cyber safeguard blocked adversarial hardening test suite for a fictional in-game economy backend (req_011Cchj4vrpu5Vd9aBPQC5Gu)
- [#74488](https://github.com/anthropics/claude-code/issues/74488) [Bug][aup] Safety filter blocks routine GIMP image-annotation troubleshooting after a frustrated exclamation (req_011Cchq5uc9DusWmy6qWxUJZ)
- [#74490](https://github.com/anthropics/claude-code/issues/74490) [Bug][aup] Safety filter halted GIMP image annotation review over a user's frustrated exclamation (req_011CchqC435BGPJrzKjY9uwm)
- [#74484](https://github.com/anthropics/claude-code/issues/74484) [Bug][aup] Beginner/kid-mode flight-limit config task blocked when a frustrated exclamation followed legitimat (req_011CcheV9rkz4TPmS66hQ8kv)
- [#74482](https://github.com/anthropics/claude-code/issues/74482) [Bug][aup] Beginner/"Kid Mode" 30m altitude-limit config work on a DJI drone blocked mid-task by a frustrated (req_011CcheTJMg4bhFVbubB88nm)
- [#74483](https://github.com/anthropics/claude-code/issues/74483) [Bug][aup] Safety filter blocks DJI drone beginner/"Kid Mode" flight-limit config work over a frustrated excla (req_011CcheUXP38cELuHcc8pvoV)
- [#74481](https://github.com/anthropics/claude-code/issues/74481) [Bug][aup] Beginner/kid-mode flight restriction removal for long-owned drone blocked by frustration filter (req_011CcheS4Uit5De4DRrU4Zvn)
- [#74480](https://github.com/anthropics/claude-code/issues/74480) [Bug][aup] AUP block halts ADB UI-hierarchy dump while automating Android cast-picker interaction (req_011CcheQWXaGLECfNEAeriCf)
- [#74479](https://github.com/anthropics/claude-code/issues/74479) [Bug][cyber] Cyber block fires on frustrated exclamation amid legitimate app protocol RE (req_011CchdkCJQQ6q8fZn1RbqXK)
- [#74477](https://github.com/anthropics/claude-code/issues/74477) [Bug][cyber] Cyber classifier blocked adversarial RLS/authz smoke-test hardening of a game backend during auth (req_011Cchcrz9EdQpCRJypGWayV)
- [#74470](https://github.com/anthropics/claude-code/issues/74470) [Bug][aup] Safety filter blocked continuing legitimate trading-bot ROI math work after a frustrated exclamatio (req_011CcgTT9DU2jU5zvXXacax1)
- [#74467](https://github.com/anthropics/claude-code/issues/74467) [Bug][aup] Safety block halts routine automated wallet balance check-in during frustrated exclamation (req_011CcgGdsi6LAas8dC5sFRMu)
- [#74465](https://github.com/anthropics/claude-code/issues/74465) [Bug][aup] Safety filter blocked auth-hardening and code-efficiency request after frustrated exclamation (req_011Cce29ucX9sQRvJaTUdQac)
- [#74461](https://github.com/anthropics/claude-code/issues/74461) [Bug][aup] ClAudit false-positive while: “i gave you a rooted dev device for a reason..USE IT…” (req_011CcdzkagUec2mPSgZUvBkQ)
- [#74460](https://github.com/anthropics/claude-code/issues/74460) [Bug][aup] ClAudit false-positive while: “i gave you a rooted dev device for a reason..USE IT…” (req_011CcdzbyqG8PZ2RFjhKKPRs)
- [#74459](https://github.com/anthropics/claude-code/issues/74459) [Bug][aup] Safety block halted authorized hardening of deployed trading app's access control and runtime effic (req_011Ccdot1FWCKvKyWQot9dcq)
- [#74455](https://github.com/anthropics/claude-code/issues/74455) [Bug][aup] Safety filter blocked in-progress betting ledger fix after a frustrated exclamation (req_011CcdixfYeK2UbVo7giHPmp)
- [#74453](https://github.com/anthropics/claude-code/issues/74453) [Bug][aup] Safety block wrongly halted routine IT helpdesk task-list review after a frustrated exclamation (req_011Ccch3RdtFzd6gcMQvtwE2)
- [#74452](https://github.com/anthropics/claude-code/issues/74452) [Bug][aup] Safety block halted RDS profile-corruption troubleshooting after a frustrated exclamation mid-task (req_011CccfyA1oidk33qqbVYr5p)
- [#73021](https://github.com/anthropics/claude-code/issues/73021) [Bug][cyber] Blocked logging a plaintext-transmitting connector's traffic into an encrypted audit database (req_011CccC2rs2w5uahrT93PJaw)
- [#72142](https://github.com/anthropics/claude-code/issues/72142) [Bug][cyber] Block halted self-hosted MSP API work to fix printers and build a QuickBooks agent plugin (req_011CcVvLgy5xJQGori4fVgp3)
- [#74472](https://github.com/anthropics/claude-code/issues/74472) [Bug][aup] Fable 5 safety block halts routine status check on financial modeling work during a frustrated asid (req_011CchCQrGT5A2sqqZPeLNEV)

### OpenAI Codex (`openai/codex`)

**Stars:** 120,101 · **Open issues:** 14,528 · **Last push:** <1h ago

On August 31, 2026, OpenAI Codex released version rust-v0.152.0-alpha.4, introducing enhancements that include improved user controls and optimizations. Notably, several significant pull requests were merged, such as the opt-in update_plan tool, metadata marking for history ingestion requests, and better rate-limit banners in the TUI. Additionally, support was added for package-style MCP server names, and cursor-style rendering was repaired on older JediTerm terminals. A major new issue surfaced regarding the macOS Create Project not functioning within the desktop app, indicating potential usability hurdles for users on that platform.

#### 🚀 New Releases
- [rust-v0.152.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.4) 0.152.0-alpha.4

#### ✅ Merged PRs
- [#41744](https://github.com/openai/codex/pull/41744) Make the update_plan tool opt-in
- [#41743](https://github.com/openai/codex/pull/41743) Mark history ingestion requests in turn metadata
- [#41742](https://github.com/openai/codex/pull/41742) Show actionable rate-limit banners in the TUI
- [#41700](https://github.com/openai/codex/pull/41700) Support package-style MCP server names
- [#41683](https://github.com/openai/codex/pull/41683) Set working directories for environment MCP tests
- [#41673](https://github.com/openai/codex/pull/41673) Repair cursor-style rendering on older JediTerm terminals
- [#41666](https://github.com/openai/codex/pull/41666) Approve the first Node REPL execution without a Guardian wait
- [#41660](https://github.com/openai/codex/pull/41660) Preserve Guardian authorization across history compaction
- [#41630](https://github.com/openai/codex/pull/41630) Update tests for default-enabled update_plan
- [#41613](https://github.com/openai/codex/pull/41613) Move Vim history tests into the history search module

#### 🐛 New Issues
- [#41622](https://github.com/openai/codex/issues/41622) Add a setting to disable automatic conversation recaps in Codex CLI `enhancement` `CLI` `config` 💬6
- [#41745](https://github.com/openai/codex/issues/41745) macOS Create Project not working in desktop app `bug` `app` 💬2
- [#41708](https://github.com/openai/codex/issues/41708) Android Remote message queue can stay stuck after host turn completes; recovery may lose or delay messages `bug` `app` `connectivity` `session` 💬2
- [#41736](https://github.com/openai/codex/issues/41736) broken `bug` `windows-os` `app` 💬1
- [#41741](https://github.com/openai/codex/issues/41741) [Desktop][Auto-review][Windows/WSL] Local-only Interlock message misclassified as sensitive egress; explicit user authorization overridden with no human appeal `bug` `windows-os` `sandbox` `app` 💬1
- [#41740](https://github.com/openai/codex/issues/41740) [App] Compaction promoted an assistant-authored plan into an unauthorized cross-task action, then entered a self-protective correction loop `bug` `model-behavior` `windows-os` `context` 💬1
- [#41684](https://github.com/openai/codex/issues/41684) sol high periodic status polling drains 5h rate limit during long-running external shell executions `bug` `rate-limits` `tool-calls` `app` 💬1
- [#41738](https://github.com/openai/codex/issues/41738) Codex Desktop ignores Full Access config and launches fresh tasks with CODEX_SANDBOX_NETWORK_DISABLED=1 `bug` `sandbox` `app` 💬1
- [#41735](https://github.com/openai/codex/issues/41735) Codex Desktop finalizes ordinary task despite explicit unfinished-work gate and active required lanes `bug` `windows-os` `agent` `app` 💬1
- [#41733](https://github.com/openai/codex/issues/41733) Codex Desktop messages remain invisible until restart while MCP approval dialogs still appear `bug` `windows-os` `mcp` `app` 💬1
- [#41730](https://github.com/openai/codex/issues/41730) [Codex App][Windows] Long-running task silently switches High reasoning to unsupported minimal `bug` `windows-os` `app` `session` 💬1
- [#41739](https://github.com/openai/codex/issues/41739) Allow compact formatting for rate-limit status-line items `enhancement` `TUI` `rate-limits` `CLI`
- [#41737](https://github.com/openai/codex/issues/41737) [macOS] Codex Micro lighting and battery fail with IOHIDDeviceSetReport “not permitted” `bug` `app`
- [#41732](https://github.com/openai/codex/issues/41732) MCP Elicitation approval dialog cannot safely review or scroll long command arguments `bug` `windows-os` `mcp` `app`
- [#41731](https://github.com/openai/codex/issues/41731) Public openai-curated-remote plugin installs bundled hooks but does not expose them for review or trust `bug` `windows-os` `app` `skills`

#### 🔒 Closed Issues
- [#37104](https://github.com/openai/codex/issues/37104) [Windows][WSL][26.730.8199.0] Integrated terminal silently fails before PTY/WSL startup; bottom and side panel cannot open
- [#41255](https://github.com/openai/codex/issues/41255) Codex Desktop GPT-5.6 models fail to run exec tool: code-mode host exits during handshake
- [#41736](https://github.com/openai/codex/issues/41736) broken
- [#41684](https://github.com/openai/codex/issues/41684) sol high periodic status polling drains 5h rate limit during long-running external shell executions

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,754 · **Open issues:** 871 · **Last push:** <1h ago

On August 31, 2026, Gemini CLI released the v0.59.0-nightly.20260830.g0bd1d4397 version, marking a nightly update that includes a number of enhancements and fixes. There were no merged pull requests or new issues reported in the last 24 hours, indicating a day of routine maintenance for the project. The latest nightly release continues to build on the incremental improvements, though details of specific changes can be found in the full changelog associated with the update. Overall, the team seems to be in a stable phase, focusing on refining the existing features.

#### 🚀 New Releases
- [v0.59.0-nightly.20260830.g0bd1d4397](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260830.g0bd1d4397) Release v0.59.0-nightly.20260830.g0bd1d4397

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,128 · **Open issues:** 2,250 · **Last push:** 1d ago

On August 31, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI, indicating a routine maintenance day. However, several significant new issues were reported, including #4664, which details a crash due to JavaScript heap out of memory when resuming long-standing sessions. Additionally, users are experiencing OAuth login failures behind a TLS-inspecting HTTP proxy as noted in #4671, while #4668 highlights a problem where interrupted session creation continues silently, duplicating agent work later. Other issues also include failed compaction retries and OAuth metadata discovery failures, showcasing ongoing challenges that could impact user experience.

#### 🐛 New Issues
- [#4664](https://github.com/github/copilot-cli/issues/4664) Copilot CLI crashes with JavaScript heap out of memory when resuming a long-standing session `triage` 💬1
- [#4671](https://github.com/github/copilot-cli/issues/4671) 1.0.81 regression: OAuth login fails behind a TLS-inspecting HTTP proxy while 1.0.80 works `triage`
- [#4670](https://github.com/github/copilot-cli/issues/4670) Tool call hangs after extension startup fails `triage`
- [#4669](https://github.com/github/copilot-cli/issues/4669) Managed telemetry.headers prevents OpenTelemetry (OTEL) export `triage`
- [#4668](https://github.com/github/copilot-cli/issues/4668) Interrupted create_session still creates the session ~1.6 hours later, silently duplicating agent work `triage`
- [#4667](https://github.com/github/copilot-cli/issues/4667) Voice on can not be activated `triage`
- [#4666](https://github.com/github/copilot-cli/issues/4666) Show GitHub hostname for all footer account identities (via option) `triage`
- [#4665](https://github.com/github/copilot-cli/issues/4665) sessionStart additionalContext duplicated on each turn and passed to subagents `triage`
- [#4663](https://github.com/github/copilot-cli/issues/4663) Failed compaction is retried unchanged on every turn: unbounded billed retries, monotonic context growth, no user-visible error `triage`
- [#4662](https://github.com/github/copilot-cli/issues/4662) AgentHost MCP client fails OAuth metadata discovery for authorization-server issuer URLs with a path component `triage`

#### 🔒 Closed Issues
- [#2369](https://github.com/github/copilot-cli/issues/2369) [BUG]: Unable to perform basic scrolling to view long results
- [#4660](https://github.com/github/copilot-cli/issues/4660) Remote ADO MCP server with OAuth fails in v1.0.81 WAM implementation
- [#3797](https://github.com/github/copilot-cli/issues/3797) Different prompt input box layout in two different cmd tabs in the same window
- [#2851](https://github.com/github/copilot-cli/issues/2851) Configured thinking effort vanishes 5-10 seconds after opening gh copilot cli

### OpenCode (`anomalyco/opencode`)

**Stars:** 202,601 · **Open issues:** 5,635 · **Last push:** <1h ago

On August 31, 2026, there were no new releases for OpenCode, but several important pull requests were merged, including a fix for deduplicating request tools (#46306) and adjustments to handle empty user messages and tool input keys (#46297, #46296). Among the new issues raised, #46314 stands out, reporting that the Anthropic protocol is failing to send `effort` variant payloads. Additionally, #46280 proposes a significant UI/UX modernization aimed at enhancing the app's interface with cleaner layout options. Overall, the day was focused on minor fixes and improvements, providing a maintenance-oriented atmosphere within the project.

#### ✅ Merged PRs
- [#46306](https://github.com/anomalyco/opencode/pull/46306) fix(ai): deduplicate request tools
- [#46297](https://github.com/anomalyco/opencode/pull/46297) fix(ai): omit empty Responses user messages
- [#46296](https://github.com/anomalyco/opencode/pull/46296) fix(ai): sanitize empty Bedrock tool input keys

#### 🐛 New Issues
- [#46314](https://github.com/anomalyco/opencode/issues/46314) Anthropic protocol never sends `effort` variant payloads (built + displayed, dropped at request construction) 💬3
- [#46315](https://github.com/anomalyco/opencode/issues/46315) Scrolling and scaling issues on the interface 💬2
- [#46299](https://github.com/anomalyco/opencode/issues/46299) No responde, suena un sonidito pero no hace nada 💬2
- [#46276](https://github.com/anomalyco/opencode/issues/46276) opencode run --session --fork stalls with zero output when --dir changes to a Git worktree 💬2
- [#46280](https://github.com/anomalyco/opencode/issues/46280) [FEATURE]:[UI/UX Proposal] Modernizing app interface with clean layout options 💬2
- [#46274](https://github.com/anomalyco/opencode/issues/46274) Add daily budget remaining metric for weekly/monthly limits 💬2
- [#46255](https://github.com/anomalyco/opencode/issues/46255) f u c king shit 💬2
- [#46257](https://github.com/anomalyco/opencode/issues/46257) no se actualiza el open code no me deja escribir 💬2
- [#46258](https://github.com/anomalyco/opencode/issues/46258) 文字凭空显示在输入栏 💬2
- [#46264](https://github.com/anomalyco/opencode/issues/46264) [WITHDRAWN] `needs:compliance` 💬2
- [#46263](https://github.com/anomalyco/opencode/issues/46263) CLI: web and serve show generic error message when the port is already in use 💬2
- [#46252](https://github.com/anomalyco/opencode/issues/46252) i'm go subscription 💬2
- [#46256](https://github.com/anomalyco/opencode/issues/46256) 80MB/s persisted disk scan 💬2
- [#46250](https://github.com/anomalyco/opencode/issues/46250) [FEATURE]: Make bash arity dictionary (BashArity) configurable 💬2
- [#46311](https://github.com/anomalyco/opencode/issues/46311) Per-agent model configuration has no effect when using ACP 💬1
- [#46313](https://github.com/anomalyco/opencode/issues/46313) [BUG]: macOS release binaries fail codesign verification 💬1
- [#46310](https://github.com/anomalyco/opencode/issues/46310) Agent loops stalls randomly silently (working indefinitely) `2.0` 💬1
- [#46300](https://github.com/anomalyco/opencode/issues/46300) [web] Hang on project if the project is set to `/home/<username>` 💬1
- [#46292](https://github.com/anomalyco/opencode/issues/46292) Desktop renderer crashes: Solid store proxy Object.keys race + fatal 404/permission-server handling 💬1
- [#46284](https://github.com/anomalyco/opencode/issues/46284) feat(app): favorite models for quick switching in model selector 💬1
- [#46265](https://github.com/anomalyco/opencode/issues/46265) [FEATURE]: Show TUI shortcut for thinking levels 💬1
- [#46308](https://github.com/anomalyco/opencode/issues/46308) Usage modal doesn't show models used through opencode
- [#46304](https://github.com/anomalyco/opencode/issues/46304) Frameless desktop windows can stay always-on-top on Windows after first show
- [#46301](https://github.com/anomalyco/opencode/issues/46301) Permission dock offers 'always' even when the request has no always patterns
- [#46295](https://github.com/anomalyco/opencode/issues/46295) [FEATURE]: Expose low/high/max reasoning effort for z-ai/glm-5.3(-flash) (parity with glm-5.2 and xAI fix #42160)
- [#46293](https://github.com/anomalyco/opencode/issues/46293) glob tool returns false negatives — misses files that exist on disk
- [#46282](https://github.com/anomalyco/opencode/issues/46282) `serve` 1.18.25: `GET /api/session/<id>/message` returns `{"data":[]}` for every session (Desktop shows empty transcript)
- [#46268](https://github.com/anomalyco/opencode/issues/46268) [FEATURE]: Add a per-assistant-message footer slot to the TUI plugin API
- [#46253](https://github.com/anomalyco/opencode/issues/46253) Local MCP disconnect leaves descendant processes running

#### 🔒 Closed Issues
- [#46314](https://github.com/anomalyco/opencode/issues/46314) Anthropic protocol never sends `effort` variant payloads (built + displayed, dropped at request construction)
- [#46299](https://github.com/anomalyco/opencode/issues/46299) No responde, suena un sonidito pero no hace nada
- [#46280](https://github.com/anomalyco/opencode/issues/46280) [FEATURE]:[UI/UX Proposal] Modernizing app interface with clean layout options
- [#46274](https://github.com/anomalyco/opencode/issues/46274) Add daily budget remaining metric for weekly/monthly limits
- [#46255](https://github.com/anomalyco/opencode/issues/46255) f u c king shit
- [#46257](https://github.com/anomalyco/opencode/issues/46257) no se actualiza el open code no me deja escribir
- [#46258](https://github.com/anomalyco/opencode/issues/46258) 文字凭空显示在输入栏
- [#45873](https://github.com/anomalyco/opencode/issues/45873) Web UI ignores default_agent — new sessions always start on built-in build agent
- [#46264](https://github.com/anomalyco/opencode/issues/46264) [WITHDRAWN]
- [#46252](https://github.com/anomalyco/opencode/issues/46252) i'm go subscription
- [#46250](https://github.com/anomalyco/opencode/issues/46250) [FEATURE]: Make bash arity dictionary (BashArity) configurable
- [#46092](https://github.com/anomalyco/opencode/issues/46092) ACP: PromptResponse.usage reports only the final LLM request of the turn (neither session-cumulative nor per-turn totals)
- [#46308](https://github.com/anomalyco/opencode/issues/46308) Usage modal doesn't show models used through opencode

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,512 · **Open issues:** 1,295 · **Last push:** <1h ago

On August 31, 2026, there were no new releases for Qwen Code; however, a notable feature was merged in PR #10407, which introduced a workspace overview and a workspace menu in the sidebar of the web shell. Among the newly reported issues, #10538 highlights a critical bug where the driver portable 0.20.0 panics on every embedded runtime creation for Windows x64 users, indicating a significant impact on functionality in that environment. Additional issues include a request for hot loading of model configurations and a bug where the Web Shell displays a generic "Internal error," obscuring the actual error messages. The day's developments reflect ongoing improvements and challenges in the platform as it evolves.

#### ✅ Merged PRs
- [#10407](https://github.com/QwenLM/qwen-code/pull/10407) feat(web-shell): show workspace overview and a workspace menu in the sidebar

#### 🐛 New Issues
- [#10547](https://github.com/QwenLM/qwen-code/issues/10547) Deferred review findings from PR #10532 💬3
- [#10538](https://github.com/QwenLM/qwen-code/issues/10538) Computer Use: driver portable 0.20.0 panics on every embedded runtime creation (Windows x64) Environment: Windows 11 x64, Node v24.18.0, @qwen-code/cua-sdk@0.20.0 (npm), native payload windows-x86_64 installed complete (C:\Users\fran\AppData\Local\Qwen\cu `status/need-retesting` `priority/P2` `type/bug` `category/platform` 💬3
- [#10585](https://github.com/QwenLM/qwen-code/issues/10585) test(vscode/web-shell): cover request-id binding gaps deferred from PR #10534 (R3-2..R3-16) `priority/P3` `status/blocked` `category/development` `scope/vscode` 💬2
- [#10584](https://github.com/QwenLM/qwen-code/issues/10584) feat: Support .worktreeinclude for copying gitignored files into worktrees `priority/P2` `type/feature-request` `category/core` `scope/git` 💬2
- [#10583](https://github.com/QwenLM/qwen-code/issues/10583) feat(sandbox): add lightweight Bubblewrap backend for Linux `priority/P2` `type/feature-request` `category/security` `scope/sandbox` 💬2
- [#10577](https://github.com/QwenLM/qwen-code/issues/10577) qwen `status/need-information` `priority/P2` `type/bug` `category/authentication` 💬2
- [#10564](https://github.com/QwenLM/qwen-code/issues/10564) bug(serve): Web Shell shows generic "Internal error" for failed turns, hiding the provider's actual error message `priority/P2` `type/bug` `category/core` `daemon` 💬2
- [#10573](https://github.com/QwenLM/qwen-code/issues/10573) ci: follow-ups from #10552 — runner.environment fallback, flock budget, ECS prefix scope, prettier cleanup `priority/P3` `category/development` `scope/ci-cd` `type/enhancement` 💬2
- [#10570](https://github.com/QwenLM/qwen-code/issues/10570) bug(sdk): Daemon HTTP errors drop JSON-RPC details `priority/P3` `type/bug` `category/core` `daemon` 💬2
- [#10568](https://github.com/QwenLM/qwen-code/issues/10568) 功能请求：模型配置热加载，无需重启 CLI `priority/P3` `type/feature-request` `category/configuration` `scope/model-switching` 💬2
- [#10557](https://github.com/QwenLM/qwen-code/issues/10557) vscode: closing a web-shell permission diff tab leaves the approval row locked without a re-open path `priority/P2` `type/bug` `category/ui` `scope/vscode` 💬2
- [#10562](https://github.com/QwenLM/qwen-code/issues/10562) Termius input corruption from physical cursor positioning `priority/P2` `type/bug` `category/ui` `scope/rendering` 💬2
- [#10560](https://github.com/QwenLM/qwen-code/issues/10560) review: screen the probe- and base-tree creation checkouts, which run before any filter screen `priority/P2` `type/bug` `category/security` `scope/cli` 💬2
- [#10561](https://github.com/QwenLM/qwen-code/issues/10561) review: command-execution config keys are an open entrance set — fsmonitor, hooks, and the user's global config `priority/P1` `type/bug` `category/security` `scope/vulnerability` 💬2
- [#10559](https://github.com/QwenLM/qwen-code/issues/10559) [core] Decide class-level closure for thinking-tag replay/redelivery recognition (issue #9348 follow-up from PR #9607) `priority/P3` `type/bug` `category/core` `scope/content-generation` 💬2
- [#10535](https://github.com/QwenLM/qwen-code/issues/10535) Release Failed for v0.22.3-nightly.20260830.413b6d15d3 on 2026-08-30 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10544](https://github.com/QwenLM/qwen-code/issues/10544) refactor(web-shell): detect pending edit approvals via diff content-block signal instead of tool-name enumeration `priority/P2` `category/ui` `type/enhancement` `scope/web-shell` 💬2
- [#10581](https://github.com/QwenLM/qwen-code/issues/10581) Main CI failed: Qwen Code CI on 40889bad7593 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10566](https://github.com/QwenLM/qwen-code/issues/10566) Main CI failed: E2E Tests on 3aa1b1462478 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10555](https://github.com/QwenLM/qwen-code/issues/10555) Main CI failed: Qwen Code CI on e40040cd264c `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#10546](https://github.com/QwenLM/qwen-code/issues/10546) Main CI failed: E2E Tests on bf054479b1fc `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10536](https://github.com/QwenLM/qwen-code/issues/10536) Main CI failed: E2E Tests on 74e71c594542 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10588](https://github.com/QwenLM/qwen-code/issues/10588) Deferred review findings from PR #10543
- [#10549](https://github.com/QwenLM/qwen-code/issues/10549) Deferred review findings from PR #10347
- [#10540](https://github.com/QwenLM/qwen-code/issues/10540) Deferred review findings from PR #10439

#### 🔒 Closed Issues
- [#8784](https://github.com/QwenLM/qwen-code/issues/8784) Streamable HTTP: optional GET/SSE stream rejected with 404 kills the whole MCP connection
- [#7192](https://github.com/QwenLM/qwen-code/issues/7192) source_test metadata updates can be dropped by source config validation
- [#10401](https://github.com/QwenLM/qwen-code/issues/10401) proposal(serve): Trust tokenless loopback for full operator API access
- [#10184](https://github.com/QwenLM/qwen-code/issues/10184) bug(serve): runtime-added model cannot be set as current in Web Shell until daemon restart
- [#10555](https://github.com/QwenLM/qwen-code/issues/10555) Main CI failed: Qwen Code CI on e40040cd264c

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): run_eval.py always reports 0% recall — install the eval artifact as a real skill; fix Windows stream reading, trigger detection, and parallel workers
- [#514](https://github.com/anthropics/skills/pull/514) Add document-typography skill: typographic quality control for generated documents
- [#1615](https://github.com/anthropics/skills/pull/1615) Add scnet-hpc skill
- [#538](https://github.com/anthropics/skills/pull/538) fix(pdf): correct case-sensitive file references in SKILL.md
- [#486](https://github.com/anthropics/skills/pull/486) Add ODT skill — OpenDocument text creation and template filling and parse ODT to HTML

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 388,096 · **Open issues:** 5,774 · **Last push:** <1h ago

There were no new releases for OpenClaw on this day, but several notable pull requests were merged, including fixes for preserving block boundaries in attributed tags and preventing cloud session lifecycle actions from hanging. Enhancements to the user interface included the organization of session menus and the addition of a preference to hide empty session groups. Significant bug reports opened today included an issue with valid cron jobs being quarantined as invalid during the 2026.8.1 migration, as well as problems with delivering messages in various contexts, such as Telegram and main-session outbox recovery. Overall, the day was marked by routine maintenance and improvements to performance and usability within the platform.

#### ✅ Merged PRs
- [#130993](https://github.com/openclaw/openclaw/pull/130993) fix: Responses sessions compact before reaching context limit
- [#133672](https://github.com/openclaw/openclaw/pull/133672) chore(ui): refresh control ui locales
- [#132998](https://github.com/openclaw/openclaw/pull/132998) fix(infra): preserve block boundaries for attributed p and div tags
- [#133670](https://github.com/openclaw/openclaw/pull/133670) perf(test): trim fixture subprocess overhead
- [#133624](https://github.com/openclaw/openclaw/pull/133624) fix(scripts): preserve protected GitHub CLI routing
- [#133551](https://github.com/openclaw/openclaw/pull/133551) fix: prevent cloud session lifecycle actions from hanging behind worker moves
- [#133457](https://github.com/openclaw/openclaw/pull/133457) fix: retain accepted browser follow-ups across restarts
- [#133665](https://github.com/openclaw/openclaw/pull/133665) docs: link v2026.8.1 release notes to feature guides
- [#133516](https://github.com/openclaw/openclaw/pull/133516) improve: quiet Discord and Slack progress
- [#133659](https://github.com/openclaw/openclaw/pull/133659) perf(logging): reuse prepared diagnostic facts
- [#133663](https://github.com/openclaw/openclaw/pull/133663) fix: identify cloud worker bootstrap failures
- [#133655](https://github.com/openclaw/openclaw/pull/133655) fix(node-host): report container hosting startup failures in the native worker
- [#133657](https://github.com/openclaw/openclaw/pull/133657) improve(ui): capitalize permission mode names
- [#133652](https://github.com/openclaw/openclaw/pull/133652) test: assert release navigation shape instead of pinned versions
- [#130207](https://github.com/openclaw/openclaw/pull/130207) fix(docs): respect nested fenced code boundaries
- [#133641](https://github.com/openclaw/openclaw/pull/133641) improve: speed up legacy session transcript imports
- [#133643](https://github.com/openclaw/openclaw/pull/133643) improve(ui): tuck Setup preferences into Advanced settings
- [#133622](https://github.com/openclaw/openclaw/pull/133622) fix(update): show reliable progress and final outcomes
- [#133656](https://github.com/openclaw/openclaw/pull/133656) test(plugins): drive plugin tool registry reuse through the real seam
- [#133631](https://github.com/openclaw/openclaw/pull/133631) fix(test): retire repository test APIs after non-isolated files
- [#133640](https://github.com/openclaw/openclaw/pull/133640) docs: guide routine Gateway updates through their installation owner
- [#133490](https://github.com/openclaw/openclaw/pull/133490) feat(ui): organize session menus and combine appearance controls
- [#133502](https://github.com/openclaw/openclaw/pull/133502) fix(config): avoid repeated health-state startup warnings
- [#133638](https://github.com/openclaw/openclaw/pull/133638) feat(ui): add a preference to hide empty session groups
- [#133635](https://github.com/openclaw/openclaw/pull/133635) perf: speed up chat history preparation
- [#133634](https://github.com/openclaw/openclaw/pull/133634) perf(test): shorten escaped-output timeout grace
- [#133639](https://github.com/openclaw/openclaw/pull/133639) chore(ui): refresh control ui locales
- [#133627](https://github.com/openclaw/openclaw/pull/133627) perf(state): streamline SQLite schema comparison
- [#133000](https://github.com/openclaw/openclaw/pull/133000) chore: prepare extended-stable 2026.7.33
- [#133626](https://github.com/openclaw/openclaw/pull/133626) chore(autoreview): sync reviewer-led credential checks
- [#133192](https://github.com/openclaw/openclaw/pull/133192) fix(subagents): atomically persist blocked completion alerts
- [#133524](https://github.com/openclaw/openclaw/pull/133524) fix(release): seal frozen candidate package metadata
- [#133523](https://github.com/openclaw/openclaw/pull/133523) fix(release): resolve frozen candidate entrypoints
- [#133613](https://github.com/openclaw/openclaw/pull/133613) fix(talk): honor advertised transcription model selections
- [#133604](https://github.com/openclaw/openclaw/pull/133604) refactor(config): avoid evaluating type-only configuration modules
- [#133614](https://github.com/openclaw/openclaw/pull/133614) fix(browser): prefer CDP for managed role snapshots
- [#128379](https://github.com/openclaw/openclaw/pull/128379) feat(browser): standalone extension relay daemon with native-host wake-up
- [#133605](https://github.com/openclaw/openclaw/pull/133605) fix: keep run output token counts cumulative and recoverable
- [#133615](https://github.com/openclaw/openclaw/pull/133615) fix(tts): keep internal reasoning out of spoken summaries
- [#133609](https://github.com/openclaw/openclaw/pull/133609) perf(test): prepare source Gateway runtimes before live shards
- [#133620](https://github.com/openclaw/openclaw/pull/133620) docs: link v2026.8.1 release story
- [#133477](https://github.com/openclaw/openclaw/pull/133477) perf(gateway): reuse prepared facts across control-plane reads
- [#133611](https://github.com/openclaw/openclaw/pull/133611) improve: reduce legacy transcript scanning overhead
- [#133342](https://github.com/openclaw/openclaw/pull/133342) fix(ui): remove duplicate emoji from error alerts
- [#132641](https://github.com/openclaw/openclaw/pull/132641) fix(cli): reject explicit empty nodes RPC --timeout instead of defaulting
- [#133610](https://github.com/openclaw/openclaw/pull/133610) fix(media): quoted file charsets corrupt extracted text
- [#133579](https://github.com/openclaw/openclaw/pull/133579) perf: separate static provider catalogs from live discovery
- [#133607](https://github.com/openclaw/openclaw/pull/133607) perf(terminal): prepare table home formatting and flex growth
- [#133595](https://github.com/openclaw/openclaw/pull/133595) fix: gateway stop fails with a newer state schema
- [#132170](https://github.com/openclaw/openclaw/pull/132170) fix(imap): keep email prompt truncation code-point-safe
- [#133519](https://github.com/openclaw/openclaw/pull/133519) fix(ui): deduplicate participant and viewer avatars
- [#133494](https://github.com/openclaw/openclaw/pull/133494) fix(ui): preserve the original error when a Control UI build fails
- [#133349](https://github.com/openclaw/openclaw/pull/133349) fix(usage): correct cached long-context cost estimates
- [#128151](https://github.com/openclaw/openclaw/pull/128151) docs(channels): document per-account channels.start/stop recovery and selfChatMode
- [#133578](https://github.com/openclaw/openclaw/pull/133578) fix: clear stale binding owners and restore global subagent status
- [#133570](https://github.com/openclaw/openclaw/pull/133570) test: consolidate model and plugin metadata fixtures
- [#133386](https://github.com/openclaw/openclaw/pull/133386) fix(media): transcode byte-detected ASF audio
- [#132918](https://github.com/openclaw/openclaw/pull/132918) fix(line): apply a group's wildcard defaults to its own entry
- [#132366](https://github.com/openclaw/openclaw/pull/132366) fix: avoid malformed Unicode at runtime text limits
- [#133591](https://github.com/openclaw/openclaw/pull/133591) docs: lead v2026.8.1 notes with install and downgrade guidance
- [#133580](https://github.com/openclaw/openclaw/pull/133580) fix(sandbox): preserve file data and 308 redirects on Python 3.9
- [#133589](https://github.com/openclaw/openclaw/pull/133589) fix(release): preserve waiver context when reusing validation
- [#133601](https://github.com/openclaw/openclaw/pull/133601) fix(channels): include nested channel diagnostics in logs
- [#132151](https://github.com/openclaw/openclaw/pull/132151) docs(line): scope the loading animation to one-to-one chats
- [#133500](https://github.com/openclaw/openclaw/pull/133500) fix(package): keep postinstall inventory readable
- [#132830](https://github.com/openclaw/openclaw/pull/132830) improve(memory-lancedb): reduce plugin startup memory
- [#133556](https://github.com/openclaw/openclaw/pull/133556) fix(ui): keep branch and editor tooltips beside their buttons
- [#133575](https://github.com/openclaw/openclaw/pull/133575) fix(ui): wait for restored draft before clearing
- [#133572](https://github.com/openclaw/openclaw/pull/133572) fix: correct MCP URI schema resolution with patched fast-uri
- [#133588](https://github.com/openclaw/openclaw/pull/133588) test: reduce workflow sanity fixture cleanup time
- [#133383](https://github.com/openclaw/openclaw/pull/133383) fix(media): preserve Matroska extensions after byte detection
- [#133594](https://github.com/openclaw/openclaw/pull/133594) refactor(docker): retire ClawDock shell helpers
- [#133598](https://github.com/openclaw/openclaw/pull/133598) perf(browser): reuse snapshot refs and screenshot metadata
- [#133565](https://github.com/openclaw/openclaw/pull/133565) perf: load web chat history in larger, faster batches
- [#133584](https://github.com/openclaw/openclaw/pull/133584) fix(plugins): keep bundled plugins bundled when selected by plugins.load.paths
- [#133568](https://github.com/openclaw/openclaw/pull/133568) test: isolate shared /tmp session-store paths in runner and health suites
- [#133552](https://github.com/openclaw/openclaw/pull/133552) fix(cron): keep read RPCs from blocking the gateway
- [#133581](https://github.com/openclaw/openclaw/pull/133581) test: include v2026.8.1 release navigation
- [#133476](https://github.com/openclaw/openclaw/pull/133476) fix: stop cloud work before unrelated provider inspection finishes
- [#133526](https://github.com/openclaw/openclaw/pull/133526) fix(e2e): keep delete fixture target-compatible
- [#133525](https://github.com/openclaw/openclaw/pull/133525) fix(release): detect optional target E2E capability
- [#133549](https://github.com/openclaw/openclaw/pull/133549) fix(package): publish readable dist inventory
- [#133585](https://github.com/openclaw/openclaw/pull/133585) docs: add complete v2026.8.1 maintainer change index
- [#133507](https://github.com/openclaw/openclaw/pull/133507) fix(voice): discover configured provider candidates
- [#133571](https://github.com/openclaw/openclaw/pull/133571) fix(browser): preserve contextless worker and iframe sessions
- [#133567](https://github.com/openclaw/openclaw/pull/133567) refactor(ui): simplify chat rendering and lifecycle state
- [#133566](https://github.com/openclaw/openclaw/pull/133566) test: reduce maturity fixture cleanup time
- [#133473](https://github.com/openclaw/openclaw/pull/133473) fix(talk): report browser input transcription failures
- [#133434](https://github.com/openclaw/openclaw/pull/133434) fix: keep Model Setup pending until Gateway settings are active
- [#133411](https://github.com/openclaw/openclaw/pull/133411) fix(maintainers): block rewritten contributor squashes
- [#133546](https://github.com/openclaw/openclaw/pull/133546) improve: speed up legacy imports and transcript replacement
- [#133557](https://github.com/openclaw/openclaw/pull/133557) docs: add draft v2026.8.1 release notes
- [#133554](https://github.com/openclaw/openclaw/pull/133554) test: guard multi-project Vitest cache ownership
- [#133560](https://github.com/openclaw/openclaw/pull/133560) fix(memory): clarify default agent scope in command help
- [#133547](https://github.com/openclaw/openclaw/pull/133547) fix(clawdock): keep credentials out of diagnostic output
- [#133548](https://github.com/openclaw/openclaw/pull/133548) refactor(ui): avoid redundant presence work in avatar lists
- [#133543](https://github.com/openclaw/openclaw/pull/133543) fix(agents): recognize internal requester completion replies
- [#133542](https://github.com/openclaw/openclaw/pull/133542) fix: prevent duplicate queued user messages in chat clients
- [#133544](https://github.com/openclaw/openclaw/pull/133544) chore(ui): refresh control ui locales
- [#133533](https://github.com/openclaw/openclaw/pull/133533) fix(beam): resume sharing when the mirror receiver changes
- [#133221](https://github.com/openclaw/openclaw/pull/133221) fix(models): recover /models browse from a replaced prepared catalog
- [#133527](https://github.com/openclaw/openclaw/pull/133527) perf(terminal): reuse control scans and simplify sanitization
- [#133512](https://github.com/openclaw/openclaw/pull/133512) perf(agents): prepare only consumed tool and skill diagnostics
- [#132895](https://github.com/openclaw/openclaw/pull/132895) fix(line): offer the card command only on LINE
- [#133529](https://github.com/openclaw/openclaw/pull/133529) fix(qa): mark extended-stable suite artifacts complete
- [#133471](https://github.com/openclaw/openclaw/pull/133471) fix: keep Android publication independent of core release
- [#133521](https://github.com/openclaw/openclaw/pull/133521) refactor(agents): simplify compaction accounting
- [#133364](https://github.com/openclaw/openclaw/pull/133364) refactor(plugins): simplify registration lifecycle policy
- [#133518](https://github.com/openclaw/openclaw/pull/133518) perf(plugins): avoid eager loader imports for active registry reads
- [#133508](https://github.com/openclaw/openclaw/pull/133508) refactor(ui): consolidate chat rendering ownership
- [#133532](https://github.com/openclaw/openclaw/pull/133532) test(auto-reply): prepare memory flush model capabilities
- [#133470](https://github.com/openclaw/openclaw/pull/133470) fix(ui): replace startup hourglasses with capacity-aware rings
- [#133493](https://github.com/openclaw/openclaw/pull/133493) fix(talk): preserve provider conversation order in browser transcripts
- [#133495](https://github.com/openclaw/openclaw/pull/133495) feat(ui): add CRT terminal theme
- [#133509](https://github.com/openclaw/openclaw/pull/133509) refactor: share ordered Claw update rollback handling
- [#133368](https://github.com/openclaw/openclaw/pull/133368) fix(ci): drain plugin publication Git before trust and readback
- [#133504](https://github.com/openclaw/openclaw/pull/133504) fix(docker): restore container CLI access with custom host ports
- [#133506](https://github.com/openclaw/openclaw/pull/133506) fix(release): preserve frozen plugin prerelease context
- [#133505](https://github.com/openclaw/openclaw/pull/133505) test(docker): retain self-upgrade failure diagnostics
- [#133443](https://github.com/openclaw/openclaw/pull/133443) fix(line): pace block replies with the agent's humanDelay
- [#133496](https://github.com/openclaw/openclaw/pull/133496) improve: speed up legacy session transcript imports
- [#133461](https://github.com/openclaw/openclaw/pull/133461) fix: isolate conversation bindings and align subagent command targets
- [#133439](https://github.com/openclaw/openclaw/pull/133439) feat(ui): identify sending agents on forwarded messages
- [#133491](https://github.com/openclaw/openclaw/pull/133491) perf(process): reuse capacity facts within group selection
- [#133498](https://github.com/openclaw/openclaw/pull/133498) fix(release): allow guarded stable Docker recovery
- [#133489](https://github.com/openclaw/openclaw/pull/133489) fix: avoid repeated naming and regressing session startup progress
- [#133469](https://github.com/openclaw/openclaw/pull/133469) feat(sessions): default session tools to agent visibility
- [#133492](https://github.com/openclaw/openclaw/pull/133492) docs(ci): correct performance lane auth and scheduling
- [#133460](https://github.com/openclaw/openclaw/pull/133460) fix(beam): omit mixed Claude tool content and preserve snapshot state
- [#133417](https://github.com/openclaw/openclaw/pull/133417) fix(ui): preserve explicit theme while reconnecting
- [#133484](https://github.com/openclaw/openclaw/pull/133484) fix(voice-call): fence obsolete automatic replies
- [#132798](https://github.com/openclaw/openclaw/pull/132798) fix(ui): keep Inbox tabs stable across empty categories
- [#133472](https://github.com/openclaw/openclaw/pull/133472) fix: Stop waits for pending SSH workspace cleanup
- [#117527](https://github.com/openclaw/openclaw/pull/117527) fix(tts): preserve canonical voice selections through normalization
- [#133483](https://github.com/openclaw/openclaw/pull/133483) perf(markdown): reuse fallback and table preparation
- [#133485](https://github.com/openclaw/openclaw/pull/133485) fix(codex): wait for Linux process command readiness
- [#132660](https://github.com/openclaw/openclaw/pull/132660) fix(cli): fail sessions tail on follow read errors
- [#133452](https://github.com/openclaw/openclaw/pull/133452) fix(status): preserve prepared context windows
- [#133365](https://github.com/openclaw/openclaw/pull/133365) fix(google): avoid duplicate turn completion after voice interruption
- [#133363](https://github.com/openclaw/openclaw/pull/133363) improve(ui): shimmer while GitHub link previews load
- [#133474](https://github.com/openclaw/openclaw/pull/133474) refactor(ui): simplify chat message rendering and recovery
- [#133467](https://github.com/openclaw/openclaw/pull/133467) fix(ci): update Kova gateway-call contract pin
- [#133466](https://github.com/openclaw/openclaw/pull/133466) perf: reduce repeated diagnostic lifecycle scans
- [#133446](https://github.com/openclaw/openclaw/pull/133446) improve: reduce session import, compaction, and UI startup overhead
- [#133463](https://github.com/openclaw/openclaw/pull/133463) feat(beam): name share URLs after their sessions
- [#133453](https://github.com/openclaw/openclaw/pull/133453) refactor(agents): reuse Workshop text result envelopes
- [#133454](https://github.com/openclaw/openclaw/pull/133454) fix: package oversized release contribution records without losing notes
- [#133458](https://github.com/openclaw/openclaw/pull/133458) chore(ui): refresh control ui locales
- [#133429](https://github.com/openclaw/openclaw/pull/133429) fix(gateway): reduce control-plane stalls during concurrent turns
- [#133441](https://github.com/openclaw/openclaw/pull/133441) fix: native Codex session usage stays zero after /new
- [#133451](https://github.com/openclaw/openclaw/pull/133451) fix: release idle desktops and await cleanup before reuse

#### 🐛 New Issues
- [#133347](https://github.com/openclaw/openclaw/issues/133347) 2026.8.1 migration quarantines valid cron jobs as invalid-schedule and silently drops active inventory `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#133058](https://github.com/openclaw/openclaw/issues/133058) [Bug]: succeeded-but-delivery-failed subagent tasks are never proactively surfaced (queueBlockedTaskFollowup unreachable for runtime "subagent") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#133059](https://github.com/openclaw/openclaw/issues/133059) [Bug]: Main-session outbox recovery can query global history and leave queued messages parked `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#133051](https://github.com/openclaw/openclaw/issues/133051) [Bug]: Telegram delivery succeeds but missing receipt marks Control UI session failed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#133156](https://github.com/openclaw/openclaw/issues/133156) [Bug]: Embeddings ignores requested dimensions when memory search is disabled `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#133077](https://github.com/openclaw/openclaw/issues/133077) [Bug]: Empty HTML formatting tags generate unintended outbound Markdown structure `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#133117](https://github.com/openclaw/openclaw/issues/133117) fix: browser voice stays active after microphone loss `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#132969](https://github.com/openclaw/openclaw/issues/132969) [Bug]: Attributed p and div tags lose block boundaries during plain-text sanitization `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#133475](https://github.com/openclaw/openclaw/issues/133475) Hot-reloading agents.list/agents.defaults mid-resume causes silent zero-output CLI exit that skips the retry path `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133514](https://github.com/openclaw/openclaw/issues/133514) Managed role snapshots can exhaust the deadline before CDP fallback `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133574](https://github.com/openclaw/openclaw/issues/133574) [Bug]: Codex sandbox HTTP 308 redirects do not follow on Python 3.9 `bug` `maintainer` `P2` `clawsweeper:needs-live-repro` 💬2
- [#133573](https://github.com/openclaw/openclaw/issues/133573) [Bug]: Remote sandbox files read as empty with Apple Python 3.9.6 `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#133435](https://github.com/openclaw/openclaw/issues/133435) Agent assignment is inconsistent across core and native Codex prompts `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#133558](https://github.com/openclaw/openclaw/issues/133558) MCP output schemas misresolve URI identifiers with affected fast-uri pins `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬2
- [#133442](https://github.com/openclaw/openclaw/issues/133442) [Bug]: cron read RPCs perform full synchronous write maintenance and starve the gateway event loop `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133166](https://github.com/openclaw/openclaw/issues/133166) [Bug]: Retryable ingress entries retry forever and block the shared lane — PreparedModelCatalogConfigReplacedError wedges Telegram callback drain `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#133497](https://github.com/openclaw/openclaw/issues/133497) [Bug]: Hidden commitment extraction pollutes shared Codex Desktop projects `P2` `impact:ux-friction` 💬2
- [#133503](https://github.com/openclaw/openclaw/issues/133503) [Bug]: Docker container CLI uses the custom host gateway port `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133488](https://github.com/openclaw/openclaw/issues/133488) [Bug]: Session startup retries repeat naming and progress can move backward `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133468](https://github.com/openclaw/openclaw/issues/133468) [Bug]: iMessage loses the canonical current-conversation route when service is unset `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#133455](https://github.com/openclaw/openclaw/issues/133455) [Bug]: SSH workspace Stop loses track of pending cleanup `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#133405](https://github.com/openclaw/openclaw/issues/133405) [Bug]: /status shows wrong context limit (200K) for models with larger catalog windows (e.g. DeepSeek V4 Flash 1M) `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#133351](https://github.com/openclaw/openclaw/issues/133351) [Bug]: Google Live interruption creates an extra terminal Talk turn `bug` `maintainer` 💬2
- [#133346](https://github.com/openclaw/openclaw/issues/133346) [Bug]: Native Codex turns leave fresh zero usage after /new `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#133385](https://github.com/openclaw/openclaw/issues/133385) [Bug]: /bash displays exit 0 after a failed shell command `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#133273](https://github.com/openclaw/openclaw/issues/133273) [Bug]: Web first-run setup accepts same-boot reconnect after restart-required activation `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#133387](https://github.com/openclaw/openclaw/issues/133387) [Bug]: Browser voice restart can retain a retired provider transport `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133359](https://github.com/openclaw/openclaw/issues/133359) [Bug]: Long microphone permission waits expire Browser Talk sessions `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#133053](https://github.com/openclaw/openclaw/issues/133053) Gateway stalls under concurrent session renames and agent turns `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#133348](https://github.com/openclaw/openclaw/issues/133348) [Bug]: Browser Talk gives no visible guidance while microphone access is pending `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#133306](https://github.com/openclaw/openclaw/issues/133306) [Bug]: Windows native module require fails on file:// URLs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬2
- [#133281](https://github.com/openclaw/openclaw/issues/133281) [Bug]: write tool skips overwrites when invalid UTF-8 decodes identically `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133294](https://github.com/openclaw/openclaw/issues/133294) [Bug]: Telegram callback queries share the per-chat ingress lane, so answerCallbackQuery expires during a long turn `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#133333](https://github.com/openclaw/openclaw/issues/133333) [Bug]: Agent tool schemas expose unused per-call arguments `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133305](https://github.com/openclaw/openclaw/issues/133305) [Bug]: Multi-project JSON test reports overwrite earlier results `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133328](https://github.com/openclaw/openclaw/issues/133328) [Bug]: AVI attachments bypass portable playback and lose their file extension `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133319](https://github.com/openclaw/openclaw/issues/133319) [Bug]: Exact formatting edits are discarded as no-ops `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133311](https://github.com/openclaw/openclaw/issues/133311) [Bug]: `isWindowsPlatform()` returns false on Windows when `platform` is omitted/undefined `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#133278](https://github.com/openclaw/openclaw/issues/133278) [Feature Request]: Memory embedding worker has no idle/keep-alive auto-reclaim - one worker persists per agent (600MB-1.1GB each) with no way to configure eviction `P3` 💬2
- [#133274](https://github.com/openclaw/openclaw/issues/133274) [Bug]: OpenAI-compatible HTTP reports success when the agent run budget expires `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#133271](https://github.com/openclaw/openclaw/issues/133271) [Bug]: Setup, onboard, and agent help eagerly load action runtime `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133132](https://github.com/openclaw/openclaw/issues/133132) Control UI loses selected-global agent ownership outside the composer `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#133258](https://github.com/openclaw/openclaw/issues/133258) [Bug]: Doctor JSON reports are truncated when piped `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133253](https://github.com/openclaw/openclaw/issues/133253) [Bug]: memory_search silently caps configured primary limits at ten `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133170](https://github.com/openclaw/openclaw/issues/133170) chat.abort drops the streamed partial reply from the transcript when persistence fails (rpc/stop-command) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#133246](https://github.com/openclaw/openclaw/issues/133246) [Bug]: Responses tool handoff repeats commentary as a combined preamble `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133242](https://github.com/openclaw/openclaw/issues/133242) [Bug]: CLI tables lose borders with CRLF multiline values `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133205](https://github.com/openclaw/openclaw/issues/133205) Chat tool streams return provisional text instead of finalized output `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133159](https://github.com/openclaw/openclaw/issues/133159) [Bug]: Crossing Markdown ranges break Telegram formatting `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#133145](https://github.com/openclaw/openclaw/issues/133145) CLI cached help ignores leading profile selection `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#133138](https://github.com/openclaw/openclaw/issues/133138) Plugin inspection omits install metadata for multi-entry packages `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#133171](https://github.com/openclaw/openclaw/issues/133171) Session observer: defaultPersistDigest can never return null, so unpersistable sessions keep re-billing the utility model `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133118](https://github.com/openclaw/openclaw/issues/133118) fix: GPT-Live control socket failures look like normal hangups `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#133116](https://github.com/openclaw/openclaw/issues/133116) fix: Gemini Live utterances are not finalized during a call `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#133101](https://github.com/openclaw/openclaw/issues/133101) [Bug]: Codex startup fails on unrelated process-inspection errors `maintainer` `P1` `clawsweeper:source-repro` `impact:auth-provider` 💬2
- [#132984](https://github.com/openclaw/openclaw/issues/132984) [Bug]: Model Setup activation strands auth status and chat recovery `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#132996](https://github.com/openclaw/openclaw/issues/132996) [Bug]: extractShellWrapperInlineCommand drops an explicit empty -c payload `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#133012](https://github.com/openclaw/openclaw/issues/133012) [Feature]: Render presentation select blocks as native select_static card menus on Feishu `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#133065](https://github.com/openclaw/openclaw/issues/133065) [Feature]: Show active subscription blocks in models auth list `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133072](https://github.com/openclaw/openclaw/issues/133072) [Bug]: web_search isError records contain only the security wrapper, leaving the outcome ambiguous `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#133073](https://github.com/openclaw/openclaw/issues/133073) [Bug]: summarize skill stops when command discovery selects an unconfigured mise shim `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#133064](https://github.com/openclaw/openclaw/issues/133064) [Feature]: Show channel restart recovery attempts in channels status `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#133677](https://github.com/openclaw/openclaw/issues/133677) [Bug]: LINE shows no typing indicator for replies the Gateway drives 💬1
- [#133479](https://github.com/openclaw/openclaw/issues/133479) Quiet Discord and Slack progress presentation `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133654](https://github.com/openclaw/openclaw/issues/133654) [Bug]: Native node worker omits disabled hosting startup reason `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133658](https://github.com/openclaw/openclaw/issues/133658) [Bug]: removing a channel account leaves its durable ingress rows behind forever `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#133630](https://github.com/openclaw/openclaw/issues/133630) [Bug]: Repository test API publications survive non-isolated file cleanup `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133648](https://github.com/openclaw/openclaw/issues/133648) [Bug]: a LINE channel with Use webhook off receives nothing and still reports healthy `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#133629](https://github.com/openclaw/openclaw/issues/133629) [Feature]: Add a setting to hide empty sidebar groups `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133480](https://github.com/openclaw/openclaw/issues/133480) [Feature]: Group session actions and combine appearance controls `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133647](https://github.com/openclaw/openclaw/issues/133647) launchd "reload" restart handoff can leave the gateway permanently unloaded (bootout succeeds, bootstrap fails, no recovery) `P1` `impact:crash-loop` `maturity:stable` 💬1
- [#133642](https://github.com/openclaw/openclaw/issues/133642) [Bug]: Picker interactions use inconsistent visual feedback and motion `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133625](https://github.com/openclaw/openclaw/issues/133625) [Bug]: LINE credentials cannot be SecretRefs, so a LINE token cannot live in a secret provider `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133632](https://github.com/openclaw/openclaw/issues/133632) Feature: keep the Home agent available in an app-level dock `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133618](https://github.com/openclaw/openclaw/issues/133618) [Bug]: implicitMentions.quotedBot has no effect on LINE, so a quote always bypasses a group's mention requirement `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#133562](https://github.com/openclaw/openclaw/issues/133562) [Bug]: Control UI run output tokens stall, disappear on reload, and freeze in recap `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133341](https://github.com/openclaw/openclaw/issues/133341) [Bug]: Control UI repeats emoji in error alerts `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#133612](https://github.com/openclaw/openclaw/issues/133612) [Bug]: Delayed ACP spawn admits work after the child session is reset or recreated `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133608](https://github.com/openclaw/openclaw/issues/133608) [Bug]: quoted input-file charset parameters silently corrupt text `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133606](https://github.com/openclaw/openclaw/issues/133606) [Feature]: Allow bounded, non-delegable cron add from cron-origin runs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133600](https://github.com/openclaw/openclaw/issues/133600) [Bug]: Channel logs omit nested channel diagnostics `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133603](https://github.com/openclaw/openclaw/issues/133603) [Bug]: Canceling a queued edit after reconnect leaves messages parked `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#133553](https://github.com/openclaw/openclaw/issues/133553) Bug: branch and editor tooltips appear at the top-left of the window `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133602](https://github.com/openclaw/openclaw/issues/133602) Profile-owned custom skills for shared Gateways, preserving solo defaults `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133597](https://github.com/openclaw/openclaw/issues/133597) [Bug]: LINE directory reports no peers or groups on a config that has both `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#133587](https://github.com/openclaw/openclaw/issues/133587) [Feature]: Retire ClawDock in favor of Docker Compose `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133592](https://github.com/openclaw/openclaw/issues/133592) [Feature]: Deliver the buttons and selects an agent reply offers on Discord replies `clawsweeper:bulk-filed` 💬1
- [#133590](https://github.com/openclaw/openclaw/issues/133590) [Feature]: Personal GitHub connections and explicit publication identity `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133576](https://github.com/openclaw/openclaw/issues/133576) [Bug]: LINE answers webhook events marked standby, talking over the channel that holds chat control `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#133569](https://github.com/openclaw/openclaw/issues/133569) [Bug]: Browser transport drops contextless worker and iframe attachments `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#133564](https://github.com/openclaw/openclaw/issues/133564) feat: improved attachment parsing for iMessage and WhatsApp (images, PDFs, files) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133559](https://github.com/openclaw/openclaw/issues/133559) [Bug]: memory status and index help misstate the default agent scope `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133561](https://github.com/openclaw/openclaw/issues/133561) onepassword: Windows-only passEnv entries emit security warnings on non-Windows hosts `security` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#133535](https://github.com/openclaw/openclaw/issues/133535) [Bug]: ClawDock repair and config diagnostics reveal credential values `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#133545](https://github.com/openclaw/openclaw/issues/133545) Control UI working timer includes prior turns for externally started runs `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133538](https://github.com/openclaw/openclaw/issues/133538) [Feature]: Preview pending GitHub project search results `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133555](https://github.com/openclaw/openclaw/issues/133555) [Bug]: Offline split-pane drafts can remain only in tab storage after queue activity `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133541](https://github.com/openclaw/openclaw/issues/133541) [Feature]: Delay and shape the task prompt loading skeleton `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133537](https://github.com/openclaw/openclaw/issues/133537) [Feature]: Show a delayed skeleton while creating a machine connection link `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133550](https://github.com/openclaw/openclaw/issues/133550) Discord /model picker fails to apply session model override on 2026.8.1-beta.3 (stuck "still processing" / "Failed to apply") `P1` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#133534](https://github.com/openclaw/openclaw/issues/133534) [Feature]: Show delayed member skeletons in session sharing `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133531](https://github.com/openclaw/openclaw/issues/133531) [Feature]: Show stable placeholders while browsing folders `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133522](https://github.com/openclaw/openclaw/issues/133522) [Feature]: Use delayed skeleton rows in composer capability menus `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133464](https://github.com/openclaw/openclaw/issues/133464) Session startup hourglass does not distinguish actual scheduler slot waits `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133528](https://github.com/openclaw/openclaw/issues/133528) Setup offers Gateway installation after newer-state compatibility failures `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133517](https://github.com/openclaw/openclaw/issues/133517) [Bug]: Swarm collectors are told to wait for completion notifications they never send `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133513](https://github.com/openclaw/openclaw/issues/133513) [Bug]: Notification settings controls and cards are inconsistent `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133430](https://github.com/openclaw/openclaw/issues/133430) [Bug]: agents.defaults.humanDelay is silently ignored on LINE `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#133501](https://github.com/openclaw/openclaw/issues/133501) [Bug]: Codex /btw fails on every side question after the 0.151.0 harness bump — the side fork omits excludeTurns `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#133456](https://github.com/openclaw/openclaw/issues/133456) Default same-agent session tools to agent visibility `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#133416](https://github.com/openclaw/openclaw/issues/133416) [Bug]: Explicit light theme switches to dark while reconnecting `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133343](https://github.com/openclaw/openclaw/issues/133343) [Bug]: cached long-context usage is underpriced and custom prices can inherit catalog tiers `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133482](https://github.com/openclaw/openclaw/issues/133482) [Feature]: Add API key management inside the webchat UI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133486](https://github.com/openclaw/openclaw/issues/133486) macOS Talk Mode leaks localspeechrecognition: new SFSpeechRecognizer per session grows the service to 42 GB RSS `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#133478](https://github.com/openclaw/openclaw/issues/133478) [Bug]: Automatic transcript migration lacks agent database maintenance authority `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#133448](https://github.com/openclaw/openclaw/issues/133448) [Bug]: Control UI drops WebRTC input transcription failures `maintainer` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#133292](https://github.com/openclaw/openclaw/issues/133292) Embedded transport recovery rejects fully settled failed-tool batches `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#133450](https://github.com/openclaw/openclaw/issues/133450) [Bug]: Machine0 cloud sessions never reuse verified warm images `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133367](https://github.com/openclaw/openclaw/issues/133367) [Bug]: Control UI repeats the visible error in Error details `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133436](https://github.com/openclaw/openclaw/issues/133436) [Bug]: Warm cloud provisioning retries fail after snapshot refresh `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133432](https://github.com/openclaw/openclaw/issues/133432) [Bug]: Test wrapper corrupts passWithNoTests arguments `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133377](https://github.com/openclaw/openclaw/issues/133377) Bug: Beam conversations render in reverse order `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133418](https://github.com/openclaw/openclaw/issues/133418) [Bug]: ask_user options arrive as plain text on LINE, so there is nothing to tap `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#133419](https://github.com/openclaw/openclaw/issues/133419) [Bug]: Whole-file SKILL.md reads retain pagination args and falsely report MCP unavailable `bug` `regression` `P2` `impact:other` 💬1
- [#133397](https://github.com/openclaw/openclaw/issues/133397) Control UI shows URL tooltip alongside rich link card `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133408](https://github.com/openclaw/openclaw/issues/133408) compact(): normal path summarizes an empty conversation when messagesToSummarize is empty (46% of compactions on 2026.7.1-2 stable) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#133392](https://github.com/openclaw/openclaw/issues/133392) [Feature]: Focus-aware browser push notification modes `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#133388](https://github.com/openclaw/openclaw/issues/133388) [Bug]: plugins doctor reports unhealthy state with exit status 0 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#133389](https://github.com/openclaw/openclaw/issues/133389) [Bug]: heartbeat scratch migration targets a disabled shared-workspace agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#133371](https://github.com/openclaw/openclaw/issues/133371) [Feature]: Include session colors in sessions_list readback `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133360](https://github.com/openclaw/openclaw/issues/133360) [Feature]: Extend release validation for exact refs and tooling outcomes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133345](https://github.com/openclaw/openclaw/issues/133345) [Bug]: Dashboard-targeted Codex crons cannot publish pinned HTML widgets `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#133339](https://github.com/openclaw/openclaw/issues/133339) [Feature]: Support structured input in Lobster workflows `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133334](https://github.com/openclaw/openclaw/issues/133334) Proposal: Synthetic Web Environments for OpenClaw Agent Training & Evaluation `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133315](https://github.com/openclaw/openclaw/issues/133315) [Bug/Feature]: api.b.ai misclassified as special-use IP — add hostname/IP whitelist option for SSRF guard `P3` `impact:security` 💬1
- [#133330](https://github.com/openclaw/openclaw/issues/133330) [Feature]: Reset rate limit retry counter after each tool call completion `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133317](https://github.com/openclaw/openclaw/issues/133317) [Feature]: Map WhatsApp message edits into routed system events like Slack `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133314](https://github.com/openclaw/openclaw/issues/133314) [Feature]: Show background timeout causes in process list `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133312](https://github.com/openclaw/openclaw/issues/133312) [Feature]: Support removing the bot reaction in Nextcloud Talk `P3` 💬1
- [#133310](https://github.com/openclaw/openclaw/issues/133310) [Docs Bug]: `CONTRIBUTING.md` uses invalid bare `node --import tsx` instead of `node --import ./scripts/tsx.mjs` `P3` 💬1
- [#133301](https://github.com/openclaw/openclaw/issues/133301) find returns unusable paths for trailing search separators and filename characters `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133167](https://github.com/openclaw/openclaw/issues/133167) Channel plugins implementing only sendFormattedMedia silently lose all media `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#133303](https://github.com/openclaw/openclaw/issues/133303) [Bug]: plugin authoring commands (build/validate/init) abort on an invalid host config they never read `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#133295](https://github.com/openclaw/openclaw/issues/133295) Microsoft Teams agent replies drop their buttons, and a controls-only reply produces no activity `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#133196](https://github.com/openclaw/openclaw/issues/133196) [Bug]: bundled memory-wiki corpus intermittently disappears from active registry `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#133296](https://github.com/openclaw/openclaw/issues/133296) [Bug]: Secrets apply routes shared auth-profile refs to the agent store `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#133115](https://github.com/openclaw/openclaw/issues/133115) [Bug]: `ltm query --order-by` aborts the CLI when the sort column is not listed in --cols `bug` `no-stale` `bug:crash` `P2` 💬1
- [#133288](https://github.com/openclaw/openclaw/issues/133288) Mattermost has no encoding for ask_user question actions, so its prompts arrive without options `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133270](https://github.com/openclaw/openclaw/issues/133270) [Feature]: Deliver outbound location pins on Matrix to match Telegram, LINE, and WhatsApp `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133262](https://github.com/openclaw/openclaw/issues/133262) [Bug]: Control UI keeps the old run after a replacement starts offline `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133265](https://github.com/openclaw/openclaw/issues/133265) [Bug]: CUA Computer zoom drops successful JPEG observations `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#133250](https://github.com/openclaw/openclaw/issues/133250) CI: responsive layout test races browser viewport resize `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133235](https://github.com/openclaw/openclaw/issues/133235) CI: node timeout budget assertion races elapsed time `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133229](https://github.com/openclaw/openclaw/issues/133229) [Bug]: Remote CLI declares inference ready before required Gateway restart `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133245](https://github.com/openclaw/openclaw/issues/133245) [Bug]: Queued ingress expires while waiting behind another follow-up turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#133217](https://github.com/openclaw/openclaw/issues/133217) [Bug]: Control UI rejects local attachments whose dot-segment paths resolve inside allowed roots `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133227](https://github.com/openclaw/openclaw/issues/133227) [Feature]: Show selected Vault provider alias in status output `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#133231](https://github.com/openclaw/openclaw/issues/133231) fix(normalization-core): stableStringify collapses Date, RegExp, Set, and Map instances to empty objects `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133213](https://github.com/openclaw/openclaw/issues/133213) [Bug]: Bash hides oversized newline-terminated final lines `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133223](https://github.com/openclaw/openclaw/issues/133223) [Bug]: cron in-flight running flag sometimes never clears after run finish (ok or error) — job silently stops firing until disable/enable `P1` `impact:other` 💬1
- [#133129](https://github.com/openclaw/openclaw/issues/133129) [Bug]: Windows read tool garbles PowerShell UTF-16 text files `maintainer` 💬1
- [#133207](https://github.com/openclaw/openclaw/issues/133207) Native Windows tests can be skipped for their own test-only changes `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133211](https://github.com/openclaw/openclaw/issues/133211) [Bug]: Control UI changes duration quantities while localizing them `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#133173](https://github.com/openclaw/openclaw/issues/133173) [Bug]: Profile-qualified models lose auth selection in subagents and cron `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133193](https://github.com/openclaw/openclaw/issues/133193) [Bug]: Reasoning content not surfaced (only reasoningTokens counted) via openai-responses transport since 2026.9.1-beta.1 `P2` `impact:ux-friction` 💬1
- [#133144](https://github.com/openclaw/openclaw/issues/133144) [Bug]: Legacy media directives corrupt encoded local file URLs `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133179](https://github.com/openclaw/openclaw/issues/133179) [Feature]: Show attach-only mode in browser status `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#133174](https://github.com/openclaw/openclaw/issues/133174) Question: why does every inbound group message carry a replay of the last 50, when the whole thread is resent each turn? `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133142](https://github.com/openclaw/openclaw/issues/133142) [Bug]: QA cancellation is ignored after a command leader exits `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133172](https://github.com/openclaw/openclaw/issues/133172) Repointed workspace aliases block inbound lanes for 24 hours with no repair path `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133135](https://github.com/openclaw/openclaw/issues/133135) [Bug]: Slack repeats authored text already represented by portable presentations `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#133128](https://github.com/openclaw/openclaw/issues/133128) [Bug]: Ctrl+C does not cancel TUI pickers with modern keyboard input `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#133126](https://github.com/openclaw/openclaw/issues/133126) Support per-agent compaction overrides (agents.entries.<id>.compaction) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133121](https://github.com/openclaw/openclaw/issues/133121) [Feature]: Distinguish auto-disabled automations in compact lists `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133122](https://github.com/openclaw/openclaw/issues/133122) [Feature]: Let the system agent list installed plugins `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133108](https://github.com/openclaw/openclaw/issues/133108) [Feature]: Include stored session categories in sessions CLI JSON `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#133107](https://github.com/openclaw/openclaw/issues/133107) [Feature]: Add a reactions list action to the iMessage channel `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133088](https://github.com/openclaw/openclaw/issues/133088) Feature: Provider-level TTFT-based fast-fallback `P3` 💬1
- [#133082](https://github.com/openclaw/openclaw/issues/133082) System-injected context files grow with each agent turn, causing truncation and failed responses `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133062](https://github.com/openclaw/openclaw/issues/133062) Cron timeout kills agent run but NOT spawned exec children — orphaned processes caused kernel panics `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#133071](https://github.com/openclaw/openclaw/issues/133071) [Feature]: Show last connection age in node status inspection 💬1
- [#133066](https://github.com/openclaw/openclaw/issues/133066) [Bug]: Discord gateway WebSocket still dials direct — no proxy agent in createWebSocket (regression of #102299 in latest 2026.7.1-2) `P3` 💬1
- [#133025](https://github.com/openclaw/openclaw/issues/133025) Cloud sessions from source builds require manually matching worker packages `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#133047](https://github.com/openclaw/openclaw/issues/133047) OpenAI login leaves browser Talk unavailable without manual setup or refresh `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#133681](https://github.com/openclaw/openclaw/issues/133681) Session cleanup undercounts successful zero-byte artifact deletions `bug` `maintainer`

#### 🔒 Closed Issues
- [#130197](https://github.com/openclaw/openclaw/issues/130197) Storage redaction reaches the tool executor — `***` substituted into toolCall.arguments before execution
- [#93917](https://github.com/openclaw/openclaw/issues/93917) Bug: genericRepeat critical/circuit-breaker never fires when exec results vary slightly
- [#101554](https://github.com/openclaw/openclaw/issues/101554) Oversized HTTP/SSE MCP tool-list responses can block the Gateway before catalog limits apply
- [#112668](https://github.com/openclaw/openclaw/issues/112668) sessions_yield abort-settle timeout still drops subagent announce on 2026.7.1-2 (post-SQLite storage rework)
- [#111358](https://github.com/openclaw/openclaw/issues/111358) sessions_send silently delivers as webchat message when target session is agent-mode with no channel binding
- [#119884](https://github.com/openclaw/openclaw/issues/119884) Agent/session DB migration doesn't ANALYZE → stale planner stats → 15s session ops + 30-57s event-loop starvation on large stores
- [#133058](https://github.com/openclaw/openclaw/issues/133058) [Bug]: succeeded-but-delivery-failed subagent tasks are never proactively surfaced (queueBlockedTaskFollowup unreachable for runtime "subagent")
- [#126900](https://github.com/openclaw/openclaw/issues/126900) maxActiveTranscriptBytes loops compaction forever when the compacted transcript stays above the threshold
- [#129084](https://github.com/openclaw/openclaw/issues/129084) [Bug]: image tool resolves sandbox upload file_ reference as workspace-relative path → ENOENT
- [#127807](https://github.com/openclaw/openclaw/issues/127807) No plugin-facing hook can force agent-run termination -- before_tool_call denies calls, nothing can stop a turn
- [#118652](https://github.com/openclaw/openclaw/issues/118652) CLI subprocess processes orphaned on gateway restart — in-memory supervisor registry lost without killing child processes
- [#90364](https://github.com/openclaw/openclaw/issues/90364) [Bug]: TTS summarization sends entire model output to audio instead of summarized text only
- [#126594](https://github.com/openclaw/openclaw/issues/126594) Talk realtime config does not activate bundled realtime voice provider plugin at Gateway startup
- [#125601](https://github.com/openclaw/openclaw/issues/125601) [Bug]: ChatGPT subscription WebRTC Talk emits no finalized user transcript
- [#113169](https://github.com/openclaw/openclaw/issues/113169) [Bug]: Silent OpenAI/Codex OAuth refresh miss is misreported as "No API key found / couldn't sign in"
- [#124527](https://github.com/openclaw/openclaw/issues/124527) [Bug]: Telegram image understanding fails with xAI "Unknown model"
- [#125139](https://github.com/openclaw/openclaw/issues/125139) [Bug]: memory-wiki unsafe-local import re-imports its own vault pages — the loop fixed for bridge mode in #95666 is not covered
- [#124394](https://github.com/openclaw/openclaw/issues/124394) [Bug]: concurrent first write to a not-yet-created settings.json silently loses one process's setting (file lock taken after the read)
- [#124797](https://github.com/openclaw/openclaw/issues/124797) [Bug]: policy check ignores tools.exec.mode, reports mode-configured agents as exec security 'full'
- [#126469](https://github.com/openclaw/openclaw/issues/126469) agents: tool-result truncation replay aborts on idempotencyKey and permanently cuts off conversation history
- [#127523](https://github.com/openclaw/openclaw/issues/127523) Recovery compaction swallows caller abort and continues post-cancel work
- [#119310](https://github.com/openclaw/openclaw/issues/119310) mcpToolsDeny has no agent-scoped source: a per-agent MCP tool denial never covers a session's first turn, and never covers a one-shot session
- [#133059](https://github.com/openclaw/openclaw/issues/133059) [Bug]: Main-session outbox recovery can query global history and leave queued messages parked
- [#133051](https://github.com/openclaw/openclaw/issues/133051) [Bug]: Telegram delivery succeeds but missing receipt marks Control UI session failed
- [#131850](https://github.com/openclaw/openclaw/issues/131850) [Bug]: Restart-sentinel immediate wake is silently dropped for agents without a heartbeat schedule
- [#133156](https://github.com/openclaw/openclaw/issues/133156) [Bug]: Embeddings ignores requested dimensions when memory search is disabled
- [#133077](https://github.com/openclaw/openclaw/issues/133077) [Bug]: Empty HTML formatting tags generate unintended outbound Markdown structure
- [#133117](https://github.com/openclaw/openclaw/issues/133117) fix: browser voice stays active after microphone loss
- [#98403](https://github.com/openclaw/openclaw/issues/98403) [Bug]: plugin.approval.request rejects nullable optional metadata
- [#121958](https://github.com/openclaw/openclaw/issues/121958) [Bug]: Correction-release container images embed the base version and show a permanent update banner
- [#118667](https://github.com/openclaw/openclaw/issues/118667) [Bug]: ModelCompatSchema is .strict() but omits six compat keys that ModelCompatConfig declares — config sets them, validation rejects them
- [#132969](https://github.com/openclaw/openclaw/issues/132969) [Bug]: Attributed p and div tags lose block boundaries during plain-text sanitization
- [#133514](https://github.com/openclaw/openclaw/issues/133514) Managed role snapshots can exhaust the deadline before CDP fallback
- [#127954](https://github.com/openclaw/openclaw/issues/127954) [Feature]: expose a per-account channel reconnect (the watchdog already does it internally), and document `selfChatMode`
- [#130324](https://github.com/openclaw/openclaw/issues/130324) Gateway remains at ~100% CPU with 32–54s event-loop stalls on current main 99a02bf1
- [#133574](https://github.com/openclaw/openclaw/issues/133574) [Bug]: Codex sandbox HTTP 308 redirects do not follow on Python 3.9
- [#133573](https://github.com/openclaw/openclaw/issues/133573) [Bug]: Remote sandbox files read as empty with Apple Python 3.9.6
- [#133435](https://github.com/openclaw/openclaw/issues/133435) Agent assignment is inconsistent across core and native Codex prompts
- [#133558](https://github.com/openclaw/openclaw/issues/133558) MCP output schemas misresolve URI identifiers with affected fast-uri pins
- [#133442](https://github.com/openclaw/openclaw/issues/133442) [Bug]: cron read RPCs perform full synchronous write maintenance and starve the gateway event loop
- [#133166](https://github.com/openclaw/openclaw/issues/133166) [Bug]: Retryable ingress entries retry forever and block the shared lane — PreparedModelCatalogConfigReplacedError wedges Telegram callback drain
- [#133497](https://github.com/openclaw/openclaw/issues/133497) [Bug]: Hidden commitment extraction pollutes shared Codex Desktop projects
- [#133503](https://github.com/openclaw/openclaw/issues/133503) [Bug]: Docker container CLI uses the custom host gateway port
- [#133488](https://github.com/openclaw/openclaw/issues/133488) [Bug]: Session startup retries repeat naming and progress can move backward
- [#133455](https://github.com/openclaw/openclaw/issues/133455) [Bug]: SSH workspace Stop loses track of pending cleanup
- [#133405](https://github.com/openclaw/openclaw/issues/133405) [Bug]: /status shows wrong context limit (200K) for models with larger catalog windows (e.g. DeepSeek V4 Flash 1M)
- [#133351](https://github.com/openclaw/openclaw/issues/133351) [Bug]: Google Live interruption creates an extra terminal Talk turn
- [#131553](https://github.com/openclaw/openclaw/issues/131553) Stopping an exact parent run leaves Swarm collectors running and queued
- [#133346](https://github.com/openclaw/openclaw/issues/133346) [Bug]: Native Codex turns leave fresh zero usage after /new
- [#129473](https://github.com/openclaw/openclaw/issues/129473) voice-call: one failed persistCallRecord permanently wedges outbound calling until restart
- [#133273](https://github.com/openclaw/openclaw/issues/133273) [Bug]: Web first-run setup accepts same-boot reconnect after restart-required activation
- [#133387](https://github.com/openclaw/openclaw/issues/133387) [Bug]: Browser voice restart can retain a retired provider transport
- [#133359](https://github.com/openclaw/openclaw/issues/133359) [Bug]: Long microphone permission waits expire Browser Talk sessions
- [#133053](https://github.com/openclaw/openclaw/issues/133053) Gateway stalls under concurrent session renames and agent turns
- [#127600](https://github.com/openclaw/openclaw/issues/127600) /focus replaces a resolved canonical session owner with hard-coded main
- [#133348](https://github.com/openclaw/openclaw/issues/133348) [Bug]: Browser Talk gives no visible guidance while microphone access is pending
- [#133281](https://github.com/openclaw/openclaw/issues/133281) [Bug]: write tool skips overwrites when invalid UTF-8 decodes identically
- [#133333](https://github.com/openclaw/openclaw/issues/133333) [Bug]: Agent tool schemas expose unused per-call arguments
- [#133305](https://github.com/openclaw/openclaw/issues/133305) [Bug]: Multi-project JSON test reports overwrite earlier results
- [#133328](https://github.com/openclaw/openclaw/issues/133328) [Bug]: AVI attachments bypass portable playback and lose their file extension
- [#133319](https://github.com/openclaw/openclaw/issues/133319) [Bug]: Exact formatting edits are discarded as no-ops
- [#125268](https://github.com/openclaw/openclaw/issues/125268) usage.cost silently drops agentScope=all when agentId is also set
- [#127551](https://github.com/openclaw/openclaw/issues/127551) Recovery compaction drops the admitted writer fence and can publish a superseded summary
- [#133278](https://github.com/openclaw/openclaw/issues/133278) [Feature Request]: Memory embedding worker has no idle/keep-alive auto-reclaim - one worker persists per agent (600MB-1.1GB each) with no way to configure eviction
- [#133274](https://github.com/openclaw/openclaw/issues/133274) [Bug]: OpenAI-compatible HTTP reports success when the agent run budget expires
- [#133271](https://github.com/openclaw/openclaw/issues/133271) [Bug]: Setup, onboard, and agent help eagerly load action runtime
- [#133132](https://github.com/openclaw/openclaw/issues/133132) Control UI loses selected-global agent ownership outside the composer
- [#133258](https://github.com/openclaw/openclaw/issues/133258) [Bug]: Doctor JSON reports are truncated when piped
- [#133253](https://github.com/openclaw/openclaw/issues/133253) [Bug]: memory_search silently caps configured primary limits at ten
- [#126400](https://github.com/openclaw/openclaw/issues/126400) failTurn() logs error=Error and omits runId — turn failures are neither diagnosable nor correlatable
- [#133246](https://github.com/openclaw/openclaw/issues/133246) [Bug]: Responses tool handoff repeats commentary as a combined preamble
- [#133242](https://github.com/openclaw/openclaw/issues/133242) [Bug]: CLI tables lose borders with CRLF multiline values
- [#133205](https://github.com/openclaw/openclaw/issues/133205) Chat tool streams return provisional text instead of finalized output
- [#132833](https://github.com/openclaw/openclaw/issues/132833) [Bug]: Control UI rejects active-run image batches at reconnect storage quota
- [#132865](https://github.com/openclaw/openclaw/issues/132865) [Bug]: full backup cannot preserve supported ~/.openclaw/skills symlinks to ~/.agents/skills
- [#133159](https://github.com/openclaw/openclaw/issues/133159) [Bug]: Crossing Markdown ranges break Telegram formatting
- [#133145](https://github.com/openclaw/openclaw/issues/133145) CLI cached help ignores leading profile selection
- [#131232](https://github.com/openclaw/openclaw/issues/131232) [Bug]: selector-scoped snapshot with no matching elements times out 30s and reports 'profile is external to OpenClaw'
- [#133138](https://github.com/openclaw/openclaw/issues/133138) Plugin inspection omits install metadata for multi-entry packages
- [#133118](https://github.com/openclaw/openclaw/issues/133118) fix: GPT-Live control socket failures look like normal hangups
- [#133116](https://github.com/openclaw/openclaw/issues/133116) fix: Gemini Live utterances are not finalized during a call
- [#133101](https://github.com/openclaw/openclaw/issues/133101) [Bug]: Codex startup fails on unrelated process-inspection errors
- [#128828](https://github.com/openclaw/openclaw/issues/128828) Gateway exits when an agent requests a host the egress proxy cannot normalize
- [#132984](https://github.com/openclaw/openclaw/issues/132984) [Bug]: Model Setup activation strands auth status and chat recovery
- [#132996](https://github.com/openclaw/openclaw/issues/132996) [Bug]: extractShellWrapperInlineCommand drops an explicit empty -c payload
- [#131561](https://github.com/openclaw/openclaw/issues/131561) [Bug]: Telegram session remains running ~15 minutes after successful terminal delivery on beta.3
- [#132864](https://github.com/openclaw/openclaw/issues/132864) [Bug]: Dev Git update fails build verification before detached restart starts
- [#132893](https://github.com/openclaw/openclaw/issues/132893) [Bug]: Codex message forks reject supported paginated history
- [#131306](https://github.com/openclaw/openclaw/issues/131306) Secret requests lose native answers and outlive their requester
- [#133479](https://github.com/openclaw/openclaw/issues/133479) Quiet Discord and Slack progress presentation
- [#133654](https://github.com/openclaw/openclaw/issues/133654) [Bug]: Native node worker omits disabled hosting startup reason
- [#133630](https://github.com/openclaw/openclaw/issues/133630) [Bug]: Repository test API publications survive non-isolated file cleanup
- [#133629](https://github.com/openclaw/openclaw/issues/133629) [Feature]: Add a setting to hide empty sidebar groups
- [#133480](https://github.com/openclaw/openclaw/issues/133480) [Feature]: Group session actions and combine appearance controls
- [#133647](https://github.com/openclaw/openclaw/issues/133647) launchd "reload" restart handoff can leave the gateway permanently unloaded (bootout succeeds, bootstrap fails, no recovery)
- [#133562](https://github.com/openclaw/openclaw/issues/133562) [Bug]: Control UI run output tokens stall, disappear on reload, and freeze in recap
- [#133341](https://github.com/openclaw/openclaw/issues/133341) [Bug]: Control UI repeats emoji in error alerts
- [#133608](https://github.com/openclaw/openclaw/issues/133608) [Bug]: quoted input-file charset parameters silently corrupt text
- [#133600](https://github.com/openclaw/openclaw/issues/133600) [Bug]: Channel logs omit nested channel diagnostics
- [#133553](https://github.com/openclaw/openclaw/issues/133553) Bug: branch and editor tooltips appear at the top-left of the window
- [#133587](https://github.com/openclaw/openclaw/issues/133587) [Feature]: Retire ClawDock in favor of Docker Compose
- [#133592](https://github.com/openclaw/openclaw/issues/133592) [Feature]: Deliver the buttons and selects an agent reply offers on Discord replies
- [#133569](https://github.com/openclaw/openclaw/issues/133569) [Bug]: Browser transport drops contextless worker and iframe attachments
- [#133559](https://github.com/openclaw/openclaw/issues/133559) [Bug]: memory status and index help misstate the default agent scope
- [#133535](https://github.com/openclaw/openclaw/issues/133535) [Bug]: ClawDock repair and config diagnostics reveal credential values
- [#133464](https://github.com/openclaw/openclaw/issues/133464) Session startup hourglass does not distinguish actual scheduler slot waits
- [#133430](https://github.com/openclaw/openclaw/issues/133430) [Bug]: agents.defaults.humanDelay is silently ignored on LINE
- [#133456](https://github.com/openclaw/openclaw/issues/133456) Default same-agent session tools to agent visibility
- [#133416](https://github.com/openclaw/openclaw/issues/133416) [Bug]: Explicit light theme switches to dark while reconnecting
- [#112360](https://github.com/openclaw/openclaw/issues/112360) [Bug]: Voice Call can play a stale response after caller resumes speaking
- [#132795](https://github.com/openclaw/openclaw/issues/132795) [Bug]: Inbox tabs shift when switching to an empty category
- [#133343](https://github.com/openclaw/openclaw/issues/133343) [Bug]: cached long-context usage is underpriced and custom prices can inherit catalog tiers
- [#133482](https://github.com/openclaw/openclaw/issues/133482) [Feature]: Add API key management inside the webchat UI
- [#133448](https://github.com/openclaw/openclaw/issues/133448) [Bug]: Control UI drops WebRTC input transcription failures
- [#133292](https://github.com/openclaw/openclaw/issues/133292) Embedded transport recovery rejects fully settled failed-tool batches
- [#133367](https://github.com/openclaw/openclaw/issues/133367) [Bug]: Control UI repeats the visible error in Error details
- [#125752](https://github.com/openclaw/openclaw/issues/125752) Feature: add readable Beam share URLs
- [#133377](https://github.com/openclaw/openclaw/issues/133377) Bug: Beam conversations render in reverse order
- [#133419](https://github.com/openclaw/openclaw/issues/133419) [Bug]: Whole-file SKILL.md reads retain pagination args and falsely report MCP unavailable
- [#133397](https://github.com/openclaw/openclaw/issues/133397) Control UI shows URL tooltip alongside rich link card
- [#132786](https://github.com/openclaw/openclaw/issues/132786) Goal pre-prompt draws a second card inside the composer
- [#132796](https://github.com/openclaw/openclaw/issues/132796) [Bug]: Connected composer queue and Goal paint different side edges
- [#130550](https://github.com/openclaw/openclaw/issues/130550) Gemini web search: an empty (but well-formed) candidate is reported as `malformed JSON response`
- [#123540](https://github.com/openclaw/openclaw/issues/123540) sessions.branches.list stalls the event loop for ~12s on long-lived sessions (thousands of transcript branches)
- [#124486](https://github.com/openclaw/openclaw/issues/124486) [Bug]: malformed Skill Workshop proposals cannot be rejected or quarantined
- [#132785](https://github.com/openclaw/openclaw/issues/132785) [Bug]: Control UI flashes dark during hard reload on light systems
- [#133312](https://github.com/openclaw/openclaw/issues/133312) [Feature]: Support removing the bot reaction in Nextcloud Talk
- [#133310](https://github.com/openclaw/openclaw/issues/133310) [Docs Bug]: `CONTRIBUTING.md` uses invalid bare `node --import tsx` instead of `node --import ./scripts/tsx.mjs`
- [#133301](https://github.com/openclaw/openclaw/issues/133301) find returns unusable paths for trailing search separators and filename characters
- [#121426](https://github.com/openclaw/openclaw/issues/121426) [Bug]: `stripModelSpecialTokens` inserts spurious whitespace when removing control tokens
- [#133167](https://github.com/openclaw/openclaw/issues/133167) Channel plugins implementing only sendFormattedMedia silently lose all media
- [#133196](https://github.com/openclaw/openclaw/issues/133196) [Bug]: bundled memory-wiki corpus intermittently disappears from active registry
- [#125295](https://github.com/openclaw/openclaw/issues/125295) macOS: ClawHub publish tooling requires GNU timeout
- [#133115](https://github.com/openclaw/openclaw/issues/133115) [Bug]: `ltm query --order-by` aborts the CLI when the sort column is not listed in --cols
- [#133265](https://github.com/openclaw/openclaw/issues/133265) [Bug]: CUA Computer zoom drops successful JPEG observations
- [#133250](https://github.com/openclaw/openclaw/issues/133250) CI: responsive layout test races browser viewport resize
- [#133235](https://github.com/openclaw/openclaw/issues/133235) CI: node timeout budget assertion races elapsed time
- [#133229](https://github.com/openclaw/openclaw/issues/133229) [Bug]: Remote CLI declares inference ready before required Gateway restart
- [#127583](https://github.com/openclaw/openclaw/issues/127583) sessions cleanup --all-agents hides earlier committed stores after later failure
- [#133213](https://github.com/openclaw/openclaw/issues/133213) [Bug]: Bash hides oversized newline-terminated final lines
- [#133223](https://github.com/openclaw/openclaw/issues/133223) [Bug]: cron in-flight running flag sometimes never clears after run finish (ok or error) — job silently stops firing until disable/enable
- [#133129](https://github.com/openclaw/openclaw/issues/133129) [Bug]: Windows read tool garbles PowerShell UTF-16 text files
- [#133207](https://github.com/openclaw/openclaw/issues/133207) Native Windows tests can be skipped for their own test-only changes
- [#133173](https://github.com/openclaw/openclaw/issues/133173) [Bug]: Profile-qualified models lose auth selection in subagents and cron
- [#133193](https://github.com/openclaw/openclaw/issues/133193) [Bug]: Reasoning content not surfaced (only reasoningTokens counted) via openai-responses transport since 2026.9.1-beta.1
- [#133144](https://github.com/openclaw/openclaw/issues/133144) [Bug]: Legacy media directives corrupt encoded local file URLs
- [#133142](https://github.com/openclaw/openclaw/issues/133142) [Bug]: QA cancellation is ignored after a command leader exits
- [#128535](https://github.com/openclaw/openclaw/issues/128535) [Bug]: Media failure receipts dedupe by substring match - quoted warnings suppress real receipts and two layers can emit duplicates
- [#133088](https://github.com/openclaw/openclaw/issues/133088) Feature: Provider-level TTFT-based fast-fallback
- [#133071](https://github.com/openclaw/openclaw/issues/133071) [Feature]: Show last connection age in node status inspection
- [#133066](https://github.com/openclaw/openclaw/issues/133066) [Bug]: Discord gateway WebSocket still dials direct — no proxy agent in createWebSocket (regression of #102299 in latest 2026.7.1-2)
- [#133025](https://github.com/openclaw/openclaw/issues/133025) Cloud sessions from source builds require manually matching worker packages
- [#133047](https://github.com/openclaw/openclaw/issues/133047) OpenAI login leaves browser Talk unavailable without manual setup or refresh

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 238,504 · **Open issues:** 37,951 · **Last push:** <1h ago

Today was a routine maintenance day for Hermes Agent, with no new releases or merged pull requests. Among the newly reported issues, the most significant is #98897, which highlights a bug in the Windows gateway launcher where the .vbs file written as UTF-8 is incorrectly parsed as ANSI, causing issues with non-ASCII HERMES_HOME. Additionally, issue #98931 proposes to incorporate live time and date awareness into the agent, potentially enhancing its usability. Other noted concerns include installation problems on AlmaLinux 8 and performance issues related to slow custom OpenAI-compatible gateways.

#### 🐛 New Issues
- [#98897](https://github.com/NousResearch/hermes-agent/issues/98897) [Bug]: Windows gateway launcher .vbs is written as UTF-8 but wscript parses it as ANSI, so a non-ASCII HERMES_HOME breaks autostart silently `type/bug` `duplicate` `comp/cli` `P2` 💬3
- [#98907](https://github.com/NousResearch/hermes-agent/issues/98907) fix(checkpoints): snapshot V4A patch targets before editing `type/bug` `comp/agent` `tool/file` `P2` 💬2
- [#98814](https://github.com/NousResearch/hermes-agent/issues/98814) Windows: natural-language 'update hermes' from a chat platform makes the updater taskkill /T its own process tree - update silently never runs `type/bug` `comp/cli` `comp/gateway` `tool/terminal` 💬2
- [#98951](https://github.com/NousResearch/hermes-agent/issues/98951) perf(desktop): cache and defer Mermaid rendering to prevent transcript stalls `type/perf` `P3` `comp/desktop` 💬1
- [#98567](https://github.com/NousResearch/hermes-agent/issues/98567) [Bug]: Auto-compression never succeeds on active sessions via slow custom OpenAI-compatible gateway — 256K probe-down vs 1M compression limit mismatch, cache_read explodes (221M) `type/bug` `comp/agent` `P2` `sweeper:risk-session-state` 💬1
- [#98960](https://github.com/NousResearch/hermes-agent/issues/98960) Evaluate MCP/A2A protocol governance alignment and native A2A support `duplicate` `type/feature` `comp/plugins` `P3` 💬1
- [#98938](https://github.com/NousResearch/hermes-agent/issues/98938) [Bug]: Installation problems on AlmaLinux 8 (GCC version + OS detection) `type/bug` `comp/cli` `tool/browser` `P2` 💬1
- [#98924](https://github.com/NousResearch/hermes-agent/issues/98924) read-only SessionDB init dies on UnicodeDecodeError inside _fts_table_probe — breaks all non-FTS read paths + TUI silently drops messages `type/bug` `comp/agent` `comp/cli` `comp/tui` 💬1
- [#98931](https://github.com/NousResearch/hermes-agent/issues/98931) Proposal: bake live time/date awareness into the agent (cheapest "humanity" win) `duplicate` `type/feature` `comp/agent` `P3` 💬1
- [#98926](https://github.com/NousResearch/hermes-agent/issues/98926) [Bug]: title_generation copies the built-in few-shot example verbatim on vague opening messages `type/bug` `comp/agent` `P3` 💬1
- [#98479](https://github.com/NousResearch/hermes-agent/issues/98479) P0: preserve tool whitelist authorization across worker dispatch `type/bug` `comp/agent` `comp/plugins` `P2` 💬1
- [#98923](https://github.com/NousResearch/hermes-agent/issues/98923) feat(desktop): per-member model & reasoning selector for Bot Mode group chats + agent-wide model sync `type/feature` `P3` `needs-decision` `sweeper:risk-session-state` 💬1
- [#98920](https://github.com/NousResearch/hermes-agent/issues/98920) [Bug]: `hermes memory setup` reports "No memory provider plugins detected" when discovery *fails*, hiding the real error `type/bug` `comp/cli` `comp/plugins` `tool/memory` 💬1
- [#98767](https://github.com/NousResearch/hermes-agent/issues/98767) Release hygiene: 1,961 commits past last tagged release (v2026.8.19); version string still 0.20.6 — please cut a 0.20.7 `type/bug` `comp/cli` `P3` `area/install-update` 💬1
- [#98909](https://github.com/NousResearch/hermes-agent/issues/98909) bluebubbles: self-message filter misses server-written rows — agent replies echo back as inbound, infinite self-reply loop `type/bug` `comp/gateway` `P3` `sweeper:risk-session-state` 💬1
- [#98973](https://github.com/NousResearch/hermes-agent/issues/98973) [Bug] Gateway drain reports 0 active while a hygiene-compression future is in flight; shutdown closes SessionDB under the worker and delays unit exit ~90s `type/bug` `comp/agent` `comp/gateway` `P2`
- [#98974](https://github.com/NousResearch/hermes-agent/issues/98974) [Bug] Interrupt abort does not close the transport: "no sockets found", tcp_force_closed=0 — self-hosted serve keeps generating after the user stopped `type/bug` `comp/agent` `provider/openai` `P2`
- [#98975](https://github.com/NousResearch/hermes-agent/issues/98975) [Bug] Compression counters disagree 2.3x: hygiene "actual" is a stale cross-model snapshot; rough estimate double-counts persisted reasoning blobs `type/bug` `comp/agent` `P2` `sweeper:risk-session-state`
- [#98976](https://github.com/NousResearch/hermes-agent/issues/98976) Scheduled in-process cron fires fail with ImportError ('cannot import name X') after hours of uptime — stale sys.modules; manual lane unaffected `type/bug` `comp/agent` `comp/gateway` `comp/cron`
- [#98979](https://github.com/NousResearch/hermes-agent/issues/98979) publish_compression_child() drops hidden/pinned/archived, breaking the documented "whole chain flipped as a unit" contract
- [#98978](https://github.com/NousResearch/hermes-agent/issues/98978) feat(desktop): expose all auxiliary task slots in Settings — 3 of 11 backend slots unreachable in UI
- [#98958](https://github.com/NousResearch/hermes-agent/issues/98958) Design agent identity & delegation layer for MCP tool calls `type/feature` `comp/agent` `tool/delegate` `tool/mcp`
- [#98959](https://github.com/NousResearch/hermes-agent/issues/98959) Add persistent / always-on agent runtime controls (budget, loop, kill switch) `type/feature` `comp/agent` `comp/cli` `P3`
- [#98955](https://github.com/NousResearch/hermes-agent/issues/98955) [Bug]: Desktop — Ctrl+` reveals the terminal but does not take keyboard focus `type/bug` `P2` `needs-repro` `comp/desktop`
- [#98949](https://github.com/NousResearch/hermes-agent/issues/98949) SimpleX adapter: correlated delivery results, stable IDs, long messages, and listener readiness `type/bug` `comp/plugins` `P3` `sweeper:risk-message-delivery`
- [#98936](https://github.com/NousResearch/hermes-agent/issues/98936) [Bug]: Honcho memory provider keeps observation settings as manager-wide state, overwritten from per-session config at init (last session init wins) `type/bug` `comp/plugins` `tool/memory` `P3`
- [#98934](https://github.com/NousResearch/hermes-agent/issues/98934) Delegation: persist and report requested/resolved/actual model evidence `type/feature` `comp/agent` `tool/delegate` `P3`
- [#98910](https://github.com/NousResearch/hermes-agent/issues/98910) [P0] hostile config writer can achieve arbitrary executable via key_cmd — needs externally anchored allowlist `type/feature` `comp/agent` `area/auth` `area/config`
- [#98911](https://github.com/NousResearch/hermes-agent/issues/98911) Telegram hint should prefer native clarify buttons over copy controls `type/bug` `comp/agent` `platform/telegram` `P2`
- [#98831](https://github.com/NousResearch/hermes-agent/issues/98831) [P0] key_cmd implicit shell + wrapper re-entry — trusted-operator hardening (hostile-writer allowlist tracked in #98910) `type/security` `comp/agent` `area/auth` `area/config`

#### 🔒 Closed Issues
- [#98897](https://github.com/NousResearch/hermes-agent/issues/98897) [Bug]: Windows gateway launcher .vbs is written as UTF-8 but wscript parses it as ANSI, so a non-ASCII HERMES_HOME breaks autostart silently
- [#98907](https://github.com/NousResearch/hermes-agent/issues/98907) fix(checkpoints): snapshot V4A patch targets before editing

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,518 · **Open issues:** 7,216 · **Last push:** <1h ago

On August 31, 2026, vLLM did not release any new versions, but several important bug fixes and enhancements were merged. Notable changes included fixing global config lookups in the sparse indexer, enhancing CUDA graph safety in metadata handling, and improving support for quantization routes in NVFP4 checkpoints. A significant new issue was raised regarding shared memory assumptions in KV-offloading, which could cause multi-node engines to hang during initialization. Overall, the day's activity was focused on maintenance and performance improvements rather than major new features or releases.

#### ✅ Merged PRs
- [#49274](https://github.com/vllm-project/vllm/pull/49274) [Bugfix] Make metadata send non-blocking in GroupCoordinator.isend_tensor_dict
- [#54313](https://github.com/vllm-project/vllm/pull/54313) [Flashinfer] Upgrade Flashinfer version to 0.6.18
- [#54468](https://github.com/vllm-project/vllm/pull/54468) [CI] Restore gpu_1_queue routing for torch-abi audit
- [#54418](https://github.com/vllm-project/vllm/pull/54418) [Bugfix][Spec Decode] Keep default CUDA graph sizes memory-safe
- [#54324](https://github.com/vllm-project/vllm/pull/54324) [Bugfix] Validate scale-out transfer params
- [#54427](https://github.com/vllm-project/vllm/pull/54427) [Bugfix][Quantization][MoE] Route weight only NVFP4 checkpoints through W4A16
- [#54358](https://github.com/vllm-project/vllm/pull/54358) [codeowners] Add jperezdealgaba to security file ownership
- [#54439](https://github.com/vllm-project/vllm/pull/54439) [Bugfix][Multimodal] Avoid caching full prompts in fallback
- [#54412](https://github.com/vllm-project/vllm/pull/54412) [Doc] Fix griffe warnings in HYV4 tool parser
- [#54400](https://github.com/vllm-project/vllm/pull/54400) [Bugfix] Avoid global config lookup in sparse indexer forward
- [#53877](https://github.com/vllm-project/vllm/pull/53877) [Bugfix][Kernel] Keep packed GDN decode beta in FP32
- [#53531](https://github.com/vllm-project/vllm/pull/53531) [Test][VLM] Add batch-invariance tests for Qwen3-VL
- [#54326](https://github.com/vllm-project/vllm/pull/54326) [CI] Mark L4 GPU test steps with device: l4 for EKS migration
- [#54420](https://github.com/vllm-project/vllm/pull/54420) ci: add MIG slice size to H200 job labels
- [#52033](https://github.com/vllm-project/vllm/pull/52033) [Perf][ROCm] Dual-stream decode with hipgraphs
- [#54380](https://github.com/vllm-project/vllm/pull/54380) [Model] Honor cap_pixels_per_frame in Qwen3-VL memory profiling
- [#54044](https://github.com/vllm-project/vllm/pull/54044) [Bugfix] Reset cached Mamba align metadata on profiling teardown
- [#54330](https://github.com/vllm-project/vllm/pull/54330) [CI] Add explicit step keys to 18 hardware test steps
- [#54353](https://github.com/vllm-project/vllm/pull/54353) [Bugfix] Bound cache_salt length to prevent DoS via scheduler CPU exhaustion
- [#38434](https://github.com/vllm-project/vllm/pull/38434) [Fix] Improve ROCm detection in WSL environments
- [#53760](https://github.com/vllm-project/vllm/pull/53760) [Rust Frontend][gRPC] Add audio and video media inputs
- [#54346](https://github.com/vllm-project/vllm/pull/54346) [Bugfix][Multimodal] Release Qwen2.5-VL and Qwen3-VL RoPE caches with the model
- [#51171](https://github.com/vllm-project/vllm/pull/51171) [ROCm][MLA] Reach FULL cudagraphs for AITER MLA speculative decoding
- [#54048](https://github.com/vllm-project/vllm/pull/54048) [Bugfix][MoE] Enable cuBLAS out_dtype router GEMM on all CUDA archs (fixes family-120/GB10)

#### 🐛 New Issues
- [#54415](https://github.com/vllm-project/vllm/issues/54415) [Bug][Feature][KV-offloading]: shared-mmap CPU region assumes all ranks on one host — multi-node engines hang at init; node-local disk tier reference implementation 💬4
- [#54426](https://github.com/vllm-project/vllm/issues/54426) [RFC] Qwen3.8-Flash-Next: fp8_e4m3 KV cache on the QSA path — working patch, one machine, looking for corroboration 💬2
- [#54383](https://github.com/vllm-project/vllm/issues/54383) First boot of a new `(max-num-batched-tokens, max-num-seqs)` shape is granted a ~5% smaller KV cache than subsequent identical boots 💬2
- [#54458](https://github.com/vllm-project/vllm/issues/54458) [Bug]: Hybrid mamba/attention page alignment inflates attention blocks to 7808 tokens — per-request KV footprint of ~23 giant pages collapses concurrency and prefix caching (GLM-5.3-Flash/Glm5Next) `kv-cache-manager` `glm` 💬1
- [#54451](https://github.com/vllm-project/vllm/issues/54451) [ROCm] DFlash unusable for GLM-5.3-Flash: glm5next lacks SupportsEagle3, and ROCM_AITER_MLA_SPARSE has no non-causal path `rocm` `kimi` `glm` 💬1
- [#54425](https://github.com/vllm-project/vllm/issues/54425) [Bug]: V2 sampler warmup misses explicit-seed native path when FlashInfer is enabled 💬1
- [#54438](https://github.com/vllm-project/vllm/issues/54438) [Performance]: gfx1100 ranks ROCM_ATTN above TRITON_ATTN for a custom kernel it does not use at head_size 256 `rocm` 💬1
- [#54389](https://github.com/vllm-project/vllm/issues/54389) [Feature]: Tencent/WeMM-Embedding `feature request` 💬1
- [#54414](https://github.com/vllm-project/vllm/issues/54414) [Feature][KV-offloading]: recent-window state groups can never participate in restores — per-group offload exclusion + hit-boundary rollback (GLM-5.3 tail_cache) `glm` 💬1
- [#54413](https://github.com/vllm-project/vllm/issues/54413) [Feature][KV-offloading]: OffloadingConnector rejects hybrid models whose KV groups have blocks smaller than one hash unit (GLM-5.3-Flash) — per-group blocks_per_chunk implementation attached `glm` 💬1
- [#54392](https://github.com/vllm-project/vllm/issues/54392) [Bug]: PD-admitted Mamba request is spec-padded before prefill completes, then align split truncates the 8-token window to 5 `kimi` 💬1
- [#54477](https://github.com/vllm-project/vllm/issues/54477) [RFC]: Selective Weight Reload for RL Training `RFC` `quantization`
- [#54443](https://github.com/vllm-project/vllm/issues/54443) [RFC]: Weight version metadata in online RL: current behavior and open questions `RFC` `kimi`
- [#54459](https://github.com/vllm-project/vllm/issues/54459) [Bug] [Portability][MSVC]: M_LOG2E is unavailable when building Flash Attention with NVCC and MSVC `bug`
- [#54453](https://github.com/vllm-project/vllm/issues/54453) [Performance]: muse_glimmer makes decoding quadratic under structured output `structured-output`
- [#54455](https://github.com/vllm-project/vllm/issues/54455) [Bug]: sampler warmup misses the plain-greedy path — spec-decode rejection kernels JIT on the first request `intel-gpu`
- [#54437](https://github.com/vllm-project/vllm/issues/54437) [Bug]: structured output can sample unconstrained tokens when the draft hand-off goes stale (spec decode + async scheduling + PP) `structured-output`
- [#54434](https://github.com/vllm-project/vllm/issues/54434) [Bug] hy_v4 (Hy4-preview): degenerate output with FLASHINFER_MLA_SPARSE_SM120 — the only available sparse backend on SM120
- [#54387](https://github.com/vllm-project/vllm/issues/54387) [Doc]: Document hybrid NIXL DS-layout requirement and connector HMA compatibility `kv-connector`
- [#54385](https://github.com/vllm-project/vllm/issues/54385) [Bug]: DeepSeek V4 DSpark TP=2 on 2× GB10 hits dual-rank Xid 31 at the inferred T=16 PIECEWISE warmup `deepseek`

#### 🔒 Closed Issues
- [#49921](https://github.com/vllm-project/vllm/issues/49921) [Perf] BF16x3 router GEMM gated off family-120 Blackwell (GB10 / DGX Spark, sm_121) — the only barrier for DeepSeek-V4-Flash's fp32 router
- [#53505](https://github.com/vllm-project/vllm/issues/53505) [Bug]: [SpecDecode] Hybrid Mamba (align) corrupts under speculative decoding when a KV connector is attached — even with zero retrieved tokens
- [#32659](https://github.com/vllm-project/vllm/issues/32659) [RFC]: Tracking follow-up progress on Encode–Prefill–Decode Disaggregation
- [#32720](https://github.com/vllm-project/vllm/issues/32720) [Bug]: More robust 32 bit indexing
- [#32926](https://github.com/vllm-project/vllm/issues/32926) [Feature]: Add dedicated tool parser for Qwen2.5-Coder models
- [#33741](https://github.com/vllm-project/vllm/issues/33741) Optimize --help performance: Avoid torch import during help display
- [#53192](https://github.com/vllm-project/vllm/issues/53192) [RFC]: V1/V2 Weight Reload with Streaming Quantization Units
- [#54389](https://github.com/vllm-project/vllm/issues/54389) [Feature]: Tencent/WeMM-Embedding
- [#54337](https://github.com/vllm-project/vllm/issues/54337) [Bug]: Assistant `content=null` + `tool_calls` renders literal "None" into chat template context — degenerate outputs in agent workloads
- [#54189](https://github.com/vllm-project/vllm/issues/54189) NVFP4 MoE silently folds an uninitialised activation scale for weight-only checkpoints (zeroes every expert)
- [#54116](https://github.com/vllm-project/vllm/issues/54116) [CI Failure]: Entrypoints Integration (API Server OpenAI - Part 1) - test_openai_schema.py::test_openapi_stateless[POST /inference/v1/generate] 500 on fuzzed ec_transfer_params

### SGLang (`sgl-project/sglang`)

**Stars:** 32,938 · **Open issues:** 5,005 · **Last push:** <1h ago

On August 31, 2026, SGLang saw no new releases but a number of significant merges, including a fix for a startup crash related to preloaded weights and performance enhancements in the Qwen-Image output projection biases. Notably, the integration of unified-memory dense KV views for MHA/SWA models and the introduction of a cache contract for the external linker were also completed. Additionally, there were various performance improvements within the diffusion module, including caching and execution options. Among the newly reported issues, a notable bug was identified regarding the Qwen3.8-Flash-Next QSA, which corrupts outputs during decoding on specific hardware setups.

#### ✅ Merged PRs
- [#37035](https://github.com/sgl-project/sglang/pull/37035) [MLX] Fix startup crash when reporting preloaded weights
- [#37116](https://github.com/sgl-project/sglang/pull/37116) [diffusion] perf: absorb Qwen-Image output projection biases
- [#37108](https://github.com/sgl-project/sglang/pull/37108) [mem_cache] Share one `ReqKvInfo` between a streaming session slot and its request
- [#34602](https://github.com/sgl-project/sglang/pull/34602) feat(unified-memory): dense KV views for uniform-row MHA/SWA models
- [#37094](https://github.com/sgl-project/sglang/pull/37094) [mem_cache] Move `req_pool_idx` into `ReqKvInfo`
- [#35883](https://github.com/sgl-project/sglang/pull/35883) Fix stale GLM MoE routing after runtime weight updates
- [#37090](https://github.com/sgl-project/sglang/pull/37090) [Diffusion] Cache Qwen-Image modulation across serial CFG branches
- [#37075](https://github.com/sgl-project/sglang/pull/37075) [Diffusion][Kernel] Fuse Wan2.2 NVFP4 bias + GELU on Blackwell
- [#37148](https://github.com/sgl-project/sglang/pull/37148) [CI] Fix stale GPU capability test patches
- [#36845](https://github.com/sgl-project/sglang/pull/36845) fix(qsa): restore SM121 correctness with Humanize and Kernel Design Agent
- [#37098](https://github.com/sgl-project/sglang/pull/37098) [Unified Cache Linker][2/N]: Add device pool assembly for external linkers
- [#37142](https://github.com/sgl-project/sglang/pull/37142) [Fix] Fix transformer loader fallback test fixture
- [#37091](https://github.com/sgl-project/sglang/pull/37091) [Unified Cache][1/N]: Support cache contract for external linker
- [#37049](https://github.com/sgl-project/sglang/pull/37049) [Diffusion] Make component execution options fail closed
- [#37043](https://github.com/sgl-project/sglang/pull/37043) [vlm] fix: preserve per-request vit graph metadata for qwen-vl
- [#35858](https://github.com/sgl-project/sglang/pull/35858) [diffusion] Allow Cache-DiT with DiT layerwise offload
- [#34484](https://github.com/sgl-project/sglang/pull/34484) [ROCm] Fix QuickReduce fp16 saturation corrupting bf16 all-reduces (106M non-finite -> 0, +0.3%)
- [#36983](https://github.com/sgl-project/sglang/pull/36983) fix(vlm): recover multimodal decode and processor failures
- [#37004](https://github.com/sgl-project/sglang/pull/37004) [Diffusion] Stream native VAE weights directly to GPU
- [#37087](https://github.com/sgl-project/sglang/pull/37087) [Config] Round 5.2: the per-model declarations get their own modules
- [#37086](https://github.com/sgl-project/sglang/pull/37086) [Config] Round 5.1: the published-side readers ask the bags, and a platform fact gets one address
- [#36917](https://github.com/sgl-project/sglang/pull/36917) [Diffusion] Reject incompatible transformer fallback
- [#34446](https://github.com/sgl-project/sglang/pull/34446) [rotary] Fix the fused Qwen3.5 RoPE kernel discarding mrope height and width
- [#37070](https://github.com/sgl-project/sglang/pull/37070) Scatter mm embeddings with row index_copy_ instead of masked_scatter_ to cut transient GPU memory
- [#37092](https://github.com/sgl-project/sglang/pull/37092) [AMD] Update v4 amd cookbook 0830
- [#33048](https://github.com/sgl-project/sglang/pull/33048) [Bugfix] Hold references to fire-and-forget tasks in disaggregation
- [#37085](https://github.com/sgl-project/sglang/pull/37085) [mem_cache] Settle extend `kv_committed_len` inside `alloc_for_extend`
- [#37078](https://github.com/sgl-project/sglang/pull/37078) [mem_cache] Move `kv_committed_len` into `ReqKvInfo`
- [#37029](https://github.com/sgl-project/sglang/pull/37029) fix(frontend): bound stop strings and regex patterns
- [#36994](https://github.com/sgl-project/sglang/pull/36994) [Diffusion] Rollout API: support return only SDE latents
- [#37083](https://github.com/sgl-project/sglang/pull/37083) [AMD] Cherry-pick dsv4 fp4 kv-cache fix aiter commit
- [#37073](https://github.com/sgl-project/sglang/pull/37073) Use Flashinfer 0.6.18 release for CUDA 13.4 package
- [#36998](https://github.com/sgl-project/sglang/pull/36998) Bump sgl-deep-gemm to v0.1.6
- [#36982](https://github.com/sgl-project/sglang/pull/36982) [mem_cache] Move `cache_protected_len` and `swa_evict_floor` into `ReqKvInfo`
- [#32665](https://github.com/sgl-project/sglang/pull/32665) [MoE] Add extension points for custom runner backends
- [#35127](https://github.com/sgl-project/sglang/pull/35127) [sglang-miles] Extract Anthropic conversion into standalone utils
- [#37026](https://github.com/sgl-project/sglang/pull/37026) fix(hicache): isolate decode offload state per request
- [#36515](https://github.com/sgl-project/sglang/pull/36515) [AMD] fix: do not emit a shared-expert marker twice on the per-rank slot path

#### 🐛 New Issues
- [#37128](https://github.com/sgl-project/sglang/issues/37128) [Bug] Spec V2 paths no longer emit speculative-decoding OpenTelemetry spans 💬1
- [#37111](https://github.com/sgl-project/sglang/issues/37111) [Bug] Qwen3.8-Flash-Next QSA + NEXTN decode graph silently corrupts output on GB10 TP2 💬1
- [#37115](https://github.com/sgl-project/sglang/issues/37115) [Bug] [XPU/ROCm/NPU] Defer sgl_kernel.quantization import in expert_pack 💬1
- [#37160](https://github.com/sgl-project/sglang/issues/37160) LMCache integration ignores per-request cache_salt: external storage keys are token-only, breaking tenant isolation
- [#37150](https://github.com/sgl-project/sglang/issues/37150) [Feature] Tuning / per-GPU config for DSv4 top-k v2 cluster launch plan (kClusterFloor / kNumPersistentClusters / kCandidates)
- [#37105](https://github.com/sgl-project/sglang/issues/37105) [Bug] GLM-5.3-Flash on RTX PRO 6000 (sm_120): two DSA backend blockers after the deep_gemm NameError
- [#37097](https://github.com/sgl-project/sglang/issues/37097) [Bug] Pretokenized image requests can crash GLM MRoPE with a stale retokenized mask
- [#37089](https://github.com/sgl-project/sglang/issues/37089) [Bug] Qwen3.8-Flash-Next W4A16 on A100 TP4: Marlin MoE invalid thread config; Triton MoE then hits QSA FA-CuTe capture failure

#### 🔒 Closed Issues
- [#29516](https://github.com/sgl-project/sglang/issues/29516) [Bug] qwen3.6-35b-a3b-fp8 with sglang RuntimeError: The size of tensor a (96) must match the size of tensor b (90) at non-singleton dimension 1
- [#26482](https://github.com/sgl-project/sglang/issues/26482) [Bug] Health check failed. Server couldn't get a response from detokenizer for last 20 seconds.
- [#31445](https://github.com/sgl-project/sglang/issues/31445) UnifiedRadixCache: extra-pool prefetch lifecycle missing on abort (segfault under timeout policy)
- [#29801](https://github.com/sgl-project/sglang/issues/29801) [Bug] According to the ascend_npu_glm5.2_examples.mdx document Deploy the GLM5.2 model on the A3 server Failed and reported an error.
- [#29646](https://github.com/sgl-project/sglang/issues/29646) please help installing SGLang
- [#25169](https://github.com/sgl-project/sglang/issues/25169) [Bug] [NPU] Ascend FIA attention should reject page_size=1 or document block_size alignment requirement
- [#36802](https://github.com/sgl-project/sglang/issues/36802) [Bug] GLM-5.3-Flash: server hangs during warmup when `--enable-dp-attention` is on (idle forward blocks in dsv4 gemm, requests never scheduled)
- [#29764](https://github.com/sgl-project/sglang/issues/29764) [Bug] model gateway always wires in tokenizer even tho http cache-aware routing does not seem to use the tokenizer
- [#37031](https://github.com/sgl-project/sglang/issues/37031) [Bug] MLX server crashes because MlxModelRunnerStub has no loader
- [#29811](https://github.com/sgl-project/sglang/issues/29811) [Bug] why --enable-mixed-chunk is no use when opened mtp?
- [#29790](https://github.com/sgl-project/sglang/issues/29790) [Bug] LoadConfig does not accept inc_save_path in AutoRound SGLang API usage demo
- [#37115](https://github.com/sgl-project/sglang/issues/37115) [Bug] [XPU/ROCm/NPU] Defer sgl_kernel.quantization import in expert_pack
- [#34473](https://github.com/sgl-project/sglang/issues/34473) [ROCm] QuickReduce bf16→fp16 cast corrupts gpt-oss-120b residuals: 62.7M non-finite elements on the default config

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 126,409 · **Open issues:** 2,316 · **Last push:** 1h ago

In the last 24 hours, llama.cpp released several versions, including b10705, which improves TENSOR_READ_LAZY handling, ensuring lazy tensors are effectively managed on the CPU. Other noteworthy releases include b10704, optimizing CUDA's expert count handling, and b10701, which addresses missing NVFP4 scales in DFlash2's attention operations. Significant merged features included the addition of fa-vec tunings for M3 Ultra in #27999 and the resolution of critical bugs like the CPY fence bug in #28033. Additionally, a new issue was reported regarding memory leaks in the Vulkan engine (#28008), highlighting ongoing concerns with the engine's performance.

#### 🚀 New Releases
- [b10705](https://github.com/ggml-org/llama.cpp/releases/tag/b10705) b10705
- [b10704](https://github.com/ggml-org/llama.cpp/releases/tag/b10704) b10704
- [b10703](https://github.com/ggml-org/llama.cpp/releases/tag/b10703) b10703
- [b10702](https://github.com/ggml-org/llama.cpp/releases/tag/b10702) b10702
- [b10701](https://github.com/ggml-org/llama.cpp/releases/tag/b10701) b10701
- [b10700](https://github.com/ggml-org/llama.cpp/releases/tag/b10700) b10700
- [b10699](https://github.com/ggml-org/llama.cpp/releases/tag/b10699) b10699
- [b10698](https://github.com/ggml-org/llama.cpp/releases/tag/b10698) b10698
- [b10697](https://github.com/ggml-org/llama.cpp/releases/tag/b10697) b10697
- [b10696](https://github.com/ggml-org/llama.cpp/releases/tag/b10696) b10696

#### ✅ Merged PRs
- [#28033](https://github.com/ggml-org/llama.cpp/pull/28033) hexagon: fix CPY fence bug
- [#27837](https://github.com/ggml-org/llama.cpp/pull/27837) llama: improve TENSOR_READ_LAZY handling
- [#28017](https://github.com/ggml-org/llama.cpp/pull/28017) metal : add remaining Q4_1/Q5_0/Q5_1 fa-vec tunings for M2
- [#26500](https://github.com/ggml-org/llama.cpp/pull/26500) rpc: avoid serializing buffers from other servers
- [#28038](https://github.com/ggml-org/llama.cpp/pull/28038) ggml : fix ggml_backend_buft_get_alloc_size() guard
- [#28011](https://github.com/ggml-org/llama.cpp/pull/28011) kv-cells: stop the sequence scan once all sequences are seen
- [#27999](https://github.com/ggml-org/llama.cpp/pull/27999) metal: add fa-vec tunings for M3 Ultra
- [#27978](https://github.com/ggml-org/llama.cpp/pull/27978) CUDA: let any expert count use the fast mm_ids_helper path
- [#27930](https://github.com/ggml-org/llama.cpp/pull/27930) ggml: add SWIGLU_CLAMP
- [#26284](https://github.com/ggml-org/llama.cpp/pull/26284) HIP: tune rdna 3 mmq configs
- [#26753](https://github.com/ggml-org/llama.cpp/pull/26753) Optimized HIP Q2_0 dot-product path for gfx1201 by replacing HIP's byte permutation with native permutation instructions.
- [#28000](https://github.com/ggml-org/llama.cpp/pull/28000) dflash: pass missing NVFP4 scales to attention operations
- [#27785](https://github.com/ggml-org/llama.cpp/pull/27785) hexagon: support for device discovery and create sessions on demand
- [#27963](https://github.com/ggml-org/llama.cpp/pull/27963) metal : Add fa-vec tunings for M3 Pro
- [#27969](https://github.com/ggml-org/llama.cpp/pull/27969) common: rename --tensor-read-lazy to --lazy-mode, add -lzm shorthand
- [#27960](https://github.com/ggml-org/llama.cpp/pull/27960) ggml : add ggml_backend_op_alloc_size_may_expand, use it in RPC
- [#27908](https://github.com/ggml-org/llama.cpp/pull/27908) rpc: fix apple rdma error spew on teardown
- [#27919](https://github.com/ggml-org/llama.cpp/pull/27919) vendor : update cpp-httplib to 0.54.0
- [#27815](https://github.com/ggml-org/llama.cpp/pull/27815) fix pre-rdma macOS versions
- [#27847](https://github.com/ggml-org/llama.cpp/pull/27847) sycl: split long rows in TOP_K instead of one workgroup per row
- [#25648](https://github.com/ggml-org/llama.cpp/pull/25648) metal : fix null-pipeline crash for F16 src1 mul_mat/mul_mat_id
- [#27967](https://github.com/ggml-org/llama.cpp/pull/27967) memory : copy Hadamard matrix to k_rot tensor only if it has buffer assigned
- [#27301](https://github.com/ggml-org/llama.cpp/pull/27301) ggml: allow passing alloc dependencies in graph_optimize

#### 🐛 New Issues
- [#28008](https://github.com/ggml-org/llama.cpp/issues/28008) Misc. bug: Memory leak in the Vulkan engine `bug-unconfirmed` 💬4
- [#28035](https://github.com/ggml-org/llama.cpp/issues/28035) Misc. bug: Performance: Vulkan ggml_vk_get_op_batch_size for GGML_OP_GET_ROWS always returns 0 on Apple M2 Fedora Asahi `bug-unconfirmed` 💬1
- [#28034](https://github.com/ggml-org/llama.cpp/issues/28034) gguf-py quantization time grows quadratically with tensor size at certain row widths `bug-unconfirmed` 💬1
- [#28057](https://github.com/ggml-org/llama.cpp/issues/28057) Eval bug: MTMD_BACKEND_DEVICE: invalid device: RPC0 `bug-unconfirmed`
- [#28048](https://github.com/ggml-org/llama.cpp/issues/28048) Misc. bug: OpenVINO GPU aborts on hybrid recurrent models — `cache_r_l1` view pre-allocated in an OPENVINO0 buffer that cannot run CPY `bug-unconfirmed`
- [#28056](https://github.com/ggml-org/llama.cpp/issues/28056) Eval bug: Cross-request KV-cache contamination on integrated GPUs: missing sync in process_ubatch races zero-copy graph inputs against in-flight compute
- [#28051](https://github.com/ggml-org/llama.cpp/issues/28051) Support Qwen3.x MTP (Multi-Token Prediction) for speculative decoding
- [#28050](https://github.com/ggml-org/llama.cpp/issues/28050) Eval bug: MiniMax-H3-GGUF fails to load up `bug-unconfirmed`
- [#28049](https://github.com/ggml-org/llama.cpp/issues/28049) server: speculative decoding keeps accepted tokens past the EOG, costing the whole previous answer on hybrid models `bug-unconfirmed`
- [#28047](https://github.com/ggml-org/llama.cpp/issues/28047) RPC: [create_node] invalid data ptr — split scheduler ships compute-flagged views to the wrong RPC worker (reproduced with deepseek4 and glm-dsa, >=2 workers, master)
- [#28037](https://github.com/ggml-org/llama.cpp/issues/28037) Analysis: Volta (SM70/SM72) Flash Attention Optimization Paths
- [#28019](https://github.com/ggml-org/llama.cpp/issues/28019) qwen4exp: multi-seq split replay corrupts recurrent state when rs rollback is enabled (why the arch is excluded from llm_arch_supports_rs_rollback?)
- [#28018](https://github.com/ggml-org/llama.cpp/issues/28018) Eval bug: CUDA `bug-unconfirmed`
- [#28012](https://github.com/ggml-org/llama.cpp/issues/28012) Eval bug: [Draft issue] qwen4exp: decode cost grows ~linearly with context — QSA top-k applied as a dense mask, indexer re-pools the whole cache every step `bug-unconfirmed`
- [#28009](https://github.com/ggml-org/llama.cpp/issues/28009) Misc. bug: Windows backend load fails with error 126 when dependency DLLs are next to the backend DLL `bug-unconfirmed`

#### 🔒 Closed Issues
- [#25413](https://github.com/ggml-org/llama.cpp/issues/25413) Compile bug: Windows compilation with BLAS support using AOCL as BLAS vendor fails (using OpenBLAS works)
- [#25455](https://github.com/ggml-org/llama.cpp/issues/25455) SYCL: MUL_MAT_ID prefill path produces wrong results on Intel Arc Pro B70 (Battlemage G31) — causes garbage output on MoE models
- [#21133](https://github.com/ggml-org/llama.cpp/issues/21133) server: slot save/restore and checkpoints blocked for text-only conversations when mmproj is loaded
- [#27766](https://github.com/ggml-org/llama.cpp/issues/27766) Feature Request: Make mmap vs read decision per tensor instead of per file.
- [#27937](https://github.com/ggml-org/llama.cpp/issues/27937) llama-tts: qwen3-tts default context (32768) allocates 3.5 GB of KV cache — 4096 would suffice
- [#24937](https://github.com/ggml-org/llama.cpp/issues/24937) Eval bug: CUDA: llama-bench prefill crashes on MoE/SSM models (ggml_cuda_mul_mat_q / mm_ids_helper) — regression since a6cc43c28; llama-cli OK
- [#25721](https://github.com/ggml-org/llama.cpp/issues/25721) Eval bug: "ggml-cuda.cu:104: CUDA error" with Qwen3.6-35B-A3B-MXFP4_MOE.gguf and reasoning on
- [#27827](https://github.com/ggml-org/llama.cpp/issues/27827) Eval bug: Unable to launch model to chat with
- [#24768](https://github.com/ggml-org/llama.cpp/issues/24768) Feature Request: Gemma 4 MTP "heuristic" n-max
- [#25392](https://github.com/ggml-org/llama.cpp/issues/25392) Support for gemini-nano (weights.bin)
- [#25774](https://github.com/ggml-org/llama.cpp/issues/25774) Feature Request: Supports MonkeyOCRv2
- [#27975](https://github.com/ggml-org/llama.cpp/issues/27975) spec-dec: external DFlash drafter changes outputs at temperature 0 (verified spec-dec invariant violated) — Muse Glimmer 30B
- [#27020](https://github.com/ggml-org/llama.cpp/issues/27020) Eval bug: Dense Llama 4 model crashes
- [#27993](https://github.com/ggml-org/llama.cpp/issues/27993) Qwen3.8-Flash-Next (GGUF): output degenerates to all zeros for prompts longer than ~2K tokens when model is split across RPC hosts (deterministic)
- [#25693](https://github.com/ggml-org/llama.cpp/issues/25693) Eval bug: running Qwen3.5-35B-A3B on Ascend910B4 with Multi-batch，get error inference result
- [#25704](https://github.com/ggml-org/llama.cpp/issues/25704) Misc. bug: Bug 2: RPC Gated Delta Net K op_param Out-of-Bounds State Snapshot Write
- [#25717](https://github.com/ggml-org/llama.cpp/issues/25717) server: CUDA illegal memory access on vision requests with Qwen3.5-35B-A3B + mmproj (M-RoPE) — crash matrix: flash-attn / kv_unified / text-length-before-image
- [#27994](https://github.com/ggml-org/llama.cpp/issues/27994) Eval bug: Parallel Runs with Unified KV Cache Cuases Loss of Coherency on qwen4exp
- [#25703](https://github.com/ggml-org/llama.cpp/issues/25703) Misc. bug: Bug 1: RPC Graph Recompute Use-After-Free After Backing Buffer Free
- [#25711](https://github.com/ggml-org/llama.cpp/issues/25711) Eval bug: prompt processing stuck on Intel (SYCL) with split mode tensor
- [#25732](https://github.com/ggml-org/llama.cpp/issues/25732) docs: double ctx-size with "split-mode: tensor" clarification.
- [#25764](https://github.com/ggml-org/llama.cpp/issues/25764) Misc. bug: Bug 3: RPC ACC/SET Negative Stride op_param Bounds-Check Bypass OOB Write
- [#25765](https://github.com/ggml-org/llama.cpp/issues/25765) Misc. bug: Bug 4: RPC SSM_SCAN Unchecked ids Tensor State Offset OOB Read/Write
- [#25796](https://github.com/ggml-org/llama.cpp/issues/25796) Eval bug: deepseek v4 flash errors out on tool calls with similar parameter names
- [#27949](https://github.com/ggml-org/llama.cpp/issues/27949) Misc. bug: Metal MUL_MAT/MUL_MAT_ID with F16 src1 crashes when a mat-vec kernel is missing

### Ollama (`ollama/ollama`)

**Stars:** 179,797 · **Open issues:** 3,853 · **Last push:** 1d ago

On August 31, 2026, Ollama did not release any new versions or merged pull requests. The day saw the opening of several new issues, among which #18144 is particularly notable, as it reports that the llama-server causes a reproducible Xid 62 error, followed by an Xid 154 GPU reset requirement on versions 0.33.1 and 0.33.2. Additionally, issue #18131 highlights concerns about the MLX prefix cache with an 8 GiB budget causing heavy swapping on 32 GB Apple Silicon during agent workloads, marking it as another significant pain point for users. Overall, it was a routine day in terms of development activity, but these emerging issues reflect ongoing challenges and user frustrations.

#### 🐛 New Issues
- [#18144](https://github.com/ollama/ollama/issues/18144) RTX 5060 Ti: llama-server causes reproducible Xid 62 followed by Xid 154 / GPU Reset Required on Ollama 0.33.1/0.33.2 `bug` 💬4
- [#18131](https://github.com/ollama/ollama/issues/18131) MLX prefix cache: fixed 8 GiB budget causes heavy swap on 32 GB Apple Silicon during agent workloads 💬4
- [#18146](https://github.com/ollama/ollama/issues/18146) ollama create fails on Qwen3.8-Flash-Next GGUF: "failed to validate GGUF with llama-quantize without compatibility patches" (same error as #17279)
- [#18143](https://github.com/ollama/ollama/issues/18143) web_fetch returns incorrect status codes `bug` `cloud`
- [#18138](https://github.com/ollama/ollama/issues/18138) app/ui: unsent draft message is lost when switching between chats
- [#18132](https://github.com/ollama/ollama/issues/18132) MLX prefix cache: fixed 8 GiB budget causes heavy swap on 32 GB Apple Silicon during agent workloads
- [#18133](https://github.com/ollama/ollama/issues/18133) MLX prefix cache: fixed 8 GiB budget causes heavy swap on 32 GB Apple Silicon during agent workloads

#### 🔒 Closed Issues
- [#16773](https://github.com/ollama/ollama/issues/16773) Is there a way to see if a model will return a 403 error when using a free plan?
- [#16265](https://github.com/ollama/ollama/issues/16265) Ollama windows-amd64-mlx is denied MLX models from Ollama model catalog
- [#18127](https://github.com/ollama/ollama/issues/18127) maybe rethink your building of the docker image layers
- [#18128](https://github.com/ollama/ollama/issues/18128) Add qwen-3.8 Flash next to cloud models
- [#18132](https://github.com/ollama/ollama/issues/18132) MLX prefix cache: fixed 8 GiB budget causes heavy swap on 32 GB Apple Silicon during agent workloads
- [#18133](https://github.com/ollama/ollama/issues/18133) MLX prefix cache: fixed 8 GiB budget causes heavy swap on 32 GB Apple Silicon during agent workloads

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,615 · **Open issues:** 4,890 · **Last push:** <1h ago

On August 31, 2026, LiteLLM released two release candidates: v1.100.0-rc.1 and v1.99.0-rc.2, both signed with cosign to ensure Docker image integrity. Significant development was seen with the merged pull requests, including a feature to honor streaming buffer/sampling configurations for unbuffered post-call scans and several typing and test improvements aimed at enhancing code quality and runtime reliability. Notably, a new issue was reported regarding the `stream_options.include_usage=true` setting, which causes streamed tool-call arguments to collapse into a burst at the end of the stream, indicating an area needing attention ahead of production deployments.

#### 🚀 New Releases
- [v1.100.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.100.0-rc.1) v1.100.0-rc.1
- [v1.99.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.99.0-rc.2) v1.99.0-rc.2

#### ✅ Merged PRs
- [#38722](https://github.com/BerriAI/litellm/pull/38722) feat(bedrock): honor streaming buffer/sampling config for unbuffered post_call scans
- [#36722](https://github.com/BerriAI/litellm/pull/36722) chore(typing): clear 1.2k basedpyright Any errors across 16 hotspot files
- [#37778](https://github.com/BerriAI/litellm/pull/37778) chore(typing): clear Any seams across 47 files, ratchet basedpyright ceilings -3,302
- [#38863](https://github.com/BerriAI/litellm/pull/38863) fix(tests): derive the no-cache-read-rate savings baseline from the model map
- [#38862](https://github.com/BerriAI/litellm/pull/38862) test(e2e): backport the select-anchoring and router-fallback spec de-flakes
- [#38840](https://github.com/BerriAI/litellm/pull/38840) fix(proxy): emit timing headers and overhead for /v1/messages and /v1/responses
- [#38805](https://github.com/BerriAI/litellm/pull/38805) chore(ci): promote internal staging to main

#### 🐛 New Issues
- [#38926](https://github.com/BerriAI/litellm/issues/38926) [Bug]: `stream_options.include_usage=true` collapses streamed tool-call arguments into an end-of-stream burst `llm translation` 💬1
- [#38909](https://github.com/BerriAI/litellm/issues/38909) [Bug]: InfinityError uses a mutable default argument for headers, shared across all instances `llm translation` 💬1
- [#38904](https://github.com/BerriAI/litellm/issues/38904) [Bug]: PostHog batch callback silently loses events during flush and on send failure `llm translation` 💬1
- [#38887](https://github.com/BerriAI/litellm/issues/38887) ollama `llm translation` 💬1
- [#38927](https://github.com/BerriAI/litellm/issues/38927) [Bug]: `langfuse_tags` header crashes router retry/fallback on deployments with `litellm_credential_name` (400 instead of failover) `llm translation`
- [#38922](https://github.com/BerriAI/litellm/issues/38922) error
- [#38907](https://github.com/BerriAI/litellm/issues/38907) [Bug] Proxy strips delta.reasoning_items from streaming chunks on the fast-serialization path
- [#38894](https://github.com/BerriAI/litellm/issues/38894) Auto Router v2: GUI edits to tier model settings not persisted — litellm_params keep stale values, router keeps routing on old model `llm translation`
- [#38892](https://github.com/BerriAI/litellm/issues/38892) Python 3.10: `import litellm` fails, `NotRequired` imported from `typing` `llm translation`
- [#38889](https://github.com/BerriAI/litellm/issues/38889) [Security] Vulnerability Report follow-up after no response for a month
- [#38874](https://github.com/BerriAI/litellm/issues/38874) [Bug]: `VectorStoreIndexRegistry` and `VectorStoreRegistry` use mutable default list arguments (`[]`)

#### 🔒 Closed Issues
- [#28772](https://github.com/BerriAI/litellm/issues/28772) Feature Request: Add Chinese (Simplified) language support / 添加简体中文语言支持
- [#18155](https://github.com/BerriAI/litellm/issues/18155) [Bug]: GitHub Copilot Provider - Excessive Premium Request Usage
- [#38731](https://github.com/BerriAI/litellm/issues/38731) [Bug]: litellm stops forwarding model requests
- [#26613](https://github.com/BerriAI/litellm/issues/26613) [Bug]: DB model 'litellm_params' not applied to requests (e.g., use_chat_completions_api)
- [#28461](https://github.com/BerriAI/litellm/issues/28461) [Bug]: "When using v0.21.0 to launch deepseek-v4-flashwith thinking mode enabled, the reasoning_contentfield is not returned."
- [#28766](https://github.com/BerriAI/litellm/issues/28766) [Bug]: Semantic MCP Tool Filtering emits invalid OpenAI tool schema
- [#28769](https://github.com/BerriAI/litellm/issues/28769) RFC: Cross-provider token-budget normalization at the Router layer (Router.budget + Router.check_fit preflight)
- [#28773](https://github.com/BerriAI/litellm/issues/28773) [Bug]: The integration with RAGFlow isn't working
- [#28778](https://github.com/BerriAI/litellm/issues/28778) [Bug]: When an agent with tools turns on either redis-semanticor qdrant-semantic cache mode and carries tool return JSON requests to the gateway, the tool return content will be lost.
- [#28782](https://github.com/BerriAI/litellm/issues/28782) fix(openai_gpt_5): support custom deployment names with prefixes in is_model_gpt_5_4_plus_model
- [#30566](https://github.com/BerriAI/litellm/issues/30566) [Bug]: x-litellm-overhead-duration-ms header and litellm_overhead_time_ms not populated for /v1/messages and /openai/v1/responses endpoints

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,272 · **Open issues:** 1,411 · **Last push:** <1h ago

On August 31, 2026, Unsloth had a routine day with no new releases but saw significant activity in merged pull requests. Highlights include enhancements in the Studio environment, such as archiving audio clips (#9637) and fixing unscrollable model dropdowns on the export page (#10020). Notably, there were fixes to the CI system to prevent regressions in tests related to OpenAI routes and audio (#9952 and #9953). Among the newly reported issues, the most pressing is a bug where the Qwen3.8-Flash-Next-GGUF model cannot be loaded in Unsloth Desktop (#10015), which may impede user functionality. Additionally, a persistent SQLite mutex deadlock issue in the Studio environment was reported (#10022), warranting timely attention.

#### ✅ Merged PRs
- [#10007](https://github.com/unslothai/unsloth/pull/10007) Dim an over budget model row instead of pilling every line
- [#10027](https://github.com/unslothai/unsloth/pull/10027) Pre-flight whisper pairing before the chained install
- [#9637](https://github.com/unslothai/unsloth/pull/9637) Studio: archive audio clips
- [#9941](https://github.com/unslothai/unsloth/pull/9941) Studio: honor the effort level Claude Code sends on /v1/messages
- [#10025](https://github.com/unslothai/unsloth/pull/10025) Ground the multi-turn smoke on the turn that survives a 270M model
- [#10020](https://github.com/unslothai/unsloth/pull/10020) Studio: fix unscrollable model dropdowns on the export page
- [#10006](https://github.com/unslothai/unsloth/pull/10006) Size the model picker's row metadata to the ink it holds
- [#10008](https://github.com/unslothai/unsloth/pull/10008) Give the cancel drain a budget sized for a loaded runner
- [#10002](https://github.com/unslothai/unsloth/pull/10002) Share the fixture backend version with the model-download E2E
- [#10009](https://github.com/unslothai/unsloth/pull/10009) Make the multi-turn smoke actually assert that history reached the model
- [#9998](https://github.com/unslothai/unsloth/pull/9998) studio: cache the servability scan behind GET /v1/models
- [#9996](https://github.com/unslothai/unsloth/pull/9996) Stop one slow SQLite writer from becoming a stream of Studio log errors
- [#10003](https://github.com/unslothai/unsloth/pull/10003) Budget the dyld classifier in CPU time, not wall clock
- [#10001](https://github.com/unslothai/unsloth/pull/10001) Advertise a backend version a released AppImage will accept
- [#9999](https://github.com/unslothai/unsloth/pull/9999) Fail CI on a new exec/eval/compile of a value that is not written out
- [#9992](https://github.com/unslothai/unsloth/pull/9992) Settle the compact layout before measuring the permission pill
- [#9993](https://github.com/unslothai/unsloth/pull/9993) Give the in-venv CLI tests a writable STUDIO_HOME
- [#9994](https://github.com/unslothai/unsloth/pull/9994) Stop os.dup2 alone being a reverse shell, and allowlist the zoo URL guard
- [#9569](https://github.com/unslothai/unsloth/pull/9569) Recapture the control leg reference against the fixed loss normalisation
- [#9777](https://github.com/unslothai/unsloth/pull/9777) Parse the downloaded model mapper instead of exec'ing it
- [#9863](https://github.com/unslothai/unsloth/pull/9863) stop the planner withholding a split reserve from one card, and price physical cores
- [#9991](https://github.com/unslothai/unsloth/pull/9991) Skip the inline-code mask when every backtick is inside a fence
- [#9952](https://github.com/unslothai/unsloth/pull/9952) studio: fix openai route ci tests
- [#9953](https://github.com/unslothai/unsloth/pull/9953) studio: fix audio ci tests
- [#9959](https://github.com/unslothai/unsloth/pull/9959) Fix three CI regressions: code-span anchor, load-dispatch anchor, recordless pip install
- [#9951](https://github.com/unslothai/unsloth/pull/9951) studio: isolate mcp browser test state
- [#9990](https://github.com/unslothai/unsloth/pull/9990) Revert "fix(studio): gate external tool nudges and preserve retry context"
- [#9975](https://github.com/unslothai/unsloth/pull/9975) Fix duplicate GGUF rows in custom model folders

#### 🐛 New Issues
- [#10015](https://github.com/unslothai/unsloth/issues/10015) [Bug] Qwen3.8-Flash-Next-GGUF model cannot be loaded in Unsloth Desktop. `feature request` `bug` 💬3
- [#10004](https://github.com/unslothai/unsloth/issues/10004) Studio CI: multi-turn determinism smoke fails intermittently on the merge base, not just on PRs 💬3
- [#10005](https://github.com/unslothai/unsloth/issues/10005) [Feature] i want unsloth to also support to AMD GPU's Romcom `feature request` 💬1
- [#10031](https://github.com/unslothai/unsloth/issues/10031) [Bug] MLX prompt cache not reused with Qwen3.8-27B due to ArraysCache layout `feature request` `bug`
- [#10024](https://github.com/unslothai/unsloth/issues/10024) [Unsloth Bug] MiniMax-H3-GGUF models fail to resume/restart download ("used a different transport") `feature request` `bug`
- [#10022](https://github.com/unslothai/unsloth/issues/10022) [Bug] Unsloth Studio can enter a permanent SQLite mutex deadlock under concurrent database connection activity, leaving the backend process alive but completely unresponsive. `feature request` `bug`
- [#10021](https://github.com/unslothai/unsloth/issues/10021) [Bug] Intel XPU: default adamw_8bit optimizer crashes training at optimizer.step(), default optimizer is compatible with NVIDIA, not Vulkan `feature request` `bug`
- [#10018](https://github.com/unslothai/unsloth/issues/10018) [Bug] Installer's Intel XPU Triton replacement fails silently, leaving triton-windows shadowing torch XPU Triton (setup.ps1:4717)` `feature request` `bug`
- [#10017](https://github.com/unslothai/unsloth/issues/10017) Bug: Windows - pre-quantized bnb-4bit checkpoints load with quant_state=None, forward fails with shape error
- [#10016](https://github.com/unslothai/unsloth/issues/10016) Bug: Accelerator.distributed_type monkey-patch with a bare lambda becomes a bound method, falsely triggering distributed-mode guards
- [#10013](https://github.com/unslothai/unsloth/issues/10013) [Feature] Support for Video Analysis in Chat Window and API Calls `feature request`
- [#10012](https://github.com/unslothai/unsloth/issues/10012) [Bug] Chat Composer stops accepting keyboard input after second generation (Wayland + WebKitGTK) `feature request` `bug`
- [#10011](https://github.com/unslothai/unsloth/issues/10011) [Bug] How to use moss-tts-nano-100m in studio for inference and training? `feature request` `bug`
- [#10010](https://github.com/unslothai/unsloth/issues/10010) [Bug] Qwen3.8-27B (Qwen3.5 hybrid linear-attention) QLoRA fails with "mat1 and mat2 shapes cannot be multiplied" in linear_attn.in_proj_z — missing quant_state in unsloth/qwen3.8-27b-unsloth-bnb-4bit `feature request` `bug`

#### 🔒 Closed Issues
- [#10015](https://github.com/unslothai/unsloth/issues/10015) [Bug] Qwen3.8-Flash-Next-GGUF model cannot be loaded in Unsloth Desktop.
- [#9965](https://github.com/unslothai/unsloth/issues/9965) [Bug] so short model names and a lot of free space
- [#9933](https://github.com/unslothai/unsloth/issues/9933) [Feature] TPS/Context Size in sidebar/widget
- [#10005](https://github.com/unslothai/unsloth/issues/10005) [Feature] i want unsloth to also support to AMD GPU's Romcom

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,046 · **Open issues:** 382 · **Last push:** 22h ago

On August 31, 2026, AIBrix saw routine maintenance with no new releases or notable issues reported. The most significant development was the merging of pull request #2629, which addressed a bug in the StormService webhook by implementing a rejection system for invalid Volcano gang scheduling configurations. This fix enhances the robustness of the scheduling feature and improves overall system reliability. Overall, the day was focused on internal improvements rather than new feature rollouts or urgent issues.

#### ✅ Merged PRs
- [#2629](https://github.com/vllm-project/aibrix/pull/2629) [Bug] Reject invalid Volcano gang scheduling configuration in StormService webhook

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,429 · **Open issues:** 387 · **Last push:** 6h ago

On August 31, 2026, there were no new releases for Semantic Router. Significant progress was made with the merging of several pull requests, including the addition of a sequence_classifier backend to support the generic classifier signal (#3096) and enhancements in response reads for various components, such as OpenAI-compatible embeddings and memory rewrite responses (#3133, #3131). The dashboard UI received a valuable update with the addition of conversation signals (#3121), while improvements to documentation and website consistency were also noted. Among new issues, a critical bug was reported regarding the image_gen route plugin, which has no runtime effect due to previous changes, indicating a need for urgent attention.

#### ✅ Merged PRs
- [#3135](https://github.com/vllm-project/semantic-router/pull/3135) [Bug] Bound image generation response reads
- [#3134](https://github.com/vllm-project/semantic-router/pull/3134) [Bug] Bound external RAG response reads
- [#3096](https://github.com/vllm-project/semantic-router/pull/3096) [Feature] Add a sequence_classifier backend to the generic classifier signal
- [#3133](https://github.com/vllm-project/semantic-router/pull/3133) [Bug] Bound OpenAI-compatible embedding responses
- [#3131](https://github.com/vllm-project/semantic-router/pull/3131) [Bug] Bound memory rewrite response reads
- [#3132](https://github.com/vllm-project/semantic-router/pull/3132) [Bug] Fix observability empty-state docs links pointing at a deleted page
- [#3130](https://github.com/vllm-project/semantic-router/pull/3130) [Website] Use one blue hover style across all components
- [#3118](https://github.com/vllm-project/semantic-router/pull/3118) [Bug] Bound Router-R1 and AutoMix response reads
- [#3123](https://github.com/vllm-project/semantic-router/pull/3123) [Community] Add guan404ming as a Router Models & Inference Runtime Member
- [#3076](https://github.com/vllm-project/semantic-router/pull/3076) [Feature] Unify inference protocol translation
- [#3121](https://github.com/vllm-project/semantic-router/pull/3121) [Dashboard] Add conversation signals to the dashboard UI
- [#3117](https://github.com/vllm-project/semantic-router/pull/3117) [Bug] Fix dead and misdirected links on the website
- [#3114](https://github.com/vllm-project/semantic-router/pull/3114) [Docs] Refresh contributor workflow guidance

#### 🐛 New Issues
- [#3122](https://github.com/vllm-project/semantic-router/issues/3122) [Website]: Make Consistent Background color across the component. `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬4
- [#3128](https://github.com/vllm-project/semantic-router/issues/3128) [Feature] Extract a shared HTTP connector for outbound model calls `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3112](https://github.com/vllm-project/semantic-router/issues/3112) [Bug] Dashboard Monitoring and Tracing empty states link to a deleted docs page `bug` `good first issue` `help wanted` `area/user-experience` 💬1
- [#3129](https://github.com/vllm-project/semantic-router/issues/3129) [Bug] image_gen route plugin has no runtime effect since #3076 (config validates but is silently ignored) `needs-acceptance` `wg/data-plane-networking` 💬1
- [#3116](https://github.com/vllm-project/semantic-router/issues/3116) [Feature] Enforce typed request capability eligibility in model pools `enhancement` `needs-acceptance` `wg/mom-routing` `track/contracts` 💬1
- [#3111](https://github.com/vllm-project/semantic-router/issues/3111) [Bug] Website blog and footer still point at dead or wrong URLs `bug` `good first issue` `help wanted` `area/docs` 💬1
- [#3110](https://github.com/vllm-project/semantic-router/issues/3110) [Bug] Community Contributing page has stale commands, labels, and workflow `bug` `good first issue` `help wanted` `area/user-experience` 💬1
- [#3113](https://github.com/vllm-project/semantic-router/issues/3113) [Bug] First-run install and curl examples are inconsistent with the Quickstart `bug` `good first issue` `help wanted` `area/docs` 💬1
- [#3140](https://github.com/vllm-project/semantic-router/issues/3140) [Bug] PII entities whose first token is labelled I- are dropped `needs-acceptance` `wg/router-models-inference-runtime`
- [#3136](https://github.com/vllm-project/semantic-router/issues/3136) [Bug] The new protocol handling does not accept NVIDIA DYNAMO `nvext` field in requests/responses. `bug` `needs-acceptance`
- [#3126](https://github.com/vllm-project/semantic-router/issues/3126) [Feature] Move prompt_guard onto the shared backend block and remove its protocol field `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3127](https://github.com/vllm-project/semantic-router/issues/3127) [Feature] Confirm whether jailbreak detection is meant to be opt-in per routing recipe `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#3122](https://github.com/vllm-project/semantic-router/issues/3122) [Website]: Make Consistent Background color across the component.
- [#3103](https://github.com/vllm-project/semantic-router/issues/3103) [Bug] Anthropic outbound emit fails on non-JSON tool arguments, turning a successful response into api_error
- [#3001](https://github.com/vllm-project/semantic-router/issues/3001) [Bug] `conversation` signal is not available in the Dashboard web UI
- [#3112](https://github.com/vllm-project/semantic-router/issues/3112) [Bug] Dashboard Monitoring and Tracing empty states link to a deleted docs page
- [#3111](https://github.com/vllm-project/semantic-router/issues/3111) [Bug] Website blog and footer still point at dead or wrong URLs
- [#3110](https://github.com/vllm-project/semantic-router/issues/3110) [Bug] Community Contributing page has stale commands, labels, and workflow

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*