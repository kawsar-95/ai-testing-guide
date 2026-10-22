# Fact-check: N-tier Architecture (`content/course/n-tier.mdx`)

Reviewer: not the writer. Source fetched 2026-10-22 into `/tmp/claude-1000/fc3-n-tier/` (S1 = cite 1, Azure Architecture Center "N-tier architecture style", page text in `page.txt`). All claims cite n=1; the page has one source.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | N-tier divides an app into logical layers and physical tiers | 1 | PASS | "An N-tier architecture divides an application into logical layers and physical tiers." (copy problem: see Structure) |
| 2 | Layer = part of design, one job, helps manage dependencies | 1 | PASS | "Layers separate responsibilities and manage dependencies. Each layer has a specific responsibility." |
| 3 | Tier = physically separate, separate machines | 1 | PASS | "Tiers are physically separated and run on separate machines." |
| 4 | Higher layer may use lower layer; lower may not use higher | 1 | PASS | "A higher layer can use services in a lower layer, but a lower layer can't use services in a higher layer." |
| 5 | Each layer may be in its own tier, not required; several layers can share a tier | 1 | PASS | "You might host each layer in its own tier, but this approach isn't required. You can host several layers on the same tier." |
| 6 | Traditional three-tier: presentation, optional middle, database; more complex can have more tiers | 1 | PASS | "A traditional three-tier application has a presentation tier, an optional middle tier, and a database tier. More complex applications can have more than three tiers." (copy problem: see Structure) |
| 7 | Source shows web app; diagram flow (WAF, web tier, middle tier 1 direct, middle tier 2 via messaging, cache before data tier) | 1 | PASS | "From the web tier, one flow goes to middle tier 1 and another flow goes to messaging and then middle tier 2." / "From the data tier, both flows reverse through cache" |
| 8 | "The middle tiers use a remote service and the data tier" | 1 | FAIL | Only middle tier 1 reaches the remote service: "From middle tier 1, one flow goes to remote service and another flow goes to the data tier. From middle tier 2, the flow goes to the data tier." The page says both middle tiers use both. |
| 9 | Simplified text diagram, "request goes down, answer goes back up" | 1 | PASS | Marked on the page as a simplified view that leaves out the firewall, remote service, and cache. The source says flows "reverse". Tutorial's own drawing, honestly marked. |
| 10 | Tiers can follow a strict or relaxed communication model | 1 | PASS | "the tier can have strict or relaxed communication models." |
| 11 | Strict: one by one, cannot skip; cost is latency and overhead | 1 | PASS | "a request must go through adjacent tiers, one by one, and can't skip any tier in between." / "The strict approach has greater latency and overhead." |
| 12 | Relaxed: can skip tiers; cost is more couplings, harder changes | 1 | PASS | "the relaxed approach allows requests to skip some tiers if necessary." / "The relaxed approach has more couplings, which makes changes more difficult." |
| 13 | One system can use both models | 1 | PASS | "You can also combine both approaches in the same system." |
| 14 | A tier can call directly or use async messaging through a queue | 1 | PASS | "A tier can call to another tier directly, or use asynchronous messaging patterns through a message queue." |
| 15 | Closed layers: call only next layer down; limits dependencies; may add network traffic if layer only passes requests on | 1 | PASS | "In a closed layer architecture, a layer can only call the next layer immediately down." / "A closed layer architecture limits the dependencies between layers. But this architecture might create unnecessary network traffic if one layer only passes requests along to the next layer." |
| 16 | Open layers: call any layer below | 1 | PASS | "In an open layer architecture, a layer can call any layers under it." |
| 17 | Closed/open words are about layers, not tiers | 1 | PASS | "An N-tier application can have a closed layer architecture or an open layer architecture" (source applies the terms to layers). |
| 18 | Consider N-tier in 3 cases (evolving requirements; on-prem to cloud with few changes; spans on-prem and cloud) | 1 | PASS | "Support architectural requirements that are still evolving." / "Migrate an on-premises application to Azure with minimal changes." / "Develop applications that span both on-premises and cloud environments." Note: source says Azure, page says "the cloud". Acceptable, not counted. |
| 19 | Common in traditional on-prem systems, so suits moving workloads to cloud | 1 | PASS | "N-tier architectures are common in traditional on-premises systems, which makes them a natural fit for transitioning existing workloads to Azure." (same Azure note) |
| 20 | Benefit: portable across cloud, on-prem, between clouds | 1 | PASS | "Portable across cloud and on-premises, and between cloud platforms" (copy problem: see Structure) |
| 21 | Benefit: "Most developers need a short time to learn it" | 1 | FAIL | Source: "Requires less learning curve for most developers". "Less" is a comparison; "a short time" is an absolute claim. |
| 22 | Benefit: "It costs little" | 1 | FAIL | Source: "Costs relatively little by not rearchitecting the solution". The hedge "relatively" is dropped. |
| 23 | Benefit: natural step from traditional model | 1 | PASS | "Follows a natural evolution from the traditional application model" |
| 24 | Benefit: mixed Windows and Linux | 1 | PASS | "Supports mixed environments that include Windows and Linux" |
| 25 | Physical separation improves scalability, resiliency; adds latency | 1 | PASS | "Physical separation of tiers improves scalability and resiliency but also adds latency from the extra network communication." (copy problem: see Structure) |
| 26 | Tiers are boundaries for scalability, reliability, security; separate tiers for different needs | 1 | PASS | "Tiers create boundaries for scalability, reliability, and security. Consider having separate tiers for services with different requirements in those areas." (copy problem: see Structure) |
| 27 | Challenge: middle tier doing only CRUD adds latency, complexity, little value | 1 | PASS | "A middle tier might only perform basic create, read, update, delete (CRUD) operations, which adds latency and complexity without delivering meaningful value." |
| 28 | Challenge: monolithic design prevents independent deployment | 1 | PASS | "Monolithic design prevents independent deployment of features." |
| 29 | Challenge: network security hard in large systems | 1 | PASS | "Large systems can make network security difficult to manage." |
| 30 | Challenge: testing and monitoring harder across tiers | 1 | PASS | "User requests and data that move through multiple tiers make testing and monitoring more difficult." |
| 31 | Good practices: autoscaling, async messaging, cache data that rarely changes, HA for database tier | 1 | PASS | "Use autoscaling to handle changes in load." / "Use asynchronous messaging to decouple tiers." / "Cache data that doesn't change often." / "Configure the database tier for high availability" |
| 32 | Security: firewall in front of web tier, subnet per tier as boundary, data tier reached only from a middle tier | 1 | PASS | "Place a WAF between the front end and the internet." / "Place each tier in its own subnet, and use subnets as a security boundary." / "Restrict access to the data tier by allowing requests from a middle tier only." ("front end" read as the web tier; matches the source diagram.) |
| 33 | Example: weak middle tier is the source's warning | 1 | PASS | Same quote as row 27. The school example itself is marked "the tutorial's own". |
| 34 | Mistake: layer = design idea, tier = where code runs | 1 | PASS | Rows 2 and 3. |
| 35 | Mistake: each layer in its own tier is not required | 1 | PASS | Row 5. |
| 36 | Mistake: skipping tiers makes changes harder | 1 | PASS | Row 12. |
| 37 | Mistake: pass-through middle tier adds latency, complexity | 1 | PASS | Row 27. |
| 38 | Mistake: monolithic design stops independent release | 1 | PASS | Row 28. |
| 39 | Key words: Layer, Tier | 1 | PASS | Rows 2 and 3. |
| 40 | Key words: closed, open layer | 1 | PASS | Rows 15 and 16. |
| 41 | Key words: strict, relaxed model | 1 | PASS | Rows 11 and 12. |
| 42 | Key words: CRUD | 1 | PASS | "create, read, update, delete (CRUD) operations" |
| 43 | Key words: WAF = firewall between front end and the internet | 1 | PASS | "web application firewall (WAF)" and "Place a WAF between the front end and the internet." |

Tip callout: marked "the tutorial's own advice, not a claim of the source"; no `<Cite>`; no source fact stated. The opening restaurant analogy is an illustration with no source claim. OK.

## Structure check

| Check | Result |
|---|---|
| Sources: 1 entry, https, cited 41 times; every `<Cite n={1}>` has a source | PASS |
| Source type: Microsoft Learn, official vendor docs; no blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS |
| `#` title "N-tier Architecture" | PASS |
| Section order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (last). Extra sections "How it works" (after In plain words) and "Challenges" (after When you need it) do not break the order. | PASS |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| Prose word count (no export block, tables, code, Cite tags) | 996 words, PASS (700-1100) |
| Copy check, 8-word runs | 5 FAILs below |
| Copy: line 17 "An N-tier architecture divides an application into logical layers and physical tiers" (source sentence word for word, 12 words) | FAIL |
| Copy: line 26 "A traditional three-tier application has a presentation tier, an optional middle tier, and a database tier." (source, 17 words) | FAIL |
| Copy: line 73 "It is portable across cloud and on-premises, and between cloud platforms" (source bullet, 9 words copied) | FAIL |
| Copy: line 79 "Physical separation of tiers improves scalability and resiliency." (source, 8 words) | FAIL |
| Copy: the sentence "Tiers create boundaries for scalability, reliability, and security." (source, 8 words, line 79) | FAIL |
| Run "open layer architecture a layer can call any" | Not counted. It crosses the two cells of the Key words row ("Open layer architecture" / "A layer can call any layer below it"). Within the cell, the run is 7 words. |

Fixes: reword the five copied lines (rows 8, 21, 22 also need a text change).

Open FAILs: 8

## Re-check (after the writer's fixes)

| Row | New text | Verdict | Quote or reason |
|---|---|---|---|
| 8 | "Middle tier 1 reaches a remote service and the data tier. Middle tier 2 reaches the data tier." | PASS | "From middle tier 1, one flow goes to remote service and another flow goes to the data tier. From middle tier 2, the flow goes to the data tier." |
| 8b | "A cache sits between the data tier and the middle tiers." | PASS | "From the data tier, both flows reverse through cache, then back to middle tier 1 and 2 respectively." |
| 21 | "For most developers, it has a smaller learning curve." | PASS | "Requires less learning curve for most developers" |
| 22 | "It costs relatively little, because you do not re-architect the solution." | PASS | "Costs relatively little by not rearchitecting the solution" |
| 1, 6, 20, 25, 26 | The 5 copied runs, reworded ("splits ... in two ways", "classic design has three tiers", "Separating tiers physically can help ...", "A tier is also a boundary for scale, reliability, and security") | PASS | Meaning matches rows 1, 6, 25, 26 quotes ("can help" is softer than "improves", which is allowed). Copy re-run on the whole page: no run of 8 or more words, except "open layer architecture a layer can call any", which crosses two table cells in Key words and is not counted (see above). |

Changed text has no new facts. Section order, title, Cites, and no-Voices are unchanged. Prose word count now: 1019 (limit 1100).

Open FAILs: 0
