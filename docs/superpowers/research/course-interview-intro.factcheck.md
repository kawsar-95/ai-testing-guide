# Fact-check: System Design Interviews (`content/course/interview-intro.mdx`)

Reviewer did not write the page. Sources fetched on 2026-10-22 with curl into `/tmp/claude-1000/.../scratchpad/fc5-interview-intro/` (Amazon page HTML and its embedded JSON turned into text; SRE workbook HTML as text). Quotes below come from my own reading of those files, not from the research notes. Source 1 is the only official hiring page on the site. Google and Meta hiring pages are not cited.

## Claims

| # | Claim (short) | Cite n | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Software systems often need components, a data store, a decision part (business logic), and APIs or processes | 1 | PASS | "Software systems often need software components, something to store data, something to make decisions (such as business logic), and APIs or processes." (Interview topics) |
| 2 | SDE II candidates should expect at least one systems design question in the loop | 1 | PASS (note) | "Expect at least one question on software systems design." The sentence sits in the "System design" block under "Interview loop". The page ties it to the loop, which is the layout of the source. |
| 3 | Interviewer asks about your design; you ask questions to complete and validate it | 1 | PASS | "Your interviewer will ask questions related to your design, and you should ask questions to complete and validate your design." |
| 4 | Objectives: practicality, accuracy, efficiency, reliability, optimization, scalability | 1 | PASS | Objectives list in the "System design" block: Practicality, Accuracy, Efficiency, Reliability, Optimization, Scalability. |
| 5 | Amazon looks for broad understanding plus expertise in one area | 1 | PASS | "We are looking for broad comprehension of system design and expertise in one area." |
| 6 | Online assessment: 90 min for two technical questions, 20 min of systems design scenarios, 8-min work style survey | 1 | PASS | "You'll have 90 minutes to complete two technical questions followed by 20 minutes of Systems Design scenarios and an 8-minute multiple choice Work Style Survey" |
| 7 | Assessment design part: made-up situations with simulated managers, peers, stakeholders; rate most and least effective actions; no whiteboard or diagram | 1 | PASS | "fictional situations with simulated peers, managers, and stakeholders" / "We won't ask you to complete a whiteboarding or diagram exercise. We simply need you to rate the most effective or ineffective actions" |
| 8 | Interview loop: four interviews of 55 min | 1 | PASS | "Your loop will include four 55-minute interviews" |
| 9 | Clarify purpose, scope down, treat interviewer as a customer | 1 | PASS | "Clarify the purpose of your system and ask questions to scope-down and define requirements. Treat your interviewer as a customer" |
| 10 | Sample questions: who it is for, expected functions, assumed qualities such as speed and security | 1 | PASS | "Who are you designing for? Why?" / "What expectations does your customer have in terms of functionality?" / "they may assume the system will be fast and secure" |
| 11 | Write down assumptions and build on them | 1 | PASS | "Note your assumptions and build your design based on them." / "Document all assumptions" |
| 12 | Two times and ten times growth question | 1 | PASS | "What does twice the growth look like? Or ten times the growth? How would that influence your design?" |
| 13 | NALSD is Google's name for a design method; turn a whiteboard drawing into concrete resource estimates | 2 | PASS | "the people designing distributed systems need to develop and continuously exercise the muscle of turning a whiteboard design into concrete estimates of resources" |
| 14 | Sound reasoning and assumptions matter more than final numbers | 2 | PASS | "examples of sound reasoning and assumption making are more important than any final values" |
| 15 | The workbook describes Google's design practice, not interviews | none | PASS | The chapter text has no mention of interviews. It says "Google uses an iterative approach to design systems". The page marks this correctly. |
| 16 | Design is shaped by non-functional requirements, interaction, data flow | 1 | PASS | "The design is influenced by factors such as non-functional requirements (load, distribution, security), system interaction (user access, scheduling, communication), and data flow." |
| 17 | Review scaling ideas: load balancing, caching, sharding, microservices, non-relational databases | 1 | PASS | "you may want to research scalability concepts and technology, such as caching, load balancing, non-relational databases, microservices, and sharding." The page says "suggests", which keeps the hedge. |
| 18 | Cover operations and resilience: metrics, bottlenecks, failure points, redundancy, logs | 1 | PASS | "Ensure your design is addressing operations and resilience ... Consider key business and technical metrics, bottlenecks, failure points, redundancy, and log access for system debugging." |
| 19 | Compare trade-offs, choose one, justify | 1 | PASS | "If there are multiple viable system designs, compare their trade-offs, select one, and justify your decision." |
| 20 | NALSD phases and questions (possible / better; feasible / resilient / better) | 2 | PASS | "In the basic design phase ... Is it possible? ... Can we do better?" / "try to scale up ... Is it feasible? ... Is it resilient? ... Can we do better?" |
| 21 | Google moves back and forth between questions and phases in practice | 2 | PASS | "in practice, we bounce around between the questions and phases." |
| 22 | Talking through options with the interviewer can help decide | 1 | PASS | "Discussing the options with your interviewer can help you make the decision." |
| 23 | Unfamiliar topic: say so and suggest a familiar one | 1 | PASS | "let your interviewer know and suggest exploring a familiar topic instead." |
| 24 | Common mistakes: each bullet cites an Amazon or NALSD statement | 1, 2 | PASS (note) | Rows 9, 11, 18, 19, 14. The section says the points are the tutorial's own reading. Bullet 1 said "first", which S1 does not say. Fixed, see Re-check. Bullet 5 "Exact numbers too early" is a label of the tutorial; the cite supports only "perfect assumptions are not required". Accepted because the section is marked as own reading. |
| 25 | Lede: "There is no single right answer. The interviewer watches how you ask questions, choose parts, and explain your choices." | none | FAIL | A general claim about interviews with no source and no hedge. S1 does not say this. Fixed, see Re-check. |
| 26 | The five-step order and names | none | PASS | The page says the order and names are the tutorial's own, and that Amazon tips support parts of it. S1 gives no step list for system design. |
| 27 | "Go deeper on one part ... the part that carries the most risk" | none | PASS (note) | Own advice. It follows the own-order statement. The cite after it supports only operations and resilience, not the "one part" idea. |
| 28 | When you need it: formats differ; read the hiring page | none | PASS | Own advice, hedged ("may", "can differ"). |
| 29 | Process table may be out of date | 1 | FAIL (hedge) | The table states a company process with only an access date. Amazon shows no date on the page. Fixed with a sentence that the process can change. |
| 30 | Arithmetic: 10 million x 10 = 100 million a day; / 86,400 s = about 1,157, "about 1,200"; 50,000 / 30 s = about 1,667, "about 1,700" | none | PASS | I computed both. The page marks the first as its own and the exam example as its own. |
| 31 | Key words: system design interview, cited to S1 | 1 | FAIL | S1 does not define the term. The cite made the definition look sourced. Fixed, see Re-check. |
| 32 | Key words: interview loop (four 55-min interviews, SDE II) | 1 | PASS | Row 8. |
| 33 | Key words: requirement, non-functional requirement, assumption | 1 | PASS | Rows 9 to 11 and 16. |
| 34 | Key words: estimate = "rough number" | 2 | FAIL (minor) | S2 says "concrete estimates of resources" and "discrete results (e.g., number of machines)". "Rough" is not in the source. Fixed, see Re-check. |
| 35 | Key words: trade-off and bottleneck are the tutorial's definitions | 1 | PASS | Marked as own. Amazon uses both words (rows 18, 19). |
| 36 | Key words: NALSD, Google's iterative method with concrete resource estimates | 2 | PASS | "Google uses an iterative approach to design systems" / row 13. |
| 37 | Tester questions in the callout | none | PASS | Marked as the tutorial's own advice. No cite. |
| 38 | Internal links `/course/sharding/`, `/course/cap-theorem/`, `/course/sla-slo-sli/` | none | PASS | All three slugs are in `lib/course/topics.ts`. |

Facts that may change: the Amazon process (times, number of interviews, online assessment) is for the SDE II role on the day of access. The page now says so. Amazon has other roles with other pages.

## Structure check

| Check | Result |
|---|---|
| Sources are https; both cited at least once; every `<Cite n>` (1, 2) has a source | PASS (27 cites of n=1, 7 of n=2) |
| `##` order: In plain words, When you need it, How it works, In an interview, A real-life example, Common mistakes, What a tester can check, Key words (last). The 6 required sections are in order. The optional sections come after "When you need it". | PASS (`tests/course.test.ts` passes) |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "System Design Interviews" | PASS |
| Sources are an official hiring page and the Google SRE workbook; no blog, forum, Wikipedia, or AI summary | PASS |
| No real person's name, email, or home path | PASS |
| Prose word count (no export block, tables, code block, Cite tags; includes the lede and the tip callout) | 1045 before edits, 1063 after: PASS (700 to 1100) |
| Copy check: `scripts/linux_overlap.py` with 8-word runs over both sources | PASS: 0 runs. Runs of 7 words: one before the edit ("non-functional requirements (load, distribution, security), system interaction"), 0 after. Remaining 6-word runs: a URL, "business logic and APIs or processes", "ask questions to complete and validate", "20 minutes of systems design scenarios". These are short and below the limit. |

Failing rows: 25, 29, 31, 34. Total 4 (all fixed below).

## Re-check (after my edits to the page)

| # | Changed text | Cite n | Verdict | Quote or reason |
|---|---|---|---|---|
| 25 | "A system design interview often gives you a vague problem ... Companies run this interview in different ways, so this general description is the tutorial's own." | none | PASS | The claim is hedged ("often"), marked as own, and states no fact about how interviewers judge. |
| 29 | "Amazon can change its process, so check the page again before you rely on this table." | 1 | PASS | Hedge added next to the access date. |
| 31 | "(the tutorial's definition). Amazon says to expect one in its SDE II loop" | 1 | PASS | Definition is marked as own. The cite now supports only the "expect one" part: "Expect at least one question on software systems design." |
| 34 | "A number for the resources that a design needs, such as a count of machines" | 2 | PASS | S2: "discrete results (e.g., number of machines)". |
| 24 | Bullet 1: "clarify vague requirements and to build the design on their assumptions" | 1 | PASS | S1: "clarify any vague requirements. Note your assumptions and build your design based on them." No order claim remains. |
| 16 | "the design depends on non-functional requirements such as load, distribution, and security, on how users and parts interact, and on data flow" | 1 | PASS | S1: "The design is influenced by factors such as non-functional requirements (load, distribution, security), system interaction (user access, scheduling, communication), and data flow." "Depends on" is close to "is influenced by". The 7-word run is gone. |

Copy check again (8-word window, both sources): 0 runs. Prose word count after edits: 1063. `node --test tests/course.test.ts tests/voice-source.test.ts`: 29 pass, 0 fail.

Open FAILs: 0
