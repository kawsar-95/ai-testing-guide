# Research notes: AI/ML Testing, Advanced RAG Failure Modes

Page: `content/ai-ml-testing/advanced-rag-failures.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `rag` | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | arXiv | https://arxiv.org/abs/2005.11401 |
| S2 | `ragas-metrics` | Available metrics | Ragas (docs) | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ |
| S3 | `lostmiddle` | Lost in the Middle: How Language Models Use Long Contexts | arXiv | https://arxiv.org/abs/2307.03172 |
| S4 | `giskard-raget` | RAG Evaluation | Giskard (docs) | https://docs.giskard.ai/oss/checks/use-cases/rag-evaluation |
| S5 | `giskard-taxonomy` | Threat taxonomy (what the scan looks for) | Giskard (docs) | https://docs.giskard.ai/oss/scan/explanation/threat-taxonomy |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | RAG gives the model material at answer time instead of training memory. | 1 | Abstract: parametric memory plus retrieved non-parametric memory (also verified in the rag-testing-basics factcheck). |
| C2 | Models attend reliably to the start and end of a long input and less to the middle. | 3 | Abstract: "performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle". That a retrieved chunk "tends to land" in the middle is the tutorial's inference, not a quote. |
| C3 | Giskard's RAG evaluation checks "generate adversarial questions against a knowledge base". | 4 | The page is a Giskard Checks tutorial: a suite validating "Retrieval quality", "Groundedness", and "Handling out-of-scope questions", with a `RAGResponse` that returns answer and retrieved documents. The word "adversarial" does not appear. Rewritten to describe what the page shows. |
| C4 | Fix for dilution is "put the best one last". | 3 | The paper reports best performance at the beginning or the end, not specifically the end. Now "at the beginning or the end". |
| C5 | RAG metrics: context precision, context recall, faithfulness, answer relevancy. | 2 | Ragas's list has Context Precision, Context Recall, Faithfulness, and Response Relevancy; "answer relevancy" is DeepEval's name. Now "response relevancy". |
| C6 | A tool that generates questions from the knowledge base finds failures you did not imagine (Mistake 6). | 5 (new) | The RAG-evaluation tutorial does not describe question generation. Giskard's threat-taxonomy page does: "The quality scan generates questions from your knowledge base ... and checks the agent's answers against those documents". Cite moved to `giskard-taxonomy`, which is now in the page sources. |
| C7 | Failure-signature table, stale-chunk version assertion, multi-hop ordering, dilution test, cross-language test. | none | Tutorial's own diagnostic design; code is illustrative (`pipeline`, `faithfulness` are fixtures/helpers). |
| C8 | Typo: "the model used the model's memory". | none | Now "its own memory". |
