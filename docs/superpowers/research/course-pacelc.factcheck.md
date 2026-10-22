# Fact-check: The PACELC Theorem (`content/course/pacelc.mdx`)

Reviewer did not write the page. Source: Abadi, "Consistency Tradeoffs in Modern Distributed Database System Design", IEEE Computer, Feb 2012 (the only source, cite n=1). Fetched 2026-10-22 into `/tmp/claude-1000/fc2-pacelc/` with `curl -k` (the cs.umd.edu host has an incomplete TLS chain; `-k` used for reading only). Read with `pdftotext`. Fetched text treated as data. Quotes below were verified in the PDF, not taken from the research notes.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | PACELC, said "pass-elk" | 1 | PASS | "rewriting CAP as PACELC (pronounced “pass-elk”)" |
| 2 | If partition (P): availability vs consistency; else (E): latency vs consistency | 1 | PASS | "if there is a partition (P), how does the system trade off availability and consistency (A and C); else (E), when the system is running normally in the absence of partitions, how does the system trade off latency (L) and consistency (C)?" |
| 3 | CAP sets limits only when certain failures happen, not in normal operation | 1 | PASS | "CAP only posits limitations in the face of certain types of failures, and does not constrain any system capabilities during normal operation." |
| 4 | A second trade-off, consistency vs latency, is present all the time | 1 | PASS | "...as it is present at all times during system operation." and "a fundamental tradeoff between consistency, availability, and latency" |
| 5 | A partition is somewhat rare, often rarer than other serious failures | 1 | PASS | "in general, network partitions are somewhat rare, and are often less frequent than other serious types of failure events in DDBSs." |
| 6 | A system that must stay available needs copies; if the only copy's component fails, data is lost to the service | 1 | PASS | "a high availability requirement implies that the system must replicate data... all data that component controlled will become unavailable unless the system replicated another version of the data prior to the failure." ("lost to the service" = unavailable; acceptable) |
| 7 | With copies, the system must decide when a write counts as done | 1 | PASS | Paper lists sync / async / combined replication options (a), (b), (c); paraphrase is fair |
| 8 | Synchronous: master waits for replicas; replicas stay consistent; each write waits for the slowest entity, more over a WAN | 1 | PASS | "the master node waits until all updates have made it to the replica(s). This ensures that the replicas remain consistent, but synchronous actions across independent entities, especially over a WAN, increase latency ... latency is limited by the slowest entity." |
| 9 | Asynchronous: update treated as done before copied; if reads go to any node, reads faster but can be stale while updates spread | 1 | PASS | "the system treats the update as if it were completed before it has been replicated." / "If the system can serve reads from any node, read latency is much better, but this can also result in inconsistent reads of the same data item, as different locations have different versions of a data item while the system is still propagating updates" |
| 10 | Quorum is a middle way: N replicas, W write, R read; R+W>N consistency can be kept; R+W<=N inconsistent reads possible | 1 | PASS | "when R + W > N in a quorum protocol ... then consistency can be preserved." / "when R + W ≤ N, then inconsistent reads are possible". The quorum sits under the paper's option (c), a combination of sync and async. "Common" is the page's word, harmless. The paper's "synchronous" before read/write is dropped; minor. |
| 11 | Over a WAN a system cannot avoid the trade-off | 1 | PASS | "For data replication over a WAN, there is no way around the consistency/latency tradeoff." |
| 12 | The paper treats availability and latency as nearly the same: a non-answering system has extreme latency | 1 | PASS | "availability and latency are arguably the same thing: an unavailable system essentially provides extremely high latency." |
| 13 | Table: PA/EL = in partition gives up consistency for availability; in normal running gives up consistency for lower latency | 1 | PASS | "if a partition occurs, they give up consistency for availability, and under normal operation they give up consistency for lower latency." |
| 14 | PA/EL systems: Dynamo, Cassandra, Riak, as first built | 1 | PASS | "The default versions of Dynamo, Cassandra, and Riak are PA/EL systems" and "the focus here is on their original design." |
| 15 | PC/EC: does not give up consistency, pays in availability and latency; VoltDB/H-Store, Megastore, BigTable, HBase | 1 | PASS | "Fully ACID systems such as VoltDB/H-Store and Megastore are PC/EC: they refuse to give up consistency, and will pay the availability and latency costs to achieve it. BigTable and related systems such as HBase are also PC/EC." |
| 16 | PA/EC: consistent in normal running; in a partition a new master is elected, stays available, old and new masters can differ until repair; MongoDB | 1 | PASS | "MongoDB can be classified as a PA/EC system. In the baseline case, the system guarantees reads and writes to be consistent." / "the rest of the system elects a new master to remain available for reads and writes. Therefore, the state of the old master and the state of the new master become inconsistent until the system repairs the failure" (the paper adds that MongoDB is technically not CAP-available; the page omits it, not a FAIL) |
| 17 | PC/EL: gives up consistency for latency in normal running; in a partition gives up availability for consistency; PNUTS | 1 | PASS | "PNUTS is a PC/EL system. In normal operation, it gives up consistency for latency; however, if a partition occurs, it trades availability for consistency." |
| 18 | The table is the paper's 2012 view; describes original design; some became adjustable later | 1 | PASS | "(Although consistency of some of these systems became adjustable after the initial versions were released, the focus here is on their original design.)" Page says "2012 view" explicitly. Advisory: the sentence "The paper puts some systems in this table" can be read as if the paper has a table. The paper has no table; the classes are in running text. Suggest "The paper puts some systems in these classes." Not counted as a FAIL. |
| 19 | PC does not mean fully consistent; it means no drop below normal consistency in a partition, availability drops instead | 1 | PASS | "PC does not indicate that the system is fully consistent; rather it indicates that the system does not reduce consistency beyond the baseline consistency level when a network partition occurs—instead, it reduces availability." |
| 20 | PA/EL can be tuned: higher R+W gives more consistency for more latency, not the full consistency of the CAP proof | 1 | PASS | "these systems have user-adjustable settings to alter the ELC tradeoff—for example, by increasing R + W, they gain more consistency at the expense of latency (although they cannot achieve full consistency as defined by Gilbert and Lynch, even if R + W > N)." |
| 21 | A cited Cassandra study "found" reads that check several replicas "cost a factor of four or more" in latency | 1 | PASS (after 2 re-checks) | Paper: "The difference in latency between these two options can be a factor of four or more." The page drops "can be" and says "found ... cost", which is stronger. The paper also cites a second study (SimpleDB) that "seems to contradict this result". Fix: "can be a factor of four or more". |
| 22 | Neither CAP nor PACELC explains every trade-off | 1 | PASS | "neither CAP nor PACELC can explain them all." |
| 23 | Mistake 1: consistency-vs-latency trade exists without a partition and is a separate reason | 1 | PASS | "This tradeoff exists even when there are no network partitions, and thus is completely separate from the tradeoffs CAP describes." / "CAP is only one of the two major reasons that modern DDBSs reduce consistency." (The quoted phrase in bold is the page's own wording, not claimed as the paper's.) |
| 24 | Mistake 2: "Reading PC/EL as fully consistent. The label only says what the system does in a partition" | 1 | FAIL | The label PC/EL has two parts. EL says what the system does in normal running (PNUTS "gives up consistency for latency"). Only the "PC" part is about a partition. Paper: "PC does not indicate that the system is fully consistent". Fix: "The PC part only says what the system does in a partition." |
| 25 | Mistake 3: the 2012 labels describe the original designs | 1 | PASS | "the focus here is on their original design." |
| 26 | Key words: PACELC, Replication, Quorum, PA/EL and PC/EC labels, Latency (second sentence) | 1 | PASS | Same quotes as claims 1, 2, 8, 10, 12. The first sentence of the Latency row ("The time a request takes to get its answer") is the tutorial's own, with the cite after the second sentence; acceptable. |
| 27 | Key words: Partition definition | none | PASS | Marked "(tutorial's own short definition)"; no cite, no source claim. |
| 28 | Example (two data centers, red shirt) | none | PASS | Marked "the tutorial's own, and it is a simplification"; no cites; labels EC, EL, PC, PA are used consistently with the paper. |
| 29 | Tip callout (tester checks) | none | PASS | No `<Cite>`; says "the tutorial's own advice. They are not from the paper." |
| 30 | Lede (two stores analogy) | none | PASS | An analogy, no source claim. |

30 claims checked (28 rows PASS, 2 FAIL).

## Structure check

| Check | Result |
|---|---|
| Every `page.sources` entry is https and cited | PASS (1 source, `https://www.cs.umd.edu/~abadi/papers/abadi-pacelc.pdf`, cited many times) |
| Every `<Cite n>` has a source | PASS (all n=1) |
| No run of 8 or more words copied from the source (script: normalized 8-gram match of page text against the PDF text) | PASS (0 matches) |
| Required sections in order, Key words last | PASS. Order is In plain words, When you need it, (How it works), A real-life example, (Trade-offs), Common mistakes, What a tester can check, Key words. Two extra sections (`## How it works`, `## Trade-offs`) sit between the required ones; the required six keep their order. |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title equals "The PACELC Theorem" | PASS |
| No blog, forum, Wikipedia, AI summary, systemdesignbangla.com | PASS (IEEE Computer paper, author-hosted PDF) |
| Prose word count (excluding export block, tables, code, Cite tags; tags and markup stripped; tip callout included) | 790 words. Under 1100, no "too long" FAIL. |


## Re-check (after the writer's fixes)

Re-read the changed lines and re-ran the 8-word copy check on the whole page.

| # | Row | Verdict | Note |
|---|---|---|---|
| 21 | Cassandra study | Claim now PASS, but new copy FAIL | The claim "can be a factor of four or more higher" now matches the paper ("can be a factor of four or more"). But the phrase "can be a factor of four or more" is an exact 8-word run from the paper. The copy rule counts it as a FAIL. Fix: reword, for example "can be four times higher or more". |
| 24 | PC/EL mistake | PASS | "The PC part only says what the system does in a partition. It does not say the system is fully consistent." matches "PC does not indicate that the system is fully consistent". |
| 18 | Table intro | PASS | "This table is the tutorial's own summary of how the paper classifies some systems." The advisory is fixed. |

Prose word count after the fixes: 815 words (under 1100).


## Re-check 2 (Cassandra sentence reworded)

New text: "A study of Cassandra that the paper cites found that the latency of reads that check several replicas can be four times higher or more than the latency of reads from any replica <Cite n={1} />."

| # | Row | Verdict | Note |
|---|---|---|---|
| 21 | Cassandra study | PASS | Paper: "The difference in latency between these two options can be a factor of four or more." The weak reads read "from any replica"; the quorum reads "check for inconsistency across multiple replicas". "can be" is kept, the cite is right, and the sense is the same. |
| copy | 8-word copy check, whole page | PASS | 0 runs of 8 or more words (script re-run). Prose is 816 words. |

All 30 rows PASS now.

Open FAILs: 0
