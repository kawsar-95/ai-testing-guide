# Research notes: AI/ML Testing, Prompt Engineering Fundamentals

Page: `content/ai-ml-testing/prompt-engineering-basics.mdx` (data: `scripts/ai_ml_testing_pages_p1b.py`). Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Prompt engineering overview | Anthropic (Claude API docs) | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview (301 to platform.claude.com) | 2026-11-02 |
| S2 | Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Wei et al.) | arXiv | https://arxiv.org/abs/2201.11903 | 2026-11-02 |
| S3 | Self-Consistency Improves Chain of Thought Reasoning in Language Models (Wang et al.) | arXiv | https://arxiv.org/abs/2203.11171 | 2026-11-02 |

Removed: `anthropic-evals` (https://www.anthropic.com/engineering/evaluating-ai-systems). The URL opens "Challenges in evaluating AI systems" (Anthropic, 2023), not "Define success criteria and build evaluations". It does not support the claim it was cited for. See the fact check.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | The overview covers techniques from clarity and examples to XML structuring, role prompting, thinking, and prompt chaining. | S1 | "from clarity and examples to XML structuring, role prompting, thinking, and prompt chaining" |
| C2 | The guide assumes success criteria and a way to test against them empirically before prompt engineering. | S1 | "Some ways to empirically test against those criteria" |
| C3 | CoT improves performance on arithmetic, commonsense, and symbolic reasoning tasks. | S2 | "improves performance on a range of arithmetic, commonsense, and symbolic reasoning tasks" |
| C4 | The gains emerge in sufficiently large models. | S2 | "emerge naturally in sufficiently large language models" |
| C5 | There is no guarantee that a generated reasoning path is correct. | S2 | "there is no guarantee of correct reasoning paths" |
| C6 | Self-consistency samples diverse reasoning paths and selects the most consistent answer. | S3 | "samples a diverse set of reasoning paths" |
| C7 | Self-consistency boosts CoT performance by a large margin. | S3 | "boosts the performance of chain-of-thought prompting with a striking margin" |

The four-part prompt list, the explanation of how format instructions and few-shot examples steer the output, the language-parity advice, and the code examples are the tutorial's own. The page labels them so.
