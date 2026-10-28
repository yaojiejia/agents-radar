# ArXiv AI Research Digest 2026-10-28

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-28 02:02 UTC

---

# ArXiv AI Research Digest — 2026-10-28

## Today's Highlights
Recent research showcases significant advancements in various AI domains, particularly the intersection of language models and their real-world applications. There is a noticeable focus on enhancing the capabilities of large language models (LLMs) for specific tasks, such as grading proofs and providing personalized interactions through speakers. Additionally, innovative methods in agent development and reinforcement learning are being explored, particularly with respect to optimizing system performance in complex environments.

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DCKV: Learned Transform Coding of the Prompt KV Cache in Hybrid Language Models](http://arxiv.org/abs/2610.36950v1) | E. Maximov et al. | This paper introduces DCKV, a differentiable codec for efficiently managing the key-value cache in hybrid language models, improving memory and processing efficiency. Its innovation addresses the growing needs of memory management in LLMs, especially when handling long prompts. |
| [Can LLMs Reliably Grade Olympiad Proofs? A Study of Mathematical Verification with LLMs](http://arxiv.org/abs/2610.36767v1) | A. Ospanov et al. | The study explores the capability of LLMs to verify complex mathematical proofs, revealing their current limitations. Understanding their performance in high-stakes evaluative scenarios could guide improvements in model alignment towards rigorous standards. |
| [Robust LLM Data Selection via Content-Invariant Gradient Attribution](http://arxiv.org/abs/2610.36755v1) | J. Gu et al. | This research proposes a novel gradient-based data attribution technique for selecting high-quality data in training LLMs, focusing on improving the model's instruction-following capabilities. The methodology enhances the efficiency of fine-tuning processes by ensuring data integrity. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Self-Keyed In-Parameter Memorization for External Memory-Free Dialogue Recall in Frozen Language Models](http://arxiv.org/abs/2610.36948v1) | X. Piao et al. | This work proposes a method for dialogue recall in language models without relying on external memory, enhancing conversational continuity and modeling capabilities. It addresses the limitation of past models by providing a framework for contextual memory integration. |
| [Learning Where to Trust: Reliability-Guided Expert Routing and Velocity Gating for 3D Deformable Registration](http://arxiv.org/abs/2610.36672v1) | C. Guo et al. | The authors develop a framework that integrates spatial context reliability with deformable image registration, which enhances anatomical correspondence accuracy. This research has significant implications for medical imaging and analysis. |
| [Remembering Is Not Enough: Refining Memories and Learning When to Use Them in Multi-Agent Systems](http://arxiv.org/abs/2610.36652v1) | Y. Hao et al. | This paper introduces DiscernMem, a framework promoting better memory use in multi-agent systems, emphasizing the training of agents to discern the utility of saved information. It represents a crucial advancement in agent reasoning and memory application. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Batching the Reflective Optimization Loop: Parallel Proposals Make GEPA Faster and Better](http://arxiv.org/abs/2610.36774v1) | J. Zhang et al. | This research enhances the GEPA optimizer by allowing for batch evaluations in reflective optimization, significantly improving speed and efficiency. The proposed method takes advantage of available parallel processes to boost performance in complex agent frameworks. |
| [Select-TTT: Query-Conditioned Selective Fast Weight Updates for In-Place Test-Time Training](http://arxiv.org/abs/2610.36794v1) | Y. Wu et al. | This paper presents a novel approach to test-time training that allows language models to adaptively retain essential context within a limited parameter set. This efficiency-oriented method marks a shift towards more dynamic, context-aware models. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Developing a Speech Language Model for Basque](http://arxiv.org/abs/2610.36911v1) | A. Sudupe et al. | This work represents a significant step in advancing language technology for minority languages by presenting a dedicated speech language model for Basque, aiming for improved interaction in under-represented languages. |
| [Beyond the Evidence Coherence Trap: Agent-Driven Evidence Selection for Temporally Disordered Fake News Detection](http://arxiv.org/abs/2610.36764v1) | C. Wang et al. | The authors address the challenge of identifying temporally disordered fake news through an agent-driven evidence selection strategy, enhancing the reliability of information verification systems. This work is crucial in combatting misinformation. |

## Research Trend Signal
Emerging research trends today indicate a growing emphasis on refining the functionality and efficiency of language models, particularly in specialized arenas like mathematical proof verification and multi-agent systems. Additionally, there is a clear shift towards developing methods that enable LLMs and agents to dynamically adapt to user needs and contextual changes, indicating a future where AI systems are more responsive and context-aware. The integration of memory and reasoning capabilities is notable, pointing toward more sophisticated AI interactions, particularly in complex and nuanced environments.

## Worth Deep Reading
1. **[Can LLMs Reliably Grade Olympiad Proofs? A Study of Mathematical Verification with LLMs](http://arxiv.org/abs/2610.36767v1)**
   - This paper not only explores the grading capabilities of LLMs in a challenging domain but also provides insights into future directions for enhancing model robustness in evaluation contexts.

2. **[Learning Where to Trust: Reliability-Guided Expert Routing and Velocity Gating for 3D Deformable Registration](http://arxiv.org/abs/2610.36672v1)**
   - The integration of reliability with spatial context in deformable registration applications shows potential for significant advancements in medical imaging technologies, making it essential reading.

3. **[Beyond the Evidence Coherence Trap: Agent-Driven Evidence Selection for Temporally Disordered Fake News Detection](http://arxiv.org/abs/2610.36764v1)**
   - This work tackles the pressing issue of misinformation in innovative ways, making it a critical resource for both researchers and practitioners in the fields of AI and media integrity.

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*