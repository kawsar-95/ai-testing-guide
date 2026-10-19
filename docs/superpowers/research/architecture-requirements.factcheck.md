# Fact-check: Functional and Non-functional Requirements (round 1, 2026-10-20)

An agent that did not write the page did this check. I downloaded each source with `curl` (Microsoft Learn, sre.google, AWS) and converted it to plain text. I copied each quote from that text. I checked each cited sentence against the page text. The page has 6 sources. Each source has 1 or more cites, and each cite points to a source. The pizza lede, the LMS example, the measurable LMS requirement, the common mistakes, and the tester tips are the tutorial's own words. "In this tutorial's view, the non-functional side drives most architecture choices" is marked as a view. Key words rows that repeat a cited body definition (SLI, SLO, latency, criticality, external dependency, RTO, RPO) use the body cite.

| # | Location (heading) | Claim (short) | Cite | Verdict | Quote / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | Requirements are commonly split into two kinds | 1 | PASS | "Requirements are commonly referred to as either functional or non-functional." |
| 2 | In plain words | Functional: what the system must do, its behavior | 1 | PASS | "Functional requirements describe what the solution needs to do or its behaviors" |
| 3 | In plain words | Non-functional: non-behavior parts such as performance | 1 | PASS | "non-functional requirements describe non-behavior aspects of the solution such as performance requirements." The plain gloss "how well the system must work" comes before this cited sentence. |
| 4 | In plain words | Types: availability, compliance, data retention, performance, privacy, recovery time, security, scalability | 1 | PASS | "Examples of common non-functional requirement types include: Availability Compliance/regulatory Data retention/residency Performance (response time, and so on) Privacy Recovery time Security Scalability" |
| 5 | In plain words | Users might not care directly, but they are important for the architecture and operations | 1 | PASS | "Non-functional requirements capture the elements that users might not directly care about but are important to support the proposed architecture and operational viability of the solution." |
| 6 | In plain words | Architects design for both functional and non-functional requirements | 2 | PASS | "Architects design workloads to achieve functional and nonfunctional business requirements, and a workload team implements them." |
| 7 | Make each requirement measurable | Good and bad examples (table) | 1 | PASS | "The following examples are of well-composed non-functional requirements: Average screen load time for internal users that are not mobile will be less than three seconds. External portal must be able to handle 100 concurrent users who are performing case submission." / "poorly worded ... All screens in the app should load as fast as possible. External portal must be able to handle peak traffic." |
| 8 | Make each requirement measurable | A measured requirement should say how it is measured | 1 | FAIL→fixed | Was "it must also say". The source says "should". Now "it should also say". Quote: "When a non-functional requirement involves a measurement, it should specify how it will be measured and compared for compliance." |
| 9 | Make each requirement measurable | 99.999% is not realistic when the core app has 99.9% | 1 | PASS | "specifying 99.999 percent availability when the core app availability is 99.9 percent isn't realistic." |
| 10 | Make each requirement measurable | SLI definition | 4 | PASS | "An SLI is a service level indicator—a carefully defined quantitative measure of some aspect of the level of service that is provided." |
| 11 | Make each requirement measurable | SLO definition | 4 | PASS | "An SLO is a service level objective: a target value or range of values for a service level that is measured by an SLI." |
| 12 | Make each requirement measurable | Request latency is a key SLI for most services | 4 | PASS | "Most services consider request latency—how long it takes to return a response to a request—as a key SLI." |
| 13 | Make each requirement measurable | Percentiles are preferred; the 99th shows a plausible worst case | 4 | PASS | "We generally prefer to work with percentiles rather than the mean (arithmetic average) of a set of values." / "a high-order percentile, such as the 99th or 99.9th, shows you a plausible worst-case value" |
| 14 | When you need it | External dependencies must be found and documented | 5 | PASS | "External dependencies are required components outside the scope of the workload, such as another application or third-party service." / "Identify and document the dependencies in your workload" |
| 15 | When you need it | AWS asks for two recovery targets | 6 | PASS | "define a Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for each workload." |
| 16 | When you need it | RTO definition | 6 | PASS | "Recovery Time Objective (RTO) is the maximum acceptable delay between the interruption of service and restoration of service." |
| 17 | When you need it | RPO definition; it limits data loss | 6 | PASS | "Recovery Point Objective (RPO) is the maximum acceptable time after the last data recovery point." The page title is "Define recovery objectives for downtime and data loss". |
| 18 | A real-life example | Criticality scale to order flows | 3 | PASS | "Use a criticality scale based on your business requirements to prioritize the flows." |
| 19 | A real-life example | High criticality: customer experience, financial transactions | 3 | PASS | "They directly affect critical aspects of a business such as customer experience, financial transactions, security protocols, human health, and safety." |
| 20 | A real-life example | Low criticality: optional features such as feedback surveys | 3 | PASS | "optional user features such as feedback surveys." |
| 21 | Key words | Percentile definition | 4 | FAIL→fixed | Had no cite. Now the row gives the SRE example with cite 4. Quote: "99% of Get RPC calls will complete in less than 100 ms." |
| 22 | What a tester can check | Callout says it is tutorial advice | – | PASS | "These test ideas are the tutorial's own advice." |

## Fixes

1. "must also say how you will measure it" changed to "should also say", to match the source.
2. Percentile key word: replaced the uncited sentence with the SRE example and cite 4.
3. Notes: added claims 24 and 25.

Open FAILs: 0
