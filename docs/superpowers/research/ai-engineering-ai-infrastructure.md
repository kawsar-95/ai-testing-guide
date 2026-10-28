# AI Engineering page: AI Infrastructure (research notes)

Writer notes for `content/ai-engineering/ai-infrastructure.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-ai-infrastructure/`. Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` finds no run of 8 or more words copied from these files. The vLLM docs page did not fetch, so the page does not name a model server.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | What is a container? (Docker Docs) | https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/ | 2026-10-28 |
| S2 | Deployments (Kubernetes Documentation) | https://kubernetes.io/docs/concepts/workloads/controllers/deployment/ | 2026-10-28 |
| S3 | Liveness, Readiness, and Startup Probes (Kubernetes Documentation) | https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/ | 2026-10-28 |
| S4 | Horizontal Pod Autoscaling (Kubernetes Documentation) | https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/ | 2026-10-28 |
| S5 | Schedule GPUs (Kubernetes Documentation) | https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/ | 2026-10-28 |
| S6 | Rate limits (Claude Platform Docs) | https://platform.claude.com/docs/en/api/rate-limits | 2026-10-28 |
| S7 | API overview (Claude Platform Docs) | https://platform.claude.com/docs/en/api/overview | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Claude is reachable on the Claude API and on cloud platforms such as Amazon Bedrock and Microsoft Foundry. | S7 | "Claude is available through the direct Claude API and through cloud platforms." / table rows "Amazon Bedrock", "Microsoft Foundry" |
| C2 | On a cloud platform, authentication goes through the provider's IAM. | S7 | "authentication is integrated with the cloud provider's IAM system." |
| C3 | Passing a rate limit gives a 429 error. | S6 | "If you exceed any of the rate limits, you will get a 429 error describing which rate limit was exceeded." |
| C4 | A container is an isolated process with all the files it needs. | S1 | "A container is simply an isolated process with all of the files it needs to run." |
| C5 | Self-contained and portable. | S1 | "Self-contained. Each container has everything it needs to function with no reliance on any pre-installed dependencies on the host machine." / "Portable. Containers can run anywhere!" |
| C6 | Containers share the kernel, so they use less infrastructure than VMs. | S1 | "they all share the same kernel, allowing you to run more applications on less infrastructure." |
| C7 | A Deployment gives declarative updates; desired state reached at a controlled rate. | S2 | "A Deployment provides declarative updates for Pods and ReplicaSets. You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate." |
| C8 | A rollout starts only when the Pod template changes. | S2 | "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed" |
| C9 | Default maxUnavailable is 25%. | S2 | "maxUnavailable specifically ... Kubernetes by default sets the value to 25%." |
| C10 | Startup probe: other probes wait until it succeeds. | S3 | "If a startup probe is configured, Kubernetes does not execute liveness or readiness probes until the startup probe succeeds" |
| C11 | Readiness: when a container can take traffic; useful while loading files and warming caches. | S3 | "Readiness probes determine when a container is ready to accept traffic. This is useful when waiting for an application to perform time-consuming initial tasks, such as establishing network connections, loading files, and warming caches." |
| C12 | Liveness: when to restart; catches a deadlock. | S3 | "Liveness probes determine when to restart a container. For example, liveness probes could catch a deadlock" |
| C13 | HPA updates a workload to match capacity to demand; horizontal adds Pods, vertical adds resources. | S4 | "a HorizontalPodAutoscaler automatically updates a workload resource (such as a Deployment or StatefulSet), with the aim of automatically scaling capacity to match demand. Horizontal scaling means that the response to increased load is to deploy more Pods. This is different from vertical scaling" |
| C14 | GPU driver and vendor device plugin; resource such as `nvidia.com/gpu`. | S5 | "you have to install GPU drivers from the corresponding hardware vendor on the nodes and run the corresponding device plugin" / "your cluster exposes a custom schedulable resource such as amd.com/gpu or nvidia.com/gpu." |
| C15 | GPUs go in `limits`; requests must equal limits; no requests without limits. | S5 | "GPUs are only supposed to be specified in the limits section" / "these two values must be equal. You cannot specify GPU requests without specifying limits." |
| C16 | Messages API limits RPM, ITPM, OTPM per model class. | S6 | "The rate limits for the Messages API are measured in requests per minute (RPM), input tokens per minute (ITPM), and output tokens per minute (OTPM) for each model class." |
| C17 | Token bucket: capacity refills continuously, not reset at fixed intervals. | S6 | "The API uses the token bucket algorithm ... your capacity is continuously replenished up to your maximum limit, rather than being reset at fixed intervals." |
| C18 | Wait for `retry-after` seconds. | S6 | "When the response has a `retry-after` header, wait that many seconds before retrying." |
| C19 | 60 RPM can be enforced as 1 request per second; bursts can trigger errors. | S6 | "a rate of 60 requests per minute (RPM) might be enforced as 1 request per second. Short bursts of requests can exceed the limit and trigger rate limit errors." |
| C20 | The limits apply to the whole organization (for each model class), so more Pods do not raise them. | S6 | "The API enforces service-configured limits at the organization level, but you can also set user-configurable limits for your organization's workspaces." |

## Not on the page / doubts

- Fact-check 2026-10-28: the sentence "The limits are set for each model class, not for each Pod" was replaced with "the Claude API enforces its limits at the organization level, for each model class" (C16 and C20). The page also says "The Claude API has rate limits" in place of "Each API has rate limits", because S6 covers only the Claude API.
- The YAML fragment (image name, `/ready` path, port) is example data. The Monday-morning story and the tester tips are the tutorial's own.
