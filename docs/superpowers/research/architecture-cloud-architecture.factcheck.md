# Fact-check: Basic Cloud Architecture (round 1, 2026-10-20)

I did not write this page. I read `content/architecture/cloud-architecture.mdx` and `architecture-cloud-architecture.md`, fetched each of the 12 sources again with `curl` on 2026-10-20, and checked each cited sentence against the source text. Every quote below is in the fresh fetch. All 12 sources are AWS pages (docs, Well-Architected Framework, whitepaper). Each source has 1 or more cites, and each cite number has a source. I found 3 FAILs and fixed them in the MDX. The notes have 1 new claim row (21).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | Cloud computing = on-demand IT resources over the internet, pay-as-you-go | 1 | PASS | "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." |
| 2 | In plain words | Rent computing power, storage, databases from a provider | 1 | PASS | "Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis" |
| 3 | In plain words | Resources can grow or shrink with needs | 1 | PASS | "You can scale these resources up or down to instantly grow and shrink capacity" |
| 4 | In plain words | Who does what depends on the service | 3 | PASS | "Customer responsibility will be determined by the AWS Cloud services that a customer selects." |
| 5 | In plain words | On EC2 you manage the OS, updates, patches | 3 | PASS | "Customers that deploy an Amazon EC2 instance are responsible for management of the guest operating system (including updates and security patches)" |
| 6 | In plain words | RDS handles backups, patching, failure detection, recovery | 4 | PASS | "Amazon RDS manages backups, software patching, automatic failure detection, and recovery." |
| 7 | Building blocks table | VPC = logically isolated virtual network you define | 5 | PASS | "launch AWS resources in a logically isolated virtual network that you've defined" |
| 8 | Building blocks table | Auto Scaling adds or removes servers with demand | 7 | PASS | "can launch or terminate instances as demand on your application increases or decreases" |
| 9 | Building blocks table | Auto Scaling replaces broken servers | 7 | PASS | "replaces terminated or impaired instances to maintain your desired capacity" |
| 10 | Building blocks table | Managed DB runs the database and its backups | 4 | PASS | "Amazon RDS manages backups" |
| 11 | Building blocks table | CloudWatch watches resources and apps in real time | 8 | PASS | "monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time" |
| 12 | Building blocks table | Alarm when a metric crosses a limit | 8 | PASS | "alarms that continuously monitor CloudWatch metrics against user-defined thresholds. They can automatically alert you" |
| 13 | Building blocks table | Secrets given to the app at run time, not in code | 9 | PASS | "You replace hard-coded credentials with a runtime call to the Secrets Manager service" |
| 14 | In plain words | Six pillars | 2 | FAIL, fixed | The page said "AWS checks a design against six pillars". The source names the pillars for builders; it does not say AWS checks designs: "if you neglect the six pillars of operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability, it can become challenging..." Fix: "The AWS Well-Architected Framework names six pillars of a good design". |
| 15 | Common mistakes | Public subnet has a direct route out; private does not | 6 | PASS | "Public subnet – The subnet has a direct route to an internet gateway." / "Private subnet – The subnet does not have a direct route to an internet gateway." (The page says "to the internet" in plain words.) |
| 16 | Common mistakes | AWS recommends private subnets | 6 | PASS | "To protect your AWS resources, we recommend that you use private subnets." |
| 17 | Common mistakes | Secrets service removes hard-coded credentials | 9 | PASS | "you no longer need hard-coded credentials in application source code" |
| 18 | Common mistakes | You still choose backups: automated backups or snapshots | 4 | FAIL, fixed | The page said "you still turn on automated backups or make snapshots", as if it is required. The source says "can": "You can turn on automated backups, or manually create your own backup snapshots." Fix: "you still choose how to back up: you can turn on automated backups, or make your own backup snapshots". |
| 19 | Common mistakes | Test backups with a real recovery | 10 | PASS | "Validate that your backup process implementation meets your... RTO and RPO by performing a recovery test." |
| 20 | Common mistakes | Budgets alert on actual and forecasted spend | 11 | PASS | "You can choose to be alerted for both actual (after accruing) and forecasted (before accruing) spends." |
| 21 | Common mistakes | Separate accounts keep production and non-production apart | 12 | PASS | "By using separate accounts for the non-production and production environments, by default, the resources and data... are separated" |
| 22 | Common mistakes | Forgotten test server "costs money every hour" | — | FAIL, fixed | A billing unit with no cite (EC2 does not bill only by the hour). Fix: "keeps costing money while it runs", which follows from row 1 (pay-as-you-go). |
| 23 | In plain words | Cloud architecture = the plan; other clouds have the same blocks | — | PASS | Tutorial's own framing, recorded in the notes' scope note. |
| 24 | When you need it, A real-life example, What a tester can check, Key words | Lists, LMS example, tips, meanings | — | PASS | Tutorial's own words. The tip callout title is "Tutorial advice". Key words agree with rows 1 to 21. |

## Fixes

1. Six pillars sentence names the Well-Architected Framework and no longer says AWS "checks" a design (row 14).
2. Backup sentence uses "can", as RDS docs do (row 18).
3. "costs money every hour" changed to "keeps costing money while it runs" (row 22).

Open FAILs: 0
