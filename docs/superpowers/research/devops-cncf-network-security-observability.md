# Research notes: CNCF Projects: Networking, Security, and Observability

Page: `content/devops/cncf-network-security-observability.mdx`. Module: DevOps & Cloud. Date: 2026-11-20 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`) on the topic that its shelf named: the CNCF, Istio, Falco, the Open Policy Agent, and Gatekeeper. It covers the CNCF project stages and the maturity of the three projects; Istio (the service mesh, the two planes, Istiod, sidecar and ambient mode, traffic routing, gateways, timeouts, retries, circuit breakers, fault injection, mutual TLS, authorization policies, telemetry, the profiles, and `istioctl analyze`); Falco (events, event sources, drivers, rules files, rules, conditions, the "first match wins" setting, the command line, plugins, falcoctl, alerts, and the tarball); and OPA and Gatekeeper (Rego, testing, the command line, the server and its REST API, decision logs, admission control, constraint templates, gator, OPA with Envoy, and OPA with Terraform). The practice run has fifteen steps: the tools; the install manifests of five Istio profiles; a good Istio file; a bad file with and without a namespace option; severity, exit codes, and JSON output; mutual TLS and authorization policies, with a typo; a policy and `opa eval`; policy tests; `opa check`, `opa fmt`, and the old syntax; the OPA server and its decision log; a Gatekeeper template with gator; Falco rule validation; broken Falco rules; the audit plugin and its rules with falcoctl; and Kubernetes audit events read from a file.

The practice run of `## Try it` (steps 1 to 15) was recorded on 2026-11-20 02:24:46 +0600 on Linux 7.0.0-43-generic with istioctl 1.32.0, OPA 1.22.4, gator v3.23.1, Falco 0.45.2, falcoctl 0.14.3, Python 3.14.4, and bash 5.3.9. The tools are the ones that `install-p7c.sh` put in the home folder of the user: the SHA-256 of `istioctl`, OPA, and gator was compared with the checksum file of the same release, and the signature of the Falco archive was checked with the key that the Falco docs name. For `istioctl`, OPA, and gator, the checksum file and the archive come from the same host. For Falco, the key comes from `falco.org` and the archive from `download.falco.org`. The script does not compare the fingerprint of the Falco key with a second source. The tutorial treats these checks as a way to find a damaged or swapped archive, and not as proof of who built it.

The runner ran nine times, and the page uses the last run. Between the runs, the tutorial changed steps 8 and 11, added the step on mutual TLS and authorization policies (and renumbered the later steps), added the lines that print the two Falco rules and the lists that have `kubernetes-admin` to step 14, changed the last line of step 10 to look for `custom.request_metadata`, added the failing validation without the container plugin and the `load_plugins` line to step 12, added the check of the file names next to the Falco archive, and reworded three comments of the step files so that they make no claim. The runner stops at its start if a tool or the archive is missing, or if the port 18181 is in use. It runs with `env -i`, with a new, empty `HOME` and a `TMPDIR` in the run folder, and it removes the run folder at the end. It never touches a container, an image, a volume, or a network.

- Step 1: the page does not say what the `opa/v1.17.1` in the line of gator stands for.
- Step 4: the page does not say why the call with no namespace option found nothing.
- Step 5: the page does not say why the exit code of `-o json` was 0, and it does not say what the number 79 means.
- Step 6: the page quotes the message `IST0133` and does not check what the policy does with TCP traffic.
- Step 10: the page gives its reading of the request with no `input` key, and it did not trace the query.
- Step 14: the page does not say how falcoctl checks a signature, or what made the `.sigstore` folder of the empty home folder.
- Step 15: the page gives its reading of the order of the two rules, and it did not measure the CPU use of `rule_matching: all`.

The page cites pages of the CNCF, Istio, Falco, Open Policy Agent, and Gatekeeper documentation, the README files of the Falco rules, the `event-generator`, and the `k8saudit` plugin on GitHub. The CNCF project pages were read on 2026-11-20, and the dates and levels in the page are the ones that they gave that day. The Istio pages are the pages of the `latest` documentation, which showed version 1.32 as the current one. Some quotes are written as `scripts/devops_claimcheck.py` reads them (case, white space, and curly quotes do not count as differences), and a quote that crosses a link text such as `(opens in a new tab)` is split with `||`.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Who we are (Cloud Native Computing Foundation) | https://www.cncf.io/about/who-we-are/ |
| S2 | Graduated and incubating projects (Cloud Native Computing Foundation) | https://www.cncf.io/projects/ |
| S3 | Project stages and the graduation process (CNCF Technical Oversight Committee on GitHub) | https://github.com/cncf/toc/blob/main/process/README.md |
| S4 | Istio (Cloud Native Computing Foundation) | https://www.cncf.io/projects/istio/ |
| S5 | Falco (Cloud Native Computing Foundation) | https://www.cncf.io/projects/falco/ |
| S6 | Open Policy Agent (OPA) (Cloud Native Computing Foundation) | https://www.cncf.io/projects/open-policy-agent-opa/ |
| S7 | The Istio service mesh (Istio Documentation) | https://istio.io/latest/about/service-mesh/ |
| S8 | What is Istio? (Istio Documentation) | https://istio.io/latest/docs/overview/what-is-istio/ |
| S9 | Architecture (Istio Documentation) | https://istio.io/latest/docs/ops/deployment/architecture/ |
| S10 | Ambient Mode Overview (Istio Documentation) | https://istio.io/latest/docs/ambient/overview/ |
| S11 | Traffic Management (Istio Documentation) | https://istio.io/latest/docs/concepts/traffic-management/ |
| S12 | Security (Istio Documentation) | https://istio.io/latest/docs/concepts/security/ |
| S13 | Observability (Istio Documentation) | https://istio.io/latest/docs/concepts/observability/ |
| S14 | Installation Configuration Profiles (Istio Documentation) | https://istio.io/latest/docs/setup/additional-setup/config-profiles/ |
| S15 | Diagnose your Configuration with Istioctl Analyze (Istio Documentation) | https://istio.io/latest/docs/ops/diagnostic-tools/istioctl-analyze/ |
| S16 | istioctl (Istio Documentation) | https://istio.io/latest/docs/reference/commands/istioctl/ |
| S17 | ReferencedResourceNotFound (Istio Documentation) | https://istio.io/latest/docs/reference/config/analysis/ist0101/ |
| S18 | What is Falco? (Falco Documentation) | https://falco.org/docs/ |
| S19 | Event Sources (Falco Documentation) | https://falco.org/docs/concepts/event-sources/ |
| S20 | Kernel Events (Falco Documentation) | https://falco.org/docs/concepts/event-sources/kernel/ |
| S21 | Plugins (Falco Documentation) | https://falco.org/docs/concepts/plugins/ |
| S22 | Falco Rules (Falco Documentation) | https://falco.org/docs/concepts/rules/ |
| S23 | Basic Elements of Falco Rules (Falco Documentation) | https://falco.org/docs/concepts/rules/basic-elements/ |
| S24 | Style Guide of Falco Rules (Falco Documentation) | https://falco.org/docs/concepts/rules/style-guide/ |
| S25 | Falco Daemon Arguments (Falco Documentation) | https://falco.org/docs/reference/daemon/cli-arguments/ |
| S26 | Install on a host (tarball) (Falco Documentation) | https://falco.org/docs/setup/tarball/ |
| S27 | Open Policy Agent (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs |
| S28 | Philosophy (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs/philosophy |
| S29 | Policy Language (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs/policy-language |
| S30 | Policy Testing (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs/policy-testing |
| S31 | CLI Reference (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs/cli |
| S32 | REST API (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs/rest-api |
| S33 | Decision Logs (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs/management-decision-logs |
| S34 | OPA for Kubernetes Admission Control (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs/kubernetes |
| S35 | OPA-Envoy Plugin (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs/envoy |
| S36 | Terraform (Open Policy Agent Documentation) | https://www.openpolicyagent.org/docs/terraform |
| S37 | Constraint Templates (Gatekeeper Documentation) | https://open-policy-agent.github.io/gatekeeper/website/docs/constrainttemplates/ |
| S38 | The gator CLI (Gatekeeper Documentation) | https://open-policy-agent.github.io/gatekeeper/website/docs/gator/ |
| S39 | event-generator (Falco on GitHub) | https://github.com/falcosecurity/event-generator |
| S40 | Falco rules (Falco on GitHub) | https://github.com/falcosecurity/rules/blob/main/README.md |
| S41 | Install on a host (DEB, RPM) (Falco Documentation) | https://falco.org/docs/setup/packages/ |
| S42 | Analysis Messages (Istio Documentation) | https://istio.io/latest/docs/reference/config/analysis/ |
| S43 | Default and Local Rules Files (Falco Documentation) | https://falco.org/docs/concepts/rules/default-custom/ |
| S44 | Falco Configuration Options (Falco Documentation) | https://falco.org/docs/reference/daemon/config-options/ |
| S45 | The k8saudit plugin (Falco Plugins on GitHub) | https://github.com/falcosecurity/plugins/blob/main/plugins/k8saudit/README.md |
| S46 | Loading plugins in Falco (Falco Documentation) | https://falco.org/docs/concepts/plugins/usage/ |
| S47 | Kubernetes Audit Events (Falco Documentation) | https://falco.org/docs/concepts/event-sources/plugins/kubernetes-audit/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | S1 | "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| CNCF is part of the nonprofit Linux Foundation | S1 | "CNCF is part of the nonprofit Linux Foundation" |
| Its Technical Oversight Committee (TOC) defines 4 stages of the project lifecycle | S3 | "the CNCF's Technical Oversight Committee (TOC)" |
| Its Technical Oversight Committee (TOC) defines 4 stages of the project lifecycle | S3 | "The TOC defines 4 stages of the project lifecycle:" |
| The CNCF projects page says that graduated and incubating projects are considered stable and are used successfully in production environments | S2 | "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| The TOC describes Incubation projects as projects gaining adoption, focusing on improving stability and maturity | S3 | "Incubation - Projects gaining adoption, focusing on improving stability and maturity." |
| It describes Graduated projects as highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments | S3 | "Graduated - Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments." |
| The CNCF page says that Istio was accepted on September 30, 2022 at the Incubating maturity level | S4 | "Istio was accepted to CNCF on September 30, 2022 at the Incubating maturity level" |
| Istio moved to the Graduated maturity level on July 12, 2023 | S4 | "and then moved to the Graduated maturity level on July 12, 2023." |
| The CNCF Falco page says that Falco was accepted on October 10, 2018 | S5 | "Falco was accepted to CNCF on October 10, 2018" |
| Falco moved to the Incubating maturity level on January 8, 2020 | S5 | "moved to the Incubating maturity level on January 8, 2020" |
| Falco moved to the Graduated maturity level on February 29, 2024 | S5 | "and then moved to the Graduated maturity level on February 29, 2024." |
| The CNCF OPA page says that the Open Policy Agent (OPA) was accepted on March 29, 2018 | S6 | "Open Policy Agent (OPA) was accepted to CNCF on March 29, 2018" |
| OPA moved to the Incubating maturity level on April 2, 2019 | S6 | "moved to the Incubating maturity level on April 2, 2019" |
| OPA moved to the Graduated maturity level on January 29, 2021 | S6 | "and then moved to the Graduated maturity level on January 29, 2021." |
| The project pages describe Istio as a service mesh that simplifies observability, traffic management, security, and policy | S4 | "Simplify observability, traffic management, security, and policy with the Istio service mesh." |
| They describe Falco as the cloud-native runtime security project | S5 | "Falco, the cloud-native runtime security project, is the de facto Kubernetes threat detection engine" |
| They describe Falco as the cloud-native runtime security project , and OPA as an open source, general-purpose policy engine | S6 | "An open source, general-purpose policy engine" |
| The Istio docs define a service mesh as an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes | S7 | "A service mesh is an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes." |
| Istio is an open source service mesh that layers transparently onto existing distributed applications | S8 | "Istio is an open source service mesh that layers transparently onto existing distributed applications." |
| It uses a proxy to intercept all your network traffic, which allows a broad set of application-aware features based on configuration you set | S8 | "Istio uses a proxy to intercept all your network traffic, allowing a broad set of application-aware features based on configuration you set." |
| The control plane takes your desired configuration, and its view of the services, and dynamically programs the proxy servers | S8 | "The control plane takes your desired configuration, and its view of the services, and dynamically programs the proxy servers, updating them as the rules or the environment changes." |
| Istio gives you secure service-to-service communication in a cluster with mutual TLS encryption | S8 | "Secure service-to-service communication in a cluster with mutual TLS encryption, strong identity-based authentication and authorization" |
| It gives you fine-grained control of traffic behavior with rich routing rules, retries, failovers, and fault injection | S8 | "Fine-grained control of traffic behavior with rich routing rules, retries, failovers, and fault injection" |
| It also gives you automatic metrics, logs, and traces for all traffic within a cluster | S8 | "Automatic metrics, logs, and traces for all traffic within a cluster, including cluster ingress and egress" |
| Istio supports two data plane modes | S8 | "Istio supports two data plane modes:" |
| Sidecar mode deploys an Envoy proxy along with each pod that you start in your cluster, or running alongside services running on VMs | S8 | "sidecar mode, which deploys an Envoy proxy along with each pod that you start in your cluster, or running alongside services running on VMs." |
| Ambient mode uses a per-node Layer 4 proxy, and optionally a per-namespace Envoy proxy for Layer 7 features | S8 | "ambient mode, which uses a per-node Layer 4 proxy, and optionally a per-namespace Envoy proxy for Layer 7 features." |
| In ambient mode, the ztunnel secure overlay handles routing and zero trust security for traffic | S10 | "At the base, the ztunnel secure overlay handles routing and zero trust security for traffic." |
| When needed, users can enable L7 waypoint proxies to get access to the full range of Istio features | S10 | "Above that, when needed, users can enable L7 waypoint proxies to get access to the full range of Istio features." |
| Pods and workloads using sidecar mode can co-exist within the same mesh as pods that use ambient mode | S10 | "Pods and workloads using sidecar mode can co-exist within the same mesh as pods that use ambient mode." |
| Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments | S18 | "Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments." |
| At its core, Falco is a monitoring and detection agent that observes events and delivers real-time alerts based on custom rules | S18 | "At its core, Falco is a monitoring and detection agent that observes events (such as Linux kernel events and other data sources through plugins) and delivers real-time alerts based on custom rules." |
| Falco also enhances these events by integrating contextual metadata from container runtimes and Kubernetes | S18 | "Falco also enhances these events by integrating contextual metadata from container runtimes and Kubernetes." |
| Falco uses syscalls to monitor a system's activity | S18 | "Falco uses syscalls to monitor a system's activity, by:" |
| Falco ships with a default set of rules that check the kernel for unusual behavior | S18 | "Falco ships with a default set of rules that check the kernel for unusual behavior such as:" |
| One example of the unusual behavior is privilege escalation using privileged containers | S18 | "Privilege escalation using privileged containers" |
| The OPA docs say that OPA is an open source, general-purpose policy engine that unifies policy enforcement across the stack | S27 | "is an open source, general-purpose policy engine that unifies policy enforcement across the stack." |
| OPA provides a high-level declarative language that lets you specify policy as code | S27 | "OPA provides a high-level declarative language that lets you specify policy as code and simple APIs to offload policy decision-making from your software." |
| OPA decouples policy decision-making from policy enforcement | S27 | "OPA decouples policy decision-making from policy enforcement." |
| When your software needs to make policy decisions, it queries OPA and supplies structured data as input | S27 | "When your software needs to make policy decisions it queries OPA and supplies structured data (e.g., JSON) as input." |
| OPA generates policy decisions by evaluating the query input against policies and data | S27 | "OPA generates policy decisions by evaluating the query input against policies and data." |
| Policy decisions are not limited to simple yes/no or allow/deny answers | S27 | "Policy decisions are not limited to simple yes/no or allow/deny answers." |
| In Kubernetes, admission controllers enforce policies on objects during create, update, and delete operations | S34 | "In Kubernetes, Admission Controllers enforce policies on objects during create, update, and delete operations." |
| OPA Gatekeeper is a specialized project providing first-class integration between OPA and Kubernetes | S34 | "OPA Gatekeeper is a specialized project providing first-class integration between OPA and Kubernetes." |
| The OPA docs say that Gatekeeper is the recommended project for using OPA for Kubernetes admission control | S34 | "OPA Gatekeeper is the recommended project for using OPA for Kubernetes admission control." |
| Gatekeeper adds native Kubernetes CRDs for extending the policy library, which are called constraint templates | S34 | "Native Kubernetes CRDs for extending the policy library (aka "constraint templates")." |
| It adds native Kubernetes CRDs for instantiating the policy library, which are called constraints | S34 | "Native Kubernetes CRDs for instantiating the policy library (aka "constraints")." |
| ConstraintTemplates define a way to validate some set of Kubernetes objects in Gatekeeper's Kubernetes admission controller | S37 | "ConstraintTemplates define a way to validate some set of Kubernetes objects in Gatekeeper's Kubernetes admission controller." |
| An Istio service mesh is logically split into a data plane and a control plane | S9 | "An Istio service mesh is logically split into a data plane and a control plane." |
| In sidecar mode, the data plane is a set of intelligent proxies, Envoy, deployed as sidecars | S9 | "The data plane is composed of a set of intelligent proxies (Envoy) deployed as sidecars." |
| These proxies mediate and control all network communication between microservices | S9 | "These proxies mediate and control all network communication between microservices." |
| They also collect and report telemetry on all mesh traffic | S9 | "They also collect and report telemetry on all mesh traffic." |
| Envoy proxies are the only Istio components that interact with data plane traffic | S9 | "Envoy proxies are the only Istio components that interact with data plane traffic." |
| The control plane manages and configures the proxies to route traffic | S9 | "The control plane manages and configures the proxies to route traffic." |
| Istiod provides service discovery, configuration, and certificate management | S9 | "Istiod provides service discovery, configuration and certificate management." |
| It converts high level routing rules that control traffic behavior into Envoy-specific configurations, and propagates them to the sidecars at runtime | S9 | "Istiod converts high level routing rules that control traffic behavior into Envoy-specific configurations, and propagates them to the sidecars at runtime." |
| Istiod acts as a Certificate Authority (CA) and generates certificates to allow secure mTLS communication in the data plane | S9 | "Istiod acts as a Certificate Authority (CA) and generates certificates to allow secure mTLS communication in the data plane." |
| The Istio docs say that the sidecar proxy model allows you to add Istio capabilities to an existing deployment without requiring you to rearchitect or rewrite code | S9 | "The sidecar proxy model also allows you to add Istio capabilities to an existing deployment without requiring you to rearchitect or rewrite code." |
| In ambient mode, Istio implements its features using a per-node Layer 4 proxy, and optionally a per-namespace Layer 7 proxy | S10 | "In ambient mode, Istio implements its features using a per-node Layer 4 (L4) proxy, and optionally a per-namespace Layer 7 (L7) proxy." |
| This layered approach lets you adopt Istio in a more incremental fashion | S10 | "This layered approach allows you to adopt Istio in a more incremental fashion, smoothly transitioning from no mesh, to a secure L4 overlay, to full L7 processing and policy" |
| Waypoint proxies are heavier than the ztunnel overlay alone | S10 | "Waypoint proxies, while heavier than the ztunnel overlay alone, still run as an ambient component of the infrastructure, requiring no modifications to application pods." |
| They still run as an ambient component of the infrastructure, and they need no modification of the application pods | S10 | "still run as an ambient component of the infrastructure, requiring no modifications to application pods." |
| Virtual services, along with destination rules, are the key building blocks of Istio's traffic routing functionality | S11 | "Virtual services, along with destination rules, are the key building blocks of Istio's traffic routing functionality." |
| A virtual service lets you configure how requests are routed to a service within an Istio service mesh | S11 | "A virtual service lets you configure how requests are routed to a service within an Istio service mesh" |
| Each virtual service consists of a set of routing rules that are evaluated in order | S11 | "Each virtual service consists of a set of routing rules that are evaluated in order, letting Istio match each given request to the virtual service to a specific real destination within the mesh." |
| A virtual service can send traffic to different versions of a service, such as "20% of calls go to the new version" | S11 | "Clients send requests to the virtual service host as if it was a single entity, and Envoy then routes the traffic to the different versions depending on the virtual service rules: for example, "20% of calls go to the new version" or "calls from these users go to version 2"." |
| This allows a canary rollout, where you gradually increase the percentage of traffic that is sent to a new service version | S11 | "This allows you to, for instance, create a canary rollout where you gradually increase the percentage of traffic that's sent to a new service version." |
| Destination rules let you customize Envoy's traffic policies when calling the entire destination service or a particular service subset | S11 | "Destination rules also let you customize Envoy's traffic policies when calling the entire destination service or a particular service subset, such as your preferred load balancing model, TLS security mode, or circuit breaker settings." |
| In some cases you also need to configure destination rules to use the features of virtual services, as destination rules are where you specify your service subsets | S11 | "In some cases you also need to configure destination rules to use these features, as these are where you specify your service subsets." |
| Gateways are primarily used to manage ingress traffic, but you can also configure egress gateways | S11 | "Gateways are primarily used to manage ingress traffic, but you can also configure egress gateways." |
| An egress gateway lets you configure a dedicated exit node for the traffic leaving the mesh | S11 | "An egress gateway lets you configure a dedicated exit node for the traffic leaving the mesh" |
| Istio provides some preconfigured gateway proxy deployments that you can use, istio-ingressgateway and istio-egressgateway | S11 | "Istio provides some preconfigured gateway proxy deployments (istio-ingressgateway and istio-egressgateway) that you can use" |
| Both are deployed if you use the demo installation | S11 | "both are deployed if you use our demo installation, while just the ingress gateway is deployed with our default profile." |
| Just the ingress gateway is deployed with the default profile | S11 | "while just the ingress gateway is deployed with our default profile." |
| A timeout is the amount of time that an Envoy proxy should wait for replies from a given service | S11 | "A timeout is the amount of time that an Envoy proxy should wait for replies from a given service" |
| The Envoy timeout for HTTP requests is disabled in Istio by default | S11 | "The Envoy timeout for HTTP requests is disabled in Istio by default." |
| A retry setting specifies the maximum number of times an Envoy proxy attempts to connect to a service if the initial call fails | S11 | "A retry setting specifies the maximum number of times an Envoy proxy attempts to connect to a service if the initial call fails." |
| The default retry behavior for HTTP requests is to retry twice before returning the error | S11 | "The default retry behavior for HTTP requests is to retry twice before returning the error." |
| In a circuit breaker, you set limits for calls to individual hosts within a service | S11 | "In a circuit breaker, you set limits for calls to individual hosts within a service, such as the number of concurrent connections or how many times calls to this host have failed." |
| Once that limit has been reached, the circuit breaker "trips" and stops further connections to that host | S11 | "Once that limit has been reached the circuit breaker "trips" and stops further connections to that host." |
| You configure circuit breaker thresholds in destination rules | S11 | "you configure circuit breaker thresholds in destination rules, with the settings applying to each individual host in the service." |
| Fault injection is a testing method that introduces errors into a system to ensure that it can withstand and recover from error conditions | S11 | "Fault injection is a testing method that introduces errors into a system to ensure that it can withstand and recover from error conditions." |
| Istio lets you inject faults at the application layer, unlike delaying packets or killing pods at the network layer | S11 | "Unlike other mechanisms for introducing errors, such as delaying packets or killing pods at the network layer, Istio lets you inject faults at the application layer." |
| You can inject two types of faults, both configured using a virtual service | S11 | "You can inject two types of faults, both configured using a virtual service:" |
| Delays are timing failures that mimic increased network latency or an overloaded upstream service | S11 | "Delays: Delays are timing failures. They mimic increased network latency or an overloaded upstream service." |
| Aborts are crash failures that mimic failures in upstream services | S11 | "Aborts: Aborts are crash failures. They mimic failures in upstream services." |
| Currently, the fault injection configuration can not be combined with retry or timeout configuration on the same virtual service | S11 | "Currently, the fault injection configuration can not be combined with retry or timeout configuration on the same virtual service" |
| Istio failure recovery features are completely transparent to the application | S11 | "Istio failure recovery features are completely transparent to the application." |
| If you also set failure recovery policies in your application code, both work independently and therefore might conflict | S11 | "This means that if you are also setting failure recovery policies in your application code you need to keep in mind that both work independently, and therefore might conflict." |
| Peer authentication is used for service-to-service authentication to verify the client making the connection | S12 | "Peer authentication: used for service-to-service authentication to verify the client making the connection." |
| Istio offers mutual TLS as a full stack solution for transport authentication, which can be enabled without requiring service code changes | S12 | "Istio offers mutual TLS as a full stack solution for transport authentication, which can be enabled without requiring service code changes." |
| With mutual TLS, Istio re-routes the outbound traffic from a client to the client's local sidecar Envoy | S12 | "Istio re-routes the outbound traffic from a client to the client’s local sidecar Envoy." |
| The client side Envoy starts a mutual TLS handshake with the server side Envoy | S12 | "The client side Envoy starts a mutual TLS handshake with the server side Envoy." |
| The server side Envoy authorizes the request | S12 | "The server side Envoy authorizes the request." |
| Istio configures TLSv1_2 as the minimum TLS version for both client and server | S12 | "Istio configures TLSv1_2 as the minimum TLS version for both client and server with the following cipher suites:" |
| Istio mutual TLS has a permissive mode, which allows a service to accept both plaintext traffic and mutual TLS traffic at the same time | S12 | "Istio mutual TLS has a permissive mode, which allows a service to accept both plaintext traffic and mutual TLS traffic at the same time." |
| The docs say that this feature greatly improves the mutual TLS onboarding experience | S12 | "This feature greatly improves the mutual TLS onboarding experience." |
| The operator can gradually install and configure the client's Istio sidecars to send mutual TLS traffic | S12 | "As a result, the operator can gradually install and configure the client’s Istio sidecars to send mutual TLS traffic." |
| Once the configuration of the clients is complete, the operator can configure the server to mutual TLS only mode | S12 | "Once the configuration of the clients is complete, the operator can configure the server to mutual TLS only mode." |
| Authorization policies support ALLOW, DENY, and CUSTOM actions | S12 | "Authorization policies support ALLOW, DENY and CUSTOM actions." |
| Istio checks for matching policies in layers, in this order: CUSTOM, DENY, and then ALLOW | S12 | "Istio checks for matching policies in layers, in this order: CUSTOM, DENY, and then ALLOW." |
| When you apply multiple authorization policies to the same workload, Istio applies them additively | S12 | "When you apply multiple authorization policies to the same workload, Istio applies them additively." |
| The deny policy takes precedence over the allow policy | S12 | "The deny policy takes precedence over the allow policy." |
| An authorization policy includes a selector, an action, and a list of rules | S12 | "An authorization policy includes a selector, an action, and a list of rules:" |
| If the selector is not set, the policy applies to all workloads in the same namespace as the policy | S12 | "If not set, the authorization policy applies to all workloads in the same namespace as the authorization policy." |
| The "deny by default" behavior applies only if the workload has at least one authorization policy with the ALLOW action | S12 | "Note the “deny by default” behavior applies only if the workload has at least one authorization policy with the ALLOW action." |
| The docs call it a good security practice to start with the allow-nothing policy and incrementally add more ALLOW policies to open more access to the workload | S12 | "It is a good security practice to start with the allow-nothing policy and incrementally add more ALLOW policies to open more access to the workload." |
| Istio generates detailed telemetry for all service communications within a mesh | S13 | "Istio generates detailed telemetry for all service communications within a mesh." |
| It generates metrics, distributed traces, and access logs | S13 | "Metrics. Istio generates a set of service metrics based on the four “golden signals” of monitoring (latency, traffic, errors, and saturation)." |
| The four golden signals of monitoring are latency, traffic, errors, and saturation | S13 | "based on the four “golden signals” of monitoring (latency, traffic, errors, and saturation)." |
| The standard Istio metrics are exported to Prometheus by default | S13 | "The standard Istio metrics are exported to Prometheus by default." |
| Istio supports distributed tracing through the Envoy proxies | S13 | "Istio supports distributed tracing through the Envoy proxies." |
| The proxies automatically generate trace spans on behalf of the applications they proxy, requiring only that the applications forward the appropriate request context | S13 | "The proxies automatically generate trace spans on behalf of the applications they proxy, requiring only that the applications forward the appropriate request context." |
| Istio supports a number of tracing backends, including Zipkin, Jaeger, and many tools and services that support OpenTelemetry | S13 | "Istio supports a number of tracing backends, including Zipkin, Jaeger, and many tools and services that support OpenTelemetry." |
| By default, Istio enables only a small subset of the Envoy-generated statistics | S13 | "By default, Istio enables only a small subset of the Envoy-generated statistics to avoid overwhelming metrics backends and to reduce the CPU overhead associated with metrics collection." |
| The built-in deployment profiles are just sets of Helm values overrides | S14 | "Note that as these are just sets of Helm values overrides, using them is not strictly required to install Istio, but they do provide a convenient baseline and are recommended for new installs." |
| The default profile enables components according to the default settings of the IstioOperator API | S14 | "default: enables components according to the default settings of the IstioOperator API." |
| The demo profile is designed to showcase Istio functionality with modest resource requirements | S14 | "demo: configuration designed to showcase Istio functionality with modest resource requirements." |
| The demo profile enables high levels of tracing and access logging, so it is not suitable for performance tests | S14 | "This profile enables high levels of tracing and access logging so it is not suitable for performance tests." |
| The minimal profile is the same as the default profile, but only the control plane components are installed | S14 | "minimal: same as the default profile, but only the control plane components are installed." |
| The ambient profile is designed to help you get started with ambient mode | S14 | "ambient: the ambient profile is designed to help you get started with ambient mode." |
| The empty profile deploys nothing | S14 | "empty: deploys nothing." |
| The istioctl manifest generate command generates an Istio install manifest and outputs it to the console by default | S16 | "The generate subcommand generates an Istio install manifest and outputs to the console by default." |
| istioctl analyze is a diagnostic tool that can detect potential issues with your Istio configuration | S15 | "istioctl analyze is a diagnostic tool that can detect potential issues with your Istio configuration." |
| It can run against a live cluster or a set of local configuration files | S15 | "It can run against a live cluster or a set of local configuration files." |
| It can also run against a combination of the two, which allows you to catch problems before you apply changes to a cluster | S15 | "It can also run against a combination of the two, allowing you to catch problems before you apply changes to a cluster." |
| When you analyze a set of local files, the file-set is expected to be fully self-contained | S15 | "When analyzing a set of local files, the file-set is expected to be fully self-contained." |
| To analyze local files, add the --use-kube=false flag | S15 | "The tool also supports performing analysis of a set of local Kubernetes yaml configuration files, or on a combination of local files and a live cluster." |
| To analyze local files, add the --use-kube=false flag | S15 | "To use this feature, simply add the --use-kube=false flag." |
| The reference lists --all-namespaces (-A) to analyze all namespaces and --namespace (-n) for one | S16 | "--all-namespaces -A Analyze all namespaces" |
| The --failure-threshold option sets the severity level of analysis at which to set a non-zero exit code | S16 | "--failure-threshold <Level> The severity level of analysis at which to set a non-zero exit code. Valid values: [Info Warning Error] (default `Error`)" |
| The --output option takes one of log, json, or yaml, with log as the default | S16 | "--output <string> -o Output format: one of [log json yaml] (default `log`)" |
| The -L option lists the analyzers that are available to run | S16 | "--list-analyzers -L List the analyzers available to run. Suppresses normal execution." |
| The message IST0101 has the level Error, and it occurs when an Istio resource references another resource that does not exist | S17 | "Level Error This message occurs when an Istio resource references another resource that does not exist." |
| The docs say that this will lead to errors when Istio tries to look up the referenced resource but cannot find it | S17 | "This will lead to errors when Istio tries to look up the referenced resource but cannot find it." |
| For example, a VirtualService refers to a gateway that does not exist | S17 | "In this example, the VirtualService refers to a gateway that does not exist:" |
| The docs also describe an experimental feature, which is intended for evaluation purposes only | S15 | "The following information describes an experimental feature, which is intended for evaluation purposes only." |
| In it, Istio can be set up to perform the analysis alongside the configuration distribution | S15 | "Starting with v1.5, Istio can be set up to perform configuration analysis alongside the configuration distribution that it is primarily responsible for, via the istiod.enableAnalysis flag." |
| In that case, the validation messages are written to the status subresource of the affected Istio resource | S15 | "Validation messages from the analysis are written to the status subresource of the affected Istio resource." |
| The docs say that this is not a replacement for istioctl analyze | S15 | "Note that this isn’t a replacement for istioctl analyze:" |
| Falco uses syscalls to monitor a system's activity | S18 | "Falco uses syscalls to monitor a system's activity, by:" |
| It parses the Linux syscalls from the kernel at runtime | S18 | "Parsing the Linux syscalls from the kernel at runtime" |
| It asserts the stream against a rules engine, and it alerts when a rule is violated | S18 | "Asserting the stream against a powerful rules engine Alerting when a rule is violated" |
| Falco's monitoring capabilities are not limited to syscalls, because it can be extended via plugins to ingest data from many more types of sources | S18 | "Falco's monitoring capabilities are not limited to syscalls as it can be extended via plugins to ingest data from many more types of sources." |
| The userspace program handles signals, parses information from a Falco driver, and sends alerts | S18 | "The userspace program handles signals, parses information from a Falco driver, and sends alerts." |
| The configuration defines how Falco is run, what rules to assert, and how to perform alerts | S18 | "Configuration - defines how Falco is run, what rules to assert, and how to perform alerts." |
| Falco natively supports the syscall event source, which is enabled by default, consuming events from the Linux Kernel via drivers | S19 | "Falco natively supports the syscall event source, which is enabled by default, consuming events from the Linux Kernel via drivers." |
| The plugin system allows Falco to extend its capabilities with new event sources | S19 | "The plugin system allows Falco to extend its capabilities with new event sources." |
| Each event source operates in an isolated thread | S19 | "Each event source operates in an isolated thread, where events are generated, consumed, and evaluated by Falco’s rule engine." |
| Rules are partitioned by event source, meaning each rule applies to a specific source and is triggered exclusively by events from that source | S19 | "Rules are partitioned by event source, meaning each rule applies to a specific source and is triggered exclusively by events from that source." |
| Falco does not support correlating events from different sources | S19 | "Falco does not support correlating events from different sources." |
| By default, Falco enables event collection from all known sources | S19 | "By default, Falco enables event collection from all known sources, including syscall and other data sources added through plugins." |
| For plugin-based deployments, you disable the syscall source explicitly, or enable only the plugin-based sources that you want | S19 | "For plugin-based deployments, disable syscall explicitly or enable only the desired plugin-based sources." |
| Attempting to disable unknown sources or all sources results in an error | S19 | "Attempting to disable unknown sources or all sources results in an error." |
| A driver runs in kernelspace | S20 | "We usually refer to these instrumentations as drivers since a driver runs in kernelspace." |
| The driver provides the syscall event source | S20 | "The driver provides the syscall event source since the monitored events are strictly related to the syscall context." |
| The docs say that there are several supported drivers | S20 | "There are several supported drivers: Modern eBPF probe (default) Kernel module" |
| They list the modern eBPF probe, which is the default, and the kernel module | S20 | "There are several supported drivers: Modern eBPF probe (default) Kernel module" |
| The kernel module requires full privileges and cannot run with Linux capabilities | S20 | "The kernel module requires full privileges and cannot run with Linux capabilities" |
| The modern eBPF probe doesn't require a specific kernel version | S20 | "The modern eBPF probe doesn't require a specific kernel version." |
| Usually, all versions at or above 5.8 are enough | S20 | "Usually, all versions >=5.8 are enough" |
| The 2 main required features are BPF ring buffer support and a kernel that exposes BTF | S20 | "The 2 main required features are: BPF ring buffer support. A kernel that exposes BTF." |
| The tarball page says that by default Falco consumes events from the Linux Kernel, which requires Falco to be privileged | S26 | "By default, Falco is pre-configured to consume events from the Linux Kernel. This scenario requires Falco to be privileged, and depending on the kernel version installed on the host, a driver needs to be installed." |
| To use the syscall source without a driver, you run Falco with -o engine.kind=nodriver | S19 | "To disable the driver and still use the syscall source, run Falco with: falco -o engine.kind=nodriver" |
| In that mode Falco continues to process syscall events, but it does not use a driver to capture them | S19 | "Falco will continue to process syscall events in this mode, but it will not use a driver to capture them." |
| A Falco rules file is a YAML file containing mainly three types of elements | S22 | "A Falco rules file is a YAML file containing mainly three types of elements:" |
| Rules are the conditions under which an alert should be generated | S22 | "Conditions under which an alert should be generated." |
| A rule is accompanied by a descriptive output string that is sent with the alert | S22 | "A rule is accompanied by a descriptive output string that is sent with the alert." |
| Macros are rule condition snippets that can be re-used inside rules and even other macros | S22 | "Rule condition snippets that can be re-used inside rules and even other macros." |
| Lists are collections of items that can be included in rules, macros, or other lists | S22 | "Collections of items that can be included in rules, macros, or other lists." |
| Unlike rules and macros, lists cannot be parsed as filtering expressions | S22 | "Unlike rules and macros, lists cannot be parsed as filtering expressions." |
| A rules file can also hold required_engine_version, which tracks compatibility between rules content and the Falco engine version | S22 | "Used to track compatibility between rules content and the falco engine version." |
| A rule is a YAML object, part of the rules file, whose definition contains at least the fields rule, desc, condition, output, and priority | S23 | "A rule is a YAML object, part of the rules file, whose definition contains at least the following fields:" |
| The key part of a rule is the condition field | S23 | "The key part of a rule is the condition field." |
| A condition is a Boolean predicate expressed using the condition syntax | S23 | "A condition is a Boolean predicate expressed using the condition syntax." |
| A rule output is a string that can use the same fields that conditions can use, prepended by % to perform interpolation, akin to printf | S23 | "A rule output is a string that can use the same fields that conditions can use prepended by % to perform interpolation, akin to printf." |
| Every Falco rule has a priority which indicates how serious a violation of the rule is | S23 | "Every Falco rule has a priority which indicates how serious a violation of the rule is." |
| The available priorities are EMERGENCY, ALERT, CRITICAL, ERROR, WARNING, NOTICE, INFORMATIONAL, and DEBUG | S23 | "Here are the available priorities: EMERGENCY ALERT CRITICAL ERROR WARNING NOTICE INFORMATIONAL DEBUG" |
| In a rule, the priority has nothing to do with overriding another rule or choosing the order in which rules will be triggered | S23 | "In a Falco Rule, it has nothing to do with overriding another rule or choosing the order in which rules will be triggered." |
| The way to control that order is to change the order in which the rules are defined, and therefore loaded | S23 | "The way to control the latter is achieved by changing the order the rules are defined and therefore loaded." |
| The docs give an example of a condition that alerts whenever a bash shell is run inside a container, container.id != host and proc.name = bash | S23 | "Here's an example of a condition that alerts whenever a bash shell is run inside a container: container.id != host and proc.name = bash" |
| Since this condition does not include a clause with a system call, it will only check event metadata | S23 | "Since this condition does not include a clause with a system call it will only check event metadata." |
| Because of that, if a bash shell does start up in a container, Falco outputs events for every syscall that is performed by that shell | S23 | "Because of that, if a bash shell does start up in a container, Falco outputs events for every syscall that is performed by that shell." |
| To be alerted only for each successful spawn of a shell in a container, you add the appropriate event types to the condition | S23 | "If you want to be alerted only for each successful spawn of a shell in a container, add the appropriate event types to the condition:" |
| In the example of the docs, if the connection happens outside a container, the field %container.image.repository would not be set, and is displayed instead | S23 | "As you can see in the example above if the connection happens outside a container the field %container.image.repository would not be set and <NA> is displayed instead." |
| The Falco docs say that Falco by default applies rules per event type on a "first match wins" basis | S24 | "Keep in mind that Falco by default applies rules per event type on a "first match wins" basis." |
| Starting from Falco Release 0.36.0, you can change the configuration to rule_matching: all | S24 | "Starting from Falco Release 0.36.0, you have the option to modify the configuration to rule_matching: all." |
| This change ensures that rules sharing the same event type cannot override each other, which prevents inconsistent logging | S24 | "This change ensures that rules sharing the same event type cannot override each other, preventing inconsistent logging." |
| The docs warn that this modification may lead to increased CPU usage | S24 | "Be aware, though, that this modification may lead to increased CPU usage." |
| The -c option sets the configuration file, and the default is /etc/falco/falco.yaml | S25 | "-c <path> Configuration file. If not specified uses /etc/falco/falco.yaml." |
| The -V (--validate) option reads the specified rules files, validates the loaded rules, and exits | S25 | "-V, --validate <rules_file> Read the contents of the specified <rules_file> file(s), validate the loaded rules, and exit." |
| You can pass it several times to validate several files | S25 | "This option can be passed multiple times to validate multiple files." |
| The --dry-run option runs Falco without processing events, and it can help check that the configuration and rules do not have any errors | S25 | "--dry-run Run Falco without processing events. It can help check that the configuration and rules do not have any errors." |
| The -L option shows the name and description of all rules and exits | S25 | "-L Show the name and description of all rules and exit." |
| The -r option sets a rules file or directory to be loaded, and only files with a .yml or .yaml extension are considered | S25 | "Only files with .yml or .yaml extension are considered." |
| The -o option sets the value of a configuration option, and it overrides the values in the configuration file | S25 | "-o, --option <opt>=<val> Set the value of option <opt> to <val>. Overrides values in the configuration file." |
| The --list option lists all defined fields and exits | S25 | "--list [=<source>(=)] List all defined fields and exit." |
| Plugins are shared libraries that conform to a documented API | S21 | "Plugins are shared libraries that conform to a documented API, hooking into the core functionalities of Falco to allow things such as:" |
| They can add new event sources that can be evaluated using filtering expressions or Falco rules | S21 | "Adding new event sources that can be evaluated using filtering expressions/Falco rules." |
| They can add the ability to define new fields that can extract information from events | S21 | "Adding the ability to define new fields that can extract information from events." |
| The k8s_audit source is provided by the k8saudit plugin | S19 | "the k8s_audit source is provided by the k8saudit plugin." |
| The docs say that the plugins for this source all share the same set of rules | S19 | "They all share the same set of rules." |
| Falcoctl allows you to easily install rules and plugins and perform administrative tasks with Falco | S18 | "Falcoctl - allows to easily install rules and plugins and perform administrative tasks with Falco." |
| It is bundled together with Falco | S18 | "It is bundled together with Falco." |
| Alerts are configurable downstream actions that can be as simple as logging to stdout or as complex as delivering an HTTP request to an endpoint | S18 | "Alerts are configurable downstream actions that can be as simple as logging to stdout or as complex as delivering an HTTP request to an endpoint." |
| Falco runs on Linux and is available for the x86_64 and aarch64 architectures | S26 | "Falco runs on Linux and is available for the x86_64 and aarch64 architectures." |
| Falco with its bundled plugins requires GLIBC 2.28 or newer | S26 | "Falco with its bundled plugins requires GLIBC 2.28 or newer." |
| The tarball page installs Falco by unpacking the archive and copying it to / | S26 | "tar -xvf falco-0.45.2-x86_64.tar.gz cp -R falco-0.45.2-x86_64/* /" |
| The Falco .tar.gz archive doesn't include the Systemd setup | S26 | "The Falco .tar.gz archive doesn't include the Systemd setup." |
| The configuration file is located at /etc/falco/falco.yaml | S26 | "The Falco configuration file is located at /etc/falco/falco.yaml." |
| You can also override the default configuration by passing options to the falco binary | S26 | "You can also override the default configuration by passing options to the falco binary." |
| The Falco rules repository says that the maturity_stable rules in the falco_rules.yaml file are included in the Falco release package | S40 | "Published upon tagging a new release, the maturity_stable rules in the falco_rules.yaml file are included in the Falco release package." |
| Other maturity-level rules are released separately, and they require explicit installation and possible customization | S40 | "Other maturity-level rules are released separately, requiring explicit installation and possible customization for effective Adoption." |
| The repository adds that the Rules Maturity Framework is a best effort on the part of the community, and that you have to decide if any rules are useful for your use cases | S40 | "Lastly, keep in mind that the Rules Maturity Framework is a best effort on the part of the community, and ultimately, you have to decide if any rules are useful for your use cases." |
| The event-generator tool generates a variety of suspect actions that are detected by Falco rulesets | S39 | "Generate a variety of suspect actions that are detected by Falco rulesets" |
| Its k8saudit events collection is maintained on a best-effort basis and may not fully work | S39 | "The k8saudit events collection in the event-generator is maintained on a best-effort basis and may not fully work." |
| The OPA docs say that today policy is often a hard-coded feature of the software service that it governs | S28 | "Today policy is often a hard-coded feature of the software service it actually governs." |
| OPA lets you decouple policy from that software service, so that the people responsible for policy can read, write, analyze, version, distribute, and manage it separately from the service | S28 | "Open Policy Agent lets you decouple policy from that software service so that the people responsible for policy can read, write, analyze, version, distribute, and in general manage policy separate from the service itself." |
| Software services should allow policies to be specified declaratively, updated at any time without recompiling or redeploying, and enforced automatically | S28 | "Software services should allow policies to be specified declaratively, updated at any time without recompiling or redeploying, and enforced automatically" |
| Authorization is sometimes confused with authentication | S28 | "Authorization is sometimes confused with Authentication: how people or machines prove they are who they say they are." |
| Rego is declarative, so policy authors can focus on what queries should return rather than how queries should be executed | S29 | "Rego is declarative so policy authors can focus on what queries should return rather than how queries should be executed." |
| All modules contain implicit statements which import the data and input documents | S29 | "All modules contain implicit statements which import the data and input documents." |
| Expressions that refer to undefined values are also undefined | S29 | "Expressions that refer to undefined values are also undefined." |
| The default keyword allows policies to define a default value for documents produced by rules with complete definitions | S29 | "The default keyword allows policies to define a default value for documents produced by rules with complete definitions." |
| The with keyword allows queries to programmatically specify values nested under the input document or the data document, or built-in functions | S29 | "The with keyword allows queries to programmatically specify values nested under the input document or the data document, or built-in functions." |
| Variables in Rego are existentially quantified by default | S29 | "Variables in Rego are existentially quantified by default" |
| The OPA CLI reference lists the options --v0-compatible and --v1-compatible | S31 | "--v0-compatible Opt-in to OPA features and behaviors prior to the OPA v1.0 release --v1-compatible Opt-in to OPA features and behaviors that are enabled by default in OPA v1.0" |
| For opa fmt, v1 Rego is formatted to v1, and v0 Rego is rejected | S31 | "opa fmt: v1 Rego is formatted to v1" |
| For opa fmt, v1 Rego is formatted to v1, and v0 Rego is rejected | S31 | "v0 rego is rejected" |
| With opa fmt --v0-compatible, v0 Rego is formatted to v0, and v1 Rego is rejected | S31 | "opa fmt --v0-compatible: v0 Rego is formatted to v0 v1 Rego is rejected" |
| The Gatekeeper docs say that using Rego v1 syntax in a ConstraintTemplate is opt-in, and that by default only Rego v0 is allowed | S37 | "Using Rego v1 syntax is opt-in, by default only Rego v0 is allowed." |
| OPA gives you a framework that you can use to write tests for your policies | S30 | "OPA also gives you a framework that you can use to write tests for your policies." |
| Tests are expressed as standard Rego rules with a convention that the rule name is prefixed with test_ | S30 | "Tests are expressed as standard Rego rules with a convention that the rule name is prefixed with test_." |
| The opa test subcommand runs all of the tests found in Rego files passed on the command line | S30 | "The opa test subcommand runs all of the tests (i.e., rules prefixed with test_) found in Rego files passed on the command line." |
| If the test rule is undefined or generates a non-true value, the test result is reported as FAIL | S30 | "If the test rule is undefined or generates a non-" |
| If the test rule is undefined or generates a non-true value, the test result is reported as FAIL | S30 | "value the test result is reported as FAIL." |
| If the test encounters a runtime error, the result is marked as an ERROR | S30 | "If the test encounters a runtime error (e.g., a divide by zero condition) the test result is marked as an ERROR." |
| Tests prefixed with todo_ are reported as SKIPPED | S30 | "Tests prefixed with todo_ will be reported as SKIPPED." |
| When you misspell a test name or run no test by accident, opa test still succeeds | S30 | "When misspelling a test name or running no test by accident, opa test will still succeed, use --fail-on-empty to make it fail instead." |
| The docs say that --fail-on-empty is also useful in CI/CD pipelines to ensure that tests are actually being executed | S30 | "This is also useful in CI/CD pipelines to ensure that tests are actually being executed." |
| opa test can also report coverage for the policies under test | S30 | "In addition to reporting pass, fail, and error results for tests, opa test can also report coverage for the policies under test." |
| The opa eval option --fail exits with a non-zero exit code on an undefined or empty result and on errors | S31 | "--fail Exits with non-zero exit code on undefined/empty result and errors" |
| The option --fail-defined exits with a non-zero exit code on a defined or non-empty result and on errors | S31 | "--fail-defined Exits with non-zero exit code on defined/non-empty result and errors" |
| opa check checks Rego source files for parse and compilation errors | S31 | "Check Rego source files for parse and compilation errors." |
| If it succeeds, it produces no output | S31 | "If the 'check' command succeeds in parsing and compiling the source file(s), no output is produced." |
| If it fails, it outputs the errors and exits with a non-zero exit code | S31 | "If the parsing or compiling fails, 'check' will output the errors and exit with a non-zero exit code." |
| The reference lists --strict, which enables compiler strict mode | S31 | "-S --strict Enable compiler strict mode" |
| opa fmt --fail returns a non-zero exit code if a file would be reformatted | S31 | "If the '--fail' option is supplied, the 'fmt' command will return a non zero exit code if a file would be reformatted." |
| opa fmt -l outputs the names of files that would change if formatted | S31 | "If the '-l' option is supplied, the 'fmt' command will output the names of files that would change if formatted." |
| The Data API takes POST /v1/data/{path} with a JSON body of the form {"input": ...} | S32 | "POST /v1/data/{path:.+} Content-Type: application/json { "input": ... }" |
| The request body contains an object that specifies a value for the input document | S32 | "The request body contains an object that specifies a value for The input Document." |
| Any additional top-level keys in the request body beyond input are treated as request metadata | S32 | "Any additional top-level keys in the request body beyond input are treated as request metadata." |
| The server returns 200 if the path refers to an undefined document | S32 | "The server returns 200 if the path refers to an undefined document." |
| In that case, the response does not contain a result property | S32 | "In this case, the response will not contain a result property." |
| If decision logging is enabled, the response has a decision_id field that uniquely identifies the decision | S32 | "decision_id - If decision logging is enabled, this field contains a string that uniquely identifies the decision." |
| Callers can use the identifier for correlation purposes | S32 | "Callers can use the identifier for correlation purposes." |
| OPA can report decision logs to remote HTTP servers, using custom plugins, or to the console output, or to any combination of these | S33 | "OPA can periodically report decision logs to remote HTTP servers, using custom plugins, or to the console output; or any combination thereof." |
| The decision logs contain events that describe policy queries | S33 | "The decision logs contain events that describe policy queries." |
| Each event includes the policy that was queried, the input to the query, bundle metadata, and other information that enables auditing and offline debugging of policy decisions | S33 | "Each event includes the policy that was queried, the input to the query, bundle metadata, and other information that enables auditing and offline debugging of policy decisions." |
| When decision logging is enabled, the OPA server includes a decision_id field in API calls that return policy decisions | S33 | "When decision logging is enabled the OPA server will include a decision_id field in API calls that return policy decisions." |
| The path field of an event holds the hierarchical policy decision path | S33 | "[_].path string Hierarchical policy decision path, e.g., /http/example/authz/allow." |
| The input field holds the input data provided in the policy query | S33 | "[_].input any Input data provided in the policy query." |
| The result field holds the policy decision returned to the client | S33 | "[_].result any Policy decision returned to the client, e.g., true or false." |
| With plain OPA, the Kubernetes API Server is configured to query OPA for admission control decisions when objects are created, updated, or deleted | S34 | "The Kubernetes API Server is configured to query OPA for admission control decisions when objects (e.g., Pods, Services, etc.) are created, updated, or deleted." |
| The API Server sends the entire Kubernetes object in the webhook request to OPA | S34 | "The API Server sends the entire Kubernetes object in the webhook request to OPA." |
| OPA evaluates the policies it has loaded using the admission review as input | S34 | "OPA evaluates the policies it has loaded using the admission review as input." |
| In that input, input.request.object contains the entire Kubernetes object | S34 | "input.request.object contains the entire Kubernetes object." |
| Gatekeeper adds an extensible, parameterized policy library | S34 | "An extensible, parameterized policy library." |
| It also adds audit functionality | S34 | "Audit functionality." |
| Plain OPA and Kube-mgmt are alternatives that can be reached for if you want to use the management features of OPA, such as status logs, decision logs, and bundles | S34 | "Plain OPA and Kube-mgmt (see below) are alternatives that can be reached for if you want to use the management features of OPA, such as status logs, decision logs, and bundles." |
| ConstraintTemplates are made of two main elements | S37 | "ConstraintTemplates are made of two main elements:" |
| One is the Rego or CEL policy code that defines the policy violation logic | S37 | "Rego or CEL policy code in either spec.targets[].rego or spec.targets[].code[] that defines policy violation logic" |
| The other is the schema of the accompanying Constraint object, which represents an instantiation of a ConstraintTemplate | S37 | "The schema of the accompanying Constraint object, which represents an instantiation of a ConstraintTemplate" |
| The Gatekeeper docs show a violation rule that has a msg | S37 | "package k8srequiredlabels violation" |
| The Gatekeeper docs show a violation rule that has a msg | S37 | ""msg": msg, "details":" |
| The docs say that Rego v1 syntax can only be used under targets[_].code[_] with engine: Rego and version: "v1" | S37 | "Rego v1 syntax can only be used under targets[_].code[_].[engine: Rego].source with version: "v1"." |
| The gator CLI is a tool for evaluating Gatekeeper ConstraintTemplates and Constraints in a local environment | S38 | "The gator CLI is a tool for evaluating Gatekeeper ConstraintTemplates and Constraints in a local environment." |
| gator test tests a set of Kubernetes objects against a set of Templates and Constraints | S38 | "gator test allows users to test a set of Kubernetes objects against a set of Templates and Constraints." |
| The command returns violations when found and communicates success or failure via its exit status | S38 | "The command returns violations when found and communicates success or failure via its exit status." |
| gator verify organizes tests into three levels: Suites, Tests, and Cases | S38 | "gator verify organizes tests into three levels: Suites, Tests, and Cases:" |
| A Case defines an object to validate and whether the object is expected to pass validation | S38 | "A Case defines an object to validate and whether the object is expected to pass validation." |
| The value of violations is either "yes", "no", or a non-negative integer | S38 | "violations is either "yes", "no", or a non-negative integer." |
| If it is a non-negative integer, exactly that many violations must match | S38 | "If a nonnegative integer, then exactly that many violations must match." |
| The message field is a regular expression used to match the violation message | S38 | "message is a regular expression used to match the violation message." |
| To be valid, a Suite file must declare kind: Suite and an apiVersion | S38 | "To be valid, a Suite file must declare: kind: Suite apiVersion: test.gatekeeper.sh/v1alpha1" |
| gator verify silently ignores files which do not declare these | S38 | "gator verify silently ignores files which do not declare these." |
| The docs note that audit and gator test are different enforcement points, and that they do not have the AdmissionReview request metadata | S38 | "Note that audit or gator test are different enforcement points and they don't have the AdmissionReview request metadata." |
| Envoy supports an External Authorization filter which calls an authorization service to check if the incoming request is authorized or not | S35 | "Envoy (v1.7.0+) supports an External Authorization filter which calls an authorization service to check if the incoming request is authorized or not." |
| The OPA-Envoy plugin extends OPA with a gRPC server that implements the Envoy External Authorization API | S35 | "OPA-Envoy plugin extends OPA with a gRPC server that implements the Envoy External Authorization API." |
| You can use it to enforce fine-grained, context-aware access control policies with Envoy without modifying your microservice | S35 | "You can use this version of OPA to enforce fine-grained, context-aware access control policies with Envoy without modifying your microservice." |
| The plugin has a dry-run option | S35 | "plugins["envoy_ext_authz_grpc"].dry-run No Configures the Envoy External Authorization gRPC server to unconditionally return an ext_authz.CheckResponse.Status of google_rpc.Status{Code: google_rpc.OK}." |
| Its default is false | S35 | "Default: false." |
| OPA makes it possible to write policies that check the changes Terraform is about to make before it makes them | S36 | "OPA makes it possible to write policies that check the changes Terraform is about to make before it makes them." |
| OPA policies operate on the JSON plan generated by Terraform, which has certain limitations | S36 | "OPA policies operate on the JSON plan generated by Terraform, which has certain limitations." |
| Some information may not be available at plan time | S36 | "Some information may not be available at plan time, particularly:" |
| The docs name unknown values, dynamic blocks, and function calls | S36 | "Unknown values: Computed attributes that won't be determined until apply time" |
| Before writing policies, you confirm that the information you need is available in the plan JSON output | S36 | "Before writing policies, confirm that the information you need is available in the plan JSON output." |
| The OPA docs say that checksums for all binaries are available in the download path | S27 | "Checksums for all binaries are available in the download path by appending .sha256 to the binary filename." |
| The Falco packages page tells you to trust the falcosecurity GPG key | S41 | "Trust the falcosecurity GPG key" |
| It gives the key file at https://falco.org/repo/falcosecurity-packages.asc | S41 | "curl -fsSL https://falco.org/repo/falcosecurity-packages.asc" |
| The tarball page of the Falco docs unpacks the archive with tar and copies it to / | S26 | "tar -xvf falco-0.45.2-x86_64.tar.gz cp -R falco-0.45.2-x86_64/* /" |
| The page also says that Falco with its bundled plugins requires GLIBC 2.28 or newer | S26 | "Falco with its bundled plugins requires GLIBC 2.28 or newer." |
| The reference says to use --remote=false to suppress the control plane check | S16 | "--remote Use --remote=false to suppress control plane check" |
| The Falco docs say that falcoctl is bundled together with Falco | S18 | "It is bundled together with Falco." |
| The reference says that istioctl manifest generate generates an Istio install manifest and outputs to the console by default | S16 | "The generate subcommand generates an Istio install manifest and outputs to the console by default." |
| The docs say that the empty profile deploys nothing | S14 | "empty: deploys nothing." |
| The docs say that the minimal profile is the same as the default profile, but only the control plane components are installed | S14 | "minimal: same as the default profile, but only the control plane components are installed." |
| The traffic management page says that both gateways are deployed with the demo installation, and just the ingress gateway with the default profile | S11 | "both are deployed if you use our demo installation, while just the ingress gateway is deployed with our default profile." |
| The ambient overview names the ztunnel secure overlay as the base of ambient mode | S10 | "At the base, the ztunnel secure overlay handles routing and zero trust security for traffic." |
| The docs say that a set of local files is expected to be fully self-contained | S15 | "When analyzing a set of local files, the file-set is expected to be fully self-contained." |
| The docs show the same kind of message for a namespace | S15 | "No validation issues found when analyzing namespace: default." |
| The reference lists --namespace with an empty default | S16 | "--namespace <string> -n Kubernetes namespace (default ``)" |
| The docs show the same sentence for one namespace | S15 | "Analyzers found issues when analyzing namespace: default." |
| The docs say that this message occurs when an Istio resource references another resource that does not exist | S17 | "This message occurs when an Istio resource references another resource that does not exist." |
| The list of messages names it ReferencedResourceNotFound | S42 | "IST0101: ReferencedResourceNotFound A resource being referenced does not exist." |
| The list of messages names IST0132 VirtualServiceHostNotFoundInGateway | S42 | "IST0132: VirtualServiceHostNotFoundInGateway Host defined in VirtualService not found in Gateway." |
| The reference says that --failure-threshold sets the severity level of analysis at which to set a non-zero exit code | S16 | "--failure-threshold <Level> The severity level of analysis at which to set a non-zero exit code. Valid values: [Info Warning Error] (default `Error`)" |
| The valid values are Info, Warning, and Error, and the default is Error | S16 | "Valid values: [Info Warning Error] (default `Error`)" |
| The reference says that -L lists the analyzers available to run | S16 | "--list-analyzers -L List the analyzers available to run. Suppresses normal execution." |
| The list of messages names IST0133 SchemaWarning | S42 | "IST0133: SchemaWarning The resource has a schema validation warning." |
| The security page says that certain fields and conditions are only applicable to HTTP workloads | S12 | "The difference is that certain fields and conditions are only applicable to HTTP workloads." |
| The paths field in the operation section is one of them | S12 | "The hosts, methods and paths fields in the operation section of the authorization policy object" |
| The page also says that Istio will ignore the HTTP-only fields if you use any of them for a TCP workload | S12 | "If you use any HTTP only fields for a TCP workload, Istio will ignore HTTP-only fields in the authorization policy." |
| The page says that mutual TLS must be enabled before using any of the following fields in the authorization policy | S12 | "Mutual TLS must be enabled before using any of the following fields in the authorization policy: the principals and notPrincipals field under the source section the namespaces and notNamespaces field under the source section" |
| They are the principals and notPrincipals fields and the namespaces and notNamespaces fields, all under the source section | S12 | "Mutual TLS must be enabled before using any of the following fields in the authorization policy: the principals and notPrincipals field under the source section the namespaces and notNamespaces field under the source section" |
| The reference has the option --ignore-unknown, which does not complain about un-parseable input documents, for cases where analyze should run only on k8s compliant inputs | S16 | "--ignore-unknown Don't complain about un-parseable input documents, for cases where analyze should run only on k8s compliant inputs." |
| The docs say that the default keyword lets a policy define a default value for documents produced by rules with complete definitions | S29 | "The default keyword allows policies to define a default value for documents produced by rules with complete definitions." |
| The docs say that all modules contain implicit statements which import the data and input documents | S29 | "All modules contain implicit statements which import the data and input documents." |
| The reference says that --fail-defined exits with a non-zero exit code on a defined or non-empty result | S31 | "--fail-defined Exits with non-zero exit code on defined/non-empty result and errors" |
| The docs say that tests are standard Rego rules with a name that has the prefix test_ | S30 | "Tests are expressed as standard Rego rules with a convention that the rule name is prefixed with test_." |
| The with keyword lets queries specify values nested under the input document | S29 | "The with keyword allows queries to programmatically specify values nested under the input document or the data document, or built-in functions." |
| The docs say that the result of a test is FAIL when the test rule is undefined or generates a non-true value | S30 | "If the test rule is undefined or generates a non-" |
| The docs say that the result of a test is FAIL when the test rule is undefined or generates a non-true value | S30 | "value the test result is reported as FAIL." |
| The docs say that when you misspell a test name or run no test by accident, opa test will still succeed, and that --fail-on-empty makes it fail | S30 | "When misspelling a test name or running no test by accident, opa test will still succeed, use --fail-on-empty to make it fail instead." |
| The docs say that the coverage report includes all of the lines evaluated and not evaluated in the Rego files provided on the command line | S30 | "The coverage report includes all of the lines evaluated and not evaluated in the Rego files provided on the command line." |
| The reference says that if check succeeds in parsing and compiling the files, no output is produced | S31 | "If the 'check' command succeeds in parsing and compiling the source file(s), no output is produced." |
| The reference lists --strict as the option that enables the compiler strict mode | S31 | "-S --strict Enable compiler strict mode" |
| The reference says that with --fail, the command fmt returns a non-zero exit code if a file would be reformatted | S31 | "If the '--fail' option is supplied, the 'fmt' command will return a non zero exit code if a file would be reformatted." |
| It says that -l outputs the names of files that would change | S31 | "If the '-l' option is supplied, the 'fmt' command will output the names of files that would change if formatted." |
| The reference lists --v0-compatible as the option that opts in to the OPA features and behaviors prior to the OPA v1.0 release | S31 | "--v0-compatible Opt-in to OPA features and behaviors prior to the OPA v1.0 release" |
| The Gatekeeper docs say that using Rego v1 syntax in a ConstraintTemplate is opt-in, and that by default only Rego v0 is allowed | S37 | "Using Rego v1 syntax is opt-in, by default only Rego v0 is allowed." |
| The docs say that local console logging of decisions can be enabled via the console config option | S33 | "Local console logging of decisions can be enabled via the console config option." |
| They show decision_logs: console: true for it | S33 | "decision_logs: console: true This will dump all decisions to the console." |
| The Data API takes POST /v1/data/{path} with a JSON body of the form {"input": ...} | S32 | "POST /v1/data/{path:.+} Content-Type: application/json { "input": ... }" |
| The REST page says that any additional top-level keys in the request body beyond input are treated as request metadata | S32 | "Any additional top-level keys in the request body beyond input are treated as request metadata." |
| The docs say that the server returns 200 if the path refers to an undefined document | S32 | "The server returns 200 if the path refers to an undefined document." |
| They say that the response will not contain a result property in this case | S32 | "In this case, the response will not contain a result property." |
| The path field holds the hierarchical policy decision path | S33 | "[_].path string Hierarchical policy decision path, e.g., /http/example/authz/allow." |
| The input field holds the input data provided in the policy query | S33 | "[_].input any Input data provided in the policy query." |
| The result field holds the policy decision returned to the client | S33 | "[_].result any Policy decision returned to the client, e.g., true or false." |
| The REST page says that request metadata is included in decision log events under the custom.request_metadata field | S32 | "Request metadata is included in decision log events under the custom.request_metadata field." |
| The docs say that ConstraintTemplates are made of two main elements | S37 | "ConstraintTemplates are made of two main elements:" |
| One is the policy code, and the other is the schema of the Constraint | S37 | "The schema of the accompanying Constraint object, which represents an instantiation of a ConstraintTemplate" |
| The docs list input.review as the variable that contains the input request object under review | S37 | "input.review Contains input request object under review" |
| gator test tests a set of Kubernetes objects against a set of Templates and Constraints | S38 | "gator test allows users to test a set of Kubernetes objects against a set of Templates and Constraints." |
| The docs say that the command returns violations when found and communicates success or failure via its exit status | S38 | "The command returns violations when found and communicates success or failure via its exit status." |
| The docs say that violations is either "yes", "no", or a non-negative integer | S38 | "violations is either "yes", "no", or a non-negative integer." |
| They say that message is a regular expression used to match the violation message | S38 | "message is a regular expression used to match the violation message." |
| The docs say that a valid Suite file must declare kind: Suite and an apiVersion, and that gator verify silently ignores files which do not declare these | S38 | "To be valid, a Suite file must declare: kind: Suite apiVersion: test.gatekeeper.sh/v1alpha1 gator verify silently ignores files which do not declare these." |
| The docs say that required_engine_version is used to track compatibility between rules content and the falco engine version | S22 | "Used to track compatibility between rules content and the falco engine version." |
| The docs say that rules files can have a top-level field required_plugin_versions, to document the plugin versions that they are compatible with | S46 | "To allow rules files to document the plugin versions they are compatible with, rules files can have a new top-level field required_plugin_versions." |
| They say that if a plugin is loaded and an entry has a matching name, the loaded version must be semver compatible with the version of the entry | S46 | "If a plugin is loaded, and if an entry in required_plugin_versions has a matching name, then the loaded plugin version must be semver compatible with the version property." |
| The docs say that any configuration option can be overridden on the command line with -o/--option key=value | S44 | "Any configuration option can be overridden on the command line via the -o/--option key=value flag." |
| They say that you can override a specific entry of a list by index, as in --option key.subkey[0]=value | S44 | "If a configuration entry (e.g. key.subkey) is a list you can override a specific entry by index, e.g.: --option key.subkey[0]=value." |
| The docs say that the plugins property defines the set of plugins that Falco can load, and that the load_plugins property controls which plugins are loaded when Falco starts | S46 | "The new plugins property in falco.yaml will define the set of plugins that Falco can load, and a new load_plugins property will control which plugins are actually loaded when Falco starts." |
| The packages page says that on systems with glibc older than 2.34, the bundled container plugin may fail to load with an undefined symbol | S41 | "On systems with glibc older than 2.34, the bundled container plugin may fail to load with undefined symbol: __res_search." |
| The docs say that a rules file is a YAML file with mainly three types of elements | S22 | "A Falco rules file is a YAML file containing mainly three types of elements:" |
| A rule has at least the fields rule, desc, condition, output, and priority | S23 | "A rule is a YAML object, part of the rules file, whose definition contains at least the following fields:" |
| The reference says that -L shows the name and description of all rules and exits | S25 | "-L Show the name and description of all rules and exit." |
| The reference says that --list lists all defined fields and exits | S25 | "--list [=<source>(=)] List all defined fields and exit." |
| The docs say that macros are rule condition snippets that can be re-used inside rules and even other macros | S22 | "Rule condition snippets that can be re-used inside rules and even other macros." |
| The docs list the available priorities | S23 | "Here are the available priorities: EMERGENCY ALERT CRITICAL ERROR WARNING NOTICE INFORMATIONAL DEBUG" |
| The Falco docs say that the install command of falcoctl downloads rules files to a configurable directory, which is /etc/falco by default | S43 | "The install command of the falcoctl tool will download rules files to a configurable directory (by default, that is /etc/falco)." |
| The README of the plugin says that the official ruleset depends on the json plugin | S45 | "The official ruleset depends on the json plugin" |
| The docs say that lists are collections of items that can be included in rules, macros, or other lists | S22 | "Collections of items that can be included in rules, macros, or other lists." |
| The README of the plugin says that it supports Kubernetes audit events from the Webhook backend or from a file | S45 | "This plugin supports consuming Kubernetes Audit Events coming from the Webhook backend or from a file." |
| For a file, the plugin expects JSONL, where each line is a JSON object with one or more audit events | S45 | "For files, the plugin expects content to be in JSONL format, where each line represents a JSON object, containing one or more audit events." |
| The README says that the expected way to use the plugin with Falco is a Webhook, and that file reading can be used for testing and development | S45 | "The expected way of using the plugin with Falco is through a Webhook. File reading support can be used with Stratoshark or testing and development." |
| The Falco docs say that, to receive Kubernetes audit events, the plugin embeds a webserver that listens on a configurable port and accepts POST requests on a configurable endpoint | S47 | "To receive Kubernetes audit events, the plugin embeds a webserver that listens on a configurable port and accepts POST requests on a configurable endpoint." |
| The README says that a parameter with no scheme is read as a file path | S45 | "no scheme: Opens an event stream by reading the events from a file on the local filesystem. The params string is interpreted as a filepath" |
| Its sample has the same load_plugins list | S45 | "load_plugins: [k8saudit, json" |
| The --disable-source option turns off a specific event source | S25 | "--disable-source <event_source> Turn off a specific <event_source>." |
| The docs say that for plugin-based deployments, you disable syscall explicitly or enable only the desired plugin-based sources | S19 | "For plugin-based deployments, disable syscall explicitly or enable only the desired plugin-based sources." |
| The docs say that by default Falco applies rules per event type on a "first match wins" basis | S24 | "Keep in mind that Falco by default applies rules per event type on a "first match wins" basis." |
| They say that the way to control the order in which rules are triggered is to change the order in which the rules are defined, and therefore loaded | S23 | "The way to control the latter is achieved by changing the order the rules are defined and therefore loaded." |
| The docs say that from Falco 0.36.0 you can change the configuration to rule_matching: all | S24 | "Starting from Falco Release 0.36.0, you have the option to modify the configuration to rule_matching: all." |
| They say that this change ensures that rules sharing the same event type cannot override each other | S24 | "This change ensures that rules sharing the same event type cannot override each other, preventing inconsistent logging." |
| They warn that it may lead to increased CPU usage | S24 | "Be aware, though, that this modification may lead to increased CPU usage." |
| The docs say that istioctl analyze can run against a live cluster or a set of local configuration files | S15 | "It can run against a live cluster or a set of local configuration files." |
| It can also run against a combination of the two | S15 | "It can also run against a combination of the two, allowing you to catch problems before you apply changes to a cluster." |
| That lets you catch problems before you apply changes to a cluster | S15 | "It can also run against a combination of the two, allowing you to catch problems before you apply changes to a cluster." |
| The docs define fault injection as a testing method | S11 | "Fault injection is a testing method that introduces errors into a system to ensure that it can withstand and recover from error conditions." |
| It introduces errors into a system to ensure that it can withstand and recover from error conditions | S11 | "Fault injection is a testing method that introduces errors into a system to ensure that it can withstand and recover from error conditions." |
| Istio lets you inject faults at the application layer, unlike delaying packets or killing pods at the network layer | S11 | "Unlike other mechanisms for introducing errors, such as delaying packets or killing pods at the network layer, Istio lets you inject faults at the application layer." |
| The Envoy timeout for HTTP requests is disabled in Istio by default | S11 | "The Envoy timeout for HTTP requests is disabled in Istio by default." |
| The default retry behavior for HTTP requests is to retry twice before returning the error | S11 | "The default retry behavior for HTTP requests is to retry twice before returning the error." |
| The docs say that the fault injection configuration can not be combined with retry or timeout configuration on the same virtual service | S11 | "Currently, the fault injection configuration can not be combined with retry or timeout configuration on the same virtual service" |
| If you also set failure recovery policies in your application code, both the application's policies and the ones of Istio work independently | S11 | "This means that if you are also setting failure recovery policies in your application code you need to keep in mind that both work independently, and therefore might conflict." |
| Both sets might conflict | S11 | "This means that if you are also setting failure recovery policies in your application code you need to keep in mind that both work independently, and therefore might conflict." |
| Istio mutual TLS has a permissive mode, which allows a service to accept both plaintext traffic and mutual TLS traffic at the same time | S12 | "Istio mutual TLS has a permissive mode, which allows a service to accept both plaintext traffic and mutual TLS traffic at the same time." |
| Once the configuration of the clients is complete, the operator can configure the server to mutual TLS only mode | S12 | "Once the configuration of the clients is complete, the operator can configure the server to mutual TLS only mode." |
| The docs say that Istio checks for matching policies in layers, in this order: CUSTOM, DENY, and then ALLOW | S12 | "Istio checks for matching policies in layers, in this order: CUSTOM, DENY, and then ALLOW." |
| The deny by default behavior applies only if the workload has at least one authorization policy with the ALLOW action | S12 | "Note the “deny by default” behavior applies only if the workload has at least one authorization policy with the ALLOW action." |
| The docs say that --fail-on-empty is also useful in CI/CD pipelines to ensure that tests are actually being executed | S30 | "This is also useful in CI/CD pipelines to ensure that tests are actually being executed." |
| The REST page says that the request body contains an object that specifies a value for the input document | S32 | "The request body contains an object that specifies a value for The input Document." |
| It says that if decision logging is enabled, the response has a decision_id field that uniquely identifies the decision | S32 | "decision_id - If decision logging is enabled, this field contains a string that uniquely identifies the decision." |
| Callers can use the identifier for correlation purposes | S32 | "Callers can use the identifier for correlation purposes." |
| Each decision log event includes the policy that was queried and the input to the query | S33 | "Each event includes the policy that was queried, the input to the query, bundle metadata, and other information that enables auditing and offline debugging of policy decisions." |
| It also includes bundle metadata and other information that enables auditing and offline debugging of policy decisions | S33 | "Each event includes the policy that was queried, the input to the query, bundle metadata, and other information that enables auditing and offline debugging of policy decisions." |
| The docs say that gator verify organizes tests into three levels: Suites, Tests, and Cases | S38 | "gator verify organizes tests into three levels: Suites, Tests, and Cases:" |
| A Case defines an object to validate and whether the object is expected to pass validation | S38 | "A Case defines an object to validate and whether the object is expected to pass validation." |
| The docs also note that audit and gator test are different enforcement points | S38 | "Note that audit or gator test are different enforcement points and they don't have the AdmissionReview request metadata." |
| They do not have the AdmissionReview request metadata | S38 | "Note that audit or gator test are different enforcement points and they don't have the AdmissionReview request metadata." |
| The reference says that -V reads the files, validates the loaded rules, and exits | S25 | "-V, --validate <rules_file> Read the contents of the specified <rules_file> file(s), validate the loaded rules, and exit." |
| It says that --dry-run runs Falco without processing events | S25 | "--dry-run Run Falco without processing events. It can help check that the configuration and rules do not have any errors." |
| It can help check that the configuration and rules do not have any errors | S25 | "--dry-run Run Falco without processing events. It can help check that the configuration and rules do not have any errors." |
| The event-generator generates a variety of suspect actions that are detected by Falco rulesets | S39 | "Generate a variety of suspect actions that are detected by Falco rulesets" |
| Its Kubernetes audit events collection is maintained on a best-effort basis and may not fully work | S39 | "The k8saudit events collection in the event-generator is maintained on a best-effort basis and may not fully work." |
| The Falco rules repository says that the maturity_stable rules in falco_rules.yaml are included in the Falco release package | S40 | "Published upon tagging a new release, the maturity_stable rules in the falco_rules.yaml file are included in the Falco release package." |
| It says that other maturity-level rules are released separately, and that they require explicit installation and possible customization | S40 | "Other maturity-level rules are released separately, requiring explicit installation and possible customization for effective Adoption." |
| The docs say that the standard Istio metrics are exported to Prometheus by default | S13 | "The standard Istio metrics are exported to Prometheus by default." |
| They say that by default, Istio enables only a small subset of the Envoy-generated statistics | S13 | "By default, Istio enables only a small subset of the Envoy-generated statistics to avoid overwhelming metrics backends and to reduce the CPU overhead associated with metrics collection." |
| The reference lists the default of --namespace as empty | S16 | "--namespace <string> -n Kubernetes namespace (default ``)" |
| The reference says that the default value of --failure-threshold is Error | S16 | "--failure-threshold <Level> The severity level of analysis at which to set a non-zero exit code. Valid values: [Info Warning Error] (default `Error`)" |
| The docs say that Istio mutual TLS has a permissive mode, which allows a service to accept both plaintext traffic and mutual TLS traffic at the same time | S12 | "Istio mutual TLS has a permissive mode, which allows a service to accept both plaintext traffic and mutual TLS traffic at the same time." |
| The docs say that the demo profile enables high levels of tracing and access logging, so it is not suitable for performance tests | S14 | "This profile enables high levels of tracing and access logging so it is not suitable for performance tests." |
| The docs say that the fault injection configuration can not be combined with retry or timeout configuration on the same virtual service | S11 | "Currently, the fault injection configuration can not be combined with retry or timeout configuration on the same virtual service" |
| The REST page says that any additional top-level keys beyond input are treated as request metadata | S32 | "Any additional top-level keys in the request body beyond input are treated as request metadata." |
| The docs say that when you misspell a test name or run no test by accident, opa test will still succeed | S30 | "When misspelling a test name or running no test by accident, opa test will still succeed, use --fail-on-empty to make it fail instead." |
| The Gatekeeper docs say that by default only Rego v0 is allowed in a ConstraintTemplate | S37 | "Using Rego v1 syntax is opt-in, by default only Rego v0 is allowed." |
| The docs say that a valid Suite file must declare kind: Suite and an apiVersion, and that gator verify silently ignores files that do not declare them | S38 | "To be valid, a Suite file must declare: kind: Suite apiVersion: test.gatekeeper.sh/v1alpha1 gator verify silently ignores files which do not declare these." |
| The docs say that by default Falco applies rules per event type on a "first match wins" basis | S24 | "Keep in mind that Falco by default applies rules per event type on a "first match wins" basis." |
| The docs warn that rule_matching: all may lead to increased CPU usage | S24 | "Be aware, though, that this modification may lead to increased CPU usage." |
