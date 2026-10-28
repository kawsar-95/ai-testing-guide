# Voices fact check: AI Skills, Prompting

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels).

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: OpenAI definition, art and science, new-employee picture, colleague test. Cites 1, 2 only. Both leave out the `/foundations/prompting/` link and the list "(context, research, agents, evals)"; navigation, no fact lost |
| How it works | PASS | PASS | Same 6 parts and facts, cites 1 to 4. The code block becomes a list of the 6 part names. Layman leaves out "business logic" (row 9 of the main report) and "or completeness"; the main fact (rules; order matters) stays, nothing is changed |
| How a tester uses it | PASS | PASS | Same 4 uses and edge values, cites 2, 3, 4. The tip is a plain paragraph, still marked as the tutorial's own advice, with no cite. The Test Design link is left out (navigation) |
| Tools to try | PASS | PASS | Same 3 tools and facts as a list, cites 1, 2, 3 |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes, cites 2, 4, 5, 1. The Evals link is left out (navigation) |
| How to start | PASS | PASS | Same 5 steps, cites 2, 3. Step 5 names the context engineering page without a link |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks.
- Each `<Cite n>` in Layman and Bangla uses an `n` that Technical of the same block cites (script check: 0 misses).
- Bangla keeps OpenAI, Claude, Gemini, ChatGPT, API, prompt, XML, JSON, Unicode, zero-shot, few-shot, edge case, `<example>`, `<requirement>`, and the English prompt examples in English.
- Bangla uses আপনি / আপনার; no তুমি, তোমার, তুই, or তোর (grep: 0 hits).

Open FAILs: 0
