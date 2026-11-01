# Research notes: AI/ML Testing, Red Teaming with Promptfoo and Giskard

Page: `content/ai-ml-testing/red-teaming.mdx` (data: `scripts/ai_ml_testing_pages_p1f.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | `promptfoo-redteam` | Red teaming | Promptfoo (docs) | https://www.promptfoo.dev/docs/red-team/ | 2026-11-02 |
| S2 | `giskard-scan` | Scan a model | Giskard (docs) | https://docs.giskard.ai/oss/scan | 2026-11-02 |
| S3 | `giskard-taxonomy` | Threat taxonomy | Giskard (docs) | https://docs.giskard.ai/oss/scan/explanation/threat-taxonomy | 2026-11-02 |
| S4 | `owasp-llm` | OWASP Top 10 for LLM Applications and Generative AI 2025 | OWASP GenAI Security Project | https://genai.owasp.org/llm-top-10/ | 2026-11-02 |

## Claims

| # | Claim | Source | Quote / evidence |
|---|---|---|---|
| C1 | `npx promptfoo redteam run` is the real command that runs a red team suite. | S1 (quickstart page, `promptfoo.dev/docs/red-team/quickstart/`, one click from S1) | "navigate to the directory where you saved the file and run `promptfoo redteam run`" / "npx promptfoo@latest redteam run" |
| C2 | Promptfoo generates attacks from a `purpose` field describing the application. | S1 | The page's own config examples and the "Model-layer vulnerabilities" discussion frame attacks around "which side you want to test" and the target's description; the `purpose:` field pattern in the page's YAML is standard Promptfoo redteam config syntax (`promptfooconfig.yaml`). |
| C3 | Giskard's `vulnerability_scan` groups its report by threat type, with `group_by="threat-type"` as the default. | S3, Scan API reference (`docs.giskard.ai/oss/scan/reference/scan-api.md`, one click from S2) | "`group_by` ... Result annotation key used to group the printed report ... `\"threat-type\"` groups by kind of failure" |
| C4 | Threat types include prompt injection, harmful content, and stereotypes/discrimination. | S3 | "Threat types harmful-content-generation misguidance-and-unauthorized-advice prompt-injection" / "the adversarial generator's categories aim at: stereotypes and discrimination, politics, religion, CBRN materials, copyright violation, misinformation and disinformation, and illegal activities" |
| C5 | A separate `quality_scan` function (not part of `vulnerability_scan`) checks hallucination, omission, and denial-of-answer against a knowledge base. | Scan API reference, one click from S2, same page as C3 | "`quality_scan()` ... catches invented answers (hallucinations), omissions, and refusals to answer" |
| C6 | Giskard's scenarios get a pass/fail verdict with the judge's written reasoning; there is no automatic "severity" field in the result object. | First-scan tutorial (`docs.giskard.ai/oss/scan/tutorials/your-first-scan.md`, one click from S2) + Scan API reference | Tutorial shows `check.failed` / `check.message` (a text reason), `suite_result.passed_count`, `.failed_count`, `.pass_rate`, `.failures_and_errors`; the full 535-line API reference has zero occurrences of "severity". |
| C7 | The current Giskard scan entry point is `from giskard.scan import vulnerability_scan`, called on a plain async function with Pydantic input/output types, not `giskard.Model(...)` / `giskard.Dataset(...)` / `giskard.scan(model, dataset)`. | First-scan tutorial + Scan API reference | "`from giskard.scan import vulnerability_scan` ... `async def botanibot(inputs: AgentInput) -> AgentOutput`" and the API reference's own example, same import and `await vulnerability_scan(support_agent, description=..., languages=[...], max_scenarios=20)` |
| C8 | OWASP risk ids (e.g. LLM01, LLM02, LLM06) as a mapping target for both tools' findings. | S4 | Confirmed in `ai-ml-testing-owasp-llm-risks.md`; Giskard's own scenario names reference OWASP directly: "`PromptInjectionScenarioGenerator` emits it, paired with `owasp:llm-top-10-2025:LLM01`" and a sample failure named "LLM01:2025 — Indirect injection via pasted user content" (first-scan tutorial), which is independent confirmation that Giskard itself maps to the same OWASP ids this page uses. |
| C9 | Jailbreak families: role-play, encoding, multi-turn escalation. | none | Tutorial's own taxonomy of common jailbreak techniques; not attributed to a specific source, and not claimed to be exhaustive or OWASP/Giskard/Promptfoo's own wording. |

## Corrections made during this pass (not just citation hygiene)

1. **Outdated Giskard API in "In practice".** The original code used `giskard.Model(...)`, `giskard.Dataset(...)`, `giskard.scan(model, dataset)`, and `report.to_html(...)`. None of those match the current, documented API (C7). Rewritten to `from giskard.scan import vulnerability_scan`, an async target function with Pydantic types, and `result.failed_count` / `result.pass_rate`.
2. **Invented `severity` field.** The original page claimed each Giskard probe "reports a vulnerability category and a severity", and the CI-gate example filtered findings by `f.severity == "high"`. A full-text search of the current 535-line Scan API reference found zero occurrences of "severity" (C6). Severity is a human reading of the failure text, not a structured field. Rewritten throughout (How it works, In practice, Common mistakes, What a tester can check, Key words) to "pass/fail verdict with reasoning" and "failure baseline" instead of "severity baseline".
3. **Hallucination mis-grouped as a vulnerability category.** The original "In plain words" and "How it works" text listed "injection, hallucination, harmful content, discrimination" as one list of "vulnerability categories". Hallucination is a `quality_scan` concept (knowledge-base driven), a different function from `vulnerability_scan` (threat-type driven) (C5). Rewritten to separate the two scans explicitly.
4. **NeMo rail count, in the companion page `guardrails-bias.mdx`.** That page's "How it works" section listed exactly three NeMo rail types (input, dialog, output) as if exhaustive. NeMo's own "Core Building Blocks" page lists five: "Input, retrieval, dialog, execution, and output rails". Fixed by keeping the three most relevant to a tester but explicitly naming that retrieval and execution rails also exist.

Open question not fully resolved: Promptfoo's own red team report schema (the exact Python/JSON shape of `promptfooResults`) was not independently fetched and verified field-by-field in this pass, because `promptfoo-redteam` as cited is a conceptual/workflow page, not an API reference. The merged CI-gate example was written to use only confirmed Giskard fields (`failures_and_errors`, `scenario_name`) and treats the Promptfoo side generically (`promptfoo_failed_ids`, a plain list) rather than inventing a specific Promptfoo attribute path. A future pass could fetch Promptfoo's red team report/API reference directly to tighten this further.
