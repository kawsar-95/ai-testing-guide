# Research notes: Kubernetes Networking and Storage

Page: `content/devops/kubernetes-networking-storage.mdx`. Module: DevOps & Cloud. Date: 2026-11-18 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): the Pod network, Services and their EndpointSlices, kube-proxy, the four types of Service, DNS names and the namespace of a query, Ingress and Gateway API, volumes, PersistentVolumes, PersistentVolumeClaims, StorageClasses, access modes, and reclaim policies, with a practice run on the kind cluster of `kubernetes-basics`. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had six sentences, from the Service, DNS, and Volumes pages; the page keeps them in `## What it is`.

The practice run of `## Try it` was run on 2026-11-18 at 04:30 (+06) on Linux with Docker Engine 29.10.0, kind v0.33.0, and kubectl v1.37.2, on the cluster `qa-lab` (Kubernetes v1.37.0) that `kubernetes-basics` created at 03:27. The script checked first that there was no namespace `net-lab`, that the local port 18080 was free, and that no PersistentVolume was bound to a claim in `net-lab`. The outputs on the page are from this run (the third, see below):

- Step 1: the outputs on the page are as printed. `-o wide` had nine columns (the page shows six), and `kubectl describe service web` printed 16 lines (the page shows six of them: Selector, Type, IP, Port, TargetPort, Endpoints).
- Step 2: both `nslookup web` and `nslookup web.net-lab.svc.cluster.local` printed the server lines and the address `10.96.62.252 web.net-lab.svc.cluster.local`. `nslookup kubernetes` printed the two server lines, `nslookup: can't resolve 'kubernetes'`, and `command terminated with exit code 1`, as on the page.
- Step 3: the outputs on the page are as printed. The `wget` command had `-T 5`; the refusal came at once.
- Step 4: the script ran `kubectl port-forward` with `&`, waited 3 seconds, printed its log (the two `Forwarding from` lines), sent the `curl`, and stopped it with `kill`. It stored the outputs of `kubectl get node qa-lab-control-plane -o jsonpath='{.status.addresses[?(@.type=="InternalIP")].address}'` and of `kubectl get service web-np -n net-lab -o jsonpath='{.spec.ports[0].nodePort}'` in variables and printed them as `node InternalIP=172.22.0.2 nodePort=30756`. The first `curl` exited with code 7; the `sleep 2` and the second `curl` are as on the page. The script waited 10 seconds (`sleep 10`) before `kubectl get service web-lb`.
- Step 5: the script waited 3 seconds after `kubectl apply -f net-pvc.yaml`. It printed the end of `kubectl describe pvc` with `sed -n '/^Events/,$p'`. It made `net-reader.yaml` from `net-writer.yaml` with `sed`, changing `writer` to `reader` and the command to `cat /data/result.txt`. `kubectl get pv` had ten columns (the page shows six). `kubectl delete pod writer` printed `pod "writer" deleted from net-lab namespace`.
- Step 6: `kubectl delete namespace net-lab --timeout=180s` printed `namespace "net-lab" deleted`; the script waited 10 seconds before `kubectl get pv`, which printed `No resources found`, and `kubectl get namespace net-lab` printed `NotFound`.

The tutorial ran the steps three times on that day. The first run (04:20) had no `--show-labels`, no `kubectl describe service`, no `cat /etc/resolv.conf`, no `-o wide` for `web-typo`, no `kubectl logs` of kube-proxy, no `describe pvc`, and one `curl` to the NodePort right after `kubectl expose`, which failed. Between the first and the second run, a separate check on the same cluster (namespace `np-probe`, deleted after it) sent a `curl` to a new NodePort right after `kubectl expose` and then after 1, 2, 3, 5, and 8 seconds: the first failed, and all the others got HTTP 200. The second run (04:23) added the failed `curl` with `-w`, `sleep 2`, and the second `curl`; it failed and then worked, as on the page. The third run (04:30:35) added the other commands; its outputs are on the page. Outputs that the runs had in common were the same, apart from names, addresses, ports, and ages.

Some quotes are written as `scripts/devops_claimcheck.py` reads them: the code highlighting of S11 and S21 puts a space before and after each `=` in a command, and the syntax line of S19 keeps its brackets without spaces.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Service (Kubernetes documentation) | https://kubernetes.io/docs/concepts/services-networking/service/ |
| S2 | DNS for Services and Pods (Kubernetes documentation) | https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/ |
| S3 | Volumes (Kubernetes documentation) | https://kubernetes.io/docs/concepts/storage/volumes/ |
| S4 | Services, Load Balancing, and Networking (Kubernetes documentation) | https://kubernetes.io/docs/concepts/services-networking/ |
| S5 | EndpointSlices (Kubernetes documentation) | https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/ |
| S6 | Virtual IPs and Service Proxies (Kubernetes documentation) | https://kubernetes.io/docs/reference/networking/virtual-ips/ |
| S7 | Ingress (Kubernetes documentation) | https://kubernetes.io/docs/concepts/services-networking/ingress/ |
| S8 | Gateway API (Kubernetes documentation) | https://kubernetes.io/docs/concepts/services-networking/gateway/ |
| S9 | Persistent Volumes (Kubernetes documentation) | https://kubernetes.io/docs/concepts/storage/persistent-volumes/ |
| S10 | Storage Classes (Kubernetes documentation) | https://kubernetes.io/docs/concepts/storage/storage-classes/ |
| S11 | Debug Services (Kubernetes documentation) | https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/ |
| S12 | Debugging DNS Resolution (Kubernetes documentation) | https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/ |
| S13 | Use Port Forwarding to Access Applications in a Cluster (Kubernetes documentation) | https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/ |
| S14 | Share a Cluster with Namespaces (Kubernetes documentation) | https://kubernetes.io/docs/tasks/administer-cluster/namespaces/ |
| S15 | kubectl expose (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/ |
| S16 | kubectl create deployment (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_deployment/ |
| S17 | kubectl rollout status (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_status/ |
| S18 | kubectl wait (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_wait/ |
| S19 | kubectl logs (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/ |
| S20 | kubectl delete (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_delete/ |
| S21 | kubectl Quick Reference (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/quick-reference/ |
| S22 | LoadBalancer (kind documentation) | https://kind.sigs.k8s.io/docs/user/loadbalancer/ |
| S23 | Command line tool (kubectl) (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| A Deployment can create and destroy Pods dynamically. | S1 | "If you use a Deployment to run your app, that Deployment can create and destroy Pods dynamically" |
| Each Pod gets its own IP address, and the set of Pods running could be different a moment later. | S1 | "Each Pod gets its own IP address" |
| Each Pod gets its own IP address, and the set of Pods running could be different a moment later. | S1 | "the set of Pods running in one moment in time could be different from the set of Pods running that application a moment later" |
| Each pod in a cluster gets its own unique cluster-wide IP address. | S4 | "Each pod in a cluster gets its own unique cluster-wide IP address" |
| All pods can communicate with all other pods, directly, without proxies or NAT. | S4 | "All pods can communicate with all other pods, whether they are on the same node or on different nodes" |
| All pods can communicate with all other pods, directly, without proxies or NAT. | S4 | "Pods can communicate with each other directly, without the use of proxies or address translation (NAT)" |
| In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster. | S1 | "a Service is a method for exposing a network application that is running as one or more Pods in your cluster" |
| The set of Pods targeted by a Service is usually determined by a selector. | S1 | "The set of Pods targeted by a Service is usually determined by a selector that you define" |
| Kubernetes creates DNS records for Services and Pods. | S2 | "Kubernetes creates DNS records for Services and Pods" |
| You can contact Services with consistent DNS names instead of IP addresses. | S2 | "You can contact Services with consistent DNS names instead of IP addresses" |
| Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. | S7 | "Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster" |
| The Kubernetes project recommends using Gateway instead of Ingress; the Ingress API has been frozen. | S7 | "The Kubernetes project recommends using Gateway instead of Ingress" |
| The Kubernetes project recommends using Gateway instead of Ingress; the Ingress API has been frozen. | S7 | "The Ingress API has been frozen" |
| Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing. | S8 | "Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing" |
| On-disk files in a container are ephemeral. | S3 | "On-disk files in a container are ephemeral" |
| One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost. | S3 | "One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost" |
| After a crash, kubelet restarts the container with a clean state. | S3 | "After a crash, kubelet restarts the container with a clean state" |
| Another problem occurs when multiple containers are running in a Pod and need to share files. | S3 | "Another problem occurs when multiple containers are running in a Pod and need to share files" |
| The Kubernetes volume abstraction can help you to solve both of these problems. | S3 | "The Kubernetes volume abstraction can help you to solve both of these problems" |
| At its core, a volume is a directory, possibly with some data in it, which is accessible to the containers in a Pod. | S3 | "At its core, a volume is a directory, possibly with some data in it, which is accessible to the containers in a pod" |
| Ephemeral volume types have a lifetime linked to a specific Pod; emptyDir is scratch space deleted when the Pod is removed from the node. | S3 | "Ephemeral volume types have a lifetime linked to a specific Pod" |
| Ephemeral volume types have a lifetime linked to a specific Pod; emptyDir is scratch space deleted when the Pod is removed from the node. | S3 | "emptyDir: empty scratch space that is initialized when the Pod is assigned to a node, and is deleted when the Pod is removed from that node" |
| A PV is a piece of storage provisioned by an administrator or dynamically using Storage Classes. | S9 | "A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes" |
| A PVC is a request for storage by a user. | S9 | "A PersistentVolumeClaim (PVC) is a request for storage by a user" |
| A StorageClass provides a way for administrators to describe the classes of storage they offer. | S10 | "A StorageClass provides a way for administrators to describe the classes of storage they offer" |
| When a Pod ceases to exist, Kubernetes destroys ephemeral volumes, but not persistent volumes. | S3 | "When a Pod ceases to exist, Kubernetes destroys ephemeral volumes; however, Kubernetes does not destroy persistent volumes" |
| Kubernetes assigns a Service an IP address, the cluster IP, used by the virtual IP address mechanism. | S1 | "Kubernetes assigns this Service an IP address (the cluster IP), that is used by the virtual IP address mechanism" |
| The controller for a Service scans for Pods that match its selector and updates its EndpointSlices. | S1 | "The controller for that Service continuously scans for Pods that match its selector, and then makes any necessary updates to the set of EndpointSlices for the Service" |
| EndpointSlices track the IP addresses of backend endpoints, normally for a Service; the endpoints typically represent Pods. | S5 | "EndpointSlices track the IP addresses of backend endpoints" |
| EndpointSlices track the IP addresses of backend endpoints, normally for a Service; the endpoints typically represent Pods. | S5 | "EndpointSlices are normally associated with a Service and the backend endpoints typically represent Pods" |
| A Service can map any incoming port to a targetPort; by default, the targetPort is the same as the port. | S1 | "A Service can map any incoming port to a targetPort" |
| A Service can map any incoming port to a targetPort; by default, the targetPort is the same as the port. | S1 | "By default and for convenience, the targetPort is set to the same value as the port field" |
| Each kube-proxy watches the control plane for Services and EndpointSlices. | S6 | "Each instance of kube-proxy watches the Kubernetes control plane for the addition and removal of Service and EndpointSlice objects" |
| kube-proxy configures the node to capture traffic to the clusterIP and port and redirect it to an endpoint. | S6 | "For each Service, kube-proxy calls appropriate APIs (depending on the kube-proxy mode) to configure the node to capture traffic to the Service's clusterIP and port, and redirect that traffic to one of the Service's endpoints" |
| Without an explicit mode, kube-proxy uses the recommended default: iptables in 1.37, nftables in a future version. | S6 | "If you do not choose a mode explicitly" |
| Without an explicit mode, kube-proxy uses the recommended default: iptables in 1.37, nftables in a future version. | S6 | "then it will use the recommended default version" |
| Without an explicit mode, kube-proxy uses the recommended default: iptables in 1.37, nftables in a future version. | S6 | "In Kubernetes 1.37, this is iptables, but a future version of Kubernetes will change the default to nftables" |
| In iptables mode, each change may wait up to minSyncPeriod; the rules are out of sync for that time; the default is 1s. | S6 | "each individual change may end up waiting up to the full minSyncPeriod before being processed, meaning that the iptables rules spend more time being out-of-sync with the current API server state" |
| In iptables mode, each change may wait up to minSyncPeriod; the rules are out of sync for that time; the default is 1s. | S6 | "The default value of 1s should work well in most clusters" |
| In iptables mode, each change may wait up to minSyncPeriod; the rules are out of sync for that time; the default is 1s. | S6 | "The minSyncPeriod parameter sets the minimum duration between attempts to resynchronize iptables rules with the kernel" |
| ClusterIP: a cluster-internal IP, only reachable from within the cluster; the default type. | S1 | "Exposes the Service on a cluster-internal IP" |
| ClusterIP: a cluster-internal IP, only reachable from within the cluster; the default type. | S1 | "Choosing this value makes the Service only reachable from within the cluster. This is the default that is used if you don't explicitly specify a type for a Service" |
| NodePort: each Node's IP at a static port; the port comes from a range, default 30000-32767. | S1 | "Exposes the Service on each Node's IP at a static port (the NodePort)" |
| NodePort: each Node's IP at a static port; the port comes from a range, default 30000-32767. | S1 | "the Kubernetes control plane allocates a port from a range specified by --service-node-port-range flag (default: 30000-32767)" |
| LoadBalancer: an external load balancer; Kubernetes does not directly offer a load balancing component. | S1 | "Exposes the Service externally using an external load balancer" |
| LoadBalancer: an external load balancer; Kubernetes does not directly offer a load balancing component. | S1 | "Kubernetes does not directly offer a load balancing component; you must provide one, or you can integrate your Kubernetes cluster with a cloud provider" |
| ExternalName maps the Service to the externalName field, for example a hostname; no proxying is set up. | S1 | "Maps the Service to the contents of the externalName field (for example, to the hostname api.foo.bar.example)" |
| ExternalName maps the Service to the externalName field, for example a hostname; no proxying is set up. | S1 | "No proxying of any kind is set up" |
| A LoadBalancer Service starts with the changes of a NodePort Service; the cloud-controller-manager configures the load balancer. | S1 | "To implement a Service of type: LoadBalancer, Kubernetes typically starts off by making the changes that are equivalent to you requesting a Service of type: NodePort" |
| A LoadBalancer Service starts with the changes of a NodePort Service; the cloud-controller-manager configures the load balancer. | S1 | "The cloud-controller-manager component then configures the external load balancer to forward traffic to that assigned node port" |
| A normal Service gets A/AAAA records named my-svc.my-namespace.svc.cluster-domain.example, which resolve to the cluster IP. | S2 | "Services are assigned DNS A and/or AAAA records, depending on the IP family or families of the Service, with a name of the form my-svc.my-namespace.svc.cluster-domain.example. This resolves to the cluster IP of the Service" |
| DNS queries without a namespace are limited to the Pod's namespace; other namespaces go in the query. | S2 | "DNS queries that don't specify a namespace are limited to the Pod's namespace" |
| DNS queries without a namespace are limited to the Pod's namespace; other namespaces go in the query. | S2 | "Access Services in other namespaces by specifying it in the DNS query" |
| Queries may be expanded with the Pod's /etc/resolv.conf, which the kubelet configures; search values expand queries. | S2 | "DNS queries may be expanded using the Pod's /etc/resolv.conf. kubelet configures this file for each Pod" |
| Queries may be expanded with the Pod's /etc/resolv.conf, which the kubelet configures; search values expand queries. | S2 | "The values of the search option are used to expand queries" |
| A control loop watches for new PVCs, finds a matching PV, and binds them. | S9 | "A control loop in the control plane watches for new PVCs, finds a matching PV (if possible), and binds them together" |
| A PVC to PV binding is a one-to-one mapping. | S9 | "A PVC to PV binding is a one-to-one mapping" |
| Claims remain unbound indefinitely if a matching volume does not exist. | S9 | "Claims will remain unbound indefinitely if a matching volume does not exist" |
| An administrator can specify a default StorageClass for PVCs that don't request a class. | S10 | "you can specify a default StorageClass that applies to any PVCs that don't request a specific class" |
| WaitForFirstConsumer delays binding and provisioning until a Pod using the PVC is created. | S10 | "The WaitForFirstConsumer mode which will delay the binding and provisioning of a PersistentVolume until a Pod using the PersistentVolumeClaim is created" |
| Pods access storage by using the claim as a volume; claims must be in the Pod's namespace. | S9 | "Pods access storage by using the claim as a volume. Claims must exist in the same namespace as the Pod using the claim" |
| The four access modes. | S9 | "ReadWriteOnce the volume can be mounted as read-write by a single node" |
| The four access modes. | S9 | "ReadWriteOnce access mode still can allow multiple pods to access (read from or write to) that volume when the pods are running on the same node" |
| The four access modes. | S9 | "ReadOnlyMany the volume can be mounted as read-only by many nodes" |
| The four access modes. | S9 | "ReadWriteMany the volume can be mounted as read-write by many nodes" |
| The four access modes. | S9 | "the volume can be mounted as read-write by a single Pod" |
| Users can delete the PVC; the reclaim policy says what to do with the released volume. | S9 | "When a user is done with their volume, they can delete the PVC objects from the API that allows reclamation of the resource. The reclaim policy for a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim" |
| Dynamically provisioned volumes inherit the reclaim policy of their StorageClass, which defaults to Delete. | S9 | "Volumes that were dynamically provisioned inherit the reclaim policy of their StorageClass, which defaults to Delete" |
| Delete removes the PV object and the associated storage asset. | S9 | "For volume plugins that support the Delete reclaim policy, deletion removes both the PersistentVolume object from Kubernetes, as well as the associated storage asset in the external infrastructure" |
| With Retain, the PV still exists when the PVC is deleted, and the volume is considered released. | S9 | "When the PersistentVolumeClaim is deleted, the PersistentVolume still exists and the volume is considered" |
| kubectl create namespace creates a namespace. | S14 | "kubectl create namespace <insert-namespace-name-here>" |
| kubectl create deployment creates a deployment; --replicas is the number of replicas. | S16 | "Create a deployment with the specified name" |
| kubectl create deployment creates a deployment; --replicas is the number of replicas. | S16 | "Number of replicas to create" |
| kubectl create deployment creates a deployment; --replicas is the number of replicas. | S16 | "kubectl create deployment my-dep --image=nginx --replicas=3" |
| kubectl rollout status shows the status of the rollout; --timeout is the time before ending the watch. | S17 | "Show the status of the rollout" |
| kubectl rollout status shows the status of the rollout; --timeout is the time before ending the watch. | S17 | "The length of time to wait before ending watch" |
| kubectl expose exposes a resource as a new service; the default selector and type. | S15 | "Expose a resource as a new Kubernetes service" |
| kubectl expose exposes a resource as a new service; the default selector and type. | S15 | "If empty (the default) infer the selector from the resource being exposed" |
| kubectl expose exposes a resource as a new service; the default selector and type. | S15 | "Default is 'ClusterIP'" |
| --selector is the label selector for the service; --name is the name of the new object. | S15 | "A label selector to use for this service" |
| --selector is the label selector for the service; --name is the name of the new object. | S15 | "The name for the newly created object" |
| -o wide lists with more details; --show-labels shows labels; describe gives verbose output. | S21 | "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| -o wide lists with more details; --show-labels shows labels; describe gives verbose output. | S21 | "Show labels for all pods (or any other Kubernetes object that supports labelling) kubectl get pods --show-labels" |
| -o wide lists with more details; --show-labels shows labels; describe gives verbose output. | S21 | "Describe commands with verbose output" |
| Debug Services lists EndpointSlices with the label kubernetes.io/service-name. | S11 | "kubectl get endpointslices -l kubernetes.io/service-name = hostnames" |
| Debug Services runs a test Pod with kubectl run and --restart=Never; the quick reference runs busybox:1.28. | S11 | "kubectl run -it --rm --restart=Never busybox" |
| Debug Services runs a test Pod with kubectl run and --restart=Never; the quick reference runs busybox:1.28. | S21 | "kubectl run -i --tty busybox --image = busybox:1.28 -- sh # Run pod as interactive shell" |
| kubectl wait waits for a specific condition on one or many resources. | S18 | "Wait for a specific condition on one or many resources" |
| kubectl exec runs a command in an existing Pod. | S21 | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| The DNS debugging page checks DNS with nslookup kubernetes.default and looks at /etc/resolv.conf. | S12 | "kubectl exec -i -t dnsutils -- nslookup kubernetes.default" |
| The DNS debugging page checks DNS with nslookup kubernetes.default and looks at /etc/resolv.conf. | S12 | "kubectl exec -ti dnsutils -- cat /etc/resolv.conf" |
| If the short name fails, perhaps the Pod and Service are in different namespaces; try a namespace-qualified name. | S11 | "If this fails, perhaps your Pod and Service are in different Namespaces, try a namespace-qualified name" |
| If the ENDPOINTS column is <none>, check the selector against the Pod labels; a common mistake is a typo. | S11 | "If the ENDPOINTS column is <none>, you should check that the spec.selector field of your Service actually selects for metadata.labels values on your Pods" |
| If the ENDPOINTS column is <none>, check the selector against the Pod labels; a common mistake is a typo. | S11 | "A common mistake is to have a typo or other error" |
| port-forward can use a resource name to select a matching Pod; the docs forward to a Service. | S13 | "kubectl port-forward allows using resource name, such as a pod name, to select a matching pod to port forward to" |
| port-forward can use a resource name to select a matching Pod; the docs forward to a Service. | S13 | "kubectl port-forward service/mongo 28015:27017" |
| port-forward does not return; the docs open another terminal. | S13 | "kubectl port-forward does not return. To continue with the exercises, you will need to open another terminal" |
| kubectl logs prints the logs for a container in a pod or specified resource, POD or TYPE/NAME. | S19 | "Print the logs for a container in a pod or specified resource" |
| kubectl logs prints the logs for a container in a pod or specified resource, POD or TYPE/NAME. | S19 | "kubectl logs [-f] [-p] (POD \| TYPE/NAME) [-c CONTAINER]" |
| Debug Services shows the kube-proxy log line Using iptables Proxier. | S11 | "Using iptables Proxier" |
| A NodePort Service reports the allocated port in .spec.ports[*].nodePort. | S1 | "Your Service reports the allocated port in its .spec.ports[*].nodePort field" |
| -o jsonpath prints the fields of a jsonpath expression; the quick reference gets node addresses with it. | S21 | "Print the fields defined in a jsonpath expression" |
| -o jsonpath prints the fields of a jsonpath expression; the quick reference gets node addresses with it. | S21 | "Get ExternalIPs of all nodes" |
| On cloud providers with external load balancers, LoadBalancer provisions one, asynchronously, published in .status.loadBalancer. | S1 | "On cloud providers which support external load balancers, setting the type field to LoadBalancer provisions a load balancer for your Service" |
| On cloud providers with external load balancers, LoadBalancer provisions one, asynchronously, published in .status.loadBalancer. | S1 | "The actual creation of the load balancer happens asynchronously, and information about the provisioned balancer is published in the Service's .status.loadBalancer field" |
| kind's guide uses Cloud Provider KIND, a standalone binary on the host that provisions Load Balancer containers. | S22 | "This guide covers how to get service of type LoadBalancer working in a kind cluster using Cloud Provider KIND" |
| kind's guide uses Cloud Provider KIND, a standalone binary on the host that provisions Load Balancer containers. | S22 | "Cloud Provider KIND runs as a standalone binary in your host and connects to your KIND cluster and provisions new Load Balancer containers for your Services" |
| kubectl get without a name displays all resources of the type; a type can be singular, plural, or abbreviated. | S23 | "If the name is omitted, details for all resources are displayed" |
| kubectl get without a name displays all resources of the type; a type can be singular, plural, or abbreviated. | S23 | "Resource types are case-insensitive and you can specify the singular, plural, or abbreviated forms" |
| kubectl apply -f creates resources. | S21 | "kubectl apply -f ./my-manifest.yaml # create resource(s)" |
| The docs' Pod uses a claim with persistentVolumeClaim and claimName. | S9 | "claimName: myclaim" |
| The kubectl wait reference waits for a field with --for=jsonpath. | S18 | "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| kubectl delete deletes resources by resources and names. | S20 | "Delete resources by file names, stdin, resources and names, or by resources and label selector" |
| kubectl logs dumps pod logs. | S21 | "kubectl logs my-pod # dump pod logs (stdout)" |
| Persistent volumes exist beyond the lifetime of any individual Pod. | S3 | "persistent volumes exist beyond the lifetime of any individual Pod" |
| Deleting a namespace deletes everything under the namespace. | S14 | "Delete a namespace with kubectl delete namespaces <insert-some-namespace-name>" |
| Deleting a namespace deletes everything under the namespace. | S14 | "This deletes everything under the namespace!" |
| --timeout of kubectl delete is the time to wait before giving up on a delete. | S20 | "The length of time to wait before giving up on a delete" |
| One of the most common ways that clients consume a Service is through a DNS name. | S11 | "One of the most common ways that clients consume a Service is through a DNS name" |
| Debug Services asks: Does the Service exist? Does it work by DNS name? Does it have EndpointSlices? Are the Pods working? | S11 | "Does the Service exist?" |
| Debug Services asks: Does the Service exist? Does it work by DNS name? Does it have EndpointSlices? Are the Pods working? | S11 | "Does the Service work by DNS name?" |
| Debug Services asks: Does the Service exist? Does it work by DNS name? Does it have EndpointSlices? Are the Pods working? | S11 | "Does the Service have any EndpointSlices?" |
| Debug Services asks: Does the Service exist? Does it work by DNS name? Does it have EndpointSlices? Are the Pods working? | S11 | "Are the Pods working?" |
| You can bypass the Service mechanism and go straight to the Pods. | S11 | "you can bypass the Service mechanism and go straight to the Pods" |
| For any kind of volume in a given Pod, data is preserved across container restarts. | S3 | "For any kind of volume in a given Pod, data is preserved across container restarts" |
