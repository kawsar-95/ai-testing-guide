# Fact check: AI/ML Testing, Advanced RAG Failure Modes

Page: `content/ai-ml-testing/advanced-rag-failures.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://arxiv.org/abs/2005.11401 | yes | arXiv |
| 2 | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ | yes | Ragas (docs) |
| 3 | https://arxiv.org/abs/2307.03172 | yes | arXiv |
| 4 | https://docs.giskard.ai/oss/checks/use-cases/rag-evaluation | yes | Giskard (docs) |
| 5 | https://docs.giskard.ai/oss/scan/explanation/threat-taxonomy | yes | Giskard (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | RAG gives the model material at answer time instead of training memory. | 1 | PASS | Abstract: parametric memory plus retrieved non-parametric memory (also verified in the rag-testing-basics factcheck). |
| 2 | Models attend reliably to the start and end of a long input and less to the middle. | 3 | PASS | Abstract: "performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle". That a retrieved chunk "tends to land" in the middle is the tutorial's inference, not a quote. |
| 3 | Giskard's RAG evaluation checks "generate adversarial questions against a knowledge base". | 4 | FAIL, fixed | The page is a Giskard Checks tutorial: a suite validating "Retrieval quality", "Groundedness", and "Handling out-of-scope questions", with a `RAGResponse` that returns answer and retrieved documents. The word "adversarial" does not appear. Rewritten to describe what the page shows. |
| 4 | Fix for dilution is "put the best one last". | 3 | FAIL, fixed | The paper reports best performance at the beginning or the end, not specifically the end. Now "at the beginning or the end". |
| 5 | RAG metrics: context precision, context recall, faithfulness, answer relevancy. | 2 | FAIL, fixed | Ragas's list has Context Precision, Context Recall, Faithfulness, and Response Relevancy; "answer relevancy" is DeepEval's name. Now "response relevancy". |
| 6 | A tool that generates questions from the knowledge base finds failures you did not imagine (Mistake 6). | 5 (new) | FAIL, fixed | The RAG-evaluation tutorial does not describe question generation. Giskard's threat-taxonomy page does: "The quality scan generates questions from your knowledge base ... and checks the agent's answers against those documents". Cite moved to `giskard-taxonomy`, which is now in the page sources. |
| 7 | Failure-signature table, stale-chunk version assertion, multi-hop ordering, dilution test, cross-language test. | none | PASS | Tutorial's own diagnostic design; code is illustrative (`pipeline`, `faithfulness` are fixtures/helpers). |
| 8 | Typo: "the model used the model's memory". | none | FAIL, fixed | Now "its own memory". |

Open FAILs: 0
