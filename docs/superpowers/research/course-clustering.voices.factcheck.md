# Voice fact-check: Clustering (round 2, 2026-10-22)

Page: `content/course/clustering.mdx`. I did not write the voices.

Method: I read the 6 `<Voices>` blocks (the `## Key words` section has none). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. A fact, number, name, example, or `<Cite n>` that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. An omission that loses no fact is not a FAIL. For Layman I also checked sentence length (25 words at most; the longest is 14 to 23 words) and plain words. For Bangla I checked the meaning, the grammar, আপনি (no তুমি), the term style (common concept words in Bangla letters; acronyms, product names, and code in English), and the Bangla text of numbers.

Other checks:

- `<Technical>` is unchanged. Each of the 6 Technical bodies equals the Technical body of the same block in `git show HEAD:content/course/clustering.mdx`. The text outside the `<Voices>` blocks is also equal.
- No TODO placeholder. No heading in a Layman or Bangla panel. No তুমি.
- Cites: the set of `n` in each Layman and Bangla block is the set of `n` in Technical of the same block. Cites used: 1, 2, 3, 4, 5, 6, 7, 8. All appear in Technical.
- Section 5: the Technical panel wraps the advice in a `<Callout type="tip" title="Tutorial advice">`. Layman and Bangla keep the "tutorial's own" sentence and the list, with no cite. PASS.

| # | Section | Voice | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Cluster, node, active-passive, active-active, failover, Kubernetes: same facts and cites 1, 1, 1, 4, 1, 3, 6 | PASS | The sentences are split. No new fact. |
| 2 | In plain words | Bangla | Same content | FAIL | "ডেটা একসাথে সব নোডে পাওয়া যেতে হয়" is not grammatical Bangla. It should say that the data must be available on all nodes at once. |
| 3 | When you need it | Layman | Single point of failure, downtime cost, redundancy [1], the cost of more machines | PASS | "The price is" restates "It costs". |
| 4 | When you need it | Bangla | Same | PASS | Terms in Bangla letters, English in parentheses at first use. |
| 5 | How it works | Layman | Heartbeats [7], `Unknown`, 5 minutes [7]; split brain [5]; quorum [3]; fencing [2]; 5-node and 6-node example [3] | PASS | All numbers, defaults, and cites are as in Technical. The text diagram is not repeated, but the example is in words. |
| 6 | How it works | Bangla | Same | FAIL | "কোরাম চাওয়ার চেয়ে বেশি নোডে সার্ভিস শুরু হওয়া থামায়" is a literal and unclear rendering of "stops a service from starting on more nodes than wanted". All other sentences PASS (numbers 5, 3, 2, 6 are digits as in Technical). |
| 7 | A real-life example | Layman | Learning platform, two nodes, switch fails, quorum and fencing; two-node cluster, Corosync [3] | PASS | "may decide" is kept. |
| 8 | A real-life example | Bangla | Same | PASS | "পারে" keeps the hedge. |
| 9 | Common mistakes | Layman | 4 bullets, cites 2, 2, 8, 7 | PASS | Same text as Technical. |
| 10 | Common mistakes | Bangla | Same | PASS | "stacked" stays in English as a name of a topology. "কমপক্ষে তিনটি" = "at least three". |
| 11 | What a tester can check | Layman | 6 test ideas, the "tutorial's own" sentence, no cite | PASS | Sentences split. No new idea. |
| 12 | What a tester can check | Bangla | Same | PASS | Imperative with "-ন" (আপনি). |

Re-check (after the fixes):

| # | Fix | Verdict |
|---|---|---|
| 2 | Now "ডেটা একই সময়ে সব নোডে পাওয়া যাওয়া দরকার" ("the data must be available on all nodes at the same time"). Cite 4 is kept. | PASS |
| 6 | Now "সার্ভিস যত নোডে চলার কথা, তার চেয়ে বেশি নোডে শুরু হওয়া কোরাম থামায়" ("quorum stops the service from starting on more nodes than it should run on"). Cite 3 is kept. | PASS |

FAILs found: 2. Fixed: 2.

Open FAILs: 0
