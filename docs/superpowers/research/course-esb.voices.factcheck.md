# Voice fact-check: Enterprise Service Bus (round 1, 2026-10-22)

Page: `content/course/esb.mdx`. I did not write the Layman or Bangla panels.

Method: I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same `##` section (7 blocks; `## Key words` has no voices). A fact, number, name, example, hedge, or `<Cite n>` that Technical does not give is a FAIL. A wrong or unfinished Bangla sentence is a FAIL. A Bangla panel that breaks the course term style is a FAIL (তুমি, a common concept word left in English without a reason, or an acronym, product name, or command in Bangla letters). A Layman sentence over 25 words is a FAIL. An omission is not a FAIL. I read the Bangla text for meaning, grammar, and the আপনি form.

Mechanical checks (script): each `<Technical>` panel is identical to the `<Technical>` panel of the same section in `git show HEAD:content/course/esb.mdx`, and the text outside the `<Voices>` blocks is identical to HEAD. Each Layman and Bangla panel cites only `n` values that Technical of the same block cites, and has the same number of `<Cite>` tags as Technical. No heading in a Layman or Bangla panel. No TODO. No তুমি. A scan of the Bangla panels for acronyms and product names written in Bangla letters found none. The Layman panels are identical to HEAD before my edits (only the Bangla panels were rewritten).

Notes:

- Block 1: Layman turns the jobs table into a list and says "connects the applications to each other" for "performs the integrations". Same meaning. PASS.
- Block 4: Layman "In these cases, it delayed the gains" keeps the "often proved large and costly" hedge. PASS.
- Block 7: the Technical panel wraps the ideas in a `Callout`. Layman and Bangla restate the "tutorial's own advice" line and the 5 ideas with no cites. PASS.
- Bangla: terms such as ট্রান্সফরমেশন (transformation), রাউটিং, রিকুয়েস্ট, মেসেজ, ডিপ্লয়, টেস্ট are in Bangla letters. ESB, SOA, SOAP, HTTP, JSON, API, IBM, Azure, Apache Kafka, Azure Service Bus stay in English. The key terms have a gloss in parentheses at the first use.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 2 | In plain words | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 3 | When you need it | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 4 | When you need it | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 5 | A real-life example | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 6 | A real-life example | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 7 | Trade-offs | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 8 | Trade-offs | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 9 | ESB and microservices | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 10 | ESB and microservices | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 11 | Common mistakes | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 12 | Common mistakes | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 13 | What a tester can check | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 14 | What a tester can check | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |

## Re-check (after fixes)

No FAIL in this page, so there was nothing to re-check. The page was not edited.

FAIL rows found: 0. Fixed: 0.

Open FAILs: 0
