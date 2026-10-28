# AI Engineering page: Data Governance (research notes)

Writer notes for `content/ai-engineering/data-governance.mdx`. Fetched 2026-10-28. The checker fetched all 5 sources again on 2026-10-28. Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` finds no run of 8 or more words copied from these files. EUR-Lex (GDPR) refused the automated fetch (bot check), so the page gives no GDPR article. A later writer can add GDPR facts once the text is read from EUR-Lex.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | AI RMF Core, AI RMF 1.0 section 5 (NIST AI Resource Center) | https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ | 2026-10-28 |
| S2 | LLM02:2025 Sensitive Information Disclosure (OWASP Gen AI Security Project) | https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/ | 2026-10-28 |
| S3 | API and data retention (Claude Platform Docs) | https://platform.claude.com/docs/en/manage-claude/api-and-data-retention | 2026-10-28 |
| S4 | Data controls in the OpenAI platform (OpenAI API Docs) | https://developers.openai.com/api/docs/guides/your-data | 2026-10-28 |
| S5 | Auditing (Kubernetes Documentation) | https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/ | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Data at risk: personal, financial, health, business, credentials, legal. | S2 | "personal identifiable information (PII), financial details, health records, confidential business data, security credentials, and legal documents." |
| C2 | Legal and regulatory AI requirements understood, managed, documented. | S1 | "Govern 1.1: Legal and regulatory requirements involving AI are understood, managed, and documented." |
| C3 | Inventory of AI systems. | S1 | "Govern 1.6: Mechanisms are in place to inventory AI systems" |
| C4 | Privacy risk examined and documented. | S1 | "Measure 2.10: Privacy risk of the AI system ... is examined and documented." |
| C5 | Sanitization: scrub or mask before training. | S2 | "Implement data sanitization to prevent user data from entering the training model. This includes scrubbing or masking sensitive content before it is used in training." |
| C6 | Pattern matching to detect and redact before processing. | S2 | "Techniques like pattern matching can detect and redact confidential content before processing." |
| C7 | System-prompt data restrictions can be bypassed via prompt injection. | S2 | "such restrictions may not always be honored and could be bypassed via prompt injection or other methods." |
| C8 | Least privilege; grant only needed data. | S2 | "Limit access to sensitive data based on the principle of least privilege. Only grant access to data that is necessary for the specific user or process." |
| C9 | Anthropic: conversation content not retained by default, except Covered Models with 30-day retention. | S3 | "Conversation content (your prompts and Claude's outputs) is not retained by default; the exception is Covered Models, which require 30-day retention." |
| C10 | ZDR: no storage at rest after the response returns. | S3 | "Under a ZDR arrangement, Anthropic does not store customer prompts or responses at rest after the API response is returned." |
| C11 | ZDR per organization; features marked "No", such as code execution, not covered. | S3 | "ZDR is enabled per organization" / "Features that use `/v1/messages` but are marked "No" in the table (such as code execution) are not covered." |
| C12 | OpenAI: API data not used for training since March 1, 2023 unless opt-in. | S4 | "As of March 1, 2023, data sent to the OpenAI API is not used to train or improve OpenAI models (unless you explicitly opt in to share data with us)." |
| C13 | OpenAI: abuse monitoring logs up to 30 days by default, unless law requires longer or longer is reasonably necessary to protect services or third parties. | S4 | "By default, abuse monitoring logs are generated for all API feature usage and retained for up to 30 days, unless longer retention is required by law, or is reasonably necessary to protect our services or any third party from" |
| C14 | Abuse monitoring logs exist to enforce usage policies (Key words). | S4 | "Logs generated from your use of the platform, necessary for OpenAI to enforce our Usage Policies" |
| C15 | Audit: chronological records; who, what, when, on what, from where. | S5 | "Kubernetes auditing provides a security-relevant, chronological set of records documenting the sequence of actions in a cluster." / "what happened? when did it happen? who initiated it? on what did it happen? where was it observed? from where was it initiated?" |

## Not on the page / doubts

- The 4-question framing (privacy, retention, access, audit trail) and the retrieval-time permission filter are the tutorial's own view (marked on the page after the fact-check).
- The data map, the 14-day trace retention, and "a log often holds more personal data than the main database" are the tutorial's own view.
- Kubernetes auditing is used as a model of an audit trail, not as a claim about AI tools.
- Legal claims: the page states no law. The only legal words are NIST Govern 1.1 (requirements are understood and documented) and the OpenAI retention exception. GDPR is left out because EUR-Lex refused the automated fetch.
