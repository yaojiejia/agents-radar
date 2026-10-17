# 📡 AI Ecosystem Digest — 2026-10-17

> Generated 2026-10-17 01:07 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 151,251 | 16 | 15 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 129,542 | 28 | 2 | 28 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,412 | 0 | 0 | 6 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,261 | 10 | 4 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 214,360 | 30 | 11 | 8 | 3 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,528 | 25 | 17 | 6 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,199 | 122 | 117 | 237 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 254,436 | 20 | 5 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,949 | 24 | 33 | 34 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,227 | 18 | 11 | 32 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 131,425 | 16 | 43 | 30 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 183,500 | 7 | 5 | 3 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,400 | 40 | 19 | 107 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,134 | 10 | 2 | 96 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,145 | 5 | 0 | 19 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,202 | 9 | 17 | 18 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) bringing updates to its functionality.
- **OpenAI Codex** had multiple releases, including [rust-v0.164.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.2) and [rust-v0.164.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.1).
- **OpenCode** successfully released [v1.19.3](https://github.com/anomalyco/opencode/releases/tag/v1.19.3), enhancing its performance and features.
- A significant new issue in **OpenCode** relates to the [model switch not refreshing](https://github.com/anomalyco/opencode/issues/56212), which has already garnered 10 comments.
- **vLLM** reported a notable new issue concerning [leading newlines in content](https://github.com/vllm-project/vllm/issues/61972), which has attracted considerable attention from users with 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 151,251 · **Open issues:** 15,115 · **Last push:** 4h ago

On October 17, 2026, Claude Code released version v2.1.302, which introduced several enhancements, including the `CLAUDE_CODE_AUTO_MODE_MODEL` for selecting the client-side auto mode classifier model and the addition of an `Idle compaction` control in the `/config` endpoint. Notably, no pull requests were merged on this day. Among the new issues, #102875 raised concerns about the Bash `grep` utility dropping subdirectory files during recursive searches, particularly when .gitignore files begin with an asterisk, sparking discussion within the community. Other issues address a variety of bugs and enhancements, including problems with project routines and safeguards in version Opus 5.5.

#### 🚀 New Releases
- [v2.1.302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) v2.1.302

#### 🐛 New Issues
- [#102875](https://github.com/anthropics/claude-code/issues/102875) Bash `grep` shadow silently drops subdirectory files for a recursive search rooted at a directory whose .gitignore starts with `*` — including files git does NOT ignore `bug` `has repro` `platform:macos` `area:bash` 💬2
- [#102889](https://github.com/anthropics/claude-code/issues/102889) [Model behavior] Release task expanded with an unrequested docs PR and piecemeal pushes, turning 1 CI run into 4 `bug` `platform:macos` `area:model` 💬1
- [#102888](https://github.com/anthropics/claude-code/issues/102888) [GitHub integration] `bug` `platform:web` `github-integration` 💬1
- [#102884](https://github.com/anthropics/claude-code/issues/102884) [Bug] Opus 5.5 safeguards block reading Basic Memory notes at user request `bug` `platform:windows` `area:model` `area:mcp` 💬1
- [#102874](https://github.com/anthropics/claude-code/issues/102874) Routines API: firing a Project's routine returns 403 "this project is paused" although the Project is active `bug` `platform:web` `area:routines` 💬1
- [#102887](https://github.com/anthropics/claude-code/issues/102887) [FEATURE] Allow reentering planning with an existing plan file `enhancement` `area:core` `area:cli`
- [#102886](https://github.com/anthropics/claude-code/issues/102886) [Bug] Claude response gets stuck in infinite loop printing <br> tags `bug` `platform:macos` `area:model`
- [#102885](https://github.com/anthropics/claude-code/issues/102885) security-guidance: reuse a completed agentic review when the same diff is reviewed again `enhancement` `area:plugins`
- [#102883](https://github.com/anthropics/claude-code/issues/102883) [Bug] Prompt cache TTL downgraded to 5 minutes near weekly quota limit `bug` `platform:macos` `area:cost`
- [#102882](https://github.com/anthropics/claude-code/issues/102882) [BUG] Mods: when a focused Input leaves a pane, the focus ring moves to the next Button unannounced, drawn just like hover `bug` `platform:macos` `area:tui` `area:plugins`
- [#102881](https://github.com/anthropics/claude-code/issues/102881) [BUG] teammateMode in settings accepts any value with no warning, while --teammate-mode and permissions.defaultMode reject bad values `bug` `has repro` `platform:macos` `area:core`
- [#102880](https://github.com/anthropics/claude-code/issues/102880) [FEATURE] Emit a JSON Schema for the stream-json protocol from the binary, like `codex app-server generate-json-schema` `enhancement` `area:api` `area:cli`
- [#102879](https://github.com/anthropics/claude-code/issues/102879) [Bug] Opus 5.5 false-positive [cyber] safeguard block on simple greeting `bug` `duplicate` `platform:macos` `area:model`
- [#102878](https://github.com/anthropics/claude-code/issues/102878) [FEATURE] Hook event when a session is deleted, so plugins can clean up per-session data `enhancement` `area:hooks` `area:plugins`
- [#102877](https://github.com/anthropics/claude-code/issues/102877) [BUG] Auto-fix classifies bot status comments as review feedback `bug` `platform:macos` `area:desktop`
- [#102876](https://github.com/anthropics/claude-code/issues/102876) [FEATURE] Show plan execution progress like the usage meter, e.g. `plan 43% (3/7)` `enhancement` `area:statusline`

#### 🔒 Closed Issues
- [#84966](https://github.com/anthropics/claude-code/issues/84966) [BUG] Windows: Glob returns "No files found" for existing files when path arg contains non-ASCII (Korean) chars and pattern has a directory segment — deterministic per executor process from spawn
- [#85595](https://github.com/anthropics/claude-code/issues/85595) Project identity resolved inconsistently: memory and /resume key on git repo root, transcripts key on cwd
- [#99132](https://github.com/anthropics/claude-code/issues/99132) [BUG] Deadlock after a few turns under FreeBSD Linuxulator (Remote-SSH): JSC concurrent GC, regression after 2.1.281
- [#89116](https://github.com/anthropics/claude-code/issues/89116) [Bug] Tool made destructive changes without validation checks
- [#89113](https://github.com/anthropics/claude-code/issues/89113) [BUG] Windows desktop app: agent tool writes creating new entries at the %APPDATA% / %LOCALAPPDATA% root silently land in the MSIX container
- [#89106](https://github.com/anthropics/claude-code/issues/89106) [BUG] [Bug/Billing] Multiple Claude Max Gift Cards converted to flat credit instead of stacking duration, resulting in financial loss
- [#102889](https://github.com/anthropics/claude-code/issues/102889) [Model behavior] Release task expanded with an unrequested docs PR and piecemeal pushes, turning 1 CI run into 4
- [#102028](https://github.com/anthropics/claude-code/issues/102028) Desktop app: file card for an edited non-git file opens an empty "Changes need a Git repository" pane instead of the file
- [#89119](https://github.com/anthropics/claude-code/issues/89119) [Bug] Inappropriate model escalation to Opus for non-threat code review task
- [#89118](https://github.com/anthropics/claude-code/issues/89118) [BUG] /stats heatmap month labels are evenly spaced, drifting up to 3 columns from the weeks they label (a month can appear empty)
- [#89117](https://github.com/anthropics/claude-code/issues/89117) VSCode extension: AskUserQuestion popup corrupts Korean (Hangul) text
- [#89114](https://github.com/anthropics/claude-code/issues/89114) Fable 5 ignored month-old standing rule to delegate implementation to Opus subagents; heavy unauthorized Fable usage (user demands refund review)
- [#89111](https://github.com/anthropics/claude-code/issues/89111) Plugin skill resolution loads a stale cached version despite current registration (headless -p)
- [#89107](https://github.com/anthropics/claude-code/issues/89107) Fable 5 emitted a fabricated "CRITICAL SYSTEM ALERT" prompt-injection payload (incl. rm -rf) inside its own assistant message
- [#99780](https://github.com/anthropics/claude-code/issues/99780) [Feature Request] Support spawning child Claude Code processes for parallel task execution

### OpenAI Codex (`openai/codex`)

**Stars:** 129,542 · **Open issues:** 23,038 · **Last push:** 1h ago

On October 17, 2026, OpenAI Codex saw the release of Rust version 0.164.0-alpha.2, following closely on the heels of 0.164.0-alpha.1, although specific updates in this release cycle were not detailed. Significant merged pull requests included enhancements such as rendering slash command prefixes as composer prompt markers and introducing an opt-in tool for copying files between environments. Additionally, the integration of BuildBuddy for voice release builds and preserving metadata in server status are notable improvements. Among the newly reported issues, a troubling jump in the weekly quota by 67 points for Windows users requires urgent investigation, reflecting operational challenges that need addressing.

#### 🚀 New Releases
- [rust-v0.164.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.2) 0.164.0-alpha.2
- [rust-v0.164.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.1) 0.164.0-alpha.1

#### ✅ Merged PRs
- [#54742](https://github.com/openai/codex/pull/54742) Render slash command prefixes as composer prompt markers
- [#54741](https://github.com/openai/codex/pull/54741) Gate the file-copy extension behind `multi_env_copy_file`
- [#54739](https://github.com/openai/codex/pull/54739) Close arg0 lock files before removing temporary directories
- [#54737](https://github.com/openai/codex/pull/54737) Enable BuildBuddy for voice release builds
- [#54724](https://github.com/openai/codex/pull/54724) Preserve prereleased events when creating GitHub prereleases
- [#54716](https://github.com/openai/codex/pull/54716) Keep prereleases in draft until release assets finish uploading
- [#54710](https://github.com/openai/codex/pull/54710) Move V8's ICU Bazel rules into the workspace
- [#54708](https://github.com/openai/codex/pull/54708) Honor home deletion preferences during Windows uninstall
- [#54686](https://github.com/openai/codex/pull/54686) Preserve MCP tool-list metadata in server status
- [#54681](https://github.com/openai/codex/pull/54681) Keep TUI session selections bound to their backend
- [#54679](https://github.com/openai/codex/pull/54679) Distinguish MCP approval cancellation reasons
- [#54674](https://github.com/openai/codex/pull/54674) Add an opt-in tool for copying files between environments
- [#54672](https://github.com/openai/codex/pull/54672) Use shared Bazel CI preparation for lint and V8 jobs
- [#54664](https://github.com/openai/codex/pull/54664) Distinguish retryable thread-store errors from unknown write outcomes
- [#54656](https://github.com/openai/codex/pull/54656) Honor MCP tool-list changes within a turn
- [#54654](https://github.com/openai/codex/pull/54654) Allow dynamic tool calls to execute in parallel
- [#54653](https://github.com/openai/codex/pull/54653) Prefer resource-specific scopes during MCP OAuth discovery
- [#54647](https://github.com/openai/codex/pull/54647) Make remote-control conflict retry tests deterministic
- [#54641](https://github.com/openai/codex/pull/54641) Retry npm release publishing and match macOS verification runners
- [#54639](https://github.com/openai/codex/pull/54639) Stream rollout records during thread history materialization
- [#54637](https://github.com/openai/codex/pull/54637) Preserve disconnect reasons in Noise handshake errors
- [#54623](https://github.com/openai/codex/pull/54623) Resolve stable releases dynamically for exec-server compatibility tests
- [#54619](https://github.com/openai/codex/pull/54619) Bind plugin hook approval to plugin contents
- [#54590](https://github.com/openai/codex/pull/54590) Capture sender context for `codex_app.create_thread` deliveries
- [#54589](https://github.com/openai/codex/pull/54589) Preserve evidence message structure in Guardian Decisions requests
- [#54519](https://github.com/openai/codex/pull/54519) Upgrade V8 to 152.2.0 and backport Array.sort safety guards
- [#54505](https://github.com/openai/codex/pull/54505) Add streaming file replacement to filesystem abstractions
- [#54475](https://github.com/openai/codex/pull/54475) Use a synchronous mutex for remote metadata request tracking

#### 🐛 New Issues
- [#54677](https://github.com/openai/codex/issues/54677) [Codex Desktop][Windows] Weekly quota jumped 67 points in 38 seconds (Oct 16, 2026; 18:10 UTC) `bug` `windows-os` `rate-limits` `app` 💬4
- [#54477](https://github.com/openai/codex/issues/54477) Windows DOT fresh-task browser launch loses SystemDrive after update; local restricted browser works `bug` `windows-os` `sandbox` `app` 💬6
- [#54735](https://github.com/openai/codex/issues/54735) No permission `bug` `sandbox` `iOS` 💬2
- [#54727](https://github.com/openai/codex/issues/54727) Cloud environment disconnected (409 environment_offline), blocking access to unpublished changes `bug` `app` `connectivity` 💬2
- [#54728](https://github.com/openai/codex/issues/54728) [macOS desktop] Opening a specific existing chat repeatedly crashes renderer, persists after restart and update `bug` `app` `session` 💬2
- [#54718](https://github.com/openai/codex/issues/54718) [Windows Desktop] Weekly allowance abruptly dropped to 0% on Oct 16 UTC; urgent quota-accounting investigation `bug` `windows-os` `rate-limits` `app` 💬2
- [#54691](https://github.com/openai/codex/issues/54691) Desktop Work Mode: reported Full Access task remains workspace-write, blocking Xcode services and Swift macros `bug` `sandbox` `app` 💬2
- [#54751](https://github.com/openai/codex/issues/54751) [Windows → iPhone Remote] History pagination times out and latest messages are missing; thread/items/list returns large image generation records `bug` `windows-os` `iOS` `connectivity` 💬1
- [#54749](https://github.com/openai/codex/issues/54749) Desktop Codex ends a read-only task with “Potentially unintended activity” `bug` `windows-os` `app` `safety-check` 💬1
- [#54746](https://github.com/openai/codex/issues/54746) Codex Windows: CreateProcess Rejected blocked by policy despite Full Access `bug` `windows-os` `sandbox` `app` 💬1
- [#54743](https://github.com/openai/codex/issues/54743) Windows app: project chats intermittently appear under Recents despite project grouping `bug` `windows-os` `app` 💬1
- [#54740](https://github.com/openai/codex/issues/54740) False Positives on Image "Filters" `bug` `app` `imagen` 💬1
- [#54738](https://github.com/openai/codex/issues/54738) [0.163.0][WSL2] Idle daemon locks block --no-daemon recovery; misleading "another app" error and no "Switch here" `bug` `windows-os` `CLI` `app-server` 💬1
- [#54726](https://github.com/openai/codex/issues/54726) ChatGPT APP returned "Fatal error: application network permission was revoked" or still reconnect while staring new chats in work/codex mode `bug` `windows-os` `app` `connectivity` 💬1
- [#54734](https://github.com/openai/codex/issues/54734) constant security refusals on non-security work `bug` `model-behavior` `CLI` 💬1
- [#54733](https://github.com/openai/codex/issues/54733) Windows desktop: enabled Ahrefs and DataForSEO unavailable after codex_apps MCP response decoding failure `bug` `windows-os` `mcp` `app` 💬1
- [#54753](https://github.com/openai/codex/issues/54753) [High priority] ChatGPT MCP OAuth loopback hostname swap causes invalid_grant at token exchange `bug` `auth` `mcp`
- [#54750](https://github.com/openai/codex/issues/54750) [Quota / Full Reset] Oct 17: ~20% drops to 0% before reset; 100% briefly returns then exhausts (reset date Oct 24) `bug` `rate-limits`
- [#54752](https://github.com/openai/codex/issues/54752) Urgent Billing/Account Issue: $100 Credits Depleted in <2 Hours + Unexpected Reset Date Shift `bug` `rate-limits`
- [#54748](https://github.com/openai/codex/issues/54748) Using a third-party API actually consumes my GPT quota. `bug` `windows-os` `rate-limits` `custom-model`
- [#54747](https://github.com/openai/codex/issues/54747) Supported opaque Anthropic key transfer to Windows Credential Manager `documentation` `windows-os` `auth`
- [#54745](https://github.com/openai/codex/issues/54745) [Bug][macOS] Custom accent color does not apply to message bubbles or Send/Voice buttons `bug` `app`
- [#54744](https://github.com/openai/codex/issues/54744) [Bug][macOS][dot] Approximately 10-second input delay when interacting with dot's computer `bug` `app` `performance` `dots`
- [#54736](https://github.com/openai/codex/issues/54736) Native Computer Use getApp() stays in_progress when codex exec is started by a macOS LaunchAgent `bug` `exec` `CLI` `tool-calls`
- [#54732](https://github.com/openai/codex/issues/54732) Composer Predictions: pasting into an empty composer fails until a character is typed `bug` `app`
- [#54730](https://github.com/openai/codex/issues/54730) Hook event when a session is deleted, so plugins can clean up per-session data `enhancement` `CLI` `hooks` `session`
- [#54729](https://github.com/openai/codex/issues/54729) [ChatGPT Web][GPT-6 Pro][Oct 16 update] Long-running multi-agent turn ends around 30 min without final reply; parent/child states diverge `bug` `connectivity` `subagent`
- [#54725](https://github.com/openai/codex/issues/54725) In-app browser annotation outline does not follow component corner geometry `bug` `app` `browser`

#### 🔒 Closed Issues
- [#45566](https://github.com/openai/codex/issues/45566) Why can't I use my 5.3 that's full?!
- [#54727](https://github.com/openai/codex/issues/54727) Cloud environment disconnected (409 environment_offline), blocking access to unpublished changes

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,412 · **Open issues:** 748 · **Last push:** 3h ago

On October 16, 2026, Gemini CLI released version v0.66.0-nightly.20261016.gdebf42324, which includes a series of updates such as updating the changelog for v0.64.0 and improvements to the UI, specifically synchronized output and isolated spinner rendering. Significant merged pull requests include updates to forward termination signals from the bootstrap parent to the child process, support for the 'keys' array in `keybindings.json`, and enhancements to prevent false success regarding active binary updates due to PATH shadowing. Additionally, there was a refinement to reset slash-command conflict deduplication when conflicts reoccur and an update to the README to remove outdated content. No new issues were reported, indicating a routine day of maintenance and improvements.

#### 🚀 New Releases
- [v0.66.0-nightly.20261016.gdebf42324](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261016.gdebf42324) Release v0.66.0-nightly.20261016.gdebf42324

#### ✅ Merged PRs
- [#29790](https://github.com/google-gemini/gemini-cli/pull/29790) fix(cli): forward termination signals from bootstrap parent to child process
- [#29773](https://github.com/google-gemini/gemini-cli/pull/29773) fix(cli): support 'keys' array in keybindings.json
- [#29757](https://github.com/google-gemini/gemini-cli/pull/29757) fix(cli): verify active binary update to prevent PATH shadowing false success
- [#29768](https://github.com/google-gemini/gemini-cli/pull/29768) fix(cli): reset slash-command conflict dedupe when conflicts reappear
- [#29770](https://github.com/google-gemini/gemini-cli/pull/29770) fix(ci): remove unsupported members permission in unassign-inactive-assignees workflow
- [#29775](https://github.com/google-gemini/gemini-cli/pull/29775) Update README to remove obsolete content

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,261 · **Open issues:** 2,208 · **Last push:** 2h ago

On October 17, 2026, GitHub Copilot CLI released version 1.0.100-1, which introduced several enhancements, including the default use of a unified Sessions browser for session management and improved account discovery limits. This version also fixed issues with sandbox host-rule traffic and voice dictation language markers. Additionally, version 1.0.100-0 improved the prompt for updating the sandbox proxy certificate authority, while version 1.0.99-3 added a flag to disable client telemetry uploads and addressed issues with sandboxed shell commands and session stalling. Notably, a new issue has been reported (#5165) concerning 401 errors for Copilot Enterprise accounts when accessing model catalogs, highlighting authentication challenges despite using valid tokens.

#### 🚀 New Releases
- [v1.0.100-1](https://github.com/github/copilot-cli/releases/tag/v1.0.100-1) 1.0.100-1
- [v1.0.100-0](https://github.com/github/copilot-cli/releases/tag/v1.0.100-0) 1.0.100-0
- [v1.0.99-3](https://github.com/github/copilot-cli/releases/tag/v1.0.99-3) 1.0.99-3

#### 🐛 New Issues
- [#5165](https://github.com/github/copilot-cli/issues/5165) 1.0.98: Copilot Enterprise account routed to api.business.githubcopilot.com — 401 on model catalog, 'Authentication failed' despite valid token `triage` 💬1
- [#5173](https://github.com/github/copilot-cli/issues/5173) Bash commands that `cd` into a directory created in the same command are hard-denied without a prompt ("unusable session working directory") since 1.0.99-0 `triage`
- [#5172](https://github.com/github/copilot-cli/issues/5172) Rewind file tracking backs up gitignored secret files; add an exclude or an off switch `triage`
- [#5171](https://github.com/github/copilot-cli/issues/5171) NumLock-off numpad navigation and Delete are ignored `triage`
- [#5170](https://github.com/github/copilot-cli/issues/5170) P3 - container-runtime/copilot-runtime-bazel-cache-memory-usage-vs-limits-dotcom on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-2-gc-cus-02,kube_container_name:copilot-runtime-bazel-cache,kube_deployment:copilot-r... - 2026-10-16T17:35Z `source:datadog` `catalog_service:copilot-runtime-bazel-cache` `CRITICAL`
- [#5169](https://github.com/github/copilot-cli/issues/5169) P3 - container-runtime/copilot-runtime-bazel-cache-memory-usage-vs-limits-dotcom on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-1-gc-cus-02,kube_container_name:copilot-runtime-bazel-cache,kube_deployment:copilot-r... - 2026-10-16T17:32Z `triage` `source:datadog` `catalog_service:copilot-runtime-bazel-cache` `CRITICAL`
- [#5168](https://github.com/github/copilot-cli/issues/5168) Markdown line breaks in table cells stripped from output `triage`
- [#5167](https://github.com/github/copilot-cli/issues/5167) Uninstallation of plugin is throwing hook issue even after hooks directory removed `triage`
- [#5166](https://github.com/github/copilot-cli/issues/5166) CLI 1.0.97 starts a model outside the exact repository allowlist during a prompt-mode turn `triage`
- [#5164](https://github.com/github/copilot-cli/issues/5164) Switching sessions in the Sessions sidebar leaks plugin MCP servers and extension hosts (OOM) `triage`

#### 🔒 Closed Issues
- [#1506](https://github.com/github/copilot-cli/issues/1506) Agents folder setting support
- [#4015](https://github.com/github/copilot-cli/issues/4015) Theme setting not remembered
- [#4796](https://github.com/github/copilot-cli/issues/4796) Desktop app 1.1.17: COPILOT_ENTRA_AUTH_AUD (EMU audience) breaks MCP Entra sign-in with ENTRA_CONFIG 2002 - CLI on the same machine works
- [#4152](https://github.com/github/copilot-cli/issues/4152) Add j/k navigation for multiple-choice prompt UI in the CLI

### OpenCode (`anomalyco/opencode`)

**Stars:** 214,360 · **Open issues:** 4,507 · **Last push:** <1h ago

Today, OpenCode released versions v1.19.3 and v1.19.2, with the major improvement in v1.19.3 focusing on configuring model reasoning options to generate reasoning variants, while v1.19.2 addressed critical bug fixes such as ensuring that installations on the 1.x release line will only receive updates within that line, and streamlining upgrades for yarn-managed installs. Among the significant merged pull requests, #55665 refined the workspace submenu functionality, and #55951 introduced an experimental voice session endpoint. A notable new issue was reported regarding stale self-identity in model switches, documented in #56212. Overall, the day was marked by these important advancements and bug fix resolutions.

#### 🚀 New Releases
- [v1.19.3](https://github.com/anomalyco/opencode/releases/tag/v1.19.3) v1.19.3
- [v1.19.2](https://github.com/anomalyco/opencode/releases/tag/v1.19.2) v1.19.2
- [pr-56106-video](https://github.com/anomalyco/opencode/releases/tag/pr-56106-video) PR #56106 demo video

#### ✅ Merged PRs
- [#55665](https://github.com/anomalyco/opencode/pull/55665) refactor(app): share the workspace submenu with the missing-location menu
- [#55712](https://github.com/anomalyco/opencode/pull/55712) fix(app): show free models alongside their paid twins by default
- [#56272](https://github.com/anomalyco/opencode/pull/56272) test(cli): remove flaky managed service environment test
- [#56262](https://github.com/anomalyco/opencode/pull/56262) chore(ci): pause WinGet submission until packages are accepted
- [#56205](https://github.com/anomalyco/opencode/pull/56205) refactor(schema): move session list cursor into schema
- [#55237](https://github.com/anomalyco/opencode/pull/55237) fix(client): skip catalog refetches for unloaded locations
- [#56248](https://github.com/anomalyco/opencode/pull/56248) fix(app): show unreachable server state for session tabs
- [#55951](https://github.com/anomalyco/opencode/pull/55951) feat(server): add experimental voice session endpoint

#### 🐛 New Issues
- [#56212](https://github.com/anomalyco/opencode/issues/56212) agent: model switch does not refresh injected `Your Model` identity (stale self-identity) 💬10
- [#56256](https://github.com/anomalyco/opencode/issues/56256) The name is not updating in the list of projects. `pending close` `triaging` 💬5
- [#56113](https://github.com/anomalyco/opencode/issues/56113) Subagent runs fail with 'model_coming_soon' on MiMo-V2.6-Flash while the main session on the same model works fine `pending close` `triaging` 💬4
- [#56112](https://github.com/anomalyco/opencode/issues/56112) models: GLM-5.3-Flash Free missing from the model list for a signed-in Zen account `pending close` `triaging` 💬3
- [#56261](https://github.com/anomalyco/opencode/issues/56261) [FEATURE]: agent listens to agents.md more than developer instructions 💬3
- [#56266](https://github.com/anomalyco/opencode/issues/56266) [FEATURE]: timer on rate limit exceeded message `pending close` `triaging` 💬3
- [#56247](https://github.com/anomalyco/opencode/issues/56247) server: permission evaluations and asks are no longer logged in v2 `reproduced` 💬3
- [#56249](https://github.com/anomalyco/opencode/issues/56249) subagent: sessionID continuation forks running lanes — zero-context sidecar spawns, no parentage in payload `pending close` `triaging` 💬3
- [#56236](https://github.com/anomalyco/opencode/issues/56236) Windows: backend segfaults in embedded @parcel/watcher (2.5.1), killing all in-flight sessions `pending close` `triaging` 💬3
- [#56091](https://github.com/anomalyco/opencode/issues/56091) plugin add with a tag spec (bare name / @latest) fails with ERESOLVE for some packages; exact version installs fine `pending close` `triaging` 💬3
- [#56263](https://github.com/anomalyco/opencode/issues/56263) Desktop: allow trusted custom URL protocols (e.g. `obsidian://`) for chat links 💬2
- [#56218](https://github.com/anomalyco/opencode/issues/56218) v2: `opencode -m provider/model` no longer accepted on root command (worked in v1) 💬2
- [#56279](https://github.com/anomalyco/opencode/issues/56279) [FEATURE]: v1 TUI: show and load the messages a long session hides `pending close` `triaging` 💬1
- [#56278](https://github.com/anomalyco/opencode/issues/56278) chat: foreign text appended to user messages at request layer (canary 6174 / fix_broken_number) `triaging` 💬1
- [#56277](https://github.com/anomalyco/opencode/issues/56277) [FEATURE]: Make Revert the default action in the Message Actions dialog 💬1
- [#56276](https://github.com/anomalyco/opencode/issues/56276) lsp: LSP servers never start on file operations in v2.0.32 (custom and built-in) `pending close` `triaging` 💬1
- [#56275](https://github.com/anomalyco/opencode/issues/56275) providers: turn aborts with unsupported_request (content supports text only) when session history contains pasted images 💬1
- [#56270](https://github.com/anomalyco/opencode/issues/56270) sessions break when their folder is renamed outside opencode `pending close` `triaging` 💬1
- [#56269](https://github.com/anomalyco/opencode/issues/56269) tui: tabs.layout vertical renders as horizontal strip `triaging` 💬1
- [#56258](https://github.com/anomalyco/opencode/issues/56258) config: plugin option tuples ['name', {options}] are rejected at normalization despite being the documented plugin options form `reproduced` 💬1
- [#56255](https://github.com/anomalyco/opencode/issues/56255) Running service never picks up `opencode.jsonc` edits on Linux (config-directory watcher unsupported) `pending close` `triaging` 💬1
- [#56250](https://github.com/anomalyco/opencode/issues/56250) Step-capped agents fail with an assistant prefill 400 `reproduced` 💬1
- [#56251](https://github.com/anomalyco/opencode/issues/56251) The question tool rejects calls that send header without question 💬1
- [#56242](https://github.com/anomalyco/opencode/issues/56242) [FEATURE]: Option for ctrl+u to delete the whole line, as zsh does 💬1
- [#56239](https://github.com/anomalyco/opencode/issues/56239) cant use providor `triaging` 💬1
- [#56240](https://github.com/anomalyco/opencode/issues/56240) Direct MCP tools (codemode: false) are nondeterministically missing from the session toolset; opencode run can hang forever after a session error `pending close` `triaging` 💬1
- [#56237](https://github.com/anomalyco/opencode/issues/56237) desktop: Review panel shows "Create Git repository" for a Git project opened over SSH 💬1
- [#56233](https://github.com/anomalyco/opencode/issues/56233) TUI crash: ENOSPC: no space left on device, watch '/root/.config/opencode' `pending close` `triaging` 💬1
- [#56281](https://github.com/anomalyco/opencode/issues/56281) tui: /copy misses final reply text when the last assistant message has no text part (+ args proposal)
- [#56129](https://github.com/anomalyco/opencode/issues/56129) test

#### 🔒 Closed Issues
- [#56256](https://github.com/anomalyco/opencode/issues/56256) The name is not updating in the list of projects.
- [#55709](https://github.com/anomalyco/opencode/issues/55709) The model restarted the operating system instead of the provider.
- [#56266](https://github.com/anomalyco/opencode/issues/56266) [FEATURE]: timer on rate limit exceeded message
- [#55906](https://github.com/anomalyco/opencode/issues/55906) app: model picker tooltip always shows "No reasoning" for V2 catalog models
- [#55891](https://github.com/anomalyco/opencode/issues/55891) sessions: 2.x upgrade strands sessions created before the old 1.x background service stops
- [#55859](https://github.com/anomalyco/opencode/issues/55859) desktop: prompts fail with only an error sound and no on-screen message when the session's project folder is missing
- [#55229](https://github.com/anomalyco/opencode/issues/55229) mcp: {env:NAME} substitution in mcp.servers.*.environment resolves to empty
- [#55227](https://github.com/anomalyco/opencode/issues/55227) `POST /api/experimental/session/{id}/wait` returns when execution starts, not when the session is idle
- [#55849](https://github.com/anomalyco/opencode/issues/55849) TUI crash: ENOSPC: no space left on device, watch '/home/murilo/.config/opencode'
- [#55835](https://github.com/anomalyco/opencode/issues/55835) OpenCode Go rolling usage reaches 100% shortly after subscription renewal
- [#56129](https://github.com/anomalyco/opencode/issues/56129) test

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,528 · **Open issues:** 1,884 · **Last push:** <1h ago

On October 17, 2026, Qwen Code released two new versions: v0.25.3-preview.0 and v0.25.2-nightly.20261016.b4614845f0, both featuring a fix to admit team_plan_approval into the journal-only interrupted-turn settle. Significant merged pull requests included enhancements such as SSH Tool Runtime support and the ability to list every Managed task kind in the web-shell task panel. Important fixes addressed issues like the Session store intermittently refusing Hosted Shell turns and the need for compiling managed-agent-server sources on push to main. A notably hot new issue (#14410) reported that parallel batch launches with the agent tool produced no results or notifications, while single agent operations continued to function normally.

#### 🚀 New Releases
- [v0.25.3-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.3-preview.0) Release v0.25.3-preview.0
- [v0.25.2-nightly.20261016.b4614845f0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2-nightly.20261016.b4614845f0) Release v0.25.2-nightly.20261016.b4614845f0

#### ✅ Merged PRs
- [#14391](https://github.com/QwenLM/qwen-code/pull/14391) fix(managed-agent): log the check behind a refused internal request
- [#14407](https://github.com/QwenLM/qwen-code/pull/14407) test(managed-agent): add the FG8c process-crash gates for monitor_run and background shells (#14163)
- [#14415](https://github.com/QwenLM/qwen-code/pull/14415) feat(web-shell): list every Managed task kind in the task panel
- [#14358](https://github.com/QwenLM/qwen-code/pull/14358) fix(managed-agent): close the deferred #13182 terminal-state suggestions
- [#14411](https://github.com/QwenLM/qwen-code/pull/14411) docs(managed-agent): require one child Workspace setting on every replica
- [#14318](https://github.com/QwenLM/qwen-code/pull/14318) feat(managed-agent): Add SSH Tool Runtime support

#### 🐛 New Issues
- [#14410](https://github.com/QwenLM/qwen-code/issues/14410) Agent tool (subagents): parallel batch launches silently produce no result, no error, no notification — single agent works (0.25.2) `priority/P2` `type/bug` `category/core` `roadmap/subagents-tools` 💬8
- [#14361](https://github.com/QwenLM/qwen-code/issues/14361) fix(managed-agent): The Session store intermittently refuses a Hosted Shell turn with 400, failing HostedShellLifecycleRecoveryIT in 41% of SDK Java runs `priority/P2` `type/bug` `category/development` `scope/logging` 💬4
- [#14392](https://github.com/QwenLM/qwen-code/issues/14392) Tiered Java CI gates for pull requests and main pushes, keeping the nightly full suite `priority/P2` `type/feature-request` `category/development` `scope/ci-cd` 💬4
- [#14381](https://github.com/QwenLM/qwen-code/issues/14381) ci: nothing compiles the managed-agent-server sources on a push to main `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬4
- [#14351](https://github.com/QwenLM/qwen-code/issues/14351) fix(web-shell): an approval whose response delivery failed after 202 stays hidden until reload `priority/P2` `type/bug` `category/ui` `need-discussion` 💬4
- [#14418](https://github.com/QwenLM/qwen-code/issues/14418) Feature Request: Adaptive reasoning effort selection (`/effort auto`) for coding sessions `priority/P3` `type/feature-request` `category/core` `scope/commands` 💬3
- [#14416](https://github.com/QwenLM/qwen-code/issues/14416) ci: reference distribution job fails on the ECS pool (MySQL AIO exhausted, stale RUNNER_TEMP) `priority/P1` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#14408](https://github.com/QwenLM/qwen-code/issues/14408) Deferred review findings from PR #14317: operator-recovery discards the bound key ring (R1-6); no way to detect a silently mis-bound ring (R1-7) `priority/P2` `type/bug` `category/configuration` `scope/credential-security` 💬3
- [#14409](https://github.com/QwenLM/qwen-code/issues/14409) Cross-session message is submitted again after every failed model call, with no limit (1444 times in 90 s) `priority/P1` `type/bug` `category/cli` `scope/interactive` 💬3
- [#14400](https://github.com/QwenLM/qwen-code/issues/14400) test(managed-agent): fg8f in-flight-cap reads committedAtResume after the drain catches up, failing intermittently on slow runners `status/need-retesting` `priority/P2` `type/bug` `category/development` 💬3
- [#14346](https://github.com/QwenLM/qwen-code/issues/14346) Follow-up: side-task archive residual nits from #14300 review `priority/P3` `type/bug` `category/ui` `scope/session-management` 💬3
- [#14399](https://github.com/QwenLM/qwen-code/issues/14399) [#14334 follow-up] FG8d cancel-status-unavailable: fault the Broker→Worker status link, not only Harness→Broker `priority/P2` `type/bug` `category/integration` `scope/testing` 💬3
- [#14395](https://github.com/QwenLM/qwen-code/issues/14395) Auto-compaction threshold (context.autoCompactThreshold) is a single global ratio, so it cannot serve heterogeneous model windows in one settings.json `priority/P3` `type/feature-request` `category/core` `scope/token-management` 💬3
- [#14393](https://github.com/QwenLM/qwen-code/issues/14393) [#13918 follow-up] Remaining tenant-guard gaps: unbounded publication lanes, stale design text, code and test cleanup `priority/P2` `category/core` `scope/session-management` `scope/documentation` 💬3
- [#14389](https://github.com/QwenLM/qwen-code/issues/14389) Deferred review findings from PR #14276: fix(daemon): preserve active work when deleting scheduled tasks `priority/P3` `category/core` `scope/session-management` `scope/testing` 💬3
- [#14388](https://github.com/QwenLM/qwen-code/issues/14388) Deferred review findings from PR #14303: fix(serve): fan out never-started process probes `priority/P3` `category/cli` `type/enhancement` `scope/cli` 💬3
- [#14387](https://github.com/QwenLM/qwen-code/issues/14387) managed-agent: a workflow child Turn whose Harness was killed mid-run is re-executed by the recovery instead of refused (found by the FG10d fault gate) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#14384](https://github.com/QwenLM/qwen-code/issues/14384) ci: setup-java's Maven cache save costs 16-60 minutes on every self-hosted pool job `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#14379](https://github.com/QwenLM/qwen-code/issues/14379) Follow-ups deferred from #13768: managed email refusal handling and the instance stall `priority/P1` `type/bug` `category/integration` `scope/testing` 💬3
- [#14376](https://github.com/QwenLM/qwen-code/issues/14376) fix(managed-agent): active-holds inventory answers a store outage as non-retryable 500 instead of 503 `priority/P3` `type/bug` `category/core` `scope/session-management` 💬3
- [#14359](https://github.com/QwenLM/qwen-code/issues/14359) security: `git remote show <url>` is classified read-only and auto-approved in auto mode, so network egress bypasses the permission classifier `priority/P1` `type/bug` `category/security` `scope/shell` 💬3
- [#14419](https://github.com/QwenLM/qwen-code/issues/14419) fix(cli): the Hosted Harness answers the relay's answered verb's store failures as 400 invalid_command_operation `priority/P2` `type/bug` `category/cli` `scope/session-management` 💬2
- [#14406](https://github.com/QwenLM/qwen-code/issues/14406) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > settles a saved final native plan without new inference (expir… (+1 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14386](https://github.com/QwenLM/qwen-code/issues/14386) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > persists model selection and refuses changed resident and cold… `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14372](https://github.com/QwenLM/qwen-code/issues/14372) Main CI failed: E2E Tests — sdk-typescript/abort-and-lifecycle.test.ts > … > should handle normal process completion `type/bug` `status/ready-for-agent` `autofix/skip` 💬2

#### 🔒 Closed Issues
- [#14234](https://github.com/QwenLM/qwen-code/issues/14234) Deferred review findings from PR #14021: settle never-started background dispatches in the live turn
- [#13800](https://github.com/QwenLM/qwen-code/issues/13800) fix(managed-agent): a recovery-blocked Session wedges later turns of other Sessions on the same daemon
- [#13875](https://github.com/QwenLM/qwen-code/issues/13875) [H4f follow-up] A parent close waits for each child's running Turn instead of stopping it, so cancel-then-close leaves the child running
- [#14025](https://github.com/QwenLM/qwen-code/issues/14025) Replace ModelStudio onboarding with 千问AI平台 / QwenCloud; keep it first
- [#13387](https://github.com/QwenLM/qwen-code/issues/13387) Custom commands reinterpret @{...} file content as template syntax
- [#14361](https://github.com/QwenLM/qwen-code/issues/14361) fix(managed-agent): The Session store intermittently refuses a Hosted Shell turn with 400, failing HostedShellLifecycleRecoveryIT in 41% of SDK Java runs
- [#11997](https://github.com/QwenLM/qwen-code/issues/11997) bug(web-shell): label-only composer / user-message tags have zero padding-right
- [#14219](https://github.com/QwenLM/qwen-code/issues/14219) ci: post-merge Classify PR is pinned to a congested hosted runner and gates every job — 4s of work behind a 49-64min queue
- [#14226](https://github.com/QwenLM/qwen-code/issues/14226) Web Shell: render live tokens/sec indicator (ui.showResponseTokensPerSecond)
- [#8629](https://github.com/QwenLM/qwen-code/issues/8629) Proposal: list qwen-audio-agent (voice frontend over ACP) in README Ecosystem
- [#10794](https://github.com/QwenLM/qwen-code/issues/10794) [Bug] Cannot delete image with Delete key when input has no text
- [#14257](https://github.com/QwenLM/qwen-code/issues/14257) chore(providers): deferred review Suggestions from #14073 (QwenCloud /auth entry) - 25 items
- [#13798](https://github.com/QwenLM/qwen-code/issues/13798) Deferred review findings from PR #13768: fix(channels/email): re-register on a channel_disconnected answer
- [#13935](https://github.com/QwenLM/qwen-code/issues/13935) Web Shell Files: follow-up review suggestions from #13878
- [#13753](https://github.com/QwenLM/qwen-code/issues/13753) feat(managed-agent): H4 isolation — child worktree capability and Workspace isolation policies
- [#14163](https://github.com/QwenLM/qwen-code/issues/14163) test(managed-agent): Stage F fault gates FG8 for monitor_run and the background Shell kind
- [#11712](https://github.com/QwenLM/qwen-code/issues/11712) Three design-document accuracy defects

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

**Stars:** 392,199 · **Open issues:** 9,428 · **Last push:** <1h ago

On October 17, 2026, there were no new releases for OpenClaw. Significant merged pull requests included a fix for the main thread blocking issue after sign-ins and sign-outs (#173626), a refactor to remove dead component CSS declarations (#174854), and a performance enhancement to reuse published warm-turn metadata (#174801). A notable fix addressed the handling of malformed UTF-8 in various components, including migration and memory rewriting (#168536, #168574). The day also saw a pressing new issue flagged (#173764) where the OpenClaw update hangs indefinitely during the post-activation doctor step, causing significant service interruptions.

#### ✅ Merged PRs
- [#173626](https://github.com/openclaw/openclaw/pull/173626) fix(gateway): main thread blocks after sign-in, sign-out or plugin settings changes
- [#174894](https://github.com/openclaw/openclaw/pull/174894) refactor(ios): remove routine native success diagnostics
- [#174898](https://github.com/openclaw/openclaw/pull/174898) fix(doctor): exit cleanly when interrupted before maintenance
- [#174893](https://github.com/openclaw/openclaw/pull/174893) refactor(auto-reply): remove duplicate reply diagnostics
- [#174854](https://github.com/openclaw/openclaw/pull/174854) refactor(ui): remove dead component CSS declarations
- [#174665](https://github.com/openclaw/openclaw/pull/174665) fix(doctor): usage shows provider "***" for history masked before 2026.10.12
- [#174801](https://github.com/openclaw/openclaw/pull/174801) perf(sessions): reuse published warm-turn metadata and accounting
- [#168536](https://github.com/openclaw/openclaw/pull/168536) fix(migrate-claude): reject malformed UTF-8 before importing a command skill
- [#168574](https://github.com/openclaw/openclaw/pull/168574) fix(memory): reject malformed UTF-8 before rewriting MEMORY.md
- [#172293](https://github.com/openclaw/openclaw/pull/172293) fix(doctor): refuse the TOOLS.md migration when a workspace file is not valid UTF-8
- [#173258](https://github.com/openclaw/openclaw/pull/173258) fix(cron): editing an automation accepts a CLI-backed model again
- [#174530](https://github.com/openclaw/openclaw/pull/174530) perf(cron): read history identities before maintenance payloads
- [#174881](https://github.com/openclaw/openclaw/pull/174881) fix: preserve engine-owned history on OpenAI Responses
- [#172772](https://github.com/openclaw/openclaw/pull/172772) fix(doctor): update fails when another OpenClaw process has an agent database open
- [#174647](https://github.com/openclaw/openclaw/pull/174647) refactor(ui): derive composer drafts from their owners
- [#174888](https://github.com/openclaw/openclaw/pull/174888) fix(ui): new-session placeholder row flashes above the sidebar session list
- [#174698](https://github.com/openclaw/openclaw/pull/174698) fix(backup): apply --exclude-secrets to PostgreSQL Git exports
- [#174892](https://github.com/openclaw/openclaw/pull/174892) fix(matrix): surface recovery key read failures
- [#174870](https://github.com/openclaw/openclaw/pull/174870) refactor: deslop dead CSS residues (wave-6 bundle E)
- [#174579](https://github.com/openclaw/openclaw/pull/174579) fix(gateway): restore incognito child history with worker reads
- [#174868](https://github.com/openclaw/openclaw/pull/174868) fix(agents): surface subagent attachment cleanup failures
- [#174885](https://github.com/openclaw/openclaw/pull/174885) fix(qa): scenario catalog test fails on a deleted progress card file
- [#174800](https://github.com/openclaw/openclaw/pull/174800) refactor(discord): call concrete monitor owners directly
- [#174283](https://github.com/openclaw/openclaw/pull/174283) fix(decisions): include runtime preparation in caller budget
- [#174843](https://github.com/openclaw/openclaw/pull/174843) refactor(ui): remove unused theme CSS properties
- [#174830](https://github.com/openclaw/openclaw/pull/174830) perf(ui): load the media lightbox on open
- [#174766](https://github.com/openclaw/openclaw/pull/174766) fix(ci): align Doctor repair checks with the current agent schema
- [#174732](https://github.com/openclaw/openclaw/pull/174732) fix(plugins): keep entry pairs aligned when rebuilding metadata
- [#174686](https://github.com/openclaw/openclaw/pull/174686) fix(ui): load Settings build preloads on Windows
- [#174846](https://github.com/openclaw/openclaw/pull/174846) refactor(gateway): remove reconciliation reporting aggregate
- [#174836](https://github.com/openclaw/openclaw/pull/174836) refactor(agents): remove routine trace bookkeeping
- [#174864](https://github.com/openclaw/openclaw/pull/174864) perf(gateway): share GitHub options discovery across linked sessions
- [#174847](https://github.com/openclaw/openclaw/pull/174847) perf(ui): keep scheduler editing out of chat boot
- [#174867](https://github.com/openclaw/openclaw/pull/174867) fix(update): prevent missing-module failures during source updates
- [#174832](https://github.com/openclaw/openclaw/pull/174832) fix(ci): omit regenerated Windows installer payloads from cache
- [#174845](https://github.com/openclaw/openclaw/pull/174845) refactor(ui): scope sidebar browser events to Solid lifetime
- [#174825](https://github.com/openclaw/openclaw/pull/174825) refactor(plugins): keep single-consumer internals in their owners
- [#174619](https://github.com/openclaw/openclaw/pull/174619) perf(trajectory): flush normal turns as one append
- [#174672](https://github.com/openclaw/openclaw/pull/174672) refactor(node): call runtime owners without test overrides
- [#174816](https://github.com/openclaw/openclaw/pull/174816) test(core,plugins,ui): remove low-value tests (batch d188)
- [#174850](https://github.com/openclaw/openclaw/pull/174850) fix(subagents): settle missing completion sources once
- [#173665](https://github.com/openclaw/openclaw/pull/173665) fix: discover Codex plugins in direct migrations
- [#172636](https://github.com/openclaw/openclaw/pull/172636) fix(doctor): update repair fails when a short-lived OpenClaw command holds state
- [#174700](https://github.com/openclaw/openclaw/pull/174700) improve(sessions): reduce memory retained by huge sessions
- [#174550](https://github.com/openclaw/openclaw/pull/174550) refactor(ui): use canonical New Session catalog facts
- [#174829](https://github.com/openclaw/openclaw/pull/174829) refactor(ui): remove obsolete Lit settings CSS selectors
- [#174709](https://github.com/openclaw/openclaw/pull/174709) refactor(ui): own terminal picker and uploads with Solid
- [#174387](https://github.com/openclaw/openclaw/pull/174387) feat(database): family-scoped port, backup and update for mixed engines
- [#174869](https://github.com/openclaw/openclaw/pull/174869) fix(reply): side-question replies disappear or repeat after tool sends
- [#174713](https://github.com/openclaw/openclaw/pull/174713) feat(ui): browse folders on paired devices for existing-folder sessions
- [#174863](https://github.com/openclaw/openclaw/pull/174863) refactor(cli): share thread creation test setup
- [#174817](https://github.com/openclaw/openclaw/pull/174817) improve(sessions): reduce database work for transcript batch appends
- [#174834](https://github.com/openclaw/openclaw/pull/174834) refactor(ui): remove obsolete Web Awesome control CSS
- [#174827](https://github.com/openclaw/openclaw/pull/174827) refactor(ui): simplify lobster input reconciliation
- [#174826](https://github.com/openclaw/openclaw/pull/174826) fix(cloud-workers): preserve replacement owners during forced abandonment
- [#174746](https://github.com/openclaw/openclaw/pull/174746) refactor(ui): simplify transcript focus and listener lifetimes
- [#174853](https://github.com/openclaw/openclaw/pull/174853) test(runtime): align payload and cron fixtures with current admission
- [#174799](https://github.com/openclaw/openclaw/pull/174799) test(runtime,ui,scripts): remove low-value tests (batch d187)
- [#174487](https://github.com/openclaw/openclaw/pull/174487) fix(agents): complete nested final replies after owned work settles
- [#174844](https://github.com/openclaw/openclaw/pull/174844) fix: web search sign-in error tells the model what to say to the user
- [#174852](https://github.com/openclaw/openclaw/pull/174852) improve(ci): use smaller runners for isolated board-store tests
- [#174162](https://github.com/openclaw/openclaw/pull/174162) feat(onnx): use prepared decision model execution
- [#174592](https://github.com/openclaw/openclaw/pull/174592) perf: reduce repeated database work during Gateway startup
- [#174839](https://github.com/openclaw/openclaw/pull/174839) fix(media): large Gemini images fail through OpenRouter chat endpoints
- [#174755](https://github.com/openclaw/openclaw/pull/174755) fix(browser): the first browser call after a restart fails while the browser is still starting
- [#174808](https://github.com/openclaw/openclaw/pull/174808) fix: active chats stay usable after a database worker fails
- [#174819](https://github.com/openclaw/openclaw/pull/174819) refactor(tests): consolidate Firecrawl target rejection coverage
- [#174837](https://github.com/openclaw/openclaw/pull/174837) docs(agents): key caches by every input that changes the answer
- [#174611](https://github.com/openclaw/openclaw/pull/174611) test: share regression fixtures and consolidate duplicate cases
- [#174742](https://github.com/openclaw/openclaw/pull/174742) fix: use efficient integrity checks during database upgrades
- [#174768](https://github.com/openclaw/openclaw/pull/174768) fix(gateway): report pending worker teardown as stopping
- [#174006](https://github.com/openclaw/openclaw/pull/174006) fix(diagnostics): attribute isolated completion costs and latency
- [#174694](https://github.com/openclaw/openclaw/pull/174694) perf: batch GitHub coauthor attribution reads
- [#174784](https://github.com/openclaw/openclaw/pull/174784) refactor: simplify bundled adapter error ownership
- [#174770](https://github.com/openclaw/openclaw/pull/174770) fix: reject unavailable GitHub identities during repository checkout
- [#174721](https://github.com/openclaw/openclaw/pull/174721) refactor(ui): simplify realtime media ownership
- [#174710](https://github.com/openclaw/openclaw/pull/174710) fix(sessions): prepare upstream facts for history mutations
- [#174823](https://github.com/openclaw/openclaw/pull/174823) fix(tests): restore native catalog worker retention coverage
- [#174660](https://github.com/openclaw/openclaw/pull/174660) perf(sqlite): reuse database admission across short-lived handles
- [#173524](https://github.com/openclaw/openclaw/pull/173524) fix(control-ui): saved reasoning stays hidden when reasoning comes from reasoningDefault
- [#174261](https://github.com/openclaw/openclaw/pull/174261) fix(reply): include model preparation in narration timeout
- [#174751](https://github.com/openclaw/openclaw/pull/174751) refactor(ui): use owned chat pane listeners and focus refs
- [#174821](https://github.com/openclaw/openclaw/pull/174821) perf(diagnostics): avoid native header probes for arrays
- [#174771](https://github.com/openclaw/openclaw/pull/174771) refactor(ui): simplify page owner lifetimes and listeners
- [#174714](https://github.com/openclaw/openclaw/pull/174714) refactor(ui): retire sidebar session data host
- [#174807](https://github.com/openclaw/openclaw/pull/174807) fix(windows): confirm gateway shutdown after slow connection refusal
- [#174781](https://github.com/openclaw/openclaw/pull/174781) feat(ui): preview live skill files from chat links
- [#174699](https://github.com/openclaw/openclaw/pull/174699) refactor(ui): consolidate sidebar selection ownership
- [#174739](https://github.com/openclaw/openclaw/pull/174739) refactor(ui): simplify chat side panels and cards
- [#174666](https://github.com/openclaw/openclaw/pull/174666) test(pr,chat,gateway,sessions,ci,codex): remove low-value tests (batch d183)
- [#173935](https://github.com/openclaw/openclaw/pull/173935) fix(memory): agents write project comments into non-memory-core providers
- [#174163](https://github.com/openclaw/openclaw/pull/174163) docs(llama-cpp): no alternative when the managed embedding server keeps exiting
- [#174765](https://github.com/openclaw/openclaw/pull/174765) refactor(ui): scope markdown ref owners to Solid lifetimes
- [#173792](https://github.com/openclaw/openclaw/pull/173792) fix(anthropic): Claude CLI usage shows as unpriced in usage reports
- [#174716](https://github.com/openclaw/openclaw/pull/174716) test(core,plugins,ui): remove low-value tests (batch d185)
- [#174561](https://github.com/openclaw/openclaw/pull/174561) refactor: simplify plugin-local text helpers
- [#174790](https://github.com/openclaw/openclaw/pull/174790) refactor(ui): derive custodian page lifetime state
- [#174805](https://github.com/openclaw/openclaw/pull/174805) feat(proof): annotate PR screenshots and videos with measured guides
- [#174783](https://github.com/openclaw/openclaw/pull/174783) refactor(ui): simplify sidebar card bindings
- [#174812](https://github.com/openclaw/openclaw/pull/174812) fix(ui): model pickers stay on the old catalog when a change arrives mid-read
- [#174796](https://github.com/openclaw/openclaw/pull/174796) fix(ci): preserve canonical migration and helper ownership
- [#174753](https://github.com/openclaw/openclaw/pull/174753) refactor(ui): remove unused renderer and helper exports
- [#174668](https://github.com/openclaw/openclaw/pull/174668) fix(media): report playback probe close failures
- [#174621](https://github.com/openclaw/openclaw/pull/174621) test(gateway,ui): remove low-value tests (batch d181)
- [#174794](https://github.com/openclaw/openclaw/pull/174794) fix: apply default workspace changes without a gateway restart
- [#174728](https://github.com/openclaw/openclaw/pull/174728) perf(ui): keep JSON5 out of chat boot
- [#174731](https://github.com/openclaw/openclaw/pull/174731) refactor(ui): simplify non-chat page reactive lifecycles
- [#174683](https://github.com/openclaw/openclaw/pull/174683) fix(ui): stop retrying Goal Resume after a busy-session refusal
- [#174555](https://github.com/openclaw/openclaw/pull/174555) refactor(channels): reduce database work for inbound delivery
- [#174655](https://github.com/openclaw/openclaw/pull/174655) fix(macOS): keep account actions visible with many gateways
- [#174791](https://github.com/openclaw/openclaw/pull/174791) refactor(tests): consolidate dated TODO summary rejection cases
- [#174764](https://github.com/openclaw/openclaw/pull/174764) perf(cron): reuse auth facts and batch continuation writes
- [#174788](https://github.com/openclaw/openclaw/pull/174788) fix(test): initialize the Gateway handoff engine on Windows
- [#174233](https://github.com/openclaw/openclaw/pull/174233) fix(agents): include discarded fallback calls in usage and cost
- [#174692](https://github.com/openclaw/openclaw/pull/174692) fix(boards): prepare persisted session targets asynchronously
- [#174782](https://github.com/openclaw/openclaw/pull/174782) fix(agents): pace shared OpenAI token-limit recovery
- [#174703](https://github.com/openclaw/openclaw/pull/174703) improve(control-ui): show plugin guidance as an inline card in the agent's column
- [#174651](https://github.com/openclaw/openclaw/pull/174651) fix: web search hides an expired provider sign-in behind a generic error
- [#174135](https://github.com/openclaw/openclaw/pull/174135) docs(llmman): Ollama embedding names bge-m3 and nomic-embed-text do not pull
- [#174752](https://github.com/openclaw/openclaw/pull/174752) fix(ai): release completed runs held by cached WebSockets
- [#174749](https://github.com/openclaw/openclaw/pull/174749) refactor(ui): simplify catalog row derivations
- [#174787](https://github.com/openclaw/openclaw/pull/174787) fix(doctor): preserve explicit empty group allowlists
- [#174675](https://github.com/openclaw/openclaw/pull/174675) fix(claws): prepare plugin metadata before package preflight
- [#174575](https://github.com/openclaw/openclaw/pull/174575) fix(subagents): preserve saved preferences during launch
- [#174757](https://github.com/openclaw/openclaw/pull/174757) fix: keep chat usable when link previews cannot load
- [#174759](https://github.com/openclaw/openclaw/pull/174759) perf(gateway): keep reconnect reads off preparation and writer queues
- [#174643](https://github.com/openclaw/openclaw/pull/174643) refactor(ui): target canonical chat implementation owners in tests
- [#174740](https://github.com/openclaw/openclaw/pull/174740) fix(tools): honor workspaceOnly for file tools
- [#174729](https://github.com/openclaw/openclaw/pull/174729) refactor(ui): remove retired Claws catalog detail styles
- [#174682](https://github.com/openclaw/openclaw/pull/174682) fix(plugins): resume service reload after deferred cleanup
- [#174763](https://github.com/openclaw/openclaw/pull/174763) perf(plugins): reduce preparation worker imports
- [#174576](https://github.com/openclaw/openclaw/pull/174576) docs: trace remaining session database worker exposure
- [#174737](https://github.com/openclaw/openclaw/pull/174737) fix(reply): keep streamed media captions within the coalescing limit
- [#174632](https://github.com/openclaw/openclaw/pull/174632) refactor(agents): remove redundant preparation and bookkeeping guards
- [#174669](https://github.com/openclaw/openclaw/pull/174669) refactor: deslop wave-6 residues (ui)
- [#174762](https://github.com/openclaw/openclaw/pull/174762) perf(process): reduce main-thread work during child cleanup
- [#174767](https://github.com/openclaw/openclaw/pull/174767) fix(wizard): report failed service restarts during setup
- [#174087](https://github.com/openclaw/openclaw/pull/174087) fix(chat): retain replies when transcript publication fails
- [#174748](https://github.com/openclaw/openclaw/pull/174748) fix: resume interrupted parent turns after child completion cleanup
- [#174695](https://github.com/openclaw/openclaw/pull/174695) refactor(agents): carry typed private worker requests
- [#174691](https://github.com/openclaw/openclaw/pull/174691) refactor: reuse proxy capture and environment owners
- [#174688](https://github.com/openclaw/openclaw/pull/174688) perf: reduce cron recovery and delivery maintenance queries
- [#174684](https://github.com/openclaw/openclaw/pull/174684) refactor(ui): own session detail state with Solid
- [#174661](https://github.com/openclaw/openclaw/pull/174661) fix(media): image providers discard outputs above the media cap
- [#174750](https://github.com/openclaw/openclaw/pull/174750) fix(node-host): log the redacted cause of failed worker supervisor commands
- [#174741](https://github.com/openclaw/openclaw/pull/174741) fix(gateway): Models page never shows provider usage and re-probes providers on every load
- [#174735](https://github.com/openclaw/openclaw/pull/174735) fix(gateway): keep unavailable worker environments out of the admission budget
- [#174706](https://github.com/openclaw/openclaw/pull/174706) fix(codex): startup failures hide their real cause and an early turn can tear down shared startup
- [#174720](https://github.com/openclaw/openclaw/pull/174720) refactor(test): remove retired Mantis consumer fixture
- [#174719](https://github.com/openclaw/openclaw/pull/174719) refactor(agents): use execution error and cleanup owners directly
- [#174602](https://github.com/openclaw/openclaw/pull/174602) perf(audit): reuse admitted and inserted audit facts
- [#174693](https://github.com/openclaw/openclaw/pull/174693) refactor: deslop wave-6 residues (tooling)
- [#174670](https://github.com/openclaw/openclaw/pull/174670) test(chat,gateway,storage): remove low-value tests (batch d184)
- [#173669](https://github.com/openclaw/openclaw/pull/173669) feat(plugins): default package installs to ClawHub
- [#174652](https://github.com/openclaw/openclaw/pull/174652) refactor(ui): pair login disconnect listener with owner cleanup
- [#174662](https://github.com/openclaw/openclaw/pull/174662) refactor(ui): project sidebar snapshot persistence into Solid
- [#174718](https://github.com/openclaw/openclaw/pull/174718) fix(gateway): restore 2026.10.4 startup memory by keeping cold start from opening every memory index
- [#174725](https://github.com/openclaw/openclaw/pull/174725) improve: clarify hierarchy in session Details
- [#174641](https://github.com/openclaw/openclaw/pull/174641) fix(models): Claude CLI usage priced at $0 from stale models.json copies
- [#174715](https://github.com/openclaw/openclaw/pull/174715) perf(agents): compact plain session-fork publications
- [#174546](https://github.com/openclaw/openclaw/pull/174546) perf(plugins): avoid rereading installed index writes
- [#174689](https://github.com/openclaw/openclaw/pull/174689) fix(memory): remove catalog canonicalization lint suppression
- [#172742](https://github.com/openclaw/openclaw/pull/172742) fix(migrate-hermes): refuse lossy memory text imports
- [#172953](https://github.com/openclaw/openclaw/pull/172953) fix: Claude migration reports success after corrupting instruction text
- [#174055](https://github.com/openclaw/openclaw/pull/174055) chore(ci): update app token and Ruby setup actions
- [#174667](https://github.com/openclaw/openclaw/pull/174667) refactor(ui): drive memory import presentation with signals
- [#174527](https://github.com/openclaw/openclaw/pull/174527) refactor: deslop wave-6 residues (core)
- [#174585](https://github.com/openclaw/openclaw/pull/174585) fix(models): stop false warnings from decision-only catalogs
- [#174567](https://github.com/openclaw/openclaw/pull/174567) refactor(subagents): remove test registry forwarding facades
- [#174553](https://github.com/openclaw/openclaw/pull/174553) improve: simplify task progress header actions
- [#174549](https://github.com/openclaw/openclaw/pull/174549) fix: remove Discord live-policy CI race
- [#171707](https://github.com/openclaw/openclaw/pull/171707) fix: selected Codex history is shortened before native delivery
- [#174629](https://github.com/openclaw/openclaw/pull/174629) refactor(ui): scope hovercard listeners to active surfaces
- [#174640](https://github.com/openclaw/openclaw/pull/174640) refactor(browser): keep single-consumer internals with their owners
- [#174671](https://github.com/openclaw/openclaw/pull/174671) refactor(test): consolidate model auth import coverage
- [#174630](https://github.com/openclaw/openclaw/pull/174630) test(agents, telegram, tooling): remove low-value tests (batch d182)
- [#174677](https://github.com/openclaw/openclaw/pull/174677) perf(gateway): bound frozen snapshot memo retention
- [#174608](https://github.com/openclaw/openclaw/pull/174608) refactor(cli): reuse admitted skills and status facts
- [#174644](https://github.com/openclaw/openclaw/pull/174644) improve: read GitHub details before checks and diffs load
- [#174639](https://github.com/openclaw/openclaw/pull/174639) fix: keep Doctor captures temporary and GitHub App settings advanced
- [#174531](https://github.com/openclaw/openclaw/pull/174531) refactor: deslop wave-6 residues (plugins)
- [#174355](https://github.com/openclaw/openclaw/pull/174355) refactor(plugins): reuse canonical contract types
- [#174658](https://github.com/openclaw/openclaw/pull/174658) refactor(ui): scope reader image listeners to document lifetime
- [#174623](https://github.com/openclaw/openclaw/pull/174623) feat(database): admit mixed state/agent engine pairs
- [#174654](https://github.com/openclaw/openclaw/pull/174654) refactor(ui): consolidate modal listener cleanup
- [#174624](https://github.com/openclaw/openclaw/pull/174624) refactor(ui): drive group defaults dialog from signals
- [#174463](https://github.com/openclaw/openclaw/pull/174463) fix(update): keep Windows recovery helpers self-contained
- [#174650](https://github.com/openclaw/openclaw/pull/174650) refactor(ui): own tooltip listener lifetimes
- [#174622](https://github.com/openclaw/openclaw/pull/174622) fix(agents): report failed diagnostic file writes once
- [#174648](https://github.com/openclaw/openclaw/pull/174648) refactor(ui): drive plugin views with presentation signals
- [#174642](https://github.com/openclaw/openclaw/pull/174642) docs(database): PostgreSQL operator guide
- [#174586](https://github.com/openclaw/openclaw/pull/174586) fix(sessions): keep history readers independent of host acquisition
- [#174613](https://github.com/openclaw/openclaw/pull/174613) fix(ci): restore dependency and runtime hygiene checks
- [#174649](https://github.com/openclaw/openclaw/pull/174649) fix(update): avoid verifying an old build during package replacement
- [#174538](https://github.com/openclaw/openclaw/pull/174538) refactor(ui): retire the chat pane host lifecycle
- [#174574](https://github.com/openclaw/openclaw/pull/174574) chore(sqlite): classify worker-owned history queries
- [#174339](https://github.com/openclaw/openclaw/pull/174339) fix(cli): reject non-integer --removed-at before retiring a worktree snapshot
- [#174522](https://github.com/openclaw/openclaw/pull/174522) ci: run PostgreSQL conformance for all PG-reached paths
- [#174496](https://github.com/openclaw/openclaw/pull/174496) test(plugins,infra,cli): remove low-value tests (batch d168)
- [#174646](https://github.com/openclaw/openclaw/pull/174646) refactor(logging): remove private transport test controls
- [#174636](https://github.com/openclaw/openclaw/pull/174636) refactor(ui): scope caret anchor resources to active menus
- [#174616](https://github.com/openclaw/openclaw/pull/174616) fix(memory): avoid rescanning unchanged shared watcher roots
- [#174625](https://github.com/openclaw/openclaw/pull/174625) test(ui): remove unused new-session menu helper
- [#174581](https://github.com/openclaw/openclaw/pull/174581) chore: classify worker and maintenance SQL call sites
- [#174645](https://github.com/openclaw/openclaw/pull/174645) test(gateway): prepare tool invocation state snapshots
- [#174628](https://github.com/openclaw/openclaw/pull/174628) test(ui): wait for visible Activity preview decoding
- [#174609](https://github.com/openclaw/openclaw/pull/174609) fix(config): surface inaccessible roots during config loads
- [#174566](https://github.com/openclaw/openclaw/pull/174566) refactor(sessions): simplify maintenance planning and batching
- [#174633](https://github.com/openclaw/openclaw/pull/174633) fix(plugins): join retained preparation workers during shutdown
- [#174631](https://github.com/openclaw/openclaw/pull/174631) refactor(test): remove unused session parser fixture
- [#174626](https://github.com/openclaw/openclaw/pull/174626) refactor(ui): retire pinned session descriptor controller
- [#174604](https://github.com/openclaw/openclaw/pull/174604) perf(runtime): remove redundant cron and resource checks
- [#174481](https://github.com/openclaw/openclaw/pull/174481) refactor(ui): own appearance picker focus with element refs
- [#174499](https://github.com/openclaw/openclaw/pull/174499) refactor(ui): compose navigation classes with Solid
- [#174541](https://github.com/openclaw/openclaw/pull/174541) test(agents,plugins,ui): remove low-value tests (batch d179)
- [#174612](https://github.com/openclaw/openclaw/pull/174612) perf(gateway): remove redundant preparation and owner checks
- [#174603](https://github.com/openclaw/openclaw/pull/174603) perf(skills): return mutation receipts from applied changes
- [#174635](https://github.com/openclaw/openclaw/pull/174635) test(agents): restore d180 isolation and capture fixtures
- [#174615](https://github.com/openclaw/openclaw/pull/174615) perf(channels): remove duplicate owner-state checks
- [#174605](https://github.com/openclaw/openclaw/pull/174605) perf(gateway): consume worker write results without rereading
- [#174521](https://github.com/openclaw/openclaw/pull/174521) refactor(update): call concrete failure-reporting owners
- [#174617](https://github.com/openclaw/openclaw/pull/174617) refactor(ui): publish input dialog presentation state directly
- [#174588](https://github.com/openclaw/openclaw/pull/174588) refactor(codex): call command owners without test overrides
- [#174601](https://github.com/openclaw/openclaw/pull/174601) fix(media): generated images over the media cap are discarded
- [#173933](https://github.com/openclaw/openclaw/pull/173933) perf(gateway): compress WebSocket frames without slowing request bursts
- [#174505](https://github.com/openclaw/openclaw/pull/174505) fix(update): managed handoff records sentinels through the selected engine
- [#174528](https://github.com/openclaw/openclaw/pull/174528) refactor(ui): replace board cell revision plumbing with signals
- [#174369](https://github.com/openclaw/openclaw/pull/174369) refactor(ui): replace browser panel controller with owner factories
- [#174562](https://github.com/openclaw/openclaw/pull/174562) test(agents,gateway,scripts): remove low-value tests (batch d180)
- [#174582](https://github.com/openclaw/openclaw/pull/174582) refactor(ui): share progress card activity rendering
- [#174600](https://github.com/openclaw/openclaw/pull/174600) refactor(ui): own settings scroll shadow DOM access
- [#174594](https://github.com/openclaw/openclaw/pull/174594) refactor(ui): share Markdown presentation listener lifetimes
- [#174502](https://github.com/openclaw/openclaw/pull/174502) refactor(agents): remove orphan media and tool seam plumbing
- [#174495](https://github.com/openclaw/openclaw/pull/174495) fix(process): avoid native report work when cancelling leaf commands
- [#174469](https://github.com/openclaw/openclaw/pull/174469) fix(codex): keep parser and stderr content out of logs
- [#174471](https://github.com/openclaw/openclaw/pull/174471) fix(update): preserve Windows inspection path identities
- [#174614](https://github.com/openclaw/openclaw/pull/174614) test(ui): settle lazy preference reader before profile identity waits

#### 🐛 New Issues
- [#173764](https://github.com/openclaw/openclaw/issues/173764) [Bug]: openclaw update hangs forever in post-activation doctor step — no step-level timeout, gateway down during entire hang (2026.10.10-beta.1) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬9
- [#173952](https://github.com/openclaw/openclaw/issues/173952) [Bug]: IMAP hook run with deliver: true ends status=error "This operation was aborted" after the reader finishes; same run is ok with deliver: false `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬5
- [#173765](https://github.com/openclaw/openclaw/issues/173765) [Bug]: Gateway LaunchAgent missing from launchd domain after update stop-signal — nothing revives the service, ~30min silent outage; status shows loaded/running `P1` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬5
- [#174687](https://github.com/openclaw/openclaw/issues/174687) Update failure: git-update (2026.10.4) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#174341](https://github.com/openclaw/openclaw/issues/174341) [Bug]: Sustained ~1 core on 2026.10.4 with idle gateway - fs-safe directory-observation guard dominates the steady-state profile `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#174450](https://github.com/openclaw/openclaw/issues/174450) [Windows ARM64 / WSL2] Chat disconnects and Gateway restarts when an MCP server is unavailable `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬3
- [#174089](https://github.com/openclaw/openclaw/issues/174089) [Bug]: OpenClaw 2026.10.4 blocks Telegram offset migration: BA-EA/ba-ea SQLite case collision `bug` `no-stale` `regression` `P1` 💬3
- [#173997](https://github.com/openclaw/openclaw/issues/173997) Update failure: package-backup-retention (2026.10.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#173631](https://github.com/openclaw/openclaw/issues/173631) cron show crashes when a job row omits its state object `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#174842](https://github.com/openclaw/openclaw/issues/174842) [Bug] doctor --fix hangs in unbounded SQLite read-only-snapshot loop with Gateway running (2026.10.4); SIGTERM ignored, SIGKILL required after 26+ min `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#174835](https://github.com/openclaw/openclaw/issues/174835) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#174678](https://github.com/openclaw/openclaw/issues/174678) Codex harness starts a fresh transient thread on every turn of a persistently restricted conversation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#174674](https://github.com/openclaw/openclaw/issues/174674) Update failure: package-swap (2026.9.8) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#174618](https://github.com/openclaw/openclaw/issues/174618) Update failure: gateway-recovery-verification (2026.10.4) `P1` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#174443](https://github.com/openclaw/openclaw/issues/174443) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#174475](https://github.com/openclaw/openclaw/issues/174475) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#174272](https://github.com/openclaw/openclaw/issues/174272) [Bug]: MCP server instructions are dropped for agents using the loopback MCP bridge `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#174311](https://github.com/openclaw/openclaw/issues/174311) [Bug]: streaming delivery sanitizer redoes whole-reply work per delta after a stripped scaffolding line `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#174120](https://github.com/openclaw/openclaw/issues/174120) [Bug] OpenClaw.app 2026.10.4 upgrade leaves Codex/Discord/Slack outdated with missing host peer links `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#174110](https://github.com/openclaw/openclaw/issues/174110) [Bug]: Files reads report missing sessions during harmless metadata updates `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#173666](https://github.com/openclaw/openclaw/issues/173666) [Bug]: 2026.10.10-beta.1 Linux gateway intermittently stalls up to 23.9s after startup `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#173691](https://github.com/openclaw/openclaw/issues/173691) Model retries after a connection error ignore a hot-reloaded provider baseUrl `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#174053](https://github.com/openclaw/openclaw/issues/174053) Codex legacy cleanup resets complete self-origin automatic model selections `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#174024](https://github.com/openclaw/openclaw/issues/174024) [Bug] message tool returns 'Tool message not found' for all channels - OpenClaw 2026.10.4 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#173726](https://github.com/openclaw/openclaw/issues/173726) [Bug]: Feishu token acquisition returns code 21001; incoming DMs work but replies fail `bug` `bug:behavior` `P2` `impact:message-loss` 💬2
- [#173754](https://github.com/openclaw/openclaw/issues/173754) Source update rolls back after runtime activation with ERR_MODULE_NOT_FOUND (2026.10.3) `bug` `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬2
- [#174903](https://github.com/openclaw/openclaw/issues/174903) [Bug]: Unanchored "\S" patterns still ship in 2026.10.4 — llama.cpp 400; the natural anchoring fix is a semantic trap `clawsweeper:intake:bug` 💬1
- [#174899](https://github.com/openclaw/openclaw/issues/174899) [Bug]: Workboard late worker completion overwrites an explicitly requeued blocked card `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174895](https://github.com/openclaw/openclaw/issues/174895) [Bug]: A live Gateway state owner is judged "definitely stale" and its lock file is reclaimed by a second OpenClaw process (spurious restart) `bug` `no-stale` `bug:behavior` `P1` 💬1
- [#174879](https://github.com/openclaw/openclaw/issues/174879) [Bug]: Android Talk ends agent runs after 30 seconds and never speaks slower answers `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174865](https://github.com/openclaw/openclaw/issues/174865) [Feature]: Expose a presentation-only host tool-warning discriminator to reply-payload plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#174849](https://github.com/openclaw/openclaw/issues/174849) ACP bridge drops session updates between prompts (sessions_spawn completions never reach the ACP client) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174841](https://github.com/openclaw/openclaw/issues/174841) [Bug]: Telegram reply to an image sent as a document gives the agent a `document` attachment with no MIME type, not an image `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174563](https://github.com/openclaw/openclaw/issues/174563) [Bug]: Windows gateway stop cannot verify closed LAN port when refusal exceeds fixed 250 ms probe `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174813](https://github.com/openclaw/openclaw/issues/174813) Update failure: global-install-foreign-destination (2026.10.3) `P2` `impact:ux-friction` 💬1
- [#174754](https://github.com/openclaw/openclaw/issues/174754) Feature: preview installed skill files from Control UI chat links `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173826](https://github.com/openclaw/openclaw/issues/173826) Doctor repopulates explicit empty group allowlists when group messaging is disabled `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174779](https://github.com/openclaw/openclaw/issues/174779) Hallucinated/undeclared tool call persisted in session history permanently breaks the primary model (GigaChat 400 → silent fallback on every turn) `bug` `no-stale` `bug:behavior` `P1` 💬1
- [#174368](https://github.com/openclaw/openclaw/issues/174368) [Bug]: Chat Desktop panel offers Retry instead of guiding users through missing desktop setup `bug` `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` 💬1
- [#174733](https://github.com/openclaw/openclaw/issues/174733) [Bug]: OpenAI image generation is offered on Free ChatGPT plans but always fails with HTTP 400 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174730](https://github.com/openclaw/openclaw/issues/174730) [Bug]: Control UI fork of long conversation fails with size-limit toast and no recovery action `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#174707](https://github.com/openclaw/openclaw/issues/174707) docs/plugins/sdk-migration.md example recommends `plugin-sdk/channel-reply-pipeline` — a subpath the SDK removes; the guide contradicts itself `P3` `impact:ux-friction` 💬1
- [#174697](https://github.com/openclaw/openclaw/issues/174697) [Bug]: custodied native completion can inherit a drained foreground AsyncWorkScope (2026.10.1) `P1` `impact:session-state` `impact:message-loss` 💬1
- [#174690](https://github.com/openclaw/openclaw/issues/174690) System-prompt series markers persisted without prefix/hash, making cache restore impossible and forcing full prefix rewrites (2026.10.4) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#174681](https://github.com/openclaw/openclaw/issues/174681) Regression: #172750 plugin preparation blocks the Gateway main thread for minutes (sync worker proxy) `regression` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#174679](https://github.com/openclaw/openclaw/issues/174679) Codex hosted web-search admission is coupled to native execution permissions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#174680](https://github.com/openclaw/openclaw/issues/174680) triage diagnostics leaks phone-number map keys in config/sanitized.json `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#174676](https://github.com/openclaw/openclaw/issues/174676) Codex harness: cold-start web_search plan rotates the native thread on turn 2 `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#174663](https://github.com/openclaw/openclaw/issues/174663) [Bug]: macOS app resolves every exec approval as allow-once itself, even with allowlist + ask policy `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#174326](https://github.com/openclaw/openclaw/issues/174326) fix(cli): worktrees retire-snapshot --removed-at silently coerces invalid values `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174656](https://github.com/openclaw/openclaw/issues/174656) [Bug]: Goal Resume busy rejection becomes persistent unconfirmed recovery and blocks other controls `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#174627](https://github.com/openclaw/openclaw/issues/174627) Subagent completion/settle replies use requester session's stored deliveryContext instead of the spawning wake's explicit target `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#174620](https://github.com/openclaw/openclaw/issues/174620) [Bug]: NO_REPLY-instructed silent turns are booked as failed empty answers — finalization retries then injects a terminal fallback reply `P2` `impact:ux-friction` 💬1
- [#174596](https://github.com/openclaw/openclaw/issues/174596) [Bug]: Background provider-catalog refresh fails OpenAI OAuth refresh with "Async work scope is closed" and leaves the only profile as a terminal failed refresh fence (re-login required) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#174591](https://github.com/openclaw/openclaw/issues/174591) [Feature]: Delegated openclaw restart: durable originating-session postflight handoff before caller finalization `P2` `impact:ux-friction` 💬1
- [#174204](https://github.com/openclaw/openclaw/issues/174204) [Bug]: 2026.10.10-beta.1 on Windows: every claude-cli agent turn stalls on fd-3 credential delivery ("secret delivery aborted" / 180s no-output watchdog) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#174078](https://github.com/openclaw/openclaw/issues/174078) cron.maintainHistory unbounded .all() over task_runs payload → SQLite worker OOM loop at 512MB (after #166581) `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬1
- [#174564](https://github.com/openclaw/openclaw/issues/174564) Subagent completion delivery stuck in suspended state — "delivery ghost" pollutes session context `P2` `impact:session-state` 💬1
- [#174557](https://github.com/openclaw/openclaw/issues/174557) 2026.10.4: workspace template loader fails — HEARTBEAT.md not found (src/agents/templates not packaged) 💬1
- [#174343](https://github.com/openclaw/openclaw/issues/174343) 2026.10.x refuses to migrate a pre-July-2026 state and points at "upgrade through 2026.9.7", but 2026.9.x cannot complete that pass (plugin artifact validation fails) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#174428](https://github.com/openclaw/openclaw/issues/174428) [Feature]: move Memory overview presentation into Memory Core `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#174386](https://github.com/openclaw/openclaw/issues/174386) Auto Review tool is unavailable for a protected personal skill installation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#174524](https://github.com/openclaw/openclaw/issues/174524) [Bug]: openclaw attach crashes with RangeError when attach.grant returns an out-of-range expiresAtMs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174515](https://github.com/openclaw/openclaw/issues/174515) [Bug]: Update to 2026.10.4 repeatedly fails during managed-service inspection `bug` `bug:behavior` `P0` `impact:ux-release-blocker` 💬1
- [#174512](https://github.com/openclaw/openclaw/issues/174512) [Bug]: Memory Wiki apply compiles twice when the vault index is missing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174506](https://github.com/openclaw/openclaw/issues/174506) [Bug]: Failed gateway restart-intent clear is silently swallowed by an empty catch `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#174501](https://github.com/openclaw/openclaw/issues/174501) [Bug]: Incognito session expiry cleanup retries forever at a fixed 60s with no attempt cap, backoff, or give-up signal `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#174504](https://github.com/openclaw/openclaw/issues/174504) [Bug]: Stale gateway process cleanup silently swallows internal failures and returns an empty list `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#174447](https://github.com/openclaw/openclaw/issues/174447) Protected installed helpers can be bound from guest-writable managed skill sources `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#174483](https://github.com/openclaw/openclaw/issues/174483) [Bug]: local iMessage CAF voice notes fail transcription `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174479](https://github.com/openclaw/openclaw/issues/174479) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#174253](https://github.com/openclaw/openclaw/issues/174253) [Bug]: Standalone Doctor captures on recreated Docker containers fill the disk; retention (fixed 30 days) is not configurable `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#174418](https://github.com/openclaw/openclaw/issues/174418) [Feature]: Preserve structured MCP results for native Codex composition without parsing display text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#174073](https://github.com/openclaw/openclaw/issues/174073) [Bug]: Nostr channel stops receiving DMs through a relay after its connection drops `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174384](https://github.com/openclaw/openclaw/issues/174384) [Docs]: Clarify personal OAuth account inheritance and explicit selection for sessions_spawn subagents `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#174382](https://github.com/openclaw/openclaw/issues/174382) [MiniMax] Provider catalog still publishes MiniMax-M2.7 and M2.5 after upstream retires them on 2026-11-18 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#174373](https://github.com/openclaw/openclaw/issues/174373) [Tracking] 2026.10.4 package updates: deliver no-restart reporting fix and qualify macOS handoff `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#174219](https://github.com/openclaw/openclaw/issues/174219) [Bug] doctor --fix hangs with Gateway stopped; SIGKILL leaves live-orphan sqlite-maintenance lock permanently blocking Gateway startup `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#174364](https://github.com/openclaw/openclaw/issues/174364) [Bug]: Workboard agent tool schema rejects board appearance resets `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174354](https://github.com/openclaw/openclaw/issues/174354) [Bug]: streamed marker-free replies re-parse the whole reply per delta (quadratic CPU in the reasoning and final-tag sanitizers) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174345](https://github.com/openclaw/openclaw/issues/174345) perf: streaming plain-text tool-call scrub re-parses the whole reply per delta (85 s of CPU for one 40 KB reply) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174350](https://github.com/openclaw/openclaw/issues/174350) Update failure: global-install-failed (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#174336](https://github.com/openclaw/openclaw/issues/174336) [Bug]: Embedded runtime drops MCP server instructions; the MCP catalog never reads them `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174319](https://github.com/openclaw/openclaw/issues/174319) Update failure: gateway-recovery-verification (2026.10.2) `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#174334](https://github.com/openclaw/openclaw/issues/174334) Update failure: invalid-config (2026.10.2) `P2` `impact:ux-friction` 💬1
- [#174302](https://github.com/openclaw/openclaw/issues/174302) fix(x): retain work-session context for follow-up mentions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174308](https://github.com/openclaw/openclaw/issues/174308) [Bug]: Recurring automation auto-disable notice never reaches the configured failure-alert route (webhook/announce); it only rides a model turn, so a failing provider silences it `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173917](https://github.com/openclaw/openclaw/issues/173917) Attachment follow-ups fail in managed guest project sessions `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#174301](https://github.com/openclaw/openclaw/issues/174301) [Feature]: voice-call: transfer a live call to a human (allowlisted transfer_call action for the agent tool, RPC, CLI and realtime) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#174048](https://github.com/openclaw/openclaw/issues/174048) feat(x): support native image and video reply attachments `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173925](https://github.com/openclaw/openclaw/issues/173925) fix: guests cannot mark owned conversations unread `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#174029](https://github.com/openclaw/openclaw/issues/174029) Inbound attachments can stage after their managed worktree is removed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#174265](https://github.com/openclaw/openclaw/issues/174265) Telegram: no config durably delivers intermediate assistant prose - every turn has one durable prose slot (final answer only) `P3` `impact:ux-friction` 💬1
- [#174072](https://github.com/openclaw/openclaw/issues/174072) [Bug]: update cleanup --yes re-reads the whole migration manifest per reference (O(refs × manifest)) — minutes of CPU with the Gateway stopped `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174153](https://github.com/openclaw/openclaw/issues/174153) [Bug]: update cleanup inventory lists hundreds of non-existent recovery originals; capture dirs accumulate with no cleanup path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#174245](https://github.com/openclaw/openclaw/issues/174245) Creating any session invalidates pending plugin approvals in other sessions ("Approval requester authority changed") `P2` `impact:ux-friction` 💬1
- [#173908](https://github.com/openclaw/openclaw/issues/173908) Session readers cannot open Files because artifact reads require operator.read `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#174216](https://github.com/openclaw/openclaw/issues/174216) Plugin approval consumers cannot obtain a host-authenticated durable resolution receipt `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#174215](https://github.com/openclaw/openclaw/issues/174215) [Feature]: add `infer model run --prompt` from stdin (long prompts) `enhancement` `P2` `impact:ux-friction` 💬1
- [#174136](https://github.com/openclaw/openclaw/issues/174136) Managed artifact URLs remain readable after session access is revoked `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#174190](https://github.com/openclaw/openclaw/issues/174190) [Bug]: Phone long-press in chat cannot select text `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174167](https://github.com/openclaw/openclaw/issues/174167) [Bug]: /hooks/agent creates unbound ephemeral cron jobs rejected by inference-account continuity guard `P2` `impact:auth-provider` 💬1
- [#174155](https://github.com/openclaw/openclaw/issues/174155) [Bug]: sessions.patch stores an unsupported thinkingLevel for a reasoning: false model when its run route switches `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174092](https://github.com/openclaw/openclaw/issues/174092) [Bug]: Feishu dynamic agents ignore `--profile` and `OPENCLAW_STATE_DIR` and are created under `~/.openclaw` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#174088](https://github.com/openclaw/openclaw/issues/174088) [Feature]: Run GPT-Live realtime voice on Azure OpenAI / Foundry deployments `P2` `impact:auth-provider` 💬1
- [#173949](https://github.com/openclaw/openclaw/issues/173949) Files downloads reject the configured development Gateway proxy `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#174042](https://github.com/openclaw/openclaw/issues/174042) compaction.reserveTokens is absolute and model-agnostic: collapses the compaction model's prompt budget to the 8k floor 💬1
- [#173975](https://github.com/openclaw/openclaw/issues/173975) [Bug]: Control UI auto-links bare filenames that fail to open for nested workspace files `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#173962](https://github.com/openclaw/openclaw/issues/173962) [Bug]: Removing an auth profile from openclaw.json leaves orphaned entry in SQLite state (config_machine_state -> authProfiles.store), causing perpetual 'authentication expired' warnings `P2` `impact:auth-provider` `impact:ux-friction` 💬1
- [#173950](https://github.com/openclaw/openclaw/issues/173950) 2026.10.2: Telegram run report includes both root and main/ bootstrap files `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#173909](https://github.com/openclaw/openclaw/issues/173909) Session SQLite migration recovery report (session-sqlite-1792131411620-51fba9e5) 💬1
- [#173896](https://github.com/openclaw/openclaw/issues/173896) [Bug]: Google Meet bidi audio stops right after the join call returns with managed browser capture `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173893](https://github.com/openclaw/openclaw/issues/173893) [Bug]: `openclaw node run` startup failure prints only "The CLI command failed." with no reason, so a node host service restarts with no cause in its logs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173659](https://github.com/openclaw/openclaw/issues/173659) Retired "plugins.installs" key is re-written into openclaw.json at startup -> config invalid -> gateway fails to load (2026.10.1-beta.1) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#173722](https://github.com/openclaw/openclaw/issues/173722) feat: schedule weekly mobile store releases with Discord results `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#173839](https://github.com/openclaw/openclaw/issues/173839) Transport precheck rejects CJK-heavy payloads before graceful compaction can run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#173743](https://github.com/openclaw/openclaw/issues/173743) fix: stopped agent exec runs leave temporary state behind `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#173828](https://github.com/openclaw/openclaw/issues/173828) [Bug]: Mattermost slash command typed in a thread replies at the channel root `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173819](https://github.com/openclaw/openclaw/issues/173819) [Feature]: Native outbound attachments for Nextcloud Talk `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#174906](https://github.com/openclaw/openclaw/issues/174906) [Bug]: Windows UI Update 2026.10.3 → 10.4 abandons activation after canary passes `bug` `bug:crash`
- [#174907](https://github.com/openclaw/openclaw/issues/174907) [Feature]: move indexed Memory search presentation into Memory Core `enhancement`
- [#174577](https://github.com/openclaw/openclaw/issues/174577) [Bug]: fastmail_meeting ignores `end` parameter and created iMIP objects cannot be cancelled/modified

#### 🔒 Closed Issues
- [#87756](https://github.com/openclaw/openclaw/issues/87756) [Bug]: Regression: prompt-launched Lobster workflow hangs on nested /tools/invoke, while curl-launched workflow works
- [#44965](https://github.com/openclaw/openclaw/issues/44965) Feature Request: Stream Repetition Safeguard (Halt & Confirm)
- [#138245](https://github.com/openclaw/openclaw/issues/138245) [Feature] Output guards: catch pseudo tool-calls emitted as plain text + stream repetition/length guard — before they poison session history
- [#110368](https://github.com/openclaw/openclaw/issues/110368) [Bug]: ACP sessions in Control UI (webchat) show duplicate identical replies for each prompt
- [#110379](https://github.com/openclaw/openclaw/issues/110379) Control UI 2026.7.1: poor visibility and discoverability for "More" in the sidebar
- [#110702](https://github.com/openclaw/openclaw/issues/110702) Codex app-server stall (item/completed, no turn/completed, recovery=none) still occurs on stable 2026.6.11; corroborates logs_2.sqlite bloat root cause (refs #84076 #89974 #71127)
- [#111346](https://github.com/openclaw/openclaw/issues/111346) [Bug]: channels status --deep falsely reports not-running for an auto-loaded (no plugins.allow) channel plugin
- [#168413](https://github.com/openclaw/openclaw/issues/168413) memory.search.extraPaths content never recalled; stale reindex-lock forces keyword-only fallback
- [#48709](https://github.com/openclaw/openclaw/issues/48709) Gemini 2.5 Pro: textSignature bloat + think tags + mixed text/tool causes session failures
- [#79469](https://github.com/openclaw/openclaw/issues/79469) [UX] 思考过程（reasoning）在回复完成后自动消失，无法回顾 / Reasoning text disappears after response completes
- [#144944](https://github.com/openclaw/openclaw/issues/144944) Bug: Runtime context block exposed in Telegram/WebChat replies
- [#74732](https://github.com/openclaw/openclaw/issues/74732) docs+feat: Document oMLX (Apple Silicon MLX) as memorySearch embedding provider
- [#71711](https://github.com/openclaw/openclaw/issues/71711) [Feature] activeUntil / expiresAt for recurring cron jobs
- [#161229](https://github.com/openclaw/openclaw/issues/161229) [Bug]: acpx runtime creates `<agentId>/` subdirectory inside parent agent workspace on every ACP spawn — identity file pollution and git nesting
- [#106452](https://github.com/openclaw/openclaw/issues/106452) Docs feedback: /clawhub/cli
- [#109726](https://github.com/openclaw/openclaw/issues/109726) Runtime-level model fallback on API call failure
- [#174687](https://github.com/openclaw/openclaw/issues/174687) Update failure: git-update (2026.10.4)
- [#163617](https://github.com/openclaw/openclaw/issues/163617) [Bug]: Gateway startup materializes a 2.1 GB plugin dependency capture tree before config load, and can fail to open the listener
- [#129884](https://github.com/openclaw/openclaw/issues/129884) [Feature]: opt-in path excludes / bounded path-authority weights for builtin memory search ranking
- [#161445](https://github.com/openclaw/openclaw/issues/161445) [Bug]: ask_user prompt fails to deliver on WhatsApp DM (ReplyDispatchDeliveryError: queued reply delivery failed)
- [#81925](https://github.com/openclaw/openclaw/issues/81925) Compaction: `after_compaction` not emitted when `result.compacted:false`; validation: single-quote delimiter trips tool-caller retries
- [#137416](https://github.com/openclaw/openclaw/issues/137416) agents delete fails on Windows: "cleanup path identity exceeds the safe integer range" (NTFS inode overflow)
- [#173348](https://github.com/openclaw/openclaw/issues/173348) [Bug]: Gateway service restart in the setup wizard prints a success message and rejects when the restart fails
- [#160082](https://github.com/openclaw/openclaw/issues/160082) Bug: slash /new drops worker workspace binding but retains active placement
- [#173357](https://github.com/openclaw/openclaw/issues/173357) [Bug]: Gateway exits at startup when a prepared model runtime publication is superseded, boot-loops into the crash-loop breaker
- [#162677](https://github.com/openclaw/openclaw/issues/162677) [Bug] Tool-call pipeline rewrites literal auth-scheme strings in executed code (Bearer -> ***), silently breaking outbound auth
- [#162115](https://github.com/openclaw/openclaw/issues/162115) plugins reload/install run from inside an agent turn waits on that turn's own prepared-runtime lease (60s timeout, misleading 'retained work' + --wait advice)
- [#174089](https://github.com/openclaw/openclaw/issues/174089) [Bug]: OpenClaw 2026.10.4 blocks Telegram offset migration: BA-EA/ba-ea SQLite case collision
- [#120326](https://github.com/openclaw/openclaw/issues/120326) [BUG] DuckDuckGo web_search increasingly blocks gateway IP with bot-detection
- [#158418](https://github.com/openclaw/openclaw/issues/158418) Health reports permanent delivery-queue tombstones as failures
- [#83164](https://github.com/openclaw/openclaw/issues/83164) Discord reaction-only inputs should wake the agent
- [#89215](https://github.com/openclaw/openclaw/issues/89215) Tool silently dropped when manifest omits contracts.tools; plugin logs success before the contract gate rejects it
- [#154416](https://github.com/openclaw/openclaw/issues/154416) [Bug]: Spurious "I couldn't confirm whether my previous reply reached this chat" notice when a message arrives while a queued reply is mid-send
- [#173631](https://github.com/openclaw/openclaw/issues/173631) cron show crashes when a job row omits its state object
- [#173351](https://github.com/openclaw/openclaw/issues/173351) [Bug]: Node worker supervisor command failures are collapsed to an opaque UNAVAILABLE and never logged
- [#173445](https://github.com/openclaw/openclaw/issues/173445) [Bug]: memory-core watcher reconciles every 30 s with ~10 syscalls per file and one subscription per agent — shared extraPaths saturate the Gateway main thread
- [#162740](https://github.com/openclaw/openclaw/issues/162740) [Bug]: Windows skill-watch refresh repeatedly blocks Gateway health and Discord
- [#112525](https://github.com/openclaw/openclaw/issues/112525) Gateway permanently hangs with no error if skills.load.allowSymlinkTargets points into a cloud-sync-backed directory (Dropbox confirmed)
- [#174272](https://github.com/openclaw/openclaw/issues/174272) [Bug]: MCP server instructions are dropped for agents using the loopback MCP bridge
- [#174120](https://github.com/openclaw/openclaw/issues/174120) [Bug] OpenClaw.app 2026.10.4 upgrade leaves Codex/Discord/Slack outdated with missing host peer links
- [#174110](https://github.com/openclaw/openclaw/issues/174110) [Bug]: Files reads report missing sessions during harmless metadata updates
- [#172055](https://github.com/openclaw/openclaw/issues/172055) Hardcoded 256 cap with no admin path to clear it; Disposed cached MCP runtimes. Active agents use new MCP config on their next runtime build. does not reset the cap
- [#159070](https://github.com/openclaw/openclaw/issues/159070) [Feature]: Support ordered fallback chains for utilityModel
- [#173691](https://github.com/openclaw/openclaw/issues/173691) Model retries after a connection error ignore a hot-reloaded provider baseUrl
- [#146769](https://github.com/openclaw/openclaw/issues/146769) [Bug]: fallback chain admits a candidate whose prompt exceeds its own context budget (556k vs 480k), burning it on reasoning-only retries while a larger-context candidate sits later in the chain
- [#156957](https://github.com/openclaw/openclaw/issues/156957) Tool schema: faceted / progressive schema assembly for multi-action tools (automations, message, browser)
- [#173726](https://github.com/openclaw/openclaw/issues/173726) [Bug]: Feishu token acquisition returns code 21001; incoming DMs work but replies fail
- [#151953](https://github.com/openclaw/openclaw/issues/151953) [Bug]: [iOS] Reasoning remains visible after /reasoning off; same conversation renders correctly in Control UI
- [#119404](https://github.com/openclaw/openclaw/issues/119404) Compaction: reserveTokensFloor (input budget) is reused as the summarization output cap, inflating per-chunk maxTokens ~16x over the 16k summary cap
- [#172150](https://github.com/openclaw/openclaw/issues/172150) Custom endpoint setup: blank API key produces a broken provider for auth-less servers outside loopback/RFC1918
- [#150267](https://github.com/openclaw/openclaw/issues/150267) [Feature]: Add Mistral-hosted Z.ai GLM 5.2 to the Mistral provider catalog
- [#167469](https://github.com/openclaw/openclaw/issues/167469) `ask_user` prompts raised during a streaming turn never reach Mattermost in `progress` mode (and are lost with block replies); the tool reports `no_answer` instead of a delivery failure
- [#138466](https://github.com/openclaw/openclaw/issues/138466) [Feature]: Resize Fleet cell compute limits after creation
- [#173754](https://github.com/openclaw/openclaw/issues/173754) Source update rolls back after runtime activation with ERR_MODULE_NOT_FOUND (2026.10.3)
- [#170144](https://github.com/openclaw/openclaw/issues/170144) [Bug]: crabbox tool stop times out at 600 s while teardown warm-image capture runs; environment reports ready throughout teardown
- [#168934](https://github.com/openclaw/openclaw/issues/168934) [Bug]: Cloud worker silently falls back to anonymous Git access when a configured GitHub identity is unavailable
- [#174563](https://github.com/openclaw/openclaw/issues/174563) [Bug]: Windows gateway stop cannot verify closed LAN port when refusal exceeds fixed 250 ms probe
- [#173062](https://github.com/openclaw/openclaw/issues/173062) [Bug]: config set/unset reports "applies without restarting the gateway" for fields whose live resolution is cached until restart (models.providers, agents.defaults.workspace)
- [#174813](https://github.com/openclaw/openclaw/issues/174813) Update failure: global-install-foreign-destination (2026.10.3)
- [#174754](https://github.com/openclaw/openclaw/issues/174754) Feature: preview installed skill files from Control UI chat links
- [#127381](https://github.com/openclaw/openclaw/issues/127381) Model fallback drops usage and cost from completed discarded candidates
- [#173826](https://github.com/openclaw/openclaw/issues/173826) Doctor repopulates explicit empty group allowlists when group messaging is disabled
- [#171185](https://github.com/openclaw/openclaw/issues/171185) [Bug]: Worker admission boundary charges a server-side environment outage to the client credential rate-limit budget
- [#168821](https://github.com/openclaw/openclaw/issues/168821) short-term promotion: malformed UTF-8 memory file is rewritten with replacement characters and reported as promoted
- [#174707](https://github.com/openclaw/openclaw/issues/174707) docs/plugins/sdk-migration.md example recommends `plugin-sdk/channel-reply-pipeline` — a subpath the SDK removes; the guide contradicts itself
- [#174697](https://github.com/openclaw/openclaw/issues/174697) [Bug]: custodied native completion can inherit a drained foreground AsyncWorkScope (2026.10.1)
- [#174326](https://github.com/openclaw/openclaw/issues/174326) fix(cli): worktrees retire-snapshot --removed-at silently coerces invalid values
- [#174620](https://github.com/openclaw/openclaw/issues/174620) [Bug]: NO_REPLY-instructed silent turns are booked as failed empty answers — finalization retries then injects a terminal fallback reply
- [#174591](https://github.com/openclaw/openclaw/issues/174591) [Feature]: Delegated openclaw restart: durable originating-session postflight handoff before caller finalization
- [#174204](https://github.com/openclaw/openclaw/issues/174204) [Bug]: 2026.10.10-beta.1 on Windows: every claude-cli agent turn stalls on fd-3 credential delivery ("secret delivery aborted" / 180s no-output watchdog)
- [#174078](https://github.com/openclaw/openclaw/issues/174078) cron.maintainHistory unbounded .all() over task_runs payload → SQLite worker OOM loop at 512MB (after #166581)
- [#174564](https://github.com/openclaw/openclaw/issues/174564) Subagent completion delivery stuck in suspended state — "delivery ghost" pollutes session context
- [#174557](https://github.com/openclaw/openclaw/issues/174557) 2026.10.4: workspace template loader fails — HEARTBEAT.md not found (src/agents/templates not packaged)
- [#162543](https://github.com/openclaw/openclaw/issues/162543) [Bug]: IMAP watcher initializes an invalid cursor when UIDNEXT is unavailable
- [#174343](https://github.com/openclaw/openclaw/issues/174343) 2026.10.x refuses to migrate a pre-July-2026 state and points at "upgrade through 2026.9.7", but 2026.9.x cannot complete that pass (plugin artifact validation fails)
- [#174428](https://github.com/openclaw/openclaw/issues/174428) [Feature]: move Memory overview presentation into Memory Core
- [#174386](https://github.com/openclaw/openclaw/issues/174386) Auto Review tool is unavailable for a protected personal skill installation
- [#174515](https://github.com/openclaw/openclaw/issues/174515) [Bug]: Update to 2026.10.4 repeatedly fails during managed-service inspection
- [#174506](https://github.com/openclaw/openclaw/issues/174506) [Bug]: Failed gateway restart-intent clear is silently swallowed by an empty catch
- [#173583](https://github.com/openclaw/openclaw/issues/173583) [Bug]: backup create --to <location> fails under the Gateway: scratch archive lands in ~/.openclaw/tmp (inside source)
- [#174447](https://github.com/openclaw/openclaw/issues/174447) Protected installed helpers can be bound from guest-writable managed skill sources
- [#174479](https://github.com/openclaw/openclaw/issues/174479) Update failure: plugin-target-unavailable (2026.9.3)
- [#172346](https://github.com/openclaw/openclaw/issues/172346) [Bug]: Control UI displays two assistant replies after a successful Talk request
- [#174253](https://github.com/openclaw/openclaw/issues/174253) [Bug]: Standalone Doctor captures on recreated Docker containers fill the disk; retention (fixed 30 days) is not configurable
- [#174219](https://github.com/openclaw/openclaw/issues/174219) [Bug] doctor --fix hangs with Gateway stopped; SIGKILL leaves live-orphan sqlite-maintenance lock permanently blocking Gateway startup
- [#173512](https://github.com/openclaw/openclaw/issues/173512) Factory enterprise sign-in needs host-scoped Git coauthor credit
- [#174319](https://github.com/openclaw/openclaw/issues/174319) Update failure: gateway-recovery-verification (2026.10.2)
- [#174334](https://github.com/openclaw/openclaw/issues/174334) Update failure: invalid-config (2026.10.2)
- [#174302](https://github.com/openclaw/openclaw/issues/174302) fix(x): retain work-session context for follow-up mentions
- [#173917](https://github.com/openclaw/openclaw/issues/173917) Attachment follow-ups fail in managed guest project sessions
- [#174048](https://github.com/openclaw/openclaw/issues/174048) feat(x): support native image and video reply attachments
- [#173925](https://github.com/openclaw/openclaw/issues/173925) fix: guests cannot mark owned conversations unread
- [#174029](https://github.com/openclaw/openclaw/issues/174029) Inbound attachments can stage after their managed worktree is removed
- [#174265](https://github.com/openclaw/openclaw/issues/174265) Telegram: no config durably delivers intermediate assistant prose - every turn has one durable prose slot (final answer only)
- [#174072](https://github.com/openclaw/openclaw/issues/174072) [Bug]: update cleanup --yes re-reads the whole migration manifest per reference (O(refs × manifest)) — minutes of CPU with the Gateway stopped
- [#174153](https://github.com/openclaw/openclaw/issues/174153) [Bug]: update cleanup inventory lists hundreds of non-existent recovery originals; capture dirs accumulate with no cleanup path
- [#174245](https://github.com/openclaw/openclaw/issues/174245) Creating any session invalidates pending plugin approvals in other sessions ("Approval requester authority changed")
- [#173908](https://github.com/openclaw/openclaw/issues/173908) Session readers cannot open Files because artifact reads require operator.read
- [#174215](https://github.com/openclaw/openclaw/issues/174215) [Feature]: add `infer model run --prompt` from stdin (long prompts)
- [#174136](https://github.com/openclaw/openclaw/issues/174136) Managed artifact URLs remain readable after session access is revoked
- [#174167](https://github.com/openclaw/openclaw/issues/174167) [Bug]: /hooks/agent creates unbound ephemeral cron jobs rejected by inference-account continuity guard
- [#174088](https://github.com/openclaw/openclaw/issues/174088) [Feature]: Run GPT-Live realtime voice on Azure OpenAI / Foundry deployments
- [#173507](https://github.com/openclaw/openclaw/issues/173507) [Bug]: LiteLLM image generation fails with "response malformed" when the backend returns image URLs
- [#173529](https://github.com/openclaw/openclaw/issues/173529) [Bug]: Local terminal chat (`openclaw chat`, `terminal`, `tui --local`) sends model requests without the configured `proxy.proxyUrl`
- [#173949](https://github.com/openclaw/openclaw/issues/173949) Files downloads reject the configured development Gateway proxy
- [#174042](https://github.com/openclaw/openclaw/issues/174042) compaction.reserveTokens is absolute and model-agnostic: collapses the compaction model's prompt budget to the 8k floor
- [#173206](https://github.com/openclaw/openclaw/issues/173206) [Feature]: Move curated Dreaming settings ownership into Memory Core
- [#173962](https://github.com/openclaw/openclaw/issues/173962) [Bug]: Removing an auth profile from openclaw.json leaves orphaned entry in SQLite state (config_machine_state -> authProfiles.store), causing perpetual 'authentication expired' warnings
- [#173909](https://github.com/openclaw/openclaw/issues/173909) Session SQLite migration recovery report (session-sqlite-1792131411620-51fba9e5)
- [#137361](https://github.com/openclaw/openclaw/issues/137361) Portals/Apps unreachable from sidebar — pin/customize (pencil) affordance is unlabeled and undiscoverable
- [#173659](https://github.com/openclaw/openclaw/issues/173659) Retired "plugins.installs" key is re-written into openclaw.json at startup -> config invalid -> gateway fails to load (2026.10.1-beta.1)
- [#173722](https://github.com/openclaw/openclaw/issues/173722) feat: schedule weekly mobile store releases with Discord results
- [#173743](https://github.com/openclaw/openclaw/issues/173743) fix: stopped agent exec runs leave temporary state behind
- [#169054](https://github.com/openclaw/openclaw/issues/169054) [Bug]: config hot reload drops session events queued behind an active turn ("Session event configuration changed"), never retried
- [#138324](https://github.com/openclaw/openclaw/issues/138324) modelKey() / legacyModelKey() throw on a non-string provider/model, and resolveModelExtraParamSources() only guards one of its two required params
- [#137476](https://github.com/openclaw/openclaw/issues/137476) MCP-over-HTTP: legacy SSE probe (GET) against a stateless Streamable HTTP server gets 405, then the connection fails with -32001 instead of falling back to POST
- [#174577](https://github.com/openclaw/openclaw/issues/174577) [Bug]: fastmail_meeting ignores `end` parameter and created iMIP objects cannot be cancelled/modified

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 254,436 · **Open issues:** 49,643 · **Last push:** <1h ago

Today, there were no new releases for Hermes Agent, but version v0.22.2 was successfully merged as an ancestor of the main branch. Among the critical new issues, #140041 reports a bug where the gateway crashes in a loop after reboot if a stale host-ownership record's PID is reused, highlighting an overly permissive match on the incarnation start time. Additionally, #140189 notes that the gateway continues to retry an undeliverable process-completion notification every 5 seconds indefinitely without backoff. Other new issues focus on desktop functionalities, including profile routing problems and feature requests for enhancing the user experience in Bot Mode and time display settings.

#### ✅ Merged PRs
- [#140203](https://github.com/NousResearch/hermes-agent/pull/140203) v0.22.2 installs fast-forward to main (record v0.22.2 as an ancestor, #139099)

#### 🐛 New Issues
- [#140041](https://github.com/NousResearch/hermes-agent/issues/140041) [Bug]: Gateway crash-loops after reboot when a stale host-ownership record's PID is reused (incarnation start-time match too permissive) `type/bug` `comp/gateway` `P1` 💬2
- [#140138](https://github.com/NousResearch/hermes-agent/issues/140138) Gateway fixes (#134889), package 7: ACP, session writes and resume, bots, and Desktop capabilities `type/bug` `comp/gateway` `comp/acp` `tool/delegate` 💬2
- [#140204](https://github.com/NousResearch/hermes-agent/issues/140204) [Bug]: Project folder paths on a remote (ssh/container) terminal backend are rewritten on Windows - /home/... becomes C:/home/... `type/bug` `backend/ssh` `comp/cli` `P2` 💬1
- [#140189](https://github.com/NousResearch/hermes-agent/issues/140189) Gateway retries an undeliverable process-completion notification every 5s forever (silent WakeNotAccepted, no backoff/cap) `type/bug` `comp/gateway` `P2` `area/profiles` 💬1
- [#140173](https://github.com/NousResearch/hermes-agent/issues/140173) Desktop: chats for non-default profiles routed via `primary-shared` don't get that profile's `secrets.onepassword.env` `type/bug` `comp/gateway` `P3` `area/profiles` 💬1
- [#140216](https://github.com/NousResearch/hermes-agent/issues/140216) Desktop Bot Mode: support Ctrl/Cmd+click, middle-click and "Open in new tab" on Bot roster rows `type/feature` `comp/plugins` `P3` `comp/desktop`
- [#140217](https://github.com/NousResearch/hermes-agent/issues/140217) Desktop SSH (Windows): cold-opening a Bot takes ~25-30 s because each step is a fresh SSH connection; reuse the connection, batch the probes, cache platform/version `type/perf` `backend/ssh` `P2` `comp/desktop`
- [#140209](https://github.com/NousResearch/hermes-agent/issues/140209) Cron run that delivered successfully is recorded as "Interrupted by shutdown" when delivery outlasts the fire fence wait `type/bug` `comp/cron` `P2`
- [#140208](https://github.com/NousResearch/hermes-agent/issues/140208) Gateway fixes (#134889), package 8: deleted and older sessions, silent failures, commands, profile isolation and Desktop display `type/bug` `comp/cli` `comp/gateway` `comp/tui`
- [#140205](https://github.com/NousResearch/hermes-agent/issues/140205) [Feature]: Follow the active Project when interpolating MCP server config - cwd context variable for Laravel Boost and similar project-root dev servers `type/feature` `comp/tools` `tool/mcp` `area/config`
- [#140201](https://github.com/NousResearch/hermes-agent/issues/140201) [Feature]: Desktop app should honor 24-hour time (macOS setting or display.timestamp_format) `type/feature` `tool/file` `area/config` `P3`
- [#140199](https://github.com/NousResearch/hermes-agent/issues/140199) Plugin API: public seams for (1) the calling session in slash-command handlers and (2) creating a visible session from a plugin `type/feature` `comp/gateway` `comp/plugins` `P3`
- [#140198](https://github.com/NousResearch/hermes-agent/issues/140198) lean tail mode's declared 25,000-token cap does not bind — the newest 6 tool rounds stay verbatim with no token bound `type/bug` `comp/agent` `P2` `area/compression`
- [#140196](https://github.com/NousResearch/hermes-agent/issues/140196) browser_vault fill attaches to the first same-origin tab, not the calling session's tab `type/security` `comp/tools` `tool/browser` `area/auth`
- [#140194](https://github.com/NousResearch/hermes-agent/issues/140194) [Bug]: Desktop status bar's context / cache-hit / t·s meters stay at "—" when Desktop is attached to the host gateway `type/bug` `comp/gateway` `P2` `comp/tui-gateway`
- [#140192](https://github.com/NousResearch/hermes-agent/issues/140192) cron edit prints "Updated job" but a failed pre-edit dependency sync wholesale-rolls back the persisted change `type/bug` `comp/cli` `P2`
- [#140165](https://github.com/NousResearch/hermes-agent/issues/140165) [Bug]: hermes update --keep-stash still prompts to restore local changes on an already-up-to-date run `type/bug` `comp/cli` `P2` `area/install-update`
- [#140174](https://github.com/NousResearch/hermes-agent/issues/140174) Managed config is ignored by the per-turn terminal policy and by plugin dependency selection (gateway falls back to local backend) `type/security` `comp/tools` `tool/memory` `backend/local`
- [#140177](https://github.com/NousResearch/hermes-agent/issues/140177) [Bug]: Bedrock Converse: switching Claude → GPT mid-session fails every turn — Claude's reasoningText is replayed and GPT rejects it `type/bug` `comp/agent` `provider/bedrock` `P3`
- [#140178](https://github.com/NousResearch/hermes-agent/issues/140178) [Bug]: monitor no_change ticks resolve cron failure incidents and reset failure_streak, defeating failure_repeat_alert_hours `type/bug` `comp/cron` `P2`

#### 🔒 Closed Issues
- [#123343](https://github.com/NousResearch/hermes-agent/issues/123343) Dependency pin httpx2==2.7.0 / httpcore2 2.7.0 hits six published CVEs (PYSEC-2026-3844..3849)
- [#127791](https://github.com/NousResearch/hermes-agent/issues/127791) package.json pins ip-address 10.3.1 (2 SSRF CVEs, GHSA-rpw4-54j3-4h4q / GHSA-2vr4-cq9g-pvrc) and undici@^6 6.28.0 (WebSocket DoS, GHSA-3wwx-pv8p-q78v)
- [#140041](https://github.com/NousResearch/hermes-agent/issues/140041) [Bug]: Gateway crash-loops after reboot when a stale host-ownership record's PID is reused (incarnation start-time match too permissive)
- [#134333](https://github.com/NousResearch/hermes-agent/issues/134333) chore(deps): workspace lockfile bump requested — build-tooling advisory chain (source-map-js/undici/brace-expansion/yaml/vitest)
- [#139523](https://github.com/NousResearch/hermes-agent/issues/139523) Gateway fixes (#134889), package 5: plugins, and config the gateway reads once

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,949 · **Open issues:** 8,932 · **Last push:** <1h ago

On October 17, 2026, there were no new releases for vLLM; however, several important features and bug fixes were merged. Notable updates include the implementation of a pluggable KVCacheConfigBuilder for tailored cache planning and enhancements to the ROCm platform with improved attention resource fusions. Significant bug fixes addressed issues such as NaN outputs from the Mamba2 chunk scan kernel on sm90 and problems with garbage output from LoRA on fp32 input. The tracking issue regarding the maturation of DeepEP v2 and the anticipated removal of legacy DeepEP v1 also drew attention, indicating ongoing development efforts in the ecosystem. Additionally, a new bug was reported, highlighting that leading newline characters are left in the output when using the reasoning parser with specific prompts, suggesting a need for further refinement in the parsing process.

#### ✅ Merged PRs
- [#61883](https://github.com/vllm-project/vllm/pull/61883) [Chore] Use upstream Transformers InklingProcessor
- [#52968](https://github.com/vllm-project/vllm/pull/52968) [ROCm] attn res + sigmoid_mul + conv fusions
- [#61718](https://github.com/vllm-project/vllm/pull/61718) [Bugfix] Fix NaN output of the Mamba2 chunk scan kernel on sm90
- [#62067](https://github.com/vllm-project/vllm/pull/62067) [CI][Tests] Account for FP8 KV-cache rounding in MLA reference
- [#61906](https://github.com/vllm-project/vllm/pull/61906) [Bugfix][LoRA] Fix garbage/NaN lora_expand output on SM90 with fp32 i…
- [#59559](https://github.com/vllm-project/vllm/pull/59559) [DP] Engines own wave wake-ups; drop the front-end FIRST_REQ
- [#53558](https://github.com/vllm-project/vllm/pull/53558) [Core][Feat] Pluggable KVCacheConfigBuilder for platform/model-specific KV cache planning
- [#61986](https://github.com/vllm-project/vllm/pull/61986) [Bugfix][Multimodal] Honor RGB PNG transparency when loading images
- [#59552](https://github.com/vllm-project/vllm/pull/59552) [ROCm][Perf][Kimi-K3] Use AITER Gluon chunk_kda for KDA prefill
- [#62035](https://github.com/vllm-project/vllm/pull/62035) [Perf][Parser] Stream MiniMax M2 tool argument values incrementally (16 KB call: 5.9 s to 26 ms)
- [#62042](https://github.com/vllm-project/vllm/pull/62042) [Kernel] Add router GEMM kernels for (5120, 256) and BF16 output to ll_bf16_gemm
- [#62052](https://github.com/vllm-project/vllm/pull/62052) [Frontend] Add the Beam reasoning and tool parsers
- [#61211](https://github.com/vllm-project/vllm/pull/61211) [Bugfix] Keep VLLM_RAY_BUNDLE_INDICES out of the compile cache key
- [#59044](https://github.com/vllm-project/vllm/pull/59044) [Perf][MoE] Skip padded work in SM100 FP4 DeepGEMM experts
- [#52831](https://github.com/vllm-project/vllm/pull/52831) [ROCm] [fusion] support ROCm aiter fusion of per tensor quant + rmsnorm
- [#61265](https://github.com/vllm-project/vllm/pull/61265) [Build] Remove unused `tools/install_deepgemm.sh`
- [#61451](https://github.com/vllm-project/vllm/pull/61451) [Perf][Spec Decode] Skip bonus-logit reduction for short drafts in rejection sampling
- [#59824](https://github.com/vllm-project/vllm/pull/59824) [ROCm][Kimi-K3] Support DSpark adaptive verification on MI355X
- [#62048](https://github.com/vllm-project/vllm/pull/62048) [ROCm][CI] Enable batch invariance for the ngram scheduling accuracy test
- [#53036](https://github.com/vllm-project/vllm/pull/53036) [Attention][Spec Decode] Enable varlen Mamba2 decode for adaptive verification
- [#62053](https://github.com/vllm-project/vllm/pull/62053) [ROCm][CI] Move Spec Decode Speculators + MTP to MI355
- [#61857](https://github.com/vllm-project/vllm/pull/61857) [Bugfix][Parser] Honor a prompt-closed reasoning block in non-streaming parse and reasoning token counts
- [#62025](https://github.com/vllm-project/vllm/pull/62025) Add @bnellnm to CODEOWNERS
- [#61695](https://github.com/vllm-project/vllm/pull/61695) [CI] Fix B200 FusedMoE Layer Kernels hang on NVSHMEM IB setup
- [#61955](https://github.com/vllm-project/vllm/pull/61955) [CI][AMD] Move 17 test groups from MI300 to MI355 and test large DeepSeek/Nemotron evals on AITER
- [#61921](https://github.com/vllm-project/vllm/pull/61921) [Bugfix][Model] Honor quantization config in Inkling MTP
- [#61843](https://github.com/vllm-project/vllm/pull/61843) [Refactor] Remove dead code multiple places
- [#58589](https://github.com/vllm-project/vllm/pull/58589) [Bugfix][ROCm][GLM-5.2] Stop forcing skip_final_all_reduce on AMD DSA model path
- [#61422](https://github.com/vllm-project/vllm/pull/61422) [Perf] Share Triton JIT warmup compilation pool across registered kernels
- [#61852](https://github.com/vllm-project/vllm/pull/61852) [Bugfix][Frontend] Keep the parser's tool call IDs in batch derender
- [#61990](https://github.com/vllm-project/vllm/pull/61990) [Bugfix][Frontend] Honor the constructor chat template in offline scoring
- [#60437](https://github.com/vllm-project/vllm/pull/60437) [Frontend] Resolve logprobs on the parsed streaming derender path
- [#61218](https://github.com/vllm-project/vllm/pull/61218) [Bugfix][Mooncake] Fix MultiConnector stats and proxy SSE responses
- [#51965](https://github.com/vllm-project/vllm/pull/51965) [XPU][Linear][MXFP4] enable torch as mxfp4 linear backend on xpu

#### 🐛 New Issues
- [#61972](https://github.com/vllm-project/vllm/issues/61972) [Bug]: --reasoning-parser qwen3: leading \n\n left in content after stripping the <think> block `bug` `tool-calling` 💬5
- [#62002](https://github.com/vllm-project/vllm/issues/62002) [CI Failure]: B200 V1 Attention shard 1/6 — test_mla_backends.py::test_backend_correctness, CUTLASS_MLA and TOKENSPEED_MLA (glm dims, fp8 KV, TP4, mixed_small) `ci-failure` `kimi` `glm` 💬4
- [#62085](https://github.com/vllm-project/vllm/issues/62085) [Bug]: Stop sequences match inside reasoning, so responses come back empty (breaks Claude Code auto mode) `bug` `tool-calling` 💬2
- [#62033](https://github.com/vllm-project/vllm/issues/62033) [Tracking] DeepEP v2 maturation and legacy DeepEP v1 removal `quantization` 💬1
- [#61998](https://github.com/vllm-project/vllm/issues/61998) [Performance]: Monolithic Triton top-k kernel falls back to full-vocab search on real logits (outlier gather misses) 💬2
- [#62094](https://github.com/vllm-project/vllm/issues/62094) [Bug]: Adaptive verification fails at startup with the default attention backend on FA2 GPUs 💬1
- [#62070](https://github.com/vllm-project/vllm/issues/62070) [Installation]: vllm: error: argument subparser: invalid choice: 'download-kernels' `installation` 💬1
- [#62051](https://github.com/vllm-project/vllm/issues/62051) [Bug]: DeepSeek V4.1 tool parser drops malformed DSML blocks and emits invalid/empty args on truncation `bug` `tool-calling` `deepseek` `DSv4.1` 💬1
- [#62003](https://github.com/vllm-project/vllm/issues/62003) [Bug]: mamba_ssm_cache_dtype="float16" crashes mamba-family models at startup — bare kernel assertion with an empty message (selective_scan_fwd.cu:791) `bug` 💬1
- [#61975](https://github.com/vllm-project/vllm/issues/61975) [Doc]: The image in the document has become invalid. Please update the document. `documentation` 💬1
- [#62105](https://github.com/vllm-project/vllm/issues/62105) [Bug]: `--load-format ipc_cache` leaves MoE routers on meta placeholders (illegal memory access, meta-tensor errors) `bug` `quantization` `kimi`
- [#62100](https://github.com/vllm-project/vllm/issues/62100) [RFC][Experimental]: Model- and platform-customized KV cache planning `RFC` `kimi`
- [#62096](https://github.com/vllm-project/vllm/issues/62096) [Feature]: Default to NextTokenPrediction Read strategy for text generation models for /v1/systemone and /v1/decisions `feature request`
- [#62083](https://github.com/vllm-project/vllm/issues/62083) [RFC / Research Showcase] SPICY-KV: 28.6x–50x Pre-RoPE Algebraic Multigrid KV Compression + 4-Byte Subgrid Variance Calibration (91.7%–100% RULER Recall on DeepSeek-R1 7B & 1.5B) `RFC` `deepseek`
- [#62080](https://github.com/vllm-project/vllm/issues/62080) [Performance]: NIXL KV transfer silently falls back to UCX TCP emulation (~0.56 GB/s) on same-host GPUs without peer-to-peer access and no RDMA NIC `kv-connector`
- [#62078](https://github.com/vllm-project/vllm/issues/62078) Nemotron-3.5 tool calls lose trailing/edge newlines under the wrapped qwen3_coder format (_trim_wrapping_newlines) — needs a compact converter like #58019 `tool-calling`
- [#62031](https://github.com/vllm-project/vllm/issues/62031) [Bug]: Multimodal requests stall when the long-prefill cap cannot fit an intact item `multi-modality`
- [#62028](https://github.com/vllm-project/vllm/issues/62028) [Bug]: EAGLE3 draft model with ModelOpt NVFP4 quantization fails to load — quant-excluded embed_tokens allocated as packed parameter `speculative-decoding` `quantization`
- [#61997](https://github.com/vllm-project/vllm/issues/61997) [Bug]: Split top-p mask kernel restarts its tie count every 8192 entries and over-keeps boundary ties
- [#61970](https://github.com/vllm-project/vllm/issues/61970) [Bug]: vLLM EngineCore crash in native KV offloading for hybrid Attention/Mamba model `bug` `quantization` `kimi`
- [#61964](https://github.com/vllm-project/vllm/issues/61964) [Bug]: [CPU] W8A8 Whisper fails on AMX CPUs: int8_scaled_mm_with_quant rejects 3-D encoder activations `quantization`
- [#61966](https://github.com/vllm-project/vllm/issues/61966) # [Bug]: MinTokensLogitsProcessor indexes logits with global token ids — out-of-bounds when the LM head output is TP-sharded
- [#61959](https://github.com/vllm-project/vllm/issues/61959) [Bug]: `vllm serve --uds <path>` cannot be restarted on the same path: the socket file is never removed, so the second start fails with `[Errno 98] Address already in use` `bug`
- [#61954](https://github.com/vllm-project/vllm/issues/61954) [Bug]: pythonic and llama4_pythonic tool parsers break on a raw newline inside a string argument `tool-calling`

#### 🔒 Closed Issues
- [#45414](https://github.com/vllm-project/vllm/issues/45414) [Bug]: Scheduler deadlocks without KV-cache connector
- [#45597](https://github.com/vllm-project/vllm/issues/45597) [Bug]: fastapi error '_IncludedRouter' object has no attribute 'path'
- [#44276](https://github.com/vllm-project/vllm/issues/44276) [RFC]: Model customized KVCache Planning
- [#59413](https://github.com/vllm-project/vllm/issues/59413) [Bug][ROCm]: GLM-5.3-Flash gibberish at low concurrency
- [#45593](https://github.com/vllm-project/vllm/issues/45593) [Feature]: Anthropic messages search_result content block support
- [#45750](https://github.com/vllm-project/vllm/issues/45750) [Bug][ROCm][P/D] AITER FP8 experts and MLA/MTP decode need MI300X P/D fixes
- [#45751](https://github.com/vllm-project/vllm/issues/45751) [Feature][ROCm] Support WideTP and WideEP P/D topologies on AMD GPUs
- [#45752](https://github.com/vllm-project/vllm/issues/45752) [Feature][ROCm] Add relaxed speculative-token acceptance checks for AMD GPU runs
- [#59590](https://github.com/vllm-project/vllm/issues/59590) [Feature]: Logprobs on parsed path streaming `/derender`
- [#45175](https://github.com/vllm-project/vllm/issues/45175) [RFC]: Extend hidden-state extraction to export verifier KV caches
- [#47266](https://github.com/vllm-project/vllm/issues/47266) [Bug]: vLLM 0.24.0 with DeepSeek on Blackwell SM120 (RTX PRO 6000) — Comprehensive Issues Report
- [#45445](https://github.com/vllm-project/vllm/issues/45445) [Bug]: RuntimeError: Already borrowed still occurs with bad_words despite thread-safe tokenizer wrapper
- [#45591](https://github.com/vllm-project/vllm/issues/45591) [Bug]: `--override-generation-config` silently drops `eos_token_id` from model's `generation_config.json` — Gemma 4 tool-calling generation never stops
- [#45626](https://github.com/vllm-project/vllm/issues/45626) EngineCore init failure reports empty "Failed core proc(s): {}" — no PID or underlying error when the core subprocess is killed during init
- [#48590](https://github.com/vllm-project/vllm/issues/48590) [Bug]: LoRA `lora_expand` Triton kernel outputs NaN on Hopper (sm_90) with `block_n=128`, producing garbled LoRA output
- [#61918](https://github.com/vllm-project/vllm/issues/61918) [Bug][Frontend] Client disconnect is not detected on non-streaming chat completions: request runs to completion and its tokens count as delivered
- [#45475](https://github.com/vllm-project/vllm/issues/45475) [Bug]: `cudaErrorLaunchFailure` in worker under concurrent native KV offloading with DeepSeek-V4-Flash (frequency depends on kv-cache dtype)
- [#45689](https://github.com/vllm-project/vllm/issues/45689) [Bug]: DiffusionGemma chat logprobs can crash in batched requests
- [#45806](https://github.com/vllm-project/vllm/issues/45806) [Bug]: MoE Detection Logic Fails for Non-Language Multimodal Models
- [#45815](https://github.com/vllm-project/vllm/issues/45815) [RFC]: Optimizing vLLM for High Beam-Width Generative Recommendation Inference
- [#54184](https://github.com/vllm-project/vllm/issues/54184) [Bug]: Engine liveness monitor can SIGTERM a healthy EngineCore after spurious sentinel readiness
- [#61709](https://github.com/vllm-project/vllm/issues/61709) [Bug]: --enable-prompt-embeds sizes OPT-350m embeds at hidden_size 1024, but OPT embeds at word_embed_proj_dim 512
- [#45633](https://github.com/vllm-project/vllm/issues/45633) [Bug]: vllm0.22.1 dsv4-flash have no prefix-cache use for ever
- [#45663](https://github.com/vllm-project/vllm/issues/45663) [Bug]: OOM in sparse_attn_indexer (fp8_fp4_mqa_logits) when KV offloading + DeepSeek-V4 is used with long contexts
- [#45667](https://github.com/vllm-project/vllm/issues/45667) [Feature]: Cascade Attention for Flashinfer
- [#45669](https://github.com/vllm-project/vllm/issues/45669) [Bug]: Draft model produces degenerate output (token_id=0) in speculative decoding with Qwen3-235B-A22B MoE target
- [#45760](https://github.com/vllm-project/vllm/issues/45760) [Bug] MLA alignment fail in Eagle speculative decoding for Kimi-K2.6 due to missing kimi_k2 model_type whitelist
- [#45884](https://github.com/vllm-project/vllm/issues/45884) [Bug]: Integer overflow in moe_wna16.cu
- [#45922](https://github.com/vllm-project/vllm/issues/45922) [Bug]: Online MXFP8 falls back to Marlin W8A16 on non-SM100+ GPUs but crashes during warmup with invalid Marlin thread config
- [#61603](https://github.com/vllm-project/vllm/issues/61603) [Bug]: NemotronH/Mamba2: _chunk_scan_fwd_kernel nondeterministically emits NaN rows on sm90 (H20) for 8 of 23 autotune configs (warps=4, stages>=2, M/N>=64)
- [#62070](https://github.com/vllm-project/vllm/issues/62070) [Installation]: vllm: error: argument subparser: invalid choice: 'download-kernels'
- [#61975](https://github.com/vllm-project/vllm/issues/61975) [Doc]: The image in the document has become invalid. Please update the document.
- [#51868](https://github.com/vllm-project/vllm/issues/51868) [Feature][DSpark]: Enable varlen for Nemotron-H (Mamba)

### SGLang (`sgl-project/sglang`)

**Stars:** 37,227 · **Open issues:** 5,943 · **Last push:** <1h ago

On October 17, 2026, there were no new releases for SGLang, but several significant contributions were merged into the project. Notable updates include the addition of a `/flush_cache` endpoint to the Rust frontend in PR #44766 and enhancements to profiling with added forward pass IDs in step span labels through PR #44775. Performance optimizations were made such as prewarming compaction moves at startup in PR #44592 and improving KV row handling in window commits via PR #44783. Additionally, a bug was reported regarding the DeepSeek-V4 BF16 checkpoint routing to the incorrect expert path in issue #44810, raising concerns about the model's functionality.

#### ✅ Merged PRs
- [#44766](https://github.com/sgl-project/sglang/pull/44766) [Feat] sglang-server: Serve /flush_cache from the Rust frontend
- [#44785](https://github.com/sgl-project/sglang/pull/44785) [Fix] srt: Apply --gc-threshold in every server process and freeze every tokenizer worker
- [#44775](https://github.com/sgl-project/sglang/pull/44775) [Feat] profiler: Add the forward pass id to detailed step span labels
- [#44592](https://github.com/sgl-project/sglang/pull/44592) [Perf] unified-memory: Prewarm the compaction move at startup and copy whole page envelopes by page id
- [#43813](https://github.com/sgl-project/sglang/pull/43813) [Feat] dsv4.1: Support encoder SWA bounded replay with CUDA DP attention
- [#44679](https://github.com/sgl-project/sglang/pull/44679) [CI] tests: Fork the gloo exchange test's ranks from a preloaded forkserver
- [#44783](https://github.com/sgl-project/sglang/pull/44783) [Perf] DSv4.1: Skip discarded KV rows during window commit
- [#43832](https://github.com/sgl-project/sglang/pull/43832) [Fix] DSA: skip-topk pipeline handoff for owed outputs
- [#44787](https://github.com/sgl-project/sglang/pull/44787) [Fix] engram: Avoid blocking history copies during PD admission
- [#44622](https://github.com/sgl-project/sglang/pull/44622) [Perf] dp-attention: Exchange the scheduler's MLP sync rows with gather + broadcast on gloo
- [#44773](https://github.com/sgl-project/sglang/pull/44773) [CI] rust-server: Raise the ChunkEvent frame-size cap to 152 bytes
- [#42811](https://github.com/sgl-project/sglang/pull/42811) [Perf] [NVIDIA] custom-all-reduce: Add 2shot_push all-reduce and retune SM100 TP4/TP8
- [#44729](https://github.com/sgl-project/sglang/pull/44729) [CI] tests: Let test_hicache_storage size its host cache to the runner
- [#44696](https://github.com/sgl-project/sglang/pull/44696) [CI] [NVIDIA] DSv4.1-Flash: Split GB300 accuracy test into one file per config
- [#44777](https://github.com/sgl-project/sglang/pull/44777) [Test] mem_cache: Free SWA peers below the eviction floor in the SWA repair test
- [#44665](https://github.com/sgl-project/sglang/pull/44665) [Feat] kernels: Add muse spark operators and collective GEMM (2/5)
- [#44717](https://github.com/sgl-project/sglang/pull/44717) [Refactor] muse-spark: Consolidate layer modules into one package
- [#42716](https://github.com/sgl-project/sglang/pull/42716) [Fix] [AMD] hicache: Serve encoder-replay prefix hits with a paged DSpark draft SWA
- [#44533](https://github.com/sgl-project/sglang/pull/44533) [Fix] rust-server: Honour cache_salt and require_reasoning on /generate
- [#44614](https://github.com/sgl-project/sglang/pull/44614) [Fix] hicache: Bound the storage prefetch timeout from the first blocked admission poll
- [#44605](https://github.com/sgl-project/sglang/pull/44605) [Feat] disaggregation: Let a KV transfer backend skip the checksum for an incomparable peer
- [#44583](https://github.com/sgl-project/sglang/pull/44583) [Feat] http_server: Make the multi-worker ASGI app path configurable
- [#44532](https://github.com/sgl-project/sglang/pull/44532) [Feat] sglang-server: serve /v1/loads from the Rust frontend
- [#44751](https://github.com/sgl-project/sglang/pull/44751) [Fix] dsv41: Preserve tool-result image order and current-turn thinking
- [#44454](https://github.com/sgl-project/sglang/pull/44454) [Doc] [AMD] cookbook: Refresh DeepSeek V4 AgentX PD recipe optimizations
- [#44694](https://github.com/sgl-project/sglang/pull/44694) docs: add Beam 1.0 deployment cookbook
- [#42565](https://github.com/sgl-project/sglang/pull/42565) [Fix] dsa: Fix ragged seed indices before MTP draft decode
- [#44712](https://github.com/sgl-project/sglang/pull/44712) [Doc] cookbook: Refresh SemiAnalysis AgentX launches for Qwen3.5 and DeepSeek-V4.1-Flash GB300
- [#44657](https://github.com/sgl-project/sglang/pull/44657) [Perf] [AMD] dsv4: Add a separate MegaMoE decode instance
- [#41903](https://github.com/sgl-project/sglang/pull/41903) [Perf] [AMD] dsv4: reuse the q_lora fp8 quant for the C4 indexer wq_b (4/8)
- [#44620](https://github.com/sgl-project/sglang/pull/44620) [CI] [AMD] aiter: pin aiter commit to 2bb549 for rocm10.1 gfx1250
- [#44008](https://github.com/sgl-project/sglang/pull/44008) [Perf] [AMD] dsv4: carry aiter DSv4 GEMM tuned rows and mHC tile_m=16 until aiter ships them (7/8)

#### 🐛 New Issues
- [#44810](https://github.com/sgl-project/sglang/issues/44810) [Bug] DeepSeek-V4 BF16 checkpoint is routed to the MXFP4 expert path and fails in fused MoE 💬2
- [#44794](https://github.com/sgl-project/sglang/issues/44794) [Bug] [AMD] select_experts casts the fp32 MoE correction bias to bf16 before #37133's fp32 aiter path, so GLM-5.x still routes with a bf16 bias 💬2
- [#44735](https://github.com/sgl-project/sglang/issues/44735) [Bug] HiCache host-tier hit on hybrid GDN model (Qwen3.8-Flash-Next) returns wrong output — kernel and direct io both affected 💬2
- [#44656](https://github.com/sgl-project/sglang/issues/44656) [Perf] HiCache Throughput Loss Analysis in Long-Context MLA Workloads 💬2
- [#44635](https://github.com/sgl-project/sglang/issues/44635) [RFC] Context-parallel support for the unified L3 key scheme 💬2
- [#44641](https://github.com/sgl-project/sglang/issues/44641) [Bug] Client-declared mm_hashes controls multimodal prefix-cache identity: wrong-image KV reuse and cross-tenant image disclosure 💬2
- [#44789](https://github.com/sgl-project/sglang/issues/44789) [Bug] MiMo-V2.6: MiMoV2Processor hard-codes CLIP mean/std, checkpoint preprocessor_config specifies ImageNet 💬1
- [#44758](https://github.com/sgl-project/sglang/issues/44758) [Bug] Kimi-K3: `nvidia_kda` prefill produces NaN after ~1,800 tokens (Triton is correct) 💬1
- [#44748](https://github.com/sgl-project/sglang/issues/44748) [Bug] Grayscale JPEG's processing failes on normalization step
- [#44721](https://github.com/sgl-project/sglang/issues/44721) [RFC] scheduler: Overlap prefill scheduling and KV loading with model execution
- [#44786](https://github.com/sgl-project/sglang/issues/44786) [RFC / Feature] SPICY-KV: 28.6x–50x Pre-RoPE Algebraic Multigrid KV Compression for RadixAttention & Long-CoT (91.7%–100% RULER Recall & 100% Shared-Prefix Multi-Query Reuse)
- [#44754](https://github.com/sgl-project/sglang/issues/44754) Quick survey: your experience as a PyTorch Ecosystem maintainer
- [#44745](https://github.com/sgl-project/sglang/issues/44745) [Bug] When client disconnect with `pause_generation(mode="abort")` and `release_memory_occupation` kills the scheduler
- [#44744](https://github.com/sgl-project/sglang/issues/44744) [Bug] `pause_generation(mode="retract")` while a request's grammar is compiling, then `release_memory_occupation` with an AssertionError kills the scheduler
- [#44697](https://github.com/sgl-project/sglang/issues/44697) [RFC] MoE routing simulator for prefill imbalance profiling: balanced reference and GPU-faithful replay
- [#44678](https://github.com/sgl-project/sglang/issues/44678) [Roadmap] Muse Spark Open Development & Optimization
- [#44675](https://github.com/sgl-project/sglang/issues/44675) [Roadmap] Intel CPU (Xeon) Backend Optimization (2026Q4) `intel` `cpu` `roadmap`
- [#44674](https://github.com/sgl-project/sglang/issues/44674) [Roadmap] Intel GPU (XPU) Backend Optimization (2026Q4) `intel` `xpu` `roadmap`

#### 🔒 Closed Issues
- [#29562](https://github.com/sgl-project/sglang/issues/29562) [Bug] GLM-5.2-NVFP4 error on pro6000
- [#31458](https://github.com/sgl-project/sglang/issues/31458) [Feature] RFC: SGLang KV Indexer for Distributed KV Cache Placement Metadata
- [#34718](https://github.com/sgl-project/sglang/issues/34718) [Bug] DeepSeek-V4 sparse attention indexer (`fp8_paged_mqa_logits`) illegal memory access with long-context requests
- [#43988](https://github.com/sgl-project/sglang/issues/43988) [Bug] --fp4-gemm-backend marlin crashes with NVFP4 W4A4 checkpoints on SM100 (mm_fp4 has no 'marlin' backend)
- [#33985](https://github.com/sgl-project/sglang/issues/33985) [Bug] DSpark speculative decoding cannot start on SM120: decode-dsv4 has no topk=192 instantiation, so verify falls through to the prefill kernel's num_tokens > 64 assert
- [#28157](https://github.com/sgl-project/sglang/issues/28157) [Bug] Prometheus /metrics scrape can starve prefill bootstrap health checks
- [#44735](https://github.com/sgl-project/sglang/issues/44735) [Bug] HiCache host-tier hit on hybrid GDN model (Qwen3.8-Flash-Next) returns wrong output — kernel and direct io both affected
- [#35156](https://github.com/sgl-project/sglang/issues/35156) [Bug] sgl-model-gateway fails Clippy due to needless borrows in cache-aware policy tests
- [#35096](https://github.com/sgl-project/sglang/issues/35096) [Bug] apply_rotary_emb_flat_kernel rotates and overwrites the columns past rope_dim
- [#43738](https://github.com/sgl-project/sglang/issues/43738) [Bug] DeepSeek-V4.1-Flash (dsv4 + DSPARK): multi-turn prefix cache degrades to a constant ~11.5K-token hit — 60–80K conversation prefix re-prefilled every turn (GLM-5.3-Flash unaffected in the same environment)
- [#43580](https://github.com/sgl-project/sglang/issues/43580) [Bug] PP>1 + DSA skip-topk stage boundary: 'OwedOutput' object has no attribute 'shape' during decode CUDA-graph capture

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 131,425 · **Open issues:** 2,563 · **Last push:** <1h ago

On October 17, 2026, llama.cpp released several updates, including version b11703, which vectorizes softplus functions for hexagon using a new HVX helper, enhancing computation efficiency. Additionally, version b11702 introduced an MxFP4 MoE bin kernel tailored for Adreno X1 devices, while b11701 added Beam (Reflection) capabilities. Significant merged features today included the addition of decision models for the Granite switch in b11700 and support for Mellum2.1 in response to MTP in b11695. New issues emerged, with a notable bug report (#30644) indicating that Vulkan performance has degraded to 2-4 times slower with dual GPU configurations since a previous update.

#### 🚀 New Releases
- [b11703](https://github.com/ggml-org/llama.cpp/releases/tag/b11703) b11703
- [b11702](https://github.com/ggml-org/llama.cpp/releases/tag/b11702) b11702
- [b11701](https://github.com/ggml-org/llama.cpp/releases/tag/b11701) b11701
- [b11700](https://github.com/ggml-org/llama.cpp/releases/tag/b11700) b11700
- [b11699](https://github.com/ggml-org/llama.cpp/releases/tag/b11699) b11699
- [b11696](https://github.com/ggml-org/llama.cpp/releases/tag/b11696) b11696
- [b11695](https://github.com/ggml-org/llama.cpp/releases/tag/b11695) b11695
- [b11693](https://github.com/ggml-org/llama.cpp/releases/tag/b11693) b11693
- [b11690](https://github.com/ggml-org/llama.cpp/releases/tag/b11690) b11690
- [b11688](https://github.com/ggml-org/llama.cpp/releases/tag/b11688) b11688

#### ✅ Merged PRs
- [#29696](https://github.com/ggml-org/llama.cpp/pull/29696) sycl: wide stores and 256-thread groups for the q4_K/q5_K weight dequant
- [#30677](https://github.com/ggml-org/llama.cpp/pull/30677) skills: add slice-model
- [#30620](https://github.com/ggml-org/llama.cpp/pull/30620) ci: update device matrix for Snapdragon jobs by removing SM8750
- [#30435](https://github.com/ggml-org/llama.cpp/pull/30435) hexagon: vectorize softplus with HVX
- [#30691](https://github.com/ggml-org/llama.cpp/pull/30691) opencl: Add MxFP4 MoE bin kernel for Adreno X1 devices
- [#30670](https://github.com/ggml-org/llama.cpp/pull/30670) model: add Beam (Reflection)
- [#30676](https://github.com/ggml-org/llama.cpp/pull/30676) model: Granite switch decision
- [#21752](https://github.com/ggml-org/llama.cpp/pull/21752) common: honor HTTP_PROXY/HTTPS_PROXY env vars in http client
- [#30669](https://github.com/ggml-org/llama.cpp/pull/30669) convert: respect Mistral format when loading MoE config
- [#26174](https://github.com/ggml-org/llama.cpp/pull/26174) Add more benchmarks to llama-eval
- [#30581](https://github.com/ggml-org/llama.cpp/pull/30581) hexagon: correct HMX FA sinks
- [#30612](https://github.com/ggml-org/llama.cpp/pull/30612) model : MTP support for Mellum2.1
- [#30647](https://github.com/ggml-org/llama.cpp/pull/30647) convert: speed up model endian conversion and add more datatype support
- [#29889](https://github.com/ggml-org/llama.cpp/pull/29889) [SYCL]: fix memory errors in mul_mat, split buffer, host pool
- [#30630](https://github.com/ggml-org/llama.cpp/pull/30630) gguf-py : add numpy Q1_0 and Q2_0 de/quantization support
- [#30468](https://github.com/ggml-org/llama.cpp/pull/30468) vulkan: fix gpu-visible host memory issues
- [#29720](https://github.com/ggml-org/llama.cpp/pull/29720) CUDA: HIP: rms_norm: add variants that load float4 at a time and store x in registers
- [#30061](https://github.com/ggml-org/llama.cpp/pull/30061) common : read ngram cache parts by reference instead of copying
- [#30575](https://github.com/ggml-org/llama.cpp/pull/30575) convert : support text-only checkpoints in pplx-decider
- [#30296](https://github.com/ggml-org/llama.cpp/pull/30296) cpu : reduce AVX2 tiled accumulators together
- [#30588](https://github.com/ggml-org/llama.cpp/pull/30588) ggml-cpu(s390x): refactor repack helper functions
- [#30236](https://github.com/ggml-org/llama.cpp/pull/30236) [SYCL] Reduce the build threads to half in docker building
- [#30618](https://github.com/ggml-org/llama.cpp/pull/30618) tests : catch vanished rows in the fusion baseline
- [#30611](https://github.com/ggml-org/llama.cpp/pull/30611) Fix failing RocM tests
- [#30584](https://github.com/ggml-org/llama.cpp/pull/30584) graph : add precision handling for MELLUM architecture
- [#30635](https://github.com/ggml-org/llama.cpp/pull/30635) hexagon: tensor repacking rework and support for tiled and flat quantized and fp weights
- [#30613](https://github.com/ggml-org/llama.cpp/pull/30613) llama : share the k-pool input views between layers
- [#30449](https://github.com/ggml-org/llama.cpp/pull/30449) Limit max CUDA pinned host buffer size to 4 GB
- [#29337](https://github.com/ggml-org/llama.cpp/pull/29337) sycl: support reordered Q8_0 MoE weights
- [#30456](https://github.com/ggml-org/llama.cpp/pull/30456) [SYCL] Enable ssl in build script and CI

#### 🐛 New Issues
- [#30644](https://github.com/ggml-org/llama.cpp/issues/30644) Misc. bug: Vulkan: generation 2-4x slower with two GPUs since #29741 (GCN 1.0 / Tahiti, no ReBAR) `bug-unconfirmed` 💬3
- [#30695](https://github.com/ggml-org/llama.cpp/issues/30695) vulkan: ~3x decode regression with spec decode + large -c on multi-device systems since e0bcacc 💬1
- [#30678](https://github.com/ggml-org/llama.cpp/issues/30678) Eval bug: mellum2/vulkan: token generation performance dropped from 44t/s to 7.8t/s `bug-unconfirmed`
- [#30668](https://github.com/ggml-org/llama.cpp/issues/30668) Link failure in ggml-cpu on CI 💬1
- [#30653](https://github.com/ggml-org/llama.cpp/issues/30653) test-backend-ops MUL_MAT tq1_0 fails on Vulkan on both Intel Arc and Adreno 840 💬1
- [#30654](https://github.com/ggml-org/llama.cpp/issues/30654) quantized MUL_MAT gives wrong results on Adreno 840 while the same cases pass on Intel Arc 💬1
- [#30698](https://github.com/ggml-org/llama.cpp/issues/30698) Eval bug: Regression in #30257: Gemma 4 with --mmproj and MTP (-md) aborts on startup with GGML_ASSERT(ubatch->embd_state) `bug-unconfirmed`
- [#30697](https://github.com/ggml-org/llama.cpp/issues/30697) Eval bug: --moe-cache-mib crashes at load on Vulkan (RX 6900 XT, Windows) `bug-unconfirmed`
- [#30696](https://github.com/ggml-org/llama.cpp/issues/30696) Eval bug: qwen4exp MTP — draft-only export (null trunk tensors) segfaults during context reservation
- [#30692](https://github.com/ggml-org/llama.cpp/issues/30692) Eval bug: vulkan int dot bug `bug-unconfirmed`
- [#30688](https://github.com/ggml-org/llama.cpp/issues/30688) Eval bug: Vulkan draft-mtp decode ~4x slower and prefill ~6x slower since #30020 (target compute buffer re-allocated into GTT)
- [#30675](https://github.com/ggml-org/llama.cpp/issues/30675) Misc. bug: llama-server: a request can hang for tens of seconds with more keep-alive connections than --threads-http `bug-unconfirmed`
- [#30667](https://github.com/ggml-org/llama.cpp/issues/30667) Misc. bug: Some browsers have web search tools, other don't have them. `bug-unconfirmed`
- [#30651](https://github.com/ggml-org/llama.cpp/issues/30651) Feature Request: update ROCm release builds 10.0.0 -> 10.1.0 `enhancement`
- [#30649](https://github.com/ggml-org/llama.cpp/issues/30649) vulkan full offload of a 27B TQ1_0 model crashes the Adreno 840 driver inside vkGetDeviceFaultInfoEXT
- [#30638](https://github.com/ggml-org/llama.cpp/issues/30638) [Regression]: draft-mtp decode ~10-13% slower on master vs a02c7f58c (RADV, RDNA3) — verify-step slowdown + cache-reuse-dependent acceptance instability

#### 🔒 Closed Issues
- [#25436](https://github.com/ggml-org/llama.cpp/issues/25436) Eval bug: DeepSeep V4 garbled output on Strix Halo with ROCm
- [#26399](https://github.com/ggml-org/llama.cpp/issues/26399) Eval bug: GGML_OP_TOP_K falls back to CPU on HIP/ROCm above ~3–4K context — 6.4× token-generation loss on DeepSeek-V4-Flash
- [#27063](https://github.com/ggml-org/llama.cpp/issues/27063) Eval bug: SYCL completely broken on A770
- [#27038](https://github.com/ggml-org/llama.cpp/issues/27038) Misc. bug: SYCL new host-pinned memory high CPU utilization for large allocations
- [#26702](https://github.com/ggml-org/llama.cpp/issues/26702) Misc. bug: ROCm gfx1031 build report (why ROCM is better than vulkan)
- [#26445](https://github.com/ggml-org/llama.cpp/issues/26445) Eval bug: GLM-5.2 terrible performance on ROCm/HIP after Indexer PR #25407: prefill ~6x slower, load time ~40x longer
- [#25692](https://github.com/ggml-org/llama.cpp/issues/25692) SYCL: GPU hang (xe ccs engine reset) with flash attention + quantized KV cache under sustained server load on Arc Pro B70
- [#26209](https://github.com/ggml-org/llama.cpp/issues/26209) Regression after c7d8722: llama-server generates infinite "/" tokens in agent mode
- [#30455](https://github.com/ggml-org/llama.cpp/issues/30455) Misc. bug: llama-server spam log output
- [#26058](https://github.com/ggml-org/llama.cpp/issues/26058) Eval bug: [SYCL] Garbled output on 2+ GPUs
- [#25812](https://github.com/ggml-org/llama.cpp/issues/25812) Eval bug: SYCL: UR_RESULT_ERROR_OUT_OF_HOST_MEMORY when offloading GLM-5.2 (glm_moe_dsa) MoE experts to Intel Arc GPUs
- [#27178](https://github.com/ggml-org/llama.cpp/issues/27178) Eval bug: Muse Glimmer NVFP4 fails to load, then emits one repeated token
- [#27771](https://github.com/ggml-org/llama.cpp/issues/27771) SYCL: MUL_MAT with bf16 weights returns a wrong answer at bs=[1,3] with a permuted operand (Arc 140T, Xe-LPG)
- [#28093](https://github.com/ggml-org/llama.cpp/issues/28093) Misc. bug: Vulkan: AMD iGPU causes massive system RAM reservation with discrete R9700; disabling iGPU fixes it.
- [#27871](https://github.com/ggml-org/llama.cpp/issues/27871) Eval bug: qwen4exp (Qwen3.8-Flash-Next) aborts with CUDA `invalid argument` at the native 262144 depth on GB10 (sm_121)
- [#27667](https://github.com/ggml-org/llama.cpp/issues/27667) Misc. bug: RPC + Metal: main node retains the full model with default mmap load mode, capping split models to a single node's memory
- [#30632](https://github.com/ggml-org/llama.cpp/issues/30632) Llama app GUI for linux
- [#26750](https://github.com/ggml-org/llama.cpp/issues/26750) Eval bug: draft-mtp acceptance rate collapses on CUDA (40.7%) vs Vulkan (~92%) — same GGUF, same build, parameter-invariant
- [#28124](https://github.com/ggml-org/llama.cpp/issues/28124) Eval bug: Vulkan flash attention silently ignores GGML_PREC_F32 on fp16-capable GPUs, causing long-context corruption for MLA models
- [#28166](https://github.com/ggml-org/llama.cpp/issues/28166) Eval bug: every mrope image decode on hybrid recurrent models (qwen3_5) triggers guaranteed non-consecutive position warnings in llama_memory_recurrent; mechanism fixed by #27941 for hybrid-idx only
- [#30644](https://github.com/ggml-org/llama.cpp/issues/30644) Misc. bug: Vulkan: generation 2-4x slower with two GPUs since #29741 (GCN 1.0 / Tahiti, no ReBAR)
- [#27980](https://github.com/ggml-org/llama.cpp/issues/27980) qwen4exp: slow decode on Pascal (sm_61) — 18 tok/s vs 29.5 for same-class qwen3.5moe with more active params
- [#27141](https://github.com/ggml-org/llama.cpp/issues/27141) Eval bug: nemotron_h_moe aborts in ggml_ssm_scan during context reservation — GGML_ASSERT(K >= 1) failed (b10360)
- [#30695](https://github.com/ggml-org/llama.cpp/issues/30695) vulkan: ~3x decode regression with spec decode + large -c on multi-device systems since e0bcacc
- [#30547](https://github.com/ggml-org/llama.cpp/issues/30547) Eval bug: vulkan: slower prompt processing with multi-device + cpu-moe MoE after #29741 (e0bcaccb)
- [#29899](https://github.com/ggml-org/llama.cpp/issues/29899) Conversion to GGUF bug: --mistral-format failed to be applied
- [#26591](https://github.com/ggml-org/llama.cpp/issues/26591) Compile bug: Error building with with CUDA 11.8: cudaGridDependencySynchronize undefined in common.cuh
- [#28081](https://github.com/ggml-org/llama.cpp/issues/28081) Eval bug: [server] Fall back gracefully instead of throwing fatal exception when lazy tool grammar fails to parse
- [#28100](https://github.com/ggml-org/llama.cpp/issues/28100) Eval bug: qwen 3.8 flash next tensor parallel on sycl
- [#30304](https://github.com/ggml-org/llama.cpp/issues/30304) Misc. bug: examples/sycl/build.sh builds without openssl support
- [#30626](https://github.com/ggml-org/llama.cpp/issues/30626) Feature Request: gguf-py: add numpy quantisation for Q1_0 and Q2_0
- [#27357](https://github.com/ggml-org/llama.cpp/issues/27357) Feature Request: HTTP accept gzip/brotli compression
- [#27857](https://github.com/ggml-org/llama.cpp/issues/27857) Misc. bug: Remote preset.ini fetched by -hf is rendered into child argv unfiltered (mcp-servers-json → command execution)
- [#28095](https://github.com/ggml-org/llama.cpp/issues/28095) Misc. bug: Media loading failed and exit code 0 in llama-cli.
- [#28106](https://github.com/ggml-org/llama.cpp/issues/28106) glm5next: resolve_fused_ops validates device placement but not tensor types; no escape hatch for GDN/HC fusion
- [#28112](https://github.com/ggml-org/llama.cpp/issues/28112) Misc. bug: Intermittent (~30%) CUDA "shared object initialization failed" at cudaFuncSetAttribute in fattn-mma-f16 on GB10/sm_121 (Windows arm64)
- [#28114](https://github.com/ggml-org/llama.cpp/issues/28114) Compile bug: tools/tuning hardcodes ${CMAKE_SOURCE_DIR}, breaks FetchContent consumers (ggml-metal-tuning.h not found)
- [#28126](https://github.com/ggml-org/llama.cpp/issues/28126) Misc. bug: Kimi-K3 over RPC crashes the worker on Apple Silicon
- [#28142](https://github.com/ggml-org/llama.cpp/issues/28142) Eval bug: llama-mtmd-cli segfaults on OOM instead of returning an error
- [#28165](https://github.com/ggml-org/llama.cpp/issues/28165) Eval bug: SYCL backend models load in WSL2
- [#28179](https://github.com/ggml-org/llama.cpp/issues/28179) Feature Request: Deferred tool loading
- [#28180](https://github.com/ggml-org/llama.cpp/issues/28180) Eval bug: ppc64le llamafile Q0 MMA KERNEL_Q0 OOB store when n=4
- [#30579](https://github.com/ggml-org/llama.cpp/issues/30579) Eval bug: Mellum NaN on Metal with Q8_0 (ffn_moe_down input exceeds F16 range)

### Ollama (`ollama/ollama`)

**Stars:** 183,500 · **Open issues:** 4,314 · **Last push:** <1h ago

On October 17, 2026, Ollama released version v0.40.6, which included significant updates such as preventing orphaned runners on Windows, adding the q2_0 tensor and file types, and launching the Clef feature in Ollama's cloud. Key merged pull requests enhanced documentation on model grouping in cloud usage, supported proxies on registry redirect targets, and improved identifier usage for the --ask mode question keys. Among the new issues reported, a notable concern is #19060, where users encountered empty responses from the GPT-OSS 20B model when running on an AMD Radeon Pro 5700 XT via Vulkan, while CPU inference remained functional.

#### 🚀 New Releases
- [v0.40.6](https://github.com/ollama/ollama/releases/tag/v0.40.6) v0.40.6

#### ✅ Merged PRs
- [#19069](https://github.com/ollama/ollama/pull/19069) docs: add model grouping to cloud usage
- [#19065](https://github.com/ollama/ollama/pull/19065) transfer: support proxies on registry redirect targets
- [#19041](https://github.com/ollama/ollama/pull/19041) use identifiers for --ask mode question keys

#### 🐛 New Issues
- [#19060](https://github.com/ollama/ollama/issues/19060) GPT-OSS 20B returns empty response on AMD Radeon Pro 5700 XT (16 GB) via Vulkan, while CPU inference works `bug` 💬4
- [#19067](https://github.com/ollama/ollama/issues/19067) Auto-Start of ollama without permisson `bug` 💬1
- [#19057](https://github.com/ollama/ollama/issues/19057) nemotron-3.5-bolt:74b-a9b: Metal 'kernel not found' (mul_mm_id) crashes runner on any tool call (unexpected EOF) `macos` 💬1
- [#19043](https://github.com/ollama/ollama/issues/19043) the websearch is disabled in random models `bug` `app` 💬1
- [#19045](https://github.com/ollama/ollama/issues/19045) Optional application-layer security for exposed Ollama servers (attack screening, automatic bans, per-route policies, IP allowlist)
- [#19062](https://github.com/ollama/ollama/issues/19062) D1 vision: repeated /v1/systemone HTTP 500 with memory-slot/KV-cache errors after sequential requests
- [#19044](https://github.com/ollama/ollama/issues/19044) gemma4 with think:false returns an empty message after a tool result

#### 🔒 Closed Issues
- [#18716](https://github.com/ollama/ollama/issues/18716) Error pulling models: Error: redirect target not allowed
- [#19002](https://github.com/ollama/ollama/issues/19002) Ollama Text Classifier modles slower under version 0.40.4 ?
- [#18971](https://github.com/ollama/ollama/issues/18971) embeddinggemma-2:740m (and other tags) missing MLX badge on ollama.com
- [#19043](https://github.com/ollama/ollama/issues/19043) the websearch is disabled in random models
- [#19044](https://github.com/ollama/ollama/issues/19044) gemma4 with think:false returns an empty message after a tool result

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,400 · **Open issues:** 5,536 · **Last push:** <1h ago

On October 17, 2026, there were no new releases for LiteLLM, but several important pull requests were merged, including fixes for handling response headers in non-streaming chat completions (#46928) and issues with Azure API routing (#46866). Notably, a significant refactor for the UI allows users to share URL states for usage views and create deep links (#43425). Additionally, a fix was implemented to prevent concurrency issues during sign-ins (#46855). Among newly reported bugs, issue #46879 highlights a problem where provider budget spend remains frozen in the in-memory cache, leading to persistent 429 errors until a proxy restart occurs.

#### ✅ Merged PRs
- [#46967](https://github.com/BerriAI/litellm/pull/46967) fix(openai): send chat completions through client.post so the SDK's per-message param transform stops holding the event loop
- [#47022](https://github.com/BerriAI/litellm/pull/47022) docs(cost): rewrite stale completion_cost docstring
- [#46969](https://github.com/BerriAI/litellm/pull/46969) fix(azure_ai): bill Grok reasoning tokens whatever the deployment is named
- [#46044](https://github.com/BerriAI/litellm/pull/46044) fix(logging): stop the spend metadata merge from walking a dict the logging thread writes to
- [#46928](https://github.com/BerriAI/litellm/pull/46928) fix(openai_like)!: surface provider response headers on non-streaming chat completions
- [#46936](https://github.com/BerriAI/litellm/pull/46936) fix(bedrock)!: block realtime replay after an input-first start and reject malformed Nova Sonic session settings
- [#41350](https://github.com/BerriAI/litellm/pull/41350) fix(ui): preserve key settings drafts during background refreshes
- [#43425](https://github.com/BerriAI/litellm/pull/43425) feat(ui): shareable URL state for usage views and users-to-usage deeplinks
- [#46972](https://github.com/BerriAI/litellm/pull/46972) feat(cost-map): support s3:// URIs for LITELLM_MODEL_COST_MAP_URL
- [#47008](https://github.com/BerriAI/litellm/pull/47008) test(ui): wait for the logout redirect before visiting a protected page
- [#46998](https://github.com/BerriAI/litellm/pull/46998) test(e2e): fix MCP tool search hit matching and the retired Bedrock image model
- [#47001](https://github.com/BerriAI/litellm/pull/47001) test(integration): fix seven CircleCI integration tests that race or assume a worker spread
- [#47006](https://github.com/BerriAI/litellm/pull/47006) fix(caching): backport #45784 and #46488 to rc/1.106.0
- [#47009](https://github.com/BerriAI/litellm/pull/47009) fix(cost): bill bridged /v1/messages Responses replies like native /v1/responses for reasoning tokens and service tier (backport #46975 to rc/1.107.0)
- [#47000](https://github.com/BerriAI/litellm/pull/47000) fix(bedrock): set supports_none_reasoning_effort on gpt-6-sol and gpt-6-luna
- [#46978](https://github.com/BerriAI/litellm/pull/46978) refactor(ui): validate model edit prices in the zod schema
- [#39966](https://github.com/BerriAI/litellm/pull/39966) feat(openai)!: honor per-deployment workload identity on non-chat routes
- [#46377](https://github.com/BerriAI/litellm/pull/46377) fix(providers): route Azure Responses past dated api versions, count Grok reasoning tokens on azure_ai, refresh provider sets after register_model, fix gpt-6.1-sol Azure rows
- [#46975](https://github.com/BerriAI/litellm/pull/46975) fix(cost): bill bridged /v1/messages Responses replies like native /v1/responses for reasoning tokens and service tier
- [#46982](https://github.com/BerriAI/litellm/pull/46982) fix(mcp): stop proxy-started legacy listeners from consuming server rpm (rc/1.107.0)
- [#46991](https://github.com/BerriAI/litellm/pull/46991) feat(cost-map): add baseten and nebius rows for Reflection Beam 1.0
- [#46987](https://github.com/BerriAI/litellm/pull/46987) fix(bedrock): backfill Priority and Batch prices from the AWS offer index
- [#46855](https://github.com/BerriAI/litellm/pull/46855) fix(sso): concurrent first sign-ins land on the winner's account, worker-kill test stops waiting on the reap
- [#46583](https://github.com/BerriAI/litellm/pull/46583) fix(proxy)!: answer 400 for malformed tools on count_tokens instead of crashing
- [#46796](https://github.com/BerriAI/litellm/pull/46796) docs(agents): keep directory rules in nested AGENTS.md and pin integration tests to CircleCI
- [#46338](https://github.com/BerriAI/litellm/pull/46338) fix(guardrails): accept Gemini tools in generic_guardrail_api, add opt-in forward_messages_as_sent, name the error type on fail-open
- [#46941](https://github.com/BerriAI/litellm/pull/46941) feat(ui): add Authorization URL, Token URL and Scopes fields for OAuth Delegate and True Passthrough MCP servers
- [#46979](https://github.com/BerriAI/litellm/pull/46979) fix(proxy): give /team/delete transactions a 30s timeout
- [#46968](https://github.com/BerriAI/litellm/pull/46968) fix(mcp): stop proxy-started legacy listeners from consuming server rpm
- [#45136](https://github.com/BerriAI/litellm/pull/45136) fix(proxy): keep a retried /v1/messages stream's spend log by logging the superseded attempt as a failure
- [#46976](https://github.com/BerriAI/litellm/pull/46976) build(deps): bump claude-agent-sdk to 0.2.165 to unblock osv-scan (rc/1.107.0)
- [#46971](https://github.com/BerriAI/litellm/pull/46971) build(deps): bump claude-agent-sdk to 0.2.165 to unblock osv-scan
- [#46934](https://github.com/BerriAI/litellm/pull/46934) feat(ui): redesign the playground chat around a single composer and inspector
- [#46964](https://github.com/BerriAI/litellm/pull/46964) feat(cost-map): add together_ai reflection/Beam-1.0-501B-A23B
- [#44471](https://github.com/BerriAI/litellm/pull/44471) fix(bedrock): drop dangerous-tool-use beta without safeguards
- [#46956](https://github.com/BerriAI/litellm/pull/46956) fix(proxy): report in-memory spend queue size
- [#46830](https://github.com/BerriAI/litellm/pull/46830) feat(ui): add the 1 hour cache write cost to the add model and model edit forms
- [#44021](https://github.com/BerriAI/litellm/pull/44021) fix(openai)!: route gpt-transcribe to GPT audio transcription config
- [#46962](https://github.com/BerriAI/litellm/pull/46962) test(cost): rekey vertex gemini, add bedrock mantle gpt and claude-opus-5-5, drop suite-only price fields
- [#46959](https://github.com/BerriAI/litellm/pull/46959) fix(rust): forward Anthropic headers to DeepSeek
- [#46957](https://github.com/BerriAI/litellm/pull/46957) test(perf): cap every background Postgres statement at 0.9 calls per request
- [#46819](https://github.com/BerriAI/litellm/pull/46819) feat(gateway): accept virtual keys from LiteLLM_VerificationToken
- [#46817](https://github.com/BerriAI/litellm/pull/46817) feat(router): load balance, retry and cool down across deployments of a model group
- [#46814](https://github.com/BerriAI/litellm/pull/46814) feat(gateway): native Bedrock invoke for /v1/messages
- [#46813](https://github.com/BerriAI/litellm/pull/46813) feat(gateway): native OpenAI chat completions with SSE passthrough
- [#46808](https://github.com/BerriAI/litellm/pull/46808) feat(gateway): health probes, Prometheus /metrics and graceful drain
- [#46806](https://github.com/BerriAI/litellm/pull/46806) feat(gateway): load-test kit, Docker build knobs and TCP_NODELAY for the customer proxy
- [#46937](https://github.com/BerriAI/litellm/pull/46937) test(integration): remove BUG skip for 1 test that passes on main
- [#46924](https://github.com/BerriAI/litellm/pull/46924) fix(tests): drain SDK logging before restoring callbacks
- [#46926](https://github.com/BerriAI/litellm/pull/46926) test(rust-bridge): relocate dispatch tests to the Rust test suite
- [#46745](https://github.com/BerriAI/litellm/pull/46745) feat(sso): retain the SAML assertion at login as the saml2 subject token for oauth2_id_jag
- [#46748](https://github.com/BerriAI/litellm/pull/46748) feat(mcp): accept an ID-JAG as an RFC 7523 jwt-bearer grant on the gateway token endpoint
- [#46747](https://github.com/BerriAI/litellm/pull/46747) feat(sso): capture the IdP id_token on Microsoft and Google logins for oauth2_id_jag
- [#46944](https://github.com/BerriAI/litellm/pull/46944) test(perf): cap every awaited Postgres statement at 0.5 calls per request
- [#46939](https://github.com/BerriAI/litellm/pull/46939) test(cost): bill vertex gemini-3.8-flash reasoning tokens at the reasoning price
- [#46925](https://github.com/BerriAI/litellm/pull/46925) fix(proxy): streaming responses hand the event loop back every 50 ms instead of holding it for the whole buffered stream
- [#46843](https://github.com/BerriAI/litellm/pull/46843) fix(count_tokens): apply context_management edits in the Gemini /v1/messages/count_tokens count
- [#43667](https://github.com/BerriAI/litellm/pull/43667) fix(responses): log and bill every round of non-stream MCP auto-execute
- [#46931](https://github.com/BerriAI/litellm/pull/46931) test(cost): add tier 1 cost tracking cases for gpt-5.6-terra, gemini-4-argon and gemini-3.1-pro-preview
- [#46863](https://github.com/BerriAI/litellm/pull/46863) fix(bedrock)!: keep reasoning, thinking blocks and the json_mode finish_reason on fake streams
- [#46918](https://github.com/BerriAI/litellm/pull/46918) feat(ui): turn the Chat UI on by default
- [#42740](https://github.com/BerriAI/litellm/pull/42740) fix(proxy)!: delete callbacks configured under callbacks or failure_callback
- [#46831](https://github.com/BerriAI/litellm/pull/46831) fix(budget): hold Redis-less budget spend per key instead of queueing it per request
- [#44939](https://github.com/BerriAI/litellm/pull/44939) fix(realtime)!: keep turn_detection.type when a transcript guardrail disables auto-response
- [#46156](https://github.com/BerriAI/litellm/pull/46156) feat(volcengine): add Doubao-Seedance video generation via the OpenAI /v1/videos surface
- [#41127](https://github.com/BerriAI/litellm/pull/41127) feat(router): mid-stream fallback continuation for chat completions
- [#44199](https://github.com/BerriAI/litellm/pull/44199) fix(proxy)!: honor caller litellm_session_id in spend log session_id
- [#45743](https://github.com/BerriAI/litellm/pull/45743) fix(interactions): keep background interaction bills through crashes, late restarts, and deployment keys
- [#46839](https://github.com/BerriAI/litellm/pull/46839) fix(proxy)!: count prompt-only token_counter requests with the provider when call_endpoint is set
- [#39762](https://github.com/BerriAI/litellm/pull/39762) fix(prompt-templates): treat initial_prompt_value and final_prompt_value as optional
- [#44544](https://github.com/BerriAI/litellm/pull/44544) fix(router)!: keep RPM, region, and param checks when token counting fails
- [#36460](https://github.com/BerriAI/litellm/pull/36460) feat(gemini): allow disabling thought summaries while keeping thinking on
- [#43594](https://github.com/BerriAI/litellm/pull/43594) fix(proxy): track and drain management audit log writes on shutdown
- [#26667](https://github.com/BerriAI/litellm/pull/26667) perf(ui): page the member tables and look up budget rows once per render
- [#41683](https://github.com/BerriAI/litellm/pull/41683) fix: preserve non-null anyOf branches when stripping null types for Vertex
- [#41397](https://github.com/BerriAI/litellm/pull/41397) fix(anthropic): keep trailing user messages with None or empty list content
- [#46673](https://github.com/BerriAI/litellm/pull/46673) fix(guardrails): record every content filter match in logging_only and offer the mode in the UI
- [#45453](https://github.com/BerriAI/litellm/pull/45453) fix(responses): preserve provider request IDs in streaming failure logs
- [#46815](https://github.com/BerriAI/litellm/pull/46815) fix(proxy)!: count endpoints return errors in their source API shape instead of silent local counts
- [#46670](https://github.com/BerriAI/litellm/pull/46670) fix(bedrock): grant sts:GetWebIdentityToken and sts:TagGetWebIdentityToken in web identity session policy for claude_platform
- [#46197](https://github.com/BerriAI/litellm/pull/46197) fix(router): let an exact base_model widen a deployment's context window
- [#40605](https://github.com/BerriAI/litellm/pull/40605) feat(soniox): decode proxy form fields for context, translation and flags
- [#46846](https://github.com/BerriAI/litellm/pull/46846) test(integration): wait for the gen-AI span before reading the excluded-services operator trace
- [#46522](https://github.com/BerriAI/litellm/pull/46522) fix(bedrock-passthrough)!: return AWS-shaped errors so AWS SDKs read the code and message
- [#46834](https://github.com/BerriAI/litellm/pull/46834) fix(ui): validate the Add Model form when Test Connect is clicked
- [#46717](https://github.com/BerriAI/litellm/pull/46717) test(e2e): mixed_size_requests_2rps perf case (coding-agent bodies 5k to 1m tokens with tools, JWT and key callers, two guardrails)
- [#46822](https://github.com/BerriAI/litellm/pull/46822) fix(proxy): only release the legacy limiter's slot from an admitted Responses WebSocket
- [#46826](https://github.com/BerriAI/litellm/pull/46826) fix(vertex-ai): drop cached flex price from gemini 3 preview rows
- [#46827](https://github.com/BerriAI/litellm/pull/46827) fix(proxy): backport #46408 to rc/1.106.0
- [#46772](https://github.com/BerriAI/litellm/pull/46772) fix(count_tokens): return a 400 naming Anthropic blocks the OpenAI and Gemini count can't convert
- [#41877](https://github.com/BerriAI/litellm/pull/41877) fix(cost): bill Responses API image generation and usage reported web search as tool usage cost
- [#46798](https://github.com/BerriAI/litellm/pull/46798) test(e2e): perf datastore limits count the Postgres statements and Redis commands a request waits on, background work reported on its own
- [#46214](https://github.com/BerriAI/litellm/pull/46214) fix(bedrock): forward Nova Sonic realtime tool calls with their arguments
- [#46502](https://github.com/BerriAI/litellm/pull/46502) fix(proxy): reset end-user spend in committed pages so the budget cascade survives a large LiteLLM_EndUserTable
- [#33121](https://github.com/BerriAI/litellm/pull/33121) fix(crusoe): update base URL to current endpoint
- [#46767](https://github.com/BerriAI/litellm/pull/46767) fix(count_tokens): count Anthropic-format requests for Gemini the way /v1/messages inference converts them
- [#46782](https://github.com/BerriAI/litellm/pull/46782) fix(terraform)!: send additional_drop_params to the proxy instead of deleting the keys it names
- [#46774](https://github.com/BerriAI/litellm/pull/46774) test(e2e): attach perf case metrics and limits as JUnit properties
- [#46768](https://github.com/BerriAI/litellm/pull/46768) fix(responses): write one spend-log row per native WebSocket turn
- [#46807](https://github.com/BerriAI/litellm/pull/46807) fix(sso): share SAML sign-in state over Redis without enable_redis_auth_cache
- [#46759](https://github.com/BerriAI/litellm/pull/46759) fix(count_tokens): count Anthropic-format requests for OpenAI the way /v1/messages inference converts them
- [#46606](https://github.com/BerriAI/litellm/pull/46606) fix(guardrails): honor streaming settings on the Noma v2 guardrail
- [#46797](https://github.com/BerriAI/litellm/pull/46797) test(integration): build OpenAI and Anthropic SDK models before tests start threads
- [#46724](https://github.com/BerriAI/litellm/pull/46724) fix(responses): preserve explicit websocket API keys (internal copy of #40853)
- [#46787](https://github.com/BerriAI/litellm/pull/46787) refactor(rust-bridge): let each route host pick the body params
- [#46786](https://github.com/BerriAI/litellm/pull/46786) refactor(rust-bridge): move the route host modules under host/routes
- [#46805](https://github.com/BerriAI/litellm/pull/46805) test(ui): send Connection: close on every integration browser request

#### 🐛 New Issues
- [#46879](https://github.com/BerriAI/litellm/issues/46879) [Bug]: Provider budget spend stays frozen in the in-memory cache after the window key expires in Redis; 429s persist until proxy restart `llm translation` 💬2
- [#46876](https://github.com/BerriAI/litellm/issues/46876) [Bug]: SageMaker streaming breaks when a UTF-8 character is split across two PayloadPart events 💬2
- [#46872](https://github.com/BerriAI/litellm/issues/46872) [Bug]: Cannot edit a model with configured access windows `bug` 💬2
- [#46866](https://github.com/BerriAI/litellm/issues/46866) [Bug]: Azure Responses API sends the gpt5_series/ routing prefix to Azure as the deployment name `llm translation` 💬2
- [#46835](https://github.com/BerriAI/litellm/issues/46835) [Bug]: aimage_edit() turns a missing image into [None] instead of [], crashing Black Forest Labs image edit with an uncaught ValueError `llm translation` 💬2
- [#47005](https://github.com/BerriAI/litellm/issues/47005) [Bug]: /tag/new writes the tag before tagging its models, so a failed create leaves the tag behind and every retry fails "Tag … already exists" `bug` 💬1
- [#46999](https://github.com/BerriAI/litellm/issues/46999) [Bug]: /tag/update 500s "BudgetNewRequest() got multiple values for keyword argument 'budget_id'" on any tag that has a budget `bug` 💬1
- [#46958](https://github.com/BerriAI/litellm/issues/46958) [Bug]: Batch retrieve returns 403 for team-scoped models since v1.103.0 (authorize_model_for_key checks internal model_name_{team_id}_{uuid} against team.models, which holds only public names) `llm translation` 💬1
- [#46923](https://github.com/BerriAI/litellm/issues/46923) [Bug]: _pre_call_checks rejects requests headroom would fit under the window `bug` 💬1
- [#46909](https://github.com/BerriAI/litellm/issues/46909) [Bug]: Rejected model names create unbounded Prometheus failure metric series 💬1
- [#46880](https://github.com/BerriAI/litellm/issues/46880) [Bug]: Vertex batch cost skips the non-global x1.1; Vertex text embeddings priced per token, Google bills per character; wrong flex/priority/>200K prices for Gemini 2.5, Gemini 3.1 Flash-Lite, Kimi K2.5, GLM 5 `llm translation` 💬1
- [#46847](https://github.com/BerriAI/litellm/issues/46847) [Bug]: case-sensitive header lookup in _get_extra_header_tags drops configured spend tags `bug` 💬1
- [#47018](https://github.com/BerriAI/litellm/issues/47018) [Feature]: Allow setting LangSmith run metadata (extra.metadata) so traces can be filtered on custom fields `llm translation`
- [#47015](https://github.com/BerriAI/litellm/issues/47015) Gemini/Vertex path ignores `supports_sampling_params: false`; temperature/top_p/top_k are sent to Gemini 3.6+ models that silently ignore them `llm translation`
- [#47014](https://github.com/BerriAI/litellm/issues/47014) [Bug]: streamed response cache stores finish_reason "stop" for truncated streams; replay also drops completion_tokens_details `llm translation`
- [#47012](https://github.com/BerriAI/litellm/issues/47012) [Bug]: /access_group/new and /access_group/{name}/update silently drop `model_names` when `model_ids` is also sent, and echo the dropped names back `bug` `llm translation`
- [#47011](https://github.com/BerriAI/litellm/issues/47011) [Bug]: /key/generate and /user/new answer a bare 500 "Internal Server Error." for the Enterprise-only `get_spend_routes` permission; the licence message only reaches the log `bug`
- [#47010](https://github.com/BerriAI/litellm/issues/47010) [Bug]: provider - litellm_tag Read never reads `model_max_budget` back, so per-model budget changes made outside Terraform go unnoticed `bug`
- [#47007](https://github.com/BerriAI/litellm/issues/47007) [Bug]: provider: litellm_unified_access_group can't clear `description`, and destroying an already-deleted group fails on 404 `bug`
- [#47003](https://github.com/BerriAI/litellm/issues/47003) [Bug]: litellm_team_member / litellm_team_member_add never read the proxy: removed members stay in state, and destroying one fails with 400 "User not found in team" `bug`
- [#46977](https://github.com/BerriAI/litellm/issues/46977) [Bug]: Cohere chat sends a string stop as a string stop_sequences, the API expects a list `llm translation`
- [#46951](https://github.com/BerriAI/litellm/issues/46951) [Bug]: Key with empty models list bypasses unified access-group restrictions (access_group_ids never consulted) `bug` `llm translation`
- [#46952](https://github.com/BerriAI/litellm/issues/46952) [Feature]: Outbound Web Bot Auth signing hook `enhancement` `llm translation`
- [#46920](https://github.com/BerriAI/litellm/issues/46920) [Bug]: Guardrails rewrite the Anthropic `advisor_20260301` tool into an empty custom tool on `/v1/messages`, so Claude Code's `/advisor` fails with "No such tool available: advisor" `llm translation` `claude code`
- [#46921](https://github.com/BerriAI/litellm/issues/46921) [Bug]: Vertex/Gemini: tool parameters mutated in place, spend logs store the converted schema `llm translation`
- [#46914](https://github.com/BerriAI/litellm/issues/46914) [Bug]: RAG URL validation errors reflect resolved private addresses `llm translation`
- [#46917](https://github.com/BerriAI/litellm/issues/46917) [Bug]: Gateway authorization accepts revoked UI session cookies
- [#46916](https://github.com/BerriAI/litellm/issues/46916) [Bug]: Key budget duration and tier updates bypass budget authorization checks
- [#46911](https://github.com/BerriAI/litellm/issues/46911) [Bug]: Request supplied retry counts have no operator ceiling `llm translation`
- [#46915](https://github.com/BerriAI/litellm/issues/46915) [Bug]: Custom guardrail regex can outlive its timeout and block the proxy event loop
- [#46913](https://github.com/BerriAI/litellm/issues/46913) [Bug]: MCP debug mode exposes upstream URLs and auth resolution to callers
- [#46912](https://github.com/BerriAI/litellm/issues/46912) [Bug]: MCP access group listing returns names outside the caller scope
- [#46910](https://github.com/BerriAI/litellm/issues/46910) [Bug]: /user/filter/ui defaults to global user search for ordinary keys
- [#46906](https://github.com/BerriAI/litellm/issues/46906) [Bug]: OpenAI chat completion still drops metadata unless preview features are on `llm translation`
- [#46905](https://github.com/BerriAI/litellm/issues/46905) [Bug]: Bedrock Mantle GPT-5.6 entries still use mode responses `llm translation`
- [#46881](https://github.com/BerriAI/litellm/issues/46881) [Feature]: Configurable deployment labels & annotations in componentized Helm `enhancement`
- [#46874](https://github.com/BerriAI/litellm/issues/46874) [Bug]: Fallback budget check does not cover team-member budget, so a zero-cost model with a paid fallback still spends past the cap `llm translation`
- [#46864](https://github.com/BerriAI/litellm/issues/46864) [Bug]: aiohttp per-host pool exhaustion is silent, requests just time out with no diagnostic `llm translation`
- [#46853](https://github.com/BerriAI/litellm/issues/46853) [Bug]: free tier SSO lets a 6th user in, then locks out every SSO user including admins `bug`
- [#46850](https://github.com/BerriAI/litellm/issues/46850) [Feature]: Support Bedrock API keys (bearer token) for Bedrock rerank `enhancement` `llm translation`

#### 🔒 Closed Issues
- [#36401](https://github.com/BerriAI/litellm/issues/36401) [Feature]: Allow disabling Gemini `thinkingConfig.includeThoughts` — currently hardcoded True with `reasoning_effort`
- [#40404](https://github.com/BerriAI/litellm/issues/40404) [Bug]: Router / proxy never try the configured fallback when the upstream stream ends abnormally (cut, stalled, or malformed chunk) — fallback deployment gets zero requests
- [#46404](https://github.com/BerriAI/litellm/issues/46404) [Bug]: Budget reset never commits once `LiteLLM_EndUserTable` is large
- [#32412](https://github.com/BerriAI/litellm/issues/32412) [Bug]: UI startup fails with httpx.ReadError while loading general_settings from DB
- [#32923](https://github.com/BerriAI/litellm/issues/32923) Unknown Error in LLM interaction
- [#41317](https://github.com/BerriAI/litellm/issues/41317) [Bug]: OpenAI Workload Identity Federation not applied on BaseLLMHTTPHandler routes (image edits, videos, vector stores, …) — sends "Authorization: Bearer None"
- [#43867](https://github.com/BerriAI/litellm/issues/43867) [Bug]: default response format breaks gpt-transcribe and is not overwritable
- [#40851](https://github.com/BerriAI/litellm/issues/40851) [Bug]: LiteLLM_SpendLogs.session_id doesn't reflect litellm_session_id, breaks session grouping
- [#39759](https://github.com/BerriAI/litellm/issues/39759) [Bug]: Ollama provider raises KeyError on a custom prompt template that omits initial_prompt_value or final_prompt_value
- [#41187](https://github.com/BerriAI/litellm/issues/41187) [Bug]: streaming_handler assigns raw SDK usage to ModelResponseStream without normalizing (regression in v1.94.0, #32255)
- [#33094](https://github.com/BerriAI/litellm/issues/33094) [Bug]: bedrock_mantle requests fail with AssumeRoleWithWebIdentity
- [#32865](https://github.com/BerriAI/litellm/issues/32865) [Bug]: /v1/responses TPM rate limiter massively over-estimates tokens with base64 image input
- [#32898](https://github.com/BerriAI/litellm/issues/32898) litellm.APIConnectionError: OllamaExceptio
- [#32900](https://github.com/BerriAI/litellm/issues/32900) Gemini free tier key not working with wizard / proxy
- [#32904](https://github.com/BerriAI/litellm/issues/32904) [Bug]: map_system_message_pt crashes on content-block lists (supports_system_message=False): can only concatenate list (not "str") to list
- [#44543](https://github.com/BerriAI/litellm/issues/44543) [Bug]: gpt-transcribe is routed to the whisper config, which sends verbose_json and gets a 400
- [#38349](https://github.com/BerriAI/litellm/issues/38349) bug(terraform): additional_drop_params is not persisted on litellm_model
- [#41452](https://github.com/BerriAI/litellm/issues/41452) [Feature] Deeplink Internal Users → Usage for a single user (establishing a URL-state pattern for Usage views)
- [#44435](https://github.com/BerriAI/litellm/issues/44435) [Bug]: Claude Code auto mode: dangerous-tool-use beta + output_config.format on Bedrock Haiku 4.5 returns "invalid beta flag" (beta forwarded without safeguards)

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,134 · **Open issues:** 351 · **Last push:** <1h ago

On October 17, 2026, there were no new releases for Unsloth, but significant progress was made through 25 merged pull requests. Notable features included improvements to the Studio, with changes such as clearer icons and hover tooltips in the API page toolbar, support for custom video sizes, and optimizations for AMD NPU discovery. Additionally, several critical bug fixes were addressed, including enhancements to GPU placement and memory management. Among the new issues reported, a notable concern was the inability to access the desktop browser, raising questions about user accessibility and functionality.

#### ✅ Merged PRs
- [#14020](https://github.com/unslothai/unsloth/pull/14020) Studio: keep automatic GPU placement inert on ordinary hosts
- [#14017](https://github.com/unslothai/unsloth/pull/14017) Studio: read whole-GPU uuid masks from nvidia-smi rows and cache the MIG set
- [#14048](https://github.com/unslothai/unsloth/pull/14048) Studio: API page toolbar gets clearer icons and hover tooltips
- [#14049](https://github.com/unslothai/unsloth/pull/14049) Studio Hub: sidebar-matched pill icons, drop the Memory stat
- [#14042](https://github.com/unslothai/unsloth/pull/14042) Studio: show a finished chat's sidebar dot in the accent colour
- [#14050](https://github.com/unslothai/unsloth/pull/14050) Studio: custom video sizes and Images-style prompt fields on Create videos
- [#13957](https://github.com/unslothai/unsloth/pull/13957) Studio: list every GGUF build that shares a quant in a custom folder
- [#14022](https://github.com/unslothai/unsloth/pull/14022) AMD: Strix defers only to an installable generic tag; gfx1153 health gate classified at inventory refresh
- [#14024](https://github.com/unslothai/unsloth/pull/14024) Token budget: weight split entropy by labels on TRL 1.3 to 1.14
- [#14023](https://github.com/unslothai/unsloth/pull/14023) Follow-ups to the GRPO reward locals and FSDP2 mixed precision merges
- [#14028](https://github.com/unslothai/unsloth/pull/14028) Context parallel: gather the FSDP2 state dict in save_model on transformers 4.x
- [#14027](https://github.com/unslothai/unsloth/pull/14027) NF4 GEMV: keep the table load on 256 wide tiles
- [#14026](https://github.com/unslothai/unsloth/pull/14026) FP8 GEMV on Blackwell + Triton 3.3: no graph break under torch 2.7, keep the exact GEMV shapes that are faster
- [#13992](https://github.com/unslothai/unsloth/pull/13992) Move the Unsloth Studio MLX stack to mlx 0.32.4 and mlx-lm 0.32.2
- [#13975](https://github.com/unslothai/unsloth/pull/13975) perf(studio): enter Zoo's inference scope registry on Unsloth Studio's MLX paths
- [#14025](https://github.com/unslothai/unsloth/pull/14025) Optimizer state offload: keep inactive state on the host for unchunked Q-GaLore weight_quant steps
- [#14019](https://github.com/unslothai/unsloth/pull/14019) Windows hipinfo: an all-hiding ROCR mask still means no ROCm target
- [#13967](https://github.com/unslothai/unsloth/pull/13967) Kernel follow-ups: norm launch on HIP and under compile, grouped GEMM frozen operands, no CE eviction hint on H100
- [#13916](https://github.com/unslothai/unsloth/pull/13916) GRPO: install MoE routing replay when UNSLOTH_GRPO_ROUTING_REPLAY=1
- [#13900](https://github.com/unslothai/unsloth/pull/13900) GRPO: score old and reference logprobs over the truncated sampling support when opted in
- [#13986](https://github.com/unslothai/unsloth/pull/13986) Studio: faster frontend type check with TypeScript 7 and bun check
- [#13797](https://github.com/unslothai/unsloth/pull/13797) Studio: improve AMD NPU discovery, CLI support, and chat feedback
- [#13946](https://github.com/unslothai/unsloth/pull/13946) Keep opted-in bnb 4-bit MoE experts outside the compiled block
- [#13984](https://github.com/unslothai/unsloth/pull/13984) RMSNorm: restore in-place dX for pre-norm decoder norms
- [#13898](https://github.com/unslothai/unsloth/pull/13898) Fused LoRA kernels: support lora_dropout and lora_bias
- [#14007](https://github.com/unslothai/unsloth/pull/14007) studiobench CI: boot Studio with update checks off so a mid-run llama.cpp release cannot cover the scene
- [#14005](https://github.com/unslothai/unsloth/pull/14005) PEFT MoE conversion snapshot: add beam, which transformers main now fuses as qwen2_moe
- [#14004](https://github.com/unslothai/unsloth/pull/14004) Studio: raise the startup bundle budget by #13998's growth
- [#13885](https://github.com/unslothai/unsloth/pull/13885) Add opt-in TFLOPs and MFU logging with LoRA aware FLOP counts
- [#13978](https://github.com/unslothai/unsloth/pull/13978) Token budget: weight split-chunk TRL metrics by token count
- [#13998](https://github.com/unslothai/unsloth/pull/13998) Studio: searching a model maker in the Model hub lists Unsloth's uploads of its models
- [#13993](https://github.com/unslothai/unsloth/pull/13993) Studio: model picker ranks Recommended by the Model hub's Latest ranking
- [#13999](https://github.com/unslothai/unsloth/pull/13999) Studio: a hidden Chat with files panel stays hidden after the first message
- [#13976](https://github.com/unslothai/unsloth/pull/13976) Cover explicit RoPE position ids and compute the starting cache on CPU
- [#13996](https://github.com/unslothai/unsloth/pull/13996) Studio: scale the expanded markdown table's text with the UI font size
- [#13995](https://github.com/unslothai/unsloth/pull/13995) Studio: raise the startup bundle budget by #13989's growth
- [#13994](https://github.com/unslothai/unsloth/pull/13994) Tests: gate the new Q-GaLore offload CUDA case on a real CUDA device
- [#13977](https://github.com/unslothai/unsloth/pull/13977) head_dim 512 attention: sm80+ only, no 256 MB autotune buffer, OOM falls back to SDPA, no per-call mask sync
- [#13989](https://github.com/unslothai/unsloth/pull/13989) Studio: Chat with files X hides the panel, app tooltips, and higher-contrast traces
- [#13991](https://github.com/unslothai/unsloth/pull/13991) Studio: raise the startup bundle budget by the growth since 17901061d1
- [#13968](https://github.com/unslothai/unsloth/pull/13968) GRPO: latch the trainer's autocast precision on the efficient logprob path
- [#13884](https://github.com/unslothai/unsloth/pull/13884) Add `unsloth doctor --gpus` multi-GPU preflight and UNSLOTH_DEBUG_DISTRIBUTED
- [#13895](https://github.com/unslothai/unsloth/pull/13895) FSDP2: save_pretrained, merged saves and 4-bit checkpoints for sharded models
- [#13880](https://github.com/unslothai/unsloth/pull/13880) FSDP2: shard QLoRA 4-bit weights with fused LoRA kernels kept on
- [#13980](https://github.com/unslothai/unsloth/pull/13980) GRPO no-grad packing: check the OOM length cap before flattening ids
- [#13945](https://github.com/unslothai/unsloth/pull/13945) Studio: hide safetensors models that exceed VRAM when the fit filter is on
- [#13981](https://github.com/unslothai/unsloth/pull/13981) RMSNorm save output: skip inference tensor weights, keep the default path free of opt-in checks
- [#13911](https://github.com/unslothai/unsloth/pull/13911) GRPO: keep TRL vLLM weight sync on TRL < 0.28 unless fast_inference shares weights
- [#13951](https://github.com/unslothai/unsloth/pull/13951) Studio: keep the tool results of the turn in progress when compaction resets mid-turn
- [#13901](https://github.com/unslothai/unsloth/pull/13901) Sync full finetune weights into colocated vLLM in a few load_weights calls
- [#13974](https://github.com/unslothai/unsloth/pull/13974) Studio: Models panel part of its card, even form footer, OpenRouter mark under a new file name
- [#13972](https://github.com/unslothai/unsloth/pull/13972) Studio: even 17px spacing in the Hub filter popover
- [#13973](https://github.com/unslothai/unsloth/pull/13973) Studio: draw chat markdown tables inline with hover controls and a centered expand dialog
- [#13969](https://github.com/unslothai/unsloth/pull/13969) Studio: rank Latest Unsloth Models by trending weighed against release age
- [#13966](https://github.com/unslothai/unsloth/pull/13966) Studio: resizable Model hub split view, smaller row kebab, centred token icon
- [#13913](https://github.com/unslothai/unsloth/pull/13913) Studio: fix the context meter after tool calls on MLX and transformers
- [#13965](https://github.com/unslothai/unsloth/pull/13965) Studio: line the composer up with the chat column in the macOS Desktop app
- [#13940](https://github.com/unslothai/unsloth/pull/13940) Studio: train a structured column's conversation as a multi-turn chat
- [#13910](https://github.com/unslothai/unsloth/pull/13910) Context parallel: compose with FSDP2 on a (dp_shard, cp) mesh
- [#13979](https://github.com/unslothai/unsloth/pull/13979) Fix optimizer state offload crash with Q-GaLore weight quantization
- [#13927](https://github.com/unslothai/unsloth/pull/13927) Studio: honour MIG masks and size MIG cards by their slice
- [#13939](https://github.com/unslothai/unsloth/pull/13939) Studio: let safetensors and MLX vision models read transparent images
- [#13983](https://github.com/unslothai/unsloth/pull/13983) Studio: raise the startup bundle budget by the growth since 587079569a
- [#13982](https://github.com/unslothai/unsloth/pull/13982) Tests: gate the optimizer state offload CUDA cases on a real CUDA device
- [#13891](https://github.com/unslothai/unsloth/pull/13891) GRPO: opt-in zero-variance group exclusion and prompt-level loss aggregation
- [#13890](https://github.com/unslothai/unsloth/pull/13890) Fused Qwen3 q_norm / k_norm RMSNorm + RoPE Triton kernel (opt-in)
- [#13881](https://github.com/unslothai/unsloth/pull/13881) Add optim = "adamw_flash" (FlashAdamW from flashoptim) for lower optimizer memory
- [#13962](https://github.com/unslothai/unsloth/pull/13962) Keep the plain capability cache on single-GPU hosts
- [#13931](https://github.com/unslothai/unsloth/pull/13931) Installers (AMD, Linux): a Strix APU defers torch to a discrete card, and a lone gfx1153 warns instead of getting kernel-less wheels
- [#13970](https://github.com/unslothai/unsloth/pull/13970) Studio: proportional image attachments, attachment card and Chat with files polish
- [#13865](https://github.com/unslothai/unsloth/pull/13865) FSDP2: first-class LoRA and full finetuning, keep fused LoRA kernels per block
- [#13964](https://github.com/unslothai/unsloth/pull/13964) Studio: name the open connection, lead the provider menu with Custom, new OpenRouter logo
- [#13897](https://github.com/unslothai/unsloth/pull/13897) fix(studio): load audio GGUFs selected from custom folders
- [#13959](https://github.com/unslothai/unsloth/pull/13959) Studio: Deep research sits under Tools in the + menu
- [#13882](https://github.com/unslothai/unsloth/pull/13882) Add opt-in optimizer state CPU offload (UNSLOTH_OFFLOAD_OPTIMIZER_STATE=1)
- [#13870](https://github.com/unslothai/unsloth/pull/13870) DPO, ORPO, CPO: opt-in fused preference loss (UNSLOTH_FUSED_PREFERENCE_LOSS=1)
- [#13888](https://github.com/unslothai/unsloth/pull/13888) Fix RMSNorm and LayerNorm backward overwriting the incoming gradient
- [#13958](https://github.com/unslothai/unsloth/pull/13958) Studio: the bot-check page's Unsloth Desktop link opens Get started
- [#13923](https://github.com/unslothai/unsloth/pull/13923) Core: decide bfloat16, compile and TMA options from every visible NVIDIA GPU on mixed hosts
- [#13920](https://github.com/unslothai/unsloth/pull/13920) Context parallel: Ulysses for Gated DeltaNet hybrids (Qwen3.5, Qwen3-Next)
- [#13924](https://github.com/unslothai/unsloth/pull/13924) Studio installer: cover the GPUs CUDA_VISIBLE_DEVICES hides when picking the llama.cpp CUDA bundle
- [#13883](https://github.com/unslothai/unsloth/pull/13883) GRPO: exclude masked rows from clip_ratio metrics for one-token completions
- [#13878](https://github.com/unslothai/unsloth/pull/13878) Opt-in token-balanced and token-budget SFT micro-batches
- [#13855](https://github.com/unslothai/unsloth/pull/13855) Build RoPE cos/sin caches only on the device that uses them
- [#13877](https://github.com/unslothai/unsloth/pull/13877) GRPO packed logprobs: an OOM caps the packed length instead of disabling packing
- [#13848](https://github.com/unslothai/unsloth/pull/13848) Context parallel: Ulysses backend with packing and varlen attention
- [#13925](https://github.com/unslothai/unsloth/pull/13925) Studio installer (Windows AMD): treat hipinfo output as already mask-filtered when picking the gfx target
- [#13928](https://github.com/unslothai/unsloth/pull/13928) Studio: automatic image/video loads pick the freest GPU, and GPU picks respect what each card can run
- [#13866](https://github.com/unslothai/unsloth/pull/13866) GRPO: opt-in parking of optimizer state and gradients on host during rollout
- [#13872](https://github.com/unslothai/unsloth/pull/13872) Use side stream offload hooks for non-reentrant gradient checkpointing
- [#13869](https://github.com/unslothai/unsloth/pull/13869) Add a Triton head_dim 512 attention kernel for Gemma-4 global layers
- [#13868](https://github.com/unslothai/unsloth/pull/13868) RMSNorm: opt-in saving of the norm output instead of its input (UNSLOTH_RMSNORM_SAVE_OUTPUT)
- [#13857](https://github.com/unslothai/unsloth/pull/13857) Refuse an explicit offload_layers swap under FSDP / DeepSpeed
- [#13856](https://github.com/unslothai/unsloth/pull/13856) GRPO: keep TRL's old logprob gate when using vLLM
- [#13954](https://github.com/unslothai/unsloth/pull/13954) Prebuilt CUDA wheels: pin NVIDIA's re-published CUDA 13.4.1 manifest (win_arm64)
- [#4257](https://github.com/unslothai/unsloth/pull/4257) Add context parallelism support (SDPA only)

#### 🐛 New Issues
- [#13985](https://github.com/unslothai/unsloth/issues/13985) [Bug] The desktop browser cannot access it `feature request` `bug` 💬3
- [#14010](https://github.com/unslothai/unsloth/issues/14010) Quick survey: your experience as a PyTorch Ecosystem maintainer
- [#14038](https://github.com/unslothai/unsloth/issues/14038) [Bug] unable to pick model when Hugging Face is not responding `feature request` `bug`
- [#14037](https://github.com/unslothai/unsloth/issues/14037) [Feature] allow long-term memory across separate conversations `feature request`
- [#14035](https://github.com/unslothai/unsloth/issues/14035) [Bug] keyboard shortcuts UI does not match key labels on alternative keyboard layouts `feature request` `bug`
- [#14032](https://github.com/unslothai/unsloth/issues/14032) [Bug] Unsloth reports no managed desktop backend, unclear how to grant `feature request` `bug`
- [#14031](https://github.com/unslothai/unsloth/issues/14031) [Bug] Studio fails to install OOB when package feeds limit versions `feature request` `bug`
- [#14012](https://github.com/unslothai/unsloth/issues/14012) [Feature Request] Allow selecting auxiliary models for context compaction and internet search `feature request`
- [#13997](https://github.com/unslothai/unsloth/issues/13997) [Feature] make all popups use chosen theme `feature request`
- [#13955](https://github.com/unslothai/unsloth/issues/13955) [Feature] Add tasks and to-do features to the project `feature request`

#### 🔒 Closed Issues
- [#14010](https://github.com/unslothai/unsloth/issues/14010) Quick survey: your experience as a PyTorch Ecosystem maintainer
- [#13926](https://github.com/unslothai/unsloth/issues/13926) [Bug] unsloth lost models

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,145 · **Open issues:** 415 · **Last push:** 1h ago

On October 17, 2026, AIBrix saw no new releases, but several noteworthy pull requests were merged. Key fixes included addressing the handling of NaN or Inf metric values and ensuring that stale session sync results do not overwrite newer pins. Additionally, a significant feature was introduced to allow multimodal requests to be processed through EPD encode pods during PD routing. A notable new issue arose concerning the acceptance of NaN or Inf metric target values when the webhook is bypassed, highlighting ongoing challenges with stability and performance metrics. Overall, the day involved routine maintenance with critical adjustments to enhance the platform's functionality.

#### ✅ Merged PRs
- [#3130](https://github.com/vllm-project/aibrix/pull/3130) [Bug] Accept the hf:// alias in the runtime artifact downloader
- [#3119](https://github.com/vllm-project/aibrix/pull/3119) [Bug] Always download small runtime-critical files regardless of DOWNLOADER_ALLOW_FILE_SUFFIX
- [#3078](https://github.com/vllm-project/aibrix/pull/3078) fix(cache): preserve served model state across pod and ModelAdapter updates
- [#3128](https://github.com/vllm-project/aibrix/pull/3128) [Bug] Keep output predictions stable while routing a request
- [#3113](https://github.com/vllm-project/aibrix/pull/3113) [Bug] Keep stale session sync results from replacing newer pins
- [#3129](https://github.com/vllm-project/aibrix/pull/3129) [Docs] Translate the per-pod prefix eviction note for zh_CN
- [#3125](https://github.com/vllm-project/aibrix/pull/3125) [Bug] Stop matching a prefix on pods that no longer hold it
- [#3107](https://github.com/vllm-project/aibrix/pull/3107) [Bug] Expire inactive users from VTC token windows
- [#3114](https://github.com/vllm-project/aibrix/pull/3114) [Bug] Keep late KV events out of evicted context indexes
- [#3116](https://github.com/vllm-project/aibrix/pull/3116) [Bug] Count a panicking SlowStartBatch callback as a failure
- [#3126](https://github.com/vllm-project/aibrix/pull/3126) [Bug] Download Hugging Face LoRA adapters into the adapter directory
- [#3118](https://github.com/vllm-project/aibrix/pull/3118) [Bug] Reject a NaN or Inf metric targetValue
- [#3102](https://github.com/vllm-project/aibrix/pull/3102) [Bug] Finalize streamed requests on the final usage, not the first
- [#3069](https://github.com/vllm-project/aibrix/pull/3069) [Feat] Send multimodal requests through EPD encode pods in PD routing
- [#3026](https://github.com/vllm-project/aibrix/pull/3026) [Feat][API] Console: add namespaced Kubernetes Gateway provider
- [#3110](https://github.com/vllm-project/aibrix/pull/3110) [Feat] Ask a client of a waking ModelClaim to retry after 3 s
- [#3106](https://github.com/vllm-project/aibrix/pull/3106) [Bug] Reject non-finite decode costs and fix the async correction test wait
- [#3104](https://github.com/vllm-project/aibrix/pull/3104) [Bug] Return ControllerRevision list error from StormService reconcile
- [#3105](https://github.com/vllm-project/aibrix/pull/3105) [Bug] Keep prefix-cache-preble pod membership out of the request path

#### 🐛 New Issues
- [#3117](https://github.com/vllm-project/aibrix/issues/3117) [Bug] A NaN or Inf metric targetValue is accepted when the webhook is bypassed `kind/bug` `triage/needs-information` `area/orchestration` 💬2
- [#3115](https://github.com/vllm-project/aibrix/issues/3115) [Bug] SlowStartBatch counts a panicking callback as a success `kind/bug` `triage/needs-information` `area/orchestration` `area/batch` 💬2
- [#3124](https://github.com/vllm-project/aibrix/issues/3124) [Bug] Prefix-cache index keeps matching pods that no longer hold a hot prefix `kind/bug` `area/gateway` 💬1
- [#3123](https://github.com/vllm-project/aibrix/issues/3123) ModelWarmup target stays Running until the job timeout when Pod Security rejects its Pods `kind/misc` `area/orchestration` 💬1
- [#3120](https://github.com/vllm-project/aibrix/issues/3120) [Feat] Restrict gateway model discovery to one installation namespace `area/gateway` `kind/feature` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,202 · **Open issues:** 629 · **Last push:** <1h ago

On October 17, 2026, there were no new releases for the Semantic Router. Notable merged pull requests included feature enhancements such as the implementation of runtime graphs for Decision 3.0 (#4999), as well as bug fixes that improved memory backend configurations (#4987) and ensured proper handling of heartbeat chunk data from gateway aggregators (#4355). The team also introduced several locked environments for key components like the hallucination detection classifier and the KV mapper (#5106, #5104). Among new issues, the reported bug regarding `request_params` accepting a zero or negative `max_tokens_limit` (#5155) raised concern, as it could impact stability. Overall, the day focused on iterative improvements and stability enhancements within the framework.

#### ✅ Merged PRs
- [#4999](https://github.com/vllm-project/semantic-router/pull/4999) [Feature] Capture Decision 3.0 forwards as runtime graphs
- [#4987](https://github.com/vllm-project/semantic-router/pull/4987) [Bug] Reject invalid memory backend configuration
- [#4498](https://github.com/vllm-project/semantic-router/pull/4498) [Bug] Flush sr-bench stream evidence before fsync
- [#3494](https://github.com/vllm-project/semantic-router/pull/3494) [Proposal] Calibrated success-constrained model selection (#3412)
- [#4727](https://github.com/vllm-project/semantic-router/pull/4727) [Docs] Define the deployment architecture and CRD contract for #3043
- [#4355](https://github.com/vllm-project/semantic-router/pull/4355) [Bug] Accept empty-choice heartbeat chunks from gateway aggregators
- [#4064](https://github.com/vllm-project/semantic-router/pull/4064) [Test] Add E2E coverage for the conversation signal
- [#5075](https://github.com/vllm-project/semantic-router/pull/5075) [Bug] Accept truncation disabled for Chat and Messages targets
- [#5054](https://github.com/vllm-project/semantic-router/pull/5054) [Bug] Add Python 3.10 hashlib.file_digest fallback across harness and training
- [#5106](https://github.com/vllm-project/semantic-router/pull/5106) [Feature] Add a locked uv environment for the hallucination detection classifier
- [#5104](https://github.com/vllm-project/semantic-router/pull/5104) [Feature] Add a locked uv environment for the KV mapper
- [#5101](https://github.com/vllm-project/semantic-router/pull/5101) [Feature] Add a locked uv environment for the ML model selection trainer
- [#4930](https://github.com/vllm-project/semantic-router/pull/4930) [Bug] Add opt-in include_history scope for keyword signals
- [#5149](https://github.com/vllm-project/semantic-router/pull/5149) [Test] Count media worker loads in the repeated media test
- [#5083](https://github.com/vllm-project/semantic-router/pull/5083) [Bug] Refund local rate limiter quota when a later bucket denies the request
- [#5042](https://github.com/vllm-project/semantic-router/pull/5042) [Bug] Add missing Dashboard catalog logo
- [#4938](https://github.com/vllm-project/semantic-router/pull/4938) [Feature] Gate RAG and memory retrieval on request and backend capabilities
- [#4891](https://github.com/vllm-project/semantic-router/pull/4891) [Bug] Perform Valkey memory access tracking atomically without resurrecting deleted keys

#### 🐛 New Issues
- [#5155](https://github.com/vllm-project/semantic-router/issues/5155) [Bug] request_params accepts a zero or negative max_tokens_limit and max_n `accepted` `wg/mom-routing` 💬3
- [#5154](https://github.com/vllm-project/semantic-router/issues/5154) [Bug] The 429 Retry-After header truncates a fractional wait, so clients retry early or immediately `accepted` `wg/data-plane-networking` 💬3
- [#5165](https://github.com/vllm-project/semantic-router/issues/5165) [Feature] Model runtime: input-adaptive intra-op threads for CPU forwards `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#5169](https://github.com/vllm-project/semantic-router/issues/5169) [Bug] Stop echoing server filesystem paths and parse errors from ToolsDBHandler `bug` `needs-acceptance` `wg/developer-experience-ecosystem` 💬1
- [#5156](https://github.com/vllm-project/semantic-router/issues/5156) [Feature] Record bf16 autocast on NPU: 2.5x on Vela 2.0, opt-in accuracy option `enhancement` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5168](https://github.com/vllm-project/semantic-router/issues/5168) [Bug] GPU load materializes a full host copy before placing weights in VRAM `needs-acceptance` `wg/router-models-inference-runtime`
- [#5163](https://github.com/vllm-project/semantic-router/issues/5163) [Bug] Model result count mismatch can terminate the scheduler worker `needs-acceptance` `wg/router-models-inference-runtime`
- [#5161](https://github.com/vllm-project/semantic-router/issues/5161) [discussion] Replace classifier-driven routing with Decision models `needs-acceptance` `wg/mom-routing`
- [#5158](https://github.com/vllm-project/semantic-router/issues/5158) [Feature] NPU: register the fused rotate-half kernel `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#2880](https://github.com/vllm-project/semantic-router/issues/2880) [Feature] Add opt-in history evaluation to keyword signals
- [#5046](https://github.com/vllm-project/semantic-router/issues/5046) [Bug] ExtProc 502s every non-streaming response whose usage carries gateway metering fields
- [#5012](https://github.com/vllm-project/semantic-router/issues/5012) [Feature] Add a locked uv environment for the user feedback classifier
- [#4963](https://github.com/vllm-project/semantic-router/issues/4963) [Feature] multi_benchmark_eval: --api-key for authenticated endpoints and params extra_body passthrough
- [#4965](https://github.com/vllm-project/semantic-router/issues/4965) [Bug] Reject unknown or incomplete global.stores.memory backend config at load time
- [#4378](https://github.com/vllm-project/semantic-router/issues/4378) [Bug] Harness docs allow Python 3.10, but tools/ci and src/training call hashlib.file_digest (3.11+)
- [#5023](https://github.com/vllm-project/semantic-router/issues/5023) [Feature] Add a locked uv environment for the ML model selection trainer
- [#5044](https://github.com/vllm-project/semantic-router/issues/5044) [Bug] The GOOS=windows build fails where the !windows constraint is missing
- [#5015](https://github.com/vllm-project/semantic-router/issues/5015) [Feature] Add a locked uv environment for the domain classifier data preparation
- [#5041](https://github.com/vllm-project/semantic-router/issues/5041) [Bug] Dashboard Model Hub is missing the vLLM Semantic Router catalog logo
- [#4876](https://github.com/vllm-project/semantic-router/issues/4876) [Bug] Valkey Router Memory leaves partial or orphan records after failed or concurrent writes
- [#5081](https://github.com/vllm-project/semantic-router/issues/5081) [Bug] Local rate limiter burns quota from earlier buckets when a later bucket denies the request
- [#5115](https://github.com/vllm-project/semantic-router/issues/5115) [Bug] Hybrid cost adjustment multiplies the configured weight by itself
- [#5111](https://github.com/vllm-project/semantic-router/issues/5111) [Feature] Website: NPU deployment path and hardware matrix for Ascend
- [#4985](https://github.com/vllm-project/semantic-router/issues/4985) [Bug] Responses requests with the default "truncation": "disabled" are rejected for Chat and Anthropic backends
- [#5114](https://github.com/vllm-project/semantic-router/issues/5114) [Bug] AutoMix reads model size by substring: 114b matches 14b and 1b/2b/4b/9b all fall back to 7b
- [#5132](https://github.com/vllm-project/semantic-router/issues/5132) [Bug] Dashboard audit-log write failures are dropped silently

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*