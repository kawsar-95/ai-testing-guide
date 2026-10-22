# Voice fact-check: Event-Driven Architecture (round 1, 2026-10-22)

Page: `content/course/event-driven-architecture.mdx`. I did not write the voices of this page.

Method: I read the 7 `<Voices>` blocks. I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block. A FAIL is a fact, number, name, example, or cite that Technical does not give; a dropped hedge that changes the meaning; a wrong or misleading statement; a `<Cite n>` that Technical does not cite; a term that is translated in a confusing way; a wrong Bangla meaning; or a Layman sentence that is long or not plain. An omission is not a FAIL. I did not re-check the sources: the Technical claims are in the report of the page text.

Checks run:

- No `TODO` placeholder is left (`grep -c TODO` gives 0).
- No Markdown heading in any Layman or Bangla panel (script check).
- The cite set of each Layman and Bangla panel equals the cite set of its Technical panel (script check). No extra `n`.
- No number in Layman or Bangla is missing from Technical (script check).
- `git diff -U0 content/course/event-driven-architecture.mdx | grep '^-' | grep -v '^---'` shows no removed line. Technical text is unchanged.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same event definition, three parts, and AWS router claim. The table is a list. Cites 1, 2 match. |
| 2 | In plain words | Bangla | PASS | Same facts. "shipped" as "পাঠানো হয়েছে" is correct. |
| 3 | When you need it | Layman | PASS | Same 5 Azure cases, same AWS uses. The "may not fit" sentence became a list of the same 3 cases. One list sentence has 30 words, but it is a flat list of 4 uses. |
| 4 | When you need it | Bangla | PASS | Same. |
| 5 | How it works | Layman | PASS | Two models, Competing Consumers, router types, and both topologies match Technical. The `/course/pub-sub/` link is kept. |
| 6 | How it works | Bangla | PASS | Same. "কঠোরভাবে ক্রমানুযায়ী" is correct for "strictly ordered". |
| 7 | Challenges | Layman | PASS | Same 6 challenges. The AWS and Azure attributions match Technical. |
| 8 | Challenges | Bangla | FAIL (fixed) | "AWS বলে, ... event source-কে delivery guarantee করতে হবে" says "must". AWS (Technical) says the source "should guarantee delivery". The strength changed. |
| 9 | A real-life example | Layman | PASS | Same exam example and the same "few seconds" cost. |
| 10 | A real-life example | Bangla | PASS | Same. |
| 11 | Common mistakes | Layman | PASS | Same four items and cites (Technical is already plain). |
| 12 | Common mistakes | Bangla | PASS | Same four items. |
| 13 | What a tester can check | Layman | PASS | Same five ideas. No cites. |
| 14 | What a tester can check | Bangla | PASS | Same five ideas. |

Notes (not FAILs):

- Layman keeps jargon from Technical (idempotent, eventual consistency, DLQ). It adds no new fact. The Key words table defines the terms.

## Re-check

| # | Fix | Re-check |
|---|---|---|
| 8 | Bangla: "event source-এর delivery guarantee করা উচিত" ("should") | PASS |

Found: 1. Fixed: 1.

Open FAILs: 0
