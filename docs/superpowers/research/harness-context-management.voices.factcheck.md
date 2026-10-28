# Voices fact check: harness / context-management (round 1)

Each Layman and Bangla panel was compared with the Technical panel of the same block. The checker did not write the voices.

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What the context window holds | Layman | PASS | Same facts, fewer details (skill loading and auto memory are left out). Cites 1 and 2 are in Technical. "gets less accurate when very full" restates context rot. |
| What the context window holds | Bangla | PASS | Same facts, cites 1 and 2. system prompt, tool result, tool definition, CLAUDE.md, context rot, 1M stay in English. |
| When the window fills up | Layman | PASS | Same facts, cite 1. The word "compaction" restates "compacts". Commands are the same as Technical. |
| When the window fills up | Bangla | PASS | Same facts, cite 1. `/compact focus on the API changes`, `/context`, CLAUDE.md stay in English. |
| Compaction in the API | Layman | PASS | Same facts, cites 2 and 3. |
| Compaction in the API | Bangla | PASS | Same facts, cites 2 and 3. trigger, beta, tool result, Claude 4.6 stay in English. |
| What a tester can check | Layman | PASS | Tutorial advice. Same 4 tests. No cites. |
| What a tester can check | Bangla | PASS | Tutorial advice. Same 4 tests. CLAUDE.md in English. |

Note: the first sentence of "What the context window holds" ("The model does not remember earlier requests") copies the Technical claim that has no cite (Technical FAIL 1 in `harness-context-management.factcheck.md`). When the Technical fix adds Cite 4, add the same cite to the Layman and Bangla sentences. This is not a separate voices FAIL.

## Round 2 (2026-10-28)

- What the context window holds, Layman: "It only sees what the harness sends to it each time <Cite n={4} />." Technical now cites 4 for the same fact. PASS.
- What the context window holds, Bangla: the same sentence now has <Cite n={4} />, which Technical cites. PASS.
- The note on the uncited claim is closed. The other panels did not change.

Open FAILs: 0
