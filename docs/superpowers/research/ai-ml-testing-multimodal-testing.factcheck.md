# Fact check: AI/ML Testing, Multi-Modal Testing

Page: `content/ai-ml-testing/multimodal-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://platform.claude.com/docs/en/build-with-claude/vision | yes | Anthropic (docs) |
| 2 | https://arxiv.org/abs/2103.00020 | yes | arXiv |
| 3 | https://deepeval.com/docs/metrics-introduction | yes | DeepEval docs |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | "The CLIP paper established the contrastive approach that made image-and-text models practical." | 2 | FAIL, fixed | Overclaim. The abstract says CLIP learns transferable visual models from natural-language supervision. Reworded to a reference for learning image and text together (3 panels). |
| 2 | OCR table row `45.60` vs `4S.60` with error rate 0.03. | none | FAIL, fixed | One wrong character in five is 0.20, and the table defines the metric as character error rate. Corrected in three panels. |
| 3 | "The vision documentation covers what the models handle" (handwriting). | 1 | FAIL, fixed | The Vision page has no handwriting or OCR text. It does state that Claude "might hallucinate or make mistakes when interpreting low-quality, rotated, or very small images", and that heavy JPEG compression "can make text difficult to read". Sentence rewritten to that; the handwriting-needs-own-threshold point is the tutorial's own advice and is uncited. |
| 4 | Not-found test "is the one that most often fails". | none | FAIL, fixed | Unsourced frequency. Now "a test worth keeping in every suite". |
| 5 | Mistake 6: real photos have shadows, folds, a rotated page. | 1 | PASS | Supported by the same limitation and image-quality guidance. |
| 6 | Exact-match extraction tests, two-questions test, chart-value test. | none | PASS | The tutorial's own fixtures and a fake `model` interface; no vendor API claimed. |

Open FAILs: 0
