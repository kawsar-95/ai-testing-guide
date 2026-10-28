# Fact-check: content/ai-engineering/prompt-engineering.mdx

Checked 2026-10-28 by an agent that did not write the page. All 5 sources were fetched again. The quotes of the research notes were not trusted. `scripts/linux_overlap.py` on the fetched text found no run of 8 or more copied words.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Prompt engineering = writing instructions so the model gives the output you need, again and again | 3 | PASS | "Prompt engineering is the process of writing effective instructions for a model, such that it consistently generates content that meets your requirements." |
| 2 | Treat the model like a capable new employee who does not know your rules; more exact = better result | 2 | PASS | "brilliant but new employee who lacks context on your norms and workflows. The more precisely you explain what you want, the better the result." |
| 3 | Before prompting: success criteria, a way to test, a first draft | 1 | PASS | "A clear definition of the success criteria for your use case" / "Some ways to empirically test against those criteria" / "A first draft prompt you want to improve" |
| 4 | Not every problem is a prompt problem; another model can fix latency or cost more easily | 1 | PASS | "you can sometimes improve latency and cost more easily by choosing a different model." |
| 5 | Developer message parts Identity, Instructions, Examples, Context, usually in this order | 3 | PASS | "a developer message will contain the following sections, usually in this order" / "Identity: Describe the purpose, communication style, and high-level goals" / "What should the model do, and what should the model never do?" / "Provide examples of possible inputs, along with the desired output" |
| 6 | Context (for example private documents) is often best near the end | 3 | PASS | "like private/proprietary data" / "This content is usually best positioned near the end of your prompt" |
| 7 | Say the format and the limits; numbered list when order matters | 2 | PASS | "Be specific about the output format and constraints you want." / "sequential steps using numbered lists or bullet points when the order or completeness of steps matters." |
| 8 | Colleague test | 2 | PASS | "Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be confused, Claude will be too." |
| 9 | Give the reason; the model applies it to new cases | 2 | PASS | "Claude can generalize from the explanation." |
| 10 | Few-shot = a few examples; zero-shot = none | 4 | PASS | "Prompts that contain a few examples are called few-shot prompts, while prompts that provide no examples are called zero-shot prompts." |
| 11 | 3 to 5 relevant, varied examples in `<example>` tags | 2 | PASS | "Include 3–5 examples for best results." / "Relevant: Mirror your actual use case closely." / "Diverse: Cover edge cases" / "Wrap examples in `<example>` tags" |
| 12 | Same format in all examples | 4 | PASS | "Make sure that the structure and formatting of few-shot examples are the same to avoid responses with undesired formats." |
| 13 | XML tags such as `<instructions>`, `<context>`, `<input>` keep the parts apart | 2 | PASS | "(for example, `<instructions>`, `<context>`, `<input>`) reduces misinterpretation." |
| 14 | Markdown headings also work; pick one style | 4 | PASS | "XML-style tags (e.g., <context>, <task>) or Markdown headings are effective. Choose one format and use it consistently within a single prompt." |
| 15 | Say what to do, not what to avoid ("flowing paragraphs" vs "Do not use Markdown") | 2 | PASS | "Tell Claude what to do instead of what not to do" / "Instead of: "Do not use markdown in your response" Try: "Your response should be composed of smoothly flowing prose paragraphs."" |
| 16 | About 20,000+ tokens: documents near the top, question at the end | 2 | PASS | "(20k+ tokens)" / "Place your long documents and inputs near the top of your prompt, above your query" |
| 17 | One sentence in the system prompt sets focus and tone | 2 | PASS | "Setting a role in the system prompt focuses Claude's behavior and tone for your use case. Even a single sentence makes a difference" |
| 18 | Code: `anthropic.Anthropic()`, `claude-opus-5-5`, `max_tokens=1024`, `system=`, `print(message.content)` | 2 | PASS | S2 Python sample uses the same client call, model id, `max_tokens=1024`, `system="..."`, and `print(message.content)`. |
| 19 | Different models and snapshots answer differently; pin a snapshot; build evals | 3 | PASS | "Even different snapshots of models within the same family could produce different results." / "Pinning your production applications to specific model snapshots" / "Building tests and evaluation suites that measure prompt behavior" |
| 20 | Example: the rewritten prompt uses the 4 parts | 3 | PASS | Restates row 5. |
| 21 | Example: role, numbered steps, reason, example, tags | 2 | PASS | Restates rows 7, 9, 11, 13, 17. |
| 22 | Example: the golden set is the eval that the success criteria need | 1 | PASS | Row 3 ("Some ways to empirically test against those criteria"). The 20 stories are the tutorial's scenario. |
| 23 | A vague task gives a basic result; ask for more in words | 2 | PASS | "If you want Claude to do more than the task strictly requires, explicitly request it rather than relying on the model to infer this from vague prompts." The S2 dashboard example contrasts "Create an analytics dashboard" with a prompt that says "Go beyond the basics". |
| 24 | Only "do not" rules; say the format you want | 2 | PASS | Row 15. |
| 25 | The model copies the format of the examples | 4 | PASS | Row 12; S4: "One of the primary objectives of adding few-shot examples in prompts is to show the model the response format." |
| 26 | Prompt injection: input changes model behavior; direct or indirect | 5 | PASS | "A Prompt Injection Vulnerability occurs when user prompts alter the LLM's behavior or output in unintended ways." / "Indirect prompt injections occur when an LLM accepts input from external sources, such as websites or files." |
| 27 | Mark outside text as untrusted; check the output format with code | 5 | PASS | "Separate and clearly denote untrusted content" / "use deterministic code to validate adherence to these formats" |
| 28 | Clear prompts lower the risk but do not remove it | 5 | PASS | "it is unclear if there are fool-proof methods of prevention for prompt injection. However, the following measures can mitigate the impact" |
| 29 | A new snapshot can change the behavior of the same prompt | 3 | PASS | Row 19. |
| 30 | Key words rows | 2, 3, 4, 5 | PASS | Restate rows 1, 10, 13, 17, 19, 26. |

Uncited text that states no source fact: the lede, the QA team scenario (one-line prompt, 20 stories), and the tip callout, which says "These test ideas are the tutorial's own advice." PASS.

FAILs found: 0.

Open FAILs: 0
