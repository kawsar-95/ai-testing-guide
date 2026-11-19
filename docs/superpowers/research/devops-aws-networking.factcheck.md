# Fact check: devops / aws-networking

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html; S2 https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html; S3 https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html; S4 https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / aws-networking (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "VPC, subnets, security groups, load balancers, Route 53, and CloudFront. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This text describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | With Amazon VPC, you can launch AWS resources in a logically isolated virtual network that you have defined. | S1 | PASS | "With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined." |
| 2 | Elastic Load Balancing automatically distributes your incoming traffic across multiple targets. | S2 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as" |
| 3 | Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. | S3 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 4 | Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content to your users. | S4 | PASS | "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / aws-networking (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "VPC, Elastic Load Balancing, Route 53, and CloudFront. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It lists the topic and describes the page itself. It states no fact about a tool. |
| 1 | With Amazon VPC, you can launch AWS resources in a logically isolated virtual network that you have defined. | S1 | PASS | "With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined." (the line breaks after "virtual") |
| 2 | Elastic Load Balancing automatically distributes your incoming traffic across multiple targets. | S2 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as" |
| 3 | Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. | S3 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 4 | Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content to your users. | S4 | PASS | "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / aws-networking (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "VPC, Elastic Load Balancing, Route 53, and CloudFront. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the page topics and describes the page itself. |
| 1 | With Amazon VPC, you can launch AWS resources in a logically isolated virtual network that you have defined | S1 | PASS | "With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined." |
| 2 | Elastic Load Balancing automatically distributes your incoming traffic across multiple targets | S2 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as..." |
| 3 | Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service | S3 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 4 | Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content to your users | S4 | PASS | "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / aws-networking (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "VPC, Elastic Load Balancing, Route 53, and CloudFront. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the topics and describes the page itself. It states no fact about a tool, command, or number. |
| 1 | With Amazon VPC, you can launch AWS resources in a logically isolated virtual network that you have defined. | S1 | PASS | "With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined." |
| 2 | Elastic Load Balancing automatically distributes your incoming traffic across multiple targets. | S2 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses" |
| 3 | Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. | S3 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 4 | Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content to your users. | S4 | PASS | "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 30 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-18)

# Fact check: devops / aws-networking (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Page description line (topics covered, practice run, read-along) | none | N/A | It describes the page itself. |
| 2 | Lede | Page scope, "needs no AWS account", order of pages | none | N/A | It describes the page and its own run. |
| 3 | What it is | VPC lets you launch AWS resources in a logically isolated virtual network that you've defined | S1 | PASS | "you can launch AWS resources in a logically isolated virtual network that you've defined" (the file has a line break after "virtual") |
| 4 | What it is | A VPC is a virtual network dedicated to your AWS account | S2 | PASS | "A virtual private cloud (VPC) is a virtual network dedicated to your AWS account." |
| 5 | What it is | A subnet is a range of IP addresses in your VPC | S2 | PASS | "A subnet is a range of IP addresses in your VPC." |
| 6 | What it is | A subnet must reside in a single Availability Zone | S1 | PASS | "A subnet must reside in a single Availability Zone." |
| 7 | What it is | You launch AWS resources, such as EC2 instances, into your subnets | S2 | PASS | "You launch AWS resources, such as Amazon EC2 instances, into your subnets." |
| 8 | What it is | A route table is the traffic controller for your VPC | S6 | PASS | "A route table serves as the traffic controller for your virtual private cloud (VPC)." |
| 9 | What it is | Each route table has rules, called routes, that decide where traffic from a subnet or gateway goes | S6 | PASS | "Each route table contains a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed." |
| 10 | What it is | Creating a VPC also creates the main route table | S6 | PASS | "When you create a VPC, we also create the main route" (the sentence continues on the next line) |
| 11 | What it is | Each route has a destination (CIDR block or prefix list) and a target | S6 | PASS | "Each route specifies a destination (CIDR block or prefix list) and a target" |
| 12 | What it is | Examples of a target: internet gateway, NAT gateway, VPC peering connection, VPN connection | S6 | PASS | "(such as an internet gateway, NAT gateway, VPC peering connection, or VPN connection)" |
| 13 | What it is | Traffic is routed to targets based on its destination IP address | S6 | PASS | "Traffic is routed to targets based on its destination IP address." |
| 14 | What it is | A gateway connects your VPC to another network; an internet gateway connects it to the internet | S1 | PASS | "A gateway connects your VPC to another network. For example, use an internet gateway to connect your VPC to the internet." |
| 15 | What it is | A security group controls the traffic allowed to reach and leave its associated resources | S9 | PASS | "A security group controls the traffic that is allowed to reach and leave the resources that it is associated with." |
| 16 | What it is | A network ACL allows or denies specific inbound or outbound traffic at the subnet level | S10 | PASS | "A network access control list (ACL) allows or denies specific inbound or outbound traffic at the subnet level." |
| 17 | What it is | ELB automatically distributes incoming traffic across multiple targets in one or more AZs | S15 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones." |
| 18 | What it is | ELB monitors target health and routes traffic only to healthy targets | S15 | PASS | "monitors the health of its registered targets, and routes traffic only to the healthy targets" |
| 19 | What it is | Route 53 is a highly available and scalable DNS web service | S19 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 20 | What it is | Route 53 does three main functions in any combination: domain registration, DNS routing, health checking | S19 | PASS | "perform three main functions in any combination: domain registration, DNS routing, and health checking" |
| 21 | What it is | CloudFront speeds up distribution of static and dynamic web content to your users | S21 | PASS | "a web service that speeds up distribution of your static and dynamic web content" |
| 22 | What it is | CloudFront delivers through a worldwide network of data centers called edge locations | S21 | PASS | "CloudFront delivers your content through a worldwide network of data centers called edge locations." |
| 23 | How it works | You must specify an IPv4 CIDR block when you create a VPC | S4 | PASS | "When you create a VPC, you must specify an IPv4 CIDR block for the VPC." |
| 24 | How it works | Allowed block size is /16 (65,536 IPs) to /28 (16 IPs) | S4 | PASS | "between a /16 netmask (65,536 IP addresses) and /28 netmask (16 IP addresses)" |
| 25 | How it works | A subnet CIDR can equal the VPC CIDR or be a subset | S5 | PASS | "can be the same as the CIDR block for the VPC ... or a subset of the CIDR block for the VPC" |
| 26 | How it works | Subnet CIDR blocks in one VPC cannot overlap | S5 | PASS | "the CIDR blocks of the subnets cannot overlap." |
| 27 | How it works | VPC ranges should not overlap your own network's ranges | S3 | PASS | "Ensure that the IP address ranges for your VPCs don't overlap with the IP address ranges for your own network." |
| 28 | How it works | For connectivity between multiple VPCs there must be no overlapping IPs | S3 | PASS | "you must ensure that they have no overlapping IP addresses." |
| 29 | How it works | First four and last IP in each subnet CIDR block are not available | S5 | PASS | "The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use" |
| 30 | How it works | In 10.0.0.0/24 AWS lists five reserved addresses | S5 | PASS | "in a subnet with CIDR block 10.0.0.0/24, the following five IP addresses are reserved" |
| 31 | How it works | 10.0.0.0 network address; 10.0.0.1 reserved for the VPC router | S5 | PASS | "10.0.0.0: Network address. 10.0.0.1: Reserved by AWS for the VPC router." |
| 32 | How it works | 10.0.0.2 reserved by AWS; 10.0.0.3 reserved for future use | S5 | PASS | "10.0.0.2: Reserved by AWS." and "10.0.0.3: Reserved by AWS for future use." |
| 33 | How it works | 10.0.0.255 is the broadcast address, reserved because broadcast is not supported | S5 | PASS | "10.0.0.255: Network broadcast address. We do not support broadcast in a VPC, therefore we reserve this address." |
| 34 | How it works | A CLI or EC2 API subnet CIDR is changed to canonical form; 100.68.0.18/18 becomes 100.68.0.0/18 | S5 | PASS | "automatically modified to its canonical form ... if you specify 100.68.0.18/18 for the CIDR block, we create a CIDR block of 100.68.0.0/18." |
| 35 | How it works | Your account includes a default VPC in each Region | S1 | PASS | "Your AWS account includes a default VPC in each AWS Region." |
| 36 | How it works | A default VPC has an internet gateway; each default subnet is public | S2 | PASS | "A default VPC includes an internet gateway, and each default subnet is a public subnet." |
| 37 | How it works | Public subnet = route table with a route to an internet gateway; without it, private | S7 | PASS | "If a subnet is associated with a route table that has a route to an internet gateway, it's known as a public subnet." and "...does not have a route to an internet gateway, it's known as a private subnet." |
| 38 | How it works | Public subnet's IGW route can be 0.0.0.0/0 or ::/0 | S7 | PASS | "(0.0.0.0/0 for IPv4 or ::/0 for IPv6)" |
| 39 | How it works | Attaching an IGW does not automatically make instances reachable | S3 | PASS | "Attaching an internet gateway to a VPC does not automatically make your instances accessible from the internet." |
| 40 | How it works | You must also add a route to the IGW in the subnet route table | S3 | PASS | "you must update the subnet route table with a route to the internet gateway." |
| 41 | How it works | Instances must also have public IP addresses | S3 | PASS | "You must also ensure that the instances have public IP addresses" |
| 42 | How it works | They need a security group that allows internet traffic over specific ports and protocols | S3 | PASS | "an associated security group that allows traffic from the internet over specific ports and protocols" |
| 43 | How it works | By default an instance in a nondefault subnet has a private but no public IPv4 address | S2 | PASS | "By default, each instance that you launch into a nondefault subnet has a private IPv4 address, but no public IPv4 address" |
| 44 | How it works | You can assign a public address at launch or modify the subnet's public IP attribute | S2 | PASS | "unless you specifically assign one at launch, or you modify the subnet's public IP address attribute" |
| 45 | How it works | A NAT gateway lets private-subnet instances connect outside the VPC | S8 | PASS | "so that instances in a private subnet can connect to services outside your VPC" |
| 46 | How it works | External services can't initiate a connection with those instances | S8 | PASS | "external services can't initiate a connection with those instances." |
| 47 | How it works | A public NAT gateway goes in a public subnet and needs an Elastic IP at creation | S8 | PASS | "You create a public NAT gateway in a public subnet and must associate an Elastic IP address with the NAT gateway at creation." |
| 48 | How it works | A subnet with no explicit route table association uses the main route table | S2 | PASS | "Otherwise, the subnet is implicitly associated with the main route table." |
| 49 | How it works | Only traffic allowed by security group rules reaches the instance | S9 | PASS | "The only traffic that reaches the instance is the traffic allowed by the security group rules." |
| 50 | How it works | Without an SSH-allow rule you could not connect with SSH | S9 | PASS | "If the security group does not contain a rule that allows SSH traffic, then you could not connect to your instance using SSH." |
| 51 | How it works | Security groups are stateful | S9 | PASS | "Security groups are stateful." |
| 52 | How it works | Response traffic for a request from an instance is allowed in, regardless of inbound rules | S9 | PASS | "the response traffic for that request is allowed to reach the instance regardless of the inbound security group rules." |
| 53 | How it works | Security groups don't filter traffic to and from Amazon DNS, DHCP, EC2 instance metadata, among others | S9 | PASS | "Security groups do not filter traffic destined to and from the following: Amazon Domain Name Services (DNS) / Amazon Dynamic Host Configuration Protocol (DHCP) / Amazon EC2 instance metadata" |
| 54 | How it works | For ports 22 or 3389, authorize only specific IP ranges | S9 | PASS | "When you add inbound rules for ports 22 (SSH) or 3389 (RDP) ... authorize only specific IP address ranges." |
| 55 | How it works | 0.0.0.0/0 (IPv4) and ::/ (IPv6) let anyone in from any IP using the protocol | S9 | PASS | "If you specify 0.0.0.0/0 (IPv4) and ::/ (IPv6), this enables anyone to access your instances from any IP address using the specified protocol." |
| 56 | How it works | Rule changes propagate as quickly as possible, but a small delay might occur | S14 | PASS | "Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur." |
| 57 | How it works | Each subnet must be associated with a network ACL | S10 | PASS | "Each subnet in your VPC must be associated with a network ACL." |
| 58 | How it works | With no explicit association, the subnet uses the default network ACL | S10 | PASS | "the subnet is automatically associated with the default network ACL." |
| 59 | How it works | A subnet can have only one network ACL at a time | S10 | PASS | "a subnet can be associated with only one network ACL at a time." |
| 60 | How it works | Each ACL rule can allow or deny | S10 | PASS | "Each rule can either allow or deny traffic." |
| 61 | How it works | Rule numbers run from 1 to 32766 | S10 | PASS | "Each rule has a number from 1 to 32766." |
| 62 | How it works | Rules are evaluated in order, lowest number first | S10 | PASS | "We evaluate the rules in order, starting with the lowest numbered rule" |
| 63 | How it works | On a match the rule is applied and no further rules are evaluated | S10 | PASS | "If the traffic matches a rule, the rule is applied and we do not evaluate any additional rules." |
| 64 | How it works | Network ACLs are stateless | S10 | PASS | "NACLs are stateless" |
| 65 | How it works | A rule allowing inbound traffic does not automatically allow the responses | S10 | PASS | "responses to that traffic are not automatically allowed." |
| 66 | How it works | Rules are evaluated when traffic enters and leaves the subnet, not within it | S10 | PASS | "when traffic enters and leaves the subnet, not as it is routed within a subnet." |
| 67 | How it works | Network ACLs can't block IMDS traffic | S10 | PASS | "Network ACLs can't block traffic to the Instance Metadata Service (IMDS)." |
| 68 | How it works | AWS says use security groups as the primary mechanism for network access | S11 | PASS | "Use security groups as the primary mechanism for controlling network access to your VPCs." |
| 69 | How it works | Use network ACLs for stateless, coarse-grain control when necessary | S11 | PASS | "When necessary, use network ACLs to provide stateless, coarse-grain network control." |
| 70 | How it works | A load balancer is the single point of contact for clients | S16 | PASS | "A load balancer serves as the single point of contact for clients." |
| 71 | How it works | A listener checks for connection requests using the protocol and port you configure | S16 | PASS | "A listener checks for connection requests from clients, using the protocol and port that you configure." |
| 72 | How it works | Listener rules decide how the LB routes to registered targets | S16 | PASS | "The rules that you define for a listener determine how the load balancer routes requests to its registered targets." |
| 73 | How it works | You must define a default rule for each listener | S16 | PASS | "You must define a default rule for each listener" |
| 74 | How it works | Each target group routes requests to one or more registered targets such as EC2 instances | S16 | PASS | "Each target group routes requests to one or more registered targets, such as EC2 instances" |
| 75 | How it works | An ALB works at layer 7 of the OSI model | S16 | PASS | "functions at the application layer, the seventh layer of the Open Systems Interconnection (OSI) model" |
| 76 | How it works | It evaluates listener rules in priority order | S16 | PASS | "it evaluates the listener rules in priority order to determine which rule to apply" |
| 77 | How it works | Default algorithm is round robin; least outstanding requests is an alternative | S16 | PASS | "The default routing algorithm is round robin; alternatively, you can specify the least outstanding requests routing algorithm." |
| 78 | How it works | Rules can forward based on the URL | S16 | PASS | "forward requests based on the URL in the request" |
| 79 | How it works | Rules can forward based on the HTTP host field | S16 | PASS | "forward requests based on the host field in the HTTP header" |
| 80 | How it works | An ALB periodically sends requests to registered targets; these tests are health checks | S18 | PASS | "Your Application Load Balancer periodically sends requests to its registered targets to test their status. These tests are called health checks." |
| 81 | How it works | A registered target must pass one health check to be healthy | S18 | PASS | "it must pass one health check to be considered healthy" |
| 82 | How it works | Exceeding UnhealthyThresholdCount consecutive failures takes the target out of service | S18 | PASS | "If the health checks exceed UnhealthyThresholdCount consecutive failures, the load balancer takes the target out of service." |
| 83 | How it works | Exceeding HealthyThresholdCount consecutive successes puts it back | S18 | PASS | "When the health checks exceed HealthyThresholdCount consecutive successes, the load balancer puts the target back in service." |
| 84 | How it works | Defaults: UnhealthyThresholdCount 2, HealthyThresholdCount 5 | S18 | PASS | "HealthyThresholdCount ... The default is 5." and "UnhealthyThresholdCount ... The default is 2." |
| 85 | How it works | For HTTP/1.1 or HTTP/2 the default health check path is / | S18 | PASS | "If the protocol version is HTTP/1.1 or HTTP/2, specify a valid URI (/path?query). The default is /." |
| 86 | How it works | If a target group has only unhealthy targets, LB routes to all of them regardless of health | S18 | PASS | "If a target group contains only unhealthy registered targets, the load balancer routes requests to all those targets, regardless of their health status." |
| 87 | How it works | If all targets fail at once in all enabled AZs, the LB fails open | S18 | PASS | "if all targets fail health checks at the same time in all enabled Availability Zones, the load balancer fails open." |
| 88 | How it works | Health checks do not support WebSockets | S18 | PASS | "Health checks do not support WebSockets." |
| 89 | How it works | Deregistering lowers HealthyHostCount but does not raise UnhealthyHostCount | S18 | PASS | "when you deregister a target, this decreases HealthyHostCount but does not increase UnhealthyHostCount." |
| 90 | How it works | Target security groups must allow LB traffic on the health check port | S17 | PASS | "allow traffic from the load balancer on the health check port using the health check protocol." |
| 91 | How it works | LB is ready when each enabled AZ has at least one healthy registered target | S17 | PASS | "ready to handle client requests when there is at least one healthy registered target in each of its enabled Availability Zones." |
| 92 | How it works | User enters domain; Route 53 connects browser to site | S19 | PASS | "When a user opens a web browser and enters your domain name ... Route 53 connects the browser with your website or web application." |
| 93 | How it works | Route 53 sends automated requests to a resource to verify it's reachable, available, functional | S19 | PASS | "Route 53 sends automated requests over the internet to a resource, such as a web server, to verify that it's reachable, available, and functional." |
| 94 | How it works | You can route internet traffic away from unhealthy resources | S19 | PASS | "You can also route internet traffic away from unhealthy resources." |
| 95 | How it works | When you create a record you choose a routing policy that sets how Route 53 answers | S20 | PASS | "When you create a record, you choose a routing policy, which determines how Amazon Route 53 responds to queries" |
| 96 | How it works | Simple: single resource performing a given function | S20 | PASS | "Use for a single resource that performs a given function for your domain" |
| 97 | How it works | Failover: active-passive failover | S20 | PASS | "Use when you want to configure active-passive failover." |
| 98 | How it works | Geolocation: route by user location | S20 | PASS | "route traffic based on the location of your users" |
| 99 | How it works | Geoproximity: route by resource location | S20 | PASS | "route traffic based on the location of your resources" |
| 100 | How it works | Latency: resources in several Regions, route to the best-latency Region | S20 | PASS | "Use when you have resources in multiple AWS Regions and you want to route traffic to the Region that provides the best latency." |
| 101 | How it works | IP-based: route by user location, and you have the originating IPs | S20 | PASS | "route traffic based on the location of your users, and have the IP addresses that the traffic originates from." |
| 102 | How it works | Multivalue: up to eight healthy records selected at random | S20 | PASS | "respond to DNS queries with up to eight healthy records selected at random" |
| 103 | How it works | Weighted: multiple resources in proportions you specify | S20 | PASS | "Use to route traffic to multiple resources in proportions that you specify." |
| 104 | How it works | DNS routes the request to the POP that can best serve it | S22 | PASS | "DNS routes the request to the CloudFront POP (edge location) that can best serve the request" |
| 105 | How it works | This is typically the nearest POP in terms of latency | S22 | PASS | "typically the nearest CloudFront POP in terms of latency" |
| 106 | How it works | CloudFront checks its cache; on a hit it returns the object | S22 | PASS | "CloudFront checks its cache for the requested object. If the object is in the cache, CloudFront returns it to the user." |
| 107 | How it works | On a miss it forwards the request to your origin server | S22 | PASS | "forwards the request to your origin server for the corresponding object" |
| 108 | How it works | CloudFront also adds the object to the cache | S22 | PASS | "CloudFront also adds the object to the cache for the next time someone requests it." |
| 109 | How it works | You can control how long files stay in cache before CloudFront asks the origin again | S23 | PASS | "You can control how long your files stay in a CloudFront cache before CloudFront forwards another request to your origin." |
| 110 | How it works | After expiry CloudFront asks the origin to verify the latest version | S23 | PASS | "CloudFront forwards the request to the origin to verify that the cache contains the latest version of the file." |
| 111 | How it works | If cache is current, origin returns 304 Not Modified | S23 | PASS | "the origin returns a status code 304 Not Modified." |
| 112 | How it works | Otherwise origin returns 200 OK and the latest file | S23 | PASS | "the origin returns a status code 200 OK and the latest version of the file." |
| 113 | How it works | Without a cache policy the default TTL is 24 hours | S23 | PASS | "If you opt out of using a cache policy, the default TTL (Time to Live) is 24 hours" |
| 114 | How it works | You can set the duration for one file by configuring the origin | S23 | PASS | "To change the cache duration for an individual file, you can configure your origin" |
| 115 | How it works | Origin adds Cache-Control with max-age or s-maxage, or an Expires header | S23 | PASS | "add a Cache-Control header with the max-age or s-maxage directive, or an Expires header to the file." |
| 116 | How it works | CloudFront might evict a rarely requested file before expiry | S23 | PASS | "CloudFront might evict the file—remove the file before its expiration date" |
| 117 | How it works | You can control how long errors such as 404 stay in cache | S23 | PASS | "You can also control how long errors (for example, 404 Not Found) stay in a CloudFront cache" |
| 118 | How it works | You can invalidate a file to remove it from edge caches before it expires | S24 | PASS | "If you need to remove a file from CloudFront edge caches before it expires, you can ... Invalidate the file from edge caches." |
| 119 | How it works | You can use file versioning to serve a different version under a different name | S24 | PASS | "Use file versioning to serve a different version of the file that has a different name." |
| 120 | How it works | For frequent updates AWS recommends primarily file versioning | S24 | PASS | "If you want to update your files frequently, we recommend that you primarily use file versioning" |
| 121 | How it works | After invalidation the user might still see the old version until it expires from those caches | S24 | PASS | "If you invalidate the file, the user might continue to see the old version until it expires from those caches." |
| 122 | Try it | Run record: date, OS, versions, no account or credentials, no AWS_ variable, no ~/.aws, output is from the run, steps 4–6 not run | none | N/A | It is the record of the page's own run. |
| 123 | Try it | ipaddress returns a network object for text like 10.0.0.0/16 | S27 | PASS | "ipaddress.ip_network(address, strict=True) Return an IPv4Network or IPv6Network object depending on the IP address passed as argument." |
| 124 | Try it | num_addresses is the total number of addresses in the network | S27 | PASS | "num_addresses The total number of addresses in the network." |
| 125 | Try it | subnets() returns the subnets that join to make the network | S27 | PASS | "The subnets that join to make the current network definition" |
| 126 | Try it | subnet_of() tells whether a network is a subnet of another | S27 | PASS | "subnet_of(other) Return True if this network is a subnet of other." |
| 127 | Try it | overlaps() is true if a network is partly or wholly contained in the other | S27 | PASS | "overlaps(other) True if this network is partly or wholly contained in other" |
| 128 | Try it | Network objects act as containers of addresses, so `in` tests an address | S27 | PASS | "Network objects can act as containers of addresses." and "IPv4Address('192.0.2.6') in IPv4Network('192.0.2.0/28')" |
| 129 | Try it | The `net.py` code, its run command, and its output (code and output are the tutorial's own) | none | N/A | Code the tutorial wrote, and its run output. |
| 130 | Try it | AWS gives 65,536 IPs for a /16 | S4 | PASS | "a /16 netmask (65,536 IP addresses)" |
| 131 | Try it | A subnet CIDR block can be a subset of the VPC CIDR block | S5 | PASS | "or a subset of the CIDR block for the VPC" |
| 132 | Try it | The fourth output line lists the five addresses AWS lists as reserved in that subnet | S5 | PASS | "in a subnet with CIDR block 10.0.0.0/24, the following five IP addresses are reserved: 10.0.0.0 ... 10.0.0.3 ... 10.0.0.255" |
| 133 | Try it | AWS says subnet CIDR blocks of a VPC cannot overlap | S5 | PASS | "the CIDR blocks of the subnets cannot overlap." |
| 134 | Try it | Run results, how the tutorial reads the range, "the code does not call AWS" | none | N/A | These are the page's own run results and framing. |
| 135 | Try it | ip_network raises ValueError when host bits are set | S27 | PASS | "A ValueError is raised if address does not represent a valid IPv4 or IPv6 address, or if the network has host bits set." |
| 136 | Try it | CLI or EC2 API subnet creation modifies CIDR to canonical form | S5 | PASS | "automatically modified to its canonical form" |
| 137 | Try it | AWS_CONFIG_FILE and AWS_SHARED_CREDENTIALS_FILE name the files for profiles and access keys | S29 | PASS | "AWS_CONFIG_FILE Specifies the location of the file that the AWS CLI uses to store configuration profiles." and "AWS_SHARED_CREDENTIALS_FILE Specifies the location of the file that the AWS CLI uses to store access keys." |
| 138 | Try it | AWS_EC2_METADATA_DISABLED disables use of IMDS | S29 | PASS | "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 139 | Try it | --generate-cli-skeleton generates and displays a parameter template you can customize and use as input | S28 | PASS | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 140 | Try it | Step 2 export and `aws ec2 create-security-group --generate-cli-skeleton` commands | S28, S29 | PASS | Env var names are in S29; the option is in S28. The command and its output are the page's own. |
| 141 | Try it | Template notes and step 3 command (`aws ec2 authorize-security-group-ingress --generate-cli-skeleton \| grep -E '^    "'`) | none | N/A | The tutorial's own filter and reading of its run output. |
| 142 | Try it | An inbound rule needs exactly one source: IPv4/IPv6 range, prefix list, or security group | S14 | PASS | "You must specify exactly one of the following sources: an IPv4 or IPv6 address range, a prefix list, or a security group." |
| 143 | Try it | A protocol is needed per rule, and for TCP/UDP a port or port range | S14 | PASS | "You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range." |
| 144 | Try it | The tutorial matched names; it did not check against the API reference | none | N/A | A step of the tutorial's own work. |
| 145 | Try it | The EC2 API DryRun parameter checks permissions without making the request | S14 | PASS | "Checks whether you have the required permissions for the action, without actually making the request" |
| 146 | Try it | No extra charge for a VPC; some components (NAT gateways, IPAM, traffic mirroring, Reachability Analyzer, Network Access Analyzer) are charged | S1 | PASS | "There's no additional charge for using a VPC. There are, however, charges for some VPC components, such as NAT gateways, IP Address Manager, traffic mirroring, Reachability Analyzer, and Network Access Analyzer." |
| 147 | Try it | Outside the EC2 Free Tier, public IPv4 addresses are charged | S1 | PASS | "If you are not using the EC2 service in the AWS Free Tier, Public IPv4 addresses are charged." |
| 148 | Try it | Read-along 4 step 1 (IP ranges don't overlap) | S3 | PASS | "Ensure that the IP address ranges for your VPCs don't overlap with the IP address ranges for your own network." |
| 149 | Try it | Production: at least two AZs; dev or test: might save money with one | S3 | PASS | "we recommend that you select at least two Availability Zones" and "you might choose to save money by deploying your resources in only one Availability Zone." |
| 150 | Try it | To let private-subnet instances reach the internet without unsolicited inbound, add a public NAT gateway in each active AZ and update the route table | S3 | PASS | "add a public NAT gateway in each active Availability Zone and update the route table to send internet traffic to the NAT gateway." |
| 151 | Try it | Console: Create VPC, then "VPC and more" | S26 | PASS | "On the VPC dashboard, choose Create VPC. For Resources to create, choose VPC and more." |
| 152 | Try it | A VPC must have an IPv4 range | S26 | PASS | "A VPC must have an IPv4 address range." |
| 153 | Try it | NAT gateway option is optional, with a cost | S26 | PASS | "(Optional) ... for NAT gateways, choose the number of AZs ... Note that there is a cost associated with NAT gateways." |
| 154 | Try it | ALB is charged per hour or partial hour; partial hour billed as full | S30 | PASS | "You are charged for each hour or partial hour that an Application Load Balancer is running. Each partial Application Load Balancer hour used is billed as a full hour." |
| 155 | Try it | Prerequisite: choose AZs and IP address types | S17 | PASS | "Decide which Availability Zones and IP address types your application will support." |
| 156 | Try it | Prerequisite: target security groups allow listener-port traffic from client IPs if targets are by instance ID | S17 | PASS | "allow traffic on the listener port from client IP addresses (if targets are specified by instance ID)" |
| 157 | Try it | Prerequisite: also allow LB traffic on the health check port | S17 | PASS | "allow traffic from the load balancer on the health check port" |
| 158 | Try it | Creating an ALB creates the LB, at least one listener, and at least one target group | S17 | PASS | "you'll create the load balancer, at least one listener, and at least one target group." |
| 159 | Try it | To test: check instances pass the initial health check, then that the LB sends traffic | S17 | PASS | "you can verify that your EC2 instances pass the initial health check. You can then check that the load balancer is sending traffic to your EC2 instance." |
| 160 | Try it | The page links to the steps that delete the LB | S17 | PASS | "To delete the load balancer, see Delete an Application Load Balancer." |
| 161 | Try it | If you built the distribution and bucket to learn, delete them; delete the distribution first | S25 | PASS | "delete them so that you no longer accrue charges. Delete the distribution first." |
| 162 | Try it | The procedures set up a standard distribution; you create an S3 bucket with hello world files | S25 | PASS | "set up a standard distribution" and "you create an S3 bucket with the provided sample hello world files that you will use to create a basic webpage." |
| 163 | Try it | The distribution uses OAC to send authenticated requests to S3 | S25 | PASS | "Uses origin access control (OAC) to send authenticated requests to your Amazon S3 origin." |
| 164 | Try it | Create distribution; CloudFront updates the bucket policy | S25 | PASS | "Choose Create distribution. CloudFront updates the S3 bucket policy for you." |
| 165 | Try it | When deployed, Last modified changes from Deploying to a date and time | S25 | PASS | "the Last modified field changes from Deploying to a date and time." |
| 166 | Try it | Objects stay in edge locations for 24 hours by default; minimum is 0 seconds | S25 | PASS | "for the default duration of 24 hours (the minimum duration is 0 seconds)." |
| 167 | How a tester uses it | IGW attach does not make instances reachable | S3 | PASS | "Attaching an internet gateway to a VPC does not automatically make your instances accessible from the internet." |
| 168 | How a tester uses it | Other parts: route to IGW, public IPs, security group | S3 | PASS | "you must update the subnet route table with a route to the internet gateway. You must also ensure that the instances have public IP addresses and an associated security group" |
| 169 | How a tester uses it | No SSH rule means no SSH connection | S9 | PASS | "If the security group does not contain a rule that allows SSH traffic, then you could not connect to your instance using SSH." |
| 170 | How a tester uses it | Network ACL is stateless; responses not automatically allowed | S10 | PASS | "responses to that traffic are not automatically allowed." |
| 171 | How a tester uses it | ACL rules evaluated from lowest number; first match applied | S10 | PASS | "starting with the lowest numbered rule ... If the traffic matches a rule, the rule is applied" |
| 172 | How a tester uses it | Flow logs help diagnose overly restrictive security group rules | S12 | PASS | "Diagnosing overly restrictive security group rules" |
| 173 | How a tester uses it | Flow log data is collected outside the traffic path; no effect on throughput or latency | S12 | PASS | "collected outside of the path of your network traffic, and therefore does not affect network throughput or latency." |
| 174 | How a tester uses it | Reachability Analyzer tests connectivity between a source and a destination in your VPCs | S13 | PASS | "a configuration analysis tool that enables you to perform connectivity testing between a source resource and a destination resource in your virtual private clouds (VPCs)." |
| 175 | How a tester uses it | When unreachable it identifies the blocking component | S13 | PASS | "When the destination is not reachable, Reachability Analyzer identifies the blocking component." |
| 176 | How a tester uses it | It can verify the configuration matches the intended connectivity | S13 | PASS | "Verify that your network configuration matches your intended connectivity." |
| 177 | How a tester uses it | It can automate verification of connectivity intent as the network changes | S13 | PASS | "Automate the verification of your connectivity intent as your network configuration" (continues on the next line) |
| 178 | How a tester uses it | AWS lists Reachability Analyzer among components with charges | S1 | PASS | "charges for some VPC components, such as ... Reachability Analyzer" |
| 179 | How a tester uses it | A small delay might occur before a security group rule change reaches instances | S14 | PASS | "However, a small delay might occur." |
| 180 | How a tester uses it | Use private subnets for instances that should not be reached directly from the internet | S11 | PASS | "Use private subnets for your instances if they should not be accessed directly from the internet." |
| 181 | How a tester uses it | Use a bastion host or NAT gateway for internet access from private subnets | S11 | PASS | "Use a bastion host or NAT gateway for internet access from instances in private subnets." |
| 182 | How a tester uses it | First four and last IP in each subnet are unavailable | S5 | PASS | "The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use" |
| 183 | How a tester uses it | Connected VPCs must have no overlapping IPs | S3 | PASS | "you must ensure that they have no overlapping IP addresses." |
| 184 | How a tester uses it | A new target must pass one health check | S18 | PASS | "it must pass one health check to be considered healthy" |
| 185 | How a tester uses it | LB puts a target back after exceeding HealthyThresholdCount consecutive successes | S18 | PASS | "When the health checks exceed HealthyThresholdCount consecutive successes, the load balancer puts the target back in service." |
| 186 | How a tester uses it | If every target is unhealthy the LB routes to all of them | S18 | PASS | "the load balancer routes requests to all those targets, regardless of their health status." |
| 187 | How a tester uses it | Listener rules are evaluated in priority order | S16 | PASS | "evaluates the listener rules in priority order" |
| 188 | How a tester uses it | Health checks do not support WebSockets | S18 | PASS | "Health checks do not support WebSockets." |
| 189 | How a tester uses it | Weighted policy routes in set proportions | S20 | PASS | "route traffic to multiple resources in proportions that you specify." |
| 190 | How a tester uses it | Multivalue answer responds with up to eight healthy random records | S20 | PASS | "up to eight healthy records selected at random" |
| 191 | How a tester uses it | Route 53 can route traffic away from unhealthy resources | S19 | PASS | "route internet traffic away from unhealthy resources." |
| 192 | How a tester uses it | On a miss CloudFront asks the origin and adds the object to cache | S22 | PASS | "forwards the request to your origin server ... CloudFront also adds the object to the cache for the next time someone requests it." |
| 193 | How a tester uses it | After expiry CloudFront asks the origin to verify the latest version | S23 | PASS | "forwards the request to the origin to verify that the cache contains the latest version of the file." |
| 194 | How a tester uses it | The origin returns 304 Not Modified or 200 OK | S23 | PASS | "status code 304 Not Modified" and "status code 200 OK" |
| 195 | How a tester uses it | Errors such as 404 also stay in the cache for a time | S23 | PASS | "how long errors (for example, 404 Not Found) stay in a CloudFront cache" |
| 196 | How a tester uses it | Invalidated file may still show the old version until it expires from caches | S24 | PASS | "the user might continue to see the old version until it expires from those caches." |
| 197 | How a tester uses it | Versioning is less expensive: no charge for invalidating files | S24 | PASS | "Versioning is less expensive. ... you don't have to pay for invalidating files." |
| 198 | Common mistakes | IGW attach does not make instances reachable | S3 | PASS | "Attaching an internet gateway to a VPC does not automatically make your instances accessible from the internet." |
| 199 | Common mistakes | Nondefault-subnet instance has private but no public IPv4 by default | S2 | PASS | "has a private IPv4 address, but no public IPv4 address" |
| 200 | Common mistakes | Such instances talk to each other but can't reach the internet | S2 | PASS | "These instances can communicate with each other, but can't access the internet." |
| 201 | Common mistakes | 0.0.0.0/0 and ::/ let anyone in using the protocol | S9 | PASS | "this enables anyone to access your instances from any IP address using the specified protocol." |
| 202 | Common mistakes | Network ACLs are stateless | S10 | PASS | "NACLs are stateless" |
| 203 | Common mistakes | Security groups are stateful | S9 | PASS | "Security groups are stateful." |
| 204 | Common mistakes | Security groups do not filter DNS, DHCP, instance metadata, among others | S9 | PASS | "Security groups do not filter traffic destined to and from the following: Amazon Domain Name Services (DNS) ... DHCP ... instance metadata" |
| 205 | Common mistakes | Network ACLs can't block IMDS traffic | S10 | PASS | "Network ACLs can't block traffic to the Instance Metadata Service (IMDS)." |
| 206 | Common mistakes | Subnet CIDR blocks of a VPC cannot overlap | S5 | PASS | "the CIDR blocks of the subnets cannot overlap." |
| 207 | Common mistakes | VPCs needing connectivity must not overlap | S3 | PASS | "you must ensure that they have no overlapping IP addresses." |
| 208 | Common mistakes | Python ip_network raises ValueError with host bits set | S27 | PASS | "or if the network has host bits set" |
| 209 | Common mistakes | AWS changes a subnet CIDR to canonical form instead | S5 | PASS | "automatically modified to its canonical form" |
| 210 | Common mistakes | First four and last subnet IPs are unavailable | S5 | PASS | "The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use" |
| 211 | Common mistakes | Instances behind a NAT gateway get no inbound connections from external services | S8 | PASS | "external services can't initiate a connection with those instances." |
| 212 | Common mistakes | Cost of NAT gateways | S26 | PASS | "there is a cost associated with NAT gateways." |
| 213 | Common mistakes | ALB charged per hour or partial hour | S30 | PASS | "You are charged for each hour or partial hour that an Application Load Balancer is running." |
| 214 | Common mistakes | If all targets fail at once in all enabled AZs, the LB fails open | S18 | PASS | "the load balancer fails open." |
| 215 | Common mistakes | Target security groups must allow LB traffic on the health check port | S17 | PASS | "allow traffic from the load balancer on the health check port" |
| 216 | Common mistakes | Multivalue answer: up to eight healthy random records | S20 | PASS | "up to eight healthy records selected at random" |
| 217 | Common mistakes | Weighted policy routes in set proportions | S20 | PASS | "in proportions that you specify" |
| 218 | Common mistakes | CloudFront serves a file from an edge location until the cache duration passes | S23 | FAIL | The source says "Typically, CloudFront serves a file from an edge location until the cache duration that you specified passes". The page drops "Typically", and the claim now reads as always true. Fix: "Typically, CloudFront serves a file ... until the cache duration that you specified passes." |
| 219 | Common mistakes | For frequent updates AWS recommends primarily file versioning | S24 | PASS | "we recommend that you primarily use file versioning" |
| 220 | Common mistakes | AWS says delete the distribution first | S25 | PASS | "Delete the distribution first." |
| 221 | What a tester can check | Callout "Tutorial advice" says the list is the tutorial's own advice; its 12 items give no fact about a tool that the rest of the page does not support | none | PASS | The callout title is "Tutorial advice" and the text says "This list is the tutorial's own advice". The items are advice. The 0.0.0.0/0 item matches rows 55 and 201. |
| 222 | Key words | VPC: virtual network dedicated to your AWS account, logically isolated from other virtual networks in the AWS Cloud | none | FAIL | The Technical panel says "A VPC is a virtual network dedicated to your AWS account" and "a logically isolated virtual network that you've defined". It does not say "from other virtual networks in the AWS Cloud". Fix: drop that phrase. |
| 223 | Key words | Subnet: range of IPs in your VPC; must reside in one AZ | none | PASS | "A subnet is a range of IP addresses in your VPC." and "A subnet must reside in a single Availability Zone." |
| 224 | Key words | CIDR block: the notation for an IP address range; VPC size /16 to /28 | none | FAIL | The page never says CIDR is "the notation for an IP address range". Only the size part is given: "between a /16 netmask ... and a /28 netmask". Fix: cut the notation phrase. |
| 225 | Key words | Route table: rules called routes that decide where traffic from your VPC is directed | none | FAIL | The Technical panel says "traffic from your subnet or gateway is directed", not "from your VPC". Fix: "from your subnet or gateway". |
| 226 | Key words | Internet gateway: connects/allows communication between the VPC and the internet | none | PASS | "an internet gateway connects your VPC to the internet." |
| 227 | Key words | Public subnet | none | PASS | "A subnet that is associated with a route table that has a route to an internet gateway is a public subnet." |
| 228 | Key words | NAT gateway | none | PASS | "A NAT gateway lets instances in a private subnet connect to services outside your VPC. External services can't initiate a connection with those instances." |
| 229 | Key words | Security group (stateful) | none | PASS | "A security group controls the traffic that is allowed to reach and leave the resources that it is associated with" and "Security groups are stateful" |
| 230 | Key words | Network ACL (stateless) | none | PASS | "allows or denies specific inbound or outbound traffic at the subnet level" and "Network ACLs are stateless" |
| 231 | Key words | Flow logs: capture information about IP traffic going to and from network interfaces in your VPC | none | FAIL | No Technical panel sentence defines flow logs this way. The page only says flow logs help diagnose security group rules and are collected outside the traffic path. Fix: use those two facts. |
| 232 | Key words | Reachability Analyzer | none | PASS | "a configuration analysis tool for connectivity testing between a source resource and a destination resource in your VPCs" |
| 233 | Key words | Listener | none | PASS | "A listener checks for connection requests from clients, using the protocol and port that you configure" |
| 234 | Key words | Target group | none | PASS | "Each target group routes requests to one or more registered targets, such as EC2 instances" |
| 235 | Key words | Health check | none | PASS | "periodically sends requests to its registered targets to test their status. These tests are called health checks." |
| 236 | Key words | Fail open | none | PASS | "the load balancer routes requests to all those targets" and "the load balancer fails open" |
| 237 | Key words | Route 53 | none | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service" |
| 238 | Key words | Routing policy | none | PASS | "you choose a routing policy, which determines how Route 53 responds to queries" |
| 239 | Key words | CloudFront | none | PASS | "a web service that speeds up distribution of your static and dynamic web content" and "through a worldwide network of data centers called edge locations" |
| 240 | Key words | TTL | none | PASS | "If you opt out of using a cache policy, the default TTL (Time to Live) is 24 hours" and "control how long your files stay in a CloudFront cache" |
| 241 | Key words | Invalidation | none | PASS | "To remove a file from the edge caches before it expires, you can invalidate the file" |

Open FAILs after round 6: 5

Changed after this round: Row 218: the Common mistakes bullet on caching begins with "Typically,", as S23. Row 222: the VPC row of Key words no longer says "logically isolated from other virtual networks in the AWS Cloud". Row 224: a Technical sentence in How it works now says that the IP addresses of a VPC are written in Classless Inter-Domain Routing (CIDR) notation (S4), and the CIDR block row says the same. Row 225: the Route table row says "traffic from your subnet or gateway". Row 231: How a tester uses it now says that flow logs capture information about the IP traffic going to and from network interfaces in your VPC (S12), as the Flow logs row does.

## Round 7 (2026-11-18)

# Fact check: devops / aws-networking (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page scope and what the practice run does | none | N/A | Describes the page itself. |
| 2 | Lede | Page scope, the practice run, the neighbouring pages | none | N/A | Describes the page itself and its links. |
| 3 | What it is | You can launch AWS resources in a logically isolated virtual network that you've defined | S1 | PASS | "you can launch AWS resources in a logically isolated virtual network that you've defined" |
| 4 | What it is | A VPC is a virtual network dedicated to your AWS account | S2 | PASS | "A virtual private cloud (VPC) is a virtual network dedicated to your AWS account." |
| 5 | What it is | A subnet is a range of IP addresses in your VPC | S2 | PASS | "A subnet is a range of IP addresses in your VPC." |
| 6 | What it is | A subnet must reside in a single Availability Zone | S1 | PASS | "A subnet must reside in a single Availability Zone." |
| 7 | What it is | You launch AWS resources, such as EC2 instances, into your subnets | S2 | PASS | "You launch AWS resources, such as Amazon EC2 instances, into your subnets." |
| 8 | What it is | A route table serves as the traffic controller for your VPC | S6 | PASS | "A route table serves as the traffic controller for your virtual private cloud (VPC)." |
| 9 | What it is | Each route table contains routes that decide where traffic from a subnet or gateway goes | S6 | PASS | "Each route table contains a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed." |
| 10 | What it is | AWS creates the main route table when you create a VPC | S6 | PASS | "When you create a VPC, we also create the main route" |
| 11 | What it is | Each route specifies a destination (CIDR block or prefix list) and a target | S6 | PASS | "Each route specifies a destination (CIDR block or prefix list) and a target" |
| 12 | What it is | Target examples: internet gateway, NAT gateway, VPC peering connection, VPN connection | S6 | PASS | "(such as an internet gateway, NAT gateway, VPC peering connection, or VPN connection)" |
| 13 | What it is | Traffic is routed to targets based on its destination IP address | S6 | PASS | "Traffic is routed to targets based on its destination IP address." |
| 14 | What it is | A gateway connects your VPC to another network; an internet gateway connects it to the internet | S1 | PASS | "A gateway connects your VPC to another network. For example, use an internet gateway to connect your VPC to the internet." |
| 15 | What it is | A security group controls the traffic allowed to reach and leave its resources | S9 | PASS | "A security group controls the traffic that is allowed to reach and leave the resources that it is associated with." |
| 16 | What it is | A network ACL allows or denies specific inbound or outbound traffic at the subnet level | S10 | PASS | "A network access control list (ACL) allows or denies specific inbound or outbound traffic at the subnet level." |
| 17 | What it is | ELB automatically distributes incoming traffic across multiple targets in one or more AZs | S15 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones." |
| 18 | What it is | ELB monitors target health and routes only to healthy targets | S15 | PASS | "monitors the health of its registered targets, and routes traffic only to the healthy targets" |
| 19 | What it is | Route 53 is a highly available and scalable DNS web service | S19 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 20 | What it is | Route 53 does three functions in any combination: domain registration, DNS routing, health checking | S19 | PASS | "three main functions in any combination: domain registration, DNS routing, and health checking." |
| 21 | What it is | CloudFront speeds up distribution of static and dynamic web content | S21 | PASS | "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content" |
| 22 | What it is | CloudFront delivers through a worldwide network of data centers called edge locations | S21 | PASS | "a worldwide network of data centers called edge locations" |
| 23 | How it works | VPC IP addresses are written in CIDR notation | S4 | PASS | "represented using Classless Inter-Domain Routing (CIDR) notation" |
| 24 | How it works | You must specify an IPv4 CIDR block when you create a VPC | S4 | PASS | "When you create a VPC, you must specify an IPv4 CIDR block for the VPC." |
| 25 | How it works | Allowed block size is /16 (65,536) to /28 (16) | S4 | PASS | "The allowed block size is between a /16 netmask (65,536 IP addresses) and /28 netmask (16 IP addresses)." |
| 26 | How it works | A subnet CIDR block can be the same as the VPC's or a subset | S5 | PASS | "can be the same as the CIDR block for the VPC (to create a single subnet in the VPC), or a subset of the CIDR block for the VPC" |
| 27 | How it works | Subnet CIDR blocks in one VPC cannot overlap | S5 | PASS | "the CIDR blocks of the subnets cannot overlap." |
| 28 | How it works | VPC ranges must not overlap your own network's ranges | S3 | PASS | "Ensure that the IP address ranges for your VPCs don't overlap with the IP address ranges for your own network." |
| 29 | How it works | VPCs that need connectivity must have no overlapping IP addresses | S3 | PASS | "you must ensure that they have no overlapping IP addresses." |
| 30 | How it works | The first four and the last IP address in each subnet are not available | S5 | PASS | "The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use" |
| 31 | How it works | In 10.0.0.0/24 AWS lists five reserved addresses | S5 | PASS | "in a subnet with CIDR block 10.0.0.0/24, the following five IP addresses are reserved" |
| 32 | How it works | 10.0.0.0 is the network address; 10.0.0.1 is the VPC router | S5 | PASS | "10.0.0.0: Network address." / "10.0.0.1: Reserved by AWS for the VPC router." |
| 33 | How it works | 10.0.0.2 reserved; 10.0.0.3 reserved for future use | S5 | PASS | "10.0.0.2: Reserved by AWS." / "10.0.0.3: Reserved by AWS for future use." |
| 34 | How it works | 10.0.0.255 is the broadcast address, reserved because broadcast is not supported | S5 | PASS | "10.0.0.255: Network broadcast address. We do not support broadcast in a VPC, therefore we reserve this address." |
| 35 | How it works | A subnet made by CLI or EC2 API gets its CIDR changed to canonical form; 100.68.0.18/18 becomes 100.68.0.0/18 | S5 | PASS | "automatically modified to its canonical form. For example, if you specify 100.68.0.18/18 for the CIDR block, we create a CIDR block of 100.68.0.0/18." |
| 36 | How it works | Your account has a default VPC in each Region | S1 | PASS | "Your AWS account includes a default VPC in each AWS Region." |
| 37 | How it works | A default VPC has an internet gateway; each default subnet is public | S2 | PASS | "A default VPC includes an internet gateway, and each default subnet is a public subnet." |
| 38 | How it works | Public subnet = route table has a route to an IGW; otherwise private | S7 | PASS | "If a subnet is associated with a route table that has a route to an internet gateway, it's known as a public subnet." / "does not have a route to an internet gateway, it's known as a private subnet." |
| 39 | How it works | The IGW route can be 0.0.0.0/0 or ::/0 | S7 | PASS | "(0.0.0.0/0 for IPv4 or ::/0 for IPv6)" |
| 40 | How it works | Attaching an IGW does not automatically make instances reachable | S3 | PASS | "Attaching an internet gateway to a VPC does not automatically make your instances accessible from the internet." |
| 41 | How it works | You must also update the subnet route table | S3 | PASS | "you must update the subnet route table with a route to the internet gateway." |
| 42 | How it works | Instances must have public IP addresses | S3 | PASS | "You must also ensure that the instances have public IP addresses" |
| 43 | How it works | They need a security group allowing internet traffic over specific ports and protocols | S3 | PASS | "an associated security group that allows traffic from the internet over specific ports and protocols" |
| 44 | How it works | By default an instance in a nondefault subnet has a private IPv4 address only | S2 | PASS | "By default, each instance that you launch into a nondefault subnet has a private IPv4 address, but no public IPv4 address" |
| 45 | How it works | You can assign a public address at launch or modify the subnet's public IP attribute | S2 | PASS | "unless you specifically assign one at launch, or you modify the subnet's public IP address attribute." |
| 46 | How it works | A NAT gateway lets private-subnet instances connect outside the VPC | S8 | PASS | "instances in a private subnet can connect to services outside your VPC" |
| 47 | How it works | External services can't initiate a connection with those instances | S8 | PASS | "external services can't initiate a connection with those instances." |
| 48 | How it works | A public NAT gateway goes in a public subnet and needs an Elastic IP at creation | S8 | PASS | "You create a public NAT gateway in a public subnet and must associate an Elastic IP address with the NAT gateway at creation." |
| 49 | How it works | A subnet with no explicit route table association uses the main route table | S2 | PASS | "Otherwise, the subnet is implicitly associated with the main route table." |
| 50 | How it works | The only traffic reaching the instance is what the SG rules allow | S9 | PASS | "The only traffic that reaches the instance is the traffic allowed by the security group rules." |
| 51 | How it works | With no SSH rule you could not connect with SSH | S9 | PASS | "If the security group does not contain a rule that allows SSH traffic, then you could not connect to your instance using SSH." |
| 52 | How it works | Security groups are stateful | S9 | PASS | "Security groups are stateful." |
| 53 | How it works | Response traffic for a request from the instance is allowed | S9 | PASS | "the response traffic for that request is allowed to reach the instance" |
| 54 | How it works | This holds regardless of inbound rules | S9 | PASS | "regardless of the inbound security group rules" |
| 55 | How it works | SGs do not filter Amazon DNS, DHCP, EC2 instance metadata, among others | S9 | PASS | "Amazon Domain Name Services (DNS)" / "Amazon Dynamic Host Configuration Protocol (DHCP)" / "Amazon EC2 instance metadata" |
| 56 | How it works | For ports 22 or 3389, authorize only specific IP ranges | S9 | PASS | "When you add inbound rules for ports 22 (SSH) or 3389 (RDP) ... authorize only specific IP address ranges." |
| 57 | How it works | 0.0.0.0/0 and ::/ enable anyone from any IP | S9 | PASS | "this enables anyone to access your instances from any IP address using the specified protocol." |
| 58 | How it works | Rule changes propagate quickly but a small delay might occur | S14 | PASS | "Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur." |
| 59 | How it works | Each subnet must be associated with a network ACL | S10 | PASS | "Each subnet in your VPC must be associated with a network ACL." |
| 60 | How it works | An unassociated subnet is automatically tied to the default NACL | S10 | PASS | "If you don't explicitly associate a subnet with a network ACL, the subnet is automatically associated with the" |
| 61 | How it works | A subnet has only one NACL at a time | S10 | PASS | "a subnet can be associated with only one network ACL at a time." |
| 62 | How it works | Each rule allows or denies | S10 | PASS | "Each rule can either allow or deny traffic." |
| 63 | How it works | Rule numbers 1 to 32766 | S10 | PASS | "Each rule has a number from 1 to 32766." |
| 64 | How it works | Rules evaluated lowest number first | S10 | PASS | "We evaluate the rules in order, starting with the lowest numbered rule" |
| 65 | How it works | On a match the rule applies and no more are evaluated | S10 | PASS | "If the traffic matches a rule, the rule is applied and we do not evaluate" |
| 66 | How it works | NACLs are stateless | S10 | PASS | "NACLs are stateless" |
| 67 | How it works | A rule allowing inbound traffic does not auto-allow responses | S10 | PASS | "responses to that traffic are not automatically allowed." |
| 68 | How it works | Rules are evaluated when traffic enters and leaves the subnet, not within it | S10 | PASS | "We evaluate the network ACL rules when traffic enters and leaves the subnet, not as it is routed within a subnet." |
| 69 | How it works | NACLs can't block traffic to IMDS | S10 | PASS | "Network ACLs can't block traffic to the Instance Metadata Service (IMDS)." |
| 70 | How it works | Use SGs as the primary mechanism | S11 | PASS | "Use security groups as the primary mechanism for controlling network access to your VPCs." |
| 71 | How it works | Use NACLs for stateless, coarse-grain control when necessary | S11 | PASS | "When necessary, use network ACLs to provide stateless, coarse-grain network control." |
| 72 | How it works | A load balancer is the single point of contact for clients | S16 | PASS | "A load balancer serves as the single point of contact for" |
| 73 | How it works | A listener checks for client connection requests using the configured protocol and port | S16 | PASS | "A listener checks for connection requests from clients, using the protocol and port that you configure." |
| 74 | How it works | Listener rules decide how requests are routed to targets | S16 | PASS | "The rules that you define for a listener determine how the load balancer routes requests" |
| 75 | How it works | You must define a default rule for each listener | S16 | PASS | "You must define a default rule for each listener" |
| 76 | How it works | A target group routes to one or more registered targets, such as EC2 instances | S16 | PASS | "Each target group routes requests to one or more registered" (the file then lists targets; "such as EC2 instances" was not re-read) |
| 77 | How it works | An ALB works at layer 7 | S16 | PASS | "An Application Load Balancer functions at the application layer, the seventh layer of the Open Systems" |
| 78 | How it works | It evaluates listener rules in priority order | S16 | PASS | "the listener rules in priority order to determine which rule to apply" |
| 79 | How it works | Default algorithm is round robin; least outstanding requests is an option | S16 | PASS | "The default routing algorithm is round robin; alternatively, you can specify the least outstanding requests routing algorithm." |
| 80 | How it works | Rules can forward by URL | S16 | PASS | "forward requests based on the URL" |
| 81 | How it works | Rules can forward by host field in the HTTP header | S16 | PASS | "forward requests based on the host field in the HTTP header." |
| 82 | How it works | ALB sends periodic requests to test targets; these are health checks | S18 | PASS | "periodically sends requests to its registered targets to test their status. These tests are called health checks." |
| 83 | How it works | A new target must pass one health check to be healthy | S18 | PASS | "it must pass one health check to be considered healthy." |
| 84 | How it works | Exceeding UnhealthyThresholdCount failures takes the target out of service | S18 | PASS | "If the health checks exceed UnhealthyThresholdCount consecutive failures, the load balancer takes the target out of service." |
| 85 | How it works | Exceeding HealthyThresholdCount successes puts it back | S18 | PASS | "When the health checks exceed HealthyThresholdCount consecutive successes, the load balancer puts the target back in service." |
| 86 | How it works | Defaults: Unhealthy 2, Healthy 5 | S18 | PASS | "The default is 5." / "The default is 2." |
| 87 | How it works | Default health check path is / for HTTP/1.1 or HTTP/2 | S18 | PASS | "If the protocol version is HTTP/1.1 or HTTP/2, specify a valid URI (/path?query). The default is /." |
| 88 | How it works | With only unhealthy targets the LB routes to all of them | S18 | PASS | "If a target group contains only unhealthy registered targets, the load balancer routes requests to all those targets, regardless of their health status." |
| 89 | How it works | If all targets fail in all enabled AZs the LB fails open | S18 | PASS | "if all targets fail health checks at the same time in all enabled Availability Zones, the load balancer fails open." |
| 90 | How it works | Health checks do not support WebSockets | S18 | PASS | "Health checks do not support WebSockets." |
| 91 | How it works | Deregistering lowers HealthyHostCount, does not raise UnhealthyHostCount | S18 | PASS | "when you deregister a target, this decreases HealthyHostCount but does not increase UnhealthyHostCount." |
| 92 | How it works | Target SGs must allow the LB on the health check port | S17 | PASS | "Ensure that the security groups for target instances allow traffic from the load balancer on the health check port" |
| 93 | How it works | LB is ready when each enabled AZ has at least one healthy target | S17 | PASS | "ready to handle client requests when there is at least one healthy registered target in each of its enabled Availability Zones." |
| 94 | How it works | A user enters the domain name and Route 53 connects the browser to the site | S19 | PASS | "When a user opens a web browser and enters your domain name (example.com) or subdomain name (acme.example.com), Route 53 connects the browser with your website or web application." |
| 95 | How it works | Route 53 sends automated requests to check reachable, available, functional | S19 | PASS | "Route 53 sends automated requests over the internet to a resource, such as a web server, to verify that it's reachable, available, and functional." |
| 96 | How it works | You can route traffic away from unhealthy resources | S19 | PASS | "You can also route internet traffic away from unhealthy resources." |
| 97 | How it works | You choose a routing policy when you create a record | S20 | PASS | "When you create a record, you choose a routing policy, which determines how Amazon Route 53 responds to queries" |
| 98 | How it works | Simple: single resource | S20 | PASS | "Simple routing policy – Use for a single resource that performs a given function for your domain" |
| 99 | How it works | Failover: active-passive | S20 | PASS | "Use when you want to configure active-passive failover." |
| 100 | How it works | Geolocation: by user location | S20 | PASS | "Use when you want to route traffic based on the location of your users." |
| 101 | How it works | Geoproximity: by resource location | S20 | PASS | "route traffic based on the location of your resources" |
| 102 | How it works | Latency: best-latency Region | S20 | PASS | "route traffic to the Region that provides the best latency." |
| 103 | How it works | IP-based | S20 | PASS | "route traffic based on the location of your users, and have the IP addresses that the traffic originates from." |
| 104 | How it works | Multivalue: up to eight healthy records at random | S20 | PASS | "respond to DNS queries with up to eight healthy records selected at random." |
| 105 | How it works | Weighted | S20 | PASS | "route traffic to multiple resources in proportions that you specify." |
| 106 | How it works | DNS routes to the POP that can best serve the request | S22 | PASS | "DNS routes the request to the CloudFront POP (edge location) that can best serve the request" |
| 107 | How it works | Typically the nearest POP by latency | S22 | PASS | "typically the nearest CloudFront POP in terms of latency." |
| 108 | How it works | On a cache hit CloudFront returns the object | S22 | PASS | "If the object is in the cache, CloudFront returns it to the user." |
| 109 | How it works | On a miss it forwards to your origin server | S22 | PASS | "forwards the request to your origin server for the corresponding object" |
| 110 | How it works | It also adds the object to the cache | S22 | PASS | "CloudFront also adds the object to the cache for the next time" |
| 111 | How it works | You control how long files stay in cache | S23 | PASS | "You can control how long your files stay in a CloudFront cache before CloudFront forwards another" |
| 112 | How it works | After expiry CloudFront asks the origin to verify the latest version | S23 | PASS | "to verify that the cache contains the latest version of the file." |
| 113 | How it works | Latest version in cache → 304 Not Modified | S23 | PASS | "the origin returns a status code 304 Not Modified." |
| 114 | How it works | Otherwise 200 OK with the latest file | S23 | PASS | "the origin returns a status code 200 OK and the latest version of the file." |
| 115 | How it works | Without a cache policy the default TTL is 24 hours | S23 | PASS | "If you opt out of using a cache policy, the default TTL (Time to Live) is 24 hours" |
| 116 | How it works | Change duration per file by configuring the origin | S23 | PASS | "To change the cache duration for an individual file, you can configure your origin" |
| 117 | How it works | Cache-Control max-age or s-maxage, or Expires | S23 | PASS | "add a Cache-Control header with the max-age or s-maxage directive, or an Expires header" |
| 118 | How it works | CloudFront might evict an infrequently requested file early | S23 | PASS | "CloudFront might evict the" (line 21, "If a file in an edge location isn't frequently requested") |
| 119 | How it works | You can control how long errors such as 404 stay cached | S23 | PASS | "You can also control how long errors (for example, 404 Not Found) stay in" |
| 120 | How it works | Invalidate a file to remove it before expiry | S24 | PASS | "If you need to remove a file from CloudFront edge caches before it expires, you can do one of the following: Invalidate the file from edge caches." |
| 121 | How it works | File versioning serves a different version under a different name | S24 | PASS | "Use file versioning to serve a different version of the file that has a" |
| 122 | How it works | For frequent updates AWS recommends primarily versioning | S24 | PASS | "we recommend that you primarily use file versioning" |
| 123 | How it works | After invalidation the user might still see the old version | S24 | PASS | "If you invalidate the file, the user might continue to see the old" |
| 124 | Try it | Run record: date, OS, tool versions, no account needed, no `AWS_` variable, no `~/.aws` | none | N/A | The page's own record of its run. |
| 125 | Try it | Steps 2 and 3 use the AWS CLI that another page installs | none | N/A | Cross-reference of the page's own steps. |
| 126 | Try it | Steps 4 to 6 are a read-along and were not run | none | N/A | Describes the page's own practice. |
| 127 | Try it | `ipaddress` returns a network object for text like 10.0.0.0/16 | S27 | PASS | "Return an IPv4Network or IPv6Network object depending on" (`ip_network`) |
| 128 | Try it | `num_addresses` is the total number of addresses | S27 | PASS | "The total number of addresses in the network." |
| 129 | Try it | `subnets()` returns the subnets that join to make the network | S27 | PASS | "The subnets that join to make the current network definition" |
| 130 | Try it | `subnet_of()` tells if a network is a subnet of another | S27 | PASS | "Return True if this network is a subnet of other." |
| 131 | Try it | `overlaps()` is true if partly or wholly contained | S27 | PASS | "True if this network is partly or wholly contained in other or other is wholly contained in this network." |
| 132 | Try it | Networks act as containers, so `in` tests an address | S27 | PASS | "Network objects can act as containers of addresses." |
| 133 | Try it | "Save as net.py… the tutorial's own code, 26 lines"; Python block | none | N/A | The tutorial's own code. |
| 134 | Try it | Run command and output block | none | N/A | The tutorial's own step and run output. |
| 135 | Try it | AWS gives 65,536 addresses for /16 | S4 | PASS | "a /16 netmask (65,536 IP addresses)" |
| 136 | Try it | A subnet CIDR can be a subset of the VPC CIDR | S5 | PASS | "or a subset of the CIDR block for the VPC" |
| 137 | Try it | The first four and last address are the five AWS lists as reserved | S5 | PASS | "The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use" / "the following five IP addresses are reserved" |
| 138 | Try it | Subnets of a VPC cannot overlap | S5 | PASS | "the CIDR blocks of the subnets cannot overlap." |
| 139 | Try it | Run-result explanations; code does not call AWS | none | N/A | The page's own run and its own code. |
| 140 | Try it | `ip_network` raises ValueError if host bits are set | S27 | PASS | "or if the network has host bits set." (under ValueError) |
| 141 | Try it | AWS changes a CLI/API-created subnet CIDR to canonical form | S5 | PASS | "the CIDR block is automatically modified to its canonical form." |
| 142 | Try it | The env vars `AWS_CONFIG_FILE`, `AWS_SHARED_CREDENTIALS_FILE`, `AWS_EC2_METADATA_DISABLED` do what the page says | S29 | PASS | "configuration profiles" / "store access keys" / "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 143 | Try it | `--generate-cli-skeleton` generates and displays a customizable parameter template | S28 | PASS | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 144 | Try it | Step 2 code block: `export AWS_CONFIG_FILE=/dev/null ...` and `aws ec2 create-security-group --generate-cli-skeleton` | S28, S29 | FAIL | No source contains `create-security-group`. S28 shows only `aws ec2 run-instances --generate-cli-skeleton`. The `/dev/null` values are the tutorial's own choice. Fix: use the S28 example, or label this command as the tutorial's own choice and leave the cite on the flag and variables only. |
| 145 | Try it | Step 2 output and notes on `GroupName`, `Description`, `VpcId` | none | N/A | The page's own run. |
| 146 | Try it | Step 3 intro, grep command and output | none | N/A | The reader's own step and the page's own run. |
| 147 | Try it | An inbound rule needs exactly one source: IPv4/IPv6 range, prefix list, or security group | S14 | PASS | "You must specify exactly one of the following sources: an IPv4 or IPv6 address range, a prefix list, or a security group." |
| 148 | Try it | You must give a protocol, and for TCP/UDP a port or range | S14 | PASS | "You must specify a protocol for each rule" / "If the protocol is TCP or UDP, you must also specify a port or port range." |
| 149 | Try it | Name matching (`CidrIp`, `IpProtocol`, `FromPort`, `ToPort`), "did not check" | none | N/A | The page's own work, and it says it was not checked. |
| 150 | Try it | `DryRun` checks permissions without making the request | S14 | PASS | "Checks whether you have the required permissions for the action, without actually making the request" |
| 151 | Try it | No extra charge for a VPC; charges for NAT gateways, IPAM, traffic mirroring, Reachability Analyzer, Network Access Analyzer | S1 | PASS | "There's no additional charge for using a VPC. There are, however, charges for some VPC components, such as NAT gateways, IP Address Manager, traffic mirroring, Reachability Analyzer, and Network Access Analyzer." |
| 152 | Try it | Public IPv4 addresses are charged outside the Free Tier EC2 use | S1 | PASS | "If you are not using the EC2 service in the AWS Free Tier, Public IPv4 addresses are charged." |
| 153 | Try it | Step 4.1 VPC ranges must not overlap your network | S3 | PASS | "don't overlap with the IP address ranges for your own network" |
| 154 | Try it | Production: at least two AZs | S3 | PASS | "we recommend that you select at least two Availability Zones" |
| 155 | Try it | Dev/test: one AZ may save money | S3 | PASS | "you might choose to save money by deploying your resources in only one Availability Zone." |
| 156 | Try it | Public NAT gateway in each active AZ, update the route table | S3 | PASS | "add a public NAT gateway in each active Availability Zone and update the route table" |
| 157 | Try it | Console: Create VPC, "VPC and more" | S26 | PASS | "On the VPC dashboard, choose Create VPC." / "For Resources to create, choose VPC and more." |
| 158 | Try it | A VPC must have an IPv4 range | S26 | PASS | "A VPC must have an IPv4 address range." |
| 159 | Try it | NAT gateway option is optional, with a cost | S26 | PASS | "(Optional) If resources in a private subnet need access to the public internet over IPv4," / "there is a cost associated with NAT gateways" |
| 160 | Try it | ALB billed per hour or partial hour, partial hour billed as full | S30 | PASS | "You are charged for each hour or partial hour that an Application Load Balancer is running. Each partial Application Load Balancer hour used is billed as a full hour." |
| 161 | Try it | Prerequisite: decide AZs and IP address types | S17 | PASS | "Decide which Availability Zones and IP address types your application will support." |
| 162 | Try it | Prerequisite: target SGs allow the listener port from client IPs if targets are by instance ID | S17 | PASS | "allow traffic on the listener port from client IP addresses (if targets are specified by instance ID)" |
| 163 | Try it | Prerequisite: also allow the LB on the health check port | S17 | PASS | "allow traffic from the load balancer on the health check port" |
| 164 | Try it | Creating an ALB means a load balancer, at least one listener, at least one target group | S17 | PASS | "you'll create the load balancer, at least one listener, and at least one target group." |
| 165 | Try it | To test: instances pass the initial health check, then traffic is sent | S17 | PASS | "the initial health check. You can then check that the load balancer is sending traffic to your EC2 instance." |
| 166 | Try it | The page links to the delete steps | S17 | PASS | "To delete the load balancer, see Delete an Application Load Balancer." |
| 167 | Try it | Delete learning-exercise distribution and bucket to avoid charges; delete the distribution first | S25 | PASS | "delete them so that you no longer accrue charges. Delete the distribution first." |
| 168 | Try it | The procedures set up a standard distribution; S3 bucket with hello world files | S25 | PASS | "set up a standard distribution" / "hello world files that you will use to create a basic" |
| 169 | Try it | OAC sends authenticated requests to the S3 origin | S25 | PASS | "Uses origin access control (OAC) to send authenticated requests to your Amazon S3 origin." |
| 170 | Try it | Create distribution; CloudFront updates the bucket policy | S25 | PASS | "Choose Create distribution. CloudFront updates the S3 bucket policy for you." |
| 171 | Try it | After deploying, Last modified changes from Deploying to a date and time | S25 | PASS | "the Last modified field changes from Deploying to a date and time." |
| 172 | Try it | Objects stay at edge locations 24 hours by default; minimum 0 seconds | S25 | PASS | "for the default duration of 24 hours (the minimum duration is 0 seconds)." |
| 173 | How a tester uses it | IGW alone does not make instances reachable; other parts are route, public IPs, SG | S3 | PASS | "does not automatically make your instances accessible from the internet" / "update the subnet route table ... public IP addresses and an associated security group" |
| 174 | How a tester uses it | No SSH rule means no SSH | S9 | PASS | "then you could not connect to your instance using SSH." |
| 175 | How a tester uses it | NACL stateless; responses not auto-allowed | S10 | PASS | "responses to that traffic are not automatically allowed." |
| 176 | How a tester uses it | NACL rules from lowest number, first match applied | S10 | PASS | "starting with the lowest numbered rule" / "If the traffic matches a rule, the rule is applied" |
| 177 | How a tester uses it | Flow logs capture IP traffic info for network interfaces | S12 | PASS | "capture information about the IP traffic going to and from network interfaces in your VPC." |
| 178 | How a tester uses it | Flow logs help diagnose overly restrictive SG rules | S12 | PASS | "Diagnosing overly restrictive security group rules" |
| 179 | How a tester uses it | Flow log data is out of the traffic path, no throughput or latency effect | S12 | PASS | "collected outside of the path of your network traffic, and therefore does not affect network throughput or latency." |
| 180 | How a tester uses it | Reachability Analyzer is a configuration analysis tool for connectivity testing | S13 | PASS | "Reachability Analyzer is a configuration analysis tool that enables you to perform connectivity testing between a source resource and a destination resource in your virtual private clouds (VPCs)." |
| 181 | How a tester uses it | It identifies the blocking component | S13 | PASS | "Reachability Analyzer identifies the blocking component." |
| 182 | How a tester uses it | It verifies the configuration matches intended connectivity | S13 | PASS | "Verify that your network configuration matches your intended connectivity." |
| 183 | How a tester uses it | It can automate verification as configuration changes | S13 | PASS | "Automate the verification of your connectivity intent as your network configuration changes." |
| 184 | How a tester uses it | AWS lists Reachability Analyzer among components with charges | S1 | PASS | "charges for some VPC components, such as ... Reachability Analyzer" |
| 185 | How a tester uses it | A small delay before an SG rule change reaches instances | S14 | PASS | "a small delay might occur." |
| 186 | How a tester uses it | Use private subnets for instances not to be reached directly | S11 | PASS | "Use private subnets for your instances if they should not be accessed directly from the internet." |
| 187 | How a tester uses it | Use a bastion host or NAT gateway for internet access from private subnets | S11 | PASS | "Use a bastion host or NAT gateway for internet access from instances in private subnets." |
| 188 | How a tester uses it | First four and last IP unavailable | S5 | PASS | "The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use" |
| 189 | How a tester uses it | Connected VPCs must not overlap | S3 | PASS | "you must ensure that they have no overlapping IP addresses." |
| 190 | How a tester uses it | New target passes one health check | S18 | PASS | "it must pass one health check to be considered healthy." |
| 191 | How a tester uses it | LB returns a target to service after HealthyThresholdCount successes | S18 | PASS | "When the health checks exceed HealthyThresholdCount consecutive successes, the load balancer puts the target back in service." |
| 192 | How a tester uses it | All targets unhealthy → LB routes to all | S18 | PASS | "the load balancer routes requests to all those targets, regardless of their health status." |
| 193 | How a tester uses it | Listener rules in priority order | S16 | PASS | "the listener rules in priority order" |
| 194 | How a tester uses it | Health checks do not support WebSockets | S18 | PASS | "Health checks do not support WebSockets." |
| 195 | How a tester uses it | Weighted policy | S20 | PASS | "route traffic to multiple resources in proportions that you specify." |
| 196 | How a tester uses it | Multivalue: up to eight healthy records at random | S20 | PASS | "up to eight healthy records selected at random." |
| 197 | How a tester uses it | Route 53 can route traffic away from unhealthy resources | S19 | PASS | "route internet traffic away from unhealthy resources." |
| 198 | How a tester uses it | Cache miss goes to origin and adds the object | S22 | PASS | "forwards the request to your origin server" / "adds the object to the cache for the next time" |
| 199 | How a tester uses it | After expiry CloudFront verifies with the origin | S23 | PASS | "to verify that the cache contains the latest version of the file." |
| 200 | How a tester uses it | Origin returns 304 or 200 | S23 | PASS | "status code 304 Not Modified" / "status code 200 OK" |
| 201 | How a tester uses it | Errors such as 404 stay cached for a time | S23 | PASS | "You can also control how long errors (for example, 404 Not Found) stay in" |
| 202 | How a tester uses it | After invalidation the user might see the old version | S24 | PASS | "the user might continue to see the old" |
| 203 | How a tester uses it | Versioning is less expensive: no invalidation fee | S24 | PASS | "Versioning is less expensive. ... you don't have to pay for invalidating files." |
| 204 | Common mistakes | IGW alone is not enough | S3 | PASS | "does not automatically make your instances accessible from the internet" |
| 205 | Common mistakes | Nondefault subnet has no public IPv4 by default | S2 | PASS | "has a private IPv4 address, but no public IPv4 address" |
| 206 | Common mistakes | Such instances talk to each other but can't reach the internet | S2 | PASS | "These instances can communicate with each other, but can't access the internet." |
| 207 | Common mistakes | 0.0.0.0/0 and ::/ let anyone in | S9 | PASS | "this enables anyone to access your instances from any IP address using the specified protocol." |
| 208 | Common mistakes | NACLs stateless; SGs stateful | S10, S9 | PASS | "NACLs are stateless" / "Security groups are stateful." |
| 209 | Common mistakes | SGs do not filter DNS, DHCP, instance metadata | S9 | PASS | "Amazon Domain Name Services (DNS)" / "Amazon Dynamic Host Configuration Protocol (DHCP)" / "Amazon EC2 instance metadata" |
| 210 | Common mistakes | NACLs can't block IMDS | S10 | PASS | "Network ACLs can't block traffic to the Instance Metadata Service (IMDS)." |
| 211 | Common mistakes | Subnet CIDRs cannot overlap | S5 | PASS | "the CIDR blocks of the subnets cannot overlap." |
| 212 | Common mistakes | Connected VPCs must not overlap | S3 | PASS | "you must ensure that they have no overlapping IP addresses." |
| 213 | Common mistakes | `ip_network` raises ValueError on host bits | S27 | PASS | "or if the network has host bits set." |
| 214 | Common mistakes | AWS changes the subnet CIDR to canonical form | S5 | PASS | "automatically modified to its canonical form." |
| 215 | Common mistakes | First four and last unavailable | S5 | PASS | "not available for your use" |
| 216 | Common mistakes | External services can't initiate to NAT-gateway instances | S8 | PASS | "external services can't initiate a connection with those instances." |
| 217 | Common mistakes | NAT gateways have a cost | S26 | PASS | "there is a cost associated with NAT gateways" |
| 218 | Common mistakes | ALB hourly charge | S30 | PASS | "You are charged for each hour or partial hour that an Application Load Balancer is running." |
| 219 | Common mistakes | All targets fail → LB fails open | S18 | PASS | "the load balancer fails open." |
| 220 | Common mistakes | Target SGs must allow the LB on the health check port | S17 | PASS | "allow traffic from the load balancer on the health check port" |
| 221 | Common mistakes | Multivalue up to eight healthy records at random; weighted by proportions | S20 | PASS | "up to eight healthy records selected at random." / "in proportions that you specify." |
| 222 | Common mistakes | CloudFront serves a file from the edge until the cache duration passes | S23 | PASS | "Typically, CloudFront serves a file from an edge location until the cache duration that you" |
| 223 | Common mistakes | For frequent updates use versioning | S24 | PASS | "we recommend that you primarily use file versioning" |
| 224 | Common mistakes | Delete the distribution first | S25 | PASS | "Delete the distribution first." |
| 225 | What a tester can check | Callout "Tutorial advice": the 12 advice items | none | PASS | The callout says "This list is the tutorial's own advice". It states no tool fact beyond what the page supports. |
| 226 | Key words | VPC | none | PASS | Page: "A VPC is a virtual network dedicated to your AWS account" |
| 227 | Key words | Subnet | none | PASS | Page: "A subnet is a range of IP addresses in your VPC. A subnet must reside in a single Availability Zone" |
| 228 | Key words | CIDR block | none | PASS | Page: "The IP addresses of a VPC are written in Classless Inter-Domain Routing (CIDR) notation" / "between a /16 netmask ... and a /28 netmask" |
| 229 | Key words | Route table | none | PASS | Page: "Each route table contains a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed" |
| 230 | Key words | Internet gateway | none | PASS | Page: "an internet gateway connects your VPC to the internet". The label "VPC component" is source wording, not page wording; the meaning matches. |
| 231 | Key words | Public subnet | none | PASS | Page: "A subnet that is associated with a route table that has a route to an internet gateway is a public subnet" |
| 232 | Key words | NAT gateway | none | PASS | Page: "A NAT gateway lets instances in a private subnet connect to services outside your VPC. External services can't initiate a connection" |
| 233 | Key words | Security group | none | PASS | Page: "A security group controls the traffic that is allowed to reach and leave the resources that it is associated with" / "Security groups are stateful" |
| 234 | Key words | Network ACL | none | PASS | Page: "allows or denies specific inbound or outbound traffic at the subnet level" / "Network ACLs are stateless" |
| 235 | Key words | Flow logs | none | PASS | Page: "Flow logs capture information about the IP traffic going to and from network interfaces in your VPC" |
| 236 | Key words | Reachability Analyzer | none | PASS | Page: "a configuration analysis tool for connectivity testing between a source resource and a destination resource in your VPCs" |
| 237 | Key words | Listener | none | PASS | Page: "A listener checks for connection requests from clients, using the protocol and port that you configure" |
| 238 | Key words | Target group | none | PASS | Page: "Each target group routes requests to one or more registered targets, such as EC2 instances" |
| 239 | Key words | Health check | none | PASS | Page: "periodically sends requests to its registered targets to test their status. These tests are called health checks" |
| 240 | Key words | Fail open | none | PASS | Page: "the load balancer routes requests to all those targets" / "the load balancer fails open" |
| 241 | Key words | Route 53 | none | PASS | Page: "a highly available and scalable Domain Name System (DNS) web service" |
| 242 | Key words | Routing policy | none | PASS | Page: "you choose a routing policy, which determines how Route 53 responds to queries" |
| 243 | Key words | CloudFront | none | PASS | Page: "a web service that speeds up distribution of your static and dynamic web content" / "worldwide network of data centers called edge locations" |
| 244 | Key words | TTL | none | PASS | Page: "the default TTL (Time to Live) is 24 hours" / "You can control how long your files stay in a CloudFront cache". "How long CloudFront keeps a file" is a light gloss. |
| 245 | Key words | Invalidation | none | PASS | Page: "To remove a file from the edge caches before it expires, you can invalidate the file" |

Open FAILs after round 7: 1

Changed after this round: Row 144: step 2 of Try it now says that using `aws ec2 create-security-group` is the tutorial's own choice, and that the AWS CLI User Guide shows the option on `aws ec2 run-instances` (S28). Step 3 says that the tutorial chose `authorize-security-group-ingress`. Not from a FAIL: the Internet gateway and TTL rows of Key words now follow their Technical sentences more closely.

## Round 8 (2026-11-18)

# Fact check: devops / aws-networking (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Topic list and "read-along of AWS's own tutorials" | none | N/A | The line describes the page. |
| 2 | Lede | Page scope; practice run needs no AWS account; links to other pages | none | N/A | The lede describes the page and the run record. The links are site paths. |
| 3 | What it is | Amazon VPC lets you launch AWS resources in a logically isolated virtual network that you defined | S1 | PASS | "you can launch AWS resources in a logically isolated virtual network that you've defined" |
| 4 | What it is | A VPC is a virtual network dedicated to your AWS account | S2 | PASS | "A virtual private cloud (VPC) is a virtual network dedicated to your AWS account" |
| 5 | What it is | A subnet is a range of IP addresses in your VPC | S2 | PASS | "A subnet is a range of IP addresses in your VPC." |
| 6 | What it is | A subnet must reside in a single AZ | S1 | PASS | "A subnet must reside in a single Availability Zone." |
| 7 | What it is | You launch resources such as EC2 instances into subnets | S2 | PASS | "You launch AWS resources, such as Amazon EC2 instances, into your subnets." |
| 8 | What it is | A route table is the traffic controller for your VPC | S6 | PASS | "A route table serves as the traffic controller for your virtual private cloud (VPC)." |
| 9 | What it is | Routes are rules that decide where traffic from a subnet or gateway goes | S6 | PASS | "a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed" |
| 10 | What it is | AWS creates the main route table when you create a VPC | S6 | PASS | "When you create a VPC, we also create the main route table for the VPC." |
| 11 | What it is | A route has a destination (CIDR block or prefix list) and a target | S6 | PASS | "Each route specifies a destination (CIDR block or prefix list) and a target" |
| 12 | What it is | Target examples: internet gateway, NAT gateway, VPC peering, VPN | S6 | PASS | "(such as an internet gateway, NAT gateway, VPC peering connection, or VPN connection)" |
| 13 | What it is | Traffic is routed by destination IP address | S6 | PASS | "Traffic is routed to targets based on its destination IP address." |
| 14 | What it is | A gateway connects your VPC to another network; an internet gateway connects it to the internet | S1 | PASS | "A gateway connects your VPC to another network. For example, use an internet gateway to connect your VPC to the internet." |
| 15 | What it is | A security group controls traffic allowed to reach and leave its resources | S9 | PASS | "A security group controls the traffic that is allowed to reach and leave the resources that it is associated with." |
| 16 | What it is | A network ACL allows or denies inbound or outbound traffic at the subnet level | S10 | PASS | "A network access control list (ACL) allows or denies specific inbound or outbound traffic at the subnet level." |
| 17 | What it is | ELB automatically distributes incoming traffic across multiple targets in one or more AZs | S15 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones." |
| 18 | What it is | ELB monitors target health and routes only to healthy targets | S15 | PASS | "It monitors the health of its registered targets, and routes traffic only to the healthy targets." |
| 19 | What it is | Route 53 is a highly available and scalable DNS web service | S19 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 20 | What it is | Route 53 does three functions in any combination | S19 | PASS | "three main functions in any combination: domain registration, DNS routing, and health checking" |
| 21 | What it is | CloudFront speeds up distribution of static and dynamic content | S21 | PASS | "a web service that speeds up distribution of your static and dynamic web content" |
| 22 | What it is | CloudFront delivers through a worldwide network of edge locations | S21 | PASS | "through a worldwide network of data centers called edge locations" |
| 23 | How it works | VPC IP addresses are written in CIDR notation | S4 | PASS | "The IP addresses for your virtual private cloud (VPC) are represented using Classless Inter-Domain Routing (CIDR) notation." |
| 24 | How it works | You must specify an IPv4 CIDR block when you create a VPC | S4 | PASS | "When you create a VPC, you must specify an IPv4 CIDR block for the VPC." |
| 25 | How it works | Allowed size is /16 (65,536) to /28 (16) | S4 | PASS | "between a /16 netmask (65,536 IP addresses) and /28 netmask (16 IP addresses)" |
| 26 | How it works | A subnet CIDR can equal the VPC CIDR or be a subset | S5 | PASS | "can be the same as the CIDR block for the VPC ... or a subset of the CIDR block for the VPC" |
| 27 | How it works | Subnet CIDR blocks in a VPC cannot overlap | S5 | PASS | "the CIDR blocks of the subnets cannot overlap" |
| 28 | How it works | VPC ranges must not overlap your own network | S3 | PASS | "Ensure that the IP address ranges for your VPCs don't overlap with the IP address ranges for your own network." |
| 29 | How it works | VPCs that need connectivity must have no overlapping IPs | S3 | PASS | "If you need connectivity between multiple VPCs, you must ensure that they have no overlapping IP addresses." |
| 30 | How it works | First four and last IP in each subnet CIDR are not available | S5 | PASS | "The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use" |
| 31 | How it works | In 10.0.0.0/24 AWS lists five reserved addresses | S5 | PASS | "in a subnet with CIDR block 10.0.0.0/24, the following five IP addresses are reserved" |
| 32 | How it works | 10.0.0.0 network address; 10.0.0.1 reserved for VPC router | S5 | PASS | "10.0.0.0: Network address. 10.0.0.1: Reserved by AWS for the VPC router." |
| 33 | How it works | 10.0.0.2 reserved by AWS; 10.0.0.3 reserved for future use | S5 | PASS | "10.0.0.2: Reserved by AWS." and "10.0.0.3: Reserved by AWS for future use." |
| 34 | How it works | 10.0.0.255 broadcast address, reserved because broadcast is not supported | S5 | PASS | "10.0.0.255: Network broadcast address. We do not support broadcast in a VPC, therefore we reserve this address." |
| 35 | How it works | CLI or EC2 API subnet CIDR is modified to canonical form; 100.68.0.18/18 gives 100.68.0.0/18 | S5 | PASS | "automatically modified to its canonical form. For example, if you specify 100.68.0.18/18 for the CIDR block, we create a CIDR block of 100.68.0.0/18." |
| 36 | How it works | Account includes a default VPC in each Region | S1 | PASS | "Your AWS account includes a default VPC in each AWS Region." |
| 37 | How it works | Default VPC has an internet gateway; each default subnet is public | S2 | PASS | "A default VPC includes an internet gateway, and each default subnet is a public subnet." |
| 38 | How it works | Public subnet = route table with route to an IGW; without it, private | S7 | PASS | "If a subnet is associated with a route table that has a route to an internet gateway, it's known as a public subnet." and "does not have a route ... private subnet" |
| 39 | How it works | IGW route can be 0.0.0.0/0 or ::/0 | S7 | PASS | "(0.0.0.0/0 for IPv4 or ::/0 for IPv6)" |
| 40 | How it works | Attaching an IGW does not automatically make instances reachable | S3 | PASS | "Attaching an internet gateway to a VPC does not automatically make your instances accessible from the internet." |
| 41 | How it works | You must also add a subnet route to the IGW | S3 | PASS | "you must update the subnet route table with a route to the internet gateway" |
| 42 | How it works | Instances must also have public IPs | S3 | PASS | "ensure that the instances have public IP addresses" |
| 43 | How it works | Need a security group allowing internet traffic on specific ports and protocols | S3 | PASS | "an associated security group that allows traffic from the internet over specific ports and protocols" |
| 44 | How it works | By default a nondefault-subnet instance has a private IPv4 but no public IPv4 | S2 | PASS | "By default, each instance that you launch into a nondefault subnet has a private IPv4 address, but no public IPv4 address" |
| 45 | How it works | You can assign a public address at launch or change the subnet attribute | S2 | PASS | "unless you specifically assign one at launch, or you modify the subnet's public IP address attribute" |
| 46 | How it works | NAT gateway lets private-subnet instances reach outside services | S8 | PASS | "so that instances in a private subnet can connect to services outside your VPC" |
| 47 | How it works | External services can't initiate a connection | S8 | PASS | "external services can't initiate a connection with those instances" |
| 48 | How it works | Public NAT gateway sits in a public subnet and needs an Elastic IP at creation | S8 | PASS | "You create a public NAT gateway in a public subnet and must associate an Elastic IP address with the NAT gateway at creation." |
| 49 | How it works | Subnet with no explicit route table association is implicitly associated with main | S2 | PASS | "Otherwise, the subnet is implicitly associated with the main route table." |
| 50 | How it works | Only traffic allowed by SG rules reaches the instance | S9 | PASS | "The only traffic that reaches the instance is the traffic allowed by the security group rules." |
| 51 | How it works | With no SSH-allowing rule you could not connect with SSH | S9 | PASS | "If the security group does not contain a rule that allows SSH traffic, then you could not connect to your instance using SSH." |
| 52 | How it works | Security groups are stateful | S9 | PASS | "Security groups are stateful." |
| 53 | How it works | Response traffic for a request from an instance is allowed in | S9 | PASS | "if you send a request from an instance, the response traffic for that request is allowed to reach the instance" |
| 54 | How it works | This holds regardless of inbound rules | S9 | PASS | "regardless of the inbound security group rules" |
| 55 | How it works | SGs do not filter Amazon DNS, DHCP, EC2 instance metadata, among others | S9 | PASS | "Security groups do not filter traffic destined to and from the following: Amazon Domain Name Services (DNS) Amazon Dynamic Host Configuration Protocol (DHCP) Amazon EC2 instance metadata" |
| 56 | How it works | For ports 22/3389 authorize only specific IP ranges | S9 | PASS | "When you add inbound rules for ports 22 (SSH) or 3389 (RDP) ... authorize only specific IP address ranges." |
| 57 | How it works | 0.0.0.0/0 and ::/ let anyone in from any IP | S9 | PASS | "If you specify 0.0.0.0/0 (IPv4) and ::/ (IPv6), this enables anyone to access your instances from any IP address using the specified protocol." |
| 58 | How it works | SG rule changes propagate quickly, small delay possible | S14 | PASS | "Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur." |
| 59 | How it works | Each subnet must be associated with a network ACL | S10 | PASS | "Each subnet in your VPC must be associated with a network ACL." |
| 60 | How it works | Unassociated subnet gets the default network ACL | S10 | PASS | "the subnet is automatically associated with the default network ACL" |
| 61 | How it works | A subnet has only one network ACL at a time | S10 | PASS | "a subnet can be associated with only one network ACL at a time" |
| 62 | How it works | Each rule allows or denies traffic | S10 | PASS | "Each rule can either allow or deny traffic." |
| 63 | How it works | Rule number is 1 to 32766 | S10 | PASS | "Each rule has a number from 1 to 32766." |
| 64 | How it works | Rules are evaluated in order, lowest number first | S10 | PASS | "We evaluate the rules in order, starting with the lowest numbered rule" |
| 65 | How it works | On a match the rule applies and no further rules are evaluated | S10 | PASS | "If the traffic matches a rule, the rule is applied and we do not evaluate any additional rules." |
| 66 | How it works | Network ACLs are stateless | S10 | PASS | "NACLs are stateless" |
| 67 | How it works | Responses to allowed inbound traffic are not automatically allowed | S10 | PASS | "responses to that traffic are not automatically allowed" |
| 68 | How it works | Rules are evaluated when traffic enters and leaves the subnet, not within it | S10 | PASS | "when traffic enters and leaves the subnet, not as it is routed within a subnet" |
| 69 | How it works | Network ACLs can't block traffic to IMDS | S10 | PASS | "Network ACLs can't block traffic to the Instance Metadata Service (IMDS)." |
| 70 | How it works | AWS says use security groups as the primary mechanism | S11 | PASS | "Use security groups as the primary mechanism for controlling network access to your VPCs." |
| 71 | How it works | Use network ACLs for stateless, coarse-grain control when necessary | S11 | PASS | "When necessary, use network ACLs to provide stateless, coarse-grain network control." |
| 72 | How it works | A load balancer is the single point of contact for clients | S16 | PASS | "A load balancer serves as the single point of contact for clients." |
| 73 | How it works | A listener checks for client connection requests on the configured protocol and port | S16 | PASS | "A listener checks for connection requests from clients, using the protocol and port that you configure." |
| 74 | How it works | Listener rules decide how requests go to registered targets | S16 | PASS | "The rules that you define for a listener determine how the load balancer routes requests to its registered targets." |
| 75 | How it works | You must define a default rule for each listener | S16 | PASS | "You must define a default rule for each listener" |
| 76 | How it works | A target group routes to one or more registered targets such as EC2 instances | S16 | PASS | "Each target group routes requests to one or more registered targets, such as EC2 instances" |
| 77 | How it works | ALB works at layer 7 | S16 | PASS | "functions at the application layer, the seventh layer of the Open Systems Interconnection (OSI) model" |
| 78 | How it works | It evaluates listener rules in priority order | S16 | PASS | "it evaluates the listener rules in priority order to determine which rule to apply" |
| 79 | How it works | Default algorithm is round robin; least outstanding requests is an alternative | S16 | PASS | "The default routing algorithm is round robin; alternatively, you can specify the least outstanding requests routing algorithm." |
| 80 | How it works | Rules can forward based on the request URL | S16 | PASS | "forward requests based on the URL in the request" |
| 81 | How it works | Rules can forward based on the HTTP host header field | S16 | PASS | "forward requests based on the host field in the HTTP header" |
| 82 | How it works | ALB periodically sends health-check requests to registered targets | S18 | PASS | "Your Application Load Balancer periodically sends requests to its registered targets to test their status. These tests are called health checks." |
| 83 | How it works | A registered target must pass one health check to be healthy | S18 | PASS | "it must pass one health check to be considered healthy" |
| 84 | How it works | Exceeding UnhealthyThresholdCount consecutive failures takes the target out of service | S18 | PASS | "If the health checks exceed UnhealthyThresholdCount consecutive failures, the load balancer takes the target out of service." |
| 85 | How it works | Exceeding HealthyThresholdCount consecutive successes puts it back | S18 | PASS | "When the health checks exceed HealthyThresholdCount consecutive successes, the load balancer puts the target back in service." |
| 86 | How it works | Defaults: UnhealthyThresholdCount 2, HealthyThresholdCount 5 | S18 | PASS | "HealthyThresholdCount ... The default is 5." and "UnhealthyThresholdCount ... The default is 2." |
| 87 | How it works | Default health check path is / for HTTP/1.1 or HTTP/2 | S18 | PASS | "If the protocol version is HTTP/1.1 or HTTP/2, specify a valid URI (/path?query). The default is /." |
| 88 | How it works | A target group with only unhealthy targets routes to all of them | S18 | PASS | "If a target group contains only unhealthy registered targets, the load balancer routes requests to all those targets, regardless of their health status." |
| 89 | How it works | If all targets fail in all enabled AZs at once, the LB fails open | S18 | PASS | "if all targets fail health checks at the same time in all enabled Availability Zones, the load balancer fails open" |
| 90 | How it works | Health checks do not support WebSockets | S18 | PASS | "Health checks do not support WebSockets." |
| 91 | How it works | Deregistering lowers HealthyHostCount but does not raise UnhealthyHostCount | S18 | PASS | "when you deregister a target, this decreases HealthyHostCount but does not increase UnhealthyHostCount" |
| 92 | How it works | Target SGs must allow the LB on the health check port | S17 | PASS | "Ensure that the security groups for target instances allow traffic from the load balancer on the health check port" |
| 93 | How it works | LB is ready when each enabled AZ has at least one healthy registered target | S17 | PASS | "ready to handle client requests when there is at least one healthy registered target in each of its enabled Availability Zones" |
| 94 | How it works | User enters domain name; Route 53 connects browser to site | S19 | PASS | "When a user opens a web browser and enters your domain name (example.com) or subdomain name (acme.example.com), Route 53 connects the browser with your website or web application." |
| 95 | How it works | Route 53 sends automated requests to check a resource | S19 | PASS | "Route 53 sends automated requests over the internet to a resource, such as a web server" |
| 96 | How it works | This verifies it is reachable, available, functional | S19 | PASS | "to verify that it's reachable, available, and functional" |
| 97 | How it works | You can route traffic away from unhealthy resources | S19 | PASS | "You can also route internet traffic away from unhealthy resources." |
| 98 | How it works | You choose a routing policy when you create a record | S20 | PASS | "When you create a record, you choose a routing policy, which determines how Amazon Route 53 responds to queries" |
| 99 | How it works | Simple policy | S20 | PASS | "Use for a single resource that performs a given function for your domain" |
| 100 | How it works | Failover policy | S20 | PASS | "Use when you want to configure active-passive failover." |
| 101 | How it works | Geolocation policy | S20 | PASS | "Use when you want to route traffic based on the location of your users." |
| 102 | How it works | Geoproximity policy | S20 | PASS | "Use when you want to route traffic based on the location of your resources" |
| 103 | How it works | Latency policy | S20 | PASS | "Use when you have resources in multiple AWS Regions and you want to route traffic to the Region that provides the best latency." |
| 104 | How it works | IP-based policy | S20 | PASS | "Use when you want to route traffic based on the location of your users, and have the IP addresses that the traffic originates from." |
| 105 | How it works | Multivalue answer policy, up to eight healthy records at random | S20 | PASS | "respond to DNS queries with up to eight healthy records selected at random" |
| 106 | How it works | Weighted policy | S20 | PASS | "Use to route traffic to multiple resources in proportions that you specify." |
| 107 | How it works | DNS routes the request to the POP that can best serve it | S22 | PASS | "DNS routes the request to the CloudFront POP (edge location) that can best serve the request" |
| 108 | How it works | This is typically the nearest POP by latency | S22 | PASS | "typically the nearest CloudFront POP in terms of latency" |
| 109 | How it works | CloudFront checks cache; a hit is returned | S22 | PASS | "CloudFront checks its cache for the requested object. If the object is in the cache, CloudFront returns it to the user." |
| 110 | How it works | A miss is forwarded to the origin server | S22 | PASS | "forwards the request to your origin server for the corresponding object" |
| 111 | How it works | CloudFront adds the object to the cache for next time | S22 | PASS | "CloudFront also adds the object to the cache for the next time someone requests it." |
| 112 | How it works | You can control how long files stay in the cache | S23 | PASS | "You can control how long your files stay in a CloudFront cache before CloudFront forwards another request to your origin." |
| 113 | How it works | After expiry CloudFront asks the origin to verify the latest version | S23 | PASS | "CloudFront forwards the request to the origin to verify that the cache contains the latest version of the file" |
| 114 | How it works | Latest version in cache gives 304 Not Modified | S23 | PASS | "the origin returns a status code 304 Not Modified" |
| 115 | How it works | Otherwise 200 OK plus the latest file | S23 | PASS | "the origin returns a status code 200 OK and the latest version of the file" |
| 116 | How it works | Without a cache policy the default TTL is 24 hours | S23 | PASS | "If you opt out of using a cache policy, the default TTL (Time to Live) is 24 hours" |
| 117 | How it works | You change a single file's duration by configuring the origin | S23 | PASS | "To change the cache duration for an individual file, you can configure your origin" |
| 118 | How it works | Origin adds Cache-Control with max-age or s-maxage, or an Expires header | S23 | PASS | "add a Cache-Control header with the max-age or s-maxage directive, or an Expires header to the file" |
| 119 | How it works | CloudFront might evict an infrequently requested file early | S23 | PASS | "CloudFront might evict the file—remove the file before its expiration date" |
| 120 | How it works | You can control how long errors such as 404 stay cached | S23 | PASS | "You can also control how long errors (for example, 404 Not Found) stay in a CloudFront cache" |
| 121 | How it works | You can invalidate a file to remove it from edge caches before expiry | S24 | PASS | "If you need to remove a file from CloudFront edge caches before it expires, you can do one of the following:" |
| 122 | How it works | File versioning serves a different version under a different name | S24 | PASS | "Use file versioning to serve a different version of the file that has a different name." |
| 123 | How it works | For frequent updates AWS recommends primarily versioning | S24 | PASS | "If you want to update your files frequently, we recommend that you primarily use file versioning" |
| 124 | How it works | After invalidation the user might still see the old version until it expires from those caches | S24 | PASS | "If you invalidate the file, the user might continue to see the old version until it expires from those caches." |
| 125 | Try it | Run record: date, OS, versions, no account, no AWS_ vars, no ~/.aws, steps 4–6 not run | none | N/A | This is the page's own run record and framing. It names its date and tools. |
| 126 | Try it | Step 1: ipaddress returns a network object for text like 10.0.0.0/16 | S27 | PASS | "ipaddress.ip_network(address, strict=True) Return an IPv4Network or IPv6Network object" |
| 127 | Try it | Step 1: num_addresses is the total number of addresses | S27 | PASS | "num_addresses The total number of addresses in the network." |
| 128 | Try it | Step 1: subnets() returns the subnets that join to make the network | S27 | PASS | "subnets(prefixlen_diff=1, new_prefix=None) The subnets that join to make the current network definition" |
| 129 | Try it | Step 1: subnet_of() tells whether a network is a subnet of another | S27 | PASS | "subnet_of(other) Return True if this network is a subnet of other." |
| 130 | Try it | Step 1: overlaps() is true if partly or wholly contained | S27 | PASS | "overlaps(other) True if this network is partly or wholly contained in other" |
| 131 | Try it | Step 1: network objects act as containers, so `in` tests an address | S27 | PASS | "Network objects can act as containers of addresses." and "IPv4Address('192.0.2.6') in IPv4Network('192.0.2.0/28') True" |
| 132 | Try it | Step 1: code block net.py, "26 lines", the tutorial's own code | S27 | N/A | It is the tutorial's own code and framing. The calls in it are covered by rows 126–131. |
| 133 | Try it | Step 1 output block | none | N/A | It is labeled as the output of the tutorial's run. |
| 134 | Try it | AWS gives 65,536 addresses for a /16 | S4 | PASS | "a /16 netmask (65,536 IP addresses)" |
| 135 | Try it | A subnet CIDR can be a subset of the VPC CIDR | S5 | PASS | "or a subset of the CIDR block for the VPC" |
| 136 | Try it | Fourth line lists the five reserved addresses of 10.0.0.0/24 | S5 | PASS | "in a subnet with CIDR block 10.0.0.0/24, the following five IP addresses are reserved" with .0 .1 .2 .3 .255 listed |
| 137 | Try it | AWS says subnet CIDRs of a VPC cannot overlap | S5 | PASS | "the CIDR blocks of the subnets cannot overlap" |
| 138 | Try it | Run result, the rule-range test, and "does not call AWS" | none | N/A | These describe the page's own run and code. |
| 139 | Try it | ip_network raises ValueError when host bits are set | S27 | PASS | "ValueError is raised if address does not represent a valid IPv4 or IPv6 address, or if the network has host bits set." |
| 140 | Try it | AWS modifies a CLI or API subnet CIDR to canonical form | S5 | PASS | "If you create a subnet using a command line tool or the Amazon EC2 API, the CIDR block is automatically modified to its canonical form." |
| 141 | Try it | Step 2: AWS_CONFIG_FILE and AWS_SHARED_CREDENTIALS_FILE name the profile and key files; AWS_EC2_METADATA_DISABLED disables IMDS use | S29 | PASS | "AWS_CONFIG_FILE Specifies the location of the file that the AWS CLI uses to store configuration profiles." "AWS_SHARED_CREDENTIALS_FILE ... store access keys." "AWS_EC2_METADATA_DISABLED Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 142 | Try it | Step 2: --generate-cli-skeleton generates and displays a parameter template to customize and use as input | S28 | PASS | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 143 | Try it | Step 2: the User Guide shows the option on `aws ec2 run-instances` | S28 | PASS | "$ aws ec2 run-instances --generate-cli-skeleton" |
| 144 | Try it | Step 2: the export and create-security-group command block | S29 | PASS | The three variable names match S29 (row 141). `aws ec2 create-security-group` is labeled as the tutorial's own choice. |
| 145 | Try it | Step 2: output block and the note on GroupName, Description, VpcId, placeholders | none | N/A | These are the page's own run output and reading. |
| 146 | Try it | Step 3: the command block and the grep filter; the output block | none | N/A | These are the tutorial's own filter and run output. The aws command and flag are in S28. |
| 147 | Try it | Step 3: an inbound rule needs exactly one source (IPv4/IPv6 range, prefix list, or SG) | S14 | PASS | "You must specify exactly one of the following sources: an IPv4 or IPv6 address range, a prefix list, or a security group." |
| 148 | Try it | Step 3: you must give a protocol, and for TCP/UDP a port or range | S14 | PASS | "You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range." |
| 149 | Try it | Step 3: tutorial's name matching; it did not check the API reference | none | N/A | This is the page's own statement about its own work. |
| 150 | Try it | Step 3: the EC2 API DryRun parameter checks permissions without making the request | S14 | PASS | "DryRun Checks whether you have the required permissions for the action, without actually making the request" |
| 151 | Try it | Step 4: no extra charge for a VPC; charges for NAT gateways, IPAM, traffic mirroring, Reachability Analyzer, Network Access Analyzer | S1 | PASS | "There's no additional charge for using a VPC. There are, however, charges for some VPC components, such as NAT gateways, IP Address Manager, traffic mirroring, Reachability Analyzer, and Network Access Analyzer." |
| 152 | Try it | Step 4: public IPv4 addresses are charged if you are not using EC2 in the Free Tier | S1 | PASS | "If you are not using the EC2 service in the AWS Free Tier, Public IPv4 addresses are charged." |
| 153 | Try it | Step 4.1: VPC ranges must not overlap your network | S3 | PASS | "Ensure that the IP address ranges for your VPCs don't overlap with the IP address ranges for your own network." |
| 154 | Try it | Step 4.2: at least two AZs for production | S3 | PASS | "For a production environment, we recommend that you select at least two Availability Zones" |
| 155 | Try it | Step 4.2: one AZ may save money for dev or test | S3 | PASS | "you might choose to save money by deploying your resources in only one Availability Zone" |
| 156 | Try it | Step 4.3: add a public NAT gateway in each active AZ and update the route table | S3 | PASS | "without allowing unsolicited inbound connections from the internet, add a public NAT gateway in each active Availability Zone and update the route table" |
| 157 | Try it | Step 4.4: choose Create VPC, then "VPC and more" | S26 | PASS | "On the VPC dashboard, choose Create VPC. For Resources to create, choose VPC and more." |
| 158 | Try it | Step 4.4: a VPC must have an IPv4 range | S26 | PASS | "A VPC must have an IPv4 address range." |
| 159 | Try it | Step 4.5: the NAT option is optional; the page says there is a cost | S26 | PASS | "(Optional) If resources in a private subnet need access ... Note that there is a cost associated with NAT gateways." |
| 160 | Try it | Step 5: ALB charged per hour or partial hour; a partial hour is billed as a full hour | S30 | PASS | "You are charged for each hour or partial hour that an Application Load Balancer is running. Each partial Application Load Balancer hour used is billed as a full hour." |
| 161 | Try it | Step 5 prereq 1: decide AZs and IP address types | S17 | PASS | "Decide which Availability Zones and IP address types your application will support." |
| 162 | Try it | Step 5 prereq 2: target SGs allow the listener port from client IPs if targets are by instance ID | S17 | PASS | "allow traffic on the listener port from client IP addresses (if targets are specified by instance ID)" |
| 163 | Try it | Step 5 prereq 3: they also allow the LB on the health check port | S17 | PASS | "allow traffic from the load balancer on the health check port" |
| 164 | Try it | Step 5: creating an ALB creates the LB, at least one listener, and at least one target group | S17 | PASS | "you'll create the load balancer, at least one listener, and at least one target group" |
| 165 | Try it | Step 5: test by checking the instances pass the initial health check, then that traffic is sent | S17 | PASS | "verify that your EC2 instances pass the initial health check. You can then check that the load balancer is sending traffic to your EC2 instance." |
| 166 | Try it | Step 5: the page links to delete steps | S17 | PASS | "To delete the load balancer, see Delete an Application Load Balancer." |
| 167 | Try it | Step 6: delete the distribution and bucket if made only for learning; delete the distribution first | S25 | PASS | "If you created your distribution and S3 bucket only as a learning exercise, delete them so that you no longer accrue charges. Delete the distribution first." |
| 168 | Try it | Step 6.1: procedures set up a standard distribution; the S3 bucket has hello world files | S25 | PASS | "set up a standard distribution" and "you create an S3 bucket with the provided sample hello world files that you will use to create a basic webpage" |
| 169 | Try it | Step 6.2: OAC sends authenticated requests to the S3 origin | S25 | PASS | "Uses origin access control (OAC) to send authenticated requests to your Amazon S3 origin." |
| 170 | Try it | Step 6.3: Create distribution; CloudFront updates the bucket policy | S25 | PASS | "Choose Create distribution. CloudFront updates the S3 bucket policy for you." |
| 171 | Try it | Step 6.4: Last modified changes from Deploying to a date and time | S25 | PASS | "the Last modified field changes from Deploying to a date and time" |
| 172 | Try it | Step 6.5: objects kept in edge locations for a default 24 hours; minimum 0 seconds | S25 | PASS | "for the default duration of 24 hours (the minimum duration is 0 seconds)" |
| 173 | How a tester uses it | IGW attach does not make instances reachable | S3 | PASS | "Attaching an internet gateway to a VPC does not automatically make your instances accessible from the internet." |
| 174 | How a tester uses it | AWS lists the other parts: route, public IPs, SG | S3 | PASS | "you must update the subnet route table with a route to the internet gateway. You must also ensure that the instances have public IP addresses and an associated security group" |
| 175 | How a tester uses it | No SSH rule means no SSH | S9 | PASS | "If the security group does not contain a rule that allows SSH traffic, then you could not connect to your instance using SSH." |
| 176 | How a tester uses it | NACL stateless, so responses are not automatically allowed | S10 | PASS | "NACLs are stateless ... responses to that traffic are not automatically allowed" |
| 177 | How a tester uses it | NACL rules evaluated lowest first; first match applies | S10 | PASS | "starting with the lowest numbered rule ... If the traffic matches a rule, the rule is applied and we do not evaluate any additional rules." |
| 178 | How a tester uses it | Flow logs capture IP traffic info for network interfaces in your VPC | S12 | PASS | "capture information about the IP traffic going to and from network interfaces in your VPC" |
| 179 | How a tester uses it | Flow logs help diagnose overly restrictive SG rules | S12 | PASS | "Diagnosing overly restrictive security group rules" |
| 180 | How a tester uses it | Flow log data is collected out of path and does not affect throughput or latency | S12 | PASS | "collected outside of the path of your network traffic, and therefore does not affect network throughput or latency" |
| 181 | How a tester uses it | Reachability Analyzer is a configuration analysis tool for connectivity testing | S13 | PASS | "a configuration analysis tool that enables you to perform connectivity testing between a source resource and a destination resource in your virtual private clouds (VPCs)" |
| 182 | How a tester uses it | When the destination is not reachable it identifies the blocking component | S13 | PASS | "When the destination is not reachable, Reachability Analyzer identifies the blocking component." |
| 183 | How a tester uses it | It can verify that config matches intended connectivity | S13 | PASS | "Verify that your network configuration matches your intended connectivity." |
| 184 | How a tester uses it | It can automate verifying connectivity intent as config changes | S13 | PASS | "Automate the verification of your connectivity intent as your network configuration" |
| 185 | How a tester uses it | AWS lists Reachability Analyzer among VPC components with charges | S1 | PASS | "charges for some VPC components, such as ... Reachability Analyzer" |
| 186 | How a tester uses it | A small delay may occur before an SG rule change reaches instances | S14 | PASS | "Rule changes are propagated ... as quickly as possible. However, a small delay might occur." |
| 187 | How a tester uses it | Use private subnets for instances that should not be reachable directly | S11 | PASS | "Use private subnets for your instances if they should not be accessed directly from the internet." |
| 188 | How a tester uses it | Use a bastion host or NAT gateway for internet access from private subnets | S11 | PASS | "Use a bastion host or NAT gateway for internet access from instances in private subnets." |
| 189 | How a tester uses it | First four and last IPs unavailable | S5 | PASS | "The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use" |
| 190 | How a tester uses it | Connected VPCs must have no overlapping IPs | S3 | PASS | "you must ensure that they have no overlapping IP addresses" |
| 191 | How a tester uses it | A new target must pass one health check | S18 | PASS | "it must pass one health check to be considered healthy" |
| 192 | How a tester uses it | Target returns to service after exceeding HealthyThresholdCount successes | S18 | PASS | "When the health checks exceed HealthyThresholdCount consecutive successes, the load balancer puts the target back in service." |
| 193 | How a tester uses it | If every target in a group is unhealthy, the LB routes to all | S18 | PASS | "If a target group contains only unhealthy registered targets, the load balancer routes requests to all those targets" |
| 194 | How a tester uses it | Listener rules are evaluated in priority order | S16 | PASS | "evaluates the listener rules in priority order" |
| 195 | How a tester uses it | Health checks do not support WebSockets | S18 | PASS | "Health checks do not support WebSockets." |
| 196 | How a tester uses it | Weighted policy routes in set proportions | S20 | PASS | "route traffic to multiple resources in proportions that you specify" |
| 197 | How a tester uses it | Multivalue answer gives up to eight healthy records at random | S20 | PASS | "up to eight healthy records selected at random" |
| 198 | How a tester uses it | Route 53 can route traffic away from unhealthy resources | S19 | PASS | "route internet traffic away from unhealthy resources" |
| 199 | How a tester uses it | Miss is forwarded to origin and the object is added to cache | S22 | PASS | "forwards the request to your origin server" and "CloudFront also adds the object to the cache for the next time someone requests it." |
| 200 | How a tester uses it | After expiry CloudFront asks the origin to verify the latest version | S23 | PASS | "forwards the request to the origin to verify that the cache contains the latest version of the file" |
| 201 | How a tester uses it | Origin returns 304 Not Modified or 200 OK | S23 | PASS | "status code 304 Not Modified" and "status code 200 OK" |
| 202 | How a tester uses it | Errors such as 404 also stay cached for a time | S23 | PASS | "control how long errors (for example, 404 Not Found) stay in a CloudFront cache" |
| 203 | How a tester uses it | Invalidated file: user may see the old version until it expires from those caches | S24 | PASS | "the user might continue to see the old version until it expires from those caches" |
| 204 | How a tester uses it | Versioning is less expensive: no invalidation fee | S24 | PASS | "Versioning is less expensive. ... you don't have to pay for invalidating files." |
| 205 | Common mistakes | IGW attach is not enough | S3 | PASS | "Attaching an internet gateway to a VPC does not automatically make your instances accessible from the internet." |
| 206 | Common mistakes | Nondefault-subnet instance has a private IPv4 but no public IPv4 by default | S2 | PASS | "By default, each instance that you launch into a nondefault subnet has a private IPv4 address, but no public IPv4 address" |
| 207 | Common mistakes | Such instances talk to each other but can't reach the internet | S2 | PASS | "These instances can communicate with each other, but can't access the internet." |
| 208 | Common mistakes | 0.0.0.0/0 and ::/ let anyone in | S9 | PASS | "this enables anyone to access your instances from any IP address using the specified protocol" |
| 209 | Common mistakes | Network ACLs are stateless | S10 | PASS | "NACLs are stateless" |
| 210 | Common mistakes | Security groups are stateful | S9 | PASS | "Security groups are stateful." |
| 211 | Common mistakes | SGs do not filter DNS, DHCP, instance metadata, among others | S9 | PASS | "Security groups do not filter traffic destined to and from the following: Amazon Domain Name Services (DNS) ... Amazon EC2 instance metadata" |
| 212 | Common mistakes | NACLs can't block IMDS traffic | S10 | PASS | "Network ACLs can't block traffic to the Instance Metadata Service (IMDS)." |
| 213 | Common mistakes | Subnet CIDRs of a VPC cannot overlap | S5 | PASS | "the CIDR blocks of the subnets cannot overlap" |
| 214 | Common mistakes | VPCs that need connectivity must have no overlapping IPs | S3 | PASS | "you must ensure that they have no overlapping IP addresses" |
| 215 | Common mistakes | ip_network raises ValueError on host bits | S27 | PASS | "or if the network has host bits set" |
| 216 | Common mistakes | AWS modifies a subnet CIDR to canonical form | S5 | PASS | "automatically modified to its canonical form" |
| 217 | Common mistakes | First four and last IP unavailable | S5 | PASS | "The first four IP addresses and the last IP address in each subnet CIDR block are not available for your use" |
| 218 | Common mistakes | External services can't initiate connections through a NAT gateway | S8 | PASS | "external services can't initiate a connection with those instances" |
| 219 | Common mistakes | NAT gateways have a cost | S26 | PASS | "Note that there is a cost associated with NAT gateways." |
| 220 | Common mistakes | ALB is charged per hour or partial hour | S30 | PASS | "You are charged for each hour or partial hour that an Application Load Balancer is running." |
| 221 | Common mistakes | If all targets fail in all enabled AZs, the LB fails open | S18 | PASS | "if all targets fail health checks at the same time in all enabled Availability Zones, the load balancer fails open" |
| 222 | Common mistakes | Target SGs must allow the LB on the health check port | S17 | PASS | "allow traffic from the load balancer on the health check port" |
| 223 | Common mistakes | Multivalue answer gives up to eight healthy records at random | S20 | PASS | "up to eight healthy records selected at random" |
| 224 | Common mistakes | Weighted policy routes in set proportions | S20 | PASS | "in proportions that you specify" |
| 225 | Common mistakes | CloudFront typically serves from the edge until the cache duration passes | S23 | PASS | "Typically, CloudFront serves a file from an edge location until the cache duration that you specified passes" |
| 226 | Common mistakes | For frequent updates AWS recommends primarily versioning | S24 | PASS | "we recommend that you primarily use file versioning" |
| 227 | Common mistakes | Delete the distribution first | S25 | PASS | "Delete the distribution first." |
| 228 | What a tester can check | Callout "Tutorial advice": a list of advice with no tool fact outside the page | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. |
| 229 | Key words | VPC | none | PASS | How it works / What it is: "A VPC is a virtual network dedicated to your AWS account" |
| 230 | Key words | Subnet | none | PASS | "A subnet is a range of IP addresses in your VPC" and "A subnet must reside in a single Availability Zone" |
| 231 | Key words | CIDR block | none | PASS | "The IP addresses of a VPC are written in Classless Inter-Domain Routing (CIDR) notation" and "between a /16 netmask ... and a /28 netmask" |
| 232 | Key words | Route table | none | PASS | "a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed" |
| 233 | Key words | Internet gateway | none | PASS | "A gateway connects your VPC to another network. For example, an internet gateway connects your VPC to the internet" |
| 234 | Key words | Public subnet | none | PASS | "A subnet that is associated with a route table that has a route to an internet gateway is a public subnet." |
| 235 | Key words | NAT gateway | none | PASS | "A NAT gateway lets instances in a private subnet connect to services outside your VPC" and "External services can't initiate a connection with those instances" |
| 236 | Key words | Security group (stateful) | none | PASS | "controls the traffic that is allowed to reach and leave the resources that it is associated with" and "Security groups are stateful" |
| 237 | Key words | Network ACL (stateless) | none | PASS | "allows or denies specific inbound or outbound traffic at the subnet level" and "Network ACLs are stateless" |
| 238 | Key words | Flow logs | none | PASS | "Flow logs capture information about the IP traffic going to and from network interfaces in your VPC" |
| 239 | Key words | Reachability Analyzer | none | PASS | "a configuration analysis tool for connectivity testing between a source resource and a destination resource in your VPCs" |
| 240 | Key words | Listener | none | PASS | "A listener checks for connection requests from clients, using the protocol and port that you configure" |
| 241 | Key words | Target group | none | PASS | "Each target group routes requests to one or more registered targets, such as EC2 instances" |
| 242 | Key words | Health check | none | PASS | "An Application Load Balancer periodically sends requests to its registered targets to test their status. These tests are called health checks" |
| 243 | Key words | Fail open | none | PASS | "If every target in a target group is unhealthy, the load balancer routes requests to all of them" and "the load balancer fails open" |
| 244 | Key words | Route 53 | none | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service" |
| 245 | Key words | Routing policy | none | PASS | "When you create a record, you choose a routing policy, which determines how Route 53 responds to queries" |
| 246 | Key words | CloudFront | none | PASS | "speeds up distribution of your static and dynamic web content" and "through a worldwide network of data centers called edge locations" |
| 247 | Key words | TTL | none | PASS | "If you opt out of using a cache policy, the default TTL (Time to Live) is 24 hours" |
| 248 | Key words | Invalidation | none | PASS | "To remove a file from the edge caches before it expires, you can invalidate the file" |

Open FAILs after round 8: 0

Open FAILs: 0
