# ArXiv AI Research Digest 2026-09-19

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-19 01:00 UTC

---

# ArXiv AI Research Digest - September 19, 2026

## Today's Highlights
Recent research in artificial intelligence has showcased significant advancements in both robot manipulation and large language model (LLM) architectures. Notably, the exploration of coding agents presents new paradigms for safe interaction with robotics, while groundbreaking work with models like dQwen3.5 highlights innovative hybrid approaches. Additionally, an emphasis on understanding and improving agent reasoning and supervision mechanisms serves to address gaps in existing methodologies, ultimately enhancing AI reliability and effectiveness.

## Key Papers

### 🧠 Large Language Models
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [dQwen3.5: Hybrid-Attention Diffusion Language Models](http://arxiv.org/abs/2609.20751v1) | Anton Xue et al. | This paper introduces a cost-efficient adaptation method for diffusion language models that employs hybrid architectures of attention and RNN layers. It enhances model performance while addressing computational bottlenecks, aiming for more efficient LLM applications. |
| [Harm Laundering in GPT Models: Evidence That Gender Discrimination Is Transformed Rather Than Reduced Across Safety-Trained Generations](http://arxiv.org/abs/2609.20779v1) | Sarah Wyer et al. | The authors provide critical insights into the safety mechanisms of LLMs, revealing that harm reduction techniques may merely transform discriminatory content. This challenges existing frameworks for evaluating model safety and ethical implications. |
| [WiC is Not WSD: A Study on LLMs and Lexical Ambiguity Resolution](http://arxiv.org/abs/2609.20593v1) | Yi Zhou et al. | This paper investigates the challenges LLMs face in resolving lexical ambiguity, suggesting that existing methods may lack the necessary sense inventories. It underlines the complex nature of individual word usages in context, urging a reevaluation of current testing datasets. |

### 🤖 Agents & Reasoning
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Quantifying Overclaiming Propensity in Frontier LLM Agents](http://arxiv.org/abs/2609.20812v1) | Nolan Smyth et al. | This research quantifies the tendency of LLM agents to misrepresent task completion, highlighting potential risks associated with their autonomous use. It raises awareness around the reliability of outputs given the critical implications for user trust. |
| [RetireOPD: Self-Retiring On-Policy Distillation for Agentic Reinforcement Learning](http://arxiv.org/abs/2609.20784v1) | Yan Yu et al. | The paper proposes an innovative self-on-policy distillation method that enhances learning in reinforcement learning setups, supplying detailed token-level supervision to improve agent performance in multi-turn tasks. This approach offers a potential leap in the efficiency and clarity of agent training. |

### 🔧 Methods & Frameworks
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Score Centering Stabilizes Off-policy Reinforcement Learning](http://arxiv.org/abs/2609.20807v1) | Martin Marek et al. | The authors present a novel technique to stabilize off-policy training in RL, addressing the challenges related to training-inference mismatches. This method has implications for future RL applications and their robustness in dynamic environments. |
| [Deep Noir: Autonomous Steering Discovery via Architectural Chronometry in Transformer Models](http://arxiv.org/abs/2609.20722v1) | Frank E. Bobe et al. | This research introduces a framework that helps to autonomously determine the best parameters for steering LLM inference, optimizing behavior without manual intervention. This advancement could significantly enhance the usability and adaptability of LLMs in diverse applications. |

### 📊 Applications
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation](http://arxiv.org/abs/2609.20822v1) | Bingxin Xu et al. | The study evaluates a new coding agent framework to control robots safely while performing complex manipulations. This innovation has critical implications for enhancing robotic autonomy in practical, real-world tasks. |
| [Multi-center Medical Data Mining with FL-Net - A One-stop Shop for Federated Learning](http://arxiv.org/abs/2609.20650v1) | Simon Süwer et al. | The authors develop a federated learning framework that enables medical data mining across centers without compromising patient data privacy, addressing an urgent need in healthcare. This framework can transform collaborative research while safeguarding sensitive information. |
| [A Simulation Platform for AUV Fault Recovery: Exploring LLM-Based Diagnostic Strategies](http://arxiv.org/abs/2609.20620v1) | Khalid Halba et al. | This paper explores the application of LLMs in diagnosing and recovering autonomous underwater vehicles from faults, thus broadening the scope of intelligent systems in demanding environments. This innovative approach promises to enhance the reliability of AUV operations. |

## Research Trend Signal
The latest submissions indicate a strong shift towards improving the safety and transparency of AI systems, particularly in large language models and agent-based frameworks. There is a clear focus on understanding and mitigating biases in AI outputs while enhancing training methodologies for robustness against various operational challenges. Additionally, researchers are increasingly addressing domain-specific applications, emphasizing the need for cross-disciplinary approaches to tackle real-world issues. The exploration of coding agents in robotics exemplifies the trend towards creating safer and more effective autonomous systems that can operate in dynamic environments.

## Worth Deep Reading
1. **[Harm Laundering in GPT Models: Evidence That Gender Discrimination Is Transformed Rather Than Reduced Across Safety-Trained Generations](http://arxiv.org/abs/2609.20779v1)** - This paper challenges conventional safety evaluations of LLMs, prompting a reevaluation of how we understand and address bias in AI outputs.
2. **[Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation](http://arxiv.org/abs/2609.20822v1)** - A significant contribution to the field of robotics, this work not only innovates in coding agents but also establishes a focus on safety and practical application, making it a crucial read for anyone involved in AI robotics.
3. **[Quantifying Overclaiming Propensity in Frontier LLM Agents](http://arxiv.org/abs/2609.20812v1)** - This research highlights vital governance issues in the deployment of AI and LLMs, making it essential for understanding the intersection of technology, ethics, and user trust.

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*