# Research notes: GitOps

Page: `content/devops/gitops.mdx`. Module: DevOps & Cloud. Date: 2026-11-05.

The page is a shelf: a short explanation with its sources, then KodeKloud Shorts. The reels are another creator's videos and are not sources. Each fact in the text comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | What is OpenGitOps? (OpenGitOps) | https://opengitops.dev/ |
| S2 | What Is Argo CD? (Argo CD documentation) | https://argo-cd.readthedocs.io/en/stable/ |
| S3 | Flux (Flux documentation) | https://fluxcd.io/flux/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| OpenGitOps is a set of open-source standards, best practices, and community-focused education that helps organizations adopt a structured, standardized approach to imp... | S1 | "set of open-source standards, best practices, and community-focused education" |
| OpenGitOps is a set of open-source standards, best practices, and community-focused education that helps organizations adopt a structured, standardized approach to imp... | S1 | "structured, standardized approach to implementing GitOps" |
| A system managed by GitOps must have its desired state expressed declaratively. | S1 | "A system managed by GitOps must have its desired state expressed declaratively" |
| Desired state is stored in a way that enforces immutability, versioning and retains a complete version history. | S1 | "Desired state is stored in a way that enforces immutability, versioning and retains a complete version history" |
| Software agents automatically pull the desired state declarations from the source. | S1 | "Software agents automatically pull the desired state declarations from the source" |
| Software agents continuously observe actual system state and attempt to apply the desired state. | S1 | "Software agents continuously observe actual system state and attempt to apply the desired state" |
| Two GitOps tools for Kubernetes are Argo CD, a declarative, GitOps continuous delivery tool, and Flux, a tool for keeping Kubernetes clusters in sync with sources of c... | S2 | "Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes" |
| Two GitOps tools for Kubernetes are Argo CD, a declarative, GitOps continuous delivery tool, and Flux, a tool for keeping Kubernetes clusters in sync with sources of c... | S3 | "keeping Kubernetes clusters in sync with sources of configuration" |
| Two GitOps tools for Kubernetes are Argo CD, a declarative, GitOps continuous delivery tool, and Flux, a tool for keeping Kubernetes clusters in sync with sources of c... | S3 | "like Git repositories" |
