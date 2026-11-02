# Fact check: AI/ML Testing, Multi-Turn Conversation Testing

Page: `content/ai-ml-testing/multi-turn-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://deepeval.com/docs/metrics-knowledge-retention | yes | DeepEval docs |
| 2 | https://docs.ragas.io/en/stable/howtos/applications/evaluating_multi_turn_conversations/ | yes | Ragas (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | "DeepEval's LLM testing guidance covers multi-turn evaluation" (cite: docs.confident-ai.com/docs/interview-llm-testing). | 1 | FAIL, fixed | That URL redirects to the DeepEval home page, so the cite pointed at no specific guidance. Repointed to the Knowledge Retention metric page; the DeepEval nav lists the multi-turn metrics Turn Relevancy, Role Adherence, Knowledge Retention and Conversation Completeness, which the prose now names. |
| 2 | "Ragas has conversation-level metrics" (cite: Available metrics). | 2 | FAIL, fixed | The metrics page has no multi-turn section (only Topic Adherence, Agent Goal Accuracy under agents). Ragas does publish a tutorial, "Evaluating multi-turn conversations"; sentence and cite now point there. |
| 3 | A test case "holds the expected roles in the same shape a config-driven eval suite uses" (cite: Promptfoo config). | 3 | FAIL, fixed | Nothing in the Promptfoo reference supports it. Clause and cite removed; the unused source dropped. |
| 4 | Test `test_the_return_context_does_not_leak_into_an_unrelated_question`. | none | FAIL, fixed | The test asserts the earlier answer is retained, the opposite of its name. Renamed `..._survives_an_unrelated_question` in three panels. |
| 5 | Message list / summary / scratchpad, contradiction, reset, conversation id tests. | none | PASS | The tutorial's own design on its own fake client; no vendor API is claimed. |

Open FAILs: 0
