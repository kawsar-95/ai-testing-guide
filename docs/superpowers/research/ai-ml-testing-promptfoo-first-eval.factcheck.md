# Fact check: AI/ML Testing, Your First Eval with Promptfoo

Page: `content/ai-ml-testing/promptfoo-first-eval.mdx`. Data: `scripts/ai_ml_testing_pages_p1c.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.promptfoo.dev/docs/intro/ | yes | Promptfoo docs |
| 2 | https://www.promptfoo.dev/docs/configuration/reference/ | yes | Promptfoo docs |
| 3 | https://www.promptfoo.dev/docs/configuration/expected-outputs/ | yes | Promptfoo docs (added to the page in this check) |
| 4 | https://www.anthropic.com/engineering/evaluating-ai-systems | yes | Anthropic engineering. The real title is "Challenges in evaluating AI systems". The library title is wrong (library fix, not a page fact). |

Each source 1–4 is cited at least one time.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Lede: "Promptfoo is the fastest way to write one." | none | FAIL, fixed: now "an open-source tool that runs one for you". The intro says "fast", not "fastest". | "promptfoo is fast" |
| 2 | "It is the quickest way to get from 'I have a prompt' to …" | 1 | FAIL, fixed: replaced with the docs' own description. | "open-source CLI and library for evaluating and red-teaming LLM apps" |
| 3 | Goal is test-driven LLM development. | 1 | PASS | "test-driven LLM development, not trial-and-error" |
| 4 | Config parts `prompts`, `providers`, `tests`; `vars`, `assert`. | 2 | PASS | Config and Test Case tables |
| 5 | `label` on a provider. | 2 | PASS | `label` is a ProviderOptions field |
| 6 | Provider id `anthropic:messages:claude-sonnet-4-6`. | none (example code) | PASS | Promptfoo Anthropic provider page lists `claude-sonnet-4-6` |
| 7 | "Changing the assertion does not change the model call, so you can tighten a check without spending a token." | none | FAIL, fixed: a re-run calls the model again unless the cache answers. Now "does not change the prompt … without changing what the model sees". | — |
| 8 | Run steps; step 2 "call the provider, once per prompt". | none | FAIL, fixed: one call for each prompt and provider. | — |
| 9 | Two groups of assertions. | 3 (was 2) | FAIL, fixed: the config reference does not list the types; it points to the assertions page. Cite moved to source 3; groups named as in the docs. | "Deterministic eval metrics" |
| 10 | Deterministic types `contains`, `not-contains`, `regex`, `javascript`, `equals`, `is-json`, `starts-with`. | 3 | PASS (`not-contains` through the `not-` prefix, now said in the text) | "Every test type can be negated by prepending `not-`" |
| 11 | `llm-rubric` grades the output against a written rubric. | 3 | PASS | "Model-assisted eval metrics" table |
| 12 | Rule of thumb on deterministic vs rubric. | none | PASS (now labeled tutorial advice) | — |
| 13 | "Comparing two tables is how a prompt change gets judged" | 4 | FAIL, fixed: not in source 4. Replaced with the matrix-view fact from source 1. | "matrix views that let you quickly evaluate outputs across many prompts" |
| 14 | `promptfooconfig.yaml` in the project root is the convention. | none | FAIL, fixed: now "loads a `promptfooconfig.*` file from the current folder; `-c` for another name". | "It automatically loads `promptfooconfig.*`" |
| 15 | `npm install --save-dev promptfoo` | none | FAIL, fixed: no library source. Removed; the block now shows `npx promptfoo eval` and `-c`. | "running `npx promptfoo eval` will use these defaults" |
| 16 | `defaultTest.options.rubricPrompt` | 2 | PASS | "Custom prompt for model-graded assertions" |
| 17 | Test `description`, `vars` from `file://`. | 2 | PASS | Test Case table |
| 18 | One-line `javascript` assertion on word count. | 3 | PASS (cite added) | "Multiline JavaScript assertions require an explicit `return`" |
| 19 | `--verbose  # show each output in full` | none | FAIL, fixed: the CLI docs say "Show debug logs". Line removed. | — |
| 20 | `--filter-providers sonnet-4-6` | 2 | PASS (cite added) | "matches against provider `id` or `label`" |
| 21 | `npx promptfoo compare results.json results-after.json` | none | FAIL, fixed: no `compare` command exists. Now two runs with `--output` and a case-by-case comparison. | CLI docs list no `compare` |
| 22 | Mistake 2: a rubric or semantic check belongs next to `contains`. | 3 (was 2) | FAIL, fixed: cite moved to the assertions page, `similar` named. | `similar`: "Embeddings and cosine similarity are above a threshold" |
| 23 | Mistake 3: "two model calls" per case. | none | FAIL, fixed: "at least two (the answer and the judge)". | — |
| 24 | Mistake 6: "You need a score and a line it must cross" | 4 | FAIL, fixed: now the `threshold` key (source 2) plus the Anthropic warning (source 4). | "overinterpret the quantitative score" |
| 25 | Mistakes 1, 4, 5 | none | PASS (tutorial reasoning) | — |
| 26 | "What a tester can check" | none | PASS (Tutorial advice, no cites) | — |
| 27 | Key word "Threshold" | — | FAIL, fixed: now "The score a test or an assertion must reach to pass". | "Test will fail if the combined score of assertions is less than this number" |

## Fixes

- All fixes are in `scripts/ai_ml_testing_pages_p1c.py`. The page was generated again with `scripts/ai_ml_testing_pages_gen.py --only`.
- `promptfoo-assertions` was added to the page sources.
- Wanted library fixes (not done here): the title of `anthropic-evals`; a new source for the Promptfoo command line page.

Open FAILs at the end of the rounds above: 0

## Readability edit (2026-11-10)

The Technical text of 2 sections was edited to lower the reading load: T1 = `## In plain words`, T2 = `## How it works`. The cognitive-load audit of 2026-11-10 had marked them HUGE: heavy on three or more of length, terms, sentence length, unbroken prose, and dense tables or code. The edit split long sentences, turned lists inside sentences into lists, put the main point first, and added bold run-in labels (and, in a few long sections, `###` headings). It was not meant to change any claim.

A script checked that every cite, number, code span, link, code block, table row, JSX tag, and content word of the old text is still in the new text. The edit was made by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not make the edit, comparing the old and the new text of each section. Because no claim changed, the claims above were not checked against the sources again. The Layman and Bangla panels did not change.

### FAILs

None.

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | PASS | The split sentences keep their cites, and the code block and all facts are unchanged. The "Separation." label matches the text under it. |
| T2 | PASS | The facts, cites, list and code block are unchanged. The "Rule of thumb." and "Output." labels match their paragraphs, and "the tutorial's own advice" is kept. |

Open FAILs: 0
