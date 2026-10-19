# Single Server Architecture (Architecture module, part 03) — research notes (2026-10-20)

Base text: the owner's notes (`architecture-owner-notes.md`), section "Single Server Architecture" with its "When", "Real Life Example", and "Common Mistakes" parts. The owner's notes get no `<Cite>`. The training-institute example, the common mistakes (except where a cite is given), and the tester tips are the tutorial's own words.

Fetch note: the Microsoft Learn page and the AWS REL09-BP04 page were fetched with WebFetch (full Markdown text). The Amazon Lightsail page, the NGINX guide, the Google Cloud page, and the Google SRE page were downloaded with `curl` and converted to plain text, and each quote was copied from that text. The raw text is not committed.

## Sources

S1. Virtual private server instances in Lightsail — Amazon Lightsail Documentation (AWS) — https://docs.aws.amazon.com/lightsail/latest/userguide/understanding-instances-virtual-private-servers-in-amazon-lightsail.html — accessed 2026-10-20
S2. Beginner's Guide — nginx documentation (nginx.org) — https://nginx.org/en/docs/beginners_guide.html — accessed 2026-10-20
S3. Design reliable infrastructure for your workloads in Google Cloud — Google Cloud Architecture Center — https://docs.cloud.google.com/architecture/infra-reliability-guide/design — accessed 2026-10-20
S4. Site Reliability Engineering, Chapter 6: Monitoring Distributed Systems — Google (sre.google) — https://sre.google/sre-book/monitoring-distributed-systems/ — accessed 2026-10-20
S5. REL09-BP04 Perform periodic recovery of the data to verify backup integrity and processes — AWS Well-Architected Framework, Reliability Pillar — https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_backing_up_data_periodic_recovery_testing_data.html — accessed 2026-10-20
S6. Architecture strategies for optimizing scaling and partitioning — Microsoft Learn (Azure Well-Architected Framework) — https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/scale-partition — accessed 2026-10-20

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | A VPS is a virtual private server, also called a virtual machine (Lightsail instance as the example) | S1 | "Your Lightsail instance is a virtual private server (also called a virtual machine)." |
| 2 | When you create the VPS, you choose an image with an operating system | S1 | "When you create your instance, you choose an image that has an operating system (OS) on it." |
| 3 | A web server such as nginx serves files such as images and static HTML pages | S2 | "An important web server task is serving out files (such as images or static HTML pages)." |
| 4 | nginx as a proxy: receives requests, passes them on, sends responses back to clients | S2 | "One of the frequent uses of nginx is setting it up as a proxy server, which means a server that receives requests, passes them to the proxied servers, retrieves responses from them, and sends them to the clients." |
| 5 | A single-zone design suits workloads that can tolerate downtime | S3 | "Single-zone Workloads that can tolerate downtime or can be deployed at another location when necessary with minimal effort." |
| 6 | If a component depends on a single resource, its failure can affect the whole stack | S3 | "If any component of this application stack depends on a single infrastructure resource, a failure of that resource can affect the availability of the entire stack." |
| 7 | Single VM crash makes the stack unavailable; such a component is a SPOF | S3 | "For example, if the application tier runs on a single VM, and if the VM crashes, then the entire stack is effectively unavailable. Such a component is a single point of failure (SPOF)." |
| 8 | Every resource has an upper scale limit | S6 | "Every resource has an upper scale limit. If you need to go beyond scale limits, you should partition your workload." |
| 9 | Decoupled components can scale on their own; isolate failures | S6 | "By decoupling components, you can isolate failures and minimize the effect on the overall application." |
| 10 | Saturation shows how "full" the service is, and the most constrained resource | S4 | "Saturation How "full" your service is. A measure of your system fraction, emphasizing the resources that are most constrained (e.g., in a memory-constrained system, show memory; in an I/O-constrained system, show I/O)." |
| 11 | Monitoring should predict a full disk, e.g. "fill its hard drive in 4 hours" | S4 | "also concerned with predictions of impending saturation, such as "It looks like your database will fill its hard drive in 4 hours."" |
| 12 | "Assuming that a backup exists" is a common anti-pattern | S5 | "Common anti-patterns: ... Assuming that a backup exists." |
| 13 | Restore backups periodically to check that the data is there and not corrupted | S5 | "Periodically restore backups to a new location and run tests to verify the integrity of the data." |
| 14 | Decoupled components can change without affecting the others (Key words, "Tightly coupled") | S6 | "Changes or updates to one component can be made without affecting the others because they're independent." |

## Owner claims with no source

| Owner claim | What the page does |
|---|---|
| Single server is "common and practical" for small apps, MVPs, internal tools, portfolio sites, small LMS platforms | Kept as the tutorial's own advice. Claim 5 (S3) supports the related fact that a single-zone design suits workloads that can tolerate downtime. |
| For 200–500 students the setup is cheap, simple, easy to debug; at 5,000–10,000 visitors CPU and RAM fill up | The owner's LMS example. It is the tutorial's own example and has no cite. |
