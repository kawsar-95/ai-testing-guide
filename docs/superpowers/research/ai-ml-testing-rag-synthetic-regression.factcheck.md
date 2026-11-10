# Fact check: AI/ML Testing, RAG Test Automation at Scale: Synthetic Data and Regression

Page: `content/ai-ml-testing/rag-synthetic-regression.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.giskard.ai/ | yes | Giskard (docs) |
| 2 | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ | yes | Ragas (docs) |
| 3 | https://docs.github.com/en/actions | yes | GitHub (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | RAGET generates difficulty-tagged questions (`from giskard.rag import KnowledgeBase, generate_testset`, `num_questions=200`, `testset.save(...)`). | 1 | FAIL, fixed | Giskard's migration guide marks this as "DEPRECATED: Giskard v2 API. Do not use this code" and states "RAGET becomes quality_scan". The v3 equivalent is `from giskard.scan import KnowledgeBase, quality_scan` with `knowledge_base=`, `max_scenarios=`, `target_mode=`. There are no RAGET difficulty tags; v3 scenarios carry `component:` tags (`llm`, `retrieval`, `history`). Page rewritten (3 panels): prose, diagram, code, key words, mistakes, checklist. |
| 2 | "200+ questions" generated per run. | 1 | FAIL, fixed | `max_scenarios` is a total budget across all generators and defaults are the user's choice; no 200 figure exists. The diagram now says "scenarios (up to max_scenarios)". |
| 3 | Gate: `evaluate(...)` with Ragas, `assert result["faithfulness"] >= 0.9`, on `testset["question"]`. | 2 | FAIL, fixed | The test set no longer exists in v3. The gate is now `result.failed_count == 0` from the `SuiteResult`, with `result.recommendation` as the failure message; Giskard documents `failed_count` and says the recommendation is "a lead, not a verdict". Ragas stays as an optional second opinion in the prose. |
| 4 | Per-difficulty scores should be kept. | 1 | FAIL, fixed | Replaced with per-component results via `result.group_by("component")`, which the quality-scan page documents (groups default to `component`). Giskard also warns the tags "do not inspect the agent's architecture", now stated in How it works. |
| 5 | CI step `python -m scripts.generate_testset`. | none | FAIL, fixed | Script did not exist in v3 flow. Replaced by `pip install "giskard[scan,openai]" pytest pytest-asyncio`; the pytest step runs the scan. The checklist now notes the scan costs LLM API credits (docs: every run costs credits). |
| 6 | A knowledge base update should block a deploy via a CI gate; path-scoped trigger. | 3 | PASS | `on.push.paths` is documented GitHub Actions workflow syntax. |
| 7 | Ragas faithfulness metric exists. | 2 | PASS | Listed on the Ragas metrics page. |
| 8 | Not verified here: the Ragas Python import paths in earlier versions of this page. | none | NOTE | No Ragas code remains on this page after the rewrite. |

Open FAILs at the end of the rounds above: 0

## Readability edit (2026-11-10)

The Technical text of 1 section was edited to lower the reading load: T1 = `## In plain words`. The cognitive-load audit of 2026-11-10 had marked it HUGE: heavy on three or more of length, terms, sentence length, unbroken prose, and dense tables or code. The edit split long sentences, turned lists inside sentences into lists, put the main point first, and added bold run-in labels (and, in a few long sections, `###` headings). It was not meant to change any claim.

A script checked that every cite, number, code span, link, code block, table row, JSX tag, and content word of the old text is still in the new text. The edit was made by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not make the edit, comparing the old and the new text of each section. Because no claim changed, the claims above were not checked against the sources again. The Layman and Bangla panels did not change.

### FAILs

None.

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | PASS | All facts, the four scenario types, and the cites are kept in place. The new bold labels match the text under them. |

Open FAILs: 0
