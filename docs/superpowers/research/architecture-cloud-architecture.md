# Basic Cloud Architecture (Architecture 10) — research notes (2026-10-20)

Base text: the owner's notes, section "Basic Cloud Architecture" (`architecture-owner-notes.md`). The owner's ideas, lists, and LMS example are kept. They get no cite.

Fetch note: each source was fetched with `curl -sL` on 2026-10-20 and stripped to plain text in the scratch directory. The quotes below are copied from that text. The raw text was not committed.

Scope note: the page uses AWS as the one example cloud, because one vendor keeps the names simple for beginners. The page says that other clouds have the same building blocks under other names. That sentence is the tutorial's own words and has no cite.

## Sources

S1. What is Cloud Computing? — Amazon Web Services — https://aws.amazon.com/what-is-cloud-computing/ — accessed 2026-10-20. Page cite `[1]`.
S2. The pillars of the framework — AWS Well-Architected Framework — https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html — accessed 2026-10-20. Page cite `[2]`.
S3. Shared Responsibility Model — Amazon Web Services — https://aws.amazon.com/compliance/shared-responsibility-model/ — accessed 2026-10-20. Page cite `[3]`.
S4. What is Amazon Relational Database Service (Amazon RDS)? — Amazon RDS User Guide — https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html — accessed 2026-10-20. Page cite `[4]`.
S5. What is Amazon VPC? — Amazon VPC User Guide — https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html — accessed 2026-10-20. Page cite `[5]`.
S6. Subnets for your VPC — Amazon VPC User Guide — https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html — accessed 2026-10-20. Page cite `[6]`.
S7. What is Amazon EC2 Auto Scaling? — Amazon EC2 Auto Scaling User Guide — https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html — accessed 2026-10-20. Page cite `[7]`.
S8. What is Amazon CloudWatch? — Amazon CloudWatch User Guide — https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html — accessed 2026-10-20. Page cite `[8]`.
S9. What is AWS Secrets Manager? — AWS Secrets Manager User Guide — https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html — accessed 2026-10-20. Page cite `[9]`.
S10. REL09-BP04 Perform periodic recovery of the data to verify backup integrity and processes — AWS Well-Architected Framework — https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_backing_up_data_periodic_recovery_testing_data.html — accessed 2026-10-20. Page cite `[10]`.
S11. Managing your costs with AWS Budgets — AWS Cost Management User Guide — https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html — accessed 2026-10-20. Page cite `[11]`.
S12. Benefits of using multiple AWS accounts — Organizing Your AWS Environment Using Multiple Accounts (AWS Whitepaper) — https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/benefits-of-using-multiple-aws-accounts.html — accessed 2026-10-20. Page cite `[12]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Cloud computing is on-demand IT resources over the internet with pay-as-you-go pricing | S1 | "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." |
| 2 | You use computing power, storage, and databases from a provider instead of owning servers | S1 | "Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider" |
| 3 | You can scale resources up or down as needs change | S1 | "You can scale these resources up or down to instantly grow and shrink capacity as your business needs change." |
| 4 | Six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability | S2 | "if you neglect the six pillars of operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability, it can become challenging to build a system that delivers on your expectations and requirements." |
| 5 | On a virtual server (EC2, IaaS), the customer manages the guest OS, updates, and patches | S3 | "Customers that deploy an Amazon EC2 instance are responsible for management of the guest operating system (including updates and security patches)" |
| 6 | The customer's share of the work depends on the services it selects | S3 | "Customer responsibility will be determined by the AWS Cloud services that a customer selects." |
| 7 | A managed database (RDS) handles backups, patching, failure detection, and recovery | S4 | "Amazon RDS manages backups, software patching, automatic failure detection, and recovery." |
| 8 | Automated backups must be turned on (or manual snapshots made) | S4 | "You can turn on automated backups, or manually create your own backup snapshots." |
| 9 | A VPC is a logically isolated virtual network that you define | S5 | "With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined." |
| 10 | A public subnet has a direct route to an internet gateway; a private subnet does not | S6 | "Public subnet – The subnet has a direct route to an internet gateway." / "Private subnet – The subnet does not have a direct route to an internet gateway." |
| 11 | AWS recommends private subnets to protect resources | S6 | "To protect your AWS resources, we recommend that you use private subnets." |
| 12 | Auto Scaling keeps the group between a minimum and maximum size and launches or terminates instances with demand | S7 | "If you specify scaling policies, then Amazon EC2 Auto Scaling can launch or terminate instances as demand on your application increases or decreases." |
| 13 | Auto Scaling replaces impaired instances | S7 | "replaces terminated or impaired instances to maintain your desired capacity." |
| 14 | CloudWatch monitors resources and applications in real time | S8 | "Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time" |
| 15 | CloudWatch alarms alert you when a metric crosses a threshold | S8 | "You can set up alarms that continuously monitor CloudWatch metrics against user-defined thresholds. They can automatically alert you to breaches of the thresholds" |
| 16 | With a secrets manager, you no longer need hard-coded credentials in source code | S9 | "Secrets Manager helps you improve your security posture, because you no longer need hard-coded credentials in application source code." |
| 17 | The app gets credentials at run time with a call to the service | S9 | "You replace hard-coded credentials with a runtime call to the Secrets Manager service to retrieve credentials dynamically when you need them." |
| 18 | Test backups by doing a recovery | S10 | "Validate that your backup process implementation meets your Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) by performing a recovery test." |
| 19 | AWS Budgets tracks costs and can alert on actual and forecasted spend | S11 | "You can use AWS Budgets to track and take action on your AWS costs and usage." / "You can choose to be alerted for both actual (after accruing) and forecasted (before accruing) spends." |
| 20 | Separate accounts for production and non-production keep their resources and data apart | S12 | "By using separate accounts for the non-production and production environments, by default, the resources and data that make up a workload environment are separated from other environments and workloads." |
| 21 | (fact-check) Claim 4 wording: the framework names six pillars; it does not "check" a design | S2 | "Incorporating these pillars into your architecture will help you produce stable and efficient systems." |

## Owner claims kept without a cite

- "In a VPS, you usually manage one server yourself." The page states the cited fact (claim 5) and keeps the VPS comparison as the tutorial's own words.
- The LMS cloud setup list (app servers or containers, managed MySQL, object storage, CDN, Redis, monitoring, DNS, load balancer). Tutorial example.
- "When you need it" list and the tester checks. Tutorial advice.
