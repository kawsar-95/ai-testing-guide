# Voices fact check: Procedural Memory

Date: 2026-10-28

Page: `content/agent-memory/procedural-memory.mdx`. Checker: an agent that did not write the voices. Each Layman and Bangla panel is checked against the Technical panel of the same section: no new fact, cites a subset of Technical's, and (Bangla) technical terms kept in English.

| Section | Voice | Verdict | Note |
|---|---|---|---|
| In plain words | Layman | FIXED → PASS | Same facts; cites {1, 2} ⊆ {1, 2}. The how/what gloss was cited to [2]; changed with Technical to "long-term memory for the skills of a task [2]" plus "In the tutorial's words, …". |
| In plain words | Bangla | FIXED → PASS | Same facts; cites {1, 2} ⊆ {1, 2}. Same fix as Layman ("কাজের দক্ষতার long-term memory [2]। Tutorial-এর ভাষায়, …"). Terms kept in English: procedural memory, AI agent, language model, weights, implicit, explicit, code, working memory, episodic, semantic, CoALA. |
| Where it comes from | Layman | PASS | Same facts; cites {1, 2} ⊆ {1, 2}. "Soar is a cognitive architecture, a design for AI systems" glosses the term that Technical uses; no new fact. |
| Where it comes from | Bangla | PASS | Same facts; cites {1, 2} ⊆ {1, 2}. Soar, production system, rule, working memory, LLM, weights, code, parametric memory kept in English. |
| How an agent gets it | Layman | PASS | Same facts; cites {1, 3, 4} ⊆ {1, 3, 4}. "Tutorial's own view" and the diagram note kept. |
| How an agent gets it | Bangla | PASS | Same facts; cites {1, 3, 4} ⊆ {1, 3, 4}. CLAUDE.md, Markdown, workflow, enforced configuration, `PreToolUse` hook, skill, checklist, procedure kept in English. |
| A real-life example | Layman | PASS | Same facts; cites {3, 4} ⊆ {3, 4}. Marked as the tutorial's own example. |
| A real-life example | Bangla | PASS | Same facts; cites {3, 4} ⊆ {3, 4}. Code block unchanged; `/context`, `PreToolUse` hook, snapshot, release checklist kept in English. |
| Common mistakes | Layman | FIXED → PASS | Same facts; cites {1, 3, 4} ⊆ {1, 3, 4}. "Then the behavior changes" changed to "may change", to match the Technical fix. |
| Common mistakes | Bangla | FIXED → PASS | Same facts; cites {1, 3, 4} ⊆ {1, 3, 4}. Added "হয়তো" to the run-to-run sentence, to match the Technical fix. 200 lines, context, random input, episodic, semantic kept. |
| What a tester can check | Layman | PASS | No cites; same five tips; tip says it is the tutorial's own advice. |
| What a tester can check | Bangla | PASS | No cites; same five tips. System prompt, CLAUDE.md, rule, conflict, session, skill, regression prompt kept in English. |

Open FAILs: 0
