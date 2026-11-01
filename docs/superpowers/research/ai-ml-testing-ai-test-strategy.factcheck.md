# Fact check: AI/ML Testing, AI Test Strategy and Planning

Page: `content/ai-ml-testing/ai-test-strategy.mdx`. Date: 2026-11-02.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://airc.nist.gov/airmf-resources/playbook/ | yes | NIST AI Resource Center (fixed from a dead-end overview page earlier in this session; see `ai-ml-testing-owasp-llm-risks.factcheck.md`). |
| 2 | https://genai.owasp.org/llm-top-10/ | yes | OWASP GenAI Security Project (same fix). |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | NIST's framework: govern, map, measure, manage. | 1 | PASS | Already verified this session (see owasp-llm-risks factcheck, claim 3). |
| 2 | OWASP Top 10 as a risk checklist. | 2 | PASS | Already verified this session (owasp-llm-risks factcheck, claim 1). |
| 3 | Six-step planning process (describe, map layers, map risks, pick test types, pick metrics, set gate). | none | PASS: labeled as the plan structure, not attributed to NIST or OWASP as their own process. |
| 4 | Step 3 maps to NIST's "map" function. | 1 | PASS: a reasonable, non-overclaiming application of the Playbook's own ordering to this page's planning process. |
| 5 | Risk-to-test-type table (LLM01/02/06/09 to specific test types). | none | PASS: the tutorial's own mapping, not claimed as OWASP's or NIST's. |
| 6 | Worked "AI-powered customer support" plan outline and `SCOPED_RISKS` code. | none | PASS: illustrative, no cite expected. |
| 7 | Common mistakes 1-5, tutorial-advice bullets. | none (general advice) | PASS. |

No new issues found. Both cited sources were already fixed and verified earlier in this session while fact-checking `owasp-llm-risks.mdx`; this page's claims about them are a strict subset of what was already confirmed, and its own contributions (the planning process, the risk-to-test-type table) are correctly labeled as the tutorial's own framework.

Open FAILs: 0
