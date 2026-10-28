# Fact check: Episodic Memory

Date: 2026-10-28

Page: `content/agent-memory/episodic-memory.mdx`. Checked against the quotes in `agent-memory-episodic-memory.md`. Claims 4, 14, and 17 were also checked on the source pages (arxiv.org/html/2309.02427 and docs.langchain.com).

| # | Claim on the page | Cite | Verdict (PASS/FAIL) | Quote or reason |
|---|---|---|---|---|
| 1 | Episodic memory stores experience from earlier decision cycles. | 1 | PASS | S1: "Episodic memory stores experience from earlier decision cycles." |
| 2 | The agent can write a new experience from working memory into episodic memory; CoALA calls this a form of learning. | 1 | PASS | S1: "An agent can also write new experiences from working to episodic memory as a form of learning" |
| 3 | Semantic memory holds facts; episodic memory holds experiences. | 4 | PASS | S4: "facts can be written to semantic memory, whereas experiences can be written to episodic memory." |
| 4 | CoALA describes a working memory and three long-term memories: episodic, semantic, procedural. | 1 | PASS | S1 section 4.1: "These include short-term working memory and several long-term memories: episodic, semantic, and procedural." |
| 5 | "The user prefers tabs" / `login.ts` examples. | none | PASS | Not a fact: an illustration of the distinction. |
| 6 | The 7 names of the module follow the infographic "7 Types of Agent Memory". | none | PASS | A statement about the tutorial itself, not a sourced fact. |
| 7 | In psychology, episodic memory is the ability to remember events you lived, at a particular time and place. | 2 | PASS | S2: "the ability to remember personally experienced events associated with a particular time and place." |
| 8 | Defined in 1972; supplements semantic memory; both are forms of declarative memory. | 2 | PASS | S2: "As defined in 1972 by Endel Tulving, episodic memory supplements semantic memory as a form of declarative memory." |
| 9 | The original description asks for what, where, and when. | 2 | PASS | S2: "required recollecting the three 'Ws' of an event—what, where, and when" |
| 10 | In CoALA, episodic memory is one of the long-term memories and stores experience from earlier decision cycles. | 1 | PASS | S1 quotes of rows 1 and 4. |
| 11 | LangChain writes facts to semantic memory and experiences to episodic memory, and credits CoALA for the idea. | 4 | PASS | S4: "The CoALA paper frames this well:" followed by the facts/experiences sentence of row 3. |
| 12 | A useful episode record says what, which task or file, and when. | none | PASS | Marked "Tutorial's own view". |
| 13 | Generative Agents: a long-term memory module records a full list of the agent's experiences in natural language. | 3 | PASS | S3: "a long-term memory module that records, in natural language, a comprehensive list of the agent's experiences." |
| 14 | The paper calls this list the memory stream. | (3, same paragraph) | PASS | Notes, claim 6: the term "memory stream" comes just before the quoted text in S3. |
| 15 | A retrieval model combines relevance, recency, and importance to pick the records needed now. | 3 | PASS | S3: "A memory retrieval model combines relevance, recency, and importance to surface the records needed to inform the agent's moment-to-moment behavior." |
| 16 | Relevance: how well the memory matches the current situation. | 3 (list intro) | PASS | Covered by the cite of the list intro (row 15). Plain restatement of the term; no number. |
| 17 | Recency is an exponential decay over the time since the memory was last retrieved. | 3 | PASS | S3: "we treat recency as an exponential decay function over the number of sandbox game hours since the memory was last retrieved." No decay value is given on the page (notes rule). |
| 18 | Importance is an integer score that the study asks the language model for. | 3 | PASS | S3: "directly asking the language model to output an integer score is effective." |
| 19 | Reflection turns many memories into higher-level conclusions about itself and others. | 3 | PASS | S3: "synthesizes memories into higher-level inferences over time, enabling the agent to draw conclusions about itself and others" |
| 20 | In practice, episodic memory is often few-shot examples in the prompt; the agent learns from past sequences to do a task correctly. | 4 | PASS | S4: "In practice, episodic memories are often implemented through few-shot example prompting, where agents learn from past sequences to perform tasks correctly." |
| 21 | The hard part is to select the most relevant examples for the user's input. | 4 | PASS | S4: "often the challenge lies in selecting the most relevant examples based on user input." |
| 22 | Flaky-test example (`checkout.spec.ts`, `cart.spec.ts`). | none | PASS | Marked as the tutorial's own illustration, not a real product. |
| 23 | The example shows write-then-retrieve-by-score and the few-shot pattern. | 3, 4 | PASS | Restates rows 15 and 20. |
| 24 | Most common errors: failed to retrieve relevant memories; fabricated embellishments to memory. | 3 | PASS | S3: "the most common errors arose when the agent failed to retrieve relevant memories, fabricated embellishments to the agent's memory, or inherited overly formal speech..." (page names 2 of the 3; it does not say "only"). |
| 25 | The study is a simulation of agents in a sandbox game, not a product. | (3, same paragraph) | PASS | Describes the cited source; notes: "S3 is a research simulation (25 agents in a sandbox game), not a product." |
| 26 | The agents at times hallucinated extra details about what they knew. | 3 | PASS | S3: "At times, the agents hallucinated embellishments to their knowledge." |
| 27 | With few-shot memory, the challenge is to select the most relevant examples for the input. | 4 | PASS | Same quote as row 21. |
| 28 | LangChain keeps facts in semantic memory and experiences in episodic memory; mixing them can make a one-time event look like a rule. | 4 | PASS | First part: quote of row 3. Second part is marked "Tutorial's own view". |
| 29 | Consequences in the mistake list ("repeats an old mistake", "a user can trust a false memory", "teaches the wrong pattern"). | none | PASS | Reasoning, not a sourced fact (no version, command, limit, or behavior of a named product). |
| 30 | Tester checks in the callout. | none | PASS | The callout says "These test ideas are the tutorial's own advice." No cites, as the page shape asks. |
| 31 | Key words table. | none | PASS | Each row restates a claim above (rows 1, 7, 8, 13, 15, 19, 20, 26). Key words has no voices and no cites by rule. |

## Other checks

| Check | Verdict | Note |
|---|---|---|
| Every source is cited | PASS | Sources 1, 2, 3, 4 are each cited. |
| Every cite has a source | PASS | Cites use only n = 1 to 4; `page.sources` has 4 entries. |
| Uncited statements are the tutorial's own or not facts | PASS | Rows 5, 6, 12, 22, 29, 30 are marked or are not facts. |
| No fixed context-window sizes or cutoff dates | PASS | None on the page. The only number from a source is the year 1972 (S2). |
| No long copied word runs | PASS | The longest verbatim runs are about 6 words ("stores experience from earlier decision cycles", "failed to retrieve relevant memories"). Other sentences are rephrased. |

Open FAILs: 0
