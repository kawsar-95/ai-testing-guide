# Fact check: AI/ML Testing, Fine-Tuned Model Testing

Page: `content/ai-ml-testing/finetuned-model-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://arxiv.org/abs/2308.08747 | yes | arXiv |
| 2 | https://www.anthropic.com/research/evaluating-ai-systems | yes | Anthropic |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Catastrophic forgetting: cite arXiv 2302.12817, "On the Catastrophic Forgetting of Large Language Models". | 1 | FAIL, fixed | arXiv 2302.12817 is "Scaling limit for line ensembles of random walks with geometric area tilts", a probability paper. The source entry had a right title and a wrong ID, and the URL checker only tests for HTTP 200. Replaced with arXiv 2308.08747 (Luo et al.), whose abstract was read. |
| 2 | "The effect depends on how close the fine-tuning data is to the original training data." | 1 | FAIL, fixed | Not in the replacement paper. Its abstract says forgetting is "generally observed in LLMs ranging from 1b to 7b parameters" and "as the model scale increases, the severity of forgetting intensifies in such a model scale range". The sentence now says that, in all panels. |
| 3 | General-capability test cases come from real questions (cite: MTEB). | 3 | FAIL, fixed | MTEB is an embedding benchmark and does not support it. Cite and source removed (own advice). |
| 4 | Evaluating on training data proves nothing; pin the judge and dataset (cite: Anthropic essay). | 2 | PASS | The essay compares evaluating on contaminated questions to "students seeing the questions before the test" and shows trivial formatting changes moving scores. |
| 5 | Comparison table (0.72 vs 0.94), set-difference regression test, `startswith("<result>")` format test. | none | PASS | The tutorial's own illustrative numbers and fixtures. |

Open FAILs: 0
