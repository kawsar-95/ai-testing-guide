# Voices fact check: Episodic Memory

Date: 2026-10-28

Page: `content/agent-memory/episodic-memory.mdx`. Each Layman and Bangla panel was checked against the Technical panel of the same section: no new fact, cites a subset of the Technical cites, and (Bangla) technical terms kept in English. `## Key words` has no voices.

| Section | Voice | Verdict | Note |
|---|---|---|---|
| In plain words | Layman | PASS | Same facts (earlier steps, write from short-term notes, CoALA learning, facts vs experiences, CoALA working + 3 long-term memories). Cites {1, 4} ⊆ Technical {1, 4}. The `login.ts` example is shortened, not new. |
| In plain words | Bangla | PASS | Same facts. Cites {1, 4} ⊆ {1, 4}. Keeps agent, episodic memory, working memory, decision cycle, semantic memory, long-term memory, procedural in English. |
| Where it comes from | Layman | PASS | Same facts (time and place, 1972, declarative memory, what/where/when, CoALA, LangChain credits CoALA). Tutorial's own view is marked. Cites {1, 2, 4} ⊆ {1, 2, 4}. |
| Where it comes from | Bangla | PASS | Same facts, year as ১৯৭২. Cites {1, 2, 4} ⊆ {1, 2, 4}. Keeps semantic memory, declarative memory, language agent, long-term memory, task, file in English. Tutorial's own view is marked. |
| How an agent gets it | Layman | PASS | Same facts (memory stream, 3 scores, decay since last use, integer importance from the model, reflection, few-shot examples, selection challenge). No "exponential" word, which removes detail, not adds. Text diagram omitted. Cites {3, 4} ⊆ {3, 4}. |
| How an agent gets it | Bangla | PASS | Same facts, including the exponential decay. Cites {3, 4} ⊆ {3, 4}. Keeps memory stream, retrieval model, score, Relevance, Recency, Importance, integer, language model, Reflection, few-shot, prompt, input in English. |
| A real-life example | Layman | PASS | Same made-up example, marked as the tutorial's own. Cites {3, 4} ⊆ {3, 4}. |
| A real-life example | Bangla | PASS | Same example and disclaimer. Cites {3, 4} ⊆ {3, 4}. Keeps `checkout.spec.ts`, `cart.spec.ts`, flaky, fixed wait, CI, network response, episode log, prompt in English. |
| Common mistakes | Layman | PASS | Same 2 errors, game simulation note, made-up details, example choice, facts vs events split; tutorial's own view marked. Cites {3, 4} ⊆ {3, 4}. |
| Common mistakes | Bangla | PASS | Same facts. Cites {3, 4} ⊆ {3, 4}. Keeps sandbox game, simulation, hallucinate, few-shot memory, pattern, semantic/episodic memory in English. Addresses the reader with আপনি. |
| What a tester can check | Layman | PASS | Same 5 test ideas, marked as the tutorial's own advice. No cites (Technical has none). Plain text replaces the callout; no new fact. |
| What a tester can check | Bangla | PASS | Same 5 test ideas, marked as the tutorial's own advice. No cites. Keeps task, session, log, episode, few-shot example, input, file in English. |

Open FAILs: 0
