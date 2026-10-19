# Vertical Scaling (Architecture module, part 04) — research notes (2026-10-20)

Base text: the owner's notes (`architecture-owner-notes.md`), section "Vertical Scaling" with its "When", "Real Life Example", and "Common Mistakes" parts. The owner's notes get no `<Cite>`. The LMS upgrade example (2 CPU / 4 GB to 8 CPU / 16 GB), the common mistakes (except where a cite is given), and the tester tips are the tutorial's own words.

Fetch note: the two Microsoft Learn pages were fetched with WebFetch (full Markdown text). The Amazon Lightsail page, the Google Cloud page, the Google SRE page, and the MySQL manual page were downloaded with `curl` and converted to plain text, and each quote was copied from that text. The raw text is not committed.

## Sources

S1. Autoscaling guidance — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling — accessed 2026-10-20
S2. Architecture strategies for optimizing scaling and partitioning — Microsoft Learn (Azure Well-Architected Framework) — https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/scale-partition — accessed 2026-10-20
S3. Design reliable infrastructure for your workloads in Google Cloud — Google Cloud Architecture Center — https://docs.cloud.google.com/architecture/infra-reliability-guide/design — accessed 2026-10-20
S4. Site Reliability Engineering, Chapter 6: Monitoring Distributed Systems — Google (sre.google) — https://sre.google/sre-book/monitoring-distributed-systems/ — accessed 2026-10-20
S5. MySQL 8.4 Reference Manual, 7.4.5 The Slow Query Log — Oracle (dev.mysql.com) — https://dev.mysql.com/doc/refman/8.4/en/slow-query-log.html — accessed 2026-10-20
S6. Virtual private server instances in Lightsail — Amazon Lightsail Documentation (AWS) — https://docs.aws.amazon.com/lightsail/latest/userguide/understanding-instances-virtual-private-servers-in-amazon-lightsail.html — accessed 2026-10-20

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Vertical scaling, also called scaling up, means changing the capacity of a resource | S1 | "Vertical scaling, also called scaling up and down, means to change the capacity of a resource." |
| 2 | Example: move the app to a larger virtual machine size | S1 | "For example, you could move an application to a larger virtual machine size." |
| 3 | Vertical scaling adds compute capacity to existing resources | S2 | "Vertical scaling: A scaling approach that adds compute capacity to existing resources." |
| 4 | Vertical scaling increases the capacity of a single resource, e.g. a larger server or instance size; useful when more processing power or memory helps | S2 | "Using vertical scaling, you can increase the capacity of a single resource, such as upgrading to a larger server or instance size. Vertical scaling is useful when the workload can benefit from increased processing power, memory, or other resources within a single instance." |
| 5 | Fits workloads not easily divided, or when the architecture does not support horizontal scaling | S2 | "Vertical scaling is appropriate for workloads that aren't easily divided into smaller parts or when the application architecture doesn't support horizontal scaling." |
| 6 | Vertical scaling often requires the system to be temporarily unavailable | S1 | "Vertical scaling often requires making the system temporarily unavailable while it's being redeployed." |
| 7 | Every resource has an upper scale limit | S2 | "Every resource has an upper scale limit." |
| 8 | Vertical scaling can cost more, because the resources are larger | S2 | "Vertical scaling might involve higher costs due to the need for larger and more powerful resources." |
| 9 | Horizontal scaling adds instances; improved resiliency | S2 | "Using horizontal scaling, you can add more instances or resources to distribute the workload across multiple servers. Horizontal scaling offers benefits such as improved resiliency, increased capacity" |
| 10 | Single VM crash makes the stack unavailable; SPOF | S3 | "For example, if the application tier runs on a single VM, and if the VM crashes, then the entire stack is effectively unavailable. Such a component is a single point of failure (SPOF)." |
| 11 | More resources do not guarantee better performance | S1 | "Adding resources to a system or running more instances of a process doesn't guarantee improved performance." |
| 12 | Identify the bottleneck first; a database can limit throughput | S1 | "Identify the bottleneck before adding compute capacity. A database, message broker, or downstream API might limit throughput even when more compute instances are available." |
| 13 | Saturation: show the most constrained resource (memory, I/O) | S4 | "A measure of your system fraction, emphasizing the resources that are most constrained (e.g., in a memory-constrained system, show memory; in an I/O-constrained system, show I/O)." |
| 14 | Many systems slow down before 100% utilization | S4 | "Note that many systems degrade in performance before they achieve 100% utilization, so having a utilization target is essential." |
| 15 | The slow query log records statements that take more than long_query_time seconds | S5 | "The slow query log consists of SQL statements that take more than long_query_time seconds to execute and require at least min_examined_row_limit rows to be examined." |
| 16 | Slow queries found this way are candidates for optimization | S5 | "The slow query log can be used to find queries that take a long time to execute and are therefore candidates for optimization." |
| 17 | The slow query log is off by default | S5 | "By default, the slow query log is disabled." |
| 18 | A VPS is a virtual private server, also called a virtual machine | S6 | "Your Lightsail instance is a virtual private server (also called a virtual machine)." |
| 19 | Horizontal scaling means adding instances of a resource | S1 | "Horizontal scaling, also called scaling out and in, means adding or removing instances of a resource." |

## Owner claims with no source

| Owner claim | What the page does |
|---|---|
| "It is often the first practical scaling step because it does not require a large architecture rewrite." | Kept as the tutorial's own view, and the page now says so ("In this tutorial's view"). Claim 5 (S2) supports the nearby fact that it fits apps whose architecture does not support horizontal scaling. |
| "The engineering team is not ready to manage distributed architecture yet." | Kept in the "When you need it" list as the tutorial's own advice. No cite. |
