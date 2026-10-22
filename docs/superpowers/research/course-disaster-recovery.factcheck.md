# Fact-check: Disaster Recovery (`content/course/disaster-recovery.mdx`)

Reviewer did not write the page. Sources fetched 2026-10-22 with curl into `/tmp/claude-1000/fc4-disaster-recovery/` (AWS whitepaper pages S1-S4, Azure page S5). Quotes below are from my own fetch, not from the research notes.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Azure: a disaster is a rare, major event with larger, longer impact than the HA design can absorb | 5 | PASS | "A disaster is a distinct, uncommon, major event that has a larger and longer-lasting impact than an application can mitigate through the high availability aspect of its design." |
| 2 | Azure examples: natural disasters, major human error (deleting production data), major security incidents such as ransomware | 5 | PASS | "Human errors that result in a major impact, such as accidentally deleting production data"; "Major security incidents, like denial of service or ransomware attacks that lead to data corruption" |
| 3 | DR is the planning of how you respond | 5 | PASS | "Disaster recovery is about planning how you respond to these types of situations." |
| 4 | RTO = longest acceptable delay between stop and return of service | 1 | PASS | "Recovery Time Objective (RTO) is the maximum acceptable delay between the interruption of service and restoration of service." Matches the AWS text. |
| 5 | RPO = longest acceptable time since the last recovery point; sets how much data you can lose | 1 | PASS | "Recovery Point Objective (RPO) is the maximum acceptable amount of time since the last data recovery point. This objective determines what is considered an acceptable loss of data" |
| 6 | Azure gives "30 minutes of data" (RPO) and "eight hours of downtime" (RTO) as examples | 5 | PASS | "RPO is measured in units of time, such as "30 minutes of data" or "four hours of data.""; "RTO is also measured in units of time, like "eight hours of downtime."" |
| 7 | Each component or flow can have its own values | 5 | PASS | "Each component or flow in the workload might have individual RPO and RTO values." |
| 8 | Azure: zero for both is difficult and costly; agree on realistic values | 5 | PASS | "it's tempting to aim for an RTO and RPO of zero ... in practice it's difficult and costly to implement ... decide on realistic requirements." |
| 9 | AWS: objectives not set alone; chance of disruption and cost of recovery matter | 1 | PASS | "recovery objectives should not be made in isolation; the probability of disruption and cost of recovery are key factors" |
| 10 | If recovery costs more than the failure/loss, do not put it in place, unless another reason such as regulation | 1 | PASS | "If the cost of the recovery strategy is higher than the cost of the failure or loss, the recovery option should not be put in place unless there is a secondary driver such as regulatory requirements." |
| 11 | For a less critical workload, no DR can be valid | 1 | PASS | "For less critical workloads, a valid strategy may be not to have any disaster recovery in place at all." |
| 12 | DR should be part of the wider BCP, not a separate document | 1 | PASS | "Your disaster recovery plan should be a subset of your organization's business continuity plan (BCP), it should not be a standalone document." |
| 13 | AWS: availability looks at parts of a workload; DR looks at separate copies of the whole workload | 4 | PASS | "Availability focuses on components of the workload, whereas disaster recovery focuses on discrete copies of the entire workload." Stated as AWS's. |
| 14 | A storage system that copies every change can copy a deletion/corruption; DR also needs point-in-time backups | 4 | PASS | "those destructive changes can be replicated to the secondary storage device ... a point-in-time backup is also required as part of a DR strategy." Matches the AWS HA-is-not-DR point. |
| 15 | Azure: region outage is a DR risk for a one-region workload, an HA risk for active-active multi-region with automatic failover | 5 | PASS | "a full Azure region outage would generally be considered a DR risk ... for workloads that use multiple Azure regions in an active-active configuration with full replication, redundancy, and automatic region failover, a region outage is classified as an HA risk." |
| 16 | Azure advises IaC to cut recovery time and errors | 5 | PASS | "Using IaC reduces your recovery time and potential for error, compared to manually deploying and configuring resources." |
| 17 | Failover sends traffic to a second deployment | 5 | PASS | "traffic can then be failed over to the other site" |
| 18 | Failover takes time to detect failure and switch, so RTO must allow for it | 5 | FAIL | Source: "It usually takes some time for a failover process to detect ... Make sure that the RTO of the workload is aligned with the failover time." The page drops "usually" ("It takes time to detect the failure and to switch"). The bullets also have no "Azure says" in the bullet itself. |
| 19 | Failback returns to first region later; can be complex; data may have been written after failover began | 5 | PASS | "Failback can be complex to plan and implement. For example, data in the primary region may have been written after failover begins." |
| 20 | Azure: store backups apart from main data | 5 | PASS | "they should be stored separately to the main data" |
| 21 | A restore usually loses data (backups taken now and then); RPO must match backup interval; RTO must include restore time | 5 | PASS | "Because backups are typically taken infrequently, backup restoration usually involves data loss ... workload RPO is aligned with the backup interval ... RTO accounts for the time it takes to restore your backup." |
| 22 | A runbook, a communication plan, and an escalation path | 5 | PASS | "a clear runbook, a well-defined communication plan, and a structured escalation path" |
| 23 | AWS groups DR strategies into four approaches, from cheap simple backups to more complex multi-active-Region strategies | 2 | PASS | "four approaches, ranging from the low cost and low complexity of making backups to more complex strategies using multiple active Regions" |
| 24 | In active/passive strategies the passive site serves no traffic until a failover | 2 | PASS | "The passive site ... does not actively serve traffic until a failover event is triggered." |
| 25 | Backup and restore: backed-up data; redeploy infrastructure, configuration, code at recovery | 2 | PASS | "In addition to data, you must redeploy the infrastructure, configuration, and application code in the recovery Region." |
| 26 | Backup and restore: lowest cost and complexity of the four | 2 | PASS | From text, not Figure 6: "ranging from the low cost and low complexity of making backups to more complex strategies". |
| 27 | Without IaC a restore can take longer and may miss the RTO | 2 | PASS | "Without IaC, it may be complex to restore workloads in the recovery Region, which will lead to increased recovery times and possibly exceed your RTO." |
| 28 | Pilot light: data replicated, core infrastructure in place, app servers switched off | 2 | PASS | "you replicate your data from one Region to another and provision a copy of your core workload infrastructure ... application servers, are loaded with application code and configurations, but are "switched off"" |
| 29 | Pilot light keeps ongoing cost low by keeping few resources active | 2 | PASS | "minimizes the ongoing cost of disaster recovery by minimizing the active resources" |
| 30 | Pilot light must switch on and scale out first; cannot take requests at once | 2 | PASS | "pilot light cannot process requests without additional action taken first ... requires you to "turn on" servers, possibly deploy additional (non-core) infrastructure, and scale up" |
| 31 | Warm standby: scaled-down, fully working copy, always on | 2 | PASS | "a scaled down, but fully functional, copy of your production environment in another Region ... your workload is always-on in another Region" |
| 32 | Warm standby is more economical and less complex than active/active | 2 | PASS | "if you do not want to use both Regions to handle user traffic, then Warm Standby offers a more economical and operationally less complex approach." The condition is built into the strategy, so I accept the short form. Ranking comes from text, not Figure 6. |
| 33 | Warm standby recovery is shorter than pilot light; takes traffic at reduced capacity at once; then scale up | 2 | PASS | "extends the pilot light concept and decreases the time to recovery"; "warm standby can handle traffic (at reduced capacity levels) immediately ... warm standby only requires you to scale up" |
| 34 | Active/active runs in several Regions and serves traffic from all | 2 | PASS | "Multi-site active/active serves traffic from all regions to which it is deployed" |
| 35 | Active/active is the most complex and costly | 2 | PASS | "This approach is the most complex and costly approach to disaster recovery" |
| 36 | Active/active recovery can be near zero for most disasters; data corruption may need backups so recovery point usually not zero | 2 | PASS | "it can reduce your recovery time to near zero for most disasters with the correct technology choices and implementation (however data corruption may need to rely on backups, which usually results in a non-zero recovery point)". "Can" keeps the hedge. |
| 37 | Table: "uses only the words of the AWS text" (no ranking from Figure 6) | 2 | PASS | No number or rank in the table needs Figure 6. Cost and speed ranks all trace to text quoted in rows 26, 29, 32, 33, 35. |
| 38 | AWS adds hot standby: full-size copy that takes no traffic | 2 | PASS | "hot standby serves traffic only from a single region, and the other Region(s) are only used for disaster recovery"; "provision sufficient capacity such that the recovery Region can handle the full production load as deployed. This statically stable configuration is called hot standby" |
| 39 | Hot standby avoids reliance on auto scaling (which lowers resilience) but costs more | 2 | PASS | "taking a dependency on it will lower the resiliency ... Or you may choose to provision fewer resources which will cost less, but take a dependency on Auto Scaling." |
| 40 | AWS suggests backup and restore may be enough if the disaster is the loss of one data center | 2 | FAIL | Source: "For a disaster event based on disruption or loss of one physical data center for a well-architected, highly available workload, you may only require a backup and restore approach". The page drops the condition "for a well-architected, highly available workload". |
| 41 | For loss of a whole Region, or when regulation requires it, AWS suggests the other three | 2 | PASS | "If your definition of a disaster goes beyond ... a Region or if you are subject to regulatory requirements that require it, then you should consider Pilot Light, Warm Standby, or Multi-Site Active/Active." |
| 42 | AWS: test the DR setup and run failover to the DR Region regularly so RTO and RPO are met | 3 | PASS | "Test disaster recovery implementation to validate the implementation and regularly test failover to your workload's DR Region to ensure that RTO and RPO are met." |
| 43 | AWS warns against rarely run recovery paths; secondary store may lack capacity; quotas of other Region may be too low | 3 | PASS | "A pattern to avoid is developing recovery paths that are rarely executed ... service quotas in the secondary Region might not be sufficient." |
| 44 | AWS prefers a small number of recovery paths; for a critical path, run the failure in production regularly | 3 | PASS | "having a small number of recovery paths is best"; "If you have a complex or critical recovery path, you still need to regularly execute that failure in production" |
| 45 | AWS: manage configuration drift in the DR Region | 3 | PASS | "Manage configuration drift at the DR Region." |
| 46 | Azure: include human processes in drills; without a simulation, major problems more likely; a test can show if RTO is feasible | 5 | PASS | "Include all of the human processes in your drills ... you're more likely to face major problems ... you can validate the feasibility of your RTO." |
| 47 | Backups need tests too, including a restore | 2, 5 | PASS | S2: "Your backup strategy must include testing your backups." S5: "it's critical to test your backups and restoration processes" |
| 48 | Active/active has no failover; a test checks loss of a Region: traffic routed away; other Regions carry all traffic | 2 | PASS | "there is no such thing as failover in this scenario ... Is traffic routed away from the failed Region? Can the other Region(s) handle all the traffic?" |
| 49 | Common mistakes: HA as DR (copy mirrors a deletion) | 4 | PASS | Same quote as row 14. |
| 50 | Common mistakes: aiming at zero is difficult and costly (Azure) | 5 | PASS | Same quote as row 8. |
| 51 | Common mistakes: AWS says avoid rarely run paths | 3 | PASS | Same quote as row 43. |
| 52 | Key words: Disaster, RTO, RPO, Failover, Failback, the four strategies, Hot standby, Business continuity plan | 1, 2, 5 | PASS | Each matches the rows above (4, 5, 1, 17, 19, 25, 28, 31, 34, 38, 12). |
| 53 | Key words: Point-in-time backup = a backup you can restore to the moment it was taken | 2 | PASS | "The backup should also offer a way to restore it to the point in time in which it was taken." |
| 54 | Key words: Configuration drift = a difference between the DR Region and what it should be | 3 | PASS | The source gives no definition. It says "Ensure that your infrastructure, data, and configuration are as needed at the DR Region." The paraphrase follows from that. Accepted. |

Tutorial's own text (checked that it is marked and does not state a source fact): the example paragraph starts "This example is the tutorial's own". Its arithmetic is right (a 4-hour backup interval gives up to 4 hours of loss, which is more than a 15-minute RPO). The tip callout says it is the tutorial's own advice and has no `<Cite>`. The opening paragraph (flood, bad script, ransomware) has no cite and states no source fact.

Topic checks: RTO and RPO match the AWS text. The four strategy names and descriptions match the AWS text. No cost or speed rank needs Figure 6. AWS and Azure guidance is attributed in the prose ("AWS says", "Azure says"), except the loose attribution in rows 18 (see FAIL). The HA-is-not-DR point matches the AWS page.

## Structure check

| Check | Result |
|---|---|
| Sources are https and each is cited | PASS (S1 to S5 all cited, every `<Cite n>` 1 to 5 has a source) |
| No run of 8 or more words copied (script over the page body, tables included, against all 5 fetched texts) | PASS (0 runs) |
| Section order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (last) | PASS. Extra sections How it works, Trade-offs, Testing disaster recovery sit between When you need it and A real-life example. `tests/course.test.ts` only checks the six required ones. "Testing disaster recovery" is not in the optional list of CLAUDE.md (How it works, Trade-offs, In an interview), but the test accepts it (13 pages use extra headings). |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "Disaster Recovery" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS (docs.aws.amazon.com, learn.microsoft.com) |
| Prose 700 to 1100 words | FAIL. Count: 1110 (body text after the `#` title line, excluding headings, tables, Cite tags, export block; includes the tip callout). 1136 with headings. 990 if the callout is left out. Over the limit by about 10 to 36 words. |
| Security page rule | Not a security page |

## Summary of FAILs

1. Row 18: failover bullet drops "usually" from Azure's "usually takes some time".
2. Row 40: backup and restore "may be enough" for one data center loses the AWS condition "for a well-architected, highly available workload".
3. Prose is 1110 words (limit 1100); trim about 15 to 40 words.


## Re-check

Writer fixed the 3 FAILs. I re-read the whole changed page and re-ran the copy check.

| Row | Verdict | Note |
|---|---|---|
| 18 failover bullet | PASS | Now "It usually takes some time to detect the failure and to switch, so the RTO must allow for it." Matches "It usually takes some time for a failover process to detect ..." |
| 40 backup and restore, one data center | PASS | Now "For a well-architected, highly available workload, AWS says backup and restore may be enough if the disaster is the loss of one data center." Matches the AWS text and the condition is back. |
| Word count | PASS | 1063 (body text, excluding headings, tables, Cite tags, export block; includes the tip callout). 1089 with headings. 959 without the callout. Within 700 to 1100. |

Other changed text, checked for changed meaning or dropped hedges:
- Lede ("Ransomware scrambles the data. ... each time"): no source fact. PASS.
- "So DR needs point-in-time backups too" (cite 4): matches "a point-in-time backup is also required as part of a DR strategy". PASS.
- "The table follows the AWS text only": still true; no Figure 6 rank. PASS.
- Testing section: "to check that the RTO and RPO are met", "It prefers few recovery paths", "manage configuration drift", "Backups need tests, including a restore": all still match S3, S2, S5. The critical-path and rarely-run-path hedges are kept. PASS.
- Example (tutorial's own, still marked): "In the worst case ... 4 hours of data are lost" is correct arithmetic; "the team adds ... a drill shows 90 minutes" is the tutorial's own story. PASS.
- Tip callout bullets: still the tutorial's own advice, no `<Cite>`. PASS.
- Copy check on the full body against all 5 sources: 0 runs of 8 or more words.
- Section order and Key words last: unchanged. PASS.

Open FAILs: 0
