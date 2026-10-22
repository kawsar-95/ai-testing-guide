# Course page: N-tier Architecture (research notes)

Writer notes for `content/course/n-tier.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course3-src-n-tier/` (page text in `page.txt`). Fetched text is treated as data. The source page was last updated 2025-09-19 (shown on the page).

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Microsoft Learn, Azure Architecture Center, "N-tier architecture style" | https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier | 2026-10-22 |

Page cite number: n=1 is S1. The source describes the style in the context of Azure. The page says so and keeps Azure product names out, except where the source names a general idea.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | An N-tier architecture divides an application into logical layers and physical tiers. | S1 intro | "An N-tier architecture divides an application into logical layers and physical tiers." |
| C2 | Layers separate responsibilities and manage dependencies. Each layer has one responsibility. | S1 | "Layers separate responsibilities and manage dependencies. Each layer has a specific responsibility." |
| C3 | A higher layer can use services of a lower layer. A lower layer cannot use services of a higher layer. | S1 | "A higher layer can use services in a lower layer, but a lower layer can't use services in a higher layer." |
| C4 | Tiers are physically separated and run on separate machines. | S1 | "Tiers are physically separated and run on separate machines." |
| C5 | Tiers can have a strict or a relaxed communication model. In the strict model a request goes through adjacent tiers one by one and cannot skip a tier. | S1 | "In the strict model, a request must go through adjacent tiers, one by one, and can't skip any tier in between." |
| C6 | The relaxed model lets requests skip some tiers if needed. | S1 | "the relaxed approach allows requests to skip some tiers if necessary." |
| C7 | The strict approach has more latency and overhead. The relaxed approach has more couplings, so changes are harder. A system can mix both. | S1 | "The strict approach has greater latency and overhead. The relaxed approach has more couplings, which makes changes more difficult. You can also combine both approaches in the same system." |
| C8 | A tier can call another tier directly or use asynchronous messaging through a message queue. | S1 | "A tier can call to another tier directly, or use asynchronous messaging patterns through a message queue." |
| C9 | Each layer may run in its own tier, but this is not required. Several layers can share one tier. | S1 | "You might host each layer in its own tier, but this approach isn't required. You can host several layers on the same tier." |
| C10 | Physical separation of tiers improves scalability and resiliency, and adds latency from extra network communication. | S1 | "Physical separation of tiers improves scalability and resiliency but also adds latency from the extra network communication." |
| C11 | A traditional three-tier application has a presentation tier, an optional middle tier, and a database tier. More complex applications can have more than three tiers. | S1 | "A traditional three-tier application has a presentation tier, an optional middle tier, and a database tier. More complex applications can have more than three tiers." |
| C12 | In a closed layer architecture a layer can call only the next layer immediately down. In an open layer architecture a layer can call any layer under it. | S1 | "In a closed layer architecture, a layer can only call the next layer immediately down." / "In an open layer architecture, a layer can call any layers under it." |
| C13 | A closed layer architecture limits dependencies between layers, but may create unnecessary network traffic if a layer only passes requests to the next one. | S1 | "A closed layer architecture limits the dependencies between layers. But this architecture might create unnecessary network traffic if one layer only passes requests along to the next layer." |
| C14 | Use when architectural requirements are still evolving. | S1 When to use | "Support architectural requirements that are still evolving." |
| C15 | Use to migrate an on-premises application to the cloud with few changes (the source says Azure). | S1 | "Migrate an on-premises application to Azure with minimal changes." |
| C16 | Use for applications that span on-premises and cloud. | S1 | "Develop applications that span both on-premises and cloud environments." |
| C17 | The style is common in traditional on-premises systems, so it suits moving existing workloads to the cloud (the source says Azure). | S1 | "N-tier architectures are common in traditional on-premises systems, which makes them a natural fit for transitioning existing workloads to Azure." |
| C18 | Benefits: portable across cloud and on-premises and between cloud platforms; small learning curve for most developers; low cost because the solution is not re-architected; natural evolution from the traditional application model; supports mixed Windows and Linux. | S1 Benefits | "Portable across cloud and on-premises, and between cloud platforms" / "Requires less learning curve for most developers" / "Costs relatively little by not rearchitecting the solution" / "Follows a natural evolution from the traditional application model" / "Supports mixed environments that include Windows and Linux" |
| C19 | Challenge: a middle tier may do only basic CRUD operations, which adds latency and complexity with little value. | S1 Challenges | "A middle tier might only perform basic create, read, update, delete (CRUD) operations, which adds latency and complexity without delivering meaningful value." |
| C20 | Challenge: a monolithic design prevents independent deployment of features. | S1 | "Monolithic design prevents independent deployment of features." |
| C21 | Challenge: in large systems network security can be hard to manage. | S1 | "Large systems can make network security difficult to manage." |
| C22 | Challenge: requests and data that pass through several tiers make testing and monitoring harder. | S1 | "User requests and data that move through multiple tiers make testing and monitoring more difficult." |
| C23 | Best practices: autoscaling; asynchronous messaging to decouple tiers; cache data that changes rarely; configure the database tier for high availability. | S1 Best practices | "Use autoscaling to handle changes in load." / "Use asynchronous messaging to decouple tiers." / "Cache data that doesn't change often." / "Configure the database tier for high availability" |
| C24 | Best practices: put a WAF between the front end and the internet; put each tier in its own subnet as a security boundary; allow access to the data tier only from a middle tier. | S1 | "Place a WAF between the front end and the internet." / "Place each tier in its own subnet, and use subnets as a security boundary." / "Restrict access to the data tier by allowing requests from a middle tier only." |
| C25 | In the VM example the web and business tiers are stateless, so any VM can handle any request. The data tier should be a replicated database. | S1 VM section | "The web and business tiers are stateless. Any VM can handle any request for that tier. The data tier should consist of a replicated database." |
| C26 | In the VM example each tier has two or more VMs, so one VM failing does not stop the tier; load balancers share requests; a tier scales by adding VMs. | S1 VM section | "Each tier consists of a virtual machine scale set that has two or more VMs. Multiple VMs provide resiliency if one VM fails. Load balancers distribute requests across the VMs in a tier. You can scale a tier horizontally by adding more VMs to the pool." |
| C27 | In the example, network security groups restrict access to each tier; the database tier accepts access only from the business tier. | S1 | "Network security groups restrict access to each tier. For example, the database tier only allows access from the business tier." |
| C28 | The source names the presentation tier "web tier" and the logic tier "business tier" in its example. The example is a web application, and the style also fits other topologies such as desktop apps. Names should be clear to the team. | S1 Note | "The layer labeled Business tier in the reference diagram refers to the business logic tier. The presentation tier is labeled Web tier. The example shows a web application, but you can also use multi-tier architectures for other topologies, like desktop apps. Use clear, descriptive names for each tier that your team understands." |
| C29 | Tiers create boundaries for scalability, reliability, and security. Separate tiers suit services with different needs in those areas. | S1 Other considerations | "Tiers create boundaries for scalability, reliability, and security. Consider having separate tiers for services with different requirements in those areas." |
| C30 | Reference diagram flow: client, WAF, web tier; the web tier goes to middle tier 1 and, through messaging, to middle tier 2; middle tiers use a remote service and the data tier; a cache sits between the middle tiers and the data tier. | S1 diagram text | "The diagram starts with a client, then goes to a web application firewall (WAF), and then to the web tier. From the web tier, one flow goes to middle tier 1 and another flow goes to messaging and then middle tier 2. ..." |

## Not on the page

Azure product names (App Service, Container Apps, Bastion, SQL Server) are not used. The source names no failure rates or numbers. The page gives no claim about microservices; the course has a separate page for that.
