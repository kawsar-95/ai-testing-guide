# Research notes: Kubernetes Basics

Page: `content/devops/kubernetes-basics.mdx`. Module: DevOps & Cloud. Date: 2026-11-18 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): what Kubernetes gives, the first objects (Pod, ReplicaSet, Deployment, label, namespace), desired state and controllers, how a Deployment rolls out a ReplicaSet, rolling updates and revisions, Pod phases, and the kubectl and kind tools, with a practice run on a local kind cluster. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had three sentences, one each from the Pods, ReplicaSet, and Deployments pages; the page keeps all three, now in the table of `## What it is`.

The practice run of `## Try it` was run on 2026-11-18 on Linux (kernel 7.0.0-43-generic) with Docker Engine 29.10.0 (client and server), kind v0.33.0 (go1.26.7), and kubectl v1.37.2 (Kustomize v5.8.1). kubectl and kind were installed from their release binaries into `~/.local/bin`, after a check of their SHA-256 checksums. Before the run there was no `~/.kube` folder and no kind cluster. `kind create cluster --name qa-lab` used the node image `kindest/node:v1.37.0`; the server version was v1.37.0, and the node ran Debian GNU/Linux 13 (trixie) with containerd 2.3.4. The script of the run checked first that no Deployment named `nginx-deployment` existed. The outputs on the page are from this run:

- Step 2: kind printed `Set kubectl context to "kind-qa-lab"`, and `~/.kube/config` was there afterwards (with a `~/.kube/cache` folder). `kubectl get nodes` showed `qa-lab-control-plane   Ready    control-plane   25s   v1.37.0`. `kubectl get namespaces` listed `default`, `kube-node-lease`, `kube-public`, `kube-system`, and `local-path-storage`.
- Step 3: `kubectl apply -f https://k8s.io/examples/controllers/nginx-deployment.yaml` printed `deployment.apps/nginx-deployment created`; the file at that URL is the same as the YAML on the page (checked with `curl` on 2026-11-18). `kubectl rollout status` printed `0 of 3`, `1 of 3`, and `2 of 3 updated replicas are available...`, then `deployment "nginx-deployment" successfully rolled out`. Then `kubectl get deployments` printed the block on the page (`3/3`, age `35s`); `kubectl get rs` showed `nginx-deployment-54fd4d6d4c` with 3 desired, current, and ready; the three Pods `nginx-deployment-54fd4d6d4c-9s5hc`, `-mgvjk`, and `-vbfn4` had the labels `app=nginx,pod-template-hash=54fd4d6d4c`.
- Step 4: `kubectl delete pod nginx-deployment-54fd4d6d4c-9s5hc`; 3 seconds later `kubectl get pods -l app=nginx` listed `nginx-deployment-54fd4d6d4c-69bwz` (`Running`, age `3s`) and the two other Pods.
- Step 5: after `kubectl set image ... nginx=nginx:1.16.1` and a successful `rollout status`, `kubectl get rs` printed the block on the page, and `-o wide` showed `IMAGES nginx:1.16.1`.
- Step 6: `kubectl rollout status deployment/nginx-deployment --timeout=60s` printed the two lines on the page and exited with 1. `kubectl get rs` showed a third ReplicaSet, `nginx-deployment-86769868fd`, with 1 desired, 1 current, 0 ready. `kubectl get pods -l app=nginx` showed the three Pods of `nginx-deployment-76df5b8bb8` as `Running` and `nginx-deployment-86769868fd-jb2kc` as `0/1 ErrImagePull`. The Events of that Pod had a `Failed` line that ended in `docker.io/library/nginx:1.161: not found`; the page shows the last two lines of the Events, without their two leading spaces. `kubectl rollout history` listed the revisions 1, 2, and 3.
- Step 7: `kubectl rollout undo` printed the warning and the `rolled back` line on the page; `rollout status` succeeded; `-o wide` showed `nginx:1.16.1`; `kubectl rollout history` listed the revisions 1, 3, and 4.
- Step 8: `kubectl scale deployment/nginx-deployment --replicas=5`, then `rollout status` succeeded and `kubectl get deployment` showed `5/5`. `kubectl delete deployment nginx-deployment` printed `deployment.apps "nginx-deployment" deleted from default namespace`, and `kubectl get pods -l app=nginx` printed `No resources found in default namespace.`

Every command of the run exited with 0, except the `rollout status` of step 6 (exit 1, as the page says). After the run, the `default` namespace had only the `kubernetes` Service. The cluster was kept for the other Kubernetes pages of Part 3.

Six quotes of commands, of S5, S6, S11, and S14, are written as `scripts/devops_claimcheck.py` reads them: the code highlighting of those pages puts a space before each `=`, and in most of them after it too, and the syntax line of S11 has a space inside each pair of brackets.

The page's diagram is drawn from the names of step 3, with `…` in place of `nginx-deployment`. The page uses the kind docs' load workflow with `my-custom-image:unique-tag`, not their `my-app:latest` example, because its `Common mistakes` section warns against `:latest` tags in kind.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Overview (Kubernetes documentation) | https://kubernetes.io/docs/concepts/overview/ |
| S2 | Objects In Kubernetes (Kubernetes documentation) | https://kubernetes.io/docs/concepts/overview/working-with-objects/ |
| S3 | Pods (Kubernetes documentation) | https://kubernetes.io/docs/concepts/workloads/pods/ |
| S4 | ReplicaSet (Kubernetes documentation) | https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/ |
| S5 | Deployments (Kubernetes documentation) | https://kubernetes.io/docs/concepts/workloads/controllers/deployment/ |
| S6 | Labels and Selectors (Kubernetes documentation) | https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ |
| S7 | Namespaces (Kubernetes documentation) | https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ |
| S8 | Pod Lifecycle (Kubernetes documentation) | https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/ |
| S9 | Images (Kubernetes documentation) | https://kubernetes.io/docs/concepts/containers/images/ |
| S10 | Controllers (Kubernetes documentation) | https://kubernetes.io/docs/concepts/architecture/controller/ |
| S11 | Command line tool (kubectl) (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/ |
| S12 | Install and Set Up kubectl on Linux (Kubernetes documentation) | https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/ |
| S13 | kubectl rollout status (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_status/ |
| S14 | kubectl Quick Reference (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/quick-reference/ |
| S15 | kind (kind documentation) | https://kind.sigs.k8s.io/ |
| S16 | Quick Start (kind documentation) | https://kind.sigs.k8s.io/docs/user/quick-start/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services. | S1 | "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services" |
| It facilitates both declarative configuration and automation. | S1 | "that facilitate both declarative configuration and automation" |
| Among other things, Kubernetes provides service discovery and load balancing: it can expose a container using a DNS name or its own IP address. | S1 | "Kubernetes provides you with" |
| Among other things, Kubernetes provides service discovery and load balancing: it can expose a container using a DNS name or its own IP address. | S1 | "Service discovery and load balancing" |
| Among other things, Kubernetes provides service discovery and load balancing: it can expose a container using a DNS name or its own IP address. | S1 | "Kubernetes can expose a container using a DNS name or its own IP address" |
| Automated rollouts and rollbacks: you describe the desired state, and Kubernetes can change the actual state to the desired state at a controlled rate. | S1 | "Automated rollouts and rollbacks" |
| Automated rollouts and rollbacks: you describe the desired state, and Kubernetes can change the actual state to the desired state at a controlled rate. | S1 | "You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate" |
| Self-healing: Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to a health check, and doesn't advertise them until they are ready. | S1 | "Self-healing" |
| Self-healing: Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to a health check, and doesn't advertise them until they are ready. | S1 | "Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve" |
| A Pod is the smallest deployable unit of computing that you can create and manage in Kubernetes. | S3 | "Pods are the smallest deployable units of computing that you can create and manage in Kubernetes" |
| A Pod is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers. | S3 | "is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers" |
| A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time. | S4 | "A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time" |
| A Deployment provides declarative updates for Pods and ReplicaSets. | S5 | "A Deployment provides declarative updates for Pods and ReplicaSets" |
| Labels are key/value pairs that are attached to objects such as Pods. | S6 | "Labels are key/value pairs that are attached to objects such as Pods" |
| Namespaces provide a mechanism for isolating groups of resources within a single cluster. | S7 | "In Kubernetes, namespaces provide a mechanism for isolating groups of resources within a single cluster" |
| The one-container-per-Pod model is the most common use case; a Pod is a wrapper around a single container, and Kubernetes manages Pods rather than containers. | S3 | "model is the most common Kubernetes use case; in this case, you can think of a Pod as a wrapper around a single container; Kubernetes manages Pods rather than managing the containers directly" |
| kubectl is the command line tool for communicating with a cluster's control plane, using the Kubernetes API. | S11 | "Kubernetes provides a command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API" |
| kind is a tool for running local Kubernetes clusters using Docker container nodes. | S15 | "kind is a tool for running local Kubernetes clusters using Docker container" |
| kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI. | S15 | "kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI" |
| A Kubernetes object is a record of intent: once created, Kubernetes constantly works to ensure that it exists. | S2 | "record of intent" |
| A Kubernetes object is a record of intent: once created, Kubernetes constantly works to ensure that it exists. | S2 | "once you create the object, the Kubernetes system will constantly work to ensure that the object exists" |
| By creating an object, you tell Kubernetes what you want your cluster's workload to look like: the desired state. | S2 | "By creating an object, you're effectively telling the Kubernetes system what you want your cluster's workload to look like; this is your cluster's desired state" |
| Almost every object has two nested fields, the object spec and the object status. | S2 | "Almost every Kubernetes object includes two nested object fields that govern the object's configuration: the object spec and the object status" |
| The control plane continually and actively manages every object's actual state to match the desired state. | S2 | "The Kubernetes control plane continually and actively manages every object's actual state to match the desired state you supplied" |
| Controllers are control loops that watch the cluster and make or request changes; each moves the current state closer to the desired state. | S10 | "In Kubernetes, controllers are control loops that watch the state of your cluster, then make or request changes where needed. Each controller tries to move the current cluster state closer to the desired state" |
| A Deployment rolls out a ReplicaSet, and the ReplicaSet creates the Pods in the background. | S5 | "Create a Deployment to rollout a ReplicaSet. The ReplicaSet creates Pods in the background" |
| A ReplicaSet has a selector that specifies how to identify Pods it can acquire, a number of replicas, and a Pod template. | S4 | "A ReplicaSet is defined with fields, including a selector that specifies how to identify Pods it can acquire, a number of replicas indicating how many Pods it should be maintaining, and a pod template specifying the data of new Pods it should create to meet the number of replicas criteria" |
| A ReplicaSet creates and deletes Pods as needed to reach the desired number, and uses its Pod template for new Pods. | S4 | "A ReplicaSet then fulfills its purpose by creating and deleting Pods as needed to reach the desired number. When a ReplicaSet needs to create new Pods, it uses its Pod template" |
| The name of the ReplicaSet is always formatted as [DEPLOYMENT-NAME]-[HASH], and the hash is the same as the pod-template-hash label. | S5 | "Notice that the name of the ReplicaSet is always formatted as [DEPLOYMENT-NAME]-[HASH]" |
| The name of the ReplicaSet is always formatted as [DEPLOYMENT-NAME]-[HASH], and the hash is the same as the pod-template-hash label. | S5 | "The HASH string is the same as the pod-template-hash label on the ReplicaSet" |
| Via a label selector, a client or user can identify a set of objects; the label selector is the core grouping primitive. | S6 | "Via a label selector, the client/user can identify a set of objects. The label selector is the core grouping primitive in Kubernetes" |
| In a Deployment, .spec.selector defines how the created ReplicaSet finds which Pods to manage. | S5 | "The .spec.selector field defines how the created ReplicaSet finds which Pods to manage" |
| A rollout is triggered if and only if the Pod template changes; scaling does not trigger a rollout. | S5 | "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated. Other updates, such as scaling the Deployment, do not trigger a rollout" |
| In a rollout, a new ReplicaSet is created and scaled up while the old one is scaled down. | S5 | "A new ReplicaSet is created, and the Deployment gradually scales it up while scaling down the old ReplicaSet" |
| By default, at least 75% of the desired Pods are up (25% max unavailable), and at most 125% (25% max surge). | S5 | "By default, it ensures that at least 75% of the desired number of Pods are up (25% max unavailable)" |
| By default, at least 75% of the desired Pods are up (25% max unavailable), and at most 125% (25% max surge). | S5 | "By default, it ensures that at most 125% of the desired number of Pods are up (25% max surge)" |
| Each new ReplicaSet updates the revision of the Deployment, and you can roll back to an earlier revision. | S5 | "Each new ReplicaSet updates the revision of the Deployment" |
| Each new ReplicaSet updates the revision of the Deployment, and you can roll back to an earlier revision. | S5 | "Rollback to an earlier Deployment revision" |
| Pods are designed as relatively ephemeral, disposable entities. | S3 | "Pods are designed as relatively ephemeral, disposable entities" |
| If a node fails, a controller notices that its Pods stopped working and creates a replacement Pod. | S3 | "if a Node fails, a controller notices that Pods on that Node have stopped working and creates a replacement Pod" |
| A Pod's restartPolicy can be Always, OnFailure, or Never; the default is Always. | S8 | "The spec of a Pod has a restartPolicy field with possible values Always, OnFailure, and Never. The default value is Always" |
| Pending: accepted, but a container is not set up and ready yet, including scheduling and image download time. | S8 | "The Pod has been accepted by the Kubernetes cluster, but one or more of the containers has not been set up and made ready to run. This includes time a Pod spends waiting to be scheduled as well as the time spent downloading container images over the network" |
| Running: bound to a node, all containers created, at least one running, starting, or restarting. | S8 | "The Pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting" |
| Succeeded: all containers terminated in success and will not be restarted. | S8 | "All containers in the Pod have terminated in success, and will not be restarted" |
| Failed: all containers terminated, at least one in failure. | S8 | "All containers in the Pod have terminated, and at least one container has terminated in failure" |
| kind does not require kubectl, but some examples of kind's docs need it. | S16 | "kind does not require kubectl, but you will not be able to perform some of the examples in our docs without it" |
| Use a kubectl within one minor version of the cluster: a v1.37 client works with v1.36, v1.37, and v1.38 control planes. | S12 | "You must use a kubectl version that is within one minor version difference of your cluster. For example, a v1.37 client can communicate with v1.36, v1.37, and v1.38 control planes" |
| kind create cluster bootstraps a cluster using a pre-built node image. | S16 | "This will bootstrap a Kubernetes cluster using a pre-built node image" |
| By default the cluster is named kind; --name gives another name. | S16 | "By default, the cluster will be given the name kind. Use the --name flag to assign the cluster a different context name" |
| kubectl looks for a file named config in the $HOME/.kube directory. | S11 | "For configuration, kubectl looks for a file named config in the $HOME/.kube directory" |
| By default, kind stores the cluster access configuration in ${HOME}/.kube/config if $KUBECONFIG is not set. | S16 | "By default, the cluster access configuration is stored in ${HOME}/.kube/config if $KUBECONFIG environment variable is not set" |
| To interact with a specific kind cluster, give its name as a context in kubectl, as in kubectl cluster-info --context kind-kind. | S16 | "In order to interact with a specific cluster, you only need to specify the cluster name as a context in kubectl" |
| To interact with a specific kind cluster, give its name as a context in kubectl, as in kubectl cluster-info --context kind-kind. | S16 | "kubectl cluster-info --context kind-kind" |
| kubectl commands have the form kubectl [command] [TYPE] [NAME] [flags]; the command is an operation such as create, get, describe, or delete; the type can be singular, plural, or abbreviated; without a name, details for all resources are displayed. | S11 | "kubectl [ command ] [ TYPE ] [ NAME ] [ flags ]" |
| kubectl commands have the form kubectl [command] [TYPE] [NAME] [flags]; the command is an operation such as create, get, describe, or delete; the type can be singular, plural, or abbreviated; without a name, details for all resources are displayed. | S11 | "Specifies the operation that you want to perform on one or more resources, for example create, get, describe, delete" |
| kubectl commands have the form kubectl [command] [TYPE] [NAME] [flags]; the command is an operation such as create, get, describe, or delete; the type can be singular, plural, or abbreviated; without a name, details for all resources are displayed. | S11 | "Resource types are case-insensitive and you can specify the singular, plural, or abbreviated forms" |
| kubectl commands have the form kubectl [command] [TYPE] [NAME] [flags]; the command is an operation such as create, get, describe, or delete; the type can be singular, plural, or abbreviated; without a name, details for all resources are displayed. | S11 | "If the name is omitted, details for all resources are displayed" |
| Kubernetes starts with four namespaces: default, kube-node-lease, kube-public, and kube-system. | S7 | "Kubernetes starts with four initial namespaces" |
| Kubernetes starts with four namespaces: default, kube-node-lease, kube-public, and kube-system. | S7 | "kube-node-lease" |
| Kubernetes starts with four namespaces: default, kube-node-lease, kube-public, and kube-system. | S7 | "kube-public" |
| Kubernetes starts with four namespaces: default, kube-node-lease, kube-public, and kube-system. | S7 | "kube-system" |
| The example Deployment creates a ReplicaSet to bring up three nginx Pods. | S5 | "It creates a ReplicaSet to bring up three nginx Pods" |
| The YAML of the example Deployment. | S5 | "replicas: 3" |
| The YAML of the example Deployment. | S5 | "matchLabels" |
| The YAML of the example Deployment. | S5 | "image: nginx:1.14.2" |
| The YAML of the example Deployment. | S5 | "containerPort: 80" |
| The docs create the Deployment, check the rollout, and list the Deployment, its ReplicaSet, and the labels of its Pods. | S5 | "kubectl apply -f https://k8s.io/examples/controllers/nginx-deployment.yaml" |
| The docs create the Deployment, check the rollout, and list the Deployment, its ReplicaSet, and the labels of its Pods. | S5 | "Run kubectl get deployments to check if the Deployment was created" |
| The docs create the Deployment, check the rollout, and list the Deployment, its ReplicaSet, and the labels of its Pods. | S5 | "kubectl rollout status deployment/nginx-deployment" |
| The docs create the Deployment, check the rollout, and list the Deployment, its ReplicaSet, and the labels of its Pods. | S5 | "kubectl get rs" |
| The docs create the Deployment, check the rollout, and list the Deployment, its ReplicaSet, and the labels of its Pods. | S5 | "kubectl get pods --show-labels" |
| READY shows how many replicas are available to your users, as ready/desired. | S5 | "READY displays how many replicas of the application are available to your users. It follows the pattern ready/desired" |
| -l selects objects by label. | S6 | "kubectl get pods -l environment = production,tier = frontend" |
| kubectl set image changes the image of the Pod template. | S5 | "kubectl set image deployment/nginx-deployment nginx = nginx:1.16.1" |
| -o wide lists with more details. | S14 | "kubectl get pods -o wide # List all pods in the current namespace, with more details" |
| The docs' example: a typo in the image, nginx:1.161 instead of nginx:1.16.1, and the rollout gets stuck. | S5 | "Suppose that you made a typo while updating the Deployment, by putting the image name as nginx:1.161 instead of nginx:1.16.1" |
| The docs' example: a typo in the image, nginx:1.161 instead of nginx:1.16.1, and the rollout gets stuck. | S5 | "The rollout gets stuck" |
| By default, rollout status watches the latest rollout until it is done; --timeout sets the time to wait before ending the watch. | S13 | "Show the status of the rollout" |
| By default, rollout status watches the latest rollout until it is done; --timeout sets the time to wait before ending the watch. | S13 | "By default 'rollout status' will watch the status of the latest rollout until it's done" |
| By default, rollout status watches the latest rollout until it is done; --timeout sets the time to wait before ending the watch. | S13 | "The length of time to wait before ending watch, zero means never" |
| kubectl describe describes a resource with verbose output. | S14 | "Describe commands with verbose output kubectl describe nodes my-node kubectl describe pods my-pod" |
| ImagePullBackOff means a container could not start because Kubernetes could not pull its image, for reasons such as an invalid image name. | S9 | "means that a container could not start because Kubernetes could not pull a container image (for reasons such as invalid image name" |
| Kubernetes keeps trying with an increasing back-off delay, up to a compiled-in limit of 300 seconds. | S9 | "Kubernetes will keep trying to pull the image, with an increasing back-off delay" |
| Kubernetes keeps trying with an increasing back-off delay, up to a compiled-in limit of 300 seconds. | S9 | "compiled-in limit, which is 300 seconds (5 minutes)" |
| The Deployment controller stops the bad rollout automatically, and stops scaling up the new ReplicaSet. | S5 | "The Deployment controller stops the bad rollout automatically, and stops scaling up the new ReplicaSet" |
| kubectl rollout history lists the revisions; kubectl rollout undo rolls back to the previous revision. | S5 | "First, check the revisions of this Deployment" |
| kubectl rollout history lists the revisions; kubectl rollout undo rolls back to the previous revision. | S5 | "kubectl rollout history deployment/nginx-deployment" |
| kubectl rollout history lists the revisions; kubectl rollout undo rolls back to the previous revision. | S5 | "undo the current rollout and rollback to the previous revision" |
| kubectl rollout history lists the revisions; kubectl rollout undo rolls back to the previous revision. | S5 | "kubectl rollout undo deployment/nginx-deployment" |
| kubectl scale changes the number of replicas. | S5 | "You can scale a Deployment by using the following command" |
| kubectl scale changes the number of replicas. | S5 | "kubectl scale deployment/nginx-deployment --replicas = 10" |
| kind delete cluster deletes a cluster; without --name, it deletes the cluster named kind. | S16 | "kind delete cluster" |
| kind delete cluster deletes a cluster; without --name, it deletes the cluster named kind. | S16 | "If the flag --name is not specified, kind will use the default cluster context name kind and delete that cluster" |
| kubectl rollout status returns a zero exit code when the rollout completed, and a non-zero one when the progression deadline is exceeded. | S5 | "If the rollout completed successfully, kubectl rollout status returns a zero exit code" |
| kubectl rollout status returns a zero exit code when the rollout completed, and a non-zero one when the progression deadline is exceeded. | S5 | "kubectl rollout status returns a non-zero exit code if the Deployment has exceeded the progression deadline" |
| The deadline is .spec.progressDeadlineSeconds, which defaults to 600. | S5 | ".spec.progressDeadlineSeconds is an optional field that specifies the number of seconds you want to wait for your Deployment to progress before the system reports back that the Deployment has failed progressing" |
| The deadline is .spec.progressDeadlineSeconds, which defaults to 600. | S5 | "This defaults to 600" |
| Avoid the :latest tag in production: it is harder to track the running version and to roll back. | S9 | "You should avoid using the :latest tag when deploying containers in production as it is harder to track which version of the image is running and more difficult to roll back properly" |
| Specify a meaningful tag such as v1.42.0 and/or a digest. | S9 | "Instead, specify a meaningful tag such as v1.42.0 and/or a digest" |
| You can load one or more images into a kind cluster; a named cluster needs --name. | S16 | "You can load one or more images into your kind cluster" |
| You can load one or more images into a kind cluster; a named cluster needs --name. | S16 | "If using a named cluster you will need to specify the name of the cluster: kind load docker-image my-app:latest --name test-cluster" |
| The kind docs' workflow: docker build, kind load docker-image, kubectl apply. | S16 | "This allows a workflow like: docker build -t my-custom-image:unique-tag ./my-image-dir kind load docker-image my-custom-image:unique-tag kubectl apply -f my-manifest-using-my-image.yaml" |
| With --wait, kind create cluster blocks until the control plane is ready; --wait 30s waits 30 seconds. | S16 | "If you want the create cluster command to block until the control plane reaches a ready status, you can use the --wait flag and specify a timeout" |
| With --wait, kind create cluster blocks until the control plane is ready; --wait 30s waits 30 seconds. | S16 | "For example, to wait for 30 seconds, do --wait 30s" |
| Names of resources need to be unique within a namespace, but not across namespaces. | S7 | "Names of resources need to be unique within a namespace, but not across namespaces" |
| kubectl get events --sort-by=.metadata.creationTimestamp lists Events by timestamp; kubectl events --types=Warning lists warnings. | S14 | "List Events sorted by timestamp kubectl get events --sort-by =.metadata.creationTimestamp" |
| kubectl get events --sort-by=.metadata.creationTimestamp lists Events by timestamp; kubectl events --types=Warning lists warnings. | S14 | "List all warning events kubectl events --types = Warning" |
| Usually you don't create Pods directly; create them with workload resources such as Deployment or Job. | S3 | "Usually you don't need to create Pods directly, even singleton Pods. Instead, create them using workload resources such as Deployment or Job" |
| Do not manage ReplicaSets owned by a Deployment. | S5 | "Do not manage ReplicaSets owned by a Deployment" |
| The default pull policy is IfNotPresent unless the tag is :latest or omitted, in which case it is Always. | S16 | "The Kubernetes default pull policy is IfNotPresent unless the image tag is :latest or omitted (and implicitly :latest) in which case the default policy is Always" |
| IfNotPresent causes the kubelet to skip pulling an image if it already exists. | S16 | "IfNotPresent causes the Kubelet to skip pulling an image if it already exists" |
| For images loaded into kind to work as expected, don't use a :latest tag, and/or set imagePullPolicy IfNotPresent or Never. | S16 | "If you want those images loaded into node to work as expected" |
| For images loaded into kind to work as expected, don't use a :latest tag, and/or set imagePullPolicy IfNotPresent or Never. | S16 | "don't use a :latest tag" |
| For images loaded into kind to work as expected, don't use a :latest tag, and/or set imagePullPolicy IfNotPresent or Never. | S16 | "specify imagePullPolicy: IfNotPresent or imagePullPolicy: Never on your container(s)" |
| .spec.selector is immutable after creation of the Deployment in apps/v1. | S5 | ".spec.selector is immutable after creation of the Deployment in apps/v1" |
