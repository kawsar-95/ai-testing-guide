# Fact check: devops / kubernetes-basics

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://kubernetes.io/docs/concepts/workloads/pods/; S2 https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/; S3 https://kubernetes.io/docs/concepts/workloads/controllers/deployment/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / kubernetes-basics (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Pods, ReplicaSets, Deployments, YAML files, and a first local cluster. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This line describes the page itself. It is not a fact about a tool, product, command, or number. Note: no cited source covers YAML files or a local cluster. |
| 1 | Pods are the smallest deployable units of computing that you can create and manage in Kubernetes. | S1 | PASS | S1: "Pods  are the smallest deployable units of computing that you can create and manage in Kubernetes." |
| 2 | A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time. | S2 | PASS | S2: "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time." |
| 3 | A Deployment provides declarative updates for Pods and ReplicaSets. | S3 | PASS | S3: "A  Deployment  provides declarative updates for  Pods  and  ReplicaSets ." (the line breaks between "and" and "ReplicaSets" in the file) |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / kubernetes-basics (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Pods, ReplicaSets, and Deployments. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | Describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | Pods are the smallest deployable units of computing that you can create and manage in Kubernetes | S1 | PASS | S1: "Pods  are the smallest deployable units of computing that you can create and manage in Kubernetes." |
| 2 | A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time | S2 | PASS | S2: "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time." |
| 3 | A Deployment provides declarative updates for Pods and ReplicaSets | S3 | PASS | S3: "A  Deployment  provides declarative updates for  Pods  and" followed on the next line by "ReplicaSets". |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / kubernetes-basics (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Pods, ReplicaSets, and Deployments. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede names the topic and describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | Pods are the smallest deployable units of computing that you can create and manage in Kubernetes | S1 | PASS | S1: "Pods  are the smallest deployable units of computing that you can create and manage in Kubernetes." |
| 2 | A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time | S2 | PASS | S2: "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time." |
| 3 | A Deployment provides declarative updates for Pods and ReplicaSets | S3 | PASS | S3 (line 6, continuing on line 7): "A  Deployment  provides declarative updates for  Pods  and" / "ReplicaSets ." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / kubernetes-basics (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Pods, ReplicaSets, and Deployments. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede names the topic and describes the page itself. It states no fact about a tool, product, command, or number. |
| 2 | Pods are the smallest deployable units of computing that you can create and manage in Kubernetes | S1 | PASS | S1: "Pods  are the smallest deployable units of computing that you can create and manage in Kubernetes." |
| 3 | A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time | S2 | PASS | S2: "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time." |
| 4 | A Deployment provides declarative updates for Pods and ReplicaSets | S3 | PASS | S3: "A  Deployment  provides declarative updates for  Pods  and" and, on the next line, "ReplicaSets". |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 16 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-18)

# Fact check: devops / kubernetes-basics (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Pods, ReplicaSets, Deployments; desired state; watch, break, roll back on a kind cluster | none | N/A | Describes the page itself. |
| 2 | Lede | First objects a tester meets; practice run on a local cluster; builds on Docker Basics | none | N/A | Describes the page; the link is to another page of the site. |
| 3 | What it is | Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services | S1 | PASS | S1: "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services that facilitate both declarative configuration and automation." |
| 4 | What it is | It facilitates both declarative configuration and automation | S1 | PASS | Same S1 sentence: "...that facilitate both declarative configuration and automation." |
| 5 | What it is | Service discovery and load balancing: expose a container using a DNS name or its own IP address | S1 | PASS | S1: "Kubernetes can expose a container using a DNS name or its own IP address." |
| 6 | What it is | Automated rollouts and rollbacks: describe the desired state; Kubernetes can change the actual state to it at a controlled rate | S1 | PASS | S1: "You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate." |
| 7 | What it is | Self-healing: restarts, replaces, kills unresponsive containers, does not advertise until ready | S1 | PASS | S1: "Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve." |
| 8 | What it is | Pod row: smallest deployable unit of computing; one or more containers, shared storage and network, a specification | S3 | PASS | S3: "Pods are the smallest deployable units of computing that you can create and manage in Kubernetes." and "A Pod ... is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers." |
| 9 | What it is | ReplicaSet row: maintain a stable set of replica Pods running at any given time | S4 | PASS | S4: "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time." |
| 10 | What it is | Deployment row: declarative updates for Pods and ReplicaSets | S5 | PASS | S5: "A Deployment provides declarative updates for Pods and" |
| 11 | What it is | Label row: key/value pair attached to an object such as a Pod | S6 | PASS | S6: "Labels are key/value pairs that are attached to objects such as Pods." |
| 12 | What it is | Namespace row: mechanism for isolating groups of resources within a single cluster | S7 | PASS | S7: "namespaces provide a mechanism for isolating groups of resources within a single cluster." |
| 13 | What it is | "One-container-per-Pod" is the most common use case; a Pod is a wrapper around a single container | S3 | PASS | S3: "The \"one-container-per-Pod\" model is the most common Kubernetes use case; in this case, you can think of a Pod as a wrapper around a single container" |
| 14 | What it is | Kubernetes manages Pods rather than managing the containers directly | S3 | PASS | S3: "Kubernetes manages Pods rather than managing the containers directly." |
| 15 | What it is | kubectl is the command line tool for communicating with a cluster's control plane using the Kubernetes API | S11 | PASS | S11: "Kubernetes provides a command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API." |
| 16 | What it is | kind runs local Kubernetes clusters using Docker container "nodes" | S15 | PASS | S15: "kind is a tool for running local Kubernetes clusters using Docker container “nodes”." |
| 17 | What it is | kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI | S15 | PASS | S15: "kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI." |
| 18 | How it works | An object is a "record of intent"; the system constantly works to ensure it exists | S2 | PASS | S2: "A Kubernetes object is a \"record of intent\"--once you create the object, the Kubernetes system will constantly work to ensure that the object exists." |
| 19 | How it works | Creating an object tells Kubernetes what you want the workload to look like: the desired state | S2 | PASS | S2: "By creating an object, you're effectively telling the Kubernetes system what you want your cluster's workload to look like; this is your cluster's desired state." |
| 20 | How it works | Almost every object has two nested fields, spec and status | S2 | PASS | S2: "Almost every Kubernetes object includes two nested object fields ... the object spec and the object status." |
| 21 | How it works | The control plane continually and actively manages actual state to match desired state | S2 | PASS | S2: "The Kubernetes control plane continually and actively manages every object's actual state to match the desired state you supplied." |
| 22 | How it works | Controllers are control loops that watch cluster state, then make or request changes | S10 | PASS | S10: "In Kubernetes, controllers are control loops that watch the state of your" (cluster, then make or request changes where needed on the next line). |
| 23 | How it works | Each controller tries to move current state closer to desired state | S10 | PASS | S10: "Each controller tries to move the current cluster state closer to the desired" |
| 24 | How it works | A Deployment rolls out a ReplicaSet; the ReplicaSet creates the Pods in the background | S5 | PASS | S5: "Create a Deployment to rollout a ReplicaSet. The ReplicaSet creates Pods in the background." |
| 25 | How it works | ReplicaSet has a selector, a number of replicas, and a Pod template | S4 | PASS | S4: "a selector that specifies how to identify Pods it can acquire, a number of replicas indicating how many Pods it should be maintaining, and a pod template" |
| 26 | How it works | It creates and deletes Pods to reach the desired number and uses its Pod template for new Pods | S4 | PASS | S4: "creating and deleting Pods as needed to reach the desired number. When a ReplicaSet needs to create new Pods, it uses its Pod template." |
| 27 | How it works | ReplicaSet name is always `[DEPLOYMENT-NAME]-[HASH]`; hash equals the `pod-template-hash` label | S5 | PASS | S5: "the name of the ReplicaSet is always formatted as" ... "The HASH string is the same as the pod-template-hash label on the ReplicaSet." |
| 28 | How it works | Diagram of step 3 of the practice run | none | N/A | The page labels it the tutorial's own picture, with names from its run. |
| 29 | How it works | Via a label selector a client or user can identify a set of objects; it is the core grouping primitive | S6 | PASS | S6: "Via a label selector, the client/user can identify a set of objects. The label selector is the core grouping primitive in Kubernetes." |
| 30 | How it works | In a Deployment `.spec.selector` defines how the created ReplicaSet finds which Pods to manage | S5 | PASS | S5: "The .spec.selector field defines how the created ReplicaSet finds which Pods to manage." |
| 31 | How it works | Rollout is triggered if and only if the Pod template `.spec.template` changes (labels or images) | S5 | PASS | S5: "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated." |
| 32 | How it works | Other updates such as scaling do not trigger a rollout | S5 | PASS | S5: "Other updates, such as scaling the Deployment, do not trigger a rollout." |
| 33 | How it works | A new ReplicaSet is created and gradually scaled up while the old one is scaled down | S5 | PASS | S5: "A new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet" |
| 34 | How it works | By default at least 75% up (25% max unavailable), at most 125% up (25% max surge) | S5 | PASS | S5: "it ensures that at least 75% of the desired number of Pods are up (25% max unavailable)." and "By default, it ensures that at most 125% of the desired number of Pods are up (25% max surge)." |
| 35 | How it works | Each new ReplicaSet updates the revision; you can roll back to an earlier revision | S5 | PASS | S5: "Each new ReplicaSet updates the revision of the Deployment." and "Rollback to an earlier Deployment revision if the current state of the Deployment is not stable." |
| 36 | How it works | Pods are relatively ephemeral, disposable entities | S3 | PASS | S3: "Pods are designed as relatively ephemeral, disposable entities." |
| 37 | How it works | If a node fails, a controller notices Pods stopped working and creates a replacement Pod | S3 | PASS | S3: "if a Node fails, a controller notices that Pods on that Node have stopped working and creates a replacement Pod." |
| 38 | How it works | `restartPolicy` values `Always`, `OnFailure`, `Never`; default `Always` | S8 | PASS | S8: "The spec of a Pod has a restartPolicy field with possible values Always, OnFailure, and Never. The default value is Always." |
| 39 | How it works | Phase `Pending` meaning | S8 | PASS | S8: "The Pod has been accepted by the Kubernetes cluster, but one or more of the containers has not been set up and made ready to run. This includes time a Pod spends waiting to be scheduled as well as the time spent downloading container images" |
| 40 | How it works | Phase `Running` meaning | S8 | PASS | S8: "The Pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting." |
| 41 | How it works | Phase `Succeeded` meaning | S8 | PASS | S8: "All containers in the Pod have terminated in success, and will not be restarted." |
| 42 | How it works | Phase `Failed` meaning | S8 | PASS | S8: "All containers in the Pod have terminated, and at least one container has terminated in failure." |
| 43 | Try it | Run record (date, versions, node, `Set kubectl context`, `~/.kube` folder, fifth namespace `local-path-storage`) | none | N/A | The page labels these as what happened in its run. |
| 44 | Try it | kind does not require kubectl, but some examples in kind's docs need it | S16 | PASS | S16: "NOTE: kind does not require kubectl, but you will not be able to perform some of the examples in our docs without it." |
| 45 | Try it | Use a kubectl within one minor version; v1.37 works with v1.36, v1.37, v1.38 | S12 | PASS | S12: "You must use a kubectl version that is within one minor version difference of" ... "with v1.36, v1.37, and v1.38 control planes." |
| 46 | Try it | Tutorial used release binaries and checked SHA-256 checksums | none | N/A | The tutorial's own practice, not a fact about a tool. |
| 47 | Try it | `kind create cluster` bootstraps a cluster using a pre-built node image | S16 | PASS | S16: "This will bootstrap a Kubernetes cluster using a pre-built node image." |
| 48 | Try it | Default cluster name is `kind`; `--name` gives another name | S16 | PASS | S16: "By default, the cluster will be given the name kind. Use the --name flag to assign the cluster a different context name." |
| 49 | Try it | kubectl looks for a file named `config` in `$HOME/.kube` | S11 | PASS | S11: "For configuration, kubectl looks for a file named config in the $HOME/.kube directory." |
| 50 | Try it | Step 2 code block: `kind create cluster --name qa-lab`, `kubectl cluster-info --context kind-qa-lab`, `kubectl get nodes`, `kubectl get namespaces` | S11 (intro sentence) | FAIL | S16 supports the first two commands ("kind create cluster --name kind-2", "kubectl cluster-info --context kind-kind-2"). `kubectl get nodes` and `kubectl get namespaces` are in no source in this folder. Fix: drop those two lines, or label them as the tutorial's own reader steps and give a source that has them. |
| 51 | Try it | Kubernetes starts with four namespaces: `default`, `kube-node-lease`, `kube-public`, `kube-system` | S7 | PASS | S7: "Kubernetes starts with four initial namespaces:" followed by the lines "default", "kube-node-lease", "kube-public", "kube-system". |
| 52 | Try it | Example Deployment creates a ReplicaSet to bring up three nginx Pods (YAML block) | S5 | PASS | S5: "It creates a ReplicaSet to bring up three nginx Pods:". The YAML lines `name: nginx-deployment`, `replicas: 3`, `matchLabels:`, `image: nginx:1.14.2`, `- containerPort: 80` are in S5. |
| 53 | Try it | The docs create it, check the rollout, list Deployment, ReplicaSet and Pod labels (apply, rollout status, get deployments, get rs, get pods --show-labels) | S5 | PASS | S5: "kubectl apply -f https://k8s.io/examples/controllers/nginx-deployment.yaml", "kubectl rollout status deployment/nginx-deployment", "run kubectl get rs", "run kubectl get pods --show-labels." |
| 54 | Try it | `READY` shows how many replicas are available to users, as ready/desired | S5 | PASS | S5: "READY displays how many replicas of the application are available to your users. It follows the pattern ready/desired." |
| 55 | Try it | A ReplicaSet creates and deletes Pods as needed to reach the desired number | S4 | PASS | S4: "creating and deleting Pods as needed to reach the desired number." |
| 56 | Try it | `-l` selects the Pods by label | S6 | PASS | S6 uses the flag as a label selector: "kubectl get pods -l environment=production,tier=frontend" and "This first filters all pods with the label \"app=nginx\"". The source does not state the flag meaning in a plain sentence. |
| 57 | Try it | Step 4 code block: `kubectl delete pod nginx-deployment-54fd4d6d4c-9s5hc`, `kubectl get pods -l app=nginx` | S4, S6 | FAIL | `kubectl delete pod` is in no source in this folder. `kubectl get pods -l app=nginx` is in S6. Fix: mark the delete command as the tutorial's own step, or cite a source that has it. |
| 58 | Try it | `kubectl set image` changes the image of the Pod template, so it starts a rollout | S5 | PASS | S5: "kubectl set image deployment/nginx-deployment nginx=nginx:1.16.1" and "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated." |
| 59 | Try it | `-o wide` lists with more details | S14 | PASS | S14: "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| 60 | Try it | Docs' typo example: `nginx:1.161` instead of `nginx:1.16.1`, rollout gets stuck | S5 | PASS | S5: "putting the image name as nginx:1.161 instead of nginx:1.16.1" and "The rollout gets stuck." |
| 61 | Try it | By default `rollout status` watches the latest rollout until done; `--timeout` sets the wait before ending the watch | S13 | PASS | S13: "By default 'rollout status' will watch the status of the latest rollout until it's done." and "--timeout duration The length of time to wait before ending watch" |
| 62 | Try it | `kubectl describe` describes a resource with verbose output | S14 | PASS | S14: "# Describe commands with verbose output" |
| 63 | Try it | Step 6 run output (two lines, exit code 1, `ErrImagePull`, Events text) | none | N/A | The page labels these as what happened in its run. |
| 64 | Try it | `ImagePullBackOff` means a container could not start because Kubernetes could not pull an image, e.g. invalid image name | S9 | PASS | S9: "The status ImagePullBackOff means that a container could not start because Kubernetes could not pull a container image (for reasons such as invalid image name" |
| 65 | Try it | Kubernetes keeps trying with an increasing back-off delay, up to a compiled-in limit of 300 seconds | S9 | PASS | S9: "with an increasing back-off delay. Kubernetes raises the delay between each attempt until it reaches a compiled-in limit, which is 300 seconds (5 minutes)." |
| 66 | Try it | The Deployment controller stops the bad rollout automatically and stops scaling up the new ReplicaSet | S5 | PASS | S5: "The Deployment controller stops the bad rollout automatically, and stops scaling up the new ReplicaSet." |
| 67 | Try it | `kubectl rollout history` lists revisions; `kubectl rollout undo` rolls back to the previous one | S5 | PASS | S5: "kubectl rollout history deployment/nginx-deployment" ("First, check the revisions of this Deployment"); "undo the current rollout and rollback to the previous revision: kubectl rollout undo deployment/nginx-deployment". |
| 68 | Try it | Step 7 `undo` output and revision list | none | N/A | The page labels these as what happened in its run. |
| 69 | Try it | `kubectl scale` changes the number of replicas; scaling does not trigger a rollout | S5 | PASS | S5: "You can scale a Deployment by using the following command: kubectl scale deployment/nginx-deployment --replicas=10" and "Other updates, such as scaling the Deployment, do not trigger a rollout." |
| 70 | Try it | Step 8 code block: `kubectl scale ... --replicas=5`, `kubectl get deployment nginx-deployment`, `kubectl delete deployment nginx-deployment`, `kubectl get pods -l app=nginx` | S5 | FAIL | `kubectl scale ... --replicas` is in S5. `kubectl delete deployment` is in no source in this folder. Fix: mark the delete command as the tutorial's own cleanup step, or cite a source that has it. |
| 71 | Try it | `kind delete cluster --name qa-lab` deletes it; without `--name`, kind deletes the cluster named `kind` | S16 | PASS | S16: "If the flag --name is not specified, kind will use the default cluster context name kind and delete that cluster." |
| 72 | How a tester uses it | If the rollout completed successfully, `kubectl rollout status` returns zero exit code | S5 | PASS | S5: "successfully, kubectl rollout status returns a zero exit code." |
| 73 | How a tester uses it | Non-zero exit code if the Deployment exceeded the progression deadline | S5 | PASS | S5: "returns a non-zero exit code if the Deployment has exceeded the progression deadline." |
| 74 | How a tester uses it | Deadline is `.spec.progressDeadlineSeconds`, default 600 | S5 | PASS | S5: ".spec.progressDeadlineSeconds is an optional field that specifies the number of seconds you want to wait for your Deployment to progress" ... "This defaults to 600." |
| 75 | How a tester uses it | With `--timeout` the watch ends after the time given | S13 | PASS | S13: "--timeout duration The length of time to wait before ending watch" |
| 76 | How a tester uses it | Avoid `:latest` in production: harder to track version, harder to roll back | S9 | PASS | S9: "You should avoid using the :latest tag when deploying containers in production as it is harder to track which version of the image is running and more difficult to" (roll back properly on the next line). |
| 77 | How a tester uses it | Specify a meaningful tag such as `v1.42.0` and/or a digest | S9 | PASS | S9: "Instead, specify a meaningful tag such as v1.42.0 and/or a digest." |
| 78 | How a tester uses it | `kubectl rollout history` lists revisions; `-o wide` lists with more details | S5, S14 | PASS | S5: "First, check the revisions of this Deployment: kubectl rollout history deployment/nginx-deployment". S14: "with more details". |
| 79 | How a tester uses it | kind may be used for local development or CI | S15 | PASS | S15: "may be used for local development or CI." |
| 80 | How a tester uses it | Load images into kind; for a named cluster give `--name` | S16 | PASS | S16: "You can load one or more images into your kind cluster" and "If using a named cluster you will need to specify the name of the cluster:" |
| 81 | How a tester uses it | Workflow block: `docker build`, `kind load docker-image`, `kubectl apply -f my-manifest-using-my-image.yaml` | S16 | PASS | S16: "docker build -t my-custom-image:unique-tag ./my-image-dir / kind load docker-image my-custom-image:unique-tag / kubectl apply -f my-manifest-using-my-image.yaml" |
| 82 | How a tester uses it | With `--wait`, `kind create cluster` blocks until the control plane is ready; `--wait 30s` waits 30 seconds | S16 | PASS | S16: "block until the control plane reaches a ready status, you can use the --wait flag" and "to wait for 30 seconds, do --wait 30s" |
| 83 | How a tester uses it | Names of resources must be unique within a namespace, not across namespaces | S7 | PASS | S7: "Names of resources need to be unique within a namespace, but not across namespaces." |
| 84 | How a tester uses it | A ReplicaSet creates and deletes Pods to reach the desired number | S4 | PASS | S4: "creating and deleting Pods as needed to reach the desired number." |
| 85 | How a tester uses it | Step 4 shows a test of it: delete a Pod, then count the Pods | none | N/A | The reader's own work and a pointer to the page's own step. |
| 86 | How a tester uses it | `kubectl get events --sort-by=.metadata.creationTimestamp` lists Events by timestamp; `kubectl events --types=Warning` lists warning events | S14 | PASS | S14: "# List Events sorted by timestamp kubectl get events --sort-by=.metadata.creationTimestamp # List all warning events kubectl events --types=Warning" |
| 87 | How a tester uses it | In step 5 the `IMAGES` column showed the image; in step 6 the Events named the failed image | none | N/A | Record of the page's own run. |
| 88 | Common mistakes | Usually don't create Pods directly, even singleton Pods; use Deployment or Job | S3 | PASS | S3: "Usually you don't need to create Pods directly, even singleton Pods. Instead, create them using workload resources such as Deployment or Job." |
| 89 | Common mistakes | Pods are relatively ephemeral, disposable entities | S3 | PASS | S3: "Pods are designed as relatively ephemeral, disposable entities." |
| 90 | Common mistakes | Do not manage ReplicaSets owned by a Deployment | S5 | PASS | S5: "Do not manage ReplicaSets owned by a Deployment." |
| 91 | Common mistakes | With `:latest`, harder to track which version of the image is running | S9 | PASS | S9: "it is harder to track which version of the image is running" |
| 92 | Common mistakes | Default pull policy is `IfNotPresent` unless tag is `:latest` or omitted, then `Always` | S16 | PASS | S16: "The Kubernetes default pull policy is IfNotPresent unless the image tag is :latest or omitted (and implicitly :latest) in which case the default policy is Always." |
| 93 | Common mistakes | `IfNotPresent` makes the kubelet skip pulling an image that exists | S16 | PASS | S16: "IfNotPresent causes the Kubelet to skip pulling an image if it already exists." |
| 94 | Common mistakes | For loaded images, don't use `:latest`, and/or set `imagePullPolicy: IfNotPresent` or `Never` | S16 | PASS | S16: "don’t use a :latest tag and / or: specify imagePullPolicy: IfNotPresent or imagePullPolicy: Never on your container(s)." |
| 95 | Common mistakes | `.spec.selector` is immutable after creation in `apps/v1` | S5 | PASS | S5: ".spec.selector is immutable after creation of the Deployment in apps/v1." |
| 96 | Common mistakes | By default `rollout status` watches the latest rollout until done | S13 | PASS | S13: "By default 'rollout status' will watch the status of the latest rollout until it's done." |
| 97 | Common mistakes | Docs' example: a typo in the image makes the rollout get stuck | S5 | PASS | S5: "putting the image name as nginx:1.161 instead of nginx:1.16.1" ... "The rollout gets stuck." |
| 98 | Common mistakes | Add `--timeout` | S13 | PASS | S13: "--timeout duration The length of time to wait before ending watch, zero means never." |
| 99 | Common mistakes | Use a kubectl within one minor version of the cluster | S12 | PASS | S12: "You must use a kubectl version that is within one minor version difference of" |
| 100 | What a tester can check | Callout "Tutorial advice" | none | PASS | Callout titled "Tutorial advice" says "This list is the tutorial's own advice for a tester whose app runs on Kubernetes." It gives no tool fact that the rest of the page does not support (`kubectl get deployment -o wide`, `--timeout`, `kubectl describe pod`, one-minor-version rule are all supported above). |
| 101 | Key words | Kubernetes row | none | PASS | Page sentence: "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services". |
| 102 | Key words | Pod row | none | PASS | Page: "a group of one or more containers, with shared storage and network resources". |
| 103 | Key words | ReplicaSet row | none | PASS | Page: "An object whose purpose is to maintain a stable set of replica Pods running at any given time". |
| 104 | Key words | Deployment row | none | PASS | Page: "provides declarative updates for Pods and ReplicaSets" and "A Deployment rolls out a ReplicaSet, and the ReplicaSet creates the Pods". |
| 105 | Key words | Label row | none | PASS | Page: "A key/value pair that is attached to an object such as a Pod". |
| 106 | Key words | Label selector row | none | PASS | Page: "Via a label selector, a client or user can identify a set of objects" and "The label selector is the core grouping primitive in Kubernetes". |
| 107 | Key words | Namespace row | none | PASS | Page: "A mechanism for isolating groups of resources within a single cluster". |
| 108 | Key words | Desired state row | none | PASS | Page: "By creating an object, you tell Kubernetes what you want your cluster's workload to look like: this is your cluster's desired state". |
| 109 | Key words | Controller row | none | PASS | Page: "Controllers are control loops ..." and "Each controller tries to move the current cluster state closer to the desired state". |
| 110 | Key words | Rollout row | none | PASS | Page: "a new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet" and "triggered if and only if its Pod template ... is changed". |
| 111 | Key words | Revision row | none | PASS | Page: "Each new ReplicaSet updates the revision of the Deployment, and you can roll back to an earlier revision". |
| 112 | Key words | `ImagePullBackOff` row | none | PASS | Page: "means that a container could not start because Kubernetes could not pull a container image" and "keeps trying with an increasing back-off delay". |
| 113 | Key words | kubectl row | none | PASS | Page: "the command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API". |
| 114 | Key words | kind row | none | PASS | Page: "kind is a tool for running local Kubernetes clusters using Docker container \"nodes\"". |

Open FAILs after round 6: 3

Changed after this round: Rows 50, 57, and 70: `kubectl get nodes`, `kubectl get namespaces`, `kubectl delete pod`, and `kubectl delete deployment` were in no cited source. Step 2 now gives the syntax of kubectl commands from S11 (`kubectl [command] [TYPE] [NAME] [flags]`, with `get` and `delete` among the operations, a type in the singular, plural, or abbreviated form, and all resources of the type when the name is omitted), and steps 4 and 8 say what `kubectl delete` with a type and a name does, with a cite of S11.

## Round 7 (2026-11-18)

# Fact check: devops / kubernetes-basics (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Pods, ReplicaSets, Deployments, how Kubernetes keeps the asked state, and how to watch, break, and roll back a rollout on a kind cluster | none | N/A | Describes the page itself. |
| 2 | Lede | First objects a tester meets, practice run on a local cluster, builds on Docker Basics | none | N/A | Describes the page itself. The link is a site path. |
| 3 | What it is | Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services | S1 | PASS | S1: "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services that facilitate both declarative configuration and automation." |
| 4 | What it is | It facilitates both declarative configuration and automation | S1 | PASS | S1: "...that facilitate both declarative configuration and automation." |
| 5 | What it is | Service discovery and load balancing: expose a container using a DNS name or its own IP address | S1 | PASS | S1: "Kubernetes can expose a container using a DNS name or its own IP address." |
| 6 | What it is | Automated rollouts and rollbacks: describe the desired state, Kubernetes can change the actual state to it at a controlled rate | S1 | PASS | S1: "You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate." |
| 7 | What it is | Self-healing: restarts failed containers, replaces containers, kills containers that don't respond to the health check, doesn't advertise them until ready | S1 | PASS | S1: "Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve." |
| 8 | What it is | Pod: smallest deployable unit of computing; one or more containers, shared storage and network, a specification for how to run them | S3 | PASS | S3: "Pods are the smallest deployable units of computing that you can create and manage in Kubernetes." / "a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers." |
| 9 | What it is | ReplicaSet: maintains a stable set of replica Pods running at any given time | S4 | PASS | S4: "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time." |
| 10 | What it is | Deployment: provides declarative updates for Pods and ReplicaSets | S5 | PASS | S5: "A Deployment provides declarative updates for Pods and ReplicaSets." |
| 11 | What it is | Label: a key/value pair attached to an object such as a Pod | S6 | PASS | S6: "Labels are key/value pairs that are attached to objects such as Pods." |
| 12 | What it is | Namespace: a mechanism for isolating groups of resources within a single cluster | S7 | PASS | S7: "namespaces provide a mechanism for isolating groups of resources within a single cluster." |
| 13 | What it is | The "one-container-per-Pod" model is the most common use case; a Pod is like a wrapper around one container | S3 | PASS | S3: "The \"one-container-per-Pod\" model is the most common Kubernetes use case; in this case, you can think of a Pod as a wrapper around a single container" |
| 14 | What it is | Kubernetes manages Pods rather than managing the containers directly | S3 | PASS | S3: "Kubernetes manages Pods rather than managing the containers directly." |
| 15 | What it is | kubectl is the command line tool for talking to a cluster's control plane through the Kubernetes API | S11 | PASS | S11: "Kubernetes provides a command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API." |
| 16 | What it is | kind runs local Kubernetes clusters using Docker container "nodes" | S15 | PASS | S15: "kind is a tool for running local Kubernetes clusters using Docker container “nodes”." |
| 17 | What it is | kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI | S15 | PASS | S15: "kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI." |
| 18 | How it works | A Kubernetes object is a "record of intent"; the system constantly works to ensure the object exists | S2 | PASS | S2: "A Kubernetes object is a \"record of intent\"--once you create the object, the Kubernetes system will constantly work to ensure that the object exists." |
| 19 | How it works | Creating an object tells Kubernetes what you want the workload to look like: the desired state | S2 | PASS | S2: "By creating an object, you're effectively telling the Kubernetes system what you want your cluster's workload to look like; this is your cluster's desired state." |
| 20 | How it works | Almost every object has two nested fields, spec and status | S2 | PASS | S2: "Almost every Kubernetes object includes two nested object fields ... the object spec and the object status." |
| 21 | How it works | The control plane continually and actively manages every object's actual state to match the desired state | S2 | PASS | S2: "The Kubernetes control plane continually and actively manages every object's actual state to match the desired state you supplied." |
| 22 | How it works | Controllers are control loops that watch the cluster state, then make or request changes where needed | S10 | PASS | S10: "In Kubernetes, controllers are control loops that watch the state of your cluster, then make or request changes where needed." |
| 23 | How it works | Each controller tries to move the current cluster state closer to the desired state | S10 | PASS | S10: "Each controller tries to move the current cluster state closer to the desired state." |
| 24 | How it works | A Deployment rolls out a ReplicaSet, and the ReplicaSet creates the Pods in the background | S5 | PASS | S5: "Create a Deployment to rollout a ReplicaSet. The ReplicaSet creates Pods in the background." |
| 25 | How it works | A ReplicaSet has a selector, a number of replicas, and a Pod template | S4 | PASS | S4: "a selector that specifies how to identify Pods it can acquire, a number of replicas ..., and a pod template" |
| 26 | How it works | It creates and deletes Pods to reach the desired number, and uses its Pod template for new Pods | S4 | PASS | S4: "creating and deleting Pods as needed to reach the desired number. When a ReplicaSet needs to create new Pods, it uses its Pod template." |
| 27 | How it works | ReplicaSet name is always `[DEPLOYMENT-NAME]-[HASH]`; the hash equals the `pod-template-hash` label | S5 | PASS | S5: "the name of the ReplicaSet is always formatted as [DEPLOYMENT-NAME]-[HASH]." / "The HASH string is the same as the pod-template-hash label on the ReplicaSet." |
| 28 | How it works | Diagram of step 3 of the run (names from the run) | none | N/A | Labelled as the page's own picture of its run. |
| 29 | How it works | Via a label selector, a client or user can identify a set of objects | S6 | PASS | S6: "Via a label selector, the client/user can identify a set of objects." |
| 30 | How it works | The label selector is the core grouping primitive | S6 | PASS | S6: "The label selector is the core grouping primitive in Kubernetes." |
| 31 | How it works | `.spec.selector` defines how the created ReplicaSet finds which Pods to manage | S5 | PASS | S5: "The .spec.selector field defines how the created ReplicaSet finds which Pods to manage." |
| 32 | How it works | A rollout is triggered if and only if the Pod template (`.spec.template`) changes, e.g. labels or images | S5 | PASS | S5: "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated." |
| 33 | How it works | Other updates, such as scaling, do not trigger a rollout | S5 | PASS | S5: "Other updates, such as scaling the Deployment, do not trigger a rollout." |
| 34 | How it works | In a rollout a new ReplicaSet is created and scaled up while the old one is scaled down | S5 | PASS | S5: "A new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet" |
| 35 | How it works | By default at least 75% up (25% max unavailable) and at most 125% up (25% max surge) | S5 | PASS | S5: "it ensures that at least 75% of the desired number of Pods are up (25% max unavailable)." / "By default, it ensures that at most 125% of the desired number of Pods are up (25% max surge)." |
| 36 | How it works | Each new ReplicaSet updates the revision; you can roll back to an earlier revision | S5 | PASS | S5: "Each new ReplicaSet updates the revision of the Deployment." / "Rollback to an earlier Deployment revision" |
| 37 | How it works | Pods are designed as relatively ephemeral, disposable entities | S3 | PASS | S3: "Pods are designed as relatively ephemeral, disposable entities." |
| 38 | How it works | If a node fails, a controller notices the Pods stopped working and creates a replacement Pod | S3 | PASS | S3: "if a Node fails, a controller notices that Pods on that Node have stopped working and creates a replacement Pod." |
| 39 | How it works | `restartPolicy` values `Always`, `OnFailure`, `Never`; default `Always` | S8 | PASS | S8: "The spec of a Pod has a restartPolicy field with possible values Always, OnFailure, and Never. The default value is Always." |
| 40 | How it works | Phase `Pending` meaning | S8 | PASS | S8: "The Pod has been accepted by the Kubernetes cluster, but one or more of the containers has not been set up and made ready to run. This includes time a Pod spends waiting to be scheduled as well as the time spent downloading container images" |
| 41 | How it works | Phase `Running` meaning | S8 | PASS | S8: "The Pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting." |
| 42 | How it works | Phase `Succeeded` meaning | S8 | PASS | S8: "All containers in the Pod have terminated in success, and will not be restarted." |
| 43 | How it works | Phase `Failed` meaning | S8 | PASS | S8: "All containers in the Pod have terminated, and at least one container has terminated in failure." |
| 44 | Try it | Run record: date, versions, Deployment is the docs example, names differ | none | N/A | The page's own run record. |
| 45 | Try it | Step 1: kind does not require kubectl, but some examples in kind's docs need it | S16 | PASS | S16: "kind does not require kubectl, but you will not be able to perform some of the examples in our docs without it." |
| 46 | Try it | Step 1: kubectl within one minor version; v1.37 works with v1.36, v1.37, v1.38 | S12 | PASS | S12: "You must use a kubectl version that is within one minor version difference of your cluster. For example, a v1.37 client can communicate with v1.36, v1.37, and v1.38 control planes." |
| 47 | Try it | Step 1: tutorial used release binaries and checked SHA-256 | none | N/A | The page's own practice. |
| 48 | Try it | Step 2: `kind create cluster` bootstraps a cluster from a pre-built node image | S16 | PASS | S16: "This will bootstrap a Kubernetes cluster using a pre-built node image." |
| 49 | Try it | Step 2: default cluster name `kind`; `--name` gives another name | S16 | PASS | S16: "By default, the cluster will be given the name kind. Use the --name flag to assign the cluster a different context name." |
| 50 | Try it | Step 2: kubectl looks for `config` in `$HOME/.kube` | S11 | PASS | S11: "For configuration, kubectl looks for a file named config in the $HOME/.kube directory." |
| 51 | Try it | Step 2: form `kubectl [command] [TYPE] [NAME] [flags]`; command is an operation; type singular, plural, or abbreviated | S11 | PASS | S11: "kubectl [command] [TYPE] [NAME] [flags]" / "for example create, get, describe, delete." / "you can specify the singular, plural, or abbreviated forms." |
| 52 | Try it | Step 2: if the name is omitted, details for all resources of the type are displayed | S11 | PASS | S11: "If the name is omitted, details for all resources are displayed, for example kubectl get pods." |
| 53 | Try it | Step 2 bash block: `kind create cluster --name qa-lab`, `kubectl cluster-info --context kind-qa-lab`, `kubectl get nodes`, `kubectl get namespaces` | S11 | FAIL | The block is introduced by the S11 sentence. S11 has no kind command and no `cluster-info --context`. Those are in S16 ("kind create cluster", "kubectl cluster-info --context kind-kind"). Fix: also cite S16 for the block, or put the kind commands after the S16 sentence. |
| 54 | Try it | Step 2: run record (context line, `~/.kube` before and after, node Ready v1.37.0, five namespaces) | none | N/A | Labelled as what happened in the run. |
| 55 | Try it | Step 2: Kubernetes starts with four namespaces `default`, `kube-node-lease`, `kube-public`, `kube-system` | S7 | PASS | S7: "Kubernetes starts with four initial namespaces: default ... kube-node-lease ... kube-public" |
| 56 | Try it | Step 3: example Deployment creates a ReplicaSet to bring up three nginx Pods (YAML block) | S5 | PASS | S5: "The following is an example of a Deployment. It creates a ReplicaSet to bring up three nginx Pods" / "apiVersion: apps/v1" / "replicas: 3" / "image: nginx:1.14.2" / "- containerPort: 80" |
| 57 | Try it | Step 3: docs create it, check rollout, list Deployment, ReplicaSet, Pod labels (bash block) | S5 | PASS | S5: "kubectl apply -f https://k8s.io/examples/controllers/nginx-deployment.yaml" / "run kubectl get rs" / "run kubectl get pods --show-labels." |
| 58 | Try it | Step 3: `READY` shows how many replicas are available to users, as ready/desired | S5 | PASS | S5: "READY displays how many replicas of the application are available to your users. It follows the pattern ready/desired." |
| 59 | Try it | Step 3: run record (output table, Pod labels) | none | N/A | Labelled as what happened in the run. |
| 60 | Try it | Step 4: a ReplicaSet creates and deletes Pods as needed to reach the desired number | S4 | PASS | S4: "creating and deleting Pods as needed to reach the desired number." |
| 61 | Try it | Step 4: `kubectl delete` with type and name performs the delete operation on that resource | S11 | PASS | S11: "kubectl delete (-f FILENAME \| TYPE [NAME \| /NAME \| -l label \| --all]) [flags] Delete resources either from a file, stdin, or specifying label selectors, names, resource selectors, or resources." |
| 62 | Try it | Step 4: `-l` selects the Pods by label (bash block) | S6 | PASS | S6: "Both label selector styles can be used to list or watch resources via a REST client. ... kubectl get pods -l environment=production,tier=frontend" |
| 63 | Try it | Step 4: run record (new Pod `...-69bwz` Running after 3 s) | none | N/A | Labelled as what happened in the run. |
| 64 | Try it | Step 5: `kubectl set image` changes the image of the Pod template, so it starts a rollout | S5 | PASS | S5: "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed" / "kubectl set image deployment/nginx-deployment nginx=nginx:1.16.1" ("nginx:1.16.1 indicates the new image and its tag") |
| 65 | Try it | Step 5: `-o wide` lists with more details (bash block) | S14 | PASS | S14: "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| 66 | Try it | Step 5: run record (RS table, IMAGES column) | none | N/A | Labelled as what happened in the run. |
| 67 | Try it | Step 6: docs' own example: typo `nginx:1.161` instead of `nginx:1.16.1`, rollout gets stuck | S5 | PASS | S5: "put the image name as nginx:1.161 instead of nginx:1.16.1" / "The rollout gets stuck." |
| 68 | Try it | Step 6: by default `rollout status` watches the latest rollout until done; `--timeout` sets the wait before ending the watch | S13 | PASS | S13: "By default 'rollout status' will watch the status of the latest rollout until it's done." / "--timeout duration The length of time to wait before ending watch" |
| 69 | Try it | Step 6: `kubectl describe` describes a resource with verbose output (bash block) | S14 | PASS | S14: "# Describe commands with verbose output / kubectl describe pods my-pod" |
| 70 | Try it | Step 6: run record (output, exit code 1, ErrImagePull, Events text) | none | N/A | Labelled as what happened in the run. |
| 71 | Try it | Step 6: `ImagePullBackOff` means a container could not start because Kubernetes could not pull an image, e.g. invalid image name | S9 | PASS | S9: "The status ImagePullBackOff means that a container could not start because Kubernetes could not pull a container image (for reasons such as invalid image name" |
| 72 | Try it | Step 6: Kubernetes keeps trying with an increasing back-off delay, up to a compiled-in limit of 300 seconds | S9 | PASS | S9: "Kubernetes will keep trying to pull the image, with an increasing back-off delay. ... until it reaches a compiled-in limit, which is 300 seconds (5 minutes)." |
| 73 | Try it | Step 6: the Deployment controller stops the bad rollout automatically and stops scaling up the new ReplicaSet | S5 | PASS | S5: "The Deployment controller stops the bad rollout automatically, and stops scaling up the new ReplicaSet." |
| 74 | Try it | Step 7: `kubectl rollout history` lists the revisions; `kubectl rollout undo` rolls back to the previous one (bash block) | S5 | PASS | S5: "First, check the revisions of this Deployment: kubectl rollout history deployment/nginx-deployment" / "undo the current rollout and rollback to the previous revision: kubectl rollout undo deployment/nginx-deployment" |
| 75 | Try it | Step 7: run record (undo output, image, history revisions) | none | N/A | Labelled as what happened in the run. |
| 76 | Try it | Step 8: `kubectl scale` changes the number of replicas | S5 | PASS | S5: "You can scale a Deployment by using the following command: kubectl scale deployment/nginx-deployment --replicas=10" |
| 77 | Try it | Step 8: scaling does not trigger a rollout | S5 | PASS | S5: "Other updates, such as scaling the Deployment, do not trigger a rollout." |
| 78 | Try it | Step 8: `kubectl delete` with type and name performs the delete operation (bash block) | S11 | PASS | S11: "kubectl delete ... Delete resources either from a file, stdin, or specifying label selectors, names, resource selectors, or resources." The block's `kubectl scale` also appears in S11 (2 matches). |
| 79 | Try it | Step 8: run record (5/5, No resources found) | none | N/A | Labelled as what happened in the run. |
| 80 | Try it | Keep the cluster: `kind delete cluster --name qa-lab` deletes it; without `--name` kind deletes the cluster named `kind` | S16 | PASS | S16: "kind delete cluster. If the flag --name is not specified, kind will use the default cluster context name kind and delete that cluster." |
| 81 | How a tester uses it | If the rollout completed successfully, `kubectl rollout status` returns a zero exit code | S5 | PASS | S5: "If the rollout completed successfully, kubectl rollout status returns a zero exit code." |
| 82 | How a tester uses it | It returns non-zero if the Deployment exceeded the progression deadline | S5 | PASS | S5: "kubectl rollout status returns a non-zero exit code if the Deployment has exceeded the progression deadline." |
| 83 | How a tester uses it | The deadline is `.spec.progressDeadlineSeconds`, default 600 | S5 | PASS | S5: "(.spec.progressDeadlineSeconds)" / ".spec.progressDeadlineSeconds is an optional field ... This defaults to 600." |
| 84 | How a tester uses it | With `--timeout` the watch ends after the given time | S13 | PASS | S13: "--timeout duration The length of time to wait before ending watch". The step 6 clause is run record: N/A. |
| 85 | How a tester uses it | Avoid the `:latest` tag in production: harder to track the version and to roll back | S9 | PASS | S9: "You should avoid using the :latest tag when deploying containers in production as it is harder to track which version of the image is running and more difficult to roll back properly" |
| 86 | How a tester uses it | Instead specify a meaningful tag such as `v1.42.0` and/or a digest | S9 | PASS | S9: "Instead, specify a meaningful tag such as v1.42.0 and/or a digest." |
| 87 | How a tester uses it | `kubectl rollout history` lists the Deployment's revisions | S5 | PASS | S5: "First, check the revisions of this Deployment: kubectl rollout history deployment/nginx-deployment" |
| 88 | How a tester uses it | `-o wide` lists with more details | S14 | PASS | S14: "kubectl get pods -o wide # List all pods ... with more details" |
| 89 | How a tester uses it | In step 5 the `IMAGES` column showed the image | none | N/A | Run record. |
| 90 | How a tester uses it | kind may be used for local development or CI | S15 | PASS | S15: "may be used for local development or CI." |
| 91 | How a tester uses it | You can load images into kind; a named cluster needs `--name` | S16 | PASS | S16: "You can load one or more images into your kind cluster" / "If using a named cluster you will need to specify the name of the cluster" |
| 92 | How a tester uses it | The kind docs show this workflow (bash block) | S16 | PASS | S16: "docker build -t my-custom-image:unique-tag ./my-image-dir / kind load docker-image my-custom-image:unique-tag / kubectl apply -f my-manifest-using-my-image.yaml" |
| 93 | How a tester uses it | With `--wait`, `kind create cluster` blocks until the control plane is ready; `--wait 30s` | S16 | PASS | S16: "block until the control plane reaches a ready status, you can use the --wait flag" / "to wait for 30 seconds, do --wait 30s" |
| 94 | How a tester uses it | Resource names must be unique within a namespace, not across namespaces | S7 | PASS | S7: "Names of resources need to be unique within a namespace, but not across namespaces." |
| 95 | How a tester uses it | A ReplicaSet creates and deletes Pods as needed to reach the desired number | S4 | PASS | S4: "creating and deleting Pods as needed to reach the desired number." |
| 96 | How a tester uses it | Step 4 shows a test of it | none | N/A | Refers to the page's own step. |
| 97 | How a tester uses it | `kubectl get events --sort-by=.metadata.creationTimestamp` lists Events sorted by timestamp; `kubectl events --types=Warning` lists warning events | S14 | PASS | S14: "# List Events sorted by timestamp / kubectl get events --sort-by=.metadata.creationTimestamp / # List all warning events / kubectl events --types=Warning" |
| 98 | How a tester uses it | In step 6 the Events named the image that could not be pulled | none | N/A | Run record. |
| 99 | Common mistakes | Usually you don't need to create Pods directly, even singletons; use workload resources such as Deployment or Job | S3 | PASS | S3: "Usually you don't need to create Pods directly, even singleton Pods. Instead, create them using workload resources such as Deployment or Job." |
| 100 | Common mistakes | Pods are designed as relatively ephemeral, disposable entities | S3 | PASS | S3: "Pods are designed as relatively ephemeral, disposable entities." |
| 101 | Common mistakes | Do not manage ReplicaSets owned by a Deployment | S5 | PASS | S5: "Do not manage ReplicaSets owned by a Deployment." |
| 102 | Common mistakes | `:latest`: harder to track which version of the image is running | S9 | PASS | S9: "it is harder to track which version of the image is running" |
| 103 | Common mistakes | Default pull policy is `IfNotPresent` unless the tag is `:latest` or omitted, then `Always` | S16 | PASS | S16: "The Kubernetes default pull policy is IfNotPresent unless the image tag is :latest or omitted (and implicitly :latest) in which case the default policy is Always." |
| 104 | Common mistakes | `IfNotPresent` makes the kubelet skip pulling an image that exists | S16 | PASS | S16: "IfNotPresent causes the Kubelet to skip pulling an image if it already exists." |
| 105 | Common mistakes | For loaded images, don't use `:latest` and/or set `imagePullPolicy: IfNotPresent` or `Never` | S16 | PASS | S16: "don’t use a :latest tag and / or: specify imagePullPolicy: IfNotPresent or imagePullPolicy: Never on your container(s)." |
| 106 | Common mistakes | `.spec.selector` is immutable after creation in `apps/v1` | S5 | PASS | S5: "Also note that .spec.selector is immutable after creation of the Deployment in apps/v1." |
| 107 | Common mistakes | By default `rollout status` watches the latest rollout until done | S13 | PASS | S13: "By default 'rollout status' will watch the status of the latest rollout until it's done." |
| 108 | Common mistakes | In the docs' example a typo in the image makes the rollout get stuck | S5 | PASS | S5: "put the image name as nginx:1.161 instead of nginx:1.16.1 ... The rollout gets stuck." |
| 109 | Common mistakes | Add `--timeout` | S13 | PASS | S13: "--timeout duration The length of time to wait before ending watch". The advice is supported by the option. |
| 110 | Common mistakes | Use a kubectl within one minor version of the cluster | S12 | PASS | S12: "You must use a kubectl version that is within one minor version difference of your cluster." |
| 111 | What a tester can check | Callout "Tutorial advice": a list of seven advice items | none | PASS | The callout says "This list is the tutorial's own advice". It gives no new tool fact. Its `kubectl` uses are supported by the page (steps 5, 6 and 8, and the S5, S12, S13 and S14 cites). |
| 112 | Key words | Kubernetes | none | PASS | Page: "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services". |
| 113 | Key words | Pod | none | PASS | Page: "The smallest deployable unit of computing that you can create and manage in Kubernetes: a group of one or more containers, with shared storage and network resources". |
| 114 | Key words | ReplicaSet | none | PASS | Page: "maintain a stable set of replica Pods running at any given time". |
| 115 | Key words | Deployment | none | PASS | Page: "provides declarative updates for Pods and ReplicaSets" / "A Deployment rolls out a ReplicaSet, and the ReplicaSet creates the Pods in the background". |
| 116 | Key words | Label | none | PASS | Page: "A key/value pair that is attached to an object such as a Pod". |
| 117 | Key words | Label selector | none | PASS | Page: "Via a label selector, a client or user can identify a set of objects. The label selector is the core grouping primitive in Kubernetes." |
| 118 | Key words | Namespace | none | PASS | Page: "A mechanism for isolating groups of resources within a single cluster". |
| 119 | Key words | Desired state | none | PASS | Page: "By creating an object, you tell Kubernetes what you want your cluster's workload to look like: this is your cluster's desired state." |
| 120 | Key words | Controller | none | PASS | Page: "Controllers are control loops ... Each controller tries to move the current cluster state closer to the desired state." |
| 121 | Key words | Rollout | none | PASS | Page: "a new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet". The Pod-template trigger is also on the page. |
| 122 | Key words | Revision | none | PASS | Page: "Each new ReplicaSet updates the revision of the Deployment, and you can roll back to an earlier revision". |
| 123 | Key words | `ImagePullBackOff` | none | PASS | Page: "a container could not start because Kubernetes could not pull a container image" / "Kubernetes keeps trying with an increasing back-off delay". |
| 124 | Key words | kubectl | none | PASS | Page: "the command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API". |
| 125 | Key words | kind | none | PASS | Page: "a tool for running local Kubernetes clusters using Docker container \"nodes\"". |

Open FAILs after round 7: 1

Changed after this round: Row 53: the code block of step 2 was introduced by a sentence with a cite of S11, and S11 has no kind command. The sentence before the block now cites S16 for `kind create cluster` and `kubectl cluster-info --context` ("In order to interact with a specific cluster, you only need to specify the cluster name as a context in kubectl"), and S11 for the `get` commands. Step 2 also gives the default place of the kubeconfig file of kind from S16 (`${HOME}/.kube/config`), which the run saw.

## Round 8 (2026-11-18)

# Fact check: devops / kubernetes-basics (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Pods, ReplicaSets, Deployments, desired state, and a watch/break/roll-back practice on a kind cluster | none | N/A | Describes the page itself. |
| 2 | Lede | First objects a tester meets; practice run; builds on Docker Basics | none | N/A | Framing sentence and a site link. |
| 3 | What it is | Kubernetes is a portable, extensible, open source platform for containerized workloads and services | S1 | PASS | "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services that facilitate both declarative configuration and automation." |
| 4 | What it is | It facilitates declarative configuration and automation | S1 | PASS | Same S1 sentence: "...that facilitate both declarative configuration and automation." |
| 5 | What it is | Service discovery: expose a container by DNS name or own IP | S1 | PASS | "Kubernetes can expose a container using a DNS name or its own IP address." |
| 6 | What it is | Automated rollouts: describe desired state; Kubernetes changes actual state at a controlled rate | S1 | PASS | "...it can change the actual state to the desired state at a controlled rate." |
| 7 | What it is | Self-healing: restarts, replaces, kills unresponsive containers, does not advertise until ready | S1 | PASS | "Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they" |
| 8 | What it is | Pod: smallest deployable unit; group of containers with shared storage and network and a spec | S3 | PASS | "Pods are the smallest deployable units of computing that you can create and manage in Kubernetes." / "a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers" |
| 9 | What it is | ReplicaSet maintains a stable set of replica Pods at any given time | S4 | PASS | "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time." |
| 10 | What it is | Deployment provides declarative updates for Pods and ReplicaSets | S5 | PASS | "A Deployment provides declarative updates for Pods and ReplicaSets." |
| 11 | What it is | Label: key/value pair attached to an object such as a Pod | S6 | PASS | "Labels are key/value pairs that are attached to objects such as Pods." |
| 12 | What it is | Namespace isolates groups of resources within a single cluster | S7 | PASS | "namespaces provide a mechanism for isolating groups of resources within a single cluster." |
| 13 | What it is | One-container-per-Pod is the most common use case; Pod is a wrapper around one container | S3 | PASS | "The "one-container-per-Pod" model is the most common Kubernetes use case; ... you can think of a Pod as a wrapper around a single container" |
| 14 | What it is | Kubernetes manages Pods, not containers directly | S3 | PASS | "Kubernetes manages Pods rather than managing the containers directly." |
| 15 | What it is | kubectl communicates with the control plane using the Kubernetes API | S11 | PASS | "a command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API." |
| 16 | What it is | kind runs local clusters using Docker container "nodes" | S15 | PASS | "kind is a tool for running local Kubernetes clusters using Docker container “nodes”." |
| 17 | What it is | kind was designed for testing Kubernetes itself, may be used for local development or CI | S15 | PASS | "kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI." |
| 18 | How it works | Object is a "record of intent"; Kubernetes constantly works to ensure it exists | S2 | PASS | "A Kubernetes object is a "record of intent"--once you create the object, the Kubernetes system will constantly work to ensure that the object exists." |
| 19 | How it works | Creating an object tells Kubernetes the desired state | S2 | PASS | "telling the Kubernetes system what you want your cluster's workload to look like; this is your cluster's desired state." |
| 20 | How it works | Almost every object has spec and status | S2 | PASS | "Almost every Kubernetes object includes two nested object fields ... the object spec and the object status." |
| 21 | How it works | Control plane continually manages actual state to match desired state | S2 | PASS | "control plane continually and actively manages every object's actual state to match the desired state you supplied." |
| 22 | How it works | Controllers are control loops that watch and make or request changes | S10 | PASS | "controllers are control loops that watch the state of your cluster, then make or request changes where needed." |
| 23 | How it works | Each controller moves current state closer to desired | S10 | PASS | "Each controller tries to move the current cluster state closer to the desired state." |
| 24 | How it works | Deployment rolls out a ReplicaSet; ReplicaSet creates Pods in the background | S5 | PASS | "Create a Deployment to rollout a ReplicaSet. The ReplicaSet creates Pods in the background." |
| 25 | How it works | ReplicaSet has selector, replica count, Pod template | S4 | PASS | "a selector that specifies how to identify Pods it can acquire, a number of replicas ... and a pod template" |
| 26 | How it works | It creates and deletes Pods to reach the number; uses its Pod template for new Pods | S4 | PASS | "creating and deleting Pods as needed to reach the desired number. When a ReplicaSet needs to create new Pods, it uses its Pod template." |
| 27 | How it works | ReplicaSet name is always `[DEPLOYMENT-NAME]-[HASH]`; hash equals `pod-template-hash` label | S5 | PASS | "the name of the ReplicaSet is always formatted as [DEPLOYMENT-NAME]-[HASH]" / "The HASH string is the same as the pod-template-hash label on the ReplicaSet." |
| 28 | How it works | Diagram of step 3 with tutorial's names | none | N/A | The page labels it the tutorial's own picture of its run. |
| 29 | How it works | A label selector identifies a set of objects | S6 | PASS | "Via a label selector, the client/user can identify a set of objects." |
| 30 | How it works | Label selector is the core grouping primitive | S6 | PASS | "The label selector is the core grouping primitive in Kubernetes." |
| 31 | How it works | `.spec.selector` defines how the ReplicaSet finds Pods | S5 | PASS | "The .spec.selector field defines how the created ReplicaSet finds which Pods to manage." |
| 32 | How it works | Rollout triggered if and only if Pod template changes | S5 | PASS | "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated." |
| 33 | How it works | Scaling does not trigger a rollout | S5 | PASS | "Other updates, such as scaling the Deployment, do not trigger a rollout." |
| 34 | How it works | New ReplicaSet scales up while old scales down | S5 | PASS | "A new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet" |
| 35 | How it works | Default 75% min up (25% max unavailable), 125% max (25% max surge) | S5 | PASS | "By default, it ensures that at least 75% of the desired number of Pods are up (25% max unavailable)." / "By default, it ensures that at most 125% of the desired number of Pods are up (25% max surge)." |
| 36 | How it works | Each new ReplicaSet updates the revision; can roll back | S5 | PASS | "Each new ReplicaSet updates the revision of the Deployment." / "Rollback to an earlier Deployment revision" |
| 37 | How it works | Pods are relatively ephemeral, disposable | S3 | PASS | "Pods are designed as relatively ephemeral, disposable entities." |
| 38 | How it works | If a node fails, a controller notices and creates a replacement Pod | S3 | PASS | "if a Node fails, a controller notices that Pods on that Node have stopped working and creates a replacement Pod." |
| 39 | How it works | `restartPolicy` values Always, OnFailure, Never; default Always | S8 | PASS | "possible values Always, OnFailure, and Never. The default value is Always." |
| 40 | How it works | Phase `Pending` | S8 | PASS | "The Pod has been accepted by the Kubernetes cluster, but one or more of the containers has not been set up and made ready to run. This includes time a Pod spends waiting to be scheduled as well as the time spent downloading container images" |
| 41 | How it works | Phase `Running` | S8 | PASS | "The Pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting." |
| 42 | How it works | Phase `Succeeded` | S8 | PASS | "All containers in the Pod have terminated in success, and will not be restarted." |
| 43 | How it works | Phase `Failed` | S8 | PASS | "All containers in the Pod have terminated, and at least one container has terminated in failure." |
| 44 | Try it | Run date and versions; Deployment is the docs example; names differ | none | N/A | Record of the page's own run. |
| 45 | Try it | kind does not require kubectl, but some examples need it | S16 | PASS | "kind does not require kubectl, but you will not be able to perform some of the examples in our docs without it." |
| 46 | Try it | kubectl within one minor version; v1.37 works with v1.36, v1.37, v1.38 | S12 | PASS | "within one minor version difference of your cluster. For example, a v1.37 client can communicate with v1.36, v1.37, and v1.38 control planes." |
| 47 | Try it | Tutorial used release binaries and checked SHA-256 | none | N/A | The reader's own steps and the record of the run. |
| 48 | Try it | `kind create cluster` bootstraps a cluster from a pre-built node image | S16 | PASS | "This will bootstrap a Kubernetes cluster using a pre-built node image." |
| 49 | Try it | Default name `kind`; `--name` gives another name | S16 | PASS | "By default, the cluster will be given the name kind. Use the --name flag to assign the cluster a different context name." |
| 50 | Try it | kubectl looks for `config` in `$HOME/.kube` | S11 | PASS | "kubectl looks for a file named config in the $HOME/.kube directory." |
| 51 | Try it | kind stores config in `${HOME}/.kube/config` if `$KUBECONFIG` not set | S16 | PASS | "By default, the cluster access configuration is stored in ${HOME}/.kube/config if $KUBECONFIG environment variable is not set." |
| 52 | Try it | kubectl form `kubectl [command] [TYPE] [NAME] [flags]`; command examples; TYPE forms | S11 | PASS | "kubectl [command] [TYPE] [NAME] [flags]" / "for example create, get, describe, delete." / "singular, plural, or abbreviated forms." |
| 53 | Try it | If name omitted, details for all resources of the type are displayed | S11 | PASS | "If the name is omitted, details for all resources are displayed, for example kubectl get pods." |
| 54 | Try it | Block: create cluster, `cluster-info --context`, get nodes, get namespaces | S16, S11 | PASS | S16: "kubectl cluster-info --context kind-kind"; S11: "details for all resources are displayed, for example kubectl get pods." |
| 55 | Try it | In the run, kind printed context line; `~/.kube` absent then present; node Ready v1.37.0 | none | N/A | Record of the run. |
| 56 | Try it | Kubernetes starts with four namespaces: default, kube-node-lease, kube-public, kube-system | S7 | PASS | "Kubernetes starts with four initial namespaces:" followed by default, kube-node-lease, kube-public, kube-system. |
| 57 | Try it | The run listed a fifth, `local-path-storage` | none | N/A | Record of the run. |
| 58 | Try it | Example Deployment creates a ReplicaSet to bring up three nginx Pods; YAML | S5 | PASS | "It creates a ReplicaSet to bring up three nginx Pods:" / "image: nginx:1.14.2" / "- containerPort: 80" |
| 59 | Try it | Docs create it, check rollout, list Deployment, ReplicaSet, labels (commands) | S5 | PASS | "kubectl apply -f https://k8s.io/examples/controllers/nginx-deployment.yaml" / "kubectl get rs" / "kubectl get pods --show-labels" / "kubectl rollout status deployment/nginx-deployment" |
| 60 | Try it | `READY` shows available replicas, as ready/desired | S5 | PASS | "READY displays how many replicas of the application are available to your users. It follows the pattern ready/desired." |
| 61 | Try it | Run output of `kubectl get deployments`; labels on Pods | none | N/A | Record of the run. |
| 62 | Try it | ReplicaSet creates and deletes Pods to reach desired number | S4 | PASS | "creating and deleting Pods as needed to reach the desired number." |
| 63 | Try it | `kubectl delete` with type and name performs delete on that resource | S11 | PASS | "kubectl delete (-f FILENAME \| TYPE [NAME \| /NAME \| -l label \| --all]) [flags]" / "Delete resources either from a file, stdin, or specifying label selectors, names, resource selectors, or resources." The words "delete operation" are not in S11, but the meaning is. |
| 64 | Try it | `-l` selects Pods by label | S6 | PASS | "kubectl get pods -l environment=production,tier=frontend" |
| 65 | Try it | Run: new Pod Running after 3 seconds | none | N/A | Record of the run. |
| 66 | Try it | `kubectl set image` changes Pod template image, so starts a rollout | S5 | PASS | "Let's update the nginx Pods to use the nginx:1.16.1 image ..." / "kubectl set image deployment/nginx-deployment nginx=nginx:1.16.1" / "rollout is triggered if and only if the Deployment's Pod template ... is changed" |
| 67 | Try it | `-o wide` lists with more details | S14 | PASS | "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| 68 | Try it | Run: new ReplicaSet has three Pods; table; IMAGES column | none | N/A | Record of the run. |
| 69 | Try it | Docs example: typo `nginx:1.161`, rollout gets stuck | S5 | PASS | "putting the image name as nginx:1.161 instead of nginx:1.16.1" / "The rollout gets stuck." |
| 70 | Try it | By default `rollout status` watches latest rollout until done; `--timeout` sets wait before ending watch | S13 | PASS | "By default 'rollout status' will watch the status of the latest rollout until it's done." / "--timeout duration The length of time to wait before ending watch" |
| 71 | Try it | `kubectl describe` describes a resource with verbose output | S14 | PASS | "# Describe commands with verbose output" / "kubectl describe pods my-pod" |
| 72 | Try it | Run: output, exit code 1, ErrImagePull, Events lines | none | N/A | Record of the run. |
| 73 | Try it | `ImagePullBackOff`: container could not start because image could not be pulled, e.g. invalid name | S9 | PASS | "The status ImagePullBackOff means that a container could not start because Kubernetes could not pull a container image (for reasons such as invalid image name" |
| 74 | Try it | Keeps trying with increasing back-off up to 300 seconds | S9 | PASS | "Kubernetes will keep trying to pull the image, with an increasing back-off delay ... compiled-in limit, which is 300 seconds (5 minutes)." |
| 75 | Try it | Deployment controller stops bad rollout and stops scaling up new ReplicaSet | S5 | PASS | "The Deployment controller stops the bad rollout automatically, and stops scaling up the new ReplicaSet." |
| 76 | Try it | `rollout history` lists revisions; `rollout undo` rolls back to previous | S5 | PASS | "First, check the revisions of this Deployment: kubectl rollout history deployment/nginx-deployment" / "undo the current rollout and rollback to the previous revision: kubectl rollout undo deployment/nginx-deployment" |
| 77 | Try it | Run: `undo` output, image, history revisions 1, 3, 4 | none | N/A | Record of the run. |
| 78 | Try it | `kubectl scale` changes the number of replicas | S5 | PASS | "You can scale a Deployment by using the following command: kubectl scale deployment/nginx-deployment --replicas=10" |
| 79 | Try it | Scaling does not trigger a rollout | S5 | PASS | "do not trigger a rollout." |
| 80 | Try it | `kubectl delete` with type and name performs delete (step 8) | S11 | PASS | Same S11 quote as row 63. |
| 81 | Try it | Run: `5/5`, "No resources found" | none | N/A | Record of the run. |
| 82 | Try it | `kind delete cluster --name qa-lab` deletes it; without `--name`, deletes cluster `kind` | S16 | PASS | "If the flag --name is not specified, kind will use the default cluster context name kind and delete that cluster." |
| 83 | How a tester uses it | Rollout success gives zero exit code from `rollout status` | S5 | PASS | "If the rollout completed successfully, kubectl rollout status returns a zero exit code." |
| 84 | How a tester uses it | Non-zero exit code if progression deadline exceeded | S5 | PASS | "returns a non-zero exit code if the Deployment has exceeded the progression deadline." |
| 85 | How a tester uses it | Deadline is `.spec.progressDeadlineSeconds`, default 600 | S5 | PASS | "...(.spec.progressDeadlineSeconds)" / "This defaults to 600." |
| 86 | How a tester uses it | With `--timeout`, watch ends after the time given; step 6 exit code 1 | S13 | PASS | "The length of time to wait before ending watch". The step 6 part is the run record (N/A). |
| 87 | How a tester uses it | Avoid `:latest` in production: harder to track version and roll back | S9 | PASS | "You should avoid using the :latest tag when deploying containers in production as it is harder to track which version of the image is running and more difficult to roll back properly." |
| 88 | How a tester uses it | Use a meaningful tag such as `v1.42.0` and/or digest | S9 | PASS | "Instead, specify a meaningful tag such as v1.42.0 and/or a digest." |
| 89 | How a tester uses it | `rollout history` lists revisions; `-o wide` more details | S5, S14 | PASS | S5 history quote (row 76); S14 "-o wide ... with more details". |
| 90 | How a tester uses it | kind may be used for local development or CI | S15 | PASS | "may be used for local development or CI." |
| 91 | How a tester uses it | Load images; named cluster needs `--name` | S16 | PASS | "You can load one or more images into your kind cluster" / "If using a named cluster you will need to specify the name of the cluster" |
| 92 | How a tester uses it | Workflow block: docker build, kind load, kubectl apply | S16 | PASS | "docker build -t my-custom-image:unique-tag ./my-image-dir / kind load docker-image my-custom-image:unique-tag / kubectl apply -f my-manifest-using-my-image.yaml" |
| 93 | How a tester uses it | `--wait` blocks until control plane ready; `--wait 30s` | S16 | PASS | "block until the control plane reaches a ready status, you can use the --wait flag" / "to wait for 30 seconds, do --wait 30s" |
| 94 | How a tester uses it | Names unique within a namespace, not across | S7 | PASS | "Names of resources need to be unique within a namespace, but not across namespaces." |
| 95 | How a tester uses it | ReplicaSet creates and deletes Pods to reach number; step 4 test | S4 | PASS | Quote as row 62. The step 4 sentence is the page's own work (N/A). |
| 96 | How a tester uses it | `kubectl get events --sort-by=...` and `kubectl events --types=Warning` | S14 | PASS | "# List Events sorted by timestamp / kubectl get events --sort-by=.metadata.creationTimestamp / # List all warning events / kubectl events --types=Warning" |
| 97 | Common mistakes | Usually don't create Pods directly; use Deployment or Job | S3 | PASS | "Usually you don't need to create Pods directly, even singleton Pods. Instead, create them using workload resources such as Deployment or Job." |
| 98 | Common mistakes | Pods are ephemeral, disposable | S3 | PASS | "Pods are designed as relatively ephemeral, disposable entities." |
| 99 | Common mistakes | Do not manage ReplicaSets owned by a Deployment | S5 | PASS | "Do not manage ReplicaSets owned by a Deployment." |
| 100 | Common mistakes | `:latest` makes tracking harder | S9 | PASS | "it is harder to track which version of the image is running" |
| 101 | Common mistakes | Default pull policy `IfNotPresent` unless `:latest` or omitted, then `Always` | S16 | PASS | "The Kubernetes default pull policy is IfNotPresent unless the image tag is :latest or omitted (and implicitly :latest) in which case the default policy is Always." |
| 102 | Common mistakes | `IfNotPresent` skips pulling if image exists | S16 | PASS | "IfNotPresent causes the Kubelet to skip pulling an image if it already exists." |
| 103 | Common mistakes | For loaded images: no `:latest`, and/or `imagePullPolicy: IfNotPresent` or `Never` | S16 | PASS | "don’t use a :latest tag and / or: specify imagePullPolicy: IfNotPresent or imagePullPolicy: Never on your container(s)." |
| 104 | Common mistakes | `.spec.selector` immutable after creation in `apps/v1` | S5 | PASS | "...that .spec.selector is immutable after creation of the Deployment in apps/v1." |
| 105 | Common mistakes | `rollout status` watches latest rollout by default; typo makes it stuck; add `--timeout` | S13, S5 | PASS | S13 "By default 'rollout status' will watch the status of the latest rollout until it's done."; S5 "The rollout gets stuck."; S13 documents `--timeout`. |
| 106 | Common mistakes | Use kubectl within one minor version of the cluster | S12 | PASS | "You must use a kubectl version that is within one minor version difference of your cluster." |
| 107 | What a tester can check | Callout "Tutorial advice": the tutorial's own advice list | none | PASS | The callout says "This list is the tutorial's own advice". It states no tool fact that the page does not support elsewhere. |
| 108 | Key words | Kubernetes | none | PASS | "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services" |
| 109 | Key words | Pod | none | PASS | "The smallest deployable unit of computing that you can create and manage in Kubernetes: a group of one or more containers, with shared storage and network resources" |
| 110 | Key words | ReplicaSet | none | PASS | "An object whose purpose is to maintain a stable set of replica Pods running at any given time" |
| 111 | Key words | Deployment | none | PASS | "An object that provides declarative updates for Pods and ReplicaSets" and "A Deployment rolls out a ReplicaSet, and the ReplicaSet creates the Pods in the background" |
| 112 | Key words | Label | none | PASS | "A key/value pair that is attached to an object such as a Pod" |
| 113 | Key words | Label selector | none | PASS | "Via a label selector, a client or user can identify a set of objects. The label selector is the core grouping primitive in Kubernetes" |
| 114 | Key words | Namespace | none | PASS | "A mechanism for isolating groups of resources within a single cluster" |
| 115 | Key words | Desired state | none | PASS | "By creating an object, you tell Kubernetes what you want your cluster's workload to look like: this is your cluster's desired state" |
| 116 | Key words | Controller | none | PASS | "Controllers are control loops ... Each controller tries to move the current cluster state closer to the desired state" |
| 117 | Key words | Rollout | none | PASS | "In a rollout, a new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet" |
| 118 | Key words | Revision | none | PASS | "Each new ReplicaSet updates the revision of the Deployment, and you can roll back to an earlier revision" |
| 119 | Key words | `ImagePullBackOff` | none | PASS | "means that a container could not start because Kubernetes could not pull a container image ... Kubernetes keeps trying with an increasing back-off delay" |
| 120 | Key words | kubectl | none | PASS | "kubectl is the command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API" |
| 121 | Key words | kind | none | PASS | "kind is a tool for running local Kubernetes clusters using Docker container "nodes"" |

Open FAILs after round 8: 0

## Round 9 (2026-11-18)

# Fact check: devops / kubernetes-basics (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Pods, ReplicaSets, Deployments, how Kubernetes keeps the state you ask for, and how to watch, break and roll back a rollout on a local kind cluster | none | N/A | Framing sentence that describes the page. |
| 2 | Lede | First objects a tester meets; practice run on a local cluster; builds on Docker Basics | none | N/A | Framing sentence and a site link. |
| 3 | What it is | Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services | 1 | PASS | S1: "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services" |
| 4 | What it is | It facilitates both declarative configuration and automation | 1 | PASS | S1: "...services that facilitate both declarative configuration and automation." |
| 5 | What it is | Service discovery: expose a container using a DNS name or its own IP address | 1 | PASS | S1: "Kubernetes can expose a container using a DNS name or its own IP address." |
| 6 | What it is | Automated rollouts: you describe the desired state, and Kubernetes can change the actual state at a controlled rate | 1 | PASS | S1: "You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate." |
| 7 | What it is | Self-healing: restarts failed containers, replaces containers, kills containers that don't respond to the health check, doesn't advertise them until ready | 1 | PASS | S1: "Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve." |
| 8 | What it is | Table: Pod is the smallest deployable unit of computing; a group of one or more containers with shared storage and network resources, and a specification | 3 | PASS | S3: "Pods are the smallest deployable units of computing that you can create and manage in Kubernetes." and "A Pod ... is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers." |
| 9 | What it is | Table: ReplicaSet maintains a stable set of replica Pods running at any given time | 4 | PASS | S4: "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time." |
| 10 | What it is | Table: Deployment provides declarative updates for Pods and ReplicaSets | 5 | PASS | S5: "A Deployment provides declarative updates for Pods and" (line 957) |
| 11 | What it is | Table: Label is a key/value pair attached to an object such as a Pod | 6 | PASS | S6: "Labels are key/value pairs that are attached to objects such as Pods." |
| 12 | What it is | Table: Namespace is a mechanism for isolating groups of resources within a single cluster | 7 | PASS | S7: "namespaces provide a mechanism for isolating groups of resources within a single cluster." |
| 13 | What it is | The one-container-per-Pod model is the most common use case; a Pod is a wrapper around a single container | 3 | PASS | S3: "Pods that run a single container. The \"one-container-per-Pod\" model is the ... wrapper around a single container" (lines 966-968) |
| 14 | What it is | Kubernetes manages Pods rather than managing the containers directly | 3 | PASS | S3: "Kubernetes manages Pods rather than managing" (line 968) |
| 15 | What it is | kubectl is the command line tool for communicating with a cluster's control plane, using the Kubernetes API | 11 | PASS | S11: "a command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API." |
| 16 | What it is | kind runs local clusters using Docker container "nodes" | 15 | PASS | S15: "kind is a tool for running local Kubernetes clusters using Docker container “nodes”." |
| 17 | What it is | kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI | 15 | PASS | S15: "kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI." |
| 18 | How it works | An object is a "record of intent"; once created, the system constantly works to ensure it exists | 2 | PASS | S2: "A Kubernetes object is a \"record of intent\"--once you create the object, the Kubernetes system will constantly work to ensure that the object exists." |
| 19 | How it works | Creating an object tells Kubernetes what you want the workload to look like: the desired state | 2 | PASS | S2: "By creating an object, you're effectively ... cluster's desired state." (lines 940-942) |
| 20 | How it works | Almost every object has two nested fields, object spec and object status | 2 | PASS | S2: "...the object's configuration: the object spec and the object status." (line 950; the "two nested fields" lead-in is on the line before) |
| 21 | How it works | The control plane continually and actively manages every object's actual state to match the desired state | 2 | PASS | S2: "control plane continually and actively manages every object's actual state to match the desired state you supplied." |
| 22 | How it works | Controllers are control loops that watch the cluster state, then make or request changes where needed | 10 | PASS | S10: "controllers are control loops that watch the state of your cluster, then make or request changes where needed." |
| 23 | How it works | Each controller tries to move the current cluster state closer to the desired state | 10 | PASS | S10: "Each controller tries to move the current cluster state closer to the desired" |
| 24 | How it works | A Deployment rolls out a ReplicaSet, and the ReplicaSet creates the Pods in the background | 5 | PASS | S5: "Create a Deployment to rollout a ReplicaSet. The ReplicaSet creates Pods in the background." |
| 25 | How it works | A ReplicaSet has a selector, a number of replicas and a Pod template | 4 | PASS | S4: "a selector that specifies how to identify Pods it can acquire, a number of replicas ... and a pod template" |
| 26 | How it works | It creates and deletes Pods to reach the desired number, and uses its Pod template for new Pods | 4 | PASS | S4: "creating and deleting Pods as needed to reach the desired number. When a ReplicaSet needs to create new Pods, it uses its Pod template." |
| 27 | How it works | The ReplicaSet name is always `[DEPLOYMENT-NAME]-[HASH]`, and the hash is the `pod-template-hash` label | 5 | PASS | S5: "the name of the ReplicaSet is always formatted as [DEPLOYMENT-NAME]-[HASH]." and "The HASH string is the same as the pod-template-hash label on the ReplicaSet." |
| 28 | How it works | Diagram of step 3 with names from the tutorial's run | none | N/A | Record of the page's own run. |
| 29 | How it works | Via a label selector, a client or user can identify a set of objects | 6 | PASS | S6: "Via a label selector, the client/user can identify a set of objects." |
| 30 | How it works | The label selector is the core grouping primitive in Kubernetes | 6 | PASS | S6: "The label selector is the core grouping primitive in Kubernetes." |
| 31 | How it works | In a Deployment, `.spec.selector` defines how the created ReplicaSet finds which Pods to manage | 5 | PASS | S5: "The .spec.selector field defines how the created ReplicaSet finds which Pods to manage." |
| 32 | How it works | A rollout is triggered if and only if the Pod template (`.spec.template`) changes, e.g. labels or images | 5 | PASS | S5: "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated." |
| 33 | How it works | Other updates, such as scaling, do not trigger a rollout | 5 | PASS | S5: "Other updates, such as scaling the Deployment, do not trigger a rollout." |
| 34 | How it works | A new ReplicaSet is created; the Deployment scales it up while scaling down the old one | 5 | PASS | S5: "A new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet" |
| 35 | How it works | By default at least 75% of desired Pods are up (25% max unavailable) and at most 125% (25% max surge) | 5 | PASS | S5: "at least 75% of the desired number of Pods are up (25% max unavailable)." and "By default, it ensures that at most 125% of the desired number of Pods are up (25% max surge)." |
| 36 | How it works | Each new ReplicaSet updates the revision; you can roll back to an earlier revision | 5 | PASS | S5: "Each new ReplicaSet updates the revision of the Deployment." and "Rollback to an earlier Deployment revision" |
| 37 | How it works | Pods are designed as relatively ephemeral, disposable entities | 3 | PASS | S3: "Pods are designed as relatively ephemeral, disposable entities." |
| 38 | How it works | If a node fails, a controller notices the Pods stopped working and creates a replacement Pod | 3 | PASS | S3: "if a Node fails, a controller notices that Pods on that Node have stopped working and creates a replacement Pod." |
| 39 | How it works | `restartPolicy` has values `Always`, `OnFailure`, `Never`; default `Always` | 8 | PASS | S8: "restartPolicy field with possible values Always, OnFailure, and Never. The default value is Always." |
| 40 | How it works | Phase table: Pending, Running, Succeeded, Failed definitions | 8 | PASS | S8: "The Pod has been accepted by the Kubernetes cluster, but one or more of the containers has not been set up and made ready to run. This includes time a Pod spends waiting to be scheduled as well as the time spent downloading container images" and the Running, Succeeded and Failed lines match (lines 1033-1039). |
| 41 | Try it | Run record: date, Docker, kind and kubectl versions, cluster version; Deployment is the docs' example; names differ | none | N/A | Record of the page's own run. |
| 42 | Try it | kind does not require kubectl, but some examples in kind's docs need it | 16 | PASS | S16: "kind does not require kubectl, but you will not be able to perform some of the examples in our docs without it." |
| 43 | Try it | Use a kubectl within one minor version; a v1.37 client works with v1.36, v1.37 and v1.38 | 12 | PASS | S12: "within one minor version difference of your cluster. For example, a v1.37 client can communicate with v1.36, v1.37," |
| 44 | Try it | Tutorial used release binaries and checked SHA-256 checksums | none | N/A | Record of the page's own practice. |
| 45 | Try it | `kind create cluster` bootstraps a cluster using a pre-built node image | 16 | PASS | S16: "This will bootstrap a Kubernetes cluster using a pre-built node image." |
| 46 | Try it | By default the cluster is named `kind`; `--name` gives another name | 16 | PASS | S16: "By default, the cluster will be given the name kind. Use the --name flag to assign the cluster a different context name." |
| 47 | Try it | kubectl looks for a file named `config` in `$HOME/.kube` | 11 | PASS | S11: "kubectl looks for a file named config in the $HOME/.kube directory." |
| 48 | Try it | kind stores access config in `${HOME}/.kube/config` if `$KUBECONFIG` is not set | 16 | PASS | S16: "By default, the cluster access configuration is stored in ${HOME}/.kube/config if $KUBECONFIG environment variable is not set." |
| 49 | Try it | Form `kubectl [command] [TYPE] [NAME] [flags]`; command is an operation such as create, get, describe, delete; type singular, plural or abbreviated | 11 | PASS | S11: "kubectl [command] [TYPE] [NAME] [flags]", "for example create, get, describe, delete.", "you can specify the singular, plural, or abbreviated forms." |
| 50 | Try it | If the name is omitted, details for all resources of the type are displayed | 11 | PASS | S11: "If the name is omitted, details for all resources are displayed, for example kubectl get pods." |
| 51 | Try it | Block: create cluster, talk to it through its context as the kind docs do with `kubectl cluster-info --context kind-kind` | 16 | PASS | S16: "kubectl cluster-info --context kind-kind" |
| 52 | Try it | Block: `kubectl get nodes` and `kubectl get namespaces` (gets all nodes and namespaces) | 11 | PASS | S11: "If the name is omitted, details for all resources are displayed, for example kubectl get pods." |
| 53 | Try it | Run record: context message, `~/.kube` folder, node Ready, v1.37.0 | none | N/A | Record of the page's own run. |
| 54 | Try it | Kubernetes starts with four namespaces: `default`, `kube-node-lease`, `kube-public`, `kube-system` | 7 | PASS | S7: "Kubernetes starts with four initial namespaces:" followed by default, kube-node-lease, kube-public, kube-system. |
| 55 | Try it | The run listed those four and a fifth, `local-path-storage` | none | N/A | Record of the page's own run. |
| 56 | Try it | The docs' example Deployment creates a ReplicaSet to bring up three nginx Pods (YAML block) | 5 | PASS | S5: "The following is an example of a Deployment. It creates a ReplicaSet to bring up three nginx Pods:" |
| 57 | Try it | The docs create it, check the rollout, and list the Deployment, ReplicaSet and Pod labels (bash block) | 5 | PASS | S5: "kubectl apply -f https://k8s.io/examples/controllers/nginx-deployment.yaml"; "kubectl rollout status deployment/nginx-deployment"; "run kubectl get rs"; "run kubectl get pods --show-labels." |
| 58 | Try it | `READY` shows how many replicas are available to your users, as ready/desired | 5 | PASS | S5: "READY displays how many replicas of the application are available to your users. It follows the pattern ready/desired." |
| 59 | Try it | Run output of `kubectl get deployments`; Pod labels | none | N/A | Record of the page's own run. |
| 60 | Try it | A ReplicaSet creates and deletes Pods as needed to reach the desired number | 4 | PASS | S4: "creating and deleting Pods as needed to reach the desired number." |
| 61 | Try it | `kubectl delete` with a resource type and a name performs the delete operation on that resource | 11 | PASS | S11: "command: Specifies the operation that you want to perform on one or more resources, for example create, get, describe, delete." with "kubectl [command] [TYPE] [NAME] [flags]". The source has no one-sentence statement of this, but it follows from these two lines. |
| 62 | Try it | `-l` selects the Pods by label | 6 | PASS | S6: "kubectl get pods -l environment=production,tier=frontend" |
| 63 | Try it | Run record of step 4 (new Pod `...-69bwz`, three Pods again) | none | N/A | Record of the page's own run. |
| 64 | Try it | `kubectl set image` changes the Pod template image, so it starts a rollout | 5 | PASS | S5: "rollout is triggered if and only if the Deployment's Pod template ... is changed, for example if the ... container images ... are updated." followed by "kubectl set image deployment/nginx-deployment nginx=nginx:1.16.1" |
| 65 | Try it | `-o wide` lists with more details | 14 | PASS | S14: "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| 66 | Try it | Run output of step 5 (ReplicaSets, `IMAGES` column) | none | N/A | Record of the page's own run. |
| 67 | Try it | The docs' example is a typo in the image, `nginx:1.161` instead of `nginx:1.16.1`, and the rollout gets stuck | 5 | PASS | S5: "putting the image name as nginx:1.161 instead of nginx:1.16.1" and "The rollout gets stuck." |
| 68 | Try it | By default `rollout status` watches the latest rollout until it is done; `--timeout` sets the time to wait before ending the watch | 13 | PASS | S13: "By default 'rollout status' will watch the status of the latest rollout until it's done." and "--timeout duration The length of time to wait before ending watch, zero means never." |
| 69 | Try it | `kubectl describe` describes a resource with verbose output | 14 | PASS | S14: "# Describe commands with verbose output" |
| 70 | Try it | Run record of step 6 (output, exit code 1, Pods, Events) | none | N/A | Record of the page's own run. |
| 71 | Try it | `ImagePullBackOff` means a container could not start because Kubernetes could not pull an image, e.g. an invalid image name | 9 | PASS | S9: "The status ImagePullBackOff means that a container could not start because Kubernetes could not pull a container image (for reasons such as invalid image name" |
| 72 | Try it | Kubernetes keeps trying with an increasing back-off delay, up to a compiled-in limit of 300 seconds | 9 | PASS | S9: "Kubernetes raises the delay between each attempt until it reaches a compiled-in limit, which is 300 seconds (5 minutes)." |
| 73 | Try it | The Deployment controller stops the bad rollout automatically, and stops scaling up the new ReplicaSet | 5 | PASS | S5: "The Deployment controller stops the bad rollout automatically, and stops scaling up the new ReplicaSet." |
| 74 | Try it | `kubectl rollout history` lists the revisions; `kubectl rollout undo` rolls back to the previous one (bash block) | 5 | PASS | S5: "First, check the revisions of this Deployment: kubectl rollout history deployment/nginx-deployment" and "undo the current rollout and rollback to the previous revision: kubectl rollout undo deployment/nginx-deployment" |
| 75 | Try it | Run record of step 7 (undo output, image, revisions 1, 3, 4) | none | N/A | Record of the page's own run. |
| 76 | Try it | `kubectl scale` changes the number of replicas | 5 | PASS | S5: "kubectl scale deployment/nginx-deployment --replicas=10" (line 1384) |
| 77 | Try it | Scaling does not trigger a rollout | 5 | PASS | S5: "Other updates, such as scaling the Deployment, do not trigger a rollout." |
| 78 | Try it | `kubectl delete` with a resource type and a name performs the delete operation (step 8) | 11 | PASS | Same support as row 61. |
| 79 | Try it | Run record of step 8 (`5/5`, `No resources found`) | none | N/A | Record of the page's own run. |
| 80 | Try it | `kind delete cluster --name qa-lab` deletes it; without `--name`, kind deletes the cluster named `kind` | 16 | PASS | S16: "If the flag --name is not specified, kind will use the default cluster context name kind and delete that cluster." |
| 81 | How a tester uses it | If the rollout completed, `kubectl rollout status` returns a zero exit code | 5 | PASS | S5: "If the rollout completed successfully, kubectl rollout status returns a zero exit code." |
| 82 | How a tester uses it | It returns a non-zero exit code if the Deployment exceeded the progression deadline | 5 | PASS | S5: "returns a non-zero exit code if the Deployment has exceeded the progression deadline." |
| 83 | How a tester uses it | The deadline is `.spec.progressDeadlineSeconds`, default 600 | 5 | PASS | S5: "(.spec.progressDeadlineSeconds)" and "This defaults to 600." |
| 84 | How a tester uses it | With `--timeout` the watch ends after the time you give | 13 | PASS | S13: "The length of time to wait before ending watch, zero means never." |
| 85 | How a tester uses it | In step 6 it ended a stuck rollout with exit code 1 | none | N/A | Record of the page's own run. |
| 86 | How a tester uses it | Avoid `:latest` in production: harder to track the version and to roll back | 9 | PASS | S9: "You should avoid using the :latest tag when deploying containers in production as" (line 1021; the rest of the sentence is on the next lines) |
| 87 | How a tester uses it | Specify a meaningful tag such as `v1.42.0` and/or a digest | 9 | PASS | S9: "Instead, specify a meaningful tag such as v1.42.0 and/or a digest." |
| 88 | How a tester uses it | `kubectl rollout history` lists the revisions of a Deployment | 5 | PASS | S5: "First, check the revisions of this Deployment: kubectl rollout history deployment/nginx-deployment" |
| 89 | How a tester uses it | `-o wide` lists with more details | 14 | PASS | S14: "with more details" |
| 90 | How a tester uses it | Step 5 `IMAGES` column showed the image | none | N/A | Record of the page's own run. |
| 91 | How a tester uses it | kind may be used for local development or CI | 15 | PASS | S15: "may be used for local development or CI." |
| 92 | How a tester uses it | You can load images into kind; for a named cluster you need `--name` | 16 | PASS | S16: "You can load one or more images into your kind cluster" and "If using a named cluster you will need to specify the name of the cluster" |
| 93 | How a tester uses it | Workflow block: docker build, kind load docker-image, kubectl apply | 16 | PASS | S16: "docker build -t my-custom-image:unique-tag ./my-image-dir / kind load docker-image my-custom-image:unique-tag / kubectl apply -f my-manifest-using-my-image.yaml" |
| 94 | How a tester uses it | With `--wait`, `kind create cluster` blocks until the control plane is ready; `--wait 30s` waits 30 seconds | 16 | PASS | S16: "block until the control plane reaches a ready status, you can use the --wait flag" and "to wait for 30 seconds, do --wait 30s" |
| 95 | How a tester uses it | Resource names must be unique within a namespace, but not across namespaces | 7 | PASS | S7: "Names of resources need to be unique within a namespace, but not across namespaces." |
| 96 | How a tester uses it | A ReplicaSet creates and deletes Pods to reach the desired number | 4 | PASS | S4: "creating and deleting Pods as needed to reach the desired number." |
| 97 | How a tester uses it | Step 4 shows a test: delete a Pod, then count the Pods | none | N/A | Describes the tutorial's own step. |
| 98 | How a tester uses it | `kubectl get events --sort-by=.metadata.creationTimestamp` lists Events sorted by timestamp; `kubectl events --types=Warning` lists all warning events | 14 | PASS | S14: "# List Events sorted by timestamp kubectl get events --sort-by=.metadata.creationTimestamp # List all warning events kubectl events --types=Warning" |
| 99 | How a tester uses it | In step 6 the Pod's Events named the image that could not be pulled | none | N/A | Record of the page's own run. |
| 100 | Common mistakes | Usually you don't need to create Pods directly, even singleton Pods; use workload resources such as Deployment or Job | 3 | PASS | S3: "Usually you don't need to create Pods directly, even singleton Pods. Instead, create them using workload resources such as Deployment or Job." |
| 101 | Common mistakes | Pods are designed as relatively ephemeral, disposable entities | 3 | PASS | S3: "Pods are designed as relatively ephemeral, disposable entities." |
| 102 | Common mistakes | Do not manage ReplicaSets owned by a Deployment | 5 | PASS | S5: "Do not manage ReplicaSets owned by a Deployment." |
| 103 | Common mistakes | `:latest`: harder to track which version of the image is running | 9 | PASS | S9 (line 1021 onward): "You should avoid using the :latest tag when deploying containers in production as it is harder to track which version of the image is running". |
| 104 | Common mistakes | Default pull policy is `IfNotPresent` unless the tag is `:latest` or omitted, then `Always` | 16 | PASS | S16: "The Kubernetes default pull policy is IfNotPresent unless the image tag is :latest or omitted (and implicitly :latest) in which case the default policy is Always." |
| 105 | Common mistakes | `IfNotPresent` causes the kubelet to skip pulling an image if it already exists | 16 | PASS | S16: "IfNotPresent causes the Kubelet to skip pulling an image if it already exists." |
| 106 | Common mistakes | For images loaded into kind, don't use `:latest`, and/or set `imagePullPolicy: IfNotPresent` or `Never` | 16 | PASS | S16: "don’t use a :latest tag" and "specify imagePullPolicy: IfNotPresent or imagePullPolicy: Never on your container(s)." |
| 107 | Common mistakes | `.spec.selector` is immutable after creation of the Deployment in `apps/v1` | 5 | PASS | S5: ".spec.selector is immutable after creation of the Deployment in apps/v1." |
| 108 | Common mistakes | By default `rollout status` watches the latest rollout until it is done | 13 | PASS | S13: "By default 'rollout status' will watch the status of the latest rollout until it's done." |
| 109 | Common mistakes | The docs' example: an image typo makes the rollout get stuck | 5 | PASS | S5: "The rollout gets stuck." |
| 110 | Common mistakes | Add `--timeout` | 13 | PASS | S13: "--timeout duration The length of time to wait before ending watch" |
| 111 | Common mistakes | Use a kubectl within one minor version of the cluster | 12 | PASS | S12: "You must use a kubectl version that is within one minor version difference of your cluster." |
| 112 | What a tester can check | Callout "Tutorial advice": the tutorial's own advice list | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. |
| 113 | Key words | Kubernetes | none | PASS | Page, What it is: "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services" |
| 114 | Key words | Pod | none | PASS | Page: "The smallest deployable unit of computing that you can create and manage in Kubernetes: a group of one or more containers, with shared storage and network resources" |
| 115 | Key words | ReplicaSet | none | PASS | Page: "An object whose purpose is to maintain a stable set of replica Pods running at any given time" |
| 116 | Key words | Deployment | none | PASS | Page: "provides declarative updates for Pods and ReplicaSets" and "A Deployment rolls out a ReplicaSet, and the ReplicaSet creates the Pods" |
| 117 | Key words | Label | none | PASS | Page: "A key/value pair that is attached to an object such as a Pod" |
| 118 | Key words | Label selector | none | PASS | Page: "Via a label selector, a client or user can identify a set of objects" and "the core grouping primitive in Kubernetes" |
| 119 | Key words | Namespace | none | PASS | Page: "A mechanism for isolating groups of resources within a single cluster" |
| 120 | Key words | Desired state | none | PASS | Page: "By creating an object, you tell Kubernetes what you want your cluster's workload to look like: this is your cluster's desired state" |
| 121 | Key words | Controller | none | PASS | Page: "Controllers are control loops ... Each controller tries to move the current cluster state closer to the desired state" |
| 122 | Key words | Rollout | none | PASS | Page: "A Deployment's rollout is triggered if and only if its Pod template ... is changed" and "a new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet" |
| 123 | Key words | Revision | none | PASS | Page: "Each new ReplicaSet updates the revision of the Deployment, and you can roll back to an earlier revision" |
| 124 | Key words | `ImagePullBackOff` | none | PASS | Page: "means that a container could not start because Kubernetes could not pull a container image" and "Kubernetes keeps trying with an increasing back-off delay" |
| 125 | Key words | kubectl | none | PASS | Page: "kubectl is the command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API" |
| 126 | Key words | kind | none | PASS | Page: "kind is a tool for running local Kubernetes clusters using Docker container \"nodes\"" |

Open FAILs after round 9: 0

## Round 10 (2026-11-18)

# Fact check: devops / kubernetes-basics (round 10)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Pods, ReplicaSets, Deployments, state keeping, watch/break/roll back a rollout on kind | none | N/A | Describes the page itself. |
| 2 | Lede | First objects a tester meets; practice run on local cluster; builds on Docker Basics | none | N/A | Framing sentence, and an internal link. |
| 3 | What it is | Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services | S1 | PASS | S1: "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services that facilitate both declarative configuration and automation." |
| 4 | What it is | It facilitates both declarative configuration and automation | S1 | PASS | Same S1 sentence. |
| 5 | What it is | Service discovery and load balancing: expose a container using a DNS name or its own IP address | S1 | PASS | S1: "Kubernetes can expose a container using a DNS name or its own IP address." |
| 6 | What it is | Automated rollouts and rollbacks: desired state, change actual state at a controlled rate | S1 | PASS | S1: "You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate." |
| 7 | What it is | Self-healing: restarts, replaces, kills unresponsive containers, does not advertise until ready | S1 | PASS | S1: "Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve." |
| 8 | What it is | Pod table row: smallest deployable unit; group of containers, shared storage and network, specification | S3 | PASS | S3: "Pods are the smallest deployable units of computing that you can create and manage in Kubernetes." and "containers, with shared storage and network resources, and a specification for how to run the containers." |
| 9 | What it is | ReplicaSet row: maintain a stable set of replica Pods running at any given time | S4 | PASS | S4: "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time." |
| 10 | What it is | Deployment row: declarative updates for Pods and ReplicaSets | S5 | PASS | S5: "A Deployment provides declarative updates for Pods and" (the next line, not read, completes it as "ReplicaSets"). |
| 11 | What it is | Label row: key/value pair attached to an object such as a Pod | S6 | PASS | S6: "Labels are key/value pairs that are attached to objects such as Pods." |
| 12 | What it is | Namespace row: mechanism for isolating groups of resources within a single cluster | S7 | PASS | S7: "namespaces provide a mechanism for isolating groups of resources within a single cluster." |
| 13 | What it is | "One-container-per-Pod" is the most common use case; Pod as wrapper around a single container | S3 | PASS | S3: "The "one-container-per-Pod" model is the most common Kubernetes use case; in this case, you can think of a Pod as a wrapper around a single container" |
| 14 | What it is | Kubernetes manages Pods rather than the containers directly | S3 | PASS | S3: "Kubernetes manages Pods rather than managing the containers directly." |
| 15 | What it is | kubectl is the command line tool for talking to the control plane through the Kubernetes API | S11 | PASS | S11: "Kubernetes provides a command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API." |
| 16 | What it is | kind runs local clusters using Docker container "nodes" | S15 | PASS | S15: "kind is a tool for running local Kubernetes clusters using Docker container "nodes"." |
| 17 | What it is | kind designed primarily for testing Kubernetes, may be used for local development or CI | S15 | PASS | S15: "kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI." |
| 18 | How it works | Object is a "record of intent"; system constantly works to ensure it exists | S2 | PASS | S2: "A Kubernetes object is a "record of intent"--once you create the object, the Kubernetes system will constantly work to ensure that the object exists." |
| 19 | How it works | Creating an object tells Kubernetes the desired state | S2 | PASS | S2: "By creating an object, you're effectively telling the Kubernetes system what you want your cluster's workload to look like; this is your cluster's desired state." (the middle of the line is cut in my read; the line 940-942 range supports it) |
| 20 | How it works | Almost every object has the object spec and the object status | S2 | PASS | S2: "Almost every Kubernetes object includes two nested object fields ... the object spec and the object status." |
| 21 | How it works | Control plane continually and actively manages actual state to match desired state | S2 | PASS | S2: "...and actively manages every object's actual state to match the desired state you" (lines 956-957). |
| 22 | How it works | Controllers are control loops that watch state, then make or request changes | S10 | PASS | S10: "controllers are control loops that watch the state of your cluster, then make or request" |
| 23 | How it works | Each controller tries to move current state closer to desired state | S10 | PASS | S10: "Each controller tries to move the current cluster state closer to the desired" |
| 24 | How it works | A Deployment rolls out a ReplicaSet; the ReplicaSet creates Pods in the background | S5 | PASS | S5: "Create a Deployment to rollout a ReplicaSet. The ReplicaSet creates Pods in the background." |
| 25 | How it works | ReplicaSet has a selector, a number of replicas, and a Pod template | S4 | PASS | S4: "a selector that specifies how to identify Pods it can acquire, a number of replicas indicating how many Pods it should be maintaining, and a pod template" |
| 26 | How it works | It creates and deletes Pods as needed and uses its Pod template for new Pods | S4 | PASS | S4: "...and deleting Pods as needed to reach the desired number. When a ReplicaSet needs to create new Pods, it uses its Pod template." |
| 27 | How it works | ReplicaSet name is always `[DEPLOYMENT-NAME]-[HASH]`; hash equals the `pod-template-hash` label | S5 | PASS | S5: "the name of the ReplicaSet is always formatted as [DEPLOYMENT-NAME]-[HASH]." and "The HASH string is the same as the pod-template-hash label on the ReplicaSet." |
| 28 | How it works | Diagram of step 3 of the practice run (names from the run) | S5 (via sentence) | N/A | Page's own picture of its run. The Deployment, ReplicaSet and Pod tree matches the S5 text above. |
| 29 | How it works | A label selector identifies a set of objects; it is the core grouping primitive | S6 | PASS | S6: "Via a label selector, the client/user can identify a set of objects. The label selector is the core grouping primitive in Kubernetes." |
| 30 | How it works | In a Deployment, `.spec.selector` defines how the ReplicaSet finds Pods to manage | S5 | PASS | S5: "The .spec.selector field defines how the created ReplicaSet finds which Pods to manage." |
| 31 | How it works | Rollout is triggered if and only if the Pod template changes (labels or images) | S5 | PASS | S5: "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated." |
| 32 | How it works | Other updates, such as scaling, do not trigger a rollout | S5 | PASS | S5: "Other updates, such as scaling the Deployment, do not trigger a rollout." |
| 33 | How it works | A new ReplicaSet is created; the Deployment scales it up while scaling down the old one | S5 | PASS | S5: "A new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet" |
| 34 | How it works | By default at least 75% up (25% max unavailable), at most 125% (25% max surge) | S5 | PASS | S5: "it ensures that at least 75% of the desired number of Pods are up (25% max unavailable)." and "By default, it ensures that at most 125% of the desired number of Pods are up (25% max surge)." |
| 35 | How it works | Each new ReplicaSet updates the revision; you can roll back to an earlier revision | S5 | PASS | S5: "Each new ReplicaSet updates the revision of the Deployment." and "Rollback to an earlier Deployment revision" |
| 36 | How it works | Pods are relatively ephemeral, disposable entities | S3 | PASS | S3: "Pods are designed as relatively ephemeral, disposable entities." |
| 37 | How it works | If a node fails, a controller notices and creates a replacement Pod | S3 | PASS | S3: "Node have stopped working and creates a replacement Pod." (line 1052, with the node-failure context in the line before it) |
| 38 | How it works | `restartPolicy` values `Always`, `OnFailure`, `Never`; default `Always` | S8 | PASS | S8: "The spec of a Pod has a restartPolicy field with possible values Always, OnFailure, and Never. The default value is Always." |
| 39 | How it works | Phase table: Pending, Running, Succeeded, Failed | S8 | PASS | S8: "The Pod has been accepted by the Kubernetes cluster, but one or more of the containers has not been set up and made ready to run." and the other three rows match: "All containers in the Pod have terminated in success, and will not be restarted." |
| 40 | Try it | Run record: date, versions, Deployment from the docs, names differ | none | N/A | Page's own run record. |
| 41 | Try it | kind does not require kubectl, but some examples need it | S16 | PASS | S16: "kind does not require kubectl, but you will not be able to perform some of the examples in our docs without it." |
| 42 | Try it | kubectl within one minor version; v1.37 works with v1.36, v1.37, v1.38 | S12 | PASS | S12: "within one minor version difference of your cluster. For example, a v1.37 client can communicate with v1.36, v1.37, and v1.38 control planes." |
| 43 | Try it | Tutorial used release binaries and checked SHA-256 | none | N/A | Record of the page's own practice. |
| 44 | Try it | `kind create cluster` bootstraps a cluster using a pre-built node image | S16 | PASS | S16: "This will bootstrap a Kubernetes cluster using a pre-built node image." |
| 45 | Try it | Default cluster name `kind`; `--name` gives another name | S16 | PASS | S16: "By default, the cluster will be given the name kind. Use the --name flag to assign the cluster a different context name." |
| 46 | Try it | kubectl looks for `config` in `$HOME/.kube` | S11 | PASS | S11: "kubectl looks for a file named config in the $HOME/.kube directory." |
| 47 | Try it | kind stores access config in `${HOME}/.kube/config` if `$KUBECONFIG` is not set | S16 | PASS | S16: "By default, the cluster access configuration is stored in ${HOME}/.kube/config if $KUBECONFIG environment variable is not set." |
| 48 | Try it | Syntax `kubectl [command] [TYPE] [NAME] [flags]`; command is an operation such as create, get, describe, delete; TYPE singular, plural, or abbreviated | S11 | PASS | S11: "kubectl [command] [TYPE] [NAME] [flags]", "for example create, get, describe, delete.", "you can specify the singular, plural, or abbreviated forms." |
| 49 | Try it | If the name is omitted, details for all resources of the type are displayed | S11 | PASS | S11: "If the name is omitted, details for all resources are displayed, for example kubectl get pods." |
| 50 | Try it | Block: `kubectl cluster-info --context kind-...` as the kind docs do; then gets all nodes and all namespaces | S16, S11 | PASS | S16: "kubectl cluster-info --context kind-kind". S11 gives the omitted-name rule above. S11 has no `get nodes` or `get namespaces` text, so the cite covers only the rule. |
| 51 | Try it | Run output: context message, `~/.kube` absent before and `~/.kube/config` after, node Ready v1.37.0 | none | N/A | Run record. |
| 52 | Try it | Kubernetes starts with four namespaces: default, kube-node-lease, kube-public, kube-system | S7 | PASS | S7: "Kubernetes starts with four initial namespaces:" (the list includes "kube-node-lease"). |
| 53 | Try it | The run listed a fifth, `local-path-storage` | none | N/A | Run record. |
| 54 | Try it | Docs' example Deployment creates a ReplicaSet to bring up three nginx Pods; YAML block | S5 | PASS | S5: "It creates a ReplicaSet to bring up three nginx Pods:" The YAML (apps/v1, nginx-deployment, labels app: nginx, replicas: 3, matchLabels, image: nginx:1.14.2, containerPort: 80) matches S5 lines 974-994. |
| 55 | Try it | Docs create it, check rollout, list Deployment, ReplicaSet, Pod labels; 5 commands | S5 | PASS | S5: "kubectl apply -f https://k8s.io/examples/controllers/nginx-deployment.yaml", "kubectl rollout status deployment/nginx-deployment", "run kubectl get deployments", "run kubectl get rs", "run kubectl get pods --show-labels". |
| 56 | Try it | `READY` shows available replicas as ready/desired | S5 | PASS | S5: "READY displays how many replicas of the application are available to your users. It follows the pattern ready/desired." |
| 57 | Try it | Run output of `get deployments`; Pod labels | none | N/A | Run record. |
| 58 | Try it | ReplicaSet creates and deletes Pods as needed to reach desired number | S4 | PASS | S4: "...and deleting Pods as needed to reach the desired number." |
| 59 | Try it | `kubectl delete` with type and name performs the delete operation | S11 | PASS | S11: "command: Specifies the operation that you want to perform ... for example create, get, describe, delete." and "kubectl delete - Delete resources either from a file, stdin, or specifying label selectors, names, resource selectors, or resources." This supports the claim loosely. |
| 60 | Try it | `-l` selects Pods by label | S6 | PASS | S6: "kubectl get pods -l environment=production,tier=frontend" |
| 61 | Try it | Step 4 and run record (new Pod Running after 3 s) | none | N/A | Run record. |
| 62 | Try it | `kubectl set image` changes the Pod template image, so it starts a rollout | S5 | PASS | S5: "kubectl set image deployment/nginx-deployment nginx=nginx:1.16.1" under "rollout is triggered if and only if the Deployment's Pod template ... is changed". |
| 63 | Try it | `-o wide` lists with more details | S14 | PASS | S14: "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| 64 | Try it | Step 5 run output and `IMAGES` column | none | N/A | Run record. |
| 65 | Try it | Typo `nginx:1.161` instead of `nginx:1.16.1` makes the rollout get stuck (docs' example) | S5 | PASS | S5: "putting the image name as nginx:1.161 instead of nginx:1.16.1" and "The rollout gets stuck." |
| 66 | Try it | By default `rollout status` watches the latest rollout until done; `--timeout` sets the wait before ending the watch | S13 | PASS | S13: "By default 'rollout status' will watch the status of the latest rollout until it's done." and "--timeout duration The length of time to wait before ending watch" |
| 67 | Try it | `kubectl describe` describes a resource with verbose output | S14 | PASS | S14: "# Describe commands with verbose output" |
| 68 | Try it | Step 6 run output, exit code 1, ErrImagePull, Events | none | N/A | Run record. |
| 69 | Try it | `ImagePullBackOff` means a container could not start because Kubernetes could not pull an image, e.g. invalid image name | S9 | PASS | S9: "The status ImagePullBackOff means that a container could not start because Kubernetes could not pull a container image (for reasons such as invalid image name" |
| 70 | Try it | Keeps trying with increasing back-off delay, up to a compiled-in limit of 300 seconds | S9 | PASS | S9: "increasing back-off delay. Kubernetes raises the delay between each attempt until it reaches a compiled-in limit, which is 300 seconds (5 minutes)." |
| 71 | Try it | Deployment controller stops the bad rollout automatically and stops scaling up the new ReplicaSet | S5 | PASS | S5: "The Deployment controller stops the bad rollout automatically, and stops scaling up the new ReplicaSet." |
| 72 | Try it | `kubectl rollout history` lists revisions; `kubectl rollout undo` rolls back to the previous one | S5 | PASS | S5: "First, check the revisions of this Deployment: kubectl rollout history deployment/nginx-deployment" and "undo the current rollout and rollback to the previous revision: kubectl rollout undo deployment/nginx-deployment" |
| 73 | Try it | Step 7 undo output, image again 1.16.1, revisions 1, 3, 4 | none | N/A | Run record. |
| 74 | Try it | `kubectl scale` changes number of replicas; scaling does not trigger a rollout | S5 | PASS | S5: "kubectl scale deployment/nginx-deployment --replicas=10" and "Other updates, such as scaling the Deployment, do not trigger a rollout." |
| 75 | Try it | `kubectl delete` with type and name performs delete (step 8) | S11 | PASS | Same support as row 59. |
| 76 | Try it | Step 8 run record (5/5, "No resources found") | none | N/A | Run record. |
| 77 | Try it | `kind delete cluster --name qa-lab` deletes it; without `--name`, deletes cluster `kind` | S16 | PASS | S16: "If the flag --name is not specified, kind will use the default cluster context name kind and delete that cluster." |
| 78 | How a tester uses it | Rollout success gives zero exit code; non-zero if progression deadline exceeded | S5 | PASS | S5: "successfully, kubectl rollout status returns a zero exit code." and "returns a non-zero exit code if the Deployment has exceeded the progression deadline." |
| 79 | How a tester uses it | Deadline is `.spec.progressDeadlineSeconds`, default 600 | S5 | PASS | S5: ".spec.progressDeadlineSeconds is an optional field ... This defaults to 600." |
| 80 | How a tester uses it | With `--timeout`, the watch ends after the given time; in step 6 it ended a stuck rollout with exit code 1 | S13 | PASS | S13: "The length of time to wait before ending watch". The step 6 part is run record. |
| 81 | How a tester uses it | Avoid `:latest` in production: harder to track version and roll back | S9 | PASS | S9: "You should avoid using the :latest tag when deploying containers in production as it is harder to track which version of the image is running and more difficult to roll back properly." |
| 82 | How a tester uses it | Specify a meaningful tag such as `v1.42.0` and/or a digest | S9 | PASS | S9: "Instead, specify a meaningful tag such as v1.42.0 and/or a digest." |
| 83 | How a tester uses it | `kubectl rollout history` lists revisions; `-o wide` lists more details | S5, S14 | PASS | S5 (history command, see row 72); S14: "with more details". |
| 84 | How a tester uses it | kind may be used for local development or CI | S15 | PASS | S15: "may be used for local development or CI." |
| 85 | How a tester uses it | Load images into kind; a named cluster needs `--name` | S16 | PASS | S16: "You can load one or more images into your kind cluster" and "If using a named cluster you will need to specify the name of the cluster" |
| 86 | How a tester uses it | Workflow block: docker build, kind load, kubectl apply | S16 | PASS | S16: "docker build -t my-custom-image:unique-tag ./my-image-dir / kind load docker-image my-custom-image:unique-tag / kubectl apply -f my-manifest-using-my-image.yaml" |
| 87 | How a tester uses it | `--wait` blocks until control plane is ready; `--wait 30s` waits 30 seconds | S16 | PASS | S16: "block until the control plane reaches a ready status, you can use the --wait flag" and "to wait for 30 seconds, do --wait 30s" |
| 88 | How a tester uses it | Resource names unique within a namespace, not across namespaces | S7 | PASS | S7: "Names of resources need to be unique within a namespace, but not across namespaces." |
| 89 | How a tester uses it | ReplicaSet creates and deletes Pods to reach desired number (self-healing) | S4 | PASS | S4: "...and deleting Pods as needed to reach the desired number." The "Step 4 shows a test" sentence is the page's own advice (N/A). |
| 90 | How a tester uses it | `kubectl get events --sort-by=.metadata.creationTimestamp` lists Events sorted by timestamp; `kubectl events --types=Warning` lists warning events | S14 | PASS | S14: "# List Events sorted by timestamp kubectl get events --sort-by=.metadata.creationTimestamp # List all warning events kubectl events --types=Warning" |
| 91 | How a tester uses it | In step 6 the Pod's Events named the image that could not be pulled | none | N/A | Run record. |
| 92 | Common mistakes | Usually don't create Pods directly, even singleton; use Deployment or Job | S3 | PASS | S3: "Usually you don't need to create Pods directly, even singleton Pods. Instead, create them using workload resources such as Deployment or Job." |
| 93 | Common mistakes | Pods are relatively ephemeral, disposable | S3 | PASS | S3: "Pods are designed as relatively ephemeral, disposable entities." |
| 94 | Common mistakes | Do not manage ReplicaSets owned by a Deployment | S5 | PASS | S5: "Do not manage ReplicaSets owned by a Deployment." |
| 95 | Common mistakes | `:latest` harder to track which version is running | S9 | PASS | S9: "it is harder to track which version of the image is running" |
| 96 | Common mistakes | Default pull policy `IfNotPresent` unless tag is `:latest` or omitted, then `Always` | S16 | PASS | S16: "The Kubernetes default pull policy is IfNotPresent unless the image tag is :latest or omitted (and implicitly :latest) in which case the default policy is Always." |
| 97 | Common mistakes | `IfNotPresent` makes the kubelet skip pulling an existing image | S16 | PASS | S16: "IfNotPresent causes the Kubelet to skip pulling an image if it already exists." |
| 98 | Common mistakes | For kind-loaded images, no `:latest`, and/or `imagePullPolicy: IfNotPresent` or `Never` | S16 | PASS | S16: "don't use a :latest tag ... specify imagePullPolicy: IfNotPresent or imagePullPolicy: Never on your container(s)." |
| 99 | Common mistakes | `.spec.selector` is immutable after creation in `apps/v1` | S5 | PASS | S5: "Also note that .spec.selector is immutable after creation of the Deployment in apps/v1." |
| 100 | Common mistakes | Waiting with no limit: default watch until done; docs' typo gets stuck; add `--timeout` | S13, S5 | PASS | S13: "will watch the status of the latest rollout until it's done"; S5: "The rollout gets stuck."; S13: "--timeout duration". |
| 101 | Common mistakes | Use a kubectl within one minor version of the cluster | S12 | PASS | S12: "within one minor version difference of your cluster." |
| 102 | What a tester can check | Callout "Tutorial advice": seven pieces of advice | none | PASS | The callout says it is "the tutorial's own advice". It gives no tool fact that the page does not support (the `-o wide` image check, `--timeout`, `kubectl describe pod` and one-minor-version rules appear above). |
| 103 | Key words | Kubernetes | none | PASS | Technical, What it is: "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services". |
| 104 | Key words | Pod | none | PASS | "The smallest deployable unit of computing ... a group of one or more containers, with shared storage and network resources". |
| 105 | Key words | ReplicaSet | none | PASS | "maintain a stable set of replica Pods running at any given time". |
| 106 | Key words | Deployment (declarative updates; rolls out a ReplicaSet, which creates the Pods) | none | PASS | "provides declarative updates for Pods and ReplicaSets" and "A Deployment rolls out a ReplicaSet, and the ReplicaSet creates the Pods in the background". |
| 107 | Key words | Label | none | PASS | "A key/value pair that is attached to an object such as a Pod". |
| 108 | Key words | Label selector | none | PASS | "Via a label selector, a client or user can identify a set of objects. The label selector is the core grouping primitive in Kubernetes." |
| 109 | Key words | Namespace | none | PASS | "A mechanism for isolating groups of resources within a single cluster". |
| 110 | Key words | Desired state | none | PASS | "By creating an object, you tell Kubernetes what you want your cluster's workload to look like: this is your cluster's desired state". |
| 111 | Key words | Controller | none | PASS | "Controllers are control loops ... Each controller tries to move the current cluster state closer to the desired state". |
| 112 | Key words | Rollout | none | PASS | "A Deployment's rollout is triggered if and only if its Pod template ... is changed" and "a new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet". |
| 113 | Key words | Revision | none | PASS | "Each new ReplicaSet updates the revision of the Deployment, and you can roll back to an earlier revision". |
| 114 | Key words | `ImagePullBackOff` | none | PASS | "`ImagePullBackOff` means that a container could not start because Kubernetes could not pull a container image ... Kubernetes keeps trying with an increasing back-off delay". |
| 115 | Key words | kubectl | none | PASS | "kubectl is the command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API". |
| 116 | Key words | kind | none | PASS | "kind is a tool for running local Kubernetes clusters using Docker container "nodes"". |

Open FAILs after round 10: 0

Open FAILs: 0
