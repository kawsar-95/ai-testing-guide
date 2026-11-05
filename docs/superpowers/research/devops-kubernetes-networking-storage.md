# Research notes: Kubernetes Networking and Storage

Page: `content/devops/kubernetes-networking-storage.mdx`. Module: DevOps & Cloud. Date: 2026-11-05.

The page is a shelf: a short explanation with its sources, then KodeKloud Shorts. The reels are another creator's videos and are not sources. Each fact in the text comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Service (Kubernetes documentation) | https://kubernetes.io/docs/concepts/services-networking/service/ |
| S2 | DNS for Services and Pods (Kubernetes documentation) | https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/ |
| S3 | Volumes (Kubernetes documentation) | https://kubernetes.io/docs/concepts/storage/volumes/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| In Kubernetes, a Service is a method for exposing a network application that is running as one or more Pods in your cluster. | S1 | "a Service is a method for exposing a network application that is running as one or more Pods in your cluster" |
| Kubernetes creates DNS records for Services and Pods. | S2 | "Kubernetes creates DNS records for Services and Pods" |
| On-disk files in a container are ephemeral. | S3 | "On-disk files in a container are ephemeral" |
| One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of t... | S3 | "One problem occurs when a container crashes or is stopped; the container state is not saved, so all of the files that were created or modified during the lifetime of the container are lost" |
| Another problem occurs when multiple containers are running in a Pod and need to share files. | S3 | "Another problem occurs when multiple containers are running in a Pod and need to share files" |
| The Kubernetes volume abstraction can help you to solve both of these problems. | S3 | "The Kubernetes volume abstraction can help you to solve both of these problems" |
