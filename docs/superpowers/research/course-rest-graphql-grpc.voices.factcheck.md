# Voice fact-check: REST, GraphQL, and gRPC (round 2, 2026-10-22)

Page: `content/course/rest-graphql-grpc.mdx`. I did not write the Layman or Bangla panels. This report replaces any older one.

Method: for each `<Voices>` block I compared `<Layman>` and `<Bangla>` with `<Technical>` of the same `##` section. FAIL means a fact, number, name, example or cite that Technical does not give; a dropped hedge that changes the meaning; a wrong or misleading statement; a `<Cite n>` that Technical of the block does not cite; wrong, ungrammatical or unfinished Bangla; a break of the Bangla style rule (তুমি, common concept words left in English, an acronym or product or command name in Bangla letters); or a Layman sentence over 25 words. An omission is not a FAIL. I did not re-check the sources: the Technical claims are in `course-rest-graphql-grpc.factcheck.md`. The `## Key words` section has no voices.

Mechanical checks (script over all sections, and `git show HEAD:` for the committed text):

- Each of the 7 `<Technical>` bodies matches the text of the same section in `HEAD`. `## Key words` is unchanged. No removed non-blank Technical line.
- The set of `<Cite n>` and the number of cites are equal in Technical, Layman, and Bangla of every block.
- No `TODO`. No Markdown heading in Layman or Bangla. No `তুমি` in the file. No Layman sentence over 25 words.
- Section headings are bold labels in Layman and Bangla, never `#` headings.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 2 | In plain words | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; Fielding, Protocol Buffers, JSON, HTTP kept in English |
| 3 | When you need it | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; "the tutorial's own" kept |
| 4 | When you need it | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 5 | How it works | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 6 | How it works | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; `protoc`, `DEADLINE_EXCEEDED`, `/graphql`, `data`, `errors` kept as code |
| 7 | Trade-offs | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; the table is turned into bold labels and bullets, with no heading and no lost cell; "Tutorial's view" cells have no cite, as in Technical |
| 8 | Trade-offs | Bangla | FAIL | GraphQL caching cell: "API-র আইডি দেখানো উচিত" can be read as "the ID of the API should be shown", but Technical says the API should expose ids. Fixed to "API-কে আইডি প্রকাশ করা উচিত". The other cells PASS ("টিউটোরিয়ালের মত" = "Tutorial's view", explained in the first line) |
| 9 | A real-life example | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 10 | A real-life example | Bangla | FAIL | "টাইপ করা মেসেজ" means "messages that somebody typed", but Technical says "typed messages" (messages with defined types). Fixed to "টাইপযুক্ত (typed) মেসেজ" |
| 11 | Common mistakes | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 12 | Common mistakes | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 13 | What a tester can check | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; callout kept, no cites |
| 14 | What a tester can check | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; callout kept, no cites |

## Re-check

I fixed each FAIL by editing only the Layman or Bangla panel text, then re-read the changed lines. Each fixed line now matches its Technical sentence, keeps its cite, and follows the style rule. The failed rows are re-checked here:

- Trade-offs, Bangla: PASS after the fix.
- A real-life example, Bangla: PASS after the fix.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
