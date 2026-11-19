# Fact check: devops / aws-compute-storage

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html; S2 https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html; S3 https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / aws-compute-storage (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "EC2 instances, EBS volumes, and S3. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This text describes the page. It is not a fact about a tool, product, command, or number. |
| 2 | Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud | S1 | PASS | "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web" (S1 line 3; the line is cut after "Web", so the words "Services (AWS) Cloud" are not in my grep output). |
| 3 | Amazon S3 is an object storage service that stores data as objects within buckets | S2 | FAIL | S2 says: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." The page drops "hierarchical data, or tabular data" and so implies that objects are the only data type. Fix: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." |
| 4 | An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances | S3 | PASS | "An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances." |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains. The Technical sentence on S3 now gives the wording of S2 in full: "stores data as objects, hierarchical data, or tabular data within buckets".

## Round 2 (2026-11-05)

## Fact check: devops / aws-compute-storage (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "EC2, S3, and EBS. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | Sentence that describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Amazon EC2 provides on-demand, scalable computing capacity in the AWS Cloud | S1 | PASS | S1: "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web" + "Services (AWS) Cloud" |
| 2 | Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets | S2 | PASS | S2: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." |
| 3 | An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances | S3 | PASS | S3: "An Amazon EBS volume is a durable, block-level storage device that you can attach to your" + "instances." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / aws-compute-storage (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "EC2, S3, and EBS. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Amazon EC2 provides on-demand, scalable computing capacity in the AWS Cloud | S1 | PASS | S1: "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud." |
| 2 | Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets | S2 | PASS | S2: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." |
| 3 | An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances | S3 | PASS | S3: "An Amazon EBS volume is a durable, block-level storage device that you can attach to your" (the sentence continues on the next line: "instances"). |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / aws-compute-storage (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "EC2, S3, and EBS. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Amazon EC2 provides on-demand, scalable computing capacity in the AWS Cloud | S1 | PASS | S1.txt: "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web ... Services (AWS) Cloud." |
| 2 | Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets | S2 | PASS | S2.txt: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." |
| 3 | An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances | S3 | PASS | S3.txt: "An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances." (the line breaks between "your" and "instances") |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 24 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-18)

# Fact check: devops / aws-compute-storage (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | EC2, EBS, S3 topics, offline CLI run, read-along | none | N/A | Describes the page itself. |
| 2 | Lede | Three services; what the page covers; practice run needs no account | none | N/A | Framing sentences that describe the page. The links are not facts. |
| 3 | What it is | EC2 provides on-demand, scalable computing capacity in the AWS Cloud | 1 | PASS | S1: "provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud" |
| 4 | What it is | An EC2 instance is a virtual server in the AWS Cloud | 1 | PASS | S1: "An EC2 instance is a virtual server in the AWS Cloud." |
| 5 | What it is | The instance type determines the hardware | 1 | PASS | S1: "the instance type that you specify determines the hardware available to your instance." |
| 6 | What it is | Each instance type offers a different balance of resources | 1 | PASS | S1: "Each instance type offers a different balance of compute, memory, network, and storage resources." |
| 7 | What it is | Instances: virtual servers | 1 | PASS | S1: "Instances Virtual servers." |
| 8 | What it is | AMIs: preconfigured templates | 1 | PASS | S1: "Preconfigured templates for your instances that package the components you need for your server (including the operating system and additional software)." |
| 9 | What it is | Instance types: CPU, memory, storage, networking, graphics | 1 | PASS | S1: "Various configurations of CPU, memory, storage, networking capacity, and graphics hardware" |
| 10 | What it is | EBS volumes: persistent storage | 1 | PASS | S1: "Persistent storage volumes for your data using Amazon Elastic Block Store" |
| 11 | What it is | Instance store volumes: temporary data deleted on stop, hibernate, terminate | 1 | PASS | S1: "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance." |
| 12 | What it is | Key pairs: AWS stores the public key, you store the private key | 1 | PASS | S1: "AWS stores the public key and you store the private key in a secure place." |
| 13 | What it is | Security groups: virtual firewall for protocols, ports, source IP ranges | 1 | PASS | S1: "A virtual firewall that allows you to specify the protocols, ports, and source IP ranges that can reach your instances" |
| 14 | What it is | EBS provides scalable, high-performance block storage usable with EC2 | 17 | PASS | S17: "provides scalable, high-performance block storage resources that can be used with Amazon Elastic Compute Cloud (Amazon EC2) instances" |
| 15 | What it is | After you attach a volume, use it like a local hard drive | 17 | PASS | S17: "you can use it in the same way you would use a local hard drive attached to a computer" |
| 16 | What it is | Snapshots are point-in-time backups that persist independently | 17 | PASS | S17: "point-in-time backups of Amazon EBS volumes that persist independently from the volume itself" |
| 17 | What it is | S3 is an object storage service | 10 | PASS | S10: "Amazon S3 is an object storage service" |
| 18 | What it is | Stores objects, hierarchical data, or tabular data within buckets | 10 | PASS | S10: "stores data as objects, hierarchical data, or tabular data within buckets" |
| 19 | What it is | An object is a file plus metadata; a bucket is a container for objects | 10 | PASS | S10: "An object is a file and any metadata that describes the file. A bucket is a container for objects." |
| 20 | What it is | Each object has a key, the unique identifier within the bucket | 10 | PASS | S10: "Each object has a key (or key name), which is the unique identifier for the object within the bucket." |
| 21 | What it is | By default buckets and objects are private | 10 | PASS | S10: "By default, S3 buckets and the objects in them are private." |
| 22 | How it works | An instance moves through states from launch to termination | 2 | PASS | S2: "transitions through different states from the moment you launch it through to its termination" |
| 23 | How it works | pending: preparing to enter running; not billed | 2 | PASS | S2: "The instance is preparing to enter the running state." then "Not billed" |
| 24 | How it works | running: ready for use; billed | 2 | PASS | S2: "The instance is running and ready for use." then "Billed" |
| 25 | How it works | stopping: preparing to be stopped; not billed | 2 | PASS | S2: "The instance is preparing to be stopped." then "Not billed" |
| 26 | How it works | Hibernate: billed while in stopping | 2 | PASS | S2: "If you hibernate an instance, you're billed while the instance is in the stopping state." |
| 27 | How it works | stopped: shut down, cannot be used, can be started at any time; not billed | 2 | PASS | S2: "The instance is shut down and cannot be used. The instance can be started at any time." then "Not billed" |
| 28 | How it works | shutting-down: preparing to be terminated; not billed | 2 | PASS | S2: "The instance is preparing to be terminated." then "Not billed" |
| 29 | How it works | terminated: permanently deleted, cannot be started; not billed | 2 | PASS | S2: "The instance has been permanently deleted and cannot be started." then "Not billed" |
| 30 | How it works | Billed per second, one-minute minimum, even if idle | 2 | PASS | S2: "you're billed for each second, with a one-minute minimum, that you keep the instance running, even if the instance remains idle and you don't connect to it." |
| 31 | How it works | EBS volumes and Elastic IPs incur charges regardless of state | 2 | PASS | S2: "Some AWS resources, such as Amazon EBS volumes and Elastic IP addresses, incur charges regardless of the instance's state." |
| 32 | How it works | You can reboot, stop, hibernate, or terminate; each keeps different things | none | N/A | Framing sentence. S2 supports it. |
| 33 | How it works | Reboot is equivalent to rebooting an OS | 2 | PASS | S2: "Rebooting an instance is equivalent to rebooting an operating system." |
| 34 | How it works | Reboot: same host; keeps public DNS name, private IP, instance store data | 2 | PASS | S2: "remains on the same host computer and maintains its public DNS name, private IP address, and any data on its instance store volumes" |
| 35 | How it works | Stop and start: lose instance store data | 2 | PASS | S2: "you lose any data on the instance store volumes attached to the previous host computer" |
| 36 | How it works | Stop and start: new public IPv4 unless secondary NIC or secondary private IPv4 tied to an EIP | 2 | PASS | S2: "The instance gets a new public IPv4 address, unless it has a secondary network interface or a secondary private IPv4 address that is associated with an Elastic IP address." |
| 37 | How it works | Hibernate: suspend-to-disk saves RAM to the EBS root volume | 2 | PASS | S2: "(suspend-to-disk), which saves the contents from the instance memory (RAM) to your Amazon EBS root volume" |
| 38 | How it works | Terminate: can't connect to or recover | 2 | PASS | S2: "You can't connect to or recover a terminated instance." |
| 39 | How it works | Termination protection blocks terminate from console, CLI, API | 2 | PASS | S2: "If you enable termination protection, you can't terminate the instance using the console, CLI, or API." |
| 40 | How it works | DeleteOnTermination; default deletes root, preserves other EBS volumes | 2 | PASS | S2: "The default is to delete the root volume and preserve any other EBS volumes." |
| 41 | How it works | Comparison table (private IPv4, Elastic IP, instance store, root volume, RAM) | 2 | PASS | S2 table: "The Elastic IP address is disassociated from the instance"; "The data is preserved"/"The data is erased"; "The volume is deleted by default"; "The RAM is saved to a file on the root volume". Private IPv4 is kept for reboot, stop and hibernate, and "None" for terminate. |
| 42 | How it works | AWS lists these options to optimize costs | 4 | PASS | S4: "You can use the following options to optimize your costs for Amazon EC2" |
| 43 | How it works | On-Demand: pay by the second | 4 | PASS | S4: "Pay, by the second, for the instances that you launch." |
| 44 | How it works | Savings Plans: commit to USD per hour, 1 or 3 years | 4 | PASS | S4: "commitment to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years" |
| 45 | How it works | Reserved Instances: consistent configuration incl. type and Region, 1 or 3 years | 4 | PASS | S4: "commitment to a consistent instance configuration, including instance type and Region, for a term of 1 or 3 years" |
| 46 | How it works | Spot: request unused instances, can reduce costs significantly | 4 | PASS | S4: "Request unused EC2 instances, which can reduce your Amazon EC2 costs significantly." |
| 47 | How it works | Capacity Reservations in a specific AZ | 4 | PASS | S4: "Reserve capacity for your EC2 instances in a specific Availability Zone." |
| 48 | How it works | Spot uses spare capacity available for less than On-Demand price | 5 | PASS | S5: "uses spare EC2 capacity that is available for less than the On-Demand price" |
| 49 | How it works | EC2 terminates, stops, or hibernates Spot when it needs capacity back | 5 | PASS | S5: "Amazon EC2 terminates, stops, or hibernates your Spot Instance when Amazon EC2 needs the capacity back." |
| 50 | How it works | Interruption notice gives two-minute warning | 5 | PASS | S5: "notice, which gives the instance a two-minute warning before it is interrupted" |
| 51 | How it works | Spot is cost-effective if flexible and interruptible | 5 | PASS | S5: "Spot Instances are a cost-effective choice if you can be flexible about when your applications run and if your applications can be interrupted." |
| 52 | How it works | On-Demand with no capacity gives an ICE | 5 | PASS | S5: "If capacity is not available when you make a launch request, you get an insufficient capacity error (ICE)." |
| 53 | How it works | AMI provides the software needed to set up and boot | 3 | PASS | S3: "an image that provides the software that is required to set up and boot an Amazon EC2 instance" |
| 54 | How it works | You must specify an AMI at launch | 3 | PASS | S3: "You must specify an AMI when you launch an instance." |
| 55 | How it works | AMI must be compatible with the instance type | 3 | PASS | S3: "The AMI must be compatible with the instance type that you chose" |
| 56 | How it works | AMI is specific to Region, OS, architecture, root volume type, virtualization type | 3 | PASS | S3: "An AMI is specific to the following: Region, Operating system, Processor architecture, Root volume type, Virtualization type" |
| 57 | How it works | Key pair is credentials to prove identity | 8 | PASS | S8: "is a set of security credentials" (the line continues on the next line of S8) |
| 58 | How it works | Anyone with the private key can connect | 8 | PASS | S8: "anyone who possesses your private key can connect to your instances that use the key" |
| 59 | How it works | EC2 keeps no copy; no recovery | 8 | PASS | S8: "Because Amazon EC2 doesn't keep a copy of your private key, there is no way to recover a" |
| 60 | How it works | User data runs config tasks or scripts after start | 6 | PASS | S6: "is used to perform automated configuration tasks, or to run scripts after the instance starts" |
| 61 | How it works | User data limited to 16 KB raw | 6 | PASS | S6: "User data is limited to 16 KB, in raw form, before it is base64-encoded." |
| 62 | How it works | By default runs only at first boot | 6 | PASS | S6: "By default, user data scripts and cloud-init directives run only during the boot cycle when you first launch an instance." |
| 63 | How it works | User data not in an AMI made from the instance | 6 | PASS | S6: "the instance user data is not included in the AMI" |
| 64 | How it works | Running instance reads metadata via IMDS | 7 | PASS | S7: "You can access instance metadata from a running instance" |
| 65 | How it works | By default IMDSv1, IMDSv2, or both | 7 | PASS | S7: "By default, you can use either IMDSv1 or IMDSv2, or both." |
| 66 | How it works | Can set IMDSv2-only, IMDSv1 calls fail | 7 | PASS | S7: "to only accept IMDSv2 calls, which will cause IMDSv1 calls to fail" |
| 67 | How it works | IMDSv2 session-oriented | 7 | PASS | S7: "IMDSv2 uses session-oriented requests." |
| 68 | How it works | Session token: one second to six hours | 7 | PASS | S7: "a minimum of one second and a maximum of six hours" |
| 69 | How it works | EBS has multiple volume types differing in performance and price | 19 | PASS | S19: "volume types, which differ in performance characteristics and price" |
| 70 | How it works | SSD types: General Purpose and Provisioned IOPS | 19 | PASS | S19: "SSD-backed volume types include General Purpose SSD and Provisioned IOPS SSD" |
| 71 | How it works | HDD types: Throughput Optimized and Cold | 19 | PASS | S19: "Throughput Optimized HDD and Cold HDD" |
| 72 | How it works | SSD optimized for transactional workloads | 19 | PASS | S19: "SSD-backed volumes are optimized for transactional workloads" |
| 73 | How it works | HDD optimized for large streaming workloads, throughput | 19 | PASS | S19: "HDD-backed volumes are optimized for large streaming workloads where the dominant" (the line continues with "performance attribute is throughput") |
| 74 | How it works | Data automatically replicated across multiple servers in an AZ | 17 | PASS | S17: "volume data is automatically replicated across multiple servers in an Availability Zone" |
| 75 | How it works | io2 Block Express 99.999%; others 99.8–99.9% | 17 | PASS | S17: "io2 Block Express volumes provide 99.999% durability ... Other volume types provide 99.8% to 99.9% durability" |
| 76 | How it works | Elastic Volumes: change capacity or performance with no downtime | 17 | PASS | S17: "use Elastic Volumes operations to dynamically increase capacity or tune performance, with no downtime" |
| 77 | How it works | Snapshot is incremental, saves only changed blocks | 18 | PASS | S18: "A snapshot is an incremental backup, which means that we save only the blocks on the volume that have changed since the most recent snapshot." |
| 78 | How it works | AWS does not auto back up EBS | 18 | PASS | S18: "AWS does not automatically back up the data stored on your EBS volumes." |
| 79 | How it works | Your job to create snapshots or automate | 18 | PASS | S18: "it is your responsibility to create EBS snapshots on a regular basis, or to set up automatic snapshot creation" |
| 80 | How it works | Each object has a storage class | 15 | PASS | S15: "Each object in Amazon S3 has a storage class associated with it." |
| 81 | How it works | Default S3 Standard | 15 | PASS | S15: "By default, objects in S3 are stored in the S3 Standard storage class" |
| 82 | How it works | All classes offer high durability | 15 | PASS | S15: "All of these storage classes offer high durability." |
| 83 | How it works | Versioning keeps multiple variants in one bucket | 11 | PASS | S11: "a means of keeping multiple variants of an object in the same bucket" |
| 84 | How it works | Disabled by default; must enable | 11 | PASS | S11: "By default, S3 Versioning is disabled on buckets, and you must explicitly enable it." |
| 85 | How it works | Delete inserts a delete marker | 11 | PASS | S11: "if you delete an object, Amazon S3 inserts a delete marker instead of removing the object permanently" |
| 86 | How it works | Overwrite creates a new version | 11 | PASS | S11: "If you overwrite an object, it results in a new object version in the bucket." |
| 87 | How it works | Can never return to unversioned; can suspend | 11 | PASS | S11: "it can never return to an unversioned state. But you can suspend versioning on that bucket." |
| 88 | How it works | Normal rates for every version stored and transferred | 11 | PASS | S11: "Normal Amazon S3 rates apply for every version of an object stored and transferred." |
| 89 | How it works | Each version is the whole object | 11 | PASS | S11: "Each version of an object is the entire object; it is not just a diff from the previous version." |
| 90 | How it works | Lifecycle config is a set of rules defining actions | 12 | PASS | S12: "An S3 Lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects." |
| 91 | How it works | Transition and Expiration actions | 12 | PASS | S12: "These actions define when objects transition to another storage class." and "These actions define when objects expire." |
| 92 | How it works | S3 deletes expired objects on your behalf | 12 | PASS | S12: "Amazon S3 deletes expired objects on your behalf." |
| 93 | How it works | Rules apply to existing and later objects | 12 | PASS | S12: "both existing objects and objects that you add later" |
| 94 | How it works | General purpose buckets: bucket policy can't stop lifecycle rule | 12 | PASS | S12: "General purpose buckets — You can't use a bucket policy to prevent deletions or transitions by an S3 Lifecycle rule." |
| 95 | How it works | Add noncurrent expiration to keep permanent delete after versioning | 11 | PASS | S11: "you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration configuration." |
| 96 | How it works | New buckets, access points, objects don't allow public access by default | 13 | PASS | S13: "By default, new buckets, access points, and objects don't allow public access." |
| 97 | How it works | Users can change policies/permissions to allow public access | 13 | PASS | S13: "users can modify bucket policies, access point policies, or object permissions to allow public access" |
| 98 | How it works | BPA settings override them | 13 | PASS | S13: "S3 Block Public Access settings override these policies and permissions" |
| 99 | How it works | Four settings, named | 13 | PASS | S13: "S3 Block Public Access provides four settings." The four setting names also appear in S13 (BlockPublicAcls at "BlockPublicAcls Setting this option to TRUE causes ..."). |
| 100 | How it works | AWS recommends all four on for the account | 13 | PASS | S13: "we recommend that you turn on all four settings for block public access for your account" |
| 101 | How it works | Settings don't alter policies/ACLs; removing makes public again | 13 | PASS | S13: "Block public access settings don't alter existing policies or ACLs. Therefore, removing a block public access setting causes a bucket or object with a public policy or ACL to again be publicly accessible." |
| 102 | How it works | No per-object BPA | 13 | PASS | S13: "Amazon S3 doesn't support block public access settings on a per-object basis." |
| 103 | How it works | Presigned URLs: time-limited access without bucket policy update | 14 | PASS | S14: "grant time-limited access to objects in Amazon S3 without updating your bucket policy" |
| 104 | How it works | Credentials are those of the IAM principal who generated it | 14 | PASS | S14: "The credentials used by the presigned URL are those of the ... IAM) principal who generated the URL." |
| 105 | How it works | Usable multiple times until expiry | 14 | PASS | S14: "You can use the presigned URL multiple times, up to the expiration date and time." |
| 106 | How it works | Console 1 min–12 h; CLI/SDK up to 7 days | 14 | PASS | S14: "between 1 minute and 12 hours. If you use the AWS CLI or AWS SDKs, the expiration time can be set as high as 7 days." |
| 107 | How it works | S3 checks expiry at the HTTP request | 14 | PASS | S14: "Amazon S3 checks the expiration date and time of a signed URL at the time of the HTTP request." |
| 108 | How it works | Restart after expiry fails | 14 | PASS | S14: "if the connection drops and the client tries to restart the download after the expiration time passes, the download fails." |
| 109 | How it works | URL expires when its credential is revoked, deleted, deactivated | 14 | PASS | S14: "a presigned URL expires when the credential you used to create it is revoked, deleted, or deactivated. This is true even if the URL was created with a later expiration time." |
| 110 | How it works | Presigned URLs are bearer tokens | 14 | PASS | S14: "presigned URLs are bearer tokens that grant access to those who possess them" |
| 111 | How it works | Strong read-after-write for PUT/DELETE in all Regions | 10 | PASS | S10: "strong read-after-write consistency for PUT and DELETE requests of objects in your Amazon S3 bucket in all AWS Regions" |
| 112 | How it works | After a successful PUT, a read returns the data | 10 | PASS | S10 line 359: "(GET or LIST request) that is initiated following the receipt of a successful PUT" |
| 113 | How it works | Bucket configs eventually consistent | 10 | PASS | S10: "Bucket configurations have an eventual consistency model." |
| 114 | How it works | Deleted bucket may still appear in list | 10 | PASS | S10: "the deleted bucket might still appear in the list" |
| 115 | How it works | AWS recommends 15 min wait after enabling versioning | 10 | PASS | S10: "We recommend that you wait for 15 minutes after enabling versioning before issuing write operations" |
| 116 | How it works | No object locking for concurrent writers | 10 | PASS | S10: "Amazon S3 does not support object locking for concurrent writers." |
| 117 | How it works | Two simultaneous PUTs: latest timestamp wins | 10 | PASS | S10: "If two PUT requests are simultaneously made to the same key, the request with the latest timestamp wins." |
| 118 | Try it | Run record (date, OS, versions, no account, no `AWS_` variables, no `~/.aws`) | none | N/A | The page labels this as the record of its own run. |
| 119 | Try it | Install page gives a one-step script, installs for current user by default | 21 | PASS | S21: "installs the AWS CLI for Linux in one step ... installs for the current user by default." |
| 120 | Try it | `.zip` installer files are signed with PGP | 21 | PASS | S21: "files are cryptographically signed using PGP signatures." |
| 121 | Try it | Tutorial checked the signature with the page's command | 21 | PASS | S21: "$ gpg --verify awscliv2.sig awscliv2.zip". The check itself is the tutorial's own record. |
| 122 | Try it | `-i` sets the directory; `-b` sets where the `aws` link goes | 21 | PASS | S21: "--install-dir or -i – This option specifies the directory to copy all of the files to." and "--bin-dir or -b ... symbolically linked to the file aws in the specified path." |
| 123 | Try it | `aws --version` code and its output | none | N/A | Record of the tutorial's run. |
| 124 | Try it | `AWS_CONFIG_FILE` stores profiles; `AWS_SHARED_CREDENTIALS_FILE` stores access keys; `AWS_EC2_METADATA_DISABLED` disables IMDS | 22 | PASS | S22: "the file that the AWS CLI uses to store configuration profiles"; "the file that the AWS CLI uses to store access keys"; "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 125 | Try it | `/dev/null` and metadata off is the tutorial's choice | none | N/A | The page's own choice. |
| 126 | Try it | `--generate-cli-skeleton` generates and displays a template | 20 | PASS | S20: "generates and displays a parameter template that you can customize and use as input on a command" |
| 127 | Try it | Template includes all parameters | 20 | PASS | S20: "The generated template includes all of the parameters that the command supports." |
| 128 | Try it | Skeleton uses underlying API parameter names | 20 | PASS | S20: "file expects you to reference all parameters by their underlying API parameter names." |
| 129 | Try it | Step 2 commands and output; `s3api create-bucket` template reading | none | N/A | The commands use the options cited above. The output and its reading are the page's own run. |
| 130 | Try it | Same option works for `aws ec2 run-instances`; User Guide shows sample output | 20 | PASS | S20: "$ aws ec2 run-instances --generate-cli-skeleton" with a sample output. |
| 131 | Try it | Step 3 filter, outputs, name matching | none | N/A | The page's own run and own choices. |
| 132 | Try it | In the User Guide sample, `DryRun` is the first name | 20 | PASS | S20: `"DryRun": true,` is the first entry after `{` in the run-instances sample. |
| 133 | Try it | `aws s3` commands don't support `--generate-cli-skeleton` | 20 | PASS | S20: "Custom AWS CLI commands, such as the aws s3 commands don't support either the --generate-cli-skeleton" |
| 134 | Try it | Step 4 output and exit 252 | none | N/A | Record of the run. |
| 135 | Try it | AWS lists 252 as syntax invalid, unknown parameter, or incorrect value | 23 | PASS | S23: "252 Command syntax was invalid, an unknown parameter was provided, or a parameter value was incorrect and prevented the command from running." |
| 136 | Try it | Use `s3api` for an S3 template, as in step 2 | none | N/A | The tutorial's own advice, based on its step 2 run. It states no new fact about a tool. |
| 137 | Try it | Step 5 is AWS's own tutorial | 9 | PASS | S9: "Get started with Amazon EC2" tutorial. Its cost section is "Cost for this tutorial". |
| 138 | Try it | Free Tier: won't cost anything if the conditions apply | 9 | PASS | S9: "it won't cost you anything to complete this tutorial, because this tutorial helps you select options that are within the Free Tier benefits." |
| 139 | Try it | Otherwise standard usage fees from launch (even if idle) to terminate | 9 | PASS | S9: "you'll incur the standard Amazon EC2 usage fees from the time that you launch the instance (even if it remains idle) until you terminate it." |
| 140 | Try it | Step: choose Launch instance | 9 | PASS | S9: "choose Launch instance." |
| 141 | Try it | Choose a Free Tier eligible AMI and instance type | 9 | PASS | S9: "select an AMI that is marked Free Tier eligible"; "select an instance type that is marked Free Tier eligible" |
| 142 | Try it | Existing or new key pair | 9 | PASS | S9: "choose an existing key pair or choose Create new key pair" |
| 143 | Try it | Proceed without a key pair: can't connect with the tutorial's methods | 9 | PASS | S9: "If you choose Proceed without a key pair (Not recommended), you won't be able to connect to your instance using the methods described in this tutorial." |
| 144 | Try it | Network settings show default VPC and a 0.0.0.0/0 security group rule | 9 | PASS | S9: "your default VPC is selected ... a security group with a rule that allows connections to your instance from anywhere (0.0.0.0/0)." |
| 145 | Try it | 0.0.0.0/0 acceptable briefly for SSH/RDP in test, unsafe for production | 9 | PASS | S9: "you might consider this acceptable for a short time in a test environment, but it's unsafe for production environments." |
| 146 | Try it | Initial state pending, then running | 9 | PASS | S9: "The initial instance state is pending. After the instance starts, its state changes to running." |
| 147 | Try it | Ready after status checks | 9 | PASS | S9: "After your instance passes its status checks, it is ready to receive connection requests." |
| 148 | Try it | Connect with any SSH client | 9 | PASS | S9: "You can connect to your Linux instance using any SSH client." |
| 149 | Try it | Example `ssh -i key-pair-name.pem ec2-user@...` and its parts | 9 | PASS | S9 line 131: "ssh -i key-pair-name.pem ec2-user@ec2-198-51-100-1.us-east-2.compute.amazonaws.com" |
| 150 | Try it | Terminating is permanent and irreversible | 9 | PASS | S9: "Terminating an instance is permanent and irreversible." |
| 151 | Try it | Back up needed data first | 9 | PASS | S9: "ensure that you have backed up all data that you need to retain" |
| 152 | Try it | Choose Instance state, Terminate (delete) instance | 9 | PASS | S9: "Choose Instance state, Terminate (delete) instance." |
| 153 | Try it | Charges stop when status is shutting down or terminated | 9 | PASS | S9: "stop incurring charges ... as soon as the instance status changes to shutting down or terminated" |
| 154 | Try it | `aws s3` high-level commands simplify managing S3 objects | 16 | PASS | S16: "The high-level aws s3 commands simplify managing Amazon S3 objects." |
| 155 | Try it | S3 charges only for what you use | 10 | PASS | S10: "Amazon S3 charges you only for what you actually use" |
| 156 | Try it | Bucket name unique across accounts and Regions in a partition | 10 | PASS | S10: "unique across all AWS accounts in all the AWS Regions within a partition." |
| 157 | Try it | Code block: `mb`, `cp filename.txt`, `ls`, `rm .../example/filename.txt`, `rb` | 16 | PASS | S16: "aws s3 mb s3://amzn-s3-demo-bucket"; "aws s3 cp filename.txt s3://amzn-s3-demo-bucket"; "aws s3 ls s3://amzn-s3-demo-bucket"; "aws s3 rm s3://amzn-s3-demo-bucket/example/filename.txt"; "aws s3 rb s3://amzn-s3-demo-bucket" |
| 158 | Try it | `rb` needs an empty bucket by default | 16 | PASS | S16: "By default, the bucket must be empty for the operation to succeed." |
| 159 | Try it | Non-empty bucket needs `--force` | 16 | PASS | S16: "To remove a bucket that's not empty, you need to include the --force option." |
| 160 | Try it | Versioned bucket with retained objects: can't remove until all content is removed | 16 | PASS | S16: "this command does not allow you to remove the bucket. You must first remove all of the content." |
| 161 | How a tester uses it | Terminate when no longer needed | 2 | PASS | S2: "When you've decided that you no longer need an instance, you can terminate it." |
| 162 | How a tester uses it | Per second, one-minute minimum, even idle | 2 | PASS | S2 (see #30). |
| 163 | How a tester uses it | Can't connect to or recover a terminated instance | 2 | PASS | S2 (see #38). |
| 164 | How a tester uses it | Back up before terminate | 9 | PASS | S9 (see #151). |
| 165 | How a tester uses it | Stopped instance: no usage charge; EBS storage charged | 2 | PASS | S2: "You are not charged for usage or data transfer fees for your instance when it is stopped. Charges are incurred for the storage of any Amazon EBS volumes." |
| 166 | How a tester uses it | Spot suits data analysis, batch jobs, background processing, optional tasks | 5 | PASS | S5: "well-suited for data analysis, batch jobs, background processing, and optional tasks" |
| 167 | How a tester uses it | Spot gets a two-minute warning | 5 | PASS | S5 (see #50). |
| 168 | How a tester uses it | Launch many instances from one AMI | 3 | PASS | S3: "You can launch multiple instances from a single AMI when you require multiple instances with the same configuration." |
| 169 | How a tester uses it | User data runs config or scripts after start | 6 | PASS | S6 (see #60). |
| 170 | How a tester uses it | After stop/start: lose instance store data; new public IPv4 unless...; keeps private IPv4 | 2 | PASS | S2: "Your instance retains its private IPv4 address"; plus #35 and #36. |
| 171 | How a tester uses it | By default IMDSv1/v2/both; can set IMDSv2-only | 7 | PASS | S7 (see #65, #66). |
| 172 | How a tester uses it | An object is identified by its key within a bucket | 10 | PASS | S10 (see #20). |
| 173 | How a tester uses it | Versioning on: overwrite gives new version; you can always restore the previous one | 11 | PASS | S11: "it results in a new object version in the bucket. You can always restore the previous version." |
| 174 | How a tester uses it | Expiration defines expiry; S3 deletes expired objects | 12 | PASS | S12 (see #91, #92). |
| 175 | How a tester uses it | New rule applies to existing objects (30-day example) | 12 | PASS | S12: "Amazon S3 will queue for removal any existing objects that are more than 30 days old." |
| 176 | How a tester uses it | New buckets, access points, objects don't allow public access | 13 | PASS | S13 (see #96). |
| 177 | How a tester uses it | GetBucketAcl/GetObjectAcl always return effective permissions | 13 | PASS | S13: "Calls to GetBucketAcl and GetObjectAcl always return the effective permissions in place" |
| 178 | How a tester uses it | IgnorePublicAcls example | 13 | PASS | S13: "GetBucketAcl returns an ACL that reflects the access permissions that Amazon S3 is enforcing, rather than the actual ACL" |
| 179 | How a tester uses it | 403: check IAM principal permissions and bucket policy deny | 14 | PASS | S14: "The IAM user or role generating the URL must have the required permissions ... check that the Amazon S3 bucket policy doesn't explicitly deny access to the object." |
| 180 | How a tester uses it | SignatureDoesNotMatch: sync clock with NTP | 14 | PASS | S14: "ensure that your system clock is synchronized with a Network Time Protocol (NTP) server, as even small time drifts can invalidate signatures." |
| 181 | How a tester uses it | IAM role URL expires when role session expires | 14 | PASS | S14: "The presigned URL expires when the role session expires, even if you specify a longer expiration time." |
| 182 | How a tester uses it | Flaky tests: eventual consistency, 15 min, latest timestamp | 10 | PASS | S10 (see #113, #115, #117). |
| 183 | How a tester uses it | AWS does not auto back up EBS | 18 | PASS | S18 (see #78). |
| 184 | How a tester uses it | Skeleton template includes all parameters; needed no account in the run | 20 | PASS | S20 (see #127). The "no account" part is the page's own run. |
| 185 | Common mistakes | Running instance billed per second, even idle | 2 | PASS | S2 (see #30). |
| 186 | Common mistakes | If Free Tier doesn't apply, standard fees until terminate | 9 | PASS | S9 (see #139). |
| 187 | Common mistakes | Stopped: no usage or transfer fees; EBS storage charged | 2 | PASS | S2: "You are not charged for usage or data transfer fees ... Charges are incurred for the storage of any Amazon EBS volumes." |
| 188 | Common mistakes | Elastic IPs incur charges regardless of state | 2 | PASS | S2 (see #31). |
| 189 | Common mistakes | Instance store data deleted on stop, hibernate, terminate | 1 | PASS | S1 (see #11). |
| 190 | Common mistakes | Terminate is permanent; default deletes root volume | 9, 2 | PASS | S9 "permanent and irreversible"; S2 "The default is to delete the root volume". |
| 191 | Common mistakes | 0.0.0.0/0 for SSH: brief test OK, unsafe in production | 9 | PASS | S9 (see #145). |
| 192 | Common mistakes | EC2 keeps no private key copy; anyone with it can connect | 8 | PASS | S8 (see #58, #59). |
| 193 | Common mistakes | User data: first boot only; not in AMI | 6 | PASS | S6 (see #62, #63). |
| 194 | Common mistakes | AWS doesn't back up EBS | 18 | PASS | S18 (see #78). |
| 195 | Common mistakes | Versioned bucket can't go back; charged for every stored version | 11 | PASS | S11: "it can never return to an unversioned state"; "Normal Amazon S3 rates apply for every version of an object stored and transferred." |
| 196 | Common mistakes | Bucket policy can't stop lifecycle rule | 12 | PASS | S12 (see #94). |
| 197 | Common mistakes | Inspect other policies besides BPA; removing a setting re-exposes | 13 | PASS | S13: "In addition to enabling Block Public Access, carefully inspect the following policies to confirm that they don't grant public access"; plus #101. |
| 198 | Common mistakes | Presigned URLs are bearer tokens | 14 | PASS | S14 (see #110). |
| 199 | Common mistakes | No object locking for concurrent writers | 10 | PASS | S10 (see #116). |
| 200 | Common mistakes | `aws s3` doesn't support `--generate-cli-skeleton` | 20 | PASS | S20 (see #133). |
| 201 | Common mistakes | Can't resume failed `aws s3` upload; files remain if killed | 16 | PASS | S16: "You can't resume a failed upload when using these aws s3 commands."; "If the multipart upload or cleanup process is canceled by a kill command or system failure, the created files remain in the Amazon S3 bucket." |
| 202 | What a tester can check | Callout "Tutorial advice" | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". Its tool facts (new public IPv4 after start, 15 min wait, stopped instance pays for EBS, IMDS versions, `s3api` vs `aws s3`) are supported elsewhere on the page. |
| 203 | Key words | EC2 instance | none | PASS | Page: "An EC2 instance is a virtual server in the AWS Cloud" |
| 204 | Key words | AMI | none | PASS | Page: "an image that provides the software that is required to set up and boot an EC2 instance" |
| 205 | Key words | Instance type | none | PASS | Page: "determines the hardware available to your instance ... a different balance of compute, memory, network, and storage resources" |
| 206 | Key words | EBS volume | none | PASS | Page: "After you attach a volume to an instance, you can use it in the same way you would use a local hard drive" |
| 207 | Key words | Instance store volume | none | PASS | Page: "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance" |
| 208 | Key words | Snapshot | none | PASS | Page: "point-in-time backups of EBS volumes"; "A snapshot is an incremental backup" |
| 209 | Key words | Key pair | none | PASS | Page: "A key pair is a set of security credentials that you use to prove your identity"; "AWS stores the public key and you store the private key" |
| 210 | Key words | User data | none | PASS | Page: "you can pass user data that performs automated configuration tasks or runs scripts after the instance starts" |
| 211 | Key words | IMDS | none | PASS | Page: "A running instance can read its instance metadata through the Instance Metadata Service (IMDS)"; "IMDSv2 uses session-oriented requests" |
| 212 | Key words | Spot Instance | none | PASS | Page: "uses spare EC2 capacity that is available for less than the On-Demand price"; "two-minute warning" |
| 213 | Key words | S3 bucket | none | PASS | Page: "A bucket is a container for objects" |
| 214 | Key words | Object key | none | PASS | Page: "Each object has a key, which is the unique identifier for the object within the bucket" |
| 215 | Key words | Storage class | none | PASS | Page: "Each object in S3 has a storage class associated with it. By default, objects are stored in the S3 Standard storage class" |
| 216 | Key words | Versioning | none | PASS | Page: "keeping multiple variants of an object in the same bucket. By default, S3 Versioning is disabled on buckets" |
| 217 | Key words | Delete marker | none | PASS | Page: "If you delete an object, S3 inserts a delete marker instead of removing the object permanently". The row adds "in a versioning-enabled bucket", which is the context of the page's versioning paragraph. |
| 218 | Key words | Lifecycle rule | none | PASS | Page: "a set of rules that define actions ... Transition actions ... Expiration actions" |
| 219 | Key words | Block Public Access | none | PASS | Page: "S3 Block Public Access settings override these policies and permissions"; "provides four settings" |
| 220 | Key words | Presigned URL | none | PASS | Page: "grant time-limited access to objects in S3 without updating your bucket policy" |
| 221 | Key words | `--generate-cli-skeleton` | none | PASS | Page: "generates and displays a parameter template that you can customize and use as input on a command" |

Open FAILs after round 6: 0

Changed after this round: No FAIL in this round. After it, the page got a 24th source (S24, the `aws ec2 run-instances` reference of the AWS CLI) and a bullet in How a tester uses it about `--dry-run`: the option checks whether you have the required permissions, and the error response is `DryRunOperation` or `UnauthorizedOperation`. The tutorial did not run it.

## Round 7 (2026-11-18)

# Fact check: devops / aws-compute-storage (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Topic list: EC2 states billed, EBS, S3 features, offline practice run, read-along | none | N/A | Sentence that describes the page itself. |
| 2 | Lede | EC2 is virtual servers, EBS is block storage for those servers, S3 is object storage | none | FAIL | No cite. The facts are in S1, S17 and S10 ("An EC2 instance is a virtual server"; "block storage resources that can be used with Amazon Elastic Compute Cloud (Amazon EC2) instances"; "an object storage service"). Fix: add the cites 1, 17, 10. |
| 3 | Lede | It covers billed states, what survives stop and terminate, S3 behaviours; the run needs no account; reading order | none | N/A | Sentences that describe the page itself. |
| 4 | What it is | EC2 provides on-demand, scalable computing capacity in the AWS Cloud | 1 | PASS | S1: "provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud" |
| 5 | What it is | An EC2 instance is a virtual server in the AWS Cloud | 1 | PASS | S1: "An EC2 instance is a virtual server in the AWS Cloud." |
| 6 | What it is | The instance type determines the hardware available | 1 | PASS | S1: "the instance type that you specify determines the hardware available to your instance" |
| 7 | What it is | Each instance type offers a different balance of compute, memory, network, storage | 1 | PASS | S1: "Each instance type offers a different balance of compute, memory, network, and storage resources." |
| 8 | What it is | EC2 provides these high-level features (intro) | 1 | PASS | S1 lists the same features (Instances, AMIs, Instance types, EBS volumes, Instance store volumes, Key pairs, Security groups). |
| 9 | What it is | Instances: virtual servers | 1 | PASS | S1: "launch as many or as few virtual servers as you need" |
| 10 | What it is | AMIs: preconfigured templates with the OS and extra software | 1 | PASS | S1: "Preconfigured templates for your instances that package the components you need for your server (including the operating system and additional" |
| 11 | What it is | Instance types: configurations of CPU, memory, storage, networking, graphics | 1 | PASS | S1: "Various configurations of CPU, memory, storage, networking capacity, and graphics hardware for your instances." |
| 12 | What it is | EBS volumes: persistent storage volumes for your data | 1 | PASS | S1: "Persistent storage volumes for your data using Amazon Elastic Block Store" |
| 13 | What it is | Instance store volumes: temporary data deleted on stop, hibernate, terminate | 1 | PASS | S1: "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance." |
| 14 | What it is | Key pairs: AWS stores the public key, you store the private key | 1 | PASS | S1: "Secure login information for your instances. AWS stores the public key and you store the private key in a secure place." |
| 15 | What it is | Security groups: virtual firewall for protocols, ports, source IP ranges | 1 | PASS | S1: "A virtual firewall that allows you to specify the protocols, ports, and source IP ranges that can reach your instances" |
| 16 | What it is | EBS provides scalable, high-performance block storage for EC2 | 17 | PASS | S17: "provides scalable, high-performance block storage resources that can be used with Amazon Elastic Compute Cloud (Amazon EC2) instances" |
| 17 | What it is | After you attach a volume you use it like a local hard drive | 17 | PASS | S17: "After you attach a volume to an instance, you can use it in the same way you would use a local hard drive attached to a computer" |
| 18 | What it is | Snapshots are point-in-time backups that persist independently | 17 | PASS | S17: "point-in-time backups of Amazon EBS volumes that persist independently from the volume itself" |
| 19 | What it is | S3 is an object storage service | 10 | PASS | S10: "Amazon Simple Storage Service (Amazon S3) is an object storage service" |
| 20 | What it is | S3 stores data as objects, hierarchical data, or tabular data within buckets | 10 | PASS | S10: "stores data as objects, hierarchical data, or tabular data within buckets" |
| 21 | What it is | An object is a file and its metadata; a bucket is a container for objects | 10 | PASS | S10: "An object is a file and any metadata that describes the file. A bucket is a container for objects." |
| 22 | What it is | Each object has a key, the unique identifier within the bucket | 10 | PASS | S10: "has a key (or key name), which is the unique identifier for the object within the bucket" |
| 23 | What it is | By default, buckets and objects are private | 10 | PASS | S10: "By default, S3 buckets and the objects in them are private." |
| 24 | How it works | An instance goes through states from launch to termination | 2 | PASS | S2: "An Amazon EC2 instance transitions through different states from the moment you launch it through to its termination." |
| 25 | How it works | pending: preparing to enter running, not billed | 2 | PASS | S2: "The instance is preparing to enter the running state." … "Not billed" |
| 26 | How it works | running: ready for use, billed | 2 | PASS | S2: "The instance is running and ready for use." "Billed" |
| 27 | How it works | stopping: preparing to be stopped, not billed | 2 | PASS | S2: "The instance is preparing to be stopped." "Not billed" |
| 28 | How it works | Hibernate: billed while in stopping | 2 | PASS | S2: "If you hibernate an instance, you're billed while the instance is in the stopping state." |
| 29 | How it works | stopped: shut down, cannot be used, can be started any time, not billed | 2 | PASS | S2: "The instance is shut down and cannot be used. The instance can be started at any time." "Not billed" |
| 30 | How it works | shutting-down: preparing to be terminated, not billed | 2 | PASS | S2: "The instance is preparing to be terminated." "Not billed" |
| 31 | How it works | terminated: permanently deleted, cannot be started, not billed | 2 | PASS | S2: "The instance has been permanently deleted and cannot be started." "Not billed" |
| 32 | How it works | Billed per second, one-minute minimum, even if idle | 2 | PASS | S2: "you're billed for each second, with a one-minute minimum, that you keep the instance running, even if the instance remains idle and you don't connect to it" |
| 33 | How it works | EBS volumes and Elastic IPs incur charges regardless of state | 2 | PASS | S2: "Some AWS resources, such as Amazon EBS volumes and Elastic IP addresses, incur charges regardless of the instance's state." |
| 34 | How it works | You can reboot, stop, hibernate, or terminate; each keeps different things | none | N/A | Framing sentence that introduces the list. |
| 35 | How it works | Reboot equals an OS reboot | 2 | PASS | S2: "Rebooting an instance is equivalent to rebooting an operating system." |
| 36 | How it works | Reboot: same host, keeps public DNS name, private IP, instance store data | 2 | PASS | S2: "The instance remains on the same host computer and maintains its public DNS name, private IP address, and any data on its instance store volumes." |
| 37 | How it works | Stop and start loses instance store data | 2 | PASS | S2: "you lose any data on the instance store volumes attached to the previous host computer" |
| 38 | How it works | Stop and start gives a new public IPv4 unless a secondary interface or private IP is tied to an Elastic IP | 2 | PASS | S2: "The instance gets a new public IPv4 address, unless it has a secondary network interface or a secondary private IPv4 address that is associated with an Elastic IP address." |
| 39 | How it works | Hibernate saves RAM to the EBS root volume | 2 | PASS | S2: "(suspend-to-disk), which saves the contents from the instance memory (RAM) to your Amazon EBS root volume" |
| 40 | How it works | Terminated instance cannot be connected to or recovered | 2 | PASS | S2: "You can't connect to or recover a terminated instance." |
| 41 | How it works | Termination protection blocks terminate by console, CLI, API | 2 | PASS | S2: "If you enable termination protection, you can't terminate the instance using the console, CLI, or API." |
| 42 | How it works | DeleteOnTermination controls delete or preserve; default deletes root, keeps others | 2 | PASS | S2: "DeleteOnTermination attribute, which controls whether the volume is deleted or preserved when you terminate the instance it is attached to. The default is to delete the root volume and preserve any other EBS volumes." |
| 43 | How it works | Table of differences (private IPv4, Elastic IP, instance store, root volume, RAM) | 2 | PASS | S2 table: "The instance keeps its private IPv4 address." / "None"; "remains associated" / "is disassociated"; "The data is preserved" / "The data is erased"; "The volume is deleted by default"; "The RAM is saved to a file on the root volume" / "The RAM is erased" |
| 44 | How it works | AWS lists these options to optimize EC2 costs | 4 | PASS | S4: "You can use the following options to optimize your costs for Amazon EC2" |
| 45 | How it works | On-Demand: pay by the second | 4 | PASS | S4: "Pay, by the second, for the instances that you launch." |
| 46 | How it works | Savings Plans: USD per hour, 1 or 3 years | 4 | PASS | S4: "commitment to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years" |
| 47 | How it works | Reserved Instances: consistent configuration incl. type and Region, 1 or 3 years | 4 | PASS | S4: "commitment to a consistent instance configuration, including instance type and Region, for a term of 1 or 3 years" |
| 48 | How it works | Spot: request unused EC2 instances, reduce costs significantly | 4 | PASS | S4: "Request unused EC2 instances, which can reduce your Amazon EC2 costs significantly." |
| 49 | How it works | Capacity Reservations: reserve capacity in a specific AZ | 4 | PASS | S4: "Reserve capacity for your EC2 instances in a specific Availability Zone." |
| 50 | How it works | Spot uses spare capacity available for less than On-Demand price | 5 | PASS | S5: "uses spare EC2 capacity that is available for less than the On-Demand price" |
| 51 | How it works | EC2 terminates, stops, or hibernates a Spot Instance when it needs the capacity | 5 | PASS | S5: "Amazon EC2 terminates, stops, or hibernates your Spot Instance when Amazon EC2 needs the capacity back." |
| 52 | How it works | Interruption notice gives a two-minute warning | 5 | PASS | S5: "notice, which gives the instance a two-minute warning before it is interrupted" |
| 53 | How it works | Spot is cost-effective if flexible and interruptible | 5 | PASS | S5: "cost-effective choice if you can be flexible about when your applications run and if your applications can be interrupted" |
| 54 | How it works | On-Demand: no capacity gives ICE | 5 | PASS | S5: "If capacity is not available when you make a launch request, you get an insufficient capacity error (ICE)." |
| 55 | How it works | AMI provides software to set up and boot an instance | 3 | PASS | S3: "an image that provides the software that is required to set up and boot an Amazon EC2 instance" |
| 56 | How it works | You must specify an AMI at launch | 3 | PASS | S3: "You must specify an AMI when you launch an instance." |
| 57 | How it works | AMI must be compatible with the instance type | 3 | PASS | S3: "The AMI must be compatible with the instance type that you chose" |
| 58 | How it works | AMI is specific to Region, OS, architecture, root volume type, virtualization type | 3 | PASS | S3: "An AMI is specific to the following: Region Operating system Processor architecture Root volume type Virtualization type" |
| 59 | How it works | Key pair is credentials to prove identity when connecting | 8 | PASS | S8: "is a set of security credentials that you use to prove your identity when connecting to an Amazon EC2 instance" |
| 60 | How it works | Anyone with the private key can connect | 8 | PASS | S8: "anyone who possesses your private key can connect to your instances that use the key pair" |
| 61 | How it works | EC2 keeps no private key copy; no recovery | 8 | PASS | S8: "Because Amazon EC2 doesn't keep a copy of your private key, there is no way to recover a private key if you lose it." |
| 62 | How it works | User data can run configuration tasks or scripts after start | 6 | PASS | S6: "you can pass user data to the instance that is used to perform automated configuration tasks, or to run scripts after the instance starts" |
| 63 | How it works | User data limit 16 KB raw before base64 | 6 | PASS | S6: "User data is limited to 16 KB, in raw form, before it is base64-encoded." |
| 64 | How it works | By default scripts run only during first boot cycle | 6 | PASS | S6: "By default, user data scripts and cloud-init directives run only during the boot cycle when you first launch an instance." |
| 65 | How it works | AMI from an instance excludes its user data | 6 | PASS | S6: "If you create an AMI from an instance, the instance user data is not included in the AMI." |
| 66 | How it works | A running instance reads metadata through IMDS | 7 | PASS | S7: "You can access instance metadata from a running instance" |
| 67 | How it works | By default IMDSv1 or IMDSv2 or both | 7 | PASS | S7: "By default, you can use either IMDSv1 or IMDSv2, or both." |
| 68 | How it works | IMDS can be set to accept only IMDSv2, so IMDSv1 fails | 7 | PASS | S7: "to only accept IMDSv2 calls, which will cause IMDSv1 calls to fail" |
| 69 | How it works | IMDSv2 uses session-oriented requests | 7 | PASS | S7: "IMDSv2 uses session-oriented requests." |
| 70 | How it works | Session token duration min one second, max six hours | 7 | PASS | S7: "create a session token that defines the session duration, which can be a minimum of one second and a maximum of six hours" |
| 71 | How it works | EBS volume types differ in performance and price | 19 | PASS | S19: "volume types, which differ in performance characteristics and price" |
| 72 | How it works | SSD types: General Purpose SSD and Provisioned IOPS SSD | 19 | PASS | S19: "SSD-backed volume types include General Purpose SSD and Provisioned IOPS SSD" |
| 73 | How it works | HDD types: Throughput Optimized HDD and Cold HDD | 19 | PASS | S19: "HDD volume types include Throughput Optimized HDD and Cold HDD" |
| 74 | How it works | SSD optimized for transactional workloads | 19 | PASS | S19: "SSD-backed volumes are optimized for transactional workloads" |
| 75 | How it works | HDD optimized for large streaming workloads, throughput dominant | 19 | PASS | S19: "HDD-backed volumes are optimized for large streaming workloads where the dominant performance attribute is throughput" |
| 76 | How it works | Volume data replicated across servers in an AZ | 17 | PASS | S17: "volume data is automatically replicated across multiple servers in an Availability Zone" |
| 77 | How it works | io2 Block Express 99.999%; others 99.8% to 99.9% | 17 | PASS | S17: "io2 Block Express volumes provide 99.999% durability … Other volume types provide 99.8% to 99.9% durability" |
| 78 | How it works | Elastic Volumes: change capacity or tune performance, no downtime | 17 | PASS | S17: "Elastic Volumes operations to dynamically increase capacity or tune performance, with no downtime" |
| 79 | How it works | Snapshot is incremental; saves only changed blocks | 18 | PASS | S18: "A snapshot is an incremental backup, which means that we save only the blocks on the volume that have changed since the most recent snapshot." |
| 80 | How it works | AWS does not auto back up EBS data | 18 | PASS | S18: "AWS does not automatically back up the data stored on your EBS volumes." |
| 81 | How it works | You must create snapshots regularly or set up automation | 18 | PASS | S18: "it is your responsibility to create EBS snapshots on a regular basis, or to set up automatic snapshot creation" |
| 82 | How it works | Each S3 object has a storage class | 15 | PASS | S15: "Each object in Amazon S3 has a storage class associated with it." |
| 83 | How it works | Default is S3 Standard | 15 | PASS | S15: "By default, objects in S3 are stored in the S3 Standard storage class" |
| 84 | How it works | All storage classes offer high durability | 15 | PASS | S15: "All of these storage classes offer high durability." |
| 85 | How it works | Versioning keeps multiple variants in one bucket | 11 | PASS | S11: "Versioning in Amazon S3 is a means of keeping multiple variants of an object in the same bucket." |
| 86 | How it works | Versioning disabled by default; must enable | 11 | PASS | S11: "By default, S3 Versioning is disabled on buckets, and you must explicitly enable it." |
| 87 | How it works | Delete inserts a delete marker | 11 | PASS | S11: "Amazon S3 inserts a delete marker instead of removing the object permanently" |
| 88 | How it works | Overwrite creates a new version | 11 | PASS | S11: "If you overwrite an object, it results in a new object version in the bucket." |
| 89 | How it works | Version-enabled bucket never returns to unversioned; can suspend | 11 | PASS | S11: "it can never return to an unversioned state. But you can suspend versioning on that bucket." |
| 90 | How it works | Normal S3 rates apply to every stored and transferred version | 11 | PASS | S11: "Normal Amazon S3 rates apply for every version of an object stored and transferred." |
| 91 | How it works | Each version is the entire object, not a diff | 11 | PASS | S11: "Each version of an object is the entire object; it is not just a diff from the previous version." |
| 92 | How it works | Lifecycle configuration is a set of rules for actions on a group of objects | 12 | PASS | S12: "An S3 Lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects." |
| 93 | How it works | Transition and expiration actions defined | 12 | PASS | S12: "Transition actions – These actions define when objects transition to another storage class." "Expiration actions – These actions define when objects expire." |
| 94 | How it works | S3 deletes expired objects on your behalf | 12 | PASS | S12: "Amazon S3 deletes expired objects on your behalf." |
| 95 | How it works | Rules apply to existing and later objects | 12 | PASS | S12: "the configuration rules apply to both existing objects and objects that you add later" |
| 96 | How it works | General purpose buckets: a bucket policy cannot stop lifecycle deletions or transitions | 12 | PASS | S12: "General purpose buckets — You can't use a bucket policy to prevent deletions or transitions by an S3 Lifecycle rule." |
| 97 | How it works | Add noncurrent expiration to keep permanent delete behaviour after enabling versioning | 11 | PASS | S11: "you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration configuration" |
| 98 | How it works | New buckets, access points, objects do not allow public access by default | 13 | PASS | S13: "By default, new buckets, access points, and objects don't allow public access." |
| 99 | How it works | Users can change policies or permissions to allow public access | 13 | PASS | S13: "users can modify bucket policies, access point policies, or object permissions to allow public access" |
| 100 | How it works | Block Public Access overrides them | 13 | PASS | S13: "S3 Block Public Access settings override these policies and permissions" |
| 101 | How it works | Four settings named | 13 | PASS | S13: "Block Public Access provides four settings"; BlockPublicAcls, IgnorePublicAcls, BlockPublicPolicy, RestrictPublicBuckets all appear. |
| 102 | How it works | AWS recommends turning on all four for your account | 13 | PASS | S13: "we recommend that you turn on all four settings for block public access for your account" |
| 103 | How it works | Settings don't alter policies; removing one makes them public again | 13 | PASS | S13: "Block public access settings don't alter existing policies or ACLs. Therefore, removing a block public access setting causes a bucket or object with a public policy or ACL to again be publicly accessible." |
| 104 | How it works | No per-object block public access | 13 | PASS | S13: "Amazon S3 doesn't support block public access settings on a per-object basis." |
| 105 | How it works | Presigned URLs give time-limited access without changing bucket policy | 14 | PASS | S14: "grant time-limited access to objects in Amazon S3 without updating your bucket policy" |
| 106 | How it works | URL uses the credentials of the IAM principal who made it | 14 | PASS | S14: "The credentials used by the presigned URL are those of the AWS Identity and Access Management (IAM) principal who generated the URL." |
| 107 | How it works | Can be used multiple times until expiry | 14 | PASS | S14: "You can use the presigned URL multiple times, up to the expiration date and time." |
| 108 | How it works | Console 1 minute to 12 hours; CLI/SDK up to 7 days | 14 | PASS | S14: "the expiration time can be set between 1 minute and 12 hours. If you use the AWS CLI or AWS SDKs, the expiration time can be set as high as 7 days." |
| 109 | How it works | Expiry checked at the time of the HTTP request | 14 | PASS | S14: "Amazon S3 checks the expiration date and time of a signed URL at the time of the HTTP request." |
| 110 | How it works | Restart after expiry fails | 14 | PASS | S14: "if the connection drops and the client tries to restart the download after the expiration time passes, the download fails" |
| 111 | How it works | URL expires when its credential is revoked, deleted, or deactivated | 14 | PASS | S14: "In general, a presigned URL expires when the credential you used to create it is revoked, deleted, or deactivated. This is true even if the URL was created with a later expiration time." |
| 112 | How it works | Presigned URLs are bearer tokens | 14 | PASS | S14: "presigned URLs are bearer tokens that grant access to those who possess them" |
| 113 | How it works | Strong read-after-write for PUT and DELETE in all Regions | 10 | PASS | S10: "strong read-after-write consistency for PUT and DELETE requests of objects in your Amazon S3 bucket in all AWS Regions" |
| 114 | How it works | After a successful PUT, a read returns the data | 10 | PASS | S10: "Any read (GET or LIST request) that is initiated following the receipt of a successful PUT response will return the data written by the PUT request." |
| 115 | How it works | Bucket configurations are eventually consistent | 10 | PASS | S10: "Bucket configurations have an eventual consistency model." |
| 116 | How it works | Deleted bucket may still be listed | 10 | PASS | S10: "the deleted bucket might still appear in the list" |
| 117 | How it works | Wait 15 minutes after enabling versioning | 10 | PASS | S10: "We recommend that you wait for 15 minutes after enabling versioning before issuing write operations" |
| 118 | How it works | No object locking for concurrent writers | 10 | PASS | S10: "Amazon S3 does not support object locking for concurrent writers." |
| 119 | How it works | Simultaneous PUTs to one key: latest timestamp wins | 10 | PASS | S10: "If two PUT requests are simultaneously made to the same key, the request with the latest timestamp wins." |
| 120 | Try it | Run record: date, OS, bash and CLI versions, no account needed, no AWS_ variable or ~/.aws, read-along not run | none | N/A | Record of the page's own run. |
| 121 | Try it | Install page gives a one-step script that installs for the current user by default | 21 | PASS | S21: "in one step … installs for the current user by default" |
| 122 | Try it | .zip installer files are signed with PGP signatures | 21 | PASS | S21: "The AWS CLI installer package .zip files are cryptographically signed using PGP signatures." |
| 123 | Try it | The tutorial checked the signature first with the command the page gives | 21 | PASS | S21: "$ gpg --verify awscliv2.sig awscliv2.zip" |
| 124 | Try it | -i and -b set the file directory and where the aws link goes | 21 | PASS | S21: "--install-dir or -i – This option specifies the directory to copy all of the files to." "--bin-dir or -b – … the main aws program … is symbolically linked to the file aws in the specified path." |
| 125 | Try it | Own commands differ in small ways; follow the page | none | N/A | Advice and record of the page's own practice. |
| 126 | Try it | `aws --version` block and its output | none | N/A | Record of the page's own run, labelled as such. |
| 127 | Try it | AWS_CONFIG_FILE stores configuration profiles; AWS_SHARED_CREDENTIALS_FILE stores access keys; AWS_EC2_METADATA_DISABLED disables IMDS | 22 | PASS | S22: "the file that the AWS CLI uses to store configuration profiles"; "the file that the AWS CLI uses to store access keys"; "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 128 | Try it | Pointing the first two at /dev/null and disabling the third is the tutorial's choice; it makes sure the CLI reads no credential file and asks no metadata service | 22 | FAIL | S22 gives only "If set to true, user credentials or configuration (like the Region) are not requested from IMDS." Nothing in S22 says that a /dev/null file makes the CLI read no credential file. Fix: keep the choice and the IMDS part, and drop the credential-file claim (or cite a source that says it). |
| 129 | Try it | --generate-cli-skeleton displays a parameter template to customize | 20 | PASS | S20: "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 130 | Try it | Template includes all parameters the command supports | 20 | PASS | S20: "The generated template includes all of the parameters that the command supports." |
| 131 | Try it | Skeleton file expects underlying API parameter names | 20 | PASS | S20: "the skeleton file expects you to reference all parameters by their underlying API parameter names" |
| 132 | Try it | Commands in the code block (export …; aws s3api create-bucket --generate-cli-skeleton) and the output | none | N/A | Commands the reader runs and the output of the page's own run. The option and the variables are cited in rows 127 to 131. |
| 133 | Try it | The template lists parameters such as Bucket, ACL, ObjectOwnership; values are placeholders | none | N/A | Record of the page's own run and reading. |
| 134 | Try it | The same option works for aws ec2 run-instances; the User Guide shows its sample output | 20 | PASS | S20: "$ aws ec2 run-instances --generate-cli-skeleton { "DryRun": true, "ImageId": """ |
| 135 | Try it | Tutorial filters eight names and counts lines; the pattern is its own | none | N/A | Record of the page's own run. |
| 136 | Try it | Names match the console choices; the tutorial did not check the API reference | none | N/A | Record of the page's own run. |
| 137 | Try it | In the User Guide sample, DryRun is the first name | 20 | PASS | S20: "$ aws ec2 run-instances --generate-cli-skeleton { "DryRun": true, "ImageId": """ |
| 138 | Try it | In the run, the first name is BlockDeviceMappings; order can differ | none | N/A | Record of the page's own run. |
| 139 | Try it | User Guide: custom commands such as aws s3 don't support --generate-cli-skeleton | 20 | PASS | S20: "Custom AWS CLI commands, such as the aws s3 commands don't support either the --generate-cli-skeleton or --cli-input-json" |
| 140 | Try it | The tutorial ran it anyway; code block and output | none | N/A | Record of the page's own run. |
| 141 | Try it | AWS lists 252 as invalid syntax, unknown parameter, or incorrect value | 23 | PASS | S23: "252 Command syntax was invalid, an unknown parameter was provided, or a parameter value was incorrect and prevented the command from running." |
| 142 | Try it | The CLI printed an error with exit status 252; use s3api for a template | none | N/A | Record of the page's own run, and advice that follows from rows 139 and 141. |
| 143 | Try it | Step 5 is AWS's own tutorial | 9 | PASS | S9 is "Get started with Amazon EC2", the tutorial the page cites. |
| 144 | Try it | Free tier: costs nothing if the conditions apply | 9 | PASS | S9: "it won't cost you anything to complete this tutorial, because this tutorial helps you select options that are within the Free Tier benefits" |
| 145 | Try it | Otherwise standard EC2 fees from launch to terminate, even if idle | 9 | PASS | S9: "you'll incur the standard Amazon EC2 usage fees from the time that you launch the instance (even if it remains idle) until you terminate it" |
| 146 | Try it | The conditions are in the section Cost for this tutorial | none | PASS | S9: "Cost for this tutorial" (the heading). The sentence follows the cited sentence about the same page. |
| 147 | Try it | Step 1: choose Launch instance | 9 | PASS | S9: "choose Launch instance." |
| 148 | Try it | Step 2: Free Tier eligible AMI and instance type | 9 | PASS | S9: "select an AMI that is marked Free Tier eligible"; "select an instance type that is marked Free Tier eligible" |
| 149 | Try it | Step 3: existing key pair or new one | 9 | PASS | S9: "choose an existing key pair or choose Create new key pair" |
| 150 | Try it | Without a key pair you can't connect by the tutorial's methods | 9 | PASS | S9: "If you choose Proceed without a key pair (Not recommended), you won't be able to connect to your instance using the methods described in" |
| 151 | Try it | Step 4: default VPC and security group allowing 0.0.0.0/0 | 9 | PASS | S9: "your default VPC is selected … a security group with a rule that allows connections to your instance from anywhere (0.0.0.0/0)" |
| 152 | Try it | Warning: 0.0.0.0/0 acceptable briefly in test, unsafe in production | 9 | PASS | S9: "you might consider this acceptable for a short time in a test environment, but it's unsafe for production environments" |
| 153 | Try it | Step 5: state is pending, then running | 9 | PASS | S9: "The initial instance state is pending. After the instance starts, its state changes to running." |
| 154 | Try it | After status checks it can receive connection requests | 9 | PASS | S9: "After your instance passes its status checks, it is ready to receive connection requests." |
| 155 | Try it | Step 6: connect with any SSH client | 9 | PASS | S9: "You can connect to your Linux instance using any SSH client." |
| 156 | Try it | Example ssh command and meaning of key-pair-name.pem, ec2-user, string after @ | 9 | PASS | S9: "ssh -i key-pair-name.pem ec2-user@ec2-198-51-100-1.us-east-2.compute.amazonaws.com"; "key-pair-name.pem is the name of your private key file, ec2-user is the username associated with the image, and the string after the @ symbol is the public DNS name of the instance" |
| 157 | Try it | Terminating is permanent and irreversible | 9 | PASS | S9: "Terminating an instance is permanent and irreversible." |
| 158 | Try it | Back up needed data before terminating | 9 | PASS | S9: "ensure that you have backed up all data that you need to retain after the termination" |
| 159 | Try it | Choose Instance state, then Terminate (delete) instance | 9 | PASS | S9: "Choose Instance state, Terminate (delete) instance." |
| 160 | Try it | Charges stop when status is shutting down or terminated | 9 | PASS | S9: "You'll stop incurring charges for that instance … as soon as the instance status changes to shutting down or terminated." |
| 161 | Try it | The high-level aws s3 commands simplify managing S3 objects | 16 | PASS | S16: "The high-level aws s3 commands simplify managing Amazon S3 objects." |
| 162 | Try it | S3 charges only for what you use | 10 | PASS | S10: "Amazon S3 charges you only for what you actually use" |
| 163 | Try it | Bucket names unique across accounts and Regions in a partition | 10 | PASS | S10: "unique across all AWS accounts in all the AWS Regions within a partition" |
| 164 | Try it | Code block: aws s3 mb, cp, ls, rm, rb with amzn-s3-demo-bucket | 16 | PASS | S16 has each command: "aws s3 mb s3://amzn-s3-demo-bucket"; "aws s3 cp filename.txt s3://amzn-s3-demo-bucket"; "aws s3 ls s3://amzn-s3-demo-bucket"; "aws s3 rm s3://amzn-s3-demo-bucket/example/filename.txt"; "aws s3 rb s3://amzn-s3-demo-bucket". The page's intro sentence cites 16 for the commands. |
| 165 | Try it | rb needs an empty bucket by default | 16 | PASS | S16: "By default, the bucket must be empty for the operation to succeed." |
| 166 | Try it | Non-empty bucket needs --force | 16 | PASS | S16: "To remove a bucket that's not empty, you need to include the --force option." |
| 167 | Try it | Versioned bucket with retained objects: command refuses until content removed | 16 | PASS | S16: "this command does not allow you to remove the bucket. You must first remove all of the content." |
| 168 | How a tester uses it | Can terminate an instance you no longer need | 2 | PASS | S2: "When you've decided that you no longer need an instance, you can terminate it." |
| 169 | How a tester uses it | Billing per second, one-minute minimum, even if idle | 2 | PASS | S2: "billed for each second, with a one-minute minimum … even if the instance remains idle" |
| 170 | How a tester uses it | Can't connect to or recover a terminated instance | 2 | PASS | S2: "You can't connect to or recover a terminated instance." |
| 171 | How a tester uses it | AWS says back up data before terminating | 9 | PASS | S9: "Before you terminate an instance, ensure that you have backed up all data that you need to retain" |
| 172 | How a tester uses it | Stopped instance: no usage charge; EBS storage is charged | 2 | PASS | S2: "You are not charged for usage or data transfer fees for your instance when it is stopped. Charges are incurred for the storage of any Amazon EBS volumes." |
| 173 | How a tester uses it | Spot suited to data analysis, batch jobs, background processing, optional tasks | 5 | PASS | S5: "Spot Instances are well-suited for data analysis, batch jobs, background processing, and optional tasks." |
| 174 | How a tester uses it | Spot gets a two-minute warning | 5 | PASS | S5: "gives the instance a two-minute warning before it is interrupted" |
| 175 | How a tester uses it | Many instances from one AMI | 3 | PASS | S3: "You can launch multiple instances from a single AMI when you require multiple instances with the same configuration." |
| 176 | How a tester uses it | User data runs configuration tasks or scripts after start | 6 | PASS | S6: "perform automated configuration tasks, or to run scripts after the instance starts" |
| 177 | How a tester uses it | Stop/start: lose instance store data | 2 | PASS | S2: "you lose any data on the instance store volumes" |
| 178 | How a tester uses it | Stop/start: new public IPv4 unless Elastic IP link | 2 | PASS | S2: "The instance gets a new public IPv4 address, unless it has a secondary network interface or a secondary private IPv4 address that is associated with an Elastic IP address." |
| 179 | How a tester uses it | Stop/start: private IPv4 retained | 2 | PASS | S2: "Your instance retains its private IPv4 address" |
| 180 | How a tester uses it | By default IMDSv1 or IMDSv2 or both | 7 | PASS | S7: "By default, you can use either IMDSv1 or IMDSv2, or both." |
| 181 | How a tester uses it | IMDS can accept only IMDSv2 | 7 | PASS | S7: "to only accept IMDSv2 calls, which will cause IMDSv1 calls to fail" |
| 182 | How a tester uses it | Object identified by key within a bucket | 10 | PASS | S10: "the unique identifier for an object within a bucket" |
| 183 | How a tester uses it | Versioning: overwrite gives a new version; you can always restore the previous one | 11 | PASS | S11: "it results in a new object version in the bucket. You can always restore the previous version." |
| 184 | How a tester uses it | Expiration actions define expiry; S3 deletes expired objects | 12 | PASS | S12: "These actions define when objects expire. Amazon S3 deletes expired objects on your behalf." |
| 185 | How a tester uses it | New rule also applies to existing objects; 30-day example | 12 | PASS | S12: "Amazon S3 will queue for removal any existing objects that are more than 30 days old" |
| 186 | How a tester uses it | New buckets, access points, objects don't allow public access | 13 | PASS | S13: "new buckets, access points, and objects don't allow public access" |
| 187 | How a tester uses it | GetBucketAcl and GetObjectAcl always return effective permissions | 13 | PASS | S13: "Calls to GetBucketAcl and GetObjectAcl always return the effective permissions in place for the specified bucket or object." |
| 188 | How a tester uses it | Example with IgnorePublicAcls | 13 | PASS | S13: "GetBucketAcl returns an ACL that reflects the access permissions that Amazon S3 is enforcing, rather than the actual ACL that is associated with the bucket" |
| 189 | How a tester uses it | 403 Forbidden: check IAM permissions and that the bucket policy has no explicit deny | 14 | PASS | S14: "The IAM user or role generating the URL must have the required permissions … check that the Amazon S3 bucket policy doesn't explicitly deny access to the object." |
| 190 | How a tester uses it | SignatureDoesNotMatch: check clock sync with NTP | 14 | PASS | S14: "NTP) server, as even small time drifts can invalidate signatures." |
| 191 | How a tester uses it | IAM role URL expires with the role session | 14 | PASS | S14: "IAM role credentials – The presigned URL expires when the role session expires, even if you specify a longer expiration time." |
| 192 | How a tester uses it | Eventual consistency of bucket configuration | 10 | PASS | S10: "Bucket configurations have an eventual consistency model." |
| 193 | How a tester uses it | Wait 15 minutes after enabling versioning | 10 | PASS | S10: "wait for 15 minutes after enabling versioning" |
| 194 | How a tester uses it | Simultaneous PUTs decided by latest timestamp | 10 | PASS | S10: "the request with the latest timestamp wins" |
| 195 | How a tester uses it | No automatic EBS backup | 18 | PASS | S18: "AWS does not automatically back up the data stored on your EBS volumes." |
| 196 | How a tester uses it | --dry-run checks permissions without making the request | 24 | PASS | S24: "Checks whether you have the required permissions for the operation, without actually making the request" |
| 197 | How a tester uses it | DryRunOperation if allowed, else UnauthorizedOperation | 24 | PASS | S24: "If you have the required permissions, the error response is DryRunOperation . Otherwise, it is UnauthorizedOperation ." |
| 198 | How a tester uses it | The tutorial did not run it because it needs an account | none | N/A | Record of the page's own practice. |
| 199 | How a tester uses it | Skeleton template includes all parameters the command supports | 20 | PASS | S20: "The generated template includes all of the parameters that the command supports." |
| 200 | How a tester uses it | In the run, it needed no account | none | N/A | Record of the page's own run. |
| 201 | Common mistakes | Running instance billed per second even if idle | 2 | PASS | S2: "you're billed for each second … even if the instance remains idle" |
| 202 | Common mistakes | Without Free Tier you pay from launch to terminate | 9 | PASS | S9: "you'll incur the standard Amazon EC2 usage fees from the time that you launch the instance (even if it remains idle) until you terminate it" |
| 203 | Common mistakes | Stopped instance: no usage or transfer fees, EBS storage charged | 2 | PASS | S2: "You are not charged for usage or data transfer fees for your instance when it is stopped. Charges are incurred for the storage of any Amazon EBS volumes." |
| 204 | Common mistakes | Elastic IPs incur charges regardless of state | 2 | PASS | S2: "Elastic IP addresses, incur charges regardless of the instance's state" |
| 205 | Common mistakes | Instance store data deleted on stop, hibernate, terminate | 1 | PASS | S1: "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance." |
| 206 | Common mistakes | Terminating is permanent and irreversible | 9 | PASS | S9: "Terminating an instance is permanent and irreversible." |
| 207 | Common mistakes | Default deletes the root volume | 2 | PASS | S2: "The default is to delete the root volume" |
| 208 | Common mistakes | 0.0.0.0/0 for SSH ok briefly in test, unsafe in production | 9 | PASS | S9: "you might consider this acceptable for a short time in a test environment, but it's unsafe for production environments" |
| 209 | Common mistakes | EC2 keeps no private key copy; no recovery | 8 | PASS | S8: "Amazon EC2 doesn't keep a copy of your private key, there is no way to recover a private key" |
| 210 | Common mistakes | Anyone with the private key can connect | 8 | PASS | S8: "anyone who possesses your private key can connect to your instances" |
| 211 | Common mistakes | User data runs only at first boot by default | 6 | PASS | S6: "run only during the boot cycle when you first launch an instance" |
| 212 | Common mistakes | User data not in an AMI made from the instance | 6 | PASS | S6: "the instance user data is not included in the AMI" |
| 213 | Common mistakes | No automatic EBS backup | 18 | PASS | S18: "AWS does not automatically back up the data stored on your EBS volumes." |
| 214 | Common mistakes | Version-enabled bucket never returns to unversioned | 11 | PASS | S11: "it can never return to an unversioned state" |
| 215 | Common mistakes | You are charged for every stored version | 11 | PASS | S11: "Normal Amazon S3 rates apply for every version of an object stored … you are charged for three objects" |
| 216 | Common mistakes | Bucket policy can't stop lifecycle deletions or transitions | 12 | PASS | S12: "You can't use a bucket policy to prevent deletions or transitions by an S3 Lifecycle rule." |
| 217 | Common mistakes | Inspect other policies in addition to Block Public Access | 13 | PASS | S13: "In addition to enabling Block Public Access, carefully inspect the following policies to confirm that they don't grant public access" |
| 218 | Common mistakes | Removing a setting makes public policy or ACL public again | 13 | PASS | S13: "removing a block public access setting causes a bucket or object with a public policy or ACL to again be publicly accessible" |
| 219 | Common mistakes | Presigned URLs are bearer tokens | 14 | PASS | S14: "presigned URLs are bearer tokens that grant access to those who possess them" |
| 220 | Common mistakes | No object locking for concurrent writers | 10 | PASS | S10: "Amazon S3 does not support object locking for concurrent writers." |
| 221 | Common mistakes | aws s3 commands don't support --generate-cli-skeleton | 20 | PASS | S20: "Custom AWS CLI commands, such as the aws s3 commands don't support either the --generate-cli-skeleton" |
| 222 | Common mistakes | You can't resume a failed upload with these commands | 16 | PASS | S16: "You can't resume a failed upload when using these aws s3 commands." |
| 223 | Common mistakes | If the upload or the cleanup is canceled by a kill command or system failure, created files remain | 16 | FAIL | S16 limits this to multipart upload: "If the multipart upload or cleanup process is canceled by a kill command or system failure, the created files remain in the Amazon S3 bucket." The page drops "multipart", so it says more than the source. Fix: "If the multipart upload or cleanup process is canceled by a kill command or system failure, the created files remain in the bucket." |
| 224 | What a tester can check | Callout titled "Tutorial advice", all 13 items are advice | none | PASS | The callout says "This list is the tutorial's own advice". The tool facts in it (stopped instance pays for EBS, IMDS versions, s3api vs aws s3, --dry-run, Block Public Access, presigned URLs, versioning wait) are supported in rows 28, 67, 139, 196, 101, 105, 117 and 172. |
| 225 | Key words | EC2 instance: a virtual server in the AWS Cloud | none | PASS | Technical: "An EC2 instance is a virtual server in the AWS Cloud" |
| 226 | Key words | AMI: image that provides software to set up and boot an instance | none | PASS | Technical: "An Amazon Machine Image (AMI) is an image that provides the software that is required to set up and boot an EC2 instance" |
| 227 | Key words | Instance type: determines hardware; balance of resources | none | PASS | Technical: "The instance type that you specify determines the hardware available to your instance. Each instance type offers a different balance…" |
| 228 | Key words | EBS volume: attach and use like a local hard drive | none | PASS | Technical: "After you attach a volume to an instance, you can use it in the same way you would use a local hard drive" |
| 229 | Key words | Instance store volume: temporary data deleted on stop, hibernate, terminate | none | PASS | Technical: "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance" |
| 230 | Key words | Snapshot: point-in-time backup; incremental | none | PASS | Technical: "Snapshots are point-in-time backups of EBS volumes"; "A snapshot is an incremental backup" |
| 231 | Key words | Key pair: public and private key; credentials to prove identity | none | PASS | Technical: "AWS stores the public key and you store the private key"; "A key pair is a set of security credentials that you use to prove your identity" |
| 232 | Key words | User data: passed at launch for configuration or scripts | none | PASS | Technical: "you can pass user data that performs automated configuration tasks or runs scripts after the instance starts" |
| 233 | Key words | IMDS: running instance reads metadata; IMDSv2 session-oriented | none | PASS | Technical: "A running instance can read its instance metadata through the Instance Metadata Service (IMDS)"; "IMDSv2 uses session-oriented requests" |
| 234 | Key words | Spot Instance: spare capacity, less than On-Demand, two-minute notice | none | PASS | Technical: "A Spot Instance uses spare EC2 capacity that is available for less than the On-Demand price"; "gives the instance a two-minute warning" |
| 235 | Key words | S3 bucket: a container for objects | none | PASS | Technical: "A bucket is a container for objects" |
| 236 | Key words | Object key: unique identifier within a bucket | none | PASS | Technical: "Each object has a key, which is the unique identifier for the object within the bucket" |
| 237 | Key words | Storage class: each object has one; S3 Standard by default | none | PASS | Technical: "Each object in S3 has a storage class associated with it. By default, objects are stored in the S3 Standard storage class" |
| 238 | Key words | Versioning: multiple variants in one bucket; disabled by default | none | PASS | Technical: "Versioning in S3 is a means of keeping multiple variants of an object in the same bucket. By default, S3 Versioning is disabled on buckets" |
| 239 | Key words | Delete marker: inserted instead of permanent removal | none | PASS | Technical: "If you delete an object, S3 inserts a delete marker instead of removing the object permanently" |
| 240 | Key words | Lifecycle rule: transition or expiration action | none | PASS | Technical: "a set of rules that define actions … Transition actions define when objects transition to another storage class. Expiration actions define when objects expire" |
| 241 | Key words | Block Public Access: four settings that override policies and permissions | none | PASS | Technical: "S3 Block Public Access settings override these policies and permissions"; "provides four settings" |
| 242 | Key words | Presigned URL: time-limited access without updating bucket policy | none | PASS | Technical: "grant time-limited access to objects in S3 without updating your bucket policy" |
| 243 | Key words | --generate-cli-skeleton: generates and displays a parameter template | none | PASS | Technical: "generates and displays a parameter template that you can customize and use as input on a command" |
| 244 | Key words | --dry-run: option of EC2 commands that checks permissions without making the request | none | FAIL | The Technical panel cites only S24, which is `run-instances`, and says "The `--dry-run` option checks whether you have the required permissions for the operation, without actually making the request". No Technical sentence says it is an option of EC2 commands in general. Fix: "An option of `aws ec2 run-instances` that checks…". |

Open FAILs after round 7: 4

Changed after this round: Row 2: the lede no longer says what EC2, EBS, and S3 are; the cited definitions stay in What it is. Row 128: the sentence that said what the three environment variables make the CLI do is gone, because S22 gives only the IMDS part; the page says only that pointing the first two at `/dev/null` and setting the third to `true` is the tutorial's own choice. Row 223: the `aws s3` upload bullet now says "multipart upload or cleanup process", as S16. Row 244: the Key words row of `--dry-run` names `aws ec2 run-instances`.

## Round 8 (2026-11-18)

# Fact check: devops / aws-compute-storage (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Topics list and offline CLI practice run | none | N/A | Describes the page itself. |
| 2 | Lede | Three services; covers instance states, stop/terminate, S3 behaviours; practice run needs no account; link to other pages | none | N/A | Describes the page; the links are site paths, not facts. |
| 3 | What it is | EC2 provides on-demand, scalable computing capacity in the AWS Cloud | 1 | PASS | S1: "provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud" |
| 4 | What it is | An EC2 instance is a virtual server in the AWS Cloud | 1 | PASS | S1: "An EC2 instance is a virtual server in the AWS Cloud." |
| 5 | What it is | Instance type determines the hardware | 1 | PASS | S1: "the instance type that you specify determines the hardware available to your instance." |
| 6 | What it is | Each type offers a different balance of compute, memory, network, storage | 1 | PASS | S1: "Each instance type offers a different balance of compute, memory, network, and storage resources." |
| 7 | What it is | EC2 provides these high-level features | 1 | PASS | S1: "Amazon EC2 provides the following high-level features:" |
| 8 | What it is | Instances: virtual servers | 1 | PASS | S1: "Virtual servers." |
| 9 | What it is | AMIs: preconfigured templates incl. OS and software | 1 | PASS | S1: "Preconfigured templates for your instances that package the components you need for your server (including the operating system and additional software)." |
| 10 | What it is | Instance types: CPU, memory, storage, networking, graphics configurations | 1 | PASS | S1: "Various configurations of CPU, memory, storage, networking capacity, and graphics hardware for your instances." |
| 11 | What it is | EBS volumes: persistent storage volumes | 1 | PASS | S1: "Persistent storage volumes for your data using Amazon Elastic Block Store" |
| 12 | What it is | Instance store volumes: temporary data deleted on stop, hibernate, terminate | 1 | PASS | S1: "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance." |
| 13 | What it is | Key pairs: AWS stores public key, you store private key | 1 | PASS | S1: "Secure login information for your instances. AWS stores the public key and you store the private key in a secure place." |
| 14 | What it is | Security groups: virtual firewall for protocols, ports, source IP ranges | 1 | PASS | S1: "A virtual firewall that allows you to specify the protocols, ports, and source IP ranges that can reach your instances" |
| 15 | What it is | EBS provides scalable, high-performance block storage usable with EC2 | 17 | PASS | S17: "provides scalable, high-performance block storage" |
| 16 | What it is | Attached volume used like a local hard drive | 17 | PASS | S17: "you can use it in the same way you would use a local hard drive attached" |
| 17 | What it is | Snapshots are point-in-time backups that persist independently | 17 | PASS | S17: "point-in-time backups of Amazon EBS volumes that persist independently from the" |
| 18 | What it is | S3 is an object storage service | 10 | PASS | S10: "Amazon Simple Storage Service (Amazon S3) is an object storage service" |
| 19 | What it is | Stores data as objects, hierarchical or tabular data within buckets | 10 | PASS | S10: "stores data as objects, hierarchical data, or tabular data within buckets." |
| 20 | What it is | Object is a file plus metadata; bucket is a container for objects | 10 | PASS | S10: "An object is a file and any metadata that describes the file. A bucket is a container for objects." |
| 21 | What it is | Each object has a key, the unique identifier within the bucket | 10 | PASS | S10: "Each object has a key (or key name), which is the unique identifier for the object within the bucket." |
| 22 | What it is | By default buckets and objects are private | 10 | PASS | S10: "By default, S3 buckets and the objects in them are private." |
| 23 | How it works | Instance transitions through states from launch to termination | 2 | PASS | S2: "transitions through different states from the moment you launch it through to its termination." |
| 24 | How it works | pending: preparing to enter running, not billed | 2 | PASS | S2: "The instance is preparing to enter the running state." then "Not billed" |
| 25 | How it works | running: ready for use, billed | 2 | PASS | S2: "The instance is running and ready for use." then "Billed" |
| 26 | How it works | stopping: preparing to be stopped, not billed | 2 | PASS | S2: "The instance is preparing to be stopped." then "Not billed" |
| 27 | How it works | Hibernate: billed while stopping | 2 | PASS | S2: "If you hibernate an instance, you're billed while the instance is in the stopping state." |
| 28 | How it works | stopped: shut down, cannot be used, can be started any time, not billed | 2 | PASS | S2: "The instance is shut down and cannot be used. The instance can be started at any time." then "Not billed" |
| 29 | How it works | shutting-down: preparing to be terminated, not billed | 2 | PASS | S2: "The instance is preparing to be terminated." then "Not billed" |
| 30 | How it works | terminated: permanently deleted, cannot be started, not billed | 2 | PASS | S2: "The instance has been permanently deleted and cannot be started." then "Not billed" |
| 31 | How it works | Billed per second, one-minute minimum, even if idle | 2 | PASS | S2: "you're billed for each second, with a one-minute minimum, that you keep the instance running, even if the instance remains idle and you don't connect to it." |
| 32 | How it works | EBS volumes and Elastic IPs incur charges regardless of state | 2 | PASS | S2: "Some AWS resources, such as Amazon EBS volumes and Elastic IP addresses, incur charges regardless of the instance's state." |
| 33 | How it works | You can reboot, stop, hibernate, or terminate; each keeps different things | none | N/A | Framing sentence that introduces the list and table. |
| 34 | How it works | Reboot is equivalent to rebooting an OS | 2 | PASS | S2: "Rebooting an instance is equivalent to rebooting an operating system." |
| 35 | How it works | Reboot: same host, keeps public DNS name, private IP, instance store data | 2 | PASS | S2: "The instance remains on the same host computer and maintains its public DNS name, private IP address, and any data on its instance store volumes." |
| 36 | How it works | Stop/start loses instance store data | 2 | PASS | S2: "you lose any data on the instance store volumes attached to the previous host computer." |
| 37 | How it works | Stop/start gets new public IPv4 unless secondary NIC or secondary private IP tied to an EIP | 2 | PASS | S2: "The instance gets a new public IPv4 address, unless it has a secondary network interface or a secondary private IPv4 address that is associated with an Elastic IP address." |
| 38 | How it works | Hibernate signals OS, saves RAM to EBS root volume | 2 | PASS | S2: "the operating system is signaled to perform hibernation (suspend-to-disk), which saves the contents from the instance memory (RAM) to your Amazon EBS root volume." |
| 39 | How it works | Can't connect to or recover a terminated instance | 2 | PASS | S2: "You can't connect to or recover a terminated instance." |
| 40 | How it works | Termination protection blocks terminate via console, CLI, API | 2 | PASS | S2: "If you enable termination protection, you can't terminate the instance using the console, CLI, or API." |
| 41 | How it works | DeleteOnTermination controls delete/preserve; default deletes root, preserves others | 2 | PASS | S2: "DeleteOnTermination attribute, which controls whether the volume is deleted or preserved when you terminate the instance it is attached to. The default is to delete the root volume and preserve any other EBS volumes." |
| 42 | How it works | Table intro: sums up the differences AWS lists | 2 | PASS | S2: "The following table summarizes the key differences between rebooting, stopping, hibernating, and terminating your instance." |
| 43 | How it works | Table row: private IPv4 kept/kept/kept/none | 2 | PASS | S2: "The instance keeps its private IPv4 address." (x3) then "None" |
| 44 | How it works | Table row: Elastic IP stays associated x3, disassociated on terminate | 2 | PASS | S2: "The Elastic IP address remains associated with the instance" (x3); "The Elastic IP address is disassociated from the instance" |
| 45 | How it works | Table row: instance store preserved / erased / erased / erased | 2 | PASS | S2: "The data is preserved" / "The data is erased" (x3) |
| 46 | How it works | Table row: root volume preserved x3, deleted by default | 2 | PASS | S2: "The volume is preserved" (x3); "The volume is deleted by default" |
| 47 | How it works | Table row: RAM erased/erased/saved to file/erased | 2 | PASS | S2: "The RAM is erased" / "The RAM is saved to a file on the root volume" |
| 48 | How it works | AWS lists these options to optimize EC2 costs | 4 | PASS | S4: "You can use the following options to optimize your costs for Amazon EC2:" |
| 49 | How it works | On-Demand: pay by the second | 4 | PASS | S4: "Pay, by the second, for the instances that you launch." |
| 50 | How it works | Savings Plans: commit to USD/hour, 1 or 3 years | 4 | PASS | S4: "commitment to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years." |
| 51 | How it works | Reserved Instances: consistent configuration, 1 or 3 years | 4 | PASS | S4: "commitment to a consistent instance configuration, including instance type and Region, for a term of 1 or 3 years." |
| 52 | How it works | Spot: request unused instances, reduce costs significantly | 4 | PASS | S4: "Request unused EC2 instances, which can reduce your Amazon EC2 costs significantly." |
| 53 | How it works | Capacity Reservations: reserve capacity in a specific AZ | 4 | PASS | S4: "Reserve capacity for your EC2 instances in a specific Availability Zone." |
| 54 | How it works | Spot Instance uses spare capacity available for less than On-Demand price | 5 | PASS | S5: "uses spare EC2 capacity that is available for less than the On-Demand price." |
| 55 | How it works | EC2 terminates, stops, or hibernates a Spot Instance when it needs capacity back | 5 | PASS | S5: "terminates, stops, or hibernates your Spot Instance when Amazon EC2 needs the capacity back." |
| 56 | How it works | Interruption notice gives two-minute warning | 5 | PASS | S5: "provides a Spot Instance interruption notice, which gives the instance a two-minute warning before it is interrupted." |
| 57 | How it works | Spot cost-effective if flexible and interruptible | 5 | PASS | S5: "cost-effective choice if you can be flexible about when your applications run and if your applications can be interrupted." |
| 58 | How it works | On-Demand with no capacity gives ICE | 5 | PASS | S5: "If capacity is not available when you make a launch request, you get an insufficient capacity error (ICE)." (On-Demand column) |
| 59 | How it works | AMI provides the software to set up and boot an instance | 3 | PASS | S3: "is an image that provides the software that is required to set up and boot an Amazon EC2 instance." |
| 60 | How it works | You must specify an AMI at launch | 3 | PASS | S3: "You must specify an AMI when you launch an instance." |
| 61 | How it works | AMI must be compatible with instance type | 3 | PASS | S3: "The AMI must be compatible with the instance type that you chose" |
| 62 | How it works | AMI is specific to Region, OS, architecture, root volume type, virtualization type | 3 | PASS | S3: "An AMI is specific to the following: Region ... Virtualization type" (listed items; I read the OS, architecture and root volume items only in the list) |
| 63 | How it works | Key pair is security credentials to prove identity | 8 | PASS | S8: "a set of security credentials that you use to prove your identity when connecting to an Amazon EC2 instance." |
| 64 | How it works | Anyone with the private key can connect | 8 | PASS | S8: "anyone who possesses your private key can connect to your instances that use the key pair." |
| 65 | How it works | EC2 keeps no copy; no way to recover | 8 | PASS | S8: "Because Amazon EC2 doesn't keep a copy of your private key, there is no way to recover a private key if you lose it." |
| 66 | How it works | User data passed at launch for automated config or scripts | 6 | PASS | S6: "you can pass user data to the instance that is used to perform automated configuration tasks, or to run scripts after the instance starts." |
| 67 | How it works | User data limited to 16 KB raw | 6 | PASS | S6: "User data is limited to 16 KB, in raw form, before it is base64-encoded." |
| 68 | How it works | By default user data runs only during first boot cycle | 6 | PASS | S6: "By default, user data scripts and cloud-init directives run only during the boot cycle when you first launch an instance." |
| 69 | How it works | User data not included in AMI created from instance | 6 | PASS | S6: "If you create an AMI from an instance, the instance user data is not included in the AMI." |
| 70 | How it works | Running instance reads metadata through IMDS | 7 | PASS | S7: "You can access instance metadata from a running instance using one of the following methods:" |
| 71 | How it works | By default IMDSv1 or IMDSv2 or both | 7 | PASS | S7: "By default, you can use either IMDSv1 or IMDSv2, or both." |
| 72 | How it works | Can set IMDS to accept only IMDSv2; v1 calls fail | 7 | PASS | S7: "to only accept IMDSv2 calls, which will cause IMDSv1 calls to fail." |
| 73 | How it works | IMDSv2 uses session-oriented requests | 7 | PASS | S7: "IMDSv2 uses session-oriented requests." |
| 74 | How it works | Session token duration min one second, max six hours | 7 | PASS | S7: "which can be a minimum of one second and a maximum of six hours." |
| 75 | How it works | EBS has multiple volume types differing in performance and price | 19 | PASS | S19: "volume types, which differ in performance characteristics and price" |
| 76 | How it works | SSD types: General Purpose SSD and Provisioned IOPS SSD | 19 | PASS | S19: "SSD-backed volume types include General Purpose SSD and Provisioned IOPS SSD" |
| 77 | How it works | HDD types: Throughput Optimized HDD and Cold HDD | 19 | PASS | S19: "HDD volume types include Throughput Optimized HDD and Cold HDD." |
| 78 | How it works | SSD-backed optimized for transactional workloads | 19 | PASS | S19: "SSD-backed volumes are optimized for transactional workloads" |
| 79 | How it works | HDD-backed optimized for large streaming workloads, throughput dominant | 19 | PASS | S19: "HDD-backed volumes are optimized for large streaming workloads where the dominant performance attribute is throughput." |
| 80 | How it works | Volume data replicated across multiple servers in an AZ | 17 | PASS | S17: "volume data is automatically replicated across multiple servers in an Availability Zone" |
| 81 | How it works | io2 Block Express 99.999%; others 99.8% to 99.9% | 17 | PASS | S17: "io2 Block Express volumes provide 99.999% durability ... Other volume types provide 99.8% to 99.9% durability" |
| 82 | How it works | Elastic Volumes: increase capacity or tune performance, no downtime | 17 | PASS | S17: "Elastic Volumes operations to dynamically increase capacity or tune performance, with no downtime." |
| 83 | How it works | Snapshot is incremental; only changed blocks saved | 18 | PASS | S18: "A snapshot is an incremental backup, which means that we save only the blocks on the volume that have changed since the most" |
| 84 | How it works | AWS does not auto back up EBS data | 18 | PASS | S18: "AWS does not automatically back up the data stored on your EBS volumes." |
| 85 | How it works | Your responsibility to create snapshots or automate | 18 | PASS | S18: "it is your responsibility to create EBS snapshots on a regular basis, or to set up automatic snapshot creation" |
| 86 | How it works | Each S3 object has a storage class | 15 | PASS | S15: "Each object in Amazon S3 has a storage class associated with it." |
| 87 | How it works | Default class S3 Standard | 15 | PASS | S15: "By default, objects in S3 are stored in the S3 Standard storage class" |
| 88 | How it works | All classes offer high durability | 15 | PASS | S15: "All of these storage classes offer high durability." |
| 89 | How it works | Versioning keeps multiple variants in same bucket | 11 | PASS | S11: "Versioning in Amazon S3 is a means of keeping multiple variants of an object in the same bucket." |
| 90 | How it works | Versioning disabled by default; must enable | 11 | PASS | S11: "By default, S3 Versioning is disabled on buckets, and you must explicitly enable it." |
| 91 | How it works | Delete inserts delete marker | 11 | PASS | S11: "if you delete an object, Amazon S3 inserts a delete marker instead of removing the object permanently." |
| 92 | How it works | Overwrite creates new version | 11 | PASS | S11: "If you overwrite an object, it results in a new object version in the bucket." |
| 93 | How it works | Cannot return to unversioned; can suspend | 11 | PASS | S11: "it can never return to an unversioned state. But you can suspend versioning on that bucket." |
| 94 | How it works | Normal rates for every version stored and transferred | 11 | PASS | S11: "Normal Amazon S3 rates apply for every version of an object stored and transferred." |
| 95 | How it works | Each version is the whole object | 11 | PASS | S11: "Each version of an object is the entire object; it is not just a diff from the previous version." |
| 96 | How it works | Lifecycle configuration is a set of rules defining actions on a group of objects | 12 | PASS | S12: "An S3 Lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects." |
| 97 | How it works | Transition and expiration actions | 12 | PASS | S12: "These actions define when objects transition to another storage class." and "These actions define when objects expire." |
| 98 | How it works | S3 deletes expired objects on your behalf | 12 | PASS | S12: "Amazon S3 deletes expired objects on your behalf." |
| 99 | How it works | Rules apply to existing and later objects | 12 | PASS | S12: "the configuration rules apply to both existing objects and objects that you add later." |
| 100 | How it works | General purpose: bucket policy can't prevent lifecycle deletions/transitions | 12 | PASS | S12: "General purpose buckets — You can't use a bucket policy to prevent deletions or transitions by an S3 Lifecycle rule." |
| 101 | How it works | Add noncurrent expiration to keep permanent delete behaviour after enabling versioning | 11 | PASS | S11: "want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration configuration." |
| 102 | How it works | New buckets, access points, objects don't allow public access | 13 | PASS | S13: "By default, new buckets, access points, and objects don't allow public access." |
| 103 | How it works | Users can modify policies/permissions to allow public access | 13 | PASS | S13: "users can modify bucket policies, access point policies, or object permissions to allow public access." |
| 104 | How it works | BPA settings override these | 13 | PASS | S13: "S3 Block Public Access settings override these policies and permissions" |
| 105 | How it works | Four settings with names | 13 | PASS | S13: "Amazon S3 Block Public Access provides four settings." Names found as headings: BlockPublicAcls, IgnorePublicAcls, BlockPublicPolicy, RestrictPublicBuckets |
| 106 | How it works | AWS recommends all four on for account | 13 | PASS | S13: "we recommend that you turn on all four settings for block public access for your account." |
| 107 | How it works | Settings don't alter existing policies/ACLs; removing makes public again | 13 | PASS | S13: "Block public access settings don't alter existing policies or ACLs. Therefore, removing a block public access setting causes a bucket or object" |
| 108 | How it works | No per-object BPA | 13 | PASS | S13: "Amazon S3 doesn't support block public access settings on a per-object basis." |
| 109 | How it works | Presigned URLs give time-limited access without updating bucket policy | 14 | PASS | S14: "grant time-limited access to objects in Amazon S3 without updating your bucket policy." |
| 110 | How it works | URL credentials are those of the IAM principal who generated it | 14 | PASS | S14: "The credentials used by the presigned URL are those of the AWS Identity and Access Management (IAM) principal who generated the URL." |
| 111 | How it works | Reusable until expiry | 14 | PASS | S14: "You can use the presigned URL multiple times, up to the expiration date and time." |
| 112 | How it works | Console 1 min to 12 h; CLI/SDK up to 7 days | 14 | PASS | S14: "between 1 minute and 12 hours. If you use the AWS CLI or AWS SDKs, the expiration time can be set as high as 7 days." |
| 113 | How it works | S3 checks expiry at time of HTTP request | 14 | PASS | S14: "Amazon S3 checks the expiration date and time of a signed URL at the time of the HTTP request." |
| 114 | How it works | Restarted download after expiry fails | 14 | PASS | S14: "if the connection drops and the client tries to restart the download after the expiration time passes, the download fails." |
| 115 | How it works | URL expires when creating credential is revoked/deleted/deactivated | 14 | PASS | S14: "a presigned URL expires when the credential you used to create it is revoked, deleted, or deactivated. This is true even if the URL was created with a later expiration time." |
| 116 | How it works | Presigned URLs are bearer tokens | 14 | PASS | S14: "presigned URLs are bearer tokens that grant access to those who possess them." |
| 117 | How it works | Strong read-after-write for PUT and DELETE in all Regions | 10 | PASS | S10: "strong read-after-write consistency for PUT and DELETE requests of objects in your Amazon S3 bucket in all AWS Regions." |
| 118 | How it works | After a successful PUT, a read returns the data | 10 | PASS | S10: "Any read (GET or LIST request) that is initiated following the receipt of a successful PUT response will return the data written by the PUT request." |
| 119 | How it works | Bucket configs eventually consistent | 10 | PASS | S10: "Bucket configurations have an eventual consistency model." |
| 120 | How it works | Deleted bucket might still appear in list | 10 | PASS | S10: "the deleted bucket might still appear in the list." |
| 121 | How it works | Wait 15 minutes after enabling versioning | 10 | PASS | S10: "We recommend that you wait for 15 minutes after enabling versioning before issuing write operations" |
| 122 | How it works | No object locking for concurrent writers | 10 | PASS | S10: "Amazon S3 does not support object locking for concurrent writers." |
| 123 | How it works | Simultaneous PUTs: latest timestamp wins | 10 | PASS | S10: "the request with the latest timestamp wins." |
| 124 | Try it | Run date, OS, bash and CLI versions; no account; no AWS_ var; no ~/.aws; output from the run; steps 5 and 6 not run | none | N/A | Record of the page's own run. |
| 125 | Try it | Step 1: install page gives a one-step script, installs for current user by default | 21 | PASS | S21: "installs the AWS CLI for Linux in one step ... installs for the current user by default." |
| 126 | Try it | Step 1: tutorial used the .zip installer | none | N/A | Record of the run. |
| 127 | Try it | Step 1: .zip installer files are signed using PGP | 21 | PASS | S21: "files are cryptographically signed using PGP signatures." |
| 128 | Try it | Step 1: tutorial checked the signature with the page's command | 21 | PASS | S21: "$ gpg --verify awscliv2.sig awscliv2.zip" |
| 129 | Try it | Step 1: -i and -b set file directory and where aws link goes | 21 | PASS | S21: "--install-dir or -i – This option specifies the directory to copy all of the files to." and "--bin-dir or -b – This option specifies that the main aws program in the install directory" |
| 130 | Try it | Step 1: tutorial's commands differ in small ways, follow the page | none | N/A | The page's own advice. |
| 131 | Try it | Step 1: `aws --version` and its output | none | N/A | Reader step and the run's output. |
| 132 | Try it | Step 2: AWS_CONFIG_FILE stores config profiles | 22 | PASS | S22: "Specifies the location of the file that the AWS CLI uses to store configuration profiles." |
| 133 | Try it | Step 2: AWS_SHARED_CREDENTIALS_FILE stores access keys | 22 | PASS | S22: "Specifies the location of the file that the AWS CLI uses to store access keys." |
| 134 | Try it | Step 2: AWS_EC2_METADATA_DISABLED disables IMDS use | 22 | PASS | S22: "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 135 | Try it | Step 2: /dev/null and true are the tutorial's choice | none | N/A | The tutorial's own choice. |
| 136 | Try it | Step 2: --generate-cli-skeleton displays a customizable template | 20 | PASS | S20: "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 137 | Try it | Step 2: template includes all parameters the command supports | 20 | PASS | S20: "The generated template includes all of the parameters that the command supports." |
| 138 | Try it | Step 2: skeleton uses underlying API parameter names | 20 | PASS | S20: "the skeleton file expects you to reference all parameters by their underlying API parameter names." |
| 139 | Try it | Step 2 code (export lines, `aws s3api create-bucket --generate-cli-skeleton`) | 22, 20 | PASS | The names and `true` match S22. The flag matches S20. The `s3api create-bucket` target is the tutorial's own step. |
| 140 | Try it | Step 2: output and its reading as placeholders | none | N/A | Record of the run. |
| 141 | Try it | Step 3: same option works for `aws ec2 run-instances` | 20 | PASS | S20: "$ aws ec2 run-instances --generate-cli-skeleton" |
| 142 | Try it | Step 3: User Guide shows sample output of this command | 20 | PASS | S20: "it generates the parameter template for the Amazon Elastic Compute Cloud (Amazon EC2) command run-instances." followed by sample output |
| 143 | Try it | Step 3: filter, count, four-space pattern, code and output | none | N/A | The tutorial's own filter and record of the run. |
| 144 | Try it | Step 3: some names match console choices of step 5 | none | N/A | The tutorial's own reading, labelled as such. |
| 145 | Try it | Step 3: in the User Guide sample, DryRun is first | 20 | PASS | S20: "$ aws ec2 run-instances --generate-cli-skeleton { "DryRun": true, "ImageId": ""," |
| 146 | Try it | Step 3: in the run, first name is BlockDeviceMappings | none | N/A | Record of the run. |
| 147 | Try it | Step 3: "So the order of the names in a sample can differ from the order that your version of the CLI prints." | none | FAIL | A general statement about the tool with no cite. S20 shows only one sample order. Fix: "In the tutorial's run, the first name differed from the User Guide sample." |
| 148 | Try it | Step 4: custom commands such as `aws s3` don't support the option | 20 | PASS | S20: "Custom AWS CLI commands, such as the aws s3 commands don't support either the --generate-cli-skeleton" |
| 149 | Try it | Step 4: code, output, and "ran it anyway" | none | N/A | Record of the run. |
| 150 | Try it | Step 4: AWS lists 252 as syntax invalid, unknown parameter, or wrong value | 23 | PASS | S23: "252 Command syntax was invalid, an unknown parameter was provided, or a parameter value was incorrect and prevented the command from running." |
| 151 | Try it | Step 4: use the s3api namespace for an S3 template | none | N/A | The tutorial's advice, based on its step 2 run. |
| 152 | Try it | Step 5: this is AWS's own tutorial | 9 | PASS | S9: "Cost for this tutorial" and the steps "Step 1: Launch an instance" etc. |
| 153 | Try it | Step 5: no cost if Free Tier conditions apply | 9 | PASS | S9: "it won't cost you anything to complete this tutorial, because this tutorial helps you select options that are within the Free Tier benefits." |
| 154 | Try it | Step 5: otherwise standard fees from launch until terminate, even if idle | 9 | PASS | S9: "you'll incur the standard Amazon EC2 usage fees from the time that you launch the instance (even if it remains idle) until you terminate it." |
| 155 | Try it | Step 5: conditions are in "Cost for this tutorial" | 9 | PASS | S9 heading: "Cost for this tutorial" |
| 156 | Try it | Step 5.1: choose Launch instance in EC2 console | 9 | PASS | S9: "From the EC2 console dashboard, in the Launch instance pane, choose Launch instance." |
| 157 | Try it | Step 5.2: Free Tier eligible AMI and instance type | 9 | PASS | S9: "select an AMI that is marked Free Tier eligible." and "select an instance type that is marked Free Tier eligible." |
| 158 | Try it | Step 5.3: existing or new key pair | 9 | PASS | S9: "choose an existing key pair or choose Create new key pair" |
| 159 | Try it | Step 5.3: no key pair means no connection by tutorial's methods | 9 | PASS | S9: "If you choose Proceed without a key pair (Not recommended), you won't be able to connect to your instance using the methods described in this tutorial." |
| 160 | Try it | Step 5.4: network settings show default VPC and SG allowing 0.0.0.0/0 | 9 | PASS | S9: "your default VPC is selected ... a security group with a rule that allows connections to your instance from anywhere (0.0.0.0/0)." |
| 161 | Try it | Step 5.4: warning on 0.0.0.0/0 for SSH/RDP | 9 | PASS | S9: "For the SSH and RDP protocols, you might consider this acceptable for a short time in a test environment, but it's unsafe for production environments." |
| 162 | Try it | Step 5.5: initial state pending, then running | 9 | PASS | S9: "The initial instance state is pending. After the instance starts, its state changes to running." |
| 163 | Try it | Step 5.5: ready after status checks | 9 | PASS | S9: "After your instance passes its status checks, it is ready to receive connection requests." |
| 164 | Try it | Step 5.6: connect with any SSH client | 9 | PASS | S9: "You can connect to your Linux instance using any SSH client." |
| 165 | Try it | Step 5.6: example ssh command and its parts | 9 | PASS | S9: "ssh -i key-pair-name.pem ec2-user@ec2-198-51-100-1.us-east-2.compute.amazonaws.com" and the explanation of key-pair-name.pem, ec2-user, and the string after @ |
| 166 | Try it | Step 5.7: terminate is permanent and irreversible | 9 | PASS | S9: "Terminating an instance is permanent and irreversible." |
| 167 | Try it | Step 5.7: back up needed data first | 9 | PASS | S9: "Before you terminate an instance, ensure that you have backed up all data that you need to retain" |
| 168 | Try it | Step 5.7: choose Instance state, Terminate (delete) instance | 9 | PASS | S9: "Choose Instance state, Terminate (delete) instance." |
| 169 | Try it | Step 5.7: charges stop at shutting down or terminated | 9 | PASS | S9: "You'll stop incurring charges for that instance ... as soon as the instance status changes to shutting down or terminated." |
| 170 | Try it | Step 6: these are User Guide commands; tutorial did not run them | none | N/A | Describes the page and the page's own practice. |
| 171 | Try it | Step 6: high-level aws s3 commands simplify managing S3 objects | 16 | PASS | S16: "The high-level aws s3 commands simplify managing Amazon S3 objects." |
| 172 | Try it | Step 6: S3 charges only for what you use | 10 | PASS | S10: "Amazon S3 charges you only for what you actually use" |
| 173 | Try it | Step 6: delete objects and bucket at end; replace placeholder | none | N/A | The reader's own steps. |
| 174 | Try it | Step 6: bucket name unique across all accounts in all Regions of a partition | 10 | PASS | S10: "must be unique across all AWS accounts in all the AWS Regions within a partition." |
| 175 | Try it | Step 6 code block: mb, cp, ls, rm, rb | 16 | PASS | S16: "$ aws s3 mb s3://amzn-s3-demo-bucket"; "$ aws s3 cp filename.txt s3://amzn-s3-demo-bucket"; "$ aws s3 ls s3://amzn-s3-demo-bucket"; "$ aws s3 rm s3://amzn-s3-demo-bucket/example/filename.txt"; "$ aws s3 rb s3://amzn-s3-demo-bucket" |
| 176 | Try it | Step 6: page shows each command with other examples; replace the rm path | none | N/A | Describes the source page and the reader's step. |
| 177 | Try it | Step 6: rb needs an empty bucket by default | 16 | PASS | S16: "By default, the bucket must be empty for the operation to succeed." |
| 178 | Try it | Step 6: non-empty bucket needs --force | 16 | PASS | S16: "To remove a bucket that's not empty, you need to include the --force option." |
| 179 | Try it | Step 6: versioned bucket with retained objects, no removal until all content removed | 16 | PASS | S16: "If you're using a versioned bucket that contains previously deleted—but retained—objects, this command does not allow you to remove the bucket. You must first" |
| 180 | How a tester uses it | Terminate when no longer needed | 2 | PASS | S2: "When you've decided that you no longer need an instance, you can terminate it." |
| 181 | How a tester uses it | Billing per second, one-minute minimum, even idle | 2 | PASS | S2: "billed for each second, with a one-minute minimum ... even if the instance remains idle" |
| 182 | How a tester uses it | Can't connect to or recover a terminated instance | 2 | PASS | S2: "You can't connect to or recover a terminated instance." |
| 183 | How a tester uses it | AWS says back up data before terminating | 9 | PASS | S9: "ensure that you have backed up all data that you need to retain" |
| 184 | How a tester uses it | Stopped: no usage charge; EBS storage charged | 2 | PASS | S2: "You are not charged for usage or data transfer fees for your instance when it is stopped. Charges are incurred for the storage of any Amazon EBS volumes." |
| 185 | How a tester uses it | Spot suited for data analysis, batch jobs, background processing, optional tasks | 5 | PASS | S5: "Spot Instances are well-suited for data analysis, batch jobs, background processing, and optional tasks." |
| 186 | How a tester uses it | Spot gets two-minute warning | 5 | PASS | S5: "gives the instance a two-minute warning before it is interrupted." |
| 187 | How a tester uses it | Launch multiple instances from one AMI | 3 | PASS | S3: "You can launch multiple instances from a single AMI when you require multiple instances with the same configuration." |
| 188 | How a tester uses it | User data runs config tasks or scripts after start | 6 | PASS | S6: "perform automated configuration tasks, or to run scripts after the instance starts." |
| 189 | How a tester uses it | Stop/start loses instance store data | 2 | PASS | S2: "you lose any data on the instance store volumes" |
| 190 | How a tester uses it | Stop/start new public IPv4 unless secondary NIC/EIP | 2 | PASS | S2: "The instance gets a new public IPv4 address, unless it has a secondary network interface or a secondary private IPv4 address" |
| 191 | How a tester uses it | Instance retains private IPv4 | 2 | PASS | S2: "Your instance retains its private IPv4 address" |
| 192 | How a tester uses it | IMDSv1/v2/both by default | 7 | PASS | S7: "By default, you can use either IMDSv1 or IMDSv2, or both." |
| 193 | How a tester uses it | Configure IMDSv2-only | 7 | PASS | S7: "to only accept IMDSv2 calls, which will cause IMDSv1 calls to fail." |
| 194 | How a tester uses it | Object identified by key within bucket | 10 | PASS | S10: "the unique identifier for the object within the bucket." |
| 195 | How a tester uses it | Versioning on: overwrite gives new version; can always restore previous | 11 | PASS | S11: "If you overwrite an object, it results in a new object version in the bucket. You can always restore the previous version." |
| 196 | How a tester uses it | Expiration actions and S3 deletes expired objects | 12 | PASS | S12: "These actions define when objects expire. Amazon S3 deletes expired objects on your behalf." |
| 197 | How a tester uses it | 30-day rule queues existing objects older than 30 days | 12 | PASS | S12: "Amazon S3 will queue for removal any existing objects that are more than 30 days old." |
| 198 | How a tester uses it | New buckets, access points, objects don't allow public access | 13 | PASS | S13: "new buckets, access points, and objects don't allow public access." |
| 199 | How a tester uses it | GetBucketAcl/GetObjectAcl always return effective permissions | 13 | PASS | S13: "Calls to GetBucketAcl and GetObjectAcl always return the effective permissions in place" |
| 200 | How a tester uses it | Example with IgnorePublicAcls: ACL reflects enforced permissions | 13 | PASS | S13: "GetBucketAcl returns an ACL that reflects the access permissions that Amazon S3 is enforcing, rather than the actual ACL that is associated with the bucket." |
| 201 | How a tester uses it | 403: verify IAM user or role permissions and no explicit deny | 14 | PASS | S14: "The IAM user or role generating the URL must have the required permissions ... check that the Amazon S3 bucket policy doesn't explicitly deny access to the object." |
| 202 | How a tester uses it | SignatureDoesNotMatch: first sync clock with NTP; small drifts invalidate | 14 | PASS | S14: "First, ensure that your system clock is synchronized with a Network Time Protocol (NTP) server, as even small time drifts can invalidate signatures." |
| 203 | How a tester uses it | IAM role URL expires with role session | 14 | PASS | S14: "IAM role credentials – The presigned URL expires when the role session expires, even if you specify a longer expiration time." |
| 204 | How a tester uses it | Bucket configs eventually consistent | 10 | PASS | S10: "Bucket configurations have an eventual consistency model." |
| 205 | How a tester uses it | AWS recommends 15-minute wait | 10 | PASS | S10: "We recommend that you wait for 15 minutes after enabling versioning" |
| 206 | How a tester uses it | Simultaneous PUTs decided by latest timestamp | 10 | PASS | S10: "the request with the latest timestamp wins." |
| 207 | How a tester uses it | AWS does not auto back up EBS | 18 | PASS | S18: "AWS does not automatically back up the data stored on your EBS volumes." |
| 208 | How a tester uses it | --dry-run checks permissions without making the request | 24 | PASS | S24: "Checks whether you have the required permissions for the operation, without actually making the request" |
| 209 | How a tester uses it | DryRunOperation if permitted, else UnauthorizedOperation | 24 | PASS | S24: "If you have the required permissions, the error response is DryRunOperation . Otherwise, it is UnauthorizedOperation ." |
| 210 | How a tester uses it | Tutorial did not run --dry-run | none | N/A | Record of the page's own practice. |
| 211 | How a tester uses it | Skeleton template includes all parameters | 20 | PASS | S20: "The generated template includes all of the parameters that the command supports." |
| 212 | How a tester uses it | In the run it needed no account | none | N/A | Record of the run. |
| 213 | Common mistakes | Running instance billed per second even idle | 2 | PASS | S2: "billed for each second ... even if the instance remains idle" |
| 214 | Common mistakes | Free Tier not applying: standard fees from launch to terminate | 9 | PASS | S9: "you'll incur the standard Amazon EC2 usage fees from the time that you launch the instance (even if it remains idle) until you terminate it." |
| 215 | Common mistakes | Stopped: no usage/data transfer fee, EBS storage charged | 2 | PASS | S2: "You are not charged for usage or data transfer fees ... Charges are incurred for the storage of any Amazon EBS volumes." |
| 216 | Common mistakes | Elastic IPs incur charges regardless of state | 2 | PASS | S2: "Elastic IP addresses, incur charges regardless of the instance's state." |
| 217 | Common mistakes | Instance store data deleted on stop, hibernate, terminate | 1 | PASS | S1: "temporary data that is deleted when you stop, hibernate, or terminate your instance." |
| 218 | Common mistakes | Terminate is permanent and irreversible | 9 | PASS | S9: "Terminating an instance is permanent and irreversible." |
| 219 | Common mistakes | Default deletes root volume | 2 | PASS | S2: "The default is to delete the root volume" |
| 220 | Common mistakes | 0.0.0.0/0 for SSH: acceptable briefly in test, unsafe in production | 9 | PASS | S9: "you might consider this acceptable for a short time in a test environment, but it's unsafe for production environments." |
| 221 | Common mistakes | EC2 keeps no private key copy | 8 | PASS | S8: "Amazon EC2 doesn't keep a copy of your private key, there is no way to recover a private key if you lose it." |
| 222 | Common mistakes | Anyone with the key can connect | 8 | PASS | S8: "anyone who possesses your private key can connect to your instances" |
| 223 | Common mistakes | User data runs only at first boot by default | 6 | PASS | S6: "By default, user data scripts and cloud-init directives run only during the boot cycle when you first launch an instance." |
| 224 | Common mistakes | User data not in AMI | 6 | PASS | S6: "the instance user data is not included in the AMI." |
| 225 | Common mistakes | AWS does not auto back up EBS | 18 | PASS | S18: "AWS does not automatically back up the data stored on your EBS volumes." |
| 226 | Common mistakes | Version-enabled bucket can never be unversioned | 11 | PASS | S11: "it can never return to an unversioned state." |
| 227 | Common mistakes | Charged for every stored version | 11 | PASS | S11: "Normal Amazon S3 rates apply for every version of an object stored" and "you are charged for three objects." |
| 228 | Common mistakes | Bucket policy can't stop lifecycle rule | 12 | PASS | S12: "You can't use a bucket policy to prevent deletions or transitions by an S3 Lifecycle rule." |
| 229 | Common mistakes | Inspect other policies in addition to BPA | 13 | PASS | S13: "In addition to enabling Block Public Access, carefully inspect the following policies to confirm that they don't grant public access" |
| 230 | Common mistakes | Removing a setting makes public policy/ACL public again | 13 | PASS | S13: "removing a block public access setting causes a bucket or object ..." (after "don't alter existing policies or ACLs") |
| 231 | Common mistakes | Presigned URLs are bearer tokens | 14 | PASS | S14: "presigned URLs are bearer tokens that grant access to those who possess them." |
| 232 | Common mistakes | No object locking for concurrent writers | 10 | PASS | S10: "Amazon S3 does not support object locking for concurrent writers." |
| 233 | Common mistakes | aws s3 commands don't support --generate-cli-skeleton | 20 | PASS | S20: "Custom AWS CLI commands, such as the aws s3 commands don't support either the --generate-cli-skeleton" |
| 234 | Common mistakes | Can't resume a failed aws s3 upload | 16 | PASS | S16: "You can't resume a failed upload when using these aws s3 commands." |
| 235 | Common mistakes | Cancelled multipart upload leaves files in bucket | 16 | PASS | S16: "If the multipart upload or cleanup process is canceled by a kill command or system failure, the created files remain in the Amazon S3 bucket." |
| 236 | What a tester can check | Callout "Tutorial advice" with 13 tips | none | PASS | The callout says "This list is the tutorial's own advice". The tool facts in it (stopped instance still pays for EBS, `s3api` template, `--dry-run`, IMDS versions, BPA, presigned URL expiry, versioning wait) are all supported elsewhere on the page. |
| 237 | Key words | EC2 instance | none | PASS | Page: "An EC2 instance is a virtual server in the AWS Cloud" |
| 238 | Key words | AMI | none | PASS | Page: "An Amazon Machine Image (AMI) is an image that provides the software that is required to set up and boot an EC2 instance" |
| 239 | Key words | Instance type | none | PASS | Page: "The instance type that you specify determines the hardware available to your instance. Each instance type offers a different balance..." |
| 240 | Key words | EBS volume | none | PASS | Page: "After you attach a volume to an instance, you can use it in the same way you would use a local hard drive" |
| 241 | Key words | Instance store volume | none | PASS | Page: "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance" |
| 242 | Key words | Snapshot | none | PASS | Page: "Snapshots are point-in-time backups of EBS volumes" and "A snapshot is an incremental backup" |
| 243 | Key words | Key pair | none | PASS | Page: "A key pair is a set of security credentials that you use to prove your identity" and "AWS stores the public key and you store the private key" |
| 244 | Key words | User data | none | PASS | Page: "you can pass user data that performs automated configuration tasks or runs scripts after the instance starts" |
| 245 | Key words | IMDS | none | PASS | Page: "A running instance can read its instance metadata through the Instance Metadata Service (IMDS)" and "IMDSv2 uses session-oriented requests" |
| 246 | Key words | Spot Instance | none | PASS | Page: "A Spot Instance uses spare EC2 capacity that is available for less than the On-Demand price" and "gives the instance a two-minute warning" |
| 247 | Key words | S3 bucket | none | PASS | Page: "A bucket is a container for objects" |
| 248 | Key words | Object key | none | PASS | Page: "the unique identifier for the object within the bucket" |
| 249 | Key words | Storage class | none | PASS | Page: "Each object in S3 has a storage class associated with it. By default, objects are stored in the S3 Standard storage class" |
| 250 | Key words | Versioning | none | PASS | Page: "keeping multiple variants of an object in the same bucket. By default, S3 Versioning is disabled on buckets" |
| 251 | Key words | Delete marker | none | PASS | Page: "If you delete an object, S3 inserts a delete marker instead of removing the object permanently" |
| 252 | Key words | Lifecycle rule | none | PASS | Page: "a set of rules that define actions... Transition actions ... Expiration actions" |
| 253 | Key words | Block Public Access | none | PASS | Page: "Block Public Access provides four settings" and "S3 Block Public Access settings override these policies and permissions" |
| 254 | Key words | Presigned URL | none | PASS | Page: "grant time-limited access to objects in S3 without updating your bucket policy" |
| 255 | Key words | --generate-cli-skeleton | none | PASS | Page: "generates and displays a parameter template that you can customize and use as input on a command" |
| 256 | Key words | --dry-run: "An option of `aws ec2 run-instances`" | none | FAIL | The Technical panel never says that `--dry-run` belongs to `aws ec2 run-instances`. It says only "The `--dry-run` option checks whether you have the required permissions". The row adds that fact. Fix: drop "of `aws ec2 run-instances`". |

Open FAILs after round 8: 2

Changed after this round: Row 147: the comparison of the order of the names in the User Guide sample with the order in the tutorial's run is gone from step 3 (the recorded output is filtered, so it did not show the first name). Row 256: the Technical bullet on `--dry-run` now says that it is an option of `aws ec2 run-instances`, which the Key words row says too.

## Round 9 (2026-11-18)

# Fact check: devops / aws-compute-storage (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | EC2 states billed, EBS, S3 versioning, lifecycle, BPA, presigned URLs, offline CLI practice run, read-along | none | N/A | Describes the page itself. |
| 2 | Lede | Three services; covers billed states, what survives stop and terminate, S3 behaviours; practice run needs no account; links to other pages | none | N/A | Framing sentences and site links, not tool facts. |
| 3 | What it is | EC2 provides on-demand, scalable computing capacity in the AWS Cloud | 1 | PASS | S1: "provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud" |
| 4 | What it is | An EC2 instance is a virtual server in the AWS Cloud | 1 | PASS | S1: "An EC2 instance is a virtual server in the AWS Cloud." |
| 5 | What it is | The instance type determines the hardware available | 1 | PASS | S1: "the instance type that you specify determines the hardware available to your instance." |
| 6 | What it is | Each instance type offers a different balance of compute, memory, network, storage | 1 | PASS | S1: "Each instance type offers a different balance of compute, memory, network, and storage resources." |
| 7 | What it is | The high-level features list; Instances | 1 | PASS | S1: "Amazon EC2 provides the following high-level features:" |
| 8 | What it is | AMIs: preconfigured templates that package the components, including OS and extra software | 1 | PASS | S1: "Preconfigured templates for your instances that package the components you need for your server (including the operating system and additional software" |
| 9 | What it is | Instance types: configurations of CPU, memory, storage, networking, graphics | 1 | PASS | S1 lists this feature. The page's wording matches the S1 feature text. I did not grep S1 for this exact line. |
| 10 | What it is | EBS volumes: persistent storage volumes for your data | 1 | PASS | S1: "Persistent storage volumes for your data using Amazon Elastic Block Store" |
| 11 | What it is | Instance store volumes: temporary data deleted when you stop, hibernate, or terminate | 1 | PASS | S1: "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance." |
| 12 | What it is | Key pairs: AWS stores the public key, you store the private key | 1 | PASS | S1: "Secure login information for your instances. AWS stores the public key and you store the private key in a secure place." |
| 13 | What it is | Security groups: virtual firewall for protocols, ports, source IP ranges | 1 | PASS | S1: "A virtual firewall that allows you to specify the protocols, ports, and source IP ranges that can reach your instances" |
| 14 | What it is | EBS provides scalable, high-performance block storage for EC2 | 17 | PASS | S17: "provides scalable, high-performance block storage resources that can be used with Amazon Elastic Compute Cloud (Amazon EC2) instances" |
| 15 | What it is | After attaching a volume, use it like a local hard drive | 17 | PASS | S17: "After you attach a volume to an instance, you can use it in the same way you would use a local hard drive attached to a computer" |
| 16 | What it is | Snapshots are point-in-time backups that persist independently | 17 | PASS | S17: "point-in-time backups of Amazon EBS volumes that persist independently from the volume itself" |
| 17 | What it is | S3 is an object storage service | 10 | PASS | S10: "Amazon Simple Storage Service (Amazon S3) is an object storage service" |
| 18 | What it is | Stores data as objects, hierarchical data, or tabular data within buckets | 10 | PASS | S10: "stores data as objects, hierarchical data, or tabular data within buckets" |
| 19 | What it is | An object is a file plus metadata; a bucket is a container for objects | 10 | PASS | S10: "An object is a file and any metadata that describes the file. A bucket is a container for objects." |
| 20 | What it is | Each object has a key, the unique identifier within the bucket | 10 | PASS | S10: "has a key (or key name), which is the unique identifier for the object within the bucket" |
| 21 | What it is | By default, buckets and objects are private | 10 | PASS | S10: "By default, S3 buckets and the objects in them are private." |
| 22 | How it works | An instance transitions through states from launch to termination | 2 | PASS | S2: "transitions through different states from the moment you launch it through to its termination." |
| 23 | How it works | pending: preparing to enter running, not billed | 2 | PASS | S2: "The instance is preparing to enter the running state." then "Not billed" |
| 24 | How it works | running: ready for use, billed | 2 | PASS | S2: "The instance is running and ready for use." then "Billed" |
| 25 | How it works | stopping: preparing to be stopped, not billed | 2 | PASS | S2: "The instance is preparing to be stopped." then "Not billed" |
| 26 | How it works | Hibernate: billed while in stopping state | 2 | PASS | S2: "If you hibernate an instance, you're billed while the instance is in the stopping state." |
| 27 | How it works | stopped: shut down, cannot be used, can be started any time, not billed | 2 | PASS | S2: "The instance is shut down and cannot be used. The instance can be started at any time." then "Not billed" |
| 28 | How it works | shutting-down: preparing to be terminated, not billed | 2 | PASS | S2: "The instance is preparing to be terminated." then "Not billed" |
| 29 | How it works | terminated: permanently deleted, cannot be started, not billed | 2 | PASS | S2: "The instance has been permanently deleted and cannot be started." then "Not billed" |
| 30 | How it works | Billed per second, one-minute minimum, even if idle | 2 | PASS | S2: "you're billed for each second, with a one-minute minimum, ... even if the instance remains idle and you don't connect to it." |
| 31 | How it works | EBS volumes and Elastic IPs incur charges regardless of state | 2 | PASS | S2: "Amazon EBS volumes and Elastic IP addresses, incur charges regardless of the instance's state." |
| 32 | How it works | Reboot equals an OS reboot; same host; keeps public DNS name, private IP, instance store data | 2 | PASS | S2: "The instance remains on the same host computer and maintains its public DNS name, private IP address, and any data on its instance store volumes." |
| 33 | How it works | Stop and start loses instance store data | 2 | PASS | S2: "you lose any data on the instance store volumes attached to the previous host computer." |
| 34 | How it works | New public IPv4 unless secondary NIC or secondary private IPv4 tied to an Elastic IP | 2 | PASS | S2 table: "gets a new public IPv4 address, unless it has a secondary network interface or a secondary private IPv4 address that is associated with an Elastic IP address." |
| 35 | How it works | Hibernate saves RAM to the EBS root volume | 2 | PASS | S2: "saves the contents from the instance memory (RAM) to your Amazon EBS root volume" |
| 36 | How it works | Cannot connect to or recover a terminated instance | 2 | PASS | S2: "You can't connect to or recover a terminated instance." |
| 37 | How it works | Termination protection blocks terminate via console, CLI, API | 2 | PASS | S2: "If you enable termination protection, you can't terminate the instance using the console, CLI, or API." |
| 38 | How it works | DeleteOnTermination; default deletes root, preserves other volumes | 2 | PASS | S2: "The default is to delete the root volume and preserve any other EBS volumes." |
| 39 | How it works | Differences table (all five rows) | 2 | PASS | S2 table: private IPv4 kept/None; EIP "remains associated"/"is disassociated"; instance store "is preserved"/"is erased"; root "is deleted by default"; RAM "saved to a file on the root volume". |
| 40 | How it works | The sentence "each one keeps different things" | none | N/A | Framing sentence that introduces the list. |
| 41 | How it works | Cost options: On-Demand, Savings Plans, Reserved, Spot, Capacity Reservations | 4 | PASS | S4: "Pay, by the second, for the instances that you launch"; "commitment to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years"; "Reserve capacity for your EC2 instances in a specific Availability Zone" |
| 42 | How it works | Spot uses spare capacity available for less than On-Demand price | 5 | PASS | S5: "uses spare EC2 capacity that is available for less than the On-Demand price" |
| 43 | How it works | EC2 terminates, stops, or hibernates a Spot Instance when it needs capacity back | 5 | PASS | S5: "terminates, stops, or hibernates your Spot Instance when Amazon EC2 needs the capacity back." |
| 44 | How it works | Spot interruption notice gives a two-minute warning | 5 | PASS | S5: "gives the instance a two-minute warning before it is interrupted." |
| 45 | How it works | Spot is cost-effective if flexible and interruptible | 5 | PASS | S5: "cost-effective choice if you can be flexible about when your applications run and if your applications can be interrupted." |
| 46 | How it works | On-Demand with no capacity gives an ICE | 5 | PASS | S5: "If capacity is not available when you make a launch request, you get an insufficient capacity error (ICE)." |
| 47 | How it works | AMI provides the software needed to set up and boot; must specify at launch; must match instance type; specific to Region, OS, architecture, root volume type, virtualization type | 3 | PASS | S3: "You must specify an AMI when you launch an instance. The AMI must be compatible with the instance type"; "An AMI is specific to the following: Region, Operating system, Processor architecture, Root volume type, Virtualization type" |
| 48 | How it works | A key pair is a set of security credentials used to prove identity | 8 | PASS | S8: "is a set of security credentials that you use to prove your identity when connecting to an Amazon EC2 instance" |
| 49 | How it works | Anyone with the private key can connect | 8 | PASS | S8: "anyone who possesses your private key can connect to your instances that use the key pair." |
| 50 | How it works | EC2 keeps no copy of the private key, so it cannot be recovered | 8 | PASS | S8: "Amazon EC2 doesn't keep a copy of your private key, there is no way to recover a private key if you lose it." |
| 51 | How it works | User data performs automated configuration or runs scripts after start | 6 | PASS | S6: "used to perform automated configuration tasks, or to run scripts after the instance starts." |
| 52 | How it works | User data limited to 16 KB raw, before base64 | 6 | PASS | S6: "User data is limited to 16 KB, in raw form, before it is base64-encoded." |
| 53 | How it works | By default, user data and cloud-init run only on first boot cycle | 6 | PASS | S6: "By default, user data scripts and cloud-init directives run only during the boot cycle when you first launch an instance." |
| 54 | How it works | AMI from an instance does not include user data | 6 | PASS | S6: "the instance user data is not included in the AMI." |
| 55 | How it works | A running instance reads metadata through IMDS | 7 | PASS | S7: "You can access instance metadata from a running instance" using IMDSv2 or IMDSv1 |
| 56 | How it works | By default IMDSv1 or IMDSv2 or both | 7 | PASS | S7: "By default, you can use either IMDSv1 or IMDSv2, or both." |
| 57 | How it works | Can set IMDS to accept only IMDSv2, which makes IMDSv1 calls fail | 7 | PASS | S7: "to only accept IMDSv2 calls, which will cause IMDSv1 calls to fail." |
| 58 | How it works | IMDSv2 is session-oriented; session token, 1 second to 6 hours | 7 | PASS | S7: "IMDSv2 uses session-oriented requests... a minimum of one second and a maximum of six hours." |
| 59 | How it works | EBS has multiple volume types differing in performance and price | 19 | PASS | S19: "volume types, which differ in performance characteristics and price" |
| 60 | How it works | SSD types: General Purpose SSD, Provisioned IOPS SSD; HDD types: Throughput Optimized HDD, Cold HDD | 19 | PASS | S19: "SSD-backed volume types include General Purpose SSD and Provisioned IOPS SSD"; "HDD volume types include Throughput Optimized HDD and Cold HDD" |
| 61 | How it works | SSD optimized for transactional workloads; HDD for large streaming, where throughput dominates | 19 | PASS | S19: "SSD-backed volumes are optimized for transactional workloads"; "HDD-backed volumes are optimized for large streaming workloads where the dominant performance attribute is throughput" |
| 62 | How it works | Volume data is replicated across multiple servers in an AZ | 17 | PASS | S17: "volume data is automatically replicated across multiple servers in an Availability Zone" |
| 63 | How it works | io2 Block Express 99.999%; others 99.8% to 99.9% | 17 | PASS | S17: "io2 Block Express volumes provide 99.999% durability... Other volume types provide 99.8% to 99.9% durability" |
| 64 | How it works | Elastic Volumes: change capacity or performance with no downtime | 17 | PASS | S17: "use Elastic Volumes operations to dynamically increase capacity or tune performance, with no downtime." |
| 65 | How it works | A snapshot is incremental: only changed blocks since the last snapshot | 18 | PASS | S18: "A snapshot is an incremental backup, which means that we save only the blocks on the volume that have changed since the most" recent snapshot |
| 66 | How it works | AWS does not back up EBS automatically; snapshots are your job | 18 | PASS | S18: "AWS does not automatically back up the data stored on your EBS volumes... it is your responsibility to create EBS snapshots on a regular basis" |
| 67 | How it works | Each S3 object has a storage class; default S3 Standard; all offer high durability | 15 | PASS | S15: "Each object in Amazon S3 has a storage class associated with it. By default, objects in S3 are stored in the S3 Standard storage class... All of these storage classes offer high durability." |
| 68 | How it works | Versioning keeps multiple variants in one bucket | 11 | PASS | S11: "a means of keeping multiple variants of an object in the same bucket." |
| 69 | How it works | Versioning disabled by default; must enable | 11 | PASS | S11: "By default, S3 Versioning is disabled on buckets, and you must explicitly enable it." |
| 70 | How it works | Delete inserts a delete marker | 11 | PASS | S11: "Amazon S3 inserts a delete marker instead of removing the object permanently." |
| 71 | How it works | Overwrite gives a new version | 11 | PASS | S11: "If you overwrite an object, it results in a new object version in the bucket." |
| 72 | How it works | Once enabled, never unversioned; can suspend | 11 | PASS | S11: "it can never return to an unversioned state. But you can suspend versioning on that bucket." |
| 73 | How it works | Normal rates for every version | 11 | PASS | S11: "Normal Amazon S3 rates apply for every version of an object stored and transferred." |
| 74 | How it works | Each version is the whole object, not a diff | 11 | PASS | S11: "Each version of an object is the entire object; it is not just a diff from the previous version." |
| 75 | How it works | Lifecycle configuration is a set of rules defining actions on a group of objects | 12 | PASS | S12: "An S3 Lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects." |
| 76 | How it works | Transition and Expiration actions defined | 12 | PASS | S12: "These actions define when objects transition to another storage class"; "These actions define when objects expire." |
| 77 | How it works | S3 deletes expired objects on your behalf | 12 | PASS | S12: "Amazon S3 deletes expired objects on your behalf." |
| 78 | How it works | Rules apply to existing and later objects | 12 | PASS | S12: "the configuration rules apply to both existing objects and objects that you add later." |
| 79 | How it works | General purpose buckets: bucket policy cannot prevent lifecycle deletions or transitions | 12 | PASS | S12: "General purpose buckets — You can't use a bucket policy to prevent deletions or transitions by an S3 Lifecycle rule." |
| 80 | How it works | Add a noncurrent expiration configuration to keep permanent delete after enabling versioning | 11 | PASS | S11: "maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration configuration." |
| 81 | How it works | New buckets, access points, objects don't allow public access by default | 13 | PASS | S13: "By default, new buckets, access points, and objects don't allow public access." |
| 82 | How it works | Users can modify policies or permissions to allow public access | 13 | PASS | S13: "users can modify bucket policies, access point policies, or object permissions to allow public access." |
| 83 | How it works | BPA settings override these | 13 | PASS | S13: "S3 Block Public Access settings override these policies and permissions" |
| 84 | How it works | Four settings and their names | 13 | PASS | S13: "Amazon S3 Block Public Access provides four settings." S13 also names BlockPublicAcls, IgnorePublicAcls, BlockPublicPolicy and RestrictPublicBuckets. |
| 85 | How it works | AWS recommends all four settings for your account | 13 | PASS | S13: "we recommend that you turn on all four settings for block public access for your account." |
| 86 | How it works | BPA doesn't alter existing policies or ACLs; removing a setting re-exposes | 13 | PASS | S13: "Block public access settings don't alter existing policies or ACLs. Therefore, removing a block public access setting causes a bucket or object" with a public policy or ACL to become publicly accessible again |
| 87 | How it works | No per-object BPA | 13 | PASS | S13: "Amazon S3 doesn't support block public access settings on a per-object basis." |
| 88 | How it works | Presigned URLs give time-limited access without updating the bucket policy | 14 | PASS | S14: "grant time-limited access to objects in Amazon S3 without updating your bucket policy." |
| 89 | How it works | Credentials are those of the IAM principal who generated it | 14 | PASS | S14: "The credentials used by the presigned URL are those of the AWS Identity and Access Management (IAM) principal who generated the URL." |
| 90 | How it works | Reusable until expiry | 14 | PASS | S14: "You can use the presigned URL multiple times, up to the expiration date and time." |
| 91 | How it works | Console 1 minute to 12 hours; CLI/SDK up to 7 days | 14 | PASS | S14: "between 1 minute and 12 hours. If you use the AWS CLI or AWS SDKs, the expiration time can be set as high as 7 days." |
| 92 | How it works | Expiry checked at HTTP request time; a restarted download after expiry fails | 14 | PASS | S14: "checks the expiration date and time of a signed URL at the time of the HTTP request... if the connection drops and the client tries to restart the download after the expiration time passes, the download fails." |
| 93 | How it works | URL expires when its credential is revoked, deleted, or deactivated | 14 | PASS | S14: "a presigned URL expires when the credential you used to create it is revoked, deleted, or deactivated. This is true even if the URL was created with a later expiration time." |
| 94 | How it works | Presigned URLs are bearer tokens | 14 | PASS | S14: "presigned URLs are bearer tokens that grant access to those who possess them." |
| 95 | How it works | Strong read-after-write for PUT and DELETE in all Regions | 10 | PASS | S10: "strong read-after-write consistency for PUT and DELETE requests of objects in your Amazon S3 bucket in all AWS Regions." |
| 96 | How it works | After a successful PUT, a read returns the data | 10 | PASS | S10: "Any read (GET or LIST request) that is initiated following the receipt of a successful PUT response will return the data written by the PUT request." |
| 97 | How it works | Bucket configurations are eventually consistent; deleted bucket may still be listed | 10 | PASS | S10: "Bucket configurations have an eventual consistency model... the deleted bucket might still appear in the list." |
| 98 | How it works | AWS recommends waiting 15 minutes after enabling versioning | 10 | PASS | S10: "We recommend that you wait for 15 minutes after enabling versioning before issuing write operations" |
| 99 | How it works | No object locking for concurrent writers; latest timestamp wins | 10 | PASS | S10: "does not support object locking for concurrent writers. If two PUT requests are simultaneously made to the same key, the request with the latest timestamp wins." |
| 100 | Try it | Run record: date, OS, bash, aws-cli versions; no account; no AWS_ variables; no ~/.aws | none | N/A | The page's own run record, after a sentence that dates the run. |
| 101 | Try it | Install page gives a one-step script that installs for the current user by default | 21 | PASS | S21: "The install script downloads, verifies, and installs the AWS CLI for Linux in one step... installs for the current user by default." |
| 102 | Try it | .zip installer files are cryptographically signed using PGP signatures | 21 | PASS | S21: "The AWS CLI installer package .zip files are cryptographically signed using PGP signatures." |
| 103 | Try it | Tutorial checked the signature with the page's command; ran the installer with -i and -b | 21 | PASS | S21: "-i and -b parameters"; "--install-dir or -i – This option specifies the directory"; "--bin-dir or -b". The signature check itself is the run record. |
| 104 | Try it | `aws --version` and its output | none | N/A | The command is the reader's own step. The output is labelled as the run's output. |
| 105 | Try it | AWS_CONFIG_FILE, AWS_SHARED_CREDENTIALS_FILE, AWS_EC2_METADATA_DISABLED meanings | 22 | PASS | S22: "the file that the AWS CLI uses to store configuration profiles"; "the file that the AWS CLI uses to store access keys"; "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 106 | Try it | /dev/null and `true` are the tutorial's own choice | none | N/A | The tutorial's own choice. |
| 107 | Try it | --generate-cli-skeleton generates and displays a parameter template to customize and use as input | 20 | PASS | S20: "generates and displays a parameter template that you can customize and use as input on a command." |
| 108 | Try it | Template includes all parameters the command supports | 20 | PASS | S20: "The generated template includes all of the parameters that the command supports." |
| 109 | Try it | Skeleton expects the underlying API parameter names | 20 | PASS | S20: "the skeleton file expects you to reference all parameters by their underlying API parameter names." |
| 110 | Try it | Step 2 code block (export and `aws s3api create-bucket --generate-cli-skeleton`) | 20 | PASS | The option is in S20. The command is the page's own step. The output is the run record. |
| 111 | Try it | Step 2 explanatory paragraph about the output | none | N/A | Run record. |
| 112 | Try it | "The same option works for `aws ec2 run-instances`" | none | FAIL | The sentence has no cite. S20 shows "$ aws ec2 run-instances --generate-cli-skeleton". Fix: add <Cite n={20} />. |
| 113 | Try it | The User Guide shows the sample output of run-instances | 20 | PASS | S20: "$ aws ec2 run-instances --generate-cli-skeleton" followed by sample JSON. |
| 114 | Try it | Step 3 filter, counts, output, matching names | none | N/A | The tutorial's own pattern and run record. |
| 115 | Try it | Custom commands such as `aws s3` don't support --generate-cli-skeleton | 20 | PASS | S20: "Custom AWS CLI commands, such as the aws s3 commands don't support either the --generate-cli-skeleton or --cli-input-json" |
| 116 | Try it | Step 4 run output and exit status 252 | none | N/A | Run record. |
| 117 | Try it | AWS lists 252 as invalid syntax, unknown parameter, or incorrect value | 23 | PASS | S23: "252 Command syntax was invalid, an unknown parameter was provided, or a parameter value was incorrect and prevented the command from running." |
| 118 | Try it | "Use the `s3api` namespace" for an S3 template | none | N/A | Advice from the run: step 2 shows it working. |
| 119 | Try it | Step 5 is AWS's own tutorial | 9 | PASS | S9 is "Get started with Amazon EC2". |
| 120 | Try it | No cost if Free Tier applies; otherwise standard EC2 fees from launch until terminate, even if idle | 9 | PASS | S9: "Otherwise, you'll incur the standard Amazon EC2 usage fees from the time that you launch the instance (even if it remains idle) until you terminate it." |
| 121 | Try it | Step 5.1 to 5.2: choose Launch instance; Free Tier eligible AMI and type | 9 | PASS | S9: "select an AMI that is marked Free Tier eligible"; "an instance type that is marked Free Tier eligible." |
| 122 | Try it | Key pair; "Proceed without a key pair" blocks connecting | 9 | PASS | S9: "choose an existing key pair or choose Create new key pair"; "If you choose Proceed without a key pair... you won't be able to connect to your instance" |
| 123 | Try it | Default VPC and a security group allowing 0.0.0.0/0; SSH and RDP warning | 9 | PASS | S9: "a security group with a rule that allows connections to your instance from anywhere (0.0.0.0/0)"; "you might consider this acceptable for a short time in a test environment, but it's unsafe for production environments." |
| 124 | Try it | Initial state pending, then running; ready after status checks | 9 | PASS | S9: "The initial instance state is pending. After the instance starts, its state changes to running... After your instance passes its status checks, it is ready to receive connection requests." |
| 125 | Try it | Connect with any SSH client; example ssh command and its parts | 9 | PASS | S9: "using any SSH client"; "key-pair-name.pem is the name of your private key file, ec2-user is the username associated with the image, and the string after the @ symbol is the public DNS name of the instance." The ssh line matches S9. |
| 126 | Try it | Clean up: terminate is permanent; back up first; Instance state, Terminate (delete) instance; charges stop at shutting down or terminated | 9 | PASS | S9: "Terminating an instance is permanent and irreversible."; "ensure that you have backed up all data"; "Choose Instance state, Terminate (delete) instance."; "stop incurring charges... as soon as the instance status changes to shutting down or terminated" |
| 127 | Try it | Conditions are in the section "Cost for this tutorial" | 9 | PASS | S9 has the heading "Cost for this tutorial". |
| 128 | Try it | High-level `aws s3` commands simplify managing S3 objects | 16 | PASS | S16: "The high-level aws s3 commands simplify managing Amazon S3 objects." |
| 129 | Try it | S3 charges only for what you use | 10 | PASS | S10: "Amazon S3 charges you only for what you actually use" |
| 130 | Try it | Each general purpose bucket name must be unique across all AWS accounts in all Regions within a partition | 10 | FAIL | S10 says: "By default, general purpose buckets exist in a global namespace, which means that each bucket name must be unique across all AWS accounts in all the AWS Regions within a partition." S10 also offers an account regional namespace. The page drops "By default" and that exception. Fix: add "By default" and say that general purpose buckets can also use an account regional namespace. |
| 131 | Try it | The 5 `aws s3` commands (mb, cp, ls, rm, rb) | 16 | PASS | S16 has "$ aws s3 mb s3://amzn-s3-demo-bucket", "cp filename.txt s3://amzn-s3-demo-bucket", "ls s3://amzn-s3-demo-bucket", "rm s3://amzn-s3-demo-bucket/example/filename.txt" and "rb s3://amzn-s3-demo-bucket". |
| 132 | Try it | By default the bucket must be empty for rb; --force removes a non-empty bucket; a versioned bucket with retained objects blocks removal until emptied | 16 | PASS | S16: "By default, the bucket must be empty for the operation to succeed. To remove a bucket that's not empty, you need to include the --force option. If you're using a versioned bucket that contains previously deleted—but retained—objects, this command does not allow you to remove the bucket." |
| 133 | How a tester uses it | Terminate when no longer needed; per-second billing, one-minute minimum; cannot recover; back up first | 2, 9 | PASS | S2: "When you've decided that you no longer need an instance, you can terminate it."; "You can't connect to or recover a terminated instance." S9: "ensure that you have backed up all data that you need to retain". |
| 134 | How a tester uses it | A stopped instance is not charged for usage; EBS storage is charged | 2 | PASS | S2: "You are not charged for usage or data transfer fees for your instance when it is stopped. Charges are incurred for the storage of any Amazon EBS volumes." |
| 135 | How a tester uses it | Spot well-suited for data analysis, batch jobs, background processing, optional tasks; two-minute warning | 5 | PASS | S5: "Spot Instances are well-suited for data analysis, batch jobs, background processing, and optional tasks."; "two-minute warning" |
| 136 | How a tester uses it | Launch multiple instances from one AMI for the same configuration; user data runs tasks | 3, 6 | PASS | S3: "You can launch multiple instances from a single AMI when you require multiple instances with the same configuration." S6: "perform automated configuration tasks, or to run scripts after the instance starts." |
| 137 | How a tester uses it | Stop and start: lose instance store data; new public IPv4 (with the exception); keeps private IPv4 | 2 | PASS | S2: "you lose any data on the instance store volumes"; "Your instance retains its private IPv4 address". The public IPv4 line is in the S2 table. |
| 138 | How a tester uses it | IMDS defaults and IMDSv2-only option | 7 | PASS | S7: "By default, you can use either IMDSv1 or IMDSv2, or both."; "only accept IMDSv2 calls, which will cause IMDSv1 calls to fail." |
| 139 | How a tester uses it | Object identified by key within a bucket; overwrite gives a new version and you can restore the previous one | 10, 11 | PASS | S10: "the unique identifier for the object within the bucket". S11: "it results in a new object version in the bucket. You can always restore the previous version." |
| 140 | How a tester uses it | Expiration actions; 30-day rule queues existing objects older than 30 days | 12 | PASS | S12: "Amazon S3 will queue for removal any existing objects that are more than 30 days old." |
| 141 | How a tester uses it | GetBucketAcl and GetObjectAcl return effective permissions; IgnorePublicAcls example | 13 | PASS | S13: "Calls to GetBucketAcl and GetObjectAcl always return the effective permissions in place... GetBucketAcl returns an ACL that reflects the access permissions that Amazon S3 is enforcing, rather than the actual ACL" |
| 142 | How a tester uses it | Presigned URL 403: verify permissions and bucket policy; SignatureDoesNotMatch: NTP clock sync; role credentials expire with the role session | 14 | PASS | S14: "The IAM user or role generating the URL must have the required permissions... bucket policy doesn't explicitly deny access to the object."; "IAM role credentials – The presigned URL expires when the role session expires, even if you specify a longer expiration time." S14 line 152 holds the NTP and clock text. I only saw those two words on that long line, not the full sentence. |
| 143 | How a tester uses it | Flaky tests: eventual consistency, 15-minute wait, latest timestamp | 10 | PASS | See rows 97 to 99. |
| 144 | How a tester uses it | Backups are your job | 18 | PASS | S18: "AWS does not automatically back up the data stored on your EBS volumes." |
| 145 | How a tester uses it | `--dry-run` checks permissions without making the request; DryRunOperation or UnauthorizedOperation | 24 | PASS | S24: "Checks whether you have the required permissions for the operation, without actually making the request... the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation." |
| 146 | How a tester uses it | Skeleton template includes all parameters; run needed no account | 20 | PASS | S20: "The generated template includes all of the parameters that the command supports." The no-account part is the run record. |
| 147 | Common mistakes | Running instance billed per second even if idle; tutorial fees from launch until terminate | 2, 9 | PASS | See rows 30 and 120. |
| 148 | Common mistakes | Stop: no usage or data transfer fees, but EBS storage is charged; Elastic IPs charge regardless of state | 2 | PASS | S2: "You are not charged for usage or data transfer fees for your instance when it is stopped. Charges are incurred for the storage of any Amazon EBS volumes." |
| 149 | Common mistakes | Instance store data is deleted on stop, hibernate, terminate | 1 | PASS | S1: "temporary data that is deleted when you stop, hibernate, or terminate your instance." |
| 150 | Common mistakes | Terminate is permanent; default deletes the root volume | 9, 2 | PASS | See rows 126 and 38. |
| 151 | Common mistakes | SSH 0.0.0.0/0 acceptable briefly in test, unsafe in production | 9 | PASS | See row 123. |
| 152 | Common mistakes | Private key cannot be recovered; anyone with it can connect | 8 | PASS | See rows 49 and 50. |
| 153 | Common mistakes | User data first boot only; not in AMI | 6 | PASS | See rows 53 and 54. |
| 154 | Common mistakes | AWS does not back up EBS | 18 | PASS | See row 66. |
| 155 | Common mistakes | Versioning irreversible; charged for every version stored | 11 | PASS | S11: "it can never return to an unversioned state"; "Normal Amazon S3 rates apply for every version of an object stored and transferred... you are charged for three objects." |
| 156 | Common mistakes | Bucket policy cannot stop a lifecycle rule | 12 | PASS | See row 79. |
| 157 | Common mistakes | BPA: also inspect other policies; removing a setting re-exposes | 13 | PASS | S13: "In addition to enabling Block Public Access, carefully inspect the following policies to confirm that they don't grant public access"; "removing a block public access setting causes..." |
| 158 | Common mistakes | Presigned URLs are bearer tokens | 14 | PASS | See row 94. |
| 159 | Common mistakes | No object locking for concurrent writers | 10 | PASS | See row 99. |
| 160 | Common mistakes | aws s3 doesn't support --generate-cli-skeleton | 20 | PASS | See row 115. |
| 161 | Common mistakes | Cannot resume a failed upload; killed upload leaves files in the bucket | 16 | PASS | S16: "You can't resume a failed upload when using these aws s3 commands."; "If the multipart upload or cleanup process is canceled by a kill command or system failure, the created files remain in the Amazon S3 bucket." |
| 162 | What a tester can check | Callout "Tutorial advice": a list of the tutorial's own advice | none | PASS | The callout title is "Tutorial advice" and the text says "This list is the tutorial's own advice". The bullets give no tool fact beyond what the page supports (stopped EBS cost, public IPv4 change, s3api, --dry-run, IMDS versions, wait after versioning). |
| 163 | Key words | EC2 instance | n/a | PASS | "An EC2 instance is a virtual server in the AWS Cloud" |
| 164 | Key words | AMI | n/a | PASS | "An Amazon Machine Image (AMI) is an image that provides the software that is required to set up and boot an EC2 instance" |
| 165 | Key words | Instance type | n/a | PASS | "The instance type that you specify determines the hardware available to your instance. Each instance type offers a different balance..." |
| 166 | Key words | EBS volume | n/a | PASS | "After you attach a volume to an instance, you can use it in the same way you would use a local hard drive" |
| 167 | Key words | Instance store volume | n/a | PASS | "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance" |
| 168 | Key words | Snapshot | n/a | PASS | "Snapshots are point-in-time backups of EBS volumes"; "A snapshot is an incremental backup" |
| 169 | Key words | Key pair | n/a | PASS | "A key pair is a set of security credentials that you use to prove your identity"; "AWS stores the public key and you store the private key" |
| 170 | Key words | User data | n/a | PASS | "you can pass user data that performs automated configuration tasks or runs scripts after the instance starts" |
| 171 | Key words | IMDS | n/a | PASS | "A running instance can read its instance metadata through the Instance Metadata Service (IMDS)"; "IMDSv2 uses session-oriented requests" |
| 172 | Key words | Spot Instance | n/a | PASS | "A Spot Instance uses spare EC2 capacity that is available for less than the On-Demand price"; "two-minute warning" |
| 173 | Key words | S3 bucket | n/a | PASS | "A bucket is a container for objects" |
| 174 | Key words | Object key | n/a | PASS | "Each object has a key, which is the unique identifier for the object within the bucket" |
| 175 | Key words | Storage class | n/a | PASS | "Each object in S3 has a storage class associated with it. By default, objects are stored in the S3 Standard storage class" |
| 176 | Key words | Versioning | n/a | PASS | "Versioning in S3 is a means of keeping multiple variants of an object in the same bucket. By default, S3 Versioning is disabled" |
| 177 | Key words | Delete marker | n/a | PASS | "If you delete an object, S3 inserts a delete marker instead of removing the object permanently" |
| 178 | Key words | Lifecycle rule | n/a | PASS | "Transition actions define when objects transition to another storage class. Expiration actions define when objects expire" |
| 179 | Key words | Block Public Access: "to limit public access" | n/a | FAIL | The Technical panel says only "S3 Block Public Access settings override these policies and permissions" and gives "four settings". It never states the purpose "to limit public access". Fix: "Four S3 settings that override public-access policies and permissions". |
| 180 | Key words | Presigned URL | n/a | PASS | "grant time-limited access to objects in S3 without updating your bucket policy" |
| 181 | Key words | --generate-cli-skeleton | n/a | PASS | "generates and displays a parameter template that you can customize and use as input on a command" |
| 182 | Key words | --dry-run | n/a | PASS | "checks whether you have the required permissions for the operation, without actually making the request" |

Open FAILs after round 9: 3

Changed after this round: Row 112: the sentence "The same option works for `aws ec2 run-instances`" in step 3 cites S20. Row 130: the bucket-name sentence in step 4 begins with "By default" and is followed by a sentence that a general purpose bucket can also be created in the account regional namespace, with the cites of S10. Row 179: the Block Public Access sentence in How it works says "so that you can limit public access to these resources", as S13, which the Key words row repeats.

## Round 10 (2026-11-18)

# Fact check: devops / aws-compute-storage (round 10)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | EC2 states billed, EBS, S3 versioning, lifecycle, Block Public Access, presigned URLs, offline CLI practice run, read-along | none | N/A | Describes the page itself. |
| 2 | Lede | Three AWS services; what the page covers; practice run needs no account; position among pages | none | N/A | Framing. Describes the page and its practice run. |
| 3 | What it is | EC2 provides on-demand, scalable computing capacity in the AWS Cloud | S1 | PASS | "provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud" |
| 4 | What it is | An EC2 instance is a virtual server in the AWS Cloud | S1 | PASS | "An EC2 instance is a virtual server in the AWS Cloud." |
| 5 | What it is | Instance type determines the hardware | S1 | PASS | "the instance type that you specify determines the hardware available to your instance" |
| 6 | What it is | Each type offers a different balance of compute, memory, network, storage | S1 | PASS | "Each instance type offers a different balance of compute, memory, network, and storage resources." |
| 7 | What it is | EC2 provides these high-level features | S1 | PASS | "Amazon EC2 provides the following high-level features:" |
| 8 | What it is | Instances: virtual servers | S1 | PASS | "Instances / Virtual servers." |
| 9 | What it is | AMIs: preconfigured templates incl. OS and software | S1 | PASS | "Preconfigured templates for your instances that package the components you need for your server (including the operating system and additional software)." |
| 10 | What it is | Instance types: configurations of CPU, memory, storage, networking, graphics | S1 | PASS | "Various configurations of CPU, memory, storage, networking capacity, and graphics hardware for your instances." |
| 11 | What it is | EBS volumes: persistent storage volumes | S1 | PASS | "Persistent storage volumes for your data using Amazon Elastic Block Store" |
| 12 | What it is | Instance store: temporary data deleted on stop, hibernate, terminate | S1 | PASS | "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance." |
| 13 | What it is | Key pairs: AWS stores public key, you store private key | S1 | PASS | "AWS stores the public key and you store the private key in a secure place." |
| 14 | What it is | Security groups: virtual firewall for protocols, ports, source IP ranges | S1 | PASS | "A virtual firewall that allows you to specify the protocols, ports, and source IP ranges that can reach your instances" |
| 15 | What it is | EBS provides scalable, high-performance block storage usable with EC2 | S17 | PASS | "provides scalable, high-performance block storage resources that can be used with Amazon Elastic Compute Cloud (Amazon EC2) instances" |
| 16 | What it is | Attached volume works like a local hard drive | S17 | PASS | "you can use it in the same way you would use a local hard drive attached to a computer" |
| 17 | What it is | Snapshots are point-in-time backups that persist independently | S17 | PASS | "point-in-time backups of Amazon EBS volumes that persist independently from the volume itself" |
| 18 | What it is | S3 is an object storage service | S10 | PASS | "is an object storage service that offers industry-leading scalability" |
| 19 | What it is | Stores data as objects, hierarchical data, or tabular data within buckets | S10 | PASS | "stores data as objects, hierarchical data, or tabular data within buckets" |
| 20 | What it is | Object is a file and metadata; bucket is a container for objects | S10 | PASS | "An object is a file and any metadata that describes the file. A bucket is a container for objects." |
| 21 | What it is | Each object has a key, the unique identifier within the bucket | S10 | PASS | "Each object has a key (or key name), which is the unique identifier for the object within the bucket." |
| 22 | What it is | By default buckets and objects are private | S10 | PASS | "By default, S3 buckets and the objects in them are private." |
| 23 | How it works | Instance transitions through states from launch to termination | S2 | PASS | "transitions through different states from the moment you launch it through to its termination" |
| 24 | How it works | pending: preparing to enter running; not billed | S2 | PASS | "The instance is preparing to enter the running state." then "Not billed" |
| 25 | How it works | running: ready for use; billed | S2 | PASS | "The instance is running and ready for use." then "Billed" |
| 26 | How it works | stopping: preparing to be stopped; not billed | S2 | PASS | "The instance is preparing to be stopped." then "Not billed" |
| 27 | How it works | Hibernate: billed while stopping | S2 | PASS | "If you hibernate an instance, you're billed while the instance is in the stopping state." |
| 28 | How it works | stopped: shut down, cannot be used, startable any time; not billed | S2 | PASS | "The instance is shut down and cannot be used. The instance can be started at any time." then "Not billed" |
| 29 | How it works | shutting-down: preparing to be terminated; not billed | S2 | PASS | "The instance is preparing to be terminated." then "Not billed" |
| 30 | How it works | terminated: permanently deleted, cannot be started; not billed | S2 | PASS | "The instance has been permanently deleted and cannot be started." then "Not billed" |
| 31 | How it works | Billed per second, one-minute minimum, even if idle | S2 | PASS | "you're billed for each second, with a one-minute minimum, that you keep the instance running, even if the instance remains idle and you don't connect to it" |
| 32 | How it works | EBS volumes and Elastic IPs incur charges regardless of state | S2 | PASS | "such as Amazon EBS volumes and Elastic IP addresses, incur charges regardless of the instance's state" |
| 33 | How it works | Reboot equals OS reboot | S2 | PASS | "Rebooting an instance is equivalent to rebooting an operating system." |
| 34 | How it works | Reboot keeps host, public DNS name, private IP, instance store data | S2 | PASS | "remains on the same host computer and maintains its public DNS name, private IP address, and any data on its instance store volumes" |
| 35 | How it works | Stop and start loses instance store data | S2 | PASS | "you lose any data on the instance store volumes attached to the previous host computer" |
| 36 | How it works | New public IPv4 unless secondary NIC or secondary private IPv4 tied to Elastic IP | S2 | PASS | "The instance gets a new public IPv4 address, unless it has a secondary network interface or a secondary private IPv4 address that is associated with an Elastic IP address." |
| 37 | How it works | Hibernate: suspend-to-disk saves RAM to EBS root volume | S2 | PASS | "(suspend-to-disk), which saves the contents from the instance memory (RAM) to your Amazon EBS root volume" |
| 38 | How it works | Can't connect to or recover a terminated instance | S2 | PASS | "You can't connect to or recover a terminated instance." |
| 39 | How it works | Termination protection blocks terminate via console, CLI, API | S2 | PASS | "If you enable termination protection, you can't terminate the instance using the console, CLI, or API." |
| 40 | How it works | DeleteOnTermination controls delete or preserve; default deletes root, preserves others | S2 | PASS | "DeleteOnTermination attribute, which controls whether the volume is deleted or preserved ... The default is to delete the root volume and preserve any other EBS volumes." |
| 41 | How it works | Table: private IPv4, Elastic IP, instance store, root volume, RAM (4 states) | S2 | PASS | Rows match the S2 "Differences between instance states" table: "None", "disassociated", "The data is erased", "The volume is deleted by default", "The RAM is saved to a file on the root volume". |
| 42 | How it works | AWS lists these cost options for EC2 | S4 | PASS | "You can use the following options to optimize your costs for Amazon EC2:" |
| 43 | How it works | On-Demand: pay by the second | S4 | PASS | "Pay, by the second, for the instances that you launch." |
| 44 | How it works | Savings Plans: commitment in USD per hour, 1 or 3 years | S4 | PASS | "a commitment to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years" |
| 45 | How it works | Reserved Instances: commit to instance configuration incl. type and Region, 1 or 3 years | S4 | PASS | "a commitment to a consistent instance configuration, including instance type and Region, for a term of 1 or 3 years" |
| 46 | How it works | Spot: request unused instances, reduce costs significantly | S4 | PASS | "Request unused EC2 instances, which can reduce your Amazon EC2 costs significantly." |
| 47 | How it works | Capacity Reservations: specific AZ | S4 | PASS | "Reserve capacity for your EC2 instances in a specific Availability Zone." |
| 48 | How it works | Spot uses spare capacity below On-Demand price | S5 | PASS | "uses spare EC2 capacity that is available for less than the On-Demand price" |
| 49 | How it works | EC2 terminates, stops, or hibernates Spot when it needs capacity | S5 | PASS | "Amazon EC2 terminates, stops, or hibernates your Spot Instance when Amazon EC2 needs the capacity back." |
| 50 | How it works | Interruption notice: two-minute warning | S5 | PASS | "a Spot Instance interruption notice, which gives the instance a two-minute warning before it is interrupted" |
| 51 | How it works | Spot cost-effective if flexible and interruptible | S5 | PASS | "Spot Instances are a cost-effective choice if you can be flexible about when your applications run and if your applications can be interrupted." |
| 52 | How it works | On-Demand: ICE if no capacity | S5 | PASS | "If capacity is not available when you make a launch request, you get an insufficient capacity error (ICE)." This is in the On-Demand column of the S5 table. |
| 53 | How it works | AMI provides software to set up and boot | S3 | PASS | "is an image that provides the software that is required to set up and boot an Amazon EC2 instance" |
| 54 | How it works | Must specify an AMI at launch | S3 | PASS | "You must specify an AMI when you launch an instance." |
| 55 | How it works | AMI must be compatible with instance type | S3 | PASS | "The AMI must be compatible with the instance type that you chose" |
| 56 | How it works | AMI specific to Region, OS, architecture, root volume type, virtualization type | S3 | PASS | "An AMI is specific to the following: Region / Operating system / Processor architecture / Root volume type / Virtualization type" |
| 57 | How it works | Key pair is credentials to prove identity | S8 | PASS | "is a set of security credentials that you use to prove your identity when connecting to an Amazon EC2 instance" |
| 58 | How it works | Anyone with the private key can connect | S8 | PASS | "anyone who possesses your private key can connect to your instances that use the key pair" |
| 59 | How it works | EC2 keeps no private-key copy; no recovery | S8 | PASS | "Because Amazon EC2 doesn't keep a copy of your private key, there is no way to recover a private key if you lose it." |
| 60 | How it works | User data for automated config or scripts after start | S6 | PASS | "used to perform automated configuration tasks, or to run scripts after the instance starts" |
| 61 | How it works | User data limited to 16 KB raw | S6 | PASS | "User data is limited to 16 KB, in raw form, before it is base64-encoded." |
| 62 | How it works | By default runs only at first-launch boot cycle | S6 | PASS | "By default, user data scripts and cloud-init directives run only during the boot cycle when you first launch an instance." |
| 63 | How it works | User data not in AMI created from instance | S6 | PASS | "If you create an AMI from an instance, the instance user data is not included in the AMI." |
| 64 | How it works | Running instance reads metadata via IMDS | S7 | PASS | "You can access instance metadata from a running instance" |
| 65 | How it works | By default IMDSv1 or IMDSv2 or both | S7 | PASS | "By default, you can use either IMDSv1 or IMDSv2, or both." |
| 66 | How it works | Can set IMDSv2-only; IMDSv1 calls fail | S7 | PASS | "to only accept IMDSv2 calls, which will cause IMDSv1 calls to fail" |
| 67 | How it works | IMDSv2 session-oriented requests | S7 | PASS | "IMDSv2 uses session-oriented requests." |
| 68 | How it works | Session token duration min 1 second, max 6 hours | S7 | PASS | "which can be a minimum of one second and a maximum of six hours" |
| 69 | How it works | EBS volume types differ in performance and price | S19 | PASS | "which differ in performance characteristics and price" |
| 70 | How it works | SSD types: General Purpose SSD and Provisioned IOPS SSD | S19 | PASS | "SSD-backed volume types include General Purpose SSD and Provisioned IOPS SSD" |
| 71 | How it works | HDD types: Throughput Optimized HDD and Cold HDD | S19 | PASS | "HDD volume types include Throughput Optimized HDD and Cold HDD" |
| 72 | How it works | SSD optimized for transactional workloads | S19 | PASS | "SSD-backed volumes are optimized for transactional workloads" |
| 73 | How it works | HDD optimized for large streaming workloads, throughput | S19 | PASS | "HDD-backed volumes are optimized for large streaming workloads where the dominant performance attribute is throughput" |
| 74 | How it works | Volume data replicated across servers in an AZ | S17 | PASS | "volume data is automatically replicated across multiple servers in an Availability Zone" |
| 75 | How it works | io2 Block Express 99.999%; others 99.8% to 99.9% | S17 | PASS | "io2 Block Express volumes provide 99.999% durability ... Other volume types provide 99.8% to 99.9% durability" |
| 76 | How it works | Elastic Volumes: increase capacity or tune performance, no downtime | S17 | PASS | "Elastic Volumes operations to dynamically increase capacity or tune performance, with no downtime" |
| 77 | How it works | Snapshot is incremental; saves only changed blocks | S18 | PASS | "A snapshot is an incremental backup, which means that we save only the blocks on the volume that have changed since the most recent snapshot." |
| 78 | How it works | AWS does not auto-back-up EBS data | S18 | PASS | "AWS does not automatically back up the data stored on your EBS volumes." |
| 79 | How it works | Your job to create snapshots or automate | S18 | PASS | "it is your responsibility to create EBS snapshots on a regular basis, or to set up automatic snapshot creation" |
| 80 | How it works | Each object has a storage class | S15 | PASS | "Each object in Amazon S3 has a storage class associated with it." |
| 81 | How it works | Default is S3 Standard | S15 | PASS | "By default, objects in S3 are stored in the S3 Standard storage class" |
| 82 | How it works | All classes offer high durability | S15 | PASS | "All of these storage classes offer high durability." |
| 83 | How it works | Versioning keeps multiple variants in one bucket | S11 | PASS | "Versioning in Amazon S3 is a means of keeping multiple variants of an object in the same bucket." |
| 84 | How it works | Disabled by default; must enable | S11 | PASS | "By default, S3 Versioning is disabled on buckets, and you must explicitly enable it." |
| 85 | How it works | Delete inserts a delete marker | S11 | PASS | "if you delete an object, Amazon S3 inserts a delete marker instead of removing the object permanently" |
| 86 | How it works | Overwrite makes a new version | S11 | PASS | "If you overwrite an object, it results in a new object version in the bucket." |
| 87 | How it works | Versioned bucket can't go back; can suspend | S11 | PASS | "it can never return to an unversioned state. But you can suspend versioning on that bucket." |
| 88 | How it works | Normal rates apply per version | S11 | PASS | "Normal Amazon S3 rates apply for every version of an object stored and transferred." |
| 89 | How it works | Each version is the entire object | S11 | PASS | "Each version of an object is the entire object; it is not just a diff from the previous version." |
| 90 | How it works | Lifecycle configuration is a set of rules for actions on a group of objects | S12 | PASS | "is a set of rules that define actions that Amazon S3 applies to a group of objects" |
| 91 | How it works | Transition and Expiration actions | S12 | PASS | "Transition actions – These actions define when objects transition to another storage class." "Expiration actions – These actions define when objects expire." |
| 92 | How it works | S3 deletes expired objects on your behalf | S12 | PASS | "Amazon S3 deletes expired objects on your behalf." |
| 93 | How it works | Rules apply to existing and later objects | S12 | PASS | "the configuration rules apply to both existing objects and objects that you add later" |
| 94 | How it works | Bucket policy can't stop lifecycle rule (general purpose) | S12 | PASS | "General purpose buckets — You can't use a bucket policy to prevent deletions or transitions by an S3 Lifecycle rule." |
| 95 | How it works | Noncurrent expiration keeps permanent delete behavior after versioning | S11 | PASS | "you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration configuration" |
| 96 | How it works | New buckets, access points, objects don't allow public access by default | S13 | PASS | "By default, new buckets, access points, and objects don't allow public access." |
| 97 | How it works | Users can change policies/permissions to allow public access | S13 | PASS | "users can modify bucket policies, access point policies, or object permissions to allow public access" |
| 98 | How it works | BPA overrides them | S13 | PASS | "S3 Block Public Access settings override these policies and permissions so that you can limit public access to these resources" |
| 99 | How it works | Four settings, named | S13 | PASS | "Amazon S3 Block Public Access provides four settings." The page names BlockPublicAcls, IgnorePublicAcls, BlockPublicPolicy and RestrictPublicBuckets; each name is found in S13. |
| 100 | How it works | AWS recommends all four for account | S13 | PASS | "we recommend that you turn on all four settings for block public access for your account" |
| 101 | How it works | BPA doesn't alter policies; removing makes public again | S13 | PASS | "Block public access settings don't alter existing policies or ACLs. Therefore, removing a block public access setting causes a bucket or object with a public policy or ACL to again be publicly accessible." |
| 102 | How it works | No per-object BPA | S13 | PASS | "Amazon S3 doesn't support block public access settings on a per-object basis." |
| 103 | How it works | Presigned URLs: time-limited access without updating bucket policy | S14 | PASS | "grant time-limited access to objects in Amazon S3 without updating your bucket policy" |
| 104 | How it works | Credentials are those of the IAM principal who generated it | S14 | PASS | "The credentials used by the presigned URL are those of the AWS Identity and Access Management (IAM) principal who generated the URL." |
| 105 | How it works | Usable multiple times until expiry | S14 | PASS | "You can use the presigned URL multiple times, up to the expiration date and time." |
| 106 | How it works | Console 1 minute to 12 hours; CLI/SDK up to 7 days | S14 | PASS | "expiration time can be set between 1 minute and 12 hours. If you use the AWS CLI or AWS SDKs, the expiration time can be set as high as 7 days." |
| 107 | How it works | Expiry checked at HTTP request time | S14 | PASS | "Amazon S3 checks the expiration date and time of a signed URL at the time of the HTTP request." |
| 108 | How it works | Restarted download after expiry fails | S14 | PASS | "if the connection drops and the client tries to restart the download after the expiration time passes, the download fails" |
| 109 | How it works | Expires when credential revoked/deleted/deactivated | S14 | PASS | "In general, a presigned URL expires when the credential you used to create it is revoked, deleted, or deactivated. This is true even if the URL was created with a later expiration time." |
| 110 | How it works | Presigned URLs are bearer tokens | S14 | PASS | "presigned URLs are bearer tokens that grant access to those who possess them" |
| 111 | How it works | Strong read-after-write for PUT and DELETE in all Regions | S10 | PASS | "strong read-after-write consistency for PUT and DELETE requests of objects in your Amazon S3 bucket in all AWS Regions" |
| 112 | How it works | After successful PUT, GET/LIST returns the data | S10 | PASS | "Any read (GET or LIST request) that is initiated following the receipt of a successful PUT response will return the data written by the PUT request." |
| 113 | How it works | Bucket configs eventually consistent | S10 | PASS | "Bucket configurations have an eventual consistency model." |
| 114 | How it works | Deleted bucket might still appear in list | S10 | PASS | "the deleted bucket might still appear in the list" |
| 115 | How it works | Wait 15 minutes after enabling versioning | S10 | PASS | "We recommend that you wait for 15 minutes after enabling versioning before issuing write operations" |
| 116 | How it works | No object locking for concurrent writers; latest timestamp wins | S10 | PASS | "does not support object locking for concurrent writers. If two PUT requests are simultaneously made to the same key, the request with the latest timestamp wins." |
| 117 | Try it | Run record: date, OS, bash, CLI versions, no account, no AWS_ var, no ~/.aws, output, steps 5 and 6 not run | none | N/A | Record of the page's own run. |
| 118 | Try it | Step 1: install script installs for current user by default | S21 | PASS | "installs for the current user by default" |
| 119 | Try it | .zip installer files are PGP-signed | S21 | PASS | "files are cryptographically signed using PGP signatures" |
| 120 | Try it | Tutorial checked the signature with the page's command | S21 | PASS | "$ gpg --verify awscliv2.sig awscliv2.zip" |
| 121 | Try it | -i and -b set install dir and aws link location | S21 | PASS | "--install-dir or -i – This option specifies the directory to copy all of the files to." "--bin-dir or -b – ... the main aws program in the install directory is symbolically linked to the file aws in the specified path." |
| 122 | Try it | Step 1 code block `aws --version` and its output; "tutorial's own commands differ" | none | N/A | Run record and the tutorial's own work. |
| 123 | Try it | AWS_CONFIG_FILE: file for configuration profiles | S22 | PASS | "Specifies the location of the file that the AWS CLI uses to store configuration profiles." |
| 124 | Try it | AWS_SHARED_CREDENTIALS_FILE: file for access keys | S22 | PASS | "the file that the AWS CLI uses to store access keys" |
| 125 | Try it | AWS_EC2_METADATA_DISABLED disables IMDS use | S22 | PASS | "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 126 | Try it | /dev/null and true are the tutorial's own choice | none | N/A | The reader's own work. |
| 127 | Try it | --generate-cli-skeleton generates and displays a template to customize and use as input | S20 | PASS | "generates and displays a parameter template that you can customize and use as input on a command" |
| 128 | Try it | Template includes all supported parameters | S20 | PASS | "The generated template includes all of the parameters that the command supports." |
| 129 | Try it | Skeleton file expects underlying API parameter names | S20 | PASS | "the skeleton file expects you to reference all parameters by their underlying API parameter names" |
| 130 | Try it | Step 2 code block (export line, `aws s3api create-bucket --generate-cli-skeleton`), output, note on placeholders | none | N/A | Run record and the tutorial's own reading of its output. The commands are consistent with S20 and S22. |
| 131 | Try it | Same option works for `aws ec2 run-instances` | S20 | PASS | "$ aws ec2 run-instances --generate-cli-skeleton" |
| 132 | Try it | User Guide shows sample output of this command | S20 | PASS | The S20 page shows the output right after the command: `"DryRun": true,` |
| 133 | Try it | Step 3 filter, counts, output, name matching | none | N/A | The tutorial's own work and run record. |
| 134 | Try it | `aws s3` custom commands don't support --generate-cli-skeleton | S20 | PASS | "Custom AWS CLI commands, such as the aws s3 commands don't support either the --generate-cli-skeleton or --cli-input-json" |
| 135 | Try it | Step 4 code block and output (exit 252) | none | N/A | Run record. |
| 136 | Try it | AWS lists 252 as syntax invalid, unknown parameter, or bad value | S23 | PASS | "Command syntax was invalid, an unknown parameter was provided, or a parameter value was incorrect and prevented the command from running." |
| 137 | Try it | Step 5 is AWS's own tutorial | S9 | PASS | The cited S9 is "Get started with Amazon EC2" and contains the tutorial steps. |
| 138 | Try it | Free Tier conditions: no cost | S9 | PASS | "it won't cost you anything to complete this tutorial, because this tutorial helps you select options that are within the Free Tier benefits" |
| 139 | Try it | Otherwise standard fees from launch until terminate, even idle | S9 | PASS | "you'll incur the standard Amazon EC2 usage fees from the time that you launch the instance (even if it remains idle) until you terminate it" |
| 140 | Try it | Conditions are in "Cost for this tutorial" | none | PASS | The page names this section. Quote: "Cost for this tutorial". The sentence is advice to the reader. |
| 141 | Try it | Step 5.1 choose Launch instance | S9 | PASS | "choose Launch instance." |
| 142 | Try it | Step 5.2 Free Tier eligible AMI and type | S9 | PASS | "an AMI that is marked Free Tier eligible" and "an instance type that is marked Free Tier eligible" |
| 143 | Try it | Step 5.3 existing or new key pair; no key pair means no connect | S9 | PASS | "choose an existing key pair or choose Create new key pair" and "you won't be able to connect to your instance using the methods described in this tutorial" |
| 144 | Try it | Step 5.4 default VPC, security group with 0.0.0.0/0 | S9 | PASS | "your default VPC is selected ... a security group with a rule that allows connections to your instance from anywhere (0.0.0.0/0)" |
| 145 | Try it | Warning: 0.0.0.0/0 OK short time in test, unsafe for production | S9 | PASS | "you might consider this acceptable for a short time in a test environment, but it's unsafe for production environments" |
| 146 | Try it | Step 5.5 initial state pending then running | S9 | PASS | "The initial instance state is pending. After the instance starts, its state changes to running." |
| 147 | Try it | After status checks, ready for connections | S9 | PASS | "After your instance passes its status checks, it is ready to receive connection requests." |
| 148 | Try it | Step 5.6 any SSH client | S9 | PASS | "using any SSH client" |
| 149 | Try it | Example ssh command and meanings of its parts | S9 | PASS | "key-pair-name.pem is the name of your private key file, ec2-user is the username associated with the image, and the string after the @ symbol is the public DNS name of the instance." The command line matches S9. |
| 150 | Try it | Step 5.7 terminate is permanent and irreversible | S9 | PASS | "Terminating an instance is permanent and irreversible." |
| 151 | Try it | Back up data before terminate | S9 | PASS | "ensure that you have backed up all data that you need to retain after the termination" |
| 152 | Try it | Choose Instance state, then Terminate (delete) instance | S9 | PASS | "Choose Instance state, Terminate (delete) instance." |
| 153 | Try it | Charges stop when status is shutting down or terminated | S9 | PASS | "You'll stop incurring charges ... as soon as the instance status changes to shutting down or terminated" |
| 154 | Try it | Step 6 intro: commands from the User Guide; tutorial did not run them | none | N/A | Describes the page's own practice. |
| 155 | Try it | High-level `aws s3` commands simplify managing objects | S16 | PASS | "The high-level aws s3 commands simplify managing Amazon S3 objects." |
| 156 | Try it | S3 charges only for what you use | S10 | PASS | "Amazon S3 charges you only for what you actually use" |
| 157 | Try it | Bucket name unique across accounts in all Regions within a partition (by default, general purpose) | S10 | PASS | "each bucket name must be unique across all AWS accounts in all the AWS Regions within a partition" |
| 158 | Try it | Can create a bucket in account regional namespace | S10 | PASS | "you can choose to create a bucket in the shared global namespace or you can choose to create a bucket in your account regional namespace" |
| 159 | Try it | Code block: mb, cp, ls, rm, rb with amzn-s3-demo-bucket | S16 | PASS | S16 has "$ aws s3 mb s3://amzn-s3-demo-bucket", "$ aws s3 cp filename.txt s3://amzn-s3-demo-bucket", "$ aws s3 ls s3://amzn-s3-demo-bucket", "$ aws s3 rm s3://amzn-s3-demo-bucket/example/filename.txt", "$ aws s3 rb s3://amzn-s3-demo-bucket". The cite on the intro sentence covers the block. |
| 160 | Try it | "The page shows each command on its own, with other examples"; "replace rm path" | none | N/A | Describes the source page and gives advice to the reader. |
| 161 | Try it | rb needs empty bucket by default | S16 | PASS | "By default, the bucket must be empty for the operation to succeed." |
| 162 | Try it | Non-empty bucket needs --force | S16 | PASS | "To remove a bucket that's not empty, you need to include the --force option." |
| 163 | Try it | Versioned bucket with deleted-but-retained objects: command does not allow removal until content removed | S16 | PASS | "this command does not allow you to remove the bucket. You must first remove all of the content." |
| 164 | How a tester uses it | Terminate when no longer needed | S2 | PASS | "When you've decided that you no longer need an instance, you can terminate it." |
| 165 | How a tester uses it | Per-second billing, one-minute minimum, even if idle | S2 | PASS | "billed for each second, with a one-minute minimum ... even if the instance remains idle" |
| 166 | How a tester uses it | Can't connect to or recover terminated instance | S2 | PASS | "You can't connect to or recover a terminated instance." |
| 167 | How a tester uses it | Back up data before terminate | S9 | PASS | "ensure that you have backed up all data that you need to retain" |
| 168 | How a tester uses it | Stopped instance: no usage charge; EBS storage charged | S2 | PASS | "You are not charged for usage or data transfer fees for your instance when it is stopped. Charges are incurred for the storage of any Amazon EBS volumes." |
| 169 | How a tester uses it | Spot suits data analysis, batch jobs, background processing, optional tasks | S5 | PASS | "Spot Instances are well-suited for data analysis, batch jobs, background processing, and optional tasks." |
| 170 | How a tester uses it | Spot two-minute warning | S5 | PASS | "gives the instance a two-minute warning before it is interrupted" |
| 171 | How a tester uses it | Multiple instances from one AMI | S3 | PASS | "You can launch multiple instances from a single AMI when you require multiple instances with the same configuration." |
| 172 | How a tester uses it | User data runs config tasks or scripts after start | S6 | PASS | "perform automated configuration tasks, or to run scripts after the instance starts" |
| 173 | How a tester uses it | Stop/start: lose instance store data; new public IPv4 unless...; keeps private IPv4 | S2 | PASS | "you lose any data on the instance store volumes", "The instance gets a new public IPv4 address, unless ...", "Your instance retains its private IPv4 address" |
| 174 | How a tester uses it | IMDS default both; IMDSv2-only option | S7 | PASS | "By default, you can use either IMDSv1 or IMDSv2, or both." "only accept IMDSv2 calls, which will cause IMDSv1 calls to fail" |
| 175 | How a tester uses it | Object identified by key within bucket | S10 | PASS | "the unique identifier for the object within the bucket" |
| 176 | How a tester uses it | Overwrite gives new version; can always restore previous | S11 | PASS | "it results in a new object version in the bucket. You can always restore the previous version." |
| 177 | How a tester uses it | Expiration actions and deletion on your behalf | S12 | PASS | "These actions define when objects expire. Amazon S3 deletes expired objects on your behalf." |
| 178 | How a tester uses it | 30-day rule queues existing objects older than 30 days | S12 | PASS | "Amazon S3 will queue for removal any existing objects that are more than 30 days old" |
| 179 | How a tester uses it | New buckets etc. don't allow public access | S13 | PASS | "new buckets, access points, and objects don't allow public access" |
| 180 | How a tester uses it | GetBucketAcl and GetObjectAcl return effective permissions | S13 | PASS | "Calls to GetBucketAcl and GetObjectAcl always return the effective permissions in place" |
| 181 | How a tester uses it | Example with IgnorePublicAcls | S13 | PASS | "GetBucketAcl returns an ACL that reflects the access permissions that Amazon S3 is enforcing, rather than the actual ACL that is associated with the bucket" |
| 182 | How a tester uses it | 403 Forbidden advice | S14 | PASS | "The IAM user or role generating the URL must have the required permissions ... check that the Amazon S3 bucket policy doesn't explicitly deny access to the object." |
| 183 | How a tester uses it | SignatureDoesNotMatch advice | S14 | PASS | "First, ensure that your system clock is synchronized with a Network Time Protocol (NTP) server, as even small time drifts can invalidate signatures." |
| 184 | How a tester uses it | IAM role URL expires with role session | S14 | PASS | "The presigned URL expires when the role session expires, even if you specify a longer expiration time." |
| 185 | How a tester uses it | Flaky tests: eventual consistency; 15 minutes; latest timestamp | S10 | PASS | "Bucket configurations have an eventual consistency model." "wait for 15 minutes after enabling versioning" "the request with the latest timestamp wins" |
| 186 | How a tester uses it | EBS not auto-backed-up | S18 | PASS | "AWS does not automatically back up the data stored on your EBS volumes." |
| 187 | How a tester uses it | --dry-run checks permissions without the request | S24 | PASS | "Checks whether you have the required permissions for the operation, without actually making the request" |
| 188 | How a tester uses it | DryRunOperation or UnauthorizedOperation | S24 | PASS | "If you have the required permissions, the error response is DryRunOperation . Otherwise, it is UnauthorizedOperation ." |
| 189 | How a tester uses it | "Tutorial did not run it"; "tutorial's run needed no account" | none | N/A | Record of the page's own practice. |
| 190 | How a tester uses it | Skeleton template includes all supported parameters | S20 | PASS | "The generated template includes all of the parameters that the command supports." |
| 191 | Common mistakes | Running instance billed per second even if idle | S2 | PASS | "you're billed for each second ... even if the instance remains idle" |
| 192 | Common mistakes | Tutorial: standard fees if Free Tier doesn't apply | S9 | PASS | "you'll incur the standard Amazon EC2 usage fees from the time that you launch the instance (even if it remains idle) until you terminate it" |
| 193 | Common mistakes | Stopped: no usage or transfer fees; EBS storage charged | S2 | PASS | "You are not charged for usage or data transfer fees ... Charges are incurred for the storage of any Amazon EBS volumes." |
| 194 | Common mistakes | Elastic IPs incur charges regardless of state | S2 | PASS | "Elastic IP addresses, incur charges regardless of the instance's state" |
| 195 | Common mistakes | Instance store data deleted on stop/hibernate/terminate | S1 | PASS | "temporary data that is deleted when you stop, hibernate, or terminate your instance" |
| 196 | Common mistakes | Terminate is permanent; default deletes root volume | S9, S2 | PASS | S9: "Terminating an instance is permanent and irreversible." S2: "The default is to delete the root volume". |
| 197 | Common mistakes | 0.0.0.0/0 for SSH | S9 | PASS | "you might consider this acceptable for a short time in a test environment, but it's unsafe for production environments" |
| 198 | Common mistakes | No private-key recovery; anyone with it can connect | S8 | PASS | "there is no way to recover a private key if you lose it" and "anyone who possesses your private key can connect to your instances" |
| 199 | Common mistakes | User data runs only at first boot by default; not in AMI | S6 | PASS | "run only during the boot cycle when you first launch an instance" and "the instance user data is not included in the AMI" |
| 200 | Common mistakes | AWS does not back up EBS | S18 | PASS | "AWS does not automatically back up the data stored on your EBS volumes." |
| 201 | Common mistakes | Versioning can't be undone; charged for every version | S11 | PASS | "it can never return to an unversioned state" and "Normal Amazon S3 rates apply for every version of an object stored" |
| 202 | Common mistakes | Bucket policy can't stop lifecycle rule | S12 | PASS | "You can't use a bucket policy to prevent deletions or transitions by an S3 Lifecycle rule." |
| 203 | Common mistakes | Inspect other policies; removing a setting re-exposes | S13 | PASS | "In addition to enabling Block Public Access, carefully inspect the following policies to confirm that they don't grant public access" and "removing a block public access setting causes a bucket or object with a public policy or ACL to again be publicly accessible" |
| 204 | Common mistakes | Presigned URLs are bearer tokens | S14 | PASS | "presigned URLs are bearer tokens that grant access to those who possess them" |
| 205 | Common mistakes | No object locking for concurrent writers | S10 | PASS | "Amazon S3 does not support object locking for concurrent writers." |
| 206 | Common mistakes | `aws s3` doesn't support --generate-cli-skeleton | S20 | PASS | "Custom AWS CLI commands, such as the aws s3 commands don't support either the --generate-cli-skeleton" |
| 207 | Common mistakes | Can't resume failed upload; kill leaves files | S16 | PASS | "You can't resume a failed upload when using these aws s3 commands." "canceled by a kill command or system failure, the created files remain in the Amazon S3 bucket" |
| 208 | What a tester can check | Callout "Tutorial advice": the tutorial's own advice list | none | PASS | The callout title is "Tutorial advice" and it says "This list is the tutorial's own advice". The `--dry-run` and `s3api` items are supported by rows 130, 187 and 188. The stopped-instance EBS item is supported by row 168. |
| 209 | Key words | EC2 instance | none | PASS | Row 4: "An EC2 instance is a virtual server in the AWS Cloud" |
| 210 | Key words | AMI | none | PASS | Row 53: "An Amazon Machine Image (AMI) is an image that provides the software that is required to set up and boot an EC2 instance" |
| 211 | Key words | Instance type | none | PASS | "The instance type that you specify determines the hardware available to your instance. Each instance type offers a different balance of compute, memory, network, and storage resources" |
| 212 | Key words | EBS volume | none | PASS | "After you attach a volume to an instance, you can use it in the same way you would use a local hard drive attached to a computer" |
| 213 | Key words | Instance store volume | none | PASS | "Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance" |
| 214 | Key words | Snapshot | none | PASS | "Snapshots are point-in-time backups of EBS volumes" and "A snapshot is an incremental backup" |
| 215 | Key words | Key pair | none | PASS | "A key pair is a set of security credentials that you use to prove your identity when connecting to an EC2 instance" and "AWS stores the public key and you store the private key" |
| 216 | Key words | User data | none | PASS | "you can pass user data that performs automated configuration tasks or runs scripts after the instance starts" |
| 217 | Key words | IMDS | none | PASS | "A running instance can read its instance metadata through the Instance Metadata Service (IMDS)" and "IMDSv2 uses session-oriented requests" |
| 218 | Key words | Spot Instance | none | PASS | "A Spot Instance uses spare EC2 capacity that is available for less than the On-Demand price" and "a two-minute warning" |
| 219 | Key words | S3 bucket | none | PASS | "A bucket is a container for objects" |
| 220 | Key words | Object key | none | PASS | "Each object has a key, which is the unique identifier for the object within the bucket" |
| 221 | Key words | Storage class | none | PASS | "Each object in S3 has a storage class associated with it. By default, objects are stored in the S3 Standard storage class" |
| 222 | Key words | Versioning | none | PASS | "a means of keeping multiple variants of an object in the same bucket. By default, S3 Versioning is disabled on buckets" |
| 223 | Key words | Delete marker | none | PASS | "If you delete an object, S3 inserts a delete marker instead of removing the object permanently". This sentence is in the versioning paragraph, so "in a versioning-enabled bucket" is context from that paragraph. |
| 224 | Key words | Lifecycle rule | none | PASS | "a set of rules that define actions ... Transition actions define when objects transition to another storage class. Expiration actions define when objects expire" |
| 225 | Key words | Block Public Access | none | PASS | "S3 Block Public Access settings override these policies and permissions so that you can limit public access" and "provides four settings" |
| 226 | Key words | Presigned URL | none | PASS | "grant time-limited access to objects in S3 without updating your bucket policy" |
| 227 | Key words | --generate-cli-skeleton | none | PASS | "generates and displays a parameter template that you can customize and use as input on a command" |
| 228 | Key words | --dry-run | none | PASS | "checks whether you have the required permissions for the operation, without actually making the request" |

Open FAILs after round 10: 0

Open FAILs: 0
