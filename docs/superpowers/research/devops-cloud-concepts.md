# Research notes: Cloud Concepts

Page: `content/devops/cloud-concepts.mdx`. Module: DevOps & Cloud. Date: 2026-11-18 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): what cloud computing is (AWS and NIST), the service types, Regions and Availability Zones, the shared responsibility model, the Well-Architected pillars, what the Well-Architected Framework and the AWS testing policies say about testing, and the twelve-factor app, with a practice run of a tiny app. The first version (2026-11-05) had two sources and one section. The page needs no AWS account: nothing on it runs against AWS.

The practice run of `## Try it` was run on 2026-11-18 at 11:47 (+06) on Linux 7.0.0-43-generic with Python 3.14.9, curl 8.18.0, and bash 5.3.9. The runner `practice/cc2.sh` checked first that ports 8081 and 8082 were free, copied `practice/cc/app.py` (the tutorial's own app, not from a source) into a fresh temp folder, ran the reader's commands (`practice/cc/steps/step2.sh` to `step7.sh`) one after the other in one shell, and saved the output of each step in `practice/cc/out/`. The page shows the step files and the outputs as they are. The date and versions are in `practice/cc/out/env.txt`.

- Step 2: three `curl` calls printed `hello #1`, `hello #2`, and `hello #3`. Step 3: the second deploy (`GREETING=hallo PORT=8082`) printed `hallo #1`, and the first deploy printed `hello #4`.
- Step 4: `wait $A` returned exit status 0 after `kill -TERM $A`, and `curl --max-time 2` to the stopped deploy printed nothing and exited with status 7.
- Step 5: the restarted deploy printed `hello #1`. Step 6: `deploy-a.log` had the lines `listening`, four `GET`, `SIGTERM received: stopped listening, exiting`, `listening`, and one `GET`; `deploy-b.log` had `listening` and one `GET`.
- Step 7: both processes stopped (exit status 0 for each step). The runner found no listener on 8081 or 8082 afterwards, and its trap deleted the temp folder.

An earlier version of the runner (`practice/cc-v1.sh`, run at 11:43, log `practice/cc-v1.log`) printed the same outputs. The page's wording on the exit statuses and counts comes from the second run. The shell commands (`python3`, `curl`, `kill`, `wait`, `sleep`, `$!`, `>>`) are the tutorial's own choice; the page says so, and no source is cited for them.

Some quotes are written as `scripts/devops_claimcheck.py` reads them (case, white space, and curly quotes do not count as differences).

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | What is cloud computing? (Amazon Web Services) | https://aws.amazon.com/what-is-cloud-computing/ |
| S2 | Types of cloud computing (Amazon Web Services) | https://aws.amazon.com/types-of-cloud-computing/ |
| S3 | SP 800-145, The NIST Definition of Cloud Computing (NIST) | https://csrc.nist.gov/pubs/sp/800/145/final |
| S4 | Six advantages of cloud computing (AWS Documentation) | https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html |
| S5 | AWS Global Infrastructure: Regions and Availability Zones (Amazon Web Services) | https://aws.amazon.com/about-aws/global-infrastructure/regions_az/ |
| S6 | Shared responsibility (AWS Documentation) | https://docs.aws.amazon.com/wellarchitected/latest/framework/shared-responsibility.html |
| S7 | Shared Responsibility Model (Amazon Web Services) | https://aws.amazon.com/compliance/shared-responsibility-model/ |
| S8 | Cloud Workloads (AWS Documentation) | https://docs.aws.amazon.com/wellarchitected/latest/framework/workloads.html |
| S9 | Test reliability (AWS Documentation) | https://docs.aws.amazon.com/wellarchitected/latest/framework/rel12.html |
| S10 | REL12-BP03 Test scalability and performance requirements (AWS Documentation) | https://docs.aws.amazon.com/wellarchitected/latest/framework/rel12-bp03.html |
| S11 | REL12-BP04 Test resilience using chaos engineering (AWS Documentation) | https://docs.aws.amazon.com/wellarchitected/latest/framework/rel12-bp04.html |
| S12 | REL12-BP05 Conduct game days regularly (AWS Documentation) | https://docs.aws.amazon.com/wellarchitected/latest/framework/rel12-bp05.html |
| S13 | Penetration Testing (Amazon Web Services) | https://aws.amazon.com/security/penetration-testing/ |
| S14 | Amazon EC2 Testing Policy (Amazon Web Services) | https://aws.amazon.com/ec2/testing/ |
| S15 | The Twelve-Factor App (12factor.net) | https://12factor.net/ |
| S16 | I. Codebase (12factor.net) | https://12factor.net/codebase |
| S17 | II. Dependencies (12factor.net) | https://12factor.net/dependencies |
| S18 | III. Config (12factor.net) | https://12factor.net/config |
| S19 | IV. Backing services (12factor.net) | https://12factor.net/backing-services |
| S20 | V. Build, release, run (12factor.net) | https://12factor.net/build-release-run |
| S21 | VI. Processes (12factor.net) | https://12factor.net/processes |
| S22 | VII. Port binding (12factor.net) | https://12factor.net/port-binding |
| S23 | VIII. Concurrency (12factor.net) | https://12factor.net/concurrency |
| S24 | IX. Disposability (12factor.net) | https://12factor.net/disposability |
| S25 | X. Dev/prod parity (12factor.net) | https://12factor.net/dev-prod-parity |
| S26 | XI. Logs (12factor.net) | https://12factor.net/logs |
| S27 | XII. Admin processes (12factor.net) | https://12factor.net/admin-processes |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing | S1 | "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing" |
| Instead of buying, owning, and maintaining physical data centers and servers, you can access services such as computing power, storage, and databases on an as-needed basis from a cloud provider like Amazon Web Services (AWS) | S1 | "you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS)" |
| NIST describes cloud computing as a model for on-demand network access to a shared pool of configurable computing resources | S3 | "a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources" |
| The resources can be rapidly provisioned and released with minimal management effort or service provider interaction | S3 | "that can be rapidly provisioned and released with minimal management effort or service provider interaction" |
| The model has five essential characteristics, three service models, and four deployment models | S3 | "This cloud model is composed of five essential characteristics, three service models, and four deployment models" |
| The three main types of cloud computing are Infrastructure as a Service, Platform as a Service, and Software as a Service | S1 | "The three main types of cloud computing include Infrastructure as a Service, Platform as a Service, and Software as a Service" |
| AWS notes that definitions vary from company to company | S2 | "Although definitions vary from company to company, traditionally there have been three main models for cloud computing" |
| IaaS (Infrastructure as a Service): The basic building blocks for cloud IT: typically networking features, computers (virtual or on dedicated hardware), and data storage space | S2 | "IaaS contains the basic building blocks for cloud IT and typically provides access to networking features, computers (virtual or on dedicated hardware), and data storage space" |
| PaaS (Platform as a Service): It removes the need to manage the underlying infrastructure (usually hardware and operating systems), so that you can focus on the deployment and management of your applications | S2 | "PaaS vendors remove the need for organizations to manage the underlying infrastructure (usually hardware and operating systems), and this integration allows you to focus on the deployment and management of your applications" |
| SaaS (Software as a Service): Software applications that are run and managed by the vendor; web-based email is a common example | S2 | "SaaS vendors provide you with software applications that are run and managed by the vendor" |
| SaaS (Software as a Service): Software applications that are run and managed by the vendor; web-based email is a common example | S2 | "A common example of a SaaS application is web-based email" |
| A cloud-based application is fully deployed in the cloud, and all parts of it run there | S2 | "A cloud-based application is fully deployed in the cloud and all parts of the application run in the cloud" |
| A hybrid deployment connects cloud-based resources with existing resources that are not in the cloud | S2 | "A hybrid deployment is a way to connect infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud" |
| The most common hybrid method connects the cloud with existing on-premises infrastructure | S2 | "The most common method of hybrid deployment is between the cloud and existing on-premises infrastructure" |
| AWS names four benefits | S1 | "Agility" |
| AWS names four benefits | S1 | "Elasticity" |
| AWS names four benefits | S1 | "Cost savings" |
| AWS names four benefits | S1 | "Deploy globally in minutes" |
| You can quickly spin up resources as you need them | S1 | "You can quickly spin up resources as you need them" |
| You can access as much or as little capacity as you need, and scale up and down as required with only a few minutes' notice | S4 | "You can access as much or as little capacity as you need, and scale up and down as required with only a few minutes’ notice" |
| The cloud allows you to trade fixed expenses (such as data centers and physical servers) for variable expenses, and to pay for IT only as you consume it | S1 | "The cloud allows you to trade fixed expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it" |
| With the cloud, you can expand to new geographic regions and deploy globally in minutes | S1 | "With the cloud, you can expand to new geographic regions and deploy globally in minutes" |
| AWS has the concept of a Region: a physical location around the world where AWS clusters data centers | S5 | "AWS has the concept of a Region, which is a physical location around the world where we cluster data centers" |
| Each group of logical data centers is an Availability Zone (AZ) | S5 | "We call each group of logical data centers an Availability Zone" |
| Each AWS Region consists of a minimum of three isolated and physically separate AZs within a geographic area | S5 | "Each AWS Region consists of a minimum of three, isolated, and physically separate AZs within a geographic area" |
| An AZ is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region | S5 | "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region" |
| AZs let customers run production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center | S5 | "AZs give customers the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center" |
| Building and operating workloads in the cloud is a shared responsibility between AWS and you | S6 | "Building and operating workloads in the cloud is a shared responsibility between AWS and you" |
| AWS operates, manages, and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the services run | S6 | "AWS operates, manages, and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the services run" |
| You assume responsibility for the guest operating system (including updates and security patches), other associated application software, and the configuration of the AWS-provided resources you use | S6 | "You assume responsibility and management of the guest operating system (including updates and security patches), other associated application software, and the configuration of the AWS-provided resources you use" |
| This split is commonly called responsibility of the cloud versus in the cloud | S6 | "This differentiation of responsibility is commonly referred to as responsibility of the cloud versus in the cloud" |
| The twelve-factor app is a methodology for building software-as-a-service apps | S15 | "The twelve-factor app is a methodology for building software-as-a-service apps" |
| use declarative formats for setup automation, to minimize time and cost for new developers joining the project | S15 | "Use declarative formats for setup automation, to minimize time and cost for new developers joining the project" |
| have a clean contract with the underlying operating system, offering maximum portability between execution environments | S15 | "Have a clean contract with the underlying operating system, offering maximum portability between execution environments" |
| are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration | S15 | "Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration" |
| minimize divergence between development and production, enabling continuous deployment for maximum agility | S15 | "Minimize divergence between development and production, enabling continuous deployment for maximum agility" |
| and can scale up without significant changes to tooling, architecture, or development practices | S15 | "can scale up without significant changes to tooling, architecture, or development practices" |
| The methodology can be applied to apps written in any programming language, and which use any combination of backing services | S15 | "The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services" |
| The AWS Well-Architected Framework names six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability | S8 | "If you neglect the six pillars of operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability" |
| The reliability pillar is about making a workload perform its intended function correctly and consistently, and recover from failures with minimal impact | S8 | "Make a workload perform its intended function correctly and consistently, and recover from failures with minimal impact" |
| Each pillar is organized into capabilities, or groupings of related best practices that share a common objective | S8 | "Each pillar is organized into capabilities, or groupings of related best practices that share a common objective" |
| Each AZ has independent power, cooling, and physical security and is connected via redundant, ultra-low-latency networks | S5 | "Each AZ has independent power, cooling, and physical security and is connected via redundant, ultra-low-latency networks" |
| All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking | S5 | "All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking" |
| All traffic between AZs is encrypted | S5 | "All traffic between AZs is encrypted" |
| AWS is responsible for protecting and operating the infrastructure that runs all of the services offered in the AWS Cloud | S6 | "AWS is responsible for protecting and operating the infrastructure that runs all of the services offered in the AWS Cloud" |
| That infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services | S6 | "This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services" |
| Your side depends on the services that you choose | S6 | "your responsibilities vary depending on the services used" |
| Amazon EC2 is categorized as Infrastructure as a Service, and so it requires the customer to perform all of the necessary security configuration and management tasks | S7 | "a service such as Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and, as such, requires the customer to perform all of the necessary security configuration and management tasks" |
| Customers who deploy an EC2 instance are responsible for the guest operating system (including updates and security patches), any application software or utilities that they install on the instance, and the configuration of the AW | S7 | "Customers that deploy an Amazon EC2 instance are responsible for management of the guest operating system (including updates and security patches), any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance" |
| For patch management, AWS patches and fixes flaws within the infrastructure, and customers patch their guest OS and applications | S7 | "AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications" |
| For configuration management, AWS maintains the configuration of its infrastructure devices, and a customer configures their own guest operating systems, databases, and applications | S7 | "AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications" |
| Customer responsibility varies with the AWS services and Regions that a customer chooses, the integration of those services into their IT environment, and the laws and regulations that apply | S7 | "Customer responsibility varies based on many factors, including the AWS services and Regions they choose, the integration of those services into their IT environment, and the laws and regulations applicable to their organization and workload" |
| I. Codebase: One codebase tracked in revision control, many deploys | S15 | "One codebase tracked in revision control, many deploys" |
| I. Codebase: There is only one codebase per app, but there will be many deploys of the app | S16 | "There is only one codebase per app, but there will be many deploys of the app" |
| II. Dependencies: Explicitly declare and isolate dependencies | S15 | "Explicitly declare and isolate dependencies" |
| II. Dependencies: A twelve-factor app never relies on implicit existence of system-wide packages | S17 | "A twelve-factor app never relies on implicit existence of system-wide packages" |
| III. Config: Store config in the environment | S15 | "Store config in the environment" |
| III. Config: The twelve-factor app stores config in environment variables | S18 | "The twelve-factor app stores config in environment variables" |
| IV. Backing services: Treat backing services as attached resources | S15 | "Treat backing services as attached resources" |
| IV. Backing services: A backing service is any service the app consumes over the network as part of its normal operation | S19 | "A backing service is any service the app consumes over the network as part of its normal operation" |
| V. Build, release, run: Strictly separate build and run stages | S15 | "Strictly separate build and run stages" |
| V. Build, release, run: The twelve-factor app uses strict separation between the build, release, and run stages | S20 | "The twelve-factor app uses strict separation between the build, release, and run stages" |
| VI. Processes: Execute the app as one or more stateless processes | S15 | "Execute the app as one or more stateless processes" |
| VI. Processes: Twelve-factor processes are stateless and share-nothing | S21 | "Twelve-factor processes are stateless and share-nothing" |
| VII. Port binding: Export services via port binding | S15 | "Export services via port binding" |
| VII. Port binding: The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port | S22 | "The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port" |
| VIII. Concurrency: Scale out via the process model | S15 | "Scale out via the process model" |
| VIII. Concurrency: Adding more concurrency is a simple and reliable operation | S23 | "means that adding more concurrency is a simple and reliable operation" |
| IX. Disposability: Maximize robustness with fast startup and graceful shutdown | S15 | "Maximize robustness with fast startup and graceful shutdown" |
| IX. Disposability: The processes are disposable, meaning they can be started or stopped at a moment's notice | S24 | "processes are disposable, meaning they can be started or stopped at a moment’s notice" |
| X. Dev/prod parity: Keep development, staging, and production as similar as possible | S15 | "Keep development, staging, and production as similar as possible" |
| X. Dev/prod parity: The app is designed for continuous deployment by keeping the gap between development and production small | S25 | "The twelve-factor app is designed for continuous deployment by keeping the gap between development and production small" |
| XI. Logs: Treat logs as event streams | S15 | "Treat logs as event streams" |
| XI. Logs: Each running process writes its event stream, unbuffered, to stdout | S26 | "each running process writes its event stream, unbuffered, to stdout" |
| XII. Admin processes: Run admin/management tasks as one-off processes | S15 | "Run admin/management tasks as one-off processes" |
| XII. Admin processes: One-off admin processes should be run in an identical environment as the regular long-running processes of the app | S27 | "One-off admin processes should be run in an identical environment as the regular long-running processes of the app" |
| A codebase is transformed into a deploy through three stages | S20 | "A codebase is transformed into a (non-development) deploy through three stages" |
| The build stage converts a code repo into an executable bundle known as a build | S20 | "The build stage is a transform which converts a code repo into an executable bundle known as a build" |
| The release stage combines the build with the deploy's current config | S20 | "The release stage takes the build produced by the build stage and combines it with the deploy’s current config" |
| The run stage runs the app in the execution environment, by launching some set of the app's processes against a selected release | S20 | "runs the app in the execution environment, by launching some set of the app’s processes against a selected release" |
| Every release should always have a unique release ID | S20 | "Every release should always have a unique release ID" |
| A release cannot be mutated once it is created, and any change must create a new release | S20 | "a release cannot be mutated once it is created. Any change must create a new release" |
| The twelve-factor app is executed as one or more processes | S21 | "The app is executed in the execution environment as one or more processes" |
| Any data that needs to persist must be stored in a stateful backing service, typically a database | S21 | "Any data that needs to persist must be stored in a stateful backing service, typically a database" |
| The app never assumes that anything cached in memory or on disk will be available on a future request or job | S21 | "The twelve-factor app never assumes that anything cached in memory or on disk will be available on a future request or job" |
| To handle different workloads, each type of work gets a process type: HTTP requests may be handled by a web process, and long-running background tasks by a worker process | S23 | "HTTP requests may be handled by a web process, and long-running background tasks handled by a worker process" |
| Processes should strive to minimize startup time | S24 | "Processes should strive to minimize startup time" |
| Processes shut down gracefully when they receive a SIGTERM signal from the process manager | S24 | "Processes shut down gracefully when they receive a SIGTERM signal from the process manager" |
| For a web process, graceful shutdown is achieved by ceasing to listen on the service port, allowing any current requests to finish, and then exiting | S24 | "For a web process, graceful shutdown is achieved by ceasing to listen on the service port (thereby refusing any new requests), allowing any current requests to finish, and then exiting" |
| A twelve-factor app is architected to handle unexpected, non-graceful terminations | S24 | "a twelve-factor app is architected to handle unexpected, non-graceful terminations" |
| An app's config is everything that is likely to vary between deploys (staging, production, developer environments, etc) | S18 | "An app’s config is everything that is likely to vary between deploys (staging, production, developer environments, etc)" |
| Env vars are easy to change between deploys without changing any code | S18 | "Env vars are easy to change between deploys without changing any code" |
| Logs are the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services | S26 | "Logs are the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services" |
| A twelve-factor app never concerns itself with routing or storage of its output stream | S26 | "A twelve-factor app never concerns itself with routing or storage of its output stream" |
| In staging or production, the execution environment captures the stream of each process and routes it to one or more final destinations | S26 | "each process’ stream will be captured by the execution environment, collated together with all other streams from the app, and routed to one or more final destinations for viewing and long-term archival" |
| The twelve-factor app stores config in environment variables | S18 | "The twelve-factor app stores config in environment variables" |
| The web app exports HTTP as a service by binding to a port | S22 | "The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port" |
| Twelve-factor processes are stateless and share-nothing | S21 | "Twelve-factor processes are stateless and share-nothing" |
| Each running process writes its event stream, unbuffered, to stdout | S26 | "each running process writes its event stream, unbuffered, to stdout" |
| Processes shut down gracefully when they receive a SIGTERM signal from the process manager | S24 | "Processes shut down gracefully when they receive a SIGTERM signal from the process manager" |
| A deploy is a running instance of the app | S16 | "A deploy is a running instance of the app" |
| Both deploys run the same codebase, and the codebase is the same across all deploys | S16 | "The codebase is the same across all deploys, although different versions may be active in each deploy" |
| Twelve-factor processes are stateless and share-nothing | S21 | "Twelve-factor processes are stateless and share-nothing" |
| Processes shut down gracefully when they receive a SIGTERM signal from the process manager | S24 | "Processes shut down gracefully when they receive a SIGTERM signal from the process manager" |
| Any data that needs to persist must be stored in a stateful backing service, typically a database | S21 | "Any data that needs to persist must be stored in a stateful backing service, typically a database" |
| Each process writes its event stream, unbuffered, to stdout | S26 | "each running process writes its event stream, unbuffered, to stdout" |
| The event stream can be routed to a file, or watched via realtime tail in a terminal | S26 | "The event stream for an app can be routed to a file, or watched via realtime tail in a terminal" |
| AWS lists software development and testing among the uses of the cloud | S1 | "Organizations of every type, size, and industry are using the cloud for a wide variety of use cases, such as data backup, disaster recovery, email, virtual desktops, software development and testing, big data analytics, and customer-facing web applications" |
| That reduces the time to make resources available to developers from weeks to just minutes | S4 | "new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes" |
| The codebase is the same across all deploys, although different versions may be active in each deploy | S16 | "The codebase is the same across all deploys, although different versions may be active in each deploy" |
| A release is a build combined with the config of a deploy, and every release should always have a unique release ID | S20 | "The release stage takes the build produced by the build stage and combines it with the deploy’s current config" |
| A release is a build combined with the config of a deploy, and every release should always have a unique release ID | S20 | "Every release should always have a unique release ID" |
| A release cannot be mutated once it is created | S20 | "a release cannot be mutated once it is created" |
| Config includes resource handles to the database and other backing services, and per-deploy values such as the canonical hostname | S18 | "Resource handles to the database, Memcached, and other backing services" |
| Config includes resource handles to the database and other backing services, and per-deploy values such as the canonical hostname | S18 | "Per-deploy values such as the canonical hostname for the deploy" |
| A deploy should be able to swap a local MySQL database for one managed by a third party, such as Amazon RDS, without any changes to the app's code | S19 | "A deploy of the twelve-factor app should be able to swap out a local MySQL database with one managed by a third party (such as Amazon RDS) without any changes to the app’s code" |
| Only the resource handle in the config needs to change | S19 | "only the resource handle in the config needs to change" |
| Differences between backing services mean that tiny incompatibilities crop up, causing code that worked and passed tests in development or staging to fail in production | S25 | "Differences between backing services mean that tiny incompatibilities crop up, causing code that worked and passed tests in development or staging to fail in production" |
| All deploys should use the same type and version of each backing service | S25 | "all deploys of the app (developer environments, staging, production) should be using the same type and version of each of the backing services" |
| AWS's guidance on scalability and performance tests asks for a test environment that closely mirrors production, so that results predict real behavior | S10 | "Your test environment closely mirrors production, so results predict real behavior" |
| Start from service-level objectives (SLOs) | S10 | "Start from service-level objectives (SLOs)" |
| An SLO states a target for a measurable output such as throughput, a latency percentile, or an error rate | S10 | "An SLO states a target for a measurable output such as throughput, a latency percentile, or an error rate" |
| SLOs give every load test a clear pass or fail outcome | S10 | "SLOs give every load test a clear pass or fail outcome" |
| Load tests run as part of the delivery pipeline catch performance regressions before release | S10 | "Load tests run as part of your delivery pipeline, catching performance regressions before release" |
| A workload designed for resilience is not the same as a workload proven to be resilient | S9 | "A workload designed for resilience is not the same as a workload proven to be resilient" |
| Testing closes the gap between the resilience that you designed and the resilience that you actually have | S9 | "Testing closes the gap between the resilience you designed and the resilience you actually have" |
| Chaos engineering injects controlled faults into a system to verify that it withstands and recovers from real-world disruptions | S11 | "Chaos engineering injects controlled faults into a system to verify that it withstands and recovers from real-world disruptions" |
| Successful experiments become automated regression tests | S11 | "Successful experiments become automated regression tests that guard resilience over time" |
| A game day is a scheduled exercise where the team responds to a simulated failure in a production-like environment | S12 | "A game day is a scheduled exercise where your team responds to a simulated failure in a production-like environment" |
| AWS customers may carry out security assessments or penetration tests of their AWS infrastructure without prior approval for the services listed as Permitted Services | S13 | "AWS customers are welcome to carry out security assessments or penetration tests of their AWS infrastructure without prior approval for the services listed in the next section under “Permitted Services.”" |
| The list includes Amazon EC2 instances, WAF, NAT Gateways, Elastic Load Balancers, and AWS Lambda functions | S13 | "Amazon EC2 instances, WAF, NAT Gateways, and Elastic Load Balancers" |
| The list includes Amazon EC2 instances, WAF, NAT Gateways, Elastic Load Balancers, and AWS Lambda functions | S13 | "AWS Lambda and Lambda Edge functions" |
| All security testing that includes Command and Control (C2) requires prior approval | S13 | "All security testing that includes Command and Control (C2) requires prior approval" |
| A customer who wants to run a network stress test should review the Stress Test policy | S13 | "Customers wishing to perform a Network Stress Test should review our Stress Test policy" |
| For a network stress test from EC2, endpoints that are hosted within AWS should be in the local AWS Region | S14 | "When performing a network stress test from EC2, you should ensure that your endpoints are in the local AWS Region if they are hosted within AWS" |
| Logs provide visibility into the behavior of a running app | S26 | "Logs provide visibility into the behavior of a running app" |
| A log indexing and analysis system can find specific events in the past | S26 | "Finding specific events in the past" |
| One-off admin tasks include running database migrations and running one-time scripts committed into the app's repo | S27 | "Running database migrations" |
| One-off admin tasks include running database migrations and running one-time scripts committed into the app's repo | S27 | "Running one-time scripts committed into the app’s repo" |
| They run against a release, using the same codebase and config as any process run against that release | S27 | "They run against a release, using the same codebase and config as any process run against that release" |
| Apps sometimes store config as constants in the code, and that is a violation of twelve-factor | S18 | "Apps sometimes store config as constants in the code. This is a violation of twelve-factor, which requires strict separation of config from code" |
| A litmus test is whether the codebase could be made open source at any moment without compromising any credentials | S18 | "A litmus test for whether an app has all config correctly factored out of the code is whether the codebase could be made open source at any moment, without compromising any credentials" |
| Store config in environment variables instead | S18 | "The twelve-factor app stores config in environment variables" |
| Grouping config by environment name does not scale cleanly | S18 | "This method does not scale cleanly" |
| New names such as staging or qa are needed as deploys are created, and the result is a combinatorial explosion of config | S18 | "resulting in a combinatorial explosion of config which makes managing deploys of the app very brittle" |
| In a twelve-factor app, env vars are granular controls, independently managed for each deploy | S18 | "but instead are independently managed for each deploy" |
| The twelve-factor developer resists the urge to use different backing services between development and production, even when adapters theoretically abstract away any differences | S25 | "The twelve-factor developer resists the urge to use different backing services between development and production, even when adapters theoretically abstract away any differences in backing services" |
| Using SQLite locally and PostgreSQL in production is the docs' example | S25 | "For example, using SQLite locally and PostgreSQL in production" |
| Sticky sessions are a violation of twelve-factor and should never be used or relied upon | S21 | "Sticky sessions are a violation of twelve-factor and should never be used or relied upon" |
| Session state data is a good candidate for a datastore that offers time-expiration, such as Memcached or Redis | S21 | "Session state data is a good candidate for a datastore that offers time-expiration, such as Memcached or Redis" |
| A twelve-factor app should not attempt to write to or manage logfiles | S26 | "It should not attempt to write to or manage logfiles" |
| Each running process writes its event stream, unbuffered, to stdout instead | S26 | "Instead, each running process writes its event stream, unbuffered, to stdout" |
| Customers assume responsibility for the guest operating system, including updates and security patches | S6 | "You assume responsibility and management of the guest operating system (including updates and security patches)" |
| For an EC2 instance, the customer is also responsible for the application software and utilities that they install, and for the configuration of the AWS-provided firewall, called a security group | S7 | "any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance" |
| A common anti-pattern is to test against environments that do not match production in size or configuration | S10 | "Teams test against environments that do not match production in size or configuration" |
| Two anti-patterns of load testing are a one-time activity that is not part of the delivery pipeline | S10 | "Load testing is a one-time activity rather than part of the delivery pipeline" |
| Two anti-patterns of load testing are a one-time activity that is not part of the delivery pipeline , and undefined performance requirements, so that tests have no pass or fail criteria | S10 | "Performance requirements are undefined, so tests have no pass or fail criteria" |
| Teams design for resilience but never verify how the whole workload behaves when faults occur | S11 | "Teams design for resilience but never verify how the whole workload behaves when faults occur" |
| Teams document recovery procedures but never exercise them | S12 | "Teams document recovery procedures but never exercise them" |
| A game day that involves only engineers tests the technology but misses the coordination, decision-making, and communication that are required in real incidents | S12 | "A game day that involves only engineers tests the technology but misses the coordination, decision-making, and communication that are required in real incidents" |
| Volumetric network-based DDoS simulations are explicitly prohibited from the Amazon EC2 platform | S14 | "Volumetric network-based DDoS simulations are explicitly prohibited from the Amazon EC2 platform" |
| Tests that purposefully attempt to overwhelm the target with flooding attacks are not network stress tests | S14 | "Tests that purposefully attempt to overwhelm the target and/or infrastructure with packet or connection flooding attacks, reflection/amplification attacks or other large volumes of traffic are not considered network stress tests but are considered distributed denial of service (DDoS) tests" |
| A customer is responsible for any damages to AWS or other AWS customers that are caused by their testing | S13 | "Furthermore, you are responsible for any damages to AWS or other AWS customers that are caused by your testing or security assessment activities" |
