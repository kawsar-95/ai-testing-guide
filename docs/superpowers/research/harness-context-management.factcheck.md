# Fact check: harness / context-management (round 1)

Sources fetched fresh with curl on 2026-10-28 (Markdown versions of each URL). Each source URL returns HTTP 200: S1 https://code.claude.com/docs/en/how-claude-code-works, S2 https://platform.claude.com/docs/en/build-with-claude/context-windows, S3 https://platform.claude.com/docs/en/build-with-claude/compaction. The checker did not write the page.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | The model has no memory between two requests. It sees only what the harness sends in the request. | none | FAIL | A fact about the API with no cite. S1, S2, and S3 do not say it. See fix 1. |
| 2 | Everything in the request counts toward the context window: system prompt, every message (with tool results, images, documents), tool definitions | S2 | PASS | "Everything in the request counts toward the context window: the system prompt, every message in `messages` (including tool results, images, and documents), and your tool definitions." |
| 3 | The docs call the context window the "working memory" of the model | S2 | PASS | "represents a “working memory” for the model" |
| 4 | In Claude Code the window holds conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, system instructions | S1 | PASS | "Claude's context window holds your conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions." |
| 5 | Skill descriptions load at session start; full content only when used | S1 | PASS | "Claude sees skill descriptions at session start, but the full content only loads when a skill is used." |
| 6 | The window holds up to 1M tokens, depending on the model | S2 | PASS | "up to 1M tokens, depending on the model" |
| 7 | Accuracy and recall degrade as token count grows: context rot | S2 | PASS | "As token count grows, accuracy and recall degrade, a phenomenon known as *context rot*." |
| 8 | Claude Code manages context automatically near the limit; compacts into a summary | S1 | PASS | "Claude Code manages context automatically as you approach the limit. It compacts the conversation into a summary." |
| 9 | Summary keeps requests and key code snippets; early detailed instructions can be lost | S1 | PASS | "The summary keeps your requests and key code snippets, but detailed instructions from early in the conversation may be lost." |
| 10 | If compaction does not work after a few attempts, Claude Code stops and shows an error. It does not loop. | S1 | FAIL | The page drops the condition and says "Claude Code stops", which can mean the session stops. S1: "If a single file or tool output is so large that context refills immediately after each summary, Claude Code stops auto-compacting after a few attempts and shows an error instead of looping." See fix 2. |
| 11 | Text diagram (instructions stay, old chat becomes a summary) | S1 | PASS | Illustration of rows 8 and 9. No new fact. |
| 12 | Put rules that must stay in CLAUDE.md | S1 | PASS | "Put persistent rules in CLAUDE.md rather than relying on conversation history." |
| 13 | Add a "Compact Instructions" section to CLAUDE.md | S1 | PASS | "add a "Compact Instructions" section to CLAUDE.md" |
| 14 | `/compact focus on the API changes` | S1 | PASS | "run `/compact` with a focus (like `/compact focus on the API changes`)" |
| 15 | `/context` shows what uses the space | S1 | PASS | "run `/context` to see what's using space" |
| 16 | API docs name server-side compaction the primary strategy for long conversations and agentic workflows | S2 | PASS | "For long-running conversations and agentic workflows, server-side compaction is the primary strategy for context management." |
| 17 | Compaction replaces older turns with a summary Claude writes on the server; no summarization code of your own | S3 | PASS | "Compaction replaces the older turns of a conversation with a summary that Claude writes on the server, so you need no summarization code of your own." |
| 18 | Threshold compaction: the API compacts when input tokens reach the trigger you set | S3 | PASS | "The API, when input tokens reach the trigger you set" |
| 19 | In beta for Claude 4.6 and later models | S2 | PASS | "It is available in beta for Claude 4.6 and later models and Claude Mythos Preview." |
| 20 | Tool result clearing clears old tool results in agentic workflows | S2 | PASS | "Tool result clearing: Clear old tool results in agentic workflows" |
| 21 | "What a tester can check" callout | - | N/A | Tutorial advice. |
| 22 | Key words: Context window, Token, Context rot | S2 | PASS | Restate rows 2, 3, 7. |
| 23 | Key words: Compaction, `/compact`, `/context`, CLAUDE.md | S1, S3 | PASS | Restate rows 8, 12 to 17. |
| 24 | Lede | - | PASS | Summary of rows 4, 8, 12. No new fact. |

## Proposed fixes

1. Row 1: add a source and a cite.
   - New source 4: `{ title: 'Using the Messages API', publisher: 'Claude API documentation', url: 'https://platform.claude.com/docs/en/build-with-claude/working-with-messages', accessed: '2026-10-28' }`. The URL returns HTTP 200.
   - Quote: "The Messages API is stateless, which means that you always send the full conversational history to the API."
   - Text: "The model has no memory between two requests. The Messages API is stateless, so the harness sends the full conversation in each request <Cite n={4} />."
   - Add `<Cite n={4} />` to the same sentence in the Layman and Bangla panels too.
2. Row 10: replace with "If one file or tool output is so large that the context fills again right after each summary, Claude Code stops auto-compacting after a few attempts and shows an error. It does not loop <Cite n={1} />."

FAIL summary: 1 (no cite), 10 (condition dropped, "stops" is too broad).

## Round 2 (2026-10-28)

Re-checked the changed lines of content/harness/context-management.mdx against the sources fetched in round 1, and against S4 (https://platform.claude.com/docs/en/build-with-claude/working-with-messages, HTTP 200).

- Row 1: the page now says "The Messages API is stateless: you always send the full conversation history <Cite n={4} />." S4 is in `page.sources`. S4: "The Messages API is stateless, which means that you always send the full conversational history to the API." PASS.
- Row 10: the page now says "If one file or tool output is so large that the context fills again right after each summary, Claude Code stops auto-compacting after a few attempts and shows an error. It does not loop <Cite n={1} />." S1: "If a single file or tool output is so large that context refills immediately after each summary, Claude Code stops auto-compacting after a few attempts and shows an error instead of looping." PASS.
- No other Technical claim changed.

Open FAILs: 0
