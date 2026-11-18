# Research notes: Kubernetes Architecture

Page: `content/devops/kubernetes-architecture.mdx`. Module: DevOps & Cloud. Date: 2026-11-18 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): the control plane and the node components, add-ons, how the API server, etcd, the scheduler, the controllers, and the kubelet work together, node heartbeats and conditions, static Pods and mirror Pods, managed control planes, and how custom resources and Operators extend the API, with a practice run on the kind cluster of `kubernetes-basics`. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had two sentences, one from the Cluster Architecture page (etcd) and one from the Operator pattern page; the page keeps both, in the table and the last paragraph of `## What it is`.

The practice run of `## Try it` was run on 2026-11-18 at 04:03 (+06) on Linux with Docker Engine 29.10.0, kind v0.33.0, and kubectl v1.37.2, on the cluster `qa-lab` (Kubernetes v1.37.0) that `kubernetes-basics` created at 03:27. The script checked first that there was no namespace `arch-lab`, no CustomResourceDefinition `crontabs.stable.example.com`, no `disktype` label on the node, and no file `/var/lib/etcd/qa-lab-snapshot.db` in the node. The outputs on the page are from this run:

- Step 1: `kubectl get pods -n kube-system -o wide` listed eight Pods, all `1/1 Running`, 0 restarts, age `30m`, on `qa-lab-control-plane`; the page shows the first five of the nine columns. The node container ran containerd 2.3.4 (`kubectl get nodes -o wide` in the run of `kubernetes-basics`), which the diagram of `## How it works` names.
- Step 2: `docker exec qa-lab-control-plane ls /etc/kubernetes/manifests` printed the four file names on the page. The page shows the `annotations` block of `kubectl get pod -n kube-system kube-scheduler-qa-lab-control-plane -o yaml` as the script printed it (with `sed`).
- Step 3: `kubectl get --raw='/readyz?verbose'` printed 37 lines that start with `[+]`, each ending in `ok`, then `readyz check passed`; `kubectl get --raw='/livez'` printed `ok`.
- Step 4: the `Conditions` of `kubectl describe node qa-lab-control-plane` had the four rows on the page; `kubectl get lease -n kube-node-lease` printed the block on the page; `kubectl get lease -n kube-system` listed the three Leases on the page.
- Step 5: `kubectl explain pod.spec.nodeSelector` printed the block on the page (two empty lines at its end are left out). The Pod was `Pending` with age `8s`, and `kubectl describe pod` printed one Event, on the page. After `kubectl label nodes qa-lab-control-plane disktype=ssd`, `kubectl wait` printed `pod/picky condition met`, and `-o wide` showed the Pod `1/1 Running`, age `9s`, IP `10.244.0.16`, on `qa-lab-control-plane`. Then `disktype-` printed `node/qa-lab-control-plane unlabeled`, and the namespace was deleted.
- Step 6: the CustomResourceDefinition file was the docs' example with its comments; the page shows it without them. `kubectl wait --for=condition=Established` printed `condition met`; the outputs of `api-resources`, `get crontab` (`my-new-cron-object`, age `0s`), the `spec`, `get pods`, and the error of `get crontabs` after the delete are as on the page.
- Step 7: the four flags are four lines of `kubectl describe pod -n kube-system etcd-qa-lab-control-plane`. The script ran each `etcdctl` command on one line; the page splits them with `\`. `member list` printed the line on the page. `snapshot save` printed six JSON log lines (one of them with `"size":"2.9 MB"` and `"etcd-version":"3.7.0"`), then the two lines on the page. `ls -l` showed `-rw------- 1 root root 2883616`. After `rm`, `ls /var/lib/etcd` listed only `member`.

After the run, `kubectl get namespace arch-lab` and `kubectl get crd crontabs.stable.example.com` printed `NotFound`, and the node had no `disktype` label.

An earlier run on the same day, at 03:58, used `etcdctl endpoint health` and `etcdctl get /registry/namespaces --prefix --keys-only` in step 7, and had no `kubectl explain`. The Kubernetes etcd page (S14) shows neither of those two commands, so the run was made again with the docs' `member list` and `snapshot save`, and the page shows only the second run. The outputs of the steps that both runs had were the same, apart from ages, the IP address of the Pod `picky`, and timestamps.

Seven quotes, of S8, S11, S14, S15, and S16, are written as `scripts/devops_claimcheck.py` reads them: the code highlighting of those pages puts a space before and after each `=` in a command, the slashes of `healthz/livez/readyz` and `healthy/live/ready` are in separate code spans, and the syntax line of S15 has a space inside each pair of brackets.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Cluster Architecture (Kubernetes documentation) | https://kubernetes.io/docs/concepts/architecture/ |
| S2 | Operator pattern (Kubernetes documentation) | https://kubernetes.io/docs/concepts/extend-kubernetes/operator/ |
| S3 | Nodes (Kubernetes documentation) | https://kubernetes.io/docs/concepts/architecture/nodes/ |
| S4 | Node Status (Kubernetes documentation) | https://kubernetes.io/docs/reference/node/node-status/ |
| S5 | Leases (Kubernetes documentation) | https://kubernetes.io/docs/concepts/architecture/leases/ |
| S6 | Kubernetes Scheduler (Kubernetes documentation) | https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/ |
| S7 | Assigning Pods to Nodes (Kubernetes documentation) | https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/ |
| S8 | Assign Pods to Nodes (Kubernetes documentation) | https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/ |
| S9 | Static Pods (Kubernetes documentation) | https://kubernetes.io/docs/concepts/workloads/pods/static-pods/ |
| S10 | Create static Pods (Kubernetes documentation) | https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/ |
| S11 | Kubernetes API health endpoints (Kubernetes documentation) | https://kubernetes.io/docs/reference/using-api/health-checks/ |
| S12 | Custom Resources (Kubernetes documentation) | https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/ |
| S13 | Extend the Kubernetes API with CustomResourceDefinitions (Kubernetes documentation) | https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/ |
| S14 | Operating etcd clusters for Kubernetes (Kubernetes documentation) | https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/ |
| S15 | Command line tool (kubectl) (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/ |
| S16 | kubectl Quick Reference (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/quick-reference/ |
| S17 | kubectl wait (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_wait/ |
| S18 | kind (kind documentation) | https://kind.sigs.k8s.io/ |
| S19 | docker container exec (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/exec/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| A cluster is a control plane plus worker machines, called nodes, that run containerized applications. | S1 | "A Kubernetes cluster consists of a control plane plus a set of worker machines, called nodes, that run containerized applications" |
| Every cluster needs at least one worker node to run Pods. | S1 | "Every cluster needs at least one worker node in order to run Pods" |
| The control plane manages the worker nodes and the Pods. | S1 | "The control plane manages the worker nodes and the Pods in the cluster" |
| In production, the control plane runs across multiple computers and a cluster runs multiple nodes. | S1 | "In production environments, the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, providing fault-tolerance and high availability" |
| kube-apiserver exposes the Kubernetes API and is the front end of the control plane. | S1 | "The API server is a component of the Kubernetes control plane that exposes the Kubernetes API" |
| kube-apiserver exposes the Kubernetes API and is the front end of the control plane. | S1 | "The API server is the front end for the Kubernetes control plane" |
| etcd is a consistent and highly-available key value store, the backing store for all cluster data. | S1 | "Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data" |
| kube-scheduler watches for new Pods with no node and selects a node for them. | S1 | "Control plane component that watches for newly created Pods with no assigned node, and selects a node for them to run on" |
| kube-controller-manager runs controller processes. | S1 | "Control plane component that runs controller processes" |
| cloud-controller-manager embeds cloud-specific control logic and links the cluster to the cloud provider's API. | S1 | "A Kubernetes control plane component that embeds cloud-specific control logic" |
| cloud-controller-manager embeds cloud-specific control logic and links the cluster to the cloud provider's API. | S1 | "The cloud controller manager lets you link your cluster into your cloud provider's API" |
| The components on a node include the kubelet, a container runtime, and the kube-proxy. | S3 | "The components on a node include the kubelet, a container runtime, and the kube-proxy" |
| The kubelet is an agent on each node that makes sure that containers are running in a Pod. | S1 | "An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod" |
| kube-proxy is optional; it is a network proxy on each node that implements part of the Service concept. | S1 | "kube-proxy (optional)" |
| kube-proxy is optional; it is a network proxy on each node that implements part of the Service concept. | S1 | "kube-proxy is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept" |
| The container runtime manages the execution and lifecycle of containers; containerd, CRI-O, and any CRI implementation are supported. | S1 | "It is responsible for managing the execution and lifecycle of containers within the Kubernetes environment" |
| The container runtime manages the execution and lifecycle of containers; containerd, CRI-O, and any CRI implementation are supported. | S1 | "Kubernetes supports container runtimes such as containerd, CRI-O, and any other implementation of the Kubernetes CRI" |
| All clusters should have cluster DNS, as many examples rely on it. | S1 | "all Kubernetes clusters should have cluster DNS, as many examples rely on it" |
| Namespaced resources for addons belong within the kube-system namespace. | S1 | "namespaced resources for addons belong within the kube-system namespace" |
| A custom resource is an extension of the API that is not necessarily in a default installation. | S12 | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation" |
| Operators are software extensions that use custom resources to manage applications and their components. | S2 | "Operators are software extensions to Kubernetes that make use of custom resources to manage applications and their components" |
| Operators follow Kubernetes principles, notably the control loop. | S2 | "Operators follow Kubernetes principles, notably the control loop" |
| kube-apiserver is designed to scale horizontally, by deploying more instances. | S1 | "kube-apiserver is designed to scale horizontally" |
| kube-apiserver is designed to scale horizontally, by deploying more instances. | S1 | "it scales by deploying more instances" |
| All Kubernetes objects are stored in etcd. | S14 | "All Kubernetes objects are stored in etcd" |
| etcd is a leader-based distributed system. | S14 | "etcd is a leader-based distributed system" |
| kube-scheduler is the default scheduler and runs as part of the control plane. | S6 | "kube-scheduler is the default scheduler for Kubernetes and runs as part of the control plane" |
| It selects an optimal node to run newly created or not yet scheduled Pods. | S6 | "Kube-scheduler selects an optimal node to run newly created or not yet scheduled (unscheduled) pods" |
| It selects a node in a 2-step operation: filtering, then scoring. | S6 | "kube-scheduler selects a node for the pod in a 2-step operation" |
| It selects a node in a 2-step operation: filtering, then scoring. | S6 | "finds the set of Nodes where it's feasible to schedule the Pod" |
| It selects a node in a 2-step operation: filtering, then scoring. | S6 | "In the scoring step, the scheduler ranks the remaining nodes to choose the most suitable Pod placement" |
| If no node is suitable, the Pod remains unscheduled until the scheduler can place it. | S6 | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it" |
| nodeSelector lists node labels, and the Pod goes only onto nodes that have each of them. | S7 | "You can add the nodeSelector field to your Pod specification and specify the node labels you want the target node to have" |
| nodeSelector lists node labels, and the Pod goes only onto nodes that have each of them. | S7 | "Kubernetes only schedules the Pod onto nodes that have each of the labels you specify" |
| Each controller is logically a separate process, but they are compiled into a single binary and run in a single process. | S1 | "Logically, each controller is a separate process, but to reduce complexity, they are all compiled into a single binary and run in a single process" |
| The Node controller notices and responds when nodes go down. | S1 | "Node controller: Responsible for noticing and responding when nodes go down" |
| The kubelet ensures that the containers of its PodSpecs are running and healthy. | S1 | "The kubelet takes a set of PodSpecs that are provided through various mechanisms and ensures that the containers described in those PodSpecs are running and healthy" |
| Heartbeats help the cluster determine the availability of each node; two forms: .status updates and Leases in kube-node-lease. | S3 | "Heartbeats, sent by Kubernetes nodes, help your cluster determine the availability of each node" |
| Heartbeats help the cluster determine the availability of each node; two forms: .status updates and Leases in kube-node-lease. | S3 | "For nodes there are two forms of heartbeats" |
| Heartbeats help the cluster determine the availability of each node; two forms: .status updates and Leases in kube-node-lease. | S3 | "Updates to the .status of a Node" |
| Heartbeats help the cluster determine the availability of each node; two forms: .status updates and Leases in kube-node-lease. | S3 | "Lease objects within the kube-node-lease namespace" |
| Every kubelet heartbeat updates the spec.renewTime field of its Lease. | S5 | "every kubelet heartbeat is an update request to this Lease object, updating the spec.renewTime field for the Lease" |
| Ready is True, False, or Unknown (no news in node-monitor-grace-period, default 50 seconds). | S4 | "True if the node is healthy and ready to accept pods, False if the node is not healthy and is not accepting pods, and Unknown if the node controller has not heard from the node in the last node-monitor-grace-period (default is 50 seconds)" |
| DiskPressure is True if the disk capacity is low. | S4 | "True if pressure exists on the disk size" |
| DiskPressure is True if the disk capacity is low. | S4 | "if the disk capacity is low" |
| MemoryPressure is True if the node memory is low. | S4 | "True if pressure exists on the node memory" |
| MemoryPressure is True if the node memory is low. | S4 | "if the node memory is low" |
| PIDPressure is True if there are too many processes on the node. | S4 | "True if pressure exists on the processes" |
| PIDPressure is True if there are too many processes on the node. | S4 | "if there are too many processes on the node" |
| The control plane can run as static Pods managed by the kubelet, a common approach of kubeadm. | S1 | "Control plane components are deployed as static Pods, managed by the kubelet on specific nodes. This is a common approach used by tools like kubeadm" |
| Static Pods are managed directly by the kubelet on a node, without the API server observing them. | S9 | "Static Pods are managed directly by the kubelet daemon on a specific node, without the API server observing them" |
| The kubelet watches each static Pod and restarts it if it fails. | S9 | "the kubelet watches each static Pod and restarts it if it fails" |
| staticPodPath names a directory that the kubelet scans to create and delete static Pods. | S10 | "Use the staticPodPath: <the directory> field in the kubelet configuration file, which periodically scans the directory and creates/deletes static Pods as YAML/JSON files appear/disappear there" |
| The kubelet creates a mirror Pod on the API server for each static Pod: visible there, but not controlled from there. | S9 | "The kubelet automatically tries to create a mirror Pod on the Kubernetes API server for each static Pod" |
| The kubelet creates a mirror Pod on the API server for each static Pod: visible there, but not controlled from there. | S9 | "This means that the Pods running on a node are visible on the API server, but cannot be controlled from there" |
| Mirror Pod names end with a hyphen and the node hostname, and they have the kubernetes.io/config.mirror annotation. | S9 | "The Pod names will be suffixed with the node hostname with a leading hyphen" |
| Mirror Pod names end with a hyphen and the node hostname, and they have the kubernetes.io/config.mirror annotation. | S9 | "You can recognize their mirror Pods in the kube-system namespace by the kubernetes.io/config.mirror annotation" |
| Cloud providers often abstract away the control plane. | S1 | "Cloud providers often abstract away the control plane, managing its components as part of their service offering" |
| A cluster on your own premises or in a learning environment has no cloud controller manager. | S1 | "If you are running Kubernetes on your own premises, or in a learning environment inside your own PC, the cluster does not have a cloud controller manager" |
| Creating a CustomResourceDefinition creates a new RESTful API endpoint. | S13 | "Then a new namespaced RESTful API endpoint is created at" |
| On their own, custom resources store and retrieve structured data; with a custom controller, they provide a true declarative API. | S12 | "On their own, custom resources let you store and retrieve structured data. When you combine a custom resource with a custom controller, custom resources provide a true declarative API" |
| kind runs local clusters using Docker container nodes. | S18 | "kind is a tool for running local Kubernetes clusters using Docker container" |
| docker exec executes a command in a running container. | S19 | "Execute a command in a running container" |
| -o wide lists with more details; -o yaml gets a Pod's YAML. | S16 | "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| -o wide lists with more details; -o yaml gets a Pod's YAML. | S16 | "kubectl get pod my-pod -o yaml # Get a pod's YAML" |
| -n selects a namespace. | S16 | "kubectl -n my-ns delete pod,svc --all" |
| The API server provides the livez and readyz endpoints; healthz is deprecated. | S11 | "The Kubernetes API server provides 3 API endpoints (healthz, livez and readyz) to indicate the current status of the API server" |
| The API server provides the livez and readyz endpoints; healthz is deprecated. | S11 | "The healthz endpoint is deprecated (since Kubernetes v1.16), and you should use the more specific livez and readyz endpoints instead" |
| The verbose parameter prints the checks and their status. | S11 | "For all endpoints, you can use the verbose parameter to print out the checks and their status" |
| The verbose parameter prints the checks and their status. | S11 | "kubectl get --raw = '/readyz?verbose'" |
| kubectl describe nodes describes a node with verbose output. | S16 | "Describe commands with verbose output kubectl describe nodes my-node" |
| The Leases page lists Leases with kubectl -n kube-system get lease. | S5 | "kubectl -n kube-system get lease" |
| The Leases page lists the Leases of the API servers with a label selector. | S5 | "kubectl -n kube-system get lease -l apiserver.kubernetes.io/identity = kube-apiserver" |
| If the name is omitted, kubectl get displays details for all resources of the type. | S15 | "If the name is omitted, details for all resources are displayed" |
| Leases ensure only one instance of a component runs at any given time; kube-controller-manager and kube-scheduler use this in HA configurations. | S5 | "Kubernetes also uses Leases to ensure only one instance of a component is running at any given time" |
| Leases ensure only one instance of a component runs at any given time; kube-controller-manager and kube-scheduler use this in HA configurations. | S5 | "This is used by control plane components like kube-controller-manager and kube-scheduler in HA configurations" |
| Each kube-apiserver uses the Lease API to publish its identity. | S5 | "uses the Lease API to publish its identity" |
| kubectl explain gets the documentation for Pod manifests. | S16 | "kubectl explain pods # get the documentation for pod manifests" |
| kubectl apply -f creates resources from a file. | S16 | "kubectl apply -f ./my-manifest.yaml # create resource(s)" |
| kubectl commands have the form kubectl [command] [TYPE] [NAME] [flags]; create, get, describe, and delete are operations. | S15 | "kubectl [ command ] [ TYPE ] [ NAME ] [ flags ]" |
| kubectl commands have the form kubectl [command] [TYPE] [NAME] [flags]; create, get, describe, and delete are operations. | S15 | "Specifies the operation that you want to perform on one or more resources, for example create, get, describe, delete" |
| The docs' example labels a node with kubectl label nodes. | S8 | "kubectl label nodes <your-node-name> disktype = ssd" |
| kubectl wait waits for a specific condition on one or many resources; --timeout is the time to wait before giving up. | S17 | "Wait for a specific condition on one or many resources" |
| kubectl wait waits for a specific condition on one or many resources; --timeout is the time to wait before giving up. | S17 | "The length of time to wait before giving up" |
| kubectl wait waits for a specific condition on one or many resources; --timeout is the time to wait before giving up. | S17 | "kubectl wait --for=condition=Ready pod/busybox1" |
| A - after the name of a label removes the label. | S16 | "kubectl label pods my-pod new-label- # Remove a label" |
| The CronTab example: a CustomResourceDefinition in resourcedefinition.yaml and an object in my-crontab.yaml. | S13 | "kubectl apply -f resourcedefinition.yaml" |
| The CronTab example: a CustomResourceDefinition in resourcedefinition.yaml and an object in my-crontab.yaml. | S13 | "kubectl apply -f my-crontab.yaml" |
| The YAML of the CronTab example. | S13 | "name: crontabs.stable.example.com" |
| The YAML of the CronTab example. | S13 | "group: stable.example.com" |
| The YAML of the CronTab example. | S13 | "served: true" |
| The YAML of the CronTab example. | S13 | "storage: true" |
| The YAML of the CronTab example. | S13 | "openAPIV3Schema" |
| The YAML of the CronTab example. | S13 | "cronSpec" |
| The YAML of the CronTab example. | S13 | "type: integer" |
| The YAML of the CronTab example. | S13 | "scope: Namespaced" |
| The YAML of the CronTab example. | S13 | "plural: crontabs" |
| The YAML of the CronTab example. | S13 | "singular: crontab" |
| The YAML of the CronTab example. | S13 | "kind: CronTab" |
| The YAML of the CronTab example. | S13 | "name: my-new-cron-object" |
| The YAML of the CronTab example. | S13 | "image: my-awesome-cron-image" |
| Once the Established condition becomes true, the endpoint serving starts. | S13 | "Once the Established condition of your CustomResourceDefinition becomes true and this is observed by the handling code, the endpoint serving starts" |
| kubectl api-resources --api-group lists all resources in an API group. | S16 | "kubectl api-resources --api-group = extensions # All resources in the" |
| shortNames allow a shorter string to match the resource on the CLI. | S13 | "shortNames allow shorter string to match your resource on the CLI" |
| -o jsonpath prints the fields of a JSONPath expression. | S16 | "Print the fields defined in a jsonpath expression" |
| kubectl get crontab lists the custom objects. | S13 | "kubectl get crontab" |
| Deleting a CustomResourceDefinition uninstalls its endpoint and deletes all its custom objects. | S13 | "When you delete a CustomResourceDefinition, the server will uninstall the RESTful API endpoint and delete all custom objects stored in it" |
| Deleting a CustomResourceDefinition uninstalls its endpoint and deletes all its custom objects. | S13 | "kubectl delete -f resourcedefinition.yaml" |
| The CA, cert, and key files for etcdctl can be obtained from the description of the etcd Pod. | S14 | "where trusted-ca-file, cert-file and key-file can be obtained from the description of the etcd Pod" |
| The docs show etcdctl with these files: member list, and snapshot save. | S14 | "member list" |
| The docs show etcdctl with these files: member list, and snapshot save. | S14 | "snapshot save" |
| The docs show etcdctl with these files: member list, and snapshot save. | S14 | "--cert=/etc/kubernetes/pki/etcd/server.crt" |
| The docs show etcdctl with these files: member list, and snapshot save. | S14 | "--key=/etc/kubernetes/pki/etcd/server.key" |
| The docs show etcdctl with these files: member list, and snapshot save. | S14 | "--cacert=/etc/kubernetes/pki/etcd/ca.crt" |
| The docs show etcdctl with these files: member list, and snapshot save. | S14 | "--endpoints = https://127.0.0.1:2379" |
| The docs' examples start with ETCDCTL_API=3. | S14 | "ETCDCTL_API=3 etcdctl" |
| kubectl exec runs a command in an existing Pod. | S16 | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| Machines should rely on the HTTP status code; 200 means healthy, live, or ready. | S11 | "Machines that check the healthz / livez / readyz of the API server should rely on the HTTP status code" |
| Machines should rely on the HTTP status code; 200 means healthy, live, or ready. | S11 | "A status code 200 indicates the API server is healthy / live / ready, depending on the called endpoint" |
| A failure of /readyz means the server is still initializing or unable to serve requests, and traffic should be routed away. | S11 | "If /readyz returns a failure status code, it indicates the server is still initializing or temporarily unable to serve requests" |
| A failure of /readyz means the server is still initializing or unable to serve requests, and traffic should be routed away. | S11 | "traffic should be routed away from it" |
| The verbose output is for a human operator and not intended to be consumed by a machine. | S11 | "This can be useful for a human operator to debug the current status of the API server, it is not intended to be consumed by a machine" |
| Make sure you have a back up plan for the data of etcd. | S1 | "If your Kubernetes cluster uses etcd as its backing store, make sure you have a back up plan for the data" |
| Periodic backups of etcd are important to recover clusters under disaster scenarios. | S14 | "Periodically backing up the etcd cluster data is important to recover Kubernetes clusters under disaster scenarios" |
| An Operator can automate deploying an application on demand, backups and restores, and simulating failure to test resilience. | S2 | "Some of the things that you can use an operator to automate include" |
| An Operator can automate deploying an application on demand, backups and restores, and simulating failure to test resilience. | S2 | "deploying an application on demand" |
| An Operator can automate deploying an application on demand, backups and restores, and simulating failure to test resilience. | S2 | "taking and restoring backups of that application's state" |
| An Operator can automate deploying an application on demand, backups and restores, and simulating failure to test resilience. | S2 | "simulating failure in all or part of your cluster to test its resilience" |
| The kubelet processes all files not starting with a dot in the static Pod directory, with no filtering by extension; a .backup copy is read too. | S10 | "The kubelet processes all files not starting with a dot in the static Pod directory" |
| The kubelet processes all files not starting with a dot in the static Pod directory, with no filtering by extension; a .backup copy is read too. | S10 | "there is no filtering by file extension" |
| The kubelet processes all files not starting with a dot in the static Pod directory, with no filtering by extension; a .backup copy is read too. | S10 | "if you create a backup of a manifest by running cp kube-apiserver.yaml kube-apiserver.yaml.backup, the kubelet will read both files and attempt to create a static Pod from each" |
| Deleting the mirror Pod with kubectl does not remove the static Pod. | S10 | "If you try to use kubectl to delete the mirror Pod from the API server, the kubelet doesn't remove the static Pod" |
