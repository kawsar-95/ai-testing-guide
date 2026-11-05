# Research notes: Kubernetes Operations

Page: `content/devops/kubernetes-operations.mdx`. Module: DevOps & Cloud. Date: 2026-11-05.

The page is a shelf: a short explanation with its sources, then KodeKloud Shorts. The reels are another creator's videos and are not sources. Each fact in the text comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Liveness, Readiness, and Startup Probes (Kubernetes documentation) | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/ |
| S2 | Horizontal Pod Autoscaling (Kubernetes documentation) | https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/ |
| S3 | Resource Management for Pods and Containers (Kubernetes documentation) | https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Kubernetes provides liveness probes to detect and remedy such situations. | S1 | "Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. Kubernetes provides liveness probes to detect and remedy such situations" |
| Kubernetes provides liveness probes to detect and remedy such situations. | S1 | "Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. Kubernetes provides liveness probes to detect and remedy such situations" |
| A HorizontalPodAutoscaler automatically updates a workload resource, such as a Deployment or StatefulSet, with the aim of automatically scaling capacity to match demand. | S2 | "automatically updates a workload resource" |
| A HorizontalPodAutoscaler automatically updates a workload resource, such as a Deployment or StatefulSet, with the aim of automatically scaling capacity to match demand. | S2 | "automatically scaling capacity to match demand" |
| When you specify a resource limit for a container, the kubelet enforces it, so the running container is not allowed to use more of that resource than the limit you set. | S3 | "the kubelet enforces those limits so that the running container is not allowed to use more of that resource than the limit you set" |
