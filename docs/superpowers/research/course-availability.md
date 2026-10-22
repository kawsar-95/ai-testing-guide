# Availability (Course) — research notes (2026-10-22)

Fetch note: each source was fetched with `curl -sL` on 2026-10-22 and stripped to plain text in `/tmp/claude-1000/course-src-availability/`. The quotes below are copied from that text. The raw text was not committed. The page uses its own words and quotes nothing.

## Sources

S1. Embracing Risk (Site Reliability Engineering, chapter 3) — Google — https://sre.google/sre-book/embracing-risk/ — accessed 2026-10-22. Page cite `[1]`.
S2. Service Level Objectives (Site Reliability Engineering, chapter 4) — Google — https://sre.google/sre-book/service-level-objectives/ — accessed 2026-10-22. Page cite `[2]`.
S3. Amazon Compute Service Level Agreement (last updated May 25, 2022 on the fetched page) — Amazon Web Services — https://aws.amazon.com/ec2/sla/ — accessed 2026-10-22. Page cite `[3]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Availability is often given as a number of "nines" (99.9%, 99.99%, 99.999%) | S1 | "Unplanned downtime is captured by the desired level of service availability , usually expressed in terms of the number of "nines" we would like to provide: 99.9%, 99.99%, or 99.999% availability." |
| 2 | Each extra nine is a tenfold improvement toward 100% | S1 | "Each additional nine corresponds to an order of magnitude improvement toward 100% availability." |
| 3 | Time-based availability is computed from uptime; a 99.99% target allows up to 52.56 minutes of downtime in a year | S1 | "a system with an availability target of 99.99% can be down for up to 52.56 minutes in a year and stay within its availability target" |
| 4 | For a global service, a request success rate is used instead of uptime | S1 | "instead of using metrics around uptime, we define availability in terms of the request success rate ." |
| 5 | Request success rate is a reasonable approximation of unplanned downtime as the user sees it, but not all requests are equal (sign-up vs background poll) | S1 | "failing a new user sign-up request is different from failing a request polling for new email in the background. In many cases, however, availability calculated as the request success rate over all requests is a reasonable approximation of unplanned downtime, as viewed from the end-user perspective." |
| 6 | 100% is probably never the right target: impossible, and more than users notice | S1 | "100% is probably never the right reliability target: not only is it impossible to achieve, it’s typically more reliability than a service’s users want or notice." |
| 7 | Cost does not rise in a straight line: one step up can cost 100x the previous step | S1 | "cost does not increase linearly as reliability increments—an incremental improvement in reliability may cost 100x more than the previous increment." |
| 8 | A target is both a minimum and a maximum; too much reliability wastes chances to add features | S1 | "we view the availability target as both a minimum and a maximum." / "that would waste opportunities to add features to the system, clean up technical debt, or reduce its operational costs." |
| 9 | The error budget is the gap between the SLO and 100%; releases can go on while budget remains | S1 | "The difference between these two numbers is the "budget" of how much "unreliability" is remaining for the quarter. As long as the uptime measured is above the SLO—in other words, as long as there is error budget remaining—new releases can be pushed." |
| 10 | Example: SLO 99.999% of queries per quarter gives an error budget of a 0.001% failure rate | S1 | "a service’s SLO is to successfully serve 99.999% of all queries per quarter. This means that the service’s error budget is a failure rate of 0.001% for a given quarter." |
| 11 | An SLI is a carefully defined measure of some aspect of service level; common SLIs are latency, error rate, throughput | S2 | "An SLI is a service level indicator —a carefully defined quantitative measure of some aspect of the level of service that is provided. Most services consider request latency ... Other common SLIs include the error rate ... and system throughput" |
| 12 | An SLO is a target value or range for a service level measured by an SLI | S2 | "An SLO is a service level objective : a target value or range of values for a service level that is measured by an SLI." |
| 13 | An SLA is a contract with consequences for meeting or missing SLOs; the consequence is often a rebate or penalty | S2 | "SLAs are service level agreements : an explicit or implicit contract with your users that includes consequences of meeting (or missing) the SLOs they contain. The consequences are most easily recognized when they are financial—a rebate or a penalty" |
| 14 | Tell SLO from SLA by asking what happens if it is missed: no explicit consequence means SLO | S2 | "ask "what happens if the SLOs aren’t met?": if there is no explicit consequence, then you are almost certainly looking at an SLO." |
| 15 | Choose a few indicators that users care about, not every metric | S2 | "You shouldn’t use every metric you can track in your monitoring system as an SLI" |
| 16 | SLIs can need client-side measurement; server metrics can miss problems users feel | S2 | "some systems should be instrumented with client -side collection, because not measuring behavior at the client can miss a range of problems that affect users but don’t affect server-side metrics." |
| 17 | Do not pick a target only from current performance | S2 | "Don’t pick a target based on current performance" |
| 18 | AWS EC2 Region-Level SLA: at least 99.99% Monthly Uptime Percentage when instances run in two or more AZs of a region | S3 | "For Amazon EC2 with all running instances deployed concurrently across two or more AZs in the same region ... AWS will use commercially reasonable efforts to make Amazon EC2 available for each AWS region with a Monthly Uptime Percentage of at least 99.99%" |
| 19 | AWS EC2 Instance-Level SLA: at least 99.5% for a single instance | S3 | "AWS will use commercially reasonable efforts to make the Single EC2 Instance available with an Instance-Level Uptime Percentage of at least 99.5%" |
| 20 | Missing the SLA gives a service credit by tier (below 99.99% and at least 99.0%: 10%; below 99.0% and at least 95.0%: 30%; below 95.0%: 100%); credit is a percent of the monthly bill | S3 | "Less than 99.99% but equal to or greater than 99.0% 10% Less than 99.0% but equal to or greater than 95.0% 30% Less than 95.0% 100%" / "Service Credits are calculated as a percentage of the monthly bill" |
| 21 | The customer must claim the credit and send logs | S3 | "To receive a Service Credit, you must submit a claim by opening a case in the AWS Support Center." / "your request logs that document the errors and corroborate your claimed outage" |
| 22 | Credits are the only remedy; they are not a refund | S3 | "Service Credits will not entitle you to any refund or other payment from AWS." / "exclusive remedies, and AWS’ sole and exclusive obligations" |
| 23 | Monthly Uptime Percentage is 100% minus the percent of minutes in the month in the Unavailability state | S3 | "“Monthly Uptime Percentage” is calculated by subtracting from 100% the percentage of minutes during the month in which Amazon EC2 was in the state of Unavailability." |
| 24 | "Unavailable" in the Region-Level SLA means all running instances in two or more AZs have no external connectivity at once | S3 | "when all of your running instances deployed in two or more AZs in the same AWS region ... concurrently have no external connectivity." |
| 25 | The SLA has exclusions (for example, causes outside AWS's reasonable control) | S3 | "do not apply to any unavailability ... caused by factors outside of our reasonable control, including any force majeure event" |

## The page's own arithmetic (no cite)

One year = 365 x 24 x 60 = 525,600 minutes. Downtime allowed = 525,600 x (1 - target).
- 99.9%: 525.6 min (about 8.8 hours).
- 99.99%: 52.56 min (S1 states this value; claim 3).
- 99.999%: 5.256 min (about 5.3 minutes).
Two parts in a chain, each 99.9%, if each fails on its own and both are needed: 0.999 x 0.999 = 0.998001, about 99.8%.
