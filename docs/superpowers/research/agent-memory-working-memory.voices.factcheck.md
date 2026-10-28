# Voices fact check: Working Memory

Date: 2026-10-28

Page: `content/agent-memory/working-memory.mdx`. Checker: an agent that did not write the voices. Each Layman and Bangla panel is checked against the Technical panel of the same section: no new fact, cites a subset of the Technical cites, and (Bangla) technical terms kept in English. `## Key words` has no voices.

| Section | Voice | Verdict | Note |
|---|---|---|---|
| In plain words | Layman | PASS | Same facts (current step, short-term, not kept for the next session, Anthropic "working memory", not training data, what uses space, CoALA types). Cites {1, 3} ⊆ Technical {1, 3}. The cites added by the fact check (short-term [1], next session [3]) were added in all 3 voices. |
| In plain words | Bangla | PASS | Same facts. Cites {1, 3} ⊆ {1, 3}. English kept: working memory, step, short-term, session, LLM, context window, training data, system prompt, tool result, tool definition, CoALA, episodic, semantic, procedural. |
| Where it comes from | Layman | PASS | "best-known model" restates "the common model" (S2: the term "refer[s] primarily to the 1974 model"). "The part that controls it" restates "central executive". Cites {1, 2, 3} ⊆ {1, 2, 3}. |
| Where it comes from | Bangla | PASS | "সবচেয়ে প্রচলিত model" restates "the common model". Cites {1, 2, 3} ⊆ {1, 2, 3}. English kept: learning, reasoning, comprehension, central executive, capacity, module, decision cycle, central hub, Soar architecture, context window. |
| How an agent gets it | Layman | PASS | Same facts and the same diagram. The added cite on "grows with each step" is in all 3 voices. Cites {3} ⊆ {3}. |
| How an agent gets it | Bangla | PASS | Same facts. Cites {3} ⊆ {3}. English kept: request, context window, system prompt, tool result, `stop_reason`, validation error, `usage` field, token counting API. The diagram stays in English. |
| A real-life example | Layman | PASS | Same story, marked as the tutorial's own. Cites {3} ⊆ {3}. |
| A real-life example | Bangla | PASS | Same story. "session-এর শুরুতে" restates "early in the session". Cites {3} ⊆ {3}. English kept: coding assistant, Claude Code, flaky login test, tool result, context window, accuracy, recall, "context rot", diff, project file, procedural memory. |
| Common mistakes | Layman | PASS | Same 6 mistakes and the same facts. Cites {1, 3, 4} ⊆ {1, 3, 4}. |
| Common mistakes | Bangla | PASS | Same 6 mistakes. Cites {1, 3, 4} ⊆ {1, 3, 4}. English kept: context window, token, accuracy, recall, input, training data, parametric memory, tool definition, `model_context_window_exceeded`, validation error, crash, module, decision cycle, variable. |
| What a tester can check | Layman | PASS | Same 5 test ideas, marked as the tutorial's own. No cites (Technical has none). |
| What a tester can check | Bangla | PASS | Same 5 test ideas. No cites. English kept: conversation, turn, tool result, input, `usage`, token counting API, `model_context_window_exceeded`, session, long-term store. |

Open FAILs: 0
