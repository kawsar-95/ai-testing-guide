# Fact-check: Horizontal Scaling (round 1, 2026-10-20)

I did not write this page. I downloaded each of the 5 sources with `curl -sL` on 2026-10-20 and converted them to plain text in the scratchpad (not committed). I matched each cited sentence of the page against that text, not only against the quotes in the notes. All 5 sources are official vendor or project docs (Microsoft Learn, AWS, Kubernetes). Each source has a cite, and each cite has a source. The LMS example, the "Common mistakes" advice, and the tester tips are the tutorial's own words (spec section 4). I found 3 FAILs and fixed them.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | Horizontal scaling (scaling out) adds instances; scaling in removes them when demand goes down | 1 | PASS | "Horizontal scaling, also called scaling out and in, means adding or removing instances of a resource." / "When demand drops, scale in only when the remaining instances can handle the load" |
| 2 | In plain words | Vertical scaling makes one machine bigger, for example a larger VM | 1 | PASS | "Vertical scaling, also called scaling up and down, means to change the capacity of a resource. For example, you could move an application to a larger virtual machine size." |
| 3 | In plain words | A load balancer spreads requests and sends traffic only to healthy servers | 5 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets" / "routes traffic only to the healthy targets." |
| 4 | In plain words | More servers can make the system more reliable | 2 | PASS | "Scaling out can improve your application's reliability." |
| 5 | In plain words | Replace one large resource with many small ones, so one failure has a smaller effect | 3 | PASS | "Replace one large resource with multiple small resources to reduce the impact of a single failure on the overall workload." |
| 6 | In plain words | If the database is the slow part, more web servers do not help | 2 | PASS | "if your backend database is the bottleneck, it won't help to add more web servers." |
| 7 | In plain words | Check data stores separately; their limits differ from app servers | 1 | FAIL→fixed | Was "their limits are not the same as" (the source says "can differ"). Now "their scaling limits can differ from the limits of the app servers". Quote: "Evaluate the capacity of dependent data stores and messaging services separately. Their scaling models and limits can differ from those of compute services" |
| 8 | In plain words | Continuity depends on app design and traffic routing | 1 | FAIL→fixed | Was "new servers help only if the application is designed for them. Continuity depends on the application design and on how the traffic is routed" (the first sentence is not in the source, and the third factor was left out). Now "the old servers can continue to serve requests while new servers start. But this depends on the application design, on how the traffic is routed, and on the safe removal of servers". Quote: "Existing instances can continue serving requests while new instances start, but continuity depends on application design, traffic routing, and safe instance removal." |
| 9 | When you need it | Any server can handle any request | 2 | PASS | "Make sure that any instance can handle any request." |
| 10 | When you need it | Predictable load: scale out on a schedule, for example in business hours | 2 | PASS | "If the application has a predictable, regular workload, scale out on a schedule. For example, scale out during business hours." |
| 11 | When you need it | A rolling update replaces old instances step by step with zero downtime | 4 | PASS | "A rolling update allows a Deployment update to take place with zero downtime. It does this by incrementally replacing the current Pods with new ones." |
| 12 | Common mistakes | Session state in memory causes stickiness; stickiness limits scale-out | 2 | PASS | "Stickiness limits the application's ability to scale out." / "Causes of stickiness include storing session state in memory" |
| 13 | Common mistakes | On scale-in: shut down cleanly; put work on a queue | 2 | FAIL→fixed | Was "It must shut down cleanly, and a queue must let another instance pick up the unfinished work" (the source gives these as ways, not as musts). Now "Microsoft gives ways to do this: shut down cleanly, and put work items on a queue ...". Quote: "The application must gracefully handle instances being removed. Here are some ways to handle scalein: Listen for shutdown events (when available) and shut down cleanly." / "Put work items on a queue so that another instance can pick up the work" |
| 14 | When you need it / Key words | Definitions of instance, high availability, bottleneck, stickiness | – | PASS | General definitions. Stickiness matches S2: "Stickiness, or session affinity, is when requests from the same client are always routed to the same server." |

## Fixes

- Row 7: "are not the same as" changed to "can differ from".
- Row 8: removed the unsourced "new servers help only if ..." and stated the full source claim (app design, traffic routing, safe removal).
- Row 13: the scale-in actions are now ways that Microsoft gives, not musts.
- Notes: claim 13 reworded to match.

Open FAILs: 0
