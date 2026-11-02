# Fact check: AI/ML Testing, Model Comparison and Regression Testing

Page: `content/ai-ml-testing/model-comparison-regression.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.promptfoo.dev/docs/configuration/reference/ | yes | Promptfoo (docs) |
| 2 | https://www.anthropic.com/research/evaluating-ai-systems | yes | Anthropic |
| 3 | https://www.promptfoo.dev/docs/configuration/outputs/ | yes | Promptfoo (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | A list of providers in one Promptfoo config makes the comparison one command; `tests: file://...`; model IDs `anthropic:messages:claude-sonnet-4-6`, `claude-haiku-4-5`. | 1 | PASS | Reference page documents `providers` and file:// test paths; the Anthropic provider page lists both model IDs. |
| 2 | `npx promptfoo compare run1.json run2.json`. | 1 | FAIL, fixed | The Promptfoo command-line page lists no `compare` command (zero matches); commands include eval, view, share, list, export. Replaced in all panels with a `diff` of two per-category summaries. |
| 3 | Result JSON shape `data["results"]["tests"]`, `case["providers"]`, `result["score"]`. | 1 | FAIL, fixed | Not in the docs. Promptfoo's output page shows `results.results.outputs[]` with `output.provider` and `output.pass`; code now uses those names and carries a comment telling the reader to confirm field names against their own file (`vars.category` is an assumption not shown in the docs). Not verified against a live run. |
| 4 | The per-category breakdown / "average hides the failure" cited to Anthropic. | 2 | FAIL, fixed | The Anthropic essay never discusses per-category reporting. Cites removed (own advice). The essay is now cited for what it does say: a trivial formatting change such as options (A) to (1) can change evaluation results. |
| 5 | Token usage and latency per case, cited to DeepEval metrics intro. | 3 | FAIL, fixed | The DeepEval page does not support it. Promptfoo's output page lists latency, token usage and estimated cost among recorded results; cite repointed and the DeepEval source dropped from this page. |
| 6 | Golden dataset (~50 cases), held-out cases, rot, 0.95 vs 0.90 at three times the cost. | none | PASS | The tutorial's own guidance and illustrative numbers. |

Open FAILs: 0
