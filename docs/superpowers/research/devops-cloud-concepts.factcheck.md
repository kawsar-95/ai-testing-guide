# Fact check: devops / cloud-concepts

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://aws.amazon.com/what-is-cloud-computing/; S2 https://12factor.net/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / cloud-concepts (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Deployment models, cloud versus traditional IT, and how an app is built for the cloud. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing | S1 | PASS | S1: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." |
| 2 | The twelve-factor app is a methodology for building software-as-a-service apps | S2 | PASS | S2: "The twelve-factor app is a methodology for building software-as-a-service apps that:" |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / cloud-concepts (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "What cloud computing is, and the twelve-factor app. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page. It states no fact about a tool, product, command or number. |
| 2 | Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing | S1 | PASS | S1: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." |
| 3 | The twelve-factor app is a methodology for building software-as-a-service apps | S2 | PASS | S2: "The twelve-factor app is a methodology for building software-as-a-service apps that:" |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / cloud-concepts (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "What cloud computing is, and the twelve-factor app. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It gives no fact about a tool, product, command or number. |
| 1 | Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing | S1 | PASS | S1: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." |
| 2 | The twelve-factor app is a methodology for building software-as-a-service apps | S2 | PASS | S2: "The twelve-factor app is a methodology for building software-as-a-service apps that:" |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / cloud-concepts (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "What cloud computing is, and the twelve-factor app. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line describes the page itself. It gives no fact about a tool, product, command, or number. |
| 1 | Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing | S1 | PASS | S1: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." |
| 2 | The twelve-factor app is a methodology for building software-as-a-service apps | S2 | PASS | S2: "The twelve-factor app is a methodology for building software-as-a-service apps that:" |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 27 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-18)

# Fact check: devops / cloud-concepts (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page scope summary | none | N/A | Describes the page itself. |
| 2 | Lede | Page scope; comes before the four AWS pages (link) | none | N/A | Framing sentence and a site link. |
| 3 | What it is | Cloud computing is on-demand delivery of IT resources over the Internet with pay-as-you-go pricing | S1 | PASS | "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." |
| 4 | What it is | Instead of buying and owning data centers, you access computing power, storage, databases as needed from a provider like AWS | S1 | PASS | "Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS)." |
| 5 | What it is | NIST: model for on-demand network access to a shared pool of configurable computing resources | S3 | PASS | "Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources" |
| 6 | What it is | Resources rapidly provisioned and released with minimal management effort or provider interaction | S3 | PASS | "can be rapidly provisioned and released with minimal management effort or service provider interaction" |
| 7 | What it is | Five essential characteristics, three service models, four deployment models | S3 | PASS | "composed of five essential characteristics, three service models, and four deployment models." |
| 8 | What it is | Three main types: IaaS, PaaS, SaaS | S1 | PASS | "The three main types of cloud computing include Infrastructure as a Service, Platform as a Service, and Software as a Service." |
| 9 | What it is | Definitions vary from company to company | S2 | PASS | "Although definitions vary from company to company" |
| 10 | What it is | IaaS row: basic building blocks, networking, computers, storage | S2 | PASS | "IaaS contains the basic building blocks for cloud IT and typically provides access to networking features, computers (virtual or on dedicated hardware), and data storage space." |
| 11 | What it is | PaaS row: removes need to manage underlying infrastructure so you can focus on applications | S2 | PASS | "PaaS vendors remove the need for organizations to manage the underlying infrastructure (usually hardware and operating systems), and this integration allows you to focus on the deployment and management of your applications." |
| 12 | What it is | SaaS row: software run and managed by vendor; web-based email example | S2 | PASS | "software applications that are run and managed by the vendor" ... "A common example of a SaaS application is web-based email" |
| 13 | What it is | Cloud-based application is fully deployed in the cloud, all parts run there | S2 | PASS | "A cloud-based application is fully deployed in the cloud and all parts of the application run in the cloud." |
| 14 | What it is | Hybrid deployment connects cloud resources with existing non-cloud resources | S2 | PASS | "A hybrid deployment is a way to connect infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud." |
| 15 | What it is | Most common hybrid method connects cloud with on-premises infrastructure | S2 | PASS | "The most common method of hybrid deployment is between the cloud and existing on-premises infrastructure" |
| 16 | What it is | AWS names four benefits | S1 | PASS | S1 "Benefits of cloud computing" lists four headings: "Agility", "Elasticity", "Cost savings", "Deploy globally in minutes". |
| 17 | What it is | Agility: quickly spin up resources as needed | S1 | PASS | "You can quickly spin up resources as you need them" |
| 18 | What it is | Elasticity: as much or as little capacity, scale up and down with a few minutes' notice | S4 | PASS | "You can access as much or as little capacity as you need, and scale up and down as required with only a few minutes’ notice." |
| 19 | What it is | Cost savings: trade fixed for variable expenses, pay only as you consume | S1 | PASS | "The cloud allows you to trade fixed expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it." |
| 20 | What it is | Deploy globally in minutes: expand to new regions | S1 | PASS | "With the cloud, you can expand to new geographic regions and deploy globally in minutes." |
| 21 | What it is | Region: physical location where AWS clusters data centers | S5 | PASS | "AWS has the concept of a Region, which is a physical location around the world where we cluster data centers." |
| 22 | What it is | Each group of logical data centers is an AZ | S5 | PASS | "We call each group of logical data centers an Availability Zone." |
| 23 | What it is | Region has minimum of three isolated, physically separate AZs | S5 | PASS | "Each AWS Region consists of a minimum of three, isolated, and physically separate AZs within a geographic area." |
| 24 | What it is | AZ is one or more discrete data centers with redundant power, networking, connectivity | S5 | PASS | "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region." |
| 25 | What it is | AZs let customers run more available, fault tolerant, scalable apps | S5 | PASS | "AZs give customers the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center." |
| 26 | What it is | Building and operating workloads is a shared responsibility | S6 | PASS | "Building and operating workloads in the cloud is a shared responsibility between AWS and you." |
| 27 | What it is | AWS operates host OS and virtualization layer down to physical security | S6 | PASS | "AWS operates, manages, and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the services run." |
| 28 | What it is | You own guest OS, application software, configuration of AWS resources | S6 | PASS | "You assume responsibility and management of the guest operating system (including updates and security patches), other associated application software, and the configuration of the AWS-provided resources you use." |
| 29 | What it is | Commonly called responsibility of the cloud versus in the cloud | S6 | PASS | "commonly referred to as responsibility of the cloud versus in the cloud" |
| 30 | What it is | Twelve-factor app is a methodology for building SaaS apps that: | S15 | PASS | "The twelve-factor app is a methodology for building software-as-a-service apps that:" |
| 31 | What it is | Declarative formats for setup automation | S15 | PASS | "Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;" |
| 32 | What it is | Clean contract with OS, maximum portability | S15 | PASS | "Have a clean contract with the underlying operating system, offering maximum portability between execution environments;" |
| 33 | What it is | Suitable for modern cloud platforms | S15 | PASS | "Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;" |
| 34 | What it is | Minimize divergence, enable continuous deployment | S15 | PASS | "Minimize divergence between development and production, enabling continuous deployment for maximum agility;" |
| 35 | What it is | Can scale up without significant changes | S15 | PASS | "And can scale up without significant changes to tooling, architecture, or development practices." |
| 36 | What it is | Applies to any language and any combination of backing services | S15 | PASS | "can be applied to apps written in any programming language, and which use any combination of backing services" |
| 37 | What it is | Well-Architected names six pillars | S8 | PASS | "If you neglect the six pillars of operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability" |
| 38 | What it is | Reliability pillar description | S8 | PASS | "Make a workload perform its intended function correctly and consistently, and recover from failures with minimal impact." |
| 39 | What it is | Each pillar organized into capabilities | S8 | PASS | "Each pillar is organized into capabilities, or groupings of related best practices that share a common objective." |
| 40 | How it works | "The diagram is the tutorial's own sketch" and diagram | none | N/A | Page's own sketch, labeled so. Content is supported by rows 41 and 21 to 24. |
| 41 | How it works | Each AZ has independent power, cooling, physical security; redundant ultra-low-latency networks | S5 | PASS | "Each AZ has independent power, cooling, and physical security and is connected via redundant, ultra-low-latency networks." |
| 42 | How it works | All AZs interconnected with high-bandwidth, low-latency networking | S5 | PASS | "All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking" |
| 43 | How it works | All traffic between AZs is encrypted | S5 | PASS | "All traffic between AZs is encrypted." |
| 44 | How it works | AWS protects and operates the infrastructure for all services | S6 | PASS | "AWS is responsible for protecting and operating the infrastructure that runs all of the services offered in the AWS Cloud." |
| 45 | How it works | Infrastructure is hardware, software, networking, facilities | S6 | PASS | "This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services." |
| 46 | How it works | Two-sides sketch (you vs AWS) | none | N/A | Labeled tutorial sketch. Its content is supported by rows 27, 28 and 45. |
| 47 | How it works | Your side depends on the services you choose | S6 | PASS | "Your responsibility is determined by the AWS Cloud services that you select." |
| 48 | How it works | EC2 is IaaS, so customer does all security configuration and management | S7 | PASS | "Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and, as such, requires the customer to perform all of the necessary security configuration and management tasks." |
| 49 | How it works | EC2 customer owns guest OS, installed software, security group | S7 | PASS | "responsible for management of the guest operating system (including updates and security patches), any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance." |
| 50 | How it works | Patch management shared | S7 | PASS | "AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications." |
| 51 | How it works | Configuration management shared | S7 | PASS | "AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications." |
| 52 | How it works | Customer responsibility varies with services, Regions, integration, laws | S7 | PASS | "Customer responsibility varies based on many factors, including the AWS services and Regions they choose, the integration of those services into their IT environment, and the laws and regulations applicable" |
| 53 | How it works | Home page lists the twelve factors; each has a page | none | N/A | Describes the page's own table. Rule cells are checked in rows 54 to 65. |
| 54 | How it works | Factor I rule (S15); sentence (S16) | S15, S16 | PASS | S15 "One codebase tracked in revision control, many deploys". S16 "There is only one codebase per app, but there will be many deploys of the app." |
| 55 | How it works | Factor II | S15, S17 | PASS | S15 "Explicitly declare and isolate dependencies". S17 "A twelve-factor app never relies on implicit existence of system-wide packages." |
| 56 | How it works | Factor III | S15, S18 | PASS | S15 "Store config in the environment". S18 "The twelve-factor app stores config in environment variables" |
| 57 | How it works | Factor IV | S15, S19 | PASS | S15 "Treat backing services as attached resources". S19 "A backing service is any service the app consumes over the network as part of its normal operation." |
| 58 | How it works | Factor V | S15, S20 | PASS | S15 "Strictly separate build and run stages". S20 "The twelve-factor app uses strict separation between the build, release, and run stages." |
| 59 | How it works | Factor VI | S15, S21 | PASS | S15 "Execute the app as one or more stateless processes". S21 "Twelve-factor processes are stateless and share-nothing." |
| 60 | How it works | Factor VII | S15, S22 | PASS | S15 "Export services via port binding". S22 "The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port." |
| 61 | How it works | Factor VIII | S15, S23 | PASS | S15 "Scale out via the process model". S23 "adding more concurrency is a simple and reliable operation" (page capitalizes "Adding"). |
| 62 | How it works | Factor IX | S15, S24 | PASS | S15 "Maximize robustness with fast startup and graceful shutdown". S24 "processes are disposable, meaning they can be started or stopped at a moment’s notice." |
| 63 | How it works | Factor X | S15, S25 | PASS | S15 "Keep development, staging, and production as similar as possible". S25 "The twelve-factor app is designed for continuous deployment by keeping the gap between development and production small." |
| 64 | How it works | Factor XI | S15, S26 | PASS | S15 "Treat logs as event streams". S26 "each running process writes its event stream, unbuffered, to stdout." |
| 65 | How it works | Factor XII | S15, S27 | PASS | S15 "Run admin/management tasks as one-off processes". S27 "One-off admin processes should be run in an identical environment as the regular long-running processes of the app." |
| 66 | How it works | Codebase becomes a deploy through three stages | S20 | PASS | "A codebase is transformed into a (non-development) deploy through three stages:" |
| 67 | How it works | Build stage converts code repo into executable bundle called a build | S20 | PASS | "The build stage is a transform which converts a code repo into an executable bundle known as a build." |
| 68 | How it works | Release stage combines build with current config | S20 | PASS | "The release stage takes the build produced by the build stage and combines it with the deploy’s current config." |
| 69 | How it works | Run stage launches some of the app's processes against a release | S20 | PASS | "runs the app in the execution environment, by launching some set of the app’s processes against a selected release." |
| 70 | How it works | Flow diagram (codebase to processes) | S20 | PASS | Covered by rows 67 to 69 and 71. |
| 71 | How it works | Every release has a unique ID; cannot be mutated; change makes new release | S20 | PASS | "Every release should always have a unique release ID" ... "a release cannot be mutated once it is created. Any change must create a new release." |
| 72 | How it works | App executed as one or more processes | S21 | PASS | "The app is executed in the execution environment as one or more processes." |
| 73 | How it works | Persistent data goes in a stateful backing service | S21 | PASS | "Any data that needs to persist must be stored in a stateful backing service, typically a database." |
| 74 | How it works | App never assumes memory or disk cache is available later | S21 | PASS | "The twelve-factor app never assumes that anything cached in memory or on disk will be available on a future request or job" |
| 75 | How it works | Process type per kind of work; web and worker | S23 | PASS | "assigning each type of work to a process type. For example, HTTP requests may be handled by a web process, and long-running background tasks handled by a worker process." |
| 76 | How it works | Minimize startup time | S24 | PASS | "Processes should strive to minimize startup time." |
| 77 | How it works | Graceful shutdown on SIGTERM | S24 | PASS | "Processes shut down gracefully when they receive a SIGTERM signal from the process manager." |
| 78 | How it works | Web process graceful shutdown steps | S24 | PASS | "graceful shutdown is achieved by ceasing to listen on the service port (thereby refusing any new requests), allowing any current requests to finish, and then exiting." |
| 79 | How it works | Handles unexpected non-graceful terminations | S24 | PASS | "a twelve-factor app is architected to handle unexpected, non-graceful terminations." |
| 80 | How it works | Config is everything likely to vary between deploys | S18 | PASS | "An app’s config is everything that is likely to vary between deploys (staging, production, developer environments, etc)." |
| 81 | How it works | Env vars easy to change without changing code | S18 | PASS | "Env vars are easy to change between deploys without changing any code" |
| 82 | How it works | Logs are aggregated, time-ordered event stream | S26 | PASS | "Logs are the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services." |
| 83 | How it works | App never concerns itself with routing or storage of output | S26 | PASS | "A twelve-factor app never concerns itself with routing or storage of its output stream." |
| 84 | How it works | Execution environment captures and routes streams | S26 | PASS | "In staging or production deploys, each process’ stream will be captured by the execution environment, collated together with all other streams from the app, and routed to one or more final destinations" |
| 85 | Try it | Run record: date, versions, "commands are the tutorial's own choice", no cloud account, output from the run | none | N/A | Record of the page's own practice run. |
| 86 | Try it | Step 1: app.py is the tutorial's own code, about 30 lines, standard library only | none | N/A | Tutorial's own code, labeled "not from a source". |
| 87 | Try it | III. Config: twelve-factor app stores config in env vars | S18 | PASS | "The twelve-factor app stores config in environment variables" |
| 88 | Try it | VII. Port binding | S22 | PASS | "The web app exports HTTP as a service by binding to a port" |
| 89 | Try it | VI. Processes | S21 | PASS | "Twelve-factor processes are stateless and share-nothing." |
| 90 | Try it | XI. Logs | S26 | PASS | "each running process writes its event stream, unbuffered, to stdout." |
| 91 | Try it | IX. Disposability: SIGTERM | S24 | PASS | "Processes shut down gracefully when they receive a SIGTERM signal from the process manager." |
| 92 | Try it | Step 2: a deploy is a running instance of the app | S16 | PASS | "A deploy is a running instance of the app." |
| 93 | Try it | Step 2: commands, `$!`, sleep, curl; output; "count lives in the process" | none | N/A | Reader's steps and the run's own record. |
| 94 | Try it | Step 3: codebase is the same across all deploys | S16 | PASS | "The codebase is the same across all deploys" |
| 95 | Try it | Step 3: output; each process has its own count; processes stateless, share-nothing | S21 | PASS | "Twelve-factor processes are stateless and share-nothing." The output lines are run record (N/A). |
| 96 | Try it | Step 4: SIGTERM graceful shutdown | S24 | PASS | "Processes shut down gracefully when they receive a SIGTERM signal from the process manager." |
| 97 | Try it | Step 4: "`kill -TERM` sends the signal, and `wait` returns the exit status of the process" | none | FAIL | States how `kill` and `wait` work in general, with no cite. The page says these commands are not from a source. Fix: drop the sentence, or say only what the tutorial did ("The tutorial sends SIGTERM with `kill -TERM` and reads the exit status with `wait`"). |
| 98 | Try it | Step 4 output: exit status 0, curl status 7 | none | N/A | Run record. |
| 99 | Try it | Step 5: `>>` append; count restarts at #1 | none | N/A | Run record. |
| 100 | Try it | Step 5: persistent data in a stateful backing service | S21 | PASS | "Any data that needs to persist must be stored in a stateful backing service, typically a database." |
| 101 | Try it | Step 6: each process writes event stream unbuffered to stdout | S26 | PASS | "each running process writes its event stream, unbuffered, to stdout." |
| 102 | Try it | Step 6: stream can be routed to a file or watched via realtime tail | S26 | PASS | "The event stream for an app can be routed to a file, or watched via realtime tail in a terminal." |
| 103 | Try it | Step 6 and 7: log output, descriptions, ports free, delete logs | none | N/A | Run record and reader advice. |
| 104 | How a tester uses it | AWS lists software development and testing among cloud uses | S1 | PASS | "such as data backup, disaster recovery, email, virtual desktops, software development and testing" |
| 105 | How a tester uses it | New IT resources are a click away; weeks to minutes | S4 | PASS | "new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes." |
| 106 | How a tester uses it | Codebase same across deploys, different versions may be active | S16 | PASS | "although different versions may be active in each deploy." |
| 107 | How a tester uses it | Release is build plus config, unique ID | S20 | PASS | "combines it with the deploy’s current config" ... "Every release should always have a unique release ID" |
| 108 | How a tester uses it | Release cannot be mutated | S20 | PASS | "a release cannot be mutated once it is created." |
| 109 | How a tester uses it | Config includes resource handles and per-deploy values such as canonical hostname | S18 | PASS | "Resource handles to the database, Memcached, and other backing services" / "Per-deploy values such as the canonical hostname for the deploy" |
| 110 | How a tester uses it | Deploy should swap local MySQL for third-party (RDS) without code changes | S19 | PASS | "A deploy of the twelve-factor app should be able to swap out a local MySQL database with one managed by a third party (such as Amazon RDS) without any changes to the app’s code." |
| 111 | How a tester uses it | Only the resource handle in the config changes | S19 | PASS | "only the resource handle in the config needs to change." |
| 112 | How a tester uses it | Backing-service differences cause tiny incompatibilities and production failures | S25 | PASS | "Differences between backing services mean that tiny incompatibilities crop up, causing code that worked and passed tests in development or staging to fail in production." |
| 113 | How a tester uses it | All deploys use same type and version of each backing service | S25 | PASS | "all deploys of the app (developer environments, staging, production) should be using the same type and version of each of the backing services." |
| 114 | How a tester uses it | Test environment closely mirrors production so results predict behavior | S10 | PASS | "Your test environment closely mirrors production, so results predict real behavior." |
| 115 | How a tester uses it | Start from SLOs | S10 | PASS | "Start from service-level objectives (SLOs)." |
| 116 | How a tester uses it | SLO states a target for a measurable output | S10 | PASS | "An SLO states a target for a measurable output such as throughput, a latency percentile, or an error rate." |
| 117 | How a tester uses it | SLOs give a clear pass or fail | S10 | PASS | "SLOs give every load test a clear pass or fail outcome" |
| 118 | How a tester uses it | Load tests in pipeline catch regressions before release | S10 | PASS | "Load tests run as part of your delivery pipeline, catching performance regressions before release." |
| 119 | How a tester uses it | Designed for resilience is not proven resilient | S9 | PASS | "A workload designed for resilience is not the same as a workload proven to be resilient." |
| 120 | How a tester uses it | Testing closes the gap | S9 | PASS | "Testing closes the gap between the resilience you designed and the resilience you actually have." |
| 121 | How a tester uses it | Chaos engineering definition | S11 | PASS | "Chaos engineering injects controlled faults into a system to verify that it withstands and recovers from real-world disruptions." |
| 122 | How a tester uses it | Successful experiments become regression tests | S11 | PASS | "Successful experiments become automated regression tests" |
| 123 | How a tester uses it | Game day definition | S12 | PASS | "A game day is a scheduled exercise where your team responds to a simulated failure in a production-like" (environment) |
| 124 | How a tester uses it | Pen tests without prior approval for Permitted Services | S13 | PASS | "AWS customers are welcome to carry out security assessments or penetration tests of their AWS infrastructure without prior approval for the services listed in the next section under “Permitted Services.”" |
| 125 | How a tester uses it | List includes EC2, WAF, NAT, ELB, Lambda | S13 | PASS | "Amazon EC2 instances, WAF, NAT Gateways, and Elastic Load Balancers" ... "AWS Lambda and Lambda Edge functions" |
| 126 | How a tester uses it | C2 testing requires prior approval | S13 | PASS | "All security testing that includes Command and Control (C2) requires prior approval." |
| 127 | How a tester uses it | Network stress test: review Stress Test policy | S13 | PASS | "Customers wishing to perform a Network Stress Test should review our Stress Test policy." |
| 128 | How a tester uses it | From EC2, endpoints hosted in AWS should be in local Region | S14 | PASS | "you should ensure that your endpoints are in the local AWS Region if they are hosted within AWS." |
| 129 | How a tester uses it | Logs give visibility into running app | S26 | PASS | "Logs provide visibility into the behavior of a running app." |
| 130 | How a tester uses it | Log indexing and analysis system can find past events | S26 | PASS | "sent to a log indexing and analysis system such as Splunk" ... "Finding specific events in the past." |
| 131 | How a tester uses it | One-off tasks include migrations and one-time scripts | S27 | PASS | "Running database migrations" / "Running one-time scripts committed into the app’s repo" |
| 132 | How a tester uses it | They run against a release with same codebase and config | S27 | PASS | "They run against a release, using the same codebase and config as any process run against that release." |
| 133 | Common mistakes | Config as constants is a violation | S18 | PASS | "Apps sometimes store config as constants in the code. This is a violation of twelve-factor" |
| 134 | Common mistakes | Litmus test: open source without compromising credentials | S18 | PASS | "whether the codebase could be made open source at any moment, without compromising any credentials." |
| 135 | Common mistakes | Store config in env vars instead | S18 | PASS | "The twelve-factor app stores config in environment variables" |
| 136 | Common mistakes | Grouping by environment name does not scale cleanly | S18 | PASS | "This method does not scale cleanly" |
| 137 | Common mistakes | New names needed; combinatorial explosion | S18 | PASS | "new environment names are necessary, such as staging or qa" ... "resulting in a combinatorial explosion of config" |
| 138 | Common mistakes | Env vars are granular controls, managed independently per deploy | S18 | PASS | "env vars are granular controls, each fully orthogonal to other env vars. They are never grouped together as “environments”, but instead are independently managed for each deploy." |
| 139 | Common mistakes | Developer resists different backing services even with adapters | S25 | PASS | "The twelve-factor developer resists the urge to use different backing services between development and production, even when adapters theoretically abstract away any differences" |
| 140 | Common mistakes | SQLite locally and PostgreSQL in production is the example | S25 | PASS | "For example, using SQLite locally and PostgreSQL in production" |
| 141 | Common mistakes | Sticky sessions are a violation | S21 | PASS | "Sticky sessions are a violation of twelve-factor and should never be used or relied upon." |
| 142 | Common mistakes | Session state suits Memcached or Redis | S21 | PASS | "Session state data is a good candidate for a datastore that offers time-expiration, such as Memcached or Redis." |
| 143 | Common mistakes | App should not write or manage logfiles | S26 | PASS | "It should not attempt to write to or manage logfiles." |
| 144 | Common mistakes | Each process writes event stream unbuffered to stdout | S26 | PASS | "each running process writes its event stream, unbuffered, to stdout." |
| 145 | Common mistakes | Customer owns guest OS incl. updates and patches | S6 | PASS | "You assume responsibility and management of the guest operating system (including updates and security patches)" |
| 146 | Common mistakes | EC2 customer owns software, utilities, security group | S7 | PASS | See row 49. |
| 147 | Common mistakes | Anti-pattern: environments not matching production | S10 | PASS | "Teams test against environments that do not match production in size or configuration." |
| 148 | Common mistakes | Two load-test anti-patterns | S10 | PASS | "Load testing is a one-time activity rather than part of the delivery pipeline." / "Performance requirements are undefined, so tests have no pass or fail criteria." |
| 149 | Common mistakes | Design for resilience but never verify | S11 | PASS | "Teams design for resilience but never verify how the whole workload behaves when faults occur." |
| 150 | Common mistakes | Document recovery procedures but never exercise them | S12 | PASS | "Teams document recovery procedures but never exercise them." |
| 151 | Common mistakes | Engineers-only game day misses coordination | S12 | PASS | "A game day that involves only engineers tests the technology but misses the coordination, decision-making, and communication that are required in real incidents." |
| 152 | Common mistakes | Volumetric DDoS simulations prohibited from EC2 | S14 | PASS | "Volumetric network-based DDoS simulations are explicitly prohibited from the Amazon EC2 platform" |
| 153 | Common mistakes | Overwhelm tests are not network stress tests | S14 | PASS | "Tests that purposefully attempt to overwhelm the target and/or infrastructure with packet or connection flooding attacks ... are not considered network stress tests" |
| 154 | Common mistakes | Customer responsible for damages from testing | S13 | PASS | "you are responsible for any damages to AWS or other AWS customers that are caused by your testing or security assessment activities." |
| 155 | What a tester can check | Callout "Tutorial advice" with ten advice items | none | PASS | Callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It states no tool fact beyond the page. The AWS approval and policy lines match S13 (rows 124 to 127). |
| 156 | Key words | Cloud computing | none | PASS | Page: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing" |
| 157 | Key words | IaaS | none | PASS | Page: "The basic building blocks for cloud IT: typically networking features, computers (virtual or on dedicated hardware), and data storage space" |
| 158 | Key words | PaaS | none | PASS | Page: "It removes the need to manage the underlying infrastructure ..., so that you can focus on the deployment and management of your applications" |
| 159 | Key words | SaaS | none | PASS | Page: "Software applications that are run and managed by the vendor" |
| 160 | Key words | Region | none | PASS | Page: "a physical location around the world where AWS clusters data centers" |
| 161 | Key words | Availability Zone | none | PASS | Page: "An AZ is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region" |
| 162 | Key words | Shared responsibility | none | PASS | Page: "Building and operating workloads in the cloud is a shared responsibility between AWS and you" and "commonly called responsibility of the cloud versus in the cloud" |
| 163 | Key words | Guest operating system: "The operating system of an instance" | none | FAIL | No page sentence defines the guest OS as "the operating system of an instance". The page only says the customer is responsible for "the guest operating system (including updates and security patches)". Fix: "The operating system whose updates and security patches are the customer's responsibility". |
| 164 | Key words | Twelve-factor app | none | PASS | Page: "The twelve-factor app is a methodology for building software-as-a-service apps" |
| 165 | Key words | Deploy | none | PASS | Page: "A deploy is a running instance of the app" |
| 166 | Key words | Config | none | PASS | Page: "An app's config is everything that is likely to vary between deploys" and "The twelve-factor app stores config in environment variables" |
| 167 | Key words | Backing service | none | PASS | Page: "A backing service is any service the app consumes over the network as part of its normal operation" |
| 168 | Key words | Build, release, run | none | PASS | Page: "A codebase is transformed into a deploy through three stages" |
| 169 | Key words | Release | none | PASS | Page: "A release is a build combined with the config of a deploy, and every release has a unique release ID" and "A release cannot be mutated once it is created" |
| 170 | Key words | Stateless process: "A process that keeps no data that must persist" | none | FAIL | The page never defines "stateless" this way. It says "Twelve-factor processes are stateless and share-nothing" and "Any data that needs to persist must be stored in a stateful backing service". Fix: "Twelve-factor processes are stateless and share-nothing; data that needs to persist goes into a stateful backing service". |
| 171 | Key words | SIGTERM | none | PASS | Page: "Processes shut down gracefully when they receive a SIGTERM signal from the process manager" |
| 172 | Key words | Event stream | none | PASS | Page: "Each process writes its event stream, unbuffered, to stdout" |
| 173 | Key words | SLO | none | PASS | Page: "An SLO states a target for a measurable output such as throughput, a latency percentile, or an error rate" |
| 174 | Key words | Chaos engineering | none | PASS | Page: "Chaos engineering injects controlled faults into a system to verify that it withstands and recovers from real-world disruptions" |
| 175 | Key words | Game day | none | PASS | Page: "A game day is a scheduled exercise where the team responds to a simulated failure in a production-like environment" |

Open FAILs after round 6: 3

## Round 7 (2026-11-18)

# Fact check: devops / cloud-concepts (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description / Lede | Description line and lede: what the page covers; link to AWS Compute and Storage | none | N/A | Sentences that describe the page itself, plus a site link. |
| 2 | What it is | Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing | S1 | PASS | S1: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." |
| 3 | What it is | Instead of buying, owning and maintaining data centers and servers, you access computing power, storage, databases as needed from a provider like AWS | S1 | PASS | S1: "Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS)." |
| 4 | What it is | NIST: a model for on-demand network access to a shared pool of configurable computing resources | S3 | PASS | S3: "Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources" |
| 5 | What it is | Resources can be rapidly provisioned and released with minimal management effort or provider interaction | S3 | PASS | S3: "can be rapidly provisioned and released with minimal management effort or service provider interaction" |
| 6 | What it is | Five essential characteristics, three service models, four deployment models | S3 | PASS | S3: "composed of five essential characteristics, three service models, and four deployment models." |
| 7 | What it is | The three main types are IaaS, PaaS, SaaS | S1 | PASS | S1: "The three main types of cloud computing include Infrastructure as a Service, Platform as a Service, and Software as a Service." |
| 8 | What it is | AWS notes definitions vary from company to company | S2 | PASS | S2: "Although definitions vary from company to company" |
| 9 | What it is | IaaS row: basic building blocks; networking, computers (virtual or dedicated), data storage space | S2 | PASS | S2: "IaaS contains the basic building blocks for cloud IT and typically provides access to networking features, computers (virtual or on dedicated hardware), and data storage space." |
| 10 | What it is | PaaS row: removes need to manage underlying infrastructure (usually hardware and OS); focus on deployment and management of apps | S2 | PASS | S2: "PaaS vendors remove the need for organizations to manage the underlying infrastructure (usually hardware and operating systems)... allows you to focus on the deployment and management of your applications." |
| 11 | What it is | SaaS row: applications run and managed by the vendor; web-based email is a common example | S2 | PASS | S2: "software applications that are run and managed by the vendor"; "A common example of a SaaS application is web-based email" |
| 12 | What it is | A cloud-based application is fully deployed in the cloud, all parts run there | S2 | PASS | S2: "A cloud-based application is fully deployed in the cloud and all parts of the application run in the cloud." |
| 13 | What it is | Hybrid deployment connects cloud resources with existing non-cloud resources | S2 | PASS | S2: "A hybrid deployment is a way to connect infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud." |
| 14 | What it is | Most common hybrid method connects cloud with on-premises infrastructure | S2 | PASS | S2: "The most common method of hybrid deployment is between the cloud and existing on-premises infrastructure" |
| 15 | What it is | AWS names four benefits | S1 | PASS | S1 "Benefits of cloud computing" lists exactly: "Agility", "Elasticity", "Cost savings", "Deploy globally in minutes". |
| 16 | What it is | Agility: quickly spin up resources as you need them | S1 | PASS | S1: "You can quickly spin up resources as you need them" |
| 17 | What it is | Elasticity: as much or as little capacity as needed, scale up and down with a few minutes' notice | S4 | PASS | S4: "You can access as much or as little capacity as you need, and scale up and down as required with only a few minutes’ notice." |
| 18 | What it is | Cost savings: trade fixed for variable expenses, pay for IT only as you consume it | S1 | PASS | S1: "trade fixed expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it." |
| 19 | What it is | Deploy globally in minutes: expand to new regions | S1 | PASS | S1: "you can expand to new geographic regions and deploy globally in minutes." |
| 20 | What it is | A Region is a physical location where AWS clusters data centers | S5 | PASS | S5: "a Region, which is a physical location around the world where we cluster data centers." |
| 21 | What it is | Each group of logical data centers is an AZ | S5 | PASS | S5: "We call each group of logical data centers an Availability Zone." |
| 22 | What it is | Each Region has a minimum of three isolated, physically separate AZs within a geographic area | S5 | PASS | S5: "Each AWS Region consists of a minimum of three, isolated, and physically separate AZs ... within a geographic area." |
| 23 | What it is | An AZ is one or more discrete data centers with redundant power, networking, connectivity in a Region | S5 | PASS | S5: "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region." |
| 24 | What it is | AZs allow more highly available, fault tolerant, scalable apps than a single data center | S5 | PASS | S5: "AZs give customers the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center." |
| 25 | What it is | Building and operating workloads is a shared responsibility between AWS and you | S6 | PASS | S6: "Building and operating workloads in the cloud is a shared responsibility between AWS and you." |
| 26 | What it is | AWS operates, manages, controls from host OS and virtualization layer down to physical security | S6 | PASS | S6: "AWS operates, manages, and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the services run." |
| 27 | What it is | You assume guest OS (updates, patches), other application software, configuration of AWS resources | S6 | PASS | S6: "You assume responsibility and management of the guest operating system (including updates and security patches), other associated application software, and the configuration of the AWS-provided resources you use." |
| 28 | What it is | Split is commonly called responsibility of the cloud versus in the cloud | S6 | PASS | S6: "commonly referred to as responsibility of the cloud versus in the cloud." |
| 29 | What it is | Twelve-factor app is a methodology for building SaaS apps | S15 | PASS | S15: "The twelve-factor app is a methodology for building software-as-a-service apps that:" |
| 30 | What it is | Five bullets (declarative formats; clean contract with OS; cloud platforms; minimize divergence; scale up) | S15 | PASS | S15 lists the same five lines, e.g. "Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;" and "And can scale up without significant changes to tooling, architecture, or development practices." |
| 31 | What it is | Methodology applies to any language and any combination of backing services | S15 | PASS | S15: "can be applied to apps written in any programming language, and which use any combination of backing services" |
| 32 | What it is | Well-Architected names six pillars (list) | S8 | PASS | S8: "the six pillars of operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability" |
| 33 | What it is | Reliability pillar: workload performs its intended function correctly and consistently, recovers from failures with minimal impact | S8 | PASS | S8: "Make a workload perform its intended function correctly and consistently, and recover from failures with minimal impact." |
| 34 | What it is | Each pillar is organized into capabilities, groupings of related best practices with a common objective | S8 | PASS | S8: "Each pillar is organized into capabilities, or groupings of related best practices that share a common objective." |
| 35 | How it works | Region/AZ diagram (Region physical location; AZ one or more discrete data centers; own power, cooling, physical security); framing "tutorial's own sketch" | S5 | PASS | Framing is N/A. Contents are covered by the S5 cite in the next sentence: "physical location around the world", "one or more discrete data centers", "Each AZ has independent power, cooling, and physical security". |
| 36 | How it works | Each AZ has independent power, cooling, physical security; connected via redundant, ultra-low-latency networks | S5 | PASS | S5: "Each AZ has independent power, cooling, and physical security and is connected via redundant, ultra-low-latency networks." |
| 37 | How it works | All AZs in a Region are interconnected with high-bandwidth, low-latency networking | S5 | PASS | S5: "All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking" |
| 38 | How it works | All traffic between AZs is encrypted | S5 | PASS | S5: "All traffic between AZs is encrypted." |
| 39 | How it works | AWS protects and operates the infrastructure that runs all services in the AWS Cloud | S6 | PASS | S6: "AWS is responsible for protecting and operating the infrastructure that runs all of the services offered in the AWS Cloud." |
| 40 | How it works | Infrastructure is composed of hardware, software, networking, facilities | S6 | PASS | S6: "This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services." |
| 41 | How it works | Two-sides sketch (you: guest OS, app software, config; AWS: host OS, virtualization, hardware, software, networking, facilities) | S6 | PASS | Framing "tutorial's own sketch" is N/A. Contents match S6 lines 10-15 and 32-33 (quoted in rows 26, 27, 40). |
| 42 | How it works | Your side depends on the services that you choose | S6 | PASS | S6: "Your responsibility is determined by the AWS Cloud services that you select." |
| 43 | How it works | EC2 is IaaS and requires the customer to perform all necessary security configuration and management tasks | S7 | PASS | S7: "Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and, as such, requires the customer to perform all of the necessary security configuration and management tasks." |
| 44 | How it works | EC2 customers are responsible for guest OS, installed software/utilities, and the security group configuration | S7 | PASS | S7: "...utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance." |
| 45 | How it works | Patch management: AWS patches infrastructure, customers patch guest OS and apps | S7 | PASS | S7: "AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications." |
| 46 | How it works | Configuration management split | S7 | PASS | S7: "AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications." |
| 47 | How it works | Customer responsibility varies with services, Regions, integration, laws | S7 | PASS | S7: "Customer responsibility varies based on many factors, including the AWS services and Regions they choose, the integration of those services into their IT environment, and the laws and regulations applicable" |
| 48 | How it works | The home page lists the twelve factors; each factor has its own page | S15 | PASS | S15 has "The Twelve Factors / I. Codebase ... XII. Admin processes". The per-factor pages are S16-S27 in the source list. |
| 49 | How it works | Table, rule column, rows I-XII | S15 | PASS | S15 lists all twelve rule lines. Examples: "One codebase tracked in revision control, many deploys", "Maximize robustness with fast startup and graceful shutdown", "Run admin/management tasks as one-off processes". |
| 50 | How it works | I: only one codebase per app, many deploys | S16 | PASS | S16: "There is only one codebase per app, but there will be many deploys of the app." |
| 51 | How it works | II: never relies on implicit existence of system-wide packages | S17 | PASS | S17: "A twelve-factor app never relies on implicit existence of system-wide packages." |
| 52 | How it works | III: stores config in environment variables | S18 | PASS | S18: "The twelve-factor app stores config in environment variables" |
| 53 | How it works | IV: backing service definition | S19 | PASS | S19: "A backing service is any service the app consumes over the network as part of its normal operation." |
| 54 | How it works | V: strict separation of build, release, run | S20 | PASS | S20: "The twelve-factor app uses strict separation between the build, release, and run stages." |
| 55 | How it works | VI: processes are stateless and share-nothing | S21 | PASS | S21: "Twelve-factor processes are stateless and share-nothing." |
| 56 | How it works | VII: exports HTTP by binding to a port | S22 | PASS | S22: "The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port." |
| 57 | How it works | VIII: adding concurrency is simple and reliable | S23 | PASS | S23: "adding more concurrency is a simple and reliable operation" |
| 58 | How it works | IX: processes are disposable, started or stopped at a moment's notice | S24 | PASS | S24: "The twelve-factor app’s processes are disposable, meaning they can be started or stopped at a moment’s notice." |
| 59 | How it works | X: designed for continuous deployment by keeping the dev/prod gap small | S25 | PASS | S25: "The twelve-factor app is designed for continuous deployment by keeping the gap between development and production small." |
| 60 | How it works | XI: each process writes its event stream, unbuffered, to stdout | S26 | PASS | S26: "each running process writes its event stream, unbuffered, to stdout." |
| 61 | How it works | XII: one-off admin processes run in an identical environment | S27 | PASS | S27: "One-off admin processes should be run in an identical environment as the regular long-running processes of the app." |
| 62 | How it works | A codebase is transformed into a deploy through three stages | S20 | PASS | S20: "A codebase is transformed into a (non-development) deploy through three stages:" |
| 63 | How it works | Build stage converts a code repo into an executable bundle called a build | S20 | PASS | S20: "converts a code repo into an executable bundle known as a build." |
| 64 | How it works | Release stage combines build with deploy's current config | S20 | PASS | S20: "combines it with the deploy’s current config." |
| 65 | How it works | Run stage launches some set of processes against a selected release | S20 | PASS | S20: "by launching some set of the app’s processes against a selected release." |
| 66 | How it works | Pipeline diagram: codebase → build → (+config) → release (unique ID) → processes | S20 | PASS | Matches rows 62-65 and row 67. |
| 67 | How it works | Every release should always have a unique release ID | S20 | PASS | S20: "Every release should always have a unique release ID" |
| 68 | How it works | A release cannot be mutated; any change must create a new release | S20 | PASS | S20: "a release cannot be mutated once it is created. Any change must create a new release." |
| 69 | How it works | The app is executed as one or more processes | S21 | PASS | S21: "The app is executed in the execution environment as one or more processes." |
| 70 | How it works | Persistent data must be in a stateful backing service, typically a database | S21 | PASS | S21: "Any data that needs to persist must be stored in a stateful backing service, typically a database." |
| 71 | How it works | The app never assumes in-memory or on-disk cache will be available on a future request or job | S21 | PASS | S21: "never assumes that anything cached in memory or on disk will be available on a future request or job" |
| 72 | How it works | Process types: web process for HTTP, worker for background tasks | S23 | PASS | S23: "HTTP requests may be handled by a web process, and long-running background tasks handled by a worker process." |
| 73 | How it works | Processes should strive to minimize startup time | S24 | PASS | S24: "Processes should strive to minimize startup time." |
| 74 | How it works | Processes shut down gracefully on SIGTERM from the process manager | S24 | PASS | S24: "Processes shut down gracefully when they receive a SIGTERM signal from the process manager." |
| 75 | How it works | Web process graceful shutdown: stop listening, finish current requests, exit | S24 | PASS | S24: "ceasing to listen on the service port ..., allowing any current requests to finish, and then exiting." |
| 76 | How it works | App is architected to handle unexpected, non-graceful terminations | S24 | PASS | S24: "a twelve-factor app is architected to handle unexpected, non-graceful terminations." |
| 77 | How it works | Config is everything likely to vary between deploys | S18 | PASS | S18: "An app’s config is everything that is likely to vary between deploys (staging, production, developer environments, etc)." |
| 78 | How it works | Env vars are easy to change between deploys without code changes | S18 | PASS | S18: "Env vars are easy to change between deploys without changing any code" |
| 79 | How it works | Logs are the stream of aggregated, time-ordered events from all processes and backing services | S26 | PASS | S26: "Logs are the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services." |
| 80 | How it works | App never concerns itself with routing or storage of its output stream | S26 | PASS | S26: "A twelve-factor app never concerns itself with routing or storage of its output stream." |
| 81 | How it works | In staging/production the environment captures each stream and routes it to final destinations | S26 | PASS | S26: "each process’ stream will be captured by the execution environment ... and routed to one or more final destinations" |
| 82 | Try it | Run record (date, versions, "no cloud account", tools are tutorial's choice, "about 30 lines", app code, outputs, step narration) | none | N/A | Tutorial's own run and own code. Side note: `app.py` has about 39 lines, not "about 30". This is not a source fact. |
| 83 | Try it | III Config bullet: "The twelve-factor app stores config in environment variables" | S18 | PASS | See row 52. |
| 84 | Try it | VII bullet: web app exports HTTP by binding to a port | S22 | PASS | See row 56. |
| 85 | Try it | VI bullet: processes are stateless and share-nothing | S21 | PASS | See row 55. |
| 86 | Try it | XI bullet: each process writes its event stream, unbuffered, to stdout | S26 | PASS | See row 60. |
| 87 | Try it | IX bullet: graceful shutdown on SIGTERM | S24 | PASS | See row 74. |
| 88 | Try it | A deploy is a running instance of the app | S16 | PASS | S16: "A deploy is a running instance of the app." |
| 89 | Try it | Step 3: the codebase is the same across all deploys | S16 | PASS | S16: "The codebase is the same across all deploys" |
| 90 | Try it | Step 3 end: twelve-factor processes are stateless and share-nothing | S21 | PASS | See row 55. |
| 91 | Try it | Step 4: graceful shutdown on SIGTERM; the tutorial plays the process manager | S24 | PASS | See row 74. The "tutorial plays the process manager" part is N/A. |
| 92 | Try it | Step 5: persistent data goes in a stateful backing service, typically a database | S21 | PASS | See row 70. |
| 93 | Try it | Step 6: each process writes event stream, unbuffered, to stdout | S26 | PASS | See row 60. |
| 94 | Try it | Step 6: event stream can be routed to a file or watched via realtime tail | S26 | PASS | S26: "The event stream for an app can be routed to a file, or watched via realtime tail in a terminal." |
| 95 | How a tester uses it | AWS lists software development and testing among cloud uses | S1 | PASS | S1: "such as data backup, disaster recovery, email, virtual desktops, software development and testing" |
| 96 | How a tester uses it | New IT resources are a click away; time from weeks to minutes | S4 | PASS | S4: "new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes." |
| 97 | How a tester uses it | Codebase same across all deploys, different versions may be active | S16 | PASS | S16: "The codebase is the same across all deploys, although different versions may be active in each deploy." |
| 98 | How a tester uses it | A release is a build combined with the config of a deploy, and every release has a unique release ID | S20 | FAIL | S20 says "Every release should always have a unique release ID". The page drops "should always" and states it as a fact. Fix: "every release should always have a unique release ID". |
| 99 | How a tester uses it | A release cannot be mutated once created | S20 | PASS | See row 68. |
| 100 | How a tester uses it | Config includes resource handles to database/backing services and per-deploy values like canonical hostname | S18 | PASS | S18: "Resource handles to the database, Memcached, and other backing services"; "Per-deploy values such as the canonical hostname for the deploy" |
| 101 | How a tester uses it | A deploy should be able to swap a local MySQL for a third-party one such as RDS without code changes | S19 | PASS | S19: "should be able to swap out a local MySQL database with one managed by a third party (such as Amazon RDS) without any changes to the app’s code." |
| 102 | How a tester uses it | Only the resource handle in the config needs to change | S19 | PASS | S19: "only the resource handle in the config needs to change." |
| 103 | How a tester uses it | Backing-service differences cause tiny incompatibilities; code that passed in dev/staging fails in production | S25 | PASS | S25: "Differences between backing services mean that tiny incompatibilities crop up, causing code that worked and passed tests in development or staging to fail in production." |
| 104 | How a tester uses it | All deploys should use the same type and version of each backing service | S25 | PASS | S25: "all deploys of the app (developer environments, staging, production) should be using the same type and version of each of the backing services." |
| 105 | How a tester uses it | AWS guidance asks for a test environment closely mirroring production so results predict real behavior | S10 | PASS | S10: "Your test environment closely mirrors production, so results predict real behavior." |
| 106 | How a tester uses it | Start from SLOs | S10 | PASS | S10: "Start from service-level objectives (SLOs)." |
| 107 | How a tester uses it | SLO states a target for a measurable output such as throughput, latency percentile, error rate | S10 | PASS | S10: "An SLO states a target for a measurable output such as throughput, a latency percentile, or an error rate." |
| 108 | How a tester uses it | SLOs give every load test a clear pass or fail outcome | S10 | PASS | S10: "SLOs give every load test a clear pass or fail outcome" |
| 109 | How a tester uses it | Load tests in the delivery pipeline catch performance regressions before release | S10 | PASS | S10: "Load tests run as part of your delivery pipeline, catching performance regressions before release." |
| 110 | How a tester uses it | A workload designed for resilience is not the same as one proven resilient | S9 | PASS | S9: "A workload designed for resilience is not the same as a workload proven to be resilient." |
| 111 | How a tester uses it | Testing closes the gap between designed and actual resilience | S9 | PASS | S9: "Testing closes the gap between the resilience you designed and the resilience you actually have." |
| 112 | How a tester uses it | Chaos engineering injects controlled faults to verify the system withstands and recovers | S11 | PASS | S11: "Chaos engineering injects controlled faults into a system to verify that it withstands and recovers from real-world disruptions." |
| 113 | How a tester uses it | Successful experiments become automated regression tests | S11 | PASS | S11: "Successful experiments become automated regression tests" |
| 114 | How a tester uses it | Game day is a scheduled exercise responding to a simulated failure in a production-like environment | S12 | PASS | S12: "A game day is a scheduled exercise where your team responds to a simulated failure in a production-like" |
| 115 | How a tester uses it | Customers may do security assessments/pen tests without prior approval for Permitted Services | S13 | PASS | S13: "AWS customers are welcome to carry out security assessments or penetration tests of their AWS infrastructure without prior approval for the services listed ... under “Permitted Services.”" |
| 116 | How a tester uses it | List includes EC2 instances, WAF, NAT Gateways, ELB, Lambda functions | S13 | PASS | S13: "Amazon EC2 instances, WAF, NAT Gateways, and Elastic Load Balancers"; "AWS Lambda and Lambda Edge functions" |
| 117 | How a tester uses it | Security testing that includes C2 requires prior approval | S13 | PASS | S13: "All security testing that includes Command and Control (C2) requires prior approval." |
| 118 | How a tester uses it | Network stress test: review the Stress Test policy | S13 | PASS | S13: "Customers wishing to perform a Network Stress Test should review our Stress Test policy." |
| 119 | How a tester uses it | EC2 network stress test: endpoints hosted in AWS should be in the local Region | S14 | PASS | S14: "you should ensure that your endpoints are in the local AWS Region if they are hosted within AWS." |
| 120 | How a tester uses it | Logs provide visibility into the behavior of a running app | S26 | PASS | S26: "Logs provide visibility into the behavior of a running app." |
| 121 | How a tester uses it | A log indexing and analysis system can find specific events in the past | S26 | PASS | S26: "sent to a log indexing and analysis system such as Splunk"; "Finding specific events in the past." |
| 122 | How a tester uses it | One-off admin tasks include DB migrations and one-time scripts committed in the repo | S27 | PASS | S27: "Running database migrations"; "Running one-time scripts committed into the app’s repo" |
| 123 | How a tester uses it | They run against a release, with the same codebase and config as any process of that release | S27 | PASS | S27: "They run against a release, using the same codebase and config as any process run against that release." |
| 124 | Common mistakes | Config as constants in code violates twelve-factor | S18 | PASS | S18: "Apps sometimes store config as constants in the code. This is a violation of twelve-factor" |
| 125 | Common mistakes | Litmus test: could the codebase be open source at any moment without compromising credentials | S18 | PASS | S18: "whether the codebase could be made open source at any moment, without compromising any credentials." |
| 126 | Common mistakes | Store config in environment variables instead | S18 | PASS | See row 52. |
| 127 | Common mistakes | Grouping config by environment name does not scale cleanly | S18 | PASS | S18: "This method does not scale cleanly" |
| 128 | Common mistakes | New names such as staging or qa needed; combinatorial explosion of config | S18 | PASS | S18: "new environment names are necessary, such as staging or qa ... resulting in a combinatorial explosion of config" |
| 129 | Common mistakes | Env vars are granular controls, independently managed per deploy | S18 | PASS | S18: "env vars are granular controls ... independently managed for each deploy." |
| 130 | Common mistakes | Developer resists using different backing services in dev and prod, even with adapters | S25 | PASS | S25: "resists the urge to use different backing services between development and production, even when adapters theoretically abstract away any differences" |
| 131 | Common mistakes | SQLite locally and PostgreSQL in production is the docs' example | S25 | PASS | S25: "For example, using SQLite locally and PostgreSQL in production" |
| 132 | Common mistakes | Sticky sessions violate twelve-factor, never use or rely on them | S21 | PASS | S21: "Sticky sessions are a violation of twelve-factor and should never be used or relied upon." |
| 133 | Common mistakes | Session state suits a datastore with time-expiration, such as Memcached or Redis | S21 | PASS | S21: "Session state data is a good candidate for a datastore that offers time-expiration, such as Memcached or Redis." |
| 134 | Common mistakes | App should not attempt to write to or manage logfiles | S26 | PASS | S26: "It should not attempt to write to or manage logfiles." |
| 135 | Common mistakes | Each process writes its event stream, unbuffered, to stdout instead | S26 | PASS | See row 60. |
| 136 | Common mistakes | Customers assume responsibility for guest OS incl. updates and patches | S6 | PASS | See row 27. |
| 137 | Common mistakes | EC2 customer also responsible for installed app software/utilities and security group config | S7 | PASS | See row 44. |
| 138 | Common mistakes | Anti-pattern: test against environments that do not match production in size or configuration | S10 | PASS | S10: "Teams test against environments that do not match production in size or configuration." |
| 139 | Common mistakes | Anti-patterns: one-time load testing not in the pipeline | S10 | PASS | S10: "Load testing is a one-time activity rather than part of the delivery pipeline." |
| 140 | Common mistakes | Anti-pattern: undefined performance requirements, no pass/fail criteria | S10 | PASS | S10: "Performance requirements are undefined, so tests have no pass or fail criteria." |
| 141 | Common mistakes | Teams design for resilience but never verify whole-workload behavior under faults | S11 | PASS | S11: "Teams design for resilience but never verify how the whole workload" |
| 142 | Common mistakes | Teams document recovery procedures but never exercise them | S12 | PASS | S12: "Teams document recovery procedures but never exercise them." |
| 143 | Common mistakes | Engineer-only game day misses coordination, decision-making, communication | S12 | PASS | S12: "A game day that involves only engineers tests the technology but misses the coordination, decision-making, and communication" |
| 144 | Common mistakes | Volumetric DDoS simulations explicitly prohibited from EC2 | S14 | PASS | S14: "Volumetric network-based DDoS simulations are explicitly prohibited from the Amazon EC2 platform" |
| 145 | Common mistakes | Tests that purposefully overwhelm the target with flooding are not network stress tests | S14 | PASS | S14: "Tests that purposefully attempt to overwhelm the target and/or infrastructure with packet or connection flooding attacks ... are not considered network stress tests" |
| 146 | Common mistakes | Customer is responsible for damages to AWS or other customers caused by their testing | S13 | PASS | S13: "you are responsible for any damages to AWS or other AWS customers that are caused by your testing or security assessment activities." |
| 147 | What a tester can check | Callout "Tutorial advice": the list is the tutorial's own advice | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact beyond what the page supports (S10, S11, S12, S13, S14 cover the policy, SLO and failure items). |
| 148 | Key words | Cloud computing | none | PASS | Page: "on-demand delivery of IT resources over the Internet with pay-as-you-go pricing" (row 2). |
| 149 | Key words | IaaS | none | PASS | Page IaaS row (row 9). |
| 150 | Key words | PaaS | none | PASS | Page PaaS row (row 10). |
| 151 | Key words | SaaS | none | PASS | Page SaaS row (row 11). |
| 152 | Key words | Region | none | PASS | Page: "a physical location around the world where AWS clusters data centers". |
| 153 | Key words | Availability Zone (AZ) | none | PASS | Page: "one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region". |
| 154 | Key words | Shared responsibility | none | PASS | Page: "a shared responsibility between AWS and you"; "responsibility of the cloud versus in the cloud". |
| 155 | Key words | Guest operating system | none | PASS | Page: "You assume responsibility for the guest operating system (including updates and security patches)". The EC2 sentence matches. |
| 156 | Key words | Twelve-factor app | none | PASS | Page: "a methodology for building software-as-a-service apps". |
| 157 | Key words | Deploy | none | PASS | Page: "A deploy is a running instance of the app". |
| 158 | Key words | Config | none | PASS | Page: "everything that is likely to vary between deploys"; "stores config in environment variables". |
| 159 | Key words | Backing service | none | PASS | Page: "any service the app consumes over the network as part of its normal operation". |
| 160 | Key words | Build, release, run | none | PASS | Page: "A codebase is transformed into a deploy through three stages". |
| 161 | Key words | Release: "has a unique release ID" and "cannot be mutated" | none | FAIL | The page gives "should always have a unique release ID" (S20). "has" is stronger. Fix: "it should always have a unique release ID and cannot be mutated once it is created". |
| 162 | Key words | Stateless process | none | PASS | Page: "Twelve-factor processes are stateless and share-nothing"; "Any data that needs to persist must be stored in a stateful backing service". |
| 163 | Key words | SIGTERM | none | PASS | Page: "Processes shut down gracefully when they receive a SIGTERM signal from the process manager". |
| 164 | Key words | Event stream | none | PASS | Page: "Each process writes its event stream, unbuffered, to stdout". |
| 165 | Key words | SLO | none | PASS | Page: "An SLO states a target for a measurable output such as throughput, a latency percentile, or an error rate". |
| 166 | Key words | Chaos engineering | none | PASS | Page: "injects controlled faults into a system to verify that it withstands and recovers from real-world disruptions". |
| 167 | Key words | Game day | none | PASS | Page: "a scheduled exercise where the team responds to a simulated failure in a production-like environment". |

Open FAILs after round 7: 2

## Round 8 (2026-11-18)

# Fact check: devops / cloud-concepts (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Framing: what the page covers | none | N/A | Describes the page itself. |
| 2 | Lede | Framing; the link to /devops/aws-compute-storage/ is a site link | none | N/A | Describes the page and links to another page. |
| 3 | What it is | Cloud computing is on-demand delivery of IT resources over the Internet with pay-as-you-go pricing | S1 | PASS | "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." |
| 4 | What it is | Instead of buying and owning data centers, you access computing power, storage, databases as needed from a provider like AWS | S1 | PASS | "Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS)." |
| 5 | What it is | NIST: model for on-demand network access to a shared pool of configurable computing resources | S3 | PASS | "Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources" |
| 6 | What it is | Resources can be rapidly provisioned and released with minimal management effort or provider interaction | S3 | PASS | "...that can be rapidly provisioned and released with minimal management effort or service provider interaction." |
| 7 | What it is | Five essential characteristics, three service models, four deployment models | S3 | PASS | "This cloud model is composed of five essential characteristics, three service models, and four deployment models." |
| 8 | What it is | Three main types: IaaS, PaaS, SaaS | S1 | PASS | "The three main types of cloud computing include Infrastructure as a Service, Platform as a Service, and Software as a Service." |
| 9 | What it is | AWS notes definitions vary from company to company | S2 | PASS | "Although definitions vary from company to company, traditionally there have been three main models for cloud computing." |
| 10 | What it is | IaaS row: networking features, computers (virtual or dedicated hardware), data storage space | S2 | PASS | "IaaS contains the basic building blocks for cloud IT and typically provides access to networking features, computers (virtual or on dedicated hardware), and data storage space." |
| 11 | What it is | PaaS row: removes need to manage underlying infrastructure; focus on deployment and management of applications | S2 | PASS | "PaaS vendors remove the need for organizations to manage the underlying infrastructure (usually hardware and operating systems), and this integration allows you to focus on the deployment and management of your applications." |
| 12 | What it is | SaaS row: applications run and managed by the vendor; web-based email example | S2 | PASS | "SaaS vendors provide you with software applications that are run and managed by the vendor." ... "A common example of a SaaS application is web-based email" |
| 13 | What it is | A cloud-based application is fully deployed in the cloud; all parts run there | S2 | PASS | "A cloud-based application is fully deployed in the cloud and all parts of the application run in the cloud." |
| 14 | What it is | Hybrid connects cloud resources with existing resources not in the cloud | S2 | PASS | "A hybrid deployment is a way to connect infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud." |
| 15 | What it is | Most common hybrid method connects the cloud with on-premises infrastructure | S2 | PASS | "The most common method of hybrid deployment is between the cloud and existing on-premises infrastructure" |
| 16 | What it is | AWS names four benefits | S1 | PASS | S1 "Benefits of cloud computing" lists four headings: "Agility", "Elasticity", "Cost savings", "Deploy globally in minutes". |
| 17 | What it is | Agility: quickly spin up resources as you need them | S1 | PASS | "You can quickly spin up resources as you need them" |
| 18 | What it is | Elasticity: as much or as little capacity; scale up and down with a few minutes' notice | S4 | PASS | "You can access as much or as little capacity as you need, and scale up and down as required with only a few minutes' notice." |
| 19 | What it is | Cost savings: trade fixed for variable expenses; pay only as you consume | S1 | PASS | "The cloud allows you to trade fixed expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it." |
| 20 | What it is | Deploy globally: expand to new geographic regions and deploy globally in minutes | S1 | PASS | "With the cloud, you can expand to new geographic regions and deploy globally in minutes." |
| 21 | What it is | A Region is a physical location where AWS clusters data centers | S5 | PASS | "AWS has the concept of a Region, which is a physical location around the world where we cluster data centers." |
| 22 | What it is | Each group of logical data centers is an AZ | S5 | PASS | "We call each group of logical data centers an Availability Zone." |
| 23 | What it is | Each Region has a minimum of three isolated, physically separate AZs in a geographic area | S5 | PASS | "Each AWS Region consists of a minimum of three, isolated, and physically separate AZs within a geographic area." |
| 24 | What it is | An AZ is one or more discrete data centers with redundant power, networking, connectivity in a Region | S5 | PASS | "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region." |
| 25 | What it is | AZs allow more highly available, fault tolerant, scalable apps than a single data center | S5 | PASS | "AZs give customers the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center." |
| 26 | What it is | Building and operating workloads in the cloud is a shared responsibility | S6 | PASS | "Building and operating workloads in the cloud is a shared responsibility between AWS and you." |
| 27 | What it is | AWS operates, manages, controls from host OS and virtualization layer down to physical security | S6 | PASS | "AWS operates, manages, and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the services run." |
| 28 | What it is | You assume the guest OS (updates, patches), other application software, configuration of AWS-provided resources | S6 | PASS | "You assume responsibility and management of the guest operating system (including updates and security patches), other associated application software, and the configuration of the AWS-provided resources you use." |
| 29 | What it is | Split commonly called responsibility of the cloud versus in the cloud | S6 | PASS | "...commonly referred to as responsibility of the cloud versus in the cloud." |
| 30 | What it is | Twelve-factor app is a methodology for building SaaS apps that: | S15 | PASS | "The twelve-factor app is a methodology for building software-as-a-service apps that:" |
| 31 | What it is | Declarative formats for setup automation, minimize time and cost for new developers | S15 | PASS | "Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;" |
| 32 | What it is | Clean contract with the OS, maximum portability | S15 | PASS | "Have a clean contract with the underlying operating system, offering maximum portability between execution environments;" |
| 33 | What it is | Suitable for modern cloud platforms, obviating servers and systems administration | S15 | PASS | "Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;" |
| 34 | What it is | Minimize divergence between dev and prod, enabling continuous deployment | S15 | PASS | "Minimize divergence between development and production, enabling continuous deployment for maximum agility;" |
| 35 | What it is | Can scale up without significant changes to tooling, architecture, development practices | S15 | PASS | "And can scale up without significant changes to tooling, architecture, or development practices." |
| 36 | What it is | Methodology applies to any language and any combination of backing services | S15 | PASS | "The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services" |
| 37 | What it is | Well-Architected has six pillars (names listed) | S8 | PASS | "six pillars of operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability" |
| 38 | What it is | Reliability pillar: intended function correctly and consistently, recover from failures with minimal impact | S8 | PASS | "Make a workload perform its intended function correctly and consistently, and recover from failures with minimal impact." |
| 39 | What it is | Each pillar is organized into capabilities, groupings of related best practices with a common objective | S8 | PASS | "Each pillar is organized into capabilities, or groupings of related best practices that share a common objective." |
| 40 | How it works | Diagram is the tutorial's own sketch | none | N/A | Self-labelled sketch; its AZ facts are covered by row 41. |
| 41 | How it works | Each AZ has independent power, cooling, physical security; connected via redundant ultra-low-latency networks | S5 | PASS | "Each AZ has independent power, cooling, and physical security and is connected via redundant, ultra-low-latency networks." |
| 42 | How it works | All AZs in a Region interconnected with high-bandwidth, low-latency networking | S5 | PASS | "All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking" |
| 43 | How it works | All traffic between AZs is encrypted | S5 | PASS | "All traffic between AZs is encrypted." |
| 44 | How it works | AWS protects and operates the infrastructure that runs all services | S6 | PASS | "AWS is responsible for protecting and operating the infrastructure that runs all of the services offered in the AWS Cloud." |
| 45 | How it works | Infrastructure = hardware, software, networking, facilities | S6 | PASS | "This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services." |
| 46 | How it works | Two-sides sketch | none | N/A | Self-labelled tutorial sketch; its content matches S6 lines 10-15 and 30-33. |
| 47 | How it works | Your side depends on the services you choose | S6 | PASS | "Your responsibility is determined by the AWS Cloud services that you select." |
| 48 | How it works | EC2 is IaaS, so the customer does all necessary security configuration and management tasks | S7 | PASS | "Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and, as such, requires the customer to perform all of the necessary security configuration and management tasks." |
| 49 | How it works | EC2 customers: guest OS, installed software, security group firewall config | S7 | PASS | "Customers that deploy an Amazon EC2 instance are responsible for management of the guest operating system (including updates and security patches), any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance." |
| 50 | How it works | Some controls are shared; patch management split | S7 | PASS | "Shared Controls" ... "Patch Management – AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications." |
| 51 | How it works | Configuration management split | S7 | PASS | "Configuration Management – AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications." |
| 52 | How it works | Customer responsibility varies with services, Regions, integration, laws | S7 | PASS | "Customer responsibility varies based on many factors, including the AWS services and Regions they choose, the integration of those services into their IT environment, and the laws and regulations applicable to their organization and workload." |
| 53 | How it works | The home page lists the twelve factors; each has its own page | S15 (table cites) | PASS | The table cites cover it. S15 lists the twelve rules, e.g. "One codebase tracked in revision control, many deploys" ... "Run admin/management tasks as one-off processes". |
| 54 | How it works | I Codebase: rule and sentence | S15, S16 | PASS | S15 "One codebase tracked in revision control, many deploys"; S16 "There is only one codebase per app, but there will be many deploys of the app." |
| 55 | How it works | II Dependencies | S15, S17 | PASS | S15 "Explicitly declare and isolate dependencies"; S17 "A twelve-factor app never relies on implicit existence of system-wide packages." |
| 56 | How it works | III Config | S15, S18 | PASS | S15 "Store config in the environment"; S18 "The twelve-factor app stores config in environment variables" |
| 57 | How it works | IV Backing services | S15, S19 | PASS | S15 "Treat backing services as attached resources"; S19 "A backing service is any service the app consumes over the network as part of its normal operation." |
| 58 | How it works | V Build, release, run | S15, S20 | PASS | S15 "Strictly separate build and run stages"; S20 "The twelve-factor app uses strict separation between the build, release, and run stages." |
| 59 | How it works | VI Processes | S15, S21 | PASS | S15 "Execute the app as one or more stateless processes"; S21 "Twelve-factor processes are stateless and share-nothing." |
| 60 | How it works | VII Port binding | S15, S22 | PASS | S15 "Export services via port binding"; S22 "The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port." |
| 61 | How it works | VIII Concurrency | S15, S23 | PASS | S15 "Scale out via the process model"; S23 "adding more concurrency is a simple and reliable operation" |
| 62 | How it works | IX Disposability | S15, S24 | PASS | S15 "Maximize robustness with fast startup and graceful shutdown"; S24 "processes are disposable, meaning they can be started or stopped at a moment's notice" |
| 63 | How it works | X Dev/prod parity | S15, S25 | PASS | S15 "Keep development, staging, and production as similar as possible"; S25 "The twelve-factor app is designed for continuous deployment by keeping the gap between development and production small." |
| 64 | How it works | XI Logs | S15, S26 | PASS | S15 "Treat logs as event streams"; S26 "each running process writes its event stream, unbuffered, to stdout." |
| 65 | How it works | XII Admin processes | S15, S27 | PASS | S15 "Run admin/management tasks as one-off processes"; S27 "One-off admin processes should be run in an identical environment as the regular long-running processes of the app." |
| 66 | How it works | A codebase becomes a deploy through three stages | S20 | PASS | "A codebase is transformed into a (non-development) deploy through three stages:" |
| 67 | How it works | Build stage converts a code repo into an executable bundle called a build | S20 | PASS | "converts a code repo into an executable bundle known as a build" |
| 68 | How it works | Release stage combines build with the deploy's current config | S20 | PASS | "takes the build produced by the build stage and combines it with the deploy's current config" |
| 69 | How it works | Run stage launches some set of the app's processes against a selected release | S20 | PASS | "by launching some set of the app's processes against a selected release." |
| 70 | How it works | Flow code block: codebase → build → (+config) → release (unique ID) → processes | S20 | PASS | Matches rows 67-69 and "Every release should always have a unique release ID". |
| 71 | How it works | Every release should always have a unique release ID | S20 | PASS | "Every release should always have a unique release ID" |
| 72 | How it works | A release cannot be mutated; any change makes a new release | S20 | PASS | "a release cannot be mutated once it is created. Any change must create a new release." |
| 73 | How it works | App is executed as one or more processes | S21 | PASS | "The app is executed in the execution environment as one or more processes." |
| 74 | How it works | Persistent data goes in a stateful backing service, typically a database | S21 | PASS | "Any data that needs to persist must be stored in a stateful backing service, typically a database." |
| 75 | How it works | App never assumes memory/disk cache is available on a future request | S21 | PASS | "The twelve-factor app never assumes that anything cached in memory or on disk will be available on a future request or job" |
| 76 | How it works | Each type of work gets a process type; web and worker examples | S23 | PASS | "assigning each type of work to a process type. For example, HTTP requests may be handled by a web process, and long-running background tasks handled by a worker process." |
| 77 | How it works | Processes should minimize startup time | S24 | PASS | "Processes should strive to minimize startup time." |
| 78 | How it works | Graceful shutdown on SIGTERM from the process manager | S24 | PASS | "Processes shut down gracefully when they receive a SIGTERM signal from the process manager." |
| 79 | How it works | Web process: cease listening, finish current requests, exit | S24 | PASS | "graceful shutdown is achieved by ceasing to listen on the service port (thereby refusing any new requests), allowing any current requests to finish, and then exiting." |
| 80 | How it works | App is architected to handle unexpected non-graceful terminations | S24 | PASS | "a twelve-factor app is architected to handle unexpected, non-graceful terminations." |
| 81 | How it works | Config is everything likely to vary between deploys | S18 | PASS | "An app's config is everything that is likely to vary between deploys (staging, production, developer environments, etc)." |
| 82 | How it works | Env vars are easy to change between deploys without code change | S18 | PASS | "Env vars are easy to change between deploys without changing any code" |
| 83 | How it works | Logs are the stream of aggregated, time-ordered events from all processes and backing services | S26 | PASS | "Logs are the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services." |
| 84 | How it works | App never concerns itself with routing or storage of its output stream | S26 | PASS | "A twelve-factor app never concerns itself with routing or storage of its output stream." |
| 85 | How it works | In staging/production the environment captures each stream and routes it to final destinations | S26 | PASS | "each process' stream will be captured by the execution environment, collated together with all other streams from the app, and routed to one or more final destinations" |
| 86 | Try it | Run record: date, versions, "no cloud account", own choice of app and commands | none | N/A | The page's own practice-run record. |
| 87 | Try it | app.py code, "about 30 lines", stdlib only | none | N/A | The tutorial's own code. It has 31 non-blank lines. |
| 88 | Try it | III Config: stores config in environment variables | S18 | PASS | "The twelve-factor app stores config in environment variables" |
| 89 | Try it | VII Port binding: exports HTTP by binding to a port | S22 | PASS | "The web app exports HTTP as a service by binding to a port" |
| 90 | Try it | VI Processes: stateless and share-nothing | S21 | PASS | "Twelve-factor processes are stateless and share-nothing." |
| 91 | Try it | XI Logs: each process writes its event stream, unbuffered, to stdout | S26 | PASS | "each running process writes its event stream, unbuffered, to stdout." |
| 92 | Try it | IX Disposability: SIGTERM graceful shutdown | S24 | PASS | "Processes shut down gracefully when they receive a SIGTERM signal from the process manager." |
| 93 | Try it | A deploy is a running instance of the app | S16 | PASS | "A deploy is a running instance of the app." |
| 94 | Try it | Step 2 commands, outputs, and the "count lives in the process" remark | none | N/A | The tutorial's own commands and the record of its run. |
| 95 | Try it | Both deploys run the same codebase; the codebase is the same across all deploys | S16 | PASS | "The codebase is the same across all deploys, although different versions may be active in each deploy." |
| 96 | Try it | Step 3 output and "Each process has its own count; processes are stateless and share-nothing" | S21 | PASS | "Twelve-factor processes are stateless and share-nothing." The outputs are run record (N/A). |
| 97 | Try it | Step 4: graceful shutdown on SIGTERM from the process manager | S24 | PASS | "Processes shut down gracefully when they receive a SIGTERM signal from the process manager." The `kill`/`wait` role-play and the output are the tutorial's own (N/A). |
| 98 | Try it | Step 5: persistent data goes in a stateful backing service | S21 | PASS | "Any data that needs to persist must be stored in a stateful backing service, typically a database." The rest of step 5 is run record. |
| 99 | Try it | Step 6: each process writes its event stream, unbuffered, to stdout | S26 | PASS | "each running process writes its event stream, unbuffered, to stdout." |
| 100 | Try it | The event stream can be routed to a file, or watched via realtime tail | S26 | PASS | "The event stream for an app can be routed to a file, or watched via realtime tail in a terminal." |
| 101 | Try it | Step 6 output, file explanation, and step 7 (stop both, ports free, delete logs) | none | N/A | Run record and the tutorial's own commands and advice. |
| 102 | How a tester uses it | AWS lists software development and testing among uses of the cloud | S1 | PASS | "...such as data backup, disaster recovery, email, virtual desktops, software development and testing, big data analytics" |
| 103 | How a tester uses it | New IT resources are a click away; weeks to minutes | S4 | PASS | "new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes." |
| 104 | How a tester uses it | Codebase same across deploys; versions may differ | S16 | PASS | "The codebase is the same across all deploys, although different versions may be active in each deploy." |
| 105 | How a tester uses it | Release = build + config; unique release ID | S20 | PASS | "combines it with the deploy's current config" ... "Every release should always have a unique release ID" |
| 106 | How a tester uses it | Release cannot be mutated | S20 | PASS | "a release cannot be mutated once it is created." |
| 107 | How a tester uses it | Config includes resource handles and per-deploy values such as canonical hostname | S18 | PASS | "Resource handles to the database, Memcached, and other backing services" ... "Per-deploy values such as the canonical hostname for the deploy" |
| 108 | How a tester uses it | Swap local MySQL for third-party (Amazon RDS) without code changes | S19 | PASS | "should be able to swap out a local MySQL database with one managed by a third party (such as Amazon RDS) without any changes to the app's code." |
| 109 | How a tester uses it | Only the resource handle in the config needs to change | S19 | PASS | "only the resource handle in the config needs to change." |
| 110 | How a tester uses it | Backing-service differences cause tiny incompatibilities that fail in production | S25 | PASS | "Differences between backing services mean that tiny incompatibilities crop up, causing code that worked and passed tests in development or staging to fail in production." |
| 111 | How a tester uses it | All deploys use the same type and version of each backing service | S25 | PASS | "all deploys of the app (developer environments, staging, production) should be using the same type and version of each of the backing services." |
| 112 | How a tester uses it | Test environment closely mirrors production so results predict real behavior | S10 | PASS | "Your test environment closely mirrors production, so results predict real behavior." |
| 113 | How a tester uses it | Start from SLOs | S10 | PASS | "Start from service-level objectives (SLOs)." |
| 114 | How a tester uses it | SLO states a target for throughput, latency percentile, or error rate | S10 | PASS | "An SLO states a target for a measurable output such as throughput, a latency percentile," (error rate in the next line). |
| 115 | How a tester uses it | SLOs give every load test a clear pass or fail outcome | S10 | PASS | "SLOs give every load test a clear pass or fail" |
| 116 | How a tester uses it | Load tests in the pipeline catch regressions before release | S10 | PASS | "Load tests run as part of your delivery pipeline, catching performance regressions before release." |
| 117 | How a tester uses it | Designed resilience is not proven resilience | S9 | PASS | "A workload designed for resilience is not the same as a workload proven to be resilient." |
| 118 | How a tester uses it | Testing closes the gap between designed and actual resilience | S9 | PASS | "Testing closes the gap between the resilience you designed and the resilience you actually have." |
| 119 | How a tester uses it | Chaos engineering injects controlled faults to verify it withstands and recovers | S11 | PASS | "Chaos engineering injects controlled faults into a system to verify that it withstands and recovers from real-world disruptions." |
| 120 | How a tester uses it | Successful experiments become automated regression tests | S11 | PASS | "Successful experiments become automated regression tests" |
| 121 | How a tester uses it | Game day definition | S12 | PASS | "A game day is a scheduled exercise where your team responds to a simulated failure in a production-like" |
| 122 | How a tester uses it | Pen tests without prior approval for Permitted Services | S13 | PASS | "AWS customers are welcome to carry out security assessments or penetration tests of their AWS infrastructure without prior approval for the services listed in the next section under 'Permitted Services.'" |
| 123 | How a tester uses it | Permitted list includes EC2 instances, WAF, NAT Gateways, ELB, Lambda | S13 | PASS | "Amazon EC2 instances, WAF, NAT Gateways, and Elastic Load Balancers" ... "AWS Lambda and Lambda Edge functions" |
| 124 | How a tester uses it | C2 testing requires prior approval | S13 | PASS | "All security testing that includes Command and Control (C2) requires prior approval." |
| 125 | How a tester uses it | Network stress test: review the Stress Test policy | S13 | PASS | "Customers wishing to perform a Network Stress Test should review our Stress Test policy." |
| 126 | How a tester uses it | Stress test from EC2: endpoints hosted within AWS in the local Region | S14 | PASS | "you should ensure that your endpoints are in the local AWS Region if they are hosted within AWS." |
| 127 | How a tester uses it | Logs provide visibility into running app behavior | S26 | PASS | "Logs provide visibility into the behavior of a running app." |
| 128 | How a tester uses it | Log indexing and analysis system can find specific events in the past | S26 | PASS | "...sent to a log indexing and analysis system such as Splunk" ... "Finding specific events in the past." |
| 129 | How a tester uses it | One-off admin tasks: DB migrations, one-time scripts | S27 | PASS | "Running database migrations" ... "Running one-time scripts committed into the app's repo" |
| 130 | How a tester uses it | They run against a release with the same codebase and config | S27 | PASS | "They run against a release, using the same codebase and config as any process run against that release." |
| 131 | Common mistakes | Config as constants in code is a violation | S18 | PASS | "Apps sometimes store config as constants in the code. This is a violation of twelve-factor" |
| 132 | Common mistakes | Litmus test: open source without compromising credentials | S18 | PASS | "whether the codebase could be made open source at any moment, without compromising any credentials." |
| 133 | Common mistakes | Store config in environment variables instead | S18 | PASS | "The twelve-factor app stores config in environment variables" |
| 134 | Common mistakes | Grouping config by environment name does not scale cleanly | S18 | PASS | "This method does not scale cleanly" |
| 135 | Common mistakes | New names like staging or qa; combinatorial explosion | S18 | PASS | "new environment names are necessary, such as staging or qa" ... "resulting in a combinatorial explosion of config" |
| 136 | Common mistakes | Env vars are granular controls, independently managed per deploy | S18 | PASS | "env vars are granular controls" ... "independently managed for each deploy." |
| 137 | Common mistakes | Developer resists using different backing services in dev and prod | S25 | PASS | "The twelve-factor developer resists the urge to use different backing services between development and production, even when adapters theoretically abstract away any differences in backing services." |
| 138 | Common mistakes | SQLite locally and PostgreSQL in production is the docs' example | S25 | PASS | "For example, using SQLite locally and PostgreSQL in production" |
| 139 | Common mistakes | Sticky sessions are a violation and should never be used | S21 | PASS | "Sticky sessions are a violation of twelve-factor and should never be used or relied upon." |
| 140 | Common mistakes | Session state suits a datastore with time-expiration such as Memcached or Redis | S21 | PASS | "Session state data is a good candidate for a datastore that offers time-expiration, such as Memcached or Redis." |
| 141 | Common mistakes | App should not write to or manage logfiles | S26 | PASS | "It should not attempt to write to or manage logfiles." |
| 142 | Common mistakes | Each process writes its event stream, unbuffered, to stdout instead | S26 | PASS | "each running process writes its event stream, unbuffered, to stdout." |
| 143 | Common mistakes | Customers assume responsibility for the guest OS with updates and patches | S6 | PASS | "You assume responsibility and management of the guest operating system (including updates and security patches)" |
| 144 | Common mistakes | EC2: customer also responsible for installed software and security group | S7 | PASS | "any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance." |
| 145 | Common mistakes | Anti-pattern: test environments that do not match production in size or configuration | S10 | PASS | "Teams test against environments that do not match production in size or configuration." |
| 146 | Common mistakes | Anti-patterns: one-time load test, undefined requirements | S10 | PASS | "Load testing is a one-time activity rather than part of the delivery pipeline." "Performance requirements are undefined, so tests have no pass or fail criteria." |
| 147 | Common mistakes | Teams design for resilience but never verify whole-workload behavior | S11 | PASS | "Teams design for resilience but never verify how the whole workload behaves when faults occur." |
| 148 | Common mistakes | Teams document recovery procedures but never exercise them | S12 | PASS | "Teams document recovery procedures but never exercise them." |
| 149 | Common mistakes | Engineers-only game day misses coordination, decision-making, communication | S12 | PASS | "A game day that involves only engineers tests the technology but misses the coordination, decision-making, and communication that" (real incidents need) |
| 150 | Common mistakes | Volumetric DDoS simulations explicitly prohibited from EC2 | S14 | PASS | "Volumetric network-based DDoS simulations are explicitly prohibited from the Amazon EC2 platform" |
| 151 | Common mistakes | Overwhelm/flooding tests are not network stress tests | S14 | PASS | "Tests that purposefully attempt to overwhelm the target and/or infrastructure with packet or connection flooding attacks ... are not considered network stress tests" |
| 152 | Common mistakes | Customer responsible for damages caused by their testing | S13 | PASS | "you are responsible for any damages to AWS or other AWS customers that are caused by your testing or security assessment activities." |
| 153 | What a tester can check | Callout "Tutorial advice": the list is the tutorial's own advice | none | PASS | It is titled "Tutorial advice" and says "the tutorial's own advice". It states no tool fact that the rest of the page does not support. |
| 154 | Key words | Cloud computing | none | PASS | Page: "the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing" |
| 155 | Key words | IaaS | none | PASS | Page: "The basic building blocks for cloud IT: typically networking features, computers (virtual or on dedicated hardware), and data storage space" |
| 156 | Key words | PaaS | none | PASS | Page: "It removes the need to manage the underlying infrastructure ... so that you can focus on the deployment and management of your applications" |
| 157 | Key words | SaaS | none | PASS | Page: "Software applications that are run and managed by the vendor" |
| 158 | Key words | Region | none | PASS | Page: "a physical location around the world where AWS clusters data centers" |
| 159 | Key words | Availability Zone | none | PASS | Page: "one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region" |
| 160 | Key words | Shared responsibility | none | PASS | Page: "a shared responsibility between AWS and you" ... "responsibility of the cloud versus in the cloud" |
| 161 | Key words | Guest operating system | none | PASS | Page: "You assume responsibility for the guest operating system (including updates and security patches)"; the EC2 customer is responsible for it. |
| 162 | Key words | Twelve-factor app | none | PASS | Page: "a methodology for building software-as-a-service apps" |
| 163 | Key words | Deploy | none | PASS | Page (Try it): "A deploy is a running instance of the app" |
| 164 | Key words | Config | none | PASS | Page: "everything that is likely to vary between deploys" and "stores config in environment variables" |
| 165 | Key words | Backing service | none | PASS | Page: "any service the app consumes over the network as part of its normal operation" |
| 166 | Key words | Build, release, run | none | PASS | Page: "A codebase is transformed into a deploy through three stages" |
| 167 | Key words | Release | none | PASS | Page: "A release is a build combined with the config of a deploy, and every release should always have a unique release ID" and "cannot be mutated once it is created" |
| 168 | Key words | Stateless process | none | PASS | Page: "Twelve-factor processes are stateless and share-nothing" and "Any data that needs to persist must be stored in a stateful backing service" |
| 169 | Key words | SIGTERM | none | PASS | Page: "Processes shut down gracefully when they receive a SIGTERM signal from the process manager" |
| 170 | Key words | Event stream | none | PASS | Page: "Each running process writes its event stream, unbuffered, to stdout" |
| 171 | Key words | SLO | none | PASS | Page: "An SLO states a target for a measurable output such as throughput, a latency percentile, or an error rate" |
| 172 | Key words | Chaos engineering | none | PASS | Page: "injects controlled faults into a system to verify that it withstands and recovers from real-world disruptions" |
| 173 | Key words | Game day | none | PASS | Page: "a scheduled exercise where the team responds to a simulated failure in a production-like environment" |

Open FAILs after round 8: 0

Open FAILs: 0
