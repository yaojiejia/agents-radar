# 📡 AI Ecosystem Digest — 2026-08-28

> Generated 2026-08-28 01:11 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,202 | 3 | 0 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 119,212 | 19 | 4 | 48 | 6 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,719 | 1 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,122 | 15 | 4 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 201,972 | 24 | 12 | 16 | 0 |
| [Pi](https://github.com/earendil-works/pi) | 98,313 | 31 | 35 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,435 | 32 | 15 | 1 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 387,846 | 156 | 98 | 144 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 237,340 | 35 | 4 | 0 | 1 |
| [IronClaw](https://github.com/nearai/ironclaw) | 12,603 | 20 | 20 | 14 | 1 |
| [QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,566 | 8 | 3 | 12 | 1 |
| [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,667 | 4 | 6 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,249 | 36 | 17 | 44 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 32,584 | 21 | 9 | 63 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 125,971 | 23 | 11 | 24 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 179,588 | 14 | 5 | 6 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,426 | 26 | 17 | 80 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 74,994 | 20 | 13 | 44 | 1 |

---

## ✨ Highlights

- **Ollama** released [v0.33.2-rc1](https://github.com/ollama/ollama/releases/tag/v0.33.2-rc1).
- **OpenAI Codex** merged [#41235](https://github.com/openai/codex/pull/41235), which sanitizes history notes backend errors.
- **OpenClaw** saw significant activity with the merging of [#123535](https://github.com/openclaw/openclaw/pull/123535), fixing UI session catalog refresh storms.
- **OpenCode**'s new issue [#41015](https://github.com/openai/codex/issues/41015) about Codex suddenly not opening has garnered 6 comments, indicating a major user concern.
- **vLLM** reported two critical issues in new issues [#53982](https://github.com/vllm-project/vllm/issues/53982) and [#54046](https://github.com/vllm-project/vllm/issues/54046), both with 5 comments, related to out-of-bounds reads and adaptive verification errors.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,202 · **Open issues:** 15,249 · **Last push:** <1h ago

#### 🚀 New Releases
- [v2.1.250](https://github.com/anthropics/claude-code/releases/tag/v2.1.250) v2.1.250
- [v2.1.248](https://github.com/anthropics/claude-code/releases/tag/v2.1.248) v2.1.248

#### 🐛 New Issues
- [#90246](https://github.com/anthropics/claude-code/issues/90246) [Feature Request] Display model name in terminal CLI inline agent status view `enhancement` `platform:macos` `area:agent-view`
- [#90245](https://github.com/anthropics/claude-code/issues/90245) [BUG] CCD desktop app rejects MCP tools with draft-07 outputSchema that work fine in CLI `bug` `has repro` `platform:macos` `area:mcp`
- [#90244](https://github.com/anthropics/claude-code/issues/90244) Doesn't work anymore on VS Code version1.135 `bug` `platform:windows` `platform:vscode`

### OpenAI Codex (`openai/codex`)

**Stars:** 119,212 · **Open issues:** 14,139 · **Last push:** <1h ago

#### 🚀 New Releases
- [rust-v0.150.1](https://github.com/openai/codex/releases/tag/rust-v0.150.1) 0.150.1
- [rust-v0.151.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7) 0.151.0-alpha.7
- [rust-v0.151.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.6) 0.151.0-alpha.6
- [rust-v0.151.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.5) 0.151.0-alpha.5
- [rust-v0.151.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.4) 0.151.0-alpha.4
- [rust-v0.150.0-alpha.12.2](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.12.2) 0.150.0-alpha.12.2

#### ✅ Merged PRs
- [#41235](https://github.com/openai/codex/pull/41235) Sanitize history notes backend errors
- [#41232](https://github.com/openai/codex/pull/41232) Expose the PowerShell version in environment context
- [#41231](https://github.com/openai/codex/pull/41231) Instrument the loaded plugin cache
- [#41230](https://github.com/openai/codex/pull/41230) Apply app routing policy to unauthenticated plugin reads
- [#41227](https://github.com/openai/codex/pull/41227) Use compatible PowerShell for elevated Windows sandbox commands
- [#41226](https://github.com/openai/codex/pull/41226) Move Guardian review session tests to a separate file
- [#41223](https://github.com/openai/codex/pull/41223) Add recency sorting to `project/list`
- [#41221](https://github.com/openai/codex/pull/41221) Honor turn token budgets in Guardian review rollover
- [#41219](https://github.com/openai/codex/pull/41219) Retry confirmed remote registration conflicts
- [#41218](https://github.com/openai/codex/pull/41218) Share linked tool mention parsing in the TUI
- …and 38 more

#### 🐛 New Issues
- [#41015](https://github.com/openai/codex/issues/41015) Codex suddenly won't open; only the animation plays `bug` `windows-os` `app` 💬6
- [#41170](https://github.com/openai/codex/issues/41170) [Windows] First launch shows no window for about 15 minutes while extracting bundled cua_node runtime `bug` `windows-os` `app` `computer-use` 💬4
- [#41135](https://github.com/openai/codex/issues/41135) Windows: sandbox setup_marker.json written without an ACE for the invoking user in non-interactive exec, so setup repeats forever (orchestrator_helper_incomplete) `bug` `windows-os` `sandbox` `exec` 💬4
- [#41238](https://github.com/openai/codex/issues/41238) "Ran 5 commands" - Can we not do this? Or make it optional? `bug` `enhancement` `TUI` `CLI` 💬2
- [#41228](https://github.com/openai/codex/issues/41228) Codex browser control unavailable across secure browser, built-in Browser and Chrome `bug` `app` `browser` 💬2
- [#41224](https://github.com/openai/codex/issues/41224) Capped continuity mode after ChatGPT plan limits (Luna fallback) `enhancement` `codex-web` `extension` `rate-limits` 💬2
- [#41236](https://github.com/openai/codex/issues/41236) [Windows] Codex Desktop app-server repeatedly restarts and loses tool call outputs `bug` `windows-os` `tool-calls` `app` 💬1
- [#41234](https://github.com/openai/codex/issues/41234) Remote Control remains disabled despite workspace permission being enabled `bug` `app` `remote` 💬1
- [#41233](https://github.com/openai/codex/issues/41233) codex_app__automation_update parameters schema rejected by Kimi/Moonshot (HTTP 400, $ref sibling of type) — same failure class as #39848 `bug` `custom-model` `tool-calls` `app` 💬1
- [#41229](https://github.com/openai/codex/issues/41229) [Windows][Regression] Deleted local Codex tasks remain in local_thread_catalog and reappear after restart `bug` `windows-os` `app` `session` 💬1
- …and 9 more

#### 🔒 Closed Issues
- [#35215](https://github.com/openai/codex/issues/35215) Windows ChatGPT Desktop fails to relaunch after first successful launch in the same session (0x800701C0)
- [#41135](https://github.com/openai/codex/issues/41135) Windows: sandbox setup_marker.json written without an ACE for the invoking user in non-interactive exec, so setup repeats forever (orchestrator_helper_incomplete)
- [#41217](https://github.com/openai/codex/issues/41217) [Bug] Standalone self-updater never deletes old releases, consuming 3.8 GiB
- [#41212](https://github.com/openai/codex/issues/41212) Linux: inherited Herdr environment variables are unavailable to tools and subagents

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,719 · **Open issues:** 870 · **Last push:** 5h ago

#### 🚀 New Releases
- [v0.59.0-nightly.20260827.g3c311beac](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260827.g3c311beac) Release v0.59.0-nightly.20260827.g3c311beac

#### 🐛 New Issues
- [#29112](https://github.com/google-gemini/gemini-cli/issues/29112) Feature request: append to system prompt at launch (--append-system-prompt / GEMINI_APPEND_SYSTEM_MD) — GEMINI_SYSTEM_MD only replaces `area/core` `status/possible-duplicate` `status/bot-triaged` `effort/medium` 💬4

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,122 · **Open issues:** 2,232 · **Last push:** 8h ago

#### 🚀 New Releases
- [v1.0.81](https://github.com/github/copilot-cli/releases/tag/v1.0.81) 1.0.81
- [v1.0.81-14](https://github.com/github/copilot-cli/releases/tag/v1.0.81-14) 1.0.81-14

#### 🐛 New Issues
- [#4639](https://github.com/github/copilot-cli/issues/4639) v1.0.80: event-storage exhaustion retry storm drives long-running session into GC/compaction loop and Node OOM `triage` 💬1
- [#4629](https://github.com/github/copilot-cli/issues/4629) Plugin hooks are not loaded when a session is resumed via `--resume` `area:sessions` `area:plugins` 💬1
- [#4631](https://github.com/github/copilot-cli/issues/4631) 1000 `triage` `invalid` 💬1
- [#4643](https://github.com/github/copilot-cli/issues/4643) Compaction happens at low context usage (e.g. 20%) and don't get reported as an actual checkpoint? `triage`
- [#4642](https://github.com/github/copilot-cli/issues/4642) Make `--name` create or resume a session `triage`
- [#4641](https://github.com/github/copilot-cli/issues/4641) Publish official JSON Schema for settings.json `triage`
- [#4640](https://github.com/github/copilot-cli/issues/4640) userPromptTransformed hook is skipped for steering messages `triage`
- [#4638](https://github.com/github/copilot-cli/issues/4638) Do not derive model context from prompt and output token limits `triage`
- [#4637](https://github.com/github/copilot-cli/issues/4637) Avoid duplicate skill lookup for slash-invoked skills with disable-model-invocation `triage`
- [#4636](https://github.com/github/copilot-cli/issues/4636) MCP servers from --additional-mcp-config are removed during startup reconciliation in 1.0.81-11 `triage`
- …and 5 more

#### 🔒 Closed Issues
- [#3576](https://github.com/github/copilot-cli/issues/3576) Windows: stdio MCP servers fail to spawn (spawn npx ENOENT / EINVAL) in 1.0.56-1
- [#4006](https://github.com/github/copilot-cli/issues/4006) MCP `tools/list` pagination (nextCursor) not followed
- [#4631](https://github.com/github/copilot-cli/issues/4631) 1000
- [#4239](https://github.com/github/copilot-cli/issues/4239) MCP server args templating corrupts values containing nested ${VAR:-${VAR2:-$(cmd)}} shell parameter expansion (silent auth/token corruption)

### OpenCode (`anomalyco/opencode`)

**Stars:** 201,972 · **Open issues:** 5,656 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#45794](https://github.com/anomalyco/opencode/pull/45794) chore(ui): refresh Kobalte and Solid primitives
- [#45790](https://github.com/anomalyco/opencode/pull/45790) chore(deps): refresh Vite and Electron Builder tooling
- [#45780](https://github.com/anomalyco/opencode/pull/45780) fix(app): render local Markdown images through the server
- [#45760](https://github.com/anomalyco/opencode/pull/45760) fix(core): share native model defaults with v1 config migration
- [#45787](https://github.com/anomalyco/opencode/pull/45787) fix(core): cap provider retry-after delays at fifteen minutes
- [#45785](https://github.com/anomalyco/opencode/pull/45785) chore: upgrade opentui to 0.5.9
- [#45779](https://github.com/anomalyco/opencode/pull/45779) chore(deps): remove unused frontend dependencies
- [#45786](https://github.com/anomalyco/opencode/pull/45786) chore(desktop): remove stale native packaging
- [#45783](https://github.com/anomalyco/opencode/pull/45783) fix(core): complete supervisor flush when plugin activation fails
- [#45781](https://github.com/anomalyco/opencode/pull/45781) fix(core): wake sessions for recovered shell outcomes
- …and 6 more

#### 🐛 New Issues
- [#45580](https://github.com/anomalyco/opencode/issues/45580) OpenCode Ai decided to go rogue and make changes that cost me a ton of time and usage 💬4
- [#45568](https://github.com/anomalyco/opencode/issues/45568) ollama-cloud: glm-5.3-flash dropped from model cache due to unmapped family 'glm5_next' 💬3
- [#45791](https://github.com/anomalyco/opencode/issues/45791) session: reasoning parts duplicated per streamed chunk inflate context to 300k+ tokens and explode session storage `2.0` 💬2
- [#45602](https://github.com/anomalyco/opencode/issues/45602) Cobros dobles 💬2
- [#45764](https://github.com/anomalyco/opencode/issues/45764) [FEATURE]: Plugin hook to intercept and override LLM call parameters (llm.request.before) 💬2
- [#45723](https://github.com/anomalyco/opencode/issues/45723) TUI renders garbled/corrupted on native Windows, reproducing across multiple terminals and PTY layers (not a terminal/font issue) 💬2
- [#45591](https://github.com/anomalyco/opencode/issues/45591) opencode langing 💬2
- [#45592](https://github.com/anomalyco/opencode/issues/45592) opencode2 forgets sessions after restart `2.0` 💬2
- [#45596](https://github.com/anomalyco/opencode/issues/45596) Desktop: orange dot (server not connected) after 1.18.23 — bundled serve returns 401 Basic Auth 💬2
- [#45797](https://github.com/anomalyco/opencode/issues/45797) [Bug] Raw `<parameter>` tool-call tags rendered literally in TUI above assistant message 💬1
- …and 14 more

#### 🔒 Closed Issues
- [#37399](https://github.com/anomalyco/opencode/issues/37399) xAI Grok 4.5 generating useless bash true tool calls
- [#45602](https://github.com/anomalyco/opencode/issues/45602) Cobros dobles
- [#43312](https://github.com/anomalyco/opencode/issues/43312) v2: Responses reasoning can abort with "reasoning start before end"
- [#45723](https://github.com/anomalyco/opencode/issues/45723) TUI renders garbled/corrupted on native Windows, reproducing across multiple terminals and PTY layers (not a terminal/font issue)
- [#45364](https://github.com/anomalyco/opencode/issues/45364) Subagent tool rejects self-referential session IDs
- [#45591](https://github.com/anomalyco/opencode/issues/45591) opencode langing
- [#45592](https://github.com/anomalyco/opencode/issues/45592) opencode2 forgets sessions after restart
- [#45596](https://github.com/anomalyco/opencode/issues/45596) Desktop: orange dot (server not connected) after 1.18.23 — bundled serve returns 401 Basic Auth
- …and 4 more

### Pi (`earendil-works/pi`)

**Stars:** 98,313 · **Open issues:** 138 · **Last push:** 1h ago

#### ✅ Merged PRs
- [#8731](https://github.com/earendil-works/pi/pull/8731) feat(tui): allow disable copy on fullscreen, ctrl + x copies selection
- [#8723](https://github.com/earendil-works/pi/pull/8723) fix(coding-agent): expose https-proxy-agent named export
- [#8355](https://github.com/earendil-works/pi/pull/8355) feat(extensions): ui prompt events

#### 🐛 New Issues
- [#8711](https://github.com/earendil-works/pi/issues/8711) TUI pegs 100% CPU and freezes while streaming OpenRouter thinking (GLM-5.3-flash); reasoning_details stored as one object per token `bug` `untriaged` 💬2
- [#8709](https://github.com/earendil-works/pi/issues/8709) [Qwen AI Token Plan] New AI model is available: qwen3.8-flash `untriaged` 💬2
- [#8728](https://github.com/earendil-works/pi/issues/8728) detectCompat: requiresReasoningContentOnAssistantMessages not auto-enabled for DeepSeek-compatible endpoints (api.b.ai / sensenova) → 400 on cross-provider replay `untriaged` 💬3
- [#8752](https://github.com/earendil-works/pi/issues/8752) bedrock-converse: usage.input not normalized across model families — false cache-miss notices, doubled input cost `untriaged` 💬2
- [#8722](https://github.com/earendil-works/pi/issues/8722) Security guard rm-outside-project false-positives on write/edit payloads (documentation content flagged as delete commands) `untriaged` 💬2
- [#8721](https://github.com/earendil-works/pi/issues/8721) Fleet inspector crashes when pi-subagents prompt audit holds non-string task `untriaged` 💬2
- [#8755](https://github.com/earendil-works/pi/issues/8755) Opaque startup crash (SyntaxError: TuiMainScreen) when the hoisted @earendil-works/pi-tui is older than the range declared by pi-coding-agent `untriaged` 💬1
- [#8753](https://github.com/earendil-works/pi/issues/8753) 0.84.3 regression: reasoning_details echo deterministically degenerates Venice GLM reasoning (newline runs amplify per turn; 0.84.2 clean) `untriaged` 💬1
- [#8751](https://github.com/earendil-works/pi/issues/8751) fix(tui): render markdown soft line breaks as spaces, not hard breaks `untriaged` 💬1
- [#8750](https://github.com/earendil-works/pi/issues/8750) openrouter/auto and openrouter/auto-beta model definitions use negative cost rates as a sentinel, producing negative displayed costs `untriaged` 💬1
- …and 21 more

#### 🔒 Closed Issues
- [#5329](https://github.com/earendil-works/pi/issues/5329) Expose when Pi is waiting on user input for host integrations
- [#7720](https://github.com/earendil-works/pi/issues/7720) Allow disabling select to copy in fullscreen TUI mode
- [#8610](https://github.com/earendil-works/pi/issues/8610) Regression in v0.84.3: 'Error: HttpsProxyAgent is not a constructor' when calling google-vertex with proxy
- [#8711](https://github.com/earendil-works/pi/issues/8711) TUI pegs 100% CPU and freezes while streaming OpenRouter thinking (GLM-5.3-flash); reasoning_details stored as one object per token
- [#8709](https://github.com/earendil-works/pi/issues/8709) [Qwen AI Token Plan] New AI model is available: qwen3.8-flash
- [#8728](https://github.com/earendil-works/pi/issues/8728) detectCompat: requiresReasoningContentOnAssistantMessages not auto-enabled for DeepSeek-compatible endpoints (api.b.ai / sensenova) → 400 on cross-provider replay
- [#7147](https://github.com/earendil-works/pi/issues/7147) Emit extension events around UI dialogs
- [#8752](https://github.com/earendil-works/pi/issues/8752) bedrock-converse: usage.input not normalized across model families — false cache-miss notices, doubled input cost
- …and 27 more

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,435 · **Open issues:** 1,276 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#10294](https://github.com/QwenLM/qwen-code/pull/10294) feat(sdk): Add standalone session APIs

#### 🐛 New Issues
- [#10272](https://github.com/QwenLM/qwen-code/issues/10272) E2E: external-context mem0 tests hang at 'Connecting to MCP servers' on macOS and ecs-qwen pool (pass on ubuntu-hosted) `priority/P1` `type/bug` `scope/testing` `scope/ci-cd` 💬5
- [#10242](https://github.com/QwenLM/qwen-code/issues/10242) E2E on main: GitHub-hosted runners intermittently unable to reach the OPENAI_BASE_URL endpoint (Aliyun Beijing) — relocate lanes or switch endpoint `priority/P2` `type/bug` `scope/ci-cd` 💬4
- [#10324](https://github.com/QwenLM/qwen-code/issues/10324) triage: silent-rerun notification should treat a bot-initiated close as a terminal action `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#10314](https://github.com/QwenLM/qwen-code/issues/10314) fix(ci): treat API-error triage responses as failed runs in qwen-triage.yml `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#10309](https://github.com/QwenLM/qwen-code/issues/10309) Feature: probe actual modality support at model setup (one-shot capability probe instead of static pattern guessing) `priority/P2` `type/feature-request` `category/core` `scope/model-switching` 💬3
- [#10322](https://github.com/QwenLM/qwen-code/issues/10322) triage: Stage 1-pre subsumption check breaks silently at the contents-API size ceiling `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#10332](https://github.com/QwenLM/qwen-code/issues/10332) Feature request: append to system prompt at launch (--append-system-prompt / QWEN_APPEND_SYSTEM_MD) — QWEN_SYSTEM_MD only replaces `priority/P3` `type/feature-request` `category/cli` `scope/cli` 💬2
- [#10323](https://github.com/QwenLM/qwen-code/issues/10323) triage: Stage 1-pre remaining-delta branch needs a disputed-premise exit `priority/P3` `status/blocked` `category/development` `scope/github-actions` 💬2
- [#10320](https://github.com/QwenLM/qwen-code/issues/10320) triage: harden Stage 1-pre close exit (idempotent comment, OPEN guard, head/issue re-read) `priority/P2` `status/blocked` `type/bug` `category/development` 💬2
- [#10321](https://github.com/QwenLM/qwen-code/issues/10321) triage: make Stage 1-pre closer tree total over closer shapes, with fixture tests `priority/P2` `category/development` `scope/ci-cd` `type/enhancement` 💬2
- …and 22 more

#### 🔒 Closed Issues
- [#10272](https://github.com/QwenLM/qwen-code/issues/10272) E2E: external-context mem0 tests hang at 'Connecting to MCP servers' on macOS and ecs-qwen pool (pass on ubuntu-hosted)
- [#9927](https://github.com/QwenLM/qwen-code/issues/9927) Artifact updatedAt stays stale; write_file intermediates linger as missing
- [#10242](https://github.com/QwenLM/qwen-code/issues/10242) E2E on main: GitHub-hosted runners intermittently unable to reach the OPENAI_BASE_URL endpoint (Aliyun Beijing) — relocate lanes or switch endpoint
- [#10211](https://github.com/QwenLM/qwen-code/issues/10211) Agent Team: initial teammate result may be lost before event bridge attachment
- [#10209](https://github.com/QwenLM/qwen-code/issues/10209) Agent Team: stale reclaim can delete a newer live team generation
- [#10069](https://github.com/QwenLM/qwen-code/issues/10069) Agent Team: a queued Agent View message disappears after switching teammate tabs
- [#10153](https://github.com/QwenLM/qwen-code/issues/10153) /review: carry the fix's premises, not just its claim — add an evidence-bounded Fix constraint field
- [#9905](https://github.com/QwenLM/qwen-code/issues/9905) review: warn when Criticals keep landing on the same subsystem across rounds (divergence sentinel)
- …and 7 more

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

**Stars:** 387,846 · **Open issues:** 5,712 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#131242](https://github.com/openclaw/openclaw/pull/131242) fix(agents): keep code mode off by default
- [#123535](https://github.com/openclaw/openclaw/pull/123535) fix(ui): avoid session catalog refresh storms
- [#131318](https://github.com/openclaw/openclaw/pull/131318) refactor(memory): simplify provenance and dreaming flows
- [#128223](https://github.com/openclaw/openclaw/pull/128223) fix(cli): resolve alias targets from the write snapshot
- [#131325](https://github.com/openclaw/openclaw/pull/131325) refactor(codex): simplify conversation thread and lease ownership
- [#131224](https://github.com/openclaw/openclaw/pull/131224) fix(crabbox): avoid resending the full checkout for changed gates
- [#131341](https://github.com/openclaw/openclaw/pull/131341) perf(sessions): reduce CPU work when listing session previews
- [#131315](https://github.com/openclaw/openclaw/pull/131315) fix(openshell): prevent workspace races and unblock remote commands
- [#131338](https://github.com/openclaw/openclaw/pull/131338) fix(test): release mock fixtures between non-isolated files
- [#131304](https://github.com/openclaw/openclaw/pull/131304) fix(imap): stop reporting strength before mail authentication
- …and 134 more

#### 🐛 New Issues
- [#130968](https://github.com/openclaw/openclaw/issues/130968) [Bug]: Update fresh doctor waits on the parent plugin lifecycle lease 💬6
- [#130954](https://github.com/openclaw/openclaw/issues/130954) [Bug]: post-core updater deadlocks its Doctor child on plugin lifecycle lease `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#130977](https://github.com/openclaw/openclaw/issues/130977) [Bug]: Linux plugins-list startup-memory gate flakes at current runner variance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#131299](https://github.com/openclaw/openclaw/issues/131299) [Bug]: Code Mode loses cancellation diagnostics when the tool catalog closes `bug` `maintainer` 💬3
- [#131150](https://github.com/openclaw/openclaw/issues/131150) Slack DMs silently dropped for all accounts after gateway restart: prepareSlackMessage returns null pre-gate; degraded installation identity (multi-account socket mode) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#131104](https://github.com/openclaw/openclaw/issues/131104) [Bug]: Agent model picker refresh stays empty although full discovery succeeds `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#130919](https://github.com/openclaw/openclaw/issues/130919) [Bug]: Source installer restarts an already refreshed Gateway service twice `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#131074](https://github.com/openclaw/openclaw/issues/131074) [Bug]: update finalize --no-restart fails when Gateway is intentionally stopped `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#130879](https://github.com/openclaw/openclaw/issues/130879) [Bug]: Browser role refs lose snapshot membership and ordering `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬3
- [#131058](https://github.com/openclaw/openclaw/issues/131058) [Bug]: Control UI JSON disclosures rewrite numbers and duplicate keys `bug` `maintainer` 💬3
- …and 146 more

#### 🔒 Closed Issues
- [#81061](https://github.com/openclaw/openclaw/issues/81061) Hook: before_route_inbound_message — pre-routing interception for channel bridging/proxying
- [#112248](https://github.com/openclaw/openclaw/issues/112248) @openclaw/codex plugin fails to register on gateway boot — all /codex slash commands silently no-op (TypeError: Cannot read properties of undefined (reading 'openSyncKeyedStore'))
- [#130968](https://github.com/openclaw/openclaw/issues/130968) [Bug]: Update fresh doctor waits on the parent plugin lifecycle lease
- [#118489](https://github.com/openclaw/openclaw/issues/118489) [Bug]: Failed-tool finalization is still skipped after prior tool presentation or stale lifecycle state
- [#130954](https://github.com/openclaw/openclaw/issues/130954) [Bug]: post-core updater deadlocks its Doctor child on plugin lifecycle lease
- [#128657](https://github.com/openclaw/openclaw/issues/128657) [Bug]: Control UI loading shimmers repaint every frame
- [#121756](https://github.com/openclaw/openclaw/issues/121756) [Bug]: Control UI cannot recover channel-originated active run after reload
- [#130977](https://github.com/openclaw/openclaw/issues/130977) [Bug]: Linux plugins-list startup-memory gate flakes at current runner variance
- …and 90 more

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 237,340 · **Open issues:** 36,622 · **Last push:** <1h ago

#### 🚀 New Releases
- [v2026.8.27](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.8.27) Hermes Agent v0.20.6 (v2026.8.27)

#### 🐛 New Issues
- [#96348](https://github.com/NousResearch/hermes-agent/issues/96348) [Bug]: Studio bridge history rebuild skips empty-content assistant messages, dropping tool results → per-turn repair forces 0% prompt-cache hits on new user turns `type/bug` `comp/agent` `P0` `sweeper:risk-session-state` 💬3
- [#96433](https://github.com/NousResearch/hermes-agent/issues/96433) Desktop boot fails: serve-path import of tui_gateway.server (6d4e851d80) rebinds sys.stdout, READY sentinel lands on stderr → 90s timeout kills healthy backend `type/bug` `comp/cli` `comp/tui` `P1` 💬3
- [#96570](https://github.com/NousResearch/hermes-agent/issues/96570) Group chat sessions: stored system prompt is null every turn — rebuilt from scratch, prefix cache always misses `type/bug` `comp/agent` `P0` `sweeper:risk-session-state` 💬3
- [#96704](https://github.com/NousResearch/hermes-agent/issues/96704) RFC: add evals/skills/, a paired-arm harness measuring whether agent-written skills actually help `type/feature` `innovation` `tool/memory` `tool/skills` 💬2
- [#96767](https://github.com/NousResearch/hermes-agent/issues/96767) feat(config): add --quiet / scripting-friendly output to config set `duplicate` `type/feature` `comp/cli` `area/config` 💬2
- [#96603](https://github.com/NousResearch/hermes-agent/issues/96603) [Bug]: "Summarizing Thread" has become extremely slow after recent updates `type/perf` `comp/agent` `P2` `needs-repro` 💬2
- [#96692](https://github.com/NousResearch/hermes-agent/issues/96692) [Spec]: Unified slash-command registry and execution contract across every Hermes surface `type/feature` `comp/cli` `comp/gateway` `comp/tui` 💬2
- [#96328](https://github.com/NousResearch/hermes-agent/issues/96328) [Bug]: macOS computer_use rejects current notarised CUA Driver and misses symlinked app path `type/bug` `comp/tools` `P2` `sweeper:risk-compatibility` 💬2
- [#96764](https://github.com/NousResearch/hermes-agent/issues/96764) fix(cli): no --quiet for `config set` — non-interactive writes fail with exit 2 and always print a confirmation line `type/feature` `comp/cli` `area/config` `P3` 💬1
- [#96712](https://github.com/NousResearch/hermes-agent/issues/96712) [Bug]: Isolated per-profile dashboard silently retargets chats to the machine's sticky active profile `type/security` `P2` `sweeper:risk-session-state` `sweeper:risk-security-boundary` 💬1
- …and 25 more

#### 🔒 Closed Issues
- [#69060](https://github.com/NousResearch/hermes-agent/issues/69060) Telegram inbound reply context injects truncated raw Markdown into the user message
- [#96767](https://github.com/NousResearch/hermes-agent/issues/96767) feat(config): add --quiet / scripting-friendly output to config set
- [#96328](https://github.com/NousResearch/hermes-agent/issues/96328) [Bug]: macOS computer_use rejects current notarised CUA Driver and misses symlinked app path
- [#72969](https://github.com/NousResearch/hermes-agent/issues/72969) Windows: computer-use status uses cua-driver 0.12.6 but doctor/tool session runs 0.8.3

### IronClaw (`nearai/ironclaw`)

**Stars:** 12,603 · **Open issues:** 1,472 · **Last push:** <1h ago

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

**Stars:** 34,566 · **Open issues:** 914 · **Last push:** 10h ago

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
- …and 2 more

#### 🐛 New Issues
- [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) [Feature]: Prompt cache hit rate observability and optimization — 81% vs 96% (OpenCode), cost impact documented `good first issue` 💬2
- [#7364](https://github.com/agentscope-ai/QwenPaw/issues/7364) [Bug]: Zero-downtime reload reuses a closed memory_manager and skips start(), permanently breaking memory_search 💬1
- [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) [Bug]: 同步调用阻塞事件循环且 timeout 失效 / Synchronous calls freeze the event loop and the timeout never fires `bug` 💬1
- [#7362](https://github.com/agentscope-ai/QwenPaw/issues/7362) [Bug]: 文件保护未生效 `bug` 💬1
- [#7360](https://github.com/agentscope-ai/QwenPaw/issues/7360) [Question]: QwenPaw Desktop 启动耗时过长（约 4 分钟） The startup time of QwenPaw Desktop is excessively long (approximately 4 minutes) `question` 💬1
- [#7355](https://github.com/agentscope-ai/QwenPaw/issues/7355) [Feature]: 对话框当前在安卓的chrome等各种浏览器下输入内容时无法换行，希望可以换行 `enhancement` `Close-and-review-later` 💬1
- [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) Desktop App: Add setting to disable auto-scroll during streaming generation (scroll locking) `enhancement` 💬1
- [#7333](https://github.com/agentscope-ai/QwenPaw/issues/7333) [Release Duty] QwenPaw v2.2.0-beta.1 (Beta) — Installation Verification `release-duty` `pre-release`

#### 🔒 Closed Issues
- [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) [Bug]: 定时任务执行成功后，收件箱没收到某些执行成功的推送消息
- [#7297](https://github.com/agentscope-ai/QwenPaw/issues/7297) [Question]: qq对话中让qwenpaw重启会丢失最后聊天的记忆
- [#7355](https://github.com/agentscope-ai/QwenPaw/issues/7355) [Feature]: 对话框当前在安卓的chrome等各种浏览器下输入内容时无法换行，希望可以换行

### ZeroClaw (`zeroclaw-labs/zeroclaw`)

**Stars:** 32,667 · **Open issues:** 811 · **Last push:** 14h ago

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

**Stars:** 90,249 · **Open issues:** 7,138 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#54015](https://github.com/vllm-project/vllm/pull/54015) [Kimi-K3] Merge MLA gate into QKV-A projection
- [#52743](https://github.com/vllm-project/vllm/pull/52743) fix(build): correct preprocessor guard for GDN decode to fix Ampere c…
- [#53508](https://github.com/vllm-project/vllm/pull/53508) [Bugfix][MRV2] Isolate sleep-mode KV allocations
- [#54023](https://github.com/vllm-project/vllm/pull/54023) [Bugfix] Revert renderer warmup overlap to avoid fork deadlock
- [#53756](https://github.com/vllm-project/vllm/pull/53756) [Rust Frontend][gRPC] Enforce LoRA path validation across transports
- [#54005](https://github.com/vllm-project/vllm/pull/54005) [Bugfix][Model] Fix K3 DSpark config for 96-head drafts
- [#50572](https://github.com/vllm-project/vllm/pull/50572) [kernel] Integrate FlashInfer BF16 CuTeDSL Low Latency GEMM
- [#53785](https://github.com/vllm-project/vllm/pull/53785) [Attention] Enable dense and masked MHA for GLM-5
- [#53797](https://github.com/vllm-project/vllm/pull/53797) Add support for loading dflash2 model in speculators format
- [#54020](https://github.com/vllm-project/vllm/pull/54020) Upgrade tpu-inference to v0.28.0
- …and 34 more

#### 🐛 New Issues
- [#53982](https://github.com/vllm-project/vllm/issues/53982) [Bug]: _compute_slot_mapping_kernel reads block_table out of bounds for cache groups whose block table is narrower than the sequence `rocm` 💬5
- [#54046](https://github.com/vllm-project/vllm/issues/54046) [Bug]: [dspark] Adaptive verification profiles a batch shape the scheduler cannot produce `bug` `scheduler` 💬5
- [#54027](https://github.com/vllm-project/vllm/issues/54027) [Bug]: DFlash2 + YaRN identical 1.04M prompt gets zero prefix-cache reuse while target-only reuses ~1.039M tokens 💬4
- [#54087](https://github.com/vllm-project/vllm/issues/54087) [Bug]: torch profiler hangs on ROCm after rocprofiler-sdk 1.3.2 bump `bug` `rocm` 💬4
- [#53975](https://github.com/vllm-project/vllm/issues/53975) [Bug]: legacy guided_json is silently ignored - request returns 200 with unconstrained free-form text 💬3
- [#54017](https://github.com/vllm-project/vllm/issues/54017) [Bug]: Unsupported `reasoning_effort` value causes 500 error when chat template rejects it `bug` `kimi` `k3` 💬3
- [#54059](https://github.com/vllm-project/vllm/issues/54059) [Model]: GLM-5.3-Flash (glm5_next): no sparse-MLA attention path on Ada (sm_89, RTX 4090) `glm` 💬3
- [#53973](https://github.com/vllm-project/vllm/issues/53973) [Bug]: PyAV video backend deadlocks under serving concurrency — unbounded SLICE threading in decode_frames `bug` 💬2
- [#54114](https://github.com/vllm-project/vllm/issues/54114) [Bug]: Evaluating GLM-5.1-FP8 for reasoning over large contexts produces unexpectedly poor level of accuracy. `bug` `rocm` `glm` 💬2
- [#54002](https://github.com/vllm-project/vllm/issues/54002) [Bug]: crashed engine leaks /dev/shm/vllm_offload_*.mmap, making every in-place container restart fail at SharedOffloadRegion init 💬2
- …and 26 more

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

**Stars:** 32,584 · **Open issues:** 5,019 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#36502](https://github.com/sgl-project/sglang/pull/36502) [diffusion] fuse Helios paired transposed RoPE
- [#35451](https://github.com/sgl-project/sglang/pull/35451) [Feature] Support PP in full prefill CUDA graphs
- [#36755](https://github.com/sgl-project/sglang/pull/36755) Fix DFLASH aux hidden-state capture on mHC models
- [#36529](https://github.com/sgl-project/sglang/pull/36529) [Fix][XPU/ROCm/NPU] Defer sgl_kernel.quantization import in expert_pack
- [#36747](https://github.com/sgl-project/sglang/pull/36747) Revert "[NPU] [bugfix] Fix import of ggml_moe_a8_vec and Fix NPU MLA HiCache backup accessing missing data_ptrs"
- [#36640](https://github.com/sgl-project/sglang/pull/36640) [NPU] [bugfix] Fix import of ggml_moe_a8_vec and Fix NPU MLA HiCache backup accessing missing data_ptrs
- [#36739](https://github.com/sgl-project/sglang/pull/36739) [misc] Fold the allocator free-group flag into `free_group`
- [#36740](https://github.com/sgl-project/sglang/pull/36740) cookbook: add a Speculative card to the GLM-5.3-Flash playground
- [#35374](https://github.com/sgl-project/sglang/pull/35374) [Kernel] Add H200 MoE configs for Qwen3.5 and Qwen3.6
- [#36736](https://github.com/sgl-project/sglang/pull/36736) [AMD][CI] Merge the four MI35x DeepSeek-V3.2 nightly jobs into two to save runtime
- …and 53 more

#### 🐛 New Issues
- [#36702](https://github.com/sgl-project/sglang/issues/36702) [Bug] Kimi-K3 + DCP: all TP ranks wedge in filter_dcp_local_kv_indices (nonzero → cudaStreamSynchronize) on long chunked prefill; 300s watchdog, memory free 💬2
- [#36701](https://github.com/sgl-project/sglang/issues/36701) [Bug] Qwen3.8-Flash-Next on sm_120 (RTX PRO 6000 Blackwell): QSA decode kernel gated to sm_100, plus contradictory SSM dtype checks 💬2
- [#36599](https://github.com/sgl-project/sglang/issues/36599) [Bug] deepseek_nextn hardcodes quant_config=None for modelopt_fp4 — breaks quantized NextN drafts (GLM-5.3-Flash NVFP4 speculative decoding) 💬2
- [#36596](https://github.com/sgl-project/sglang/issues/36596) [Bug] ModelOpt FP4: is_layer_excluded misses fused module names and model.-prefixed names — mixed-precision NVFP4 checkpoints crash at load (GLM-5.3-Flash) 💬2
- [#36616](https://github.com/sgl-project/sglang/issues/36616) [Bug] qwen3.8 flash next rocm bug `amd` 💬1
- [#36711](https://github.com/sgl-project/sglang/issues/36711) [Bug] GLM-5.3-Flash (glm5_next) crashes on startup with --moe-runner-backend flashinfer_trtllm: IndexError index 288 out of bounds in logical_to_all_physical 💬1
- [#36716](https://github.com/sgl-project/sglang/issues/36716) qwen38flashnext cookbook image: 4 bugs on single-device SM121 (GB10 Spark) — silent garbage decode (trtllm-gen), non-compacting _compact_kv, TMA-O varlen boot crash, fp8 tl.dot in sparse prefill 💬1
- [#36597](https://github.com/sgl-project/sglang/issues/36597) [Bug] NVFP4 MoE + EP>1: globally-loaded input scales not sliced to local experts in non-CuteDSL branch (_compute_gemm1_alphas shape mismatch) 💬1
- [#36669](https://github.com/sgl-project/sglang/issues/36669) [Bug] GLM-5.3-Flash thinking output degenerates into repeated '!' under multi-tool agentic prompts 💬1
- [#36653](https://github.com/sgl-project/sglang/issues/36653) [Bug] NEXTN/MTP speculative decoding fails to load MTP MoE weights under TP>1 for Glm5NextForConditionalGeneration (GLM-5.3-Flash) 💬1
- …and 11 more

#### 🔒 Closed Issues
- [#22072](https://github.com/sgl-project/sglang/issues/22072) [Bug] EP/DP decode server hangs at startup on MI325X with MoRI a2a backend
- [#29511](https://github.com/sgl-project/sglang/issues/29511) [Feature] Support for Domino speculative decoding in Sglang
- [#29416](https://github.com/sgl-project/sglang/issues/29416) [Bug] SGLANG_GRPC_PORT may exceed beyond 65535
- [#29397](https://github.com/sgl-project/sglang/issues/29397) Add Top-nσ logit truncation custom logit processor example
- [#27872](https://github.com/sgl-project/sglang/issues/27872) [Bug] Qwen3.5 text-only SFT model saved as `Qwen3_5ForCausalLM` cannot be served by SGLang
- [#36702](https://github.com/sgl-project/sglang/issues/36702) [Bug] Kimi-K3 + DCP: all TP ranks wedge in filter_dcp_local_kv_indices (nonzero → cudaStreamSynchronize) on long chunked prefill; 300s watchdog, memory free
- [#36701](https://github.com/sgl-project/sglang/issues/36701) [Bug] Qwen3.8-Flash-Next on sm_120 (RTX PRO 6000 Blackwell): QSA decode kernel gated to sm_100, plus contradictory SSM dtype checks
- [#29477](https://github.com/sgl-project/sglang/issues/29477) [Bug] CUDA exception / 8-rank collective abort in NCCL AllReduce_RING_LL (bf16) on Blackwell B300 with EAGLE On GLM-5.2
- …and 1 more

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 125,971 · **Open issues:** 2,248 · **Last push:** <1h ago

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
- …and 14 more

#### 🐛 New Issues
- [#27813](https://github.com/ggml-org/llama.cpp/issues/27813) server: slot restore gives no prefix reuse on hybrid/recurrent models (context checkpoints are not persisted) 💬5
- [#27831](https://github.com/ggml-org/llama.cpp/issues/27831) Misc. bug: [WEBUI]: Copy to clipboard fails to copy anything `bug-unconfirmed` 💬2
- [#27780](https://github.com/ggml-org/llama.cpp/issues/27780) qwen4exp graph builder aborts (ggml_abort) on SM121 under sustained load 💬3
- [#27819](https://github.com/ggml-org/llama.cpp/issues/27819) DFlash2 is not working with `--split-mode tensor` 💬1
- [#27829](https://github.com/ggml-org/llama.cpp/issues/27829) Eval bug: DFlash2: --split-mode tensor aborts with SPLIT_AXIS_UNKNOWN on ROCm (Qwen3.8-27B, 2x RX 7900 XTX) `bug-unconfirmed`
- [#27797](https://github.com/ggml-org/llama.cpp/issues/27797) qwen4exp (PR #27742): multi-segment prompts degrade to '//////' on gfx1151 — deterministic repro 💬1
- [#27814](https://github.com/ggml-org/llama.cpp/issues/27814) Misc. bug: VRAM usage increased in msvc build vs clang on windows (+2gb) `bug-unconfirmed` 💬1
- [#27783](https://github.com/ggml-org/llama.cpp/issues/27783) server / tokenizer: SIGSEGV (stack overflow) in `unicode_regex_split_stl` — the o200k / GPT4O pre-tokenizer regex recurses once per character, so a ~26,000-character unbroken run of one character class kills the process 💬1
- [#27784](https://github.com/ggml-org/llama.cpp/issues/27784) Metal: --embeddings with pooling still builds and computes the LM head, producing a multi-GiB discarded tensor and returning all-NaN embeddings on long inputs 💬1
- [#27840](https://github.com/ggml-org/llama.cpp/issues/27840) Eval bug: mmap and tensor-read-lazy lead to constant disk writing on Windows `bug-unconfirmed`
- …and 13 more

#### 🔒 Closed Issues
- [#24714](https://github.com/ggml-org/llama.cpp/issues/24714) Eval bug: forcing full prompt re-processing due to lack of cache data unsloth/Qwen3.5-2B-MTP-GGUF:Q4_K_XL
- [#24681](https://github.com/ggml-org/llama.cpp/issues/24681) Eval bug:
- [#25203](https://github.com/ggml-org/llama.cpp/issues/25203) Misc. bug: [SYCL] Q8_0 reorder degrades 42% prefill performance (not visible in the standard llama-bench)
- [#27813](https://github.com/ggml-org/llama.cpp/issues/27813) server: slot restore gives no prefix reuse on hybrid/recurrent models (context checkpoints are not persisted)
- [#24199](https://github.com/ggml-org/llama.cpp/issues/24199) Intel Arc A770 + llama.cpp Vulkan: 9B Model at 256K Context, 49 t/s — Practical Guide
- [#26921](https://github.com/ggml-org/llama.cpp/issues/26921) Eval bug: Vulkan (Mali-G925 / Immortalis MC12): Qwen3.5-0.8B multimodal prefill returns all-NaN logits, while the same build on CPU devices works
- [#24800](https://github.com/ggml-org/llama.cpp/issues/24800) Feature Request: Supports PP-OCRv6
- [#24767](https://github.com/ggml-org/llama.cpp/issues/24767) Misc. bug:
- …and 3 more

### Ollama (`ollama/ollama`)

**Stars:** 179,588 · **Open issues:** 3,810 · **Last push:** 1h ago

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
- …and 4 more

#### 🔒 Closed Issues
- [#18008](https://github.com/ollama/ollama/issues/18008) GUI lost dark-mode and is completely WHITE?
- [#18063](https://github.com/ollama/ollama/issues/18063) mlx: Ling-3.0 (BailingMoeV3) support - split PR plan following #17643 feedback
- [#18068](https://github.com/ollama/ollama/issues/18068) Ollama UI App does not observe Dark Mode
- [#18072](https://github.com/ollama/ollama/issues/18072) server: make the prompt cache size configurable — it is hard-coded at 8192 MiB
- [#18057](https://github.com/ollama/ollama/issues/18057) macOS app stays in light mode even when system appearance is Dark

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,426 · **Open issues:** 4,881 · **Last push:** <1h ago

#### ✅ Merged PRs
- [#38568](https://github.com/BerriAI/litellm/pull/38568) fix(guardrails): add fail-open mode to CrowdStrike AIDR guardrail
- [#38582](https://github.com/BerriAI/litellm/pull/38582) fix(langfuse): warn and drop invalid LANGFUSE_TRACING_ENVIRONMENT instead of failing requests
- [#38572](https://github.com/BerriAI/litellm/pull/38572) feat(proxy): opt-in enforce_fallback_model_access authorizes router fallbacks against the calling key
- [#38586](https://github.com/BerriAI/litellm/pull/38586) fix(router): copy instead of mutating caller metadata when scrubbing fallback stamp keys
- [#38595](https://github.com/BerriAI/litellm/pull/38595) feat(ui): dry-run an auto-router config against the backend before saving it
- [#38592](https://github.com/BerriAI/litellm/pull/38592) fix(anthropic): carry the effort tier only where the target declares reasoning_effort
- [#38476](https://github.com/BerriAI/litellm/pull/38476) fix(logging): stop stream-based log collectors classifying INFO logs as errors
- [#38483](https://github.com/BerriAI/litellm/pull/38483) fix(presidio): chunk oversized text before /analyze so large content blocks do not fail
- [#38570](https://github.com/BerriAI/litellm/pull/38570) fix(router): reject complexity-router settings written outside complexity_router_config
- [#38596](https://github.com/BerriAI/litellm/pull/38596) fix(ui): link Virtual Keys hint through the migrated /ui route
- …and 70 more

#### 🐛 New Issues
- [#38511](https://github.com/BerriAI/litellm/issues/38511) [Bug]: Responses streaming error handler crashes with AttributeError on the completion-bridge iterator, masking the original error `llm translation` 💬3
- [#38515](https://github.com/BerriAI/litellm/issues/38515) [Bug]: Zero-cost models are blocked once a user's personal `max_budget` is exhausted `bug` `proxy` `llm translation` 💬2
- [#38529](https://github.com/BerriAI/litellm/issues/38529) /v1/messages drops output_config.effort for Claude models served by openrouter or azure_ai `proxy` `llm translation` 💬1
- [#38556](https://github.com/BerriAI/litellm/issues/38556) [Bug]: `bug` `proxy` `llm translation` 💬1
- [#38537](https://github.com/BerriAI/litellm/issues/38537) [Bug]: Vertex Gemini 3.7 Flash rejects chat history ending in a text-only assistant message `proxy` `llm translation` 💬1
- [#38474](https://github.com/BerriAI/litellm/issues/38474) [Bug]: DashScope MaaS endpoints use different base URLs for Chat Completions vs Responses API — PR #30286 fix incomplete for workspace-specific URLs `proxy` `llm translation` 💬1
- [#38459](https://github.com/BerriAI/litellm/issues/38459) [Bug]: token_counter raises on OpenAI `input_audio` content blocks — context-window & prompt-caching pre-call checks silently skip, /utils/token_counter 500s `llm translation` 💬1
- [#38579](https://github.com/BerriAI/litellm/issues/38579) [Bug]: Bedrock bearer-token-only deployments fail /v1/chat/completions and /v1/responses with 'NoneType' object has no attribute 'access_key' since #37241 `bug` `proxy` `llm translation`
- [#38578](https://github.com/BerriAI/litellm/issues/38578) [Bug]: /v1/messages prices Together deployments by their alias, so a size marker in the alias bills the size bucket `bug` `proxy`
- [#38571](https://github.com/BerriAI/litellm/issues/38571) [Bug]: Bedrock Realtime hides provider throttles as normal WebSocket closes and lacks disconnect cleanup `proxy` `llm translation`
- …and 16 more

#### 🔒 Closed Issues
- [#19779](https://github.com/BerriAI/litellm/issues/19779) [Feature]: Generic guardrail - fail-open mode
- [#26501](https://github.com/BerriAI/litellm/issues/26501) [Bug]: reasoning with recent vllm backends does not work
- [#32484](https://github.com/BerriAI/litellm/issues/32484) [Bug]: Unexpected log messages about unresolved cost information with Docker image 1.90.0
- [#31977](https://github.com/BerriAI/litellm/issues/31977) [Bug]: MCP JWT signer overwrites OAuth Authorization header during tools/call
- [#28105](https://github.com/BerriAI/litellm/issues/28105) Bedrock pass-through S3 logging fails for Application Inference Profile ARNs
- [#21371](https://github.com/BerriAI/litellm/issues/21371) [Bug]: /v1/models returns outdated 'created' timestamp causing integration issues with Android Studio and Xcode
- [#29190](https://github.com/BerriAI/litellm/issues/29190) [Bug]: Claude Code 3P tab in Claude Desktop fails proxy auth — likely Authorization header (Anthropic OAuth token) takes precedence over user's x-api-key LiteLLM virtual key
- [#22965](https://github.com/BerriAI/litellm/issues/22965) [Bug]: VertexAI - unable to use 3rd party model - Qwen 3.5 with dedicated endpoint
- …and 9 more

### Unsloth (`unslothai/unsloth`)

**Stars:** 74,994 · **Open issues:** 1,418 · **Last push:** 1h ago

#### 🚀 New Releases
- [v0.1.804-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.804-beta) Qwen3.8-Flash-Next + GLM-5.3-Flash

#### ✅ Merged PRs
- [#9878](https://github.com/unslothai/unsloth/pull/9878) fix(studio): stop offering a transformers upgrade where it cannot load anything
- [#9626](https://github.com/unslothai/unsloth/pull/9626) Fix datasets PyArrow registration after failed warm import
- [#9539](https://github.com/unslothai/unsloth/pull/9539) Fix Studio hydrating synced GGUF files before selection
- [#9868](https://github.com/unslothai/unsloth/pull/9868) Bump install.sh / install.ps1 pins to unsloth>=2026.8.22
- [#9865](https://github.com/unslothai/unsloth/pull/9865) Studio: stop the per-chunk autosave writing back messages the server owns
- [#9862](https://github.com/unslothai/unsloth/pull/9862) Put the smart offload planner back behind its flag
- [#9841](https://github.com/unslothai/unsloth/pull/9841) Keep the context length a load was given instead of resetting it to Auto
- [#9860](https://github.com/unslothai/unsloth/pull/9860) Apply the kwarg-spacing hook to the no-progress tool results test
- [#9822](https://github.com/unslothai/unsloth/pull/9822) Studio: warn instead of refusing to load a model bigger than VRAM plus RAM
- [#9768](https://github.com/unslothai/unsloth/pull/9768) Studio: stop a small context window ending a tool-using turn with nothing
- …and 34 more

#### 🐛 New Issues
- [#9861](https://github.com/unslothai/unsloth/issues/9861) Smart offload planner is slower than --fit on in 40 of 43 measured cells on a 6-core desktop 💬6
- [#9869](https://github.com/unslothai/unsloth/issues/9869) [Performance] Linked-folder RAG indexing is fully sequential and underutilizes CPU/GPU 💬1
- [#9874](https://github.com/unslothai/unsloth/issues/9874) [Bug] macOS arm64 prebuilt b10639 links /usr/lib/librdma.dylib — unloadable on macOS < 26 `feature request` `bug` 💬1
- [#9840](https://github.com/unslothai/unsloth/issues/9840) [Bug] Vision blocks parallel slots `feature request` `bug` 💬1
- [#9838](https://github.com/unslothai/unsloth/issues/9838) [Feature] Why are model configuration parameters not the API page? We gotta start a new chat everytime we want to edit model param/config? `feature request`
- [#9898](https://github.com/unslothai/unsloth/issues/9898) [Feature] Increase sizes. `feature request`
- [#9897](https://github.com/unslothai/unsloth/issues/9897) [Bug] Image/Video Generation on AMD does not work - Reposted `feature request` `bug`
- [#9895](https://github.com/unslothai/unsloth/issues/9895) [Bug] TTS custom endpoint failures `feature request` `bug`
- [#9889](https://github.com/unslothai/unsloth/issues/9889) [Bug] Issue with context limit on DGX Spark `feature request` `bug`
- [#9888](https://github.com/unslothai/unsloth/issues/9888) [Bug] The model couldn't compile a tool-calling grammar for this request. `feature request` `bug`
- …and 10 more

#### 🔒 Closed Issues
- [#9671](https://github.com/unslothai/unsloth/issues/9671) [Bug/Feature] Auto Compaction triggers at a fixed ~75% of configured Context Length regardless of available VRAM/RAM — no UI control to adjust threshold or disable
- [#9727](https://github.com/unslothai/unsloth/issues/9727) [Bug] Image/Video Generation on AMD does not work
- [#8925](https://github.com/unslothai/unsloth/issues/8925) [Bug] Phone cannot be idle issue
- [#9840](https://github.com/unslothai/unsloth/issues/9840) [Bug] Vision blocks parallel slots
- [#9245](https://github.com/unslothai/unsloth/issues/9245) Studio: dismissing a non-modal menu by pressing outside it drops focus to <body> instead of the trigger
- [#9680](https://github.com/unslothai/unsloth/issues/9680) [Feature Request] Allow generations to continue after client disconnect / add background generation mode
- [#9537](https://github.com/unslothai/unsloth/issues/9537) [Studio Bug] Opening the app reads and downloads all model files from synced drives
- [#9846](https://github.com/unslothai/unsloth/issues/9846) [Bug] Keyless API access doesn't seem to work on Unsloth Desktop
- …and 5 more

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*