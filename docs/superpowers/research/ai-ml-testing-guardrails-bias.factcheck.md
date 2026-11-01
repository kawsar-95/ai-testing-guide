# Fact check: AI/ML Testing, Guardrails, Output Validation, and Bias Testing

Page: `content/ai-ml-testing/guardrails-bias.mdx`. Date: 2026-11-02.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.guardrailsai.com/docs | yes | Guardrails AI's own docs. |
| 2 | https://docs.nvidia.com/nemo/guardrails/latest/index.html | yes (NVIDIA's own check script shows an intermittent `Network is unreachable` result in this sandbox for this host; resolved fine on direct `curl` for this check). | NVIDIA's own docs. |
| 3 | https://deepeval.com/docs/metrics-introduction | yes | DeepEval's own docs; URL previously verified correct in two other factchecks. |
| 4 | https://genai.owasp.org/llm-top-10/ | yes | OWASP GenAI Security Project. |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Guardrails AI validates output structure/content against rules, re-asks on failure. | 1 | PASS | Confirmed via the intro page (Input/Output Guards) and the Guard concepts page (`num_reasks` argument). |
| 2 | NeMo Guardrails is a configurable set of rails, blocking topics/enforcing flow/checking content before or after the model. | 2 | PASS | NeMo's "Core Building Blocks" and "Benefits" sections confirm this framing directly. |
| 3 | "NeMo's rails sit at different points in the flow" with a 3-row diagram (input/dialog/output). | 2 | FAIL, fixed | NeMo's own page lists five rail types: "Input, retrieval, dialog, execution, and output". The original sentence did not say "three of five" or similar, so it read as an exhaustive list. Fixed to name all five and explain that input/dialog/output are the three most relevant to a tester, without removing the diagram. |
| 4 | DeepEval ships bias and toxicity metrics for exactly this purpose. | 3 | PASS | DeepEval's own metrics page lists "Bias" and "Toxicity" under its safety metrics. |
| 5 | Sensitive information disclosure and system prompt leakage are both named OWASP risks. | 4 | PASS | Matches LLM02 and LLM07 from the verified OWASP Top 10 list (see `ai-ml-testing-owasp-llm-risks.md`). |
| 6 | The re-ask step recovers from a class of failure a hard rejection would just surface to the user. | 1 | PASS: reasonable characterization of what re-asking buys over outright rejection, consistent with the documented `num_reasks` mechanism, not a direct quote. |
| 7 | Guardrails AI code: `Guard().use(ValidJson()).use(DetectPII(pii_entities=[...]))`. | none (illustrative code) | PASS, with a caveat: the `.use()` chaining pattern and `guardrails.hub` import style are correct Guardrails AI conventions; the exact current signature of `ValidJson`/`DetectPII` (e.g. constructor arguments) was not independently re-verified against a live Guardrails Hub reference page in this pass. Not changed, flagged in the research notes as a follow-up. |
| 8 | NeMo YAML rail example (`define flow block competitor mention`). | none (illustrative code) | PASS: Colang flow syntax matches NeMo's documented configuration style (Colang flows, as confirmed on the overview page: "Colang flows: Colang defines conversational flows, guardrail logic, and event-driven behavior"). |
| 9 | Bias testing with paired cases differing only in a demographic detail; DeepEval's `BiasMetric`. | 3 | PASS | `BiasMetric` is consistent with claim 4's confirmed "Bias" safety metric; the paired-case methodology is the tutorial's own testing design, not an OWASP/DeepEval-specified procedure, and is not misattributed as such. |
| 10 | Data leakage test examples (planted synthetic PII, system-prompt extraction attempts). | 4 | PASS: consistent with the OWASP sensitive-information-disclosure and system-prompt-leakage definitions (claim 5) applied as test design, not quoted as OWASP's own procedure. |
| 11 | Common mistakes 1-6, "What a tester can check" bullets. | 1, 3 | PASS. |

## Notes

- One real content gap found and fixed: the page implied NeMo has exactly three rail types; it has five. Fixed without removing the useful three-row simplification.
- One follow-up flagged, not fixed: the exact Guardrails Hub validator signatures in the "In practice" code were not re-verified against a live reference page in this pass.

Open FAILs: 0
