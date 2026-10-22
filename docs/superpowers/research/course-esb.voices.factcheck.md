# Voice fact-check: Enterprise Service Bus (round 1, 2026-10-22)

Page: `content/course/esb.mdx`. I did not write the voices of this page.

Method: I read the 7 `<Voices>` blocks. I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block. A FAIL is a fact, number, name, example, or cite that Technical does not give; a dropped hedge that changes the meaning; a wrong or misleading statement; a `<Cite n>` that Technical does not cite; a term that is translated in a confusing way; a wrong Bangla meaning; or a Layman sentence that is long or not plain. An omission is not a FAIL. I did not re-check the sources: the Technical claims are in the report of the page text.

Checks run:

- No `TODO` placeholder is left (`grep -c TODO` gives 0).
- No Markdown heading in any Layman or Bangla panel (script check).
- The cite set of each Layman and Bangla panel equals the cite set of its Technical panel (script check). No extra `n`.
- No number in Layman or Bangla is missing from Technical (script check).
- `git diff -U0 content/course/esb.mdx | grep '^-' | grep -v '^---'` shows no removed line. Technical text is unchanged.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same jobs, same IBM cites. The table is a list. "possibly manages several requests as one" keeps the hedge. |
| 2 | In plain words | Bangla | PASS | Same facts and cites. Terms stay in English. |
| 3 | When you need it | Layman | FAIL (fixed) | "A team connects to a legacy system" drops "can" of Technical ("A team can connect"). A possibility became a fact. |
| 4 | When you need it | Bangla | FAIL (fixed) | Same drop: "connect করে" for "can connect". |
| 5 | A real-life example | Layman | PASS | Same school example, same 2005, same three systems. "can ask the bus" restates "asks the bus too". |
| 6 | A real-life example | Bangla | PASS | Same. |
| 7 | Trade-offs | Layman | FAIL (fixed) | The last sentence has 33 words with a "so ... that" clause. Too long for a plain sentence. |
| 8 | Trade-offs | Bangla | FAIL (fixed) | "developer-রা integration-এ কম সময় দেয়" drops "can" of Technical ("Developers can then spend less time"). |
| 9 | ESB and microservices | Layman | PASS | Same IBM and Azure claims, same cites 1 and 2. The "tutorial's own view" label is kept. |
| 10 | ESB and microservices | Bangla | PASS | Same. "শুরু থেকে শেষ পর্যন্ত" is a correct gloss of "end to end". |
| 11 | Common mistakes | Layman | PASS | Same four items and cites. |
| 12 | Common mistakes | Bangla | FAIL (fixed) | "বিনামূল্যের জোড়া" for "free glue": "জোড়া" means "pair" or "joint", not "glue". The meaning is confusing. |
| 13 | What a tester can check | Layman | PASS | Same five ideas. No cites, as in Technical. The callout is plain text. |
| 14 | What a tester can check | Bangla | PASS | Same five ideas. |

Notes (not FAILs):

- Layman keeps jargon from Technical (transformation, protocol conversion, orchestrating). It adds no new fact. The Key words table defines the terms.
- Layman sentence in "ESB and microservices" about Azure has 26 words. It is a list of 4 properties. I left it.

## Re-check

| # | Fix | Re-check |
|---|---|---|
| 3 | Layman: "A team can connect to a legacy system through an adapter or connector." | PASS |
| 4 | Bangla: "connect করতে পারে" | PASS |
| 7 | Layman: split into "...often proved large and costly. In these cases, it delayed the gains that the ESB and SOA were meant to bring" (cite kept) | PASS. Both sentences are under 25 words. |
| 8 | Bangla: "কম সময় দিতে পারে" | PASS |
| 12 | Bangla: "বিনা খরচের glue (আঠা) মনে করা" | PASS. The English word stays, and the Bangla gloss is correct. |

Found: 5. Fixed: 5.

Open FAILs: 0
