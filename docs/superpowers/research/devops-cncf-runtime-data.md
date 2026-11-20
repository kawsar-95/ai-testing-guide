# Research notes: CNCF Projects: Runtime, Scheduling, and Data

Page: `content/devops/cncf-runtime-data.mdx`. Module: DevOps & Cloud. Date: 2026-11-20 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`) on the topic that its shelf named: the CNCF, containerd, the Kubernetes scheduler, and Rook. It covers the CNCF project stages and the maturity of the two projects; containerd (plugins and the smart client, namespaces, the content flow, images, the content store, snapshotters, runtimes and the CRI plugin, what the kubelet requires, garbage collection, registries, and running without root); the scheduler (the choice of a node, binding, node selectors, and a Pod that stays Pending); and Rook (the two Helm charts, the CRDs and the operator, what a CephCluster says, the Ceph terms, the node prerequisites, and how the API server checks a custom resource). The practice run has fifteen steps: the tools; containerd as a normal user; its plugins and defaults; an image fetched into the content store; the digests of that image; a second namespace; garbage collection; a whole pull that fails; the two Rook charts rendered; a kind cluster and its node; a Pod that no node matches; the Rook CRDs; custom resources checked against their schema; the containerd of the node and the deletion of the cluster; and the machine checked against the node prerequisites of Rook.

The practice run of `## Try it` (steps 1 to 15) was recorded on 2026-11-20 00:52:10 +0600 on Linux 7.0.0-43-generic with containerd 2.4.2, runc 1.5.3, Helm v4.3.2, kind v0.33.0, kubectl v1.37.2, Docker 29.10.0, and bash 5.3.9. The kind node ran Kubernetes v1.37.0. containerd, `ctr`, and `runc` come from the package `containerd.io 2.4.2-4~ubuntu.26.04~resolute` that was on the machine. Helm, kind, and kubectl are the ones of the two earlier pages of this module.

The runner ran eight times that day, and the page uses the last run. Between the runs, the tutorial rewrote the parsing of step 5, rewrote steps 3 and 6, and added the `Scheduled` events to step 10, the schema lines to the CRD step, the step that checks the node prerequisites, the `--sync` help line to step 7, and the last line of the pull message to step 8. It also moved the second try of `moved.yaml` in step 13, counted the devices by type in step 15, and, in the last run, added the new step 11 (a Pod that no node matches), the cgroup files of the node to step 14, and the package and process lines to the record of the machine. The runner stops at its start if the node image is missing, or if the cluster `qa-p7b`, a container of that name, a Docker network named `kind`, or another `containerd --config` process already exists. It deletes exactly the cluster that it made and the one network that the run added, and it never prunes. The runs started containerd as a normal user in a new folder, and the runner stopped it by its process ID.

- Step 3: the page does not say why each of the 11 plugins was skipped. It says only that they were.
- Step 7: the first line printed `qa2: 42 blobs` in the last run and `qa2: 0 blobs` in one earlier run. The page says so and does not explain it.
- Step 8: the pull ended with exit status 1 in the last run. The message ends in the middle of a word, and the page says only that. It does not say which call was refused.
- Step 9: the order of the first two rows of `helm search` was not the same in two runs. The page says so.
- Step 11: the message of `FailedScheduling` contains words about preemption. The page quotes them and does not explain them.
- Step 13: `count: 0` was accepted, and the page does not say what the operator does with it, because the tutorial ran no operator.
- Step 15: the page reads the devices by the rule of the Rook docs and says that this reading is its own. It did not run `modprobe rbd`.

The page cites pages of the CNCF, containerd, Kubernetes, Rook, Helm, and kind documentation, and the Image Specification of the Open Container Initiative on GitHub. The CNCF project pages were read on 2026-11-20, and the dates and levels in the page are the ones that they gave that day. The containerd pages on GitHub are pages of the `main` branch. Some quotes are written as `scripts/devops_claimcheck.py` reads them (case, white space, and curly quotes do not count as differences), and a quote that crosses a link text such as `(opens in a new tab)` is split with `||`.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Who we are (Cloud Native Computing Foundation) | https://www.cncf.io/about/who-we-are/ |
| S2 | Graduated and incubating projects (Cloud Native Computing Foundation) | https://www.cncf.io/projects/ |
| S3 | Project stages and the graduation process (CNCF Technical Oversight Committee on GitHub) | https://github.com/cncf/toc/blob/main/process/README.md |
| S4 | containerd (Cloud Native Computing Foundation) | https://www.cncf.io/projects/containerd/ |
| S5 | Rook (Cloud Native Computing Foundation) | https://www.cncf.io/projects/rook/ |
| S6 | containerd (containerd) | https://containerd.io/ |
| S7 | containerd README (containerd on GitHub) | https://github.com/containerd/containerd/blob/main/README.md |
| S8 | Getting started with containerd (containerd Documentation) | https://containerd.io/docs/2.4/getting-started/ |
| S9 | Namespaces and Multi-Tenancy (containerd Documentation) | https://github.com/containerd/containerd/blob/main/docs/namespaces.md |
| S10 | Plugins (containerd Documentation) | https://github.com/containerd/containerd/blob/main/docs/PLUGINS.md |
| S11 | Snapshotters (containerd Documentation) | https://github.com/containerd/containerd/blob/main/docs/snapshotters/README.md |
| S12 | Content Flow (containerd Documentation) | https://github.com/containerd/containerd/blob/main/docs/content-flow.md |
| S13 | Garbage Collection (containerd Documentation) | https://github.com/containerd/containerd/blob/main/docs/garbage-collection.md |
| S14 | Rootless mode (containerd Documentation) | https://github.com/containerd/containerd/blob/main/docs/rootless.md |
| S15 | Architecture of the CRI plugin (containerd Documentation) | https://github.com/containerd/containerd/blob/main/docs/cri/architecture.md |
| S16 | Registry host namespace configuration (containerd Documentation) | https://github.com/containerd/containerd/blob/main/docs/hosts.md |
| S17 | Image Configuration (Open Container Initiative Image Specification on GitHub) | https://github.com/opencontainers/image-spec/blob/main/config.md |
| S18 | Image Manifest (Open Container Initiative Image Specification on GitHub) | https://github.com/opencontainers/image-spec/blob/main/manifest.md |
| S19 | Image Index (Open Container Initiative Image Specification on GitHub) | https://github.com/opencontainers/image-spec/blob/main/image-index.md |
| S20 | Container Runtime Interface (CRI) (Kubernetes Documentation) | https://kubernetes.io/docs/concepts/containers/cri/ |
| S21 | Container Runtimes (Kubernetes Documentation) | https://kubernetes.io/docs/setup/production-environment/container-runtimes/ |
| S22 | Debugging Kubernetes nodes with crictl (Kubernetes Documentation) | https://kubernetes.io/docs/tasks/debug/debug-cluster/crictl/ |
| S23 | Kubernetes Scheduler (Kubernetes Documentation) | https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/ |
| S24 | Custom Resources (Kubernetes Documentation) | https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/ |
| S25 | Extend the Kubernetes API with CustomResourceDefinitions (Kubernetes Documentation) | https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/ |
| S26 | Operator pattern (Kubernetes Documentation) | https://kubernetes.io/docs/concepts/extend-kubernetes/operator/ |
| S27 | kubectl apply (Kubernetes Documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_apply/ |
| S28 | kubectl explain (Kubernetes Documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_explain/ |
| S29 | kubectl wait (Kubernetes Documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_wait/ |
| S30 | Rook (Rook Ceph Documentation) | https://rook.io/docs/rook/latest-release/Getting-Started/intro/ |
| S31 | Glossary (Rook Ceph Documentation) | https://rook.io/docs/rook/latest-release/Getting-Started/glossary/ |
| S32 | Quickstart (Rook Ceph Documentation) | https://rook.io/docs/rook/latest-release/Getting-Started/quickstart/ |
| S33 | Prerequisites (Rook Ceph Documentation) | https://rook.io/docs/rook/latest-release/Getting-Started/Prerequisites/prerequisites/ |
| S34 | Ceph Operator Helm Chart (Rook Ceph Documentation) | https://rook.io/docs/rook/latest-release/Helm-Charts/operator-chart/ |
| S35 | Ceph Cluster Helm Chart (Rook Ceph Documentation) | https://rook.io/docs/rook/latest-release/Helm-Charts/ceph-cluster-chart/ |
| S36 | CephCluster CRD (Rook Ceph Documentation) | https://rook.io/docs/rook/latest-release/CRDs/Cluster/ceph-cluster-crd/ |
| S37 | Ceph Toolbox (Rook Ceph Documentation) | https://rook.io/docs/rook/latest-release/Troubleshooting/ceph-toolbox/ |
| S38 | Ceph Common Issues (Rook Ceph Documentation) | https://rook.io/docs/rook/latest-release/Troubleshooting/ceph-common-issues/ |
| S39 | helm template (Helm Documentation) | https://helm.sh/docs/helm/helm_template/ |
| S40 | Quick Start (kind Documentation) | https://kind.sigs.k8s.io/docs/user/quick-start/ |
| S41 | Assigning Pods to Nodes (Kubernetes Documentation) | https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/ |

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
| The CNCF page says that containerd was accepted on March 29, 2017 at the Incubating maturity level | S4 | "containerd was accepted to CNCF on March 29, 2017 at the Incubating maturity level" |
| containerd moved to the Graduated maturity level on February 28, 2019 | S4 | "then moved to the Graduated maturity level on February 28, 2019." |
| The CNCF Rook page says that Rook was accepted on January 29, 2018 | S5 | "Rook was accepted to CNCF on January 29, 2018" |
| Rook moved to the Incubating maturity level on September 25, 2018 | S5 | "moved to the Incubating maturity level on September 25, 2018" |
| Rook moved to the Graduated maturity level on October 7, 2020 | S5 | "then moved to the Graduated maturity level on October 7, 2020." |
| The project pages call containerd an open and reliable container runtime | S4 | "An open and reliable container runtime" |
| The project pages call containerd an open and reliable container runtime , and Rook storage orchestration for Kubernetes | S5 | "Storage Orchestration for Kubernetes" |
| containerd calls itself an industry-standard container runtime with an emphasis on simplicity, robustness and portability | S6 | "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| The README says that it is available as a daemon for Linux and Windows | S7 | "It is available as a daemon for Linux and Windows" |
| The daemon can manage the complete container lifecycle of its host system | S7 | "which can manage the complete container lifecycle of its host system: image transfer and storage, container execution and supervision, low-level storage and network attachments, etc." |
| The README also says that containerd is designed to be embedded into a larger system, rather than being used directly by developers or end-users | S7 | "containerd is designed to be embedded into a larger system, rather than being used directly by developers or end-users." |
| The Kubernetes docs say that you need a working container runtime on each Node, so that the kubelet can launch Pods and their containers | S20 | "You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers." |
| The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and the container runtime | S20 | "The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and Container Runtime." |
| The containerd docs say that containerd has built-in support for the CRI | S8 | "containerd has built-in support for Kubernetes Container Runtime Interface (CRI)." |
| They say that containerd operates on the same node as the kubelet, and that its cri plugin handles all CRI service requests from the kubelet | S15 | "Containerd operates on the same node as the Kubelet. The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| kube-scheduler is the default scheduler for Kubernetes, and it runs as part of the control plane | S23 | "kube-scheduler is the default scheduler for Kubernetes and runs as part of the control plane." |
| A scheduler watches for newly created Pods that have no Node assigned | S23 | "A scheduler watches for newly created Pods that have no Node assigned." |
| It finds the feasible Nodes for a Pod, scores them, and picks a Node with the highest score | S23 | "The scheduler finds feasible Nodes for a Pod and then runs a set of functions to score the feasible Nodes and picks a Node with the highest score among the feasible ones to run the Pod." |
| Rook is an open source cloud-native storage orchestrator | S30 | "Rook is an open source cloud-native storage orchestrator, providing the platform, framework, and support for Ceph storage to natively integrate with cloud-native environments." |
| Ceph is a distributed storage system that provides file, block and object storage | S30 | "Ceph is a distributed storage system that provides file, block and object storage and is deployed in large scale production clusters." |
| Rook automates deployment and management of Ceph to provide self-managing, self-scaling, and self-healing storage services | S30 | "Rook automates deployment and management of Ceph to provide self-managing, self-scaling, and self-healing storage services." |
| The Rook operator does this by building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph | S30 | "The Rook operator does this by building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| A custom resource is an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation | S24 | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation." |
| The CustomResourceDefinition API resource allows you to define custom resources | S24 | "The CustomResourceDefinition API resource allows you to define custom resources." |
| Operators are clients of the Kubernetes API that act as controllers for a Custom Resource | S26 | "Operators are clients of the Kubernetes API that act as controllers for a Custom Resource." |
| The most common way to deploy an operator is to add the Custom Resource Definition and its associated Controller to your cluster | S26 | "The most common way to deploy an operator is to add the Custom Resource Definition and its associated Controller to your cluster." |
| The Rook glossary says that the CephCluster CRD is used by Rook to allow creation and customization of storage clusters | S31 | "The CephCluster CRD is used by Rook to allow creation and customization of storage clusters through the custom resource definitions (CRDs)." |
| containerd supports extending its functionality using most of its defined interfaces | S10 | "containerd supports extending its functionality using most of its defined interfaces." |
| This includes using a customized runtime, snapshotter, content store, and even adding gRPC interfaces | S10 | "This includes using a customized runtime, snapshotter, content store, and even adding gRPC interfaces." |
| containerd uses plugins internally, so that its internal implementations are decoupled, stable, and treated equally with external plugins | S10 | "containerd uses plugins internally to ensure that internal implementations are decoupled, stable, and treated equally with external plugins." |
| To see all the plugins, use ctr plugins ls | S10 | "To see all the plugins containerd has, use ctr plugins ls" |
| In the output, you can see all the plugins, also those that did not load successfully | S10 | "From the output all the plugins can be seen as well those which did not successfully load." |
| containerd has a smart client architecture, meaning that any functionality that the daemon does not require is done by the client | S10 | "containerd has a smart client architecture, meaning any functionality which is not required by the daemon is done by the client." |
| That includes most high level interactions, such as creating a container's specification, interacting with an image registry, and loading an image from tar | S10 | "This includes most high level interactions such as creating a container's specification, interacting with an image registry, or loading an image from tar." |
| containerd offers a fully namespaced API, so that multiple consumers can use a single containerd instance without conflicting with one another | S9 | "containerd offers a fully namespaced API so multiple consumers can all use a single containerd instance without conflicting with one another." |
| Underlying image content is still shared via content addresses, but image names and metadata are separate per namespace | S9 | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| The docs call namespaces an administrative construct that is not meant to be used as a security feature | S9 | "namespaces, as implemented, is an administrative construct that is not meant to be used as a security feature." |
| They add that it is trivial for clients to switch namespaces | S9 | "It is trivial for clients to switch namespaces." |
| If you do not provide a namespace, ctr client commands use the default namespace, which is named "default" | S9 | "If you do not provide a namespace, ctr client commands will all use the default namespace, which is simply named" |
| The --namespace or -n flag of ctr changes it | S9 | "Simply set the --namespace,-n flag on ctr to change the namespace." |
| The containerd docs list several command line projects for interacting with containerd | S8 | "There are several command line interface (CLI) projects for interacting with containerd:" |
| The ctr tool is bundled together with containerd, and the docs note that it is solely made for debugging containerd | S8 | "While the ctr tool is bundled together with containerd, it should be noted the ctr tool is solely made for debugging containerd." |
| The docs say that the nerdctl tool provides a stable and human-friendly user experience | S8 | "The nerdctl tool provides stable and human-friendly user experience." |
| The Kubernetes docs say that crictl is a command-line interface for CRI-compatible container runtimes | S22 | "crictl is a command-line interface for CRI-compatible container runtimes." |
| You can use it to inspect and debug container runtimes and applications on a Kubernetes node | S22 | "You can use it to inspect and debug container runtimes and applications on a Kubernetes node." |
| Content exists in several areas in the containerd lifecycle | S12 | "Content exists in several areas in the containerd lifecycle" |
| They are an OCI registry, the containerd content store, and snapshots | S12 | "OCI registry, for example hub.docker.com or quay.io containerd content store" |
| To create a container, the image and all its content must be loaded into the local content store | S12 | "The image and all its content must be loaded into the local content store." |
| The layers must then be read and applied to a filesystem, which creates a committed snapshot | S12 | "The layers from the image must be read and applied to a filesystem, creating what is known as a "committed snapshot"." |
| This process is known as unpacking | S12 | "This process is known as "unpacking"." |
| A final mutable mountable filesystem, an active snapshot, must be created on top of the final layer | S12 | "A final mutable mountable filesystem, an "active snapshot", must be created on top of the final layer of content for the image." |
| A container can then be created with its root filesystem as the active snapshot | S12 | "A container now can be created, with its root filesystem as the active snapshot." |
| The content-flow doc says that an image is comprised of a JSON document known as a descriptor | S12 | "An "image" is comprised of a JSON document known as a descriptor." |
| A descriptor always contains an element, mediaType, which tells us which type it is | S12 | "A descriptor always contains an element, mediaType, which tells us which type it is." |
| The mediaType is a manifest or an index | S12 | "It is one of two options: a "manifest"" |
| The mediaType is a manifest or an index | S12 | "an "index"" |
| The OCI spec says that an image manifest provides a configuration and a set of layers for a single container image for a specific architecture and operating system | S18 | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| An image index contains a list of manifests for specific platforms | S19 | "manifests array of objects This REQUIRED property contains a list of manifests for specific platforms." |
| The purpose of an index is to pick the manifest that matches the target platform | S12 | "The purpose of an index is to allow us to pick which manifest matches our target platform." |
| A layer DiffID is the digest over the layer's uncompressed tar archive | S17 | "A layer DiffID is the digest over the layer's uncompressed tar archive and serialized in the descriptor digest format" |
| The spec warns not to confuse DiffIDs with layer digests, which are often referenced in the manifest | S17 | "Do not confuse DiffIDs with layer digests, often referenced in the manifest, which are digests over compressed or uncompressed content." |
| When content is loaded into the content store, it is stored very similarly to how the registry stores it | S12 | "When content is loaded into containerd's content store, it stores them very similarly to how the registry does." |
| Each component is stored in a file whose name is the hash of it | S12 | "Each component is stored in a file whose name is the hash of it." |
| Snapshotters manage the snapshots of the container filesystems | S11 | "Snapshotters manage the snapshots of the container filesystems." |
| The overlayfs snapshotter is the default, and it is akin to the "overlay2" storage driver of Docker | S11 | "overlayfs (default): OverlayFS. This driver is akin to Docker/Moby's "overlay2" storage driver, but containerd's implementation is not called "overlay2"." |
| The native snapshotter is a native file copying driver, akin to the "vfs" driver of Docker | S11 | "native: Native file copying driver. Akin to Docker/Moby's "vfs" driver." |
| The available snapshotters can be inspected by running ctr plugins ls or nerdctl info | S11 | "The available snapshotters can be inspected by running ctr plugins ls or nerdctl info." |
| containerd supports multiple container runtimes, and each container can be invoked with a different runtime | S10 | "containerd supports multiple container runtimes. Each container can be invoked with a different runtime." |
| It invokes v2 runtimes as binaries on the system, which are used to start the shim process | S10 | "containerd invokes v2 runtimes as binaries on the system, which are used to start the shim process for containerd." |
| The README says that most interactions with the Linux and Windows container feature sets are handled via runc and/or OS-specific libraries | S7 | "Most interactions with the Linux and Windows container feature sets are handled via runc and/or OS-specific libraries" |
| The CRI plugin handles the requests of the kubelet, and it manages pod networking via CNI, another CNCF project | S15 | "As also shown below, cri manages pod networking via CNI (another CNCF project)." |
| When the kubelet creates a pod, the plugin creates the pod's network namespace and configures it with CNI | S15 | "cri creates the pod’s network namespace, and then configures it using CNI" |
| It then creates a special pause container, the sandbox container | S15 | "cri uses containerd internal to create and start a special pause container (the sandbox container)" |
| Later it pulls the application image if the image is not present on the node | S15 | "cri further uses containerd to pull the image if the image is not present on the node" |
| The kubelet acts as a client when it connects to the container runtime through gRPC | S20 | "The kubelet acts as a client when connecting to the container runtime via gRPC." |
| For Kubernetes v1.26 and later, the kubelet requires that the container runtime supports the v1 CRI API | S20 | "For Kubernetes v1.26 and later, the kubelet requires that the container runtime supports the v1 CRI API." |
| If a container runtime does not support the v1 API, the kubelet will not register the node | S20 | "If a container runtime does not support the v1 API, the kubelet will not register the node." |
| The kubelet and the container runtime need a cgroup driver to interface with control groups | S21 | "To interface with control groups, the kubelet and the container runtime need to use a cgroup driver." |
| The docs say that it is critical that both use the same cgroup driver and are configured the same | S21 | "It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| In the containerd configuration, the docs show SystemdCgroup = true in the options of the runc runtime | S21 | "SystemdCgroup = true" |
| They say that the systemd cgroup driver is recommended if you use cgroup v2 | S21 | "The systemd cgroup driver is recommended if you use cgroup v2." |
| The containerd garbage collector is scheduled on a background goroutine, and it runs based on a number of configurable factors | S13 | "The garbage collector (gc) is scheduled on a background goroutine and runs based on a number of configurable factors." |
| A client can also request a garbage collection while it removes a resource | S13 | "the client may also request a garbage collection during resource removal." |
| The service will not return until the garbage collection has completed | S13 | "The service will not return until the garbage collection has completed." |
| This is currently supported on removal of images and leases | S13 | "This is currently supported on removal of images and leases." |
| For registries, containerd reads an optional hosts.toml file for each registry host, from a configuration directory | S16 | "Configuring registries, for these clients, will be done by specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| If a host differs from the registry host namespace, such as a mirror, containerd appends the registry host namespace to requests as a query parameter called ns | S16 | "If a host is configured that's different to the registry host namespace (e.g. a mirror), then containerd will append the registry host namespace to requests as a query parameter called ns." |
| The containerd docs say that a non-root user can execute containerd by using user_namespaces(7) | S14 | "A non-root user can execute containerd by using user_namespaces(7)." |
| They name RootlessKit as one tool that can set up a user namespace, with a mount namespace and optionally a network namespace | S14 | "For example RootlessKit can be used for setting up a user namespace (along with mount namespace and optionally network namespace)." |
| They say that you need to provide a config.toml with your own path configuration | S14 | "You need to provide config.toml with your own path configuration." |
| They also say that a client such as ctr needs to run inside the daemon namespaces | S14 | "A client program such as ctr also needs to be executed inside the daemon namespaces." |
| In Kubernetes, scheduling refers to making sure that Pods are matched to Nodes so that the kubelet can run them | S23 | "In Kubernetes, scheduling refers to making sure that Pods are matched to Nodes so that Kubelet can run them." |
| For every Pod that the scheduler discovers, it becomes responsible for finding the best Node for that Pod to run on | S23 | "For every Pod that the scheduler discovers, the scheduler becomes responsible for finding the best Node for that Pod to run on." |
| If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it | S23 | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| The scheduler then notifies the API server about its decision in a process called binding | S23 | "The scheduler then notifies the API server about this decision in a process called binding." |
| You can use the nodeSelector field, which matches against node labels, as one of the methods to choose where Kubernetes schedules specific Pods | S41 | "You can use any of the following methods to choose where Kubernetes schedules specific Pods: nodeSelector field matching against node labels" |
| A nodeSelector only selects nodes with all the specified labels | S41 | "nodeSelector only selects nodes with all the specified labels." |
| Kubernetes also populates a standard set of labels on all nodes in a cluster | S41 | "Kubernetes also populates a standard set of labels on all nodes in a cluster." |
| Affinity and anti-affinity expand the types of constraints that you can define | S41 | "Affinity and anti-affinity expand the types of constraints you can define." |
| You can indicate that such a rule is soft or preferred | S41 | "You can indicate that a rule is soft or preferred" |
| With a soft rule, the scheduler still schedules the Pod even if it can't find a matching node | S41 | "so that the scheduler still schedules the Pod even if it can't find a matching node" |
| The Rook docs describe a Ceph Operator Helm chart, which installs Rook to create, configure, and manage Ceph clusters on Kubernetes | S34 | "Installs rook to create, configure, and manage Ceph clusters on Kubernetes." |
| The chart bootstraps a rook-ceph-operator deployment | S34 | "This chart bootstraps a rook-ceph-operator deployment on a Kubernetes cluster using the Helm package manager." |
| The docs list three steps: install the Helm chart, install the Ceph-CSI drivers chart so CSI can provision and mount volumes, and create a Rook cluster | S34 | "Install the Ceph-CSI drivers chart so CSI can provision and mount volumes" |
| A second chart, the Ceph Cluster chart, is a simple packaging of templates that optionally create Rook resources | S35 | "This chart is a simple packaging of templates that will optionally create Rook resources such as:" |
| Those resources are CephCluster, CephFilesystem, and CephObjectStore custom resources, storage classes, an ingress for the dashboard, and a toolbox | S35 | "CephCluster, CephFilesystem, and CephObjectStore CRs Storage classes to expose Ceph RBD volumes, CephFS volumes, and RGW buckets Ingress for external access to the dashboard Toolbox" |
| The default values create one block pool, one filesystem, and one object store, with their storage classes | S35 | "The default values for cephBlockPools, cephFileSystems, and CephObjectStores will create one of each, and their corresponding storage classes." |
| It says whether the Helm chart should create and update the CRDs | S34 | "Whether the helm chart should create and update the CRDs." |
| If it is false, the CRDs must be managed independently with deploy/examples/crds.yaml | S34 | "If false, the CRDs must be managed independently with deploy/examples/crds.yaml." |
| The docs warn to set it only during first deployment, and say that if it is later disabled the cluster may be destroyed | S34 | "WARNING Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| The quickstart also starts with the CRDs: kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml, and then kubectl create -f operator.yaml | S32 | "kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml kubectl create -f operator.yaml" |
| It says that Kubernetes versions v1.32 through v1.37 are supported | S32 | "Kubernetes versions v1.32 through v1.37 are supported." |
| The CephCluster CRD docs say that count sets the number of mons to be started | S36 | "count: Set the number of mons to be started." |
| The number must be between 1 and 9 | S36 | "The number must be between 1 and 9." |
| They say that the recommended value is most commonly 3 | S36 | "The recommended value is most commonly 3." |
| For highest availability, an odd number of mons should be specified | S36 | "For highest availability, an odd number of mons should be specified." |
| To maintain quorum, a majority of mons must be up | S36 | "To maintain quorum a majority of mons must be up." |
| The dataDirHostPath is the path on the host where config and data should be stored for each of the services | S36 | "dataDirHostPath: The path on the host (hostPath) where config and data should be stored for each of the services." |
| The docs warn that for test scenarios, if you delete a cluster and start a new one on the same hosts, the path must be deleted | S36 | "WARNING: For test scenarios, if you delete a cluster and start a new cluster on the same hosts, the path used by dataDirHostPath must be deleted." |
| Otherwise stale keys and other config remain, and the new mons will fail to start | S36 | "Otherwise, stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| The Rook glossary names a few Ceph terms: Ceph Monitor (MON), Ceph Manager (MGR), Ceph Metadata Server (MDS), Object Storage Device (OSD), RADOS Block Device (RBD), and Ceph Object Gateway (RGW) | S31 | "Ceph Monitor (MON) Ceph Manager (MGR) Ceph Metadata Server (MDS) Object Storage Device (OSD) RADOS Block Device (RBD) Ceph Object Gateway (RGW)" |
| To configure the Ceph storage cluster, at least one of these local storage types is required: raw devices, raw partitions, LVM logical volumes, or persistent volumes from a storage class in block mode | S33 | "To configure the Ceph storage cluster, at least one of these local storage types is required:" |
| Raw devices have no partitions or formatted filesystems, and raw partitions and LVM logical volumes have no formatted filesystem | S33 | "Raw devices (no partitions or formatted filesystems) Raw partitions (no formatted filesystem) LVM Logical Volumes (no formatted filesystem)" |
| To check, run lsblk -f: if the FSTYPE field is not empty, there is a filesystem on top of the corresponding device | S33 | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| A running udev daemon is required on all storage nodes | S33 | "A running udev daemon is required on all storage nodes." |
| Ceph requires a Linux kernel built with the RBD module | S33 | "Ceph requires a Linux kernel built with the RBD module." |
| If you create RWX volumes from a Ceph shared file system (CephFS), the recommended minimum kernel version is 4.17 | S33 | "If creating RWX volumes from a Ceph shared file system (CephFS), the recommended minimum kernel version is 4.17." |
| The Kubernetes docs say that custom resources are validated via OpenAPI v3.0 schemas | S25 | "Custom resources are validated via OpenAPI v3.0 schemas" |
| They are also validated by x-kubernetes-validations, when the Validation Rules feature is enabled | S25 | "by x-kubernetes-validations when the Validation Rules feature is enabled" |
| You can add more validation using admission webhooks | S25 | "you can add additional validation using admission webhooks." |
| The x-kubernetes-validations extension can be used to validate custom resources with Common Expression Language (CEL) expressions | S25 | "The x-kubernetes-validations extension can be used to validate custom resources using Common Expression Language (CEL) expressions" |
| A rule that refers to oldSelf is a transition rule | S25 | "A rule that contains an expression referencing the identifier oldSelf is implicitly considered a transition rule." |
| Transition rules apply only to operations that meet certain criteria | S25 | "transition rules apply only to operations meeting the following criteria" |
| The operation updates an existing object | S25 | "The operation updates an existing object." |
| Transition rules never apply to create operations | S25 | "Transition rules never apply to create operations." |
| Both an old and a new value exist | S25 | "Both an old and a new value exist." |
| If you specify a field that the API server does not recognize, the unknown field is pruned before it is persisted | S25 | "if you specify a field that the API server does not recognize, the unknown field is pruned (removed) before being persisted." |
| A schema can opt out of pruning for a sub-tree of fields with x-kubernetes-preserve-unknown-fields: true | S25 | "It is possible though to opt-out of that for specific sub-trees of fields by adding x-kubernetes-preserve-unknown-fields: true in the structural OpenAPI v3 validation schema." |
| Because the schemas are published to clients, kubectl also checks for unknown fields and rejects those objects well before they would be sent to the API server | S25 | "Because the OpenAPI validation schemas are also published to clients, kubectl also checks for unknown fields and rejects those objects well before they would be sent to the API server." |
| kubectl apply --dry-run=server submits a server-side request without persisting the resource | S27 | "If server strategy, submit server-side request without persisting the resource." |
| The --validate flag defaults to strict | S27 | "Default: "strict"" |
| The docs say that "true" or "strict" use a schema to validate the input and fail the request if it is invalid | S27 | ""true" or "strict" will use a schema to validate the input and fail the request if invalid." |
| They say that it performs server side validation if ServerSideFieldValidation is enabled on the API server | S27 | "It will perform server side validation if ServerSideFieldValidation is enabled on the api-server" |
| It falls back to less reliable client-side validation if not | S27 | "but will fall back to less reliable client-side validation if not." |
| The --server-side flag makes apply run in the server instead of the client | S27 | "If true, apply runs in the server instead of the client." |
| The kubectl wait command waits until the specified condition is seen in the Status field of every given resource | S29 | "waits until the specified condition is seen in the Status field of every given resource." |
| The Kubernetes docs say that kubectl consumes the published schema for client-side validation and for kubectl explain on custom resources | S25 | "The kubectl command-line tool consumes the published schema to perform client-side validation (kubectl create and kubectl apply), schema explanation (kubectl explain) on custom resources." |
| For kubectl get, the API server decides which columns are shown, and a CRD can customize them | S25 | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns for a CustomResourceDefinition." |
| The rootless page of the containerd docs sets the variable in the same way | S14 | "export CONTAINERD_ADDRESS=/run/user/1001/containerd/containerd.sock" |
| The containerd docs say that the containerd.io packages in DEB and RPM formats are distributed by Docker, not by the containerd project | S8 | "The containerd.io packages in DEB and RPM formats are distributed by Docker (not by the containerd project)." |
| They say that the containerd.io package contains runc too, but does not contain CNI plugins | S8 | "The containerd.io package contains runc too, but does not contain CNI plugins." |
| The docs say that you need to provide a config.toml with your own path configuration | S14 | "You need to provide config.toml with your own path configuration." |
| The docs say that you can see all the plugins in the output, also those that did not load successfully | S10 | "From the output all the plugins can be seen as well those which did not successfully load." |
| The cri plugin is the part of containerd that handles all CRI requests of the kubelet | S15 | "The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| To use the systemd cgroup driver with runc, the Kubernetes docs say to set SystemdCgroup = true | S21 | "To use the systemd cgroup driver in /etc/containerd/config.toml with runc, set the following config based on your Containerd version" |
| To use the systemd cgroup driver with runc, the Kubernetes docs say to set SystemdCgroup = true | S21 | "SystemdCgroup = true" |
| They say that it is critical that the kubelet and the container runtime use the same cgroup driver | S21 | "It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| The OCI spec says that an image index contains a list of manifests for specific platforms | S19 | "manifests array of objects This REQUIRED property contains a list of manifests for specific platforms." |
| The content-flow doc describes this choice: if the descriptor is an index, find the platform in it, and use that hash to retrieve the manifest | S12 | "If the descriptor is an index, find in it the platform (architecture+os) that represents the platform on which we want to run the container, use that hash to retrieve the manifest" |
| The OCI spec says that an image manifest provides a configuration and a set of layers for a single container image | S18 | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| The docs say that each component is stored in a file whose name is the hash of it | S12 | "Each component is stored in a file whose name is the hash of it." |
| The OCI spec says that a layer DiffID is the digest over the layer's uncompressed tar archive | S17 | "A layer DiffID is the digest over the layer's uncompressed tar archive and serialized in the descriptor digest format" |
| The content-flow doc says that you can get the hash of a layer when uncompressed with cat \| gunzip - \| sha256sum - | S12 | "the value of the label gives the hash of them when uncompressed. You can get the same value by doing:" |
| The content-flow doc says that you can get the hash of a layer when uncompressed with cat \| gunzip - \| sha256sum - | S12 | "\| gunzip - \| sha256sum -" |
| The spec says not to confuse DiffIDs with layer digests, which are often referenced in the manifest | S17 | "Do not confuse DiffIDs with layer digests, often referenced in the manifest, which are digests over compressed or uncompressed content." |
| The docs say that underlying image content is shared via content addresses, but image names and metadata are separate per namespace | S9 | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| The docs say that the garbage collector is scheduled on a background goroutine, and that it runs based on a number of configurable factors | S13 | "The garbage collector (gc) is scheduled on a background goroutine and runs based on a number of configurable factors." |
| The docs say that an OCI image has a manifest that references a config file and layer tars, that containerd stores them as generic blobs, and that the client sets up the relations with labels on the content | S13 | "For example, an OCI image has a manifest which references a config file and layer tars. These resources are stored in containerd as generic blobs, it is the client that understands the relationships between these blobs and sets them up using labels on the content resources." |
| The docs also say that a client may also request a garbage collection during resource removal | S13 | "the client may also request a garbage collection during resource removal." |
| They say that the service will not return until the garbage collection has completed | S13 | "The service will not return until the garbage collection has completed." |
| They say that this is currently supported on removal of images and leases | S13 | "This is currently supported on removal of images and leases." |
| The content-flow doc says that the layers must be read and applied to a filesystem, which creates a committed snapshot, and that this process is known as unpacking | S12 | "The layers from the image must be read and applied to a filesystem, creating what is known as a "committed snapshot"." |
| The content-flow doc says that the layers must be read and applied to a filesystem, which creates a committed snapshot, and that this process is known as unpacking | S12 | "This process is known as "unpacking"." |
| The docs say that a non-root user can execute containerd by using user_namespaces(7) | S14 | "A non-root user can execute containerd by using user_namespaces(7)." |
| The docs say that a container can be created with the active snapshot as its root filesystem | S12 | "A container now can be created, with its root filesystem as the active snapshot." |
| helm template renders chart templates locally and displays the output | S39 | "Render chart templates locally and display the output." |
| The docs say that the chart bootstraps a rook-ceph-operator deployment | S34 | "This chart bootstraps a rook-ceph-operator deployment on a Kubernetes cluster using the Helm package manager." |
| The docs say that the default values create one block pool, one filesystem, and one object store, and their storage classes | S35 | "The default values for cephBlockPools, cephFileSystems, and CephObjectStores will create one of each, and their corresponding storage classes." |
| The docs say that the clusters can be installed into the same namespace as the operator or a separate namespace | S35 | "The clusters can be installed into the same namespace as the operator or a separate namespace." |
| kind runs a local Kubernetes cluster by using Docker containers as nodes | S40 | "kind runs a local Kubernetes cluster by using Docker containers as “nodes”." |
| for another node image | S40 | "To specify another image use the --image flag – kind create cluster --image=...." |
| The Kubernetes docs say that Kubernetes 1.37 requires a runtime that conforms with the Container Runtime Interface (CRI) | S21 | "Kubernetes 1.37 requires that you use a runtime that conforms with the Container Runtime Interface (CRI)." |
| kube-scheduler is the default scheduler, and it runs as part of the control plane | S23 | "kube-scheduler is the default scheduler for Kubernetes and runs as part of the control plane." |
| A scheduler watches for newly created Pods that have no Node assigned | S23 | "A scheduler watches for newly created Pods that have no Node assigned." |
| The docs say that nodeSelector is the simplest recommended form of node selection constraint | S41 | "nodeSelector is the simplest recommended form of node selection constraint." |
| They say that Kubernetes only schedules the Pod onto nodes that have each of the labels you specify | S41 | "Kubernetes only schedules the Pod onto nodes that have each of the labels you specify." |
| The docs say that if none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it | S23 | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| The docs say that nodes have labels, and that you can attach labels manually | S41 | "Like many other Kubernetes objects, nodes have labels. You can attach labels manually." |
| The scheduler notifies the API server about its decision in a process called binding | S23 | "The scheduler then notifies the API server about this decision in a process called binding." |
| helm template --show-only templates/resources.yaml shows only the manifests that this template renders | S39 | "only show manifests rendered from the given templates" |
| kubectl apply --server-side makes the apply run in the server instead of the client | S27 | "If true, apply runs in the server instead of the client." |
| The docs say that the command waits until the specified condition is seen in the Status field of every given resource | S29 | "waits until the specified condition is seen in the Status field of every given resource." |
| The Kubernetes docs say that once a custom resource is installed, users can create and access its objects using kubectl, just as for built-in resources like Pods | S24 | "Once a custom resource is installed, users can create and access its objects using kubectl, just as they do for built-in resources like Pods." |
| The docs say that kubectl explain describes the fields of each supported API resource | S28 | "This command describes the fields associated with each supported API resource." |
| The Rook docs say that the number must be between 1 and 9 | S36 | "The number must be between 1 and 9." |
| The x-kubernetes-validations extension can be used to validate custom resources with Common Expression Language (CEL) expressions | S25 | "The x-kubernetes-validations extension can be used to validate custom resources using Common Expression Language (CEL) expressions" |
| A rule that refers to oldSelf is a transition rule | S25 | "A rule that contains an expression referencing the identifier oldSelf is implicitly considered a transition rule." |
| Each --dry-run=server submits a server-side request without persisting the resource | S27 | "If server strategy, submit server-side request without persisting the resource." |
| The CRD has "minimum": 0, and the Rook docs say that the number must be between 1 and 9 | S36 | "The number must be between 1 and 9." |
| The --validate flag of kubectl apply defaults to strict | S27 | "Default: "strict"" |
| The docs say that "true" or "strict" use a schema to validate the input and fail the request if it is invalid | S27 | ""true" or "strict" will use a schema to validate the input and fail the request if invalid." |
| The docs say that the API server decides which columns kubectl get shows, and that a CRD can customize them | S25 | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns for a CustomResourceDefinition." |
| The docs say that transition rules never apply to create operations | S25 | "Transition rules never apply to create operations." |
| The kind docs say that you can get a list of images on a cluster node with docker exec -it my-node-name crictl images | S40 | "You can get a list of images present on a cluster node by using docker exec: docker exec -it my-node-name crictl images" |
| The Kubernetes docs say that you can use crictl to inspect and debug container runtimes and applications on a Kubernetes node | S22 | "You can use it to inspect and debug container runtimes and applications on a Kubernetes node." |
| The docs say that it is critical that the kubelet and the container runtime use the same cgroup driver | S21 | "It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| The namespace default, which ctr uses when you give none | S9 | "If you do not provide a namespace, ctr client commands will all use the default namespace, which is simply named" |
| crictl answered in the node, and the docs call it a command-line interface for CRI-compatible container runtimes | S22 | "crictl is a command-line interface for CRI-compatible container runtimes." |
| The Rook prerequisites page names lsblk -f to confirm whether the partitions or devices are formatted with filesystems | S33 | "Confirm whether the partitions or devices are formatted with filesystems with the following command:" |
| The docs say that if the FSTYPE field is not empty, there is a filesystem on top of the corresponding device | S33 | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| The Rook troubleshooting docs say that if Rook determines that a device is not available (has existing partitions or a formatted filesystem), Rook will skip consuming the devices | S38 | "if Rook determines that a device is not available (has existing partitions or a formatted filesystem), Rook will skip consuming the devices." |
| The docs recommend a minimum kernel version of 4.17 if you create RWX volumes from CephFS | S33 | "If creating RWX volumes from a Ceph shared file system (CephFS), the recommended minimum kernel version is 4.17." |
| The docs say that Ceph requires a Linux kernel built with the RBD module, and that you can test your nodes by running modprobe rbd | S33 | "Ceph requires a Linux kernel built with the RBD module." |
| The docs say that Ceph requires a Linux kernel built with the RBD module, and that you can test your nodes by running modprobe rbd | S33 | "Test your Kubernetes nodes by running modprobe rbd." |
| The docs say that a running udev daemon is required on all storage nodes | S33 | "A running udev daemon is required on all storage nodes." |
| The docs say that you need a working container runtime on each Node, so that the kubelet can launch Pods and their containers | S20 | "You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers." |
| For Kubernetes v1.26 and later, the kubelet requires that the container runtime supports the v1 CRI API | S20 | "For Kubernetes v1.26 and later, the kubelet requires that the container runtime supports the v1 CRI API." |
| If a container runtime does not support the v1 API, the kubelet will not register the node | S20 | "If a container runtime does not support the v1 API, the kubelet will not register the node." |
| The kubelet and the container runtime need a cgroup driver to interface with control groups | S21 | "To interface with control groups, the kubelet and the container runtime need to use a cgroup driver." |
| The cgroupfs driver is the default cgroup driver in the kubelet | S21 | "The cgroupfs driver is the default cgroup driver in the kubelet." |
| The systemd cgroup driver is recommended if you use cgroup v2 | S21 | "The systemd cgroup driver is recommended if you use cgroup v2." |
| It is critical that both use the same driver | S21 | "It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| crictl is a command-line interface for CRI-compatible container runtimes | S22 | "crictl is a command-line interface for CRI-compatible container runtimes." |
| You can use it to inspect and debug container runtimes and applications on a Kubernetes node | S22 | "You can use it to inspect and debug container runtimes and applications on a Kubernetes node." |
| The docs note that the ctr tool is solely made for debugging containerd | S8 | "While the ctr tool is bundled together with containerd, it should be noted the ctr tool is solely made for debugging containerd." |
| If you do not provide a namespace, ctr client commands use the namespace default | S9 | "If you do not provide a namespace, ctr client commands will all use the default namespace, which is simply named" |
| Each component of an image is stored in a file whose name is the hash of it | S12 | "Each component is stored in a file whose name is the hash of it." |
| An image index contains a list of manifests for specific platforms | S19 | "manifests array of objects This REQUIRED property contains a list of manifests for specific platforms." |
| A manifest provides a configuration and a set of layers for a single container image for a specific architecture and operating system | S18 | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| DiffIDs are not to be confused with layer digests, which are often referenced in the manifest | S17 | "Do not confuse DiffIDs with layer digests, often referenced in the manifest, which are digests over compressed or uncompressed content." |
| The docs say that the garbage collector is scheduled on a background goroutine, and that it runs based on a number of configurable factors | S13 | "The garbage collector (gc) is scheduled on a background goroutine and runs based on a number of configurable factors." |
| containerd reads an optional hosts.toml file for each registry host, from a configuration directory | S16 | "Configuring registries, for these clients, will be done by specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| If a host differs from the registry host namespace, such as a mirror, containerd appends the registry host namespace to requests as a query parameter called ns | S16 | "If a host is configured that's different to the registry host namespace (e.g. a mirror), then containerd will append the registry host namespace to requests as a query parameter called ns." |
| A scheduler watches for newly created Pods that have no Node assigned | S23 | "A scheduler watches for newly created Pods that have no Node assigned." |
| If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it | S23 | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| Custom resources are validated via OpenAPI v3.0 schemas, and by x-kubernetes-validations when the Validation Rules feature is enabled | S25 | "Custom resources are validated via OpenAPI v3.0 schemas, by x-kubernetes-validations when the Validation Rules feature is enabled" |
| kubectl apply --dry-run=server submits a server-side request without persisting the resource | S27 | "If server strategy, submit server-side request without persisting the resource." |
| The Rook docs say that the number of mons must be between 1 and 9 | S36 | "The number must be between 1 and 9." |
| The docs also say that for highest availability, an odd number of mons should be specified | S36 | "For highest availability, an odd number of mons should be specified." |
| To configure the Ceph storage cluster, at least one of these local storage types is required: raw devices, raw partitions, LVM logical volumes, or persistent volumes from a storage class in block mode | S33 | "To configure the Ceph storage cluster, at least one of these local storage types is required:" |
| If Rook determines that a device is not available (it has existing partitions or a formatted filesystem), Rook will skip consuming the devices | S38 | "if Rook determines that a device is not available (has existing partitions or a formatted filesystem), Rook will skip consuming the devices." |
| To see if a device was skipped, view the OSD preparation log on the node where the device was skipped | S38 | "To see if a device was skipped, view the OSD preparation log on the node where the device was skipped." |
| The Rook toolbox is a container with common tools used for rook debugging and testing | S37 | "The Rook toolbox is a container with common tools used for rook debugging and testing." |
| Its example commands are ceph status, ceph osd status, ceph df, and rados df | S37 | "Example: ceph status ceph osd status ceph df rados df" |
| There are no OSDs in the cluster, or the CSI provisioner pod is not running or is not responding to the request | S38 | "There are no OSDs in the cluster" |
| There are no OSDs in the cluster, or the CSI provisioner pod is not running or is not responding to the request | S38 | "The CSI provisioner pod is not running or is not responding to the request to provision the storage" |
| In a test cluster, only one OSD is required | S38 | "In a "test" cluster, only one OSD is required" |
| In the production storage class example, three OSDs would be required | S38 | "In the production storage class example (storageclass.yaml), three OSDs would be required." |
| The docs call namespaces an administrative construct that is not meant to be used as a security feature | S9 | "namespaces, as implemented, is an administrative construct that is not meant to be used as a security feature." |
| They add that it is trivial for clients to switch namespaces | S9 | "It is trivial for clients to switch namespaces." |
| If you do not provide a namespace, ctr client commands use default | S9 | "If you do not provide a namespace, ctr client commands will all use the default namespace, which is simply named" |
| The garbage collector is scheduled on a background goroutine | S13 | "The garbage collector (gc) is scheduled on a background goroutine and runs based on a number of configurable factors." |
| It is critical that they use the same driver | S21 | "It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| The Rook operator deploys, configures, provisions, scales, upgrades, and monitors Ceph by building on Kubernetes resources | S30 | "The Rook operator does this by building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| The range is in the CRD, "minimum": 0 and "maximum": 9, and the Rook docs say that the number must be between 1 and 9 | S36 | "The number must be between 1 and 9." |
| The chart docs warn that it should only be set during first deployment, and that if it is later disabled the cluster may be destroyed | S34 | "WARNING Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| The docs warn that for test scenarios, if you delete a cluster and start a new cluster on the same hosts, the path used by dataDirHostPath must be deleted | S36 | "WARNING: For test scenarios, if you delete a cluster and start a new cluster on the same hosts, the path used by dataDirHostPath must be deleted." |
| Otherwise, stale keys and other config remain, and the new mons fail to start | S36 | "Otherwise, stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| For highest availability, an odd number of mons should be specified | S36 | "For highest availability, an odd number of mons should be specified." |
| For higher durability in case of mon loss, an even number can be specified although availability may be lower | S36 | "For higher durability in case of mon loss, an even number can be specified although availability may be lower." |
| To maintain quorum, a majority of mons must be up | S36 | "To maintain quorum a majority of mons must be up." |
| Rook skips a device that has existing partitions or a formatted filesystem | S38 | "if Rook determines that a device is not available (has existing partitions or a formatted filesystem), Rook will skip consuming the devices." |
| The scheduler matches Pods to Nodes so that the kubelet can run them | S23 | "In Kubernetes, scheduling refers to making sure that Pods are matched to Nodes so that Kubelet can run them." |
