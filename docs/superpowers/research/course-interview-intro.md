# Course page: System Design Interviews (research notes)

Writer notes for `content/course/interview-intro.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course5-src-interview-intro/` (HTML turned into text). Fetched text is treated as data. The Amazon page hides its "Interview topics" and "Question tips" text in collapsed blocks; that text is in the page's embedded JSON and was extracted to `amazon-sde2-json-text.txt`. The Amazon page shows no date, so the page gives the access date for the process table. The SDE III page (same site) repeats the same system design tips; it is not cited.

Google careers pages (`how-we-hire`, `interview-tips`) render with JavaScript and gave no text with curl. The Meta prep page returned HTTP 400. So the page has one hiring page (Amazon). The Google SRE workbook chapter is Google's design method, not interview guidance; the page says so.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Amazon, Amazon Jobs, "SDE II Interview Prep" | https://www.amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep | 2026-10-22 |
| S2 | Google, The Site Reliability Workbook, Chapter 12 "Introducing Non-Abstract Large System Design" | https://sre.google/workbook/non-abstract-design/ | 2026-10-22 |

Page cite numbers: n=1 is S1, n=2 is S2.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Software systems often need components, a data store, a part that makes decisions (business logic), and APIs or processes. | S1 Interview topics | "Software systems often need software components, something to store data, something to make decisions (such as business logic), and APIs or processes." |
| C2 | SDE II candidates should expect at least one systems design question. | S1 System design | "Expect at least one question on software systems design." |
| C3 | The interviewer asks about your design; you should ask questions to complete and validate it. | S1 System design | "Your interviewer will ask questions related to your design, and you should ask questions to complete and validate your design." |
| C4 | Objectives: practicality, accuracy, efficiency, reliability, optimization, scalability. | S1 System design, Objectives | "Practicality / Accuracy / Efficiency / Reliability / Optimization / Scalability" |
| C5 | Amazon looks for broad understanding of system design plus expertise in one area. | S1 Question tips | "We are looking for broad comprehension of system design and expertise in one area." |
| C6 | Online assessment: 90 minutes for two technical questions, then 20 minutes of systems design scenarios, then an 8-minute work style survey. | S1 Online assessment | "You'll have 90 minutes to complete two technical questions followed by 20 minutes of Systems Design scenarios and an 8-minute multiple choice Work Style Survey" |
| C7 | The assessment's system design part: made-up situations with simulated peers, managers, stakeholders; rate most/least effective actions; no whiteboard or diagram. | S1 Online assessment (collapsed) | "We want to see your system design skill set applied to a few fictional situations with simulated peers, managers, and stakeholders." / "We won't ask you to complete a whiteboarding or diagram exercise. We simply need you to rate the most effective or ineffective actions to take given each scenario." |
| C8 | Interview loop: four 55-minute interviews. | S1 Interview loop | "Your loop will include four 55-minute interviews" |
| C9 | Clarify the purpose, ask questions to narrow scope and define requirements, treat the interviewer as a customer. | S1 Question tips | "Clarify the purpose of your system and ask questions to scope-down and define requirements. Treat your interviewer as a customer and clarify any vague requirements." |
| C10 | Sample questions: who the system is for, which functions the customer expects, which qualities the customer assumes (fast, secure). | S1 Question tips | "Who are you designing for? Why?" / "What expectations does your customer have in terms of functionality?" / "(For example, they may assume the system will be fast and secure.)" |
| C11 | Write down assumptions and build on them; document all assumptions. | S1 Question tips | "Note your assumptions and build your design based on them." / "Document all assumptions and prioritize critical requirements and core functionality." |
| C12 | Ask what 2x and 10x growth do to the design. | S1 Question tips | "What happens if we become hyper-popular? What does twice the growth look like? Or ten times the growth? How would that influence your design?" |
| C13 | NALSD: designers should turn a whiteboard design into concrete resource estimates. | S2 Why "Non-Abstract"? | "the people designing distributed systems need to develop and continuously exercise the muscle of turning a whiteboard design into concrete estimates of resources" |
| C14 | Sound reasoning and assumptions matter more than final numbers; perfect assumptions are not required. | S2 Why "Non-Abstract"? | "examples of sound reasoning and assumption making are more important than any final values." / "making perfect assumptions isn't a requirement for NALSD." |
| C15 | Non-functional requirements (load, distribution, security), system interaction, and data flow shape the design. | S1 Question tips | "The design is influenced by factors such as non-functional requirements (load, distribution, security), system interaction (user access, scheduling, communication), and data flow." |
| C16 | Review scaling ideas: caching, load balancing, non-relational databases, microservices, sharding. | S1 Interview topics | "you may want to research scalability concepts and technology, such as caching, load balancing, non-relational databases, microservices, and sharding." |
| C17 | Cover operations and resilience: metrics, bottlenecks, failure points, redundancy, log access for debugging. | S1 Question tips | "Ensure your design is addressing operations and resilience in addition to solving your customer's problem. Consider key business and technical metrics, bottlenecks, failure points, redundancy, and log access for system debugging." |
| C18 | If several designs work, compare trade-offs, choose one, justify; discussing options with the interviewer can help decide. | S1 Question tips | "If there are multiple viable system designs, compare their trade-offs, select one, and justify your decision. Discussing the options with your interviewer can help you make the decision." |
| C19 | NALSD has two phases: basic design (Is it possible? Can we do better?) and scale up (Is it feasible? Is it resilient? Can we do better?). | S2 Design Process | "In the basic design phase, we try to invent a design that works in principle. We ask two questions: Is it possible? ... Can we do better?" / "In the next phase, we try to scale up our basic design ... We ask three questions: Is it feasible? ... Is it resilient? ... Can we do better?" |
| C20 | In practice Google moves back and forth between the questions and phases. | S2 Design Process | "in practice, we bounce around between the questions and phases." |
| C21 | If asked about an unfamiliar topic, tell the interviewer and suggest a familiar one. | S1 Question tips | "If you're asked to delve into an unfamiliar topic, let your interviewer know and suggest exploring a familiar topic instead." |
| C22 | NALSD is Google's iterative method to design systems; it starts from the problem statement and requirements and iterates. | S2 What Is NALSD? / Design Process | "Google uses an iterative approach to design systems" / "we begin with the problem statement, gather requirements, and iterate through designs" |

## Tutorial's own text (no cite)

- The five-step order (clarify, estimate, high level, deep dive, trade-offs) and its names. The page says so; Amazon tips support single steps.
- The advice that formats differ between companies and roles, and to read the hiring page.
- The arithmetic: 10 million users x 10 requests = 100 million a day; / 86,400 s = about 1,157, rounded to about 1,200 a second. 50,000 students / 30 s = about 1,667, rounded to about 1,700 saves a second.
- The exam-service example, the "Common mistakes" framing (each bullet is backed by a cite), the tester questions, and the definitions of "trade-off" and "bottleneck" (marked on the page).

## Changes after the fact-check (2026-10-22)

- The lede now says the general description is the tutorial's own. It no longer states how interviewers judge as a fact.
- The table says that Amazon can change its process.
- Key words: "System design interview" is marked as the tutorial's definition (Amazon does not define it). "Estimate" no longer says "rough"; S2 says "number of machines" as a discrete result.
- Common mistakes, first bullet: "first" removed. S1 gives no order between clarify and draw.
- Step 3 sentence reworded to avoid a 7-word run from S1.
