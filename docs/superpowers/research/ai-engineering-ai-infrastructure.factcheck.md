# Fact-check: content/ai-engineering/ai-infrastructure.mdx

Checked 2026-10-28 by an agent that did not write the page. All 7 sources were fetched fresh as text. The quotes of the research notes were not trusted: each quote below comes from the fetched text.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Claude is reachable on the Claude API and on cloud platforms such as Amazon Bedrock or Microsoft Foundry | 7 | PASS | "Claude is available through the direct Claude API and through cloud platforms." The platform table lists "Amazon Bedrock" and "Claude in Microsoft Foundry". |
| 2 | On a cloud platform, authentication goes through the IAM system of the cloud provider | 7 | PASS | "When accessing Claude through a cloud platform, authentication is integrated with the cloud provider's IAM system." |
| 3 | (First check) "Each API has rate limits. If you pass one, you get a 429 error" | 6 | FAIL, fixed (see Re-check) | S6 says "If you exceed any of the rate limits, you will get a 429 error", but S6 covers only the Claude API. "Each API" (Bedrock, Foundry) has no source. |
| 4 | A container is an isolated process with all the files it needs to run | 1 | PASS | "A container is simply an isolated process with all of the files it needs to run." |
| 5 | Kubernetes runs containers on many machines, replaces failed ones | 2 | PASS | "A Deployment manages a set of Pods to run an application workload"; the Deployment Controller "changes the actual state to the desired state". |
| 6 | Kubernetes adds copies when load grows | 4 | PASS | "Horizontal scaling means that the response to increased load is to deploy more Pods." |
| 7 | A container is self-contained: no reliance on what is installed on the host | 1 | PASS | "Self-contained. Each container has everything it needs to function with no reliance on any pre-installed dependencies on the host machine." |
| 8 | A container is portable: same on a laptop and in the cloud | 1 | PASS | "Portable. Containers can run anywhere! The container that runs on your development machine will work the same way in a data center or anywhere in the cloud!" |
| 9 | Containers share one kernel, so they use less infrastructure than VMs | 1 | PASS | "they all share the same kernel, allowing you to run more applications on less infrastructure." (in the "Containers versus virtual machines" part) |
| 10 | A Deployment gives declarative updates for Pods; desired state reached at a controlled rate | 2 | PASS | "A Deployment provides declarative updates for Pods and ReplicaSets. You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate." |
| 11 | A change to the Pod template, such as a new image, starts a rollout | 2 | PASS | "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated." |
| 12 | By default, a rolling update allows 25% of the Pods to be unavailable | 2 | PASS | "By default, it ensures that at least 75% of the desired number of Pods are up (25% max unavailable)." |
| 13 | Kubernetes asks each container if it is healthy (probes) | 3 | PASS | "Based on the probe results, Kubernetes can restart unhealthy containers or stop sending traffic to containers that are not ready." |
| 14 | Startup: until it succeeds, the other probes do not run | 3 | PASS | "If a startup probe is configured, Kubernetes does not execute liveness or readiness probes until the startup probe succeeds" |
| 15 | Readiness: can it take traffic; useful while loading files or warming caches | 3 | PASS | "Readiness probes determine when a container is ready to accept traffic. This is useful when waiting for an application to perform time-consuming initial tasks, such as establishing network connections, loading files, and warming caches." |
| 16 | Liveness: is it stuck; a failed check restarts the container | 3 | PASS | "Liveness probes determine when to restart a container. For example, liveness probes could catch a deadlock, where an application is running, but unable to make progress." |
| 17 | HPA updates a Deployment to match capacity to demand | 4 | PASS | "HorizontalPodAutoscaler automatically updates a workload resource (such as a Deployment or StatefulSet), with the aim of automatically scaling capacity to match demand." |
| 18 | Horizontal adds Pods; vertical gives more CPU or memory to running Pods | 4 | PASS | "This is different from vertical scaling, which for Kubernetes would mean assigning more resources (for example: memory or CPU) to the Pods that are already running for the workload." |
| 19 | The node needs the vendor GPU driver and device plugin; the cluster offers `nvidia.com/gpu` | 5 | PASS | "you have to install GPU drivers from the corresponding hardware vendor on the nodes and run the corresponding device plugin from the GPU vendor." / "your cluster exposes a custom schedulable resource such as amd.com/gpu or nvidia.com/gpu." |
| 20 | GPUs go in `limits`; if `requests` is also set, the 2 values must be equal | 5 | PASS | "GPUs are only supposed to be specified in the limits section" / "You can specify GPU in both limits and requests but these two values must be equal." |
| 21 | YAML: `nvidia.com/gpu: 1` under `limits`, `readinessProbe.httpGet` with `path` and `port` | 5, 3 | PASS | The field names match the GPU example manifest of S5 (`limits: nvidia.com/gpu: 1`) and the HTTP probe of S3 ("HTTP probes"). Image name, `/ready`, and port 8080 are example values, and the comment says so. |
| 22 | Messages API limits RPM, ITPM, OTPM for each model class | 6 | PASS | "The rate limits for the Messages API are measured in requests per minute (RPM), input tokens per minute (ITPM), and output tokens per minute (OTPM) for each model class." |
| 23 | Token bucket: capacity refills all the time, no reset at fixed times | 6 | PASS | "The API uses the token bucket algorithm to do rate limiting. This means that your capacity is continuously replenished up to your maximum limit, rather than being reset at fixed intervals." |
| 24 | `retry-after` is the number of seconds to wait | 6 | PASS | "When the response has a `retry-after` header, wait that many seconds before retrying." |
| 25 | Example: the autoscaler adds Pods, as designed | 4 | PASS | See claim 17. The story is marked "Tutorial's own view". |
| 26 | (First check) Example: "the Claude API limits are set for each model class, not for each Pod" (writer doubt) | 6 | FAIL, fixed (see Re-check) | S6 says "for each model class" but says nothing about Pods. The page draws the Pod conclusion without stating the fact that supports it. S6 does give it: "The API enforces service-configured limits at the organization level". |
| 27 | Example: a new Pod's readiness probe keeps traffic away until ready | 3 | PASS | See claim 15; also "If the readiness probe returns a failed state, the EndpointSlice controller removes the Pod's IP address from the EndpointSlices of all Services that match the Pod." |
| 28 | Mistake: more Pods do not raise the model API limits | 6 | PASS | "Rate limits set the maximum number of API requests an organization can make over a defined period of time." / "The API enforces service-configured limits at the organization level". |
| 29 | Mistake: 60 RPM can be enforced as 1 request per second; short bursts trigger errors | 6 | PASS | "a rate of 60 requests per minute (RPM) might be enforced as 1 request per second. Short bursts of requests can exceed the limit and trigger rate limit errors." |
| 30 | Mistake: no readiness probe, a loading Pod gets traffic and fails | 3 | PASS | "This helps you avoid directing traffic to Pods that can only respond with error messages." |
| 31 | Mistake: too-strict liveness probe restarts a slow container; a startup probe gives time first | 3 | PASS | "Incorrect implementation of liveness probes can lead to cascading failures. This results in restarting of container under high load" / "Startup probes are useful for Pods that have containers that take a long time to come into service." / "allowing the application time to finish its initialization." |
| 32 | Mistake: Kubernetes does not accept a GPU request without a limit | 5 | PASS | "You cannot specify GPU requests without specifying limits." |
| 33 | Mistake: a rollout starts only when the Pod template changes; new tag per build is the tutorial's view | 2 | PASS | See claim 11. The advice is marked "Tutorial's own view". |
| 34 | Key words: container, Deployment, readiness, liveness, horizontal scaling, device plugin, rate limit | 1-6 | PASS | Same facts as claims 4, 10, 15, 16, 18, 19, 28. Device plugin: "Kubernetes implements device plugins to let Pods access specialized hardware features such as GPUs." |

Uncited text that states no source fact: the lede, the 2 kinds of parts, the text diagram of the example, and the tester tips (the callout says "These test ideas are the tutorial's own advice."). PASS.

## Other checks

| Check | Result |
|---|---|
| Sources are official or primary (Docker Docs, kubernetes.io, platform.claude.com) | PASS |
| Copy check: 8-word runs of the page text (cites removed) against the 7 fetched sources | PASS. The only hits are the source titles and URLs in `page.sources`. |
| Every source has a cite and every cite has a source (n = 1 to 7) | PASS |
| Research-note quotes | Spot-checked C1, C9, C11, C15, C16, C19: they match the fetched text (apart from the curly apostrophe). This report uses only quotes from the fetched text. |

## Re-check (after fixes)

| # | Fix | Verdict | Quote |
|---|---|---|---|
| 3 | All 3 voices now say "The Claude API has rate limits" in place of "Each API has rate limits". | PASS | S6: "If you exceed any of the rate limits, you will get a 429 error describing which rate limit was exceeded." |
| 26 | Technical now says "the Claude API enforces its limits at the organization level, for each model class, so more Pods send more requests into the same RPM and token limits". Layman and Bangla say the same. The notes have a new row C20. | PASS | S6: "The API enforces service-configured limits at the organization level, but you can also set user-configurable limits for your organization's workspaces." and "... (OTPM) for each model class." |

Open FAILs: 0
