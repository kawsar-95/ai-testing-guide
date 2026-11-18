# Fact check: devops / kubernetes-architecture

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://kubernetes.io/docs/concepts/architecture/; S2 https://kubernetes.io/docs/concepts/extend-kubernetes/operator/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / kubernetes-architecture (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The control plane, etcd, the API server, and how the parts fit together. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | etcd is a consistent and highly-available key value store used as Kubernetes' backing store for all cluster data | S1 | PASS | pages/S1.txt: "etcd    Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data." |
| 2 | Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components | S2 | PASS | pages/S2.txt: "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / kubernetes-architecture (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "etcd and Operators. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It is not a fact about a tool, product, command or number. |
| 1 | etcd is a consistent and highly-available key value store used as Kubernetes' backing store for all cluster data | S1 | PASS | S1: "etcd    Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data." |
| 2 | Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components | S2 | PASS | S2: "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components." (The quote is on lines 5-7 of the file, with line breaks inside it.) |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / kubernetes-architecture (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "etcd and Operators. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | etcd is a consistent and highly-available key value store used as Kubernetes' backing store for all cluster data | S1 | PASS | S1 line 25: "etcd    Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data." |
| 2 | Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components | S2 | PASS | S2 lines 5-7: "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / kubernetes-architecture (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "etcd and Operators. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It gives no fact about a tool, product, command, or number. |
| 1 | etcd is a consistent and highly-available key value store used as Kubernetes' backing store for all cluster data | S1 | PASS | "etcd    Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data." |
| 2 | Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components | S2 | PASS | "Operators are software extensions to Kubernetes that make use of\n custom resources \nto manage applications and their components." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 19 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-18)

# Fact check: devops / kubernetes-architecture (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Describes the page's scope | none | N/A | Framing sentence that describes the page itself. |
| 2 | Lede | Describes the page's parts and the practice run | none | N/A | Framing sentence that describes the page itself. |
| 3 | What it is | A cluster is a control plane plus worker machines (nodes) that run containerized applications | S1 | PASS | "A Kubernetes cluster consists of a control plane plus a set of worker machines, called nodes, that run containerized applications." |
| 4 | What it is | Every cluster needs at least one worker node to run Pods | S1 | PASS | "Every cluster needs at least one worker node in order to run Pods." |
| 5 | What it is | The control plane manages the worker nodes and the Pods | S1 | PASS | "The control plane manages the worker nodes and the Pods in the cluster." |
| 6 | What it is | In production, the control plane usually spans several computers and a cluster usually runs several nodes, giving fault-tolerance and high availability | S1 | PASS | "the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, providing fault-tolerance and high availability." |
| 7 | What it is | kube-apiserver exposes the API and is the front end of the control plane | S1 | PASS | "The API server is the front end for the Kubernetes control plane." |
| 8 | What it is | etcd is a consistent, highly-available key value store used as the backing store for all cluster data | S1 | PASS | "Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data." |
| 9 | What it is | kube-scheduler watches for new Pods with no node and selects a node | S1 | PASS | "watches for newly created Pods with no assigned node, and selects a node for them to run on." |
| 10 | What it is | kube-controller-manager runs controller processes | S1 | PASS | "Control plane component that runs controller processes." |
| 11 | What it is | cloud-controller-manager embeds cloud-specific logic and links the cluster to the cloud provider's API | S1 | PASS | "embeds cloud-specific control logic. The cloud controller manager lets you link your cluster into your cloud provider's API" |
| 12 | What it is | The components on a node include the kubelet, a container runtime, and the kube-proxy | S3 | PASS | "The components on a node include the kubelet, a container runtime, and the kube-proxy." |
| 13 | What it is | kubelet is an agent on each node that makes sure containers run in a Pod | S1 | PASS | "An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod." |
| 14 | What it is | kube-proxy (optional) is a network proxy on each node that implements part of the Service concept | S1 | PASS | "kube-proxy (optional)" and "a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept." |
| 15 | What it is | Container runtime manages execution and lifecycle; supports containerd, CRI-O, and any other CRI implementation | S1 | PASS | "responsible for managing the execution and lifecycle of containers... containerd, CRI-O, and any other implementation of the Kubernetes CRI" |
| 16 | What it is | All clusters should have cluster DNS, as many examples rely on it | S1 | PASS | "all Kubernetes clusters should have cluster DNS, as many examples rely on it." |
| 17 | What it is | Namespaced resources for addons belong in `kube-system` | S1 | PASS | "namespaced resources for addons belong within the kube-system namespace." |
| 18 | What it is | A custom resource is an extension of the Kubernetes API not necessarily available in a default installation | S12 | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default" |
| 19 | What it is | Operators are software extensions that use custom resources to manage applications and their components | S2 | PASS | "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components." |
| 20 | What it is | Operators follow Kubernetes principles, notably the control loop | S2 | PASS | "Operators follow Kubernetes principles, notably the control loop." |
| 21 | How it works | kube-apiserver exposes the API and is the control plane front end | S1 | PASS | "exposes the Kubernetes API. The API server is the front end for the Kubernetes control plane." |
| 22 | How it works | kube-apiserver scales horizontally by deploying more instances | S1 | PASS | "designed to scale horizontally—that is, it scales by deploying more instances." |
| 23 | How it works | All Kubernetes objects are stored in etcd | S14 | PASS | "All Kubernetes objects are stored in etcd." |
| 24 | How it works | etcd is a leader-based distributed system | S14 | PASS | "etcd is a leader-based distributed system." |
| 25 | How it works | kube-scheduler is the default scheduler and runs as part of the control plane | S6 | PASS | "is the default scheduler for Kubernetes and runs as part of the control plane." |
| 26 | How it works | It selects an optimal node for newly created or not yet scheduled Pods | S6 | PASS | "selects an optimal node to run newly created or not yet scheduled (unscheduled) pods." |
| 27 | How it works | Two steps: filtering finds feasible Nodes, scoring ranks the rest | S6 | PASS | "selects a node for the pod in a 2-step operation" ... "finds the set of Nodes where it's feasible to schedule the Pod" ... "ranks the remaining nodes to choose the most suitable Pod placement." |
| 28 | How it works | If no node is suitable, the Pod stays unscheduled until the scheduler can place it | S6 | PASS | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| 29 | How it works | `nodeSelector` lists node labels; Kubernetes only schedules the Pod onto nodes with each label | S7 | PASS | "specify the node labels you want the target node to have. Kubernetes only schedules the Pod onto nodes that have each of the labels you specify." |
| 30 | How it works | kube-controller-manager: each controller is logically separate but all are compiled into one binary and run in one process | S1 | PASS | "Logically, each controller is a separate process, but ... they are all compiled into a single binary and run in a single process." |
| 31 | How it works | The Node controller notices and responds when nodes go down | S1 | PASS | "Node controller: Responsible for noticing and responding when nodes go down." |
| 32 | How it works | The kubelet takes PodSpecs and ensures their containers run and are healthy | S1 | PASS | "takes a set of PodSpecs ... ensures that the containers described in those PodSpecs are running and healthy." |
| 33 | How it works | Node heartbeats help the cluster determine node availability | S3 | PASS | "Heartbeats, sent by Kubernetes nodes, help your cluster determine the availability of each node" |
| 34 | How it works | Two forms of heartbeat: `.status` updates and Lease objects in `kube-node-lease` | S3 | PASS | "two forms of heartbeats: Updates to the .status of a Node. Lease objects within the kube-node-lease namespace." |
| 35 | How it works | Each kubelet heartbeat updates `spec.renewTime` of its Lease | S5 | PASS | "every kubelet heartbeat is an update request to this Lease object, updating the spec.renewTime field for the Lease." |
| 36 | How it works | Condition table: Ready, DiskPressure, MemoryPressure, PIDPressure meanings and the 50-second default | S4 | PASS | "True if the node is healthy and ready to accept pods, False if ... Unknown if the node controller has not heard from the node in the last node-monitor-grace-period (default is 50 seconds)"; "True if pressure exists on the disk size—that is, if the disk capacity is low"; "...node memory is low"; "...too many processes on the node" |
| 37 | How it works | Control plane components can be deployed as static Pods managed by the kubelet; kubeadm does this | S1 | PASS | "Control plane components are deployed as static Pods, managed by the kubelet on specific nodes. This is a common approach used by tools like kubeadm." |
| 38 | How it works | Static Pods are managed directly by the kubelet on a specific node, without the API server observing them | S9 | PASS | "managed directly by the kubelet daemon on a specific node, without the API server observing them." |
| 39 | How it works | The kubelet watches each static Pod and restarts it if it fails | S9 | PASS | "the kubelet watches each static Pod and restarts it if it fails." |
| 40 | How it works | `staticPodPath` names a directory the kubelet periodically scans, creating or deleting static Pods as YAML or JSON files come and go | S10 | PASS | "Use the staticPodPath: <the directory> field in the kubelet configuration file, which periodically scans the directory and creates/deletes static Pods as YAML/JSON files appear/disappear there." |
| 41 | How it works | The kubelet automatically tries to create a mirror Pod; visible on the API server, not controllable from there | S9 | PASS | "The kubelet automatically tries to create a mirror Pod ... visible on the API server, but cannot be controlled from there." |
| 42 | How it works | Mirror Pod names are suffixed with the node hostname with a leading hyphen; they have the `kubernetes.io/config.mirror` annotation | S9 | PASS | "suffixed with the node hostname with a leading hyphen." and "recognize their mirror Pods ... by the kubernetes.io/config.mirror annotation." |
| 43 | How it works | Cloud providers often abstract away the control plane | S1 | PASS | "Cloud providers often abstract away the control plane, managing its components as part of their service offering." |
| 44 | How it works | On your own premises or in a learning environment inside your PC, there is no cloud controller manager | S1 | PASS | "If you are running Kubernetes on your own premises, or in a learning environment inside your own PC, the cluster does not have a cloud controller manager." |
| 45 | How it works | Creating a CRD creates a new RESTful API endpoint for its objects | S13 | PASS | "creates a new RESTful resource path for each version you specify"; "It might take a few seconds for the endpoint to be created." |
| 46 | How it works | Custom resources store and retrieve structured data; with a custom controller they give a true declarative API | S12 | PASS | "On their own, custom resources let you store and retrieve structured data." and "provide a true declarative API." |
| 47 | How it works | Tutorial run sentence and its diagram | none | N/A | Record of the page's own run and its own picture. |
| 48 | Try it | Opening run record (date, versions, undone changes) | none | N/A | Record of the page's own run. |
| 49 | Try it | Step 1: namespaced addon resources are in `kube-system` | S1 | PASS | "namespaced resources for addons belong within the kube-system namespace." |
| 50 | Try it | Step 1: `-o wide` lists with more details | S16 | PASS | "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| 51 | Try it | Step 1: no cloud-controller-manager in a learning cluster on your PC | S1 | PASS | "in a learning environment inside your own PC, the cluster does not have a cloud controller manager." |
| 52 | Try it | Step 2: kind runs local clusters using Docker container "nodes" | S18 | PASS | "kind is a tool for running local Kubernetes clusters using Docker container “nodes”." |
| 53 | Try it | Step 2: `docker exec` executes a command in a running container | S19 | PASS | "The docker exec command runs a new command in a running container." |
| 54 | Try it | Step 2: `-o yaml` gets a Pod's YAML | S16 | PASS | "kubectl get pod my-pod -o yaml # Get a pod's YAML" |
| 55 | Try it | Step 2: mirror Pods have the `kubernetes.io/config.mirror` annotation | S9 | PASS | "You can recognize their mirror Pods in the kube-system namespace by the kubernetes.io/config.mirror annotation." |
| 56 | Try it | Step 3: API server gives `livez` and `readyz`; `healthz` is deprecated | S11 | PASS | "provides 3 API endpoints (healthz, livez and readyz) to indicate the current status of the API server. The healthz endpoint is deprecated" |
| 57 | Try it | Step 3: `verbose` prints the checks and their status on all endpoints | S11 | PASS | "For all endpoints, you can use the verbose parameter to print out the checks and their status." |
| 58 | Try it | Step 4: `kubectl describe nodes` describes a node with verbose output | S16 | PASS | "# Describe commands with verbose output / kubectl describe nodes my-node" |
| 59 | Try it | Step 4: a kubelet heartbeat updates its node's Lease in `kube-node-lease` | S5 | PASS | "every kubelet heartbeat is an update request to this Lease object" ... "a Lease object with a matching name in the kube-node-lease namespace." |
| 60 | Try it | Step 4: the Leases page lists Leases with `kubectl -n kube-system get lease` | S5 | FAIL | The source only has `kubectl -n kube-system get lease -l apiserver.kubernetes.io/identity=kube-apiserver` (lists kube-apiserver Leases only) and `... get lease apiserver-07a5... -o yaml`. Fix: say the page shows `kubectl -n kube-system get lease -l apiserver.kubernetes.io/identity=kube-apiserver` to list the kube-apiserver Leases. |
| 61 | Try it | Step 4: Leases ensure only one instance of a component runs at any time; used by kube-controller-manager and kube-scheduler in HA | S5 | PASS | "Kubernetes also uses Leases to ensure only one instance of a component is running at any given time. This is used by control plane components like kube-controller-manager and kube-scheduler in HA configurations" |
| 62 | Try it | Step 4: each kube-apiserver uses the Lease API to publish its identity | S5 | PASS | "each kube-apiserver uses the Lease API to publish its identity to the rest of the system." |
| 63 | Try it | Step 5: `kubectl explain` gets documentation for Pod manifests | S16 | PASS | "kubectl explain pods # get the documentation for pod manifests" |
| 64 | Try it | Step 5: `kubectl apply -f` creates resources from a file | S16 | PASS | "kubectl apply -f ./my-manifest.yaml # create resource(s)" |
| 65 | Try it | Step 5: kubectl form `kubectl [command] [TYPE] [NAME] [flags]`; create/get/describe/delete are operations | S15 | PASS | "kubectl [command] [TYPE] [NAME] [flags]"; the Operations table lists `kubectl create`, `kubectl describe` (S15 operation list). |
| 66 | Try it | Step 5: the label command is the docs' own example | S8 | PASS | "kubectl label nodes <your-node-name> disktype=ssd" |
| 67 | Try it | Step 5: `kubectl wait` waits for a condition on resources; `--timeout` is the time before giving up | S17 | PASS | "Wait for a specific condition on one or many resources" and "The length of time to wait before giving up." |
| 68 | Try it | Step 5: a `-` after the label name removes the label | S16 | PASS | "kubectl label pods my-pod new-label- # Remove a label" |
| 69 | Try it | Step 6: CronTab example, CRD in `resourcedefinition.yaml`, object in `my-crontab.yaml` | S13 | PASS | "save the following CustomResourceDefinition to resourcedefinition.yaml" and "save the following YAML to my-crontab.yaml" |
| 70 | Try it | Step 6: once `Established` is true, endpoint serving starts | S13 | PASS | "Once the Established condition of your CustomResourceDefinition becomes true and this is observed by the handling code, the endpoint serving starts." |
| 71 | Try it | Step 6: `kubectl api-resources --api-group` lists all resources in an API group | S16 | PASS | "kubectl api-resources --api-group=extensions # All resources in the "extensions" API group" |
| 72 | Try it | Step 6: `shortNames` allow a shorter string to match the resource on the CLI | S13 | PASS | "# shortNames allow shorter string to match your resource on the CLI" |
| 73 | Try it | Step 6: `-o jsonpath` prints fields of a JSONPath expression | S16 | PASS | "-o=jsonpath=<template> Print the fields defined in a jsonpath expression" |
| 74 | Try it | Step 6: custom resources store and retrieve structured data | S12 | PASS | "On their own, custom resources let you store and retrieve structured data." |
| 75 | Try it | Step 6: deleting a CRD uninstalls the endpoint and deletes all its custom objects | S13 | PASS | "the server will uninstall the RESTful API endpoint and delete all custom objects stored in it." |
| 76 | Try it | Step 7: for `etcdctl`, the CA, cert, and key files come from the etcd Pod description | S14 | PASS | "where trusted-ca-file, cert-file and key-file can be obtained from the description of the etcd Pod." |
| 77 | Try it | Step 7: the docs show `etcdctl` with `member list` and `snapshot save` | S14 | PASS | "etcdctl --endpoints=http://10.0.0.2,http://10.0.0.3 member list"; "snapshot save <backup-file-location>" |
| 78 | Try it | Step 7: `kubectl exec` runs a command in an existing Pod | S16 | PASS | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 79 | Try it | Step 7: the docs' examples use `ETCDCTL_API=3` | S14 | PASS | "ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \" |
| 80 | Try it | All run outputs, sizes, and clean-up statements | none | N/A | Record of the page's own run. |
| 81 | How a tester uses it | Machines should rely on the HTTP status code; 200 means healthy, live, or ready | S11 | PASS | "Machines that check the healthz/livez/readyz of the API server should rely on the HTTP status code. A status code 200 indicates the API server is healthy/live/ready" |
| 82 | How a tester uses it | A `/readyz` failure means the server is initializing or cannot serve; route traffic away | S11 | PASS | "it indicates the server is still initializing or temporarily unable to serve requests ... and traffic should be routed away from it." |
| 83 | How a tester uses it | `verbose` output is for a human operator, not a machine | S11 | PASS | "it is not intended to be consumed by a machine" |
| 84 | How a tester uses it | If no node is suitable, the Pod stays unscheduled | S6 | PASS | "remains unscheduled until the scheduler is able to place it." |
| 85 | How a tester uses it | In step 5 the `FailedScheduling` Event named the rule | none | N/A | Record of the page's own run. |
| 86 | How a tester uses it | A node is `Unknown` after the grace period; a pressure condition is `True` when the node is short of disk, memory, or processes | S4 | FAIL | `Unknown` part passes. For PID: S4 says "True if pressure exists on the processes—that is, if there are too many processes on the node." "Short of processes" reverses the meaning. Fix: "...or has too many processes." |
| 87 | How a tester uses it | Cloud providers often abstract away the control plane | S1 | PASS | "Cloud providers often abstract away the control plane, managing its components as part of their service offering." |
| 88 | How a tester uses it | "On such a cluster, ask what the provider shows of it." | none | N/A | Reader's own step. |
| 89 | How a tester uses it | If the cluster uses etcd as its backing store, have a back up plan | S1 | PASS | "If your Kubernetes cluster uses etcd as its backing store, make sure you have a back up plan for the data." |
| 90 | How a tester uses it | Periodic etcd backups matter for disaster recovery | S14 | PASS | "Periodically backing up the etcd cluster data is important to recover Kubernetes clusters under disaster scenarios" |
| 91 | How a tester uses it | `etcdctl snapshot save` creates a snapshot | S14 | PASS | "A snapshot may either be created from a live member with the etcdctl snapshot save command" |
| 92 | How a tester uses it | Custom resource plus custom controller gives a true declarative API | S12 | PASS | "provide a true declarative API." |
| 93 | How a tester uses it | In step 6 the API accepted the CronTab and no Pod ran | none | N/A | Record of the page's own run. |
| 94 | How a tester uses it | Operators can automate on-demand deploys, backups and restores, failure simulation | S2 | PASS | "deploying an application on demand / taking and restoring backups of that application's state / simulating failure in all or part of your cluster to test its resilience" |
| 95 | Common mistakes | The kubelet processes all non-dot files in the static Pod directory; no filtering by extension | S10 | PASS | "The kubelet processes all files not starting with a dot in the static Pod directory — there is no filtering by file extension." |
| 96 | Common mistakes | Copying to `kube-apiserver.yaml.backup` makes the kubelet read both and try a static Pod from each | S10 | PASS | "cp kube-apiserver.yaml kube-apiserver.yaml.backup, the kubelet will read both files and attempt to create a static Pod from each." |
| 97 | Common mistakes | Deleting the mirror Pod with kubectl does not remove the static Pod | S10 | PASS | "If you try to use kubectl to delete the mirror Pod from the API server, the kubelet doesn't remove the static Pod" |
| 98 | Common mistakes | `verbose` output is not for machines; use the HTTP status code | S11 | PASS | "it is not intended to be consumed by a machine"; "should rely on the HTTP status code." |
| 99 | Common mistakes | `healthz` is deprecated since v1.16; use `livez` and `readyz` | S11 | PASS | "The healthz endpoint is deprecated (since Kubernetes v1.16), and you should use the more specific livez and readyz endpoints instead." |
| 100 | Common mistakes | Deleting a CRD uninstalls the endpoint and deletes all custom objects | S13 | PASS | "the server will uninstall the RESTful API endpoint and delete all custom objects stored in it." |
| 101 | Common mistakes | Kubernetes only schedules onto nodes with each `nodeSelector` label | S7 | PASS | "Kubernetes only schedules the Pod onto nodes that have each of the labels you specify." |
| 102 | Common mistakes | A `-` after a label name removes it | S16 | PASS | "kubectl label pods my-pod new-label- # Remove a label" |
| 103 | What a tester can check | Callout "Tutorial advice": seven pieces of advice | none | PASS | The callout says "This list is the tutorial's own advice for a tester whose app runs on Kubernetes." It gives no tool fact that the rest of the page does not support (`/readyz` status code, `?verbose`, `FailedScheduling`, `kube-node-lease` Leases, etcd backup, Operators, CRD deletion are all supported above). |
| 104 | Key words | Control plane | none | PASS | "The control plane manages the worker nodes and the Pods in the cluster." |
| 105 | Key words | Node | none | PASS | "a set of worker machines, called nodes, that run containerized applications" |
| 106 | Key words | kube-apiserver | none | PASS | "kube-apiserver exposes the Kubernetes API, and the API server is the front end for the control plane" |
| 107 | Key words | etcd | none | PASS | "A consistent and highly-available key value store used as Kubernetes' backing store for all cluster data" |
| 108 | Key words | kube-scheduler | none | PASS | "Watches for newly created Pods with no assigned node, and selects a node for them to run on" |
| 109 | Key words | kube-controller-manager | none | PASS | "they are all compiled into a single binary and run in a single process" |
| 110 | Key words | kubelet | none | PASS | "An agent that runs on each node in the cluster; it makes sure that containers are running in a Pod" |
| 111 | Key words | kube-proxy | none | PASS | "kube-proxy (optional) \| A network proxy that runs on each node, implementing part of the Kubernetes Service concept" |
| 112 | Key words | Static Pod | none | PASS | "managed directly by the kubelet daemon on a specific node, without the API server observing them" |
| 113 | Key words | Mirror Pod | none | PASS | "create a mirror Pod on the API server for each static Pod: the Pods are visible on the API server, but cannot be controlled from there" |
| 114 | Key words | Lease | none | PASS | "Lease objects within the kube-node-lease namespace"; "Kubernetes uses Leases to ensure only one instance of a component is running at any given time" |
| 115 | Key words | Node condition | none | PASS | "Four of the conditions of a node" with the table of `Ready`, `DiskPressure`, `MemoryPressure`, `PIDPressure`. |
| 116 | Key words | `livez`, `readyz` | none | PASS | "provides the endpoints `livez` and `readyz` to indicate its current status; the `healthz` endpoint is deprecated" |
| 117 | Key words | Custom resource | none | PASS | "not necessarily available in a default Kubernetes installation" |
| 118 | Key words | CustomResourceDefinition | none | PASS | "a new RESTful API endpoint is created for its objects"; "the server will uninstall the RESTful API endpoint and delete all custom objects stored in it" |
| 119 | Key words | Operator | none | PASS | "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components" |

Open FAILs after round 6: 2

Changed after this round: Row 60: the Leases page has no `kubectl -n kube-system get lease` without a label selector. Step 4 now cites S15 for `kubectl get` without a name (all resources of the type), and gives the command of the Leases page, `kubectl -n kube-system get lease -l apiserver.kubernetes.io/identity=kube-apiserver`, for the Leases of the API servers. Row 86: "short of disk, memory, or processes" said the opposite of S4 for PIDPressure; the sentence now says "when the disk capacity is low, the node memory is low, or there are too many processes on the node".

## Round 7 (2026-11-18)

# Fact check: devops / kubernetes-architecture (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Control plane, nodes, etcd; scheduler and kubelet place and run Pods; custom resources and Operators extend the API; a tester checks on a local kind cluster | none | N/A | Sentence that describes the page itself. |
| 2 | Lede | Parts of a cluster; practice run on the local cluster of Kubernetes Basics | none | N/A | Sentence that describes the page itself. |
| 3 | What it is | A cluster is a control plane plus worker machines (nodes) that run containerized applications | S1 | PASS | "A Kubernetes cluster consists of a control plane plus a set of worker machines, called nodes, that run containerized applications." |
| 4 | What it is | Every cluster needs at least one worker node to run Pods | S1 | PASS | "Every cluster needs at least one worker node in order to run Pods." |
| 5 | What it is | The control plane manages the worker nodes and the Pods | S1 | PASS | "The control plane manages the worker nodes and the Pods in the cluster." |
| 6 | What it is | In production the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, for fault-tolerance and high availability | S1 | PASS | "the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, providing fault-tolerance and high availability." |
| 7 | What it is | kube-apiserver exposes the Kubernetes API; the API server is the front end | S1 | PASS | "exposes the Kubernetes API. The API server is the front end for the Kubernetes control plane." |
| 8 | What it is | etcd: consistent, highly-available key value store, the backing store for all cluster data | S1 | PASS | "Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data." |
| 9 | What it is | kube-scheduler watches for new Pods with no assigned node and selects a node | S1 | PASS | "watches for newly created Pods with no assigned node, and selects a node for them to run on." |
| 10 | What it is | kube-controller-manager runs controller processes | S1 | PASS | "Control plane component that runs controller processes." |
| 11 | What it is | cloud-controller-manager embeds cloud-specific logic and links the cluster to the cloud provider's API | S1 | PASS | "embeds cloud-specific control logic. The cloud controller manager lets you link your cluster into your cloud provider's API" |
| 12 | What it is | Node components include the kubelet, a container runtime, and the kube-proxy | S3 | PASS | "The components on a node include the kubelet, a container runtime, and the kube-proxy." |
| 13 | What it is | kubelet: agent on each node, makes sure containers run in a Pod | S1 | PASS | "An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod." |
| 14 | What it is | kube-proxy (optional): network proxy on each node, implements part of the Service concept | S1 | PASS | "kube-proxy (optional)" ... "a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept." |
| 15 | What it is | Container runtime manages execution and lifecycle; supports containerd, CRI-O, any other CRI implementation | S1 | PASS | "responsible for managing the execution and lifecycle of containers" ... "supports container runtimes such as containerd, CRI-O, and any other implementation of the Kubernetes CRI" |
| 16 | What it is | All clusters should have cluster DNS, as many examples rely on it | S1 | PASS | "all Kubernetes clusters should have cluster DNS, as many examples rely on it." |
| 17 | What it is | Namespaced resources for addons belong within `kube-system` | S1 | PASS | "namespaced resources for addons belong within the kube-system namespace." |
| 18 | What it is | A custom resource is an API extension not necessarily in a default installation | S12 | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default" |
| 19 | What it is | Operators are software extensions that use custom resources to manage applications and their components | S2 | PASS | "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components." |
| 20 | What it is | Operators follow Kubernetes principles, notably the control loop | S2 | PASS | "Operators follow Kubernetes principles, notably the control loop." |
| 21 | How it works | kube-apiserver exposes the API; API server is the front end for the control plane | S1 | PASS | "The API server is the front end for the Kubernetes control plane." |
| 22 | How it works | kube-apiserver scales horizontally, by deploying more instances | S1 | PASS | "kube-apiserver is designed to scale horizontally—that is, it scales by deploying more instances." |
| 23 | How it works | All Kubernetes objects are stored in etcd | S14 | PASS | "All Kubernetes objects are stored in etcd." |
| 24 | How it works | etcd is a leader-based distributed system | S14 | PASS | "etcd is a leader-based distributed system." |
| 25 | How it works | kube-scheduler is the default scheduler and runs as part of the control plane | S6 | PASS | "is the default scheduler for Kubernetes and runs as part of the control plane." |
| 26 | How it works | It selects an optimal node for new or unscheduled Pods | S6 | PASS | "Kube-scheduler selects an optimal node to run newly created or not yet scheduled (unscheduled) pods." |
| 27 | How it works | 2-step operation: filtering finds feasible Nodes, scoring ranks the rest | S6 | PASS | "selects a node for the pod in a 2-step operation" ... "The filtering step finds the set of Nodes where it's feasible to schedule the Pod" ... "the scheduler ranks the remaining nodes to choose the most suitable Pod placement." |
| 28 | How it works | If no node is suitable, the Pod stays unscheduled until the scheduler can place it | S6 | PASS | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| 29 | How it works | `nodeSelector` lists node labels; Kubernetes only schedules onto nodes with each label | S7 | PASS | "specify the node labels you want the target node to have. Kubernetes only schedules the Pod onto nodes that have each of the labels you specify." |
| 30 | How it works | kube-controller-manager: each controller is logically a separate process, but all compiled into a single binary and run in a single process | S1 | PASS | "Logically, each controller is a separate process, but to reduce complexity, they are all compiled into a single binary and run in a single process." |
| 31 | How it works | The Node controller notices and responds when nodes go down | S1 | PASS | "Node controller: Responsible for noticing and responding when nodes go down." |
| 32 | How it works | The kubelet takes PodSpecs and ensures their containers run and are healthy | S1 | PASS | "The kubelet takes a set of PodSpecs ... and ensures that the containers described in those PodSpecs are running and healthy." |
| 33 | How it works | Node heartbeats help the cluster determine availability of each node | S3 | PASS | "Heartbeats, sent by Kubernetes nodes, help your cluster determine the availability of each node" |
| 34 | How it works | Two heartbeat forms: `.status` updates and Lease objects in `kube-node-lease` | S3 | PASS | "two forms of heartbeats: Updates to the .status of a Node. Lease objects within the kube-node-lease namespace." |
| 35 | How it works | Every kubelet heartbeat updates `spec.renewTime` of its Lease | S5 | PASS | "every kubelet heartbeat is an update request to this Lease object, updating the spec.renewTime field for the Lease." |
| 36 | How it works | Condition table: Ready (True/False/Unknown, `node-monitor-grace-period`, default 50 s), DiskPressure, MemoryPressure, PIDPressure | S4 | PASS | "True if the node is healthy and ready to accept pods, False if the node is not healthy and is not accepting pods, and Unknown if the node controller has not heard from the node in the last node-monitor-grace-period (default is 50 seconds)"; Disk, Memory, PID rows match. |
| 37 | How it works | Control plane components can be deployed as static Pods managed by the kubelet; common with kubeadm | S1 | PASS | "Control plane components are deployed as static Pods, managed by the kubelet on specific nodes. This is a common approach used by tools like kubeadm." |
| 38 | How it works | Static Pods are managed directly by the kubelet on a specific node, without the API server observing them | S9 | PASS | "Static Pods are managed directly by the kubelet daemon on a specific node, without the API server observing them." |
| 39 | How it works | The kubelet watches each static Pod and restarts it if it fails | S9 | PASS | "the kubelet watches each static Pod and restarts it if it fails." |
| 40 | How it works | `staticPodPath` names a directory; kubelet scans it periodically, creates/deletes static Pods as YAML/JSON files appear/disappear | S10 | PASS | "Use the staticPodPath: <the directory> field in the kubelet configuration file, which periodically scans the directory and creates/deletes static Pods as YAML/JSON files appear/disappear there." |
| 41 | How it works | The kubelet automatically tries to create a mirror Pod; visible on the API server, not controllable | S9 | PASS | "The kubelet automatically tries to create a mirror Pod on the Kubernetes API server for each static Pod. ... visible on the API server, but cannot be controlled from there." |
| 42 | How it works | Mirror Pod names are suffixed with the node hostname with a leading hyphen; `kubernetes.io/config.mirror` annotation | S9 | PASS | "The Pod names will be suffixed with the node hostname with a leading hyphen." ... "by the kubernetes.io/config.mirror annotation." |
| 43 | How it works | Cloud providers often abstract away the control plane | S1 | PASS | "Cloud providers often abstract away the control plane, managing its components as part of their service offering." |
| 44 | How it works | On own premises or a learning environment in your own PC, no cloud controller manager | S1 | PASS | "If you are running Kubernetes on your own premises, or in a learning environment inside your own PC, the cluster does not have a cloud controller manager." |
| 45 | How it works | Creating a CustomResourceDefinition creates a new RESTful API endpoint for its objects | S13 | PASS | "Then a new namespaced RESTful API endpoint is created at: ..." "This endpoint URL can then be used to create and manage custom objects." |
| 46 | How it works | Custom resources store and retrieve structured data; with a custom controller they give a true declarative API | S12 | PASS | "On their own, custom resources let you store and retrieve structured data." ... "provide a true declarative API." |
| 47 | How it works | Run record: one node `qa-lab-control-plane` ran all parts; diagram | none | N/A | The page labels it "In the tutorial's run" and "the tutorial's own picture". |
| 48 | Try it | Run intro: date, Linux, `qa-lab`, Docker 29.10.0, kind v0.33.0, kubectl v1.37.2, Kubernetes v1.37.0, etcd 3.7.0; undid its changes | none | N/A | Record of the page's own run. |
| 49 | Try it | Step 1: namespaced resources for addons belong in `kube-system` | S1 | PASS | "namespaced resources for addons belong within the kube-system namespace." |
| 50 | Try it | Step 1: `-o wide` lists with more details (`kubectl get pods -n kube-system -o wide`) | S16 | PASS | "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| 51 | Try it | Step 1: run output (eight Pods, five columns) | none | N/A | Labelled "In the tutorial's run". |
| 52 | Try it | Step 1: no cloud-controller-manager in a learning environment in your PC | S1 | PASS | "in a learning environment inside your own PC, the cluster does not have a cloud controller manager." |
| 53 | Try it | Step 2: kind runs local clusters using Docker container "nodes" | S18 | PASS | "kind is a tool for running local Kubernetes clusters using Docker container “nodes”." |
| 54 | Try it | Step 2: `docker exec` executes a command in a running container | S19 | PASS | "Execute a command in a running container" |
| 55 | Try it | Step 2: `-o yaml` gets a Pod's YAML | S16 | PASS | "kubectl get pod my-pod -o yaml # Get a pod's YAML" |
| 56 | Try it | Step 2: manifests folder listing | none | N/A | Labelled "In the tutorial's run". |
| 57 | Try it | Step 2: mirror Pods of static Pods have the `kubernetes.io/config.mirror` annotation | S9 | PASS | "You can recognize their mirror Pods in the kube-system namespace by the kubernetes.io/config.mirror annotation." |
| 58 | Try it | Step 2: annotations output | none | N/A | Labelled "In the tutorial's run". |
| 59 | Try it | Step 3: API server provides `livez` and `readyz` to indicate status; `healthz` deprecated | S11 | PASS | "provides 3 API endpoints (healthz, livez and readyz) to indicate the current status of the API server. The healthz endpoint is deprecated" |
| 60 | Try it | Step 3: `verbose` parameter prints the checks and their status | S11 | PASS | "For all endpoints, you can use the verbose parameter to print out the checks and their status." |
| 61 | Try it | Step 3: readyz output, 37 checks, `livez` printed `ok` | none | N/A | Labelled "In the tutorial's run". |
| 62 | Try it | Step 4: `kubectl describe nodes` describes a node with verbose output | S16 | PASS | "# Describe commands with verbose output / kubectl describe nodes my-node" |
| 63 | Try it | Step 4: kubelet heartbeat updates the node's Lease in `kube-node-lease` | S5 | PASS | "there is a Lease object with a matching name in the kube-node-lease namespace. ... every kubelet heartbeat is an update request to this Lease object" |
| 64 | Try it | Step 4: if the name is omitted, `kubectl get` displays details for all resources | S15 | PASS | "If the name is omitted, details for all resources are displayed, for example kubectl get pods." |
| 65 | Try it | Step 4: Leases page lists API server Leases with `kubectl -n kube-system get lease -l apiserver.kubernetes.io/identity=kube-apiserver` | S5 | PASS | "kubectl -n kube-system get lease -l apiserver.kubernetes.io/identity=kube-apiserver" |
| 66 | Try it | Step 4: node Conditions and Lease output | none | N/A | Labelled "In the tutorial's run". |
| 67 | Try it | Step 4: Leases ensure only one instance of a component runs at any given time; used by kube-controller-manager and kube-scheduler in HA | S5 | PASS | "Kubernetes also uses Leases to ensure only one instance of a component is running at any given time. This is used by control plane components like kube-controller-manager and kube-scheduler in HA configurations" |
| 68 | Try it | Step 4: each kube-apiserver uses the Lease API to publish its identity | S5 | PASS | "each kube-apiserver uses the Lease API to publish its identity to the rest of the system." |
| 69 | Try it | Step 5: `kubectl explain` gets documentation for Pod manifests | S16 | PASS | "kubectl explain pods # get the documentation for pod manifests" |
| 70 | Try it | Step 5: `picky` Pod needs `disktype=ssd`; node had no such label | none | N/A | The tutorial's own Pod and run. |
| 71 | Try it | Step 5: `kubectl apply -f` creates resources from a file | S16 | PASS | "kubectl apply -f ./my-manifest.yaml # create resource(s)" |
| 72 | Try it | Step 5: form `kubectl [command] [TYPE] [NAME] [flags]`; create, get, describe, delete are operations | S15 | PASS | "kubectl [command] [TYPE] [NAME] [flags]" ... "for example create, get, describe, delete." |
| 73 | Try it | Step 5: Pending state and FailedScheduling event output | none | N/A | Labelled "In the tutorial's run". |
| 74 | Try it | Step 5: `kubectl label nodes <node> disktype=ssd` is the docs' own example | S8 | PASS | "kubectl label nodes <your-node-name> disktype=ssd" |
| 75 | Try it | Step 5: `kubectl wait` waits for a condition on one or many resources; `--timeout` is the time to wait before giving up | S17 | PASS | "Wait for a specific condition on one or many resources." ... "--timeout duration Default: 30s The length of time to wait before giving up." |
| 76 | Try it | Step 5: wait output, Pod Running | none | N/A | Labelled "In the tutorial's run". |
| 77 | Try it | Step 5: a `-` after the label name removes the label | S16 | PASS | "kubectl label pods my-pod new-label- # Remove a label" |
| 78 | Try it | Step 6: CronTab example, CRD in `resourcedefinition.yaml`, object in `my-crontab.yaml`; YAML contents | S13 | PASS | "if you save the following CustomResourceDefinition to resourcedefinition.yaml" ... "If you save the following YAML to my-crontab.yaml". Fields (group, versions, schema, `replicas: integer`, scope, names, `shortNames: ct`) and the object match. |
| 79 | Try it | Step 6: once the `Established` condition is true, endpoint serving starts | S13 | PASS | "Once the Established condition of your CustomResourceDefinition becomes true ... the endpoint serving starts." |
| 80 | Try it | Step 6: `kubectl api-resources --api-group` lists all resources in an API group | S16 | PASS | "kubectl api-resources --api-group=extensions # All resources in the "extensions" API group" |
| 81 | Try it | Step 6: `shortNames` allow a shorter string to match the resource on the CLI | S13 | PASS | "# shortNames allow shorter string to match your resource on the CLI" |
| 82 | Try it | Step 6: `-o jsonpath` prints fields of a JSONPath expression | S16 | PASS | "-o=jsonpath=<template> Print the fields defined in a jsonpath expression" |
| 83 | Try it | Step 6: api-resources, crontab, spec, `kubectl get pods` output | none | N/A | Labelled "In the tutorial's run". |
| 84 | Try it | Step 6: custom resources store and retrieve structured data | S12 | PASS | "On their own, custom resources let you store and retrieve structured data." |
| 85 | Try it | Step 6: deleting a CRD uninstalls the endpoint and deletes all custom objects | S13 | PASS | "the server will uninstall the RESTful API endpoint and delete all custom objects stored in it." |
| 86 | Try it | Step 6: `kubectl get crontabs` error, exit code 1 | none | N/A | Labelled "In the tutorial's run". |
| 87 | Try it | Step 7: for `etcdctl`, the CA file, cert file and key file come from the description of the etcd Pod | S14 | PASS | "where trusted-ca-file, cert-file and key-file can be obtained from the description of the etcd Pod." |
| 88 | Try it | Step 7: flags output | none | N/A | Labelled "In the tutorial's run". |
| 89 | Try it | Step 7: docs show `etcdctl` with these files: `member list`, and `snapshot save` to create a snapshot; docs examples use `ETCDCTL_API=3` | S14 | PASS | "ETCDCTL_API=3 etcdctl --endpoints 10.2.0.9:2379 --cert=... --key=... --cacert=... member list" and "--cacert=<trusted-ca-file> --cert=<cert-file> --key=<key-file> snapshot save <backup-file-location>" |
| 90 | Try it | Step 7: `kubectl exec` runs a command in an existing Pod | S16 | PASS | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 91 | Try it | Step 7: member list, snapshot output, file size, clean-up | none | N/A | Labelled "In the tutorial's run". |
| 92 | How a tester uses it | Machines should rely on the HTTP status code; 200 means healthy, live or ready | S11 | PASS | "Machines that check the healthz/livez/readyz of the API server should rely on the HTTP status code. A status code 200 indicates the API server is healthy/live/ready, depending on the called endpoint." |
| 93 | How a tester uses it | If `/readyz` fails, the server is initializing or temporarily unable to serve; route traffic away | S11 | PASS | "it indicates the server is still initializing or temporarily unable to serve requests ... and traffic should be routed away from it." |
| 94 | How a tester uses it | `verbose` output is for a human operator, not a machine | S11 | PASS | "it is not intended to be consumed by a machine" |
| 95 | How a tester uses it | If no node is suitable, the Pod stays unscheduled until the scheduler can place it | S6 | PASS | "the pod remains unscheduled until the scheduler is able to place it." |
| 96 | How a tester uses it | In step 5 the FailedScheduling Event named the rule the node did not meet | none | N/A | Record of the page's own run. |
| 97 | How a tester uses it | Node `Unknown` after `node-monitor-grace-period`; Disk/Memory/PID pressure `True` when capacity is low, memory is low, or there are too many processes | S4 | PASS | "Unknown if the node controller has not heard from the node in the last node-monitor-grace-period"; "if the disk capacity is low"; "if the node memory is low"; "if there are too many processes on the node" |
| 98 | How a tester uses it | Cloud providers often abstract away the control plane | S1 | PASS | "Cloud providers often abstract away the control plane, managing its components as part of their service offering." |
| 99 | How a tester uses it | "On such a cluster, ask what the provider shows of it." | none | N/A | The tutorial's own advice to the reader. |
| 100 | How a tester uses it | If etcd is the backing store, have a back up plan | S1 | PASS | "If your Kubernetes cluster uses etcd as its backing store, make sure you have a back up plan for the data." |
| 101 | How a tester uses it | Periodic etcd backup is important to recover clusters in disaster scenarios | S14 | PASS | "Periodically backing up the etcd cluster data is important to recover Kubernetes clusters under disaster" |
| 102 | How a tester uses it | `etcdctl snapshot save` creates a snapshot | S14 | PASS | "you can create a snapshot by specifying the endpoint, certificates and key as shown below: ... snapshot save <backup-file-location>" |
| 103 | How a tester uses it | Custom resource plus custom controller gives a true declarative API | S12 | PASS | "provide a true declarative API." |
| 104 | How a tester uses it | Step 6: API accepted CronTab, no Pod ran | none | N/A | Record of the page's own run. |
| 105 | How a tester uses it | An Operator can automate deploying on demand, taking and restoring backups, simulating failure to test resilience | S2 | PASS | "deploying an application on demand / taking and restoring backups of that application's state / simulating failure in all or part of your cluster to test its resilience" |
| 106 | Common mistakes | Kubelet processes all files not starting with a dot in the static Pod directory; no filtering by extension | S10 | PASS | "The kubelet processes all files not starting with a dot in the static Pod directory — there is no filtering by file extension." |
| 107 | Common mistakes | Copying `kube-apiserver.yaml` to `kube-apiserver.yaml.backup` makes the kubelet read both and try to create a static Pod from each | S10 | PASS | "the kubelet will read both files and attempt to create a static Pod from each." |
| 108 | Common mistakes | Deleting the mirror Pod with kubectl does not remove the static Pod | S10 | PASS | "If you try to use kubectl to delete the mirror Pod from the API server, the kubelet doesn't remove the static Pod" |
| 109 | Common mistakes | `verbose` output is not for machines; machines use the HTTP status code | S11 | PASS | "it is not intended to be consumed by a machine"; "should rely on the HTTP status code." |
| 110 | Common mistakes | `healthz` deprecated since v1.16; use `livez` and `readyz` | S11 | PASS | "The healthz endpoint is deprecated (since Kubernetes v1.16), and you should use the more specific livez and readyz endpoints instead." |
| 111 | Common mistakes | Deleting a CRD uninstalls the endpoint and deletes all custom objects | S13 | PASS | "the server will uninstall the RESTful API endpoint and delete all custom objects stored in it." |
| 112 | Common mistakes | Kubernetes only schedules onto nodes with each `nodeSelector` label | S7 | PASS | "Kubernetes only schedules the Pod onto nodes that have each of the labels you specify." |
| 113 | Common mistakes | A `-` after the label name removes it | S16 | PASS | "kubectl label pods my-pod new-label- # Remove a label" |
| 114 | What a tester can check | Callout "Tutorial advice": seven pieces of advice | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice for a tester". It states no tool fact that the rest of the page does not support (`/readyz` status code, `?verbose`, `FailedScheduling`, `kube-node-lease` Leases and CRD deletion are all covered above). |
| 115 | Key words | Control plane | none | PASS | Page sentence: "The control plane manages the worker nodes and the Pods." |
| 116 | Key words | Node | none | PASS | "worker machines, called nodes, that run containerized applications" |
| 117 | Key words | kube-apiserver | none | PASS | "kube-apiserver exposes the Kubernetes API, and the API server is the front end for the control plane" |
| 118 | Key words | etcd | none | PASS | "A consistent and highly-available key value store used as Kubernetes' backing store for all cluster data" |
| 119 | Key words | kube-scheduler | none | PASS | "Watches for newly created Pods with no assigned node, and selects a node for them to run on" |
| 120 | Key words | kube-controller-manager | none | PASS | "they are all compiled into a single binary and run in a single process" |
| 121 | Key words | kubelet | none | PASS | "An agent that runs on each node in the cluster; it makes sure that containers are running in a Pod" |
| 122 | Key words | kube-proxy | none | PASS | "kube-proxy (optional) ... A network proxy that runs on each node, implementing part of the Kubernetes Service concept" |
| 123 | Key words | Static Pod | none | PASS | "Static Pods are managed directly by the kubelet daemon on a specific node, without the API server observing them" |
| 124 | Key words | Mirror Pod | none | PASS | "The kubelet automatically tries to create a mirror Pod on the API server for each static Pod: the Pods are visible on the API server, but cannot be controlled from there" |
| 125 | Key words | Lease | none | PASS | "Lease objects within the `kube-node-lease` namespace" (heartbeat); "Kubernetes uses Leases to ensure only one instance of a component is running at any given time" |
| 126 | Key words | Node condition | none | PASS | "Four of the conditions of a node" (table: `Ready`, `DiskPressure`, `MemoryPressure`, `PIDPressure`) |
| 127 | Key words | `livez`, `readyz` | none | PASS | "The API server provides the endpoints `livez` and `readyz` to indicate its current status; the `healthz` endpoint is deprecated" |
| 128 | Key words | Custom resource | none | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation" |
| 129 | Key words | CustomResourceDefinition | none | PASS | "a new RESTful API endpoint is created for its objects"; "the server will uninstall the RESTful API endpoint and delete all custom objects stored in it" |
| 130 | Key words | Operator | none | PASS | "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components" |

Open FAILs after round 7: 0

## Round 8 (2026-11-18)

# Fact check: devops / kubernetes-architecture (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Control plane, nodes, etcd, scheduler/kubelet, custom resources, Operators, kind check | – | N/A | Framing sentence that describes the page. |
| 2 | Lede | Page is about the cluster parts, with a practice run | – | N/A | Framing sentence that describes the page. |
| 3 | What it is | Cluster = control plane plus worker machines (nodes) that run containerized applications | S1 | PASS | "consists of a control plane plus a set of worker machines, called nodes, that run containerized applications" |
| 4 | What it is | Every cluster needs at least one worker node to run Pods | S1 | PASS | "Every cluster needs at least one worker node in order to run Pods." |
| 5 | What it is | Control plane manages the worker nodes and Pods | S1 | PASS | "The control plane manages the worker nodes and the Pods in the cluster." |
| 6 | What it is | In production the control plane usually runs across multiple computers and the cluster runs multiple nodes, giving fault-tolerance and high availability | S1 | PASS | "the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, providing fault-tolerance and high availability" |
| 7 | What it is | kube-apiserver exposes the API; front end of the control plane | S1 | PASS | "exposes the Kubernetes API. The API server is the front end for the Kubernetes control plane." |
| 8 | What it is | etcd: consistent, highly-available key value store, backing store for all cluster data | S1 | PASS | "Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data." |
| 9 | What it is | kube-scheduler watches for new Pods with no node and selects a node | S1 | PASS | "watches for newly created Pods with no assigned node, and selects a node for them to run on" |
| 10 | What it is | kube-controller-manager runs controller processes | S1 | PASS | "Control plane component that runs controller processes." |
| 11 | What it is | cloud-controller-manager embeds cloud-specific logic and links the cluster to the cloud provider's API | S1 | PASS | "embeds cloud-specific control logic. The cloud controller manager lets you link your cluster into your cloud provider's API" |
| 12 | What it is | Node components include kubelet, container runtime, kube-proxy | S3 | PASS | "The components on a node include the kubelet, a container runtime, and the kube-proxy." (S3 splits it over lines) |
| 13 | What it is | kubelet: agent on each node, makes sure containers run in a Pod | S1 | PASS | "An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod." |
| 14 | What it is | kube-proxy (optional): network proxy on each node, implements part of the Service concept | S1 | PASS | "kube-proxy (optional)" … "a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept." |
| 15 | What it is | Container runtime manages execution and lifecycle; supports containerd, CRI-O, any CRI implementation | S1 | PASS | "managing the execution and lifecycle of containers" … "containerd, CRI-O, and any other implementation of the Kubernetes CRI" |
| 16 | What it is | All clusters should have cluster DNS, as many examples rely on it | S1 | PASS | "all Kubernetes clusters should have cluster DNS, as many examples rely on it." |
| 17 | What it is | Namespaced resources for addons belong in `kube-system` | S1 | PASS | "namespaced resources for addons belong within the kube-system namespace." |
| 18 | What it is | A custom resource is an API extension not necessarily in a default installation | S12 | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default" |
| 19 | What it is | Operators are software extensions that use custom resources to manage applications and components | S2 | PASS | "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components." |
| 20 | What it is | Operators follow Kubernetes principles, notably the control loop | S2 | PASS | "Operators follow Kubernetes principles, notably the control loop." |
| 21 | How it works | kube-apiserver exposes the API; API server is the front end | S1 | PASS | "exposes the Kubernetes API. The API server is the front end for the Kubernetes control plane." |
| 22 | How it works | kube-apiserver scales horizontally by deploying more instances | S1 | PASS | "designed to scale horizontally—that is, it scales by deploying more instances." |
| 23 | How it works | All Kubernetes objects are stored in etcd | S14 | PASS | "All Kubernetes objects are stored in etcd." |
| 24 | How it works | etcd is a leader-based distributed system | S14 | PASS | "etcd is a leader-based distributed system." |
| 25 | How it works | kube-scheduler is the default scheduler and runs as part of the control plane | S6 | PASS | "is the default scheduler for Kubernetes and runs as part of the control plane." |
| 26 | How it works | It selects an optimal node for newly created or not yet scheduled Pods | S6 | PASS | "selects an optimal node to run newly created or not yet scheduled (unscheduled) pods" |
| 27 | How it works | 2-step operation: filtering finds feasible nodes, scoring ranks the rest | S6 | PASS | "selects a node for the pod in a 2-step operation" … "finds the set of Nodes where it's feasible to schedule the Pod" … "the scheduler ranks the remaining nodes to choose" |
| 28 | How it works | If no node is suitable the Pod stays unscheduled until the scheduler can place it | S6 | PASS | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| 29 | How it works | nodeSelector lists the node labels; Kubernetes only schedules onto nodes with each label | S7 | PASS | "specify the node labels you want the target node to have. Kubernetes only schedules the Pod onto nodes that have each of the labels you specify." |
| 30 | How it works | Controllers are separate logically but compiled into one binary and run as one process | S1 | PASS | "Logically, each controller is a separate process, but … they are all compiled into a single binary and run in a single process." |
| 31 | How it works | Node controller notices and responds when nodes go down | S1 | PASS | "Node controller: Responsible for noticing and responding when nodes go down." |
| 32 | How it works | kubelet takes PodSpecs and ensures containers are running and healthy | S1 | PASS | "takes a set of PodSpecs … ensures that the containers described in those PodSpecs are running and healthy" |
| 33 | How it works | Heartbeats from nodes help determine node availability | S3 | PASS | "Heartbeats, sent by Kubernetes nodes, help your cluster determine the availability of each node" |
| 34 | How it works | Two forms of heartbeat: Node `.status` updates and Lease objects in `kube-node-lease` | S3 | PASS | "two forms of heartbeats: Updates to the .status of a Node. Lease objects within the kube-node-lease namespace." |
| 35 | How it works | Each kubelet heartbeat updates the Lease `spec.renewTime` | S5 | PASS | "every kubelet heartbeat is an update request to this Lease object, updating the spec.renewTime field for the Lease." |
| 36 | How it works | Condition table: Ready (True/False/Unknown, default 50 s), DiskPressure, MemoryPressure, PIDPressure | S4 | PASS | "True if the node is healthy and ready to accept pods, False if the node is not healthy and is not accepting pods, and Unknown if the node controller has not heard from the node in the last node-monitor-grace-period (default is 50 seconds)"; Disk, Memory and PID rows match the "…capacity is low", "…node memory is low", "…too many processes on the node" text. |
| 37 | How it works | Control plane can be deployed as static Pods managed by the kubelet; common with kubeadm | S1 | PASS | "Control plane components are deployed as static Pods, managed by the kubelet on specific nodes. This is a common approach used by tools like kubeadm." |
| 38 | How it works | Static Pods are managed directly by the kubelet on a node, without the API server observing them | S9 | PASS | "managed directly by the kubelet daemon on a specific node, without the API server observing them." |
| 39 | How it works | Kubelet watches each static Pod and restarts it if it fails | S9 | PASS | "the kubelet watches each static Pod and restarts it if it fails." |
| 40 | How it works | `staticPodPath` in the kubelet config file names a directory that is scanned periodically | S10 | PASS | "Use the staticPodPath: <the directory> field in the kubelet configuration file, which periodically scans the directory and creates/deletes static Pods as YAML/JSON files appear/disappear there." |
| 41 | How it works | Kubelet automatically tries to create a mirror Pod; visible on the API server, not controllable there | S9 | PASS | "The kubelet automatically tries to create a mirror Pod on the Kubernetes API server for each static Pod. … visible on the API server, but cannot be controlled from there." |
| 42 | How it works | Mirror Pod names have the node hostname suffix with a leading hyphen; `kubernetes.io/config.mirror` annotation | S9 | PASS | "suffixed with the node hostname with a leading hyphen." … "by the kubernetes.io/config.mirror annotation." |
| 43 | How it works | Cloud providers often abstract away the control plane | S1 | PASS | "Cloud providers often abstract away the control plane, managing its components as part of their service offering." |
| 44 | How it works | On own premises or a learning PC there is no cloud controller manager | S1 | PASS | "If you are running Kubernetes on your own premises, or in a learning environment inside your own PC, the cluster does not have a cloud controller manager." |
| 45 | How it works | Creating a CRD creates a new RESTful API endpoint for its objects | S13 | PASS | "When you create a new CustomResourceDefinition (CRD), the Kubernetes API Server creates a new RESTful resource path for each version you specify." … "a new namespaced RESTful API endpoint is created" |
| 46 | How it works | Custom resources store and retrieve data; with a custom controller they give a true declarative API | S12 | PASS | "On their own, custom resources let you store and retrieve structured data. When you combine a custom resource with a custom controller, custom resources provide a true declarative API." |
| 47 | How it works | Tutorial run: one node `qa-lab-control-plane` ran all parts; diagram | – | N/A | The page labels it as "the tutorial's own picture" of its run. |
| 48 | Try it | Run record (date, versions, undone changes) | – | N/A | Record of the page's own run. |
| 49 | Try it | Step 1: namespaced addon resources are in `kube-system` | S1 | PASS | "namespaced resources for addons belong within the kube-system namespace." |
| 50 | Try it | `-o wide` lists with more details | S16 | PASS | "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| 51 | Try it | No cloud-controller-manager in a learning environment on your own PC | S1 | PASS | "in a learning environment inside your own PC, the cluster does not have a cloud controller manager." |
| 52 | Try it | Step 2: kind runs local clusters using Docker container "nodes" | S18 | PASS | "kind is a tool for running local Kubernetes clusters using Docker container “nodes”." |
| 53 | Try it | `docker exec` executes a command in a running container | S19 | PASS | "Execute a command in a running container" |
| 54 | Try it | `-o yaml` gets a Pod's YAML | S16 | PASS | "kubectl get pod my-pod -o yaml # Get a pod's YAML" |
| 55 | Try it | Mirror Pods of static Pods have the `kubernetes.io/config.mirror` annotation | S9 | PASS | "You can recognize their mirror Pods in the kube-system namespace by the kubernetes.io/config.mirror annotation." |
| 56 | Try it | Step 3: API server provides `livez` and `readyz`; `healthz` is deprecated | S11 | PASS | "provides 3 API endpoints (healthz, livez and readyz) to indicate the current status of the API server. The healthz endpoint is deprecated" |
| 57 | Try it | `verbose` parameter prints the checks and their status, for all endpoints | S11 | PASS | "For all endpoints, you can use the verbose parameter to print out the checks and their status." Code `kubectl get --raw='/readyz?verbose'` is in S11. |
| 58 | Try it | Step 4: `kubectl describe nodes` describes a node with verbose output | S16 | PASS | "# Describe commands with verbose output / kubectl describe nodes my-node" |
| 59 | Try it | A kubelet heartbeat updates the node's Lease in `kube-node-lease` | S5 | PASS | "For every Node , there is a Lease object with a matching name in the kube-node-lease namespace. … every kubelet heartbeat is an update request to this Lease object" |
| 60 | Try it | If the name is omitted, `kubectl get` displays details for all resources of the type | S15 | PASS | "If the name is omitted, details for all resources are displayed, for example kubectl get pods." |
| 61 | Try it | Leases page lists API server Leases with `kubectl -n kube-system get lease -l apiserver.kubernetes.io/identity=kube-apiserver` | S5 | PASS | "kubectl -n kube-system get lease -l apiserver.kubernetes.io/identity=kube-apiserver" |
| 62 | Try it | Leases ensure only one instance of a component runs at any given time; used by kube-controller-manager and kube-scheduler in HA | S5 | PASS | "Kubernetes also uses Leases to ensure only one instance of a component is running at any given time. This is used by control plane components like kube-controller-manager and kube-scheduler in HA configurations" |
| 63 | Try it | Each kube-apiserver uses the Lease API to publish its identity | S5 | PASS | "each kube-apiserver uses the Lease API to publish its identity" |
| 64 | Try it | Step 5: `kubectl explain` gets the documentation for Pod manifests | S16 | PASS | "kubectl explain pods # get the documentation for pod manifests" |
| 65 | Try it | `kubectl apply -f` creates resources from a file | S16 | PASS | "kubectl apply -f ./my-manifest.yaml # create resource(s)" |
| 66 | Try it | kubectl form `kubectl [command] [TYPE] [NAME] [flags]`; create, get, describe, delete are operations | S15 | PASS | "kubectl [command] [TYPE] [NAME] [flags]" … "for example create, get, describe, delete." |
| 67 | Try it | Label command is the docs' own example | S8 | PASS | "kubectl label nodes <your-node-name> disktype=ssd" |
| 68 | Try it | `kubectl wait` waits for a condition on one or many resources; `--timeout` is the time to wait before giving up | S17 | PASS | "Wait for a specific condition on one or many resources." … "--timeout duration … The length of time to wait before giving up." |
| 69 | Try it | A `-` after a label name removes the label | S16 | PASS | "kubectl label pods my-pod new-label- # Remove a label" |
| 70 | Try it | Step 6: CronTab example, CRD in `resourcedefinition.yaml`, object in `my-crontab.yaml`; CRD YAML | S13 | PASS | "if you save the following CustomResourceDefinition to resourcedefinition.yaml" … "If you save the following YAML to my-crontab.yaml". The CRD fields match (group stable.example.com, scope Namespaced, plural crontabs, shortNames ct, replicas integer). The object values match (cronSpec "* * * * */5", image my-awesome-cron-image). |
| 71 | Try it | Once `Established` is true, endpoint serving starts | S13 | PASS | "Once the Established condition of your CustomResourceDefinition becomes true and this is observed by the handling code, the endpoint serving starts." |
| 72 | Try it | `kubectl api-resources --api-group` lists all resources in an API group | S16 | PASS | "kubectl api-resources --api-group=extensions # All resources in the "extensions" API group" |
| 73 | Try it | `shortNames` allow a shorter string to match the resource on the CLI | S13 | PASS | "# shortNames allow shorter string to match your resource on the CLI" |
| 74 | Try it | `-o jsonpath` prints the fields of a JSONPath expression | S16 | PASS | "-o=jsonpath=<template> Print the fields defined in a jsonpath expression" |
| 75 | Try it | Custom resources store and retrieve structured data on their own | S12 | PASS | "On their own, custom resources let you store and retrieve structured data." |
| 76 | Try it | Deleting a CRD uninstalls the endpoint and deletes all custom objects | S13 | PASS | "the server will uninstall the RESTful API endpoint and delete all custom objects stored in it." |
| 77 | Try it | Step 7: etcdctl CA, cert and key files can be obtained from the etcd Pod description | S14 | PASS | "where trusted-ca-file, cert-file and key-file can be obtained from the description of the etcd Pod." |
| 78 | Try it | Docs show `etcdctl` with these files: `member list` and `snapshot save` | S14 | PASS | "etcdctl --endpoints 10.2.0.9:2379 \ --cert=… --key=… --cacert=… member list" and "etcdctl --endpoints=https://127.0.0.1:2379 \ … snapshot save <backup-file-location>". "ETCDCTL_API=3" is in the docs' examples. |
| 79 | Try it | `kubectl exec` runs a command in an existing Pod | S16 | PASS | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 80 | Try it | Run outputs, commands, sizes, labels, cleanup in steps 1–7 | – | N/A | Page's own run record. |
| 81 | How a tester uses it | Machines should rely on the HTTP status code; 200 means healthy/live/ready by endpoint | S11 | PASS | "Machines that check the healthz/livez/readyz of the API server should rely on the HTTP status code. A status code 200 indicates the API server is healthy/live/ready, depending on the called endpoint." |
| 82 | How a tester uses it | If `/readyz` fails the server is still initializing or temporarily unable; route traffic away | S11 | PASS | "it indicates the server is still initializing or temporarily unable to serve requests … and traffic should be routed away from it." |
| 83 | How a tester uses it | `verbose` output is for a human operator, not a machine | S11 | PASS | "intended to be used by human operators" … "it is not intended to be consumed by a machine" |
| 84 | How a tester uses it | Pending Pod stays unscheduled until the scheduler can place it | S6 | PASS | "the pod remains unscheduled until the scheduler is able to place it." |
| 85 | How a tester uses it | In step 5 the FailedScheduling Event named the rule | – | N/A | Page's own run record. |
| 86 | How a tester uses it | Node `Unknown` / pressure conditions meanings | S4 | PASS | "Unknown if the node controller has not heard from the node in the last node-monitor-grace-period"; "if the disk capacity is low"; "if the node memory is low"; "too many processes on the node" |
| 87 | How a tester uses it | Cloud providers often abstract away the control plane | S1 | PASS | "Cloud providers often abstract away the control plane, managing its components as part of their service offering." |
| 88 | How a tester uses it | "On such a cluster, ask what the provider shows of it." | – | N/A | The reader's own step. |
| 89 | How a tester uses it | If the cluster uses etcd as its backing store, have a back up plan | S1 | PASS | "If your Kubernetes cluster uses etcd as its backing store, make sure you have a back up plan for the data." |
| 90 | How a tester uses it | Periodic etcd backups matter for disaster recovery | S14 | PASS | "Periodically backing up the etcd cluster data is important to recover Kubernetes clusters under disaster scenarios" |
| 91 | How a tester uses it | `etcdctl snapshot save` creates a snapshot | S14 | PASS | "A snapshot may either be created from a live member with the etcdctl snapshot save command" |
| 92 | How a tester uses it | Custom resource plus custom controller gives a true declarative API | S12 | PASS | "When you combine a custom resource with a custom controller, custom resources provide a true declarative API." |
| 93 | How a tester uses it | In step 6 the API accepted the CronTab and no Pod ran | – | N/A | Page's own run record. |
| 94 | How a tester uses it | Operators can automate deploying on demand, backups and restores, failure simulation | S2 | PASS | "deploying an application on demand / taking and restoring backups of that application's state / simulating failure in all or part of your cluster to test its resilience" |
| 95 | Common mistakes | Kubelet processes all non-dot files in the static Pod directory; no filtering by extension | S10 | PASS | "The kubelet processes all files not starting with a dot in the static Pod directory — there is no filtering by file extension." |
| 96 | Common mistakes | Copying to `kube-apiserver.yaml.backup` makes the kubelet read both and try to create a Pod from each | S10 | PASS | "the kubelet will read both files and attempt to create a static Pod from each." |
| 97 | Common mistakes | Deleting the mirror Pod with kubectl does not remove the static Pod | S10 | PASS | "If you try to use kubectl to delete the mirror Pod from the API server, the kubelet doesn't remove the static Pod" |
| 98 | Common mistakes | `verbose` output is not for machines; machines use the HTTP status code | S11 | PASS | "it is not intended to be consumed by a machine" … "should rely on the HTTP status code." |
| 99 | Common mistakes | `healthz` is deprecated since v1.16; use `livez` and `readyz` | S11 | PASS | "The healthz endpoint is deprecated (since Kubernetes v1.16), and you should use the more specific livez and readyz endpoints instead." |
| 100 | Common mistakes | Deleting a CRD uninstalls the endpoint and deletes all custom objects | S13 | PASS | "the server will uninstall the RESTful API endpoint and delete all custom objects stored in it." |
| 101 | Common mistakes | Kubernetes only schedules onto nodes that have each `nodeSelector` label | S7 | PASS | "Kubernetes only schedules the Pod onto nodes that have each of the labels you specify." |
| 102 | Common mistakes | A `-` after a label name removes it | S16 | PASS | "kubectl label pods my-pod new-label- # Remove a label" |
| 103 | What a tester can check | Callout "Tutorial advice" with advice list | – | PASS | The callout is titled "Tutorial advice" and says "the tutorial's own advice". It gives no tool fact that the rest of the page lacks. The `/readyz`, FailedScheduling, Lease, etcd backup, Operator, and CRD-delete points all match earlier sections. |
| 104 | Key words | Control plane | – | PASS | "The control plane manages the worker nodes and the Pods in the cluster." |
| 105 | Key words | Node | – | PASS | "a set of worker machines, called nodes, that run containerized applications" |
| 106 | Key words | kube-apiserver | – | PASS | "Exposes the Kubernetes API; the API server is the front end for the Kubernetes control plane" |
| 107 | Key words | etcd | – | PASS | "A consistent and highly-available key value store used as Kubernetes' backing store for all cluster data" |
| 108 | Key words | kube-scheduler | – | PASS | "Watches for newly created Pods with no assigned node, and selects a node for them to run on" |
| 109 | Key words | kube-controller-manager | – | PASS | "Runs controller processes" and "they are all compiled into a single binary and run in a single process" |
| 110 | Key words | kubelet | – | PASS | "An agent that runs on each node in the cluster; it makes sure that containers are running in a Pod" |
| 111 | Key words | kube-proxy | – | PASS | "kube-proxy (optional) \| A network proxy that runs on each node, implementing part of the Kubernetes Service concept" |
| 112 | Key words | Static Pod | – | PASS | "Static Pods are managed directly by the kubelet daemon on a specific node, without the API server observing them" |
| 113 | Key words | Mirror Pod | – | PASS | "The kubelet automatically tries to create a mirror Pod on the API server for each static Pod: the Pods are visible on the API server, but cannot be controlled from there" |
| 114 | Key words | Lease | – | PASS | "Lease objects within the kube-node-lease namespace" (heartbeat) and "Kubernetes uses Leases to ensure only one instance of a component is running at any given time" |
| 115 | Key words | Node condition | – | PASS | "Four of the conditions of a node:" with `Ready`, `DiskPressure`, `MemoryPressure`, `PIDPressure` |
| 116 | Key words | `livez`, `readyz` | – | PASS | "The API server provides the endpoints `livez` and `readyz` to indicate its current status; the `healthz` endpoint is deprecated" |
| 117 | Key words | Custom resource | – | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation" |
| 118 | Key words | CustomResourceDefinition | – | PASS | "a new RESTful API endpoint is created for its objects" and "uninstall the RESTful API endpoint and delete all custom objects stored in it" |
| 119 | Key words | Operator | – | PASS | "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components" |

Open FAILs after round 8: 0

Open FAILs: 0
