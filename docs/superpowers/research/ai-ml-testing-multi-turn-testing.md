# Research notes: AI/ML Testing, Multi-Turn Conversation Testing

Page: `content/ai-ml-testing/multi-turn-testing.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `deepeval-llm-test` | Knowledge Retention (URL repointed) | DeepEval docs | https://deepeval.com/docs/metrics-knowledge-retention |
| S2 | `ragas-multiturn` | Evaluating multi-turn conversations (new) | Ragas (docs) | https://docs.ragas.io/en/stable/howtos/applications/evaluating_multi_turn_conversations/ |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | "DeepEval's LLM testing guidance covers multi-turn evaluation" (cite: docs.confident-ai.com/docs/interview-llm-testing). | 1 | That URL redirects to the DeepEval home page, so the cite pointed at no specific guidance. Repointed to the Knowledge Retention metric page; the DeepEval nav lists the multi-turn metrics Turn Relevancy, Role Adherence, Knowledge Retention and Conversation Completeness, which the prose now names. |
| C2 | "Ragas has conversation-level metrics" (cite: Available metrics). | 2 | The metrics page has no multi-turn section (only Topic Adherence, Agent Goal Accuracy under agents). Ragas does publish a tutorial, "Evaluating multi-turn conversations"; sentence and cite now point there. |
| C3 | A test case "holds the expected roles in the same shape a config-driven eval suite uses" (cite: Promptfoo config). | 3 | Nothing in the Promptfoo reference supports it. Clause and cite removed; the unused source dropped. |
| C4 | Test `test_the_return_context_does_not_leak_into_an_unrelated_question`. | none | The test asserts the earlier answer is retained, the opposite of its name. Renamed `..._survives_an_unrelated_question` in three panels. |
| C5 | Message list / summary / scratchpad, contradiction, reset, conversation id tests. | none | The tutorial's own design on its own fake client; no vendor API is claimed. |
