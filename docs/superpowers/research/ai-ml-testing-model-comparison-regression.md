# Research notes: AI/ML Testing, Model Comparison and Regression Testing

Page: `content/ai-ml-testing/model-comparison-regression.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `promptfoo-config` | Configuration reference | Promptfoo (docs) | https://www.promptfoo.dev/docs/configuration/reference/ |
| S2 | `anthropic-evals` | Challenges in evaluating AI systems | Anthropic | https://www.anthropic.com/research/evaluating-ai-systems |
| S3 | `promptfoo-outputs` | Output formats (new; replaces deepeval-metrics) | Promptfoo (docs) | https://www.promptfoo.dev/docs/configuration/outputs/ |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | A list of providers in one Promptfoo config makes the comparison one command; `tests: file://...`; model IDs `anthropic:messages:claude-sonnet-4-6`, `claude-haiku-4-5`. | 1 | Reference page documents `providers` and file:// test paths; the Anthropic provider page lists both model IDs. |
| C2 | `npx promptfoo compare run1.json run2.json`. | 1 | The Promptfoo command-line page lists no `compare` command (zero matches); commands include eval, view, share, list, export. Replaced in all panels with a `diff` of two per-category summaries. |
| C3 | Result JSON shape `data["results"]["tests"]`, `case["providers"]`, `result["score"]`. | 1 | Not in the docs. Promptfoo's output page shows `results.results.outputs[]` with `output.provider` and `output.pass`; code now uses those names and carries a comment telling the reader to confirm field names against their own file (`vars.category` is an assumption not shown in the docs). Not verified against a live run. |
| C4 | The per-category breakdown / "average hides the failure" cited to Anthropic. | 2 | The Anthropic essay never discusses per-category reporting. Cites removed (own advice). The essay is now cited for what it does say: a trivial formatting change such as options (A) to (1) can change evaluation results. |
| C5 | Token usage and latency per case, cited to DeepEval metrics intro. | 3 | The DeepEval page does not support it. Promptfoo's output page lists latency, token usage and estimated cost among recorded results; cite repointed and the DeepEval source dropped from this page. |
| C6 | Golden dataset (~50 cases), held-out cases, rot, 0.95 vs 0.90 at three times the cost. | none | The tutorial's own guidance and illustrative numbers. |
