# Research notes: AI/ML Testing, Synthetic Data Generation and DSPy

Page: `content/ai-ml-testing/synthetic-data-dspy.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `dspy-intro` | DSPy | Stanford NLP | https://dspy.ai/ |
| S2 | `dspy-optimizer` | Optimizers (URL repointed this pass) | Stanford NLP (DSPy docs) | https://dspy.ai/learn/optimization/optimizers/ |
| S3 | `giskard-quality-scan` | Run a Quality Scan (new) | Giskard (docs) | https://docs.giskard.ai/oss/scan/how-to/quality-scan |
| S4 | `giskard-migrate` | Migrate from Giskard v2 to v3 (new) | Giskard (docs) | https://docs.giskard.ai/oss/migrate-from-v2 |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | Giskard RAGET generates questions "adversarially", targeting where the pipeline is likely to fail, with a difficulty category. | 3 | The cited RAG tutorial has no "adversar", "difficult" or "synthetic" text, and RAGET is the deprecated v2 tool (migration guide: "RAGET becomes quality_scan"). Rewritten to what the quality-scan how-to documents: generators for hallucination, sycophancy, split, multi-topic and out-of-scope scenarios, each tagged `quality:` and `component:`. Cites repointed to two new sources. |
| C2 | DSPy "can generate the synthetic questions too". | 1, 2 | No source says DSPy generates synthetic data; it optimizes programs against a metric. Reworded to "can be used to build the question generator". |
| C3 | `from dspy import Example, Signature, dspy`; `program.compile(optimizer=dspy.BootstrapFewShot(...), trainset=...)`. | 2 | Neither is valid DSPy. The documented pattern is `optimizer = dspy.BootstrapFewShot(metric=..., max_bootstrapped_demos=8)` then `optimizer.compile(program, trainset=...)` (DSPy docs, optimizers page), with a metric `(example, pred, trace=None)` and examples built with `dspy.Example(...).with_inputs(...)`. Code rewritten in all three panels. |
| C4 | Optimizer trained only on verified examples learns from the survivors. | 2 | Docs: BootstrapFewShot "employs the metric to validate demonstrations, including only those that pass the metric in the compiled prompt." |
| C5 | Mistake 4 (human sample) cited to the DSPy intro; Mistake 7 (fixed eval) cited to Giskard. | 1, 3 | Neither source supports the sentence; both are the tutorial's own advice. Cites removed. |
| C6 | "Adversarial generation" key word. | none | Replaced with "Scenario tag", which is what the scan documents. |
| C7 | `dspy-optimizer` library URL. | 2 | `https://dspy.ai/api/optimizers/` served a 31-character client-rendered shell. Repointed to the learn/optimization page; its content was verified through the same page in DSPy's GitHub docs source. |
| C8 | Four-stage pipeline, three verification checks, 0.95 duplicate threshold, 5% verifier disagreement. | none | The tutorial's own design; thresholds are illustrative and the page says to measure the verifier. |
