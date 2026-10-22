# Fact-check: SLA, SLO, and SLI (`content/course/sla-slo-sli.mdx`)

Reviewer did not write the page. Sources fetched 2026-10-22 with curl into `/tmp/claude-1000/fc4-sla-slo-sli/` and read in full: S1 = https://sre.google/sre-book/service-level-objectives/ (cite 1), S2 = https://sre.google/workbook/implementing-slos/ (cite 2).

## Claims

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | SLI is a carefully defined number that measures one aspect of the service | 1 | PASS | "a carefully defined quantitative measure of some aspect of the level of service that is provided" |
| 2 | Latency, error rate, throughput are common SLIs | 1 | PASS | "Most services consider request latency ... Other common SLIs include the error rate ... and system throughput" |
| 3 | SLO is a target value or range for an SLI; SLI under a limit or between bounds | 1 | PASS | "a target value or range of values for a service level that is measured by an SLI ... SLI ≤ target, or lower bound ≤ SLI ≤ upper bound" |
| 4 | SLA is a contract with users with consequences for meeting or missing the SLOs in it | 1 | PASS | "an explicit or implicit contract with your users that includes consequences of meeting (or missing) the SLOs they contain" (page drops "explicit or implicit", which only narrows, and does not claim more) |
| 5 | Consequence is easiest to see when it is money (rebate, penalty) | 1 | PASS | "most easily recognized when they are financial—a rebate or a penalty—but they can take other forms" |
| 6 | Test: if nothing explicit happens when missed, almost certainly an SLO | 1 | PASS | "if there is no explicit consequence, then you are almost certainly looking at an SLO" |
| 7 | People often say SLA when they mean SLO; "SLA violation" is nearly always a missed SLO | 1 | PASS | footnote 16: "Most people really mean SLO when they say 'SLA.' ... almost always talking about a missed SLO" |
| 8 | Availability is an SLI: fraction of time usable, often share of valid requests that succeed | 1 | PASS | "the fraction of the time that a service is usable. It is often defined in terms of the fraction of well-formed requests that succeed" |
| 9 | Without an explicit SLO users form own beliefs; over-reliance and under-reliance | 1 | PASS | "Without an explicit SLO, users often develop their own beliefs ... over-reliance ... under-reliance" |
| 10 | A published SLO sets expectations | 1 | PASS | "Publishing SLOs sets expectations for system behavior" |
| 11 | SLOs help decide engineering priorities; weigh features against reliability | 2 | PASS | "SLOs are a tool to help determine what engineering work to prioritize"; "investing in functionality ... versus investing in the reliability" |
| 12 | Loop: measure SLIs, compare with SLOs, decide, act; without SLO you would not know whether or when to act | 1 | PASS | "Compare the SLIs to the SLOs, and decide whether or not action is needed ... Without the SLO, you wouldn't know whether (or when) to take action." |
| 13 | SLIs and SLOs worth defining even with no SLA | 1 | PASS | "Whether or not a particular service has an SLA, it's valuable to define SLIs and SLOs" |
| 14 | Start from what users care about, not what is easy to measure | 1 | PASS | "Start by thinking about ... what your users care about, not what you can measure" |
| 15 | Too many SLIs hide the important ones; a handful is typically enough | 1 | PASS | "Choosing too many indicators makes it hard to pay the right level of attention ... We typically find that a handful of representative indicators are enough" |
| 16 | Workbook suggests five or fewer SLI types | 2 | PASS | "We recommend choosing a small number (five or fewer) of SLI types" |
| 17 | Table: serving = availability, latency, throughput; storage = latency, availability, durability; pipeline = throughput, end-to-end latency; all = correctness | 1 | PASS | "User-facing serving systems ... availability, latency, and throughput"; "Storage systems often emphasize latency, availability, and durability"; "Big data systems, such as data processing pipelines, tend to care about throughput and end-to-end latency"; "All systems should care about correctness" |
| 18 | Workbook advises SLI as good events divided by all events, 0% to 100% | 2 | PASS (after fix, see Re-check) | Source: "While many numbers can function as an SLI, we generally recommend treating the SLI as the ratio of two numbers". The page says "advises one shape", which drops "generally" and "many numbers can function". Fix: "usually recommends" or "recommends, for most SLIs". The 0% to 100% part passes. |
| 19 | Server-side data is easy to collect but can miss client-only problems such as slow page scripts | 1 | PASS | "most naturally gathered on the server side ... not measuring behavior at the client can miss a range of problems ... poor user latency due to problems with the page's JavaScript" |
| 20 | For a first SLI, use data you already have, such as web server logs | 2 | PASS | "For your first SLIs, choose something that requires a minimum of engineering work. If your web server logs are already available ... use the logs." |
| 21 | Average hides the slow tail; 50 ms typical, 5% 20 times slower; alerts on the average show no change | 1 | PASS | "although a typical request is served in about 50 ms, 5% of requests are 20 times slower! Monitoring and alerting based only on the average latency would show no change in behavior over the course of the day" (page drops "over the course of the day", which does not change the meaning) |
| 22 | High percentile (99th) shows a plausible worst case; median (50th) shows the typical case | 1 | PASS | "a high-order percentile, such as the 99th or 99.9th, shows you a plausible worst-case value, while using the 50th percentile (also known as the median) emphasizes the typical case" |
| 23 | Workbook suggests several grades of one SLO: 90% under 100 ms, 99% under 400 ms | 2 | PASS | "we also recommend using multiple grades of SLOs for some types of SLIs ... 90% of requests are faster than 100 ms, and 99% of requests are faster than 400 ms" |
| 24 | Budget is 100% minus the SLO; 99.9% SLO, 3 million requests in four weeks, 3,000 errors; 1,500 errors uses half | 2 | PASS | "the error budget is 100% minus the SLO ... 99.9% success ratio SLO ... 3 million requests over a four-week period had a budget of 3,000 (0.1%) errors ... 1,500 errors, that error costs 50% of the error budget" |
| 25 | The book uses the gap between miss rate and budget as input for release decisions | 1 | PASS | "The SLO violation rate can be compared against the error budget ..., with the gap used as an input to the process that decides when to roll out new releases" |
| 26 | A written policy says what to do when the budget is gone; common actions: stop launches until in SLO, or move some or all engineering time to reliability | 2 | PASS | "you need to start with a written policy"; "Common policies include stopping feature launches until the service is once again within SLO or devoting some or all engineering time to working on reliability-related bugs" |
| 27 | The book calls 100% unrealistic and undesirable; it can slow releases, or need expensive, overly cautious designs | 1 | PASS | "It's both unrealistic and undesirable to insist that SLOs will be met 100% of the time: doing so can reduce the rate of innovation and deployment, require expensive, overly conservative solutions, or both." The hedge "can" is kept. |
| 28 | Workbook reason: components can fail at the same time, even with redundancy | 2 | PASS | "Even with redundant components ... there is a nonzero probability that one or more components will fail simultaneously" (the source's condition "If your SLO is aligned with customer satisfaction" is dropped for this bullet; the page's list is introduced as the workbook's reasons, so this is advisory only) |
| 29 | Long chain of systems between you and users; any can fail | 2 | PASS | "The chain of systems between you and your customers is often long and complex, and any of these components can fail." |
| 30 | Each extra nine costs more; gain for users shrinks toward zero | 2 | PASS | "each extra nine comes at an increased cost, but the marginal utility to your customers steadily approaches zero" |
| 31 | Change is the top source of outages, so 100% means never updating | 2 | PASS | "you can never update or improve your service. The number one source of outages is change" |
| 32 | If service is far better than its SLO, users start to depend on that level | 1 | PASS | "If your service's actual performance is much better than its stated SLO, users will come to rely on its current performance." |
| 33 | Chubby (Google's lock service) had planned outages | 1 | PASS | "Chubby ... is Google's lock service"; "In any given quarter, if a true failure has not dropped availability below the target, a controlled outage will be synthesized" |
| 34 | Internal SLO tighter than published one, to fix chronic problems before users see them | 1 | PASS | "Using a tighter internal SLO than the SLO advertised to users gives you room to respond to chronic problems before they become visible externally." |
| 35 | Example: SLI, SLO 99.5% over four weeks, SLA 99%, service credit; marked as the tutorial's own | none | PASS | Page says "This example is the tutorial's own, and so is its arithmetic." No cite, no source attributed. |
| 36 | Example arithmetic: 0.5% of 2 million = 10,000; 4,000 failures = 40% of budget | none | PASS | 2,000,000 x 0.005 = 10,000; 4,000 / 10,000 = 40%. Correct. |
| 37 | Common mistake: SLA has consequences, SLO is a target | 1 | PASS | Same as rows 3 to 6 |
| 38 | Common mistake: average latency hides the slow tail | 1 | PASS | "A simple average can obscure these tail latencies" |
| 39 | Common mistake: aiming at 100%, the books call it the wrong target | 2 | PASS | "Our experience has shown that 100% reliability is the wrong target" |
| 40 | Target only from current performance: book warns; workbook allows as a first step if you keep refining | 1, 2 | PASS | S1 "Don't pick a target based on current performance"; S2 "your current performance can be a good place to start if you don't have any other information, and if you have a good process for iterating in place" |
| 41 | Too many SLOs: book advises as few as possible | 1 | PASS | "Have as few SLOs as possible" |
| 42 | Key words, SLI and SLO rows | 1 | PASS | Same as rows 1 to 3 |
| 43 | Key words, SLA: "A contract with users that states consequences for meeting or missing the SLOs in it" | 1 | PASS (after fix, see Re-check) | Source: "an explicit or implicit contract ... that includes consequences". "States" means explicit, which is stronger than the source (an SLA can be implicit; consequences "can take other forms"). Fix: "includes consequences". |
| 44 | Key words, Percentile: "A value below which a given share of measurements fall" | 1 | PASS (advisory) | The general definition is not in S1, which only says what the 99th percentile shows. It is standard statistics and the page does not attribute it to the book, but the cite sits after the whole cell. Consider placing the cite after the second sentence only. |
| 45 | Key words, Median is the 50th percentile, shows the typical case | 1 | PASS | "the 50th percentile (also known as the median) emphasizes the typical case" |
| 46 | Key words, Error budget: rate at which an SLO may be missed; workbook: 100% minus SLO | 1, 2 | PASS | S1 "a rate at which the SLOs can be missed"; S2 "100% minus the SLO" |
| 47 | Key words, Error budget policy: written plan for when budget is used up | 2 | PASS | "start with a written policy ... actions that must be taken when a service has consumed its entire error budget" |
| 48 | Key words, Rolling window: period that moves with time, such as last four weeks | 2 | PASS | "SLOs can be defined over ... either a rolling window or a calendar-aligned window"; "a four-week rolling window to be a good general-purpose interval" |
| 49 | Key words, Durability | 1 | PASS | "Durability—the likelihood that data will be retained over a long period of time" |
| 50 | Link to /course/availability/ | none | PASS | `content/course/availability.mdx` exists |

Claims checked: 50 rows (2 FAIL).

## Topic-specific checks

- SLI, SLO, SLA definitions match S1 chapter 4. The only overreach is the word "states" in the Key words SLA row (row 43). The plain-words SLA text says "includes consequences" and keeps "most easily recognized when financial".
- Error-budget arithmetic: the workbook example (3,000 and 1,500) is quoted correctly. The tutorial's own example (2 million, 0.5%, 10,000, 4,000, 40%) is correct and is marked as the tutorial's own.
- "Why not 100%": the book's hedges ("unrealistic and undesirable", "can reduce", "or both") are kept. The workbook's list is attributed to the workbook.

## Structure check

- Sources: 2, both https, both on sre.google (official Google books, not blogs), both cited. Every `<Cite n>` is 1 or 2. PASS.
- Copy check: no run of 8 or more words copied from S1 or S2 (script over word 8-grams: 0 hits; 5 hits at 6 words, all common phrases such as "feature launches until the service is"). PASS.
- Sections in order: In plain words, When you need it, How it works, Why an SLO should not be 100% (extra), A real-life example, Common mistakes, What a tester can check, Key words (last). The 6 required sections are in order and Key words is last. `tests/course.test.ts` "each course page has the entry title ... 6 required ## sections in order" passes. The extra section "Why an SLO should not be 100%" is not in the optional list of CLAUDE.md (How it works, Trade-offs, In an interview). The test accepts it, so it is an advisory note only. PASS.
- Tip callout has no `<Cite>`. No `<Voices>`. PASS.
- `#` title is "SLA, SLO, and SLI". PASS.
- Prose word count: 1089 (lede, headings, bullets, and callout text included; export block, tables, Cite tags, link URLs excluded). Within 700 to 1100, with only 11 words of margin; any fix must not add words.
- Security page: not applicable.
- Other: `npm test` fails 2 course tests (file count and route map). This is because the other course pages are not all written yet, not because of this page.

## Re-check

- Row 18 (line 47): now "The workbook generally recommends this SLI shape: good events divided by all events, from 0% to 100%". This matches "we generally recommend treating the SLI as the ratio of two numbers" and "The SLI ranges from 0% to 100%". PASS.
- Row 43 (line 100): now "A contract with users that includes consequences for meeting or missing the SLOs in it". This matches "includes consequences of meeting (or missing) the SLOs they contain". PASS.
- Row 44 (Percentile): the cite sits at the end of the cell, after the second sentence (the 99th percentile claim, which S1 supports). The first sentence is a general statistics definition and is not attributed to the book. Advisory closed.
- Copy check on the whole page again: 0 runs of 8 or more words. Word count: 1088 (limit 1100).
- No other text changed (the count differs by 1 word, from the two edits).

Open FAILs: 0
