# Agent Memory: Episodic Memory — research notes

Date: 2026-10-28

## Sources

| # | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Cognitive Architectures for Language Agents (CoALA), Sumers, Yao, Narasimhan, Griffiths | arXiv 2309.02427 (TMLR) | https://arxiv.org/abs/2309.02427 | 2026-10-28 |
| S2 | episodic memory | APA Dictionary of Psychology | https://dictionary.apa.org/episodic-memory | 2026-10-28 |
| S3 | Generative Agents: Interactive Simulacra of Human Behavior, Park et al. | arXiv 2304.03442 (UIST 2023) | https://arxiv.org/abs/2304.03442 | 2026-10-28 |
| S4 | Memory overview | LangChain (LangGraph docs) | https://docs.langchain.com/oss/python/concepts/memory | 2026-10-28 |

The S1 and S3 quotes come from the HTML full texts at https://arxiv.org/html/2309.02427 and https://arxiv.org/html/2304.03442.

## Claims

| # | Claim (plain words) | Source | Exact quote (under 40 words, verbatim) |
|---|---|---|---|
| 1 | In an agent, episodic memory holds the agent's past experience. | S1 | "Episodic memory stores experience from earlier decision cycles." |
| 2 | The agent writes new experiences from working memory to episodic memory. | S1 | "An agent can also write new experiences from working to episodic memory as a form of learning" |
| 3 | Psychology origin: episodic memory is memory of events that you lived, at a time and a place. | S2 | "the ability to remember personally experienced events associated with a particular time and place." |
| 4 | Endel Tulving defined it in 1972. It is a kind of declarative memory, next to semantic memory. | S2 | "As defined in 1972 by Endel Tulving, episodic memory supplements semantic memory as a form of declarative memory." |
| 5 | The original definition is what, where, and when. | S2 | "Tulving’s original description of episodic memory required recollecting the three ‘Ws’ of an event—what, where, and when" |
| 6 | Generative Agents keep a "memory stream": a natural-language list of all the agent's experiences. | S3 | "a long-term memory module that records, in natural language, a comprehensive list of the agent’s experiences." |
| 7 | A retrieval model picks memories by relevance, recency, and importance. | S3 | "A memory retrieval model combines relevance, recency, and importance to surface the records needed to inform the agent’s moment-to-moment behavior." |
| 8 | Recency is an exponential decay since the memory was last retrieved. | S3 | "we treat recency as an exponential decay function over the number of sandbox game hours since the memory was last retrieved." |
| 9 | Importance is a number that the language model gives. | S3 | "we find that directly asking the language model to output an integer score is effective." |
| 10 | Reflection turns many memories into higher-level conclusions. | S3 | "which synthesizes memories into higher-level inferences over time, enabling the agent to draw conclusions about itself and others" |
| 11 | Failure modes: the agent did not retrieve the right memory, or it added false details. | S3 | "the most common errors arose when the agent failed to retrieve relevant memories, fabricated embellishments to the agent’s memory, or inherited overly formal speech or behavior from the language model." |
| 12 | The agents sometimes hallucinated extra details. | S3 | "At times, the agents hallucinated embellishments to their knowledge." |
| 13 | In practice, episodic memory is often few-shot examples of past tasks in the prompt. | S4 | "In practice, episodic memories are often implemented through few-shot example prompting, where agents learn from past sequences to perform tasks correctly." |
| 14 | The hard part is to pick the right examples for the current input. | S4 | "often the challenge lies in selecting the most relevant examples based on user input." |

## Notes

- S3 is a research simulation (25 agents in a sandbox game), not a product. Its failure modes are observations from that study.
- Claim 6: in S3 the term "memory stream" is in italics and comes just before the quoted text.
- Claim 8: the decay factor value in S3 is in a math element that our text copy could not read. Do not give a number on the page.
- LangChain (S4) says that "facts can be written to semantic memory, whereas *experiences* can be written to episodic memory", and credits CoALA for this split.
- Test ideas (tutorial's own advice, no cite): do a task, then ask the agent what it did last time and check the answer against the log; check that it does not invent a past event; check that an old event loses to a recent one when both match; check which few-shot examples the agent picked for a given input.
