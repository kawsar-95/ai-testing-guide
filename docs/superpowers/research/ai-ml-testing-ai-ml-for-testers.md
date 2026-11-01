# Research notes: AI/ML Testing, AI and ML for Testers

Page: `content/ai-ml-testing/ai-ml-for-testers.mdx` (data: `scripts/ai_ml_testing_pages_p1a.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | `anthropic-evals` | Challenges in evaluating AI systems (library title: "Define success criteria and build evaluations") | Anthropic | https://www.anthropic.com/engineering/evaluating-ai-systems | 2026-11-02 |
| S2 | `owasp-llm` | OWASP Top 10 for Large Language Model Applications (links to Version 2025 at genai.owasp.org/llm-top-10/) | OWASP | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | 2026-11-02 |
| S3 | `nist-ai-rmf` | AI Risk Management Framework | NIST | https://www.nist.gov/itl/ai-risk-management-framework | 2026-11-02 |

Note on S1: the page at the URL is "Challenges in evaluating AI systems" (Oct 4, 2023). The library title does not match it. The title "Define success criteria and build evaluations" belongs to `platform.claude.com/docs/en/test-and-evaluate/develop-tests`. The page claims were changed to cite only what S1 says.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Simple formatting changes to an evaluation can move the score. | S1 | "Simple formatting changes to the evaluation" (MMLU, about 5%) |
| C2 | Any evaluation can be over-read. | S1 | "overinterpret the quantitative score" |
| C3 | OWASP names prompt injection, sensitive information disclosure, supply chain among the top risks. | S2 | "LLM01:2025 Prompt Injection", "LLM02:2025 Sensitive Information Disclosure", "LLM03:2025 Supply Chain" |
| C4 | NIST AI RMF functions: govern, map, measure, manage. | S3 | "Govern, Measure, Manage, Map" |
| C5 | ML definitions, gradient descent, inference, temperature. | none | Labeled on the page as the tutorial's own explanation. |
| C6 | Code example: `anthropic.Anthropic()`, `client.messages.create(model, max_tokens, temperature, messages)`, `message.content[0].text`; model id `claude-sonnet-4-6` is a current API model id. | Messages API reference (platform.claude.com/docs/en/api/messages), checked, not cited | `claude-sonnet-4-6` in the `model` enum |
