# Voice fact-check: Event Sourcing (round 1, 2026-10-22)

Page: `content/course/event-sourcing.mdx`. I did not write the Layman or Bangla panels.

Method: I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same `##` section (7 blocks; `## Key words` has no voices). A fact, number, name, example, hedge, or `<Cite n>` that Technical does not give is a FAIL. A wrong or unfinished Bangla sentence is a FAIL. A Bangla panel that breaks the course term style is a FAIL (তুমি, a common concept word left in English without a reason, or an acronym, product name, or command in Bangla letters). A Layman sentence over 25 words is a FAIL. An omission is not a FAIL. I read the Bangla text for meaning, grammar, and the আপনি form.

Mechanical checks (script): each `<Technical>` panel is identical to the `<Technical>` panel of the same section in `git show HEAD:content/course/event-sourcing.mdx`, and the text outside the `<Voices>` blocks is identical to HEAD. Each Layman and Bangla panel cites only `n` values that Technical of the same block cites, and has the same number of `<Cite>` tags as Technical. No heading in a Layman or Bangla panel. No TODO. No তুমি. A scan of the Bangla panels for acronyms and product names written in Bangla letters found none. The Layman panels are identical to HEAD before my edits (only the Bangla panels were rewritten).

Notes:

- Block 6: the Bangla "প্রজেকশন সরে যেতে পারে" is a short form of "projections can drift". The meaning is the same. PASS.
- Block 4: the Layman panel turns the 4-way table into a list. Same 4 ways, same wording. PASS after the fix.
- Block 7: no callout in Layman or Bangla. They restate the "tutorial's own advice" line and the 5 ideas with no cites. PASS.
- Bangla: the event names (AddedItemToOrder, OrderCanceled, SeatsReserved, ReservationCanceled, TestRunStarted, ...) and CRUD, CQRS, SQL, Apache Kafka stay in English.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 2 | In plain words | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 3 | How it works | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 4 | How it works | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 5 | When you need it | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 6 | When you need it | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 7 | Trade-offs | Layman | FAIL -> fixed | Upcasting bullet said "the reader converts old events". Technical says only "Old events are converted to the current schema when read". The reader is a detail that Technical does not give. Changed to the passive form. |
| 8 | Trade-offs | Bangla | FAIL -> fixed | Three issues. (1) Upcasting bullet said "রিডার ... রূপান্তর করে": the same new detail as in Layman. Changed to "রূপান্তর করা হয়". (2) "ডেলিভারি সাধারণত at least once" left the term in English with no gloss. Changed to "অ্যাট লিস্ট ওয়ান্স (at least once)". (3) "given-when-then টেস্ট স্টাইল" left in English. Changed to "গিভেন-হোয়েন-দেন (given-when-then)". |
| 9 | A real-life example | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 10 | A real-life example | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 11 | Common mistakes | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 12 | Common mistakes | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 13 | What a tester can check | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 14 | What a tester can check | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |

## Re-check (after fixes)

Re-read block 4 (Layman and Bangla) after the edits. Layman: the upcasting bullet now matches Technical ("are converted ... when they are read"). Bangla: the 3 new phrases are grammatical, glossed, and keep the facts and the cite. `node --test` passes (see the end of the run).

FAIL rows found: 2. Fixed: 2.

Open FAILs: 0
