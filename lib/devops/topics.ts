/**
 * The one ordered list of the DevOps & Cloud topics. Each topic is served at
 * /devops/<slug>/ and has its text in content/devops/<slug>.mdx. The topics are grouped in parts.
 * Every page is a shelf: a short explanation with its sources, then the reels of one creator (KodeKloud).
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
  { slug: "what-is-devops", part: 1, title: "What Is DevOps?", description: "What DevOps is, and how it joins development and operations." },
  { slug: "git-basics", part: 1, title: "Git Basics", description: "How Git stores snapshots, and what a merge does." },
  { slug: "git-workflows", part: 1, title: "Git Workflows", description: "Rebase, stash, worktrees, bisect, and cherry-pick." },
  { slug: "ci-cd", part: 1, title: "CI/CD Pipelines", description: "What Jenkins and GitHub Actions are." },
  { slug: "gitops", part: 1, title: "GitOps", description: "The OpenGitOps principles, Argo CD, and Flux." },
  { slug: "docker-basics", part: 2, title: "Docker Basics", description: "What Docker is, and how it compares with virtual machines." },
  { slug: "docker-images-compose", part: 2, title: "Docker Images and Compose", description: "Dockerfile, Docker Compose, and Bake." },
  { slug: "docker-in-practice", part: 2, title: "Docker in Practice", description: "Docker volumes and bind mounts." },
  { slug: "kubernetes-basics", part: 3, title: "Kubernetes Basics", description: "Pods, ReplicaSets, and Deployments." },
  { slug: "kubernetes-architecture", part: 3, title: "Kubernetes Architecture", description: "etcd and Operators." },
  { slug: "kubernetes-networking-storage", part: 3, title: "Kubernetes Networking and Storage", description: "Services, DNS records, and volumes." },
  { slug: "kubernetes-operations", part: 3, title: "Kubernetes Operations", description: "Liveness probes, autoscaling, and resource limits." },
  { slug: "kubernetes-security-troubleshooting", part: 3, title: "Kubernetes Security and Troubleshooting", description: "Kubernetes Secrets, and how they are stored by default." },
  { slug: "cloud-concepts", part: 4, title: "Cloud Concepts", description: "What cloud computing is, and the twelve-factor app." },
  { slug: "aws-compute-storage", part: 4, title: "AWS Compute and Storage", description: "EC2, S3, and EBS." },
  { slug: "aws-networking", part: 4, title: "AWS Networking and Delivery", description: "VPC, Elastic Load Balancing, Route 53, and CloudFront." },
  { slug: "aws-identity-security", part: 4, title: "AWS Identity and Security", description: "IAM and IAM roles, KMS, and Secrets Manager." },
  { slug: "aws-data-serverless", part: 4, title: "AWS Databases and Serverless", description: "AWS Lambda, DynamoDB, Athena, and Step Functions." },
  { slug: "terraform-iac", part: 5, title: "Terraform and Infrastructure as Code", description: "Terraform, Packer, and Crossplane." },
  { slug: "ansible", part: 5, title: "Ansible", description: "Ansible's open-source automation and its agent-less design." },
  { slug: "monitoring-observability", part: 6, title: "Monitoring and Observability", description: "Observability, Prometheus, and Loki." },
  { slug: "cncf-build-deliver", part: 7, title: "CNCF Projects: Build and Deliver", description: "The CNCF, Helm, Backstage, and Cloud Native Buildpacks." },
  { slug: "cncf-runtime-data", part: 7, title: "CNCF Projects: Runtime, Scheduling, and Data", description: "The CNCF, containerd, and Rook." },
  { slug: "cncf-network-security-observability", part: 7, title: "CNCF Projects: Networking, Security, and Observability", description: "The CNCF, Istio, Falco, and the Open Policy Agent." },
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
