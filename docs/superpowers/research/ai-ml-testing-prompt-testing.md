# Research notes: AI/ML Testing, Prompt Testing

Page: `content/ai-ml-testing/prompt-testing.mdx` (data: `scripts/ai_ml_testing_pages_p1b.py`). Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Prompt engineering overview | Anthropic (Claude API docs) | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview (301 to platform.claude.com) | 2026-11-02 |
| S2 | OWASP Top 10 for Large Language Model Applications | OWASP | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | 2026-11-02 |

Removed: `anthropic-evals` (https://www.anthropic.com/engineering/evaluating-ai-systems). The page is "Challenges in evaluating AI systems" and does not support the claim it was cited for.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | The guide assumes, in order: success criteria, a way to test them empirically, a first draft prompt. | S1 | "A clear definition of the success criteria for your use case" |
| C2 | The same list: empirical tests against the criteria. | S1 | "Some ways to empirically test against those criteria" |
| C3 | The OWASP Top 10 for LLM lists Prompt Injection as LLM01. | S2 | "LLM01: Prompt Injection" |
| C4 | LLM01 is manipulating LLMs via crafted inputs. | S2 | "Manipulating LLMs via crafted inputs can lead to unauthorized access" |
| C5 | The Top 10 identifies the most critical vulnerabilities in LLM applications. | S2 | "identifying the most critical security vulnerabilities in LLM applications" |

Not on S2: the direct and indirect forms of prompt injection. They are on the OWASP GenAI risk page (genai.owasp.org/llmrisk/llm01-prompt-injection/), which is not in the source library. The page now presents the split as the tutorial's own terms.

The class list, the input taxonomy, the slot attacks, the failure catalogue, the `layer` field, and the code are the tutorial's own method.
