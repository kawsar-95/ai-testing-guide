# Fact check: devops / terraform-iac

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://developer.hashicorp.com/terraform/intro; S2 https://developer.hashicorp.com/packer/docs/intro; S3 https://docs.crossplane.io/latest/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / terraform-iac (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Terraform, Crossplane, Pulumi, Packer, and Terragrunt. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It lists topic names and describes the page itself. It states no fact about a tool, command or number. |
| 1 | Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently | S1 | PASS | "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 2 | Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration | S2 | PASS | "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." |
| 3 | Crossplane is a control plane framework for platform engineering | S3 | PASS | "Crossplane is a control plane framework for platform engineering." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / terraform-iac (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Terraform, Packer, and Crossplane. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently | S1 | PASS | pages/S1.txt: "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 2 | Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration | S2 | PASS | pages/S2.txt: "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." The sentence runs across a line break. |
| 3 | Crossplane is a control plane framework for platform engineering | S3 | PASS | pages/S3.txt: "Crossplane is a control plane framework for platform engineering." The sentence runs across a line break. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / terraform-iac (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Terraform, Packer, and Crossplane. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It gives no fact about a tool. |
| 1 | Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently | S1 | PASS | "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 2 | Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration | S2 | PASS | "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." |
| 3 | Crossplane is a control plane framework for platform engineering | S3 | PASS | "Crossplane is a control plane framework for platform engineering." |

Open FAILs after round 4: 0

Changed after this round: Layman and Bangla: Crossplane is again "a control plane framework" (the plain text had split it into "a framework" and "a control plane").

## Round 5 (2026-11-05)

## Fact check: devops / terraform-iac (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Terraform, Packer, and Crossplane. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line describes the page itself. It names the three tools but gives no fact about them. |
| 1 | Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently | S1 | PASS | S1: "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 2 | Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration | S2 | PASS | S2: "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." |
| 3 | Crossplane is a control plane framework for platform engineering | S3 | PASS | S3: "Crossplane is a control plane framework for platform engineering." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 56 sources (57 after round 6). Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-19)

# Fact check: devops / terraform-iac (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page overview (workflow, providers, state, tests, Packer, Crossplane, practice run, no cloud account) | none | N/A | Describes the page itself. |
| 2 | Lede | Three tools, practice run on own machine, no cloud account, page order links | none | N/A | Describes the page; links are site paths. |
| 3 | What it is | Terraform is an IaC tool to build, change, version cloud and on-prem resources safely and efficiently | S1 | PASS | "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 4 | What it is | Resources are defined in human-readable files that you can version, reuse, share | S1 | PASS | "define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share" |
| 5 | What it is | Terraform manages resources through the APIs of cloud platforms and other services | S1 | PASS | "Terraform creates and manages resources on cloud platforms and other services through their application programming interfaces (APIs)." |
| 6 | What it is | Core workflow has three stages: write, plan, apply | S1 | PASS | "The core Terraform workflow consists of three stages:" (Write, Plan, Apply follow) |
| 7 | What it is | Plan stage describes what Terraform will create, update, or destroy | S1 | PASS | "Terraform creates an execution plan describing the infrastructure it will create, update, or destroy" |
| 8 | What it is | Apply stage performs the proposed operations after approval, in the correct order | S1 | PASS | "On approval, Terraform performs the proposed operations in the correct order" |
| 9 | What it is | Packer is a community tool for identical machine images for multiple platforms from one source configuration | S30 | PASS | "Packer is a community tool for creating identical machine images for multiple" |
| 10 | What it is | A machine image is a single static unit with a pre-configured OS and installed software | S30 | PASS | "A machine image is a single static unit that contains a pre-configured" |
| 11 | What it is | Packer does not replace configuration management like Chef or Puppet | S30 | PASS | "Packer does not replace configuration" / "management like Chef or Puppet." |
| 12 | What it is | Crossplane is a control plane framework for platform engineering | S43 | PASS | "Crossplane is a control plane framework for platform engineering." |
| 13 | What it is | It lets you build control planes to manage cloud native software | S43 | PASS | "Crossplane lets you build control planes to manage your cloud native software." |
| 14 | What it is | A control plane is software that controls other software | S43 | PASS | "A control plane is software that controls other software." |
| 15 | How it works | Main purpose of the Terraform language is declaring resources (infrastructure objects) | S2 | PASS | "The main purpose of the Terraform language is declaring" (resources, which represent infrastructure objects) |
| 16 | How it works | Blocks are containers for other content | S2 | PASS | "Blocks are containers for other content" |
| 17 | How it works | Arguments assign a value to a name | S2 | PASS | "Arguments assign a value to a name." |
| 18 | How it works | Expressions represent a value, literally or by referencing/combining values | S2 | PASS | "Expressions represent a value, either literally or by referencing and" |
| 19 | How it works | Language is declarative: intended goal, not steps | S2 | PASS | "The Terraform language is declarative, describing an intended goal rather than" |
| 20 | How it works | Resource block defines a piece of infrastructure | S3 | PASS | "The resource block defines a piece of infrastructure" |
| 21 | How it works | Resource arguments are determined by the provider | S3 | PASS | "The arguments that an individual resource supports are determined by the provider." |
| 22 | How it works | Variable block is similar to a function argument | S7 | PASS | "The variable block is similar to a function argument in other programming languages." |
| 23 | How it works | A validation block can refuse a value | S7 | PASS | "if a validation block's condition expression evaluates to false, then Terraform throws an error, displays the error_message, and stops the current operation." |
| 24 | How it works | Output block exposes information about infrastructure | S8 | PASS | "The output block lets you expose information about your infrastructure." |
| 25 | How it works | An output can pass information to an automation tool | S8 | PASS | "Passing information from a Terraform operation to an automation tool." |
| 26 | How it works | Locals block is similar to function-scoped variables | S9 | PASS | "The locals block is similar to function-scoped variables in other programming languages." |
| 27 | How it works | Data block fetches data without provisioning an object | S10 | PASS | "The data block fetches data about a resource from the provider without provisioning an associated infrastructure object." |
| 28 | How it works | Providers are plugins used to interact with cloud, SaaS, other APIs | S4 | PASS | "Terraform relies on plugins called providers to interact with cloud providers," |
| 29 | How it works | Every resource type is implemented by a provider | S4 | PASS | "Every resource type is implemented by a provider" |
| 30 | How it works | Providers are distributed separately, with own version numbers | S4 | PASS | "Providers are released separately from Terraform itself and have their own version numbers." |
| 31 | How it works | required_providers block declares required providers | S5 | PASS | "Define the provider's source, local name, and version in the required_providers block" |
| 32 | How it works | terraform init locally installs a provider and updates the lock file | S5 | PASS | "Running terraform init locally installs a provider and updates the Dependency lock file" |
| 33 | How it works | Lock file is always named .terraform.lock.hcl | S6 | PASS | "The lock file is always named .terraform.lock.hcl" |
| 34 | How it works | Include it in version control | S6 | PASS | "include this file in your version control repository so that you can discuss" |
| 35 | How it works | In production HashiCorp recommends constraining provider versions | S4 | PASS | "In production we recommend constraining the acceptable provider versions" |
| 36 | How it works | init initializes a working directory with configuration files | S18 | PASS | "The terraform init command initializes a working directory" |
| 37 | How it works | init is the first command after writing or cloning a configuration | S18 | PASS | "This is the first command you should" run (writing new / cloning from version control) |
| 38 | How it works | Safe to run init multiple times | S18 | PASS | "It is safe to run this command multiple times." |
| 39 | How it works | fmt formats files to canonical format and style | S20 | PASS | "formats Terraform configuration file contents so that it matches the canonical format and style" |
| 40 | How it works | validate checks syntactic validity and internal consistency | S19 | PASS | "Validate runs checks that verify whether a configuration is syntactically" (line continues with valid and internally consistent; same words in S28 line 187) |
| 41 | How it works | validate does not validate remote services | S19 | PASS | "It does not validate remote services, such as remote state or provider APIs." |
| 42 | How it works | validate needs an initialized working directory | S19 | PASS | "Validation requires an initialized working directory" |
| 43 | How it works | Style guide: run fmt and validate before committing | S28 | PASS | "Run terraform fmt and terraform validate before committing your code to version control." |
| 44 | How it works | plan creates an execution plan to preview changes | S21 | PASS | "The terraform plan command creates an execution plan, which lets you preview" |
| 45 | How it works | By default it reads current state of existing remote objects | S21 | PASS | "By default, Terraform performs the following operations when it creates a plan: Reads the current state of any already-existing remote objects" |
| 46 | How it works | It compares configuration to prior state | S21 | PASS | "Compares the current configuration to the prior state" |
| 47 | How it works | It proposes changes so remote objects match configuration | S21 | PASS | "Proposes a set of change actions that should, if applied, make the remote objects match the configuration." |
| 48 | How it works | Without -out it creates a speculative plan | S21 | PASS | "If you run terraform plan without the -out=FILE option then it will create a speculative plan" |
| 49 | How it works | Always re-check the final non-speculative plan before applying | S21 | PASS | "you should always re-check the final non-speculative plan before applying" |
| 50 | How it works | -detailed-exitcode returns a detailed exit code | S21 | PASS | "-detailed-exitcode - Returns a detailed exit code when the command exits." |
| 51 | How it works | apply executes the operations of a plan | S22 | PASS | "The terraform apply command executes the operations proposed in a Terraform" plan |
| 52 | How it works | Without a saved plan it creates a plan and prompts for approval | S22 | PASS | "When you run terraform apply without passing a saved plan file, Terraform automatically creates a new execution plan ... prompts you to approve that plan" |
| 53 | How it works | With a saved plan it does not prompt | S22 | PASS | "performs the operations in the saved plan without prompting you for confirmation" |
| 54 | How it works | destroy deprovisions all objects the configuration manages | S23 | PASS | "The terraform destroy command deprovisions all objects managed by a Terraform configuration." |
| 55 | How it works | Terraform must store state about managed infrastructure and configuration | S11 | PASS | "Terraform must store state about your workspace's managed infrastructure and configuration." |
| 56 | How it works | State maps real world resources to configuration | S11 | PASS | "Terraform uses your workspace's state to map real world resources to your configuration" |
| 57 | How it works | Before any operation Terraform refreshes state | S11 | PASS | "Prior to any operation, Terraform does a refresh to update the state with the real infrastructure." |
| 58 | How it works | By default state is a local file terraform.tfstate | S11 | PASS | "By default, Terraform stores each workspace's state in a local file named terraform.tfstate" |
| 59 | How it works | State is a JSON text file; do not edit directly | S11 | PASS | "Terraform stores your workspaces state as a JSON text file. Do not directly edit" |
| 60 | How it works | Remote state writes to a shared remote data store | S12 | PASS | "With remote state, Terraform writes the state data to a remote data store, which can then be shared between all members of a team." |
| 61 | How it works | If backend supports it, state is locked for all operations that could write state | S13 | PASS | "If supported by your backend, Terraform will lock your state for all operations that could write state." |
| 62 | How it works | Lock prevents others from corrupting state | S13 | PASS | "This prevents others from acquiring the lock and potentially corrupting your state." |
| 63 | How it works | If locking fails Terraform does not continue | S13 | PASS | "If state locking fails, Terraform does not continue." |
| 64 | How it works | State and plan files can hold secrets | S14 | PASS | "Terraform state and plan files contain detailed information about your infrastructure, including resource attributes and metadata that can contain sensitive values" |
| 65 | How it works | Local state is a plaintext file | S14 | PASS | "Terraform stores your state in a plaintext file" |
| 66 | How it works | Treat as sensitive data; keep out of Git workflows | S14 | PASS | "Treat your state file as sensitive data by excluding it from Git workflows" |
| 67 | How it works | Avoid VCS or storage without locking and access control | S11 | PASS | "Avoid storing your state in a version control system or other storage solution that does not support Terraform state locking and secure access control" |
| 68 | How it works | A module is a collection of resources managed together | S15 | PASS | "A module is a collection of resources that Terraform manages together." |
| 69 | How it works | Root directory configuration is the root module | S15 | PASS | "Terraform refers to this configuration as the root module." |
| 70 | How it works | Modules called with module blocks are child modules | S15 | PASS | "Modules you configure using module blocks are called child modules." |
| 71 | How it works | for_each manages several similar objects without separate blocks | S17 | PASS | "manage several similar objects ... without writing a separate block for each object" |
| 72 | How it works | for_each accepts a map or set of strings | S17 | PASS | "The for_each meta-argument accepts a map or a set of strings" |
| 73 | How it works | If an argument cannot change in place, destroy then create replacement | S16 | PASS | "when Terraform must change a resource argument that cannot be updated in-place ... Terraform destroys the existing object and then creates a new replacement object" |
| 74 | How it works | create_before_destroy reverses the order | S16 | PASS | "Use the create_before_destroy rule to instruct Terraform to create a replacement resource before destroying the current resource." |
| 75 | How it works | prevent_destroy true rejects plans that would destroy the object | S16 | PASS | "Terraform rejects plans that would destroy the infrastructure object associated with the resource" |
| 76 | How it works | prevent_destroy does not stop destruction if configuration is removed | S16 | PASS | "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration." |
| 77 | How it works | ignore_changes lists attributes Terraform ignores when planning updates | S16 | PASS | "the ignore_changes meta-argument specifies resource attributes that Terraform should ignore when planning updates" |
| 78 | How it works | show gives human-readable output from state or plan file | S24 | PASS | "The terraform show command provides human-readable output" |
| 79 | How it works | Apply page says inspect saved plan with show before applying | S22 | PASS | "Use terraform show to inspect a saved plan file before applying it." |
| 80 | How it works | -json gives machine-readable output | S24 | PASS | "Add the -json command-line flag to generate machine-readable output." |
| 81 | How it works | For a plan file JSON holds plan, configuration, current state | S24 | PASS | "shows a JSON representation of the plan, configuration, and current state." |
| 82 | How it works | With -json sensitive state values show in plain text | S24 | PASS | "any sensitive values in Terraform state will be displayed in plain text" |
| 83 | How it works | Terraform can output machine-readable JSON of a plan's changes | S25 | PASS | "Terraform can output a machine-readable JSON representation of a plan file's changes." |
| 84 | How it works | Same page says use terraform show -json | S25 | PASS | "Use terraform show -json <FILE> to generate a JSON representation of a plan or state file." |
| 85 | How it works | Tests validate that module updates do not introduce breaking changes | S26 | PASS | "Terraform tests let authors validate that module configuration updates do not introduce breaking changes." |
| 86 | How it works | Tests run against test-specific, short-lived resources | S26 | PASS | "Tests run against test-specific, short-lived resources" |
| 87 | How it works | Test files found by .tftest.hcl or .tftest.json | S26 | PASS | "Terraform discovers test files based on their file extension: .tftest.hcl or .tftest.json." |
| 88 | How it works | A test file has one or more run blocks | S26 | PASS | "One to many run blocks." |
| 89 | How it works | A run block can hold assert blocks | S26 | PASS | "Optional assert blocks." |
| 90 | How it works | By default a run block applies, creating real infrastructure | S26 | PASS | "By default, tests within Terraform create real infrastructure" / "By default, each run block executes with command = apply" |
| 91 | How it works | command = plan creates no infrastructure | S26 | PASS | "Replacing the command value with command = plan instructs Terraform to not create new infrastructure for this run block." |
| 92 | How it works | expect_failures lists objects that should fail custom conditions | S26 | PASS | "the expect_failures attribute can provide a list of checkable objects ... that should fail their custom conditions." |
| 93 | How it works | v1.7.0 added mocking provider data | S26 | PASS | "Terraform v1.7.0 introduced the ability to mock data returned by the providers" |
| 94 | How it works | terraform test searches current and testing directory and runs tests | S27 | PASS | "This command searches the current directory and the specified testing directory for Terraform testing files and executes the specified tests." |
| 95 | How it works | Default testing directory is tests | S27 | PASS | "The default testing directory is tests." |
| 96 | How it works | Each test file keeps state in memory, apart from configuration state | S27 | PASS | "maintain all Terraform state it requires within memory ... entirely separate from any existing state for the configuration under test" |
| 97 | How it works | After a test file runs, Terraform tries to destroy leftovers | S27 | PASS | "Terraform attempts to destroy any remaining infrastructure." |
| 98 | How it works | Command can create real infrastructure that can cost money | S27 | PASS | "can create real infrastructure than can cost you money" |
| 99 | How it works | -json and -junit-xml options | S27 | PASS | "-json - Displays machine-readable JSON output" / "-junit-xml=<output file path> - Saves a test report in JUnit XML format" |
| 100 | How it works | Packer reads and applies HCL template files | S32 | PASS | "Packer reads and applies configurations defined in HCL template files." |
| 101 | How it works | Directory: every file ending .pkr.hcl or .pkr.json parsed | S32 | PASS | "folder with a name ending with .pkr.hcl or .pkr.json will be parsed" |
| 102 | How it works | A template defines one or more builds | S31 | PASS | "Templates are files that define one or more builds" |
| 103 | How it works | A build is a single task producing an artifact for one platform | S31 | PASS | "Builds are a single task that eventually produces an artifact for a single platform." |
| 104 | How it works | A builder creates a machine image for one platform | S31 | PASS | "Builders are components of Packer that are able to create a machine image for a single platform." |
| 105 | How it works | Provisioners install/configure software in a running machine before static artifact | S31 | PASS | "install and configure software within a running machine prior to that machine being turned into a static artifact." |
| 106 | How it works | Post-processor takes a builder/post-processor result and makes a new artifact | S31 | PASS | "take the result of a builder or another post-processor and process that to create a new artifact." |
| 107 | How it works | An artifact is the result of a single build | S31 | PASS | "Artifacts are the results of a single build" |
| 108 | How it works | source block defines reusable builder configuration | S33 | PASS | "The source block defines reusable builder configuration blocks." |
| 109 | How it works | build block says which builders, how to provision, post-processing | S34 | PASS | "The build block specifies which builders Packer should run, how to provision them, and any post-processing actions" |
| 110 | How it works | provisioner block defines how to configure a provisioner | S35 | PASS | "The provisioner block defines how to configure a provisioner." |
| 111 | How it works | post-processor block defines how to configure a post-processor | S36 | PASS | "The post-processor block defines how a post-processor is configured." |
| 112 | How it works | packer init downloads/installs plugins from required_plugins | S37 | PASS | "download and install plugins according to the required_plugins block" |
| 113 | How it works | packer validate checks syntax and configuration | S39 | PASS | "validate the syntax and configuration of a template." |
| 114 | How it works | Zero exit on success, non-zero on failure | S39 | PASS | "return a zero exit status on success, and a non-zero exit status on failure." |
| 115 | How it works | packer build runs all builds of a template | S38 | PASS | "takes a template and runs all the builds within it" |
| 116 | How it works | Builds run in parallel unless otherwise specified | S38 | PASS | "executed in parallel, unless otherwise specified" |
| 117 | How it works | Shell provisioner runs shell scripts on the machine Packer builds | S40 | PASS | "runs shell scripts on the machine Packer builds." |
| 118 | How it works | docker builder builds Docker images using Docker | S41 | PASS | "The docker Packer builder builds Docker images using Docker." |
| 119 | How it works | Starts a container, runs provisioners, exports or commits | S41 | PASS | "starts a Docker container, runs provisioners within this container, then exports the container for reuse or commits the image." |
| 120 | How it works | Builds container without a Dockerfile | S41 | PASS | "Packer builds Docker containers without the use of Dockerfiles." |
| 121 | How it works | Needs a machine with Docker Engine | S41 | PASS | "The Docker builder must run on a machine that has Docker Engine installed." |
| 122 | How it works | commit true commits instead of exporting | S41 | PASS | "commit (bool) - If true, the container will be committed to an image rather than exported." |
| 123 | How it works | pull defaults to true, so base image pulled first | S41 | PASS | "pull (bool) - If true, the configured image will be pulled using docker pull prior to use ... This defaults to true if not set." |
| 124 | How it works | docker-tag tags a committed artifact into a repository | S42 | PASS | "builder that was committed and tags it into a repository" |
| 125 | How it works | Control planes expose an API | S43 | PASS | "Control planes expose an API." |
| 126 | How it works | You tell it what software to configure: desired state | S43 | PASS | "what software it should configure and how - this is your desired state." |
| 127 | How it works | Control plane corrects drift | S43 | PASS | "If your software ever drifts from your desired state, the control plane automatically corrects the drift." |
| 128 | How it works | Crossplane is built on Kubernetes | S43 | PASS | "It's built on Kubernetes" |
| 129 | How it works | Four components: Composition, managed resources, operations, package manager | S43 | PASS | "Crossplane has four major components: Composition / Managed resources / Operations / Package manager" |
| 130 | How it works | Composition lets you build custom APIs | S43 | PASS | "Composition lets you build custom APIs to control your cloud native software." |
| 131 | How it works | Pipeline of functions instead of writing a controller | S43 | PASS | "With Crossplane you don't have to write a controller. Instead you configure a pipeline of functions." |
| 132 | How it works | Functions return declarative configuration Crossplane applies | S43 | PASS | "The functions return declarative configuration that Crossplane should apply." |
| 133 | How it works | XRD defines schema for a custom API | S44 | PASS | "Composite resource definitions (XRDs) define the schema for a custom API." |
| 134 | How it works | Users create XRs using the XRD schema | S44 | PASS | "Users create composite resources (XRs) using the API schema defined by an" XRD |
| 135 | How it works | A composition is a template for creating several Kubernetes resources as one composite resource | S45 | PASS | "Compositions are a template for creating multiple Kubernetes resources as a" (single composite resource) |
| 136 | How it works | An XR represents a set of Kubernetes resources as one object | S46 | PASS | "A composite resource, or XR, represents a set of Kubernetes resources as a" single Kubernetes object |
| 137 | How it works | Providers let Crossplane provision infrastructure on an external service | S47 | PASS | "Providers enable Crossplane to provision infrastructure on an" external service |
| 138 | How it works | A managed resource represents an external service in a provider | S49 | PASS | "A managed resource (MR) represents an external service in a Provider." |
| 139 | How it works | Functions extend Crossplane with new ways to configure composition | S48 | PASS | "Functions extend Crossplane with new ways to configure" composition |
| 140 | How it works | Crossplane tutorial creates an App resource turned into a Deployment and Service | S50 | PASS | "create a new kind of custom resource named App. When a user calls the custom resource API to create an App, Crossplane creates a Deployment and a Service." |
| 141 | How it works | Crossplane CLI is a single standalone binary | S51 | PASS | "The Crossplane CLI is a single standalone binary" |
| 142 | How it works | Most CLI commands are independent of Kubernetes | S51 | PASS | "Most Crossplane CLI commands are independent of Kubernetes" |
| 143 | How it works | composition render shows resources a composition would create or change | S52 | PASS | "The composition render command shows you what resources a Composition would" create or change |
| 144 | How it works | By default runs functions using Docker | S52 | PASS | "By default, the render command pulls and runs Composition Functions using Docker." |
| 145 | How it works | resource validate checks against schemas of XRDs, CRDs, providers, functions, configurations | S52 | PASS | "against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)" |
| 146 | How it works | It also detects unknown fields | S52 | PASS | "other checks such as unknown-field detection" |
| 147 | How it works | Docs mark the command as beta | S52 | PASS | "[BETA] Validate Crossplane resources." |
| 148 | Try it | Run record: date, OS, tool versions, HOME, env vars, network, home folder compare (para 1) | none | N/A | Page's own run record. |
| 149 | Try it | Steps 1-6 local provider, provider download; step 7 plugin download, curl, base image, image removed (para 2) | none | N/A | Page's own run record. |
| 150 | Try it | Steps 8-9 need no cluster; two images pulled and removed (para 3, first part) | none | N/A | Page's own run record. |
| 151 | Try it | Four manifest files come from "Get started with composition"; lines compared | S50 | PASS | S50 lists "xrd.yaml", "fn-patch-and-transform.yaml", "composition-yaml.yaml"; "name: my-app" / "image: nginx" (App example). Line comparison is run record. |
| 152 | Try it | Choices no source gives are the tutorial's own | none | N/A | Framing sentence. |
| 153 | Try it | Terraform install page showed 1.17.2 latest | S55 | PASS | "1.17.2 (latest)" |
| 154 | Try it | Packer install page showed 1.16.2 | S56 | PASS | "1.16.2 (latest)" |
| 155 | Try it | Both pages list package-manager commands and a binary download | S55, S56 | PASS | S55 and S56: "Package manager" and "Binary download" headings. |
| 156 | Try it | Tutorial installed binaries in ~/.local/bin, times | none | N/A | Page's own run record. |
| 157 | Try it | A binary can hide malicious code; verify HashiCorp created and signed it | S54 | PASS | "tricking you into running an executable that includes malicious code. You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 158 | Try it | HashiCorp uses a public PGP key to sign checksums | S54 | PASS | "HashiCorp uses a public PGP key to sign certain files, including the checksums for its product archives." |
| 159 | Try it | The page gives the key fingerprint | S54 | PASS | "Primary key fingerprint: C874 011F 0AB4 0511 0D02 1055 3436 5D94 72D7 468F" |
| 160 | Try it | Three checks, hash prefixes (e6f16b2f, abbfe0cf) | none | N/A | Page's own run record. |
| 161 | Try it | Crossplane CLI is a single standalone binary | S51 | PASS | "The Crossplane CLI is a single standalone binary with no external dependencies." |
| 162 | Try it | Some commands such as composition render need a Docker-compatible runtime | S51 | PASS | "Some commands, such as crossplane composition render and crossplane project build, do require a Docker compatible container runtime." |
| 163 | Try it | Tutorial downloaded the binary by hand as the page describes | S51 | PASS | "you can manually download a binary from" |
| 164 | Try it | Page says move it to a folder in PATH, e.g. /usr/local/bin | S51 | PASS | "Move the binary to a location in your $PATH, for example /usr/local/bin." |
| 165 | Try it | Install location, .sha256 check, no signature, "check shows only download is whole" | none | N/A | Page's own run record and conclusion. |
| 166 | Try it | Step 1 main.tf: terraform block names provider in required_providers | S5 | PASS | "Define the provider's source, local name, and version in the required_providers block inside your top-level terraform block." |
| 167 | Try it | Step 1: variable block is like a function argument | S7 | PASS | "similar to a function argument in other programming languages" |
| 168 | Try it | Step 1: validation block of env_name refuses capital letters | none | N/A | Describes the tutorial's own file. |
| 169 | Try it | Step 1: locals block holds the settings text | S9 | PASS | "Local values assign names to expressions" |
| 170 | Try it | Step 1: local_file generates a local file with given content | S29 | PASS | "Generates a local file with the given content." |
| 171 | Try it | Step 1: output block exposes the file path | S8 | PASS | "The output block lets you expose information about your infrastructure." |
| 172 | Try it | Step 1 code block: init -no-color, fmt -check -diff, validate -no-color | S18, S19, S20 | PASS | S18 "-no-color Disable color codes in the command output."; S19 "-no-color - If specified, output won't contain any color."; S20 "-diff" and "-check". `terraform version` and `head` are not documented in the sources (reader's own checks). |
| 173 | Try it | Step 1: init installed provider and created lock file | S5 | PASS | "Running terraform init locally installs a provider and updates the Dependency lock file" |
| 174 | Try it | Step 1: lock file is how Terraform remembers version choice | S6 | PASS | "after selecting a specific version of each dependency Terraform remembers" |
| 175 | Try it | Step 1: list holds checksums for your platform and others | S6 | PASS | "The lock file will therefore include checksums for both the package you installed for" (and other platforms) |
| 176 | Try it | Step 1: later init errors if no recorded checksum matches | S6 | PASS | "returning an error if none of the checksums match" |
| 177 | Try it | Step 1: fmt -check exit 0 if formatted, else non-zero with file names | S20 | PASS | "The exit status is 0 if the command's input is properly formatted. Otherwise, the exit status is non-zero, and the command outputs a list of improperly formatted file names." |
| 178 | Try it | Step 1: validate checks syntactic validity and consistency | S19 | PASS | "Validate runs checks that verify whether a configuration is syntactically" (valid and internally consistent) |
| 179 | Try it | Step 2 code block: plan -out -detailed-exitcode, show -json, apply plan file | S21, S24, S22 | PASS | S21 "-out=FILENAME - Writes the generated plan to the given filename"; "-detailed-exitcode"; S24 "Add the -json command-line flag"; S22 "When you pass a saved plan file to terraform apply". |
| 180 | Try it | Step 2: plan shows file_permission "0777", the provider default | S29 | PASS | "Default value is `"0777"`." |
| 181 | Try it | Step 2: -detailed-exitcode 2 means succeeded with changes | S21 | PASS | "2 = Succeeded with non-empty diff (changes present)" |
| 182 | Try it | Step 2: Python reads resource_changes, prints address and actions | S25 | PASS | "\"resource_changes\" is a description of the individual change actions"; "\"actions\" are the actions that will be taken on the object" |
| 183 | Try it | Step 2: valid actions values: no-op, create, read, update, delete, two replace pairs | S25 | PASS | "Valid actions values are: ["no-op"] ["create"] ["read"] ["update"] ["delete", "create"] ["create", "delete"] ["delete"]" |
| 184 | Try it | Step 2: apply with saved plan did not ask approval | S22 | PASS | "performs the operations in the saved plan without prompting you for confirmation" |
| 185 | Try it | Step 2: exit 0 means success with no changes | S21 | PASS | "0 = Succeeded with empty diff (no changes)" |
| 186 | Try it | Step 3 code block: apply -auto-approve, plan -var env_name=QA | S22, S21 | PASS | S22 "You can pass the -auto-approve option"; S21 "terraform plan -var 'name=value'". |
| 187 | Try it | Step 3: Terraform refreshes before any operation | S11 | PASS | "Prior to any operation, Terraform does a refresh to update the state with the real infrastructure." |
| 188 | Try it | Step 3: docs say ensure no one changes infrastructure outside workflow with -auto-approve | S22 | PASS | "If you use -auto-approve, we recommend making sure that no one can change your infrastructure outside of your Terraform workflow." |
| 189 | Try it | Step 3: validations checked while creating a plan; false condition stops operation | S7 | PASS | "Terraform evaluates variable validations while it creates a plan, and if a validation block's condition expression evaluates to false, then Terraform throws an error, displays the error_message, and stops the current operation." |
| 190 | Try it | Step 3: exit status 1 means an error | S21 | PASS | "1 = Error" |
| 191 | Try it | Step 3: why plan said "will be created" is unknown; Terraform put file back | none | N/A | Page's own run record. |
| 192 | Try it | Step 4 code block: terraform state list, ls, grep | S11 | FAIL | `terraform state list` is not in S11 (or any cited source). Fix: cite a source that documents it, or label it as the tutorial's own command. |
| 193 | Try it | Step 4: default state in terraform.tfstate with backup terraform.tfstate.backup | S11 | PASS | "and a backup of the previous state in terraform.tfstate.backup" |
| 194 | Try it | Step 4: local state is plaintext incl. secret values | S14 | PASS | "Terraform stores your state in a plaintext file, which includes any secret values you defined in your configuration." |
| 195 | Try it | Step 4: for sensitive content use local_sensitive_file | S29 | PASS | "If the file content is sensitive, use the [`local_sensitive_file`](./sensitive_file.html) resource instead." |
| 196 | Try it | Step 5 test code and commands (-filter) | S26, S27 | PASS | S27 "-filter=testfile - Limits the terraform test operation to the specified test files."; S26 command = plan, expect_failures, assert as in rows 88-92. |
| 197 | Try it | Step 5: default test directory is tests | S27 | PASS | "By default, the directory containing test files is named tests." |
| 198 | Try it | Step 5: a test file has one or more run blocks | S26 | PASS | "One to many run blocks." |
| 199 | Try it | Step 5: command = plan runs create no infrastructure | S26 | PASS | "instructs Terraform to not create new infrastructure for this run block" |
| 200 | Try it | Step 5: expect_failures lists a variable that should fail its custom condition | S26 | PASS | "list of checkable objects (resources, data sources, check blocks, input variables, and outputs) that should fail their custom conditions" |
| 201 | Try it | Step 5: by default tests create real infrastructure | S26 | PASS | "By default, tests within Terraform create real infrastructure" |
| 202 | Try it | Step 5: after a test file, Terraform tries to destroy leftovers | S27 | PASS | "Terraform attempts to destroy any remaining infrastructure." |
| 203 | Try it | Step 5: test file keeps own state | S27 | PASS | "This state is entirely separate from any existing state for the configuration under test" |
| 204 | Try it | Step 5: -filter limits run to given test file | S27 | PASS | "-filter=testfile - Limits the terraform test operation to the specified test files." |
| 205 | Try it | Step 6 code block: destroy -auto-approve, ls, state list | S23, S22 | PASS | S23 "terraform apply accepts, although it does" (destroy takes apply's options); S22 "-auto-approve - Skips interactive approval of the plan before applying." `terraform state list` is not sourced (see row 192). |
| 206 | Try it | Step 6: destroy deprovisions all objects the configuration manages | S23 | PASS | "deprovisions all objects managed by a Terraform configuration." |
| 207 | Try it | Step 7 packer block lists the Docker plugin in required_plugins | S37 | PASS | "plugins according to the required_plugins block in Packer templates written in HCL" |
| 208 | Try it | Step 7: source block holds the builder | S33 | PASS | "The source block defines reusable builder configuration blocks." |
| 209 | Try it | Step 7: commit = true commits container to an image | S41 | PASS | "If true, the container will be committed to an image rather than exported." |
| 210 | Try it | Step 7: pull = false uses image already on machine | S41 | PASS | "Otherwise, it is assumed the image already exists and can be used." |
| 211 | Try it | Step 7: provisioner block defines how to configure a provisioner | S35 | PASS | "The provisioner block defines how to configure a provisioner." |
| 212 | Try it | Step 7: docker-tag takes committed docker builder artifact and tags it into a repository | S42 | PASS | "builder that was committed and tags it into a repository" |
| 213 | Try it | Step 7 code block: packer init ., fmt -check ., validate ., build -color=false . | S37, S53, S39, S38 | PASS | S37 "$ packer init ."; S53 "$ packer fmt -check ."; S39 validate; S38 "-color=false - Disables colorized output." `packer version` and `docker run/rmi` are the tutorial's own checks. |
| 214 | Try it | Step 7: packer init installed docker plugin | S37 | PASS | "download and install plugins according to the required_plugins block" |
| 215 | Try it | Step 7: packer fmt formats HCL2 to canonical format | S53 | PASS | "used to format HCL2 configuration files to a canonical format and style." |
| 216 | Try it | Step 7: -check exit 0 only if all input formatted | S53 | PASS | "Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| 217 | Try it | Step 7: validate returns zero exit on success | S39 | PASS | "return a zero exit status on success" |
| 218 | Try it | Step 7: build started container, ran provisioner, committed (and tagged) | S41 | PASS | "starts a Docker container, runs provisioners within this container, then exports the container for reuse or commits the image." (tagging is run record, see S42) |
| 219 | Try it | Step 7: used no Dockerfile | S41 | PASS | "Packer builds Docker containers without the use of Dockerfiles." |
| 220 | Try it | Step 8: composition render needs Docker-compatible container runtime | S51 | PASS | "do require a Docker compatible container runtime" |
| 221 | Try it | Step 8: by default pulls and runs functions with Docker | S52 | PASS | "By default, the render command pulls and runs Composition Functions using Docker." |
| 222 | Try it | Step 8: composition is a template for several resources as one composite resource | S45 | PASS | "Compositions are a template for creating multiple Kubernetes resources as a" (single composite resource) |
| 223 | Try it | Step 8: code block `crossplane version --client`, `composition render` | S52 | PASS | "crossplane version [flags]" with "--client: If true, shows client version only (no server required)."; "crossplane composition render xr.yaml composition.yaml functions.yaml" |
| 224 | Try it | Step 8: render shows what resources composition would create or change | S52 | PASS | "shows you what resources a Composition would" create or change |
| 225 | Try it | Step 8: status, fixed time, render runs locally | none | N/A | Page's own run record. |
| 226 | Try it | Step 9: XRD defines the schema of the custom API | S44 | PASS | "define the schema for a custom API" |
| 227 | Try it | Step 9: code block `crossplane resource validate xrd.yaml app.yaml` | S52 | PASS | "crossplane resource validate crossplane.yaml,extensionsDir/ resourceDir/" |
| 228 | Try it | Step 9: validate checks against XRD/CRD/provider/function/configuration schemas | S52 | PASS | "against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)" |
| 229 | Try it | Step 9: detects unknown fields | S52 | PASS | "unknown-field detection" |
| 230 | Try it | Step 9: docs mark resource validate as beta | S52 | PASS | "[BETA] Validate Crossplane resources." |
| 231 | How a tester uses it | fmt -check exit 0 if formatted, else non-zero | S20 | PASS | "The exit status is 0 if the command's input is properly formatted. Otherwise, the exit status is non-zero" |
| 232 | How a tester uses it | packer fmt -check does the same | S53 | PASS | "Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| 233 | How a tester uses it | packer validate non-zero on failure | S39 | PASS | "a non-zero exit status on failure" |
| 234 | How a tester uses it | plan -detailed-exitcode: 0 no changes, 1 error, 2 changes | S21 | PASS | "0 = Succeeded with empty diff (no changes) 1 = Error 2 = Succeeded with non-empty diff (changes present)" |
| 235 | How a tester uses it | Style guide: run fmt and validate before commit | S28 | PASS | "Run terraform fmt and terraform validate before committing your code to version control." |
| 236 | How a tester uses it | show -json shows JSON of a plan file | S24 | PASS | "For Terraform plan files, terraform show -json shows a JSON representation of the plan" |
| 237 | How a tester uses it | Each resource_changes item has a list of actions | S25 | PASS | "\"actions\" are the actions that will be taken on the object" |
| 238 | How a tester uses it | Replacement is two actions; scan for delete | S25 | PASS | "The two "replace" actions are represented in this way to allow callers to e.g. just scan the list for "delete" to recognize all three situations" |
| 239 | How a tester uses it | A test reading this JSON can fail when a plan deletes an object it should keep | none | FAIL | No cite, and S25 does not say it. Fix: cite nothing and move it to the Tutorial advice callout, or drop it. |
| 240 | How a tester uses it | command = plan creates no infrastructure | S26 | PASS | "instructs Terraform to not create new infrastructure for this run block" |
| 241 | How a tester uses it | An applying run block creates real infrastructure that can cost money | S27 | PASS | "The Terraform terraform test command creates real infrastructure."; "can cost you money" |
| 242 | How a tester uses it | Test file keeps separate state | S27 | PASS | "This state is entirely separate from any existing state for the configuration under test" |
| 243 | How a tester uses it | Since v1.7.0 tests can mock provider data | S26 | PASS | "Terraform v1.7.0 introduced the ability to mock data returned by the providers" |
| 244 | How a tester uses it | -junit-xml saves a JUnit XML report | S27 | PASS | "Saves a test report in JUnit XML format to the specified file." |
| 245 | How a tester uses it | packer validate checks syntax and configuration | S39 | PASS | "validate the syntax and configuration of a template." |
| 246 | How a tester uses it | Build result is an artifact | S31 | PASS | "Builds are a single task that eventually produces an artifact" |
| 247 | How a tester uses it | Step 7: tutorial ran the built image and read a file and version | none | N/A | Page's own run record. |
| 248 | How a tester uses it | resource validate checks schemas and detects unknown fields | S52 | PASS | "against the schemas of the provided extensions ... unknown-field detection" |
| 249 | How a tester uses it | composition render shows what a composition would create/change, running locally | S52 | PASS | "shows you what resources a Composition would" create or change; "It runs the Crossplane render engine (either in a Docker container or via a local binary)" |
| 250 | How a tester uses it | Step 9: render accepted a typo that validate refused | none | N/A | Page's own run record. |
| 251 | How a tester uses it | State and plan files can hold sensitive values such as database passwords or API tokens | S14 | PASS | "that can contain sensitive values, such as initial database passwords or API tokens." |
| 252 | How a tester uses it | show -json shows sensitive state values in plain text | S24 | PASS | "any sensitive values in Terraform state will be displayed in plain text" |
| 253 | How a tester uses it | So a plan, state file, or its JSON can leak a secret into a bug report | none | FAIL | No cite. S14 and S24 do not mention bug reports. Fix: drop "into a bug report", or move the sentence to the Tutorial advice callout. |
| 254 | How a tester uses it | Tests run against test-specific, short-lived resources | S26 | PASS | "Tests run against test-specific, short-lived resources" |
| 255 | How a tester uses it | destroy deprovisions all objects the configuration manages | S23 | PASS | "deprovisions all objects managed by a Terraform configuration." |
| 256 | How a tester uses it | prevent_destroy also prevents terraform destroy once objects are created | S16 | PASS | "and prevents the terraform destroy command from operating once such objects are created." |
| 257 | How a tester uses it | Binary can contain malicious code; HashiCorp says verify created and signed | S54 | PASS | "running an executable that includes malicious code. You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 258 | Common mistakes | Avoid state in VCS or storage without locking and access control | S11 | PASS | "Avoid storing your state in a version control system or other storage solution that does not support Terraform state locking and secure access control" |
| 259 | Common mistakes | State is a JSON text file; do not edit directly | S11 | PASS | "Terraform stores your workspaces state as a JSON text file. Do not directly edit" |
| 260 | Common mistakes | If backend supports it, state locked for write operations | S13 | PASS | "If supported by your backend, Terraform will lock your state for all operations that could write state." |
| 261 | Common mistakes | If locking fails Terraform does not continue | S13 | PASS | "If state locking fails, Terraform does not continue." |
| 262 | Common mistakes | Include .terraform.lock.hcl in VCS so code review can discuss dependency changes | S6 | PASS | "include this file in your version control repository so that you can discuss potential changes to your external dependencies via code review" |
| 263 | Common mistakes | HashiCorp recommends constraining provider versions in production | S4 | PASS | "In production we recommend constraining the acceptable provider versions" |
| 264 | Common mistakes | Re-check final non-speculative plan to make sure it matches intent | S21 | PASS | "you should always re-check the final non-speculative plan before applying to make sure that it still" (matches intent) |
| 265 | Common mistakes | -auto-approve: make sure no one changes infra outside workflow; minimizes unpredictable changes and drift | S22 | PASS | "This minimizes the risk of unpredictable changes and configuration drift." |
| 266 | Common mistakes | prevent_destroy does not stop destruction when configuration removed | S16 | PASS | "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration." |
| 267 | Common mistakes | HashiCorp says use prevent_destroy sparingly | S16 | PASS | "Use prevent_destroy sparingly." |
| 268 | Common mistakes | validate does not validate remote services such as remote state or provider APIs | S19 | PASS | "It does not validate remote services, such as remote state or provider APIs." |
| 269 | Common mistakes | validate needs an initialized working directory | S19 | PASS | "Validation requires an initialized working directory" |
| 270 | Common mistakes | If content is sensitive use local_sensitive_file | S29 | PASS | "If the file content is sensitive, use the [`local_sensitive_file`](./sensitive_file.html) resource instead." |
| 271 | Common mistakes | local_file noise: detected as deleted on new machine, diff to re-create | S29 | PASS | "as having been deleted each time a configuration is applied on a new machine where the file is not present and will generate a diff to re-create it." |
| 272 | Common mistakes | terraform test can create real infrastructure that can cost money | S27 | PASS | "can create real infrastructure than can cost you money" |
| 273 | Common mistakes | Packer does not replace configuration management | S30 | PASS | "Packer does not replace configuration management like Chef or Puppet." |
| 274 | Common mistakes | pull defaults to true | S41 | PASS | "This defaults to true if not set." |
| 275 | Common mistakes | Template sets pull to false so it uses the local image | none | N/A | Tutorial's own template (record). |
| 276 | Common mistakes | Step 9: render exited 0 for a typo; resource validate refused it | none | N/A | Page's own run record. |
| 277 | Common mistakes | Docs say validate detects unknown fields | S52 | PASS | "unknown-field detection" |
| 278 | Common mistakes | Verify HashiCorp created and signed the binary to avoid malicious executables | S54 | PASS | "You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 279 | What a tester can check | Callout "Tutorial advice": 12 advice items | none | PASS | The callout says "This list is the tutorial's own advice for a tester who works with Terraform, Packer, and Crossplane." It gives no tool fact that the rest of the page does not support. |
| 280 | Key words | Infrastructure as code | none | PASS | Technical panel: "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently" |
| 281 | Key words | Provider | none | PASS | Technical panel: "Terraform relies on plugins called providers to interact with cloud providers, SaaS providers, and other APIs" |
| 282 | Key words | Resource | none | PASS | Technical panel: "The resource block defines a piece of infrastructure" |
| 283 | Key words | Variable | none | PASS | Technical panel: "The variable block is similar to a function argument in other programming languages" |
| 284 | Key words | Output | none | PASS | Technical panel: "The output block lets you expose information about your infrastructure" |
| 285 | Key words | Plan | none | PASS | Technical panel: "The terraform plan command creates an execution plan, which lets you preview the changes that Terraform plans to make" |
| 286 | Key words | Speculative plan | none | PASS | Technical panel: "Without the -out option, it creates a speculative plan" |
| 287 | Key words | Apply | none | PASS | Technical panel: "The terraform apply command executes the operations of a plan" |
| 288 | Key words | State | none | PASS | Technical panel: "Terraform must store state about your workspace's managed infrastructure and configuration" |
| 289 | Key words | Remote state | none | PASS | Technical panel: "With remote state, Terraform writes the state data to a remote data store that a whole team can share" |
| 290 | Key words | Dependency lock file | none | PASS | Technical panel: "The lock file is always named .terraform.lock.hcl" |
| 291 | Key words | Module | none | PASS | Technical panel: "A module is a collection of resources that Terraform manages together" |
| 292 | Key words | Terraform test | none | PASS | Technical panel: "Terraform tests let authors validate that module configuration updates do not introduce breaking changes" |
| 293 | Key words | Machine image | none | PASS | Technical panel: "A machine image is a single static unit that contains a pre-configured operating system and installed software" |
| 294 | Key words | Template | none | PASS | Technical panel: "A template defines one or more builds" |
| 295 | Key words | Builder | none | PASS | Technical panel: "A builder creates a machine image for a single platform" |
| 296 | Key words | Provisioner | none | PASS | Technical panel: "Provisioners install and configure software in a running machine before it becomes a static artifact" |
| 297 | Key words | Post-processor | none | PASS | Technical panel: "A post-processor takes the result of a builder or another post-processor and creates a new artifact" |
| 298 | Key words | Artifact | none | PASS | Technical panel: "An artifact is the result of a single build" |
| 299 | Key words | Control plane | none | PASS | Technical panel: "A control plane is software that controls other software" |
| 300 | Key words | Drift | none | PASS | Technical panel: "If the software drifts from the desired state, the control plane corrects the drift" |
| 301 | Key words | Composite resource definition (XRD) | none | PASS | Technical panel: "A composite resource definition (XRD) defines the schema for a custom API" |
| 302 | Key words | Composition | none | PASS | Technical panel: "A composition is a template for creating several Kubernetes resources as a single composite resource" |
| 303 | Key words | Composite resource (XR) | none | PASS | Technical panel: "A composite resource represents a set of Kubernetes resources as a single Kubernetes object" |
| 304 | Key words | Managed resource | none | PASS | Technical panel: "A managed resource represents an external service in a provider" |
| 305 | Key words | Function | none | PASS | Technical panel: "Functions extend Crossplane with new ways to configure composition" |
| 306 | Key words | Render | none | PASS | Technical panel: "The composition render command shows what resources a composition would create or change" |

Open FAILs after round 6: 3

Changed after this round: Row 192 (step 4 of Try it): `terraform state list` had no cite. The page now cites the page of the command (S57, a new source). Row 239: the sentence that a test which reads the JSON of a plan can fail when a plan deletes an object had no cite, so it is dropped (the advice is in the Tutorial advice callout). Row 253: "can leak a secret into a bug report" went beyond S14 and S24, so the sentence now says that a plan, a state file, or its JSON can contain a secret. Row 223 passed, but the sentence on `crossplane version --client` had no cite of its own, so it now cites S52. The three notes "quote not in sources" (rows 183, 223, and 238) are line breaks, brackets, and the `//` of code comments in the quotes of the checker. The sources have the text, as the page has it.

## Round 7 (2026-11-19)

# Fact check: devops / terraform-iac (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page overview and practice-run summary | none | N/A | Describes the page itself. |
| 2 | Lede | Three tools; practice run on your own machine; no cloud account; link to other pages | none | N/A | Framing sentences and a site link. |
| 3 | What it is | Terraform is an IaC tool to build, change, version cloud and on-prem resources | S1 | PASS | "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 4 | What it is | Resources defined in human-readable files you can version, reuse, share | S1 | PASS | "human-readable configuration files that you can version, reuse, and share" |
| 5 | What it is | Creates and manages resources through the APIs of cloud platforms and other services | S1 | PASS | "Terraform creates and manages resources on cloud platforms and other services through their application programming interfaces (APIs)." |
| 6 | What it is | Core workflow has three stages: write, plan, apply | S1 | PASS | "The core Terraform workflow consists of three stages:" then "Write: ..." |
| 7 | What it is | Plan stage describes what Terraform will create, update, or destroy | S1 | PASS | "Terraform creates an execution plan describing the infrastructure it will create, update, or destroy" |
| 8 | What it is | Apply performs proposed operations after approval, in the correct order | S1 | PASS | "On approval, Terraform performs the proposed operations in the correct order" |
| 9 | What it is | Packer is a community tool for identical machine images for multiple platforms from one source configuration | S30 | PASS | "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." |
| 10 | What it is | A machine image is a single static unit with a pre-configured OS and installed software | S30 | PASS | "A machine image is a single static unit that contains a pre-configured operating system and installed software" |
| 11 | What it is | Packer does not replace configuration management like Chef or Puppet | S30 | PASS | "Packer does not replace configuration management like Chef or Puppet." |
| 12 | What it is | Crossplane is a control plane framework for platform engineering | S43 | PASS | "Crossplane is a control plane framework for platform engineering." |
| 13 | What it is | Lets you build control planes to manage cloud native software | S43 | PASS | "Crossplane lets you build control planes to manage your cloud native software." |
| 14 | What it is | A control plane is software that controls other software | S43 | PASS | "A control plane is software that controls other software." |
| 15 | How it works | Main purpose of the language is declaring resources, which represent infrastructure objects | S2 | PASS | "The main purpose of the Terraform language is declaring resources, which represent infrastructure objects." |
| 16 | How it works | Blocks are containers for other content | S2 | PASS | "Blocks are containers for other content" |
| 17 | How it works | Arguments assign a value to a name | S2 | PASS | "Arguments assign a value to a name." |
| 18 | How it works | Expressions represent a value, literally or by referencing and combining other values | S2 | PASS | "Expressions represent a value, either literally or by referencing and" |
| 19 | How it works | Language is declarative: intended goal, not steps | S2 | PASS | "The Terraform language is declarative, describing an intended goal rather than" |
| 20 | How it works | Resource block defines a piece of infrastructure | S3 | PASS | "The resource block defines a piece of infrastructure" |
| 21 | How it works | Arguments a resource supports are determined by the provider | S3 | PASS | "The arguments that an individual resource supports are determined by the provider." |
| 22 | How it works | Variable block is similar to a function argument in other languages | S7 | PASS | "The variable block is similar to a function argument in other programming languages." |
| 23 | How it works | A validation block can refuse a value | S7 | PASS | "if a validation block's condition expression evaluates to false, then Terraform throws an error, displays the error_message, and stops the current operation." |
| 24 | How it works | Output block lets you expose information about your infrastructure | S8 | PASS | "The output block lets you expose information about your infrastructure." |
| 25 | How it works | An output can pass information from a Terraform operation to an automation tool | S8 | PASS | "Passing information from a Terraform operation to an automation tool." |
| 26 | How it works | Locals block is similar to function-scoped variables | S9 | PASS | "The locals block is similar to function-scoped variables in other programming languages." |
| 27 | How it works | Data block fetches data from the provider without provisioning an object | S10 | PASS | "fetches data about a resource from the provider without provisioning an associated infrastructure object" |
| 28 | How it works | Terraform relies on plugins called providers to interact with cloud providers, SaaS providers, other APIs | S4 | PASS | "Terraform relies on plugins called providers to interact with cloud providers," / "SaaS providers, and other APIs." |
| 29 | How it works | Every resource type is implemented by a provider | S4 | PASS | "Every resource type is implemented by a provider" |
| 30 | How it works | Providers are distributed separately and have their own version numbers | S4 | PASS | "Providers are released separately from Terraform itself and have their own version numbers." |
| 31 | How it works | Configuration declares required providers in a required_providers block | S5 | PASS | "Define the provider's source, local name, and version in the required_providers block" |
| 32 | How it works | terraform init locally installs a provider and updates the lock file | S5 | PASS | "Running terraform init locally installs a provider and updates the Dependency lock file" |
| 33 | How it works | Lock file is always named .terraform.lock.hcl | S6 | PASS | "The lock file is always named .terraform.lock.hcl" |
| 34 | How it works | Include the lock file in version control | S6 | PASS | "include this file in your version control repository" |
| 35 | How it works | In production, HashiCorp recommends constraining provider versions | S4 | PASS | "In production we recommend constraining the acceptable provider versions" |
| 36 | How it works | init initializes a working directory with configuration files | S18 | PASS | "The terraform init command initializes a working directory" / "containing Terraform configuration files." |
| 37 | How it works | init is the first command after writing or cloning a configuration | S18 | PASS | "This is the first command you should run after writing a new Terraform configuration or cloning an existing one" |
| 38 | How it works | Safe to run init multiple times | S18 | PASS | "It is safe to run this command multiple times." |
| 39 | How it works | fmt formats files to canonical format and style | S20 | PASS | "formats Terraform configuration file contents so that it matches the canonical format and style." |
| 40 | How it works | validate checks syntactic validity and internal consistency | S19 | PASS | "verify whether a configuration is syntactically valid and internally consistent" |
| 41 | How it works | validate does not validate remote services | S19 | PASS | "It does not validate remote services, such as remote state or provider APIs." |
| 42 | How it works | validate needs an initialized working directory | S19 | PASS | "Validation requires an initialized working directory" |
| 43 | How it works | Style guide: run fmt and validate before committing | S28 | PASS | "Run terraform fmt and terraform validate before committing your code to version control." |
| 44 | How it works | plan creates an execution plan to preview changes | S21 | PASS | "creates an execution plan, which lets you preview the changes that Terraform plans to make" |
| 45 | How it works | By default plan reads the current state of existing remote objects | S21 | PASS | "By default, Terraform performs the following operations when it creates a plan: Reads the current state of any already-existing remote objects" |
| 46 | How it works | Compares configuration to prior state | S21 | PASS | "Compares the current configuration to the prior state" |
| 47 | How it works | Proposes changes that make remote objects match the configuration | S21 | PASS | "make the remote objects match the configuration." |
| 48 | How it works | Without -out it creates a speculative plan | S21 | PASS | "If you run terraform plan without the -out=FILE option then it will create a speculative plan" |
| 49 | How it works | Always re-check the final non-speculative plan before applying | S21 | PASS | "you should always re-check the final non-speculative plan before applying" |
| 50 | How it works | -detailed-exitcode returns a detailed exit code | S21 | PASS | "-detailed-exitcode - Returns a detailed exit code when the command exits." |
| 51 | How it works | apply executes the operations of a plan | S22 | PASS | "The terraform apply command executes the operations proposed in a Terraform" plan |
| 52 | How it works | Without a saved plan, apply creates a new plan and prompts for approval | S22 | PASS | "without passing a saved plan file, Terraform automatically creates a new execution plan ... prompts you to approve that plan" |
| 53 | How it works | With a saved plan, it does not prompt | S22 | PASS | "performs the operations in the saved plan without prompting you for confirmation." |
| 54 | How it works | destroy deprovisions all objects the configuration manages | S23 | PASS | "The terraform destroy command deprovisions all objects managed by a Terraform configuration." |
| 55 | How it works | Terraform must store state about managed infrastructure and configuration | S11 | PASS | "Terraform must store state about your workspace's managed infrastructure and configuration." |
| 56 | How it works | Uses state to map real world resources to configuration | S11 | PASS | "Terraform uses your workspace's state to map real world resources" |
| 57 | How it works | Before any operation Terraform does a refresh | S11 | PASS | "refresh to update the state with the real" infrastructure |
| 58 | How it works | By default state is a local file terraform.tfstate | S11 | PASS | "terraform.tfstate, and a backup of the previous state in terraform.tfstate.backup." (S12: "By default, Terraform stores state locally in a file named terraform.tfstate.") |
| 59 | How it works | JSON text file; do not edit directly | S11 | PASS | "Terraform stores your workspaces state as a JSON text file. Do not directly edit" |
| 60 | How it works | Remote state writes to a remote data store a whole team can share | S12 | PASS | cite is S11 for the earlier sentences but this one cites S12: "With remote state, Terraform writes the state data to a remote data store, which can then be shared between all members of a team." |
| 61 | How it works | If backend supports it, Terraform locks state for all operations that could write state | S13 | PASS | "If supported by your backend, Terraform will lock your" / "State locking happens automatically on all operations that could write state." |
| 62 | How it works | Lock prevents others corrupting the state | S13 | PASS | "others from acquiring the lock and potentially corrupting your state." |
| 63 | How it works | If locking fails, Terraform does not continue | S13 | PASS | "If state locking fails, Terraform does not continue." |
| 64 | How it works | State and plan files can hold secrets | S14 | PASS | "Terraform state and plan files contain detailed information about your infrastructure, including resource attributes and metadata that can contain sensitive values" |
| 65 | How it works | Local state file is plaintext | S14 | PASS | "Terraform stores your state in a plaintext file, which includes any secret values you defined" |
| 66 | How it works | Treat as sensitive data; keep out of Git workflows | S14 | PASS | "Treat your state file as sensitive data by excluding it from Git workflows" |
| 67 | How it works | Avoid storing state in VCS or storage without locking and access control | S11 | PASS | "Avoid storing your state in a version control system or other storage solution that does not support Terraform state locking and secure access control" |
| 68 | How it works | Module is a collection of resources managed together | S15 | PASS | "A module is a collection of resources that Terraform manages together." |
| 69 | How it works | Root directory configuration is the root module | S15 | PASS | "Terraform refers to this configuration as the root module." |
| 70 | How it works | Modules called with module blocks are child modules | S15 | PASS | "Modules you configure using module blocks are called child modules." |
| 71 | How it works | for_each manages several similar objects without separate blocks | S17 | PASS | "manage several similar objects, such as a fixed pool of compute instances, without writing a separate block for each object." |
| 72 | How it works | for_each accepts a map or a set of strings | S17 | PASS | "The for_each meta-argument accepts a map or a set of strings" |
| 73 | How it works | If an argument cannot change in place, destroy then create | S16 | PASS | "when Terraform must change a resource argument that cannot be updated in-place ... Terraform destroys the existing object and then creates a new replacement object" (page drops "By default"; still true) |
| 74 | How it works | create_before_destroy reverses that order | S16 | PASS | "Use the create_before_destroy rule to instruct Terraform to create a replacement resource before destroying the current resource." |
| 75 | How it works | prevent_destroy true rejects destroying plans | S16 | PASS | "When prevent_destroy is set to true, Terraform rejects plans that would destroy the infrastructure object" |
| 76 | How it works | prevent_destroy does not stop destruction when configuration is removed | S16 | PASS | "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration." |
| 77 | How it works | ignore_changes lists attributes ignored when planning updates | S16 | PASS | "the ignore_changes meta-argument specifies resource attributes that Terraform should ignore when planning updates" |
| 78 | How it works | show gives human-readable output from a state or plan file | S24 | PASS | "The terraform show command provides human-readable output" / "from a state or plan file." |
| 79 | How it works | Apply page says to inspect a saved plan with show | S22 | PASS | "Use terraform show to inspect a saved plan file before applying it." |
| 80 | How it works | -json gives machine-readable output | S24 | PASS | "Add the -json command-line flag to generate machine-readable output." |
| 81 | How it works | For a plan file, JSON holds plan, configuration, current state | S24 | PASS | "shows a JSON representation" / "of the plan, configuration, and current state." |
| 82 | How it works | With -json, sensitive state values show in plain text | S24 | PASS | "any sensitive values in Terraform state will be displayed in plain text." |
| 83 | How it works | Terraform can output a machine-readable JSON representation of a plan file's changes | S25 | PASS | "Terraform can output a machine-readable JSON representation of a plan file's changes." |
| 84 | How it works | Same page says to use terraform show -json | S25 | PASS | "Use terraform show -json <FILE> to generate a JSON representation of a plan or state file." |
| 85 | How it works | Tests validate module updates do not introduce breaking changes | S26 | PASS | "Terraform tests let authors validate that module configuration updates do not introduce breaking changes." |
| 86 | How it works | Tests run against test-specific, short-lived resources | S26 | PASS | "Tests run against test-specific, short-lived resources" |
| 87 | How it works | Test files found by .tftest.hcl or .tftest.json | S26 | PASS | "Terraform discovers test files based on their file extension: .tftest.hcl or .tftest.json." |
| 88 | How it works | A test file has one or more run blocks | S26 | PASS | "One to many run blocks." |
| 89 | How it works | A run block can hold assert blocks | S26 | PASS | "assert Optional assert blocks." |
| 90 | How it works | By default a run block applies and creates real infrastructure | S26 | PASS | "By default, tests within Terraform create real infrastructure" |
| 91 | How it works | command = plan creates no infrastructure | S26 | PASS | "command = plan instructs Terraform to not create new infrastructure for this run block." |
| 92 | How it works | expect_failures lists objects that should fail custom conditions | S26 | PASS | "the expect_failures attribute can provide a list of checkable objects ... that should fail their custom conditions." |
| 93 | How it works | v1.7.0 added mocking of provider data | S26 | PASS | "Terraform v1.7.0 introduced the ability to mock data returned by the providers" |
| 94 | How it works | test searches current and testing directory | S27 | PASS | "This command searches the current directory and the specified testing directory for Terraform testing files and executes the specified tests." |
| 95 | How it works | Default testing directory is tests | S27 | PASS | "The default testing directory is tests." |
| 96 | How it works | Each test file keeps state in memory, apart from the configuration's state | S27 | PASS | "maintain all Terraform state it requires within memory" / "entirely separate from any existing state for the configuration under test" |
| 97 | How it works | After a test file runs, Terraform tries to destroy leftovers | S27 | PASS | "Terraform attempts to destroy any remaining infrastructure." |
| 98 | How it works | test can create real infrastructure that can cost money | S27 | PASS | "can create real infrastructure than can cost you money." |
| 99 | How it works | -json and -junit-xml options | S27 | PASS | "-json - Displays machine-readable JSON output" / "-junit-xml=<output file path> - Saves a test report in JUnit XML format" |
| 100 | How it works | Packer reads and applies HCL template configurations | S32 | PASS | "Packer reads and applies configurations defined in HCL template files." |
| 101 | How it works | Passing a directory parses every .pkr.hcl / .pkr.json file | S32 | PASS | "When a directory is passed, all files in the folder with a name ending with .pkr.hcl or .pkr.json will be parsed" |
| 102 | How it works | A template defines one or more builds | S31 | PASS | "Templates are files that define one or more builds" |
| 103 | How it works | A build is a single task producing an artifact for a single platform | S31 | PASS | "Builds are a single task that eventually produces an artifact for a single" platform |
| 104 | How it works | A builder creates a machine image for a single platform | S31 | PASS | "Builders are components of Packer that are able to create a machine image for a single platform." |
| 105 | How it works | Provisioners install and configure software in a running machine before it becomes a static artifact | S31 | PASS | "install and configure software within a running machine prior to that machine being turned into a static artifact." |
| 106 | How it works | Post-processor takes a builder's or post-processor's result and creates a new artifact | S31 | PASS | "take the result of a builder or another post-processor and process that to create a new artifact." |
| 107 | How it works | An artifact is the result of a single build | S31 | PASS | "Artifacts are the results of a single build" |
| 108 | How it works | source block defines reusable builder configuration | S33 | PASS | "The source block defines reusable builder configuration blocks." |
| 109 | How it works | build block: which builders, how to provision, post-processing | S34 | PASS | "specifies which builders Packer should run, how to provision them," / "any post-processing actions" |
| 110 | How it works | provisioner block defines how to configure a provisioner | S35 | PASS | "The provisioner block defines how to configure a provisioner." |
| 111 | How it works | post-processor block defines how to configure a post-processor | S36 | PASS | "The post-processor block defines how a post-processor is configured." |
| 112 | How it works | packer init downloads and installs plugins listed in required_plugins | S37 | PASS | "download and install plugins according to the required_plugins block" |
| 113 | How it works | packer validate checks syntax and configuration | S39 | PASS | "used to validate the syntax and" configuration of a template |
| 114 | How it works | Zero exit status on success, non-zero on failure | S39 | PASS | "return a zero exit status on success, and a non-zero exit status on failure." |
| 115 | How it works | packer build runs all builds in a template | S38 | PASS | "takes a template and runs all the builds within it" |
| 116 | How it works | Builds run in parallel unless otherwise specified | S38 | PASS | "executed in parallel, unless otherwise specified." |
| 117 | How it works | shell provisioner runs shell scripts on the machine Packer builds | S40 | PASS | "runs shell scripts on the machine Packer builds." |
| 118 | How it works | docker builder builds Docker images using Docker | S41 | PASS | "The docker Packer builder builds Docker images using Docker." |
| 119 | How it works | Starts a container, runs provisioners, exports or commits | S41 | PASS | "starts a Docker container, runs provisioners within this container, then exports the container for reuse or commits the image." |
| 120 | How it works | Builds container without a Dockerfile | S41 | PASS | "Packer builds Docker containers without the use of Dockerfiles." |
| 121 | How it works | Needs a machine with Docker Engine | S41 | PASS | "The Docker builder must run on a machine that has Docker Engine installed." |
| 122 | How it works | commit true commits instead of exporting | S41 | PASS | "If true, the container will be committed to an image rather than exported." |
| 123 | How it works | pull defaults to true, so base image pulled first | S41 | PASS | "If true, the configured image will be pulled using docker pull prior to use. ... This defaults to true if not set." |
| 124 | How it works | docker-tag tags a committed docker-builder artifact into a repository | S42 | PASS | "takes an artifact from the docker builder that was committed and tags it into a repository." |
| 125 | How it works | Control planes expose an API | S43 | PASS | "Control planes expose an API." |
| 126 | How it works | API sets desired state | S43 | PASS | "what software it should configure and how - this is your desired state." |
| 127 | How it works | Control plane corrects drift | S43 | PASS | "If your software ever drifts from your desired state, the control plane automatically corrects the drift." |
| 128 | How it works | Built on Kubernetes | S43 | PASS | "It's built on Kubernetes" |
| 129 | How it works | Four components | S43 | PASS | "Crossplane has four major components: Composition / Managed resources / Operations / Package manager" |
| 130 | How it works | Composition lets you build custom APIs | S43 | PASS | "Composition lets you build custom APIs to control your cloud native software." |
| 131 | How it works | Pipeline of functions instead of a controller | S43 | PASS | "With Crossplane you don't have to write a controller. Instead you configure a pipeline of functions." |
| 132 | How it works | Functions return declarative configuration Crossplane applies | S43 | PASS | "The functions return declarative configuration that Crossplane should apply." |
| 133 | How it works | XRD defines schema for a custom API | S44 | PASS | "Composite resource definitions (XRDs) define the schema for a custom API." |
| 134 | How it works | Users create XRs with the XRD schema | S44 | PASS | "Users create composite resources (XRs) using the API schema defined by an" XRD |
| 135 | How it works | Composition is a template for several Kubernetes resources as one composite resource | S45 | PASS | "Compositions are a template for creating multiple Kubernetes resources as a single composite resource." |
| 136 | How it works | XR is a set of Kubernetes resources as one object | S46 | PASS | "represents a set of Kubernetes resources as a single Kubernetes object." |
| 137 | How it works | Providers let Crossplane provision on an external service | S47 | PASS | "Providers enable Crossplane to provision infrastructure on an external service." |
| 138 | How it works | Managed resource represents an external service in a provider | S49 | PASS | "A managed resource (MR) represents an external service in a Provider." |
| 139 | How it works | Functions extend Crossplane with new ways to configure composition | S48 | PASS | "Functions extend Crossplane with new ways to configure" |
| 140 | How it works | Docs tutorial creates App that becomes a Deployment and a Service | S50 | PASS | "create a new kind of custom resource named App. ... Crossplane creates a Deployment and a Service." |
| 141 | How it works | CLI is a single standalone binary | S51 | PASS | "The Crossplane CLI is a single standalone binary with no external dependencies." |
| 142 | How it works | Most CLI commands independent of Kubernetes | S51 | PASS | "Most Crossplane CLI commands are independent of Kubernetes" |
| 143 | How it works | composition render shows what resources a composition would create or change | S52 | PASS | "shows you what resources a Composition would create or mutate by running the composition locally" |
| 144 | How it works | By default render runs functions using Docker | S52 | PASS | "By default, the render command pulls and runs Composition Functions using Docker." |
| 145 | How it works | resource validate checks against XRD, CRD, provider, function, configuration schemas | S52 | PASS | "against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)" |
| 146 | How it works | Also detects unknown fields | S52 | PASS | "other checks such as unknown-field detection" |
| 147 | How it works | Docs mark the command as beta | S52 | PASS | "crossplane resource validate [BETA] Validate Crossplane resources." |
| 148 | Try it | Run record: date, versions, isolation, env check, network (paragraph 1) | none | N/A | Record of the page's own run. |
| 149 | Try it | Steps 1-6 use local provider, no cloud account; init downloaded local v2.9.1; step 7 and Docker plugin v1.1.5; base image; images removed (paragraph 2) | none | N/A | Record of the page's own run. |
| 150 | Try it | Steps 8-9 need no cluster; images pulled and removed; manifest files come from "Get started with composition" | S50 | PASS | S50 gives the manifests: "kubectl apply -f https://docs.crossplane.io/latest/manifests/get-started/composition/xrd.yaml", ".../fn-patch-and-transform.yaml", ".../composition-yaml.yaml", ".../app.yaml". The rest is run record (N/A). |
| 151 | Try it | Tutorial's own choices (names, versions, etc.) | none | N/A | Statement about the tutorial's own work. |
| 152 | Try it | Install page of Terraform showed 1.17.2 as latest | S55 | PASS | "1.17.2 (latest)" |
| 153 | Try it | Install page of Packer showed 1.16.2 | S56 | PASS | "1.16.2 (latest)" |
| 154 | Try it | Both pages list package-manager commands and a binary download | S55, S56 | PASS | S55: "Homebrew", "sudo apt update && sudo apt install terraform", "Binary download". S56: "Package manager", "Binary download". |
| 155 | Try it | Tutorial took binaries to ~/.local/bin, install times | none | N/A | Record of the page's own run. |
| 156 | Try it | HashiCorp says verify it created and signed the binary before running | S54 | PASS | "You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 157 | Try it | A binary can hide malicious code | S54 | PASS | "tricking you into running an executable that includes malicious code." |
| 158 | Try it | HashiCorp uses a public PGP key to sign the checksums of product archives | S54 | PASS | "HashiCorp uses a public PGP key to sign certain files, including the checksums for its product archives." |
| 159 | Try it | The page gives the key fingerprint | S54 | PASS | "Primary key fingerprint: C874 011F 0AB4 0511 0D02 1055 3436 5D94 72D7 468F" |
| 160 | Try it | The tutorial's three checks and SHA-256 prefixes | none | N/A | Record of the page's own run. |
| 161 | Try it | Crossplane CLI is a single standalone binary | S51 | PASS | "The Crossplane CLI is a single standalone binary with no external" |
| 162 | Try it | Some commands such as composition render need a Docker-compatible container runtime | S51 | PASS | "Some commands, such as crossplane composition render and crossplane project build, do require a Docker compatible container runtime." |
| 163 | Try it | Tutorial downloaded the binary by hand, as the page describes | S51 | PASS | "you can manually download a binary from the Crossplane releases repository" |
| 164 | Try it | Page says to move it to a folder in PATH, e.g. /usr/local/bin | S51 | PASS | "Move the binary to a location in your $PATH, for example /usr/local/bin." |
| 165 | Try it | Binary location, checksum, no signature found | none | N/A | Record of the page's own run. |
| 166 | Try it | Step 1: main.tf code block and its Terraform commands | none | N/A | The tutorial's own file. Each item is covered by the later explanatory sentence. |
| 167 | Try it | terraform block names the provider in required_providers | S5 | PASS | "Define the provider's source, local name, and version in the required_providers block inside your top-level terraform block." |
| 168 | Try it | A variable block is like a function argument | S7 | PASS | "The variable block is similar to a function argument in other programming languages." |
| 169 | Try it | The validation block of env_name refuses capital letters | none | N/A | Describes the tutorial's own file. |
| 170 | Try it | locals block holds the text of the settings | S9 | PASS | "Local values assign names to expressions" |
| 171 | Try it | local_file generates a local file with the given content | S29 | PASS | "Generates a local file with the given content." |
| 172 | Try it | output block exposes the path of the file | S8 | PASS | "The output block lets you expose information about your infrastructure." |
| 173 | Try it | Step 1 output block (version, init, lock file, fmt, validate) | none | N/A | Record of the page's own run. |
| 174 | Try it | init installed the provider and created .terraform.lock.hcl | S5 | PASS | S5: "installs a provider and updates the Dependency lock file". S6: "Terraform automatically creates or updates the dependency lock file each time" |
| 175 | Try it | Lock file is how Terraform remembers its version choice | S6 | PASS | "after selecting a specific version of each dependency Terraform remembers" |
| 176 | Try it | List holds checksums for your platform and other platforms | S6 | PASS | "The lock file will therefore include checksums for both the package you installed for" |
| 177 | Try it | On a later init, error if installed package matches no recorded checksum | S6 | PASS | "returning an error if none of the checksums match" |
| 178 | Try it | Exit status 0 if properly formatted, else non-zero, with a list of file names | S20 | PASS | "The exit status is 0 if the command's input is properly formatted. Otherwise, the exit status is non-zero, and the command outputs a list of improperly formatted file names." |
| 179 | Try it | validate checks syntactic validity and internal consistency | S19 | PASS | "syntactically valid and internally consistent" |
| 180 | Try it | Step 1 observed results (head lines, fmt exit 0 and 3) | none | N/A | Record of the page's own run. |
| 181 | Try it | Step 2 bullet 1: plan saved with -out; 0777 is the provider default | S29 | PASS | "Default value is `"0777"`." (file_permission). The rest is run record. |
| 182 | Try it | -detailed-exitcode exit 2 = succeeded with changes | S21 | PASS | "2 = Succeeded with non-empty diff (changes present)" |
| 183 | Try it | Python line reads resource_changes and actions of the plan JSON | S25 | PASS | "resource_changes" is "a description of the individual change actions"; "actions" are listed in the change representation. |
| 184 | Try it | Valid actions: no-op, create, read, update, delete, two replace pairs | S25 | PASS | "// [\"no-op\"] ... [\"delete\", \"create\"] [\"create\", \"delete\"] ... The two \"replace\" actions are represented in this way" |
| 185 | Try it | Apply with a saved plan does not ask for approval | S22 | PASS | "performs the operations in the saved plan without prompting you for confirmation." |
| 186 | Try it | Second plan exit status 0 means success with no changes | S21 | PASS | "0 = Succeeded with empty diff (no changes)" |
| 187 | Try it | Step 3: refresh before any operation | S11 | PASS | "refresh to update the state with the real" infrastructure |
| 188 | Try it | Step 3: plan says file will be created; no page says why | none | N/A | Record and the tutorial's own remark. |
| 189 | Try it | Docs say ensure no one changes infrastructure outside workflow when using -auto-approve | S22 | PASS | "If you use -auto-approve, we recommend making sure that no one can change your infrastructure outside of your Terraform workflow." |
| 190 | Try it | Terraform checks validations while creating a plan and stops when a condition is false | S7 | PASS | "Terraform evaluates variable validations while it creates a plan, and if ... evaluates to false, then Terraform throws an error, displays the error_message, and stops the current operation." |
| 191 | Try it | Exit status 1 means an error | S21 | PASS | "1 = Error" |
| 192 | Try it | Step 4: state list lists resources within a state | S57 | PASS | "The terraform state list command lists resources within a" state |
| 193 | Try it | Default state file terraform.tfstate, backup terraform.tfstate.backup | S11 | PASS | "terraform.tfstate, and a backup of the previous state in terraform.tfstate.backup." |
| 194 | Try it | Local state is plaintext and includes secret values | S14 | PASS | "stores your state in a plaintext file, which includes any secret values you defined in your configuration." |
| 195 | Try it | For sensitive content, use local_sensitive_file | S29 | PASS | "please use the [`local_sensitive_file`](./sensitive_file.html)" |
| 196 | Try it | Step 5: default test directory is tests | S27 | PASS | "By default, the directory containing test files is named tests." |
| 197 | Try it | A test file has one or more run blocks | S26 | PASS | "One to many run blocks." |
| 198 | Try it | command = plan creates no infrastructure | S26 | PASS | "instructs Terraform to not create new infrastructure for this run block." |
| 199 | Try it | expect_failures lists a variable that should fail its custom condition | S26 | PASS | "list of checkable objects (resources, data sources, check blocks, input variables, and outputs) that should fail their custom conditions." |
| 200 | Try it | Default run block applies; by default tests create real infrastructure | S26 | PASS | "By default, tests within Terraform create real infrastructure" |
| 201 | Try it | After a test file runs, Terraform tries to destroy what is left | S27 | PASS | "Terraform attempts to destroy any remaining infrastructure." |
| 202 | Try it | A test file keeps its own state apart from the configuration | S27 | PASS | "entirely separate from any existing state for the configuration under test" |
| 203 | Try it | -filter limits the run to the given test file | S27 | PASS | "-filter=testfile - Limits the terraform test operation to the specified test files." |
| 204 | Try it | Step 5 results (3 passed, wrong test failed, exit codes) | none | N/A | Record of the page's own run. |
| 205 | Try it | Step 6: destroy deprovisions all objects the configuration manages | S23 | PASS | "deprovisions all objects managed by a Terraform configuration." |
| 206 | Try it | Step 6 results | none | N/A | Record of the page's own run. |
| 207 | Try it | Step 7: packer block lists the Docker plugin in required_plugins | S37 | PASS | "download and install plugins according to the required_plugins block" |
| 208 | Try it | source block holds the builder | S33 | PASS | "The source block defines reusable builder configuration blocks." |
| 209 | Try it | commit = true makes Packer commit the container to an image | S41 | PASS | "If true, the container will be committed to an image rather than exported." |
| 210 | Try it | pull = false makes Packer use the image already on the machine | S41 | PASS | "Otherwise, it is assumed the image already exists and can be used." |
| 211 | Try it | provisioner block defines how to configure a provisioner | S35 | PASS | "The provisioner block defines how to configure a provisioner." |
| 212 | Try it | docker-tag takes a committed artifact of the docker builder and tags it into a repository | S42 | PASS | "takes an artifact from the docker builder that was committed and tags it into a repository." |
| 213 | Try it | build block names the build qa-base and picks the source | none | N/A | Describes the tutorial's own file. |
| 214 | Try it | packer init installed the docker plugin | S37 | PASS | "download and install plugins according to the required_plugins block" |
| 215 | Try it | packer fmt formats HCL2 files to canonical format | S53 | PASS | "used to format HCL2 configuration files to a canonical format and style." |
| 216 | Try it | -check exit status 0 only if all input formatted | S53 | PASS | "Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| 217 | Try it | packer validate returns zero on success | S39 | PASS | "return a zero exit status on success" |
| 218 | Try it | packer build started a container, ran the provisioner, committed, tagged, no Dockerfile | S41 | PASS | S41 supports container/provision/commit/no Dockerfile: "starts a Docker container, runs provisioners within this container, then exports the container for reuse or commits the image"; "without the use of Dockerfiles". The tagging is the page's run record (post-processor behaviour is cited at S42). |
| 219 | Try it | docker run checks and docker rmi | none | N/A | Record of the page's own run. |
| 220 | Try it | Step 8: composition is a template for several resources as one composite resource | S45 | PASS | "template for creating multiple Kubernetes resources as a single composite resource." |
| 221 | Try it | Step 8: the other three files come from "Get started with composition" | S50 | PASS | S50 manifest URLs, e.g. ".../composition/fn-patch-and-transform.yaml", ".../composition-yaml.yaml", ".../xrd.yaml". |
| 222 | Try it | Step 8: composition content (one step, replicas 2, port 8080/80, patch) | none | N/A | Describes the tutorial's own file (S50 shows the same values). |
| 223 | Try it | crossplane version --client needs no server | S52 | PASS | "--client If true, shows client version only (no server required)." |
| 224 | Try it | composition render needs a Docker-compatible container runtime | S51 | PASS | "do require a Docker compatible container runtime." |
| 225 | Try it | By default it pulls and runs functions with Docker | S52 | PASS | "By default, the render command pulls and runs Composition Functions using Docker." |
| 226 | Try it | render shows what resources the composition would create or change | S52 | PASS | "shows you what resources a Composition would create or mutate" |
| 227 | Try it | Render results, fixed time, exit 0 | none | N/A | Record of the page's own run. |
| 228 | Try it | Step 9: XRD defines the schema of the custom API | S44 | PASS | "Composite resource definitions (XRDs) define the schema for a custom API." |
| 229 | Try it | validate checks against XRD, CRD, provider, function, configuration schemas | S52 | PASS | "against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)" |
| 230 | Try it | Command detects unknown fields | S52 | PASS | "unknown-field detection" |
| 231 | Try it | Docs mark resource validate as beta | S52 | PASS | "[BETA] Validate Crossplane resources." |
| 232 | Try it | Step 9 results (typo, exit 1, render exit 0) | none | N/A | Record of the page's own run. |
| 233 | How a tester uses it | fmt -check exit 0 if formatted, non-zero otherwise | S20 | PASS | "The exit status is 0 if the command's input is properly formatted. Otherwise, the exit status is non-zero" |
| 234 | How a tester uses it | packer fmt -check does the same | S53 | PASS | "Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| 235 | How a tester uses it | packer validate non-zero on failure | S39 | PASS | "a non-zero exit status on failure." |
| 236 | How a tester uses it | plan -detailed-exitcode returns 0, 1, 2 | S21 | PASS | "0 = Succeeded with empty diff (no changes) 1 = Error 2 = Succeeded with non-empty diff (changes present)" |
| 237 | How a tester uses it | Style guide: run fmt and validate before commit | S28 | PASS | "Run terraform fmt and terraform validate before committing your code to version control." |
| 238 | How a tester uses it | show -json shows a JSON representation of a plan file | S24 | PASS | "For Terraform plan files, terraform show -json shows a JSON representation" |
| 239 | How a tester uses it | Each resource_changes item has a list of actions | S25 | PASS | "\"actions\" are the actions that will be taken on the object" within "resource_changes" |
| 240 | How a tester uses it | Replacement is two actions; scan for delete | S25 | PASS | "The two \"replace\" actions are represented in this way to allow callers to e.g. just scan the list for \"delete\"" |
| 241 | How a tester uses it | command = plan creates no infrastructure | S26 | PASS | "instructs Terraform to not create new infrastructure for this run block." |
| 242 | How a tester uses it | Applying run block creates real infrastructure that can cost money | S27 | PASS | "can create real infrastructure than can cost you money." |
| 243 | How a tester uses it | Test file keeps state separate from the configuration | S27 | PASS | "entirely separate from any existing state for the configuration under test" |
| 244 | How a tester uses it | Since v1.7.0 tests can mock provider data | S26 | PASS | "Terraform v1.7.0 introduced the ability to mock data returned by the providers" |
| 245 | How a tester uses it | -junit-xml saves a JUnit XML report | S27 | PASS | "-junit-xml=<output file path> - Saves a test report in JUnit XML format" |
| 246 | How a tester uses it | packer validate checks syntax and configuration | S39 | PASS | "used to validate the syntax and" configuration |
| 247 | How a tester uses it | Result of a build is an artifact | S31 | PASS | "Builds are a single task that eventually produces an artifact" |
| 248 | How a tester uses it | Step 7 ran the built image | none | N/A | Refers to the page's own run. |
| 249 | How a tester uses it | resource validate checks schemas and detects unknown fields | S52 | PASS | "against the schemas of the provided extensions" / "unknown-field detection" |
| 250 | How a tester uses it | composition render shows what resources would be created or changed by running locally | S52 | PASS | "would create or mutate by running the composition locally and printing its results." |
| 251 | How a tester uses it | Step 9: render accepted a typo that validate refused | none | N/A | Refers to the page's own run. |
| 252 | How a tester uses it | State and plan files can hold sensitive values such as passwords or tokens | S14 | PASS | "sensitive values, such as initial database passwords or API tokens." |
| 253 | How a tester uses it | show -json shows sensitive state values in plain text | S24 | PASS | "any sensitive values in Terraform state will be displayed in plain text." |
| 254 | How a tester uses it | So a plan, state file or JSON can contain a secret | none | PASS | Follows from the two cited sentences just before it (S14 and S24 quotes above). |
| 255 | How a tester uses it | Tests run against short-lived resources | S26 | PASS | "Tests run against test-specific, short-lived resources" |
| 256 | How a tester uses it | destroy deprovisions all objects managed | S23 | PASS | "deprovisions all objects managed by a Terraform configuration." |
| 257 | How a tester uses it | prevent_destroy also prevents terraform destroy once objects exist | S16 | PASS | "prevents the terraform destroy command from operating once such objects are created." |
| 258 | How a tester uses it | Binary can contain malicious code; verify HashiCorp created and signed it | S54 | PASS | "tricking you into running an executable that includes malicious code. You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 259 | Common mistakes | Avoid state in VCS without locking and access control | S11 | PASS | "Avoid storing your state in a version control system or other storage solution that does not support Terraform state locking and secure access control" |
| 260 | Common mistakes | State is a JSON text file; do not edit directly | S11 | PASS | "Terraform stores your workspaces state as a JSON text file. Do not directly edit" |
| 261 | Common mistakes | If backend supports it, Terraform locks state for all write operations | S13 | PASS | "If supported by your backend, Terraform will lock your" / "State locking happens automatically on all operations that could write state." |
| 262 | Common mistakes | If locking fails, Terraform does not continue | S13 | PASS | "If state locking fails, Terraform does not continue." |
| 263 | Common mistakes | Include .terraform.lock.hcl in VCS so code review can discuss dependency changes | S6 | PASS | "include this file in your version control repository so that you can discuss potential changes to your external dependencies via code review" |
| 264 | Common mistakes | HashiCorp recommends constraining provider versions in production | S4 | PASS | "In production we recommend constraining the acceptable provider versions" |
| 265 | Common mistakes | Always re-check final non-speculative plan to match intent | S21 | PASS | "you should always re-check the final non-speculative plan before applying to make sure that it still matches your intent." |
| 266 | Common mistakes | HashiCorp recommends no outside changes with -auto-approve; reduces unpredictable changes and drift | S22 | PASS | "This minimizes the risk of unpredictable changes and configuration drift." |
| 267 | Common mistakes | prevent_destroy does not stop destruction when configuration is removed | S16 | PASS | "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration." |
| 268 | Common mistakes | HashiCorp says to use prevent_destroy sparingly | S16 | PASS | "Use prevent_destroy sparingly." |
| 269 | Common mistakes | validate does not check remote services such as remote state or provider APIs | S19 | PASS | "It does not validate remote services, such as remote state or provider APIs." |
| 270 | Common mistakes | validate needs an initialized working directory | S19 | PASS | "Validation requires an initialized working directory" |
| 271 | Common mistakes | For sensitive file content, use local_sensitive_file | S29 | PASS | "please use the [`local_sensitive_file`](./sensitive_file.html) resource instead." |
| 272 | Common mistakes | local_file detected as deleted on a new machine; diff to re-create | S29 | PASS | "as having been deleted each time a configuration is applied on a new machine where the file is not present and will generate a diff to re-create it." |
| 273 | Common mistakes | terraform test can create real infrastructure that costs money | S27 | PASS | "can create real infrastructure than can cost you money." |
| 274 | Common mistakes | Packer does not replace configuration management | S30 | PASS | "Packer does not replace configuration management like Chef or Puppet." |
| 275 | Common mistakes | pull option defaults to true | S41 | PASS | "This defaults to true if not set." |
| 276 | Common mistakes | Tutorial template sets pull to false | none | N/A | Describes the tutorial's own file. |
| 277 | Common mistakes | Step 9: render exited 0 for a typo; validate refused | none | N/A | Refers to the page's own run. |
| 278 | Common mistakes | Docs say validate detects unknown fields | S52 | PASS | "unknown-field detection" |
| 279 | Common mistakes | Verifying HashiCorp created and signed the binary avoids running malicious code | S54 | PASS | "You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 280 | What a tester can check | Callout "Tutorial advice": states it is the tutorial's own advice; all 12 bullets are the tutorial's own advice | none | PASS | Callout title is "Tutorial advice" and the first line says "This list is the tutorial's own advice". No bullet states a new fact about a tool beyond what the rest of the page supports (fmt/validate/test, plan -detailed-exitcode, -out, show JSON, expect_failures, lock file, schema validation). |
| 281 | Key words | Infrastructure as code | none | PASS | Page sentence in What it is: "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently". |
| 282 | Key words | Provider | none | PASS | How it works: "Terraform relies on plugins called providers to interact with cloud providers, SaaS providers, and other APIs". |
| 283 | Key words | Resource | none | PASS | How it works: "The resource block defines a piece of infrastructure". |
| 284 | Key words | Variable | none | PASS | How it works: "The variable block is similar to a function argument in other programming languages". |
| 285 | Key words | Output | none | PASS | How it works: "The output block lets you expose information about your infrastructure". |
| 286 | Key words | Plan | none | PASS | How it works: "The terraform plan command creates an execution plan, which lets you preview the changes that Terraform plans to make". |
| 287 | Key words | Speculative plan | none | PASS | How it works: "Without the -out option, it creates a speculative plan". |
| 288 | Key words | Apply | none | PASS | How it works: "The terraform apply command executes the operations of a plan". |
| 289 | Key words | State | none | PASS | How it works: "Terraform must store state about your workspace's managed infrastructure and configuration". |
| 290 | Key words | Remote state | none | PASS | How it works: "With remote state, Terraform writes the state data to a remote data store that a whole team can share". |
| 291 | Key words | Dependency lock file | none | PASS | How it works: "The lock file is always named .terraform.lock.hcl". |
| 292 | Key words | Module | none | PASS | How it works: "A module is a collection of resources that Terraform manages together". |
| 293 | Key words | Terraform test | none | PASS | How it works: "Terraform tests let authors validate that module configuration updates do not introduce breaking changes". |
| 294 | Key words | Machine image | none | PASS | What it is: "A machine image is a single static unit that contains a pre-configured operating system and installed software". |
| 295 | Key words | Template | none | PASS | How it works: "A template defines one or more builds". |
| 296 | Key words | Builder | none | PASS | How it works: "A builder creates a machine image for a single platform". |
| 297 | Key words | Provisioner | none | PASS | How it works: "Provisioners install and configure software in a running machine before it becomes a static artifact". |
| 298 | Key words | Post-processor | none | PASS | How it works: "A post-processor takes the result of a builder or another post-processor and creates a new artifact". |
| 299 | Key words | Artifact | none | PASS | How it works: "An artifact is the result of a single build". |
| 300 | Key words | Control plane | none | PASS | What it is: "A control plane is software that controls other software". |
| 301 | Key words | Drift | none | PASS | How it works: "If the software drifts from the desired state, the control plane corrects the drift". |
| 302 | Key words | Composite resource definition (XRD) | none | PASS | How it works: "A composite resource definition (XRD) defines the schema for a custom API". |
| 303 | Key words | Composition | none | PASS | How it works: "A composition is a template for creating several Kubernetes resources as a single composite resource". |
| 304 | Key words | Composite resource (XR) | none | PASS | How it works: "A composite resource represents a set of Kubernetes resources as a single Kubernetes object". |
| 305 | Key words | Managed resource | none | PASS | How it works: "A managed resource represents an external service in a provider". |
| 306 | Key words | Function | none | PASS | How it works: "Functions extend Crossplane with new ways to configure composition". |
| 307 | Key words | Render | none | PASS | How it works: "The composition render command shows what resources a composition would create or change". |

Open FAILs after round 7: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 56 sources (57 after round 6). Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 8 (2026-11-19)

# Fact check: devops / terraform-iac (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Topics of the page and the no-cloud practice run | – | N/A | Describes the page itself. |
| 2 | Lede | Three tools, practice run, order of pages | – | N/A | Describes the page itself; the links start with `/`. |
| 3 | What it is | Terraform is an IaC tool to build, change, version cloud and on-prem resources safely and efficiently | 1 | PASS | S1: "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 4 | What it is | Resources defined in human-readable files you can version, reuse, share | 1 | PASS | S1: "define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share" |
| 5 | What it is | Creates and manages resources through APIs of cloud platforms and other services | 1 | PASS | S1: "creates and manages resources on cloud platforms and other services through their application programming interfaces (APIs)" |
| 6 | What it is | Core workflow: write, plan, apply | 1 | PASS | S1: "The core Terraform workflow consists of three stages:" then "Write:", "Plan:", "Apply:" |
| 7 | What it is | Plan describes what Terraform will create, update, or destroy | 1 | PASS | S1: "describing the infrastructure it will create, update, or destroy" |
| 8 | What it is | Apply performs operations after approval, in correct order | 1 | PASS | S1: "On approval, Terraform performs the proposed operations in the correct order" |
| 9 | What it is | Packer: community tool for identical machine images for many platforms from one source configuration | 30 | PASS | S30: "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." |
| 10 | What it is | Machine image = single static unit with pre-configured OS and software | 30 | PASS | S30: "A machine image is a single static unit that contains a pre-configured operating system and installed software" |
| 11 | What it is | Packer does not replace Chef or Puppet | 30 | PASS | S30: "Packer does not replace configuration management like Chef or Puppet." |
| 12 | What it is | Crossplane is a control plane framework for platform engineering | 43 | PASS | S43: "Crossplane is a control plane framework for platform engineering." |
| 13 | What it is | Lets you build control planes for cloud native software | 43 | PASS | S43: "Crossplane lets you build control planes to manage your cloud native software." |
| 14 | What it is | A control plane is software that controls other software | 43 | PASS | S43: "A control plane is software that controls other software." |
| 15 | How it works | Language declares resources (infrastructure objects) | 2 | PASS | S2: "The main purpose of the Terraform language is declaring" |
| 16 | How it works | Blocks are containers; arguments assign value to name; expressions represent a value | 2 | PASS | S2: "Blocks are containers for other content"; "Arguments assign a value to a name."; "Expressions represent a value, either literally or by referencing and combining" |
| 17 | How it works | Language is declarative | 2 | PASS | S2: "The Terraform language is declarative, describing an intended goal rather than" |
| 18 | How it works | Resource block defines a piece of infrastructure; arguments set by provider | 3 | PASS | S3: "The resource block defines a piece of infrastructure ... The arguments that an individual resource supports are determined by the provider." |
| 19 | How it works | Variable block is like a function argument | 7 | PASS | S7: "The variable block is similar to a function argument in other programming languages." |
| 20 | How it works | A validation block can refuse a value | 7 | PASS | S7: "The validation block lets you enforce that a variable value meets your specific requirements"; "stops the current operation" |
| 21 | How it works | Output block exposes information; use: pass info to an automation tool | 8 | PASS | S8: "The output block lets you expose information about your infrastructure."; "Passing information from a Terraform operation to an automation tool." |
| 22 | How it works | Locals block is like function-scoped variables | 9 | PASS | S9: "The locals block is similar to function-scoped variables in other programming languages." |
| 23 | How it works | Data block fetches data from provider without provisioning an object | 10 | PASS | S10: "fetches data about a resource from the provider without provisioning an associated infrastructure object" |
| 24 | How it works | Providers are plugins to interact with clouds, SaaS, APIs | 4 | PASS | S4: "Terraform relies on plugins called providers to interact with cloud providers," |
| 25 | How it works | Every resource type is implemented by a provider | 4 | PASS | S4: "Every resource type is implemented by a provider" |
| 26 | How it works | Providers are distributed separately, each with own version numbers | 4 | PASS | S4: "Providers are distributed separately from Terraform itself, and each provider" ; "have their own version numbers" |
| 27 | How it works | required_providers block declares providers | 5 | PASS | S5: "Define the provider's source, local name, and version in the required_providers block" |
| 28 | How it works | terraform init locally installs a provider and updates lock file | 5 | PASS | S5: "Running terraform init locally installs a provider and updates the Dependency lock file" |
| 29 | How it works | Lock file always named .terraform.lock.hcl; include in VCS | 6 | PASS | S6: "The lock file is always named .terraform.lock.hcl"; "include this file in your version control repository" |
| 30 | How it works | In production HashiCorp recommends constraining provider versions | 4 | PASS | S4: "In production we recommend constraining the acceptable provider versions" |
| 31 | How it works | init initializes a working directory | 18 | PASS | S18: "The terraform init command initializes a working directory containing Terraform configuration files." |
| 32 | How it works | First command after writing or cloning a configuration | 18 | PASS | S18: "This is the first command you should run after writing a new Terraform configuration or cloning an existing configuration from version control." |
| 33 | How it works | Safe to run multiple times | 18 | PASS | S18: "It is safe to run this command multiple times." |
| 34 | How it works | fmt formats to canonical format and style | 20 | PASS | S20: "formats Terraform configuration file contents so that it matches the canonical format and style" |
| 35 | How it works | validate checks syntactically valid and internally consistent | 19 | PASS | S19: "valid and internally consistent"; S28: "checks that your configuration is syntactically valid and internally consistent" |
| 36 | How it works | validate does not validate remote services; needs initialized dir | 19 | PASS | S19: "It does not validate remote services, such as remote state or provider APIs."; "Validation requires an initialized working directory" |
| 37 | How it works | Style guide: run fmt and validate before committing | 28 | PASS | S28: "Run terraform fmt and terraform validate before committing your code to version control." |
| 38 | How it works | plan creates an execution plan to preview changes | 21 | PASS | S21: "creates an execution plan, which lets you preview the changes that Terraform plans to make" |
| 39 | How it works | By default reads state of remote objects; compares to prior state; proposes change actions | 21 | PASS | S21: "Reads the current state of any already-existing remote objects"; "Compares the current configuration to the prior state"; "Proposes a set of change actions that should, if applied, make the remote objects match the configuration." |
| 40 | How it works | Without -out, creates a speculative plan | 21 | PASS | S21: "If you run terraform plan without the -out=FILE option then it will create a speculative plan" |
| 41 | How it works | Always re-check final non-speculative plan before applying | 21 | PASS | S21: "you should always re-check the final non-speculative plan before applying" |
| 42 | How it works | -detailed-exitcode returns detailed exit code | 21 | PASS | S21: "-detailed-exitcode - Returns a detailed exit code when the command exits." |
| 43 | How it works | apply executes a plan; without saved plan it plans and prompts; with saved plan no prompt | 22 | PASS | S22: "executes the operations proposed in a Terraform"; "without passing a saved plan file, Terraform automatically creates a new execution plan ... prompts you to approve"; "Terraform performs the operations in the saved plan without prompting you" |
| 44 | How it works | destroy deprovisions all objects the configuration manages | 23 | PASS | S23: "The terraform destroy command deprovisions all objects managed by a Terraform configuration." |
| 45 | How it works | Terraform must store state; maps real resources to configuration | 11 | PASS | S11: "Terraform must store state about your workspace's managed infrastructure and configuration. Terraform uses your workspace's state to map real world resources to your configuration" |
| 46 | How it works | Refresh before any operation | 11 | PASS | S11: "Prior to any operation, Terraform does a refresh to update the state with the real infrastructure." |
| 47 | How it works | Default local file terraform.tfstate | 11 | PASS | S11: "By default, Terraform stores each workspace's state in a local file named terraform.tfstate" |
| 48 | How it works | JSON text file; do not edit directly | 11 | PASS | S11: "Terraform stores your workspaces state as a JSON text file. Do not directly edit this file." |
| 49 | How it works | Remote state writes to a remote store the team shares | 12 | PASS | S12: "With remote state, Terraform writes the state data to a remote data store, which can then be shared between all members of a team." |
| 50 | How it works | Locks state if backend supports it, for write operations | 13 | PASS | S13: "If supported by your backend, Terraform will lock your"; "State locking happens automatically on all operations that could write state." |
| 51 | How it works | Lock prevents corruption; failed lock stops Terraform | 13 | PASS | S13: "others from acquiring the lock and potentially corrupting your state"; "If state locking fails, Terraform does not continue." |
| 52 | How it works | State and plan files can hold secrets | 14 | PASS | S14: "Terraform state and plan files contain detailed information about your infrastructure, including resource attributes and metadata that can contain sensitive values" |
| 53 | How it works | Local state is plaintext; treat as sensitive, keep out of Git | 14 | PASS | S14: "Terraform stores your state in a plaintext file"; "Treat your state file as sensitive data by excluding it from Git workflows" |
| 54 | How it works | Avoid state in VCS without locking and access control | 11 | PASS | S11: "Avoid storing your state in a version control system or other storage solution that does not support Terraform state locking and secure access control" |
| 55 | How it works | Module = collection of resources managed together | 15 | PASS | S15: "A module is a collection of resources that Terraform manages together." |
| 56 | How it works | Root directory configuration is root module; module blocks call child modules | 15 | PASS | S15: "Terraform refers to this configuration as the root module."; "Modules you configure using module blocks are called child modules." |
| 57 | How it works | for_each manages several similar objects; accepts map or set of strings | 17 | PASS | S17: "manage several similar objects ... without writing a separate block for each object"; "accepts a map or a set of strings" |
| 58 | How it works | Default replace: destroy then create; create_before_destroy reverses | 16 | PASS | S16: "Terraform destroys the existing object and then creates a new replacement object"; "create a replacement resource before destroying the current resource" |
| 59 | How it works | prevent_destroy true rejects destroying plans; not if config removed | 16 | PASS | S16: "Terraform rejects plans that would destroy the infrastructure object"; "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration." |
| 60 | How it works | ignore_changes lists attributes to ignore when planning updates | 16 | PASS | S16: "the ignore_changes meta-argument specifies resource attributes that Terraform should ignore when planning updates" |
| 61 | How it works | show gives human-readable output from state or plan file | 24 | PASS | S24: "The terraform show command provides human-readable output" |
| 62 | How it works | Apply page: inspect saved plan with show before applying | 22 | PASS | S22: "Use terraform show to inspect a saved plan file before applying it." |
| 63 | How it works | -json gives machine-readable output; plan JSON holds plan, config, state | 24 | PASS | S24: "Add the -json command-line flag to generate machine-readable output."; "a JSON representation of the plan, configuration, and current state" |
| 64 | How it works | With -json sensitive state values shown in plain text | 24 | PASS | S24: "any sensitive values in Terraform state will be displayed in plain text" |
| 65 | How it works | Machine-readable JSON of plan changes; use terraform show -json | 25 | PASS | S25: "Terraform can output a machine-readable JSON representation of a plan file's changes."; "Use terraform show -json <FILE>" |
| 66 | How it works | Tests validate module updates do not break; short-lived resources | 26 | PASS | S26: "Terraform tests let authors validate that module configuration updates do not introduce breaking changes. Tests run against test-specific, short-lived resources" |
| 67 | How it works | Test file extensions; run blocks; assert blocks | 26 | PASS | S26: "based on their file extension: .tftest.hcl or .tftest.json"; "One to many run blocks."; "Optional assert blocks." |
| 68 | How it works | Default run block applies and creates real infra; command = plan creates none | 26 | PASS | S26: "By default, each run block executes with command = apply"; "command = plan instructs Terraform to not create new infrastructure for this run block" |
| 69 | How it works | expect_failures lists objects that should fail custom conditions | 26 | PASS | S26: "can provide a list of checkable objects ... that should fail their custom conditions" |
| 70 | How it works | v1.7.0 added mock provider data | 26 | PASS | S26: "Terraform v1.7.0 introduced the ability to mock data returned by the providers" |
| 71 | How it works | test searches current and testing directory; default dir tests | 27 | PASS | S27: "searches the current directory and the specified testing directory"; "By default, the directory containing test files is named tests." |
| 72 | How it works | Each test file keeps state in memory, separate | 27 | PASS | S27: "will maintain all Terraform state it requires within memory"; "entirely separate from any existing state" |
| 73 | How it works | After a test file runs, Terraform tries to destroy leftovers | 27 | PASS | S27: "Terraform attempts to destroy any remaining infrastructure." |
| 74 | How it works | test can create real infrastructure that can cost money | 27 | PASS | S27: "can create real infrastructure than can cost you money" |
| 75 | How it works | -json and -junit-xml options | 27 | PASS | S27: "-json - Displays machine-readable JSON output"; "-junit-xml=... Saves a test report in JUnit XML format" |
| 76 | How it works | Packer reads HCL template files | 32 | PASS | S32: "Packer reads and applies configurations defined in HCL template files." |
| 77 | How it works | Directory: parses files ending .pkr.hcl or .pkr.json | 32 | PASS | S32: "folder with a name ending with .pkr.hcl or .pkr.json will be parsed" |
| 78 | How it works | Template defines builds; build, builder, provisioner, post-processor, artifact definitions | 31 | PASS | S31: "Templates are files that define one or more builds"; "Builds are a single task that eventually produces an artifact for a single platform"; "Builders ... create a machine image for a single platform"; "Provisioners ... prior to that machine being turned into a static artifact"; "Post-processors ... create a new artifact"; "Artifacts are the results of a single build" |
| 79 | How it works | source block defines reusable builder configuration | 33 | PASS | S33: "The source block defines reusable builder configuration blocks." |
| 80 | How it works | build block: which builders, how to provision, post-processing | 34 | PASS | S34: "specifies which builders Packer should run, how to provision them, and any post-processing actions" |
| 81 | How it works | provisioner block defines how to configure a provisioner | 35 | PASS | S35: "The provisioner block defines how to configure a provisioner." |
| 82 | How it works | post-processor block defines how to configure a post-processor | 36 | PASS | S36: "The post-processor block defines how a post-processor is configured." |
| 83 | How it works | packer init downloads plugins listed in required_plugins | 37 | PASS | S37: "download and install plugins according to the required_plugins block" |
| 84 | How it works | packer validate checks syntax and configuration; exit statuses | 39 | PASS | S39: "validate the syntax and"; "return a zero exit status on success, and a non-zero exit status on failure." |
| 85 | How it works | packer build runs all builds; parallel unless otherwise | 38 | PASS | S38: "runs all the builds within it"; "executed in parallel, unless otherwise specified" |
| 86 | How it works | shell provisioner runs shell scripts on the machine Packer builds | 40 | PASS | S40: "The shell Packer provisioner runs shell scripts on the machine Packer builds." |
| 87 | How it works | docker builder builds images; starts container, runs provisioners, exports or commits | 41 | PASS | S41: "builds Docker images using Docker. The builder starts a Docker container, runs provisioners within this container, then exports the container for reuse or commits the image." |
| 88 | How it works | No Dockerfile; needs Docker Engine | 41 | PASS | S41: "Packer builds Docker containers without the use of Dockerfiles."; "must run on a machine that has Docker Engine installed." |
| 89 | How it works | commit true commits instead of exporting; pull defaults to true | 41 | PASS | S41: "If true, the container will be committed to an image rather than exported."; "This defaults to true if not set." |
| 90 | How it works | docker-tag tags a committed docker artifact into a repository | 42 | PASS | S42: "builder that was committed and tags it into a" |
| 91 | How it works | Control planes expose API; desired state; correct drift | 43 | PASS | S43: "Control planes expose an API."; "this is your desired state"; "the control plane automatically corrects the drift" |
| 92 | How it works | Built on Kubernetes; four components | 43 | PASS | S43: "It's built on Kubernetes"; "Crossplane has four major components:" Composition, Managed resources, Operations, Package manager |
| 93 | How it works | Composition builds custom APIs; pipeline of functions instead of controller; functions return declarative config | 43 | PASS | S43: "Composition lets you build custom APIs"; "you configure a pipeline of functions. The functions return declarative configuration that Crossplane should apply." |
| 94 | How it works | XRD defines schema for custom API; users create XRs with it | 44 | PASS | S44: "Composite resource definitions (XRDs) define the schema for a custom API. Users create composite resources (XRs) using the API schema defined by an XRD." |
| 95 | How it works | Composition is a template for several Kubernetes resources as one XR | 45 | PASS | S45: "Compositions are a template for creating multiple Kubernetes resources as a single composite resource." |
| 96 | How it works | Composite resource = set of Kubernetes resources as one object | 46 | PASS | S46: "represents a set of Kubernetes resources as a single Kubernetes object" |
| 97 | How it works | Providers enable provisioning on external service | 47 | PASS | S47: "Providers enable Crossplane to provision infrastructure on an" |
| 98 | How it works | Managed resource represents external service in a provider | 49 | PASS | S49: "represents an external service in a Provider." |
| 99 | How it works | Functions extend Crossplane with new ways to configure composition | 48 | PASS | S48: "Functions extend Crossplane with new ways to configure" |
| 100 | How it works | Docs tutorial creates App turned into Deployment and Service | 50 | PASS | S50: "When a user calls the custom resource API to create an App, Crossplane creates a Deployment and a Service." |
| 101 | How it works | CLI is single standalone binary; most commands independent of Kubernetes | 51 | PASS | S51: "single standalone binary with no external dependencies"; "Most Crossplane CLI commands are independent of Kubernetes" |
| 102 | How it works | composition render shows resources a composition would create or change; Docker by default | 52 | PASS | S52: "shows you what resources a Composition would create or mutate"; "By default, the render command pulls and runs Composition Functions using Docker." |
| 103 | How it works | resource validate checks against XRD/CRD/provider/function/configuration schemas; unknown fields; beta | 52 | PASS | S52: "against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)"; "unknown-field detection"; "[BETA] Validate Crossplane resources." |
| 104 | Try it | Run record: date, versions, HOME, env, network, tools, images, file names | – | N/A | The page's own practice-run record. |
| 105 | Try it | Four manifest files come from "Get started with composition" | 50 | PASS | S50 has the composition, function (function-patch-and-transform:v0.8.2) and XRD (apps.example.crossplane.io) manifests. |
| 106 | Try it | Install: Terraform 1.17.2 and Packer 1.16.2 latest; both list package manager and binary download | 55, 56 | PASS | S55: "1.17.2 (latest)", "Package manager", "Binary download"; S56: "1.16.2 (latest)" |
| 107 | Try it | Binary can hide malicious code; verify HashiCorp created and signed it | 54 | PASS | S54: "running an executable that includes malicious code. You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 108 | Try it | HashiCorp signs checksums with public PGP key; page gives fingerprint | 54 | PASS | S54: "uses a public PGP key to sign certain files, including the checksums for its product archives"; "Primary key fingerprint: C874 011F 0AB4 0511 0D02 1055 3436 5D94 72D7 468F" |
| 109 | Try it | The tutorial's three checks, hash prefixes, install times | – | N/A | The page's own run record. |
| 110 | Try it | Crossplane CLI standalone binary; some commands (composition render) need Docker-compatible runtime | 51 | PASS | S51: "Some commands, such as crossplane composition render and crossplane project build, do require a Docker compatible container runtime." |
| 111 | Try it | Manual download; move to a folder in PATH, e.g. /usr/local/bin | 51 | PASS | S51: "manually download a binary"; "Move the binary to a location in your $PATH, for example /usr/local/bin." |
| 112 | Try it | .sha256 check, no signature, so shows download is whole | – | N/A | The page's own run record and conclusion. |
| 113 | Try it | main.tf: terraform block names provider in required_providers | 5 | PASS | S5: "Define the provider's source, local name, and version in the required_providers block" |
| 114 | Try it | A variable block is like a function argument | 7 | PASS | S7: "similar to a function argument in other programming languages" |
| 115 | Try it | validation block of env_name refuses capital letters | – | N/A | Describes the tutorial's own file. |
| 116 | Try it | locals block holds the settings text | 9 | PASS | S9: "Use the locals block to define values and reuse them within a Terraform module." |
| 117 | Try it | local_file generates a local file with content | 29 | PASS | S29: "Generates a local file with the given content." |
| 118 | Try it | output block exposes path | 8 | PASS | S8: "The output block lets you expose information about your infrastructure." |
| 119 | Try it | Step 1 commands and code block | 5, 18, 19, 20 | PASS | Commands and flags (init -no-color, fmt -check -diff, validate -no-color, .terraform.lock.hcl) match S18, S19, S20, S6 (`.terraform.lock.hcl`). Version values are the tutorial's own choice, as page says. |
| 120 | Try it | init installed provider and created .terraform.lock.hcl | 5 | PASS | S5: "installs a provider and updates the Dependency lock file". The word "created" is the run record. |
| 121 | Try it | Lock file is how Terraform remembers version choice | 6 | PASS | S6: "after selecting a specific version of each dependency Terraform remembers" |
| 122 | Try it | List holds checksums for your platform and others | 6 | PASS | S6: "The lock file will therefore include checksums for both the package you installed for" |
| 123 | Try it | Later init errors if no recorded checksum matches | 6 | PASS | S6: "returning an error if none of the checksums match" |
| 124 | Try it | fmt -check exit 0 if formatted, non-zero otherwise, with file names | 20 | PASS | S20: "The exit status is 0 if the command's input is properly formatted. Otherwise, the exit status is non-zero, and the command outputs a list of improperly formatted file names." |
| 125 | Try it | validate checks syntactically valid and internally consistent | 19 | PASS | S19: "valid and internally consistent" |
| 126 | Try it | Step 2: file_permission 0777 is provider default | 29 | PASS | S29: "Default value is `"0777"`." |
| 127 | Try it | -detailed-exitcode 2 means success with changes | 21 | PASS | S21: "2 = Succeeded with non-empty diff (changes present)" |
| 128 | Try it | Python reads plan JSON, prints address and actions of resource_changes | 25 | PASS | S25: `"resource_changes"` with `"actions"` per change. |
| 129 | Try it | Valid actions: no-op, create, read, update, delete, two replace pairs | 25 | PASS | S25: "Valid actions values are:" "no-op", "create", "read", "update", "delete", "delete, create", "create, delete" |
| 130 | Try it | apply with saved plan did not ask approval | 22 | PASS | S22: "performs the operations in the saved plan without prompting you for confirmation" |
| 131 | Try it | Second plan exit 0 means success with no changes | 21 | PASS | S21: "0 = Succeeded with empty diff (no changes)" |
| 132 | Try it | Step 3: refresh before any operation | 11 | PASS | S11: "Prior to any operation, Terraform does a refresh" |
| 133 | Try it | -auto-approve: make sure no one changes infrastructure outside workflow | 22 | PASS | S22: "If you use -auto-approve, we recommend making sure that no one can change your infrastructure outside of your Terraform workflow." |
| 134 | Try it | Validations checked during plan; stops operation when false | 7 | PASS | S7: "Terraform evaluates variable validations while it creates a plan, and if a validation block's condition expression evaluates to false, then Terraform throws an error, displays the error_message, and stops the current operation." |
| 135 | Try it | Exit status 1 means error | 21 | PASS | S21: "1 = Error" |
| 136 | Try it | Step 4: state list lists resources in a state | 57 | PASS | S57: "The terraform state list command lists resources within a" |
| 137 | Try it | Default terraform.tfstate and backup terraform.tfstate.backup | 11 | PASS | S11: "local file named terraform.tfstate, and a backup of the previous state in terraform.tfstate.backup" |
| 138 | Try it | Local state is plaintext with secret values | 14 | PASS | S14: "plaintext file, which includes any secret values you defined in your configuration" |
| 139 | Try it | local_sensitive_file for sensitive content | 29 | PASS | S29: "If the file content is sensitive, use the `local_sensitive_file` resource instead." |
| 140 | Try it | Step 5: default test dir tests; run blocks | 27, 26 | PASS | S27: "By default, the directory containing test files is named tests."; S26: "One to many run blocks." |
| 141 | Try it | command = plan creates no infrastructure; expect_failures lists variable that should fail custom condition | 26 | PASS | S26: "command = plan instructs Terraform to not create new infrastructure"; "(... input variables ...) that should fail their custom conditions" |
| 142 | Try it | Default run applies; tests create real infra by default | 26 | PASS | S26: "By default, tests within Terraform create real infrastructure" |
| 143 | Try it | After a test file runs, Terraform tries to destroy leftovers | 27 | PASS | S27: "Terraform attempts to destroy any remaining infrastructure." |
| 144 | Try it | Test file keeps own state | 27 | PASS | S27: "This state is entirely separate from any existing state for the configuration under test" |
| 145 | Try it | -filter limits run to given test file | 27 | PASS | S27: "-filter=testfile - Limits the terraform test operation to the specified test files." |
| 146 | Try it | Step 6: destroy deprovisions all managed objects | 23 | PASS | S23: "deprovisions all objects managed by a Terraform configuration" |
| 147 | Try it | Step 7: packer block lists Docker plugin in required_plugins | 37 | PASS | S37: "plugins according to the required_plugins block in Packer templates" |
| 148 | Try it | source block holds builder; commit = true; pull = false | 33, 41 | PASS | S33: "defines reusable builder configuration blocks"; S41: "committed to an image rather than exported"; "Otherwise, it is assumed the image already exists and can be used." |
| 149 | Try it | provisioner block defines how to configure a provisioner | 35 | PASS | S35: "The provisioner block defines how to configure a provisioner." |
| 150 | Try it | docker-tag takes committed docker artifact and tags into repository | 42 | PASS | S42: "builder that was committed and tags it into a" |
| 151 | Try it | packer init installed the docker plugin | 37 | PASS | S37: "download and install plugins according to the required_plugins block" |
| 152 | Try it | packer fmt formats HCL2 to canonical; -check exit 0 only if all formatted | 53 | PASS | S53: "format HCL2 configuration files to a canonical format and style"; "Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| 153 | Try it | packer validate returns zero on success | 39 | PASS | S39: "return a zero exit status on success" |
| 154 | Try it | packer build started container from alpine, ran provisioner, committed, and tagged image packer-practice-qa-base:1.0 | 41 | FAIL | S41 covers the container, provisioners and commit. It says nothing about tagging an image with `docker-tag`; that is in S42. Fix: cite S42 for the tag step, or drop "tagged the image ..." from this sentence. |
| 155 | Try it | No Dockerfile used | 41 | PASS | S41: "Packer builds Docker containers without the use of Dockerfiles." |
| 156 | Try it | Step 8: composition manifests (pipeline, function, replicas 2, port 8080, patch spec.image) | 50 | PASS | S50: "crossplane-contrib-function-patch-and-transform", "replicas: 2", "port: 8080", "fromFieldPath: spec.image" |
| 157 | Try it | A composition is a template for several Kubernetes resources as one XR | 45 | PASS | S45: "a template for creating multiple Kubernetes resources as a single composite resource" |
| 158 | Try it | version --client prints client version, needs no server | 52 | PASS | S52: "--client If true, shows client version only (no server required)." |
| 159 | Try it | composition render needs Docker-compatible runtime | 51 | PASS | S51: "do require a Docker compatible container runtime" |
| 160 | Try it | render by default pulls and runs functions with Docker | 52 | PASS | S52: "By default, the render command pulls and runs Composition Functions using Docker." |
| 161 | Try it | render shows resources composition would create or change | 52 | PASS | S52: "shows you what resources a Composition would create or mutate" |
| 162 | Try it | Step 9: XRD defines schema of custom API | 44 | PASS | S44: "define the schema for a custom API" |
| 163 | Try it | resource validate checks schemas of XRDs, CRDs, providers, functions, configurations | 52 | PASS | S52: "against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)" |
| 164 | Try it | Command detects unknown fields | 52 | PASS | S52: "unknown-field detection" |
| 165 | Try it | Docs mark resource validate as beta | 52 | PASS | S52: "[BETA] Validate Crossplane resources." |
| 166 | Try it | Outputs, exit statuses, "No page that the tutorial read says why" | – | N/A | The page's own run record. |
| 167 | How a tester uses it | fmt -check exit status; packer fmt -check same | 20, 53 | PASS | S20: "The exit status is 0 if ... properly formatted. Otherwise, ... non-zero"; S53: "Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| 168 | How a tester uses it | packer validate non-zero on failure | 39 | PASS | S39: "a non-zero exit status on failure" |
| 169 | How a tester uses it | plan -detailed-exitcode: 0 no changes, 1 error, 2 changes | 21 | PASS | S21: "0 = Succeeded with empty diff (no changes) 1 = Error 2 = Succeeded with non-empty diff (changes present)" |
| 170 | How a tester uses it | Style guide: fmt and validate before commit | 28 | PASS | S28: "Run terraform fmt and terraform validate before committing your code to version control." |
| 171 | How a tester uses it | show -json shows JSON of plan file | 24 | PASS | S24: "For Terraform plan files, terraform show -json shows a JSON representation of the plan" |
| 172 | How a tester uses it | resource_changes items have actions; replacement is two actions; scan for delete | 25 | PASS | S25: "Valid actions values are:" ... "delete", "delete, create", "create, delete"; "The two "replace" actions are represented in this way". The list is complete, so scanning for `delete` is a valid use. |
| 173 | How a tester uses it | command = plan creates no infra | 26 | PASS | S26: "command = plan instructs Terraform to not create new infrastructure" |
| 174 | How a tester uses it | Applying run block creates real infra that can cost money | 27 | PASS | S27: "can create real infrastructure than can cost you money" |
| 175 | How a tester uses it | Test file keeps separate state | 27 | PASS | S27: "entirely separate from any existing state" |
| 176 | How a tester uses it | v1.7.0 mock; -junit-xml | 26, 27 | PASS | S26: "Terraform v1.7.0 introduced the ability to mock data"; S27: "-junit-xml ... Saves a test report in JUnit XML format" |
| 177 | How a tester uses it | packer validate checks template; build result is an artifact | 39, 31 | PASS | S39: "validate the syntax and"; S31: "Artifacts are the results of a single build" |
| 178 | How a tester uses it | resource validate checks schemas, detects unknown fields; render runs locally | 52 | PASS | S52: "unknown-field detection"; "by running the composition locally and printing its results" |
| 179 | How a tester uses it | State and plan files can hold sensitive values (passwords, API tokens); show -json plain text; so may contain a secret | 14, 24 | PASS | S14: "sensitive values, such as initial database passwords or API tokens"; S24: "displayed in plain text". The last sentence follows from these two. |
| 180 | How a tester uses it | Tests use short-lived resources; destroy; prevent_destroy blocks destroy | 26, 23, 16 | PASS | S26: "short-lived resources"; S23: "deprovisions all objects"; S16: "prevents the terraform destroy command from operating once such objects are created" |
| 181 | How a tester uses it | Verify what you download | 54 | PASS | S54: "verifying that HashiCorp created and signed the binary before you run it" |
| 182 | Common mistakes | State in VCS; edit state by hand | 11 | PASS | S11: "Avoid storing your state in a version control system"; "Do not directly edit this file." |
| 183 | Common mistakes | Backend that cannot lock; lock failure stops | 13 | PASS | S13: "If supported by your backend, Terraform will lock your"; "If state locking fails, Terraform does not continue." |
| 184 | Common mistakes | Lock file in VCS for code review | 6 | PASS | S6: "include this file in your version control repository so that you can discuss potential changes to your external dependencies via code review" |
| 185 | Common mistakes | Constrain provider versions in production | 4 | PASS | S4: "In production we recommend constraining the acceptable provider versions" |
| 186 | Common mistakes | Re-check final plan | 21 | PASS | S21: "you should always re-check the final non-speculative plan before applying to make sure that it still matches your intent" |
| 187 | Common mistakes | -auto-approve: nobody can change infrastructure outside workflow; reduces unpredictable changes and drift | 22 | PASS | S22: "This minimizes the risk of unpredictable changes and configuration drift." |
| 188 | Common mistakes | prevent_destroy does not stop destroy on config removal; use sparingly | 16 | PASS | S16: "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration."; "Use prevent_destroy sparingly." |
| 189 | Common mistakes | validate does not check remote services; needs init | 19 | PASS | S19: "It does not validate remote services, such as remote state or provider APIs."; "Validation requires an initialized working directory" |
| 190 | Common mistakes | local_file: use local_sensitive_file; noise in CI | 29 | PASS | S29: "use the `local_sensitive_file` resource instead"; "will detect the resource as having been deleted each time a configuration is applied on a new machine where the file is not present and will generate a diff to re-create it" |
| 191 | Common mistakes | terraform test can create real infra costing money | 27 | PASS | S27: "can create real infrastructure than can cost you money" |
| 192 | Common mistakes | Packer does not replace config management | 30 | PASS | S30: "Packer does not replace configuration management like Chef or Puppet." |
| 193 | Common mistakes | pull defaults to true | 41 | PASS | S41: "This defaults to true if not set." The next sentence is the tutorial's own template. |
| 194 | Common mistakes | render exit 0 on typo (run record); docs say validate detects unknown fields | 52 | PASS | S52: "unknown-field detection". The run part is the page's own record. |
| 195 | Common mistakes | Verify binary signed by HashiCorp | 54 | PASS | S54: "You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 196 | What a tester can check | Callout "Tutorial advice": 12 advice items | – | PASS | Titled "Tutorial advice"; it says "This list is the tutorial's own advice". No tool fact beyond the rest of the page (exit codes, -detailed-exitcode, expect_failures, lock file, resource validate). |
| 197 | Key words | Infrastructure as code | – | PASS | Technical panel: "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently" |
| 198 | Key words | Provider | – | PASS | Technical panel: "Terraform relies on plugins called providers to interact with cloud providers, SaaS providers, and other APIs" |
| 199 | Key words | Resource | – | PASS | Technical panel: "The resource block defines a piece of infrastructure" |
| 200 | Key words | Variable | – | PASS | Technical panel: "The variable block is similar to a function argument in other programming languages" |
| 201 | Key words | Output | – | PASS | Technical panel: "The output block lets you expose information about your infrastructure" |
| 202 | Key words | Plan | – | PASS | Technical panel: "The terraform plan command creates an execution plan, which lets you preview the changes that Terraform plans to make" |
| 203 | Key words | Speculative plan | – | PASS | Technical panel: "Without the -out option, it creates a speculative plan" |
| 204 | Key words | Apply | – | PASS | Technical panel: "The terraform apply command executes the operations of a plan" |
| 205 | Key words | State | – | PASS | Technical panel: "Terraform must store state about your workspace's managed infrastructure and configuration" |
| 206 | Key words | Remote state | – | PASS | Technical panel: "With remote state, Terraform writes the state data to a remote data store that a whole team can share" |
| 207 | Key words | Dependency lock file | – | PASS | Technical panel: "The lock file is always named .terraform.lock.hcl" |
| 208 | Key words | Module | – | PASS | Technical panel: "A module is a collection of resources that Terraform manages together" |
| 209 | Key words | Terraform test | – | PASS | Technical panel: "Terraform tests let authors validate that module configuration updates do not introduce breaking changes" |
| 210 | Key words | Machine image | – | PASS | Technical panel: "A machine image is a single static unit that contains a pre-configured operating system and installed software" |
| 211 | Key words | Template | – | PASS | Technical panel: "A template defines one or more builds" |
| 212 | Key words | Builder | – | PASS | Technical panel: "A builder creates a machine image for a single platform" |
| 213 | Key words | Provisioner | – | PASS | Technical panel: "Provisioners install and configure software in a running machine before it becomes a static artifact" |
| 214 | Key words | Post-processor | – | PASS | Technical panel: "A post-processor takes the result of a builder or another post-processor and creates a new artifact" |
| 215 | Key words | Artifact | – | PASS | Technical panel: "An artifact is the result of a single build" |
| 216 | Key words | Control plane | – | PASS | Technical panel: "A control plane is software that controls other software" |
| 217 | Key words | Drift | – | PASS | Technical panel: "If the software drifts from the desired state, the control plane corrects the drift" |
| 218 | Key words | XRD | – | PASS | Technical panel: "A composite resource definition (XRD) defines the schema for a custom API" |
| 219 | Key words | Composition | – | PASS | Technical panel: "A composition is a template for creating several Kubernetes resources as a single composite resource" |
| 220 | Key words | Composite resource (XR) | – | PASS | Technical panel: "A composite resource represents a set of Kubernetes resources as a single Kubernetes object" |
| 221 | Key words | Managed resource | – | PASS | Technical panel: "A managed resource represents an external service in a provider" |
| 222 | Key words | Function | – | PASS | Technical panel: "Functions extend Crossplane with new ways to configure composition" |
| 223 | Key words | Render | – | PASS | Technical panel: "The composition render command shows what resources a composition would create or change" |

Open FAILs after round 8: 1

Changed after this round: Row 154 (Try it): the sentence cited S41 for "tagged the image", but S41 does not cover the tag step. It now cites S41 for the build and the commit, and S42 (the Docker Tag post-processor) for the tag.

## Round 9 (2026-11-19)

# Fact check: devops / terraform-iac (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page overview: workflow, providers, state, tests, Packer, Crossplane, local practice run | none | N/A | Describes the page itself. |
| 2 | Lede | Three tools; practice run on own machine; no cloud account; order link | none | N/A | Describes the page; the `/devops/...` links are not facts. |
| 3 | What it is | Terraform is an IaC tool to build, change, version cloud and on-prem resources | S1 | PASS | "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 4 | What it is | Resources defined in human-readable files you can version, reuse, share | S1 | PASS | "...in human-readable configuration files that you can version, reuse, and share." |
| 5 | What it is | Terraform manages resources through APIs | S1 | PASS | "Terraform creates and manages resources on cloud platforms and other services through their application programming interfaces (APIs)." |
| 6 | What it is | Core workflow: write, plan, apply | S1 | PASS | "The core Terraform workflow consists of three stages:" then "Write:", "Plan:", "Apply:" |
| 7 | What it is | Plan stage describes what will be created, updated, destroyed | S1 | PASS | "...an execution plan describing the infrastructure it will create, update, or destroy..." |
| 8 | What it is | Apply performs operations after approval, in the correct order | S1 | PASS | "On approval, Terraform performs the proposed operations in the correct order" |
| 9 | What it is | Packer: community tool for identical images from one source config | S30 | PASS | "Packer is a community tool for creating identical machine images for multiple" |
| 10 | What it is | Machine image = static unit with pre-configured OS and software | S30 | PASS | "A machine image is a single static unit that contains a pre-configured" |
| 11 | What it is | Packer does not replace Chef or Puppet | S30 | PASS | "Packer does not replace configuration" (management like Chef or Puppet, next line) |
| 12 | What it is | Crossplane is a control plane framework for platform engineering | S43 | PASS | "Crossplane is a control plane framework for platform engineering." |
| 13 | What it is | Lets you build control planes for cloud native software | S43 | PASS | "Crossplane lets you build control planes to manage your cloud native software." |
| 14 | What it is | A control plane is software that controls other software | S43 | PASS | "A control plane is software that controls other software." |
| 15 | How it works | Language purpose: declaring resources | S2 | PASS | "The main purpose of the Terraform language is declaring" |
| 16 | How it works | Blocks are containers | S2 | PASS | "Blocks are containers for other content" |
| 17 | How it works | Arguments assign a value to a name | S2 | PASS | "Arguments assign a value to a name." |
| 18 | How it works | Expressions represent a value | S2 | PASS | "Expressions represent a value, either literally or by referencing and" |
| 19 | How it works | Language is declarative | S2 | PASS | "The Terraform language is declarative, describing an intended goal rather than" |
| 20 | How it works | Resource block defines infrastructure | S3 | PASS | "The resource block defines a piece of infrastructure" |
| 21 | How it works | Arguments determined by provider | S3 | PASS | "The arguments that an individual resource supports are determined by the provider." |
| 22 | How it works | Variable block like a function argument | S7 | PASS | "The variable block is similar to a function argument in other programming languages." |
| 23 | How it works | A validation block can refuse a value | S7 | PASS | "if a validation block's condition expression evaluates to false, then Terraform throws an error, displays the error_message, and stops the current operation." |
| 24 | How it works | Output block exposes information | S8 | PASS | "The output block lets you expose information about your infrastructure." |
| 25 | How it works | Output use: pass info to automation tool | S8 | PASS | "Passing information from a Terraform operation to an automation tool." |
| 26 | How it works | Locals like function-scoped variables | S9 | PASS | "The locals block is similar to function-scoped variables in other programming languages." |
| 27 | How it works | Data block fetches data without provisioning | S10 | PASS | "fetches data about a resource from the provider without provisioning an associated infrastructure object." |
| 28 | How it works | Providers are plugins | S4 | PASS | "Terraform relies on plugins called providers to interact with cloud providers," |
| 29 | How it works | Every resource type implemented by a provider | S4 | PASS | "Every resource type is implemented by a provider" |
| 30 | How it works | Distributed separately, own version numbers | S4 | PASS | "Providers are released separately from Terraform itself and have their own version numbers." |
| 31 | How it works | required_providers block declares providers | S5 | PASS | "Define the provider's source, local name, and version in the required_providers block" |
| 32 | How it works | init locally installs provider, updates lock file | S5 | PASS | "Running terraform init locally installs a provider and updates the Dependency lock file" |
| 33 | How it works | Lock file always named .terraform.lock.hcl | S6 | PASS | "The lock file is always named .terraform.lock.hcl" |
| 34 | How it works | Include it in version control | S6 | PASS | "include this file in your version control repository" |
| 35 | How it works | In production, constrain provider versions | S4 | PASS | "In production we recommend constraining the acceptable provider versions" |
| 36 | How it works | init initializes a working directory | S18 | PASS | "The terraform init command initializes a working directory containing Terraform configuration files." |
| 37 | How it works | First command after writing or cloning | S18 | PASS | "This is the first command you should run" (after writing a new configuration or cloning) |
| 38 | How it works | Safe to run many times | S18 | PASS | "It is safe to run this command multiple times." |
| 39 | How it works | fmt formats to canonical format | S20 | PASS | "formats Terraform configuration file contents so that it matches the canonical format and style." |
| 40 | How it works | validate: syntactically valid and internally consistent | S19 | PASS | "checks that your configuration is syntactically valid and internally consistent" (S28 line 187 has the same words; S19 also covers the claim) |
| 41 | How it works | validate does not validate remote services | S19 | PASS | "It does not validate remote services, such as remote state or provider APIs." |
| 42 | How it works | validate needs an initialized directory | S19 | PASS | "Validation requires an initialized working directory" |
| 43 | How it works | Style guide: run fmt and validate before commit | S28 | PASS | "Run terraform fmt and terraform validate before committing your code to version control." |
| 44 | How it works | plan creates an execution plan to preview changes | S21 | PASS | "creates an execution plan, which lets you preview the changes that Terraform plans to make" |
| 45 | How it works | By default reads current state of remote objects | S21 | PASS | "By default, Terraform performs the following operations when it creates a plan: Reads the current state of any already-existing remote objects" |
| 46 | How it works | Compares configuration to prior state | S21 | PASS | "Compares the current configuration to the prior state" |
| 47 | How it works | Proposes change actions | S21 | PASS | "Proposes a set of change actions that should, if applied, make the remote objects match the configuration." |
| 48 | How it works | Without -out, speculative plan | S21 | PASS | "without the -out=FILE option then it will create a speculative plan" |
| 49 | How it works | Always re-check final non-speculative plan | S21 | PASS | "you should always re-check the final non-speculative plan before applying" |
| 50 | How it works | -detailed-exitcode returns detailed exit code | S21 | PASS | "-detailed-exitcode - Returns a detailed exit code when the command exits." |
| 51 | How it works | apply executes plan operations | S22 | PASS | "The terraform apply command executes the operations proposed in a Terraform" plan |
| 52 | How it works | No saved plan: new plan and prompt | S22 | PASS | "without passing a saved plan file, Terraform automatically creates a new execution plan... prompts you to approve that plan" |
| 53 | How it works | Saved plan: no prompt | S22 | PASS | "When you pass a saved plan file to terraform apply, Terraform performs the operations in the saved plan without prompting you for confirmation." |
| 54 | How it works | destroy deprovisions all objects | S23 | PASS | "The terraform destroy command deprovisions all objects managed by a Terraform configuration." |
| 55 | How it works | Must store state | S11 | PASS | "Terraform must store state about your workspace's managed infrastructure and configuration." |
| 56 | How it works | Maps real world resources to config | S11 | PASS | "Terraform uses your workspace's state to map real world resources" |
| 57 | How it works | Refresh before any operation | S11 | PASS | "refresh to update the state with the real" (infrastructure; preceded by "Before any operation, Terraform does a") |
| 58 | How it works | Default local file terraform.tfstate | S11 | PASS | "By default, Terraform stores each workspace's state in a local file named terraform.tfstate" |
| 59 | How it works | JSON text file; do not edit | S11 | PASS | "Terraform stores your workspaces state as a JSON text file. Do not directly edit" |
| 60 | How it works | Remote state shared by team | S12 | PASS | "With remote state, Terraform writes the state data to a remote data store, which can then be shared between all members of a team." |
| 61 | How it works | Locks state if backend supports it | S13 | PASS | "If supported by your backend, Terraform will lock your state for all operations that could write state." |
| 62 | How it works | Lock prevents corruption | S13 | PASS | "This prevents others from acquiring the lock and potentially corrupting your state." |
| 63 | How it works | If locking fails, no continue | S13 | PASS | "If state locking fails, Terraform does not continue." |
| 64 | How it works | State and plan files can hold secrets | S14 | PASS | "Terraform state and plan files contain detailed information... that can contain sensitive values" |
| 65 | How it works | Local state is plaintext | S14 | PASS | "Terraform stores your state in a plaintext file, which includes any secret values you defined in your configuration." |
| 66 | How it works | Treat as sensitive; keep out of Git | S14 | PASS | "Treat your state file as sensitive data by excluding it from Git workflows" |
| 67 | How it works | Avoid VCS or storage without locking and access control | S11 | PASS | "Avoid storing your state in a version control system or other storage solution" (continues in the next lines) |
| 68 | How it works | Module = collection of resources | S15 | PASS | "A module is a collection of resources that Terraform manages together." |
| 69 | How it works | Root directory config is root module | S15 | PASS | "Terraform refers to this configuration as the root module." |
| 70 | How it works | module blocks give child modules | S15 | PASS | "Modules you configure using module blocks are called child modules." |
| 71 | How it works | for_each manages similar objects | S17 | PASS | "Use the for_each meta-argument to manage several similar objects... without writing a separate block for each object." |
| 72 | How it works | Accepts map or set of strings | S17 | PASS | "The for_each meta-argument accepts a map or a set of strings" |
| 73 | How it works | Default replace: destroy then create | S16 | PASS | "By default... Terraform destroys the existing object and then creates a new replacement object" |
| 74 | How it works | create_before_destroy reverses | S16 | PASS | "Use the create_before_destroy rule to instruct Terraform to create a replacement resource before destroying the current resource." |
| 75 | How it works | prevent_destroy rejects plans | S16 | PASS | "When prevent_destroy is set to true, Terraform rejects plans that would destroy the infrastructure object" |
| 76 | How it works | Does not stop when config removed | S16 | PASS | "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration." |
| 77 | How it works | ignore_changes lists attributes to ignore | S16 | PASS | "the ignore_changes meta-argument specifies resource attributes that Terraform should ignore when planning updates" |
| 78 | How it works | show: human-readable output from state or plan | S24 | PASS | "The terraform show command provides human-readable output" |
| 79 | How it works | Apply page: inspect saved plan with it | S22 | PASS | "Use terraform show to inspect a saved plan file before applying it." |
| 80 | How it works | -json gives machine-readable output | S24 | PASS | "Add the -json command-line flag to generate machine-readable output." |
| 81 | How it works | Plan JSON holds plan, config, current state | S24 | PASS | "shows a JSON representation of the plan, configuration, and current state." |
| 82 | How it works | With -json, sensitive state values in plain text | S24 | PASS | "any sensitive values in Terraform state will be displayed in plain text." |
| 83 | How it works | Machine-readable JSON of a plan file's changes | S25 | PASS | "Terraform can output a machine-readable JSON representation of a plan file's changes." |
| 84 | How it works | Use terraform show -json to produce it | S25 | PASS | "Use terraform show -json <FILE> to generate a JSON representation of a plan or state file." |
| 85 | How it works | Tests validate module updates do not break | S26 | PASS | "Terraform tests let authors validate that module configuration updates do not introduce breaking changes." |
| 86 | How it works | Test-specific short-lived resources | S26 | PASS | "Tests run against test-specific, short-lived resources" |
| 87 | How it works | Test files by extension | S26 | PASS | "Terraform discovers test files based on their file extension: .tftest.hcl or .tftest.json." |
| 88 | How it works | Test file has one or more run blocks | S26 | PASS | "One to many run blocks." |
| 89 | How it works | Run block can hold assert blocks | S26 | PASS | "assert / Optional assert blocks." |
| 90 | How it works | Default run applies, creating real infrastructure | S26 | PASS | "By default, tests within Terraform create real infrastructure" |
| 91 | How it works | command = plan creates none | S26 | PASS | "plan instructs Terraform to not create new infrastructure for this run block" |
| 92 | How it works | expect_failures lists objects that should fail | S26 | PASS | "expect_failures attribute can provide a list of checkable objects... that should fail their custom conditions." |
| 93 | How it works | v1.7.0 added mocking | S26 | PASS | "Terraform v1.7.0 introduced the ability to mock data returned by the providers" |
| 94 | How it works | test searches current and testing dir | S27 | PASS | "This command searches the current directory and the specified testing directory for Terraform testing files and executes the specified tests." |
| 95 | How it works | Default testing dir is tests | S27 | PASS | "The default testing directory is tests." |
| 96 | How it works | Each test file keeps state in memory, separate | S27 | PASS | "will maintain all Terraform state it requires within memory... entirely separate from any existing state for the configuration under test" |
| 97 | How it works | Tries to destroy leftovers | S27 | PASS | "Terraform attempts to destroy any remaining infrastructure." |
| 98 | How it works | Can create real infrastructure that costs money | S27 | PASS | "The Terraform test command can create real infrastructure than can cost you money." |
| 99 | How it works | -json and -junit-xml | S27 | PASS | "-json - Displays machine-readable JSON output" / "-junit-xml=... Saves a test report in JUnit XML format" |
| 100 | How it works | Packer reads HCL template files | S32 | PASS | "Packer reads and applies configurations defined in HCL template files." |
| 101 | How it works | Directory: .pkr.hcl or .pkr.json parsed | S32 | PASS | "folder with a name ending with .pkr.hcl or .pkr.json will be parsed" |
| 102 | How it works | Template defines builds | S31 | PASS | "Templates are files that define one or more builds" |
| 103 | How it works | Build = single task producing an artifact | S31 | PASS | "Builds are a single task that eventually produces an artifact for a single" platform |
| 104 | How it works | Builder creates an image for one platform | S31 | PASS | "for a single platform. Builders read in some configuration and use that to run and generate a machine image." |
| 105 | How it works | Provisioners configure a running machine | S31 | PASS | "Provisioners are components of Packer that install and configure software within a running machine prior to that machine being turned into a static" artifact |
| 106 | How it works | Post-processor takes result and creates new artifact | S31 | PASS | "builder or another post-processor and process that to create a new" artifact |
| 107 | How it works | Artifact is result of a single build | S31 | PASS | "Artifacts are the results of a single build" |
| 108 | How it works | source block: reusable builder config | S33 | PASS | "The source block defines reusable builder configuration blocks." |
| 109 | How it works | build block | S34 | PASS | "The build block specifies which builders Packer should run, how to provision them, and any post-processing actions" |
| 110 | How it works | provisioner block | S35 | PASS | "The provisioner block defines how to configure a provisioner." |
| 111 | How it works | post-processor block | S36 | PASS | "The post-processor block defines how a post-processor is configured." |
| 112 | How it works | packer init installs plugins from required_plugins | S37 | PASS | "download and install plugins according to the required_plugins block" |
| 113 | How it works | packer validate checks syntax and config | S39 | PASS | "used to validate the syntax and" (configuration of a template) |
| 114 | How it works | Zero on success, non-zero on failure | S39 | PASS | "return a zero exit status on success, and a non-zero exit status on failure." |
| 115 | How it works | packer build runs all builds | S38 | PASS | "takes a template and runs all the builds within it" |
| 116 | How it works | Parallel unless specified | S38 | PASS | "executed in parallel, unless otherwise specified." |
| 117 | How it works | shell provisioner | S40 | PASS | "The shell Packer provisioner runs shell scripts on the machine Packer builds." |
| 118 | How it works | docker builder builds images | S41 | PASS | "The docker Packer builder builds Docker images using" Docker |
| 119 | How it works | Starts container, provisions, exports or commits | S41 | PASS | "container, then exports the container for reuse or commits the image." |
| 120 | How it works | No Dockerfile | S41 | PASS | "By not using Dockerfiles, Packer is able to provision containers" |
| 121 | How it works | Needs Docker Engine | S41 | PASS | "The Docker builder must run on a machine that has Docker Engine installed." |
| 122 | How it works | commit true commits | S41 | PASS | "this one commits the container to an image" with "commit = true" |
| 123 | How it works | pull defaults to true | S41 | PASS | "pull (bool) - If true, the configured image will be pulled using docker pull... This defaults to true if not set." |
| 124 | How it works | docker-tag tags committed artifact | S42 | PASS | "builder that was committed and tags it into a repository." |
| 125 | How it works | Control planes expose an API | S43 | PASS | "Control planes expose an API." |
| 126 | How it works | API sets desired state | S43 | PASS | "You use the API to tell the control plane what software it should configure and how - this is your desired state." |
| 127 | How it works | Corrects drift | S43 | PASS | "If your software ever drifts from your desired state, the control plane automatically corrects the drift." |
| 128 | How it works | Built on Kubernetes | S43 | PASS | "It’s built on Kubernetes" |
| 129 | How it works | Four components | S43 | PASS | "Crossplane has four major components:" Composition / Managed resources / Operations / Package manager |
| 130 | How it works | Composition builds custom APIs | S43 | PASS | "Composition lets you build custom APIs" |
| 131 | How it works | Pipeline of functions, no controller | S43 | PASS | "With Crossplane you don’t have to write a controller. Instead you configure a pipeline of functions." |
| 132 | How it works | Functions return declarative config | S43 | PASS | "The functions return declarative configuration that Crossplane should apply." |
| 133 | How it works | XRD defines schema | S44 | PASS | "Composite resource definitions (XRDs) define the schema for a custom API." |
| 134 | How it works | Users create XRs with XRD schema | S44 | PASS | "Users create composite resources (XRs) using the API schema defined by an" XRD |
| 135 | How it works | Composition is a template | S45 | PASS | "Compositions are a template for creating multiple Kubernetes resources as a" |
| 136 | How it works | XR = set of resources as one object | S46 | PASS | "represents a set of Kubernetes resources as a single Kubernetes object." |
| 137 | How it works | Providers provision on external service | S47 | PASS | "Providers enable Crossplane to provision infrastructure on an" external service |
| 138 | How it works | Managed resource | S49 | PASS | "A managed resource (MR) represents an external service in a Provider." |
| 139 | How it works | Functions extend Crossplane | S48 | PASS | "Functions extend Crossplane with new ways to configure" composition |
| 140 | How it works | Tutorial creates App to Deployment and Service | S50 | PASS | "create a new kind of custom resource named App. When a user calls the custom resource API to create an App, Crossplane creates a Deployment and a Service." |
| 141 | How it works | CLI single standalone binary | S51 | PASS | "The Crossplane CLI is a single standalone binary with no external dependencies." |
| 142 | How it works | Most commands independent of Kubernetes | S51 | PASS | "Most Crossplane CLI commands are independent of Kubernetes" |
| 143 | How it works | composition render shows resources | S52 | PASS | "shows you what resources a Composition would create or mutate" |
| 144 | How it works | By default functions run using Docker | S52 | PASS | "runs composition functions and the Crossplane render engine using Docker by default" |
| 145 | How it works | resource validate checks against schemas | S52 | PASS | "against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)." |
| 146 | How it works | Detects unknown fields | S52 | PASS | "other checks such as unknown-field detection" |
| 147 | How it works | Docs mark command beta | S52 | PASS | "crossplane resource validate [BETA] Validate Crossplane resources." |
| 148 | Try it | Run record: date, versions, isolation, env check, no network watch | none | N/A | The page's own run record. |
| 149 | Try it | Steps 1–6 use local provider, one file, no cloud account; init downloaded provider; step 7 downloads plugin and uses network; removals | none | N/A | Run record. |
| 150 | Try it | Steps 8–9 need no cluster; images pulled; manifests come from "Get started with composition" | S50 | PASS | Manifests: "kubectl apply -f https://docs.crossplane.io/latest/manifests/get-started/composition/fn-patch-and-transform.yaml"; the rest of the sentences are run record. |
| 151 | Try it | Choices no source gives are the tutorial's own | none | N/A | Framing sentence. |
| 152 | Try it | Terraform install page showed 1.17.2 latest | S55 | PASS | "1.17.2 (latest)" |
| 153 | Try it | Packer install page showed 1.16.2 | S56 | PASS | "1.16.2 (latest)" |
| 154 | Try it | Both pages list package-manager commands and binary download | S55, S56 | PASS | S55: "Package manager" / "Binary download"; S56: "Package manager" / "Binary download" |
| 155 | Try it | Binary install location, times | none | N/A | Run record. |
| 156 | Try it | A binary can hide malicious code; verify HashiCorp created and signed it | S54 | PASS | "You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 157 | Try it | Public PGP key signs checksums of archives | S54 | PASS | "HashiCorp uses a public PGP key to sign certain files, including the checksums for its product archives." |
| 158 | Try it | Page gives key fingerprint | S54 | PASS | "Primary key fingerprint: C874 011F 0AB4 0511 0D02 1055 3436 5D94 72D7 468F" |
| 159 | Try it | Three checks and SHA-256 prefixes | none | N/A | Run record. |
| 160 | Try it | Crossplane CLI single standalone binary | S51 | PASS | "single standalone binary" |
| 161 | Try it | Some commands such as composition render need Docker-compatible runtime | S51 | PASS | "Some commands, such as crossplane composition render and crossplane project build, do require a Docker compatible container runtime." |
| 162 | Try it | Tutorial downloaded by hand as the page describes | S51 | PASS | "you can manually download a binary from the Crossplane releases repository" |
| 163 | Try it | Page says move to a folder in PATH, e.g. /usr/local/bin | S51 | PASS | "Move the binary to a location in your $PATH, for example /usr/local/bin." |
| 164 | Try it | Install location, hash, no signature found | none | N/A | Run record. |
| 165 | Try it | Step 1 intro: save main.tf (reader step) and the code block | none | N/A | Reader's own step; the file is the tutorial's own. |
| 166 | Try it | "The file is the tutorial's own, and it has no comment." | none | N/A | Describes the page. |
| 167 | Try it | terraform block names provider in required_providers | S5 | PASS | "Define the provider's source, local name, and version in the required_providers block inside your top-level terraform block." |
| 168 | Try it | variable block like function argument | S7 | PASS | "similar to a function argument in other programming languages" |
| 169 | Try it | validation block of env_name refuses capital letters | none | N/A | Describes the tutorial's own file. |
| 170 | Try it | locals block holds settings text | S9 | PASS | "Local values assign names to expressions" |
| 171 | Try it | local_file generates a local file with content | S29 | PASS | "Generates a local file with the given content." |
| 172 | Try it | output exposes the path | S8 | PASS | "The output block lets you expose information about your infrastructure." |
| 173 | Try it | Step 1 Run code block and output | none | N/A | Reader's steps and run record. |
| 174 | Try it | init installed provider, created lock file | S5 | PASS | "Running terraform init locally installs a provider and updates the Dependency lock file" |
| 175 | Try it | Lock file is how Terraform remembers version | S6 | PASS | "Terraform remembers" (the version selections it made) |
| 176 | Try it | Head lines; `>= 2.5` vs `>= 2.5.0` | none | N/A | Run record. |
| 177 | Try it | Hash list holds checksums for your platform and others | S6 | PASS | "the lock file will therefore include checksums for both the package you installed for... other platforms." |
| 178 | Try it | Later init errors if no checksum matches | S6 | PASS | "of the checksums it previously recorded in the lock file... returning an error if none of the checksums match" |
| 179 | Try it | fmt -check exit 0 if formatted, else non-zero with file names | S20 | PASS | "The exit status is 0 if the command's input is properly formatted. Otherwise, the exit status is non-zero, and the command outputs a list of improperly formatted file names." |
| 180 | Try it | fmt run outcome, bad.tf, exit 3 | none | N/A | Run record. |
| 181 | Try it | validate printed Success, exit 0 | none | N/A | Run record. |
| 182 | Try it | validate checks syntax and consistency | S19 | PASS | "checks that your configuration is syntactically valid and internally consistent" (S28 has the same words; S19 also covers the claim) |
| 183 | Try it | Step 2 Run code and output | none | N/A | Reader's steps and run record. |
| 184 | Try it | Plan saved to tfplan, `+ create`, Plan 1 to add | none | N/A | Run record. |
| 185 | Try it | file_permission "0777" is provider default | S29 | PASS | "Default value is `"0777"`." |
| 186 | Try it | -detailed-exitcode gave 2 = success with changes | S21 | PASS | "2 = Succeeded with non-empty diff (changes present)" |
| 187 | Try it | Python line reads resource_changes address and actions | S25 | PASS | "\"resource_changes\" is a description of the individual change actions" |
| 188 | Try it | Valid actions values | S25 | PASS | "[\"no-op\"] [\"create\"] [\"read\"] [\"update\"] [\"delete\", \"create\"] [\"create\", \"delete\"] [\"delete\"]" |
| 189 | Try it | apply with saved plan did not ask for approval | S22 | PASS | "performs the operations in the saved plan without prompting you for confirmation" |
| 190 | Try it | Apply complete output; out/qa.env | none | N/A | Run record. |
| 191 | Try it | Second plan: No changes, exit 0 = success no changes | S21 | PASS | "0 = Succeeded with empty diff (no changes)" |
| 192 | Try it | Step 3 intro, code, output | none | N/A | Reader's steps and run record. |
| 193 | Try it | Apply began with Refreshing state; Terraform refreshes before any operation | S11 | PASS | "Before any operation, Terraform does a refresh to update the state with the real" |
| 194 | Try it | Plan said "will be created"; no page says why | none | N/A | Run record. |
| 195 | Try it | -auto-approve skipped the question | none | N/A | Run record (S22 line 140 confirms: "apply the plan without asking for confirmation"). |
| 196 | Try it | Docs: ensure no one changes infrastructure outside workflow when using -auto-approve | S22 | PASS | "If you use -auto-approve, we recommend making sure that no one can change your infrastructure outside of your Terraform workflow." |
| 197 | Try it | Tutorial used it for a file it can lose | none | N/A | Run record. |
| 198 | Try it | -var env_name=QA refused, exit 1 | none | N/A | Run record. |
| 199 | Try it | Validations checked while creating plan; stops operation | S7 | PASS | "Terraform evaluates variable validations while it creates a plan, and if a validation block's condition expression evaluates to false, then Terraform throws an error, displays the error_message, and stops the current operation." |
| 200 | Try it | Exit status 1 means an error | S21 | PASS | "1 = Error" |
| 201 | Try it | Step 4 intro, code, output | none | N/A | Reader's steps and run record. |
| 202 | Try it | state list lists resources within a state | S57 | PASS | "The terraform state list command lists resources within a" state |
| 203 | Try it | state list printed one resource | none | N/A | Run record. |
| 204 | Try it | Folder holds tfstate and backup; defaults | S11 | PASS | "a local file named terraform.tfstate, and a backup of the previous state in terraform.tfstate.backup" |
| 205 | Try it | grep line shows content in plain text; settings not secret | none | N/A | Run record. |
| 206 | Try it | Local state is plaintext incl. secret values | S14 | PASS | "stores your state in a plaintext file, which includes any secret values you defined in your configuration." |
| 207 | Try it | Provider says to use local_sensitive_file | S29 | PASS | "If the file content is sensitive, use the local_sensitive_file resource instead." |
| 208 | Try it | Step 5 intro, test files, wrong test code, output | none | N/A | Reader's steps, the tutorial's own tests, run record. |
| 209 | Try it | Default test directory is tests | S27 | PASS | "By default, the directory containing test files is named tests." |
| 210 | Try it | Test file has one or more run blocks | S26 | PASS | "One to many run blocks." |
| 211 | Try it | command = plan blocks create no infrastructure | S26 | PASS | "plan instructs Terraform to not create new infrastructure for this run block" |
| 212 | Try it | First/second run block details | none | N/A | Describes the tutorial's own test file and run. |
| 213 | Try it | expect_failures lists a variable that should fail custom condition | S26 | PASS | "list of checkable objects (resources, data sources, check blocks, input variables, and outputs) that should fail their custom conditions." |
| 214 | Try it | Third run block uses default which applies; tests create real infrastructure | S26 | PASS | "By default, tests within Terraform create real infrastructure" |
| 215 | Try it | After a test file runs, Terraform tries to destroy leftovers | S27 | PASS | "Once Terraform fully executes each test file, Terraform attempts to destroy any remaining infrastructure." |
| 216 | Try it | Result 3 passed, exit 0 | none | N/A | Run record. |
| 217 | Try it | Test file keeps own state apart from config's | S27 | PASS | "This state is entirely separate from any existing state for the configuration under test" |
| 218 | Try it | Wrong test failed, exit 1 | none | N/A | Run record. |
| 219 | Try it | -filter limits run to test file | S27 | PASS | "-filter=testfile - Limits the terraform test operation to the specified test files." |
| 220 | Try it | Step 6 intro, code, output | none | N/A | Reader's steps and run record. |
| 221 | Try it | destroy deprovisions all objects | S23 | PASS | "deprovisions all objects managed by a Terraform configuration." |
| 222 | Try it | Destroy plan/apply lines; ls out; state list exit 0; runner removed folder | none | N/A | Run record. |
| 223 | Try it | Step 7 intro, HCL, "file is the tutorial's own" | none | N/A | Reader's step; page description. |
| 224 | Try it | packer block lists Docker plugin in required_plugins | S37 | PASS | "according to the required_plugins block in Packer templates written in HCL" |
| 225 | Try it | source block holds the builder | S33 | PASS | "The source block defines reusable builder configuration blocks." |
| 226 | Try it | commit = true makes Packer commit | S41 | PASS | "this one commits the container to an image" with "commit = true" |
| 227 | Try it | pull = false uses image already on machine | S41 | PASS | "Otherwise, it is assumed the image already exists and can be used." |
| 228 | Try it | build block names build qa-base and picks source | none | N/A | Describes the tutorial's own file. |
| 229 | Try it | provisioner block defines how to configure a provisioner | S35 | PASS | "The provisioner block defines how to configure a provisioner." |
| 230 | Try it | docker-tag takes committed artifact and tags it into a repository | S42 | PASS | "builder that was committed and tags it into a repository." |
| 231 | Try it | Names/commands are the tutorial's own | none | N/A | Page description. |
| 232 | Try it | Step 7 Run code and output | none | N/A | Reader's steps and run record. |
| 233 | Try it | packer init installed plugin; path in empty home | S37 | PASS | "download and install plugins according to the required_plugins block" (path detail is run record) |
| 234 | Try it | packer fmt formats HCL2 to canonical | S53 | PASS | "used to format HCL2 configuration files to a canonical format and style." |
| 235 | Try it | -check exit 0 only if all formatted | S53 | PASS | "Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| 236 | Try it | validate returns zero on success | S39 | PASS | "return a zero exit status on success" |
| 237 | Try it | packer build started container, ran provisioner, committed | S41 | PASS | "container, then exports the container for reuse or commits the image." |
| 238 | Try it | docker-tag tagged the image | S42 | PASS | "tags it into a repository" |
| 239 | Try it | Used no Dockerfile | S41 | PASS | "By not using Dockerfiles" |
| 240 | Try it | docker run checks; docker rmi | none | N/A | Run record. |
| 241 | Try it | Step 8 intro, app.yaml, other files, composition description | S50 (partial) | N/A | Cite covers file source: "kubectl apply -f .../fn-patch-and-transform.yaml"; S50 shows "replicas: 2", "port: 8080", "targetPort: 80", "mode: Pipeline", "crossplane-contrib-function-patch-and-transform". Describes the tutorial's files. |
| 242 | Try it | Composition is a template for several resources as one composite resource | S45 | PASS | "Compositions are a template for creating multiple Kubernetes resources as a" |
| 243 | Try it | Step 8 Run code and output | none | N/A | Reader's steps and run record. |
| 244 | Try it | version --client needs no server | S52 | PASS | "--client If true, shows client version only (no server required)." |
| 245 | Try it | composition render needs Docker-compatible runtime | S51 | PASS | "do require a Docker compatible container runtime." |
| 246 | Try it | By default pulls and runs functions with Docker | S52 | PASS | "By default, the render command pulls and runs Composition Functions using" Docker |
| 247 | Try it | render printed three documents | none | N/A | Run record. |
| 248 | Try it | render shows what resources would be created | S52 | PASS | "shows you what resources a Composition would create or mutate by running the composition locally" |
| 249 | Try it | Deployment/Service values; status, fixed time, exit 0 | none | N/A | Run record. |
| 250 | Try it | Step 9 XRD code | none | N/A | Reader's step, from the S50 manifest. |
| 251 | Try it | XRD defines schema of the custom API | S44 | PASS | "Composite resource definitions (XRDs) define the schema for a custom API." |
| 252 | Try it | In XRD spec.image is a string and required | none | N/A | Describes the XRD file shown above (S50 shows "type: string" and "required:"). |
| 253 | Try it | Step 9 Run code and output | none | N/A | Reader's steps and run record. |
| 254 | Try it | Validate checks against schemas of XRDs, CRDs, providers, functions, configurations | S52 | PASS | "against the schemas of the provided extensions (XRDs, CRDs, Providers, Functions, and Configurations)." |
| 255 | Try it | Bad file errors, exit 1; detects unknown fields | S52 | PASS | "other checks such as unknown-field detection"; run output is record. |
| 256 | Try it | render exited 0, count 0 | none | N/A | Run record. |
| 257 | Try it | Docs mark resource validate as beta | S52 | PASS | "[BETA] Validate Crossplane resources." |
| 258 | How a tester uses it | fmt -check exit 0 if formatted, else non-zero | S20 | PASS | "Exit status is 0 if the command's input is properly formatted. Otherwise, the exit status is non-zero" |
| 259 | How a tester uses it | packer fmt -check does the same | S53 | PASS | "Exit status will be 0 if all input is properly formatted and non-zero otherwise." |
| 260 | How a tester uses it | packer validate non-zero on failure | S39 | PASS | "a non-zero exit status on failure" |
| 261 | How a tester uses it | plan -detailed-exitcode 0/1/2 | S21 | PASS | "0 = Succeeded with empty diff (no changes) 1 = Error 2 = Succeeded with non-empty diff (changes present)" |
| 262 | How a tester uses it | Style guide: fmt and validate before commit | S28 | PASS | "Run terraform fmt and terraform validate before committing your code" |
| 263 | How a tester uses it | show -json shows JSON of a plan file | S24 | PASS | "For Terraform plan files, terraform show -json shows a JSON representation of the plan" |
| 264 | How a tester uses it | Each resource_changes item has actions | S25 | PASS | "\"resource_changes\"..." and "\"actions\" are the actions that will be taken on the object" |
| 265 | How a tester uses it | Replacement = two actions; scan for delete | S25 | PASS | "just scan the list for \"delete\" to recognize all three situations where the object will be deleted" |
| 266 | How a tester uses it | command = plan creates no infrastructure | S26 | PASS | "plan instructs Terraform to not create new infrastructure for this run block" |
| 267 | How a tester uses it | Applying run block creates real infrastructure, can cost money | S27 | PASS | "The Terraform test command can create real infrastructure than can cost you money." |
| 268 | How a tester uses it | Test file keeps separate state | S27 | PASS | "entirely separate from any existing state for the configuration under test" |
| 269 | How a tester uses it | Since v1.7.0 tests can mock provider data | S26 | PASS | "Terraform v1.7.0 introduced the ability to mock data returned by the providers" |
| 270 | How a tester uses it | -junit-xml saves JUnit XML report | S27 | PASS | "-junit-xml=<output file path> - Saves a test report in JUnit XML format" |
| 271 | How a tester uses it | packer validate checks syntax and config | S39 | PASS | "validate the syntax and" (configuration of a template) |
| 272 | How a tester uses it | Build result is an artifact | S31 | PASS | "Artifacts are the results of a single build" |
| 273 | How a tester uses it | Step 7: ran image, read a file and version | none | N/A | Run record. |
| 274 | How a tester uses it | resource validate checks schemas, unknown fields | S52 | PASS | "against the schemas of the provided extensions... unknown-field detection" |
| 275 | How a tester uses it | render shows resources by running locally | S52 | PASS | "would create or mutate by running the composition locally and printing its results" |
| 276 | How a tester uses it | Step 9: render accepted typo that validate refused | none | N/A | Run record. |
| 277 | How a tester uses it | State and plan files can hold sensitive values such as DB passwords, API tokens | S14 | PASS | "sensitive values, such as initial database passwords or API tokens." |
| 278 | How a tester uses it | show -json shows sensitive state values in plain text | S24 | PASS | "any sensitive values in Terraform state will be displayed in plain text." |
| 279 | How a tester uses it | So plan, state, or JSON can contain a secret | S14, S24 | PASS | Inference from the two sources above (S14 line 150; S24 line 139). |
| 280 | How a tester uses it | Tests use short-lived resources | S26 | PASS | "Tests run against test-specific, short-lived resources" |
| 281 | How a tester uses it | destroy deprovisions all objects | S23 | PASS | "deprovisions all objects managed by a Terraform configuration." |
| 282 | How a tester uses it | prevent_destroy also prevents terraform destroy | S16 | PASS | "prevents the terraform destroy command from operating once such objects are created." |
| 283 | How a tester uses it | Verify downloads; binary can contain malicious code | S54 | PASS | "tricking you into running an executable that includes malicious code. You can avoid this by verifying that HashiCorp created and signed the binary" |
| 284 | Common mistakes | Avoid state in VCS or storage without locking and access control | S11 | PASS | "Avoid storing your state in a version control system or other storage solution" |
| 285 | Common mistakes | State is JSON; do not edit | S11 | PASS | "stores your workspaces state as a JSON text file. Do not directly edit" |
| 286 | Common mistakes | If backend supports, locks | S13 | PASS | "If supported by your backend, Terraform will lock your state for all operations that could write state." |
| 287 | Common mistakes | If locking fails, no continue | S13 | PASS | "If state locking fails, Terraform does not continue." |
| 288 | Common mistakes | Include lock file in VCS for code review | S6 | PASS | "include this file in your version control repository so that you can discuss potential changes to your external dependencies via code review" |
| 289 | Common mistakes | Constrain provider versions in production | S4 | PASS | "In production we recommend constraining the acceptable provider versions" |
| 290 | Common mistakes | Re-check final plan to match intent | S21 | PASS | "you should always re-check the final non-speculative plan before applying to make sure that it still" (matches your intent) |
| 291 | Common mistakes | -auto-approve: recommend no outside changes; less drift risk | S22 | PASS | "we recommend making sure that no one can change your infrastructure outside of your Terraform workflow. This minimizes the risk of unpredictable changes and configuration drift." |
| 292 | Common mistakes | prevent_destroy does not stop removal of config | S16 | PASS | "This rule doesn't prevent Terraform from destroying a resource if you remove its configuration." |
| 293 | Common mistakes | Use prevent_destroy sparingly | S16 | PASS | "Use prevent_destroy sparingly." |
| 294 | Common mistakes | validate does not check remote services | S19 | PASS | "It does not validate remote services, such as remote state or provider APIs." |
| 295 | Common mistakes | validate needs an initialized directory | S19 | PASS | "Validation requires an initialized working directory" |
| 296 | Common mistakes | Sensitive content: use local_sensitive_file | S29 | PASS | "If the file content is sensitive, use the local_sensitive_file resource instead." |
| 297 | Common mistakes | local_file noise in CI | S29 | PASS | "Terraform will detect the resource as having been deleted each time a configuration is applied on a new machine where the file is not present and will generate a diff to re-create it." |
| 298 | Common mistakes | terraform test can create costly infrastructure | S27 | PASS | "can create real infrastructure than can cost you money" |
| 299 | Common mistakes | Packer does not replace Chef/Puppet | S30 | PASS | "Packer does not replace configuration" management like Chef or Puppet |
| 300 | Common mistakes | pull defaults to true | S41 | PASS | "This defaults to true if not set." |
| 301 | Common mistakes | Template sets pull false, uses image on machine | none | N/A | Describes the tutorial's own template. |
| 302 | Common mistakes | Step 9: render exit 0 for typo, validate refused | none | N/A | Run record. |
| 303 | Common mistakes | Docs say validate detects unknown fields | S52 | PASS | "unknown-field detection" |
| 304 | Common mistakes | Verify binaries to avoid malicious code | S54 | PASS | "You can avoid this by verifying that HashiCorp created and signed the binary before you run it." |
| 305 | What a tester can check | Callout "Tutorial advice": 12 tips | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice for a tester...". It gives no tool fact beyond the rest of the page (`-detailed-exitcode`, `-out`, `expect_failures`, `.terraform.lock.hcl`, `terraform fmt -check` are all supported above). |
| 306 | Key words | Infrastructure as code | none | PASS | Page sentence: "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently" |
| 307 | Key words | Provider | none | PASS | "Terraform relies on plugins called providers to interact with cloud providers, SaaS providers, and other APIs" |
| 308 | Key words | Resource | none | PASS | "The resource block defines a piece of infrastructure" |
| 309 | Key words | Variable | none | PASS | "The variable block is similar to a function argument in other programming languages" |
| 310 | Key words | Output | none | PASS | "The output block lets you expose information about your infrastructure" |
| 311 | Key words | Plan | none | PASS | "The terraform plan command creates an execution plan, which lets you preview the changes that Terraform plans to make" |
| 312 | Key words | Speculative plan | none | PASS | "Without the -out option, it creates a speculative plan" |
| 313 | Key words | Apply | none | PASS | "The terraform apply command executes the operations of a plan" |
| 314 | Key words | State | none | PASS | "Terraform must store state about your workspace's managed infrastructure and configuration" |
| 315 | Key words | Remote state | none | PASS | "With remote state, Terraform writes the state data to a remote data store that a whole team can share" |
| 316 | Key words | Dependency lock file | none | PASS | "The lock file is always named .terraform.lock.hcl" |
| 317 | Key words | Module | none | PASS | "A module is a collection of resources that Terraform manages together" |
| 318 | Key words | Terraform test | none | PASS | "Terraform tests let authors validate that module configuration updates do not introduce breaking changes" |
| 319 | Key words | Machine image | none | PASS | "A machine image is a single static unit that contains a pre-configured operating system and installed software" |
| 320 | Key words | Template | none | PASS | "A template defines one or more builds" |
| 321 | Key words | Builder | none | PASS | "A builder creates a machine image for a single platform" |
| 322 | Key words | Provisioner | none | PASS | "Provisioners install and configure software in a running machine before it becomes a static artifact" |
| 323 | Key words | Post-processor | none | PASS | "A post-processor takes the result of a builder or another post-processor and creates a new artifact" |
| 324 | Key words | Artifact | none | PASS | "An artifact is the result of a single build" |
| 325 | Key words | Control plane | none | PASS | "A control plane is software that controls other software" |
| 326 | Key words | Drift | none | PASS | "If the software drifts from the desired state, the control plane corrects the drift" |
| 327 | Key words | XRD | none | PASS | "A composite resource definition (XRD) defines the schema for a custom API" |
| 328 | Key words | Composition | none | PASS | "A composition is a template for creating several Kubernetes resources as a single composite resource" |
| 329 | Key words | XR | none | PASS | "A composite resource represents a set of Kubernetes resources as a single Kubernetes object" |
| 330 | Key words | Managed resource | none | PASS | "A managed resource represents an external service in a provider" |
| 331 | Key words | Function | none | PASS | "Functions extend Crossplane with new ways to configure composition" |
| 332 | Key words | Render | none | PASS | "The composition render command shows what resources a composition would create or change" |

Open FAILs after round 9: 0

Open FAILs: 0
