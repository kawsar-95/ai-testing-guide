# Fact-check: content/course/availability.mdx (2026-10-22)

Checker: an agent that did not write the page. Each source was fetched again with `curl` into `/tmp/claude-1000/fc-availability/` and stripped to text. The quotes below come from that text, not from the research notes. The AWS page says "Last Updated: May 25, 2022".

## Claims

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Availability is often given as "nines": 99.9%, 99.99%, 99.999% | 1 | PASS | "usually expressed in terms of the number of "nines" we would like to provide: 99.9%, 99.99%, or 99.999% availability." |
| 2 | Each extra nine is a tenfold improvement toward 100% | 1 | PASS | "Each additional nine corresponds to an order of magnitude improvement toward 100% availability." |
| 3 | 99.99% target allows up to 52.56 minutes of downtime in a year | 1 | PASS | "a system with an availability target of 99.99% can be down for up to 52.56 minutes in a year and stay within its availability target" |
| 4 | Time-based measure is the share of time the system is up | 1 | PASS | "this metric is traditionally calculated based on the proportion of system uptime (see Time-based availability )" |
| 5 | Request-based measure is the share of requests that succeed | 1 | PASS | "we define availability in terms of the request success rate" ; chapter 4: "the fraction of well-formed requests that succeed" |
| 6 | Google uses the request-based measure for global services because some part is always up somewhere | 1 | PASS | "a time-based metric for availability is usually not meaningful because we are looking across globally distributed services" / "we are serving at least a subset of traffic for a given service somewhere in the world at any given time (i.e., we are at least partially "up" at all times). Therefore, instead of using metrics around uptime, we define availability in terms of the request success rate" |
| 7 | Request success rate is a fair approximation of the downtime users feel | 1 | PASS | "availability calculated as the request success rate over all requests is a reasonable approximation of unplanned downtime, as viewed from the end-user perspective." |
| 8 | Not all requests matter equally: failed sign-up is worse than failed background poll | 1 | PASS | "not all requests are equal: failing a new user sign-up request is different from failing a request polling for new email in the background." |
| 9 | Page arithmetic: 525,600 min/year; 99.9% gives 525.6 min (about 8.8 h) | none (own) | PASS | Recomputed: 365 x 24 x 60 = 525,600; x 0.001 = 525.6 min = 8.76 h. Marked "The arithmetic below is the tutorial's own." |
| 10 | Page arithmetic: 99.99% gives 52.56 min | none (own) | PASS | 525,600 x 0.0001 = 52.56. Agrees with claim 3. |
| 11 | Page arithmetic: 99.999% gives 5.256 min (about 5.3 min) | none (own) | PASS | 525,600 x 0.00001 = 5.256. |
| 12 | SLI is a measured number such as latency or error rate | 2 | PASS | "An SLI is a service level indicator —a carefully defined quantitative measure of some aspect of the level of service that is provided. Most services consider request latency ... Other common SLIs include the error rate" |
| 13 | SLO is a target for that number | 2 | PASS | "An SLO is a service level objective : a target value or range of values for a service level that is measured by an SLI." |
| 14 | SLA is a contract with consequences if the target is missed; often a rebate or penalty | 2 | PASS | "SLAs are service level agreements : an explicit or implicit contract with your users that includes consequences of meeting (or missing) the SLOs they contain. The consequences are most easily recognized when they are financial—a rebate or a penalty" |
| 15 | Quick test: "what happens if we miss it?"; no explicit consequence means SLO | 2 | PASS | "ask "what happens if the SLOs aren’t met?": if there is no explicit consequence, then you are almost certainly looking at an SLO." |
| 16 | An availability target is a business decision, not only a technical one | 2 | PASS | "Choosing targets (SLOs) is not a purely technical activity because of the product and business implications" |
| 17 | 100% is probably never the right target: impossible and more than users notice | 1 | PASS | "100% is probably never the right reliability target: not only is it impossible to achieve, it’s typically more reliability than a service’s users want or notice." |
| 18 | One more step of reliability can cost 100 times more than the step before | 1 | PASS | "cost does not increase linearly as reliability increments—an incremental improvement in reliability may cost 100x more than the previous increment." |
| 19 | Google treats a target as both a minimum and a maximum | 1 | PASS | "we view the availability target as both a minimum and a maximum." (claim is right; see copy check C1 for the wording) |
| 20 | A service far more reliable than needed wastes chances to add features and to clean up | 1 | PASS | "we want to exceed it, but not by much: that would waste opportunities to add features to the system, clean up technical debt, or reduce its operational costs." |
| 21 | Error budget is the gap between the SLO and 100% | 1 | PASS | Not stated in those words. The source gives the example "a service’s SLO is to successfully serve 99.999% of all queries per quarter. This means that the service’s error budget is a failure rate of 0.001%", which is 100% minus the SLO. The text "The difference between these two numbers is the "budget"" compares the SLO with measured uptime. The page claim is a fair reading of the example. |
| 22 | Example SLO 99.9% gives error budget 0.1% of submissions | none (own) | PASS | 100% - 99.9% = 0.1%. The learning-platform case is the tutorial's own example (a "monthly" window, where the source example is quarterly). Not a source fact. |
| 23 | While budget remains the team can ship; when it is gone the team stops and fixes reliability | 1 | PASS | "as long as there is error budget remaining—new releases can be pushed." / "releases are temporarily halted while additional resources are invested in system testing and development to make the system more resilient" |
| 24 | EC2 across two or more AZs of a region: Monthly Uptime Percentage at least 99.99% | 3 | PASS | "For Amazon EC2 with all running instances deployed concurrently across two or more AZs in the same region ... AWS will use commercially reasonable efforts to make Amazon EC2 available for each AWS region with a Monthly Uptime Percentage of at least 99.99%". Advisory: the page says "have" and leaves out "commercially reasonable efforts"; the word "promise" in the next sentence keeps it close enough. |
| 25 | A single instance has a lower promise, at least 99.5% | 3 | PASS | "AWS will use commercially reasonable efforts to make the Single EC2 Instance available with an Instance-Level Uptime Percentage of at least 99.5%" |
| 26 | Monthly figure is 100% minus the share of minutes unavailable | 3 | PASS | "“Monthly Uptime Percentage” is calculated by subtracting from 100% the percentage of minutes during the month in which Amazon EC2 was in the state of Unavailability." |
| 27 | Region-level "unavailable": all running instances in two or more zones have no external connectivity at the same time | 3 | PASS | "when all of your running instances deployed in two or more AZs in the same AWS region ... concurrently have no external connectivity." |
| 28 | Credit tiers: below 99.99% and at least 99.0% gives 10%; below 99.0% and at least 95.0% gives 30%; below 95.0% gives 100% | 3 | PASS | "Less than 99.99% but equal to or greater than 99.0% 10% Less than 99.0% but equal to or greater than 95.0% 30% Less than 95.0% 100%" (Region-Level table). Advisory: the Instance-Level table starts at "Less than 99.5%", so the first tier of the page applies to the region-level promise only. The page paragraph comes after both promises. |
| 29 | You get a service credit, not a refund | 3 | PASS | "Service Credits will not entitle you to any refund or other payment from AWS." |
| 30 | The credit is a share of the monthly bill | 3 | PASS | "Service Credits are calculated as a percentage of the monthly bill" |
| 31 | You must claim it and send your logs | 3 | PASS | "To receive a Service Credit, you must submit a claim by opening a case in the AWS Support Center." / "your request logs that document the errors and corroborate your claimed outage" |
| 32 | The credit is the only remedy | 3 | PASS | "this SLA sets forth your sole and exclusive remedies, and AWS’ sole and exclusive" (obligations) |
| 33 | The SLA has exclusions, such as events outside the vendor's reasonable control | 3 | PASS | "do not apply to any unavailability ... caused by factors outside of our reasonable control, including any force majeure event" |
| 34 | Mistake: a target copied from current performance can lock you into heroic effort for a system that needs a redesign | 2 | PASS | "Don’t pick a target based on current performance While understanding the merits and limits of a system is essential, adopting values without reflection may lock you into supporting a system that requires heroic redesign" |
| 35 | Mistake: pick a few indicators users care about, not every metric | 2 | PASS | "You shouldn’t use every metric you can track in your monitoring system as an SLI; an understanding of what your users want from the system will inform the judicious selection of a few indicators." |
| 36 | Mistake: some problems hit users but not the server; some systems need client-side measurement | 2 | PASS | "some systems should be instrumented with client -side collection, because not measuring behavior at the client can miss a range of problems that affect users but don’t affect server-side metrics." |
| 37 | Mistake: read the SLA for what it defines as "unavailable" and what it excludes | 3 | PASS | The AWS SLA has a definitions entry "“Unavailable” and “Unavailability” mean: ..." and an exclusions clause ("do not apply to any unavailability ... caused by factors outside of our reasonable control"). |
| 38 | Dependencies: 99.9% x 99.9% = 0.998001, about 99.8% | none (own) | PASS | 0.999 x 0.999 = 0.998001. The page marks it "the tutorial's own point" and states the assumption (two parts, each needed, failing on their own). It has no cite and says no source states it. |
| 39 | Key words table: Availability, Nines, SLI, SLO, SLA, Error budget, Service credit, Downtime | none | PASS | Each row repeats a claim checked above. "99.9% is three nines" is the same arithmetic as claim 1 (chapter 4 also calls 99.95% "three and a half nines"). Service credit "applied only against future payments" in the AWS SLA. |

Tutorial-own text: the tip callout says "This advice is the tutorial's own. It is not a claim from a source." Its bullets state no sourced fact. The arithmetic paragraph and the dependency bullet are marked as the tutorial's own. The intro shop analogy states no fact. PASS.

Claims checked: 39.

## Other checks

| # | Check | Verdict | Detail |
|---|---|---|---|
| S1 | Every `page.sources` entry is `https://` | PASS | sre.google (2), aws.amazon.com (1) |
| S2 | Every source is cited at least once | PASS | [1] x10, [2] x8, [3] x10 |
| S3 | Every `<Cite n>` has a source | PASS | n is 1, 2, or 3 only |
| S4 | No source is a blog, forum, AI summary, or systemdesignbangla.com | PASS | Google SRE book (official book site) and the AWS SLA page. The string "systemdesignbangla" is not in the file. |
| S5 | Section order | PASS | In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words. Key words is last. |
| C1 | No run of 8 or more words copied from a source | FAIL (fixed, see Re-check) | "target as both a minimum and a maximum" is 8 words in a row from S1 ("we view the availability target as both a minimum and a maximum"). Fix: reword, for example "Google treats a target as a floor and a ceiling". |
| C2 | Same check, other sources | FAIL (fixed, see Re-check) | "a Monthly Uptime Percentage of at least 99.99%" is 8 words in a row from S3. It is a defined term of the SLA plus the number. Fix: reword, for example "a monthly uptime of 99.99% or better" (keep the term "Monthly Uptime Percentage" alone if needed). No run of 8 or more words from S2. |

Advisory (not counted as FAIL): claims 24 and 28, as noted in the table.

## Re-check (after the writer changed the page)

Changed text, checked against the SLA text fetched again:

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| R1 | "Google sees a target as a floor and also as a ceiling" | 1 | PASS | "we view the availability target as both a minimum and a maximum." Same meaning, new words. |
| R2 | Amazon promises that EC2 across two or more zones "will be up 99.99% of each month or more"; the SLA calls this figure the "Monthly Uptime Percentage" | 3 | PASS | "a Monthly Uptime Percentage of at least 99.99%, in each case during any monthly billing cycle". The quoted term is in the SLA: "“Monthly Uptime Percentage” is calculated by subtracting from 100%..." |
| R3 | AWS commits to "commercially reasonable efforts", not a guarantee | 3 | PASS | "AWS will use commercially reasonable efforts to make Amazon EC2 available". The quoted words are exact. Advisory: "not a guarantee" is the tutorial's gloss, not SLA text. The SLA pays the credit when the percentage is missed, whatever the effort. |
| R4 | "If AWS misses the region-level promise", the three tiers are 10%, 30%, 100% | 3 | PASS | Region-Level table: "Less than 99.99% but equal to or greater than 99.0% 10% Less than 99.0% but equal to or greater than 95.0% 30% Less than 95.0% 100%" |
| R5 | "These tiers are the region-level ones. The instance-level table is different: its top tier starts below 99.5%" | 3 | PASS | Instance-Level table: "Less than 99.5% but equal to or greater than 99.0% 10% Less than 99.0% but equal to or greater than 95.0% 30% Less than 95.0% 100%". The first credit tier is "less than 99.5%", so "top tier starts below 99.5%" is correct. My earlier note "starts at 99.5%" meant the same threshold. The lower two tiers are the same in both tables, and the page does not say otherwise. |
| R6 | Bullet "Measuring too many things" removed | 2 | PASS | Nothing left to check. Source 2 is still cited 7 times: SLI, SLO, SLA, quick test, business decision, current performance, client-side. All were checked above (claims 12 to 16, 34, 36) and the quotes still hold. |

Re-run checks on the new page:
- 8-word copy check on the whole page, all three sources: 0 runs of 8 words. The longest shared run is 6 words ("more reliable than it needs to", a plain phrase). C1 and C2 now PASS.
- Every cite number is 1, 2, or 3. Counts: [1] 10, [2] 7, [3] 12. All three sources are https and cited.
- Section order is unchanged: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (last).
- No new factual claim without a cite besides the tutorial's own arithmetic (unchanged and right).
- Final review edit: the gloss "not a guarantee" has no `<Cite n={3} />` now. The cite covers only the quoted "commercially reasonable efforts" (R3). The gloss is marked as the tutorial's own reading. This removes a cited claim and adds none.

Open FAILs: 0
