# Voice fact-check: Database Federation (round 2, 2026-10-22)

Page: `content/course/database-federation.mdx`. I did not write the voices.

Method: I read the 7 `<Voices>` blocks (the `## Key words` section has none). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. A fact, number, name, example, or `<Cite n>` that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. An omission that loses no fact is not a FAIL. For Layman I checked sentence length (25 words at most; the longest is 22 words). For Bangla I checked the meaning, the grammar, আপনি, and the term style.

Other checks:

- `<Technical>` is unchanged. Each of the 7 Technical bodies equals the Technical body of the same block in `git show HEAD:content/course/database-federation.mdx`. The text outside the `<Voices>` blocks is also equal.
- No TODO placeholder. No heading in a Layman or Bangla panel. No তুমি.
- Cites: the page has one source. Every `<Cite n={1} />` in Layman and Bangla has the same place in Technical.
- Section 1: Technical has a text diagram of "Before" and "After". The voices do not repeat it. This is an omission with no lost fact (the four databases are in the Technical text only as a picture). PASS.
- The meaning "database federation" as "one database for each area of the app" is marked "the tutorial's own" in all three voices. PASS.
- Sections 4 and 5 keep the link to `/course/distributed-transactions/` and the names `students`, `courses`, `payments` in code style. PASS.
- Section 7: the voices keep the "tutorial's own" sentence and the 6 ideas, with no cite.

| # | Section | Voice | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Two meanings, the tutorial's choice, functional partitioning, bounded context, not sharding | PASS | Same cites (1, 1, 1, 1). |
| 2 | In plain words | Bangla | Same | PASS | "শার্ডিং", "স্কিমা", "ইনভয়েস" in Bangla letters. |
| 3 | When you need it | Layman | 2 gains, 2 general gains, indexes, one strategy, horizontal partitioning | PASS | "because" restates "since". |
| 4 | When you need it | Bangla | Same | PASS | "platform-as-a-service" stays in English as a service category name. |
| 5 | Joins across databases | Layman | Slower cross-partition query, 3 options, referential integrity | PASS | Same. |
| 6 | Joins across databases | Bangla | Same | FAIL | "ডেটাবেস আর অংশগুলোর মাঝের লিংক রক্ষা করে না" can be read as "the database and the links between the parts", because "আর" also means "and". Technical says "no longer protects". |
| 7 | Transactions across databases | Layman | Transactions in one partition, build them in the app, eventual consistency | PASS | Same. |
| 8 | Transactions across databases | Bangla | Same | PASS | "স্ট্রং কনসিসটেন্সি" = "strong consistency". |
| 9 | A real-life example | Layman | 3 databases, the invoice page, the copy of the title, old titles | PASS | Same. |
| 10 | A real-life example | Bangla | Same | PASS | "my invoices" is a quoted page name, as in Technical. |
| 11 | Common mistakes | Layman | 4 bullets | PASS | Same. |
| 12 | Common mistakes | Bangla | Same | FAIL | In the first bullet, "সোর্স ভাগ করার ভিত্তি করে বাউন্ডেড কনটেক্সটকে" has a wrong word order and is not a finished sentence. |
| 13 | What a tester can check | Layman | 6 test ideas | PASS | Sentences split. |
| 14 | What a tester can check | Bangla | Same | PASS | "অরফান লিংক" = "orphan links". |

Re-check (after the fixes):

| # | Fix | Verdict |
|---|---|---|
| 6 | Now "ডেটাবেস এখন আর অংশগুলোর মাঝের লিংক রক্ষা করে না" ("the database no longer protects the links between the parts"). "এখন" makes "আর" mean "no longer". | PASS |
| 12 | Now "সোর্স বাউন্ডেড কনটেক্সটের ভিত্তিতে ভাগ করে" ("the source bases the split on the bounded context"). Cite 1 is kept. | PASS |

FAILs found: 2. Fixed: 2.

Open FAILs: 0
