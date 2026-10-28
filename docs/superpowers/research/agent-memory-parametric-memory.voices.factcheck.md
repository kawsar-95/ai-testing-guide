# Voices fact check: Parametric Memory

Date: 2026-10-28

Page: `content/agent-memory/parametric-memory.mdx`. Checker: an agent that did not write the page. Each Layman and Bangla panel is checked against the Technical panel of the same section: no new fact, cites a subset of Technical's, and (Bangla) technical terms stay in English.

| Section | Voice | Verdict | Note |
|---|---|---|---|
| In plain words | Layman | PASS | Same facts (weights store facts, no lookup, no outside store, retrieval contrast). Cites {1,3} = Technical {1,3}. "learns facts during training" restates "pre-trained". |
| In plain words | Bangla | PASS | Same facts. Cites {1,3}. pre-trained, parameter, weights, model, store, prompt kept in English. |
| Where it comes from | Layman | FAIL → FIXED → PASS | Cites {1,2,3} ⊆ {1,2,3}. "hold \"how-to\" knowledge" put quote marks round words CoALA does not use, so it read as a quote. Removed the quote marks; "how-to knowledge" is a plain gloss of "implicit procedural knowledge". |
| Where it comes from | Bangla | PASS | Same facts. Cites {1,2,3}. CoALA, working memory, episodic, semantic, procedural, sequence-to-sequence, LLM weights kept in English. |
| How an agent gets it | Layman | PASS | Same facts (pre-training, fine-tuning, added modules, catastrophic forgetting, cheaper text store, two cutoffs). Text diagram omitted, which adds nothing. Cites {1,2,3,4} ⊆ {1,2,3,4}. "Tutorial's own view" kept. |
| How an agent gets it | Bangla | PASS | Same facts. Cites {1,2,3,4}. Pre-training, fine-tuning, parameter module, catastrophic forgetting, knowledge cutoff, training data cutoff kept in English. |
| A real-life example | Layman | PASS | Same illustration, marked as the tutorial's own. Cites {1} ⊆ {1}. |
| A real-life example | Bangla | PASS | Same illustration, marked as the tutorial's own. Cites {1}. API, release, docs, provenance, working memory kept in English. |
| Common mistakes | Layman | PASS | Same six mistakes and facts. Cites {1,2,3,4} ⊆ {1,2,3,4}. "Ignoring made-up answers" glosses hallucinations; the term is kept in the body. |
| Common mistakes | Bangla | PASS | Same six mistakes. Cites {1,2,3,4}. hallucination, regression check, fine-tuning, catastrophic forgetting, LLM parameter kept in English. |
| What a tester can check | Layman | PASS | Same five tips in a "Tutorial advice" callout; no cites, no new fact. |
| What a tester can check | Bangla | PASS | Same five tips; no cites. knowledge cutoff, tool, regression suite, model upgrade, fine-tuning kept in English. |
| Key words | — | PASS | No voices, as the rule says. |

Open FAILs: 0
