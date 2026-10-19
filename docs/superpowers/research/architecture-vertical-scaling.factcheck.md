# Fact-check: Vertical Scaling (round 1, 2026-10-20)

An agent that did not write the page did this check. I downloaded the Microsoft Learn, Google Cloud, sre.google, and AWS sources with `curl` and converted them to plain text. The MySQL manual returned HTTP 403 to `curl`, so I read it with WebFetch. I copied each quote from that text. I checked each cited sentence against the page text. The page has 6 sources. Each source has 1 or more cites, and each cite points to a source. The car lede, the "When you need it" list, the LMS upgrade example (2 CPU / 4 GB to 8 CPU / 16 GB), the common mistakes without a cite, and the tester tips are the tutorial's own words. "So a CPU at 85% can already mean slow pages" is the tutorial's own example from the cited SRE sentence. Key words rows for everyday terms (bottleneck, disk I/O, instance size, baseline) are plain glosses. Rows that repeat a cited body definition use the body cite.

| # | Location (heading) | Claim (short) | Cite | Verdict | Quote / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | Vertical scaling, also called scaling up, changes the capacity of a resource | 1 | PASS | "Vertical scaling, also called scaling up and down, means to change the capacity of a resource." |
| 2 | In plain words | Example: move the app to a larger VM size | 1 | PASS | "For example, you could move an application to a larger virtual machine size." |
| 3 | In plain words | Adds compute capacity to existing resources | 2 | PASS | "Vertical scaling A scaling approach that adds compute capacity to existing resources." |
| 4 | In plain words | Often the first practical scaling step, because the code and architecture stay the same | – | FAIL→fixed | A claim with no source, not marked as a view. Now "In this tutorial's view, it is often the first practical scaling step, because the code and the architecture can stay the same." |
| 5 | In plain words | Useful when more processing power or memory in one instance helps | 2 | PASS | "Vertical scaling is useful when the workload can benefit from increased processing power, memory, or other resources within a single instance." |
| 6 | In plain words | Fits work that is not easy to divide, or no horizontal-scaling support | 2 | PASS | "Vertical scaling is appropriate for workloads that aren't easily divided into smaller parts or when the application architecture doesn't support horizontal scaling." |
| 7 | In plain words | Horizontal scaling means adding instances of a resource | 1 | FAIL→fixed | Was "adding more machines" with no cite. Now "adding more instances of a resource" with cite 1. Quote: "Horizontal scaling, also called scaling out and in, means adding or removing instances of a resource." |
| 8 | In plain words | Downtime: a resize often makes the system temporarily unavailable | 1 | PASS | "Vertical scaling often requires making the system temporarily unavailable while it's being redeployed." |
| 9 | In plain words | A ceiling: every resource has an upper scale limit | 2 | PASS | "Every resource has an upper scale limit." |
| 10 | In plain words | Larger resources can cost more | 2 | PASS | "Vertical scaling might involve higher costs due to the need for larger and more powerful resources." |
| 11 | In plain words | Single VM crash makes the system unavailable (SPOF) | 3 | PASS | "if the application tier runs on a single VM, and if the VM crashes, then the entire stack is effectively unavailable. Such a component is a single point of failure (SPOF)." |
| 12 | In plain words | Horizontal scaling gives better resiliency | 2 | PASS | "Horizontal scaling offers benefits such as improved resiliency, increased capacity" |
| 13 | In plain words | Adding resources does not guarantee better performance | 1 | PASS | "Adding resources to a system or running more instances of a process doesn't guarantee improved performance." |
| 14 | In plain words | Find the bottleneck first; a database can limit throughput | 1 | PASS | "Identify the bottleneck before adding compute capacity. A database, message broker, or downstream API might limit throughput even when more compute instances are available." |
| 15 | When you need it | Watch the most constrained resource (memory, I/O) | 4 | PASS | "emphasizing the resources that are most constrained (e.g., in a memory-constrained system, show memory; in an I/O-constrained system, show I/O)." |
| 16 | When you need it | Many systems slow down before 100% use | 4 | PASS | "Note that many systems degrade in performance before they achieve 100% utilization" |
| 17 | A real-life example | VPS = virtual private server, also called a virtual machine | 6 | PASS | "Your Lightsail instance is a virtual private server (also called a virtual machine)." |
| 18 | Common mistakes | Slow query log records statements over `long_query_time` seconds | 5 | PASS | "The slow query log consists of SQL statements that take more than long_query_time seconds to execute and require at least min_examined_row_limit rows to be examined." The page leaves out the row limit. This is a simplification, not an error. |
| 19 | Common mistakes | These queries are candidates for optimization | 5 | PASS | "The slow query log can be used to find queries that take a long time to execute and are therefore candidates for optimization." |
| 20 | Common mistakes | The log is disabled by default | 5 | PASS | "By default, the slow query log is disabled." |
| 21 | Common mistakes | Every resource has a limit | 2 | PASS | "Every resource has an upper scale limit." |
| 22 | Common mistakes | A resize can make the system unavailable for a short time | 1 | PASS | Same quote as row 8. |
| 23 | Key words | Saturation | 4 | PASS | "Saturation How \"full\" your service is." |
| 24 | What a tester can check | Callout says it is tutorial advice | – | PASS | "These test ideas are the tutorial's own advice." |

## Fixes

1. "It is often the first practical scaling step" is now marked as the tutorial's view.
2. Horizontal scaling definition: "adding more instances of a resource" with cite 1.
3. Notes: added claim 19 and updated the "Owner claims with no source" row.

Open FAILs: 0
