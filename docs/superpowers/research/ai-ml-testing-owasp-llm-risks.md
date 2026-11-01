# Research notes: AI/ML Testing, OWASP Top 10 for LLMs

Page: `content/ai-ml-testing/owasp-llm-risks.mdx` (data: `scripts/ai_ml_testing_pages_p1f.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | `owasp-llm` | OWASP Top 10 for LLM Applications and Generative AI 2025 | OWASP GenAI Security Project | https://genai.owasp.org/llm-top-10/ | 2026-11-02 |
| S2 | `owasp-llm-prompt` | LLM01:2025 Prompt Injection | OWASP GenAI Security Project | https://genai.owasp.org/llmrisk/llm01-prompt-injection/ | 2026-11-02 |
| S3 | `nist-ai-rmf` | AI RMF Playbook (Govern, Map, Measure, Manage) | NIST (AI Resource Center) | https://airc.nist.gov/airmf-resources/playbook/ | 2026-11-02 |

Note on S1 and S2: the library previously pointed both keys at `owasp.org/projects/top-10-for-large-language-model-applications`. That page is now a project-landing stub that says "this project has now grown into the comprehensive OWASP GenAI Security Project" and links to `genai.owasp.org/llm-top-10/` for "the latest Top 10 for LLM". Fixed to the two pages that actually carry the cited text: the Top 10 list page (S1) and the LLM01 detail page (S2).

Note on S3: the library previously pointed `nist-ai-rmf` at `nist.gov/itl/ai-risk-management-framework`, a news/overview page whose visible text does not contain "govern/map/measure/manage" (it links out to a PDF and to the Playbook). Fixed to the AI RMF Playbook page at `airc.nist.gov`, whose navigation menu lists the four functions directly: "AI RMF Playbook Govern Map Measure Manage".

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | OWASP names ten risks: LLM01 Prompt Injection through LLM10 Unbounded Consumption, with the names used on the page. | S1 | "LLM01:2025 Prompt Injection ... LLM02:2025 Sensitive Information Disclosure ... LLM03:2025 Supply Chain ... LLM04:2025 Data and Model Poisoning ... LLM05:2025 Improper Output Handling ... LLM06:2025 Excessive Agency ... LLM07:2025 System Prompt Leakage ... LLM08:2025 Vector and Embedding Weaknesses ... LLM09:2025 Misinformation ... LLM10:2025 Unbounded Consumption" |
| C2 | Direct injection is the user's own prompt input; indirect injection comes from external sources (a document, a web page) the model reads. | S2 | "Direct prompt injections occur when a user's prompt input directly alters the behavior of the model" / "Indirect prompt injections occur when an LLM accepts input from external sources, such as websites or files" |
| C3 | NIST's framework has four functions: govern, map, measure, manage. | S3 | Page navigation: "AI RMF Playbook Govern Map Measure Manage" |
| C4 | Excessive agency: the model/agent takes an action (calls a function or tool) it should not be able to. | S1 (LLM06 detail page, `genai.owasp.org/llmrisk/llm062025-excessive-agency/`, fetched, not a separate library key) | "An LLM-based system is often granted a degree of agency ... the ability to call functions or interface with other systems ... Excessive Agency is the vulnerability that enables damaging actions to be performed" |
| C5 | System prompt leakage: hidden instructions can contain sensitive information not meant to be discovered; a system prompt is not a secret and should not be used as a security control. | S1 (LLM07 detail page, `genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/`, fetched, not a separate library key) | "the system prompts ... can also contain sensitive information that was not intended to be discovered" / "the system prompt should not be considered a secret, nor should it be used as a security control" |
| C6 | Unbounded consumption: excessive, uncontrolled inference leading to cost, DoS, or theft. | S1 (LLM10 detail page, `genai.owasp.org/llmrisk/llm102025-unbounded-consumption/`, fetched, not a separate library key) | "Unbounded Consumption occurs when a Large Language Model (LLM) application allows users to conduct excessive and uncontrolled inferences, leading to risks such as denial of service (DoS), economic losses, model theft" |
| C7 | Risk-to-architecture-layer mapping table, the OWASP-id-in-the-report advice, and the Python test catalogue. | none | Labeled as the tutorial's own organizing structure and advice; no OWASP source makes this specific mapping. |

Open question not fully resolved: whether to add `owasp-llm-prompt`-style dedicated library keys for the LLM06/07/10 detail pages (C4-C6) instead of citing them as "S1, detail page". Left as S1-backed for now since the page's `sources` list only has 3 entries and the detail pages are one click from the Top 10 list; a future pass could add them as their own keys if a page needs to quote them more specifically.
