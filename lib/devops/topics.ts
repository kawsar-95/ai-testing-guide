/**
 * The one ordered list of the DevOps & Cloud topics. Each topic is served at
 * /devops/<slug>/ and has its text in content/devops/<slug>.mdx. The topics are grouped in parts.
 * Every page is a full lesson for testers (the shape that tests/devops.test.ts checks). Every page ends with
 * the reels of one creator (KodeKloud).
 */
import { defineFlatModule, type FlatEntry, type FlatPart } from "../modules/flat.ts";
import { DEVOPS_UI } from "./ui.ts";

export type DevopsSlug =
  | "what-is-devops"
  | "git-basics"
  | "git-workflows"
  | "ci-cd"
  | "gitops"
  | "docker-basics"
  | "docker-images-compose"
  | "docker-in-practice"
  | "kubernetes-basics"
  | "kubernetes-architecture"
  | "kubernetes-networking-storage"
  | "kubernetes-operations"
  | "kubernetes-security-troubleshooting"
  | "cloud-concepts"
  | "aws-compute-storage"
  | "aws-networking"
  | "aws-identity-security"
  | "aws-data-serverless"
  | "terraform-iac"
  | "ansible"
  | "monitoring-observability"
  | "cncf-build-deliver"
  | "cncf-runtime-data"
  | "cncf-network-security-observability";

type TopicEntry = { slug: DevopsSlug; part: number; title: string; description: string };

const PARTS: readonly FlatPart[] = [
  { num: 1, title: "DevOps and delivery" },
  { num: 2, title: "Containers" },
  { num: 3, title: "Kubernetes" },
  { num: 4, title: "Cloud and AWS" },
  { num: 5, title: "Infrastructure as code" },
  { num: 6, title: "Operate and observe" },
  { num: 7, title: "CNCF projects" },
];

const SOURCE: readonly TopicEntry[] = [
  { slug: "what-is-devops", part: 1, title: "What Is DevOps?", description: "What DevOps is, its practices, the five DORA metrics, and where a tester works in a DevOps team." },
  { slug: "git-basics", part: 1, title: "Git Basics", description: "Snapshots, the three states, branches, merges and conflicts, remotes, and how a tester tests a pull request." },
  { slug: "git-workflows", part: 1, title: "Git Workflows", description: "Branches by stability, rebase and cherry-pick, stash and worktrees, and git bisect to find the commit that broke a test." },
  { slug: "ci-cd", part: 1, title: "CI/CD Pipelines", description: "CI, continuous delivery, and continuous deployment, the parts of a pipeline, and your tests in GitHub Actions and Jenkins." },
  { slug: "gitops", part: 1, title: "GitOps", description: "The four OpenGitOps principles, how Argo CD and Flux sync a cluster to Git, and smoke tests that run after each sync." },
  { slug: "docker-basics", part: 2, title: "Docker Basics", description: "Containers, images, and registries, how the Docker client and daemon run a container, and the first commands that a tester uses." },
  { slug: "docker-images-compose", part: 2, title: "Docker Images and Compose", description: "How a Dockerfile builds an image, how the build cache works, and how Docker Compose starts a whole test environment from one file, with Bake for builds." },
  { slug: "docker-in-practice", part: 2, title: "Docker in Practice", description: "Volumes, bind mounts, and tmpfs for test data, networks where containers find each other by name, and the commands to look into a container and clean up." },
  { slug: "kubernetes-basics", part: 3, title: "Kubernetes Basics", description: "Pods, ReplicaSets, and Deployments, how Kubernetes keeps the state that you ask for, and how to watch, break, and roll back a rollout on a local kind cluster." },
  { slug: "kubernetes-architecture", part: 3, title: "Kubernetes Architecture", description: "The control plane, the nodes, and etcd, how the scheduler and the kubelet place and run Pods, how custom resources and Operators extend the API, and how a tester checks each part on a local kind cluster." },
  { slug: "kubernetes-networking-storage", part: 3, title: "Kubernetes Networking and Storage", description: "Services, DNS names, and EndpointSlices, how traffic reaches a Pod from inside and outside the cluster, how persistent volumes outlive a Pod, and how a tester checks each part on a local kind cluster." },
  { slug: "kubernetes-operations", part: 3, title: "Kubernetes Operations", description: "Liveness and readiness probes, memory and CPU requests and limits, Jobs that run a task to the end, and the HorizontalPodAutoscaler, with a tester's practice run of each on a local kind cluster." },
  { slug: "kubernetes-security-troubleshooting", part: 3, title: "Kubernetes Security and Troubleshooting", description: "Kubernetes Secrets, RBAC, Pod Security admission, and NetworkPolicy, and the commands that show why a Pod fails, with a tester's practice run of each on a local kind cluster." },
  { slug: "cloud-concepts", part: 4, title: "Cloud Concepts", description: "What cloud computing is, how AWS splits the work between itself and you, what AWS says about testing in the cloud, and the twelve-factor app, with a tester's practice run of a tiny app on your own machine." },
  { slug: "aws-compute-storage", part: 4, title: "AWS Compute and Storage", description: "EC2 instances and the states that are billed, EBS volumes and snapshots, and S3 buckets with versioning, lifecycle rules, Block Public Access, and presigned URLs, with an offline practice run of the AWS CLI and a read-along of AWS's own tutorials." },
  { slug: "aws-networking", part: 4, title: "AWS Networking and Delivery", description: "VPCs, subnets, route tables, gateways, security groups, and network ACLs, then Elastic Load Balancing, Route 53, and CloudFront, with a practice run of IP range checks in Python and AWS CLI templates on your own machine, and a read-along of AWS's own tutorials." },
  { slug: "aws-identity-security", part: 4, title: "AWS Identity and Security", description: "IAM identities, credentials, and policies and how AWS decides a request, then AWS KMS keys and AWS Secrets Manager secrets, with a practice run of two models and AWS CLI templates on your own machine, and a read-along of AWS's own pages." },
  { slug: "aws-data-serverless", part: 4, title: "AWS Databases and Serverless", description: "AWS Lambda functions, Amazon DynamoDB tables, Amazon Athena queries, and AWS Step Functions workflows, with a practice run on your own machine (the example function of AWS Lambda under unittest, the DynamoDB tutorial on DynamoDB Local, and two small models) and a read-along of AWS's own tutorials." },
  { slug: "terraform-iac", part: 5, title: "Terraform and Infrastructure as Code", description: "Terraform's write, plan, and apply workflow, providers, state, and tests, then Packer machine images and Crossplane compositions, with a practice run on your own machine (Terraform with local files, a Packer build of a Docker image, and the Crossplane CLI) and no cloud account." },
  { slug: "ansible", part: 5, title: "Ansible", description: "Ansible's inventory, playbooks, modules, handlers, check mode, and vault, with a practice run on your own machine (two playbooks against localhost, tests with the assert module, ansible-lint, and Ansible Vault) and no remote host." },
  { slug: "monitoring-observability", part: 6, title: "Monitoring and Observability", description: "Observability and its three signals, Prometheus (metrics, PromQL, rules, and promtool tests), Alertmanager, Loki, and the trace context of OpenTelemetry, with a practice run on your own machine (a small web app, alerts that fire, log queries, and a trace header) and no cloud account." },
  { slug: "cncf-build-deliver", part: 7, title: "CNCF Projects: Build and Deliver", description: "The CNCF and three of its projects for building and delivering software: Helm charts, the Backstage software catalog, and Cloud Native Buildpacks, with a practice run on your own machine (a chart that is linted, rendered, and tested, catalog files that are validated, and a buildpack that builds an image) and no cluster or cloud account." },
  { slug: "cncf-runtime-data", part: 7, title: "CNCF Projects: Runtime, Scheduling, and Data", description: "The CNCF and two of its projects, containerd and Rook, with a practice run on your own machine (containerd started as a normal user, its content store and namespaces explored, the Rook charts rendered, and a short-lived kind cluster used to watch the scheduler and to check Rook custom resources against their schema) and no cloud account." },
  { slug: "cncf-network-security-observability", part: 7, title: "CNCF Projects: Networking, Security, and Observability", description: "The CNCF and three of its projects, Istio, Falco, and the Open Policy Agent, with Gatekeeper, and a practice run on your own machine (the Istio configuration checked offline, policies written and tested with OPA and Gatekeeper, and Falco rules validated and run over Kubernetes audit events) with no cluster, no root rights, and no cloud account." },
];

const entries: readonly FlatEntry<DevopsSlug>[] = SOURCE.map((entry) => ({ ...entry, kind: "topic" }));

export const DEVOPS = defineFlatModule({
  id: "devops",
  label: "DevOps & Cloud",
  searchGroup: "devops",
  entries,
  parts: PARTS,
  ui: DEVOPS_UI,
});
