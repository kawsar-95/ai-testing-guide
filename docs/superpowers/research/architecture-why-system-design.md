# Why System Design Matters (Architecture module, part 01) — research notes (2026-10-20)

Base text: the owner's notes (`architecture-owner-notes.md`), sections "Introduction", "Why System Design Matters", "When should you think about System Design", and its "Real Life Example". The owner's notes get no `<Cite>`. The LMS example, the common mistakes, and the tester tips are the tutorial's own words.

Fetch note: the Microsoft Learn and AWS pages were fetched with WebFetch (full Markdown text). The Google SRE pages were downloaded with `curl` and converted to plain text, and each quote was copied from that text. The raw text is not committed.

## Sources

S1. How to Use the Azure Well-Architected Framework Documentation — Microsoft Learn — https://learn.microsoft.com/en-us/azure/well-architected/what-is-well-architected-framework — accessed 2026-10-20
S2. AWS Well-Architected Framework (Introduction) — Amazon Web Services — https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html — accessed 2026-10-20
S3. Site Reliability Engineering, Chapter 3: Embracing Risk — Google (sre.google) — https://sre.google/sre-book/embracing-risk/ — accessed 2026-10-20
S4. Architecture strategies for designing for redundancy — Microsoft Learn (Azure Well-Architected Framework) — https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy — accessed 2026-10-20
S5. Architecture strategies for optimizing scaling and partitioning — Microsoft Learn (Azure Well-Architected Framework) — https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/scale-partition — accessed 2026-10-20
S6. Architecture strategies for performing failure mode analysis — Microsoft Learn (Azure Well-Architected Framework) — https://learn.microsoft.com/en-us/azure/well-architected/reliability/failure-mode-analysis — accessed 2026-10-20
S7. Site Reliability Engineering, Chapter 6: Monitoring Distributed Systems — Google (sre.google) — https://sre.google/sre-book/monitoring-distributed-systems/ — accessed 2026-10-20
S8. Asynchronous (Glossary) — MDN Web Docs — https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous — accessed 2026-10-20 (added by the fact-check)
S9. AWS Well-Architected Framework: Definitions — Amazon Web Services — https://docs.aws.amazon.com/wellarchitected/latest/framework/definitions.html — accessed 2026-10-20 (added by the fact-check)

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Failures happen no matter how many layers of resiliency you add | S6 | "A key tenet of FMA is that failures happen no matter how many layers of resiliency you apply." |
| 2 | A design plan covers ingress, networking, compute, data, storage, and supporting services such as authentication and messaging | S6 | "Typically, you need to plan for ingress control, networking, compute, data, storage, supporting services (like authentication, messaging, and secret or key management), and egress control." |
| 3 | Monitoring lets a team see that something is broken, or might break soon | S7 | "Alerting Something is broken, and somebody needs to fix it right now! Or, something might break soon, so somebody should look soon." |
| 4 | Azure names five pillars: reliability, security, cost optimization, operational excellence, performance efficiency | S1 | "They are: Reliability, Security, Cost Optimization, Operational Excellence, and Performance Efficiency." |
| 5 | Design decisions must be balanced across all pillars, given the business requirements | S1 | "The design decisions must be balanced across all pillars, given the business requirements." |
| 6 | Trade-offs are accepted compromises | S1 | "These tradeoffs represent recognized and accepted compromises that balance the various aspects of the framework." |
| 7 | The AWS framework helps you understand the pros and cons of decisions | S2 | "The AWS Well-Architected Framework helps you understand the pros and cons of decisions you make while building systems on AWS." |
| 8 | Simplicity vs scalability: partitioning (splitting the work) adds complexity | S5 | "Tradeoff: Partitioning adds complexity to the design and development of a workload." |
| 9 | Cost vs availability: more redundancy means more cost | S4 | "More workload redundancy equates to more costs." |
| 10 | Without redundancy there is a high risk of extended downtime | S4 | "When you build your workload without infrastructure redundancy, there's a high risk of extended downtime because of potential failures." |
| 11 | Extreme reliability comes at a cost | S3 | "Extreme reliability comes at a cost: maximizing stability limits how fast new features can be developed and how quickly products can be delivered to users, and dramatically increases their cost" |
| 12 | 100% is probably never the right reliability target | S3 | "100% is probably never the right reliability target: not only is it impossible to achieve, it's typically more reliability than a service's users want or notice." |
| 13 | Performance vs consistency: the consistency level sets the trade-off | S5 | "Consistency level: A configuration that defines how and when data is replicated in a distributed database system, determining the tradeoff between consistency and performance." |
| 14 | Consistency means all copies have the same data at the same time | S5 | "Consistency (distributed database): The uniformity of data across multiple nodes in a distributed database, ensuring that all replicas have the same data at a given point in time." |
| 15 | Sync vs async: message queues let parts process tasks independently at their own pace | S5 | "Use asynchronous communication patterns such as message queues or event-driven architectures to decouple components further. These patterns allow components to process tasks independently at their own pace" |
| 16 | Scalability definition (Key words) | S5 | "Scalability: The ability of a workload to dynamically change its capacity limits to accommodate varying levels of demand." |
| 17 | A workload that does not scale can be slow at peak times | S5 | "A workload that doesn't scale or partition might experience poor performance in high-demand periods and underutilized capacity in low-demand periods." |
| 18 | Redundancy definition (Key words) | S4 | "Redundancy: The implementation of multiple identical instances of a workload component." |
| 19 | Redundancy lets other copies continue when one fails (Key words) | S4 | "This fundamental redundancy strategy ensures that if one instance fails, other instances can continue to handle the workload." |
| 20 | Asynchronous: the program does not stop to wait for the task; asynchronous means not synchronous | S8 | "Asynchronous software design expands upon the concept by building code that allows a program to ask that a task be performed alongside the original task (or tasks), without stopping to wait for the task to complete." / "that is, they are not synchronous." |
| 21 | Availability is usually measured as the share of uptime (Key words) | S3 | "For serving systems, this metric is traditionally calculated based on the proportion of system uptime" |
| 22 | Reliability definition (Key words) | S9 | "The reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it's expected to." |
| 23 | Trade-offs are accepted compromises that balance the aspects of the framework | S1 | "These tradeoffs represent recognized and accepted compromises that balance the various aspects of the framework." |
| 24 | One reason for monitoring is alerting | S7 | "Alerting Something is broken, and somebody needs to fix it right now! Or, something might break soon, so somebody should look soon." |
| 25 | The cost of reliability grows fast near 100% | S3 | "cost does not increase linearly as reliability increments—an incremental improvement in reliability may cost 100x more than the previous increment." |

## Owner claims with no source

| Owner claim | What the page does |
|---|---|
| "Architecture decisions are mostly driven by non-functional requirements" | Not on this page (it belongs to part 02). |
| The list of beginner vs engineer questions | Kept as questions. A question is not a factual claim, so it has no cite. |
| The list of trade-offs (simplicity vs scalability, cost vs availability, performance vs consistency, sync vs async) | Kept. Each row has a cite (claims 8, 9, 11, 13, 15) that shows the official source names the same tension. |
| "System Architecture teaches you how to build a system that survives." | Kept as the owner's summary sentence, with no cite. |
