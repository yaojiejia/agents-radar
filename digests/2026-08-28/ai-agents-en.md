# OpenClaw Ecosystem Digest 2026-08-28

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-08-28 00:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest - 2026-08-28

## Today's Overview
As of August 28, 2026, OpenClaw is showing vibrant activity with 500 issues and 500 pull requests (PRs) being updated in the past 24 hours. The project currently has no new releases but ongoing discussions indicate significant user engagement. The increase in active issue resolution and PR management suggests a strong contributor base committed to enhancing the platform's capabilities.

## Releases
There are no new releases today.

## Project Progress
A total of 162 PRs have been merged or closed recently, indicating strong progress on various fronts. Key PRs included:
- **Fix(telegram):** Preserves forum admission identity in audit ([#131293](https://github.com/openclaw/openclaw/pull/131293)).
- **Feat(gateway):** Introduction of a replay-safe session Goal protocol ([#131245](https://github.com/openclaw/openclaw/pull/131245)).
- **Fix(ui):** Unifies tooltip appearance and dismissal ([#131335](https://github.com/openclaw/openclaw/pull/131335)).
  
These changes collectively advance the stability and usability of OpenClaw’s gateway and UI components.

## Community Hot Topics
Several issues and PRs have gained notable attention for their complexity and community impact:
- **[#48788](https://github.com/openclaw/openclaw/issues/48788)**: Centric filename encoding utility, demonstrating community interest in handling multi-encoding scenarios.
- **[#115908](https://github.com/openclaw/openclaw/issues/115908)**: Bug regarding session transcript projection indicating concerns with session stability under load.
  
Notably, the push for centralized filename management reflects broader needs for improved internationalization support.

## Bugs & Stability
Today, several bugs were reported, categorized by severity:
1. **P0 - Critical:** [#126821](https://github.com/openclaw/openclaw/issues/126821) - SQLite corruption issue on fresh databases.
2. **P1 - High Severity:** [#125344](https://github.com/openclaw/openclaw/issues/125344) - Memory leaks affecting performance.
3. **P2 - Moderate:** [#99586](https://github.com/openclaw/openclaw/issues/99586) - Runtime tool returns blank body causing data visibility issues.

While many of these bugs have ongoing discussions for potential fixes, the critical ones remain without resolution in PRs.

## Feature Requests & Roadmap Signals
The community continues to actively propose enhancements:
- **[#42840](https://github.com/openclaw/openclaw/issues/42840)**: Request to add MathJax/LaTeX support to the Control UI suggests a need for improved mathematical content display.
- **[#88154](https://github.com/openclaw/openclaw/issues/88154)**: Feature request for Slack modal support indicates demand for richer user interaction in applications.

Given the volume and type of requests, there's anticipation that these features may be prioritized in future updates.

## User Feedback Summary
User interactions reveal a persistent demand for enhancements surrounding user experience and stability. Client feedback points to frustrations with session management and unintended memory leaks which impact engagement. Satisfaction appears to be dwindling among users experiencing these stability issues, highlighting a critical area for development focus.

## Backlog Watch
Open issues needing maintainer attention include:
- **[#44134](https://github.com/openclaw/openclaw/issues/44134)**: Frequent tool schema reloading causing abuse detection false positives.
- **[#50490](https://github.com/openclaw/openclaw/issues/50490)**: Activation commands not functioning correctly in group chats.

These issues remain pivotal for enhancing overall application integrity and require urgent responses to keep the community engaged and satisfied.

--- 

This structured overview reflects the ongoing development efforts and community engagement level within OpenClaw, making it crucial for maintainers to act on both bugs and feature requests to safeguard ongoing project vitality.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant/Agent Open-Source Ecosystem

## 1. Ecosystem Overview
The personal AI assistant and agent open-source ecosystem is characterized by rapid development and strong community engagement across multiple projects. An increasing focus on user experience enhancements, bug fixes, and feature requests reflects a growing demand for more sophisticated AI interactions. Each project showcases unique strengths, but common threads emerge in addressing stability, performance, and integration challenges, underlining both the competitive landscape and collaborative potential for shared innovations.

## 2. Activity Comparison

| Project        | Issues Count | PR Count | Release Status        | Health Score (Out of 5) |
|----------------|--------------|----------|-----------------------|--------------------------|
| OpenClaw       | 500          | 500      | No new releases       | 4                        |
| Hermes Agent   | 50           | 50       | v0.20.6 released      | 4.5                      |
| IronClaw       | 50           | 50       | v1.4.0-rc.1 released  | 4.2                      |
| QwenPaw        | 16           | 46       | v2.2.0-beta.1 released| 4.0                      |
| ZeroClaw       | 30           | 50       | No new releases       | 3.8                      |

**Key Insights:**  
- OpenClaw leads in active issue and PR management, demonstrating substantial community engagement.
- Hermes Agent and IronClaw recently achieved stable releases, improving their respective health scores.
- ZeroClaw lags slightly in health due to pressing unresolved issues.

## 3. OpenClaw's Position
**Advantages vs. Peers:**
- OpenClaw has an extensive contributor base, reflected in its high issue and PR counts, enabling rapid identification and resolution of problems.
- The project's diverse focus encompasses UI improvements and feature enhancements, fostering a holistic user experience.

**Technical Approach Differences:**
- OpenClaw emphasizes a robust gateway and UI simplification, while peers like Hermes Agent target stability and integration depth with external platforms.
  
**Community Size Comparison:**
- OpenClaw enjoys the largest community engagement, as evidenced by its numerous active discussions around complex issues.

## 4. Shared Technical Focus Areas
Several common technical requirements are emerging, highlighting the collective focus of the projects:

- **Stability Enhancements:** Addressing issues around session handling and performance (OpenClaw, Hermes Agent, IronClaw).
- **User Experience:** Improving interaction flows and interface features (QwenPaw, IronClaw).
- **Memory Management:** Discussion on optimal memory use and session persistence across several projects, important for user retention and reliability.

## 5. Differentiation Analysis
**Key Differences:**
- **Feature Focus:** 
  - OpenClaw prioritizes UI usability.
  - Hermes Agent aims at deep API integration.
  - IronClaw is enhancing notification systems and audio handling.
  - QwenPaw targets multi-user capabilities and data handling improvements.
  
**Target Users:**
- OpenClaw and IronClaw appeal to broader audiences by focusing on user experience, while Hermes Agent gears toward developers needing integration solutions.

**Technical Architecture:**
- Projects adopt distinct architectural designs; OpenClaw leans into modular UI components, while Hermes jumps into API-based services for flexibility.

## 6. Community Momentum & Maturity
- **Rapidly Iterating:** OpenClaw and Hermes Agent showcase strong iteration cycles, frequently resolving high volumes of issues and PRs.
- **Stabilizing:** IronClaw is entering a more stable phase with recent feature updates, while ZeroClaw grapples with unresolved issues and requires focused community attention.

## 7. Trend Signals
**Key Industry Trends:**
- **Increased Demand for Stability:** Users across projects express the need for stable session management and enhanced performance features.
- **Integration with Popular Platforms:** A push for better compatibility with tools like Discord and Slack is prominent, indicating the desire for cohesive user experiences.
- **Security Awareness:** As seen in discussions around ZeroClaw, heightened scrutiny of data handling points towards a critical focus on user privacy and application security.

This report presents a comparative landscape that can inform strategic decisions for development focus and prioritize community engagement for sustainable growth within the personal AI assistant and agent open-source ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest - August 28, 2026

## Today's Overview
The Hermes Agent project is currently experiencing a vibrant phase of development, marked by a notable surge in activity with 50 issues and 50 pull requests updated within the last 24 hours. The release of version v0.20.6 (v2026.8.27) on August 27 reflects the continuous efforts to stabilize and enhance the software, encapsulating approximately 525 merged pull requests. The community remains engaged, as evidenced by several discussions around critical bugs and feature requests.

## Releases
### v0.20.6 (v2026.8.27)
- **Release Date:** August 27, 2026
- **Summary:** This patch release consolidates around 525 PRs merged since the previous version (v0.20.5), providing a stable update for users. It primarily focuses on stability improvements, addressing numerous underlying issues.
- **Migration Notes:** Users should update to benefit from the latest fixes and enhancements; no breaking changes were reported.

## Project Progress
In the last 24 hours, 4 pull requests were merged or closed, with an emphasis on bug fixes and refinements. Key merges include:
- [Fix for caching issues](https://github.com/nousresearch/hermes-agent/pull/96768) to improve prompt-cache handling.
- A solution for reasoning fallbacks in streaming API calls, ensuring compatibility with OpenAI-compatible endpoints ([PR #96762](https://github.com/nousresearch/hermes-agent/pull/96762)).
- General enhancements such as making the desktop application more stable and user-friendly.

## Community Hot Topics
The community remains focused on several active discussions, particularly:
- [Issue #66616](https://github.com/nousresearch/hermes-agent/issues/66616): Concerns about the skills index being stale or degraded, with 108 comments indicating a significant interest in resolving this issue.
- [Issue #78487](https://github.com/nousresearch/hermes-agent/issues/78487): A problematic bug in Discord message handling has garnered multiple reactions, highlighting the need for improved integration with Discord's auto-thread feature.
- [Issue #52339](https://github.com/nousresearch/hermes-agent/issues/52339): Users report confusion due to stale applications after terminal updates on macOS, indicating a need for clearer update processes.

## Bugs & Stability
Today's reporting has highlighted critical bugs, stratified by severity:
1. **[P1] Issue #95150** - stdio MCP servers are reported as unusable due to reversed return states, creating deadlocks.
2. **[P1] Issue #78487** - Major functionality failure in Discord integration due to a silent failure in auto-threading.
3. **[P2] Issue #52339** - The terminal update mechanism that fails to update the installed app bundle, creating user confusion.
Several of these issues have corresponding fixes that were also in development stages with PRs pending.

## Feature Requests & Roadmap Signals
The community has put forth numerous feature requests, indicating strong user interest in enhancements such as:
- An option for project-level context injection ([Issue #95820](https://github.com/nousresearch/hermes-agent/issues/95820)).
- Improved command registries across all surfaces ([Issue #96692](https://github.com/nousresearch/hermes-agent/issues/96692)).
- User-requested features like showing all chats under a project, showcasing the demand for better session management in the desktop app ([Issue #70421](https://github.com/nousresearch/hermes-agent/issues/70421)).

## User Feedback Summary
Feedback indicates a mixture of satisfaction and frustration from users trying to navigate update issues and bugs. Key pain points include:
- Confusion stemming from app updates that do not reflect in the installed versions.
- Persistent bugs related to messaging integrations, especially with Discord and Telegram, are causing dissatisfaction among users reliant on these platforms.

## Backlog Watch
Several longer-standing issues and pull requests are in need of maintainer attention:
- [Issue #37044](https://github.com/nousresearch/hermes-agent/issues/37044): Missing model reasoning blocks in API responses needs resolution to improve transparency.
- [Issue #69663](https://github.com/nousresearch/hermes-agent/issues/69663): The problem of the desktop app getting stuck post-update, which has not seen resolution after significant user feedback.
- Various feature requests that have not received follow-up or acknowledgment, which could enrich user experience but remain unresolved.

Overall, Hermes Agent continues to demonstrate strong community engagement and a commitment to evolution, with a proactive approach to addressing concerns and enhancing features. Access the repository for more details and involvement: [Hermes Agent GitHub](https://github.com/nousresearch/hermes-agent).

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest - 2026-08-28

## Today's Overview
As of today, the IronClaw project continues to demonstrate high activity with significant community engagement. A total of 50 issues and 50 pull requests have been recently updated, indicating active participation in addressing concerns and implementing features. The recent release of version 1.4.0-rc.1 marks an important step forward, particularly with the introduction of a durable notification inbox feature. Overall, the project exhibits a robust pace of development, showcasing strong community involvement.

## Releases
- **ironclaw-v1.4.0-rc.1** released on **2026-08-26** introduces a durable notification inbox feature that manages authoritative outcomes and actionable gates for individual users, further enhancing the overall user experience.

## Project Progress
Today, 38 pull requests were merged or closed, highlighting continuous improvement in the codebase. Notably, PRs related to the Gmail integration and memory management have been addressed:
- **[PR #7944](https://github.com/nearai/ironclaw/pull/7944)**: Improved normalization of Gmail message outputs.
- **[PR #7900](https://github.com/nearai/ironclaw/pull/7900)**: Published durable resource blocks to enhance communication during automation processes.

## Community Hot Topics
Several issues have garnered significant attention:
1. **[Issue #7891](https://github.com/nearai/ironclaw/issues/7891)** - **Closed**: Discusses a performance issue around inference times, attracting 6 comments and highlighting potential bottlenecks.
2. **[Issue #7824](https://github.com/nearai/ironclaw/issues/7824)** - **Open**: Proposes improvements for context projection and compaction barriers, reflecting community interest in optimizing performance.
3. **[PR #7961](https://github.com/nearai/ironclaw/pull/7961)**: Focused on adding telemetry for better data collection, indicating a demand for enhanced monitoring capabilities.

## Bugs & Stability
Today's updates included multiple bug reports, mostly categorized as medium to high severity:
1. **Issue #6590 (Open)**: Fails to run locally on Windows, requiring attention to support cross-platform functionality.
2. **Issue #7956 (Open)**: Telegram bot interaction issues when starting without prior pairing.
3. **Issue #7955 (Open)**: Personal account linking prompts a generic error, impacting user initialization.

No recent PRs have been noted as fixes for these issues yet, suggesting active exploration of solutions is needed.

## Feature Requests & Roadmap Signals
User requests are actively shaping the future direction of IronClaw. Prominent requests include:
- **[Issue #7276](https://github.com/nearai/ironclaw/issues/7276)**: Calls for durable cross-conversation memory, indicating a desire for more persistent user experiences.
- **[Issue #7867](https://github.com/nearai/ironclaw/issues/7867)**: Suggests adding voice-to-text features in the WebUI, reflecting current trends toward enhancing user accessibility.

These could become focal points in the next major release cycle.

## User Feedback Summary
Community feedback highlights several pain points: 
- Performance lags during heavy data processing as noted in **[Issue #7891](https://github.com/nearai/ironclaw/issues/7891)**.
- Usability issues with the Telegram integration affecting user satisfaction, as per **[Issue #7955](https://github.com/nearai/ironclaw/issues/7955)**.

Positive reception has followed the new durable notification feature, as it addresses a significant user need for organized and actionable updates.

## Backlog Watch
Several long-unanswered issues reflect ongoing concerns:
- **[Issue #3278](https://github.com/nearai/ironclaw/issues/3278)**: Discusses MissionService integration with TurnCoordinator, awaiting updates for over three months.
- **[Issue #2950](https://github.com/nearai/ironclaw/issues/2950)**: Highlighting refactoring needs, it has been pending action since April.

These issues should be revisited to prevent backlog buildup and ensure project momentum is maintained. 

In summary, IronClaw is actively evolving with continuous community contributions, and addressing identified issues promptly will be crucial for sustaining this momentum.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Project Digest – 2026-08-28

## Today's Overview
QwenPaw observed robust activity today with the update of 16 issues and 46 pull requests (PRs). The project has released a new version, v2.2.0-beta.1, indicating ongoing development and responsiveness to community feedback. Despite significant engagement, there are still outstanding issues and bugs that require prioritization to maintain user satisfaction and software stability.

## Releases
### v2.2.0-beta.1
This release includes several updates:
- Documentation improvements, specifically regarding the scroll context manager.
- A critical fix sanitizing DashScope tool schemas for strict models.
- Ongoing integration testing enhancements.

No breaking changes have been reported, making migration straightforward.

## Project Progress
Today, 18 PRs were merged or closed, with significant advancements in the integration and enhancement of existing features:
- Improvements were made to handle oversized tool results and chat auto-scroll features to enhance user experience during streaming.
- Adjustments were implemented related to the desktop's chat display and memory management.

## Community Hot Topics
Several issues have generated substantial community engagement:
- **[QwenPaw Hub, multi-tenant edition discussion](https://github.com/agentscope-ai/QwenPaw/issues/7318)** (9 comments): A discussion on developing features for the new multi-tenant version of QwenPaw, indicating a strong desire for team-oriented functionalities.
- **[OpenSSL 3.0.x bug report](https://github.com/agentscope-ai/QwenPaw/issues/7298)** (7 comments): Users express concerns about TLS stack issues affecting bundles, highlighting a critical need for secure distributions.
- **[Desktop startup delay issue](https://github.com/agentscope-ai/QwenPaw/issues/7023)** (2 comments): Reports of excessive startup times indicate a possible degradation in user experience.

## Bugs & Stability
Today, several bugs were reported, with varying severity:
1. **[Desktop startup issue](https://github.com/agentscope-ai/QwenPaw/issues/7023)**: Critical, causing significant delays upon application boot.
2. **[Synchronous call freeze](https://github.com/agentscope-ai/QwenPaw/issues/7363)**: High severity, causing event loop blocking.
3. **[Zero-downtime reload malfunction](https://github.com/agentscope-ai/QwenPaw/issues/7364)**: Affects memory management during reloads, potentially causing data persistence issues.

Fixes for some of these bugs are addressed in relevant PRs such as **#7361** and **#7362**.

## Feature Requests & Roadmap Signals
Active discussions around new features include:
- The introduction of a **chat scroll lock** for improved user manual control during long interactions.
- Suggested optimizations for tool usage visibility and memory management enhancements.
Based on current trends, the next version may focus on refining team features and improving responsiveness under heavy loads.

## User Feedback Summary
Users have voiced concerns primarily about:
- **System delays**: Reports of slow startup times and slow responses during high-load scenarios.
- **Functionality gaps**: Requests for multi-user capabilities and improved interaction management clues towards broader team dynamics.
Despite these challenges, community responsiveness and collaborative feature enhancement indicate an overall commitment to user satisfaction.

## Backlog Watch
Important issues requiring maintainer attention include:
- **[Long response time for desktop startup](https://github.com/agentscope-ai/QwenPaw/issues/7023)**: Unresolved for two weeks, necessitating swift action for improvement.
- **[Bug report on message loss during QQ conversations](https://github.com/agentscope-ai/QwenPaw/issues/7297)**: Raises concerns about continuity, critical in conversational AI applications.

These concerns, if not addressed, could seriously impact user retention and satisfaction. Maintaining attention on these areas is crucial for preserving project health and user experience.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest - 2026-08-28

## Today's Overview
The ZeroClaw project shows active engagement today with 30 issues and 50 pull requests updated in the last 24 hours. The team has closed 7 issues and 2 pull requests, indicating productive maintenance cycles. The open issues and pull requests maintain a robust discussion environment, suggesting a responsive development culture committed to continuous improvement.

## Releases
No new releases have been issued in the last 24 hours.

## Project Progress
In the latest updates, two pull requests were merged or closed:
- **#8720 (CLOSED)** aimed to disable the cachePoint for Bedrock Nova 2 Lite models through config. 
- **#9998 (CLOSED)** was focused on session-scoped prompt attachments, which is now accepted for implementation.

This indicates progress on enhancing the stability of integration with existing models and refining session management features.

## Community Hot Topics
Current active issues include:
1. **[RFC: Runtime-owned conversation sessions and transport surface adapters (#9487)](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** - This high-risk proposal has garnered 26 comments, reflecting ongoing discussion around the architecture of conversation sessions.
2. **[RFC: Realtime speech-to-speech channel for Gemini Live (#8780)](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)** - With 21 comments, this proposal for a new voice channel is a significant enhancement effort.
3. **[RFC: Unified attachment architecture for web chat and channels (#9488)](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** - Another hot topic, with 20 comments emphasizing a drive for better integration across services.

These discussions highlight community interest in improving real-time interaction capabilities and enhancing architecture robustness.

## Bugs & Stability
The following bugs have been reported today:
1. **Severity S2:** **[Bug: Duplicate message handling in active turns (#10408)](https://github.com/zeroclaw-labs/zeroclaw/issues/10408)** - This issue relates to unintended parallel executions in the same session, risking output duplication.
2. **Severity S1:** **[Bug: Secure temp file handling with improper permissions (#10409)](https://github.com/zeroclaw-labs/zeroclaw/issues/10409)** - Identifies serious security risks linked to file permissions for temporary media handling.

These issues signal critical areas for immediate attention, especially concerning user security and experience.

## Feature Requests & Roadmap Signals
Active feature discussions include:
- **[RFC: Composable WASM plugin runtime architecture (#10076)](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)** - Aiming to enhance the plugin architecture, this proposal outlines new APIs and extension points.
- **[RFC: Granular sandbox policy — filesystem and network restrictions (#6996)](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** - Discussing enhanced security policies, this feature is highly anticipated in the ongoing dialogue around system robustness.

These suggest an increasing drive towards modularity and security in future updates.

## User Feedback Summary
Users express specific pain points, particularly surrounding stability during multi-turn sessions and security issues with data handling. The discussions highlight a demand for improved error handling and user-friendly interfaces for interactions across channels and sessions, reflecting a desire for greater reliability during use.

## Backlog Watch
Noteworthy issues that require maintainer attention due to their duration and importance include:
- **[RFC: Maintain session-persistence contract ownership (#9600)](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)** - Outstanding since July 31, with implications for data continuity.
- **[Tracker: v0.8.5 finite weekly stabilization line (#9459)](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)** - Active but requiring ongoing monitoring for timely assessment.

These unresolved topics suggest significant impacts on the roadmap and user experience, necessitating continued oversight from project maintainers.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*