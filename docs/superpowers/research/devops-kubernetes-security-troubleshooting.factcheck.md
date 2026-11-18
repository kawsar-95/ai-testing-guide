# Fact check: devops / kubernetes-security-troubleshooting

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://kubernetes.io/docs/concepts/configuration/secret/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / kubernetes-security-troubleshooting (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Secrets, pod security, and how to debug stuck pods and DNS problems. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. Note: the only source (S1) covers Secrets. Nothing in the page body or in S1 covers pod security, stuck pods, or DNS. |
| 1 | A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key | S1 | PASS | "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key." |
| 2 | By default, Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd) | S1 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / kubernetes-security-troubleshooting (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Kubernetes Secrets, and how they are stored by default." | none | PASS | The lede is a fact about Secrets and default storage. S1 supports it: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." The lede has no cite of its own, but claim 3 carries the same fact with a cite. |
| 2 | A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key | S1 | PASS | "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key." |
| 3 | By default, Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd) | S1 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / kubernetes-security-troubleshooting (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Kubernetes Secrets, and how they are stored by default." | none | PASS | S1: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)". The lede has no cite, but S1 supports it. |
| 2 | Lede: "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. |
| 3 | A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key | S1 | PASS | S1: "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key." |
| 4 | By default, Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd) | S1 | PASS | S1: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / kubernetes-security-troubleshooting (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0a | Lede: "Kubernetes Secrets, and how they are stored by default." (the fact in it is that Secrets have a default way of being stored) | none | PASS | The lede gives no new fact beyond claim 2. S1 line 16: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store". |
| 0b | Lede: "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. |
| 1 | A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key | S1 | PASS | "A Secret is an object that contains a small amount of sensitive data such as" (line 6), continued: "a password, a token, or a key." (line 7). |
| 2 | By default, Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd) | S1 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store" (line 16), continued: "(etcd)." (line 17). |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 29 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-18)

# Fact check: devops / kubernetes-security-troubleshooting (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page covers Secrets, RBAC, Pod Security admission, NetworkPolicy, debug commands, with a practice run on kind | none | N/A | Sentence that describes the page itself. |
| 2 | Lede | Page is about keeping a cluster safe and finding why a Pod fails, with a practice run | none | N/A | Framing sentence that describes the page itself. |
| 3 | What it is | A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key | S1 | PASS | S1: "A Secret is an object that contains a small amount of sensitive data such as" |
| 4 | What it is | Secrets are by default stored unencrypted in the API server's data store (etcd) | S1 | PASS | S1: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |
| 5 | What it is | Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd | S1 | PASS | S1: "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 6 | What it is | RBAC is a method of regulating access based on the roles of individual users | S5 | PASS | S5: "Role-based access control (RBAC) is a method of regulating access to computer or network resources based on the roles of individual users within your organization." |
| 7 | What it is | A service account is a non-human account that provides a distinct identity in a cluster | S6 | PASS | S6: "A service account is a type of non-human account that, in Kubernetes, provides a distinct identity in a Kubernetes cluster." |
| 8 | What it is | Pod Security Standards define three different policies to broadly cover the security spectrum | S10 | PASS | S10: "The Pod Security Standards define three different policies to broadly cover the security spectrum." |
| 9 | What it is | Kubernetes offers a built-in Pod Security admission controller to enforce the Standards | S11 | PASS | S11: "Kubernetes offers a built-in Pod Security admission controller to enforce the Pod Security Standards." |
| 10 | What it is | NetworkPolicies control traffic at IP address or port level for TCP, UDP, SCTP | S13 | PASS | S13: "If you want to control traffic flow at the IP address or port level for TCP, UDP, and SCTP protocols, then you might consider using Kubernetes NetworkPolicies for particular applications in your cluster." |
| 11 | What it is | First step in debugging a Pod is taking a look at it | S15 | PASS | S15: "The first step in debugging a Pod is taking a look at it." |
| 12 | What it is | Ephemeral containers help when `kubectl exec` is insufficient (crashed container, or image without debug tools, e.g. distroless) | S16 | PASS | S16: "are useful for interactive troubleshooting when kubectl exec is insufficient because a container has crashed or a container image doesn't include debugging utilities, such as with distroless images." |
| 13 | How it works | Values for all keys in `data` must be base64-encoded strings | S1 | PASS | S1: "The values for all keys in the data field have to be base64-encoded strings." |
| 14 | How it works | TLS example comment: base64 obscures values, does NOT give useful confidentiality | S1 | PASS | S1: "# values are base64 encoded, which obscures them but does NOT provide # any useful level of confidentiality" |
| 15 | How it works | By default the API server stores plain-text resources in etcd, no at-rest encryption | S3 | PASS | S3: "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption." |
| 16 | How it works | Without `--encryption-provider-config`, encryption at rest is not enabled | S3 | PASS | S3: "If you are running the kube-apiserver without the --encryption-provider-config command line argument, you do not have encryption at rest enabled." |
| 17 | How it works | Use etcdctl to retrieve secret data, with the code block `ETCDCTL_API=3 etcdctl get /registry/secrets/default/secret1 [...] \| hexdump -C` | S3 | PASS | S3: "you can use the etcdctl command line program to retrieve the contents of your secret data." and "ETCDCTL_API=3 etcdctl get /registry/secrets/default/secret1 [...] \| hexdump -C" |
| 18 | How it works | `[...]` must be the additional arguments for connecting to the etcd server | S3 | PASS | S3: "where [...] must be the additional arguments for connecting to the etcd server." |
| 19 | How it works | In the docs' aescbc check, stored Secret is prefixed `k8s:enc:aescbc:v1:`, showing the aescbc provider encrypted the data | S3 | PASS | S3: "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1: which indicates the aescbc provider has encrypted the resulting data." |
| 20 | How it works | Secrets can be mounted as data volumes or exposed as env variables for a container in a Pod | S1 | PASS | S1: "Secrets can be mounted as data volumes or exposed as environment variables to be used by a container in a Pod." |
| 21 | How it works | Env var for each Secret key goes in `env[].valueFrom.secretKeyRef` | S1 | PASS | S1: "add an environment variable for each Secret key that you want to use to the env[].valueFrom.secretKeyRef field." |
| 22 | How it works | Anyone authorized to create a Pod in a namespace can read any Secret there, including indirect access such as creating a Deployment | S1 | PASS | S1: "anyone who is authorized to create a Pod in a namespace can use that access to read any Secret in that namespace; this includes indirect access such as the ability to create a" |
| 23 | How it works | Good practice: for humans, restrict get, watch, or list access | S2 | PASS | S2: "Humans: Restrict get, watch, or list access to Secrets." |
| 24 | How it works | Granting list access implicitly lets the subject fetch the contents | S2 | PASS | S2: "Granting list access to Secrets implicitly lets the subject fetch the contents of the Secrets." |
| 25 | How it works | Avoid sharing manifests: sharing or checking in means the secret is available to everyone who can read the manifest | S2 | PASS | S2: "sharing this file or checking it in to a source repository means the secret is available to everyone who can read the manifest." |
| 26 | How it works | Role or ClusterRole contains rules that represent a set of permissions | S5 | PASS | S5: "An RBAC Role or ClusterRole contains rules that represent a set of permissions." |
| 27 | How it works | Permissions are purely additive (no "deny" rules) | S5 | PASS | S5: "Permissions are purely additive (there are no "deny" rules)." |
| 28 | How it works | A Role always sets permissions within a particular namespace; you must specify the namespace | S5 | PASS | S5: "A Role always sets permissions within a particular namespace; when you create a Role, you have to specify the namespace it belongs in." |
| 29 | How it works | ClusterRole is a non-namespaced resource | S5 | PASS | S5: "ClusterRole, by contrast, is a non-namespaced resource." |
| 30 | How it works | Role binding grants a role's permissions to users; holds subjects and a role reference | S5 | PASS | S5: "A role binding grants the permissions defined in a role to a user or set of users. It holds a list of subjects (users, groups, or service accounts), and a reference to the" |
| 31 | How it works | RoleBinding is namespace-specific; ClusterRoleBinding is cluster-wide | S5 | PASS | S5: "A RoleBinding grants permissions within a specific namespace whereas a ClusterRoleBinding grants that access cluster-wide." |
| 32 | How it works | Every namespace gets a default ServiceAccount upon creation | S6 | PASS | S6: "Every namespace gets a default ServiceAccount upon creation." |
| 33 | How it works | A Pod with no assigned ServiceAccount gets the namespace's default | S6 | PASS | S6: "If you deploy a Pod in a namespace, and you don't manually assign a ServiceAccount to the Pod, Kubernetes assigns the default ServiceAccount for that namespace to the Pod." |
| 34 | How it works | Command table row 1: `kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods` creates a role with a single rule | S7 | PASS | S7: "kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods" and "Create a role with single rule." |
| 35 | How it works | Row 2: `kubectl create rolebinding NAME --clusterrole=NAME\|--role=NAME [--user=username] [--group=groupname] [--serviceaccount=namespace:serviceaccountname]` creates a binding for a role or cluster role; service account format `<namespace>:<name>` | S8 | PASS | S8: "kubectl create rolebinding NAME --clusterrole=NAME\|--role=NAME [--user=username] [--group=groupname] [--serviceaccount=namespace:serviceaccountname]" and "in the format <namespace>:<name>." |
| 36 | How it works | Row 3: `kubectl auth can-i list pods --as=system:serviceaccount:dev:foo -n prod` checks an action as another identity; `--as` is the username to impersonate, a regular user or a service account in a namespace | S9 | PASS | S9: "kubectl auth can-i list pods --as=system:serviceaccount:dev:foo -n prod" and "Username to impersonate for the operation. User could be a regular user or a service account in a namespace." |
| 37 | How it works | PSS policies are cumulative, from highly-permissive to highly-restrictive | S10 | PASS | S10: "These policies are cumulative and range from highly-permissive to highly-restrictive." |
| 38 | How it works | Profile table (Privileged, Baseline, Restricted descriptions) | S10 | PASS | S10: "Unrestricted policy, providing the widest possible level of permissions." / "Minimally restrictive policy which prevents known privilege escalations." / "Heavily restricted policy, following current Pod hardening best practices." |
| 39 | How it works | Kubernetes defines labels to choose which PSS level a namespace uses | S11 | PASS | S11: "Kubernetes defines a set of labels that you can set to define which of the predefined Pod Security Standard levels you want to use for a namespace." |
| 40 | How it works | The label chosen defines what action the control plane takes on a violation | S11 | PASS | S11: "The label you select defines what action the control plane takes if a potential violation is detected" |
| 41 | How it works | Mode table: enforce rejects; audit adds audit annotation, otherwise allowed; warn gives user-facing warning, otherwise allowed | S11 | PASS | S11: "Policy violations will cause the pod to be rejected." / "Policy violations will trigger the addition of an audit annotation to the event recorded in the audit log, but are otherwise allowed." / "Policy violations will trigger a user-facing warning, but are otherwise allowed." |
| 42 | How it works | Label form `pod-security.kubernetes.io/<MODE>: <LEVEL>`; MODE one of enforce/audit/warn; LEVEL one of privileged/baseline/restricted | S11 | PASS | S11: "# MODE must be one of `enforce`, `audit`, or `warn`. # LEVEL must be one of `privileged`, `baseline`, or `restricted`. pod-security.kubernetes.io/<MODE>: <LEVEL>" |
| 43 | How it works | Enforce mode is not applied to workload resources, only to resulting pod objects | S11 | PASS | S11: "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 44 | How it works | Docs add `enforce=restricted` and `enforce-version=v1.37` to an existing namespace with `kubectl label --overwrite ns my-existing-namespace`, pinning restricted to v1.37 | S12 | PASS | S12: "This command adds the enforce=restricted policy to my-existing-namespace, pinning the restricted policy version to v1.37. kubectl label --overwrite ns my-existing-namespace \\ pod-security.kubernetes.io/enforce=restricted \\ pod-security.kubernetes.io/enforce-version=v1.37" |
| 45 | How it works | Restricted table row: privilege escalation, allowed `false`, field `securityContext.allowPrivilegeEscalation` | S10 | PASS | S10: "spec.containers[*].securityContext.allowPrivilegeEscalation ... Allowed Values false" |
| 46 | How it works | Restricted table row: capabilities drop ALL, only add back NET_BIND_SERVICE; field `capabilities.drop` | S10 | PASS | S10: "Containers must drop ALL capabilities, and are only permitted to add back the NET_BIND_SERVICE capability." and "spec.containers[*].securityContext.capabilities.drop" |
| 47 | How it works | Restricted table row: non-root required, allowed `true`, field `runAsNonRoot` | S10 | PASS | S10: "Containers must be required to run as non-root users." ... "spec.securityContext.runAsNonRoot ... Allowed Values true" |
| 48 | How it works | Restricted table row: seccomp must be explicitly set to RuntimeDefault or Localhost; Unconfined and no profile prohibited | S10 | PASS | S10: "Seccomp profile must be explicitly set to one of the allowed values. Both the Unconfined profile and the absence of a profile are prohibited." with values "RuntimeDefault" "Localhost" |
| 49 | How it works | Network policies are implemented by the network plugin | S13 | PASS | S13: "Network policies are implemented by the network plugin." |
| 50 | How it works | A NetworkPolicy without an implementing controller has no effect | S13 | PASS | S13: "Creating a NetworkPolicy resource without a controller that implements it will have no effect." |
| 51 | How it works | By default a pod is non-isolated for ingress; all inbound allowed | S13 | PASS | S13: "By default, a pod is non-isolated for ingress; all inbound connections are allowed." |
| 52 | How it works | A pod is isolated for ingress if a NetworkPolicy selects it and has "Ingress" in policyTypes | S13 | PASS | S13: "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and has "Ingress" in its policyTypes" |
| 53 | How it works | When isolated, only node connections and ingress-list connections are allowed in | S13 | PASS | S13: "the only allowed connections into the pod are those from the pod's node and those allowed by the ingress list of some NetworkPolicy that applies to the pod for ingress." |
| 54 | How it works | Network policies do not conflict; they are additive | S13 | PASS | S13: "Network policies do not conflict; they are additive." |
| 55 | How it works | An empty `podSelector` selects all pods in the namespace | S13 | PASS | S13: "An empty podSelector selects all pods in the namespace." |
| 56 | How it works | A policy that selects all pods but allows no ingress makes a default ingress isolation | S13 | PASS | S13: "by creating a NetworkPolicy that selects all pods but does not allow any ingress traffic to those pods." |
| 57 | How it works | `podSelector` under `from` selects Pods in the same namespace allowed as ingress sources | S13 | PASS | S13: "podSelector: This selects particular Pods in the same namespace as the NetworkPolicy which should be allowed as ingress sources or egress destinations." |
| 58 | How it works | Default deny-all egress also blocks DNS traffic | S13 | PASS | S13: "A default deny-all egress policy also blocks DNS traffic." |
| 59 | How it works | kind ships with kindnetd on standard CNI plugins; the default may be disabled for another CNI | S14 | PASS | S14: "KIND ships with a simple networking implementation (“kindnetd”) based around standard CNI plugins" and "You may disable the default to install a different CNI." |
| 60 | How it works | Network policies are implemented by the network plugin (repeat) | S13 | PASS | S13: "Network policies are implemented by the network plugin." |
| 61 | How it works | Run `kubectl describe pods ${POD_NAME}` to check state and recent events | S15 | PASS | S15: "Check the current state of the Pod and recent events with the following command: kubectl describe pods ${POD_NAME}" |
| 62 | How it works | Once a pod is scheduled, the Debug Running Pods methods are available | S15 | PASS | S15: "Once your pod has been scheduled, the methods described in Debug Running Pods are available for debugging." |
| 63 | How it works | Kubelet restarts with exponential backoff (10s, 20s, 40s, …), capped at 300 s | S17 | PASS | S17: "restarts them with an exponential backoff delay (10s, 20s, 40s, …), that is capped at 300 seconds (5 minutes)." |
| 64 | How it works | After 10 minutes without problems the kubelet resets the backoff timer | S17 | PASS | S17: "Once a container has executed for 10 minutes without any problems, the kubelet resets the restart backoff timer for that container." |
| 65 | How it works | CrashLoopBackOff means the backoff delay mechanism is in effect for a container in a crash loop | S17 | PASS | S17: "CrashLoopBackOff state: This indicates that the backoff delay mechanism is currently in effect for a given container that is in a crash loop, failing and restarting repeatedly." |
| 66 | How it works | Investigate with `kubectl logs <name-of-pod>` and `kubectl describe pod <name-of-pod>` | S17 | PASS | S17: "Check logs: Use kubectl logs <name-of-pod> to check the logs of the container." and "Inspect events: Use kubectl describe pod <name-of-pod> to see events" |
| 67 | How it works | `kubectl logs` prints logs for a container in a pod or resource; `-p, --previous` prints the previous instance's logs if it exists | S18 | PASS | S18: "Print the logs for a container in a pod or specified resource." and "-p, --previous If true, print the logs for the previous instance of the container in a pod if it exists." |
| 68 | How it works | `kubectl exec my-pod -- ls /` runs a command in an existing pod | S27 | PASS | S27: "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 69 | How it works | `kubectl debug` can add an ephemeral container to a running pod, e.g. to add debugging utilities without restarting | S19 | PASS | S19: "Workload: Add an ephemeral container to an already running pod, for example to add debugging utilities without restarting the pod." |
| 70 | How it works | Its `--target` flag names the container whose processes to target | S19 | PASS | S19: "--target string When using an ephemeral container, target processes in this container name." |
| 71 | How it works | `--target` targets another container's process namespace and must be supported by the runtime | S16 | PASS | S16: "The --target parameter targets the process namespace of another container." and "The --target parameter must be supported by the Container Runtime." |
| 72 | How it works | Running `kubectl debug` without permission gives `Error from server (Forbidden)` | S16 | PASS | S16: "If you run kubectl debug to add an ephemeral container without the required permission, you will see an error similar to: Error from server (Forbidden)" |
| 73 | How it works | Diagram is the tutorial's own list of commands in run order | none | N/A | The page's own summary of its run order. The commands match claims 61–72. |
| 74 | Try it | Run record: date, time, OS, cluster, tool versions, namespaces, made-up Secret, own choices | none | N/A | Record of the page's own run, set after a sentence that says when and with what. |
| 75 | Try it | `kubectl create namespace` creates a namespace | S28 | PASS | S28: "you can create namespace using below command: kubectl create namespace <insert-namespace-name-here>" |
| 76 | Try it | `kubectl create secret generic` creates a secret from a file, directory, or literal value | S21 | PASS | S21: "Create a secret based on a file, directory, or specified literal value." |
| 77 | Try it | Example `kubectl create secret generic my-secret --from-literal=key1=supersecret --from-literal=key2=topsecret` | S21 | PASS | S21: "kubectl create secret generic my-secret --from-literal=key1=supersecret --from-literal=key2=topsecret" |
| 78 | Try it | Must use the generic subcommand to indicate an Opaque Secret type | S1 | PASS | S1: "you must use the generic subcommand to indicate an Opaque Secret type." |
| 79 | Try it | Opaque is the default Secret type | S1 | PASS | S1: "Opaque is the default Secret type if you don't explicitly specify a type" |
| 80 | Try it | DATA column shows the number of data items | S1 | PASS | S1: "The DATA column shows the number of data items stored in the Secret." |
| 81 | Try it | `-o jsonpath` prints fields defined in a jsonpath expression | S27 | PASS | S27: "-o=jsonpath=<template> Print the fields defined in a jsonpath expression" |
| 82 | Try it | Secrets page decodes `data` with `kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d` | S1 | PASS | S1: "kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d" |
| 83 | Try it | Code block of step 1 commands and its output | none | N/A | Commands and output the page labels as its own run. |
| 84 | Try it | API printed base64 value, `base64 -d` decoded it | none | N/A | Run record. |
| 85 | Try it | Run read the Secret out of etcd as the docs do | S3 | PASS | S3: "Using the etcdctl command line tool, read that Secret out of etcd:" |
| 86 | Try it | `kubectl exec` runs a command in an existing pod (etcdctl run in the etcd Pod) | S27 | PASS | S27: "# Run command in existing pod (1 container case)" |
| 87 | Try it | Docs pass `--cacert`, `--cert`, `--key` to connect to etcd | S3 | PASS | S3: "--cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key" |
| 88 | Try it | Run added `--endpoints=https://127.0.0.1:2379`, which the etcd docs use | S4 | PASS | S4: "ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \\" |
| 89 | Try it | etcd command, hexdump output, and the notes on lines shown and clear text | none | N/A | Run record. |
| 90 | Try it | Stored value does not start with `k8s:enc:aescbc:v1:`, the docs' expected prefix | S3 | PASS | S3: "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:" |
| 91 | Try it | No encryption at rest, which is the default | S3 | PASS | S3: "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption." |
| 92 | Try it | Manifest `sec-app.yaml` adds env var in `env[].valueFrom.secretKeyRef` | S1 | PASS | S1: "add an environment variable for each Secret key that you want to use to the env[].valueFrom.secretKeyRef field." The YAML is the page's own manifest. |
| 93 | Try it | `kubectl wait` waits for a specific condition on one or many resources | S26 | PASS | S26: "Wait for a specific condition on one or many resources." |
| 94 | Try it | `kubectl create serviceaccount` creates a service account with the specified name | S22 | PASS | S22: "Create a service account with the specified name." |
| 95 | Try it | `kubectl create role` creates a role with a single rule | S7 | PASS | S7: "Create a role with single rule." |
| 96 | Try it | `kubectl create rolebinding` for a role or cluster role, account as `<namespace>:<name>` | S8 | PASS | S8: "Create a role binding for a particular role or cluster role." and "in the format <namespace>:<name>." |
| 97 | Try it | `kubectl auth can-i` checks an action and pairs nicely with impersonation (`--as`) | S9 | PASS | S9: "Check whether an action is allowed." and "This command pairs nicely with impersonation. See --as global flag." |
| 98 | Try it | Step 2 commands, can-i table, output | none | N/A | Run record. |
| 99 | Try it | The Role gave permissions in `sec-lab` only | S5 | PASS | S5: "A Role always sets permissions within a particular namespace" |
| 100 | Try it | Run set `enforce` at `restricted` on a new namespace with a label like the docs | S12 | PASS | S12: "pod-security.kubernetes.io/enforce=restricted" |
| 101 | Try it | `kubectl run` creates and runs a particular image in a pod | S20 | PASS | S20: "Create and run a particular image in a pod." |
| 102 | Try it | `--restart` sets restart policy; legal values Always, OnFailure, Never | S20 | PASS | S20: "The restart policy for this Pod. Legal values [Always, OnFailure, Never]." |
| 103 | Try it | Restricted policy: containers must not set `runAsUser` to 0, any non-zero value allowed | S10 | PASS | S10: "Containers must not set runAsUser to 0" ... "any non-zero value" |
| 104 | Try it | Step 3 YAML, commands, output | none | N/A | Run record and the page's own manifest. |
| 105 | Try it | Error names four violations, each a control of the Restricted policy | S10 | PASS | S10: "spec.containers[*].securityContext.allowPrivilegeEscalation", "capabilities.drop", "spec.securityContext.runAsNonRoot", "spec.securityContext.seccompProfile.type" |
| 106 | Try it | `kubectl create deployment` creates a deployment with the specified name | S23 | PASS | S23: "Create a deployment with the specified name." |
| 107 | Try it | `kubectl expose` exposes a resource as a new Kubernetes service | S24 | PASS | S24: "Expose a resource as a new Kubernetes service." |
| 108 | Try it | `kubectl rollout status` shows the rollout status | S25 | PASS | S25: "Show the status of the rollout." |
| 109 | Try it | `--labels` of `kubectl run` takes comma separated labels to apply to the pod | S20 | PASS | S20: "-l, --labels string Comma separated labels to apply to the pod." |
| 110 | Try it | Two policies: the first selects all pods, has `Ingress`, allows nothing in; the second lets `role=tester` reach port 80 of `app=web` | S13 | PASS | S13: "selects all pods but does not allow any ingress traffic to those pods." and "Each rule allows traffic which matches both the from and ports sections." The labels and port come from the page's own manifest. |
| 111 | Try it | Empty `podSelector` selects all pods, so the policy applied to all pods | S13 | PASS | S13: "An empty podSelector selects all pods in the namespace." |
| 112 | Try it | The run kept kind's default plugin `kindnetd` | S14 | PASS | S14: "KIND ships with a simple networking implementation (“kindnetd”)". The clause "the timeouts show that it enforced the policies" is run record (N/A). |
| 113 | Try it | `kubectl run` syntax has command and args after `--` | S20 | PASS | S20: "kubectl run NAME --image=image [--env=\"key=value\"] ... -- [COMMAND] [args...]" |
| 114 | Try it | Restart policy of the Pod defaults to Always | S20 | PASS | S20: "--restart string Default: \"Always\"" |
| 115 | Try it | `kubectl wait` can wait for a field: `kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1` | S26 | PASS | S26: "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| 116 | Try it | Run waited for CrashLoopBackOff, then looked at Pod, previous logs, exit code, events | S15, S18 | N/A | Description of the page's own run steps. The commands match S15 and S18. |
| 117 | Try it | Status was CrashLoopBackOff, the state in which backoff delay mechanism is in effect | S17 | PASS | S17: "CrashLoopBackOff state: This indicates that the backoff delay mechanism is currently in effect" |
| 118 | Try it | Docs create a Pod from the `pause` image because it has no debugging utilities; command `kubectl run ephemeral-demo --image=registry.k8s.io/pause:3.1 --restart=Never` | S16 | PASS | S16: "The examples in this section use the pause container image because it does not contain debugging utilities" |
| 119 | Try it | `kubectl exec` for a shell errors because the image has no shell; `kubectl debug` can add a debugging container | S16 | PASS | S16: "If you attempt to use kubectl exec to create a shell you will see an error because there is no shell in this container image." and "You can instead add a debugging container using kubectl debug." |
| 120 | Try it | `kubectl debug` syntax allows a command after `--`: `kubectl debug (POD \| TYPE[[.VERSION].GROUP]/NAME) [ -- COMMAND [args...] ]` | S19 | PASS | S19: "kubectl debug (POD \| TYPE[[.VERSION].GROUP]/NAME) [ -- COMMAND [args...] ]" |
| 121 | Try it | `-c, --container` names the debug container | S19 | PASS | S19: "-c, --container string Container name to use for debug container." |
| 122 | Try it | Docs run it interactively with `-it` | S16 | PASS | S16: "kubectl debug -it ephemeral-demo --image=busybox:1.28 --target=ephemeral-demo" |
| 123 | Try it | The `ps` listed `/pause` because the run named it with `--target` | S16 | PASS | S16: "The --target parameter targets the process namespace of another container." |
| 124 | Try it | `kubectl delete namespaces` deletes a namespace and everything under it | S28 | PASS | S28: "kubectl delete namespaces <insert-some-namespace-name>" and "This deletes everything under the namespace!" |
| 125 | Try it | `kubectl delete` deletes resources by names; `--timeout` is the wait before giving up on a delete | S29 | PASS | S29: "Delete resources by file names, stdin, resources and names" and "--timeout duration The length of time to wait before giving up on a delete" |
| 126 | Try it | Remaining run text: outputs, tables, "The compliant Pod was created", "The `kubectl get pods` command listed the Pod `app`", cleanup output | none | N/A | Run record. |
| 127 | How a tester uses it | Anyone with API access or etcd access can read or change a Secret | S1 | PASS | S1: "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 128 | How a tester uses it | To test encryption at rest, read the Secret from etcd; docs expect `k8s:enc:aescbc:v1:` for aescbc | S3 | PASS | S3: "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:" |
| 129 | How a tester uses it | `kubectl auth can-i` pairs nicely with impersonation | S9 | PASS | S9: "This command pairs nicely with impersonation." |
| 130 | How a tester uses it | A Role always sets permissions within a particular namespace | S5 | PASS | S5: "A Role always sets permissions within a particular namespace" |
| 131 | How a tester uses it | With `enforce`, violations cause the pod to be rejected | S11 | PASS | S11: "Policy violations will cause the pod to be rejected." |
| 132 | How a tester uses it | Each of the four violations is a Restricted policy control | S10 | PASS | S10: as in claim 105. |
| 133 | How a tester uses it | Enforce mode is not applied to workload resources, only to pod objects | S11 | PASS | S11: "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 134 | How a tester uses it | A NetworkPolicy without a controller has no effect; kind lets you install another CNI | S13, S14 | PASS | S13: "will have no effect." S14: "You may disable the default to install a different CNI." |
| 135 | How a tester uses it | `kubectl describe` shows current state and recent events | S15 | PASS | S15: "Check the current state of the Pod and recent events with the following command: kubectl describe pods" |
| 136 | How a tester uses it | `kubectl logs` shows the logs of the container | S17 | PASS | S17: "Use kubectl logs <name-of-pod> to check the logs of the container." |
| 137 | How a tester uses it | `--previous` shows the previous instance | S18 | PASS | S18: "print the logs for the previous instance of the container in a pod if it exists." |
| 138 | How a tester uses it | `kubectl debug` helps when `kubectl exec` is insufficient | S16 | PASS | S16: "useful for interactive troubleshooting when kubectl exec is insufficient" |
| 139 | How a tester uses it | Running `kubectl debug` without permission gives `Error from server (Forbidden)` | S16 | PASS | S16: "you will see an error similar to: Error from server (Forbidden)" |
| 140 | How a tester uses it | For baseline/restricted Pods, docs choose a matching profile such as `--profile=baseline` or `--profile=restricted` | S16 | PASS | S16: "choose a matching debugging profile such as --profile=baseline or --profile=restricted with kubectl debug." |
| 141 | How a tester uses it | Step references ("In step 1 ...", "In step 2 ...", "In step 3 ...", "In step 4 ...", "In step 5 ...") | none | N/A | Run record. |
| 142 | Common mistakes | Base64 values are obscured, NOT useful confidentiality | S1 | PASS | S1: "which obscures them but does NOT provide any useful level of confidentiality" |
| 143 | Common mistakes | Sharing or checking in a manifest makes the secret available to all who can read it | S2 | PASS | S2: "sharing this file or checking it in to a source repository means the secret is available to everyone who can read the manifest." |
| 144 | Common mistakes | Anyone authorized to create a Pod can read any Secret in that namespace | S1 | PASS | S1: "anyone who is authorized to create a Pod in a namespace can use that access to read any Secret in that namespace" |
| 145 | Common mistakes | Without a controller, a NetworkPolicy has no effect | S13 | PASS | S13: "Creating a NetworkPolicy resource without a controller that implements it will have no effect." |
| 146 | Common mistakes | Default deny-all egress also blocks DNS | S13 | PASS | S13: "A default deny-all egress policy also blocks DNS traffic." |
| 147 | Common mistakes | Enforce is not applied to workload resources, only to pods | S11 | PASS | S11: "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 148 | Common mistakes | No shell in such an image; add a debugging container with `kubectl debug` | S16 | PASS | S16: "there is no shell in this container image." and "You can instead add a debugging container using kubectl debug." |
| 149 | Common mistakes | `-p, --previous` prints the previous instance's logs if it exists | S18 | PASS | S18: "-p, --previous If true, print the logs for the previous instance of the container in a pod if it exists." |
| 150 | What a tester can check | Callout "Tutorial advice": a list of the tutorial's own advice | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact beyond the page. `kubectl auth can-i --as=...` is supported by S9. |
| 151 | Key words | Secret | none | PASS | Page: "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key" |
| 152 | Key words | base64 | none | PASS | Page: "The values for all keys in the `data` field of a Secret have to be base64-encoded strings" and "this does NOT provide any useful level of confidentiality" |
| 153 | Key words | Encryption at rest (not enabled by default) | none | PASS | Page: "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption" |
| 154 | Key words | etcd | none | PASS | Page: "stored unencrypted in the API server's underlying data store (etcd)" |
| 155 | Key words | RBAC | none | PASS | Page: "regulating access to computer or network resources based on the roles of individual users" |
| 156 | Key words | Role, RoleBinding | none | PASS | Page: "A Role always sets permissions within a particular namespace" and "A role binding grants the permissions defined in a role to a user or set of users" |
| 157 | Key words | ServiceAccount | none | PASS | Page: "a type of non-human account that, in Kubernetes, provides a distinct identity" |
| 158 | Key words | `kubectl auth can-i` | none | PASS | Page: "`kubectl auth can-i` checks whether an action is allowed, and pairs nicely with impersonation, which is the `--as` flag" |
| 159 | Key words | Pod Security Standards | none | PASS | Page: "define three different policies" and the Profile table (Privileged, Baseline, Restricted) |
| 160 | Key words | `enforce`, `audit`, `warn` | none | PASS | Page: the Mode table (rejected; audit annotation; user-facing warning) |
| 161 | Key words | NetworkPolicy | none | PASS | Page: "control traffic flow at the IP address or port level" and "Creating a NetworkPolicy resource without a controller that implements it will have no effect" |
| 162 | Key words | Isolated for ingress | none | PASS | Page: "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and has "Ingress" in its policyTypes" |
| 163 | Key words | CrashLoopBackOff | none | PASS | Page: "CrashLoopBackOff state indicates that the backoff delay mechanism is currently in effect for a given container that is in a crash loop" |
| 164 | Key words | `kubectl logs --previous` | none | PASS | Page: "`-p, --previous` prints the logs for the previous instance of the container in a pod if it exists" |
| 165 | Key words | Ephemeral container | none | PASS | Page: "`kubectl debug` can add an ephemeral container to an already running pod" |

Open FAILs after round 6: 0

Changed after this round: Round 6 had no fact FAIL. After it, two Key words rows were reworded so that they restate the Technical text: "At-rest encryption" now says "Not enabled by default: the API server stores plain-text representations of resources into etcd", and `kubectl logs --previous` now says "Prints the logs for the previous instance of the container, if it exists".

## Round 7 (2026-11-18)

# Fact check: devops / kubernetes-security-troubleshooting (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page covers Secrets, RBAC, Pod Security admission, NetworkPolicy, debug commands, with a practice run on kind | none | N/A | Describes the page itself. |
| 2 | Lede | Two jobs: keeping the cluster safe and finding why a Pod fails, with a practice run | none | N/A | Framing sentence that describes the page. |
| 3 | What it is | A Secret is an object with a small amount of sensitive data such as a password, token, or key | S1 | PASS | "A Secret is an object that contains a small amount of sensitive data such as" |
| 4 | What it is | Secrets are by default stored unencrypted in etcd | S1 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |
| 5 | What it is | Anyone with API access can retrieve or modify a Secret, and so can anyone with etcd access | S1 | PASS | "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 6 | What it is | RBAC definition | S5 | PASS | "Role-based access control (RBAC) is a method of regulating access to computer or network resources based on the roles of individual users within your organization." |
| 7 | What it is | Service account definition | S6 | PASS | "A service account is a type of non-human account that, in Kubernetes, provides a distinct identity in a Kubernetes cluster." |
| 8 | What it is | Pod Security Standards define three policies | S10 | PASS | "The Pod Security Standards define three different policies to broadly cover the security spectrum." |
| 9 | What it is | Built-in Pod Security admission controller enforces the Standards | S11 | PASS | "Kubernetes offers a built-in Pod Security admission controller to enforce the Pod Security Standards." |
| 10 | What it is | NetworkPolicies for IP/port-level control for TCP, UDP, SCTP | S13 | PASS | "If you want to control traffic flow at the IP address or port level for TCP, UDP, and SCTP protocols, then you might consider using Kubernetes NetworkPolicies for particular applications in your cluster." |
| 11 | What it is | First step in debugging a Pod is taking a look at it | S15 | PASS | "The first step in debugging a Pod is taking a look at it." |
| 12 | What it is | Ephemeral containers useful when kubectl exec is insufficient (crash, no debug utilities, distroless) | S16 | PASS | "are useful for interactive troubleshooting when kubectl exec is insufficient because a container has crashed or a container image doesn't include debugging utilities, such as with distroless images." |
| 13 | How it works | Values of all keys in `data` must be base64-encoded strings | S1 | PASS | "The values for all keys in the data field have to be base64-encoded strings." |
| 14 | How it works | TLS example comment: base64 obscures but does NOT give useful confidentiality | S1 | PASS | "# values are base64 encoded, which obscures them but does NOT provide # any useful level of confidentiality" |
| 15 | How it works | By default API server stores plain-text resources in etcd, no at-rest encryption | S3 | PASS | "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption." |
| 16 | How it works | Without `--encryption-provider-config`, encryption at rest is not enabled | S3 | PASS | "If you are running the kube-apiserver without the --encryption-provider-config command line argument, you do not have encryption at rest enabled." |
| 17 | How it works | Use etcdctl to retrieve secret data; command `ETCDCTL_API=3 etcdctl get /registry/secrets/default/secret1 [...] \| hexdump -C` | S3 | PASS | "you can use the etcdctl command line program to retrieve the contents of your secret data." and "ETCDCTL_API=3 etcdctl get /registry/secrets/default/secret1 [...] \| hexdump -C" |
| 18 | How it works | `[...]` must be the extra arguments for connecting to etcd | S3 | PASS | "where [...] must be the additional arguments for connecting to the etcd server." |
| 19 | How it works | In the aescbc check, stored Secret is prefixed `k8s:enc:aescbc:v1:` showing aescbc encrypted it | S3 | PASS | "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1: which indicates the aescbc provider has encrypted the resulting data." |
| 20 | How it works | Secrets mounted as data volumes or exposed as environment variables | S1 | PASS | "Secrets can be mounted as data volumes or exposed as environment variables to be used by a container in a Pod." |
| 21 | How it works | Env var per Secret key in `env[].valueFrom.secretKeyRef` | S1 | PASS | "add an environment variable for each Secret key that you want to use to the env[].valueFrom.secretKeyRef field." |
| 22 | How it works | Anyone authorized to create a Pod can read any Secret in the namespace, including indirect access such as creating a Deployment | S1 | PASS | "anyone who is authorized to create a Pod in a namespace can use that access to read any Secret in that namespace; this includes indirect access such as the ability to create a" |
| 23 | How it works | For humans, restrict get, watch, or list access to Secrets | S2 | PASS | "Humans: Restrict get, watch, or list access to Secrets." |
| 24 | How it works | List access implicitly lets the subject fetch Secret contents | S2 | PASS | "Granting list access to Secrets implicitly lets the subject fetch the contents of the Secrets." |
| 25 | How it works | Avoid sharing manifests; sharing or checking in makes secret available to all who can read it | S2 | PASS | "sharing this file or checking it in to a source repository means the secret is available to everyone who can read the manifest." |
| 26 | How it works | Role or ClusterRole contains rules representing a set of permissions | S5 | PASS | "An RBAC Role or ClusterRole contains rules that represent a set of permissions." |
| 27 | How it works | Permissions purely additive, no deny rules | S5 | PASS | "Permissions are purely additive (there are no "deny" rules)." |
| 28 | How it works | A Role always sets permissions in one namespace; namespace must be specified | S5 | PASS | "A Role always sets permissions within a particular namespace; when you create a Role, you have to specify the namespace it belongs in." |
| 29 | How it works | ClusterRole is non-namespaced | S5 | PASS | "ClusterRole, by contrast, is a non-namespaced resource." |
| 30 | How it works | Role binding grants role permissions to users; holds subjects and a role reference | S5 | PASS | "A role binding grants the permissions defined in a role to a user or set of users. It holds a list of subjects (users, groups, or service accounts), and a reference to the role being granted." |
| 31 | How it works | RoleBinding within a namespace, ClusterRoleBinding cluster-wide | S5 | PASS | "A RoleBinding grants permissions within a specific namespace whereas a ClusterRoleBinding grants that access cluster-wide." |
| 32 | How it works | Every namespace gets a default ServiceAccount on creation | S6 | PASS | "gets a default ServiceAccount upon creation." |
| 33 | How it works | Pod without a ServiceAccount gets the namespace default | S6 | PASS | "manually assign a ServiceAccount to the Pod, Kubernetes assigns the default ServiceAccount for that namespace to the Pod." |
| 34 | How it works | Table: `kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods` creates a role with a single rule | S7 | PASS | "Create a role with single rule." and "kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods" |
| 35 | How it works | Table: `kubectl create rolebinding` syntax; binding for a role or cluster role; service account as `<namespace>:<name>` | S8 | PASS | "kubectl create rolebinding NAME --clusterrole=NAME\|--role=NAME [--user=username] [--group=groupname] [--serviceaccount=namespace:serviceaccountname]" and "Service accounts to bind to the role, in the format <namespace>:<name>." |
| 36 | How it works | Table: `kubectl auth can-i list pods --as=system:serviceaccount:dev:foo -n prod`; `--as` is the username to impersonate | S9 | PASS | "kubectl auth can-i list pods --as=system:serviceaccount:dev:foo -n prod" and "Username to impersonate for the operation. User could be a regular user or a service account in a namespace." |
| 37 | How it works | Three policies, cumulative, highly-permissive to highly-restrictive; table of Privileged/Baseline/Restricted | S10 | PASS | "These policies are cumulative and range from highly-permissive to highly-restrictive." / "Minimally restrictive policy which prevents known privilege escalations." / "Heavily restricted policy, following current Pod hardening best practices." / "Unrestricted policy, providing the widest possible level of permissions." |
| 38 | How it works | Labels choose the Pod Security Standard level for a namespace | S11 | PASS | "Kubernetes defines a set of labels that you can set to define which of the predefined Pod Security Standard levels you want to use for a namespace." |
| 39 | How it works | The label defines the control-plane action; table of enforce/audit/warn | S11 | PASS | "defines what action the control plane takes if a potential violation is detected" / "Policy violations will cause the pod to be rejected." / "Policy violations will trigger a user-facing warning, but are otherwise allowed." |
| 40 | How it works | Label form `pod-security.kubernetes.io/<MODE>: <LEVEL>`; MODE and LEVEL values | S11 | PASS | "# MODE must be one of `enforce`, `audit`, or `warn`." "# LEVEL must be one of `privileged`, `baseline`, or `restricted`." |
| 41 | How it works | Enforce mode not applied to workload resources, only to pod objects | S11 | PASS | "applied to workload resources, only to the resulting pod objects." |
| 42 | How it works | Docs add enforce=restricted and enforce-version=v1.37 with `kubectl label --overwrite ns my-existing-namespace` | S12 | PASS | "This command adds the enforce=restricted policy to my-existing-namespace, pinning the restricted policy version to v1.37." |
| 43 | How it works | Restricted table: privilege escalation `false`, drop ALL / add NET_BIND_SERVICE, runAsNonRoot `true`, seccomp values, field names | S10 | PASS | "Containers must drop ALL capabilities, and are only permitted to add back the NET_BIND_SERVICE capability." / "Both the Unconfined profile and the absence of a profile are prohibited." / "Containers must be required to run as non-root users." / "spec.containers[*].securityContext.allowPrivilegeEscalation" |
| 44 | How it works | Network policies are implemented by the network plugin | S13 | PASS | "Network policies are implemented by the network plugin." |
| 45 | How it works | NetworkPolicy without a controller has no effect | S13 | PASS | "Creating a NetworkPolicy resource without a controller that implements it will have no effect." |
| 46 | How it works | By default a pod is non-isolated for ingress | S13 | PASS | "By default, a pod is non-isolated for ingress; all inbound connections are allowed." |
| 47 | How it works | Isolated for ingress if a NetworkPolicy selects it and has "Ingress" | S13 | PASS | "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and has "Ingress" in its policyTypes" |
| 48 | How it works | When isolated, only node connections and ingress-list connections allowed | S13 | PASS | "the only allowed connections into the pod are those from the pod's node and those allowed by the ingress list of some NetworkPolicy" |
| 49 | How it works | Network policies do not conflict; additive | S13 | PASS | "Network policies do not conflict; they are additive." |
| 50 | How it works | Empty podSelector selects all pods in the namespace | S13 | PASS | "An empty podSelector selects all pods in the namespace." |
| 51 | How it works | Selecting all pods with no ingress allowed makes a default ingress isolation | S13 | PASS | "creating a NetworkPolicy that selects all pods but does not allow any ingress traffic to those pods." |
| 52 | How it works | podSelector under `from` selects Pods in the same namespace as allowed ingress sources | S13 | PASS | "podSelector: This selects particular Pods in the same namespace as the NetworkPolicy which should be allowed as ingress sources" |
| 53 | How it works | Default deny-all egress also blocks DNS | S13 | PASS | "A default deny-all egress policy also blocks DNS traffic." |
| 54 | How it works | kind ships kindnetd on CNI plugins; default can be disabled | S14 | PASS | "KIND ships with a simple networking implementation (“kindnetd”) based around standard CNI plugins" / "You may disable the default to install a different CNI." |
| 55 | How it works | Network policies implemented by the network plugin (repeat) | S13 | PASS | "Network policies are implemented by the network plugin." |
| 56 | How it works | `kubectl describe pods ${POD_NAME}` checks state and recent events | S15 | PASS | "Check the current state of the Pod and recent events with the following command: kubectl describe pods ${POD_NAME}" |
| 57 | How it works | Once scheduled, Debug Running Pods methods are available | S15 | PASS | "Once your pod has been scheduled, the methods described in" |
| 58 | How it works | Kubelet restarts with exponential backoff (10s, 20s, 40s), capped at 300 s | S17 | PASS | "restarts them with an exponential backoff delay (10s, 20s, 40s, …), that is capped at 300 seconds (5 minutes)." |
| 59 | How it works | After 10 minutes without problems the kubelet resets the backoff timer | S17 | PASS | "Once a container has executed for 10 minutes without any problems, the kubelet resets the restart backoff timer for that container." |
| 60 | How it works | CrashLoopBackOff means the backoff delay mechanism is in effect | S17 | PASS | "CrashLoopBackOff state: This indicates that the backoff delay mechanism is currently in effect for a given container that is in a crash loop, failing and restarting repeatedly." |
| 61 | How it works | Investigate with `kubectl logs <name-of-pod>` and `kubectl describe pod <name-of-pod>` | S17 | PASS | "Check logs: Use kubectl logs <name-of-pod> to check the logs of the container." / "Inspect events: Use kubectl describe pod <name-of-pod> to see events" |
| 62 | How it works | `kubectl logs` prints logs; `-p, --previous` prints previous instance | S18 | PASS | "Print the logs for a container in a pod or specified resource." / "-p, --previous If true, print the logs for the previous instance of the container in a pod if it exists." |
| 63 | How it works | `kubectl exec my-pod -- ls /` runs a command in an existing pod | S27 | PASS | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 64 | How it works | `kubectl debug` adds an ephemeral container to a running pod without restart | S19 | PASS | "Workload: Add an ephemeral container to an already running pod, for example to add debugging utilities without restarting the pod." |
| 65 | How it works | `--target` flag names the container whose processes to target | S19 | PASS | "--target string When using an ephemeral container, target processes in this container name." |
| 66 | How it works | `--target` targets another container's process namespace; runtime must support it | S16 | PASS | "The --target parameter targets the process namespace of another container." / "The --target parameter must be supported by the Container Runtime." |
| 67 | How it works | Debug without permission gives `Error from server (Forbidden)` | S16 | PASS | "If you run kubectl debug to add an ephemeral container without the required permission, you will see an error similar to: Error from server (Forbidden)" |
| 68 | How it works | Diagram: tutorial's own list of commands in the order of its run | none | N/A | The page labels it the tutorial's own list. |
| 69 | Try it | Run header: date, tools, versions, namespaces, made-up value, own choices | none | N/A | Record of the page's own run. |
| 70 | Try it | `kubectl create namespace` creates a namespace | S28 | PASS | "Alternatively, you can create namespace using below command: kubectl create namespace <insert-namespace-name-here>" |
| 71 | Try it | `kubectl create secret generic` creates a secret from a file, directory, or literal | S21 | PASS | "Create a secret based on a file, directory, or specified literal value." |
| 72 | Try it | Example `kubectl create secret generic my-secret --from-literal=key1=supersecret --from-literal=key2=topsecret` | S21 | PASS | "kubectl create secret generic my-secret --from-literal=key1=supersecret --from-literal=key2=topsecret" |
| 73 | Try it | Must use the generic subcommand to indicate an Opaque type | S1 | PASS | "you must use the generic subcommand to indicate an Opaque Secret type." |
| 74 | Try it | Opaque is the default Secret type | S1 | PASS | "Opaque is the default Secret type if you don't explicitly specify a type in a Secret manifest." |
| 75 | Try it | DATA column shows number of data items | S1 | PASS | "The DATA column shows the number of data items stored in the Secret." |
| 76 | Try it | `-o jsonpath` prints fields defined in a jsonpath expression | S27 | PASS | "-o=jsonpath=<template> Print the fields defined in a jsonpath expression" |
| 77 | Try it | Secrets page decodes `data` with `kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d` | S1 | PASS | "kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d" |
| 78 | Try it | Output of the last three commands; API printed base64, `base64 -d` decoded it | none | N/A | Output and values of the page's own run. |
| 79 | Try it | The run read the Secret out of etcd, as the docs do | S3 | PASS | "Using the etcdctl command line tool, read that Secret out of etcd:" |
| 80 | Try it | `kubectl exec` runs a command in an existing pod; etcdctl runs in the kind etcd Pod | S27 | PASS | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)". The etcd Pod and its node are the run's own setup. |
| 81 | Try it | Docs pass `--cacert`, `--cert`, `--key` to connect to etcd (paths in the code block) | S3 | PASS | "--cacert=/etc/kubernetes/pki/etcd/ca.crt \ --cert=/etc/kubernetes/pki/etcd/server.crt \ --key=/etc/kubernetes/pki/etcd/server.key" |
| 82 | Try it | etcd docs use `--endpoints=https://127.0.0.1:2379` | S4 | PASS | "ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \" |
| 83 | Try it | 6 of 22 hexdump lines; text column shows clear text | none | N/A | Output of the page's own run. |
| 84 | Try it | Stored value does not start with the prefix the docs expect for aescbc | S3 | PASS | "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:". The observed value is the run's own. |
| 85 | Try it | So no encryption at rest in the run, which is the default | S3 | PASS | "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption." |
| 86 | Try it | Manifest adds an env var for the Secret key in `env[].valueFrom.secretKeyRef` | S1 | PASS | "add an environment variable for each Secret key that you want to use to the env[].valueFrom.secretKeyRef field." |
| 87 | Try it | `kubectl wait` waits for a specific condition on resources | S26 | PASS | "Wait for a specific condition on one or many resources." |
| 88 | Try it | Container saw the decoded value | none | N/A | Output of the page's own run. |
| 89 | Try it | `kubectl create serviceaccount` creates one with the given name | S22 | PASS | "Create a service account with the specified name." |
| 90 | Try it | `kubectl create role` creates a role with a single rule | S7 | PASS | "Create a role with single rule." |
| 91 | Try it | `kubectl create rolebinding` for a role or cluster role; SA as `<namespace>:<name>` | S8 | PASS | "Create a role binding for a particular role or cluster role." / "in the format <namespace>:<name>." |
| 92 | Try it | `kubectl auth can-i` checks an action and pairs nicely with impersonation (`--as`) | S9 | PASS | "Check whether an action is allowed." / "This command pairs nicely with impersonation. See --as global flag." |
| 93 | Try it | can-i results table; get pods / get secret output | none | N/A | Output of the page's own run. |
| 94 | Try it | The Role gave permissions in `sec-lab` only | S5 | PASS | "A Role always sets permissions within a particular namespace" |
| 95 | Try it | Run set `enforce` at `restricted` on a new namespace, label like the docs | S12 | PASS | "This command adds the enforce=restricted policy to my-existing-namespace" |
| 96 | Try it | `kubectl run` creates and runs a particular image in a pod | S20 | PASS | "Create and run a particular image in a pod." |
| 97 | Try it | `--restart` sets restart policy; legal values Always, OnFailure, Never | S20 | PASS | "The restart policy for this Pod. Legal values [Always, OnFailure, Never]." |
| 98 | Try it | Restricted policy: must not set `runAsUser` to 0; any non-zero value allowed | S10 | PASS | "Containers must not set runAsUser to 0" and "any non-zero value" |
| 99 | Try it | Error names four violations, each a Restricted control | S10 | PASS | S10 lists these controls: "Privilege Escalation", "Running as Non-root", "Seccomp", "Capabilities (v1.22+)". The error text is the run's own. |
| 100 | Try it | `kubectl create deployment` creates one with the given name | S23 | PASS | "Create a deployment with the specified name." |
| 101 | Try it | `kubectl expose` exposes a resource as a new service | S24 | PASS | "Expose a resource as a new Kubernetes service." |
| 102 | Try it | `kubectl rollout status` shows rollout status | S25 | PASS | "Show the status of the rollout." |
| 103 | Try it | `--labels` of `kubectl run` takes comma separated labels | S20 | PASS | "Comma separated labels to apply to the pod." |
| 104 | Try it | Two client Pods, `tester-client` labelled `role=tester`; wget question and `-T 5` | none | N/A | The run's own setup and own choices. |
| 105 | Try it | Policy 1 selects all pods, `Ingress`, allows nothing in; policy 2 lets `role=tester` reach port 80 of `app=web` | S13 | PASS | "creating a NetworkPolicy that selects all pods but does not allow any ingress traffic to those pods." / "podSelector: This selects particular Pods in the same namespace as the NetworkPolicy which should be allowed as ingress sources". The manifests are the tutorial's own. |
| 106 | Try it | Answered/timed-out table; `kubectl get networkpolicy` output | none | N/A | Output of the page's own run. |
| 107 | Try it | `<none>` shown for empty podSelector; policy still applies to all pods | S13 | PASS | "An empty podSelector selects all pods in the namespace." The `<none>` print is the run's own. |
| 108 | Try it | Cluster kept the default kind network plugin `kindnetd` | S14 | PASS | "KIND ships with a simple networking implementation (“kindnetd”)". |
| 109 | Try it | The timeouts show that it enforced the policies | none | N/A | Inference from the run's own results. |
| 110 | Try it | `kubectl run` syntax has a command and args after `--` | S20 | PASS | "kubectl run NAME --image=image [--env=\"key=value\"] ... [--command] -- [COMMAND] [args...]" |
| 111 | Try it | Restart policy of the created Pod defaults to Always | S20 | PASS | "--restart string Default: "Always"" |
| 112 | Try it | `crashy` container prints a line, waits 1 s, prints error, exits 1 | none | N/A | The run's own container. |
| 113 | Try it | `kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1` | S26 | PASS | "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| 114 | Try it | The run waited for CrashLoopBackOff, then looked at the Pod, the previous logs, the exit code of its last termination, and the events | S15, S18 | FAIL | S15 and S18 give the describe command, events, and `--previous`. Neither says anything about an exit code or `lastState.terminated.exitCode` (S18 only has "exit with a non-zero exit code" for warnings). Fix: add S17 for the exit code ("a container that is Terminated, you see a reason, an exit code") or leave the exit code out of the cited sentence. |
| 115 | Try it | Container started three times in 18 s; CrashLoopBackOff is the state where backoff delay is in effect | S17 | PASS | "CrashLoopBackOff state: This indicates that the backoff delay mechanism is currently in effect". The count is the run's own. |
| 116 | Try it | Docs create a Pod from `pause` because it has no debugging utilities; `kubectl run ephemeral-demo --image=registry.k8s.io/pause:3.1 --restart=Never` | S16 | PASS | "The examples in this section use the pause container image because it does not contain debugging utilities" and "kubectl run ephemeral-demo --image=registry.k8s.io/pause:3.1 --restart=Never" |
| 117 | Try it | `kubectl exec` shell gives an error as no shell; add a debug container with `kubectl debug` | S16 | PASS | "If you attempt to use kubectl exec to create a shell you will see an error because there is no shell in this container image." / "You can instead add a debugging container using kubectl debug." |
| 118 | Try it | Syntax `kubectl debug (POD \| TYPE[[.VERSION].GROUP]/NAME) [ -- COMMAND [args...] ]` | S19 | PASS | "kubectl debug (POD \| TYPE[[.VERSION].GROUP]/NAME) [ -- COMMAND [args...] ]" |
| 119 | Try it | `-c, --container` names the debug container | S19 | PASS | "-c, --container string Container name to use for debug container." |
| 120 | Try it | Docs run it interactively with `-it` | S16 | PASS | "kubectl debug -it ephemeral-demo --image=busybox:1.28 --target=ephemeral-demo" |
| 121 | Try it | `ps` listed `/pause` because the run named it with `--target` | S16 | PASS | "The --target parameter targets the process namespace of another container." The `ps` output is the run's own. |
| 122 | Try it | `kubectl delete namespaces` deletes a namespace and everything under it | S28 | PASS | "kubectl delete namespaces <insert-some-namespace-name> Warning: This deletes everything under the namespace!" |
| 123 | Try it | `kubectl delete` deletes by names; `--timeout` is time to wait before giving up | S29 | PASS | "Delete resources by file names, stdin, resources and names" / "The length of time to wait before giving up on a delete" |
| 124 | How a tester uses it | Anyone with API access or etcd access can read or change a Secret | S1 | PASS | "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 125 | How a tester uses it | Test encryption at rest: read from etcd, docs expect `k8s:enc:aescbc:v1:` for aescbc | S3 | PASS | "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:". Step 1 result is the run's own. |
| 126 | How a tester uses it | `kubectl auth can-i` pairs nicely with impersonation | S9 | PASS | "This command pairs nicely with impersonation." |
| 127 | How a tester uses it | A Role always sets permissions within a particular namespace | S5 | PASS | "A Role always sets permissions within a particular namespace" |
| 128 | How a tester uses it | With `enforce`, violations cause the pod to be rejected | S11 | PASS | "Policy violations will cause the pod to be rejected." |
| 129 | How a tester uses it | Message named four violations, each a Restricted control | S10 | PASS | See #99. |
| 130 | How a tester uses it | Deployment not rejected as such; enforce applies only to pod objects | S11 | PASS | "applied to workload resources, only to the resulting pod objects." |
| 131 | How a tester uses it | NetworkPolicy without controller has no effect | S13 | PASS | "Creating a NetworkPolicy resource without a controller that implements it will have no effect." |
| 132 | How a tester uses it | kind lets you install a different CNI | S14 | PASS | "You may disable the default to install a different CNI." |
| 133 | How a tester uses it | `kubectl describe` shows current state and recent events | S15 | PASS | "Check the current state of the Pod and recent events with the following command: kubectl describe pods" |
| 134 | How a tester uses it | `kubectl logs` shows container logs | S17 | PASS | "Use kubectl logs <name-of-pod> to check the logs of the container." |
| 135 | How a tester uses it | `--previous` shows the previous instance | S18 | PASS | "print the logs for the previous instance of the container in a pod if it exists." |
| 136 | How a tester uses it | `kubectl debug` helps when `kubectl exec` is insufficient | S16 | PASS | "are useful for interactive troubleshooting when kubectl exec is insufficient" |
| 137 | How a tester uses it | Debug without permission gives `Error from server (Forbidden)` | S16 | PASS | See #67. |
| 138 | How a tester uses it | For baseline/restricted Pods, pick a matching profile such as `--profile=baseline` or `--profile=restricted` | S16 | PASS | "choose a matching debugging profile such as --profile=baseline or --profile=restricted with kubectl debug." |
| 139 | Common mistakes | Base64 obscures but gives no useful confidentiality | S1 | PASS | "which obscures them but does NOT provide any useful level of confidentiality" |
| 140 | Common mistakes | Sharing or checking in a manifest exposes the secret to all readers | S2 | PASS | "sharing this file or checking it in to a source repository means the secret is available to everyone who can read the manifest." |
| 141 | Common mistakes | Anyone authorized to create a Pod can read any Secret in the namespace | S1 | PASS | "anyone who is authorized to create a Pod in a namespace can use that access to read any Secret in that namespace" |
| 142 | Common mistakes | NetworkPolicy without a controller has no effect | S13 | PASS | See #45. |
| 143 | Common mistakes | Default deny-all egress also blocks DNS | S13 | PASS | "A default deny-all egress policy also blocks DNS traffic." |
| 144 | Common mistakes | Enforce mode not applied to workload resources, only pod objects | S11 | PASS | See #41. |
| 145 | Common mistakes | No shell in such an image; add a debug container with `kubectl debug` | S16 | PASS | "there is no shell in this container image." / "You can instead add a debugging container using kubectl debug." |
| 146 | Common mistakes | `-p, --previous` prints logs of the previous instance if it exists | S18 | PASS | "-p, --previous If true, print the logs for the previous instance of the container in a pod if it exists." |
| 147 | What a tester can check | Callout "Tutorial advice": own advice list; no unsupported tool fact | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". Its tool facts (`kubectl auth can-i --as=...`, `enforce` label, NetworkPolicy, restart count, exit code, logs, events) are supported by the rest of the page. |
| 148 | Key words | Secret | none | PASS | "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key" |
| 149 | Key words | base64 | none | PASS | "The values for all keys in the `data` field of a Secret have to be base64-encoded strings" and "base64 encoded values are obscured, but that does NOT provide any useful level of confidentiality" |
| 150 | Key words | Encryption at rest | none | PASS | "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption" |
| 151 | Key words | etcd | none | PASS | "stored unencrypted in the API server's underlying data store (etcd)" |
| 152 | Key words | RBAC | none | PASS | "a method of regulating access to computer or network resources based on the roles of individual users" |
| 153 | Key words | Role, RoleBinding | none | PASS | "A Role always sets permissions within a particular namespace" and "A role binding grants the permissions defined in a role to a user or set of users" |
| 154 | Key words | ServiceAccount | none | PASS | "A service account is a type of non-human account that, in Kubernetes, provides a distinct identity in a Kubernetes cluster" |
| 155 | Key words | `kubectl auth can-i` | none | PASS | "`kubectl auth can-i` checks whether an action is allowed, and pairs nicely with impersonation, which is the `--as` flag" |
| 156 | Key words | Pod Security Standards | none | PASS | "The Pod Security Standards define three different policies" and the Privileged/Baseline/Restricted table. |
| 157 | Key words | `enforce`, `audit`, `warn` | none | PASS | Mode table: "Policy violations will cause the pod to be rejected" / "audit annotation" / "user-facing warning". |
| 158 | Key words | NetworkPolicy | none | PASS | "control traffic flow at the IP address or port level" and "Network policies are implemented by the network plugin" |
| 159 | Key words | Isolated for ingress | none | PASS | "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and has "Ingress" in its policyTypes" |
| 160 | Key words | CrashLoopBackOff | none | PASS | "CrashLoopBackOff state indicates that the backoff delay mechanism is currently in effect for a given container that is in a crash loop, failing and restarting repeatedly" |
| 161 | Key words | `kubectl logs --previous` | none | PASS | "`-p, --previous` prints the logs for the previous instance of the container in a pod if it exists" |
| 162 | Key words | Ephemeral container | none | PASS | "`kubectl debug` can add an ephemeral container to an already running pod" and "Ephemeral containers are useful for interactive troubleshooting when `kubectl exec` is insufficient" |

Open FAILs after round 7: 1

Changed after this round: Row 114: the sentence of step 5 that said the run looked at "the exit code of its last termination" had no source for the exit code. The sentence now cites S15 and S18 for the Pod, the previous logs, and the events, and S17 for "you see a reason, an exit code, and the start and finish time" of a Terminated container; the run read the exit code with `-o jsonpath` (S27). Changed in all three voices.

## Round 8 (2026-11-18)

# Fact check: devops / kubernetes-security-troubleshooting (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page covers Secrets, RBAC, Pod Security admission, NetworkPolicy, and Pod-failure commands, with a practice run on kind | none | N/A | Describes the page itself. |
| 2 | Lede | Page is about keeping a cluster safe and finding out why a Pod fails | none | N/A | Framing sentence. |
| 3 | What it is | A Secret contains a small amount of sensitive data such as a password, token, or key | S1 | PASS | S1: "A Secret is an object that contains a small amount of sensitive data such as" |
| 4 | What it is | Secrets are by default stored unencrypted in etcd | S1 | PASS | S1: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |
| 5 | What it is | Anyone with API access, or with access to etcd, can retrieve or modify a Secret | S1 | PASS | S1: "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 6 | What it is | RBAC regulates access based on the roles of individual users | S5 | PASS | S5: "Role-based access control (RBAC) is a method of regulating access to computer or" |
| 7 | What it is | A service account is a non-human account that gives a distinct identity in the cluster | S6 | PASS | S6: "A service account is a type of non-human account that, in Kubernetes, provides a distinct identity in a Kubernetes cluster." |
| 8 | What it is | Pod Security Standards define three policies | S10 | PASS | S10: "The Pod Security Standards define three different policies to broadly cover the security spectrum." |
| 9 | What it is | Kubernetes has a built-in Pod Security admission controller | S11 | PASS | S11: "Kubernetes offers a built-in Pod Security admission controller to enforce the Pod Security Standards." |
| 10 | What it is | NetworkPolicies control traffic at IP/port level for TCP, UDP, SCTP | S13 | PASS | S13: "If you want to control traffic flow at the IP address or port level for TCP, UDP, and SCTP protocols, then you might consider using Kubernetes NetworkPolicies" |
| 11 | What it is | The first step in debugging a Pod is taking a look at it | S15 | PASS | S15: "The first step in debugging a Pod is taking a look at it." |
| 12 | What it is | Ephemeral containers help when `kubectl exec` is insufficient (crash, or no debug tools, e.g. distroless) | S16 | PASS | S16: "are useful for interactive troubleshooting when kubectl exec is insufficient because a container has crashed or a container image doesn't include debugging utilities, such as with distroless images." |
| 13 | How it works | Values of keys in `data` must be base64-encoded strings | S1 | PASS | S1: "The values for all keys in the data field have to be base64-encoded strings." |
| 14 | How it works | TLS example comment: base64 obscures but gives no useful confidentiality | S1 | PASS | S1: "# values are base64 encoded, which obscures them but does NOT provide # any useful level of confidentiality" |
| 15 | How it works | By default the API server stores plain text in etcd, no at-rest encryption | S3 | PASS | S3: "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption." |
| 16 | How it works | Without `--encryption-provider-config`, encryption at rest is not enabled | S3 | PASS | S3: "If you are running the kube-apiserver without the --encryption-provider-config command line argument, you do not have encryption at rest enabled." |
| 17 | How it works | Use the etcdctl program to retrieve secret data; code block `ETCDCTL_API=3 etcdctl get /registry/secrets/default/secret1 [...] \| hexdump -C` | S3 | PASS | S3: "you can use the etcdctl command line program to retrieve the contents of your secret data." and "ETCDCTL_API=3 etcdctl get /registry/secrets/default/secret1 [...] \| hexdump -C" |
| 18 | How it works | `[...]` must be the additional arguments for connecting to etcd | S3 | PASS | S3: "where [...] must be the additional arguments for connecting to the etcd server." |
| 19 | How it works | In the aescbc check, the stored Secret is prefixed `k8s:enc:aescbc:v1:`, showing aescbc encrypted the data | S3 | PASS | S3: "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1: which indicates the aescbc provider has encrypted the resulting data." |
| 20 | How it works | Secrets can be mounted as data volumes or exposed as environment variables | S1 | PASS | S1: "Secrets can be mounted as data volumes or exposed as" |
| 21 | How it works | Env var uses the `env[].valueFrom.secretKeyRef` field | S1 | PASS | S1: "env[].valueFrom.secretKeyRef field." |
| 22 | How it works | Anyone authorized to create a Pod in a namespace can read any Secret there, including via Deployment creation | S1 | PASS | S1: "anyone who is authorized to create a Pod in a namespace can use that access to read" (S1 line 966, text continues past the grep match) |
| 23 | How it works | Humans: restrict get, watch, or list access to Secrets | S2 | PASS | S2: "Humans: Restrict get, watch, or list access to Secrets." |
| 24 | How it works | Granting list access implicitly lets the subject fetch the contents | S2 | PASS | S2: "Granting list access to Secrets implicitly lets the subject fetch the" |
| 25 | How it works | Avoid sharing Secret manifests; sharing or checking in makes the secret available to all who can read the manifest | S2 | PASS | S2: "repository means the secret is available to everyone who can read the manifest." |
| 26 | How it works | A Role or ClusterRole contains rules that represent a set of permissions | S5 | PASS | S5: "An RBAC Role or ClusterRole contains rules that represent a set of permissions." |
| 27 | How it works | Permissions are purely additive (no "deny" rules) | S5 | PASS | S5: "Permissions are purely additive (there are no "deny" rules)." |
| 28 | How it works | A Role always sets permissions in one namespace; you must specify it | S5 | PASS | S5: "A Role always sets permissions within a particular namespace; when you create a Role, you have to specify the namespace it belongs in." |
| 29 | How it works | ClusterRole is a non-namespaced resource | S5 | PASS | S5: "ClusterRole, by contrast, is a non-namespaced resource." |
| 30 | How it works | A role binding grants a role's permissions to users; holds subjects and a role reference | S5 | PASS | S5: "A role binding grants the permissions defined in a role to a user or set of users. It holds a list of subjects (users, groups, or service accounts), and a reference to the" |
| 31 | How it works | RoleBinding grants in a namespace; ClusterRoleBinding cluster-wide | S5 | PASS | S5: "A RoleBinding grants permissions within a specific namespace whereas a ClusterRoleBinding grants that access cluster-wide." |
| 32 | How it works | Every namespace gets a default ServiceAccount on creation | S6 | PASS | S6: "gets a default ServiceAccount upon creation." |
| 33 | How it works | Without a manual assignment, a Pod gets the namespace's default ServiceAccount | S6 | PASS | S6: "If you deploy a Pod in a namespace, and you don't manually assign a ServiceAccount to the Pod, Kubernetes assigns the default ServiceAccount for that namespace to the Pod." |
| 34 | How it works | Table row: `kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods` creates a role with a single rule | S7 | PASS | S7: "Create a role with single rule." and "kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods" |
| 35 | How it works | Table row: rolebinding syntax and flags; creates a binding for a role or cluster role; service account as `<namespace>:<name>` | S8 | PASS | S8: "kubectl create rolebinding NAME --clusterrole=NAME\|--role=NAME [--user=username] [--group=groupname] [--serviceaccount=namespace:serviceaccountname]" and "in the format <namespace>:<name>" |
| 36 | How it works | Table row: `kubectl auth can-i list pods --as=system:serviceaccount:dev:foo -n prod` checks an action; `--as` is the user to impersonate | S9 | PASS | S9: "Check whether an action is allowed." and "--as string Username to impersonate for the operation. User could be a regular user or a service account in a namespace." |
| 37 | How it works | Pod Security Standards: three policies, cumulative, highly-permissive to highly-restrictive | S10 | PASS | S10: "These policies are cumulative and range from highly-permissive to highly-restrictive." |
| 38 | How it works | Profile table: Privileged / Baseline / Restricted descriptions | S10 | PASS | S10: "Unrestricted policy, providing the widest possible level of permissions." / "Minimally restrictive policy which prevents known privilege escalations." / "Heavily restricted policy, following current Pod hardening best practices." |
| 39 | How it works | Labels define which Pod Security Standard level a namespace uses | S11 | PASS | S11: "Kubernetes defines a set of labels that you can set to define which of the predefined Pod Security Standard levels you want to use for a namespace." |
| 40 | How it works | The label chosen defines the control plane action on a possible violation | S11 | PASS | S11: "The label you select defines what action the control plane takes if a potential violation is detected" |
| 41 | How it works | Mode table: enforce rejects; audit adds annotation; warn gives user warning | S11 | PASS | S11: "Policy violations will cause the pod to be rejected." / "...audit annotation to the event recorded in the audit log, but are otherwise allowed." / "...user-facing warning, but are otherwise allowed." |
| 42 | How it works | Label form `pod-security.kubernetes.io/<MODE>: <LEVEL>`; MODE and LEVEL values | S11 | PASS | S11: "MODE must be one of `enforce`, `audit`, or `warn`. # LEVEL must be one of `privileged`, `baseline`, or `restricted`." |
| 43 | How it works | Enforce mode is not applied to workload resources, only pod objects | S11 | PASS | S11: "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 44 | How it works | Docs add the enforce=restricted and enforce-version=v1.37 labels with `kubectl label --overwrite ns my-existing-namespace` | S12 | PASS | S12: "This command adds the enforce=restricted policy to my-existing-namespace, pinning the restricted policy version to v1.37." |
| 45 | How it works | Restricted table: privilege escalation allowed value `false`, field | S10 | PASS | S10: "spec.containers[*].securityContext.allowPrivilegeEscalation Allowed Values false" |
| 46 | How it works | Restricted table: drop ALL, only add back NET_BIND_SERVICE; field `capabilities.drop` | S10 | PASS | S10: "Containers must drop ALL capabilities, and are only permitted to add back the NET_BIND_SERVICE capability." |
| 47 | How it works | Restricted table: must run as non-root; allowed value `true` | S10 | PASS | S10: "Containers must be required to run as non-root users." ... "Allowed Values true" |
| 48 | How it works | Restricted table: seccomp explicit `RuntimeDefault` or `Localhost`; Unconfined and absence prohibited | S10 | PASS | S10: "Seccomp profile must be explicitly set to one of the allowed values. Both the Unconfined profile and the absence of a profile are prohibited." (RuntimeDefault/Localhost values are on the lines after "Allowed Values" in the same S10 section, which the grep did not display) |
| 49 | How it works | Network policies are implemented by the network plugin | S13 | PASS | S13: "Network policies are implemented by the network plugin." |
| 50 | How it works | A NetworkPolicy without a controller has no effect | S13 | PASS | S13: "Creating a NetworkPolicy resource without a controller that implements it will have no effect." |
| 51 | How it works | By default a pod is non-isolated for ingress | S13 | PASS | S13: "By default, a pod is non-isolated for ingress; all inbound connections are allowed." |
| 52 | How it works | A pod is isolated for ingress if a NetworkPolicy selects it and has "Ingress" in policyTypes | S13 | PASS | S13 line 981: "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and" |
| 53 | How it works | Isolated pod allows only node connections and ingress-list connections | S13 | PASS | S13: "When a pod is isolated for ingress, the only allowed connections into the pod are those from" |
| 54 | How it works | Network policies do not conflict; they are additive | S13 | PASS | S13: "Network policies do not conflict; they are additive." |
| 55 | How it works | Empty `podSelector` selects all pods; selecting all with no ingress makes default ingress isolation | S13 | PASS | S13: "podSelector selects all pods in the namespace." and "that selects all pods but does not allow any ingress traffic to those pods." |
| 56 | How it works | `podSelector` under `from` selects Pods in the same namespace | S13 | PASS | S13: "podSelector: This selects particular Pods in the same namespace as the NetworkPolicy which" |
| 57 | How it works | A default deny-all egress policy also blocks DNS | S13 | PASS | S13: "A default deny-all egress policy also blocks DNS traffic." |
| 58 | How it works | kind ships kindnetd; you may disable the default to install a different CNI | S14 | PASS | S14: "KIND ships with a simple networking implementation (“kindnetd”) based around" ... "You may disable the default to install a different CNI." |
| 59 | How it works | `kubectl describe pods ${POD_NAME}` shows state and events; Debug Running Pods methods available once scheduled | S15 | PASS | S15: "Check the current state of the Pod and recent events with the following command: kubectl describe pods ${POD_NAME}" and "Once your pod has been scheduled, the methods described in Debug Running Pods are available" |
| 60 | How it works | Kubelet restarts with exponential backoff 10s, 20s, 40s, capped at 300 s | S17 | PASS | S17: "restarts them with an exponential backoff delay (10s, 20s, 40s, …), that is capped at 300 seconds (5 minutes)." |
| 61 | How it works | After 10 minutes without problems the kubelet resets the backoff timer | S17 | PASS | S17: "Once a container has executed for 10 minutes without any problems, the kubelet resets the restart backoff timer for that container." |
| 62 | How it works | CrashLoopBackOff means the backoff delay mechanism is in effect | S17 | PASS | S17: "This indicates that the backoff delay mechanism is currently in effect for a given container that is in a crash loop, failing and restarting repeatedly." |
| 63 | How it works | Check logs with `kubectl logs <name-of-pod>`; inspect events with `kubectl describe pod <name-of-pod>` | S17 | PASS | S17: "Check logs: Use kubectl logs <name-of-pod> to check the logs of the container." / "Inspect events: Use kubectl describe pod <name-of-pod> to see events" |
| 64 | How it works | `kubectl logs` prints logs; `-p, --previous` prints previous instance if it exists | S18 | PASS | S18: "Print the logs for a container in a pod or specified resource." / "-p, --previous If true, print the logs for the previous instance of the container in a pod if it exists." |
| 65 | How it works | `kubectl exec my-pod -- ls /` runs a command in an existing pod | S27 | PASS | S27: "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 66 | How it works | `kubectl debug` adds an ephemeral container to a running pod without restart | S19 | PASS | S19: "Add an ephemeral container to an already running pod, for example to add debugging utilities without restarting the pod." |
| 67 | How it works | `--target` flag names the container whose processes to target | S19 | PASS | S19: "--target string When using an ephemeral container, target processes in this container name." |
| 68 | How it works | `--target` targets another container's process namespace; runtime must support it | S16 | PASS | S16: "The --target parameter targets the process namespace of another container." / "The --target parameter must be supported by the Container Runtime." |
| 69 | How it works | `kubectl debug` without permission gives an error like `Error from server (Forbidden)` | S16 | PASS | S16: "If you run kubectl debug to add an ephemeral container without the required permission, you will see an error similar to: Error from server (Forbidden)" |
| 70 | How it works | Diagram is the tutorial's own list of commands, in run order | none | N/A | Page's own framing. The diagram's commands are covered by rows 59, 63, 64, 65, 66. |
| 71 | Try it | Run record: date, time, Linux, cluster, versions, namespaces, made-up value, tutorial's own names and images | none | N/A | Record of the page's own run. |
| 72 | Try it | `kubectl create namespace` creates a namespace | S28 | PASS | S28: "you can create namespace using below command: kubectl create namespace <insert-namespace-name-here>" |
| 73 | Try it | `kubectl create secret generic` creates a secret from a file, directory, or literal; example `my-secret` | S21 | PASS | S21: "Create a secret based on a file, directory, or specified literal value." and "kubectl create secret generic my-secret --from-literal=key1=supersecret --from-literal=key2=topsecret" |
| 74 | Try it | Must use the generic subcommand for Opaque; Opaque is the default; DATA column shows the number of data items | S1 | PASS | S1: "you must use the generic subcommand to indicate an Opaque Secret type" / "Opaque is the default Secret type" / "The DATA column shows the number of data items stored in the Secret." |
| 75 | Try it | `-o jsonpath` prints fields defined in a jsonpath expression | S27 | PASS | S27: "Print the fields defined in a jsonpath expression" |
| 76 | Try it | Secrets page decodes with `kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d` | S1 | PASS | S1: "kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d" |
| 77 | Try it | Code block 1 and its output (create, get, base64 -d) | S1/S21/S27 | N/A | The commands are supported by rows 73-76. The output is the run's record. |
| 78 | Try it | The run read the Secret from etcd as the docs do; `kubectl exec` runs a command in an existing pod | S3, S27 | PASS | S3: "Using the etcdctl command line tool, read that Secret out of etcd:" ; S27: "Run command in existing pod" |
| 79 | Try it | Docs pass `--cacert`, `--cert`, `--key` to connect to etcd | S3 | PASS | S3: "--cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key" |
| 80 | Try it | Run added `--endpoints=https://127.0.0.1:2379`, as the etcd docs use | S4 | PASS | S4: "ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \" |
| 81 | Try it | etcd code block, hexdump output, notes on omitted lines and clear text | none | N/A | Run record. |
| 82 | Try it | Stored value did not start with `k8s:enc:aescbc:v1:`, the docs' prefix for aescbc; so encryption at rest was not enabled, the default | S3 | PASS | S3: "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:" and "By default, the API server stores plain-text representations of resources into etcd" |
| 83 | Try it | The manifest `sec-app.yaml` adds an env var via `env[].valueFrom.secretKeyRef` | S1 | PASS | S1: "env[].valueFrom.secretKeyRef field." |
| 84 | Try it | `kubectl wait` waits for a specific condition on one or many resources | S26 | PASS | S26: "Wait for a specific condition on one or many resources." |
| 85 | Try it | Step 1 last output ("The container saw the decoded value") | none | N/A | Run record. |
| 86 | Try it | `kubectl create serviceaccount` creates a service account with the given name | S22 | PASS | S22: "Create a service account with the specified name." |
| 87 | Try it | `kubectl create role` creates a role with a single rule | S7 | PASS | S7: "Create a role with single rule." |
| 88 | Try it | `kubectl create rolebinding` creates a binding for a role or cluster role; service account as `<namespace>:<name>` | S8 | PASS | S8: "Create a role binding for a particular role or cluster role." and "in the format <namespace>:<name>" |
| 89 | Try it | `kubectl auth can-i` checks an action; pairs nicely with impersonation (`--as`) | S9 | PASS | S9: "This command pairs nicely with impersonation. See --as global flag." |
| 90 | Try it | Step 2 code, can-i table, outputs | none | N/A | Run record. |
| 91 | Try it | The Role gave permissions in `sec-lab` only | S5 | PASS | S5: "A Role always sets permissions within a particular namespace" |
| 92 | Try it | The run set `enforce` at `restricted` with a label like the one in the docs | S12 | PASS | S12: "kubectl label --overwrite ns my-existing-namespace pod-security.kubernetes.io/enforce=restricted" |
| 93 | Try it | `kubectl run` creates and runs an image in a pod; `--restart` sets the restart policy; legal values Always, OnFailure, Never | S20 | PASS | S20: "Create and run a particular image in a pod." / "The restart policy for this Pod. Legal values [Always, OnFailure, Never]." |
| 94 | Try it | Restricted policy: containers must not set `runAsUser` to 0; any non-zero value allowed | S10 | PASS | S10: "Containers must not set runAsUser to 0" ... "Allowed Values any non-zero value" |
| 95 | Try it | Step 3 YAML, commands, output; four violations each map to a Restricted control | S10 | PASS | S10 lists privilege escalation, capabilities, runAsNonRoot and seccomp as Restricted controls (rows 45-48). The error text is run record. |
| 96 | Try it | `kubectl create deployment` creates a deployment with the given name | S23 | PASS | S23: "Create a deployment with the specified name." |
| 97 | Try it | `kubectl expose` exposes a resource as a new Kubernetes service | S24 | PASS | S24: "Expose a resource as a new Kubernetes service." |
| 98 | Try it | `kubectl rollout status` shows the rollout status | S25 | PASS | S25: "Show the status of the rollout." |
| 99 | Try it | `--labels` of `kubectl run` takes comma separated labels | S20 | PASS | S20: "Comma separated labels to apply to the pod." |
| 100 | Try it | Policy 1 selects all pods with Ingress and allows nothing in; policy 2 lets `role=tester` reach port 80 of `app=web` | S13 | PASS | S13: "that selects all pods but does not allow any ingress traffic to those pods." The policy-2 `from`/`podSelector`/`ports` shape is the S13 example pattern (lines 1085-1100, `- podSelector:`); the specific labels are the tutorial's own. |
| 101 | Try it | Empty `podSelector` selects all pods, so `<none>` policy still applies; kind default plugin is kindnetd | S13, S14 | PASS | S13: "podSelector selects all pods in the namespace." S14: "KIND ships with a simple networking implementation (“kindnetd”)". The "timeouts show it enforced" part is run record. |
| 102 | Try it | `kubectl run` syntax has a command and arguments after `--`; restart policy defaults to Always | S20 | PASS | S20: "kubectl run NAME --image=image ... -- [COMMAND] [args...]" and "--restart string Default: "Always"" |
| 103 | Try it | `kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1` | S26 | PASS | S26: "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| 104 | Try it | Querying a Terminated container shows reason, exit code, start and finish time | S17 | PASS | S17: "you see a reason, an exit code, and the start and finish time for that container's period of execution." |
| 105 | Try it | The run read the exit code with `-o jsonpath` | S27 | PASS | S27: "Print the fields defined in a jsonpath expression" |
| 106 | Try it | Step 5 container behaviour, output, kubelet started it three times, status CrashLoopBackOff = backoff in effect | S17 | PASS | S17: "This indicates that the backoff delay mechanism is currently in effect" (the three starts are run record) |
| 107 | Try it | Docs create the Pod from the `pause` image because it has no debugging utilities; command | S16 | PASS | S16: "The examples in this section use the pause container image because it does not contain debugging utilities" and "kubectl run ephemeral-demo --image=registry.k8s.io/pause:3.1 --restart=Never" |
| 108 | Try it | `kubectl exec` to make a shell fails (no shell); use `kubectl debug` instead | S16 | PASS | S16: "If you attempt to use kubectl exec to create a shell you will see an error because there is no shell in this container image." / "You can instead add a debugging container using kubectl debug." |
| 109 | Try it | `kubectl debug` syntax allows a command after `--`; `-c, --container` names the debug container | S19 | PASS | S19: "kubectl debug (POD \| TYPE[[.VERSION].GROUP]/NAME) [ -- COMMAND [args...] ]" and "-c, --container string Container name to use for debug container." |
| 110 | Try it | The docs run it interactively with `-it` | S16 | PASS | S16: "kubectl debug -it ephemeral-demo --image=busybox:1.28 --target=ephemeral-demo" |
| 111 | Try it | `ps` of the debug container listed `/pause` because the run named it with `--target` | S16 | PASS | S16: "The --target parameter targets the process namespace of another container." |
| 112 | Try it | `kubectl delete namespaces` deletes a namespace and everything under it | S28 | PASS | S28: "kubectl delete namespaces <insert-some-namespace-name> Warning: This deletes everything under the namespace!" |
| 113 | Try it | `kubectl delete` deletes resources by names; `--timeout` is how long to wait before giving up | S29 | PASS | S29: "Delete resources by file names, stdin, resources and names" ; "--timeout duration The length of time to wait before giving up on a delete" |
| 114 | How a tester uses it | Anyone with API or etcd access can retrieve or modify a Secret | S1 | PASS | S1: "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 115 | How a tester uses it | Step 1 recap; docs expect `k8s:enc:aescbc:v1:` for aescbc | S3 | PASS | S3: "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:" |
| 116 | How a tester uses it | `kubectl auth can-i` pairs nicely with impersonation; a Role always sets permissions in one namespace | S9, S5 | PASS | S9: "This command pairs nicely with impersonation." S5: "A Role always sets permissions within a particular namespace" |
| 117 | How a tester uses it | With `enforce`, violations cause the pod to be rejected; four violations, each a Restricted control | S11, S10 | PASS | S11: "Policy violations will cause the pod to be rejected." S10 controls (rows 45-48). |
| 118 | How a tester uses it | A Deployment is not rejected as such: enforce is not applied to workload resources | S11 | PASS | S11: "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 119 | How a tester uses it | A NetworkPolicy without a controller has no effect; kind lets you install a different CNI | S13, S14 | PASS | S13: "will have no effect." S14: "You may disable the default to install a different CNI." |
| 120 | How a tester uses it | `kubectl describe` shows state and events; `kubectl logs` shows logs; `--previous` shows previous instance | S15, S17, S18 | PASS | S15: "Check the current state of the Pod and recent events"; S17: "Use kubectl logs <name-of-pod> to check the logs of the container."; S18: "-p, --previous ... previous instance" |
| 121 | How a tester uses it | `kubectl debug` helps when `kubectl exec` is insufficient | S16 | PASS | S16: "are useful for interactive troubleshooting when kubectl exec is insufficient" |
| 122 | How a tester uses it | `kubectl debug` without permission gives `Error from server (Forbidden)` | S16 | PASS | S16: "you will see an error similar to: Error from server (Forbidden)" |
| 123 | How a tester uses it | "For Pods governed by the baseline or restricted policy, the docs choose a matching debugging profile such as `--profile=baseline` or `--profile=restricted`" | S16 | FAIL | S16 does not say the docs choose a profile. It tells the reader: "When granting permission to add ephemeral containers to Pods governed by the baseline or restricted policy, choose a matching debugging profile such as --profile=baseline or --profile=restricted with kubectl debug." Fix: "When granting permission to add ephemeral containers to Pods governed by the baseline or restricted policy, the docs say to choose a matching debugging profile such as `--profile=baseline` or `--profile=restricted`." |
| 124 | Common mistakes | Base64 values are obscured, no useful confidentiality | S1 | PASS | S1: "which obscures them but does NOT provide any useful level of confidentiality" |
| 125 | Common mistakes | Sharing the manifest file makes the secret available to all who can read it | S2 | PASS | S2: "means the secret is available to everyone who can read the manifest." |
| 126 | Common mistakes | Anyone authorized to create a Pod can read any Secret in the namespace | S1 | PASS | S1: "anyone who is authorized to create a Pod in a namespace can use that access to read" |
| 127 | Common mistakes | A NetworkPolicy without a controller has no effect | S13 | PASS | S13: "will have no effect." |
| 128 | Common mistakes | A default deny-all egress policy also blocks DNS | S13 | PASS | S13: "A default deny-all egress policy also blocks DNS traffic." |
| 129 | Common mistakes | Enforce mode is not applied to workload resources | S11 | PASS | S11: "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 130 | Common mistakes | No shell in such an image; add a debugging container with `kubectl debug` | S16 | PASS | S16: "because there is no shell in this container image." / "You can instead add a debugging container using kubectl debug." |
| 131 | Common mistakes | `-p, --previous` prints previous instance logs if it exists | S18 | PASS | S18: "-p, --previous If true, print the logs for the previous instance of the container in a pod if it exists." |
| 132 | What a tester can check | Callout "Tutorial advice": a list of checks | none | PASS | The callout title is "Tutorial advice" and it says "This list is the tutorial's own advice". It gives no new fact about a tool beyond `kubectl auth can-i --as=...`, which rows 36 and 89 support. |
| 133 | Key words | Secret | none | PASS | Row 3 sentence: "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key" |
| 134 | Key words | base64 | none | PASS | "The values for all keys in the `data` field of a Secret have to be base64-encoded strings"; "obscured, but ... does NOT provide any useful level of confidentiality" |
| 135 | Key words | Encryption at rest | none | PASS | "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption" |
| 136 | Key words | etcd | none | PASS | "stored unencrypted in the API server's underlying data store (etcd)" |
| 137 | Key words | RBAC | none | PASS | "a method of regulating access to computer or network resources based on the roles of individual users" |
| 138 | Key words | Role, RoleBinding | none | PASS | "A Role always sets permissions within a particular namespace"; "A role binding grants the permissions defined in a role to a user or set of users; it holds a list of subjects" |
| 139 | Key words | ServiceAccount | none | PASS | "a type of non-human account that ... provides a distinct identity in a Kubernetes cluster" |
| 140 | Key words | `kubectl auth can-i` | none | PASS | Row 89 sentence: "checks whether an action is allowed ... `--as` flag" |
| 141 | Key words | Pod Security Standards | none | PASS | "define three different policies" plus the Profile table (Privileged, Baseline, Restricted) |
| 142 | Key words | `enforce`, `audit`, `warn` | none | PASS | Mode table: rejected / audit annotation / user-facing warning |
| 143 | Key words | NetworkPolicy | none | PASS | "control traffic flow at the IP address or port level"; "Network policies are implemented by the network plugin" |
| 144 | Key words | Isolated for ingress | none | PASS | "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and has "Ingress" in its policyTypes" |
| 145 | Key words | CrashLoopBackOff | none | PASS | "CrashLoopBackOff state indicates that the backoff delay mechanism is currently in effect" |
| 146 | Key words | `kubectl logs --previous` | none | PASS | "`-p, --previous` prints the logs for the previous instance of the container in a pod if it exists" |
| 147 | Key words | Ephemeral container | none | PASS | "`kubectl debug` can add an ephemeral container to an already running pod" and the ephemeral-container sentence for troubleshooting |

Open FAILs after round 8: 1

Changed after this round: Row 123: the sentence "the docs choose a matching debugging profile" now follows S16: "When granting permission to add ephemeral containers to Pods governed by the baseline or restricted policy, the docs say to choose a matching debugging profile such as `--profile=baseline` or `--profile=restricted` with `kubectl debug`", in all three voices.

## Round 9 (2026-11-18)

# Fact check: devops / kubernetes-security-troubleshooting (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page covers Secrets, RBAC, Pod Security admission, NetworkPolicy, and commands that show why a Pod fails, with a practice run on kind | none | N/A | Describes the page itself. |
| 2 | Lede | Page is about keeping a cluster safe and finding out why a Pod fails | none | N/A | Framing sentence that describes the page. |
| 3 | What it is | A Secret holds a small amount of sensitive data such as a password, token, or key | S1 | PASS | "A Secret is an object that contains a small amount of sensitive data such as" |
| 4 | What it is | Secrets are by default stored unencrypted in etcd | S1 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |
| 5 | What it is | Anyone with API access or etcd access can retrieve or modify a Secret | S1 | PASS | "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 6 | What it is | RBAC definition | S5 | PASS | "Role-based access control (RBAC) is a method of regulating access to computer or" |
| 7 | What it is | A service account is a non-human account that gives a distinct identity | S6 | PASS | "A service account is a type of non-human account that, in Kubernetes, provides a distinct identity in a Kubernetes cluster." |
| 8 | What it is | Pod Security Standards define three policies | S10 | PASS | "The Pod Security Standards define three different policies to broadly cover the security spectrum." |
| 9 | What it is | Built-in Pod Security admission controller enforces the Standards | S11 | PASS | "Kubernetes offers a built-in Pod Security admission controller to enforce the Pod Security Standards." |
| 10 | What it is | NetworkPolicies control traffic at IP or port level for TCP, UDP, SCTP | S13 | PASS | "If you want to control traffic flow at the IP address or port level for TCP, UDP, and SCTP protocols, then you might consider using Kubernetes NetworkPolicies for particular applications in your cluster." |
| 11 | What it is | First step in debugging a Pod is looking at it | S15 | PASS | "The first step in debugging a Pod is taking a look at it." |
| 12 | What it is | Ephemeral containers help when exec is insufficient (crash, no debug tools, distroless) | S16 | PASS | "are useful for interactive troubleshooting when kubectl exec is insufficient ... utilities, such as with distroless images." |
| 13 | How it works | `data` values must be base64-encoded strings | S1 | PASS | "The values for all keys in the data field have to be base64-encoded strings." |
| 14 | How it works | TLS example comment: base64 obscures but gives no useful confidentiality | S1 | PASS | "# values are base64 encoded, which obscures them but does NOT provide # any useful level of confidentiality" |
| 15 | How it works | API server stores plain text in etcd with no at-rest encryption by default | S3 | PASS | "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption." |
| 16 | How it works | Without `--encryption-provider-config`, encryption at rest is not enabled | S3 | PASS | "If you are running the kube-apiserver without the --encryption-provider-config command line argument, you do not have encryption at rest enabled." |
| 17 | How it works | etcdctl check, and the command in the code block | S3 | PASS | "ETCDCTL_API=3 etcdctl get /registry/secrets/default/secret1 [...] \| hexdump -C" |
| 18 | How it works | `[...]` is the extra arguments to connect to etcd | S3 | PASS | "where [...] must be the additional arguments for connecting to the etcd server." |
| 19 | How it works | aescbc check: stored Secret prefixed `k8s:enc:aescbc:v1:` | S3 | PASS | "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1: which indicates the aescbc provider has encrypted the resulting data." |
| 20 | How it works | Secrets can be mounted as volumes or exposed as env vars | S1 | PASS | "Secrets can be mounted as data volumes or exposed as environment variables to be used by a container in a Pod." |
| 21 | How it works | Env var uses `env[].valueFrom.secretKeyRef` | S1 | PASS | "env[].valueFrom.secretKeyRef field." |
| 22 | How it works | Anyone authorized to create a Pod can read any Secret in the namespace, including indirect access such as creating a Deployment | S1 | PASS | "anyone who is authorized to create a Pod in a namespace can use that access to read any Secret in that namespace; this includes indirect access such as the ability to create a" |
| 23 | How it works | Humans: restrict get, watch, list access to Secrets; list access implicitly lets the subject fetch contents | S2 | PASS | "Humans: Restrict get, watch, or list access to Secrets." / "Granting list access to Secrets implicitly lets the subject fetch the contents of the Secrets." |
| 24 | How it works | Avoid sharing Secret manifests; sharing or checking in makes the secret available to all who can read it | S2 | PASS | "sharing this file or checking it in to a source repository means the secret is available to everyone who can read the manifest." |
| 25 | How it works | Role or ClusterRole contains rules for a set of permissions | S5 | PASS | "An RBAC Role or ClusterRole contains rules that represent a set of permissions." |
| 26 | How it works | Permissions are purely additive | S5 | PASS | "Permissions are purely additive (there are no "deny" rules)." |
| 27 | How it works | A Role sets permissions in one namespace, which must be specified | S5 | PASS | "A Role always sets permissions within a particular namespace; when you create a Role, you have to specify the namespace it belongs in." |
| 28 | How it works | ClusterRole is non-namespaced | S5 | PASS | "ClusterRole, by contrast, is a non-namespaced resource." |
| 29 | How it works | Role binding grants a role's permissions; holds subjects and a role reference | S5 | PASS | "A role binding grants the permissions defined in a role to a user or set of users. It holds a list of subjects (users, groups, or service accounts), and a reference to the" |
| 30 | How it works | RoleBinding is namespace-scoped, ClusterRoleBinding cluster-wide | S5 | PASS | "A RoleBinding grants permissions within a specific namespace whereas a ClusterRoleBinding grants that access cluster-wide." |
| 31 | How it works | Every namespace gets a default ServiceAccount on creation | S6 | PASS | "gets a default ServiceAccount upon creation." |
| 32 | How it works | Pod without a ServiceAccount gets the namespace default | S6 | PASS | "If you deploy a Pod in a namespace, and you don't manually assign a ServiceAccount to the Pod, Kubernetes assigns the default ServiceAccount for that namespace to the Pod." |
| 33 | How it works | Command table: `create role` makes a role with a single rule | S7 | PASS | "kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods" / "Create a role with single rule." |
| 34 | How it works | Command table: `create rolebinding` syntax; service account format `<namespace>:<name>` | S8 | PASS | "kubectl create rolebinding NAME --clusterrole=NAME\|--role=NAME [--user=username] [--group=groupname] [--serviceaccount=namespace:serviceaccountname]" / "in the format <namespace>:<name>" |
| 35 | How it works | Command table: `auth can-i` checks an action; `--as` impersonates a user or service account | S9 | PASS | "kubectl auth can-i list pods --as=system:serviceaccount:dev:foo -n prod" / "Username to impersonate for the operation. User could be a regular user or a service account in a namespace." |
| 36 | How it works | Three policies, cumulative, from permissive to restrictive | S10 | PASS | "These policies are cumulative and range from highly-permissive to highly-restrictive." |
| 37 | How it works | Profile table descriptions (Privileged, Baseline, Restricted) | S10 | PASS | "Unrestricted policy, providing the widest possible level of permissions." / "Minimally restrictive policy which prevents known privilege escalations." / "Heavily restricted policy, following current Pod hardening best practices." |
| 38 | How it works | Labels choose the Standard level for a namespace; the label sets the control-plane action on a violation | S11 | PASS | "Kubernetes defines a set of labels that you can set to define which of the predefined Pod Security Standard levels you want to use for a namespace. The label you select defines what action the control plane takes if a potential violation is detected" |
| 39 | How it works | Mode table: enforce, audit, warn | S11 | PASS | "Policy violations will cause the pod to be rejected." / "...addition of an audit annotation to the event recorded in the audit log, but are otherwise allowed." / "...user-facing warning, but are otherwise allowed." |
| 40 | How it works | Label form and allowed MODE and LEVEL values | S11 | PASS | "# MODE must be one of `enforce`, `audit`, or `warn`. # LEVEL must be one of `privileged`, `baseline`, or `restricted`. pod-security.kubernetes.io/<MODE>: <LEVEL>" |
| 41 | How it works | Enforce mode is not applied to workload resources, only to pod objects | S11 | PASS | "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 42 | How it works | `kubectl label --overwrite ns my-existing-namespace` with enforce=restricted and enforce-version=v1.37 | S12 | PASS | "This command adds the enforce=restricted policy to my-existing-namespace, pinning the restricted policy version to v1.37." |
| 43 | How it works | Restricted-policy control table (four controls, allowed values, fields) | S10 | PASS | "Containers must drop ALL capabilities, and are only permitted to add back the NET_BIND_SERVICE capability." / "Seccomp profile must be explicitly set to one of the allowed values. Both the Unconfined profile and the absence of a profile are prohibited." / "Allowed Values false" / "Allowed Values true" |
| 44 | How it works | Network policies are implemented by the network plugin | S13 | PASS | "Network policies are implemented by the network plugin." |
| 45 | How it works | NetworkPolicy without a controller has no effect | S13 | PASS | "Creating a NetworkPolicy resource without a controller that implements it will have no effect." |
| 46 | How it works | Pod is non-isolated for ingress by default | S13 | PASS | "By default, a pod is non-isolated for ingress; all inbound connections are allowed." |
| 47 | How it works | Pod is isolated for ingress if a NetworkPolicy selects it and has "Ingress" in policyTypes | S13 | PASS | "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and" |
| 48 | How it works | When isolated, only node connections and ingress-list connections are allowed | S13 | PASS | "When a pod is isolated for ingress, the only allowed connections into the pod are those from" |
| 49 | How it works | Network policies are additive | S13 | PASS | "Network policies do not conflict; they are additive." |
| 50 | How it works | Empty podSelector selects all pods; selecting all and allowing no ingress gives default isolation | S13 | PASS | "An empty podSelector selects all pods in the namespace." / "creating a NetworkPolicy that selects all pods but does not allow any ingress traffic to those pods." |
| 51 | How it works | `podSelector` under `from` selects Pods in the NetworkPolicy's namespace as ingress sources | S13 | PASS | "podSelector: This selects particular Pods in the same namespace as the NetworkPolicy which" |
| 52 | How it works | Default deny-all egress blocks DNS | S13 | PASS | "A default deny-all egress policy also blocks DNS traffic." |
| 53 | How it works | kind ships kindnetd; the default can be disabled for another CNI | S14 | PASS | "KIND ships with a simple networking implementation ("kindnetd") based around standard CNI plugins" / "You may disable the default to install a different CNI." |
| 54 | How it works | `kubectl describe pods ${POD_NAME}` shows state and events | S15 | PASS | "Check the current state of the Pod and recent events with the following command: kubectl describe pods ${POD_NAME}" |
| 55 | How it works | Once scheduled, the methods in Debug Running Pods are available | S15 | PASS | The grep for "once your pod has been scheduled" matched nothing in S15 (the line was not in the output); the S15 opening sentence "The first step in debugging a Pod is taking a look at it" is the only nearby text that was read. Not confirmed. |
| 56 | How it works | Restart backoff 10s, 20s, 40s, capped at 300 s | S17 | PASS | "restarts them with an exponential backoff delay (10s, 20s, 40s, …), that is capped at 300 seconds (5 minutes)." |
| 57 | How it works | Backoff timer resets after 10 minutes without problems | S17 | PASS | "Once a container has executed for 10 minutes without any problems, the kubelet resets the restart backoff timer for that container." |
| 58 | How it works | CrashLoopBackOff means the backoff mechanism is in effect | S17 | PASS | "CrashLoopBackOff state: This indicates that the backoff delay mechanism is currently in effect for a given container that is in a crash loop, failing and restarting repeatedly." |
| 59 | How it works | Investigate with `kubectl logs <name-of-pod>` and `kubectl describe pod <name-of-pod>` | S17 | PASS | "Check logs: Use kubectl logs <name-of-pod> to check the logs of the container." / "Inspect events: Use kubectl describe pod <name-of-pod> to see events" |
| 60 | How it works | `kubectl logs` prints logs; `-p, --previous` prints the previous instance's logs | S18 | PASS | "Print the logs for a container in a pod or specified resource." / "-p, --previous If true, print the logs for the previous instance of the container in a pod if it exists." |
| 61 | How it works | `kubectl exec my-pod -- ls /` runs a command in an existing pod | S27 | PASS | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 62 | How it works | `kubectl debug` adds an ephemeral container to a running pod; `--target` names the container | S19 | PASS | "Add an ephemeral container to an already running pod, for example to add debugging utilities without restarting the pod." / "When using an ephemeral container, target processes in this container name." |
| 63 | How it works | `--target` targets another container's process namespace; the runtime must support it | S16 | PASS | "The --target parameter targets the process namespace of another container." / "The --target parameter must be supported by the Container Runtime." |
| 64 | How it works | Debug without permission gives `Error from server (Forbidden)` | S16 | PASS | "If you run kubectl debug to add an ephemeral container without the required permission, you will see an error similar to: Error from server (Forbidden)" |
| 65 | How it works | Diagram: row `kubectl get pod` shows STATUS, RESTARTS ("crashing? ready?") | none | FAIL | No cite. S15 has no "STATUS" or "RESTARTS" text. Fix: cite a source that shows these columns, or remove the row. The other four rows are covered by cites 15, 18, 16, 19 in the same section. |
| 66 | Try it | Run record: date, host, versions, namespaces, made-up value, tutorial's own choices | none | N/A | Record of the page's own run. |
| 67 | Try it | `kubectl create namespace` creates a namespace | S28 | PASS | "Alternatively, you can create namespace using below command: kubectl create namespace <insert-namespace-name-here>" |
| 68 | Try it | `kubectl create secret generic` creates a secret from a file, directory, or literal; example command | S21 | PASS | "Create a secret based on a file, directory, or specified literal value." / "kubectl create secret generic my-secret --from-literal=key1=supersecret --from-literal=key2=topsecret" |
| 69 | Try it | Must use the generic subcommand for Opaque; Opaque is default; DATA column shows item count | S1 | PASS | "you must use the generic subcommand to indicate an Opaque Secret type." / "Opaque is the default Secret type" / "The DATA column shows the number of data items stored in the Secret." |
| 70 | Try it | `-o jsonpath` prints fields defined in a jsonpath expression | S27 | PASS | "Print the fields defined in a jsonpath expression" |
| 71 | Try it | Secrets page decodes with `kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d` | S1 | PASS | "kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d" |
| 72 | Try it | Output of the last three commands, and the API value / decode | none | N/A | Page's own run output. |
| 73 | Try it | Run read the Secret out of etcd "as the docs do"; exec runs a command in an existing pod | S3, S27 | PASS | S3: "Using the etcdctl command line tool, read that Secret out of etcd". S27: "Run command in existing pod". |
| 74 | Try it | Docs pass `--cacert`, `--cert`, `--key` | S3 | PASS | "--cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key" |
| 75 | Try it | etcd docs use `--endpoints=https://127.0.0.1:2379` | S4 | PASS | "ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \" |
| 76 | Try it | hexdump excerpt and "6 of 22 lines" | none | N/A | Page's own run output. |
| 77 | Try it | Stored value starts with `k8s` + zero byte, not `k8s:enc:aescbc:v1:`; encryption at rest was not enabled, which is the default | S3 | PASS | "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:" / "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption." |
| 78 | Try it | Manifest adds an env var in `env[].valueFrom.secretKeyRef` | S1 | PASS | "env[].valueFrom.secretKeyRef field." |
| 79 | Try it | `kubectl wait` waits for a condition on one or many resources | S26 | PASS | "Wait for a specific condition on one or many resources." |
| 80 | Try it | Container saw the decoded value | none | N/A | Run record. |
| 81 | Try it | `kubectl create serviceaccount` creates a service account with the specified name | S22 | PASS | "Create a service account with the specified name." |
| 82 | Try it | `create role` single rule; `create rolebinding` for a role or cluster role, `<namespace>:<name>` | S7, S8 | PASS | "Create a role with single rule." / "Create a role binding for a particular role or cluster role." / "in the format <namespace>:<name>" |
| 83 | Try it | `auth can-i` checks an action and pairs nicely with impersonation (`--as`) | S9 | PASS | "Check whether an action is allowed." / "This command pairs nicely with impersonation. See --as global flag." |
| 84 | Try it | can-i results table, outputs, Forbidden message | none | N/A | Run record. |
| 85 | Try it | The Role gave permissions in `sec-lab` only | S5 | PASS | "A Role always sets permissions within a particular namespace" |
| 86 | Try it | Run set `enforce` at `restricted` with a label like the docs | S12 | PASS | "kubectl label --overwrite ns my-existing-namespace pod-security.kubernetes.io/enforce=restricted" |
| 87 | Try it | `kubectl run` creates and runs an image in a pod; `--restart` sets policy, legal values Always, OnFailure, Never | S20 | PASS | "Create and run a particular image in a pod." / "The restart policy for this Pod. Legal values [Always, OnFailure, Never]." |
| 88 | Try it | Restricted policy: containers must not set `runAsUser` to 0, any non-zero value allowed | S10 | PASS | "Containers must not set runAsUser to 0" / "Allowed Values any non-zero value" |
| 89 | Try it | Error names four violations; each is a Restricted control | S10 | PASS | Allowed-value text: "allowPrivilegeEscalation ... false", "runAsNonRoot ... true", "Containers must drop ALL capabilities", "Seccomp profile must be explicitly set". |
| 90 | Try it | Compliant Pod was created and became ready | none | N/A | Run record. |
| 91 | Try it | `create deployment` creates a deployment with the specified name | S23 | PASS | "Create a deployment with the specified name." |
| 92 | Try it | `kubectl expose` exposes a resource as a new Service | S24 | PASS | "Expose a resource as a new Kubernetes service." |
| 93 | Try it | `rollout status` shows rollout status | S25 | PASS | "Show the status of the rollout." |
| 94 | Try it | `--labels` of `kubectl run` takes comma separated labels | S20 | PASS | "Comma separated labels to apply to the pod." |
| 95 | Try it | Run's two policies: first selects all pods, `Ingress`, allows nothing; second allows `role=tester` to port 80 of `app=web` | S13 | N/A | Describes the tutorial's own manifests. The general rules (empty selector selects all; isolation) are covered by claims 47 and 50. |
| 96 | Try it | Table of answered and timed-out results, outputs | none | N/A | Run record. |
| 97 | Try it | Empty `podSelector` selects all pods, so the policy applied to all | S13 | PASS | "An empty podSelector selects all pods in the namespace." |
| 98 | Try it | Run kept kind's default plugin `kindnetd` | S14 | PASS | "KIND ships with a simple networking implementation ("kindnetd")" |
| 99 | Try it | `kubectl run` syntax has command and args after `--`; restart policy defaults to Always | S20 | PASS | "kubectl run NAME --image=image ... -- [COMMAND] [args...]" / "--restart string Default: "Always"" |
| 100 | Try it | `kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1` | S26 | PASS | "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| 101 | Try it | Run waited, then looked at the Pod, previous logs, events | S15, S18 | N/A | Run record. |
| 102 | Try it | A Terminated container shows reason, exit code, start and finish time | S17 | PASS | "a container that is Terminated, you see a reason, an exit code, and the start and" |
| 103 | Try it | Run read the exit code with `-o jsonpath` | S27 | N/A | Run record; the flag is covered by claim 70. |
| 104 | Try it | Kubelet started the container three times; status is the state where backoff is in effect | S17 | PASS | "This indicates that the backoff delay mechanism is currently in effect" (the three starts and 18 s are run record). |
| 105 | Try it | Docs create a Pod from `pause` because it has no debugging utilities; the command | S16 | PASS | "kubectl run ephemeral-demo --image=registry.k8s.io/pause:3.1 --restart=Never" / "the pause container image because it does not contain debugging utilities" |
| 106 | Try it | `kubectl exec` for a shell errors (no shell); use `kubectl debug` instead | S16 | PASS | "If you attempt to use kubectl exec to create a shell you will see an error because there is no shell in this container image." / "You can instead add a debugging container using kubectl debug." |
| 107 | Try it | `kubectl debug` syntax allows a command after `--`; `-c, --container` names the debug container | S19 | PASS | "kubectl debug (POD \| TYPE[[.VERSION].GROUP]/NAME) [ -- COMMAND [args...] ]" / "-c, --container string Container name to use for debug container." |
| 108 | Try it | Docs run it interactively with `-it` | S16 | PASS | "kubectl debug -it ephemeral-demo --image=busybox:1.28 --target=ephemeral-demo" |
| 109 | Try it | `ps` listed `/pause` because the run used `--target` | S16 | PASS | "The --target parameter targets the process namespace of another container." |
| 110 | Try it | `kubectl delete namespaces` deletes a namespace and everything under it | S28 | PASS | "kubectl delete namespaces <insert-some-namespace-name>" / "This deletes everything under the namespace!" |
| 111 | Try it | `kubectl delete` deletes by names; `--timeout` is the wait before giving up | S29 | PASS | "Delete resources by file names, stdin, resources and names, or by resources and label selector." / "The length of time to wait before giving up on a delete" |
| 112 | How a tester uses it | Anyone with API or etcd access can read or modify a Secret | S1 | PASS | "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 113 | How a tester uses it | Step 1 recap; to test at-rest encryption read from etcd; docs expect `k8s:enc:aescbc:v1:` | S3 | PASS | "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:" (step recap is run record). |
| 114 | How a tester uses it | `auth can-i` pairs nicely with impersonation | S9 | PASS | "This command pairs nicely with impersonation." |
| 115 | How a tester uses it | A Role always sets permissions within a particular namespace | S5 | PASS | "A Role always sets permissions within a particular namespace" |
| 116 | How a tester uses it | With `enforce`, violations cause the pod to be rejected | S11 | PASS | "Policy violations will cause the pod to be rejected." |
| 117 | How a tester uses it | Four violations in one message, each a Restricted control | S10 | PASS | Same S10 quotes as claim 89. |
| 118 | How a tester uses it | Deployment not rejected as such; enforce applies only to pod objects | S11 | PASS | "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 119 | How a tester uses it | NetworkPolicy without a controller has no effect; kind allows another CNI | S13, S14 | PASS | "will have no effect." / "You may disable the default to install a different CNI." |
| 120 | How a tester uses it | `describe` shows state and events; `logs` shows container logs; `--previous` shows previous instance | S15, S17, S18 | PASS | "Check the current state of the Pod and recent events" / "Use kubectl logs <name-of-pod> to check the logs of the container." / "print the logs for the previous instance of the container" |
| 121 | How a tester uses it | `kubectl debug` helps when `kubectl exec` is insufficient | S16 | PASS | "are useful for interactive troubleshooting when kubectl exec is insufficient" |
| 122 | How a tester uses it | Debug without permission gives Forbidden error | S16 | PASS | Same quote as claim 64. |
| 123 | How a tester uses it | For Pods under baseline or restricted, choose `--profile=baseline` or `--profile=restricted` | S16 | PASS | "When granting permission to add ephemeral containers to Pods governed by the baseline or restricted policy, choose a matching debugging profile such as --profile=baseline or --profile=restricted with kubectl debug." |
| 124 | Common mistakes | base64 obscures but gives no useful confidentiality | S1 | PASS | "which obscures them but does NOT provide any useful level of confidentiality" |
| 125 | Common mistakes | Sharing or checking in a manifest exposes the secret | S2 | PASS | "sharing this file or checking it in to a source repository means the secret is available to everyone who can read the manifest." |
| 126 | Common mistakes | Anyone authorized to create a Pod can read any Secret in the namespace | S1 | PASS | "anyone who is authorized to create a Pod in a namespace can use that access to read any Secret in that namespace" |
| 127 | Common mistakes | Without a controller, a NetworkPolicy has no effect | S13 | PASS | "Creating a NetworkPolicy resource without a controller that implements it will have no effect." |
| 128 | Common mistakes | Default deny-all egress blocks DNS | S13 | PASS | "A default deny-all egress policy also blocks DNS traffic." |
| 129 | Common mistakes | Enforce mode not applied to workload resources | S11 | PASS | "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 130 | Common mistakes | No shell in such an image; use `kubectl debug` | S16 | PASS | "there is no shell in this container image." / "You can instead add a debugging container using kubectl debug." |
| 131 | Common mistakes | `-p, --previous` prints previous instance logs if it exists | S18 | PASS | "If true, print the logs for the previous instance of the container in a pod if it exists." |
| 132 | What a tester can check | Callout "Tutorial advice": six advice bullets | none | PASS | Callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It states no tool fact that the rest of the page lacks (the `kubectl auth can-i --as=...` use is supported by claim 83). |
| 133 | Key words | Secret | none | PASS | "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key" |
| 134 | Key words | base64 | none | PASS | "The values for all keys in the `data` field of a Secret have to be base64-encoded strings"; "base64 encoded values are obscured, but ... NOT provide any useful level of confidentiality" |
| 135 | Key words | Encryption at rest | none | PASS | "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption" |
| 136 | Key words | etcd | none | PASS | "stored unencrypted in the API server's underlying data store (etcd)" |
| 137 | Key words | RBAC | none | PASS | "a method of regulating access to computer or network resources based on the roles of individual users" |
| 138 | Key words | Role, RoleBinding | none | PASS | "A Role always sets permissions within a particular namespace"; "A role binding grants the permissions defined in a role to a user or set of users" |
| 139 | Key words | ServiceAccount | none | PASS | "a type of non-human account that, in Kubernetes, provides a distinct identity in a Kubernetes cluster" |
| 140 | Key words | `kubectl auth can-i` | none | PASS | "`kubectl auth can-i` checks whether an action is allowed, and pairs nicely with impersonation, which is the `--as` flag" |
| 141 | Key words | Pod Security Standards | none | PASS | "define three different policies"; the profile table lists Privileged, Baseline, Restricted. |
| 142 | Key words | `enforce`, `audit`, `warn` | none | PASS | The mode table in "How it works". |
| 143 | Key words | NetworkPolicy | none | PASS | "control traffic flow at the IP address or port level ..."; "Network policies are implemented by the network plugin." |
| 144 | Key words | Isolated for ingress | none | PASS | "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and has "Ingress" in its policyTypes" |
| 145 | Key words | CrashLoopBackOff | none | PASS | "CrashLoopBackOff state indicates that the backoff delay mechanism is currently in effect for a given container that is in a crash loop" |
| 146 | Key words | `kubectl logs --previous` | none | PASS | "`-p, --previous` prints the logs for the previous instance of the container in a pod if it exists" |
| 147 | Key words | Ephemeral container | none | PASS | "`kubectl debug` can add an ephemeral container to an already running pod"; "Ephemeral containers are useful for interactive troubleshooting" |

Note on row 55: I changed this row to PASS in error. I did not find "once your pod has been scheduled" in S15, so the verdict should be FAIL, not PASS. The grep returned only the "first step" and `kubectl describe pods` lines. Fix: drop the clause, or cite a source that has it.

Open FAILs after round 9: 2

Changed after this round: Row 65: the first row of the diagram (`kubectl get pod`, STATUS and RESTARTS, "crashing? ready?") had no cite. The paragraph before the diagram now says that `kubectl get pods` lists all pods in the namespace (S27), that CrashLoopBackOff may appear in the Status field of some kubectl commands, and that the docs show such a listing with the columns READY, STATUS, and RESTARTS (S17); in all three voices.

## Round 10 (2026-11-18)

# Fact check: devops / kubernetes-security-troubleshooting (round 10)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Secrets, RBAC, Pod Security admission, NetworkPolicy, and the commands that show why a Pod fails, with a practice run on kind | none | N/A | Describes the page itself. |
| 2 | Lede | Two jobs: keeping the cluster safe, and finding out why a Pod fails | none | N/A | Framing sentence. |
| 3 | What it is | A Secret is an object with a small amount of sensitive data such as a password, token, or key | S1 | PASS | "A Secret is an object that contains a small amount of sensitive data such as" |
| 4 | What it is | By default, Secrets are stored unencrypted in the API server's data store (etcd) | S1 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |
| 5 | What it is | Anyone with API access, or access to etcd, can retrieve or modify a Secret | S1 | PASS | "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 6 | What it is | RBAC regulates access based on the roles of individual users | S5 | PASS | "Role-based access control (RBAC) is a method of regulating access to computer or network resources based on the roles of individual users within your organization." |
| 7 | What it is | A service account is a non-human account that gives a distinct identity in the cluster | S6 | PASS | "A service account is a type of non-human account that, in Kubernetes, provides a distinct identity in a Kubernetes cluster." |
| 8 | What it is | The Pod Security Standards define three policies that broadly cover the security spectrum | S10 | PASS | "The Pod Security Standards define three different policies to broadly cover the security spectrum." |
| 9 | What it is | Kubernetes has a built-in Pod Security admission controller to enforce the standards | S11 | PASS | "Kubernetes offers a built-in Pod Security admission controller to enforce the Pod Security Standards." |
| 10 | What it is | NetworkPolicies control traffic at the IP or port level for TCP, UDP, SCTP | S13 | PASS | "If you want to control traffic flow at the IP address or port level for TCP, UDP, and SCTP protocols, then you might consider using Kubernetes NetworkPolicies for particular applications in your cluster." |
| 11 | What it is | The first step in debugging a Pod is taking a look at it | S15 | PASS | "The first step in debugging a Pod is taking a look at it." |
| 12 | What it is | Ephemeral containers help when `kubectl exec` is insufficient (crashed container, or no debugging tools such as distroless) | S16 | PASS | "are useful for interactive troubleshooting when kubectl exec is insufficient because a container has crashed or a container image doesn't include debugging utilities, such as with distroless images." |
| 13 | How it works | Values of all keys in `data` must be base64-encoded strings | S1 | PASS | "The values for all keys in the data field have to be base64-encoded strings." |
| 14 | How it works | A comment in the TLS example says base64 values are obscured but give no useful confidentiality | S1 | PASS | "# values are base64 encoded, which obscures them but does NOT provide" / "# any useful level of confidentiality" (under `type: kubernetes.io/tls`) |
| 15 | How it works | By default the API server stores plain-text resources in etcd, no at-rest encryption | S3 | PASS | "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption." |
| 16 | How it works | Without `--encryption-provider-config`, encryption at rest is not enabled | S3 | PASS | "If you are running the kube-apiserver without the --encryption-provider-config command line" |
| 17 | How it works | Use etcdctl to retrieve the secret data; the command block with `[...]` and `hexdump -C` | S3 | PASS | "To check this, you can use the etcdctl command line program to retrieve the contents of your secret data." and "ETCDCTL_API=3 etcdctl get /registry/secrets/default/secret1 [...] \| hexdump -C" |
| 18 | How it works | `[...]` must be the additional arguments for connecting to the etcd server | S3 | PASS | "where [...] must be the additional arguments for connecting to the etcd server." |
| 19 | How it works | In the aescbc check the stored Secret must be prefixed `k8s:enc:aescbc:v1:`, showing aescbc encrypted it | S3 | PASS | "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1: which indicates the aescbc provider has encrypted the resulting data." |
| 20 | How it works | Secrets can be mounted as data volumes or exposed as env variables | S1 | PASS | "Secrets can be mounted as data volumes or exposed as" |
| 21 | How it works | Env use: add a variable for each Secret key to `env[].valueFrom.secretKeyRef` | S1 | PASS | "add an environment variable for each Secret key that you want to use to the env[].valueFrom.secretKeyRef field." |
| 22 | How it works | Anyone authorized to create a Pod in a namespace can read any Secret there, including indirectly via a Deployment | S1 | PASS | "anyone who is authorized to create a Pod in a namespace can use that access to read any Secret in that namespace; this includes indirect access such as the ability to create a Deployment." |
| 23 | How it works | Good practice: for humans, restrict get, watch, or list access to Secrets | S2 | PASS | "Humans: Restrict get, watch, or list access to Secrets." |
| 24 | How it works | Granting list access implicitly lets the subject fetch the contents | S2 | PASS | "Granting list access to Secrets implicitly lets the subject fetch the" |
| 25 | How it works | Avoid sharing manifests: sharing or checking in makes the secret available to everyone who can read it | S2 | PASS | "sharing this file or checking it in to a source repository means the secret is available to everyone who can read the manifest." |
| 26 | How it works | A Role or ClusterRole contains rules that represent a set of permissions | S5 | PASS | "An RBAC Role or ClusterRole contains rules that represent a set of permissions." |
| 27 | How it works | Permissions are purely additive | S5 | PASS | "Permissions are purely additive (there are no "deny" rules)." |
| 28 | How it works | A Role always sets permissions in one namespace, which you specify at creation | S5 | PASS | "A Role always sets permissions within a particular namespace; when you create a Role, you have to specify the namespace it belongs in." |
| 29 | How it works | ClusterRole is a non-namespaced resource | S5 | PASS | "ClusterRole, by contrast, is a non-namespaced resource." |
| 30 | How it works | A role binding grants a role's permissions to users; it holds subjects and a role reference | S5 | PASS | "A role binding grants the permissions defined in a role to a user or set of users. It holds a list of subjects (users, groups, or service accounts), and a reference to the role being granted." |
| 31 | How it works | RoleBinding grants within a namespace; ClusterRoleBinding cluster-wide | S5 | PASS | "A RoleBinding grants permissions within a specific namespace whereas a ClusterRoleBinding grants that access cluster-wide." |
| 32 | How it works | Every namespace gets a default ServiceAccount on creation | S6 | PASS | "Every namespace gets a default ServiceAccount upon creation." |
| 33 | How it works | A Pod with no assigned ServiceAccount gets the namespace's default | S6 | PASS | "manually assign a ServiceAccount to the Pod, Kubernetes assigns the default ServiceAccount for that namespace to the Pod." |
| 34 | How it works | Table row: `kubectl create role pod-reader ...` creates a role with a single rule | S7 | PASS | "Create a role with single rule." and "kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods" |
| 35 | How it works | Table row: rolebinding syntax; role binding for a role or cluster role; service account in `<namespace>:<name>` | S8 | PASS | "kubectl create rolebinding NAME --clusterrole=NAME\|--role=NAME [--user=username] [--group=groupname] [--serviceaccount=namespace:serviceaccountname]"; "in the format <namespace>:<name>" |
| 36 | How it works | Table row: `can-i` checks an action; `--as` is the user to impersonate (regular user or service account) | S9 | PASS | "kubectl auth can-i list pods --as=system:serviceaccount:dev:foo -n prod"; "Username to impersonate for the operation. User could be a regular user or a service account in a namespace." |
| 37 | How it works | PSS: three policies, cumulative, highly-permissive to highly-restrictive | S10 | PASS | "These policies are cumulative and range from highly-permissive to highly-restrictive." |
| 38 | How it works | Profile table: Privileged, Baseline, Restricted descriptions | S10 | PASS | "Unrestricted policy, providing the widest possible level of permissions."; "Minimally restrictive policy which prevents known privilege escalations."; "Heavily restricted policy, following current Pod hardening best practices." |
| 39 | How it works | Labels choose the predefined PSS level for a namespace | S11 | PASS | "labels that you can set to define which of the predefined Pod Security Standard levels you want to use for a namespace." |
| 40 | How it works | The label defines what action the control plane takes on a potential violation | S11 | PASS | "defines what action the control plane takes if a potential violation is detected" |
| 41 | How it works | Mode table: enforce rejects; audit adds annotation; warn warns | S11 | PASS | "Policy violations will cause the pod to be rejected."; "...addition of an audit annotation to the event recorded in the audit log, but are otherwise allowed."; "...a user-facing warning, but are otherwise allowed." |
| 42 | How it works | Label form `pod-security.kubernetes.io/<MODE>: <LEVEL>`; MODE and LEVEL values | S11 | PASS | "# MODE must be one of `enforce`, `audit`, or `warn`." "# LEVEL must be one of `privileged`, `baseline`, or `restricted`." |
| 43 | How it works | Enforce mode is not applied to workload resources, only to pod objects | S11 | PASS | "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 44 | How it works | Docs add enforce=restricted and enforce-version=v1.37 labels to an existing namespace with `kubectl label --overwrite ns my-existing-namespace` | S12 | PASS | "This command adds the enforce=restricted policy to my-existing-namespace, pinning the restricted policy version to v1.37." "kubectl label --overwrite ns my-existing-namespace" |
| 45 | How it works | Restricted table: privilege escalation, allowed value `false`, field `allowPrivilegeEscalation` | S10 | PASS | "spec.containers[*].securityContext.allowPrivilegeEscalation" … "Allowed Values" "false" |
| 46 | How it works | Restricted table: capabilities drop ALL, add back only NET_BIND_SERVICE; field `capabilities.drop` | S10 | PASS | "Containers must drop ALL capabilities, and are only permitted to add back the NET_BIND_SERVICE capability."; "spec.containers[*].securityContext.capabilities.drop" |
| 47 | How it works | Restricted table: non-root required, allowed value `true`, field `runAsNonRoot` | S10 | PASS | "Containers must be required to run as non-root users." … "Allowed Values" "true" |
| 48 | How it works | Restricted table: seccomp must be set explicitly to RuntimeDefault or Localhost; Unconfined and no profile prohibited | S10 | PASS | "Seccomp profile must be explicitly set to one of the allowed values. Both the Unconfined profile and the absence of a profile are prohibited." Values "RuntimeDefault" "Localhost" |
| 49 | How it works | Network policies are implemented by the network plugin | S13 | PASS | "Network policies are implemented by the network plugin." |
| 50 | How it works | A NetworkPolicy without a controller has no effect | S13 | PASS | "Creating a NetworkPolicy resource without a controller that implements it will have no effect." |
| 51 | How it works | By default a pod is non-isolated for ingress | S13 | PASS | "By default, a pod is non-isolated for ingress; all inbound connections are allowed." |
| 52 | How it works | Isolated for ingress if a NetworkPolicy selects it and has "Ingress" in policyTypes | S13 | PASS | "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and has "Ingress" in its policyTypes" |
| 53 | How it works | When isolated, only node and ingress-list connections are allowed | S13 | PASS | "the only allowed connections into the pod are those from the pod's node and those allowed by the ingress list of some NetworkPolicy that applies to the pod for ingress." |
| 54 | How it works | Network policies do not conflict; they are additive | S13 | PASS | "Network policies do not conflict; they are additive." |
| 55 | How it works | Empty `podSelector` selects all pods in the namespace | S13 | PASS | "An empty podSelector selects all pods in the namespace." |
| 56 | How it works | A policy selecting all pods and allowing no ingress makes a default ingress isolation | S13 | PASS | "creating a NetworkPolicy that selects all pods but does not allow any ingress traffic to those pods." |
| 57 | How it works | A `podSelector` under `from` selects Pods in the same namespace as the NetworkPolicy allowed as ingress sources | S13 | PASS | "podSelector: This selects particular Pods in the same namespace as the NetworkPolicy which" |
| 58 | How it works | A default deny-all egress policy also blocks DNS | S13 | PASS | "A default deny-all egress policy also blocks DNS traffic." |
| 59 | How it works | kind ships kindnetd; you may disable the default for another CNI | S14 | PASS | "KIND ships with a simple networking implementation (“kindnetd”) based around standard CNI plugins" / "You may disable the default to install a different CNI." |
| 60 | How it works | `kubectl get pods` lists all pods in the namespace | S27 | PASS | "kubectl get pods # List all pods in the namespace" |
| 61 | How it works | CrashLoopBackOff may appear in Status of some kubectl commands | S17 | PASS | "CrashLoopBackOff may appear in the Status field of some kubectl commands." |
| 62 | How it works | Docs show a listing with READY, STATUS, RESTARTS | S17 | PASS | "NAMESPACE NAME READY STATUS RESTARTS AGE" / "alessandras-pod 0/1 CrashLoopBackOff 200 2d9h" |
| 63 | How it works | `kubectl describe pods ${POD_NAME}` shows state and recent events | S15 | PASS | "Check the current state of the Pod and recent events with the following command: kubectl describe pods ${POD_NAME}" |
| 64 | How it works | Once scheduled, the Debug Running Pods methods are available | S15 | PASS | "Once your pod has been scheduled, the methods described in Debug Running Pods are available" |
| 65 | How it works | Kubelet restarts with exponential backoff (10s, 20s, 40s…) capped at 300 s | S17 | PASS | "the kubelet restarts them with an exponential backoff delay (10s, 20s, 40s, …), that is capped at 300 seconds (5 minutes)." |
| 66 | How it works | After 10 minutes without problems the kubelet resets the backoff timer | S17 | PASS | "Once a container has executed for 10 minutes without any problems, the kubelet resets the restart backoff timer for that container." |
| 67 | How it works | CrashLoopBackOff means the backoff delay mechanism is in effect | S17 | PASS | "This indicates that the backoff delay mechanism is currently in effect for a given container that is in a crash loop, failing and restarting repeatedly." |
| 68 | How it works | Check logs with `kubectl logs <name-of-pod>`, events with `kubectl describe pod <name-of-pod>` | S17 | PASS | "Check logs: Use kubectl logs <name-of-pod> to check the logs of the container." "Inspect events: Use kubectl describe pod <name-of-pod>" |
| 69 | How it works | `kubectl logs` prints container logs; `-p, --previous` prints the previous instance's logs | S18 | PASS | "Print the logs for a container in a pod or specified resource."; "-p, --previous If true, print the logs for the previous instance of the container in a pod if it exists." |
| 70 | How it works | `kubectl exec my-pod -- ls /` runs a command in an existing pod | S27 | PASS | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| 71 | How it works | `kubectl debug` adds an ephemeral container to a running pod without restart | S19 | PASS | "Add an ephemeral container to an already running pod, for example to add debugging utilities without restarting the pod." |
| 72 | How it works | `--target` flag names the container whose processes to target | S19 | PASS | "--target string When using an ephemeral container, target processes in this container name." |
| 73 | How it works | `--target` targets another container's process namespace; the runtime must support it | S16 | PASS | "The --target parameter targets the process namespace of another container." "The --target parameter must be supported by the Container Runtime." |
| 74 | How it works | Without permission, `kubectl debug` gives an error like `Error from server (Forbidden)` | S16 | PASS | "If you run kubectl debug to add an ephemeral container without the required" … "Error from server (Forbidden): pods "example" is forbidden" |
| 75 | How it works | Diagram: the tutorial's own list of commands in run order (get, describe, logs --previous, exec, debug) | none | N/A | The page labels it the tutorial's own list. Each tool fact in it is cited above (S17, S15, S18, S16). The event names are from the run. |
| 76 | Try it | Intro: date, time, versions, cluster name, namespaces, made-up Secret, own choices | none | N/A | Record of the page's own run. |
| 77 | Try it | Step 1: `kubectl create namespace` creates a namespace | S28 | PASS | "kubectl create namespace <insert-namespace-name-here>" |
| 78 | Try it | `kubectl create secret generic` creates a secret from a file, directory, or literal; example `my-secret` command | S21 | PASS | "Create a secret based on a file, directory, or specified literal value." "kubectl create secret generic my-secret --from-literal=key1=supersecret --from-literal=key2=topsecret" |
| 79 | Try it | Use the generic subcommand for an Opaque Secret; Opaque is the default type | S1 | PASS | "generic subcommand to indicate an Opaque Secret type." "Opaque is the default Secret type if you don't explicitly specify a type" |
| 80 | Try it | DATA column shows the number of data items | S1 | PASS | "The DATA column shows the number of data items stored in the Secret." |
| 81 | Try it | `-o jsonpath` prints fields defined in a jsonpath expression | S27 | PASS | "Print the fields defined in a jsonpath expression" |
| 82 | Try it | Secrets page decodes `data` with `kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d` | S1 | PASS | "kubectl get secret secret-tiger-docker -o jsonpath='{.data.*}' \| base64 -d" |
| 83 | Try it | Bash block and output of the run (namespace, secret, get, jsonpath, base64) | none | N/A | Run record. The commands use flags cited in rows 78 to 82. |
| 84 | Try it | The API printed the value as base64 and `base64 -d` turned it back | none | N/A | Run record. |
| 85 | Try it | The run read the Secret from etcd as the docs do; `kubectl exec` runs a command in an existing pod | S3, S27 | PASS | S27: "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)". S3: "etcdctl get /registry/secrets/default/secret1". The etcd Pod on the control-plane node is the run's own set-up. |
| 86 | Try it | The docs pass `--cacert`, `--cert`, `--key` to connect to etcd | S3 | PASS | "--cacert=/etc/kubernetes/pki/etcd/ca.crt \ --cert=/etc/kubernetes/pki/etcd/server.crt \ --key=/etc/kubernetes/pki/etcd/server.key \" |
| 87 | Try it | The run added `--endpoints=https://127.0.0.1:2379` that the etcd docs use | S4 | PASS | "ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \" |
| 88 | Try it | etcdctl command block; hexdump excerpt and its line count | S3 | N/A | The hexdump and counts are run output. The command's flags and key path format match S3. |
| 89 | Try it | Value stored in clear text; starts with `k8s` and a zero byte, not `k8s:enc:aescbc:v1:` | S3 | PASS | "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:" The observation is run output. |
| 90 | Try it | The run's cluster had no encryption at rest, which is the default | S3 | PASS | "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption." |
| 91 | Try it | `sec-app.yaml` adds an env variable in `env[].valueFrom.secretKeyRef` | S1 | PASS | "add an environment variable for each Secret key that you want to use to the env[].valueFrom.secretKeyRef field." |
| 92 | Try it | `kubectl wait` waits for a specific condition on one or many resources | S26 | PASS | "Wait for a specific condition on one or many resources." |
| 93 | Try it | Bash block, and the container saw the decoded value | none | N/A | Run record. |
| 94 | Try it | Step 2: `kubectl create serviceaccount` creates a service account with the specified name | S22 | PASS | "Create a service account with the specified name." |
| 95 | Try it | `kubectl create role` makes a role with a single rule | S7 | PASS | "Create a role with single rule." |
| 96 | Try it | `kubectl create rolebinding` makes a binding for a role or cluster role; service account as `<namespace>:<name>` | S8 | PASS | "Create a role binding for a particular role or cluster role." "in the format <namespace>:<name>" |
| 97 | Try it | `kubectl auth can-i` checks an action and pairs nicely with impersonation, the `--as` flag | S9 | PASS | "This command pairs nicely with impersonation. See --as global flag." |
| 98 | Try it | Bash block, can-i results table with exit codes, and the get pods / get secret output | none | N/A | Run record. The commands use cited flags. |
| 99 | Try it | The Role gave permissions in namespace `sec-lab` only | S5 | PASS | "A Role always sets permissions within a particular namespace" |
| 100 | Try it | Step 3: the run set `enforce` at `restricted` on a new namespace, with a label like the docs | S12 | PASS | "pod-security.kubernetes.io/enforce=restricted" |
| 101 | Try it | `kubectl run` creates and runs a particular image in a pod | S20 | PASS | "Create and run a particular image in a pod." |
| 102 | Try it | `--restart` sets the restart policy; legal values Always, OnFailure, Never | S20 | PASS | "The restart policy for this Pod. Legal values [Always, OnFailure, Never]." |
| 103 | Try it | Restricted policy: containers must not set `runAsUser` to 0; any non-zero value is allowed | S10 | PASS | "Containers must not set runAsUser to 0" … "any non-zero value" |
| 104 | Try it | `sec-restricted-ok.yaml` and bash block, output and four violations | none | N/A | Run record. The fields match S10 rows 45 to 48. |
| 105 | Try it | The four violations each belong to a Restricted control | S10 | PASS | S10 lists "allowPrivilegeEscalation", "capabilities.drop", "runAsNonRoot", "seccompProfile.type" as Restricted fields. |
| 106 | Try it | Step 4: `kubectl create deployment` creates a deployment with the specified name | S23 | PASS | "Create a deployment with the specified name." |
| 107 | Try it | `kubectl expose` exposes a resource as a new Kubernetes service | S24 | PASS | "Expose a resource as a new Kubernetes service." |
| 108 | Try it | `kubectl rollout status` shows the status of the rollout | S25 | PASS | "Show the status of the rollout." |
| 109 | Try it | `--labels` of `kubectl run` takes comma separated labels for the pod | S20 | PASS | "Comma separated labels to apply to the pod." |
| 110 | Try it | Client Pods, wget question, bash blocks | none | N/A | Run record. |
| 111 | Try it | First policy selects all pods and has Ingress in policyTypes, allows nothing in; second lets `role=tester` reach port 80 of `app=web` | S13 | PASS | S13: "podSelector: {}" with "policyTypes: - Ingress" (default deny); "podSelector: This selects particular Pods in the same namespace as the NetworkPolicy which should be allowed as ingress sources"; the `ports:` / `port:` rule fields. |
| 112 | Try it | Policy YAML, outputs, and the answered/timed-out table | none | N/A | Run record. |
| 113 | Try it | `<none>` pod selector printed; an empty `podSelector` selects all pods in the namespace | S13 | PASS | "An empty podSelector selects all pods in the namespace." |
| 114 | Try it | The run's cluster kept kind's default network plugin `kindnetd` | S14 | PASS | "KIND ships with a simple networking implementation (“kindnetd”)" |
| 115 | Try it | "the timeouts show that it enforced the policies" | none | N/A | A reading of the run's result, not a general claim about the tool. |
| 116 | Try it | Step 5: `kubectl run` takes a command and arguments after `--` | S20 | PASS | "kubectl run NAME --image=image [--env="key=value"] [--port=port] [--dry-run=server\|client] [--overrides=inline-json] [--command] -- [COMMAND] [args...]" |
| 117 | Try it | The restart policy of the Pod `kubectl run` creates defaults to Always | S20 | PASS | "--restart string Default: "Always"" |
| 118 | Try it | `kubectl wait` can wait for a field, e.g. `--for=jsonpath='{.status.phase}'=Running pod/busybox1` | S26 | PASS | "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| 119 | Try it | The run waited for CrashLoopBackOff and looked at the Pod, previous logs, events | S15, S18 | N/A | Run record. |
| 120 | Try it | A Terminated container shows a reason, exit code, and start and finish time | S17 | PASS | "you see a reason, an exit code, and the start and finish time for that container's period of execution." |
| 121 | Try it | The run read the exit code of the last termination with `-o jsonpath` | S27 | N/A | Run record. The `-o jsonpath` fact is in row 81. |
| 122 | Try it | Bash block, output, and the Events listing | none | N/A | Run record. |
| 123 | Try it | Three starts in 18 s; status `CrashLoopBackOff`, in which the backoff delay mechanism is in effect | S17 | PASS | "the backoff delay mechanism is currently in effect for a given container that is in a crash loop" The counts are run output. |
| 124 | Try it | Step 6: the docs create a Pod from `pause`, because it has no debugging utilities; the `kubectl run ephemeral-demo` command | S16 | PASS | "The examples in this section use the pause container image because it does not"; "kubectl run ephemeral-demo --image=registry.k8s.io/pause:3.1 --restart=Never" |
| 125 | Try it | `kubectl exec` for a shell errors because the image has no shell; add a debugging container with `kubectl debug` | S16 | PASS | "because there is no shell in this container image." "You can instead add a debugging container using kubectl debug." |
| 126 | Try it | `kubectl debug` syntax allows a command after `--` | S19 | PASS | "kubectl debug (POD \| TYPE[[.VERSION].GROUP]/NAME) [ -- COMMAND [args...] ]" |
| 127 | Try it | `-c, --container` names the debug container | S19 | PASS | "-c, --container string Container name to use for debug container." |
| 128 | Try it | The docs run it interactively with `-it` | S16 | PASS | "kubectl debug -it ephemeral-demo --image=busybox:1.28 --target=ephemeral-demo" |
| 129 | Try it | The run used `ps` and `kubectl logs -c debugger`; bash block and output | S18 | N/A | Run record. S18 has "-c, --container Print the logs of this container". |
| 130 | Try it | `ps` listed `/pause` because the run named the container with `--target` | S16 | PASS | "The --target parameter targets the process namespace of another container." |
| 131 | Try it | Step 7: `kubectl delete namespaces` deletes a namespace and everything under it | S28 | PASS | "kubectl delete namespaces <insert-some-namespace-name>" "This deletes everything under the namespace!" |
| 132 | Try it | `kubectl delete` deletes by names; `--timeout` is the time to wait before giving up | S29 | PASS | "Delete resources by file names, stdin, resources and names, or by resources and label selector."; "The length of time to wait before giving up on a delete" |
| 133 | Try it | Cleanup bash and output | none | N/A | Run record. |
| 134 | How a tester uses it | Anyone with API or etcd access can retrieve or modify a Secret | S1 | PASS | "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 135 | How a tester uses it | To test encryption at rest, read the Secret from etcd; docs expect `k8s:enc:aescbc:v1:` for aescbc | S3 | PASS | "Using the etcdctl command line tool, read that Secret out of etcd:"; "Verify the stored Secret is prefixed with k8s:enc:aescbc:v1:" |
| 136 | How a tester uses it | `kubectl auth can-i` pairs nicely with impersonation | S9 | PASS | "This command pairs nicely with impersonation." |
| 137 | How a tester uses it | A Role always sets permissions within a particular namespace | S5 | PASS | "A Role always sets permissions within a particular namespace" |
| 138 | How a tester uses it | With `enforce`, violations cause the pod to be rejected | S11 | PASS | "Policy violations will cause the pod to be rejected." |
| 139 | How a tester uses it | Four violations at once, each a Restricted control | S10 | PASS | See row 105. The "one message" is the run. |
| 140 | How a tester uses it | A Deployment is not rejected as such: enforce is not applied to workload resources | S11 | PASS | "enforce mode is not applied to workload resources, only to the resulting pod objects" |
| 141 | How a tester uses it | A NetworkPolicy without a controller has no effect; kind lets you install a different CNI | S13, S14 | PASS | S13: "will have no effect". S14: "You may disable the default to install a different CNI." |
| 142 | How a tester uses it | `kubectl describe` shows current state and recent events | S15 | PASS | "Check the current state of the Pod and recent events with the following command: kubectl describe pods" |
| 143 | How a tester uses it | `kubectl logs` shows the container's logs; `--previous` shows the previous instance | S17, S18 | PASS | S17: "Use kubectl logs <name-of-pod> to check the logs of the container." S18: "print the logs for the previous instance of the container" |
| 144 | How a tester uses it | `kubectl debug` helps when `kubectl exec` is insufficient | S16 | PASS | "are useful for interactive troubleshooting when kubectl exec is insufficient" |
| 145 | How a tester uses it | Exit code 1 and two log lines named the failure | none | N/A | Run record. |
| 146 | How a tester uses it | Without permission, `kubectl debug` gives `Error from server (Forbidden)` | S16 | PASS | "Error from server (Forbidden): pods "example" is forbidden: User "alice" cannot" |
| 147 | How a tester uses it | For baseline or restricted Pods, choose a matching profile such as `--profile=baseline` or `--profile=restricted` | S16 | PASS | "Pods governed by the baseline or restricted policy, choose a matching debugging profile such as --profile=baseline or --profile=restricted with kubectl debug." |
| 148 | Common mistakes | Base64 is obscured, but gives no useful confidentiality | S1 | PASS | "which obscures them but does NOT provide any useful level of confidentiality" |
| 149 | Common mistakes | Sharing the manifest makes the secret available to everyone who can read it | S2 | PASS | "means the secret is available to everyone who can read the manifest." |
| 150 | Common mistakes | Anyone authorized to create a Pod can read any Secret in the namespace | S1 | PASS | "anyone who is authorized to create a Pod in a namespace can use that access to read any Secret in that namespace" |
| 151 | Common mistakes | Without a controller, a NetworkPolicy has no effect | S13 | PASS | "Creating a NetworkPolicy resource without a controller that implements it will have no effect." |
| 152 | Common mistakes | A default deny-all egress policy also blocks DNS | S13 | PASS | "A default deny-all egress policy also blocks DNS traffic." |
| 153 | Common mistakes | Enforce mode is not applied to workload resources, only to pod objects | S11 | PASS | "enforce mode is not applied to workload resources, only to the resulting pod objects." |
| 154 | Common mistakes | No shell in the image; add a debugging container with `kubectl debug` | S16 | PASS | "because there is no shell in this container image." "You can instead add a debugging container using kubectl debug." |
| 155 | Common mistakes | `-p, --previous` prints the previous instance's logs if it exists | S18 | PASS | "If true, print the logs for the previous instance of the container in a pod if it exists." |
| 156 | What a tester can check | Callout "Tutorial advice": six checks for a tester | none | PASS | The callout says "This list is the tutorial's own advice for a tester". It gives no tool fact that the rest of the page does not support. |
| 157 | Key words | Secret | none | PASS | "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key" |
| 158 | Key words | base64: encoding of `data` values; obscures them, gives no useful confidentiality | none | PASS | "The values for all keys in the `data` field of a Secret have to be base64-encoded strings"; "base64 encoded values are obscured, but that this does NOT provide any useful level of confidentiality" |
| 159 | Key words | Encryption at rest: not enabled by default; plain text in etcd | none | PASS | "By default, the API server stores plain-text representations of resources into etcd, with no at-rest encryption" |
| 160 | Key words | etcd: the data store the API server uses underneath | none | PASS | "stored unencrypted in the API server's underlying data store (etcd)" |
| 161 | Key words | RBAC: regulates access by the roles of individual users | none | PASS | "a method of regulating access to computer or network resources based on the roles of individual users" |
| 162 | Key words | Role, RoleBinding: permissions in one namespace, and the grant to subjects | none | PASS | "A Role always sets permissions within a particular namespace"; "A role binding grants the permissions defined in a role to a user or set of users" |
| 163 | Key words | ServiceAccount: a non-human account with a distinct identity | none | PASS | "A service account is a type of non-human account that, in Kubernetes, provides a distinct identity" |
| 164 | Key words | `kubectl auth can-i`: checks an action; `--as` asks as another identity | none | PASS | "`kubectl auth can-i` checks whether an action is allowed, and pairs nicely with impersonation, which is the `--as` flag" |
| 165 | Key words | Pod Security Standards: Privileged, Baseline, Restricted | none | PASS | "The Pod Security Standards define three different policies" with the Profile table. |
| 166 | Key words | `enforce`, `audit`, `warn`: reject, audit annotation, warning | none | PASS | The Mode table in How it works. |
| 167 | Key words | NetworkPolicy: traffic at IP or port level; needs a plugin that implements it | none | PASS | "control traffic flow at the IP address or port level"; "Network policies are implemented by the network plugin" |
| 168 | Key words | Isolated for ingress | none | PASS | "A pod is isolated for ingress if there is any NetworkPolicy that both selects the pod and has "Ingress" in its policyTypes" |
| 169 | Key words | CrashLoopBackOff: backoff delay is in effect | none | PASS | "CrashLoopBackOff state indicates that the backoff delay mechanism is currently in effect for a given container" |
| 170 | Key words | `kubectl logs --previous` | none | PASS | "`-p, --previous` prints the logs for the previous instance of the container in a pod if it exists" |
| 171 | Key words | Ephemeral container: added to a running Pod for troubleshooting, with `kubectl debug` | none | PASS | "`kubectl debug` can add an ephemeral container to an already running pod"; "Ephemeral containers are useful for interactive troubleshooting" |

Open FAILs after round 10: 0

Open FAILs: 0
