# Voice fact-check: Event Sourcing (round 1, 2026-10-22)

Page: `content/course/event-sourcing.mdx`. I did not write the voices of this page.

Method: I read the 6 `<Voices>` blocks. I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block. A FAIL is a fact, number, name, example, or cite that Technical does not give; a dropped hedge that changes the meaning; a wrong or misleading statement; a `<Cite n>` that Technical does not cite; a term that is translated in a confusing way; a wrong Bangla meaning; or a Layman sentence that is long or not plain. An omission is not a FAIL. I did not re-check the sources: the Technical claims are in the report of the page text.

Checks run:

- No `TODO` placeholder is left (`grep -c TODO` gives 0).
- No Markdown heading in any Layman or Bangla panel (script check).
- The cite set of each Layman and Bangla panel equals the cite set of its Technical panel (script check). Only cite 1 exists.
- No number in Layman or Bangla is missing from Technical (script check).
- `git diff -U0 content/course/event-sourcing.mdx | grep '^-' | grep -v '^---'` shows no removed line. Technical text is unchanged.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | CRUD, append-only store, example events, eventstream, and the "complex pattern" warning match Technical. |
| 2 | In plain words | Bangla | PASS | Same. |
| 3 | How it works | Layman | PASS | Six steps (rehydration, append-only, pass on, views, snapshots, optimistic concurrency) match Technical. Two sentences have 27 words at most. |
| 4 | How it works | Bangla | FAIL (fixed) | "নতুন event তোলে" for "raises new events": "তোলে" (lifts) is an unclear word for "raise". |
| 5 | How it works | Bangla | FAIL (fixed) | "ReservationCanceled আগের SeatsReserved-কে পূরণ করে": "পূরণ করে" means "fulfils". "Compensates for" means the opposite effect. Wrong meaning. |
| 6 | When you need it | Layman | PASS | Same 4 reasons, same 5 "not to use" cases, same CQRS link. |
| 7 | When you need it | Bangla | PASS | Same. "স্বল্পায়ু system" is a fair gloss of "short life". |
| 8 | Trade-offs | Layman | PASS | The table became a list of the same four ways. "idempotent ... If not, duplicates can change the result" keeps the condition. |
| 9 | Trade-offs | Bangla | FAIL (fixed) | "যা জায়গায় update-এ লাগে" is a word-for-word copy of "in-place updates" and is confusing. |
| 10 | A real-life example | Layman | PASS | Same four events and the same "step 3" question. "could not answer it" restates "could not". |
| 11 | A real-life example | Bangla | PASS | Same. |
| 12 | Common mistakes | Layman | PASS | Same three items. One list item has 28 words with two sentences. |
| 13 | Common mistakes | Bangla | PASS | Same. "projection সরে যেতে পারে" is loose for "drift" but not wrong. |
| 14 | What a tester can check | Layman | PASS | Same five ideas. No cites. |
| 15 | What a tester can check | Bangla | PASS | Same five ideas. |

Notes (not FAILs):

- Layman keeps jargon from Technical (idempotent, optimistic concurrency control, upcasting). It adds no new fact. The Key words table defines the terms.

## Re-check

| # | Fix | Re-check |
|---|---|---|
| 4 | Bangla: "নতুন event raise করে" | PASS |
| 5 | Bangla: "SeatsReserved-কে compensate করে" | PASS |
| 9 | Bangla: "যা in-place update-এ লাগে" | PASS |

Found: 3. Fixed: 3.

Open FAILs: 0
