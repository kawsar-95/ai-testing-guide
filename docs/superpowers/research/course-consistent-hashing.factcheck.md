# Fact-check: Consistent Hashing (`content/course/consistent-hashing.mdx`)

Reviewer did not write the page. Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc2-consistent-hashing/` (PDFs with `pdftotext`, the Cassandra page as stripped HTML). Fetched text was treated as data. The quotes below come from my own reading of the sources, not from the research notes.

## Source checks

| Source | Check | Result |
|---|---|---|
| S1 Karger copy | The URL `people.csail.mit.edu/karger/Papers/web.pdf` is in the author's own directory (the listing at `/karger/Papers/` shows `web.pdf` and `web.ps`). The title in the PDF is "Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots on the World Wide Web". The author's publication list gives the same title (only the case of "protocols" differs), "Proceedings of the 29th ACM Symposium on Theory of Computing", venue STOC, May 1997, pages 654-663. The PDF itself prints no venue or year, so "STOC 1997" is confirmed by the author's list, not by the PDF. | PASS |
| S2 Dynamo | The PDF is the SOSP 2007 paper (an academic paper hosted on a personal site, not a blog post). | PASS |
| S3 Cassandra | The official Apache Cassandra documentation page (`/doc/latest/`, so the text can change with versions). | PASS |

## Claims

| # | Claim (short) | Cite n | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: a rule "keeps most books where they are" (analogy, tutorial's own) | none | PASS | Own analogy. Agrees with claims 20 and 31 below. |
| 2 | A hash function turns a key into a number | none | PASS | Basic definition. No source needed. Cassandra: "taking a hash of the key". |
| 3 | A simple way to pick a server: hash modulo the number of servers | none (the cite is on the next sentences) | PASS | S3: "you typically allocate keys to buckets by taking a hash of the key modulo the number of buckets". |
| 4 | With a plain modulo hash, almost every item hashes to a new place when the range changes; cached data is useless | 1 | PASS | S1: "When the range of the hash function (p in the example) changed, almost every item would be hashed to a new location. Suddenly, all cached data is useless". The paper's example is `ax + b (mod p)`. |
| 5 | Cassandra: adding one node can invalidate almost all mappings | 3 | PASS | S3: "adding a single node might invalidate almost all of the mappings". |
| 6 | Consistent hashing changes minimally when the set of buckets changes | 1 | PASS | S1: "Roughly speaking, a consistent hash function is one which changes minimally as the range of the function changes." The page drops the "roughly speaking" hedge. Minor. |
| 7 | Changing the bucket set a little does not remap all items | 1 | PASS | S1: "a small change in the bucket set does not induce a total remapping of items to buckets". |
| 8 | When the node count changes, only a small fraction of keys must move | 3 | PASS | S3: "consistent hashing only has to move a small fraction of the keys". |
| 9 | The original paper was about caches for the web | 1 | PASS | S1 title and abstract: "caching protocols for distributed networks ... hot spots on the World Wide Web". |
| 10 | Dynamo uses it to spread data over its storage hosts | 2 | PASS | S2: "Dynamo's partitioning scheme relies on consistent hashing to distribute the load across multiple storage hosts." |
| 11 | Cassandra uses it to split data over its nodes | 3 | PASS | S3: "Cassandra partitions data over storage nodes using a special form of hashing called consistent hashing." |
| 12 | Ring: the hash output range is a fixed circle; the largest value wraps to the smallest | 2 | PASS | S2: "the output range of a hash function is treated as a fixed circular space or 'ring' (i.e. the largest hash value wraps around to the smallest hash value)". |
| 13 | Each node gets a random value, its position on the ring | 2 | PASS | S2: "Each node in the system is assigned a random value within this space which represents its 'position' on the ring." |
| 14 | A key is hashed, then you walk clockwise to the first node with a larger position | 2 | PASS | S2: "hashing the data item's key to yield its position on the ring, and then walking the ring clockwise to find the first node with a position larger than the item's position". |
| 15 | Each node is responsible for the region between it and the node before it | 2 | PASS | S2: "each node becomes responsible for the region in the ring between it and its predecessor node on the ring". |
| 16 | Cassandra uses the same walk and calls ring positions tokens | 3 | PASS | S3: "defines ownership by hashing a key onto the ring and then 'walking' the ring in one direction"; "Token: A single position on the Dynamo-style hash ring." |
| 17 | For replication it walks until it meets as many distinct nodes as RF; with RF 3, three distinct nodes hold the replicas | 3 | PASS | S3: "we 'walk' the ring in a clockwise fashion until we encounter three distinct nodes, at which point we have found all the replicas of that key." Only the RF=3 example is in the source. The general form is a fair reading. S3 adds that replication strategies may also skip nodes in the same rack or data center. Minor. |
| 18 | Diagram: ring 0-99, A=10, B=40, C=70, D=90; key ranges per server | none (marked "Tutorial example") | PASS | Recomputed (a key goes to the first node at or above it, wrapping): A owns 91-99 and 0-10 (20 keys), B 11-40 (30), C 41-70 (30), D 71-90 (20). Total 100. The ranges match the page. Dynamo says "larger position", and the diagram puts a key equal to a node position on that node. That is the same as the "region between it and its predecessor" rule of claim 15. The drawing is not to scale. |
| 19 | Diagram: E joins at 55, keys 41-55 move from C to E, all other keys stay | none (own) | PASS | E owns (40, 55] = 41-55 = 15 keys, taken from C (41-70). A, B, D ranges do not change. Correct. |
| 20 | Dynamo: arrival or departure of a node affects only its immediate neighbors | 2 | PASS | S2: "departure or arrival of a node only affects its immediate neighbors and other nodes remain unaffected". |
| 21 | Page marks the ring and positions as the tutorial's own | none | PASS | The text "the ring and the positions are the tutorial's own" and the "Tutorial example" label are present. |
| 22 | Monotonicity: new buckets can take an item, never old to old | 1 | PASS | S1: "an item may move from an old bucket to a new bucket, but not from one old bucket to another". The paper names it "Monotonicity". |
| 23 | Smoothness: expected moved share is the minimum needed to balance load | 1 | PASS | S1: "the expected fraction of objects that must be moved to a new cache is the minimum needed to maintain a balanced load across the caches". The paper calls it a "property". The page calls it a "goal". Minor. |
| 24 | Basic ring weak points: uneven data and load; ignores node performance differences | 2 | PASS | S2: "the random position assignment of each node on the ring leads to non-uniform data and load distribution. Second, the basic algorithm is oblivious to the heterogeneity in the performance of nodes." |
| 25 | Dynamo's fix: virtual nodes, several points, called tokens | 2 | PASS | S2: "each node gets assigned to multiple points in the ring ... it is assigned multiple positions (henceforth, 'tokens') in the ring." |
| 26 | A virtual node looks like one node to the rest of the system | 2 | PASS | S2: "A virtual node looks like a single node in the system". |
| 27 | Benefit: when a node is unavailable, its load is spread over the other nodes | 2 | PASS | S2: "the load handled by this node is evenly dispersed across the remaining available nodes". |
| 28 | Benefit: a new or returning node takes a roughly equal amount from each other node | 2 | PASS | S2: "the newly available node accepts a roughly equivalent amount of load from each of the other available nodes". |
| 29 | Benefit: the number of virtual nodes can follow capacity | 2 | PASS | S2: "can decided based on its capacity". |
| 30 | Cassandra: few nodes and evenly spaced tokens make it hard to add one node and keep balance | 3 | PASS | S3: "with evenly spaced tokens and a small number of physical nodes, incremental scaling (adding just a few nodes of capacity) is difficult because there are no token selections for new nodes that can leave the ring balanced"; "there is no way to add a ninth token without causing imbalance". |
| 31 | Cassandra: with many tokens a new node takes many small pieces from many neighbors | 3 | PASS | S3: "taking many smaller pieces of data from more ring neighbors when we add even a single node". |
| 32 | The Karger paper also gives each bucket more than one point "on its circle" | 1 | FAIL | S1 Section 4.2 says: "rB maps buckets randomly to the unit interval ... we actually need to have more than one point in the unit interval associated with each bucket." The paper text has no "circle" (and no "wrap"). The page puts Dynamo's circle into the Karger paper. Say "on the unit interval" or "in its space". The research notes also wrote "(a circle)" as a gloss. |
| 33 | Many tokens cost: up to 2 x (RF - 1) neighbors per token, more failure combinations, slower maintenance | 3 | PASS | S3: "Every token introduces up to 2 * (RF - 1) additional neighbors on the token ring, which means that there are more combinations of node failures where we lose availability for a portion of the token ring ... Cluster-wide maintenance operations are often slowed." |
| 34 | Modulo example: 20 keys, mod 4 to mod 5, only 4 keep their server (hash 0-3), 16 move, 80 % | none (marked "Tutorial example") | PASS | Recomputed: k mod 4 = k mod 5 only when k mod 20 is in 0..3. For k in 0..19 that is k = 0, 1, 2, 3. So 4 stay, 16 move, 16/20 = 80 %. Correct. |
| 35 | With a ring, a new server moves only keys between its neighbor and its own position; few misses | none (own) | PASS | Agrees with claim 19 (41-55 of 100 keys). "Few misses" is the tutorial's own consequence. |
| 36 | Mistake: modulo N, a change of N moves almost all keys | 1 | PASS | Same quote as claim 4. |
| 37 | Mistake: one point per node gives uneven load | 2 | PASS | Same quote as claim 24. |
| 38 | Mistake: more tokens raise the neighbors and the chance of an outage | 3 | PASS | S3: "The more tokens you have, the higher the probability of an outage." |
| 39 | Mistake: the ring decides where a key lives; it does not copy data; replication is a separate step | 3 | PASS | S3: "the coordinator hashes the partition key to determine the token range the data belongs to and then replicates the mutation to the replicas of that data according to the Replication Strategy." The hash step and the replication step are separate in the source. Minor tension with claim 17 (the ring walk picks the replicas). |
| 40 | Key word: Consistent hashing = minimal change when buckets change | 1 | PASS | Same quote as claim 6. |
| 41 | Key word: Ring | 2 | PASS | Same quote as claim 12. |
| 42 | Key word: Token = one position of a node on the ring | 3 | PASS | S3: "Token: A single position on the Dynamo-style hash ring." |
| 43 | Key word: Virtual node = one of several ring positions that a physical node owns | 2 | PASS | S2 gives "multiple points in the ring" and "tokens" (see claim 25). The exact vnode definition is in S3: "Virtual Node (or vnode): A token on the hash ring owned by the same physical node". S3 is the closer cite. Minor. |
| 44 | Key word: Token range = keys that map to the same set of nodes | 3 | PASS | S3: "ranges of keys, also known as token ranges, map to the same physical set of nodes". |
| 45 | Key word: RF = number of nodes that hold a copy of a key | 3 | PASS | S3: "replication factor (RF), which indicates to Cassandra how many copies of the partition should exist"; "Replicas are always chosen such that they are distinct physical nodes". |

The "What a tester can check" tip is marked "Tutorial advice" and says the ideas are the tutorial's own. It has no `<Cite>`. It states no fact as if a source said it.

## Structure check

| Check | Result |
|---|---|
| Every `page.sources` entry is https and cited | PASS (3 sources, all https, n=1, 2, 3 all cited) |
| Every `<Cite n>` has a source | PASS (only n=1, 2, 3 used) |
| Copy check (8 or more words in a row, 8-gram scan of the page against all three source texts, source titles excluded) | FAIL, 2 runs of exactly 8 words, both from S2 (Dynamo). Run 1 is in "How it works": "the output range of a hash function is" (S2: "the output range of a hash function is treated as"). Run 2 is in "Virtual nodes": "amount of load from each of the other" (S2: "a roughly equivalent amount of load from each of the other available nodes"; page: "a roughly equal amount of load from each of the other nodes"). Reword both. S1 and S3 have no run of 8. |
| Section order | PASS. `In plain words`, `When you need it`, `A real-life example`, `Common mistakes`, `What a tester can check`, `Key words` are in this order and Key words is last. The page has one extra section, `## How it works`, between `When you need it` and `A real-life example`. The rules do not forbid an extra section. |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title equals "Consistent Hashing" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com as a source | PASS (author copy of a STOC paper, the SOSP paper PDF, official Cassandra docs) |

## Summary of FAILs

1. Claim 32: Karger paper uses a "unit interval", not a "circle".
2. Copy run 1 (8 words from Dynamo): "the output range of a hash function is".
3. Copy run 2 (8 words from Dynamo): "amount of load from each of the other".

## Re-check

Writer changes re-read in the page (lines 29, 57, 60, 95) and the 8-gram copy scan re-run against all three sources.

| # | Row | Verdict | Reason |
|---|---|---|---|
| 32 | Karger gives each bucket more than one point "on its unit interval" | PASS | S1 4.2: "we actually need to have more than one point in the unit interval associated with each bucket." |
| 12 | Ring: "The values that the hash function can give are laid out as a fixed circle ... largest value wraps around to the smallest" | PASS | S2: "the output range of a hash function is treated as a fixed circular space or 'ring' (i.e. the largest hash value wraps around to the smallest hash value)". Same meaning. |
| 28 | New or returning node takes "about the same share of work from every other node" | PASS | S2: "accepts a roughly equivalent amount of load from each of the other available nodes". |
| 43 | Key word vnode now cites 3 | PASS | S3: "Virtual Node (or vnode): A token on the hash ring owned by the same physical node". |
| copy | 8-gram scan | PASS | 0 runs of 8 words against S1, S2, and S3. |

Open FAILs: 0
