# Research notes: AI/ML Testing, RAG Test Automation at Scale: Synthetic Data and Regression

Page: `content/ai-ml-testing/rag-synthetic-regression.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `giskard-raget` | RAG evaluation tutorial / v2-to-v3 migration guide | Giskard (docs) | https://docs.giskard.ai/ |
| S2 | `ragas-metrics` | Available metrics | Ragas (docs) | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ |
| S3 | `github-actions` | Workflow syntax | GitHub (docs) | https://docs.github.com/en/actions |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | RAGET generates difficulty-tagged questions (`from giskard.rag import KnowledgeBase, generate_testset`, `num_questions=200`, `testset.save(...)`). | 1 | Giskard's migration guide marks this as "DEPRECATED: Giskard v2 API. Do not use this code" and states "RAGET becomes quality_scan". The v3 equivalent is `from giskard.scan import KnowledgeBase, quality_scan` with `knowledge_base=`, `max_scenarios=`, `target_mode=`. There are no RAGET difficulty tags; v3 scenarios carry `component:` tags (`llm`, `retrieval`, `history`). Page rewritten (3 panels): prose, diagram, code, key words, mistakes, checklist. |
| C2 | "200+ questions" generated per run. | 1 | `max_scenarios` is a total budget across all generators and defaults are the user's choice; no 200 figure exists. The diagram now says "scenarios (up to max_scenarios)". |
| C3 | Gate: `evaluate(...)` with Ragas, `assert result["faithfulness"] >= 0.9`, on `testset["question"]`. | 2 | The test set no longer exists in v3. The gate is now `result.failed_count == 0` from the `SuiteResult`, with `result.recommendation` as the failure message; Giskard documents `failed_count` and says the recommendation is "a lead, not a verdict". Ragas stays as an optional second opinion in the prose. |
| C4 | Per-difficulty scores should be kept. | 1 | Replaced with per-component results via `result.group_by("component")`, which the quality-scan page documents (groups default to `component`). Giskard also warns the tags "do not inspect the agent's architecture", now stated in How it works. |
| C5 | CI step `python -m scripts.generate_testset`. | none | Script did not exist in v3 flow. Replaced by `pip install "giskard[scan,openai]" pytest pytest-asyncio`; the pytest step runs the scan. The checklist now notes the scan costs LLM API credits (docs: every run costs credits). |
| C6 | A knowledge base update should block a deploy via a CI gate; path-scoped trigger. | 3 | `on.push.paths` is documented GitHub Actions workflow syntax. |
| C7 | Ragas faithfulness metric exists. | 2 | Listed on the Ragas metrics page. |
| C8 | Not verified here: the Ragas Python import paths in earlier versions of this page. | none | No Ragas code remains on this page after the rewrite. |
