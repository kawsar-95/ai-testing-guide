# Fact check: devops / kubernetes-networking-storage

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://kubernetes.io/docs/concepts/services-networking/service/; S2 https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/; S3 https://kubernetes.io/docs/concepts/storage/volumes/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / kubernetes-networking-storage (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Services, cluster DNS, and the volume types. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster | S1 | PASS | S1: "In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster." |
| 2 | Kubernetes creates DNS records for Services and Pods | S2 | PASS | S2: "Kubernetes creates DNS records for Services and Pods." |
| 3 | On-disk files in a container are ephemeral | S3 | PASS | S3: "On-disk files in a container are ephemeral, which presents some problems for non-trivial applications when running in containers." |
| 4 | One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost | S3 | PASS | S3: "One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost." |
| 5 | Another problem occurs when multiple containers are running in a Pod and need to share files | S3 | PASS | S3: "Another problem occurs when multiple containers are running in a Pod and need to share files." |
| 6 | The Kubernetes volume abstraction can help you to solve both of these problems | S3 | PASS | S3: "The Kubernetes volume abstraction can help you to solve both of these problems." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / kubernetes-networking-storage (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Services, DNS records, and volumes. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede lists the topics and describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster | S1 | PASS | S1: "In Kubernetes, a Service is a method for exposing a network application that is running as one or more\n Pods  in your cluster." |
| 2 | Kubernetes creates DNS records for Services and Pods | S2 | PASS | S2: "Kubernetes creates DNS records for Services and Pods." |
| 3 | On-disk files in a container are ephemeral | S3 | PASS | S3: "On-disk files in a container are ephemeral, which presents some problems for non-trivial applications when running in containers." |
| 4 | One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost | S3 | PASS | S3: "One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost." |
| 5 | Another problem occurs when multiple containers are running in a Pod and need to share files | S3 | PASS | S3: "Another problem occurs when multiple containers are running in a  Pod  and need to share files." |
| 6 | The Kubernetes volume abstraction can help you to solve both of these problems | S3 | PASS | S3: "The Kubernetes  volume  abstraction can help you to solve both of these problems." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / kubernetes-networking-storage (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Services, DNS records, and volumes. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It gives no fact about a tool, product, command, or number. |
| 1 | In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster | S1 | PASS | S1: "In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster." The line break falls between "one or more" and "Pods". |
| 2 | Kubernetes creates DNS records for Services and Pods | S2 | PASS | S2: "Kubernetes creates DNS records for Services and Pods." |
| 3 | On-disk files in a container are ephemeral | S3 | PASS | S3: "On-disk files in a container are ephemeral, which presents some problems for non-trivial applications when running in containers." |
| 4 | One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost | S3 | PASS | S3: "One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost." |
| 5 | Another problem occurs when multiple containers are running in a Pod and need to share files | S3 | PASS | S3: "Another problem occurs when multiple containers are running in a Pod and need to share files." |
| 6 | The Kubernetes volume abstraction can help you to solve both of these problems | S3 | PASS | S3: "The Kubernetes volume abstraction can help you to solve both of these problems." |

Open FAILs after round 4: 0

Changed after this round: Layman and Bangla: the second problem is a condition again ("Problem two happens when ...", "দ্বিতীয় সমস্যা হয় যখন ..."), as in the Technical sentence.

## Round 5 (2026-11-05)

## Fact check: devops / kubernetes-networking-storage (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Services, DNS records, and volumes. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It names the topics and describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster | S1 | PASS | S1: "In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster." |
| 2 | Kubernetes creates DNS records for Services and Pods | S2 | PASS | S2: "Kubernetes creates DNS records for Services and Pods." |
| 3 | On-disk files in a container are ephemeral | S3 | PASS | S3: "On-disk files in a container are ephemeral, which presents some problems for non-trivial applications when running in containers." |
| 4 | One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost | S3 | PASS | S3: "One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost." |
| 5 | Another problem occurs when multiple containers are running in a Pod and need to share files | S3 | PASS | S3: "Another problem occurs when multiple containers are running in a Pod and need to share files." |
| 6 | The Kubernetes volume abstraction can help you to solve both of these problems | S3 | PASS | S3: "The Kubernetes volume abstraction can help you to solve both of these problems." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 23 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-18)

# Fact check: devops / kubernetes-networking-storage (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Services, DNS names, EndpointSlices, PVCs keep data, tester checks on kind | none | N/A | Framing sentence that describes the page. |
| 2 | Lede | Page is about reaching Pods via Services and DNS, and volumes | none | N/A | Framing sentence that describes the page. |
| 3 | What it is | Deployment can create and destroy Pods dynamically | 1 | PASS | "that Deployment can create and destroy Pods dynamically" |
| 4 | What it is | Each Pod gets its own IP; the Pod set can differ a moment later | 1 | PASS | "Each Pod gets its own IP address"; "could be different from the set of Pods running that application a moment later." |
| 5 | What it is | Each pod gets a unique cluster-wide IP | 4 | PASS | "Each pod in a cluster gets its own unique cluster-wide IP address." |
| 6 | What it is | All pods talk directly, no proxies or NAT | 4 | PASS | "directly, without the use of proxies or address translation (NAT)." |
| 7 | What it is | A Service exposes a network application running as one or more Pods | 1 | PASS | "a Service is a method for exposing a network application that is running as one or more" |
| 8 | What it is | Pods of a Service are usually set by a selector you define | 1 | PASS | "usually determined by a selector that you define." |
| 9 | What it is | Kubernetes creates DNS records for Services and Pods | 2 | PASS | "Kubernetes creates DNS records for Services and Pods." |
| 10 | What it is | Contact Services with consistent DNS names instead of IPs | 2 | PASS | "Services with consistent DNS names instead of IP addresses." |
| 11 | What it is | Ingress exposes HTTP and HTTPS routes from outside to services | 7 | PASS | "exposes HTTP and HTTPS routes from outside the cluster to services within the cluster." |
| 12 | What it is | Project recommends Gateway; Ingress API frozen | 7 | PASS | "recommends using Gateway instead of Ingress."; "The Ingress API has been frozen." |
| 13 | What it is | Gateway API is a family of API kinds for provisioning and routing | 8 | PASS | "a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing." |
| 14 | What it is | On-disk files in a container are ephemeral | 3 | PASS | "On-disk files in a container are ephemeral" |
| 15 | What it is | Crash or stop loses state and files | 3 | PASS | "the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost." |
| 16 | What it is | After a crash kubelet restarts the container clean | 3 | PASS | "After a crash, kubelet restarts the container with a clean state." |
| 17 | What it is | Second problem: multiple containers need to share files | 3 | PASS | "Another problem occurs when multiple containers are running in a Pod and need to share files." |
| 18 | What it is | Volume abstraction helps with both | 3 | PASS | "The Kubernetes volume abstraction can help you to solve both of these problems." |
| 19 | What it is | A volume is a directory, possibly with data, accessible to containers in a Pod | 3 | PASS | "At its core, a volume is a directory, possibly with some data in it, which" |
| 20 | What it is | Table: ephemeral volume lifetime linked to a Pod; emptyDir scratch space lifecycle | 3 | PASS | "Ephemeral volume types have a lifetime linked to a specific Pod"; "empty scratch space that is initialized when the Pod is assigned to a node, and is deleted when the Pod is removed from that node." |
| 21 | What it is | Table: PV is storage provisioned by admin or dynamically via Storage Classes | 9 | PASS | "provisioned by an administrator or dynamically provisioned using Storage Classes." |
| 22 | What it is | Table: PVC is a request for storage by a user | 9 | PASS | "A PersistentVolumeClaim (PVC) is a request for storage by a user." |
| 23 | What it is | Table: StorageClass lets admins describe classes of storage | 10 | PASS | "a way for administrators to describe the classes of" storage they offer. |
| 24 | What it is | Pod gone: ephemeral volumes destroyed, persistent not | 3 | PASS | "When a Pod ceases to exist, Kubernetes destroys ephemeral volumes;" (S3 also: persistent volumes "exist beyond the lifetime of any individual Pod") |
| 25 | How it works | Service gets cluster IP used by the virtual IP mechanism | 1 | PASS | "Kubernetes assigns this Service an IP address (the cluster IP), that is used by the virtual IP address mechanism." |
| 26 | How it works | Controller scans for matching Pods and updates EndpointSlices | 1 | PASS | "continuously scans for Pods that match its selector, and then makes any necessary updates to the set of EndpointSlices" |
| 27 | How it works | EndpointSlices track backend IPs, normally tied to a Service, typically Pods | 5 | PASS | "EndpointSlices track the IP addresses of backend endpoints. EndpointSlices are normally associated with a Service and the backend endpoints typically represent Pods." |
| 28 | How it works | Service maps any port to targetPort; default same as port | 1 | PASS | "A Service can map any incoming port to a targetPort. By default and for convenience, the targetPort is set to the same value as the port field." |
| 29 | How it works | kube-proxy watches Service and EndpointSlice add/remove | 6 | PASS | "Each instance of kube-proxy watches the Kubernetes control plane for the addition and removal of Service and EndpointSlice objects." |
| 30 | How it works | kube-proxy calls APIs by mode to capture and redirect traffic | 6 | PASS | "calls appropriate APIs (depending on the kube-proxy mode) to configure the node to capture traffic to the Service's clusterIP and port, and redirect that traffic to one of the Service's endpoints" |
| 31 | How it works | Default mode iptables in 1.37, nftables later | 6 | PASS | "In Kubernetes 1.37, this is iptables, but a future version of Kubernetes will change the default to nftables." |
| 32 | How it works | iptables: change may wait up to minSyncPeriod; default 1s | 6 | PASS | "each individual change may end up waiting up to the full minSyncPeriod before being processed"; "The default value of 1s" |
| 33 | How it works | Four types table: ClusterIP | 1 | PASS | "Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default" |
| 34 | How it works | NodePort: static port, range default 30000-32767 | 1 | PASS | "Exposes the Service on each Node's IP at a static port (the NodePort)."; "the Kubernetes control plane allocates a port from a range ... (default: 30000-32767)." |
| 35 | How it works | LoadBalancer: external LB; Kubernetes offers no LB component | 1 | PASS | "Exposes the Service externally using an external load balancer. Kubernetes does not directly offer a load balancing component" |
| 36 | How it works | ExternalName maps to externalName field; no proxying | 1 | PASS | "Maps the Service to the contents of the externalName field (for example, to the hostname api.foo.bar.example)... No proxying of any kind is set up." |
| 37 | How it works | LoadBalancer starts like NodePort; cloud-controller-manager configures LB | 1 | PASS | "Kubernetes typically starts off by making the changes that are equivalent to you requesting a Service of type: NodePort. The cloud-controller-manager component then configures the external load balancer to forward traffic to that assigned node port." |
| 38 | How it works | Service DNS A/AAAA name form resolves to cluster IP | 2 | PASS | "\"Normal\" (not headless) Services are assigned DNS A and/or AAAA records, with a name of the form my-svc.my-namespace.svc.cluster-domain.example. This resolves to the cluster IP" |
| 39 | How it works | Queries without a namespace limited to Pod namespace; others by namespace in query | 2 | PASS | "DNS queries that don't specify a namespace are limited to the Pod's namespace. Access Services in other namespaces by specifying it in the DNS query." |
| 40 | How it works | Queries expanded via /etc/resolv.conf set by kubelet; search values | 2 | PASS | "DNS queries may be expanded using the Pod's /etc/resolv.conf. kubelet configures this file for each Pod... The values of the search option are used to expand queries." |
| 41 | How it works | Control loop finds matching PV and binds | 9 | PASS | "A control loop in the control plane watches for new PVCs, finds a matching PV (if possible), and binds them together." |
| 42 | How it works | PVC-PV binding is one-to-one | 9 | PASS | "A PVC to PV binding is a one-to-one mapping" |
| 43 | How it works | Claims stay unbound indefinitely without matching volume | 9 | PASS | "Claims will remain unbound indefinitely if a matching volume does not exist." |
| 44 | How it works | Admin can set default StorageClass for PVCs with no class | 10 | PASS | "you can specify a default StorageClass that applies to any PVCs that don't request a specific class." |
| 45 | How it works | WaitForFirstConsumer delays binding and provisioning | 10 | PASS | "will delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created." |
| 46 | How it works | Pods use claim as volume; claim in same namespace | 9 | PASS | "Pods access storage by using the claim as a volume. Claims must exist in the same namespace as the Pod using the claim." |
| 47 | How it works | Access modes table | 9 | PASS | "ReadWriteOnce the volume can be mounted as read-write by a single node. ... still can allow multiple pods to access ... when the pods are running on the same node."; "ReadOnlyMany the volume can be mounted as read-only by many nodes."; "ReadWriteMany ... read-write by many nodes."; "ReadWriteOncePod the volume can be mounted as read-write by a single Pod." |
| 48 | How it works | User deletes PVC; reclaim policy says what to do after release | 9 | PASS | "they can delete the PVC objects ... The reclaim policy for a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim." |
| 49 | How it works | Dynamic volumes inherit StorageClass policy, default Delete | 9 | PASS | "Volumes that were dynamically provisioned inherit the reclaim policy of their StorageClass, which defaults to Delete." |
| 50 | How it works | Delete removes PV object and external storage asset | 9 | PASS | "For volume plugins that support the Delete reclaim policy, deletion removes both the PersistentVolume object from Kubernetes, as well as the associated storage asset in the external infrastructure." |
| 51 | How it works | Retain: PV still exists, "released" | 9 | PASS | "When the PersistentVolumeClaim is deleted, the PersistentVolume still exists" (the "released" word is also in S9's reclaim-policy text) |
| 52 | How it works | Diagram, step 2 of the tutorial's run | none | N/A | The page labels it the tutorial's own picture of its run. |
| 53 | Try it | Run record: date, Linux, versions, namespace net-lab | none | N/A | The page's own run record. |
| 54 | Try it | `kubectl create namespace` creates a namespace | 14 | PASS | "you can create namespace using below command: kubectl create namespace" |
| 55 | Try it | `create deployment` creates a deployment; `--replicas` is the number of replicas | 16 | PASS | "Create a deployment with the specified name."; "Number of replicas to create." |
| 56 | Try it | `rollout status` shows status; `--timeout` is wait before ending watch | 17 | PASS | "Show the status of the rollout."; "The length of time to wait before ending watch" |
| 57 | Try it | `expose` makes a new Service; no `--selector` infers it; default type ClusterIP; code block | 15 | PASS | "Expose a resource as a new Kubernetes service."; "If empty (the default) infer the selector from the resource being exposed."; "Default is 'ClusterIP'." |
| 58 | Try it | `-o wide`, `--show-labels`, `describe` verbose | 21 | PASS | "with more details"; "kubectl get pods --show-labels"; "# Describe commands with verbose output" |
| 59 | Try it | Service selector and targetPort default (describe lines) | 1 | PASS | "the targetPort is set to the same value as the port field" |
| 60 | Try it | Debug Services lists EndpointSlices with `-l kubernetes.io/service-name=hostnames` | 11 | PASS | "kubectl get endpointslices -l kubernetes.io/service-name=hostnames" |
| 61 | Try it | Debug Services runs test Pod with `kubectl run`, `--restart=Never` | 11 | PASS | "kubectl run -it --rm --restart=Never busybox --image=registry.k8s.io/busybox:1.27.2 sh" |
| 62 | Try it | Quick reference runs image `busybox:1.28` | 21 | PASS | "kubectl create job hello --image=busybox:1.28 -- echo \"Hello World\"" |
| 63 | Try it | `kubectl wait` waits for a specific condition | 18 | PASS | "Wait for a specific condition on one or many resources." (`--for=condition=Ready` is in S18 examples) |
| 64 | Try it | `kubectl exec` runs a command in an existing Pod | 21 | PASS | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 65 | Try it | Short and full name gave the same address; `wget` output | none | N/A | The page's own run record. |
| 66 | Try it | DNS debugging page uses `nslookup kubernetes.default` and Pod `/etc/resolv.conf` | 12 | PASS | "kubectl exec -i -t dnsutils -- nslookup kubernetes.default"; "kubectl exec -ti dnsutils -- cat /etc/resolv.conf" |
| 67 | Try it | Run output of nslookup and resolv.conf | none | N/A | The page's own run record. |
| 68 | Try it | Queries without namespace limited to Pod namespace | 2 | PASS | "DNS queries that don't specify a namespace are limited to the Pod's namespace." |
| 69 | Try it | `search` values used to expand queries | 2 | PASS | "The values of the search option are used to expand queries." |
| 70 | Try it | Debug Services: if short name fails, different namespaces, try namespace-qualified name | 11 | PASS | "If this fails, perhaps your Pod and Service are in different Namespaces, try a namespace-qualified name" |
| 71 | Try it | `--selector` gives a label selector; `--name` names the new object | 15 | PASS | "A label selector to use for this service."; "The name for the newly created object." |
| 72 | Try it | Run output of the broken selector | none | N/A | The page's own run record. |
| 73 | Try it | Debug Services: ENDPOINTS `<none>` means check `spec.selector`; typo is common | 11 | PASS | "If the ENDPOINTS column is <none>, you should check that the spec.selector field of your Service actually selects for metadata.labels values on your Pods. A common mistake is to have a typo or other error" |
| 74 | Try it | `<unset>` where the page shows `<none>` | none | N/A | The page's own run record. |
| 75 | Try it | `port-forward` uses a resource name to pick a Pod; docs forward to a Service with `service/mongo 28015:27017` | 13 | PASS | "allows using resource name, such as a pod name, to select a matching pod to port forward to."; "kubectl port-forward service/mongo 28015:27017" |
| 76 | Try it | `port-forward` does not return; docs open another terminal | 13 | PASS | "kubectl port-forward does not return. To continue with the exercises, you will need to open another terminal." |
| 77 | Try it | `kubectl logs` prints logs of a container in a pod or resource, `POD` or `TYPE/NAME` | 19 | PASS | "Print the logs for a container in a pod or specified resource."; "kubectl logs [-f] [-p] (POD \| TYPE/NAME)" |
| 78 | Try it | Debug Services shows log line `Using iptables Proxier` | 11 | PASS | "line Using iptables Proxier indicates that kube-proxy is running in \"iptables\" mode." |
| 79 | Try it | NodePort Service reports port in `.spec.ports[*].nodePort` | 1 | PASS | "Your Service reports the allocated port in its .spec.ports[*].nodePort field." |
| 80 | Try it | `-o jsonpath` prints jsonpath fields; quick reference uses it for node addresses | 21 | PASS | "Print the fields defined in a jsonpath expression"; "# Get ExternalIPs of all nodes ... -o jsonpath='{.items[*].status.addresses[?(@.type==\"ExternalIP\")].address}'" |
| 81 | Try it | Run record: node port 30756, curl results, three runs, exit code 7 | none | N/A | The page's own run record. |
| 82 | Try it | iptables: each change may wait up to full minSyncPeriod | 6 | PASS | "each individual change may end up waiting up to the full minSyncPeriod before being processed" |
| 83 | Try it | LoadBalancer on cloud providers: async creation, `.status.loadBalancer` | 1 | PASS | "On cloud providers which support external load balancers, setting the type field to LoadBalancer provisions a load balancer for your Service. The actual creation of the load balancer happens asynchronously, and information about the provisioned balancer is published in the Service's .status.loadBalancer field." |
| 84 | Try it | kind guide uses Cloud Provider KIND, standalone binary, provisions LB containers | 22 | PASS | "Cloud Provider KIND runs as a standalone binary in your host and connects to your KIND cluster and provisions new Load Balancer containers for your Services." |
| 85 | Try it | Service got a node port because LoadBalancer starts like NodePort | 1 | PASS | "Kubernetes typically starts off by making the changes that are equivalent to you requesting a Service of type: NodePort." |
| 86 | Try it | `kubectl get` with a type and no name shows all; type singular, plural, or abbreviated | 23 | PASS | "If the name is omitted, details for all resources are displayed, for example kubectl get pods."; "you can specify the singular, plural, or abbreviated forms." |
| 87 | Try it | Claim names no class, so default class applies | 10 | PASS | "When a PVC does not specify a storageClassName, the default StorageClass is used." |
| 88 | Try it | `kubectl apply -f` creates resources of a file | 21 | PASS | "kubectl apply -f ./my-manifest.yaml # create resource(s)" |
| 89 | Try it | `WaitForFirstConsumer` delays binding and provisioning | 10 | PASS | "will delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created." |
| 90 | Try it | Pods access storage by using the claim as a volume | 9 | PASS | "Pods access storage by using the claim as a volume." (Pod YAML uses `claimName`, as S9 does) |
| 91 | Try it | `kubectl wait` with `--for=jsonpath='{.status.phase}'=Running` | 18 | PASS | "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| 92 | Try it | Run output: Bound claim, PV columns | none | N/A | The page's own run record. |
| 93 | Try it | Volume took reclaim policy `Delete` of its StorageClass | 9 | PASS | "inherit the reclaim policy of their StorageClass, which defaults to Delete." |
| 94 | Try it | `kubectl delete` deletes by resources and names | 20 | PASS | "Delete resources by file names, stdin, resources and names, or by resources and label selector." |
| 95 | Try it | `kubectl logs` dumps Pod logs | 21 | PASS | "kubectl logs my-pod # dump pod logs (stdout)" |
| 96 | Try it | Persistent volumes exist beyond lifetime of any Pod | 3 | PASS | "persistent volumes exist beyond the lifetime of any individual Pod." |
| 97 | Try it | `kubectl delete namespaces` deletes everything under the namespace | 14 | PASS | "kubectl delete namespaces <insert-some-namespace-name>"; "This deletes everything under the namespace!" |
| 98 | Try it | `--timeout` is wait before giving up on a delete | 20 | PASS | "The length of time to wait before giving up on a delete" |
| 99 | Try it | Reclaim policy tells cluster what to do with a released volume | 9 | PASS | "tells the cluster what to do with the volume after it has been released of its claim." |
| 100 | Try it | Run record: get pv shows `No resources found`, namespace deleted | none | N/A | The page's own run record. |
| 101 | How a tester uses it | A DNS name is one of the most common ways clients consume a Service | 11 | PASS | "One of the most common ways that clients consume a Service is through a DNS name." |
| 102 | How a tester uses it | Use namespace-qualified name; queries without namespace limited | 2 | PASS | "DNS queries that don't specify a namespace are limited to the Pod's namespace. Access Services in other namespaces by specifying it in the DNS query." |
| 103 | How a tester uses it | Debug Services questions list | 11 | PASS | "Does the Service exist? ... Does the Service work by DNS name? ... Does the Service have any EndpointSlices? Are the Pods working?" |
| 104 | How a tester uses it | Can bypass Service and go to Pods | 11 | PASS | "you can bypass the Service mechanism and go straight to the Pods" |
| 105 | How a tester uses it | Step 3 record: Service existed, EndpointSlice empty | none | N/A | The page's own run record. |
| 106 | How a tester uses it | iptables delay; default 1s | 6 | PASS | "waiting up to the full minSyncPeriod before being processed"; "The default value of 1s" |
| 107 | How a tester uses it | Step 4 record: first NodePort request failed, worked 2 s later | none | N/A | The page's own run record. |
| 108 | How a tester uses it | With a Service name, port-forward selects a matching Pod | 13 | PASS | "allows using resource name ... to select a matching pod to port forward to."; "kubectl port-forward service/mongo 28015:27017 ... Any of the above commands works." |
| 109 | How a tester uses it | A test through it reaches that Pod; separate terminal because it does not return | 13 | PASS | "kubectl port-forward does not return. To continue with the exercises, you will need to open another terminal." |
| 110 | How a tester uses it | Any volume: data kept across container restarts; persistent volumes outlive Pods | 3 | PASS | "For any kind of volume in a given Pod, data is preserved across container restarts."; "persistent volumes exist beyond the lifetime of any individual Pod" |
| 111 | How a tester uses it | Step 5 record: one Pod wrote, new Pod read | none | N/A | The page's own run record. |
| 112 | How a tester uses it | Deleting a namespace deletes everything under it | 14 | PASS | "This deletes everything under the namespace!" |
| 113 | How a tester uses it | Reclaim policy Delete also removes external storage asset | 9 | PASS | "deletion removes both the PersistentVolume object ... as well as the associated storage asset in the external infrastructure." |
| 114 | How a tester uses it | Retain: PV still exists after PVC deleted | 9 | PASS | "When the PersistentVolumeClaim is deleted, the PersistentVolume still exists" |
| 115 | Common mistakes | ENDPOINTS `<none>`: check selector selects labels; typo is common | 11 | PASS | "A common mistake is to have a typo or other error" |
| 116 | Common mistakes | Step 3 request was refused | none | N/A | The page's own run record. |
| 117 | Common mistakes | Short DNS name across namespaces | 2 | PASS | "DNS queries that don't specify a namespace are limited to the Pod's namespace." |
| 118 | Common mistakes | No LB component; you must provide one or integrate with a cloud provider | 1 | PASS | "does not directly offer a load balancing component; you must provide one, or you can integrate your Kubernetes cluster with a cloud provider." |
| 119 | Common mistakes | kind's guide uses Cloud Provider KIND | 22 | PASS | "how to get service of type LoadBalancer working in a kind cluster using Cloud Provider KIND." |
| 120 | Common mistakes | WaitForFirstConsumer waits for a Pod | 10 | PASS | "will delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created." |
| 121 | Common mistakes | Claims remain unbound indefinitely if no matching volume | 9 | PASS | "Claims will remain unbound indefinitely if a matching volume does not exist." |
| 122 | Common mistakes | "so read the Events of the claim" | none | N/A | Advice to the reader, not a tool fact. |
| 123 | Common mistakes | After a crash kubelet restarts the container clean | 3 | PASS | "After a crash, kubelet restarts the container with a clean state." |
| 124 | Common mistakes | Gateway recommended; Ingress API frozen | 7 | PASS | "The Kubernetes project recommends using Gateway instead of Ingress. The Ingress API has been frozen." |
| 125 | What a tester can check | Callout "Tutorial advice": seven items | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. |
| 126 | Key words | Service | none | PASS | "a Service is a method for exposing a network application that is running as one or more Pods"; "usually determined by a selector". |
| 127 | Key words | Cluster IP | none | PASS | "Kubernetes assigns a Service an IP address, the cluster IP, that is used by the virtual IP address mechanism" |
| 128 | Key words | EndpointSlice | none | PASS | "EndpointSlices track the IP addresses of backend endpoints; ... typically represent Pods" |
| 129 | Key words | Selector | none | PASS | "usually determined by a selector"; "check that the selector of the Service selects for the labels on your Pods" |
| 130 | Key words | kube-proxy | none | PASS | "Each instance of kube-proxy watches ... Service and EndpointSlice objects"; "configure the node to capture traffic ... and redirect" |
| 131 | Key words | Four types, ClusterIP default | none | PASS | "Four types of Service" table; "this is the default type" |
| 132 | Key words | Service DNS name | none | PASS | "a name of the form `my-svc.my-namespace.svc.cluster-domain.example`, which resolves to the cluster IP of the Service" |
| 133 | Key words | Port forward | none | PASS | "`kubectl port-forward` selects a matching Pod to forward to"; run output "Forwarding from 127.0.0.1:18080 -> 80". |
| 134 | Key words | Ingress | none | PASS | "Ingress exposes HTTP and HTTPS routes ... the Ingress API has been frozen"; "recommends using Gateway instead of Ingress" |
| 135 | Key words | Gateway API | none | PASS | "Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing" |
| 136 | Key words | Volume | none | PASS | "a volume is a directory, possibly with some data in it, which is accessible to the containers in a Pod" |
| 137 | Key words | emptyDir | none | PASS | "initialized when the Pod is assigned to a node, and is deleted when the Pod is removed from that node" |
| 138 | Key words | PV | none | PASS | "A piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes" |
| 139 | Key words | PVC | none | PASS | "A request for storage by a user" |
| 140 | Key words | StorageClass | none | PASS | "A way for administrators to describe the classes of storage they offer"; PV "dynamically provisioned using Storage Classes". |
| 141 | Key words | WaitForFirstConsumer | none | PASS | "delays the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created" |
| 142 | Key words | Access mode | none | PASS | The four access modes are listed in the Access modes table. |
| 143 | Key words | Reclaim policy | none | PASS | "the reclaim policy of a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim"; the `Delete` and `Retain` sentences. |

Open FAILs after round 6: 0

## Round 7 (2026-11-18)

# Fact check: devops / kubernetes-networking-storage (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Services, DNS, EndpointSlices; traffic in and out; "how PersistentVolumeClaims keep data after a Pod is gone"; kind tester checks | none | FAIL | S3 says "persistent volumes exist beyond the lifetime of any individual Pod"; S9 says "A PersistentVolumeClaim (PVC) is a request for storage by a user". A PVC does not keep data. Fix: "how persistent volumes outlive a Pod". |
| 2 | Lede | Pods reached through Services and DNS names; data kept through volumes; practice run | none | N/A | Framing sentence that describes the page. |
| 3 | What it is | A Deployment can create and destroy Pods dynamically | 1 | PASS | "that Deployment can create and destroy Pods dynamically" |
| 4 | What it is | Each Pod gets its own IP; the Pod set can differ a moment later | 1 | PASS | "Each Pod gets its own IP address"; "the set of Pods running in one moment in time could be different from the set of Pods running that application a moment later" |
| 5 | What it is | Each pod gets a unique cluster-wide IP | 4 | PASS | "own unique cluster-wide IP address." |
| 6 | What it is | All pods talk to all pods, same or different node, without proxies or NAT | 4 | PASS | "directly, without the use of proxies or address translation (NAT)." |
| 7 | What it is | A Service exposes a network application that runs as one or more Pods | 1 | PASS | "a Service is a method for exposing a network application that is running as one or more Pods in your cluster." |
| 8 | What it is | Pods of a Service are usually set by a selector you define | 1 | PASS | "The set of Pods targeted by a Service is usually determined by a selector that you define." |
| 9 | What it is | Kubernetes creates DNS records for Services and Pods | 2 | PASS | "Kubernetes creates DNS records for Services and Pods." |
| 10 | What it is | Contact Services with consistent DNS names instead of IPs | 2 | PASS | "You can contact Services with consistent DNS names instead of IP addresses." |
| 11 | What it is | Ingress exposes HTTP/HTTPS routes from outside to services in the cluster | 7 | PASS | "exposes HTTP and HTTPS routes from outside the cluster to" (line wraps) |
| 12 | What it is | Project recommends Gateway; Ingress API frozen | 7 | PASS | "The Kubernetes project recommends using Gateway instead of"; "The Ingress API has been frozen." |
| 13 | What it is | Gateway API is a family of API kinds for dynamic provisioning and advanced routing | 8 | PASS | "Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing." |
| 14 | What it is | On-disk files in a container are ephemeral | 3 | PASS | "On-disk files in a container are ephemeral" |
| 15 | What it is | On crash or stop, state is not saved and files are lost | 3 | PASS | "the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost." |
| 16 | What it is | After a crash kubelet restarts the container with a clean state | 3 | PASS | "After a crash, kubelet restarts the container with a clean state." |
| 17 | What it is | Containers in a Pod need to share files | 3 | PASS | "Another problem occurs when multiple containers are running in a Pod and need to share files." |
| 18 | What it is | The volume abstraction can help solve both | 3 | PASS | "can help you to solve both of these problems." |
| 19 | What it is | A volume is a directory, maybe with data, accessible to the containers in a Pod | 3 | PASS | "a volume is a directory, possibly with some data in it, which is accessible to the containers in a pod." |
| 20 | What it is | Table: ephemeral volume / emptyDir lifetime, scratch space, init and delete | 3 | PASS | "Ephemeral volume types have a lifetime linked to a specific Pod"; "emptyDir: empty scratch space that is initialized when the Pod is assigned to a node, and is deleted when the Pod is removed from that node." |
| 21 | What it is | Table: PV | 9 | PASS | "A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes." |
| 22 | What it is | Table: PVC | 9 | PASS | "A PersistentVolumeClaim (PVC) is a request for storage by a user." |
| 23 | What it is | Table: StorageClass | 10 | PASS | "A StorageClass provides a way for administrators to describe the classes of storage they offer." |
| 24 | What it is | Kubernetes destroys ephemeral volumes but not persistent volumes | 3 | PASS | "When a Pod ceases to exist, Kubernetes destroys ephemeral volumes; however, Kubernetes does not destroy persistent volumes." |
| 25 | How it works | Service gets a cluster IP used by the virtual IP mechanism | 1 | PASS | "Kubernetes assigns this Service an IP address (the cluster IP), that is used by the virtual IP address mechanism." |
| 26 | How it works | Controller scans for matching Pods and updates EndpointSlices | 1 | PASS | "continuously scans for Pods that match its selector, and then makes any necessary updates to the set of EndpointSlices for the Service." |
| 27 | How it works | EndpointSlices track backend IPs, normally tied to a Service, usually Pods | 5 | PASS | "EndpointSlices track the IP addresses of backend endpoints. EndpointSlices are normally associated with a Service and the backend endpoints typically represent" |
| 28 | How it works | A Service can map any port to a targetPort; default is the same as port | 1 | PASS | "By default and for convenience, the targetPort is set to the same value as the port field." |
| 29 | How it works | Each kube-proxy watches the control plane for Service and EndpointSlice changes | 6 | PASS | "Each instance of kube-proxy watches the Kubernetes control plane for the addition and removal of Service and EndpointSlice objects." |
| 30 | How it works | kube-proxy calls APIs by mode to capture clusterIP and port traffic and redirect to an endpoint | 6 | PASS | "calls appropriate APIs (depending on the kube-proxy mode) to configure the node to capture traffic to the Service's clusterIP and port, and redirect that traffic to one of the Service's endpoints" |
| 31 | How it works | Default mode in 1.37 is iptables, a future version will change to nftables | 6 | PASS | "In Kubernetes 1.37, this is iptables, but a future version of Kubernetes will change the default to nftables." |
| 32 | How it works | In iptables mode each change may wait up to minSyncPeriod; default 1s | 6 | PASS | "each individual change may end up waiting up to the full minSyncPeriod before being processed"; "The default value of 1s" |
| 33 | How it works | Four Service types (heading) | 1 | PASS | "The available type values and their behaviors are:" lists ClusterIP, NodePort, LoadBalancer, ExternalName. |
| 34 | How it works | Table ClusterIP: cluster-internal, only reachable inside, default | 1 | PASS | "Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default" |
| 35 | How it works | Table NodePort: node IP, static port, range 30000-32767 | 1 | PASS | "Exposes the Service on each Node's IP at a static port (the NodePort)."; "allocates a port from a range ... (default: 30000-32767)." |
| 36 | How it works | Table LoadBalancer | 1 | PASS | "Exposes the Service externally using an external load balancer. Kubernetes does not directly offer a load balancing component" |
| 37 | How it works | Table ExternalName | 1 | PASS | "Maps the Service to the contents of the externalName field (for example, to the hostname"; "No proxying of any kind is set up." |
| 38 | How it works | LoadBalancer starts with NodePort-equivalent changes; cloud-controller-manager configures the LB | 1 | PASS | "typically starts off by making the changes that are equivalent to you requesting a Service of type: NodePort. The cloud-controller-manager component then configures the external load balancer to forward traffic to that assigned node port." |
| 39 | How it works | Normal Service gets A/AAAA records named my-svc.my-namespace.svc.cluster-domain.example, resolving to the cluster IP | 2 | PASS | "\"Normal\" (not headless) Services are assigned DNS A and/or AAAA records, with a name of the form my-svc.my-namespace.svc.cluster-domain.example. This resolves to the cluster IP" |
| 40 | How it works | Queries without a namespace stay in the Pod's namespace; use the namespace for others | 2 | PASS | "DNS queries that don't specify a namespace are limited to the Pod's namespace. Access Services in other namespaces by specifying it in the DNS query." |
| 41 | How it works | Queries expanded using /etc/resolv.conf, which kubelet configures; search values expand | 2 | PASS | "DNS queries may be expanded using the Pod's /etc/resolv.conf. kubelet configures this file for each Pod."; "The values of the search option are used to expand queries." |
| 42 | How it works | Control loop watches new PVCs, finds a matching PV, binds | 9 | PASS | "A control loop in the control plane watches for new PVCs, finds a matching PV (if possible), and binds them together." |
| 43 | How it works | PVC to PV binding is one-to-one; claims stay unbound if no matching volume | 9 | PASS | "A PVC to PV binding is a one-to-one mapping"; "Claims will remain unbound indefinitely if a matching volume does not exist." |
| 44 | How it works | Admin can set a default StorageClass for PVCs that request no class | 10 | PASS | "you can specify a default StorageClass that applies to any PVCs that don't request a specific class." |
| 45 | How it works | WaitForFirstConsumer delays binding and provisioning until a Pod uses the claim | 10 | PASS | "will delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created." |
| 46 | How it works | Pods use claim as volume; claims must be in the Pod's namespace | 9 | PASS | "Pods access storage by using the claim as a volume. Claims must exist in the same namespace as the Pod using the claim." |
| 47 | How it works | Table of four access modes | 9 | PASS | "the volume can be mounted as read-write by a single node. ReadWriteOnce access ... running on the same node"; "read-only by many nodes"; "read-write by many nodes"; "read-write by a single Pod" |
| 48 | How it works | User deletes PVC; reclaim policy says what to do after release | 9 | PASS | "they can delete the PVC objects"; "tells the cluster what to do with the volume after it has been released of its claim." |
| 49 | How it works | Dynamically provisioned volumes inherit the StorageClass reclaim policy, default Delete | 9 | PASS | "Volumes that were dynamically provisioned inherit the reclaim policy of their StorageClass, which defaults to Delete." |
| 50 | How it works | Delete removes PV object and storage asset, where plugin supports it | 9 | PASS | "For volume plugins that support the Delete reclaim policy, deletion removes both the PersistentVolume object from Kubernetes, as well as the associated storage asset in the external infrastructure." |
| 51 | How it works | Retain keeps the PV and marks it released | 9 | PASS | "When the PersistentVolumeClaim is deleted, the PersistentVolume still exists and the volume is considered \"released\"." |
| 52 | How it works | Diagram: "the rules on the node, written by kube-proxy / send to one endpoint of the EndpointSlice" (general how-it-works) | none | FAIL | The intro sentence and the diagram have no cite. Step 3 states how kube-proxy works in general. S6 supports it: "calls appropriate APIs ... redirect that traffic to one of the Service's endpoints". Fix: add `<Cite n={6} />`. |
| 53 | How it works | Intro to the diagram: step 2 of the run, request addresses | none | N/A | Page's own run record. |
| 54 | Try it | Run record: date, versions, namespace `net-lab` | none | N/A | Record of the page's own run. |
| 55 | Try it | `kubectl create namespace` creates a namespace | 14 | PASS | "Alternatively, you can create namespace using below command: kubectl create namespace <insert-namespace-name-here>" |
| 56 | Try it | `kubectl create deployment` creates a deployment with the given name; `--replicas` is the number of replicas | 16 | PASS | "Create a deployment with the specified name."; "Number of replicas to create. Default is 1." |
| 57 | Try it | `kubectl rollout status` shows rollout status; `--timeout` is the wait before ending the watch | 17 | PASS | "Show the status of the rollout."; "The length of time to wait before ending watch" |
| 58 | Try it | `kubectl expose` exposes a resource as a new service; no `--selector` infers it; default type ClusterIP | 15 | PASS | "Expose a resource as a new Kubernetes service."; "If empty (the default) infer the selector from the resource being exposed."; "Default is 'ClusterIP'." |
| 59 | Try it | Step 1 code block value `--image=nginx:1.16.1` | 16 | FAIL | S16 only shows `--image=nginx`. The tag `nginx:1.16.1` is in none of the sources. Fix: use `nginx`, or label the tag as the tutorial's own choice. |
| 60 | Try it | `-o wide` lists more details; `--show-labels` shows labels; `kubectl describe` is verbose | 21 | PASS | "List all pods in the current namespace, with more details"; "# Show labels for all pods"; "# Describe commands with verbose output" |
| 61 | Try it | Selector `app=web`; target port same as port | 1 | PASS | "the targetPort is set to the same value as the port field." (the selector part is run record) |
| 62 | Try it | Debug Services lists EndpointSlices with `kubectl get endpointslices -l kubernetes.io/service-name=hostnames` | 11 | PASS | "kubectl get endpointslices -l kubernetes.io/service-name=hostnames" |
| 63 | Try it | Debug Services uses `kubectl run` and `--restart=Never` | 11 | PASS | "kubectl run -it --rm --restart=Never busybox --image=registry.k8s.io/busybox:1.27.2 sh" |
| 64 | Try it | The quick reference runs image `busybox:1.28` | 21 | PASS | "kubectl run -i --tty busybox --image=busybox:1.28 -- sh" |
| 65 | Try it | `kubectl wait` waits for a condition on one or many resources | 18 | PASS | "Wait for a specific condition on one or many resources." |
| 66 | Try it | `kubectl exec` runs a command in an existing Pod | 21 | PASS | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 67 | Try it | Step 2 run output and `wget` result | none | N/A | Run record. |
| 68 | Try it | DNS debugging page checks with `nslookup kubernetes.default` and looks at `/etc/resolv.conf` | 12 | PASS | "kubectl exec -i -t dnsutils -- nslookup kubernetes.default"; "kubectl exec -ti dnsutils -- cat /etc/resolv.conf" |
| 69 | Try it | Queries without a namespace stay in the Pod's namespace | 2 | PASS | "DNS queries that don't specify a namespace are limited to the Pod's namespace." |
| 70 | Try it | `search` values expand queries | 2 | PASS | "The values of the search option are used to expand queries." |
| 71 | Try it | Debug Services: if the short name fails, try a namespace-qualified name | 11 | PASS | "If this fails, perhaps your Pod and Service are in different Namespaces, try a namespace-qualified name" |
| 72 | Try it | `--selector` gives a label selector; `--name` names the new object | 15 | PASS | "A label selector to use for this service."; "The name for the newly created object." |
| 73 | Try it | Step 3 run results | none | N/A | Run record. |
| 74 | Try it | Debug Services: if ENDPOINTS is `<none>`, check `spec.selector`; typo is a common mistake | 11 | PASS | "If the ENDPOINTS column is <none>, you should check that the spec.selector field of your Service actually selects for metadata.labels values on your Pods. A common mistake is to have a typo or other error" |
| 75 | Try it | `kubectl port-forward` selects a Pod from a resource name; docs forward to `service/mongo 28015:27017` | 13 | PASS | "allows using resource name, such as a pod name, to select a matching pod to port forward to."; "kubectl port-forward service/mongo 28015:27017" |
| 76 | Try it | `kubectl port-forward` does not return; docs open another terminal | 13 | PASS | "kubectl port-forward does not return. To continue with the exercises, you will need to open another terminal." |
| 77 | Try it | `kubectl logs` prints logs of a container in a pod or resource, as `POD` or `TYPE/NAME` | 19 | PASS | "Print the logs for a container in a pod or specified resource."; "(POD \| TYPE/NAME)" |
| 78 | Try it | Debug Services shows the log line `Using iptables Proxier` | 11 | PASS | "Using iptables Proxier." |
| 79 | Try it | NodePort Service reports the port in `.spec.ports[*].nodePort` | 1 | PASS | "Your Service reports the allocated port in its .spec.ports[*].nodePort field." |
| 80 | Try it | `-o jsonpath` prints fields from a jsonpath expression; quick reference uses it for node addresses | 21 | PASS | "Print the fields defined in a jsonpath expression"; "kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type==\"ExternalIP\")].address}'" |
| 81 | Try it | Node port, `curl` result, exit code 7, three runs | none | N/A | Run record. |
| 82 | Try it | In iptables mode each change may wait up to minSyncPeriod | 6 | PASS | "each individual change may end up waiting up to the full minSyncPeriod before being processed" |
| 83 | Try it | `LoadBalancer` provisions an LB on supporting clouds, asynchronously, info in `.status.loadBalancer` | 1 | PASS | "provisions a load balancer for your Service. The actual creation of the load balancer happens asynchronously, and information about the provisioned balancer is published in the Service's .status.loadBalancer field." |
| 84 | Try it | kind guide uses Cloud Provider KIND, a standalone binary on the host that provisions LB containers | 22 | PASS | "Cloud Provider KIND runs as a standalone binary in your host and connects to your KIND cluster and provisions new Load Balancer containers for your Services." |
| 85 | Try it | LoadBalancer starts with NodePort changes, so it got a node port | 1 | PASS | "typically starts off by making the changes that are equivalent to you requesting a Service of type: NodePort." |
| 86 | Try it | `kubectl get` with a type and no name shows all resources; type in singular, plural, or short | 23 | PASS | "If the name is omitted, details for all resources are displayed"; "you can specify the singular, plural, or abbreviated forms." |
| 87 | Try it | Claim names no class, so default class applies | 10 | PASS | "applies to any PVCs that don't request a specific class" |
| 88 | Try it | `kubectl apply -f` creates the resources of a file | 21 | PASS | "kubectl apply -f ./my-manifest.yaml # create resource(s)" |
| 89 | Try it | `WaitForFirstConsumer` delays binding until a Pod uses the claim | 10 | PASS | "will delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created." |
| 90 | Try it | Pods access storage by using the claim as a volume | 9 | PASS | "Pods access storage by using the claim as a volume." |
| 91 | Try it | `kubectl wait` waits on a field with `--for=jsonpath='{.status.phase}'=Running` | 18 | PASS | "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| 92 | Try it | Volume took the reclaim policy `Delete` of its StorageClass | 9 | PASS | "inherit the reclaim policy of their StorageClass, which defaults to Delete." |
| 93 | Try it | `kubectl delete` deletes by resources and names | 20 | PASS | "Delete resources by file names, stdin, resources and names" |
| 94 | Try it | `kubectl logs` dumps a Pod's logs | 21 | PASS | "kubectl logs my-pod # dump pod logs (stdout)" |
| 95 | Try it | Persistent volumes exist beyond the lifetime of any Pod | 3 | PASS | "persistent volumes exist beyond the lifetime of any individual Pod." |
| 96 | Try it | `kubectl delete namespaces` deletes a namespace and everything under it | 14 | PASS | "kubectl delete namespaces <insert-some-namespace-name>"; "This deletes everything under the namespace!" |
| 97 | Try it | `--timeout` is the wait before giving up on a delete | 20 | PASS | "The length of time to wait before giving up on a delete" |
| 98 | Try it | Reclaim policy says what to do after release; here `Delete` | 9 | PASS | "tells the cluster what to do with the volume after it has been released of its claim." |
| 99 | How a tester uses it | One common way to consume a Service is a DNS name | 11 | PASS | "One of the most common ways that clients consume a Service is through a DNS" |
| 100 | How a tester uses it | Use a namespace-qualified name from another namespace; queries without one stay in the Pod's namespace | 2 | PASS | "DNS queries that don't specify a namespace are limited to the Pod's namespace."; example "data.prod" |
| 101 | How a tester uses it | Debug Services questions list | 11 | PASS | "Does the Service exist?"; "Does the Service work by DNS name?"; "Does the Service have any EndpointSlices?"; "Are the Pods working?" |
| 102 | How a tester uses it | Bypass the Service and go to the Pods | 11 | PASS | "you can bypass the Service mechanism and go straight to the Pods" |
| 103 | How a tester uses it | Delay after change; default 1s | 6 | PASS | "waiting up to the full minSyncPeriod before being processed"; "The default value of 1s" |
| 104 | How a tester uses it | Port forward picks a matching Pod; separate terminal since it does not return | 13 | PASS | "to select a matching pod to port forward to."; "does not return. ... open another terminal." |
| 105 | How a tester uses it | Data is preserved across container restarts; persistent volumes outlive a Pod | 3 | PASS | "For any kind of volume in a given Pod, data is preserved across container restarts."; "persistent volumes exist beyond the lifetime of any individual Pod" |
| 106 | How a tester uses it | Deleting a namespace deletes everything under it | 14 | PASS | "This deletes everything under the namespace!" |
| 107 | How a tester uses it | With reclaim policy `Delete`, deletion removes the storage asset | 9 | PASS | "deletion removes both the PersistentVolume object from Kubernetes, as well as the associated storage asset in the external infrastructure." |
| 108 | How a tester uses it | With `Retain`, the PV still exists after the PVC is deleted | 9 | PASS | "When the PersistentVolumeClaim is deleted, the PersistentVolume still exists" |
| 109 | Common mistakes | If ENDPOINTS is `<none>`, check the selector against Pod labels; typo is common | 11 | PASS | "A common mistake is to have a typo or other error" |
| 110 | Common mistakes | Short DNS name across namespaces | 2 | PASS | "DNS queries that don't specify a namespace are limited to the Pod's namespace." |
| 111 | Common mistakes | Kubernetes offers no LB component; provide one or integrate a cloud provider | 1 | PASS | "Kubernetes does not directly offer a load balancing component; you must provide one, or you can integrate your Kubernetes cluster with a cloud provider." |
| 112 | Common mistakes | kind's guide uses Cloud Provider KIND | 22 | PASS | "how to get service of type LoadBalancer working in a kind cluster using Cloud Provider KIND." |
| 113 | Common mistakes | With `WaitForFirstConsumer`, binding waits for a Pod that uses the claim | 10 | PASS | "delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created." |
| 114 | Common mistakes | Claims stay unbound if no volume matches; "read the Events of the claim" | 9 | PASS | "Claims will remain unbound indefinitely if a matching volume does not exist." ("read the Events" is the reader's own advice.) |
| 115 | Common mistakes | After a crash kubelet restarts the container with a clean state | 3 | PASS | "After a crash, kubelet restarts the container with a clean state." |
| 116 | Common mistakes | Gateway recommended over Ingress; Ingress API frozen | 7 | PASS | "The Ingress API has been frozen." |
| 117 | What a tester can check | Callout "Tutorial advice", seven advice items | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no new tool fact beyond the page. |
| 118 | Key words | Service | none | PASS | "a Service is a method for exposing a network application that is running as one or more Pods"; "usually determined by a selector" |
| 119 | Key words | Cluster IP | none | PASS | "Kubernetes assigns a Service an IP address, the cluster IP, that is used by the virtual IP address mechanism" |
| 120 | Key words | EndpointSlice | none | PASS | "EndpointSlices track the IP addresses of backend endpoints; ... typically represent Pods" |
| 121 | Key words | Selector, "the labels that pick the Pods" | none | PASS | "`--selector` gives a label selector to use for the Service" |
| 122 | Key words | kube-proxy | none | PASS | "Each instance of kube-proxy watches ... Service and EndpointSlice objects ... configure the node to capture traffic ... redirect ... to one of the Service's endpoints" |
| 123 | Key words | Four Service types, ClusterIP default | none | PASS | "this is the default type" |
| 124 | Key words | Service DNS name | none | PASS | "`my-svc.my-namespace.svc.cluster-domain.example`, which resolves to the cluster IP of the Service" |
| 125 | Key words | Port forward: forwards a local port to a matching Pod | none | PASS | "`kubectl port-forward` selects a matching Pod to forward to" |
| 126 | Key words | Ingress | none | PASS | "Ingress exposes HTTP and HTTPS routes ... the Ingress API has been frozen" |
| 127 | Key words | Gateway API | none | PASS | "Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing" |
| 128 | Key words | Volume | none | PASS | "a volume is a directory, possibly with some data in it, which is accessible to the containers in a Pod" |
| 129 | Key words | emptyDir | none | PASS | "empty scratch space ... deleted when the Pod is removed from that node" |
| 130 | Key words | PV | none | PASS | "provisioned by an administrator or dynamically provisioned using Storage Classes" |
| 131 | Key words | PVC | none | PASS | "A request for storage by a user" |
| 132 | Key words | StorageClass, "can make volumes on demand" | none | PASS | "A way for administrators to describe the classes of storage they offer"; PV "dynamically provisioned using Storage Classes" |
| 133 | Key words | WaitForFirstConsumer | none | PASS | "delays the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created" |
| 134 | Key words | Access mode | none | PASS | The access-mode table lists the four modes. |
| 135 | Key words | Reclaim policy | none | PASS | "the reclaim policy of a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim"; "Delete"; "Retain" |

Open FAILs after round 7: 3

Changed after this round: Row 1: the description said that PersistentVolumeClaims keep data, but a PVC is a request for storage (S9), and S3 says that persistent volumes exist beyond the lifetime of any individual Pod; the description (page and topics list) now says "how persistent volumes outlive a Pod". Row 52: the diagram of How it works had no cite; its intro sentence now says what kube-proxy does in step 3 of the picture, with a cite of S6, in all three voices. Row 59: the image tag `nginx:1.16.1` is in none of the sources, so step 1 now says that it is the tutorial's own choice.

## Round 8 (2026-11-18)

# Fact check: devops / kubernetes-networking-storage (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Services, DNS, EndpointSlices, traffic in and out, PVs outliving a Pod, tester checks on kind | none | N/A | Describes the page itself. |
| 2 | Lede | The page is about Pod access through Services and DNS, and data kept through volumes, with a practice run | none | N/A | Describes the page itself. |
| 3 | What it is | A Deployment can create and destroy Pods dynamically | 1 | PASS | S1: "that Deployment can create and destroy Pods dynamically" |
| 4 | What it is | Each Pod gets its own IP. The set of Pods can differ a moment later | 1 | PASS | S1: "Each Pod gets its own IP address"; "the set of Pods running in one moment in time could be different from the set of Pods running that application a moment later" |
| 5 | What it is | Each Pod gets its own unique cluster-wide IP | 4 | PASS | S4: "own unique cluster-wide IP address." |
| 6 | What it is | All Pods talk to all Pods, on the same or different nodes, without proxies or NAT | 4 | PASS | S4: "directly, without the use of proxies or address translation (NAT)." |
| 7 | What it is | A Service exposes a network application running as one or more Pods | 1 | PASS | S1: "a Service is a method for exposing a network application that is running as one or more" |
| 8 | What it is | The Pods of a Service are usually determined by a selector | 1 | PASS | S1: "The set of Pods targeted by a Service is usually determined by a selector that you define." |
| 9 | What it is | Kubernetes creates DNS records for Services and Pods | 2 | PASS | S2: "Kubernetes creates DNS records for Services and Pods." |
| 10 | What it is | You can contact Services by consistent DNS names instead of IPs | 2 | PASS | S2: "You can contact Services with consistent DNS names instead of IP addresses." |
| 11 | What it is | Ingress exposes HTTP and HTTPS routes from outside to services inside | 7 | PASS | S7: "exposes HTTP and HTTPS routes from outside the cluster to" |
| 12 | What it is | The project recommends Gateway instead of Ingress. The Ingress API is frozen | 7 | PASS | S7: "The Kubernetes project recommends using Gateway instead of"; "The Ingress API has been frozen." |
| 13 | What it is | Gateway API is a family of API kinds for dynamic provisioning and advanced routing | 8 | PASS | S8: "Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing." |
| 14 | What it is | On-disk files in a container are ephemeral | 3 | PASS | S3: "On-disk files in a container are ephemeral" |
| 15 | What it is | A crash or stop loses the container's files | 3 | PASS | S3: "the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost." |
| 16 | What it is | After a crash kubelet restarts the container with a clean state | 3 | PASS | S3: "After a crash, kubelet restarts the container with a clean state." |
| 17 | What it is | Containers in a Pod need to share files | 3 | PASS | S3: "Another problem occurs when multiple containers are running in a Pod and need to share files." |
| 18 | What it is | The volume abstraction can help with both problems | 3 | PASS | S3: "can help you to solve both of these problems." |
| 19 | What it is | A volume is a directory, possibly with data, accessible to the containers in a Pod | 3 | PASS | S3: "a volume is a directory, possibly with some data in it, which is accessible to the containers in a pod" |
| 20 | What it is | Table: ephemeral volume and emptyDir (lifetime linked to a Pod; scratch space created at node assignment, deleted at removal) | 3 | PASS | S3: "Ephemeral volume types have a lifetime linked to a specific Pod"; "emptyDir: empty scratch space that is initialized when the Pod is assigned to a node, and is deleted when the Pod is removed from that node." |
| 21 | What it is | Table: PV is storage provisioned by an administrator or dynamically with Storage Classes | 9 | PASS | S9: "a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using" |
| 22 | What it is | Table: PVC is a request for storage by a user | 9 | PASS | S9: "A PersistentVolumeClaim (PVC) is a request for storage by a user." |
| 23 | What it is | Table: StorageClass lets administrators describe classes of storage | 10 | PASS | S10: "A StorageClass provides a way for administrators to describe the classes of storage they offer." |
| 24 | What it is | Kubernetes destroys ephemeral volumes when a Pod ceases to exist, but not persistent volumes | 3 | PASS | S3: "When a Pod ceases to exist, Kubernetes destroys ephemeral volumes; however, Kubernetes does not destroy persistent volumes." |
| 25 | How it works | A Service gets a cluster IP used by the virtual IP mechanism | 1 | PASS | S1: "Kubernetes assigns this Service an IP address (the cluster IP), that is used by the virtual IP address mechanism." |
| 26 | How it works | The Service controller scans for Pods that match the selector and updates EndpointSlices | 1 | PASS | S1: "continuously scans for Pods that match its selector, and then makes any necessary updates to the set of EndpointSlices for the Service." |
| 27 | How it works | EndpointSlices track backend endpoint IPs, are normally tied to a Service, and endpoints are typically Pods | 5 | PASS | S5: "EndpointSlices track the IP addresses of backend endpoints. EndpointSlices are normally associated with a Service and the backend endpoints typically represent" |
| 28 | How it works | A Service maps any incoming port to a targetPort, which defaults to the port value | 1 | PASS | S1: "A Service can map any incoming port to a targetPort. By default and for convenience, the targetPort is set to the same value as the port" |
| 29 | How it works | Each kube-proxy watches the control plane for Service and EndpointSlice additions and removals | 6 | PASS | S6: "Each instance of kube-proxy watches the Kubernetes control plane for the addition and removal of Service and EndpointSlice objects." |
| 30 | How it works | kube-proxy calls APIs by mode to capture traffic to clusterIP and port and redirect it to an endpoint | 6 | PASS | S6: "calls appropriate APIs (depending on the kube-proxy mode) to configure the node to capture traffic to the Service's clusterIP and port, and redirect that traffic to one of the Service's endpoints" |
| 31 | How it works | Default mode is iptables in 1.37, and a future version will change it to nftables | 6 | PASS | S6: "then it will use the recommended default version. In Kubernetes 1.37, this is iptables, but a future version of Kubernetes will change the default to nftables." |
| 32 | How it works | In iptables mode a change may wait up to the full minSyncPeriod, so rules can be out of sync. The default is 1s | 6 | PASS | S6: "each individual change may end up waiting up to the full minSyncPeriod before being processed, meaning that the iptables rules spend more time being out-of-sync with the current API server state."; "The default value of 1s" |
| 33 | How it works | Four Service types | 1 | PASS | S1: "The available type values and their behaviors are: ClusterIP ... NodePort ... LoadBalancer ... ExternalName" |
| 34 | How it works | ClusterIP: cluster-internal IP, only reachable inside, default | 1 | PASS | S1: "Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default" |
| 35 | How it works | NodePort: on each Node's IP at a static port, allocated from a range, default 30000-32767 | 1 | PASS | S1: "Exposes the Service on each Node's IP at a static port (the NodePort)."; "allocates a port from a range specified by --service-node-port-range flag (default: 30000-32767)." |
| 36 | How it works | LoadBalancer: external load balancer, and Kubernetes does not offer a load-balancing component | 1 | PASS | S1: "Exposes the Service externally using an external load balancer. Kubernetes does not directly offer a load balancing component" |
| 37 | How it works | ExternalName: maps to the externalName field, e.g. a hostname, with no proxying | 1 | PASS | S1: "Maps the Service to the contents of the externalName field (for example, to the hostname api.foo.bar.example)."; "No proxying of any kind is set up." |
| 38 | How it works | LoadBalancer starts like NodePort, then cloud-controller-manager configures the load balancer to forward to the node port | 1 | PASS | S1: "Kubernetes typically starts off by making the changes that are equivalent to you requesting a Service of type: NodePort. The cloud-controller-manager component then configures the external load balancer to forward traffic to that assigned node port." |
| 39 | How it works | A normal Service gets A and/or AAAA records named my-svc.my-namespace.svc.cluster-domain.example, resolving to the cluster IP | 2 | PASS | S2: "'Normal' (not headless) Services are assigned DNS A and/or AAAA records, with a name of the form my-svc.my-namespace.svc.cluster-domain.example. This resolves to the cluster IP" |
| 40 | How it works | Queries without a namespace stay in the Pod's namespace. Other namespaces need the namespace in the query | 2 | PASS | S2: "DNS queries that don't specify a namespace are limited to the Pod's namespace. Access Services in other namespaces by specifying it in the DNS query." |
| 41 | How it works | Queries may be expanded with the Pod's /etc/resolv.conf, which kubelet configures. The search values are used | 2 | PASS | S2: "DNS queries may be expanded using the Pod's /etc/resolv.conf. kubelet configures this file for each Pod."; "The values of the search option are used to expand queries." |
| 42 | How it works | A control loop watches for new PVCs, finds a matching PV if possible, and binds them | 9 | PASS | S9: "A control loop in the control plane watches for new PVCs, finds a matching PV (if possible), and binds them together." |
| 43 | How it works | PVC-PV binding is one-to-one. Claims stay unbound indefinitely if no volume matches | 9 | PASS | S9: "A PVC to PV binding is a one-to-one mapping"; "Claims will remain unbound indefinitely if a matching volume does not exist." |
| 44 | How it works | An administrator can set a default StorageClass for PVCs that request no class | 10 | PASS | S10: "you can specify a default StorageClass that applies to any PVCs that don't request a specific class." |
| 45 | How it works | WaitForFirstConsumer delays binding and provisioning until a Pod using the PVC is created | 10 | PASS | S10: "WaitForFirstConsumer mode which will delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created." |
| 46 | How it works | Pods use the claim as a volume. The claim must be in the Pod's namespace | 9 | PASS | S9: "Pods access storage by using the claim as a volume. Claims must exist in the same namespace as the Pod using the claim." |
| 47 | How it works | Access modes table (four modes and meanings) | 9 | PASS | S9: "the volume can be mounted as read-write by a single node. ReadWriteOnce access mode still can allow multiple pods to access ... when the pods are running on the same node"; "read-only by many nodes"; "read-write by many nodes"; "read-write by a single Pod" |
| 48 | How it works | A user can delete PVCs. The reclaim policy says what to do with the released volume | 9 | PASS | S9: "they can delete the PVC objects"; "The reclaim policy for a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim." |
| 49 | How it works | Dynamically provisioned volumes inherit the StorageClass reclaim policy, default Delete | 9 | PASS | S9: "Volumes that were dynamically provisioned inherit the reclaim policy of their StorageClass, which defaults to Delete." |
| 50 | How it works | For plugins that support it, Delete removes the PV object and the external storage asset | 9 | PASS | S9: "For volume plugins that support the Delete reclaim policy, deletion removes both the PersistentVolume object from Kubernetes, as well as the associated storage asset in the external infrastructure." |
| 51 | How it works | With Retain the PV still exists after PVC deletion and counts as "released" | 9 | PASS | S9: "When the PersistentVolumeClaim is deleted, the PersistentVolume still exists and the volume is considered \"released\"." |
| 52 | How it works | Diagram step 3: kube-proxy configures the node to capture traffic and redirect it to an endpoint | 6 | PASS | S6 (as in claim 30). Addresses and names in the diagram are the run's own record (N/A). |
| 53 | Try it | Run record: date, tool versions, namespace net-lab, step 6 deletes it | none | N/A | Record of the page's own run. |
| 54 | Try it | `kubectl create namespace` creates a namespace | 14 | PASS | S14: "you can create namespace using below command: kubectl create namespace <insert-namespace-name-here>" |
| 55 | Try it | `kubectl create deployment` creates a deployment with the name. `--replicas` is the number of replicas | 16 | PASS | S16: "Create a deployment with the specified name."; "--replicas ... Number of replicas to create." |
| 56 | Try it | `kubectl rollout status` shows the status. `--timeout` is the wait before ending the watch | 17 | PASS | S17: "Show the status of the rollout."; "The length of time to wait before ending watch" |
| 57 | Try it | `kubectl expose` exposes a resource as a new service. With no `--selector` it infers the selector. Default type is ClusterIP | 15 | PASS | S15: "Expose a resource as a new Kubernetes service."; "If empty (the default) infer the selector from the resource being exposed."; "Default is 'ClusterIP'." |
| 58 | Try it | nginx:1.16.1 is the tutorial's choice. Commands and outputs of step 1 | none | N/A | Tutorial's own choice and run record. |
| 59 | Try it | `-o wide`, `--show-labels`, and `kubectl describe` verbose output | 21 | PASS | S21: "kubectl get pods -o wide # List all pods in the current namespace, with more details"; "kubectl get pods --show-labels"; "# Describe commands with verbose output" |
| 60 | Try it | Selector was app=web. Target port same as port | 1 | PASS | S1: "the targetPort is set to the same value as the port". The selector and values are run record. |
| 61 | Try it | Debug Services lists EndpointSlices with `kubectl get endpointslices -l kubernetes.io/service-name=hostnames` | 11 | PASS | S11: "kubectl get endpointslices -l kubernetes.io/service-name=hostnames" |
| 62 | Try it | Debug Services runs a test Pod with `kubectl run` and `--restart=Never`. The quick reference runs busybox:1.28 | 11, 21 | PASS | S11: "kubectl run -it --rm --restart=Never busybox --image=registry.k8s.io/busybox:1.27.2 sh"; S21: "kubectl run -i --tty busybox --image=busybox:1.28 -- sh" |
| 63 | Try it | `kubectl wait` waits for a condition on one or many resources | 18 | PASS | S18: "Wait for a specific condition on one or many resources." |
| 64 | Try it | `kubectl exec` runs a command in an existing Pod | 21 | PASS | S21: "kubectl exec my-pod -- ls / # Run command in existing pod" |
| 65 | Try it | Short and full name gave the same address (run record) | none | N/A | Record of the page's own run. |
| 66 | Try it | The DNS debugging page uses `nslookup kubernetes.default` and the Pod's /etc/resolv.conf | 12 | PASS | S12: "kubectl exec -i -t dnsutils -- nslookup kubernetes.default"; "kubectl exec -ti dnsutils -- cat /etc/resolv.conf" |
| 67 | Try it | Queries without a namespace stay in the Pod's namespace | 2 | PASS | S2: "DNS queries that don't specify a namespace are limited to the Pod's namespace." |
| 68 | Try it | The search values expand queries | 2 | PASS | S2: "The values of the search option are used to expand queries." |
| 69 | Try it | Debug Services: if the short name fails, the Pod and Service may be in different namespaces, so try a namespace-qualified name | 11 | PASS | S11: "If this fails, perhaps your Pod and Service are in different Namespaces, try a namespace-qualified name" |
| 70 | Try it | `--selector` gives a label selector. `--name` names the new object | 15 | PASS | S15: "A label selector to use for this service."; "The name for the newly created object." |
| 71 | Try it | Debug Services: if ENDPOINTS is `<none>`, check spec.selector vs metadata.labels. A typo is a common mistake | 11 | PASS | S11: "If the ENDPOINTS column is <none>, you should check that ... metadata.labels values on your Pods. A common mistake is to have a typo or" |
| 72 | Try it | kubectl v1.37.2 printed `<unset>` where the page shows `<none>` | none | N/A | Run record. |
| 73 | Try it | `kubectl port-forward` uses a resource name to select a matching Pod. The docs forward to a Service with `service/mongo 28015:27017` | 13 | PASS | S13: "kubectl port-forward allows using resource name, such as a pod name, to select a matching pod to port forward to."; "kubectl port-forward service/mongo 28015:27017" |
| 74 | Try it | `kubectl port-forward` does not return. The docs open another terminal | 13 | PASS | S13: "kubectl port-forward does not return. To continue with the exercises, you will need to open another terminal." |
| 75 | Try it | `kubectl logs` prints logs for a container in a pod or resource, as POD or TYPE/NAME | 19 | PASS | S19: "Print the logs for a container in a pod or specified resource."; "kubectl logs [-f] [-p] (POD \| TYPE/NAME)" |
| 76 | Try it | Debug Services shows the kube-proxy log line `Using iptables Proxier` | 11 | PASS | S11: "Using iptables Proxier." |
| 77 | Try it | A NodePort Service reports the port in `.spec.ports[*].nodePort` | 1 | PASS | S1: "Your Service reports the allocated port in its .spec.ports[*].nodePort field." |
| 78 | Try it | `-o jsonpath` prints fields from a jsonpath expression. The quick reference uses it for node addresses | 21 | PASS | S21: "-o=jsonpath=<template> Print the fields defined in a jsonpath expression"; "kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type==\"ExternalIP\")].address}'" |
| 79 | Try it | Node port, node address, curl failures, exit code 7, three runs (run record) | none | N/A | Record of the page's own run. |
| 80 | Try it | In iptables mode a change may wait up to the full minSyncPeriod | 6 | PASS | S6: "each individual change may end up waiting up to the full minSyncPeriod before being processed" |
| 81 | Try it | On cloud providers, LoadBalancer provisions a load balancer asynchronously. Info is published in `.status.loadBalancer` | 1 | PASS | S1: "setting the type field to LoadBalancer provisions a load balancer for your Service. The actual creation of the load balancer happens asynchronously, and information about the provisioned balancer is published in the Service's .status.loadBalancer field." |
| 82 | Try it | kind's guide uses Cloud Provider KIND, a standalone binary on the host that provisions Load Balancer containers | 22 | PASS | S22: "Cloud Provider KIND runs as a standalone binary in your host and connects to your KIND cluster and provisions new Load Balancer containers for your Services." |
| 83 | Try it | The Service got a node port because LoadBalancer starts with NodePort changes | 1 | PASS | S1: "Kubernetes typically starts off by making the changes that are equivalent to you requesting a Service of type: NodePort." |
| 84 | Try it | `kubectl get` with a type and no name shows all resources of that type. The type can be singular, plural, or abbreviated | 23 | PASS | S23: "If the name is omitted, details for all resources are displayed, for example kubectl get pods."; "you can specify the singular, plural, or abbreviated forms." |
| 85 | Try it | The cluster's StorageClass (run record) | none | N/A | Record of the page's own run. |
| 86 | Try it | A claim that names no class gets the default class | 10 | PASS | S10: "a default StorageClass that applies to any PVCs that don't request a specific class" |
| 87 | Try it | `kubectl apply -f` creates the resources of a file | 21 | PASS | S21: "kubectl apply -f ./my-manifest.yaml # create resource(s)" |
| 88 | Try it | WaitForFirstConsumer delays binding and provisioning until a Pod using the PVC is created | 10 | PASS | S10: "delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created." |
| 89 | Try it | Pods access storage by using the claim as a volume | 9 | PASS | S9: "Pods access storage by using the claim as a volume." |
| 90 | Try it | `kubectl wait` can wait for a field with `--for=jsonpath='{.status.phase}'=Running` | 18 | PASS | S18: "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| 91 | Try it | The volume took the reclaim policy `Delete` of its StorageClass | 9 | PASS | S9: "inherit the reclaim policy of their StorageClass, which defaults to Delete." |
| 92 | Try it | `kubectl delete` deletes resources by resources and names | 20 | PASS | S20: "Delete resources by file names, stdin, resources and names, or by resources and label selector." |
| 93 | Try it | `kubectl logs` dumps a Pod's logs | 21 | PASS | S21: "kubectl logs my-pod # dump pod logs (stdout)" |
| 94 | Try it | Persistent volumes exist beyond the lifetime of any individual Pod | 3 | PASS | S3: "persistent volumes exist beyond the lifetime of any individual Pod." |
| 95 | Try it | `kubectl delete namespaces` deletes a namespace and everything under it | 14 | PASS | S14: "kubectl delete namespaces <insert-some-namespace-name>"; "This deletes everything under the namespace!" |
| 96 | Try it | `--timeout` is the wait before giving up on a delete | 20 | PASS | S20: "The length of time to wait before giving up on a delete" |
| 97 | Try it | The reclaim policy tells the cluster what to do with a released volume | 9 | PASS | S9: "tells the cluster what to do with the volume after it has been released of its claim." |
| 98 | How a tester uses it | DNS name is one of the most common ways clients consume a Service | 11 | PASS | S11: "One of the most common ways that clients consume a Service is through a DNS name." |
| 99 | How a tester uses it | Queries without a namespace stay in the Pod's namespace | 2 | PASS | S2: "DNS queries that don't specify a namespace are limited to the Pod's namespace." |
| 100 | How a tester uses it | Debug Services asks: Does the Service exist? Work by DNS name? Have EndpointSlices? Are the Pods working? | 11 | PASS | S11: "Does the Service exist? ... Does the Service work by DNS name? ... Does the Service have any EndpointSlices? Are the Pods working?" |
| 101 | How a tester uses it | You can bypass the Service and go straight to the Pods | 11 | PASS | S11: "you can bypass the Service mechanism and go straight to the Pods" |
| 102 | How a tester uses it | In iptables mode a change may wait up to the full minSyncPeriod. The default is 1s | 6 | PASS | S6: "waiting up to the full minSyncPeriod before being processed"; "The default value of 1s" |
| 103 | How a tester uses it | With a Service name, port-forward selects a matching Pod | 13 | PASS | S13: "using resource name, such as a pod name, to select a matching pod to port forward to." Service name is the page's reading of the docs' `service/mongo` example. |
| 104 | How a tester uses it | A port-forward test reaches that Pod. The docs open a separate terminal because it does not return | 13 | PASS | S13: "does not return. To continue with the exercises, you will need to open another terminal." |
| 105 | How a tester uses it | Data is preserved across container restarts. Persistent volumes outlive any Pod | 3 | PASS | S3: "For any kind of volume in a given Pod, data is preserved across container restarts."; "persistent volumes exist beyond the lifetime of any individual Pod" |
| 106 | How a tester uses it | Deleting a namespace deletes everything under it | 14 | PASS | S14: "This deletes everything under the namespace!" |
| 107 | How a tester uses it | With reclaim policy `Delete`, deletion also removes the external storage asset | 9 | FAIL | S9 limits this: "For volume plugins that support the Delete reclaim policy, deletion removes both the PersistentVolume object ... as well as the associated storage asset". The page drops the plugin limit. Fix: "For volume plugins that support it, `Delete` also removes the associated storage asset in the external infrastructure." |
| 108 | How a tester uses it | With `Retain` the PV still exists after the PVC is deleted | 9 | PASS | S9: "When the PersistentVolumeClaim is deleted, the PersistentVolume still exists" |
| 109 | Common mistakes | If ENDPOINTS is `<none>`, check that the selector selects the Pod labels. A typo is common | 11 | PASS | S11: "If the ENDPOINTS column is <none>, you should check that ... A common mistake is to have a typo" |
| 110 | Common mistakes | Queries without a namespace stay in the Pod's namespace | 2 | PASS | S2: "DNS queries that don't specify a namespace are limited to the Pod's namespace." |
| 111 | Common mistakes | Kubernetes has no load-balancing component. You must provide one or integrate a cloud provider. kind uses Cloud Provider KIND | 1, 22 | PASS | S1: "does not directly offer a load balancing component; you must provide one, or you can integrate your Kubernetes cluster with a cloud provider."; S22: "...get service of type LoadBalancer working in a kind cluster using Cloud Provider KIND." |
| 112 | Common mistakes | With WaitForFirstConsumer binding and provisioning wait for a Pod. Claims stay unbound if no volume matches | 10, 9 | PASS | S10: "delay the binding and provisioning ... until a Pod using the PersistentVolumeClaim is created"; S9: "Claims will remain unbound indefinitely if a matching volume does not exist." The advice "read the Events" is tutorial advice (N/A). |
| 113 | Common mistakes | After a crash kubelet restarts the container with a clean state | 3 | PASS | S3: "After a crash, kubelet restarts the container with a clean state." |
| 114 | Common mistakes | The project recommends Gateway. The Ingress API is frozen | 7 | PASS | S7: "recommends using Gateway instead of"; "The Ingress API has been frozen." |
| 115 | What a tester can check | Callout "Tutorial advice": seven pieces of advice | none | PASS | It is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. |
| 116 | Key words | Service | none | PASS | Technical: "a Service is a method for exposing a network application that is running as one or more Pods"; "usually determined by a selector" |
| 117 | Key words | Cluster IP | none | PASS | Technical: "Kubernetes assigns a Service an IP address, the cluster IP, that is used by the virtual IP address mechanism" |
| 118 | Key words | EndpointSlice | none | PASS | Technical: "EndpointSlices track the IP addresses of backend endpoints ... typically represent Pods" |
| 119 | Key words | Selector | none | PASS | Technical: "usually determined by a selector"; "`--selector` gives a label selector to use for the Service" |
| 120 | Key words | kube-proxy | none | PASS | Technical: "watches the Kubernetes control plane for the addition and removal of Service and EndpointSlice objects ... configure the node to capture traffic ... redirect that traffic to one of the Service's endpoints" |
| 121 | Key words | The four types, ClusterIP the default | none | PASS | Technical: "Four types of Service" table; "this is the default type" |
| 122 | Key words | Service DNS name | none | PASS | Technical: "a name of the form `my-svc.my-namespace.svc.cluster-domain.example`, which resolves to the cluster IP of the Service" |
| 123 | Key words | Port forward | none | PASS | Technical: "`kubectl port-forward` selects a matching Pod to forward to"; the run forwards `18080:80`. |
| 124 | Key words | Ingress | none | PASS | Technical: "Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster ... recommends using Gateway instead of Ingress, and the Ingress API has been frozen" |
| 125 | Key words | Gateway API | none | PASS | Technical: "a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing" |
| 126 | Key words | Volume | none | PASS | Technical: "a volume is a directory, possibly with some data in it, which is accessible to the containers in a Pod" |
| 127 | Key words | emptyDir | none | PASS | Technical: "`emptyDir` is empty scratch space that is initialized when the Pod is assigned to a node, and is deleted when the Pod is removed from that node" |
| 128 | Key words | PV | none | PASS | Technical: "provisioned by an administrator or dynamically provisioned using Storage Classes" |
| 129 | Key words | PVC | none | PASS | Technical: "A request for storage by a user" |
| 130 | Key words | StorageClass | none | PASS | Technical: "A way for administrators to describe the classes of storage they offer"; PV "dynamically provisioned using Storage Classes" |
| 131 | Key words | WaitForFirstConsumer | none | PASS | Technical: "delays the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created" |
| 132 | Key words | Access mode | none | PASS | Technical: the "Access modes" table lists `ReadWriteOnce`, `ReadOnlyMany`, `ReadWriteMany`, `ReadWriteOncePod`. |
| 133 | Key words | Reclaim policy | none | PASS | Technical: "the reclaim policy of a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim"; `Delete` and `Retain` are described. |

Open FAILs after round 8: 1

Changed after this round: Row 107: the sentence about the reclaim policy `Delete` dropped the limit of S9. It now says "For volume plugins that support the `Delete` reclaim policy, deletion also removes the associated storage asset in the external infrastructure", in all three voices.

## Round 9 (2026-11-18)

# Fact check: devops / kubernetes-networking-storage (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Services, DNS names, EndpointSlices, traffic in and out, persistent volumes, checks on a local kind cluster | – | N/A | Describes the page itself. |
| 2 | Lede | Page is about reaching Pods through Services and DNS, and keeping data through volumes, with a run on the Kubernetes Basics cluster | – | N/A | Describes the page itself. The `/devops/kubernetes-basics/` link is not a fact. |
| 3 | What it is | A Deployment can create and destroy Pods dynamically | S1 | PASS | S1: "that Deployment can create and destroy Pods dynamically." |
| 4 | What it is | Each Pod gets its own IP; the set of Pods may differ a moment later | S1 | PASS | S1: "Each Pod gets its own IP address" and "the set of Pods running in one moment in time could be different from the set of Pods running that application a moment later." |
| 5 | What it is | Each pod gets its own unique cluster-wide IP address | S4 | PASS | S4: "Each pod in a cluster gets its own unique cluster-wide IP address." |
| 6 | What it is | All pods can talk to all pods, same or different node, directly, without proxies or NAT | S4 | PASS | S4: "All pods can communicate with all other pods, whether they are on the same node or on different nodes. Pods can communicate with each other directly, without the use of proxies or address translation (NAT)." |
| 7 | What it is | A Service exposes a network application running as one or more Pods | S1 | PASS | S1: "a Service is a method for exposing a network application that is running as one or more Pods in your cluster." |
| 8 | What it is | The Pods of a Service are usually determined by a selector you define | S1 | PASS | S1: "The set of Pods targeted by a Service is usually determined by a selector that you define." |
| 9 | What it is | Kubernetes creates DNS records for Services and Pods | S2 | PASS | S2: "Kubernetes creates DNS records for Services and Pods." |
| 10 | What it is | You can contact Services with consistent DNS names instead of IPs | S2 | PASS | S2: "You can contact Services with consistent DNS names instead of IP addresses." |
| 11 | What it is | Ingress exposes HTTP and HTTPS routes from outside the cluster to services within it | S7 | PASS | S7: "exposes HTTP and HTTPS routes from outside the cluster to services within the cluster." |
| 12 | What it is | Kubernetes project recommends Gateway instead of Ingress; Ingress API frozen | S7 | PASS | S7: "The Kubernetes project recommends using Gateway instead of" and "The Ingress API has been frozen." |
| 13 | What it is | Gateway API is a family of API kinds for dynamic infrastructure provisioning and advanced traffic routing | S8 | PASS | S8: "Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing." |
| 14 | What it is | On-disk files in a container are ephemeral | S3 | PASS | S3: "On-disk files in a container are ephemeral" |
| 15 | What it is | On crash or stop, state is not saved; files created or modified are lost | S3 | PASS | S3: "when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost." |
| 16 | What it is | After a crash, kubelet restarts the container with a clean state | S3 | PASS | S3: "After a crash, kubelet restarts the container with a clean state." |
| 17 | What it is | Another problem: several containers in a Pod need to share files | S3 | PASS | S3: "Another problem occurs when multiple containers are running in a Pod and need to share files." |
| 18 | What it is | The volume abstraction can help solve both problems | S3 | PASS | S3: "The Kubernetes volume abstraction can help you to solve both of these problems." |
| 19 | What it is | A volume is a directory, possibly with data, accessible to the containers in a Pod | S3 | PASS | S3: "a volume is a directory, possibly with some data in it, which is accessible to the containers in a pod." |
| 20 | What it is | Table: ephemeral volume / `emptyDir` lifetime, initialized on node assignment, deleted on removal | S3 | PASS | S3: "Ephemeral volume types have a lifetime linked to a specific Pod" and "emptyDir: empty scratch space that is initialized when the Pod is assigned to a node, and is deleted when the Pod is removed from that node." |
| 21 | What it is | Table: PV is storage provisioned by an administrator or dynamically via Storage Classes | S9 | PASS | S9: "A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes." |
| 22 | What it is | Table: PVC is a request for storage by a user | S9 | PASS | S9: "A PersistentVolumeClaim (PVC) is a request for storage by a user." |
| 23 | What it is | Table: StorageClass is a way for administrators to describe the classes of storage they offer | S10 | PASS | S10: "A StorageClass provides a way for administrators to describe the classes of" |
| 24 | What it is | Kubernetes destroys ephemeral volumes when a Pod ceases to exist, but not persistent volumes | S3 | PASS | S3: "When a Pod ceases to exist, Kubernetes destroys ephemeral volumes; however, Kubernetes does not destroy persistent volumes." |
| 25 | How it works | Kubernetes assigns a Service a cluster IP used by the virtual IP mechanism | S1 | PASS | S1: "Kubernetes assigns this Service an IP address (the cluster IP), that is used by the virtual IP address mechanism." |
| 26 | How it works | The Service controller scans for matching Pods and updates the EndpointSlices | S1 | PASS | S1: "The controller for that Service continuously scans for Pods that match its selector, and then makes any necessary updates to the set of EndpointSlices for the Service." |
| 27 | How it works | EndpointSlices track backend endpoint IPs; normally tied to a Service; endpoints typically Pods | S5 | PASS | S5: "EndpointSlices track the IP addresses of backend endpoints. EndpointSlices are normally associated with a Service and the backend endpoints typically represent Pods." |
| 28 | How it works | A Service can map any incoming port to a `targetPort`; default is the same as `port` | S1 | PASS | S1: "A Service can map any incoming port to a targetPort. By default and for convenience, the targetPort is set to the same value as the port field." |
| 29 | How it works | Each kube-proxy watches the control plane for Service and EndpointSlice additions and removals | S6 | PASS | S6: "Each instance of kube-proxy watches the Kubernetes control plane for the addition and removal of Service and EndpointSlice objects." |
| 30 | How it works | kube-proxy calls APIs by mode to capture traffic to clusterIP and port and redirect to an endpoint | S6 | PASS | S6: "calls appropriate APIs (depending on the kube-proxy mode) to configure the node to capture traffic to the Service's clusterIP and port, and redirect that traffic to one of the Service's endpoints" |
| 31 | How it works | Default mode in 1.37 is iptables; a future version will change it to nftables | S6 | PASS | S6: "If you do not choose a mode explicitly ... In Kubernetes 1.37, this is iptables, but a future version of Kubernetes will change the default to nftables." |
| 32 | How it works | In iptables mode a change may wait up to the full `minSyncPeriod`; rules out of sync; default 1s | S6 | PASS | S6: "each individual change may end up waiting up to the full minSyncPeriod before being processed, meaning that the iptables rules spend more time being out-of-sync with the current API server state." and "The default value of 1s" |
| 33 | How it works | Four Service types (heading) | S1 | PASS | S1 lists ClusterIP, NodePort, LoadBalancer, ExternalName as "The available type values". |
| 34 | How it works | `ClusterIP`: cluster-internal IP, only reachable from inside; default type | S1 | PASS | S1: "Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default" |
| 35 | How it works | `NodePort`: each Node's IP at a static port; control plane allocates from a range, default 30000-32767 | S1 | PASS | S1: "Exposes the Service on each Node's IP at a static port (the NodePort)." and "the Kubernetes control plane allocates a port from a range specified by --service-node-port-range flag (default: 30000-32767)." |
| 36 | How it works | `LoadBalancer`: external load balancer; Kubernetes offers no load balancing component | S1 | PASS | S1: "Exposes the Service externally using an external load balancer. Kubernetes does not directly offer a load balancing component" |
| 37 | How it works | `ExternalName`: maps to `externalName` field, for example a hostname; no proxying | S1 | PASS | S1: "Maps the Service to the contents of the externalName field (for example, to the hostname api.foo.bar.example)... No proxying of any kind is set up." |
| 38 | How it works | LoadBalancer starts like NodePort; cloud-controller-manager configures the load balancer to the node port | S1 | PASS | S1: "Kubernetes typically starts off by making the changes that are equivalent to you requesting a Service of type: NodePort. The cloud-controller-manager component then configures the external load balancer to forward traffic to that assigned node port." |
| 39 | How it works | Normal Service gets A and/or AAAA records `my-svc.my-namespace.svc.cluster-domain.example`, resolving to the cluster IP | S2 | PASS | S2: ""Normal" (not headless) Services are assigned DNS A and/or AAAA records, with a name of the form my-svc.my-namespace.svc.cluster-domain.example. This resolves to the cluster IP" |
| 40 | How it works | Queries without a namespace are limited to the Pod's namespace; other namespaces by specifying it | S2 | PASS | S2: "DNS queries that don't specify a namespace are limited to the Pod's namespace. Access Services in other namespaces by specifying it in the DNS query." |
| 41 | How it works | Queries expanded via `/etc/resolv.conf` set by kubelet; `search` values expand queries | S2 | PASS | S2: "DNS queries may be expanded using the Pod's /etc/resolv.conf. kubelet configures this file for each Pod... The values of the search option are used to expand queries." |
| 42 | How it works | A control loop watches for new PVCs, finds a matching PV, binds them | S9 | PASS | S9: "A control loop in the control plane watches for new PVCs, finds a matching PV (if possible), and binds them together." |
| 43 | How it works | PVC to PV binding is one-to-one | S9 | PASS | S9: "A PVC to PV binding is a one-to-one mapping" |
| 44 | How it works | Claims stay unbound indefinitely if no matching volume exists | S9 | PASS | S9: "Claims will remain unbound indefinitely if a matching volume does not exist." |
| 45 | How it works | Administrator can specify a default StorageClass for PVCs that request no class | S10 | PASS | S10: "you can specify a default StorageClass that applies to any PVCs that don't request a specific class." |
| 46 | How it works | `WaitForFirstConsumer` delays binding and provisioning until a Pod using the PVC is created | S10 | PASS | S10: "WaitForFirstConsumer mode which will delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created." |
| 47 | How it works | Pods use the claim as a volume; claims must be in the Pod's namespace | S9 | PASS | S9: "Pods access storage by using the claim as a volume. Claims must exist in the same namespace as the Pod using the claim." |
| 48 | How it works | Access modes table (`ReadWriteOnce`, `ReadOnlyMany`, `ReadWriteMany`, `ReadWriteOncePod`) | S9 | PASS | S9: "the volume can be mounted as read-write by a single node. ReadWriteOnce access mode still can allow multiple pods to access ... when the pods are running on the same node"; "read-only by many nodes"; "read-write by many nodes"; "read-write by a single Pod". |
| 49 | How it works | User can delete the PVC; the reclaim policy says what to do with the volume once released | S9 | PASS | S9: "they can delete the PVC objects ... The reclaim policy for a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim." |
| 50 | How it works | Dynamically provisioned volumes inherit the StorageClass reclaim policy, default `Delete` | S9 | PASS | S9: "Volumes that were dynamically provisioned inherit the reclaim policy of their StorageClass, which defaults to Delete." |
| 51 | How it works | For plugins that support it, `Delete` removes the PV object and the external storage asset | S9 | PASS | S9: "For volume plugins that support the Delete reclaim policy, deletion removes both the PersistentVolume object from Kubernetes, as well as the associated storage asset in the external infrastructure." |
| 52 | How it works | With `Retain`, the PV still exists after the PVC is deleted and is "released" | S9 | PASS | S9: "When the PersistentVolumeClaim is deleted, the PersistentVolume still exists and the volume is considered "released"." |
| 53 | How it works | Diagram: step 3 kube-proxy configures the node to capture and redirect to an endpoint | S6 | PASS | Same S6 quote as row 30. The addresses are the run's own record (N/A). |
| 54 | Try it | Run date, tool versions, cluster, namespace `net-lab` | – | N/A | Record of the page's own run. |
| 55 | Try it | `kubectl create namespace` creates a namespace | S14 | PASS | S14: "you can create namespace using below command: kubectl create namespace <insert-namespace-name-here>" |
| 56 | Try it | `kubectl create deployment` creates a deployment with the given name; `--replicas` is the number of replicas | S16 | PASS | S16: "Create a deployment with the specified name." and "-r, --replicas int32 ... Number of replicas to create." |
| 57 | Try it | `kubectl rollout status` shows rollout status; `--timeout` is the time to wait before ending the watch | S17 | PASS | S17: "Show the status of the rollout." and "--timeout duration The length of time to wait before ending watch" |
| 58 | Try it | `kubectl expose` exposes a resource as a new Service; no `--selector` infers selector; default type `ClusterIP` | S15 | PASS | S15: "Expose a resource as a new Kubernetes service."; "If empty (the default) infer the selector from the resource being exposed."; "Default is 'ClusterIP'." |
| 59 | Try it | `-o wide`, `--show-labels`, `kubectl describe` (verbose output) | S21 | PASS | S21: "kubectl get pods -o wide # List all pods in the current namespace, with more details"; "# Show labels for all pods ... kubectl get pods --show-labels"; "# Describe commands with verbose output" |
| 60 | Try it | Step 1 `kubectl get` and `kubectl describe` outputs; "the selector was app=web, target port same as the port" | S1 | PASS | S1: "the targetPort is set to the same value as the port field." Output blocks are the run's record (N/A). |
| 61 | Try it | Debug Services lists EndpointSlices with `kubectl get endpointslices -l kubernetes.io/service-name=hostnames` | S11 | PASS | S11: "kubectl get endpointslices -l kubernetes.io/service-name=hostnames" |
| 62 | Try it | Debug Services runs a test Pod with `kubectl run` and `--restart=Never` | S11 | PASS | S11: "kubectl run -it --rm --restart=Never busybox --image=registry.k8s.io/busybox:1.27.2 sh" |
| 63 | Try it | Quick reference runs image `busybox:1.28` | S21 | PASS | S21: "kubectl run -i --tty busybox --image=busybox:1.28 -- sh" |
| 64 | Try it | `kubectl wait` waits for a specific condition on one or many resources | S18 | PASS | S18: "Wait for a specific condition on one or many resources." |
| 65 | Try it | `kubectl exec` runs a command in an existing Pod | S21 | PASS | S21: "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 66 | Try it | DNS debugging page uses `nslookup kubernetes.default` and looks at a Pod's `/etc/resolv.conf` | S12 | PASS | S12: "kubectl exec -i -t dnsutils -- nslookup kubernetes.default" and "kubectl exec -ti dnsutils -- cat /etc/resolv.conf" |
| 67 | Try it | Queries without a namespace are limited to the Pod's namespace | S2 | PASS | S2: "DNS queries that don't specify a namespace are limited to the Pod's namespace." |
| 68 | Try it | `search` values are used to expand queries | S2 | PASS | S2: "The values of the search option are used to expand queries." |
| 69 | Try it | Debug Services: if the short name fails, Pod and Service may be in different namespaces; try a namespace-qualified name | S11 | PASS | S11: "If this fails, perhaps your Pod and Service are in different Namespaces, try a namespace-qualified name" |
| 70 | Try it | `--selector` gives a label selector; `--name` names the new object | S15 | PASS | S15: "A label selector to use for this service." and "The name for the newly created object." |
| 71 | Try it | Debug Services: if ENDPOINTS is `<none>`, check `spec.selector` against `metadata.labels`; a typo is common | S11 | PASS | S11: "If the ENDPOINTS column is <none>, you should check that the spec.selector field of your Service actually selects for metadata.labels values on your Pods. A common mistake is to have a typo or other error" |
| 72 | Try it | `kubectl v1.37.2 printed <unset>` where the page shows `<none>` | – | N/A | Record of the run. |
| 73 | Try it | `kubectl port-forward` can use a resource name to select a matching Pod; docs forward to a Service with `service/mongo 28015:27017` | S13 | PASS | S13: "kubectl port-forward allows using resource name, such as a pod name, to select a matching pod to port forward to." and "kubectl port-forward service/mongo 28015:27017" |
| 74 | Try it | `kubectl port-forward` does not return; docs open another terminal | S13 | PASS | S13: "kubectl port-forward does not return. To continue with the exercises, you will need to open another terminal." |
| 75 | Try it | `kubectl logs` prints logs for a container in a pod or resource, as `POD` or `TYPE/NAME` | S19 | PASS | S19: "Print the logs for a container in a pod or specified resource." and "kubectl logs [-f] [-p] (POD \| TYPE/NAME)" |
| 76 | Try it | Debug Services shows the log line `Using iptables Proxier` | S11 | PASS | S11: "Using iptables Proxier" |
| 77 | Try it | NodePort Service reports its port in `.spec.ports[*].nodePort` | S1 | PASS | S1: "Your Service reports the allocated port in its .spec.ports[*].nodePort field." |
| 78 | Try it | `-o jsonpath` prints fields from a jsonpath expression; the quick reference uses it for node addresses | S21 | PASS | S21: "Print the fields defined in a jsonpath expression" and "kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'" |
| 79 | Try it | In iptables mode a change may wait up to the full `minSyncPeriod` before it is processed | S6 | PASS | S6: "each individual change may end up waiting up to the full minSyncPeriod before being processed" |
| 80 | Try it | `LoadBalancer` on supporting clouds provisions a load balancer; creation is asynchronous; info in `.status.loadBalancer` | S1 | PASS | S1: "On cloud providers which support external load balancers, setting the type field to LoadBalancer provisions a load balancer for your Service. The actual creation of the load balancer happens asynchronously, and information about the provisioned balancer is published in the Service's .status.loadBalancer field." |
| 81 | Try it | kind's guide uses Cloud Provider KIND, a standalone host binary that provisions Load Balancer containers | S22 | PASS | S22: "Cloud Provider KIND runs as a standalone binary in your host and connects to your KIND cluster and provisions new Load Balancer containers for your Services." |
| 82 | Try it | Service got a node port because LoadBalancer starts with NodePort changes | S1 | PASS | S1: "Kubernetes typically starts off by making the changes that are equivalent to you requesting a Service of type: NodePort." |
| 83 | Try it | `kubectl get` with a type and no name displays all resources; type may be singular, plural, abbreviated | S23 | PASS | S23: "If the name is omitted, details for all resources are displayed, for example kubectl get pods." and "you can specify the singular, plural, or abbreviated forms." |
| 84 | Try it | Claim names no class, so the default class applies | S10 | PASS | S10: "As an administrator, you can specify a default StorageClass that applies to any PVCs that don't request a specific class." and "When a PVC does not specify a storageClassName, the default StorageClass is" |
| 85 | Try it | `kubectl apply -f` creates the resources of a file | S21 | PASS | S21: "kubectl apply -f ./my-manifest.yaml # create resource(s)" |
| 86 | Try it | `WaitForFirstConsumer` delays binding and provisioning until a Pod using the PVC is created | S10 | PASS | Same S10 quote as row 46. |
| 87 | Try it | Pods access storage by using the claim as a volume | S9 | PASS | S9: "Pods access storage by using the claim as a volume." |
| 88 | Try it | `kubectl wait` reference waits for a field with `--for=jsonpath='{.status.phase}'=Running` | S18 | PASS | S18: "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| 89 | Try it | The volume took the `Delete` reclaim policy of its StorageClass | S9 | PASS | S9: "Volumes that were dynamically provisioned inherit the reclaim policy of their StorageClass, which defaults to Delete." |
| 90 | Try it | `kubectl delete` deletes resources by resources and names | S20 | PASS | S20: "Delete resources by file names, stdin, resources and names, or by resources and label selector." |
| 91 | Try it | `kubectl logs` dumps the logs of a Pod | S21 | PASS | S21: "kubectl logs my-pod # dump pod logs (stdout)" |
| 92 | Try it | Persistent volumes exist beyond the lifetime of any individual Pod | S3 | PASS | S3: "persistent volumes exist beyond the lifetime of any individual Pod." |
| 93 | Try it | `kubectl delete namespaces` deletes a namespace and everything under it | S14 | PASS | S14: "kubectl delete namespaces <insert-some-namespace-name>" and "This deletes everything under the namespace!" |
| 94 | Try it | `--timeout` is how long to wait before giving up on a delete | S20 | PASS | S20: "--timeout duration The length of time to wait before giving up on a delete" |
| 95 | Try it | The reclaim policy says what to do with a volume after it is released of its claim | S9 | PASS | S9: "tells the cluster what to do with the volume after it has been released of its claim." |
| 96 | Try it | Run records (outputs, exit code 7, three runs, `<pending>`, `No resources found`, YAML files, names) | – | N/A | Record of the page's own run, labelled "In the run" / "In the tutorial's run". |
| 97 | How a tester uses it | One of the most common ways clients consume a Service is a DNS name | S11 | PASS | S11: "One of the most common ways that clients consume a Service is through a DNS name." |
| 98 | How a tester uses it | Use a namespace-qualified name from another namespace; queries without a namespace are limited to the Pod's namespace | S2 | PASS | S2: "DNS queries that don't specify a namespace are limited to the Pod's namespace. Access Services in other namespaces by specifying it in the DNS query." |
| 99 | How a tester uses it | Debug Services asks: Service exist? work by DNS name? any EndpointSlices? Pods working? | S11 | PASS | S11: "Does the Service exist?", "Does the Service work by DNS name?", "Does the Service have any EndpointSlices?", "Are the Pods working?" |
| 100 | How a tester uses it | To check Pods alone, bypass the Service and go to the Pods | S11 | PASS | S11: "you can bypass the Service mechanism and go straight to the Pods" |
| 101 | How a tester uses it | In step 3 the Service existed with a cluster IP and an empty EndpointSlice | – | N/A | Record of the run. |
| 102 | How a tester uses it | iptables mode: a change may wait up to the full `minSyncPeriod`; default 1s | S6 | PASS | Same S6 quotes as row 32. |
| 103 | How a tester uses it | Step 4: first NodePort request failed, second worked after 2 s | – | N/A | Record of the run. |
| 104 | How a tester uses it | With a Service name, `kubectl port-forward` selects a matching Pod | S13 | PASS | S13: "allows using resource name, such as a pod name, to select a matching pod to port forward to" and "kubectl port-forward service/mongo 28015:27017" |
| 105 | How a tester uses it | A test through it reaches that Pod; docs open a separate terminal because it does not return | S13 | PASS | S13: "select a matching pod to port forward to" and "kubectl port-forward does not return. ... open another terminal." |
| 106 | How a tester uses it | Data is preserved across container restarts; persistent volumes outlive any Pod | S3 | PASS | S3: "For any kind of volume in a given Pod, data is preserved across container restarts." and "persistent volumes exist beyond the lifetime of any individual Pod" |
| 107 | How a tester uses it | Step 5 tested this: one Pod wrote, a new Pod read | – | N/A | Record of the run. |
| 108 | How a tester uses it | Deleting a namespace deletes everything under it | S14 | PASS | S14: "This deletes everything under the namespace!" |
| 109 | How a tester uses it | For plugins that support `Delete`, deletion also removes the external storage asset | S9 | PASS | S9: "deletion removes both the PersistentVolume object from Kubernetes, as well as the associated storage asset in the external infrastructure." |
| 110 | How a tester uses it | With `Retain`, the PV still exists when the PVC is deleted | S9 | PASS | S9: "When the PersistentVolumeClaim is deleted, the PersistentVolume still exists" |
| 111 | Common mistakes | If ENDPOINTS is `<none>`, check the selector against labels; a typo is common | S11 | PASS | S11: "If the ENDPOINTS column is <none>, you should check that the spec.selector field of your Service actually selects for metadata.labels values on your Pods. A common mistake is to have a typo" |
| 112 | Common mistakes | Step 3 request was refused | – | N/A | Record of the run. |
| 113 | Common mistakes | Short DNS name across namespaces: limited to the Pod's namespace | S2 | PASS | S2: "DNS queries that don't specify a namespace are limited to the Pod's namespace." |
| 114 | Common mistakes | Kubernetes offers no load balancing component; you provide one or integrate a cloud provider | S1 | PASS | S1: "Kubernetes does not directly offer a load balancing component; you must provide one, or you can integrate your Kubernetes cluster with a cloud provider." |
| 115 | Common mistakes | kind's guide uses Cloud Provider KIND for this | S22 | PASS | S22: "This guide covers how to get service of type LoadBalancer working in a kind cluster using Cloud Provider KIND." |
| 116 | Common mistakes | With `WaitForFirstConsumer`, binding and provisioning wait for a Pod using the claim | S10 | PASS | Same S10 quote as row 46. |
| 117 | Common mistakes | Claims remain unbound indefinitely if no matching volume exists; "so read the Events of the claim" is advice | S9 | PASS | S9: "Claims will remain unbound indefinitely if a matching volume does not exist." The "read the Events" part is the page's advice, not a tool fact. |
| 118 | Common mistakes | After a crash, kubelet restarts the container with a clean state | S3 | PASS | S3: "After a crash, kubelet restarts the container with a clean state." |
| 119 | Common mistakes | Kubernetes recommends Gateway instead of Ingress; Ingress API frozen | S7 | PASS | S7: "The Kubernetes project recommends using Gateway instead of" and "The Ingress API has been frozen." |
| 120 | What a tester can check | Callout "Tutorial advice": seven advice bullets | – | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support: empty EndpointSlices (step 3), polling (step 4), load balancer (step 4), port forward (S13), data test (step 5), reclaim policy (S9). |
| 121 | Key words | Service: exposes an app running as Pods, usually picked by a selector | – | PASS | Page: "a Service is a method for exposing a network application that is running as one or more Pods" and "usually determined by a selector that you define". |
| 122 | Key words | Cluster IP: assigned to a Service, used by the virtual IP mechanism | – | PASS | Page: "Kubernetes assigns a Service an IP address, the cluster IP, that is used by the virtual IP address mechanism." |
| 123 | Key words | EndpointSlice: tracks backend endpoint IPs, typically Pods | – | PASS | Page: "EndpointSlices track the IP addresses of backend endpoints; ... the backend endpoints typically represent Pods". |
| 124 | Key words | Selector: the labels that pick the Pods of a Service | – | PASS | Page: "check that the selector of the Service selects for the labels on your Pods". |
| 125 | Key words | kube-proxy: watches Services and EndpointSlices; configures each node to send traffic to an endpoint | – | PASS | Page: "Each instance of kube-proxy watches ... Service and EndpointSlice objects" and "configure the node to capture traffic ... and redirect that traffic to one of the Service's endpoints". |
| 126 | Key words | The four Service types; `ClusterIP` is the default | – | PASS | Page: "Four types of Service" and "this is the default type". |
| 127 | Key words | Service DNS name form; resolves to the cluster IP | – | PASS | Page: "`my-svc.my-namespace.svc.cluster-domain.example`, which resolves to the cluster IP of the Service". |
| 128 | Key words | Port forward: `kubectl port-forward` forwards a local port to a matching Pod | – | PASS | Page: "`kubectl port-forward` selects a matching Pod to forward to", and the command `kubectl port-forward ... 18080:80`. |
| 129 | Key words | Ingress: HTTP/HTTPS routes from outside to Services; frozen; Gateway recommended | – | PASS | Page: "Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster ... the Ingress API has been frozen". |
| 130 | Key words | Gateway API: family of API kinds for provisioning and routing | – | PASS | Page: "Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing". |
| 131 | Key words | Volume: a directory, possibly with data, usable by a Pod's containers | – | PASS | Page: "a volume is a directory, possibly with some data in it, which is accessible to the containers in a Pod". |
| 132 | Key words | `emptyDir`: empty scratch space that lives as long as the Pod stays on its node | – | PASS | Page: "empty scratch space that is initialized when the Pod is assigned to a node, and is deleted when the Pod is removed from that node". |
| 133 | Key words | PV: storage provisioned by an administrator or dynamically via a StorageClass | – | PASS | Page: PV table row, same wording. |
| 134 | Key words | PVC: a request for storage by a user | – | PASS | Page: "A request for storage by a user". |
| 135 | Key words | StorageClass: describes a class of storage; can make volumes on demand | – | PASS | Page: "describe the classes of storage they offer" and "dynamically provisioned using Storage Classes". |
| 136 | Key words | `WaitForFirstConsumer`: delays binding and provisioning until a Pod using the claim exists | – | PASS | Page: "delays the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created". |
| 137 | Key words | Access mode: the four names | – | PASS | Page: "Access modes" table lists the four. |
| 138 | Key words | Reclaim policy: what the cluster does with a volume after its claim is deleted, such as `Delete` or `Retain` | – | PASS | Page: "the reclaim policy ... tells the cluster what to do with the volume after it has been released of its claim"; the `Delete` and `Retain` sentences follow. |

Open FAILs after round 9: 0

Open FAILs: 0
