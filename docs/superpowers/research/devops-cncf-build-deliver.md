# Research notes: CNCF Projects: Build and Deliver

Page: `content/devops/cncf-build-deliver.mdx`. Module: DevOps & Cloud. Date: 2026-11-19 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`) on the topic that its shelf named: the CNCF, Helm, Backstage, and Cloud Native Buildpacks. It covers the CNCF project stages and the maturity of the three projects; Helm charts (their files, values and templates, `helm lint`, `helm template`, the values schema, releases and rollback, tests and hooks, packages, provenance, repositories, and OCI registries); the Backstage software catalog (descriptors, the model, references, the life of an entity, templates, and TechDocs); and Cloud Native Buildpacks (the lifecycle, detection, the two executables of a buildpack, layers, builders and trust, rebase, reproducibility, and SBOMs). The practice run has nine steps: the tools; a chart that is created and linted; a chart that is rendered without a cluster; a schema for the values; a test of the rendered chart; a packaged chart; Backstage catalog files that are validated; a buildpack that is written by hand; and an image that `pack` builds, runs, and inspects.

The practice run of `## Try it` (steps 1 to 9) was recorded on 2026-11-19 23:26:20 +0600 on Linux 7.0.0-43-generic with Helm v4.3.2, pack 0.40.11, Node.js v26.8.1, npm 11.19.0, Docker 29.10.0, and bash 5.3.9. The tutorial installed `helm` and `pack` for one user from their release archives: Helm with its SHA-256 and its GnuPG signature checked, and pack with its SHA-256 checked against the file of the same release. The page says what these checks show and what they do not show.

The runner ran four times on that day, and the page uses the last run. After the second run, the tutorial changed the `bin/build` of its buildpack from the positional argument that `pack buildpack new` writes to `CNB_LAYERS_DIR`, because the spec says that the positional arguments are deprecated since Buildpack API 0.8. The fourth run added the `cat` of the scaffold's `bin/build` and the second `pack build`. The runner stops at its start if one of the images that it adds already exists. It removed exactly the four images and the two cache volumes that it had added, and it never prunes.

- Step 1: the five version commands printed the versions that the page names.
- Step 2: `helm lint` printed one `[INFO]` line and `0 chart(s) failed`. The page does not say why `icon is recommended` is an `[INFO]` line.
- Step 3: the four `# Source:` lines are the ones that the run printed. The page does not say why `hpa.yaml`, `httproute.yaml`, and `ingress.yaml` printed none. It says only that they printed none.
- Step 4: the schema failed `helm lint` and `helm template` with exit status 1.
- Step 5: the first run of `render_test.sh` failed its third check with exit status 1, and the second passed with 0.
- Step 6: the archive holds the 12 files of step 2 and `values.schema.json`.
- Step 7: two of the three catalog files failed, as the page says. The names of the functions that the script uses (`componentEntityV1alpha1Validator`, `makeValidator`, and `isValidEntityName`) are in none of the cached source pages (checked with a search over every cached page on the day of the run), so the page describes the script and what it printed, and does not cite the functions.
- Step 8: the scaffold's `bin/build` printed `layers_dir="$1"`. The detect script exited with 100 and 0. The build script left three files.
- Step 9: the first build printed two warnings. The page quotes one of them, and names the other. It explains neither beyond what the trusted builders page says. The image ID was `772b48ce2926` in both builds.

The page cites pages of the CNCF, Helm, Backstage, and Cloud Native Buildpacks documentation, and the Buildpack Interface Specification on GitHub. The CNCF project pages were read on 2026-11-19, and the maturity levels in the page are the ones that they gave that day. Some quotes are written as `scripts/devops_claimcheck.py` reads them (case, white space, and curly quotes do not count as differences), and a quote that crosses a link text such as `(opens in a new tab)` is split with `||`.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Who we are (Cloud Native Computing Foundation) | https://www.cncf.io/about/who-we-are/ |
| S2 | Graduated and incubating projects (Cloud Native Computing Foundation) | https://www.cncf.io/projects/ |
| S3 | Project stages and the graduation process (CNCF Technical Oversight Committee on GitHub) | https://github.com/cncf/toc/blob/main/process/README.md |
| S4 | Helm (Cloud Native Computing Foundation) | https://www.cncf.io/projects/helm/ |
| S5 | Backstage (Cloud Native Computing Foundation) | https://www.cncf.io/projects/backstage/ |
| S6 | Buildpacks (Cloud Native Computing Foundation) | https://www.cncf.io/projects/buildpacks/ |
| S7 | Glossary (Helm Documentation) | https://helm.sh/docs/glossary/ |
| S8 | Charts (Helm Documentation) | https://helm.sh/docs/topics/charts/ |
| S9 | helm create (Helm Documentation) | https://helm.sh/docs/helm/helm_create/ |
| S10 | helm lint (Helm Documentation) | https://helm.sh/docs/helm/helm_lint/ |
| S11 | helm template (Helm Documentation) | https://helm.sh/docs/helm/helm_template/ |
| S12 | helm install (Helm Documentation) | https://helm.sh/docs/helm/helm_install/ |
| S13 | helm package (Helm Documentation) | https://helm.sh/docs/helm/helm_package/ |
| S14 | helm rollback (Helm Documentation) | https://helm.sh/docs/helm/helm_rollback/ |
| S15 | helm history (Helm Documentation) | https://helm.sh/docs/helm/helm_history/ |
| S16 | helm test (Helm Documentation) | https://helm.sh/docs/helm/helm_test/ |
| S17 | Chart Tests (Helm Documentation) | https://helm.sh/docs/topics/chart_tests/ |
| S18 | Chart Hooks (Helm Documentation) | https://helm.sh/docs/topics/charts_hooks/ |
| S19 | Values Files (Helm Documentation) | https://helm.sh/docs/chart_template_guide/values_files/ |
| S20 | Values (chart best practices) (Helm Documentation) | https://helm.sh/docs/chart_best_practices/values/ |
| S21 | Advanced Helm Techniques (Helm Documentation) | https://helm.sh/docs/topics/advanced/ |
| S22 | Helm Provenance and Integrity (Helm Documentation) | https://helm.sh/docs/topics/provenance/ |
| S23 | Use OCI-based registries (Helm Documentation) | https://helm.sh/docs/topics/registries/ |
| S24 | The Chart Repository Guide (Helm Documentation) | https://helm.sh/docs/topics/chart_repository/ |
| S25 | Installing Helm (Helm Documentation) | https://helm.sh/docs/intro/install/ |
| S26 | What is Backstage? (Backstage Documentation) | https://backstage.io/docs/overview/what-is-backstage |
| S27 | Backstage Software Catalog (Backstage Documentation) | https://backstage.io/docs/features/software-catalog/ |
| S28 | Descriptor Format of Catalog Entities (Backstage Documentation) | https://backstage.io/docs/features/software-catalog/descriptor-format |
| S29 | System Model (Backstage Documentation) | https://backstage.io/docs/features/software-catalog/system-model |
| S30 | The Life of an Entity (Backstage Documentation) | https://backstage.io/docs/features/software-catalog/life-of-an-entity |
| S31 | Entity References (Backstage Documentation) | https://backstage.io/docs/features/software-catalog/references |
| S32 | Backstage Software Templates (Backstage Documentation) | https://backstage.io/docs/features/software-templates/ |
| S33 | TechDocs (Backstage Documentation) | https://backstage.io/docs/features/techdocs/ |
| S34 | What is a buildpack? (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-app-developers/concepts/buildpack/ |
| S35 | What is a builder? (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-app-developers/concepts/builder/ |
| S36 | What is a platform? (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-app-developers/concepts/platform/ |
| S37 | What is the lifecycle? (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-platform-operators/concepts/lifecycle/ |
| S38 | Detect (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-platform-operators/concepts/lifecycle/detect/ |
| S39 | Rebase (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-platform-operators/concepts/lifecycle/rebase/ |
| S40 | What is build reproducibility? (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-app-developers/concepts/reproducibility/ |
| S41 | Buildpack Interface Specification (Cloud Native Buildpacks Specifications on GitHub) | https://github.com/buildpacks/spec/blob/main/buildpack.md |
| S42 | pack buildpack new (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-platform-operators/how-to/integrate-ci/pack/cli/pack_buildpack_new/ |
| S43 | pack build (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-platform-operators/how-to/integrate-ci/pack/cli/pack_build/ |
| S44 | pack inspect (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-platform-operators/how-to/integrate-ci/pack/cli/pack_inspect/ |
| S45 | Trusted Builders (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-platform-operators/how-to/integrate-ci/pack/concepts/trusted_builders/ |
| S46 | Download a Software Bill-of-Materials (SBOM) (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-app-developers/how-to/build-outputs/download-sbom/ |
| S47 | Lifecycle phases (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-buildpack-authors/concepts/lifecycle-phases/ |
| S48 | helm status (Helm Documentation) | https://helm.sh/docs/helm/helm_status/ |
| S49 | Making your application runnable (Cloud Native Buildpacks Documentation) | https://buildpacks.io/docs/for-buildpack-authors/tutorials/basic-buildpack/05_make-app-runnable/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | S1 | "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| CNCF is part of the nonprofit Linux Foundation | S1 | "CNCF is part of the nonprofit Linux Foundation." |
| The CNCF has a Technical Oversight Committee (TOC) | S3 | "the CNCF's Technical Oversight Committee (TOC)" |
| The TOC defines 4 stages of the project lifecycle | S3 | "The TOC defines 4 stages of the project lifecycle:" |
| Sandbox projects are experimental or innovative projects early in their development | S3 | "Sandbox - Experimental or innovative projects early in their development." |
| Incubation projects are gaining adoption, with a focus on improving stability and maturity | S3 | "Incubation - Projects gaining adoption, focusing on improving stability and maturity." |
| Graduated projects are highly mature, robust projects whose adopters have demonstrated their production-readiness by deploying them to production environments | S3 | "Graduated - Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments." |
| Archived projects are inactive or low activity projects that the TOC no longer supports, or does not recommend for use, for reasons that depend on the project | S3 | "Archived - Inactive or low activity projects that are no longer supported by the TOC or are not recommended for use due to a variety of factors (project specific)" |
| The CNCF says that graduated and incubating projects are considered stable and are used successfully in production environments | S2 | "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| Helm is the package manager for Kubernetes | S7 | "Helm is the package manager for Kubernetes." |
| The CNCF page says that Helm was accepted on June 1, 2018 at the Incubating maturity level, and moved to the Graduated maturity level on May 1, 2020 | S4 | "Helm was accepted to CNCF on June 1, 2018 at the Incubating maturity level and then moved to the Graduated maturity level on May 1, 2020." |
| Backstage is an open source framework for building developer portals | S26 | "Backstage is an open source framework for building developer portals." |
| It was accepted on September 8, 2020, and moved to the Incubating maturity level on March 15, 2022 | S5 | "Backstage was accepted to CNCF on September 8, 2020 and moved to the Incubating maturity level on March 15, 2022." |
| Cloud Native Buildpacks transform your application source code into images that can run on any cloud | S6 | "Cloud Native Buildpacks transform your application source code into images that can run on any cloud" |
| Buildpacks was accepted on October 3, 2018, moved to the Incubating maturity level on November 18, 2020, and then moved to the Graduated maturity level on July 17, 2026 | S6 | "Buildpacks was accepted to CNCF on October 3, 2018, moved to the Incubating maturity level on November 18, 2020, and then moved to the Graduated maturity level on July 17, 2026." |
| A chart is a Helm package that contains information sufficient for installing a set of Kubernetes resources into a Kubernetes cluster | S7 | "A Helm package that contains information sufficient for installing a set of Kubernetes resources into a Kubernetes cluster." |
| Charts contain a Chart.yaml file as well as templates, default values (values.yaml), and dependencies | S7 | "Charts contain a Chart.yaml file as well as templates, default values (values.yaml), and dependencies." |
| When a chart is installed, the Helm library creates a release to track that installation | S7 | "When a chart is installed, the Helm library creates a release to track that installation." |
| A single chart may be installed many times into the same cluster, and create many different releases | S7 | "A single chart may be installed many times into the same cluster, and create many different releases." |
| Helm charts may be stored on dedicated HTTP servers called chart repositories | S7 | "Helm charts may be stored on dedicated HTTP servers called chart repositories (repositories, or just repos)." |
| Values provide a way to override template defaults with your own information | S7 | "Values provide a way to override template defaults with your own information." |
| The Backstage Software Catalog is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem | S27 | "The Backstage Software Catalog is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem (services, websites, libraries, data pipelines, etc)." |
| The catalog is built around metadata YAML files that are stored together with the code, and then harvested and visualized in Backstage | S27 | "The catalog is built around the concept of metadata YAML files stored together with the code, which are then harvested and visualized in Backstage." |
| Out of the box, Backstage also includes Software Templates and TechDocs | S26 | "Backstage Software Templates for quickly spinning up new projects and standardizing your tooling with your organization’s best practices" |
| Out of the box, Backstage also includes Software Templates and TechDocs | S26 | "Backstage TechDocs for making it easy to create, maintain, find, and use technical documentation, using a "docs like code" approach" |
| A buildpack is software that transforms application source code into runnable artifacts by analyzing the code and determining the best way to build it | S34 | "A buildpack is software that transforms application source code into runnable artifacts by analyzing the code and determining the best way to build it." |
| A builder is an OCI image that contains an ordered combination of buildpacks, a build-time base image, a lifecycle binary, and a reference to a runtime base image | S35 | "A builder is an OCI image" |
| A builder is an OCI image that contains an ordered combination of buildpacks, a build-time base image, a lifecycle binary, and a reference to a runtime base image | S35 | "containing an ordered combination of buildpacks and a build-time base image, a lifecycle binary, and a reference to a runtime base image." |
| A platform orchestrates builds by invoking the lifecycle binary together with buildpacks and app source code to produce a runnable OCI image | S36 | "A platform orchestrates builds by invoking the lifecycle binary together with buildpacks and app source code to produce a runnable OCI image." |
| The Pack CLI is one such platform | S36 | "One such tool is the Pack CLI" |
| A chart is a collection of files that describe a related set of Kubernetes resources | S8 | "A chart is a collection of files that describe a related set of Kubernetes resources." |
| Charts are created as files laid out in a particular directory tree | S8 | "Charts are created as files laid out in a particular directory tree." |
| The helm create command creates a chart directory along with the common files and directories used in a chart | S9 | "This command creates a chart directory along with the common files and directories used in a chart." |
| Its example tree has Chart.yaml, with information about your chart, values.yaml, with the default values for your templates, charts/, with the charts that this chart depends on, and templates/, with the template files | S9 | "Chart.yaml # Information about your chart" |
| Its example tree has Chart.yaml, with information about your chart, values.yaml, with the default values for your templates, charts/, with the charts that this chart depends on, and templates/, with the template files | S9 | "values.yaml # The default values for your templates" |
| Its example tree has Chart.yaml, with information about your chart, values.yaml, with the default values for your templates, charts/, with the charts that this chart depends on, and templates/, with the template files | S9 | "charts/ # Charts that this chart depends on" |
| Its example tree has Chart.yaml, with information about your chart, values.yaml, with the default values for your templates, charts/, with the charts that this chart depends on, and templates/, with the template files | S9 | "templates/ # The template files" |
| Every chart must have a Chart.yaml file | S7 | "Information about a chart is stored in a special file called Chart.yaml. Every chart must have this file." |
| Charts are versioned according to the SemVer 2 spec, and a version number is required on every chart | S7 | "Charts are versioned according to the SemVer 2 spec. A version number is required on every chart." |
| A chart archive is a tarred and gzipped (and optionally signed) chart | S7 | "A chart archive is a tarred and gzipped (and optionally signed) chart." |
| Values provide a way to override template defaults with your own information | S7 | "Values provide a way to override template defaults with your own information." |
| A chart developer may expose configuration that can be overridden at installation time | S7 | "the chart developer may expose configuration that can be overridden at installation time." |
| The order of specificity is this: values.yaml is the default, a parent chart's values.yaml can override it, a user-supplied values file can override that, and --set parameters can override that | S19 | "values.yaml is the default, which can be overridden by a parent chart's values.yaml, which can in turn be overridden by a user-supplied values file, which can in turn be overridden by --set parameters." |
| You can give the --values or -f flag more than once, and the last, right-most file gets the priority | S12 | "You can specify the '--values'/'-f' flag multiple times. The priority will be given to the last (right-most) file specified." |
| To force a string value, use --set-string | S12 | "to force a string value use '--set-string'." |
| The chart best practices say that variable names should begin with a lowercase letter, and words should be separated with camelcase | S20 | "Variable names should begin with a lowercase letter, and words should be separated with camelcase:" |
| They also say that in most cases flat should be favored over nested | S20 | "In most cases, flat should be favored over nested." |
| helm template renders chart templates locally and displays the output | S11 | "Render chart templates locally and display the output." |
| Any values that would normally be looked up or retrieved in-cluster are faked locally | S11 | "Any values that would normally be looked up or retrieved in-cluster will be faked locally." |
| None of the server-side testing of chart validity, for example whether an API is supported, is done | S11 | "Additionally, none of the server-side testing of chart validity (e.g. whether an API is supported) is done." |
| The flag --dry-run=client simulates the operation on the client side only, and avoids cluster connections | S11 | "--dry-run=client simulates the operation client-side only and avoids cluster connections." |
| The flag --dry-run=server simulates and validates the operation on the server, and needs cluster connectivity | S11 | "--dry-run=server' simulates/validates the operation on the server, requiring cluster connectivity." |
| The helm install command installs a chart archive | S12 | "This command installs a chart archive." |
| Its argument must be a chart reference, a path to a packaged chart, a path to an unpacked chart directory, or a URL | S12 | "The install argument must be a chart reference, a path to a packaged chart, a path to an unpacked chart directory or a URL." |
| To lint a chart is to validate that it follows the conventions and requirements of the Helm chart standard | S7 | "To lint a chart is to validate that it follows the conventions and requirements of the Helm chart standard." |
| helm lint takes a path to a chart and runs a series of tests to verify that the chart is well-formed | S10 | "This command takes a path to a chart and runs a series of tests to verify that the chart is well-formed." |
| It emits [ERROR] messages for things that will cause the chart to fail installation | S10 | "If the linter encounters things that will cause the chart to fail installation" |
| It emits [WARNING] messages for issues that break with convention or recommendation | S10 | "If it encounters issues that break with convention or recommendation" |
| A chart maintainer can define a structure on the values by defining a schema in the values.schema.json file | S8 | "This can be done by defining a schema in the values.schema.json file." |
| The schema is represented as a JSON Schema | S8 | "A schema is represented as a JSON Schema." |
| Validation occurs when helm install, helm upgrade, helm lint, or helm template is invoked | S8 | "Validation occurs when any of the following commands are invoked: helm install helm upgrade helm lint helm template" |
| After a first helm install, a release has release number 1 | S7 | "After a first helm install, a release will have release number 1." |
| Each time a release is upgraded or rolled back, the release number is incremented | S7 | "Each time a release is upgraded or rolled back, the release number will be incremented." |
| Since release history is stored, a release can be rolled back to a previous release number with the helm rollback command | S7 | "But since release history is stored, a release can also be rolled back to a previous release number. This is done with the helm rollback command." |
| A rolled back release receives a new release number | S7 | "Importantly, a rolled back release will receive a new release number." |
| helm rollback takes the name of a release and a revision number | S14 | "The first argument of the rollback command is the name of a release, and the second is a revision (version) number." |
| If the revision is omitted or set to 0, it rolls back to the previous release | S14 | "If this argument is omitted or set to 0, it will roll back to the previous release." |
| To see revision numbers, run helm history RELEASE | S14 | "To see revision numbers, run 'helm history RELEASE'." |
| helm history returns a default maximum of 256 revisions | S15 | "A default maximum of 256 revisions will be returned." |
| By default, release information is stored in Secrets in the namespace of the release | S21 | "By default, release information is stored in Secrets in the namespace of the release." |
| The HELM_DRIVER environment variable can select another backend | S21 | "This configuration is based on the HELM_DRIVER environment variable." |
| A test in a Helm chart lives under the templates/ directory | S17 | "A test in a helm chart lives under the templates/ directory" |
| It is a workload definition, commonly a Pod or Job, that specifies a container with a given command to run | S17 | "is a workload definition (commonly a Pod or Job) that specifies a container with a given command to run." |
| The container should exit successfully (exit 0) for a test to be considered a success | S17 | "The container should exit successfully (exit 0) for a test to be considered a success." |
| The definition must contain the test hook annotation helm.sh/hook: test | S17 | "The definition must contain the helm test hook annotation: helm.sh/hook: test." |
| The helm test command runs the tests for a release | S16 | "The test command runs the tests for a release." |
| Its argument is the name of a deployed release | S16 | "The argument this command takes is the name of a deployed release." |
| The tests to run are defined in the chart that was installed | S16 | "The tests to be run are defined in the chart that was installed." |
| Hooks work like regular templates, but they have special annotations that cause Helm to use them differently | S18 | "Hooks work like regular templates, but they have special annotations that cause Helm to utilize them differently." |
| Helm defines two hooks for the install lifecycle: pre-install and post-install | S18 | "Helm defines two hooks for the install lifecycle: pre-install and post-install." |
| helm package packages a chart into a versioned chart archive file | S13 | "This command packages a chart into a versioned chart archive file." |
| If a path is given, it looks at that path for a chart, which must contain a Chart.yaml file | S13 | "If a path is given, this will look at that path for a chart (which must contain a Chart.yaml file) and then package that directory." |
| Versioned chart archives are used by Helm package repositories | S13 | "Versioned chart archives are used by Helm package repositories." |
| To sign a chart, use the --sign flag | S13 | "To sign a chart, use the '--sign' flag." |
| Helm has provenance tools which help chart users verify the integrity and origin of a package | S22 | "Helm has provenance tools which help chart users verify the integrity and origin of a package." |
| Provenance files are generated at packaging time, and can be checked by multiple commands, notably helm install --verify | S22 | "Provenance files are generated at packaging time (helm package --sign ...), and can be checked by multiple commands, notably helm install --verify." |
| A chart repository is an HTTP server that houses an index.yaml file and optionally some packaged charts | S24 | "A chart repository is an HTTP server that houses an index.yaml file and optionally some packaged charts." |
| The Helm docs recommend container registries with OCI support to store and share chart packages | S23 | "It is recommended to use container registries with OCI support to store and share chart packages." |
| The Backstage docs recommend naming a catalog descriptor file catalog-info.yaml | S28 | "Although it's possible to name catalog entity descriptor files however you wish, we recommend that you name them catalog-info.yaml." |
| The descriptor files are YAML, so that people can maintain them more easily | S28 | "while the descriptor files are on YAML format to be more easily maintainable by humans." |
| The kind is the high level entity type being described | S28 | "The kind is the high level entity type being described." |
| The apiVersion is the version of the specification format that the entity is written against | S28 | "The apiVersion is the version of specification format for that particular entity that the specification is made against." |
| A name must be unique per kind, within a given namespace, at any point in time | S28 | "Names must be unique per kind, within a given namespace (if specified), at any point in time." |
| By default, a name is a string of 1 to 63 characters, made of sequences of letters and digits, possibly separated by -, _, or . | S28 | "The ruleset is configurable to fit your organization's needs, but the default behavior is as follows." |
| By default, a name is a string of 1 to 63 characters, made of sequences of letters and digits, possibly separated by -, _, or . | S28 | "Strings of length at least 1, and at most 63" |
| By default, a name is a string of 1 to 63 characters, made of sequences of letters and digits, possibly separated by -, _, or . | S28 | "possibly separated by one of" |
| The rules for names are configurable | S28 | "The ruleset is configurable to fit your organization's needs, but the default behavior is as follows." |
| For a Component, spec.type, spec.lifecycle, and spec.owner are each required | S28 | "The type of component as a string, e.g. website. This field is required." |
| For a Component, spec.type, spec.lifecycle, and spec.owner are each required | S28 | "The lifecycle state of the component, e.g. production. This field is required." |
| For a Component, spec.type, spec.lifecycle, and spec.owner are each required | S28 | "An entity reference to the owner of the component, e.g. artist-relations-team. This field is required." |
| In Backstage, the owner of a component is the singular entity, commonly a team, that bears ultimate responsibility for the component and has the authority and capability to develop and maintain it | S28 | "In Backstage, the owner of a component is the singular entity (commonly a team) that bears ultimate responsibility for the component, and has the authority and capability to develop and maintain it." |
| The owner is the point of contact if something goes wrong, or if features are to be requested | S28 | "They will be the point of contact if something goes wrong, or if features are to be requested." |
| The software catalog accepts any lifecycle value, but an organization should take great care to establish a proper taxonomy for these | S28 | "The software catalog accepts any lifecycle value, but an organization should take great care to establish a proper taxonomy for these." |
| The docs list experimental as an experiment or early, non-production component | S28 | "experimental - an experiment or early, non-production component" |
| They list production as an established, owned, maintained component | S28 | "production - an established, owned, maintained component" |
| Components are individual pieces of software | S29 | "Components are individual pieces of software" |
| APIs are the boundaries between different components | S29 | "APIs are the boundaries between different components" |
| Resources are physical or virtual infrastructure needed to operate a component | S29 | "Resources are physical or virtual infrastructure needed to operate a component" |
| A user describes a person, such as an employee, a contractor, or similar | S29 | "A user describes a person, such as an employee, a contractor, or similar." |
| A group describes an organizational entity, such as a team, a business unit, or a loose collection of people in an interest group | S29 | "A group describes an organizational entity, such as for example a team, a business unit, or a loose collection of people in an interest group." |
| Each entity in the catalog is uniquely identified by the triplet of its kind, namespace, and name | S31 | "Each entity in the catalog is uniquely identified by the triplet of its kind, namespace, and name." |
| A string reference is made of between one and three parts, in this specific order, without any additional encoding: optionally the kind followed by a colon, optionally the namespace followed by a forward slash, and the name | S31 | "That is, it is composed of between one and three parts in this specific order, without any additional encoding: Optionally, the kind, followed by a colon Optionally, the namespace, followed by a forward slash The name" |
| The catalog is a hub where entities are ingested from various authoritative sources and held in a database, subject to automated processing, and then presented through an API | S30 | "entities are ingested from various authoritative sources and held in a database, subject to automated processing, and then presented through an API for quick and easy access by Backstage and others." |
| Ingestion is where entity providers fetch raw entity data from external sources and seed it into the database | S30 | "Ingestion, where entity providers fetch raw entity data from external sources and seed it into the database" |
| In processing, the policies and processors continually treat the ingested data | S30 | "Processing, where the policies and processors continually treat the ingested data" |
| Policies establish baseline rules about the shape of entities | S30 | "Policies, that establish baseline rules about the shape of entities" |
| Processors validate, analyze, and mutate the raw entity data into its final form | S30 | "Processors, that validate, analyze, and mutate the raw entity data into its final form." |
| In stitching, all the data that the processors emitted is assembled into the final output entity | S30 | "Stitching, where all of the data emitted by various processors are assembled together into the final output entity." |
| An entity is not visible through the catalog API until it has passed through the last process and landed among the final entities | S30 | "An entity is not visible to the outside world (through the catalog API), until it has passed through the last process and landed among the final entities." |
| By default, Software Templates can load skeletons of code, template in some variables, and then publish the template to locations like GitHub or GitLab | S32 | "By default, it has the ability to load skeletons of code, template in some variables, and then publish the template to some locations like GitHub or GitLab." |
| TechDocs is Spotify's homegrown docs-like-code solution, built directly into Backstage | S33 | "TechDocs is Spotify’s homegrown docs-like-code solution built directly into Backstage." |
| Engineers write their documentation in Markdown files that live together with their code | S33 | "Engineers write their documentation in Markdown files which live together with their code" |
| With little configuration, they get a doc site in Backstage | S33 | "and with little configuration get a nice-looking doc site in Backstage." |
| The lifecycle orchestrates buildpacks, then assembles the resulting artifacts into an OCI image | S37 | "The lifecycle orchestrates buildpacks, then assembles the resulting artifacts into an OCI image" |
| An image build requires 5 lifecycle phases | S37 | "An image build requires 5 lifecycle phases" |
| They are the detect, analyze, restore, build, and export binaries | S45 | "it will continue to execute five separate lifecycle binaries: detect, analyze, restore, build and export." |
| The analyzer, restorer, and exporter need access to an image repository, either an OCI registry or a Docker-compliant daemon | S37 | "The analyzer, restorer, and exporter" |
| The analyzer, restorer, and exporter need access to an image repository, either an OCI registry or a Docker-compliant daemon | S37 | "require access to an image repository - either an OCI registry or Docker-compliant daemon" |
| For security hardening, these phases run in separate containers to avoid exposing sensitive data to buildpacks | S37 | "For security hardening, these phases run in separate containers to avoid exposing sensitive data to buildpacks." |
| The detector and builder invoke buildpacks | S37 | "The detector and builder" |
| The detector and builder invoke buildpacks | S37 | "invoke buildpacks" |
| For security hardening, both the lifecycle and buildpacks run as non-root users when doing this work | S37 | "For security hardening, both the lifecycle and buildpacks run as non-root users when doing this work." |
| When a builder is trusted, all 5 lifecycle phases can be run in the same container, with the creator binary | S37 | "When a builder is trusted, all 5 lifecycle phases can be run in the same container, and in this case the creator binary is used to run all 5 lifecycle phases with a single command invocation." |
| The detector finds an ordered group of buildpacks to use during the build phase | S38 | "The detector finds an ordered group of buildpacks to use during the build phase." |
| It reads order.toml, and looks for the first group that passes the detection process | S38 | "The detector reads the order.toml and looks for the first group that passes the detection process." |
| If all of the groups fail, the detection process fails | S38 | "If all of the groups fail, the detection process fails." |
| To pass, the detect scripts of all required buildpacks must pass successfully, which means that the exit code is zero | S38 | "The detect scripts of all required buildpacks must pass successfully (the exit code is zero)." |
| The detector should also be able to create a build plan with all of the requirements of the group's buildpacks | S38 | "The detector should be able to create a build plan" |
| The detector should also be able to create a build plan with all of the requirements of the group's buildpacks | S38 | "with all of the requirements of the group’s buildpacks." |
| The first group that passes both steps is written to group.toml, and its build plan is written to plan.toml | S38 | "The first group that passes both steps is written to group.toml and its build plan is written to plan.toml." |
| A component buildpack is a buildpack that contains /bin/detect and /bin/build executables | S41 | "A component buildpack is a buildpack containing /bin/detect and /bin/build executables." |
| The pack buildpack new command generates the basic scaffolding of a buildpack repository | S42 | "buildpack new generates the basic scaffolding of a buildpack repository." |
| It creates a buildpack.toml and two executable bash scripts, bin/detect and bin/build | S42 | "and initializes a buildpack.toml, and two executable bash scripts, bin/detect and bin/build." |
| The spec gives the exit status of /bin/detect as pass (0), fail (100), or error (1-99, 101+) | S41 | "Pass (0), fail (100), or error (1-99, 101+)" |
| The spec gives the exit status of /bin/build as success (0) or failure (1+) | S41 | "Success (0) or failure (1+)" |
| The CNB_LAYERS_DIR variable holds the absolute path of the buildpack layers directory | S41 | "Absolute path of the buildpack layers directory" |
| A build can write a launch.toml file with app metadata into that directory | S41 | "App metadata (see launch.toml)" |
| The positional arguments to the detect and build executables were deprecated in Buildpack API 0.8, and the lifecycle provides their values as environment variables | S41 | "Deprecated in Buildpack API 0.8. The positional arguments to the detect and build executables are deprecated. The lifecycle provides these values as environment variables." |
| A layer is a set of filesystem changes packaged according to the OCI Image Specification | S41 | "A layer is a set of filesystem changes packaged according to the OCI Image Specification." |
| A layer directory is a directory created by a component buildpack that contains build and/or runtime dependencies | S41 | "A layer directory is a directory created by a component buildpack that contains build and/or runtime dependencies" |
| The spec names three layer types | S41 | "There are three layer types:" |
| A launch layer is added as a layer in the exported OCI image | S41 | "a launch layer is added as a layer in the exported OCI image" |
| A cache layer is saved to the cache, and its contents may be restored on the next build | S41 | "a cache layer is saved to the cache and its contents may be restored on the next build" |
| A build layer has child directories whose paths are added to the environment for subsequent buildpacks in the same build | S41 | "a build layer contains child directories with paths that are added to the environment" |
| A build layer has child directories whose paths are added to the environment for subsequent buildpacks in the same build | S41 | "for subsequent buildpacks in the same build" |
| In the example output of the Buildpacks docs, the layers of the buildpack example/node-engine are in /layers/example_node-engine | S47 | "Reading buildpack directory: /layers/example_node-engine" |
| pack build uses Cloud Native Buildpacks to create a runnable app image from source code | S43 | "Pack Build uses Cloud Native Buildpacks to create a runnable app image from source code." |
| It requires an image name | S43 | "Pack Build requires an image name, which will be generated from the source code." |
| It defaults to the current directory, and you can use --path to specify another source code directory | S43 | "Build defaults to the current directory, but you can use --path to specify another source code directory." |
| It requires a builder, which can be given with --builder or can be set with the set-default-builder command | S43 | "Build requires a builder, which can either be provided directly to build using --builder, or can be set using the set-default-builder command." |
| The --buildpack flag accepts a path to a buildpack directory, among other forms | S43 | "path to a buildpack directory (not supported on Windows)" |
| pack inspect shows information about a built app image | S44 | "Show information about a built app image" |
| From pack version 0.11.0 onward, pack can identify builders that should be considered trusted | S45 | "From version 0.11.0" |
| From pack version 0.11.0 onward, pack can identify builders that should be considered trusted | S45 | "onward, pack can be used to identify builders that should be considered trusted." |
| When pack considers a builder trusted, pack build uses a single lifecycle binary called the creator | S45 | "When pack considers a builder to be trusted, pack build operations will use a single lifecycle binary called the creator." |
| If pack does not trust a builder, it continues to execute five separate lifecycle binaries | S45 | "If pack doesn’t trust a builder it will continue to execute five separate lifecycle binaries" |
| The docs say that this choice strikes a balance between security and performance | S45 | "This choice strikes a balance between security and performance." |
| If pack does not trust a builder, it runs the more privileged phases using a published lifecycle image, if one is available | S45 | "It will run the more privileged phases using a published lifecycle image" |
| If pack does not trust a builder, it runs the more privileged phases using a published lifecycle image, if one is available | S45 | "if one is available." |
| The analyze, restore, and export phases need higher levels of privilege or access to sensitive data that the detect and build phases do not need | S45 | "The analyze, restore and export phases of the lifecycle require higher levels of privilege or access to sensitive data that is not required by the detect and build phases." |
| If pack used the creator with an untrusted builder, each buildpack's bin/detect and bin/build would run within a container that has heightened privileges or access to registry credentials | S45 | "If pack were to use the creator lifecycle phase with an untrusted builder, each of the buildpack’s bin/detect and bin/build processes would run within a container that has heightened privileges or access to registry credentials." |
| The rebaser places application layers atop a new version of the runtime base image | S39 | "The rebaser places application layers atop a new version of the runtime base image." |
| The Cloud Native Buildpacks project aims to create “Reproducible Builds” of container images | S40 | "The Cloud Native Buildpacks project aims to create “Reproducible Builds” of container images." |
| Given the same inputs, two builds should produce the same outputs | S40 | "Given the same inputs, two builds should produce the same outputs." |
| A Software Bill-of-Materials (SBOM) lists all the software components included in an image | S46 | "A Software-Bill-of-Materials (SBOM) lists all the software components included in an image." |
| Buildpacks can populate SBOM information about the dependencies they have provided | S46 | "Buildpacks can populate SBOM information about the dependencies they have provided." |
| on your local filesystem | S46 | "The following command will download the app layer containing the SBOM files to ./layers/sbom/... on your local filesystem." |
| The Helm docs say that each Helm release includes cryptographic signatures that confirm the binary was built and signed by Helm maintainers | S25 | "Each Helm release includes cryptographic signatures that confirm the binary was built and signed by Helm maintainers." |
| They say that you should always verify the authenticity of Helm binaries before installing | S25 | "you should always verify the authenticity of Helm binaries before installing." |
| One of their steps is to verify the SHA256 checksum to confirm the download was not corrupted | S25 | "Verify the SHA256 checksum to confirm the download wasn't corrupted." |
| Another is to verify the binary's signature | S25 | "Verify the binary's signature." |
| They also say that you can cross-check the maintainer keys on Keybase | S25 | "You can also cross-check maintainer keys on Keybase" |
| helm create made the chart directory qa-demo with the common files and directories of a chart | S9 | "This command creates a chart directory along with the common files and directories used in a chart." |
| The docs show tests/ under templates/ for the test files | S9 | "tests/ # The test files" |
| The docs say that helm lint emits [ERROR] messages for things that will cause the chart to fail installation, and [WARNING] messages for issues that break with convention or recommendation | S10 | "If the linter encounters things that will cause the chart to fail installation" |
| The docs say that helm lint emits [ERROR] messages for things that will cause the chart to fail installation, and [WARNING] messages for issues that break with convention or recommendation | S10 | "If it encounters issues that break with convention or recommendation" |
| -s templates/deployment.yaml showed only that template | S11 | "-s, --show-only stringArray only show manifests rendered from the given templates" |
| The docs say that --set has a higher precedence than the default values.yaml file | S19 | "Since --set has a higher precedence than the default values.yaml file" |
| The flag --dry-run=client simulates the operation on the client side only, and avoids cluster connections | S11 | "--dry-run=client simulates the operation client-side only and avoids cluster connections." |
| The pending-install state is one of the states that the status of a release can have, according to the helm status page | S48 | "state of the release (can be: unknown, deployed, uninstalled, superseded, failed, uninstalling, pending-install, pending-upgrade or pending-rollback)" |
| After a first helm install, a release has release number 1 | S7 | "After a first helm install, a release will have release number 1." |
| The docs say that validation occurs when helm lint is invoked | S8 | "Validation occurs when any of the following commands are invoked: helm install helm upgrade helm lint helm template" |
| The docs say that validation also occurs when helm template is invoked | S8 | "Validation occurs when any of the following commands are invoked: helm install helm upgrade helm lint helm template" |
| Any value that would normally be looked up in the cluster is faked, and none of the server-side testing of chart validity is done | S11 | "Any values that would normally be looked up or retrieved in-cluster will be faked locally." |
| Any value that would normally be looked up in the cluster is faked, and none of the server-side testing of chart validity is done | S11 | "Additionally, none of the server-side testing of chart validity (e.g. whether an API is supported) is done." |
| It lives under templates/ as a workload definition | S17 | "A test in a helm chart lives under the templates/ directory" |
| It lives under templates/ as a workload definition , and helm test runs it for a deployed release | S16 | "The argument this command takes is the name of a deployed release." |
| The docs say that this command packages a chart into a versioned chart archive file | S13 | "This command packages a chart into a versioned chart archive file." |
| A chart archive is a tarred and gzipped (and optionally signed) chart | S7 | "A chart archive is a tarred and gzipped (and optionally signed) chart." |
| The docs say that provenance files are generated at packaging time and can be checked by multiple commands, notably helm install --verify | S22 | "Provenance files are generated at packaging time (helm package --sign ...), and can be checked by multiple commands, notably helm install --verify." |
| It has the three fields that the docs call required for a Component: spec.type, spec.lifecycle, and spec.owner | S28 | "The type of component as a string, e.g. website. This field is required." |
| It has the three fields that the docs call required for a Component: spec.type, spec.lifecycle, and spec.owner | S28 | "The lifecycle state of the component, e.g. production. This field is required." |
| It has the three fields that the docs call required for a Component: spec.type, spec.lifecycle, and spec.owner | S28 | "An entity reference to the owner of the component, e.g. artist-relations-team. This field is required." |
| Its owner group:default/qa-team is a string reference with all three parts, a kind, a namespace, and a name, where the docs make the kind and the namespace optional | S31 | "Optionally, the kind, followed by a colon Optionally, the namespace, followed by a forward slash The name" |
| It has no spec.owner, and the docs say that the field is required | S28 | "An entity reference to the owner of the component, e.g. artist-relations-team. This field is required." |
| By default, the docs allow sequences of letters and digits, possibly separated by -, _, or . | S28 | "The ruleset is configurable to fit your organization's needs, but the default behavior is as follows." |
| By default, the docs allow sequences of letters and digits, possibly separated by -, _, or . | S28 | "possibly separated by one of" |
| The catalog backend does more: its processors validate, analyze, and mutate the raw entity data | S30 | "Processors, that validate, analyze, and mutate the raw entity data into its final form." |
| An entity is not visible through the catalog API until it has passed through the last process | S30 | "An entity is not visible to the outside world (through the catalog API), until it has passed through the last process and landed among the final entities." |
| pack buildpack new made a buildpack.toml and the two scripts bin/detect and bin/build | S42 | "and initializes a buildpack.toml, and two executable bash scripts, bin/detect and bin/build." |
| The spec says that the positional arguments to the detect and build executables were deprecated in Buildpack API 0.8, and that the lifecycle provides these values as environment variables | S41 | "Deprecated in Buildpack API 0.8. The positional arguments to the detect and build executables are deprecated. The lifecycle provides these values as environment variables." |
| The tutorial's script reads CNB_LAYERS_DIR instead | S41 | "Absolute path of the buildpack layers directory" |
| The spec gives the exit status of /bin/detect as pass (0) or fail (100) | S41 | "Pass (0), fail (100), or error (1-99, 101+)" |
| For a given layer, the buildpack may say whether the layer is cached, intended for build, and intended for launch | S41 | "For a given layer, the buildpack MAY specify: Whether the layer is cached, intended for build, and/or intended for launch." |
| The Buildpacks tutorial says that a default start command must be set to make an app runnable | S49 | "To make your app runnable, a default start command must be set." |
| The path follows the pattern of the docs example, where the buildpack example/node-engine has the directory /layers/example_node-engine | S47 | "Reading buildpack directory: /layers/example_node-engine" |
| The docs say that pack build requires an image name | S43 | "Pack Build requires an image name, which will be generated from the source code." |
| The docs say that pack build requires an image name , that you can use --path to specify another source code directory | S43 | "Build defaults to the current directory, but you can use --path to specify another source code directory." |
| The docs say that pack build requires an image name , that you can use --path to specify another source code directory , and that it requires a builder, which can be provided with --builder or set with the set-default-builder comm | S43 | "Build requires a builder, which can either be provided directly to build using --builder, or can be set using the set-default-builder command." |
| The --buildpack flag accepts a path to a buildpack directory | S43 | "path to a buildpack directory (not supported on Windows)" |
| The docs say that when pack does not trust a builder, it executes five separate lifecycle binaries | S45 | "If pack doesn’t trust a builder it will continue to execute five separate lifecycle binaries" |
| pack inspect shows information about a built app image | S44 | "Show information about a built app image" |
| The spec says that a launch layer can be re-used on the next build if the buildpack that created it has the same requirements | S41 | "it can be re-used on the next build (the lifecycle can avoid re-uploading it) if the component buildpack that created the layer has the same requirements on the next build" |
| The Buildpacks docs say that given the same inputs, two builds should produce the same outputs | S40 | "Given the same inputs, two builds should produce the same outputs." |
| helm lint runs a series of tests to verify that a chart is well-formed | S10 | "This command takes a path to a chart and runs a series of tests to verify that the chart is well-formed." |
| helm template renders chart templates locally and displays the output | S11 | "Render chart templates locally and display the output." |
| The schema in values.schema.json is checked when helm lint or helm template runs | S8 | "Validation occurs when any of the following commands are invoked: helm install helm upgrade helm lint helm template" |
| helm template does none of the server-side testing of chart validity, for example whether an API is supported | S11 | "Additionally, none of the server-side testing of chart validity (e.g. whether an API is supported) is done." |
| The order of specificity of values is this: values.yaml is the default, a parent chart's values.yaml can override it, a user-supplied values file can override that, and --set parameters can override that | S19 | "values.yaml is the default, which can be overridden by a parent chart's values.yaml, which can in turn be overridden by a user-supplied values file, which can in turn be overridden by --set parameters." |
| If you give the -f flag more than once, the last, right-most file gets the priority | S12 | "The priority will be given to the last (right-most) file specified." |
| To delete a key from the default values, you can override the value of the key with null, and Helm then removes the key from the merged values | S19 | "If you need to delete a key from the default values, you may override the value of the key to be null, in which case Helm will remove the key from the overridden values merge." |
| The chart best practices say that in most cases flat should be favored over nested | S20 | "In most cases, flat should be favored over nested." |
| They also say that for optimal safety a nested value must be checked at every level | S20 | "For optimal safety, a nested value must be checked at every level" |
| To see the revision numbers of a release, run helm history RELEASE | S14 | "To see revision numbers, run 'helm history RELEASE'." |
| The command prints the historical release set as a formatted table | S15 | "The historical release set is printed as a formatted table" |
| The status of a release has its state, its revision, the list of resources that it consists of, and details on the last test suite run, if applicable | S48 | "state of the release" |
| The status of a release has its state, its revision, the list of resources that it consists of, and details on the last test suite run, if applicable | S48 | "revision of the release" |
| The status of a release has its state, its revision, the list of resources that it consists of, and details on the last test suite run, if applicable | S48 | "list of resources that this release consists of details on last test suite run, if applicable" |
| A rolled back release receives a new release number | S7 | "Importantly, a rolled back release will receive a new release number." |
| By default, release information is stored in Secrets in the namespace of the release | S21 | "By default, release information is stored in Secrets in the namespace of the release." |
| helm test runs the tests for a deployed release | S16 | "The test command runs the tests for a release. The argument this command takes is the name of a deployed release." |
| The container of a test should exit with 0 for the test to be considered a success | S17 | "The container should exit successfully (exit 0) for a test to be considered a success." |
| A chart repository is an HTTP server that houses an index.yaml file and optionally some packaged charts | S24 | "A chart repository is an HTTP server that houses an index.yaml file and optionally some packaged charts." |
| An OCI-based registry can contain zero or more Helm repositories, and each of those repositories can contain zero or more packaged Helm charts | S23 | "An OCI-based registry can contain zero or more Helm repositories and each of those repositories can contain zero or more packaged Helm charts." |
| Integrity is established by comparing a chart to a provenance record | S22 | "Integrity is established by comparing a chart to a provenance record." |
| A provenance contains a cryptographic hash of the chart archive file, the Chart.yaml data, and a signature block | S7 | "A provenance contains a cryptographic hash of the chart archive file, the Chart.yaml data, and a signature block" |
| Provenance records are stored in provenance files, alongside a packaged chart | S22 | "Provenance records are stored in provenance files, which are stored alongside a packaged chart." |
| For a chart named myapp-1.2.3.tgz, the provenance file is myapp-1.2.3.tgz.prov | S22 | "For example, if a chart is named myapp-1.2.3.tgz, its provenance file will be myapp-1.2.3.tgz.prov." |
| The Backstage Software Catalog keeps track of ownership and metadata for all the software in your ecosystem | S27 | "The Backstage Software Catalog is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem (services, websites, libraries, data pipelines, etc)." |
| It makes all the software in your company, and who owns it, discoverable | S27 | "Makes all the software in your company, and who owns it, discoverable." |
| The owner of a component is the point of contact if something goes wrong | S28 | "They will be the point of contact if something goes wrong, or if features are to be requested." |
| The docs list experimental, production, and deprecated among the well-known lifecycle values | S28 | "experimental - an experiment or early, non-production component" |
| The docs list experimental, production, and deprecated among the well-known lifecycle values | S28 | "production - an established, owned, maintained component" |
| The docs list experimental, production, and deprecated among the well-known lifecycle values | S28 | "deprecated - a component that is at the end of its lifecycle" |
| Each entity is uniquely identified by its kind, namespace, and name | S31 | "Each entity in the catalog is uniquely identified by the triplet of its kind, namespace, and name." |
| An entity is not visible through the catalog API until it has passed through the last process | S30 | "An entity is not visible to the outside world (through the catalog API), until it has passed through the last process and landed among the final entities." |
| pack inspect shows information about a built app image | S44 | "Show information about a built app image" |
| The rebaser places application layers atop a new version of the runtime base image | S39 | "The rebaser places application layers atop a new version of the runtime base image." |
| A Software Bill-of-Materials (SBOM) lists all the software components included in an image | S46 | "A Software-Bill-of-Materials (SBOM) lists all the software components included in an image." |
| The pack sbom download command downloads the app layer containing the SBOM files | S46 | "The following command will download the app layer containing the SBOM files to ./layers/sbom/... on your local filesystem." |
| The formats that are supported are CycloneDX, Syft, and Spdx | S46 | "Software-Bill-of-Materials in CycloneDX" |
| The formats that are supported are CycloneDX, Syft, and Spdx | S46 | "Syft" |
| The formats that are supported are CycloneDX, Syft, and Spdx | S46 | "and Spdx" |
| The formats that are supported are CycloneDX, Syft, and Spdx | S46 | "formats are supported." |
| The project aims to create reproducible builds of container images | S40 | "The Cloud Native Buildpacks project aims to create “Reproducible Builds” of container images." |
| If pack does not trust a builder, it runs the more privileged phases using a published lifecycle image, if one is available | S45 | "It will run the more privileged phases using a published lifecycle image" |
| If pack does not trust a builder, it runs the more privileged phases using a published lifecycle image, if one is available | S45 | "if one is available." |
| helm template fakes any value that it would normally look up in a cluster | S11 | "Any values that would normally be looked up or retrieved in-cluster will be faked locally." |
| It does none of the server-side testing of chart validity | S11 | "Additionally, none of the server-side testing of chart validity (e.g. whether an API is supported) is done." |
| A server-side dry run needs cluster connectivity | S11 | "--dry-run=server' simulates/validates the operation on the server, requiring cluster connectivity." |
| helm lint emits [ERROR] messages for things that will cause the chart to fail installation | S10 | "If the linter encounters things that will cause the chart to fail installation" |
| It emits [WARNING] messages for issues that break with convention or recommendation | S10 | "If it encounters issues that break with convention or recommendation" |
| A single chart may be installed many times into the same cluster, and create many different releases | S7 | "A single chart may be installed many times into the same cluster, and create many different releases." |
| Each time a release is upgraded or rolled back, the release number is incremented | S7 | "Each time a release is upgraded or rolled back, the release number will be incremented." |
| A rolled back release receives a new release number, and not the old one | S7 | "Importantly, a rolled back release will receive a new release number." |
| That one can override the default values.yaml | S19 | "values.yaml is the default, which can be overridden by a parent chart's values.yaml, which can in turn be overridden by a user-supplied values file, which can in turn be overridden by --set parameters." |
| If you give -f more than once, the right-most file gets the priority | S12 | "The priority will be given to the last (right-most) file specified." |
| To force a string value, use --set-string | S12 | "to force a string value use '--set-string'." |
| The Helm docs say that you should always verify the authenticity of Helm binaries before installing | S25 | "you should always verify the authenticity of Helm binaries before installing." |
| Helm has provenance tools which help chart users verify the integrity and origin of a package | S22 | "Helm has provenance tools which help chart users verify the integrity and origin of a package." |
| Suppose pack used the creator with an untrusted builder | S45 | "If pack were to use the creator lifecycle phase with an untrusted builder" |
| Then the bin/detect and bin/build of each buildpack would run within a container that has heightened privileges or access to registry credentials | S45 | "each of the buildpack’s bin/detect and bin/build processes would run within a container that has heightened privileges or access to registry credentials." |
| An entity is not visible through the catalog API until it has passed through the last process | S30 | "An entity is not visible to the outside world (through the catalog API), until it has passed through the last process and landed among the final entities." |
| By default, a name is a string of 1 to 63 characters | S28 | "The ruleset is configurable to fit your organization's needs, but the default behavior is as follows." |
| By default, a name is a string of 1 to 63 characters | S28 | "Strings of length at least 1, and at most 63" |
| By default, it is made of sequences of letters and digits, possibly separated by -, _, or . | S28 | "The ruleset is configurable to fit your organization's needs, but the default behavior is as follows." |
| By default, it is made of sequences of letters and digits, possibly separated by -, _, or . | S28 | "possibly separated by one of" |
| The spec deprecated the positional arguments to the detect and build executables in Buildpack API 0.8 | S41 | "Deprecated in Buildpack API 0.8. The positional arguments to the detect and build executables are deprecated." |
| The exit status of /bin/detect is pass (0), fail (100), or error (1-99, 101+) | S41 | "Pass (0), fail (100), or error (1-99, 101+)" |
