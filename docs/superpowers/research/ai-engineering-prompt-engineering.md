# AI Engineering page: Prompt Engineering (research notes)

Writer notes for `content/ai-engineering/prompt-engineering.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src/` (text in `/tmp/claude-1000/ai-eng-txt/`). Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` found no copied word run.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Prompt engineering overview (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview | 2026-10-28 |
| S2 | Prompting best practices (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | 2026-10-28 |
| S3 | Prompt engineering (OpenAI API docs) | https://developers.openai.com/api/docs/guides/prompt-engineering | 2026-10-28 |
| S4 | Prompt design strategies (Google, Gemini API docs) | https://ai.google.dev/gemini-api/docs/prompting-strategies | 2026-10-28 |
| S5 | LLM01:2025 Prompt Injection (OWASP Gen AI Security Project) | https://genai.owasp.org/llmrisk/llm01-prompt-injection/ | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Prompt engineering is writing instructions so the model gives the output you need, consistently. | S3 | "Prompt engineering is the process of writing effective instructions for a model, such that it consistently generates content that meets your requirements." |
| C2 | Treat the model as a capable new employee who lacks your context; the more exact, the better. | S2 | "Think of Claude as a brilliant but new employee who lacks context on your norms and workflows. The more precisely you explain what you want, the better the result." |
| C3 | Before prompt engineering: success criteria, a way to test, a first draft. | S1 | "A clear definition of the success criteria for your use case" / "Some ways to empirically test against those criteria" / "A first draft prompt you want to improve" |
| C4 | Not every problem is a prompt problem; another model can fix latency or cost more easily. | S1 | "you can sometimes improve latency and cost more easily by choosing a different model." |
| C5 | A developer message has Identity, Instructions, Examples, Context, usually in that order; context often best near the end. | S3 | "Identity: Describe the purpose, communication style, and high-level goals" / "Instructions: ... What should the model do, and what should the model never do?" / "Examples: Provide examples of possible inputs, along with the desired output" / "This content is usually best positioned near the end of your prompt" |
| C6 | Say format and limits; numbered lists when the order of steps matters. | S2 | "Be specific about the output format and constraints you want." / "Provide instructions as sequential steps using numbered lists or bullet points when the order or completeness of steps matters." |
| C7 | Colleague test. | S2 | "Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be confused, Claude will be too." |
| C8 | Give the reason; the model generalizes from it. | S2 | "Providing context or motivation behind your instructions ... can give Claude more information about your goals" / "Claude can generalize from the explanation." |
| C9 | Few-shot = a few examples; zero-shot = none. | S4 | "Prompts that contain a few examples are called few-shot prompts, while prompts that provide no examples are called zero-shot prompts." |
| C10 | 3 to 5 relevant, diverse examples in `<example>` tags. | S2 | "Include 3–5 examples for best results." / "Relevant: Mirror your actual use case closely." / "Diverse: Cover edge cases" / "Wrap examples in `<example>` tags" |
| C11 | Keep the same format in all examples (mixed formats give mixed output). | S4 | "Make sure that the structure and formatting of few-shot examples are the same to avoid responses with undesired formats." |
| C12 | XML tags such as instructions/context/input keep parts apart. | S2 | "Wrapping each type of content in its own tag (for example, `<instructions>`, `<context>`, `<input>`) reduces misinterpretation." |
| C13 | Markdown headings also work; pick one format and keep it. | S4 | "XML-style tags (e.g., <context>, <task>) or Markdown headings are effective. Choose one format and use it consistently within a single prompt." |
| C14 | Say what to do instead of what not to do. | S2 | "Tell Claude what to do instead of what not to do" / "Instead of: 'Do not use markdown in your response' Try: 'Your response should be composed of smoothly flowing prose paragraphs.'" |
| C15 | For 20k+ token inputs, put documents at the top and the query at the end. | S2 | "When working with large documents or data-rich inputs (20k+ tokens)" / "Place your long documents and inputs near the top of your prompt, above your query" |
| C16 | One sentence of role in the system prompt sets focus and tone; code uses `system`, `model="claude-opus-5-5"`, `max_tokens=1024`. | S2 | "Setting a role in the system prompt focuses Claude's behavior and tone for your use case. Even a single sentence makes a difference" / sample: `model="claude-opus-5-5", max_tokens=1024, system=...` |
| C17 | Different models and snapshots can answer differently; pin a snapshot; build evals. | S3 | "Even different snapshots of models within the same family could produce different results." / "Pinning your production applications to specific model snapshots" / "Building tests and evaluation suites that measure prompt behavior" |
| C18 | A vague task gives a basic result; ask explicitly for more. | S2 | "If you want Claude to do more than the task strictly requires, explicitly request it rather than relying on the model to infer this from vague prompts." (dashboard example) |
| C19 | Prompt injection: input changes model behavior in unintended ways; direct and indirect. | S5 | "A Prompt Injection Vulnerability occurs when user prompts alter the LLM's behavior or output in unintended ways." / "Indirect prompt injections occur when an LLM accepts input from external sources, such as websites or files." |
| C20 | Mitigations: mark untrusted content; validate output format with code. No fool-proof prevention. | S5 | "Separate and clearly denote untrusted content" / "use deterministic code to validate adherence to these formats" / "it is unclear if there are fool-proof methods of prevention for prompt injection" |

## Not on the page

Temperature and sampling settings are left out: S4 says some newer models deprecate `temperature`, `top_p`, and `top_k`, so a general claim would be risky. Prefill is left out: S2 says prefill on the last assistant turn returns a 400 error on Claude 4.6 and newer models.

## Doubts

- C1 and C4 are about the general craft, but S1 and S2 are Claude docs. The page names Anthropic where the advice is Anthropic's.
- The team example (20 stories as a golden set) is the tutorial's own scenario; the cite on that sentence supports only "success criteria need a test".
