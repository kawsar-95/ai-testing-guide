# Research notes: Terraform and Infrastructure as Code

Page: `content/devops/terraform-iac.mdx`. Module: DevOps & Cloud. Date: 2026-11-19 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`) on three tools that its shelf named: Terraform (the language: resources, providers and the lock file, variables, outputs, locals, data sources, modules, `for_each`, and the `lifecycle` rules; the commands `init`, `fmt`, `validate`, `plan`, `apply`, `destroy`, `show`, and `test`; state, remote state, locking, and sensitive data; tests and their mocks), Packer (templates, builds, builders, provisioners, post-processors, the commands `init`, `fmt`, `validate`, and `build`, the shell provisioner, the docker builder, and the docker-tag post-processor), and Crossplane (the control plane idea, composite resource definitions, compositions, composite resources, providers, functions, managed resources, and the commands `composition render` and `resource validate` of the CLI), with a practice run of nine steps on a laptop. The first version (2026-11-05) had three sources and one section. The page needs no cloud account, and nothing on it runs against a cloud: Terraform writes one local file, Packer builds a local Docker image, and the Crossplane CLI runs without a cluster. It gives no price. The tools that the shelf did not name (OpenTofu, HCP Terraform, Pulumi, AWS CloudFormation, the cloud builders of Packer, and the install of Crossplane in a cluster with its real providers) are not taught here. The HashiCorp pages are cited with their unversioned URLs, which show the latest docs, and the Crossplane pages with `latest`. Ansible has its own page after this one.

The practice run of `## Try it` (steps 1 to 9) was recorded on 2026-11-19 15:22:30 +0600 on Linux 7.0.0-43-generic with Terraform v1.17.2, Packer v1.16.2, the Crossplane CLI v2.5.0, Docker version 29.10.0, and bash 5.3.9. The tutorial installed Terraform and Packer for one user in `~/.local/bin` on the same day, with `install-hashicorp.sh` (kept in the tutorial author's work folder, not in the repository). The script gets the key file from hashicorp.com, and it stops unless the key has the fingerprint that S54 gives. Then it checks that the signature of the `SHA256SUMS` file is valid and was made by that key, and that the SHA-256 of the zip file is the one in the `SHA256SUMS` file. Nothing is installed when a check fails. The Crossplane CLI was downloaded from `https://cli.crossplane.io/stable/current/bin` and checked against the `.sha256` file next to it. That file comes from the same host, and the tutorial found no signature for it, so the check shows only that the download is whole. The SHA-256 of the three installed files are in the install records of the work folder, and the page shows their first 8 characters.

The runner `practice/iac.sh` (also in the work folder) ran in an empty environment (`env -i HOME=... PATH=... TMPDIR=...`), in a temp folder with copies of the practice folders `tf`, `pk`, and `xp`, with a new, empty `HOME` and a `TMPDIR` inside the temp folder. It ran the nine step files, each in its own shell, and saved the output of each step in `practice/iac/out/`. It stops at once if the image `packer-practice-qa-base:1.0` exists, if `alpine:latest` is not on the machine, if an image of `xpkg.crossplane.io` exists, or if a container of these images exists. After the steps, it shortened the folder of the run to `/work` in the outputs, removed the images that Crossplane pulled and the image of Packer, and removed the temp folder. The date, the versions, the ID and the size of the base image, the names of the `TF_`, `PACKER_`, `CHECKPOINT_`, `XP_`, and `CROSSPLANE_` variables that were set before the steps (none), the pulled images with their digests, the counts of images and containers after the run (0), and the top-level entries that the run added to the real home folder (none) are in `practice/iac/out/env.txt`. The page reads them from that file, and the page build stops if a fact that the text states (an exit status, a count, a version) is not in the output. The tutorial did not watch the network, so the page does not say which connections were made.

The runner ran four times that day, and the page uses the last run (2026-11-19 15:22:30 +0600). Between the runs, the tutorial removed the option `--crossplane-version=v2.5.0` from steps 8 and 9 (the first run did not find an image with that tag), added the JSON line to step 2, added the shortened paths, the image digests, and the lock file lines to the runner and to step 1, and, in the last change, added the badly formatted file to step 1 and shortened step 3 (the apply now prints the plan once). The earlier runs are not kept.

- Step 1: `terraform init` installed `hashicorp/local` v2.9.1, and the lock file shows the constraint `>= 2.5.0` for the constraint `>= 2.5` of the file. `terraform fmt -check -diff` and `terraform validate` both ended with the exit status 0. The deliberately badly formatted file `bad.tf` made `fmt` end with the exit status 3.
- Step 2: the first plan ended with the exit status 2, the Python line printed `[('local_file.settings', ['create'])]`, the apply of the saved plan added 1 resource, and the second plan ended with the exit status 0.
- Step 3: after the hand edit, the plan said `will be created` (1 to add). No page that the tutorial read says why it did not say that the file would be updated. The `-var env_name=QA` run was refused by the `validation` rule, with the exit status 1.
- Step 4: the state holds the content of the file in plain text.
- Step 5: the test file passed 3 runs (`Success! 3 passed, 0 failed.`, exit status 0), and the wrong test failed with a diff (exit status 1).
- Step 6: `terraform destroy` destroyed 1 resource, and the file and the state were empty afterwards.
- Step 7: Packer v1.16.2 installed the Docker plugin v1.1.5, `fmt -check` and `validate` ended with the exit status 0, the build committed the container and tagged `packer-practice-qa-base:1.0`, and the two `docker run` checks printed `built by Packer` and the version of `curl`. The tutorial removed the image.
- Step 8: `crossplane composition render` printed the `App`, a Deployment with 2 replicas and the image `nginx`, and a Service (port 8080 to port 80), with the exit status 0.
- Step 9: `crossplane resource validate` accepted `app.yaml` (exit status 0), refused the copy with the typo `imagee` with two errors (exit status 1), and `render` of that copy still ended with the exit status 0, with no `image:` line in the output.

The four manifest files of steps 8 and 9 were downloaded from `https://docs.crossplane.io/latest/manifests/get-started/composition/`, which is where the page "Get started with composition" (S50) takes them from. The tutorial compared their lines with the text of that page, without the indentation (the cache of the page does not keep it), and every line was there, in order.

Some quotes are written as `scripts/devops_claimcheck.py` reads them (case, white space, and curly quotes do not count as differences).

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | What is Terraform? (HashiCorp Developer) | https://developer.hashicorp.com/terraform/intro |
| S2 | Terraform Language Documentation (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language |
| S3 | resource block reference (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/block/resource |
| S4 | Providers (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/providers |
| S5 | Provider requirements (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/providers/requirements |
| S6 | Dependency lock file (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/files/dependency-lock |
| S7 | variable block reference (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/block/variable |
| S8 | output block reference (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/block/output |
| S9 | locals block reference (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/block/locals |
| S10 | data block reference (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/block/data |
| S11 | State (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/state |
| S12 | Remote state (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/state/remote |
| S13 | State locking (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/state/locking |
| S14 | Manage sensitive data in your configuration (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/manage-sensitive-data |
| S15 | Modules overview (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/modules |
| S16 | The lifecycle meta-argument (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle |
| S17 | The for_each meta-argument (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/meta-arguments/for_each |
| S18 | terraform init command (HashiCorp Developer) | https://developer.hashicorp.com/terraform/cli/commands/init |
| S19 | terraform validate command (HashiCorp Developer) | https://developer.hashicorp.com/terraform/cli/commands/validate |
| S20 | terraform fmt command (HashiCorp Developer) | https://developer.hashicorp.com/terraform/cli/commands/fmt |
| S21 | terraform plan command (HashiCorp Developer) | https://developer.hashicorp.com/terraform/cli/commands/plan |
| S22 | terraform apply command (HashiCorp Developer) | https://developer.hashicorp.com/terraform/cli/commands/apply |
| S23 | terraform destroy command (HashiCorp Developer) | https://developer.hashicorp.com/terraform/cli/commands/destroy |
| S24 | terraform show command (HashiCorp Developer) | https://developer.hashicorp.com/terraform/cli/commands/show |
| S25 | JSON output format (HashiCorp Developer) | https://developer.hashicorp.com/terraform/internals/json-format |
| S26 | Tests (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/tests |
| S27 | terraform test command (HashiCorp Developer) | https://developer.hashicorp.com/terraform/cli/commands/test |
| S28 | Style guide (HashiCorp Developer) | https://developer.hashicorp.com/terraform/language/style |
| S29 | local_file resource (terraform-provider-local) | https://raw.githubusercontent.com/hashicorp/terraform-provider-local/main/docs/resources/file.md |
| S30 | Introduction to Packer (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/intro |
| S31 | Packer terminology (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/terminology |
| S32 | HCL templates (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/templates/hcl_templates |
| S33 | source block (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/templates/hcl_templates/blocks/source |
| S34 | build block (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/templates/hcl_templates/blocks/build |
| S35 | provisioner block (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/templates/hcl_templates/blocks/build/provisioner |
| S36 | post-processor block (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/templates/hcl_templates/blocks/build/post-processor |
| S37 | packer init command (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/commands/init |
| S38 | packer build command (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/commands/build |
| S39 | packer validate command (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/commands/validate |
| S40 | shell provisioner (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/provisioners/shell |
| S41 | Docker builder (HashiCorp Developer) | https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker |
| S42 | Docker Tag post-processor (HashiCorp Developer) | https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/post-processor/docker-tag |
| S43 | What's Crossplane? (Crossplane documentation) | https://docs.crossplane.io/latest/whats-crossplane/ |
| S44 | Composite resource definitions (Crossplane documentation) | https://docs.crossplane.io/latest/composition/composite-resource-definitions/ |
| S45 | Compositions (Crossplane documentation) | https://docs.crossplane.io/latest/composition/compositions/ |
| S46 | Composite resources (Crossplane documentation) | https://docs.crossplane.io/latest/composition/composite-resources/ |
| S47 | Providers (Crossplane documentation) | https://docs.crossplane.io/latest/packages/providers/ |
| S48 | Functions (Crossplane documentation) | https://docs.crossplane.io/latest/packages/functions/ |
| S49 | Managed resources (Crossplane documentation) | https://docs.crossplane.io/latest/managed-resources/managed-resources/ |
| S50 | Get started with composition (Crossplane documentation) | https://docs.crossplane.io/latest/get-started/get-started-with-composition/ |
| S51 | Crossplane CLI (Crossplane documentation) | https://docs.crossplane.io/cli/latest/ |
| S52 | Crossplane CLI command reference (Crossplane documentation) | https://docs.crossplane.io/cli/latest/command-reference/ |
| S53 | packer fmt command (HashiCorp Developer) | https://developer.hashicorp.com/packer/docs/commands/fmt |
| S54 | Verify HashiCorp binaries (HashiCorp Developer) | https://developer.hashicorp.com/well-architected-framework/operational-excellence/verify-hashicorp-binary |
| S55 | Install Terraform (HashiCorp Developer) | https://developer.hashicorp.com/terraform/install |
| S56 | Install Packer (HashiCorp Developer) | https://developer.hashicorp.com/packer/install |
| S57 | terraform state list command (HashiCorp Developer) | https://developer.hashicorp.com/terraform/cli/commands/state/list |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently | S1 | "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently" |
| You define the resources in human-readable configuration files that you can version, reuse, and share | S1 | "define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share" |
| Terraform creates and manages the resources through the APIs of cloud platforms and other services | S1 | "Terraform creates and manages resources on cloud platforms and other services through their application programming interfaces (APIs)" |
| The core workflow has three stages: write, plan, and apply | S1 | "The core Terraform workflow consists of three stages" |
| The core workflow has three stages: write, plan, and apply | S1 | "Write: You define resources" |
| The core workflow has three stages: write, plan, and apply | S1 | "Plan: Terraform creates an execution plan" |
| The core workflow has three stages: write, plan, and apply | S1 | "Apply: On approval, Terraform performs the proposed operations" |
| In the plan stage, Terraform describes the infrastructure that it will create, update, or destroy | S1 | "Plan: Terraform creates an execution plan describing the infrastructure it will create, update, or destroy based on the existing infrastructure and your configuration" |
| In the apply stage, Terraform performs the proposed operations after approval, in the correct order | S1 | "Apply: On approval, Terraform performs the proposed operations in the correct order, respecting any resource dependencies" |
| Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration | S30 | "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration" |
| A machine image is a single static unit that contains a pre-configured operating system and installed software | S30 | "A machine image is a single static unit that contains a pre-configured operating system and installed software" |
| Packer does not replace configuration management like Chef or Puppet | S30 | "Packer does not replace configuration management like Chef or Puppet" |
| Crossplane is a control plane framework for platform engineering | S43 | "Crossplane is a control plane framework for platform engineering" |
| It lets you build control planes to manage your cloud native software | S43 | "Crossplane lets you build control planes to manage your cloud native software" |
| A control plane is software that controls other software | S43 | "A control plane is software that controls other software" |
| The main purpose of the Terraform language is declaring resources, which represent infrastructure objects | S2 | "The main purpose of the Terraform language is declaring resources, which represent infrastructure objects" |
| Blocks are containers for other content | S2 | "Blocks are containers for other content and usually represent the configuration of some kind of object, like a resource" |
| Arguments assign a value to a name | S2 | "Arguments assign a value to a name" |
| Expressions represent a value, either literally or by referencing and combining other values | S2 | "Expressions represent a value, either literally or by referencing and combining other values" |
| The language is declarative, describing an intended goal rather than the steps to reach that goal | S2 | "The Terraform language is declarative, describing an intended goal rather than the steps to reach that goal" |
| The resource block defines a piece of infrastructure | S3 | "The resource block defines a piece of infrastructure and specifies the settings for Terraform to create it with" |
| The arguments that an individual resource supports are determined by the provider | S3 | "The arguments that an individual resource supports are determined by the provider" |
| The variable block is similar to a function argument in other programming languages | S7 | "The variable block is similar to a function argument in other programming languages" |
| A validation block can refuse a value | S7 | "Terraform evaluates variable validations while it creates a plan, and if a validation block's condition expression evaluates to false, then Terraform throws an error, displays the error_message, and stops the current operation" |
| The output block lets you expose information about your infrastructure | S8 | "The output block lets you expose information about your infrastructure" |
| One use of an output is passing information from a Terraform operation to an automation tool | S8 | "Passing information from a Terraform operation to an automation tool" |
| The locals block is similar to function-scoped variables in other programming languages | S9 | "The locals block is similar to function-scoped variables in other programming languages" |
| The data block fetches data about a resource from the provider without provisioning an associated infrastructure object | S10 | "The data block fetches data about a resource from the provider without provisioning an associated infrastructure object" |
| Terraform relies on plugins called providers to interact with cloud providers, SaaS providers, and other APIs | S4 | "Terraform relies on plugins called providers to interact with cloud providers, SaaS providers, and other APIs" |
| Every resource type is implemented by a provider | S4 | "Every resource type is implemented by a provider; without providers, Terraform can't manage any kind of infrastructure" |
| Providers are distributed separately from Terraform itself, and each has its own version numbers | S4 | "Providers are distributed separately from Terraform itself, and each provider has its own release cadence and version numbers" |
| A configuration declares the providers that it requires in a required_providers block | S5 | "Define the provider's source, local name, and version in the required_providers block inside your top-level terraform block" |
| Running terraform init locally installs a provider and updates the dependency lock file | S5 | "Running terraform init locally installs a provider and updates the Dependency lock file with the latest version matching the version string you configured in your required_providers block" |
| The lock file is always named .terraform.lock.hcl | S6 | "The lock file is always named .terraform.lock.hcl" |
| You should include it in your version control repository | S6 | "You should include this file in your version control repository so that you can discuss potential changes to your external dependencies via code review, just as you would discuss potential changes to your configuration itself" |
| In production, HashiCorp recommends constraining the acceptable provider versions | S4 | "In production we recommend constraining the acceptable provider versions in the configuration's provider requirements block" |
| The terraform init command initializes a working directory that contains Terraform configuration files | S18 | "The terraform init command initializes a working directory containing Terraform configuration files" |
| It is the first command that you should run after writing a new configuration or cloning an existing one | S18 | "This is the first command you should run after writing a new Terraform configuration or cloning an existing configuration from version control" |
| It is safe to run it multiple times | S18 | "It is safe to run this command multiple times" |
| The terraform fmt command formats configuration files to the canonical format and style | S20 | "The terraform fmt command formats Terraform configuration file contents so that it matches the canonical format and style" |
| The terraform validate command checks that a configuration is syntactically valid and internally consistent | S19 | "Validate runs checks that verify whether a configuration is syntactically valid and internally consistent, regardless of any provided variables or existing state" |
| It does not validate remote services | S19 | "It does not validate remote services, such as remote state or provider APIs" |
| It needs an initialized working directory | S19 | "Validation requires an initialized working directory with any referenced plugins and modules installed" |
| HashiCorp's style guide says to run terraform fmt and terraform validate before committing code | S28 | "Run terraform fmt and terraform validate before committing your code to version control" |
| The terraform plan command creates an execution plan, which lets you preview the changes that Terraform plans to make | S21 | "The terraform plan command creates an execution plan, which lets you preview the changes that Terraform plans to make to your infrastructure" |
| By default, it reads the current state of existing remote objects | S21 | "Reads the current state of any already-existing remote objects to make sure that the Terraform state is up-to-date" |
| It compares the configuration to the prior state | S21 | "Compares the current configuration to the prior state and noting any differences" |
| It proposes a set of change actions that should, if applied, make the remote objects match the configuration | S21 | "Proposes a set of change actions that should, if applied, make the remote objects match the configuration" |
| Without the -out option, it creates a speculative plan | S21 | "If you run terraform plan without the -out=FILE option then it will create a speculative plan, which is a description of the effect of the plan but without any intent to actually apply it" |
| You should always re-check the final non-speculative plan before applying | S21 | "you should always re-check the final non-speculative plan before applying to make sure that it still matches your intent" |
| With -detailed-exitcode, the command returns a detailed exit code when it exits | S21 | "-detailed-exitcode - Returns a detailed exit code when the command exits" |
| With -detailed-exitcode, the command returns a detailed exit code when it exits | S21 | "0 = Succeeded with empty diff (no changes)" |
| With -detailed-exitcode, the command returns a detailed exit code when it exits | S21 | "1 = Error" |
| With -detailed-exitcode, the command returns a detailed exit code when it exits | S21 | "2 = Succeeded with non-empty diff (changes present)" |
| The terraform apply command executes the operations of a plan | S22 | "The terraform apply command executes the operations proposed in a Terraform plan" |
| Without a saved plan file, it creates a new plan and prompts you to approve it | S22 | "When you run terraform apply without passing a saved plan file, Terraform automatically creates a new execution plan as if you had run terraform plan, prompts you to approve that plan, and performs the indicated operations" |
| With a saved plan file, it does not prompt | S22 | "When you pass a saved plan file to terraform apply, Terraform performs the operations in the saved plan without prompting you for confirmation" |
| The terraform destroy command deprovisions all objects that a configuration manages | S23 | "The terraform destroy command deprovisions all objects managed by a Terraform configuration" |
| Terraform must store state about your workspace's managed infrastructure and configuration | S11 | "Terraform must store state about your workspace's managed infrastructure and configuration" |
| It uses state to map real world resources to your configuration | S11 | "Terraform uses your workspace's state to map real world resources to your configuration, keep track of metadata, and to improve performance for large infrastructures" |
| Before any operation, Terraform does a refresh to update the state with the real infrastructure | S11 | "Prior to any operation, Terraform does a refresh to update the state with the real infrastructure" |
| By default, the state is a local file named terraform.tfstate | S11 | "By default, Terraform stores each workspace's state in a local file named terraform.tfstate, and a backup of the previous state in terraform.tfstate.backup" |
| It is a JSON text file, and you should not edit it directly | S11 | "Terraform stores your workspaces state as a JSON text file. Do not directly edit this file" |
| With remote state, Terraform writes the state data to a remote data store that a whole team can share | S12 | "With remote state, Terraform writes the state data to a remote data store, which can then be shared between all members of a team" |
| If the backend supports it, Terraform locks the state for all operations that could write state | S13 | "If supported by your backend, Terraform will lock your state for all operations that could write state" |
| The lock prevents others from corrupting the state | S13 | "This prevents others from acquiring the lock and potentially corrupting your state" |
| If locking fails, Terraform does not continue | S13 | "If state locking fails, Terraform does not continue" |
| State and plan files can hold secrets | S14 | "Terraform state and plan files contain detailed information about your infrastructure, including resource attributes and metadata that can contain sensitive values, such as initial database passwords or API tokens" |
| A local state file is a plaintext file | S14 | "If you are developing with Terraform locally, Terraform stores your state in a plaintext file, which includes any secret values you defined in your configuration" |
| HashiCorp says to treat it as sensitive data and to keep it out of Git workflows | S14 | "Treat your state file as sensitive data by excluding it from Git workflows and following our recommendations to secure your state file" |
| It also says to avoid storing the state in a version control system or other storage that does not support state locking and secure access control | S11 | "Avoid storing your state in a version control system or other storage solution that does not support Terraform state locking and secure access control" |
| A module is a collection of resources that Terraform manages together | S15 | "A module is a collection of resources that Terraform manages together" |
| The configuration in the root directory is the root module | S15 | "Every Terraform workspace includes configuration files in its root directory. Terraform refers to this configuration as the root module" |
| Modules that you call with module blocks are child modules | S15 | "Modules you configure using module blocks are called child modules" |
| The for_each meta-argument manages several similar objects without a separate block for each | S17 | "Use the for_each meta-argument to manage several similar objects, such as a fixed pool of compute instances, without writing a separate block for each object" |
| It accepts a map or a set of strings | S17 | "The for_each meta-argument accepts a map or a set of strings and creates an instance for each item in that map or set" |
| By default, when an argument cannot change in place, Terraform destroys the object and then creates a replacement | S16 | "By default, when Terraform must change a resource argument that cannot be updated in-place due to remote API limitations, Terraform destroys the existing object and then creates a new replacement object with the new configured arguments" |
| The create_before_destroy rule reverses that order | S16 | "Use the create_before_destroy rule to instruct Terraform to create a replacement resource before destroying the current resource" |
| With prevent_destroy set to true, Terraform rejects plans that would destroy the object | S16 | "When prevent_destroy is set to true, Terraform rejects plans that would destroy the infrastructure object associated with the resource and returns an error" |
| That rule does not stop the destruction when you remove the resource's configuration | S16 | "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration" |
| The ignore_changes argument lists attributes that Terraform should ignore when it plans updates | S16 | "the ignore_changes meta-argument specifies resource attributes that Terraform should ignore when planning updates to the associated remote object" |
| The terraform show command provides human-readable output from a state or plan file | S24 | "The terraform show command provides human-readable output from a state or plan file" |
| The apply page says to inspect a saved plan file with it before applying | S22 | "Use terraform show to inspect a saved plan file before applying it" |
| With the -json flag, it generates machine-readable output | S24 | "Add the -json command-line flag to generate machine-readable output" |
| For a plan file, the JSON holds the plan, the configuration, and the current state | S24 | "For Terraform plan files, terraform show -json shows a JSON representation of the plan, configuration, and current state" |
| With -json, sensitive values in the state show in plain text | S24 | "When using the -json command-line flag, any sensitive values in Terraform state will be displayed in plain text" |
| Terraform can output a machine-readable JSON representation of a plan file's changes | S25 | "Terraform can output a machine-readable JSON representation of a plan file's changes" |
| The same page says to use terraform show -json to produce it | S25 | "Use terraform show -json <FILE> to generate a JSON representation of a plan or state file" |
| Terraform tests let authors validate that module configuration updates do not introduce breaking changes | S26 | "Terraform tests let authors validate that module configuration updates do not introduce breaking changes" |
| Tests run against test-specific, short-lived resources | S26 | "Tests run against test-specific, short-lived resources, preventing any risk to your existing infrastructure or state" |
| Terraform finds test files by their extension, .tftest.hcl or .tftest.json | S26 | "Terraform discovers test files based on their file extension: .tftest.hcl or .tftest.json" |
| A test file has one or more run blocks | S26 | "One to many run blocks" |
| A run block can hold assert blocks | S26 | "Optional assert blocks" |
| By default, a run block applies the configuration, which creates real infrastructure | S26 | "By default, tests within Terraform create real infrastructure and can run assertions and validations against that infrastructure" |
| With command = plan, a run block creates no infrastructure | S26 | "Replacing the command value with command = plan instructs Terraform to not create new infrastructure for this run block" |
| The expect_failures attribute lists objects that should fail their custom conditions | S26 | "In each run block the expect_failures attribute can provide a list of checkable objects (resources, data sources, check blocks, input variables, and outputs) that should fail their custom conditions" |
| Terraform v1.7.0 added the ability to mock data that providers return during a test | S26 | "Terraform v1.7.0 introduced the ability to mock data returned by the providers during a terraform test execution" |
| The terraform test command searches the current directory and the testing directory for test files and runs them | S27 | "This command searches the current directory and the specified testing directory for Terraform testing files and executes the specified tests" |
| The default testing directory is named tests | S27 | "By default, the directory containing test files is named tests" |
| Each test file keeps its state in memory, apart from the state of the configuration under test | S27 | "Each Terraform test file will maintain all Terraform state it requires within memory as it executes, starting empty. This state is entirely separate from any existing state for the configuration under test" |
| After a test file has run, Terraform tries to destroy any infrastructure that is left | S27 | "Once Terraform fully executes each test file, Terraform attempts to destroy any remaining infrastructure" |
| The command can create real infrastructure that can cost money | S27 | "The Terraform test command can create real infrastructure than can cost you money" |
| The -json option displays machine-readable JSON output, and the -junit-xml option saves a test report in JUnit XML format | S27 | "-json - Displays machine-readable JSON output for your testing results" |
| The -json option displays machine-readable JSON output, and the -junit-xml option saves a test report in JUnit XML format | S27 | "-junit-xml=<output file path> - Saves a test report in JUnit XML format to the specified file" |
| Packer reads and applies configurations defined in HCL template files | S32 | "Packer reads and applies configurations defined in HCL template files" |
| When you pass a directory, Packer parses every file whose name ends in .pkr.hcl or .pkr.json | S32 | "When a directory is passed, all files in the folder with a name ending with .pkr.hcl or .pkr.json will be parsed using the HCL2 format" |
| A template defines one or more builds | S31 | "Templates are files that define one or more builds by configuring various Packer components" |
| A build is a single task that produces an artifact for a single platform | S31 | "Builds are a single task that eventually produces an artifact for a single platform. Multiple builds run in parallel" |
| A builder creates a machine image for a single platform | S31 | "Builders are components of Packer that are able to create a machine image for a single platform" |
| Provisioners install and configure software in a running machine before it becomes a static artifact | S31 | "Provisioners are components of Packer that install and configure software within a running machine prior to that machine being turned into a static artifact" |
| A post-processor takes the result of a builder or another post-processor and creates a new artifact | S31 | "Post-processors are components of Packer that take the result of a builder or another post-processor and process that to create a new artifact" |
| An artifact is the result of a single build | S31 | "Artifacts are the results of a single build, and are usually a set of IDs or files to represent a machine image" |
| The source block defines reusable builder configuration | S33 | "The source block defines reusable builder configuration blocks" |
| The build block says which builders to run, how to provision them, and what post-processing to do | S34 | "The build block specifies which builders Packer should run, how to provision them, and any post-processing actions Packer should perform on the resulting artifacts" |
| The provisioner block defines how to configure a provisioner | S35 | "The provisioner block defines how to configure a provisioner" |
| The post-processor block defines how to configure a post-processor | S36 | "The post-processor block defines how a post-processor is configured" |
| The packer init command downloads and installs the plugins that the required_plugins block lists | S37 | "Use the packer init command to download and install plugins according to the required_plugins block in Packer templates written in HCL" |
| The packer validate command checks the syntax and configuration of a template | S39 | "The packer validate Packer command is used to validate the syntax and configuration of a template" |
| It returns a zero exit status on success and a non-zero exit status on failure | S39 | "The command will return a zero exit status on success, and a non-zero exit status on failure" |
| The packer build command runs all the builds of a template | S38 | "The packer build command takes a template and runs all the builds within it in order to generate a set of artifacts" |
| The builds run in parallel unless the template says otherwise | S38 | "The various builds specified within a template are executed in parallel, unless otherwise specified" |
| The shell provisioner runs shell scripts on the machine that Packer builds | S40 | "The shell Packer provisioner runs shell scripts on the machine Packer builds" |
| The docker builder builds Docker images using Docker | S41 | "The docker Packer builder builds Docker images using Docker" |
| It starts a container, runs the provisioners in it, then exports the container or commits the image | S41 | "The builder starts a Docker container, runs provisioners within this container, then exports the container for reuse or commits the image" |
| Packer builds the container without a Dockerfile | S41 | "Packer builds Docker containers without the use of Dockerfiles" |
| The builder needs a machine with Docker Engine installed | S41 | "The Docker builder must run on a machine that has Docker Engine installed" |
| With commit set to true, Packer commits the container to an image instead of exporting it | S41 | "commit (bool) - If true, the container will be committed to an image rather than exported" |
| The pull option defaults to true, so Packer pulls the base image first | S41 | "pull (bool) - If true, the configured image will be pulled using docker pull prior to use. Otherwise, it is assumed the image already exists and can be used. This defaults to true if not set" |
| The docker-tag post-processor tags a committed artifact of the docker builder into a repository | S42 | "The Packer Docker Tag post-processor takes an artifact from the docker builder that was committed and tags it into a repository" |
| Control planes expose an API | S43 | "Control planes expose an API" |
| You use the API to tell the control plane what software to configure and how, which is your desired state | S43 | "You use the API to tell the control plane what software it should configure and how - this is your desired state" |
| If the software drifts from the desired state, the control plane corrects the drift | S43 | "If your software ever drifts from your desired state, the control plane automatically corrects the drift" |
| Crossplane is built on Kubernetes | S43 | "It’s built on Kubernetes, so it works with all the Kubernetes tools you already use" |
| It has four major components: Composition, managed resources, operations, and a package manager | S43 | "Crossplane has four major components:" |
| It has four major components: Composition, managed resources, operations, and a package manager | S43 | "Composition" |
| It has four major components: Composition, managed resources, operations, and a package manager | S43 | "Managed resources" |
| It has four major components: Composition, managed resources, operations, and a package manager | S43 | "Operations" |
| It has four major components: Composition, managed resources, operations, and a package manager | S43 | "Package manager" |
| Composition lets you build custom APIs | S43 | "Composition lets you build custom APIs to control your cloud native software" |
| With Crossplane you configure a pipeline of functions instead of writing a controller | S43 | "With Crossplane you don’t have to write a controller. Instead you configure a pipeline of functions" |
| The functions return declarative configuration that Crossplane should apply | S43 | "The functions return declarative configuration that Crossplane should apply" |
| A composite resource definition (XRD) defines the schema for a custom API | S44 | "Composite resource definitions (XRDs) define the schema for a custom API" |
| Users create composite resources (XRs) with the schema of an XRD | S44 | "Users create composite resources (XRs) using the API schema defined by an XRD" |
| A composition is a template for creating several Kubernetes resources as a single composite resource | S45 | "Compositions are a template for creating multiple Kubernetes resources as a single composite resource" |
| A composite resource represents a set of Kubernetes resources as a single Kubernetes object | S46 | "A composite resource, or XR, represents a set of Kubernetes resources as a single Kubernetes object" |
| Providers enable Crossplane to provision infrastructure on an external service | S47 | "Providers enable Crossplane to provision infrastructure on an external service" |
| A managed resource represents an external service in a provider | S49 | "A managed resource (MR) represents an external service in a Provider" |
| Functions extend Crossplane with new ways to configure composition | S48 | "Functions extend Crossplane with new ways to configure composition" |
| The tutorial of the Crossplane docs creates an App custom resource that Crossplane turns into a Deployment and a Service | S50 | "This guide shows how to create a new kind of custom resource named App. When a user calls the custom resource API to create an App, Crossplane creates a Deployment and a Service" |
| The Crossplane CLI is a single standalone binary | S51 | "The Crossplane CLI is a single standalone binary with no external dependencies" |
| Most Crossplane CLI commands are independent of Kubernetes | S51 | "Most Crossplane CLI commands are independent of Kubernetes and don’t require access to a Crossplane pod" |
| The composition render command shows what resources a composition would create or change | S52 | "The composition render command shows you what resources a Composition would create or mutate by running the composition locally and printing its results" |
| By default, it runs composition functions using Docker | S52 | "By default, the render command pulls and runs Composition Functions using Docker" |
| The resource validate command checks resources against the schemas of XRDs, CRDs, providers, functions, and configurations | S52 | "The resource validate command validates the provided Crossplane resources against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)" |
| It also detects unknown fields | S52 | "It uses the Kubernetes API server’s validation library plus other checks such as unknown-field detection, a common source of difficult-to-debug Crossplane issues" |
| The docs mark the command as beta | S52 | "Beta features may change in a future release" |
| The four manifest files of these steps come from the page "Get started with composition" | S50 | "Get started with composition" |
| On 2026-11-19, the install page of Terraform showed 1.17.2 as the latest version | S55 | "1.17.2 (latest)" |
| On 2026-11-19, the install page of Terraform showed 1.17.2 as the latest version , and the install page of Packer showed 1.16.2 | S56 | "1.16.2 (latest)" |
| Both pages list package-manager commands and a binary download | S55 | "Binary download" |
| Both pages list package-manager commands and a binary download | S55 | "brew install hashicorp/tap/terraform" |
| Both pages list package-manager commands and a binary download | S56 | "Binary download" |
| Both pages list package-manager commands and a binary download | S56 | "brew install hashicorp/tap/packer" |
| HashiCorp says to verify that HashiCorp created and signed the binary before you run it | S54 | "Hackers can gain access to your critical systems by tricking you into running an executable that includes malicious code. You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| HashiCorp uses a public PGP key to sign the checksums of its product archives | S54 | "HashiCorp uses a public PGP key to sign certain files, including the checksums for its product archives." |
| The page gives the fingerprint of the key | S54 | "Primary key fingerprint: C874 011F 0AB4 0511 0D02 1055 3436 5D94 72D7 468F" |
| The Crossplane CLI is a single standalone binary | S51 | "The Crossplane CLI is a single standalone binary with no external dependencies" |
| Some of its commands, such as crossplane composition render, need a container runtime that works with Docker | S51 | "Some commands, such as crossplane composition render and crossplane project build, do require a Docker compatible container runtime." |
| The tutorial downloaded the binary by hand, as the page describes | S51 | "If you don’t want to run shell script you can manually download a binary from the Crossplane releases repository at" |
| The page says to move it to a folder in your PATH, for example /usr/local/bin | S51 | "Move the binary to a location in your $PATH, for example /usr/local/bin." |
| The terraform block names the provider in the required_providers block | S5 | "Define the provider's source, local name, and version in the required_providers block inside your top-level terraform block" |
| A variable block is like a function argument | S7 | "The variable block is similar to a function argument in other programming languages" |
| The locals block holds the text of the settings | S9 | "The locals block is similar to function-scoped variables in other programming languages" |
| The local_file resource generates a local file with the given content | S29 | "Generates a local file with the given content." |
| The output block exposes the path of the file | S8 | "The output block lets you expose information about your infrastructure" |
| terraform init installed the provider and created .terraform.lock.hcl | S5 | "Running terraform init locally installs a provider and updates the Dependency lock file with the latest version matching the version string you configured in your required_providers block" |
| The lock file is how Terraform remembers its choice of version | S6 | "after selecting a specific version of each dependency Terraform remembers the decisions it made in a dependency lock file so that it can (by default) make the same decisions again in future" |
| The list holds checksums for your platform and for other platforms | S6 | "The lock file will therefore include checksums for both the package you installed for your current platform and any other packages that might be available for other platforms" |
| On a later init, Terraform returns an error if an installed package matches none of the recorded checksums | S6 | "Terraform will also verify that each package it installs matches at least one of the checksums it previously recorded in the lock file, if any, returning an error if none of the checksums match" |
| The exit status is 0 if the input is properly formatted, and non-zero otherwise, with a list of the file names | S20 | "Checks if the input is formatted. The exit status is 0 if the command's input is properly formatted. Otherwise, the exit status is non-zero, and the command outputs a list of improperly formatted file names." |
| It checks that a configuration is syntactically valid and internally consistent | S19 | "Validate runs checks that verify whether a configuration is syntactically valid and internally consistent, regardless of any provided variables or existing state" |
| The plan shows file_permission = "0777", which is the default of the provider | S29 | "Permissions to set for the output file (before umask), expressed as string in" |
| The plan shows file_permission = "0777", which is the default of the provider | S29 | "Default value is `"0777"`." |
| That means that the command succeeded and that changes are present | S21 | "2 = Succeeded with non-empty diff (changes present)" |
| It prints the address and the actions of each item of resource_changes | S25 | ""resource_changes" is a description of the individual change actions that" |
| The valid values of actions are no-op, create, read, update, delete, and two replace pairs | S25 | "Valid actions values are:" |
| terraform apply tfplan got a saved plan, so it did not ask for approval | S22 | "When you pass a saved plan file to terraform apply, Terraform performs the operations in the saved plan without prompting you for confirmation" |
| Its exit status was 0, which means success with no changes | S21 | "0 = Succeeded with empty diff (no changes)" |
| Before any operation, Terraform does a refresh to update the state with the real infrastructure | S11 | "Prior to any operation, Terraform does a refresh to update the state with the real infrastructure" |
| The docs say to make sure that no one can change your infrastructure outside of your Terraform workflow when you use it | S22 | "If you use -auto-approve, we recommend making sure that no one can change your infrastructure outside of your Terraform workflow. This minimizes the risk of unpredictable changes and configuration drift" |
| Terraform checks the validations while it creates a plan, and it stops the operation when a condition is false | S7 | "Terraform evaluates variable validations while it creates a plan, and if a validation block's condition expression evaluates to false, then Terraform throws an error, displays the error_message, and stops the current operation" |
| The exit status 1 means an error | S21 | "1 = Error" |
| terraform state list lists resources within a state | S57 | "The terraform state list command lists resources within a Terraform state." |
| By default, Terraform stores the state in a local file named terraform.tfstate, and a backup of the previous state in terraform.tfstate.backup | S11 | "By default, Terraform stores each workspace's state in a local file named terraform.tfstate, and a backup of the previous state in terraform.tfstate.backup" |
| A local state is a plaintext file that includes any secret values you defined in your configuration | S14 | "If you are developing with Terraform locally, Terraform stores your state in a plaintext file, which includes any secret values you defined in your configuration" |
| For sensitive content, the provider says to use the local_sensitive_file resource | S29 | "If the file content is sensitive, use the [`local_sensitive_file`](./sensitive_file.html) resource instead." |
| By default, the directory with the test files is named tests | S27 | "By default, the directory containing test files is named tests" |
| A test file has one or more run blocks | S26 | "One to many run blocks" |
| The first two run blocks use command = plan, so they create no infrastructure | S26 | "Replacing the command value with command = plan instructs Terraform to not create new infrastructure for this run block" |
| Its expect_failures = [var.env_name] lists a variable that should fail its custom condition | S26 | "In each run block the expect_failures attribute can provide a list of checkable objects (resources, data sources, check blocks, input variables, and outputs) that should fail their custom conditions" |
| By default, tests create real infrastructure | S26 | "By default, tests within Terraform create real infrastructure and can run assertions and validations against that infrastructure" |
| After a test file has run, Terraform tries to destroy what is left | S27 | "Once Terraform fully executes each test file, Terraform attempts to destroy any remaining infrastructure" |
| A test file keeps its own state, apart from the state of the configuration | S27 | "Each Terraform test file will maintain all Terraform state it requires within memory as it executes, starting empty. This state is entirely separate from any existing state for the configuration under test" |
| -filter limits the run to the given test file | S27 | "-filter=testfile - Limits the terraform test operation to the specified test files." |
| terraform destroy deprovisions all objects that the configuration manages | S23 | "The terraform destroy command deprovisions all objects managed by a Terraform configuration" |
| The packer block lists the Docker plugin in required_plugins | S37 | "Use the packer init command to download and install plugins according to the required_plugins block in Packer templates written in HCL" |
| The source block holds the builder | S33 | "The source block defines reusable builder configuration blocks" |
| commit = true makes Packer commit the container to an image | S41 | "commit (bool) - If true, the container will be committed to an image rather than exported" |
| pull = false makes Packer use the image that is already on the machine | S41 | "pull (bool) - If true, the configured image will be pulled using docker pull prior to use. Otherwise, it is assumed the image already exists and can be used. This defaults to true if not set" |
| A provisioner block defines how to configure a provisioner | S35 | "The provisioner block defines how to configure a provisioner" |
| The docker-tag post-processor takes an artifact from the docker builder that was committed, and tags it into a repository | S42 | "The Packer Docker Tag post-processor takes an artifact from the docker builder that was committed and tags it into a repository" |
| packer init installed the plugin github.com/hashicorp/docker | S37 | "Use the packer init command to download and install plugins according to the required_plugins block in Packer templates written in HCL" |
| packer fmt formats HCL2 files to a canonical format and style | S53 | "The packer fmt Packer command is used to format HCL2 configuration files to a canonical format and style" |
| With -check, the exit status is 0 only if all input is properly formatted | S53 | "-check - Checks if the input is formatted. Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| It returns a zero exit status on success | S39 | "The command will return a zero exit status on success, and a non-zero exit status on failure" |
| packer build started a container from alpine:latest, ran the provisioner in it, and committed the container | S41 | "The builder starts a Docker container, runs provisioners within this container, then exports the container for reuse or commits the image" |
| The docker-tag post-processor then tagged the image packer-practice-qa-base:1.0 | S42 | "The Packer Docker Tag post-processor takes an artifact from the docker builder that was committed and tags it into a repository." |
| It used no Dockerfile | S41 | "Packer builds Docker containers without the use of Dockerfiles" |
| Take them from the page "Get started with composition" | S50 | "Get started with composition" |
| A composition is a template for creating several Kubernetes resources as one composite resource | S45 | "Compositions are a template for creating multiple Kubernetes resources as a single composite resource" |
| crossplane version --client printed the client version, and it needs no server | S52 | "If true, shows client version only (no server required)." |
| composition render needs a container runtime that works with Docker | S51 | "Some commands, such as crossplane composition render and crossplane project build, do require a Docker compatible container runtime." |
| By default, it pulls and runs the composition functions with Docker | S52 | "By default, the render command pulls and runs Composition Functions using Docker" |
| It shows what resources the composition would create or change | S52 | "The composition render command shows you what resources a Composition would create or mutate by running the composition locally and printing its results" |
| The XRD defines the schema of the custom API | S44 | "Composite resource definitions (XRDs) define the schema for a custom API" |
| The command checks resources against the schemas of XRDs, CRDs, providers, functions, and configurations | S52 | "The resource validate command validates the provided Crossplane resources against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)" |
| The command detects unknown fields | S52 | "It uses the Kubernetes API server’s validation library plus other checks such as unknown-field detection, a common source of difficult-to-debug Crossplane issues" |
| The docs mark resource validate as beta | S52 | "Beta features may change in a future release" |
| terraform fmt -check has the exit status 0 if the input is properly formatted, and a non-zero exit status otherwise | S20 | "Checks if the input is formatted. The exit status is 0 if the command's input is properly formatted. Otherwise, the exit status is non-zero, and the command outputs a list of improperly formatted file names." |
| packer fmt -check does the same | S53 | "-check - Checks if the input is formatted. Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| packer validate returns a non-zero exit status on failure | S39 | "The command will return a zero exit status on success, and a non-zero exit status on failure" |
| terraform plan -detailed-exitcode returns 0 for no changes, 1 for an error, and 2 for changes | S21 | "-detailed-exitcode - Returns a detailed exit code when the command exits" |
| terraform plan -detailed-exitcode returns 0 for no changes, 1 for an error, and 2 for changes | S21 | "0 = Succeeded with empty diff (no changes)" |
| terraform plan -detailed-exitcode returns 0 for no changes, 1 for an error, and 2 for changes | S21 | "1 = Error" |
| terraform plan -detailed-exitcode returns 0 for no changes, 1 for an error, and 2 for changes | S21 | "2 = Succeeded with non-empty diff (changes present)" |
| HashiCorp's style guide says to run terraform fmt and terraform validate before you commit code | S28 | "Run terraform fmt and terraform validate before committing your code to version control" |
| terraform show -json shows a JSON representation of a plan file | S24 | "For Terraform plan files, terraform show -json shows a JSON representation of the plan, configuration, and current state" |
| Each item of resource_changes has a list of actions | S25 | ""actions" are the actions that will be taken on the object selected by the" |
| A replacement shows as two actions, so you can scan the list for delete to find every case that deletes an object | S25 | "The two "replace" actions are represented in this way to allow callers to" |
| A replacement shows as two actions, so you can scan the list for delete to find every case that deletes an object | S25 | "e.g. just scan the list for "delete" to recognize all three situations" |
| A run block with command = plan creates no infrastructure | S26 | "Replacing the command value with command = plan instructs Terraform to not create new infrastructure for this run block" |
| A run block that applies creates real infrastructure, which can cost money | S27 | "The Terraform test command can create real infrastructure than can cost you money" |
| A test file keeps a state that is separate from the state of the configuration | S27 | "This state is entirely separate from any existing state for the configuration under test" |
| Since Terraform v1.7.0, a test can mock the data that providers return | S26 | "Terraform v1.7.0 introduced the ability to mock data returned by the providers during a terraform test execution" |
| The -junit-xml option saves a report in JUnit XML format | S27 | "-junit-xml=<output file path> - Saves a test report in JUnit XML format to the specified file" |
| packer validate checks the syntax and the configuration of a template | S39 | "The packer validate Packer command is used to validate the syntax and configuration of a template" |
| The result of a build is an artifact | S31 | "Artifacts are the results of a single build, and are usually a set of IDs or files to represent a machine image" |
| crossplane resource validate checks resources against schemas, and it detects unknown fields | S52 | "It uses the Kubernetes API server’s validation library plus other checks such as unknown-field detection, a common source of difficult-to-debug Crossplane issues" |
| crossplane composition render shows what resources a composition would create or change, by running the composition locally | S52 | "The composition render command shows you what resources a Composition would create or mutate by running the composition locally and printing its results" |
| State and plan files can hold sensitive values, such as initial database passwords or API tokens | S14 | "Terraform state and plan files contain detailed information about your infrastructure, including resource attributes and metadata that can contain sensitive values, such as initial database passwords or API tokens" |
| terraform show -json shows sensitive values of the state in plain text | S24 | "When using the -json command-line flag, any sensitive values in Terraform state will be displayed in plain text" |
| Terraform tests run against test-specific, short-lived resources | S26 | "Tests run against test-specific, short-lived resources, preventing any risk to your existing infrastructure or state" |
| terraform destroy deprovisions all objects that a configuration manages | S23 | "The terraform destroy command deprovisions all objects managed by a Terraform configuration" |
| A prevent_destroy rule also prevents the terraform destroy command from operating once the objects are created | S16 | "Enabling prevent_destroy, however, makes certain configuration changes impossible to apply" |
| A prevent_destroy rule also prevents the terraform destroy command from operating once the objects are created | S16 | "and prevents the terraform destroy command from operating once such objects are created" |
| A binary can contain malicious code, and HashiCorp says to verify that it created and signed the binary before you run it | S54 | "You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| HashiCorp says to avoid storing the state in a version control system or other storage that does not support state locking and secure access control | S11 | "Avoid storing your state in a version control system or other storage solution that does not support Terraform state locking and secure access control" |
| The state is a JSON text file, and you should not edit it directly | S11 | "Terraform stores your workspaces state as a JSON text file. Do not directly edit this file" |
| If the backend supports it, Terraform locks the state for all operations that could write state | S13 | "If supported by your backend, Terraform will lock your state for all operations that could write state" |
| If state locking fails, Terraform does not continue | S13 | "If state locking fails, Terraform does not continue" |
| You should include .terraform.lock.hcl in your version control repository, so that a code review can discuss changes to your external dependencies | S6 | "You should include this file in your version control repository so that you can discuss potential changes to your external dependencies via code review, just as you would discuss potential changes to your configuration itself" |
| HashiCorp recommends constraining the acceptable provider versions in production | S4 | "In production we recommend constraining the acceptable provider versions in the configuration's provider requirements block" |
| You should always re-check the final non-speculative plan before applying it, to make sure that it still matches your intent | S21 | "you should always re-check the final non-speculative plan before applying to make sure that it still matches your intent" |
| HashiCorp recommends making sure that no one can change your infrastructure outside of your Terraform workflow, because this minimizes the risk of unpredictable changes and configuration drift | S22 | "If you use -auto-approve, we recommend making sure that no one can change your infrastructure outside of your Terraform workflow. This minimizes the risk of unpredictable changes and configuration drift" |
| The rule does not stop Terraform from destroying a resource when you remove its configuration | S16 | "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration" |
| HashiCorp says to use it sparingly | S16 | "Use prevent_destroy sparingly" |
| It does not validate remote services, such as remote state or provider APIs | S19 | "It does not validate remote services, such as remote state or provider APIs" |
| It needs an initialized working directory | S19 | "Validation requires an initialized working directory with any referenced plugins and modules installed" |
| If the file content is sensitive, the provider says to use the local_sensitive_file resource instead | S29 | "If the file content is sensitive, use the [`local_sensitive_file`](./sensitive_file.html) resource instead." |
| Terraform detects the resource as deleted each time a configuration is applied on a new machine where the file is not present, and it generates a diff to re-create it | S29 | "When working with local files, Terraform will detect the resource as having been deleted each time a configuration is applied on a new machine where the file is not present and will generate a diff to re-create it" |
| The command can create real infrastructure that can cost money | S27 | "The Terraform test command can create real infrastructure than can cost you money" |
| Packer does not replace configuration management like Chef or Puppet | S30 | "Packer does not replace configuration management like Chef or Puppet" |
| The pull option defaults to true | S41 | "pull (bool) - If true, the configured image will be pulled using docker pull prior to use. Otherwise, it is assumed the image already exists and can be used. This defaults to true if not set" |
| The docs say that validate detects unknown fields | S52 | "It uses the Kubernetes API server’s validation library plus other checks such as unknown-field detection, a common source of difficult-to-debug Crossplane issues" |
| HashiCorp says that you can avoid running an executable with malicious code by verifying that HashiCorp created and signed the binary | S54 | "You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
