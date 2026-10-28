# Fact check: AI Skills, Prompting

Sources fetched fresh on 2026-10-28 (curl and WebFetch). S1 = OpenAI API docs "Prompt engineering", S2 = Claude Platform docs "Prompting best practices", S3 = Gemini API docs "Prompt design strategies", S4 = Claude Platform docs "Reduce hallucinations", S5 = Claude Platform docs "Prompt engineering overview". All 5 are vendor docs. No blog, news, or forum. No source blocked the fetch.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: a prompt is the brief; a clear brief gives usable output | none | PASS | Framing of the page, no source fact |
| 2 | OpenAI defines prompt engineering as writing effective instructions for a model | S1 | PASS | "Prompt engineering is the process of writing effective instructions for a model" |
| 3 | Getting the output you want is part art, part science | S1 | PASS | "prompting to get your desired output is a mix of art and science" |
| 4 | Model as a brilliant new employee who does not know your norms or workflows | S2 | PASS | "Think of Claude as a brilliant but new employee who lacks context on your norms and workflows" |
| 5 | Colleague test: if the colleague is confused, the model will be too | S2 | PASS | "Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be confused, Claude will be too." |
| 6 | Link `/foundations/prompting/` | none | PASS | Route is in `lib/nav.ts` (Foundations, `prompting`) |
| 7 | Six-part brief (role ... limits), order is the tutorial's own | none | PASS | Marked as the tutorial's own choice |
| 8 | A role in the system prompt focuses behavior and tone; one sentence helps | S2 | PASS | "Setting a role in the system prompt focuses Claude's behavior and tone for your use case. Even a single sentence makes a difference" |
| 9 | OpenAI developer messages carry the rules and business logic | S1 | PASS | "developer messages provide the system's rules and business logic" |
| 10 | Say why an instruction matters; the model gets more about your goal | S2 | PASS | "explaining to Claude why such behavior is important, can give Claude more information about your goals and help it deliver more targeted responses" |
| 11 | Gemini: background tells the model the limits and specifics of the ask | S3 | PASS | "This contextual information helps the model understand the constraints and details of what you're asking for it to do." |
| 12 | Clear and specific instructions are an effective way to steer a model | S3 | PASS | "An effective and efficient way to customize model behavior is to provide it with clear and specific instructions." |
| 13 | Numbered steps when the order or completeness matters | S2 | PASS | "Provide instructions as sequential steps using numbered lists or bullet points when the order or completeness of steps matters." |
| 14 | Zero-shot = no examples, few-shot = a few examples | S3 | PASS | "Prompts that contain a few examples are called few-shot prompts, while prompts that provide no examples are called zero-shot prompts." |
| 15 | 3 to 5 relevant, diverse examples covering edge cases, in `<example>` tags | S2 | PASS | "Include 3–5 examples for best results" / "Diverse: Cover edge cases" / "Wrap examples in `<example>` tags" |
| 16 | XML tags such as `<instructions>`, `<context>`, `<input>` keep content apart; fewer misreadings | S2 | PASS | "Wrapping each type of content in its own tag (for example, `<instructions>`, `<context>`, `<input>`) reduces misinterpretation." |
| 17 | You can tell the model the format of its response | S3 | PASS | "You can give instructions that specify the format of the response." |
| 18 | Permission to say "I don't know" can strongly cut false information | S4 | PASS | "Explicitly give Claude permission to admit uncertainty. This technique can drastically reduce false information." |
| 19 | A prompt can need a few rounds before answers are consistent | S3 | PASS | "Prompt design can sometimes require a few iterations before you consistently get the response you're looking for." |
| 20 | Tester: 3 good cases from your suite as examples so the model copies your style | S2 | PASS | "Examples are one of the most reliable ways to steer Claude's output format, tone, and structure." The use case is the tutorial's own |
| 21 | Link `/foundations/test-design/` | none | PASS | Route is in `lib/nav.ts` |
| 22 | Bug reports: numbered steps because order matters | S2 | PASS | Same quote as row 13 |
| 23 | Allow "not enough information" so the model does not invent gaps | S4 | PASS | Same quote as row 18; S4 example: "say 'I don't have enough information to confidently assess this.'" |
| 24 | Test data: ask for JSON with a fixed set of fields | S3 | PASS | "return a JSON object that has the fields cheeseburger, hamburger, fries, or drink" / "you can specify the format of simple JSON response objects using prompts" |
| 25 | "Tutorial advice" tip (keep prompts in the repo) | none | PASS | Marked as the tutorial's own advice; no `<Cite>` |
| 26 | Tools: each tool has a chat app and an API | none | PASS | Common knowledge of the three products; no source-specific fact |
| 27 | Tools: OpenAI developer messages give rules and business logic | S1 | PASS | Same quote as row 9 |
| 28 | Tools: Claude docs suggest XML tags to keep instructions, context, examples, inputs apart | S2 | PASS | "especially when your prompt mixes instructions, context, examples, and variable inputs" |
| 29 | Tools: Gemini docs recommend few-shot examples in every prompt | S3 | PASS | "We recommend to always include few-shot examples in your prompts." |
| 30 | Mistakes: say the output format and constraints | S2 | PASS | "Be specific about the output format and constraints you want." |
| 31 | Mistakes: say what to do, not what not to do | S2 | PASS | "Tell Claude what to do instead of what not to do" |
| 32 | Mistakes: same-looking examples make the model copy unintended patterns; use diverse examples | S2 | PASS | "Cover edge cases and vary enough that Claude doesn't pick up unintended patterns." |
| 33 | Mistakes: ask for a supporting quote per claim, remove a claim with no quote | S4 | PASS | "have Claude verify each claim by finding a supporting quote after it generates a response. If it can't find a quote, it must retract the claim." |
| 34 | These steps reduce errors but do not remove them; check critical facts | S4 | PASS | "although these techniques significantly reduce hallucinations, they don't eliminate them entirely. Always validate critical information" |
| 35 | Before tuning, write success criteria and a way to test them | S5 | PASS | "A clear definition of the success criteria for your use case" / "Some ways to empirically test against those criteria" |
| 36 | Link `/ai-skills/ai-evals/` | none | PASS | Slug `ai-evals` is in `lib/ai-skills/topics.ts` |
| 37 | OpenAI suggests pinning an app to a specific model snapshot | S1 | PASS | "Pinning your production applications to specific model snapshots ... to ensure consistent behavior" |
| 38 | How to start steps 3 and 4 (colleague test, a few rounds) | S2, S3 | PASS | Same quotes as rows 5 and 19 |
| 39 | Link `/ai-skills/context-engineering/` | none | PASS | Slug is in `lib/ai-skills/topics.ts` |
| 40 | Key words: prompt engineering, zero-shot, few-shot, system prompt, XML tags | S1, S2, S3 | PASS | Same quotes as rows 2, 8, 14, 16 |
| 41 | Key words: hallucination = factually wrong or not matching the given context | S4 | PASS | "generate text that is factually incorrect or inconsistent with the given context" |

Other checks:
- Sources: all official vendor docs. No prices on the page (grep for `$`, price, USD: 0 hits).
- Copy check: a script compared every 8-word run of the Technical and Layman text with the fetched text of S1 to S5. Only URL strings match. No copied run of 8 or more words.
- Each cite points to the source that has the fact.
- The "Tutorial advice" tip has no cite.

Open FAILs: 0
