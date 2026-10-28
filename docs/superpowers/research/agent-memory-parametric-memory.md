# Agent Memory: Parametric Memory — research notes

Date: 2026-10-28

## Sources

| # | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks, Lewis et al. | arXiv 2005.11401 (NeurIPS 2020) | https://arxiv.org/abs/2005.11401 | 2026-10-28 |
| S2 | Cognitive Architectures for Language Agents (CoALA), Sumers, Yao, Narasimhan, Griffiths | arXiv 2309.02427 (TMLR) | https://arxiv.org/abs/2309.02427 | 2026-10-28 |
| S3 | Memory in the Age of AI Agents (survey) | arXiv 2512.13564 | https://arxiv.org/abs/2512.13564 | 2026-10-28 |
| S4 | Models overview | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/models/overview | 2026-10-28 |

The S1, S2, and S3 quotes come from the abstracts and the HTML full texts at https://arxiv.org/html/2005.11401, https://arxiv.org/html/2309.02427, and https://arxiv.org/html/2512.13564.

## Claims

| # | Claim (plain words) | Source | Exact quote (under 40 words, verbatim) |
|---|---|---|---|
| 1 | A pre-trained language model keeps facts in its parameters (weights). | S1 | "Large pre-trained language models have been shown to store factual knowledge in their parameters" |
| 2 | Parametric memory is memory in the model parameters. It is used without a lookup. | S3 | "Memory stored within the model parameters, where information is encoded through the statistical patterns of the parameter space and accessed implicitly during forward computation." |
| 3 | The model recalls this knowledge without an external store. | S3 | "allowing the model to internalize and recall information without referring to external storage." |
| 4 | In the RAG paper, the parametric memory is the pre-trained model itself. | S1 | "the parametric memory is a pre-trained seq2seq model" |
| 5 | Limits: you cannot easily change this memory, you cannot see why the model answered, and it can hallucinate. | S1 | "They cannot easily expand or revise their memory, can’t straightforwardly provide insight into their predictions, and may produce “hallucinations”" |
| 6 | To update what the model knows, you must train it again. | S1 | "Parametric-only models like T5 or BART need further training to update their behavior as the world changes." |
| 7 | Sources for an answer and updates of world knowledge are open problems. | S1 | "providing provenance for their decisions and updating their world knowledge remain open research problems." |
| 8 | CoALA counts the weights as implicit procedural knowledge. Fine-tuning changes them. | S2 | "The LLM weights represent implicit procedural knowledge. These can be adjusted to an agent’s domain by fine-tuning during the agent’s lifetime." |
| 9 | Weights are hard to interpret. | S2 | "In contrast, LLM parameters are hard to interpret" |
| 10 | To store text in memory is cheaper and faster than to change the weights. | S2 | "storing task-relevant language (cheaper and quicker than parameter updates)" |
| 11 | Full fine-tuning can cause catastrophic forgetting. | S3 | "avoiding the catastrophic forgetting or global weight distortion that may occur in full model fine-tuning." |
| 12 | Each model has a knowledge cutoff: the date up to which its knowledge is most reliable. | S4 | "Reliable knowledge cutoff: The date through which the model’s knowledge is most extensive and reliable." |
| 13 | The training data cutoff is a broader date range. | S4 | "Training data cutoff (under Additional details) is the broader range of data used." |

## Notes

- "Parametric memory" is a real term in primary sources: Lewis et al. (S1) and the 2025 survey (S3). CoALA (S2) does not have a "parametric memory" type. It puts the LLM weights under procedural memory ("implicit knowledge stored in the LLM weights"). The infographic's split (parametric separate from procedural) follows S1 and S3, not CoALA. The page must say this.
- S3 is a survey preprint (arXiv, December 2025). It splits parametric memory into "internal" (the model's own weights) and "external" (added parameter modules, such as adapters). Claim 11 is from its discussion of external parametric memory.
- Claim 12: in the source, "Reliable knowledge cutoff:" is in bold. Cutoff dates change with each model. Do not put a date on the page; link the models overview.
- Claim 9: the sentence goes on ("but offe[r] ..."); only the quoted part is used.
- Test ideas (tutorial's own advice, no cite): ask about an event after the knowledge cutoff and check that the agent says it does not know, or uses a tool; ask the same fact question many times and compare the answers; after a model upgrade, run the old fact questions again (regression); check that a fine-tuned model still does the old tasks (forgetting).
