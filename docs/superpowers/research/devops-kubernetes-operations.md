# Research notes: Kubernetes Operations

Page: `content/devops/kubernetes-operations.mdx`. Module: DevOps & Cloud. Date: 2026-11-18 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): liveness, readiness, and startup probes, resource requests and limits, Quality of Service classes, Jobs, and the HorizontalPodAutoscaler with metrics-server, with a practice run on the kind cluster of `kubernetes-basics`. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had three sentences, one each from the probes, the autoscaling, and the resource-management pages; the page keeps them in `## What it is`.

The practice run of `## Try it` was run on 2026-11-18 at 04:55 (+06) on Linux with Docker Engine 29.10.0, kind v0.33.0, kubectl v1.37.2, and metrics-server v0.9.1, on the cluster `qa-lab` (Kubernetes v1.37.0) that `kubernetes-basics` created at 03:27. The script checked first that there was no namespace `ops-lab`, no Deployment `metrics-server` in `kube-system`, and no APIService `v1beta1.metrics.k8s.io`. The manifest of metrics-server is the file `components.yaml` of the release v0.9.1 of the project (4330 bytes, sha256 `3c7f57cdbee0f57fb0259a150e8f6d6cb4f29d72d1aa5dce8803151dd6d4c2a1`), downloaded from the release page with `curl`. The run was made once, and the outputs on the page are from it:

- Step 1: the Pod `liveness-exec` was `Ready` at 04:55:18, and its first restart was seen at 04:56:31, when the Pod was 75 seconds old. `kubectl describe pod` printed eight Events (`Scheduled`, `Pulling`, `Pulled`, `Unhealthy`, `Killing`, `Created`, `Started`, `Pulled`); the page shows the `Unhealthy` and `Killing` lines.
- Step 2: `kubectl describe pod` of the second Pod printed six Events (`Scheduled`, `Pulled`, `Created`, `Started`, and two `Unhealthy` lines); the page shows the two `Unhealthy` lines. `-o wide` had nine columns (the page shows six). The jsonpath command printed `10.244.0.41 ready=false` and `10.244.0.40 ready=true`.
- Step 3: the page shows the `kubectl get pod` line, the last state (`OOMKilled 137`), and the two QoS classes as printed. The script then deleted the Pod `memory-demo-2`.
- Step 4: `tests-pass` ended `Complete` after 3 seconds. `tests-fail` ended `Failed` after 33 seconds, with the Pods `tests-fail-lmvgs` (33s old), `tests-fail-d9zb4` (23s), and `tests-fail-4zmh5` (3s); the Job controller made the second Pod about 10 seconds after the first, and the third about 20 seconds after the second. `kubectl logs job/tests-fail` printed `Found 3 pods, using pod/tests-fail-lmvgs` and the two test lines.
- Step 5: `kubectl apply -f` of the manifest created nine objects. After the patch and the rollout, `kubectl top nodes` worked at the second attempt of a loop that tries every 5 seconds (the script printed `metrics ready after about 10 s`). The page shows the output without the trailing blanks that kubectl prints at the end of the header and of the line. The HPA was `cpu: 4%/50%` after 45 seconds. The load Pod started at 05:00:23; the script printed the autoscaler every 30 seconds, ten times (the page shows five of the ten lines: the first four and the last). The `kubectl describe hpa` section printed five Events (the page shows all five). `kubectl top pods -n ops-lab` printed twelve Pods; the ten `php-apache` Pods used 53m to 94m of CPU.
- Step 6: `kubectl delete namespace ops-lab` printed `namespace "ops-lab" deleted`; `kubectl delete -f metrics-server-v0.9.1.yaml` printed nine `deleted` lines; the APIService, the namespace, and the Deployment of metrics-server were `NotFound` after that.

After the run, `kubectl get ns` listed only the five namespaces that the cluster had before, there was no PersistentVolume, and the APIService `v1beta1.metrics.k8s.io` did not exist.

Some quotes are written as `scripts/devops_claimcheck.py` reads them: the code highlighting of the quick reference and of the walkthrough puts a space before and after each `=` in a command.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Configure Liveness, Readiness and Startup Probes (Kubernetes documentation) | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/ |
| S2 | Horizontal Pod Autoscaling (Kubernetes documentation) | https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/ |
| S3 | Resource Management for Pods and Containers (Kubernetes documentation) | https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ |
| S4 | Liveness, Readiness, and Startup Probes (Kubernetes documentation) | https://kubernetes.io/docs/concepts/workloads/pods/probes/ |
| S5 | EndpointSlices (Kubernetes documentation) | https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/ |
| S6 | Assign Memory Resources to Containers and Pods (Kubernetes documentation) | https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/ |
| S7 | Pod Quality of Service Classes (Kubernetes documentation) | https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/ |
| S8 | Jobs (Kubernetes documentation) | https://kubernetes.io/docs/concepts/workloads/controllers/job/ |
| S9 | HorizontalPodAutoscaler Walkthrough (Kubernetes documentation) | https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/ |
| S10 | Resource metrics pipeline (Kubernetes documentation) | https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/ |
| S11 | Kubernetes Metrics Server (kubernetes-sigs on GitHub) | https://github.com/kubernetes-sigs/metrics-server |
| S12 | kubectl top pod (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/kubectl_top_pod/ |
| S13 | kubectl Quick Reference (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/quick-reference/ |
| S14 | kubectl wait (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_wait/ |
| S15 | kubectl logs (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/ |
| S16 | Share a Cluster with Namespaces (Kubernetes documentation) | https://kubernetes.io/docs/tasks/administer-cluster/namespaces/ |
| S17 | kubectl delete (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_delete/ |
| S18 | kubectl rollout status (Kubernetes documentation) | https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_status/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Many applications eventually transition to broken states and cannot recover except by being restarted; liveness probes detect and remedy such situations. | S1 | "Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted" |
| Many applications eventually transition to broken states and cannot recover except by being restarted; liveness probes detect and remedy such situations. | S1 | "Kubernetes provides liveness probes to detect and remedy such situations" |
| The kubelet can perform and react to three kinds of probes. | S4 | "perform and react to three kinds of probes on running containers, each serving a different purpose" |
| Liveness probes determine when to restart a container. | S4 | "Liveness probes determine when to restart a container" |
| Readiness probes determine when a container is ready to accept traffic. | S4 | "Readiness probes determine when a container is ready to accept traffic" |
| Startup probes verify whether the application within a container is started. | S4 | "Startup probes verify whether the application within a container is started" |
| When you specify the resource request for containers in a Pod, the kube-scheduler uses it to decide which node to place the Pod on. | S3 | "When you specify the resource request for containers in a Pod, the kube-scheduler uses this information to decide which node to place the Pod on" |
| When you specify a resource limit for a container, the kubelet enforces those limits so that the container does not use more than the limit. | S3 | "When you specify a resource limit for a container, the kubelet enforces those limits so that the running container is not allowed to use more of that resource than the limit you set" |
| A Job creates one or more Pods and retries them until a specified number of them successfully terminate. | S8 | "A Job creates one or more Pods and will continue to retry execution of the Pods until a specified number of them successfully terminate" |
| A HorizontalPodAutoscaler automatically updates a workload resource with the aim of scaling capacity to match demand. | S2 | "A HorizontalPodAutoscaler automatically updates a workload resource (such as a Deployment or StatefulSet), with the aim of automatically scaling capacity to match demand" |
| Horizontal scaling means that the response to increased load is to deploy more Pods. | S2 | "Horizontal scaling means that the response to increased load is to deploy more Pods" |
| initialDelaySeconds: seconds after the container has started before startup, liveness or readiness probes are initiated; default 0. | S4 | "initialDelaySeconds Number of seconds after the container has started before startup, liveness or readiness probes are initiated" |
| initialDelaySeconds: seconds after the container has started before startup, liveness or readiness probes are initiated; default 0. | S4 | "Defaults to 0 seconds" |
| periodSeconds: how often to perform the probe; default 10. | S4 | "How often (in seconds) to perform the probe. Default to 10 seconds" |
| timeoutSeconds: seconds after which the probe times out; default 1. | S4 | "Number of seconds after which the probe times out. Defaults to 1 second" |
| failureThreshold: after this many failures in a row the overall check has failed; default 3. | S4 | "After a probe fails failureThreshold times in a row, Kubernetes considers that the overall check has failed" |
| failureThreshold: after this many failures in a row the overall check has failed; default 3. | S4 | "Defaults to 3" |
| For a startup or liveness probe, failureThreshold failures make Kubernetes treat the container as unhealthy and restart that container. | S4 | "if at least failureThreshold probes have failed, Kubernetes treats the container as unhealthy and triggers a restart for that specific container" |
| The kubelet honors the terminationGracePeriodSeconds setting for that container; the default is to inherit the Pod-level value (30 seconds if not specified), and with both a Pod-level and a probe-level value set, the probe-level value is used. | S4 | "The kubelet honors the setting of terminationGracePeriodSeconds for that container" |
| The kubelet honors the terminationGracePeriodSeconds setting for that container; the default is to inherit the Pod-level value (30 seconds if not specified), and with both a Pod-level and a probe-level value set, the probe-level value is used. | S4 | "The default is to inherit the Pod-level value for terminationGracePeriodSeconds (30 seconds if not specified)" |
| The kubelet honors the terminationGracePeriodSeconds setting for that container; the default is to inherit the Pod-level value (30 seconds if not specified), and with both a Pod-level and a probe-level value set, the probe-level value is used. | S4 | "When both a pod- and probe-level terminationGracePeriodSeconds are set, the kubelet will use the probe-level value" |
| If a startup probe is configured, liveness and readiness probes wait for it. | S4 | "If a startup probe is configured, Kubernetes does not execute liveness or readiness probes until the startup probe succeeds" |
| Liveness probes do not wait for readiness probes to succeed. | S4 | "Liveness probes do not wait for readiness probes to succeed" |
| Readiness probes run on the container during its whole lifecycle. | S4 | "Readiness probes run on the container during its whole lifecycle" |
| For a failed readiness probe, the kubelet keeps the container running, keeps probing, and sets the Pod's Ready condition to false. | S4 | "For a failed readiness probe, the kubelet continues running the container that failed checks, and also continues to run more probes; because the check failed, the kubelet sets the Ready condition on the Pod to false" |
| In an EndpointSlice, the serving condition says that the endpoint should be a target for Service traffic, and for a Pod it maps to the Ready condition. | S5 | "The serving condition indicates that the endpoint is currently serving responses, and so it should be used as a target for Service traffic" |
| In an EndpointSlice, the serving condition says that the endpoint should be a target for Service traffic, and for a Pod it maps to the Ready condition. | S5 | "For endpoints backed by a Pod, this maps to the Pod's Ready condition" |
| The ready condition is essentially a shortcut for serving and not terminating. | S5 | "The ready condition is essentially a shortcut for checking" |
| A container can use more resource than its request if the node has enough available. | S3 | "If the node where a Pod is running has enough of a resource available, it's possible (and allowed) for a container to use more resource than its request for that resource specifies" |
| CPU limits are enforced by CPU throttling, and runtimes do not terminate Pods or containers for excessive CPU usage. | S3 | "cpu limits are enforced by CPU throttling" |
| CPU limits are enforced by CPU throttling, and runtimes do not terminate Pods or containers for excessive CPU usage. | S3 | "container runtimes don't terminate Pods or containers for excessive CPU usage" |
| Over a memory limit, the kernel out-of-memory subsystem stops a process of the container; if it is PID 1 and the container is restartable, Kubernetes restarts it. | S3 | "the Linux kernel out-of-memory subsystem activates and, typically, intervenes by stopping one of the processes in the container that tried to allocate memory" |
| Over a memory limit, the kernel out-of-memory subsystem stops a process of the container; if it is PID 1 and the container is restartable, Kubernetes restarts it. | S3 | "If that process is the container's PID 1, and the container is marked as restartable, Kubernetes restarts the container" |
| Kubernetes classifies Pods into quality of service classes: Guaranteed, Burstable, and BestEffort. | S7 | "Kubernetes classifies the Pods that you run and allocates each Pod into a specific quality of service (QoS) class" |
| Kubernetes classifies Pods into quality of service classes: Guaranteed, Burstable, and BestEffort. | S7 | "Guaranteed Pods that are Guaranteed have the strictest resource limits" |
| Kubernetes classifies Pods into quality of service classes: Guaranteed, Burstable, and BestEffort. | S7 | "Burstable Pods that are Burstable have some lower-bound resource guarantees" |
| Kubernetes classifies Pods into quality of service classes: Guaranteed, Burstable, and BestEffort. | S7 | "BestEffort Pods in the BestEffort QoS class can use node resources" |
| Guaranteed: every container has a memory and a CPU limit and request, and each limit equals its request. | S7 | "Every Container in the Pod must have a memory limit and a memory request, both greater than zero" |
| Guaranteed: every container has a memory and a CPU limit and request, and each limit equals its request. | S7 | "For every Container in the Pod, the memory limit must equal the memory request" |
| Guaranteed: every container has a memory and a CPU limit and request, and each limit equals its request. | S7 | "Every Container in the Pod must have a CPU limit and a CPU request, both greater than zero" |
| Guaranteed: every container has a memory and a CPU limit and request, and each limit equals its request. | S7 | "For every Container in the Pod, the CPU limit must equal the CPU request" |
| Burstable: the Pod is not Guaranteed, and at least one container has a memory or CPU request or limit. | S7 | "The Pod does not meet the criteria for QoS class Guaranteed" |
| Burstable: the Pod is not Guaranteed, and at least one container has a memory or CPU request or limit. | S7 | "At least one Container in the Pod has a memory or CPU request or limit" |
| BestEffort: no container has a memory or CPU limit or request. | S7 | "a Pod is BestEffort only if none of the Containers in the Pod have a memory limit or a memory request, and none of the Containers in the Pod have a CPU limit or a CPU request" |
| The kubelet prefers to evict BestEffort Pods if the node comes under resource pressure. | S7 | "The kubelet prefers to evict BestEffort Pods if the node comes under resource pressure" |
| backoffLimit is the number of retries before a Job is considered failed; the default is 6. | S8 | "set .spec.backoffLimit to specify the number of retries before considering a Job as failed" |
| backoffLimit is the number of retries before a Job is considered failed; the default is 6. | S8 | "The .spec.backoffLimit is set by default to 6" |
| Failed Pods are recreated with an exponential back-off delay, capped at ten minutes. | S8 | "Failed Pods associated with the Job are recreated by the Job controller with an exponential back-off delay (10s, 20s, 40s ...) capped at ten minutes" |
| A Job has two terminal states, with the conditions Complete and Failed. | S8 | "A Job has two possible terminal states, each of which has a corresponding Job condition: Succeeded: Job condition Complete Failed: Job condition Failed" |
| Once a Job reaches activeDeadlineSeconds, its Pods are terminated and the Job is Failed with the reason DeadlineExceeded. | S8 | "Once a Job reaches activeDeadlineSeconds, all of its running Pods are terminated and the Job status will become type: Failed with reason: DeadlineExceeded" |
| The HorizontalPodAutoscaler controller runs intermittently, by default every 15 seconds. | S2 | "runs intermittently (it is not a continuous process)" |
| The HorizontalPodAutoscaler controller runs intermittently, by default every 15 seconds. | S2 | "the default interval is 15 seconds" |
| Once during each period, the controller manager queries the resource utilization against the metrics of each HorizontalPodAutoscaler. | S2 | "Once during each period, the controller manager queries the resource utilization against the metrics specified in each HorizontalPodAutoscaler definition" |
| The desired number of replicas is the ceiling of currentReplicas times currentMetricValue over desiredMetricValue. | S2 | "desiredReplicas = ceil\left\lceil currentReplicas \times \frac{currentMetricValue}{desiredMetricValue} \right\rceil" |
| With a current value of 200m and a desired value of 100m, the number of replicas doubles. | S2 | "if the current metric value is 200m, and the desired value is 100m, the number of replicas will be doubled" |
| Without a request on the containers, CPU utilization is not defined and the autoscaler takes no action for that metric. | S2 | "If some of the Pod's containers do not have the relevant resource request set, CPU utilization for the Pod will not be defined and the autoscaler will not take any action for that metric" |
| For scaling up there is no stabilization window; by default 4 pods or 100% of the running replicas may be added every 15 seconds. | S2 | "For scaling up there is no stabilization window" |
| For scaling up there is no stabilization window; by default 4 pods or 100% of the running replicas may be added every 15 seconds. | S2 | "4 pods or a 100% of the currently running replicas may at most be added every 15 seconds" |
| The stabilization window for scale-downs defaults to 5 minutes. | S2 | "horizontal-pod-autoscaler-downscale-stabilization command line option, which defaults to 5 minutes" |
| metrics-server collects and aggregates resource metrics from each kubelet; the API server serves the Metrics API for the HPA, the VPA, and kubectl top. | S10 | "Cluster addon component that collects and aggregates resource metrics pulled from each kubelet" |
| metrics-server collects and aggregates resource metrics from each kubelet; the API server serves the Metrics API for the HPA, the VPA, and kubectl top. | S10 | "The API server serves Metrics API for use by HPA, VPA, and by the kubectl top command" |
| The docs' liveness example: the probe runs every 5 seconds, waits 5 seconds before the first probe, and executes cat /tmp/healthy. | S1 | "The periodSeconds field specifies that the kubelet should perform a liveness probe every 5 seconds" |
| The docs' liveness example: the probe runs every 5 seconds, waits 5 seconds before the first probe, and executes cat /tmp/healthy. | S1 | "The initialDelaySeconds field tells the kubelet that it should wait 5 seconds before performing the first probe" |
| The docs' liveness example: the probe runs every 5 seconds, waits 5 seconds before the first probe, and executes cat /tmp/healthy. | S1 | "To perform a probe, the kubelet executes the command cat /tmp/healthy in the target container" |
| The docs' liveness example makes the file /tmp/healthy and deletes it after 30 seconds. | S1 | "For the first 30 seconds of the container's life, there is a /tmp/healthy file" |
| The docs' liveness example makes the file /tmp/healthy and deletes it after 30 seconds. | S1 | "touch /tmp/healthy; sleep 30; rm -f /tmp/healthy; sleep 600" |
| kubectl create namespace creates a namespace. | S16 | "kubectl create namespace <insert-namespace-name-here>" |
| kubectl wait waits for a specific condition on one or many resources; --for=jsonpath waits for a field. | S14 | "Wait for a specific condition on one or many resources" |
| kubectl wait waits for a specific condition on one or many resources; --for=jsonpath waits for a field. | S14 | "kubectl wait --for=jsonpath='{.status.phase}'=Running pod/busybox1" |
| kubectl wait --for=condition=Ready waits for the Ready condition of a Pod. | S14 | "kubectl wait --for=condition=Ready pod/busybox1" |
| kubectl exec runs a command in an existing Pod. | S13 | "kubectl exec my-pod -- ls / # Run command in existing pod (1 container case)" |
| -o jsonpath prints the fields of a jsonpath expression. | S13 | "Print the fields defined in a jsonpath expression" |
| The docs' memory example allocates 250 MiB against a 100 MiB limit. | S6 | "the Container will attempt to allocate 250 MiB of memory, which is well above the 100 MiB limit" |
| The container in the memory exercise can be restarted, so the kubelet restarts it. | S6 | "The Container in this exercise can be restarted, so the kubelet restarts it" |
| kubectl logs job/hello returns the logs of the first container of a Job. | S15 | "Return snapshot logs from first container of a job named hello" |
| kubectl logs job/hello returns the logs of the first container of a Job. | S15 | "kubectl logs job/hello" |
| The walkthrough needs a cluster with a Metrics Server deployed and configured. | S9 | "you also need to use a cluster that has a Metrics Server deployed and configured" |
| metrics-server needs a kubelet certificate signed by the cluster CA, or --kubelet-insecure-tls. | S11 | "Kubelet certificate needs to be signed by cluster Certificate Authority (or disable certificate validation by passing --kubelet-insecure-tls to Metrics Server)" |
| --kubelet-insecure-tls does not verify the CA of the serving certificates of the kubelets, and is for testing only. | S11 | "--kubelet-insecure-tls - Do not verify the CA of serving certificates presented by Kubelets. For testing purposes only" |
| metrics-server installs the latest release from the components.yaml manifest with kubectl apply of the latest/download URL. | S11 | "To install the latest Metrics Server release from the components.yaml manifest, run the following command" |
| metrics-server installs the latest release from the components.yaml manifest with kubectl apply of the latest/download URL. | S11 | "kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml" |
| Metrics Server 0.9.x supports Kubernetes 1.34+. | S11 | "0.9.x metrics.k8s.io/v1beta1 1.34+" |
| The quick reference patches a Deployment with a JSON patch. | S13 | "kubectl patch deployment valid-deployment --type json" |
| kubectl top node shows metrics for all nodes. | S13 | "kubectl top node # Show metrics for all nodes" |
| The walkthrough's php-apache.yaml asks for 200m of CPU. | S9 | "limits: cpu: 500m requests: cpu: 200m" |
| kubectl rollout status shows the status of the rollout. | S18 | "Show the status of the rollout" |
| The walkthrough's autoscaler keeps 1 to 10 replicas at an average CPU utilization of 50%. | S9 | "kubectl autoscale deployment php-apache --cpu = 50% --min = 1 --max = 10" |
| The walkthrough's autoscaler keeps 1 to 10 replicas at an average CPU utilization of 50%. | S9 | "Roughly speaking, the HPA controller will increase and decrease the number of replicas (by updating the Deployment) to maintain an average CPU utilization across all Pods of 50%" |
| The walkthrough's load generator sends queries to the Service in an infinite loop. | S9 | "The container within the client Pod runs in an infinite loop, sending queries to the php-apache service" |
| Pod metrics may be unavailable for a few minutes since pod creation, due to the metrics pipeline delay. | S12 | "Due to the metrics pipeline delay, they may be unavailable for a few minutes since pod creation" |
| kubectl delete namespaces deletes a namespace, and everything under it. | S16 | "Delete a namespace with kubectl delete namespaces <insert-some-namespace-name>" |
| kubectl delete namespaces deletes a namespace, and everything under it. | S16 | "This deletes everything under the namespace!" |
| kubectl delete deletes resources by file names, and --timeout is the time to wait before giving up. | S17 | "Delete resources by file names, stdin, resources and names, or by resources and label selector" |
| kubectl delete deletes resources by file names, and --timeout is the time to wait before giving up. | S17 | "The length of time to wait before giving up on a delete" |
| Liveness probes must be configured carefully; incorrect implementation can lead to cascading failures. | S4 | "Liveness probes must be configured carefully to ensure that they truly indicate unrecoverable application failure, for example a deadlock" |
| Liveness probes must be configured carefully; incorrect implementation can lead to cascading failures. | S4 | "Incorrect implementation of liveness probes can lead to cascading failures" |
