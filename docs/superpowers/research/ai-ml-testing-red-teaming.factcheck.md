# Fact check: AI/ML Testing, Red Teaming with Promptfoo and Giskard

Page: `content/ai-ml-testing/red-teaming.mdx`. Checker: re-verified against freshly fetched sources, including two pages one click from the cited URLs (the Scan API reference and the first-scan tutorial) that were needed to check the "In practice" code and the "severity" claim. Date: 2026-11-02.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.promptfoo.dev/docs/red-team/ | yes | Promptfoo's own docs. |
| 2 | https://docs.giskard.ai/oss/scan | yes | Giskard's own docs (a table-of-contents page; the actual field/behavior claims needed the API reference and first-scan tutorial one click away). |
| 3 | https://docs.giskard.ai/oss/scan/explanation/threat-taxonomy | yes | Giskard's own docs. |
| 4 | https://genai.owasp.org/llm-top-10/ | yes | OWASP GenAI Security Project (library fixed earlier in this session; see `ai-ml-testing-owasp-llm-risks.factcheck.md`). |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | `npx promptfoo redteam run` runs the generated attacks. | 1 | PASS | Promptfoo quickstart: "`promptfoo redteam run`" is the documented command. |
| 2 | Promptfoo generates attacks from the application's own purpose. | 1 | PASS | Standard Promptfoo redteam config has a `purpose:` field; the docs frame attack generation around the target's description. |
| 3 | Giskard's scan groups findings by vulnerability category, with examples (injection, harmful content, discrimination). | 3 | PASS, rewritten | Original text also listed "hallucination" as one of the vulnerability categories. FAIL, fixed: hallucination is a `quality_scan` concept, a separate function from `vulnerability_scan`; the two are not one list. Now reads "threat type: prompt injection, harmful content, stereotypes and discrimination, and more" with hallucination explicitly called out as the other scan. |
| 4 | Each Giskard probe reports a vulnerability category and a severity. | 2, 3 | FAIL, fixed | A full-text search of the 535-line Scan API reference for "severity" returns zero matches. The result object has `passed_count`, `failed_count`, `pass_rate`, and per-scenario pass/fail with the judge's text reasoning, not a severity field. Rewritten to "pass or fail verdict with the judge's written reasoning... severity is still a human judgment call". |
| 5 | Promptfoo's red team flow: generate, run, grade. | 1 | PASS | Matches the documented three-command flow (`generate`, `run`, `report`) shown in "In practice". |
| 6 | `promptfooconfig.yaml` `purpose`/`plugins`/`strategies` shape. | none (illustrative config) | PASS: this is the standard, documented Promptfoo redteam config shape (plugin names like `prompt-injection`, `pii`, `excessive-agency`, strategies like `jailbreak`, `base64` are real Promptfoo identifiers). |
| 7 | Giskard's scan groups by threat taxonomy and OWASP mapping table. | 3, 4 | PASS, strengthened | Giskard's own scenario naming independently confirms the OWASP link: a sample failure in Giskard's own tutorial is literally titled "LLM01:2025 — Indirect injection via pasted user content", and `PromptInjectionScenarioGenerator` is documented as pairing with `owasp:llm-top-10-2025:LLM01`. This is stronger evidence than what the page actually cites for this claim; not added as a new inline citation because it would require a new source key for a one-off confirmation, but noted here and in the research notes. |
| 8 | "In practice" Giskard Python example (`giskard.Model`, `giskard.Dataset`, `giskard.scan(model, dataset)`, `report.to_html(...)`). | none (code, no cite per the page-shape rule) | FAIL, fixed | This API shape does not match Giskard's current, documented entry point. The current one (confirmed via the first-scan tutorial and the Scan API reference) is `from giskard.scan import vulnerability_scan`, called on a plain async function with Pydantic input/output models: `await vulnerability_scan(target, description=..., languages=[...], max_scenarios=...)`. Rewritten to match. |
| 9 | CI-gate function comparing findings by `f.severity == "high"` against a baseline. | none (code) | FAIL, fixed | Same root cause as claim 4 (no `severity` field exists). Rewritten to compare the set of failing scenario names (`giskard_result.failures_and_errors`, `.scenario_name`, both confirmed field names) against a reviewed baseline, dropping the invented severity filter. The Promptfoo side of the merge is left as a generic `promptfoo_failed_ids` list rather than inventing a specific Promptfoo report attribute path that was not independently verified (see research notes, "Open question"). |
| 10 | Jailbreak families: role-play, encoding, multi-turn escalation. | none | PASS: labeled as the tutorial's own taxonomy, consistent with (not attributed to) the GOAT/Crescendo multi-turn attacker names and role/format tricks documented in Giskard's own generator descriptions. |
| 11 | Common mistakes 1-6, "What a tester can check" bullets. | 1, 4 | PASS after the mistake-5 and baseline-bullet rewrite (same severity-to-failure-baseline fix as claims 4 and 9, applied consistently in all three panels and the Key words table). |

## Notes

- Three real issues found and fixed, not just citation hygiene: (a) hallucination incorrectly filed as a `vulnerability_scan` category, (b) a `severity` field that does not exist in the current API, invented in prose and in two code examples, (c) the entire "In practice" Giskard code sample using a deprecated API shape that would not run against the current library.
- The NeMo "three rail types presented as exhaustive" issue found while fact-checking the companion page is documented in `ai-ml-testing-guardrails-bias.factcheck.md`, since it lives in that page, not this one.
- Not independently verified in this pass: Promptfoo's own red team result/report schema at the field level. The CI-gate example was written to avoid asserting anything about it beyond "a list of failed test ids".

Open FAILs: 0
