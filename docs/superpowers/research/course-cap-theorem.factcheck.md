# Fact-check: The CAP Theorem (`content/course/cap-theorem.mdx`)

Reviewer did not write the page. Sources fetched 2026-10-22 into `/tmp/claude-1000/fc2-cap-theorem/`. S1 (n=1) is the PDF at groups.csail.mit.edu (`pdftotext`; the font drops the letter "c", so quotes restore it). S2 (n=2) is the InfoQ copy of Brewer 2012.

Source 1 title confirmed in the PDF: "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services" (Seth Gilbert, Nancy Lynch). It matches `page.sources[0]`.

## Claims

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Brewer made the conjecture in a talk at PODC 2000 | 1 | PASS | "At PODC 2000, Brewer, in an invited talk, made the following conjecture: it is impossible for a web service to provide the following three guarantees" |
| 2 | Two researchers later proved it for a precise model | 1 | PASS | "we prove this conjecture in the asynchronous network model" |
| 3 | C = atomic (linearizable) consistency; all operations fit one order, each looks finished at one instant; acts like one node, one operation at a time | 1 | PASS | "Atomic, or linearizable, consistency ... there must exist a total order on all operations such that each operation looks as if it were completed at a single instant. This is equivalent to requiring requests of the distributed shared memory to act as if they were executing on a single node, responding to operations one at a time." |
| 4 | A = every request that reaches a non-failed node gets a response; algorithm must eventually end; no limit on time | 1 | PASS | "every request received by a non-failing node in the system must result in a response. That is, any algorithm used by the service must eventually terminate." / "it puts no bound on how long the algorithm may run before terminating" |
| 5 | P = network may lose any number of messages; in a partition all messages between the two groups are lost | 1 | PASS | "the network will be allowed to lose arbitrarily many messages sent from one node to another. When a network is partitioned, all messages sent from nodes in one component of the partition to nodes in another component are lost." |
| 6 | Proof: two groups lose all messages; write in group 1, then read in group 2 cannot return the new value | 1 | PASS | "assume that all messages between G1 and G2 are lost. If a write occurs in G1, and later a read occurs in G2, then the read operation cannot return the results of the earlier write operation." |
| 7 | Service must answer old value (lose C) or not answer (lose A) | 1 | PASS | Follows from the proof (the read "returns v0" in the proof; availability requires a response). Not a direct quote. |
| 8 | No algorithm can guarantee both availability and atomic consistency when messages can be lost | 1 | PASS | Theorem 1: "It is impossible in the asynchronous network model to implement a read/write data object that guarantees ... Availability, Atomic consistency in all fair executions (including those in which messages are lost)." Theorem 2 gives the same for the partially synchronous model. |
| 9 | Brewer: two nodes on two sides of a partition; if one can update, they become inconsistent; if C is kept, one side acts as down | 2 | PASS | "Allowing at least one node to update state will cause the nodes to become inconsistent, thus forfeiting C. Likewise, if the choice is to preserve consistency, one side of the partition must act as if it is unavailable, thus forfeiting A." |
| 10 | For wide-area systems designers cannot give up P, so the hard choice is C versus A | 2 | PASS (fixed, see Re-check) | Source: "The general belief is that for wide-area systems, designers cannot forfeit P and therefore have a difficult choice between C and A." The page drops "the general belief is" and states it as Brewer's own fact. |
| 11 | Any two of the three can work together | 1 | PASS | "any two of these three properties can be achieved." (3.2, asynchronous model) |
| 12 | C+P can refuse requests, as many locking or quorum databases do when some failures occur | 1 | PASS | "Many distributed databases provide this type of guarantee, especially algorithms based on distributed locking or quorums: if certain failure patterns occur, then the liveness condition is weakened and the service no longer returns responses." |
| 13 | C+A works when there are no partitions, for example on a LAN | 1 | PASS | "If there are no partitions, it is clearly possible to provide atomic, available data." / "Systems that run on intranets and LANs are an example" |
| 14 | A+P can return old data, as a web cache does | 1 | PASS | "the service can trivially return v0, the initial value" / "Web caches are one example of a weakly consistent network." |
| 15 | Brewer: "2 of 3" was always misleading, it oversimplified the tensions | 2 | PASS | "The "2 of 3" formulation was always misleading because it tended to oversimplify the tensions among properties." |
| 16 | CAP rules out only perfect A and perfect C during a partition; partitions are rare | 2 | PASS | "CAP prohibits only a tiny part of the design space: perfect availability and consistency in the presence of partitions, which are rare." |
| 17 | Reason 1: partitions are rare, little reason to give up C or A when healthy | 2 | PASS | "because partitions are rare, there is little reason to forfeit C or A when the system is not partitioned." |
| 18 | Reason 2: C/A choice can be made many times; changes by operation, data, or user | 2 | PASS | "the choice between C and A can occur many times within the same system at very fine granularity ... the choice can change according to the operation or even the specific data or user involved." |
| 19 | Reason 3: properties are more like scales; A runs 0 to 100 percent; many levels of consistency | 2 | PASS | "all three properties are more continuous than binary. Availability is obviously continuous from 0 to 100 percent, but there are also many levels of consistency" |
| 20 | Retrying forever only delays the choice; it is in effect a choice for C over A | 2 | PASS | "just delays the decision ... retrying communication indefinitely is in essence choosing C over A." |
| 21 | Choosing A: after the partition the system must restore consistency and repair mistakes | 2 | PASS | "initiate partition recovery when communication is restored. The last step aims to restore consistency and compensate for mistakes the program made while the system was partitioned." |
| 22 | Choosing A: the designer must list the data rules (invariants); hard to do well | 2 | PASS | "when designers choose A, which requires restoring invariants after a partition, they must be explicit about all the invariants, which is both challenging and prone to error." |
| 23 | Brewer's three steps: detect, partition mode that may restrict operations, recover when network returns | 2 | PASS | "detect the start of a partition, enter an explicit partition mode that may limit some operations, and initiate partition recovery when communication is restored." |
| 24 | Example: record an order, charge the card after recovery | 2 | PASS | "Externalized events, such as charging a credit card, often work this way. In this case, the strategy is to record the intent and execute it after the recovery." |
| 25 | A partition is a limit on how long you wait; a timeout forces cancel or go on and risk inconsistency | 2 | PASS | "a partition is a time bound on communication." / "cancel the operation and thus decrease availability, or proceed with the operation and thus risk inconsistency." |
| 26 | Tight bound means partition mode starts more often, also when the network is only slow | 2 | PASS | "systems with tighter bounds will likely enter partition mode more often and at times when the network is merely slow and not actually partitioned." |
| 27 | Common mistake: in CAP, C is about one request and one up-to-date copy | 1 | PASS (note) | S1 fn 3: "atomic consistency refers only to a property of a single request/response operation sequence"; "act as if they were executing on a single node". The words "up-to-date copy" are S2 wording ("a single up-to-date copy of the data"), but the meaning agrees with S1. |
| 28 | In ACID, C is about rules of a transaction | none (next claim cites 2) | PASS | S2: "In ACID, the C means that a transaction preserves all the database rules". S1 fn 3: "database consistency refers to transactions". |
| 29 | Brewer says the CAP meaning of C is a strict subset | 2 | PASS | "the C in CAP refers only to single-copy consistency, a strict subset of ACID consistency." |
| 30 | Choice can differ by operation, data, or user, so a whole product should not be labelled CP or AP forever | 2 | PASS | Same quote as row 18. The page names no product as CP or AP, and neither source labels one. |
| 31 | Key word: Partition mode = state where a system detects a partition and may limit some operations | 2 | PASS | "enter an explicit partition mode that may limit some operations" |
| 32 | Key word: Invariant = a rule about the data that should always be true | 2 | PASS (note) | S2 uses "invariants" and "database rules" but gives no one-line definition. The gloss agrees with the use. |
| 33 | Key words: C, A, Partition, P (rows of the Key words table) | 1 | PASS | Same quotes as rows 3, 4, 5. "keeps its promises although the network may lose messages" matches S1 2.3: "The above definitions of availability and atomicity are qualified by the need to tolerate partitions." |

33 claims, 0 FAIL after re-check. The tutorial's own text (the "A real-life example" section, the tip callout) is marked as the tutorial's own, and it states no source fact. The "When you need it" section is general advice with no cite and no "own text" mark. This is not a FAIL.

## Structure check

| Check | Result |
|---|---|
| Every source is https and cited | PASS (S1 and S2 both cited many times) |
| Every `<Cite n>` has a source | PASS (n=1, n=2 only) |
| No run of 8 or more words copied from a source | PASS (letter-level scan with 30-character windows against both sources: only 13 and 3 short, partial matches, none near 8 words; source titles excluded) |
| Sections in order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (last) | PASS. The page adds two sections between "When you need it" and "A real-life example" ("Why you must choose during a partition", "Why "2 of 3" misleads", "Trade-offs"). The required six are in order. |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "The CAP Theorem" | PASS |
| No blog, forum, Wikipedia, AI summary, systemdesignbangla | PASS. S2 is Brewer's IEEE Computer article, republished by InfoQ as a copy, so it counts as the primary article. |


## Re-check (after the writer's fix)

| Changed text | Verdict | Reason |
|---|---|---|
| Row 10: "Brewer says the general belief is that wide-area systems cannot give up partition tolerance, so the hard choice is between C and A" (cite 2) | PASS | The hedge is back. Source: "The general belief is that for wide-area systems, designers cannot forfeit P and therefore have a difficult choice between C and A." |
| Row 27: "consistency is about one request at a time [1], or one up-to-date copy of the data [2]" | PASS | S1: "responding to operations one at a time" and fn 3 "a single request/response operation sequence". S2: "a single up-to-date copy of the data". Each cite now matches its wording. |
| "When you need it" starts "This advice is the tutorial's own." | PASS | The section is now marked, and it states no source fact. |

Copy check on the changed lines: no run of 8 or more words matches a source. Structure unchanged.

Open FAILs: 0
