# 📡 AI Ecosystem Digest — 2026-08-28

> Generated 2026-08-28 02:13 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,207 | 12 | 1 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 119,227 | 23 | 1 | 47 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,719 | 1 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,122 | 16 | 4 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 201,979 | 23 | 13 | 18 | 0 |
| [Pi](https://github.com/earendil-works/pi) | 98,339 | 32 | 36 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,437 | 34 | 14 | 2 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 387,851 | 148 | 94 | 141 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 237,354 | 34 | 4 | 1 | 1 |
| [IronClaw](https://github.com/nearai/ironclaw) | 12,604 | 20 | 20 | 14 | 1 |
| [QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,574 | 9 | 4 | 10 | 1 |
| [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,667 | 4 | 6 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,252 | 35 | 17 | 48 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 32,587 | 23 | 2 | 65 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 125,980 | 23 | 2 | 23 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 179,588 | 13 | 4 | 6 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,428 | 29 | 10 | 82 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 74,999 | 21 | 51 | 45 | 1 |

---

## ✨ Highlights

- **Ollama** released [v0.33.2-rc1](https://github.com/ollama/ollama/releases/tag/v0.33.2-rc1), introducing several updates including account cloud model listings for Claude.
- **Claude Code** announced multiple releases, including [v2.1.250](https://github.com/anthropics/claude-code/releases/tag/v2.1.250) and [v2.1.248](https://github.com/anthropics/claude-code/releases/tag/v2.1.248).
- A critical new issue in **OpenAI Codex**, [#41049](https://github.com/openai/codex/issues/41049), reports that the code-mode host exits during handshake, leading to a total of 26 comments discussing the problem.
- **Qwen Code** includes a newly opened issue, [#10272](https://github.com/QwenLM/qwen-code/issues/10272), where external-context tests hang during connections, and it has already garnered 5 comments.
- The **Hermes Agent** released [v2026.8.27](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.27) with bug fixes, including important improvements following previously identified issues.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,207 · **Open issues:** 15,256 · **Last push:** 1h ago

#### 🚀 New Releases
- [v2.1.250](https://github.com/anthropics/claude-code/releases/tag/v2.1.250) v2.1.250
- [v2.1.248](https://github.com/anthropics/claude-code/releases/tag/v2.1.248) v2.1.248

#### 🐛 New Issues
- [#90002](https://github.com/anthropics/claude-code/issues/90002) [BUG] Code tab writes UI render metadata (start_timestamp/stop_timestamp/flags) into transcript JSONL, causing unrecoverable API 400 that recurs after full sanitization `bug` `has repro` `platform:windows` `area:core` 💬9
- [#90254](https://github.com/anthropics/claude-code/issues/90254) Claude in Chrome (v1.0.85): phantom blank tabs "http://native/", "http://host/", "http://wrapper/", "http://script/" open on every Chrome startup `bug` `platform:windows` `area:browser-extension` `area:chrome`
- [#90253](https://github.com/anthropics/claude-code/issues/90253) [BUG] In the desktop application's code feature, the Rewind function does not undo modified code. `bug` `platform:windows` `area:desktop`
- [#90252](https://github.com/anthropics/claude-code/issues/90252) [Feature Request] Add language/dialect consistency mode to prevent unintended English variant drift `enhancement` `platform:macos` `area:model`
- [#90251](https://github.com/anthropics/claude-code/issues/90251) Scheduled-task run sessions flood the session list - group, auto-archive, or bulk-archive them `enhancement` `platform:windows` `user-experience` `area:desktop`
- [#90250](https://github.com/anthropics/claude-code/issues/90250) GPU process crashes recurring since v2.1.237, still present in v2.1.246 (Windows, hybrid NVIDIA/Intel graphics laptop) `bug` `has repro` `platform:windows` `area:desktop`
- [#90249](https://github.com/anthropics/claude-code/issues/90249) [BUG] JSON file upload to claude code has broken claude code `bug` `platform:macos` `area:desktop`
- [#90248](https://github.com/anthropics/claude-code/issues/90248) Scheduled tasks fail silently when the app is closed; no signal distinguishing "running on schedule" from "only running while app is open" `bug` `has repro` `platform:macos` `area:desktop`
- [#90247](https://github.com/anthropics/claude-code/issues/90247) [Feature Request] Add graceful restart mechanism for agent teams without losing connections `enhancement` `platform:macos` `area:agents`
- [#90246](https://github.com/anthropics/claude-code/issues/90246) [Feature Request] Display model name in terminal CLI inline agent status view `enhancement` `platform:macos` `area:agent-view`
- …and 2 more

#### 🔒 Closed Issues
- [#89043](https://github.com/anthropics/claude-code/issues/89043) [BUG] Subagents cannot reply to inter-agent messages: incoming from= is the agent type ('general-purpose'), which is unroutable

### OpenAI Codex (`openai/codex`)

**Stars:** 119,227 · **Open issues:** 14,144 · **Last push:** <1h ago

#### 🚀 New Releases
- [rust-v0.151.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7) 0.151.0-alpha.7
- [rust-v0.151.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.6) 0.151.0-alpha.6
- [rust-v0.151.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.5) 0.151.0-alpha.5
- [rust-v0.151.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.4) 0.151.0-alpha.4
- [rust-v0.150.0-alpha.12.2](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.12.2) 0.150.0-alpha.12.2

#### ✅ Merged PRs
- [#41243](https://github.com/openai/codex/pull/41243) Add configurable gating for the sleep tool
- [#41239](https://github.com/openai/codex/pull/41239) Surface model provider authentication recovery progress
- [#41235](https://github.com/openai/codex/pull/41235) Sanitize history notes backend errors
- [#41232](https://github.com/openai/codex/pull/41232) Expose the PowerShell version in environment context
- [#41231](https://github.com/openai/codex/pull/41231) Instrument the loaded plugin cache
- [#41230](https://github.com/openai/codex/pull/41230) Apply app routing policy to unauthenticated plugin reads
- [#41227](https://github.com/openai/codex/pull/41227) Use compatible PowerShell for elevated Windows sandbox commands
- [#41226](https://github.com/openai/codex/pull/41226) Move Guardian review session tests to a separate file
- [#41223](https://github.com/openai/codex/pull/41223) Add recency sorting to `project/list`
- [#41221](https://github.com/openai/codex/pull/41221) Honor turn token budgets in Guardian review rollover
- …and 37 more

#### 🐛 New Issues
- [#41049](https://github.com/openai/codex/issues/41049) code-mode host exited during handshake; the 5.6 model is not working properly `bug` `windows-os` `tool-calls` `app` 💬26
- [#41073](https://github.com/openai/codex/issues/41073) [Windows][26.820.9563.0] ChatGPT launches headless with MainWindowHandle=0; disabling updater fixes startup `bug` `windows-os` `app` 💬4
- [#41170](https://github.com/openai/codex/issues/41170) [Windows] First launch shows no window for about 15 minutes while extracting bundled cua_node runtime `bug` `windows-os` `app` `computer-use` 💬5
- [#41135](https://github.com/openai/codex/issues/41135) Windows: sandbox setup_marker.json written without an ACE for the invoking user in non-interactive exec, so setup repeats forever (orchestrator_helper_incomplete) `bug` `windows-os` `sandbox` `exec` 💬4
- [#41242](https://github.com/openai/codex/issues/41242) Windows 0.148+: light-theme composer is near-black (OSC 10/11 probe dropped; still broken in 0.150.1) `bug` `windows-os` `TUI` `CLI` 💬2
- [#41176](https://github.com/openai/codex/issues/41176) Codex agents incorrectly stop or declare completion while tasks are still incomplete `bug` `model-behavior` `CLI` 💬2
- [#41238](https://github.com/openai/codex/issues/41238) "Ran 5 commands" - Can we not do this? Or make it optional? `bug` `enhancement` `TUI` `CLI` 💬2
- [#41228](https://github.com/openai/codex/issues/41228) Codex browser control unavailable across secure browser, built-in Browser and Chrome `bug` `app` `browser` 💬2
- [#41224](https://github.com/openai/codex/issues/41224) Capped continuity mode after ChatGPT plan limits (Luna fallback) `enhancement` `codex-web` `extension` `rate-limits` 💬2
- [#41123](https://github.com/openai/codex/issues/41123) Safety: avoid disabling macOS Wi-Fi network service during troubleshooting `bug` `model-behavior` `tool-calls` 💬1
- …and 13 more

#### 🔒 Closed Issues
- [#41135](https://github.com/openai/codex/issues/41135) Windows: sandbox setup_marker.json written without an ACE for the invoking user in non-interactive exec, so setup repeats forever (orchestrator_helper_incomplete)

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,719 · **Open issues:** 870 · **Last push:** 6h ago

#### 🚀 New Releases
- [v0.59.0-nightly.20260827.g3c311beac](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260827.g3c311beac) Release v0.59.0-nightly.20260827.g3c311beac

#### 🐛 New Issues
- [#29112](https://github.com/google-gemini/gemini-cli/issues/29112) Feature request: append to system prompt at launch (--append-system-prompt / GEMINI_APPEND_SYSTEM_MD) — GEMINI_SYSTEM_MD only replaces `priority/p3` `area/agent` `status/possible-duplicate` `status/bot-triaged` 💬4

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,122 · **Open issues:** 2,233 · **Last push:** <1h ago

#### 🚀 New Releases
- [v1.0.82-0](https://github.com/github/copilot-cli/releases/tag/v1.0.82-0) 1.0.82-0
- [v1.0.81](https://github.com/github/copilot-cli/releases/tag/v1.0.81) 1.0.81
- [v1.0.81-14](https://github.com/github/copilot-cli/releases/tag/v1.0.81-14) 1.0.81-14

#### 🐛 New Issues
- [#4639](https://github.com/github/copilot-cli/issues/4639) v1.0.80: event-storage exhaustion retry storm drives long-running session into GC/compaction loop and Node OOM `triage` 💬1
- [#4629](https://github.com/github/copilot-cli/issues/4629) Plugin hooks are not loaded when a session is resumed via `--resume` `area:sessions` `area:plugins` 💬1
- [#4631](https://github.com/github/copilot-cli/issues/4631) 1000 `triage` `invalid` 💬1
- [#4645](https://github.com/github/copilot-cli/issues/4645) `session.resume` silently ignores the `model` parameter; the persisted session model wins `` `triage`
- [#4643](https://github.com/github/copilot-cli/issues/4643) Compaction happens at low context usage (e.g. 20%) and don't get reported as an actual checkpoint? `triage`
- [#4642](https://github.com/github/copilot-cli/issues/4642) Make `--name` create or resume a session `triage`
- [#4641](https://github.com/github/copilot-cli/issues/4641) Publish official JSON Schema for settings.json `triage`
- [#4640](https://github.com/github/copilot-cli/issues/4640) userPromptTransformed hook is skipped for steering messages `triage`
- [#4638](https://github.com/github/copilot-cli/issues/4638) Do not derive model context from prompt and output token limits `triage`
- [#4637](https://github.com/github/copilot-cli/issues/4637) Avoid duplicate skill lookup for slash-invoked skills with disable-model-invocation `triage`
- …and 6 more

#### 🔒 Closed Issues
- [#3576](https://github.com/github/copilot-cli/issues/3576) Windows: stdio MCP servers fail to spawn (spawn npx ENOENT / EINVAL) in 1.0.56-1
- [#4006](https://github.com/github/copilot-cli/issues/4006) MCP `tools/list` pagination (nextCursor) not followed
- [#4631](https://github.com/github/copilot-cli/issues/4631) 1000
- [#4239](https://github.com/github/copilot-cli/issues/4239) MCP server args templating corrupts values containing nested ${VAR:-${VAR2:-$(cmd)}} shell parameter expansion (silent auth/token corruption)

### OpenCode (`anomalyco/opencode`)

**Stars:** 201,979 · **Open issues:** 5,656 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#45793](https://github.com/anomalyco/opencode/pull/45793) chore(deps): refresh markdown dependencies
- [#45799](https://github.com/anomalyco/opencode/pull/45799) fix(core): treat project paths as internal
- [#45796](https://github.com/anomalyco/opencode/pull/45796) chore(deps): upgrade Sentry and verify reporting
- [#45794](https://github.com/anomalyco/opencode/pull/45794) chore(ui): refresh Kobalte and Solid primitives
- [#45790](https://github.com/anomalyco/opencode/pull/45790) chore(deps): refresh Vite and Electron Builder tooling
- [#45780](https://github.com/anomalyco/opencode/pull/45780) fix(app): render local Markdown images through the server
- [#45760](https://github.com/anomalyco/opencode/pull/45760) fix(core): share native model defaults with v1 config migration
- [#45787](https://github.com/anomalyco/opencode/pull/45787) fix(core): cap provider retry-after delays at fifteen minutes
- [#45785](https://github.com/anomalyco/opencode/pull/45785) chore: upgrade opentui to 0.5.9
- [#45779](https://github.com/anomalyco/opencode/pull/45779) chore(deps): remove unused frontend dependencies
- …and 8 more

#### 🐛 New Issues
- [#45580](https://github.com/anomalyco/opencode/issues/45580) OpenCode Ai decided to go rogue and make changes that cost me a ton of time and usage 💬4
- [#45568](https://github.com/anomalyco/opencode/issues/45568) ollama-cloud: glm-5.3-flash dropped from model cache due to unmapped family 'glm5_next' 💬3
- [#45802](https://github.com/anomalyco/opencode/issues/45802) crash in bun when launching on hyprland (linux window manager) small screen tile 💬2
- [#45755](https://github.com/anomalyco/opencode/issues/45755) Error from provider 💬2
- [#45797](https://github.com/anomalyco/opencode/issues/45797) [Bug] Raw `<parameter>` tool-call tags rendered literally in TUI above assistant message 💬2
- [#45791](https://github.com/anomalyco/opencode/issues/45791) session: reasoning parts duplicated per streamed chunk inflate context to 300k+ tokens and explode session storage `2.0` 💬2
- [#45602](https://github.com/anomalyco/opencode/issues/45602) Cobros dobles 💬2
- [#45764](https://github.com/anomalyco/opencode/issues/45764) [FEATURE]: Plugin hook to intercept and override LLM call parameters (llm.request.before) 💬2
- [#45723](https://github.com/anomalyco/opencode/issues/45723) TUI renders garbled/corrupted on native Windows, reproducing across multiple terminals and PTY layers (not a terminal/font issue) 💬2
- [#45591](https://github.com/anomalyco/opencode/issues/45591) opencode langing 💬2
- …and 13 more

#### 🔒 Closed Issues
- [#44300](https://github.com/anomalyco/opencode/issues/44300) Zen API: x-preview-f-free / ox-alpha-free fails with "Endpoint is unavailable" for any request containing tools
- [#37399](https://github.com/anomalyco/opencode/issues/37399) xAI Grok 4.5 generating useless bash true tool calls
- [#45755](https://github.com/anomalyco/opencode/issues/45755) Error from provider
- [#45797](https://github.com/anomalyco/opencode/issues/45797) [Bug] Raw `<parameter>` tool-call tags rendered literally in TUI above assistant message
- [#45602](https://github.com/anomalyco/opencode/issues/45602) Cobros dobles
- [#43312](https://github.com/anomalyco/opencode/issues/43312) v2: Responses reasoning can abort with "reasoning start before end"
- [#45723](https://github.com/anomalyco/opencode/issues/45723) TUI renders garbled/corrupted on native Windows, reproducing across multiple terminals and PTY layers (not a terminal/font issue)
- [#45364](https://github.com/anomalyco/opencode/issues/45364) Subagent tool rejects self-referential session IDs
- …and 5 more

### Pi (`earendil-works/pi`)

**Stars:** 98,339 · **Open issues:** 138 · **Last push:** 2h ago

#### ✅ Merged PRs
- [#8731](https://github.com/earendil-works/pi/pull/8731) feat(tui): allow disable copy on fullscreen, ctrl + x copies selection
- [#8723](https://github.com/earendil-works/pi/pull/8723) fix(coding-agent): expose https-proxy-agent named export
- [#8355](https://github.com/earendil-works/pi/pull/8355) feat(extensions): ui prompt events

#### 🐛 New Issues
- [#8711](https://github.com/earendil-works/pi/issues/8711) TUI pegs 100% CPU and freezes while streaming OpenRouter thinking (GLM-5.3-flash); reasoning_details stored as one object per token `bug` `untriaged` 💬2
- [#8709](https://github.com/earendil-works/pi/issues/8709) [Qwen AI Token Plan] New AI model is available: qwen3.8-flash `untriaged` 💬2
- [#8728](https://github.com/earendil-works/pi/issues/8728) detectCompat: requiresReasoningContentOnAssistantMessages not auto-enabled for DeepSeek-compatible endpoints (api.b.ai / sensenova) → 400 on cross-provider replay `untriaged` 💬3
- [#8757](https://github.com/earendil-works/pi/issues/8757) Tool-argument validator doesn't coerce object/array to string for a string-typed param -- write/edit content fails "must be string" `untriaged` 💬2
- [#8752](https://github.com/earendil-works/pi/issues/8752) bedrock-converse: usage.input not normalized across model families — false cache-miss notices, doubled input cost `untriaged` 💬2
- [#8722](https://github.com/earendil-works/pi/issues/8722) Security guard rm-outside-project false-positives on write/edit payloads (documentation content flagged as delete commands) `untriaged` 💬2
- [#8721](https://github.com/earendil-works/pi/issues/8721) Fleet inspector crashes when pi-subagents prompt audit holds non-string task `untriaged` 💬2
- [#8758](https://github.com/earendil-works/pi/issues/8758) Slash-command-only sessions cannot be exported until an assistant turn exists `untriaged` 💬1
- [#8756](https://github.com/earendil-works/pi/issues/8756) Agent settles after `toolResult` without a follow-up LLM turn `bug` `untriaged` 💬1
- [#8755](https://github.com/earendil-works/pi/issues/8755) Opaque startup crash (SyntaxError: TuiMainScreen) when the hoisted @earendil-works/pi-tui is older than the range declared by pi-coding-agent `untriaged` 💬1
- …and 22 more

#### 🔒 Closed Issues
- [#5329](https://github.com/earendil-works/pi/issues/5329) Expose when Pi is waiting on user input for host integrations
- [#7720](https://github.com/earendil-works/pi/issues/7720) Allow disabling select to copy in fullscreen TUI mode
- [#8610](https://github.com/earendil-works/pi/issues/8610) Regression in v0.84.3: 'Error: HttpsProxyAgent is not a constructor' when calling google-vertex with proxy
- [#8711](https://github.com/earendil-works/pi/issues/8711) TUI pegs 100% CPU and freezes while streaming OpenRouter thinking (GLM-5.3-flash); reasoning_details stored as one object per token
- [#8709](https://github.com/earendil-works/pi/issues/8709) [Qwen AI Token Plan] New AI model is available: qwen3.8-flash
- [#8728](https://github.com/earendil-works/pi/issues/8728) detectCompat: requiresReasoningContentOnAssistantMessages not auto-enabled for DeepSeek-compatible endpoints (api.b.ai / sensenova) → 400 on cross-provider replay
- [#7147](https://github.com/earendil-works/pi/issues/7147) Emit extension events around UI dialogs
- [#8757](https://github.com/earendil-works/pi/issues/8757) Tool-argument validator doesn't coerce object/array to string for a string-typed param -- write/edit content fails "must be string"
- …and 28 more

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,437 · **Open issues:** 1,279 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#10168](https://github.com/QwenLM/qwen-code/pull/10168) feat(review): carry the fix's premises beside its claim — add fixConstraint
- [#10294](https://github.com/QwenLM/qwen-code/pull/10294) feat(sdk): Add standalone session APIs

#### 🐛 New Issues
- [#10272](https://github.com/QwenLM/qwen-code/issues/10272) E2E: external-context mem0 tests hang at 'Connecting to MCP servers' on macOS and ecs-qwen pool (pass on ubuntu-hosted) `priority/P1` `type/bug` `scope/testing` `scope/ci-cd` 💬5
- [#10242](https://github.com/QwenLM/qwen-code/issues/10242) E2E on main: GitHub-hosted runners intermittently unable to reach the OPENAI_BASE_URL endpoint (Aliyun Beijing) — relocate lanes or switch endpoint `priority/P2` `type/bug` `scope/ci-cd` 💬4
- [#10324](https://github.com/QwenLM/qwen-code/issues/10324) triage: silent-rerun notification should treat a bot-initiated close as a terminal action `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#10314](https://github.com/QwenLM/qwen-code/issues/10314) fix(ci): treat API-error triage responses as failed runs in qwen-triage.yml `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#10309](https://github.com/QwenLM/qwen-code/issues/10309) Feature: probe actual modality support at model setup (one-shot capability probe instead of static pattern guessing) `priority/P2` `type/feature-request` `category/core` `scope/model-switching` 💬3
- [#10339](https://github.com/QwenLM/qwen-code/issues/10339) docs: add ToolSearch-absent caveat to remaining tools.eager loadability promises (#10098 follow-up) `priority/P3` `status/blocked` `type/documentation` `category/tools` 💬2
- [#10336](https://github.com/QwenLM/qwen-code/issues/10336) Release provenance names the dispatch context, not the built tree — npm artifacts cannot be verified against tagged source `priority/P1` `type/bug` `category/security` `scope/packaging` 💬2
- [#10338](https://github.com/QwenLM/qwen-code/issues/10338) triage runbook: scope re-run suppression to terminal stage / exit `priority/P3` `category/development` `scope/ci-cd` `type/enhancement` 💬2
- [#10322](https://github.com/QwenLM/qwen-code/issues/10322) triage: Stage 1-pre subsumption check breaks silently at the contents-API size ceiling `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#10332](https://github.com/QwenLM/qwen-code/issues/10332) Feature request: append to system prompt at launch (--append-system-prompt / QWEN_APPEND_SYSTEM_MD) — QWEN_SYSTEM_MD only replaces `priority/P3` `type/feature-request` `category/cli` `scope/cli` 💬2
- …and 24 more

#### 🔒 Closed Issues
- [#10272](https://github.com/QwenLM/qwen-code/issues/10272) E2E: external-context mem0 tests hang at 'Connecting to MCP servers' on macOS and ecs-qwen pool (pass on ubuntu-hosted)
- [#9927](https://github.com/QwenLM/qwen-code/issues/9927) Artifact updatedAt stays stale; write_file intermediates linger as missing
- [#10242](https://github.com/QwenLM/qwen-code/issues/10242) E2E on main: GitHub-hosted runners intermittently unable to reach the OPENAI_BASE_URL endpoint (Aliyun Beijing) — relocate lanes or switch endpoint
- [#10211](https://github.com/QwenLM/qwen-code/issues/10211) Agent Team: initial teammate result may be lost before event bridge attachment
- [#10209](https://github.com/QwenLM/qwen-code/issues/10209) Agent Team: stale reclaim can delete a newer live team generation
- [#10069](https://github.com/QwenLM/qwen-code/issues/10069) Agent Team: a queued Agent View message disappears after switching teammate tabs
- [#10153](https://github.com/QwenLM/qwen-code/issues/10153) /review: carry the fix's premises, not just its claim — add an evidence-bounded Fix constraint field
- [#9792](https://github.com/QwenLM/qwen-code/issues/9792) /review: remember the last explicitly typed --effort and reuse it with a notice
- …and 6 more

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

**Stars:** 387,851 · **Open issues:** 5,725 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#131291](https://github.com/openclaw/openclaw/pull/131291) chore(ui): refresh control ui locales
- [#128223](https://github.com/openclaw/openclaw/pull/128223) fix(cli): resolve alias targets from the write snapshot
- [#131381](https://github.com/openclaw/openclaw/pull/131381) fix(transcripts): report auto-start shutdown warnings
- [#123535](https://github.com/openclaw/openclaw/pull/123535) fix(ui): avoid session catalog refresh storms
- [#131382](https://github.com/openclaw/openclaw/pull/131382) fix(test): avoid slow and incorrect test discovery in large checkouts
- [#131241](https://github.com/openclaw/openclaw/pull/131241) fix(ui): stop Talk camera preview flicker on rerenders
- [#128169](https://github.com/openclaw/openclaw/pull/128169) fix(acp): preserve configured thinking across session reuse
- [#131378](https://github.com/openclaw/openclaw/pull/131378) fix(ui): unselected channel picker shows prompt
- [#130196](https://github.com/openclaw/openclaw/pull/130196) fix(sessions): fence restart-recovery tombstones independently of archive state
- [#131377](https://github.com/openclaw/openclaw/pull/131377) fix(ui): replace channel setup Working text with spinner buttons
- …and 131 more

#### 🐛 New Issues
- [#130968](https://github.com/openclaw/openclaw/issues/130968) [Bug]: Update fresh doctor waits on the parent plugin lifecycle lease 💬6
- [#130954](https://github.com/openclaw/openclaw/issues/130954) [Bug]: post-core updater deadlocks its Doctor child on plugin lifecycle lease `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#131150](https://github.com/openclaw/openclaw/issues/131150) Slack DMs silently dropped for all accounts after gateway restart: prepareSlackMessage returns null pre-gate; degraded installation identity (multi-account socket mode) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#130977](https://github.com/openclaw/openclaw/issues/130977) [Bug]: Linux plugins-list startup-memory gate flakes at current runner variance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#131231](https://github.com/openclaw/openclaw/issues/131231) [Bug]: browser act fill silently no-ops on unsupported field keys (ok:true, value unchanged) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#131303](https://github.com/openclaw/openclaw/issues/131303) [Bug]: Automatic session titles answer file requests instead of naming them `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬3
- [#131299](https://github.com/openclaw/openclaw/issues/131299) [Bug]: Code Mode loses cancellation diagnostics when the tool catalog closes `bug` `maintainer` 💬3
- [#131104](https://github.com/openclaw/openclaw/issues/131104) [Bug]: Agent model picker refresh stays empty although full discovery succeeds `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#130919](https://github.com/openclaw/openclaw/issues/130919) [Bug]: Source installer restarts an already refreshed Gateway service twice `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#131074](https://github.com/openclaw/openclaw/issues/131074) [Bug]: update finalize --no-restart fails when Gateway is intentionally stopped `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- …and 138 more

#### 🔒 Closed Issues
- [#81061](https://github.com/openclaw/openclaw/issues/81061) Hook: before_route_inbound_message — pre-routing interception for channel bridging/proxying
- [#112248](https://github.com/openclaw/openclaw/issues/112248) @openclaw/codex plugin fails to register on gateway boot — all /codex slash commands silently no-op (TypeError: Cannot read properties of undefined (reading 'openSyncKeyedStore'))
- [#130968](https://github.com/openclaw/openclaw/issues/130968) [Bug]: Update fresh doctor waits on the parent plugin lifecycle lease
- [#118489](https://github.com/openclaw/openclaw/issues/118489) [Bug]: Failed-tool finalization is still skipped after prior tool presentation or stale lifecycle state
- [#130954](https://github.com/openclaw/openclaw/issues/130954) [Bug]: post-core updater deadlocks its Doctor child on plugin lifecycle lease
- [#128657](https://github.com/openclaw/openclaw/issues/128657) [Bug]: Control UI loading shimmers repaint every frame
- [#121756](https://github.com/openclaw/openclaw/issues/121756) [Bug]: Control UI cannot recover channel-originated active run after reload
- [#130977](https://github.com/openclaw/openclaw/issues/130977) [Bug]: Linux plugins-list startup-memory gate flakes at current runner variance
- …and 86 more

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 237,354 · **Open issues:** 36,645 · **Last push:** <1h ago

#### 🚀 New Releases
- [v2026.8.27](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.8.27) Hermes Agent v0.20.6 (v2026.8.27)

#### ✅ Merged PRs
- [#96644](https://github.com/NousResearch/hermes-agent/pull/96644) fix(agent): native-compaction Codex sessions no longer false-trigger local compression (#96155, salvage #96217)

#### 🐛 New Issues
- [#96155](https://github.com/NousResearch/hermes-agent/issues/96155) [Bug]: Native Responses preflight counts unpruned durable history and triggers compression at ~152K effective input `type/bug` `comp/agent` `provider/openai` `P2` 💬4
- [#96433](https://github.com/NousResearch/hermes-agent/issues/96433) Desktop boot fails: serve-path import of tui_gateway.server (6d4e851d80) rebinds sys.stdout, READY sentinel lands on stderr → 90s timeout kills healthy backend `type/bug` `duplicate` `comp/cli` `comp/tui` 💬4
- [#96348](https://github.com/NousResearch/hermes-agent/issues/96348) [Bug]: Studio bridge history rebuild skips empty-content assistant messages, dropping tool results → per-turn repair forces 0% prompt-cache hits on new user turns `type/bug` `comp/agent` `P0` `sweeper:risk-session-state` 💬3
- [#96570](https://github.com/NousResearch/hermes-agent/issues/96570) Group chat sessions: stored system prompt is null every turn — rebuilt from scratch, prefix cache always misses `type/bug` `comp/agent` `P0` `sweeper:risk-session-state` 💬3
- [#96704](https://github.com/NousResearch/hermes-agent/issues/96704) RFC: add evals/skills/, a paired-arm harness measuring whether agent-written skills actually help `type/feature` `innovation` `tool/memory` `tool/skills` 💬2
- [#96780](https://github.com/NousResearch/hermes-agent/issues/96780) Preview pane "Browser" tab close button overlaps with tab label `type/bug` `P3` `comp/desktop` 💬2
- [#96767](https://github.com/NousResearch/hermes-agent/issues/96767) feat(config): add --quiet / scripting-friendly output to config set `duplicate` `type/feature` `comp/cli` `area/config` 💬2
- [#96603](https://github.com/NousResearch/hermes-agent/issues/96603) [Bug]: "Summarizing Thread" has become extremely slow after recent updates `type/perf` `comp/agent` `P2` `needs-repro` 💬2
- [#96792](https://github.com/NousResearch/hermes-agent/issues/96792) [desktop, macOS] "Timed out waiting for Hermes backend port announcement (90000ms)" — stdout listener race in waitForDashboardPort causes false-positive backend death `type/bug` `duplicate` `backend/local` `P1` 💬1
- [#96778](https://github.com/NousResearch/hermes-agent/issues/96778) Photon health polling can exhaust macOS ephemeral ports with TIME_WAIT sockets `type/bug` `comp/gateway` `comp/plugins` `P3` 💬1
- …and 24 more

#### 🔒 Closed Issues
- [#96155](https://github.com/NousResearch/hermes-agent/issues/96155) [Bug]: Native Responses preflight counts unpruned durable history and triggers compression at ~152K effective input
- [#69060](https://github.com/NousResearch/hermes-agent/issues/69060) Telegram inbound reply context injects truncated raw Markdown into the user message
- [#96767](https://github.com/NousResearch/hermes-agent/issues/96767) feat(config): add --quiet / scripting-friendly output to config set
- [#72969](https://github.com/NousResearch/hermes-agent/issues/72969) Windows: computer-use status uses cua-driver 0.12.6 but doctor/tool session runs 0.8.3

### IronClaw (`nearai/ironclaw`)

**Stars:** 12,604 · **Open issues:** 1,472 · **Last push:** <1h ago

#### 🚀 New Releases
- [ironclaw-v1.4.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.0-rc.1) 1.4.0-rc.1 - 2026-08-26

#### ✅ Merged PRs
- [#7944](https://github.com/nearai/ironclaw/pull/7944) feat(gmail): surface semantic message output
- [#7954](https://github.com/nearai/ironclaw/pull/7954) feat(threads): add cumulative compaction context barrier
- [#7907](https://github.com/nearai/ironclaw/pull/7907) fix(memory): reject stale full-document rewrites
- [#7941](https://github.com/nearai/ironclaw/pull/7941) fix(slack): admit a broadcast mention by exempting app_mention from the subtype gate
- [#7957](https://github.com/nearai/ironclaw/pull/7957) chore(release): promote 1.4.0-rc.1 to 1.4.0
- [#7904](https://github.com/nearai/ironclaw/pull/7904) fix(tools): re-land portable reliability fixes from the retired OMP branch
- [#7942](https://github.com/nearai/ironclaw/pull/7942) fix(webui): raise thread artifact byte limits
- [#7898](https://github.com/nearai/ironclaw/pull/7898) ci: scope merge queue to affected areas
- [#7928](https://github.com/nearai/ironclaw/pull/7928) feat(tools): add bounded selectable JSON result views
- [#7737](https://github.com/nearai/ironclaw/pull/7737) docs(channels): fix Slack setup drift — widened scopes, reactions:write, full admin field list
- …and 4 more

#### 🐛 New Issues
- [#7960](https://github.com/nearai/ironclaw/issues/7960) feat(gmail): enforce HTML complexity during DOM construction
- [#7956](https://github.com/nearai/ironclaw/issues/7956) Telegram: unpaired sender's /start gets the command inventory instead of the connect/pairing notice `bug`
- [#7955](https://github.com/nearai/ironclaw/issues/7955) Telegram personal-account linking shows a generic "Something went wrong" when the admin has not configured api_id/api_hash `bug` `size: S` `scope: channel` `scope: extensions`
- [#7953](https://github.com/nearai/ironclaw/issues/7953) test(learning): observability, evaluation, and provider migration gates `enhancement` `scope: agent` `reborn`
- [#7952](https://github.com/nearai/ironclaw/issues/7952) feat(skills): route shared learning review into skill distillation `enhancement` `scope: agent` `reborn` `scope: skills`
- [#7951](https://github.com/nearai/ironclaw/issues/7951) feat(memory): bounded active recall from admitted provider memory `enhancement` `scope: agent` `reborn`
- [#7950](https://github.com/nearai/ironclaw/issues/7950) feat(memory): native, mem0, and Mnesis learning capability adapters `enhancement` `scope: tool` `scope: extensions` `reborn`
- [#7949](https://github.com/nearai/ironclaw/issues/7949) feat(memory): deterministic admission and auto-or-approval promotion `enhancement` `scope: agent` `reborn`
- [#7948](https://github.com/nearai/ironclaw/issues/7948) feat(memory): stable commit, feedback, and forget capabilities `enhancement` `scope: tool` `reborn`
- [#7947](https://github.com/nearai/ironclaw/issues/7947) feat(learning): shared router, settings, and durable candidate store `enhancement` `scope: agent` `reborn`
- …and 10 more

#### 🔒 Closed Issues
- [#7891](https://github.com/nearai/ironclaw/issues/7891) perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference on two emails
- [#3278](https://github.com/nearai/ironclaw/issues/3278) [Reborn] Define MissionService integration with TurnCoordinator
- [#7893](https://github.com/nearai/ironclaw/issues/7893) feat(memory): per-automation lessons file — ironclaw.memory.automation_lessons_set + fire-time injection
- [#4162](https://github.com/nearai/ironclaw/issues/4162) Refactor agent-loop prompt stage compaction orchestration
- [#4163](https://github.com/nearai/ironclaw/issues/4163) Refactor compaction task into typed pipeline stages
- [#4796](https://github.com/nearai/ironclaw/issues/4796) [Reborn] LLM lacks awareness of current date/time unless explicitly using a time tool
- [#4425](https://github.com/nearai/ironclaw/issues/4425) Reborn: builtin.http is a context bomb — 10MB floor, no HTML strip, descriptions don't steer model to .save
- [#7920](https://github.com/nearai/ironclaw/issues/7920) feat(skills): configure learned-skill extraction in Inference settings
- …and 12 more

### QwenPaw (`agentscope-ai/QwenPaw`)

**Stars:** 34,574 · **Open issues:** 914 · **Last push:** 11h ago

#### 🚀 New Releases
- [v2.2.0-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.1) v2.2.0-beta.1

#### ✅ Merged PRs
- [#7341](https://github.com/agentscope-ai/QwenPaw/pull/7341) test(integration): coverage sprint batch 5 — 495 cases across endpoints, CLI, and module internals
- [#7342](https://github.com/agentscope-ai/QwenPaw/pull/7342) feat(token-usage): add prompt cache observability
- [#7352](https://github.com/agentscope-ai/QwenPaw/pull/7352) fix(console): align cron calendar dates with Sunday-first headers
- [#7336](https://github.com/agentscope-ai/QwenPaw/pull/7336) fix(installer): handle NSIS uninstall process blockers
- [#7334](https://github.com/agentscope-ai/QwenPaw/pull/7334) fix(chat): improve mobile composer controls
- [#7346](https://github.com/agentscope-ai/QwenPaw/pull/7346) perf(runtime): stabilize prompt cache prefixes
- [#7338](https://github.com/agentscope-ai/QwenPaw/pull/7338) chore: bump the version to 2.2.0b2
- [#7332](https://github.com/agentscope-ai/QwenPaw/pull/7332) test: stabilize timing-sensitive tests
- [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) test(e2e): boost console coverage with 23 targeted cases + extended assertions
- [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) fix(workspace): make startup failure cleanup cancellation-safe

#### 🐛 New Issues
- [#7366](https://github.com/agentscope-ai/QwenPaw/issues/7366) [Feature]: 优化一下https://platform.agentscope.io/deploy的部署管理，增加可升级版本号，避免升级版本黑盒 `enhancement` 💬3
- [#7355](https://github.com/agentscope-ai/QwenPaw/issues/7355) [Feature]: 对话框当前在安卓的chrome等各种浏览器下输入内容时无法换行，希望可以换行 `enhancement` 💬2
- [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) [Feature]: Prompt cache hit rate observability and optimization — 81% vs 96% (OpenCode), cost impact documented `good first issue` 💬2
- [#7364](https://github.com/agentscope-ai/QwenPaw/issues/7364) [Bug]: Zero-downtime reload reuses a closed memory_manager and skips start(), permanently breaking memory_search 💬1
- [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) [Bug]: 同步调用阻塞事件循环且 timeout 失效 / Synchronous calls freeze the event loop and the timeout never fires `bug` 💬1
- [#7362](https://github.com/agentscope-ai/QwenPaw/issues/7362) [Bug]: 文件保护未生效 `bug` 💬1
- [#7360](https://github.com/agentscope-ai/QwenPaw/issues/7360) [Question]: QwenPaw Desktop 启动耗时过长（约 4 分钟） The startup time of QwenPaw Desktop is excessively long (approximately 4 minutes) `question` 💬1
- [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) Desktop App: Add setting to disable auto-scroll during streaming generation (scroll locking) `enhancement` 💬1
- [#7333](https://github.com/agentscope-ai/QwenPaw/issues/7333) [Release Duty] QwenPaw v2.2.0-beta.1 (Beta) — Installation Verification `release-duty` `pre-release`

#### 🔒 Closed Issues
- [#7366](https://github.com/agentscope-ai/QwenPaw/issues/7366) [Feature]: 优化一下https://platform.agentscope.io/deploy的部署管理，增加可升级版本号，避免升级版本黑盒
- [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) [Bug]: 定时任务执行成功后，收件箱没收到某些执行成功的推送消息
- [#7355](https://github.com/agentscope-ai/QwenPaw/issues/7355) [Feature]: 对话框当前在安卓的chrome等各种浏览器下输入内容时无法换行，希望可以换行
- [#7297](https://github.com/agentscope-ai/QwenPaw/issues/7297) [Question]: qq对话中让qwenpaw重启会丢失最后聊天的记忆

### ZeroClaw (`zeroclaw-labs/zeroclaw`)

**Stars:** 32,667 · **Open issues:** 811 · **Last push:** 15h ago

#### ✅ Merged PRs
- [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) fix(config): migrate bare vision_model_provider to dotted alias ref
- [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) fix(runtime): prevent stale provider refreshes from mutating replacement sessions (#9719)

#### 🐛 New Issues
- [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) fix(channels): secure temp file handling with 0o600 permissions
- [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) [Bug]: second message during an active turn starts a parallel run in the same session → duplicate work and duplicate reply `bug`
- [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) [Tracker]: Implement accepted Gemini speech-to-speech broker channel (#8780) `enhancement` `channel` `gateway` `runtime`
- [#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) [Tracker]: Implement session-scoped prompt attachments (#9998) `enhancement` `agent` `channel` `config`

#### 🔒 Closed Issues
- [#9591](https://github.com/zeroclaw-labs/zeroclaw/issues/9591) fix(channels): clear delivery registry when reload removes all channels
- [#9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651) [Bug]: migrated bare vision_model_provider cannot resolve keyed provider credentials
- [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) [Feature]: Include Git Channel fully compiled in zeroclaw:debian Docker image
- [#10264](https://github.com/zeroclaw-labs/zeroclaw/issues/10264) [Task]: make Quickstart CLI validation tests locale-independent
- [#10327](https://github.com/zeroclaw-labs/zeroclaw/issues/10327) [Bug]: Discord URL fallback reports a false partial image-load failure
- [#10305](https://github.com/zeroclaw-labs/zeroclaw/issues/10305) [Task]: generate the SOP syntax reference from source instead of hand-maintaining it

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,252 · **Open issues:** 7,134 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#53109](https://github.com/vllm-project/vllm/pull/53109) [Bugfix] Allocate packed outputs in fused_q_kv_rmsnorm so q_b_proj keeps its low-latency GEMM path at decode
- [#54099](https://github.com/vllm-project/vllm/pull/54099) Remove wrongly added e2e test
- [#54108](https://github.com/vllm-project/vllm/pull/54108) [Misc] Separate adaptive verification config validation
- [#54111](https://github.com/vllm-project/vllm/pull/54111) [Bugfix] Remove race in fused groupwise RMSNorm quantization
- [#54015](https://github.com/vllm-project/vllm/pull/54015) [Kimi-K3] Merge MLA gate into QKV-A projection
- [#52743](https://github.com/vllm-project/vllm/pull/52743) fix(build): correct preprocessor guard for GDN decode to fix Ampere c…
- [#53508](https://github.com/vllm-project/vllm/pull/53508) [Bugfix][MRV2] Isolate sleep-mode KV allocations
- [#54023](https://github.com/vllm-project/vllm/pull/54023) [Bugfix] Revert renderer warmup overlap to avoid fork deadlock
- [#53756](https://github.com/vllm-project/vllm/pull/53756) [Rust Frontend][gRPC] Enforce LoRA path validation across transports
- [#54005](https://github.com/vllm-project/vllm/pull/54005) [Bugfix][Model] Fix K3 DSpark config for 96-head drafts
- …and 38 more

#### 🐛 New Issues
- [#53982](https://github.com/vllm-project/vllm/issues/53982) [Bug]: _compute_slot_mapping_kernel reads block_table out of bounds for cache groups whose block table is narrower than the sequence `rocm` 💬5
- [#54046](https://github.com/vllm-project/vllm/issues/54046) [Bug]: [dspark] Adaptive verification profiles a batch shape the scheduler cannot produce `bug` `scheduler` 💬5
- [#54059](https://github.com/vllm-project/vllm/issues/54059) [Model]: GLM-5.3-Flash (glm5_next): no sparse-MLA attention path on Ada (sm_89, RTX 4090) `glm` 💬4
- [#54027](https://github.com/vllm-project/vllm/issues/54027) [Bug]: DFlash2 + YaRN identical 1.04M prompt gets zero prefix-cache reuse while target-only reuses ~1.039M tokens 💬4
- [#54087](https://github.com/vllm-project/vllm/issues/54087) [Bug]: torch profiler hangs on ROCm after rocprofiler-sdk 1.3.2 bump `bug` `rocm` 💬4
- [#53975](https://github.com/vllm-project/vllm/issues/53975) [Bug]: legacy guided_json is silently ignored - request returns 200 with unconstrained free-form text 💬3
- [#54017](https://github.com/vllm-project/vllm/issues/54017) [Bug]: Unsupported `reasoning_effort` value causes 500 error when chat template rejects it `bug` `kimi` `k3` 💬3
- [#54114](https://github.com/vllm-project/vllm/issues/54114) [Bug]: Evaluating GLM-5.1-FP8 for reasoning over large contexts produces unexpectedly poor level of accuracy. `bug` `rocm` `glm` 💬2
- [#54002](https://github.com/vllm-project/vllm/issues/54002) [Bug]: crashed engine leaks /dev/shm/vllm_offload_*.mmap, making every in-place container restart fail at SharedOffloadRegion init 💬2
- [#54125](https://github.com/vllm-project/vllm/issues/54125) [Bug]: DeepGEMM is reported supported on sm_121 (GB10) but faults — support_deep_gemm() accepts the whole 120 capability family 💬1
- …and 25 more

#### 🔒 Closed Issues
- [#35800](https://github.com/vllm-project/vllm/issues/35800) [Bug]: Enabling speculative coding causes malformed Tool Calls in Qwen 122B MXFP4
- [#46657](https://github.com/vllm-project/vllm/issues/46657) [Bug]: test_logprobs.py::test_spec_decode_logprobs not using eager mode even though comment says it is
- [#53137](https://github.com/vllm-project/vllm/issues/53137) [Bug]: tools/recipes/recipe_json_to_vllm_config.py silently mis-parses the -cc (compilation-config) short alias
- [#54027](https://github.com/vllm-project/vllm/issues/54027) [Bug]: DFlash2 + YaRN identical 1.04M prompt gets zero prefix-cache reuse while target-only reuses ~1.039M tokens
- [#53413](https://github.com/vllm-project/vllm/issues/53413) [Bug]: GLM-5.2 FP8 on 8×H200 dies with runtime CUDA OOM in sparse_decode_fwd
- [#41031](https://github.com/vllm-project/vllm/issues/41031) [Bug]: AssertionError in sampler.py:383
- [#41048](https://github.com/vllm-project/vllm/issues/41048) [Bug]: Incorrect Transport for NIXL in Docker image on cu129
- [#50877](https://github.com/vllm-project/vllm/issues/50877) [Bug]: DSpark speculative decoding triggers FlashInfer MNNVL allreduce "buffer size insufficient" via draft model's embed_input_ids (TP8, GB200 NVL72)
- …and 9 more

### SGLang (`sgl-project/sglang`)

**Stars:** 32,587 · **Open issues:** 5,018 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#36547](https://github.com/sgl-project/sglang/pull/36547) Fix DeepSeek V4 multistream QKV buffer lifetime
- [#36672](https://github.com/sgl-project/sglang/pull/36672) [NPU] Chain PR test jobs and disable two DeepSeek-V4-Flash perf tests
- [#34747](https://github.com/sgl-project/sglang/pull/34747) [Cosmos3] Add cosmos3 transfer capability
- [#36760](https://github.com/sgl-project/sglang/pull/36760) [sglang-miles] Cherry pick #35708
- [#36356](https://github.com/sgl-project/sglang/pull/36356) [AMD] Enable aiter mla asm path through padding attn heads for Kimi K3
- [#35727](https://github.com/sgl-project/sglang/pull/35727) [NPU][Bugfix] Fix OOB gather in decode KV allocation when free pool is tight
- [#36502](https://github.com/sgl-project/sglang/pull/36502) [diffusion] fuse Helios paired transposed RoPE
- [#35451](https://github.com/sgl-project/sglang/pull/35451) [Feature] Support PP in full prefill CUDA graphs
- [#36755](https://github.com/sgl-project/sglang/pull/36755) Fix DFLASH aux hidden-state capture on mHC models
- [#36529](https://github.com/sgl-project/sglang/pull/36529) [Fix][XPU/ROCm/NPU] Defer sgl_kernel.quantization import in expert_pack
- …and 55 more

#### 🐛 New Issues
- [#36711](https://github.com/sgl-project/sglang/issues/36711) [Bug] GLM-5.3-Flash (glm5_next) crashes on startup with --moe-runner-backend flashinfer_trtllm: IndexError index 288 out of bounds in logical_to_all_physical 💬2
- [#36702](https://github.com/sgl-project/sglang/issues/36702) [Bug] Kimi-K3 + DCP: all TP ranks wedge in filter_dcp_local_kv_indices (nonzero → cudaStreamSynchronize) on long chunked prefill; 300s watchdog, memory free 💬2
- [#36701](https://github.com/sgl-project/sglang/issues/36701) [Bug] Qwen3.8-Flash-Next on sm_120 (RTX PRO 6000 Blackwell): QSA decode kernel gated to sm_100, plus contradictory SSM dtype checks 💬2
- [#36599](https://github.com/sgl-project/sglang/issues/36599) [Bug] deepseek_nextn hardcodes quant_config=None for modelopt_fp4 — breaks quantized NextN drafts (GLM-5.3-Flash NVFP4 speculative decoding) 💬2
- [#36596](https://github.com/sgl-project/sglang/issues/36596) [Bug] ModelOpt FP4: is_layer_excluded misses fused module names and model.-prefixed names — mixed-precision NVFP4 checkpoints crash at load (GLM-5.3-Flash) 💬2
- [#36616](https://github.com/sgl-project/sglang/issues/36616) [Bug] qwen3.8 flash next rocm bug `amd` 💬1
- [#36716](https://github.com/sgl-project/sglang/issues/36716) qwen38flashnext cookbook image: 4 bugs on single-device SM121 (GB10 Spark) — silent garbage decode (trtllm-gen), non-compacting _compact_kv, TMA-O varlen boot crash, fp8 tl.dot in sparse prefill 💬1
- [#36597](https://github.com/sgl-project/sglang/issues/36597) [Bug] NVFP4 MoE + EP>1: globally-loaded input scales not sliced to local experts in non-CuteDSL branch (_compute_gemm1_alphas shape mismatch) 💬1
- [#36669](https://github.com/sgl-project/sglang/issues/36669) [Bug] GLM-5.3-Flash thinking output degenerates into repeated '!' under multi-tool agentic prompts 💬1
- [#36653](https://github.com/sgl-project/sglang/issues/36653) [Bug] NEXTN/MTP speculative decoding fails to load MTP MoE weights under TP>1 for Glm5NextForConditionalGeneration (GLM-5.3-Flash) 💬1
- …and 13 more

#### 🔒 Closed Issues
- [#36702](https://github.com/sgl-project/sglang/issues/36702) [Bug] Kimi-K3 + DCP: all TP ranks wedge in filter_dcp_local_kv_indices (nonzero → cudaStreamSynchronize) on long chunked prefill; 300s watchdog, memory free
- [#36701](https://github.com/sgl-project/sglang/issues/36701) [Bug] Qwen3.8-Flash-Next on sm_120 (RTX PRO 6000 Blackwell): QSA decode kernel gated to sm_100, plus contradictory SSM dtype checks

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 125,980 · **Open issues:** 2,252 · **Last push:** 1h ago

#### 🚀 New Releases
- [b10665](https://github.com/ggml-org/llama.cpp/releases/tag/b10665) b10665
- [b10664](https://github.com/ggml-org/llama.cpp/releases/tag/b10664) b10664
- [b10663](https://github.com/ggml-org/llama.cpp/releases/tag/b10663) b10663
- [b10662](https://github.com/ggml-org/llama.cpp/releases/tag/b10662) b10662
- [b10661](https://github.com/ggml-org/llama.cpp/releases/tag/b10661) b10661
- [b10660](https://github.com/ggml-org/llama.cpp/releases/tag/b10660) b10660
- [b10659](https://github.com/ggml-org/llama.cpp/releases/tag/b10659) b10659
- [b10658](https://github.com/ggml-org/llama.cpp/releases/tag/b10658) b10658
- [b10657](https://github.com/ggml-org/llama.cpp/releases/tag/b10657) b10657
- [b10656](https://github.com/ggml-org/llama.cpp/releases/tag/b10656) b10656

#### ✅ Merged PRs
- [#27804](https://github.com/ggml-org/llama.cpp/pull/27804) model: add DSpark support for Nemotron3.5
- [#27742](https://github.com/ggml-org/llama.cpp/pull/27742) model: add Qwen3.8-Flash-Next (qwen4exp)
- [#27786](https://github.com/ggml-org/llama.cpp/pull/27786) ggml-hexagon: add HTP unary ops for ABS and LOG
- [#27798](https://github.com/ggml-org/llama.cpp/pull/27798) hexagon: fix RMS_NORM_MUL grouped/broadcast weight bugs
- [#24124](https://github.com/ggml-org/llama.cpp/pull/24124) server: add ctx-per-slot (--kv-unified-per-slot)
- [#27753](https://github.com/ggml-org/llama.cpp/pull/27753) ci : build only the ggml-hip backend for windows-rocm release
- [#27342](https://github.com/ggml-org/llama.cpp/pull/27342) spec : add DFlash2 support (local convolution + candidate selector)
- [#26973](https://github.com/ggml-org/llama.cpp/pull/26973) ci : bundle HIP runtime DLLs with Windows ROCm release
- [#27816](https://github.com/ggml-org/llama.cpp/pull/27816) spec : add DFlash2 support (local convolution + candidate selector) (#27342)
- [#27768](https://github.com/ggml-org/llama.cpp/pull/27768) opencl: add bin kernels `kernel_gemm_moe_q4_0_q8_1_dp4a_bin`, `kernel_gemm_moe_mxfp4_q8_1_dp4a_bin`
- …and 13 more

#### 🐛 New Issues
- [#27813](https://github.com/ggml-org/llama.cpp/issues/27813) server: slot restore gives no prefix reuse on hybrid/recurrent models (context checkpoints are not persisted) 💬5
- [#27831](https://github.com/ggml-org/llama.cpp/issues/27831) Misc. bug: [WEBUI]: Copy to clipboard fails to copy anything `bug-unconfirmed` 💬2
- [#27819](https://github.com/ggml-org/llama.cpp/issues/27819) DFlash2 is not working with `--split-mode tensor` 💬1
- [#27840](https://github.com/ggml-org/llama.cpp/issues/27840) Eval bug: mmap and tensor-read-lazy lead to constant disk writing on Windows `bug-unconfirmed` 💬1
- [#27822](https://github.com/ggml-org/llama.cpp/issues/27822) Hybrid CPU/Metal: Metal OOM leads to EXC_BAD_ACCESS in ggml_compute_forward_mul_mat_id instead of a clean failure 💬1
- [#27829](https://github.com/ggml-org/llama.cpp/issues/27829) Eval bug: DFlash2: --split-mode tensor aborts with SPLIT_AXIS_UNKNOWN on ROCm (Qwen3.8-27B, 2x RX 7900 XTX) `bug-unconfirmed`
- [#27797](https://github.com/ggml-org/llama.cpp/issues/27797) qwen4exp (PR #27742): multi-segment prompts degrade to '//////' on gfx1151 — deterministic repro 💬1
- [#27814](https://github.com/ggml-org/llama.cpp/issues/27814) Misc. bug: VRAM usage increased in msvc build vs clang on windows (+2gb) `bug-unconfirmed` 💬1
- [#27783](https://github.com/ggml-org/llama.cpp/issues/27783) server / tokenizer: SIGSEGV (stack overflow) in `unicode_regex_split_stl` — the o200k / GPT4O pre-tokenizer regex recurses once per character, so a ~26,000-character unbroken run of one character class kills the process 💬1
- [#27784](https://github.com/ggml-org/llama.cpp/issues/27784) Metal: --embeddings with pooling still builds and computes the LM head, producing a multi-GiB discarded tensor and returning all-NaN embeddings on long inputs 💬1
- …and 13 more

#### 🔒 Closed Issues
- [#27813](https://github.com/ggml-org/llama.cpp/issues/27813) server: slot restore gives no prefix reuse on hybrid/recurrent models (context checkpoints are not persisted)
- [#26921](https://github.com/ggml-org/llama.cpp/issues/26921) Eval bug: Vulkan (Mali-G925 / Immortalis MC12): Qwen3.5-0.8B multimodal prefill returns all-NaN logits, while the same build on CPU devices works

### Ollama (`ollama/ollama`)

**Stars:** 179,588 · **Open issues:** 3,810 · **Last push:** 2h ago

#### 🚀 New Releases
- [v0.33.2-rc1](https://github.com/ollama/ollama/releases/tag/v0.33.2-rc1) v0.33.2

#### ✅ Merged PRs
- [#18081](https://github.com/ollama/ollama/pull/18081) lint fix
- [#17381](https://github.com/ollama/ollama/pull/17381) Clean up dead code
- [#18077](https://github.com/ollama/ollama/pull/18077) app: list account cloud models for Claude
- [#18056](https://github.com/ollama/ollama/pull/18056) app: synchronize macOS app handoff
- [#18058](https://github.com/ollama/ollama/pull/18058) proxy: continue requests when the model catalog changes
- [#18049](https://github.com/ollama/ollama/pull/18049) app: restore system dark mode

#### 🐛 New Issues
- [#18074](https://github.com/ollama/ollama/issues/18074) Granite 4.2 models (8B/3B) do not respect safe default context ( eg. 4096) base on available VRAM and cause OOM kills `bug` 💬9
- [#18069](https://github.com/ollama/ollama/issues/18069) glm-5.3-flash:cloud — thinking trace degenerates into infinite single-token repetition ("lock"), never terminates `cloud` 💬4
- [#18067](https://github.com/ollama/ollama/issues/18067) GPU not detected on Jetpack 7.2 R39 on Nvidia Orin AGX 64GB `bug` 💬4
- [#18073](https://github.com/ollama/ollama/issues/18073) New Claude Desktop integration not working `bug` 💬2
- [#18076](https://github.com/ollama/ollama/issues/18076) v0.33.1 Broke vision supoort on MLX `bug` 💬1
- [#18063](https://github.com/ollama/ollama/issues/18063) mlx: Ling-3.0 (BailingMoeV3) support - split PR plan following #17643 feedback 💬1
- [#18068](https://github.com/ollama/ollama/issues/18068) Ollama UI App does not observe Dark Mode `bug` 💬1
- [#18059](https://github.com/ollama/ollama/issues/18059) GLM5.3-flash + Claude Code 2.1.247 : API Error: 400 Input should be a valid string `bug` 💬1
- [#18082](https://github.com/ollama/ollama/issues/18082) GLM chat template emits orphaned closing think tag — reasoning leaks into message.content
- [#18075](https://github.com/ollama/ollama/issues/18075) Pls support qwen3.8 flash next for windows pc `model`
- …and 3 more

#### 🔒 Closed Issues
- [#18008](https://github.com/ollama/ollama/issues/18008) GUI lost dark-mode and is completely WHITE?
- [#18063](https://github.com/ollama/ollama/issues/18063) mlx: Ling-3.0 (BailingMoeV3) support - split PR plan following #17643 feedback
- [#18068](https://github.com/ollama/ollama/issues/18068) Ollama UI App does not observe Dark Mode
- [#18072](https://github.com/ollama/ollama/issues/18072) server: make the prompt cache size configurable — it is hard-coded at 8192 MiB

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,428 · **Open issues:** 4,884 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#38606](https://github.com/BerriAI/litellm/pull/38606) fix(router): fall over on raised mid-stream errors in /v1/messages streams
- [#38492](https://github.com/BerriAI/litellm/pull/38492) fix(anthropic): resolve /v1/messages effort tiers through the capability owner
- [#38590](https://github.com/BerriAI/litellm/pull/38590) feat(proxy): dry-run a real request body on /auto_router/test_routing
- [#38589](https://github.com/BerriAI/litellm/pull/38589) fix(shadow_eval): refuse a judge model that also serves one of the arms it grades
- [#36344](https://github.com/BerriAI/litellm/pull/36344) test-check-commits
- [#38100](https://github.com/BerriAI/litellm/pull/38100) fix(tencent): route thinking through extra_body in chat completions
- [#38572](https://github.com/BerriAI/litellm/pull/38572) feat(proxy): opt-in enforce_fallback_model_access authorizes router fallbacks against the calling key
- [#38568](https://github.com/BerriAI/litellm/pull/38568) fix(guardrails): add fail-open mode to CrowdStrike AIDR guardrail
- [#38582](https://github.com/BerriAI/litellm/pull/38582) fix(langfuse): warn and drop invalid LANGFUSE_TRACING_ENVIRONMENT instead of failing requests
- [#38586](https://github.com/BerriAI/litellm/pull/38586) fix(router): copy instead of mutating caller metadata when scrubbing fallback stamp keys
- …and 72 more

#### 🐛 New Issues
- [#38511](https://github.com/BerriAI/litellm/issues/38511) [Bug]: Responses streaming error handler crashes with AttributeError on the completion-bridge iterator, masking the original error `llm translation` 💬3
- [#38515](https://github.com/BerriAI/litellm/issues/38515) [Bug]: Zero-cost models are blocked once a user's personal `max_budget` is exhausted `bug` `proxy` `llm translation` 💬2
- [#38578](https://github.com/BerriAI/litellm/issues/38578) [Bug]: /v1/messages prices Together deployments by their alias, so a size marker in the alias bills the size bucket `bug` `proxy` 💬1
- [#38529](https://github.com/BerriAI/litellm/issues/38529) /v1/messages drops output_config.effort for Claude models served by openrouter or azure_ai `proxy` `llm translation` 💬1
- [#38556](https://github.com/BerriAI/litellm/issues/38556) [Bug]: `bug` `proxy` `llm translation` 💬1
- [#38537](https://github.com/BerriAI/litellm/issues/38537) [Bug]: Vertex Gemini 3.7 Flash rejects chat history ending in a text-only assistant message `proxy` `llm translation` 💬1
- [#38474](https://github.com/BerriAI/litellm/issues/38474) [Bug]: DashScope MaaS endpoints use different base URLs for Chat Completions vs Responses API — PR #30286 fix incomplete for workspace-specific URLs `proxy` `llm translation` 💬1
- [#38459](https://github.com/BerriAI/litellm/issues/38459) [Bug]: token_counter raises on OpenAI `input_audio` content blocks — context-window & prompt-caching pre-call checks silently skip, /utils/token_counter 500s `llm translation` 💬1
- [#38612](https://github.com/BerriAI/litellm/issues/38612) [Bug]: chatgpt provider strips parallel_tool_calls — Codex Responses-Lite (gpt-5.6-*) requests always 400 `llm translation`
- [#38610](https://github.com/BerriAI/litellm/issues/38610) [Bug]: /v1/messages stream answers 200 with message_start and an SSE error chunk when the fallback also fails before content `bug` `proxy` `llm translation`
- …and 19 more

#### 🔒 Closed Issues
- [#19779](https://github.com/BerriAI/litellm/issues/19779) [Feature]: Generic guardrail - fail-open mode
- [#32484](https://github.com/BerriAI/litellm/issues/32484) [Bug]: Unexpected log messages about unresolved cost information with Docker image 1.90.0
- [#31977](https://github.com/BerriAI/litellm/issues/31977) [Bug]: MCP JWT signer overwrites OAuth Authorization header during tools/call
- [#29190](https://github.com/BerriAI/litellm/issues/29190) [Bug]: Claude Code 3P tab in Claude Desktop fails proxy auth — likely Authorization header (Anthropic OAuth token) takes precedence over user's x-api-key LiteLLM virtual key
- [#38529](https://github.com/BerriAI/litellm/issues/38529) /v1/messages drops output_config.effort for Claude models served by openrouter or azure_ai
- [#28775](https://github.com/BerriAI/litellm/issues/28775) [Bug]: Team doesn't exist in db. Team=litellm-dashboard
- [#37462](https://github.com/BerriAI/litellm/issues/37462) [Bug]: /v1/messages → vertex_ai/gemini drops tool_result blocks with no text (tool_reference, empty list) → Vertex 400 function-response part count
- [#34743](https://github.com/BerriAI/litellm/issues/34743) [Bug]: MCP DCR bridge forwards lowercase bearer token type and causes upstream 401
- …and 2 more

### Unsloth (`unslothai/unsloth`)

**Stars:** 74,999 · **Open issues:** 1,380 · **Last push:** <1h ago

#### 🚀 New Releases
- [v0.1.804-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.804-beta) Qwen3.8-Flash-Next + GLM-5.3-Flash

#### ✅ Merged PRs
- [#9870](https://github.com/unslothai/unsloth/pull/9870) Fix Studio CPT overwriting LFM2 all-linear LoRA targets
- [#9878](https://github.com/unslothai/unsloth/pull/9878) fix(studio): stop offering a transformers upgrade where it cannot load anything
- [#9626](https://github.com/unslothai/unsloth/pull/9626) Fix datasets PyArrow registration after failed warm import
- [#9539](https://github.com/unslothai/unsloth/pull/9539) Fix Studio hydrating synced GGUF files before selection
- [#9868](https://github.com/unslothai/unsloth/pull/9868) Bump install.sh / install.ps1 pins to unsloth>=2026.8.22
- [#9865](https://github.com/unslothai/unsloth/pull/9865) Studio: stop the per-chunk autosave writing back messages the server owns
- [#9862](https://github.com/unslothai/unsloth/pull/9862) Put the smart offload planner back behind its flag
- [#9841](https://github.com/unslothai/unsloth/pull/9841) Keep the context length a load was given instead of resetting it to Auto
- [#9860](https://github.com/unslothai/unsloth/pull/9860) Apply the kwarg-spacing hook to the no-progress tool results test
- [#9822](https://github.com/unslothai/unsloth/pull/9822) Studio: warn instead of refusing to load a model bigger than VRAM plus RAM
- …and 35 more

#### 🐛 New Issues
- [#9861](https://github.com/unslothai/unsloth/issues/9861) Smart offload planner is slower than --fit on in 40 of 43 measured cells on a 6-core desktop 💬6
- [#9869](https://github.com/unslothai/unsloth/issues/9869) [Performance] Linked-folder RAG indexing is fully sequential and underutilizes CPU/GPU 💬1
- [#9832](https://github.com/unslothai/unsloth/issues/9832) [Feature] Show performance counters in chat, add developer options `feature request` 💬1
- [#9874](https://github.com/unslothai/unsloth/issues/9874) [Bug] macOS arm64 prebuilt b10639 links /usr/lib/librdma.dylib — unloadable on macOS < 26 `feature request` `bug` 💬1
- [#9840](https://github.com/unslothai/unsloth/issues/9840) [Bug] Vision blocks parallel slots `feature request` `bug` 💬1
- [#9838](https://github.com/unslothai/unsloth/issues/9838) [Feature] Why are model configuration parameters not the API page? We gotta start a new chat everytime we want to edit model param/config? `feature request`
- [#9866](https://github.com/unslothai/unsloth/issues/9866) [Studio Bug] CPT overrides LFM2 all-linear defaults with incompatible Llama target names `bug`
- [#9899](https://github.com/unslothai/unsloth/issues/9899) [Feature] Turn API Token into selectable text `feature request`
- [#9898](https://github.com/unslothai/unsloth/issues/9898) [Feature] Increase sizes. `feature request`
- [#9897](https://github.com/unslothai/unsloth/issues/9897) [Bug] Image/Video Generation on AMD does not work - Reposted `feature request` `bug`
- …and 11 more

#### 🔒 Closed Issues
- [#685](https://github.com/unslothai/unsloth/issues/685) Unsloth On Mac
- [#6721](https://github.com/unslothai/unsloth/issues/6721) Add DeepReinforce Ornith-1.0 support / Unsloth variants
- [#9518](https://github.com/unslothai/unsloth/issues/9518) [Bug] the chat window's own send-and-persist path failing to write to its local IndexedDB store
- [#9480](https://github.com/unslothai/unsloth/issues/9480) [Studio Bug] Model Hub crashes WebKitWebProcess (SIGABRT) — Skia COLRv1 font assert, not #9393
- [#7588](https://github.com/unslothai/unsloth/issues/7588) [Feature]Support video upload in Unsloth Studio
- [#7477](https://github.com/unslothai/unsloth/issues/7477) [Bug] Unsloth Studio API inference: Custom model settings (context length, KV cache quantization) get ignored on model auto-load
- [#7307](https://github.com/unslothai/unsloth/issues/7307) RDNA4 (gfx1201 / Radeon AI PRO R9700): prebuilt `llama-server` segfaults on startup — plus an iGPU/HIP crash Studio doesn't guard against
- [#7022](https://github.com/unslothai/unsloth/issues/7022) [Bug] `--fit on` prevents loading large MoE models like DeepSeek-V4-Flash on consumer hardware; request for UI control over llama-server flags
- …and 43 more

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*