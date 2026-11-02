# Research notes: AI/ML Testing, Multi-Modal Testing

Page: `content/ai-ml-testing/multimodal-testing.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `anthropic-vision` | Vision | Anthropic (docs) | https://platform.claude.com/docs/en/build-with-claude/vision |
| S2 | `clip` | Learning Transferable Visual Models From Natural Language Supervision | arXiv | https://arxiv.org/abs/2103.00020 |
| S3 | `deepeval-metrics` | Metrics introduction | DeepEval docs | https://deepeval.com/docs/metrics-introduction |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | "The CLIP paper established the contrastive approach that made image-and-text models practical." | 2 | Overclaim. The abstract says CLIP learns transferable visual models from natural-language supervision. Reworded to a reference for learning image and text together (3 panels). |
| C2 | OCR table row `45.60` vs `4S.60` with error rate 0.03. | none | One wrong character in five is 0.20, and the table defines the metric as character error rate. Corrected in three panels. |
| C3 | "The vision documentation covers what the models handle" (handwriting). | 1 | The Vision page has no handwriting or OCR text. It does state that Claude "might hallucinate or make mistakes when interpreting low-quality, rotated, or very small images", and that heavy JPEG compression "can make text difficult to read". Sentence rewritten to that; the handwriting-needs-own-threshold point is the tutorial's own advice and is uncited. |
| C4 | Not-found test "is the one that most often fails". | none | Unsourced frequency. Now "a test worth keeping in every suite". |
| C5 | Mistake 6: real photos have shadows, folds, a rotated page. | 1 | Supported by the same limitation and image-quality guidance. |
| C6 | Exact-match extraction tests, two-questions test, chart-value test. | none | The tutorial's own fixtures and a fake `model` interface; no vendor API claimed. |
