# Fact check: AI/ML Testing, AI and ML for Testers

Page: `content/ai-ml-testing/ai-ml-for-testers.mdx`. Data: `scripts/ai_ml_testing_pages_p1a.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.anthropic.com/engineering/evaluating-ai-systems | yes | Anthropic (vendor). Library title does not match the page ("Challenges in evaluating AI systems"). |
| 2 | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | yes | OWASP |
| 3 | https://www.nist.gov/itl/ai-risk-management-framework | yes | NIST |

Each source 1–3 is cited at least one time. Each cite number has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Definitions of ML, supervised, unsupervised, reinforcement learning. | none | FAIL, fixed: no source in the library. Added "The definitions in this section are the tutorial's own short explanations." in all 3 voices. | n/a |
| 2 | A model can give two different answers to the same question (non-determinism). | none | PASS (covered by the same label; also tested by the reader in "In practice") | n/a |
| 3 | Training, gradient descent, inference, temperature (3 paragraphs). | none | FAIL, fixed: no source. Labeled "These three paragraphs are the tutorial's own simplified explanation." in all 3 voices. | n/a |
| 4 | "Evaluation needs its own design: choose dataset, metric, threshold before you look at the score". | 1 | FAIL, fixed: S1 does not say this. Now: format changes can move the score, and every evaluation can be over-read (cited); fixing dataset, metric, threshold first is advice (no cite). | "Simple formatting changes to the evaluation"; "overinterpret the quantitative score" |
| 5 | OWASP names prompt injection, sensitive information disclosure, supply chain among top risks. | 2 | PASS | "LLM01:2025 Prompt Injection" (2025 list linked from S2) |
| 6 | NIST AI RMF: govern, map, measure, manage. | 3 | PASS | "Govern, Measure, Manage, Map" |
| 7 | Code: `client.messages.create(model="claude-sonnet-4-6", max_tokens=100, temperature=1.0, messages=[...])`, `message.content[0].text`. | none | PASS: `claude-sonnet-4-6` is in the Messages API model enum; the Sonnet 5.5 migration guide lists "Remove `temperature`" only for moving off Sonnet 4.6 or earlier, so 4.6 accepts it. | "Claude Sonnet 4.6 or earlier ... Remove `temperature`, `top_p`, and `top_k`." |
| 8 | "With `temperature=0` the differences shrink but do not disappear, because the service still samples". | none | FAIL, fixed: no library source. Now advice: "compare again. Do not assume that the answers are now identical: check it". | n/a |
| 9 | Layer map, "good" checks, common mistakes, tips. | none | PASS: tutorial advice, no factual claim about a tool. | n/a |
| 10 | Key words table (definitions). | none | PASS: general definitions, consistent with the text. | n/a |

## Notes

- Wanted source (not added): for the claim that `temperature=0` does not give identical outputs, and that newer Claude models reject `temperature`: "Claude Opus 5.5 migration guide", Anthropic (Claude API docs), https://platform.claude.com/docs/en/models/opus-5-5/migration-guide (quote: "temperature = 0 ... never guaranteed identical outputs on prior models").
- Library fix wanted: `anthropic-evals` title should be "Challenges in evaluating AI systems".

Open FAILs at the end of the rounds above: 0

## Readability edit (2026-11-10)

The Technical text of 1 section was edited to lower the reading load: T1 = `## How it works`. The cognitive-load audit of 2026-11-10 had marked it HUGE: heavy on three or more of length, terms, sentence length, unbroken prose, and dense tables or code. The edit split long sentences, turned lists inside sentences into lists, put the main point first, and added bold run-in labels (and, in a few long sections, `###` headings). It was not meant to change any claim.

A script checked that every cite, number, code span, link, code block, table row, JSX tag, and content word of the old text is still in the new text. The edit was made by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not make the edit, comparing the old and the new text of each section. Because no claim changed, the claims above were not checked against the sources again. The Layman and Bangla panels did not change.

### FAILs

None.

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | PASS | Facts, hedges, order and both cites are unchanged. The gradient steps and the four property questions became lists, the run-in labels match the text under them, and "such as" keeps the meaning of the original colon. |

Open FAILs: 0
