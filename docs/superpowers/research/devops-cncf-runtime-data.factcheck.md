# Fact check: devops / cncf-runtime-data

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://www.cncf.io/about/who-we-are/; S2 https://www.cncf.io/projects/; S3 https://containerd.io/; S4 https://rook.io/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / cncf-runtime-data (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Open-source projects that run containers, schedule work, and store data in a cloud-native system." | none | FAIL | The lede has no cite. No source says the projects "schedule work". The word "schedul" appears in S2 only as the category label "Scheduling & Orchestration". Fix: add cites, or limit the lede to what the sources say. S3 says "container runtime". S4 says "Open-Source, Cloud-Native Storage for Kubernetes". |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. | 1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments. | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability. | 3 | PASS | S3: "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 4 | Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services. | 4 | PASS | S4: "Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services." |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / cncf-runtime-data (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, containerd, and Rook. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | S1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | S2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability | S3 | PASS | S3: "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 4 | Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services | S4 | PASS | S4: "Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / cncf-runtime-data (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, containerd, and Rook. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the topics and describes the page itself. It gives no fact about a tool, product, command or number. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | S1 | PASS | pages/S1.txt: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | S2 | PASS | pages/S2.txt: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability | S3 | PASS | pages/S3.txt: "containerd – An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 4 | Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services | S4 | PASS | pages/S4.txt: "Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / cncf-runtime-data (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0a | Lede: "The CNCF, containerd, and Rook. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This text describes the page itself. It gives no fact about a tool, product, command, or number. The nav description line ("The CNCF, containerd, and Rook.") is also N/A. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | 1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability | 3 | PASS | S3: "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 4 | Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services | 4 | PASS | S4: "Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services." |

Open FAILs after round 5: 0

Changed after this round: On 2026-11-15, a fresh fetch of every source found that the Rook home page no longer has the sentence of row 4. The Rook sentence now cites the Rook documentation (https://rook.io/docs/rook/latest-release/Getting-Started/intro/) and follows its wording: an open source cloud-native storage orchestrator that automates deployment and management of Ceph, to provide self-managing, self-scaling, and self-healing storage services. Round 6 checks the new text.

## Round 6 (2026-11-15)

# Fact check: devops / cncf-runtime-data (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | The CNCF, containerd, and Rook. | none | N/A | It only names the topics. It gives no fact about a tool. |
| 2 | Lede | The CNCF, containerd, and Rook. A short explanation with its sources comes first. The reels after it show the topic at work. | none | N/A | It describes the page itself. |
| 3 | About the projects | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. | 1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 4 | About the projects | Its graduated and incubating projects are considered stable and are used successfully in production environments. | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 5 | About the projects | containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability. | 3 | PASS | S3: "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 6 | About the projects | Rook is an open source cloud-native storage orchestrator. | 4 | PASS | S4: "Rook is an open source cloud-native storage orchestrator, providing the platform, framework, and support for Ceph storage..." |
| 7 | About the projects | Rook automates deployment and management of Ceph, a distributed storage system, to provide self-managing, self-scaling, and self-healing storage services. | 4 | PASS | S4: "Rook automates deployment and management of Ceph to provide self-managing, self-scaling, and self-healing storage services." and "Ceph is a distributed storage system that provides file, block and object storage..." |

Open FAILs after round 6: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 41 sources. Round 7 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 7 (2026-11-20)

# Fact check: devops / cncf-runtime-data (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | containerd is the container runtime that Kubernetes talks to through the CRI; Rook runs Ceph storage on Kubernetes (no cite) | none | PASS | S20: "The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and Container Runtime." S8: "containerd has built-in support for Kubernetes Container Runtime Interface (CRI)." S30: "Rook automates deployment and management of Ceph". The page's own practice-run description is N/A. |
| 2 | Lede | CNCF and two of its projects, containerd and Rook; the cluster steps use Docker (no cite) | none | PASS | S40: "kind runs a local Kubernetes cluster by using Docker containers as “nodes”." The rest of the lede describes the page, its run and its links, so it is N/A. |
| 3 | What it is | CNCF hosts critical components of the global technology infrastructure | S1 | PASS | "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 4 | What it is | CNCF is part of the nonprofit Linux Foundation | S1 | PASS | "CNCF is part of the nonprofit Linux Foundation." |
| 5 | What it is | The TOC defines 4 stages of the project lifecycle | S3 | PASS | "The TOC defines 4 stages of the project lifecycle:" |
| 6 | What it is | Graduated and incubating projects are considered stable and used successfully in production | S2 | PASS | "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 7 | What it is | Incubation: projects gaining adoption, improving stability and maturity | S3 | PASS | "Incubation - Projects gaining adoption, focusing on improving stability and maturity." |
| 8 | What it is | Graduated: highly mature, robust projects, production-readiness shown by adopters | S3 | PASS | "Graduated - Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments." |
| 9 | What it is | containerd accepted March 29, 2017 at Incubating | S4 | PASS | "containerd was accepted to CNCF on March 29, 2017 at the Incubating maturity level and then moved to the Graduated maturity level on February 28, 2019." |
| 10 | What it is | containerd moved to Graduated on February 28, 2019 | S4 | PASS | Same S4 sentence as row 9. |
| 11 | What it is | "The same page says that Rook was accepted on January 29, 2018" | S5 | FAIL | The dates are on the Rook page (S5), not on "the same page" as the containerd claims (S4). S4 has no mention of Rook. Fix: "The CNCF Rook page says that Rook was accepted on January 29, 2018". S5 itself has "Rook was accepted to CNCF on January 29, 2018". |
| 12 | What it is | Rook moved to Incubating on September 25, 2018 | S5 | PASS | "moved to the Incubating maturity level on September 25, 2018" |
| 13 | What it is | Rook moved to Graduated on October 7, 2020 | S5 | PASS | "then moved to the Graduated maturity level on October 7, 2020." |
| 14 | What it is | The project page calls containerd an open and reliable container runtime | S4 | PASS | "An open and reliable container runtime" |
| 15 | What it is | The project page calls Rook storage orchestration for Kubernetes | S5 | PASS | "Storage Orchestration for Kubernetes" |
| 16 | What it is | containerd calls itself an industry-standard container runtime with an emphasis on simplicity, robustness and portability | S6 | PASS | "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 17 | What it is | The README says it is available as a daemon for Linux and Windows | S7 | PASS | "It is available as a daemon for Linux and Windows, which can manage the complete container lifecycle of its host system" |
| 18 | What it is | The daemon can manage the complete container lifecycle of its host system | S7 | PASS | Same S7 sentence as row 17. |
| 19 | What it is | containerd is designed to be embedded into a larger system, not used directly by developers or end-users | S7 | PASS | "containerd is designed to be embedded into a larger system, rather than being used directly by developers or end-users." |
| 20 | What it is | You need a working container runtime on each Node so the kubelet can launch Pods and their containers | S20 | PASS | "You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers." |
| 21 | What it is | CRI is the main protocol between kubelet and container runtime | S20 | PASS | "The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and Container Runtime." |
| 22 | What it is | containerd has built-in support for the CRI | S8 | PASS | "containerd has built-in support for Kubernetes Container Runtime Interface (CRI)." |
| 23 | What it is | containerd runs on the same node as the kubelet; its cri plugin handles all CRI service requests | S15 | PASS | "Containerd operates on the same node as the Kubelet. The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| 24 | What it is | kube-scheduler is the default scheduler and runs as part of the control plane | S23 | PASS | "is the default scheduler for Kubernetes and runs as part of the ... control plane." |
| 25 | What it is | A scheduler watches for newly created Pods that have no Node assigned | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 26 | What it is | It finds feasible Nodes, scores them, picks the highest score | S23 | PASS | "The scheduler finds feasible Nodes for a Pod and then runs a set of functions to score the feasible Nodes and picks a Node with the highest score" |
| 27 | What it is | "So the scheduler chooses the node, and the runtime ... runs the containers." | none | N/A | The page labels it "the tutorial's own summary of the sources above". |
| 28 | What it is | Rook is an open source cloud-native storage orchestrator | S30 | PASS | "Rook is an open source cloud-native storage orchestrator" |
| 29 | What it is | Ceph is a distributed storage system providing file, block and object storage | S30 | PASS | "Ceph is a distributed storage system that provides file, block and object storage" |
| 30 | What it is | Rook automates deployment and management of Ceph for self-managing, self-scaling, self-healing storage | S30 | PASS | "Rook automates deployment and management of Ceph to provide self-managing, self-scaling, and self-healing storage services." |
| 31 | What it is | The operator builds on Kubernetes resources to deploy, configure, provision, scale, upgrade, monitor Ceph | S30 | PASS | "The Rook operator does this by building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 32 | What it is | A custom resource is an extension of the Kubernetes API not necessarily available in a default installation | S24 | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default" |
| 33 | What it is | The CustomResourceDefinition API resource lets you define custom resources | S24 | PASS | "API resource allows you to define custom resources." |
| 34 | What it is | Operators are clients of the Kubernetes API that act as controllers for a Custom Resource | S26 | PASS | "Operators are clients of the Kubernetes API that act as controllers for a Custom Resource." |
| 35 | What it is | Most common way to deploy an operator: add the CRD and its Controller to your cluster | S26 | PASS | "The most common way to deploy an operator is to add the Custom Resource Definition and its associated Controller to your cluster." |
| 36 | What it is | The Rook glossary says the CephCluster CRD is used by Rook for creation and customization of storage clusters | S31 | PASS | "The CephCluster CRD is used by Rook to allow creation and customization of storage clusters" |
| 37 | How it works | containerd supports extending its functionality using most of its defined interfaces | S10 | PASS | "containerd supports extending its functionality using most of its defined interfaces." |
| 38 | How it works | This includes a customized runtime, snapshotter, content store, and gRPC interfaces | S10 | PASS | "This includes using a customized runtime, snapshotter, content store, and even adding gRPC interfaces." |
| 39 | How it works | containerd uses plugins internally so internals are decoupled, stable, treated equally with external plugins | S10 | PASS | "containerd uses plugins internally to ensure that internal implementations are decoupled, stable, and treated equally with external plugins." |
| 40 | How it works | To see all plugins, use `ctr plugins ls` | S10 | PASS | "To see all the plugins containerd has, use ctr plugins ls" |
| 41 | How it works | The output shows all plugins, also those that did not load | S10 | PASS | "From the output all the plugins can be seen as well those which did not successfully load." |
| 42 | How it works | Smart client: functionality the daemon does not require is done by the client | S10 | PASS | "containerd has a smart client architecture, meaning any functionality which is not required by the daemon is done by the client." |
| 43 | How it works | That includes creating a container's specification, talking to a registry, loading an image from tar | S10 | PASS | "This includes most high level interactions such as creating a container's specification, interacting with an image registry, or loading an image from tar." |
| 44 | How it works | Fully namespaced API, so many consumers share one instance | S9 | PASS | "containerd offers a fully namespaced API so multiple consumers can all use a single containerd instance without conflicting with one another." |
| 45 | How it works | Image content shared via content addresses; names and metadata separate per namespace | S9 | PASS | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 46 | How it works | Namespaces are an administrative construct, not a security feature | S9 | PASS | "namespaces, as implemented, is an administrative construct that is not meant to be used as a security feature." |
| 47 | How it works | It is trivial for clients to switch namespaces | S9 | PASS | "It is trivial for clients to switch namespaces." |
| 48 | How it works | Without a namespace, `ctr` uses the namespace "default" | S9 | PASS | "If you do not provide a namespace, ctr client commands will all use the default namespace, which is simply named "default"." |
| 49 | How it works | `--namespace` or `-n` of `ctr` changes it | S9 | PASS | "Simply set the --namespace,-n flag on ctr to change the namespace." |
| 50 | How it works | The docs list several command line projects for containerd | S8 | PASS | "There are several command line interface (CLI) projects for interacting with containerd:" |
| 51 | How it works | `ctr` is bundled with containerd and made solely for debugging containerd | S8 | PASS | "While the ctr tool is bundled together with containerd, it should be noted the ctr tool is solely made for debugging containerd." |
| 52 | How it works | `nerdctl` gives a stable and human-friendly user experience | S8 | PASS | "tool provides stable and human-friendly user experience." |
| 53 | How it works | `crictl` is a command-line interface for CRI-compatible runtimes | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 54 | How it works | You can use it to inspect and debug runtimes and applications on a node | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a" |
| 55 | How it works | Content exists in several areas in the containerd lifecycle | S12 | PASS | "Content exists in several areas in the containerd lifecycle:" |
| 56 | How it works | They are an OCI registry, the content store, and snapshots | S12 | PASS | "OCI registry, for example hub.docker.com or quay.io" / "containerd content store, under containerd's local storage space" / "snapshots, under containerd's local storage space" |
| 57 | How it works | To create a container, the image and all content must be in the local content store | S12 | PASS | "The image and all its content must be loaded into the local content store." |
| 58 | How it works | Layers are read and applied to a filesystem, creating a committed snapshot | S12 | PASS | "The layers from the image must be read and applied to a filesystem, creating what is known as a "committed snapshot"." |
| 59 | How it works | This process is known as unpacking | S12 | PASS | "This process is known as "unpacking"." |
| 60 | How it works | An active snapshot (final mutable mountable filesystem) must be created on top of the final layer | S12 | PASS | "A final mutable mountable filesystem, an "active snapshot", must be created on top of the final layer of content for the image." |
| 61 | How it works | A container can then be created with the active snapshot as its root filesystem | S12 | PASS | "A container now can be created, with its root filesystem as the active snapshot." |
| 62 | How it works | An image is a JSON document known as a descriptor | S12 | PASS | "An "image" is comprised of a JSON document known as a descriptor." |
| 63 | How it works | A descriptor always has mediaType, which tells the type | S12 | PASS | "A descriptor always contains an element, mediaType, which tells us which type it is." |
| 64 | How it works | The mediaType is a manifest or an index | S12 | PASS | "It is one of two options:" followed by 'a "manifest"' and 'an "index"'. |
| 65 | How it works | An image manifest provides a configuration and a set of layers for one image for one architecture and OS | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 66 | How it works | An image index contains a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." (property of the image index) |
| 67 | How it works | The purpose of an index is to pick the manifest that matches the target platform | S12 | PASS | "The purpose of an index is to allow us to pick which manifest matches our target platform." |
| 68 | How it works | A layer DiffID is the digest over the layer's uncompressed tar archive | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 69 | How it works | The spec warns not to confuse DiffIDs with layer digests referenced in the manifest | S17 | PASS | "NOTE: Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 70 | How it works | Content in the store is stored very similarly to the registry | S12 | PASS | "it stores them very similarly to how the registry does." |
| 71 | How it works | Each component is stored in a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 72 | How it works | Snapshotters manage the snapshots of the container filesystems | S11 | PASS | "Snapshotters manage the snapshots of the container filesystems." |
| 73 | How it works | overlayfs is the default and akin to Docker's "overlay2" | S11 | PASS | "overlayfs (default): OverlayFS. This driver is akin to Docker/Moby's "overlay2" storage driver" |
| 74 | How it works | native is a native file copying driver, akin to "vfs" | S11 | PASS | "native: Native file copying driver. Akin to Docker/Moby's "vfs" driver." |
| 75 | How it works | Snapshotters can be inspected with `ctr plugins ls` or `nerdctl info` | S11 | PASS | "The available snapshotters can be inspected by running ctr plugins ls or nerdctl info." |
| 76 | How it works | containerd supports multiple runtimes; each container can use a different one | S10 | PASS | "containerd supports multiple container runtimes. Each container can be invoked with a different runtime." |
| 77 | How it works | It invokes v2 runtimes as binaries, used to start the shim process | S10 | PASS | "containerd invokes v2 runtimes as binaries on the system, which are used to start the shim process for containerd." |
| 78 | How it works | Most interactions with Linux and Windows container features are handled via runc and/or OS-specific libraries | S7 | PASS | "Most interactions with the Linux and Windows container feature sets are handled via runc and/or OS-specific libraries" |
| 79 | How it works | The CRI plugin handles kubelet requests and manages pod networking via CNI, another CNCF project | S15 | PASS | "cri manages pod networking via CNI (another CNCF project)." |
| 80 | How it works | When the kubelet creates a pod, the plugin creates the pod's network namespace and configures it with CNI | S15 | PASS | "Kubelet calls the cri plugin ... to create a pod; cri creates the pod’s network namespace, and then configures it using CNI;" |
| 81 | How it works | It then creates a special pause container, the sandbox container | S15 | PASS | "cri uses containerd internal to create and start a special pause container (the sandbox container)" |
| 82 | How it works | Later it pulls the application image if not present on the node | S15 | PASS | "cri further uses containerd to pull the image if the image is not present on the node;" |
| 83 | How it works | The kubelet acts as a client connecting to the runtime through gRPC | S20 | PASS | "The kubelet acts as a client when connecting to the container runtime via gRPC." |
| 84 | How it works | For v1.26 and later the kubelet requires the v1 CRI API | S20 | PASS | "For Kubernetes v1.26 and later, the kubelet requires that the container runtime ... supports the v1 CRI API." |
| 85 | How it works | If the runtime lacks the v1 API, the kubelet will not register the node | S20 | PASS | "If a container runtime does not support the v1 API, the kubelet will not register the node." |
| 86 | How it works | Kubelet and runtime need a cgroup driver to interface with control groups | S21 | PASS | "To interface with control groups, the kubelet and the container runtime need to use a cgroup driver." |
| 87 | How it works | Critical that both use the same cgroup driver and are configured the same | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| 88 | How it works | The docs show `SystemdCgroup = true` in the runc runtime options | S21 | PASS | "[plugins.'io.containerd.cri.v1.runtime'.containerd.runtimes.runc.options] SystemdCgroup = true" |
| 89 | How it works | systemd cgroup driver is recommended with cgroup v2 | S21 | PASS | "The systemd cgroup driver is recommended if you use cgroup v2." |
| 90 | How it works | The GC is scheduled on a background goroutine and runs on configurable factors | S13 | PASS | "The garbage collector (gc) is scheduled on a background goroutine and runs based on a number of configurable factors." |
| 91 | How it works | A client can request a GC during resource removal | S13 | PASS | "may also request a garbage collection during resource removal." |
| 92 | How it works | The service will not return until the GC has completed | S13 | PASS | "The service will not return until the garbage collection has completed." |
| 93 | How it works | Currently supported on removal of images and leases | S13 | PASS | "This is currently supported on removal of images and" (leases on the next line) |
| 94 | How it works | containerd reads an optional `hosts.toml` for each registry host from a configuration directory | S16 | PASS | "will be done by specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| 95 | How it works | For a differing host (mirror), containerd appends the registry host namespace as query parameter `ns` | S16 | PASS | "containerd will append the registry host namespace to requests as a query parameter called ns." |
| 96 | How it works | A non-root user can run containerd using user_namespaces(7) | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)." |
| 97 | How it works | RootlessKit can set up a user namespace, with mount namespace and optionally network namespace | S14 | PASS | "RootlessKit can be used for setting up a user namespace (along with mount namespace and optionally network namespace)." |
| 98 | How it works | You need to provide a `config.toml` with your own path configuration | S14 | PASS | "You need to provide config.toml with your own path configuration." |
| 99 | How it works | A client such as `ctr` must run inside the daemon namespaces | S14 | PASS | "A client program such as ctr also needs to be executed inside the daemon namespaces." |
| 100 | How it works | "The practice run below does not set up a user namespace, and the tutorial states what that changes." | none | N/A | Describes the page's own run. |
| 101 | How it works | Scheduling means matching Pods to Nodes so the kubelet can run them | S23 | PASS | "scheduling refers to making sure that Pods are matched to Nodes so that" (the kubelet can run them) |
| 102 | How it works | Scheduler becomes responsible for finding the best Node for each Pod | S23 | PASS | "for finding the best Node for that Pod to run on." |
| 103 | How it works | If no node is suitable, the pod stays unscheduled until the scheduler can place it | S23 | PASS | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| 104 | How it works | The scheduler notifies the API server in a process called binding | S23 | PASS | "The scheduler then notifies the API server about this decision in a process called binding." |
| 105 | How it works | `nodeSelector` matches against node labels, a method to choose where Pods are scheduled | S41 | PASS | "nodeSelector field matching against node labels" |
| 106 | How it works | A `nodeSelector` only selects nodes with all the specified labels | S41 | PASS | "selects nodes with all the specified labels." |
| 107 | How it works | Kubernetes populates a standard set of labels on all nodes | S41 | PASS | "Kubernetes also populates a standard set of labels" |
| 108 | How it works | Affinity and anti-affinity expand the types of constraints | S41 | PASS | "Affinity and anti-affinity expand the types of constraints you can" |
| 109 | How it works | A rule can be soft or preferred | S41 | PASS | "You can indicate that a rule is soft or preferred, so that the scheduler still schedules the Pod even if it can't find a matching node." |
| 110 | How it works | With a soft rule, the scheduler still schedules the Pod even without a matching node | S41 | PASS | Same S41 sentence as row 109. |
| 111 | How it works | Ceph Operator chart installs Rook to create, configure, manage Ceph clusters | S34 | PASS | "Installs rook to create, configure, and manage Ceph clusters on Kubernetes." |
| 112 | How it works | The chart bootstraps a rook-ceph-operator deployment | S34 | PASS | "This chart bootstraps a rook-ceph-operator deployment on a Kubernetes cluster" |
| 113 | How it works | Three steps: install chart, install Ceph-CSI drivers chart, create a Rook cluster | S34 | PASS | "Install the Helm chart / Install the Ceph-CSI drivers chart so CSI can provision and mount volumes / Create a Rook cluster." |
| 114 | How it works | Ceph Cluster chart is a simple packaging of templates that optionally create Rook resources | S35 | PASS | "This chart is a simple packaging of templates that will optionally create Rook resources such as:" |
| 115 | How it works | Resources: CephCluster, CephFilesystem, CephObjectStore CRs, storage classes, dashboard ingress, toolbox | S35 | PASS | "CephCluster, CephFilesystem, and CephObjectStore CRs / Storage classes ... / Ingress for external access to the dashboard / Toolbox" |
| 116 | How it works | Default values create one block pool, one filesystem, one object store, with storage classes | S35 | PASS | "The default values for cephBlockPools, cephFileSystems, and CephObjectStores will create one of each, and their corresponding storage classes." |
| 117 | How it works | `crds.enabled`: whether the chart should create and update the CRDs | S34 | PASS | "Whether the helm chart should create and update the CRDs." |
| 118 | How it works | If false, CRDs must be managed with `deploy/examples/crds.yaml` | S34 | PASS | "If false, the CRDs must be managed independently with deploy/examples/crds.yaml." |
| 119 | How it works | Set only at first deployment; if later disabled the cluster may be destroyed | S34 | PASS | "WARNING Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 120 | How it works | Quickstart commands: `kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml`, then `kubectl create -f operator.yaml` | S32 | PASS | "kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml" / "kubectl create -f operator.yaml" |
| 121 | How it works | Kubernetes v1.32 through v1.37 are supported | S32 | PASS | "Kubernetes versions v1.32 through v1.37 are supported." |
| 122 | How it works | `count` sets the number of mons to start | S36 | PASS | "count: Set the number of mons to be started." |
| 123 | How it works | The number must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 124 | How it works | The recommended value is most commonly 3 | S36 | PASS | "The recommended value is most commonly 3." |
| 125 | How it works | For highest availability an odd number of mons | S36 | PASS | "For highest availability, an odd number of mons should be specified." |
| 126 | How it works | A majority of mons must be up for quorum | S36 | PASS | "To maintain quorum a majority of mons must be up." |
| 127 | How it works | `dataDirHostPath` is the host path for config and data of each service | S36 | PASS | "dataDirHostPath: The path on the host (hostPath) where config and data should be stored for each of the services." |
| 128 | How it works | For test scenarios, deleting and restarting on the same hosts requires deleting the path | S36 | PASS | "WARNING: For test scenarios, if you delete a cluster and start a new cluster on the same hosts, the path used by dataDirHostPath must be deleted." |
| 129 | How it works | Otherwise stale keys and config remain and new mons fail to start | S36 | PASS | "Otherwise, stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| 130 | How it works | The glossary names MON, MGR, MDS, OSD, RBD, RGW | S31 | PASS | "Ceph Monitor (MON) / Ceph Manager (MGR) / Ceph Metadata Server (MDS) / Object Storage Device (OSD) / RADOS Block Device (RBD) / Ceph Object Gateway (RGW)" |
| 131 | How it works | At least one local storage type is required: raw devices, raw partitions, LVM LVs, or block-mode PVs | S33 | PASS | "To configure the Ceph storage cluster, at least one of these local storage types is required: Raw devices ... Raw partitions ... LVM Logical Volumes ... Persistent Volumes available from a storage class in block mode" |
| 132 | How it works | Raw devices have no partitions or formatted filesystems; raw partitions and LVs have no formatted filesystem | S33 | PASS | "Raw devices (no partitions or formatted filesystems) / Raw partitions (no formatted filesystem) / LVM Logical Volumes (no formatted filesystem)" |
| 133 | How it works | `lsblk -f`: non-empty FSTYPE means a filesystem on the device | S33 | PASS | "$ lsblk -f" / "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| 134 | How it works | A running udev daemon is required on all storage nodes | S33 | PASS | "A running udev daemon is required on all storage nodes." |
| 135 | How it works | Ceph requires a kernel built with the RBD module | S33 | PASS | "Ceph requires a Linux kernel built with the RBD module." |
| 136 | How it works | For CephFS RWX volumes, recommended minimum kernel is 4.17 | S33 | PASS | "If creating RWX volumes from a Ceph shared file system (CephFS), the recommended minimum kernel version is 4.17." |
| 137 | How it works | Custom resources are validated via OpenAPI v3.0 schemas | S25 | PASS | "Custom resources are validated via OpenAPI v3.0 schemas," |
| 138 | How it works | Also by `x-kubernetes-validations` when the Validation Rules feature is enabled | S25 | PASS | "by x-kubernetes-validations when the Validation Rules feature is enabled" |
| 139 | How it works | You can add validation with admission webhooks | S25 | PASS | "you can add additional validation using admission webhooks." |
| 140 | How it works | `x-kubernetes-validations` can validate with CEL expressions | S25 | PASS | "The x-kubernetes-validations extension can be used to validate custom resources using Common Expression Language (CEL) expressions" |
| 141 | How it works | A rule that refers to `oldSelf` is a transition rule | S25 | PASS | "A rule that contains an expression referencing the identifier oldSelf is implicitly considered a transition rule." |
| 142 | How it works | Transition rules apply only to operations meeting certain criteria | S25 | PASS | "transition rules apply only to operations meeting the following criteria:" |
| 143 | How it works | The operation updates an existing object | S25 | PASS | "The operation updates an existing object." |
| 144 | How it works | Transition rules never apply to create operations | S25 | PASS | "Transition rules never apply to create operations." |
| 145 | How it works | Both an old and a new value exist | S25 | PASS | "Both an old and a new value exist." |
| 146 | How it works | Unknown fields are pruned before persisting | S25 | PASS | "if you specify a field that the API server does not recognize, the unknown field is pruned (removed) before being persisted." |
| 147 | How it works | A schema can opt out of pruning for a sub-tree with `x-kubernetes-preserve-unknown-fields: true` | S25 | PASS | "opt-out of that for specific sub-trees of fields by adding x-kubernetes-preserve-unknown-fields: true" |
| 148 | How it works | kubectl also checks unknown fields and rejects objects well before the API server | S25 | PASS | "kubectl also checks for unknown fields and rejects those objects well before they" (would be sent to the API server) |
| 149 | How it works | `kubectl apply --dry-run=server` submits a server-side request without persisting | S27 | PASS | "If server strategy, submit server-side request without persisting the resource." |
| 150 | How it works | `--validate` defaults to strict | S27 | PASS | "--validate string[="strict"] Default: "strict"" |
| 151 | How it works | "true" or "strict" use a schema to validate and fail if invalid | S27 | PASS | ""true" or "strict" will use a schema to validate the input and fail the request if invalid." |
| 152 | How it works | Server-side validation if ServerSideFieldValidation is enabled | S27 | PASS | "It will perform server side validation if ServerSideFieldValidation is enabled on the api-server" |
| 153 | How it works | Otherwise falls back to less reliable client-side validation | S27 | PASS | "but will fall back to less reliable client-side validation if not." |
| 154 | How it works | `--server-side` makes apply run in the server | S27 | PASS | "If true, apply runs in the server instead of the client." |
| 155 | How it works | `kubectl wait` waits until the condition is seen in the Status field of every resource | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 156 | How it works | kubectl uses the published schema for client-side validation and `kubectl explain` | S25 | PASS | "The kubectl command-line tool consumes the published schema to perform client-side validation (kubectl create and kubectl apply), schema explanation (kubectl explain)" |
| 157 | How it works | For `kubectl get`, the API server decides the columns; a CRD can customize them | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns for a CustomResourceDefinition." |
| 158 | Try it | Run record: date, machine, versions, folder, subshells, `HOME`, runner setup | none | N/A | Record of the page's own run. |
| 159 | Try it | The containerd rootless page sets the variable (`CONTAINERD_ADDRESS`) in the same way | S14 | PASS | "$ export CONTAINERD_ADDRESS=/run/user/1001/containerd/containerd.sock" |
| 160 | Try it | Reader step: `export CONTAINERD_ADDRESS="$PWD/containerd.sock"` | none | N/A | Reader's own step. |
| 161 | Try it | Run record: steps 1–8, sockets, `dockerd` flag, images, kind cluster `qa-p7b`, Docker network and cleanup, real home and `~/.kube` | none | N/A | Record of the page's own run. |
| 162 | Try it | "The choices that no source gives are the tutorial's own" and the list of what was and was not run | none | N/A | The page's own choices and scope. |
| 163 | Try it | `containerd.io` DEB and RPM packages are distributed by Docker, not the containerd project | S8 | PASS | "The containerd.io packages in DEB and RPM formats are distributed by Docker (not by the containerd project)." |
| 164 | Try it | The `containerd.io` package contains runc but not CNI plugins | S8 | PASS | "The containerd.io package contains runc too, but does not contain CNI plugins." |
| 165 | Try it | Run record: `dpkg -S`, package version, package pre-installed | none | N/A | Record of the page's own run. |
| 166 | Try it | Helm/kind/kubectl provenance paragraph, including "That page says ..." about other site pages | none | N/A | Cross-references to other pages of the site and the page's own choices. |
| 167 | Try it | Step 1 commands and output; bullets on printed versions | none | N/A | Run record. |
| 168 | Try it | Step 2 code and config bullets: the config sets paths and sockets, own choices | none | N/A | Run record and the page's own choices. |
| 169 | Try it | Step 2: docs say you need to provide a `config.toml` with your own path configuration | S14 | PASS | "You need to provide config.toml with your own path configuration." |
| 170 | Try it | Step 2 bullets: `version = 4`, boot log, `ctr version`, separate daemon process | none | N/A | Run record. |
| 171 | Try it | Step 3: `ctr plugins ls` listed 68 plugins (56 ok, 11 skip, 1 error); `skip` rows; `cri` error; `containerd config default` values | none | N/A | Run record. |
| 172 | Try it | Step 3: docs say you can see all plugins in the output, also those that did not load | S10 | PASS | "From the output all the plugins can be seen as well those which did not successfully load." |
| 173 | Try it | Step 3: the `cri` plugin handles all CRI requests of the kubelet | S15 | PASS | "The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| 174 | Try it | Step 3: to use the systemd cgroup driver with runc, set `SystemdCgroup = true` | S21 | PASS | "To use the systemd cgroup driver in /etc/containerd/config.toml with runc, set the following config" / "SystemdCgroup = true" |
| 175 | Try it | Step 3: critical that kubelet and runtime use the same cgroup driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 176 | Try it | Step 4 code, output and bullets (fetch, 42 blobs, one image, `:latest` tag) | none | N/A | Run record. |
| 177 | Try it | Step 4: OCI spec says an image index contains a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 178 | Try it | Step 5 code, output and bullets (index, 20 manifests, digests, 42 files) | none | N/A | Run record. |
| 179 | Try it | Step 5: if the descriptor is an index, find the platform and use that hash to retrieve the manifest | S12 | PASS | "If the descriptor is an index, find in it the platform (architecture+os) ... use that hash to retrieve the manifest" |
| 180 | Try it | Step 5: OCI spec says a manifest provides a configuration and set of layers for a single image | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image" |
| 181 | Try it | Step 5: each component is stored in a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 182 | Try it | Step 5: a layer DiffID is the digest over the uncompressed tar archive | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 183 | Try it | Step 5: you can get the hash of an uncompressed layer with `cat <file> \| gunzip - \| sha256sum -` | S12 | PASS | "the value of the label gives the hash of them when uncompressed. You can get the same value by doing: $ cat <file> \| gunzip - \| sha256sum -" |
| 184 | Try it | Step 5: do not confuse DiffIDs with layer digests | S17 | PASS | "NOTE: Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 185 | Try it | Step 6 code, output and bullets (qa, qa2, other) | none | N/A | Run record. |
| 186 | Try it | Step 6: content shared via content addresses; names and metadata separate per namespace | S9 | PASS | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 187 | Try it | Step 7 code, output and bullets, including the help text of `ctr images rm --sync` | none | N/A | Run record. The help text is printed in the step's output. |
| 188 | Try it | Step 7: GC is scheduled on a background goroutine and runs on configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors." |
| 189 | Try it | Step 7: an OCI image has a manifest referencing a config file and layer tars; stored as generic blobs; client sets relations with labels | S13 | PASS | "an OCI image has a manifest which references a config file and layer tars. These resources are stored in containerd as generic blobs, it is the client that understands the relationships ... and sets them up using labels on the content resources." |
| 190 | Try it | Step 7: a client may request GC during removal; service will not return until done; supported on images and leases | S13 | PASS | "may also request a garbage collection during resource removal." / "The service will not return until the garbage collection has completed. This is currently supported on removal of images and" |
| 191 | Try it | Step 8 code, output and bullets (failed pull, `qa3`) | none | N/A | Run record. |
| 192 | Try it | Step 8: layers are read and applied, creating a committed snapshot; known as unpacking | S12 | PASS | "creating what is known as a "committed snapshot"." / "This process is known as "unpacking"." |
| 193 | Try it | Step 8: a non-root user can run containerd using user_namespaces(7) | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)." |
| 194 | Try it | Step 8: a container can be created with the active snapshot as root filesystem | S12 | PASS | "A container now can be created, with its root filesystem as the active snapshot." |
| 195 | Try it | Step 9 code, output and bullets (repo, versions, kinds, byte counts, images, namespace) | none | N/A | Run record. |
| 196 | Try it | Step 9: `helm template` renders chart templates locally and displays the output | S39 | PASS | "Render chart templates locally and display the output." |
| 197 | Try it | Step 9: the chart bootstraps a rook-ceph-operator deployment | S34 | PASS | "This chart bootstraps a rook-ceph-operator deployment" |
| 198 | Try it | Step 9: default values create one block pool, one filesystem, one object store and their storage classes | S35 | PASS | "will create one of each, and their corresponding storage classes." |
| 199 | Try it | Step 9: clusters can be installed in the operator's namespace or a separate one | S35 | PASS | "The clusters can be installed into the same namespace as the operator or a separate namespace." |
| 200 | Try it | Step 10 code, output and bullets (node, pods, events) | none | N/A | Run record. |
| 201 | Try it | Step 10: kind runs a local Kubernetes cluster using Docker containers as nodes | S40 | PASS | "kind runs a local Kubernetes cluster by using Docker containers as “nodes”." |
| 202 | Try it | Step 10: kind docs show `kind create cluster --image=...` | S40 | PASS | "To specify another image use the --image flag – kind create cluster --image=...." |
| 203 | Try it | Step 10: Kubernetes 1.37 requires a CRI-conformant runtime | S21 | PASS | "Kubernetes 1.37 requires that you use a runtime that conforms with the" (Container Runtime Interface) |
| 204 | Try it | Step 10: kube-scheduler is the default scheduler, part of the control plane | S23 | PASS | "is the default scheduler for Kubernetes and runs as part of the ... control plane." |
| 205 | Try it | Step 10: a scheduler watches for newly created Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 206 | Try it | Step 11 code, output and bullets (`pending-demo`, `FailedScheduling`, label) | none | N/A | Run record. |
| 207 | Try it | Step 11: nodeSelector is the simplest recommended form of node selection | S41 | PASS | "nodeSelector is the simplest recommended form of node selection constraint." |
| 208 | Try it | Step 11: Kubernetes only schedules the Pod onto nodes with each label | S41 | PASS | "Kubernetes only schedules the Pod onto nodes that have each of the labels you" (specify) |
| 209 | Try it | Step 11: if no node is suitable, the pod stays unscheduled | S23 | PASS | "the pod remains unscheduled until the scheduler is able to place it." |
| 210 | Try it | Step 11: nodes have labels and you can attach labels manually | S41 | PASS | "Like many other Kubernetes objects, nodes have labels. You can attach labels manually." |
| 211 | Try it | Step 11: the scheduler notifies the API server in a process called binding | S23 | PASS | "in a process called binding." |
| 212 | Try it | Step 12 code, output and bullets (21 CRDs, 19 names, `explain`, schema read) | none | N/A | Run record. |
| 213 | Try it | Step 12: `helm template --show-only` shows only manifests of the given template | S39 | PASS | "-s, --show-only stringArray only show manifests rendered from the given templates" |
| 214 | Try it | Step 12: `kubectl apply --server-side` runs apply in the server | S27 | PASS | "If true, apply runs in the server instead of the client." |
| 215 | Try it | Step 12: `kubectl wait` waits until the condition is seen in the Status field | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 216 | Try it | Step 12: once a custom resource is installed, users can create and access its objects with kubectl | S24 | PASS | "Once a custom resource is installed, users can create and access its objects using kubectl, just as they do for built-in resources" |
| 217 | Try it | Step 12: `kubectl explain` describes the fields of each supported API resource | S28 | PASS | "This command describes the fields associated with each supported API resource." |
| 218 | Try it | Step 12: Rook docs say the number of mons must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 219 | Try it | Step 12: `x-kubernetes-validations` validates with CEL; a rule with `oldSelf` is a transition rule | S25 | PASS | "The x-kubernetes-validations extension can be used to validate custom resources using Common Expression Language (CEL) expressions" / "implicitly considered a transition rule." |
| 220 | Try it | Step 13 code, output and run bullets | none | N/A | Run record. |
| 221 | Try it | Step 13: each `--dry-run=server` submits a server-side request without persisting | S27 | PASS | "submit server-side request without persisting the resource." |
| 222 | Try it | Step 13: Rook docs say the number must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 223 | Try it | Step 13: `--validate` defaults to strict | S27 | PASS | "Default: "strict"" |
| 224 | Try it | Step 13: "true" or "strict" use a schema to validate and fail if invalid | S27 | PASS | ""true" or "strict" will use a schema to validate the input and fail the request if invalid." |
| 225 | Try it | Step 13: the API server decides which `kubectl get` columns are shown; a CRD can customize them | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns" |
| 226 | Try it | Step 13: transition rules never apply to create operations | S25 | PASS | "Transition rules never apply to create operations." |
| 227 | Try it | Step 14 code, output and bullets (crictl, config values, namespaces, delete) | none | N/A | Run record. |
| 228 | Try it | Step 14: "`docker exec` runs the commands in the node container." | none | FAIL | No cite. This is a general statement about how a tool works. S40 only gives the example "docker exec -it my-node-name crictl images". Fix: cite S40 for that example only, or say "the step used `docker exec` to run `crictl` in the node container". |
| 229 | Try it | Step 14: kind docs say you can list images on a node with `docker exec -it my-node-name crictl images` | S40 | PASS | "docker exec -it my-node-name crictl images" |
| 230 | Try it | Step 14: you can use `crictl` to inspect and debug runtimes and applications on a node | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a" |
| 231 | Try it | Step 14: critical that kubelet and runtime use the same cgroup driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 232 | Try it | Step 14: `ctr` uses `default` when you give no namespace | S9 | PASS | "If you do not provide a namespace, ctr client commands will all use the default namespace" |
| 233 | Try it | Step 14: the docs call `crictl` a command-line interface for CRI-compatible runtimes | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 234 | Try it | Step 15 code and output | none | N/A | Run record. |
| 235 | Try it | Step 15: "The commands are from the prerequisites page of the Rook docs, as far as a normal user can run them." | none | FAIL | No cite. S33 has only `lsblk -f` and `modprobe rbd`. `lsblk -o TYPE`, `lsblk -e7`, `uname -r`, `modinfo -F filename rbd`, `grep -c '^rbd ' /proc/modules` and `pgrep -c systemd-udevd` are not in S33. Fix: say that `lsblk -f` and the `rbd` and udev checks follow S33 <Cite n={33} />, and that the other commands are the tutorial's own. |
| 236 | Try it | Step 15 bullets on counts, `-e7`, filesystems, kernel, rbd, `pgrep` result | none | N/A | Run record and the page's own reading. |
| 237 | Try it | Step 15: if FSTYPE is not empty there is a filesystem on the device | S33 | PASS | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| 238 | Try it | Step 15: Rook skips a device that is not available (existing partitions or formatted filesystem) | S38 | PASS | "Rook will skip consuming the devices." (with "(has existing partitions or a formatted filesystem)" earlier in the line) |
| 239 | Try it | Step 15: recommended minimum kernel is 4.17 for RWX volumes from CephFS | S33 | PASS | "the recommended minimum kernel version is 4.17." |
| 240 | Try it | Step 15: Ceph requires a kernel with the RBD module; test nodes with `modprobe rbd` | S33 | PASS | "Ceph requires a Linux kernel built with the RBD module." / "Test your Kubernetes nodes by running modprobe rbd." |
| 241 | Try it | Step 15: a running udev daemon is required on all storage nodes | S33 | PASS | "A running udev daemon is required on all storage nodes." |
| 242 | How a tester uses it | "`kubectl get nodes -o wide` shows the container runtime of each node." | none | FAIL | No cite. No file in `pages/` contains "get nodes -o wide" or "CONTAINER-RUNTIME". Fix: "In step 10, `kubectl get nodes -o wide` showed `containerd://2.3.4` in the node row", as run record. |
| 243 | How a tester uses it | Run record: step 10 showed `containerd://2.3.4`; machine 2.4.2, node 2.3.4 | none | N/A | Run record. |
| 244 | How a tester uses it | You need a working container runtime on each Node | S20 | PASS | "You need a working container runtime on each Node in your cluster" |
| 245 | How a tester uses it | v1.26+: the kubelet requires the v1 CRI API | S20 | PASS | "For Kubernetes v1.26 and later, the kubelet requires that the container runtime" (supports the v1 CRI API) |
| 246 | How a tester uses it | No v1 API: the kubelet will not register the node | S20 | PASS | "the kubelet will not register the node." |
| 247 | How a tester uses it | Kubelet and runtime need a cgroup driver | S21 | PASS | "the kubelet and the container runtime need to use a cgroup driver." |
| 248 | How a tester uses it | cgroupfs is the default cgroup driver in the kubelet | S21 | PASS | "The cgroupfs driver is the default cgroup driver in the kubelet." |
| 249 | How a tester uses it | systemd driver recommended with cgroup v2 | S21 | PASS | "The systemd cgroup driver is recommended if you use cgroup v2." |
| 250 | How a tester uses it | Critical that both use the same driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 251 | How a tester uses it | Run record and advice on cgroup settings (steps 14, 3) | none | N/A | Run record and tutorial advice. |
| 252 | How a tester uses it | `crictl` is a CLI for CRI-compatible runtimes; use it to inspect and debug | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 253 | How a tester uses it | The docs note `ctr` is solely made for debugging containerd | S8 | PASS | "the ctr tool is solely made for debugging containerd." |
| 254 | How a tester uses it | Without a namespace `ctr` uses `default` | S9 | PASS | "will all use the default namespace, which is simply named "default"." |
| 255 | How a tester uses it | Run record (`k8s.io`, `other`, `qa`) and the sentence "A tester who looks in the wrong namespace sees no image." | none | N/A | Run record and the page's own inference. |
| 256 | How a tester uses it | Each component is stored in a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 257 | How a tester uses it | An image index contains a list of manifests for specific platforms | S19 | PASS | "contains a list of manifests for specific platforms." |
| 258 | How a tester uses it | A manifest provides a configuration and layers for one image, one architecture and OS | S18 | PASS | "provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 259 | How a tester uses it | DiffIDs are not to be confused with layer digests | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 260 | How a tester uses it | Run record on step 5, advice on writing digests, no pinned digest | none | N/A | Run record and tutorial advice. |
| 261 | How a tester uses it | "The content store keeps each blob once." | none | FAIL | No cite. S9 says only "Underlying image content is still shared via content addresses"; no source says "once". Fix: drop the sentence, or cite S9 and say content is "shared via content addresses". |
| 262 | How a tester uses it | Run record (step 6 and step 7) and advice on `--sync` and counting | none | N/A | Run record and tutorial advice. |
| 263 | How a tester uses it | GC is scheduled on a background goroutine and runs on configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors." |
| 264 | How a tester uses it | containerd reads an optional `hosts.toml` per registry host from a configuration directory | S16 | PASS | "specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| 265 | How a tester uses it | Differing host (mirror): registry host namespace appended as query parameter `ns` | S16 | PASS | "append the registry host namespace to requests as a query parameter called ns." |
| 266 | How a tester uses it | Run record and advice (no `hosts.toml` set; read the node's file) | none | N/A | Run record and tutorial advice. |
| 267 | How a tester uses it | A scheduler watches for Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 268 | How a tester uses it | If no node is suitable, the pod remains unscheduled | S23 | PASS | "the pod remains unscheduled until the scheduler is able to place it." |
| 269 | How a tester uses it | Run record and advice on step 11 events, `FailedScheduling` command, scope not tested | none | N/A | Run record and tutorial advice. |
| 270 | How a tester uses it | Custom resources are validated via OpenAPI v3.0 schemas and `x-kubernetes-validations` | S25 | PASS | "Custom resources are validated via OpenAPI v3.0 schemas, by x-kubernetes-validations when the Validation Rules feature is enabled" |
| 271 | How a tester uses it | `kubectl apply --dry-run=server` submits a server-side request without persisting | S27 | PASS | "submit server-side request without persisting the resource." |
| 272 | How a tester uses it | Run record and advice on step 13 | none | N/A | Run record and tutorial advice. |
| 273 | How a tester uses it | Rook docs say the number of mons must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 274 | How a tester uses it | For highest availability an odd number of mons | S36 | PASS | "For highest availability, an odd number of mons should be specified." |
| 275 | How a tester uses it | Run record on `"minimum": 0` and `count: 0` | none | N/A | Run record. |
| 276 | How a tester uses it | At least one local storage type is required | S33 | PASS | "at least one of these local storage types is required:" |
| 277 | How a tester uses it | Rook skips a device with existing partitions or a formatted filesystem | S38 | PASS | "Rook will skip consuming the devices." |
| 278 | How a tester uses it | To see if a device was skipped, view the OSD preparation log on that node | S38 | PASS | "To see if a device was skipped, view the OSD preparation log on the node where the device was skipped." |
| 279 | How a tester uses it | Run record of step 15 results | none | N/A | Run record. |
| 280 | How a tester uses it | The Rook toolbox is a container with common tools for debugging and testing | S37 | PASS | "The Rook toolbox is a container with common tools used for rook debugging and testing." |
| 281 | How a tester uses it | Example commands `ceph status`, `ceph osd status`, `ceph df`, `rados df` | S37 | PASS | "ceph status / ceph osd status / ceph df / rados df" |
| 282 | How a tester uses it | Two common causes for pending PVCs: no OSDs, or CSI provisioner not running or not responding | S38 | PASS | "There are two common causes for the PVCs staying in pending state: There are no OSDs in the cluster / The CSI provisioner pod is not running or is not responding to the request to provision the storage" |
| 283 | How a tester uses it | Test cluster needs one OSD | S38 | PASS | "In a "test" cluster, only one OSD is required" |
| 284 | How a tester uses it | Production storage class example needs three OSDs | S38 | PASS | "In the production storage class example (storageclass.yaml), three OSDs would be required." |
| 285 | How a tester uses it | "The tutorial ran no operator, and it ran none of these." | none | N/A | Run record. |
| 286 | Common mistakes | Namespaces are administrative, not a security feature; trivial to switch | S9 | PASS | "is an administrative construct that is not meant to be used as a security feature." / "It is trivial for clients to switch namespaces." |
| 287 | Common mistakes | Without a namespace, `ctr` uses `default` | S9 | PASS | "will all use the default namespace" |
| 288 | Common mistakes | GC is scheduled on a background goroutine | S13 | PASS | "The garbage collector (gc) is scheduled on a background goroutine" |
| 289 | Common mistakes | Critical that kubelet and runtime use the same driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 290 | Common mistakes | The Rook operator deploys, configures, provisions, scales, upgrades, monitors Ceph on Kubernetes resources | S30 | PASS | "building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 291 | Common mistakes | Rook docs say the number must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 292 | Common mistakes | `crds.enabled`: set only at first deployment; later disabling may destroy the cluster | S34 | PASS | "Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 293 | Common mistakes | Delete the `dataDirHostPath` path on reuse; otherwise stale keys and new mons fail | S36 | PASS | "the path used by dataDirHostPath must be deleted. Otherwise, stale keys and other config will remain ... the new mons will fail to start." |
| 294 | Common mistakes | Odd number of mons; a majority must be up for quorum | S36 | PASS | "an odd number of mons should be specified. ... To maintain quorum a majority of mons must be up." |
| 295 | Common mistakes | Rook skips a device with existing partitions or a formatted filesystem | S38 | PASS | "Rook will skip consuming the devices." |
| 296 | Common mistakes | The scheduler matches Pods to Nodes so the kubelet can run them | S23 | PASS | "making sure that Pods are matched to Nodes so that" |
| 297 | Common mistakes | Run-record sentences and the tutorial's own advice in the bullets | none | N/A | Run record and tutorial advice. |
| 298 | What a tester can check | Callout "Tutorial advice": 11 items of the tutorial's own advice | none | PASS | The callout says "This list is the tutorial's own advice for a tester". Every tool fact in it (`kubectl get nodes -o wide`, `crictl`, `k8s.io`, `--sync`, `FailedScheduling`, `--dry-run=server`, CRD schema edges, `rbd`, udev, `ceph status`) is also on the page and is supported there by sources or by the run. |
| 299 | Key words | Graduated | none | PASS | Section 1: "highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments". |
| 300 | Key words | Incubation | none | PASS | Section 1: "projects gaining adoption, focusing on improving stability and maturity". |
| 301 | Key words | containerd | none | PASS | Section 1: "an industry-standard container runtime with an emphasis on simplicity, robustness and portability". |
| 302 | Key words | CRI | none | PASS | Section 1: "the main protocol for the communication between the kubelet and the container runtime". |
| 303 | Key words | Namespace | none | PASS | Section 2: "an administrative construct that is not meant to be used as a security feature". |
| 304 | Key words | Snapshotter | none | PASS | Section 2: "Snapshotters manage the snapshots of the container filesystems". |
| 305 | Key words | Unpacking | none | PASS | Section 2: "The layers must then be read and applied to a filesystem, which creates a committed snapshot ... This process is known as unpacking". |
| 306 | Key words | Image index | none | PASS | Section 2: "An image index contains a list of manifests for specific platforms". |
| 307 | Key words | DiffID | none | PASS | Section 2: "A layer DiffID is the digest over the layer's uncompressed tar archive". |
| 308 | Key words | Garbage collector | none | PASS | Section 2: "scheduled on a background goroutine, and it runs based on a number of configurable factors". |
| 309 | Key words | kube-scheduler | none | PASS | Section 1: "the default scheduler for Kubernetes, and it runs as part of the control plane". |
| 310 | Key words | nodeSelector | none | PASS | Section 2: "A `nodeSelector` only selects nodes with all the specified labels". |
| 311 | Key words | Custom resource | none | PASS | Section 1: "an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation". |
| 312 | Key words | Operator | none | PASS | Section 1: "clients of the Kubernetes API that act as controllers for a Custom Resource". |
| 313 | Key words | Transition rule | none | PASS | Section 2: "A rule that refers to `oldSelf` is a transition rule". |
| 314 | Key words | Rook | none | PASS | Section 1: "Rook is an open source cloud-native storage orchestrator". |
| 315 | Key words | Ceph | none | PASS | Section 1: "Ceph is a distributed storage system that provides file, block and object storage". |
| 316 | Key words | CephCluster | none | PASS | Section 1: "the CephCluster CRD is used by Rook to allow creation and customization of storage clusters". |

Open FAILs after round 7: 5

Changed after this round: Five FAILs. The sentence on the Rook dates said "the same page", but the dates are on the CNCF Rook page, not on the page of the containerd claims, and it now names the CNCF Rook page. The sentence that said that `docker exec` runs the commands in the node container had no cite, and it now says what step 14 did. The step-15 sentence said that the commands are from the prerequisites page of the Rook docs, but only `lsblk -f` is, and it now cites that command alone and calls the other commands the tutorial's own. The claim that `kubectl get nodes -o wide` shows the container runtime of each node had no cite, and it now says only what step 10 showed. The sentence "The content store keeps each blob once" had no source, and it is removed. The checkers of the four rounds of the full page that this report holds (7 to 10) were given the labels 6, 7, 7, and 9. The headings of this report have the numbers 7, 8, 9, and 10, because the report already had a round 6 (2026-11-15) for the shelf version of the page.

## Round 8 (2026-11-20)

# Fact check: devops / cncf-runtime-data (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | containerd is the runtime Kubernetes talks to through the CRI; Rook runs Ceph on Kubernetes | none (description) | PASS | S8: "containerd has built-in support for Kubernetes Container Runtime Interface (CRI)." S30: "Rook automates deployment and management of Ceph..." The rest of the description line describes the run (N/A). |
| 2 | Lede | CNCF, containerd, Rook, scheduler, run with no cloud account, uses Docker | none (lede) | N/A | Framing and the page's own run. The facts about the tools are cited in the sections. |
| 3 | What it is | CNCF hosts critical components of the global technology infrastructure | S1 | PASS | "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 4 | What it is | CNCF is part of the nonprofit Linux Foundation | S1 | PASS | "CNCF is part of the nonprofit Linux Foundation." |
| 5 | What it is | The TOC defines 4 stages of the project lifecycle | S3 | PASS | "The TOC defines 4 stages of the project lifecycle:" |
| 6 | What it is | Graduated and incubating projects are considered stable and used in production | S2 | PASS | "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 7 | What it is | Incubation: projects gaining adoption, improving stability and maturity | S3 | PASS | "Incubation - Projects gaining adoption, focusing on improving stability and maturity." |
| 8 | What it is | Graduated: highly mature, robust, adopters demonstrated production-readiness | S3 | PASS | "Graduated - Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments." |
| 9 | What it is | containerd accepted March 29, 2017 at Incubating | S4 | PASS | "containerd was accepted to CNCF on March 29, 2017 at the Incubating maturity level..." |
| 10 | What it is | containerd Graduated on February 28, 2019 | S4 | PASS | "...then moved to the Graduated maturity level on February 28, 2019." |
| 11 | What it is | Rook accepted January 29, 2018 | S5 | PASS | "Rook was accepted to CNCF on January 29, 2018..." |
| 12 | What it is | Rook Incubating on September 25, 2018 | S5 | PASS | "...moved to the Incubating maturity level on September 25, 2018..." |
| 13 | What it is | Rook Graduated on October 7, 2020 | S5 | PASS | "...then moved to the Graduated maturity level on October 7, 2020." |
| 14 | What it is | Project pages call containerd an open and reliable container runtime | S4 | PASS | "An open and reliable container runtime" |
| 15 | What it is | Project pages call Rook storage orchestration for Kubernetes | S5 | PASS | "Storage Orchestration for Kubernetes" |
| 16 | What it is | containerd calls itself an industry-standard runtime: simplicity, robustness, portability | S6 | PASS | "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 17 | What it is | README: available as a daemon for Linux and Windows | S7 | PASS | "It is available as a daemon for Linux and Windows..." |
| 18 | What it is | The daemon can manage the complete container lifecycle of its host system | S7 | PASS | "...which can manage the complete container lifecycle of its host system" |
| 19 | What it is | Designed to be embedded into a larger system, not used directly by developers or end-users | S7 | PASS | "containerd is designed to be embedded into a larger system, rather than being used directly by developers or end-users." |
| 20 | What it is | A working container runtime is needed on each Node so the kubelet can launch Pods | S20 | PASS | "You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers." (the text is split over lines 930-934) |
| 21 | What it is | CRI is the main protocol between kubelet and runtime | S20 | PASS | "The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and Container Runtime." |
| 22 | What it is | containerd has built-in CRI support | S8 | PASS | "containerd has built-in support for Kubernetes Container Runtime Interface (CRI)." |
| 23 | What it is | containerd runs on the same node as the kubelet; its cri plugin handles all CRI requests | S15 | PASS | "Containerd operates on the same node as the Kubelet. The cri plugin inside containerd handles all CRI service requests from the Kubelet..." |
| 24 | What it is | kube-scheduler is the default scheduler and runs in the control plane | S23 | PASS | "...is the default scheduler for Kubernetes and runs as part of the control plane." |
| 25 | What it is | A scheduler watches for newly created Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 26 | What it is | Finds feasible Nodes, scores them, picks the highest score | S23 | PASS | "...score the feasible Nodes and picks a Node with the highest score among the feasible ones" |
| 27 | What it is | "So the scheduler chooses the node..." summary | none | N/A | The page labels it as the tutorial's own summary. |
| 28 | What it is | Rook is an open source cloud-native storage orchestrator | S30 | PASS | "Rook is an open source cloud-native storage orchestrator..." |
| 29 | What it is | Ceph is a distributed storage system: file, block, object | S30 | PASS | "Ceph is a distributed storage system that provides file, block and object storage..." |
| 30 | What it is | Rook automates deploy and management for self-managing, self-scaling, self-healing storage | S30 | PASS | "Rook automates deployment and management of Ceph to provide self-managing, self-scaling, and self-healing storage services." |
| 31 | What it is | The operator builds on Kubernetes resources to deploy, configure, provision, scale, upgrade, monitor Ceph | S30 | PASS | "The Rook operator does this by building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 32 | What it is | A custom resource extends the Kubernetes API and is not necessarily in a default install | S24 | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default..." |
| 33 | What it is | The CRD API resource allows you to define custom resources | S24 | PASS | "API resource allows you to define custom resources." |
| 34 | What it is | Operators are API clients that act as controllers for a Custom Resource | S26 | PASS | "Operators are clients of the Kubernetes API that act as" |
| 35 | What it is | Most common way to deploy an operator: add the CRD and its Controller | S26 | PASS | "The most common way to deploy an operator is to add the" |
| 36 | What it is | CephCluster CRD is used by Rook for creation and customization of storage clusters | S31 | PASS | "The CephCluster CRD is used by Rook to allow creation and customization of storage clusters..." |
| 37 | How it works | containerd supports extending its functionality using most of its interfaces; custom runtime, snapshotter, content store, gRPC | S10 | PASS | "containerd supports extending its functionality using most of its defined interfaces. This includes using a customized runtime, snapshotter, content" |
| 38 | How it works | Plugins used internally: decoupled, stable, treated equally | S10 | PASS | "decoupled, stable, and treated equally with external plugins." |
| 39 | How it works | `ctr plugins ls` shows all plugins, also those that did not load | S10 | PASS | "To see all the plugins containerd has, use ctr plugins ls"; "all the plugins can be seen as well those which did not successfully load" |
| 40 | How it works | Smart client: what the daemon does not require, the client does | S10 | PASS | "containerd has a smart client architecture, meaning any functionality which is not required by the daemon is done by the client." |
| 41 | How it works | Includes spec creation, registry interaction, loading image from tar | S10 | PASS | "creating a container's specification, interacting with an image registry, or loading an image from tar." |
| 42 | How it works | Fully namespaced API for multiple consumers | S9 | PASS | "containerd offers a fully namespaced API so multiple consumers can all use a single containerd instance without conflicting with one another." |
| 43 | How it works | Content shared via content addresses; names and metadata per namespace | S9 | PASS | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 44 | How it works | Namespaces are administrative, not a security feature; trivial to switch | S9 | PASS | "...an administrative construct that is not meant to be used as a security feature. It is trivial for clients to switch namespaces." |
| 45 | How it works | Default namespace is "default"; `--namespace`/`-n` changes it | S9 | PASS | "Simply set the --namespace,-n flag on ctr to change the namespace. If you do not provide a namespace, ctr client commands will all use the default namespace, which is simply named "default"." |
| 46 | How it works | Docs list several CLI projects | S8 | PASS | "There are several command line interface (CLI) projects for interacting with containerd:" |
| 47 | How it works | ctr is bundled and solely for debugging containerd | S8 | PASS | "the ctr tool is bundled together with containerd... solely made for debugging containerd." |
| 48 | How it works | nerdctl gives a stable, human-friendly experience | S8 | PASS | "nerdctl tool provides stable and human-friendly user experience." |
| 49 | How it works | crictl is a CLI for CRI-compatible runtimes; used to inspect and debug on a node | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes. You can use it to inspect and debug container runtimes and applications on a" |
| 50 | How it works | Content areas: OCI registry, content store, snapshots | S12 | PASS | "Content exists in several areas in the containerd lifecycle: OCI registry... containerd content store... snapshots" |
| 51 | How it works | Image and content must be loaded into the local content store | S12 | PASS | "The image and all its content must be loaded into the local content store." |
| 52 | How it works | Layers read and applied to a filesystem, committed snapshot; called unpacking | S12 | PASS | "...creating what is known as a "committed snapshot"... This process is known as "unpacking"." |
| 53 | How it works | A final mutable mountable filesystem, an active snapshot, on the final layer | S12 | PASS | "A final mutable mountable filesystem, an "active snapshot", must be created on top of the final layer" |
| 54 | How it works | A container can be created with its root filesystem as the active snapshot | S12 | PASS | "A container now can be created, with its root filesystem as the active snapshot." |
| 55 | How it works | Image is a JSON descriptor; always has mediaType; manifest or index | S12 | PASS | "An "image" is comprised of a JSON document... A descriptor always contains an element, mediaType... if the descriptor is a manifest or an index" |
| 56 | How it works | Image manifest: config and layers for one image, specific arch and OS | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 57 | How it works | Image index contains a list of manifests for specific platforms | S19 | PASS | "manifests ... This REQUIRED property contains a list of manifests for specific platforms." and "The image index is a higher-level manifest which points to specific image manifests" |
| 58 | How it works | Purpose of an index: pick the manifest for the target platform | S12 | PASS | "The purpose of an index is to allow us to pick which manifest matches our target platform." |
| 59 | How it works | DiffID is the digest of the uncompressed tar | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 60 | How it works | Do not confuse DiffIDs with layer digests referenced in the manifest | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 61 | How it works | Content store similar to the registry; file named by hash | S12 | PASS | "it stores them very similarly to how the registry does. Each component is stored in a file whose name is the hash of it." |
| 62 | How it works | Snapshotters manage container filesystem snapshots | S11 | PASS | "Snapshotters manage the snapshots of the container filesystems." |
| 63 | How it works | overlayfs default, akin to overlay2; native akin to vfs | S11 | PASS | "overlayfs (default)... akin to Docker/Moby's "overlay2" storage driver"; "native: Native file copying driver. Akin to Docker/Moby's "vfs" driver." |
| 64 | How it works | Snapshotters inspected with `ctr plugins ls` or `nerdctl info` | S11 | PASS | "The available snapshotters can be inspected by running ctr plugins ls or nerdctl info." |
| 65 | How it works | Multiple runtimes, each container with a different runtime | S10 | PASS | "containerd supports multiple container runtimes. Each container can be invoked with a different runtime." |
| 66 | How it works | v2 runtimes invoked as binaries to start the shim | S10 | PASS | "containerd invokes v2 runtimes as binaries on the system, which are used to start the shim process" |
| 67 | How it works | README: Linux and Windows features handled via runc and/or OS-specific libraries | S7 | PASS | "Most interactions with the Linux and Windows container feature sets are handled via runc and/or OS-specific libraries" |
| 68 | How it works | CRI plugin handles kubelet requests; pod networking via CNI, another CNCF project | S15 | PASS | "cri manages pod networking via CNI (another CNCF project)." |
| 69 | How it works | Plugin creates pod network namespace, configures with CNI | S15 | PASS | "cri creates the pod's network namespace, and then configures it using CNI;" |
| 70 | How it works | Then creates a pause (sandbox) container | S15 | PASS | "...create and start a special pause container (the sandbox container)" |
| 71 | How it works | Later pulls the image if not on the node | S15 | PASS | "cri further uses containerd to pull the image if the image is not present on the node;" |
| 72 | How it works | kubelet is a gRPC client of the runtime | S20 | PASS | "The kubelet acts as a client when connecting to the container runtime via gRPC." |
| 73 | How it works | K8s v1.26+ needs the v1 CRI API; without it kubelet will not register the node | S20 | PASS | "For Kubernetes v1.26 and later, the kubelet requires that the container runtime supports the v1 CRI API. If a container runtime does not support the v1 API, the kubelet will not register the node." |
| 74 | How it works | Both need a cgroup driver | S21 | PASS | "the kubelet and the container runtime need to use a cgroup driver." |
| 75 | How it works | Critical that both use the same driver and are configured the same | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| 76 | How it works | `SystemdCgroup = true` in the runc options in the containerd config | S21 | PASS | "[plugins.'io.containerd.cri.v1.runtime'.containerd.runtimes.runc.options] SystemdCgroup = true" |
| 77 | How it works | systemd driver recommended with cgroup v2 | S21 | PASS | "The systemd cgroup driver is recommended if you use cgroup v2." |
| 78 | How it works | GC scheduled on a background goroutine, configurable factors | S13 | PASS | "The garbage collector (gc) is scheduled on a background goroutine and runs based on a number of configurable factors." |
| 79 | How it works | Client may request GC during removal; service does not return until done; supported for images and leases | S13 | PASS | "may also request a garbage collection during resource removal... The service will not return until the garbage collection has completed. This is currently supported on removal of images and" |
| 80 | How it works | Optional `hosts.toml` per registry host from a config directory | S16 | PASS | "specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| 81 | How it works | Mirror: appends registry host namespace as query parameter `ns` | S16 | PASS | "If a host is configured that's different to the registry host namespace (e.g. a mirror), then containerd will append the registry host namespace to requests as a query parameter called ns." |
| 82 | How it works | Non-root user can run containerd with user_namespaces(7) | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)." |
| 83 | How it works | RootlessKit sets up a user namespace with mount and optional network namespace | S14 | PASS | "RootlessKit can be used for setting up a user namespace (along with mount namespace and optionally network namespace)." |
| 84 | How it works | Need a `config.toml` with your own path configuration | S14 | PASS | "You need to provide config.toml with your own path configuration." |
| 85 | How it works | Client such as `ctr` must run inside the daemon namespaces | S14 | PASS | "A client program such as ctr also needs to be executed inside the daemon namespaces." |
| 86 | How it works | "The practice run below does not set up a user namespace..." | none | N/A | Describes the page's own run. |
| 87 | How it works | Scheduling matches Pods to Nodes so the kubelet can run them | S23 | PASS | "In Kubernetes, scheduling refers to making sure that Pods are matched to Nodes so that" |
| 88 | How it works | Scheduler finds the best Node for each Pod it discovers | S23 | PASS | "...for finding the best Node for that Pod to run on." |
| 89 | How it works | If no node suitable, pod stays unscheduled | S23 | PASS | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| 90 | How it works | Scheduler notifies the API server in binding | S23 | PASS | "The scheduler then notifies the API server about this decision in a process called binding." |
| 91 | How it works | `nodeSelector` matches node labels, one way to choose Pod placement | S41 | PASS | "nodeSelector field matching against node labels" |
| 92 | How it works | nodeSelector only selects nodes with all the specified labels | S41 | PASS | "Kubernetes only schedules the Pod onto nodes that have each of the labels you specify." |
| 93 | How it works | Kubernetes populates standard labels on all nodes | S41 | PASS | "Kubernetes also populates a standard set of labels on all nodes in a cluster." |
| 94 | How it works | Affinity/anti-affinity expand constraint types | S41 | PASS | "Affinity and anti-affinity expand the types of constraints you can" |
| 95 | How it works | A rule can be soft or preferred; Pod still scheduled if no match | S41 | PASS | "You can indicate that a rule is soft or preferred, so that the scheduler still schedules the Pod even if it can't find a matching node." |
| 96 | How it works | Operator chart installs Rook to create, configure, manage Ceph clusters | S34 | PASS | "Installs rook to create, configure, and manage Ceph clusters on Kubernetes." |
| 97 | How it works | Chart bootstraps a rook-ceph-operator deployment | S34 | PASS | "This chart bootstraps a rook-ceph-operator deployment" |
| 98 | How it works | Three steps: Helm chart, Ceph-CSI drivers chart, Rook cluster | S34 | PASS | "Install the Helm chart / Install the Ceph-CSI drivers chart so CSI can provision and mount volumes / Create a Rook cluster." |
| 99 | How it works | Cluster chart is a simple packaging of templates that optionally create Rook resources | S35 | PASS | "This chart is a simple packaging of templates that will optionally create Rook resources such as:" |
| 100 | How it works | Resources: CephCluster/Filesystem/ObjectStore CRs, storage classes, dashboard ingress, toolbox | S35 | PASS | "CephCluster, CephFilesystem, and CephObjectStore CRs / Storage classes... / Ingress for external access to the dashboard / Toolbox" |
| 101 | How it works | Default values create one block pool, filesystem, object store with storage classes | S35 | PASS | "The default values for cephBlockPools, cephFileSystems, and CephObjectStores will create one of each, and their corresponding storage classes." |
| 102 | How it works | `crds.enabled`: whether chart creates and updates CRDs | S34 | PASS | "Whether the helm chart should create and update the CRDs." |
| 103 | How it works | If false, manage CRDs with `deploy/examples/crds.yaml` | S34 | PASS | "If false, the CRDs must be managed independently with deploy/examples/crds.yaml." |
| 104 | How it works | Set only on first deployment; if later disabled the cluster may be destroyed | S34 | PASS | "WARNING Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 105 | How it works | Quickstart commands `kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml` then `operator.yaml` | S32 | PASS | "kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml" and "kubectl create -f operator.yaml" |
| 106 | How it works | Kubernetes v1.32 through v1.37 supported | S32 | PASS | "Kubernetes versions v1.32 through v1.37 are supported." |
| 107 | How it works | `count` sets the mon number; between 1 and 9; recommended most commonly 3 | S36 | PASS | "count: Set the number of mons to be started. The number must be between 1 and 9. The recommended value is most commonly 3." |
| 108 | How it works | Odd number for highest availability; majority for quorum | S36 | PASS | "For highest availability, an odd number of mons should be specified... To maintain quorum a majority of mons must be up." |
| 109 | How it works | `dataDirHostPath` is the host path for config and data of each service | S36 | PASS | "The path on the host (hostPath) where config and data should be stored for each of the services." |
| 110 | How it works | For tests, delete the path when re-creating on same hosts; else stale keys, mons fail | S36 | PASS | "...the path used by dataDirHostPath must be deleted. Otherwise, stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| 111 | How it works | Glossary Ceph terms MON, MGR, MDS, OSD, RBD, RGW | S31 | PASS | "Ceph Monitor (MON) / Ceph Manager (MGR) / Ceph Metadata Server (MDS) / Object Storage Device (OSD) / RADOS Block Device (RBD) / Ceph Object Gateway (RGW)" |
| 112 | How it works | At least one local storage type: raw devices, raw partitions, LVM LVs, PVs in block mode | S33 | PASS | "To configure the Ceph storage cluster, at least one of these local storage types is required: Raw devices... Raw partitions... LVM Logical Volumes" (block-mode PV is the next list item, not re-read) |
| 113 | How it works | Raw devices: no partitions/filesystems; partitions and LVs: no formatted filesystem | S33 | PASS | "Raw devices (no partitions or formatted filesystems) / Raw partitions (no formatted filesystem) / LVM Logical Volumes (no formatted filesystem)" |
| 114 | How it works | `lsblk -f`: non-empty FSTYPE means a filesystem on the device | S33 | PASS | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| 115 | How it works | Running udev daemon required on all storage nodes | S33 | PASS | "A running udev daemon is required on all storage nodes." |
| 116 | How it works | Ceph needs a kernel built with RBD | S33 | PASS | "Ceph requires a Linux kernel built with the RBD module." |
| 117 | How it works | CephFS RWX: recommended minimum kernel 4.17 | S33 | PASS | "If creating RWX volumes from a Ceph shared file system (CephFS), the recommended minimum kernel version is 4.17." |
| 118 | How it works | CRs validated via OpenAPI v3.0; also `x-kubernetes-validations` when Validation Rules is enabled; admission webhooks | S25 | PASS | "OpenAPI v3.0 schemas, by x-kubernetes-validations when the Validation Rules feature is enabled, and you ... admission webhooks." |
| 119 | How it works | `x-kubernetes-validations` can validate with CEL | S25 | PASS | "The x-kubernetes-validations extension can be used to validate custom resources using Common Expression Language (CEL) expressions" |
| 120 | How it works | A rule referring to `oldSelf` is a transition rule | S25 | PASS | "A rule that contains an expression referencing the identifier oldSelf is implicitly considered a transition rule." |
| 121 | How it works | Transition rules apply only to operations meeting criteria: update of existing object; never create; old and new value exist | S25 | PASS | "transition rules apply only to operations meeting the following criteria: The operation updates an existing object. Transition rules never apply to create operations. Both an old and a new value exist." |
| 122 | How it works | Unknown fields are pruned before persisting | S25 | PASS | "if you specify a field that the API server does not recognize, the unknown field is pruned (removed) before being persisted." |
| 123 | How it works | Opt out of pruning for a sub-tree with `x-kubernetes-preserve-unknown-fields: true` | S25 | PASS | "opt-out of that for specific sub-trees of fields by adding x-kubernetes-preserve-unknown-fields: true" |
| 124 | How it works | Published schemas let kubectl check unknown fields and reject early | S25 | PASS | "Because the OpenAPI validation schemas are also published to clients, kubectl also checks for unknown fields and rejects those objects well before they" |
| 125 | How it works | `kubectl apply --dry-run=server` sends a server-side request without persisting | S27 | PASS | "If server strategy, submit server-side request without persisting the resource." |
| 126 | How it works | `--validate` defaults to strict | S27 | PASS | "--validate string[="strict"] Default: "strict"" |
| 127 | How it works | "true"/"strict" use a schema and fail if invalid; server-side validation if ServerSideFieldValidation is on, else less reliable client-side | S27 | PASS | ""true" or "strict" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not." |
| 128 | How it works | `--server-side` makes apply run in the server | S27 | PASS | "--server-side If true, apply runs in the server instead of the client." |
| 129 | How it works | `kubectl wait` waits for the condition in the Status field of every given resource | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 130 | How it works | kubectl uses the published schema for client-side validation and `kubectl explain` | S25 | PASS | "The kubectl command-line tool consumes the published schema to perform client-side validation (kubectl create and kubectl apply), schema explanation (kubectl explain)" |
| 131 | How it works | For `kubectl get` the API server decides the columns; a CRD can customize | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns for a" |
| 132 | Try it | Run-record paragraphs 1-3 (date, versions, folders, sockets, kind cluster `qa-p7b`, Docker state, own choices, what was not run) | none | N/A | Record of the page's own run, labelled "the tutorial ran...". |
| 133 | Try it | Rootless page of containerd docs sets `CONTAINERD_ADDRESS` the same way | S14 | PASS | "$ export CONTAINERD_ADDRESS=/run/user/1001/containerd/containerd.sock" |
| 134 | Try it | `containerd.io` DEB/RPM packages are distributed by Docker, not the containerd project | S8 | PASS | "The containerd.io packages in DEB and RPM formats are distributed by Docker (not by the containerd project)." |
| 135 | Try it | `containerd.io` contains runc but not CNI plugins | S8 | PASS | "The containerd.io package contains runc too, but does not contain CNI plugins." |
| 136 | Try it | `dpkg -S` result, package version, not installed by the tutorial, charts and image not pinned | none | N/A | Run record and the page's own choices. |
| 137 | Try it | Step 1 code block and its output, 4 bullets | none | N/A | The commands are the tutorial's own; the output is the run record. |
| 138 | Try it | Step 2 code block (config.toml with root, state, temp, addresses) | S14 | PASS | "You need to provide config.toml with your own path configuration." The values are the tutorial's own choices, as the bullet says. |
| 139 | Try it | Step 2 output and bullets (version = 4, booted, ctr version, separate process) | none | N/A | Run record. |
| 140 | Try it | Step 3 bullet: `ctr plugins ls` shows all plugins, also those that did not load | S10 | PASS | "all the plugins can be seen as well those which did not successfully load" |
| 141 | Try it | Step 3: `cri` plugin handles all CRI requests of the kubelet | S15 | PASS | "The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| 142 | Try it | Step 3: counts of ok/skip/error, skip rows, cri error, defaults printed | none | N/A | Run record. |
| 143 | Try it | Step 3: to use systemd with runc, set `SystemdCgroup = true` | S21 | PASS | "Configuring the systemd cgroup driver ... [...runtimes.runc.options] SystemdCgroup = true" |
| 144 | Try it | Step 3: critical that kubelet and runtime use the same cgroup driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 145 | Try it | Step 4 code, output, bullets 1, 2, 4 | none | N/A | Run record. |
| 146 | Try it | Step 4: OCI spec says an image index contains a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 147 | Try it | Step 5 code and output (index, 20 manifests, digests, 42 blobs) | none | N/A | Run record. |
| 148 | Try it | Step 5: index choice: find the platform, use that hash to retrieve the manifest | S12 | PASS | "If the descriptor is an index, find in it the platform (architecture+os)... use that hash to retrieve the manifest" |
| 149 | Try it | Step 5: manifest provides config and layers for a single image | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image" |
| 150 | Try it | Step 5: each component stored in a file whose name is the hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 151 | Try it | Step 5: DiffID is digest of the uncompressed tar | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 152 | Try it | Step 5: `cat <file> \| gunzip - \| sha256sum -` gives the uncompressed hash | S12 | PASS | "$ cat <file> \| gunzip - \| sha256sum -" |
| 153 | Try it | Step 5: do not confuse DiffIDs with layer digests | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 154 | Try it | Step 6 code, output, bullets 1, 2, 4, 5 | none | N/A | Run record. |
| 155 | Try it | Step 6: content shared via content addresses, names and metadata per namespace | S9 | PASS | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 156 | Try it | Step 7 code, output, bullets 2-3 (help text of `--sync`, store went to 0 files) | none | N/A | The help line is printed in the run output ("--sync Synchronously remove image and all associated resources"); run record. |
| 157 | Try it | Step 7: GC on a background goroutine, configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors" |
| 158 | Try it | Step 7: OCI image manifest references config and layer tars; stored as generic blobs; client sets relations with labels | S13 | PASS | "an OCI image has a manifest which references a config file and layer tars. These resources are stored in containerd as generic blobs, it is the client that understands the relationships between these blobs and sets them up using labels" |
| 159 | Try it | Step 7: client may request GC during removal; service waits; supported for images and leases | S13 | PASS | "may also request a garbage collection during resource removal... The service will not return until the garbage collection has completed. This is currently supported on removal of images and" |
| 160 | Try it | Step 8 code, output, bullets 1-3, 5 | none | N/A | Run record. |
| 161 | Try it | Step 8: layers read and applied, committed snapshot, "unpacking" | S12 | PASS | "...creating what is known as a "committed snapshot"... This process is known as "unpacking"." |
| 162 | Try it | Step 8: non-root user can run containerd with user_namespaces(7) | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)." |
| 163 | Try it | Step 8: a container can be created with the active snapshot as root filesystem | S12 | PASS | "A container now can be created, with its root filesystem as the active snapshot." |
| 164 | Try it | Step 9 code, output, bullets (repo add, versions, render sizes, kinds) | none | N/A | Run record. |
| 165 | Try it | Step 9: `helm template` renders chart templates locally and displays the output | S39 | PASS | "Render chart templates locally and display the output." |
| 166 | Try it | Step 9: chart bootstraps a rook-ceph-operator deployment | S34 | PASS | "This chart bootstraps a rook-ceph-operator deployment" |
| 167 | Try it | Step 9: default values create one block pool, one filesystem, one object store and storage classes | S35 | PASS | "will create one of each, and their corresponding storage classes." |
| 168 | Try it | Step 9: clusters can go in the operator's namespace or a separate one | S35 | PASS | "The clusters can be installed into the same namespace as the operator or a separate namespace." |
| 169 | Try it | Step 10 code and output; bullets on node, pods, events | none | N/A | Run record. |
| 170 | Try it | Step 10: kind runs a local cluster using Docker containers as nodes | S40 | PASS | "kind runs a local Kubernetes cluster by using Docker containers as "nodes"." |
| 171 | Try it | Step 10: `kind create cluster --image=...` for another node image | S40 | PASS | "To specify another image use the --image flag – kind create cluster --image=...." |
| 172 | Try it | Step 10: Kubernetes 1.37 requires a CRI-conforming runtime | S21 | PASS | "Kubernetes 1.37 requires that you use a runtime that conforms with the" (continues "Container Runtime Interface (CRI)") |
| 173 | Try it | Step 10: kube-scheduler is the default scheduler in the control plane | S23 | PASS | "is the default scheduler for Kubernetes and runs as part of the control plane." |
| 174 | Try it | Step 10: a scheduler watches for new Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 175 | Try it | Step 11 code and output; bullets 2-3, 5, 7 | none | N/A | Run record and the tutorial's own choice. |
| 176 | Try it | Step 11: nodeSelector is the simplest recommended node selection form | S41 | PASS | "nodeSelector is the simplest recommended form of node selection constraint." |
| 177 | Try it | Step 11: only schedules onto nodes with each label | S41 | PASS | "Kubernetes only schedules the Pod onto nodes that have each of the labels you" |
| 178 | Try it | Step 11: pod stays unscheduled if no node is suitable | S23 | PASS | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| 179 | Try it | Step 11: nodes have labels; can attach manually | S41 | PASS | "Like many other Kubernetes objects, nodes have labels. You can attach labels manually." |
| 180 | Try it | Step 11: scheduler notifies API server in binding | S23 | PASS | "The scheduler then notifies the API server about this decision in a process called binding." |
| 181 | Try it | Step 12 code and output; bullets on counts, api-resources, schema | none | N/A | Run record. |
| 182 | Try it | Step 12: `--show-only` shows only manifests from the given template | S39 | PASS | "-s, --show-only stringArray only show manifests rendered from the given templates" |
| 183 | Try it | Step 12: `--server-side` runs apply in the server | S27 | PASS | "If true, apply runs in the server instead of the client." |
| 184 | Try it | Step 12: `kubectl wait` waits for the condition in the Status field | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 185 | Try it | Step 12: once a CR is installed, users create and access objects with kubectl like built-in resources | S24 | PASS | "Once a custom resource is installed, users can create and access its objects using kubectl, just as they do for built-in resources like Pods." |
| 186 | Try it | Step 12: `kubectl explain` describes fields of each supported API resource | S28 | PASS | "This command describes the fields associated with each supported API resource." |
| 187 | Try it | Step 12: Rook docs say the mon number must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 188 | Try it | Step 12: `x-kubernetes-validations` validates with CEL; `oldSelf` rule is a transition rule | S25 | PASS | "The x-kubernetes-validations extension can be used to validate custom resources using Common Expression Language (CEL) expressions"; "implicitly considered a transition rule" |
| 189 | Try it | Step 13 code and output; bullets 1-3, 5-7 | none | N/A | Run record; the `sed` edits are the tutorial's own. |
| 190 | Try it | Step 13: each `--dry-run=server` submits a server-side request without persisting | S27 | PASS | "If server strategy, submit server-side request without persisting the resource." |
| 191 | Try it | Step 13: Rook docs say count between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 192 | Try it | Step 13: `--validate` defaults to strict; "true"/"strict" validate with a schema and fail the request | S27 | PASS | "--validate string[="strict"] Default: "strict"... "true" or "strict" will use a schema to validate the input and fail the request if invalid." |
| 193 | Try it | Step 13: API server decides `kubectl get` columns; CRD can customize | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns for a" |
| 194 | Try it | Step 13: transition rules never apply to create operations | S25 | PASS | "Transition rules never apply to create operations." |
| 195 | Try it | Step 14 code and output; bullets 2 and 6 (`crictl ps` columns, delete) | none | N/A | Run record. The `crictl ps` bullet describes the printed columns. |
| 196 | Try it | Step 14: kind docs: `docker exec -it my-node-name crictl images` lists images on a node | S40 | PASS | "docker exec -it my-node-name crictl images" |
| 197 | Try it | Step 14: `crictl` inspects and debugs runtimes and apps on a node | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a" |
| 198 | Try it | Step 14: critical that kubelet and runtime use the same cgroup driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 199 | Try it | Step 14: `ctr` uses `default` when you give none | S9 | PASS | "If you do not provide a namespace, ctr client commands will all use the default namespace" |
| 200 | Try it | Step 14: `crictl` is a CLI for CRI-compatible runtimes | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 201 | Try it | Step 15 code and output; bullets 1, 4-6 run facts | none | N/A | Run record; the commands are the tutorial's own. |
| 202 | Try it | Step 15: Rook prerequisites page names `lsblk -f` to confirm filesystems | S33 | PASS | "Confirm whether the partitions or devices are formatted with filesystems with the following command: $ lsblk -f" |
| 203 | Try it | Step 15: non-empty FSTYPE means a filesystem | S33 | PASS | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| 204 | Try it | Step 15: Rook skips a device that has partitions or a formatted filesystem | S38 | PASS | "if Rook determines that a device is not available (has existing partitions or a formatted filesystem), Rook will skip consuming the devices." |
| 205 | Try it | Step 15: recommended minimum kernel 4.17 for CephFS RWX | S33 | PASS | "the recommended minimum kernel version is 4.17." |
| 206 | Try it | Step 15: Ceph needs RBD; test with `modprobe rbd` | S33 | PASS | "Ceph requires a Linux kernel built with the RBD module... Test your Kubernetes nodes by running modprobe rbd." |
| 207 | Try it | Step 15: running udev daemon required on all storage nodes | S33 | PASS | "A running udev daemon is required on all storage nodes." |
| 208 | How a tester uses it | Node runtime shown in step 10; versions 2.4.2 and 2.3.4 | none | N/A | Run record. |
| 209 | How a tester uses it | Need a working runtime on each node | S20 | PASS | "You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers." |
| 210 | How a tester uses it | K8s v1.26+ needs v1 CRI API; otherwise kubelet will not register the node | S20 | PASS | "If a container runtime does not support the v1 API, the kubelet will not register the node." |
| 211 | How a tester uses it | Both need a cgroup driver; cgroupfs is the kubelet default; systemd recommended with cgroup v2; critical to match | S21 | PASS | "The cgroupfs driver is the default cgroup driver in the kubelet." "The systemd cgroup driver is recommended if you use cgroup v2." "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 212 | How a tester uses it | Step 14 and step 3 settings; tester can compare | none | N/A | Run record and advice. |
| 213 | How a tester uses it | `crictl` is a CLI for CRI runtimes; inspect and debug | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 214 | How a tester uses it | `ctr` solely for debugging containerd | S8 | PASS | "the ctr tool is solely made for debugging containerd." |
| 215 | How a tester uses it | `ctr` uses `default` namespace when none is given | S9 | PASS | "If you do not provide a namespace, ctr client commands will all use the default namespace" |
| 216 | How a tester uses it | Steps 14 and 6 namespace results; wrong namespace sees no image | none | N/A | Run record and advice. |
| 217 | How a tester uses it | Each component stored in a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 218 | How a tester uses it | Index contains manifests for platforms; manifest gives config and layers | S19, S18 | PASS | S19: "contains a list of manifests for specific platforms." S18: "provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 219 | How a tester uses it | DiffIDs not to be confused with layer digests | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 220 | How a tester uses it | Step 5 and 6 numbers; counting blobs twice; step 7 results; advice on `--sync` | none | N/A | Run record and advice. |
| 221 | How a tester uses it | GC on a background goroutine, configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors" |
| 222 | How a tester uses it | Optional `hosts.toml` per registry host | S16 | PASS | "specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| 223 | How a tester uses it | Mirror: registry host namespace appended as query parameter `ns` | S16 | PASS | "containerd will append the registry host namespace to requests as a query parameter called ns." |
| 224 | How a tester uses it | Scheduler watches for new Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 225 | How a tester uses it | Pod stays unscheduled if no node is suitable | S23 | PASS | "the pod remains unscheduled until the scheduler is able to place it." |
| 226 | How a tester uses it | Step 11 results; reading events; limits of what was tested | none | N/A | Run record and advice. |
| 227 | How a tester uses it | CRs validated via OpenAPI v3.0 and `x-kubernetes-validations` when Validation Rules is enabled | S25 | PASS | "OpenAPI v3.0 schemas, by x-kubernetes-validations when the Validation Rules feature is enabled" |
| 228 | How a tester uses it | `--dry-run=server` submits without persisting | S27 | PASS | "submit server-side request without persisting the resource." |
| 229 | How a tester uses it | Step 13 rejections; keep good and bad files; operator not run | none | N/A | Run record and advice. |
| 230 | How a tester uses it | Rook docs: mon number between 1 and 9; odd number for highest availability | S36 | PASS | "The number must be between 1 and 9."; "For highest availability, an odd number of mons should be specified." |
| 231 | How a tester uses it | CRD minimum 0; API server accepted `count: 0`; operator unknown | none | N/A | Run record. |
| 232 | How a tester uses it | At least one local storage type is required | S33 | PASS | "at least one of these local storage types is required" |
| 233 | How a tester uses it | Rook skips unavailable devices; view the OSD preparation log | S38 | PASS | "Rook will skip consuming the devices."; "To see if a device was skipped, view the OSD preparation log on the node where the device was skipped." |
| 234 | How a tester uses it | Step 15 results | none | N/A | Run record. |
| 235 | How a tester uses it | Toolbox is a container with common debugging tools; example commands | S37 | PASS | "The Rook toolbox is a container with common tools used for rook debugging and testing."; "ceph status / ceph osd status / ceph df / rados df" |
| 236 | How a tester uses it | Two common causes for pending PVCs; one OSD for test, three for the production example | S38 | PASS | "There are two common causes for the PVCs staying in pending state: There are no OSDs in the cluster / The CSI provisioner pod is not running or is not responding"; "In a "test" cluster, only one OSD is required... three OSDs would be required." |
| 237 | Common mistakes | Namespaces are administrative, not a security feature; trivial to switch | S9 | PASS | "...an administrative construct that is not meant to be used as a security feature. It is trivial for clients to switch namespaces." |
| 238 | Common mistakes | `ctr` uses `default` without a namespace | S9 | PASS | "ctr client commands will all use the default namespace" |
| 239 | Common mistakes | GC is scheduled on a background goroutine | S13 | PASS | "The garbage collector (gc) is scheduled on a background goroutine" |
| 240 | Common mistakes | Critical that both use the same driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 241 | Common mistakes | Operator deploys, configures, provisions, scales, upgrades, monitors Ceph | S30 | PASS | "building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 242 | Common mistakes | Rook docs: number must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 243 | Common mistakes | `crds.enabled` set only on first deployment; later disabled may destroy cluster | S34 | PASS | "WARNING Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 244 | Common mistakes | Delete `dataDirHostPath` on reuse; else stale keys, mons fail | S36 | PASS | "the path used by dataDirHostPath must be deleted. Otherwise, stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| 245 | Common mistakes | Odd number for availability; majority for quorum | S36 | PASS | "an odd number of mons should be specified... To maintain quorum a majority of mons must be up." |
| 246 | Common mistakes | Rook skips a device with partitions or a formatted filesystem | S38 | PASS | "Rook will skip consuming the devices." |
| 247 | Common mistakes | Scheduler matches Pods to Nodes so the kubelet can run them | S23 | PASS | "scheduling refers to making sure that Pods are matched to Nodes so that" |
| 248 | Common mistakes | Step 6, 7, 11, 13, 14, 15 results; "Do not assume the default"; "advice is to read events first" | none | N/A | Run record and the tutorial's own advice. |
| 249 | What a tester can check | Callout "Tutorial advice": 11 bullets | none | PASS | It says "This list is the tutorial's own advice". Every tool fact it uses (`kubectl get nodes -o wide`, `crictl`, `ctr -n`, `ctr images rm --sync`, `FailedScheduling`, `--dry-run=server`, mon count, prerequisites, `ceph status`) is supported by the rest of the page. |
| 250 | Key words | Graduated | none | PASS | Section 1: "highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments". |
| 251 | Key words | Incubation | none | PASS | Section 1: "projects gaining adoption, focusing on improving stability and maturity". |
| 252 | Key words | containerd | none | PASS | Section 1: "an industry-standard container runtime with an emphasis on simplicity, robustness and portability". |
| 253 | Key words | CRI | none | PASS | Section 1: "the main protocol for the communication between the kubelet and the container runtime". |
| 254 | Key words | Namespace | none | PASS | Section 2: "an administrative construct that is not meant to be used as a security feature". |
| 255 | Key words | Snapshotter | none | PASS | Section 2: "Snapshotters manage the snapshots of the container filesystems". |
| 256 | Key words | Unpacking | none | PASS | Section 2: "The layers must then be read and applied to a filesystem, which creates a committed snapshot... This process is known as unpacking". |
| 257 | Key words | Image index | none | PASS | Section 2: "An image index contains a list of manifests for specific platforms". |
| 258 | Key words | DiffID | none | PASS | Section 2: "A layer DiffID is the digest over the layer's uncompressed tar archive". |
| 259 | Key words | Garbage collector | none | PASS | Section 2: "scheduled on a background goroutine, and it runs based on a number of configurable factors". |
| 260 | Key words | kube-scheduler | none | PASS | Section 1: "the default scheduler for Kubernetes, and it runs as part of the control plane". |
| 261 | Key words | nodeSelector | none | PASS | Section 2: "A `nodeSelector` only selects nodes with all the specified labels". |
| 262 | Key words | Custom resource | none | PASS | Section 1: "an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation". |
| 263 | Key words | Operator | none | PASS | Section 1: "clients of the Kubernetes API that act as controllers for a Custom Resource". |
| 264 | Key words | Transition rule | none | PASS | Section 2: "A rule that refers to `oldSelf` is a transition rule". |
| 265 | Key words | Rook | none | PASS | Section 1: "Rook is an open source cloud-native storage orchestrator". |
| 266 | Key words | Ceph | none | PASS | Section 1: "Ceph is a distributed storage system that provides file, block and object storage". |
| 267 | Key words | CephCluster | none | PASS | Section 1: "the CephCluster CRD is used by Rook to allow creation and customization of storage clusters". |

Open FAILs after round 8: 0

Changed after this round: Nothing. The text of the page was the same in round 9, whose checker found two FAILs that this round did not report.

## Round 9 (2026-11-20)

# Fact check: devops / cncf-runtime-data (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | containerd is "the container runtime that Kubernetes talks to through the CRI", and Rook "runs Ceph storage on Kubernetes" | none | FAIL | The description line has no cite. Fix: add cites 8/15/20 for containerd and the CRI, and 30 for Rook and Ceph. Or cut the wording down to what the cited sections give. |
| 2 | Description line | The parenthetical practice run (containerd as a normal user, charts rendered, kind cluster, no cloud account) | none | N/A | Describes the page's own practice run. |
| 3 | Lede | "This page covers the CNCF and two of its projects… needs no cloud account, and the cluster steps use Docker"; links to the previous and next pages | none | N/A | Describes the page and its own run. Site links are not facts. |
| 4 | What it is | CNCF hosts critical components of the global technology infrastructure | S1 | PASS | "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 5 | What it is | CNCF is part of the nonprofit Linux Foundation | S1 | PASS | "CNCF is part of the nonprofit Linux Foundation." |
| 6 | What it is | The TOC defines 4 stages of the project lifecycle | S3 | PASS | "The TOC defines 4 stages of the project lifecycle:" |
| 7 | What it is | The projects page says graduated and incubating projects are considered stable and used successfully in production | S2 | PASS | "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 8 | What it is | Incubation = projects gaining adoption, improving stability and maturity | S3 | PASS | "Incubation - Projects gaining adoption, focusing on improving stability and maturity." |
| 9 | What it is | Graduated = highly mature, robust projects whose adopters have demonstrated production-readiness | S3 | PASS | "Graduated - Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments." |
| 10 | What it is | containerd accepted March 29, 2017 at Incubating | S4 | PASS | "containerd was accepted to CNCF on March 29, 2017 at the Incubating maturity level" |
| 11 | What it is | containerd moved to Graduated on February 28, 2019 | S4 | PASS | "…and then moved to the Graduated maturity level on February 28, 2019." |
| 12 | What it is | Rook accepted January 29, 2018 | S5 | PASS | "Rook was accepted to CNCF on January 29, 2018" |
| 13 | What it is | Rook moved to Incubating September 25, 2018 | S5 | PASS | "moved to the Incubating maturity level on September 25, 2018" |
| 14 | What it is | Rook moved to Graduated October 7, 2020 | S5 | PASS | "and then moved to the Graduated maturity level on October 7, 2020." |
| 15 | What it is | The project page calls containerd an open and reliable container runtime | S4 | PASS | "An open and reliable container runtime" |
| 16 | What it is | The project page calls Rook storage orchestration for Kubernetes | S5 | PASS | "Storage Orchestration for Kubernetes" |
| 17 | What it is | containerd calls itself an industry-standard container runtime with an emphasis on simplicity, robustness and portability | S6 | PASS | "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 18 | What it is | The README says it is available as a daemon for Linux and Windows | S7 | PASS | "It is available as a daemon for Linux and Windows" |
| 19 | What it is | The daemon can manage the complete container lifecycle of its host system | S7 | PASS | "which can manage the complete container lifecycle of its host system" |
| 20 | What it is | containerd is designed to be embedded into a larger system, not used directly by developers or end-users | S7 | PASS | "containerd is designed to be embedded into a larger system, rather than being used directly by developers or end-users." |
| 21 | What it is | You need a working container runtime on each Node so the kubelet can launch Pods and containers | S20 | PASS | "You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers." |
| 22 | What it is | The CRI is the main protocol for communication between the kubelet and the container runtime | S20 | PASS | "The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and Container Runtime." |
| 23 | What it is | containerd has built-in support for the CRI | S8 | PASS | "containerd has built-in support for Kubernetes Container Runtime Interface (CRI)." |
| 24 | What it is | containerd operates on the same node as the kubelet; its cri plugin handles all CRI service requests | S15 | PASS | "Containerd operates on the same node as the Kubelet. The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| 25 | What it is | kube-scheduler is the default scheduler and runs as part of the control plane | S23 | PASS | "is the default scheduler for Kubernetes and runs as part of the control plane." |
| 26 | What it is | A scheduler watches for newly created Pods that have no Node assigned | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 27 | What it is | It finds feasible Nodes, scores them, picks the highest score | S23 | PASS | "The scheduler finds feasible Nodes for a Pod and then runs a set of functions to score the feasible Nodes and picks a Node with the highest score" |
| 28 | What it is | "So the scheduler chooses the node, and the runtime on that node, such as containerd, runs the containers." | none | FAIL | A general claim about how the tools work, with no cite. The next sentence calls it the tutorial's own summary, but it is still a fact. Fix: cite S23 for the scheduler and S15/S20 for the runtime, or cut it. |
| 29 | What it is | "That last sentence is the tutorial's own summary of the sources above." | none | N/A | Sentence describing the page. |
| 30 | What it is | Rook is an open source cloud-native storage orchestrator | S30 | PASS | "Rook is an open source cloud-native storage orchestrator" |
| 31 | What it is | Ceph is a distributed storage system providing file, block and object storage | S30 | PASS | "Ceph is a distributed storage system that provides file, block and object storage" |
| 32 | What it is | Rook automates deployment and management of Ceph for self-managing, self-scaling, self-healing storage | S30 | PASS | "Rook automates deployment and management of Ceph to provide self-managing, self-scaling, and self-healing storage services." |
| 33 | What it is | The operator builds on Kubernetes resources to deploy, configure, provision, scale, upgrade, monitor Ceph | S30 | PASS | "The Rook operator does this by building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 34 | What it is | A custom resource is an API extension not necessarily in a default install | S24 | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default" |
| 35 | What it is | The CustomResourceDefinition API resource lets you define custom resources | S24 | PASS | "The CustomResourceDefinition API resource allows you to define custom resources." |
| 36 | What it is | Operators are API clients that act as controllers for a Custom Resource | S26 | PASS | "Operators are clients of the Kubernetes API that act as controllers for a Custom Resource." |
| 37 | What it is | Most common way to deploy an operator: add the CRD and its Controller | S26 | PASS | "The most common way to deploy an operator is to add the Custom Resource Definition and its associated Controller to your cluster." |
| 38 | What it is | CephCluster CRD is used by Rook to allow creation and customization of storage clusters | S31 | PASS | "The CephCluster CRD is used by Rook to allow creation and customization of storage clusters" |
| 39 | How it works | containerd supports extending its functionality using most of its defined interfaces; includes custom runtime, snapshotter, content store, gRPC interfaces | S10 | PASS | "containerd supports extending its functionality using most of its defined interfaces. This includes using a customized runtime, snapshotter, content store, and even adding gRPC interfaces." |
| 40 | How it works | Plugins used internally so implementations are decoupled, stable, equal to external plugins | S10 | PASS | "decoupled, stable, and treated equally with external plugins." |
| 41 | How it works | `ctr plugins ls` shows all plugins, also those that did not load | S10 | PASS | "use ctr plugins ls"; "all the plugins can be seen as well those which did not successfully load" |
| 42 | How it works | Smart client: functionality the daemon does not need is done by the client; includes spec, registry, tar load | S10 | PASS | "containerd has a smart client architecture, meaning any functionality which is not required by the daemon is done by the client. This includes most high level interactions such as creating a container's specification, interacting with an image registry, or loading an image from tar." |
| 43 | How it works | Fully namespaced API; shared content addresses, separate names and metadata | S9 | PASS | "containerd offers a fully namespaced API so multiple consumers can all use a single containerd instance"; "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 44 | How it works | Namespaces are an administrative construct, not a security feature; trivial to switch | S9 | PASS | "an administrative construct that is not meant to be used as a security feature."; "It is trivial for clients to switch namespaces." |
| 45 | How it works | Default namespace "default"; `--namespace`/`-n` changes it | S9 | PASS | "Simply set the --namespace,-n flag on ctr to change the namespace. If you do not provide a namespace, ctr client commands will all use the default namespace, which is simply named \"default\"." |
| 46 | How it works | Docs list several CLI projects; `ctr` bundled and solely for debugging; `nerdctl` stable and human-friendly | S8 | PASS | "There are several command line interface (CLI) projects for interacting with containerd"; "the ctr tool is solely made for debugging containerd"; "tool provides stable and human-friendly user experience." |
| 47 | How it works | `crictl` is a CLI for CRI-compatible runtimes; use to inspect and debug on a node | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes. You can use it to inspect and debug container runtimes and applications on a" |
| 48 | How it works | Content areas: OCI registry, content store, snapshots; load to local store; unpack to committed snapshot; active snapshot; container root filesystem | S12 | PASS | "Content exists in several areas in the containerd lifecycle"; "creating what is known as a \"committed snapshot\"… This process is known as \"unpacking\"."; "A final mutable mountable filesystem, an \"active snapshot\""; "with its root filesystem as the active snapshot." |
| 49 | How it works | An image is a JSON descriptor; always has mediaType; manifest or index; index purpose | S12 | PASS | "known as a descriptor. A descriptor always contains an element, mediaType, which tells us which type it is. It is one of two options"; "The purpose of an index is to allow us to pick which manifest matches our target platform." |
| 50 | How it works | Manifest provides a configuration and layers for a single image for one architecture and OS | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 51 | How it works | Image index contains a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 52 | How it works | Layer DiffID is the digest over the uncompressed tar; do not confuse with layer digests | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive"; "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 53 | How it works | Content stored like the registry; file name is the hash | S12 | PASS | "it stores them very similarly to how the registry does. Each component is stored in a file whose name is the hash of it." |
| 54 | How it works | Snapshotters manage snapshots; overlayfs default ≈ overlay2; native ≈ vfs; inspect with `ctr plugins ls` or `nerdctl info` | S11 | PASS | "Snapshotters manage the snapshots of the container filesystems."; "overlayfs (default)… akin to Docker/Moby's \"overlay2\""; "native: Native file copying driver. Akin to Docker/Moby's \"vfs\" driver."; "ctr plugins ls or nerdctl info" |
| 55 | How it works | Multiple runtimes, each container with a different runtime; v2 runtimes as binaries start the shim | S10 | PASS | "containerd supports multiple container runtimes. Each container can be"; "containerd invokes v2 runtimes as binaries on the system, which are used to start the shim process" |
| 56 | How it works | Linux and Windows container features handled via runc and/or OS-specific libraries | S7 | PASS | "the Linux and Windows container feature sets are handled via runc and/or OS-specific libraries" |
| 57 | How it works | CRI plugin manages pod networking via CNI (another CNCF project); creates netns, pause/sandbox container, pulls image if absent | S15 | PASS | "cri manages pod networking via CNI (another CNCF project)"; "cri creates the pod's network namespace, and then configures it using CNI"; "special pause container (the sandbox container)"; "pull the image if the image is not present on the node" |
| 58 | How it works | Kubelet is a gRPC client; v1.26+ needs v1 CRI API; otherwise node not registered | S20 | PASS | "The kubelet acts as a client when connecting to the container runtime via gRPC."; "the kubelet will not register the node." |
| 59 | How it works | Kubelet and runtime need a cgroup driver; critical to match | S21 | PASS | "the kubelet and the container runtime need to use a cgroup driver. It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| 60 | How it works | `SystemdCgroup = true` under runc options; systemd driver recommended with cgroup v2 | S21 | PASS | "To use the systemd cgroup driver in /etc/containerd/config.toml with runc,"; "SystemdCgroup = true"; "The systemd cgroup driver is recommended if you use cgroup v2." |
| 61 | How it works | GC on background goroutine, configurable factors; client may request GC at removal; service waits; supported for images and leases | S13 | PASS | "The garbage collector (gc) is scheduled on a background goroutine and runs based on a number of configurable factors."; "The service will not return until the garbage collection has completed. This is currently supported on removal of images and" |
| 62 | How it works | Optional `hosts.toml` per registry host; mirror gets `ns` query parameter | S16 | PASS | "specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory."; "containerd will append the registry host namespace to requests as a query parameter called ns." |
| 63 | How it works | Non-root user via user_namespaces(7); RootlessKit; own `config.toml`; client in daemon namespaces | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)."; "RootlessKit can be used for setting up a user namespace (along with mount namespace and optionally network namespace)"; "You need to provide config.toml with your own path configuration"; "A client program such as ctr also needs to be executed inside the daemon namespaces." |
| 64 | How it works | "The practice run below does not set up a user namespace, and the tutorial states what that changes." | none | N/A | Describes the page's own run. |
| 65 | How it works | Scheduling matches Pods to Nodes; scheduler responsible for best Node; unscheduled if none suitable; binding | S23 | PASS | "scheduling refers to making sure that Pods are matched to Nodes so that Kubelet can run them."; "remains unscheduled until the scheduler is able to place it."; "in a process called binding." |
| 66 | How it works | `nodeSelector` matches node labels; only nodes with all labels; standard labels on all nodes | S41 | PASS | "nodeSelector field matching against node labels"; "nodeSelector only selects nodes with all the specified labels"; "Kubernetes also populates a standard set of labels on all nodes in a cluster." |
| 67 | How it works | Affinity expands constraints; soft/preferred rule still schedules Pod | S41 | PASS | "Affinity and anti-affinity expand the types of constraints you can define."; "You can indicate that a rule is soft or preferred, so that the scheduler still schedules the Pod even if it can't find a matching node." |
| 68 | How it works | Ceph Operator chart installs Rook; bootstraps rook-ceph-operator; three install steps | S34 | PASS | "Installs rook to create, configure, and manage Ceph clusters on Kubernetes."; "bootstraps a rook-ceph-operator deployment"; "Install the Helm chart / Install the Ceph-CSI drivers chart so CSI can provision and mount volumes / Create a Rook cluster." |
| 69 | How it works | Ceph Cluster chart is a simple packaging that optionally creates Rook resources (CRs, storage classes, dashboard ingress, toolbox) | S35 | PASS | "This chart is a simple packaging of templates that will optionally create Rook resources such as: CephCluster, CephFilesystem, and CephObjectStore CRs / Storage classes… / Ingress for external access to the dashboard / Toolbox" |
| 70 | How it works | Default values create one block pool, filesystem, object store with storage classes | S35 | PASS | "The default values for cephBlockPools, cephFileSystems, and CephObjectStores will create one of each, and their corresponding storage classes." |
| 71 | How it works | `crds.enabled`; false means manage with `deploy/examples/crds.yaml`; set only at first deployment, may destroy cluster | S34 | PASS | "Whether the helm chart should create and update the CRDs. If false, the CRDs must be managed independently with deploy/examples/crds.yaml. WARNING Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 72 | How it works | Quickstart commands and Kubernetes v1.32–v1.37 supported | S32 | PASS | "kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml"; "kubectl create -f operator.yaml"; "Kubernetes versions v1.32 through v1.37 are supported." |
| 73 | How it works | `count` mons 1–9, recommended 3, odd for availability, majority for quorum | S36 | PASS | "count: Set the number of mons to be started. The number must be between 1 and 9. The recommended value is most commonly 3. For highest availability, an odd number of mons should be specified."; "To maintain quorum a majority of mons must be up." |
| 74 | How it works | `dataDirHostPath` meaning and stale-keys warning | S36 | PASS | "The path on the host (hostPath) where config and data should be stored for each of the services."; "the path used by dataDirHostPath must be deleted. Otherwise, stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| 75 | How it works | Glossary names MON, MGR, MDS, OSD, RBD, RGW | S31 | PASS | "Ceph Monitor (MON) / Ceph Manager (MGR) / Ceph Metadata Server (MDS) / Object Storage Device (OSD) / RADOS Block Device (RBD) / Ceph Object Gateway (RGW)" |
| 76 | How it works | Local storage types required; no filesystems; `lsblk -f` FSTYPE rule | S33 | PASS | "at least one of these local storage types is required: Raw devices (no partitions or formatted filesystems) / Raw partitions (no formatted filesystem) / LVM Logical Volumes (no formatted filesystem)"; "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." The persistent-volume type is in the same bullet list (S33 lines 181-185), not shown in the grep. |
| 77 | How it works | udev daemon required; RBD kernel module; CephFS RWX kernel 4.17 | S33 | PASS | "A running udev daemon is required on all storage nodes."; "Ceph requires a Linux kernel built with the RBD module."; "the recommended minimum kernel version is 4.17." |
| 78 | How it works | Custom resources validated via OpenAPI v3.0, `x-kubernetes-validations` (Validation Rules enabled), admission webhooks, CEL | S25 | PASS | "OpenAPI v3.0 schemas, by x-kubernetes-validations when the Validation Rules feature is enabled, and you"; "admission webhooks."; "validate custom resources using Common Expression Language (CEL) expressions" |
| 79 | How it works | `oldSelf` rule is a transition rule; update only; never on create; old and new value exist | S25 | PASS | "A rule that contains an expression referencing the identifier oldSelf is implicitly considered a transition rule."; "The operation updates an existing object. Transition rules never apply to create operations. Both an old and a new value exist." |
| 80 | How it works | Unknown fields pruned; opt out via `x-kubernetes-preserve-unknown-fields: true`; kubectl rejects unknown fields before sending | S25 | PASS | "the unknown field is pruned (removed) before being persisted."; "opt-out of that for specific sub-trees of fields by adding x-kubernetes-preserve-unknown-fields: true"; "kubectl also checks for unknown fields and rejects those objects well before they" |
| 81 | How it works | `kubectl apply --dry-run=server` submits server-side request without persisting | S27 | PASS | "If server strategy, submit server-side request without persisting the resource." |
| 82 | How it works | `--validate` defaults to strict; true/strict uses schema and fails; server-side validation if ServerSideFieldValidation, else less reliable client-side | S27 | PASS | "--validate string[=\"strict\"] Default: \"strict\""; "\"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not." |
| 83 | How it works | `--server-side` runs apply in the server | S27 | PASS | "--server-side If true, apply runs in the server instead of the client." |
| 84 | How it works | `kubectl wait` waits for condition in Status field of every resource | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 85 | How it works | kubectl consumes published schema for client-side validation and `kubectl explain` | S25 | PASS | "The kubectl command-line tool consumes the published schema to perform client-side validation (kubectl create and kubectl apply), schema explanation (kubectl explain)" |
| 86 | How it works | For `kubectl get`, API server decides columns; CRD can customize | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns for a" |
| 87 | Try it | Run record: date, versions, folders, `HOME`, `CONTAINERD_ADDRESS` set once, `/work` folder | none | N/A | Record of the run, labelled as the tutorial's run. |
| 88 | Try it | "The rootless page of the containerd docs sets the variable in the same way" | S14 | PASS | "$ export CONTAINERD_ADDRESS=/run/user/1001/containerd/containerd.sock" |
| 89 | Try it | `export CONTAINERD_ADDRESS="$PWD/containerd.sock"` in each shell | none | N/A | Step for the reader's own work. |
| 90 | Try it | Run record: normal user, own folders/sockets, machine containerd as root, dockerd flag, Docker Hub image, chart repo, kind cluster `qa-p7b`, Docker network cleanup, no change to real home or `~/.kube` | none | N/A | Record of the run. |
| 91 | Try it | Tutorial's own choices; things not run (`ctr run`, user namespace, operator, `modprobe rbd`); Linux only | none | N/A | Record of the run and page framing. |
| 92 | Try it | `containerd.io` DEB/RPM packages are distributed by Docker, not by the containerd project | S8 | PASS | "The containerd.io packages in DEB and RPM formats are distributed by Docker (not by the containerd project)." |
| 93 | Try it | `containerd.io` contains runc too, but no CNI plugins | S8 | PASS | "The containerd.io package contains runc too, but does not contain CNI plugins." |
| 94 | Try it | `dpkg -S` result, package version, package pre-installed, not checked | none | N/A | Record of the run. |
| 95 | Try it | Helm/kind/kubectl provenance paragraph (earlier pages, no chart pinning, hello-world not digest-pinned) | none | N/A | Record of the run and the tutorial's own choices. The earlier-page claims are links, not tool facts. |
| 96 | Try it | Step 1 commands, output, and 4 bullets (versions printed) | none | N/A | Record of the run. |
| 97 | Try it | Step 2 code and output; bullets on config values, `version = 4`, boot line, `ctr version`, separate process | none | N/A | Record of the run and the tutorial's own choices. |
| 98 | Try it | Step 2: docs say you must provide a `config.toml` with your own path configuration | S14 | PASS | "You need to provide config.toml with your own path configuration." |
| 99 | Try it | Step 3 code, output, and bullets on 68 plugins, skip rows, `cri` error, defaults | none | N/A | Record of the run. |
| 100 | Try it | Step 3: docs say you can see all plugins, also those that did not load | S10 | PASS | "From the output all the plugins can be seen as well those which did not successfully load" |
| 101 | Try it | Step 3: `cri` plugin handles all CRI requests of the kubelet | S15 | PASS | "The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| 102 | Try it | Step 3: set `SystemdCgroup = true` for systemd driver; critical to use same driver | S21 | PASS | "SystemdCgroup = true"; "It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| 103 | Try it | Step 4 code, output, and bullets (fetch, 42 blobs, index, 10 platforms, tag) | none | N/A | Record of the run. |
| 104 | Try it | Step 4: OCI spec says an image index contains a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 105 | Try it | Step 5 code, output, and bullets (20 manifests, digests, 42 files, DiffID equals gunzip hash) | none | N/A | Record of the run. |
| 106 | Try it | Step 5: index choice (if index, find platform, use hash) | S12 | PASS | "If the descriptor is an index, find in it the platform (architecture+os)… use that hash to retrieve the manifest" |
| 107 | Try it | Step 5: manifest provides config and layers for a single image | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image" |
| 108 | Try it | Step 5: each component stored in a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 109 | Try it | Step 5: DiffID is the digest over the uncompressed tar | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 110 | Try it | Step 5: hash when uncompressed with `cat <file> \| gunzip - \| sha256sum -` | S12 | PASS | "$ cat <file> \| gunzip - \| sha256sum -" |
| 111 | Try it | Step 5: do not confuse DiffIDs with layer digests | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 112 | Try it | Step 6 code, output, and bullets (42 files, `qa`/`qa2`/`other`) | none | N/A | Record of the run. |
| 113 | Try it | Step 6: content shared via content addresses; names and metadata per namespace | S9 | PASS | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 114 | Try it | Step 7 code, output, and bullets (`--sync`, 42 → 0 files, earlier run differed); help text of `ctr images rm` | none | N/A | Record of the run. The help text appears in the run output ("Synchronously remove image and all associated resources"). |
| 115 | Try it | Step 7: GC on background goroutine, configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors." |
| 116 | Try it | Step 7: OCI image manifest references config and layer tars; stored as generic blobs; client sets up relations with labels | S13 | PASS | "an OCI image has a manifest which references a config file and layer tars. These resources are stored in containerd as generic blobs, it is the client that understands the relationships between these blobs and sets them up using labels" |
| 117 | Try it | Step 7: client may request GC at removal; service waits; images and leases | S13 | PASS | "The service will not return until the garbage collection has completed. This is currently supported on removal of images and" |
| 118 | Try it | Step 8 code, output, and bullets (exit 1, unpack failed, 0 images, 42 blobs) | none | N/A | Record of the run, with the tutorial's labelled own reading. |
| 119 | Try it | Step 8: layers read and applied to create a committed snapshot, known as unpacking | S12 | PASS | "creating what is known as a \"committed snapshot\"… This process is known as \"unpacking\"." |
| 120 | Try it | Step 8: non-root user via user_namespaces(7) | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)." |
| 121 | Try it | Step 8: container can be created with the active snapshot as root filesystem | S12 | PASS | "A container now can be created, with its root filesystem as the active snapshot." |
| 122 | Try it | Step 9 code, output, and bullets (versions, 2,160,311 bytes, kinds, 7,867 bytes) | none | N/A | Record of the run. |
| 123 | Try it | Step 9: `helm template` renders chart templates locally and displays output | S39 | PASS | "Render chart templates locally and display the output." |
| 124 | Try it | Step 9: chart bootstraps a rook-ceph-operator deployment | S34 | PASS | "This chart bootstraps a rook-ceph-operator deployment" |
| 125 | Try it | Step 9: default values create one block pool, filesystem, object store and storage classes | S35 | PASS | "will create one of each, and their corresponding storage classes." |
| 126 | Try it | Step 9: clusters can be installed in the same namespace as the operator or a separate one | S35 | PASS | "The clusters can be installed into the same namespace as the operator or a separate namespace." |
| 127 | Try it | Step 10 code, output, and node/pod/event bullets | none | N/A | Record of the run. |
| 128 | Try it | Step 10: kind runs a local cluster using Docker containers as nodes; `kind create cluster --image=...` | S40 | PASS | "kind runs a local Kubernetes cluster by using Docker containers as “nodes”."; "To specify another image use the --image flag – kind create cluster --image=...." |
| 129 | Try it | Step 10: Kubernetes 1.37 requires a CRI-conforming runtime | S21 | PASS | "Kubernetes 1.37 requires that you use a runtime that conforms with the" |
| 130 | Try it | Step 10: kube-scheduler is the default scheduler in the control plane | S23 | PASS | "is the default scheduler for Kubernetes and runs as part of the control plane." |
| 131 | Try it | Step 10: scheduler watches for newly created Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 132 | Try it | Step 11 code, output, and run bullets (Pending, Unschedulable, label, scheduled) | none | N/A | Record of the run. |
| 133 | Try it | Step 11: nodeSelector is the simplest recommended form; only schedules to nodes with each label | S41 | PASS | "nodeSelector is the simplest recommended form of node selection constraint."; "Kubernetes only schedules the Pod onto nodes that have each of the labels you" |
| 134 | Try it | Step 11: pod remains unscheduled until the scheduler can place it | S23 | PASS | "remains unscheduled until the scheduler is able to place it." |
| 135 | Try it | Step 11: nodes have labels; you can attach labels manually | S41 | PASS | "attach labels manually." |
| 136 | Try it | Step 11: scheduler notifies the API server in a process called binding | S23 | PASS | "the API server about this decision in a process called binding." |
| 137 | Try it | Step 12 code, output, and bullets (21 CRDs, 19 names, schema min 0 / max 9, rules) | none | N/A | Record of the run. |
| 138 | Try it | Step 12: `helm template --show-only` shows only manifests from given templates | S39 | PASS | "-s, --show-only stringArray only show manifests rendered from the given templates" |
| 139 | Try it | Step 12: `--server-side` runs apply in the server | S27 | PASS | "If true, apply runs in the server instead of the client." |
| 140 | Try it | Step 12: `kubectl wait` waits for condition in Status field | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 141 | Try it | Step 12: once a custom resource is installed, users can use kubectl like built-in resources | S24 | PASS | "Once a custom resource is installed, users can create and access its objects using" |
| 142 | Try it | Step 12: `kubectl explain` describes fields of each supported API resource | S28 | PASS | "This command describes the fields associated with each supported API resource." |
| 143 | Try it | Step 12: Rook docs say count must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 144 | Try it | Step 12: `x-kubernetes-validations` with CEL; `oldSelf` rule is a transition rule | S25 | PASS | "The x-kubernetes-validations extension can be used to validate custom resources using Common Expression Language (CEL) expressions"; "implicitly considered a transition rule." |
| 145 | Try it | Step 13 code, output, and bullets on accepted and rejected files | none | N/A | Record of the run. |
| 146 | Try it | Step 13: each `--dry-run=server` submits a server-side request without persisting | S27 | PASS | "submit server-side request without persisting the resource." |
| 147 | Try it | Step 13: `--validate` defaults to strict; true/strict use a schema and fail | S27 | PASS | "Default: \"strict\""; "will use a schema to validate the input and fail the request if invalid." |
| 148 | Try it | Step 13: API server decides `kubectl get` columns; CRD can customize | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command." |
| 149 | Try it | Step 13: transition rules never apply to create operations | S25 | PASS | "Transition rules never apply to create operations." |
| 150 | Try it | Step 14 code, output, and bullets (crictl 1.36.0, `SystemdCgroup`, `k8s.io`) | none | N/A | Record of the run. |
| 151 | Try it | Step 14: kind docs show `docker exec -it my-node-name crictl images` | S40 | PASS | "docker exec -it my-node-name crictl images" |
| 152 | Try it | Step 14: `crictl` inspects and debugs runtimes on a node; CLI for CRI runtimes | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a"; "crictl is a command-line interface for CRI-compatible container runtimes." |
| 153 | Try it | Step 14: critical to use the same cgroup driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 154 | Try it | Step 14: `ctr` uses namespace `default` when none is given | S9 | PASS | "If you do not provide a namespace, ctr client commands will all use the default namespace" |
| 155 | Try it | Step 15 code, output, and run bullets (2 disks, 49 loop, 3 part, `rbd` not loaded, udevd) | none | N/A | Record of the run. |
| 156 | Try it | Step 15: Rook prerequisites page names `lsblk -f` to confirm filesystems | S33 | PASS | "Confirm whether the partitions or devices are formatted with filesystems with the following command:" followed by "$ lsblk -f" |
| 157 | Try it | Step 15: FSTYPE not empty means a filesystem | S33 | PASS | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| 158 | Try it | Step 15: Rook skips devices with partitions or a formatted filesystem | S38 | PASS | "if Rook determines that a device is not available (has existing partitions or a formatted filesystem), Rook will skip consuming the devices." |
| 159 | Try it | Step 15: recommended minimum kernel 4.17 for CephFS RWX | S33 | PASS | "the recommended minimum kernel version is 4.17." |
| 160 | Try it | Step 15: Ceph requires RBD kernel module; test with `modprobe rbd` | S33 | PASS | "Ceph requires a Linux kernel built with the RBD module."; "Test your Kubernetes nodes by running modprobe rbd." |
| 161 | Try it | Step 15: running udev daemon required on all storage nodes | S33 | PASS | "A running udev daemon is required on all storage nodes." |
| 162 | How a tester uses it | Runtime on each Node; v1.26+ requires v1 CRI; node not registered | S20 | PASS | "You need a working container runtime on each Node"; "the kubelet requires that the container runtime supports the v1 CRI API."; "the kubelet will not register the node." |
| 163 | How a tester uses it | Run record: step 10 showed `containerd://2.3.4`; machine had 2.4.2; "A tester can write the runtime…" | none | N/A | Record of the run and reader advice. |
| 164 | How a tester uses it | Kubelet and runtime need a cgroup driver; cgroupfs is the kubelet default; systemd recommended with v2; critical to match | S21 | PASS | "The cgroupfs driver is the default cgroup driver in the kubelet."; "The systemd cgroup driver is recommended if you use cgroup v2."; "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 165 | How a tester uses it | Step 14 and step 3 settings; "A tester can compare…" | none | N/A | Record of the run and reader advice. |
| 166 | How a tester uses it | `crictl` is a CLI for CRI runtimes; inspect and debug | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 167 | How a tester uses it | `ctr` is solely for debugging containerd | S8 | PASS | "the ctr tool is solely made for debugging containerd." |
| 168 | How a tester uses it | `ctr` uses `default` namespace when none is given | S9 | PASS | "ctr client commands will all use the default namespace" |
| 169 | How a tester uses it | Step 14/6 run findings; "A tester who looks in the wrong namespace sees no image." | none | N/A | Record of the run and advice. |
| 170 | How a tester uses it | Each component stored in a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 171 | How a tester uses it | Image index contains a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 172 | How a tester uses it | Manifest provides config and layers for a single image | S18 | PASS | "provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 173 | How a tester uses it | DiffIDs are not to be confused with layer digests | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 174 | How a tester uses it | Step 5/6/7 findings, `--sync` advice, polling not tested | none | N/A | Record of the run and reader advice. |
| 175 | How a tester uses it | GC on background goroutine, configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors." |
| 176 | How a tester uses it | Optional `hosts.toml`; mirror and `ns` parameter | S16 | PASS | "specifying (optionally) a hosts.toml file"; "as a query parameter called ns." |
| 177 | How a tester uses it | Scheduler watches new Pods; unscheduled until placed | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned."; "remains unscheduled until the scheduler is able to place it." |
| 178 | How a tester uses it | Step 11 findings; `kubectl get events` advice; only one kind of unschedulable Pod tested | none | N/A | Record of the run and reader advice. |
| 179 | How a tester uses it | Custom resources validated via OpenAPI v3.0 and `x-kubernetes-validations` | S25 | PASS | "OpenAPI v3.0 schemas, by x-kubernetes-validations when the Validation Rules feature is enabled" |
| 180 | How a tester uses it | `--dry-run=server` submits without persisting | S27 | PASS | "submit server-side request without persisting the resource." |
| 181 | How a tester uses it | Step 13 findings; operator not run | none | N/A | Record of the run. |
| 182 | How a tester uses it | Rook docs: mons between 1 and 9; odd number for highest availability | S36 | PASS | "The number must be between 1 and 9."; "For highest availability, an odd number of mons should be specified." |
| 183 | How a tester uses it | Local storage types required | S33 | PASS | "To configure the Ceph storage cluster, at least one of these local storage types is required:" |
| 184 | How a tester uses it | Rook skips unavailable devices; view OSD preparation log | S38 | PASS | "Rook will skip consuming the devices."; "To see if a device was skipped, view the OSD preparation log on the node where the device was skipped." |
| 185 | How a tester uses it | Step 15 findings (filesystems, `rbd` not loaded, udevd, kernel) | none | N/A | Record of the run. |
| 186 | How a tester uses it | Rook toolbox is a container with common debugging tools; example commands `ceph status`, `ceph osd status`, `ceph df`, `rados df` | S37 | PASS | "The Rook toolbox is a container with common tools used for rook debugging and testing."; "ceph status / ceph osd status / ceph df / rados df" |
| 187 | How a tester uses it | Two common causes of pending PVCs: no OSDs, or CSI provisioner not running or responding | S38 | PASS | "If no devices are found, no OSDs will be created."; "Look in the logs of the CSI provisioner pod to see if there are any errors during the provisioning." Only part of the sentence appears in these grep fragments. The two-cause wording is on the S38 line the grep matched. |
| 188 | How a tester uses it | Test cluster needs one OSD; production storage class example needs three | S38 | PASS | "In a \"test\" cluster, only one OSD is required (see storageclass-test. yaml), three OSDs would be required." |
| 189 | How a tester uses it | "The tutorial ran no operator, and it ran none of these." | none | N/A | Record of the run. |
| 190 | Common mistakes | Namespaces are administrative, not security; trivial to switch | S9 | PASS | "is an administrative construct that is not meant to be used as a security feature."; "It is trivial for clients to switch namespaces." |
| 191 | Common mistakes | `ctr` uses `default` when no namespace is given | S9 | PASS | "ctr client commands will all use the default namespace" |
| 192 | Common mistakes | GC is scheduled on a background goroutine | S13 | PASS | "The garbage collector (gc) is scheduled on a background goroutine" |
| 193 | Common mistakes | Critical that kubelet and runtime use the same driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 194 | Common mistakes | Rook operator deploys, configures, provisions, scales, upgrades, monitors Ceph | S30 | PASS | "building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 195 | Common mistakes | Range 1–9 in Rook docs | S36 | PASS | "The number must be between 1 and 9." |
| 196 | Common mistakes | `crds.enabled` warning: first deployment only; may destroy cluster | S34 | PASS | "WARNING Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 197 | Common mistakes | Reusing hosts: `dataDirHostPath` must be deleted; stale keys; mons fail | S36 | PASS | "the path used by dataDirHostPath must be deleted. Otherwise, stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| 198 | Common mistakes | Odd mons for availability; majority for quorum | S36 | PASS | "an odd number of mons should be specified."; "To maintain quorum a majority of mons must be up." |
| 199 | Common mistakes | Rook skips a device with existing partitions or a formatted filesystem | S38 | PASS | "Rook will skip consuming the devices." |
| 200 | Common mistakes | Scheduler matches Pods to Nodes so the kubelet can run them | S23 | PASS | "Pods are matched to Nodes so that Kubelet can run them." |
| 201 | Common mistakes | Run findings (steps 6, 7, 11, 12, 13, 14, 15) and "The tutorial's advice is to read the events of the Pod first." | none | N/A | Record of the run and advice. |
| 202 | What a tester can check | Callout "Tutorial advice": 11 advice items | none | PASS | The callout says "This list is the tutorial's own advice". Each item is advice or the page's own run finding. None adds an unsupported fact about a tool. The `--sync`, `crictl`, `k8s.io`, `rbd`, udev and `ceph status` points are all backed elsewhere on the page. |
| 203 | Key words | Graduated | none | PASS | Page, How it works → What it is: "Graduated projects as highly mature, robust projects whose adopters have demonstrated their production-readiness…" |
| 204 | Key words | Incubation | none | PASS | "Incubation projects as projects gaining adoption, focusing on improving stability and maturity" |
| 205 | Key words | containerd | none | PASS | "containerd calls itself an industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 206 | Key words | CRI | none | PASS | "The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and the container runtime" |
| 207 | Key words | Namespace | none | PASS | "an administrative construct that is not meant to be used as a security feature" |
| 208 | Key words | Snapshotter | none | PASS | "Snapshotters manage the snapshots of the container filesystems" |
| 209 | Key words | Unpacking | none | PASS | "The layers must then be read and applied to a filesystem, which creates a committed snapshot. This process is known as unpacking" |
| 210 | Key words | Image index | none | PASS | "An image index contains a list of manifests for specific platforms" |
| 211 | Key words | DiffID | none | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 212 | Key words | Garbage collector | none | PASS | "scheduled on a background goroutine, and it runs based on a number of configurable factors" |
| 213 | Key words | kube-scheduler | none | PASS | "kube-scheduler is the default scheduler for Kubernetes, and it runs as part of the control plane" |
| 214 | Key words | nodeSelector | none | PASS | "A `nodeSelector` only selects nodes with all the specified labels" |
| 215 | Key words | Custom resource | none | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation" |
| 216 | Key words | Operator | none | PASS | "Operators are clients of the Kubernetes API that act as controllers for a Custom Resource" |
| 217 | Key words | Transition rule | none | PASS | "A rule that refers to `oldSelf` is a transition rule" |
| 218 | Key words | Rook | none | PASS | "Rook is an open source cloud-native storage orchestrator" |
| 219 | Key words | Ceph | none | PASS | "Ceph is a distributed storage system that provides file, block and object storage" |
| 220 | Key words | CephCluster | none | PASS | "the CephCluster CRD is used by Rook to allow creation and customization of storage clusters" |

Open FAILs after round 9: 2

Changed after this round: Two FAILs. The description line of the page and of the topic list said, with no cite, that containerd is the container runtime that Kubernetes talks to through the CRI, and that Rook runs Ceph storage on Kubernetes. It now names the two projects only. The sentence "So the scheduler chooses the node, and the runtime on that node, such as containerd, runs the containers" had no cite. It is removed, with the line that called it the tutorial's own summary. One PASS row (69) quoted the list of the Ceph Cluster chart with `/` between its items, one (188) joined two sentences of a source, and one (209) repeated the wording of the page, so the repo check could not find their quotes in a source. The quotes of the page itself at those places are in the sources.

## Round 10 (2026-11-20)

# Fact check: devops / cncf-runtime-data (round 10)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page describes itself: CNCF, containerd, Rook, practice run, no cloud account | none | N/A | Describes the page and its practice run. It states no fact about a tool. |
| 2 | Lede | Page covers CNCF, containerd, Rook, and the scheduler. Run needs no cloud account and uses Docker for the cluster steps. It sits between two linked pages. | none | N/A | Framing text about the page. The two paths that start with `/` are links, not facts. |
| 3 | What it is | CNCF hosts critical components of the global technology infrastructure | S1 | PASS | "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 4 | What it is | CNCF is part of the nonprofit Linux Foundation | S1 | PASS | "CNCF is part of the nonprofit Linux Foundation." |
| 5 | What it is | The TOC defines 4 stages of the project lifecycle | S3 | PASS | "The TOC defines 4 stages of the project lifecycle:" |
| 6 | What it is | Graduated and incubating projects are considered stable and are used successfully in production | S2 | PASS | "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 7 | What it is | Incubation: projects gaining adoption, improving stability and maturity | S3 | PASS | "Incubation - Projects gaining adoption, focusing on improving stability and maturity." |
| 8 | What it is | Graduated: highly mature, robust projects with demonstrated production-readiness | S3 | PASS | "Graduated - Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments." |
| 9 | What it is | containerd accepted March 29, 2017 at Incubating | S4 | PASS | "containerd was accepted to CNCF on March 29, 2017 at the Incubating maturity level" |
| 10 | What it is | containerd Graduated on February 28, 2019 | S4 | PASS | "...then moved to the Graduated maturity level on February 28, 2019." |
| 11 | What it is | Rook accepted January 29, 2018 | S5 | PASS | "Rook was accepted to CNCF on January 29, 2018" |
| 12 | What it is | Rook Incubating September 25, 2018 | S5 | PASS | "moved to the Incubating maturity level on September 25, 2018" |
| 13 | What it is | Rook Graduated October 7, 2020 | S5 | PASS | "then moved to the Graduated maturity level on October 7, 2020." |
| 14 | What it is | Project page calls containerd an open and reliable container runtime | S4 | PASS | "An open and reliable container runtime" |
| 15 | What it is | Project page calls Rook storage orchestration for Kubernetes | S5 | PASS | "Storage Orchestration for Kubernetes" |
| 16 | What it is | containerd calls itself an industry-standard runtime (simplicity, robustness, portability) | S6 | PASS | "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 17 | What it is | README: available as a daemon for Linux and Windows | S7 | PASS | "It is available as a daemon for Linux and Windows" |
| 18 | What it is | The daemon can manage the complete container lifecycle of its host system | S7 | PASS | "which can manage the complete container lifecycle of its host system" |
| 19 | What it is | Designed to be embedded in a larger system, not used directly by developers or end-users | S7 | PASS | "containerd is designed to be embedded into a larger system, rather than being used directly by developers or end-users." |
| 20 | What it is | Need a working container runtime on each Node so the kubelet can launch Pods | S20 | PASS | "You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers." |
| 21 | What it is | CRI is the main protocol between kubelet and runtime | S20 | PASS | "The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and Container Runtime." |
| 22 | What it is | containerd has built-in CRI support | S8 | PASS | "containerd has built-in support for Kubernetes Container Runtime Interface (CRI)." |
| 23 | What it is | containerd runs on the same node as the kubelet. Its cri plugin handles all CRI requests from the kubelet. | S15 | PASS | "Containerd operates on the same node as the Kubelet. The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| 24 | What it is | kube-scheduler is the default scheduler and runs as part of the control plane | S23 | PASS | "is the default scheduler for Kubernetes and runs as part of the" |
| 25 | What it is | A scheduler watches for new Pods with no Node assigned | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 26 | What it is | It finds feasible Nodes, scores them, picks the highest score | S23 | PASS | "The scheduler finds feasible Nodes for a Pod and then runs a set of functions to score the feasible Nodes and picks a Node with the highest score" |
| 27 | What it is | Rook is an open source cloud-native storage orchestrator | S30 | PASS | "Rook is an open source cloud-native storage orchestrator" |
| 28 | What it is | Ceph is a distributed storage system with file, block, object storage | S30 | PASS | "Ceph is a distributed storage system that provides file, block and object storage" |
| 29 | What it is | Rook automates Ceph deployment and management for self-managing, self-scaling, self-healing storage | S30 | PASS | "Rook automates deployment and management of Ceph to provide self-managing, self-scaling, and self-healing storage services." |
| 30 | What it is | The operator builds on Kubernetes resources to deploy, configure, provision, scale, upgrade, monitor Ceph | S30 | PASS | "The Rook operator does this by building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 31 | What it is | A custom resource extends the Kubernetes API and is not necessarily in a default install | S24 | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default" |
| 32 | What it is | The CRD API resource lets you define custom resources | S24 | PASS | "API resource allows you to define custom resources." |
| 33 | What it is | Operators are API clients that act as controllers for a Custom Resource | S26 | PASS | "Operators are clients of the Kubernetes API that act as" |
| 34 | What it is | Most common way to deploy an operator: add the CRD and its Controller | S26 | PASS | "The most common way to deploy an operator is to add the" |
| 35 | What it is | Rook glossary: CephCluster CRD lets Rook create and customize storage clusters | S31 | PASS | "The CephCluster CRD is used by Rook to allow creation and customization of storage clusters" |
| 36 | How it works | containerd supports extending its functionality through most of its defined interfaces | S10 | PASS | "containerd supports extending its functionality using most of its defined interfaces." |
| 37 | How it works | This includes a customized runtime, snapshotter, content store, and gRPC interfaces | S10 | PASS | "This includes using a customized runtime, snapshotter, content store, and even adding gRPC interfaces." |
| 38 | How it works | containerd uses plugins internally so implementations are decoupled, stable, equal to external plugins | S10 | PASS | "containerd uses plugins internally to ensure that internal implementations are decoupled, stable, and treated equally with external plugins." |
| 39 | How it works | To see all plugins, use `ctr plugins ls` | S10 | PASS | "To see all the plugins containerd has, use ctr plugins ls" |
| 40 | How it works | Output shows all plugins, also those that did not load | S10 | PASS | "From the output all the plugins can be seen as well those which did not successfully load." |
| 41 | How it works | Smart client: anything the daemon does not require is done by the client | S10 | PASS | "containerd has a smart client architecture, meaning any functionality which is not required by the daemon is done by the client." |
| 42 | How it works | That includes most high level interactions (container spec, registry, load image from tar) | S10 | PASS | "This includes most high level interactions such as creating a container's specification, interacting with an image registry, or loading an image from tar." |
| 43 | How it works | Fully namespaced API lets many consumers share one instance | S9 | PASS | "containerd offers a fully namespaced API so multiple consumers can all use a single containerd instance without conflicting with one another." |
| 44 | How it works | Image content shared via content addresses, names and metadata separate per namespace | S9 | PASS | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 45 | How it works | Namespaces are an administrative construct, not a security feature | S9 | PASS | "namespaces, as implemented, is an administrative construct that is not meant to be used as a security feature." |
| 46 | How it works | It is trivial for clients to switch namespaces | S9 | PASS | "It is trivial for clients to switch namespaces." |
| 47 | How it works | Without a namespace, `ctr` uses "default" | S9 | PASS | "If you do not provide a namespace, ctr client commands will all use the default namespace, which is simply named \"default\"." |
| 48 | How it works | `--namespace` or `-n` of `ctr` changes it | S9 | PASS | "Simply set the --namespace,-n flag on ctr to change the namespace." |
| 49 | How it works | containerd docs list several CLI projects | S8 | PASS | "There are several command line interface (CLI) projects for interacting with containerd:" |
| 50 | How it works | `ctr` is bundled, solely made for debugging | S8 | PASS | "While the ctr tool is bundled together with containerd, it should be noted the ctr tool is solely made for debugging containerd." |
| 51 | How it works | `nerdctl` gives a stable, human-friendly experience | S8 | PASS | "tool provides stable and human-friendly user experience." |
| 52 | How it works | `crictl` is a CLI for CRI-compatible runtimes | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 53 | How it works | Use it to inspect and debug runtimes and applications on a node | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a Kubernetes node." |
| 54 | How it works | Content exists in several areas in the containerd lifecycle | S12 | PASS | "Content exists in several areas in the containerd lifecycle:" |
| 55 | How it works | They are an OCI registry, the content store, and snapshots | S12 | PASS | "OCI registry, for example hub.docker.com or quay.io" (the list continues with the content store and snapshots). |
| 56 | How it works | Image and all content must be loaded into the local content store | S12 | PASS | "The image and all its content must be loaded into the local content store." |
| 57 | How it works | Layers are read and applied to a filesystem, making a committed snapshot | S12 | PASS | "The layers from the image must be read and applied to a filesystem, creating what is known as a \"committed snapshot\"." |
| 58 | How it works | This is known as unpacking | S12 | PASS | "This process is known as \"unpacking\"." |
| 59 | How it works | An active snapshot must be created on top of the final layer | S12 | PASS | "A final mutable mountable filesystem, an \"active snapshot\", must be created on top of the final layer of content for the image." |
| 60 | How it works | A container can then be created with the active snapshot as root filesystem | S12 | PASS | "A container now can be created, with its root filesystem as the active snapshot." |
| 61 | How it works | An image is a JSON document known as a descriptor | S12 | PASS | "An \"image\" is comprised of a JSON document" ... "known as a descriptor." |
| 62 | How it works | A descriptor always has mediaType | S12 | PASS | "A descriptor always contains an element, mediaType, which tells us which type it is." |
| 63 | How it works | mediaType is a manifest or an index | S12 | PASS | "It is one of two options:" (manifest, or an "index") |
| 64 | How it works | OCI spec: manifest gives a config and layers for a single image, one architecture and OS | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 65 | How it works | An image index holds a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 66 | How it works | An index is for picking the manifest that matches the target platform | S12 | PASS | "The purpose of an index is to allow us to pick which manifest matches our target platform." |
| 67 | How it works | DiffID is the digest over the uncompressed tar archive | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 68 | How it works | Do not confuse DiffIDs with layer digests in the manifest | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 69 | How it works | Content in the store is stored much like the registry stores it | S12 | PASS | "it stores them very similarly to how the registry does." |
| 70 | How it works | Each component is a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 71 | How it works | Snapshotters manage snapshots of container filesystems | S11 | PASS | "Snapshotters manage the snapshots of the container filesystems." |
| 72 | How it works | overlayfs is default, akin to Docker's overlay2 | S11 | PASS | "overlayfs (default): OverlayFS. This driver is akin to Docker/Moby's \"overlay2\" storage driver" |
| 73 | How it works | native is a file-copying driver, akin to vfs | S11 | PASS | "native: Native file copying driver. Akin to Docker/Moby's \"vfs\" driver." |
| 74 | How it works | Snapshotters can be inspected with `ctr plugins ls` or `nerdctl info` | S11 | PASS | "The available snapshotters can be inspected by running ctr plugins ls or nerdctl info." |
| 75 | How it works | containerd supports multiple runtimes, one per container | S10 | PASS | "containerd supports multiple container runtimes. Each container can be invoked with a different runtime." |
| 76 | How it works | v2 runtimes are binaries used to start the shim process | S10 | PASS | "containerd invokes v2 runtimes as binaries on the system, which are used to start the shim process for containerd." |
| 77 | How it works | README: interactions handled via runc and/or OS-specific libraries | S7 | PASS | "handled via runc and/or OS-specific libraries" |
| 78 | How it works | CRI plugin handles kubelet requests, manages pod networking via CNI, another CNCF project | S15 | PASS | "cri manages pod networking via CNI (another CNCF project)." |
| 79 | How it works | Plugin creates the pod network namespace and configures it with CNI | S15 | PASS | "cri creates the pod's network namespace, and then configures it using CNI;" |
| 80 | How it works | It creates a pause (sandbox) container | S15 | PASS | "create and start a special pause container (the sandbox container)" |
| 81 | How it works | It pulls the application image if absent | S15 | PASS | "cri further uses containerd to pull the image if the image is not present on the node;" |
| 82 | How it works | kubelet is a gRPC client of the runtime | S20 | PASS | "The kubelet acts as a client when connecting to the container runtime via gRPC." |
| 83 | How it works | Kubernetes v1.26+: kubelet requires v1 CRI API | S20 | PASS | "For Kubernetes v1.26 and later, the kubelet requires that the container runtime supports the v1 CRI API." |
| 84 | How it works | Without v1, the kubelet will not register the node | S20 | PASS | "If a container runtime does not support the v1 API, the kubelet will not register the node." |
| 85 | How it works | kubelet and runtime need a cgroup driver to interface with control groups | S21 | PASS | "To interface with control groups, the kubelet and the container runtime need to use a cgroup driver." |
| 86 | How it works | Critical that both use the same driver and are configured the same | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver and are configured the same." |
| 87 | How it works | Config shows `SystemdCgroup = true` in the runc options | S21 | PASS | "SystemdCgroup = true" (the containerd runc options example). |
| 88 | How it works | systemd driver recommended with cgroup v2 | S21 | PASS | "The systemd cgroup driver is recommended if you use cgroup v2." |
| 89 | How it works | GC is scheduled on a background goroutine and runs on configurable factors | S13 | PASS | "The garbage collector (gc) is scheduled on a background goroutine and runs based on a number of configurable factors." |
| 90 | How it works | A client can request GC during resource removal | S13 | PASS | "the client may also request a garbage collection during resource removal." |
| 91 | How it works | The service does not return until GC completes | S13 | PASS | "The service will not return until the garbage collection has completed." |
| 92 | How it works | Currently supported on removal of images and leases | S13 | PASS | "This is currently supported on removal of images and leases." |
| 93 | How it works | containerd reads an optional `hosts.toml` per registry host from a config directory | S16 | PASS | "specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| 94 | How it works | For a differing host (such as a mirror), containerd adds the registry host namespace as query parameter `ns` | S16 | PASS | "containerd will append the registry host namespace to requests as a query parameter called ns." |
| 95 | How it works | A non-root user can run containerd using user_namespaces(7) | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)." |
| 96 | How it works | RootlessKit can set up a user namespace, with mount namespace and optionally network namespace | S14 | PASS | "RootlessKit can be used for setting up a user namespace (along with mount namespace and optionally network namespace)." |
| 97 | How it works | You must provide a `config.toml` with your own paths | S14 | PASS | "You need to provide config.toml with your own path configuration." |
| 98 | How it works | A client such as `ctr` must run inside the daemon namespaces | S14 | PASS | "A client program such as ctr also needs to be executed inside the daemon namespaces." |
| 99 | How it works | The practice run does not set up a user namespace | none | N/A | Describes the page's own run. |
| 100 | How it works | Scheduling matches Pods to Nodes so the kubelet can run them | S23 | PASS | "are matched to Nodes so that" (the kubelet can run them) |
| 101 | How it works | The scheduler is responsible for finding the best Node for each Pod it discovers | S23 | PASS | "for finding the best Node for that Pod to run on." |
| 102 | How it works | If no node is suitable, the Pod stays unscheduled until placement is possible | S23 | PASS | "remains unscheduled until the scheduler is able to place it." |
| 103 | How it works | The scheduler notifies the API server in a process called binding | S23 | PASS | "the API server about this decision in a process called binding." |
| 104 | How it works | `nodeSelector` matches node labels, one way to choose where Pods run | S41 | PASS | "nodeSelector field matching against node labels" |
| 105 | How it works | `nodeSelector` selects only nodes with all specified labels | S41 | PASS | "nodeSelector only selects nodes with all the specified labels" (the page-text line at line 990 is cut after "nodeSelector only"). Line 982 also says "Kubernetes only schedules the Pod onto nodes that have each of the labels you". |
| 106 | How it works | Kubernetes fills a standard set of labels on all nodes | S41 | PASS | "Kubernetes also populates a standard set of labels" |
| 107 | How it works | Affinity and anti-affinity expand the constraint types | S41 | PASS | "Affinity and anti-affinity expand the types of constraints you can" (define). |
| 108 | How it works | A rule can be soft or preferred | S41 | PASS | "You can indicate that a rule is soft or preferred" |
| 109 | How it works | With a soft rule the Pod is still scheduled without a matching node | S41 | PASS | "so that the scheduler still schedules the Pod even if it can't find a matching node." |
| 110 | How it works | Operator chart installs Rook to create, configure, manage Ceph | S34 | PASS | "Installs rook to create, configure, and manage Ceph clusters on Kubernetes." |
| 111 | How it works | Chart bootstraps a rook-ceph-operator deployment | S34 | PASS | "This chart bootstraps a rook-ceph-operator deployment on a Kubernetes cluster" |
| 112 | How it works | Three steps: Helm chart, Ceph-CSI drivers chart, create a Rook cluster | S34 | PASS | "Install the Helm chart / Install the Ceph-CSI drivers chart so CSI can provision and mount volumes / Create a Rook cluster." |
| 113 | How it works | Cluster chart is a simple packaging of templates that optionally create Rook resources | S35 | PASS | "This chart is a simple packaging of templates that will optionally create Rook resources such as:" |
| 114 | How it works | Resources: CephCluster, CephFilesystem, CephObjectStore CRs, storage classes, dashboard ingress, toolbox | S35 | PASS | "CephCluster, CephFilesystem, and CephObjectStore CRs / Storage classes ... / Ingress for external access to the dashboard / Toolbox" |
| 115 | How it works | Default values create one block pool, one filesystem, one object store with storage classes | S35 | PASS | "The default values for cephBlockPools, cephFileSystems, and CephObjectStores will create one of each, and their corresponding storage classes." |
| 116 | How it works | `crds.enabled`: whether the chart creates and updates the CRDs | S34 | PASS | "Whether the helm chart should create and update the CRDs." |
| 117 | How it works | If false, CRDs are managed with `deploy/examples/crds.yaml` | S34 | PASS | "If false, the CRDs must be managed independently with deploy/examples/crds.yaml." |
| 118 | How it works | Set only at first deployment. If later disabled, the cluster may be destroyed | S34 | PASS | "Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 119 | How it works | Quickstart commands `kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml`, then `-f operator.yaml` | S32 | PASS | "kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml" and "kubectl create -f operator.yaml" |
| 120 | How it works | Kubernetes v1.32 through v1.37 supported | S32 | PASS | "Kubernetes versions v1.32 through v1.37 are supported." |
| 121 | How it works | `count` sets the number of mons to be started | S36 | PASS | "count: Set the number of mons to be started." |
| 122 | How it works | Number must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 123 | How it works | Recommended value is most commonly 3 | S36 | PASS | "The recommended value is most commonly 3." |
| 124 | How it works | Odd number for highest availability | S36 | PASS | "For highest availability, an odd number of mons should be specified." |
| 125 | How it works | A majority of mons must be up for quorum | S36 | PASS | "To maintain quorum a majority of mons must be up." |
| 126 | How it works | `dataDirHostPath` is the host path for config and data of each service | S36 | PASS | "The path on the host (hostPath) where config and data should be stored for each of the services." |
| 127 | How it works | In tests, deleting and recreating on the same hosts requires deleting the path | S36 | PASS | "if you delete a cluster and start a new cluster on the same hosts, the path used by dataDirHostPath must be deleted." |
| 128 | How it works | Otherwise stale keys remain and new mons fail to start | S36 | PASS | "stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| 129 | How it works | Glossary names MON, MGR, MDS, OSD, RBD, RGW | S31 | PASS | "Ceph Monitor (MON) / Ceph Manager (MGR) / Ceph Metadata Server (MDS) / Object Storage Device (OSD) / RADOS Block Device (RBD) / Ceph Object Gateway (RGW)" |
| 130 | How it works | At least one local storage type is required: raw devices, raw partitions, LVM LVs, PVs from a block-mode storage class | S33 | PASS | "at least one of these local storage types is required:" ... "Persistent Volumes available from a storage class in block mode" |
| 131 | How it works | Raw devices have no partitions or formatted filesystems. Raw partitions and LVs have no formatted filesystem. | S33 | PASS | "Raw devices (no partitions or formatted filesystems) / Raw partitions (no formatted filesystem) / LVM Logical Volumes (no formatted filesystem)" |
| 132 | How it works | `lsblk -f`: non-empty FSTYPE means a filesystem on the device | S33 | PASS | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| 133 | How it works | A running udev daemon is required on all storage nodes | S33 | PASS | "A running udev daemon is required on all storage nodes." |
| 134 | How it works | Ceph needs a kernel built with the RBD module | S33 | PASS | "Ceph requires a Linux kernel built with the RBD module." |
| 135 | How it works | For CephFS RWX volumes the recommended minimum kernel is 4.17 | S33 | PASS | "the recommended minimum kernel version is 4.17." |
| 136 | How it works | Custom resources are validated via OpenAPI v3.0 schemas | S25 | PASS | "OpenAPI v3.0 schemas," |
| 137 | How it works | Also validated by `x-kubernetes-validations` when Validation Rules is enabled | S25 | PASS | "by x-kubernetes-validations when the Validation Rules feature is enabled" |
| 138 | How it works | More validation through admission webhooks | S25 | PASS | "admission webhooks." |
| 139 | How it works | `x-kubernetes-validations` can validate with CEL | S25 | PASS | "The x-kubernetes-validations extension can be used to validate custom resources using" (Common Expression Language (CEL)). |
| 140 | How it works | A rule that refers to `oldSelf` is a transition rule | S25 | PASS | "A rule that contains an expression referencing the identifier oldSelf is implicitly considered a transition rule." |
| 141 | How it works | Transition rules apply only to operations meeting criteria | S25 | PASS | "transition rules apply only to operations meeting the following criteria:" |
| 142 | How it works | The operation updates an existing object | S25 | PASS | "The operation updates an existing object." |
| 143 | How it works | Transition rules never apply to create operations | S25 | PASS | "Transition rules never apply to create operations." |
| 144 | How it works | Both an old and a new value exist | S25 | PASS | "Both an old and a new value exist." |
| 145 | How it works | An unknown field is pruned before it is persisted | S25 | PASS | "if you specify a field that the API server does not recognize, the unknown field is pruned (removed) before being persisted." |
| 146 | How it works | Schema can opt out of pruning with `x-kubernetes-preserve-unknown-fields: true` | S25 | PASS | "opt-out of that for specific sub-trees of fields by adding x-kubernetes-preserve-unknown-fields: true" |
| 147 | How it works | kubectl also rejects objects with unknown fields well before they reach the API server | S25 | PASS | "kubectl also checks for unknown fields and rejects those objects well before they" |
| 148 | How it works | `kubectl apply --dry-run=server` submits a server-side request without persisting | S27 | PASS | "If server strategy, submit server-side request without persisting the resource." |
| 149 | How it works | `--validate` defaults to strict | S27 | PASS | "--validate string[=\"strict\"] Default: \"strict\"" |
| 150 | How it works | "true"/"strict" use a schema and fail an invalid request | S27 | PASS | "\"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid." |
| 151 | How it works | Does server side validation if ServerSideFieldValidation is enabled | S27 | PASS | "It will perform server side validation if ServerSideFieldValidation is enabled on the api-server" |
| 152 | How it works | Falls back to less reliable client-side validation if not | S27 | PASS | "but will fall back to less reliable client-side validation if not." |
| 153 | How it works | `--server-side` runs apply in the server | S27 | PASS | "If true, apply runs in the server instead of the client." |
| 154 | How it works | `kubectl wait` waits for the condition in the Status field of every resource | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 155 | How it works | kubectl uses the published schema for client-side validation and `kubectl explain` | S25 | PASS | "The kubectl command-line tool consumes the published schema to perform client-side validation (kubectl create and kubectl apply), schema explanation (kubectl explain)" |
| 156 | How it works | For `kubectl get` the API server picks the columns, and a CRD can customize them | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns for a" (CRD). |
| 157 | Try it | Run record (date, versions, folder, `CONTAINERD_ADDRESS` set by runner) | none | N/A | Record of the page's own run. |
| 158 | Try it | The rootless page of the containerd docs sets the variable in the same way | S14 | PASS | "$ export CONTAINERD_ADDRESS=/run/user/1001/containerd/containerd.sock" |
| 159 | Try it | Reader step: `export CONTAINERD_ADDRESS="$PWD/containerd.sock"` | none | N/A | Reader's own step. |
| 160 | Try it | Paragraphs on run setup: sockets, `dockerd`, repos, kind cluster `qa-p7b`, cleanup | none | N/A | Record of the page's own run. |
| 161 | Try it | Paragraph on the tutorial's own choices and what the run did not do | none | N/A | The page's own choices and limits. |
| 162 | Try it | `containerd.io` DEB and RPM packages are distributed by Docker, not the containerd project | S8 | PASS | "The containerd.io packages in DEB and RPM formats are distributed by Docker (not by the containerd project)." |
| 163 | Try it | `containerd.io` contains runc but no CNI plugins | S8 | PASS | "The containerd.io package contains runc too, but does not contain CNI plugins." |
| 164 | Try it | `dpkg -S` result and package version on the machine | none | N/A | Record of the page's own run. |
| 165 | Try it | Helm v4.3.2 and kind/kubectl come from other pages of this site, which checked checksums or signatures. Charts are unpinned. | none | N/A | Statements about other pages of the site and the tutorial's own choices. S1–S41 cannot check them. |
| 166 | Try it | Step 1: commands, output, and the four bullets on versions | none | N/A | Record of the page's own run. |
| 167 | Try it | Step 2: config bullet, "you need to provide a `config.toml` with your own path configuration" | S14 | PASS | "You need to provide config.toml with your own path configuration." |
| 168 | Try it | Step 2: script description and the other bullets (version = 4, boot line, `ctr version`, separate process) | none | N/A | Reader step description and record of the run. |
| 169 | Try it | Step 3: output and bullets on 68 plugins, skip rows, defaults | none | N/A | Record of the page's own run. |
| 170 | Try it | Step 3: docs say plugin list shows plugins that did not load | S10 | PASS | "From the output all the plugins can be seen as well those which did not successfully load." |
| 171 | Try it | Step 3: the `cri` plugin handles all CRI requests of the kubelet | S15 | PASS | "The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| 172 | Try it | Step 3: set `SystemdCgroup = true` for the systemd driver with runc | S21 | PASS | "SystemdCgroup = true" |
| 173 | Try it | Step 3: critical that kubelet and runtime use the same cgroup driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 174 | Try it | Step 4: fetch commands, output, bullets | none | N/A | Record of the page's own run. |
| 175 | Try it | Step 4: OCI spec says an image index has a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 176 | Try it | Step 5: commands, output, bullets on index, manifest, 42 files | none | N/A | Record of the page's own run. |
| 177 | Try it | Step 5: if the descriptor is an index, find the platform in it and use its hash to get the manifest | S12 | PASS | "If the descriptor is an index, find in it the platform (architecture+os) ... use that hash to retrieve the manifest" |
| 178 | Try it | Step 5: manifest provides a config and set of layers for a single image | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image" |
| 179 | Try it | Step 5: each component is stored in a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 180 | Try it | Step 5: DiffID is the digest over the uncompressed tar archive | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 181 | Try it | Step 5: the uncompressed layer hash comes from `cat <file> \| gunzip - \| sha256sum -` | S12 | PASS | "$ cat <file> \| gunzip - \| sha256sum -" |
| 182 | Try it | Step 5: do not confuse DiffIDs with layer digests | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 183 | Try it | Step 6: commands, output, bullets | none | N/A | Record of the page's own run. |
| 184 | Try it | Step 6: image content shared via content addresses, names and metadata separate | S9 | PASS | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 185 | Try it | Step 7: commands, output, bullets. The `--sync` help text line is printed in the run output. | none | N/A | Record of the page's own run. The bullet restates the printed line "--sync Synchronously remove image and all associated resources". |
| 186 | Try it | Step 7: GC scheduled on a background goroutine, runs on configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors." |
| 187 | Try it | Step 7: OCI image manifest refs config and layer tars, stored as generic blobs, client sets relations with labels | S13 | PASS | "image has a manifest which references a config file and layer tars. These resources are stored in containerd as generic blobs, it is the client that understands the relationships between these blobs and sets them up using labels" |
| 188 | Try it | Step 7: client may request GC during removal | S13 | PASS | "the client may also request a garbage collection during resource removal." |
| 189 | Try it | Step 7: service does not return until GC completes | S13 | PASS | "The service will not return until the garbage collection has completed." |
| 190 | Try it | Step 7: supported on removal of images and leases | S13 | PASS | "This is currently supported on removal of images and leases." |
| 191 | Try it | Step 8: commands, output, bullets on the failed pull | none | N/A | Record of the page's own run. |
| 192 | Try it | Step 8: layers are read and applied, creating a committed snapshot, known as unpacking | S12 | PASS | "read and applied to a filesystem, creating what is known as a \"committed snapshot\"" and "This process is known as \"unpacking\"." |
| 193 | Try it | Step 8: non-root user can run containerd using user_namespaces(7) | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)." |
| 194 | Try it | Step 8: container can be created with the active snapshot as root filesystem | S12 | PASS | "A container now can be created, with its root filesystem as the active snapshot." |
| 195 | Try it | Step 9: commands, output, bullets (chart rows, kinds, byte sizes, images) | none | N/A | Record of the page's own run. |
| 196 | Try it | Step 9: `helm template` renders chart templates locally and displays the output | S39 | PASS | "Render chart templates locally and display the output." |
| 197 | Try it | Step 9: chart bootstraps a rook-ceph-operator deployment | S34 | PASS | "This chart bootstraps a rook-ceph-operator deployment" |
| 198 | Try it | Step 9: default values create one block pool, one filesystem, one object store with storage classes | S35 | PASS | "will create one of each, and their corresponding storage classes." |
| 199 | Try it | Step 9: clusters can be installed in the operator namespace or a separate one | S35 | PASS | "The clusters can be installed into the same namespace as the operator or a separate namespace." |
| 200 | Try it | Step 10: commands, output, bullets on node, pods, events | none | N/A | Record of the page's own run. |
| 201 | Try it | Step 10: kind runs a local cluster using Docker containers as nodes | S40 | PASS | "kind runs a local Kubernetes cluster by using Docker containers as “nodes”." |
| 202 | Try it | Step 10: `kind create cluster --image=...` for another node image | S40 | PASS | "To specify another image use the --image flag – kind create cluster --image=...." |
| 203 | Try it | Step 10: Kubernetes 1.37 requires a CRI-conforming runtime | S21 | PASS | "Kubernetes 1.37 requires that you use a runtime that conforms with the" (Container Runtime Interface). |
| 204 | Try it | Step 10: kube-scheduler is the default scheduler, runs in the control plane | S23 | PASS | "is the default scheduler for Kubernetes and runs as part of the" |
| 205 | Try it | Step 10: a scheduler watches for new Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 206 | Try it | Step 11: commands, output, bullets on the pending Pod | none | N/A | Record of the page's own run. |
| 207 | Try it | Step 11: nodeSelector is the simplest recommended form of node selection | S41 | PASS | "nodeSelector is the simplest recommended form of node selection constraint." |
| 208 | Try it | Step 11: Kubernetes schedules only onto nodes with each label specified | S41 | PASS | "Kubernetes only schedules the Pod onto nodes that have each of the labels you" (specify). |
| 209 | Try it | Step 11: if no node is suitable, the Pod stays unscheduled | S23 | PASS | "remains unscheduled until the scheduler is able to place it." |
| 210 | Try it | Step 11: nodes have labels, which you can attach manually | S41 | PASS | "attach labels manually." |
| 211 | Try it | Step 11: scheduler notifies the API server (binding) | S23 | PASS | "the API server about this decision in a process called binding." |
| 212 | Try it | Step 12: commands, output, bullets (21 CRDs, 19 names, schema values) | none | N/A | Record of the page's own run. |
| 213 | Try it | Step 12: `--show-only` shows only manifests rendered from the given templates | S39 | PASS | "-s, --show-only stringArray only show manifests rendered from the given templates" |
| 214 | Try it | Step 12: `--server-side` runs apply in the server | S27 | PASS | "If true, apply runs in the server instead of the client." |
| 215 | Try it | Step 12: `kubectl wait` waits for the condition in Status | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 216 | Try it | Step 12: once a CR is installed, users create and access objects with kubectl | S24 | PASS | "Once a custom resource is installed, users can create and access its objects using" (kubectl). |
| 217 | Try it | Step 12: `kubectl explain` describes fields of each supported API resource | S28 | PASS | "This command describes the fields associated with each supported API resource." |
| 218 | Try it | Step 12: Rook docs say mon number must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 219 | Try it | Step 12: `x-kubernetes-validations` validates with CEL | S25 | PASS | "The x-kubernetes-validations extension can be used to validate custom resources using" (CEL). |
| 220 | Try it | Step 12: a rule with `oldSelf` is a transition rule | S25 | PASS | "A rule that contains an expression referencing the identifier oldSelf is implicitly considered a transition rule." |
| 221 | Try it | Step 13: commands, output, bullets on each file | none | N/A | Record of the page's own run. |
| 222 | Try it | Step 13: each `--dry-run=server` submits a request without persisting | S27 | PASS | "If server strategy, submit server-side request without persisting the resource." |
| 223 | Try it | Step 13: Rook docs say count must be 1–9 | S36 | PASS | "The number must be between 1 and 9." |
| 224 | Try it | Step 13: `--validate` defaults to strict | S27 | PASS | "Default: \"strict\"" |
| 225 | Try it | Step 13: "true"/"strict" use a schema and fail an invalid request | S27 | PASS | "will use a schema to validate the input and fail the request if invalid." |
| 226 | Try it | Step 13: API server decides `kubectl get` columns, a CRD can customize | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command." |
| 227 | Try it | Step 13: transition rules never apply to create operations | S25 | PASS | "Transition rules never apply to create operations." |
| 228 | Try it | Step 14: commands, output, bullets (crictl 1.36.0, k8s.io, counts) | none | N/A | Record of the page's own run. |
| 229 | Try it | Step 14: kind docs show `docker exec -it my-node-name crictl images` | S40 | PASS | "docker exec -it my-node-name crictl images" |
| 230 | Try it | Step 14: `crictl` inspects and debugs runtimes and apps on a node | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a Kubernetes node." |
| 231 | Try it | Step 14: critical that kubelet and runtime use the same cgroup driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 232 | Try it | Step 14: `ctr` uses `default` when you give no namespace | S9 | PASS | "If you do not provide a namespace, ctr client commands will all use the default namespace" |
| 233 | Try it | Step 14: `crictl` is a CLI for CRI-compatible runtimes | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 234 | Try it | Step 15: commands, output, and the page's own reading of results | none | N/A | Record of the page's own run and the tutorial's own reading. |
| 235 | Try it | Step 15: Rook prerequisites page names `lsblk -f` to confirm filesystems | S33 | PASS | "Confirm whether the partitions or devices are formatted with filesystems with the following command:" then "$ lsblk -f" |
| 236 | Try it | Step 15: non-empty FSTYPE means a filesystem | S33 | PASS | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| 237 | Try it | Step 15: Rook skips a device with partitions or a filesystem | S38 | PASS | "if Rook determines that a device is not available (has existing partitions or a formatted filesystem), Rook will skip consuming the devices." |
| 238 | Try it | Step 15: recommended minimum kernel 4.17 for CephFS RWX | S33 | PASS | "the recommended minimum kernel version is 4.17." |
| 239 | Try it | Step 15: Ceph requires a kernel with RBD. Test with `modprobe rbd`. | S33 | PASS | "Ceph requires a Linux kernel built with the RBD module." and "Test your Kubernetes nodes by running modprobe rbd." |
| 240 | Try it | Step 15: a running udev daemon is required on all storage nodes | S33 | PASS | "A running udev daemon is required on all storage nodes." |
| 241 | How a tester uses it | Step 10 showed `containerd://2.3.4`. A tester can write the runtime and version in reports. | none | N/A | Record of the page's own run and the reader's own work. |
| 242 | How a tester uses it | Need a working runtime on each Node for the kubelet | S20 | PASS | "You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers." |
| 243 | How a tester uses it | Kubernetes v1.26+: kubelet requires v1 CRI API | S20 | PASS | "For Kubernetes v1.26 and later, the kubelet requires that the container runtime supports the v1 CRI API." |
| 244 | How a tester uses it | Without v1, the kubelet will not register the node | S20 | PASS | "the kubelet will not register the node." |
| 245 | How a tester uses it | kubelet and runtime need a cgroup driver to interface with control groups | S21 | PASS | "To interface with control groups, the kubelet and the container runtime need to use a cgroup driver." |
| 246 | How a tester uses it | cgroupfs is the kubelet's default cgroup driver | S21 | PASS | "The cgroupfs driver is the default cgroup driver in the kubelet." |
| 247 | How a tester uses it | systemd driver recommended with cgroup v2 | S21 | PASS | "The systemd cgroup driver is recommended if you use cgroup v2." |
| 248 | How a tester uses it | Critical that both use the same driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 249 | How a tester uses it | Run results from steps 14 and 3 on the two cgroup settings | none | N/A | Record of the page's own run. |
| 250 | How a tester uses it | `crictl` is a CLI for CRI-compatible runtimes | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 251 | How a tester uses it | It can inspect and debug runtimes and apps on a node | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a Kubernetes node." |
| 252 | How a tester uses it | `ctr` is solely made for debugging containerd | S8 | PASS | "the ctr tool is solely made for debugging containerd." |
| 253 | How a tester uses it | `ctr` uses `default` with no namespace | S9 | PASS | "ctr client commands will all use the default namespace" |
| 254 | How a tester uses it | Run results for `k8s.io`, `other`, `qa`. Wrong-namespace remark. | none | N/A | Record of the page's own run and its own remark. |
| 255 | How a tester uses it | Each component is a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 256 | How a tester uses it | An image index lists manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 257 | How a tester uses it | A manifest gives a config and layers for one image, one architecture and OS | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 258 | How a tester uses it | DiffIDs are not layer digests | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 259 | How a tester uses it | Run results (42 files, DiffID differs from file name) and tester advice | none | N/A | Record of the page's own run and the page's own advice. |
| 260 | How a tester uses it | GC scheduled on a background goroutine, runs on configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors." |
| 261 | How a tester uses it | Disk-use run results and advice to use `--sync` | none | N/A | Record of the page's own run and the page's own advice. |
| 262 | How a tester uses it | Optional `hosts.toml` per registry host | S16 | PASS | "specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| 263 | How a tester uses it | Mirror host: registry host namespace added as query parameter `ns` | S16 | PASS | "containerd will append the registry host namespace to requests as a query parameter called ns." |
| 264 | How a tester uses it | Run set no `hosts.toml`. Tester advice. | none | N/A | Record of the page's own run and the page's own advice. |
| 265 | How a tester uses it | A scheduler watches for new Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 266 | How a tester uses it | If no node is suitable the Pod remains unscheduled | S23 | PASS | "remains unscheduled until the scheduler is able to place it." |
| 267 | How a tester uses it | Pending-Pod run results and `kubectl get events` advice | none | N/A | Record of the page's own run and the reader's step. |
| 268 | How a tester uses it | Custom resources validated via OpenAPI v3.0 and `x-kubernetes-validations` when enabled | S25 | PASS | "OpenAPI v3.0 schemas, by x-kubernetes-validations when the Validation Rules feature is enabled" |
| 269 | How a tester uses it | `kubectl apply --dry-run=server` submits without persisting | S27 | PASS | "submit server-side request without persisting the resource." |
| 270 | How a tester uses it | Step 13 results and "say nothing about the operator" | none | N/A | Record of the page's own run and its own caution. |
| 271 | How a tester uses it | Rook docs: mon number between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 272 | How a tester uses it | Odd number of mons for highest availability | S36 | PASS | "For highest availability, an odd number of mons should be specified." |
| 273 | How a tester uses it | CRD minimum 0 and accepted `count: 0` | none | N/A | Record of the page's own run. |
| 274 | How a tester uses it | At least one local storage type is required (four types listed) | S33 | PASS | "at least one of these local storage types is required:" |
| 275 | How a tester uses it | Rook skips a device with partitions or a filesystem | S38 | PASS | "Rook will skip consuming the devices." |
| 276 | How a tester uses it | To see if a device was skipped, view the OSD preparation log on that node | S38 | PASS | "To see if a device was skipped, view the OSD preparation log on the node where the device was skipped." |
| 277 | How a tester uses it | Step 15 results | none | N/A | Record of the page's own run. |
| 278 | How a tester uses it | Toolbox is a container with common tools for rook debugging and testing | S37 | PASS | "The Rook toolbox is a container with common tools used for rook debugging and testing." |
| 279 | How a tester uses it | Example commands `ceph status`, `ceph osd status`, `ceph df`, `rados df` | S37 | PASS | "ceph status / ceph osd status / ceph df / rados df" |
| 280 | How a tester uses it | Two common causes of pending PVCs: no OSDs, or the CSI provisioner pod not running or not responding | S38 | PASS | "There are no OSDs in the cluster / The CSI provisioner pod is not running or is not responding to the request to provision the storage" |
| 281 | How a tester uses it | In a test cluster only one OSD is required | S38 | PASS | "In a \"test\" cluster, only one OSD is required" |
| 282 | How a tester uses it | In the production storage class example three OSDs are required | S38 | PASS | "In the production storage class example (storageclass.yaml), three OSDs would be required." |
| 283 | How a tester uses it | The tutorial ran no operator | none | N/A | Record of the page's own run. |
| 284 | Common mistakes | Namespaces are an administrative construct, not a security feature | S9 | PASS | "an administrative construct that is not meant to be used as a security feature." |
| 285 | Common mistakes | Trivial for clients to switch namespaces | S9 | PASS | "It is trivial for clients to switch namespaces." |
| 286 | Common mistakes | Step 6 `-n other` reads another namespace | none | N/A | Record of the page's own run. |
| 287 | Common mistakes | `ctr` uses `default` with no namespace | S9 | PASS | "ctr client commands will all use the default namespace" |
| 288 | Common mistakes | Step 14 and step 6 namespace results | none | N/A | Record of the page's own run. |
| 289 | Common mistakes | GC is scheduled on a background goroutine | S13 | PASS | "scheduled on a background goroutine" |
| 290 | Common mistakes | Step 6 and step 7 results | none | N/A | Record of the page's own run. |
| 291 | Common mistakes | Critical that kubelet and runtime use the same driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup driver" |
| 292 | Common mistakes | Default containerd 2.4.2 config has `SystemdCgroup = false`. Do not assume the default. | none | N/A | Record of the page's own run (step 3) and its own advice. |
| 293 | Common mistakes | Operator deploys, configures, provisions, scales, upgrades, monitors Ceph by building on Kubernetes resources | S30 | PASS | "The Rook operator does this by building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 294 | Common mistakes | Step 13 `PHASE`, `MESSAGE`, `HEALTH` stayed empty. Cluster had no operator. | none | N/A | Record of the page's own run. |
| 295 | Common mistakes | Rook docs: mon number between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 296 | Common mistakes | Step 12 `kubectl explain` printed no range. CRD has min 0 and max 9. | none | N/A | Record of the page's own run. |
| 297 | Common mistakes | `crds.enabled` should be set only at first deployment. Later disabling may destroy the cluster. | S34 | PASS | "Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 298 | Common mistakes | Reusing hosts of a deleted test cluster: `dataDirHostPath` must be deleted | S36 | PASS | "the path used by dataDirHostPath must be deleted." |
| 299 | Common mistakes | Otherwise stale keys remain and new mons fail to start | S36 | PASS | "stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| 300 | Common mistakes | Heading: "Choosing an even number of mons" is a mistake | S36 | FAIL | The cited sentence (odd for highest availability) is supported. But the heading calls an even count a mistake. S36 says: "For higher durability in case of mon loss, an even number can be specified although availability may be lower." Fix: "An even number of mons gives lower availability. S36 allows it for higher durability." |
| 301 | Common mistakes | For highest availability an odd number of mons should be specified | S36 | PASS | "For highest availability, an odd number of mons should be specified." |
| 302 | Common mistakes | A majority of mons must be up for quorum | S36 | PASS | "To maintain quorum a majority of mons must be up." |
| 303 | Common mistakes | Rook skips a device with existing partitions or a formatted filesystem | S38 | PASS | "Rook will skip consuming the devices." |
| 304 | Common mistakes | Step 15 partitions all had a filesystem | none | N/A | Record of the page's own run. |
| 305 | Common mistakes | The scheduler matches Pods to Nodes so the kubelet can run them | S23 | PASS | "are matched to Nodes so that" (the kubelet can run them) |
| 306 | Common mistakes | Step 11 Pending result. The tutorial's advice is to read events first. | none | N/A | Record of the page's own run and its own advice. |
| 307 | What a tester can check | Callout "Tutorial advice": 11 bullets of the tutorial's own advice | none | PASS | The callout says "This list is the tutorial's own advice". Its bullets are advice only. They give no tool fact that the rest of the page does not support. |
| 308 | Key words | Graduated | none | PASS | Page sentence: "Graduated projects as highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments". |
| 309 | Key words | Incubation | none | PASS | Page sentence: "Incubation projects as projects gaining adoption, focusing on improving stability and maturity". |
| 310 | Key words | containerd | none | PASS | Page sentence: "containerd calls itself an industry-standard container runtime with an emphasis on simplicity, robustness and portability". |
| 311 | Key words | CRI | none | PASS | Page sentence: "The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and the container runtime". |
| 312 | Key words | Namespace | none | PASS | Page sentence: "namespaces an administrative construct that is not meant to be used as a security feature". |
| 313 | Key words | Snapshotter | none | PASS | Page sentence: "Snapshotters manage the snapshots of the container filesystems". |
| 314 | Key words | Unpacking | none | PASS | Page sentences: "The layers must then be read and applied to a filesystem, which creates a committed snapshot" and "This process is known as unpacking". |
| 315 | Key words | Image index | none | PASS | Page sentence: "An image index contains a list of manifests for specific platforms". |
| 316 | Key words | DiffID | none | PASS | Page sentence: "A layer DiffID is the digest over the layer's uncompressed tar archive". |
| 317 | Key words | Garbage collector | none | PASS | Page sentence: "The containerd garbage collector is scheduled on a background goroutine, and it runs based on a number of configurable factors". |
| 318 | Key words | kube-scheduler | none | PASS | Page sentence: "kube-scheduler is the default scheduler for Kubernetes, and it runs as part of the control plane". |
| 319 | Key words | nodeSelector | none | PASS | Page sentence: "A `nodeSelector` only selects nodes with all the specified labels". |
| 320 | Key words | Custom resource | none | PASS | Page sentence: "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation". |
| 321 | Key words | Operator | none | PASS | Page sentence: "Operators are clients of the Kubernetes API that act as controllers for a Custom Resource". |
| 322 | Key words | Transition rule | none | PASS | Page sentence: "A rule that refers to `oldSelf` is a transition rule". |
| 323 | Key words | Rook | none | PASS | Page sentence: "Rook is an open source cloud-native storage orchestrator". |
| 324 | Key words | Ceph | none | PASS | Page sentence: "Ceph is a distributed storage system that provides file, block and object storage". |
| 325 | Key words | CephCluster | none | PASS | Page sentence: "the CephCluster CRD is used by Rook to allow creation and customization of storage clusters". |

Open FAILs after round 10: 1

Changed after this round: One FAIL. The heading of an item of Common mistakes called an even number of mons a mistake, but the CephCluster page says that an even number can be specified for higher durability, although availability may be lower. The item is now headed "Choosing the number of mons without a reason", and it has that sentence of the page too. One PASS row (114) quoted the list of the Ceph Cluster chart with `/` between its items, and the quote of the page itself is in the source.

## Round 11 (2026-11-20)

# Fact check: devops / cncf-runtime-data (round 11)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | CNCF, containerd, Rook, practice run on own machine, no cloud account | none | N/A | Describes the page and the tutorial's own run. |
| 2 | Lede | Covers CNCF, containerd, Rook; scheduler fits between; run needs no cloud account, cluster steps use Docker; page order links | none | N/A | Describes the page. The two `/devops/...` links are not facts. |
| 3 | What it is | CNCF hosts critical components of the global technology infrastructure | S1 | PASS | "hosts critical components of the global technology infrastructure." |
| 4 | What it is | CNCF is part of the nonprofit Linux Foundation | S1 | PASS | "CNCF is part of the nonprofit Linux Foundation." |
| 5 | What it is | The TOC defines 4 stages of the project lifecycle | S3 | PASS | "The TOC defines 4 stages of the project lifecycle:" |
| 6 | What it is | Graduated and incubating projects are considered stable and used successfully in production | S2 | PASS | "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 7 | What it is | Incubation: projects gaining adoption, improving stability and maturity | S3 | PASS | "Incubation - Projects gaining adoption, focusing on improving stability and maturity." |
| 8 | What it is | Graduated: highly mature, robust projects, adopters demonstrated production-readiness | S3 | PASS | "Graduated - Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments." |
| 9 | What it is | containerd accepted March 29, 2017 at Incubating level | S4 | PASS | "containerd was accepted to CNCF on March 29, 2017 at the Incubating maturity level" |
| 10 | What it is | containerd Graduated February 28, 2019 | S4 | PASS | "...and then moved to the Graduated maturity level on February 28, 2019." |
| 11 | What it is | Rook accepted January 29, 2018 | S5 | PASS | "Rook was accepted to CNCF on January 29, 2018" |
| 12 | What it is | Rook Incubating September 25, 2018 | S5 | PASS | "moved to the Incubating maturity level on September 25, 2018" |
| 13 | What it is | Rook Graduated October 7, 2020 | S5 | PASS | "and then moved to the Graduated maturity level on October 7, 2020." |
| 14 | What it is | Project page calls containerd an open and reliable container runtime | S4 | PASS | "An open and reliable container runtime" |
| 15 | What it is | Project page calls Rook storage orchestration for Kubernetes | S5 | PASS | "Storage Orchestration for Kubernetes" |
| 16 | What it is | containerd calls itself an industry-standard runtime (simplicity, robustness, portability) | S6 | PASS | "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 17 | What it is | README: available as a daemon for Linux and Windows | S7 | PASS | "It is available as a daemon for Linux and Windows" |
| 18 | What it is | The daemon can manage the complete container lifecycle of its host system | S7 | PASS | "which can manage the complete container lifecycle of its host system" |
| 19 | What it is | Designed to be embedded in a larger system, not used directly by developers or end-users | S7 | PASS | "containerd is designed to be embedded into a larger system, rather than being used directly by developers or end-users." |
| 20 | What it is | Need a working container runtime on each Node so kubelet can launch Pods | S20 | PASS | "You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers." |
| 21 | What it is | CRI is the main protocol between kubelet and runtime | S20 | PASS | "The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and Container Runtime." |
| 22 | What it is | containerd has built-in support for the CRI | S8 | PASS | "containerd has built-in support for Kubernetes Container Runtime Interface (CRI)." |
| 23 | What it is | containerd on same node as kubelet; cri plugin handles all CRI service requests | S15 | PASS | "Containerd operates on the same node as the Kubelet. The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| 24 | What it is | kube-scheduler is the default scheduler and runs as part of the control plane | S23 | PASS | "is the default scheduler for Kubernetes and runs as part of the control plane." |
| 25 | What it is | A scheduler watches for newly created Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 26 | What it is | Finds feasible Nodes, scores them, picks highest score | S23 | PASS | "finds feasible Nodes for a Pod and then runs a set of functions to score the feasible Nodes and picks a Node with the highest score" |
| 27 | What it is | Rook is an open source cloud-native storage orchestrator | S30 | PASS | "Rook is an open source cloud-native storage orchestrator" |
| 28 | What it is | Ceph is a distributed storage system: file, block, object | S30 | PASS | "Ceph is a distributed storage system that provides file, block and object storage" |
| 29 | What it is | Rook automates Ceph deployment/management: self-managing, self-scaling, self-healing | S30 | PASS | "Rook automates deployment and management of Ceph to provide self-managing, self-scaling, and self-healing storage services." |
| 30 | What it is | The operator builds on Kubernetes resources to deploy, configure, provision, scale, upgrade, monitor Ceph | S30 | PASS | "The Rook operator does this by building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 31 | What it is | A custom resource is an API extension not necessarily in a default installation | S24 | PASS | "A custom resource is an extension of the Kubernetes API that is not necessarily available in a default" |
| 32 | What it is | The CRD API resource allows you to define custom resources | S24 | PASS | "API resource allows you to define custom resources." |
| 33 | What it is | Operators are API clients that act as controllers for a Custom Resource | S26 | PASS | "Operators are clients of the Kubernetes API that act as" |
| 34 | What it is | Most common way to deploy an operator: add CRD and Controller | S26 | PASS | "The most common way to deploy an operator is to add the Custom Resource Definition and its associated Controller to your cluster." |
| 35 | What it is | Glossary: CephCluster CRD lets Rook create and customize storage clusters | S31 | PASS | "The CephCluster CRD is used by Rook to allow creation and customization of storage clusters" |
| 36 | How it works | containerd supports extending functionality using most of its interfaces | S10 | PASS | "containerd supports extending its functionality using most of its defined interfaces." |
| 37 | How it works | Includes customized runtime, snapshotter, content store, gRPC interfaces | S10 | PASS | "This includes using a customized runtime, snapshotter, content store, and even adding gRPC interfaces." |
| 38 | How it works | Uses plugins internally: decoupled, stable, equal to external plugins | S10 | PASS | "containerd uses plugins internally to ensure that internal implementations are decoupled, stable, and treated equally with external plugins." |
| 39 | How it works | To see all plugins, use `ctr plugins ls` | S10 | PASS | "To see all the plugins containerd has, use ctr plugins ls" |
| 40 | How it works | Output shows also plugins that did not load | S10 | PASS | "From the output all the plugins can be seen as well those which did not successfully load." |
| 41 | How it works | Smart client: functionality not required by the daemon is done by the client | S10 | PASS | "containerd has a smart client architecture, meaning any functionality which is not required by the daemon is done by the client." |
| 42 | How it works | Includes creating a container spec, registry interaction, loading image from tar | S10 | PASS | "This includes most high level interactions such as creating a container's specification, interacting with an image registry, or loading an image from tar." |
| 43 | How it works | Fully namespaced API; many consumers share one instance | S9 | PASS | "containerd offers a fully namespaced API so multiple consumers can all use a single containerd instance without conflicting with one another." |
| 44 | How it works | Image content shared via content addresses; names/metadata separate | S9 | PASS | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 45 | How it works | Namespaces are administrative, not a security feature | S9 | PASS | "namespaces, as implemented, is an administrative construct that is not meant to be used as a security feature." |
| 46 | How it works | Trivial for clients to switch namespaces | S9 | PASS | "It is trivial for clients to switch namespaces." |
| 47 | How it works | Without a namespace, `ctr` uses "default" | S9 | PASS | "If you do not provide a namespace, ctr client commands will all use the default namespace, which is simply named \"default\"." |
| 48 | How it works | `--namespace` or `-n` changes it | S9 | PASS | "Simply set the --namespace,-n flag on ctr to change the namespace." |
| 49 | How it works | Docs list several command line projects | S8 | PASS | "There are several command line interface (CLI) projects for interacting with containerd:" |
| 50 | How it works | `ctr` bundled; solely for debugging containerd | S8 | PASS | "While the ctr tool is bundled together with containerd, it should be noted the ctr tool is solely made for debugging containerd." |
| 51 | How it works | `nerdctl` stable, human-friendly | S8 | PASS | "tool provides stable and human-friendly user experience." |
| 52 | How it works | `crictl` is a CLI for CRI-compatible runtimes | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 53 | How it works | Use it to inspect and debug runtimes and apps on a node | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a" |
| 54 | How it works | Content exists in several areas in the lifecycle | S12 | PASS | "Content exists in several areas in the containerd lifecycle:" |
| 55 | How it works | OCI registry, content store, snapshots | S12 | PASS | "OCI registry, for example hub.docker.com or quay.io" (the content store and snapshot items follow it in the list) |
| 56 | How it works | Image and all content must be loaded into local content store | S12 | PASS | "The image and all its content must be loaded into the local content store." |
| 57 | How it works | Layers read and applied to a filesystem, creating a committed snapshot | S12 | PASS | "The layers from the image must be read and applied to a filesystem, creating what is known as a \"committed snapshot\"." |
| 58 | How it works | This process is unpacking | S12 | PASS | "This process is known as \"unpacking\"." |
| 59 | How it works | A final mutable mountable filesystem, an active snapshot, on top of final layer | S12 | PASS | "A final mutable mountable filesystem, an \"active snapshot\", must be created on top of the final layer of content for the image." |
| 60 | How it works | A container can then be created with the active snapshot as root filesystem | S12 | PASS | "A container now can be created, with its root filesystem as the active snapshot." |
| 61 | How it works | Image is a JSON document known as a descriptor | S12 | PASS | "An \"image\" is comprised of a JSON document known as a descriptor." |
| 62 | How it works | Descriptor always contains mediaType | S12 | PASS | "A descriptor always contains an element, mediaType, which tells us which type it is." |
| 63 | How it works | mediaType is a manifest or an index | S12 | PASS | "It is one of two options: a \"manifest\"... an \"index\"" |
| 64 | How it works | OCI: manifest gives a configuration and layers for one image, one arch/OS | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 65 | How it works | Image index contains a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 66 | How it works | Purpose of an index: pick the manifest for the target platform | S12 | PASS | "The purpose of an index is to allow us to pick which manifest matches our target platform." |
| 67 | How it works | Layer DiffID is digest over uncompressed tar | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 68 | How it works | Do not confuse DiffIDs with layer digests in the manifest | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 69 | How it works | Content store stores very similarly to the registry | S12 | PASS | "it stores them very similarly to how the registry does." |
| 70 | How it works | Each component is a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 71 | How it works | Snapshotters manage snapshots of container filesystems | S11 | PASS | "Snapshotters manage the snapshots of the container filesystems." |
| 72 | How it works | overlayfs is default, akin to "overlay2" | S11 | PASS | "overlayfs (default): OverlayFS. This driver is akin to Docker/Moby's \"overlay2\" storage driver" |
| 73 | How it works | native: file copying driver, akin to "vfs" | S11 | PASS | "native: Native file copying driver. Akin to Docker/Moby's \"vfs\" driver." |
| 74 | How it works | Inspect snapshotters with `ctr plugins ls` or `nerdctl info` | S11 | PASS | "can be inspected by running ctr plugins ls or nerdctl info." |
| 75 | How it works | Multiple runtimes; each container can use a different one | S10 | PASS | "containerd supports multiple container runtimes. Each container can be invoked with a different runtime." |
| 76 | How it works | v2 runtimes invoked as binaries, used to start the shim | S10 | PASS | "containerd invokes v2 runtimes as binaries on the system, which are used to start the shim process for containerd." |
| 77 | How it works | README: Linux/Windows features handled via runc and/or OS-specific libraries | S7 | PASS | "the Linux and Windows container feature sets are handled via runc and/or OS-specific libraries" |
| 78 | How it works | CRI plugin handles kubelet requests, pod networking via CNI (another CNCF project) | S15 | PASS | "cri manages pod networking via CNI (another CNCF project)." |
| 79 | How it works | On pod create: network namespace, configured with CNI | S15 | PASS | "cri creates the pod's network namespace, and then configures it using CNI;" |
| 80 | How it works | Then creates the pause (sandbox) container | S15 | PASS | "a special pause container (the sandbox container)" |
| 81 | How it works | Later pulls the image if not on the node | S15 | PASS | "cri further uses containerd to pull the image if the image is not present on the node;" |
| 82 | How it works | Kubelet is a client connecting via gRPC | S20 | PASS | "The kubelet acts as a client when connecting to the container runtime via gRPC." |
| 83 | How it works | K8s v1.26+: kubelet requires v1 CRI API | S20 | PASS | "For Kubernetes v1.26 and later, the kubelet requires that the container runtime supports the v1 CRI API." |
| 84 | How it works | No v1 support: kubelet will not register the node | S20 | PASS | "the kubelet will not register the node." |
| 85 | How it works | Kubelet and runtime need a cgroup driver | S21 | PASS | "the kubelet and the container runtime need to use a cgroup driver." |
| 86 | How it works | Critical that both use same driver, configured the same | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup" |
| 87 | How it works | `SystemdCgroup = true` in runc options | S21 | PASS | "[plugins.'io.containerd.cri.v1.runtime'.containerd.runtimes.runc.options] SystemdCgroup = true" |
| 88 | How it works | systemd driver recommended with cgroup v2 | S21 | PASS | "The systemd cgroup driver is recommended if you use cgroup v2." |
| 89 | How it works | GC on a background goroutine, configurable factors | S13 | PASS | "The garbage collector (gc) is scheduled on a background goroutine and runs based on a number of configurable factors." |
| 90 | How it works | Client can request GC during removal | S13 | PASS | "may also request a garbage collection during resource removal." |
| 91 | How it works | Service does not return until GC completes | S13 | PASS | "The service will not return until the garbage collection has completed." |
| 92 | How it works | Supported on removal of images and leases | S13 | PASS | "This is currently supported on removal of images and" (line break, then "leases") |
| 93 | How it works | Optional `hosts.toml` per registry host from a config directory | S16 | PASS | "specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| 94 | How it works | Mirror host: registry host namespace appended as query parameter `ns` | S16 | PASS | "containerd will append the registry host namespace to requests as a query parameter called ns." |
| 95 | How it works | Non-root user can run containerd using user_namespaces(7) | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)." |
| 96 | How it works | RootlessKit sets up user namespace, mount namespace, optionally network namespace | S14 | PASS | "RootlessKit can be used for setting up a user namespace (along with mount namespace and optionally network namespace)." |
| 97 | How it works | Need to provide a `config.toml` with own paths | S14 | PASS | "You need to provide config.toml with your own path configuration." |
| 98 | How it works | Client such as `ctr` must run inside the daemon namespaces | S14 | PASS | "A client program such as ctr also needs to be executed inside the daemon namespaces." |
| 99 | How it works | The practice run does not set up a user namespace | none | N/A | Describes the page's own practice run. |
| 100 | How it works | Scheduling matches Pods to Nodes so kubelet can run them | S23 | PASS | "scheduling refers to making sure that Pods are matched to Nodes so that Kubelet can run them." |
| 101 | How it works | Scheduler becomes responsible for finding best Node | S23 | PASS | "the scheduler becomes responsible for finding the best Node for that Pod to run on." |
| 102 | How it works | If no node suitable, Pod stays unscheduled | S23 | PASS | "If none of the nodes are suitable, the pod remains unscheduled until the scheduler is able to place it." |
| 103 | How it works | Scheduler notifies API server in "binding" | S23 | PASS | "The scheduler then notifies the API server about this decision in a process called binding." |
| 104 | How it works | `nodeSelector` matches node labels, a method to choose where Pods go | S41 | PASS | "nodeSelector field matching against node labels" |
| 105 | How it works | `nodeSelector` selects only nodes with all specified labels | S41 | PASS | "nodeSelector only selects nodes with all the specified labels." |
| 106 | How it works | Kubernetes populates standard labels on all nodes | S41 | PASS | "Kubernetes also populates a standard set of labels on all nodes in a cluster." |
| 107 | How it works | Affinity/anti-affinity expand constraint types | S41 | PASS | "Affinity and anti-affinity expand the types of constraints you" |
| 108 | How it works | A rule can be soft or preferred | S41 | PASS | "You can indicate that a rule is soft or preferred" |
| 109 | How it works | Soft rule: scheduler still schedules if no match | S41 | PASS | "so that the scheduler still schedules the Pod even if it can't find a matching node." |
| 110 | How it works | Ceph Operator chart installs Rook to create, configure, manage Ceph clusters | S34 | PASS | "Installs rook to create, configure, and manage Ceph clusters on Kubernetes." |
| 111 | How it works | Chart bootstraps a rook-ceph-operator deployment | S34 | PASS | "This chart bootstraps a rook-ceph-operator deployment" |
| 112 | How it works | Three steps: Helm chart, Ceph-CSI drivers chart, create Rook cluster | S34 | PASS | "Install the Helm chart / Install the Ceph-CSI drivers chart so CSI can provision and mount volumes / Create a Rook cluster." |
| 113 | How it works | Cluster chart is simple packaging of templates that optionally create Rook resources | S35 | PASS | "This chart is a simple packaging of templates that will optionally create Rook resources" |
| 114 | How it works | Resources: CephCluster/CephFilesystem/CephObjectStore, storage classes, dashboard ingress, toolbox | S35 | PASS | "CephCluster, CephFilesystem, and CephObjectStore CRs / Storage classes... / Ingress for external access to the dashboard / Toolbox" |
| 115 | How it works | Defaults create one block pool, one filesystem, one object store, with storage classes | S35 | PASS | "will create one of each, and their corresponding storage classes." |
| 116 | How it works | `crds.enabled`: whether the chart creates and updates CRDs | S34 | PASS | "Whether the helm chart should create and update the CRDs." |
| 117 | How it works | If false, manage CRDs with `deploy/examples/crds.yaml` | S34 | PASS | "If false, the CRDs must be managed independently with deploy/examples/crds.yaml." |
| 118 | How it works | Set only at first deployment; later disabling may destroy cluster | S34 | PASS | "Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 119 | How it works | Quickstart commands `kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml`, then `-f operator.yaml` | S32 | PASS | "kubectl create -f crds.yaml -f common.yaml -f csi-operator.yaml" / "kubectl create -f operator.yaml" |
| 120 | How it works | Kubernetes v1.32 through v1.37 supported | S32 | PASS | "Kubernetes versions v1.32 through v1.37 are supported." |
| 121 | How it works | `count` sets the number of mons | S36 | PASS | "count: Set the number of mons to be started." |
| 122 | How it works | Number must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 123 | How it works | Recommended value most commonly 3 | S36 | PASS | "The recommended value is most commonly 3." |
| 124 | How it works | Odd number for highest availability | S36 | PASS | "For highest availability, an odd number of mons should be specified." |
| 125 | How it works | Majority of mons must be up for quorum | S36 | PASS | "To maintain quorum a majority of mons must be up." |
| 126 | How it works | `dataDirHostPath` is host path for config and data of each service | S36 | PASS | "The path on the host (hostPath) where config and data should be stored for each of the services." |
| 127 | How it works | Test: delete cluster, new one on same hosts, path must be deleted | S36 | PASS | "if you delete a cluster and start a new cluster on the same hosts, the path used by dataDirHostPath must be deleted." |
| 128 | How it works | Otherwise stale keys remain; new mons fail to start | S36 | PASS | "stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| 129 | How it works | Glossary Ceph terms MON, MGR, MDS, OSD, RBD, RGW | S31 | PASS | "Ceph Monitor (MON) / Ceph Manager (MGR) / Ceph Metadata Server (MDS) / Object Storage Device (OSD) / RADOS Block Device (RBD) / Ceph Object Gateway (RGW)" |
| 130 | How it works | At least one local storage type required: raw devices, partitions, LVM LVs, block-mode PVs | S33 | PASS | "at least one of these local storage types is required: Raw devices... Raw partitions... LVM Logical Volumes... Persistent Volumes available from a storage class in block mode" |
| 131 | How it works | Raw devices have no partitions or formatted FS; partitions and LVs no formatted FS | S33 | PASS | "Raw devices (no partitions or formatted filesystems)"; "Raw partitions (no formatted filesystem)"; "LVM Logical Volumes (no formatted filesystem)" |
| 132 | How it works | `lsblk -f`: FSTYPE not empty means a filesystem | S33 | PASS | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| 133 | How it works | Running udev daemon required on all storage nodes | S33 | PASS | "A running udev daemon is required on all storage nodes." |
| 134 | How it works | Ceph requires a kernel built with RBD module | S33 | PASS | "Ceph requires a Linux kernel built with the RBD module." |
| 135 | How it works | CephFS RWX: recommended minimum kernel 4.17 | S33 | PASS | "the recommended minimum kernel version is 4.17." |
| 136 | How it works | Custom resources validated via OpenAPI v3.0 schemas | S25 | PASS | "Custom resources are validated via OpenAPI v3.0 schemas," |
| 137 | How it works | Also by `x-kubernetes-validations` when Validation Rules enabled | S25 | PASS | "by x-kubernetes-validations when the Validation Rules feature is enabled" |
| 138 | How it works | Can add validation using admission webhooks | S25 | PASS | "you can add additional validation using admission webhooks." |
| 139 | How it works | `x-kubernetes-validations` validates with CEL | S25 | PASS | "The x-kubernetes-validations extension can be used to validate custom resources using Common Expression Language (CEL) expressions" |
| 140 | How it works | Rule referring to `oldSelf` is a transition rule | S25 | PASS | "A rule that contains an expression referencing the identifier oldSelf is implicitly considered a transition rule." |
| 141 | How it works | Transition rules apply only to operations meeting criteria | S25 | PASS | "transition rules apply only to operations meeting the following criteria:" |
| 142 | How it works | The operation updates an existing object | S25 | PASS | "The operation updates an existing object." |
| 143 | How it works | Transition rules never apply to create operations | S25 | PASS | "Transition rules never apply to create operations." |
| 144 | How it works | Both an old and a new value exist | S25 | PASS | "Both an old and a new value exist." |
| 145 | How it works | Unrecognized field is pruned before persisted | S25 | PASS | "the unknown field is pruned (removed) before being persisted." |
| 146 | How it works | Schema can opt out of pruning with `x-kubernetes-preserve-unknown-fields: true` | S25 | PASS | "opt-out of that for specific sub-trees of fields by adding x-kubernetes-preserve-unknown-fields: true" |
| 147 | How it works | kubectl also checks unknown fields and rejects well before API server | S25 | PASS | "kubectl also checks for unknown fields and rejects those objects well before they" |
| 148 | How it works | `kubectl apply --dry-run=server` submits server-side request without persisting | S27 | PASS | "If server strategy, submit server-side request without persisting the resource." |
| 149 | How it works | `--validate` defaults to strict | S27 | PASS | "--validate string[=\"strict\"] Default: \"strict\"" |
| 150 | How it works | "true" or "strict" validate with schema and fail if invalid | S27 | PASS | "\"true\" or \"strict\"" ... "validate the input and fail the request if invalid." |
| 151 | How it works | Server-side validation if ServerSideFieldValidation enabled on API server | S27 | PASS | "It will perform server side validation if ServerSideFieldValidation is enabled on the api-server" |
| 152 | How it works | Falls back to less reliable client-side validation | S27 | PASS | "but will fall back to less reliable client-side validation if not." |
| 153 | How it works | `--server-side` runs apply in the server | S27 | PASS | "If true, apply runs in the server instead of the client." |
| 154 | How it works | `kubectl wait` waits until condition seen in Status field of every resource | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 155 | How it works | kubectl consumes published schema for client-side validation and `kubectl explain` | S25 | PASS | "The kubectl command-line tool consumes the published schema to perform client-side validation (kubectl create and kubectl apply), schema explanation (kubectl explain)" |
| 156 | How it works | For `kubectl get`, API server decides columns; CRD can customize | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns for a CustomResourceDefinition." |
| 157 | Try it | Run record: date, versions, folder, HOME, `/work`, `CONTAINERD_ADDRESS` set once | none | N/A | Record of the page's own run, after a sentence naming date and system. |
| 158 | Try it | Rootless page of containerd docs sets the variable (CONTAINERD_ADDRESS) the same way | S14 | PASS | "$ export CONTAINERD_ADDRESS=/run/user/1001/containerd/containerd.sock" |
| 159 | Try it | In your terminal run `export CONTAINERD_ADDRESS=...` | none | N/A | Step of the reader's own work. |
| 160 | Try it | Overview paragraphs: steps 1–8, sockets, dockerd, Docker Hub, chart repo, kind cluster, cleanup | none | N/A | Record of the tutorial's own run and choices. |
| 161 | Try it | Choices no source gives; what the tutorial did not run | none | N/A | Tutorial's own statements. |
| 162 | Try it | `containerd.io` DEB/RPM packages are distributed by Docker, not the containerd project | S8 | PASS | "The containerd.io packages in DEB and RPM formats are distributed by Docker (not by the containerd project)." |
| 163 | Try it | `containerd.io` contains runc, not CNI plugins | S8 | PASS | "The containerd.io package contains runc too, but does not contain CNI plugins." |
| 164 | Try it | `dpkg -S` result, package version, package pre-installed | none | N/A | Record of the page's own run. |
| 165 | Try it | Helm/kind/kubectl provenance and "that page says" statements; charts not pinned | none | N/A | Statements about the tutorial's earlier pages and its own choices. |
| 166 | Try it | Step 1 code block and output | none | N/A | Reader's own steps and run output. |
| 167 | Try it | Step 1 bullets (versions printed) | none | N/A | Run record. |
| 168 | Try it | Step 2 code block (config.toml, start daemon) and output | none | N/A | Reader's own steps. The path choices are the tutorial's own. |
| 169 | Try it | Docs: you need to provide a `config.toml` with your own path configuration | S14 | PASS | "You need to provide config.toml with your own path configuration." |
| 170 | Try it | Step 2 other bullets (version = 4, boot line, ctr version, separate process) | none | N/A | Run record. |
| 171 | Try it | Step 3 code block and output | none | N/A | Reader's own steps. |
| 172 | Try it | Docs: you can see all plugins in the output, also those that did not load | S10 | PASS | "From the output all the plugins can be seen as well those which did not successfully load." |
| 173 | Try it | Step 3 counts (68, 56/11/1), skip rows, error row, config defaults | none | N/A | Run record. |
| 174 | Try it | `cri` plugin handles all CRI requests of the kubelet | S15 | PASS | "The cri plugin inside containerd handles all CRI service requests from the Kubelet" |
| 175 | Try it | To use systemd cgroup driver with runc, set `SystemdCgroup = true` | S21 | PASS | "To use the systemd cgroup driver in /etc/containerd/config.toml with runc, set the following config" ... "SystemdCgroup = true" |
| 176 | Try it | Critical that kubelet and runtime use same cgroup driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup" |
| 177 | Try it | Step 4 code block, output, bullets (42 blobs, 10 platforms, :latest) | none | N/A | Reader's own steps and run record. |
| 178 | Try it | OCI spec: image index contains a list of manifests for specific platforms | S19 | PASS | "This REQUIRED property contains a list of manifests for specific platforms." |
| 179 | Try it | Step 5 code block, output, count bullets | none | N/A | Reader's own steps and run record. |
| 180 | Try it | Content-flow: if index, find platform and use that hash to get manifest | S12 | PASS | "If the descriptor is an index, find in it the platform (architecture+os)... use that hash to retrieve the manifest" |
| 181 | Try it | OCI spec: manifest provides a configuration and layers for a single image | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image" |
| 182 | Try it | Docs: each component is stored in a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 183 | Try it | OCI spec: DiffID is digest over uncompressed tar | S17 | PASS | "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 184 | Try it | Content-flow: layer hash when uncompressed via `cat <file> \| gunzip - \| sha256sum -` | S12 | PASS | "$ cat <file> \| gunzip - \| sha256sum -" |
| 185 | Try it | Spec: do not confuse DiffIDs with layer digests | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 186 | Try it | Step 6 code block, output, bullets | none | N/A | Reader's own steps and run record. |
| 187 | Try it | Docs: content shared via content addresses; names/metadata separate per namespace | S9 | PASS | "Underlying image content is still shared via content addresses but image names and metadata are separate per namespace." |
| 188 | Try it | Step 7 code block, output, run bullets (42 files, 0 files, earlier run) | none | N/A | Reader's own steps and run record. The help-text bullet is run output. |
| 189 | Try it | Docs: GC on background goroutine, configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors." |
| 190 | Try it | Docs: manifest references config and layer tars; stored as generic blobs; client sets relations with labels | S13 | PASS | "an OCI image has a manifest which references a config file and layer tars. These resources are stored in containerd as generic blobs... sets them up using labels on the content resources." |
| 191 | Try it | Docs: client may request GC during removal | S13 | PASS | "may also request a garbage collection during resource removal." |
| 192 | Try it | Docs: service does not return until GC completes | S13 | PASS | "The service will not return until the garbage collection has completed." |
| 193 | Try it | Docs: supported on removal of images and leases | S13 | PASS | "This is currently supported on removal of images and" / "leases" |
| 194 | Try it | Step 8 code block, output, bullets (exit 1, error text, 0 images) | none | N/A | Reader's own steps and run record. |
| 195 | Try it | Content-flow: layers read and applied, committed snapshot; known as unpacking | S12 | PASS | "creating what is known as a \"committed snapshot\"... This process is known as \"unpacking\"." |
| 196 | Try it | Docs: non-root user can run containerd using user_namespaces(7) | S14 | PASS | "A non-root user can execute containerd by using user_namespaces(7)." |
| 197 | Try it | Docs: container can be created with active snapshot as root filesystem | S12 | PASS | "A container now can be created, with its root filesystem as the active snapshot." |
| 198 | Try it | Step 9 code block, output, run bullets (chart rows, sizes, kinds, images) | none | N/A | Reader's own steps and run record. |
| 199 | Try it | `helm template` renders chart templates locally and displays the output | S39 | PASS | "Render chart templates locally and display the output." |
| 200 | Try it | Docs: chart bootstraps a rook-ceph-operator deployment | S34 | PASS | "This chart bootstraps a rook-ceph-operator deployment" |
| 201 | Try it | Docs: default values create one block pool, filesystem, object store, and storage classes | S35 | PASS | "will create one of each, and their corresponding storage classes." |
| 202 | Try it | Docs: clusters can be installed into same namespace as operator or separate | S35 | PASS | "The clusters can be installed into the same namespace as the operator or a separate namespace." |
| 203 | Try it | Step 10 code block, output, run bullets | none | N/A | Reader's own steps and run record. |
| 204 | Try it | kind runs a local Kubernetes cluster using Docker containers as nodes | S40 | PASS | "kind runs a local Kubernetes cluster by using Docker containers as “nodes”." |
| 205 | Try it | kind docs show `kind create cluster --image=...` | S40 | PASS | "To specify another image use the --image flag – kind create cluster --image=...." |
| 206 | Try it | K8s docs: Kubernetes 1.37 requires a CRI-conforming runtime | S21 | PASS | "Kubernetes 1.37 requires that you use a runtime that conforms with the" |
| 207 | Try it | kube-scheduler is default scheduler, part of control plane | S23 | PASS | "is the default scheduler for Kubernetes and runs as part of the control plane." |
| 208 | Try it | Scheduler watches for newly created Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 209 | Try it | Step 11 code block, output, run bullets (Pending, Unschedulable, event text) | none | N/A | Reader's own steps and run record. |
| 210 | Try it | Docs: nodeSelector is simplest recommended form of node selection | S41 | PASS | "nodeSelector is the simplest recommended form of node selection constraint." |
| 211 | Try it | Docs: only schedules onto nodes with each label | S41 | PASS | "Kubernetes only schedules the Pod onto nodes that have each of the labels you specify." |
| 212 | Try it | Docs: pod remains unscheduled if no node suitable | S23 | PASS | "the pod remains unscheduled until the scheduler is able to place it." |
| 213 | Try it | Docs: nodes have labels, you can attach labels manually | S41 | PASS | "nodes have labels. You can attach labels manually." |
| 214 | Try it | Scheduler notifies API server in binding | S23 | PASS | "notifies the API server about this decision in a process called binding." |
| 215 | Try it | Step 12 code block, output, count/schema bullets | none | N/A | Reader's own steps and run record. |
| 216 | Try it | `helm template --show-only` shows only manifests rendered from the template | S39 | PASS | "-s, --show-only stringArray only show manifests rendered from the given templates" |
| 217 | Try it | `kubectl apply --server-side` runs apply in the server | S27 | PASS | "If true, apply runs in the server instead of the client." |
| 218 | Try it | `kubectl wait` waits until condition seen in Status field | S29 | PASS | "waits until the specified condition is seen in the Status field of every given resource." |
| 219 | Try it | Once a custom resource is installed, users create/access objects with kubectl like built-ins | S24 | PASS | "Once a custom resource is installed, users can create and access its objects using kubectl, just as they do for built-in resources like Pods." |
| 220 | Try it | `kubectl explain` describes the fields of each supported API resource | S28 | PASS | "This command describes the fields associated with each supported API resource." |
| 221 | Try it | Rook docs: number must be between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 222 | Try it | `x-kubernetes-validations` can validate with CEL; `oldSelf` rule is a transition rule | S25 | PASS | "can be used to validate custom resources using Common Expression Language (CEL) expressions"; "referencing the identifier oldSelf is implicitly considered a transition rule." |
| 223 | Try it | Step 13 code block, output, run bullets | none | N/A | Reader's own steps and run record. |
| 224 | Try it | Each `--dry-run=server` submits a server-side request without persisting | S27 | PASS | "If server strategy, submit server-side request without persisting the resource." |
| 225 | Try it | Rook docs: number must be 1–9 (count: 0 bullet) | S36 | PASS | "The number must be between 1 and 9." |
| 226 | Try it | `--validate` flag defaults to strict | S27 | PASS | "Default: \"strict\"" |
| 227 | Try it | Docs: "true" or "strict" use a schema and fail if invalid | S27 | PASS | "validate the input and fail the request if invalid." |
| 228 | Try it | Docs: API server decides `kubectl get` columns; CRD can customize | S25 | PASS | "Your cluster's API server decides which columns are shown by the kubectl get command. You can customize these columns" |
| 229 | Try it | Docs: transition rules never apply to create operations | S25 | PASS | "Transition rules never apply to create operations." |
| 230 | Try it | Step 14 code block, output, run bullets | none | N/A | Reader's own steps and run record. |
| 231 | Try it | kind docs: list node images with `docker exec -it my-node-name crictl images` | S40 | PASS | "docker exec -it my-node-name crictl images" (under "using docker exec:") |
| 232 | Try it | K8s docs: use `crictl` to inspect and debug runtimes and apps on a node | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a" |
| 233 | Try it | Critical that kubelet and runtime use same cgroup driver (step 14) | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup" |
| 234 | Try it | `ctr` uses `default` namespace when none given | S9 | PASS | "If you do not provide a namespace, ctr client commands will all use the default namespace" |
| 235 | Try it | Docs call `crictl` a CLI for CRI-compatible runtimes | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 236 | Try it | Step 15 code block, output, run bullets | none | N/A | Reader's own steps and run record. |
| 237 | Try it | Rook prerequisites page names `lsblk -f` to confirm filesystems | S33 | PASS | "Confirm whether the partitions or devices are formatted with filesystems with the following command:" then "$ lsblk -f" |
| 238 | Try it | Docs: FSTYPE not empty means filesystem on device | S33 | PASS | "If the FSTYPE field is not empty, there is a filesystem on top of the corresponding device." |
| 239 | Try it | Rook troubleshooting: unavailable device (partitions or FS) is skipped | S38 | PASS | "if Rook determines that a device is not available (has existing partitions or a formatted filesystem), Rook will skip consuming the devices." |
| 240 | Try it | Docs recommend minimum kernel 4.17 for CephFS RWX | S33 | PASS | "the recommended minimum kernel version is 4.17." |
| 241 | Try it | Docs: Ceph requires RBD module; test nodes with `modprobe rbd` | S33 | PASS | "Ceph requires a Linux kernel built with the RBD module." / "Test your Kubernetes nodes by running modprobe rbd." |
| 242 | Try it | Docs: running udev daemon required on all storage nodes | S33 | PASS | "A running udev daemon is required on all storage nodes." |
| 243 | How a tester uses it | Docs: need working runtime on each Node | S20 | PASS | "You need a working container runtime on each Node in your cluster" |
| 244 | How a tester uses it | K8s v1.26+: kubelet requires v1 CRI | S20 | PASS | "For Kubernetes v1.26 and later, the kubelet requires that the container runtime supports the v1 CRI API." |
| 245 | How a tester uses it | No v1: kubelet will not register node | S20 | PASS | "the kubelet will not register the node." |
| 246 | How a tester uses it | Run record: step 10 showed `containerd://2.3.4`; machine 2.4.2; tester advice | none | N/A | Run record and the tutorial's advice. |
| 247 | How a tester uses it | Kubelet and runtime need a cgroup driver | S21 | PASS | "the kubelet and the container runtime need to use a cgroup driver." |
| 248 | How a tester uses it | cgroupfs is the default driver in the kubelet | S21 | PASS | "The cgroupfs driver is the default cgroup driver in the kubelet." |
| 249 | How a tester uses it | systemd recommended with cgroup v2 | S21 | PASS | "The systemd cgroup driver is recommended if you use cgroup v2." |
| 250 | How a tester uses it | Critical that both use same driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup" |
| 251 | How a tester uses it | Step 14/3 settings record; tester can compare | none | N/A | Run record and advice. |
| 252 | How a tester uses it | `crictl` is a CLI for CRI-compatible runtimes | S22 | PASS | "crictl is a command-line interface for CRI-compatible container runtimes." |
| 253 | How a tester uses it | Use it to inspect and debug runtimes and apps | S22 | PASS | "You can use it to inspect and debug container runtimes and applications on a" |
| 254 | How a tester uses it | `ctr` solely for debugging containerd | S8 | PASS | "the ctr tool is solely made for debugging containerd." |
| 255 | How a tester uses it | `ctr` uses `default` namespace if none given | S9 | PASS | "ctr client commands will all use the default namespace" |
| 256 | How a tester uses it | Step 14/6 records; wrong-namespace advice | none | N/A | Run record and advice. |
| 257 | How a tester uses it | Each component stored in a file named by its hash | S12 | PASS | "Each component is stored in a file whose name is the hash of it." |
| 258 | How a tester uses it | Step 5 record (42 files equal SHA-256) | none | N/A | Run record. |
| 259 | How a tester uses it | Index contains list of manifests for specific platforms | S19 | PASS | "contains a list of manifests for specific platforms." |
| 260 | How a tester uses it | Manifest gives configuration and layers for a single image | S18 | PASS | "an image manifest provides a configuration and set of layers for a single container image for a specific architecture and operating system." |
| 261 | How a tester uses it | DiffIDs not to be confused with layer digests | S17 | PASS | "Do not confuse DiffIDs with layer digests, often referenced in the manifest" |
| 262 | How a tester uses it | Disk-use paragraph: step 6/7 records, advice to use `--sync` | none | N/A | Run record and advice. |
| 263 | How a tester uses it | GC on background goroutine, configurable factors | S13 | PASS | "scheduled on a background goroutine and runs based on a number of configurable factors." |
| 264 | How a tester uses it | containerd reads optional `hosts.toml` per registry host | S16 | PASS | "specifying (optionally) a hosts.toml file for each desired registry host in a configuration directory." |
| 265 | How a tester uses it | Mirror: registry host namespace appended as query parameter `ns` | S16 | PASS | "containerd will append the registry host namespace to requests as a query parameter called ns." |
| 266 | How a tester uses it | Tutorial set no `hosts.toml`; tester advice | none | N/A | Run record and advice. |
| 267 | How a tester uses it | Scheduler watches for newly created Pods with no Node | S23 | PASS | "A scheduler watches for newly created Pods that have no Node assigned." |
| 268 | How a tester uses it | Pod stays unscheduled if no node suitable | S23 | PASS | "the pod remains unscheduled until the scheduler is able to place it." |
| 269 | How a tester uses it | Step 11 record; events command advice; not tested taints | none | N/A | Run record and advice. |
| 270 | How a tester uses it | Custom resources validated via OpenAPI v3.0 and `x-kubernetes-validations` | S25 | PASS | "Custom resources are validated via OpenAPI v3.0 schemas, ... by x-kubernetes-validations when the Validation Rules feature is enabled" |
| 271 | How a tester uses it | `--dry-run=server` submits server-side request without persisting | S27 | PASS | "submit server-side request without persisting the resource." |
| 272 | How a tester uses it | Step 13 record; advice; operator not run | none | N/A | Run record and advice. |
| 273 | How a tester uses it | Rook docs: mons between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 274 | How a tester uses it | Docs: odd number for highest availability | S36 | PASS | "For highest availability, an odd number of mons should be specified." |
| 275 | How a tester uses it | Gap record (CRD minimum 0, count 0 accepted) | none | N/A | Run record. |
| 276 | How a tester uses it | At least one local storage type required (list) | S33 | PASS | "To configure the Ceph storage cluster, at least one of these local storage types is required:" |
| 277 | How a tester uses it | Unavailable device skipped by Rook | S38 | PASS | "Rook will skip consuming the devices." |
| 278 | How a tester uses it | To see if skipped, view OSD preparation log on that node | S38 | PASS | "To see if a device was skipped, view the OSD preparation log on the node where the device was skipped." |
| 279 | How a tester uses it | Step 15 record (filesystems, rbd, udev, kernel) | none | N/A | Run record. |
| 280 | How a tester uses it | Rook toolbox is a container with common debugging/testing tools | S37 | PASS | "The Rook toolbox is a container with common tools used for rook debugging and testing." |
| 281 | How a tester uses it | Example commands `ceph status`, `ceph osd status`, `ceph df`, `rados df` | S37 | PASS | Lines list "ceph status", "ceph osd status", "ceph df", "rados df". |
| 282 | How a tester uses it | Two common causes for PVCs pending: no OSDs, CSI provisioner not running/responding | S38 | PASS | "There are two common causes for the PVCs staying in pending state: There are no OSDs in the cluster / The CSI provisioner pod is not running or is not responding to the request to provision the storage" |
| 283 | How a tester uses it | Test cluster: only one OSD required | S38 | PASS | "In a \"test\" cluster, only one OSD is required (see storageclass-test.yaml)." |
| 284 | How a tester uses it | Production storage class example: three OSDs | S38 | PASS | "In the production storage class example (storageclass.yaml), three OSDs would be required." |
| 285 | Common mistakes | Docs: namespaces administrative, not security feature | S9 | PASS | "is an administrative construct that is not meant to be used as a security feature." |
| 286 | Common mistakes | Trivial for clients to switch namespaces | S9 | PASS | "It is trivial for clients to switch namespaces." |
| 287 | Common mistakes | Step 6 `-n other` was enough | none | N/A | Run record. |
| 288 | Common mistakes | Without namespace, `ctr` uses `default` | S9 | PASS | "ctr client commands will all use the default namespace" |
| 289 | Common mistakes | Step 14/6 namespace records | none | N/A | Run record. |
| 290 | Common mistakes | GC scheduled on a background goroutine | S13 | PASS | "The garbage collector (gc) is scheduled on a background goroutine" |
| 291 | Common mistakes | Step 6/7 records (42 blobs; `--sync`) | none | N/A | Run record. |
| 292 | Common mistakes | Critical that they use the same driver | S21 | PASS | "It's critical that the kubelet and the container runtime use the same cgroup" |
| 293 | Common mistakes | Containerd 2.4.2 default `SystemdCgroup = false`; node true; "Do not assume the default" | none | N/A | Run record (steps 3 and 14) and advice. |
| 294 | Common mistakes | Operator deploys, configures, provisions, scales, upgrades, monitors Ceph on Kubernetes resources | S30 | PASS | "building on Kubernetes resources to deploy, configure, provision, scale, upgrade, and monitor Ceph." |
| 295 | Common mistakes | Step 13/12 records (empty PHASE; explain, no range) | none | N/A | Run record. |
| 296 | Common mistakes | Rook docs: number between 1 and 9 | S36 | PASS | "The number must be between 1 and 9." |
| 297 | Common mistakes | Chart docs warn `crds.enabled` first deployment only; later disable may destroy | S34 | PASS | "Only set during first deployment. If later disabled the cluster may be DESTROYED." |
| 298 | Common mistakes | Delete cluster, new on same hosts: `dataDirHostPath` must be deleted | S36 | PASS | "the path used by dataDirHostPath must be deleted." |
| 299 | Common mistakes | Otherwise stale keys remain; new mons fail to start | S36 | PASS | "stale keys and other config will remain from the previous cluster and the new mons will fail to start." |
| 300 | Common mistakes | Odd mons for highest availability | S36 | PASS | "For highest availability, an odd number of mons should be specified." |
| 301 | Common mistakes | Even number for durability; availability may be lower | S36 | PASS | "For higher durability in case of mon loss, an even number can be specified although availability may be lower." |
| 302 | Common mistakes | Majority of mons must be up for quorum | S36 | PASS | "To maintain quorum a majority of mons must be up." |
| 303 | Common mistakes | Rook skips a device with partitions or formatted filesystem | S38 | PASS | "if Rook determines that a device is not available (has existing partitions or a formatted filesystem), Rook will skip consuming the devices." |
| 304 | Common mistakes | Scheduler matches Pods to Nodes so kubelet can run them | S23 | PASS | "Pods are matched to Nodes so that Kubelet can run them." |
| 305 | Common mistakes | Step 11 record; tutorial advice to read events | none | N/A | Run record and advice. |
| 306 | What a tester can check | Callout "Tutorial advice": 10 advice bullets plus `ceph status` bullet | none | PASS | The panel says "This list is the tutorial's own advice for a tester". It gives no tool fact that the rest of the page does not support. |
| 307 | Key words | Graduated | none | PASS | Page: "highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments" |
| 308 | Key words | Incubation | none | PASS | Page: "projects gaining adoption, focusing on improving stability and maturity" |
| 309 | Key words | containerd | none | PASS | Page: "an industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 310 | Key words | CRI | none | PASS | Page: "the main protocol for the communication between the kubelet and the container runtime" |
| 311 | Key words | Namespace | none | PASS | Page: "an administrative construct that is not meant to be used as a security feature" |
| 312 | Key words | Snapshotter | none | PASS | Page: "Snapshotters manage the snapshots of the container filesystems" |
| 313 | Key words | Unpacking | none | PASS | Page: "The layers must then be read and applied to a filesystem, which creates a committed snapshot ... This process is known as unpacking" |
| 314 | Key words | Image index | none | PASS | Page: "An image index contains a list of manifests for specific platforms" |
| 315 | Key words | DiffID | none | PASS | Page: "A layer DiffID is the digest over the layer's uncompressed tar archive" |
| 316 | Key words | Garbage collector | none | PASS | Page: "scheduled on a background goroutine, and it runs based on a number of configurable factors" |
| 317 | Key words | kube-scheduler | none | PASS | Page: "kube-scheduler is the default scheduler for Kubernetes, and it runs as part of the control plane" |
| 318 | Key words | nodeSelector | none | PASS | Page: "A `nodeSelector` only selects nodes with all the specified labels" |
| 319 | Key words | Custom resource | none | PASS | Page: "an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation" |
| 320 | Key words | Operator | none | PASS | Page: "Operators are clients of the Kubernetes API that act as controllers for a Custom Resource" |
| 321 | Key words | Transition rule | none | PASS | Page: "A rule that refers to `oldSelf` is a transition rule" |
| 322 | Key words | Rook | none | PASS | Page: "Rook is an open source cloud-native storage orchestrator" |

Open FAILs after round 11: 0

Open FAILs: 0
