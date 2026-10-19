# Fact-check: Single Server Architecture (round 1, 2026-10-20)

An agent that did not write the page did this check. I downloaded each source with `curl` (AWS, nginx.org, Google Cloud, sre.google, Microsoft Learn) and converted it to plain text. I copied each quote from that text. I checked each cited sentence against the page text. The page has 6 sources. Each source has 1 or more cites, and each cite points to a source. The corner-shop lede, the list of parts, the "common and practical" list, the training-institute example, the "When you need it" list, the common mistakes without a cite, and the tester tips are the tutorial's own words. "All parts share the same CPU, RAM, disk, and network, so one busy part can slow down the others" is the tutorial's own reasoning and names no product behavior. Key words rows for everyday terms (server, web server, backup, MVP) are plain glosses. Rows that repeat a cited body definition (proxy, SPOF) use the body cite.

| # | Location (heading) | Claim (short) | Cite | Verdict | Quote / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | VPS = virtual private server, also called a virtual machine | 1 | PASS | "Your Lightsail instance is a virtual private server (also called a virtual machine)." |
| 2 | In plain words | Lightsail instance is a VPS; you choose an OS image when you create it | 1 | PASS | "When you create your instance, you choose an image that has an operating system (OS) on it." |
| 3 | In plain words | Nginx serves files such as images and static HTML pages | 2 | PASS | "An important web server task is serving out files (such as images or static HTML pages)." |
| 4 | In plain words | Nginx as a proxy: receives, passes on, sends responses back | 2 | PASS | "setting it up as a proxy server, which means a server that receives requests, passes them to the proxied servers, retrieves responses from them, and sends them to the clients." |
| 5 | In plain words | Single-zone design suits workloads that can tolerate downtime | 3 | PASS | "Single-zone Workloads that can tolerate downtime or can be deployed at another location when necessary with minimal effort." |
| 6 | In plain words | Dependence on one resource: its failure can affect the whole system | 3 | PASS | "If any component of this application stack depends on a single infrastructure resource, a failure of that resource can affect the availability of the entire stack." |
| 7 | In plain words | Single VM crash makes the stack unavailable (SPOF) | 3 | PASS | "if the application tier runs on a single VM, and if the VM crashes, then the entire stack is effectively unavailable. Such a component is a single point of failure (SPOF)." |
| 8 | In plain words | Every resource has an upper limit | 6 | PASS | "Every resource has an upper scale limit." |
| 9 | Common mistakes | "Assuming that a backup exists" is a common anti-pattern | 5 | PASS | "Common anti-patterns: ... Assuming that a backup exists." |
| 10 | Common mistakes | Restore backups from time to time; check data is complete and not corrupted | 5 | PASS | "Periodically restore backups to a new location and run tests to verify the integrity of the data. Some common tests that should be performed are checking if all data is available, is not corrupted" |
| 11 | Common mistakes | Monitoring should warn early: "fill its hard drive in 4 hours" | 4 | PASS | "saturation is also concerned with predictions of impending saturation, such as \"It looks like your database will fill its hard drive in 4 hours.\"" |
| 12 | Common mistakes | Every resource has a limit | 6 | PASS | "Every resource has an upper scale limit." |
| 13 | Common mistakes | Separate components let you isolate failures | 6 | PASS | "By decoupling components, you can isolate failures and minimize the effect on the overall application." |
| 14 | Key words | VPS definition | 1 | PASS | Same quote as row 1. |
| 15 | Key words | Saturation: how "full" a resource is | 4 | PASS | "Saturation How \"full\" your service is. A measure of your system fraction, emphasizing the resources that are most constrained" |
| 16 | Key words | Tightly coupled | 6 | FAIL→fixed | A term with no cite. Added "Decoupled parts can change without an effect on the others" with cite 6. Quote: "Changes or updates to one component can be made without affecting the others because they're independent." |
| 17 | What a tester can check | Callout says it is tutorial advice | – | PASS | "These test ideas are the tutorial's own advice." |

## Fixes

1. "Tightly coupled" key word: added the decoupling sentence with cite 6.
2. Notes: added claim 14.

Open FAILs: 0
