# 📡 AI Ecosystem Digest — 2026-09-14

> Generated 2026-09-14 00:47 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,935 | 12 | 4 | 1 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 123,831 | 20 | 3 | 14 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,965 | 3 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,168 | 2 | 0 | 2 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 207,137 | 33 | 12 | 0 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,827 | 19 | 9 | 6 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,621 | 208 | 144 | 221 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 245,166 | 26 | 7 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,656 | 13 | 12 | 30 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,910 | 10 | 12 | 29 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 128,116 | 15 | 15 | 14 | 8 |
| [Ollama](https://github.com/ollama/ollama) | 180,838 | 9 | 0 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,648 | 6 | 14 | 0 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,118 | 8 | 4 | 27 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,086 | 0 | 1 | 3 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,782 | 5 | 4 | 5 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released version [v0.61.0-nightly.20260913.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260913.g9c1b0a610).
- **Qwen Code** released versions [v0.23.3-nightly.20260913.faa395885e](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260913.faa395885e) and [cua-driver-rs-v0.20.6](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.6).
- **OpenCode** experienced a surge in new issues, including [#48741](https://github.com/anomalyco/opencode/issues/48741) which reported critical errors on Muse Spark family with 21 comments.
- **Hermes Agent** raised concerns over a bug with [#109727](https://github.com/NousResearch/hermes-agent/issues/109727), detailing a second process unlinking critical files with 8 comments.
- **OpenClaw** faced multiple update failures with key new issues like [#146958](https://github.com/openclaw/openclaw/issues/146958), gathering 6 comments on a core switch-related service stoppage.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,935 · **Open issues:** 12,456 · **Last push:** 21h ago

On September 14, 2026, there were no new releases for Claude Code. A notable merge was PR #93932, which updated the telemetry's types path to be relative like other manifest paths. The day saw multiple new issues related to VPN configuration safeguards, including bug reports about blockers for legitimate VPN multiplexer setups and local routing during development sessions, with significant feedback indicating a false positive on custom configurations. Among these, issue #94080 stands out as it details a safeguard that prevents the installation and setup of custom VPN multiplexers, reflecting ongoing challenges with security features in the platform.

#### ✅ Merged PRs
- [#93932](https://github.com/anthropics/claude-code/pull/93932) mods: telemetry's types path is ./-relative like the other manifest paths

#### 🐛 New Issues
- [#94085](https://github.com/anthropics/claude-code/issues/94085) [Bug][cyber] Safeguard blocks legitimate VPN multiplexer account configuration (req_011CeYEMWpiMf3kwuYXqwMcf) `bug` `duplicate` `platform:linux` `area:model` 💬1
- [#94084](https://github.com/anthropics/claude-code/issues/94084) [Bug][cyber] Safeguard blocks configuring local VPN proxy routing during development session (req_011CeYEH7tiN8ut5PDctiPdx) 💬1
- [#94083](https://github.com/anthropics/claude-code/issues/94083) [Bug][cyber] Safeguard triggered during custom VPN multiplexer configuration (req_011CeYEEp18jPKx9tYNToVjv) 💬1
- [#94081](https://github.com/anthropics/claude-code/issues/94081) [Bug][cyber] False positive on custom VPN multiplexer setup and local DNS configuration (req_011CeYECFcfVonxTSUnwMzUR) `bug` `platform:linux` `area:model` `area:security` 💬1
- [#94080](https://github.com/anthropics/claude-code/issues/94080) [Bug][cyber] Safeguard blocks custom VPN multiplexer installation and setup (req_011CeYE7mqDW66vThucFveTU) 💬1
- [#94079](https://github.com/anthropics/claude-code/issues/94079) [Bug][cyber] Broad safeguards halt local secrets configuration on frustrated user exclamation (req_011CeYE4hwikS6S9K92Ne5RR) `bug` `duplicate` `platform:linux` `area:model` 💬1
- [#94076](https://github.com/anthropics/claude-code/issues/94076) [Bug][cyber] False positive on server hardware diagnostics and public domain research (req_011CeYDdXViyduvxiG6Zo2st) `bug` `duplicate` `platform:linux` `area:model` 💬1
- [#94088](https://github.com/anthropics/claude-code/issues/94088) [Bug][cyber] Safeguard false positive during host channel discovery for binary deployment (req_011CeYNARZLAGBUBDh5JVeVV) `bug` `duplicate` `platform:linux` `area:model`
- [#94089](https://github.com/anthropics/claude-code/issues/94089) [Bug][cyber] False positive during defensive Active Directory host inventory and port checks (req_011CeYeguKPBv6bi1gunf9CZ)
- [#94087](https://github.com/anthropics/claude-code/issues/94087) 상단 툴바의 코드(</>) 버튼에 텍스트 라벨이 사라지고 클릭해도 반응 없음 `invalid`
- [#94086](https://github.com/anthropics/claude-code/issues/94086) [Bug][cyber] Safeguard flags background shell task recovery and session continuation (req_011CeYHF3dH5UPPPFJPnmEyq) `bug` `duplicate` `platform:linux` `area:model`
- [#94082](https://github.com/anthropics/claude-code/issues/94082) Security: automatic 'file changed on disk' notification bypasses secret-file PreToolUse hook, leaking full credential file to transcript `bug` `has repro` `platform:macos` `area:security`

#### 🔒 Closed Issues
- [#85379](https://github.com/anthropics/claude-code/issues/85379) [Bug][cyber] ClAudit false-positive while: “fix the f••• adfs, why did it fill its disk overnight and ki…” (req_011CdoC7xD9sSmpuQz8Swi5s)
- [#85349](https://github.com/anthropics/claude-code/issues/85349) [Bug][cyber] ClAudit false-positive while: “Its back online and printing is back. I had to rewind for so…” (req_011CdoC5JePbWj4fPtnKMKbU)
- [#85351](https://github.com/anthropics/claude-code/issues/85351) [Bug][cyber] ClAudit false-positive while: “are you f••• kidding me?…” (req_011CdoC8qWMX2Nt9NRDWGU52)
- [#85347](https://github.com/anthropics/claude-code/issues/85347) [Bug][cyber] ClAudit false-positive while: “why is fixing my router an api block?…” (req_011CdMQmu41Ld1Nz93U6Gx3Y)

### OpenAI Codex (`openai/codex`)

**Stars:** 123,831 · **Open issues:** 16,990 · **Last push:** <1h ago

On September 14, 2026, there were no new releases for OpenAI Codex, but several significant pull requests were merged, including #45312, which extracts Windows sandbox configuration preparation into a helper, and #45276, which adds worktree session creation to the agents overview. Additionally, improvements were made to the Windows sandbox setup with #45169 focusing on installation storage, while #45182 validated token groups before SID copying, enhancing security. New issues emerged, with #45251 addressing the safety of designing tooling around ~/.codex rollout files, indicating potential concerns for developers working with these components. Overall, the day reflects routine maintenance activity with some noteworthy enhancements and ongoing discussions about safety in tooling design.

#### ✅ Merged PRs
- [#45312](https://github.com/openai/codex/pull/45312) Extract Windows sandbox configuration preparation into a helper
- [#45276](https://github.com/openai/codex/pull/45276) Add worktree session creation to the agents overview
- [#45271](https://github.com/openai/codex/pull/45271) Preserve terminal scrollback when growing the TUI viewport
- [#45262](https://github.com/openai/codex/pull/45262) Route pastes into the active history search query
- [#45255](https://github.com/openai/codex/pull/45255) Open new sessions directly from the command center
- [#45248](https://github.com/openai/codex/pull/45248) Use captured step settings for request metadata and tool hooks
- [#45224](https://github.com/openai/codex/pull/45224) Register Windows desktop uninstall ownership before sandbox setup
- [#45185](https://github.com/openai/codex/pull/45185) Bind direct tool-call metadata to invocation outputs
- [#45182](https://github.com/openai/codex/pull/45182) Validate Windows sandbox token groups before copying SIDs
- [#45180](https://github.com/openai/codex/pull/45180) Extract shared network configuration and environment policy helpers
- [#45178](https://github.com/openai/codex/pull/45178) Split Windows sandbox cleanup into preparation and completion phases
- [#45176](https://github.com/openai/codex/pull/45176) Wire the Windows MXC sandbox into command execution
- [#45169](https://github.com/openai/codex/pull/45169) Extract Windows sandbox setup and installation storage into the library
- [#45149](https://github.com/openai/codex/pull/45149) Use OpenSSL 3.6.4 for musl builds

#### 🐛 New Issues
- [#45251](https://github.com/openai/codex/issues/45251) Building tooling on ~/.codex rollout files — which behaviors are safe to design against? `documentation` `CLI` `session` 💬4
- [#45307](https://github.com/openai/codex/issues/45307) Windows Codex Desktop: Send button becomes disabled after the first successful turn `bug` `windows-os` `app` 💬3
- [#45302](https://github.com/openai/codex/issues/45302) Windows sandbox elevated blocked: invalid deny_read_acl_state.json `bug` `windows-os` `sandbox` `app` 💬3
- [#45268](https://github.com/openai/codex/issues/45268) Codex CLI 0.154.0 / gpt-5.6-sol medium: recurring garbled output reaches shell commands during test and review waits `bug` `model-behavior` `windows-os` `CLI` 💬3
- [#45308](https://github.com/openai/codex/issues/45308) Browser security check unavailable; browser and task-coordination tools later missing `bug` `tool-calls` `app` `safety-check` 💬2
- [#45305](https://github.com/openai/codex/issues/45305) Windows: composer Send button stays disabled; voice and message editing still create turns `bug` `windows-os` `app` 💬1
- [#45275](https://github.com/openai/codex/issues/45275) Codex Desktop becomes unresponsive while Tailscale reports no internet access; Tailscale recovers after Codex exits `bug` `windows-os` `app` `connectivity` 💬1
- [#45303](https://github.com/openai/codex/issues/45303) $200 Pro weekly allowance repeatedly exhausted in about two days with GPT-6 Astra Extra High `bug` `model-behavior` `windows-os` `rate-limits` 💬1
- [#45244](https://github.com/openai/codex/issues/45244) Is the turn-completion record in local session storage (rollout JSONL) written with any durability guarantee? `documentation` `app` `session` 💬1
- [#45293](https://github.com/openai/codex/issues/45293) PreToolUse hook silently skipped (fail-open) when the session working directory no longer exists — tool call runs anyway `bug` `app` `hooks` 💬1
- [#45313](https://github.com/openai/codex/issues/45313) Fast mode states different speeds `bug` `app`
- [#45311](https://github.com/openai/codex/issues/45311) Codex Desktop: newly composed message disappears after submission `bug` `app` `app-server`
- [#45310](https://github.com/openai/codex/issues/45310) Bedrock GPT-6 Astra: every request >~180s killed with server_error (undocumented wall-clock cap); Codex retries 5× `bug` `connectivity` `aws-bedrock`
- [#45309](https://github.com/openai/codex/issues/45309) codex exec / app-server: what is the documented way to observe turn completion and capture the final result at run time? `documentation` `exec` `CLI` `app-server`
- [#45306](https://github.com/openai/codex/issues/45306) Codex incorrectly reports an MCP workflow as impossible without checking composable tools `bug` `model-behavior` `mcp` `app`
- [#45304](https://github.com/openai/codex/issues/45304) [Windows][Codex app] Input field partially covers Copy button in expanded sub-agent view `bug` `windows-os` `app` `subagent`
- [#45301](https://github.com/openai/codex/issues/45301) Usage dashboard potentially buckets using UTC instead of local time? `bug` `codex-web` `rate-limits`
- [#45300](https://github.com/openai/codex/issues/45300) [App][Linux] Quick-access hotkey triggers SIGTRAP; explicit null binding prevents shortcut crashes `bug` `app`
- [#45299](https://github.com/openai/codex/issues/45299) [macOS][Pets] Option+Space opens Pet, but its shortcut is missing from Keyboard Shortcuts settings `bug` `app` `pets`
- [#45298](https://github.com/openai/codex/issues/45298) ChatGPT in Browser will not scroll to the botton in almost every chat for over 1-2 years (always been) `bug`

#### 🔒 Closed Issues
- [#44739](https://github.com/openai/codex/issues/44739) [Windows][Codex Desktop 26.908.3777.0] Pet/avatarOverlay crashes with "r is not a function"
- [#45075](https://github.com/openai/codex/issues/45075) [Windows][26.908.40834] Desktop reloads during active task; running turn is interrupted and becomes retry ▶ button
- [#45244](https://github.com/openai/codex/issues/45244) Is the turn-completion record in local session storage (rollout JSONL) written with any durability guarantee?

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,965 · **Open issues:** 835 · **Last push:** <1h ago

On September 14, 2026, Gemini CLI released version v0.61.0-nightly.20260913.g9c1b0a610, marking a new milestone in its development. Notably, there were no merged pull requests in the last 24 hours, indicating a day focused on the nightly release rather than feature additions. However, three new issues were reported, including a critical bug (#29308) involving an unguarded JSON.parse that affects the sendStream functionality in session.ts, which has already sparked two discussions. Additionally, issues concerning the CLI's glob fallback parsing (#29318) and silent bypassing of user confirmations during client-initiated tool calls (#29305) have also drawn attention, highlighting areas needing immediate focus and resolution.

#### 🚀 New Releases
- [v0.61.0-nightly.20260913.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260913.g9c1b0a610) Release v0.61.0-nightly.20260913.g9c1b0a610

#### 🐛 New Issues
- [#29308](https://github.com/google-gemini/gemini-cli/issues/29308) bug(sdk): unguarded JSON.parse on tool-call args kills sendStream (session.ts) `priority/p2` `area/non-interactive` `status/bot-triaged` `kind/bug` 💬2
- [#29318](https://github.com/google-gemini/gemini-cli/issues/29318) bug(cli): @ glob fallback parses LLM text and takes only first match `priority/p2` `area/core` `status/bot-triaged` `kind/bug` 💬1
- [#29305](https://github.com/google-gemini/gemini-cli/issues/29305) bug(core): client-initiated tool calls silently bypass ASK_USER confirmation (scheduler/policy.ts) `priority/p2` `area/security` `kind/bug` `status/manual-triage` 💬1

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,168 · **Open issues:** 2,367 · **Last push:** 22h ago

On September 14, 2026, GitHub Copilot CLI did not release any new versions but saw significant dependency updates with merged pull requests #4827 and #4828, which bumped the versions of actions/stale from 9.1.0 to 11.0.0 and actions/github-script from 7.1.0 to 9.0.0, respectively. Among recently reported issues, #4833 highlights a critical bug where the voice mode crashes the CLI due to an ONNX Runtime assertion failure specifically on Linux systems. Additionally, issue #4832 raises concerns about the workspace configuration, stating that the .mcp.json file fails to load in CLI version 1.0.83, leading to an empty workspace group when running 'mcp list'.

#### ✅ Merged PRs
- [#4827](https://github.com/github/copilot-cli/pull/4827) build(deps): bump actions/stale from 9.1.0 to 11.0.0
- [#4828](https://github.com/github/copilot-cli/pull/4828) build(deps): bump actions/github-script from 7.1.0 to 9.0.0

#### 🐛 New Issues
- [#4833](https://github.com/github/copilot-cli/issues/4833) [Bug] Voice mode crashes CLI with ONNX Runtime assertion in Nemotron ASR on Linux `triage`
- [#4832](https://github.com/github/copilot-cli/issues/4832) Workspace .mcp.json is never loaded in CLI 1.0.83 — 'mcp list' shows no Workspace group `triage`

### OpenCode (`anomalyco/opencode`)

**Stars:** 207,137 · **Open issues:** 5,825 · **Last push:** <1h ago

On September 14, 2026, there were no new releases or merged PRs for OpenCode, indicating a day of routine maintenance. However, notable new issues arose, particularly issue #48741, which reports critical errors on the Muse Spark family when models receive images or perform tool calls. Additionally, users reported a TypeError in version 1.18.30 causing every prompt to fail, a regression from version 1.18.20, and another issue (#48835) highlighted that the new layout does not support multiple worktrees after the removal of the old layout. Other concerns include a desktop bug marking running turns as interrupted (#48850) and issues with non-git projects affecting session visibility in the TUI (#48762).

#### 🐛 New Issues
- [#48741](https://github.com/anomalyco/opencode/issues/48741) Opencode Zen critical errors on Muse Spark family when model recieves a image/does a tool call `2.0` 💬21
- [#48803](https://github.com/anomalyco/opencode/issues/48803) v1.18.30: every prompt fails with TypeError (undefined layer node in Effect layer assembly during SystemPrompt.environment) — works on v1.18.20 💬3
- [#48835](https://github.com/anomalyco/opencode/issues/48835) The old layout has been removed, but the new layout does not support multiple worktrees. 旧布局被强制移除，但新布局又不支持多工作树。 💬2
- [#48762](https://github.com/anomalyco/opencode/issues/48762) [Windows] Non-git projects get an absolute session.path, hiding those sessions from the TUI session list `2.0` 💬4
- [#48859](https://github.com/anomalyco/opencode/issues/48859) Принудительно согнали на новуюю компоновку а mcp как включать, выключать 💬2
- [#48850](https://github.com/anomalyco/opencode/issues/48850) [BUG] Desktop randomly marks running turn as interrupted (AbortError: Aborted, no retry, no UI error) 💬3
- [#48883](https://github.com/anomalyco/opencode/issues/48883) tui: npm package TUI plugins render once and never update (dual solid-js runtime from node_modules resolution) 💬2
- [#48865](https://github.com/anomalyco/opencode/issues/48865) No response 💬2
- [#48882](https://github.com/anomalyco/opencode/issues/48882) [FEATURE]: Restore the legacy UI with the persistent left sidebar as an option 💬2
- [#48870](https://github.com/anomalyco/opencode/issues/48870) Sessions in a non-git parent directory are unattributable: `resolve` returns `global` before `project_directory` is consulted 💬2
- [#48861](https://github.com/anomalyco/opencode/issues/48861) springboot-agent_memoryStore fails with gRPC UNAVAILABLE error 💬2
- [#48869](https://github.com/anomalyco/opencode/issues/48869) OpenCode does not appear in the Applications menu 💬2
- [#48868](https://github.com/anomalyco/opencode/issues/48868) [Bug] 422 "messages.N.user.content.str: Input should be a valid string" when replaying a session containing a PDF tool result on OpenAI-compatible providers (opencode-go / zen gateway) 💬2
- [#48866](https://github.com/anomalyco/opencode/issues/48866) "You are now using new layout. The previous layout is no longer available." - despite not updating 💬1
- [#48841](https://github.com/anomalyco/opencode/issues/48841) Animate the new-session wordmark entrance when opening a new session 💬2
- [#48848](https://github.com/anomalyco/opencode/issues/48848) Snapshot git transactions race across processes and a stale index.lock permanently wedges snapshots 💬2
- [#48839](https://github.com/anomalyco/opencode/issues/48839) v2 Web - copy button in Markdown code fence blocks does not work 💬2
- [#48805](https://github.com/anomalyco/opencode/issues/48805) [Bug] muse-spark-1.3-contributor-free: reasoning encrypted_content was not issued to this caller when switching models in same session 💬2
- [#48880](https://github.com/anomalyco/opencode/issues/48880) Bedrock openai.gpt-6-astra: hard ~180s server-side cap kills every long request (server_error); retried 5× 💬1
- [#48876](https://github.com/anomalyco/opencode/issues/48876) Circular import between core/src/filesystem.ts and core/src/filesystem/search.ts leaves an undefined layer dependency 💬1
- [#48875](https://github.com/anomalyco/opencode/issues/48875) Error: Unexpected server error. Check server logs for details after sending prompt 💬1
- [#48874](https://github.com/anomalyco/opencode/issues/48874) Cronograma Trabajos Informe 3 `needs:compliance` 💬1
- [#48873](https://github.com/anomalyco/opencode/issues/48873) ASSCronograma Trabajos Informe 3 `needs:compliance` 💬1
- [#48864](https://github.com/anomalyco/opencode/issues/48864) Error from provider 💬1
- [#48853](https://github.com/anomalyco/opencode/issues/48853) v2 regression: OPENCODE_CONFIG environment variable is ignored 💬1
- [#48844](https://github.com/anomalyco/opencode/issues/48844) "Session too large to compact" — the summarization request itself has no size budget 💬1
- [#48833](https://github.com/anomalyco/opencode/issues/48833) [Desktop] New-session wordmark disappears instantly when submitting 💬1
- [#48761](https://github.com/anomalyco/opencode/issues/48761) Sessions die on transient socket closes because @ai-sdk/gateway is pinned 87 versions behind the retryability fix 💬1
- [#48872](https://github.com/anomalyco/opencode/issues/48872) v2: catalog.updated fires dozens of times per streamed reply
- [#48855](https://github.com/anomalyco/opencode/issues/48855) [FEATURE]: Surface MCP server->client custom notifications to the session (push wake-up)
- [#48851](https://github.com/anomalyco/opencode/issues/48851) tui: rendering desync when scrolling up and down
- [#48847](https://github.com/anomalyco/opencode/issues/48847) Fail fast when fixed request overhead exceeds the model's usable context window
- [#48840](https://github.com/anomalyco/opencode/issues/48840) v2 Web - skills/command selector min size doesn't work in small viewports `2.0`

#### 🔒 Closed Issues
- [#36605](https://github.com/anomalyco/opencode/issues/36605) [FEATURE]: support cross-location subagents in V2 monorepos
- [#48762](https://github.com/anomalyco/opencode/issues/48762) [Windows] Non-git projects get an absolute session.path, hiding those sessions from the TUI session list
- [#48859](https://github.com/anomalyco/opencode/issues/48859) Принудительно согнали на новуюю компоновку а mcp как включать, выключать
- [#48883](https://github.com/anomalyco/opencode/issues/48883) tui: npm package TUI plugins render once and never update (dual solid-js runtime from node_modules resolution)
- [#48865](https://github.com/anomalyco/opencode/issues/48865) No response
- [#48861](https://github.com/anomalyco/opencode/issues/48861) springboot-agent_memoryStore fails with gRPC UNAVAILABLE error
- [#48866](https://github.com/anomalyco/opencode/issues/48866) "You are now using new layout. The previous layout is no longer available." - despite not updating
- [#48841](https://github.com/anomalyco/opencode/issues/48841) Animate the new-session wordmark entrance when opening a new session
- [#48839](https://github.com/anomalyco/opencode/issues/48839) v2 Web - copy button in Markdown code fence blocks does not work
- [#48853](https://github.com/anomalyco/opencode/issues/48853) v2 regression: OPENCODE_CONFIG environment variable is ignored
- [#48833](https://github.com/anomalyco/opencode/issues/48833) [Desktop] New-session wordmark disappears instantly when submitting
- [#48761](https://github.com/anomalyco/opencode/issues/48761) Sessions die on transient socket closes because @ai-sdk/gateway is pinned 87 versions behind the retryability fix

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,827 · **Open issues:** 1,402 · **Last push:** <1h ago

On September 14, 2026, Qwen Code released version v0.23.3-nightly.20260913.faa395885e, which included a refactor to remove obsolete background response aggregation and a significant change that eliminated message prefix filtering. Additionally, the cua-driver-rs received an update to v0.20.6, enhancing its prebuilt binaries across macOS, Linux, and Windows. Among the merged pull requests, noteworthy fixes included improvements to the web shell's source download functionality and adjustments to the build heap cap in CI. A prominent new issue raised was #11777, reporting intermittent SIGTERM signals during the test job handoff, highlighting ongoing stability concerns.

#### 🚀 New Releases
- [v0.23.3-nightly.20260913.faa395885e](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260913.faa395885e) Release v0.23.3-nightly.20260913.faa395885e
- [cua-driver-rs-v0.20.6](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.6) cua-driver-rs v0.20.6

#### ✅ Merged PRs
- [#11641](https://github.com/QwenLM/qwen-code/pull/11641) fix(web-shell): move source download to the header
- [#11692](https://github.com/QwenLM/qwen-code/pull/11692) feat(core): make the web_search budget configurable and bound the extractor fallback
- [#11742](https://github.com/QwenLM/qwen-code/pull/11742) fix(cli): reap running monitors when the process dies on an uncaught exception
- [#11781](https://github.com/QwenLM/qwen-code/pull/11781) fix(ci): raise the build heap cap from 3072 to 4096 MB
- [#11775](https://github.com/QwenLM/qwen-code/pull/11775) docs: translate permission card and browser notification designs
- [#11779](https://github.com/QwenLM/qwen-code/pull/11779) fix(review): document the deadline's pause ceilings and improve capture-local errors

#### 🐛 New Issues
- [#11777](https://github.com/QwenLM/qwen-code/issues/11777) CI: required Test job intermittently SIGTERMs at the workspace→test:scripts handoff with all tests green `priority/P3` `type/bug` `category/development` `scope/testing` 💬4
- [#11756](https://github.com/QwenLM/qwen-code/issues/11756) Virtualized history crashes with React error #185 during background-agent workflows `status/need-information` `priority/P1` `type/bug` `category/ui` 💬4
- [#11783](https://github.com/QwenLM/qwen-code/issues/11783) TUI crashes with uncaught React error #185 (Maximum update depth exceeded) a few seconds after a background task is registered `priority/P1` `type/bug` `category/ui` `scope/rendering` 💬3
- [#11764](https://github.com/QwenLM/qwen-code/issues/11764) security: a Bash allow rule authorises a second command when the first ends with a backslash inside single quotes `priority/P1` `type/bug` `category/security` `scope/shell` 💬3
- [#11760](https://github.com/QwenLM/qwen-code/issues/11760) fix(core): usage-telemetry follow-ups to error-text redaction (test pin + non-command hook failure attribution) `priority/P2` `type/bug` `category/security` `category/telemetry` 💬3
- [#11762](https://github.com/QwenLM/qwen-code/issues/11762) /delete does not clean ~/.qwen/tmp/<hash>/logs.json and no setting exists to disable/limit it `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#11793](https://github.com/QwenLM/qwen-code/issues/11793) follow-up: deferred review findings from #11086 (workspace-runtime extensions) `priority/P3` `status/blocked` `category/cli` `scope/extensions` 💬2
- [#11780](https://github.com/QwenLM/qwen-code/issues/11780) CI: tsc --build OOMs at the 3072 MB heap cap — main alone peaks at 3.14 GB, build lanes coin-flip under runner load `priority/P2` `type/bug` `category/development` `scope/build-system` 💬2
- [#11791](https://github.com/QwenLM/qwen-code/issues/11791) Web shell: "Command explanation" panel language is hardcoded to English/Simplified Chinese — no way to get explanations in the conversation language `priority/P3` `category/ui` `scope/settings` `type/enhancement` 💬2
- [#11773](https://github.com/QwenLM/qwen-code/issues/11773) turn-status polling: track durability-boundary decision and #8682 review leftovers `priority/P3` `type/feature-request` `category/core` `scope/non-interactive` 💬2
- [#11772](https://github.com/QwenLM/qwen-code/issues/11772) Anthropic pipeline: assistant `thinking` blocks replayed without a `signature` are rejected by strict Anthropic-compatible servers (SGLang) `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#11767](https://github.com/QwenLM/qwen-code/issues/11767) Second runtime recycle is dropped while the first generation still drains, and nothing retries it `priority/P2` `status/blocked` `type/bug` `category/core` 💬2
- [#11755](https://github.com/QwenLM/qwen-code/issues/11755) Agent Board follow-ups from the #9402 review: --as hides claimable work, --owner is non-binding, help/decline-reason gaps `priority/P3` `status/blocked` `type/feature-request` `category/cli` 💬2
- [#11766](https://github.com/QwenLM/qwen-code/issues/11766) Web Shell: an attachment queue row wedges at "Submitting…" with disabled actions after one failed pending-prompts refresh `priority/P2` `type/bug` `category/ui` `status/ready-for-human` 💬2
- [#11749](https://github.com/QwenLM/qwen-code/issues/11749) Windows nightly: a session storage tail-growth test fails since the no-follow open fallback landed `status/in-review` `priority/P3` `type/bug` `category/core` 💬2
- [#11751](https://github.com/QwenLM/qwen-code/issues/11751) web-shell: per-daemon local-files grants cannot be revoked or enumerated once the page points at another daemon `priority/P3` `status/blocked` `type/feature-request` `category/security` 💬2
- [#11790](https://github.com/QwenLM/qwen-code/issues/11790) Main CI failed: Qwen Code CI on faa395885e5a `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11770](https://github.com/QwenLM/qwen-code/issues/11770) Deferred review findings from PR #11727: fix(core): let the producer's own budget decide shell output size
- [#11768](https://github.com/QwenLM/qwen-code/issues/11768) Deferred review findings from PR #11636: feat: track background result execution across daemon and web shell

#### 🔒 Closed Issues
- [#11718](https://github.com/QwenLM/qwen-code/issues/11718) Desktop AppImage: bundled Python's PYTHONHOME/PYTHONPATH leak into spawned stdio MCP servers, crashing external Python interpreters
- [#11590](https://github.com/QwenLM/qwen-code/issues/11590) bug: qwen code与非qwen的厂商模型可能有不兼容的地方，自动插入的metadata会导致发生"400 API 调用参数有误，请检查文档。"
- [#9037](https://github.com/QwenLM/qwen-code/issues/9037) bug(cli): /statusline dialog is clipped in short terminals
- [#11725](https://github.com/QwenLM/qwen-code/issues/11725) High memory usage detected: 7.00 GB. If you experience a crash, please file a bug report by running /b
- [#11687](https://github.com/QwenLM/qwen-code/issues/11687) web_search: make the side-request budget configurable and bound the extractor fallback
- [#11780](https://github.com/QwenLM/qwen-code/issues/11780) CI: tsc --build OOMs at the 3072 MB heap cap — main alone peaks at 3.14 GB, build lanes coin-flip under runner load
- [#9170](https://github.com/QwenLM/qwen-code/issues/9170) Dialog height-budget follow-ups from PR #9040 review (round 8)
- [#11729](https://github.com/QwenLM/qwen-code/issues/11729) Shell output between the generic spill gate and the tool's own budget loses its trailing exit status
- [#11749](https://github.com/QwenLM/qwen-code/issues/11749) Windows nightly: a session storage tail-growth test fails since the no-follow open fallback landed

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): run_eval.py always reports 0% recall — install the eval artifact as a real skill; fix Windows stream reading, trigger detection, and parallel workers
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#514](https://github.com/anthropics/skills/pull/514) Add document-typography skill: typographic quality control for generated documents
- [#1615](https://github.com/anthropics/skills/pull/1615) Add scnet-hpc skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 389,621 · **Open issues:** 7,155 · **Last push:** <1h ago

On September 14, 2026, there were no new version releases for OpenClaw; however, the project saw significant developments with 21 merged pull requests, addressing various improvements and bug fixes. Noteworthy enhancements included reducing CPU usage on streamed session events and maintaining responsiveness in the Gateway while loading session history. Additionally, issues around session archive delays and excessive work during large transcript histories were effectively resolved. The day also presented new challenges, particularly with a high-impact bug (#146958) related to update failures caused by core switches, which left the service non-functional for users.

#### ✅ Merged PRs
- [#147553](https://github.com/openclaw/openclaw/pull/147553) fix(update): distinguish unavailable identity and qualify saved advice
- [#147550](https://github.com/openclaw/openclaw/pull/147550) improve: reduce redundant live updates during command output
- [#146799](https://github.com/openclaw/openclaw/pull/146799) fix(sessions): preserve cross-agent replies after reload
- [#147464](https://github.com/openclaw/openclaw/pull/147464) fix(doctor): avoid excessive work on large transcript histories
- [#147363](https://github.com/openclaw/openclaw/pull/147363) improve: keep Gateway responsive while loading session history
- [#147405](https://github.com/openclaw/openclaw/pull/147405) improve(gateway): reduce repeated startup preparation
- [#147422](https://github.com/openclaw/openclaw/pull/147422) fix: avoid slow system-helper setup and premature timeouts
- [#147518](https://github.com/openclaw/openclaw/pull/147518) refactor(cli): reduce provider-summary work in agent listings
- [#147552](https://github.com/openclaw/openclaw/pull/147552) fix: prevent cloud-session archives from stalling and reappearing
- [#147538](https://github.com/openclaw/openclaw/pull/147538) improve: reduce CPU spent on streamed session events
- [#147539](https://github.com/openclaw/openclaw/pull/147539) fix(groq): resolve manifest model during external setup
- [#147567](https://github.com/openclaw/openclaw/pull/147567) fix(ui): make assignment-menu avatars easier to recognize
- [#147573](https://github.com/openclaw/openclaw/pull/147573) improve(routing): reduce work on cached Discord routes
- [#147570](https://github.com/openclaw/openclaw/pull/147570) fix: preserve selected filenames in generated music results
- [#147474](https://github.com/openclaw/openclaw/pull/147474) fix(ui): tighten spacing above the chat composer
- [#147536](https://github.com/openclaw/openclaw/pull/147536) fix(qa-channel): preserve final replies and clear unfinished previews
- [#147558](https://github.com/openclaw/openclaw/pull/147558) improve: avoid repeated work when listing scoped automations
- [#147554](https://github.com/openclaw/openclaw/pull/147554) improve(gateway): reuse SQLite workers during startup preflight
- [#147535](https://github.com/openclaw/openclaw/pull/147535) improve: reuse shared plugin discovery across workspaces
- [#147543](https://github.com/openclaw/openclaw/pull/147543) improve: reuse tool schema normalization across requests
- [#147499](https://github.com/openclaw/openclaw/pull/147499) fix: preserve automation management after subagent waits
- [#147491](https://github.com/openclaw/openclaw/pull/147491) improve: reduce session history worker startup costs
- [#147534](https://github.com/openclaw/openclaw/pull/147534) improve: batch profile preference updates
- [#147560](https://github.com/openclaw/openclaw/pull/147560) perf(docs): parse maturity targets only for fragment checks
- [#142959](https://github.com/openclaw/openclaw/pull/142959) fix(ui): hide stale git update prompts after refresh
- [#147533](https://github.com/openclaw/openclaw/pull/147533) fix(widgets): use the available presentation surface after restart
- [#147487](https://github.com/openclaw/openclaw/pull/147487) refactor: narrow channel contract test helper imports
- [#147448](https://github.com/openclaw/openclaw/pull/147448) improve(ui): keep images closer to prompt bubbles
- [#145076](https://github.com/openclaw/openclaw/pull/145076) fix(doctor): stop flagging every model of a provider that plans no catalog rows
- [#147541](https://github.com/openclaw/openclaw/pull/147541) fix(browser): preserve output directory names and validate ancestors
- [#147324](https://github.com/openclaw/openclaw/pull/147324) fix(update): retain FreeBSD native runtime during handoff
- [#144111](https://github.com/openclaw/openclaw/pull/144111) fix(cli): inherit migrate options placed before the subcommand
- [#147521](https://github.com/openclaw/openclaw/pull/147521) chore(i18n): complete Control UI locales for rebased 2026.9.5
- [#147545](https://github.com/openclaw/openclaw/pull/147545) fix(qa-lab): classify a path-like artifact kind by its final segment
- [#147551](https://github.com/openclaw/openclaw/pull/147551) fix(reef): stabilize delivery scan regression fixtures
- [#147471](https://github.com/openclaw/openclaw/pull/147471) fix(ui): stop retaining removed session progress widgets
- [#147510](https://github.com/openclaw/openclaw/pull/147510) fix: stop transport readiness quietly after cancellation
- [#145835](https://github.com/openclaw/openclaw/pull/145835) refactor(talk): compact realtime relay test matrices
- [#147531](https://github.com/openclaw/openclaw/pull/147531) fix(agents): retain the current task after replay cleanup
- [#147508](https://github.com/openclaw/openclaw/pull/147508) improve: reduce refresh work for unchanged remote branches
- [#147441](https://github.com/openclaw/openclaw/pull/147441) feat: show rolling session recaps in Activity
- [#147427](https://github.com/openclaw/openclaw/pull/147427) fix(ui): keep device pairing content inside the dialog
- [#147498](https://github.com/openclaw/openclaw/pull/147498) chore(ui): refresh control ui locales
- [#147492](https://github.com/openclaw/openclaw/pull/147492) fix: avoid bundled plugin discovery after selecting a message channel
- [#147537](https://github.com/openclaw/openclaw/pull/147537) feat(qa): compare live Code Mode tasks and interviews
- [#147532](https://github.com/openclaw/openclaw/pull/147532) improve: speed up history reads with long interior marker runs
- [#147529](https://github.com/openclaw/openclaw/pull/147529) perf(test): overlap isolated quota and key UI fixtures
- [#147522](https://github.com/openclaw/openclaw/pull/147522) improve(sqlite): speed up snapshot worker startup
- [#147479](https://github.com/openclaw/openclaw/pull/147479) refactor: simplify session-list compaction summaries
- [#145057](https://github.com/openclaw/openclaw/pull/145057) fix(agents): tell the model about restart-safe tool restriction in recovery prompt
- [#147480](https://github.com/openclaw/openclaw/pull/147480) fix: avoid repeated cleanup work when subagents finish
- [#147504](https://github.com/openclaw/openclaw/pull/147504) improve(memory): batch forgotten session admission
- [#147444](https://github.com/openclaw/openclaw/pull/147444) fix(codex): isolate hook imports and cancel disconnected waits
- [#147505](https://github.com/openclaw/openclaw/pull/147505) improve(reef): reduce repeated delivery diagnostic reads
- [#147472](https://github.com/openclaw/openclaw/pull/147472) fix: preserve pending chats during plugin hot reload
- [#147390](https://github.com/openclaw/openclaw/pull/147390) fix(gateway): continue on Gateway with pending offline results
- [#147359](https://github.com/openclaw/openclaw/pull/147359) improve(skills): skip unnecessary executable probes during preparation
- [#147291](https://github.com/openclaw/openclaw/pull/147291) feat(code-mode): infer results from the requested action
- [#143296](https://github.com/openclaw/openclaw/pull/143296) fix(ui): group chat position markers by assistant run
- [#147286](https://github.com/openclaw/openclaw/pull/147286) fix(update): retain finalization failure reasons in reports
- [#145481](https://github.com/openclaw/openclaw/pull/145481) fix(ui): queued message edits fail after reconnect
- [#147338](https://github.com/openclaw/openclaw/pull/147338) feat(ui): let critters play around the new-session composer
- [#147489](https://github.com/openclaw/openclaw/pull/147489) fix(test): wait for the model picker before partial refresh checks
- [#147446](https://github.com/openclaw/openclaw/pull/147446) fix(browser): prefer local control over connected nodes
- [#147323](https://github.com/openclaw/openclaw/pull/147323) fix: retain catalog generation scope during full assembly
- [#146716](https://github.com/openclaw/openclaw/pull/146716) fix(subagents): swarm collector that calls sessions_yield strands agents_wait forever
- [#147488](https://github.com/openclaw/openclaw/pull/147488) improve(zalouser): prepare unchanged Markdown faster
- [#145834](https://github.com/openclaw/openclaw/pull/145834) refactor(agents): compact message tool test matrices
- [#145833](https://github.com/openclaw/openclaw/pull/145833) refactor(ui): compact chat view test matrices
- [#145832](https://github.com/openclaw/openclaw/pull/145832) refactor(release): compact package acceptance test matrices
- [#123145](https://github.com/openclaw/openclaw/pull/123145) improve(qa): show safe Tool Search failure evidence
- [#147456](https://github.com/openclaw/openclaw/pull/147456) fix(cli): honor agent selection for image descriptions
- [#147484](https://github.com/openclaw/openclaw/pull/147484) fix(qa): ignore rejected Telegram lifecycle observations
- [#147486](https://github.com/openclaw/openclaw/pull/147486) fix: resume interrupted work when new messages arrive after restart
- [#147399](https://github.com/openclaw/openclaw/pull/147399) fix(ui): keep automation history on the selected task
- [#147476](https://github.com/openclaw/openclaw/pull/147476) fix(sqlite): explain read-only inspection failures during writes
- [#147481](https://github.com/openclaw/openclaw/pull/147481) refactor(memory): avoid copying complete exports for hashing
- [#147439](https://github.com/openclaw/openclaw/pull/147439) perf(cli): keep update snapshots independent of candidate config loading
- [#147475](https://github.com/openclaw/openclaw/pull/147475) refactor: reduce filesystem read code with fs-safe
- [#145343](https://github.com/openclaw/openclaw/pull/145343) fix: keep optional heartbeat finalization silent
- [#147467](https://github.com/openclaw/openclaw/pull/147467) perf(plugins): avoid state probes for artifact directories
- [#146695](https://github.com/openclaw/openclaw/pull/146695) refactor: keep provider setup choices in the existing flow owner
- [#147354](https://github.com/openclaw/openclaw/pull/147354) refactor(tests): share migration contexts and ACP fixtures
- [#147445](https://github.com/openclaw/openclaw/pull/147445) fix(ui): correct Turkish attachment removal label
- [#147470](https://github.com/openclaw/openclaw/pull/147470) fix: node sessions stall while preparing large workspaces
- [#147415](https://github.com/openclaw/openclaw/pull/147415) fix(update): identify FreeBSD handoff processes
- [#137374](https://github.com/openclaw/openclaw/pull/137374) fix(daemon): restart Windows gateways with redirected launcher output
- [#147469](https://github.com/openclaw/openclaw/pull/147469) refactor(ai): remove obsolete compatibility test bookkeeping
- [#147295](https://github.com/openclaw/openclaw/pull/147295) feat(ui): collapse task progress while reading history
- [#147434](https://github.com/openclaw/openclaw/pull/147434) fix(ui): replace mismatched Home and System busyness loaders
- [#144499](https://github.com/openclaw/openclaw/pull/144499) feat(doctor): report a runtime built from a different commit than HEAD
- [#147458](https://github.com/openclaw/openclaw/pull/147458) fix(chat): show subagent display names in web and macOS activity
- [#147396](https://github.com/openclaw/openclaw/pull/147396) refactor: finish Docker diagnostic command lookup cleanup
- [#147368](https://github.com/openclaw/openclaw/pull/147368) refactor: simplify skills CLI formatting
- [#147268](https://github.com/openclaw/openclaw/pull/147268) refactor: retire unused Channels refresh timeout
- [#147437](https://github.com/openclaw/openclaw/pull/147437) fix(daemon): verify Windows task handoff before reporting a finished restart
- [#147412](https://github.com/openclaw/openclaw/pull/147412) test(discord): reuse deferred avatar fixture
- [#145772](https://github.com/openclaw/openclaw/pull/145772) fix(chat): render Claude task-notification as system notice, not operator bubble
- [#147442](https://github.com/openclaw/openclaw/pull/147442) feat: use custom SVG artwork for session icons
- [#147460](https://github.com/openclaw/openclaw/pull/147460) fix(ui): hide deleted Beams immediately in the sidebar
- [#147454](https://github.com/openclaw/openclaw/pull/147454) fix(doctor): preserve MCP OAuth logins during read-only checks
- [#147153](https://github.com/openclaw/openclaw/pull/147153) refactor(acp): share option result construction
- [#147206](https://github.com/openclaw/openclaw/pull/147206) feat(subagents): allow private parent completion handoffs
- [#147443](https://github.com/openclaw/openclaw/pull/147443) fix: reduce Git overhead when refreshing session pull requests
- [#147465](https://github.com/openclaw/openclaw/pull/147465) chore(ui): refresh control ui locales
- [#147416](https://github.com/openclaw/openclaw/pull/147416) fix: stop repeated chat reads and unrelated pane redraws
- [#147413](https://github.com/openclaw/openclaw/pull/147413) fix(ui): clear duplicate prompts after successful session creation
- [#147148](https://github.com/openclaw/openclaw/pull/147148) refactor(auto-reply): share lazy silent-token regex caches
- [#147438](https://github.com/openclaw/openclaw/pull/147438) fix: reduce CPU use during streamed tool activity
- [#147431](https://github.com/openclaw/openclaw/pull/147431) fix(subagents): keep owned runs in activity counts
- [#147451](https://github.com/openclaw/openclaw/pull/147451) improve(memory): batch forgotten source removal
- [#147077](https://github.com/openclaw/openclaw/pull/147077) refactor(release): share model configuration commands
- [#147311](https://github.com/openclaw/openclaw/pull/147311) fix(logging): preserve appended records after concurrent truncation
- [#147123](https://github.com/openclaw/openclaw/pull/147123) refactor(ui): share pairing request flows
- [#147452](https://github.com/openclaw/openclaw/pull/147452) improve(team-reports): reduce status warning fetches
- [#147436](https://github.com/openclaw/openclaw/pull/147436) improve: measure total Gateway CPU in concurrency benchmarks
- [#147408](https://github.com/openclaw/openclaw/pull/147408) fix(codex): run Bun history reads through built worker
- [#147098](https://github.com/openclaw/openclaw/pull/147098) refactor(browser): share act dispatch and result handling
- [#147288](https://github.com/openclaw/openclaw/pull/147288) refactor: separate delivery queue operations from connection acquisition
- [#147249](https://github.com/openclaw/openclaw/pull/147249) fix(install): preserve empty PATH search entries
- [#145585](https://github.com/openclaw/openclaw/pull/145585) fix(auth): complete credential removal from legacy shared stores
- [#147315](https://github.com/openclaw/openclaw/pull/147315) improve(memory): reduce forget planning payloads
- [#147404](https://github.com/openclaw/openclaw/pull/147404) fix(update): name the recovery steps when the candidate Doctor refuses under the 2026.9.2 Git driver
- [#147425](https://github.com/openclaw/openclaw/pull/147425) fix(qa): preserve live provider provenance in release evidence
- [#147424](https://github.com/openclaw/openclaw/pull/147424) refactor(android): remove redundant reader initialization test
- [#147292](https://github.com/openclaw/openclaw/pull/147292) fix: keep Doctor writes working across module reloads
- [#147414](https://github.com/openclaw/openclaw/pull/147414) fix(diagnostics): report config read failures in export summaries
- [#147108](https://github.com/openclaw/openclaw/pull/147108) refactor(memory-wiki): share candidate signal deduplication
- [#147392](https://github.com/openclaw/openclaw/pull/147392) improve(ui): make empty-group visibility explicit and personal
- [#147091](https://github.com/openclaw/openclaw/pull/147091) refactor(slack): share lazy Agent View store opening
- [#147316](https://github.com/openclaw/openclaw/pull/147316) fix(logging): keep redaction consistent across module copies
- [#147418](https://github.com/openclaw/openclaw/pull/147418) improve: reduce Matrix table and spoiler formatting time
- [#147423](https://github.com/openclaw/openclaw/pull/147423) feat(agents): allow four parallel sessions per available CPU by default
- [#147428](https://github.com/openclaw/openclaw/pull/147428) chore(ui): refresh control ui locales
- [#147407](https://github.com/openclaw/openclaw/pull/147407) fix(qa): avoid false zero RSS after a process leader exits
- [#147332](https://github.com/openclaw/openclaw/pull/147332) test(ui): reuse deferred server preference fixtures
- [#147358](https://github.com/openclaw/openclaw/pull/147358) fix: keep new session workspace setup responsive during cleanup
- [#147302](https://github.com/openclaw/openclaw/pull/147302) docs: alphabetize donors and sponsors and add Red Hat logo
- [#144316](https://github.com/openclaw/openclaw/pull/144316) fix(plugins): retain update authority through doctor effects
- [#147084](https://github.com/openclaw/openclaw/pull/147084) refactor(qa): share Multipass mount retry lifecycle
- [#147366](https://github.com/openclaw/openclaw/pull/147366) fix(memory): emit one JSON result for command failures
- [#147411](https://github.com/openclaw/openclaw/pull/147411) improve(plugins): speed up cold metadata loading
- [#147394](https://github.com/openclaw/openclaw/pull/147394) fix(sessions): avoid duplicate work after waited child replies
- [#112623](https://github.com/openclaw/openclaw/pull/112623) fix(agents): retain outstanding child results in parent context
- [#147403](https://github.com/openclaw/openclaw/pull/147403) test: preserve native workflow loader selection
- [#147373](https://github.com/openclaw/openclaw/pull/147373) fix: reduce repeated work while polling session pull requests
- [#147382](https://github.com/openclaw/openclaw/pull/147382) test(qa): preserve task cancellation across process replacement
- [#147400](https://github.com/openclaw/openclaw/pull/147400) fix: prevent sidebar refresh storms during session activity
- [#147410](https://github.com/openclaw/openclaw/pull/147410) fix: prevent Git checkout certificate failures behind egress proxy
- [#147386](https://github.com/openclaw/openclaw/pull/147386) fix(qa): stop live threads after their process leader exits
- [#147076](https://github.com/openclaw/openclaw/pull/147076) refactor(release): share agent turn retry lifecycle
- [#147389](https://github.com/openclaw/openclaw/pull/147389) fix(ui): keep uploaded images aligned with their prompts
- [#147336](https://github.com/openclaw/openclaw/pull/147336) fix(fs): guard skill reads and bound worker bundle staging
- [#147398](https://github.com/openclaw/openclaw/pull/147398) fix(ci): Linux service ownership tests fail before inspection
- [#147393](https://github.com/openclaw/openclaw/pull/147393) fix(plugins): preserve manifest permissions when building plugins
- [#147395](https://github.com/openclaw/openclaw/pull/147395) fix(imessage): recover oldest messages missed during downtime
- [#147391](https://github.com/openclaw/openclaw/pull/147391) chore(ui): refresh control ui locales
- [#147328](https://github.com/openclaw/openclaw/pull/147328) fix(memory): avoid unavailable session-search guidance
- [#144387](https://github.com/openclaw/openclaw/pull/144387) fix(wear): settle remote chat outcomes and replace stale streamed text
- [#147069](https://github.com/openclaw/openclaw/pull/147069) refactor(qa): share cache miss report formatting
- [#146475](https://github.com/openclaw/openclaw/pull/146475) feat(dashboard): save shared fullscreen and split defaults
- [#147242](https://github.com/openclaw/openclaw/pull/147242) fix(gateway): preserve live owners through restart
- [#147384](https://github.com/openclaw/openclaw/pull/147384) chore(i18n): refresh native locales
- [#147062](https://github.com/openclaw/openclaw/pull/147062) refactor(qa): share approval forwarding config
- [#147333](https://github.com/openclaw/openclaw/pull/147333) feat: give every plugin a compact chat activity icon
- [#147214](https://github.com/openclaw/openclaw/pull/147214) refactor(tests): retire Doctor sandbox test bridge
- [#147211](https://github.com/openclaw/openclaw/pull/147211) fix(linux): explain FreeBSD desktop setup prerequisites
- [#147216](https://github.com/openclaw/openclaw/pull/147216) fix(cli): explain MCP probes with no enabled servers
- [#147219](https://github.com/openclaw/openclaw/pull/147219) feat(qa): preserve maturity decision context
- [#147207](https://github.com/openclaw/openclaw/pull/147207) fix(ui): distinguish tool activity with semantic icons
- [#147097](https://github.com/openclaw/openclaw/pull/147097) feat(desktop): unify Tauri title bar and window controls
- [#147184](https://github.com/openclaw/openclaw/pull/147184) fix(ci): check publication registries before FRV fanout
- [#147379](https://github.com/openclaw/openclaw/pull/147379) fix: distinguish stages in slow worktree removal diagnostics
- [#147178](https://github.com/openclaw/openclaw/pull/147178) fix: prevent transcript writes racing reclamation shutdown
- [#147192](https://github.com/openclaw/openclaw/pull/147192) feat(exec): configure approval reviewer thinking and fastMode
- [#147362](https://github.com/openclaw/openclaw/pull/147362) fix(ui): selected chats appear empty during connection recovery
- [#147375](https://github.com/openclaw/openclaw/pull/147375) refactor(transcripts): extract connection-bound mutation kernels
- [#147060](https://github.com/openclaw/openclaw/pull/147060) refactor(terminal): share ANSI restart transitions
- [#147376](https://github.com/openclaw/openclaw/pull/147376) improve: reuse compile cache in SQLite inspection workers
- [#147367](https://github.com/openclaw/openclaw/pull/147367) refactor(markdown): remove redundant newline tests
- [#147058](https://github.com/openclaw/openclaw/pull/147058) refactor(wizard): own cursor restoration in prompt lifecycle
- [#147158](https://github.com/openclaw/openclaw/pull/147158) fix(test): preserve release fixture runtime contracts
- [#147350](https://github.com/openclaw/openclaw/pull/147350) improve: reduce session listing work for large model catalogs
- [#147334](https://github.com/openclaw/openclaw/pull/147334) improve: reduce expired Mentions Inbox cleanup work
- [#147360](https://github.com/openclaw/openclaw/pull/147360) fix(runtime): close remaining Bun extension compatibility gaps
- [#147278](https://github.com/openclaw/openclaw/pull/147278) feat(code-mode): keep oversized results for later cells
- [#147053](https://github.com/openclaw/openclaw/pull/147053) refactor(plugins): share marketplace Git source normalization
- [#146350](https://github.com/openclaw/openclaw/pull/146350) fix(hooks): automatic reset hooks fail after the triggering request ends
- [#147252](https://github.com/openclaw/openclaw/pull/147252) refactor(code-mode): speed up repeated type checks
- [#147279](https://github.com/openclaw/openclaw/pull/147279) fix(ui): make CI check details visibly expandable
- [#147239](https://github.com/openclaw/openclaw/pull/147239) fix(code-mode): explain invalid results after tools return
- [#147150](https://github.com/openclaw/openclaw/pull/147150) fix: session announcements fail after successful replies
- [#147050](https://github.com/openclaw/openclaw/pull/147050) refactor(memory-lancedb): retire unused loader scaffolding
- [#147046](https://github.com/openclaw/openclaw/pull/147046) refactor(markdown): remove dominated chunk guards
- [#147330](https://github.com/openclaw/openclaw/pull/147330) fix(chat): keep message reads within current session visibility
- [#147345](https://github.com/openclaw/openclaw/pull/147345) improve(plugins): reuse prepared facts during cache lookup
- [#147213](https://github.com/openclaw/openclaw/pull/147213) chore(ui): refresh control ui locales
- [#146635](https://github.com/openclaw/openclaw/pull/146635) test: reuse WhatsApp setup runtime fixtures
- [#147339](https://github.com/openclaw/openclaw/pull/147339) fix(test): serialize open-ended live model pricing correctly
- [#147284](https://github.com/openclaw/openclaw/pull/147284) fix: restore cold transcripts after async read errors
- [#147222](https://github.com/openclaw/openclaw/pull/147222) docs(telegram): document ingress ACK boundary and spool guarantees
- [#147348](https://github.com/openclaw/openclaw/pull/147348) fix(openshell): match shared invalid-environment diagnostic
- [#147043](https://github.com/openclaw/openclaw/pull/147043) refactor(terminal): share health status prefix colors
- [#144756](https://github.com/openclaw/openclaw/pull/144756) feat(workboard): add selection and bulk card actions
- [#144755](https://github.com/openclaw/openclaw/pull/144755) refactor(workboard): organize card details and session context
- [#144754](https://github.com/openclaw/openclaw/pull/144754) refactor(workboard): refine card and board editors
- [#144753](https://github.com/openclaw/openclaw/pull/144753) refactor(workboard): add responsive list rows
- [#144752](https://github.com/openclaw/openclaw/pull/144752) refactor(workboard): simplify cards and session status
- [#144751](https://github.com/openclaw/openclaw/pull/144751) refactor(workboard): organize navigation and mobile controls
- [#144748](https://github.com/openclaw/openclaw/pull/144748) refactor(ui): share Workboard selection and appearance controls
- [#144747](https://github.com/openclaw/openclaw/pull/144747) refactor(ui): model Workboard preview sessions consistently
- [#147277](https://github.com/openclaw/openclaw/pull/147277) fix: prevent migration lease expiry during slow startup admission
- [#147275](https://github.com/openclaw/openclaw/pull/147275) feat(computer): control Gateway desktops without paired nodes
- [#147329](https://github.com/openclaw/openclaw/pull/147329) test(runtime): keep Node-only child proofs on Node
- [#147322](https://github.com/openclaw/openclaw/pull/147322) fix(ci): avoid live retries caused by passing test names
- [#147034](https://github.com/openclaw/openclaw/pull/147034) refactor(qa): share memory retrieval arguments
- [#147289](https://github.com/openclaw/openclaw/pull/147289) fix(mattermost): preserve original thread participation expiry
- [#147068](https://github.com/openclaw/openclaw/pull/147068) fix(agents): clean up secret requests after lost registration replies
- [#144271](https://github.com/openclaw/openclaw/pull/144271) fix(control-ui): preserve replies during IME Escape
- [#144231](https://github.com/openclaw/openclaw/pull/144231) refactor(scripts): share Docker diagnostic command lookup
- [#147327](https://github.com/openclaw/openclaw/pull/147327) fix: keep widgets interactive when they define an open helper

#### 🐛 New Issues
- [#146958](https://github.com/openclaw/openclaw/issues/146958) Released 2026.9.2 → 2026.9.3 update fails after the core switch on llm-task package-owner metadata when an explicit linked plugin load path exists, leaving the service stopped `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬6
- [#147160](https://github.com/openclaw/openclaw/issues/147160) Update failure: finalize:doctor (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬6
- [#146887](https://github.com/openclaw/openclaw/issues/146887) update 2026.9.3->2026.9.4 fails across four stages: stdio MCP timeout crashes candidate doctor (unhandled rejection), lint hard-gate, then managed-service-handoff-restore-failed `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬6
- [#147040](https://github.com/openclaw/openclaw/issues/147040) [Bug]: "malformed JSON arguments" still reproduces on v2026.9.4 after #141323/#142176 fixes `P1` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬5
- [#146959](https://github.com/openclaw/openclaw/issues/146959) Released 2026.9.2 install updating to main passes the core switch, then Doctor fails on agent schema 19→20 and the service is left stopped `maintainer` `clawsweeper:source-repro` `impact:crash-loop` `P0` 💬5
- [#146719](https://github.com/openclaw/openclaw/issues/146719) Updater 2026.9.3 to 2026.9.4 on Windows: candidate-snapshot mkdir fails on unexpanded OPENCLAW_STATE_DIR in extended-length path `P0` `maturity:stable` `impact:ux-release-blocker` 💬5
- [#146854](https://github.com/openclaw/openclaw/issues/146854) [Bug]: PreparedModelCatalogConfigReplacedError still drops inbound channel messages on stable 2026.9.4 after live tools.* config reloads `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬5
- [#147420](https://github.com/openclaw/openclaw/issues/147420) [Bug]: computer execution is never released on the MCP computer tool path, leaving COMPUTER_HOST_BUSY with no timeout `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬4
- [#147258](https://github.com/openclaw/openclaw/issues/147258) [Bug]: 2026.9.4 memory_search advertises disabled sessions corpus and recommends configuration changes instead of sessions_search `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#147168](https://github.com/openclaw/openclaw/issues/147168) Anthropic transport spends 3 of 4 cache_control breakpoints on the OAuth system header, leaving the whole history one anchor on the last user message `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#146879](https://github.com/openclaw/openclaw/issues/146879) Update failure: not-git-install (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬4
- [#146637](https://github.com/openclaw/openclaw/issues/146637) [Bug]: 2026.9.3 → 2026.9.4 npm update fails at global install swap on Linux Mint; initiating error truncated `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬4
- [#146860](https://github.com/openclaw/openclaw/issues/146860) Windows: managed update handoff cannot obtain process start identity when the Gateway Scheduled Task uses LogonType InteractiveToken -> activating stalls, settles abandoned `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬4
- [#146851](https://github.com/openclaw/openclaw/issues/146851) Monitor jobs wedge into permanent 'running' after gateway restart: completions never recorded, re-runs rejected 'already-running' (shared processInstanceId) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#146821](https://github.com/openclaw/openclaw/issues/146821) [Bug]: iOS realtime Talk aborts active agent research after 45 seconds and gives misleading retry fallback `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬4
- [#146886](https://github.com/openclaw/openclaw/issues/146886) Windows: refused database-schema-preflight leaves agent DBs ahead of target schema AND leaks the startup-migrations lease, blocking Doctor and all further updates `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬4
- [#147502](https://github.com/openclaw/openclaw/issues/147502) Windows: path redaction corrupts diagnostic messages containing `\\?\` extended-length paths (e.g. update canary mkdir errors) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#147326](https://github.com/openclaw/openclaw/issues/147326) [Bug]: visible subagent exec completions trigger extra heartbeat notifications `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#147346](https://github.com/openclaw/openclaw/issues/147346) [Bug]: doctor --fix disables healthy skills on env-only readiness (false negative, e.g. sag with file-based key) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#147264](https://github.com/openclaw/openclaw/issues/147264) [Bug]: System-expert nested inference deadlocks on its parent main lane at maxConcurrent=1 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#147259](https://github.com/openclaw/openclaw/issues/147259) [Bug]: openclaw logs still creates SQLite WAL/SHM sidecars despite #116869 read-only fix `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#147260](https://github.com/openclaw/openclaw/issues/147260) [Bug]: Telegram progress draft never created with richMessages:true — zero editMessageText on 2026.9.4 `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#147344](https://github.com/openclaw/openclaw/issues/147344) CRITICAL: Silent model auto-escalation to Sonnet + HIGH thinking on Signal messages `P2` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬3
- [#146956](https://github.com/openclaw/openclaw/issues/146956) Packaged launcher kills the Gateway child about 2 seconds into shutdown, before its drain budget finishes `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#146692](https://github.com/openclaw/openclaw/issues/146692) [Bug]: sessions.abort + gateway restart strands activeWriterRunId, wedging session forever (SESSION_WORK_START_CHANGED) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` `impact:message-loss` 💬3
- [#146800](https://github.com/openclaw/openclaw/issues/146800) [Bug]: Busy Discord channels bypass reconnect grace after a millisecond-scale disconnect `bug` `no-stale` `bug:behavior` `P1` 💬3
- [#146612](https://github.com/openclaw/openclaw/issues/146612) [Bug]: Gateway startup loops on "selected config changed during startup" when config uses ${VAR} for a systemd-managed env key (2026.9.4) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#147513](https://github.com/openclaw/openclaw/issues/147513) Reduce repeated account-array preparation in agents list `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#147582](https://github.com/openclaw/openclaw/issues/147582) Update failure: database-schema-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#147587](https://github.com/openclaw/openclaw/issues/147587) Matrix automatic progress fails when provider execution invokes channel callbacks `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147546](https://github.com/openclaw/openclaw/issues/147546) Rate-limit classifier treats OpenRouter 'free-models-per-day' daily cap as transient (retries instead of failing over) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147511](https://github.com/openclaw/openclaw/issues/147511) [Bug]: Control UI own messages flash left (peer) then snap right on refresh `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147530](https://github.com/openclaw/openclaw/issues/147530) [Bug]: qa-lab evidence-gallery test flakes with preview: null on a text artifact `bug` `maintainer` `P2` `issue-rating: 🦪 silver shellfish` 💬2
- [#147496](https://github.com/openclaw/openclaw/issues/147496) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#147509](https://github.com/openclaw/openclaw/issues/147509) [Feature]: Let model fallback candidates use their own thinking level `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#147429](https://github.com/openclaw/openclaw/issues/147429) [Bug]: symlinked exec secret-reader refused only at restart — 19h green then crash-loop; config validate should fail fast `P2` `impact:auth-provider` `impact:crash-loop` `clawsweeper:bulk-filed` 💬2
- [#147387](https://github.com/openclaw/openclaw/issues/147387) [Bug]: exec-completion wake succeeds but visible reply is dropped in WebChat / Companion `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147369](https://github.com/openclaw/openclaw/issues/147369) Update failure: global-install-failed (2026.9.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#146724](https://github.com/openclaw/openclaw/issues/146724) [Bug]: context overflow at 20-26 messages on openai/gpt-5.6-sol — compaction runs, then overflows again (source=promptError) `P1` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬2
- [#147304](https://github.com/openclaw/openclaw/issues/147304) [Bug]: exec session stays "running" while detached children hold stdio; kill reports "No active session found" `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#147351](https://github.com/openclaw/openclaw/issues/147351) Update failure: global-install-failed (2026.9.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#147349](https://github.com/openclaw/openclaw/issues/147349) [Feature]: memory_search needs real abstention — strictMinScore / emptyWhenBelowThreshold, minScore cannot silence noise `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#147342](https://github.com/openclaw/openclaw/issues/147342) [Bug]: empty allow: [] means allow-all but config validate stays silent — warn on permissive empty allow `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#147341](https://github.com/openclaw/openclaw/issues/147341) [Bug]: secrets audit without --allow-exec reports unresolved=0 while skipping exec refs — silent UNMEASURED, not healthy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#147251](https://github.com/openclaw/openclaw/issues/147251) Web Console Realtime Talk output terminates early, sometimes truncating both audio and transcript `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#147220](https://github.com/openclaw/openclaw/issues/147220) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#146999](https://github.com/openclaw/openclaw/issues/146999) [Bug]: Transient DNS failure marks a WhatsApp channel `terminalDisconnect`, permanently disabling health-monitor auto-restart `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-info` 💬2
- [#147181](https://github.com/openclaw/openclaw/issues/147181) memory: textual query-only instruction for instruction-aware embedding models (remainder of #58765) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#147105](https://github.com/openclaw/openclaw/issues/147105) [Feature]: reduce repeated work in Code Mode `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬2
- [#147083](https://github.com/openclaw/openclaw/issues/147083) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#147041](https://github.com/openclaw/openclaw/issues/147041) [Bug]: bundle-mcp leaves stdio MCP server processes running — orphaned trees accumulate (~185 MB each) `P1` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬2
- [#147057](https://github.com/openclaw/openclaw/issues/147057) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#147007](https://github.com/openclaw/openclaw/issues/147007) Update failure: validating (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#146921](https://github.com/openclaw/openclaw/issues/146921) Gateway session ID resolution projects unrelated sessions before exact matching `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#146957](https://github.com/openclaw/openclaw/issues/146957) `openclaw update` preview on a versioned npm install with a custom deployment owner shows null versions and proposes switching to Git `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬2
- [#146911](https://github.com/openclaw/openclaw/issues/146911) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#146901](https://github.com/openclaw/openclaw/issues/146901) [Bug]: openclaw update on Windows 10 fails at candidate snapshot (ENOENT mkdir in canary state copy) — rolls back every attempt `bug` `bug:behavior` 💬2
- [#146832](https://github.com/openclaw/openclaw/issues/146832) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#146838](https://github.com/openclaw/openclaw/issues/146838) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#146744](https://github.com/openclaw/openclaw/issues/146744) SQLite passive checkpoints blocked by readers are reported successful `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#146814](https://github.com/openclaw/openclaw/issues/146814) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#146783](https://github.com/openclaw/openclaw/issues/146783) Update failure: unexpected-error (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#146609](https://github.com/openclaw/openclaw/issues/146609) Bug: update canary omits custom-plugin sibling modules `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#146638](https://github.com/openclaw/openclaw/issues/146638) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#147620](https://github.com/openclaw/openclaw/issues/147620) [Bug]: Secret egress proxy cannot substitute protected sentinels inside HTTP Basic credentials (git-over-HTTPS and all Basic-auth services always 401) `bug` `bug:behavior` 💬1
- [#147614](https://github.com/openclaw/openclaw/issues/147614) [Bug]: Control UI admin automation scope differs between Claude CLI/MCP and OpenAI routes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#147603](https://github.com/openclaw/openclaw/issues/147603) Improve sidebar organization of persistent spawned sessions `maintainer` 💬1
- [#147604](https://github.com/openclaw/openclaw/issues/147604) Update failure: doctor-failed (2026.9.3) 💬1
- [#147601](https://github.com/openclaw/openclaw/issues/147601) Reduce unnecessary Markdown work in progress notes `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#147566](https://github.com/openclaw/openclaw/issues/147566) Cached Discord routes repeat unused role-set construction `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147586](https://github.com/openclaw/openclaw/issues/147586) [Feature]: Consolidate model setup into Models settings `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#147576](https://github.com/openclaw/openclaw/issues/147576) Tauri desktop: save and switch Gateways independently of Primary `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#147526](https://github.com/openclaw/openclaw/issues/147526) Browser output directories lose trailing whitespace and accept symlinked ancestors `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#147548](https://github.com/openclaw/openclaw/issues/147548) [Feature]: Verify real Feishu Gateway replies against Crabline `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#147383](https://github.com/openclaw/openclaw/issues/147383) Show durable rolling session recaps in Activity `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#147401](https://github.com/openclaw/openclaw/issues/147401) [Bug]: Control UI Pair a device modal overflows and clips content in Node host mode `P2` `clawsweeper:no-new-fix-pr` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#147478](https://github.com/openclaw/openclaw/issues/147478) Reduce repeated compaction checkpoint work in session lists `maintainer` 💬1
- [#147524](https://github.com/openclaw/openclaw/issues/147524) [Bug]: Sidebar agent menu does not always center the agent name under its avatar `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147512](https://github.com/openclaw/openclaw/issues/147512) [Bug]: Control UI theme flashes config default then restores profile appearance on refresh `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#147317](https://github.com/openclaw/openclaw/issues/147317) [Feature]: Let occasional critters play around the new-session composer `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147503](https://github.com/openclaw/openclaw/issues/147503) [Bug]: Updates page says "Updating…" while it is only checking for updates `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147485](https://github.com/openclaw/openclaw/issues/147485) Zalo Markdown sends repeat parsing of unchanged input `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#147493](https://github.com/openclaw/openclaw/issues/147493) [Bug]: Codex/Honcho capture gap: clarify history vs turn-delta hook contract and dispatch diagnostics `P2` `impact:session-state` 💬1
- [#147495](https://github.com/openclaw/openclaw/issues/147495) [Bug]: Local/failed repository sessions have no UI path to (re)dispatch to a worker `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬1
- [#147494](https://github.com/openclaw/openclaw/issues/147494) [Bug]: models auth logout permanently fails with misleading "auth store lock may be busy" for profiles that live only in the shared auth store `P2` `impact:auth-provider` 💬1
- [#147473](https://github.com/openclaw/openclaw/issues/147473) refactor: reduce duplicate filesystem read code with fs-safe `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#147271](https://github.com/openclaw/openclaw/issues/147271) Task progress should follow chat reading position without overriding manual choices `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#147449](https://github.com/openclaw/openclaw/issues/147449) Doctor read-only MCP probes can consume rotating OAuth refresh tokens `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#147430](https://github.com/openclaw/openclaw/issues/147430) Performance: measure total Gateway CPU for fixed benchmark workloads `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#147461](https://github.com/openclaw/openclaw/issues/147461) Update failure: update-executor-settlement-failed (2026.9.4) 💬1
- [#147450](https://github.com/openclaw/openclaw/issues/147450) Matrix key uploads can precede durable private-key persistence `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#147447](https://github.com/openclaw/openclaw/issues/147447) Control UI live stream freezes permanently with multiple tabs/panes open (connections close with 1001, no reconnect indicator) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#147435](https://github.com/openclaw/openclaw/issues/147435) [Bug]: startup crash-loops on unconfigured secret provider after green validate+audit — fail once with remediation, check at validate time `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147356](https://github.com/openclaw/openclaw/issues/147356) Personal empty-group display policy in the session sidebar `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#147433](https://github.com/openclaw/openclaw/issues/147433) [Feature]: memory_search needs per-source balance — session summaries drown durable memory, no weight knob `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147417](https://github.com/openclaw/openclaw/issues/147417) Unnecessary formatting work in long Matrix messages `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#147397](https://github.com/openclaw/openclaw/issues/147397) [Bug]: QA reports zero RSS while a Linux worker thread still holds memory `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#147355](https://github.com/openclaw/openclaw/issues/147355) [Bug]: New session workspace preparation waits behind unrelated cleanup `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#147426](https://github.com/openclaw/openclaw/issues/147426) [Bug]:External plugin conversation hooks (allowConversationAccess=true) never fire on the WhatsApp turn/kernel path `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#147419](https://github.com/openclaw/openclaw/issues/147419) [Bug]: Chat position rail moves when the Task progress card expands or collapses `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147385](https://github.com/openclaw/openclaw/issues/147385) Bug: QA cleanup reports live worker threads as stopped after leader exit `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#147409](https://github.com/openclaw/openclaw/issues/147409) Windows: SQLite write-admission registry keyed on raw db.location() splits one DB into two keys (\\?\ vs plain), defeating cooperative lock release `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#147402](https://github.com/openclaw/openclaw/issues/147402) [Bug]: Control UI Pair a device modal overflows and clips content in Node host mode `P2` `impact:ux-friction` `clawsweeper:bulk-filed` 💬1
- [#147365](https://github.com/openclaw/openclaw/issues/147365) Slow managed-worktree removal hides time spent inside cleanup `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#147380](https://github.com/openclaw/openclaw/issues/147380) Telegram inline buttons: callback presses acknowledged but callback_data never reaches agent (2026.9.4) `P2` `impact:message-loss` 💬1
- [#147364](https://github.com/openclaw/openclaw/issues/147364) [Feature]: shared check contract — UNMEASURED instead of green plus coverage census (never-green on missing target) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147361](https://github.com/openclaw/openclaw/issues/147361) [Feature]: usage budgets and alerts for custom providers (thresholds on subscription windows, e.g. opencode-go 2/0/0) `P3` `impact:ux-friction` `clawsweeper:bulk-filed` 💬1
- [#147370](https://github.com/openclaw/openclaw/issues/147370) Provider-level baseUrl ignored on Gateway route: preferDiscoveredTransport inverts baseUrl precedence for configured models `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:auth-provider` 💬1
- [#147357](https://github.com/openclaw/openclaw/issues/147357) [Feature]: gateway recover (start-if-unloaded) — doctor --fix leaves a stopped Gateway stopped, repair reports false repaired `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147337](https://github.com/openclaw/openclaw/issues/147337) Gateway live-profile config rejects open-ended pricing tiers `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#147130](https://github.com/openclaw/openclaw/issues/147130) [Docs]: document the Telegram ingress ACK boundary and what the spool guarantees `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147352](https://github.com/openclaw/openclaw/issues/147352) [Bug]: acpx spawn toward non-ACP command (codex exec) never fails fast — 0%-CPU zombie per attempt, no handshake timeout/kill `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#147347](https://github.com/openclaw/openclaw/issues/147347) OpenShell E2E expects an obsolete invalid-environment diagnostic `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#147353](https://github.com/openclaw/openclaw/issues/147353) [Feature]: plugins enable should preflight SecretRefs — enabling a provider with unresolvable auth arms a restart-time bomb `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147320](https://github.com/openclaw/openclaw/issues/147320) Live CI retries deterministic failures because passing test names match transient errors `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#147274](https://github.com/openclaw/openclaw/issues/147274) Gateway managed desktop cannot be controlled without a paired node `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#147343](https://github.com/openclaw/openclaw/issues/147343) Control UI: status dot on the browser tab favicon (working, needs attention, done, disconnected) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147340](https://github.com/openclaw/openclaw/issues/147340) Mattermost: reactions on bot messages are unobservable — no reactionNotifications gate and the reactions list action is rejected (2026.9.2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147261](https://github.com/openclaw/openclaw/issues/147261) Allow visualizer widgets to load CDN libraries and fonts `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#147306](https://github.com/openclaw/openclaw/issues/147306) Native merge drift verification rejects sorted paths under non-C locales `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#147298](https://github.com/openclaw/openclaw/issues/147298) [Bug]: QA Gateway teardown can lose final buffered log output `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#147267](https://github.com/openclaw/openclaw/issues/147267) [Bug]: doctor reports unconfirmed MCP cleanup when a Streamable HTTP server answers the termination DELETE with 404 `P2` `impact:ux-friction` 💬1
- [#147269](https://github.com/openclaw/openclaw/issues/147269) buzz: unhandled SendingOnClosedConnection from nostr-tools AUTH send kills the gateway (exit 1) when the relay closes during the NIP-42 handshake `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#147266](https://github.com/openclaw/openclaw/issues/147266) [Feature]: health-monitor sustained-failure confirmation plus first-failure notice before channel restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147096](https://github.com/openclaw/openclaw/issues/147096) Unify the Tauri title bar with dashboard controls `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#147179](https://github.com/openclaw/openclaw/issues/147179) FRV starts selected validation before required registry admission `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#147208](https://github.com/openclaw/openclaw/issues/147208) Reduce redundant identity work when projecting persisted chat messages `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#147241](https://github.com/openclaw/openclaw/issues/147241) [Feature]: automations tool raises an operator approval when a scheduled-job change is outside the caller's scope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#147237](https://github.com/openclaw/openclaw/issues/147237) `models list` (plain/--json) crashes with `Cannot read properties of undefined (reading 'input')` when a custom `claude-sonnet-5` provider model exists `P2` `impact:auth-provider` 💬1
- [#147233](https://github.com/openclaw/openclaw/issues/147233) [Bug]: view_image rejects images in admitted task worktrees `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#147217](https://github.com/openclaw/openclaw/issues/147217) [Feature]: Contextual Systems sidebar and desktop workspace `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#147187](https://github.com/openclaw/openclaw/issues/147187) [Bug]: Realtime Talk console voice input is truncated with "audio input fell behind" 💬1
- [#147182](https://github.com/openclaw/openclaw/issues/147182) [Bug]: Control UI PR status stays stale and shows Publishing for reads `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#147172](https://github.com/openclaw/openclaw/issues/147172) Linux: CLI backend identity resolver rejects a distro shell wrapper for claude (POSIX counterpart of #134960) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#147171](https://github.com/openclaw/openclaw/issues/147171) [Bug]: foreground tool-loop continuation can force full prompt reread on recurrent/hybrid local backends `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147161](https://github.com/openclaw/openclaw/issues/147161) [Bug]: Sidebar parent row shows "execution failed" from a two-day-old child session with no age or origin cue `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#147149](https://github.com/openclaw/openclaw/issues/147149) [Bug]: signed node clients using default backend metadata disconnect before pairing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#147118](https://github.com/openclaw/openclaw/issues/147118) [Bug]: Provider auth preparation registers ordinary transport header values as secrets, masking unrelated text `P2` `impact:security` `impact:auth-provider` 💬1
- [#147127](https://github.com/openclaw/openclaw/issues/147127) [Feature]: opt a plugin's delivery hooks into fail-closed handler failures `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#147128](https://github.com/openclaw/openclaw/issues/147128) [Bug]: Telegram text edits reach no plugin hook while location edits emit message_received `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#147129](https://github.com/openclaw/openclaw/issues/147129) [Feature]: a "required plugin" concept — readiness, turn refusal, and doctor coverage `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#147131](https://github.com/openclaw/openclaw/issues/147131) [Feature]: make the hook block notice prefix and "(blocked by <plugin>)" suffix configurable `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147121](https://github.com/openclaw/openclaw/issues/147121) [Bug]: WeChat channel replies fail with PreparedModelCatalogConfigReplacedError `bug` `regression` `impact:message-loss` `impact:auth-provider` 💬1
- [#147087](https://github.com/openclaw/openclaw/issues/147087) Streaming JSON repair rebuilds frames that cannot require repair `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147111](https://github.com/openclaw/openclaw/issues/147111) [Bug]: claude-cli runtime rejects valid API key and OAuth token credentials — always fails with "Not logged in" `P1` `impact:auth-provider` 💬1
- [#147092](https://github.com/openclaw/openclaw/issues/147092) [Bug]: Heartbeat leaks prose to the channel after Codex -> claude-cli model fallback: prompt demands heartbeat_respond, which CLI backends cannot see (2026.9.4) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#147089](https://github.com/openclaw/openclaw/issues/147089) [Feature]: Install a skill from a git repository subdirectory (git: source subpath) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147075](https://github.com/openclaw/openclaw/issues/147075) Update to 2026.9.4 refused: plugin-target-unavailable for all floating npm plugin specs `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#147066](https://github.com/openclaw/openclaw/issues/147066) bug: desktop resize failure receipts omit viewer state `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#147047](https://github.com/openclaw/openclaw/issues/147047) FRV can fan out before validating selected publication source `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#147065](https://github.com/openclaw/openclaw/issues/147065) Secret inventory crashes when an installed plugin declares a prototype-named setup provider id `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#146910](https://github.com/openclaw/openclaw/issues/146910) QR setup rejects trusted-proxy gateways without a shared secret `bug` `P2` `clawsweeper:source-repro` `impact:security` 💬1
- [#147042](https://github.com/openclaw/openclaw/issues/147042) Telegram voice answer to ask_user succeeds, then transcript rewrite conflict fails the run and inserts synthetic aborted `P1` `impact:session-state` 💬1
- [#147037](https://github.com/openclaw/openclaw/issues/147037) A 429 with a multi-day reset pins the turn to the failing model instead of walking the fallback chain `P1` `impact:auth-provider` 💬1
- [#147010](https://github.com/openclaw/openclaw/issues/147010) ACP hook timeout or error can replay a task through the ordinary runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#147017](https://github.com/openclaw/openclaw/issues/147017) Compaction rewrites live prompt prefix, preventing KV cache reuse on local OpenAI-compatible backends `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147016](https://github.com/openclaw/openclaw/issues/147016) [Bug]: message send waits ~30s after successful Telegram gateway response `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#147014](https://github.com/openclaw/openclaw/issues/147014) [Bug]: network failure (UND_ERR_SOCKET) — 'failing over' logged after run already terminated; fallback chain never executes, user gets error `P1` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#147006](https://github.com/openclaw/openclaw/issues/147006) [Bug]: Claude CLI native catalog has zero OpenClaw tools despite projected message tool (2026.9.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#146994](https://github.com/openclaw/openclaw/issues/146994) Feature: expose mcp.apps.enabled as a Control UI Settings toggle, not CLI-only `P3` `clawsweeper:bulk-filed` 💬1
- [#146985](https://github.com/openclaw/openclaw/issues/146985) Memory index: one error message for six conditions, whole run aborts on one bad batch, no debug output for remote embedding providers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146978](https://github.com/openclaw/openclaw/issues/146978) [Feature]: filter tailed records by minimum severity `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146969](https://github.com/openclaw/openclaw/issues/146969) [secrets] `secrets configure` cannot migrate shared-store auth profiles; manual `keyRef` is not materialized by the runtime `P2` `impact:security` `impact:auth-provider` 💬1
- [#146974](https://github.com/openclaw/openclaw/issues/146974) cron: system-owned heartbeat jobs cannot be disabled, repaired, or removed `P2` `impact:ux-friction` 💬1
- [#146967](https://github.com/openclaw/openclaw/issues/146967) `chat.history` returns each assistant turn twice when the run used tools (CLI-imported fragments are never reconciled with the native transcript entry) `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#146962](https://github.com/openclaw/openclaw/issues/146962) HTTP 400 with no body does not trigger provider fallback chain `P2` `impact:auth-provider` 💬1
- [#146932](https://github.com/openclaw/openclaw/issues/146932) Usage timeline rebuilds date formatters for every chart point `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146946](https://github.com/openclaw/openclaw/issues/146946) Bug: recovered tool-finalizer answer is dropped after a message progress reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#146944](https://github.com/openclaw/openclaw/issues/146944) [Bug]: Plugin details are unavailble: Clawhub `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#146945](https://github.com/openclaw/openclaw/issues/146945) [Bug]: memory-core dreaming sentinel bypasses hook with implicit Codex harness `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#146939](https://github.com/openclaw/openclaw/issues/146939) [Bug]: memory_get reads a different USER.md than memory_search with explicit agent ownership `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146806](https://github.com/openclaw/openclaw/issues/146806) test(ui): scroll-idle readiness can miss scrolling back to the same offset `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146914](https://github.com/openclaw/openclaw/issues/146914) [Bug]: Usage hour filtering freezes during the repeated daylight-saving hour `bug` `P2` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#146796](https://github.com/openclaw/openclaw/issues/146796) perf: avoid repeated full wake scans during session-state notice bursts `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146829](https://github.com/openclaw/openclaw/issues/146829) Avoid unused directive parsing when saving assistant replies `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146779](https://github.com/openclaw/openclaw/issues/146779) Control UI timestamp lists repeat equivalent date formatter setup `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146915](https://github.com/openclaw/openclaw/issues/146915) session.maintenance.maxDiskBytes documented as a sessions-directory budget but measures the agent SQLite store too (2026.9.2) `P2` `impact:session-state` 💬1
- [#146902](https://github.com/openclaw/openclaw/issues/146902) Same-session tool-set churn (identical tool count, different membership) defeats prompt-cache reuse `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#146876](https://github.com/openclaw/openclaw/issues/146876) Session-scoped heartbeat replies are delivered to the global heartbeat.target instead of the originating channel (2026.9.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#146870](https://github.com/openclaw/openclaw/issues/146870) [Bug]: Admin automation management can run a job but cannot read its run history (runs missing from management action set) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#146859](https://github.com/openclaw/openclaw/issues/146859) Chat Completions usage parser omits contextUsage, causing heuristic fallback and premature context overflow `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#146852](https://github.com/openclaw/openclaw/issues/146852) Feature Request: Add data visualization `P3` `clawsweeper:bulk-filed` 💬1
- [#146655](https://github.com/openclaw/openclaw/issues/146655) Feature: keep open files in shared sidebar tabs `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#146846](https://github.com/openclaw/openclaw/issues/146846) Feature Request: Add content generation `P3` `clawsweeper:bulk-filed` 💬1
- [#146849](https://github.com/openclaw/openclaw/issues/146849) Feature Request: Add workflow automation `P3` `clawsweeper:bulk-filed` 💬1
- [#146845](https://github.com/openclaw/openclaw/issues/146845) Feature Request: Add task automation `P3` `clawsweeper:bulk-filed` 💬1
- [#146841](https://github.com/openclaw/openclaw/issues/146841) Feature Request: Add privacy controls `P3` `impact:security` 💬1
- [#146843](https://github.com/openclaw/openclaw/issues/146843) Feature Request: Add multi-language support `P3` 💬1
- [#146839](https://github.com/openclaw/openclaw/issues/146839) Feature Request: Add learning capabilities `P3` 💬1
- [#146837](https://github.com/openclaw/openclaw/issues/146837) Feature Request: Add emotion recognition `P3` 💬1
- [#146835](https://github.com/openclaw/openclaw/issues/146835) Feature Request: Add multi-agent collaboration `P3` 💬1
- [#146830](https://github.com/openclaw/openclaw/issues/146830) Feature Request: Add voice command support `P3` 💬1
- [#146834](https://github.com/openclaw/openclaw/issues/146834) Feature Request: Add plugin marketplace `P3` 💬1
- [#146825](https://github.com/openclaw/openclaw/issues/146825) Control UI real-Gateway Full Access: intermittent empty composer before Send after shared-Gateway restart `bug` `maintainer` `P2` `issue-rating: 🦪 silver shellfish` 💬1
- [#146824](https://github.com/openclaw/openclaw/issues/146824) [Bug]: Teams meetings rejects newer Microsoft work meeting links `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#146786](https://github.com/openclaw/openclaw/issues/146786) Doctor changes current-session automations to isolated and breaks conversation delivery `bug` `maintainer` 💬1
- [#146780](https://github.com/openclaw/openclaw/issues/146780) Sidebar narration normalizes earlier paragraphs that cannot affect its subtitle `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146804](https://github.com/openclaw/openclaw/issues/146804) fix(inworld): reflected Basic credentials leak into TTS/voices error messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#146791](https://github.com/openclaw/openclaw/issues/146791) [Bug]: App Store iOS 2026.9.2 connects but never publishes APNs relay registration `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#146769](https://github.com/openclaw/openclaw/issues/146769) [Bug]: fallback chain admits a candidate whose prompt exceeds its own context budget (556k vs 480k), burning it on reasoning-only retries while a larger-context candidate sits later in the chain `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146673](https://github.com/openclaw/openclaw/issues/146673) Large model catalogs repeat auth directory resolution during refresh `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146727](https://github.com/openclaw/openclaw/issues/146727) Slack: tool-failure rows post as separate "Recovered: …" messages instead of settling in the progress card (2026.9.2) `P2` `impact:ux-friction` 💬1
- [#146662](https://github.com/openclaw/openclaw/issues/146662) Stored-account model availability stays stale after quota recovery in a running Gateway `maintainer` `P2` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#146674](https://github.com/openclaw/openclaw/issues/146674) [Feature]: Search stored session transcripts from the CLI (openclaw sessions search) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146663](https://github.com/openclaw/openclaw/issues/146663) [Feature]: Gmail MCP integration blocked: Google OAuth doesn't support Dynamic Client Registration `enhancement` `P2` `impact:auth-provider` 💬1
- [#146653](https://github.com/openclaw/openclaw/issues/146653) Repeated provider policy resolution slows prepared model catalog publications `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146610](https://github.com/openclaw/openclaw/issues/146610) Terminal UI: display image attachments inline `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#147157](https://github.com/openclaw/openclaw/issues/147157) memory-core dreaming-narrative hangs 994s per run and starves turn-slot budget across all agents

#### 🔒 Closed Issues
- [#85030](https://github.com/openclaw/openclaw/issues/85030) [Bug]: MCP tools not injected into subagent (sessions_spawn) sessions — `bundle-mcp` + per-tool subagent allowlist + per-agent allowlist all ignored, subagent system prompt and tool schema receive only built-ins
- [#27445](https://github.com/openclaw/openclaw/issues/27445) [Feature]: `announceTarget` option for sub-agent completion announce routing
- [#140162](https://github.com/openclaw/openclaw/issues/140162) Windows: gateway restart kills ready/slow-booting gateway as "stale process" after 181s timeout, and never finds manually-started foreground gateways
- [#58057](https://github.com/openclaw/openclaw/issues/58057) Feature: Dynamic identity resolution for allowlists (dmPolicy: dynamic)
- [#145503](https://github.com/openclaw/openclaw/issues/145503) [Bug]: skill_workshop tool not registered for agent turns after 2026.9.3 Workshop migration; doctor --fix recommends an alsoAllow fix its own resolver rejects
- [#109356](https://github.com/openclaw/openclaw/issues/109356) Include agent ID and task context in exec approval notifications
- [#55600](https://github.com/openclaw/openclaw/issues/55600) [Bug]: Control UI header logo/icon not displaying after 2026.3.24 update
- [#146958](https://github.com/openclaw/openclaw/issues/146958) Released 2026.9.2 → 2026.9.3 update fails after the core switch on llm-task package-owner metadata when an explicit linked plugin load path exists, leaving the service stopped
- [#48711](https://github.com/openclaw/openclaw/issues/48711) [Bug]: Task and Memory Recall Is Often Too Weak to Trust Across Real Conversations
- [#132978](https://github.com/openclaw/openclaw/issues/132978) [Bug]: doctor reports every OpenRouter model as "not in the local model catalog"
- [#126845](https://github.com/openclaw/openclaw/issues/126845) Embedded runs force-disable pi-ai's safe stream-resume (setRetryEnabled(false)) — mid-stream socket resets during event-loop stalls become dead turns
- [#146719](https://github.com/openclaw/openclaw/issues/146719) Updater 2026.9.3 to 2026.9.4 on Windows: candidate-snapshot mkdir fails on unexpanded OPENCLAW_STATE_DIR in extended-length path
- [#146854](https://github.com/openclaw/openclaw/issues/146854) [Bug]: PreparedModelCatalogConfigReplacedError still drops inbound channel messages on stable 2026.9.4 after live tools.* config reloads
- [#146135](https://github.com/openclaw/openclaw/issues/146135) Update failure: global-install-failed (2026.9.3)
- [#127963](https://github.com/openclaw/openclaw/issues/127963) [Feature]: Add trusted same-state Gateway lifecycle proofs to Mantis
- [#141633](https://github.com/openclaw/openclaw/issues/141633) [Bug]: heartbeat/wake scheduler silently stops after 2026.9.2 Gateway restart; 31/33 automations stop executing
- [#138119](https://github.com/openclaw/openclaw/issues/138119) [Bug]: Markdown table conversion changes surrounding literal content
- [#137503](https://github.com/openclaw/openclaw/issues/137503) [Bug]: doctor --fix / update repair fails with generic "ownership could not be verified" on headless Linux systemd installs missing dbus-user-session
- [#137362](https://github.com/openclaw/openclaw/issues/137362) [Bug]: Windows: appending a stdout redirect to the gateway.cmd launch line makes `openclaw gateway restart` always abort with "port is still busy before restart"
- [#147258](https://github.com/openclaw/openclaw/issues/147258) [Bug]: 2026.9.4 memory_search advertises disabled sessions corpus and recommends configuration changes instead of sessions_search
- [#146879](https://github.com/openclaw/openclaw/issues/146879) Update failure: not-git-install (2026.9.4)
- [#144788](https://github.com/openclaw/openclaw/issues/144788) [Bug]: runDetachedWebhookWork no longer acquires an AsyncWorkScope in 2026.9.4, breaking async post-agent_end embedded-agent work
- [#137910](https://github.com/openclaw/openclaw/issues/137910) [Bug]: idle timeout skips the same-model transient retry and surfaces the error first
- [#146851](https://github.com/openclaw/openclaw/issues/146851) Monitor jobs wedge into permanent 'running' after gateway restart: completions never recorded, re-runs rejected 'already-running' (shared processInstanceId)
- [#72858](https://github.com/openclaw/openclaw/issues/72858) Bug: WebChat/Control UI exec remains denied with allowlist miss even after elevated and provider tool policy are configured
- [#145029](https://github.com/openclaw/openclaw/issues/145029) [Bug]: restart-safe recovery silently strips side-effecting tools; the recovery prompt tells the model to continue and never mentions the restriction
- [#144356](https://github.com/openclaw/openclaw/issues/144356) [Bug]: Updates fail on Linux installations with no Gateway service
- [#138735](https://github.com/openclaw/openclaw/issues/138735) [Bug]: WebChat renders assistant replies twice and drops live text after page refresh (2026.9 segmented streaming)
- [#146692](https://github.com/openclaw/openclaw/issues/146692) [Bug]: sessions.abort + gateway restart strands activeWriterRunId, wedging session forever (SESSION_WORK_START_CHANGED)
- [#145984](https://github.com/openclaw/openclaw/issues/145984) [Bug]: Windows - gateway restart/stop fails with "port is still busy; remaining listener ownership could not be verified" against a healthy gateway
- [#86493](https://github.com/openclaw/openclaw/issues/86493) [Bug]: StepFun (stepfun-plan) plugin does not register image generation provider — image_generate silently fails
- [#128026](https://github.com/openclaw/openclaw/issues/128026) Sandbox mode silently does not engage for agents using the `Bash` tool; `sandbox explain` reports `sessionIsSandboxed: true` even though no container is ever created
- [#127930](https://github.com/openclaw/openclaw/issues/127930) [Bug] fs-safe hardlink tests are not fully Windows-compatible
- [#127863](https://github.com/openclaw/openclaw/issues/127863) [Bug]: Talk consult completion is not durable across client or session loss
- [#127069](https://github.com/openclaw/openclaw/issues/127069) Proposal: agents.defaults.heartbeat.preGate — headless cost-gate before heartbeat agentTurn
- [#127041](https://github.com/openclaw/openclaw/issues/127041) Codex app-server: restore inline auto-compaction deferral for sandbox/exec-host-blocked native execution
- [#126505](https://github.com/openclaw/openclaw/issues/126505) Codex connector drops exact Guardian denial approval across chat turns
- [#146612](https://github.com/openclaw/openclaw/issues/146612) [Bug]: Gateway startup loops on "selected config changed during startup" when config uses ${VAR} for a systemd-managed env key (2026.9.4)
- [#135191](https://github.com/openclaw/openclaw/issues/135191) Legacy delivery-queue migration re-activates months-old stale 'pending' entries, causing mass outbound message flood on reconnect
- [#147513](https://github.com/openclaw/openclaw/issues/147513) Reduce repeated account-array preparation in agents list
- [#145779](https://github.com/openclaw/openclaw/issues/145779) [Bug]: background exec runs can vanish from the runtime "Active exec sessions" carrier while the process tool still lists them
- [#147429](https://github.com/openclaw/openclaw/issues/147429) [Bug]: symlinked exec secret-reader refused only at restart — 19h green then crash-loop; config validate should fail fast
- [#147105](https://github.com/openclaw/openclaw/issues/147105) [Feature]: reduce repeated work in Code Mode
- [#146195](https://github.com/openclaw/openclaw/issues/146195) [Bug]: Multi-agent migration stamps explicit ownership and permanently loses the default agent identity (all agents report isDefault=false after restart)
- [#139926](https://github.com/openclaw/openclaw/issues/139926) [Bug]: Control UI does not distinguish maintenance from model waiting during long pre-response delays
- [#145370](https://github.com/openclaw/openclaw/issues/145370) [Bug]: Doctor switch fixture rejects loaded-service inspection
- [#146901](https://github.com/openclaw/openclaw/issues/146901) [Bug]: openclaw update on Windows 10 fails at candidate snapshot (ENOENT mkdir in canary state copy) — rolls back every attempt
- [#146744](https://github.com/openclaw/openclaw/issues/146744) SQLite passive checkpoints blocked by readers are reported successful
- [#146043](https://github.com/openclaw/openclaw/issues/146043) [Bug]: doctor stops later repairs when a legacy ~/.openclaw/agent payload exists; quarantine directories accumulate
- [#144662](https://github.com/openclaw/openclaw/issues/144662) [Bug]: screenshot and video uploads fail through protected egress with Bad Content-Length
- [#146609](https://github.com/openclaw/openclaw/issues/146609) Bug: update canary omits custom-plugin sibling modules
- [#147566](https://github.com/openclaw/openclaw/issues/147566) Cached Discord routes repeat unused role-set construction
- [#147526](https://github.com/openclaw/openclaw/issues/147526) Browser output directories lose trailing whitespace and accept symlinked ancestors
- [#127312](https://github.com/openclaw/openclaw/issues/127312) [Bug]: migrate leaf commands discard parent-positioned options
- [#147383](https://github.com/openclaw/openclaw/issues/147383) Show durable rolling session recaps in Activity
- [#147401](https://github.com/openclaw/openclaw/issues/147401) [Bug]: Control UI Pair a device modal overflows and clips content in Node host mode
- [#147478](https://github.com/openclaw/openclaw/issues/147478) Reduce repeated compaction checkpoint work in session lists
- [#147317](https://github.com/openclaw/openclaw/issues/147317) [Feature]: Let occasional critters play around the new-session composer
- [#147485](https://github.com/openclaw/openclaw/issues/147485) Zalo Markdown sends repeat parsing of unchanged input
- [#147493](https://github.com/openclaw/openclaw/issues/147493) [Bug]: Codex/Honcho capture gap: clarify history vs turn-delta hook contract and dispatch diagnostics
- [#147494](https://github.com/openclaw/openclaw/issues/147494) [Bug]: models auth logout permanently fails with misleading "auth store lock may be busy" for profiles that live only in the shared auth store
- [#147473](https://github.com/openclaw/openclaw/issues/147473) refactor: reduce duplicate filesystem read code with fs-safe
- [#147271](https://github.com/openclaw/openclaw/issues/147271) Task progress should follow chat reading position without overriding manual choices
- [#147449](https://github.com/openclaw/openclaw/issues/147449) Doctor read-only MCP probes can consume rotating OAuth refresh tokens
- [#147430](https://github.com/openclaw/openclaw/issues/147430) Performance: measure total Gateway CPU for fixed benchmark workloads
- [#147461](https://github.com/openclaw/openclaw/issues/147461) Update failure: update-executor-settlement-failed (2026.9.4)
- [#147356](https://github.com/openclaw/openclaw/issues/147356) Personal empty-group display policy in the session sidebar
- [#147417](https://github.com/openclaw/openclaw/issues/147417) Unnecessary formatting work in long Matrix messages
- [#147397](https://github.com/openclaw/openclaw/issues/147397) [Bug]: QA reports zero RSS while a Linux worker thread still holds memory
- [#147355](https://github.com/openclaw/openclaw/issues/147355) [Bug]: New session workspace preparation waits behind unrelated cleanup
- [#144265](https://github.com/openclaw/openclaw/issues/144265) [Bug]: sessions_send misclassifies visible dashboard spawn-child sessions and triggers stale runtime announce failures
- [#147385](https://github.com/openclaw/openclaw/issues/147385) Bug: QA cleanup reports live worker threads as stopped after leader exit
- [#147402](https://github.com/openclaw/openclaw/issues/147402) [Bug]: Control UI Pair a device modal overflows and clips content in Node host mode
- [#146308](https://github.com/openclaw/openclaw/issues/146308) [Feature]: Shared dashboard fullscreen defaults with personal overrides
- [#147365](https://github.com/openclaw/openclaw/issues/147365) Slow managed-worktree removal hides time spent inside cleanup
- [#147380](https://github.com/openclaw/openclaw/issues/147380) Telegram inline buttons: callback presses acknowledged but callback_data never reaches agent (2026.9.4)
- [#146349](https://github.com/openclaw/openclaw/issues/146349) Bug: automatic reset hooks lose delayed tracked work after the triggering request closes
- [#147361](https://github.com/openclaw/openclaw/issues/147361) [Feature]: usage budgets and alerts for custom providers (thresholds on subscription windows, e.g. opencode-go 2/0/0)
- [#147337](https://github.com/openclaw/openclaw/issues/147337) Gateway live-profile config rejects open-ended pricing tiers
- [#147130](https://github.com/openclaw/openclaw/issues/147130) [Docs]: document the Telegram ingress ACK boundary and what the spool guarantees
- [#147347](https://github.com/openclaw/openclaw/issues/147347) OpenShell E2E expects an obsolete invalid-environment diagnostic
- [#147320](https://github.com/openclaw/openclaw/issues/147320) Live CI retries deterministic failures because passing test names match transient errors
- [#144270](https://github.com/openclaw/openclaw/issues/144270) [Bug]: Control UI reply preview clears during IME Escape
- [#147274](https://github.com/openclaw/openclaw/issues/147274) Gateway managed desktop cannot be controlled without a paired node
- [#147261](https://github.com/openclaw/openclaw/issues/147261) Allow visualizer widgets to load CDN libraries and fonts
- [#147306](https://github.com/openclaw/openclaw/issues/147306) Native merge drift verification rejects sorted paths under non-C locales
- [#127453](https://github.com/openclaw/openclaw/issues/127453) CLI startup metadata publication can truncate the prior complete artifact on write failure
- [#147267](https://github.com/openclaw/openclaw/issues/147267) [Bug]: doctor reports unconfirmed MCP cleanup when a Streamable HTTP server answers the termination DELETE with 404
- [#139040](https://github.com/openclaw/openclaw/issues/139040) [Bug]: [memory] sqlite-backed corpus chunks are not split to the 64-item embedding limit (HTTP 400, Zhipu code 1214)
- [#147096](https://github.com/openclaw/openclaw/issues/147096) Unify the Tauri title bar with dashboard controls
- [#147179](https://github.com/openclaw/openclaw/issues/147179) FRV starts selected validation before required registry admission
- [#147208](https://github.com/openclaw/openclaw/issues/147208) Reduce redundant identity work when projecting persisted chat messages
- [#147237](https://github.com/openclaw/openclaw/issues/147237) `models list` (plain/--json) crashes with `Cannot read properties of undefined (reading 'input')` when a custom `claude-sonnet-5` provider model exists
- [#147187](https://github.com/openclaw/openclaw/issues/147187) [Bug]: Realtime Talk console voice input is truncated with "audio input fell behind"
- [#143431](https://github.com/openclaw/openclaw/issues/143431) [Bug]: Discord shows “Progress updated” but provides no access to progress-card text
- [#147121](https://github.com/openclaw/openclaw/issues/147121) [Bug]: WeChat channel replies fail with PreparedModelCatalogConfigReplacedError
- [#147087](https://github.com/openclaw/openclaw/issues/147087) Streaming JSON repair rebuilds frames that cannot require repair
- [#147111](https://github.com/openclaw/openclaw/issues/147111) [Bug]: claude-cli runtime rejects valid API key and OAuth token credentials — always fails with "Not logged in"
- [#127611](https://github.com/openclaw/openclaw/issues/127611) Sessions Delete all archived can survive agent-scope retirement and delete hidden transcripts
- [#143794](https://github.com/openclaw/openclaw/issues/143794) Update failure: database-schema-preflight (2026.9.3)
- [#147075](https://github.com/openclaw/openclaw/issues/147075) Update to 2026.9.4 refused: plugin-target-unavailable for all floating npm plugin specs
- [#147066](https://github.com/openclaw/openclaw/issues/147066) bug: desktop resize failure receipts omit viewer state
- [#147047](https://github.com/openclaw/openclaw/issues/147047) FRV can fan out before validating selected publication source
- [#146910](https://github.com/openclaw/openclaw/issues/146910) QR setup rejects trusted-proxy gateways without a shared secret
- [#147042](https://github.com/openclaw/openclaw/issues/147042) Telegram voice answer to ask_user succeeds, then transcript rewrite conflict fails the run and inserts synthetic aborted
- [#147037](https://github.com/openclaw/openclaw/issues/147037) A 429 with a multi-day reset pins the turn to the failing model instead of walking the fallback chain
- [#144248](https://github.com/openclaw/openclaw/issues/144248) [Bug]: process poll can exit one-shot agents with code 13
- [#146994](https://github.com/openclaw/openclaw/issues/146994) Feature: expose mcp.apps.enabled as a Control UI Settings toggle, not CLI-only
- [#146974](https://github.com/openclaw/openclaw/issues/146974) cron: system-owned heartbeat jobs cannot be disabled, repaired, or removed
- [#146967](https://github.com/openclaw/openclaw/issues/146967) `chat.history` returns each assistant turn twice when the run used tools (CLI-imported fragments are never reconciled with the native transcript entry)
- [#146962](https://github.com/openclaw/openclaw/issues/146962) HTTP 400 with no body does not trigger provider fallback chain
- [#146932](https://github.com/openclaw/openclaw/issues/146932) Usage timeline rebuilds date formatters for every chart point
- [#146944](https://github.com/openclaw/openclaw/issues/146944) [Bug]: Plugin details are unavailble: Clawhub
- [#146806](https://github.com/openclaw/openclaw/issues/146806) test(ui): scroll-idle readiness can miss scrolling back to the same offset
- [#146914](https://github.com/openclaw/openclaw/issues/146914) [Bug]: Usage hour filtering freezes during the repeated daylight-saving hour
- [#146796](https://github.com/openclaw/openclaw/issues/146796) perf: avoid repeated full wake scans during session-state notice bursts
- [#146829](https://github.com/openclaw/openclaw/issues/146829) Avoid unused directive parsing when saving assistant replies
- [#146779](https://github.com/openclaw/openclaw/issues/146779) Control UI timestamp lists repeat equivalent date formatter setup
- [#146915](https://github.com/openclaw/openclaw/issues/146915) session.maintenance.maxDiskBytes documented as a sessions-directory budget but measures the agent SQLite store too (2026.9.2)
- [#146028](https://github.com/openclaw/openclaw/issues/146028) docs: thinking resolution order omits per-model defaults
- [#146852](https://github.com/openclaw/openclaw/issues/146852) Feature Request: Add data visualization
- [#146655](https://github.com/openclaw/openclaw/issues/146655) Feature: keep open files in shared sidebar tabs
- [#146846](https://github.com/openclaw/openclaw/issues/146846) Feature Request: Add content generation
- [#146849](https://github.com/openclaw/openclaw/issues/146849) Feature Request: Add workflow automation
- [#146845](https://github.com/openclaw/openclaw/issues/146845) Feature Request: Add task automation
- [#146843](https://github.com/openclaw/openclaw/issues/146843) Feature Request: Add multi-language support
- [#146839](https://github.com/openclaw/openclaw/issues/146839) Feature Request: Add learning capabilities
- [#146837](https://github.com/openclaw/openclaw/issues/146837) Feature Request: Add emotion recognition
- [#146835](https://github.com/openclaw/openclaw/issues/146835) Feature Request: Add multi-agent collaboration
- [#146830](https://github.com/openclaw/openclaw/issues/146830) Feature Request: Add voice command support
- [#146834](https://github.com/openclaw/openclaw/issues/146834) Feature Request: Add plugin marketplace
- [#146577](https://github.com/openclaw/openclaw/issues/146577) Allow agents to operate the browser page shown in a dashboard
- [#146786](https://github.com/openclaw/openclaw/issues/146786) Doctor changes current-session automations to isolated and breaks conversation delivery
- [#146780](https://github.com/openclaw/openclaw/issues/146780) Sidebar narration normalizes earlier paragraphs that cannot affect its subtitle
- [#144552](https://github.com/openclaw/openclaw/issues/144552) [Bug]: backup create aborts on a valid, non-corrupt third-party SQLite file that fails foreign_key_check
- [#145413](https://github.com/openclaw/openclaw/issues/145413) [Bug]: Plugins hub loading skeleton draws list rows with uneven pills instead of the card grid
- [#145414](https://github.com/openclaw/openclaw/issues/145414) [Bug]: Settings navigation skeleton is seven plain bars, not the grouped icon + label rows it replaces
- [#146673](https://github.com/openclaw/openclaw/issues/146673) Large model catalogs repeat auth directory resolution during refresh
- [#146727](https://github.com/openclaw/openclaw/issues/146727) Slack: tool-failure rows post as separate "Recovered: …" messages instead of settling in the progress card (2026.9.2)
- [#146662](https://github.com/openclaw/openclaw/issues/146662) Stored-account model availability stays stale after quota recovery in a running Gateway
- [#146663](https://github.com/openclaw/openclaw/issues/146663) [Feature]: Gmail MCP integration blocked: Google OAuth doesn't support Dynamic Client Registration
- [#142715](https://github.com/openclaw/openclaw/issues/142715) Managed pnpm update leaves Gateway stopped after post-core handoff root mismatch
- [#146653](https://github.com/openclaw/openclaw/issues/146653) Repeated provider policy resolution slows prepared model catalog publications
- [#146610](https://github.com/openclaw/openclaw/issues/146610) Terminal UI: display image attachments inline

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 245,166 · **Open issues:** 42,765 · **Last push:** <1h ago

September 14, 2026, marked a routine day for Hermes Agent with no new releases or merged pull requests. However, several notable issues were reported, including a critical bug (#109727) where a second Hermes process unlinking the live state.db-wal/-shm leads to a DeletedWalGenerationError on Linux systems. Additionally, a significant bug on macOS (#109641) was identified, where a gateway restart creates a replacement WAL under a live CLI writer, causing substantial halts. The community is also buzzing over a design proposal (#109891) aiming to enhance the local gateway to become a first-class Desktop backend, highlighting the ecosystem's ongoing evolution and user interest in improved functionality.

#### 🐛 New Issues
- [#109727](https://github.com/NousResearch/hermes-agent/issues/109727) [Bug]: a second Hermes process unlinks the live state.db-wal/-shm and strands the running gateway on Linux (DeletedWalGenerationError) `type/bug` `comp/agent` `comp/cli` `comp/gateway` 💬8
- [#109641](https://github.com/NousResearch/hermes-agent/issues/109641) [Bug] macOS: the deleted-WAL pre-connect refusal is a no-op (holder scan is Linux-only) — a gateway restart mints a replacement WAL under a live CLI writer (16 halts, 4.2 GB captured in 13 min) `type/bug` `comp/agent` `comp/cli` `comp/gateway` 💬5
- [#109966](https://github.com/NousResearch/hermes-agent/issues/109966) state.db: WAL generation handed off during a fleet restart leaves long-lived holders on deleted -wal/-shm and blocks every new opener for hours `type/bug` `comp/cli` `comp/gateway` `P1` 💬4
- [#110106](https://github.com/NousResearch/hermes-agent/issues/110106) Multiple concurrent tui_gateway processes on one profile thrash state.db WAL retirement; agent sessions die silently mid-turn (DeletedWalGenerationError) `type/bug` `comp/agent` `comp/gateway` `comp/tui` 💬4
- [#109891](https://github.com/NousResearch/hermes-agent/issues/109891) Design proposal: make the live local gateway a first-class Desktop backend `type/feature` `comp/gateway` `P3` `needs-decision` 💬3
- [#110392](https://github.com/NousResearch/hermes-agent/issues/110392) [Bug]: a checkpoint store missing `refs/heads` is permanently broken — the self-repair only runs after a successful gc `type/bug` `duplicate` `comp/tools` `tool/file` 💬3
- [#110416](https://github.com/NousResearch/hermes-agent/issues/110416) [Bug]: Session store persists credentials unredacted (content, tool_calls, reasoning); approvals suggest re-prints them `type/security` `comp/agent` `comp/cli` `P3` 💬2
- [#109946](https://github.com/NousResearch/hermes-agent/issues/109946) Desktop/dashboard all-profile sidebar can trigger deleted WAL generation in live profile gateways `type/bug` `comp/gateway` `P1` `sweeper:risk-session-state` 💬2
- [#109949](https://github.com/NousResearch/hermes-agent/issues/109949) Bot Screen: 'one install per profile at a time' is process-local, so the CLI and the Desktop can install concurrently `type/bug` `comp/tools` `P3` `comp/desktop` 💬2
- [#110276](https://github.com/NousResearch/hermes-agent/issues/110276) Bug: DeletedWalGenerationError halt loop on macOS — single-process multi-handle WAL generation split `type/bug` `comp/cron` `P1` `sweeper:risk-session-state` 💬1
- [#110422](https://github.com/NousResearch/hermes-agent/issues/110422) Lifecycle guard doesn't apply inert-heredoc masking to the referenced-script walk `type/bug` `comp/gateway` `comp/cron` `tool/terminal` 💬1
- [#110423](https://github.com/NousResearch/hermes-agent/issues/110423) [Bug]: 1Password and Bitwarden logins only bind to the first saved URL `type/bug` `comp/agent` `tool/browser` `P2` 💬1
- [#110170](https://github.com/NousResearch/hermes-agent/issues/110170) [Bug]: atomic-write failure cleanup never removes the temp file — a failed write_file/patch leaves a .hermes-tmp.* sibling behind `type/bug` `comp/tools` `tool/file` `P2` 💬1
- [#110412](https://github.com/NousResearch/hermes-agent/issues/110412) Cron: an off-tick fire can claim a future occurrence's identity, silently dropping that slot forever `type/bug` `comp/cron` `P2` `sweeper:risk-automation` 💬1
- [#110414](https://github.com/NousResearch/hermes-agent/issues/110414) iOS Safari: dashboard /chat jumps away from the input line when the keyboard opens `type/bug` `P3` `comp/dashboard` 💬1
- [#110401](https://github.com/NousResearch/hermes-agent/issues/110401) [Bug]: Desktop clarify card spins forever on single-question clarifies — backend always emits batch wire `type/bug` `comp/tui` `P2` `comp/desktop` 💬1
- [#110394](https://github.com/NousResearch/hermes-agent/issues/110394) Kanban: completion has no evidence mechanism — "proof" is agent-side discipline that drifts between agents `type/feature` `comp/cron` `P3` `needs-decision` 💬1
- [#110376](https://github.com/NousResearch/hermes-agent/issues/110376) Kanban task_runs provenance blind spot: model/session attribution unrecoverable for 428/439 runs (97.5%) - profile-confirm rule unsupported by the data model `type/feature` `comp/cron` `P3` 💬1
- [#110427](https://github.com/NousResearch/hermes-agent/issues/110427) Feature: soft-timeout for background tasks (wake the agent, don't hard-kill) `type/feature` `comp/agent` `tool/terminal` `P3`
- [#110428](https://github.com/NousResearch/hermes-agent/issues/110428) Feature: git-compatible, secret-safe instance export/restore for reproducibility `type/feature` `comp/cli` `area/config` `P3`
- [#110437](https://github.com/NousResearch/hermes-agent/issues/110437) [Bug] Long-lived gateway process: getaddrinfo() permanently degrades to fast-fail EAI_AGAIN (bypasses /etc/hosts)
- [#110429](https://github.com/NousResearch/hermes-agent/issues/110429) Feature: approval-required persistent changes (do not self-modify control files without consent) `type/feature` `comp/agent` `tool/memory` `area/config`
- [#110433](https://github.com/NousResearch/hermes-agent/issues/110433) web: React Compiler babel cache is unused in CI — wire it into vitest.config.ts and give it its own cache key `type/perf` `P3` `sweeper:risk-automation` `comp/dashboard`
- [#110402](https://github.com/NousResearch/hermes-agent/issues/110402) Hermes Agent ignores its loaded skill files (skill-adherence failure) `type/bug` `comp/agent` `tool/skills` `provider/openrouter`
- [#110424](https://github.com/NousResearch/hermes-agent/issues/110424) 1Password vault backend binds a Login item to only its first URL, so multi-website items can't fill on their other origins `type/bug` `duplicate` `comp/agent` `tool/browser`
- [#110420](https://github.com/NousResearch/hermes-agent/issues/110420) [Bug] Fleet-version state-file fallback can classify a live non-gateway writer as "current" `type/bug` `comp/cli` `comp/gateway` `P3`

#### 🔒 Closed Issues
- [#85209](https://github.com/NousResearch/hermes-agent/issues/85209) Model picker should show only the reasoning-effort levels a model actually supports
- [#67358](https://github.com/NousResearch/hermes-agent/issues/67358) [bug] Lark WebSocket disconnect causes gateway process crash
- [#108383](https://github.com/NousResearch/hermes-agent/issues/108383) Dashboard chat (/chat) sessions never go live: stuck "Setup Required"/queued forever, while CLI (hermes chat) works fine on same gateway
- [#109411](https://github.com/NousResearch/hermes-agent/issues/109411) cron: duration schedules compute the wrong next-run instant across DST transitions
- [#105411](https://github.com/NousResearch/hermes-agent/issues/105411) Expose delegation reasoning in the existing auxiliary-model setup flow
- [#108494](https://github.com/NousResearch/hermes-agent/issues/108494) security: include profile identity in prompt-cache scope
- [#110424](https://github.com/NousResearch/hermes-agent/issues/110424) 1Password vault backend binds a Login item to only its first URL, so multi-website items can't fill on their other origins

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,656 · **Open issues:** 7,924 · **Last push:** <1h ago

On September 14, 2026, there were no new releases for vLLM. Significant progress was made with the merging of several pull requests, including a fix for the `DeepSeek V4 MegaMoE` startup error (#55914) and enhancements to the handling of KV shard transfers (#56645). Notably, improvements in performance came from changes addressing Python proxy serialization overhead (#56657) and redundant conversions during FP8 initialization (#56688). On the issue front, a critical bug was reported regarding the `--otlp-traces-endpoint`, where the tracer initializes but fails to send spans (#56696).

#### ✅ Merged PRs
- [#55914](https://github.com/vllm-project/vllm/pull/55914) [DSv4 Bug] fix dsv4 start up error `NotImplementedError: DeepSeek V4 MegaMoE currently requires expert parallel`
- [#56657](https://github.com/vllm-project/vllm/pull/56657) [Performance][EPD] Reduce Python proxy serialization overhead
- [#55802](https://github.com/vllm-project/vllm/pull/55802) [Attention] Remove DCP indexer interleave guard and test TP1 output parity
- [#55768](https://github.com/vllm-project/vllm/pull/55768) [Warmup] Gemma 4 de-JITification
- [#56715](https://github.com/vllm-project/vllm/pull/56715) [Bugfix][PCP][DCP] Respect interleave in indexer KV gather mapping
- [#56645](https://github.com/vllm-project/vllm/pull/56645) [NIXL][PCP][DCP] Expose PCP producer KV shards as transfer ranks
- [#56688](https://github.com/vllm-project/vllm/pull/56688) [Perf] Avoid redundant conversions in FP8 dummy initialization
- [#56707](https://github.com/vllm-project/vllm/pull/56707) [CI] Initialize warmup registry in V2 QSA runner fixture
- [#56676](https://github.com/vllm-project/vllm/pull/56676) [Bugfix] Skip Triton autotune inspection without Triton
- [#56170](https://github.com/vllm-project/vllm/pull/56170) [ROCm][Performance] Avoid blocking MiniMax M3 scalar upload
- [#56639](https://github.com/vllm-project/vllm/pull/56639) [Pooling] Support prompt embeddings in MRV2 decoder pooling
- [#52501](https://github.com/vllm-project/vllm/pull/52501) [Bugfix] Detect unloaded NVFP4 weight scales with a NaN sentinel
- [#56305](https://github.com/vllm-project/vllm/pull/56305) [Attention] Add Triton/FlashInfer composite for multimodal prefix attention
- [#56528](https://github.com/vllm-project/vllm/pull/56528) [Test][Determinism] Cover VLM batch invariance in default execution mode
- [#55897](https://github.com/vllm-project/vllm/pull/55897) [LoRA] Add LoRA support for DeepSeek-V4 Flash Vision
- [#56573](https://github.com/vllm-project/vllm/pull/56573) [Pooling] Report actual input token usage for scoring APIs
- [#56670](https://github.com/vllm-project/vllm/pull/56670) [XPU][CI] fix jit_warmup_triton_launcher
- [#50388](https://github.com/vllm-project/vllm/pull/50388) [Core] Fix ValueError on KV load failure with a hybrid KV cache
- [#56432](https://github.com/vllm-project/vllm/pull/56432) [Bugfix][EPD] Preserve explicit multimodal UUIDs with caches disabled
- [#56512](https://github.com/vllm-project/vllm/pull/56512) [DS V4.1][Engram] Support async prefetch for offloaded engram lookups and engram DP sharding
- [#56682](https://github.com/vllm-project/vllm/pull/56682) [Bugfix] Avoid repeated dummy initialization and random CPU Engram fills
- [#56652](https://github.com/vllm-project/vllm/pull/56652) [Bugfix][Gemma4] Keep image kwargs out of video preprocessing
- [#56464](https://github.com/vllm-project/vllm/pull/56464) [Perf][Kernel] Integrate DeepSelect TopK for the DSA sparse indexer
- [#56672](https://github.com/vllm-project/vllm/pull/56672) [CI] Fix NIXL transfer-rank geometry fixture
- [#56621](https://github.com/vllm-project/vllm/pull/56621) [Bugfix][KV Offload] Submit CPU stores on no-forward steps
- [#55508](https://github.com/vllm-project/vllm/pull/55508) [Bugfix][Benchmark] Make streaming TTFT/E2E latency accounting consistent across endpoints
- [#56654](https://github.com/vllm-project/vllm/pull/56654) [MRV2] Revert explicit Triton JIT warmup migration
- [#56349](https://github.com/vllm-project/vllm/pull/56349) [ROCm] Auto-enable breakable CUDA graphs for DeepseekV41ForCausalLM
- [#56478](https://github.com/vllm-project/vllm/pull/56478) [Kernel][Perf][Quantization] Fix odd-row performance cliff in per-token-group quantization
- [#55656](https://github.com/vllm-project/vllm/pull/55656) [Misc] Clean up fast loader daemon quant method verification

#### 🐛 New Issues
- [#56696](https://github.com/vllm-project/vllm/issues/56696) [Bug]: --otlp-traces-endpoint initializes tracer but never sends spans (instrument_otel/manual_instrument_otel never invoked) `bug` 💬3
- [#56712](https://github.com/vllm-project/vllm/issues/56712) [Bug]: DiffusionGemma image input crashes the EngineCore — borrowed Gemma4 methods read `_enable_mm_lora`, which DiffusionGemma never sets `multi-modality` 💬1
- [#56702](https://github.com/vllm-project/vllm/issues/56702) [Bug]: DeepSeek-V4.1-Flash cannot start on SM120 — sm_120 missing from kernel-block-size branches, and prefill SWA width ignores --language-model-only `rocm` `deepseek` `DSv4.1` 💬1
- [#56699](https://github.com/vllm-project/vllm/issues/56699) [Bug][HiSparse] Decode engine dies with cudaErrorLaunchFailure in the host-mirror path under sustained P/D host imports 💬1
- [#56727](https://github.com/vllm-project/vllm/issues/56727) [RFC] Separate CLI input definitions from runtime configuration `quantization`
- [#56717](https://github.com/vllm-project/vllm/issues/56717) [Feature]: Cap default build parallelism by available memory in setup.py
- [#56700](https://github.com/vllm-project/vllm/issues/56700) [SM120] Field report: running DeepSeek-V4.1-Flash end-to-end on 8x RTX PRO 6000 — pitfall map + working configuration (1M context verified) `deepseek` `DSv4.1`
- [#56701](https://github.com/vllm-project/vllm/issues/56701) [RFC][KV Offload]: Align sliding-window restore coverage with MTP-retained history
- [#56684](https://github.com/vllm-project/vllm/issues/56684) [Performance]: 3.4 s engine stalls from DeepGEMM compiling the o-projection kernel per prefill chunk size, DeepSeek-V4.1-Flash on 8x B200 `DSv4.1`
- [#56668](https://github.com/vllm-project/vllm/issues/56668) [Bug]: 81 kv_connector unit tests fail on CPU-only machines since #54042 (No common block size for 16) `bug`
- [#56658](https://github.com/vllm-project/vllm/issues/56658) [Bug]: Qwen parser discards prose and final answers after a literal <tool_call> marker `tool-calling` `qwen`
- [#56655](https://github.com/vllm-project/vllm/issues/56655) [Bug]: Mixed prompt embedding masks are omitted from prefix cache keys, causing incorrect outputs `kv-cache-manager`
- [#56653](https://github.com/vllm-project/vllm/issues/56653) [Bug]: vllm bench serve may overcount peak concurrent requests at integer-second boundaries `bug` `kimi` `k3`

#### 🔒 Closed Issues
- [#51057](https://github.com/vllm-project/vllm/issues/51057) [Feature]: Follow Up from inital ROCm DI CI enablement PR to break it up into smaller chunks - Use production grade vLLM router in ROCm nightly DI CI instead of "toy proxy"
- [#41758](https://github.com/vllm-project/vllm/issues/41758) [Bug]: ngram speculative decoding changes greedy output on Qwen3-0.6B / A100
- [#41899](https://github.com/vllm-project/vllm/issues/41899) [Bug]: Qwen3OmniMoeThinkerForConditionalGeneration does not support LoRA yet
- [#41962](https://github.com/vllm-project/vllm/issues/41962) [ROCm] DeepSeek-V4-Flash: rocm_dequantize_blocked_k_cache materializes entire KV cache pool causing OOM during decode
- [#42016](https://github.com/vllm-project/vllm/issues/42016) [Bug]: vLLM producing incorrect output for GLM-OCR
- [#56646](https://github.com/vllm-project/vllm/issues/56646) 2-node TP: MambaModelConfig's derived mamba_cache_mode never reaches the remote rank — cross-worker KV-spec assert with --enable-prefix-caching on hybrid GDN/mamba models
- [#45533](https://github.com/vllm-project/vllm/issues/45533) [Bug]: minimax M3MXFP8 with --kv-cache-dtype fp8 can not start success
- [#42014](https://github.com/vllm-project/vllm/issues/42014) [Bug]: google/gemma-4-E2B-it text-only mode seems uses more VRAM than multimodal-mode
- [#55683](https://github.com/vllm-project/vllm/issues/55683) [Feature]: LoRA support for deepseek v4 flash vision
- [#55856](https://github.com/vllm-project/vllm/issues/55856) [Bug] v0.20.2 empty build incompatible with V1 engine (missing vllm._C)
- [#42023](https://github.com/vllm-project/vllm/issues/42023) [Bug]: MooncakeConnector may auto-select the wrong host IP when VLLM_HOST_IP is unset on multi-homed hosts
- [#56702](https://github.com/vllm-project/vllm/issues/56702) [Bug]: DeepSeek-V4.1-Flash cannot start on SM120 — sm_120 missing from kernel-block-size branches, and prefill SWA width ignores --language-model-only

### SGLang (`sgl-project/sglang`)

**Stars:** 35,910 · **Open issues:** 5,292 · **Last push:** <1h ago

On September 14, 2026, there were no new releases for SGLang; however, significant development activity was reflected in the merged pull requests. Notable changes included the update of the sgl-kernel to version 0.4.7, and enhancements in DeepSeek-V4.1, including improved buffer prefetching in HiCache and refactoring in the unified cache components. Key bug fixes addressed issues with multimodal embedding cache retention and a malfunction in routing for various models due to canceled requests. Additionally, a critical new issue emerged related to an unreachable MoE deferred finalize for models providing their own routing, which could impact model performance and reliability.

#### ✅ Merged PRs
- [#39324](https://github.com/sgl-project/sglang/pull/39324) chore: bump sgl-kernel version to 0.4.7
- [#39171](https://github.com/sgl-project/sglang/pull/39171) [DeepSeek-V4.1] Bump FlashMLA to the fork's rebase head (v4.1 kernels)
- [#38483](https://github.com/sgl-project/sglang/pull/38483) [HiCache] Release buffer prefetch anchor locks during storage cleanup
- [#39259](https://github.com/sgl-project/sglang/pull/39259) fix(router): simplify bucket context limit check
- [#39123](https://github.com/sgl-project/sglang/pull/39123) [DSV4.1] Paged KV cache layouts for FlashMLA's V4.1 fp8 / fp4 formats
- [#39305](https://github.com/sgl-project/sglang/pull/39305) [dsv4.1] Exact bf16 consumer top-k adapted from DeepSelect
- [#36141](https://github.com/sgl-project/sglang/pull/36141) [PD] Add /v1/responses support to the HTTP PD router
- [#35644](https://github.com/sgl-project/sglang/pull/35644) [mem_cache][10/N] refactor: drop the redundant _component suffix in unified_cache/components
- [#39122](https://github.com/sgl-project/sglang/pull/39122) [PD][OpenAI] Gate /v1/responses persistence behind --enable-response-store, default off
- [#39291](https://github.com/sgl-project/sglang/pull/39291) [Diffusion] Make the SP sequence gather pass contiguous shards
- [#39292](https://github.com/sgl-project/sglang/pull/39292) [Diffusion] Don't route an unreadable checkpoint into the native fallback
- [#38682](https://github.com/sgl-project/sglang/pull/38682) chore: add HiSparse coordinator and allocator code owners
- [#37015](https://github.com/sgl-project/sglang/pull/37015) [Test] Add unit test for muse_glimmer_format
- [#38486](https://github.com/sgl-project/sglang/pull/38486) [HiCache] Publish a host store event for storage-prefetch refills
- [#37914](https://github.com/sgl-project/sglang/pull/37914) [Unified Cache][7/N] Support MTP, EAGLE, and DSpark draft KV caches in the external linker
- [#39126](https://github.com/sgl-project/sglang/pull/39126) [Qwen3.8] Enable NVIDIA NVFP4 on DGX Spark with file-backed PLE and PDL router fix
- [#37564](https://github.com/sgl-project/sglang/pull/37564) [AMD][Fix] Fix aiter bpreshuffle GEMM for output sizes it cannot dispatch for qwen3.5 mxfp-attn-fp8-v2 TP4
- [#39255](https://github.com/sgl-project/sglang/pull/39255) [CI] Make diffusion GT generation usable without the publish token, and cover the 5090 lane
- [#38657](https://github.com/sgl-project/sglang/pull/38657) [Diffusion] Set an explicit x264 preset for video output
- [#39136](https://github.com/sgl-project/sglang/pull/39136) [Fix] Preserve GLM tool argument types across JSON Schema unions
- [#39038](https://github.com/sgl-project/sglang/pull/39038) [Session] Work with PD and Fix empty continuations
- [#39120](https://github.com/sgl-project/sglang/pull/39120) Fix multimodal embedding cache retaining full batches through views
- [#39182](https://github.com/sgl-project/sglang/pull/39182) Add a provider hook for prefill-buffer ceilings
- [#39245](https://github.com/sgl-project/sglang/pull/39245) Fix DeepGEMM release MegaMoE validation without RDMA
- [#39252](https://github.com/sgl-project/sglang/pull/39252) [AMD] Add dspark config and agentic workload section for deepseek-v4 model
- [#39180](https://github.com/sgl-project/sglang/pull/39180) Keep graph-pool borrows on their allocation stream
- [#39178](https://github.com/sgl-project/sglang/pull/39178) Expose a capacity check for graph-pool borrows
- [#38549](https://github.com/sgl-project/sglang/pull/38549) [Diffusion] Return Qwen-Image-Layered outputs and preserve CFG2 rounding
- [#38584](https://github.com/sgl-project/sglang/pull/38584) [Diffusion] Optimize Qwen-Image-Edit attention on Hopper

#### 🐛 New Issues
- [#39299](https://github.com/sgl-project/sglang/issues/39299) MoE deferred finalize is unreachable for models that supply their own routing (FLASHINFER_TRTLLM_ROUTED excluded) 💬1
- [#39274](https://github.com/sgl-project/sglang/issues/39274) [Bug] DeepSeek-V4.1: user text containing the image placeholder token is rejected with 400 (encoding_dsv41) 💬1
- [#39311](https://github.com/sgl-project/sglang/issues/39311) [Bug] DeepSeek-V4 checkpoint with fp8 routed experts scores 10pp lower on AIME25 than vLLM (same weights, same node, same harness)
- [#39302](https://github.com/sgl-project/sglang/issues/39302) [Bug] GLM-5.x NoPE MLA (qk_rope_head_dim=0) cannot run on SM120: every DSA sparse-MLA backend is unavailable
- [#39300](https://github.com/sgl-project/sglang/issues/39300) [Bug] Non-causal sliding-window attention is ignored in TorchNativeAttnBackend
- [#39279](https://github.com/sgl-project/sglang/issues/39279) [Feature] Interleaved Prefill Pipeline Parallelism for DeepSeek-V4.1: PP4 x CP2 with Two Virtual Stages per Rank
- [#39277](https://github.com/sgl-project/sglang/issues/39277) [Bug] b12x-vision dev-v4f-2dgx regresses DSV4 history argument encoding from #28035
- [#39271](https://github.com/sgl-project/sglang/issues/39271) [Bug] DP scheduler rank can permanently stop processing requests after a near-KV-capacity request is cancelled
- [#39262](https://github.com/sgl-project/sglang/issues/39262) [Bug] DSparkWorkerV2.forward_batch_generation is missing pp_proxy_tensors — every non-overlap step crashes (always hit for lfm2 + DSpark)
- [#39260](https://github.com/sgl-project/sglang/issues/39260) [Bug] Streaming top_logprobs reports the first token's alternatives for every token in a multi-token chunk

#### 🔒 Closed Issues
- [#29162](https://github.com/sgl-project/sglang/issues/29162) [Bug] GLM-5.2 - pipeline parallel - index out of range
- [#18262](https://github.com/sgl-project/sglang/issues/18262) [Bug] [AITER attention] OOM errors as resolved `max_total_num_tokens` does not take into account the memory requirements from attention backends
- [#31327](https://github.com/sgl-project/sglang/issues/31327) [Feature] Add token-weighted prefix cache hit rate panel to Grafana dashboard
- [#29955](https://github.com/sgl-project/sglang/issues/29955) [Bug] SGLang does not gracefully clean Mooncake HiCache metadata on process termination
- [#29024](https://github.com/sgl-project/sglang/issues/29024) [Bug] Batch API fails with batch tokenizers in multi-tokenizer mode
- [#26439](https://github.com/sgl-project/sglang/issues/26439) [CPU] MiniMax-M2.7: track remaining optimization TODOs
- [#31240](https://github.com/sgl-project/sglang/issues/31240) [Bug] RunAI streamer: get_processor() leaves model_name as raw s3://gs:// URI (incomplete fix of #22715), crashes multimodal models from object storage
- [#31352](https://github.com/sgl-project/sglang/issues/31352) [Docs] Installation mentions sm75 compatibility
- [#31337](https://github.com/sgl-project/sglang/issues/31337) [ROCM] default setting of deepseek-ai/DeepSeek-V4-Pro in MI355X ROCm image (lmsysorg/sglang-rocm:v0.5.14-rocm720-mi35x-20260710)
- [#31309](https://github.com/sgl-project/sglang/issues/31309) [Bug] Forward Pass Metrics crashes on decode batches with seq_lens_cpu=None
- [#31293](https://github.com/sgl-project/sglang/issues/31293) [Bug] Adding the --moe-a2a-backend deepep parameter causes the program to freeze; it runs without it. Does the system require any environment configuration?
- [#31252](https://github.com/sgl-project/sglang/issues/31252) [Bug] HiCache draft KV pool backup crashes with cudaMemcpyBatchAsync invalid argument in PD disaggregation

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 128,116 · **Open issues:** 2,481 · **Last push:** 2h ago

On September 14, 2026, llama.cpp released several new versions, including b10948, which excluded HY_V4 from WebGPU tests, and b10947, which addressed a zero divisor issue in the expert feed-forward network size fallback for nemotron-h. The b10946 release added safeguards for VXE-only repack helpers, while b10930 included a workaround for an NV queuesubmit driver bug in Vulkan. Key merged features included a fallback to F32 on devices lacking BF16 hardware acceleration and an optimization for grammars that improved performance by 1.2x-1.3x. Meanwhile, a significant new issue was raised regarding heap corruption in macOS arm64, highlighting ongoing challenges with the ggml-cpu precompiled header.

#### 🚀 New Releases
- [b10948](https://github.com/ggml-org/llama.cpp/releases/tag/b10948) b10948
- [b10947](https://github.com/ggml-org/llama.cpp/releases/tag/b10947) b10947
- [b10946](https://github.com/ggml-org/llama.cpp/releases/tag/b10946) b10946
- [b10944](https://github.com/ggml-org/llama.cpp/releases/tag/b10944) b10944
- [b10941](https://github.com/ggml-org/llama.cpp/releases/tag/b10941) b10941
- [b10938](https://github.com/ggml-org/llama.cpp/releases/tag/b10938) b10938
- [b10937](https://github.com/ggml-org/llama.cpp/releases/tag/b10937) b10937
- [b10936](https://github.com/ggml-org/llama.cpp/releases/tag/b10936) b10936

#### ✅ Merged PRs
- [#28846](https://github.com/ggml-org/llama.cpp/pull/28846) ggml-cuda: fallback to F32 on device without BF16 hardware acceleration
- [#26885](https://github.com/ggml-org/llama.cpp/pull/26885) [Grammars] Optimization: Single lookup, remove extra copies - 1.2x-1.3x speedup
- [#28835](https://github.com/ggml-org/llama.cpp/pull/28835) Fix typo in test-quant-type-selection for nemotron 3 nano
- [#28855](https://github.com/ggml-org/llama.cpp/pull/28855) tests : exclude HY_V4 from WebGPU test-llama-archs tests
- [#28779](https://github.com/ggml-org/llama.cpp/pull/28779) nemotron-h : guard the expert FFN size fallback against a zero divisor
- [#28775](https://github.com/ggml-org/llama.cpp/pull/28775) ggml-cpu(s390x): guard VXE-only repack helpers
- [#28227](https://github.com/ggml-org/llama.cpp/pull/28227) [SYCL] Fix get mem error
- [#28854](https://github.com/ggml-org/llama.cpp/pull/28854) ci : run editorconfig and code-style checks on ubuntu-slim
- [#28853](https://github.com/ggml-org/llama.cpp/pull/28853) pi : prefer PI_MODEL_NAME env var for model disclosure
- [#28842](https://github.com/ggml-org/llama.cpp/pull/28842) tests : reduce FA test sizes
- [#28839](https://github.com/ggml-org/llama.cpp/pull/28839) ci : remove server-sanitize leftover command
- [#28833](https://github.com/ggml-org/llama.cpp/pull/28833) ci : cap test-backend-ops parallel jobs at 2 and add a 3600s timeout
- [#28830](https://github.com/ggml-org/llama.cpp/pull/28830) vulkan: workaround NV queuesubmit driver bug
- [#28575](https://github.com/ggml-org/llama.cpp/pull/28575) opencl: apply the noshuffle row‐alignment rule to q4_K, q5_K and q8_0 from q6_K (bug fix)

#### 🐛 New Issues
- [#28858](https://github.com/ggml-org/llama.cpp/issues/28858) Eval bug: macOS arm64: heap corruption due to ggml-cpu precompiled header `bug-unconfirmed` 💬1
- [#28834](https://github.com/ggml-org/llama.cpp/issues/28834) Misc. bug: test-quant-type-selection typo re: Nemotron-Nano-3 -> Nemotron-3-Nano `bug-unconfirmed` 💬1
- [#28831](https://github.com/ggml-org/llama.cpp/issues/28831) Eval bug: MiMo-V2.5-Pro fails to load with hparam error `bug-unconfirmed` 💬1
- [#28829](https://github.com/ggml-org/llama.cpp/issues/28829) Misc. bug: router (--models-max 1) hard-deadlocks on a request for a non-resident preset - 500 "resource deadlock would occur" until restart 💬1
- [#28867](https://github.com/ggml-org/llama.cpp/issues/28867) Eval bug: gfx1201 head-size-256 WMMA FA dispatch threshold too low — ~20% speculative-decoding regression since #28102
- [#28863](https://github.com/ggml-org/llama.cpp/issues/28863) Research: ROCm/gfx1100: Qwen3.8-27B Q4_K_XL batch-1 tensor-split decode reaches only 1.31x one card, with per-card DRAM utilisation falling from 66% to 43% `research 🔬`
- [#28862](https://github.com/ggml-org/llama.cpp/issues/28862) Eval bug: UGM tokenizer ignores byte_fallback and emits UNK `bug-unconfirmed`
- [#28860](https://github.com/ggml-org/llama.cpp/issues/28860) Eval bug: SYCL demands extreme scratchpad allocation (2GB+) when ngram-mod is enabled `bug-unconfirmed`
- [#28848](https://github.com/ggml-org/llama.cpp/issues/28848) Eval bug: Server accepts/queues a prompt far exceeding --ctx-size and hard-fails instead of truncating (783k > 262k tokens, likely reasoning-content re-injection) `bug-unconfirmed`
- [#28844](https://github.com/ggml-org/llama.cpp/issues/28844) Compile bug: Bug regarding abnormal output of the dflash2 model `bug-unconfirmed`
- [#28843](https://github.com/ggml-org/llama.cpp/issues/28843) Feature Request: Vulkan: retune coopmat/MMQ tiles for RDNA3.5 / Strix Halo prefill `enhancement`
- [#28841](https://github.com/ggml-org/llama.cpp/issues/28841) Feature Request: skip redundant recurrent-state gather when n_rs == 1 && n_seqs == 1 `enhancement`
- [#28840](https://github.com/ggml-org/llama.cpp/issues/28840) Eval bug: Vulkan device lost (crash) when processing images — CLIP graph flash-attention auto-enabled on unsupported backend `bug-unconfirmed`
- [#28838](https://github.com/ggml-org/llama.cpp/issues/28838) Compile bug: `bug-unconfirmed`
- [#28828](https://github.com/ggml-org/llama.cpp/issues/28828) Eval bug: [Perf][HIP/RDNA3] IQ4_XS prefill collapses at ~32K prompt length `bug-unconfirmed`

#### 🔒 Closed Issues
- [#26282](https://github.com/ggml-org/llama.cpp/issues/26282) Eval bug: llama-server --embedding got Corrupted Data, quality decline
- [#25876](https://github.com/ggml-org/llama.cpp/issues/25876) Eval bug: ggml-hexagon HMX produces garbled output on Snapdragon 8 Elite (SM8850, v81)
- [#25890](https://github.com/ggml-org/llama.cpp/issues/25890) rpc: model load serializes read + hash + dispatch on one host core; 535GB load takes ~15 min while NIC and 95 cores idle
- [#26128](https://github.com/ggml-org/llama.cpp/issues/26128) Misc. bug: server prompt cache is incompatible with the RPC backend — GGML_ASSERT(tensor->data != NULL) in prompt_save() → state_seq_get_data(), triggered as soon as -np > 1
- [#26305](https://github.com/ggml-org/llama.cpp/issues/26305) Feature Request: Add support for Escha-W2 (2-bit) quantization format
- [#26312](https://github.com/ggml-org/llama.cpp/issues/26312) Eval bug: Hy3 no thinking
- [#26339](https://github.com/ggml-org/llama.cpp/issues/26339) Dspark model fails to load with -sm tensor on MI50
- [#26340](https://github.com/ggml-org/llama.cpp/issues/26340) Compile bug: Problem with no matching function for call to ‘std::vector<nlohmann::json_abi..
- [#28834](https://github.com/ggml-org/llama.cpp/issues/28834) Misc. bug: test-quant-type-selection typo re: Nemotron-Nano-3 -> Nemotron-3-Nano
- [#26309](https://github.com/ggml-org/llama.cpp/issues/26309) Misc. bug: server: post /tokenize "parse_special": false is not being respected (b10147)
- [#26314](https://github.com/ggml-org/llama.cpp/issues/26314) Eval bug: gibberish output while inferencing on gpu
- [#26315](https://github.com/ggml-org/llama.cpp/issues/26315) Misc. bug: server: /slots?action=save follows a symlink out of --slot-save-path and overwrites the target
- [#26325](https://github.com/ggml-org/llama.cpp/issues/26325) llama-server.exe (Windows MSVC) returns 500 on CJK output — invalid UTF-8 in JSON response
- [#26330](https://github.com/ggml-org/llama.cpp/issues/26330) Misc. bug: test-quant-type-selection --generate returns HTTP 401
- [#26335](https://github.com/ggml-org/llama.cpp/issues/26335) [feature request] moe optimizations on ssd

### Ollama (`ollama/ollama`)

**Stars:** 180,838 · **Open issues:** 3,993 · **Last push:** 2d ago

On September 14, 2026, Ollama saw no new releases or merged pull requests, indicating a routine day for the development team. However, the community sparked several new issues, including #18427, which requests the addition of the Gnani Evon-v3.3 model, and #18426 that reports a crash (HTTP 500) in kimi-k3:cloud when processing image content in tool-role messages, a regression from the previous version. Another notable issue is #18431, concerning the Anthropic compatibility where system-role messages within `messages` are improperly hoisted into the system block, potentially impacting the prefix cache functionality. Overall, while the day lacked releases or significant developments, these emerging issues suggest areas for future attention and improvement.

#### 🐛 New Issues
- [#18429](https://github.com/ollama/ollama/issues/18429) Hi Ollama 💬1
- [#18427](https://github.com/ollama/ollama/issues/18427) Request to add Gnani Evon-v3.3 `model` 💬1
- [#18431](https://github.com/ollama/ollama/issues/18431) Anthropic-compat: system-role messages inside `messages` are hoisted into the system block, defeating the prefix cache (Claude Code)
- [#18430](https://github.com/ollama/ollama/issues/18430) qwen3-coder: extra tool schema keys render in random order, so identical requests miss the prompt cache
- [#18426](https://github.com/ollama/ollama/issues/18426) kimi-k3:cloud crashes (HTTP 500) on image content in tool-role messages — regression from kimi-k2.6 + glm-5.3-flash both work
- [#18425](https://github.com/ollama/ollama/issues/18425) Docker SBX Support for ollama integration agents `feature request`
- [#18421](https://github.com/ollama/ollama/issues/18421) Qwen3-Coder tool parser changes number arguments outside int64 range
- [#18419](https://github.com/ollama/ollama/issues/18419) /api/codex/v1/responses silently returns empty completion for previous_response_id tool follow-up
- [#18418](https://github.com/ollama/ollama/issues/18418) [BUG]: Model sees rotated images `bug`

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,648 · **Open issues:** 5,009 · **Last push:** <1h ago

Today, LiteLLM released version 1.102.0-rc.1, with a focus on enhancing security through the verification of Docker image signatures using cosign, along with a consistent signing key from a previous commit. There were no merged pull requests in the last 24 hours, but several new issues have emerged, including a significant bug (#41017) where the gpt-5.6-sol provider returns an empty output despite streaming content. Other notable issues raised include configurable deployment and credential database reload intervals as a feature request (#40972), and multiple bugs related to duplicate index values and User-Agent header lookups. Overall, the day involved routine updates with an emphasis on the new release and some critical bugs warranting attention.

#### 🚀 New Releases
- [v1.102.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.1) v1.102.0-rc.1

#### 🐛 New Issues
- [#41017](https://github.com/BerriAI/litellm/issues/41017) chatgpt/ provider: gpt-5.6-sol response.completed has empty output[] despite streamed content, raises "Unknown items in responses API response: []" `llm translation` `potential-duplicate` 💬2
- [#40972](https://github.com/BerriAI/litellm/issues/40972) [Feature]: Configurable deployment and credential database reload intervals 💬1
- [#41002](https://github.com/BerriAI/litellm/issues/41002) [Bug]: /v1/embeddings returns duplicate "index" values when a batch mixes cached and uncached inputs `llm translation` 💬1
- [#40979](https://github.com/BerriAI/litellm/issues/40979) [Bug]: case-insensitive User-Agent header lookup in _get_user_agent_tags `bug` 💬1
- [#41009](https://github.com/BerriAI/litellm/issues/41009) chatgpt/ provider: gpt-5.6-sol response.completed has empty output[] despite streamed content, raises "Unknown items in responses API response: []" `llm translation`
- [#41003](https://github.com/BerriAI/litellm/issues/41003) [Bug]: cache_params.supported_call_types does not disable caching for /v1/embeddings `llm translation`

#### 🔒 Closed Issues
- [#25532](https://github.com/BerriAI/litellm/issues/25532) WebSocket /v1/responses requires ?model= query param, breaking OpenAI spec compatibility
- [#28464](https://github.com/BerriAI/litellm/issues/28464) [Bug]: Model access check ignores access_group_ids assigned directly to a Virtual Key
- [#29810](https://github.com/BerriAI/litellm/issues/29810) [Bug] cache_control_injection_points on /v1/responses: no-op for caching AND triggers a deterministic Claude tool-call loop until MaxTurns
- [#29922](https://github.com/BerriAI/litellm/issues/29922) Missing pricing for DashScope Qwen 3.6/3.7 models
- [#29011](https://github.com/BerriAI/litellm/issues/29011) [Bug]: SambaNova cost map is stale/incorrect (deprecated models, wrong pricing/context, missing models)
- [#29913](https://github.com/BerriAI/litellm/issues/29913) [Bug]: Streaming /v1/responses success logger crashes with "'dict' object has no attribute 'usage'" → no spend log written, request goes uncharged
- [#41017](https://github.com/BerriAI/litellm/issues/41017) chatgpt/ provider: gpt-5.6-sol response.completed has empty output[] despite streamed content, raises "Unknown items in responses API response: []"
- [#39354](https://github.com/BerriAI/litellm/issues/39354) [Bug]: Responses-to-Chat bridge keeps reasoning_effort dict when summary is set; strict OpenAI-compatible providers reject it (Codex CLI unusable)
- [#29911](https://github.com/BerriAI/litellm/issues/29911) Information Disclosure - litellm-unauth-model-exposure
- [#29916](https://github.com/BerriAI/litellm/issues/29916) Request Logs: Session sidebar shows oldest requests at top, newest at bottom — no way to change sort order
- [#29921](https://github.com/BerriAI/litellm/issues/29921) [Feature]: Custom Pass Through Endpoints: do not support RPM limits or maximum concurrent requests.
- [#29937](https://github.com/BerriAI/litellm/issues/29937) [Bug]: Prometheus endpoint not show the remaining budget
- [#29955](https://github.com/BerriAI/litellm/issues/29955) [Feature]: per-team scoping for the response cache (prevent cross-tenant cache reuse)
- [#29973](https://github.com/BerriAI/litellm/issues/29973) [Bug]: /ui/login makes unauthenticated admin API calls that are exported as error traces

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,118 · **Open issues:** 1,387 · **Last push:** <1h ago

On September 14, 2026, there were no new releases for Unsloth, but several significant pull requests were merged that enhance the platform's functionality. Notably, adjustments were made to the Studio with features like allowing agents to rerun commands after editing files (#10810), pre-filling MLX VLM prompts properly (#10778), and adding a "Download all logs" button under Settings (#10719). Bug fixes included addressing issues with ASCII character deletion in clean_text (#10741) and modifying the metadata directory cache scanning process (#10797). Additionally, a new high-priority bug was opened regarding the failure of XPU replacement (#10844), indicating ongoing challenges in this area.

#### ✅ Merged PRs
- [#10846](https://github.com/unslothai/unsloth/pull/10846) Let a duplicate tool call re-run after an intervening call (#10792)
- [#10741](https://github.com/unslothai/unsloth/pull/10741) Stop clean_text deleting every non-ASCII character
- [#10812](https://github.com/unslothai/unsloth/pull/10812) Studio: Stop at the requested stop text on transformers models
- [#10810](https://github.com/unslothai/unsloth/pull/10810) Studio: Let the agent run a command again after it edits a file
- [#10811](https://github.com/unslothai/unsloth/pull/10811) Studio: Show an error when Anthropic fails a reply partway through
- [#10808](https://github.com/unslothai/unsloth/pull/10808) Studio: Export a full fine-tune as a real 16-bit model
- [#10809](https://github.com/unslothai/unsloth/pull/10809) Studio: Keep API keys from training with the server's Hugging Face login
- [#10797](https://github.com/unslothai/unsloth/pull/10797) Clear the metadata directory cache before scanning installed records
- [#10867](https://github.com/unslothai/unsloth/pull/10867) Speed up the three slowest tests without changing what they check
- [#10719](https://github.com/unslothai/unsloth/pull/10719) Studio: add a Download all logs button to Settings > Logs
- [#10868](https://github.com/unslothai/unsloth/pull/10868) Pair the linearity measurements, so a busy runner stops reading as quadratic
- [#10778](https://github.com/unslothai/unsloth/pull/10778) Studio: prefill MLX VLM prompts at mlx-vlm's default step, fix cold-path position ids
- [#10866](https://github.com/unslothai/unsloth/pull/10866) Ask the spoof-survival question in a subprocess, not in the worker
- [#10650](https://github.com/unslothai/unsloth/pull/10650) Studio: rebuild only the transformers sidecar that is actually stale
- [#10721](https://github.com/unslothai/unsloth/pull/10721) Studio: stop the log redactor backtracking quadratically on a cut ANSI sequence
- [#10720](https://github.com/unslothai/unsloth/pull/10720) Studio: read the NVLink fabric from NVML instead of a 1.2s nvidia-smi shell-out
- [#10864](https://github.com/unslothai/unsloth/pull/10864) Stop the CUDA spoof from deciding whether a GPU test skips
- [#10857](https://github.com/unslothai/unsloth/pull/10857) Studio: accept zero-based shard numbering in cached model weights
- [#10625](https://github.com/unslothai/unsloth/pull/10625) Studio: keep a stopped prompt in later chat turns
- [#10862](https://github.com/unslothai/unsloth/pull/10862) Give Repo tests (CPU) a budget it fits in, and name the patcher when it falls back
- [#10858](https://github.com/unslothai/unsloth/pull/10858) Track vLLM tags through 0.29, and pin the bitsandbytes symbols
- [#10685](https://github.com/unslothai/unsloth/pull/10685) fix: do not default-on tool-call nudging on the external loop
- [#10681](https://github.com/unslothai/unsloth/pull/10681) Use the short RoPE factor at exactly original_max_position_embeddings
- [#10588](https://github.com/unslothai/unsloth/pull/10588) Studio: per-account isolation for shared installs and the desktop app
- [#10715](https://github.com/unslothai/unsloth/pull/10715) Re-format the two lines that drifted, so pre-commit stops failing on main
- [#10855](https://github.com/unslothai/unsloth/pull/10855) Ask the vllm-free import tests in a clean interpreter, not in sys.modules
- [#10854](https://github.com/unslothai/unsloth/pull/10854) Stop a comment in unsloth_zoo from silently disabling the patched SFT trainer

#### 🐛 New Issues
- [#10844](https://github.com/unslothai/unsloth/issues/10844) [Bug] Fix for XPU replacement still fails. `feature request` `bug` 💬1
- [#10881](https://github.com/unslothai/unsloth/issues/10881) Training for Krea2 LORA `feature request`
- [#10877](https://github.com/unslothai/unsloth/issues/10877) [Feature] add these fields please so I do not have to override in extra args `feature request`
- [#10875](https://github.com/unslothai/unsloth/issues/10875) [Bug] Windows ARM64 desktop installer fails on pyarrow while CLI succeeds `feature request` `bug`
- [#10873](https://github.com/unslothai/unsloth/issues/10873) [Feature] Support folder-based projects `feature request`
- [#10872](https://github.com/unslothai/unsloth/issues/10872) [Feature] Steam-like multi-drive model library management `feature request`
- [#10853](https://github.com/unslothai/unsloth/issues/10853) [BUG] [Studio] Training a local HF-cache model fails with "The selected local model does not contain trainable weights." — weight filenames are matched by an allowlist that misses `model-00000-of-00001.safetensors` `feature request` `bug`
- [#10859](https://github.com/unslothai/unsloth/issues/10859) [Bug] Installer ignores chosen folder and installs dependencies in ~/.unsloth `feature request` `bug`

#### 🔒 Closed Issues
- [#10785](https://github.com/unslothai/unsloth/issues/10785) SFTConfig.__init__() got an unexpected keyword argument 'max_seq_length'
- [#10792](https://github.com/unslothai/unsloth/issues/10792) [Unsloth Bug] Duplicate tool-call guard blocks re-running a command after files changed (e.g. re-running tests after an edit)
- [#10853](https://github.com/unslothai/unsloth/issues/10853) [BUG] [Studio] Training a local HF-cache model fails with "The selected local model does not contain trainable weights." — weight filenames are matched by an allowlist that misses `model-00000-of-00001.safetensors`
- [#9686](https://github.com/unslothai/unsloth/issues/9686) studio: revisit default-on tool-call nudging, starting with the external loop

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,086 · **Open issues:** 378 · **Last push:** 5h ago

On September 14, 2026, there were no new releases for AIBrix. The significant developments included the merging of PR #2717, which addresses a bug related to running-request count drift caused by concurrent pod deletion and re-addition races, as well as PR #2710, which removes the cap on maximum loading retries in the model adapter. Additionally, PR #2716 introduced regression coverage for the Gateway Plugin integration, enhancing the testing framework. Overall, it was a routine maintenance day with a focus on improving stability and functionality in ongoing development.

#### ✅ Merged PRs
- [#2717](https://github.com/vllm-project/aibrix/pull/2717) [Bug] Fix running-request count drift from concurrent pod delete/re-add races
- [#2710](https://github.com/vllm-project/aibrix/pull/2710) fix(modeladapter): drop max loading retries cap
- [#2716](https://github.com/vllm-project/aibrix/pull/2716) [TEST] Add Gateway Plugin integration regression coverage

#### 🔒 Closed Issues
- [#2638](https://github.com/vllm-project/aibrix/issues/2638) An error occurs when aibrix calls the model, gateway_rsp_body.go: "{\\\"error\\\":{\\\"code\\\":null,\\\"message\\\":\\\"malformed JSON in SSE stream\\\",\\\"param\\\":null,\\\"type\\\":\\\"api_error\\\"}}\"}"

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,782 · **Open issues:** 544 · **Last push:** <1h ago

On September 14, 2026, there were no new releases for Semantic Router, but several significant pull requests were merged. Notably, PR #3768 introduced ownership of model instances and typed bindings across router generations, enhancing modularity and flexibility. Additionally, PR #3770 improved performance reporting by adding metrics for routing split, cost, and routing time during benchmarks. However, a major concern arose with new issue #3780, which reported failures in remote-embedding and routing-strategies end-to-end profiles after the recent changes, highlighting the ongoing challenges in maintaining compatibility across updates.

#### ✅ Merged PRs
- [#3774](https://github.com/vllm-project/semantic-router/pull/3774) [CI/Build] Build the perf module against current router APIs and guard its go.mod in check-go-mod-tidy
- [#3775](https://github.com/vllm-project/semantic-router/pull/3775) [Docs] Restore current zh-Hans documentation coverage
- [#3760](https://github.com/vllm-project/semantic-router/pull/3760) [Bug] Preserve routing, Looper, training and deployment contracts
- [#3768](https://github.com/vllm-project/semantic-router/pull/3768) [Feature] Own model instances and typed bindings across router generations
- [#3730](https://github.com/vllm-project/semantic-router/pull/3730) [Feature] Report routing split, cost, and routing time in bench

#### 🐛 New Issues
- [#3780](https://github.com/vllm-project/semantic-router/issues/3780) [Bug] remote-embedding and routing-strategies E2E profiles fail on main after #3768 and #3760 `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬3
- [#3778](https://github.com/vllm-project/semantic-router/issues/3778) [Docs] Show built-in catalog providers on the README `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3773](https://github.com/vllm-project/semantic-router/issues/3773) [Bug] perf module does not build against main: stale go.mod and removed cache.InitEmbeddingModels `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3784](https://github.com/vllm-project/semantic-router/issues/3784) [Bug] vllm-sr images are not published from main `needs-acceptance` `wg/enterprise-environment`
- [#3782](https://github.com/vllm-project/semantic-router/issues/3782) [Bug] The Presidio dataset download URL returns 404 `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#3773](https://github.com/vllm-project/semantic-router/issues/3773) [Bug] perf module does not build against main: stale go.mod and removed cache.InitEmbeddingModels
- [#3221](https://github.com/vllm-project/semantic-router/issues/3221) [Docs] Restore zh-Hans coverage for API, benchmarking, training, and tutorials
- [#3220](https://github.com/vllm-project/semantic-router/issues/3220) [Docs] Restore zh-Hans coverage for core, installation, troubleshooting, and community docs
- [#3727](https://github.com/vllm-project/semantic-router/issues/3727) [Feature] Report routing split, cost, and routing time consistently in bench

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*