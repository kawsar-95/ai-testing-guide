# Fact check: AI/ML Testing, OWASP Top 10 for LLMs

Page: `content/ai-ml-testing/owasp-llm-risks.mdx`. Data: `scripts/ai_ml_testing_pages_p1f.py`. Checker: an agent that did not write the page's sections (the generator and research pass are shared infrastructure; this check re-reads the built page against freshly fetched sources). Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://genai.owasp.org/llm-top-10/ | yes | OWASP GenAI Security Project. FAIL, fixed: the library previously cited `owasp.org/projects/top-10-for-large-language-model-applications`, a project-landing stub that redirects nowhere but says the content moved here. |
| 2 | https://genai.owasp.org/llmrisk/llm01-prompt-injection/ | yes | OWASP GenAI Security Project. FAIL, fixed: same stub-URL problem as source 1; this is the actual LLM01 detail page. |
| 3 | https://airc.nist.gov/airmf-resources/playbook/ | yes | NIST (AI Resource Center). FAIL, fixed: the library previously cited `nist.gov/itl/ai-risk-management-framework`, a news/overview page whose visible text does not show "govern/map/measure/manage"; this Playbook page's own navigation does. |

Each source 1-3 is cited at least one time. Each cite number has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | The ten LLM0x names and one-line descriptions in the code block (prompt injection, sensitive info disclosure, supply chain, data/model poisoning, improper output handling, excessive agency, system prompt leakage, vector/embedding weaknesses, misinformation, unbounded consumption). | 1 | PASS | All ten names and the gist of each matches the live `genai.owasp.org/llm-top-10/` list text, e.g. "LLM06:2025 Excessive Agency", "LLM10:2025 Unbounded Consumption". |
| 2 | Direct injection is the user typing the attack; indirect is hidden in a document/page/email the model reads, and is harder to catch because the user never sees it. | 2 | PASS | "Direct prompt injections occur when a user's prompt input directly alters the behavior of the model"; "Indirect prompt injections occur when an LLM accepts input from external sources, such as websites or files." The "harder to catch, user never sees it" clause is the tutorial's own reasonable inference from "external sources", not a direct quote. |
| 3 | NIST AI RMF: govern, map, measure, manage. | 3 | PASS | Playbook page navigation: "AI RMF Playbook Govern Map Measure Manage". |
| 4 | Risk-to-architecture-layer table (prompt injection -> prompt builder/model, excessive agency -> agent's tool layer, etc.). | none | PASS: labeled as the tutorial's own mapping onto the architecture module's layers, not an OWASP claim. |
| 5 | Direct prompt injection test: send the attack as the user message, check the system prompt holds. | none | PASS: testing advice, consistent with the LLM01 definition (claim 2). |
| 6 | Indirect prompt injection test: plant the attack in a retrieved document, check the model treats it as data not instruction. | 2 | PASS | Same LLM01 quote as claim 2; "external sources, such as websites or files" supports planting an attack in a document. |
| 7 | System prompt leakage test: direct ask, indirect ask, format-trick ask; a system prompt is not a secret and should not be the only thing standing between a user and a credential, connection string, or permission boundary. | 1 | PASS (added during this check) | LLM07 detail page (`genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/`, one click from source 1, not cited separately): "the system prompt should not be considered a secret, nor should it be used as a security control... sensitive data such as credentials, connection strings, etc. should not be contained within the system prompt." The original page draft only had the first sentence (ask directly/indirectly/format-trick) with no citation; this check added the "not a secret" sentence, cited to source 1, because the omission was a real gap for a tester (testing whether leakage happens is not the only test; testing what was put in the prompt matters more). |
| 8 | Excessive agency test: give the agent an out-of-scope goal, check it refuses or asks. | 1 | PASS | LLM06 detail page: "Excessive Agency is the vulnerability that enables damaging actions to be performed in response to unexpected, ambiguous or manipulated outputs", consistent with testing whether the agent acts on an out-of-scope goal. |
| 9 | Unbounded consumption test: send a token-maximizing request, check a budget stops it before the bill does. | 1 | PASS | LLM10 detail page: "Unbounded Consumption occurs when a ... application allows users to conduct excessive and uncontrolled inferences, leading to risks such as ... economic losses" — "the bill" is the tutorial's plain-language gloss on "economic losses", not a misquote. |
| 10 | Python test catalogue (`OWASP_CASES`, the three test functions). | none | PASS: illustrative example code, labeled as such by the "In practice" section convention (no `<Cite>` in this section, per the page-shape spec). |
| 11 | Common mistakes 1-6. | 1, 2 | PASS: mistake 1's claim that indirect injection is "the more realistic and more dangerous form" is the tutorial's own comparative judgment built on the LLM01 definition (claim 2), not a ranking OWASP itself states. Flagged here for transparency; not changed, because it is reasonable tester guidance and does not misattribute a specific sentence to OWASP. |

## Notes

- Library fix: `owasp-llm` and `owasp-llm-prompt` were both pointed at a dead-end project-landing URL; both now point at the pages that actually carry the quoted text. `nist-ai-rmf` was pointed at a page whose visible text does not show the four RMF functions; now points at the Playbook page that does.
- One real content gap found and fixed: the system-prompt-leakage test advice did not mention OWASP's own point that a system prompt should never be relied on as a secret or security boundary. Added, cited.
- Not added as separate library keys (yet): LLM06, LLM07, and LLM10 each have their own detail page on `genai.owasp.org`, fetched directly for this check but still cited as "source 1" rather than as dedicated keys, since the page's `sources` list is deliberately short (3 entries) and each detail page is one click from the Top 10 list already cited.

Open FAILs: 0
