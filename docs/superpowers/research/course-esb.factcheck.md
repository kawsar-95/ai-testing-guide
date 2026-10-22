# Fact-check: Enterprise Service Bus (`content/course/esb.mdx`)

Reviewer did not write the page. Sources fetched with curl on 2026-10-22 into `/tmp/claude-1000/fc3-esb/` and read as data. S1 = IBM Think ESB page (vendor page; only its statements about the pattern are used). S2 = Azure "Microservices architecture style" (does not mention ESB).

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | ESB is a pattern; one central component does the integrations | 1 | PASS | "an architectural pattern whereby a centralized software component performs integrations between applications" |
| 2 | Applications connect to the ESB; the ESB handles the rest | 1 | PASS | "simply connect ('talk') to the ESB and leave it to the ESB to transform the protocols, route the messages, and transform into the data formats" |
| 3 | Table of jobs: transformation, connectivity, routing, protocol conversion, possible composition | 1 | PASS | "performs transformations of data models, handles connectivity, performs message routing, converts communication protocols and potentially manages the composition of multiple requests" (the "what it means" column is a light gloss) |
| 4 | ESB can offer integrations as a service interface for reuse | 1 | PASS | "make these integrations and transformations available as a service interface for reuse by new applications" |
| 5 | Usually built with an ESB product (runtime plus tools) | 1 | PASS | "typically implemented using a specially designed integration runtime and toolset (i.e., esb product)". The marketing tail ("ensures the best possible productivity") is correctly left out. |
| 6 | ESB belongs to SOA, late 1990s; SOA = reusable components via service interfaces | 1 | PASS | "essential component of SOA ... a software architecture that emerged in the late 1990s. SOA defines a way to make software components reusable via service interfaces" |
| 7 | Interfaces give loose coupling; caller needs little knowledge | 1 | PASS | "provide loose coupling, meaning they can be called with little or no knowledge of how the service is implemented underneath" |
| 8 | Services often use SOAP/HTTP or JSON/HTTP | 1 | PASS | "exposed using standard network protocols—such as SOAP ... /HTTP or JSON/HTTP" ("often" is a small addition, not a stronger claim) |
| 9 | Without an ESB each owner connects to each service and transforms data; much work; hard to maintain; point to point | 1 | PASS | "Each application owner would need to directly connect to any service it needs and perform the necessary data transformations ... This is a lot of work ... significant maintenance challenges ... each connection is point to point." |
| 10 | Legacy: adapter or connector; ESB shields new app, does transformation and routing | 1 | PASS | "use the ESB to directly connect to the legacy system through an adapter or connector ... the enterprise service bus shields the new application from the legacy interface. An ESB performs the necessary transformation and routing" |
| 11 | Approach supports app integration, data integration, orchestration of business processes | 1 | PASS | "supports scenarios for application integration, data integration, and service orchestration style automation of business processes" |
| 12 | In theory a central ESB can standardize and simplify; shared costs; one specialist team | 1 | PASS | "In theory, a centralized ESB offers the potential to standardize—and dramatically simplify—communication ... Hardware and software costs can be shared ... A single team of specialists can be tasked" ("dramatically" is left out) |
| 13 | Developers can spend less time on integration | 1 | PASS | "enables developers to spend dramatically less time integrating". Page drops "dramatically" and keeps the "in theory" frame. |
| 14 | Mixed picture: success in many, bottleneck in many others | 1 | PASS | "while ESBs were deployed successfully in many organizations, in many other organizations the ESB came to be seen as the bottleneck" |
| 15 | A change to one integration could destabilize others | 1 | PASS | "Making changes or enhancements to one integration could destabilize others who used that same integration." |
| 16 | ESB middleware updates often affected integrations; much testing | 1 | PASS | "Updates to the ESB middleware often impacted existing integrations, so there was significant testing required to perform any update." |
| 17 | Central management: teams waited in line | 1 | PASS | "Because the ESB was centrally managed, application teams soon found themselves waiting in line for their integrations." |
| 18 | More integrations: HA and disaster recovery cost more | 1 | PASS | "As the volume of integrations grew, implementing high availability and disaster recovery for the ESB servers became more costly." |
| 19 | Cross-enterprise project hard to fund | 1 | PASS | "as a cross-enterprise project, the ESB proved difficult to fund" |
| 20 | IBM states the upkeep often proved so large and costly that it delayed the gains | 1 | PASS | "the challenges of maintaining, updating, and scaling a centralized ESB proved so overwhelming and expensive that the ESB often delayed the very productivity gains" (attributed to IBM, hedge "often" kept) |
| 21 | Section "Why teams moved away": "IBM ties the next step to microservices" | 1 | FAIL | IBM has a section "ESB and microservices", but it does not say microservices came as the next step after the ESB, and it does not say that teams moved away. It only says microservices "emerged and gained steam with the rise of virtualization, cloud computing, Agile development practices, and DevOps" and that the same granularity "can be brought to integration". The "rise and fall" article is only a pointer and was not used. Fix: say "IBM links microservices to the ESB question" and rename the heading, for example "Agile integration". |
| 22 | Microservices split one application into small pieces changed, scaled, administered independently | 1 | PASS | "break up ... small pieces that can be independently changed, scaled, and administered" |
| 23 | Azure: small autonomous services; separate codebase; independent deploy; own data; well-defined APIs | 2 | PASS | "collection of small, autonomous services" / "managed as a separate codebase" / "can be deployed independently" / "responsible for persisting their own data ... communicate through well-defined APIs" (the cite is about microservices only, not about ESBs) |
| 24 | Azure advice: decentralize everything; teams design and build end to end | 2 | PASS | "Decentralize everything. Individual teams are responsible for designing and building services end to end." |
| 25 | Agile integration: split ESB into small decentralized parts that app teams own and manage | 1 | PASS | "breaks up the ESB into fine-grained, decentralized integration components, without interdependencies, that individual application teams can own and manage themselves" |
| 26 | "Microservices still need messaging"; Azure names Kafka and Azure Service Bus for async communication with loose coupling | 2 | FAIL | Azure lists message-oriented middleware as one of the components that "appear in a typical microservices architecture". "Still need" drops that hedge and also implies a link to the ESB that Azure does not make. The Kafka and Service Bus part is correct: "enable asynchronous communication in microservices by promoting loose coupling". Fix: "A typical microservices architecture includes message-oriented middleware." |
| 27 | Azure lists more moving parts, more interservice communication, weak governance, harder dependency testing | 2 | PASS | "more moving parts" / "more interservice communication" / "Lack of governance" / "challenging to test service dependencies" (all about microservices) |
| 28 | "So the move away from a central ESB trades one set of problems for another. It does not remove problems." | none | FAIL | A conclusion stated as fact, with no cite, and not marked as the tutorial's own. Azure does not discuss ESBs or any move away from them, and IBM does not say the move trades problems. The Azure costs are costs of microservices, not of replacing an ESB. Fix: mark it as the tutorial's own view, or delete it. |
| 29 | Metadata description: "why many teams moved to decentralized integration" | none | FAIL | Neither source says many teams moved to decentralized integration. IBM says many saw the ESB as a bottleneck and describes the agile integration idea. Fix: "why many teams saw it as a bottleneck and what agile integration changes". |
| 30 | Mistake: ESB is one more system to run, fund, and test | 1 | PASS | Supported by the HA/DR cost, "difficult to fund", and "significant testing" quotes (rows 16, 18, 19) |
| 31 | Mistake: when one team owns all, others may wait | 1 | PASS | "application teams soon found themselves waiting in line for their integrations" ("may" hedge kept) |
| 32 | Mistake: Azure describes Azure Service Bus as a messaging platform for async communication | 2 | PASS | "Messaging platforms like Apache Kafka and Azure Service Bus enable asynchronous communication in microservices". The "sounds like an ESB" part is marked as the tutorial's own advice and has no cite. The page does not claim that Azure says anything about ESBs. |
| 33 | Mistake: IBM says many organizations used ESBs with success | 1 | PASS | "ESBs were deployed successfully in many organizations" |
| 34 | Key words: ESB, SOA, routing, protocol conversion, adapter or connector, point to point, agile integration | 1 | PASS | Same quotes as rows 1, 3, 6, 9, 10, 25. "one link for each pair" is a light gloss of "each connection is point to point". |
| 35 | Key words: Microservices = small autonomous services that "each own one business capability" | 2 | FAIL | "Each service is self-contained and should implement a single business capability within a bounded context." The page drops "should" and "within a bounded context", and turns "implement" into "own". Fix: "should each implement one business capability". |

Marketing check: the page does not repeat the IBM promotion (webMethods, Forrester, ROI, "best possible productivity", "dramatically"). No sentence is marked FAIL for marketing. The tutorial's own parts (opening paragraph, school example, tip callout, the "read what a product does" advice) are marked as the tutorial's own or are plain illustration and state no source fact. The example paragraph says "This example is the tutorial's own."

## Structure check

| Check | Result |
|---|---|
| Sources are https and each is cited | PASS (S1 many times, S2 in rows 23, 24, 26, 27, 32, 35) |
| Every `<Cite n>` has a source (n=1, n=2) | PASS |
| No run of 8 or more copied words | PASS. Longest shared run is 7 words ("legacy system through an adapter or connector"), checked by script against both sources. |
| Section order and last section | PASS for the six required sections, in order, with Key words last. The page adds two extra sections ("Trade-offs", "Why teams moved away") between "A real-life example" and "Common mistakes". The rules do not forbid this. |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "Enterprise Service Bus" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS (IBM Think is a vendor page, Azure is vendor docs) |
| Prose 700 to 1100 words | PASS: 958 words (script count, without the export block, tables, code, and Cite tags; the callout and bullets are included) |


## Re-check (after the writer's fixes)

| # | Verdict | Reason |
|---|---|---|
| 21 | PASS | Heading is now "ESB and microservices". "IBM compares the ESB with microservices" is a light paraphrase of IBM's section "ESB and microservices"; "moved away" and "next step" are gone. |
| 26 | PASS | "Azure lists message-oriented middleware as a component of a typical microservices architecture" matches "other components appear in a typical microservices architecture ... Message-oriented middleware: Messaging platforms like Apache Kafka and Azure Service Bus enable asynchronous communication in microservices by promoting loose coupling". Both names are on the Azure page. |
| 28 | PASS | Now "The tutorial's own view: ...", marked, no cite, states no source fact. |
| 29 | PASS | The description now says "what IBM says about its benefits and its problems", which IBM does say. |
| 35 | FAIL | The meaning now matches Azure, but the Key words cell copies a 10-word run from the Azure page: "should implement a single business capability within a bounded context". The rule allows runs of 7 words or fewer. Fix: reword, for example "Small, autonomous services; each one should cover a single business capability in its own bounded context", or drop "within a bounded context". |

Copy check re-run on the whole page: the longest run from IBM is 7 words. The longest run from Azure is the 10 words in row 35. Prose is now 964 words, in range. The other structure checks are unchanged and pass.


## Re-check 2 (Microservices Key words cell)

| # | Verdict | Reason |
|---|---|---|
| 35 | PASS | New text: "Small, autonomous services; each one should cover a single business capability inside its own bounded context". It keeps the hedge "should" and matches Azure: "Each service is self-contained and should implement a single business capability within a bounded context." |

Copy check re-run on the whole page: the longest run from IBM is 7 words, and the longest from Azure is 6 words. No run reaches 8. The other checks are unchanged and pass.

Open FAILs: 0
