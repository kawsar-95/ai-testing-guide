# Fact check: devops / cncf-build-deliver

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://www.cncf.io/about/who-we-are/; S2 https://www.cncf.io/projects/; S3 https://helm.sh/docs/; S4 https://backstage.io/docs/overview/what-is-backstage; S5 https://buildpacks.io/docs/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / cncf-build-deliver (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Open-source projects that package, deliver, and run applications on Kubernetes." | none | FAIL | The line has no cite. I searched S3, S4 and S5 and found no passage that says all of these projects "run applications on Kubernetes". S5 says CNBs build images "that can run on any cloud". S4 says Backstage is a framework for developer portals. Fix: add a cite and narrow the claim to what the sources say, for example "Open-source CNCF projects for packaging, building and developer portals." |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | 1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | Helm is the package manager for Kubernetes | 3 | PASS | S3: "Helm is the package manager for Kubernetes" (the text wraps across lines 3-4 in the file). |
| 4 | Backstage is an open source framework for building developer portals | 4 | PASS | S4: "Backstage is an open source framework for building developer portals." (the text wraps across lines 3-4 in the file). |
| 5 | Cloud Native Buildpacks (CNBs) transform your application source code into container images that can run on any cloud | 5 | PASS | S5: "Cloud Native Buildpacks (CNBs) transform your application source code into container images (opens in a new tab) that can run on any cloud." |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / cncf-build-deliver (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, Helm, Backstage, and Cloud Native Buildpacks. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | S1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | S2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | Helm is the package manager for Kubernetes | S3 | PASS | S3: "Helm is the package manager for Kubernetes" (the line break falls between "package" and "manager"). |
| 4 | Backstage is an open source framework for building developer portals | S4 | PASS | S4: "Backstage is an open source framework for building developer portals." (the line break falls after "developer"). |
| 5 | Cloud Native Buildpacks (CNBs) transform your application source code into container images that can run on any cloud | S5 | PASS | S5: "Cloud Native Buildpacks (CNBs) transform your application source code into container images ... that can run on any cloud." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / cncf-build-deliver (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, Helm, Backstage, and Cloud Native Buildpacks. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the topics and describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. | S1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments. | S2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | Helm is the package manager for Kubernetes. | S3 | PASS | S3: "Helm is the package manager for Kubernetes". The sentence is split across a line break in the file. |
| 4 | Backstage is an open source framework for building developer portals. | S4 | PASS | S4: "Backstage is an open source framework for building developer portals." The words "developer" and "portals" are split across a line break in the file. |
| 5 | Cloud Native Buildpacks (CNBs) transform your application source code into container images that can run on any cloud. | S5 | PASS | S5: "Cloud Native Buildpacks (CNBs) transform your application source code into container images (opens in a new tab) that can run on any cloud." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / cncf-build-deliver (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, Helm, Backstage, and Cloud Native Buildpacks. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede only lists the projects and describes the page itself. It gives no fact about a tool. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | S1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | S2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | Helm is the package manager for Kubernetes | S3 | PASS | S3: "Helm is the package\nmanager for Kubernetes". The sentence is split across a line break. |
| 4 | Backstage is an open source framework for building developer portals | S4 | PASS | S4: "Backstage  is an open source framework for building developer\nportals." The sentence is split across a line break. |
| 5 | Cloud Native Buildpacks (CNBs) transform your application source code into container images that can run on any cloud | S5 | PASS | S5: "Cloud Native Buildpacks (CNBs) transform your application source code into  container images  (opens in a new tab)   that can run on any cloud." |

Open FAILs after round 5: 0

## Round 6 (2026-11-19)

# Fact check: devops / cncf-build-deliver (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | CNCF and three projects; practice run on own machine | none | N/A | Describes the page itself. |
| 2 | Lede | Page covers CNCF, Helm, Backstage, Buildpacks; run needs no cluster or cloud account; one step uses Docker | none | N/A | Describes the page and its own run. |
| 3 | What it is | CNCF hosts critical components of the global technology infrastructure | S1 | PASS | "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 4 | What it is | CNCF is part of the nonprofit Linux Foundation | S1 | PASS | "CNCF is part of the nonprofit Linux Foundation." |
| 5 | What it is | CNCF has a Technical Oversight Committee (TOC) | S3 | PASS | "the CNCF's Technical Oversight Committee (TOC)" |
| 6 | What it is | TOC defines 4 stages | S3 | PASS | "The TOC defines 4 stages of the project lifecycle:" |
| 7 | What it is | Sandbox definition | S3 | PASS | "Sandbox - Experimental or innovative projects early in their development." |
| 8 | What it is | Incubation definition | S3 | PASS | "Incubation - Projects gaining adoption, focusing on improving stability and maturity." |
| 9 | What it is | Graduated definition | S3 | PASS | "Graduated - Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments." |
| 10 | What it is | Archived definition | S3 | PASS | "Archived - Inactive or low activity projects that are no longer supported by the TOC or are not recommended for use due to a variety of factors (project specific)" |
| 11 | What it is | CNCF says graduated and incubating projects are stable and used in production | S2 | PASS | "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 12 | What it is | Helm is the package manager for Kubernetes | S7 | PASS | "Helm is the package manager for Kubernetes." |
| 13 | What it is | Helm accepted 2018-06-01 Incubating, Graduated 2020-05-01 | S4 | PASS | "Helm was accepted to CNCF on June 1, 2018 at the Incubating maturity level and then moved to the Graduated maturity level on May 1, 2020." |
| 14 | What it is | Backstage is an open source framework for developer portals | S26 | PASS | "Backstage is an open source framework for building developer portals." |
| 15 | What it is | Backstage accepted 2020-09-08, Incubating 2022-03-15 | S5 | PASS | "Backstage was accepted to CNCF on September 8, 2020 and moved to the Incubating maturity level on March 15, 2022." |
| 16 | What it is | Buildpacks transform source code into images that run on any cloud | S6 | PASS | "Cloud Native Buildpacks transform your application source code into images that can run on any cloud" |
| 17 | What it is | Buildpacks dates | S6 | PASS | "Buildpacks was accepted to CNCF on October 3, 2018, moved to the Incubating maturity level on November 18, 2020, and then moved to the Graduated maturity level on July 17, 2026." |
| 18 | What it is | Tutorial read the pages on 2026-11-19; levels can change | none | N/A | Record of the page's own practice and advice. |
| 19 | What it is | Chart is a Helm package with information to install Kubernetes resources | S7 | PASS | "A Helm package that contains information sufficient for installing a set of Kubernetes resources into a Kubernetes cluster." |
| 20 | What it is | Charts contain Chart.yaml, templates, values.yaml, dependencies | S7 | PASS | "Charts contain a Chart.yaml file as well as templates, default values (values.yaml), and dependencies." |
| 21 | What it is | Install creates a release | S7 | PASS | "When a chart is installed, the Helm library creates a release to track that installation." |
| 22 | What it is | One chart may make many releases | S7 | PASS | "A single chart may be installed many times into the same cluster, and create many different releases." |
| 23 | What it is | Charts stored on chart repositories | S7 | PASS | "Helm charts may be stored on dedicated HTTP servers called chart repositories" |
| 24 | What it is | Values override template defaults | S7 | PASS | "Values provide a way to override template defaults with your own information." |
| 25 | What it is | Backstage Software Catalog definition | S27 | PASS | "The Backstage Software Catalog is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem" |
| 26 | What it is | Catalog built on metadata YAML files stored with code | S27 | PASS | "The catalog is built around the concept of metadata YAML files stored together with the code, which are then harvested and visualized in Backstage." |
| 27 | What it is | Out of the box Backstage includes Software Templates and TechDocs | S26 | PASS | "Out of the box, Backstage includes:" ... "Backstage Software Templates for" ... "Backstage TechDocs for" |
| 28 | What it is | Buildpack definition | S34 | PASS | "A buildpack is software that transforms application source code into runnable artifacts by analyzing the code and determining the best way to build it." |
| 29 | What it is | Builder definition | S35 | PASS | "A builder is an OCI image containing an ordered combination of buildpacks and a build-time base image, a lifecycle binary, and a reference to a runtime base image." |
| 30 | What it is | Platform definition | S36 | PASS | "A platform orchestrates builds by invoking the lifecycle binary together with buildpacks and app source code to produce a runnable OCI image." |
| 31 | What it is | Pack CLI is one such platform | S36 | PASS | "A local CLI tool that uses buildpacks to create OCI images. One such tool is the Pack CLI" |
| 32 | What it is | "The tutorial uses `pack` for that reason" | none | N/A | The tutorial's own choice. |
| 33 | How it works | Chart is a collection of files describing Kubernetes resources | S8 | PASS | "A chart is a collection of files that describe a related set of Kubernetes resources." |
| 34 | How it works | Charts are files in a particular directory tree | S8 | PASS | "Charts are created as files laid out in a particular directory tree." |
| 35 | How it works | `helm create` makes a chart directory with common files | S9 | PASS | "This command creates a chart directory along with the common files and directories used in a chart" |
| 36 | How it works | Example tree: Chart.yaml, values.yaml, charts/, templates/ | S9 | PASS | "Chart.yaml # Information about your chart", "values.yaml # The default values for your templates", "charts/ # Charts that this chart depends on", "templates/ # The template files" |
| 37 | How it works | Every chart must have Chart.yaml | S7 | PASS | "Every chart must have this file." |
| 38 | How it works | SemVer 2; version required | S7 | PASS | "Charts are versioned according to the SemVer 2 spec. A version number is required on every chart." |
| 39 | How it works | Chart archive is tarred and gzipped | S7 | PASS | "A chart archive is a tarred and gzipped (and optionally signed) chart." |
| 40 | How it works | Values override template defaults | S7 | PASS | "Values provide a way to override template defaults with your own information." |
| 41 | How it works | Developer may expose configuration overridable at install time | S7 | PASS | "the chart developer may expose configuration that can be overridden at installation time." |
| 42 | How it works | Order of specificity | S19 | PASS | "values.yaml is the default, which can be overridden by a parent chart's values.yaml, which can in turn be overridden by a user-supplied values file, which can in turn be overridden by --set parameters." |
| 43 | How it works | `--values`/`-f` more than once; right-most wins | S12 | PASS | "You can specify the '--values'/'-f' flag multiple times. The priority will be given to the last (right-most) file specified." |
| 44 | How it works | `--set-string` forces a string | S12 | PASS | "to force a string value use '--set-string'." |
| 45 | How it works | Variable names start lowercase, camelcase | S20 | PASS | "Variable names should begin with a lowercase letter, and words should be separated with camelcase" |
| 46 | How it works | Flat favored over nested | S20 | PASS | "In most cases, flat should be favored over nested." |
| 47 | How it works | `helm template` renders locally | S11 | PASS | "Render chart templates locally and display the output." |
| 48 | How it works | In-cluster values are faked | S11 | PASS | "Any values that would normally be looked up or retrieved in-cluster will be faked locally." |
| 49 | How it works | No server-side testing | S11 | PASS | "none of the server-side testing of chart validity (e.g. whether an API is supported) is done." |
| 50 | How it works | `--dry-run=client` | S11 | PASS | "'--dry-run=client simulates the operation client-side only and avoids cluster connections." |
| 51 | How it works | `--dry-run=server` | S11 | PASS | "'--dry-run=server' simulates/validates the operation on the server, requiring cluster connectivity." |
| 52 | How it works | `helm install` installs a chart archive | S12 | PASS | "This command installs a chart archive." |
| 53 | How it works | Install argument forms | S12 | PASS | "a chart reference, a path to a packaged chart, a path to an unpacked chart directory or a URL." |
| 54 | How it works | Definition of lint | S7 | PASS | "To lint a chart is to validate that it follows the conventions and requirements of the Helm chart standard." |
| 55 | How it works | `helm lint` takes a path and runs tests | S10 | PASS | "This command takes a path to a chart and runs a series of tests to verify that the chart is well-formed." |
| 56 | How it works | `[ERROR]` messages | S10 | PASS | "things that will cause the chart to fail installation, it will emit [ERROR] messages." |
| 57 | How it works | `[WARNING]` messages | S10 | PASS | "issues that break with convention or recommendation, it will emit [WARNING] messages." |
| 58 | How it works | `values.schema.json` | S8 | PASS | "defining a schema in the values.schema.json file." |
| 59 | How it works | Schema is a JSON Schema | S8 | PASS | "A schema is represented as a JSON Schema." |
| 60 | How it works | Validation on install, upgrade, lint, template | S8 | PASS | "Validation occurs when any of the following commands are invoked:" ... "helm install", "helm upgrade", "helm lint", "helm template" |
| 61 | How it works | After first install, release number 1 | S7 | PASS | "After a first helm install, a release will have release number 1." |
| 62 | How it works | Number increments on upgrade or rollback | S7 | PASS | "Each time a release is upgraded or rolled back, the release number will be incremented." |
| 63 | How it works | Rollback to a previous release number | S7 | PASS | "since release history is stored, a release can also be rolled back to a previous release number. This is done with the helm rollback command." |
| 64 | How it works | Rolled back release gets a new number | S7 | PASS | "a rolled back release will receive a new release number." |
| 65 | How it works | `helm rollback` arguments | S14 | PASS | "The first argument of the rollback command is the name of a release, and the second is a revision (version) number." |
| 66 | How it works | Omitted or 0 means previous release | S14 | PASS | "If this argument is omitted or set to 0, it will roll back to the previous release." |
| 67 | How it works | `helm history RELEASE` shows revisions | S14 | PASS | "To see revision numbers, run 'helm history RELEASE'." |
| 68 | How it works | `helm history` default max 256 | S15 | PASS | "A default maximum of 256 revisions will be returned." |
| 69 | How it works | Stored in Secrets by default | S21 | PASS | "By default, release information is stored in Secrets in the namespace of the release." |
| 70 | How it works | `HELM_DRIVER` selects backend | S21 | PASS | "configure different backends. This configuration is based on the HELM_DRIVER environment variable." |
| 71 | How it works | Test lives under `templates/` | S17 | PASS | "A test in a helm chart lives under the templates/ directory" |
| 72 | How it works | Test is a Pod or Job workload definition | S17 | PASS | "workload definition (commonly a Pod or Job) that specifies a container with a given command to run." |
| 73 | How it works | Container should exit 0 | S17 | PASS | "The container should exit successfully (exit 0) for a test to be considered a success." |
| 74 | How it works | Test hook annotation `helm.sh/hook: test` | S17 | PASS | "The definition must contain the helm test hook annotation: helm.sh/hook: test." |
| 75 | How it works | `helm test` runs tests for a release | S16 | PASS | "The test command runs the tests for a release." |
| 76 | How it works | `helm test` argument | S16 | PASS | "The argument this command takes is the name of a deployed release." |
| 77 | How it works | Tests defined in installed chart | S16 | PASS | "The tests to be run are defined in the chart that was installed." |
| 78 | How it works | Hooks | S18 | PASS | "Hooks work like regular templates, but they have special annotations that cause" |
| 79 | How it works | Two install hooks | S18 | PASS | "Helm defines two hooks for the install lifecycle: pre-install and post-install." |
| 80 | How it works | `helm package` makes a versioned archive | S13 | PASS | "This command packages a chart into a versioned chart archive file." |
| 81 | How it works | Path must hold Chart.yaml | S13 | PASS | "If a path is given, this will look at that path for a chart (which must contain a Chart.yaml file)" |
| 82 | How it works | Archives used by package repositories | S13 | PASS | "Versioned chart archives are used by Helm package repositories." |
| 83 | How it works | `--sign` | S13 | PASS | "To sign a chart, use the '--sign' flag." |
| 84 | How it works | Provenance tools | S22 | PASS | "Helm has provenance tools which help chart users verify the integrity and origin" |
| 85 | How it works | Provenance files at packaging time; `helm install --verify` | S22 | PASS | "Provenance files are generated at packaging time (helm package --sign ...), and can be checked by multiple commands, notably helm install --verify." |
| 86 | How it works | Chart repository is an HTTP server with `index.yaml` | S24 | PASS | "A chart repository is an HTTP server that houses an index.yaml file and optionally some packaged charts." |
| 87 | How it works | Docs recommend OCI registries | S23 | PASS | "It is recommended to use container registries with OCI support to store and share chart packages." |
| 88 | How it works | Recommended name `catalog-info.yaml` | S28 | PASS | "we recommend that you name them catalog-info.yaml." |
| 89 | How it works | Descriptor files are YAML for maintainability | S28 | PASS | "the descriptor files are on YAML format to be more easily maintainable by humans." |
| 90 | How it works | `kind` | S28 | PASS | "The kind is the high level entity type being described." |
| 91 | How it works | `apiVersion` | S28 | PASS | "The apiVersion is the version of specification format for that particular entity that the specification is made against." |
| 92 | How it works | Name unique per kind within namespace | S28 | PASS | "Names must be unique per kind, within a given namespace (if specified), at any point in time." |
| 93 | How it works | Name is 1 to 63 characters of letters and digits, separated by `-`, `_`, `.` | S28 | FAIL | The source gives this as a configurable default: "The ruleset is configurable to fit your organization's needs, but the default behavior is as follows." The page states it without a limit. Fix: "By default, a name is a string of 1 to 63 characters ..." |
| 94 | How it works | For a Component, spec.type, spec.lifecycle, spec.owner required | S28 | PASS | "spec.type [required]", "spec.lifecycle [required]", "spec.owner [required]" |
| 95 | How it works | Owner definition | S28 | PASS | "the owner of a component is the singular entity (commonly a team) that bears ultimate responsibility for the component, and has the authority and capability to develop and maintain it." |
| 96 | How it works | Owner is the point of contact | S28 | PASS | "They will be the point of contact if something goes wrong, or if features are to be requested." |
| 97 | How it works | Catalog accepts any lifecycle value | S28 | PASS | "The software catalog accepts any lifecycle value, but an organization should take great care to establish a proper taxonomy for these." |
| 98 | How it works | `experimental` | S28 | PASS | "experimental - an experiment or early, non-production component" |
| 99 | How it works | `production` | S28 | PASS | "production - an established, owned, maintained component" |
| 100 | How it works | Components | S29 | PASS | "Components are individual pieces of software" |
| 101 | How it works | APIs | S29 | PASS | "APIs are the boundaries between different components" |
| 102 | How it works | Resources | S29 | PASS | "Resources are physical or virtual infrastructure needed to operate a" |
| 103 | How it works | User | S29 | PASS | "A user describes a person, such as an employee, a contractor, or similar." |
| 104 | How it works | Group | S29 | PASS | "A group describes an organizational entity, such as for example a team, a business unit, or a loose collection of people in an interest group." |
| 105 | How it works | Entity identified by kind, namespace, name | S31 | PASS | "Each entity in the catalog is uniquely identified by the triplet of its" |
| 106 | How it works | String reference format | S31 | PASS | "composed of between one and three parts in this specific order, without any" ... "Optionally, the kind, followed by a colon" ... "Optionally, the namespace, followed by a forward slash" |
| 107 | How it works | Catalog is a hub | S30 | PASS | "The catalog forms a hub of sorts, where entities are ingested from various authoritative sources and held in a database, subject to automated processing, and then presented through an API" |
| 108 | How it works | Ingestion | S30 | PASS | "Ingestion, where entity providers fetch raw entity data from external sources and seed it into the database" |
| 109 | How it works | Processing | S30 | PASS | "Processing, where the policies and processors continually treat the ingested data" |
| 110 | How it works | Policies | S30 | PASS | "Policies, that establish baseline rules about the shape of entities" |
| 111 | How it works | Processors | S30 | PASS | "Processors, that validate, analyze, and mutate the raw entity data into its final form." |
| 112 | How it works | Stitching | S30 | PASS | "Stitching, where all of the data emitted by various processors are assembled together into the final output entity." |
| 113 | How it works | Entity not visible until last process | S30 | PASS | "An entity is not visible to the outside world (through the catalog API), until it has passed through the last process and landed among the final entities." |
| 114 | How it works | Software Templates load skeletons and publish | S32 | PASS | "By default, it has the ability to load skeletons of code, template in some variables, and then publish the template to some locations like GitHub or GitLab." |
| 115 | How it works | TechDocs | S33 | PASS | "TechDocs is Spotify's homegrown docs-like-code solution built directly into Backstage." |
| 116 | How it works | Markdown with code | S33 | PASS | "Engineers write their documentation in Markdown files which live together with their code" |
| 117 | How it works | Doc site with little configuration | S33 | PASS | "with little configuration get a nice-looking doc site in Backstage." |
| 118 | How it works | Lifecycle orchestrates buildpacks | S37 | PASS | "The lifecycle orchestrates buildpacks, then assembles the resulting artifacts into an OCI image" |
| 119 | How it works | 5 phases | S37 | PASS | "An image build requires 5 lifecycle phases" |
| 120 | How it works | Phase names | S45 | PASS | "five separate lifecycle binaries: detect, analyze, restore, build and export." |
| 121 | How it works | Image repository access | S37 | PASS | "require access to an image repository - either an OCI registry or Docker-compliant daemon" |
| 122 | How it works | Separate containers | S37 | PASS | "For security hardening, these phases run in separate containers to avoid exposing sensitive data to buildpacks." |
| 123 | How it works | Detector and builder invoke buildpacks | S37 | PASS | "The detector and builder (shown in purple above) invoke buildpacks" |
| 124 | How it works | Non-root | S37 | PASS | "both the lifecycle and buildpacks run as non-root users when doing this work." |
| 125 | How it works | Trusted builder, one container, creator | S37 | PASS | "When a builder is trusted, all 5 lifecycle phases can be run in the same container, and in this case the creator binary is used" |
| 126 | How it works | Detector finds ordered group | S38 | PASS | "The detector finds an ordered group of buildpacks to use during the build phase." |
| 127 | How it works | Reads order.toml, first passing group | S38 | PASS | "The detector reads the order.toml and looks for the first group that passes the detection process." |
| 128 | How it works | All groups fail means detection fails | S38 | PASS | "If all of the groups fail, the detection process fails." |
| 129 | How it works | Detect scripts must exit 0 | S38 | PASS | "The detect scripts of all required buildpacks must pass successfully (the exit code is zero)." |
| 130 | How it works | Build plan | S38 | PASS | "The detector should be able to create a build plan (to be written in the plan.toml) with all of the requirements of the group's buildpacks." |
| 131 | How it works | group.toml and plan.toml | S38 | PASS | "The first group that passes both steps is written to group.toml and its build plan is written to plan.toml." |
| 132 | How it works | Component buildpack | S41 | PASS | "A component buildpack is a buildpack containing /bin/detect and /bin/build executables." |
| 133 | How it works | `pack buildpack new` scaffolding | S42 | PASS | "buildpack new generates the basic scaffolding of a buildpack repository." |
| 134 | How it works | Creates buildpack.toml and two scripts | S42 | PASS | "initializes a buildpack.toml, and two executable bash scripts, bin/detect and bin/build." |
| 135 | How it works | Detect exit status | S41 | PASS | "Pass (0), fail (100), or error (1-99, 101+)" |
| 136 | How it works | Build exit status | S41 | PASS | "Success (0) or failure (1+)" |
| 137 | How it works | CNB_LAYERS_DIR | S41 | PASS | "$CNB_LAYERS_DIR ... Absolute path of the buildpack layers directory" |
| 138 | How it works | launch.toml with app metadata | S41 | PASS | "$CNB_LAYERS_DIR/launch.toml App metadata (see launch.toml)" |
| 139 | How it works | Positional arguments deprecated in 0.8 | S41 | PASS | "Deprecated in Buildpack API 0.8. The positional arguments to the detect and build executables are deprecated. The lifecycle provides these values as environment variables." |
| 140 | How it works | Layer definition | S41 | PASS | "A layer is a set of filesystem changes packaged according to the OCI Image Specification." |
| 141 | How it works | Layer directory | S41 | PASS | "A layer directory is a directory created by a component buildpack that contains build and/or runtime dependencies" |
| 142 | How it works | Three layer types | S41 | PASS | "There are three layer types:" |
| 143 | How it works | Launch layer | S41 | PASS | "a launch layer is added as a layer in the exported OCI image" |
| 144 | How it works | Cache layer | S41 | PASS | "a cache layer is saved to the cache and its contents may be restored on the next build" |
| 145 | How it works | Build layer | S41 | PASS | "a build layer contains child directories with paths that are added to the environment ... for subsequent buildpacks in the same build" |
| 146 | How it works | Example layers path | S47 | PASS | "Reading buildpack directory: /layers/example_node-engine" |
| 147 | How it works | `pack build` creates app image | S43 | PASS | "Pack Build uses Cloud Native Buildpacks to create a runnable app image from source code." |
| 148 | How it works | Requires image name | S43 | PASS | "Pack Build requires an image name" |
| 149 | How it works | Current directory; `--path` | S43 | PASS | "Build defaults to the current directory, but you can use --path to specify another source code directory." |
| 150 | How it works | Builder required | S43 | PASS | "Build requires a builder, which can either be provided directly to build using --builder, or can be set using the set-default-builder command." |
| 151 | How it works | `--buildpack` accepts a directory path | S43 | PASS | "path to a buildpack directory (not supported on Windows)" listed under "-b, --buildpack strings Buildpack to use. One of:" |
| 152 | How it works | `pack inspect` | S44 | PASS | "Show information about a built app image" |
| 153 | How it works | pack 0.11.0 trusted builders | S45 | PASS | "From version 0.11.0 onward, pack can be used to identify builders that should be considered trusted." |
| 154 | How it works | Trusted builder uses the creator | S45 | PASS | "When pack considers a builder to be trusted, pack build operations will use a single lifecycle binary called the creator." |
| 155 | How it works | Untrusted builder, five binaries | S45 | PASS | "If pack doesn't trust a builder it will continue to execute five separate lifecycle binaries" |
| 156 | How it works | Balance of security and performance | S45 | PASS | "This choice strikes a balance between security and performance." |
| 157 | How it works | Published lifecycle image | S45 | PASS | "It will run the more privileged phases using a published lifecycle image, if one is available." |
| 158 | How it works | Analyze, restore, export need privilege | S45 | PASS | "The analyze, restore and export phases of the lifecycle require higher levels of privilege or access to sensitive data that is not required by the detect and build phases." |
| 159 | How it works | Creator with untrusted builder | S45 | PASS | "each of the buildpack's bin/detect and bin/build processes would run within a container that has heightened privileges or access to registry credentials." |
| 160 | How it works | Rebaser | S39 | PASS | "The rebaser places application layers atop a new version of the runtime base image." |
| 161 | How it works | Reproducible builds | S40 | PASS | "The Cloud Native Buildpacks project aims to create "Reproducible Builds" of container images." |
| 162 | How it works | Same inputs, same outputs | S40 | PASS | "Given the same inputs, two builds should produce the same outputs." |
| 163 | How it works | SBOM definition | S46 | PASS | "A Software-Bill-of-Materials (SBOM) lists all the software components included in an image." |
| 164 | How it works | Buildpacks populate SBOM | S46 | PASS | "Buildpacks can populate SBOM information about the dependencies they have provided." |
| 165 | How it works | `pack sbom download` | S46 | PASS | "download the app layer containing the SBOM files to ./layers/sbom/... on your local filesystem." |
| 166 | Try it | Run record: date, versions, folder, home | none | N/A | The page's own run record. |
| 167 | Try it | Steps 2-6 local only; step 7 npm; step 9 Docker; cleanup record | none | N/A | The page's own run record. |
| 168 | Try it | Choices no source gives; what was not run | none | N/A | The page's own choices and scope. |
| 169 | Try it | Install: Helm releases include cryptographic signatures | S25 | PASS | "Each Helm release includes cryptographic signatures that confirm the binary was built and signed by Helm maintainers." |
| 170 | Try it | Install: always verify authenticity | S25 | PASS | "you should always verify the authenticity of Helm binaries before installing." |
| 171 | Try it | Install: verify SHA256 checksum | S25 | PASS | "Verify the SHA256 checksum to confirm the download wasn't corrupted." |
| 172 | Try it | Install: verify signature | S25 | PASS | "Verify the binary's signature." |
| 173 | Try it | Install: cross-check keys on Keybase | S25 | PASS | "You can also cross-check maintainer keys on Keybase" |
| 174 | Try it | Install script and pack download records, limits of the checks, `~/.local/bin`, npm without lockfile | none | N/A | The page's own run record and its own reading of it. |
| 175 | Try it | Step 1 commands and output; "only print versions" | none | N/A | Reader's step and run output. |
| 176 | Try it | Step 2: `helm create` made the chart directory | S9 | PASS | "This command creates a chart directory along with the common files and directories used in a chart" |
| 177 | Try it | Step 2: docs show `tests/` under `templates/` | S9 | PASS | "└── templates/ # The template files" then "└── tests/ # The test files" |
| 178 | Try it | Step 2: scaffold has more templates than docs tree | none | N/A | The page's own run output. |
| 179 | Try it | Step 2: `helm lint` emits ERROR and WARNING | S10 | PASS | "it will emit [ERROR] messages" ... "it will emit [WARNING] messages." |
| 180 | Try it | Step 3: output lines and Source lines | none | N/A | Run output. |
| 181 | Try it | Step 3: `-s` showed only that template | S11 | PASS | "-s, --show-only stringArray only show manifests rendered from the given templates" |
| 182 | Try it | Step 3: `--set` has higher precedence | S19 | PASS | "Since --set has a higher precedence than the default values.yaml file" |
| 183 | Try it | Step 3: `--dry-run=client` | S11 | PASS | "'--dry-run=client simulates the operation client-side only and avoids cluster connections." |
| 184 | Try it | Step 3: `pending-install` is a release state | S48 | PASS | "state of the release (can be: unknown, deployed, uninstalled, superseded, failed, uninstalling, pending-install, pending-upgrade or pending-rollback)" |
| 185 | Try it | Step 3: first install gives release number 1 | S7 | PASS | "After a first helm install, a release will have release number 1." |
| 186 | Try it | Step 4: schema, run output | none | N/A | The tutorial's own schema and run output. |
| 187 | Try it | Step 4: validation occurs on `helm lint` | S8 | PASS | "Validation occurs when any of the following commands are invoked: ... helm lint" |
| 188 | Try it | Step 4: validation occurs on `helm template` | S8 | PASS | "helm template" is listed in the same command list. |
| 189 | Try it | Step 5: script and results | none | N/A | The tutorial's own script and run output. |
| 190 | Try it | Step 5: `helm template` limits | S11 | PASS | "Any values that would normally be looked up or retrieved in-cluster will be faked locally." |
| 191 | Try it | Step 5: Helm test is a workload under `templates/` | S17 | PASS | "A test in a helm chart lives under the templates/ directory and is a workload definition" |
| 192 | Try it | Step 5: `helm test` runs for a deployed release | S16 | PASS | "The argument this command takes is the name of a deployed release." |
| 193 | Try it | Step 6: `helm package` makes a versioned archive | S13 | PASS | "This command packages a chart into a versioned chart archive file." |
| 194 | Try it | Step 6: chart archive is tarred and gzipped | S7 | PASS | "A chart archive is a tarred and gzipped (and optionally signed) chart." |
| 195 | Try it | Step 6: provenance files at packaging time | S22 | PASS | "Provenance files are generated at packaging time ... notably helm install --verify." |
| 196 | Try it | Step 7: three required Component fields | S28 | PASS | "spec.type [required]", "spec.lifecycle [required]", "spec.owner [required]" |
| 197 | Try it | Step 7: kind and namespace optional in a reference | S31 | PASS | "Optionally, the kind, followed by a colon" / "Optionally, the namespace, followed by a forward slash" |
| 198 | Try it | Step 7: `spec.owner` is required | S28 | PASS | "spec.owner [required]" ... "This field is required." |
| 199 | Try it | Step 7: docs allow letters and digits separated by `-`, `_`, `.` | S28 | FAIL | This is only the default: "The ruleset is configurable to fit your organization's needs, but the default behavior is as follows." Fix: "By default, the docs allow ..." |
| 200 | Try it | Step 7: backend processors validate, analyze, mutate | S30 | PASS | "Processors, that validate, analyze, and mutate the raw entity data into its final form." |
| 201 | Try it | Step 7: entity not visible until last process | S30 | PASS | "An entity is not visible to the outside world (through the catalog API), until it has passed through the last process" |
| 202 | Try it | Step 8: `pack buildpack new` made three files | S42 | PASS | "initializes a buildpack.toml, and two executable bash scripts, bin/detect and bin/build." |
| 203 | Try it | Step 8: positional arguments deprecated; lifecycle gives environment variables | S41 | PASS | "Deprecated in Buildpack API 0.8 ... The lifecycle provides these values as environment variables." |
| 204 | Try it | Step 8: script reads `CNB_LAYERS_DIR` | S41 | PASS | "CNB_LAYERS_DIR replaces the first positional argument." |
| 205 | Try it | Step 8: detect exit pass (0) or fail (100) | S41 | PASS | "Pass (0), fail (100), or error (1-99, 101+)" |
| 206 | Try it | Step 8: layer may be cached, build, launch | S41 | PASS | "(via the launch boolean)", "(via the build boolean)", "(via the cache boolean)" |
| 207 | Try it | Step 8: default start command must be set | S49 | PASS | "To make your app runnable, a default start command must be set." |
| 208 | Try it | Step 8: example path pattern | S47 | PASS | "Reading buildpack directory: /layers/example_node-engine" |
| 209 | Try it | Step 9: `pack build` requires image name | S43 | PASS | "Pack Build requires an image name" |
| 210 | Try it | Step 9: `--path` for another directory | S43 | PASS | "you can use --path to specify another source code directory" |
| 211 | Try it | Step 9: builder via `--builder` or `set-default-builder` | S43 | PASS | "either be provided directly to build using --builder, or can be set using the set-default-builder command" |
| 212 | Try it | Step 9: `--buildpack` accepts a directory path | S43 | PASS | "path to a buildpack directory (not supported on Windows)" |
| 213 | Try it | Step 9: untrusted builder, five binaries | S45 | PASS | "If pack doesn't trust a builder it will continue to execute five separate lifecycle binaries" |
| 214 | Try it | Step 9: warnings, headings, image ID, docker run, inspect output | none | N/A | The page's own run output. |
| 215 | Try it | Step 9: `pack inspect` shows information about a built app image | S44 | PASS | "Show information about a built app image" |
| 216 | Try it | Step 9: launch layer reused if same requirements | S41 | PASS | "it can be re-used on the next build ... if the component buildpack that created the layer has the same requirements on the next build" |
| 217 | Try it | Step 9: same inputs, same outputs | S40 | PASS | "Given the same inputs, two builds should produce the same outputs." |
| 218 | Tester uses | `helm lint` runs tests | S10 | PASS | "runs a series of tests to verify that the chart is well-formed." |
| 219 | Tester uses | `helm template` renders locally | S11 | PASS | "Render chart templates locally and display the output." |
| 220 | Tester uses | Schema checked on lint or template | S8 | PASS | "Validation occurs when any of the following commands are invoked: ... helm lint ... helm template" |
| 221 | Tester uses | No server-side testing | S11 | PASS | "none of the server-side testing of chart validity (e.g. whether an API is supported) is done." |
| 222 | Tester uses | Values order | S19 | PASS | "values.yaml is the default, which can be overridden by a parent chart's values.yaml, which can in turn be overridden by a user-supplied values file ... --set parameters." |
| 223 | Tester uses | `-f` more than once; right-most wins | S12 | PASS | "The priority will be given to the last (right-most) file specified." |
| 224 | Tester uses | Override with `null` removes key | S19 | PASS | "you may override the value of the key to be null, in which case Helm will remove the key from the overridden values merge." |
| 225 | Tester uses | Flat over nested | S20 | PASS | "In most cases, flat should be favored over nested." |
| 226 | Tester uses | Nested value checked at every level | S20 | PASS | "For optimal safety, a nested value must be checked at every level:" |
| 227 | Tester uses | `helm history RELEASE` | S14 | PASS | "To see revision numbers, run 'helm history RELEASE'." |
| 228 | Tester uses | History prints a formatted table | S15 | PASS | "The historical release set is printed as a formatted table" |
| 229 | Tester uses | Status contents | S48 | PASS | "state of the release", "revision of the release", "list of resources that this release consists of", "details on last test suite run, if applicable" |
| 230 | Tester uses | Rolled back release gets a new number | S7 | PASS | "a rolled back release will receive a new release number." |
| 231 | Tester uses | Secrets by default | S21 | PASS | "By default, release information is stored in Secrets in the namespace of the release." |
| 232 | Tester uses | `helm test` runs tests for a deployed release | S16 | PASS | "The test command runs the tests for a release." |
| 233 | Tester uses | Test container exits 0 | S17 | PASS | "The container should exit successfully (exit 0) for a test to be considered a success." |
| 234 | Tester uses | Chart repository | S24 | PASS | "A chart repository is an HTTP server that houses an index.yaml file and optionally some packaged charts." |
| 235 | Tester uses | OCI registry | S23 | PASS | "An OCI-based registry can contain zero or more Helm repositories and each of those repositories can contain zero or more packaged Helm charts." |
| 236 | Tester uses | Integrity by provenance record | S22 | PASS | "Integrity is established by comparing a chart to a provenance record." |
| 237 | Tester uses | Provenance contents | S7 | PASS | "A provenance contains a cryptographic hash of the chart archive file, the Chart.yaml data, and a signature block" |
| 238 | Tester uses | Provenance stored with chart | S22 | PASS | "Provenance records are stored in provenance files, which are stored alongside a packaged" chart |
| 239 | Tester uses | `myapp-1.2.3.tgz.prov` | S22 | PASS | "will be myapp-1.2.3.tgz.prov." |
| 240 | Tester uses | Catalog tracks ownership and metadata | S27 | PASS | "keeps track of ownership and metadata for all the software in your ecosystem" |
| 241 | Tester uses | Makes software and owner discoverable | S27 | PASS | "Makes all the software in your company, and who owns it, discoverable." |
| 242 | Tester uses | Owner is point of contact | S28 | PASS | "They will be the point of contact if something goes wrong" |
| 243 | Tester uses | Well-known lifecycle values | S28 | PASS | "experimental", "production", "deprecated" |
| 244 | Tester uses | Entity identified by kind, namespace, name | S31 | PASS | "Each entity in the catalog is uniquely identified by the triplet of its" kind, namespace and name |
| 245 | Tester uses | Entity not visible until last process | S30 | PASS | "An entity is not visible to the outside world (through the catalog API), until it has passed through the last process" |
| 246 | Tester uses | `pack inspect` | S44 | PASS | "Show information about a built app image" |
| 247 | Tester uses | Rebaser | S39 | PASS | "The rebaser places application layers atop a new version of the runtime base image." |
| 248 | Tester uses | SBOM definition | S46 | PASS | "A Software-Bill-of-Materials (SBOM) lists all the software components included in an image." |
| 249 | Tester uses | `pack sbom download` | S46 | PASS | "download the app layer containing the SBOM files" |
| 250 | Tester uses | SBOM formats | S46 | PASS | "in CycloneDX, Syft and Spdx formats are supported." |
| 251 | Tester uses | Reproducible builds | S40 | PASS | "aims to create "Reproducible Builds" of container images." |
| 252 | Tester uses | Untrusted builder, published lifecycle image | S45 | PASS | "It will run the more privileged phases using a published lifecycle image, if one is available." |
| 253 | Tester uses | Own-run statements (step 4, 3, 5, 7, 9) | none | N/A | Record of the page's own run. |
| 254 | Mistakes | `helm template` fakes in-cluster values | S11 | PASS | "Any values that would normally be looked up or retrieved in-cluster will be faked locally." |
| 255 | Mistakes | No server-side testing | S11 | PASS | "none of the server-side testing of chart validity" |
| 256 | Mistakes | Server-side dry run needs cluster | S11 | PASS | "'--dry-run=server' simulates/validates the operation on the server, requiring cluster connectivity." |
| 257 | Mistakes | `[ERROR]` | S10 | PASS | "it will emit [ERROR] messages" |
| 258 | Mistakes | `[WARNING]` | S10 | PASS | "it will emit [WARNING] messages." |
| 259 | Mistakes | Many releases from one chart | S7 | PASS | "A single chart may be installed many times into the same cluster, and create many different releases." |
| 260 | Mistakes | Number increments | S7 | PASS | "the release number will be incremented." |
| 261 | Mistakes | Rolled back gets new number | S7 | PASS | "a rolled back release will receive a new release number." |
| 262 | Mistakes | `--set` over values file over parent over default | S19 | PASS | "values.yaml is the default, which can be overridden by a parent chart's values.yaml ... --set parameters." |
| 263 | Mistakes | Right-most `-f` wins | S12 | PASS | "The priority will be given to the last (right-most) file specified." |
| 264 | Mistakes | `--set-string` | S12 | PASS | "to force a string value use '--set-string'." |
| 265 | Mistakes | Always verify Helm binaries | S25 | PASS | "you should always verify the authenticity of Helm binaries before installing." |
| 266 | Mistakes | Provenance tools | S22 | PASS | "Helm has provenance tools which help chart users verify the integrity and origin" |
| 267 | Mistakes | Creator with an untrusted builder | S45 | PASS | "If pack were to use the creator lifecycle phase with an untrusted builder, each of the buildpack's bin/detect and bin/build processes would run within a container that has heightened privileges or access to registry credentials." |
| 268 | Mistakes | Entity not visible until last process | S30 | PASS | "until it has passed through the last process and landed among the final entities." |
| 269 | Mistakes | Name is 1 to 63 characters | S28 | FAIL | Default only: "The ruleset is configurable ... but the default behavior is as follows." Fix: add "by default". |
| 270 | Mistakes | Name made of letters and digits, separators `-`, `_`, `.` | S28 | FAIL | Same reason: "Must consist of sequences of [a-z0-9A-Z] possibly separated by one of [-_.]" is the default. Fix: add "by default". |
| 271 | Mistakes | Positional arguments deprecated in 0.8 | S41 | PASS | "Deprecated in Buildpack API 0.8. The positional arguments to the detect and build executables are deprecated." |
| 272 | Mistakes | Detect exit status; exit 1 is an error | S41 | PASS | "Pass (0), fail (100), or error (1-99, 101+)" |
| 273 | Mistakes | Own-run statements (steps 2, 4, 7; scaffold `$1`; checksum limit) | none | N/A | Record of the page's own run and reading. |
| 274 | Can check | Callout "Tutorial advice": 10 items of the tutorial's own advice | none | PASS | The callout says "This list is the tutorial's own advice". Its tool facts (helm template does not talk to a cluster, `helm test` runs against a deployed release, signature versus checksum) are supported by rows above. |
| 275 | Key words | Graduated | none | PASS | Page sentence (What it is): "Graduated projects are highly mature, robust projects whose adopters have demonstrated their production-readiness by deploying them to production environments" |
| 276 | Key words | Chart | none | PASS | Page sentence (What it is): "A chart is a Helm package that contains information sufficient for installing a set of Kubernetes resources into a Kubernetes cluster" |
| 277 | Key words | Release | none | PASS | Page sentence (What it is): "When a chart is installed, the Helm library creates a release to track that installation" |
| 278 | Key words | Values | none | PASS | Page sentence (What it is): "Values provide a way to override template defaults with your own information" |
| 279 | Key words | Lint | none | PASS | Page sentence (How it works): "To lint a chart is to validate that it follows the conventions and requirements of the Helm chart standard" |
| 280 | Key words | Chart archive | none | PASS | Page sentence (How it works): "A chart archive is a tarred and gzipped (and optionally signed) chart" |
| 281 | Key words | Hook | none | PASS | Page sentence (How it works): "Hooks work like regular templates, but they have special annotations that cause Helm to use them differently" |
| 282 | Key words | Provenance | none | PASS | Page sentence (How it works): "Helm has provenance tools which help chart users verify the integrity and origin of a package" |
| 283 | Key words | OCI-based registry | none | PASS | Page sentence (Tester uses): "An OCI-based registry can contain zero or more Helm repositories, and each of those repositories can contain zero or more packaged Helm charts" |
| 284 | Key words | Software Catalog | none | PASS | Page sentence (What it is): "The Backstage Software Catalog is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem" |
| 285 | Key words | Entity | none | PASS | Page sentence (How it works): "Each entity in the catalog is uniquely identified by the triplet of its kind, namespace, and name" |
| 286 | Key words | Owner | none | PASS | Page sentence (How it works): "the owner of a component is the singular entity, commonly a team, that bears ultimate responsibility ..." |
| 287 | Key words | Buildpack | none | PASS | Page sentence (What it is): "A buildpack is software that transforms application source code into runnable artifacts by analyzing the code and determining the best way to build it" |
| 288 | Key words | Builder | none | PASS | Page sentence (What it is): "A builder is an OCI image that contains an ordered combination of buildpacks, a build-time base image, a lifecycle binary, and a reference to a runtime base image" |
| 289 | Key words | Platform | none | PASS | Page sentence (What it is): "A platform orchestrates builds by invoking the lifecycle binary together with buildpacks and app source code to produce a runnable OCI image" |
| 290 | Key words | Lifecycle | none | PASS | Page sentence (How it works): "The lifecycle orchestrates buildpacks, then assembles the resulting artifacts into an OCI image" |
| 291 | Key words | Layer | none | PASS | Page sentence (How it works): "A layer is a set of filesystem changes packaged according to the OCI Image Specification" |
| 292 | Key words | Rebase | none | PASS | Page sentence (How it works): "The rebaser places application layers atop a new version of the runtime base image" |
| 293 | Key words | SBOM | none | PASS | Page sentence (How it works): "A Software Bill-of-Materials (SBOM) lists all the software components included in an image" |

Open FAILs after round 6: 4

Changed after this round: Four FAILs, all on the format of a catalog entity name: the source gives the rules (1 to 63 characters, made of letters and digits, possibly separated by `-`, `_`, or `.`) as the default of a configurable ruleset. The four sentences (How it works, step 7, and two bullets of Common mistakes) now say "by default", and the page says that the rules for names are configurable. The repo claim check, read after the round, could not find two quotes of S7 that began with the name of the term (`Helm (and helm) Helm is ...` and `Chart A Helm package ...`), so they now quote the definition alone.

## Round 7 (2026-11-19)

# Fact check: devops / cncf-build-deliver (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Page summary: CNCF, three projects, practice run with no cluster or cloud account | none | N/A | Describes the page itself. |
| 2 | Lede | Page covers the CNCF and three projects; practice run needs no cluster or cloud account; one step uses Docker; links to neighbour pages | none | N/A | Describes the page itself. The links are paths, not facts. |
| 3 | What it is | CNCF hosts critical components of the global technology infrastructure | 1 | PASS | S1: "hosts critical components of the global technology infrastructure." |
| 4 | What it is | CNCF is part of the nonprofit Linux Foundation | 1 | PASS | S1: "CNCF is part of the nonprofit Linux Foundation." |
| 5 | What it is | The CNCF has a Technical Oversight Committee (TOC) | 3 | PASS | S3: "the CNCF's Technical Oversight Committee (TOC)" |
| 6 | What it is | The TOC defines 4 stages | 3 | PASS | S3: "The TOC defines 4 stages of the project lifecycle:" |
| 7 | What it is | Sandbox projects are experimental or innovative, early in development | 3 | PASS | S3: "Sandbox - Experimental or innovative projects early in their development." |
| 8 | What it is | Incubation projects are gaining adoption, focus on stability and maturity | 3 | PASS | S3: "Incubation - Projects gaining adoption, focusing on improving stability and maturity." |
| 9 | What it is | Graduated projects are highly mature, robust, proven in production | 3 | PASS | S3: "Graduated - Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments." |
| 10 | What it is | Archived projects are inactive or low activity, no longer supported or not recommended, reasons depend on project | 3 | PASS | S3: "Archived - Inactive or low activity projects that are no longer supported by the TOC or are not recommended for use due to a variety of factors (project specific)" |
| 11 | What it is | CNCF says graduated and incubating projects are stable and used in production | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 12 | What it is | Helm is the package manager for Kubernetes | 7 | PASS | S7: "Helm is the package manager for Kubernetes." |
| 13 | What it is | Helm accepted June 1, 2018 (Incubating); Graduated May 1, 2020 | 4 | PASS | S4: "Helm was accepted to CNCF on June 1, 2018 at the Incubating maturity level and then moved to the Graduated maturity level on May 1, 2020." |
| 14 | What it is | Backstage is an open source framework for building developer portals | 26 | PASS | S26: "Backstage is an open source framework for building developer portals." |
| 15 | What it is | Backstage accepted Sept 8, 2020; Incubating Mar 15, 2022 | 5 | PASS | S5: "Backstage was accepted to CNCF on September 8, 2020 and moved to the Incubating maturity level on March 15, 2022." |
| 16 | What it is | Buildpacks transform source code into images that run on any cloud | 6 | PASS | S6: "Cloud Native Buildpacks transform your application source code into images that can run on any cloud" |
| 17 | What it is | Buildpacks accepted Oct 3, 2018; Incubating Nov 18, 2020; Graduated Jul 17, 2026 | 6 | PASS | S6: "Buildpacks was accepted to CNCF on October 3, 2018, moved to the Incubating maturity level on November 18, 2020, and then moved to the Graduated maturity level on July 17, 2026." |
| 18 | What it is | Tutorial read the three CNCF pages on 2026-11-19; a maturity level can change, so read again | none | N/A | Record of the page's own practice and advice to the reader. |
| 19 | What it is | A chart is a Helm package with information sufficient to install Kubernetes resources into a cluster | 7 | PASS | S7: "A Helm package that contains information sufficient for installing a set of Kubernetes resources into a Kubernetes cluster." |
| 20 | What it is | Charts contain Chart.yaml, templates, default values (values.yaml), dependencies | 7 | PASS | S7: "Charts contain a Chart.yaml file as well as templates, default values (values.yaml), and dependencies." |
| 21 | What it is | Installing a chart makes the Helm library create a release | 7 | PASS | S7: "When a chart is installed, the Helm library creates a release to track that installation." |
| 22 | What it is | One chart may be installed many times into the same cluster, making many releases | 7 | PASS | S7: "A single chart may be installed many times into the same cluster, and create many different releases." |
| 23 | What it is | Charts may be stored on HTTP servers called chart repositories | 7 | PASS | S7: "Helm charts may be stored on dedicated HTTP servers called chart repositories" |
| 24 | What it is | Values override template defaults | 7 | PASS | S7: "Values provide a way to override template defaults with your own information." |
| 25 | What it is | Backstage Software Catalog is a centralized system tracking ownership and metadata | 27 | PASS | S27: "The Backstage Software Catalog is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem" |
| 26 | What it is | Catalog built around metadata YAML files stored with code, harvested and visualized in Backstage | 27 | PASS | S27: "metadata YAML files stored together with the code, which are then harvested and visualized in Backstage." |
| 27 | What it is | Out of the box Backstage includes Software Templates and TechDocs | 26 | PASS | S26: "Out of the box, Backstage includes:" ... "Backstage Software Templates" ... "Backstage TechDocs" |
| 28 | What it is | A buildpack transforms source code into runnable artifacts by analyzing the code and finding the best build | 34 | PASS | S34: "A buildpack is software that transforms application source code into runnable artifacts by analyzing the code and determining the best way to build it." |
| 29 | What it is | A builder is an OCI image with ordered buildpacks, build-time base image, lifecycle binary, run image reference | 35 | PASS | S35: "an ordered combination of buildpacks and a build-time base image, a lifecycle binary, and a reference to a runtime base image." |
| 30 | What it is | A platform orchestrates builds by invoking lifecycle binary with buildpacks and source to make a runnable OCI image | 36 | PASS | S36: "A platform orchestrates builds by invoking the lifecycle binary together with buildpacks and app source code to produce a runnable OCI image." |
| 31 | What it is | The Pack CLI is one such platform | 36 | PASS | S36: "A local CLI tool that uses buildpacks to create OCI images. One such tool is the Pack CLI" |
| 32 | What it is | Tutorial uses `pack` for that reason | none | N/A | The tutorial's own choice. |
| 33 | How it works | A chart is a collection of files describing a related set of Kubernetes resources | 8 | PASS | S8: "A chart is a collection of files that describe a related set of Kubernetes resources." |
| 34 | How it works | Charts are files laid out in a particular directory tree | 8 | PASS | S8: "Charts are created as files laid out in a particular directory tree." |
| 35 | How it works | `helm create` creates a chart directory with common files and directories | 9 | PASS | S9: "This command creates a chart directory along with the common files and directories used in a chart." |
| 36 | How it works | Example tree: Chart.yaml, values.yaml, charts/, templates/ with the stated meanings | 9 | PASS | S9: "Chart.yaml # Information about your chart", "values.yaml # The default values for your templates", "charts/ # Charts that this chart depends on", "templates/ # The template files" |
| 37 | How it works | Every chart must have a Chart.yaml | 7 | PASS | S7: "Every chart must have this file." |
| 38 | How it works | Charts use SemVer 2; version number required | 7 | PASS | S7: "Charts are versioned according to the SemVer 2 spec. A version number is required on every chart." |
| 39 | How it works | A chart archive is tarred and gzipped (optionally signed) | 7 | PASS | S7: "A chart archive is a tarred and gzipped (and optionally signed) chart." |
| 40 | How it works | Values override template defaults | 7 | PASS | S7: "Values provide a way to override template defaults with your own information." |
| 41 | How it works | A chart developer may expose configuration overridable at install time | 7 | PASS | S7: "the chart developer may expose configuration that can be overridden at installation time." |
| 42 | How it works | Order of specificity: values.yaml, parent chart, user values file, --set | 19 | PASS | S19: "values.yaml is the default, which can be overridden by a parent chart's values.yaml, which can in turn be overridden by a user-supplied values file, which can in turn be overridden by --set parameters." |
| 43 | How it works | `--values`/`-f` may be repeated; last, right-most file wins | 12 | PASS | S12: "You can specify the '--values'/'-f' flag multiple times. The priority will be given to the last (right-most) file specified." |
| 44 | How it works | Use `--set-string` to force a string | 12 | PASS | S12: "to force a string value use '--set-string'." |
| 45 | How it works | Variable names start lowercase, camelcase words | 20 | PASS | S20: "Variable names should begin with a lowercase letter, and words should be separated with camelcase:" |
| 46 | How it works | In most cases flat is favored over nested | 20 | PASS | S20: "In most cases, flat should be favored over nested." |
| 47 | How it works | `helm template` renders templates locally and displays output | 11 | PASS | S11: "Render chart templates locally and display the output." |
| 48 | How it works | In-cluster lookups are faked locally | 11 | PASS | S11: "Any values that would normally be looked up or retrieved in-cluster will be faked locally." |
| 49 | How it works | No server-side chart validity testing | 11 | PASS | S11: "none of the server-side testing of chart validity (e.g. whether an API is supported) is done." |
| 50 | How it works | `--dry-run=client` client side only, avoids cluster connections | 11 | PASS | S11: "'--dry-run=client simulates the operation client-side only and avoids cluster connections." |
| 51 | How it works | `--dry-run=server` validates on the server, needs cluster connectivity | 11 | PASS | S11: "'--dry-run=server' simulates/validates the operation on the server, requiring cluster connectivity." |
| 52 | How it works | `helm install` installs a chart archive | 12 | PASS | S12: "This command installs a chart archive." |
| 53 | How it works | Install argument: chart reference, packaged chart path, unpacked directory path, or URL | 12 | PASS | S12: "The install argument must be a chart reference, a path to a packaged chart, a path to an unpacked chart directory or a URL." |
| 54 | How it works | To lint a chart is to validate it follows Helm chart standard | 7 | PASS | S7: "To lint a chart is to validate that it follows the conventions and requirements of the Helm chart standard." |
| 55 | How it works | `helm lint` takes a chart path and runs tests that it is well-formed | 10 | PASS | S10: "This command takes a path to a chart and runs a series of tests to verify that the chart is well-formed." |
| 56 | How it works | Emits `[ERROR]` for things that fail installation | 10 | PASS | S10: "If the linter encounters things that will cause the chart to fail installation, it will emit [ERROR] messages." |
| 57 | How it works | Emits `[WARNING]` for convention breaks | 10 | PASS | S10: "If it encounters issues that break with convention or recommendation, it will emit [WARNING] messages." |
| 58 | How it works | Schema defined in `values.schema.json` | 8 | PASS | S8: "This can be done by defining a schema in the values.schema.json file." |
| 59 | How it works | Schema is a JSON Schema | 8 | PASS | S8: "A schema is represented as a JSON Schema." |
| 60 | How it works | Validation on install, upgrade, lint, template | 8 | PASS | S8: "Validation occurs when any of the following commands are invoked:" then "helm install", "helm upgrade", "helm lint", "helm template" |
| 61 | How it works | After first install, release number is 1 | 7 | PASS | S7: "After a first helm install, a release will have release number 1." |
| 62 | How it works | Release number increments on upgrade or rollback | 7 | PASS | S7: "Each time a release is upgraded or rolled back, the release number will be incremented." |
| 63 | How it works | Stored history lets a release roll back with `helm rollback` | 7 | PASS | S7: "since release history is stored, a release can also be rolled back to a previous release number. This is done with the helm rollback command." |
| 64 | How it works | A rolled back release gets a new release number | 7 | PASS | S7: "a rolled back release will receive a new release number." |
| 65 | How it works | `helm rollback` takes release name and revision number | 14 | PASS | S14: "The first argument of the rollback command is the name of a release, and the second is a revision (version) number." |
| 66 | How it works | Revision omitted or 0 rolls back to previous release | 14 | PASS | S14: "If this argument is omitted or set to 0, it will roll back to the previous release." |
| 67 | How it works | `helm history RELEASE` shows revision numbers | 14 | PASS | S14: "To see revision numbers, run 'helm history RELEASE'." |
| 68 | How it works | `helm history` default max 256 revisions | 15 | PASS | S15: "A default maximum of 256 revisions will be returned." |
| 69 | How it works | Release info stored in Secrets in release namespace by default | 21 | PASS | S21: "By default, release information is stored in Secrets in the namespace of the release." |
| 70 | How it works | `HELM_DRIVER` can select another backend | 21 | PASS | S21: "This configuration is based on the HELM_DRIVER environment variable. It can be set to one of the values: [configmap, secret, sql]." |
| 71 | How it works | A chart test lives under `templates/` | 17 | PASS | S17: "A test in a helm chart lives under the templates/ directory" |
| 72 | How it works | It is a workload definition (Pod or Job) with a container and command | 17 | PASS | S17: "is a workload definition (commonly a Pod or Job) that specifies a container with a given command to run." |
| 73 | How it works | Container should exit 0 for success | 17 | PASS | S17: "The container should exit successfully (exit 0) for a test to be considered a success." |
| 74 | How it works | Definition must contain `helm.sh/hook: test` | 17 | PASS | S17: "The definition must contain the helm test hook annotation: helm.sh/hook: test." |
| 75 | How it works | `helm test` runs tests for a release | 16 | PASS | S16: "The test command runs the tests for a release." |
| 76 | How it works | Argument is name of a deployed release | 16 | PASS | S16: "The argument this command takes is the name of a deployed release." |
| 77 | How it works | Tests are defined in the installed chart | 16 | PASS | S16: "The tests to be run are defined in the chart that was installed." |
| 78 | How it works | Hooks are like templates with special annotations | 18 | PASS | S18: "Hooks work like regular templates, but they have special annotations that cause Helm to utilize them differently." |
| 79 | How it works | Two install hooks: `pre-install`, `post-install` | 18 | PASS | S18: "Helm defines two hooks for the install lifecycle: pre-install and post-install." |
| 80 | How it works | `helm package` makes a versioned chart archive | 13 | PASS | S13: "This command packages a chart into a versioned chart archive file." |
| 81 | How it works | Given a path, it looks there for a chart that must contain Chart.yaml | 13 | PASS | S13: "If a path is given, this will look at that path for a chart (which must contain a Chart.yaml file)" |
| 82 | How it works | Versioned archives used by package repositories | 13 | PASS | S13: "Versioned chart archives are used by Helm package repositories." |
| 83 | How it works | Sign with `--sign` | 13 | PASS | S13: "To sign a chart, use the '--sign' flag." |
| 84 | How it works | Provenance tools help verify integrity and origin | 22 | PASS | S22: "Helm has provenance tools which help chart users verify the integrity and origin" |
| 85 | How it works | Provenance files made at packaging time, checked by several commands, notably `helm install --verify` | 22 | PASS | S22: "Provenance files are generated at packaging time (helm package --sign ...), and can be checked by multiple commands, notably helm install --verify." |
| 86 | How it works | Chart repository is an HTTP server with `index.yaml` and optionally packaged charts | 24 | PASS | S24: "A chart repository is an HTTP server that houses an index.yaml file and optionally some packaged charts." |
| 87 | How it works | Helm docs recommend OCI container registries for chart packages | 23 | PASS | S23: "It is recommended to use container registries with OCI support to store and share chart packages." |
| 88 | How it works | Docs recommend naming descriptor `catalog-info.yaml` | 28 | PASS | S28: "we recommend that you name them catalog-info.yaml." |
| 89 | How it works | Descriptor files are YAML for easier maintenance | 28 | PASS | S28: "the descriptor files are on YAML format to be more easily maintainable by humans." |
| 90 | How it works | `kind` is the high level entity type | 28 | PASS | S28: "The kind is the high level entity type being described." |
| 91 | How it works | `apiVersion` is the spec format version | 28 | PASS | S28: "The apiVersion is the version of specification format for that particular entity that the specification is made against." |
| 92 | How it works | Name unique per kind within namespace at any time | 28 | PASS | S28: "Names must be unique per kind, within a given namespace (if specified), at any point in time." |
| 93 | How it works | Default name: 1 to 63 chars, letters and digits, separated by `-`, `_`, `.` | 28 | PASS | S28: "Strings of length at least 1, and at most 63 Must consist of sequences of [a-z0-9A-Z] possibly separated by one of [-_.]" |
| 94 | How it works | Name rules are configurable | 28 | PASS | S28: "The ruleset is configurable to fit your organization's needs" |
| 95 | How it works | Component requires `spec.type`, `spec.lifecycle`, `spec.owner` | 28 | PASS | S28: "spec.type [required]", "spec.lifecycle [required]", "spec.owner [required]" |
| 96 | How it works | Owner is the singular entity (often a team) with ultimate responsibility | 28 | PASS | S28: "the owner of a component is the singular entity (commonly a team) that bears ultimate responsibility for the component, and has the authority and capability to develop and maintain it." |
| 97 | How it works | Owner is the point of contact | 28 | PASS | S28: "They will be the point of contact if something goes wrong, or if features are to be requested." |
| 98 | How it works | Catalog accepts any lifecycle value; take care with taxonomy | 28 | PASS | S28: "The software catalog accepts any lifecycle value, but an organization should take great care to establish a proper taxonomy for these." |
| 99 | How it works | `experimental` means experiment or early non-production | 28 | PASS | S28: "experimental - an experiment or early, non-production component" |
| 100 | How it works | `production` means established, owned, maintained | 28 | PASS | S28: "production - an established, owned, maintained component" |
| 101 | How it works | Components are individual pieces of software | 29 | PASS | S29: "Components are individual pieces of software" |
| 102 | How it works | APIs are boundaries between components | 29 | PASS | S29: "APIs are the boundaries between different components" |
| 103 | How it works | Resources are infrastructure needed to run a component | 29 | PASS | S29: "Resources are physical or virtual infrastructure needed to operate a" |
| 104 | How it works | A user describes a person | 29 | PASS | S29: "A user describes a person, such as an employee, a contractor, or similar." |
| 105 | How it works | A group describes an organizational entity | 29 | PASS | S29: "A group describes an organizational entity, such as for example a team," ... "or a loose collection of people in an interest group." |
| 106 | How it works | Entity identified by kind, namespace, name | 31 | PASS | S31: "Each entity in the catalog is uniquely identified by the triplet of its kind, namespace, and name." |
| 107 | How it works | String reference: one to three parts in order | 31 | PASS | S31: "composed of between one and three parts in this specific order, without any additional encoding: Optionally, the kind, followed by a colon Optionally, the namespace, followed by a forward slash The name" |
| 108 | How it works | Catalog is a hub: ingest, database, processing, API | 30 | PASS | S30: "where entities are ingested from various authoritative sources and held in a database, subject to automated processing, and then presented through an API" |
| 109 | How it works | Ingestion: providers fetch raw data into the database | 30 | PASS | S30: "Ingestion, where entity providers fetch raw entity data from external sources and seed it into the database," |
| 110 | How it works | Processing: policies and processors treat data continually | 30 | PASS | S30: "Processing, where the policies and processors continually treat the ingested data" |
| 111 | How it works | Policies set baseline rules on entity shape | 30 | PASS | S30: "Policies, that establish baseline rules about the shape of entities," |
| 112 | How it works | Processors validate, analyze, mutate raw data | 30 | PASS | S30: "Processors, that validate, analyze, and mutate the raw entity data into its final form." |
| 113 | How it works | Stitching assembles processor output into final entity | 30 | PASS | S30: "Stitching, where all of the data emitted by various processors are assembled together into the final output entity." |
| 114 | How it works | Entity not visible via API until it passes the last process | 30 | PASS | S30: "An entity is not visible to the outside world (through the catalog API), until it has passed through the last process and landed among the final entities." |
| 115 | How it works | By default Software Templates load skeletons, fill variables, publish to GitHub or GitLab | 32 | PASS | S32: "By default, it has the ability to load skeletons of code, template in some variables, and then publish the template to some locations like GitHub or GitLab." |
| 116 | How it works | TechDocs is Spotify's docs-like-code solution in Backstage | 33 | PASS | S33: "TechDocs is Spotify's homegrown docs-like-code solution built directly into Backstage." |
| 117 | How it works | Engineers write docs in Markdown beside code | 33 | PASS | S33: "Engineers write their documentation in Markdown files which live together with their code" |
| 118 | How it works | Little configuration gives a doc site | 33 | PASS | S33: "with little configuration get a nice-looking doc site in Backstage." |
| 119 | How it works | Lifecycle orchestrates buildpacks, then assembles an OCI image | 37 | PASS | S37: "The lifecycle orchestrates buildpacks, then assembles the resulting artifacts into an OCI image" |
| 120 | How it works | Image build requires 5 phases | 37 | PASS | S37: "An image build requires 5 lifecycle phases, as shown below:" |
| 121 | How it works | Phases: detect, analyze, restore, build, export | 45 | PASS | S45: "five separate lifecycle binaries: detect, analyze, restore, build and export." |
| 122 | How it works | Analyzer, restorer, exporter need an image repository (OCI registry or Docker-compliant daemon) | 37 | PASS | S37: "require access to an image repository - either an OCI registry or Docker-compliant daemon" |
| 123 | How it works | These phases run in separate containers for hardening | 37 | PASS | S37: "For security hardening, these phases run in separate containers to avoid exposing sensitive data to buildpacks." |
| 124 | How it works | Detector and builder invoke buildpacks | 37 | PASS | S37: "The detector and builder (shown in purple above) invoke buildpacks" |
| 125 | How it works | Lifecycle and buildpacks run as non-root | 37 | PASS | S37: "both the lifecycle and buildpacks run as non-root users when doing this work." |
| 126 | How it works | Trusted builder: all 5 phases in one container with creator | 37 | PASS | S37: "When a builder is trusted, all 5 lifecycle phases can be run in the same container, and in this case the creator binary is used" |
| 127 | How it works | Detector finds an ordered group of buildpacks | 38 | PASS | S38: "The detector finds an ordered group of buildpacks to use during the build phase." |
| 128 | How it works | Reads `order.toml`, takes first passing group | 38 | PASS | S38: "The detector reads the order.toml and looks for the first group that passes the detection process." |
| 129 | How it works | All groups fail means detection fails | 38 | PASS | S38: "If all of the groups fail, the detection process fails." |
| 130 | How it works | Pass needs required detect scripts exit 0 | 38 | PASS | S38: "The detect scripts of all required buildpacks must pass successfully (the exit code is zero)." |
| 131 | How it works | Detector must also build a plan with all requirements | 38 | PASS | S38: "The detector should be able to create a build plan (to be written in the plan.toml) with all of the requirements of the group's buildpacks." |
| 132 | How it works | First passing group to `group.toml`; plan to `plan.toml` | 38 | PASS | S38: "The first group that passes both steps is written to group.toml and its build plan is written to plan.toml." |
| 133 | How it works | Component buildpack has `/bin/detect` and `/bin/build` | 41 | PASS | S41: "A component buildpack is a buildpack containing /bin/detect and /bin/build executables." |
| 134 | How it works | `pack buildpack new` generates scaffolding | 42 | PASS | S42: "buildpack new generates the basic scaffolding of a buildpack repository." |
| 135 | How it works | It creates `buildpack.toml`, `bin/detect`, `bin/build` | 42 | PASS | S42: "initializes a buildpack.toml, and two executable bash scripts, bin/detect and bin/build." |
| 136 | How it works | Spec: `/bin/detect` exit pass 0, fail 100, error 1-99, 101+ | 41 | PASS | S41: "Pass (0), fail (100), or error (1-99, 101+)" |
| 137 | How it works | Spec: `/bin/build` success 0 or failure 1+ | 41 | PASS | S41: "Success (0) or failure (1+)" |
| 138 | How it works | `CNB_LAYERS_DIR` is the absolute path of the layers directory | 41 | PASS | S41: "$CNB_LAYERS_DIR" ... "Absolute path of the buildpack layers directory" |
| 139 | How it works | A build can write `launch.toml` with app metadata there | 41 | PASS | S41: "$CNB_LAYERS_DIR/launch.toml" ... "App metadata (see launch.toml)" |
| 140 | How it works | Positional args deprecated in API 0.8; lifecycle gives env vars | 41 | PASS | S41: "Deprecated in Buildpack API 0.8. The positional arguments to the detect and build executables are deprecated. The lifecycle provides these values as environment variables." |
| 141 | How it works | A layer is filesystem changes per the OCI Image Spec | 41 | PASS | S41: "A layer is a set of filesystem changes packaged according to the OCI Image Specification." |
| 142 | How it works | A layer directory is made by a component buildpack with build/runtime dependencies | 41 | PASS | S41: "A layer directory is a directory created by a component buildpack that contains build and/or runtime dependencies" |
| 143 | How it works | Spec names three layer types | 41 | PASS | S41: "There are three layer types:" |
| 144 | How it works | Launch layer is added to the exported image | 41 | PASS | S41: "a launch layer is added as a layer in the exported OCI image" |
| 145 | How it works | Cache layer is saved; contents may be restored next build | 41 | PASS | S41: "a cache layer is saved to the cache and its contents may be restored on the next build" |
| 146 | How it works | Build layer's child directory paths join the environment for later buildpacks | 41 | PASS | S41: "a build layer contains child directories with paths that are added to the environment (e.g., PATH, LD_LIBRARY_PATH, etc.) for subsequent buildpacks in the same build" |
| 147 | How it works | Docs example: `example/node-engine` layers in `/layers/example_node-engine` | 47 | PASS | S47: "Reading buildpack directory: /layers/example_node-engine" and "example/node-engine 0.0.5" |
| 148 | How it works | `pack build` creates a runnable app image from source | 43 | PASS | S43: "Pack Build uses Cloud Native Buildpacks to create a runnable app image from source code." |
| 149 | How it works | It requires an image name | 43 | PASS | S43: "Pack Build requires an image name" |
| 150 | How it works | Defaults to current directory; `--path` for another | 43 | PASS | S43: "Build defaults to the current directory, but you can use --path to specify another source code directory." |
| 151 | How it works | Requires a builder via `--builder` or `set-default-builder` | 43 | PASS | S43: "Build requires a builder, which can either be provided directly to build using --builder, or can be set using the set-default-builder command." |
| 152 | How it works | `--buildpack` accepts a path to a buildpack directory among other forms | 43 | PASS | S43: "Buildpack to use. One of: a buildpack by id and version ..., path to a buildpack directory (not supported on Windows), path/URL to a buildpack .tar or .tgz file, or a packaged buildpack image name" |
| 153 | How it works | `pack inspect` shows info about a built app image | 44 | PASS | S44: "Show information about a built app image" |
| 154 | How it works | From pack 0.11.0, pack can identify trusted builders | 45 | PASS | S45: "From version 0.11.0 onward, pack can be used to identify builders that should be considered trusted." |
| 155 | How it works | Trusted builder: single binary called the creator | 45 | PASS | S45: "When pack considers a builder to be trusted, pack build operations will use a single lifecycle binary called the creator." |
| 156 | How it works | Untrusted: five separate binaries | 45 | PASS | S45: "If pack doesn't trust a builder it will continue to execute five separate lifecycle binaries" |
| 157 | How it works | Docs: choice balances security and performance | 45 | PASS | S45: "This choice strikes a balance between security and performance." |
| 158 | How it works | Untrusted: privileged phases use a published lifecycle image if available | 45 | PASS | S45: "It will run the more privileged phases using a published lifecycle image (opens in a new tab), if one is available." |
| 159 | How it works | Analyze, restore, export need more privilege or sensitive data | 45 | PASS | S45: "The analyze, restore and export phases of the lifecycle require higher levels of privilege or access to sensitive data that is not required by the detect and build phases." |
| 160 | How it works | Creator with untrusted builder: detect/build run with heightened privileges or registry credentials | 45 | PASS | S45: "each of the buildpack's bin/detect and bin/build processes would run within a container that has heightened privileges or access to registry credentials." |
| 161 | How it works | Rebaser puts app layers atop a new runtime base image | 39 | PASS | S39: "The rebaser places application layers atop a new version of the runtime base image." |
| 162 | How it works | Project aims for "Reproducible Builds" | 40 | PASS | S40: "The Cloud Native Buildpacks project aims to create "Reproducible Builds" of container images." |
| 163 | How it works | Same inputs give same outputs | 40 | PASS | S40: "Given the same inputs, two builds should produce the same outputs." |
| 164 | How it works | SBOM lists all software components in an image | 46 | PASS | S46: "A Software-Bill-of-Materials (SBOM) lists all the software components included in an image." |
| 165 | How it works | Buildpacks can populate SBOM info | 46 | PASS | S46: "Buildpacks can populate SBOM information about the dependencies they have provided." |
| 166 | How it works | `pack sbom download` downloads app layer with SBOM files to `./layers/sbom/...` | 46 | PASS | S46: "The following command will download the app layer containing the SBOM files to ./layers/sbom/... on your local filesystem." |
| 167 | Try it | Intro: run date, versions, own shell, empty HOME, `/work` | none | N/A | Record of the page's own run. |
| 168 | Try it | Helm steps local only; images and volumes added and removed; runner rules; home folder | none | N/A | Record of the page's own run. |
| 169 | Try it | Choices that no source gives are the tutorial's own; list of things not run | none | N/A | The page's own choices and scope. |
| 170 | Try it | Install: each Helm release includes cryptographic signatures that confirm binary built and signed by maintainers | 25 | PASS | S25: "Each Helm release includes cryptographic signatures that confirm the binary was built and signed by Helm maintainers." |
| 171 | Try it | Install: always verify authenticity before installing | 25 | PASS | S25: "you should always verify the authenticity of Helm binaries before installing." |
| 172 | Try it | Install: verify SHA256 checksum | 25 | PASS | S25: "Verify the SHA256 checksum to confirm the download wasn't corrupted." |
| 173 | Try it | Install: verify the binary's signature | 25 | PASS | S25: "Verify the binary's signature." |
| 174 | Try it | Install: cross-check maintainer keys on Keybase | 25 | PASS | S25: "You can also cross-check maintainer keys on Keybase" |
| 175 | Try it | Install script runs for Helm and pack (hashes, keys, `~/.local/bin`, npm without lockfile) | none | N/A | Record of the page's own run and choices. |
| 176 | Try it | Step 1: commands and output | none | N/A | Reader step and record of the run. |
| 177 | Try it | Step 2: `helm create` made `qa-demo` with common files | 9 | PASS | S9: "creates a chart directory along with the common files and directories used in a chart." |
| 178 | Try it | Step 2: docs show `tests/` under `templates/` | 9 | PASS | S9: "└── templates/ # The template files" then "└── tests/ # The test files" |
| 179 | Try it | Step 2: scaffold has more templates (hpa, httproute, ingress) than docs tree | none | N/A | Record of what the run created. |
| 180 | Try it | Step 2: docs say lint emits `[ERROR]` and `[WARNING]` | 10 | PASS | S10: "it will emit [ERROR] messages" ... "it will emit [WARNING] messages." |
| 181 | Try it | Step 3: four `# Source:` lines printed | none | N/A | Record of the run. |
| 182 | Try it | Step 3: `-s templates/deployment.yaml` showed only that template | 11 | PASS | S11: "-s, --show-only stringArray only show manifests rendered from the given templates" |
| 183 | Try it | Step 3: `--set` has higher precedence than default values.yaml | 19 | PASS | S19: "Since --set has a higher precedence than the default values.yaml file" |
| 184 | Try it | Step 3: `--dry-run=client` client side only | 11 | PASS | S11: "'--dry-run=client simulates the operation client-side only and avoids cluster connections." |
| 185 | Try it | Step 3: `pending-install` is a release status state | 48 | PASS | S48: "state of the release (can be: unknown, deployed, uninstalled, superseded, failed, uninstalling, pending-install, pending-upgrade or pending-rollback)" |
| 186 | Try it | Step 3: first install gives release number 1 | 7 | PASS | S7: "After a first helm install, a release will have release number 1." |
| 187 | Try it | Step 4: schema is the tutorial's own; run results | none | N/A | Own choice and record of the run. |
| 188 | Try it | Step 4: validation occurs when `helm lint` is invoked | 8 | PASS | S8: "Validation occurs when any of the following commands are invoked:" ... "helm lint" |
| 189 | Try it | Step 4: validation also occurs when `helm template` is invoked | 8 | PASS | S8: "helm template" in the same list. |
| 190 | Try it | Step 5: script is the tutorial's own; first and second run results | none | N/A | Own script and record. |
| 191 | Try it | Step 5: `helm template` limits (faked lookups, no server-side testing) | 11 | PASS | S11: "faked locally. Additionally, none of the server-side testing of chart validity (e.g. whether an API is supported) is done." |
| 192 | Try it | Step 5: Helm test lives under `templates/` as a workload definition | 17 | PASS | S17: "lives under the templates/ directory and is a workload definition" |
| 193 | Try it | Step 5: `helm test` runs it for a deployed release | 16 | PASS | S16: "The argument this command takes is the name of a deployed release." |
| 194 | Try it | Step 5: tutorial did not run `helm test` | none | N/A | Record of the run. |
| 195 | Try it | Step 6: `helm package` makes a versioned archive | 13 | PASS | S13: "This command packages a chart into a versioned chart archive file." |
| 196 | Try it | Step 6: chart archive is tarred and gzipped (optionally signed) | 7 | PASS | S7: "A chart archive is a tarred and gzipped (and optionally signed) chart." |
| 197 | Try it | Step 6: lint on the archive, archive contents, no `--sign` | none | N/A | Record of the run. |
| 198 | Try it | Step 6: provenance files at packaging time, checked by `helm install --verify` | 22 | PASS | S22: "Provenance files are generated at packaging time (helm package --sign ...), and can be checked by multiple commands, notably helm install --verify." |
| 199 | Try it | Step 7: three files, `validate.mjs`, npm install, outputs | none | N/A | Own files, own script, and record. |
| 200 | Try it | Step 7: Component requires `spec.type`, `spec.lifecycle`, `spec.owner` | 28 | PASS | S28: "spec.type [required]" "spec.lifecycle [required]" "spec.owner [required]" |
| 201 | Try it | Step 7: reference has three parts; kind and namespace optional | 31 | PASS | S31: "Optionally, the kind, followed by a colon Optionally, the namespace, followed by a forward slash The name" |
| 202 | Try it | Step 7: `spec.owner` field is required | 28 | PASS | S28: "spec.owner [required]" ... "This field is required." |
| 203 | Try it | Step 7: by default docs allow letters and digits separated by `-`, `_`, `.` | 28 | PASS | S28: "Must consist of sequences of [a-z0-9A-Z] possibly separated by one of [-_.]" |
| 204 | Try it | Step 7: script printed exit 1; script checks shape only | none | N/A | Record of the run. |
| 205 | Try it | Step 7: processors validate, analyze, mutate raw data | 30 | PASS | S30: "Processors, that validate, analyze, and mutate the raw entity data into its final form." |
| 206 | Try it | Step 7: entity not visible via API until last process | 30 | PASS | S30: "An entity is not visible to the outside world (through the catalog API), until it has passed through the last process" |
| 207 | Try it | Step 8: files, scripts, outputs | none | N/A | Own scripts and record. |
| 208 | Try it | Step 8: `pack buildpack new` made `buildpack.toml`, `bin/detect`, `bin/build` | 42 | PASS | S42: "initializes a buildpack.toml, and two executable bash scripts, bin/detect and bin/build." |
| 209 | Try it | Step 8: positional args deprecated in API 0.8; env vars instead | 41 | PASS | S41: "Deprecated in Buildpack API 0.8." "The lifecycle provides these values as environment variables." The script's own `CNB_LAYERS_DIR` choice is the tutorial's. |
| 210 | Try it | Step 8: spec detect exit pass (0) or fail (100) | 41 | PASS | S41: "Pass (0), fail (100), or error (1-99, 101+)" |
| 211 | Try it | Step 8: build script run result | none | N/A | Record of the run. |
| 212 | Try it | Step 8: layer may say cached, build, launch | 41 | PASS | S41: "should be available to the app (via the launch boolean)" "(via the build boolean)" "(via the cache boolean)" |
| 213 | Try it | Step 8: default start command must be set to make an app runnable | 49 | PASS | S49: "To make your app runnable, a default start command must be set." |
| 214 | Try it | Step 8: path follows the docs example `/layers/example_node-engine` | 47 | PASS | S47: "Reading buildpack directory: /layers/example_node-engine" |
| 215 | Try it | Step 9: `pack build` requires an image name | 43 | PASS | S43: "Pack Build requires an image name" |
| 216 | Try it | Step 9: `--path` specifies another source directory | 43 | PASS | S43: "you can use --path to specify another source code directory." |
| 217 | Try it | Step 9: requires a builder, `--builder` or `set-default-builder` | 43 | PASS | S43: "provided directly to build using --builder, or can be set using the set-default-builder command." |
| 218 | Try it | Step 9: `--buildpack` accepts a path to a buildpack directory | 43 | PASS | S43: "path to a buildpack directory (not supported on Windows)" |
| 219 | Try it | Step 9: untrusted builder runs five separate lifecycle binaries | 45 | PASS | S45: "it will continue to execute five separate lifecycle binaries" |
| 220 | Try it | Step 9: warnings, detector line, docker run output | none | N/A | Record of the run. |
| 221 | Try it | Step 9: `pack inspect` shows info about a built app image | 44 | PASS | S44: "Show information about a built app image" |
| 222 | Try it | Step 9: launch layer re-used if same requirements | 41 | PASS | S41: "it can be re-used on the next build (the lifecycle can avoid re-uploading it) if the component buildpack that created the layer has the same requirements on the next build" |
| 223 | Try it | Step 9: same inputs give same outputs | 40 | PASS | S40: "Given the same inputs, two builds should produce the same outputs." |
| 224 | Try it | Step 9: both builds printed the same image ID | none | N/A | Record of the run. |
| 225 | How a tester uses it | `helm lint` runs a series of tests for well-formedness | 10 | PASS | S10: "runs a series of tests to verify that the chart is well-formed." |
| 226 | How a tester uses it | Step 4 lint exit 1 on bad value; step 3 replicas; `render_test.sh` uses grep | none | N/A | Record of the page's own run. |
| 227 | How a tester uses it | `helm template` renders locally and displays output | 11 | PASS | S11: "Render chart templates locally and display the output." |
| 228 | How a tester uses it | Schema checked when `helm lint` or `helm template` runs | 8 | PASS | S8: "Validation occurs when any of the following commands are invoked:" ... "helm lint" "helm template" |
| 229 | How a tester uses it | `helm template` does no server-side testing | 11 | PASS | S11: "none of the server-side testing of chart validity (e.g. whether an API is supported) is done." |
| 230 | How a tester uses it | Values order of specificity | 19 | PASS | S19: "values.yaml is the default, which can be overridden by a parent chart's values.yaml ... --set parameters." |
| 231 | How a tester uses it | `-f` more than once: last, right-most wins | 12 | PASS | S12: "The priority will be given to the last (right-most) file specified." |
| 232 | How a tester uses it | Step 3: one `--set` changed replicas 1 to 3 | none | N/A | Record of the run. |
| 233 | How a tester uses it | Override a key with `null` to remove it from merged values | 19 | PASS | S19: "you may override the value of the key to be null, in which case Helm will remove the key from the overridden values merge." |
| 234 | How a tester uses it | In most cases flat over nested | 20 | PASS | S20: "In most cases, flat should be favored over nested." |
| 235 | How a tester uses it | For optimal safety a nested value must be checked at every level | 20 | PASS | S20: "For optimal safety, a nested value must be checked at every level:" |
| 236 | How a tester uses it | `helm history RELEASE` shows revision numbers | 14 | PASS | S14: "To see revision numbers, run 'helm history RELEASE'." |
| 237 | How a tester uses it | History prints as a formatted table | 15 | PASS | S15: "The historical release set is printed as a formatted table" |
| 238 | How a tester uses it | Release status has state, revision, resources, last test suite details | 48 | PASS | S48: "state of the release", "revision of the release", "list of resources that this release consists of", "details on last test suite run, if applicable" |
| 239 | How a tester uses it | A rolled back release gets a new release number | 7 | PASS | S7: "a rolled back release will receive a new release number." |
| 240 | How a tester uses it | Release info in Secrets by default | 21 | PASS | S21: "By default, release information is stored in Secrets in the namespace of the release." |
| 241 | How a tester uses it | `helm test` runs tests for a deployed release | 16 | PASS | S16: "The argument this command takes is the name of a deployed release." |
| 242 | How a tester uses it | Test container should exit 0 | 17 | PASS | S17: "The container should exit successfully (exit 0)" |
| 243 | How a tester uses it | Chart repository is an HTTP server with `index.yaml` | 24 | PASS | S24: "A chart repository is an HTTP server that houses an index.yaml file and optionally some packaged charts." |
| 244 | How a tester uses it | OCI registry holds zero or more repositories, each with zero or more charts | 23 | PASS | S23: "An OCI-based registry can contain zero or more Helm repositories and each of those repositories can contain zero or more packaged Helm charts." |
| 245 | How a tester uses it | Integrity is set by comparing a chart to a provenance record | 22 | PASS | S22: "Integrity is established by comparing a chart to a provenance record." |
| 246 | How a tester uses it | Provenance holds hash of archive, Chart.yaml data, signature block | 7 | PASS | S7: "A provenance contains a cryptographic hash of the chart archive file, the Chart.yaml data, and a signature block" |
| 247 | How a tester uses it | Provenance records are in files beside the packaged chart | 22 | PASS | S22: "Provenance records are stored in provenance files, which are stored alongside a packaged chart." |
| 248 | How a tester uses it | `myapp-1.2.3.tgz` has provenance `myapp-1.2.3.tgz.prov` | 22 | PASS | S22: "will be myapp-1.2.3.tgz.prov." (the line before names the chart `myapp-1.2.3.tgz`) |
| 249 | How a tester uses it | Tutorial did not sign a chart | none | N/A | Record of the run. |
| 250 | How a tester uses it | Catalog tracks ownership and metadata for all software | 27 | PASS | S27: "keeps track of ownership and metadata for all the software in your ecosystem" |
| 251 | How a tester uses it | Makes all software and its owner discoverable | 27 | PASS | S27: "Makes all the software in your company, and who owns it, discoverable." |
| 252 | How a tester uses it | Owner is the point of contact if something goes wrong | 28 | PASS | S28: "They will be the point of contact if something goes wrong" |
| 253 | How a tester uses it | `experimental`, `production`, `deprecated` are well-known lifecycle values | 28 | PASS | S28: "The current set of well-known and common values for this field is: experimental ... production ... deprecated" |
| 254 | How a tester uses it | Entity identified by kind, namespace, name | 31 | PASS | S31: "uniquely identified by the triplet of its kind, namespace, and name." |
| 255 | How a tester uses it | Entity not visible via API until last process | 30 | PASS | S30: "until it has passed through the last process and landed among the final entities." |
| 256 | How a tester uses it | Step 7: script rejected no-owner and bad-name files | none | N/A | Record of the run. |
| 257 | How a tester uses it | `pack inspect` shows info about a built image | 44 | PASS | S44: "Show information about a built app image" |
| 258 | How a tester uses it | Step 9 inspect output; `Rebasable: true` | none | N/A | Record of the run. |
| 259 | How a tester uses it | Rebaser puts app layers on a new runtime base image | 39 | PASS | S39: "The rebaser places application layers atop a new version of the runtime base image." |
| 260 | How a tester uses it | SBOM lists all software components in an image | 46 | PASS | S46: "lists all the software components included in an image." |
| 261 | How a tester uses it | `pack sbom download` downloads the app layer with SBOM files | 46 | PASS | S46: "will download the app layer containing the SBOM files" |
| 262 | How a tester uses it | Supported formats: CycloneDX, Syft, Spdx | 46 | PASS | S46: "Software-Bill-of-Materials in CycloneDX ..., Syft ... and Spdx ... formats are supported." |
| 263 | How a tester uses it | Tutorial did not run `pack sbom download` or `pack rebase` | none | N/A | Record of the run. |
| 264 | How a tester uses it | Project aims for reproducible builds | 40 | PASS | S40: "aims to create "Reproducible Builds" of container images." |
| 265 | How a tester uses it | Step 9: second build reused layers, same image ID | none | N/A | Record of the run. |
| 266 | How a tester uses it | Untrusted builder: privileged phases use published lifecycle image if available | 45 | PASS | S45: "It will run the more privileged phases using a published lifecycle image (opens in a new tab), if one is available." |
| 267 | Common mistakes | `helm template` fakes in-cluster lookups | 11 | PASS | S11: "Any values that would normally be looked up or retrieved in-cluster will be faked locally." |
| 268 | Common mistakes | It does no server-side validity testing | 11 | PASS | S11: "none of the server-side testing of chart validity ... is done." |
| 269 | Common mistakes | Server-side dry run needs cluster connectivity | 11 | PASS | S11: "'--dry-run=server' simulates/validates the operation on the server, requiring cluster connectivity." |
| 270 | Common mistakes | Tutorial's run had no cluster, only client-side dry run | none | N/A | Record of the run. |
| 271 | Common mistakes | `[ERROR]` for installation failures | 10 | PASS | S10: "it will emit [ERROR] messages." |
| 272 | Common mistakes | `[WARNING]` for convention breaks | 10 | PASS | S10: "it will emit [WARNING] messages." |
| 273 | Common mistakes | Step 2 `[INFO]` line; step 4 `[ERROR]` exit 1 | none | N/A | Record of the run. |
| 274 | Common mistakes | One chart installed many times gives many releases | 7 | PASS | S7: "A single chart may be installed many times into the same cluster, and create many different releases." |
| 275 | Common mistakes | Release number increments on upgrade or rollback | 7 | PASS | S7: "Each time a release is upgraded or rolled back, the release number will be incremented." |
| 276 | Common mistakes | Rolled back release gets a new number, not the old one | 7 | PASS | S7: "a rolled back release will receive a new release number." S7 table: "rollback 1 / release 4 (but running the same config as release 1)" |
| 277 | Common mistakes | `--set` over values file over parent chart values over default | 19 | PASS | S19: "values.yaml is the default, which can be overridden by a parent chart's values.yaml, which can in turn be overridden by a user-supplied values file, which can in turn be overridden by --set parameters." |
| 278 | Common mistakes | Right-most `-f` file wins | 12 | PASS | S12: "The priority will be given to the last (right-most) file specified." |
| 279 | Common mistakes | `--set-string` forces a string | 12 | PASS | S12: "to force a string value use '--set-string'." |
| 280 | Common mistakes | Step 4 schema rejected `replicaCount=abc` | none | N/A | Record of the run. |
| 281 | Common mistakes | Always verify Helm binaries before installing | 25 | PASS | S25: "you should always verify the authenticity of Helm binaries before installing." |
| 282 | Common mistakes | Provenance tools verify integrity and origin | 22 | PASS | S22: "Helm has provenance tools which help chart users verify the integrity and origin" |
| 283 | Common mistakes | Creator with untrusted builder: hypothetical | 45 | PASS | S45: "If pack were to use the creator lifecycle phase with an untrusted builder" |
| 284 | Common mistakes | Then detect/build run with heightened privileges or registry credentials | 45 | PASS | S45: "would run within a container that has heightened privileges or access to registry credentials." |
| 285 | Common mistakes | Checksum shows archive is whole, not who built it | none | N/A | The tutorial's own reasoning about its run. |
| 286 | Common mistakes | Entity not visible until last process | 30 | PASS | S30: "until it has passed through the last process and landed among the final entities." |
| 287 | Common mistakes | Default name is a string of 1 to 63 characters | 28 | PASS | S28: "Strings of length at least 1, and at most 63" |
| 288 | Common mistakes | Default: letters and digits separated by `-`, `_`, `.` | 28 | PASS | S28: "Must consist of sequences of [a-z0-9A-Z] possibly separated by one of [-_.]" |
| 289 | Common mistakes | Step 7 `qa demo` failed | none | N/A | Record of the run. |
| 290 | Common mistakes | Scaffold `bin/build` reads `$1` (run) | none | N/A | Record of the run. |
| 291 | Common mistakes | Spec deprecated positional args in API 0.8 | 41 | PASS | S41: "Deprecated in Buildpack API 0.8. The positional arguments to the detect and build executables are deprecated." |
| 292 | Common mistakes | Detect exit: pass 0, fail 100, error 1-99, 101+ | 41 | PASS | S41: "Pass (0), fail (100), or error (1-99, 101+)" |
| 293 | Common mistakes | So exit 1 in detect means error, not failed detection | 41 | PASS | Follows from S41: "Pass (0), fail (100), or error (1-99, 101+)". 1 is in the error range and 100 is fail. |
| 294 | What a tester can check | Callout "Tutorial advice": ten tips for a tester | none | PASS | The callout says: "This list is the tutorial's own advice for a tester who works with Helm, Backstage, and buildpacks." Each tip is advice. The tool facts in it (lint, template, schema, history, status, signature, SBOM, image IDs) are supported elsewhere on the page. |
| 295 | Key words | Graduated | none | PASS | Page (What it is): "Graduated projects are highly mature, robust projects whose adopters have demonstrated their production-readiness by deploying them to production environments" |
| 296 | Key words | Chart | none | PASS | Page (What it is): "A chart is a Helm package that contains information sufficient for installing a set of Kubernetes resources into a Kubernetes cluster" |
| 297 | Key words | Release | none | PASS | Page (What it is): "When a chart is installed, the Helm library creates a release to track that installation" |
| 298 | Key words | Values | none | PASS | Page (What it is): "Values provide a way to override template defaults with your own information" |
| 299 | Key words | Lint | none | PASS | Page (How it works): "To lint a chart is to validate that it follows the conventions and requirements of the Helm chart standard" |
| 300 | Key words | Chart archive | none | PASS | Page (How it works): "A chart archive is a tarred and gzipped (and optionally signed) chart" |
| 301 | Key words | Hook | none | PASS | Page (How it works): "Hooks work like regular templates, but they have special annotations that cause Helm to use them differently" |
| 302 | Key words | Provenance | none | PASS | Page (How it works): "Helm has provenance tools which help chart users verify the integrity and origin of a package" |
| 303 | Key words | OCI-based registry | none | PASS | Page (How a tester uses it): "An OCI-based registry can contain zero or more Helm repositories, and each of those repositories can contain zero or more packaged Helm charts" |
| 304 | Key words | Software Catalog | none | PASS | Page (What it is): "The Backstage Software Catalog is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem" |
| 305 | Key words | Entity | none | PASS | Page (How it works): "Each entity in the catalog is uniquely identified by the triplet of its kind, namespace, and name" |
| 306 | Key words | Owner | none | PASS | Page (How it works): "the owner of a component is the singular entity, commonly a team, that bears ultimate responsibility for the component and has the authority and capability to develop and maintain it" |
| 307 | Key words | Buildpack | none | PASS | Page (What it is): "A buildpack is software that transforms application source code into runnable artifacts by analyzing the code and determining the best way to build it" |
| 308 | Key words | Builder | none | PASS | Page (What it is): "A builder is an OCI image that contains an ordered combination of buildpacks, a build-time base image, a lifecycle binary, and a reference to a runtime base image" |
| 309 | Key words | Platform | none | PASS | Page (What it is): "A platform orchestrates builds by invoking the lifecycle binary together with buildpacks and app source code to produce a runnable OCI image" |
| 310 | Key words | Lifecycle | none | PASS | Page (How it works): "The lifecycle orchestrates buildpacks, then assembles the resulting artifacts into an OCI image" |
| 311 | Key words | Layer | none | PASS | Page (How it works): "A layer is a set of filesystem changes packaged according to the OCI Image Specification" |
| 312 | Key words | Rebase | none | PASS | Page (How it works): "The rebaser places application layers atop a new version of the runtime base image" |
| 313 | Key words | SBOM | none | PASS | Page (How it works): "A Software Bill-of-Materials (SBOM) lists all the software components included in an image" |

Open FAILs after round 7: 0

Open FAILs: 0
