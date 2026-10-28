# Fact-check: content/ai-engineering/data-governance.mdx

Checked 2026-10-28 by an agent that did not write the page. All 5 sources were fetched again (NIST AI RMF Core, OWASP LLM02:2025, Claude Platform "API and data retention", OpenAI "Data controls in the OpenAI platform", Kubernetes "Auditing"). The quotes of the research notes were not trusted. Every quote below is from the fetched text, with whitespace normalized.

Scope: the claims in the `<Technical>` panels and the Key words table. The lede is the page's own definition.

Copy check: `scripts/linux_overlap.py` against the 5 fetched texts. Round 1: no run of 8 or more words. After the fixes, one run ("sensitive content before it is used in training") showed in the new Key words text. It was reworded (see F4). Final: no run.

Legal claims (writer doubt 5): the page names no law and gives no GDPR fact. EUR-Lex refused the automated fetch, and the checker did not try to bypass the bot check. The only legal words on the page are NIST Govern 1.1 (cited) and the OpenAI retention exception (cited). No unsourced legal claim. PASS.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Data governance for an AI app covers 4 questions: privacy, retention, access, audit trail | none | FAIL (F1) | No source gives this framing, and the page did not mark it as the tutorial's own view. |
| 2 | OWASP lists the data at risk: personal, financial, health, confidential business, credentials, legal papers | 2 | PASS | OWASP: "This includes personal identifiable information (PII), financial details, health records, confidential business data, security credentials, and legal documents." |
| 3 | NIST: legal and regulatory requirements for AI are understood, managed, documented | 1 | PASS | NIST: "Govern 1.1: Legal and regulatory requirements involving AI are understood, managed, and documented." |
| 4 | NIST: an inventory of AI systems | 1 | PASS | NIST: "Govern 1.6: Mechanisms are in place to inventory AI systems and are resourced according to organizational risk priorities." |
| 5 | NIST: privacy risk of each system is examined and documented | 1 | PASS | NIST: "Measure 2.10: Privacy risk of the AI system – as identified in the map function – is examined and documented." |
| 6 | Data map diagram; each box needs an owner, a retention period, an access rule | none | PASS | Marked "Tutorial's own view". |
| 7 | OWASP advises sanitization (scrub or mask) so that user data does not enter training | 2 | PASS | OWASP: "Implement data sanitization to prevent user data from entering the training model. This includes scrubbing or masking sensitive content before it is used in training." |
| 8 | OWASP suggests pattern matching to detect and redact confidential content before processing | 2 | PASS | OWASP: "Techniques like pattern matching can detect and redact confidential content before processing." |
| 9 | A system-prompt rule about what data to return can be bypassed through prompt injection | 2 | PASS | OWASP: "such restrictions may not always be honored and could be bypassed via prompt injection or other methods." |
| 10 | Anthropic: conversation content not retained by default, except some models that need 30-day retention | 3 | PASS | Claude docs: "Conversation content (your prompts and Claude's outputs) is not retained by default; the exception is Covered Models" / "require 30-day data retention". |
| 11 | Under ZDR, prompts and responses are not stored at rest after the response returns | 3 | PASS | Claude docs: "Under a ZDR arrangement, Anthropic does not store customer prompts or responses at rest after the API response is returned." |
| 12 | ZDR is enabled per organization | 3 | PASS | Claude docs: "ZDR is enabled per organization; each new organization requires ZDR to be enabled separately by your account team". |
| 13 | ZDR does not cover features the table marks "No", such as code execution | 3 | PASS | Claude docs: "Features that use `/v1/messages` but are marked "No" in the table (such as code execution) are not covered." |
| 14 | OpenAI: since March 1, 2023, API data is not used for training unless the customer opts in | 4 | PASS | OpenAI: "As of March 1, 2023, data sent to the OpenAI API is not used to train or improve OpenAI models (unless you explicitly opt in to share data with us)." |
| 15 | OpenAI: abuse monitoring logs kept up to 30 days, "unless the law needs longer" | 4 | FAIL (F3) | Incomplete exception. OpenAI: "retained for up to 30 days, unless longer retention is required by law, or is reasonably necessary to protect our services or any third party from" harm. The page gave only the law. |
| 16 | OWASP: limit access by least privilege; grant only the data a user or process needs | 2 | PASS | OWASP: "Limit access to sensitive data based on the principle of least privilege. Only grant access to data that is necessary for the specific user or process." |
| 17 | In a retrieval app, the search step filters by user permissions before the model sees any document | none | FAIL (F2) | An application of least privilege with no source, not marked as the tutorial's own view. |
| 18 | An audit trail is a time-ordered record of actions; Kubernetes auditing records who, what, when, on what, from where | 5 | PASS | Kubernetes: "a security-relevant, chronological set of records documenting the sequence of actions in a cluster" / "what happened? when did it happen? who initiated it? on what did it happen? where was it observed? from where was it initiated?" |
| 19 | For an AI app, log user, documents, tools, model ID; protect the log | none | PASS | Marked "Tutorial's own view". |
| 20 | Example 1: redaction step masks names and record numbers, as OWASP suggests | 2 | PASS | Same quote as claim 8 (detect and redact before processing). |
| 21 | Example 2: the team requests ZDR for the organization | 3 | PASS | Claude docs: "To request ZDR for your organ[ization]" / "ZDR is enabled per organization". |
| 22 | Example 3: trace tool keeps the redacted prompt 14 days; a log often holds more personal data than the main database | none | PASS | Scenario detail; the general claim is marked "Tutorial's own view". |
| 23 | Example 4: logging user, document, and model IDs answers "who saw what?" | 5 | PASS | Applies the audit questions of claim 18 ("who initiated it? on what did it happen?"). |
| 24 | Example: NIST asks that privacy risk is examined and documented | 1 | PASS | Same quote as claim 5. |
| 25 | Retention depends on provider, feature, contract; ZDR leaves out "No" features | 3 | PASS | Same quote as claim 13; ZDR is an arrangement with the account team (claim 12). |
| 26 | OpenAI keeps abuse monitoring logs up to 30 days by default | 4 | PASS | OpenAI: "By default, abuse monitoring logs are generated for all API feature usage and retained for up to 30 days". |
| 27 | Forgotten copies are the most common leak | none | PASS | Marked "Tutorial's own view". |
| 28 | A system prompt "only show HR data to HR" can be bypassed | 2 | PASS | Same quote as claim 9. "Filter before retrieval" is advice that follows from it. |
| 29 | NIST asks for mechanisms to inventory AI systems | 1 | PASS | Same quote as claim 4. |
| 30 | An audit record should answer who, what, when, on what | 5 | PASS | Same quote as claim 18. |
| 31 | Tester tips | none | PASS | In a "Tutorial advice" callout with no cites. Uses fake data and example.com. |
| 32 | Key words: Sensitive information = personal, financial, health, business, credential, legal data | 2 | PASS | Same quote as claim 2. |
| 33 | Key words: Data sanitization = scrub or mask sensitive content "before it is used" | 2 | FAIL (F4) | The source limits it to training: "before it is used in training". The key word dropped the scope. |
| 34 | Key words: Least privilege | 2 | PASS | Same quote as claim 16. |
| 35 | Key words: ZDR | 3 | PASS | Same quote as claim 11. |
| 36 | Key words: Abuse monitoring logs are kept to enforce usage policies | 4 | PASS | OpenAI: "Logs generated from your use of the platform, necessary for OpenAI to enforce our Usage Policies and agreements and mitigate harmful uses of AI." |
| 37 | Key words: Audit trail = time-ordered record of who, what, when, on what | 5 | PASS | Same quote as claim 18. |
| 38 | Key words: AI inventory = list of AI systems of an organization | 1 | PASS | Same quote as claim 4. |

## Fixes

| Id | Fix |
|---|---|
| F1 | "In plain words": the 4-question framing now starts with "Tutorial's own view:" (also in Layman and Bangla). |
| F2 | "How it works", Access: the retrieval filter sentence now starts with "Tutorial's own view:" (also in Layman and Bangla). |
| F3 | "How it works", OpenAI: the exception now reads "unless the law needs longer, or a longer period is reasonably needed to protect its services or others" (Layman and Bangla too). Research notes C13 updated with the full quote. |
| F4 | Key words: "Scrub or mask sensitive content before it goes into training" (reworded to avoid an 8-word copied run). |

## Re-check

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | 4-question framing | none | PASS | Marked "Tutorial's own view". |
| 15 | OpenAI abuse monitoring logs up to 30 days, unless law or protection of services or others needs longer | 4 | PASS | OpenAI: "unless longer retention is required by law, or is reasonably necessary to protect our services or any third party from" harm. |
| 17 | Retrieval filter by user permissions | none | PASS | Marked "Tutorial's own view". |
| 33 | Data sanitization before training | 2 | PASS | OWASP: "scrubbing or masking sensitive content before it is used in training". Overlap check: no 8-word run. |

Open FAILs: 0
