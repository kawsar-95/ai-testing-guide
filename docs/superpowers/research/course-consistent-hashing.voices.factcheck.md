# Voice fact-check: Consistent Hashing (round 2, 2026-10-22)

Page: `content/course/consistent-hashing.mdx`. I did not write the voices.

Method: I read the 6 `<Voices>` blocks (the `## Key words` section has none). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. A fact, number, name, example, or `<Cite n>` that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. An omission that loses no fact is not a FAIL. For Layman I checked sentence length (25 words at most; the longest are 23 and 25 words) and plain words. For Bangla I checked the meaning, the grammar, আপনি, the term style, and the numbers.

Other checks:

- `<Technical>` is unchanged. Each of the 6 Technical bodies equals the Technical body of the same block in `git show HEAD:content/course/consistent-hashing.mdx`. The text outside the `<Voices>` blocks is also equal.
- No TODO placeholder. No heading in a Layman or Bangla panel. No তুমি.
- Cites: the set of `n` in each Layman and Bangla block is the set of `n` in Technical of the same block (1, 2, 3).
- Section 3: Technical has two `###` headings ("Why few keys move", "Virtual nodes") and a text diagram. Layman and Bangla use a bold label instead of a heading, and give the diagram as words: positions 0 to 99, A, B, C, D at 10, 40, 70, 90, E at 55, keys 41 to 55 move from C to E. These numbers match the diagram. PASS.
- Section 3, "Why few keys move": "only the keys between the new server and the node before it change owner" restates "only the keys between B and E change owner" (B is the node before E). PASS.
- The cites 1, 2, 3 follow the same claims as in Technical (for example, monotonicity and smoothness are cite 1; the benefits list and "tokens" in Dynamo are cite 2; the token cost is cite 3).

| # | Section | Voice | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Hash function, modulo, almost every item moves [1], Cassandra [3], consistent hashing [1], small fraction [3] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | "বাকেট" is used for bucket with the meaning "(সার্ভারের)", as in Technical. |
| 3 | When you need it | Layman | Original paper [1], Dynamo [2], Cassandra [3] | PASS | Same. |
| 4 | When you need it | Bangla | Same | PASS | Product names in English with the Bangla suffix "-এর". |
| 5 | How it works | Layman | Ring, tokens, replication factor 3; the example; monotonicity, smoothness; virtual nodes; benefits; Cassandra view; Karger; cost 2 x (RF - 1) | PASS | All numbers and names match Technical. Longest sentence is 25 words ("With a ring, as in the example above...", in section 4) or less. |
| 6 | How it works | Bangla | Same | FAIL | In the last paragraph: "আরও বেশি সমন্বয়ে" uses "সমন্বয়" (coordination) for "combinations". "অপ্রাপ্য" for "unavailable" is a rare word and does not match the style of the page (it says "পাওয়া না গেলে" elsewhere). All other sentences PASS. |
| 7 | A real-life example | Layman | 4 servers, 20 keys, 4 stay, 16 move, 80 % | PASS | Numbers equal Technical. |
| 8 | A real-life example | Bangla | Same | PASS | The rules "hash modulo 4" and "hash modulo 5" are quoted as in Technical. |
| 9 | Common mistakes | Layman | 4 bullets, cites 1, 2, 3, 3 | PASS | Same text. |
| 10 | Common mistakes | Bangla | Same | PASS | Same facts and cites. |
| 11 | What a tester can check | Layman | 4 test ideas, no cite | PASS | Sentences split. |
| 12 | What a tester can check | Bangla | Same | PASS | আপনি imperative. |

Re-check (after the fix):

| # | Fix | Verdict |
|---|---|---|
| 6 | Now "নোড ফেইলিউরের আরও বেশি কম্বিনেশনে রিংয়ের একটি অংশ পাওয়া নাও যেতে পারে" ("in more combinations of node failures, part of the ring may be unavailable"). The hedge "can" is kept, and cite 3 is kept. | PASS |

FAILs found: 1. Fixed: 1.

Open FAILs: 0
