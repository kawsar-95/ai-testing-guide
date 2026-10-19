# Fact-check: Monolith, Modular Monolith, and Microservices (round 1, 2026-10-20)

An agent that did not write the page checked `content/architecture/monolith-microservices.mdx`. I compared each cited sentence with the downloaded text of its source (S1–S6 of `architecture-monolith-microservices.md`). Each quote below is copied from that text. The page has 6 sources. Each source has 1 or more cites, and each cite points to a source. All sources are official vendor docs (Microsoft Azure Architecture Center, AWS). Notes rows 2 and 21 are not used on the page and are not checked.

AWS position: AWS Well-Architected (S3) says "Monolithic architecture should be avoided whenever possible." The owner says a monolith is often the best start. Before the fix, the page gave only the AWS statements that favor a monolith (S2: "simple application or prototype"; S3: "must ensure that it's modular") and gave the "Choose a monolith" list with no label. A reader could think that AWS agrees with the owner. The page now has a callout that labels the owner's view as the tutorial's view and gives the stricter AWS position.

| # | Location | Claim (short) | Cite | Verdict | Quote |
|---|---|---|---|---|---|
| 1 | In plain words | A monolith is one application with one code base for many business jobs | 2 | PASS | "A monolithic architecture is a traditional software development model that uses one code base to perform multiple business functions." |
| 2 | In plain words | You build, test, and deploy it as one unit | 2 | FAIL→fixed | Had no cite. Added cite 2. Quote: "Developers install the entire application code base and dependencies in a single environment." / "they must retest and redeploy the entire system on the server." |
| 3 | In plain words | Easy to start; little planning up front | 2 | PASS | "Monolithic applications are easier to start with, as not much up-front planning is required." |
| 4 | In plain words | Simpler to deploy than microservices | 2 | PASS | "Deploying monolithic applications is more straightforward than deploying microservices." |
| 5 | In plain words | A small change affects many parts; retest and redeploy the whole system | 2 | PASS | "A small change in one part of a monolithic application affects multiple software functions ... they must retest and redeploy the entire system on the server." |
| 6 | In plain words | To scale it, you scale the whole application | 2 | PASS | "the entire application must be scaled as requirements change." |
| 7 | In plain words | Definition of a modular monolith | – | FAIL→fixed | A definition with no cite. No vendor doc defines the term (see the notes). Now labeled: "The vendor docs give no one definition of a modular monolith. In this tutorial, a modular monolith is ..." |
| 8 | In plain words | AWS: if you start with a monolith, it must be modular so it can grow into smaller services | 3 | PASS | "Even if you choose to start with a monolith architecture, you must ensure that it's modular and can ultimately evolve to SOA or microservices" |
| 9 | In plain words | Clear borders between parts let you move each part out on its own | 6 | PASS | "strive to have clear demarcations between parts of your solution so that you can migrate each part individually." |
| 10 | In plain words | Microservices: small, independent; a small team builds each; deployed without redeploying the rest | 1 | PASS | "Microservices are small, independent, and loosely coupled components that a single small team of developers can write and maintain." / "teams can update existing services without rebuilding or redeploying the entire application." |
| 11 | In plain words | Each service owns its data | 1 | PASS | "Each service owns its data and schema." |
| 12 | In plain words | Each service can be scaled on its own | 1 | PASS | "Scalability: Services can be scaled independently." |
| 13 | In plain words | AWS: microservices reveal complexity, they do not remove it | 2 | PASS | "microservices don't reduce the complexity of an application. Instead, the microservices structure reveals underlying complexities" |
| 14 | In plain words | Each service is simpler, but the system has more moving parts | 1 | PASS | "A microservices application has more moving parts than the equivalent monolithic application. Each service is simpler, but the entire system as a whole is more complex." |
| 15 | In plain words | Smaller services add latency, harder debugging, more operations work | 3 | PASS | "smaller services can introduce complexities which include possible increased latency, more complex debugging, and increased operational burden." |
| 16 | When you need it | The owner's view (a monolith is a good start) not labeled; AWS position incomplete | – | FAIL→fixed | Added the callout "Tutorial view and the AWS view": the lists are the tutorial's advice; AWS Well-Architected says a monolithic architecture "should be avoided whenever possible" (cite 3), and that a monolith you start with must be modular (cite 3). Quote: "Monolithic architecture should be avoided whenever possible." |
| 17 | When you need it | AWS: a monolith suits a simple application or a prototype | 2 | PASS | "The monolithic approach is more suitable when designing a simple application or prototype." |
| 18 | When you need it | Microsoft says to check the team's skills with care | 1 | PASS | "Carefully evaluate whether the team has the skills and experience to be successful." |
| 19 | When you need it | Microservices need a mature DevOps culture | 1 | PASS | "A successful microservice architecture requires a mature DevOps culture." |
| 20 | A real-life example | Strangler Fig: replace one piece of the old system at a time | 6 | PASS | "Incrementally migrate a legacy system by gradually replacing specific pieces of functionality with new applications and services." |
| 21 | Common mistakes | Shared database schemas couple the services | 1 | PASS | "Causes of coupling include shared database schemas and rigid communication protocols." |
| 22 | Common mistakes | Logs must be correlated across services; central logs, distributed tracing, metrics | 1 | PASS | "Typically, logging must correlate multiple service calls for a single user operation." / "Implement centralized logging, distributed tracing (OpenTelemetry), and metrics collection to ensure observability." |
| 23 | Common mistakes | Design services around business capabilities, not layers | 4 | PASS | "Design microservices around business capabilities, not horizontal layers like data access or messaging." |
| 24 | Common mistakes | A change across many services is unlikely to be one ACID transaction | 1 | FAIL→fixed | The page explained ACID as "(all or nothing)", which is only the "atomic" part. Now "(atomic, consistent, isolated, and durable)". The Key words row now says the same. Quote: "it's unlikely that the complete data change could be considered an atomic, consistent, isolated, and durable (ACID) transaction." |
| 25 | Common mistakes | A saga is a chain of local steps with undo steps if a later step fails | 5 | PASS | "coordinating a sequence of local transactions across multiple services ... If a step fails, a series of compensating transactions undoes the changes that the completed steps made." |
| 26 | Common mistakes | "Death Star": services so dependent that one failure spreads; as fragile as a monolith | 3 | PASS | "a failure of one results in a much larger failure, making the components as rigid and fragile as a monolith." |
| 27 | What a tester can check | Callout says the tips are the tutorial's own advice | – | PASS | Callout title "Tutorial advice" and "These test ideas are the tutorial's own advice." |

## Fixes

1. Row 2: added `<Cite n={2} />` to "You build it, test it, and deploy it as one unit."
2. Row 7: labeled the definition of "modular monolith" as the tutorial's own definition.
3. Row 16: added the note callout "Tutorial view and the AWS view" at the start of "When you need it", with two cites to S3.
4. Row 24: changed the ACID explanation in "Common mistakes" and in Key words to the four ACID properties.
5. Notes: added rows 27–29 and a "Fact-check update" note to `architecture-monolith-microservices.md`.

Open FAILs: 0
