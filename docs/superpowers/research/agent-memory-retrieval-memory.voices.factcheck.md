# Voices fact check: Retrieval Memory

Date: 2026-10-28

Page: `content/agent-memory/retrieval-memory.mdx`. Each Layman and Bangla panel is checked against the Technical panel of the same section: no new fact, cites a subset of the Technical cites, and (Bangla) technical terms kept in English. Checked by an agent that did not write the voices.

| Section | Voice | Verdict | Note |
|---|---|---|---|
| In plain words | Layman | PASS | Same facts (weights vs store, the two Lewis terms, edit and inspect, update without training, CoALA modules, retrieval as an action). Cites {1, 2} ⊆ Technical {1, 2}. Drops the link only. |
| In plain words | Bangla | PASS | Same facts. Cites {1, 2} ⊆ {1, 2}. language model, weights, retriever, parametric memory, working memory, episodic, semantic, procedural, action kept in English. |
| Where it comes from | Layman | PASS | Same facts; "trained retriever" and "vector index" are shorter forms of the Technical text. Cites {1, 2, 3} ⊆ {1, 2, 3}. |
| Where it comes from | Bangla | PASS | Same facts. Cites {1, 2, 3} ⊆ {1, 2, 3}. RAG, dense vector index, pre-trained neural retriever, retrieval action, archival storage, read/write database kept in English. |
| How an agent gets it | Layman | FIXED → PASS | Said "That is why MemGPT's archival storage can be read and written", a causal link that Technical (after its own fix) and the sources do not give. Changed to "MemGPT's archival storage can also be read and written". Loop text restates the Technical diagram. Cites {2, 3, 4} ⊆ {2, 3, 4}. |
| How an agent gets it | Bangla | FIXED → PASS | Same causal "এজন্যই" (for this reason). Changed to "MemGPT-র archival storage-ও read/write". Cites {2, 3, 4} ⊆ {2, 3, 4}. retriever, store, function call, main context, endpoint, namespace kept in English. |
| A real-life example | Layman | PASS | Same story; marked as the tutorial's own. Cites {1, 2, 4} ⊆ {1, 2, 4}. |
| A real-life example | Bangla | PASS | Same story; marked as the tutorial's own. Cites {1, 2, 4} ⊆ {1, 2, 4}. vector store, retriever, context, export, CSV kept in English. |
| Common mistakes | Layman | FIXED → PASS | Said "the agent often failed to find the memory that it needed"; the source and Technical say it was "a common error" (most common error type), not how often it happened. Changed to "a common error was that the agent did not find the memory that it needed". Cites {1, 4, 5, 6} ⊆ {1, 4, 5, 6}. |
| Common mistakes | Bangla | PASS | Same facts ("একটা সাধারণ ভুল ছিল"). Cites {1, 4, 5, 6} ⊆ {1, 4, 5, 6}. hallucination, baseline model, write operation, recall, boundary kept in English. |
| What a tester can check | Layman | PASS | Same 6 tips in the "Tutorial advice" callout; no cites, no facts. |
| What a tester can check | Bangla | PASS | Same 6 tips; no cites. retriever, store, document, memory, write, tenant, sign in, retrieve kept in English. |

Open FAILs: 0
