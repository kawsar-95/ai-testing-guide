# Horizontal Scaling (Architecture 05) — research notes (2026-10-20)

Fetch note: each source was fetched with `curl -sL` on 2026-10-20 and stripped to plain text in the scratchpad. The text was not committed. Each quote below is copied from that text. Curly apostrophes in the source are written as straight apostrophes here.

Base text: the owner's notes, section "Horizontal Scaling" (`architecture-owner-notes.md`). The LMS admission-day example, the "Common mistakes" advice, and the tester tips are the tutorial's own words and have no cite.

## Sources

S1. Autoscaling — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling — accessed 2026-10-20. Page cite `[1]`.
S2. Design to scale out — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out — accessed 2026-10-20. Page cite `[2]`.
S3. Design principles — AWS Well-Architected Framework, Reliability Pillar (AWS) — https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html — accessed 2026-10-20. Page cite `[3]`.
S4. Performing a Rolling Update — Kubernetes Documentation (kubernetes.io) — https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/ — accessed 2026-10-20. Page cite `[4]`.
S5. What is Elastic Load Balancing? — Elastic Load Balancing User Guide (AWS) — https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html — accessed 2026-10-20. Page cite `[5]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Horizontal scaling (scaling out and in) means adding or removing instances of a resource | S1 | "Horizontal scaling , also called scaling out and in, means adding or removing instances of a resource." |
| 2 | Vertical scaling changes the capacity of one resource, for example a larger VM | S1 | "means to change the capacity of a resource. For example, you could move an application to a larger virtual machine size." |
| 3 | Existing instances keep serving while new ones start, but this depends on the app design and the traffic routing | S1 | "Existing instances can continue serving requests while new instances start, but continuity depends on application design, traffic routing, and safe instance removal." |
| 4 | Data stores must be checked separately; their limits differ from compute | S1 | "Evaluate the capacity of dependent data stores and messaging services separately. Their scaling models and limits can differ from those of compute services" |
| 5 | A load balancer distributes traffic across targets and routes only to healthy targets | S5 | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets" / "It monitors the health of its registered targets, and routes traffic only to the healthy targets." |
| 6 | Replace one large resource with many small ones to reduce the impact of one failure | S3 | "Replace one large resource with multiple small resources to reduce the impact of a single failure on the overall workload." |
| 7 | Scaling out can improve reliability | S2 | "Scaling out can improve your application's reliability." |
| 8 | If the database is the bottleneck, more web servers do not help | S2 | "if your backend database is the bottleneck, it won't help to add more web servers." |
| 9 | Any instance must be able to handle any request | S2 | "Make sure that any instance can handle any request." |
| 10 | Session state in memory causes stickiness, and stickiness limits scale-out | S2 | "Stickiness limits the application's ability to scale out." / "Causes of stickiness include storing session state in memory" |
| 11 | For a predictable workload, scale out on a schedule, for example in business hours | S2 | "If the application has a predictable, regular workload, scale out on a schedule. For example, scale out during business hours." |
| 12 | A rolling update gives zero downtime by replacing old instances with new ones step by step | S4 | "A rolling update allows a Deployment update to take place with zero downtime. It does this by incrementally replacing the current Pods with new ones." |
| 13 | The app must handle instance removal (scale in); Microsoft lists ways: shut down cleanly, put work on a queue | S2 | "The application must gracefully handle instances being removed." / "Listen for shutdown events (when available) and shut down cleanly." / "Put work items on a queue so that another instance can pick up the work" |

## Owner claims with no public source

- "Not using centralized logs" and "inconsistent environment variables or configuration across servers" (owner's Common mistakes). These are kept as the tutorial's own advice, with no cite.
