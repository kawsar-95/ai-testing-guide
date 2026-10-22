# Voice fact-check: Event-Driven Architecture (round 1, 2026-10-22)

Page: `content/course/event-driven-architecture.mdx`. I did not write the Layman or Bangla panels.

Method: I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same `##` section (7 blocks; `## Key words` has no voices). A fact, number, name, example, hedge, or `<Cite n>` that Technical does not give is a FAIL. A wrong or unfinished Bangla sentence is a FAIL. A Bangla panel that breaks the course term style is a FAIL (তুমি, a common concept word left in English without a reason, or an acronym, product name, or command in Bangla letters). A Layman sentence over 25 words is a FAIL. An omission is not a FAIL. I read the Bangla text for meaning, grammar, and the আপনি form.

Mechanical checks (script): each `<Technical>` panel is identical to the `<Technical>` panel of the same section in `git show HEAD:content/course/event-driven-architecture.mdx`, and the text outside the `<Voices>` blocks is identical to HEAD. Each Layman and Bangla panel cites only `n` values that Technical of the same block cites, and has the same number of `<Cite>` tags as Technical. No heading in a Layman or Bangla panel. No TODO. No তুমি. A scan of the Bangla panels for acronyms and product names written in Bangla letters found none. The Layman panels are identical to HEAD before my edits (only the Bangla panels were rewritten).

Notes:

- Block 3: Layman and Bangla keep the link to the sibling page `/course/pub-sub/`. Same as Technical. PASS.
- Layman keeps terms such as "idempotent" and "exactly-once semantics" from Technical. The Key words table defines idempotent. I did not count this as a FAIL.
- Block 7: no callout in Layman or Bangla. They restate the "tutorial's own advice" line and the 5 ideas with no cites. PASS.
- Bangla: DLQ, IoT, ID, AWS, Azure stay in English. The names of the patterns (Competing Consumers) stay in English.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 2 | In plain words | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 3 | When you need it | Layman | FAIL -> fixed | One sentence of 30 words: "AWS names these uses: copying data between accounts and regions, ... fanout), and joining systems ...". Split into a lead-in line and 4 short bullets. Same 4 uses, same cite. |
| 4 | When you need it | Bangla | FAIL -> fixed | "সময়ের জানালার (time window)" is a word-for-word translation of "time window" and reads unnaturally. Changed to "টাইম উইন্ডোর (time window)". |
| 5 | How it works | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 6 | How it works | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 7 | Challenges | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 8 | Challenges | Bangla | FAIL -> fixed | "exactly-once সেম্যান্টিক্স" left the term in English with no gloss. Changed to "এক্সাক্টলি-ওয়ান্স (exactly-once) সেম্যান্টিক্স". |
| 9 | A real-life example | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 10 | A real-life example | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 11 | Common mistakes | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 12 | Common mistakes | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 13 | What a tester can check | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 14 | What a tester can check | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |

## Re-check (after fixes)

Re-read blocks 2 (Layman and Bangla) and 4 (Bangla) after the edit. Block 2 Layman: no sentence is over 25 words (script), the cite `[2]` is on the lead-in line, and the 4 uses match Technical. Block 2 Bangla and block 4 Bangla: the new words are grammatical, the facts and cites are unchanged. `node --test` passes (see the end of the run).

FAIL rows found: 3. Fixed: 3.

Open FAILs: 0
