# Research notes: GitOps

Page: `content/devops/gitops.mdx`. Module: DevOps & Cloud. Date: 2026-11-15.

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): the four OpenGitOps principles, the sync loop of Argo CD, its sync settings and hooks, the Flux concepts, a walk-through of the Argo CD Getting Started guide, smoke tests as `PostSync` hooks, and common mistakes. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had the OpenGitOps definition, the four principles, and the two tools; they are still in `## What it is`.

The commands of `## Try it` are copied from S5 (the Argo CD Getting Started guide, fetched 2026-11-15). They were not run for this page: the walk-through needs a Kubernetes cluster, and the page says that a reader without one can read along. The page shows no command output. The smoke-test Job in `## How a tester uses it` follows the shape of the Slack example of S7 (`batch/v1` Job, `generateName`, the hook and hook-delete-policy annotations, `restartPolicy: Never`, `backoffLimit: 2`); its image and command are placeholders, and the page says so.

The old Argo CD page "Resource hooks" (`/user-guide/resource_hooks/`) now says "This page has moved"; the hooks are documented in S7.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | What is OpenGitOps? (OpenGitOps) | https://opengitops.dev/ |
| S2 | What Is Argo CD? (Argo CD documentation) | https://argo-cd.readthedocs.io/en/stable/ |
| S3 | Flux (Flux documentation) | https://fluxcd.io/flux/ |
| S4 | Core Concepts (Flux documentation) | https://fluxcd.io/flux/concepts/ |
| S5 | Getting Started (Argo CD documentation) | https://argo-cd.readthedocs.io/en/stable/getting_started/ |
| S6 | Automated Sync Policy (Argo CD documentation) | https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/ |
| S7 | Sync Phases and Waves (Argo CD documentation) | https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/ |
| S8 | Install Tools (Kubernetes documentation) | https://kubernetes.io/docs/tasks/tools/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| OpenGitOps is a set of open-source standards, best practices, and community-focused education that helps organizations adopt a structured, standardized approach to implementing GitOps. | S1 | "set of open-source standards, best practices, and community-focused education" |
| OpenGitOps is a set of open-source standards, best practices, and community-focused education that helps organizations adopt a structured, standardized approach to implementing GitOps. | S1 | "structured, standardized approach to implementing GitOps" |
| Flux describes GitOps as a way of managing infrastructure and applications so that the whole system is described declaratively and version controlled, with an automated process that makes the deployed environment match the state in one or more Git repositories. | S4 | "GitOps is a way of managing your infrastructure and applications so that whole system is described declaratively and version controlled, and having an automated process that ensures that the deployed environment matches the state specified in one or more Git repositories" |
| OpenGitOps names four principles: Declarative, Versioned and Immutable, Pulled Automatically, Continuously Reconciled. | S1 | "Versioned and Immutable" |
| OpenGitOps names four principles: Declarative, Versioned and Immutable, Pulled Automatically, Continuously Reconciled. | S1 | "Pulled Automatically" |
| OpenGitOps names four principles: Declarative, Versioned and Immutable, Pulled Automatically, Continuously Reconciled. | S1 | "Continuously Reconciled" |
| A system managed by GitOps must have its desired state expressed declaratively. | S1 | "A system managed by GitOps must have its desired state expressed declaratively" |
| Desired state is stored in a way that enforces immutability, versioning and retains a complete version history. | S1 | "Desired state is stored in a way that enforces immutability, versioning and retains a complete version history" |
| Software agents automatically pull the desired state declarations from the source. | S1 | "Software agents automatically pull the desired state declarations from the source" |
| Software agents continuously observe actual system state and attempt to apply the desired state. | S1 | "Software agents continuously observe actual system state and attempt to apply the desired state" |
| Two GitOps tools for Kubernetes are Argo CD, a declarative, GitOps continuous delivery tool, and Flux, a tool for keeping Kubernetes clusters in sync with sources of configuration (like Git repositories). | S2 | "Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes" |
| Two GitOps tools for Kubernetes are Argo CD, a declarative, GitOps continuous delivery tool, and Flux, a tool for keeping Kubernetes clusters in sync with sources of configuration (like Git repositories). | S3 | "keeping Kubernetes clusters in sync with sources of configuration" |
| Two GitOps tools for Kubernetes are Argo CD, a declarative, GitOps continuous delivery tool, and Flux, a tool for keeping Kubernetes clusters in sync with sources of configuration (like Git repositories). | S3 | "like Git repositories" |
| Argo CD uses Git repositories as the source of truth for the desired application state. | S2 | "Argo CD follows the GitOps pattern of using Git repositories as the source of truth for defining the desired application state" |
| Argo CD is a Kubernetes controller that continuously monitors running applications and compares the live state with the desired target state in the Git repository. | S2 | "Argo CD is implemented as a Kubernetes controller which continuously monitors running applications and compares the current, live state against the desired target state" |
| An application whose live state deviates from the target state is OutOfSync. | S2 | "A deployed application whose live state deviates from the target state is considered OutOfSync" |
| Argo CD reports and visualizes the differences, and can sync the live state back automatically or manually. | S2 | "Argo CD reports & visualizes the differences, while providing facilities to automatically or manually sync the live state back to the desired target state" |
| With automated sync, CI/CD pipelines no longer need direct access to the Argo CD API server to deploy. | S6 | "A benefit of automatic sync is that CI/CD pipelines no longer need direct access to the Argo CD API server to perform the deployment" |
| The pipeline commits and pushes the changed manifests to the Git repository that Argo CD tracks. | S6 | "the pipeline makes a commit and push to the Git repository with the changes to the manifests in the tracking Git repo" |
| Automated sync is off until you turn it on with argocd app set APPNAME --sync-policy automated. | S6 | "To configure automated sync run: argocd app set" |
| A new application shows Sync Policy: none, so automated sync is off. | S5 | "Sync Policy: <none>" |
| Automated sync syncs an application when Argo CD detects differences between the manifests in Git and the live state. | S6 | "Argo CD has the ability to automatically sync an application when it detects differences between the desired manifests in Git, and the live state in the cluster" |
| Self-heal syncs again when the live cluster's state deviates from Git; without it, changes made to the live cluster do not trigger an automated sync. | S6 | "By default, changes that are made to the live cluster will not trigger automated sync" |
| Self-heal syncs again when the live cluster's state deviates from Git; without it, changes made to the live cluster do not trigger an automated sync. | S6 | "To enable automatic sync when the live cluster's state deviates from the state defined in Git, run" |
| Prune deletes resources no longer defined in Git; by default, as a safety mechanism, automated sync does not delete them. | S6 | "By default (and as a safety mechanism), automated sync will not delete resources when Argo CD detects the resource is no longer defined in Git" |
| Sync phases and hooks decide when resources are applied, such as before or after the main sync operation. | S7 | "Sync phases and hooks define when resources are applied such as before or after the main sync operation" |
| The argocd.argoproj.io/hook annotation assigns a resource to a phase. | S7 | "Adding the argocd.argoproj.io/hook annotation to a resource will assign it to a specific phase" |
| PreSync runs before the manifests are applied. | S7 | "PreSync Executes prior to the application of the manifests" |
| Sync runs after all PreSync hooks succeeded, at the same time as the manifests are applied. | S7 | "Sync Executes after all PreSync hooks completed and were successful, at the same time as the application of the manifests" |
| PostSync runs after all Sync hooks succeeded, the application succeeded, and all resources are Healthy. | S7 | "PostSync Executes after all Sync hooks completed and were successful, a successful application, and all resources in a Healthy state" |
| SyncFail runs when the sync operation fails. | S7 | "SyncFail Executes when the sync operation fails" |
| Hooks can be any kind of Kubernetes resource, but they tend to be a Pod, a Job, or an Argo Workflow. | S7 | "Hooks can be any type of Kubernetes resource kind, but tend to be Pod, Job, or Argo Workflows" |
| In Flux, a Source defines where the repository with the desired state is, and how to get it, such as credentials and version selectors. | S4 | "A Source defines the origin of a repository containing the desired state of the system and the requirements to obtain it (e.g. credentials, version selectors)" |
| Examples of sources are GitRepository, OCIRepository, HelmRepository, and Bucket. | S4 | "examples of sources are GitRepository, OCIRepository, HelmRepository and Bucket resources" |
| A Kustomization is a set of Kubernetes resources that Flux reconciles in the cluster. | S4 | "The Kustomization custom resource represents a local set of Kubernetes resources (e.g. kustomize overlay) that Flux is supposed to reconcile in the cluster" |
| Reconciliation means making sure that a given state matches a desired state declared somewhere, such as a Git repository. | S4 | "Reconciliation refers to ensuring that a given state (e.g. application running in the cluster, infrastructure) matches a desired state declaratively defined somewhere (e.g. a Git repository)" |
| The walk-through follows the Argo CD Getting Started guide. | S5 | "Install Argo CD" |
| On a laptop, kind or minikube can run a Kubernetes cluster; kind requires Docker or Podman. | S8 | "kind lets you run Kubernetes on your local computer" |
| On a laptop, kind or minikube can run a Kubernetes cluster; kind requires Docker or Podman. | S8 | "This tool requires that you have either Docker or Podman installed" |
| On a laptop, kind or minikube can run a Kubernetes cluster; kind requires Docker or Podman. | S8 | "Like kind, minikube is a tool that lets you run Kubernetes locally" |
| You need kubectl and a kubeconfig file (by default ~/.kube/config). | S5 | "Installed kubectl command-line tool" |
| You need kubectl and a kubeconfig file (by default ~/.kube/config). | S5 | "Have a kubeconfig file (default location is ~/.kube/config)" |
| Install Argo CD: create the argocd namespace and apply the install manifest; all Argo CD services and application resources live there. | S5 | "kubectl create namespace argocd kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml" |
| Install Argo CD: create the argocd namespace and apply the install manifest; all Argo CD services and application resources live there. | S5 | "This will create a new argocd namespace where all Argo CD services and application resources will reside" |
| Install the CLI from the Argo CD releases on GitHub, or with Homebrew. | S5 | "Download the latest Argo CD version from https://github.com/argoproj/argo-cd/releases/latest" |
| Install the CLI from the Argo CD releases on GitHub, or with Homebrew. | S5 | "brew install argocd" |
| Set the default namespace of kubectl to argocd, then use argocd login --core. | S5 | "kubectl config set-context --current --namespace" |
| Set the default namespace of kubectl to argocd, then use argocd login --core. | S5 | "Default namespace for kubectl config must be set to argocd" |
| Set the default namespace of kubectl to argocd, then use argocd login --core. | S5 | "Use argocd login --core to configure CLI access and skip steps 3-5" |
| Argo CD's example repository has a guestbook application. | S5 | "An example repository containing a guestbook application is available at https://github.com/argoproj/argocd-example-apps.git" |
| Create the application with argocd app create. | S5 | "argocd app create guestbook --repo https://github.com/argoproj/argocd-example-apps.git --path guestbook --dest-server https://kubernetes.default.svc --dest-namespace default" |
| The application starts as OutOfSync, because it is not deployed yet and no Kubernetes resources were created. | S5 | "The application status is initially in OutOfSync state since the application has yet to be deployed, and no Kubernetes resources have been created" |
| argocd app sync guestbook gets the manifests from the repository and runs a kubectl apply of them. | S5 | "This command retrieves the manifests from the repository and performs a kubectl apply of the manifests" |
| Then you can see the application's resources, logs, events, and health status. | S5 | "you can now view its resource components, logs, events, and assessed health status" |
| kubectl port-forward connects to the API server without exposing the service; the UI is then at https://localhost:8080. | S5 | "kubectl port-forward can also be used to connect to the API server without exposing the service" |
| kubectl port-forward connects to the API server without exposing the service; the UI is then at https://localhost:8080. | S5 | "kubectl port-forward svc/argocd-server -n argocd 8080:443" |
| kubectl port-forward connects to the API server without exposing the service; the UI is then at https://localhost:8080. | S5 | "The API server can then be accessed using https://localhost:8080" |
| To use the UI, open the address in a browser and log in. | S5 | "Open a browser to the Argo CD external UI, and login by visiting the IP/hostname in a browser" |
| The initial password of the admin user is shown by argocd admin initial-password -n argocd. | S5 | "argocd admin initial-password -n argocd" |
| The default installation has a self-signed certificate. | S5 | "This default installation will have a self-signed certificate" |
| You can run smoke tests as PostSync hooks; if they succeed the application passed the validation; if they fail the deployment is marked as failed and Argo CD can notify you. | S7 | "In a similar manner you can run smoke tests as PostSync hooks" |
| You can run smoke tests as PostSync hooks; if they succeed the application passed the validation; if they fail the deployment is marked as failed and Argo CD can notify you. | S7 | "If they succeed you know that your application has passed the validation" |
| You can run smoke tests as PostSync hooks; if they succeed the application passed the validation; if they fail the deployment is marked as failed and Argo CD can notify you. | S7 | "If they fail then the whole deployment will be marked as failed and Argo CD can then notify you" |
| An essential check can run as a PreSync hook; if it fails, the whole sync stops and the deployment does not happen. | S7 | "For example you can run an essential check as a PreSync hook" |
| An essential check can run as a PreSync hook; if it fails, the whole sync stops and the deployment does not happen. | S7 | "If it fails then the whole sync operation will stop preventing the deployment from taking place" |
| With hook-delete-policy HookSucceeded, the hook resource is deleted when the sync succeeds. | S7 | "HookSucceeded The hook resource is deleted when the sync succeeds" |
| The Job has the shape of the Argo CD example. | S7 | "argocd.argoproj.io/hook-delete-policy: HookSucceeded" |
| Flux, too, keeps Kubernetes clusters in sync with sources of configuration, like Git repositories. | S3 | "keeping Kubernetes clusters in sync with sources of configuration" |
| Each change to the desired state is a new version in its complete version history. | S1 | "enforces immutability, versioning and retains a complete version history" |
| Git is the source of truth for the desired state. | S2 | "using Git repositories as the source of truth" |
| Argo CD keeps audit trails for application events and API calls. | S2 | "Audit trails for application events and API calls" |
| Argo CD can roll back to any application configuration committed in the Git repository. | S2 | "Rollback/Roll-anywhere to any application configuration committed in Git repository" |
| Argo CD detects and shows configuration drift automatically. | S2 | "Automated configuration drift detection and visualization" |
| A manual sync with pruning can always delete resources that are no longer in Git. | S6 | "To prune the resources, a manual sync can always be performed (with pruning checked)" |
| Automated sync tries once for each combination of commit and application parameters. | S6 | "Automated sync will only attempt one synchronization per unique combination of commit SHA1 and application parameters" |
| Argo CD can retry a failed sync with exponential backoff, when a retry policy is set. | S6 | "Argo CD can automatically retry a failed sync operation using exponential backoff" |
| Automated sync does not try again when the last attempt against the same commit and parameters failed. | S6 | "Automatic sync will not reattempt a sync if the previous sync attempt against the same commit-SHA and parameters had failed" |
| Rollback cannot be performed against an application with automated sync enabled. | S6 | "Rollback cannot be performed against an application with automated sync enabled" |
| Hooks do not run during a selective sync operation. | S7 | "Hooks do not run during a selective sync operation" |
| Delete the argocd-initial-admin-secret from the Argo CD namespace once you have changed the password. | S5 | "You should delete the argocd-initial-admin-secret from the Argo CD namespace once you changed the password" |
