# AI Skills page: Prompting (research notes)

Writer notes for `content/ai-skills/prompting.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Prompt engineering (OpenAI API docs) | https://developers.openai.com/api/docs/guides/prompt-engineering | 2026-10-28 |
| S2 | Prompting best practices (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | 2026-10-28 |
| S3 | Prompt design strategies (Gemini API docs) | https://ai.google.dev/gemini-api/docs/prompting-strategies | 2026-10-28 |
| S4 | Reduce hallucinations (Claude Platform docs) | https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations | 2026-10-28 |
| S5 | Prompt engineering overview (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview | 2026-10-28 |

Page cite numbers: n=k is Sk. `platform.openai.com/docs/guides/prompt-engineering` redirects (301) to S1.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Prompt engineering is writing effective instructions for a model. | S1 | "Prompt engineering is the process of writing effective instructions for a model" |
| C2 | Getting the output you want is part art, part science. | S1 | "prompting to get your desired output is a mix of art and science" |
| C3 | Think of the model as a brilliant new employee with no context on your norms. | S2 | "Think of Claude as a brilliant but new employee who lacks context on your norms and workflows." |
| C4 | Key test: show the prompt to a colleague with little context; if they are confused, the model will be too. | S2 | "Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be confused, Claude will be too." |
| C5 | A role in the system prompt focuses behavior and tone; one sentence helps. | S2 | "Setting a role in the system prompt focuses Claude's behavior and tone for your use case. Even a single sentence makes a difference" |
| C6 | OpenAI: developer messages hold the system's rules and business logic. | S1 | "developer messages provide the system's rules and business logic" |
| C7 | Explaining why an instruction matters helps the model target the answer. | S2 | "Providing context or motivation behind your instructions, such as explaining to Claude why such behavior is important, can give Claude more information about your goals" |
| C8 | Context helps the model understand constraints and details. | S3 | "This contextual information helps the model understand the constraints and details of what you're asking for it to do." |
| C9 | Clear, specific instructions are an effective way to steer the model. | S3 | "An effective and efficient way to customize model behavior is to provide it with clear and specific instructions." |
| C10 | Use numbered steps when order or completeness matters. | S2 | "Provide instructions as sequential steps using numbered lists or bullet points when the order or completeness of steps matters." |
| C11 | Be specific about output format and constraints. | S2 | "Be specific about the output format and constraints you want." |
| C12 | Zero-shot = no examples; few-shot = a few examples. | S3 | "prompts that provide no examples are called zero-shot prompts" / "Prompts that contain a few examples are called few-shot prompts." |
| C13 | Gemini docs recommend always including few-shot examples. | S3 | "We recommend to always include few-shot examples in your prompts." |
| C14 | OpenAI: few-shot = a handful of input/output examples in the prompt. | S1 | "including a handful of input/output examples in the prompt" |
| C15 | Claude: 3–5 examples; relevant, diverse (cover edge cases), wrapped in `<example>` tags. | S2 | "Include 3–5 examples for best results." / "Diverse: Cover edge cases and vary enough that Claude doesn't pick up unintended patterns." / "Wrap examples in `<example>` tags" |
| C16 | XML tags separate instructions, context, examples, and inputs, and reduce misreading. | S2 | "Wrapping each type of content in its own tag (for example, `<instructions>`, `<context>`, `<input>`) reduces misinterpretation." |
| C17 | You can give instructions that set the response format. | S3 | "You can give instructions that specify the format of the response." |
| C18 | Tell the model what to do instead of what not to do. | S2 | "Tell Claude what to do instead of what not to do" |
| C19 | Prompt design can need a few iterations. | S3 | "Prompt design can sometimes require a few iterations before you consistently get the response you're looking for." |
| C20 | Allow the model to say "I don't know"; this can greatly reduce false information. | S4 | "Explicitly give Claude permission to admit uncertainty. This technique can drastically reduce false information." |
| C21 | Ask for a supporting quote for each claim; retract claims without one. | S4 | "have Claude verify each claim by finding a supporting quote after it generates a response. If it can't find a quote, it must retract the claim." |
| C22 | The techniques reduce but do not eliminate hallucinations; validate critical information. | S4 | "although these techniques significantly reduce hallucinations, they don't eliminate them entirely. Always validate critical information" |
| C23 | Before prompt engineering: clear success criteria and a way to test against them. | S5 | "A clear definition of the success criteria for your use case" / "Some ways to empirically test against those criteria" |
| C24 | OpenAI suggests pinning production apps to specific model snapshots. | S1 | "Pinning your production applications to specific model snapshots" |

## Tutorial's own text (no cite)

- The text diagram of the parts of a brief (the order is the tutorial's choice).
- The tester uses (test cases from a user story, bug report rewrite, test plan review, test data) and the "Tutorial advice" tip.
- The "How to start" steps, except the facts that carry a cite.

## Removed

- Nothing removed. The tools table gives no prices and no model names.
