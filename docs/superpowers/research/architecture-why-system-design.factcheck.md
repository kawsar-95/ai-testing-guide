# Fact-check: Why System Design Matters (round 1, 2026-10-20)

An agent that did not write the page did this check. I downloaded each source with `curl` (Microsoft Learn, AWS, sre.google, MDN) and converted it to plain text. I copied each quote from that text. I checked each cited sentence against the page text, not only against the quote in the notes. The page now has 9 sources. Each source has 1 or more cites, and each cite points to a source. The LMS example, the "When you need it" list, the common mistakes without a cite, and the tester tips are the tutorial's own words. The owner's summary sentence ("Coding teaches you how to build a feature...") is a view. "LMS" in Key words is only the expansion of a short name.

| # | Location (heading) | Claim (short) | Cite | Verdict | Quote / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | Failures happen no matter how many layers of protection you add | 6 | PASS | "A key tenet of FMA is that failures happen no matter how many layers of resiliency you apply." |
| 2 | In plain words | One job of monitoring is alerting: something is broken or might break soon | 7 | FAIL→fixed | Was "Monitoring exists so that a team learns when something is broken..." The source gives alerting as one of several reasons for monitoring, not the only one. Now "One job of monitoring is alerting: ...". Quote: "Alerting Something is broken, and somebody needs to fix it right now! Or, something might break soon, so somebody should look soon." |
| 3 | In plain words | System design is the high-level plan of a system | – | FAIL→fixed | A definition with no source. Now "In this module, **system design** means the high-level plan...", so it is the tutorial's own working definition. The Key words row repeats it. |
| 4 | In plain words | A design plan covers ingress, network, compute, data, storage, supporting services (login, messaging) | 6 | PASS | "Typically, you need to plan for ingress control, networking, compute, data, storage, supporting services (like authentication, messaging, and secret or key management), and egress control." |
| 5 | In plain words | Trade-off definition | 1 | FAIL→fixed | Had no cite. Added "Microsoft calls trade-offs accepted compromises that balance the different qualities" with cite 1. Quote: "These tradeoffs represent recognized and accepted compromises that balance the various aspects of the framework." |
| 6 | In plain words | Five pillars: reliability, security, cost optimization, operational excellence, performance efficiency | 1 | PASS | "They are: Reliability, Security, Cost Optimization, Operational Excellence, and Performance Efficiency." |
| 7 | In plain words | Decisions must be balanced across all pillars, given the business requirements | 1 | PASS | "The design decisions must be balanced across all pillars, given the business requirements." |
| 8 | In plain words | AWS framework helps you understand the pros and cons of decisions | 2 | PASS | "The AWS Well-Architected Framework helps you understand the pros and cons of decisions you make while building systems on AWS." |
| 9 | Trade-off table | Splitting the work lets a system grow but adds complexity | 5 | PASS | "Partitioning involves dividing the workload into smaller, manageable units to distribute data and processing across multiple resources." / "Tradeoff: Partitioning adds complexity to the design and development of a workload." |
| 10 | Trade-off table | More redundancy means more cost | 4 | PASS | "Trade-offs: More workload redundancy equates to more costs." |
| 11 | Trade-off table | Consistency level sets the trade-off between consistency and performance | 5 | PASS | "Consistency level A configuration that defines how and when data is replicated in a distributed database system, determining the tradeoff between consistency and performance." |
| 12 | Trade-off table | Consistency: all copies have the same data at the same time | 5 | PASS | "ensuring that all replicas have the same data at a given point in time." |
| 13 | Trade-off table | Synchronous: the caller waits; asynchronous code does not stop to wait | 8 | FAIL→fixed | The synchronous/asynchronous definition had no cite. Added source 8 (MDN) and the sentence "Asynchronous code asks for a task to run without stopping to wait for it to complete." Quote: "allows a program to ask that a task be performed alongside the original task (or tasks), without stopping to wait for the task to complete." |
| 14 | Trade-off table | With a message queue, parts work independently at their own pace | 5 | PASS | "These patterns allow components to process tasks independently at their own pace" |
| 15 | In plain words | Extreme reliability comes at a cost | 3 | PASS | "Extreme reliability comes at a cost: maximizing stability limits how fast new features can be developed ... and dramatically increases their cost" |
| 16 | In plain words | 100% is probably never the right reliability target | 3 | PASS | "100% is probably never the right reliability target: not only is it impossible to achieve" |
| 17 | When you need it | Without spare parts, high risk of long downtime | 4 | PASS | "When you build your workload without infrastructure redundancy, there's a high risk of extended downtime because of potential failures." |
| 18 | A real-life example | A system that cannot grow can be slow at peak times | 5 | PASS | "A workload that doesn't scale or partition might experience poor performance in high-demand periods" |
| 19 | Common mistakes | 100% uptime is not possible; cost grows fast near it | 3 | PASS | "not only is it impossible to achieve" / "an incremental improvement in reliability may cost 100x more than the previous increment." |
| 20 | Key words | Scalability definition | 5 | PASS | "Scalability The ability of a workload to dynamically change its capacity limits to accommodate varying levels of demand." |
| 21 | Key words | Availability: share of uptime | 3 | FAIL→fixed | Had no cite. Now "How much of the time the system is up. It is often measured as the share of uptime" with cite 3. Quote: "this metric is traditionally calculated based on the proportion of system uptime" |
| 22 | Key words | Reliability definition | 9 | FAIL→fixed | Had no cite, and "also when parts fail" was not in a source. Added source 9 (AWS Definitions). Now "The ability of a system to do its job correctly and consistently when users expect it to." Quote: "The reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it's expected to." |
| 23 | Key words | Redundancy: identical copies, so the system works when one fails | 4 | PASS | "Redundancy The implementation of multiple identical instances of a workload component." / "if one instance fails, other instances can continue to handle the workload." |
| 24 | Key words | Consistency definition | 5 | PASS | Added cite 5 to the row (same quote as row 12). |
| 25 | Key words | Synchronous and asynchronous | 8, 5 | FAIL→fixed | "the work runs later, often from a queue" had no source. Now "The caller does not stop to wait for the work to complete [8]. A message queue is one way to do this [5]." Synchronous: "It is the opposite of asynchronous [8]." Quote: "they are not synchronous." |
| 26 | What a tester can check | Callout says it is tutorial advice | – | PASS | "These test ideas are the tutorial's own advice." |

## Fixes

1. Monitoring sentence: "One job of monitoring is alerting" instead of "Monitoring exists so that".
2. System design definition: marked as the module's own working definition.
3. Trade-off definition: added the Microsoft wording with cite 1.
4. Added source 8 (MDN, Asynchronous) for the synchronous and asynchronous definitions in the table and in Key words.
5. Added source 9 (AWS Definitions) for the Reliability key word, and removed "also when parts fail".
6. Availability key word: added the uptime wording with cite 3.
7. Consistency key word: added cite 5.
8. Notes: added S8, S9, and claims 19 to 25.

Open FAILs: 0
