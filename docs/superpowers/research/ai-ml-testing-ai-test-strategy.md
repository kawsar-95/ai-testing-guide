# Research notes: AI/ML Testing, AI Test Strategy and Planning

Page: `content/ai-ml-testing/ai-test-strategy.mdx` (data: `scripts/ai_ml_testing_pages_p1g.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | `nist-ai-rmf` | AI RMF Playbook (Govern, Map, Measure, Manage) | NIST (AI Resource Center) | https://airc.nist.gov/airmf-resources/playbook/ | 2026-11-02 |
| S2 | `owasp-llm` | OWASP Top 10 for LLM Applications and Generative AI 2025 | OWASP GenAI Security Project | https://genai.owasp.org/llm-top-10/ | 2026-11-02 |

Both sources and their quotes were already fetched and verified in this session for `ai-ml-testing-owasp-llm-risks.md`; not re-fetched here, cross-referenced instead.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | NIST's framework has four parts: govern, map, measure, manage. | S1 | "AI RMF Playbook Govern Map Measure Manage" (verified in `ai-ml-testing-owasp-llm-risks.md`, claim C3). |
| C2 | OWASP Top 10 names ten LLM risks, used here as a risk checklist. | S2 | Verified in `ai-ml-testing-owasp-llm-risks.md`, claim C1: all ten LLM0x names match. |
| C3 | Step 3 of a plan ("map the risks") corresponds to NIST's "map" function: naming the risk before deciding how to measure it. | S1 | Reasonable application of the Playbook's own function ordering (govern, then map, then measure, then manage) to a test-plan context; the page does not claim NIST's Playbook itself describes a six-step test-planning process, only that step 3 is "the one NIST's framework calls map". |
| C4 | Risk-to-test-type mapping table (LLM01 -> red team, LLM02 -> data leakage tests, LLM06 -> agent action tests, LLM09 -> hallucination/faithfulness eval). | none | Labeled as the tutorial's own synthesis, mapping each OWASP risk onto a concrete test type; not claimed as an OWASP- or NIST-specified mapping. |
| C5 | Worked plan outline and `SCOPED_RISKS` test code. | none | Illustrative example, no cite needed per the "In practice" convention. |

## Notes

No new fetches were needed for this page: both cited sources were already verified at the quote level while fact-checking `owasp-llm-risks.mdx` in this session, and this page's claims about them (the ten risks exist; the four RMF functions are govern/map/measure/manage) are strict subsets of what was already confirmed. The page's own contribution (the six-step planning process, the risk-to-test-type table) is correctly labeled as the tutorial's own framework, not attributed to either source.
