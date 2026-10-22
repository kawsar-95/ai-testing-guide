# Fact-check: course/vm-containers ("VMs and Containers")

Reviewer: a separate agent. Sources fetched live on 2026-10-22 into `/tmp/claude-1000/fc4-vm-containers/` (NIST SP 800-190 PDF via `pdftotext`; the Docker page and both Kubernetes pages as HTML text). The research notes were not trusted. Quotes are from the live sources.

Source keys: [1] NIST SP 800-190, [2] Docker "What is a container?", [3] Kubernetes "Containers", [4] Kubernetes "Images".

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | VMs and containers share one machine but separate apps differently | 1 | PASS | "Both VMs and containers allow multiple apps to share the same physical infrastructure, but they use different methods of separation." |
| 2 | A VM uses a hypervisor with hardware-level isolation | 1 | PASS | "VMs use a hypervisor that provides hardware-level isolation of resources across VMs." |
| 3 | Each VM sees its own virtual hardware and runs a complete guest OS | 1 | PASS | "Each VM sees its own virtual hardware and includes a complete guest OS in addition to the app and its data." |
| 4 | Different VMs can run different OSs (Linux, Windows) | 1 | PASS | "VMs allow different OSs, such as Linux and Windows, to share the same physical hardware." |
| 5 | Containers share one kernel, part of the host OS, and are kept apart | 1 | PASS | "multiple apps share the same OS kernel instance but are segregated from each other. The OS kernel is part of what is called the host operating system." |
| 6 | Docker: a container is an isolated process with its files | 2 | PASS | "A container is simply an isolated process with all of the files it needs to run." |
| 7 | Container depends on host OS family (Linux host, Linux containers; Windows host, Windows containers) | 1 | PASS | "a Linux host can only run containers built for Linux, and a Windows host can only run Windows containers." |
| 8 | The runtime asks the host OS to give each container its own view | 1 | PASS | "Containers are fundamentally a mechanism to give each app a unique view of a single OS"; "capabilities the container runtime ensures the host OS provides". |
| 9 | Namespace isolation: files, network interfaces, processes | 1 | PASS | "Namespace isolation limits which resources a container may interact with. This includes file systems, network interfaces, interprocess communications, host names, user information, and processes." |
| 10 | Resource limits; on Linux mainly cgroups | 1 | PASS | "Resource allocation limits how much of a host's resources a given container can consume ... On Linux, this is accomplished primarily with control groups (cgroups)". |
| 11 | Filesystem virtualization: share storage, no access to others' data | 1 | PASS | "allows multiple containers to share the same physical storage without the ability to access or alter the storage of other containers." |
| 12 | Image = ready-to-run package with code, runtime, libraries, default settings | 3 | PASS | "A container image is a ready-to-run software package containing everything needed to run an application: the code and any runtime it requires, application and system libraries, and default values for any essential settings." |
| 13 | NIST: image is an immutable snapshot of user-space needs | 1 | PASS | "The image is an immutable snapshot of all userspace requirements of the app". |
| 14 | Developer, build system, production run the same artifact; solves "works on my machine" | 1 | PASS | "This solves the 'works on my machine' problem since the developer, build system, and production all run the same immutable artifact." |
| 15 | Kubernetes: containers meant to be stateless and immutable; build new image, recreate | 3 | PASS | "Containers are intended to be stateless and immutable ... the correct process is to build a new image that includes the change, then recreate the container". Stated as Kubernetes. |
| 16 | Usually push image to a registry before a Pod uses it | 4 | PASS | "You typically create a container image of your application and push it to a registry before referring to it in a Pod." |
| 17 | Kubernetes: node runs containers of its Pods; Pod containers on one node | 3 | PASS | "Each node in a Kubernetes cluster runs the containers that form the Pods assigned to that node. Containers in a Pod are co-located and co-scheduled to run on the same node." |
| 18 | Docker: a whole VM to isolate one app is a lot of overhead | 2 | PASS | "Spinning up a VM only to isolate a single application is a lot of overhead." |
| 19 | Shared kernel lets you run more apps on less infrastructure | 2 | PASS | "If you run multiple containers, they all share the same kernel, allowing you to run more applications on less infrastructure." |
| 20 | Docker traits: self-contained, little effect on others, delete without harm, same behavior on laptop/data center/cloud | 2 | PASS | "they have minimal influence on the host and other containers"; "Deleting one container won't affect any others"; "will work the same way in a data center or anywhere in the cloud". The page softens "will" to "should". |
| 21 | Kubernetes: containers repeatable, decouple app from host | 3 | PASS | "Each container that you run is repeatable"; "Containers decouple applications from the underlying host infrastructure." |
| 22 | NIST lists strong isolation, OS automation, wide ecosystem as VM benefits | 1 | PASS | "VMs provide many benefits, such as strong isolation, OS automation, and a wide and deep ecosystem of solutions." |
| 23 | A container cannot bring a different OS family; a VM can run another OS | 1 | PASS | Same quotes as #4 and #7. The "so" link to the shared kernel is a fair reading of "Containers are OS-family specific". |
| 24 | Table, Separation: hypervisor vs shared kernel plus runtime | 1 | PASS | See #2 and #5. |
| 25 | Table, Isolation strength, VM: boundary clearer and more concrete | 1 | PASS | "they do not offer as clear and concrete of a security boundary as a VM." |
| 26 | Table, Isolation strength, container: strong but less clear; segmentation far less; larger attack surface; careless setup | 1 | PASS | "While containers provide a strong degree of isolation, they do not offer as clear and concrete of a security boundary as a VM ... the degree of segmentation between them is far less than that provided to VMs by a hypervisor. Thus, carelessly configured environments can result in containers having the ability to interact with each other and the host far more easily and directly"; "the use of a shared kernel invariably results in a larger inter-object attack surface than seen with hypervisors". Hedges kept ("strong", "carelessly configured"). Advisory: the page drops "inter-object"; adding it would match NIST exactly. |
| 27 | Table, carries: VM = full guest OS, own kernel and drivers | 2 | PASS | "a VM is an entire operating system with its own kernel, hardware drivers, programs, and applications." |
| 28 | Table, carries: container = isolated process with its files | 2 | PASS | See #6. |
| 29 | Table, Overhead, VM: a lot, if used for one app | 2 | PASS | See #18. |
| 30 | Table, Overhead, container: less, because kernel is shared | 2 | PASS | Docker gives the shared-kernel benefit (#19) and does not use the word "overhead" for containers. "Less" is a fair reading. |
| 31 | Table, Different OS, VM: Linux and Windows VMs on one machine | 1 | PASS | See #4. |
| 32 | Table, Different OS, container: Linux host runs only Linux containers | 1 | PASS | See #7. |
| 33 | Table, Change process, VM: "The sources give no rule here" | none | FAIL | This is a claim about what the sources say, and it is wrong. NIST gives a rule: "Immutability is a fundamental operational difference between containers and hardware virtualization. Traditional VMs are typically run as stateful entities that are deployed, reconfigured, and upgraded throughout their life." The cell is also uncited and not marked as the tutorial's own, while the intro line says "Each row states what the sources say". Fix: cite [1] with the NIST statement (keep "typically"), or mark the cell as the tutorial's own. |
| 34 | Table, Change process, container: build new image, recreate | 3 | PASS | See #15. Advisory: the cell reads as a general container rule but cites only Kubernetes. NIST also supports it ("Most application container technologies implement the concept of immutability ... destroyed and replaced with a new container"), so adding cite [1] or "Kubernetes says" would remove the doubt. |
| 35 | Table, "Which to pick" row | none | PASS | Labelled "(tutorial's own)", uses "Often", states no source fact. The intro line says it is the tutorial's own. |
| 36 | NIST hedge: less isolation than hypervisors, but most do an effective job | 1 | PASS | "the level of isolation provided by container runtimes is not as high as that provided by hypervisors"; "most container platforms do an effective job of isolating containers from each other and from the host OS". Advisory: NIST says "container platforms", the page says "runtimes". The hedge is kept. |
| 37 | NIST: no need to choose; VMs deploy/partition hardware, containers package apps and use each VM better | 1 | PASS | "Organizations do not need to make a choice between containers and VMs. Instead, organizations can continue to use VMs to deploy, partition, and manage their hardware, while using containers to package their apps and utilize each VM more efficiently." |
| 38 | Docker: cloud machines typically VMs; one VM with runtime runs many containerized apps | 2 | PASS | "in a cloud environment, the provisioned machines are typically VMs ... a VM with a container runtime can run multiple containerized applications". |
| 39 | Mistake: container shares host kernel; NIST says boundary less clear than VM | 1 | PASS | See #25 and #5. |
| 40 | Mistake: a host kernel runs containers of one sensitivity level; VMs can provide this | 1 | PASS | "a best practice is to group containers together by relative sensitivity and to ensure that a given host kernel only runs containers of a single sensitivity level. This segmentation may be provided by using multiple physical servers, but modern hypervisors also provide strong enough isolation to effectively mitigate these risks." |
| 41 | Mistake: do not mix containerized and non-containerized workloads on a host | 1 | PASS | "organizations should not mix containerized and non-containerized workloads on the same host instance." |
| 42 | Mistake: `latest` is harder to track and roll back; tags can move, digests are fixed | 4 | PASS | "avoid using the :latest tag when deploying containers in production as it is harder to track which version of the image is running and more difficult to roll back properly"; "Tags can be moved to point to different images, but digests are fixed." Stated as Kubernetes. |
| 43 | Mistake: build new image and recreate, do not fix a running container | 3 | PASS | See #15. |
| 44 | Key word, VM: simulated computer, virtual hardware, guest OS | 1 | PASS | Glossary: "A simulated environment created by virtualization"; plus #3. |
| 45 | Key word, Hypervisor | 1 | PASS | See #2. |
| 46 | Key word, Container | 2 | PASS | See #6. |
| 47 | Key word, Kernel: shared by all containers on a host | 1 | PASS | See #5. |
| 48 | Key word, Container image | 3 | PASS | See #12. |
| 49 | Key word, Container runtime (containerd, CRI-O) | 1, 3 | PASS | Kubernetes: "Kubernetes supports container runtimes such as containerd, CRI-O"; "responsible for managing the execution and lifecycle of containers". NIST: "comprised of binaries coordinating multiple operating system components that isolate resources". |
| 50 | Key word, Namespace isolation | 1 | PASS | See #9. |
| 51 | Key word, cgroups | 1 | PASS | See #10. |
| 52 | Key word, Registry: store images before a Pod uses them | 4 | PASS | Drawn from #16. Advisory: Kubernetes does not define "registry" on this page. |
| 53 | Key word, Tag and digest | 4 | PASS | "Digests are hashes of the image's content, and are immutable. Tags can be moved to point to different images, but digests are fixed." |
| 54 | Key word, Immutable | 3 | PASS | See #15. |
| 55 | Real-life example | none | PASS | Opens with "This example is the tutorial's own." No source fact is stated. |
| 56 | Tip callout | none | PASS | Marked "Tutorial advice ... not a claim of the sources". No `<Cite>`. |

Isolation hedges (special check): the page never says "containers are insecure" or "VMs are secure". It keeps "strong degree of isolation", "carelessly configured", "most ... do an effective job", and "may be an unnecessary risk" in spirit. No FAIL here. Docker and Kubernetes behaviors are attributed to the product in the prose ("Docker says", "Kubernetes says", "In Kubernetes", "Kubernetes warns"). The only unattributed cell is the table Change process cell (#34, advisory).

## Structure check

| Check | Result |
|---|---|
| Every source is https and cited | PASS: sources 1-4 are https and all are cited |
| Every `<Cite n>` has a source | PASS: n = 1 to 4 only |
| No run of 8 or more copied words (tables included) | PASS: longest runs are 7 words, "solves the works on my machine problem", "strong isolation OS automation and a wide", and "do an effective job of isolating containers". One 8-word token run, "a container image is a ready to run", counts "ready-to-run" as 3 words. By whitespace words it is 6. Borderline, accepted. |
| Section order | PASS: In plain words, How it works (optional), When you need it, Trade-offs (optional), A real-life example, Common mistakes, What a tester can check, Key words (last) |
| Tip callout has no Cite; no `<Voices>` | PASS |
| `#` title is "VMs and Containers" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS: NIST, Docker Docs, Kubernetes docs |
| Prose 700-1100 words | PASS: 1092 words by whitespace count (headings, bullets, callout included; export block, tables, and Cite tags excluded). This is near the limit. Any added text needs an equal cut. |
| Security page: no attack steps | PASS |


## Re-check (after the writer's fixes)

Changed text: three lines of the MDX (the Isolation strength row, the Change process row, and the hedge note). All other lines are unchanged (checked with `diff`).

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 33 | Change process, VM: "Typically kept as stateful systems that teams set up, change, and upgrade across their life" | 1 | PASS (was FAIL) | "Traditional VMs are typically run as stateful entities that are deployed, reconfigured, and upgraded throughout their life." The hedge "typically" is kept, and the cell is now cited. |
| 34 | Change process, container: "Built to be immutable: build a new image, then recreate the container" | 1, 3 | PASS | NIST: "Most application container technologies implement the concept of immutability ... destroyed and replaced with a new container that has the updates." Kubernetes: "Containers are intended to be stateless and immutable". Advisory: "Built to be" is a little stronger than "intended" and "Most ... implement"; "Meant to be immutable" would match exactly. |
| 26 | Isolation strength, container: "a larger inter-object attack surface than hypervisors" | 1 | PASS | "the use of a shared kernel invariably results in a larger inter-object attack surface than seen with hypervisors". Now matches NIST. |
| 36 | "most container platforms isolate containers well" | 1 | PASS | "most container platforms do an effective job of isolating containers from each other and from the host OS". The first half, "runtimes give less isolation than hypervisors", matches "the level of isolation provided by container runtimes is not as high as that provided by hypervisors". |

Copy check on the changed lines: no new run of 8 or more words. The new longest run is 7 words ("a larger inter object attack surface than"), allowed. The earlier borderline "ready-to-run" run is unchanged. Word count: 1090 (was 1092), within 700-1100.

Open FAILs: 0
