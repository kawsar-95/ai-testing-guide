# Voice fact-check: CQRS (round 2, 2026-10-22)

Page: `content/course/cqrs.mdx`. I did not write the voices.

Method: I read the 9 `<Voices>` blocks (the `## Key words` section has none). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. A fact, number, name, example, or `<Cite n>` that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. An omission that loses no fact is not a FAIL. For Layman I checked sentence length (25 words at most; the longest is 23 words). For Bangla I checked the meaning, the grammar, আপনি, and the term style.

Other checks:

- `<Technical>` is unchanged. Each of the 9 Technical bodies equals the Technical body of the same block in `git show HEAD:content/course/cqrs.mdx`. The text outside the `<Voices>` blocks is also equal.
- No TODO placeholder. No heading in a Layman or Bangla panel. No তুমি.
- Cites: the page has one source. Every `<Cite n={1} />` in Layman and Bangla has the same place in Technical.
- Section 3: Technical has a table of the two levels of separation. Layman and Bangla give the same two rows as a list. The facts are equal. PASS.
- Section 5 has a link to `/course/event-sourcing/`. Both voices keep the link and the sentence. PASS.
- Sections 8 and 9: Technical wraps the "tutorial's own" advice in a `<Callout>`. The voices keep the sentence and the list, with no cite. PASS.

| # | Section | Voice | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | CQRS, command, query, one model, CRUD, lock contention | PASS | "one model can cause" restates "it can cause". |
| 2 | In plain words | Bangla | Same | PASS | "টিউন", "লক কনটেনশন (lock contention)". |
| 3 | When you need it | Layman | 4 cases, the "might not suit" sentence | PASS | Same. |
| 4 | When you need it | Bangla | Same | PASS | "হয়তো মানায় না" keeps "might not suit". |
| 5 | How it works | Layman | Commands, queries, DTO, write and read model, two levels, sync by events, outbox, idempotent | PASS | Same examples and hedges ("usually", "can", "suggests"). |
| 6 | How it works | Bangla | Same | PASS | "(রিপ্লিকা) ও" has a space before "ও", a small spelling point and not a FAIL. |
| 7 | Eventual consistency | Layman | Stale data, catch up after a delay, hard to keep current, plan for the user | PASS | Same. |
| 8 | Eventual consistency | Bangla | Same | PASS | "হালনাগাদ" = up to date. |
| 9 | Combining CQRS with event sourcing | Layman | Event store as write side, views from events, gains, costs, snapshots | PASS | Same. |
| 10 | Combining CQRS with event sourcing | Bangla | Same | PASS | Same. |
| 11 | Trade-offs | Layman | Benefits list, 3 costs | PASS | Same. |
| 12 | Trade-offs | Bangla | Same | PASS | "দাম হলো এরকম" = "the price is as follows". |
| 13 | A real-life example | Layman | Test-management tool, command "Record test result", summary table, short delay | PASS | Same. |
| 14 | A real-life example | Bangla | Same | PASS | Same. |
| 15 | Common mistakes | Layman | 3 bullets | PASS | Same. |
| 16 | Common mistakes | Bangla | Same | PASS | Same. |
| 17 | What a tester can check | Layman | 5 test ideas, no cite | PASS | Sentences split. |
| 18 | What a tester can check | Bangla | Same | FAIL | In the third idea, "দেখুন রিড স্টোর ধরে ফেলে কি না" is an unclear idiom for "check that the read store catches up". "ধরে ফেলে" can read as "catches it". |

Re-check (after the fix):

| # | Fix | Verdict |
|---|---|---|
| 18 | Now "দেখুন রিড স্টোর আবার রাইট স্টোরের সমান হয়ে যায় কি না" ("check that the read store becomes equal to the write store again"). This matches the phrase of section 7 ("সমান হয়ে যায়"). | PASS |

FAILs found: 1. Fixed: 1.

Open FAILs: 0
