# Research notes: AI/ML Testing, Fine-Tuned Model Testing

Page: `content/ai-ml-testing/finetuned-model-testing.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `catastrophic` | An Empirical Study of Catastrophic Forgetting in LLMs During Continual Fine-tuning (source replaced) | arXiv | https://arxiv.org/abs/2308.08747 |
| S2 | `anthropic-evals` | Challenges in evaluating AI systems | Anthropic | https://www.anthropic.com/research/evaluating-ai-systems |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | Catastrophic forgetting: cite arXiv 2302.12817, "On the Catastrophic Forgetting of Large Language Models". | 1 | arXiv 2302.12817 is "Scaling limit for line ensembles of random walks with geometric area tilts", a probability paper. The source entry had a right title and a wrong ID, and the URL checker only tests for HTTP 200. Replaced with arXiv 2308.08747 (Luo et al.), whose abstract was read. |
| C2 | "The effect depends on how close the fine-tuning data is to the original training data." | 1 | Not in the replacement paper. Its abstract says forgetting is "generally observed in LLMs ranging from 1b to 7b parameters" and "as the model scale increases, the severity of forgetting intensifies in such a model scale range". The sentence now says that, in all panels. |
| C3 | General-capability test cases come from real questions (cite: MTEB). | 3 | MTEB is an embedding benchmark and does not support it. Cite and source removed (own advice). |
| C4 | Evaluating on training data proves nothing; pin the judge and dataset (cite: Anthropic essay). | 2 | The essay compares evaluating on contaminated questions to "students seeing the questions before the test" and shows trivial formatting changes moving scores. |
| C5 | Comparison table (0.72 vs 0.94), set-difference regression test, `startswith("<result>")` format test. | none | The tutorial's own illustrative numbers and fixtures. |
