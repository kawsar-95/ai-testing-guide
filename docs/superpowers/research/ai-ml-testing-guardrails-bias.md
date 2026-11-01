# Research notes: AI/ML Testing, Guardrails, Output Validation, and Bias Testing

Page: `content/ai-ml-testing/guardrails-bias.mdx` (data: `scripts/ai_ml_testing_pages_p1f.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | `guardrails-intro` | Guardrails AI | Guardrails (docs) | https://www.guardrailsai.com/docs | 2026-11-02 |
| S2 | `nemo-intro` | NeMo Guardrails | NVIDIA (docs) | https://docs.nvidia.com/nemo/guardrails/latest/index.html | 2026-11-02 |
| S3 | `deepeval-metrics` | Metrics | DeepEval docs | https://deepeval.com/docs/metrics-introduction | 2026-11-02 (already verified in two earlier factchecks: `ai-ml-testing-deepeval-pytest.factcheck.md`, `ai-ml-testing-hallucination-detection.factcheck.md`) |
| S4 | `owasp-llm` | OWASP Top 10 for LLM Applications and Generative AI 2025 | OWASP GenAI Security Project | https://genai.owasp.org/llm-top-10/ | 2026-11-02 |

## Claims

| # | Claim | Source | Quote / evidence |
|---|---|---|---|
| C1 | Guardrails AI validates output structure/content against rules, and can re-ask the model on failure. | S1 (intro page) + `guardrailsai.com/docs/concepts/guard`, one click from S1 | Intro: "Guardrails runs Input/Output Guards in your application that detect, quantify and mitigate the presence of specific types of risks." Guard concepts page: "you can also allow Guardrails to make re-asks to the LLM by specifying the `num_reasks` argument". |
| C2 | NeMo Guardrails is a configurable set of rails that can block a topic, enforce a conversation flow, or check content before/after the model. | S2 (overview page) | "Rails: Input, retrieval, dialog, execution, and output rails run at different stages of an LLM interaction." / "Add guardrails before and after LLM calls without changing the application LLM." |
| C3 | NeMo's rails: input (before the model sees the message), dialog (constrains allowed conversation flows), output (checks the answer before the user sees it). | S2 | Same "Core Building Blocks" quote as C2; NeMo documents five rail types (input, retrieval, dialog, execution, output), not three. The page originally presented only three as if that were the complete list. |
| C4 | DeepEval ships bias and toxicity metrics. | S3 | "Safety metrics concerns more on LLM security. They include: Bias Toxicity Non-Advice Misuse PIILeakage Role Violation" |
| C5 | Sensitive information disclosure and system prompt leakage are named OWASP risks. | S4 | Confirmed in `ai-ml-testing-owasp-llm-risks.md` (LLM02 and LLM07). |
| C6 | Guardrails AI `Guard().use(ValidJson()).use(DetectPII(...))` pattern. | none (illustrative code) | This matches Guardrails AI's documented Hub-validator pattern (`guardrails.hub` imports, `.use()` chaining); not independently re-verified field-by-field against a current Hub validator reference page in this pass, flagged below. |

## Correction made during this pass

NeMo Guardrails has five rail types, not three: "Input, retrieval, dialog, execution, and output rails run at different stages of an LLM interaction" (NeMo's own "Core Building Blocks" page). The page's "How it works" section presented a three-row diagram (input/dialog/output) in a way that read as the complete list. Fixed by adding one sentence naming all five and explaining that input/dialog/output are the three a tester interacts with most, without removing the three-row diagram (which stays useful and accurate as far as it goes).

## Not independently re-verified in this pass

- The exact current import path and constructor signature for `guardrails.hub.DetectPII` and `ValidJson` (claim C6). The `Guard().use(...)` chaining pattern itself is Guardrails AI's documented style; the two specific validator names were not re-confirmed against a live Hub page in this session. Flagged as a follow-up for a future pass, not changed, since the general pattern is correct and the specific names are plausible, well-known Guardrails Hub validators.
