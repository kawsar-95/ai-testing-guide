# Fact-check: Service Discovery (`content/course/service-discovery.mdx`)

Reviewer did not write the page. Sources fetched 2026-10-22 with curl into `/tmp/claude-1000/fc4-service-discovery/` and turned into text. Cite numbers: 1 = Kubernetes "Service", 2 = Kubernetes "DNS for Services and Pods", 3 = Consul "Service Discovery Explained", 4 = Consul "Define health checks", 5 = Consul "Consul DNS overview".

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Consul: helps find services, follow them, watch health in a network | 3 | PASS | "Service discovery helps you discover, track, and monitor the health of services within a network." |
| 2 | Consul keeps a service catalog, one source of truth services can query | 3 | PASS | "This service catalog acts as a single source of truth that allows your services to query and communicate with each other." |
| 3 | Page states Kubernetes/Consul behavior as that product's | n/a | PASS | "Each behavior below belongs to that product, not to every system." Each claim below is attributed to Kubernetes or Consul. |
| 4 | Kubernetes: a Deployment can create/destroy Pods, so running Pods differ over time | 1 | PASS | "that Deployment can create and destroy Pods dynamically." / "the set of Pods running in one moment in time could be different from the set of Pods running that application a moment later." |
| 5 | Pods are short-lived; each gets its own IP | 1 | PASS | "Pods are ephemeral resources" / "Each Pod gets its own IP address" |
| 6 | Kubernetes docs ask how a frontend finds and tracks a backend address | 1 | PASS | "how do the frontends find out and keep track of which IP address to connect to" |
| 7 | Consul: active instances change often; instances rely on a catalog | 3 | PASS | "the set of active service instances changes frequently ... These service instances rely on a service catalog to retrieve the most up-to-date access information" |
| 8 | Consul: new instance registers with IP and port | 3 | PASS | "A new instance of the "Web" service registers itself to the service catalog with its IP address and port." |
| 9 | Consul: catalog changes as instances are added and old/unhealthy ones removed | 3 | PASS | "dynamically updated as new instances of the service are added and legacy or unhealthy service instances are removed." |
| 10 | Consul: removed instance no longer receives requests | 3 | PASS | "Removed services will no longer participate in the load balancing pool for handling service consumer requests." (close paraphrase) |
| 11 | Consul: consumers ask by identity, not address | 3 | PASS | "Service discovery uses a service's identity instead of traditional access information (IP address and port)." |
| 12 | Consul: a health check tests a service or node; written inside the service definition | 4 | PASS | "Health checks are configurations that verifies the health of a service or node. Health checks configurations are nested in the service block." |
| 13 | Consul check kinds: script, HTTP, TCP, gRPC, TTL (and others) | 4 | PASS | The list "Script checks ... HTTP checks ... TCP checks ... UDP ... TTL ... Docker ... gRPC ..." |
| 14 | HTTP: 200-299 healthy, 429 warning, other failure | 4 | PASS | "A 200-299 response code is healthy. A 429 response code ... is a warning. All other response codes indicate a failure." |
| 15 | TCP: connection opens is success; host that refuses is critical | 4 | PASS | "If the check successfully establishes a connection, the service status is reported as success. If the IP or host does not accept the connection, the service status is reported as critical." |
| 16 | Script: exit 0 passing, 1 warning, other failing | 4 | PASS | "Exit code 0 - Check is passing / Exit code 1 - Check is warning / Any other code - Check is failing" |
| 17 | TTL: service must send updates; none in time gives critical | 4 | PASS | "Time-to-live (TTL) checks are passive checks that await updates from the service. If the check does not receive a status update before the specified duration, the health check enters a critical state." |
| 18 | New Consul check starts as critical by default; keeps service out of pool until verified | 4 | PASS | "they are assigned a critical status by default. This prevents services from registering as passing and entering the service pool before their health is verified." The page keeps "by default". |
| 19 | Kubernetes: traffic can go to healthy ("ready") backends | 1 | PASS | "to control how Kubernetes routes traffic to healthy (“ready”) backends." The page makes no claim that a Service checks health by itself. |
| 20 | Kubernetes: DNS for some headless Services lists ready endpoints | 1 | PASS | "DNS A / AAAA records for all IP addresses of the Service's ready endpoints" (headless without selectors). Hedge "some" is correct. |
| 21 | Cluster DNS add-on (CoreDNS) watches API for new Services, makes records | 1 | PASS | "A cluster-aware DNS server, such as CoreDNS, watches the Kubernetes API for new Services and creates a set of DNS records for each one." |
| 22 | Pods can use a name instead of an IP | 2 | PASS | "kubelet configures Pods' DNS so that running containers can look up Services by name rather than IP." |
| 23 | Normal Service name form `my-svc.my-namespace.svc.cluster-domain.example` points to cluster IP | 2 | PASS | "with a name of the form my-svc.my-namespace.svc.cluster-domain.example. This resolves to the cluster IP of the Service." |
| 24 | Kubernetes reserves cluster IP from a pool set aside for this | 1 | PASS | "assigns an IP address from a pool of IP addresses that your cluster has reserved for that purpose." |
| 25 | Name without namespace stays in the Pod's namespace; `test`/`prod` `data` example | 2 | PASS | "DNS queries that don't specify a namespace are limited to the Pod's namespace." / "A query for data returns no results ... A query for data.prod returns the intended result" |
| 26 | kubelet writes search list into `/etc/resolv.conf`, expanding short names | 2 | PASS | "DNS queries may be expanded using the Pod's /etc/resolv.conf. kubelet configures this file for each Pod." |
| 27 | Only the documented name layout is supported; others may change | 2 | PASS | "Any other layout or names or queries that happen to work are considered implementation details and are subject to change without warning." |
| 28 | Named port gets an SRV record (address and port) | 1, 2 | PASS | "SRV Records are created for named ports" (2); "discover the port number for http, as well as the IP address." (1) |
| 29 | Headless Service: no cluster IP; name resolves to all selected Pod IPs; client uses set or round-robin | 2 | PASS | "Unlike normal Services, this resolves to the set of IPs of all of the Pods selected by the Service. Clients are expected to consume the set or else use standard round-robin selection from the set." Cluster IP absence is in cite 1 ("a cluster IP is not allocated"); cite 2 says "(without a cluster IP)". |
| 30 | Headless: platform does no load balancing or proxying | 1 | PASS | "there is no load balancing or proxying done by the platform for them." |
| 31 | kubelet adds env variables per active Service; Service must exist first; DNS has no such order rule | 1 | PASS | "the kubelet adds a set of environment variables for each active Service" / "you must create the Service before the client Pods come into existence" / "If you only use DNS ... you don't need to worry about this ordering issue." |
| 32 | Consul DNS: lookup without HTTP API calls | 5 | PASS | "look up services and nodes registered with Consul without making HTTP API requests to Consul." |
| 33 | Consul recommends DNS for VMs: no app change | 5 | PASS | "We recommend using the DNS for service discovery in virtual machine (VM) environments because it removes the need to modify native applications" (the source scopes this to no service mesh; the page's wording does not conflict) |
| 34 | Consul DNS lookups are case-sensitive | 5 | PASS | "Note that all queries are case-sensitive." |
| 35 | Prepared queries: filter by several tags; ask remote datacenter if local has no healthy node | 5 | PASS | "filtering by multiple tags and automatically querying remote datacenters for services if no healthy nodes are available in the local datacenter" |
| 36 | Consul names two discovery patterns | 3 | PASS | "There are two main service‑discovery patterns: client-side discovery and server-side discovery." |
| 37 | Client-side: caller asks catalog, gets info, picks healthy instance, calls directly | 3 | PASS | "The service consumer queries the service catalog / ... returns all access information / The service consumer selects a healthy downstream service and makes requests directly to it" |
| 38 | Server-side: caller asks intermediary; it asks catalog and routes to available instance | 3 | PASS | "the service consumer uses an intermediary to query the service catalog and make requests to them." / "routes requests to the available service instances." The page does not say the intermediary is Consul, which is no stronger than the source. |
| 39 | Consul: server-side lets developers make apps lighter because discovery is central | 3 | PASS | "developers can make their applications faster and more lightweight by decoupling and centralizing service discovery logic." Page keeps the claim as Consul's ("Consul says"). |
| 40 | Consul: traditional load balancers not built for fast registration/removal | 3 | PASS | "Traditional load balancers are not designed for rapid registration and de-registration of services" |
| 41 | Common mistake: hard-coding address; address can change | 1 | PASS | Same as claim 4. The advice part is the tutorial's. |
| 42 | Key words rows (service catalog, TTL, headless, SRV, client/server-side, Service) | 1-4 | PASS | Each matches the quotes of claims 2, 17, 29, 28, 36-38. Kubernetes "Service" row: "an abstraction to help you expose groups of Pods over a network" (cite 1). |

Own text check: the real-life example is marked "the tutorial's own". The tip callout says it is the tutorial's advice, has no `<Cite>`, and states no source fact. The "Instance" key word has no cite and is a plain definition.

## Structure check

| Check | Result |
|---|---|
| Sources all `https`, each cited at least once (1-5 all cited), each `<Cite n>` has a source | PASS |
| No run of 8 or more words copied from a source | PASS. The only 8-gram match is the DNS name pattern `my-svc.my-namespace.svc.cluster-domain.example` (allowed as a name). |
| Section order: In plain words, When you need it, (How it works, Client-side and server-side discovery), A real-life example, Common mistakes, What a tester can check, Key words last | PASS |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "Service Discovery" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS (Kubernetes and HashiCorp official docs) |
| Prose 700-1100 words | PASS: 1066 words (headings and callout bullets counted, tables, Cite tags, export block excluded). Close to the limit; the writer should not add text. |
| Security page | n/a |

Topic checks: Kubernetes and Consul behavior is attributed to those products throughout. The client-side/server-side section claims no more than Consul's page says. Health-check claims keep "by default" and the "some headless Services" hedge.

Open FAILs: 0
