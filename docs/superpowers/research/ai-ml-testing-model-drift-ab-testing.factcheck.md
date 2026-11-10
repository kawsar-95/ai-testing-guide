# Fact check: AI/ML Testing, Model Drift and A/B Testing

Page: `content/ai-ml-testing/model-drift-ab-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://langfuse.com/docs/evaluation/evaluation-methods | yes | Langfuse (docs) |
| 2 | https://arxiv.org/abs/2203.11171 | yes | arXiv |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Self-consistency "gives you the noise floor for free"; "the noise floor comes from the self-consistency measurement" (4 cites). | 3 | FAIL, fixed | The paper (Wang et al.) samples a diverse set of reasoning paths from one model and aggregates them to improve accuracy; it does not describe a noise floor for evaluation. Repeating the control run to measure spread is sound practice but the tutorial's own, so it is now uncited, with the paper cited only for what it does (sampling several paths from one model). |
| 2 | Phoenix evaluation page cited for "guardrail metric in the A/B test" (Mistake 6). | 2 | FAIL, fixed | The Phoenix page does not discuss A/B tests or guardrail metrics. Cite removed and the source dropped from this page. |
| 3 | `bucket = hash(user_id) % 100` for stable routing. | none | FAIL, fixed | Python's built-in `hash()` of a str is salted per process (PYTHONHASHSEED), so a user would move arms between processes. Replaced with `hashlib.sha256(...)` in three panels. |
| 4 | `baseline.for(category).mean()`. | none | FAIL, fixed | `for` is a Python keyword, so the test was a SyntaxError. Renamed `for_category` in three panels. |
| 5 | `control_refusal_rate` used but never defined; `wasserstein_distance` used without an import. | none | FAIL, fixed | Now `results["control_refusal_rate"]` and `from scipy.stats import wasserstein_distance`. |
| 6 | Scores stored in the evaluation store so the comparison is against history. | 1 | PASS | Langfuse evaluation methods store scores against traces. |
| 7 | Drift kinds, distribution-vs-mean advice, decision rule before the test. | none | PASS | The tutorial's own guidance. |

Open FAILs at the end of the rounds above: 0

## Readability edit (2026-11-10)

The Technical text of 1 section was edited to lower the reading load: T1 = `## How it works`. The cognitive-load audit of 2026-11-10 had marked it HUGE: heavy on three or more of length, terms, sentence length, unbroken prose, and dense tables or code. The edit split long sentences, turned lists inside sentences into lists, put the main point first, and added bold run-in labels (and, in a few long sections, `###` headings). It was not meant to change any claim.

A script checked that every cite, number, code span, link, code block, table row, JSX tag, and content word of the old text is still in the new text. The edit was made by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not make the edit, comparing the old and the new text of each section. Because no claim changed, the claims above were not checked against the sources again. The Layman and Bangla panels did not change.

### FAILs

- T1: "The comparison has to be on the **distribution**, not on the mean. A distribution can shift without its mean moving much, and a mean can move because of one outlier." — The ORIGINAL gives this as the reason for the rule: "not on the mean, because a distribution can shift without its mean moving much, and a mean can move because of one outlier". The edit drops "because", so the reason is no longer stated as a reason. Fix: "The comparison has to be on the **distribution**, not on the mean, because a distribution can shift without its mean moving much, and a mean can move because of one outlier."

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | FAIL | The causal "because" is dropped in the drift detection paragraph. The cite split and the other edits are fine. |

Open FAILs at the end of the rounds above: 1

## Re-check after the fixes (2026-11-10)

The FAILs of the round above were fixed. Most fixes put a cite back on a part of a split sentence that the split had left without one. A fresh `claude -p` session (Claude Sonnet, no tools) checked these sections again, old text against new: T1 = `## How it works`.

### FAILs

- T1: "The scores from both arms are kept in the evaluation store {{cite:langfuse-eval}}. So the comparison is against stored history and not against a number someone remembers {{cite:langfuse-eval}}." — In the ORIGINAL there is one cite, at the end of the single sentence "The scores from both arms are kept in the evaluation store, so the comparison is against stored history and not against a number someone remembers {{cite:langfuse-eval}}." The edit splits the sentence and puts the cite on both parts, which is allowed when both parts state facts the cite supports. But the "so" is changed to a separate sentence starting "So", and the cite is duplicated. Both parts do state facts from the original sentence, so the split alone is acceptable. Still, the cite after "evaluation store" sits on a clause the original only supported together with the whole sentence. Fix: "The scores from both arms are kept in the evaluation store, so the comparison is against stored history and not against a number someone remembers {{cite:langfuse-eval}}."

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | FAIL | Cite duplicated onto the first half of a split sentence. |

Open FAILs at the end of the rounds above: 1

## Second re-check after the fixes (2026-11-10)

The round above failed a split sentence whose cite was copied onto both parts. The original sentence is back. A fresh `claude -p` session (Claude Sonnet, no tools) checked these sections again, old text against new: T1 = `## How it works`.

### FAILs

None.

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | PASS | Only sentence splits and small linking words ("Then", "also"). Facts, cite, code and claims are unchanged. |

Open FAILs: 0
