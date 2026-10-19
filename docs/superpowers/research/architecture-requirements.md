# Functional and Non-functional Requirements (Architecture module, part 02) — research notes (2026-10-20)

Base text: the owner's notes (`architecture-owner-notes.md`), section "Functional vs Non-functional Requirements" with its "When", "Real Life Example", and "Common Mistakes" parts. The owner's notes get no `<Cite>`. The LMS example, the rewritten LMS requirement, the common mistakes, and the tester tips are the tutorial's own words.

Fetch note: the Microsoft Learn pages were fetched with WebFetch (full Markdown text). The Google SRE page and the AWS REL13 page were downloaded with `curl` and converted to plain text, and each quote was copied from that text. The raw text is not committed.

## Sources

S1. Identify non-functional requirements — Microsoft Learn (Training module "Work with requirements") — https://learn.microsoft.com/en-us/training/modules/work-with-requirements/4-non-functional-requirements — accessed 2026-10-20
S2. Azure Well-Architected Framework workloads — Microsoft Learn — https://learn.microsoft.com/en-us/azure/well-architected/workloads — accessed 2026-10-20
S3. Architecture strategies for identifying and rating flows — Microsoft Learn (Azure Well-Architected Framework) — https://learn.microsoft.com/en-us/azure/well-architected/reliability/identify-flows — accessed 2026-10-20
S4. Site Reliability Engineering, Chapter 4: Service Level Objectives — Google (sre.google) — https://sre.google/sre-book/service-level-objectives/ — accessed 2026-10-20
S5. Architecture strategies for performing failure mode analysis — Microsoft Learn (Azure Well-Architected Framework) — https://learn.microsoft.com/en-us/azure/well-architected/reliability/failure-mode-analysis — accessed 2026-10-20
S6. REL13-BP01 Define recovery objectives for downtime and data loss — AWS Well-Architected Framework, Reliability Pillar — https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_objective_defined_recovery.html — accessed 2026-10-20

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Requirements are commonly split into functional and non-functional | S1 | "Requirements are commonly referred to as either functional or non-functional." |
| 2 | Functional requirements describe what the solution must do, its behavior | S1 | "Functional requirements describe what the solution needs to do or its behaviors" |
| 3 | Non-functional requirements describe non-behavior aspects such as performance | S1 | "non-functional requirements describe non-behavior aspects of the solution such as performance requirements." |
| 4 | Common non-functional types: availability, compliance, data retention, performance, privacy, recovery time, security, scalability | S1 | "Examples of common non-functional requirement types include:" followed by the list items "Availability", "Compliance/regulatory", "Data retention/residency", "Performance (response time, and so on)", "Privacy", "Recovery time", "Security", "Scalability" |
| 5 | Non-functional requirements support the architecture and operational viability; users might not care directly | S1 | "Non-functional requirements capture the elements that users might not directly care about but are important to support the proposed architecture and operational viability of the solution." |
| 6 | Non-functional requirements should be prioritized | S1 | "As with functional requirements, non-functional should be prioritized and can be delivered incrementally." |
| 7 | Architects design to meet both functional and non-functional requirements | S2 | "Architects design workloads to achieve functional and nonfunctional business requirements, and a workload team implements them." |
| 8 | A good workload has requirements that are defined and prioritized | S2 | "Has functional and nonfunctional requirements that are defined and prioritized to achieve a goal." |
| 9 | A good example: screen load time less than three seconds | S1 | "Average screen load time for internal users that are not mobile will be less than three seconds." |
| 10 | A good example: 100 concurrent users | S1 | "External portal must be able to handle 100 concurrent users who are performing case submission." |
| 11 | A bad example: "as fast as possible"; "handle peak traffic" | S1 | "All screens in the app should load as fast as possible." / "External portal must be able to handle peak traffic." |
| 12 | A requirement with a measurement must say how it is measured | S1 | "When a non-functional requirement involves a measurement, it should specify how it will be measured and compared for compliance." |
| 13 | 99.999% availability is not realistic when the core app has 99.9% | S1 | "For example, specifying 99.999 percent availability when the core app availability is 99.9 percent isn't realistic." |
| 14 | SLI definition | S4 | "An SLI is a service level indicator—a carefully defined quantitative measure of some aspect of the level of service that is provided." |
| 15 | SLO definition | S4 | "An SLO is a service level objective: a target value or range of values for a service level that is measured by an SLI." |
| 16 | Request latency is a key SLI for most services | S4 | "Most services consider request latency—how long it takes to return a response to a request—as a key SLI." |
| 17 | Percentiles are preferred to the average; the 99th percentile shows a plausible worst case | S4 | "We generally prefer to work with percentiles rather than the mean (arithmetic average) of a set of values." / "a high-order percentile, such as the 99th or 99.9th, shows you a plausible worst-case value" |
| 18 | High-criticality flows affect customer experience and financial transactions | S3 | "High criticality flows are integral to core business functions. They directly affect critical aspects of a business such as customer experience, financial transactions, security protocols, human health, and safety." |
| 19 | Low-criticality flows include optional features such as feedback surveys | S3 | "Examples include ancillary processes like nightly log transfers or optional user features such as feedback surveys." |
| 20 | Use a criticality scale to prioritize flows | S3 | "Use a criticality scale based on your business requirements to prioritize the flows." |
| 21 | External dependencies such as third-party services must be identified | S5 | "External dependencies are required components outside the scope of the workload, such as another application or third-party service." / "Identify and document the dependencies in your workload" |
| 22 | RTO definition | S6 | "Recovery Time Objective (RTO) is the maximum acceptable delay between the interruption of service and restoration of service." |
| 23 | RPO definition | S6 | "Recovery Point Objective (RPO) is the maximum acceptable time after the last data recovery point." |
| 24 | Percentile example: 99% of calls complete in less than 100 ms (Key words) | S4 | "99% of Get RPC calls will complete in less than 100 ms." |
| 25 | RTO and RPO are set for each workload, for downtime and data loss | S6 | "define a Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for each workload." / title "Define recovery objectives for downtime and data loss" |

## Owner claims with no source

| Owner claim | What the page does |
|---|---|
| "Architecture decisions are mostly driven by non-functional requirements." | No official source says "mostly". The page keeps the idea as the tutorial's own view and says so ("In this tutorial's view"). Next to it, claim 7 (S2) supports the weaker fact that architects design for both kinds. |
| The owner's NFR list adds reliability, maintainability, observability, and cost control to the S1 list | The page gives the S1 list with a cite, then says that this module also adds these four. No cite for the addition. |
