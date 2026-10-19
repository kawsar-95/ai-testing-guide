# Monolith, Modular Monolith, and Microservices (Architecture module, part 18) — research notes (2026-10-20)

Base text: the owner's notes, section "Monolith, Modular Monolith, and Microservices" (`architecture-owner-notes.md`). The owner's notes get no cite. The LMS example, the "Common mistakes" advice, and the tester tips are the tutorial's own words.

Fetch note: each source was downloaded with `curl` and converted to plain text in the scratch folder. Each quote below is copied from that text. The text is not committed.

Source note: no official vendor page found defines "modular monolith" as a term. AWS Well-Architected (S3) says that a monolith must be modular, and Azure (S6) says to keep clear borders between parts so that each part can move later. The page cites those two statements and gives the definition of "modular monolith" in the tutorial's own words, with no cite.

AWS and the owner differ on one point. The owner says a monolith is often the best start. AWS Well-Architected (S3) says "Monolithic architecture should be avoided whenever possible", but also allows starting with a modular monolith. The AWS comparison page (S2) says a monolith suits a simple application or a prototype. The page uses S2 and S3 for what they say and keeps the owner's view as tutorial advice.

## Sources

S1. Microservices architecture style — Microsoft Azure Architecture Center — https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices — accessed 2026-10-20

S2. What's the Difference Between Monolithic and Microservices Architecture? — AWS — https://aws.amazon.com/compare/the-difference-between-monolithic-and-microservices-architecture/ — accessed 2026-10-20

S3. REL03-BP01 Choose how to segment your workload — AWS Well-Architected Framework — https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_service_architecture_monolith_soa_microservice.html — accessed 2026-10-20

S4. Use domain analysis to model microservices — Microsoft Azure Architecture Center — https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis — accessed 2026-10-20

S5. Saga distributed transactions pattern — Microsoft Azure Architecture Center — https://learn.microsoft.com/en-us/azure/architecture/patterns/saga — accessed 2026-10-20

S6. Strangler Fig pattern — Microsoft Azure Architecture Center — https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig — accessed 2026-10-20

## Claims

| # | Claim (page wording, short) | Source | Quote |
|---|---|---|---|
| 1 | A monolith uses one code base for many business functions | S2 | "A monolithic architecture is a traditional software development model that uses one code base to perform multiple business functions." |
| 2 | A monolith usually has a UI, a database, and a server-side app, built on one code base | S2 | "Monolithic applications typically consist of a client-side UI, a database, and a server-side application. Developers build all of these modules on a single code base." |
| 3 | A monolith is easier to start; little up-front planning | S2 | "Monolithic applications are easier to start with, as not much up-front planning is required." |
| 4 | A monolith is simpler to deploy | S2 | "Deploying monolithic applications is more straightforward than deploying microservices." |
| 5 | In a monolith, a small change affects many functions, and the team must retest and redeploy the entire system | S2 | "A small change in one part of a monolithic application affects multiple software functions because of the tightly coupled coding. In addition, when developers introduce new changes to a monolithic application, they must retest and redeploy the entire system on the server." |
| 6 | To scale a monolith, you scale the entire application | S2 | "The monolithic architecture contains all functionalities within a single code base, so the entire application must be scaled as requirements change." |
| 7 | A monolith suits a simple application or a prototype | S2 | "The monolithic approach is more suitable when designing a simple application or prototype." |
| 8 | Microservices do not reduce complexity; they reveal it | S2 | "It's important to understand that microservices don't reduce the complexity of an application. Instead, the microservices structure reveals underlying complexities" |
| 9 | Microservices need different skills (cloud, APIs, containers) | S2 | "microservices development needs an understanding of cloud architecture, APIs, containerization, and other expertise specific to modern cloud applications." |
| 10 | Microservices: small, independent services that a small team can own; deployed independently | S1 | "Microservices are small, independent, and loosely coupled components that a single small team of developers can write and maintain." / "Because services can be deployed independently, teams can update existing services without rebuilding or redeploying the entire application." |
| 11 | Each microservice owns its data | S1 | "Each service owns its data and schema." |
| 12 | Services can be scaled independently | S1 | "Scalability: Services can be scaled independently." |
| 13 | Shared database schemas cause coupling | S1 | "Avoid coupling between services. Causes of coupling include shared database schemas and rigid communication protocols." |
| 14 | Microservices have more moving parts; the whole system is more complex | S1 | "A microservices application has more moving parts than the equivalent monolithic application. Each service is simpler, but the entire system as a whole is more complex." |
| 15 | A data change across many services is unlikely to be one ACID transaction | S1 | "When more than one microservice is involved in persisting new or changed data, it's unlikely that the complete data change could be considered an atomic, consistent, isolated, and durable (ACID) transaction." |
| 16 | Microservices need a mature DevOps culture; logs must be correlated across services | S1 | "Management: A successful microservice architecture requires a mature DevOps culture. Correlated logging across services can be challenging." |
| 17 | Use centralized logging, distributed tracing, and metrics for observability | S1 | "Implement centralized logging, distributed tracing (OpenTelemetry), and metrics collection to ensure observability." |
| 18 | Check whether the team has the skills | S1 | "Skill set: Microservices are highly distributed systems. Carefully evaluate whether the team has the skills and experience to be successful." |
| 19 | Design services around business capabilities, not technical layers | S4 | "Design microservices around business capabilities, not horizontal layers like data access or messaging." |
| 20 | If you start with a monolith, make it modular so it can evolve | S3 | "Even if you choose to start with a monolith architecture, you must ensure that it's modular and can ultimately evolve to SOA or microservices as your product scales with user adoption." |
| 21 | The right choice for a new product is different from a workload built to scale | S3 | "What is right for a new product racing to first launch is different than what a workload built to scale from the start needs." |
| 22 | Smaller services add latency, harder debugging, and more operational work | S3 | "However, smaller services can introduce complexities which include possible increased latency, more complex debugging, and increased operational burden." |
| 23 | "Microservice Death Star": services so interdependent that one failure spreads | S3 | "The microservice Death Star is a situation in which the atomic components become so highly interdependent that a failure of one results in a much larger failure, making the components as rigid and fragile as a monolith." |
| 24 | A saga is a sequence of local transactions with compensating transactions on failure | S5 | "Maintain data consistency in distributed systems by coordinating a sequence of local transactions across multiple services. Each service performs its operation and triggers the next step through events or messages. If a step fails, a series of compensating transactions undoes the changes that the completed steps made." |
| 25 | Strangler Fig: replace pieces of the old system step by step | S6 | "Incrementally migrate a legacy system by gradually replacing specific pieces of functionality with new applications and services." |
| 26 | Keep clear borders between parts so each part can move later | S6 | "For example, strive to have clear demarcations between parts of your solution so that you can migrate each part individually." |
| 27 | A monolith is built, tested, and deployed as one unit | S2 | "Developers install the entire application code base and dependencies in a single environment." / "they must retest and redeploy the entire system on the server." |
| 28 | AWS Well-Architected: avoid a monolithic architecture whenever possible (used in the "Tutorial view and the AWS view" callout) | S3 | "Monolithic architecture should be avoided whenever possible." |
| 29 | ACID = atomic, consistent, isolated, and durable | S1 | "it's unlikely that the complete data change could be considered an atomic, consistent, isolated, and durable (ACID) transaction." |

Fact-check update (2026-10-20): the page now has a callout "Tutorial view and the AWS view" at the start of "When you need it". It labels the owner's view (a monolith is often the best start) as the tutorial's view and gives the AWS Well-Architected position (row 28 and row 20). The definition of "modular monolith" is labeled as the tutorial's own definition.
