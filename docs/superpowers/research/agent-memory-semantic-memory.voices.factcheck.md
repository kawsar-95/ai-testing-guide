# Voices fact check: Semantic Memory

Date: 2026-10-28

Page: `content/agent-memory/semantic-memory.mdx`. Each Layman and Bangla panel is checked against the Technical panel of the same section: no new fact, cites a subset of the Technical cites, and (Bangla) technical terms kept in English. `## Key words` has no voices. The checker did not write the page.

| Section | Voice | Verdict | Note |
|---|---|---|---|
| In plain words | Layman | PASS | Same facts (world and self, facts not events, personalization, infographic vs CoALA). Cites {1, 3} ⊆ Technical {1, 3}. "Stories" stands for "events". |
| In plain words | Bangla | PASS | Same facts. Cites {1, 3} ⊆ {1, 3}. Python, failed test, episodic, working, procedural, CoALA, module kept in English. |
| Where it comes from | Layman | PASS | Same facts (APA meaning, Tulving 1972, two kinds of declarative memory, CoALA, RAG and Wikipedia, retrieval memory, semantic search). Cites {1, 2, 3} ⊆ {1, 2, 3}. "A big set of plain text" stands for "a corpus of unstructured text". |
| Where it comes from | Bangla | PASS | Same facts. Cites {1, 2, 3} ⊆ {1, 2, 3}. psychology, declarative memory, RAG, corpus, unstructured text, Wikipedia kept in English. |
| How an agent gets it | Layman | FIXED → PASS | Had "The facts must sit in a store outside the model", which repeated an unsourced Technical claim. Changed with the Technical fix to "LangGraph saves long-term memories in a store, as JSON documents". Profile, collection, memory tool, and tutorial-view lines match Technical. Cites {1, 3, 4} ⊆ {1, 3, 4}. The flow summary replaces the diagram and is marked as the tutorial's own. |
| How an agent gets it | Bangla | FIXED → PASS | Same fix: "LangGraph long-term memory-গুলো JSON document হিসেবে একটা store-এ রাখে". Rest matches Technical. Cites {1, 3, 4} ⊆ {1, 3, 4}. reasoning, store, profile, collection, insert, update, context window, application, pytest kept in English. |
| A real-life example | Layman | PASS | Same story and the same three cited points (memory tool, personalization, over-insert). Marked as the tutorial's own. Cites {3, 4} ⊆ {3, 4}. |
| A real-life example | Bangla | PASS | Same story. Cites {3, 4} ⊆ {3, 4}. pytest, API test, staging server, runner, over-insert kept in English. |
| Common mistakes | Layman | PASS | Six items match Technical. "Private data" stands for "sensitive data"; "path trick" stands for "directory traversal attack". Cites {3, 4} ⊆ {3, 4}. |
| Common mistakes | Bangla | PASS | Six items match Technical. Cites {3, 4} ⊆ {3, 4}. sensitive data, memory handler, path, directory traversal attack, semantic search kept in English. |
| What a tester can check | Layman | PASS | Same six checks in a "Tutorial advice" callout, no cites (Technical has none). |
| What a tester can check | Bangla | PASS | Same six checks, no cites. Recall, session, value, reject, password, store kept in English. |

Totals: 10 PASS, 2 FIXED → PASS, 0 open FAIL.

Open FAILs: 0
